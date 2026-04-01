-- ============================================================
-- ReasonDx: Reasoning Fingerprint System (Build 2)
-- Run in Supabase SQL Editor
-- ============================================================
-- Stores per-session reasoning traces as pgvector embeddings,
-- aggregates them into longitudinal student cognitive profiles,
-- and exposes similarity search for adaptive case serving.
-- ============================================================

-- ── Step 1: reasoning_fingerprints ──────────────────────────
-- One row per completed simulation session.
-- The embedding encodes the student's full reasoning pathway:
-- which diagnoses they considered, in what order, what evidence
-- they connected, and what they dropped.
CREATE TABLE IF NOT EXISTS reasoning_fingerprints (
  id                  bigserial PRIMARY KEY,
  session_id          text NOT NULL UNIQUE,       -- FK to rad_study_sessions.session_id
  student_name        text NOT NULL,
  training_year       text,
  case_id             text NOT NULL,
  target_diagnosis    text,
  specialty           text,

  -- Reasoning graph summary (structured)
  dx_initial          text[],                     -- phase 1 differential
  dx_revised          text[],                     -- phase 4+ differential
  dx_final            text[],                     -- last differential submitted
  target_in_initial   boolean DEFAULT false,      -- did they include target dx at phase 1?
  target_in_final     boolean DEFAULT false,      -- did they include target dx at end?
  dx_count_initial    int DEFAULT 0,
  dx_count_final      int DEFAULT 0,
  dx_narrowed         boolean DEFAULT false,      -- did differential narrow over time?

  -- Reasoning behavior flags
  anchoring_detected  boolean DEFAULT false,      -- stayed on first dx despite contradicting evidence
  premature_closure   boolean DEFAULT false,      -- stopped considering alternatives too early
  missed_pivot_history boolean DEFAULT false,     -- missed the key history element
  env_history_score   int DEFAULT 0,              -- 0=missed, 1=partial, 2=full
  history_turns       int DEFAULT 0,              -- turns spent in history phase
  total_turns         int DEFAULT 0,

  -- Evidence usage
  ordered_imaging     boolean DEFAULT false,
  ordered_labs        boolean DEFAULT false,
  integrated_evidence boolean DEFAULT false,      -- connected lab/imaging to dx change

  -- Confidence (from Likert)
  confidence_score    int,                        -- 1-5, null if not rated

  -- Embedding: 384-dim BGE-small encoding of the reasoning pathway text
  embedding           vector(384),

  -- Raw graph for visualization
  reasoning_graph     jsonb,                      -- { nodes, edges, stats } from ReasoningTrace

  created_at          timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS rf_student_idx   ON reasoning_fingerprints (student_name);
CREATE INDEX IF NOT EXISTS rf_case_idx      ON reasoning_fingerprints (case_id);
CREATE INDEX IF NOT EXISTS rf_specialty_idx ON reasoning_fingerprints (specialty);
CREATE INDEX IF NOT EXISTS rf_created_idx   ON reasoning_fingerprints (created_at DESC);
CREATE INDEX IF NOT EXISTS rf_embed_idx     ON reasoning_fingerprints
  USING ivfflat (embedding vector_cosine_ops) WITH (lists = 50);

-- ── Step 2: student_cognitive_profiles ──────────────────────
-- Aggregated view: one row per student, computed from their
-- fingerprints. Updated nightly by the aggregation function.
CREATE TABLE IF NOT EXISTS student_cognitive_profiles (
  id                  bigserial PRIMARY KEY,
  student_name        text NOT NULL UNIQUE,
  training_year       text,

  -- Volume
  total_sessions      int DEFAULT 0,
  specialties_covered text[],
  last_session_at     timestamptz,

  -- Accuracy patterns
  avg_target_in_final float,                      -- % sessions where target dx was in final diff
  avg_target_in_initial float,                    -- % sessions where target dx was in initial diff
  avg_dx_count_initial float,                     -- avg breadth of initial differential
  avg_confidence      float,                      -- avg Likert score

  -- Reasoning behavior patterns (% of sessions where flag was true)
  anchoring_rate      float DEFAULT 0,
  premature_closure_rate float DEFAULT 0,
  missed_pivot_rate   float DEFAULT 0,            -- % sessions where pivot history was missed
  avg_env_history_score float DEFAULT 0,

  -- Efficiency
  avg_total_turns     float DEFAULT 0,
  avg_history_turns   float DEFAULT 0,

  -- Evidence integration
  imaging_order_rate  float DEFAULT 0,
  lab_order_rate      float DEFAULT 0,
  evidence_integration_rate float DEFAULT 0,

  -- Cognitive pattern tags (computed by aggregation)
  -- e.g. ['anchoring_tendency', 'strong_opener', 'history_gap']
  pattern_tags        text[] DEFAULT '{}',

  -- Recommended case types to address gaps
  recommended_specialties text[] DEFAULT '{}',

  updated_at          timestamptz DEFAULT now()
);

-- ── Step 3: match_fingerprints() ────────────────────────────
-- Find sessions with similar reasoning pathways.
-- Used for: "show me cases where other students reasoned like this"
-- and for clustering cognitive archetypes.
CREATE OR REPLACE FUNCTION match_fingerprints(
  query_embedding   vector(384),
  match_count       int     DEFAULT 5,
  filter_student    text    DEFAULT NULL,
  filter_specialty  text    DEFAULT NULL,
  min_similarity    float   DEFAULT 0.5
)
RETURNS TABLE (
  session_id        text,
  student_name      text,
  case_id           text,
  target_diagnosis  text,
  specialty         text,
  target_in_final   boolean,
  anchoring_detected boolean,
  total_turns       int,
  similarity        float
)
LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT
    rf.session_id,
    rf.student_name,
    rf.case_id,
    rf.target_diagnosis,
    rf.specialty,
    rf.target_in_final,
    rf.anchoring_detected,
    rf.total_turns,
    1 - (rf.embedding <=> query_embedding) AS similarity
  FROM reasoning_fingerprints rf
  WHERE
    (filter_student  IS NULL OR rf.student_name = filter_student)
    AND (filter_specialty IS NULL OR rf.specialty   = filter_specialty)
    AND 1 - (rf.embedding <=> query_embedding) >= min_similarity
  ORDER BY rf.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- ── Step 4: aggregate_student_profile() ─────────────────────
-- Called nightly by pg_cron. Computes cognitive profile
-- for a given student from all their fingerprints.
CREATE OR REPLACE FUNCTION aggregate_student_profile(p_student_name text)
RETURNS void
LANGUAGE plpgsql AS $$
DECLARE
  v_total            int;
  v_tags             text[] := '{}';
  v_rec_specialties  text[] := '{}';
BEGIN
  SELECT COUNT(*) INTO v_total
  FROM reasoning_fingerprints
  WHERE student_name = p_student_name;

  IF v_total = 0 THEN RETURN; END IF;

  -- Compute pattern tags
  DECLARE
    v_anchoring_rate    float;
    v_closure_rate      float;
    v_missed_pivot_rate float;
    v_avg_initial_dx    float;
    v_avg_final_acc     float;
    v_avg_confidence    float;
  BEGIN
    SELECT
      AVG(CASE WHEN anchoring_detected   THEN 1.0 ELSE 0.0 END),
      AVG(CASE WHEN premature_closure    THEN 1.0 ELSE 0.0 END),
      AVG(CASE WHEN missed_pivot_history THEN 1.0 ELSE 0.0 END),
      AVG(dx_count_initial::float),
      AVG(CASE WHEN target_in_final      THEN 1.0 ELSE 0.0 END),
      AVG(confidence_score::float)
    INTO v_anchoring_rate, v_closure_rate, v_missed_pivot_rate,
         v_avg_initial_dx, v_avg_final_acc, v_avg_confidence
    FROM reasoning_fingerprints
    WHERE student_name = p_student_name;

    -- Tag: anchoring tendency (>40% of sessions)
    IF v_anchoring_rate > 0.4 THEN
      v_tags := array_append(v_tags, 'anchoring_tendency');
      v_rec_specialties := array_append(v_rec_specialties, 'infectious-disease');
    END IF;

    -- Tag: premature closure (>30% of sessions)
    IF v_closure_rate > 0.3 THEN
      v_tags := array_append(v_tags, 'premature_closure');
      v_rec_specialties := array_append(v_rec_specialties, 'emergency-medicine');
    END IF;

    -- Tag: history gap (>50% of sessions)
    IF v_missed_pivot_rate > 0.5 THEN
      v_tags := array_append(v_tags, 'history_gap');
      v_rec_specialties := array_append(v_rec_specialties, 'pulmonology');
    END IF;

    -- Tag: narrow opener (avg initial differential < 2 diagnoses)
    IF v_avg_initial_dx < 2.0 THEN
      v_tags := array_append(v_tags, 'narrow_opener');
    END IF;

    -- Tag: broad thinker (avg initial differential > 5 diagnoses)
    IF v_avg_initial_dx > 5.0 THEN
      v_tags := array_append(v_tags, 'broad_thinker');
    END IF;

    -- Tag: strong accuracy (>80% sessions got target in final dx)
    IF v_avg_final_acc > 0.8 THEN
      v_tags := array_append(v_tags, 'strong_accuracy');
    END IF;

    -- Tag: low confidence despite accuracy (underconfident)
    IF v_avg_confidence IS NOT NULL AND v_avg_confidence < 3.0 AND v_avg_final_acc > 0.7 THEN
      v_tags := array_append(v_tags, 'underconfident');
    END IF;
  END;

  -- Upsert the profile
  INSERT INTO student_cognitive_profiles (
    student_name,
    total_sessions,
    specialties_covered,
    last_session_at,
    avg_target_in_final,
    avg_target_in_initial,
    avg_dx_count_initial,
    avg_confidence,
    anchoring_rate,
    premature_closure_rate,
    missed_pivot_rate,
    avg_env_history_score,
    avg_total_turns,
    avg_history_turns,
    imaging_order_rate,
    lab_order_rate,
    evidence_integration_rate,
    pattern_tags,
    recommended_specialties,
    updated_at
  )
  SELECT
    p_student_name,
    COUNT(*),
    ARRAY_AGG(DISTINCT specialty) FILTER (WHERE specialty IS NOT NULL),
    MAX(created_at),
    AVG(CASE WHEN target_in_final      THEN 1.0 ELSE 0.0 END),
    AVG(CASE WHEN target_in_initial    THEN 1.0 ELSE 0.0 END),
    AVG(dx_count_initial::float),
    AVG(confidence_score::float),
    AVG(CASE WHEN anchoring_detected   THEN 1.0 ELSE 0.0 END),
    AVG(CASE WHEN premature_closure    THEN 1.0 ELSE 0.0 END),
    AVG(CASE WHEN missed_pivot_history THEN 1.0 ELSE 0.0 END),
    AVG(env_history_score::float),
    AVG(total_turns::float),
    AVG(history_turns::float),
    AVG(CASE WHEN ordered_imaging      THEN 1.0 ELSE 0.0 END),
    AVG(CASE WHEN ordered_labs         THEN 1.0 ELSE 0.0 END),
    AVG(CASE WHEN integrated_evidence  THEN 1.0 ELSE 0.0 END),
    v_tags,
    v_rec_specialties,
    now()
  FROM reasoning_fingerprints
  WHERE student_name = p_student_name
  ON CONFLICT (student_name) DO UPDATE SET
    total_sessions             = EXCLUDED.total_sessions,
    specialties_covered        = EXCLUDED.specialties_covered,
    last_session_at            = EXCLUDED.last_session_at,
    avg_target_in_final        = EXCLUDED.avg_target_in_final,
    avg_target_in_initial      = EXCLUDED.avg_target_in_initial,
    avg_dx_count_initial       = EXCLUDED.avg_dx_count_initial,
    avg_confidence             = EXCLUDED.avg_confidence,
    anchoring_rate             = EXCLUDED.anchoring_rate,
    premature_closure_rate     = EXCLUDED.premature_closure_rate,
    missed_pivot_rate          = EXCLUDED.missed_pivot_rate,
    avg_env_history_score      = EXCLUDED.avg_env_history_score,
    avg_total_turns            = EXCLUDED.avg_total_turns,
    avg_history_turns          = EXCLUDED.avg_history_turns,
    imaging_order_rate         = EXCLUDED.imaging_order_rate,
    lab_order_rate             = EXCLUDED.lab_order_rate,
    evidence_integration_rate  = EXCLUDED.evidence_integration_rate,
    pattern_tags               = EXCLUDED.pattern_tags,
    recommended_specialties    = EXCLUDED.recommended_specialties,
    updated_at                 = EXCLUDED.updated_at;
END;
$$;

-- ── Step 5: nightly_aggregate_all_profiles() ────────────────
-- Iterates all distinct students and runs aggregate_student_profile.
-- Scheduled via pg_cron (see Step 6).
CREATE OR REPLACE FUNCTION nightly_aggregate_all_profiles()
RETURNS void
LANGUAGE plpgsql AS $$
DECLARE
  v_student text;
BEGIN
  FOR v_student IN
    SELECT DISTINCT student_name FROM reasoning_fingerprints
  LOOP
    PERFORM aggregate_student_profile(v_student);
  END LOOP;
END;
$$;

-- ── Step 6: Schedule nightly profile aggregation ─────────────
-- Runs at 2am UTC every night (after reengagement job at midnight)
SELECT cron.schedule(
  'rdx-nightly-profile-aggregation',
  '0 2 * * *',
  $$ SELECT nightly_aggregate_all_profiles(); $$
);
