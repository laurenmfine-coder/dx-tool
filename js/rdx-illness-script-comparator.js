/**
 * rdx-illness-script-comparator.js — Illness Script Comparison Agent
 * ════════════════════════════════════════════════════════════════════
 * Compares illness scripts between two students who worked the same case.
 *
 * An illness script has three layers (Schmidt & Boshuizen, 1993):
 *   1. Enabling conditions  — who gets this? (epidemiology, risk factors)
 *   2. Fault                — what goes wrong? (pathophysiology, mechanism)
 *   3. Consequences         — what does it cause? (symptoms, signs, labs)
 *
 * This module:
 *   - Extracts which illness script components each student activated
 *   - Compares activation patterns between two students
 *   - Identifies what Student A covered that Student B missed, and vice versa
 *   - Flags encapsulation quality (expert = rich enabling conditions)
 *   - Produces a structured comparison for research and faculty debrief
 *
 * RESEARCH USE (Multi-Profession Cohort Study):
 *   - Are prior-profession students' illness scripts richer in domain-relevant
 *     enabling conditions? (Hypothesis 1 of Arm 1)
 *   - Do illness scripts mature faster with more simulation exposure?
 *   - What is the inter-student divergence in illness script richness?
 *
 * USED BY: faculty-dashboard.html, cohort-analytics.html
 * DEPENDS ON: Cloudflare Worker (AI extraction), rad_study_sessions (session data)
 */

