/**
 * rdx-embed-worker.js — v2
 * Uses Voyage AI embeddings (free tier, 200M tokens/month)
 * which are purpose-built for semantic search and return proper vectors.
 * 
 * Deploy as: rdx-embed
 * Secret: VOYAGE_API_KEY (get free key at dash.voyageai.com)
 * 
 * Voyage AI free tier: 200M tokens/month, no credit card required
 * Model: voyage-3-lite — 512 dimensions, fast, medical-friendly
 */

export default {
  async fetch(request, env) {
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

    const apiKey = env.VOYAGE_API_KEY;
    if (!apiKey) return new Response('VOYAGE_API_KEY not configured', { status: 500 });

    try {
      const response = await fetch('https://api.voyageai.com/v1/embeddings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'voyage-3-lite',
          input: text.slice(0, 4000),
        })
      });

      if (!response.ok) {
        const err = await response.text();
        return new Response(JSON.stringify({ error: `Voyage ${response.status}: ${err}` }), {
          status: response.status,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      const data = await response.json();
      const embedding = data.data?.[0]?.embedding;

      if (!embedding || !Array.isArray(embedding)) {
        return new Response(JSON.stringify({ error: 'No embedding in response' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      return new Response(JSON.stringify({ embedding }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });

    } catch(err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }
  }
};
