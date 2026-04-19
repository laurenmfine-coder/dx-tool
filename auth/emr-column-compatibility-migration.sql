-- ============================================================
-- ReasonDx EMR — Column Compatibility Migration
-- Run in Supabase SQL Editor → New Query
--
-- Problem: emr-supabase.js uses student_id throughout, but
-- the original schema used student_email / user_email.
-- This migration adds student_id as a real column to each
-- table so both column names work.
--
-- Also adds missing columns used by emr-supabase.js:
--   emr_feedback: graded_at, student_id
--   emr_annotations: student_id, selected_text, color,
--                    section_id, grader
--   emr_submissions: student_id, text, patient
-- ============================================================

-- ── emr_submissions ──────────────────────────────────────────
-- Add student_id (mirrors user_email)
ALTER TABLE emr_submissions
  ADD COLUMN IF NOT EXISTS student_id TEXT DEFAULT '';

-- Add text column (assembled note text)
ALTER TABLE emr_submissions
  ADD COLUMN IF NOT EXISTS text TEXT DEFAULT '';

-- Add patient column (patient name/info)
ALTER TABLE emr_submissions
  ADD COLUMN IF NOT EXISTS patient TEXT DEFAULT '';

-- Back-fill student_id from user_email for any existing rows
UPDATE emr_submissions
  SET student_id = user_email
  WHERE student_id = '' AND user_email IS NOT NULL;

-- Index for student_id lookups
CREATE INDEX IF NOT EXISTS idx_emr_submissions_student_id
  ON emr_submissions(student_id);

-- ── emr_feedback ─────────────────────────────────────────────
-- Add student_id (mirrors student_email)
ALTER TABLE emr_feedback
  ADD COLUMN IF NOT EXISTS student_id TEXT DEFAULT '';

-- Add graded_at (timestamp when faculty graded)
ALTER TABLE emr_feedback
  ADD COLUMN IF NOT EXISTS graded_at TIMESTAMPTZ DEFAULT now();

-- Back-fill student_id from student_email for any existing rows
UPDATE emr_feedback
  SET student_id = student_email
  WHERE student_id = '' AND student_email IS NOT NULL;

-- Index
CREATE INDEX IF NOT EXISTS idx_emr_feedback_student_id
  ON emr_feedback(student_id);

-- ── emr_annotations ──────────────────────────────────────────
-- The original schema stores all annotations as a JSONB array
-- in one row per (student, week, case). The JS code in
-- emr-supabase.js instead writes one row PER annotation with
-- individual columns. We add those columns here.

ALTER TABLE emr_annotations
  ADD COLUMN IF NOT EXISTS student_id TEXT DEFAULT '';

ALTER TABLE emr_annotations
  ADD COLUMN IF NOT EXISTS selected_text TEXT DEFAULT '';

ALTER TABLE emr_annotations
  ADD COLUMN IF NOT EXISTS color TEXT DEFAULT '';

ALTER TABLE emr_annotations
  ADD COLUMN IF NOT EXISTS section_id TEXT DEFAULT '';

ALTER TABLE emr_annotations
  ADD COLUMN IF NOT EXISTS grader TEXT DEFAULT '';

ALTER TABLE emr_annotations
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT now();

-- Back-fill student_id from student_email for existing rows
UPDATE emr_annotations
  SET student_id = student_email
  WHERE student_id = '' AND student_email IS NOT NULL;

-- Index
CREATE INDEX IF NOT EXISTS idx_emr_annotations_student_id
  ON emr_annotations(student_id);

-- ── Drop unique constraint that conflicts with new row-per-annotation model
-- (The original UNIQUE(student_email, week, case_id) prevents multiple
-- annotation rows per student+week. Drop it so individual annotations work.)
ALTER TABLE emr_annotations
  DROP CONSTRAINT IF EXISTS emr_annotations_student_email_week_case_id_key;

-- ── Anon policies for new columns (inherit from existing table policies) ──
-- No new policies needed — existing anon ALL policies cover the new columns.

-- ============================================================
-- VERIFICATION — Run after migration to confirm
-- ============================================================
-- SELECT column_name, data_type
--   FROM information_schema.columns
--   WHERE table_name IN ('emr_submissions','emr_feedback','emr_annotations')
--   ORDER BY table_name, ordinal_position;
