/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx Advanced Prototypes — rdx-advanced.js
 * ═══════════════════════════════════════════════════════════════
 * 1. EXPLAINABLE AGENT — transparent decision log
 * 2. EMOTIONAL AI — typing pattern analysis
 * 3. RPFS REASONING TRACE — captures reasoning graph data
 * 4. MULTI-AGENT DEFINITIONS — agent role specifications
 *
 * Requires: rdx-agent-core.js loaded first
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';


  // ═══════════════════════════════════════════════════════════════
  // 1. EXPLAINABLE AGENT — Decision Transparency Log
  // ═══════════════════════════════════════════════════════════════
  // Records every decision the orchestrator makes with its reasoning.
  // Faculty and IRB can audit exactly why any score was given.

  const ExplainableAgent = {

    _log: [],

    /**
     * Record an agent decision with full context.
     */
    logDecision: function(decision) {
      var entry = {
        timestamp: new Date().toISOString(),
        turn: decision.turn || null,
        phase: decision.phase || null,
        type: decision.type,         // 'phase_transition', 'bias_detected', 'metacog_prompt',
                                      // 'score_assigned', 'leak_detected', 'cogload_interrupt',
                                      // 'difficulty_adjusted', 'gap_identified', 'signal_matched'
        action: decision.action,      // What the agent did
        reasoning: decision.reasoning, // Why it did it
        inputs: decision.inputs || {},  // What data drove the decision
        outputs: decision.outputs || {}, // What resulted
        alternatives: decision.alternatives || null, // What else was considered
        confidence: decision.confidence || null // How confident the agent is (0-1)
      };
      this._log.push(entry);
      return entry;
    },

    // Convenience methods for common decision types
    logPhaseTransition: function(fromPhase, toPhase, trigger, turn) {
      return this.logDecision({
        turn: turn, phase: fromPhase, type: 'phase_transition',
        action: 'Transitioned from Phase ' + fromPhase + ' to Phase ' + toPhase,
        reasoning: 'Trigger detected: ' + trigger,
        inputs: { fromPhase: fromPhase, toPhase: toPhase, trigger: trigger },
        outputs: { newPhase: toPhase }
      });
    },

    logBiasDetected: function(biasType, severity, evidence, turn, phase) {
      return this.logDecision({
        turn: turn, phase: phase, type: 'bias_detected',
        action: 'Flagged ' + biasType + ' bias (' + severity + ')',
        reasoning: evidence,
        inputs: { studentDifferential: evidence },
        outputs: { biasType: biasType, severity: severity }
      });
    },

    logScoreAssigned: function(scoreName, value, maxValue, reasoning, inputs, phase) {
      return this.logDecision({
        phase: phase, type: 'score_assigned',
        action: 'Assigned ' + scoreName + ': ' + value + '/' + maxValue,
        reasoning: reasoning,
        inputs: inputs,
        outputs: { score: value, max: maxValue }
      });
    },

    logSignalMatched: function(signalName, matched, keywords, turn, phase) {
      return this.logDecision({
        turn: turn, phase: phase, type: 'signal_matched',
        action: matched ? 'Signal matched: ' + signalName : 'Signal not matched: ' + signalName,
        reasoning: matched ? 'Student message matched keywords for ' + signalName : 'No match found',
        inputs: { signal: signalName, keywords: keywords },
        outputs: { matched: matched }
      });
    },

    logMetacogPrompt: function(promptType, promptText, turn, phase) {
      return this.logDecision({
        turn: turn, phase: phase, type: 'metacog_prompt',
        action: 'Delivered metacognition prompt: ' + promptType,
        reasoning: 'Pattern detected in student message warranting metacognitive reflection',
        inputs: { promptType: promptType },
        outputs: { promptText: promptText }
      });
    },

    logCogLoadInterrupt: function(interruptType, urgency, turn, phase, currentRate) {
      return this.logDecision({
        turn: turn, phase: phase, type: 'cogload_interrupt',
        action: 'Delivered interruption: ' + interruptType + ' (' + urgency + ' urgency)',
        reasoning: 'Random trigger at rate ' + (currentRate * 100).toFixed(0) + '% (adjusted for performance)',
        inputs: { baseRate: currentRate, interruptType: interruptType },
        outputs: { urgency: urgency }
      });
    },

    logRAGRetrieval: function(phase, guidelinesFound, searchTerms) {
      return this.logDecision({
        phase: phase, type: 'rag_retrieval',
        action: 'Retrieved ' + guidelinesFound + ' guidelines for Claude grounding',
        reasoning: 'Injected verified reference context to ground Claude responses',
        inputs: { searchTerms: searchTerms },
        outputs: { guidelinesFound: guidelinesFound }
      });
    },

    /**
     * Get the full decision log.
     */
    getLog: function() { return this._log; },

    /**
     * Get a human-readable summary of key decisions.
     */
    getSummary: function() {
      var summary = { total: this._log.length, byType: {} };
      this._log.forEach(function(e) {
        summary.byType[e.type] = (summary.byType[e.type] || 0) + 1;
      });
      return summary;
    },

    /**
     * Format log as readable text (for dashboard or export).
     */
    toText: function() {
      var lines = ['AGENT DECISION LOG', '=' .repeat(50), ''];
      this._log.forEach(function(e, i) {
        lines.push('[' + e.timestamp.split('T')[1].split('.')[0] + '] ' +
          'Phase ' + (e.phase || '?') + ' | Turn ' + (e.turn || '?'));
        lines.push('  TYPE: ' + e.type);
        lines.push('  ACTION: ' + e.action);
        lines.push('  REASONING: ' + e.reasoning);
        if (e.alternatives) lines.push('  ALTERNATIVES: ' + e.alternatives);
        lines.push('');
      });
      return lines.join('\n');
    },

    clear: function() { this._log = []; }
  };


  // ═══════════════════════════════════════════════════════════════
  // 2. EMOTIONAL AI — Typing Pattern Analysis
  // ═══════════════════════════════════════════════════════════════
  // Detects student emotional state from how they type, not just
  // what they type. Tracks: speed, pauses, deletions, length trends.

  const EmotionalAI = {

    _keystrokes: [],
    _messageHistory: [],
    _sessionStart: Date.now(),
    _currentMessageStart: null,
    _deletionCount: 0,
    _pauseThreshold: 3000, // 3 seconds = significant pause

    /**
     * Attach to a chat input element to track typing patterns.
     */
    attachToInput: function(inputElement) {
      if (!inputElement) return;
      var self = this;

      inputElement.addEventListener('keydown', function(e) {
        var now = Date.now();
        if (!self._currentMessageStart) self._currentMessageStart = now;

        self._keystrokes.push({
          timestamp: now,
          key: e.key === 'Backspace' ? 'DELETE' : e.key.length === 1 ? 'CHAR' : 'OTHER',
          sinceLastKey: self._keystrokes.length > 0 ? now - self._keystrokes[self._keystrokes.length - 1].timestamp : 0
        });

        if (e.key === 'Backspace' || e.key === 'Delete') {
          self._deletionCount++;
        }
      });

      inputElement.addEventListener('focus', function() {
        self._currentMessageStart = Date.now();
        self._deletionCount = 0;
      });
    },

    /**
     * Record a completed message and analyze patterns.
     * Call this when the student sends a message.
     */
    onMessageSent: function(messageText) {
      var now = Date.now();
      var compositionTime = this._currentMessageStart ? now - this._currentMessageStart : 0;

      // Extract keystroke metrics for this message
      var recentKeystrokes = this._keystrokes.filter(function(k) {
        return k.timestamp >= (this._currentMessageStart || 0);
      }.bind(this));

      var charKeys = recentKeystrokes.filter(function(k) { return k.key === 'CHAR'; });
      var deleteKeys = recentKeystrokes.filter(function(k) { return k.key === 'DELETE'; });
      var pauses = recentKeystrokes.filter(function(k) { return k.sinceLastKey > this._pauseThreshold; }.bind(this));

      // Calculate typing speed (chars per second)
      var typingSpeed = compositionTime > 0 ? (charKeys.length / (compositionTime / 1000)) : 0;

      // Deletion ratio
      var deletionRatio = charKeys.length > 0 ? deleteKeys.length / charKeys.length : 0;

      var record = {
        timestamp: new Date().toISOString(),
        messageLength: messageText.length,
        compositionTimeMs: compositionTime,
        typingSpeed: Math.round(typingSpeed * 100) / 100,
        deletionRatio: Math.round(deletionRatio * 100) / 100,
        pauseCount: pauses.length,
        deletionCount: this._deletionCount,
        keystrokeCount: recentKeystrokes.length,
        emotionalState: null // filled below
      };

      // Analyze emotional state
      record.emotionalState = this._analyzeState(record);

      this._messageHistory.push(record);

      // Reset for next message
      this._currentMessageStart = null;
      this._deletionCount = 0;
      this._keystrokes = [];

      return record;
    },

    /**
     * Analyze emotional state from typing metrics.
     */
    _analyzeState: function(record) {
      var state = { confidence: 'neutral', engagement: 'active', frustration: 'none' };
      var history = this._messageHistory;

      // ── FRUSTRATION SIGNALS ──
      // High deletion ratio = editing/rethinking
      if (record.deletionRatio > 0.3) {
        state.frustration = 'mild';
      }
      if (record.deletionRatio > 0.5) {
        state.frustration = 'moderate';
      }
      // Rapid short messages after longer ones
      if (history.length >= 2) {
        var prev = history[history.length - 1];
        if (prev.messageLength > 100 && record.messageLength < 30 && record.compositionTimeMs < 5000) {
          state.frustration = 'moderate'; // terse response after detailed one
        }
      }

      // ── CONFUSION SIGNALS ──
      // Long pauses + many deletions = uncertainty
      if (record.pauseCount >= 2 && record.deletionRatio > 0.2) {
        state.confidence = 'uncertain';
      }
      // Very long composition time for a short message
      if (record.compositionTimeMs > 30000 && record.messageLength < 80) {
        state.confidence = 'struggling';
      }

      // ── ENGAGEMENT SIGNALS ──
      // Message length trend
      if (history.length >= 3) {
        var recent3 = history.slice(-3).map(function(h) { return h.messageLength; });
        var avgRecent = recent3.reduce(function(a, b) { return a + b; }, 0) / 3;
        if (history.length >= 6) {
          var earlier3 = history.slice(-6, -3).map(function(h) { return h.messageLength; });
          var avgEarlier = earlier3.reduce(function(a, b) { return a + b; }, 0) / 3;
          if (avgRecent < avgEarlier * 0.5) {
            state.engagement = 'declining'; // messages getting much shorter
          }
          if (avgRecent > avgEarlier * 1.5) {
            state.engagement = 'increasing'; // messages getting more detailed
          }
        }
      }

      // ── CONFIDENCE SIGNALS ──
      // Fast typing, few deletions = confident
      if (record.typingSpeed > 3 && record.deletionRatio < 0.1 && record.pauseCount === 0) {
        state.confidence = 'confident';
      }

      return state;
    },

    /**
     * Get current emotional assessment for the agent to use.
     */
    getCurrentState: function() {
      if (this._messageHistory.length === 0) return null;
      var last = this._messageHistory[this._messageHistory.length - 1];
      return last.emotionalState;
    },

    /**
     * Get adaptation suggestions based on emotional state.
     * These can be injected into the agent's behavior.
     */
    getAdaptations: function() {
      var state = this.getCurrentState();
      if (!state) return [];
      var adaptations = [];

      if (state.frustration === 'moderate') {
        adaptations.push({
          type: 'tone',
          suggestion: 'Student may be frustrated. Use a warmer, more encouraging tone. Acknowledge effort.'
        });
      }
      if (state.confidence === 'struggling') {
        adaptations.push({
          type: 'difficulty',
          suggestion: 'Student appears to be struggling. Consider offering a scaffolding prompt or narrowing the question.'
        });
      }
      if (state.confidence === 'uncertain') {
        adaptations.push({
          type: 'metacognition',
          suggestion: 'Student shows signs of uncertainty. A metacognitive prompt ("walk me through your thinking") may help them organize their thoughts.'
        });
      }
      if (state.engagement === 'declining') {
        adaptations.push({
          type: 'engagement',
          suggestion: 'Student engagement appears to be declining. Consider moving to the next phase or offering encouragement.'
        });
      }

      return adaptations;
    },

    getHistory: function() { return this._messageHistory; },
    clear: function() { this._keystrokes = []; this._messageHistory = []; this._deletionCount = 0; }
  };


  // ═══════════════════════════════════════════════════════════════
  // 3. RPFS REASONING TRACE — Reasoning Pathway Fingerprinting
  // ═══════════════════════════════════════════════════════════════
  // Captures the student's reasoning as a graph structure:
  // nodes = diagnoses and evidence, edges = connections made.
  // Used for visualization and cross-student comparison.

  const ReasoningTrace = {

    _nodes: [],
    _edges: [],
    _nodeIdCounter: 0,

    clear: function() {
      this._nodes = [];
      this._edges = [];
      this._nodeIdCounter = 0;
    },

    /**
     * Add a diagnosis node.
     */
    addDiagnosis: function(name, phase, confidence, source) {
      var id = 'dx-' + (++this._nodeIdCounter);
      this._nodes.push({
        id: id,
        type: 'diagnosis',
        label: name,
        phase: phase,
        confidence: confidence || null,
        source: source || 'student', // 'student', 'report', 'attending'
        addedAt: new Date().toISOString(),
        removedAt: null,
        active: true
      });
      return id;
    },

    /**
     * Add an evidence node (history finding, lab result, imaging finding).
     */
    addEvidence: function(label, category, phase) {
      var id = 'ev-' + (++this._nodeIdCounter);
      this._nodes.push({
        id: id,
        type: 'evidence',
        label: label,
        category: category, // 'history', 'exam', 'lab', 'imaging', 'report'
        phase: phase,
        addedAt: new Date().toISOString(),
        active: true
      });
      return id;
    },

    /**
     * Connect evidence to diagnosis (student made this connection).
     */
    connect: function(fromId, toId, strength, reasoning) {
      this._edges.push({
        from: fromId,
        to: toId,
        strength: strength || 1, // 0-3 scale
        reasoning: reasoning || '',
        createdAt: new Date().toISOString(),
        phase: null
      });
    },

    /**
     * Mark a diagnosis as removed (student dropped it from differential).
     */
    removeDiagnosis: function(diagnosisId, phase) {
      var node = this._nodes.find(function(n) { return n.id === diagnosisId; });
      if (node) {
        node.active = false;
        node.removedAt = new Date().toISOString();
        node.removedInPhase = phase;
      }
    },

    /**
     * Auto-extract reasoning trace from session state.
     * Scans the transcript and differentials to build the graph.
     */
    extractFromState: function(state, caseData) {
      this.clear();
      var self = this;

      // Add diagnosis nodes from each phase's differential
      var dxMap = {}; // label -> id
      Object.entries(state.differentials || {}).forEach(function(entry) {
        var phaseKey = entry[0];
        var dxList = entry[1];
        var phaseNum = parseInt(phaseKey.replace('phase', ''));
        if (Array.isArray(dxList)) {
          dxList.forEach(function(d) {
            var label = d.diagnosis || d;
            if (!dxMap[label.toLowerCase()]) {
              var id = self.addDiagnosis(label, phaseNum, d.confidence || null, 'student');
              dxMap[label.toLowerCase()] = id;
            }
          });
        }
      });

      // Add evidence nodes from history flags
      Object.entries(state.historyFlags || {}).forEach(function(entry) {
        if (entry[1] === true) {
          self.addEvidence(entry[0], 'history', 3);
        }
      });

      // Add evidence from critical test results mentioned
      var studentTurns = (state.turns || []).filter(function(t) { return t.role === 'student'; });

      // Scan for imaging-related evidence
      var mentionedImaging = studentTurns.some(function(t) {
        return /ct|hrct|x-?ray|imaging|scan/i.test(t.content) && t.phase >= 6;
      });
      if (mentionedImaging) {
        self.addEvidence('Chest imaging ordered', 'imaging', 6);
      }

      // Scan for lab evidence
      var labTerms = ['cbc', 'cmp', 'esr', 'crp', 'troponin', 'ldh', 'hiv', 'quantiferon', 'afb', 'procalcitonin'];
      labTerms.forEach(function(lab) {
        var mentioned = studentTurns.some(function(t) {
          return new RegExp('\\b' + lab + '\\b', 'i').test(t.content) && t.phase >= 6;
        });
        if (mentioned) {
          self.addEvidence(lab.toUpperCase(), 'lab', 6);
        }
      });

      // Auto-connect: evidence mentioned in same turn as diagnosis update
      // (Simplified heuristic — real RPFS would use NLP)

      return this.getGraph();
    },

    /**
     * Get the complete graph data structure.
     */
    getGraph: function() {
      return {
        nodes: this._nodes,
        edges: this._edges,
        stats: {
          totalDiagnoses: this._nodes.filter(function(n) { return n.type === 'diagnosis'; }).length,
          activeDiagnoses: this._nodes.filter(function(n) { return n.type === 'diagnosis' && n.active; }).length,
          droppedDiagnoses: this._nodes.filter(function(n) { return n.type === 'diagnosis' && !n.active; }).length,
          evidenceNodes: this._nodes.filter(function(n) { return n.type === 'evidence'; }).length,
          connections: this._edges.length,
          // Complexity score: more nodes + edges = more complex reasoning
          complexity: this._nodes.length + this._edges.length
        }
      };
    },

    /**
     * Compare this trace to an expert trace (for gap analysis).
     */
    compareToExpert: function(expertGraph) {
      if (!expertGraph) return null;
      var studentDx = this._nodes.filter(function(n) { return n.type === 'diagnosis' && n.active; }).map(function(n) { return n.label.toLowerCase(); });
      var expertDx = expertGraph.nodes.filter(function(n) { return n.type === 'diagnosis' && n.active; }).map(function(n) { return n.label.toLowerCase(); });

      var matched = studentDx.filter(function(d) { return expertDx.indexOf(d) !== -1; });
      var missed = expertDx.filter(function(d) { return studentDx.indexOf(d) === -1; });
      var extra = studentDx.filter(function(d) { return expertDx.indexOf(d) === -1; });

      return {
        matchedDiagnoses: matched,
        missedDiagnoses: missed,
        extraDiagnoses: extra,
        overlapPercent: expertDx.length > 0 ? Math.round(matched.length / expertDx.length * 100) : 0,
        studentComplexity: this.getGraph().stats.complexity,
        expertComplexity: expertGraph.stats ? expertGraph.stats.complexity : 0
      };
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 4. MULTI-AGENT DEFINITIONS
  // ═══════════════════════════════════════════════════════════════
  // Defines the separate agent roles for a future multi-agent system.
  // Each agent has its own system prompt, information boundaries,
  // and personality. The orchestrator decides which agent speaks.

  const MultiAgentDefs = {

    agents: {
      patient: {
        name: 'Patient Agent',
        role: 'Plays the patient character with emotional state and disclosure logic',
        informationBoundary: 'Knows only what the patient would know. Has NO medical knowledge. Does not know their own diagnosis.',
        systemPromptTemplate: function(caseData, emotionState) {
          var ps = caseData.patientScript;
          var patientName = caseData.presentation.patientName;
          var prompt = 'You are ' + patientName + ', a patient in a medical encounter. Stay fully in character.\n\n';
          prompt += 'IDENTITY: ' + ps.identity + '\n';
          prompt += 'SYMPTOMS: ' + ps.hpiOnset + ' ' + ps.hpiProgression + '\n';
          prompt += '\nRULES:\n';
          prompt += '- Answer ONLY what is asked. Do not volunteer information.\n';
          prompt += '- Use plain lay language. No medical terms.\n';
          prompt += '- Never break character.\n';
          prompt += '- Never ask the student questions back.\n';

          if (emotionState) {
            var mods = emotionState.modifiers || [];
            if (mods.length > 0) {
              prompt += '\nCURRENT EMOTIONAL STATE:\n';
              mods.forEach(function(m) { prompt += '- ' + m + '\n'; });
            }
          }

          return prompt;
        },
        model: 'claude-sonnet-4-20250514',
        maxTokens: 300
      },

      attending: {
        name: 'Attending Agent (Dr. Patel)',
        role: 'Evaluates student reasoning using Socratic method',
        informationBoundary: 'Knows the case data and scoring criteria. Does NOT reveal diagnoses. Asks questions that guide.',
        systemPromptTemplate: function(caseData, phase, ragContext) {
          var prompt = 'You are Dr. Patel, a clinical reasoning evaluator. Use Socratic questioning.\n';
          prompt += 'RULES:\n- Never reveal the diagnosis\n- Never introduce diagnoses the student has not mentioned\n';
          prompt += '- Ask ONE focused question per response\n- Keep responses to 2-3 sentences\n';
          prompt += '- Never use bullet points, headers, or formatted lists\n';
          prompt += '- Never describe what "would" happen in brackets\n';

          if (ragContext) {
            prompt += '\n' + ragContext + '\n';
          }

          return prompt;
        },
        model: 'claude-sonnet-4-20250514',
        maxTokens: 500
      },

      nurse: {
        name: 'Nurse Agent',
        role: 'Delivers vitals updates, asks about orders, creates interruptions',
        informationBoundary: 'Knows patient vitals and nursing observations. Does NOT know the diagnosis or reasoning.',
        systemPromptTemplate: function(patientName, vitals) {
          return 'You are a nurse caring for ' + patientName + '. You provide brief, professional updates about the patient\'s status. Current vitals: T ' + vitals.temp + ', HR ' + vitals.hr + ', BP ' + vitals.bp + ', RR ' + vitals.rr + ', SpO2 ' + vitals.spo2 + '. Speak in 1-2 sentences. Be matter-of-fact.';
        },
        model: 'claude-haiku-4-5-20251001', // Haiku for efficiency
        maxTokens: 150
      },

      consultant: {
        name: 'Consultant Agent',
        role: 'Provides specialist perspective when consulted',
        informationBoundary: 'Knows specialty-specific information. May disagree with the student or attending.',
        systemPromptTemplate: function(specialty, question, ragContext) {
          var prompt = 'You are a ' + specialty + ' consultant. A medical student has requested your opinion on: ' + question + '\n';
          prompt += 'Give a brief, focused specialist perspective in 2-3 sentences. You may agree or disagree with the working diagnosis.\n';
          prompt += 'Speak as a specialist, not a teacher. Be direct and specific.\n';
          if (ragContext) prompt += '\n' + ragContext;
          return prompt;
        },
        model: 'claude-sonnet-4-20250514',
        maxTokens: 400
      }
    },

    /**
     * Get the appropriate agent for the current phase and context.
     */
    getActiveAgent: function(phase, context) {
      if (phase === 3 && context === 'patient_speaking') return this.agents.patient;
      if (context === 'nurse_interrupt') return this.agents.nurse;
      if (context === 'consult_requested') return this.agents.consultant;
      return this.agents.attending;
    },

    /**
     * Build the system prompt for a specific agent given the current state.
     */
    buildPrompt: function(agentKey, params) {
      var agent = this.agents[agentKey];
      if (!agent) return null;
      return {
        systemPrompt: agent.systemPromptTemplate.apply(null, params),
        model: agent.model,
        maxTokens: agent.maxTokens
      };
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // EXPORTS
  // ═══════════════════════════════════════════════════════════════

  window.RdxAdvanced = {
    ExplainableAgent: ExplainableAgent,
    EmotionalAI: EmotionalAI,
    ReasoningTrace: ReasoningTrace,
    MultiAgentDefs: MultiAgentDefs,
    version: '1.0.0'
  };

})();
