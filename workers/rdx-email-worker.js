/**
 * ReasonDx Email Worker — Loops.so
 * Cloudflare Worker: routes performance events → Loops API
 *
 * Secret: LOOPS_API_KEY (Cloudflare → Settings → Variables and Secrets)
 *
 * In Loops (app.loops.so), create a Loop for each event:
 *   Trigger: "Event received" → eventName below
 *   Variables available in email: {{lastDiagnosis}}, {{lastSpecialty}},
 *   {{casesCompleted}}, {{lastDdxAccuracy}}, {{firstName}}
 *
 * Events fired by this worker:
 *   simulationCompleted   — every sim finish
 *   firstSimulation       — first sim ever
 *   ddxStruggle           — DDx accuracy < 50%
 *   milestone10Cases      — 10th sim completed
 *   milestone25Cases      — 25th sim completed
 *   emrSubmitted          — first EMR note submitted
 *   reengagement7Day      — 7 days inactive (from cron)
 *   facultyWeeklyDigest   — weekly faculty summary (from cron)
 */

const LOOPS_API = 'https://app.loops.so/api/v1';

async function upsertContact(apiKey, email, firstName, lastName, props) {
  // Try update first; if 404, create
  const updateRes = await fetch(`${LOOPS_API}/contacts/update`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, firstName: firstName || '', lastName: lastName || '', source: 'ReasonDx', userGroup: props.role === 'faculty' ? 'Faculty' : 'Student', ...props }),
  });
  if (updateRes.status === 404) {
    await fetch(`${LOOPS_API}/contacts/create`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, firstName: firstName || '', lastName: lastName || '', source: 'ReasonDx', userGroup: props.role === 'faculty' ? 'Faculty' : 'Student', ...props }),
    });
  }
}

async function sendEvent(apiKey, email, eventName, eventProperties) {
  const res = await fetch(`${LOOPS_API}/events/send`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, eventName, eventProperties: eventProperties || {} }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Loops event failed (${eventName}): ${res.status} ${err}`);
  }
  return res.json();
}

function resolveEvents(eventType, data) {
  const events = [];
  if (eventType === 'simulation_complete') {
    events.push('simulationCompleted');
    if (data.isFirstEver)           events.push('firstSimulation');
    if (data.totalCompleted === 10) events.push('milestone10Cases');
    if (data.totalCompleted === 25) events.push('milestone25Cases');
    if (data.ddxAccuracy !== undefined && data.ddxAccuracy < 0.5) events.push('ddxStruggle');
  }
  if (eventType === 'emr_submitted' && data.isFirstEver) events.push('emrSubmitted');
  if (eventType === 'reengagement')   events.push('reengagement7Day');
  if (eventType === 'browse_signup')  events.push('browseSignup');
  if (eventType === 'faculty_weekly') events.push('facultyWeeklyDigest');
  if (eventType === 'quick_bounce')   events.push('quickBounce');
  return events;
}

function buildContactProps(data) {
  const props = {};
  if (data.diagnosis)      props.lastDiagnosis  = data.diagnosis;
  if (data.specialty)      props.lastSpecialty  = data.specialty;
  if (data.acuity)         props.lastAcuity     = String(data.acuity);
  if (data.totalCompleted) props.casesCompleted = data.totalCompleted;
  if (data.caseId)         props.lastCaseId     = data.caseId;
  if (data.ddxAccuracy !== undefined) props.lastDdxAccuracy = Math.round(data.ddxAccuracy * 100) + '%';
  if (data.cohort)      props.cohort      = data.cohort;
  if (data.institution) props.institution = data.institution;
  if (data.role)        props.role        = data.role;
  if (data.timeOnPageSeconds !== undefined) props.lastBounceSeconds = String(data.timeOnPageSeconds);
  if (data.page)        props.lastBouncePage = data.page;
  return props;
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } });
    }
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });

    let body;
    try { body = await request.json(); } catch { return new Response('Invalid JSON', { status: 400 }); }

    const { eventType, email, firstName, lastName, data = {} } = body;
    if (!eventType || !email) return new Response('Missing eventType or email', { status: 400 });

    const apiKey = env.LOOPS_API_KEY;
    if (!apiKey) return new Response('LOOPS_API_KEY not configured', { status: 500 });

    try {
      const contactProps = buildContactProps(data);
      await upsertContact(apiKey, email, firstName, lastName, contactProps);

      const eventNames = resolveEvents(eventType, data);
      const results = [];
      for (const eventName of eventNames) {
        try {
          await sendEvent(apiKey, email, eventName, contactProps);
          results.push({ event: eventName, status: 'sent' });
        } catch (e) {
          results.push({ event: eventName, status: 'error', message: e.message });
        }
      }

      return new Response(JSON.stringify({ ok: true, events: results }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    } catch (err) {
      return new Response(JSON.stringify({ ok: false, error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
  },
};
