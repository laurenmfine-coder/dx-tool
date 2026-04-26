// supabase/functions/loops-webhook-receiver/index.ts
// Receives webhook events from Loops.so and syncs new contacts to Supabase
// Specifically handles: contact.created, contact.updated, contact.unsubscribed
//
// Setup:
//   1. Deploy: supabase functions deploy loops-webhook-receiver --no-verify-jwt
//      (--no-verify-jwt is required because Loops cannot send Supabase auth headers)
//   2. Set the webhook secret in Supabase:
//      supabase secrets set LOOPS_WEBHOOK_SECRET=<your-secret-from-loops>
//   3. In Loops dashboard → Settings → Webhooks → Add webhook:
//      URL: https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/loops-webhook-receiver
//      Events: contact.created, contact.updated, contact.unsubscribed (optional)
//      Copy the signing secret Loops gives you, paste into LOOPS_WEBHOOK_SECRET above
//
// Test:
//   Loops dashboard has a "Test webhook" button that fires a sample event.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const LOOPS_WEBHOOK_SECRET = Deno.env.get('LOOPS_WEBHOOK_SECRET') || '';

// HMAC verification — confirms the request actually came from Loops
async function verifySignature(rawBody: string, signature: string | null): Promise<boolean> {
  if (!signature || !LOOPS_WEBHOOK_SECRET) return false;

  const encoder = new TextEncoder();
  const keyData = encoder.encode(LOOPS_WEBHOOK_SECRET);
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signatureBytes = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(rawBody)
  );

  // Convert to hex string
  const hashArray = Array.from(new Uint8Array(signatureBytes));
  const computedSig = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  // Loops sends signature as "v1,<hex>" or just "<hex>" — handle both
  const cleanSig = signature.replace(/^v1,/, '').replace(/^sha256=/, '').trim();

  // Constant-time comparison
  if (cleanSig.length !== computedSig.length) return false;
  let mismatch = 0;
  for (let i = 0; i < cleanSig.length; i++) {
    mismatch |= cleanSig.charCodeAt(i) ^ computedSig.charCodeAt(i);
  }
  return mismatch === 0;
}

Deno.serve(async (req) => {
  // Only accept POST
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  // Read the raw body for signature verification
  const rawBody = await req.text();

  // Verify signature (skip if no secret configured — for initial setup/testing)
  if (LOOPS_WEBHOOK_SECRET) {
    const signature = req.headers.get('loops-signature') || req.headers.get('x-loops-signature');
    const isValid = await verifySignature(rawBody, signature);
    if (!isValid) {
      console.error('Invalid signature');
      return new Response(JSON.stringify({ error: 'Invalid signature' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } else {
    console.warn('LOOPS_WEBHOOK_SECRET not set — skipping signature verification (insecure)');
  }

  // Parse the body
  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const eventName = payload?.eventName;
  const contact = payload?.contact;
  const email = contact?.email || payload?.contactIdentity?.email;

  if (!email) {
    return new Response(JSON.stringify({ error: 'No email in payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  // Build full name from firstName + lastName (handle nulls)
  const firstName = contact?.firstName || '';
  const lastName = contact?.lastName || '';
  const fullName = [firstName, lastName].filter(Boolean).join(' ').trim() || null;

  // Map Loops userGroup to our segment
  const segment = contact?.userGroup || 'Loops Subscriber';

  try {
    if (eventName === 'contact.created' || eventName === 'contact.updated' || eventName === 'contact.mailingList.subscribed') {
      // Insert or update — uses ON CONFLICT to handle re-subscribes
      const { error } = await supabase
        .from('external_subscribers')
        .upsert({
          email: email.toLowerCase().trim(),
          full_name: fullName,
          source: 'loops',
          segment: segment,
          email_weekly_case: true,
          unsubscribed_at: null,
          notes: contact?.source ? `Loops source: ${contact.source}` : null
        }, {
          onConflict: 'email',
          ignoreDuplicates: false
        });

      if (error) {
        console.error('Supabase upsert failed:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      console.log(`Synced ${email} from Loops (${eventName})`);
      return new Response(JSON.stringify({ success: true, action: 'upserted', email }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } else if (eventName === 'contact.unsubscribed' || eventName === 'contact.deleted') {
      // Mark as unsubscribed (don't delete — preserves history)
      const { error } = await supabase
        .from('external_subscribers')
        .update({
          email_weekly_case: false,
          unsubscribed_at: new Date().toISOString()
        })
        .eq('email', email.toLowerCase().trim());

      if (error) {
        console.error('Supabase unsubscribe failed:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      console.log(`Unsubscribed ${email} from Loops (${eventName})`);
      return new Response(JSON.stringify({ success: true, action: 'unsubscribed', email }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } else {
      // Event we don't care about — acknowledge politely so Loops doesn't retry
      console.log(`Ignored event: ${eventName} for ${email}`);
      return new Response(JSON.stringify({ success: true, action: 'ignored', eventName }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (e) {
    console.error('Webhook processing error:', e);
    return new Response(JSON.stringify({ error: String(e?.message || e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});
