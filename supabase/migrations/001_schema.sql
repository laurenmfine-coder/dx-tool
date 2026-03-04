-- ═══════════════════════════════════════════════════════════════
-- ReasonDx Database Schema
-- Run in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- ═══════════════════════════════════════════════════════════════

-- ─── ENUMS ───
CREATE TYPE user_role AS ENUM ('fellow', 'faculty', 'program_director', 'admin');
CREATE TYPE license_tier AS ENUM ('free', 'pro', 'program', 'enterprise');
CREATE TYPE clinical_setting AS ENUM ('ed', 'clinic', 'floor', 'icu');

-- ─── INSTITUTIONS ───
CREATE TABLE institutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  license_tier license_tier NOT NULL DEFAULT 'program',
  license_expires DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─── PROGRAMS ───
CREATE TABLE programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id UUID REFERENCES institutions(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  specialty TEXT NOT NULL DEFAULT 'allergy_immunology',
  academic_year TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_programs_institution ON programs(institution_id);

-- ─── USER PROFILES ───
-- Extends Supabase auth.users
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  display_name TEXT,
  role user_role NOT NULL DEFAULT 'fellow',
  program_id UUID REFERENCES programs(id) ON DELETE SET NULL,
  institution_id UUID REFERENCES institutions(id) ON DELETE SET NULL,
  tier license_tier NOT NULL DEFAULT 'free',
  pgy_level INTEGER,
  avatar_emoji TEXT DEFAULT '👨‍⚕️',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_profiles_program ON profiles(program_id);
CREATE INDEX idx_profiles_role ON profiles(role);

-- ─── CASE ATTEMPTS ───
-- One row per case a learner opens/works
CREATE TABLE case_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  case_id TEXT NOT NULL,
  setting clinical_setting,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  dx_submitted TEXT,
  dx_correct BOOLEAN,
  time_seconds INTEGER DEFAULT 0,
  stages_completed INTEGER DEFAULT 0,
  total_stages INTEGER,
  milestone_tags TEXT[] DEFAULT '{}',
  tool TEXT NOT NULL DEFAULT 'virtual-emr',  -- virtual-emr, crt, allergy-pathway, etc.
  metadata JSONB DEFAULT '{}'
);

CREATE INDEX idx_case_attempts_user ON case_attempts(user_id);
CREATE INDEX idx_case_attempts_case ON case_attempts(case_id);
CREATE INDEX idx_case_attempts_started ON case_attempts(started_at);
CREATE INDEX idx_case_attempts_user_tool ON case_attempts(user_id, tool);

-- ─── ANALYTICS EVENTS ───
-- Granular event stream for RPFS and detailed analytics
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  attempt_id UUID REFERENCES case_attempts(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,
  -- Event types: case_open, case_complete, stage_advance, dx_submit,
  --   consult_start, consult_message, order_placed, chart_tab_view,
  --   procedure_start, procedure_complete, crt_stage_complete
  event_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_events_user ON analytics_events(user_id);
CREATE INDEX idx_events_type ON analytics_events(event_type);
CREATE INDEX idx_events_created ON analytics_events(created_at);
CREATE INDEX idx_events_attempt ON analytics_events(attempt_id);

-- ─── CONSULT ATTEMPTS ───
-- Tracks specialist consult call interactions
CREATE TABLE consult_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  case_id TEXT NOT NULL,
  specialist TEXT NOT NULL,
  messages JSONB DEFAULT '[]',
  message_count INTEGER DEFAULT 0,
  rubric_scores JSONB DEFAULT '{}',
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

CREATE INDEX idx_consults_user ON consult_attempts(user_id);
CREATE INDEX idx_consults_specialist ON consult_attempts(specialist);

-- ─── MILESTONE SCORES ───
-- Aggregated milestone levels per user
CREATE TABLE milestone_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  milestone TEXT NOT NULL,  -- PC1, PC2, MK1, etc.
  level INTEGER NOT NULL DEFAULT 1 CHECK (level BETWEEN 1 AND 5),
  evidence_count INTEGER NOT NULL DEFAULT 0,
  last_evidence_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, milestone)
);

