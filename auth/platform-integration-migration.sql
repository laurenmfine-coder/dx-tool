-- ReasonDx Platform Integration Migration
-- Adds columns for new data streams: readability, passive data, PE coverage, health literacy
-- Run this in Supabase SQL editor after the original rad-study-migration.sql

-- New JSONB columns for extended data streams
ALTER TABLE rad_study_sessions ADD COLUMN IF NOT EXISTS readability_summary JSONB DEFAULT NULL;
ALTER TABLE rad_study_sessions ADD COLUMN IF NOT EXISTS passive_data JSONB DEFAULT NULL;
ALTER TABLE rad_study_sessions ADD COLUMN IF NOT EXISTS pe_exam_summary JSONB DEFAULT NULL;
ALTER TABLE rad_study_sessions ADD COLUMN IF NOT EXISTS health_literacy JSONB DEFAULT NULL;
ALTER TABLE rad_study_sessions ADD COLUMN IF NOT EXISTS ddx_comparison JSONB DEFAULT NULL;

-- Relax group_code constraint for non-study cases (CRT adapter cases don't have study groups)
ALTER TABLE rad_study_sessions DROP CONSTRAINT IF EXISTS rad_study_sessions_group_code_check;
ALTER TABLE rad_study_sessions ALTER COLUMN group_code DROP NOT NULL;
ALTER TABLE rad_study_sessions ALTER COLUMN group_code SET DEFAULT 'N/A';

-- Relax report type constraints for cases without radiology reports
ALTER TABLE rad_study_sessions DROP CONSTRAINT IF EXISTS rad_study_sessions_first_report_type_check;
ALTER TABLE rad_study_sessions DROP CONSTRAINT IF EXISTS rad_study_sessions_second_report_type_check;
ALTER TABLE rad_study_sessions ALTER COLUMN first_report_type DROP NOT NULL;
ALTER TABLE rad_study_sessions ALTER COLUMN second_report_type DROP NOT NULL;

-- Add case_source column to distinguish native vs CRT-adapted cases
ALTER TABLE rad_study_sessions ADD COLUMN IF NOT EXISTS case_source TEXT DEFAULT 'native';

-- Add index on case_source for filtering
CREATE INDEX IF NOT EXISTS idx_sessions_case_source ON rad_study_sessions(case_source);

-- Rename table to reflect platform-wide usage (optional — keeps backward compat via view)
-- CREATE VIEW simulation_sessions AS SELECT * FROM rad_study_sessions;
