-- ============================================================
-- ReasonDx: Productive Failure Detector — Agent 2
-- Run in Supabase SQL Editor
-- ============================================================
-- Implements Kapur's (2016) productive failure model in clinical
-- reasoning simulation data. A Productive Failure Event (PFE) is
-- defined as: student misses the target diagnosis (target_in_final
-- = false) BUT submits a rich differential (dx_count_final >= 3)
-- AND high articulation score (env_history_score >= 1).
--
-- The detector then checks cross-session: do students who experience
-- a PFE outperform students who were correct on first attempt,
-- on the NEXT case involving the same diagnosis family?
--
-- This is the first implementation of productive failure detection
-- in clinical reasoning simulation. Study 5 target.
--
-- Citations:
--   Kapur, M. (2016). Examining productive failure.
--     Educ Psychol, 51(2), 289–299.
--   Kapur, M. (2014). Productive failure in learning math.
--     Cogn Sci, 38(5), 1008–1022.
--   Loibl et al. (2017). Toward a theory of when problem solving
--     followed by instruction supports learning. Educ Psychol Rev.
-- ============================================================

-- Step 1: Add productive_failure_events column to student profiles
ALTER TABLE student_cognitive_profiles
  ADD COLUMN IF NOT EXISTS productive_failure_events JSONB DEFAULT '[]'::jsonb;

COMMENT ON COLUMN student_cognitive_profiles.productive_failure_events IS
  'Array of productive failure events per Kapur (2016): cases where student
   missed diagnosis but submitted rich differential + articulation.
   Schema: [{ case_id, category, session_date, dx_count_final, env_history_score,
              followed_by_case_id, followed_by_correct, follow_gap_sessions }]';

-- Step 2: Add productive_failure_flag to reasoning_fingerprints
ALTER TABLE reasoning_fingerprints
  ADD COLUMN IF NOT EXISTS productive_failure_flag boolean DEFAULT false;

COMMENT ON COLUMN reasoning_fingerprints.productive_failure_flag IS
  'True when: target_in_final=false AND dx_count_final>=3 AND env_history_score>=1.
   Marks sessions eligible for productive failure outcome tracking.';

-- Step 3: Function to detect PFEs for a given student
-- Called by the nightly pg_cron job (aggregate_student_profile already runs at 2am)
CREATE OR REPLACE FUNCTION detect_productive_failure_events(p_student_name text)
RETURNS void
LANGUAGE plpgsql AS $$
DECLARE
  v_events jsonb := '[]'::jsonb;
  v_session record;
  v_next_session record;
  v_category text;
BEGIN
  -- Find all sessions that qualify as Productive Failure Events
  FOR v_session IN
    SELECT
      rf.session_id,
      rf.case_id,
      rf.specialty,
      rf.dx_count_final,
      rf.env_history_score,
      rf.target_in_final,
      rf.created_at,
      s.category
    FROM reasoning_fingerprints rf
    LEFT JOIN rad_study_sessions s ON s.session_id = rf.session_id
    WHERE rf.student_name = p_student_name
      AND rf.target_in_final = false        -- missed the diagnosis
      AND rf.dx_count_final >= 3            -- rich differential (breadth signal)
      AND rf.env_history_score >= 1         -- engaged with history (articulation signal)
    ORDER BY rf.created_at ASC
  LOOP
    -- Update the productive_failure_flag on this fingerprint
    UPDATE reasoning_fingerprints
    SET productive_failure_flag = true
    WHERE session_id = v_session.session_id;

    -- Look for the next session in the same specialty/category
    SELECT
      rf2.session_id,
      rf2.case_id,
      rf2.target_in_final,
      rf2.created_at,
      ROW_NUMBER() OVER (ORDER BY rf2.created_at ASC) AS session_gap
    INTO v_next_session
    FROM reasoning_fingerprints rf2
    WHERE rf2.student_name = p_student_name
      AND rf2.specialty = v_session.specialty
      AND rf2.created_at > v_session.created_at
    ORDER BY rf2.created_at ASC
    LIMIT 1;

    -- Record the event with follow-up outcome if available
    v_events := v_events || jsonb_build_object(
      'case_id',              v_session.case_id,
      'category',             COALESCE(v_session.specialty, v_session.category, 'unknown'),
      'session_date',         v_session.created_at,
      'dx_count_final',       v_session.dx_count_final,
      'env_history_score',    v_session.env_history_score,
      'followed_by_case_id',  CASE WHEN v_next_session IS NOT NULL THEN v_next_session.case_id ELSE NULL END,
      'followed_by_correct',  CASE WHEN v_next_session IS NOT NULL THEN v_next_session.target_in_final ELSE NULL END
    );
  END LOOP;

  -- Update the student's cognitive profile with PFE array
  UPDATE student_cognitive_profiles
  SET productive_failure_events = v_events,
      updated_at = now()
  WHERE student_name = p_student_name;
END;
$$;

-- Step 4: Run for all students who have existing profiles
-- (safe to run repeatedly — idempotent)
DO $$
DECLARE v_student text;
BEGIN
  FOR v_student IN SELECT student_name FROM student_cognitive_profiles
  LOOP
    PERFORM detect_productive_failure_events(v_student);
  END LOOP;
END;
$$;

-- Step 5: Cohort-level productive failure analysis view
-- Answers: do PFE students outperform direct-success students on next same-specialty case?
CREATE OR REPLACE VIEW productive_failure_cohort_analysis AS
WITH pfe_outcomes AS (
  SELECT
    scp.student_name,
    scp.training_year,
    scp.total_sessions,
    scp.avg_target_in_final,
    jsonb_array_length(scp.productive_failure_events) AS pfe_count,
    -- Extract follow-up outcomes from PFE events
    (
      SELECT COUNT(*)
      FROM jsonb_array_elements(scp.productive_failure_events) e
      WHERE (e->>'followed_by_correct')::boolean = true
    ) AS pfe_followed_by_correct,
    (
      SELECT COUNT(*)
      FROM jsonb_array_elements(scp.productive_failure_events) e
      WHERE e->>'followed_by_correct' IS NOT NULL
    ) AS pfe_with_followup
  FROM student_cognitive_profiles scp
  WHERE scp.total_sessions >= 3
)
SELECT
  student_name,
  training_year,
  total_sessions,
  pfe_count,
  pfe_with_followup,
  pfe_followed_by_correct,
  CASE WHEN pfe_with_followup > 0
    THEN ROUND((pfe_followed_by_correct::numeric / pfe_with_followup) * 100, 1)
    ELSE NULL
  END AS pfe_followup_accuracy_pct,
  avg_target_in_final,
  -- Classification for Study 5 analysis
  CASE
    WHEN pfe_count >= 2 THEN 'high_pfe'
    WHEN pfe_count = 1  THEN 'low_pfe'
    ELSE 'no_pfe'
  END AS pfe_group
FROM pfe_outcomes
ORDER BY pfe_count DESC, pfe_followed_by_correct DESC;

COMMENT ON VIEW productive_failure_cohort_analysis IS
  'Study 5: Productive failure analysis. Compare pfe_followup_accuracy_pct
   between pfe_group=high_pfe vs no_pfe to test Kapur (2016) hypothesis.
   pfe_followup_accuracy_pct = % of post-PFE same-specialty cases where
   student correctly identified target diagnosis.';
