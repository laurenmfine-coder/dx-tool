-- ReasonDx: MechanismDx Concept Mastery Table Migration
-- Run in Supabase SQL Editor after ipe-crda-migration.sql
-- Safe to run multiple times (IF NOT EXISTS throughout)

CREATE TABLE IF NOT EXISTS mechanism_concept_mastery (
  id            BIGSERIAL PRIMARY KEY,
  student_id    TEXT UNIQUE NOT NULL,
  concepts      JSONB DEFAULT '{}',
  total_seen    INTEGER DEFAULT 0,
  total_gaps    INTEGER DEFAULT 0,
  total_mastered INTEGER DEFAULT 0,
  updated_at    TIMESTAMPTZ DEFAULT NOW(),
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS mcm_student_idx    ON mechanism_concept_mastery(student_id);
CREATE INDEX IF NOT EXISTS mcm_updated_idx    ON mechanism_concept_mastery(updated_at);
CREATE INDEX IF NOT EXISTS mcm_gaps_idx       ON mechanism_concept_mastery(total_gaps);

ALTER TABLE mechanism_concept_mastery ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='mechanism_concept_mastery' AND policyname='Allow upsert from anon'
  ) THEN
    CREATE POLICY "Allow upsert from anon"
      ON mechanism_concept_mastery FOR ALL
      TO anon WITH CHECK (true) USING (true);
  END IF;
END $$;
