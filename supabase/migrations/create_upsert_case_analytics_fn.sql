-- ── UPSERT FUNCTION FOR CASE ANALYTICS ──
-- Run this in Supabase SQL Editor AFTER create_case_analytics.sql
-- This function is called by simulation-engine.html on every case completion.

CREATE OR REPLACE FUNCTION upsert_case_analytics(
  p_case_id       TEXT,
  p_time_seconds  INT
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO case_analytics (case_id, completion_count, avg_time_seconds, last_updated)
  VALUES (p_case_id, 1, p_time_seconds, NOW())
  ON CONFLICT (case_id) DO UPDATE
    SET
      completion_count = case_analytics.completion_count + 1,
      avg_time_seconds = (
        (case_analytics.avg_time_seconds * case_analytics.completion_count + p_time_seconds)
        / (case_analytics.completion_count + 1)
      ),
      last_updated = NOW();
END;
$$;

-- Allow anonymous (public) users to call this function
GRANT EXECUTE ON FUNCTION upsert_case_analytics(TEXT, INT) TO anon;
