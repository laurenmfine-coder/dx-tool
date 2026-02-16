/* ============================================================
   rdx-nav.js — Unified ReasonDx Navigation + Theme Toggle + Logout
   Auto-injects a consistent nav on every page.
   Removes any old inline navs to prevent duplicates.
   ============================================================ */
(function() {
  'use strict';
  if (document.getElementById('rdx-unified-nav')) return;

  // --- Path prefix ---
  var path = window.location.pathname;
  var inSubdir = /\/(topics|modules|cases|tools|ecg|CoachDx|auth|data|mechanism|ReasonDx)\//i.test(path);
  var toRoot = inSubdir ? '../' : './';

  // --- Detect section ---
  var section = 'home';
  if (/\/modules\/premed-|premed-hub/i.test(path)) section = 'premed';
  else if (/\/modules\/raddx-|raddx-hub/i.test(path)) section = 'raddx';
  else if (/\/modules\//i.test(path)) section = 'learn';
  else if (/\/topics\//i.test(path)) section = 'learn';
  else if (/\/cases\//i.test(path)) section = 'practice';
  else if (/board-prep|training/i.test(path)) section = 'practice';
  else if (/\/tools\/|\/ecg\//i.test(path)) section = 'tools';

  // --- Theme (light/dark only) ---
  var saved = localStorage.getItem('rdx-theme') || 'light';
  if (saved !== 'light' && saved !== 'dark') saved = 'light';
  document.documentElement.setAttribute('data-theme', saved);

  // --- Link helper ---
  function navLink(href, icon, label, active, extra) {
    return '<a href="' + href + '" style="text-decoration:none;font-size:14px;font-weight:' +
      (active ? '600' : '500') + ';color:' + (active ? '#0f766e' : 'var(--rdx-text-muted,#475569)') +
      ';padding:6px 12px;border-radius:8px;white-space:nowrap;transition:all .15s;' +
      (active ? 'background:var(--rdx-teal-50,#f0fdfa);' : '') +
      (extra || '') +
      '"><span class="rdx-nav-icon">' + icon + '</span> <span class="rdx-nav-label">' + label + '</span></a>';
  }

  // --- Build nav ---
  var html =
    '<a href="' + toRoot + 'index.html" style="font-family:Georgia,serif;font-size:20px;color:#0f766e;text-decoration:none;font-weight:700;letter-spacing:-0.3px;flex-shrink:0;">ReasonDx</a>' +
    '<button id="rdx-hamburger" aria-label="Menu" style="display:none;background:none;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:8px 10px;cursor:pointer;font-size:18px;color:var(--rdx-text-muted,#475569);-webkit-tap-highlight-color:transparent;">☰</button>' +
    '<div id="rdx-nav-menu" style="display:flex;gap:6px;align-items:center;margin-left:auto;">' +
      navLink(toRoot + 'index.html', '🏠', 'Home', section === 'home') +
      navLink(toRoot + 'modules/index.html', '📚', 'Learn', section === 'learn') +
      navLink(toRoot + 'cases/clinical-reasoning-trainer.html', '🧩', 'Practice', section === 'practice') +
      navLink(toRoot + 'modules/raddx-hub.html', '🔬', 'RadDx', section === 'raddx') +
      navLink(toRoot + 'modules/premed-hub.html', '🩺', 'Premed', section === 'premed',
        'background:linear-gradient(135deg,#f0fdfa,#ccfbf1);color:#0f766e;font-weight:600;') +
      navLink(toRoot + 'tools/index.html', '🔧', 'Tools', section === 'tools') +
      '<button id="rdx-theme-toggle" aria-label="Toggle theme" style="background:none;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:16px;line-height:1;flex-shrink:0;">' +
        (saved === 'dark' ? '☀️' : '🌙') +
      '</button>' +
      '<button id="rdx-logout-btn" aria-label="Logout" title="Logout" style="background:none;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:14px;line-height:1;flex-shrink:0;color:var(--rdx-text-muted,#475569);font-family:inherit;">' +
        '🚪' +
      '</button>' +
    '</div>';

  // --- Create nav element ---
  var nav = document.createElement('nav');
  nav.id = 'rdx-unified-nav';
  nav.setAttribute('role', 'navigation');
  nav.style.cssText = 'background:var(--rdx-bg-nav,#fff);border-bottom:1px solid var(--rdx-border,#e2e8f0);padding:0 20px;height:56px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:9000;font-family:"DM Sans","Inter",-apple-system,sans-serif;box-shadow:0 1px 3px rgba(0,0,0,0.04);transition:background .25s,border-color .25s;';
  nav.innerHTML = html;

  // --- Inject responsive styles ---
  var style = document.createElement('style');
  style.textContent =
    '@media(max-width:768px){' +
      '#rdx-unified-nav{flex-wrap:wrap;height:auto;min-height:52px;padding:0 16px;}' +
      '#rdx-hamburger{display:block!important;}' +
      '#rdx-nav-menu{display:none!important;flex-direction:column;width:100%;gap:4px;padding:8px 0 12px;border-top:1px solid var(--rdx-border,#e2e8f0);}' +
      '#rdx-nav-menu.open{display:flex!important;}' +
      '#rdx-nav-menu a{display:block;width:100%;padding:12px 16px!important;font-size:15px!important;min-height:44px;box-sizing:border-box;border-radius:10px;}' +
      '#rdx-nav-menu button{width:100%;min-height:44px;text-align:left;padding:12px 16px!important;font-size:15px!important;border-radius:10px;}' +
    '}' +
    '@media(min-width:769px){' +
      '#rdx-hamburger{display:none!important;}' +
      '.rdx-nav-icon{display:none;}' +
    '}';
  document.head.appendChild(style);

  // --- Remove ALL old inline navs ---
  function removeOldNavs() {
    var selectors = [
      'nav.nav:not(#rdx-unified-nav)',
      'nav.dx-nav',
      'nav.rdx-nav:not(#rdx-unified-nav)',
      '.dx-universal-nav'
    ];
    for (var s = 0; s < selectors.length; s++) {
      var els = document.querySelectorAll(selectors[s]);
      for (var i = 0; i < els.length; i++) els[i].parentNode.removeChild(els[i]);
    }
  }

  // --- Insert ---
  function insert() {
    removeOldNavs();
    if (document.body.firstChild) {
      document.body.insertBefore(nav, document.body.firstChild);
    } else {
      document.body.appendChild(nav);
    }
    // Wire hamburger
    var btn = document.getElementById('rdx-hamburger');
    if (btn) {
      btn.addEventListener('click', function() {
        document.getElementById('rdx-nav-menu').classList.toggle('open');
      });
    }
    // Wire theme toggle (light/dark only)
    var themeBtn = document.getElementById('rdx-theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function() {
        var cur = document.documentElement.getAttribute('data-theme');
        var next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('rdx-theme', next);
        this.textContent = next === 'dark' ? '☀️' : '🌙';
      });
    }
    // Wire logout button
    var logoutBtn = document.getElementById('rdx-logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
          localStorage.removeItem('reasondx-user');
          localStorage.removeItem('rdx-theme');
          window.location.href = toRoot + 'index.html';
        }
      });
    }
  }

  if (document.body) { insert(); }
  else { document.addEventListener('DOMContentLoaded', insert); }
})();
