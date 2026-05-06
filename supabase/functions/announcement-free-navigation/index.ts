// supabase/functions/announcement-free-navigation/index.ts
//
// One-time announcement email about the EMR free-navigation change
// shipped April 30 2026. Off-cycle from the regular Mon/Wed sends.
//
// SAFETY: this function REQUIRES confirm_send: true in the request
// body for live sends. Malformed bodies and bodies missing the flag
// produce a clear error response, never a silent fall-through to
// live send.
//
// Deploy:
//   supabase functions deploy announcement-free-navigation
//
// Dry run (returns recipient count, no email sent):
//   curl -X POST <url> -H "Authorization: Bearer <anon>" \
//     -H "Content-Type: application/json" \
//     -d '{"dry_run": true}'
//
// Test send to one address:
//   curl ... -d '{"test_email": "you@example.com"}'
//
// LIVE send to all weekly_email_eligible — explicit confirm required:
//   curl ... -d '{"confirm_send": true}'

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') || '';
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const FROM_EMAIL = 'Lauren Fine, MD <cases@reasondx.com>';
const REPLY_TO = 'ReasonDxeducation@gmail.com';

function buildHtml(user: any): string {
  const firstName = user.full_name?.split(" ")[0] || "there";
  const utm = (medium: string) => `utm_source=email&utm_medium=${medium}&utm_campaign=free_nav_may1`;

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>You can now reason however you want</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Helvetica,Arial,sans-serif">
<div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden">

  <div style="background:linear-gradient(135deg,#1f5f8b,#2874a6);padding:32px 40px;text-align:center">
    <div style="font-family:Georgia,serif;font-size:22px;color:#fff;font-weight:400">ReasonDx</div>
    <div style="font-size:11px;color:rgba(255,255,255,0.75);letter-spacing:1px;text-transform:uppercase;margin-top:4px">A note from Lauren</div>
  </div>

  <div style="padding:40px 40px 36px">

    <p style="font-size:16px;color:#1e293b;margin:0 0 20px;line-height:1.6">Hi ${firstName},</p>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 18px">
      One of you told me something I needed to hear: ReasonDx wasn't letting you reason the way you actually reason.
    </p>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 18px">
      Up until now, the cases moved through fixed phases. You had to read the chart, then interview the patient, then build a differential, and only then could you place orders. The order was enforced. You couldn't jump ahead.
    </p>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 18px">
      That's not how clinicians think. We form hypotheses early. We get curious about a vital sign and want to chase it. We hear something in the history that makes us reach for a specific lab. The fixed sequence was making the platform feel less like medicine and more like a workflow tool.
    </p>

    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:22px 24px;margin:24px 0 22px">
      <div style="font-family:Georgia,serif;font-size:17px;color:#0f172a;font-weight:600;margin-bottom:10px">What changed</div>
      <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 10px">
        Every part of the EMR is now reachable from the moment you open a case. You can place orders before the interview. You can build a differential before reading the chart. You can write the note first if you want to.
      </p>
      <p style="font-size:14px;color:#475569;line-height:1.7;margin:0">
        The workflow bar at the top still suggests a sequence as a coaching cue, because for some learners that scaffolding helps. But it's no longer a wall. Click anywhere, in any order.
      </p>
    </div>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 18px">
      One thing the change did NOT touch: order safety. If you order something that would harm the patient (a contraindicated drug, a dangerous interaction), the platform will still flag it and ask you to confirm. That's clinical safety, not workflow, and it stays.
    </p>

    <div style="background:#f0f9ff;border-left:4px solid #2874a6;padding:18px 22px;margin:24px 0">
      <p style="font-size:13px;color:#0c4a6e;line-height:1.65;margin:0">
        <strong>For the educators on this list:</strong> the reasoning fingerprint now captures something it couldn't before. When a student orders troponin before taking a chest-pain history, that pattern shows up. When a student updates their differential after a new lab, that updates. The data is richer because the path is no longer constrained.
      </p>
    </div>

    <a href="https://reasondx.com/browse.html?${utm('open_a_case')}" style="display:inline-block;background:#2874a6;color:#fff;padding:12px 28px;border-radius:8px;font-weight:600;font-size:14px;text-decoration:none;margin:8px 0 24px">Open a case →</a>

    <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 4px">
      Try a case the way you'd actually approach it. If something feels off about the new flow, hit reply and tell me. I read every email.
    </p>

    <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 28px">
      Lauren
    </p>

    <div style="border-top:1px solid #e2e8f0;padding-top:18px;font-size:12px;color:#94a3b8;line-height:1.6">
      Lauren Fine, MD &middot; Founder, ReasonDx<br>
      Reply to this email anytime.
    </div>

  </div>
</div>
</body></html>`;
}

async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [to],
        reply_to: REPLY_TO,
        subject,
        html
      })
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error(`Send failed for ${to}: ${res.status} ${errText}`);
      return false;
    }
    const data = await res.json();
    console.log(`Sent to ${to}: ${data.id}`);
    return true;
  } catch (e) {
    console.error(`Error for ${to}:`, e);
    return false;
  }
}

Deno.serve(async (req) => {
  // FAIL-CLOSED body parsing. If the body fails to parse, we return an
  // error rather than silently treating it as a live send. This is the
  // pattern the announcement-whats-new-apr30 function lacked.
  let body: any = {};
  if (req.method === "POST") {
    const raw = await req.text();
    if (raw && raw.trim()) {
      try {
        body = JSON.parse(raw);
      } catch (e) {
        return new Response(
          JSON.stringify({
            error: "Could not parse request body as JSON. Refusing to proceed.",
            hint: "Send {\"dry_run\":true} to preview, or {\"confirm_send\":true} to send live.",
            raw_body_preview: raw.slice(0, 200)
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }
  }

  const testEmail = body?.test_email || null;
  const dryRun = body?.dry_run === true;
  const confirmSend = body?.confirm_send === true;
  const extraEmails: Array<{email: string, full_name?: string}> =
    Array.isArray(body?.extra_emails)
      ? body.extra_emails.map((e: any) => typeof e === 'string' ? { email: e } : e)
      : [];

  // Live send REQUIRES explicit confirmation. If neither dry_run nor
  // test_email nor confirm_send is set, we refuse rather than fall
  // through to a live broadcast.
  if (!dryRun && !testEmail && !confirmSend) {
    return new Response(
      JSON.stringify({
        error: "Refusing to send. Set one of: dry_run, test_email, or confirm_send.",
        hint: "Live sends require {\"confirm_send\":true} to be set explicitly."
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  let users: any[] = [];
  if (testEmail) {
    users = [{ email: testEmail, full_name: "Test User" }];
  } else {
    const { data, error } = await supabase.from("weekly_email_eligible").select("*");
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    users = data || [];

    const existingEmails = new Set(users.map(u => u.email?.toLowerCase()));
    for (const extra of extraEmails) {
      if (extra.email && !existingEmails.has(extra.email.toLowerCase())) {
        users.push({
          email: extra.email,
          full_name: extra.full_name || extra.email.split('@')[0]
        });
        existingEmails.add(extra.email.toLowerCase());
      }
    }
  }

  if (dryRun) {
    return new Response(
      JSON.stringify({
        dryRun: true,
        would_send: users.length,
        sample_recipients: users.slice(0, 8).map(u => u.email)
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  const subject = "You can now reason however you want";

  let sent = 0, failed = 0;
  for (const user of users) {
    const success = await sendEmail(user.email, subject, buildHtml(user));
    if (success) sent++; else failed++;
    await new Promise(r => setTimeout(r, 100));
  }

  return new Response(
    JSON.stringify({
      success: true,
      sent,
      failed,
      total: users.length,
      mode: testEmail ? "test" : "live"
    }),
    { headers: { "Content-Type": "application/json" } }
  );
});
