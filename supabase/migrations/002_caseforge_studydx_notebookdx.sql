-- ═══════════════════════════════════════════════════════════════
-- ReasonDx Migration 002: CaseForge + StudyDx + NotebookDx
-- Run in Supabase SQL Editor AFTER 001_schema.sql
-- ═══════════════════════════════════════════════════════════════

-- ─── NEW ENUMS ───
CREATE TYPE case_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE mcq_source_type AS ENUM ('platform_case', 'custom_case', 'mechanism_topic', 'notebook_resource', 'manual');
CREATE TYPE share_visibility AS ENUM ('private', 'program', 'public');
CREATE TYPE share_permission AS ENUM ('view', 'attempt', 'edit');
CREATE TYPE resource_validation_status AS ENUM ('pending', 'valid', 'rejected', 'expired');
CREATE TYPE notebook_material_type AS ENUM ('summary', 'flashcard', 'concept_map', 'mcq', 'teaching_point');
CREATE TYPE blooms_level AS ENUM ('recall', 'application', 'analysis', 'synthesis');

-- ═══════════════════════════════════════════════════════════════
-- CASEFORGE: Custom Case Authoring
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE custom_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id UUID REFERENCES institutions(id) ON DELETE CASCADE,
  program_id UUID REFERENCES programs(id) ON DELETE SET NULL,
  created_by UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,

  -- Case metadata
  title TEXT NOT NULL,
  description TEXT,
  specialty TEXT NOT NULL DEFAULT 'allergy_immunology',
  chief_complaint TEXT,
  difficulty INTEGER CHECK (difficulty BETWEEN 1 AND 5),

  -- Educational mapping
  abai_domains TEXT[] DEFAULT '{}',
  acgme_milestones TEXT[] DEFAULT '{}',
  acgme_competencies TEXT[] DEFAULT '{}',
  learning_objectives TEXT[] DEFAULT '{}',

  -- The full EMR_DATA JSON (identical schema to built-in cases)
  case_data JSONB NOT NULL DEFAULT '{}',

  -- Status & visibility
  status case_status NOT NULL DEFAULT 'draft',
  
  -- Analytics
  attempt_count INTEGER NOT NULL DEFAULT 0,
  avg_score NUMERIC(5,2),
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_custom_cases_institution ON custom_cases(institution_id);
CREATE INDEX idx_custom_cases_program ON custom_cases(program_id);
CREATE INDEX idx_custom_cases_creator ON custom_cases(created_by);
CREATE INDEX idx_custom_cases_status ON custom_cases(status);
CREATE INDEX idx_custom_cases_specialty ON custom_cases(specialty);

-- Extend case_attempts to support custom cases
ALTER TABLE case_attempts ADD COLUMN custom_case_id UUID REFERENCES custom_cases(id) ON DELETE SET NULL;
CREATE INDEX idx_case_attempts_custom ON case_attempts(custom_case_id);


-- ═══════════════════════════════════════════════════════════════
-- STUDYDX: MCQ Engine
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE mcq_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  institution_id UUID REFERENCES institutions(id) ON DELETE SET NULL,

  -- Question content
  stem TEXT NOT NULL,
  options JSONB NOT NULL DEFAULT '[]',
  -- options format: [{"text":"...", "explanation":"why this is right/wrong"}, ...]
  correct_index INTEGER NOT NULL CHECK (correct_index >= 0 AND correct_index <= 4),
  explanation TEXT NOT NULL,

  -- Source traceability
  source_type mcq_source_type NOT NULL DEFAULT 'manual',
  source_id TEXT,                      -- case_id, topic_id, notebook_resource_id
  source_title TEXT,                   -- human-readable source name
  references JSONB DEFAULT '[]',       -- [{url, title, authors, year, openAccess}]

  -- Educational mapping
  abai_domain TEXT,                    -- e.g., "Domain 5 — Urticaria/Angioedema"
  abai_domain_number INTEGER,          -- 1-15
  acgme_competency TEXT,               -- PC, MK, SBP, PBLI, IPC, PROF
  acgme_milestone TEXT,                -- e.g., "PC1", "MK2"
  acgme_milestone_level INTEGER CHECK (acgme_milestone_level BETWEEN 1 AND 5),
  blooms blooms_level DEFAULT 'application',
  difficulty INTEGER CHECK (difficulty BETWEEN 1 AND 5),
  topic_tags TEXT[] DEFAULT '{}',

  -- Quality metrics
  quality_score NUMERIC(3,2),          -- 0.00-1.00 from quality audit pass
  quality_notes TEXT,                  -- Audit pass feedback
  pass_count INTEGER NOT NULL DEFAULT 0,
  fail_count INTEGER NOT NULL DEFAULT 0,

  -- Visibility
  visibility share_visibility NOT NULL DEFAULT 'private',

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_mcq_creator ON mcq_questions(created_by);
CREATE INDEX idx_mcq_institution ON mcq_questions(institution_id);
CREATE INDEX idx_mcq_source ON mcq_questions(source_type, source_id);
CREATE INDEX idx_mcq_abai ON mcq_questions(abai_domain_number);
CREATE INDEX idx_mcq_acgme ON mcq_questions(acgme_competency, acgme_milestone);
CREATE INDEX idx_mcq_visibility ON mcq_questions(visibility);
CREATE INDEX idx_mcq_difficulty ON mcq_questions(difficulty);

