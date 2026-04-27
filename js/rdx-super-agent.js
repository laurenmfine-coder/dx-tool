/**
 * rdx-super-agent.js — ReasonDx Orchestrator v2
 * ═══════════════════════════════════════════════════════════════
 * AUGMENTED: adds longitudinal trajectory, cross-source synthesis,
 * time-aware recommendations, EPA gap detection, and session
 * context (time of day, days since last session).
 *
 * DATA SOURCES:
 *   1. RPFS fingerprint (8 dimensions, localStorage)
 *   2. CoachDx milestones (Supabase)
 *   3. Simulation sessions (Supabase — last 20, not 10)
 *   4. Recent modules (localStorage)
 *   5. SpacedRep cards due (localStorage)
 *   6. Current user identity (localStorage / Supabase auth)
 *   7. MetaReasoning theory (localStorage rdx-meta-theory)    NEW
 *   8. EPA evidence (localStorage via RdxCompetency)          NEW
 *   9. Session timing (time of day, days since last session)  NEW
 *
 * OUTPUT:
 *   RdxSuperAgent.getRecommendation() → Promise<recommendation>
 *   RdxSuperAgent.getTrajectory()     → { direction, evidence }  NEW
 */

(function(window) {
  'use strict';

  var WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';
  var SB_URL     = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
  var SB_KEY     = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_ANON_KEY)||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  function getSB() {
    if (window.supabase && window.supabase.createClient) return window._rdxSbClient || (window._rdxSbClient = window.supabase.createClient(SB_URL, SB_KEY))
    return null;
  }

  // ═══════════════════════════════════════════════════════════════
  // DATA COLLECTORS
  // ═══════════════════════════════════════════════════════════════

  function getRPFS() {
    try {
      var events = JSON.parse(localStorage.getItem('rdx-rpfs-events') || '[]');
      if (!events.length) return null;
      var dims = {};
      events.forEach(function(e) {
        if (e.dimensions) Object.keys(e.dimensions).forEach(function(d) {
          if (!dims[d]) dims[d] = [];
          dims[d].push(e.dimensions[d]);
        });
      });
      var scores = {};
      Object.keys(dims).forEach(function(d) {
        var arr = dims[d];
        scores[d] = Math.round(arr.reduce(function(a,b){return a+b;},0) / arr.length);
      });
      var sorted = Object.entries(scores).sort(function(a,b){return a[1]-b[1];});
      var weakest  = sorted[0];
      var strongest = sorted[sorted.length-1];

      // Trajectory: compare first half vs second half of events
      var trajectory = null;
      if (events.length >= 6) {
        var half = Math.floor(events.length / 2);
        var earlyEvents = events.slice(-events.length, -half);
        var recentEvents = events.slice(-half);
        var avgScore = function(evs) {
          var all = [];
          evs.forEach(function(e) { if (e.dimensions) Object.values(e.dimensions).forEach(function(v){all.push(v);}); });
          return all.length ? all.reduce(function(a,b){return a+b;},0)/all.length : 50;
        };
        var earlyAvg  = avgScore(earlyEvents);
        var recentAvg = avgScore(recentEvents);
        var delta = recentAvg - earlyAvg;
        trajectory = delta > 5 ? 'improving' : delta < -5 ? 'declining' : 'stable';
      }

      return {
        scores: scores, weakest: weakest ? weakest[0] : null, weakestScore: weakest ? weakest[1] : null,
        strongest: strongest ? strongest[0] : null, strongestScore: strongest ? strongest[1] : null,
        eventCount: events.length, trajectory: trajectory
      };
    } catch(e) { return null; }
  }

  function getMilestones(userId) {
    var sb = getSB();
    if (!sb || !userId) return Promise.resolve(null);
    return sb.from('milestone_scores').select('milestone, level, updated_at')
      .eq('user_id', userId).order('level').limit(30)
      .then(function(r) {
        if (r.error || !r.data || !r.data.length) return null;
        var weak   = r.data.filter(function(m){return m.level <= 2;});
        var strong = r.data.filter(function(m){return m.level >= 4;});
        return {
          total: r.data.length,
          weak:   weak.map(function(m){return m.milestone;}),
          strong: strong.map(function(m){return m.milestone;}),
          weakest: weak[0] ? weak[0].milestone : null
        };
      }).catch(function(){return null;});
  }

  function getSessions(userId) {
    var sb = getSB();
    if (!sb || !userId) return Promise.resolve(null);
    return sb.from('rad_study_sessions')
      .select('case_id, diagnosis, category, status, completed_at, env_history_score, history_score, total_turns')
      .eq('student_name', userId).eq('status', 'complete')
      .order('completed_at', { ascending: false }).limit(20)
      .then(function(r) {
        if (r.error || !r.data || !r.data.length) return null;
        var sessions = r.data;
        var avgHist = sessions.reduce(function(a,s){return a+(s.history_score||0);},0) / sessions.length;

        // Trajectory: first 5 vs most recent 5
        var trajectory = null;
        if (sessions.length >= 10) {
          var recent5 = sessions.slice(0, 5);
          var older5  = sessions.slice(-5);
          var avg5 = function(ss) { return ss.reduce(function(a,s){return a+(s.history_score||0);},0)/ss.length; };
          var delta = avg5(recent5) - avg5(older5);
          trajectory = delta > 0.2 ? 'improving' : delta < -0.2 ? 'declining' : 'stable';
        }

        // Days since last session
        var daysSinceLast = null;
        if (sessions[0] && sessions[0].completed_at) {
          daysSinceLast = Math.round((Date.now() - new Date(sessions[0].completed_at).getTime()) / 86400000);
        }

        // Category distribution
        var catCounts = {};
        sessions.forEach(function(s) {
          var cat = s.category || 'general';
          catCounts[cat] = (catCounts[cat] || 0) + 1;
        });
        var topCat = Object.entries(catCounts).sort(function(a,b){return b[1]-a[1];})[0];

        return {
          count: sessions.length, avgHistoryScore: Math.round(avgHist * 10) / 10,
          lastDiagnosis: sessions[0] ? sessions[0].diagnosis : null,
          casesCompleted: sessions.map(function(s){return s.case_id;}),
          trajectory: trajectory, daysSinceLast: daysSinceLast,
          topCategory: topCat ? topCat[0] : null
        };
      }).catch(function(){return null;});
  }

  // NEW: MetaReasoning theory from last session
  function getLastTheory() {
    try {
      var stored = JSON.parse(localStorage.getItem('rdx-meta-theory') || 'null');
      if (!stored) return null;
      var age = Date.now() - new Date(stored.sessionAt || 0).getTime();
      if (age > 14 * 24 * 60 * 60 * 1000) return null; // stale after 14 days
      return stored;
    } catch(e) { return null; }
  }

  // NEW: EPA gaps from Competency map
  function getEPAGaps() {
    try {
      if (!window.RdxCompetency) return null;
      var rpfsEvents = JSON.parse(localStorage.getItem('rdx-rpfs-events') || '[]');
      if (!rpfsEvents.length) return null;
      // Simple heuristic: EPAs linked to weak RPFS dimensions
      var rpfs = getRPFS();
      if (!rpfs || !rpfs.weakest) return null;
      var AM = window.RdxCompetency.ActivityMapper;
      var rpfsMap = AM.mapRPFSToEPAs(rpfs.scores);
      var weakEPAs = Object.entries(rpfsMap)
        .filter(function(e) { return e[1].avgScore < 60; })
        .map(function(e) { return e[0]; })
        .slice(0, 3);
      return weakEPAs.length ? weakEPAs : null;
    } catch(e) { return null; }
  }

  // NEW: Session timing context
  function getTimingContext() {
    var hr = new Date().getHours();
    var timeOfDay = hr < 6 ? 'night' : hr < 12 ? 'morning' : hr < 18 ? 'afternoon' : hr < 22 ? 'evening' : 'night';
    var dayOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];
    return { timeOfDay: timeOfDay, dayOfWeek: dayOfWeek, hour: hr };
  }

  function getRecentModules() {
    try { return JSON.parse(localStorage.getItem('rdx_recent_modules') || '[]'); } catch(e) { return []; }
  }

  function getDueCards() {
    try {
      var count = 0;
      var now = new Date().toISOString();
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && key.startsWith('radStudy_cards_')) {
          var cards = JSON.parse(localStorage.getItem(key) || '[]');
          count += cards.filter(function(c){return c.nextReview <= now;}).length;
        }
      }
      return count;
    } catch(e) { return 0; }
  }

  function getCurrentUser() {
    try {
      var u = JSON.parse(localStorage.getItem('emr-current-user') || 'null');
      if (u && u.username && !u._guest) return u;
      var s = JSON.parse(localStorage.getItem('sb-lpwbiqpojisqgezycupw-auth-token') || 'null');
      if (s && s.user) return { username: s.user.email, displayName: s.user.email, supabaseId: s.user.id };
      return null;
    } catch(e) { return null; }
  }

  // ═══════════════════════════════════════════════════════════════
  // LONGITUDINAL TRAJECTORY — NEW
  // ═══════════════════════════════════════════════════════════════
  function getTrajectory(profile) {
    var evidence = [];
    var direction = 'stable';

    if (profile.rpfs && profile.rpfs.trajectory) {
      evidence.push('RPFS ' + profile.rpfs.trajectory);
      if (profile.rpfs.trajectory === 'improving') direction = 'improving';
      if (profile.rpfs.trajectory === 'declining') direction = 'declining';
    }
    if (profile.sessions && profile.sessions.trajectory) {
      evidence.push('simulation scores ' + profile.sessions.trajectory);
      if (profile.sessions.trajectory === 'declining') direction = 'declining';
      if (profile.sessions.trajectory === 'improving' && direction !== 'declining') direction = 'improving';
    }
    return { direction: direction, evidence: evidence };
  }

  // ═══════════════════════════════════════════════════════════════
  // RULE-BASED FALLBACK
  // ═══════════════════════════════════════════════════════════════
  function ruleBasedRecommendation(profile) {
    var dueCards   = profile.dueCards || 0;
    var rpfs       = profile.rpfs;
    var milestones = profile.milestones;
    var sessions   = profile.sessions;
    var theory     = profile.lastTheory;
    var timing     = profile.timing;
    var trajectory = getTrajectory(profile);

    // Priority 0: Declining trajectory — urgent
    if (trajectory.direction === 'declining') {
      return {
        headline: 'Your reasoning scores are declining',
        reason: 'Performance across recent sessions is trending down (' + trajectory.evidence.join(', ') + '). A focused review session can reverse this.',
        action: { label: 'Review Weak Areas', url: '/CoachDx/mentor-chat.html' },
        secondaryAction: { label: 'View Cognitive Portrait', url: '/cognitive-portrait.html' },
        urgency: 'high', source: 'rule'
      };
    }

    // Priority 1: Cards due
    if (dueCards >= 5) {
      return {
        headline: dueCards + ' review cards are due',
        reason: 'Spaced repetition is most effective on schedule. These cards are past their optimal window.',
        action: { label: 'Do Review Cards', url: '/study-hub.html' },
        secondaryAction: null, urgency: 'high', source: 'rule'
      };
    }

    // Priority 2: Picked up where you left off (return visitor)
    if (sessions && sessions.daysSinceLast !== null && sessions.daysSinceLast >= 3) {
      return {
        headline: 'Welcome back — ' + sessions.daysSinceLast + ' days since your last session',
        reason: 'Consistent practice builds stronger clinical reasoning. Your last case was ' + (sessions.lastDiagnosis || 'a recent simulation') + '.',
        action: { label: 'Jump Back In', url: '/browse.html?mode=simulate' },
        secondaryAction: { label: 'Review Your Portrait', url: '/cognitive-portrait.html' },
        urgency: 'medium', source: 'rule'
      };
    }

    // Priority 3: Last session error mode — targeted next case
    if (theory && theory.nextCase && theory.nextCase.caseId && theory.mode !== 'CALIBRATED') {
      var modeLabel = theory.label || theory.mode;
      return {
        headline: 'Address your ' + modeLabel + ' from last session',
        reason: theory.reason || ('Last session showed ' + modeLabel + '. This targeted case challenges that specific pattern.'),
        action: { label: 'Try Recommended Case', url: '/virtual-emr.html?case=' + encodeURIComponent(theory.nextCase.caseId) },
        secondaryAction: { label: 'View Portrait', url: '/cognitive-portrait.html' },
        urgency: 'high', source: 'rule'
      };
    }

    // Priority 4: RPFS weakness
    if (rpfs && rpfs.weakest && rpfs.weakestScore < 60) {
      var dimMap = {
        'Bayesian Updating':      { url: '/CoachDx/mentor-chat.html?topic=Diagnostic+Reasoning', label: 'Practice Bayesian Reasoning' },
        'Hypothesis Generation':  { url: '/browse.html?mode=simulate', label: 'Run a Simulation' },
        'Metacognition':          { url: '/CoachDx/mentor-chat.html?topic=Metacognition', label: 'Coach on Metacognition' },
        'Problem Representation': { url: '/CoachDx/mentor-chat.html?topic=Clinical+Reasoning', label: 'Practice Problem Representation' },
        'Cognitive Flexibility':  { url: '/browse.html?mode=simulate', label: 'Try a Harder Case' },
        'Data Gathering':         { url: '/browse.html?mode=practice', label: 'Work a Virtual EMR Case' },
        'Diagnostic Verification':{ url: '/CoachDx/mentor-chat.html?topic=Diagnostic+Verification', label: 'Practice with CoachDx' },
        'Illness Script Matching':{ url: '/mechanism/index.html', label: 'Study Pathophysiology' }
      };
      var mapped = dimMap[rpfs.weakest] || { url: '/browse.html', label: 'Practice Now' };
      return {
        headline: 'Strengthen ' + rpfs.weakest,
        reason: 'Your lowest RPFS dimension (' + rpfs.weakestScore + '/100) across ' + rpfs.eventCount + ' sessions.',
        action: { label: mapped.label, url: mapped.url },
        secondaryAction: { label: 'View All Modules', url: '/browse.html' },
        urgency: 'medium', source: 'rule'
      };
    }

    // Priority 5: CoachDx gap
    if (milestones && milestones.weakest) {
      return {
        headline: 'Deep-dive on ' + milestones.weakest,
        reason: 'CoachDx score for this topic is below target. A focused session can close this gap.',
        action: { label: 'Coach Me on This', url: '/CoachDx/mentor-chat.html?topic=' + encodeURIComponent(milestones.weakest) },
        secondaryAction: { label: 'Browse Cases', url: '/browse.html?mode=simulate' },
        urgency: 'medium', source: 'rule'
      };
    }

    // Priority 6: Time-of-day context
    if (timing) {
      if (timing.timeOfDay === 'morning') {
        return {
          headline: 'Good morning — start with a simulation',
          reason: 'Morning sessions show higher cognitive performance. This is your best time for complex case reasoning.',
          action: { label: 'Start a Case', url: '/browse.html?mode=simulate' },
          secondaryAction: null, urgency: 'low', source: 'rule'
        };
      }
      if (timing.timeOfDay === 'night') {
        return {
          headline: 'Late-night review — try CoachDx',
          reason: 'CoachDx coaching sessions are effective for review when cognitive load is high. Save complex simulations for tomorrow.',
          action: { label: 'Quick Coaching Session', url: '/CoachDx/mentor-chat.html' },
          secondaryAction: null, urgency: 'low', source: 'rule'
        };
      }
    }

    // Generic
    return {
      headline: 'Keep your streak going',
      reason: 'Even 10 minutes of focused practice builds clinical reasoning. Pick any mode to continue.',
      action: { label: 'Browse All Content', url: '/browse.html' },
      secondaryAction: null, urgency: 'low', source: 'rule'
    };
  }

  // ═══════════════════════════════════════════════════════════════
  // AI RECOMMENDATION — Claude synthesizes all 9 sources
  // ═══════════════════════════════════════════════════════════════
  function aiRecommendation(profile) {
    var systemPrompt = [
      'You are the ReasonDx learning orchestrator. Generate a single, specific, actionable learning recommendation.',
      'CRITICAL: Profession context is source 10. Calibrate ALL recommendations to the learner\'s profession.',
      'For pharmacy: prioritize mechanism modules and pharmacotherapy CoachDx topics.',
      'For PT/OT: prioritize musculoskeletal/neurology cases and functional reasoning.',
      'For optometry: prioritize ocular-systemic bridging cases.',
      'For PA/nursing: prioritize generalist clinical cases across all systems.',
      'For MBS/pre-health: prioritize mechanism modules and MCAT-aligned cases.',
      'Board exam alignment: recommend content that closes gaps toward their specific board target.',
      'You have access to 9 data sources. Synthesize them to find the HIGHEST-LEVERAGE intervention.',
      'Prioritize: (1) declining trajectory, (2) error mode from last session, (3) RPFS weaknesses,',
      '(4) CoachDx gaps, (5) time-of-day fit, (6) days since last session.',
      '',
      'Respond ONLY with valid JSON, no preamble:',
      '{ "headline": "max 8 words", "reason": "1-2 sentences with specific data",',
      '  "action": {"label":"button text","url":"relative URL"},',
      '  "secondaryAction": {"label":"text","url":"URL"} or null,',
      '  "urgency": "high"|"medium"|"low" }',
      '',
      'URLs: /browse.html, /browse.html?mode=simulate, /browse.html?mode=practice,',
      '/CoachDx/mentor-chat.html?topic=TOPIC, /mechanism/index.html,',
      '/cognitive-portrait.html, /ilp.html, /study-hub.html'
    ].join('\n');

    var summary = buildProfileSummary(profile);

    return fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'passthrough',
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: systemPrompt,
        messages: [{ role: 'user', content: summary }]
      })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      var text = (data.content && data.content[0] && data.content[0].text) || '';
      text = text.replace(/```json\s*|```\s*/g, '').trim();
      var rec = JSON.parse(text);
      rec.source = 'ai';
      return rec;
    })
    .catch(function() { return null; });
  }


  // ── PROFESSION CONTEXT COLLECTOR ─────────────────────────────────────────
  function getProfessionContext() {
    try {
      var u = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
      var pp = u.professionProfile || {};
      var bs = localStorage.getItem('rdx-baseline-scores');
      var baselineScores = bs ? JSON.parse(bs) : null;
      var PROF_LABELS = {
        medicine:'Medicine (MD/DO)', pa:'Physician Assistant', pharmacy:'Pharmacy (PharmD)',
        optometry:'Optometry (OD)', dentistry:'Dentistry (DMD/DDS)', pt:'Physical Therapy (DPT)',
        ot:'Occupational Therapy', nursing:'Nursing (BSN/NP)', mbs:'Biomedical Sciences',
        other:'Health Professional'
      };
      var BOARD_TARGETS = {
        medicine:'USMLE/COMLEX', pa:'PANCE', pharmacy:'NAPLEX', optometry:'NBEO',
        dentistry:'NBDE/INBDE', pt:'NPTE', ot:'NBCOT', nursing:'NCLEX/AANP', mbs:'MCAT', other:'varies'
      };
      var KNOWN_ERROR_MODES = {
        medicine:  'anchoring, premature closure, availability bias',
        pa:        'anchoring on presenting complaint, threshold confusion',
        pharmacy:  'drug-class anchoring, patient-factor neglect, mechanism-skip',
        optometry: 'ocular anchoring, missing systemic cause',
        dentistry: 'local anchoring, systemic miss, pain attribution error',
        pt:        'structural anchoring, systemic miss, red-flag under-screening',
        ot:        'functional skip, diagnosis avoidance',
        nursing:   'protocol anchoring, surveillance-action gap',
        mbs:       'mechanism fragmentation, clinical bridge gap',
        other:     'anchoring, premature closure'
      };
      if (!pp.professionId) return null;
      return {
        professionId: pp.professionId,
        label: PROF_LABELS[pp.professionId] || pp.professionId,
        trackId: pp.trackId || null,
        programName: pp.programName || null,
        yearOfTraining: pp.yearOfTraining || null,
        boardTarget: BOARD_TARGETS[pp.professionId] || 'varies',
        knownErrorModes: KNOWN_ERROR_MODES[pp.professionId] || '',
        baselineScores: baselineScores,
        researchConsent: pp.researchConsent || false
      };
    } catch(e) { return null; }
  }

  function buildProfileSummary(p) {
    var lines = ['STUDENT PROFILE (10 sources):']; /* 10th source: profession context */
    if (p.user) lines.push('Student: ' + (p.user.displayName || p.user.username));
    if (p.timing) lines.push('Context: ' + p.timing.timeOfDay + ', ' + p.timing.dayOfWeek);

    if (p.profession) {
      lines.push('--- PROFESSION CONTEXT ---');
      lines.push('Profession: ' + p.profession.label);
      if (p.profession.trackId)        lines.push('Track: ' + p.profession.trackId);
      if (p.profession.programName)    lines.push('Program: ' + p.profession.programName);
      if (p.profession.yearOfTraining) lines.push('Year of training: ' + p.profession.yearOfTraining);
      lines.push('Board exam target: ' + p.profession.boardTarget);
      lines.push('Known error modes for profession: ' + p.profession.knownErrorModes);
      if (p.profession.baselineScores && p.profession.baselineScores._composite !== null) {
        var _bs = p.profession.baselineScores;
        lines.push('Baseline reasoning composite: ' + Math.round((_bs._composite || 0) * 100) + '%');
        ['hypothesis_generation','anchoring_bias','uncertainty_tolerance','management_reasoning'].forEach(function(d) {
          if (_bs[d] !== null && _bs[d] !== undefined)
            lines.push('  Baseline ' + d.replace(/_/g,' ') + ': ' + Math.round(_bs[d] * 100) + '%');
        });
      }
      lines.push('--- END PROFESSION ---');
    }

    if (p.dueCards > 0) lines.push('Cards due: ' + p.dueCards);

    if (p.rpfs) {
      lines.push('RPFS (8 reasoning dimensions, 0-100):');
      Object.entries(p.rpfs.scores || {}).forEach(function(e) { lines.push('  ' + e[0] + ': ' + e[1]); });
      if (p.rpfs.weakest) lines.push('Weakest: ' + p.rpfs.weakest + ' (' + p.rpfs.weakestScore + ')');
      if (p.rpfs.trajectory) lines.push('RPFS trajectory: ' + p.rpfs.trajectory);
    } else { lines.push('RPFS: no data'); }

    if (p.milestones) {
      lines.push('CoachDx weak: ' + (p.milestones.weak.slice(0,5).join(', ') || 'none'));
      if (p.milestones.strong.length) lines.push('CoachDx strong: ' + p.milestones.strong.slice(0,3).join(', '));
    } else { lines.push('CoachDx: no data'); }

    if (p.sessions) {
      lines.push('Simulations: ' + p.sessions.count + ' total');
      lines.push('Avg history score: ' + p.sessions.avgHistoryScore + '/2');
      if (p.sessions.trajectory) lines.push('Simulation trajectory: ' + p.sessions.trajectory);
      if (p.sessions.daysSinceLast !== null) lines.push('Days since last session: ' + p.sessions.daysSinceLast);
      if (p.sessions.topCategory) lines.push('Most practiced category: ' + p.sessions.topCategory);
      if (p.sessions.lastDiagnosis) lines.push('Last diagnosis: ' + p.sessions.lastDiagnosis);
    } else { lines.push('Simulations: no data'); }

    if (p.lastTheory) {
      lines.push('Last session error mode: ' + p.lastTheory.mode + ' (' + (p.lastTheory.label || '') + ')');
      if (p.lastTheory.nextCase) lines.push('Recommended case: ' + p.lastTheory.nextCase.caseId);
    }

    if (p.epaGaps && p.epaGaps.length) lines.push('EPA gaps (below 60%): ' + p.epaGaps.join(', '));

    var trajectory = getTrajectory(p);
    lines.push('Overall trajectory: ' + trajectory.direction + ' (' + trajectory.evidence.join(', ') + ')');

    if (p.recentModules && p.recentModules.length) lines.push('Recent modules: ' + p.recentModules.slice(0,5).join(', '));

    return lines.join('\n');
  }

  // ═══════════════════════════════════════════════════════════════
  // MAIN
  // ═══════════════════════════════════════════════════════════════
  function getRecommendation() {
    var user   = getCurrentUser();
    var userId = user ? (user.supabaseId || user.username) : null;

    var profession    = getProfessionContext();
    var rpfs          = getRPFS();
    var dueCards      = getDueCards();
    var recentModules = getRecentModules();
    var lastTheory    = getLastTheory();
    var epaGaps       = getEPAGaps();
    var timing        = getTimingContext();

    return Promise.all([getMilestones(userId), getSessions(userId)]).then(function(results) {
      var profile = {
        user: user, profession: profession, rpfs: rpfs, dueCards: dueCards, recentModules: recentModules,
        milestones: results[0], sessions: results[1],
        lastTheory: lastTheory, epaGaps: epaGaps, timing: timing
      };
      return aiRecommendation(profile).then(function(aiRec) {
        return aiRec || ruleBasedRecommendation(profile);
      });
    });
  }

  window.RdxSuperAgent = {
    getRecommendation: getRecommendation,
    getTrajectory:     function() { return getTrajectory({ rpfs: getRPFS(), sessions: null }); },
    getCurrentUser:    getCurrentUser,
    getRPFS:           getRPFS,
    getDueCards:       getDueCards,
    version:           '2.0.0'
  };

})(window);
