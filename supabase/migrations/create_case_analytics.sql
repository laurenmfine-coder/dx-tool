-- ── CASE ANALYTICS TABLE ──
-- Social proof data for browse page cards.
-- Run this in Supabase SQL Editor: https://lpwbiqpojisqgezycupw.supabase.co

CREATE TABLE IF NOT EXISTS case_analytics (
  case_id           TEXT PRIMARY KEY,
  completion_count  INT DEFAULT 0,
  avg_time_seconds  INT,
  avg_rating        DECIMAL(2,1),
  last_updated      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable public read access (anon key can SELECT)
ALTER TABLE case_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access"
  ON case_analytics FOR SELECT
  USING (true);

-- Seed initial data from existing user_sessions completions (if table exists)
-- Run this AFTER the table above is created:
/*
INSERT INTO case_analytics (case_id, completion_count, avg_time_seconds, avg_rating)
SELECT
  case_id,
  COUNT(*) AS completion_count,
  AVG(time_spent_seconds)::INT AS avg_time_seconds,
  NULL AS avg_rating
FROM user_sessions
WHERE completed = true
  AND case_id IS NOT NULL
GROUP BY case_id
ON CONFLICT (case_id) DO UPDATE
  SET completion_count = EXCLUDED.completion_count,
      avg_time_seconds = EXCLUDED.avg_time_seconds,
      last_updated = NOW();
*/

-- Auto-update trigger: fires whenever user_sessions gets a completed row
-- (Only useful if user_sessions exists and has completed + case_id + time_spent_seconds columns)
/*
CREATE OR REPLACE FUNCTION update_case_analytics()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.completed = true AND NEW.case_id IS NOT NULL THEN
    INSERT INTO case_analytics (case_id, completion_count, avg_time_seconds)
    VALUES (NEW.case_id, 1, NEW.time_spent_seconds)
    ON CONFLICT (case_id) DO UPDATE
      SET completion_count = case_analytics.completion_count + 1,
          avg_time_seconds = (
            (case_analytics.avg_time_seconds * case_analytics.completion_count + EXCLUDED.avg_time_seconds)
            / (case_analytics.completion_count + 1)
          ),
          last_updated = NOW();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_case_analytics
  AFTER INSERT OR UPDATE ON user_sessions
  FOR EACH ROW EXECUTE FUNCTION update_case_analytics();
*/
