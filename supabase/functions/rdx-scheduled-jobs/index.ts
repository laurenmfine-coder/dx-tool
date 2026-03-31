/**
 * Supabase Edge Function: rdx-scheduled-jobs
 * 
 * Runs two automated jobs:
 *   1. Nightly reengagement (called by pg_cron at midnight)
 *   2. Weekly faculty digest (called by pg_cron Monday 7am)
 * 
 * DEPLOYMENT:
 * 1. supabase functions new rdx-scheduled-jobs
 * 2. Copy this to supabase/functions/rdx-scheduled-jobs/index.ts
 * 3. supabase secrets set LOOPS_WORKER_URL=https://rdx-email.laurenmfine.workers.dev
 * 4. supabase functions deploy rdx-scheduled-jobs
 * 
 * Then enable pg_cron in Supabase SQL Editor:
 *   SELECT cron.schedule('nightly-reengagement', '0 0 * * *', 
 *     $$SELECT net.http_post(
 *       url := 'https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/rdx-scheduled-jobs',
 *       headers := '{"Content-Type":"application/json","Authorization":"Bearer <ANON_KEY>"}'::jsonb,
 *       body := '{"job":"reengagement"}'::jsonb
 *     )$$
 *   );
 *   SELECT cron.schedule('weekly-faculty-digest', '0 7 * * 1',
 *     $$SELECT net.http_post(
 *       url := 'https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/rdx-scheduled-jobs',
 *       headers := '{"Content-Type":"application/json","Authorization":"Bearer <ANON_KEY>"}'::jsonb,
 *       body := '{"job":"faculty_digest"}'::jsonb
 *     )$$
 *   );
 */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL  = Deno.env.get('SUPABASE_URL')  || 'https://lpwbiqpojisqgezycupw.supabase.co';
const SUPABASE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const LOOPS_WORKER  = Deno.env.get('LOOPS_WORKER_URL') || 'https://rdx-email.laurenmfine.workers.dev';

// ── Fire event to Loops via worker ───────────────────────────────────────────
async function fireLoopsEvent(eventType: string, email: string, data: Record<string, unknown>) {
  try {
    await fetch(LOOPS_WORKER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventType, email, data }),
    });
  } catch(e) {
    console.error('Loops event failed:', e);
  }
}

// ── JOB 1: Nightly reengagement ───────────────────────────────────────────────
// Find students with sessions but inactive for 7+ days
async function runReengagement(db: ReturnType<typeof createClient>) {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // Get students who had sessions but last one was 7+ days ago
  const { data, error } = await db
    .from('rad_study_sessions')
    .select('student_id, created_at, diagnosis, category')
    .eq('status', 'complete')
    .order('created_at', { ascending: false });

  if (error || !data) {
    console.error('Reengagement query failed:', error);
    return { fired: 0, error: error?.message };
  }

  // Group by student, find last session date
  const studentMap: Record<string, { lastDate: Date; diagnosis: string; category: string }> = {};
  for (const row of data) {
    if (!studentMap[row.student_id]) {
      studentMap[row.student_id] = {
        lastDate:  new Date(row.created_at),
        diagnosis: row.diagnosis || '',
        category:  row.category  || '',
      };
    }
  }

  // Filter to students inactive 7+ days
  const inactive = Object.entries(studentMap).filter(([_, v]) => v.lastDate < sevenDaysAgo);

  console.log(`Reengagement: ${inactive.length} inactive students found`);

  let fired = 0;
  for (const [studentId, info] of inactive) {
    // studentId is email if captured correctly
    if (!studentId.includes('@')) continue; // skip non-email IDs

    await fireLoopsEvent('reengagement', studentId, {
      lastDiagnosis: info.diagnosis,
      lastSpecialty: info.category,
    });
    fired++;

    // Rate limit
    await new Promise(r => setTimeout(r, 100));
  }

  return { fired, total: inactive.length };
}

// ── JOB 2: Weekly faculty digest ──────────────────────────────────────────────
// Aggregate past week's activity and fire digest event to faculty emails
async function runFacultyDigest(db: ReturnType<typeof createClient>) {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  // Get all sessions from past week
  const { data: sessions, error } = await db
    .from('rad_study_sessions')
    .select('student_id, case_id, category, acuity, diagnosis, status, created_at, env_history_score')
    .gte('created_at', oneWeekAgo.toISOString())
    .eq('status', 'complete');

  if (error || !sessions) {
    console.error('Faculty digest query failed:', error);
    return { fired: 0, error: error?.message };
  }

  const totalSessions = sessions.length;
  const uniqueStudents = new Set(sessions.map(s => s.student_id)).size;
  const avgHistScore   = sessions.reduce((a, s) => a + (s.env_history_score || 0), 0) / (totalSessions || 1);

  // Top specialties
  const specCounts: Record<string, number> = {};
  sessions.forEach(s => { specCounts[s.category || 'unknown'] = (specCounts[s.category || 'unknown'] || 0) + 1; });
  const topSpec = Object.entries(specCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '';

  console.log(`Faculty digest: ${totalSessions} sessions, ${uniqueStudents} students`);

  // Get faculty emails from user profiles (those with role='faculty')
  const { data: faculty } = await db
    .from('user_profiles')
    .select('email')
    .eq('role', 'faculty');

  let fired = 0;
  if (faculty && faculty.length > 0) {
    for (const f of faculty) {
      if (!f.email) continue;
      await fireLoopsEvent('faculty_weekly', f.email, {
        totalSessions,
        uniqueStudents,
        avgHistoryScore: avgHistScore.toFixed(2),
        topSpecialty:    topSpec,
        weekOf:          oneWeekAgo.toISOString().slice(0, 10),
      });
      fired++;
      await new Promise(r => setTimeout(r, 100));
    }
  }

  // Always fire to Dr. Fine directly
  await fireLoopsEvent('faculty_weekly', 'lauren@mail.reasondx.com', {
    totalSessions,
    uniqueStudents,
    avgHistoryScore: avgHistScore.toFixed(2),
    topSpecialty:    topSpec,
    weekOf:          oneWeekAgo.toISOString().slice(0, 10),
  });
  fired++;

  return { fired, totalSessions, uniqueStudents };
}

// ── Main handler ──────────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { job } = await req.json();
    const db = createClient(SUPABASE_URL, SUPABASE_KEY);

    let result;
    if (job === 'reengagement') {
      result = await runReengagement(db);
    } else if (job === 'faculty_digest') {
      result = await runFacultyDigest(db);
    } else {
      return new Response(
        JSON.stringify({ error: 'Unknown job: ' + job }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, job, result }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
