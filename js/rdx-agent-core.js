/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx Agent Core — rdx-agent-core.js
 * ═══════════════════════════════════════════════════════════════
 * The central intelligence layer for the entire ReasonDx platform.
 * This is NOT case-specific. It provides:
 *
 * 1. NAVIGATOR — knows where the student is, where they've been,
 *    and what they should do next across all platform modules.
 * 2. UNIVERSAL SIGNAL EXTRACTOR — reads case-defined signals,
 *    not hard-coded patterns.
 * 3. BIAS FRAMEWORK — three layers:
 *    a) Biases to SIMULATE (in cases, to test the student)
 *    b) Biases to DETECT (in the student's reasoning)
 *    c) Biases to AVOID (in the agent itself)
 * 4. LEARNING PROFILE — aggregates performance across modules.
 * 5. PHASE ANALYSIS — Claude-powered reasoning evaluation at
 *    phase boundaries.
 *
 * Include on any ReasonDx page:
 *   <script src="js/rdx-agent-core.js"></script>
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  // ── CONFIG ──
  const WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';
  const SUPABASE_URL = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
  const SUPABASE_ANON_KEY = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_ANON_KEY)||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  let sb = null;
  try {
    if (window.supabase) sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch(e) { /* Supabase not loaded on this page — that's fine */ }


  // ═══════════════════════════════════════════════════════════════
  // 1. NAVIGATOR — Site-Wide Intelligent Routing
  // ═══════════════════════════════════════════════════════════════

  const Navigator = {

    // All platform modules with metadata
    modules: {
      coachdx:    { name: 'CoachDx',    url: '/CoachDx/mentor-chat.html', type: 'coaching',    icon: '\uD83E\uDDD1\u200D\u2695\uFE0F', desc: 'Socratic reasoning practice on any topic' },
      casedx:     { name: 'CaseDx',     url: '/casedx.html',              type: 'cases',       icon: '\uD83E\uDE7A', desc: 'Structured case-based clinical reasoning' },
      mechanismdx:{ name: 'MechanismDx',url: '/mechanism/index.html',     type: 'science',     icon: '\uD83D\uDD2C', desc: 'Pathophysiology and mechanism modules' },
      edboard:    { name: 'ED Board',   url: '/virtual-emr.html',         type: 'simulation',  icon: '\uD83C\uDFE5', desc: 'Emergency department simulation' },
      clinicboard:{ name: 'Clinic Board',url: '/clinic-board.html',       type: 'simulation',  icon: '\uD83D\uDCCB', desc: 'Outpatient clinic simulation' },
      radstudy:   { name: 'Simulate',  url: '/browse.html',       type: 'simulate',    icon: '\uD83C\uDFAF', desc: 'Full clinical simulation engine' },
      studyhub:   { name: 'Study Hub',  url: '/study-hub.html',           type: 'review',      icon: '\uD83D\uDCDA', desc: 'Spaced repetition and progress tracking' },
      ecg:        { name: 'ECG Trainer',url: '/ecg/index.html',           type: 'skills',      icon: '\u2764\uFE0F', desc: 'ECG interpretation practice' },
    },

    /**
     * Get personalized recommendations for what to do next.
     * Considers: current page, learning profile, time of day, recent activity.
     * Returns array of { module, reason, priority, url }
     */
    getRecommendations: function(learningProfile, currentPage) {
      var recs = [];
      var lp = learningProfile || {};
      var gaps = lp.topGaps || [];
      var recentModules = lp.recentModules || [];
      var completedCases = lp.completedCases || [];

      // Priority 1: Address identified gaps
      if (gaps.length > 0) {
        var topGap = gaps[0];
        if (topGap.category === 'History-Taking' || topGap.category === 'Clinical Reasoning') {
          recs.push({
            module: this.modules.casedx,
            reason: 'You have a gap in ' + topGap.title.toLowerCase() + '. Working a case will help.',
            priority: 1,
            url: this.modules.casedx.url
          });
        }
        if (topGap.relatedTopics && topGap.relatedTopics.length > 0) {
          recs.push({
            module: this.modules.mechanismdx,
            reason: 'Review the mechanism behind ' + topGap.relatedTopics[0] + ' to strengthen your understanding.',
            priority: 2,
            url: this.modules.mechanismdx.url + '?topic=' + encodeURIComponent(topGap.relatedTopics[0])
          });
        }
      }

      // Priority 2: SpacedRep cards due
      var dueCards = this._getDueCardCount();
      if (dueCards > 0) {
        recs.push({
          module: this.modules.studyhub,
          reason: dueCards + ' review card' + (dueCards > 1 ? 's' : '') + ' due today.',
          priority: dueCards > 5 ? 1 : 3,
          url: this.modules.studyhub.url
        });
      }

      // Priority 3: Encourage variety — suggest modules not used recently
      var allModuleKeys = Object.keys(this.modules);
      var unusedRecently = allModuleKeys.filter(function(k) {
        return recentModules.indexOf(k) === -1 && k !== 'radstudy'; // don't randomly suggest the study
      });
      if (unusedRecently.length > 0) {
        var suggest = this.modules[unusedRecently[Math.floor(Math.random() * unusedRecently.length)]];
        recs.push({
          module: suggest,
          reason: "You haven't tried " + suggest.name + " recently. " + suggest.desc,
          priority: 4,
          url: suggest.url
        });
      }

      // Priority 4: Progressive difficulty — if student has been doing well
      if (lp.avgPerformance && lp.avgPerformance > 0.7) {
        recs.push({
          module: this.modules.edboard,
          reason: "Your performance has been strong. Try the ED Board for a multi-patient challenge.",
          priority: 3,
          url: this.modules.edboard.url + '?difficulty=advanced'
        });
      }

      // Sort by priority
      recs.sort(function(a, b) { return a.priority - b.priority; });
      return recs.slice(0, 4); // Top 4 recommendations
    },

    /**
     * Generate a natural-language recommendation message using Claude.
     * This is the "intelligent navigator" — not a static list but a
     * personalized, conversational suggestion.
     */
    getAIRecommendation: async function(learningProfile, currentPage, recentActivity) {
      var systemPrompt = 'You are a medical education advisor on the ReasonDx platform. Based on the student\'s learning profile, suggest what they should do next. Be specific, warm, and concise (2-3 sentences). Reference their actual performance data. Do not use bullet points. Available modules: CoachDx (Socratic coaching), CaseDx (clinical cases), MechanismDx (pathophysiology), ED Board (emergency simulation), Clinic Board (outpatient), Study Hub (spaced repetition), ECG Trainer.';

      var profileSummary = 'Student: ' + (learningProfile.name || 'Unknown') + ', ' + (learningProfile.trainingYear || 'Unknown year') + '. ';
      if (learningProfile.topGaps && learningProfile.topGaps.length > 0) {
        profileSummary += 'Top gaps: ' + learningProfile.topGaps.map(function(g) { return g.title; }).join(', ') + '. ';
      }
      if (learningProfile.recentModules && learningProfile.recentModules.length > 0) {
        profileSummary += 'Recently used: ' + learningProfile.recentModules.join(', ') + '. ';
      }
      profileSummary += 'Current page: ' + (currentPage || 'start') + '.';

      try {
        var resp = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studyMode: true,
            studySystem: systemPrompt,
            studyModel: 'claude-haiku-4-5-20251001',
            messages: [{ role: 'user', content: profileSummary }],
            max_tokens: 300
          })
        });
        var data = await resp.json();
        return (data.content && data.content[0] && data.content[0].text) || null;
      } catch(e) {
        return null;
      }
    },

    // Check localStorage for due SpacedRep cards
    _getDueCardCount: function() {
      try {
        var count = 0;
        var now = new Date().toISOString();
        for (var i = 0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          if (key && key.startsWith('radStudy_cards_')) {
            var cards = JSON.parse(localStorage.getItem(key));
            if (Array.isArray(cards)) {
              count += cards.filter(function(c) { return c.nextReview <= now; }).length;
            }
          }
        }
        return count;
      } catch(e) { return 0; }
    },

    /**
     * Track that the student visited a module (for recommendation freshness)
     */
    trackModuleVisit: function(moduleKey) {
      try {
        var recent = JSON.parse(localStorage.getItem('rdx_recent_modules') || '[]');
        recent = recent.filter(function(m) { return m !== moduleKey; });
        recent.unshift(moduleKey);
        if (recent.length > 10) recent = recent.slice(0, 10);
        localStorage.setItem('rdx_recent_modules', JSON.stringify(recent));
      } catch(e) {}
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 2. UNIVERSAL SIGNAL EXTRACTOR
  // ═══════════════════════════════════════════════════════════════
  // Reads signal definitions from case data and tracks them.
  // Cases define WHAT to look for; this module handles HOW.

  const SignalExtractor = {

    /**
     * Initialize from a case's signal schema.
     * caseSignals = {
     *   criticalHistory: ['pets', 'home environment', ...],
     *   criticalExam: ['lung auscultation', ...],
     *   criticalTests: ['HRCT chest', ...],
     *   cannotMiss: ['SpO2 interpretation', ...],
     *   biasTraps: ['radiology report anchoring', ...],
     *   patientCues: [{ trigger: 'feels better at work', followUp: 'location pattern', turnWindow: 3 }]
     * }
     */
    init: function(caseSignals) {
      this._signals = caseSignals || {};
      this._state = {
        historyFlags: {},
        examFlags: {},
        testFlags: {},
        cannotMissFlags: {},
        cueTracking: [],
        turnsSinceCue: {}
      };

      // Initialize history flags from case definition
      var self = this;
      (this._signals.criticalHistory || []).forEach(function(h) {
        self._state.historyFlags[h] = { asked: false, integrated: false, turnAsked: null };
      });
      (this._signals.criticalExam || []).forEach(function(e) {
        self._state.examFlags[e] = { performed: false };
      });
      (this._signals.criticalTests || []).forEach(function(t) {
        self._state.testFlags[t] = { ordered: false, turnOrdered: null };
      });
      (this._signals.cannotMiss || []).forEach(function(c) {
        self._state.cannotMissFlags[c] = { addressed: false };
      });

      return this._state;
    },

    /**
     * Extract signals from a student message. Returns updated flags.
     * keywordMap is case-specific: { 'pets': ['pet','pets','animal','bird',...], ... }
     */
    extract: function(message, phase, turnNumber, keywordMap) {
      var lower = message.toLowerCase();
      var self = this;

      // Check each critical history element
      Object.keys(this._state.historyFlags).forEach(function(h) {
        var keywords = (keywordMap && keywordMap[h]) || [h];
        var matched = keywords.some(function(kw) {
          return new RegExp('\\b' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i').test(lower);
        });
        if (matched && !self._state.historyFlags[h].asked) {
          self._state.historyFlags[h].asked = true;
          self._state.historyFlags[h].turnAsked = turnNumber;
        }
      });

      // Check critical tests
      Object.keys(this._state.testFlags).forEach(function(t) {
        var keywords = (keywordMap && keywordMap[t]) || [t];
        var matched = keywords.some(function(kw) {
          return new RegExp('\\b' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i').test(lower);
        });
        if (matched && !self._state.testFlags[t].ordered) {
          self._state.testFlags[t].ordered = true;
          self._state.testFlags[t].turnOrdered = turnNumber;
        }
      });

      // Track patient cue follow-ups
      (this._signals.patientCues || []).forEach(function(cue) {
        if (self._state.turnsSinceCue[cue.trigger] !== undefined) {
          // Cue was delivered, check if student followed up
          self._state.turnsSinceCue[cue.trigger]++;
          var followUpKeywords = (keywordMap && keywordMap[cue.followUp]) || [cue.followUp];
          var followedUp = followUpKeywords.some(function(kw) {
            return lower.includes(kw.toLowerCase());
          });
          if (followedUp) {
            self._state.cueTracking.push({ cue: cue.trigger, followedUp: true, turnsToFollowUp: self._state.turnsSinceCue[cue.trigger] });
            delete self._state.turnsSinceCue[cue.trigger];
          } else if (self._state.turnsSinceCue[cue.trigger] > (cue.turnWindow || 3)) {
            self._state.cueTracking.push({ cue: cue.trigger, followedUp: false, turnsToFollowUp: null });
            delete self._state.turnsSinceCue[cue.trigger];
          }
        }
      });

      return this._state;
    },

    /**
     * Called when the patient delivers a cue (from assistant message).
     * The orchestrator checks if the patient's response contains a cue trigger.
     */
    registerCueDelivery: function(assistantMessage, turnNumber) {
      var lower = assistantMessage.toLowerCase();
      var self = this;
      (this._signals.patientCues || []).forEach(function(cue) {
        if (lower.includes(cue.trigger.toLowerCase()) && self._state.turnsSinceCue[cue.trigger] === undefined) {
          self._state.turnsSinceCue[cue.trigger] = 0;
        }
      });
    },

    /**
     * Get a summary of what was missed.
     */
    getMissedSignals: function() {
      var missed = { history: [], exam: [], tests: [], cannotMiss: [], cues: [] };
      var self = this;

      Object.entries(this._state.historyFlags).forEach(function(entry) {
        if (!entry[1].asked) missed.history.push(entry[0]);
      });
      Object.entries(this._state.examFlags).forEach(function(entry) {
        if (!entry[1].performed) missed.exam.push(entry[0]);
      });
      Object.entries(this._state.testFlags).forEach(function(entry) {
        if (!entry[1].ordered) missed.tests.push(entry[0]);
      });
      Object.entries(this._state.cannotMissFlags).forEach(function(entry) {
        if (!entry[1].addressed) missed.cannotMiss.push(entry[0]);
      });
      this._state.cueTracking.forEach(function(ct) {
        if (!ct.followedUp) missed.cues.push(ct.cue);
      });

      return missed;
    },

    getState: function() { return this._state; }
  };


  // ═══════════════════════════════════════════════════════════════
  // 3. BIAS FRAMEWORK
  // ═══════════════════════════════════════════════════════════════
  // Three distinct layers, each with different engineering needs.

  const BiasFramework = {

    // ─────────────────────────────────────────────────────────
    // 3A. BIASES TO SIMULATE (in cases, to test the student)
    // ─────────────────────────────────────────────────────────
    // These are built INTO the case design. The agent creates
    // conditions that might trigger bias in the student.
    //
    // Each case can define simulatedBiases in its case data:
    // simulatedBiases: [
    //   { type: 'framing', description: 'Referral says "rule out PE"', 
    //     mechanism: 'Primes student to anchor on PE' },
    //   { type: 'attribution', description: 'Young female patient with anxiety history',
    //     mechanism: 'May cause student to dismiss cardiopulmonary symptoms' },
    // ]

    simulatedBiasTypes: {
      framing: {
        name: 'Framing Bias',
        description: 'Information presented in a way that primes a specific interpretation.',
        examples: [
          'Referral says "rule out PE" — primes student to think PE before evaluating broadly',
          'Triage note emphasizes "anxiety" — primes student to attribute symptoms to psych',
          'Prior visit note says "likely viral" — anchors student to a benign diagnosis'
        ],
        caseDesignTip: 'Include a referral note, triage note, or prior visit summary that subtly steers toward a specific (possibly wrong) diagnosis. The student must recognize and overcome this framing.'
      },
      attribution: {
        name: 'Attribution Bias',
        description: 'Assuming a diagnosis based on patient demographics or stereotypes.',
        examples: [
          'Young woman with chest pain — "probably anxiety"',
          'Elderly patient with confusion — "just dementia" (missing delirium/metabolic cause)',
          'Patient with obesity — attributing symptoms to weight without workup',
          'Patient with substance use history — dismissing real pathology as drug-seeking'
        ],
        caseDesignTip: 'Design patients whose demographics might trigger assumptions. The correct diagnosis is something the student would have caught if they had not made the attribution.'
      },
      anchoring: {
        name: 'Anchoring Bias',
        description: 'First piece of information disproportionately influences reasoning.',
        examples: [
          'Dramatic chief complaint (chest pain) overshadows the real problem (rash → SJS)',
          'Initial labs suggest one diagnosis but later data contradicts',
          'Radiology report impression anchors the student (this study\'s core measure)'
        ],
        caseDesignTip: 'Present a salient initial finding that points toward one diagnosis, but build in later-phase data that should shift the differential. Measure whether the student updates.'
      },
      prematureClosure: {
        name: 'Premature Closure',
        description: 'Accepting a diagnosis before fully verifying it.',
        examples: [
          'Classic presentation that is almost-but-not-quite the expected diagnosis',
          'Patient who has TWO problems but the student stops after finding the first',
          'Straightforward case with a red herring that the student ignores'
        ],
        caseDesignTip: 'Build cases with dual pathology or a near-miss diagnosis. The student must push past the "obvious" answer.'
      },
      satisfactionOfSearch: {
        name: 'Satisfaction of Search',
        description: 'Stopping the search after finding one abnormality.',
        examples: [
          'CXR with obvious pneumonia but also shows a subtle rib lesion',
          'Labs show anemia but also have a mildly elevated calcium (multiple myeloma)',
          'ECG shows STEMI but patient also has a rigid abdomen (aortic dissection)'
        ],
        caseDesignTip: 'Include a primary obvious finding AND a secondary subtle finding. The agent tracks whether the student identifies both.'
      },
      representativeness: {
        name: 'Representativeness Bias',
        description: 'Expecting the textbook presentation and missing atypical cases.',
        examples: [
          'MI in a young woman presenting with jaw pain and nausea (no chest pain)',
          'Appendicitis with left-sided pain (malrotation)',
          'PE in a patient who is tachycardic but not dyspneic'
        ],
        caseDesignTip: 'Design cases with atypical presentations of common diseases. The correct diagnosis is common but the presentation is not.'
      }
    },

    // ─────────────────────────────────────────────────────────
    // 3B. BIASES TO DETECT (in the student's reasoning)
    // ─────────────────────────────────────────────────────────
    // The agent watches for these patterns in real-time.

    /**
     * Analyze a student's reasoning across phases for cognitive biases.
     * Input: the full session state (differentials, turns, timing).
     * Output: array of detected biases with evidence and severity.
     */
    detectBiases: function(state, caseData) {
      var detected = [];

      // ── ANCHORING ──
      // Did the differential barely change despite significant new information?
      var phase1Dx = (state.differentials.phase1 || []).map(function(d) { return d.diagnosis; });
      var phase4Dx = (state.differentials.phase4 || []).map(function(d) { return d.diagnosis; });
      if (phase1Dx.length > 0 && phase4Dx.length > 0) {
        var unchanged = phase1Dx.filter(function(d) { return phase4Dx.indexOf(d) !== -1; });
        var changeRate = 1 - (unchanged.length / Math.max(phase1Dx.length, phase4Dx.length));
        if (changeRate < 0.2 && phase1Dx.length >= 3) {
          detected.push({
            type: 'anchoring',
            severity: 'moderate',
            evidence: 'Differential changed less than 20% between Phase 1 and Phase 4 despite full history.',
            teaching: 'After taking a complete history, your differential should meaningfully evolve. If your list looks the same before and after the history, consider whether you are incorporating the new information or anchoring on your initial impression.'
          });
        }
      }

      // ── REPORT ANCHORING (study-specific) ──
      // Did new diagnoses appear after Phase 6 that match the report verbatim?
      var phase5Dx = (state.differentials.phase5 || []).map(function(d) { return d.diagnosis; });
      var phase6Dx = (state.differentials.phase6 || []).map(function(d) { return d.diagnosis; });
      var newAfterReport = phase6Dx.filter(function(d) { return phase5Dx.indexOf(d) === -1; });
      if (newAfterReport.length > 0) {
        // Check if the student justified these with clinical reasoning or just adopted them
        var postReportTurns = state.turns.filter(function(t) {
          return t.role === 'student' && t.phase === 6;
        });
        var mentionsHistoryInInterpretation = postReportTurns.some(function(t) {
          return /history|patient|told me|she said|exposure|bird|pet|home|symptom/i.test(t.content);
        });
        if (!mentionsHistoryInInterpretation && newAfterReport.length >= 2) {
          detected.push({
            type: 'report_anchoring',
            severity: 'significant',
            evidence: 'Added ' + newAfterReport.length + ' new diagnoses after reading the radiology report without referencing clinical history to support them.',
            teaching: 'When a radiology report lists a differential, each possibility should be evaluated against your clinical history and exam findings. Adopting the report\'s differential without independent clinical correlation is a form of anchoring.'
          });
        }
      }

      // ── PREMATURE CLOSURE ──
      // Did the student settle on one diagnosis very early and stop exploring?
      var earlyCommit = state.turns.filter(function(t) {
        return t.role === 'student' && t.phase <= 4 && /i'?m (pretty |fairly |quite )?(sure|confident|certain)|definitely|clearly|obviously|has to be/i.test(t.content);
      });
      if (earlyCommit.length > 0 && state.differentials.phase4 && state.differentials.phase4.length <= 2) {
        detected.push({
          type: 'premature_closure',
          severity: 'moderate',
          evidence: 'Expressed high confidence by Phase 4 with only ' + state.differentials.phase4.length + ' diagnosis/diagnoses remaining.',
          teaching: 'High confidence early in a case with limited data can lead to premature closure. With a 42-year-old woman and 6 weeks of dyspnea, the differential should remain broad until imaging and labs help narrow it. Consider: what would you do if your top diagnosis turned out to be wrong?'
        });
      }

      // ── AVAILABILITY BIAS ──
      // If we have prior session data, check if the student is over-relying on recent diagnoses
      if (state.priorHistory && state.priorHistory.completedCaseIds) {
        // This would require knowing what diagnoses were in prior cases
        // Stub for now — full implementation needs cross-case diagnosis tracking
      }

      // ── FRAMING BIAS ──
      // Was the student's differential overly clustered around the chief complaint category?
      if (phase1Dx.length >= 3) {
        var ccCategory = inferCategory(caseData.presentation.chiefComplaint);
        var sameCategory = phase1Dx.filter(function(d) { return inferCategory(d) === ccCategory; });
        if (sameCategory.length === phase1Dx.length) {
          detected.push({
            type: 'framing',
            severity: 'minor',
            evidence: 'All initial diagnoses were in the same category as the chief complaint (' + ccCategory + '). No cross-system diagnoses considered.',
            teaching: 'While the chief complaint guides your thinking, the initial differential should include at least one possibility from a different organ system. Shortness of breath can be pulmonary, cardiac, hematologic, metabolic, or even psychogenic.'
          });
        }
      }

      return detected;
    },

    // ─────────────────────────────────────────────────────────
    // 3C. BIASES THE AGENT MUST AVOID (in itself)
    // ─────────────────────────────────────────────────────────
    // These are constraints on the agent's own behavior.
    // Enforced through prompt engineering and post-processing.

    agentBiasGuardrails: {
      demographicNeutrality: {
        rule: 'The agent must not adjust scoring, difficulty, or feedback based on the student\'s stated or inferred demographics (gender, ethnicity, age, name).',
        implementation: 'Student demographic data is NEVER included in Claude scoring prompts. Only training year and completed rotations are passed for calibration.',
        audit: 'Log all scoring inputs. Periodically check for correlation between demographics and scores that would indicate leaked information.'
      },
      trainingLevelCalibration: {
        rule: 'The agent may adjust EXPECTATIONS based on training level (M1 vs M4 vs PGY-3) but must not adjust SCORING CRITERIA. An M2 who misses environmental history gets the same gap flag as an M4 who misses it.',
        implementation: 'Training level affects the debrief language (simpler for M1, more nuanced for M4) but not the binary signal flags or gap identification.',
        audit: 'Compare gap identification rates across training levels. Gaps should be identified at the same rate regardless of year.'
      },
      performanceHistory: {
        rule: 'The agent must not let a student\'s prior poor performance lower the bar for the current session. Every session is evaluated against the same case-defined criteria.',
        implementation: 'Prior history informs recommendations and debrief framing but NEVER modifies scoring thresholds.',
        audit: 'Ensure scoring functions have no parameters for prior performance.'
      },
      communicationStyle: {
        rule: 'The agent must not score differently based on communication style — a terse student who asks the right questions should score the same as a verbose student who asks the right questions with pleasantries.',
        implementation: 'Signal extraction checks for CONTENT (did they ask about pets?) not STYLE (did they ask nicely?).',
        audit: 'Review a sample of high and low scoring sessions for correlation with message length or politeness markers.'
      },
      confirmationAvoidance: {
        rule: 'When the agent uses Claude for phase analysis, it must not include the expected answer in the prompt. Claude should evaluate the student\'s reasoning quality without knowing what the "right" differential is.',
        implementation: 'Phase analysis prompts include the student transcript and rubric criteria but NOT the case\'s target diagnosis.',
        audit: 'Review all Claude scoring prompts for leaked answers.'
      },
      consistencyAcrossFormats: {
        rule: 'For the radiology study specifically: the agent must score Group A and Group B identically. The scoring criteria cannot differ based on which report was delivered first.',
        implementation: 'Scoring functions have no parameter for group assignment. Group code is used only for data stratification in analysis, never for scoring.',
        audit: 'Run the scoring function on identical transcripts with different group codes and verify identical output.'
      }
    },

    /**
     * Validate that a scoring function does not violate guardrails.
     * Used in development/testing to catch bias leaks.
     */
    auditScoringFunction: function(scoringFn, testCases) {
      var results = [];
      testCases.forEach(function(tc) {
        var score1 = scoringFn(tc.state, tc.caseData);
        // Modify demographic data and re-score — should be identical
        var modState = JSON.parse(JSON.stringify(tc.state));
        modState.studentName = 'TestStudent';
        modState.groupCode = modState.groupCode === 'A' ? 'B' : 'A';
        var score2 = scoringFn(modState, tc.caseData);
        results.push({
          testCase: tc.name,
          scoreOriginal: score1,
          scoreModified: score2,
          passed: JSON.stringify(score1) === JSON.stringify(score2),
          violation: JSON.stringify(score1) !== JSON.stringify(score2) ? 'Score changed when demographics/group were modified' : null
        });
      });
      return results;
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 4. LEARNING PROFILE
  // ═══════════════════════════════════════════════════════════════
  // Aggregates performance data across all modules into a unified
  // student profile. Used by Navigator and case recommendation.

  const LearningProfile = {

    /**
     * Build a learning profile from all available data sources.
     * Checks: Supabase (rad study sessions), localStorage (case history,
     * SpacedRep cards), and any other available data.
     */
    build: async function(studentName) {
      var profile = {
        name: studentName || 'Unknown',
        trainingYear: null,
        completedCases: [],
        recentModules: [],
        topGaps: [],
        avgPerformance: null,
        biasPatterns: [],
        strengthAreas: [],
        skillScores: {},
        lastActive: null,
        sessionsCompleted: 0
      };

      // Source 1: localStorage
      try {
        var recent = JSON.parse(localStorage.getItem('rdx_recent_modules') || '[]');
        profile.recentModules = recent;
      } catch(e) {}

      // Source 2: Supabase (rad study data)
      if (sb && studentName) {
        try {
          var result = await sb.from('rad_study_sessions')
            .select('*')
            .eq('student_name', studentName)
            .eq('status', 'complete')
            .order('started_at', { ascending: false })
            .limit(50);

          if (!result.error && result.data && result.data.length > 0) {
            var sessions = result.data;
            profile.sessionsCompleted = sessions.length;
            profile.trainingYear = sessions[0].training_year;
            profile.lastActive = sessions[0].completed_at;
            profile.completedCases = sessions.map(function(s) { return s.case_id; });

            // Compute average env history score as a proxy for performance
            var envScores = sessions.map(function(s) { return s.env_history_score || 0; });
            profile.avgPerformance = envScores.reduce(function(a,b) { return a+b; }, 0) / envScores.length / 2; // normalize to 0-1

            // Aggregate gaps from all sessions
            var gapCounts = {};
            sessions.forEach(function(s) {
              if (s.env_history_score === 0) {
                gapCounts['Environmental History'] = (gapCounts['Environmental History'] || 0) + 1;
              }
              if (s.leak_detected) {
                gapCounts['Prompt Integrity'] = (gapCounts['Prompt Integrity'] || 0) + 1;
              }
            });
            profile.topGaps = Object.entries(gapCounts)
              .sort(function(a,b) { return b[1] - a[1]; })
              .map(function(entry) { return { title: entry[0], count: entry[1], relatedTopics: [] }; });

            // Identify strengths
            if (profile.avgPerformance > 0.7) profile.strengthAreas.push('Clinical reasoning');
            if (envScores.filter(function(s) { return s === 2; }).length > sessions.length * 0.6) {
              profile.strengthAreas.push('History-taking thoroughness');
            }
          }
        } catch(e) { rdxLog('Profile build: Supabase query failed', e); }
      }

      return profile;
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 5. PHASE ANALYSIS (Claude-powered)
  // ═══════════════════════════════════════════════════════════════
  // At phase boundaries, makes a background Claude call to evaluate
  // the student's reasoning quality. Returns structured scores.

  const PhaseAnalysis = {

    /**
     * Evaluate the student's reasoning for a completed phase.
     * This is a TOOL CALL — the student never sees the prompt or result.
     * The result feeds gap analysis, bias detection, and the debrief.
     *
     * IMPORTANT: The prompt deliberately OMITS the target diagnosis
     * to avoid confirmation bias in Claude's scoring (guardrail 3C.5).
     */
    evaluate: async function(transcript, phase, rubricCriteria) {
      var systemPrompt = 'You are a clinical reasoning evaluator for a medical education platform. You will review a student\'s conversation transcript from one phase of a clinical reasoning simulation. Evaluate ONLY the reasoning quality — not whether they got the "right" answer. Return a JSON object with: { questionQuality: 0-3, differentialBreadth: 0-3, justificationDepth: 0-3, dataIntegration: 0-3, notableStrengths: ["..."], notableGaps: ["..."], biasIndicators: ["..."] }. Do NOT include any text outside the JSON. Do NOT guess the diagnosis or evaluate diagnostic accuracy — only evaluate reasoning process quality.';

      var userMessage = 'Phase: ' + phase + '\nRubric: ' + (rubricCriteria || 'Standard clinical reasoning rubric') + '\n\nStudent transcript:\n' + transcript;

      try {
        var resp = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studyMode: true,
            studySystem: systemPrompt,
            studyModel: 'claude-haiku-4-5-20251001', // Haiku for cost efficiency on analysis calls
            messages: [{ role: 'user', content: userMessage }],
            max_tokens: 500
          })
        });
        var data = await resp.json();
        var text = (data.content && data.content[0] && data.content[0].text) || '{}';
        // Strip markdown fences if present
        text = text.replace(/```json\s*|```\s*/g, '').trim();
        return JSON.parse(text);
      } catch(e) {
        console.error('Phase analysis failed:', e);
        return null;
      }
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // HELPER
  // ═══════════════════════════════════════════════════════════════

  function inferCategory(text) {
    if (!text) return 'unknown';
    var t = text.toLowerCase();
    if (/dyspnea|breath|cough|wheez|pulmon|lung|pneum|asthma|copd|ild|hp\b|tb\b|bronch/i.test(t)) return 'pulmonary';
    if (/chest pain|mi\b|acs|angina|cardiac|heart|arrhyth|svt|afib|stemi/i.test(t)) return 'cardiac';
    if (/pe\b|dvt|embol|thromb|clot/i.test(t)) return 'vascular';
    if (/anemia|bleed|hemoglob|transfus|pancytop/i.test(t)) return 'hematologic';
    if (/fever|infect|sepsis|abscess|cellulitis|meningit/i.test(t)) return 'infectious';
    if (/anxiety|depress|psychosis|suicid|psych|bipolar/i.test(t)) return 'psychiatric';
    if (/rash|skin|dermati|uticar/i.test(t)) return 'dermatologic';
    if (/headache|seizure|stroke|neuro|weakness|numb/i.test(t)) return 'neurologic';
    if (/pain.*abdom|nausea|vomit|diarrhea|gi\b|hepat|pancrea/i.test(t)) return 'GI';
    return 'other';
  }


  // ═══════════════════════════════════════════════════════════════
  // EXPORTS
  // ═══════════════════════════════════════════════════════════════

  window.RdxAgent = {
    Navigator: Navigator,
    SignalExtractor: SignalExtractor,
    BiasFramework: BiasFramework,
    LearningProfile: LearningProfile,
    PhaseAnalysis: PhaseAnalysis,
    version: '1.0.0'
  };

})();
