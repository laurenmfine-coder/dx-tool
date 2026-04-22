/**
 * RDX Save & Resume
 * -----------------------------------------------------------------------------
 * Lets users save their mid-case progress and receive an email link to
 * resume later. Works for anonymous and authenticated users.
 *
 * Behavior:
 *   - Persistent "Save my progress" button appears 30 seconds after page load
 *   - On desktop, also triggers a save prompt on exit-intent (mouseleave to top)
 *   - Clicking "Save" opens a modal that collects the email (skipped if authed)
 *   - On submit, state is POSTed to Supabase and an email is sent via the
 *     existing rdx-email Cloudflare worker (new 'case_save' event type)
 *   - If the page URL has ?resume=<token>, the state is fetched on load and
 *     the page is expected to rehydrate from it (delegated to host page)
 *
 * State source:
 *   Reads from localStorage 'rdx-active-session' and 'rdx-active-session-<caseId>'
 *   which simulation-engine.html auto-saves every 30 seconds. Phase 1 scope:
 *   we rely on the host page's existing auto-save system. Phase 2 can add
 *   deeper state capture.
 */
window.RDXSaveResume = (function () {
  'use strict';

  var BRAND = '#2874A6';
  var BRAND_DARK = '#1B4F72';
  var ORIGIN = (typeof window !== 'undefined' && window.location && window.location.origin)
    ? window.location.origin
    : 'https://reasondx.com';

  var SHOW_AFTER_MS = 30 * 1000;  // 30 seconds before the button appears
  var _buttonShown = false;
  var _exitIntentBound = false;
  var _exitIntentShown = false;
  var _lastSaveToken = null;

  // ---------------------------------------------------------------------------
  // State capture
  // ---------------------------------------------------------------------------

  /**
   * Collect the best available state snapshot from the host page.
   * Primarily reads from the existing auto-save in localStorage.
   */
  function captureState() {
    var state = null;

    // 1. Prefer the canonical 'rdx-active-session' key (simulation-engine writes this)
    try {
      var raw = localStorage.getItem('rdx-active-session');
      if (raw) state = JSON.parse(raw);
    } catch (e) {}

    // 2. If host page exposes a getter, use that (for future deeper integration)
    if (!state && typeof window.RDX_SAVE_RESUME_CAPTURE === 'function') {
      try { state = window.RDX_SAVE_RESUME_CAPTURE(); } catch (e) {}
    }

    // 3. Fall back to URL-based minimum state for virtual-emr
    if (!state) {
      var params = new URLSearchParams(window.location.search);
      var cx = params.get('cx') || params.get('case') || '';
      var slug = cx;
      if (cx && window.RDX_CASE_TOKENS && window.RDX_CASE_TOKENS.tokenToSlug) {
        slug = window.RDX_CASE_TOKENS.tokenToSlug[cx] || cx;
      }
      if (slug) {
        state = {
          caseId: slug,
          caseName: slug,
          phase: 1,
          phaseLabel: 'In Progress',
        };
      }
    }

    return state;
  }

  // ---------------------------------------------------------------------------
  // Token generation
  // ---------------------------------------------------------------------------

  function generateResumeToken() {
    // 16-char opaque token — safe for URLs, hard to guess
    var chars = 'abcdefghjkmnpqrstuvwxyz23456789';
    var t = '';
    for (var i = 0; i < 16; i++) {
      t += chars[Math.floor(Math.random() * chars.length)];
    }
    return t;
  }

  // ---------------------------------------------------------------------------
  // Save to Supabase + send email via worker
  // ---------------------------------------------------------------------------

  async function saveAndEmail(email, state, opts) {
    opts = opts || {};
    var supaUrl = window.RDX_CONFIG && window.RDX_CONFIG.SUPABASE_URL;
    var supaKey = window.RDX_CONFIG && window.RDX_CONFIG.SUPABASE_ANON_KEY;
    if (!supaUrl || !supaKey) {
      throw new Error('Supabase not configured');
    }

    var token = generateResumeToken();
    var sessionId = '';
    try { sessionId = localStorage.getItem('rdx-session-id') || ''; } catch (e) {}

    var userId = null;
    try {
      var u = window.RDX && window.RDX.getProfile && window.RDX.getProfile();
      if (u && u.id) userId = u.id;
    } catch (e) {}

    var row = {
      session_id: sessionId || null,
      user_id: userId,
      case_id: (state && state.caseId) || 'unknown',
      case_page: opts.page || (location.pathname.split('/').pop() || ''),
      case_phase: (state && state.phase) || null,
      email: email,
      state_blob: state || {},
      resume_token: token,
    };

    // 1) Insert into Supabase
    var sbResp = await fetch(supaUrl + '/rest/v1/case_saves', {
      method: 'POST',
      headers: {
        'apikey': supaKey,
        'Authorization': 'Bearer ' + supaKey,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(row),
    });

    if (!sbResp.ok) {
      var errText = await sbResp.text();
      throw new Error('Supabase save failed: ' + sbResp.status + ' ' + errText);
    }

    // 2) Fire the email via the email worker
    var worker = (window.RDX_CONFIG && window.RDX_CONFIG.EMAIL_WORKER) ||
                 'https://rdx-email.laurenmfine.workers.dev';

    var resumeUrl = ORIGIN + '/?resume=' + token;
    var caseName = (state && (state.caseName || state.caseId)) || 'your ReasonDx case';
    var phaseLabel = (state && (state.phaseLabel || ('Phase ' + (state.phase || '?')))) || '';

    try {
      await fetch(worker, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventType: 'case_save',
          email: email,
          firstName: email.split('@')[0],
          data: {
            caseName: caseName,
            phaseLabel: phaseLabel,
            resumeUrl: resumeUrl,
            timestamp: new Date().toISOString(),
          },
        }),
      });
    } catch (e) {
      // Don't block the user on email failure — the save succeeded.
      if (window.console) console.warn('[RDX Save] Email worker failed (save still recorded):', e);
    }

    _lastSaveToken = token;
    return { token: token, resumeUrl: resumeUrl };
  }

  // ---------------------------------------------------------------------------
  // UI: floating button
  // ---------------------------------------------------------------------------

  function renderButton() {
    if (_buttonShown) return;
    if (document.getElementById('rdx-save-resume-btn')) return;
    // Don't show on pages we don't know how to save
    var page = location.pathname.split('/').pop() || '';
    var isCasePage = /virtual-emr|simulation-engine/i.test(page);
    if (!isCasePage) return;

    var btn = document.createElement('button');
    btn.id = 'rdx-save-resume-btn';
    btn.setAttribute('aria-label', 'Save progress and email me the resume link');
    btn.innerHTML = '💾 Save my progress';
    btn.style.cssText = [
      'position: fixed',
      'bottom: 20px',
      'right: 20px',
      'z-index: 9998',
      'padding: 10px 16px',
      'background: ' + BRAND,
      'color: #fff',
      'border: none',
      'border-radius: 999px',
      'box-shadow: 0 4px 12px rgba(40,116,166,0.35)',
      'font-size: 13px',
      'font-weight: 600',
      'font-family: inherit',
      'cursor: pointer',
      'transition: transform 0.15s ease, box-shadow 0.15s ease',
    ].join(';');

    btn.addEventListener('mouseenter', function () {
      btn.style.transform = 'translateY(-2px)';
      btn.style.boxShadow = '0 6px 18px rgba(40,116,166,0.45)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transform = 'translateY(0)';
      btn.style.boxShadow = '0 4px 12px rgba(40,116,166,0.35)';
    });
    btn.addEventListener('click', function () { openSaveModal('button'); });

    document.body.appendChild(btn);
    _buttonShown = true;
  }

  // ---------------------------------------------------------------------------
  // UI: save modal
  // ---------------------------------------------------------------------------

  function openSaveModal(source) {
    // Remove existing if open
    var existing = document.getElementById('rdx-save-resume-modal');
    if (existing) existing.remove();

    var state = captureState();
    if (!state || !state.caseId) {
      alert("There's nothing to save yet — start a case first.");
      return;
    }

    // Prefill email if we know the user
    var prefillEmail = '';
    try {
      var profile = window.RDX && window.RDX.getProfile && window.RDX.getProfile();
      if (profile && profile.email) prefillEmail = profile.email;
      if (!prefillEmail) {
        var raw = localStorage.getItem('reasondx-user') || '{}';
        prefillEmail = JSON.parse(raw).email || '';
      }
    } catch (e) {}

    var overlay = document.createElement('div');
    overlay.id = 'rdx-save-resume-modal';
    overlay.style.cssText = [
      'position: fixed',
      'inset: 0',
      'z-index: 10000',
      'background: rgba(15, 23, 42, 0.6)',
      'display: flex',
      'align-items: center',
      'justify-content: center',
      'padding: 20px',
      'font-family: inherit',
    ].join(';');

    var box = document.createElement('div');
    box.style.cssText = [
      'background: #fff',
      'border-radius: 14px',
      'max-width: 440px',
      'width: 100%',
      'padding: 24px 24px 20px',
      'box-shadow: 0 20px 50px rgba(0,0,0,0.35)',
    ].join(';');

    var phaseLabel = state.phaseLabel || ('Phase ' + (state.phase || '?'));
    var caseName = state.caseName || state.caseId;

    box.innerHTML = [
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">',
      '  <span style="font-size:22px">💾</span>',
      '  <h3 style="margin:0;font-size:17px;font-weight:700;color:' + BRAND_DARK + '">Save your progress</h3>',
      '</div>',
      '<p style="margin:4px 0 16px;font-size:13px;color:#475569;line-height:1.5">',
      '  We\'ll email you a link to pick up where you left off — <strong>' + escapeHtml(phaseLabel) + '</strong> of ' + escapeHtml(caseName) + '.',
      '</p>',
      '<label style="display:block;font-size:12px;font-weight:600;color:#334155;margin-bottom:6px">Email</label>',
      '<input type="email" id="rdx-save-email" value="' + escapeHtml(prefillEmail) + '" placeholder="your@email.com" style="width:100%;box-sizing:border-box;padding:10px 12px;border:1px solid #cbd5e0;border-radius:8px;font-size:14px;font-family:inherit;outline:none">',
      '<div id="rdx-save-feedback" style="font-size:12px;min-height:16px;margin-top:8px;color:#dc2626"></div>',
      '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px">',
      '  <button id="rdx-save-cancel-btn" type="button" style="padding:10px 14px;background:none;border:none;color:#64748b;font-size:13px;cursor:pointer;font-family:inherit">Cancel</button>',
      '  <button id="rdx-save-submit-btn" type="button" style="padding:10px 18px;background:' + BRAND + ';color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit">Save & email me</button>',
      '</div>',
      '<div style="font-size:11px;color:#94a3b8;margin-top:14px;line-height:1.5">',
      '  We only use your email to send this link and (optionally) a reminder. See the <a href="/auth/privacy.html" style="color:' + BRAND + '">privacy page</a>.',
      '</div>',
    ].join('');

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    var emailInput = document.getElementById('rdx-save-email');
    var feedback = document.getElementById('rdx-save-feedback');
    var submitBtn = document.getElementById('rdx-save-submit-btn');
    var cancelBtn = document.getElementById('rdx-save-cancel-btn');

    setTimeout(function () { try { emailInput.focus(); } catch (e) {} }, 50);

    cancelBtn.addEventListener('click', function () { overlay.remove(); });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.remove();
    });

    submitBtn.addEventListener('click', async function () {
      var email = emailInput.value.trim();
      feedback.style.color = '#dc2626';
      if (!isValidEmail(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        emailInput.focus();
        return;
      }
      submitBtn.disabled = true;
      submitBtn.textContent = 'Saving…';
      feedback.textContent = '';

      try {
        var result = await saveAndEmail(email, state, { source: source });
        feedback.style.color = '#16a34a';
        feedback.textContent = '✓ Saved. Check ' + email + ' for your resume link.';
        submitBtn.textContent = '✓ Saved';
        setTimeout(function () { overlay.remove(); }, 2500);
      } catch (err) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Save & email me';
        feedback.style.color = '#dc2626';
        feedback.textContent = 'Save failed — please try again.';
        if (window.console) console.error('[RDX Save] failed:', err);
      }
    });

    emailInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') submitBtn.click();
      if (e.key === 'Escape') overlay.remove();
    });
  }

  // ---------------------------------------------------------------------------
  // Exit intent (desktop only)
  // ---------------------------------------------------------------------------

  function bindExitIntent() {
    if (_exitIntentBound) return;
    if (isMobile()) return;
    _exitIntentBound = true;

    document.addEventListener('mouseleave', function (e) {
      if (_exitIntentShown) return;
      // Only trigger when the cursor leaves through the TOP of the viewport
      if (e.clientY > 0) return;
      var state = captureState();
      if (!state || !state.caseId) return;
      _exitIntentShown = true;
      openSaveModal('exit_intent');
    });
  }

  function isMobile() {
    return (window.innerWidth < 768) ||
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent || '');
  }

  // ---------------------------------------------------------------------------
  // Resume flow — if ?resume=<token> in URL, fetch state and expose it
  // ---------------------------------------------------------------------------

  async function handleResumeUrl() {
    var params = new URLSearchParams(window.location.search);
    var token = params.get('resume');
    if (!token) return null;

    var supaUrl = window.RDX_CONFIG && window.RDX_CONFIG.SUPABASE_URL;
    var supaKey = window.RDX_CONFIG && window.RDX_CONFIG.SUPABASE_ANON_KEY;
    if (!supaUrl || !supaKey) return null;

    try {
      var resp = await fetch(
        supaUrl + '/rest/v1/case_saves?resume_token=eq.' + encodeURIComponent(token) + '&select=*',
        { headers: { 'apikey': supaKey, 'Authorization': 'Bearer ' + supaKey } }
      );
      if (!resp.ok) return null;
      var rows = await resp.json();
      if (!rows || !rows.length) return null;
      var row = rows[0];

      // Stash state for the host page to pick up (simulation-engine looks
      // at localStorage for auto-resume already)
      try {
        localStorage.setItem('rdx-active-session', JSON.stringify(row.state_blob));
        if (row.state_blob && row.state_blob.caseId) {
          localStorage.setItem('rdx-active-session-' + row.state_blob.caseId, JSON.stringify(row.state_blob));
        }
      } catch (e) {}

      // Mark as resumed (fire and forget)
      fetch(
        supaUrl + '/rest/v1/case_saves?resume_token=eq.' + encodeURIComponent(token),
        {
          method: 'PATCH',
          headers: {
            'apikey': supaKey,
            'Authorization': 'Bearer ' + supaKey,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({ resumed_at: new Date().toISOString() }),
        }
      ).catch(function () {});

      // Dispatch event so host pages can react
      document.dispatchEvent(new CustomEvent('rdx:resume', { detail: { state: row.state_blob, token: token } }));

      // Show a brief banner confirming the resume
      showResumeBanner(row.state_blob);

      return row;
    } catch (e) {
      if (window.console) console.warn('[RDX Resume] failed:', e);
      return null;
    }
  }

  function showResumeBanner(state) {
    var banner = document.createElement('div');
    banner.style.cssText = [
      'position: fixed',
      'top: 16px',
      'left: 50%',
      'transform: translateX(-50%)',
      'z-index: 9999',
      'background: #ecfdf5',
      'border: 1px solid #6ee7b7',
      'color: #065f46',
      'padding: 10px 18px',
      'border-radius: 999px',
      'font-size: 13px',
      'font-weight: 600',
      'box-shadow: 0 4px 12px rgba(5,150,105,0.25)',
      'font-family: inherit',
    ].join(';');
    banner.textContent = '✓ Welcome back — your progress was restored';
    document.body.appendChild(banner);
    setTimeout(function () {
      banner.style.transition = 'opacity 0.4s';
      banner.style.opacity = '0';
      setTimeout(function () { banner.remove(); }, 500);
    }, 4000);
  }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  function isValidEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s || '');
  }

  function escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ---------------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------------

  function init() {
    // Handle incoming ?resume= token FIRST, before any auto-save overwrites localStorage
    handleResumeUrl();

    // Show the save button on case pages after 30s
    setTimeout(function () {
      renderButton();
      bindExitIntent();
    }, SHOW_AFTER_MS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return {
    openSaveModal: openSaveModal,
    captureState: captureState,
    saveAndEmail: saveAndEmail,
    handleResumeUrl: handleResumeUrl,
  };
})();
