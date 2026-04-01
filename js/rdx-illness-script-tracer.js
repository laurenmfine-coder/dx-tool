/**
 * rdx-illness-script-tracer.js — Agent 1: Illness Script Evolution Tracer
 * ═══════════════════════════════════════════════════════════════
 * Tracks how a student's illness script for a specific diagnosis
 * evolves across repeated encounters. Implements the first
 * computational operationalization of Schmidt & Rikers' (2007)
 * illness script encapsulation theory in medical education software.
 *
 * WHAT IT DOES:
 *   At the end of every simulation session, extracts the student's
 *   justification text from three snapshot phases:
 *     - 'initial'  (Phase 2): reasoning before seeing patient
 *     - 'revised'  (Phase 4): reasoning after history-taking
 *     - 'final'    (Phase 6+): reasoning after labs/imaging
 *   Embeds each snapshot via the Voyage embed worker (512 dims),
 *   records the encounter number for this diagnosis family, and
 *   stores everything in illness_script_sessions.
 *
 *   Nightly pg_cron computes cosine similarity to the prior encounter
 *   and centroid distance. Increasing similarity = encapsulation.
 *
 * BORDAGE SCORE:
 *   Scores each justification text on Bordage's (1994) elaboration
 *   scale using the same 4-domain heuristic as CaseFrame:
 *     0 = no causal connectors, no specific findings, no alternatives
 *     1 = one domain present
 *     2 = two domains
 *     3 = three or four domains (elaborated knowledge)
 *
 * PUBLIC API:
 *   IllnessScriptTracer.capture(state, caseData)
 *     → called at session end; extracts + embeds + stores all snapshots
 *   IllnessScriptTracer.getEncounterNumber(studentName, diagnosisSlug)
 *     → Promise<number> — how many times this student has seen this dx
 *   IllnessScriptTracer.getTrajectory(studentName, diagnosisSlug)
 *     → Promise<object> — encapsulation trajectory for this student × dx
 *
 * THEORETICAL GROUNDING:
 *   Schmidt, H. G., & Rikers, R. M. J. P. (2007). How expertise
 *     develops in medicine: knowledge encapsulation and illness script
 *     formation. Med Educ, 41(12), 1133–1139.
 *   Custers, E. J. F. M. (2015). Thirty years of illness scripts.
 *     Adv Health Sci Educ, 20(1), 301–312.
 *   Bordage, G. (1994). Elaborated knowledge: A key to successful
 *     diagnostic thinking. Acad Med, 69(11), 883–885.
 *   Bordage, G., & Lemieux, M. (1991). Semantic structures and
 *     diagnostic thinking of experts and novices.
 *     Acad Med, 66(9 Suppl), S70–S72.
 * ═══════════════════════════════════════════════════════════════
 */

