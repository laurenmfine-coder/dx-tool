/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/**
 * rdx-semantic-drift.js — Agent 4: Semantic Drift Monitor
 * ═══════════════════════════════════════════════════════════════
 * Tracks how the semantic content of a student's clinical notes
 * evolves across repeated encounters with the same diagnosis —
 * operationalizing Bordage's (1994) elaborated knowledge framework
 * computationally from naturalistic written production data.
 *
 * WHAT IT DOES:
 *   On every EMR note submission (virtual-emr.html submitDoc()):
 *     1. Extracts the assessment + plan text (the reasoning-rich sections)
 *     2. Embeds it via the Voyage worker (512 dims)
 *     3. Retrieves or generates a gold standard embedding for this diagnosis
 *        from the case's teachingPoints.keyLearning content
 *     4. Computes cosine similarity to gold standard (semantic precision)
 *     5. Stores to note_embeddings table
 *
 *   Nightly pg_cron computes:
 *     - drift_trajectory: is similarity to gold standard increasing? (expertise)
 *     - centroid_distance: distance from this student's own mean embedding
 *       (decreasing = convergent, stable schema forming)
 *     - Regression alerts: sudden drop in similarity → flag to faculty dashboard
 *
 * GOLD STANDARD STRATEGY:
 *   No faculty notes exist in the system. Instead, gold standard embeddings
 *   are generated from case teachingPoints.keyLearning content — faculty-
 *   authored, evidence-grounded descriptions of what an expert would include.
 *   These are embedded once per case and stored in note_embeddings with
 *   student_name = '_gold_standard'.
 *
 * THEORETICAL GROUNDING:
 *   Bordage, G. (1994). Elaborated knowledge: A key to successful diagnostic
 *     thinking. Acad Med, 69(11), 883–885.
 *   Bordage, G., & Lemieux, M. (1991). Semantic structures and diagnostic
 *     thinking of experts and novices. Acad Med, 66(9 Suppl), S70–S72.
 *   Rikers, R. M. J. P. et al. (2002). The explanatory role of biomedical
 *     knowledge in clinical reasoning. Acad Med, 77(9), 918–924.
 *   Schmidt, H. G., & Rikers, R. M. J. P. (2007). How expertise develops
 *     in medicine. Med Educ, 41(12), 1133–1139.
 *
 * PUBLIC API:
 *   SemanticDrift.captureNote(studentName, caseId, noteFields, caseData)
 *     → Promise — called at note submission; embeds + stores
 *   SemanticDrift.getTrajectory(studentName, diagnosis)
 *     → Promise<object> — drift trajectory for this student × diagnosis
 *   SemanticDrift.ensureGoldStandard(caseId, caseData)
 *     → Promise — generates + stores gold standard if not yet present
 * ═══════════════════════════════════════════════════════════════
 */

