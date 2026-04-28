/**
 * ════════════════════════════════════════════════════════════
 *  rdx-help-fab.js  —  Persistent "Get unstuck" floating button
 * ════════════════════════════════════════════════════════════
 *
 *  Renders a small fixed-position help button on every page that
 *  loads it (today: virtual-emr.html). When clicked, opens a
 *  three-option menu:
 *
 *    • Talk it through with the attending  → switchTab('coach')
 *    • Look up the mechanism                → pathway.html?topic=...
 *    • Stuck on what to ask the patient?    → switchTab('interview')
 *      and surface the starter chips
 *
 *  Why this exists:
 *  CoachDx and MechanismDx are powerful but live in places students
 *  don't notice mid-case (CoachDx is grouped under "Debrief & Present",
 *  MechanismDx only appears in lab insight popups). This FAB makes
 *  them one click away from any tab during a case.
 *
 *  Design constraints honored:
 *  • Only renders if PATIENT and CASE_ID are present (i.e. a case is
 *    actually loaded — won't show on landing or auth pages).
 *  • Only renders for student role (faculty/admin don't need it).
 *  • Hides itself on mobile when keyboard is focused (avoids covering
 *    the chat input on the CoachDx tab).
 *  • No external dependencies. Pure DOM + inline styles.
 *
 *  This file is safe to include with `defer` — it self-initializes
 *  after DOMContentLoaded.
 */
