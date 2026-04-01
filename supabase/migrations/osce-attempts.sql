-- ═══════════════════════════════════════════════════════════════════════
-- ReasonDx: OSCE Attempts Table
-- Run in Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS osce_attempts (
  id                  BIGSERIAL PRIMARY KEY,
  student_name        TEXT,
  training_year       TEXT,
  case_id             TEXT,
  diagnosis           TEXT,

  -- Composite scores (0–100)
  total_score         INTEGER,
  max_score           INTEGER DEFAULT 100,
  pct_score           INTEGER,

  -- Domain scores (0–100)
  critical_score      INTEGER,   -- critical order completion rate
  history_score       INTEGER,   -- physical exam completion rate
  communication_score INTEGER,   -- empathy + open-Q composite
  management_score    INTEGER,   -- correct orders - wrong order penalties

  -- Communication detail
  empathy_density     NUMERIC(4,2),  -- empathy signals per turn
  open_q_rate         NUMERIC(4,2),  -- open questions / total questions

  -- Raw data
  checked_items       JSONB,     -- array of item IDs checked
  conversation_turns  INTEGER,

  -- Timestamps
  started_at          TIMESTAMPTZ,
  completed_at        TIMESTAMPTZ DEFAULT NOW(),
  created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faculty queries
CREATE INDEX IF NOT EXISTS osce_attempts_student_name ON osce_attempts(student_name);
CREATE INDEX IF NOT EXISTS osce_attempts_case_id ON osce_attempts(case_id);
CREATE INDEX IF NOT EXISTS osce_attempts_completed_at ON osce_attempts(completed_at);

-- RLS: allow anon insert (students submit their own scores)
ALTER TABLE osce_attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "allow_anon_insert" ON osce_attempts FOR INSERT WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "allow_anon_select" ON osce_attempts FOR SELECT USING (true);
