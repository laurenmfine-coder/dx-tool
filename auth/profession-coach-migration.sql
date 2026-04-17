-- ReasonDx: ProfessionCoach + IPE CRDA Migration
-- Run in Supabase SQL Editor after profession-baseline-migration.sql
-- Safe to run multiple times (IF NOT EXISTS throughout)

-- ── 1. Weekly Coaching Briefs ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS profession_coach_briefs (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES auth.users(id),
  profession_id   TEXT NOT NULL,
  week_of         DATE NOT NULL,
  brief_text      TEXT,
  error_modes     JSONB,
  dimensions      JSONB,
  recommendations JSONB,
  research_data   JSONB,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, week_of)
);

ALTER TABLE profession_coach_briefs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own briefs" ON profession_coach_briefs
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own briefs" ON profession_coach_briefs
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_briefs_user     ON profession_coach_briefs(user_id);
CREATE INDEX IF NOT EXISTS idx_briefs_week     ON profession_coach_briefs(week_of);
CREATE INDEX IF NOT EXISTS idx_briefs_prof     ON profession_coach_briefs(profession_id);

-- ── 2. IPE CRDA Sessions ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ipe_crda_sessions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_code    TEXT UNIQUE,        -- shared code for group sessions
  case_id         TEXT NOT NULL,
  facilitator_id  UUID REFERENCES auth.users(id),
  professions     TEXT[],             -- professions that participated
  responses       JSONB,              -- profession → DDx map
  convergence     TEXT[],             -- shared diagnoses
  divergence      JSONB,              -- unique diagnoses by profession
  partial         JSONB,              -- partially shared diagnoses
  ai_analysis     TEXT,               -- AI-generated IPE analysis
  ipe_points      JSONB,              -- learning points
  research_data   JSONB,              -- de-identified export
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE ipe_crda_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert CRDA sessions" ON ipe_crda_sessions
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Facilitators read own sessions" ON ipe_crda_sessions
  FOR SELECT USING (auth.uid() = facilitator_id OR facilitator_id IS NULL);

CREATE INDEX IF NOT EXISTS idx_crda_case     ON ipe_crda_sessions(case_id);
CREATE INDEX IF NOT EXISTS idx_crda_created  ON ipe_crda_sessions(created_at);

-- ── 3. Profession Signal Sessions (from passive collector Agent 8) ─────────────
-- Stores per-session profession-specific signal summaries for research
ALTER TABLE rad_study_sessions
  ADD COLUMN IF NOT EXISTS profession_id       TEXT,
  ADD COLUMN IF NOT EXISTS profession_signals  JSONB,
  ADD COLUMN IF NOT EXISTS calibrated_scores   JSONB,
  ADD COLUMN IF NOT EXISTS calibrated_composite INTEGER;

CREATE INDEX IF NOT EXISTS idx_sessions_prof ON rad_study_sessions(profession_id);

-- ── 4. Research Aggregate View ────────────────────────────────────────────────
-- Cross-profession weekly summary for cohort analysis
CREATE OR REPLACE VIEW profession_weekly_summary AS
SELECT
    DATE_TRUNC('week', s.started_at) AS week_of,
  p.profession_id,
  p.track_id,
  p.program_name,
  p.cohort_id,
  COUNT(s.id) AS sessions,
  AVG(s.env_history_score::float) AS avg_history_score,
  AVG(s.calibrated_composite::float) AS avg_calibrated_score
FROM profiles p
JOIN rad_study_sessions s ON s.student_email = p.email
WHERE p.research_consent = true
  AND p.profession_id IS NOT NULL
GROUP BY 1,2,3,4,5;

-- ── 5. Verification ───────────────────────────────────────────────────────────
-- SELECT table_name FROM information_schema.tables
-- WHERE table_schema = 'public' AND table_name IN
--   ('profession_coach_briefs','ipe_crda_sessions');
