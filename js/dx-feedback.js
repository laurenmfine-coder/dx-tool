/* js/dx-feedback.js — Session Feedback Widget
 *
 * Auto-injects a persistent floating thumbs-up/down feedback button
 * on every page that loads this script. Captures:
 *   - Helpful / Not helpful rating
 *   - Optional one-line comment
 *   - Page URL, topic (inferred from title/URL), timestamp
 *
 * Saves to localStorage for session replay + optionally to Supabase
 * if window.RDX_SUPABASE_URL and window.RDX_SUPABASE_KEY are defined.
 *
 * Called by 200+ topic/module pages. Zero configuration required.
 * Requires no dependencies.
 */
(function () {
  'use strict';

  // Suppress on pages with their own help system (Mission Control)
  var _path = window.location.pathname;
  if (_path.includes('virtual-emr') || _path.includes('simulation-engine')) return;

  var STORAGE_KEY = 'rdx-feedback-log';
  var _submitted  = false;

  // ── Supabase save (optional, best-effort) ──────────────────────
  function _saveToDB(entry) {
    var url = window.SUPABASE_URL || 'https://lpwbiqpojisqgezycupw.supabase.co';
    var key = window.SUPABASE_ANON_KEY ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';
    fetch(url + '/rest/v1/content_feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': key,
        'Authorization': 'Bearer ' + key,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(entry)
    }).catch(function () {}); // best-effort; never surface errors
  }

  // ── localStorage save ──────────────────────────────────────────
  function _saveLocal(entry) {
    try {
      var log = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      log.push(entry);
      if (log.length > 200) log = log.slice(-200);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
    } catch (e) {}
  }

  // ── Infer topic from page ──────────────────────────────────────
  function _inferTopic() {
    var title = document.title || '';
    var path  = window.location.pathname;
    // Strip common suffixes
    title = title.replace(/\s*[·|—\-]\s*ReasonDx.*$/i, '').trim();
    if (title) return title;
    // Fall back to path segment
    var seg = path.split('/').filter(Boolean).pop() || '';
    return seg.replace(/[-_]/g, ' ').replace(/\.html?$/, '') || 'Unknown';
  }

  // ── Build the widget ───────────────────────────────────────────
  function _buildWidget() {
    var wrap = document.createElement('div');
    wrap.id = 'rdx-feedback-widget';
    wrap.style.cssText =
      'position:fixed;bottom:20px;right:20px;z-index:9990;' +
      'display:flex;align-items:center;gap:6px;' +
      'background:#fff;border:1.5px solid #E2E8F0;border-radius:24px;' +
      'padding:7px 14px 7px 10px;box-shadow:0 2px 12px rgba(0,0,0,.08);' +
      'font-family:-apple-system,BlinkMacSystemFont,"DM Sans",sans-serif;' +
      'font-size:12px;color:#64748B;transition:opacity .2s;cursor:default;' +
      'user-select:none;';

    wrap.innerHTML =
      '<span style="font-size:12px">Was this helpful?</span>' +
      '<button id="rdx-fb-up" title="Yes, helpful" style="' +
        'background:none;border:none;cursor:pointer;font-size:18px;' +
        'padding:0 2px;line-height:1;transition:transform .1s;' +
      '">👍</button>' +
      '<button id="rdx-fb-dn" title="Not helpful" style="' +
        'background:none;border:none;cursor:pointer;font-size:18px;' +
        'padding:0 2px;line-height:1;transition:transform .1s;' +
      '">👎</button>';

    return wrap;
  }

  // ── Comment prompt ─────────────────────────────────────────────
  function _buildPrompt(rating) {
    var overlay = document.createElement('div');
    overlay.style.cssText =
      'position:fixed;bottom:70px;right:20px;z-index:9991;' +
      'background:#fff;border:1.5px solid #E2E8F0;border-radius:14px;' +
      'padding:16px;width:280px;box-shadow:0 4px 20px rgba(0,0,0,.1);' +
      'font-family:-apple-system,BlinkMacSystemFont,"DM Sans",sans-serif;';

    var placeholder = rating === 'up'
      ? 'What did you find most useful? (optional)'
      : 'What could be improved? (optional)';

    overlay.innerHTML =
      '<div style="font-size:13px;font-weight:600;color:#1E293B;margin-bottom:10px">' +
        (rating === 'up' ? '🙏 Glad it helped!' : '💬 We\'re listening.') +
      '</div>' +
      '<textarea id="rdx-fb-comment" rows="3" placeholder="' + placeholder + '" ' +
        'style="width:100%;padding:8px 10px;border:1.5px solid #E2E8F0;border-radius:8px;' +
        'font-size:12px;font-family:inherit;resize:none;outline:none;box-sizing:border-box;' +
        'transition:border .15s" ' +
        'onfocus="this.style.borderColor=\'#2874A6\'" ' +
        'onblur="this.style.borderColor=\'#E2E8F0\'"></textarea>' +
      '<div style="display:flex;gap:8px;margin-top:10px">' +
        '<button onclick="window.DxFeedback._submit(\'' + rating + '\')" ' +
          'style="flex:1;padding:8px;background:#2874A6;color:#fff;border:none;' +
          'border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit">' +
          'Submit' +
        '</button>' +
        '<button onclick="document.getElementById(\'rdx-feedback-prompt\').remove()" ' +
          'style="padding:8px 12px;background:#F1F5F9;color:#64748B;border:none;' +
          'border-radius:8px;font-size:12px;cursor:pointer;font-family:inherit">' +
          'Skip' +
        '</button>' +
      '</div>';

    overlay.id = 'rdx-feedback-prompt';
    return overlay;
  }

  // ── Submit ─────────────────────────────────────────────────────
  function _submit(rating) {
    if (_submitted) return;
    _submitted = true;

    var commentEl = document.getElementById('rdx-fb-comment');
    var comment   = commentEl ? commentEl.value.trim() : '';

    var entry = {
      rating:    rating,              // 'up' | 'down'
      comment:   comment,
      topic:     _inferTopic(),
      page:      window.location.href,
      timestamp: new Date().toISOString(),
      trainingYear: (window.RDX_TRAINING_YEAR || localStorage.getItem('rdx-training-year') || null)
    };

    _saveLocal(entry);
    _saveToDB(entry);

    // Replace prompt with thank-you
    var prompt = document.getElementById('rdx-feedback-prompt');
    if (prompt) prompt.remove();

    var widget = document.getElementById('rdx-feedback-widget');
    if (widget) {
      widget.innerHTML =
        '<span style="font-size:12px;color:#059669;font-weight:600">' +
        '✓ Thanks for the feedback!</span>';
      setTimeout(function () {
        widget.style.opacity = '0';
        setTimeout(function () { if (widget.parentNode) widget.parentNode.removeChild(widget); }, 400);
      }, 2500);
    }
  }

  // ── Init ───────────────────────────────────────────────────────
  function init() {
    // Don't show on admin, auth, or already-shown pages
    var path = window.location.pathname;
    if (/admin|auth|login|register|faculty-dashboard|analytics-dashboard/i.test(path)) return;

    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', _inject);
    } else {
      // Short delay so page content renders first
      setTimeout(_inject, 1500);
    }
  }

  function _inject() {
    // Already injected?
    if (document.getElementById('rdx-feedback-widget')) return;

    var widget = _buildWidget();
    document.body.appendChild(widget);

    document.getElementById('rdx-fb-up').addEventListener('click', function () {
      if (_submitted) return;
      // Remove old prompt if open
      var old = document.getElementById('rdx-feedback-prompt');
      if (old) old.remove();
      document.body.appendChild(_buildPrompt('up'));
      document.getElementById('rdx-fb-comment').focus();
    });

    document.getElementById('rdx-fb-dn').addEventListener('click', function () {
      if (_submitted) return;
      var old = document.getElementById('rdx-feedback-prompt');
      if (old) old.remove();
      document.body.appendChild(_buildPrompt('down'));
      document.getElementById('rdx-fb-comment').focus();
    });

    // Close prompt on outside click
    document.addEventListener('click', function (e) {
      var prompt = document.getElementById('rdx-feedback-prompt');
      var widget = document.getElementById('rdx-feedback-widget');
      if (prompt && !prompt.contains(e.target) && widget && !widget.contains(e.target)) {
        prompt.remove();
      }
    });
  }

  // ── Public API ─────────────────────────────────────────────────
  window.DxFeedback = {
    init:    init,
    _submit: _submit,    // exposed for inline onclick handlers
    getLog:  function () {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch (e) { return []; }
    }
  };

  // Auto-init (no explicit call needed from host pages)
  init();

})();