-- Collections (user-organized question sets)
CREATE TABLE mcq_collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  institution_id UUID REFERENCES institutions(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  question_ids UUID[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  visibility share_visibility NOT NULL DEFAULT 'private',
  attempt_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_mcq_coll_owner ON mcq_collections(owner_id);
CREATE INDEX idx_mcq_coll_institution ON mcq_collections(institution_id);
CREATE INDEX idx_mcq_coll_visibility ON mcq_collections(visibility);

-- Individual answer records
CREATE TABLE mcq_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES mcq_questions(id) ON DELETE CASCADE,
  collection_id UUID REFERENCES mcq_collections(id) ON DELETE SET NULL,
  selected_index INTEGER NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_spent_ms INTEGER,
  
  -- Spaced repetition fields
  next_review_at TIMESTAMPTZ,
  review_interval_days INTEGER DEFAULT 1,
  ease_factor NUMERIC(4,2) DEFAULT 2.50,
  repetition_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_mcq_att_user ON mcq_attempts(user_id);
CREATE INDEX idx_mcq_att_question ON mcq_attempts(question_id);
CREATE INDEX idx_mcq_att_collection ON mcq_attempts(collection_id);
CREATE INDEX idx_mcq_att_review ON mcq_attempts(user_id, next_review_at);
CREATE INDEX idx_mcq_att_created ON mcq_attempts(created_at);

-- Sharing
CREATE TABLE mcq_shares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id UUID NOT NULL REFERENCES mcq_collections(id) ON DELETE CASCADE,
  shared_by UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  shared_with_institution UUID REFERENCES institutions(id) ON DELETE CASCADE,
  shared_with_user UUID REFERENCES profiles(id) ON DELETE CASCADE,
  permission share_permission NOT NULL DEFAULT 'attempt',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  -- Must share with either an institution or a user
  CONSTRAINT share_target CHECK (shared_with_institution IS NOT NULL OR shared_with_user IS NOT NULL)
);

CREATE INDEX idx_mcq_share_collection ON mcq_shares(collection_id);
CREATE INDEX idx_mcq_share_institution ON mcq_shares(shared_with_institution);
CREATE INDEX idx_mcq_share_user ON mcq_shares(shared_with_user);


-- ═══════════════════════════════════════════════════════════════
-- NOTEBOOKDX: Knowledge Notebook
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE notebooks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  tags TEXT[] DEFAULT '{}',
  resource_count INTEGER NOT NULL DEFAULT 0,
  material_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_notebooks_owner ON notebooks(owner_id);

CREATE TABLE notebook_resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  notebook_id UUID NOT NULL REFERENCES notebooks(id) ON DELETE CASCADE,
  
  -- Source metadata
  url TEXT,
  title TEXT NOT NULL,
  authors TEXT,
  journal TEXT,
  year INTEGER,
  doi TEXT,
  
  -- Content
  content_text TEXT,                  -- Full extracted text
  content_hash TEXT,                  -- SHA-256 for dedup
  word_count INTEGER,
  
  -- Validation
  validation_status resource_validation_status NOT NULL DEFAULT 'pending',
  validation_notes TEXT,
  is_open_access BOOLEAN,
  is_peer_reviewed BOOLEAN,
  domain_verified BOOLEAN DEFAULT false,
  
  -- Extracted structure
  extracted_concepts JSONB DEFAULT '{}',
  -- { concepts: [{name, definition, category}], 
  --   mechanisms: [{pathway, steps}],
  --   clinical_facts: [{fact, source_section}],
  --   board_pearls: [text] }
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_nb_resources_notebook ON notebook_resources(notebook_id);
CREATE INDEX idx_nb_resources_status ON notebook_resources(validation_status);
CREATE INDEX idx_nb_resources_hash ON notebook_resources(content_hash);

CREATE TABLE notebook_materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  notebook_id UUID NOT NULL REFERENCES notebooks(id) ON DELETE CASCADE,
  type notebook_material_type NOT NULL,
  
  -- Content (format depends on type)
  content JSONB NOT NULL DEFAULT '{}',
  -- summary: {title, text, sections[]}
  -- flashcard: {front, back, tags[]}
  -- concept_map: {nodes[], edges[]}
  -- mcq: {question_id} (links to mcq_questions)
  -- teaching_point: {text, category, source_quote}
  
  -- Traceability
  source_resource_ids UUID[] DEFAULT '{}',
  
  -- Educational mapping
  abai_domain TEXT,
  acgme_tags TEXT[] DEFAULT '{}',
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_nb_materials_notebook ON notebook_materials(notebook_id);
CREATE INDEX idx_nb_materials_type ON notebook_materials(type);

CREATE TABLE notebook_chats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  notebook_id UUID NOT NULL REFERENCES notebooks(id) ON DELETE CASCADE,
  messages JSONB NOT NULL DEFAULT '[]',
  -- [{role: 'user'|'assistant', content: text, timestamp: iso}]
  title TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_nb_chats_notebook ON notebook_chats(notebook_id);


-- ═══════════════════════════════════════════════════════════════
-- KNOWLEDGE FINGERPRINT: MCQ Integration View
-- ═══════════════════════════════════════════════════════════════

CREATE OR REPLACE VIEW mcq_performance_by_domain AS
SELECT
  ma.user_id,
  p.program_id,
  q.abai_domain,
  q.abai_domain_number,
  q.acgme_competency,
  COUNT(*) AS attempts,
  COUNT(*) FILTER (WHERE ma.is_correct) AS correct,
  ROUND(
    COUNT(*) FILTER (WHERE ma.is_correct)::NUMERIC / NULLIF(COUNT(*), 0) * 100
  ) AS accuracy_pct,
  AVG(ma.time_spent_ms)::INTEGER AS avg_time_ms,
  COUNT(DISTINCT q.id) AS unique_questions
FROM mcq_attempts ma
JOIN mcq_questions q ON q.id = ma.question_id
JOIN profiles p ON p.id = ma.user_id
GROUP BY ma.user_id, p.program_id, q.abai_domain, q.abai_domain_number, q.acgme_competency;

-- Spaced repetition due queue
CREATE OR REPLACE VIEW mcq_review_queue AS
SELECT
  ma.user_id,
  ma.question_id,
  q.stem,
  q.abai_domain,
  q.difficulty,
  ma.next_review_at,
  ma.review_interval_days,
  ma.ease_factor,
  ma.repetition_count
FROM mcq_attempts ma
JOIN mcq_questions q ON q.id = ma.question_id
WHERE ma.next_review_at <= now()
  AND ma.is_correct = false
  AND ma.id = (
    SELECT id FROM mcq_attempts sub
    WHERE sub.user_id = ma.user_id AND sub.question_id = ma.question_id
    ORDER BY sub.created_at DESC LIMIT 1
  )
ORDER BY ma.next_review_at ASC;

-- Custom case performance for PD analytics
CREATE OR REPLACE VIEW custom_case_performance AS
SELECT
  cc.id AS custom_case_id,
  cc.title,
  cc.specialty,
  cc.institution_id,
  cc.created_by,
  COUNT(DISTINCT ca.id) AS total_attempts,
  COUNT(DISTINCT ca.user_id) AS unique_users,
  COUNT(*) FILTER (WHERE ca.dx_correct = true) AS correct_dx,
  ROUND(
    COUNT(*) FILTER (WHERE ca.dx_correct = true)::NUMERIC /
    NULLIF(COUNT(*) FILTER (WHERE ca.dx_correct IS NOT NULL), 0) * 100
  ) AS accuracy_pct,
  AVG(ca.time_seconds)::INTEGER AS avg_time_seconds
FROM custom_cases cc
LEFT JOIN case_attempts ca ON ca.custom_case_id = cc.id
GROUP BY cc.id, cc.title, cc.specialty, cc.institution_id, cc.created_by;


-- ═══════════════════════════════════════════════════════════════
-- ROW-LEVEL SECURITY POLICIES
-- ═══════════════════════════════════════════════════════════════

ALTER TABLE custom_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE mcq_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE mcq_collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE mcq_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE mcq_shares ENABLE ROW LEVEL SECURITY;
ALTER TABLE notebooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE notebook_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE notebook_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE notebook_chats ENABLE ROW LEVEL SECURITY;

-- ─── CUSTOM CASES ───
-- Creator can do anything with their own cases
CREATE POLICY "Creator manages own cases"
  ON custom_cases FOR ALL
  USING (created_by = auth.uid());

-- PDs can manage cases in their program
CREATE POLICY "PDs manage program cases"
  ON custom_cases FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles pd
      WHERE pd.id = auth.uid()
        AND pd.role IN ('program_director', 'admin')
        AND pd.institution_id = custom_cases.institution_id
    )
  );

