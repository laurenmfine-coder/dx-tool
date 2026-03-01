-- ============================================================
-- ReasonDx Virtual EMR — Supabase Migration
-- ============================================================
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- This creates tables for cross-device EMR data persistence.
-- ============================================================

-- 1. EMR Users Registry
-- Tracks everyone who has opened the Virtual EMR
CREATE TABLE IF NOT EXISTS emr_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL DEFAULT '',
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'faculty', 'admin')),
  tier TEXT NOT NULL DEFAULT 'free',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Faculty → Student Assignments
CREATE TABLE IF NOT EXISTS emr_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  faculty_email TEXT NOT NULL,
  student_email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(faculty_email, student_email)
);

-- 3. Student Submissions
-- One row per student per case per week
CREATE TABLE IF NOT EXISTS emr_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  case_id TEXT DEFAULT '',
  week TEXT NOT NULL,
  fields JSONB NOT NULL DEFAULT '{}',
  note_text TEXT DEFAULT '',
  patient_name TEXT DEFAULT '',
  clinical_actions JSONB,
  chart_review_data JSONB,
  order_validation_data JSONB,
  crda_vector JSONB,
  case_frame_result JSONB,
  case_frame_vector JSONB,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_email, case_id, week)
);

-- 4. Faculty Feedback / Grades
CREATE TABLE IF NOT EXISTS emr_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_email TEXT NOT NULL,
  week TEXT NOT NULL,
  case_id TEXT DEFAULT '',
  scores JSONB NOT NULL DEFAULT '{}',
  comments JSONB NOT NULL DEFAULT '{}',
  overall_comment TEXT DEFAULT '',
  grader TEXT NOT NULL DEFAULT '',
  total_score INTEGER DEFAULT 0,
  max_score INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(student_email, week, case_id)
);

-- 5. Annotations on Student Work
CREATE TABLE IF NOT EXISTS emr_annotations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_email TEXT NOT NULL,
  week TEXT NOT NULL,
  case_id TEXT DEFAULT '',
  annotations JSONB NOT NULL DEFAULT '[]',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(student_email, week, case_id)
);

-- 6. General Session Data (drafts, orders, student clinical mods)
-- Flexible key-value store for work-in-progress data
CREATE TABLE IF NOT EXISTS emr_session_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  data_key TEXT NOT NULL,
  case_id TEXT DEFAULT '',
  data JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_email, data_key, case_id)
);

-- ============================================================
-- INDEXES for common query patterns
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_emr_submissions_user ON emr_submissions(user_email);
CREATE INDEX IF NOT EXISTS idx_emr_submissions_case ON emr_submissions(case_id);
CREATE INDEX IF NOT EXISTS idx_emr_feedback_student ON emr_feedback(student_email);
CREATE INDEX IF NOT EXISTS idx_emr_annotations_student ON emr_annotations(student_email);
CREATE INDEX IF NOT EXISTS idx_emr_session_user ON emr_session_data(user_email);
CREATE INDEX IF NOT EXISTS idx_emr_assignments_faculty ON emr_assignments(faculty_email);
CREATE INDEX IF NOT EXISTS idx_emr_assignments_student ON emr_assignments(student_email);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
-- Enable RLS on all tables
ALTER TABLE emr_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE emr_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE emr_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE emr_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE emr_annotations ENABLE ROW LEVEL SECURITY;
ALTER TABLE emr_session_data ENABLE ROW LEVEL SECURITY;

-- Helper: get current user's email from JWT
CREATE OR REPLACE FUNCTION auth.email()
RETURNS TEXT AS $$
  SELECT coalesce(
    current_setting('request.jwt.claims', true)::json->>'email',
    (current_setting('request.jwt.claims', true)::json->'user_metadata'->>'email')
  );
$$ LANGUAGE sql STABLE;

-- Helper: check if current user is faculty or admin in EMR
CREATE OR REPLACE FUNCTION public.is_emr_privileged()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM emr_users
    WHERE email = auth.email()
    AND role IN ('faculty', 'admin')
  );
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- ── emr_users ──
-- Anyone authenticated can read all users (needed for admin panel, assignment dropdowns)
CREATE POLICY "Authenticated users can read emr_users"
  ON emr_users FOR SELECT
  TO authenticated
  USING (true);

