/**
 * Shared AI response extractor.
 * 
 * Different AI fetch paths in this codebase return different shapes:
 *   - Standard Anthropic API:   data.content = [{type:'text', text:'...'}]
 *   - String passthrough:        data.response = '...'  or  data.content = '...'
 *   - Wrapped passthrough:       data.response.content = [...]
 *   - Worker error envelope:     data.message = '...'
 *   - Plain string fallback:     data === '...'
 *
 * Pages used to handle only one of these and silently fail on the others
 * (the "blank Mx prompt" pathway bug, the mechanism modules' "Connection
 * issue, try again" message). This helper covers all known shapes and
 * returns a clean string, '' if nothing usable is present.
 *
 * Usage:
 *   <script src="/js/rdx-ai-response.js"></script>
 *   var data = await resp.json();
 *   var reply = window.RdxAI.extractText(data);
 *   if (!reply) { ...handle empty response... }
 */
(function() {
  'use strict';

  function extractAIText(data) {
    if (!data) return '';
    if (typeof data === 'string') return data;
    if (typeof data.response === 'string') return data.response;
    if (typeof data.content === 'string') return data.content;
    // Wrapped passthrough: { response: { content: [...] } }
    if (data.response && Array.isArray(data.response.content)) {
      return data.response.content.map(function(b) { return b.text || ''; }).join('\n').trim();
    }
    // Standard Anthropic API: { content: [{type:'text', text:'...'}] }
    if (Array.isArray(data.content)) {
      return data.content.map(function(b) { return b.text || ''; }).join('\n').trim();
    }
    if (typeof data.message === 'string') return data.message;
    return '';
  }

  window.RdxAI = window.RdxAI || {};
  window.RdxAI.extractText = extractAIText;
})();
