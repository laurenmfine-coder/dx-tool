-- =====================================================================
-- Migration: Add external_subscribers table and update weekly_email_eligible view
-- =====================================================================

CREATE TABLE IF NOT EXISTS external_subscribers (
  id          uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  email       text          NOT NULL UNIQUE,
  full_name   text,
  source      text,
  segment     text,
  email_weekly_case  boolean DEFAULT TRUE,
  subscribed_at      timestamptz DEFAULT now(),
  unsubscribed_at    timestamptz,
  notes       text
);

CREATE INDEX IF NOT EXISTS idx_ext_subs_email_active
  ON external_subscribers(email)
  WHERE email_weekly_case = TRUE AND unsubscribed_at IS NULL;

ALTER TABLE external_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "No anon access to external_subscribers" ON external_subscribers;
CREATE POLICY "No anon access to external_subscribers"
  ON external_subscribers
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

DROP VIEW IF EXISTS weekly_email_eligible;

CREATE VIEW weekly_email_eligible AS
SELECT
  p.id::text                    AS id,
  u.email                       AS email,
  p.full_name                   AS full_name,
  p.streak_days                 AS streak_days,
  p.total_cases_completed       AS total_cases_completed,
  p.last_active_at              AS last_active_at,
  CASE
    WHEN p.last_active_at < now() - interval '5 days' THEN 'lapsed'
    ELSE 'active'
  END                           AS engagement_status,
  'platform'::text              AS source
FROM profiles p
JOIN auth.users u ON u.id = p.id
WHERE p.email_weekly_case = TRUE
  AND u.email IS NOT NULL
  AND (p.last_active_at > now() - interval '90 days' OR p.total_cases_completed = 0)
UNION ALL
SELECT
  e.id::text                    AS id,
  e.email                       AS email,
  e.full_name                   AS full_name,
  0                             AS streak_days,
  0                             AS total_cases_completed,
  e.subscribed_at               AS last_active_at,
  'active'::text                AS engagement_status,
  COALESCE(e.source, 'external')::text  AS source
FROM external_subscribers e
WHERE e.email_weekly_case = TRUE
  AND e.unsubscribed_at IS NULL;

INSERT INTO external_subscribers (email, full_name, source, segment) VALUES
  ('mynvuu@gmail.com',                    'Mynvuu',                'flodesk', 'Waitlist-General'),
  ('elizabeth.prabhakar@brunel.ac.uk',    'Elizabeth Prabhakar',   'flodesk', 'Waitlist-General'),
  ('azharud2@msu.edu',                    'Osman Azharudin',       'flodesk', 'Waitlist-General'),
  ('chayab580@gmail.com',                 'Chaya',                 'flodesk', 'Waitlist-General'),
  ('mccartney.holeman01@utrgv.edu',       'McCartney Holeman',     'flodesk', 'Beta Applicants'),
  ('eluozodaniella@gmail.com',            'Daniella Eluozo',       'flodesk', 'Beta Applicants'),
  ('laurenbrick1209@gmail.com',           'Lauren Brick',          'flodesk', 'Beta Testers'),
  ('kishaninjmu2023@gmail.com',           'Kishani Ketheeswaran',  'flodesk', 'Waitlist-General'),
  ('patriciamadel@yahoo.com',             'Patricia Madel',        'flodesk', 'Beta Applicants'),
  ('janeharrington1@gmail.com',           'Jane Harrington',       'flodesk', 'Beta Applicants'),
  ('leah.bush@pennmedicine.upenn.edu',    'Leah Bush',             'flodesk', 'Beta Testers'),
  ('michaeladpas@gmail.com',              'Michaela',              'flodesk', 'Beta Applicants'),
  ('afitzgerald@ksu.edu',                 'Amy Fitzgerald',        'flodesk', 'Beta Applicants'),
  ('mm4229@nova.edu',                     'Mariapia',              'flodesk', 'Beta Applicants'),
  ('mromer31@jhu.edu',                    'Marysol Romero',        'flodesk', 'Beta Applicants'),
  ('okechukwuvictor5567@gmail.com',       'Victor Chukwuebuka',    'flodesk', 'Beta Applicants'),
  ('hp616@mynsu.nova.edu',                'Hrishi',                'flodesk', 'Beta Testers'),
  ('alanpatrus@yahoo.com',                'Alan Patrus',           'flodesk', 'Beta Applicants'),
  ('chiomaemeka97@gmail.com',             'Chioma Emeka',          'flodesk', 'Beta Applicants'),
  ('laurenmfine@gmail.com',               'Lauren',                'flodesk', 'Beta Applicants'),
  ('macberry2@gmail.com',                 'Andi',                  'flodesk', 'Beta Applicants'),
  ('kmotazedian@tulane.edu',              'Khashaiar Motazedian',  'flodesk', 'Beta Applicants'),
  ('tina.on.earth@gmail.com',             'Tina Nguyen',           'flodesk', 'Beta Applicants'),
  ('suzanneriskin@yahoo.com',             'Suzanne Riskin',        'flodesk', 'Beta Applicants'),
  ('lawade523@gmail.com',                 'Lauren Wade',           'flodesk', 'Beta Applicants'),
  ('as.dasher@outlook.com',               'Angel Dasher',          'flodesk', 'Beta Applicants'),
  ('em.morganyoung@gmail.com',            'Emily Morgan-Young',    'flodesk', 'Beta Applicants'),
  ('jalpacp@gmail.com',                   'Jalpa',                 'flodesk', 'Beta Applicants')
ON CONFLICT (email) DO NOTHING;
