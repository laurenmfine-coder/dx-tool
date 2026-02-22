/**
 * ReasonDx — Anthropic API Proxy (Vercel Serverless Function)
 * 
 * Securely proxies requests from SimRoomDx (and other client-side features)
 * to the Anthropic Messages API. The API key is stored as a Vercel
 * environment variable and never exposed to the browser.
 *
 * Setup:
 *   1. Push this file to api/chat.js in the repo root
 *   2. In Vercel → Settings → Environment Variables, add:
 *        ANTHROPIC_API_KEY = sk-ant-... (your key)
 *   3. Redeploy (or it auto-deploys on push)
 *
 * Client usage:
 *   fetch("/api/chat", { method: "POST", headers: {"Content-Type":"application/json"},
 *     body: JSON.stringify({ model, max_tokens, messages, system })
 *   })
 */

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set in environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { model, max_tokens, messages, system } = req.body;

    // Basic validation
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    // Build the request body
    const body = {
      model: model || 'claude-sonnet-4-20250514',
      max_tokens: Math.min(max_tokens || 400, 1024),  // Cap at 1024 to control costs
      messages
    };
    if (system) {
      body.system = system;
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic API error:', response.status, data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);

  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
