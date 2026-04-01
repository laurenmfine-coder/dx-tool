/**
 * caseframe-engine.js — CaseFrame Illness Script Scoring Engine
 * ReasonDx · Lauren Fine, MD, FAAAAI · NSU KPCAM
 *
 * Scores student documentation across four domains grounded in
 * the illness script and clinical reasoning literature:
 *
 *   Domain 1 — History Quality        (Elstein 1978; Graber 2005)
 *   Domain 2 — Assessment & DDx       (Bordage & Lemieux 1991; Bordage 1994)
 *   Domain 3 — Reasoning Articulation (semantic qualifier theory, Bordage 1994)
 *   Domain 4 — Plan Completeness      (clinical reasoning literature)
 *
 * Public API (called by virtual-emr.html):
 *   CaseFrame.autoRegister(caseId, crtData)         — register case scoring criteria
 *   CaseFrame.score(caseId, noteFields, extras)     — score a submitted note; returns result
 *   CaseFrame.getCaseFrameVector(result)            — normalized [0–1] vector for CRDA
 *   CaseFrame.saveResult(studentName, caseId, result) — persist to localStorage
 *   CaseFrame.loadResult(studentName, caseId)       — retrieve from localStorage
 *   CaseFrame.renderSummary(result, opts)           — HTML panel string
 *
 * Storage keys (localStorage):
 *   rdx-cf-{student}-{caseId}   → { result, timestamp }
 *   rdx-cf-history-{student}    → [ { caseId, pct, grade, timestamp }, ... ]
 */

