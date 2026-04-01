-- ============================================================
-- ReasonDx: Semantic Drift Monitor — Agent 4
-- Run in Supabase SQL Editor
-- ============================================================
-- Creates note_embeddings table for tracking how student clinical
-- note quality evolves across repeated encounters with the same
-- diagnosis — operationalizing Bordage (1994) elaborated knowledge
-- theory computationally from naturalistic written notes.
--
-- Gold standard embeddings (student_name='_gold_standard') are
-- generated from case teachingPoints.keyLearning content and serve
-- as the expert reference for semantic precision measurement.
--
-- Research question (Study 7): Do students' notes converge toward
-- the gold standard embedding (increasing cosine similarity) across
-- encounters? Does convergence predict OSCE communication scores?
--
-- Citations:
--   Bordage, G. (1994). Elaborated knowledge. Acad Med, 69(11), 883.
--   Bordage & Lemieux (1991). Semantic structures. Acad Med, 66(9S).
--   Rikers et al. (2002). Explanatory role of biomedical knowledge.
--     Acad Med, 77(9), 918–924.
-- ============================================================

CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS note_embeddings (
  id                BIGSERIAL PRIMARY KEY,

  -- Identity
  student_name      TEXT NOT NULL,          -- '_gold_standard' for reference embeddings
  training_year     TEXT,
  case_id           TEXT NOT NULL,
  diagnosis         TEXT,
  specialty         TEXT,

  -- Note content (assessment + plan sections)
  note_text         TEXT,                   -- first 2000 chars of reasoning text

  -- 512-dim Voyage embedding of note_text
  embedding         VECTOR(512),

  -- Quality metrics
  bordage_score     INT,                    -- 0–4: Bordage (1994) elaboration scale
  gold_similarity   FLOAT,                  -- cosine similarity to gold standard embedding
                                            -- null for gold standard rows themselves
  encounter_number  INT DEFAULT 1,          -- nth encounter with this diagnosis

  -- Flag
  is_gold_standard  BOOLEAN DEFAULT FALSE,

  -- Computed nightly by pg_cron
  drift_trajectory  TEXT,                   -- 'improving' | 'stable' | 'declining'
  centroid_distance FLOAT,                  -- distance from this student's own centroid

  created_at        TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS ne_student_idx    ON note_embeddings (student_name);
CREATE INDEX IF NOT EXISTS ne_case_idx       ON note_embeddings (case_id);
CREATE INDEX IF NOT EXISTS ne_diagnosis_idx  ON note_embeddings (diagnosis);
CREATE INDEX IF NOT EXISTS ne_gold_idx       ON note_embeddings (is_gold_standard);
CREATE INDEX IF NOT EXISTS ne_encounter_idx  ON note_embeddings (student_name, diagnosis, encounter_number);
CREATE INDEX IF NOT EXISTS ne_sim_idx        ON note_embeddings (gold_similarity DESC NULLS LAST);

-- Vector similarity index (uncomment after 1000+ rows)
-- CREATE INDEX IF NOT EXISTS ne_embed_idx ON note_embeddings
--   USING ivfflat (embedding vector_cosine_ops) WITH (lists = 50);

-- ── RPC: match_notes() ────────────────────────────────────────────────────
-- Find notes with semantically similar content to a query.
-- Used for CRDA cross-student comparison on written notes.
CREATE OR REPLACE FUNCTION match_notes(
  query_embedding   VECTOR(512),
  p_diagnosis       TEXT          DEFAULT NULL,
  match_count       INT           DEFAULT 10,
  min_similarity    FLOAT         DEFAULT 0.5,
  exclude_gold      BOOLEAN       DEFAULT TRUE
)
RETURNS TABLE (
  student_name     TEXT,
  case_id          TEXT,
  diagnosis        TEXT,
  encounter_number INT,
  bordage_score    INT,
  gold_similarity  FLOAT,
  similarity       FLOAT
)
LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT
    ne.student_name,
    ne.case_id,
    ne.diagnosis,
    ne.encounter_number,
    ne.bordage_score,
    ne.gold_similarity,
    1 - (ne.embedding <=> query_embedding) AS similarity
  FROM note_embeddings ne
  WHERE
    (p_diagnosis IS NULL OR ne.diagnosis ILIKE '%' || p_diagnosis || '%')
    AND (NOT exclude_gold OR ne.is_gold_standard = FALSE)
    AND ne.embedding IS NOT NULL
    AND 1 - (ne.embedding <=> query_embedding) >= min_similarity
  ORDER BY ne.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- ── Function: compute_drift_metrics() ─────────────────────────────────────
-- For a student × diagnosis, compute drift_trajectory and centroid_distance.
-- Called nightly by pg_cron at 3:30am UTC.
CREATE OR REPLACE FUNCTION compute_drift_metrics(
  p_student_name TEXT,
  p_diagnosis    TEXT
)
RETURNS VOID
LANGUAGE plpgsql AS $$
DECLARE
  v_centroid VECTOR(512);
  v_row      RECORD;
  v_prev_sim FLOAT;
  v_curr_sim FLOAT;
  v_traj     TEXT;
BEGIN
  -- Compute centroid across all student notes for this diagnosis
  SELECT AVG(embedding) INTO v_centroid
  FROM note_embeddings
  WHERE student_name = p_student_name
    AND diagnosis ILIKE '%' || p_diagnosis || '%'
    AND is_gold_standard = FALSE
    AND embedding IS NOT NULL;

  IF v_centroid IS NULL THEN RETURN; END IF;

  -- Update centroid_distance for each note
  FOR v_row IN
    SELECT id, gold_similarity, encounter_number
    FROM note_embeddings
    WHERE student_name = p_student_name
      AND diagnosis ILIKE '%' || p_diagnosis || '%'
      AND is_gold_standard = FALSE
      AND embedding IS NOT NULL
    ORDER BY encounter_number ASC
  LOOP
    -- Compute drift trajectory by comparing early vs recent gold_similarity
    SELECT
      AVG(gold_similarity) FILTER (WHERE encounter_number <= v_row.encounter_number / 2),
      AVG(gold_similarity) FILTER (WHERE encounter_number > v_row.encounter_number / 2)
    INTO v_prev_sim, v_curr_sim
    FROM note_embeddings
    WHERE student_name = p_student_name
      AND diagnosis ILIKE '%' || p_diagnosis || '%'
      AND is_gold_standard = FALSE
      AND gold_similarity IS NOT NULL;

    IF v_prev_sim IS NOT NULL AND v_curr_sim IS NOT NULL THEN
      v_traj := CASE
        WHEN v_curr_sim > v_prev_sim + 0.03 THEN 'improving'
        WHEN v_curr_sim < v_prev_sim - 0.03 THEN 'declining'
        ELSE 'stable'
      END;
    ELSE
      v_traj := 'stable';
    END IF;

    UPDATE note_embeddings SET
      centroid_distance = (embedding <=> v_centroid),
      drift_trajectory  = v_traj
    WHERE id = v_row.id;
  END LOOP;
END;
$$;

-- ── Nightly all-student computation ───────────────────────────────────────
CREATE OR REPLACE FUNCTION nightly_compute_all_drift()
RETURNS VOID
LANGUAGE plpgsql AS $$
DECLARE v_row RECORD;
BEGIN
  FOR v_row IN
    SELECT DISTINCT student_name, diagnosis
    FROM note_embeddings
    WHERE is_gold_standard = FALSE AND embedding IS NOT NULL
  LOOP
    PERFORM compute_drift_metrics(v_row.student_name, v_row.diagnosis);
  END LOOP;
END;
$$;

-- Schedule at 3:30am UTC (after encapsulation at 3am)
SELECT cron.schedule(
  'rdx-nightly-drift',
  '30 3 * * *',
  $$ SELECT nightly_compute_all_drift(); $$
);

-- ── Study 7 analysis view ─────────────────────────────────────────────────
CREATE OR REPLACE VIEW semantic_drift_analysis AS
SELECT
  ne.student_name,
  ne.training_year,
  ne.diagnosis,
  ne.specialty,
  COUNT(*) AS note_count,
  AVG(ne.bordage_score) AS avg_bordage,
  MAX(ne.bordage_score) AS max_bordage,
  AVG(ne.gold_similarity) AS avg_gold_similarity,
  MIN(ne.gold_similarity) AS first_gold_sim,
  MAX(ne.gold_similarity) AS best_gold_sim,
  -- Primary Study 7 metric: is the student converging toward expert quality?
  MAX(ne.drift_trajectory) AS trajectory,
  AVG(ne.centroid_distance) AS avg_centroid_distance
FROM note_embeddings ne
WHERE ne.is_gold_standard = FALSE
  AND ne.embedding IS NOT NULL
GROUP BY ne.student_name, ne.training_year, ne.diagnosis, ne.specialty
HAVING COUNT(*) >= 2
ORDER BY avg_gold_similarity DESC;

COMMENT ON VIEW semantic_drift_analysis IS
  'Study 7: Semantic drift as expertise development. avg_gold_similarity
   approaching 1.0 = student note semantics converging toward expert content.
   Compare avg_gold_similarity between early (encounter 1-2) vs late (3+)
   encounters to test Bordage (1994) elaborated knowledge hypothesis.
   Cross-validate with OSCE communication_score from osce_attempts.';
