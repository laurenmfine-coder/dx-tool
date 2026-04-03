-- ReasonDx: Profession + Baseline Assessment Migration
-- Run in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- Safe to run multiple times (all use IF NOT EXISTS)

-- ── 1. Profession Onboarding Columns ─────────────────────────────────────────
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS profession_id        TEXT,
  ADD COLUMN IF NOT EXISTS track_id             TEXT,
  ADD COLUMN IF NOT EXISTS program_name         TEXT,
  ADD COLUMN IF NOT EXISTS year_of_training     TEXT,
  ADD COLUMN IF NOT EXISTS research_consent     BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS cohort_id            TEXT,
  ADD COLUMN IF NOT EXISTS profession_set_at    TIMESTAMPTZ;

-- ── 2. Baseline Assessment Columns ───────────────────────────────────────────
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS baseline_complete       BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS baseline_scores         JSONB,
  ADD COLUMN IF NOT EXISTS baseline_responses      JSONB,
  ADD COLUMN IF NOT EXISTS baseline_completed_at   TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS baseline_duration_ms    INTEGER,
  ADD COLUMN IF NOT EXISTS baseline_version        TEXT DEFAULT '1.0';

-- ── 3. Indexes ────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_profiles_profession  ON profiles(profession_id);
CREATE INDEX IF NOT EXISTS idx_profiles_cohort      ON profiles(cohort_id);
CREATE INDEX IF NOT EXISTS idx_profiles_baseline    ON profiles(baseline_complete);
CREATE INDEX IF NOT EXISTS idx_profiles_research    ON profiles(research_consent);

-- ── 4. Research Cohort View (for data export) ─────────────────────────────────
-- Joins profile data with session data for research analysis
CREATE OR REPLACE VIEW research_cohort AS
SELECT
  p.id,
  p.profession_id,
  p.track_id,
  p.program_name,
  p.year_of_training,
  p.research_consent,
  p.cohort_id,
  p.profession_set_at,
  p.baseline_complete,
  p.baseline_scores,
  p.baseline_completed_at,
  p.baseline_duration_ms,
  p.created_at,
  COUNT(s.id) AS total_sessions,
  MAX(s.created_at) AS last_session_at
FROM profiles p
LEFT JOIN rad_study_sessions s ON s.user_id = p.id
WHERE p.research_consent = true
GROUP BY p.id;

-- ── 5. Verification ───────────────────────────────────────────────────────────
-- Run this to confirm columns were added:
-- SELECT column_name, data_type FROM information_schema.columns
-- WHERE table_name = 'profiles' AND column_name LIKE 'profession%' OR column_name LIKE 'baseline%'
-- ORDER BY column_name;
