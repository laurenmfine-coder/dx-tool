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
      cueUtilization: []
    },
    _lastMessageTime: null,
    _patientCuesDelivered: [],

    clear: function() {
      this._data = { confidence: [], questionTypes: [], latency: [], empathy: [], cueUtilization: [] };
      this._lastMessageTime = null;
      this._patientCuesDelivered = [];
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
    // COMBINED ANALYSIS — one call for all passive streams
    // ═══════════════════════════════════════════════════════════

    analyzeStudentMessage: function(text, phase, turn) {
      this.recordLatency(phase, turn);
      this.analyzeConfidence(text, phase, turn);
      this.classifyQuestion(text, phase, turn);
      this.analyzeEmpathy(text, phase, turn);
      this.checkCueFollowUp(text, turn);
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
        implicitConfidence: this.getConfidenceSummary(),
        questionTypes: this.getQuestionTypeSummary(),
        responseLatency: this.getLatencySummary(),
        empathyAndRapport: this.getEmpathySummary(),
        cueUtilization: this.getCueUtilizationSummary()
      };
    }
  };

  window.RdxPassive = PassiveData;
})();
