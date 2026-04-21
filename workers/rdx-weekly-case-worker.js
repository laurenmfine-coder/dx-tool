/**
 * rdx-weekly-case-worker.js
 * Cloudflare Worker — sends weekly clinical reasoning case emails
 * Runs Monday and Thursday at 12:00 PM ET (17:00 UTC)
 *
 * Deploy:  wrangler deploy --config wrangler-weekly.toml
 * Secrets: wrangler secret put RESEND_API_KEY
 *          wrangler secret put SUPABASE_ANON_KEY
 *
 * Case rotation: 20 cases, cycles by send count stored in KV (or date-seeded)
 * Each send uses the next case in sequence, Monday and Thursday alternating.
 */

const SUPABASE_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';
const FROM_EMAIL   = 'ReasonDx <cases@reasondx.com>';
const REPLY_TO     = 'cases@reasondx.com';

// ── CASE ROTATION ────────────────────────────────────────────────────────────
// 20 cases — cycles every 10 weeks (Mon + Thu = 2 sends/week)
// To add more cases: append to this array. Tokens never change.
const WEEKLY_CASES = [
  {
    slug:      'unstable-angina',
    token:     '0635-3b52',
    title:     'The Chart That Finally Tells the Story',
    narrative: 'A 66-year-old man has been seen three times in the past year for chest pain. Each time, he was told everything looked fine. He\'s back today — this time, he mentions it happens when he\'s working in his garden or climbing stairs, and goes away when he sits down.',
    challenge: 'What does the pattern of visits — and that one detail he just mentioned — tell you that the previous workups missed?',
  },
  {
    slug:      'pe-v1',
    token:     '1564-8611',
    title:     'The Shortness of Breath Everyone Missed',
    narrative: 'A 34-year-old woman comes in with two weeks of worsening shortness of breath. She saw her primary care doctor last week — the chest X-ray was normal, and she was told it was probably anxiety. She doesn\'t look anxious.',
    challenge: 'What finding on her history makes you want to look harder — and what are you ordering first?',
  },
  {
    slug:      'dka-v1',
    token:     '4fda-d4d5',
    title:     'The Patient Who Stopped Eating',
    narrative: 'A 19-year-old college student is brought in by his roommate. He hasn\'t eaten in two days, has been drinking water constantly, and this morning couldn\'t get out of bed. His breath smells faintly sweet.',
    challenge: 'Before you even look at the labs, what is your leading diagnosis — and what single test confirms it fastest?',
  },
  {
    slug:      'septic-shock-urosepsis',
    token:     '3074-a1a5',
    title:     'The Fever That Wouldn\'t Break',
    narrative: 'A 72-year-old woman with a history of recurrent UTIs comes in with three days of fever, chills, and confusion. Her family says she \'just isn\'t herself.\' Her blood pressure in triage is 88/54.',
    challenge: 'Her BP is already low. What are your first three orders — and what are you doing in the next 60 minutes?',
  },
  {
    slug:      'stroke-v1',
    token:     'b580-efc7',
    title:     'The Arm That Went Weak',
    narrative: 'A 68-year-old man is brought in by his wife at 9am. She says he woke up fine, but at breakfast his right arm felt weak and he couldn\'t find his words. It\'s been about 45 minutes. He looks frightened.',
    challenge: 'The clock is running. What is your immediate priority — and what information determines your treatment options?',
  },
  {
    slug:      'acute-aortic-dissection',
    token:     'abdb-e42a',
    title:     'The Pain That Tore Through',
    narrative: 'A 58-year-old man with a history of hypertension describes the worst pain of his life — sudden, tearing, radiating from his chest straight through to his back. His blood pressure is 186/104 in the right arm. You check the left arm.',
    challenge: 'What are you looking for on that second BP reading — and what does it change about your next steps?',
  },
  {
    slug:      'sah-v1',
    token:     'd38a-d433',
    title:     'The Worst Headache of Her Life',
    narrative: 'A 44-year-old woman calls it a 10 out of 10. She\'s never had a headache like this before. It came on in seconds while she was laughing at something on TV. She has no focal neurological deficits.',
    challenge: 'She looks okay right now. Why does that not reassure you — and what is your diagnostic plan?',
  },
  {
    slug:      'acute-cholecystitis',
    token:     '98f0-4237',
    title:     'The Pain That Keeps Coming Back',
    narrative: 'A 52-year-old woman comes in with RUQ pain that has sent her to urgent care twice in the past month. Both times she was told it was probably GI and sent home with antacids. This time, she has a fever of 38.6 and her abdomen is tender on inspiration.',
    challenge: 'What physical exam finding are you looking for — and what does it tell you that the previous workups missed?',
  },
  {
    slug:      'meningitis-v1',
    token:     'f871-bd94',
    title:     'The Headache With a Fever',
    narrative: 'A 21-year-old college student is brought in by his roommate with a severe headache, fever of 39.8, and sensitivity to the lights in the ED. He had a stiff neck this morning. He looks ill.',
    challenge: 'What are you doing in the next five minutes — and what is the one thing you must not delay?',
  },
  {
    slug:      'pericarditis-v1',
    token:     'de9b-2dd3',
    title:     'The Chest Pain That Changes With Position',
    narrative: 'A 26-year-old medical student comes in with two days of sharp chest pain. He mentions it\'s worse when he lies flat and better when he leans forward. He had a viral illness last week. His ECG shows diffuse ST elevation.',
    challenge: 'What pattern on the ECG distinguishes this from a STEMI — and how does that change your management?',
  },
  {
    slug:      'acute-coronary-syndrome',
    token:     '873e-0c58',
    title:     'The Dyspnea That Was Really Angina',
    narrative: 'A 67-year-old woman with diabetes comes in short of breath. No chest pain. She looks diaphoretic and her SpO2 is 94%. Her ECG shows ST depression in V4-V6. Her troponin is pending.',
    challenge: 'Why does the absence of chest pain make this more dangerous — and what pattern should you never miss in diabetic patients?',
  },
  {
    slug:      'acute-mi',
    token:     '4cd7-5b01',
    title:     'The Blood Pressure That Bottomed Out',
    narrative: 'A 68-year-old man comes in with crushing chest pain and severe shortness of breath. His BP is 76/50. His ECG shows ST elevation V1-V5. He is diaphoretic and barely responsive to questions.',
    challenge: 'You have minutes. What are your simultaneous priorities — and what single intervention has the most impact on his survival?',
  },
  {
    slug:      'alcohol-withdrawal-seizures',
    token:     'cfc6-2520',
    title:     'The Seizure on Day Two',
    narrative: 'A 45-year-old man was admitted yesterday for alcohol detox. He was doing well on the CIWA protocol. This morning, he has a witnessed generalized tonic-clonic seizure. His last drink was 48 hours ago.',
    challenge: 'What is driving this seizure — and how does your management differ from a first-time unprovoked seizure?',
  },
  {
    slug:      'acute-ischemic-stroke',
    token:     'dfe1-5e24',
    title:     'The Patient Who Woke Up Wrong',
    narrative: 'A 74-year-old woman is brought in by her husband. She woke up this morning unable to speak clearly and with weakness on her right side. He\'s not sure exactly when it started — she was fine when he went to bed at 11pm.',
    challenge: 'Last-known-well is 11pm. It\'s 7am. Does that close the treatment window — or open a different one?',
  },
  {
    slug:      'thyroid-storm',
    token:     '3844-2ddb',
    title:     'The Heart That Wouldn\'t Slow Down',
    narrative: 'A 38-year-old woman comes in with a heart rate of 148, fever of 39.4, and agitation. She mentions she ran out of her thyroid medication three weeks ago. She looks tremulous and her eyes appear prominent.',
    challenge: 'What is the single most dangerous complication you\'re trying to prevent in the next hour — and what are your first four orders?',
  },
  {
    slug:      'hyperkalemia-cardiac',
    token:     'b80b-842c',
    title:     'The Weakness That Showed Up on the ECG',
    narrative: 'A 62-year-old man on dialysis missed his last two sessions. He comes in weak and short of breath. His ECG shows peaked T waves and a widened QRS. His potassium is 7.2.',
    challenge: 'The ECG changes tell you something more urgent than the potassium level alone. What are they — and what is your first intervention?',
  },
  {
    slug:      'acute-pancreatitis',
    token:     '32e3-db49',
    title:     'The Epigastric Pain That Radiated Through',
    narrative: 'A 42-year-old man with a history of alcohol use comes in with severe epigastric pain radiating to his back, nausea, and vomiting. He describes it as the worst abdominal pain he\'s ever had. His lipase comes back at 4,800.',
    challenge: 'The diagnosis is clear. Now — what is the most important early management decision, and what are you watching for in the first 48 hours?',
  },
  {
    slug:      'cardiac-tamponade',
    token:     '39e4-8685',
    title:     'The Patient Who Got Quieter',
    narrative: 'A 55-year-old man with a history of lung cancer presents with progressive shortness of breath over five days. He is hypotensive, his heart sounds are distant, and his JVP is elevated. His trachea is midline.',
    challenge: 'Three findings. One diagnosis. What is it — and what is the only intervention that saves him?',
  },
  {
    slug:      'upper-gi-bleed',
    token:     'ad35-b147',
    title:     'The Hematemesis at 3am',
    narrative: 'A 58-year-old man is brought in after vomiting bright red blood at home. He takes ibuprofen daily for back pain and drinks two glasses of wine each night. His BP is 94/62 and his HR is 118.',
    challenge: 'He\'s hemodynamically unstable. What are your first three simultaneous actions — and what risk score guides your next decision?',
  },
  {
    slug:      'dka-v1',
    token:     '4fda-d4d5',
    title:     'The College Student Who Felt Fine Yesterday',
    narrative: 'A 22-year-old is brought to the ED by her roommate. She\'s been nauseated for 24 hours, breathing fast, and seems confused. Her glucose on the fingerstick is \'HI.\' She was diagnosed with Type 1 diabetes two years ago.',
    challenge: 'Her glucose is critical but it\'s not the most dangerous abnormality here. What is — and how do you find it?',
  },
];

