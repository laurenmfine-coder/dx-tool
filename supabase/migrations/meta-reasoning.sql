-- ============================================================
-- ReasonDx: Meta-Reasoning Agent — Supabase migration
-- Run in Supabase SQL Editor
-- ============================================================
-- Adds meta_reasoning_record JSONB column to rad_study_sessions.
-- Stores the meta-reasoning agent's theory history for the session:
--   dominantErrorMode, score, confidence, urgency per synthesize() call,
--   theory history (last 10), and dominant mode across session.
--
-- This column is the primary research artifact for Study 8 (cognitive
-- load topography) and Study 10 (affect-reasoning coupling) cross-analysis:
-- the meta-reasoning record shows whether the supervisory agent correctly
-- identified the student's error mode and what interventions were triggered.
-- ============================================================

ALTER TABLE rad_study_sessions
  ADD COLUMN IF NOT EXISTS meta_reasoning_record JSONB DEFAULT NULL;

COMMENT ON COLUMN rad_study_sessions.meta_reasoning_record IS
  'Meta-Reasoning Agent session record — dominant error mode theory history, confidence, urgency, case selection rationale. Written by rdx-meta-reasoning.js.';

-- Index for querying by dominant error mode across cohort
-- Usage: SELECT student_name, meta_reasoning_record->>'dominantMode'
--        FROM rad_study_sessions WHERE meta_reasoning_record IS NOT NULL
CREATE INDEX IF NOT EXISTS idx_sessions_meta_reasoning
  ON rad_study_sessions USING GIN (meta_reasoning_record);
