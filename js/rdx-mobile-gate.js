/**
 * RDX Mobile Gate
 * -----------------------------------------------------------------------------
 * Shows a full-screen overlay on mobile devices explaining that ReasonDx is
 * built for desktop. Offers to email the current link to the user so they
 * can pick up on a computer, plus a small "continue anyway" escape hatch
 * for users who understand and still want to proceed.
 *
 * Design notes:
 * - Mobile detection: viewport width <768px OR touch device with UA hint.
 *   Belt-and-suspenders to avoid false positives on tablets with keyboards.
 * - Dismissal: sessionStorage ("continue anyway" this session only) —
 *   returning visitors see the gate again, which is intentional.
 * - Email capture: reuses existing rdx-email Cloudflare worker with a new
 *   eventType 'mobile_gate_signup'. No backend changes required.
 * - Loads early and renders inline CSS — no dependency on design-system.css
 *   so it renders correctly even if stylesheet is slow.
 */
(function () {
  'use strict';

  // ---- Guards --------------------------------------------------------------

  // Only run once per page
  if (window.__RDX_MOBILE_GATE_ACTIVE__) return;
  window.__RDX_MOBILE_GATE_ACTIVE__ = true;

  // Skip on specific utility pages (e.g., embedded admin, oembed, redirects)
  var SKIP_PATHS = [
    '/admin-',        // admin pages are desktop-only already
    '/oauth',
    '/auth-callback',
  ];
  var currentPath = window.location.pathname.toLowerCase();
  for (var i = 0; i < SKIP_PATHS.length; i++) {
    if (currentPath.indexOf(SKIP_PATHS[i]) === 0) return;
  }

  // ---- Mobile detection ----------------------------------------------------

  function isMobile() {
    // Primary: viewport width
    var narrow = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
    if (!narrow) return false;

    // Belt-and-suspenders: confirm it's a touch device or has a mobile UA.
    // This avoids gating desktop users who've just narrowed their browser.
    var touch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    var mobileUA = /Mobi|Android|iPhone|iPad|iPod|IEMobile|BlackBerry/i.test(navigator.userAgent || '');
    return touch || mobileUA;
  }

  if (!isMobile()) return;

  // Check session dismissal
  try {
    if (sessionStorage.getItem('rdx_mobile_gate_dismissed') === '1') return;
  } catch (e) {
    // sessionStorage blocked — proceed with gate, dismissal just won't persist
  }

  // ---- Config --------------------------------------------------------------

  var BRAND_COLOR = '#2874A6';
  var BRAND_DARK = '#1e5a82';
  var EMAIL_WORKER =
    (window.RDX_CONFIG && window.RDX_CONFIG.EMAIL_WORKER) ||
    'https://rdx-email.laurenmfine.workers.dev';

  // ---- Render --------------------------------------------------------------

  function render() {
    // Inject styles
    var style = document.createElement('style');
    style.setAttribute('data-rdx-mobile-gate', 'true');
    style.textContent = [
      '#rdx-mobile-gate{',
      '  position:fixed;top:0;left:0;right:0;bottom:0;',
      '  background:#ffffff;z-index:2147483646;',
      '  display:flex;flex-direction:column;',
      '  font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;',
      '  color:#1a202c;overflow-y:auto;',
      '  -webkit-font-smoothing:antialiased;',
      '}',
      '#rdx-mobile-gate .rdx-mg-inner{',
      '  max-width:460px;margin:0 auto;padding:32px 22px 40px;',
      '  display:flex;flex-direction:column;min-height:100vh;',
      '}',
      '#rdx-mobile-gate .rdx-mg-brand{',
      '  display:flex;align-items:center;gap:10px;',
      '  color:' + BRAND_COLOR + ';font-weight:700;font-size:18px;',
      '  margin-bottom:36px;letter-spacing:-0.01em;',
      '}',
      '#rdx-mobile-gate .rdx-mg-brand-dot{',
      '  width:10px;height:10px;border-radius:50%;',
      '  background:' + BRAND_COLOR + ';display:inline-block;',
      '}',
      '#rdx-mobile-gate h1{',
      '  font-size:26px;line-height:1.25;font-weight:700;',
      '  color:#0f1e2e;margin:0 0 14px;letter-spacing:-0.02em;',
      '}',
      '#rdx-mobile-gate .rdx-mg-body{',
      '  font-size:16px;line-height:1.55;color:#3a4a5c;',
      '  margin:0 0 28px;',
      '}',
      '#rdx-mobile-gate .rdx-mg-card{',
      '  background:#f5f9fc;border:1px solid #d9e6f0;',
      '  border-radius:12px;padding:20px 18px;margin-bottom:16px;',
      '}',
      '#rdx-mobile-gate .rdx-mg-card-label{',
      '  font-size:13px;font-weight:600;color:' + BRAND_COLOR + ';',
      '  text-transform:uppercase;letter-spacing:0.05em;',
      '  margin:0 0 10px;',
      '}',
      '#rdx-mobile-gate .rdx-mg-card-text{',
      '  font-size:15px;line-height:1.5;color:#3a4a5c;',
      '  margin:0 0 14px;',
      '}',
      '#rdx-mobile-gate .rdx-mg-input{',
      '  width:100%;box-sizing:border-box;',
      '  padding:13px 14px;font-size:16px;',
      '  border:1px solid #cbd5e0;border-radius:8px;',
      '  background:#fff;color:#1a202c;',
      '  font-family:inherit;-webkit-appearance:none;',
      '  margin-bottom:10px;',
      '}',
      '#rdx-mobile-gate .rdx-mg-input:focus{',
      '  outline:none;border-color:' + BRAND_COLOR + ';',
      '  box-shadow:0 0 0 3px rgba(40,116,166,0.15);',
      '}',
      '#rdx-mobile-gate .rdx-mg-btn{',
      '  width:100%;box-sizing:border-box;',
      '  padding:14px 16px;font-size:16px;font-weight:600;',
      '  background:' + BRAND_COLOR + ';color:#fff;',
      '  border:none;border-radius:8px;cursor:pointer;',
      '  font-family:inherit;transition:background 0.15s;',
      '  -webkit-appearance:none;',
      '}',
      '#rdx-mobile-gate .rdx-mg-btn:hover,',
      '#rdx-mobile-gate .rdx-mg-btn:active{',
      '  background:' + BRAND_DARK + ';',
      '}',
      '#rdx-mobile-gate .rdx-mg-btn:disabled{',
      '  background:#9eb3c4;cursor:default;',
      '}',
      '#rdx-mobile-gate .rdx-mg-success{',
      '  background:#e6f4ea;border:1px solid #a7d9b9;',
      '  color:#1e4d30;padding:14px;border-radius:8px;',
      '  font-size:15px;line-height:1.5;',
      '}',
      '#rdx-mobile-gate .rdx-mg-error{',
      '  color:#c02323;font-size:13px;margin-top:6px;',
      '}',
      '#rdx-mobile-gate .rdx-mg-continue{',
      '  display:block;text-align:center;',
      '  margin-top:22px;padding:10px;',
      '  color:#6b7a8a;font-size:14px;',
      '  text-decoration:underline;',
      '  background:none;border:none;cursor:pointer;',
      '  font-family:inherit;width:100%;',
      '}',
      '#rdx-mobile-gate .rdx-mg-continue:hover{color:' + BRAND_COLOR + ';}',
      '#rdx-mobile-gate .rdx-mg-footer{',
      '  margin-top:auto;padding-top:28px;',
      '  font-size:13px;color:#8899a8;line-height:1.5;',
      '  text-align:center;',
      '}',
      '#rdx-mobile-gate .rdx-mg-footer strong{color:' + BRAND_COLOR + ';font-weight:600;}',
      'html.rdx-mg-locked,body.rdx-mg-locked{overflow:hidden!important;height:100%!important;}',
    ].join('');
    document.head.appendChild(style);

    // Build overlay DOM
    var overlay = document.createElement('div');
    overlay.id = 'rdx-mobile-gate';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'rdx-mg-heading');
    overlay.innerHTML = [
      '<div class="rdx-mg-inner">',
      '  <div class="rdx-mg-brand">',
      '    <span class="rdx-mg-brand-dot"></span>',
      '    <span>ReasonDx</span>',
      '  </div>',
      '  <h1 id="rdx-mg-heading">ReasonDx is built for desktop.</h1>',
      '  <p class="rdx-mg-body">',
      '    We\'re working on a mobile experience, but it\'s not ready yet. ',
      '    For the full clinical reasoning platform — virtual EMR, AI attending, ',
      '    and interactive cases — please visit us on a computer.',
      '  </p>',
      '  <div class="rdx-mg-card" id="rdx-mg-form-card">',
      '    <div class="rdx-mg-card-label">Email me the link</div>',
      '    <p class="rdx-mg-card-text">',
      '      We\'ll send you a note so you can pick up where you left off on your PC.',
      '    </p>',
      '    <form id="rdx-mg-form" novalidate>',
      '      <input type="email" class="rdx-mg-input" id="rdx-mg-email" ',
      '        placeholder="you@email.com" autocomplete="email" required>',
      '      <button type="submit" class="rdx-mg-btn" id="rdx-mg-submit">',
      '        Email me the link',
      '      </button>',
      '      <div class="rdx-mg-error" id="rdx-mg-error" style="display:none;"></div>',
      '    </form>',
      '  </div>',
      '  <button type="button" class="rdx-mg-continue" id="rdx-mg-continue">',
      '    Continue to mobile site anyway',
      '  </button>',
      '  <div class="rdx-mg-footer">',
      '    <strong>ReasonDx</strong><br>',
      '    Clinical reasoning, built for the people who teach it.',
      '  </div>',
      '</div>',
    ].join('');

    // Attach
    (document.body || document.documentElement).appendChild(overlay);
    if (document.documentElement) document.documentElement.classList.add('rdx-mg-locked');
    if (document.body) document.body.classList.add('rdx-mg-locked');

    // Wire up handlers
    var form = document.getElementById('rdx-mg-form');
    var submitBtn = document.getElementById('rdx-mg-submit');
    var errorEl = document.getElementById('rdx-mg-error');
    var formCard = document.getElementById('rdx-mg-form-card');
    var continueBtn = document.getElementById('rdx-mg-continue');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = document.getElementById('rdx-mg-email');
      var email = (emailInput.value || '').trim();

      if (!isValidEmail(email)) {
        errorEl.textContent = 'Please enter a valid email address.';
        errorEl.style.display = 'block';
        return;
      }
      errorEl.style.display = 'none';

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      sendEmailCapture(email)
        .then(function () {
          formCard.innerHTML =
            '<div class="rdx-mg-success">' +
            '✓ Sent! Check <strong>' + escapeHtml(email) + '</strong> on your computer.' +
            '</div>';
        })
        .catch(function (err) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Email me the link';
          errorEl.textContent =
            'Something went wrong. Please try again, or email us at hello@reasondx.com.';
          errorEl.style.display = 'block';
          if (window.console) console.warn('[RDX Mobile Gate] Email submit failed:', err);
        });
    });

    continueBtn.addEventListener('click', function () {
      try { sessionStorage.setItem('rdx_mobile_gate_dismissed', '1'); } catch (e) {}
      if (document.documentElement) document.documentElement.classList.remove('rdx-mg-locked');
      if (document.body) document.body.classList.remove('rdx-mg-locked');
      overlay.parentNode && overlay.parentNode.removeChild(overlay);
    });
  }

  // ---- Helpers -------------------------------------------------------------

  function isValidEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function sendEmailCapture(email) {
    var payload = {
      eventType: 'mobile_gate_signup',
      email: email,
      firstName: email.split('@')[0],
      data: {
        source: 'mobile_gate',
        page: window.location.pathname,
        fullUrl: window.location.href,
        userAgent: navigator.userAgent || '',
        timestamp: new Date().toISOString(),
      },
    };
    return fetch(EMAIL_WORKER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(function (r) {
      // Treat any non-network response as success for the user.
      // Worker may queue/log even on partial failure; logging captured above.
      if (!r || !r.ok) {
        if (window.console) console.warn('[RDX Mobile Gate] Worker returned non-OK:', r && r.status);
      }
      return true;
    });
  }

  // ---- Boot ----------------------------------------------------------------

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, { once: true });
  } else {
    render();
  }
})();
