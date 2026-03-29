-- ============================================================
-- ReasonDx Unified Student Model — Supabase Migration
-- ============================================================
-- Run in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
--
-- This creates the CROSS-MODULE intelligence layer:
-- Every module writes events here. Every module reads the
-- student profile from here. This is what transforms ReasonDx
-- from a collection of tools into a living platform.
-- ============================================================

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 1. STUDENT PROFILES — the unified multidimensional model
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CREATE TABLE IF NOT EXISTS student_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  display_name TEXT DEFAULT '',
  training_year TEXT DEFAULT '',
  institution TEXT DEFAULT '',
  rotations_completed TEXT DEFAULT '',

  -- ── SKILL DIMENSIONS (0.0 - 1.0 scale, updated by events) ──
  skill_history_taking FLOAT DEFAULT 0.5,
  skill_differential_generation FLOAT DEFAULT 0.5,
  skill_test_ordering FLOAT DEFAULT 0.5,
  skill_data_integration FLOAT DEFAULT 0.5,
  skill_management FLOAT DEFAULT 0.5,
  skill_communication FLOAT DEFAULT 0.5,
  skill_time_management FLOAT DEFAULT 0.5,
  skill_metacognition FLOAT DEFAULT 0.5,

  -- ── BIAS TENDENCIES (higher = more tendency, 0.0 - 1.0) ──
  bias_anchoring FLOAT DEFAULT 0.5,
  bias_premature_closure FLOAT DEFAULT 0.5,
  bias_availability FLOAT DEFAULT 0.5,
  bias_framing FLOAT DEFAULT 0.5,
  bias_report_anchoring FLOAT DEFAULT 0.5,

  -- ── CALIBRATION ──
  uncertainty_calibration TEXT DEFAULT 'unknown',  -- good, overconfident, underconfident, mixed
  avg_confidence FLOAT DEFAULT 5.0,
  confidence_accuracy_correlation FLOAT DEFAULT 0.0,

  -- ── ENGAGEMENT ──
  total_sessions INTEGER DEFAULT 0,
  total_cases_completed INTEGER DEFAULT 0,
  total_coaching_sessions INTEGER DEFAULT 0,
  total_mechanism_modules INTEGER DEFAULT 0,
  streak_days INTEGER DEFAULT 0,
  last_active_at TIMESTAMPTZ DEFAULT now(),
  first_active_at TIMESTAMPTZ DEFAULT now(),

  -- ── GAPS (auto-populated from events) ──
  top_gaps JSONB DEFAULT '[]',
  top_strengths JSONB DEFAULT '[]',
  gap_history JSONB DEFAULT '[]',     -- array of {gap, identifiedAt, resolvedAt}

  -- ── LEARNING PREFERENCES ──
  preferred_cognitive_load TEXT DEFAULT 'off',
  preferred_difficulty TEXT DEFAULT 'standard',

  -- ── CURRICULUM STATE ──
  current_sequence JSONB DEFAULT NULL,  -- agent-generated learning sequence
  completed_cases JSONB DEFAULT '[]',
  spacedrep_cards_due INTEGER DEFAULT 0,
  next_recommended_module TEXT DEFAULT NULL,
  next_recommended_case TEXT DEFAULT NULL,
  next_recommended_reason TEXT DEFAULT '',

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 2. LEARNING EVENTS — the universal event bus
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- Every module writes events here. Events are the raw material
-- that the agent uses to update the student profile.
CREATE TABLE IF NOT EXISTS learning_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_email TEXT NOT NULL,

  -- What happened
  event_type TEXT NOT NULL,
  -- Types: case_completed, coaching_session, mechanism_quiz, ed_board_case,
  --        clinic_board_case, spacedrep_review, gap_identified, gap_resolved,
  --        bias_detected, bias_addressed, skill_assessed, confidence_recorded,
  --        management_plan_scored, patient_pushback_handled, reread_requested,
  --        module_visit, login, study_package_downloaded

  -- Where it happened
  source_module TEXT NOT NULL,
  -- Modules: rad_study, ed_board, clinic_board, coachdx, mechanismdx,
  --          casedx, study_hub, ecg_trainer, navigator

  -- Context
  case_id TEXT DEFAULT NULL,
  phase TEXT DEFAULT NULL,
  session_id TEXT DEFAULT NULL,

  -- The data (flexible schema per event type)
  event_data JSONB NOT NULL DEFAULT '{}',
  -- Examples:
  -- case_completed: {score, gaps, biases, envHistoryScore, differential, managementSafe}
  -- coaching_session: {topic, duration, gapsIdentified, articulationScore}
  -- mechanism_quiz: {module, score, incorrectTopics}
  -- bias_detected: {biasType, severity, evidence}
  -- gap_identified: {gapId, category, gapType, severity}
  -- confidence_recorded: {phase, confidence, correctDxPresent}
  -- management_plan_scored: {dangerousActionsProposed, criticalActionsMissed, safe}
  -- patient_pushback_handled: {trigger, response, quality}

  -- Skill impact (which dimensions this event affects)
  skill_impacts JSONB DEFAULT NULL,
  -- Example: {history_taking: +0.05, data_integration: -0.02}

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 3. LEARNING SEQUENCES — agent-generated curricula
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CREATE TABLE IF NOT EXISTS learning_sequences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_email TEXT NOT NULL,
  title TEXT NOT NULL DEFAULT 'Weekly Learning Plan',
  generated_by TEXT DEFAULT 'agent',  -- agent or faculty
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'superseded')),

  -- The sequence steps
  steps JSONB NOT NULL DEFAULT '[]',
  -- Array of: {
  --   order: 1,
  --   module: 'mechanismdx',
  --   action: 'Complete sepsis pathophysiology module',
  --   url: '/mechanism/sepsis.html',
  --   reason: 'Addresses gap in lactate clearance understanding',
  --   targetGap: 'management_timing',
  --   completed: false,
  --   completedAt: null
  -- }

  -- Why this sequence was generated
  rationale TEXT DEFAULT '',
  target_gaps JSONB DEFAULT '[]',

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ DEFAULT NULL
);


