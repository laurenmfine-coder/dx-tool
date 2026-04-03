/**
 * rdx-competency-map.js — ReasonDx Competency Framework
 * ═══════════════════════════════════════════════════════════════
 * Maps ALL platform activities to three competency frameworks:
 *
 *   1. LCME — 8 Core Competencies for UME (Liaison Committee on
 *              Medical Education, required for MD program accreditation)
 *
 *   2. AAMC EPAs — 13 Entrustable Professional Activities for
 *              Entering Residency (AAMC Core EPAs, 2014/2020 update)
 *
 *   3. ACGME — 6 Core Competencies + specialty milestones
 *              (used here for A/I but structure applies to all specialties)
 *
 * PHILOSOPHY:
 *   Each platform activity (simulation turn, CoachDx exchange, EMR
 *   note submission, mechanism module completion) maps to one or more
 *   competency domains. The competency engine accumulates evidence
 *   continuously and can generate an entrustment-level narrative at
 *   any time. This transforms activity data into accreditation evidence.
 *
 * LCME → AAMC EPA ALIGNMENT TABLE:
 *   LCME competency areas map naturally to EPA clusters:
 *   - Patient Care → EPAs 1,2,3,4,5,6,7,8,10
 *   - Medical Knowledge → EPAs 1,2,3,4,12
 *   - Communication → EPAs 2,7,9,11
 *   - Professionalism → EPAs 8,9,13
 *   - Systems-Based Practice → EPAs 5,6,10,13
 *   - Practice-Based Learning → EPA 12,13
 *   - Interpersonal Skills → EPAs 9,11
 *   - Clinical Reasoning → EPAs 1,2,3,4 (ReasonDx's primary contribution)
 *
 * PUBLIC API:
 *   RdxCompetency.mapActivity(activityType, data) → evidence object
 *   RdxCompetency.getEPAEvidence(epaId, sessionHistory) → entrustment assessment
 *   RdxCompetency.getLCMEEvidence(domain, sessionHistory) → domain assessment
 *   RdxCompetency.generateNarrative(profile, framework) → Promise<string>
 *   RdxCompetency.EPAS → full EPA definitions
 *   RdxCompetency.LCME → full LCME definitions
 */

