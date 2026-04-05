-- ReasonDx: IPE CRDA Sessions Table Migration
-- Run in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- Safe to run multiple times (uses IF NOT EXISTS)
-- 
-- PURPOSE: Stores IPE Collaborative Reasoning Divergence Analysis session data
-- for research Sub-Study: "When health professions work the same case, where 
-- does reasoning diverge — and what predicts convergence?"

CREATE TABLE IF NOT EXISTS ipe_crda_sessions (
  id                  BIGSERIAL PRIMARY KEY,
  session_id          TEXT UNIQUE NOT NULL,
  case_id             TEXT NOT NULL,
  case_title          TEXT,
  target_diagnosis    TEXT,
  student_email       TEXT,
  student_profession  TEXT,           -- submitting student's profession
  professions_present JSONB,          -- array of profession IDs that participated
  profession_count    INTEGER,

  -- Per-profession responses (full JSONB)
  responses           JSONB,

  -- Divergence metrics — primary research outcomes
  convergence_dx      JSONB,          -- diagnoses ALL professions listed
  convergence_count   INTEGER DEFAULT 0,
  divergence_dx       JSONB,          -- diagnoses only ONE profession listed
  divergence_count    INTEGER DEFAULT 0,
  partial_agreement   JSONB,          -- diagnoses SOME professions listed
  partial_count       INTEGER DEFAULT 0,

  -- Derived research metrics
  convergence_rate    INTEGER,        -- 0-100, % of DDx items that converged
  all_unique          BOOLEAN DEFAULT FALSE,   -- no consensus at all
  full_consensus      BOOLEAN DEFAULT FALSE,   -- complete agreement

  completed_at        TIMESTAMPTZ DEFAULT NOW(),
  created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Index for research queries
CREATE INDEX IF NOT EXISTS ipe_crda_case_idx       ON ipe_crda_sessions(case_id);
CREATE INDEX IF NOT EXISTS ipe_crda_student_idx    ON ipe_crda_sessions(student_email);
CREATE INDEX IF NOT EXISTS ipe_crda_profession_idx ON ipe_crda_sessions(student_profession);
CREATE INDEX IF NOT EXISTS ipe_crda_completed_idx  ON ipe_crda_sessions(completed_at);

-- Row Level Security (open for now — tighten when multi-site)
ALTER TABLE ipe_crda_sessions ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='ipe_crda_sessions' AND policyname='Allow insert from anon'
  ) THEN
    CREATE POLICY "Allow insert from anon"
      ON ipe_crda_sessions FOR INSERT
      TO anon WITH CHECK (true);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='ipe_crda_sessions' AND policyname='Allow select for authenticated'
  ) THEN
    CREATE POLICY "Allow select for authenticated"
      ON ipe_crda_sessions FOR SELECT
      TO authenticated USING (true);
  END IF;
END $$;
