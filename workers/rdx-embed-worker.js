/**
 * rdx-embed-worker.js
 * Cloudflare Worker: proxy for Claude embeddings (bypasses browser CORS)
 * Deploy as: rdx-embed
 * No secrets needed — uses the Anthropic API key from the request
 */

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    let body;
    try { body = await request.json(); }
    catch { return new Response('Invalid JSON', { status: 400 }); }

    const { text } = body;
    if (!text) return new Response('Missing text', { status: 400 });

    const apiKey = env.ANTHROPIC_API_KEY;
    if (!apiKey) return new Response('ANTHROPIC_API_KEY not configured', { status: 500 });

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 2000,
          system: 'You are an embedding generator. Given medical case text, return ONLY a valid JSON array of exactly 1536 floats representing its semantic embedding. No explanation, no markdown, just the raw JSON array starting with [ and ending with ].',
          messages: [{ role: 'user', content: text.slice(0, 1200) }]
        })
      });

      if (!response.ok) {
        const err = await response.text();
        return new Response(JSON.stringify({ error: err }), {
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      const data = await response.json();
      const raw  = (data.content?.[0]?.text || '').replace(/```json|```/g, '').trim();

      return new Response(JSON.stringify({ embedding: raw }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });

    } catch(err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }
  }
};