-- Fellows can read published cases in their institution
CREATE POLICY "Fellows read institution cases"
  ON custom_cases FOR SELECT
  USING (
    status = 'published'
    AND EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
        AND profiles.institution_id = custom_cases.institution_id
    )
  );

-- ─── MCQ QUESTIONS ───
-- Creator manages own questions
CREATE POLICY "Creator manages own MCQs"
  ON mcq_questions FOR ALL
  USING (created_by = auth.uid());

-- Users can read program-visible questions in their institution
CREATE POLICY "Users read program MCQs"
  ON mcq_questions FOR SELECT
  USING (
    visibility = 'program'
    AND EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
        AND profiles.institution_id = mcq_questions.institution_id
    )
  );

-- Users can read public questions
CREATE POLICY "Users read public MCQs"
  ON mcq_questions FOR SELECT
  USING (visibility = 'public');

-- ─── MCQ COLLECTIONS ───
CREATE POLICY "Owner manages collections"
  ON mcq_collections FOR ALL
  USING (owner_id = auth.uid());

CREATE POLICY "Users read shared collections"
  ON mcq_collections FOR SELECT
  USING (
    visibility = 'program'
    AND EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
        AND profiles.institution_id = mcq_collections.institution_id
    )
  );

-- ─── MCQ ATTEMPTS ───
CREATE POLICY "Users manage own MCQ attempts"
  ON mcq_attempts FOR ALL
  USING (user_id = auth.uid());

