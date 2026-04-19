-- ============================================================
-- ReasonDx EMR — Column Compatibility Migration (v2)
-- Run in Supabase SQL Editor → New Query
--
-- Safe to run multiple times (all IF NOT EXISTS).
--
-- Background: emr-supabase.js uses student_id as the primary
-- identifier in all three tables. The live emr_submissions table
-- already has student_id (correct). The emr_feedback and
-- emr_annotations tables were created with student_email and
-- need student_id + additional columns added.
-- ============================================================

-- ── emr_submissions ──────────────────────────────────────────
-- Already has student_id from emr-submissions-migration.sql.
-- Just add the extra columns that emr-supabase.js sends.

ALTER TABLE emr_submissions
  ADD COLUMN IF NOT EXISTS week TEXT DEFAULT '';

ALTER TABLE emr_submissions
  ADD COLUMN IF NOT EXISTS fields JSONB DEFAULT '{}';

ALTER TABLE emr_submissions
  ADD COLUMN IF NOT EXISTS text TEXT DEFAULT '';

ALTER TABLE emr_submissions
  ADD COLUMN IF NOT EXISTS patient TEXT DEFAULT '';

-- ── emr_feedback ─────────────────────────────────────────────
-- Live table was created with student_email. Add student_id alias.

ALTER TABLE emr_feedback
  ADD COLUMN IF NOT EXISTS student_id TEXT DEFAULT '';

ALTER TABLE emr_feedback
  ADD COLUMN IF NOT EXISTS graded_at TIMESTAMPTZ DEFAULT now();

-- Back-fill student_id from student_email for any existing rows
UPDATE emr_feedback
  SET student_id = student_email
  WHERE (student_id IS NULL OR student_id = '')
    AND student_email IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_emr_feedback_student_id
  ON emr_feedback(student_id);

-- ── emr_annotations ──────────────────────────────────────────
-- Live table was created with student_email. Add student_id
-- plus individual-annotation columns (emr-supabase.js writes
-- one row per annotation, not a JSONB array).

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

-- Back-fill student_id from student_email for any existing rows
UPDATE emr_annotations
  SET student_id = student_email
  WHERE (student_id IS NULL OR student_id = '')
    AND student_email IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_emr_annotations_student_id
  ON emr_annotations(student_id);

-- Drop the unique constraint that prevents multiple annotation
-- rows per student+week (new model = one row per annotation)
ALTER TABLE emr_annotations
  DROP CONSTRAINT IF EXISTS emr_annotations_student_email_week_case_id_key;

-- ============================================================
-- VERIFICATION — uncomment and run to confirm columns
-- ============================================================
-- SELECT table_name, column_name, data_type
--   FROM information_schema.columns
--   WHERE table_name IN ('emr_submissions','emr_feedback','emr_annotations')
--   ORDER BY table_name, ordinal_position;
