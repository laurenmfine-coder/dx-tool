/**
 * rdx-student-model-bus.js — ReasonDx Student Model Bus
 * ═══════════════════════════════════════════════════════════════
 * A unified, real-time student model that every agent reads.
 *
 * PROBLEM IT SOLVES:
 *   Before this module, each agent (Dr. Patel, patient, debrief,
 *   faculty) received a fragment of what the system collectively
 *   knew about the student. The attending didn't know about
 *   longitudinal anchoring patterns. The patient didn't know about
 *   emotional state. The debrief didn't know the cognitive load
 *   peaked at Phase 3→4. This is the coordination bus that fixes
 *   that siloing.
 *
 * ARCHITECTURE:
 *   The bus maintains four memory layers (analogous to cognitive
 *   architecture theory — cf. Anderson et al., ACT-R; Laird, SOAR):
 *
 *   1. Working memory  — live session state (phase, turn, current dx)
 *   2. Episodic memory — prior session history from Supabase
 *   3. Semantic memory — guideline RAG context (already injected separately)
 *   4. Procedural memory — longitudinal cognitive profile (pattern_tags)
 *
 *   Plus two new real-time streams from rdx-passive.js:
 *   5. Affective state  — ERS valence/arousal from Agent 7
 *   6. Load signature   — CLT phase load from Agent 5
 *
 * OUTPUT:
 *   StudentModelBus.getPromptBlock(options)
 *     Returns a compact plain-text block for injection into any
 *     agent's system prompt. Different agents get different subsets:
 *       - Attending: longitudinal patterns + live load + live affect
 *       - Patient:   live affect + empathy density + question pattern
 *       - Debrief:   full model (all 6 layers)
 *       - Faculty:   full model + research flags
 *
 *   StudentModelBus.update(state, profile, sessionHistory)
 *     Called on every turn from simulation-engine.html after
 *     RdxPassive runs. Updates the live layers from fresh data.
 *
 *   StudentModelBus.getResearchSnapshot()
 *     Returns the structured data object for Supabase storage.
 *     Saved alongside passive_data in rad_study_sessions.
 *
 * AGENT AWARENESS TABLE:
 *   Agent          | Working | Episodic | Procedural | Affective | Load
 *   ─────────────────────────────────────────────────────────────────────
 *   Dr. Patel      |   ✓    |    ✓     |     ✓      |     ✓    |  ✓
 *   Patient voice  |   ✓    |    ✗     |     ✗      |     ✓    |  ✗
 *   Debrief agent  |   ✓    |    ✓     |     ✓      |     ✓    |  ✓
 *   Faculty agent  |   ✓    |    ✓     |     ✓      |     ✓    |  ✓
 *   Case selector  |   ✗    |    ✓     |     ✓      |     ✗    |  ✗
 *
 * THEORETICAL GROUNDING:
 *   Anderson, J. R. et al. (2004). An integrated theory of the mind.
 *     Psychol Rev, 111(4), 1036–1060. (ACT-R memory architecture)
 *   Laird, J. E. (2012). The Soar Cognitive Architecture. MIT Press.
 *   Minsky, M. (1986). Society of Mind. Simon & Schuster.
 *     (specialist agents coordinated by a supervisory process)
 *   Croskerry, P. (2009). A universal model of diagnostic reasoning.
 *     Acad Med, 84(8), 1022–1028. (dual process + affect in reasoning)
 * ═══════════════════════════════════════════════════════════════
 */

