/**
 * ReasonDx Email Worker
 * Cloudflare Worker: routes performance events → Flodesk API
 * 
 * Deploy: wrangler deploy workers/rdx-email-worker.js --name rdx-email
 * Set secret: wrangler secret put FLODESK_API_KEY
 * 
 * Flodesk segments to create (do once in Flodesk dashboard):
 *   rdx-first-sim           First simulation ever completed
 *   rdx-sim-completed       Any simulation completed (ongoing)
 *   rdx-ddx-struggle        DDx accuracy < 50% on a case
 *   rdx-milestone-10cases   Cumulative 10 simulations completed
 *   rdx-milestone-25cases   Cumulative 25 simulations completed
 *   rdx-emr-submitted       First EMR note submitted
 *   rdx-reengagement-7d     7 days inactive (called from Supabase cron / scheduled worker)
 *   rdx-faculty-weekly      Weekly faculty digest recipient
 * 
 * Then in Flodesk: create a Workflow triggered by "Subscriber added to segment"
 * for each segment above. The email template can reference custom_fields.
 */

const FLODESK_API = 'https://api.flodesk.com/v1';

// Segment name → Flodesk segment ID mapping
// Fill these in after creating segments in Flodesk dashboard
// Account Settings → Segments → Create → copy the ID from the URL
const SEGMENT_IDS = {
  'rdx-first-sim':         'REPLACE_WITH_FLODESK_SEGMENT_ID',
  'rdx-sim-completed':     'REPLACE_WITH_FLODESK_SEGMENT_ID',
  'rdx-ddx-struggle':      'REPLACE_WITH_FLODESK_SEGMENT_ID',
  'rdx-milestone-10cases': 'REPLACE_WITH_FLODESK_SEGMENT_ID',
  'rdx-milestone-25cases': 'REPLACE_WITH_FLODESK_SEGMENT_ID',
  'rdx-emr-submitted':     'REPLACE_WITH_FLODESK_SEGMENT_ID',
  'rdx-reengagement-7d':   'REPLACE_WITH_FLODESK_SEGMENT_ID',
  'rdx-faculty-weekly':    'REPLACE_WITH_FLODESK_SEGMENT_ID',
};

/**
 * Upsert subscriber in Flodesk with custom fields
 */
async function upsertSubscriber(apiKey, payload) {
  const { email, firstName, lastName, customFields } = payload;
  const res = await fetch(`${FLODESK_API}/subscribers`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(apiKey + ':')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      first_name: firstName || '',
      last_name: lastName || '',
      custom_fields: customFields || {},
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Flodesk upsert failed: ${res.status} ${err}`);
  }
  return res.json();
}

/**
 * Add subscriber to a Flodesk segment by segment ID
 */
async function addToSegment(apiKey, email, segmentId) {
  const res = await fetch(`${FLODESK_API}/subscribers/${encodeURIComponent(email)}/segments`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(apiKey + ':')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ segment_ids: [segmentId] }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Flodesk segment add failed: ${res.status} ${err}`);
  }
  return res.json();
}

/**
 * Determine which segments to add based on event type + data
 */
function resolveSegments(eventType, data) {
  const segments = [];

  if (eventType === 'simulation_complete') {
    segments.push('rdx-sim-completed');
    if (data.isFirstEver) segments.push('rdx-first-sim');
    if (data.totalCompleted === 10) segments.push('rdx-milestone-10cases');
    if (data.totalCompleted === 25) segments.push('rdx-milestone-25cases');
    // DDx struggle: correct diagnosis not in top 3, or accuracy below threshold
    if (data.ddxAccuracy !== undefined && data.ddxAccuracy < 0.5) {
      segments.push('rdx-ddx-struggle');
    }
  }

  if (eventType === 'emr_submitted') {
    if (data.isFirstEver) segments.push('rdx-emr-submitted');
  }

  if (eventType === 'reengagement') {
    segments.push('rdx-reengagement-7d');
  }

  if (eventType === 'faculty_weekly') {
    segments.push('rdx-faculty-weekly');
  }

  return segments;
}

/**
 * Build custom_fields payload from performance data
 * These become merge tags in Flodesk email templates: {{custom_fields.last_diagnosis}}
 */
function buildCustomFields(eventType, data) {
  const fields = {};

  if (data.diagnosis)      fields.last_diagnosis = data.diagnosis;
  if (data.specialty)      fields.last_specialty = data.specialty;
  if (data.acuity)         fields.last_acuity = String(data.acuity);
  if (data.totalCompleted) fields.cases_completed = String(data.totalCompleted);
  if (data.ddxAccuracy !== undefined) {
    fields.last_ddx_accuracy = String(Math.round(data.ddxAccuracy * 100)) + '%';
  }
  if (data.caseId)         fields.last_case_id = data.caseId;
  if (data.phasesCompleted) fields.last_phases = String(data.phasesCompleted);

  // Faculty-specific
  if (data.cohort)         fields.cohort = data.cohort;
  if (data.institution)    fields.institution = data.institution;
  if (data.role)           fields.role = data.role;

  return fields;
}

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400 });
    }

    const { eventType, email, firstName, lastName, data = {} } = body;

    if (!eventType || !email) {
      return new Response('Missing eventType or email', { status: 400 });
    }

    const apiKey = env.FLODESK_API_KEY;
    if (!apiKey) {
      return new Response('FLODESK_API_KEY not configured', { status: 500 });
    }

    try {
      // 1. Upsert subscriber with custom fields
      const customFields = buildCustomFields(eventType, data);
      await upsertSubscriber(apiKey, { email, firstName, lastName, customFields });

      // 2. Add to applicable segments
      const segmentNames = resolveSegments(eventType, data);
      const results = [];

      for (const name of segmentNames) {
        const segId = SEGMENT_IDS[name];
        if (!segId || segId.startsWith('REPLACE_')) {
          results.push({ segment: name, status: 'skipped — ID not configured' });
          continue;
        }
        try {
          await addToSegment(apiKey, email, segId);
          results.push({ segment: name, status: 'added' });
        } catch (e) {
          results.push({ segment: name, status: 'error', message: e.message });
        }
      }

      return new Response(JSON.stringify({ ok: true, segments: results }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

    } catch (err) {
      return new Response(JSON.stringify({ ok: false, error: err.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