(function() {
  'use strict';

  var FAB_ID         = 'rdx-help-fab';
  var MENU_ID        = 'rdx-help-fab-menu';
  var BACKDROP_ID    = 'rdx-help-fab-backdrop';
  var INSTALLED      = false;
  var MENU_OPEN      = false;

  // ──────────────────────────────────────────────────────────
  // Eligibility — only show when a case is actually loaded for a student
  // ──────────────────────────────────────────────────────────
  function shouldShow() {
    try {
      // Need a case
      if (!window.CASE_ID || !window.PATIENT) return false;
      // Need a student (or guest, who is treated as student)
      var u = window.S && window.S.currentUser;
      if (u && u.role && u.role !== 'student') return false;
      return true;
    } catch (e) { return false; }
  }

  // ──────────────────────────────────────────────────────────
  // Build a single style block (idempotent)
  // ──────────────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById('rdx-help-fab-css')) return;
    var s = document.createElement('style');
    s.id = 'rdx-help-fab-css';
    s.textContent =
      '#' + FAB_ID + '{' +
      '  position:fixed;bottom:20px;right:20px;z-index:9970;' +
      '  width:52px;height:52px;border-radius:50%;border:none;' +
      '  background:#2874A6;color:#fff;font-size:22px;cursor:pointer;' +
      '  box-shadow:0 6px 22px rgba(40,116,166,.45),0 2px 6px rgba(0,0,0,.1);' +
      '  display:flex;align-items:center;justify-content:center;' +
      '  transition:transform .15s ease, box-shadow .15s ease, background .15s ease;' +
      '  font-family:inherit;-webkit-tap-highlight-color:transparent;' +
      '}' +
      '#' + FAB_ID + ':hover{background:#1B4F72;transform:scale(1.06);box-shadow:0 10px 30px rgba(27,79,114,.5);}' +
      '#' + FAB_ID + '.open{background:#1B4F72;transform:rotate(45deg);}' +
      '#' + FAB_ID + ' .rdx-fab-pulse{position:absolute;inset:-3px;border-radius:50%;border:2px solid rgba(40,116,166,.4);animation:rdxFabPulse 2s ease-in-out infinite;pointer-events:none;}' +
      '@keyframes rdxFabPulse{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.18);opacity:0}}' +

      '#' + BACKDROP_ID + '{' +
      '  position:fixed;inset:0;background:rgba(15,23,42,.35);backdrop-filter:blur(2px);' +
      '  z-index:9968;display:none;' +
      '}' +
      '#' + BACKDROP_ID + '.open{display:block;}' +

      '#' + MENU_ID + '{' +
      '  position:fixed;bottom:84px;right:20px;z-index:9971;' +
      '  background:#fff;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.18),0 2px 8px rgba(0,0,0,.06);' +
      '  width:300px;max-width:calc(100vw - 40px);padding:8px;' +
      '  display:none;flex-direction:column;gap:4px;' +
      '  font-family:inherit;border:1px solid #E2E8F0;' +
      '  animation:rdxFabRise .18s ease-out;' +
      '}' +
      '#' + MENU_ID + '.open{display:flex;}' +
      '@keyframes rdxFabRise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}' +
      '#' + MENU_ID + ' .rdx-fab-header{padding:10px 12px 6px;}' +
      '#' + MENU_ID + ' .rdx-fab-title{font-size:13px;font-weight:700;color:#0F2942;}' +
      '#' + MENU_ID + ' .rdx-fab-sub{font-size:11px;color:#64748B;margin-top:2px;line-height:1.45;}' +
      '#' + MENU_ID + ' .rdx-fab-opt{' +
      '  display:flex;align-items:flex-start;gap:11px;padding:10px 12px;' +
      '  border-radius:9px;cursor:pointer;background:transparent;border:none;' +
      '  text-align:left;font-family:inherit;width:100%;transition:background .12s ease;' +
      '}' +
      '#' + MENU_ID + ' .rdx-fab-opt:hover{background:#F1F5F9;}' +
      '#' + MENU_ID + ' .rdx-fab-opt:focus-visible{outline:2px solid #2874A6;outline-offset:2px;background:#F1F5F9;}' +
      '#' + MENU_ID + ' .rdx-fab-opt-icon{font-size:22px;line-height:1;flex-shrink:0;margin-top:1px;}' +
      '#' + MENU_ID + ' .rdx-fab-opt-text{flex:1;min-width:0;}' +
      '#' + MENU_ID + ' .rdx-fab-opt-label{font-size:13px;font-weight:600;color:#0F2942;line-height:1.35;}' +
      '#' + MENU_ID + ' .rdx-fab-opt-desc{font-size:11px;color:#64748B;margin-top:2px;line-height:1.45;}' +

      // Mobile: smaller and tucked in
      '@media(max-width:600px){' +
      '  #' + FAB_ID + '{bottom:14px;right:14px;width:48px;height:48px;font-size:20px;}' +
      '  #' + MENU_ID + '{bottom:74px;right:14px;width:auto;left:14px;max-width:none;}' +
      '}' +
      // Hide entirely when an input/textarea has focus (don't cover chat input)
      'body.rdx-keyboard-active #' + FAB_ID + '{display:none;}';
    document.head.appendChild(s);
  }

  // ──────────────────────────────────────────────────────────
  // Build the menu DOM (idempotent)
  // ──────────────────────────────────────────────────────────
  function buildMenu() {
    if (document.getElementById(MENU_ID)) return;

    var backdrop = document.createElement('div');
    backdrop.id = BACKDROP_ID;
    backdrop.addEventListener('click', closeMenu);
    document.body.appendChild(backdrop);

    var menu = document.createElement('div');
    menu.id = MENU_ID;
    menu.setAttribute('role', 'menu');
    menu.setAttribute('aria-label', 'Get help with this case');
    menu.innerHTML =
      '<div class="rdx-fab-header">' +
      '  <div class="rdx-fab-title">Need help?</div>' +
      '  <div class="rdx-fab-sub">Pick what you\u2019re stuck on. None of these will give you the answer\u2014they nudge your reasoning.</div>' +
      '</div>' +

      '<button type="button" role="menuitem" class="rdx-fab-opt" data-action="coach">' +
      '  <span class="rdx-fab-opt-icon">\uD83E\uDDE0</span>' +
      '  <span class="rdx-fab-opt-text">' +
      '    <span class="rdx-fab-opt-label">Talk it through with the attending</span>' +
      '    <span class="rdx-fab-opt-desc">CoachDx will ask you Socratic questions about your differential and reasoning.</span>' +
      '  </span>' +
      '</button>' +

      '<button type="button" role="menuitem" class="rdx-fab-opt" data-action="mechanism">' +
      '  <span class="rdx-fab-opt-icon">\uD83D\uDCDA</span>' +
      '  <span class="rdx-fab-opt-text">' +
      '    <span class="rdx-fab-opt-label">Look up the mechanism</span>' +
      '    <span class="rdx-fab-opt-desc">MechanismDx \u2014 dig into the pathophysiology behind this presentation.</span>' +
      '  </span>' +
      '</button>' +

      '<button type="button" role="menuitem" class="rdx-fab-opt" data-action="interview">' +
      '  <span class="rdx-fab-opt-icon">\uD83D\uDDE3\uFE0F</span>' +
      '  <span class="rdx-fab-opt-text">' +
      '    <span class="rdx-fab-opt-label">Stuck on what to ask the patient?</span>' +
      '    <span class="rdx-fab-opt-desc">Open the patient interview \u2014 a good HPI question often unsticks everything.</span>' +
      '  </span>' +
      '</button>';

    menu.addEventListener('click', function(e) {
      var btn = e.target.closest('.rdx-fab-opt');
      if (!btn) return;
      handleAction(btn.getAttribute('data-action'));
    });

    document.body.appendChild(menu);
  }

  // ──────────────────────────────────────────────────────────
  // Action handlers
  // ──────────────────────────────────────────────────────────
  function handleAction(action) {
    closeMenu();
    if (action === 'coach') {
      if (typeof window.switchTab === 'function') window.switchTab('coach');
    } else if (action === 'mechanism') {
      // Best topic guess: chief complaint, falling back to case category, then the first DDx entry.
      var topic = '';
      try {
        if (window.PATIENT && window.PATIENT.chiefComplaint) topic = window.PATIENT.chiefComplaint;
        else if (window.MissionControl && typeof MissionControl.getDdxEntries === 'function') {
          var d = MissionControl.getDdxEntries();
          if (d && d.length && d[0].diagnosis) topic = d[0].diagnosis;
        }
      } catch (e) {}
      var url = 'pathway.html' + (topic ? ('?topic=' + encodeURIComponent(topic)) : '');
      // Open in a new tab so they don't lose the case
      window.open(url, '_blank', 'noopener');
    } else if (action === 'interview') {
      if (typeof window.switchTab === 'function') window.switchTab('interview');
    }
  }

  // ──────────────────────────────────────────────────────────
  // Open / close menu
  // ──────────────────────────────────────────────────────────
  function openMenu() {
    if (MENU_OPEN) return;
    var fab      = document.getElementById(FAB_ID);
    var menu     = document.getElementById(MENU_ID);
    var backdrop = document.getElementById(BACKDROP_ID);
    if (!fab || !menu || !backdrop) return;
    fab.classList.add('open');
    fab.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    backdrop.classList.add('open');
    MENU_OPEN = true;
    // Focus first menu item for keyboard users
    var first = menu.querySelector('.rdx-fab-opt');
    if (first) first.focus();
  }

  function closeMenu() {
    if (!MENU_OPEN) return;
    var fab      = document.getElementById(FAB_ID);
    var menu     = document.getElementById(MENU_ID);
    var backdrop = document.getElementById(BACKDROP_ID);
    if (fab) {
      fab.classList.remove('open');
      fab.setAttribute('aria-expanded', 'false');
    }
    if (menu) menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    MENU_OPEN = false;
  }

  function toggleMenu() {
    if (MENU_OPEN) closeMenu();
    else openMenu();
  }

  // ──────────────────────────────────────────────────────────
  // Keyboard hide-on-focus (mobile chat input)
  // ──────────────────────────────────────────────────────────
  function wireKeyboardHide() {
    document.addEventListener('focusin', function(e) {
      var t = e.target;
      if (!t) return;
      var tag = (t.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || t.isContentEditable) {
        document.body.classList.add('rdx-keyboard-active');
      }
    });
    document.addEventListener('focusout', function() {
      // Small delay so refocusing between fields doesn't flicker the FAB
      setTimeout(function() {
        if (!document.activeElement) {
          document.body.classList.remove('rdx-keyboard-active');
          return;
        }
        var tag = (document.activeElement.tagName || '').toLowerCase();
        if (tag !== 'input' && tag !== 'textarea' && !document.activeElement.isContentEditable) {
          document.body.classList.remove('rdx-keyboard-active');
        }
      }, 80);
    });
  }

  // ──────────────────────────────────────────────────────────
  // ESC closes the menu
  // ──────────────────────────────────────────────────────────
  function wireEscape() {
    document.addEventListener('keydown', function(e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && MENU_OPEN) closeMenu();
    });
  }

  // ──────────────────────────────────────────────────────────
  // Install / uninstall
  // ──────────────────────────────────────────────────────────
  function install() {
    if (INSTALLED) return;
    if (!shouldShow()) return;
    INSTALLED = true;
    injectStyles();
    buildMenu();

    var fab = document.createElement('button');
    fab.type = 'button';
    fab.id = FAB_ID;
    fab.setAttribute('aria-label', 'Get help with this case');
    fab.setAttribute('aria-expanded', 'false');
    fab.setAttribute('aria-haspopup', 'menu');
    fab.title = 'Need help? Coach, look up the mechanism, or revisit the interview.';
    fab.innerHTML = '?<span class="rdx-fab-pulse" aria-hidden="true"></span>';
    fab.addEventListener('click', toggleMenu);
    document.body.appendChild(fab);

    wireKeyboardHide();
    wireEscape();
  }

  // Re-check periodically because PATIENT loads asynchronously after the case file fetches.
  // Once installed, we stop polling.
  function tryInstall() {
    if (INSTALLED) return;
    install();
    if (!INSTALLED) setTimeout(tryInstall, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInstall);
  } else {
    tryInstall();
  }

  // Expose for manual triggering / testing
  window.RdxHelpFab = {
    open: openMenu,
    close: closeMenu,
    toggle: toggleMenu,
    install: install
  };
})();
