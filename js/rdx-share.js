/**
 * RDX Share
 * -----------------------------------------------------------------------------
 * Utilities for sharing cases and referral links. Backs two features:
 *
 * 1. Post-case share panel — appears after a case debrief, lets the user
 *    copy a deep link or email the case to a colleague.
 *
 * 2. Referral dashboard card — shows the user's personal REF-XX0000 code,
 *    how many classmates have joined, with copy-link and email buttons.
 *
 * Shares are logged to the case_shares table for research/funnel analytics
 * (which cases spread, which channel converts best, etc.). Logging is
 * best-effort and silent on failure.
 */
window.RDXShare = (function () {
  'use strict';

  var BRAND = '#2874A6';
  var BRAND_DARK = '#1B4F72';
  var ORIGIN = (typeof window !== 'undefined' && window.location && window.location.origin)
    ? window.location.origin
    : 'https://reasondx.com';

  // ---------------------------------------------------------------------------
  // URL generation
  // ---------------------------------------------------------------------------

  /**
   * Get a shareable deep link for a case. Uses the token system so the URL
   * is stable and doesn't leak raw slugs. Falls back to slug-based URL if
   * tokens aren't loaded on this page.
   *
   * Example: getCaseShareUrl('stemi-v1') → 'https://reasondx.com/?c=0238-e580'
   */
  function getCaseShareUrl(caseSlug, opts) {
    opts = opts || {};
    var url;
    if (caseSlug && window.RDX_CASE_TOKENS && window.RDX_CASE_TOKENS.slugToToken) {
      var token = window.RDX_CASE_TOKENS.slugToToken[caseSlug];
      if (token) {
        url = ORIGIN + '/?c=' + token;
      }
    }
    if (!url && caseSlug) {
      // Fallback: direct to browse with case context (platform will handle)
      url = ORIGIN + '/browse.html';
    }
    if (!url) url = ORIGIN + '/';

    // Attach referrer tracking if user is authenticated and has a code
    if (opts.refCode) {
      url += (url.indexOf('?') >= 0 ? '&' : '?') + 'ref=' + encodeURIComponent(opts.refCode);
    }
    // Attach UTM for analytics
    if (opts.source) {
      url += (url.indexOf('?') >= 0 ? '&' : '?') + 'src=' + encodeURIComponent(opts.source);
    }
    return url;
  }

  /**
   * Get the current user's referral share URL (the homepage with their code).
   * Returns null if user is not authenticated or has no code yet.
   */
  async function getReferralShareUrl() {
    try {
      if (!window.RDX || !window.RDX.referrals) return null;
      var code = await window.RDX.referrals.generateCode();
      if (!code) return null;
      return ORIGIN + '/?ref=' + encodeURIComponent(code);
    } catch (e) {
      return null;
    }
  }

  // ---------------------------------------------------------------------------
  // Email sending (reuses existing rdx-email worker)
  // ---------------------------------------------------------------------------

  /**
   * Send a case share email via the existing Cloudflare worker.
   * opts: { caseSlug, caseTitle, recipientEmail, senderEmail, senderName, note }
   */
  function sendCaseByEmail(opts) {
    var worker = (window.RDX_CONFIG && window.RDX_CONFIG.EMAIL_WORKER) ||
                 'https://rdx-email.laurenmfine.workers.dev';
    var url = getCaseShareUrl(opts.caseSlug, { source: 'email_share' });

    var payload = {
      eventType: 'case_share',
      email: opts.recipientEmail,
      firstName: opts.recipientEmail ? opts.recipientEmail.split('@')[0] : '',
      data: {
        caseSlug: opts.caseSlug || null,
        caseTitle: opts.caseTitle || 'a ReasonDx case',
        caseUrl: url,
        senderEmail: opts.senderEmail || null,
        senderName: opts.senderName || null,
        note: (opts.note || '').slice(0, 500),
        timestamp: new Date().toISOString(),
      },
    };

    return fetch(worker, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(function (r) {
      if (!r || !r.ok) {
        if (window.console) console.warn('[RDX Share] Email worker returned non-OK:', r && r.status);
      }
      return true;
    });
  }

  // ---------------------------------------------------------------------------
  // Supabase logging
  // ---------------------------------------------------------------------------

  function logShare(row) {
    try {
      var url = (window.RDX_CONFIG && window.RDX_CONFIG.SUPABASE_URL) || '';
      var key = (window.RDX_CONFIG && window.RDX_CONFIG.SUPABASE_ANON_KEY) || '';
      if (!url || !key) return Promise.resolve(false);

      var sessionId = '';
      try { sessionId = localStorage.getItem('rdx-session-id') || ''; } catch (e) {}

      var payload = {
        session_id: sessionId || null,
        case_slug: row.caseSlug || null,
        share_channel: row.channel,           // 'copy_link' | 'email' | 'referral_copy' | 'referral_email'
        share_context: row.context || null,   // 'post_case' | 'dashboard'
        user_agent: (navigator.userAgent || '').slice(0, 500),
        page: (typeof window !== 'undefined' && window.location && window.location.pathname) || null,
      };

      return fetch(url + '/rest/v1/case_shares', {
        method: 'POST',
        headers: {
          'apikey': key,
          'Authorization': 'Bearer ' + key,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(payload),
        keepalive: true,
      }).then(function () { return true; })
        .catch(function () { return false; });
    } catch (e) { return Promise.resolve(false); }
  }

  // ---------------------------------------------------------------------------
  // Copy to clipboard
  // ---------------------------------------------------------------------------

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for older browsers
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        resolve();
      } catch (e) { reject(e); }
    });
  }

  // ---------------------------------------------------------------------------
  // Post-case share panel renderer
  // ---------------------------------------------------------------------------

  /**
   * Render the post-case share panel into the given container.
   * opts: { caseSlug, caseTitle, container (DOM element) }
   */
  function renderPostCaseSharePanel(opts) {
    var container = opts.container;
    if (!container) return;
    if (container.querySelector('.rdx-share-panel')) return; // already rendered

    var shareUrl = getCaseShareUrl(opts.caseSlug, { source: 'post_case' });
    var caseTitle = opts.caseTitle || 'this case';

    var panel = document.createElement('div');
    panel.className = 'rdx-share-panel';
    panel.style.cssText = [
      'background: linear-gradient(135deg, #EBF5FB, #E8F8F5)',
      'border: 1px solid #BEE3F8',
      'border-radius: 12px',
      'padding: 18px 22px',
      'margin: 16px 0',
      'font-family: inherit',
    ].join(';');

    panel.innerHTML = [
      '<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:12px">',
      '  <span style="font-size:20px;line-height:1">📤</span>',
      '  <div>',
      '    <div style="font-weight:700;color:#1B4F72;font-size:15px;margin-bottom:2px">Share this case</div>',
      '    <div style="font-size:13px;color:#475569;line-height:1.5">A link to ' + escapeHtml(caseTitle) + ' — anyone can try it without signing up.</div>',
      '  </div>',
      '</div>',
      '<div style="display:flex;gap:8px;flex-wrap:wrap">',
      '  <button type="button" class="rdx-share-copy-btn" style="padding:9px 16px;background:' + BRAND + ';color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit">Copy link</button>',
      '  <button type="button" class="rdx-share-email-btn" style="padding:9px 16px;background:#fff;color:' + BRAND + ';border:1.5px solid #BEE3F8;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit">Email a colleague</button>',
      '</div>',
      '<div class="rdx-share-email-form" style="display:none;margin-top:12px;padding-top:12px;border-top:1px solid #BEE3F8">',
      '  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">',
      '    <input type="email" class="rdx-share-to" placeholder="recipient@email.com" style="padding:9px 11px;border:1px solid #cbd5e0;border-radius:6px;font-size:14px;font-family:inherit;outline:none">',
      '    <input type="email" class="rdx-share-from" placeholder="your@email.com (optional)" style="padding:9px 11px;border:1px solid #cbd5e0;border-radius:6px;font-size:14px;font-family:inherit;outline:none">',
      '  </div>',
      '  <textarea class="rdx-share-note" placeholder="Add a short note (optional)" rows="2" maxlength="500" style="width:100%;box-sizing:border-box;padding:9px 11px;border:1px solid #cbd5e0;border-radius:6px;font-size:14px;font-family:inherit;outline:none;resize:vertical;margin-bottom:8px"></textarea>',
      '  <div style="display:flex;gap:8px;align-items:center">',
      '    <button type="button" class="rdx-share-send-btn" style="padding:9px 16px;background:' + BRAND + ';color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit">Send</button>',
      '    <button type="button" class="rdx-share-cancel-btn" style="padding:9px 12px;background:none;color:#64748b;border:none;font-size:13px;cursor:pointer;font-family:inherit">Cancel</button>',
      '    <div class="rdx-share-feedback" style="font-size:12px;color:#16a34a;margin-left:6px"></div>',
      '  </div>',
      '</div>',
    ].join('');

    container.appendChild(panel);

    // Wire handlers
    panel.querySelector('.rdx-share-copy-btn').addEventListener('click', function () {
      var btn = this;
      copyToClipboard(shareUrl).then(function () {
        btn.textContent = '✓ Copied';
        btn.style.background = '#16a34a';
        setTimeout(function () {
          btn.textContent = 'Copy link';
          btn.style.background = BRAND;
        }, 2200);
        logShare({ caseSlug: opts.caseSlug, channel: 'copy_link', context: 'post_case' });
      }).catch(function () {
        btn.textContent = 'Copy failed';
      });
    });

    var emailForm = panel.querySelector('.rdx-share-email-form');
    panel.querySelector('.rdx-share-email-btn').addEventListener('click', function () {
      emailForm.style.display = emailForm.style.display === 'none' ? 'block' : 'none';
      if (emailForm.style.display === 'block') {
        panel.querySelector('.rdx-share-to').focus();
      }
    });

    panel.querySelector('.rdx-share-cancel-btn').addEventListener('click', function () {
      emailForm.style.display = 'none';
    });

    panel.querySelector('.rdx-share-send-btn').addEventListener('click', function () {
      var sendBtn = this;
      var to = panel.querySelector('.rdx-share-to').value.trim();
      var from = panel.querySelector('.rdx-share-from').value.trim();
      var note = panel.querySelector('.rdx-share-note').value.trim();
      var feedback = panel.querySelector('.rdx-share-feedback');

      if (!isValidEmail(to)) {
        feedback.style.color = '#dc2626';
        feedback.textContent = 'Enter a valid email';
        return;
      }

      sendBtn.disabled = true;
      sendBtn.textContent = 'Sending…';
      feedback.style.color = '#64748b';
      feedback.textContent = '';

      sendCaseByEmail({
        caseSlug: opts.caseSlug,
        caseTitle: opts.caseTitle,
        recipientEmail: to,
        senderEmail: from || null,
        note: note || null,
      }).then(function () {
        sendBtn.textContent = '✓ Sent';
        sendBtn.style.background = '#16a34a';
        feedback.style.color = '#16a34a';
        feedback.textContent = 'Email on its way to ' + to;
        logShare({ caseSlug: opts.caseSlug, channel: 'email', context: 'post_case' });
        setTimeout(function () {
          emailForm.style.display = 'none';
          // Reset form for a possible second share
          sendBtn.disabled = false;
          sendBtn.textContent = 'Send';
          sendBtn.style.background = BRAND;
          panel.querySelector('.rdx-share-to').value = '';
          panel.querySelector('.rdx-share-note').value = '';
          feedback.textContent = '';
        }, 2500);
      }).catch(function () {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send';
        feedback.style.color = '#dc2626';
        feedback.textContent = 'Failed to send — try copy link instead';
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  function isValidEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  }

  function escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  return {
    getCaseShareUrl: getCaseShareUrl,
    getReferralShareUrl: getReferralShareUrl,
    sendCaseByEmail: sendCaseByEmail,
    logShare: logShare,
    copyToClipboard: copyToClipboard,
    renderPostCaseSharePanel: renderPostCaseSharePanel,
  };
})();