// ── CASE SELECTION ───────────────────────────────────────────────────────────
// Uses the number of Mon/Thu sends since a fixed epoch to pick the case.
// This means every subscriber always gets the same case on the same send.
function getCaseForToday() {
  // Count Mon/Thu sends since 2026-01-05 (first Monday of 2026)
  const EPOCH = new Date('2026-01-05T00:00:00Z').getTime();
  const now   = Date.now();
  const daysSinceEpoch = Math.floor((now - EPOCH) / (24 * 60 * 60 * 1000));

  // How many Mon/Thu days have passed?
  // Each week has 2 send days. week number = floor(days/7), plus offset for Mon/Thu
  const weekNumber = Math.floor(daysSinceEpoch / 7);
  const dayOfWeek  = new Date().getUTCDay(); // 1=Mon, 4=Thu
  const sendIndex  = weekNumber * 2 + (dayOfWeek === 4 ? 1 : 0);

  return WEEKLY_CASES[sendIndex % WEEKLY_CASES.length];
}

// ── SUBJECT LINES ────────────────────────────────────────────────────────────
// Rotates through 4 subject line formats to avoid inbox fatigue
const SUBJECT_TEMPLATES = [
  c => `Your Weekly Case: ${c.title} — ReasonDx`,
  c => `New case ready — ReasonDx 🩺`,
  c => `This week's clinical reasoning case`,
  c => `Your case is waiting — ReasonDx`,
];