(function(window) {
  'use strict';

  var WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';

  // ═══════════════════════════════════════════════════════════════
  // 1. LCME COMPETENCY DOMAINS
  //    Source: LCME Element 7.1 — Competencies and Learning Outcomes
  //    https://lcme.org/publications/
  // ═══════════════════════════════════════════════════════════════
  var LCME = {
    'PC': {
      code: 'PC', name: 'Patient Care',
      description: 'Provide patient-centered care that is compassionate, appropriate, and effective for the treatment of health problems and the promotion of health.',
      rdxActivities: ['simulation', 'virtual-emr', 'clinical-reasoning-trainer'],
      color: '#2874A6'
    },
    'MK': {
      code: 'MK', name: 'Medical Knowledge',
      description: 'Demonstrate knowledge of established and evolving biomedical, clinical, epidemiological, and social-behavioral sciences.',
      rdxActivities: ['mechanism-module', 'coachdx-topic', 'puzzle'],
      color: '#059669'
    },
    'CS': {
      code: 'CS', name: 'Communication Skills',
      description: 'Communicate effectively with patients, families, and health care teams.',
      rdxActivities: ['simulation-history', 'coachdx-exchange', 'virtual-emr-note'],
      color: '#7C3AED'
    },
    'CR': {
      code: 'CR', name: 'Clinical Reasoning',
      description: 'Apply systematic reasoning, evidence-based medicine, and clinical judgment to patient problems.',
      rdxActivities: ['simulation-ddx', 'reasoning-framework', 'rpfs-event'],
      color: '#D97706'
    },
    'PR': {
      code: 'PR', name: 'Professionalism',
      description: 'Demonstrate a commitment to professional responsibilities, ethics, and sensitivity to diverse patient populations.',
      rdxActivities: ['simulation-consent', 'coachdx-ethics'],
      color: '#DC2626'
    },
    'SBP': {
      code: 'SBP', name: 'Systems-Based Practice',
      description: 'Demonstrate awareness of the larger context of health care and respond effectively to a complex health care system.',
      rdxActivities: ['virtual-emr-orders', 'handoff-note', 'sbar-documentation'],
      color: '#0891B2'
    },
    'PBLI': {
      code: 'PBLI', name: 'Practice-Based Learning',
      description: 'Identify strengths, deficiencies, and limits in one\'s knowledge and expertise; set learning and improvement goals.',
      rdxActivities: ['after-action-review', 'self-reflection', 'gap-identification'],
      color: '#BE185D'
    },
    'ICS': {
      code: 'ICS', name: 'Interpersonal Skills',
      description: 'Demonstrate interpersonal skills that result in the effective exchange of information and collaboration.',
      rdxActivities: ['coachdx-socratic', 'consult-callback', 'team-handoff'],
      color: '#0D9488'
    }
  };

  // ═══════════════════════════════════════════════════════════════
  // 2. AAMC 13 CORE EPAs FOR ENTERING RESIDENCY
  //    Source: AAMC Core Entrustable Professional Activities for
  //    Entering Residency (2014, updated guidance 2020)
  //    https://www.aamc.org/initiatives/coreepas/
  // ═══════════════════════════════════════════════════════════════
  var EPAS = {
    'EPA1': {
      id: 'EPA1', number: 1,
      title: 'Gather a history and perform a physical examination',
      description: 'Gather an accurate, appropriately detailed history and perform a physical examination for patients with common presentations.',
      entrustmentLevels: [
        'Allowed to observe only',
        'Allowed to act with proactive supervision (supervisor in room)',
        'Allowed to act with reactive supervision (supervisor immediately available)',
        'Allowed to act with distant supervision (supervisor available by phone)',
        'Allowed to act without supervision; can serve as supervisor for others'
      ],
      lcmeDomains: ['PC', 'CS', 'ICS'],
      rpfsDimensions: ['Data Gathering', 'Problem Representation'],
      platformMeasures: {
        simulation: ['env_history_score', 'history_score', 'question_type_classifier', 'cue_utilization'],
        virtualEmr: ['chart_review_tabs', 'order_appropriateness'],
        coachdx: ['topic_mastery_history_taking']
      },
      color: '#2874A6'
    },
    'EPA2': {
      id: 'EPA2', number: 2,
      title: 'Prioritize a differential diagnosis following a clinical encounter',
      description: 'Synthesize findings from the history and physical examination to identify the most likely diagnoses and alternatives.',
      lcmeDomains: ['CR', 'MK', 'PC'],
      rpfsDimensions: ['Hypothesis Generation', 'Bayesian Updating', 'Illness Script Matching'],
      platformMeasures: {
        simulation: ['ddx_accuracy', 'ddx_breadth', 'bayesian_updating_score', 'anchoring_detected'],
        rpfs: ['Hypothesis Generation', 'Bayesian Updating'],
        coachdx: ['topic_mastery_diagnosis']
      },
      color: '#059669'
    },
    'EPA3': {
      id: 'EPA3', number: 3,
      title: 'Recommend and interpret common diagnostic and screening tests',
      description: 'Order appropriate tests and accurately interpret results in the context of the clinical presentation.',
      lcmeDomains: ['MK', 'CR', 'PC'],
      rpfsDimensions: ['Diagnostic Verification', 'Data Gathering'],
      platformMeasures: {
        simulation: ['test_selection_score', 'result_interpretation'],
        virtualEmr: ['lab_order_appropriateness', 'imaging_order_appropriateness'],
        coachdx: ['topic_mastery_diagnostics']
      },
      color: '#D97706'
    },
    'EPA4': {
      id: 'EPA4', number: 4,
      title: 'Enter and discuss orders and prescriptions',
      description: 'Translate clinical decision-making into appropriate orders, including medications, tests, and referrals.',
      lcmeDomains: ['PC', 'MK', 'SBP'],
      rpfsDimensions: ['Diagnostic Verification'],
      platformMeasures: {
        virtualEmr: ['order_validation', 'crt_score', 'wrong_order_avoidance'],
        simulation: ['management_score']
      },
      color: '#7C3AED'
    },
    'EPA5': {
      id: 'EPA5', number: 5,
      title: 'Document a clinical encounter in the patient record',
      description: 'Write an accurate, concise, and organized clinical note that reflects the clinical reasoning behind assessment and plan.',
      lcmeDomains: ['CS', 'CR', 'SBP'],
      rpfsDimensions: ['Problem Representation'],
      platformMeasures: {
        virtualEmr: ['note_quality', 'readability_score', 'semantic_drift', 'bordage_score'],
        simulation: ['documentation_score']
      },
      color: '#DC2626'
    },
    'EPA6': {
      id: 'EPA6', number: 6,
      title: 'Provide an oral presentation of a clinical encounter',
      description: 'Concisely and accurately present a clinical encounter to members of the health care team.',
      lcmeDomains: ['CS', 'ICS', 'PC'],
      rpfsDimensions: ['Problem Representation'],
      platformMeasures: {
        simulation: ['sbar_completeness'],
        virtualEmr: ['handoff_quality'],
        coachdx: ['topic_mastery_communication']
      },
      color: '#0891B2'
    },
    'EPA7': {
      id: 'EPA7', number: 7,
      title: 'Form clinical questions and retrieve evidence',
      description: 'Identify clinical questions arising from patient care encounters and locate, appraise, and apply current evidence.',
      lcmeDomains: ['PBLI', 'MK', 'CR'],
      rpfsDimensions: ['Metacognition'],
      platformMeasures: {
        coachdx: ['topic_mastery_ebm'],
        simulation: ['evidence_referenced'],
        mechanism: ['module_completion', 'open_access_citations']
      },
      color: '#BE185D'
    },
    'EPA8': {
      id: 'EPA8', number: 8,
      title: 'Give or receive a patient handover to transition care responsibility',
      description: 'Accurately and efficiently transfer care information to another provider using a structured communication tool.',
      lcmeDomains: ['CS', 'SBP', 'ICS'],
      rpfsDimensions: ['Problem Representation', 'Diagnostic Verification'],
      platformMeasures: {
        virtualEmr: ['handoff_completeness', 'sbar_score'],
        simulation: ['transition_of_care_score']
      },
      color: '#0D9488'
    },
    'EPA9': {
      id: 'EPA9', number: 9,
      title: 'Collaborate as a member of an interprofessional team',
      description: 'Work effectively with other health professionals to improve patient care quality and safety.',
      lcmeDomains: ['ICS', 'PR', 'SBP'],
      rpfsDimensions: ['Metacognition'],
      platformMeasures: {
        virtualEmr: ['consult_appropriateness'],
        coachdx: ['topic_mastery_teamwork'],
        simulation: ['interprofessional_considerations']
      },
      color: '#F59E0B'
    },
    'EPA10': {
      id: 'EPA10', number: 10,
      title: 'Recognize a patient requiring urgent or emergent care and initiate evaluation and management',
      description: 'Identify acutely ill patients, initiate stabilization, and call for assistance when appropriate.',
      lcmeDomains: ['PC', 'CR', 'MK'],
      rpfsDimensions: ['Hypothesis Generation', 'Cognitive Flexibility', 'Diagnostic Verification'],
      platformMeasures: {
        simulation: ['acuity_recognition', 'time_to_critical_action', 'cannot_miss_score'],
        virtualEmr: ['acuity_triage'],
        coachdx: ['topic_mastery_emergency']
      },
      color: '#EF4444'
    },
    'EPA11': {
      id: 'EPA11', number: 11,
      title: 'Obtain informed consent for tests and/or procedures',
      description: 'Explain the risks, benefits, and alternatives of a proposed intervention to a patient in a way they can understand.',
      lcmeDomains: ['CS', 'PR', 'ICS'],
      rpfsDimensions: ['Metacognition'],
      platformMeasures: {
        simulation: ['patient_communication_quality', 'shared_decision_making'],
        coachdx: ['topic_mastery_consent']
      },
      color: '#6366F1'
    },
    'EPA12': {
      id: 'EPA12', number: 12,
      title: 'Perform general procedures of a physician',
      description: 'Demonstrate procedural competence in core clinical skills required of all physicians.',
      lcmeDomains: ['PC', 'MK'],
      rpfsDimensions: ['Data Gathering'],
      platformMeasures: {
        simulation: ['physical_exam_thoroughness', 'pe_pattern_coverage'],
        coachdx: ['topic_mastery_procedures']
      },
      color: '#84CC16'
    },
    'EPA13': {
      id: 'EPA13', number: 13,
      title: 'Identify system failures and contribute to a culture of safety and improvement',
      description: 'Recognize and report near-misses and adverse events; suggest system-level improvements.',
      lcmeDomains: ['SBP', 'PBLI', 'PR'],
      rpfsDimensions: ['Metacognition', 'Cognitive Flexibility'],
      platformMeasures: {
        virtualEmr: ['wrong_order_avoidance', 'safety_flag_recognition'],
        simulation: ['bias_self_recognition', 'aar_quality'],
        coachdx: ['topic_mastery_patient_safety']
      },
      color: '#F97316'
    }
  };

  // ═══════════════════════════════════════════════════════════════
  // 3. PLATFORM ACTIVITY → COMPETENCY MAPPER
  //    Maps every platform action to EPA/LCME evidence
  // ═══════════════════════════════════════════════════════════════
  var ActivityMapper = {

    // Map a simulation session to EPA evidence
    mapSimulationSession: function(session) {
      var evidence = {};

      // EPA1: History gathering
      var histScore = session.history_score || session.env_history_score || 0;
      evidence['EPA1'] = {
        score: histScore,
        maxScore: 2,
        pct: (histScore / 2) * 100,
        dataPoints: ['history_score'],
        sessionId: session.case_id
      };

      // EPA2: Differential diagnosis
      var ddxData = session.ddx_comparison || {};
      var ddxScore = ddxData.finalAccuracy || 0;
      evidence['EPA2'] = {
        score: ddxScore,
        maxScore: 1,
        pct: ddxScore * 100,
        dataPoints: ['ddx_accuracy', 'bayesian_updating'],
        sessionId: session.case_id
      };

      // EPA10: Urgency recognition (acuity 1 cases)
      if (session.acuity === 1 || session.acuity === '1') {
        evidence['EPA10'] = {
          score: session.cannot_miss_addressed ? 1 : 0,
          maxScore: 1,
          pct: session.cannot_miss_addressed ? 100 : 0,
          dataPoints: ['critical_action_timing'],
          sessionId: session.case_id
        };
      }

      // EPA5: Documentation (if note submitted)
      if (session.readability_summary) {
        var rs = session.readability_summary;
        evidence['EPA5'] = {
          score: rs.wordCount > 80 ? 1 : 0.5,
          maxScore: 1,
          pct: rs.wordCount > 80 ? 100 : 50,
          dataPoints: ['note_quality', 'readability'],
          sessionId: session.case_id
        };
      }

      return evidence;
    },

    // Map RPFS dimensions to EPAs
    mapRPFSToEPAs: function(rpfsScores) {
      var mapping = {
        'Data Gathering':       ['EPA1', 'EPA3', 'EPA12'],
        'Problem Representation':['EPA1', 'EPA2', 'EPA5', 'EPA6'],
        'Hypothesis Generation': ['EPA2', 'EPA10'],
        'Diagnostic Verification':['EPA3', 'EPA4', 'EPA10'],
        'Bayesian Updating':    ['EPA2', 'EPA3'],
        'Cognitive Flexibility': ['EPA2', 'EPA10', 'EPA13'],
        'Illness Script Matching':['EPA2', 'EPA3'],
        'Metacognition':         ['EPA7', 'EPA11', 'EPA13']
      };
      var epaEvidence = {};
      Object.keys(rpfsScores || {}).forEach(function(dim) {
        var score = rpfsScores[dim];
        var epas = mapping[dim] || [];
        epas.forEach(function(epaId) {
          if (!epaEvidence[epaId]) epaEvidence[epaId] = { scores: [], dimensions: [] };
          epaEvidence[epaId].scores.push(score);
          epaEvidence[epaId].dimensions.push(dim);
        });
      });
      // Average scores per EPA
      Object.keys(epaEvidence).forEach(function(epaId) {
        var e = epaEvidence[epaId];
        e.avgScore = e.scores.reduce(function(a,b){return a+b;},0) / e.scores.length;
      });
      return epaEvidence;
    },

    // Map CoachDx milestone to EPAs
    mapMilestoneToEPAs: function(milestone, level) {
      // Clinical reasoning topics map to EPA2
      var epaMap = {
        'history-taking':   ['EPA1'],
        'physical-exam':    ['EPA1', 'EPA12'],
        'differential':     ['EPA2'],
        'diagnostic-testing':['EPA3'],
        'management':       ['EPA4'],
        'documentation':    ['EPA5'],
        'presentation':     ['EPA6'],
        'evidence-based':   ['EPA7'],
        'handoff':          ['EPA8'],
        'teamwork':         ['EPA9'],
        'emergency':        ['EPA10'],
        'consent':          ['EPA11'],
        'procedures':       ['EPA12'],
        'patient-safety':   ['EPA13']
      };
      var lower = milestone.toLowerCase();
      var matched = [];
      Object.keys(epaMap).forEach(function(key) {
        if (lower.includes(key)) matched = matched.concat(epaMap[key]);
      });
      // Default all CoachDx to EPA2 (clinical reasoning is the core)
      if (!matched.length) matched = ['EPA2'];
      return { epas: [...new Set(matched)], level: level };
    }
  };

  // ═══════════════════════════════════════════════════════════════
  // 4. ENTRUSTMENT ASSESSOR
  //    Given accumulated evidence, returns entrustment level (1-5)
  // ═══════════════════════════════════════════════════════════════
  var EntrustmentAssessor = {

    // Compute entrustment level (1-5) from evidence array
    computeLevel: function(evidenceArray, epaId) {
      if (!evidenceArray || !evidenceArray.length) return 1;
      var avg = evidenceArray.reduce(function(a,b){return a + (b.pct||0);}, 0) / evidenceArray.length;
      var count = evidenceArray.length;
      // Need both volume AND quality for higher levels
      if (avg >= 85 && count >= 10) return 5;
      if (avg >= 75 && count >= 6)  return 4;
      if (avg >= 60 && count >= 3)  return 3;
      if (avg >= 40 && count >= 1)  return 2;
      return 1;
    },

    getLevelLabel: function(level) {
      var labels = {
        1: 'Observation Only',
        2: 'Direct Supervision Required',
        3: 'Indirect Supervision Required',
        4: 'Supervision Available if Needed',
        5: 'Unsupervised Practice'
      };
      return labels[level] || 'Not Yet Assessed';
    },

    getLevelColor: function(level) {
      var colors = { 1:'#94A3B8', 2:'#EF4444', 3:'#F59E0B', 4:'#3B82F6', 5:'#10B981' };
      return colors[level] || '#94A3B8';
    }
  };

  // ═══════════════════════════════════════════════════════════════
  // 5. NARRATIVE GENERATOR
  //    Claude-powered narrative synthesis for each framework
  // ═══════════════════════════════════════════════════════════════
  var NarrativeGenerator = {

    generateEPASummary: function(epaProfile, studentName) {
      var topEPAs = Object.entries(epaProfile)
        .filter(function(e) { return e[1].level >= 3; })
        .map(function(e) { return 'EPA' + e[0].replace('EPA','') + ': ' + EPAS[e[0]].title + ' (Level ' + e[1].level + ')'; })
        .join('\n');
      var gapEPAs = Object.entries(epaProfile)
        .filter(function(e) { return e[1].level <= 2; })
        .map(function(e) { return 'EPA' + e[0].replace('EPA','') + ': ' + EPAS[e[0]].title; })
        .join('\n');

      var systemPrompt = [
        'You are writing a brief AAMC EPA entrustment narrative for a medical student.',
        'Write 3-4 sentences maximum. Be specific, evidence-based, and use standard UME language.',
        'Reference the EPAs by number and title. Note both strengths and gaps.',
        'This will be used for LCME accreditation evidence and student advising.',
        'Do not use bullet points. Write in prose. Do not fabricate data not provided.'
      ].join(' ');

      var userMsg = 'Student: ' + (studentName || 'Medical student') + '\n';
      userMsg += 'Platform: ReasonDx clinical reasoning education platform\n';
      userMsg += 'EPAs with evidence of entrustment (Level 3+):\n' + (topEPAs || 'None yet') + '\n';
      userMsg += 'EPAs requiring development (Level 1-2):\n' + (gapEPAs || 'All EPAs show developing evidence') + '\n';
      userMsg += 'Write a 3-4 sentence narrative suitable for a Clinical Competency Committee or advising note.';

      return fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'passthrough',
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 300,
          system: systemPrompt,
          messages: [{ role: 'user', content: userMsg }]
        })
      })
      .then(function(r) { return r.json(); })
      .then(function(d) {
        return (d.content && d.content[0] && d.content[0].text) || '';
      })
      .catch(function() { return ''; });
    }
  };

  // ═══════════════════════════════════════════════════════════════
  // EXPORTS
  // ═══════════════════════════════════════════════════════════════
  window.RdxCompetency = {
    LCME: LCME,
    EPAS: EPAS,
    ActivityMapper: ActivityMapper,
    EntrustmentAssessor: EntrustmentAssessor,
    NarrativeGenerator: NarrativeGenerator,
    version: '1.0.0'
  };

})(window);
