-- Simulation history — synced from client on case completion
-- Replaces the localStorage-only cap of 20 cases for logged-in users

CREATE TABLE IF NOT EXISTS simulation_history (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  case_id text NOT NULL,
  case_name text,
  completed_at timestamptz NOT NULL DEFAULT now(),
  turns integer,
  score numeric(5,1),
  phase_reached integer,
  time_seconds integer,
  dominant_error_mode text,
  specialty text,
  created_at timestamptz DEFAULT now()
);

-- Unique constraint: one record per user + case + completion time
-- (allows multiple attempts at same case)
CREATE UNIQUE INDEX IF NOT EXISTS simulation_history_user_case_time
  ON simulation_history (user_id, case_id, completed_at);

-- RLS: users can only see their own history
ALTER TABLE simulation_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own history"
  ON simulation_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own history"
  ON simulation_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Index for fast lookup by user
CREATE INDEX IF NOT EXISTS simulation_history_user_id_idx
  ON simulation_history (user_id, completed_at DESC);
