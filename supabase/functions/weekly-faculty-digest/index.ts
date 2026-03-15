// Supabase Edge Function: weekly-faculty-digest
// Sends every faculty member a digest of their cohort's CoachDx activity
// from the past 7 days: top gap topics, session counts, new student activity.
//
// DEPLOYMENT:
//   supabase functions new weekly-faculty-digest
//   # Paste this file into supabase/functions/weekly-faculty-digest/index.ts
//   supabase secrets set RESEND_API_KEY=re_xxxxxxxx
//   supabase functions deploy weekly-faculty-digest
//
// SCHEDULE (run every Monday 7am ET):
//   In Supabase Dashboard → Edge Functions → weekly-faculty-digest → Schedule
//   Cron: 0 12 * * 1    (12:00 UTC = 7:00 AM ET, every Monday)
//
// TABLES USED:
//   analytics_events  — coach_no_match, coach_session_start, session_start
//   emr_assignments   — faculty_email → student_email mappings
//   emr_users         — display names, emails, roles
//
// EMAIL PROVIDER: Resend (https://resend.com) — free tier: 3,000 emails/month
// Replace with SendGrid or AWS SES if preferred; only the send() call changes.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') ?? '';
const SUPABASE_URL   = Deno.env.get('SUPABASE_URL') ?? '';
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
const FROM_EMAIL = 'ReasonDx <digest@reasondx.com>';

interface GapTopic { topic: string; count: number; }
interface DigestData {
  facultyName: string;
  facultyEmail: string;
  students: string[];
  totalSessions: number;
  coachSessions: number;
  newStudents: number;
  gapTopics: GapTopic[];
  weekStart: string;
  weekEnd: string;
}

serve(async (req) => {
  // Allow manual trigger via POST with optional { faculty_email } filter
  const body = req.method === 'POST' ? await req.json().catch(() => ({})) : {};
  const filterEmail: string | null = body.faculty_email ?? null;

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  // ── Date range: last 7 days ───────────────────────────────────────────────
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const weekStart = weekAgo.toISOString();
  const weekEnd = now.toISOString();
  const weekStartLabel = weekAgo.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const weekEndLabel = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // ── Get all faculty members ───────────────────────────────────────────────
  const { data: faculty, error: facErr } = await supabase
    .from('emr_users')
    .select('email, display_name')
    .eq('role', 'faculty')
    .order('email');

  if (facErr || !faculty?.length) {
    return new Response(JSON.stringify({ error: 'No faculty found', detail: facErr }), { status: 200 });
  }

  const targetFaculty = filterEmail
    ? faculty.filter(f => f.email === filterEmail)
    : faculty;

  const results: { email: string; status: string }[] = [];

  for (const fac of targetFaculty) {
    // ── Get this faculty's assigned students ─────────────────────────────
    const { data: assignments } = await supabase
      .from('emr_assignments')
      .select('student_email')
      .eq('faculty_email', fac.email);

    const studentEmails = (assignments ?? []).map((a: any) => a.student_email);

    // ── Query analytics_events for these students ─────────────────────────
    // All events in the past 7 days
    let eventsQuery = supabase
      .from('analytics_events')
      .select('event_type, metadata, user_id, created_at')
      .gte('created_at', weekStart)
      .lte('created_at', weekEnd);

    // If faculty has assigned students, filter to those users
    // Otherwise show platform-wide data (useful for Lauren reviewing all)
    const { data: events } = studentEmails.length > 0
      ? await eventsQuery.in('user_id', studentEmails)
      : await eventsQuery.limit(500);

    const allEvents = events ?? [];

    // ── Compute digest metrics ────────────────────────────────────────────
    const sessionEvents = allEvents.filter((e: any) => e.event_type === 'session_start');
    const coachEvents   = allEvents.filter((e: any) => e.event_type === 'coach_session_start');
    const gapEvents     = allEvents.filter((e: any) => e.event_type === 'coach_no_match');

    // Top gap topics
    const topicFreq: Record<string, number> = {};
    gapEvents.forEach((e: any) => {
      const topic = e.metadata?.topic || e.metadata?.query || 'Unknown topic';
      topicFreq[topic] = (topicFreq[topic] ?? 0) + 1;
    });
    const gapTopics: GapTopic[] = Object.entries(topicFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([topic, count]) => ({ topic, count }));

    // Unique active students this week
    const activeUids = new Set(allEvents.map((e: any) => e.user_id));

    // New students (accounts created in past 7 days) — best effort
    const { count: newStudents } = await supabase
      .from('emr_users')
      .select('email', { count: 'exact', head: true })
      .eq('role', 'student')
      .gte('created_at', weekStart);

    const digest: DigestData = {
      facultyName:   fac.display_name || fac.email.split('@')[0],
      facultyEmail:  fac.email,
      students:      studentEmails,
      totalSessions: sessionEvents.length,
      coachSessions: coachEvents.length,
      newStudents:   newStudents ?? 0,
      gapTopics,
      weekStart: weekStartLabel,
      weekEnd: weekEndLabel,
    };

    // Skip if nothing happened — no events, no gap topics
    if (digest.totalSessions === 0 && digest.coachSessions === 0 && digest.gapTopics.length === 0) {
      results.push({ email: fac.email, status: 'skipped_no_activity' });
      continue;
    }

    // ── Send email via Resend ─────────────────────────────────────────────
    const html = buildEmailHtml(digest);
    const sendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [fac.email],
        subject: `ReasonDx Weekly Digest — ${weekStartLabel}–${weekEndLabel}`,
        html,
      }),
    });

    const sendData = await sendResp.json();
    results.push({
      email: fac.email,
      status: sendResp.ok ? 'sent' : `error: ${sendData.message ?? 'unknown'}`,
    });
  }

  return new Response(JSON.stringify({ sent: results.length, results }), {
    headers: { 'Content-Type': 'application/json' },
  });
});