(function (window) {
  'use strict';

  // ─── Case registry ────────────────────────────────────────────────────────
  // Populated by autoRegister() when virtual-emr loads a case.
  // Falls back to generic heuristics when no case-specific criteria exist.
  var _registry = {};

  // ─── Helpers ──────────────────────────────────────────────────────────────

  function _esc(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function _words(text) {
    return (text || '').trim().split(/\s+/).filter(Boolean);
  }

  function _wc(text) { return _words(text).length; }

  function _contains(text, terms) {
    if (!text || !terms || !terms.length) return false;
    var t = text.toLowerCase();
    return terms.some(function (term) {
      return t.indexOf(term.toLowerCase()) !== -1;
    });
  }

  function _countMatches(text, terms) {
    if (!text || !terms || !terms.length) return 0;
    var t = text.toLowerCase();
    return terms.filter(function (term) {
      return t.indexOf(term.toLowerCase()) !== -1;
    }).length;
  }

  function _grade(pct) {
    if (pct >= 90) return 'A';
    if (pct >= 80) return 'B';
    if (pct >= 70) return 'C';
    if (pct >= 60) return 'D';
    return 'F';
  }

  function _chip(text, color, bg) {
    return '<span style="display:inline-block;padding:3px 8px;background:' + bg +
      ';color:' + color + ';border-radius:20px;font-size:11px;font-weight:600">' + text + '</span>';
  }

  // ─── Domain 1: History Quality ────────────────────────────────────────────
  // Grounded in:
  //   Elstein et al. (1978) — history-taking as the primary driver of diagnosis
  //   Graber et al. (2005) — "faulty context generation" = missed history elements
  //   Calgary-Cambridge Guide — what a complete history covers
  //
  // Scores: HPI depth, social/family/medication history, ROS, allergies
  // Max: 25 points

  function _scoreHistory(fields, criteria) {
    var score = 0;
    var feedback = [];

    // HPI quality (0–10)
    var hpi = fields.hpi || fields.events || fields.interval || '';
    var hpiWc = _wc(hpi);
    if (hpiWc >= 100) { score += 10; }
    else if (hpiWc >= 60)  { score += 7;  feedback.push({ type: 'warn', msg: 'HPI is brief — expand with onset, duration, severity, modifying factors, and context.' }); }
    else if (hpiWc >= 30)  { score += 4;  feedback.push({ type: 'warn', msg: 'HPI needs significant expansion. Include the OLDCARTS elements relevant to this presentation.' }); }
    else if (hpiWc > 0)    { score += 1;  feedback.push({ type: 'danger', msg: 'HPI is insufficient for clinical documentation.' }); }
    else                   {              feedback.push({ type: 'danger', msg: 'HPI is missing.' }); }

    // Case-specific history elements (0–5)
    if (criteria && criteria.keyHistoryTerms && criteria.keyHistoryTerms.length) {
      var matched = _countMatches(hpi, criteria.keyHistoryTerms);
      var possible = Math.min(criteria.keyHistoryTerms.length, 5);
      var histBonus = Math.round((matched / possible) * 5);
      score += Math.min(histBonus, 5);
      if (matched === 0) {
        feedback.push({ type: 'danger', msg: 'Case-specific history elements not documented. Key details: ' + criteria.keyHistoryTerms.slice(0,3).join(', ') + '.' });
      } else if (matched < possible) {
        feedback.push({ type: 'warn', msg: 'Some key history elements missing. Consider: ' + criteria.keyHistoryTerms.filter(function(t){ return !_contains(hpi,[t]); }).slice(0,2).join(', ') + '.' });
      }
    } else {
      score += 3; // no case-specific criteria — award partial
    }

    // Social + Family history (0–4)
    var shx = fields.shx || '';
    var fhx = fields.fhx || '';
    if (_wc(shx) >= 15) score += 2;
    else if (_wc(shx) > 0) { score += 1; feedback.push({ type: 'warn', msg: 'Social history is brief — include occupation, living situation, substance use, and functional baseline.' }); }
    else { feedback.push({ type: 'warn', msg: 'Social history not documented.' }); }

    if (_wc(fhx) >= 10) score += 2;
    else if (_wc(fhx) > 0) { score += 1; feedback.push({ type: 'warn', msg: 'Family history is brief.' }); }
    else { feedback.push({ type: 'warn', msg: 'Family history not documented.' }); }

    // Medications + Allergies (0–6)
    var meds = fields.meds || fields['med-recon'] || '';
    var allergies = fields.allergies || '';
    if (_wc(meds) >= 20) score += 3;
    else if (_wc(meds) >= 5) { score += 2; feedback.push({ type: 'warn', msg: 'Medication list — include dose, frequency, and reconciliation status.' }); }
    else if (_wc(meds) > 0) { score += 1; feedback.push({ type: 'warn', msg: 'Medication list incomplete.' }); }
    else { feedback.push({ type: 'danger', msg: 'Medications not documented.' }); }

    if (_wc(allergies) >= 5) score += 3;
    else if (_wc(allergies) > 0) { score += 2; feedback.push({ type: 'warn', msg: 'Allergy entry incomplete — include allergen, reaction type, and severity.' }); }
    else { feedback.push({ type: 'danger', msg: 'Allergies not documented (must include NKDA if none).' }); }

    return { label: 'History Quality', score: Math.min(score, 25), max: 25, feedback: feedback };
  }

  // ─── Domain 2: Assessment & Differential ─────────────────────────────────
  // Grounded in:
  //   Elstein et al. (1978) — hypothetico-deductive reasoning
  //   Schmidt & Rikers (2007) — illness script: enabling conditions → fault → consequences
  //   Bordage (1994) — elaborated knowledge: experts link findings to diagnoses causally
  //
  // Scores: presence of diagnosis, DDx breadth, problem-based structure
  // Max: 30 points

  function _scoreAssessment(fields, criteria) {
    var score = 0;
    var feedback = [];

    var assess = fields.assess || fields.neuro || ''; // ICU uses neuro as proxy

    // Diagnosis named (0–8)
    var diagNamed = false;
    if (criteria && criteria.targetDiagnosis) {
      diagNamed = _contains(assess, [criteria.targetDiagnosis]);
      if (criteria.diagnosisAliases) {
        diagNamed = diagNamed || _contains(assess, criteria.diagnosisAliases);
      }
    } else {
      // Generic: assess section has enough content to imply diagnosis is present
      diagNamed = _wc(assess) >= 20;
    }

    if (diagNamed) { score += 8; }
    else if (_wc(assess) >= 30) {
      score += 4;
      feedback.push({ type: 'warn', msg: 'Primary diagnosis should be explicitly named in the assessment.' });
    } else if (_wc(assess) > 0) {
      score += 2;
      feedback.push({ type: 'danger', msg: 'Assessment does not name the working diagnosis.' });
    } else {
      feedback.push({ type: 'danger', msg: 'Assessment section is missing.' });
    }

    // DDx presence (0–8): expert illness scripts include alternatives
    var ddxIndicators = ['differential', 'ddx', 'consider', 'vs.', 'versus', 'rule out',
      'unlikely', 'also', 'alternatively', 'however', 'less likely', 'more likely',
      'could represent', 'possible', 'cannot exclude'];
    var hasDdx = _contains(assess, ddxIndicators);
    if (hasDdx) {
      score += 8;
    } else if (_wc(assess) >= 60) {
      score += 4;
      feedback.push({ type: 'warn', msg: 'Include a differential diagnosis with at least one alternative and your reasoning for ranking the primary diagnosis first.' });
    } else {
      feedback.push({ type: 'warn', msg: 'Differential diagnosis not documented. Even in straightforward cases, document what you considered and excluded.' });
    }

    // Problem-based structure (0–6)
    var problemIndicators = ['problem #', 'problem 1', '#1', '1.', '2.', '3.',
      'issue #', 'concern #', 'primary:', 'secondary:', 'issue 1', 'problem:'];
    var isProblemBased = _contains(assess, problemIndicators);
    if (isProblemBased) { score += 6; }
    else if (_wc(assess) >= 80) { score += 3; feedback.push({ type: 'warn', msg: 'Structure your assessment by problem (Problem 1:, Problem 2:, etc.).' }); }

    // Severity characterization (0–8)
    var severityTerms = ['severe', 'moderate', 'mild', 'critical', 'stable', 'unstable',
      'decompensated', 'compensated', 'acute', 'chronic', 'acute on chronic',
      'worsening', 'improving', 'progressive', 'life-threatening', 'controlled', 'uncontrolled'];
    var hasSeverity = _contains(assess, severityTerms);
    if (hasSeverity) { score += 8; }
    else if (_wc(assess) >= 40) {
      score += 4;
      feedback.push({ type: 'warn', msg: 'Characterize severity for each problem (e.g., severe, moderate, acute on chronic).' });
    }

    return { label: 'Assessment & Differential', score: Math.min(score, 30), max: 30, feedback: feedback };
  }

  // ─── Domain 3: Reasoning Articulation ────────────────────────────────────
  // Grounded in:
  //   Bordage & Lemieux (1991) — semantic qualifier theory
  //   Bordage (1994) — 4-level elaboration scale
  //   Richardson & Glasziou (2015) — probabilistic framing in EBM
  //
  // Measures the QUALITY of reasoning, not just diagnosis correctness.
  // Scored on Bordage's 4 elaboration domains:
  //   (a) Causal connectors, (b) Specific findings, (c) Alternatives, (d) Probability
  // Max: 20 points

  function _scoreReasoning(fields) {
    var score = 0;
    var feedback = [];

    var assess = fields.assess || '';
    var plan   = fields.plan || fields.recs || '';
    var combined = assess + ' ' + plan;

    // (a) Causal connectors (0–5) — expert reasoning links findings to diagnoses explicitly
    var causalTerms = ['because', 'given that', 'based on', 'in the setting of',
      'consistent with', 'supported by', 'due to', 'secondary to', 'in context of',
      'in light of', 'given her', 'given his', 'given the', 'this explains',
      'accounting for', 'attributable to', 'driven by'];
    var causalCount = _countMatches(combined, causalTerms);
    if (causalCount >= 3) { score += 5; }
    else if (causalCount === 2) { score += 4; }
    else if (causalCount === 1) { score += 2; feedback.push({ type: 'warn', msg: 'Use causal connectors (because, given that, based on, consistent with) to link findings to your diagnoses.' }); }
    else { feedback.push({ type: 'warn', msg: 'Reasoning lacks explicit causal links. State why you believe each diagnosis based on specific findings.' }); }

    // (b) Specific clinical findings referenced (0–5)
    var findingTerms = ['troponin', 'd-dimer', 'bnp', 'creatinine', 'wbc', 'crp',
      'lactate', 'procalcitonin', 'sodium', 'potassium', 'glucose', 'hemoglobin',
      'tachycardia', 'hypotension', 'hypertension', 'fever', 'hypoxia', 'saturation',
      'ct', 'x-ray', 'ultrasound', 'echo', 'ekg', 'ecg', 'biopsy',
      'elevated', 'decreased', 'normal', 'positive', 'negative', 'borderline',
      'murmur', 'crackles', 'wheezing', 'edema', 'tenderness', 'rigidity'];
    var findingCount = _countMatches(combined, findingTerms);
    if (findingCount >= 5) { score += 5; }
    else if (findingCount >= 3) { score += 4; }
    else if (findingCount >= 1) { score += 2; feedback.push({ type: 'warn', msg: 'Reference specific clinical findings to support your reasoning (lab values, exam findings, imaging results).' }); }
    else { feedback.push({ type: 'warn', msg: 'Assessment does not reference specific findings. Expert reasoning ties each diagnosis to concrete evidence.' }); }

    // (c) Considers alternatives (0–5) — Elstein: hypothetico-deductive requires testing alternatives
    var altTerms = ['however', 'although', 'but', 'alternatively', 'less likely',
      'unlikely', 'cannot exclude', 'rule out', 'must consider', 'also possible',
      'differential includes', 'in contrast', 'versus', 'vs.', 'rather than',
      'despite', 'nevertheless'];
    var altCount = _countMatches(combined, altTerms);
    if (altCount >= 3) { score += 5; }
    else if (altCount >= 1) { score += 3; feedback.push({ type: 'warn', msg: 'Explicitly address alternatives — state why competing diagnoses are less likely.' }); }
    else { feedback.push({ type: 'warn', msg: 'No alternatives considered. Document what else you thought about and why you ranked them lower.' }); }

    // (d) Probabilistic / certainty framing (0–5)
    var probTerms = ['most likely', 'likely', 'probable', 'suspected', 'confirmed',
      'definitive', 'high pre-test', 'low probability', 'high probability',
      'consistent with', 'pathognomonic', 'classic for', 'atypical for',
      'strongly suggests', 'supports the diagnosis', 'argues against',
      'increases suspicion', 'lowers suspicion'];
    var probCount = _countMatches(combined, probTerms);
    if (probCount >= 3) { score += 5; }
    else if (probCount >= 1) { score += 3; feedback.push({ type: 'warn', msg: 'Add probabilistic framing (most likely, less likely, consistent with) to show calibrated reasoning.' }); }
    else { feedback.push({ type: 'warn', msg: 'Documentation lacks probabilistic language. Experts express likelihood explicitly.' }); }

    return { label: 'Reasoning Articulation', score: Math.min(score, 20), max: 20, feedback: feedback };
  }

  // ─── Domain 4: Plan Completeness ─────────────────────────────────────────
  // Grounded in:
  //   Clinical reasoning literature: management is the output of correct diagnosis
  //   ACGME core competencies: patient care requires safe, comprehensive management
  //
  // Scores: plan depth, safety elements, follow-up/monitoring
  // Max: 25 points

  function _scorePlan(fields, extras, criteria) {
    var score = 0;
    var feedback = [];

    var plan = fields.plan || fields.recs || fields['plan'] || '';
    // ICU: plan is by system, combine all system fields
    if (!plan) {
      ['cv', 'resp', 'gi-nutrition', 'renal', 'id', 'heme'].forEach(function(f) {
        if (fields[f]) plan += ' ' + fields[f];
      });
    }
    var planWc = _wc(plan);

    // Plan depth (0–8)
    if (planWc >= 100) { score += 8; }
    else if (planWc >= 60)  { score += 6; feedback.push({ type: 'warn', msg: 'Plan is brief — expand with specific interventions, doses/frequencies, and monitoring parameters.' }); }
    else if (planWc >= 25)  { score += 3; feedback.push({ type: 'warn', msg: 'Plan needs significant expansion.' }); }
    else if (planWc > 0)    { score += 1; feedback.push({ type: 'danger', msg: 'Plan is insufficient for clinical documentation.' }); }
    else                    {             feedback.push({ type: 'danger', msg: 'Plan section is missing.' }); }

    // Case-specific plan elements (0–7)
    if (criteria && criteria.keyPlanTerms && criteria.keyPlanTerms.length) {
      var planMatched = _countMatches(plan, criteria.keyPlanTerms);
      var planPossible = Math.min(criteria.keyPlanTerms.length, 7);
      score += Math.round((planMatched / planPossible) * 7);
      if (planMatched === 0) {
        feedback.push({ type: 'danger', msg: 'Key treatment elements not documented. Consider: ' + criteria.keyPlanTerms.slice(0,3).join(', ') + '.' });
      } else if (planMatched < planPossible) {
        feedback.push({ type: 'warn', msg: 'Some key plan elements missing: ' + criteria.keyPlanTerms.filter(function(t){ return !_contains(plan,[t]); }).slice(0,2).join(', ') + '.' });
      }
    } else {
      score += 4; // no case criteria — award partial
    }

    // Safety elements (0–5): DVT ppx, diet, code status, activity — standard inpatient elements
    var safetyTerms = ['dvt', 'prophylaxis', 'heparin', 'enoxaparin', 'diet', 'activity',
      'code', 'dnr', 'full code', 'fall', 'contact precautions', 'isolation',
      'telemetry', 'monitor', 'vitals', 'i&o', 'ins and outs'];
    var safetyCount = _countMatches(plan, safetyTerms);
    if (safetyCount >= 3) { score += 5; }
    else if (safetyCount >= 1) { score += 3; feedback.push({ type: 'warn', msg: 'Include standard safety elements: DVT prophylaxis, diet, activity level, code status.' }); }
    else { feedback.push({ type: 'warn', msg: 'No safety/supportive care elements documented (DVT ppx, diet, activity, code status).' }); }

    // Orders correlation (0–5): plan should align with what was ordered
    var labOrders  = (extras && extras.labOrders)  ? extras.labOrders  : [];
    var imgOrders  = (extras && extras.imgOrders)  ? extras.imgOrders  : [];
    var totalOrders = labOrders.length + imgOrders.length;
    if (totalOrders >= 3 && planWc >= 40) {
      score += 5; // ordered tests + wrote plan = coherent
    } else if (totalOrders >= 1 && planWc >= 20) {
      score += 3;
    } else if (totalOrders === 0 && planWc >= 30) {
      score += 2;
      feedback.push({ type: 'warn', msg: 'No orders placed — plan should align with ordered investigations.' });
    }

    return { label: 'Plan Completeness', score: Math.min(score, 25), max: 25, feedback: feedback };
  }

  // ─── score() — main entry point ───────────────────────────────────────────

  function score(caseId, noteFields, extras) {
    var criteria = _registry[caseId] || null;
    var fields   = noteFields || {};
    var ex       = extras || {};

    var d1 = _scoreHistory(fields, criteria);
    var d2 = _scoreAssessment(fields, criteria);
    var d3 = _scoreReasoning(fields);
    var d4 = _scorePlan(fields, ex, criteria);

    var totalScore = d1.score + d2.score + d3.score + d4.score;
    var totalMax   = d1.max   + d2.max   + d3.max   + d4.max;   // 100
    var pct        = Math.round((totalScore / totalMax) * 100);
    var grade      = _grade(pct);

    return {
      caseId:    caseId,
      sections:  [d1, d2, d3, d4],
      total:     totalScore,
      max:       totalMax,
      pct:       pct,
      grade:     grade,
      timestamp: new Date().toISOString()
    };
  }

  // ─── autoRegister() ───────────────────────────────────────────────────────
  // Called when virtual-emr loads a case (line 2018).
  // Extracts scoring criteria from CRT case data.

  function autoRegister(caseId, crtData) {
    if (!caseId || !crtData) return;

    var criteria = {
      targetDiagnosis: crtData.diagnosis || crtData.targetDiagnosis || '',
      diagnosisAliases: crtData.diagnosisAliases || [],
      keyHistoryTerms:  [],
      keyPlanTerms:     []
    };

    // Extract key history terms from case signals
    if (crtData.signals) {
      var sigs = crtData.signals;
      if (sigs.criticalHistory) criteria.keyHistoryTerms = criteria.keyHistoryTerms.concat(sigs.criticalHistory);
      if (sigs.environmentalHistory) criteria.keyHistoryTerms = criteria.keyHistoryTerms.concat(sigs.environmentalHistory);
      if (sigs.keyHistory) criteria.keyHistoryTerms = criteria.keyHistoryTerms.concat(sigs.keyHistory);
    }

    // Extract key plan terms from treatments
    if (crtData.treatments) {
      var tx = crtData.treatments;
      if (Array.isArray(tx.orders)) {
        tx.orders.filter(function(o) { return o.correct || o.critical; })
                 .forEach(function(o) {
                   var name = (o.name || o.label || '').toLowerCase();
                   if (name) criteria.keyPlanTerms.push(name);
                 });
      }
      if (Array.isArray(tx.keyMedications)) {
        criteria.keyPlanTerms = criteria.keyPlanTerms.concat(tx.keyMedications);
      }
    }

    // Also pull from patientScript / teaching points if available
    if (crtData.teaching && Array.isArray(crtData.teaching.keyPoints)) {
      // Add any medication/treatment names from teaching points
      crtData.teaching.keyPoints.forEach(function(kp) {
        var matches = (kp || '').match(/\b[A-Za-z]{4,}\b/g) || [];
        // Only add if looks like a clinical term (not generic words)
        matches.forEach(function(m) {
          var lm = m.toLowerCase();
          var generic = ['with','that','this','from','when','have','been','will','should','must','your','their','these','those','then','than','also','only','both','each','most','other','some','such'];
          if (!generic.includes(lm) && lm.length >= 5) {
            criteria.keyPlanTerms.push(lm);
          }
        });
      });
    }

    // Deduplicate
    criteria.keyHistoryTerms = criteria.keyHistoryTerms.filter(function(v, i, a) { return a.indexOf(v) === i; });
    criteria.keyPlanTerms    = criteria.keyPlanTerms.filter(function(v, i, a) { return a.indexOf(v) === i; }).slice(0, 15);

    _registry[caseId] = criteria;
  }

  // ─── getCaseFrameVector() ─────────────────────────────────────────────────
  // Returns a normalized [0–1] vector of 4 domain scores.
  // Used for CRDA (cross-student comparison) in rdx-agent-enhancements.js.
  // Vector: [ historyQuality, assessmentDdx, reasoningArticulation, planCompleteness ]

  function getCaseFrameVector(result) {
    if (!result || !result.sections || result.sections.length < 4) {
      return [0, 0, 0, 0];
    }
    return result.sections.map(function(sec) {
      return sec.max > 0 ? Math.round((sec.score / sec.max) * 100) / 100 : 0;
    });
  }

  // ─── saveResult() ─────────────────────────────────────────────────────────
  // Persists result to localStorage.
  // Keys:
  //   rdx-cf-{student}-{caseId}   → full result object
  //   rdx-cf-history-{student}    → array of summary entries (for analytics dashboard)

  function saveResult(studentName, caseId, result) {
    if (!result) return;
    var student = studentName || 'anon';
    var key = 'rdx-cf-' + student + '-' + (caseId || 'unknown');

    try {
      localStorage.setItem(key, JSON.stringify({ result: result, timestamp: result.timestamp }));
    } catch(e) { console.warn('[CaseFrame] localStorage write failed:', e.message); }

    // Update rolling history (max 50 entries)
    var histKey = 'rdx-cf-history-' + student;
    try {
      var history = JSON.parse(localStorage.getItem(histKey) || '[]');
      // Remove existing entry for this case if present
      history = history.filter(function(h) { return h.caseId !== caseId; });
      history.unshift({
        caseId:    caseId,
        pct:       result.pct,
        grade:     result.grade,
        timestamp: result.timestamp
      });
      if (history.length > 50) history = history.slice(0, 50);
      localStorage.setItem(histKey, JSON.stringify(history));
    } catch(e) { console.warn('[CaseFrame] history write failed:', e.message); }
  }

  // ─── loadResult() ─────────────────────────────────────────────────────────
  // Retrieves a previously saved result for a student × case pair.
  // Returns { result, timestamp } or null.

  function loadResult(studentName, caseId) {
    var student = studentName || 'anon';
    var key = 'rdx-cf-' + student + '-' + (caseId || 'unknown');
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch(e) { return null; }
  }

  // ─── renderSummary() ──────────────────────────────────────────────────────
  // Returns an HTML string panel. Styled to match OrderValidator.renderSummary().
  // opts: { chartReview: { highValueCoverage: float }, orderValidation: object }

  function renderSummary(result, opts) {
    if (!result) return '';
    var o = opts || {};

    var scoreColor = result.pct >= 80 ? '#059669' : result.pct >= 65 ? '#D97706' : '#DC2626';
    var gradeColor = result.pct >= 80 ? '#059669' : result.pct >= 65 ? '#D97706' : '#DC2626';

    var html = '<div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:18px;margin:12px 0">';
    html += '<div style="font-size:13px;font-weight:700;color:#1B4F72;margin-bottom:14px">📋 CaseFrame — Illness Script Scoring</div>';

    // Header: grade + score bar
    html += '<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">';
    html += '<div style="font-size:36px;font-weight:900;color:' + gradeColor + ';line-height:1">' + result.grade + '</div>';
    html += '<div style="flex:1">';
    html += '<div style="height:8px;background:#E2E8F0;border-radius:4px;overflow:hidden">';
    html += '<div style="height:100%;width:' + result.pct + '%;background:' + scoreColor + ';border-radius:4px;transition:width .4s"></div>';
    html += '</div>';
    html += '<div style="font-size:12px;color:#64748B;margin-top:4px">' + result.pct + '% overall · ' + result.total + '/' + result.max + ' points</div>';
    html += '</div></div>';

    // Domain breakdown
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">';
    result.sections.forEach(function(sec) {
      var pct = Math.round((sec.score / sec.max) * 100);
      var c   = pct >= 80 ? '#059669' : pct >= 60 ? '#D97706' : '#DC2626';
      var bg  = pct >= 80 ? '#ECFDF5' : pct >= 60 ? '#FEF3C7' : '#FEF2F2';
      html += '<div style="background:' + bg + ';border-radius:8px;padding:10px 12px">';
      html += '<div style="font-size:11px;font-weight:700;color:' + c + ';margin-bottom:4px">' + pct + '%</div>';
      html += '<div style="font-size:10px;font-weight:600;color:#374151;margin-bottom:4px">' + _esc(sec.label) + '</div>';
      html += '<div style="height:4px;background:rgba(0,0,0,.08);border-radius:2px;overflow:hidden">';
      html += '<div style="height:100%;width:' + pct + '%;background:' + c + ';border-radius:2px"></div>';
      html += '</div>';
      html += '<div style="font-size:10px;color:#6B7280;margin-top:3px">' + sec.score + '/' + sec.max + ' pts</div>';
      html += '</div>';
    });
    html += '</div>';

    // Chart review integration
    if (o.chartReview && typeof o.chartReview.highValueCoverage === 'number') {
      var hvc = Math.round(o.chartReview.highValueCoverage * 100);
      var hvcColor = hvc >= 80 ? '#059669' : hvc >= 50 ? '#D97706' : '#DC2626';
      html += '<div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:#EFF6FF;border-radius:8px;margin-bottom:10px">';
      html += '<span style="font-size:14px">📂</span>';
      html += '<div style="font-size:12px;flex:1"><strong>Chart review coverage:</strong> ' + hvc + '% of high-value chart elements accessed</div>';
      html += '<span style="font-size:12px;font-weight:700;color:' + hvcColor + '">' + hvc + '%</span>';
      html += '</div>';
    }

    // Feedback items (warnings + dangers from all domains)
    var allFeedback = [];
    result.sections.forEach(function(sec) {
      (sec.feedback || []).forEach(function(fb) { allFeedback.push(fb); });
    });

    var dangers  = allFeedback.filter(function(f) { return f.type === 'danger'; });
    var warnings = allFeedback.filter(function(f) { return f.type === 'warn'; });

    if (dangers.length > 0) {
      html += '<div style="font-size:12px;font-weight:700;color:#DC2626;margin-bottom:6px">Documentation gaps:</div>';
      dangers.forEach(function(f) {
        html += '<div style="font-size:12px;padding:7px 10px;background:#FEF2F2;border-left:3px solid #DC2626;border-radius:0 6px 6px 0;margin-bottom:5px">';
        html += '✗ ' + _esc(f.msg);
        html += '</div>';
      });
    }

    if (warnings.length > 0) {
      html += '<div style="font-size:12px;font-weight:700;color:#D97706;margin-bottom:6px;margin-top:' + (dangers.length ? '8px' : '0') + '">To strengthen your note:</div>';
      warnings.slice(0, 4).forEach(function(f) { // cap at 4 warnings to avoid overwhelming
        html += '<div style="font-size:12px;padding:7px 10px;background:#FEF3C7;border-left:3px solid #D97706;border-radius:0 6px 6px 0;margin-bottom:5px">';
        html += '→ ' + _esc(f.msg);
        html += '</div>';
      });
    }

    if (allFeedback.length === 0) {
      html += '<div style="font-size:12px;color:#059669;padding:8px 10px;background:#ECFDF5;border-radius:6px">✓ Documentation is complete and well-structured.</div>';
    }

    // Evidence note
    html += '<div style="font-size:10px;color:#94A3B8;margin-top:10px;padding-top:8px;border-top:1px solid #E2E8F0">';
    html += 'Scored against Bordage (1994) elaborated knowledge · Elstein (1978) hypothetico-deductive model · Graber (2005) diagnostic error taxonomy';
    html += '</div>';

    html += '</div>';
    return html;
  }

  // ─── Export ───────────────────────────────────────────────────────────────
  window.CaseFrame = {
    autoRegister:      autoRegister,
    score:             score,
    getCaseFrameVector: getCaseFrameVector,
    saveResult:        saveResult,
    loadResult:        loadResult,
    renderSummary:     renderSummary
  };

})(window);
