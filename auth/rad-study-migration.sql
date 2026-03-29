-- ============================================================
-- ReasonDx Radiology Study — Supabase Migration
-- ============================================================
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- Creates tables for the radiology report format study.
-- ============================================================

-- 1. Study Sessions (one row per student-case completion)
CREATE TABLE IF NOT EXISTS rad_study_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT UNIQUE NOT NULL,
  student_name TEXT NOT NULL DEFAULT '',
  student_email TEXT DEFAULT '',
  training_year TEXT NOT NULL DEFAULT '',
  rotations_completed TEXT DEFAULT '',
  has_pulm_course BOOLEAN DEFAULT false,
  case_id TEXT NOT NULL DEFAULT '',
  group_code TEXT NOT NULL CHECK (group_code IN ('A', 'B')),
  first_report_type TEXT NOT NULL CHECK (first_report_type IN ('standard', 'simplified')),
  second_report_type TEXT NOT NULL CHECK (second_report_type IN ('standard', 'simplified')),

  -- Scoring outcomes
  env_history_score INTEGER CHECK (env_history_score BETWEEN 0 AND 2),
  history_flags JSONB NOT NULL DEFAULT '{}',
  differentials JSONB NOT NULL DEFAULT '{}',
  diff_changes_report1 JSONB DEFAULT '[]',
  diff_changes_report2 JSONB DEFAULT '[]',
  report_comparison_response TEXT DEFAULT '',
  reflection_responses JSONB DEFAULT '{}',

  -- Timing
  phase_timing JSONB DEFAULT '{}',
  total_turns INTEGER DEFAULT 0,

  -- Quality control
  leak_detected BOOLEAN DEFAULT false,
  leak_details JSONB DEFAULT '[]',

  -- Full transcript (for qualitative analysis)
  transcript JSONB NOT NULL DEFAULT '[]',

  -- Metadata
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'complete' CHECK (status IN ('in_progress', 'complete', 'abandoned'))
);

-- 2. Study Turns (individual turns for granular analysis)
-- Optional: use this for per-turn queries without loading full transcripts
CREATE TABLE IF NOT EXISTS rad_study_turns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL REFERENCES rad_study_sessions(session_id) ON DELETE CASCADE,
  turn_number INTEGER NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('student', 'assistant')),
  phase INTEGER NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- Signals extracted by orchestrator (student turns only)
  signals JSONB DEFAULT NULL,

  UNIQUE(session_id, turn_number)
);

-- ============================================================
-- INDEXES
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_rad_sessions_case ON rad_study_sessions(case_id);
CREATE INDEX IF NOT EXISTS idx_rad_sessions_group ON rad_study_sessions(group_code);
CREATE INDEX IF NOT EXISTS idx_rad_sessions_year ON rad_study_sessions(training_year);
CREATE INDEX IF NOT EXISTS idx_rad_sessions_status ON rad_study_sessions(status);
CREATE INDEX IF NOT EXISTS idx_rad_turns_session ON rad_study_turns(session_id);
CREATE INDEX IF NOT EXISTS idx_rad_turns_phase ON rad_study_turns(phase);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE rad_study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE rad_study_turns ENABLE ROW LEVEL SECURITY;

-- During study period: allow anon inserts (students aren't authenticated)
-- Faculty/admin can read all via authenticated access
CREATE POLICY "Anon can insert study sessions"
  ON rad_study_sessions FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can insert study turns"
  ON rad_study_turns FOR INSERT TO anon WITH CHECK (true);

-- Authenticated (faculty/admin) can read everything
CREATE POLICY "Authenticated can read all study sessions"
  ON rad_study_sessions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can read all study turns"
  ON rad_study_turns FOR SELECT TO authenticated USING (true);

-- Anon can read their own session (by session_id match)
CREATE POLICY "Anon can read own session"
  ON rad_study_sessions FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can read own turns"
  ON rad_study_turns FOR SELECT TO anon USING (true);

-- ============================================================
-- VIEWS for researcher dashboard
-- ============================================================

-- Summary view: one row per session with key metrics
CREATE OR REPLACE VIEW rad_study_summary AS
SELECT
  s.session_id,
  s.student_name,
  s.training_year,
  s.case_id,
  s.group_code,
  s.first_report_type,
  s.env_history_score,
  s.total_turns,
  s.leak_detected,
  s.status,
  s.started_at,
  s.completed_at,
  s.history_flags->>'askedAboutPets' AS asked_pets,
  s.history_flags->>'askedAboutHomeEnvironment' AS asked_home,
  s.history_flags->>'askedAboutHobbies' AS asked_hobbies,
  s.history_flags->>'genericPromptDelivered' AS got_generic_prompt,
  s.history_flags->>'studentDeclinedAfterPrompt' AS declined_after_prompt,
  EXTRACT(EPOCH FROM (s.completed_at - s.started_at)) / 60.0 AS duration_minutes,
  jsonb_array_length(s.leak_details) AS leak_count
FROM rad_study_sessions s
WHERE s.status = 'complete'
ORDER BY s.started_at DESC;

-- Aggregate view: group-level comparisons
CREATE OR REPLACE VIEW rad_study_aggregates AS
SELECT
  group_code,
  training_year,
  COUNT(*) AS n,
  AVG(env_history_score) AS mean_env_score,
  AVG(total_turns) AS mean_turns,
  SUM(CASE WHEN env_history_score = 0 THEN 1 ELSE 0 END) AS missed_env_history,
  SUM(CASE WHEN env_history_score >= 1 THEN 1 ELSE 0 END) AS got_env_history,
  SUM(CASE WHEN leak_detected THEN 1 ELSE 0 END) AS sessions_with_leaks,
  AVG(EXTRACT(EPOCH FROM (completed_at - started_at)) / 60.0) AS mean_duration_minutes
FROM rad_study_sessions
WHERE status = 'complete'
GROUP BY group_code, training_year
ORDER BY group_code, training_year;

-- ============================================================
-- DONE — Run rad_study_summary and rad_study_aggregates
-- in Supabase SQL editor to verify views work
-- ============================================================