(function (window) {
  'use strict';

  var SUPABASE_URL  = 'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';
  var EMBED_WORKER  = 'https://rdx-embed.laurenmfine.workers.dev';

  // ── Supabase helpers ──────────────────────────────────────────────────────

  function sbGet(path) {
    return fetch(SUPABASE_URL + path, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
    }).then(function(r) { return r.ok ? r.json() : null; }).catch(function() { return null; });
  }

  function sbPost(path, body) {
    return fetch(SUPABASE_URL + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(body)
    }).then(function(r) { return { ok: r.ok, status: r.status }; })
      .catch(function(e) { return { ok: false, error: e.message }; });
  }

  // ── Embed helper ─────────────────────────────────────────────────────────

  function getEmbedding(text) {
    return fetch(EMBED_WORKER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text.slice(0, 2000) })
    }).then(function(r) { return r.json(); })
      .then(function(d) { return Array.isArray(d.embedding) ? d.embedding : null; })
      .catch(function(e) {
        console.warn('[IllnessScriptTracer] embed failed:', e.message);
        return null;
      });
  }

  // ── Bordage score ─────────────────────────────────────────────────────────
  // Heuristic operationalization of Bordage (1994) elaboration scale.
  // Returns 0–3 based on presence of 4 elaboration markers.

  function bordageScore(text) {
    if (!text || text.trim().length < 10) return 0;
    var t = text.toLowerCase();
    var score = 0;

    // (a) Causal connectors — elaborated knowledge links findings to diagnoses
    if (/\b(because|given that|based on|in the setting of|consistent with|due to|secondary to|supported by|given the|this explains|accounting for)\b/.test(t)) score++;

    // (b) Specific clinical finding referenced
    if (/\b(troponin|d-dimer|bnp|creatinine|wbc|lactate|fever|tachycardia|hypotension|hypoxia|saturation|elevated|decreased|positive|negative|crackles|wheezing|edema|murmur|imaging|ct |x-ray|echo|ecg|ekg)\b/.test(t)) score++;

    // (c) Considers alternatives — contrastive reasoning
    if (/\b(however|although|but|alternatively|less likely|cannot exclude|rule out|rather than|versus|vs\.|unlike|despite|in contrast)\b/.test(t)) score++;

    // (d) Probabilistic framing
    if (/\b(most likely|likely|probable|strongly suggests|consistent with|classic for|atypical for|less likely|argues against|high probability|low probability)\b/.test(t)) score++;

    return score;
  }

  // ── Extract justification text per phase ──────────────────────────────────
  // Pulls student turn text from the specified phase number.
  // Phase 2 = Justification (before patient)
  // Phase 4 = Revised Differential (after history)
  // Phases 6–7 = Labs/Imaging + Report (after objective data)

  function extractPhaseText(turns, phases) {
    if (!turns || !turns.length) return '';
    return turns
      .filter(function(t) {
        return t.role === 'student' && phases.indexOf(t.phase) !== -1;
      })
      .map(function(t) { return (t.content || '').trim(); })
      .filter(function(s) { return s.length > 10; })
      .join(' ')
      .slice(0, 2000);
  }

  // ── Diagnosis slug ────────────────────────────────────────────────────────
  // Normalizes diagnosis name for consistent keying across cases.

  function diagnosisSlug(diagnosis) {
    return (diagnosis || '').toLowerCase()
      .replace(/-/g, ' ')          // convert hyphens to spaces first
      .replace(/[^a-z0-9\s]/g, '') // strip remaining non-alphanumeric
      .replace(/\s+/g, '-')        // spaces to hyphens
      .replace(/^-+|-+$/g, '')     // trim leading/trailing hyphens
      .slice(0, 60);
  }

  // ── Get encounter number ──────────────────────────────────────────────────
  // How many times has this student encountered this diagnosis?

  function getEncounterNumber(studentName, diagnosis) {
    var slug = diagnosisSlug(diagnosis);
    return sbGet(
      '/rest/v1/illness_script_sessions' +
      '?student_name=eq.' + encodeURIComponent(studentName) +
      '&target_diagnosis=ilike.*' + encodeURIComponent(slug.replace(/-/g, ' ')) + '*' +
      '&snapshot_phase=eq.revised' +
      '&select=encounter_number' +
      '&order=encounter_number.desc&limit=1'
    ).then(function(data) {
      if (!data || !data.length) return 1;
      return (data[0].encounter_number || 0) + 1;
    });
  }

  // ── Capture all snapshots for a session ───────────────────────────────────
  // Main entry point. Called at session end.

  async function capture(state, caseData) {
    if (!state || !caseData) return;
    if (window._rdxPracticeOnly) return; // no data in practice mode

    var studentName  = state.studentName  || 'Anonymous';
    var sessionId    = state.sessionId    || null;
    var caseId       = (caseData && caseData.caseId) || 'unknown';
    var diagnosis    = (caseData && (caseData.targetDiagnosis || caseData.diagnosis)) || '';
    var specialty    = (caseData && caseData.category) || null;
    var turns        = state.turns || [];

    if (!diagnosis || !sessionId) {
      console.warn('[IllnessScriptTracer] Missing diagnosis or sessionId — skipping');
      return;
    }

    // Current differential state per phase
    var diffs = state.differentials || {};
    function hasDx(phase_arr) {
      if (!Array.isArray(phase_arr) || !phase_arr.length) return false;
      var slug = diagnosisSlug(diagnosis);
      return phase_arr.some(function(d) {
        var name = ((d && (d.diagnosis || d.name || d)) || '').toLowerCase();
        return name.indexOf(slug.replace(/-/g, ' ').split(' ')[0]) !== -1;
      });
    }

    // Get encounter number (async — one DB call)
    var encounterNum;
    try { encounterNum = await getEncounterNumber(studentName, diagnosis); }
    catch(e) { encounterNum = 1; }

    // Define the three snapshots to capture
    var snapshots = [
      {
        phase:       'initial',
        phases:      [1, 2],        // Initial differential + Justification
        dxArr:       diffs.phase1 || [],
        label:       'Initial differential and justification reasoning'
      },
      {
        phase:       'revised',
        phases:      [3, 4, 5],     // History + Revised differential + Physical exam discussion
        dxArr:       diffs.phase4 || diffs.phase5 || [],
        label:       'Revised differential reasoning after history and physical exam'
      },
      {
        phase:       'final',
        phases:      [6, 7, 8, 9], // Labs + Reports + Reflection + Management
        dxArr:       diffs.phase6 || diffs.phase7 || diffs.phase4 || [],
        label:       'Final differential reasoning after objective data'
      }
    ];

    // Process each snapshot asynchronously but don't block session completion
    for (var i = 0; i < snapshots.length; i++) {
      var snap = snapshots[i];
      var text = extractPhaseText(turns, snap.phases);

      // Need at least 20 chars to be meaningful
      if (text.length < 20) continue;

      // Compute Bordage score (synchronous)
      var bScore = bordageScore(text);

      // Get embedding (async — one API call per snapshot)
      var embedding = null;
      try { embedding = await getEmbedding(text); }
      catch(e) { console.warn('[IllnessScriptTracer] embed error:', e.message); }

      // Store to Supabase
      var row = {
        session_id:         sessionId,
        student_name:       studentName,
        training_year:      state.trainingYear || null,
        case_id:            caseId,
        target_diagnosis:   diagnosis,
        specialty:          specialty,
        snapshot_phase:     snap.phase,
        encounter_number:   encounterNum,
        justification_text: text.slice(0, 2000),
        embedding:          embedding,
        target_in_snapshot: hasDx(snap.dxArr),
        dx_count:           snap.dxArr.length,
        bordage_score:      bScore
      };

      try {
        var result = await sbPost('/rest/v1/illness_script_sessions', row);
        if (result.ok) {
          console.log('[IllnessScriptTracer] Stored ' + snap.phase + ' snapshot for', diagnosis,
            '(encounter #' + encounterNum + ', Bordage=' + bScore + ')');
        } else {
          console.warn('[IllnessScriptTracer] Store failed for phase ' + snap.phase + ':', result.status);
        }
      } catch(e) {
        console.warn('[IllnessScriptTracer] Store error:', e.message);
      }
    }

    console.log('[IllnessScriptTracer] All snapshots processed for session', sessionId);
  }

  // ── getTrajectory() ───────────────────────────────────────────────────────
  // Retrieves the encapsulation trajectory for a student × diagnosis.
  // Returns array of encounters sorted by encounter_number with
  // similarity_to_prior and centroid_distance (computed nightly).

  function getTrajectory(studentName, diagnosis) {
    var slugPart = diagnosis.toLowerCase().split(' ')[0]; // first word for fuzzy match
    return sbGet(
      '/rest/v1/illness_script_sessions' +
      '?student_name=eq.' + encodeURIComponent(studentName) +
      '&target_diagnosis=ilike.*' + encodeURIComponent(slugPart) + '*' +
      '&snapshot_phase=eq.revised' +
      '&select=encounter_number,case_id,target_in_snapshot,bordage_score,' +
               'similarity_to_prior,centroid_distance,created_at' +
      '&order=encounter_number.asc'
    ).then(function(data) {
      if (!data || !data.length) return { encounters: 0, trajectory: [] };
      return {
        diagnosis:    diagnosis,
        studentName:  studentName,
        encounters:   data.length,
        trajectory:   data,
        // Encapsulation signal: is similarity increasing?
        avgSimilarity: data.filter(function(d) { return d.similarity_to_prior !== null; })
          .reduce(function(a, d, _, arr) { return a + d.similarity_to_prior / arr.length; }, 0),
        isConverging: data.length >= 3 && (function() {
          var withSim = data.filter(function(d) { return d.similarity_to_prior !== null; });
          if (withSim.length < 2) return null;
          var first = withSim.slice(0, Math.floor(withSim.length / 2));
          var last  = withSim.slice(Math.floor(withSim.length / 2));
          var avgFirst = first.reduce(function(a,d){return a+d.similarity_to_prior;},0)/first.length;
          var avgLast  = last.reduce(function(a,d){return a+d.similarity_to_prior;},0)/last.length;
          return avgLast > avgFirst + 0.05; // convergence = later sims more similar
        })()
      };
    });
  }

  // ── Export ────────────────────────────────────────────────────────────────
  window.IllnessScriptTracer = {
    capture:            capture,
    getEncounterNumber: getEncounterNumber,
    getTrajectory:      getTrajectory,
    bordageScore:       bordageScore,   // exposed for testing
    diagnosisSlug:      diagnosisSlug
  };

})(window);