-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 4. CROSS-MODULE PATIENT CONTINUITY
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- Tracks patient encounters across modules so the same patient
-- can appear in the ED Board, then Clinic Board, then CoachDx.
CREATE TABLE IF NOT EXISTS patient_continuity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_email TEXT NOT NULL,
  patient_id TEXT NOT NULL,      -- e.g., 'reyes-maria' or 'DYS-001-patient'
  patient_name TEXT NOT NULL,

  -- Encounter chain
  encounters JSONB NOT NULL DEFAULT '[]',
  -- Array of: {
  --   module: 'rad_study',
  --   caseId: 'DYS-001',
  --   sessionId: 'RS-xxx',
  --   date: '2026-03-29',
  --   diagnosis: 'Hypersensitivity Pneumonitis',
  --   outcome: 'Identified bird exposure, started steroids',
  --   studentNotes: '...'
  -- }

  -- Current status
  last_encounter_module TEXT DEFAULT NULL,
  last_encounter_date TIMESTAMPTZ DEFAULT NULL,
  follow_up_due BOOLEAN DEFAULT false,
  follow_up_date TIMESTAMPTZ DEFAULT NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 5. FACULTY INTERVENTIONS — faculty-triggered actions
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CREATE TABLE IF NOT EXISTS faculty_interventions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  faculty_email TEXT NOT NULL,
  student_email TEXT NOT NULL,

  intervention_type TEXT NOT NULL,
  -- Types: case_assignment, coaching_note, performance_flag,
  --        curriculum_override, skill_assessment, praise

  content JSONB NOT NULL DEFAULT '{}',
  -- case_assignment: {caseId, reason, dueBy}
  -- coaching_note: {note, skillArea, recommendation}
  -- performance_flag: {concern, severity, suggestedAction}
  -- skill_assessment: {skill, level, evidence, assessedIn}

  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'acknowledged', 'resolved')),

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  resolved_at TIMESTAMPTZ DEFAULT NULL
);


-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- INDEXES
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CREATE INDEX IF NOT EXISTS idx_events_student ON learning_events(student_email);
CREATE INDEX IF NOT EXISTS idx_events_type ON learning_events(event_type);
CREATE INDEX IF NOT EXISTS idx_events_module ON learning_events(source_module);
CREATE INDEX IF NOT EXISTS idx_events_case ON learning_events(case_id);
CREATE INDEX IF NOT EXISTS idx_events_created ON learning_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sequences_student ON learning_sequences(student_email);
CREATE INDEX IF NOT EXISTS idx_sequences_status ON learning_sequences(status);
CREATE INDEX IF NOT EXISTS idx_continuity_student ON patient_continuity(student_email);
CREATE INDEX IF NOT EXISTS idx_continuity_patient ON patient_continuity(patient_id);
CREATE INDEX IF NOT EXISTS idx_interventions_student ON faculty_interventions(student_email);
CREATE INDEX IF NOT EXISTS idx_interventions_status ON faculty_interventions(status);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON student_profiles(email);


-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- ROW LEVEL SECURITY
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_sequences ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_continuity ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty_interventions ENABLE ROW LEVEL SECURITY;

