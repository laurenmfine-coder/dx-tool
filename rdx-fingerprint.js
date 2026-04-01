/**
 * rdx-fingerprint.js
 * ReasonDx — Reasoning Fingerprint System
 *
 * TWO jobs:
 *
 * 1. POST-SESSION: After simulation completes, extract a structured
 *    fingerprint from state + ReasoningTrace, embed it via rdx-embed
 *    worker, and upsert into reasoning_fingerprints table.
 *
 * 2. PRE-SESSION: At simulation start, load the student's cognitive
 *    profile from student_cognitive_profiles and inject it into the
 *    simulation state so the debrief and case recommender can use it.
 *
 * Usage:
 *   // At session end (called from simulation-engine.html COMPLETE phase):
 *   await RDXFingerprint.store(state, caseData, reasoningGraph, confidenceScore);
 *
 *   // At session start (called from startStudy after state is initialized):
 *   const profile = await RDXFingerprint.loadProfile(studentName);
 *   state.cognitiveProfile = profile; // null if first session
 */

(function(window) {
  'use strict';

  var SUPABASE_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';
  var EMBED_WORKER  = 'https://rdx-embed.laurenmfine.workers.dev';

  // ── Helpers ──────────────────────────────────────────────────

  async function sbPost(path, body) {
    var res = await fetch(SUPABASE_URL + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'Prefer': 'resolution=merge-duplicates,return=minimal'
      },
      body: JSON.stringify(body)
    });
    return res;
  }

  async function sbGet(path) {
    var res = await fetch(SUPABASE_URL + path, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY
      }
    });
    if (!res.ok) return null;
    return res.json();
  }

  async function getEmbedding(text) {
    try {
      var res = await fetch(EMBED_WORKER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text.slice(0, 1500) })
      });
      var data = await res.json();
      return Array.isArray(data.embedding) ? data.embedding : null;
    } catch(e) {
      console.warn('[RDXFingerprint] embed failed:', e.message);
      return null;
    }
  }

  // ── Fingerprint extraction ────────────────────────────────────

  function extractFingerprint(state, caseData, reasoningGraph, confidenceScore) {
    var diffs = state.differentials || {};

    // Flatten differential arrays — handle both string and object entries
    function flattenDx(arr) {
      if (!Array.isArray(arr)) return [];
      return arr.map(function(d) {
        return (d && (d.diagnosis || d.name || d)) || '';
      }).filter(Boolean);
    }

    var dxInitial = flattenDx(diffs.phase1 || []);
    var dxRevised = flattenDx(diffs.phase4 || diffs.phase5 || []);
    var dxFinal   = flattenDx(diffs.phase6 || diffs.phase7 || dxRevised);
    var target    = (caseData && caseData.targetDiagnosis) || '';

    function inDx(dxList, target) {
      if (!target) return false;
      var t = target.toLowerCase();
      return dxList.some(function(d) {
        return d.toLowerCase().indexOf(t.split(' ')[0]) !== -1 ||
               t.indexOf(d.toLowerCase().split(' ')[0]) !== -1;
      });
    }

    // ── Cognitive bias detection — grounded in peer-reviewed literature ──
    // See docs/cognitive-bias-evidence-base.md for full citations.
    // All signals require minimum 3 sessions before pattern reporting.

    // ANCHORING BIAS (Croskerry 2009; Graber et al. 2005; Kunitomo et al. 2022)
    // Definition: adherence to initial hypothesis despite accumulating
    // contradictory evidence that should have prompted reconsideration.
    // Operationalization: top initial dx = top final dx AND missed target AND
    // revised differential was submitted (confirming exposure to new evidence).
    var anchoringDetected = false;
    if (dxInitial.length > 0 && dxFinal.length > 0 && dxRevised.length > 0) {
      var topInitial = dxInitial[0].toLowerCase();
      var topFinal   = dxFinal[0].toLowerCase();
      var topUnchanged = topInitial.split(' ')[0] === topFinal.split(' ')[0];
      var missedTarget = !inDx(dxFinal, target);
      // Only flag anchoring if student missed the target (persistence ≠ anchoring)
      if (topUnchanged && missedTarget) {
        anchoringDetected = true;
      }
    }

    // PREMATURE CLOSURE (Graber et al. 2005; Berner & Graber 2008; Croskerry 2018)
    // Definition: "the failure to continue considering reasonable alternatives
    // after an initial diagnosis was reached" — the single most common cognitive
    // error in diagnostic error (Graber et al., Arch Intern Med 2005).
    // Operationalization: revised differential substantively identical to final
    // differential (no meaningful update post-labs/imaging) AND missed target.
    var prematureClosure = false;
    var historyTurns = (state.turns || []).filter(function(t) {
      return t.role === 'student' && t.phase === 3;
    }).length;
    if (dxRevised.length > 0 && dxFinal.length > 0 && !inDx(dxFinal, target)) {
      // Compare top 3 diagnoses — small ordering changes don't count as revision
      var revisedTop3 = dxRevised.slice(0,3).map(function(d) { return d.toLowerCase().split(' ')[0]; });
      var finalTop3   = dxFinal.slice(0,3).map(function(d) { return d.toLowerCase().split(' ')[0]; });
      var noMeaningfulChange = JSON.stringify(revisedTop3) === JSON.stringify(finalTop3);
      if (noMeaningfulChange) {
        prematureClosure = true;
      }
    }

    // MISSED PIVOT HISTORY / FAULTY CONTEXT GENERATION (Graber et al. 2005)
    // "Faulty context generation" is one of the most common cognitive error
    // subtypes. In ReasonDx cases, env_history_score tracks whether the
    // student elicited the case's critical contextual history element
    // (exposure, substance use, occupation, travel, etc.).
    var missedPivot = (state.envHistoryScore === 0);

    // EVIDENCE INTEGRATION (Croskerry 2009 — debiasing via System 2 engagement)
    // Positive signal: student updated differential after receiving objective data.
    // Operationalization: rank-order change in top diagnoses between phase 4
    // and final differential, indicating active hypothesis updating.
    var integratedEvidence = false;
    if (dxRevised.length > 0 && dxFinal.length > 0) {
      var revisedStr = dxRevised.slice(0,3).map(function(d) { return d.toLowerCase().split(' ')[0]; }).join(',');
      var finalStr   = dxFinal.slice(0,3).map(function(d) { return d.toLowerCase().split(' ')[0]; }).join(',');
      integratedEvidence = revisedStr !== finalStr;
    }

    // Ordered imaging/labs
    var allStudentText = (state.turns || [])
      .filter(function(t) { return t.role === 'student'; })
      .map(function(t) { return t.content; }).join(' ');
    var orderedImaging = /\b(ct|hrct|x-?ray|mri|imaging|scan|cxr)\b/i.test(allStudentText);
    var orderedLabs    = /\b(cbc|cmp|troponin|esr|crp|ldh|bmp|bun|creatinine|glucose|hgb|wbc|plt)\b/i.test(allStudentText);

    return {
      session_id:          state.sessionId,
      student_name:        state.studentName || 'Anonymous',
      training_year:       state.trainingYear || null,
      case_id:             (caseData && caseData.caseId) || 'unknown',
      target_diagnosis:    target || null,
      specialty:           (caseData && caseData.category) || null,
      dx_initial:          dxInitial,
      dx_revised:          dxRevised,
      dx_final:            dxFinal,
      target_in_initial:   inDx(dxInitial, target),
      target_in_final:     inDx(dxFinal, target),
      dx_count_initial:    dxInitial.length,
      dx_count_final:      dxFinal.length,
      dx_narrowed:         dxFinal.length < dxInitial.length,
      anchoring_detected:  anchoringDetected,
      premature_closure:   prematureClosure,
      missed_pivot_history: missedPivot,
      env_history_score:   state.envHistoryScore || 0,
      history_turns:       historyTurns,
      total_turns:         state.turnCount || 0,
      ordered_imaging:     orderedImaging,
      ordered_labs:        orderedLabs,
      integrated_evidence: integratedEvidence,
      confidence_score:    confidenceScore || state._confidenceScore || null,
      reasoning_graph:     reasoningGraph || null
    };
  }

  // ── Build embedding text from fingerprint ─────────────────────
  // Rich text description of reasoning pathway for semantic embedding

  function buildEmbedText(fp) {
    var parts = [
      'Case: ' + fp.case_id,
      'Diagnosis: ' + (fp.target_diagnosis || 'unknown'),
      'Specialty: ' + (fp.specialty || 'general'),
      'Initial differential (' + fp.dx_count_initial + '): ' + (fp.dx_initial || []).join(', '),
      'Final differential (' + fp.dx_count_final + '): ' + (fp.dx_final || []).join(', '),
      'Target in initial: ' + fp.target_in_initial,
      'Target in final: ' + fp.target_in_final,
      'Anchoring: ' + fp.anchoring_detected,
      'Premature closure: ' + fp.premature_closure,
      'Missed pivot history: ' + fp.missed_pivot_history,
      'Evidence integrated: ' + fp.integrated_evidence,
      'Total turns: ' + fp.total_turns,
      'History turns: ' + fp.history_turns,
    ];
    return parts.join('. ');
  }

  // ── Public API ───────────────────────────────────────────────

  var RDXFingerprint = {

    /**
     * store(state, caseData, reasoningGraph, confidenceScore)
     * Call at COMPLETE phase. Extracts fingerprint, embeds it,
     * upserts to Supabase. Non-blocking — errors are logged only.
     */
    store: async function(state, caseData, reasoningGraph, confidenceScore) {
      try {
        if (!state || !state.sessionId) return;

        var fp = extractFingerprint(state, caseData, reasoningGraph, confidenceScore);
        var embedText = buildEmbedText(fp);
        var embedding = await getEmbedding(embedText);

        var row = Object.assign({}, fp, {
          embedding: embedding  // null if embed failed — still stores the structured data
        });

        var res = await sbPost('/rest/v1/reasoning_fingerprints', row);
        if (res.ok) {
          console.log('[RDXFingerprint] Stored fingerprint for session:', state.sessionId);
        } else {
          var err = await res.text();
          console.warn('[RDXFingerprint] Store failed:', res.status, err.slice(0, 200));
        }
      } catch(e) {
        console.warn('[RDXFingerprint] store error (non-fatal):', e.message);
      }
    },

    /**
     * loadProfile(studentName)
     * Call at session start. Returns cognitive profile or null.
     * Profile includes pattern_tags, recommended_specialties,
     * accuracy rates, and behavioral tendencies.
     */
    loadProfile: async function(studentName) {
      try {
        if (!studentName || studentName === 'Student') return null;
        var encoded = encodeURIComponent(studentName);
        var data = await sbGet(
          '/rest/v1/student_cognitive_profiles?student_name=eq.' + encoded + '&limit=1'
        );
        if (Array.isArray(data) && data.length > 0) {
          console.log('[RDXFingerprint] Profile loaded for:', studentName, data[0].pattern_tags);
          return data[0];
        }
        return null;
      } catch(e) {
        console.warn('[RDXFingerprint] loadProfile error (non-fatal):', e.message);
        return null;
      }
    },

    /**
     * getSessionHistory(studentName, limit)
     * Returns recent fingerprints for a student —
     * used by the debrief to show longitudinal progress.
     */
    getSessionHistory: async function(studentName, limit) {
      try {
        limit = limit || 5;
        var encoded = encodeURIComponent(studentName);
        var data = await sbGet(
          '/rest/v1/reasoning_fingerprints?student_name=eq.' + encoded +
          '&order=created_at.desc&limit=' + limit +
          '&select=session_id,case_id,target_diagnosis,specialty,target_in_final,' +
          'anchoring_detected,premature_closure,missed_pivot_history,confidence_score,' +
          'total_turns,created_at'
        );
        return Array.isArray(data) ? data : [];
      } catch(e) {
        console.warn('[RDXFingerprint] getSessionHistory error:', e.message);
        return [];
      }
    },

    /**
     * buildProfileContext(profile, history)
     * Generates a plain-text context block for injection into
     * Claude prompts (debrief, case recommender, faculty agent).
     */
    buildProfileContext: function(profile, history) {
      if (!profile || profile.total_sessions < 2) return null;

      var lines = [
        '=== STUDENT COGNITIVE PROFILE ===',
        'Sessions completed: ' + profile.total_sessions,
        'Training year: ' + (profile.training_year || 'unknown'),
        'Specialties covered: ' + (profile.specialties_covered || []).join(', '),
        '',
        'Performance patterns:',
        '- Target diagnosis in final differential: ' + Math.round((profile.avg_target_in_final || 0) * 100) + '% of sessions',
        '- Target in initial differential: ' + Math.round((profile.avg_target_in_initial || 0) * 100) + '% of sessions',
        '- Average initial differential breadth: ' + (profile.avg_dx_count_initial || 0).toFixed(1) + ' diagnoses',
        '- Average confidence (1-5): ' + (profile.avg_confidence ? profile.avg_confidence.toFixed(1) : 'not yet rated'),
        '',
        'Reasoning tendencies:',
      ];

      var tags = profile.pattern_tags || [];
      if (tags.length === 0) {
        lines.push('- No strong patterns identified yet (more sessions needed)');
      } else {
        // Descriptions grounded in Croskerry (2009), Graber et al. (2005),
        // and Berner & Graber (2008) — see docs/cognitive-bias-evidence-base.md
        var tagDescriptions = {
          'anchoring_tendency':   'tends to maintain initial diagnosis despite new contradicting evidence (anchoring bias — Croskerry, 2009)',
          'premature_closure':    'stops revising differential before fully evaluating new evidence (premature closure — Graber et al., 2005)',
          'history_gap':          'frequently misses the critical contextual history element (faulty context generation — Graber et al., 2005)',
          'narrow_opener':        'generates narrow initial differentials (< 2 diagnoses at Phase 1)',
          'broad_thinker':        'generates broad initial differentials (> 5 diagnoses at Phase 1)',
          'strong_accuracy':      'consistently includes correct diagnosis in final differential (> 80% of sessions)',
          'underconfident':       'accurate performance but systematically underestimates own reasoning (calibration gap — Croskerry & Norman, 2008)'
        };
        tags.forEach(function(tag) {
          lines.push('- ' + (tagDescriptions[tag] || tag));
        });
      }

      if (history && history.length > 1) {
        lines.push('');
        lines.push('Recent sessions:');
        history.slice(0, 3).forEach(function(s) {
          lines.push('- ' + (s.case_id || '?') + ': ' +
            (s.target_in_final ? '✓ reached diagnosis' : '✗ missed diagnosis') +
            (s.anchoring_detected ? ', anchoring noted' : '') +
            (s.confidence_score ? ', confidence ' + s.confidence_score + '/5' : ''));
        });
      }

      lines.push('=== END PROFILE ===');
      return lines.join('\n');
    }
  };

  window.RDXFingerprint = RDXFingerprint;

})(window);
