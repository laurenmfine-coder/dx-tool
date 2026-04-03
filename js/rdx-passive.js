/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx Passive Data Collectors — js/rdx-passive.js
 * ═══════════════════════════════════════════════════════════════
 * Extracts research-grade data from the normal simulation flow
 * with ZERO additional student effort.
 *
 * 1. Implicit Confidence — hedging vs commitment language
 * 2. Question Type Classifier — open/closed/leading/clarifying
 * 3. Response Latency — time between messages
 * 4. Empathy & Rapport — communication quality signals
 * 5. Cue Utilization — did the student follow up on patient cues
 * 6. Emotional Reasoning State (Agent 7) — affect valence + arousal
 *    passive linguistic affect analysis per turn; tests whether
 *    emotional state modulates diagnostic accuracy (Study 10)
 *    Grounding: Croskerry et al. (2010) Adv Health Sci Educ;
 *    Lerner et al. (2015) Annu Rev Psychol; Pennebaker LIWC (2001)
 * 7. Cognitive Load Topography (Agent 5) — per-phase load signature
 *    combines latency z-score + burst ratio to map where in the
 *    10-phase arc cognitive load peaks and correlates with error
 *    Grounding: Sweller (1988) Cogn Sci; Paas et al. (2003) Educ
 *    Psychol; Moulton et al. (2007) Acad Med
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  const PassiveData = {

    _data: {
      confidence: [],
      questionTypes: [],
      latency: [],
      empathy: [],
      cueUtilization: [],
      emotionalState: [],   // Agent 7: per-turn affect records
      cognitiveLoad: []     // Agent 5: per-turn load signatures
    },
    _lastMessageTime: null,
    _patientCuesDelivered: [],
    _messageTimestamps: [],   // Agent 5: raw timestamps for burst-ratio computation

    clear: function() {
      this._data = {
        confidence: [], questionTypes: [], latency: [],
        empathy: [], cueUtilization: [],
        emotionalState: [], cognitiveLoad: []
      };
      this._professionSignals = [];
      this._professionId = null;
      this._lastMessageTime = null;
      this._patientCuesDelivered = [];
      this._messageTimestamps = [];
    },


    // ═══════════════════════════════════════════════════════════
    // 1. IMPLICIT CONFIDENCE — replaces explicit 1-10 prompts
    // ═══════════════════════════════════════════════════════════

    analyzeConfidence: function(text, phase, turn) {
      var hedging = (text.match(/\b(maybe|possibly|could be|might be|perhaps|i think|not sure|uncertain|i wonder|i guess|potentially|it seems|it appears|i suppose|i believe|not certain|hard to say|difficult to tell|i don't know)\b/gi) || []).length;
      var commitment = (text.match(/\b(definitely|clearly|certainly|obviously|this is|i'm confident|i'm sure|without doubt|no question|must be|has to be|it is|confirmed|diagnostic of|consistent with|classic for|textbook)\b/gi) || []).length;

      // Score: -1 (very hedged) to +1 (very committed), 0 = neutral
      var totalSignals = hedging + commitment;
      var score = totalSignals === 0 ? 0 : (commitment - hedging) / totalSignals;
      score = Math.round(score * 100) / 100;

      var level = 'neutral';
      if (score > 0.5) level = 'high_confidence';
      else if (score > 0.15) level = 'moderate_confidence';
      else if (score < -0.5) level = 'low_confidence';
      else if (score < -0.15) level = 'uncertain';

      var record = {
        turn: turn, phase: phase, score: score, level: level,
        hedgingCount: hedging, commitmentCount: commitment,
        timestamp: new Date().toISOString()
      };
      this._data.confidence.push(record);
      return record;
    },

    getConfidenceSummary: function() {
      var c = this._data.confidence;
      if (c.length === 0) return null;
      var avgScore = c.reduce(function(a, r) { return a + r.score; }, 0) / c.length;
      var byPhase = {};
      c.forEach(function(r) {
        if (!byPhase[r.phase]) byPhase[r.phase] = [];
        byPhase[r.phase].push(r.score);
      });
      Object.keys(byPhase).forEach(function(p) {
        var arr = byPhase[p];
        byPhase[p] = Math.round(arr.reduce(function(a, v) { return a + v; }, 0) / arr.length * 100) / 100;
      });

      // Trend: increasing confidence = anchoring risk; decreasing = appropriate uncertainty
      var firstHalf = c.slice(0, Math.floor(c.length / 2));
      var secondHalf = c.slice(Math.floor(c.length / 2));
      var avgFirst = firstHalf.reduce(function(a, r) { return a + r.score; }, 0) / (firstHalf.length || 1);
      var avgSecond = secondHalf.reduce(function(a, r) { return a + r.score; }, 0) / (secondHalf.length || 1);
      var trend = 'stable';
      if (avgSecond > avgFirst + 0.15) trend = 'increasing';
      if (avgSecond < avgFirst - 0.15) trend = 'decreasing';

      return {
        avgScore: Math.round(avgScore * 100) / 100,
        byPhase: byPhase,
        trend: trend,
        totalMeasurements: c.length
      };
    },


    // ═══════════════════════════════════════════════════════════
    // 2. QUESTION TYPE CLASSIFIER
    // ═══════════════════════════════════════════════════════════

    classifyQuestion: function(text, phase, turn) {
      if (phase !== 3) return null; // Only classify during patient interview

      var sentences = text.split(/[.!?]+/).filter(function(s) { return s.trim().length > 5; });
      var classifications = [];

      sentences.forEach(function(s) {
        s = s.trim();
        if (!/\?|tell me|describe|can you|could you|do you|have you|are you|is there|did you|would you|how|what|when|where|why/i.test(s)) return;

        var type = 'statement'; // default

        // Open-ended
        if (/^(tell me|describe|what|how does|how do you|walk me through|can you tell|explain|what.*(like|about|happened|going on))/i.test(s)) {
          type = 'open';
        }
        // Clarifying
        else if (/^(when you say|what do you mean|can you clarify|you mentioned|so you're saying|just to clarify|by that you mean)/i.test(s)) {
          type = 'clarifying';
        }
        // Leading (suggests the answer)
        else if (/\b(right|don't you|wouldn't you|isn't it|correct|you don't.*do you|you haven't.*have you)\b/i.test(s)) {
          type = 'leading';
        }
        // Permission-seeking
        else if (/^(is it okay|would it be okay|do you mind|may i|can i|would you be comfortable)/i.test(s)) {
          type = 'permission';
        }
        // Closed (yes/no answerable)
        else if (/^(do you|have you|are you|is there|did you|does it|has it|were you|was there|can you)\b/i.test(s)) {
          type = 'closed';
        }
        // Default for questions
        else if (/\?/.test(s)) {
          type = 'closed';
        }

        if (type !== 'statement') {
          classifications.push(type);
        }
      });

      if (classifications.length === 0) return null;

      // Primary type = most common in this message
      var counts = {};
      classifications.forEach(function(t) { counts[t] = (counts[t] || 0) + 1; });
      var primary = Object.keys(counts).sort(function(a, b) { return counts[b] - counts[a]; })[0];

      var record = {
        turn: turn, phase: phase, primary: primary,
        all: classifications, timestamp: new Date().toISOString()
      };
      this._data.questionTypes.push(record);
      return record;
    },

    getQuestionTypeSummary: function() {
      var qt = this._data.questionTypes;
      if (qt.length === 0) return null;
      var counts = { open: 0, closed: 0, leading: 0, clarifying: 0, permission: 0 };
      qt.forEach(function(r) {
        r.all.forEach(function(t) { counts[t] = (counts[t] || 0) + 1; });
      });
      var total = Object.values(counts).reduce(function(a, v) { return a + v; }, 0);

      // Sequence pattern: open questions first (expert) vs closed first (novice)
      var firstThree = qt.slice(0, 3).map(function(r) { return r.primary; });
      var pattern = 'mixed';
      if (firstThree.filter(function(t) { return t === 'open'; }).length >= 2) pattern = 'open_first';
      if (firstThree.filter(function(t) { return t === 'closed'; }).length >= 2) pattern = 'closed_first';

      return {
        counts: counts,
        total: total,
        openRate: total > 0 ? Math.round(counts.open / total * 100) : 0,
        closedRate: total > 0 ? Math.round(counts.closed / total * 100) : 0,
        leadingRate: total > 0 ? Math.round(counts.leading / total * 100) : 0,
        openingPattern: pattern,
        expertPattern: pattern === 'open_first' // Expert pattern = open early, narrow to closed
      };
    },


    // ═══════════════════════════════════════════════════════════
    // 3. RESPONSE LATENCY
    // ═══════════════════════════════════════════════════════════

    recordLatency: function(phase, turn) {
      var now = Date.now();
      if (this._lastMessageTime) {
        var latencyMs = now - this._lastMessageTime;
        var record = {
          turn: turn, phase: phase, latencyMs: latencyMs,
          latencySeconds: Math.round(latencyMs / 100) / 10,
          // ── Latency category grounding ──────────────────────────────
          // Moulton et al. (2007, Acad Med): expert surgeons deliberately
          // "slow down" at critical decision points — slow response may
          // indicate appropriate System 2 engagement (Croskerry 2009),
          // not difficulty. Categories are therefore not evaluative; they
          // are used to identify patterns (e.g., consistently fast at
          // history = possible premature closure risk).
          //
          // Sweller (1988, Cogn Sci) cognitive load theory: latency is a
          // proxy for working memory load. Very long latency (>30s) may
          // indicate cognitive overload at a particular phase.
          //
          // IMPORTANT LIMITATION: In a text-based simulation, latency
          // includes typing time and is confounded by typing speed.
          // These categories should be treated as rough indicators only.
          // Absolute thresholds (5s, 15s, 30s) are pragmatic cutpoints
          // consistent with clinical simulation literature but not
          // independently validated for text-based digital simulations.
          // They are reported descriptively, never used for grading.
          category: latencyMs < 5000 ? 'fast' : latencyMs < 15000 ? 'moderate' : latencyMs < 30000 ? 'slow' : 'very_slow',
          timestamp: new Date().toISOString()
        };
        this._data.latency.push(record);
      }
      this._lastMessageTime = now;
    },

    getLatencySummary: function() {
      var l = this._data.latency;
      if (l.length === 0) return null;
      var avgMs = l.reduce(function(a, r) { return a + r.latencyMs; }, 0) / l.length;
      var byPhase = {};
      l.forEach(function(r) {
        if (!byPhase[r.phase]) byPhase[r.phase] = [];
        byPhase[r.phase].push(r.latencyMs);
      });
      Object.keys(byPhase).forEach(function(p) {
        var arr = byPhase[p];
        byPhase[p] = Math.round(arr.reduce(function(a, v) { return a + v; }, 0) / arr.length / 1000 * 10) / 10;
      });

      return {
        avgSeconds: Math.round(avgMs / 1000 * 10) / 10,
        byPhase: byPhase,
        fastResponses: l.filter(function(r) { return r.category === 'fast'; }).length,
        slowResponses: l.filter(function(r) { return r.category === 'slow' || r.category === 'very_slow'; }).length,
        totalMeasurements: l.length
      };
    },


    // ═══════════════════════════════════════════════════════════
    // 4. EMPATHY & RAPPORT DETECTION
    // ═══════════════════════════════════════════════════════════

    analyzeEmpathy: function(text, phase, turn) {
      var signals = {
        expressesConcern: /\b(i'm sorry|sorry to hear|that must be|that sounds|i understand|i can see|i can imagine|must be difficult|must be scary|must be frustrating|that's tough)\b/i.test(text),
        normalizes: /\b(that's (completely |very |totally )?(normal|understandable|common|natural|reasonable)|many people|you're not alone|it makes sense|anyone would)\b/i.test(text),
        validates: /\b(you did the right thing|that was smart|good that you came|glad you came|you made the right|don't blame yourself|not your fault|nothing wrong with)\b/i.test(text),
        usesPatientName: false, // set below
        asksPermission: /\b(is it okay|would it be okay|do you mind|may i|can i|with your permission|if it's alright|comfortable with)\b/i.test(text),
        checksIn: /\b(how are you feeling|are you comfortable|doing okay|how are you doing|everything alright|need anything|any concerns)\b/i.test(text),
        acknowledgesEmotion: /\b(i can see you're|you seem|you look|i notice you|that's understandable|it's okay to|perfectly normal to feel)\b/i.test(text)
      };

      // Check if student used patient's name
      if (window.caseData) {
        var firstName = window.caseData.presentation.patientName.split(' ')[0];
        var lastName = window.caseData.presentation.patientName.split(' ').pop();
        signals.usesPatientName = new RegExp('\\b(' + firstName + '|' + lastName + '|Ms\\.|Mr\\.)\\b', 'i').test(text);
      }

      var empathyCount = Object.values(signals).filter(function(v) { return v === true; }).length;

      if (empathyCount > 0) {
        var record = {
          turn: turn, phase: phase, signals: signals,
          empathyCount: empathyCount, timestamp: new Date().toISOString()
        };
        this._data.empathy.push(record);
        return record;
      }
      return null;
    },

    getEmpathySummary: function() {
      var e = this._data.empathy;
      if (e.length === 0) return { totalEmpathyMoments: 0, signals: {} };
      var signalCounts = { expressesConcern: 0, normalizes: 0, validates: 0, usesPatientName: 0, asksPermission: 0, checksIn: 0, acknowledgesEmotion: 0 };
      e.forEach(function(r) {
        Object.keys(r.signals).forEach(function(k) {
          if (r.signals[k]) signalCounts[k]++;
        });
      });
      return {
        totalEmpathyMoments: e.length,
        signals: signalCounts,
        empathyDensity: e.length > 0 ? Math.round(e.reduce(function(a, r) { return a + r.empathyCount; }, 0) / e.length * 100) / 100 : 0
      };
    },


    // ═══════════════════════════════════════════════════════════
    // 5. CUE UTILIZATION
    // ═══════════════════════════════════════════════════════════

    registerPatientCue: function(cueText, cueType, turn) {
      this._patientCuesDelivered.push({
        text: cueText.substring(0, 100),
        type: cueType, // 'emotional', 'clinical', 'social', 'contextual'
        deliveredAtTurn: turn,
        followedUp: false,
        followUpTurn: null
      });
    },

    checkCueFollowUp: function(studentText, turn) {
      var self = this;
      this._patientCuesDelivered.forEach(function(cue) {
        if (cue.followedUp) return;
        // Check if student message relates to the cue
        var cueWords = cue.text.toLowerCase().split(/\s+/).filter(function(w) { return w.length > 3; });
        var studentLower = studentText.toLowerCase();
        var relevantWords = cueWords.filter(function(w) { return studentLower.includes(w); });
        if (relevantWords.length >= 2 || (relevantWords.length >= 1 && turn - cue.deliveredAtTurn <= 3)) {
          cue.followedUp = true;
          cue.followUpTurn = turn;
        }
      });
    },

    getCueUtilizationSummary: function() {
      var cues = this._patientCuesDelivered;
      if (cues.length === 0) return null;
      var followedUp = cues.filter(function(c) { return c.followedUp; });
      var missed = cues.filter(function(c) { return !c.followedUp; });
      return {
        totalCues: cues.length,
        followedUp: followedUp.length,
        missed: missed.length,
        utilizationRate: Math.round(followedUp.length / cues.length * 100),
        missedCues: missed.map(function(c) { return { text: c.text, type: c.type }; }),
        avgFollowUpDelay: followedUp.length > 0
          ? Math.round(followedUp.reduce(function(a, c) { return a + (c.followUpTurn - c.deliveredAtTurn); }, 0) / followedUp.length * 10) / 10
          : null
      };
    },


    // ═══════════════════════════════════════════════════════════
    // 6. EMOTIONAL REASONING STATE — Agent 7
    // ═══════════════════════════════════════════════════════════
    // Passive linguistic affect analysis: valence (positive/neutral/
    // negative) and arousal (calm/activated) per student turn.
    //
    // Research question (Study 10): Does elevated negative affect
    // during history-taking (phase 3) predict anchoring or narrowed
    // differential breadth in the revised differential (phase 4)?
    //
    // Lexicon approach: open-license word lists grounded in LIWC
    // (Pennebaker et al., 2001) and the NRC Emotion Lexicon
    // (Mohammad & Turney, 2013, free academic use).
    //
    // Valence: -1 (very negative) to +1 (very positive)
    // Arousal:  0 (calm) to 1 (highly activated)
    //
    // LIMITATION: text-based simulation cannot capture tone,
    // prosody, or non-verbal affect. Linguistic markers are proxies
    // only and should be interpreted at the session aggregate level,
    // not per-turn. Single-session data is descriptive only.
    //
    // Primary citations:
    //   Croskerry, P., Abbass, A., & Wu, A. W. (2010). Emotional
    //     influences in patient safety. Adv Health Sci Educ, 15(2),
    //     261–276. https://doi.org/10.1007/s10459-009-9193-z
    //   Lerner, J. S. et al. (2015). Emotion and decision making.
    //     Annu Rev Psychol, 66, 799–823.
    //   Pennebaker, J. W., Francis, M. E., & Booth, R. J. (2001).
    //     Linguistic Inquiry and Word Count (LIWC). Lawrence Erlbaum.
    // ═══════════════════════════════════════════════════════════

    analyzeEmotionalState: function(text, phase, turn) {
      if (!text || text.trim().length < 5) return null;

      // ── Valence lexicon ──────────────────────────────────────
      // Positive valence: confidence, reassurance, relief, curiosity
      var positiveTerms = [
        'good', 'great', 'excellent', 'perfect', 'right', 'correct', 'clear',
        'sure', 'confident', 'reassure', 'reassured', 'helpful', 'better',
        'improving', 'stable', 'okay', 'fine', 'well', 'comfortable',
        'interesting', 'curious', 'glad', 'happy', 'relieved', 'positive',
        'promising', 'hopeful', 'thankfully', 'fortunately', 'encouraging'
      ];
      // Negative valence: uncertainty distress, concern, frustration
      var negativeTerms = [
        'worried', 'concern', 'concerning', 'anxious', 'anxiety', 'scared',
        'afraid', 'fear', 'terrible', 'awful', 'bad', 'wrong', 'mistake',
        'missed', 'failed', 'failure', 'problem', 'dangerous', 'critical',
        'serious', 'severe', 'unfortunate', 'unfortunately', 'difficult',
        'struggling', 'confused', 'uncertain', 'unsure', 'frustrated',
        'frustrated', 'overwhelmed', 'stressed', 'distressed', 'worried about'
      ];

      // ── Arousal lexicon ──────────────────────────────────────
      // High arousal: urgency, intensity, exclamation markers
      var highArousalTerms = [
        'immediately', 'urgent', 'emergent', 'stat', 'now', 'quickly',
        'rapidly', 'critical', 'emergency', 'must', 'need to', 'have to',
        'right away', 'asap', 'instruct', 'alert', 'alarming', 'alarmed',
        'shock', 'crashing', 'deteriorating', 'decompensating', 'acute',
        'suddenly', 'sudden', 'rapid', 'quickly', 'panic', 'rush'
      ];
      // Low arousal: reflective, methodical, deliberate language
      var lowArousalTerms = [
        'consider', 'think about', 'reflect', 'review', 'assess', 'evaluate',
        'systematically', 'carefully', 'methodically', 'gradually', 'slowly',
        'step by step', 'let me think', 'let\'s think', 'in my assessment',
        'on reflection', 'upon further', 'taking a moment', 'pause'
      ];

      var t = text.toLowerCase();

      var posCount  = positiveTerms.filter(function(w) { return t.indexOf(w) !== -1; }).length;
      var negCount  = negativeTerms.filter(function(w) { return t.indexOf(w) !== -1; }).length;
      var highCount = highArousalTerms.filter(function(w) { return t.indexOf(w) !== -1; }).length;
      var lowCount  = lowArousalTerms.filter(function(w) { return t.indexOf(w) !== -1; }).length;

      // Exclamation marks add arousal signal
      var exclamations = (text.match(/!/g) || []).length;
      highCount += Math.min(exclamations, 2);

      // Valence score: -1 to +1
      var valenceTotal = posCount + negCount;
      var valence = valenceTotal === 0 ? 0 :
        Math.round(((posCount - negCount) / valenceTotal) * 100) / 100;

      // Arousal score: 0 to 1
      var arousalTotal = highCount + lowCount;
      var arousal = arousalTotal === 0 ? 0.3 : // default mid-calm
        Math.round((highCount / arousalTotal) * 100) / 100;

      // Categorical labels
      var valenceLabel = valence >  0.2 ? 'positive' :
                         valence < -0.2 ? 'negative' : 'neutral';
      var arousalLabel = arousal > 0.6 ? 'activated' :
                         arousal < 0.3 ? 'calm' : 'moderate';

      var record = {
        turn: turn,
        phase: phase,
        valence: valence,
        arousal: arousal,
        valenceLabel: valenceLabel,
        arousalLabel: arousalLabel,
        posCount: posCount,
        negCount: negCount,
        highArousalCount: highCount,
        timestamp: new Date().toISOString()
      };

      this._data.emotionalState.push(record);
      return record;
    },

    getEmotionalStateSummary: function() {
      var ers = this._data.emotionalState;
      if (ers.length === 0) return null;

      // Per-phase averages
      var byPhase = {};
      ers.forEach(function(r) {
        if (!byPhase[r.phase]) byPhase[r.phase] = { valence: [], arousal: [] };
        byPhase[r.phase].valence.push(r.valence);
        byPhase[r.phase].arousal.push(r.arousal);
      });
      var phaseAverages = {};
      Object.keys(byPhase).forEach(function(p) {
        var vArr = byPhase[p].valence;
        var aArr = byPhase[p].arousal;
        phaseAverages[p] = {
          avgValence: Math.round(vArr.reduce(function(a,v){return a+v;},0)/vArr.length*100)/100,
          avgArousal: Math.round(aArr.reduce(function(a,v){return a+v;},0)/aArr.length*100)/100
        };
      });

      // Overall
      var avgValence = Math.round(ers.reduce(function(a,r){return a+r.valence;},0)/ers.length*100)/100;
      var avgArousal = Math.round(ers.reduce(function(a,r){return a+r.arousal;},0)/ers.length*100)/100;

      // Trajectory: compare first-half vs second-half valence
      // Declining valence = increasing distress as case progresses
      var mid   = Math.floor(ers.length / 2);
      var first = ers.slice(0, mid);
      var last  = ers.slice(mid);
      var avgFirst = first.length ? first.reduce(function(a,r){return a+r.valence;},0)/first.length : 0;
      var avgLast  = last.length  ? last.reduce(function(a,r){return a+r.valence;},0)/last.length   : 0;
      var trajectory = 'stable';
      if (avgLast < avgFirst - 0.15) trajectory = 'declining';  // increasing distress
      if (avgLast > avgFirst + 0.15) trajectory = 'improving';

      // Phase 3 (history-taking) affect — primary predictor for Study 10
      var phase3 = phaseAverages['3'] || null;

      // Flag: negative high-arousal during history (the theorized anchoring trigger)
      var negHighArousalInPhase3 = ers.filter(function(r) {
        return r.phase === 3 && r.valenceLabel === 'negative' && r.arousalLabel === 'activated';
      }).length;

      return {
        avgValence: avgValence,
        avgArousal: avgArousal,
        trajectory: trajectory,
        phaseAverages: phaseAverages,
        phase3Affect: phase3,
        negHighArousalPhase3Count: negHighArousalInPhase3,
        // Research flag for Study 10 analysis:
        // true when student shows negative activated affect during history
        // which the hypothesis predicts correlates with subsequent anchoring
        ersRiskFlag: negHighArousalInPhase3 >= 2,
        totalMeasurements: ers.length
      };
    },


    // ═══════════════════════════════════════════════════════════
    // 7. COGNITIVE LOAD TOPOGRAPHY — Agent 5
    // ═══════════════════════════════════════════════════════════
    // Computes a per-turn cognitive load signature from two signals:
    //
    //   (a) Latency z-score: within-student normalized response time.
    //       High z-score = unusually slow for this student = higher load.
    //
    //   (b) Burst ratio: proportion of inter-character gaps < 500ms
    //       in a message. Low burst ratio (many pauses) = planning
    //       difficulty = higher load. Approximated via message length
    //       relative to latency (chars/sec proxy).
    //
    // Research question (Study 8): which phase transition carries the
    // highest and most variable cognitive load, and does that peak
    // correlate with diagnostic error at that phase?
    //
    // LIMITATION: latency in text-based simulation includes typing time
    // and is confounded by typing speed. The z-score normalization
    // partially controls for individual differences in typing speed
    // but cannot fully decouple load from motor speed. Results should
    // be interpreted at the group level across many sessions.
    // Absolute thresholds are pragmatic, not clinically validated.
    //
    // Primary citations:
    //   Sweller, J. (1988). Cognitive load during problem solving.
    //     Cogn Sci, 12(2), 257–285.
    //   Paas, F., Renkl, A., & Sweller, J. (2003). Cognitive load
    //     theory and instructional design. Educ Psychol, 38(1), 1–4.
    //   Moulton, C. A. et al. (2007). Slowing down when you should.
    //     Acad Med, 82(S10), S109–S116.
    //   Paas, F., & van Merriënboer, J. (1994). Variability of worked
    //     examples and transfer of geometrical problem-solving skills.
    //     J Educ Psychol, 86(1), 122–133.
    // ═══════════════════════════════════════════════════════════

    recordCognitiveLoad: function(text, phase, turn, latencyMs) {
      if (!latencyMs || latencyMs <= 0) return null;

      // Track this timestamp for burst-ratio calculation
      var now = Date.now();
      this._messageTimestamps.push(now);

      // ── Burst ratio proxy ────────────────────────────────────
      // True keystroke-level burst ratio requires client-side key
      // event tracking (future work). Here we use chars-per-second
      // as a proxy: fast typing (high cps) relative to message
      // length suggests less planning difficulty.
      //
      // Low cps relative to message length → more pauses → higher load
      var charCount   = (text || '').length;
      var latencySec  = latencyMs / 1000;
      var charsPerSec = latencySec > 0 ? charCount / latencySec : 0;

      // Normalize: >15 cps = fluent, <5 cps = many pauses
      // burstRatio: 0 (very slow/paused) to 1 (very fast/fluent)
      var burstRatio = Math.min(Math.max(charsPerSec / 15, 0), 1);
      burstRatio = Math.round(burstRatio * 100) / 100;

      // ── Z-score: computed at summary time once we have all data ─
      // Store raw latency now; z-score computed in getSummary()
      var record = {
        turn: turn,
        phase: phase,
        latencyMs: latencyMs,
        latencySec: Math.round(latencySec * 10) / 10,
        charCount: charCount,
        charsPerSec: Math.round(charsPerSec * 10) / 10,
        burstRatio: burstRatio,
        // Composite raw load: higher = more load
        // Will be z-scored in getSummary() relative to session mean
        rawLoadSignal: latencyMs * (1 - burstRatio),
        timestamp: new Date().toISOString()
      };

      this._data.cognitiveLoad.push(record);
      return record;
    },

    getCognitiveLoadSummary: function() {
      var cl = this._data.cognitiveLoad;
      if (cl.length < 2) return null;

      // ── Compute z-scores for rawLoadSignal ───────────────────
      var signals = cl.map(function(r) { return r.rawLoadSignal; });
      var mean = signals.reduce(function(a, v) { return a + v; }, 0) / signals.length;
      var variance = signals.reduce(function(a, v) { return a + Math.pow(v - mean, 2); }, 0) / signals.length;
      var sd = Math.sqrt(variance) || 1; // avoid div-by-zero

      var records = cl.map(function(r) {
        return {
          turn:          r.turn,
          phase:         r.phase,
          latencyMs:     r.latencyMs,
          burstRatio:    r.burstRatio,
          loadZ:         Math.round(((r.rawLoadSignal - mean) / sd) * 100) / 100,
          timestamp:     r.timestamp
        };
      });

      // ── Per-phase load signature ──────────────────────────────
      var byPhase = {};
      records.forEach(function(r) {
        if (!byPhase[r.phase]) byPhase[r.phase] = { loadZ: [], latencyMs: [], burstRatio: [] };
        byPhase[r.phase].loadZ.push(r.loadZ);
        byPhase[r.phase].latencyMs.push(r.latencyMs);
        byPhase[r.phase].burstRatio.push(r.burstRatio);
      });

      var phaseSignatures = {};
      Object.keys(byPhase).forEach(function(p) {
        var pd = byPhase[p];
        var avgZ = pd.loadZ.reduce(function(a,v){return a+v;},0) / pd.loadZ.length;
        var avgLat = pd.latencyMs.reduce(function(a,v){return a+v;},0) / pd.latencyMs.length;
        var avgBurst = pd.burstRatio.reduce(function(a,v){return a+v;},0) / pd.burstRatio.length;

        // Load category for this phase
        var loadCategory = avgZ > 1.0  ? 'high' :
                           avgZ > 0.3  ? 'elevated' :
                           avgZ < -0.5 ? 'low' : 'normal';

        phaseSignatures[p] = {
          avgLoadZ:    Math.round(avgZ * 100) / 100,
          avgLatencyMs: Math.round(avgLat),
          avgBurstRatio: Math.round(avgBurst * 100) / 100,
          loadCategory: loadCategory,
          nTurns: pd.loadZ.length
        };
      });

      // ── Peak load phase ───────────────────────────────────────
      // The phase with the highest average loadZ — the primary
      // finding for Study 8 (cognitive load topography)
      var peakPhase = Object.keys(phaseSignatures).reduce(function(best, p) {
        return phaseSignatures[p].avgLoadZ > (phaseSignatures[best] ? phaseSignatures[best].avgLoadZ : -Infinity)
          ? p : best;
      }, Object.keys(phaseSignatures)[0]);

      // ── High-load turns ───────────────────────────────────────
      // Turns with loadZ > 1.5 (unusually high for this student)
      var highLoadTurns = records.filter(function(r) { return r.loadZ > 1.5; })
        .map(function(r) { return { turn: r.turn, phase: r.phase, loadZ: r.loadZ }; });

      // ── Trajectory ───────────────────────────────────────────
      var mid = Math.floor(records.length / 2);
      var firstHalfAvg = records.slice(0, mid).reduce(function(a,r){return a+r.loadZ;},0) / (mid || 1);
      var secondHalfAvg = records.slice(mid).reduce(function(a,r){return a+r.loadZ;},0) / (records.length - mid || 1);
      var trajectory = 'stable';
      if (secondHalfAvg > firstHalfAvg + 0.5) trajectory = 'escalating';
      if (secondHalfAvg < firstHalfAvg - 0.5) trajectory = 'decreasing';

      return {
        phaseSignatures: phaseSignatures,
        peakLoadPhase: peakPhase,
        peakLoadLabel: {
          '1':'Initial Differential', '2':'Justification', '3':'History-Taking',
          '4':'Revised Differential', '5':'Physical Exam', '6':'Labs & Imaging',
          '7':'Report Comparison',   '8':'Reflection',    '9':'Management'
        }[peakPhase] || ('Phase ' + peakPhase),
        highLoadTurns: highLoadTurns,
        trajectory: trajectory,
        sessionMeanLatencyMs: Math.round(mean),
        sessionSdLatencyMs: Math.round(sd),
        totalMeasurements: cl.length
      };
    },


    // ═══════════════════════════════════════════════════════════


    // ==========================================================
    // 8. PROFESSION-SPECIFIC SIGNAL DETECTORS
    // ==========================================================
    // Captures reasoning behaviors unique to each health profession.
    // Auto-detects profession from localStorage; silent if not set.
    // Grounding: Kassirer (2010) Teaching Clinical Reasoning;
    //   Bowen (2006) Med Educ; Higgs & Jones (2008) Clinical Reasoning
    // ==========================================================

    _professionSignals: [],
    _professionId: null,

    _getProfessionId: function() {
      if (this._professionId) return this._professionId;
      try {
        var u = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
        this._professionId = (u.professionProfile && u.professionProfile.professionId) || 'medicine';
      } catch(e) { this._professionId = 'medicine'; }
      return this._professionId;
    },

    analyzeProfessionSignals: function(text, phase, turn) {
      var prof = this._getProfessionId();
      var lower = text.toLowerCase();
      var signal = { turn: turn, phase: phase, profession: prof, flags: [] };

      // ── PHARMACY: mechanism-first vs drug-name-first ──────────────────────
      if (prof === 'pharmacy') {
        // Did student mention mechanism before drug name?
        var hasMechanism = /receptor|enzyme|inhibit|block|agonist|pathway|phamacokinetic|pk|pd|clearance|half.life|bioavail/i.test(text);
        var hasDrugName  = /(statin|metformin|lisinopril|amlodipine|atorvastatin|warfarin|heparin|insulin|metoprolol|furosemide|omeprazole|ssri|acei|arb|beta.block|calcium channel)/i.test(text);
        var hasPatientFactor = /renal|hepatic|creatinine|gfr|liver|allergy|pregnant|age|weight|interaction|contraindic/i.test(text);

        if (hasDrugName && !hasMechanism)  signal.flags.push('drug_name_before_mechanism');
        if (hasMechanism && !hasDrugName)  signal.flags.push('mechanism_first');
        if (hasDrugName && !hasPatientFactor && phase >= 6) signal.flags.push('patient_factor_neglect');
        if (hasPatientFactor)              signal.flags.push('patient_factor_considered');
        if (/interaction|polypharmacy|med list|all medications/i.test(text)) signal.flags.push('polypharmacy_awareness');
      }

      // ── PHYSICAL THERAPY: red flag screen + functional frame ─────────────
      if (prof === 'pt') {
        var redFlagTerms = /cancer|tumor|fracture|cauda equina|cord compress|infection|fever|weight loss|night pain|bowel|bladder|bilateral|saddle|iv drug|osteoporosis|steroid|anticoagul/i;
        var mechanicalTerms = /worse with|better with|position|movement|loading|compress|stretch|relax|rest|activity|posture/i;
        var functionalTerms = /walk|stand|sit|lift|carry|daily|function|work|independ|transfer|gait|balance|adl/i;
        var referralTerms = /refer|physician|doctor|md|do|specialist|imaging|x.ray|mri|ct scan/i;

        if (redFlagTerms.test(text))        signal.flags.push('red_flag_screened');
        if (mechanicalTerms.test(text))     signal.flags.push('mechanical_reasoning');
        if (!redFlagTerms.test(text) && phase <= 3) signal.flags.push('red_flag_not_screened_early');
        if (functionalTerms.test(text))     signal.flags.push('functional_outcome_framed');
        if (referralTerms.test(text))       signal.flags.push('referral_threshold_considered');
      }

      // ── OCCUPATIONAL THERAPY: occupation-first reasoning ─────────────────
      if (prof === 'ot') {
        var occupationTerms = /occupation|daily|function|role|meaningful|work|leisure|self.care|adl|iadl|bathe|dress|cook|drive|independ|participat/i;
        var diagnosisTerms  = /diagnosis|diagnose|condition|disease|disorder|pathology/i;
        var cogTerms        = /delirium|dementia|cognit|memory|orientat|confused|cam|mmse|moca|attention|executive/i;
        var envTerms        = /home|environment|modification|adapt|equipment|assist|device|caregiver|support/i;

        if (occupationTerms.test(text))     signal.flags.push('occupation_centered');
        if (diagnosisTerms.test(text) && !occupationTerms.test(text)) signal.flags.push('diagnosis_without_function');
        if (cogTerms.test(text))            signal.flags.push('cognitive_screening_considered');
        if (envTerms.test(text))            signal.flags.push('environmental_context_considered');
      }

      // ── OPTOMETRY: bidirectional ocular-systemic reasoning ────────────────
      if (prof === 'optometry') {
        var ocularTerms   = /retina|disc|optic|cornea|anterior|posterior|fundus|visual field|pressure|iop|acuity|macula|vessel|cup.disc|nerve|vitreous|lens|pupil/i;
        var systemicTerms = /diabetes|hypertension|multiple sclerosis|lupus|sarcoid|thyroid|hiv|syphilis|lyme|cancer|tumor|anemia|sickle|inflammatory|autoimmune|systemic/i;
        var bridgeTerms   = /secondary|caused by|associated with|due to|manifestation|window|indicator|sign of/i;
        var referralTerms = /refer|internist|neurolog|endocrin|rheumatol|physician|md|specialist|systemic workup/i;

        if (ocularTerms.test(text))         signal.flags.push('ocular_finding_noted');
        if (systemicTerms.test(text))       signal.flags.push('systemic_hypothesis_considered');
        if (ocularTerms.test(text) && systemicTerms.test(text)) signal.flags.push('bidirectional_reasoning');
        if (bridgeTerms.test(text))         signal.flags.push('causal_bridge_articulated');
        if (referralTerms.test(text))       signal.flags.push('systemic_referral_considered');
        if (ocularTerms.test(text) && !systemicTerms.test(text) && phase >= 4) signal.flags.push('ocular_anchoring_risk');
      }

      // ── DENTISTRY: local vs referred pain + oral-systemic ────────────────
      if (prof === 'dentistry') {
        var localTerms    = /tooth|teeth|pulp|periodon|caries|abscess|tmj|occlus|bite|jaw|oral|gingiv|mucos/i;
        var referredTerms = /referred|radiating|sinus|cardiac|vascular|neurolog|trigemin|cervical|ear|temporal|migraine/i;
        var systemicTerms = /diabetes|cardiovascular|immune|hiv|leukemia|blood disorder|clotting|bisphosphonat|anticoagul/i;
        var drugTerms     = /drug|medication|interaction|warfarin|aspirin|antibiotic|analgesic|nsaid|steroid/i;

        if (localTerms.test(text))          signal.flags.push('local_dental_hypothesis');
        if (referredTerms.test(text))       signal.flags.push('referred_pain_considered');
        if (systemicTerms.test(text))       signal.flags.push('oral_systemic_link_noted');
        if (drugTerms.test(text))           signal.flags.push('pharmacology_considered');
        if (localTerms.test(text) && !referredTerms.test(text) && phase >= 4) signal.flags.push('local_anchoring_risk');
      }

      // ── PA / NURSING / MEDICINE: threshold calibration ───────────────────
      if (['pa', 'nursing', 'medicine'].includes(prof)) {
        var commitTerms   = /my working diagnosis|most likely|i think this is|leading diagnosis|working dx/i;
        var hedgeTerms    = /could be|might be|possible|maybe|perhaps|not sure|need more|wait for|pending/i;
        var independTerms = /i will|i would|my plan|i recommend|i order|i prescribe|i manage/i;

        if (commitTerms.test(text) && phase <= 4)  signal.flags.push('early_commitment');
        if (hedgeTerms.test(text) && phase >= 6)   signal.flags.push('late_hedging_risk');
        if (independTerms.test(text))              signal.flags.push('independent_reasoning');
      }

      // ── MBS / PRE-HEALTH: mechanism-to-clinical bridge ───────────────────
      if (prof === 'mbs') {
        var mechTerms     = /mechanism|pathway|receptor|enzyme|protein|gene|cellular|molecular|signaling|cascade|inhibit/i;
        var clinTerms     = /patient|symptom|present|complain|exam|finding|diagnosis|treatment|clinical/i;
        var mcatTerms     = /mcat|passage|question|test|exam prep|practice/i;

        if (mechTerms.test(text) && clinTerms.test(text))  signal.flags.push('mechanism_clinical_bridge');
        if (mechTerms.test(text) && !clinTerms.test(text)) signal.flags.push('mechanism_without_clinical');
        if (clinTerms.test(text) && !mechTerms.test(text)) signal.flags.push('clinical_without_mechanism');
        if (mcatTerms.test(text))                          signal.flags.push('mcat_framing');
      }

      if (signal.flags.length > 0) {
        this._professionSignals.push(signal);
      }
    },

    getProfessionSignalSummary: function() {
      var signals = this._professionSignals;
      if (!signals.length) return null;

      var prof = this._getProfessionId();
      var flagCounts = {};
      signals.forEach(function(s) {
        s.flags.forEach(function(f) {
          flagCounts[f] = (flagCounts[f] || 0) + 1;
        });
      });

      // Compute profession-specific composite metrics
      var summary = {
        profession: prof,
        totalSignals: signals.length,
        flagCounts: flagCounts,
        keyMetrics: {}
      };

      if (prof === 'pharmacy') {
        var total = (flagCounts['drug_name_before_mechanism'] || 0) + (flagCounts['mechanism_first'] || 0);
        summary.keyMetrics.mechanismFirstRate = total > 0
          ? Math.round((flagCounts['mechanism_first'] || 0) / total * 100) : null;
        summary.keyMetrics.patientFactorRate = signals.length > 0
          ? Math.round(((flagCounts['patient_factor_considered'] || 0) / signals.length) * 100) : null;
        summary.keyMetrics.polypharmacyAwareness = (flagCounts['polypharmacy_awareness'] || 0) > 0;
      }

      if (prof === 'pt') {
        summary.keyMetrics.redFlagScreened = (flagCounts['red_flag_screened'] || 0) > 0;
        summary.keyMetrics.functionalFrameRate = signals.length > 0
          ? Math.round(((flagCounts['functional_outcome_framed'] || 0) / signals.length) * 100) : null;
        summary.keyMetrics.referralThreshold = (flagCounts['referral_threshold_considered'] || 0) > 0;
      }

      if (prof === 'optometry') {
        var ocular = flagCounts['ocular_finding_noted'] || 0;
        var both   = flagCounts['bidirectional_reasoning'] || 0;
        summary.keyMetrics.bidirectionalRate = ocular > 0
          ? Math.round(both / ocular * 100) : null;
        summary.keyMetrics.systemicReferralConsidered = (flagCounts['systemic_referral_considered'] || 0) > 0;
        summary.keyMetrics.ocularAnchoringRisk = (flagCounts['ocular_anchoring_risk'] || 0) > 0;
      }

      if (prof === 'ot') {
        summary.keyMetrics.occupationCenteredRate = signals.length > 0
          ? Math.round(((flagCounts['occupation_centered'] || 0) / signals.length) * 100) : null;
        summary.keyMetrics.cognitiveScreeningConsidered = (flagCounts['cognitive_screening_considered'] || 0) > 0;
      }

      if (prof === 'dentistry') {
        summary.keyMetrics.referredPainConsidered = (flagCounts['referred_pain_considered'] || 0) > 0;
        summary.keyMetrics.oralSystemicLinkNoted = (flagCounts['oral_systemic_link_noted'] || 0) > 0;
        summary.keyMetrics.localAnchoringRisk = (flagCounts['local_anchoring_risk'] || 0) > 0;
      }

      if (prof === 'mbs') {
        var bridges = flagCounts['mechanism_clinical_bridge'] || 0;
        var mechOnly = flagCounts['mechanism_without_clinical'] || 0;
        var clinOnly = flagCounts['clinical_without_mechanism'] || 0;
        var total2 = bridges + mechOnly + clinOnly;
        summary.keyMetrics.bridgingRate = total2 > 0
          ? Math.round(bridges / total2 * 100) : null;
      }

      return summary;
    },

    analyzeStudentMessage: function(text, phase, turn) {
      // Capture latency before recordLatency() resets _lastMessageTime
      var latencyMs = null;
      if (this._lastMessageTime) {
        latencyMs = Date.now() - this._lastMessageTime;
      }

      // Existing collectors (recordLatency sets _lastMessageTime internally)
      this.recordLatency(phase, turn);
      this.analyzeConfidence(text, phase, turn);
      this.classifyQuestion(text, phase, turn);
      this.analyzeEmpathy(text, phase, turn);
      this.checkCueFollowUp(text, turn);

      // Agent 7: Emotional Reasoning State — passive affect analysis
      this.analyzeEmotionalState(text, phase, turn);

      // Agent 5: Cognitive Load Topography — latency + burst ratio
      if (latencyMs !== null && latencyMs > 0) {
        this.recordCognitiveLoad(text, phase, turn, latencyMs);
      }

      // Agent 8: Profession-specific signal detectors
      this.analyzeProfessionSignals(text, phase, turn);
    },

    analyzePatientMessage: function(text, phase, turn) {
      // Auto-detect patient cues
      if (/\b(worried|scared|concerned|anxious|nervous|afraid|don't know what|confused|overwhelmed)\b/i.test(text)) {
        this.registerPatientCue(text, 'emotional', turn);
      }
      if (/\b(sister|brother|husband|wife|family|friend|boss|work|job|money|insurance|kids|children)\b/i.test(text)) {
        this.registerPatientCue(text, 'social', turn);
      }
      if (/\b(worse|better|changed|new|started|noticed|different|before this|used to)\b/i.test(text)) {
        this.registerPatientCue(text, 'clinical', turn);
      }
    },

    getFullSummary: function() {
      return {
        implicitConfidence:  this.getConfidenceSummary(),
        questionTypes:       this.getQuestionTypeSummary(),
        responseLatency:     this.getLatencySummary(),
        empathyAndRapport:   this.getEmpathySummary(),
        cueUtilization:      this.getCueUtilizationSummary(),
        emotionalState:      this.getEmotionalStateSummary(),    // Agent 7
        cognitiveLoad:       this.getCognitiveLoadSummary(),     // Agent 5
        professionSignals:   this.getProfessionSignalSummary()    // Agent 8
      };
    }
  };

  window.RdxPassive = PassiveData;
})();
