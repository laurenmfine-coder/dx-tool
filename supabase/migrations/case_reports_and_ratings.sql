-- Case reports (user-flagged AI responses)
CREATE TABLE IF NOT EXISTS case_reports (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  case_id text NOT NULL,
  message_text text,
  reason text,
  phase integer,
  reported_at timestamptz DEFAULT now()
);

-- Case ratings (1-5 stars after completion)
-- The upsert_case_rating RPC updates avg_rating in case_analytics
CREATE OR REPLACE FUNCTION upsert_case_rating(p_case_id text, p_rating integer)
RETURNS void LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO case_analytics (case_id, completion_count, avg_rating)
  VALUES (p_case_id, 0, p_rating)
  ON CONFLICT (case_id) DO UPDATE
    SET avg_rating = ROUND(
      (COALESCE(case_analytics.avg_rating, p_rating) * COALESCE(case_analytics.completion_count, 1) + p_rating)
      / (COALESCE(case_analytics.completion_count, 1) + 1)::numeric, 1
    );
END;
$$;