CREATE POLICY "PDs read program MCQ attempts"
  ON mcq_attempts FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles pd
      WHERE pd.id = auth.uid()
        AND pd.role IN ('program_director', 'admin')
        AND pd.program_id = (SELECT program_id FROM profiles WHERE id = mcq_attempts.user_id)
    )
  );

-- ─── MCQ SHARES ───
CREATE POLICY "Sharer manages shares"
  ON mcq_shares FOR ALL
  USING (shared_by = auth.uid());

CREATE POLICY "Recipients read shares"
  ON mcq_shares FOR SELECT
  USING (
    shared_with_user = auth.uid()
    OR EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
        AND profiles.institution_id = mcq_shares.shared_with_institution
    )
  );

-- ─── NOTEBOOKS ───
CREATE POLICY "Owner manages notebooks"
  ON notebooks FOR ALL
  USING (owner_id = auth.uid());

-- ─── NOTEBOOK RESOURCES ───
CREATE POLICY "Owner manages notebook resources"
  ON notebook_resources FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM notebooks
      WHERE notebooks.id = notebook_resources.notebook_id
        AND notebooks.owner_id = auth.uid()
    )
  );

-- ─── NOTEBOOK MATERIALS ───
CREATE POLICY "Owner manages notebook materials"
  ON notebook_materials FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM notebooks
      WHERE notebooks.id = notebook_materials.notebook_id
        AND notebooks.owner_id = auth.uid()
    )
  );

