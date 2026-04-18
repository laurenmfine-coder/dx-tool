// supabase/functions/notify-faculty-submission/index.ts
// Sends an email to a faculty member when a student submits work for grading.
//
// Deploy:   supabase functions deploy notify-faculty-submission
// Trigger:  Call from client after successful EMR note submission:
//   supabase.functions.invoke('notify-faculty-submission', {
//     body: { studentName, studentEmail, caseName, caseId, facultyEmail, facultyName }
//   })
//
// Required secrets:
//   supabase secrets set RESEND_API_KEY=re_xxxxxxxx

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') || '';
const FROM_EMAIL = 'ReasonDx <notifications@reasondx.com>';

interface Payload {
  studentName: string;
  studentEmail: string;
  caseName: string;
  caseId: string;
  facultyEmail: string;
  facultyName?: string;
  noteWordCount?: number;
  submittedAt?: string;
}

function buildEmailHtml(p: Payload): string {
  const greeting = p.facultyName ? `Hi ${p.facultyName.split(' ')[0]},` : 'Hi,';
  const submitted = p.submittedAt
    ? new Date(p.submittedAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })
    : 'just now';
  const wordCount = p.noteWordCount ? `${p.noteWordCount} words` : '';
  const gradeUrl = `https://reasondx.com/faculty-dashboard.html`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F0F4F8;font-family:-apple-system,'DM Sans',sans-serif">
  <div style="max-width:560px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1B4F72,#2874A6);padding:28px 32px">
      <div style="font-size:22px;font-weight:800;color:#fff;letter-spacing:-.3px">ReasonDx</div>
      <div style="font-size:13px;color:rgba(255,255,255,.7);margin-top:4px">Faculty Notification</div>
    </div>
    <!-- Body -->
    <div style="padding:28px 32px">
      <p style="font-size:15px;color:#1E293B;margin:0 0 16px">${greeting}</p>
      <p style="font-size:15px;color:#475569;line-height:1.6;margin:0 0 24px">
        <strong style="color:#1E293B">${p.studentName}</strong> just submitted a note for grading.
      </p>
      <!-- Summary card -->
      <div style="background:#F7F9FC;border-radius:12px;padding:20px 24px;margin-bottom:24px;border:1px solid #E2E8F0">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div>
            <div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">Student</div>
            <div style="font-size:14px;font-weight:600;color:#1E293B">${p.studentName}</div>
            <div style="font-size:12px;color:#64748B">${p.studentEmail}</div>
          </div>
          <div>
            <div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">Case</div>
            <div style="font-size:14px;font-weight:600;color:#1E293B">${p.caseName}</div>
            ${wordCount ? `<div style="font-size:12px;color:#64748B">${wordCount}</div>` : ''}
          </div>
        </div>
        <div style="margin-top:12px;padding-top:12px;border-top:1px solid #E2E8F0">
          <div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">Submitted</div>
          <div style="font-size:13px;color:#475569">${submitted}</div>
        </div>
      </div>
      <!-- CTA -->
      <a href="${gradeUrl}" style="display:block;background:#2874A6;color:#fff;border-radius:10px;padding:14px 24px;font-size:15px;font-weight:700;text-decoration:none;text-align:center;margin-bottom:16px">
        Review & Grade →
      </a>
      <p style="font-size:12px;color:#94A3B8;text-align:center;margin:0">
        Log in to your Faculty Dashboard to annotate and share feedback.
      </p>
    </div>
    <!-- Footer -->
    <div style="padding:16px 32px;border-top:1px solid #F1F5F9;text-align:center">
      <p style="font-size:11px;color:#CBD5E1;margin:0">ReasonDx · reasondxeducation@gmail.com · <a href="https://reasondx.com" style="color:#CBD5E1">reasondx.com</a></p>
    </div>
  </div>
</body>
</html>`;
}

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const payload: Payload = await req.json();

    if (!payload.facultyEmail || !payload.studentName || !payload.caseName) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400, headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not set — email not sent');
      return new Response(JSON.stringify({ sent: false, reason: 'no_api_key' }), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      });
    }

    const subject = `${payload.studentName} submitted "${payload.caseName}" for grading`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: payload.facultyEmail,
        subject,
        html: buildEmailHtml(payload)
      })
    });

    const result = await res.json();

    if (!res.ok) {
      console.error('Resend error:', result);
      return new Response(JSON.stringify({ sent: false, error: result }), {
        status: 500, headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ sent: true, id: result.id }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });

  } catch (e) {
    console.error('Function error:', e);
    return new Response(JSON.stringify({ sent: false, error: String(e) }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
});
