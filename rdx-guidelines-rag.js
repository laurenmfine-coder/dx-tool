/**
 * rdx-guidelines-rag.js
 * ReasonDx — Retrieval-Augmented Generation over Open-Access Clinical Guidelines
 *
 * At debrief time:
 *   1. Embeds the target diagnosis via rdx-embed worker (BGE-small, free)
 *   2. Queries Supabase match_guidelines() for top-3 most relevant chunks
 *   3. Returns structured context ready for injection into Claude debrief prompt
 *
 * Usage (called by rdx-agent-tools.js generateDebrief):
 *   const ctx = await GuidelinesRAG.retrieve(diagnosis, specialty);
 *   // ctx.found, ctx.contextBlock (string), ctx.sources (array)
 *
 * Dependencies: rdx-embed worker, Supabase anon key
 */

(function(window) {
  'use strict';

  var SUPABASE_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';
  var EMBED_WORKER  = 'https://rdx-embed.laurenmfine.workers.dev';

  // ── Embed a text string via rdx-embed worker ────────────────────────────
  async function getEmbedding(text) {
    var res = await fetch(EMBED_WORKER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text.slice(0, 1000) })
    });
    if (!res.ok) throw new Error('Embed worker error: ' + res.status);
    var data = await res.json();
    if (!Array.isArray(data.embedding)) throw new Error('No embedding returned');
    return data.embedding;
  }

  // ── Query Supabase match_guidelines() RPC ──────────────────────────────
  async function matchGuidelines(embedding, specialty, matchCount) {
    matchCount = matchCount || 3;

    var body = {
      query_embedding: embedding,
      match_count: matchCount,
      min_similarity: 0.3
    };
    if (specialty) body.filter_specialty = specialty.toLowerCase();

    var res = await fetch(SUPABASE_URL + '/rest/v1/rpc/match_guidelines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      var err = await res.text();
      throw new Error('match_guidelines RPC failed: ' + res.status + ' — ' + err);
    }

    var rows = await res.json();
    return Array.isArray(rows) ? rows : [];
  }

  // ── Build the context block injected into the Claude prompt ────────────
  // Returns a formatted string Claude will use when citing guidelines.
  function buildContextBlock(chunks) {
    if (!chunks || chunks.length === 0) return '';

    var lines = [
      '=== RELEVANT CLINICAL GUIDELINES (cite these in your debrief) ===',
      'For each key teaching point, reference the appropriate guideline below.',
      'Format citations as: (Source, Year) — e.g., (AHA Heart Failure Guidelines, 2022)',
      ''
    ];

    chunks.forEach(function(chunk, i) {
      lines.push('--- Guideline ' + (i + 1) + ' ---');
      lines.push('Source: ' + chunk.source);
      if (chunk.url) lines.push('URL: ' + chunk.url);
      if (chunk.license) lines.push('License: ' + chunk.license);
      lines.push('Content: ' + chunk.chunk_text);
      lines.push('');
    });

    lines.push('=== END GUIDELINES ===');
    return lines.join('\n');
  }

  // ── Build the sources list shown to students after debrief ─────────────
  function buildSourcesList(chunks) {
    if (!chunks || chunks.length === 0) return [];
    var seen = {};
    var sources = [];
    chunks.forEach(function(chunk) {
      if (!seen[chunk.source]) {
        seen[chunk.source] = true;
        sources.push({
          source: chunk.source,
          url: chunk.url || null,
          license: chunk.license || 'verify',
          specialty: chunk.specialty || '',
          similarity: Math.round((chunk.similarity || 0) * 100)
        });
      }
    });
    return sources;
  }

  // ── Public API ──────────────────────────────────────────────────────────

  var GuidelinesRAG = {

    /**
     * retrieve(diagnosis, specialty, matchCount?)
     * Embeds the diagnosis + retrieves top N guideline chunks.
     *
     * Returns:
     *   { found: bool, contextBlock: string, sources: Array, chunks: Array }
     *
     * If the guidelines table is empty or embed fails, returns gracefully
     * with found: false so debrief can still proceed without citations.
     */
    retrieve: async function(diagnosis, specialty, matchCount) {
      try {
        if (!diagnosis) return { found: false, contextBlock: '', sources: [], chunks: [] };

        // Embed: combine diagnosis + specialty for richer query vector
        var queryText = diagnosis;
        if (specialty) queryText += ' ' + specialty + ' guidelines management treatment';

        var embedding = await getEmbedding(queryText);
        var chunks    = await matchGuidelines(embedding, specialty, matchCount || 3);

        if (!chunks || chunks.length === 0) {
          return { found: false, contextBlock: '', sources: [], chunks: [] };
        }

        return {
          found: true,
          contextBlock: buildContextBlock(chunks),
          sources: buildSourcesList(chunks),
          chunks: chunks
        };

      } catch (e) {
        // Non-fatal — debrief continues without RAG context
        console.warn('[GuidelinesRAG] retrieve failed (non-fatal):', e.message);
        return { found: false, contextBlock: '', sources: [], chunks: [] };
      }
    },

    /**
     * formatSourcesForDisplay(sources)
     * Returns HTML bullet list of guideline sources for student display.
     */
    formatSourcesForDisplay: function(sources) {
      if (!sources || sources.length === 0) return '';
      var html = '<div style="margin-top:12px;padding:12px 16px;background:rgba(40,116,166,.08);border-left:3px solid #2874A6;border-radius:6px;">';
      html += '<div style="font-size:12px;font-weight:600;color:#2874A6;margin-bottom:8px;">📖 Guideline References</div>';
      sources.forEach(function(s) {
        html += '<div style="font-size:12px;color:#334155;margin-bottom:4px;">• ';
        if (s.url) {
          html += '<a href="' + s.url + '" target="_blank" rel="noopener" style="color:#2874A6;text-decoration:none;">' + s.source + '</a>';
        } else {
          html += s.source;
        }
        if (s.license && s.license !== 'verify') {
          html += ' <span style="color:#64748B;font-size:11px;">(' + s.license + ')</span>';
        }
        html += '</div>';
      });
      html += '</div>';
      return html;
    }
  };

  window.GuidelinesRAG = GuidelinesRAG;

})(window);