-- Anon policies (free launch period)
CREATE POLICY "Anon all student_profiles" ON student_profiles FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Anon all learning_events" ON learning_events FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Anon all learning_sequences" ON learning_sequences FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Anon all patient_continuity" ON patient_continuity FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Anon all faculty_interventions" ON faculty_interventions FOR ALL TO anon USING (true) WITH CHECK (true);

-- Authenticated policies (when auth is enforced)
CREATE POLICY "Auth read own profile" ON student_profiles FOR SELECT TO authenticated
  USING (email = public.get_auth_email() OR public.is_emr_privileged());
CREATE POLICY "Auth update own profile" ON student_profiles FOR UPDATE TO authenticated
  USING (email = public.get_auth_email());
CREATE POLICY "Auth read own events" ON learning_events FOR SELECT TO authenticated
  USING (student_email = public.get_auth_email() OR public.is_emr_privileged());
CREATE POLICY "Auth insert own events" ON learning_events FOR INSERT TO authenticated
  WITH CHECK (student_email = public.get_auth_email());
CREATE POLICY "Auth read own sequences" ON learning_sequences FOR SELECT TO authenticated
  USING (student_email = public.get_auth_email() OR public.is_emr_privileged());
CREATE POLICY "Auth read own continuity" ON patient_continuity FOR SELECT TO authenticated
  USING (student_email = public.get_auth_email() OR public.is_emr_privileged());
CREATE POLICY "Auth faculty interventions" ON faculty_interventions FOR ALL TO authenticated
  USING (public.is_emr_privileged() OR student_email = public.get_auth_email());


-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- VIEWS
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- Student skill radar view (for dashboard visualization)
CREATE OR REPLACE VIEW student_skill_radar AS
SELECT
  email,
  display_name,
  training_year,
  skill_history_taking,
  skill_differential_generation,
  skill_test_ordering,
  skill_data_integration,
  skill_management,
  skill_communication,
  skill_time_management,
  skill_metacognition,
  total_sessions,
  last_active_at,
  top_gaps,
  top_strengths,
  uncertainty_calibration
FROM student_profiles
ORDER BY last_active_at DESC;

-- Recent events across all modules (for faculty dashboard)
CREATE OR REPLACE VIEW recent_platform_events AS
SELECT
  e.student_email,
  p.display_name,
  p.training_year,
  e.event_type,
  e.source_module,
  e.case_id,
  e.event_data,
  e.created_at
FROM learning_events e
LEFT JOIN student_profiles p ON p.email = e.student_email
ORDER BY e.created_at DESC
LIMIT 500;

-- Active learning sequences
CREATE OR REPLACE VIEW active_sequences AS
SELECT
  s.student_email,
  p.display_name,
  s.title,
  s.steps,
  s.rationale,
  s.target_gaps,
  s.created_at
FROM learning_sequences s
LEFT JOIN student_profiles p ON p.email = s.student_email
WHERE s.status = 'active'
ORDER BY s.created_at DESC;

-- Students needing attention (for faculty)
CREATE OR REPLACE VIEW students_needing_attention AS
SELECT
  email,
  display_name,
  training_year,
  total_sessions,
  last_active_at,
  top_gaps,
  uncertainty_calibration,
  CASE
    WHEN last_active_at < now() - interval '14 days' THEN 'inactive'
    WHEN jsonb_array_length(top_gaps) >= 3 THEN 'persistent_gaps'
    WHEN uncertainty_calibration = 'overconfident' THEN 'calibration_concern'
    WHEN skill_management < 0.3 THEN 'safety_concern'
    ELSE 'monitoring'
  END AS attention_reason,
  CASE
    WHEN skill_management < 0.3 THEN 'high'
    WHEN uncertainty_calibration = 'overconfident' THEN 'high'
    WHEN last_active_at < now() - interval '14 days' THEN 'medium'
    WHEN jsonb_array_length(top_gaps) >= 3 THEN 'medium'
    ELSE 'low'
  END AS priority
FROM student_profiles
WHERE total_sessions >= 2
ORDER BY
  CASE WHEN skill_management < 0.3 THEN 0
       WHEN uncertainty_calibration = 'overconfident' THEN 1
       WHEN last_active_at < now() - interval '14 days' THEN 2
       ELSE 3 END,
  last_active_at ASC;


-- ============================================================
-- DONE — Run the views to verify they compile:
--   SELECT * FROM student_skill_radar LIMIT 1;
--   SELECT * FROM recent_platform_events LIMIT 1;
--   SELECT * FROM students_needing_attention LIMIT 1;
-- ============================================================