(function (window) {
  'use strict';

  var SUPABASE_URL = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_KEY = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_ANON_KEY)||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';
  var EMBED_WORKER = 'https://rdx-embed.laurenmfine.workers.dev';

  // ─── Helpers ──────────────────────────────────────────────────────────────

  function sbGet(path) {
    return fetch(SUPABASE_URL + path, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
    }).then(function(r) { return r.ok ? r.json() : null; })
      .catch(function() { return null; });
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

  function getEmbedding(text) {
    return fetch(EMBED_WORKER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: (text || '').slice(0, 3000) })
    }).then(function(r) { return r.json(); })
      .then(function(d) { return Array.isArray(d.embedding) ? d.embedding : null; })
      .catch(function(e) {
        console.warn('[SemanticDrift] embed failed:', e.message);
        return null;
      });
  }

  // ─── Bordage elaboration score ─────────────────────────────────────────────
  // Same heuristic as IllnessScriptTracer for consistency.
  // 0 = bare, 1–2 = partial, 3–4 = elaborated (Bordage 1994)

  function bordageScore(text) {
    if (!text || text.trim().length < 10) return 0;
    var t = text.toLowerCase();
    var score = 0;
    if (/\b(because|given that|based on|in the setting of|consistent with|due to|secondary to|supported by|given the|this explains|accounting for)\b/.test(t)) score++;
    if (/\b(troponin|d-dimer|bnp|creatinine|wbc|lactate|fever|tachycardia|hypotension|hypoxia|elevated|decreased|positive|negative|crackles|wheezing|edema|murmur|imaging|ct |echo|ecg)\b/.test(t)) score++;
    if (/\b(however|although|but|alternatively|less likely|cannot exclude|rule out|rather than|versus|vs\.|unlike|despite|in contrast)\b/.test(t)) score++;
    if (/\b(most likely|likely|probable|strongly suggests|consistent with|classic for|atypical for|argues against|high probability|low probability)\b/.test(t)) score++;
    return score;
  }

  // ─── Extract note reasoning text ──────────────────────────────────────────
  // Focuses on assessment + plan — the reasoning-rich sections.
  // HPI is narrative; assess+plan is where expertise shows.

  function extractReasoningText(noteFields) {
    var sections = [];
    var priorityFields = ['assess', 'plan', 'recs', 'hpi', 'neuro', 'cv', 'resp', 'consult-q'];
    priorityFields.forEach(function(f) {
      if (noteFields[f] && noteFields[f].trim().length > 10) {
        sections.push(noteFields[f].trim());
      }
    });
    // ICU: combine all system sections
    ['gi-nutrition', 'renal', 'id', 'heme'].forEach(function(f) {
      if (noteFields[f] && noteFields[f].trim().length > 10) {
        sections.push(noteFields[f].trim());
      }
    });
    return sections.join('\n\n').slice(0, 3000);
  }

  // ─── Diagnosis slug ─────────────────────────────────────────────────────────

  function diagSlug(s) {
    return (s || '').toLowerCase()
      .replace(/-/g, ' ')
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60);
  }

  // ─── Build gold standard text from case teaching content ──────────────────
  // Combines keyLearning + boardPearls from teachingPoints into a rich
  // expert-authored reference text for embedding.

  function buildGoldStandardText(caseData) {
    var parts = [];
    var diagnosis = caseData.diagnosis || caseData.targetDiagnosis || '';
    if (diagnosis) parts.push('Diagnosis: ' + diagnosis);

    var tp = caseData.teachingPoints || caseData.teaching || {};

    // keyLearning — faculty-authored core concepts
    var kl = tp.keyLearning || tp.keyPoints || tp.key_learning || [];
    if (Array.isArray(kl) && kl.length > 0) {
      parts.push('Core concepts:');
      kl.forEach(function(point) { parts.push('- ' + point); });
    }

    // boardPearls — high-yield clinical reasoning points
    var bp = tp.boardPearls || tp.board_pearls || tp.pearls || [];
    if (Array.isArray(bp) && bp.length > 0) {
      parts.push('Clinical pearls:');
      bp.forEach(function(pearl) { parts.push('- ' + pearl); });
    }

    // Correct orders — what an expert would include in management
    var tx = caseData.treatments || caseData.orders || {};
    var correct = tx.correct || tx.keyOrders || [];
    if (Array.isArray(correct) && correct.length > 0) {
      parts.push('Expert management includes:');
      correct.slice(0, 5).forEach(function(o) {
        var name = o.name || o.label || o;
        var rat  = o.rationale || '';
        if (name) parts.push('- ' + name + (rat ? ': ' + rat : ''));
      });
    }

    // Near misses — what experts know NOT to miss
    var nm = caseData.nearMisses || [];
    if (Array.isArray(nm) && nm.length > 0) {
      parts.push('Critical distinctions:');
      nm.slice(0, 3).forEach(function(n) {
        if (n.teaching || n.explanation) parts.push('- ' + (n.teaching || n.explanation));
      });
    }

    return parts.join('\n').slice(0, 3000);
  }

  // ─── ensureGoldStandard() ─────────────────────────────────────────────────
  // Checks if a gold standard embedding exists for this case.
  // If not, generates it from teachingPoints and stores it.
  // student_name = '_gold_standard' marks it as reference data.

  var _goldStandardCache = {}; // in-memory per session

  async function ensureGoldStandard(caseId, caseData) {
    if (_goldStandardCache[caseId]) return _goldStandardCache[caseId];

    var diagnosis = (caseData && (caseData.diagnosis || caseData.targetDiagnosis)) || '';
    if (!diagnosis) return null;

    // Check if already stored
    var existing = await sbGet(
      '/rest/v1/note_embeddings' +
      '?student_name=eq._gold_standard' +
      '&case_id=eq.' + encodeURIComponent(caseId) +
      '&select=embedding,bordage_score&limit=1'
    );

    if (existing && existing.length > 0 && existing[0].embedding) {
      _goldStandardCache[caseId] = existing[0];
      return existing[0];
    }

    // Generate gold standard text from teaching content
    var goldText = buildGoldStandardText(caseData);
    if (goldText.trim().length < 50) {
      console.warn('[SemanticDrift] Insufficient teaching content for gold standard:', caseId);
      return null;
    }

    var embedding = await getEmbedding(goldText);
    if (!embedding) return null;

    var row = {
      student_name:     '_gold_standard',
      training_year:    'faculty',
      case_id:          caseId,
      diagnosis:        diagnosis,
      specialty:        (caseData && caseData.category) || null,
      note_text:        goldText.slice(0, 2000),
      embedding:        embedding,
      bordage_score:    bordageScore(goldText),
      encounter_number: 0,
      is_gold_standard: true
    };

    var result = await sbPost('/rest/v1/note_embeddings', row);
    if (result.ok) {
      rdxLog('[SemanticDrift] Gold standard stored for:', caseId, diagnosis);
      _goldStandardCache[caseId] = row;
      return row;
    }

    console.warn('[SemanticDrift] Gold standard store failed:', result.status);
    return null;
  }

  // ─── Get encounter number ─────────────────────────────────────────────────

  async function getEncounterNumber(studentName, caseId) {
    var data = await sbGet(
      '/rest/v1/note_embeddings' +
      '?student_name=eq.' + encodeURIComponent(studentName) +
      '&case_id=eq.' + encodeURIComponent(caseId) +
      '&is_gold_standard=eq.false' +
      '&select=encounter_number' +
      '&order=encounter_number.desc&limit=1'
    );
    if (!data || !data.length) return 1;
    return (data[0].encounter_number || 0) + 1;
  }

  // ─── captureNote() ────────────────────────────────────────────────────────
  // Main entry point — called at note submission in virtual-emr.html.

  async function captureNote(studentName, caseId, noteFields, caseData) {
    if (!studentName || !caseId || !noteFields) return;
    if (window._rdxPracticeOnly) return;

    var diagnosis  = (caseData && (caseData.diagnosis || caseData.targetDiagnosis)) || '';
    var specialty  = (caseData && caseData.category) || null;
    var noteText   = extractReasoningText(noteFields);

    if (noteText.trim().length < 30) {
      console.warn('[SemanticDrift] Note too short to embed:', caseId);
      return;
    }

    // Run gold standard + student embedding in parallel
    var [goldStd, studentEmbedding, encounterNum] = await Promise.all([
      ensureGoldStandard(caseId, caseData),
      getEmbedding(noteText),
      getEncounterNumber(studentName, caseId)
    ]);

    // Compute similarity to gold standard (cosine sim via dot product of unit vectors)
    var goldSimilarity = null;
    if (goldStd && goldStd.embedding && studentEmbedding) {
      goldSimilarity = cosineSimilarity(studentEmbedding, goldStd.embedding);
    }

    var bScore = bordageScore(noteText);

    var row = {
      student_name:        studentName,
      training_year:       (window.state && window.state.trainingYear) || null,
      case_id:             caseId,
      diagnosis:           diagnosis,
      specialty:           specialty,
      note_text:           noteText.slice(0, 2000),
      embedding:           studentEmbedding,
      bordage_score:       bScore,
      gold_similarity:     goldSimilarity !== null ? Math.round(goldSimilarity * 10000) / 10000 : null,
      encounter_number:    encounterNum,
      is_gold_standard:    false
    };

    var result = await sbPost('/rest/v1/note_embeddings', row);
    if (result.ok) {
      rdxLog('[SemanticDrift] Note captured for', studentName, caseId,
        '| Bordage=' + bScore +
        ' | GoldSim=' + (goldSimilarity !== null ? goldSimilarity.toFixed(3) : 'n/a') +
        ' | Encounter #' + encounterNum);
    } else {
      console.warn('[SemanticDrift] Store failed:', result.status);
    }

    return {
      bordageScore:    bScore,
      goldSimilarity:  goldSimilarity,
      encounterNumber: encounterNum
    };
  }

  // ─── Cosine similarity ────────────────────────────────────────────────────
  // Dot product of two unit vectors (Voyage embeddings are already normalized).

  function cosineSimilarity(a, b) {
    if (!a || !b || a.length !== b.length) return null;
    var dot = 0;
    var magA = 0;
    var magB = 0;
    for (var i = 0; i < a.length; i++) {
      dot  += a[i] * b[i];
      magA += a[i] * a[i];
      magB += b[i] * b[i];
    }
    var denom = Math.sqrt(magA) * Math.sqrt(magB);
    return denom === 0 ? 0 : dot / denom;
  }

  // ─── getTrajectory() ─────────────────────────────────────────────────────
  // Retrieves semantic drift trajectory for a student × diagnosis.

  async function getTrajectory(studentName, diagnosis) {
    var slug = diagnosis.toLowerCase().split(' ')[0];
    var data = await sbGet(
      '/rest/v1/note_embeddings' +
      '?student_name=eq.' + encodeURIComponent(studentName) +
      '&diagnosis=ilike.*' + encodeURIComponent(slug) + '*' +
      '&is_gold_standard=eq.false' +
      '&select=encounter_number,case_id,bordage_score,gold_similarity,' +
               'drift_trajectory,centroid_distance,created_at' +
      '&order=encounter_number.asc'
    );
    if (!data || !data.length) return { encounters: 0, trajectory: [] };

    var withSim = data.filter(function(d) { return d.gold_similarity !== null; });
    var avgSim  = withSim.length
      ? withSim.reduce(function(a,d){return a+d.gold_similarity;},0) / withSim.length
      : null;

    // Is the student converging toward the gold standard?
    var isImproving = null;
    if (withSim.length >= 3) {
      var mid  = Math.floor(withSim.length / 2);
      var early = withSim.slice(0, mid).reduce(function(a,d){return a+d.gold_similarity;},0) / mid;
      var late  = withSim.slice(mid).reduce(function(a,d){return a+d.gold_similarity;},0) / (withSim.length - mid);
      isImproving = late > early + 0.03;
    }

    return {
      diagnosis:    diagnosis,
      studentName:  studentName,
      encounters:   data.length,
      trajectory:   data,
      avgGoldSim:   avgSim !== null ? Math.round(avgSim * 1000) / 1000 : null,
      isConverging: isImproving,
      latestBordage: data[data.length - 1] && data[data.length - 1].bordage_score
    };
  }

  // ─── Export ───────────────────────────────────────────────────────────────
  window.SemanticDrift = {
    captureNote:        captureNote,
    ensureGoldStandard: ensureGoldStandard,
    getTrajectory:      getTrajectory,
    bordageScore:       bordageScore,
    buildGoldStandardText: buildGoldStandardText
  };

})(window);