-- Users can insert/update their own row
CREATE POLICY "Users can upsert own emr_user"
  ON emr_users FOR INSERT
  TO authenticated
  WITH CHECK (email = auth.email());

CREATE POLICY "Users can update own emr_user"
  ON emr_users FOR UPDATE
  TO authenticated
  USING (email = auth.email())
  WITH CHECK (email = auth.email());

-- Faculty/admin can update any user's role
CREATE POLICY "Privileged users can update roles"
  ON emr_users FOR UPDATE
  TO authenticated
  USING (public.is_emr_privileged());

-- ── emr_assignments ──
-- Authenticated users can read all assignments
CREATE POLICY "Authenticated can read assignments"
  ON emr_assignments FOR SELECT
  TO authenticated
  USING (true);

-- Faculty/admin can manage assignments
CREATE POLICY "Privileged can insert assignments"
  ON emr_assignments FOR INSERT
  TO authenticated
  WITH CHECK (public.is_emr_privileged());

CREATE POLICY "Privileged can delete assignments"
  ON emr_assignments FOR DELETE
  TO authenticated
  USING (public.is_emr_privileged());

-- ── emr_submissions ──
-- Students can manage their own submissions
CREATE POLICY "Students can insert own submissions"
  ON emr_submissions FOR INSERT
  TO authenticated
  WITH CHECK (user_email = auth.email());

CREATE POLICY "Students can read own submissions"
  ON emr_submissions FOR SELECT
  TO authenticated
  USING (
    user_email = auth.email()
    OR public.is_emr_privileged()
  );

CREATE POLICY "Students can update own submissions"
  ON emr_submissions FOR UPDATE
  TO authenticated
  USING (user_email = auth.email())
  WITH CHECK (user_email = auth.email());

-- ── emr_feedback ──
-- Faculty/admin can write feedback; students can read their own
CREATE POLICY "Privileged can insert feedback"
  ON emr_feedback FOR INSERT
  TO authenticated
  WITH CHECK (public.is_emr_privileged());

CREATE POLICY "Privileged can update feedback"
  ON emr_feedback FOR UPDATE
  TO authenticated
  USING (public.is_emr_privileged());

CREATE POLICY "Students can read own feedback"
  ON emr_feedback FOR SELECT
  TO authenticated
  USING (
    student_email = auth.email()
    OR public.is_emr_privileged()
  );

-- ── emr_annotations ──
CREATE POLICY "Privileged can manage annotations"
  ON emr_annotations FOR ALL
  TO authenticated
  USING (public.is_emr_privileged());

CREATE POLICY "Students can read own annotations"
  ON emr_annotations FOR SELECT
  TO authenticated
  USING (student_email = auth.email());

-- ── emr_session_data ──
-- Users can only access their own session data
CREATE POLICY "Users can manage own session data"
  ON emr_session_data FOR ALL
  TO authenticated
  USING (user_email = auth.email())
  WITH CHECK (user_email = auth.email());

-- Allow anon key for development/free-launch period
-- (Remove these when enforcing auth)
CREATE POLICY "Anon read emr_users" ON emr_users FOR SELECT TO anon USING (true);
CREATE POLICY "Anon write emr_users" ON emr_users FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon update emr_users" ON emr_users FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon read assignments" ON emr_assignments FOR SELECT TO anon USING (true);
CREATE POLICY "Anon write assignments" ON emr_assignments FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon delete assignments" ON emr_assignments FOR DELETE TO anon USING (true);
CREATE POLICY "Anon all submissions" ON emr_submissions FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Anon all feedback" ON emr_feedback FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Anon all annotations" ON emr_annotations FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Anon all session_data" ON emr_session_data FOR ALL TO anon USING (true) WITH CHECK (true);

-- ============================================================
-- DONE — Tables ready for Virtual EMR integration
-- ============================================================