CREATE INDEX idx_milestones_user ON milestone_scores(user_id);

-- ─── PROCEDURE ATTEMPTS ───
CREATE TABLE procedure_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  procedure_type TEXT NOT NULL,  -- skin_test, ofc_protocol, desensitization
  score NUMERIC(5,2),
  time_seconds INTEGER,
  passed BOOLEAN,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_procedures_user ON procedure_attempts(user_id);

-- ─── ASSIGNMENTS ───
-- PD assigns cases/modules to fellows
CREATE TABLE assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  program_id UUID NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
  assigned_by UUID NOT NULL REFERENCES profiles(id),
  assigned_to UUID REFERENCES profiles(id),  -- NULL = assigned to all fellows in program
  case_ids TEXT[] DEFAULT '{}',
  title TEXT,
  due_date DATE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_assignments_program ON assignments(program_id);
CREATE INDEX idx_assignments_to ON assignments(assigned_to);


-- ═══════════════════════════════════════════════════════════════
-- ROW-LEVEL SECURITY POLICIES
-- ═══════════════════════════════════════════════════════════════

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE consult_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE milestone_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE procedure_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE institutions ENABLE ROW LEVEL SECURITY;

-- Profiles: users can read their own; PDs can read their program's fellows
CREATE POLICY "Users read own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "PDs read program profiles"
  ON profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles AS pd
      WHERE pd.id = auth.uid()
        AND pd.role IN ('program_director', 'admin')
        AND pd.program_id = profiles.program_id
    )
  );

CREATE POLICY "Users update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Case attempts: users see own; PDs see program's
CREATE POLICY "Users read own attempts"
  ON case_attempts FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "PDs read program attempts"
  ON case_attempts FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles AS pd
      WHERE pd.id = auth.uid()
        AND pd.role IN ('program_director', 'admin')
        AND pd.program_id = (SELECT program_id FROM profiles WHERE id = case_attempts.user_id)
    )
  );

CREATE POLICY "Users insert own attempts"
  ON case_attempts FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users update own attempts"
  ON case_attempts FOR UPDATE
  USING (user_id = auth.uid());

-- Analytics events: same pattern
CREATE POLICY "Users read own events"
  ON analytics_events FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "PDs read program events"
  ON analytics_events FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles AS pd
      WHERE pd.id = auth.uid()
        AND pd.role IN ('program_director', 'admin')
        AND pd.program_id = (SELECT program_id FROM profiles WHERE id = analytics_events.user_id)
    )
  );

CREATE POLICY "Users insert own events"
  ON analytics_events FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- Consult attempts
CREATE POLICY "Users read own consults"
  ON consult_attempts FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "PDs read program consults"
  ON consult_attempts FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles AS pd
      WHERE pd.id = auth.uid()
        AND pd.role IN ('program_director', 'admin')
        AND pd.program_id = (SELECT program_id FROM profiles WHERE id = consult_attempts.user_id)
    )
  );

CREATE POLICY "Users insert own consults"
  ON consult_attempts FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users update own consults"
  ON consult_attempts FOR UPDATE
  USING (user_id = auth.uid());

-- Milestone scores
CREATE POLICY "Users read own milestones"
  ON milestone_scores FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "PDs read program milestones"
  ON milestone_scores FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles AS pd
      WHERE pd.id = auth.uid()
        AND pd.role IN ('program_director', 'admin')
        AND pd.program_id = (SELECT program_id FROM profiles WHERE id = milestone_scores.user_id)
    )
  );

CREATE POLICY "Users upsert own milestones"
  ON milestone_scores FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users update own milestones"
  ON milestone_scores FOR UPDATE
  USING (user_id = auth.uid());

-- Procedure attempts
CREATE POLICY "Users read own procedures"
  ON procedure_attempts FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "PDs read program procedures"
  ON procedure_attempts FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles AS pd
      WHERE pd.id = auth.uid()
        AND pd.role IN ('program_director', 'admin')
        AND pd.program_id = (SELECT program_id FROM profiles WHERE id = procedure_attempts.user_id)
    )
  );