(function(window) {
  'use strict';

  var WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';

  // ── ILLNESS SCRIPT LAYER TAXONOMY ─────────────────────────────────────────
  // Maps clinical concepts to their illness script layer.
  // Used to classify student language into structured components.

  var IS_TAXONOMY = {
    enabling: [
      'age', 'sex', 'gender', 'risk factor', 'exposure', 'history of', 'prior',
      'family history', 'occupation', 'travel', 'immunocompromised', 'diabetes',
      'smoking', 'alcohol', 'obesity', 'hypertension', 'medication', 'allergy',
      'background', 'predispose', 'who gets', 'epidemiology', 'prevalence',
      'common in', 'typically affects', 'more likely in'
    ],
    fault: [
      'mechanism', 'pathophysiology', 'because', 'due to', 'causes', 'leads to',
      'results in', 'triggered by', 'mediated by', 'pathway', 'cascade',
      'inflammation', 'ischemia', 'obstruction', 'infection', 'autoimmune',
      'genetic', 'enzyme', 'receptor', 'channel', 'hormone', 'cytokine'
    ],
    consequences: [
      'presents with', 'signs', 'symptoms', 'complains of', 'reports',
      'labs show', 'imaging shows', 'exam finding', 'vital', 'temperature',
      'heart rate', 'blood pressure', 'oxygen', 'elevated', 'decreased',
      'positive', 'negative', 'EKG', 'X-ray', 'CT', 'ultrasound', 'biopsy'
    ]
  };

  // ── EXTRACT ILLNESS SCRIPT FROM TRANSCRIPT ────────────────────────────────

  /**
   * Uses AI to extract structured illness script components from a simulation transcript.
   * @param {string} transcript - Full conversation text from a simulation session
   * @param {string} targetDiagnosis - The correct diagnosis for the case
   * @returns {Promise<object>} { enabling, fault, consequences, richness, encapsulation }
   */
  async function extractFromTranscript(transcript, targetDiagnosis) {
    var systemPrompt = [
      'You are a medical education researcher analyzing clinical reasoning transcripts.',
      'Extract the illness script components a student demonstrated for: ' + targetDiagnosis,
      '',
      'Return ONLY valid JSON with this structure:',
      '{',
      '  "enabling": ["list of enabling conditions the student mentioned or asked about"],',
      '  "fault": ["list of pathophysiological mechanisms the student referenced"],',
      '  "consequences": ["list of symptoms/signs/labs the student used as evidence"],',
      '  "missed_enabling": ["important enabling conditions for this diagnosis that were NOT mentioned"],',
      '  "missed_fault": ["key mechanisms that were NOT explored"],',
      '  "richness_score": <0-10, where 10=expert-level illness script with all 3 layers populated>,',
      '  "encapsulation_level": "<novice|developing|proficient|expert>",',
      '  "encapsulation_note": "<one sentence on why>"',
      '}'
    ].join('\n');

    var userMsg = 'TARGET DIAGNOSIS: ' + targetDiagnosis + '\n\nTRANSCRIPT:\n' + transcript.slice(0, 4000);

    try {
      var res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studyMode: true,
          studySystem: systemPrompt,
          studyModel: 'claude-haiku-4-5-20251001',
          messages: [{ role: 'user', content: userMsg }],
          max_tokens: 600
        })
      });
      var data = await res.json();
      var raw = (data.content && data.content[0] && data.content[0].text) || '{}';
      var clean = raw.replace(/```json|```/g, '').trim();
      return JSON.parse(clean);
    } catch(e) {
      console.warn('[IS Comparator] Extraction failed:', e.message);
      return { enabling: [], fault: [], consequences: [], missed_enabling: [],
               missed_fault: [], richness_score: 0, encapsulation_level: 'unknown',
               encapsulation_note: 'Extraction unavailable' };
    }
  }

  // ── COMPARE TWO ILLNESS SCRIPTS ───────────────────────────────────────────

  /**
   * Compares two extracted illness scripts and produces a structured diff.
   * @param {object} scriptA - Extracted illness script from Student A
   * @param {object} scriptB - Extracted illness script from Student B
   * @param {string} studentALabel - Display name/profession for Student A
   * @param {string} studentBLabel - Display name/profession for Student B
   * @returns {object} Full comparison report
   */
  function compareScripts(scriptA, scriptB, studentALabel, studentBLabel) {
    var labelA = studentALabel || 'Student A';
    var labelB = studentBLabel || 'Student B';

    function overlap(arrA, arrB) {
      // Simple keyword overlap (case-insensitive)
      var setA = new Set(arrA.map(function(x){ return x.toLowerCase(); }));
      var setB = new Set(arrB.map(function(x){ return x.toLowerCase(); }));
      var shared = [...setA].filter(function(x){ return setB.has(x); });
      var onlyA  = [...setA].filter(function(x){ return !setB.has(x); });
      var onlyB  = [...setB].filter(function(x){ return !setA.has(x); });
      return { shared: shared, onlyA: onlyA, onlyB: onlyB };
    }

    var enablingComp    = overlap(scriptA.enabling    || [], scriptB.enabling    || []);
    var faultComp       = overlap(scriptA.fault       || [], scriptB.fault       || []);
    var consequencesComp= overlap(scriptA.consequences|| [], scriptB.consequences|| []);

    // Divergence score: 0 = identical, 100 = completely different
    var totalItems = (scriptA.enabling||[]).length + (scriptA.fault||[]).length + (scriptA.consequences||[]).length +
                     (scriptB.enabling||[]).length + (scriptB.fault||[]).length + (scriptB.consequences||[]).length;
    var sharedItems = enablingComp.shared.length + faultComp.shared.length + consequencesComp.shared.length;
    var divergenceScore = totalItems > 0 ? Math.round(100 * (1 - (2 * sharedItems / totalItems))) : 0;

    return {
      // Student labels
      studentA: labelA,
      studentB: labelB,

      // Layer-by-layer comparison
      enabling: {
        shared:    enablingComp.shared,
        only_A:    enablingComp.onlyA,
        only_B:    enablingComp.onlyB,
        comment:   enablingComp.onlyA.length > enablingComp.onlyB.length
          ? labelA + ' elicited more enabling condition detail'
          : enablingComp.onlyB.length > enablingComp.onlyA.length
          ? labelB + ' elicited more enabling condition detail'
          : 'Similar enabling condition coverage'
      },
      fault: {
        shared:    faultComp.shared,
        only_A:    faultComp.onlyA,
        only_B:    faultComp.onlyB,
        comment:   faultComp.onlyA.length > faultComp.onlyB.length
          ? labelA + ' explored more mechanistic depth'
          : faultComp.onlyB.length > faultComp.onlyA.length
          ? labelB + ' explored more mechanistic depth'
          : 'Similar mechanistic coverage'
      },
      consequences: {
        shared:    consequencesComp.shared,
        only_A:    consequencesComp.onlyA,
        only_B:    consequencesComp.onlyB,
        comment:   'Clinical feature coverage comparison'
      },

      // Summary metrics
      richness_A:         scriptA.richness_score || 0,
      richness_B:         scriptB.richness_score || 0,
      encapsulation_A:    scriptA.encapsulation_level || 'unknown',
      encapsulation_B:    scriptB.encapsulation_level || 'unknown',
      divergence_score:   divergenceScore,  // 0=identical, 100=fully divergent
      richer_student:     (scriptA.richness_score||0) >= (scriptB.richness_score||0) ? labelA : labelB,

      // Research flags
      prior_profession_advantage: null,  // Set by caller if prior profession is known
      comparison_timestamp: new Date().toISOString()
    };
  }

  // ── AI NARRATIVE COMPARISON ───────────────────────────────────────────────

  /**
   * Generates a faculty-facing narrative comparing two students' illness scripts.
   * @param {object} comparison - Output from compareScripts()
   * @param {string} caseId - Case identifier
   * @param {string} targetDiagnosis - Correct diagnosis
   * @returns {Promise<string>} 3-paragraph narrative for faculty debrief
   */
  async function generateNarrative(comparison, caseId, targetDiagnosis) {
    var systemPrompt = [
      'You are a medical education researcher writing a faculty debrief note.',
      'Compare how two students developed their illness script for: ' + targetDiagnosis,
      'Write 3 short paragraphs (max 180 words total):',
      '1. What each student covered well (cite specific layers)',
      '2. The most clinically meaningful gap between them',
      '3. What a complete expert illness script for this diagnosis would include that both missed',
      'Do NOT use bullet points. Write in plain prose suitable for faculty feedback.'
    ].join('\n');

    var userMsg = JSON.stringify({
      studentA: comparison.studentA,
      studentB: comparison.studentB,
      enabling_only_A: comparison.enabling.only_A.slice(0,5),
      enabling_only_B: comparison.enabling.only_B.slice(0,5),
      fault_only_A: comparison.fault.only_A.slice(0,5),
      fault_only_B: comparison.fault.only_B.slice(0,5),
      richness_A: comparison.richness_A,
      richness_B: comparison.richness_B,
      encapsulation_A: comparison.encapsulation_A,
      encapsulation_B: comparison.encapsulation_B,
      divergence_score: comparison.divergence_score
    });

    try {
      var res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studyMode: true,
          studySystem: systemPrompt,
          studyModel: 'claude-haiku-4-5-20251001',
          messages: [{ role: 'user', content: userMsg }],
          max_tokens: 350
        })
      });
      var data = await res.json();
      return (data.content && data.content[0] && data.content[0].text) ||
             'Narrative generation unavailable.';
    } catch(e) {
      return 'Narrative generation unavailable: ' + e.message;
    }
  }

  // ── FULL PIPELINE: TWO SESSIONS → COMPARISON REPORT ──────────────────────

  /**
   * End-to-end comparison: takes two session records from Supabase,
   * extracts illness scripts, compares them, generates a narrative.
   *
   * @param {object} sessionA - Full session record from rad_study_sessions
   * @param {object} sessionB - Full session record from rad_study_sessions
   * @param {object} options  - { professionA, professionB, showNarrative }
   * @returns {Promise<object>} { scriptA, scriptB, comparison, narrative }
   */
  async function compareSessionPair(sessionA, sessionB, options) {
    var opts = options || {};

    // Build transcript strings from session data
    var transcriptA = buildTranscriptString(sessionA);
    var transcriptB = buildTranscriptString(sessionB);
    var targetDx = sessionA.target_diagnosis || sessionB.target_diagnosis || 'Unknown';

    // Extract in parallel
    var results = await Promise.all([
      extractFromTranscript(transcriptA, targetDx),
      extractFromTranscript(transcriptB, targetDx)
    ]);

    var scriptA = results[0];
    var scriptB = results[1];

    // Label by profession if available
    var labelA = opts.professionA
      ? (sessionA.student_name || 'Student A') + ' (' + opts.professionA + ')'
      : (sessionA.student_name || 'Student A');
    var labelB = opts.professionB
      ? (sessionB.student_name || 'Student B') + ' (' + opts.professionB + ')'
      : (sessionB.student_name || 'Student B');

    var comparison = compareScripts(scriptA, scriptB, labelA, labelB);

    // Flag prior-profession advantage if known
    if (opts.professionA && opts.priorProfessionA) {
      comparison.prior_profession_advantage = {
        student: labelA,
        current_profession: opts.professionA,
        prior_profession: opts.priorProfessionA
      };
    }

    var narrative = null;
    if (opts.showNarrative !== false) {
      narrative = await generateNarrative(comparison, sessionA.case_id, targetDx);
    }

    return {
      caseId:     sessionA.case_id,
      scriptA:    scriptA,
      scriptB:    scriptB,
      comparison: comparison,
      narrative:  narrative,
      generatedAt: new Date().toISOString()
    };
  }

  function buildTranscriptString(session) {
    if (!session) return '';
    // Handle both array of turn objects and plain string
    if (typeof session.transcript === 'string') return session.transcript;
    if (Array.isArray(session.transcript)) {
      return session.transcript.map(function(t) {
        return (t.role || 'unknown').toUpperCase() + ': ' + (t.content || t.text || '');
      }).join('\n');
    }
    // Fallback: try to extract from turns
    if (Array.isArray(session.turns)) {
      return session.turns.map(function(t) {
        return (t.role || 'unknown').toUpperCase() + ': ' + (t.content || '');
      }).join('\n');
    }
    return JSON.stringify(session).slice(0, 2000);
  }

  // ── PUBLIC API ──────────────────────────────────────────────────────────────
  window.RdxIllnessScriptComparator = {
    extractFromTranscript: extractFromTranscript,
    compareScripts:        compareScripts,
    generateNarrative:     generateNarrative,
    compareSessionPair:    compareSessionPair
  };

})(window);