(function (window) {
  'use strict';

  // ─── Internal state ───────────────────────────────────────────────────────

  var _bus = {
    // Layer 1: Working memory — updated every turn
    working: {
      studentName:    null,
      trainingYear:   null,
      currentPhase:   null,
      phaseLabel:     null,
      turnCount:      0,
      currentDx:      [],      // top differential right now
      sessionId:      null,
      caseId:         null,
      caseDiagnosis:  null
    },

    // Layer 2: Episodic memory — loaded once at session start from Supabase
    episodic: {
      totalPriorSessions: 0,
      recentSessions:     [],  // last 3: { case_id, target_in_final, anchoring_detected, confidence_score }
      loaded:             false
    },

    // Layer 3 (handled externally by rdx-fingerprint.js buildProfileContext)
    // But we store the key tags here for fast access
    procedural: {
      patternTags:            [],
      anchoringRate:          null,
      prematureClosureRate:   null,
      missedPivotRate:        null,
      avgAccuracy:            null,
      avgConfidence:          null,
      avgDxBreadth:           null,
      loaded:                 false
    },

    // Layer 5: Affective state — updated every turn from RdxPassive
    affective: {
      currentValence:     0,       // -1 to +1, most recent turn
      currentArousal:     0,       // 0 to 1, most recent turn
      phase3AvgValence:   null,    // avg during history-taking
      phase3AvgArousal:   null,
      trajectory:         'stable',
      ersRiskFlag:        false,   // neg high-arousal in phase 3 ≥ 2 turns
      empathyDensity:     0,       // avg empathy signals per patient-facing turn
      questionPattern:    null     // 'open_first', 'closed_first', 'mixed'
    },

    // Layer 6: Cognitive load — updated every turn from RdxPassive
    load: {
      currentPhaseLoadZ:  null,    // z-score for current phase
      currentLoadCategory:'normal',
      peakLoadPhase:      null,
      peakLoadLabel:      null,
      trajectory:         'stable',
      highLoadTurns:      0
    }
  };

  var _phaseLabels = {
    1: 'Initial Differential', 2: 'Justification',   3: 'History-Taking',
    4: 'Revised Differential', 5: 'Physical Exam',   6: 'Labs & Imaging',
    7: 'Report Comparison',    8: 'Closing Reflection', 9: 'Management Plan'
  };

  // ─── update() ─────────────────────────────────────────────────────────────
  // Called every turn from simulation-engine.html after passive collectors run.

  function update(state, profile, sessionHistory) {
    if (!state) return;

    // Layer 1: Working memory
    _bus.working.studentName   = state.studentName   || null;
    _bus.working.trainingYear  = state.trainingYear  || null;
    _bus.working.currentPhase  = state.currentPhase  || null;
    _bus.working.phaseLabel    = _phaseLabels[state.currentPhase] || null;
    _bus.working.turnCount     = state.turnCount     || 0;
    _bus.working.sessionId     = state.sessionId     || null;
    _bus.working.caseId        = state.caseId        || null;

    // Current differential — last submitted differential array
    var diffs = state.differentials || {};
    var latestDx = diffs.phase7 || diffs.phase6 || diffs.phase5 ||
                   diffs.phase4 || diffs.phase1 || [];
    _bus.working.currentDx = latestDx.slice(0, 3).map(function(d) {
      return (d && (d.diagnosis || d.name || d)) || '';
    }).filter(Boolean);

    // Layer 2: Episodic memory (from session history)
    if (sessionHistory && sessionHistory.length > 0 && !_bus.episodic.loaded) {
      _bus.episodic.totalPriorSessions = sessionHistory.length;
      _bus.episodic.recentSessions = sessionHistory.slice(0, 3).map(function(s) {
        return {
          caseId:            s.case_id || '?',
          reachedDiagnosis:  !!s.target_in_final,
          anchoringDetected: !!s.anchoring_detected,
          confidenceScore:   s.confidence_score || null
        };
      });
      _bus.episodic.loaded = true;
    }

    // Layer 4: Procedural memory (from cognitive profile)
    if (profile && !_bus.procedural.loaded) {
      _bus.procedural.patternTags          = profile.pattern_tags          || [];
      _bus.procedural.anchoringRate        = profile.anchoring_rate        || null;
      _bus.procedural.prematureClosureRate = profile.premature_closure_rate || null;
      _bus.procedural.missedPivotRate      = profile.missed_pivot_rate     || null;
      _bus.procedural.avgAccuracy          = profile.avg_target_in_final   || null;
      _bus.procedural.avgConfidence        = profile.avg_confidence        || null;
      _bus.procedural.avgDxBreadth         = profile.avg_dx_count_initial  || null;
      _bus.procedural.loaded               = true;
    }

    // Layer 5: Affective state — pull from RdxPassive
    if (window.RdxPassive) {
      var ers = _bus.affective;
      var erData = window.RdxPassive._data.emotionalState;
      if (erData && erData.length > 0) {
        var last = erData[erData.length - 1];
        ers.currentValence = last.valence;
        ers.currentArousal = last.arousal;
      }

      // Phase 3 averages (history-taking affect)
      var phase3Records = (window.RdxPassive._data.emotionalState || [])
        .filter(function(r) { return r.phase === 3; });
      if (phase3Records.length > 0) {
        ers.phase3AvgValence = Math.round(
          phase3Records.reduce(function(a,r){return a+r.valence;},0) /
          phase3Records.length * 100) / 100;
        ers.phase3AvgArousal = Math.round(
          phase3Records.reduce(function(a,r){return a+r.arousal;},0) /
          phase3Records.length * 100) / 100;
      }

      // ERS summary fields
      var ersSummary = window.RdxPassive.getEmotionalStateSummary
        ? window.RdxPassive.getEmotionalStateSummary() : null;
      if (ersSummary) {
        ers.trajectory  = ersSummary.trajectory;
        ers.ersRiskFlag = ersSummary.ersRiskFlag;
      }

      // Empathy and question pattern
      var empSummary = window.RdxPassive.getEmpathySummary
        ? window.RdxPassive.getEmpathySummary() : null;
      if (empSummary) ers.empathyDensity = empSummary.empathyDensity || 0;

      var qtSummary = window.RdxPassive.getQuestionTypeSummary
        ? window.RdxPassive.getQuestionTypeSummary() : null;
      if (qtSummary) ers.questionPattern = qtSummary.openingPattern || null;
    }

    // Layer 6: Cognitive load — pull from RdxPassive
    if (window.RdxPassive && window.RdxPassive.getCognitiveLoadSummary) {
      var clt = window.RdxPassive.getCognitiveLoadSummary();
      if (clt) {
        var currentPhaseKey = String(state.currentPhase);
        var phaseSig = clt.phaseSignatures && clt.phaseSignatures[currentPhaseKey];
        _bus.load.currentPhaseLoadZ    = phaseSig ? phaseSig.avgLoadZ     : null;
        _bus.load.currentLoadCategory  = phaseSig ? phaseSig.loadCategory : 'normal';
        _bus.load.peakLoadPhase        = clt.peakLoadPhase;
        _bus.load.peakLoadLabel        = clt.peakLoadLabel;
        _bus.load.trajectory           = clt.trajectory;
        _bus.load.highLoadTurns        = (clt.highLoadTurns || []).length;
      }
    }
  }

  // ─── getPromptBlock() ─────────────────────────────────────────────────────
  // Returns a compact plain-text block for injection into agent system prompts.
  // options.role: 'attending' | 'patient' | 'debrief' | 'faculty'
  // options.verbose: boolean (default false — keep it tight for live agents)

  function getPromptBlock(options) {
    var opts   = options || {};
    var role   = opts.role || 'attending';
    var lines  = [];

    lines.push('═══ STUDENT MODEL (ReasonDx live context) ═══');

    // ── Working memory: always included ──────────────────────────────────────
    var w = _bus.working;
    if (w.studentName) {
      lines.push('Student: ' + w.studentName +
        (w.trainingYear ? ' (' + w.trainingYear + ')' : ''));
    }
    lines.push('Current phase: ' + (w.phaseLabel || 'unknown') +
      ' (turn ' + w.turnCount + ')');
    if (w.currentDx.length > 0) {
      lines.push('Current top differential: ' + w.currentDx.join(', '));
    }

    // ── Affective state: attending, patient, debrief, faculty ─────────────────
    var aff = _bus.affective;
    var affLines = [];

    if (aff.currentValence !== 0 || aff.currentArousal !== 0) {
      var valLabel = aff.currentValence >  0.2 ? 'positive' :
                     aff.currentValence < -0.2 ? 'negative' : 'neutral';
      var arLabel  = aff.currentArousal > 0.6 ? 'activated' :
                     aff.currentArousal < 0.3 ? 'calm'      : 'moderate';
      affLines.push('Current affect: ' + valLabel + ' valence, ' + arLabel + ' arousal');
    }

    if (role === 'patient') {
      // Patient only needs affect + empathy + question pattern
      if (affLines.length) lines.push(affLines[0]);
      if (aff.empathyDensity > 0) {
        lines.push('Empathy density so far: ' + aff.empathyDensity +
          ' signals/turn — ' + (aff.empathyDensity >= 1.5 ? 'warm rapport' :
          aff.empathyDensity >= 0.5 ? 'adequate rapport' : 'low rapport detected'));
      }
      if (aff.questionPattern) {
        lines.push('Question pattern: ' + aff.questionPattern +
          (aff.questionPattern === 'closed_first'
            ? ' — consider being slightly less forthcoming; the student should open up the history'
            : ''));
      }
      lines.push('═══════════════════════════════════');
      return lines.join('\n');
    }

    // ── Attending, debrief, faculty: add episodic + procedural + load ─────────

    // Episodic memory
    var ep = _bus.episodic;
    if (ep.totalPriorSessions > 0) {
      lines.push('');
      lines.push('Prior sessions: ' + ep.totalPriorSessions);
      if (ep.recentSessions.length > 0) {
        var recStr = ep.recentSessions.map(function(s) {
          return s.caseId + ': ' +
            (s.reachedDiagnosis ? '✓ dx' : '✗ missed') +
            (s.anchoringDetected ? ', anchored' : '') +
            (s.confidenceScore ? ', confidence ' + s.confidenceScore + '/5' : '');
        }).join(' | ');
        lines.push('Recent: ' + recStr);
      }
    }

    // Procedural memory (pattern tags)
    var proc = _bus.procedural;
    if (proc.patternTags.length > 0) {
      lines.push('');
      lines.push('Longitudinal patterns:');
      var tagMap = {
        'anchoring_tendency':   'anchoring bias — tends to maintain initial dx despite contradicting evidence',
        'premature_closure':    'premature closure — stops revising differential too early',
        'history_gap':          'history gap — frequently misses critical contextual history',
        'narrow_opener':        'narrow opener — initial differentials < 2 diagnoses',
        'broad_thinker':        'broad thinker — initial differentials > 5 diagnoses',
        'strong_accuracy':      'strong accuracy — reaches correct dx in > 80% of sessions',
        'underconfident':       'underconfident — accurate but systematically underestimates self'
      };
      proc.patternTags.forEach(function(tag) {
        lines.push('  · ' + (tagMap[tag] || tag));
      });

      // Attending-specific: tactical instructions based on patterns
      if (role === 'attending') {
        lines.push('');
        lines.push('Attending guidance based on patterns:');
        if (proc.patternTags.includes('anchoring_tendency')) {
          lines.push('  → This student anchors. When they commit to a diagnosis, ask: "What single finding would make you reconsider?" Do not let them close prematurely.');
        }
        if (proc.patternTags.includes('premature_closure')) {
          lines.push('  → This student closes early. After their revised differential, ask: "What else are you still considering and why?"');
        }
        if (proc.patternTags.includes('history_gap')) {
          lines.push('  → This student frequently misses critical context. If they have not asked about occupational, environmental, or social history, prompt: "Is there anything in the social or occupational history that might be relevant?"');
        }
        if (proc.patternTags.includes('narrow_opener')) {
          lines.push('  → This student opens with narrow differentials. Encourage breadth early: "What else could explain this presentation?"');
        }
        if (proc.patternTags.includes('underconfident')) {
          lines.push('  → This student is underconfident despite good accuracy. When their reasoning is correct, acknowledge it explicitly: "Walk me through why you think that — that reasoning is sound."');
        }
      }
    }

    // Affective state (full)
    if (affLines.length || aff.phase3AvgValence !== null || aff.ersRiskFlag) {
      lines.push('');
      lines.push('Affective state:');
      if (affLines.length) lines.push('  ' + affLines[0]);
      if (aff.phase3AvgValence !== null) {
        var p3vLabel = aff.phase3AvgValence >  0.2 ? 'positive' :
                       aff.phase3AvgValence < -0.2 ? 'negative' : 'neutral';
        lines.push('  History-taking affect: ' + p3vLabel +
          ' (valence ' + aff.phase3AvgValence + ')');
      }
      if (aff.ersRiskFlag) {
        lines.push('  ⚠ ERS flag: negative high-arousal during history-taking — increased anchoring risk');
        if (role === 'attending') {
          lines.push('  → After history, explicitly ask: "What findings made you most uncertain during that interview?"');
        }
      }
      if (aff.empathyDensity !== undefined) {
        lines.push('  Empathy density: ' + aff.empathyDensity + ' signals/turn' +
          (aff.empathyDensity < 0.5 && _bus.working.currentPhase >= 3
            ? ' — low rapport; patient may be less forthcoming' : ''));
      }
    }

    // Cognitive load
    var ld = _bus.load;
    if (ld.currentLoadCategory && ld.currentLoadCategory !== 'normal') {
      lines.push('');
      lines.push('Cognitive load:');
      lines.push('  Current phase: ' + ld.currentLoadCategory +
        (ld.currentPhaseLoadZ !== null ? ' (z=' + ld.currentPhaseLoadZ + ')' : ''));
      if (ld.currentLoadCategory === 'high' && role === 'attending') {
        lines.push('  → Student appears cognitively loaded at this phase. Simplify your next question. One thing at a time.');
      }
      if (ld.peakLoadLabel) {
        lines.push('  Session peak load: ' + ld.peakLoadLabel);
      }
      if (ld.trajectory === 'escalating') {
        lines.push('  Load trajectory: escalating across session');
        if (role === 'attending') {
          lines.push('  → Consider a brief consolidating question: "What is your working diagnosis right now in one sentence?"');
        }
      }
    }

    // Research flags (faculty only)
    if (role === 'faculty') {
      lines.push('');
      lines.push('Research flags:');
      lines.push('  ERS risk: ' + (aff.ersRiskFlag ? 'YES — Study 10 candidate' : 'no'));
      lines.push('  Load trajectory: ' + (ld.trajectory || 'unknown'));
      lines.push('  Anchoring detected this session: pending');
    }

    lines.push('═══════════════════════════════════');
    return lines.join('\n');
  }

  // ─── getResearchSnapshot() ────────────────────────────────────────────────
  // Structured data for Supabase storage alongside passive_data.
  // Saved at session end.

  function getResearchSnapshot() {
    return {
      working:    _bus.working,
      episodic: {
        totalPriorSessions: _bus.episodic.totalPriorSessions,
        recentSessionCount: _bus.episodic.recentSessions.length
      },
      procedural: {
        patternTags:          _bus.procedural.patternTags,
        anchoringRate:        _bus.procedural.anchoringRate,
        prematureClosureRate: _bus.procedural.prematureClosureRate,
        avgAccuracy:          _bus.procedural.avgAccuracy
      },
      affective: {
        finalValence:       _bus.affective.currentValence,
        finalArousal:       _bus.affective.currentArousal,
        phase3AvgValence:   _bus.affective.phase3AvgValence,
        phase3AvgArousal:   _bus.affective.phase3AvgArousal,
        ersRiskFlag:        _bus.affective.ersRiskFlag,
        empathyDensity:     _bus.affective.empathyDensity,
        questionPattern:    _bus.affective.questionPattern,
        trajectory:         _bus.affective.trajectory
      },
      load: {
        peakLoadPhase:        _bus.load.peakLoadPhase,
        peakLoadLabel:        _bus.load.peakLoadLabel,
        loadTrajectory:       _bus.load.trajectory,
        highLoadTurnCount:    _bus.load.highLoadTurns,
        currentLoadCategory:  _bus.load.currentLoadCategory
      }
    };
  }

  // ─── getRaw() — for debugging and ExplainableAgent logging ───────────────
  function getRaw() { return _bus; }

  // ─── reset() — called at simulation start ────────────────────────────────
  function reset() {
    _bus.working    = { studentName:null, trainingYear:null, currentPhase:null,
                        phaseLabel:null, turnCount:0, currentDx:[], sessionId:null,
                        caseId:null, caseDiagnosis:null };
    _bus.episodic   = { totalPriorSessions:0, recentSessions:[], loaded:false };
    _bus.procedural = { patternTags:[], anchoringRate:null, prematureClosureRate:null,
                        missedPivotRate:null, avgAccuracy:null, avgConfidence:null,
                        avgDxBreadth:null, loaded:false };
    _bus.affective  = { currentValence:0, currentArousal:0, phase3AvgValence:null,
                        phase3AvgArousal:null, trajectory:'stable', ersRiskFlag:false,
                        empathyDensity:0, questionPattern:null };
    _bus.load       = { currentPhaseLoadZ:null, currentLoadCategory:'normal',
                        peakLoadPhase:null, peakLoadLabel:null, trajectory:'stable',
                        highLoadTurns:0 };
  }

  // ─── Export ───────────────────────────────────────────────────────────────
  window.StudentModelBus = {
    update:              update,
    getPromptBlock:      getPromptBlock,
    getResearchSnapshot: getResearchSnapshot,
    getRaw:              getRaw,
    reset:               reset
  };

})(window);