function getSubject(caseData, sendIndex) {
  const template = SUBJECT_TEMPLATES[sendIndex % SUBJECT_TEMPLATES.length];
  return template(caseData);
}

// ── EMAIL TEMPLATE ───────────────────────────────────────────────────────────
function buildWeeklyEmail(user, caseData) {
  const firstName = user.full_name?.split(' ')[0] || 'Doctor';
  const caseUrl   = `https://reasondx.com/virtual-emr.html?cx=${caseData.token}&utm_source=email&utm_medium=weekly`;
  const pollUrl   = 'https://docs.google.com/forms/d/e/1FAIpQLSd8X0YA3jjwS-dZkytMm48u5Hxem6Hnk3PbfbnOyqGhSKVwIQ/viewform?usp=dialog';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>ReasonDx Weekly Case</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:Georgia,'Times New Roman',serif">
<div style="max-width:600px;margin:32px auto;background:#fff;border-radius:4px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,.09)">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0d2b3e 0%,#1a3d5c 50%,#2874A6 100%);padding:40px 48px 36px;text-align:center">
    <p style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.45);margin:0 0 14px">Weekly Clinical Reasoning Case</p>
    <p style="font-family:Georgia,serif;font-size:30px;color:#fff;letter-spacing:.04em;margin:0 0 4px">Reason<span style="color:#7EC8E3">Dx</span></p>
    <p style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.35);margin:0">Clinical Reasoning Education</p>
  </div>

  <!-- Body -->
  <div style="padding:44px 48px 0">
    <p style="font-family:Georgia,serif;font-size:17px;color:#0d2b3e;margin:0 0 22px">Hi ${firstName},</p>
    <p style="font-size:15px;color:#3d4f61;line-height:1.85;margin:0 0 20px">Your weekly case is ready.</p>
  </div>

  <!-- Divider -->
  <div style="padding:0 48px">
    <hr style="border:none;border-top:1px solid #e8ecf0;margin:8px 0 0">
    <hr style="border:none;border-top:2px solid #2874A6;width:40px;margin:0 0 24px">
  </div>

  <!-- Case card -->
  <div style="padding:0 48px">
    <div style="background:#f7f9fc;border:1px solid #e2e8f0;border-top:3px solid #2874A6;padding:28px 32px">
      <p style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#2874A6;margin:0 0 12px">This Week's Case</p>
      <p style="font-family:Georgia,serif;font-size:22px;color:#0d2b3e;line-height:1.35;margin:0 0 16px">${caseData.title}</p>
      <p style="font-size:14px;color:#4a5568;line-height:1.8;margin:0 0 20px">${caseData.narrative}</p>
      <p style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#64748b;margin:0 0 8px">Your Challenge</p>
      <p style="font-family:Georgia,serif;font-size:14px;color:#1e3a5f;font-style:italic;line-height:1.75;margin:0">${caseData.challenge}</p>
    </div>
  </div>

  <!-- CTA -->
  <div style="padding:28px 48px 8px;text-align:center">
    <a href="${caseUrl}" style="display:inline-block;background:#2874A6;color:#fff;font-family:'Courier New',monospace;font-size:12px;font-weight:bold;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;padding:16px 40px;border-radius:2px">Work Through This Case →</a>
    <p style="font-family:Georgia,serif;font-size:12px;color:#94a3b8;font-style:italic;margin:10px 0 0">Opens the full patient chart. No signup required.</p>
  </div>

  <!-- Divider -->
  <div style="padding:0 48px">
    <hr style="border:none;border-top:1px solid #e8ecf0;margin:28px 0 0">
    <hr style="border:none;border-top:2px solid #2874A6;width:40px;margin:0 0 28px">
  </div>

  <!-- Growth note -->
  <div style="padding:0 48px">
    <p style="font-size:15px;color:#3d4f61;line-height:1.85;margin:0 0 20px">Every single day, new students are joining ReasonDx. From medical schools across the US, from programs around the world, across multiple health professions. People are finding this, sharing it with their classmates, and coming back every week.</p>
    <p style="font-size:15px;color:#3d4f61;line-height:1.85;margin:0 0 20px">If you've shared it — thank you. If you haven't yet, this is your sign. The platform gets better as it grows, and you're helping build something that's reaching further than I ever imagined.</p>
  </div>

  <!-- Divider -->
  <div style="padding:0 48px">
    <hr style="border:none;border-top:1px solid #e8ecf0;margin:8px 0 20px">
  </div>

  <!-- Poll -->
  <div style="padding:0 48px 12px">
    <p style="font-family:Georgia,serif;font-size:19px;color:#0d2b3e;line-height:1.4;margin:0 0 8px">One quick question — how often would you like cases in your inbox?</p>
    <p style="font-size:13px;color:#64748b;line-height:1.7;margin:0 0 26px">Your answer helps shape how I build this — and there's also a space in the form to share ideas. What cases would you like to see? What's been confusing? What's missing? I read every response personally.</p>
  </div>

  <!-- Poll options -->
  <div style="padding:0 48px 32px;display:flex;gap:12px">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td width="32%" style="border:1.5px solid #10b981;padding:18px 10px 16px;text-align:center">
        <a href="${pollUrl}" style="text-decoration:none;display:block">
          <span style="font-size:22px;display:block;margin-bottom:8px">📅</span>
          <span style="font-family:'Courier New',monospace;font-size:10px;font-weight:bold;letter-spacing:.1em;text-transform:uppercase;color:#059669;display:block;margin-bottom:3px">Weekly is perfect</span>
          <span style="font-size:11px;color:#94a3b8;display:block">Keep it as is</span>
        </a>
      </td>
      <td width="4%"></td>
      <td width="32%" style="border:1.5px solid #2874A6;padding:18px 10px 16px;text-align:center">
        <a href="${pollUrl}" style="text-decoration:none;display:block">
          <span style="font-size:22px;display:block;margin-bottom:8px">📬</span>
          <span style="font-family:'Courier New',monospace;font-size:10px;font-weight:bold;letter-spacing:.1em;text-transform:uppercase;color:#2874A6;display:block;margin-bottom:3px">2–3x per week</span>
          <span style="font-size:11px;color:#94a3b8;display:block">More cases, please</span>
        </a>
      </td>
      <td width="4%"></td>
      <td width="32%" style="border:1.5px solid #7c3aed;padding:18px 10px 16px;text-align:center">
        <a href="${pollUrl}" style="text-decoration:none;display:block">
          <span style="font-size:22px;display:block;margin-bottom:8px">🗓️</span>
          <span style="font-family:'Courier New',monospace;font-size:10px;font-weight:bold;letter-spacing:.1em;text-transform:uppercase;color:#7c3aed;display:block;margin-bottom:3px">Daily</span>
          <span style="font-size:11px;color:#94a3b8;display:block">Every day if possible</span>
        </a>
      </td>
    </tr></table>
  </div>

  <!-- Sign-off -->
  <div style="padding:0 48px 44px">
    <p style="font-size:15px;color:#3d4f61;line-height:1.85;margin:12px 0 0">See you next week.</p>
    <p style="font-family:Georgia,serif;font-size:16px;color:#0d2b3e;margin:20px 0 3px">Lauren Fine, MD</p>
    <p style="font-family:Georgia,serif;font-size:12px;color:#94a3b8;font-style:italic;margin:0">Founder, ReasonDx</p>
  </div>

  <!-- Social -->
  <div style="padding:0 48px 36px">
    <hr style="border:none;border-top:1px solid #e8ecf0;margin-bottom:24px">
    <p style="font-family:Georgia,serif;font-size:13px;color:#94a3b8;text-align:center;margin:0">
      Know someone who would find this useful?<br>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://reasondx.com" style="color:#2874A6;">Share on LinkedIn</a>
      &nbsp;·&nbsp;
      <a href="https://twitter.com/intent/tweet?text=Free%20clinical%20reasoning%20cases%20for%20health%20professions%20students%20%E2%80%94%20https://reasondx.com" style="color:#2874A6;">Share on X</a>
      &nbsp;·&nbsp;
      <a href="https://reasondx.com/for-educators" style="color:#2874A6;">For Educators</a>
    </p>
  </div>

  <!-- Footer -->
  <div style="background:#f7f9fc;border-top:1px solid #e8ecf0;padding:24px 48px;text-align:center">
    <p style="font-family:Georgia,serif;font-size:11px;color:#94a3b8;line-height:1.7;margin:0 0 4px">
      <a href="https://reasondx.com/browse.html" style="color:#94a3b8">Browse Cases</a>
      &nbsp;·&nbsp;
      <a href="https://reasondx.com/for-educators" style="color:#94a3b8">For Educators</a>
      &nbsp;·&nbsp;
      <a href="https://reasondx.com/dashboard.html?unsubscribe=weekly&email=${encodeURIComponent(user.email)}" style="color:#94a3b8">Unsubscribe</a>
    </p>
    <p style="font-family:Georgia,serif;font-size:11px;color:#94a3b8;margin:6px 0 0">ReasonDx &nbsp;·&nbsp; reasondx.com</p>
  </div>

