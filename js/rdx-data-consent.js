/**
 * RDX Data Consent
 * -----------------------------------------------------------------------------
 * Handles three consent flows:
 *
 * 1. First-visit modal (anonymous)
 *    Shows once per device on first page view (localStorage-persistent).
 *    Logs an anonymous acknowledgment tied to the session_id.
 *
 * 2. Identified consent at account registration
 *    Registration page calls RDXDataConsent.recordIdentifiedConsent({
 *      email, userId, source: 'registration'
 *    }) after successful signup. Creates a new acknowledgment row with
 *    email and user_id populated — the legally strongest record.
 *
 * 3. Retroactive linking at email capture
 *    When the existing email-capture modal succeeds, call
 *    RDXDataConsent.linkExistingConsent(email) to add an email-tagged
 *    acknowledgment so the anonymous session's prior acknowledgment
 *    can be tied to an identity.
 *
 * Storage key: localStorage 'rdx_data_consent_ack' = ISO timestamp
 * Policy version: '2026-04' (bump this when the privacy page changes
 * materially, to re-prompt existing users).
 *
 * Defers to mobile gate: if a mobile user hasn't dismissed the mobile gate,
 * the consent modal does NOT show (to avoid stacked overlays).
 */
(function () {
  'use strict';

  var POLICY_VERSION = '2026-04';
  var STORAGE_KEY = 'rdx_data_consent_ack';
  var STORAGE_VERSION_KEY = 'rdx_data_consent_version';
  var BRAND = '#2874A6';
  var BRAND_DARK = '#1B4F72';
  var PRIVACY_URL = '/auth/privacy.html';

  // --------------------------------------------------------------------------
  // Public API (always available, even if modal doesn't render)
  // --------------------------------------------------------------------------
  var RDXDataConsent = {
    /**
     * Record an identified consent — called after account registration
     * or any other moment when a user's identity becomes known AND they've
     * explicitly agreed (e.g., via a checkbox).
     *
     * opts: { email: string, userId?: string, source: string }
     * Writes a new row to Supabase with email and (optionally) user_id.
     * Returns a Promise that resolves regardless of network outcome.
     */
    recordIdentifiedConsent: function (opts) {
      opts = opts || {};
      var ts = new Date().toISOString();
      try { localStorage.setItem(STORAGE_KEY, ts); } catch (e) {}
      try { localStorage.setItem(STORAGE_VERSION_KEY, POLICY_VERSION); } catch (e) {}

      return logToSupabase({
        session_id: getSessionId(),
        email: opts.email || null,
        user_id: opts.userId || null,
        policy_version: POLICY_VERSION,
        acknowledged_at: ts,
        source: opts.source || 'identified',
        page: window.location.pathname,
        user_agent: (navigator.userAgent || '').slice(0, 500),
      });
    },

    /**
     * Link an existing anonymous consent to an email address. Called from
     * email-capture flows (e.g., the browse.html email modal) where the
     * user gave email but didn't explicitly re-acknowledge.
     *
     * Writes a new row with the email and source='email_capture'. Does NOT
     * replace the prior anonymous row — keeps the full paper trail.
     */
    linkExistingConsent: function (email) {
      if (!email) return Promise.resolve();
      var ts = new Date().toISOString();
      return logToSupabase({
        session_id: getSessionId(),
        email: email,
        user_id: null,
        policy_version: POLICY_VERSION,
        acknowledged_at: ts,
        source: 'email_capture',
        page: window.location.pathname,
        user_agent: (navigator.userAgent || '').slice(0, 500),
      });
    },

    /**
     * Has this device already acknowledged the current policy version?
     */
    hasAcknowledged: function () {
      try {
        var ack = localStorage.getItem(STORAGE_KEY);
        var ver = localStorage.getItem(STORAGE_VERSION_KEY);
        // If user acknowledged an older version, re-prompt.
        return !!ack && (!ver || ver === POLICY_VERSION);
      } catch (e) { return false; }
    },

    /**
     * Force-show the modal (e.g., from an account settings page).
     */
    show: function () {
      renderModal();
    },

    POLICY_VERSION: POLICY_VERSION,
  };

  window.RDXDataConsent = RDXDataConsent;

  // --------------------------------------------------------------------------
  // Modal rendering (first-visit flow)
  // --------------------------------------------------------------------------
  if (window.__RDX_DATA_CONSENT_MODAL_ACTIVE__) return;
  window.__RDX_DATA_CONSENT_MODAL_ACTIVE__ = true;

  // Skip on specific pages
  var path = (window.location.pathname || '').toLowerCase();
  var SKIP_PREFIXES = ['/admin-', '/oauth', '/auth-callback'];
  var SKIP_EXACT = [
    '/auth/privacy.html',
    '/auth/terms.html',
    '/404.html',
  ];
  for (var i = 0; i < SKIP_PREFIXES.length; i++) {
    if (path.indexOf(SKIP_PREFIXES[i]) === 0) return;
  }
  for (var j = 0; j < SKIP_EXACT.length; j++) {
    if (path === SKIP_EXACT[j]) return;
  }

  // Already acknowledged current policy version? Skip modal.
  if (RDXDataConsent.hasAcknowledged()) return;

  // Defer to mobile gate
  try {
    var narrow = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
    var touch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    var mobileUA = /Mobi|Android|iPhone|iPad|iPod|IEMobile|BlackBerry/i.test(navigator.userAgent || '');
    var gateDismissed = sessionStorage.getItem('rdx_mobile_gate_dismissed') === '1';
    if (narrow && (touch || mobileUA) && !gateDismissed) return;
  } catch (e) {}

  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------
  function getSessionId() {
    try {
      var existing = localStorage.getItem('rdx-session-id');
      if (existing) return existing;
    } catch (e) {}
    var id = 'sess_' + Date.now() + '_' + Math.random().toString(36).slice(2, 11);
    try { localStorage.setItem('rdx-session-id', id); } catch (e) {}
    return id;
  }

  function logToSupabase(row) {
    return new Promise(function (resolve) {
      try {
        var url = (window.RDX_CONFIG && window.RDX_CONFIG.SUPABASE_URL) || '';
        var key = (window.RDX_CONFIG && window.RDX_CONFIG.SUPABASE_ANON_KEY) || '';
        if (!url || !key) { resolve(false); return; }

        fetch(url + '/rest/v1/consent_acknowledgments', {
          method: 'POST',
          headers: {
            'apikey': key,
            'Authorization': 'Bearer ' + key,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify(row),
          keepalive: true,
        }).then(function () { resolve(true); })
          .catch(function () { resolve(false); });
      } catch (e) { resolve(false); }
    });
  }

  function renderModal() {
    // Don't double-render
    if (document.getElementById('rdx-consent-overlay')) return;

    var style = document.createElement('style');
    style.setAttribute('data-rdx-consent', 'true');
    style.textContent = [
      '#rdx-consent-overlay{',
      '  position:fixed;top:0;left:0;right:0;bottom:0;',
      '  background:rgba(10,22,38,0.62);backdrop-filter:blur(3px);',
      '  z-index:2147483645;display:flex;align-items:center;justify-content:center;',
      '  padding:20px;font-family:"DM Sans","IBM Plex Sans","Helvetica Neue",Arial,sans-serif;',
      '  animation:rdx-consent-fade 0.18s ease;',
      '}',
      '@keyframes rdx-consent-fade{from{opacity:0}to{opacity:1}}',
      '#rdx-consent-modal{',
      '  background:#fff;max-width:520px;width:100%;',
      '  border-radius:14px;padding:32px 30px 26px;',
      '  box-shadow:0 24px 60px rgba(10,22,38,0.28);',
      '  max-height:calc(100vh - 40px);overflow-y:auto;',
      '  animation:rdx-consent-slide 0.22s ease;',
      '}',
      '@keyframes rdx-consent-slide{from{transform:translateY(12px);opacity:0}to{transform:translateY(0);opacity:1}}',
      '#rdx-consent-modal .rdx-c-brand{',
      '  display:flex;align-items:center;gap:9px;',
      '  color:' + BRAND + ';font-weight:700;font-size:15px;',
      '  margin-bottom:18px;letter-spacing:-0.01em;',
      '}',
      '#rdx-consent-modal .rdx-c-dot{',
      '  width:9px;height:9px;border-radius:50%;background:' + BRAND + ';',
      '}',
      '#rdx-consent-modal h2{',
      '  font-size:22px;line-height:1.3;font-weight:700;',
      '  color:#0f1e2e;margin:0 0 14px;letter-spacing:-0.02em;',
      '}',
      '#rdx-consent-modal p{',
      '  font-size:15px;line-height:1.58;color:#3a4a5c;margin:0 0 12px;',
      '}',
      '#rdx-consent-modal ul{margin:0 0 16px 20px;padding:0;}',
      '#rdx-consent-modal li{',
      '  font-size:14px;line-height:1.55;color:#3a4a5c;margin-bottom:6px;',
      '}',
      '#rdx-consent-modal .rdx-c-link{',
      '  color:' + BRAND + ';text-decoration:underline;font-weight:500;',
      '}',
      '#rdx-consent-modal .rdx-c-link:hover{color:' + BRAND_DARK + ';}',
      '#rdx-consent-modal .rdx-c-actions{',
      '  display:flex;flex-direction:column;gap:10px;margin-top:22px;',
      '}',
      '#rdx-consent-modal .rdx-c-btn{',
      '  padding:13px 18px;font-size:15px;font-weight:600;',
      '  background:' + BRAND + ';color:#fff;',
      '  border:none;border-radius:8px;cursor:pointer;',
      '  font-family:inherit;transition:background 0.15s;',
      '  -webkit-appearance:none;',
      '}',
      '#rdx-consent-modal .rdx-c-btn:hover{background:' + BRAND_DARK + ';}',
      '#rdx-consent-modal .rdx-c-secondary{',
      '  padding:10px;font-size:13px;color:#6b7a8a;',
      '  background:none;border:none;text-align:center;cursor:pointer;',
      '  text-decoration:underline;font-family:inherit;',
      '}',
      '#rdx-consent-modal .rdx-c-secondary:hover{color:' + BRAND + ';}',
      '#rdx-consent-modal .rdx-c-footer{',
      '  margin-top:18px;padding-top:14px;border-top:1px solid #eef2f6;',
      '  font-size:12px;color:#8899a8;line-height:1.5;',
      '}',
      'html.rdx-c-locked,body.rdx-c-locked{overflow:hidden!important;}',
      '@media (max-width:480px){',
      '  #rdx-consent-modal{padding:24px 22px 20px;}',
      '  #rdx-consent-modal h2{font-size:20px;}',
      '}',
    ].join('');
    document.head.appendChild(style);

    var overlay = document.createElement('div');
    overlay.id = 'rdx-consent-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'rdx-c-heading');
    overlay.innerHTML = [
      '<div id="rdx-consent-modal">',
      '  <div class="rdx-c-brand">',
      '    <span class="rdx-c-dot"></span>',
      '    <span>ReasonDx</span>',
      '  </div>',
      '  <h2 id="rdx-c-heading">Before you start — a quick note on your data.</h2>',
      '  <p>',
      '    ReasonDx is a clinical reasoning education platform. To help you learn, we collect and analyze how you interact with the platform — including the free-text responses you type. In plain English:',
      '  </p>',
      '  <ul>',
      '    <li>We record which cases you work on, your answers, and the text of your responses to the AI attending.</li>',
      '    <li>We analyze your responses for reasoning patterns — confidence language, question style, response latency, and signals of common cognitive biases — to give you feedback.</li>',
      '    <li>We use aggregated, de-identified patterns to improve the platform. Any <em>formal</em> research study requires separate, explicit consent.</li>',
      '    <li>We don\'t sell your data. You can request a copy or deletion anytime.</li>',
      '  </ul>',
      '  <p>',
      '    Full details — what we collect, how we analyze it, third parties, your rights — are on our ',
      '    <a href="' + PRIVACY_URL + '" class="rdx-c-link" target="_blank" rel="noopener">Privacy &amp; Data Practices</a> page.',
      '  </p>',
      '  <div class="rdx-c-actions">',
      '    <button type="button" class="rdx-c-btn" id="rdx-c-accept">I understand — continue</button>',
      '    <a href="' + PRIVACY_URL + '" class="rdx-c-secondary" id="rdx-c-read">Read the full policy first</a>',
      '  </div>',
      '  <div class="rdx-c-footer">',
      '    Questions? Email <a href="mailto:reasondxeducation@gmail.com" class="rdx-c-link">reasondxeducation@gmail.com</a>.',
      '  </div>',
      '</div>',
    ].join('');

    (document.body || document.documentElement).appendChild(overlay);
    if (document.documentElement) document.documentElement.classList.add('rdx-c-locked');
    if (document.body) document.body.classList.add('rdx-c-locked');

    document.getElementById('rdx-c-accept').addEventListener('click', acknowledgeAnonymous);
  }

  function acknowledgeAnonymous() {
    var ts = new Date().toISOString();
    try { localStorage.setItem(STORAGE_KEY, ts); } catch (e) {}
    try { localStorage.setItem(STORAGE_VERSION_KEY, POLICY_VERSION); } catch (e) {}

    logToSupabase({
      session_id: getSessionId(),
      email: null,
      user_id: null,
      policy_version: POLICY_VERSION,
      acknowledged_at: ts,
      source: 'first_visit_modal',
      page: window.location.pathname,
      user_agent: (navigator.userAgent || '').slice(0, 500),
    });

    var overlay = document.getElementById('rdx-consent-overlay');
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    if (document.documentElement) document.documentElement.classList.remove('rdx-c-locked');
    if (document.body) document.body.classList.remove('rdx-c-locked');
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderModal, { once: true });
  } else {
    renderModal();
  }
})();
