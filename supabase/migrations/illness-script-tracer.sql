-- ============================================================
-- ReasonDx: Illness Script Evolution Tracer — Agent 1
-- Run in Supabase SQL Editor
-- ============================================================
-- Creates the illness_script_sessions table that stores per-encounter
-- semantic embeddings of a student's justification text for each
-- diagnosis they name, enabling longitudinal tracking of illness
-- script encapsulation across repeated encounters with the same
-- diagnosis family.
--
-- Research question (Study 4): Do students' illness script embeddings
-- for a given diagnosis converge (increasing cosine similarity across
-- sessions) as predicted by Schmidt & Rikers' (2007) encapsulation
-- theory? Does convergence predict diagnostic accuracy?
--
-- Theoretical grounding:
--   Schmidt, H. G., & Rikers, R. M. J. P. (2007). How expertise
--     develops in medicine: knowledge encapsulation and illness script
--     formation. Med Educ, 41(12), 1133-1139.
--   Custers, E. J. F. M. (2015). Thirty years of illness scripts.
--     Adv Health Sci Educ, 20(1), 301-312.
--   Van Merriënboer, J. & Sweller, J. (2010). Cognitive load theory
--     and complex learning. Educ Psychol Rev.
--
-- Embedding: 512-dim Voyage voyage-3-lite via rdx-embed worker.
-- ============================================================

CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS illness_script_sessions (
  id                  BIGSERIAL PRIMARY KEY,

  -- Session identity
  session_id          TEXT NOT NULL,              -- FK to rad_study_sessions.session_id
  student_name        TEXT NOT NULL,
  training_year       TEXT,
  case_id             TEXT NOT NULL,
  target_diagnosis    TEXT,                       -- the case's correct diagnosis
  specialty           TEXT,                       -- case category/specialty

  -- Illness script snapshot phase
  -- 'initial'  = Phase 2 (Justification): student reasons before seeing patient
  -- 'revised'  = Phase 4 (Revised Differential): student reasons after history
  -- 'final'    = Phase 6/7: student reasons after labs/imaging
  snapshot_phase      TEXT NOT NULL CHECK (snapshot_phase IN ('initial','revised','final')),
  encounter_number    INT  NOT NULL DEFAULT 1,    -- nth encounter with this diagnosis family

  -- The justification text that was embedded
  justification_text  TEXT,                       -- raw student reasoning text (first 2000 chars)

  -- 512-dim Voyage embedding of justification_text
  embedding           VECTOR(512),

  -- Accuracy at this snapshot
  target_in_snapshot  BOOLEAN DEFAULT FALSE,      -- did student include target dx at this phase?
  dx_count            INT DEFAULT 0,              -- breadth at this phase

  -- Encapsulation metrics (computed nightly)
  -- similarity_to_prior: cosine similarity to previous encounter's embedding
  -- null for first encounter, 0-1 for subsequent encounters
  -- Increasing values = encapsulation (more stable, expert-like script)
  similarity_to_prior FLOAT,

  -- Centroid distance: distance from the mean of all this student's embeddings
  -- for this diagnosis. Decreasing = convergence toward stable representation.
  centroid_distance   FLOAT,

  -- Quality signal: Bordage (1994) elaboration score on the justification text
  -- 0=reduced/dispersed, 1=compiled, 2=elaborated, 3=elaborated+contrastive
  bordage_score       INT,

  created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS iss_student_idx    ON illness_script_sessions (student_name);
CREATE INDEX IF NOT EXISTS iss_diagnosis_idx  ON illness_script_sessions (target_diagnosis);
CREATE INDEX IF NOT EXISTS iss_specialty_idx  ON illness_script_sessions (specialty);
CREATE INDEX IF NOT EXISTS iss_session_idx    ON illness_script_sessions (session_id);
CREATE INDEX IF NOT EXISTS iss_phase_idx      ON illness_script_sessions (snapshot_phase);
CREATE INDEX IF NOT EXISTS iss_encounter_idx  ON illness_script_sessions (student_name, target_diagnosis, encounter_number);

-- Vector similarity index (IVFFlat — requires at least 1000 rows to be efficient)
-- CREATE INDEX IF NOT EXISTS iss_embed_idx ON illness_script_sessions
--   USING ivfflat (embedding vector_cosine_ops) WITH (lists = 50);
-- Uncomment after 1000+ rows are inserted.

-- ── RPC: match_illness_scripts() ─────────────────────────────────────────
-- Find sessions with semantically similar illness scripts for a given diagnosis.
-- Used to identify students with similar reasoning schemas (CRDA layer 1).
CREATE OR REPLACE FUNCTION match_illness_scripts(
  query_embedding     VECTOR(512),
  p_target_diagnosis  TEXT         DEFAULT NULL,
  p_snapshot_phase    TEXT         DEFAULT 'revised',
  match_count         INT          DEFAULT 10,
  min_similarity      FLOAT        DEFAULT 0.5
)
RETURNS TABLE (
  session_id         TEXT,
  student_name       TEXT,
  case_id            TEXT,
  target_diagnosis   TEXT,
  snapshot_phase     TEXT,
  encounter_number   INT,
  target_in_snapshot BOOLEAN,
  bordage_score      INT,
  similarity         FLOAT
)
LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT
    iss.session_id,
    iss.student_name,
    iss.case_id,
    iss.target_diagnosis,
    iss.snapshot_phase,
    iss.encounter_number,
    iss.target_in_snapshot,
    iss.bordage_score,
    1 - (iss.embedding <=> query_embedding) AS similarity
  FROM illness_script_sessions iss
  WHERE
    (p_target_diagnosis IS NULL OR iss.target_diagnosis ILIKE '%' || p_target_diagnosis || '%')
    AND (p_snapshot_phase IS NULL OR iss.snapshot_phase = p_snapshot_phase)
    AND iss.embedding IS NOT NULL
    AND 1 - (iss.embedding <=> query_embedding) >= min_similarity
  ORDER BY iss.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- ── RPC: compute_encapsulation_metrics() ────────────────────────────────
-- For a given student × diagnosis, compute:
--   1. similarity_to_prior: cosine sim between session N and session N-1
--   2. centroid_distance: distance from centroid of all sessions
-- Called nightly by pg_cron.
CREATE OR REPLACE FUNCTION compute_encapsulation_metrics(
  p_student_name     TEXT,
  p_target_diagnosis TEXT,
  p_snapshot_phase   TEXT DEFAULT 'revised'
)
RETURNS VOID
LANGUAGE plpgsql AS $$
DECLARE
  v_sessions RECORD;
  v_prev_embedding VECTOR(512);
  v_centroid VECTOR(512);
  v_n INT := 0;
BEGIN
  -- Compute centroid across all sessions for this student × diagnosis × phase
  SELECT AVG(embedding) INTO v_centroid
  FROM illness_script_sessions
  WHERE student_name = p_student_name
    AND target_diagnosis ILIKE '%' || p_target_diagnosis || '%'
    AND snapshot_phase = p_snapshot_phase
    AND embedding IS NOT NULL;

  IF v_centroid IS NULL THEN RETURN; END IF;

  -- Update each session with similarity_to_prior and centroid_distance
  v_prev_embedding := NULL;
  FOR v_sessions IN
    SELECT id, embedding, encounter_number
    FROM illness_script_sessions
    WHERE student_name = p_student_name
      AND target_diagnosis ILIKE '%' || p_target_diagnosis || '%'
      AND snapshot_phase = p_snapshot_phase
      AND embedding IS NOT NULL
    ORDER BY encounter_number ASC, created_at ASC
  LOOP
    UPDATE illness_script_sessions SET
      similarity_to_prior = CASE
        WHEN v_prev_embedding IS NOT NULL
        THEN 1 - (v_sessions.embedding <=> v_prev_embedding)
        ELSE NULL
      END,
      centroid_distance = (v_sessions.embedding <=> v_centroid)
    WHERE id = v_sessions.id;

    v_prev_embedding := v_sessions.embedding;
    v_n := v_n + 1;
  END LOOP;
END;
$$;

-- ── Nightly job: run encapsulation metrics for all student×diagnosis pairs ──
CREATE OR REPLACE FUNCTION nightly_compute_all_encapsulation()
RETURNS VOID
LANGUAGE plpgsql AS $$
DECLARE v_row RECORD;
BEGIN
  FOR v_row IN
    SELECT DISTINCT student_name, target_diagnosis
    FROM illness_script_sessions
    WHERE embedding IS NOT NULL
  LOOP
    PERFORM compute_encapsulation_metrics(v_row.student_name, v_row.target_diagnosis, 'revised');
    PERFORM compute_encapsulation_metrics(v_row.student_name, v_row.target_diagnosis, 'initial');
  END LOOP;
END;
$$;

-- Schedule nightly at 3am UTC (after profile aggregation at 2am)
SELECT cron.schedule(
  'rdx-nightly-encapsulation',
  '0 3 * * *',
  $$ SELECT nightly_compute_all_encapsulation(); $$
);

-- ── Study 4 analysis view ─────────────────────────────────────────────────
-- Shows encapsulation trajectories per student × diagnosis
CREATE OR REPLACE VIEW illness_script_encapsulation AS
SELECT
  student_name,
  training_year,
  target_diagnosis,
  specialty,
  snapshot_phase,
  COUNT(*) AS encounter_count,
  AVG(similarity_to_prior) AS avg_similarity_to_prior,
  MIN(similarity_to_prior) AS min_similarity,
  MAX(similarity_to_prior) AS max_similarity,
  AVG(centroid_distance) AS avg_centroid_distance,
  -- Encapsulation signal: is sim increasing across encounters?
  -- Compare first-half avg to second-half avg similarity
  AVG(bordage_score) AS avg_bordage_score,
  AVG(CASE WHEN target_in_snapshot THEN 1.0 ELSE 0.0 END) AS accuracy_rate
FROM illness_script_sessions
WHERE embedding IS NOT NULL
  AND encounter_number > 1  -- need at least 2 encounters for similarity
GROUP BY student_name, training_year, target_diagnosis, specialty, snapshot_phase
HAVING COUNT(*) >= 2
ORDER BY avg_similarity_to_prior DESC NULLS LAST;

COMMENT ON VIEW illness_script_encapsulation IS
  'Study 4: Illness script encapsulation trajectories. avg_similarity_to_prior
   approaching 1.0 = encapsulation (stable expert schema). Compare accuracy_rate
   between high-similarity vs low-similarity groups to test Schmidt & Rikers (2007).';
