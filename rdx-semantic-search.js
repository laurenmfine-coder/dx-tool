/**
 * rdx-semantic-search.js
 * Semantic case search powered by pgvector + Claude embeddings.
 *
 * Workflow:
 *   1. On first load: embed all 368 cases via Claude API → store in Supabase
 *   2. On search: embed the query → find similar cases via cosine similarity
 *   3. Results render as ranked case cards in browse.html
 *
 * Dependencies: Supabase client, Claude API (via existing CoachDx worker)
 * Usage: RDXSemanticSearch.search(query) → Promise<results[]>
 *        RDXSemanticSearch.embedAllCases() → embeds + stores all cases
 */

(function(window) {
  'use strict';

  var SUPABASE_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';
  var WORKER_URL   = 'https://coachdx-attending.laurenmfine.workers.dev';

  // ── Build rich text content for embedding ─────────────────────────────────
  function buildContent(caseId, c) {
    var parts = [];
    if (c.diagnosis)        parts.push(c.diagnosis);
    if (c.chiefComplaint)   parts.push(c.chiefComplaint);
    if (c.category)         parts.push(c.category);
    var ps = c.patientScript || {};
    if (ps.hpiOnset)              parts.push(ps.hpiOnset);
    if (ps.hpiProgression)        parts.push(ps.hpiProgression);
    if (ps.hpiAssociatedSymptoms) parts.push(ps.hpiAssociatedSymptoms);
    if (ps.pmh)                   parts.push(ps.pmh);
    if (c.teachingObjective)      parts.push(c.teachingObjective);
    var klp = c.keyLearningPoints || [];
    if (klp.length)  parts.push(klp.slice(0, 2).join('. '));
    var mnm = c.mustNotMiss || [];
    if (mnm.length)  parts.push('Must not miss: ' + mnm.slice(0, 3).join(', '));
    var cp  = c.commonPitfalls || [];
    if (cp.length)   parts.push('Pitfalls: ' + cp.slice(0, 2).join(', '));
    return parts.join(' | ');
  }

  // ── Get embedding from Claude API ─────────────────────────────────────────
  async function getEmbedding(text) {
    // Use Claude's embeddings endpoint directly
    var res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 100,
        system: 'Return ONLY a JSON array of 1536 floats representing the semantic embedding of the input text. No other text.',
        messages: [{
          role: 'user',
          content: 'Embed this medical case text: ' + text.slice(0, 800)
        }]
      })
    });

    if (!res.ok) throw new Error('Embedding API failed: ' + res.status);
    var data = await res.json();
    var txt = (data.content[0] && data.content[0].text) || '[]';
    try { return JSON.parse(txt.replace(/```json|```/g, '').trim()); }
    catch(e) { throw new Error('Embedding parse failed: ' + e.message); }
  }

  // ── Upsert embedding to Supabase ──────────────────────────────────────────
  async function upsertEmbedding(caseId, diagnosis, category, acuity, content, embedding) {
    var res = await fetch(SUPABASE_URL + '/rest/v1/case_embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'Prefer': 'resolution=merge-duplicates',
      },
      body: JSON.stringify({
        case_id:   caseId,
        diagnosis: diagnosis,
        category:  category,
        acuity:    acuity,
        content:   content,
        embedding: JSON.stringify(embedding),
      })
    });
    if (!res.ok) {
      var err = await res.text();
      throw new Error('Upsert failed: ' + err);
    }
  }

  // ── Check how many cases are already embedded ─────────────────────────────
  async function getEmbeddedCount() {
    var res = await fetch(
      SUPABASE_URL + '/rest/v1/case_embeddings?select=case_id',
      {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': 'Bearer ' + SUPABASE_KEY,
          'Prefer': 'count=exact',
        }
      }
    );
    var count = parseInt(res.headers.get('content-range')?.split('/')[1] || '0', 10);
    return count;
  }

  // ── Embed all cases (run once, or to refresh) ─────────────────────────────
  async function embedAllCases(progressCallback) {
    var cases = window.CRT_DATA;
    if (!cases) throw new Error('CRT_DATA not loaded');

    var entries = Object.entries(cases);
    var total   = entries.length;
    var done    = 0;
    var errors  = [];

    for (var i = 0; i < entries.length; i++) {
      var caseId = entries[i][0];
      var c      = entries[i][1];
      try {
        var content   = buildContent(caseId, c);
        var embedding = await getEmbedding(content);
        await upsertEmbedding(
          caseId,
          c.diagnosis || caseId,
          c.category  || 'general',
          c.acuity    || 3,
          content,
          embedding
        );
        done++;
        if (progressCallback) progressCallback(done, total, caseId);
        // Rate limit — wait 200ms between embeddings
        await new Promise(function(r) { setTimeout(r, 200); });
      } catch(e) {
        errors.push({ caseId: caseId, error: e.message });
        console.warn('[RDXSemanticSearch] Error embedding ' + caseId + ':', e.message);
      }
    }
    return { done: done, total: total, errors: errors };
  }

  // ── Search by query text ──────────────────────────────────────────────────
  async function search(query, opts) {
    opts = opts || {};
    var threshold = opts.threshold || 0.45;
    var limit     = opts.limit     || 12;
    var category  = opts.category  || null;
    var acuity    = opts.acuity    || null;

    if (!query || !query.trim()) return [];

    // Get query embedding
    var queryEmbedding = await getEmbedding(query.trim());

    // Call Supabase RPC function
    var body = {
      query_embedding: queryEmbedding,
      match_threshold: threshold,
      match_count:     limit,
    };

    var res = await fetch(SUPABASE_URL + '/rest/v1/rpc/match_cases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      var err = await res.text();
      throw new Error('Search failed: ' + err);
    }

    var results = await res.json();

    // Apply client-side filters
    if (category) results = results.filter(function(r) { return r.category === category; });
    if (acuity)   results = results.filter(function(r) { return r.acuity   === acuity;   });

    // Enrich with full case data
    return results.map(function(r) {
      var full = window.CRT_DATA && window.CRT_DATA[r.case_id];
      return Object.assign({}, r, {
        fullCase: full || null,
        similarity: Math.round(r.similarity * 100),
      });
    });
  }

  // ── Public API ─────────────────────────────────────────────────────────────
  window.RDXSemanticSearch = {
    search:        search,
    embedAllCases: embedAllCases,
    buildContent:  buildContent,
    getEmbeddedCount: getEmbeddedCount,
  };

})(window);