CREATE POLICY "Users insert own procedures"
  ON procedure_attempts FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- Programs: members can read their program
CREATE POLICY "Members read own program"
  ON programs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
        AND profiles.program_id = programs.id
    )
  );

-- Institutions: members can read their institution
CREATE POLICY "Members read own institution"
  ON institutions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
        AND profiles.institution_id = institutions.id
    )
  );

-- Assignments: PDs manage; fellows read their own
CREATE POLICY "PDs manage assignments"
  ON assignments FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles AS pd
      WHERE pd.id = auth.uid()
        AND pd.role IN ('program_director', 'admin')
        AND pd.program_id = assignments.program_id
    )
  );

CREATE POLICY "Fellows read own assignments"
  ON assignments FOR SELECT
  USING (
    assigned_to = auth.uid()
    OR (
      assigned_to IS NULL
      AND EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
          AND profiles.program_id = assignments.program_id
      )
    )
  );


-- ═══════════════════════════════════════════════════════════════
-- AUTOMATIC PROFILE CREATION ON SIGNUP
-- ═══════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, display_name, role, tier)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)),
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'fellow'),
    'free'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();


-- ═══════════════════════════════════════════════════════════════
-- USEFUL VIEWS FOR ANALYTICS QUERIES
-- ═══════════════════════════════════════════════════════════════

-- Program cohort summary
CREATE OR REPLACE VIEW program_cohort_summary AS
SELECT
  p.program_id,
  p.id AS user_id,
  p.display_name,
  p.role,
  p.pgy_level,
  COUNT(DISTINCT ca.id) AS cases_completed,
  COUNT(DISTINCT ca.id) FILTER (WHERE ca.dx_correct = true) AS cases_correct,
  ROUND(
    COUNT(DISTINCT ca.id) FILTER (WHERE ca.dx_correct = true)::NUMERIC /
    NULLIF(COUNT(DISTINCT ca.id) FILTER (WHERE ca.dx_correct IS NOT NULL), 0) * 100
  ) AS accuracy_pct,
  COALESCE(SUM(ca.time_seconds), 0) / 3600.0 AS hours_logged,
  COUNT(DISTINCT con.id) AS consult_calls,
  MAX(ca.started_at) AS last_active
FROM profiles p
LEFT JOIN case_attempts ca ON ca.user_id = p.id AND ca.completed_at IS NOT NULL
LEFT JOIN consult_attempts con ON con.user_id = p.id
WHERE p.role = 'fellow'
GROUP BY p.id, p.program_id, p.display_name, p.role, p.pgy_level;

-- Milestone snapshot per fellow
CREATE OR REPLACE VIEW milestone_snapshot AS
SELECT
  ms.user_id,
  p.display_name,
  p.program_id,
  jsonb_object_agg(ms.milestone, ms.level) AS levels,
  ROUND(AVG(ms.level)::NUMERIC, 1) AS avg_level,
  SUM(ms.evidence_count) AS total_evidence
FROM milestone_scores ms
JOIN profiles p ON p.id = ms.user_id
GROUP BY ms.user_id, p.display_name, p.program_id;

-- Knowledge gaps by case category
CREATE OR REPLACE VIEW category_performance AS
SELECT
  ca.user_id,
  p.program_id,
  COALESCE(ca.metadata->>'category', 'Uncategorized') AS category,
  COUNT(*) AS attempts,
  COUNT(*) FILTER (WHERE ca.dx_correct = true) AS correct,
  ROUND(
    COUNT(*) FILTER (WHERE ca.dx_correct = true)::NUMERIC /
    NULLIF(COUNT(*), 0) * 100
  ) AS accuracy_pct
FROM case_attempts ca
JOIN profiles p ON p.id = ca.user_id
WHERE ca.dx_correct IS NOT NULL
GROUP BY ca.user_id, p.program_id, COALESCE(ca.metadata->>'category', 'Uncategorized');
