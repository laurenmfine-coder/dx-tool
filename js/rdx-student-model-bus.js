/**
 * rdx-student-model-bus.js — ReasonDx Unified Student Model Bus
 * ═══════════════════════════════════════════════════════════════
 * Aggregates ALL live student signals into a single structured
 * context block injectable into any agent system prompt.
 *
 * AUGMENTED v2 — adds: session timing, time-of-day, persistent
 * diagnostic miss detection, full episodic cross-session patterns,
 * and stronger tactical attending directives.
 */

(function(window) {
  'use strict';

  var _phaseLabels = {
    1:'Initial Differential', 2:'Justification', 3:'History Taking',
    4:'Revised Differential', 5:'Physical Exam', 6:'Labs & Imaging',
    7:'Report Comparison', 8:'Reflection', 9:'Management', 10:'Complete'
  };

  // ── PROFESSION ERROR MODE DEFINITIONS ──────────────────────────────────────
  // Known systematic reasoning errors by profession, grounded in education lit.
  var PROFESSION_ERROR_MODES = {
    medicine:  ['anchoring_tendency','premature_closure','availability_bias','commission_bias'],
    pa:        ['anchoring_tendency','premature_closure','availability_bias','threshold_confusion'],
    pharmacy:  ['drug_class_anchoring','patient_factor_neglect','mechanism_skip','polypharmacy_tunnel'],
    optometry: ['ocular_anchoring','systemic_miss','neuro_underweight','bilateral_symmetry_assumption'],
    dentistry: ['local_anchoring','systemic_miss','pharmacology_gap','pain_attribution_error'],
    pt:        ['structural_anchoring','systemic_miss','movement_tunnel','red_flag_under_screen'],
    ot:        ['functional_skip','diagnosis_avoidance','occupational_lens_delay','cognitive_under_screen'],
    nursing:   ['protocol_anchoring','physician_deference_bias','medication_error_blind','assessment_documentation_gap'],
    mbs:       ['content_overload','mechanism_fragmentation','clinical_bridge_gap','uncertainty_intolerance'],
    other:     ['anchoring_tendency','premature_closure']
  };

  // ── EPA FRAMEWORK BY PROFESSION ────────────────────────────────────────────
  var PROFESSION_EPA_FRAMEWORKS = {
    medicine:  { name:'AAMC Core EPAs', count:13, source:'AAMC 2014',
                 keyEPAs:['Gather history & perform exam','Prioritize DDx','Recommend/interpret tests','Enter orders/prescriptions','Document clinical encounter','Oral presentation','Form clinical questions','Give/receive handover','Collaborate as team member','Recognize urgent situations','Obtain informed consent','Perform general procedures','Identify system failures'] },
    pa:        { name:'ARC-PA Competencies', count:6, source:'ARC-PA 2020',
                 keyEPAs:['Medical Knowledge','Interpersonal & Communication Skills','Patient Care','Professionalism','Practice-Based Learning','Systems-Based Practice'] },
    pharmacy:  { name:'ACPE Standards 2016', count:4, source:'ACPE 2016',
                 keyEPAs:['Foundational Knowledge','Essentials for Practice','Approach to Practice','Personal/Professional Development'] },
    optometry: { name:'ACOE Standards', count:4, source:'ACOE 2019',
                 keyEPAs:['Patient Care','Medical Knowledge','Practice-Based Learning','Interpersonal/Communication'] },
    dentistry: { name:'CODA Standards', count:5, source:'CODA 2021',
                 keyEPAs:['Critical Thinking','Professionalism','Communication','Health Promotion','Patient Care'] },
    pt:        { name:'CAPTE EPAs', count:5, source:'CAPTE 2020',
                 keyEPAs:['Clinical Reasoning','Examination','Evaluation/Diagnosis','Intervention','Patient Management'] },
    ot:        { name:'ACOTE Standards', count:5, source:'ACOTE 2018',
                 keyEPAs:['Occupational Profile','Analysis of Participation','Intervention Planning','Intervention Implementation','Outcomes'] },
    nursing:   { name:'AACN Essentials', count:10, source:'AACN 2021',
                 keyEPAs:['Liberal Education','Leadership','Evidence-Based Practice','Information Management','Healthcare Policy','Interprofessional Collaboration','Clinical Prevention','Professionalism','Baccalaureate Generalist Practice'] },
    mbs:       { name:'MCAT Competencies', count:4, source:'AAMC 2015',
                 keyEPAs:['Biological/Biochemical Foundations','Chemical/Physical Foundations','Psychological/Social Foundations','Critical Analysis & Reasoning'] },
    other:     { name:'General Health Professions', count:4, source:'Generic',
                 keyEPAs:['Clinical Knowledge','Clinical Skills','Communication','Professionalism'] }
  };

  // ── COACHING LANGUAGE REGISTER BY PROFESSION ──────────────────────────────
  var PROFESSION_COACHING_REGISTER = {
    medicine:  { attendingTitle:'Attending Physician', settingDefault:'Emergency Department',   mechanismFrame:'pathophysiology',      actionFrame:'diagnose and treat',         uncertaintyNorm:'tolerate and act' },
    pa:        { attendingTitle:'Supervising Physician',settingDefault:'Primary Care Clinic',    mechanismFrame:'pathophysiology',      actionFrame:'assess and manage',          uncertaintyNorm:'escalate when needed' },
    pharmacy:  { attendingTitle:'Clinical Pharmacist',  settingDefault:'Pharmacy Consult',       mechanismFrame:'receptor/enzyme/PK-PD',actionFrame:'optimize pharmacotherapy',   uncertaintyNorm:'verify before dispensing' },
    optometry: { attendingTitle:'Attending Optometrist',settingDefault:'Eye Clinic',             mechanismFrame:'ocular-systemic pathway',actionFrame:'assess and co-manage',      uncertaintyNorm:'refer when systemic' },
    dentistry: { attendingTitle:'Attending Dentist',    settingDefault:'Dental Clinic',          mechanismFrame:'oral-systemic pathway', actionFrame:'diagnose and treat/refer',   uncertaintyNorm:'refer when systemic' },
    pt:        { attendingTitle:'Clinical Instructor',  settingDefault:'Outpatient PT Clinic',   mechanismFrame:'movement & neuromuscular',actionFrame:'examine and treat',        uncertaintyNorm:'screen and refer' },
    ot:        { attendingTitle:'Supervising OT',       settingDefault:'Rehabilitation Setting', mechanismFrame:'functional & occupational',actionFrame:'evaluate and intervene',  uncertaintyNorm:'screen and refer' },
    nursing:   { attendingTitle:'Charge Nurse/Preceptor',settingDefault:'Medical-Surgical Floor',mechanismFrame:'pathophysiology',      actionFrame:'assess, monitor, advocate',  uncertaintyNorm:'communicate and escalate' },
    mbs:       { attendingTitle:'Faculty Mentor',       settingDefault:'Pre-Health Tutorial',    mechanismFrame:'basic science mechanism',actionFrame:'reason and explain',        uncertaintyNorm:'identify the gap' },
    other:     { attendingTitle:'Clinical Supervisor',  settingDefault:'Clinical Setting',       mechanismFrame:'pathophysiology',      actionFrame:'assess and manage',          uncertaintyNorm:'escalate when needed' }
  };

  var _bus = {
    working: {
      studentName: null, trainingYear: null, currentPhase: null, phaseLabel: null,
      turnCount: 0, sessionId: null, caseId: null, currentDx: [],
      sessionStartTime: null, sessionDurationMin: 0, timeOfDay: null
    },
    episodic:  { totalPriorSessions: 0, recentSessions: [], loaded: false },
    procedural:{ patternTags: [], dominantErrorMode: null, errorModeConfidence: 0, errorModeLabel: null, loaded: false },
    affective: { currentValence: 0, currentArousal: 0, phase3AvgValence: null, phase3AvgArousal: null,
                 trajectory: null, ersRiskFlag: false, empathyDensity: 0, questionPattern: null },
    semantic:  { driftScore: null, anchorStrength: null, framingQuality: null },
    load:      { currentPhaseLoadZ: null, currentLoadCategory: 'normal', peakLoadPhase: null,
                 peakLoadLabel: null, trajectory: null, highLoadTurns: 0 },
    // ── LAYER 7: PROFESSION ────────────────────────────────────────────────
    professional: {
      professionId:       null,   // medicine | pa | pharmacy | optometry | dentistry | pt | ot | nursing | mbs | other
      trackId:            null,   // e.g. pa_clinical, pharmd_p3_p4
      programName:        null,
      yearOfTraining:     null,
      boardExamTarget:    null,
      epaFramework:       null,   // populated from PROFESSION_EPA_FRAMEWORKS
      coachingRegister:   null,   // populated from PROFESSION_COACHING_REGISTER
      knownErrorModes:    [],     // populated from PROFESSION_ERROR_MODES
      baselineScores:     null,   // from baseline-assessment.html
      loaded:             false
    }
  };

  function update(state, passiveData, caseData) {
    if (!state) return;

    // Layer 1: Working memory
    _bus.working.studentName    = state.studentName   || null;
    _bus.working.trainingYear   = state.trainingYear  || null;
    _bus.working.currentPhase   = state.currentPhase  || null;
    _bus.working.phaseLabel     = _phaseLabels[state.currentPhase] || null;
    _bus.working.turnCount      = state.turnCount     || 0;
    _bus.working.sessionId      = state.sessionId     || null;
    _bus.working.caseId         = caseData ? (caseData.caseId || '') : null;

    if (!_bus.working.sessionStartTime && state.sessionStartTime) {
      _bus.working.sessionStartTime = state.sessionStartTime;
    }
    if (_bus.working.sessionStartTime) {
      _bus.working.sessionDurationMin = Math.round(
        (Date.now() - new Date(_bus.working.sessionStartTime).getTime()) / 60000
      );
    }
    var hr = new Date().getHours();
    _bus.working.timeOfDay = hr < 6 ? 'night' : hr < 12 ? 'morning' : hr < 18 ? 'afternoon' : hr < 22 ? 'evening' : 'night';

    var ddxTurns = (state.turns || []).filter(function(t) {
      return t.role === 'student' && (t.phase === 1 || t.phase === 2 || t.phase === 4);
    });
    if (ddxTurns.length > 0) {
      var lastDDx = ddxTurns[ddxTurns.length - 1].content || '';
      var dxList = lastDDx.match(/[A-Z][a-z]+(?:\s+[a-z]+)*/g) || [];
      _bus.working.currentDx = dxList.slice(0, 5);
    }

    // Layer 7: Professional identity (loaded from localStorage)
    if (!_bus.professional.loaded) {
      try {
        var _u = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
        var _pp = _u.professionProfile || {};
        var _pid = _pp.professionId || null;
        if (_pid) {
          _bus.professional.professionId     = _pid;
          _bus.professional.trackId          = _pp.trackId || null;
          _bus.professional.programName      = _pp.programName || null;
          _bus.professional.yearOfTraining   = _pp.yearOfTraining || null;
          _bus.professional.epaFramework     = PROFESSION_EPA_FRAMEWORKS[_pid] || PROFESSION_EPA_FRAMEWORKS['other'];
          _bus.professional.coachingRegister = PROFESSION_COACHING_REGISTER[_pid] || PROFESSION_COACHING_REGISTER['other'];
          _bus.professional.knownErrorModes  = PROFESSION_ERROR_MODES[_pid] || PROFESSION_ERROR_MODES['other'];
          _bus.professional.boardExamTarget  = _bus.professional.epaFramework ? _bus.professional.epaFramework.name : null;
          var _bs = localStorage.getItem('rdx-baseline-scores');
          _bus.professional.baselineScores   = _bs ? JSON.parse(_bs) : null;
          _bus.professional.loaded           = true;
        }
      } catch(e) {}
    }

    // Layer 3: Procedural (MetaReasoning)
    if (window.MetaReasoning && state._metaTheory) {
      var theory = state._metaTheory;
      _bus.procedural.dominantErrorMode   = theory.dominantErrorMode || null;
      _bus.procedural.errorModeConfidence = theory.confidence || 0;
      _bus.procedural.errorModeLabel      = theory.dominantModeLabel || theory.dominantErrorMode || null;
      _bus.procedural.patternTags         = _inferPatternTags(theory);
      _bus.procedural.loaded              = true;
    }

    // Layer 4: Affective
    if (passiveData && passiveData.emotionalState) {
      var es = passiveData.emotionalState;
      _bus.affective.currentValence  = es.currentValence  || 0;
      _bus.affective.currentArousal  = es.currentArousal  || 0;
      _bus.affective.trajectory      = es.trajectory      || null;
      _bus.affective.ersRiskFlag     = !!es.ersRiskFlag;
      if (es.phase3AvgValence !== undefined) _bus.affective.phase3AvgValence = es.phase3AvgValence;
      if (es.phase3AvgArousal !== undefined) _bus.affective.phase3AvgArousal = es.phase3AvgArousal;
    }
    if (window.RdxPassive) {
      var ersSummary = window.RdxPassive.getEmotionalStateSummary ? window.RdxPassive.getEmotionalStateSummary() : null;
      if (ersSummary) { _bus.affective.trajectory = ersSummary.trajectory; _bus.affective.ersRiskFlag = ersSummary.ersRiskFlag; }
      var empSummary = window.RdxPassive.getEmpathySummary ? window.RdxPassive.getEmpathySummary() : null;
      if (empSummary) _bus.affective.empathyDensity = empSummary.empathyDensity || 0;
      var qtSummary = window.RdxPassive.getQuestionTypeSummary ? window.RdxPassive.getQuestionTypeSummary() : null;
      if (qtSummary) _bus.affective.questionPattern = qtSummary.openingPattern || null;

      // Layer 6: Cognitive load
      var clt = window.RdxPassive.getCognitiveLoadSummary ? window.RdxPassive.getCognitiveLoadSummary() : null;
      if (clt) {
        var phaseSig = clt.phaseSignatures && clt.phaseSignatures[String(state.currentPhase)];
        _bus.load.currentPhaseLoadZ   = phaseSig ? phaseSig.avgLoadZ     : null;
        _bus.load.currentLoadCategory = phaseSig ? phaseSig.loadCategory : 'normal';
        _bus.load.peakLoadPhase       = clt.peakLoadPhase;
        _bus.load.peakLoadLabel       = clt.peakLoadLabel;
        _bus.load.trajectory          = clt.trajectory;
        _bus.load.highLoadTurns       = (clt.highLoadTurns || []).length;
      }
    }

    // Layer 5: Semantic drift
    if (window.RdxSemanticDrift && state.turns) {
      var driftData = window.RdxSemanticDrift.analyze ? window.RdxSemanticDrift.analyze(state.turns) : null;
      if (driftData) {
        _bus.semantic.driftScore     = driftData.driftScore     || null;
        _bus.semantic.anchorStrength = driftData.anchorStrength || null;
        _bus.semantic.framingQuality = driftData.framingQuality || null;
      }
    }
  }

  function _inferPatternTags(theory) {
    if (!theory) return [];
    var tags = [];
    var mode = theory.dominantErrorMode;
    var modeMap = {
      'ANCHORING': 'anchoring_tendency',
      'PREMATURE_CLOSURE': 'premature_closure',
      'HISTORY_GAP': 'history_gap',
      'NARROW_OPENER': 'narrow_opener',
      'UNDERCONFIDENT': 'underconfident',
      'HIGH_COGNITIVE_LOAD': 'cognitive_overload',
      'CALIBRATED': 'strong_accuracy'
    };
    if (modeMap[mode]) tags.push(modeMap[mode]);
    // Cross-session anchoring reinforcement
    var recent = _bus.episodic.recentSessions || [];
    if (recent.filter(function(s){return s.anchoringDetected;}).length >= 2 && !tags.includes('anchoring_tendency')) {
      tags.push('anchoring_tendency');
    }
    if (recent.filter(function(s){return !s.reachedDiagnosis;}).length >= 3) {
      tags.push('persistent_diagnostic_miss');
    }
    return tags;
  }

  function loadEpisodic(userId, sb) {
    if (!userId || !sb || _bus.episodic.loaded) return Promise.resolve();
    return sb.from('rad_study_sessions')
      .select('case_id, diagnosis, env_history_score, history_score, total_turns, completed_at, passive_data, category')
      .eq('student_name', userId).eq('status', 'complete')
      .order('completed_at', { ascending: false }).limit(10)
      .then(function(r) {
        if (r.error || !r.data) return;
        _bus.episodic.totalPriorSessions = r.data.length;
        _bus.episodic.recentSessions = r.data.slice(0, 5).map(function(s) {
          var passive = null;
          try { passive = typeof s.passive_data === 'string' ? JSON.parse(s.passive_data) : s.passive_data; } catch(e) {}
          return {
            caseId:           s.case_id,
            diagnosis:        s.diagnosis,
            reachedDiagnosis: (s.history_score || 0) >= 1,
            anchoringDetected:passive && passive.emotionalState && passive.emotionalState.ersRiskFlag,
            category:         s.category || null,
            date:             s.completed_at ? s.completed_at.slice(0,10) : null
          };
        });
        _bus.episodic.loaded = true;
      }).catch(function(){});
  }

  function getPromptBlock(options) {
    var opts = options || {};
    var role = opts.role || 'attending';
    var lines = [];

    lines.push('═══ STUDENT MODEL ═══');

    var w = _bus.working;
    if (w.studentName) {
      lines.push('Student: ' + w.studentName + (w.trainingYear ? ' (' + w.trainingYear + ')' : ''));
    }
    lines.push('Phase: ' + (w.phaseLabel || 'unknown') + ' · Turn ' + w.turnCount +
      (w.sessionDurationMin > 0 ? ' · ' + w.sessionDurationMin + 'min' : '') +
      (w.timeOfDay ? ' · ' + w.timeOfDay : ''));
    if (w.currentDx.length > 0) lines.push('DDx: ' + w.currentDx.join(', '));

    // Patient role: compact
    if (role === 'patient') {
      var aff0 = _bus.affective;
      if (aff0.currentValence !== 0 || aff0.currentArousal !== 0) {
        var vl0 = aff0.currentValence > 0.2 ? 'positive' : aff0.currentValence < -0.2 ? 'negative' : 'neutral';
        var al0 = aff0.currentArousal > 0.6 ? 'activated' : aff0.currentArousal < 0.3 ? 'calm' : 'moderate';
        lines.push('Affect: ' + vl0 + ', ' + al0);
      }
      if (aff0.empathyDensity > 0) {
        lines.push('Empathy: ' + (aff0.empathyDensity >= 1.5 ? 'warm' : aff0.empathyDensity >= 0.5 ? 'adequate' : 'low — be slightly less forthcoming'));
      }
      if (aff0.questionPattern === 'closed_first') lines.push('Qs: closed-first — resist slightly');
      lines.push('═══════════════════');
      return lines.join('\n');
    }

    // Episodic
    var ep = _bus.episodic;
    if (ep.totalPriorSessions > 0) {
      lines.push('');
      lines.push('Prior sessions: ' + ep.totalPriorSessions);
      if (ep.recentSessions.length > 0) {
        lines.push('Recent: ' + ep.recentSessions.map(function(s) {
          return s.caseId + ':' + (s.reachedDiagnosis ? '✓' : '✗') + (s.anchoringDetected ? '⚓' : '');
        }).join(' '));
      }
    }

    // Procedural + tactics
    var proc = _bus.procedural;
    if (proc.patternTags.length > 0) {
      lines.push('');
      lines.push('Patterns: ' + proc.patternTags.join(', '));
      if (proc.dominantErrorMode && proc.dominantErrorMode !== 'CALIBRATED') {
        lines.push('Active mode: ' + (proc.errorModeLabel || proc.dominantErrorMode) +
          ' (' + Math.round(proc.errorModeConfidence * 100) + '%)');
      }
      if (role === 'attending') {
        lines.push('Tactics:');
        var tactics = {
          'anchoring_tendency':         '  → ANCHOR: "What single finding would completely change your diagnosis?"',
          'premature_closure':          '  → CLOSURE: "What are you still holding that you haven\'t ruled out?"',
          'history_gap':                '  → HISTORY: If no occupation/env by turn 6: "Anything in their daily life relevant here?"',
          'narrow_opener':              '  → NARROW: "Give me three more diagnoses. What else explains ALL the symptoms?"',
          'underconfident':             '  → CONFIDENCE: "Stop — that reasoning is correct. Own it. Walk me through why."',
          'cognitive_overload':         '  → OVERLOAD: "Pause. One sentence: what is your working diagnosis right now?"',
          'persistent_diagnostic_miss': '  → MISS PATTERN: "What evidence do you NEED before you commit to any diagnosis?"'
        };
        proc.patternTags.forEach(function(tag) {
          if (tactics[tag]) lines.push(tactics[tag]);
        });
      }
    }

    // Affective
    var aff = _bus.affective;
    if (aff.currentValence !== 0 || aff.currentArousal !== 0 || aff.ersRiskFlag) {
      lines.push('');
      var vl = aff.currentValence > 0.2 ? 'positive' : aff.currentValence < -0.2 ? 'negative' : 'neutral';
      var al = aff.currentArousal > 0.6 ? 'activated' : aff.currentArousal < 0.3 ? 'calm' : 'moderate';
      lines.push('Affect: ' + vl + ', ' + al + (aff.trajectory ? ', ' + aff.trajectory : '') +
        (aff.ersRiskFlag ? ' ⚠ ERS risk' : ''));
    }

    // Load
    var ld = _bus.load;
    if (ld.currentLoadCategory && ld.currentLoadCategory !== 'normal') {
      lines.push('Load: ' + ld.currentLoadCategory.toUpperCase() +
        (ld.trajectory ? ' · ' + ld.trajectory : '') +
        (ld.highLoadTurns > 0 ? ' · ' + ld.highLoadTurns + ' high turns' : ''));
      if (ld.currentLoadCategory === 'high' && role === 'attending') {
        lines.push('  → LOAD: "Pause. One diagnosis, one sentence. Then we rebuild."');
      }
    }

    // Session fatigue
    if (role === 'attending' && w.sessionDurationMin > 45) {
      lines.push('');
      lines.push('Session: ' + w.sessionDurationMin + 'min — watch for fatigue, consider shorter loops.');
    }

    // Profession context
    var prof = _bus.professional;
    if (prof.loaded && prof.professionId) {
      lines.push('');
      lines.push('── PROFESSION CONTEXT ──');
      lines.push('Profession: ' + prof.professionId.toUpperCase() +
        (prof.trackId ? ' / ' + prof.trackId : '') +
        (prof.programName ? ' @ ' + prof.programName : ''));
      if (prof.coachingRegister) {
        lines.push('Supervisor role: ' + prof.coachingRegister.attendingTitle);
        lines.push('Mechanism frame: ' + prof.coachingRegister.mechanismFrame);
        lines.push('Action frame: ' + prof.coachingRegister.actionFrame);
        lines.push('Uncertainty norm: ' + prof.coachingRegister.uncertaintyNorm);
      }
      if (prof.epaFramework) {
        lines.push('Competency framework: ' + prof.epaFramework.name);
      }
      if (prof.knownErrorModes && prof.knownErrorModes.length > 0) {
        lines.push('Known profession error modes: ' + prof.knownErrorModes.join(', '));
      }
      if (prof.baselineScores && prof.baselineScores._composite !== null) {
        lines.push('Baseline reasoning score: ' + Math.round(prof.baselineScores._composite * 100) + '%');
        // Flag specific weak dimensions
        var weakDims = Object.entries(prof.baselineScores)
          .filter(function(e) { return e[0] !== '_composite' && e[1] !== null && e[1] < 0.5; })
          .map(function(e) { return e[0].replace(/_/g,' '); });
        if (weakDims.length > 0) lines.push('Baseline weak dimensions: ' + weakDims.join(', '));
      }
      if (role === 'attending' && prof.knownErrorModes) {
        var profTactics = {
          drug_class_anchoring:         '  → PHARM-ANCHOR: \"You named the drug class — what patient-specific factor changes that choice?\"',
          patient_factor_neglect:       '  → PHARM-PATIENT: \"Before the drug: what about THIS patient changes the calculation?\"',
          mechanism_skip:               '  → PHARM-MECH: \"What receptor or enzyme is this drug actually acting on in this patient right now?\"',
          ocular_anchoring:             '  → OPT-ANCHOR: \"You found it in the eye — what systemic disease puts this finding on your differential?\"',
          systemic_miss:                '  → SYSTEMIC: \"What systemic disease presents exactly this way? Have you screened for it?\"',
          structural_anchoring:         '  → PT-ANCHOR: \"Structure explains the pain — what systemic red flag are you actively ruling out?\"',
          red_flag_under_screen:        '  → PT-SCREEN: \"Walk me through your red flag screen for this presentation.\"',
          functional_skip:              '  → OT-FUNCTION: \"How is this impacting their ability to perform their meaningful daily activities?\"',
          protocol_anchoring:           '  → NURS-PROTOCOL: \"The protocol says X — but what does THIS patient\'s clinical picture say?\"',
          mechanism_fragmentation:      '  → MBS-CONNECT: \"You know the mechanism — now connect it to what the patient would actually experience.\"',
          clinical_bridge_gap:          '  → MBS-BRIDGE: \"You explained the science — now walk me through what that means for the patient in front of you.\"'
        };
        prof.knownErrorModes.forEach(function(mode) {
          if (profTactics[mode]) lines.push(profTactics[mode]);
        });
      }
    }

    // Inject MechanismDx concept mastery gaps
    if (window.RdxMechanismMastery) {
      var _masteryHint = RdxMechanismMastery.getCoachingSummary(_bus.working.studentName || 'anon');
      if (_masteryHint) lines.push(_masteryHint);
    }

    lines.push('═══════════════════');
    return lines.join('\n');
  }

  function getResearchSnapshot() {
    return {
      sessionId: _bus.working.sessionId, caseId: _bus.working.caseId,
      studentName: _bus.working.studentName, trainingYear: _bus.working.trainingYear,
      finalPhase: _bus.working.currentPhase, totalTurns: _bus.working.turnCount,
      sessionDurationMin: _bus.working.sessionDurationMin, timeOfDay: _bus.working.timeOfDay,
      patternTags: _bus.procedural.patternTags, dominantErrorMode: _bus.procedural.dominantErrorMode,
      errorModeConfidence: _bus.procedural.errorModeConfidence,
      finalAffectValence: _bus.affective.currentValence, finalAffectArousal: _bus.affective.currentArousal,
      ersRiskFlag: _bus.affective.ersRiskFlag, empathyDensity: _bus.affective.empathyDensity,
      questionPattern: _bus.affective.questionPattern, finalLoadCategory: _bus.load.currentLoadCategory,
      highLoadTurns: _bus.load.highLoadTurns, semanticDrift: _bus.semantic.driftScore,
      episodicLoaded: _bus.episodic.loaded, priorSessions: _bus.episodic.totalPriorSessions,
      // Profession research fields
      professionId:       _bus.professional.professionId,
      trackId:            _bus.professional.trackId,
      programName:        _bus.professional.programName,
      yearOfTraining:     _bus.professional.yearOfTraining,
      boardExamTarget:    _bus.professional.boardExamTarget,
      baselineComposite:  _bus.professional.baselineScores ? _bus.professional.baselineScores._composite : null,
      baselineWeakDims:   _bus.professional.baselineScores ?
        Object.entries(_bus.professional.baselineScores)
          .filter(function(e){ return e[0] !== '_composite' && e[1] !== null && e[1] < 0.5; })
          .map(function(e){ return e[0]; }) : [],
      capturedAt: new Date().toISOString()
    };
  }

  function reset() {
    _bus.working    = { studentName:null, trainingYear:null, currentPhase:null, phaseLabel:null, turnCount:0, sessionId:null, caseId:null, currentDx:[], sessionStartTime:null, sessionDurationMin:0, timeOfDay:null };
    _bus.episodic   = { totalPriorSessions:0, recentSessions:[], loaded:false };
    _bus.procedural = { patternTags:[], dominantErrorMode:null, errorModeConfidence:0, errorModeLabel:null, loaded:false };
    _bus.affective  = { currentValence:0, currentArousal:0, phase3AvgValence:null, phase3AvgArousal:null, trajectory:null, ersRiskFlag:false, empathyDensity:0, questionPattern:null };
    _bus.semantic   = { driftScore:null, anchorStrength:null, framingQuality:null };
    _bus.load       = { currentPhaseLoadZ:null, currentLoadCategory:'normal', peakLoadPhase:null, peakLoadLabel:null, trajectory:null, highLoadTurns:0 };
    // Don't reset professional — it's session-persistent from localStorage
  }

  window.StudentModelBus = { update:update, getPromptBlock:getPromptBlock, getResearchSnapshot:getResearchSnapshot, loadEpisodic:loadEpisodic, reset:reset, _bus:_bus };

})(window);