-- ─── NOTEBOOK CHATS ───
CREATE POLICY "Owner manages notebook chats"
  ON notebook_chats FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM notebooks
      WHERE notebooks.id = notebook_chats.notebook_id
        AND notebooks.owner_id = auth.uid()
    )
  );


-- ═══════════════════════════════════════════════════════════════
-- HELPER FUNCTIONS
-- ═══════════════════════════════════════════════════════════════

-- Update custom case attempt count on new case_attempt
CREATE OR REPLACE FUNCTION update_custom_case_stats()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.custom_case_id IS NOT NULL THEN
    UPDATE custom_cases SET
      attempt_count = attempt_count + 1,
      updated_at = now()
    WHERE id = NEW.custom_case_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_case_attempt_for_custom
  AFTER INSERT ON case_attempts
  FOR EACH ROW EXECUTE FUNCTION update_custom_case_stats();

-- Update MCQ pass/fail counts on new mcq_attempt
CREATE OR REPLACE FUNCTION update_mcq_stats()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.is_correct THEN
    UPDATE mcq_questions SET pass_count = pass_count + 1, updated_at = now()
    WHERE id = NEW.question_id;
  ELSE
    UPDATE mcq_questions SET fail_count = fail_count + 1, updated_at = now()
    WHERE id = NEW.question_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_mcq_attempt_stats
  AFTER INSERT ON mcq_attempts
  FOR EACH ROW EXECUTE FUNCTION update_mcq_stats();

-- Update notebook resource/material counts
CREATE OR REPLACE FUNCTION update_notebook_counts()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_TABLE_NAME = 'notebook_resources' THEN
    UPDATE notebooks SET resource_count = (
      SELECT COUNT(*) FROM notebook_resources WHERE notebook_id = COALESCE(NEW.notebook_id, OLD.notebook_id)
    ), updated_at = now()
    WHERE id = COALESCE(NEW.notebook_id, OLD.notebook_id);
  ELSIF TG_TABLE_NAME = 'notebook_materials' THEN
    UPDATE notebooks SET material_count = (
      SELECT COUNT(*) FROM notebook_materials WHERE notebook_id = COALESCE(NEW.notebook_id, OLD.notebook_id)
    ), updated_at = now()
    WHERE id = COALESCE(NEW.notebook_id, OLD.notebook_id);
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_notebook_resource_change
  AFTER INSERT OR DELETE ON notebook_resources
  FOR EACH ROW EXECUTE FUNCTION update_notebook_counts();

CREATE TRIGGER on_notebook_material_change
  AFTER INSERT OR DELETE ON notebook_materials
  FOR EACH ROW EXECUTE FUNCTION update_notebook_counts();

-- SM-2 spaced repetition scheduler
CREATE OR REPLACE FUNCTION calculate_next_review(
  is_correct BOOLEAN,
  current_interval INTEGER,
  current_ease NUMERIC,
  current_reps INTEGER
)
RETURNS TABLE(next_interval INTEGER, next_ease NUMERIC, next_reps INTEGER) AS $$
BEGIN
  IF is_correct THEN
    next_reps := current_reps + 1;
    next_ease := GREATEST(1.30, current_ease + 0.10);
    IF current_reps = 0 THEN
      next_interval := 1;
    ELSIF current_reps = 1 THEN
      next_interval := 3;
    ELSE
      next_interval := CEIL(current_interval * current_ease)::INTEGER;
    END IF;
  ELSE
    next_reps := 0;
    next_ease := GREATEST(1.30, current_ease - 0.20);
    next_interval := 1;
  END IF;
  RETURN NEXT;
END;
$$ LANGUAGE plpgsql IMMUTABLE;
