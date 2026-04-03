/**
 * rdx-super-agent.js — ReasonDx Orchestrator
 * ═══════════════════════════════════════════════════════════════
 * The super agent that reads ALL platform data sources and
 * synthesizes a personalized learning recommendation.
 *
 * DATA SOURCES READ:
 *   1. RPFS fingerprint (8 reasoning dimensions from localStorage)
 *   2. CoachDx milestone scores (Supabase: milestone_scores)
 *   3. Simulation sessions (Supabase: rad_study_sessions)
 *   4. Recent modules (localStorage: rdx_recent_modules)
 *   5. SpacedRep cards due (localStorage: radStudy_cards_*)
 *   6. Current user identity (localStorage: emr-current-user)
 *
 * OUTPUT:
 *   window.RdxSuperAgent.getRecommendation() → Promise<{
 *     headline: string,        // e.g. "Work on your AKI pathophysiology"
 *     reason: string,          // why this recommendation
 *     action: { label, url },  // where to go
 *     secondaryAction: { label, url } | null,
 *     urgency: 'high'|'medium'|'low',
 *     source: 'ai'|'rule'      // ai = Claude-generated, rule = fallback
 *   }>
 */

(function(window) {
  'use strict';

  var WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';
  var SB_URL     = 'https://lpwbiqpojisqgezycupw.supabase.co';
  var SB_KEY     = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  // ─── Supabase client ───────────────────────────────────────────
  function getSB() {
    if (window.supabase && window.supabase.createClient) {
      return window.supabase.createClient(SB_URL, SB_KEY);
    }
    return null;
  }

  // ═══════════════════════════════════════════════════════════════
  // DATA COLLECTORS — each returns a structured object or null
  // ═══════════════════════════════════════════════════════════════

  // 1. RPFS fingerprint — 8 reasoning dimensions
  function getRPFS() {
    try {
      var events = JSON.parse(localStorage.getItem('rdx-rpfs-events') || '[]');
      if (!events.length) return null;
      var dims = {};
      events.forEach(function(e) {
        if (e.dimensions) {
          Object.keys(e.dimensions).forEach(function(d) {
            if (!dims[d]) dims[d] = [];
            dims[d].push(e.dimensions[d]);
          });
        }
      });
      var scores = {};
      Object.keys(dims).forEach(function(d) {
        var arr = dims[d];
        scores[d] = Math.round(arr.reduce(function(a,b){return a+b;},0) / arr.length);
      });
      // Find weakest dimension
      var weakest = Object.entries(scores).sort(function(a,b){return a[1]-b[1];})[0];
      return { scores: scores, weakest: weakest ? weakest[0] : null, weakestScore: weakest ? weakest[1] : null, eventCount: events.length };
    } catch(e) { return null; }
  }

  // 2. CoachDx milestone scores from Supabase
  function getMilestones(userId) {
    var sb = getSB();
    if (!sb || !userId) return Promise.resolve(null);
    return sb.from('milestone_scores')
      .select('milestone, level, updated_at')
      .eq('user_id', userId)
      .order('level')
      .limit(20)
      .then(function(r) {
        if (r.error || !r.data || !r.data.length) return null;
        var weak = r.data.filter(function(m) { return m.level <= 2; });
        var strong = r.data.filter(function(m) { return m.level >= 4; });
        return {
          total: r.data.length,
          weak: weak.map(function(m) { return m.milestone; }),
          strong: strong.map(function(m) { return m.milestone; }),
          weakest: weak[0] ? weak[0].milestone : null
        };
      })
      .catch(function() { return null; });
  }

  // 3. Simulation sessions from Supabase
  function getSessions(userId) {
    var sb = getSB();
    if (!sb || !userId) return Promise.resolve(null);
    return sb.from('rad_study_sessions')
      .select('case_id, diagnosis, status, completed_at, env_history_score, history_score')
      .eq('student_name', userId)
      .eq('status', 'complete')
      .order('completed_at', { ascending: false })
      .limit(10)
      .then(function(r) {
        if (r.error || !r.data || !r.data.length) return null;
        var sessions = r.data;
        var avgHist = sessions.reduce(function(a,s){return a+(s.history_score||0);},0) / sessions.length;
        return {
          count: sessions.length,
          recent: sessions[0],
          avgHistoryScore: Math.round(avgHist * 10) / 10,
          lastDiagnosis: sessions[0] ? sessions[0].diagnosis : null,
          casesCompleted: sessions.map(function(s){return s.case_id;})
        };
      })
      .catch(function() { return null; });
  }

  // 4. Recent modules
  function getRecentModules() {
    try {
      return JSON.parse(localStorage.getItem('rdx_recent_modules') || '[]');
    } catch(e) { return []; }
  }

  // 5. SpacedRep cards due
  function getDueCards() {
    try {
      var count = 0;
      var now = new Date().toISOString();
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && key.startsWith('radStudy_cards_')) {
          var cards = JSON.parse(localStorage.getItem(key) || '[]');
          count += cards.filter(function(c) { return c.nextReview <= now; }).length;
        }
      }
      return count;
    } catch(e) { return 0; }
  }

  // 6. Current user
  function getCurrentUser() {
    try {
      var u = JSON.parse(localStorage.getItem('emr-current-user') || 'null');
      if (u && u.username && !u._guest) return u;
      // Also check Supabase session
      var s = JSON.parse(localStorage.getItem('sb-lpwbiqpojisqgezycupw-auth-token') || 'null');
      if (s && s.user) return { username: s.user.email, displayName: s.user.email, supabaseId: s.user.id };
      return null;
    } catch(e) { return null; }
  }

  // ═══════════════════════════════════════════════════════════════
  // RULE-BASED FALLBACK — no Claude needed, instant
  // ═══════════════════════════════════════════════════════════════
  function ruleBasedRecommendation(profile) {
    var dueCards = profile.dueCards || 0;
    var rpfs = profile.rpfs;
    var milestones = profile.milestones;
    var sessions = profile.sessions;
    var recent = profile.recentModules || [];

    // Highest urgency: cards due
    if (dueCards >= 5) {
      return {
        headline: dueCards + ' review cards are due',
        reason: 'Spaced repetition is most effective when done on schedule. These cards are past their optimal review window.',
        action: { label: 'Do Review Cards', url: '/study-hub.html' },
        secondaryAction: null,
        urgency: 'high',
        source: 'rule'
      };
    }

    // RPFS weakness
    if (rpfs && rpfs.weakest && rpfs.weakestScore < 60) {
      var dimMap = {
        'Bayesian Updating': { url: '/CoachDx/mentor-chat.html?topic=Diagnostic+Reasoning', label: 'Practice Bayesian Reasoning' },
        'Hypothesis Generation': { url: '/browse.html?mode=simulate', label: 'Run a Simulation' },
        'Metacognition': { url: '/CoachDx/mentor-chat.html?topic=Metacognition', label: 'Coach on Metacognition' },
        'Problem Representation': { url: '/CoachDx/mentor-chat.html?topic=Clinical+Reasoning', label: 'Practice Problem Representation' },
        'Cognitive Flexibility': { url: '/browse.html?mode=simulate', label: 'Try a Harder Case' },
        'Data Gathering': { url: '/browse.html?mode=practice', label: 'Work a Virtual EMR Case' },
        'Diagnostic Verification': { url: '/CoachDx/mentor-chat.html?topic=Diagnostic+Verification', label: 'Practice with CoachDx' },
        'Illness Script Matching': { url: '/mechanism/index.html', label: 'Study Pathophysiology' }
      };
      var mapped = dimMap[rpfs.weakest] || { url: '/browse.html', label: 'Practice Now' };
      return {
        headline: 'Strengthen your ' + rpfs.weakest,
        reason: 'Across your last ' + (rpfs.eventCount || 'recent') + ' cases, this is your lowest-scoring reasoning dimension.',
        action: { label: mapped.label, url: mapped.url },
        secondaryAction: { label: 'View All Modules', url: '/browse.html' },
        urgency: 'medium',
        source: 'rule'
      };
    }

    // CoachDx weak milestone
    if (milestones && milestones.weakest) {
      return {
        headline: 'Deep-dive on ' + milestones.weakest,
        reason: 'Your CoachDx score for this topic is below target. A focused session can move the needle.',
        action: { label: 'Coach Me on This', url: '/CoachDx/mentor-chat.html?topic=' + encodeURIComponent(milestones.weakest) },
        secondaryAction: { label: 'Browse Cases', url: '/browse.html?mode=simulate' },
        urgency: 'medium',
        source: 'rule'
      };
    }

    // Haven't simulated recently
    if (recent.indexOf('simulate') === -1 && recent.indexOf('simulation') === -1) {
      return {
        headline: 'Run a clinical simulation',
        reason: 'You haven\'t done a full simulation recently. Simulations are the highest-yield way to practice integrated reasoning.',
        action: { label: 'Start a Case', url: '/browse.html?mode=simulate' },
        secondaryAction: { label: 'Practice EMR', url: '/browse.html?mode=practice' },
        urgency: 'low',
        source: 'rule'
      };
    }

    // Generic
    return {
      headline: 'Keep your streak going',
      reason: 'Even 10 minutes of focused practice builds clinical reasoning. Pick any mode to continue.',
      action: { label: 'Browse All Content', url: '/browse.html' },
      secondaryAction: null,
      urgency: 'low',
      source: 'rule'
    };
  }

  // ═══════════════════════════════════════════════════════════════
  // AI RECOMMENDATION — Claude synthesizes all sources
  // ═══════════════════════════════════════════════════════════════
  function aiRecommendation(profile) {
    var summary = buildProfileSummary(profile);

    var systemPrompt = [
      'You are the ReasonDx learning orchestrator. Based on a medical student\'s performance data across all platform modules, generate a single, specific, actionable learning recommendation.',
      '',
      'Respond ONLY with a JSON object — no preamble, no markdown fences:',
      '{',
      '  "headline": "short imperative phrase (max 8 words)",',
      '  "reason": "1-2 sentences explaining why. Reference specific data. Be direct.",',
      '  "action": { "label": "button label", "url": "relative URL" },',
      '  "secondaryAction": { "label": "button label", "url": "relative URL" } or null,',
      '  "urgency": "high" or "medium" or "low"',
      '}',
      '',
      'Available URLs: /browse.html (all content), /browse.html?mode=simulate (simulations),',
      '/browse.html?mode=practice (Virtual EMR), /CoachDx/mentor-chat.html?topic=TOPIC (coaching),',
      '/mechanism/index.html (pathophysiology), /study-hub.html (spaced repetition).',
      '',
      'Rules: Prioritize specific gaps over generic encouragement. If RPFS data shows a weak',
      'reasoning dimension, address it directly. If milestone data shows a weak topic, link to',
      'CoachDx for that topic. If due cards exist, make that high urgency. Never fabricate data.'
    ].join('\n');

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

  function buildProfileSummary(p) {
    var lines = ['STUDENT LEARNING PROFILE:'];
    var user = p.user;
    if (user) lines.push('Student: ' + (user.displayName || user.username));

    if (p.dueCards > 0) lines.push('SpacedRep cards due: ' + p.dueCards);

    if (p.rpfs) {
      lines.push('RPFS reasoning dimensions (0-100):');
      Object.entries(p.rpfs.scores || {}).forEach(function(e) {
        lines.push('  ' + e[0] + ': ' + e[1]);
      });
      if (p.rpfs.weakest) lines.push('Weakest dimension: ' + p.rpfs.weakest + ' (' + p.rpfs.weakestScore + ')');
    } else {
      lines.push('RPFS: no data yet');
    }

    if (p.milestones) {
      lines.push('CoachDx milestones — weak topics: ' + (p.milestones.weak.slice(0,5).join(', ') || 'none'));
      if (p.milestones.strong.length) lines.push('Strong topics: ' + p.milestones.strong.slice(0,3).join(', '));
    } else {
      lines.push('CoachDx milestones: no data yet');
    }

    if (p.sessions) {
      lines.push('Simulations completed: ' + p.sessions.count);
      lines.push('Avg history score: ' + p.sessions.avgHistoryScore + '/2');
      if (p.sessions.lastDiagnosis) lines.push('Last case: ' + p.sessions.lastDiagnosis);
    } else {
      lines.push('Simulations: no data yet');
    }

    if (p.recentModules && p.recentModules.length) {
      lines.push('Recently used modules: ' + p.recentModules.slice(0,5).join(', '));
    }

    return lines.join('\n');
  }

  // ═══════════════════════════════════════════════════════════════
  // MAIN: collect all data, then get recommendation
  // ═══════════════════════════════════════════════════════════════
  function getRecommendation() {
    var user = getCurrentUser();
    var userId = user ? (user.supabaseId || user.username) : null;

    var rpfs = getRPFS();
    var dueCards = getDueCards();
    var recentModules = getRecentModules();

    return Promise.all([
      getMilestones(userId),
      getSessions(userId)
    ]).then(function(results) {
      var profile = {
        user: user,
        rpfs: rpfs,
        dueCards: dueCards,
        recentModules: recentModules,
        milestones: results[0],
        sessions: results[1]
      };

      // Try AI recommendation first; fall back to rules
      return aiRecommendation(profile).then(function(aiRec) {
        return aiRec || ruleBasedRecommendation(profile);
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // EXPORTS
  // ═══════════════════════════════════════════════════════════════
  window.RdxSuperAgent = {
    getRecommendation: getRecommendation,
    getCurrentUser: getCurrentUser,
    getRPFS: getRPFS,
    getDueCards: getDueCards,
    version: '1.0.0'
  };

})(window);
