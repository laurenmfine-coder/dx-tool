-- ============================================================
-- ReasonDx: Student Model Bus — Supabase migration
-- Run in Supabase SQL Editor
-- ============================================================
-- Adds student_model_snapshot JSONB column to rad_study_sessions.
-- Stores the unified student model state at session end:
--   working memory, episodic summary, procedural pattern tags,
--   affective state (ERS), and cognitive load (CLT).
--
-- This column is the research artifact for the Student Model Bus
-- architecture (rdx-student-model-bus.js).
-- ============================================================

ALTER TABLE rad_study_sessions
  ADD COLUMN IF NOT EXISTS student_model_snapshot JSONB DEFAULT NULL;

COMMENT ON COLUMN rad_study_sessions.student_model_snapshot IS
  'Unified student model at session end — working memory, episodic, procedural, affective (ERS), load (CLT). Written by rdx-student-model-bus.js.';

CREATE INDEX IF NOT EXISTS idx_sessions_sms_ers_flag
  ON rad_study_sessions USING GIN (student_model_snapshot);