</div>
</body>
</html>`;
}

// ── EMAIL SEND ───────────────────────────────────────────────────────────────
async function sendEmail(to, subject, html, resendKey) {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM_EMAIL, reply_to: REPLY_TO, to, subject, html })
    });
    const data = await res.json();
    if (!res.ok) { console.error(`Send failed to ${to}:`, data); return false; }
    return true;
  } catch(e) { console.error(`Error sending to ${to}:`, e); return false; }
}

// ── FETCH SUBSCRIBERS ────────────────────────────────────────────────────────
async function getWeeklySubscribers(supabaseKey) {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/weekly_email_eligible?select=*`,
      { headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` } }
    );
    return await res.json() || [];
  } catch(e) { console.error('Failed to fetch subscribers:', e); return []; }
}

// ── MAIN SEND FUNCTION ───────────────────────────────────────────────────────
async function runWeeklySend(env) {
  const RESEND_KEY    = env.RESEND_API_KEY;
  const SUPABASE_KEY  = env.SUPABASE_ANON_KEY;

  const caseData    = getCaseForToday();
  const sendIndex   = Math.floor((Date.now() - new Date('2026-01-05').getTime()) / (7 * 24 * 60 * 60 * 1000)) * 2;
  const subject     = getSubject(caseData, sendIndex);
  const subscribers = await getWeeklySubscribers(SUPABASE_KEY);

  console.log(`Weekly send: "${caseData.title}" (cx=${caseData.token}) → ${subscribers.length} subscribers`);

  let sent = 0, failed = 0;

  for (const user of subscribers) {
    if (!user.email) continue;
    const html    = buildWeeklyEmail(user, caseData);
    const success = await sendEmail(user.email, subject, html, RESEND_KEY);
    if (success) sent++; else failed++;
    await new Promise(r => setTimeout(r, 100)); // rate limiting
  }

  console.log(`Weekly send complete: sent=${sent}, failed=${failed}`);
  return { sent, failed, case: caseData.title };
}

// ── CLOUDFLARE WORKER EXPORT ─────────────────────────────────────────────────
export default {
  // Cron trigger — Monday and Thursday at 12pm ET (17:00 UTC)
  async scheduled(event, env, ctx) {
    ctx.waitUntil(runWeeklySend(env));
  },

  // HTTP trigger for testing — POST {"test_email": "you@example.com"}
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('POST {"test_email": "your@email.com"} to send a test', { status: 200 });
    }
    const body = await request.json().catch(() => ({}));
    if (body.test_email) {
      const caseData = getCaseForToday();
      const html     = buildWeeklyEmail({ email: body.test_email, full_name: 'Lauren Fine' }, caseData);
      const subject  = getSubject(caseData, 0);
      const success  = await sendEmail(body.test_email, `[TEST] ${subject}`, html, env.RESEND_API_KEY);
      return new Response(JSON.stringify({ success, case: caseData.title, subject }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const result = await runWeeklySend(env);
    return new Response(JSON.stringify(result), { headers: { 'Content-Type': 'application/json' } });
  }
};
