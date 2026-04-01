-- ReasonDx: Content Feedback Table
-- Stores thumbs-up/down ratings from topic pages and modules.
-- Run in Supabase SQL Editor.

CREATE TABLE IF NOT EXISTS content_feedback (
  id            BIGSERIAL PRIMARY KEY,
  rating        TEXT NOT NULL CHECK (rating IN ('up', 'down')),
  comment       TEXT,
  topic         TEXT,
  page          TEXT,
  training_year TEXT,
  timestamp     TIMESTAMPTZ DEFAULT NOW(),
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS content_feedback_rating    ON content_feedback(rating);
CREATE INDEX IF NOT EXISTS content_feedback_topic     ON content_feedback(topic);
CREATE INDEX IF NOT EXISTS content_feedback_timestamp ON content_feedback(timestamp);

ALTER TABLE content_feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "allow_anon_insert" ON content_feedback FOR INSERT WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "allow_anon_select" ON content_feedback FOR SELECT USING (true);
