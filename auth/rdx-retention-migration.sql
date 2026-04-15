-- rdx-retention-migration.sql
-- Adds email_weekly_case opt-in column to profiles
-- Run in Supabase SQL Editor

-- Add email opt-in column if not exists
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS email_weekly_case BOOLEAN DEFAULT TRUE;

-- Ensure streak and cases completed columns exist
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS streak_days INTEGER DEFAULT 0;

ALTER TABLE profiles  
ADD COLUMN IF NOT EXISTS total_cases_completed INTEGER DEFAULT 0;

ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS last_active_at TIMESTAMPTZ DEFAULT now();

-- Create index for weekly email query (users who opted in and are active)
CREATE INDEX IF NOT EXISTS idx_profiles_email_weekly 
ON profiles(email_weekly_case, last_active_at) 
WHERE email_weekly_case = TRUE;

-- View: users eligible for weekly case email
-- (opted in, have email, active in last 90 days or new)
CREATE OR REPLACE VIEW weekly_email_eligible AS
SELECT 
  p.id,
  u.email,
  p.full_name,
  p.streak_days,
  p.total_cases_completed,
  p.last_active_at,
  CASE 
    WHEN p.last_active_at < now() - interval '5 days' THEN 'lapsed'
    ELSE 'active'
  END as engagement_status
FROM profiles p
JOIN auth.users u ON u.id = p.id
WHERE p.email_weekly_case = TRUE
  AND u.email IS NOT NULL
  AND (p.last_active_at > now() - interval '90 days' OR p.total_cases_completed = 0)
ORDER BY p.last_active_at DESC;