// ── HTML EMAIL TEMPLATE ───────────────────────────────────────────────────────
function buildEmailHtml(d: DigestData): string {
  const gapRowsHtml = d.gapTopics.length > 0
    ? d.gapTopics.map((g, i) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #F1F5F9;font-size:14px;color:#1E293B">
            <span style="display:inline-block;width:22px;height:22px;background:#EBF4FB;border-radius:50%;text-align:center;line-height:22px;font-size:11px;font-weight:700;color:#2874A6;margin-right:8px">${i + 1}</span>
            ${escHtml(g.topic)}
          </td>
          <td style="padding:10px 16px;border-bottom:1px solid #F1F5F9;font-size:14px;font-weight:700;color:#DC2626;text-align:right;white-space:nowrap">${g.count} search${g.count !== 1 ? 'es' : ''}</td>
        </tr>`).join('')
    : `<tr><td colspan="2" style="padding:16px;text-align:center;color:#94A3B8;font-size:13px">No gap topics recorded this week</td></tr>`;

  const noActivityNote = d.totalSessions === 0
    ? `<p style="font-size:13px;color:#94A3B8;text-align:center;margin-top:12px">No sessions recorded this week — data will appear here as students use the platform.</p>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>ReasonDx Weekly Digest</title>
</head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:'Segoe UI',Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:32px 16px">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#1B4F72,#2874A6);border-radius:12px 12px 0 0;padding:28px 32px">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <div style="display:inline-block;background:rgba(255,255,255,.2);border-radius:8px;width:32px;height:32px;text-align:center;line-height:32px;font-size:14px;font-weight:700;color:#fff;font-family:Georgia,serif;vertical-align:middle;margin-right:10px">Rx</div>
          <span style="font-size:18px;font-weight:700;color:#fff;vertical-align:middle">ReasonDx</span>
          <span style="font-size:12px;color:rgba(255,255,255,.7);margin-left:8px;vertical-align:middle">Faculty Digest</span>
        </td>
        <td align="right" style="font-size:12px;color:rgba(255,255,255,.75)">${escHtml(d.weekStart)} – ${escHtml(d.weekEnd)}</td>
      </tr>
    </table>
    <div style="margin-top:16px;font-size:22px;font-weight:700;color:#fff">Good morning, ${escHtml(d.facultyName.split(' ')[0])}.</div>
    <div style="margin-top:6px;font-size:14px;color:rgba(255,255,255,.8);line-height:1.5">Here's what your students worked on in ReasonDx this week.</div>
  </td></tr>

  <!-- Stats row -->
  <tr><td style="background:#fff;padding:24px 32px 8px;border-left:1px solid #E2E8F0;border-right:1px solid #E2E8F0">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="33%" style="text-align:center;padding:12px 8px;background:#F8FAFC;border-radius:10px;margin-right:8px">
          <div style="font-size:28px;font-weight:700;color:#2874A6;font-family:'Courier New',monospace">${d.totalSessions}</div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748B;margin-top:4px">Case sessions</div>
        </td>
        <td width="4px"></td>
        <td width="33%" style="text-align:center;padding:12px 8px;background:#F8FAFC;border-radius:10px">
          <div style="font-size:28px;font-weight:700;color:#0D7A67;font-family:'Courier New',monospace">${d.coachSessions}</div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748B;margin-top:4px">CoachDx sessions</div>
        </td>
        <td width="4px"></td>
        <td width="33%" style="text-align:center;padding:12px 8px;background:#F8FAFC;border-radius:10px">
          <div style="font-size:28px;font-weight:700;color:#7C3AED;font-family:'Courier New',monospace">${d.gapTopics.length}</div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748B;margin-top:4px">Gap topics found</div>
        </td>
      </tr>
    </table>
    ${noActivityNote}
  </td></tr>

  <!-- Gap topics table -->
  <tr><td style="background:#fff;padding:8px 32px 24px;border-left:1px solid #E2E8F0;border-right:1px solid #E2E8F0">
    <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748B;margin-bottom:12px;padding-top:16px;border-top:1px solid #F1F5F9">
      ⚠️ Top CoachDx gap topics — build these cases next
    </div>
    <div style="font-size:12px;color:#94A3B8;margin-bottom:12px">Topics your students searched in CoachDx with no matching module, ranked by frequency.</div>
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:8px;overflow:hidden">
      <tr style="background:#F8FAFC">
        <td style="padding:8px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748B">Topic</td>
        <td style="padding:8px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748B;text-align:right">Searches</td>
      </tr>
      ${gapRowsHtml}
    </table>
  </td></tr>

  <!-- CTA -->
  <tr><td style="background:#fff;padding:0 32px 28px;border-left:1px solid #E2E8F0;border-right:1px solid #E2E8F0">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#EBF5FB;border-radius:10px;padding:16px">
      <tr>
        <td style="padding:0 0 0 16px">
          <div style="font-size:14px;font-weight:600;color:#1B4F72;margin-bottom:4px">View the full coverage map</div>
          <div style="font-size:12px;color:#2874A6">Live Supabase data — usage vs blueprint, all 191 cases</div>
        </td>
        <td align="right" style="padding:0 16px 0 0;white-space:nowrap">
          <a href="https://reasondx.com/faculty-dashboard.html" style="display:inline-block;background:#2874A6;color:#fff;text-decoration:none;padding:10px 18px;border-radius:8px;font-size:13px;font-weight:700">Open Dashboard →</a>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#F8FAFC;border:1px solid #E2E8F0;border-top:none;border-radius:0 0 12px 12px;padding:20px 32px;text-align:center">
    <div style="font-size:12px;color:#94A3B8;line-height:1.6">
      ReasonDx · Lauren Fine, MD, FAAAAI · NSU Dr. Kiran C. Patel College of Allopathic Medicine<br>
      <a href="https://reasondx.com/faculty-dashboard.html" style="color:#2874A6;text-decoration:none">Faculty Dashboard</a> ·
      <a href="mailto:lauren@reasondx.com?subject=Unsubscribe+from+digest" style="color:#94A3B8;text-decoration:none">Unsubscribe</a>
    </div>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function escHtml(s: string): string {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
