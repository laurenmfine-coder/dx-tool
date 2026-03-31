-- ============================================================
-- ReasonDx: emr_submissions table
-- Run in Supabase Dashboard → SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS emr_submissions (
  id                bigserial PRIMARY KEY,
  submission_id     text UNIQUE,          -- studentId_caseId_timestamp
  student_id        text NOT NULL,
  case_id           text,
  category          text,
  diagnosis         text,
  acuity            integer,
  submitted_at      timestamptz DEFAULT now(),
  note_text         text,
  note_fields       jsonb,
  caseframe_score   jsonb,
  order_validation  jsonb,
  readability_score jsonb,
  created_at        timestamptz DEFAULT now()
);

-- Indexes for dashboard queries
CREATE INDEX IF NOT EXISTS idx_emr_submissions_student   ON emr_submissions(student_id);
CREATE INDEX IF NOT EXISTS idx_emr_submissions_case      ON emr_submissions(case_id);
CREATE INDEX IF NOT EXISTS idx_emr_submissions_submitted ON emr_submissions(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_emr_submissions_category  ON emr_submissions(category);

-- Enable Row Level Security (anon key can insert + select)
ALTER TABLE emr_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_emr_submissions" ON emr_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anon_select_emr_submissions" ON emr_submissions
  FOR SELECT TO anon USING (true);
