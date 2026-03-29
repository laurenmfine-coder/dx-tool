/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx Agent Enhancements — rdx-agent-enhancements.js
 * ═══════════════════════════════════════════════════════════════
 * Advanced capabilities that extend rdx-agent-core.js:
 *
 * 1. METACOGNITION ENGINE — prompts students to think about thinking
 * 2. UNCERTAINTY CALIBRATION — tracks confidence vs accuracy
 * 3. COGNITIVE LOAD MANAGER — adaptive interruptions and multitasking
 * 4. NEAR-MISS DETECTOR — catches "almost right" reasoning
 * 5. PATIENT EMOTION MODEL — dynamic rapport-dependent disclosure
 * 6. GAP CLASSIFIER — knowledge vs process vs integration gaps
 * 7. COLLABORATIVE REASONING — cross-student comparison (CRDA)
 * 8. CASE GENERATOR — AI-powered case authoring from templates
 * 9. FACULTY AGENT — preceptor briefings and cohort analytics
 *
 * Requires: rdx-agent-core.js loaded first
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  const WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';


  // ═══════════════════════════════════════════════════════════════
  // 1. METACOGNITION ENGINE
  // ═══════════════════════════════════════════════════════════════
  // Generates targeted "think about your thinking" prompts at key
  // moments. These are injected by the orchestrator BETWEEN Claude
  // responses — the student sees them as Dr. Patel's follow-ups.

  const Metacognition = {

    /**
     * Analyze the student's last message and decide if a metacognitive
     * prompt would be valuable. Returns null if no prompt needed.
     */
    shouldPrompt: function(studentMessage, state, phase) {
      var msg = studentMessage.toLowerCase();

      // Added a new diagnosis — ask why
      if (phase >= 4 && state._lastDifferentialCount !== undefined) {
        var currentCount = (state.differentials['phase' + phase] || []).length;
        if (currentCount > state._lastDifferentialCount) {
          var newDx = state.differentials['phase' + phase].slice(-1)[0];
          if (newDx) {
            return {
              type: 'new_diagnosis',
              prompt: 'You just added ' + newDx.diagnosis + ' to your list. What specific piece of information made you think of that?',
              tracking: { event: 'metacog_new_dx', diagnosis: newDx.diagnosis, phase: phase }
            };
          }
        }
      }

      // Ordered multiple tests at once — ask which is most critical
      var testCount = (msg.match(/\b(cbc|cmp|esr|crp|bnp|ct |chest x|mri|d-dimer|abg|pft|ige|ana|rf|procalcitonin|precipitin)\b/gi) || []).length;
      if (testCount >= 3) {
        return {
          type: 'test_prioritization',
          prompt: 'You ordered several tests there. If you could only see the result of ONE before deciding your next step, which would it be and why?',
          tracking: { event: 'metacog_test_priority', testCount: testCount, phase: phase }
        };
      }

      // Expressed high confidence early — challenge it
      if (phase <= 4 && /\b(definitely|clearly|obviously|certain|sure it'?s|has to be|i know)\b/i.test(msg)) {
        return {
          type: 'confidence_challenge',
          prompt: 'You sound quite confident. What would you do if your top diagnosis turned out to be wrong? What would be your backup plan?',
          tracking: { event: 'metacog_confidence_challenge', phase: phase }
        };
      }

      // Changed mind without explanation — ask why
      if (phase >= 4 && /\b(actually|wait|no|changed my mind|scratch that)\b/i.test(msg)) {
        return {
          type: 'reasoning_shift',
          prompt: 'I noticed you just shifted your thinking. Walk me through what changed for you.',
          tracking: { event: 'metacog_reasoning_shift', phase: phase }
        };
      }

      return null;
    },

    /**
     * Track metacognitive prompt responses over time.
     * Measures: does the student improve at articulating reasoning?
     */
    scoreArticulation: function(responseToPrompt) {
      // Heuristic scoring based on response quality markers
      var score = 0;
      var msg = responseToPrompt.toLowerCase();

      // Mentions specific evidence
      if (/because|since|given that|based on|the fact that/i.test(msg)) score += 1;
      // References a specific finding
      if (/vitals?|spo2|crackles?|cough|fever|history|exam|lab|imaging/i.test(msg)) score += 1;
      // Considers alternatives
      if (/but|however|although|on the other hand|alternatively|if.*(wrong|not)/i.test(msg)) score += 1;
      // Shows probabilistic thinking
      if (/more likely|less likely|probability|odds|common|rare|rule out/i.test(msg)) score += 1;

      return { score: score, max: 4, quality: score >= 3 ? 'strong' : score >= 2 ? 'adequate' : 'developing' };
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 2. UNCERTAINTY CALIBRATION
  // ═══════════════════════════════════════════════════════════════
  // Tracks student confidence vs actual accuracy over time.
  // Identifies overconfidence (dangerous) and underconfidence
  // (inefficient) patterns.

  const UncertaintyCalibration = {

    /**
     * Record a confidence rating at a specific phase.
     * confidenceLevel: 1-10 (student-reported)
     * Returns calibration data if enough history exists.
     */
    record: function(state, phase, confidenceLevel, differentialIncludesCorrectDx) {
      if (!state._confidenceLog) state._confidenceLog = [];

      state._confidenceLog.push({
        phase: phase,
        confidence: confidenceLevel,
        correctDxPresent: differentialIncludesCorrectDx,
        timestamp: new Date().toISOString()
      });

      return this.analyze(state);
    },

    /**
     * Analyze confidence calibration across the session.
     */
    analyze: function(state) {
      var log = state._confidenceLog || [];
      if (log.length < 2) return null;

      var overconfident = log.filter(function(l) { return l.confidence >= 7 && !l.correctDxPresent; });
      var underconfident = log.filter(function(l) { return l.confidence <= 3 && l.correctDxPresent; });
      var wellCalibrated = log.filter(function(l) {
        return (l.confidence >= 6 && l.correctDxPresent) || (l.confidence <= 4 && !l.correctDxPresent);
      });

      var avgConfidence = log.reduce(function(a, b) { return a + b.confidence; }, 0) / log.length;
      var accuracyRate = log.filter(function(l) { return l.correctDxPresent; }).length / log.length;

      // Confidence trajectory: is it going up or down across phases?
      var trajectory = 'stable';
      if (log.length >= 3) {
        var first = log.slice(0, Math.floor(log.length / 2));
        var second = log.slice(Math.floor(log.length / 2));
        var avgFirst = first.reduce(function(a, b) { return a + b.confidence; }, 0) / first.length;
        var avgSecond = second.reduce(function(a, b) { return a + b.confidence; }, 0) / second.length;
        if (avgSecond - avgFirst > 1.5) trajectory = 'increasing';
        else if (avgFirst - avgSecond > 1.5) trajectory = 'decreasing';
      }

      return {
        avgConfidence: Math.round(avgConfidence * 10) / 10,
        accuracyRate: Math.round(accuracyRate * 100),
        overconfidentMoments: overconfident.length,
        underconfidentMoments: underconfident.length,
        wellCalibratedMoments: wellCalibrated.length,
        calibrationQuality: wellCalibrated.length >= log.length * 0.6 ? 'good' : overconfident.length > 1 ? 'overconfident' : underconfident.length > 1 ? 'underconfident' : 'mixed',
        trajectory: trajectory,
        teachingPoint: overconfident.length > 1
          ? 'You were quite confident at points where the correct diagnosis was not on your list. In clinical practice, high confidence with limited data can lead to dangerous premature closure. Consider: what would I do if I am wrong?'
          : underconfident.length > 1
          ? 'You rated your confidence low even when your reasoning was on track. Trust your clinical reasoning more — you were closer to the answer than you thought.'
          : 'Your confidence levels generally matched the quality of your differential. That self-awareness is an important clinical skill.'
      };
    },

    /**
     * Get the UI prompt for requesting confidence.
     * Returns HTML for a confidence slider/buttons.
     */
    getConfidencePromptHTML: function(phase) {
      return '<div class="confidence-prompt" style="background:#f7f9fc;border-radius:10px;padding:14px 18px;margin:8px 0;font-size:13px;">' +
        '<div style="font-weight:700;margin-bottom:8px;color:#1B4F72;">Quick confidence check:</div>' +
        '<div style="color:#4B5563;margin-bottom:10px;">How confident are you in your current top diagnosis? (1 = guessing, 10 = certain)</div>' +
        '<div class="confidence-buttons" style="display:flex;gap:4px;flex-wrap:wrap;">' +
        [1,2,3,4,5,6,7,8,9,10].map(function(n) {
          var bg = n <= 3 ? '#FEF2F2' : n <= 6 ? '#FEF9E7' : '#E8F8F0';
          var color = n <= 3 ? '#DC2626' : n <= 6 ? '#D97706' : '#059669';
          return '<button onclick="recordConfidence(' + n + ',' + phase + ')" style="width:32px;height:32px;border-radius:8px;border:1.5px solid ' + color + ';background:' + bg + ';color:' + color + ';font-weight:700;font-size:13px;cursor:pointer;font-family:inherit;">' + n + '</button>';
        }).join('') +
        '</div></div>';
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 3. COGNITIVE LOAD MANAGER
  // ═══════════════════════════════════════════════════════════════
  // Adaptive interruptions and multitasking challenges.
  // Student-selectable, training-level-aware, performance-adaptive.

  const CognitiveLoadManager = {

    // Load level settings
    levels: {
      off:      { label: 'Off',        interruptRate: 0,   desc: 'No interruptions. Focus on the case.' },
      gentle:   { label: 'Gentle',     interruptRate: 0.1, desc: 'Rare interruptions. Good for early learners.' },
      moderate: { label: 'Moderate',   interruptRate: 0.2, desc: 'Periodic interruptions. Simulates a busy clinic.' },
      realistic:{ label: 'Realistic',  interruptRate: 0.35,desc: 'Frequent interruptions. Simulates a real ED shift.' },
      intense:  { label: 'Intense',    interruptRate: 0.5, desc: 'Heavy multitasking. Sub-intern challenge level.' }
    },

    // Default recommendations by training level
    defaultForLevel: {
      'M1': 'off', 'M2': 'off', 'M3': 'gentle', 'M4': 'moderate',
      'PGY-1': 'moderate', 'PGY-2': 'realistic', 'PGY-3': 'realistic',
      'PGY-4': 'intense', 'PGY-5': 'intense', 'Attending': 'intense'
    },

    // Interruption templates
    interruptions: {
      nurse_vitals: [
        { speaker: 'Nurse', text: 'Sorry to interrupt — the patient in room 5 has a BP of 82/50. They were 110/70 an hour ago. Want me to start fluids?', urgency: 'high', requiresResponse: true },
        { speaker: 'Nurse', text: 'Quick update on room 2 — their repeat potassium came back at 6.1. The prior was 5.8.', urgency: 'medium', requiresResponse: true },
        { speaker: 'Nurse', text: 'Room 7 is asking for more pain medication. They got morphine 4mg about 2 hours ago.', urgency: 'low', requiresResponse: false },
      ],
      phone_call: [
        { speaker: 'Phone', text: 'Dr. Patel, radiology is calling about the CT for the patient in room 4 — they want to confirm whether you want contrast.', urgency: 'medium', requiresResponse: true },
        { speaker: 'Phone', text: 'The lab is calling about a critical value — potassium 2.8 on the patient in room 1.', urgency: 'high', requiresResponse: true },
        { speaker: 'Phone', text: 'Pharmacy has a question about the dosing on the vancomycin you ordered for room 6 — weight-based dose seems high.', urgency: 'medium', requiresResponse: true },
      ],
      new_patient: [
        { speaker: 'Triage', text: 'New patient in the waiting room: 68-year-old male, chest pain, triage vitals stable. Can you see him next?', urgency: 'medium', requiresResponse: false },
        { speaker: 'EMS', text: 'EMS is 5 minutes out with a 55-year-old altered mental status, blood sugar in the field was 42.', urgency: 'high', requiresResponse: false },
      ],
      system: [
        { speaker: 'System', text: 'Reminder: the patient in room 3 has been here for 3 hours without a disposition decision.', urgency: 'low', requiresResponse: false },
      ]
    },

    // ── STATE ──
    _currentLevel: 'off',
    _interruptionLog: [],
    _performanceModifier: 0, // -0.1 to +0.1, adjusts rate based on performance
    _lastInterruptTurn: 0,
    _minTurnsBetween: 4, // minimum turns between interruptions

    /**
     * Initialize with student's chosen level (or default for their training year)
     */
    init: function(level, trainingYear) {
      this._currentLevel = level || this.defaultForLevel[trainingYear] || 'off';
      this._interruptionLog = [];
      this._performanceModifier = 0;
      this._lastInterruptTurn = 0;
      return this._currentLevel;
    },

    /**
     * Check if an interruption should fire this turn.
     * Factors: base rate for level, performance modifier, minimum spacing,
     * current phase (don't interrupt during critical moments).
     */
    shouldInterrupt: function(turnNumber, phase, state) {
      if (this._currentLevel === 'off') return null;

      var levelConfig = this.levels[this._currentLevel];
      if (!levelConfig) return null;

      // Don't interrupt during the first few turns or reflection
      if (turnNumber < 3 || phase === 8 || phase === 9) return null;

      // Minimum spacing between interruptions
      if (turnNumber - this._lastInterruptTurn < this._minTurnsBetween) return null;

      // Don't interrupt mid-differential-generation (Phases 1, 4)
      if (phase === 1 || phase === 4) return null;

      // Adjusted rate
      var rate = levelConfig.interruptRate + this._performanceModifier;
      rate = Math.max(0, Math.min(0.6, rate)); // clamp

      if (Math.random() > rate) return null;

      // Select an interruption
      var categories = Object.keys(this.interruptions);
      var category = categories[Math.floor(Math.random() * categories.length)];
      var options = this.interruptions[category];
      var interruption = options[Math.floor(Math.random() * options.length)];

      this._lastInterruptTurn = turnNumber;
      this._interruptionLog.push({
        turn: turnNumber,
        phase: phase,
        category: category,
        urgency: interruption.urgency,
        text: interruption.text,
        timestamp: new Date().toISOString(),
        studentResponse: null, // filled later
        recoveryTurns: null    // how many turns until student returns to case
      });

      return interruption;
    },

    /**
     * Adapt the interruption rate based on how the student handles them.
     * Called after the student responds (or doesn't) to an interruption.
     */
    adaptRate: function(handledWell) {
      if (handledWell) {
        // Student handled it — slightly increase rate to keep challenging
        this._performanceModifier = Math.min(0.1, this._performanceModifier + 0.02);
        this._minTurnsBetween = Math.max(3, this._minTurnsBetween - 1);
      } else {
        // Student struggled — ease off
        this._performanceModifier = Math.max(-0.1, this._performanceModifier - 0.03);
        this._minTurnsBetween = Math.min(8, this._minTurnsBetween + 1);
      }
    },

    /**
     * Track how long it takes the student to return to the case
     * after an interruption.
     */
    trackRecovery: function(turnNumber) {
      var lastInterrupt = this._interruptionLog[this._interruptionLog.length - 1];
      if (lastInterrupt && lastInterrupt.recoveryTurns === null) {
        lastInterrupt.recoveryTurns = turnNumber - lastInterrupt.turn;
      }
    },

    /**
     * Get the UI for cognitive load level selection.
     */
    getLevelSelectorHTML: function(trainingYear) {
      var defaultLevel = this.defaultForLevel[trainingYear] || 'off';
      var self = this;
      var html = '<div class="cogload-selector" style="margin:12px 0;">';
      html += '<div style="font-size:12px;font-weight:700;color:#1B4F72;margin-bottom:6px;">Interruption Level (optional)</div>';
      html += '<div style="font-size:11px;color:#666;margin-bottom:8px;">Simulates real clinical multitasking. Recommended for your level: ' + (self.levels[defaultLevel] || {}).label + '</div>';
      html += '<div style="display:flex;gap:4px;flex-wrap:wrap;">';
      Object.entries(this.levels).forEach(function(entry) {
        var key = entry[0], cfg = entry[1];
        var isDefault = key === defaultLevel;
        html += '<button class="cogload-btn" data-level="' + key + '" style="padding:6px 12px;border-radius:8px;border:1.5px solid ' + (isDefault ? '#2874A6' : '#ddd') + ';background:' + (isDefault ? '#EBF5FB' : '#fff') + ';color:#333;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;" title="' + cfg.desc + '">' + cfg.label + (isDefault ? ' \u2713' : '') + '</button>';
      });
      html += '</div></div>';
      return html;
    },

    getLog: function() { return this._interruptionLog; },
    getCurrentLevel: function() { return this._currentLevel; }
  };


  // ═══════════════════════════════════════════════════════════════
  // 4. NEAR-MISS DETECTOR
  // ═══════════════════════════════════════════════════════════════
  // Identifies reasoning that was close to correct but fell short.
  // Different teaching than a complete miss.

  const NearMissDetector = {

    /**
     * Check student messages for near-miss patterns.
     * nearMissPatterns defined per case in case data.
     */
    detect: function(studentMessage, caseNearMisses) {
      if (!caseNearMisses || caseNearMisses.length === 0) return [];
      var msg = studentMessage.toLowerCase();
      var detected = [];

      caseNearMisses.forEach(function(nm) {
        var triggered = (nm.triggers || []).some(function(t) {
          return new RegExp(t, 'i').test(msg);
        });
        if (triggered) {
          detected.push({
            id: nm.id,
            category: nm.category,
            whatStudentDid: nm.whatStudentDid,
            whatWasMissed: nm.whatWasMissed,
            teachingPoint: nm.teachingPoint,
            severity: nm.severity || 'moderate'
          });
        }
      });

      return detected;
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 5. PATIENT EMOTION MODEL
  // ═══════════════════════════════════════════════════════════════
  // Tracks the patient's emotional state as a variable that
  // influences disclosure willingness.

  const PatientEmotionModel = {

    // Emotional state dimensions (0-10 scale)
    _state: {
      trust: 5,       // How much the patient trusts the student
      anxiety: 6,     // How anxious the patient is
      frustration: 0, // How frustrated (from repetition, dismissiveness)
      rapport: 3,     // General rapport built through interaction
    },
    _log: [],

    init: function(baselineAnxiety) {
      this._state = { trust: 5, anxiety: baselineAnxiety || 6, frustration: 0, rapport: 3 };
      this._log = [];
    },

    /**
     * Update emotional state based on student's message.
     * Returns updated state and any behavioral changes.
     */
    update: function(studentMessage) {
      var msg = studentMessage.toLowerCase();
      var delta = { trust: 0, anxiety: 0, frustration: 0, rapport: 0 };

      // Positive signals (build trust/rapport)
      if (/\b(understand|sorry to hear|that must|i can see|how are you feeling|is there anything|worried|concerned about you)\b/i.test(msg)) {
        delta.trust += 0.5;
        delta.rapport += 0.5;
        delta.anxiety -= 0.3;
      }
      // Introduced themselves
      if (/\b(my name is|i'm .*, a|i am .*, a|third.year|medical student|working with)\b/i.test(msg)) {
        delta.trust += 1;
        delta.rapport += 0.5;
      }
      // Asked permission
      if (/\b(is it ok|may i|do you mind|would it be alright|can i ask)\b/i.test(msg)) {
        delta.trust += 0.5;
        delta.rapport += 0.3;
      }
      // Used patient's name
      if (/\b(ms\.? reyes|mrs\.? reyes|maria)\b/i.test(msg)) {
        delta.rapport += 0.3;
      }

      // Negative signals (reduce trust/rapport)
      if (msg.length < 15 && /\?$/.test(msg.trim())) {
        // Very terse question — slightly reduces rapport
        delta.rapport -= 0.1;
      }
      // Repeated question the patient already answered
      // (would need message history check — simplified here)

      // Medical jargon without explanation
      if (/\b(differential|etiology|pathophysiology|auscultation|bilateral|centrilobular)\b/i.test(msg)) {
        delta.anxiety += 0.2; // patient doesn't understand
      }

      // Apply deltas with clamping
      var self = this;
      Object.keys(delta).forEach(function(key) {
        self._state[key] = Math.max(0, Math.min(10, self._state[key] + delta[key]));
      });

      this._log.push({
        message: msg.slice(0, 80),
        delta: delta,
        stateAfter: Object.assign({}, this._state),
        timestamp: new Date().toISOString()
      });

      return this.getBehaviorModifiers();
    },

    /**
     * Get behavioral modifiers that affect how the patient responds.
     * These are injected into the Claude system prompt.
     */
    getBehaviorModifiers: function() {
      var mods = [];

      if (this._state.trust >= 7) {
        mods.push('The patient trusts you and is more open. She may volunteer additional details she would not have mentioned otherwise.');
      }
      if (this._state.trust <= 3) {
        mods.push('The patient seems guarded. She answers your questions but does not elaborate. She gives shorter responses.');
      }
      if (this._state.rapport >= 7) {
        mods.push('You have built good rapport. The patient is relaxed and conversational.');
      }
      if (this._state.anxiety >= 8) {
        mods.push('The patient is visibly anxious. She asks you "Is everything okay?" and seems to want reassurance before answering more questions.');
      }
      if (this._state.frustration >= 5) {
        mods.push('The patient seems a little frustrated. She gives shorter answers and sighs before responding.');
      }

      return {
        modifiers: mods,
        disclosureWillingness: Math.round((this._state.trust + this._state.rapport) / 2),
        state: Object.assign({}, this._state)
      };
    },

    getState: function() { return Object.assign({}, this._state); },
    getLog: function() { return this._log; }
  };


  // ═══════════════════════════════════════════════════════════════
  // 6. GAP CLASSIFIER
  // ═══════════════════════════════════════════════════════════════
  // Classifies each identified gap into one of four types.
  // Different gap types get different remediation.

  const GapClassifier = {

    types: {
      knowledge:     { label: 'Knowledge Gap',     remediation: 'MechanismDx module', desc: 'Student does not know the concept exists' },
      process:       { label: 'Process Gap',        remediation: 'Checklist/protocol practice', desc: 'Student knows it but forgot to do it' },
      integration:   { label: 'Integration Gap',    remediation: 'Case-based synthesis practice', desc: 'Student has the pieces but cannot connect them' },
      prioritization:{ label: 'Prioritization Gap', remediation: 'Timed decision-making practice', desc: 'Student considers it but ranks it incorrectly' },
    },

    /**
     * Classify a gap using Claude for nuanced assessment.
     * Examines the transcript to determine WHY the student missed something.
     */
    classifyWithClaude: async function(gap, transcript, phase) {
      var systemPrompt = 'You are a medical education assessment expert. A student missed an important element during a clinical reasoning simulation. Based on the transcript, classify the miss into exactly ONE of these categories:\n\n1. KNOWLEDGE — Student does not know the concept exists or its relevance. Evidence: never mentions related topics, doesn\'t follow up when given cues.\n2. PROCESS — Student knows the concept but forgot to ask/do it. Evidence: mentions related topics elsewhere but skips this specific step.\n3. INTEGRATION — Student has the relevant pieces but fails to connect them. Evidence: asks about the topic AND has relevant data but doesn\'t synthesize.\n4. PRIORITIZATION — Student considers the item but ranks it too low or drops it too early. Evidence: mentions it but does not pursue it.\n\nRespond with ONLY a JSON object: { "type": "knowledge|process|integration|prioritization", "confidence": 0.0-1.0, "evidence": "brief explanation" }';

      var userMessage = 'Gap: ' + gap.title + '\nDescription: ' + gap.description + '\n\nRelevant transcript excerpt:\n' + transcript;

      try {
        var resp = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studyMode: true,
            studySystem: systemPrompt,
            studyModel: 'claude-haiku-4-5-20251001',
            messages: [{ role: 'user', content: userMessage }],
            max_tokens: 200
          })
        });
        var data = await resp.json();
        var text = (data.content && data.content[0] && data.content[0].text) || '{}';
        text = text.replace(/```json\s*|```\s*/g, '').trim();
        return JSON.parse(text);
      } catch(e) {
        return { type: 'unknown', confidence: 0, evidence: 'Classification failed' };
      }
    },

    /**
     * Quick heuristic classification (no Claude call).
     * Use for real-time; use classifyWithClaude for post-session analysis.
     */
    classifyHeuristic: function(gap, state) {
      // If the student never mentioned anything in the gap's domain
      var relatedMentions = state.turns.filter(function(t) {
        return t.role === 'student' && gap.relatedTopics && gap.relatedTopics.some(function(topic) {
          return t.content.toLowerCase().includes(topic.toLowerCase());
        });
      });

      if (relatedMentions.length === 0) return 'knowledge';
      if (relatedMentions.length > 0 && gap.severity === 'critical') return 'process';
      if (relatedMentions.length > 2) return 'integration';
      return 'prioritization';
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 7. COLLABORATIVE REASONING (CRDA)
  // ═══════════════════════════════════════════════════════════════
  // Cross-student comparison for debrief and teaching.
  // Anonymized — student sees aggregate patterns, not individual names.

  const CollaborativeReasoning = {

    /**
     * Compare this student's session to aggregate data from prior students.
     * Returns divergence points and teaching insights.
     */
    compareToAggregates: async function(sb, state, caseId) {
      if (!sb) return null;

      try {
        var result = await sb.from('rad_study_sessions')
          .select('env_history_score, history_flags, differentials, total_turns, group_code')
          .eq('case_id', caseId)
          .eq('status', 'complete')
          .neq('session_id', state.sessionId);

        if (result.error || !result.data || result.data.length < 3) return null;

        var others = result.data;
        var n = others.length;

        // What percentage of other students asked about pets?
        var pctAskedPets = others.filter(function(s) { return s.history_flags && s.history_flags.askedAboutPets; }).length / n * 100;

        // What percentage got the environmental history?
        var pctGotEnv = others.filter(function(s) { return s.env_history_score >= 1; }).length / n * 100;

        // Average turns
        var avgTurns = others.reduce(function(a, s) { return a + (s.total_turns || 0); }, 0) / n;

        // Comparison points
        var insights = [];

        if (state.envHistoryScore === 0 && pctGotEnv > 60) {
          insights.push('In this case, ' + Math.round(pctGotEnv) + '% of other students discovered the key environmental exposure. Consider what questions they might have asked that you did not.');
        }
        if (state.envHistoryScore >= 1 && pctGotEnv < 40) {
          insights.push('Only ' + Math.round(pctGotEnv) + '% of other students discovered the key environmental exposure in this case. Your thorough history-taking put you ahead of most of your peers.');
        }
        if (state.turnCount > avgTurns * 1.5) {
          insights.push('You used more turns than average (' + state.turnCount + ' vs ' + Math.round(avgTurns) + '). Taking time to be thorough is good, but consider whether some of your questions could have been more focused.');
        }
        if (state.turnCount < avgTurns * 0.6) {
          insights.push('You completed the case in fewer turns than average (' + state.turnCount + ' vs ' + Math.round(avgTurns) + '). Efficiency is valuable, but make sure you are not cutting corners on important history categories.');
        }

        return {
          comparisonN: n,
          pctAskedPets: Math.round(pctAskedPets),
          pctGotEnv: Math.round(pctGotEnv),
          avgTurns: Math.round(avgTurns),
          insights: insights
        };
      } catch(e) {
        return null;
      }
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 8. CASE GENERATOR
  // ═══════════════════════════════════════════════════════════════
  // AI-powered case authoring from a template description.
  // Faculty describes the case; agent builds the full case data.

  const CaseGenerator = {

    /**
     * Generate a complete case from a brief description.
     * Returns a full case data object matching the CASE_DYS001 schema.
     */
    generate: async function(description) {
      var systemPrompt = 'You are a medical education case author for the ReasonDx clinical reasoning platform. Given a case description, generate a complete case data object in JSON format. The case must follow this exact schema:\n\n' +
        '{\n' +
        '  "caseId": "string (e.g., DYS-002)",\n' +
        '  "title": "string",\n' +
        '  "targetDiagnosis": "string",\n' +
        '  "presentation": { "patientName": "string", "age": number, "sex": "string", "ethnicity": "string", "occupation": "string", "chiefComplaint": "string", "vitals": { "temp": "string", "hr": number, "bp": "string", "rr": number, "spo2": "string" }, "triageNote": "string" },\n' +
        '  "patientScript": { object with keys for each history topic — see instructions below },\n' +
        '  "physicalExam": { "general": "string", "heent": "string", "cardiovascular": "string", "respiratory": "string", "abdomen": "string", "extremities": "string", "skin": "string" },\n' +
        '  "labResults": { "TestName": "result string", ... },\n' +
        '  "scoringCriteria": { "criticalHistoryElements": [...], "highScoreDiagnoses": [...], "reasonableDiagnoses": [...], "lowValueDiagnoses": [...] },\n' +
        '  "signals": { "criticalHistory": [...], "criticalExam": [...], "criticalTests": [...], "cannotMiss": [...], "biasTraps": [...], "patientCues": [{ "trigger": "string", "followUp": "string", "turnWindow": number, "significance": "string" }], "simulatedBiases": [{ "type": "string", "description": "string", "mechanism": "string" }] },\n' +
        '  "keywordMap": { "signal_name": ["keyword1", "keyword2", ...], ... },\n' +
        '  "nearMisses": [{ "id": "string", "category": "string", "triggers": ["regex_pattern"], "whatStudentDid": "string", "whatWasMissed": "string", "teachingPoint": "string" }]\n' +
        '}\n\n' +
        'CRITICAL RULES FOR CASE DESIGN:\n' +
        '1. The imaging/radiology findings must be GENUINELY AMBIGUOUS — supporting at least 3 different diagnoses.\n' +
        '2. The correct diagnosis requires clinical history that the student must ACTIVELY ELICIT.\n' +
        '3. The patient does NOT volunteer the critical history unless specifically asked.\n' +
        '4. Include at least 2 simulated biases built into the case design.\n' +
        '5. Include at least 2 patient cues (subtle hints the student should follow up on).\n' +
        '6. Include at least 2 near-miss patterns.\n' +
        '7. All patient responses should be conversational and in-character (plain language, no medical jargon).\n' +
        '8. Radiology reports are NOT included — they will be authored separately by a radiologist.\n\n' +
        'Respond with ONLY the JSON object. No markdown, no explanation.';

      try {
        var resp = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studyMode: true,
            studySystem: systemPrompt,
            studyModel: 'claude-sonnet-4-20250514',
            messages: [{ role: 'user', content: description }],
            max_tokens: 4000
          })
        });
        var data = await resp.json();
        var text = (data.content && data.content[0] && data.content[0].text) || '{}';
        text = text.replace(/```json\s*|```\s*/g, '').trim();
        return { success: true, caseData: JSON.parse(text) };
      } catch(e) {
        return { success: false, error: e.message };
      }
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 9. FACULTY AGENT
  // ═══════════════════════════════════════════════════════════════
  // Tools for faculty: preceptor briefings, cohort analytics,
  // student intervention flags.

  const FacultyAgent = {

    /**
     * Generate a preceptor briefing for a specific student.
     * "What should I watch for when this student sees a patient today?"
     */
    generateBriefing: async function(sb, studentName) {
      var profile = await window.RdxAgent.LearningProfile.build(studentName);
      if (!profile || profile.sessionsCompleted === 0) {
        return 'No prior ReasonDx data available for this student.';
      }

      var systemPrompt = 'You are a clinical education advisor preparing a 30-second preceptor briefing. Based on the student\'s learning profile data, tell the attending what to watch for during today\'s clinical encounter. Be specific, actionable, and concise (3-4 sentences). Format: start with the student\'s strongest skill, then their top gap, then one concrete thing the attending can do to help.';

      var profileSummary = 'Student: ' + studentName + ', ' + profile.trainingYear + '. ' +
        profile.sessionsCompleted + ' ReasonDx sessions completed. ' +
        'Strengths: ' + (profile.strengthAreas.join(', ') || 'not yet identified') + '. ' +
        'Gaps: ' + (profile.topGaps.map(function(g) { return g.title; }).join(', ') || 'none identified') + '. ' +
        'Average performance: ' + (profile.avgPerformance ? Math.round(profile.avgPerformance * 100) + '%' : 'insufficient data') + '.';

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
        return (data.content && data.content[0] && data.content[0].text) || 'Briefing unavailable.';
      } catch(e) {
        return 'Briefing generation failed.';
      }
    },

    /**
     * Identify students who may need early intervention.
     * Flags: consistently low performance, declining trajectory,
     * persistent specific gaps, no recent activity.
     */
    getInterventionFlags: async function(sb) {
      if (!sb) return [];

      try {
        var result = await sb.from('rad_study_sessions')
          .select('student_name, training_year, env_history_score, total_turns, started_at')
          .eq('status', 'complete')
          .order('started_at', { ascending: false });

        if (result.error || !result.data) return [];

        // Group by student
        var students = {};
        result.data.forEach(function(s) {
          if (!students[s.student_name]) students[s.student_name] = { sessions: [], year: s.training_year };
          students[s.student_name].sessions.push(s);
        });

        var flags = [];
        Object.entries(students).forEach(function(entry) {
          var name = entry[0], data = entry[1];
          var sessions = data.sessions;

          // Flag: consistently missed environmental history (3+ sessions)
          if (sessions.length >= 3) {
            var missedAll = sessions.every(function(s) { return s.env_history_score === 0; });
            if (missedAll) {
              flags.push({
                student: name,
                year: data.year,
                flag: 'persistent_gap',
                detail: 'Missed environmental/exposure history in all ' + sessions.length + ' sessions.',
                severity: 'high',
                recommendation: 'Consider a targeted coaching session on systematic history-taking with emphasis on environmental and occupational domains.'
              });
            }
          }

          // Flag: declining performance
          if (sessions.length >= 3) {
            var recent = sessions.slice(0, 3).map(function(s) { return s.env_history_score || 0; });
            var older = sessions.slice(-3).map(function(s) { return s.env_history_score || 0; });
            var recentAvg = recent.reduce(function(a,b){return a+b;},0) / recent.length;
            var olderAvg = older.reduce(function(a,b){return a+b;},0) / older.length;
            if (recentAvg < olderAvg - 0.5) {
              flags.push({
                student: name,
                year: data.year,
                flag: 'declining',
                detail: 'Performance declining: recent avg ' + recentAvg.toFixed(1) + ' vs prior avg ' + olderAvg.toFixed(1),
                severity: 'moderate',
                recommendation: 'Check in with student about clinical confidence and learning strategies.'
              });
            }
          }
        });

        return flags.sort(function(a,b) { return a.severity === 'high' ? -1 : 1; });
      } catch(e) {
        return [];
      }
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // EXPORTS
  // ═══════════════════════════════════════════════════════════════

  window.RdxAgentEnhanced = {
    Metacognition: Metacognition,
    UncertaintyCalibration: UncertaintyCalibration,
    CognitiveLoadManager: CognitiveLoadManager,
    NearMissDetector: NearMissDetector,
    PatientEmotionModel: PatientEmotionModel,
    GapClassifier: GapClassifier,
    CollaborativeReasoning: CollaborativeReasoning,
    CaseGenerator: CaseGenerator,
    FacultyAgent: FacultyAgent,
    version: '1.0.0'
  };

})();
