/* ============================================================
   rdx-nav.js — Unified ReasonDx Navigation + Theme Toggle
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

  // --- Detect section (launch version) ---
  var section = 'home';
  if (/training|cases\/|CoachDx|mentor-chat|coach|consult-trainer|sbar|ed-handoff|night-float|simroomdx/i.test(path)) section = 'coachdx';
  else if (/learning-dashboard|dashboard/i.test(path)) section = 'dashboard';
  else if (/auth\//i.test(path)) section = 'account';

  // --- Theme (ONLY light or dark) ---
  var saved = localStorage.getItem('rdx-theme') || 'light';
  if (saved !== 'light' && saved !== 'dark') { saved = 'light'; localStorage.setItem('rdx-theme', saved); }
  document.documentElement.setAttribute('data-theme', saved);

  // --- Link helper ---
  function navLink(href, icon, label, active, extra) {
    return '<a href="' + href + '" style="text-decoration:none;font-size:14px;font-weight:' +
      (active ? '600' : '500') + ';color:' + (active ? '#1f5f8b' : 'var(--rdx-text-muted,#475569)') +
      ';padding:6px 12px;border-radius:8px;white-space:nowrap;transition:all .15s;' +
      (active ? 'background:var(--rdx-teal-50,#f0f7fc);' : '') +
      (extra || '') +
      '"><span class="rdx-nav-icon">' + icon + '</span> <span class="rdx-nav-label">' + label + '</span></a>';
  }

  // --- Build nav ---
  var html =
    '<a href="' + toRoot + 'index.html" style="text-decoration:none;flex-shrink:0;display:flex;align-items:center;"><img src="' + toRoot + 'images/reasondx-logo.png" alt="ReasonDx" style="height:28px;width:auto;"></a>' +
    '<button id="rdx-hamburger" aria-label="Menu" style="display:none;background:none;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:8px 10px;cursor:pointer;font-size:18px;color:var(--rdx-text-muted,#475569);-webkit-tap-highlight-color:transparent;">☰</button>' +
    '<div id="rdx-nav-menu" style="display:flex;gap:6px;align-items:center;margin-left:auto;">' +
      navLink(toRoot + 'index.html', '🏠', 'Home', section === 'home') +
      navLink(toRoot + 'training.html', '🧠', 'CoachDx', section === 'coachdx') +
      navLink(toRoot + 'tools/learning-dashboard.html', '📊', 'Dashboard', section === 'dashboard') +
      '<button id="rdx-info-btn" aria-label="About ReasonDx" title="About ReasonDx" style="background:none;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:15px;line-height:1;flex-shrink:0;">ℹ️</button>' +
      '<button id="rdx-theme-toggle" aria-label="Toggle theme" style="background:none;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:16px;line-height:1;flex-shrink:0;">' +
        (saved === 'dark' ? '☀️' : '🌙') +
      '</button>' +
      '<button id="rdx-logout-btn" aria-label="Log out" style="background:none;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:13px;line-height:1;flex-shrink:0;color:var(--rdx-text-muted,#64748b);font-family:inherit;">' +
        '↪ Log out' +
      '</button>' +
    '</div>';

  // --- Create nav element ---
  var nav = document.createElement('nav');
  nav.id = 'rdx-unified-nav';
  nav.setAttribute('role', 'navigation');
  nav.style.cssText = 'background:rgba(255,255,255,0.95);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom:1px solid var(--rdx-border,#e2e8f0);padding:0 20px;height:56px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:9000;font-family:"DM Sans","Inter",-apple-system,sans-serif;box-shadow:0 1px 3px rgba(0,0,0,0.03);transition:background .25s,border-color .25s;';
  nav.innerHTML = html;

  // --- Inject responsive styles ---
  var style = document.createElement('style');
  style.textContent =
    '[data-theme="dark"] #rdx-unified-nav{background:var(--rdx-bg-nav,#1e293b);border-color:var(--rdx-border,#334155);box-shadow:0 1px 3px rgba(0,0,0,0.3);}' +
    '[data-theme="dark"] #rdx-unified-nav a[style*="Georgia"]{color:#5ba3cc!important;}' +
    '[data-theme="dark"] #rdx-logout-btn{color:var(--rdx-text-muted,#94a3b8)!important;border-color:var(--rdx-border,#334155)!important;}' +
    '#rdx-about-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:10000;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px);}' +
    '#rdx-about-overlay.open{display:flex;}' +
    '#rdx-about-modal{background:var(--rdx-bg-card,#fff);border-radius:20px;max-width:560px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 25px 60px rgba(0,0,0,0.3);padding:0;animation:rdxModalIn .2s ease;}' +
    '[data-theme="dark"] #rdx-about-modal{background:var(--rdx-bg-card,#1e293b);color:var(--rdx-text,#e2e8f0);}' +
    '@keyframes rdxModalIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}' +
    '.rdx-about-hdr{background:linear-gradient(135deg,#2874A6,#1B4F72);padding:28px 28px 24px;border-radius:20px 20px 0 0;color:white;}' +
    '.rdx-about-hdr h2{margin:0 0 6px;font-size:22px;font-weight:700;font-family:"Fraunces",Georgia,serif;}.rdx-about-hdr p{margin:0;opacity:0.9;font-size:14px;}' +
    '.rdx-about-body{padding:24px 28px 28px;font-size:14px;line-height:1.7;color:var(--rdx-text-secondary,#475569);}' +
    '[data-theme="dark"] .rdx-about-body{color:var(--rdx-text-secondary,#94a3b8);}' +
    '.rdx-about-body h3{font-size:15px;font-weight:700;color:var(--rdx-text,#1e293b);margin:20px 0 8px;}.rdx-about-body h3:first-child{margin-top:0;}' +
    '[data-theme="dark"] .rdx-about-body h3{color:var(--rdx-text,#e2e8f0);}' +
    '.rdx-about-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:12px 0;}' +
    '.rdx-about-stat{background:var(--rdx-teal-50,#f0f7fc);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:12px;text-align:center;}' +
    '[data-theme="dark"] .rdx-about-stat{background:rgba(40,116,166,0.08);border-color:var(--rdx-border,#334155);}' +
    '.rdx-about-stat .num{font-size:22px;font-weight:700;color:#1f5f8b;}.rdx-about-stat .lbl{font-size:12px;color:var(--rdx-text-muted,#64748b);}' +
    '.rdx-about-tracks{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0;}' +
    '.rdx-about-pill{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;border:1px solid var(--rdx-border,#e2e8f0);background:var(--rdx-bg-card,#fff);color:var(--rdx-text-secondary,#475569);}' +
    '[data-theme="dark"] .rdx-about-pill{background:rgba(255,255,255,0.05);border-color:var(--rdx-border,#334155);color:var(--rdx-text-secondary,#94a3b8);}' +
    '.rdx-about-close{position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.2);border:none;border-radius:8px;width:32px;height:32px;font-size:18px;cursor:pointer;color:white;display:flex;align-items:center;justify-content:center;}' +
    '@media(max-width:768px){' +
      '#rdx-unified-nav{flex-wrap:wrap;height:auto;min-height:52px;padding:0 16px;}' +
      '#rdx-hamburger{display:block!important;}' +
      '#rdx-nav-menu{display:none!important;flex-direction:column;width:100%;gap:4px;padding:8px 0 12px;border-top:1px solid var(--rdx-border,#e2e8f0);}' +
      '#rdx-nav-menu.open{display:flex!important;}' +
      '#rdx-nav-menu a{display:block;width:100%;padding:12px 16px!important;font-size:15px!important;min-height:44px;box-sizing:border-box;border-radius:12px;}' +
      '#rdx-nav-menu button{width:100%;min-height:44px;text-align:left;padding:12px 16px!important;font-size:15px!important;border-radius:12px;}' +
    '}' +
    '@media(min-width:769px){' +
      '#rdx-hamburger{display:none!important;}' +
      '.rdx-nav-icon{display:none;}' +
    '}';
  document.head.appendChild(style);

  // --- Remove ALL old inline navs ---
  function removeOldNavs() {
    // Pattern 1: <nav class="nav">
    var old1 = document.querySelectorAll('nav.nav:not(#rdx-unified-nav)');
    for (var i = 0; i < old1.length; i++) old1[i].parentNode.removeChild(old1[i]);
    // Pattern 2: <nav class="dx-nav">
    var old2 = document.querySelectorAll('nav.dx-nav');
    for (var i = 0; i < old2.length; i++) old2[i].parentNode.removeChild(old2[i]);
    // Pattern 3: old rdx-nav
    var old3 = document.querySelectorAll('nav.rdx-nav:not(#rdx-unified-nav)');
    for (var i = 0; i < old3.length; i++) old3[i].parentNode.removeChild(old3[i]);
    // Pattern 4: dx-universal-nav
    var old4 = document.querySelectorAll('.dx-universal-nav');
    for (var i = 0; i < old4.length; i++) old4[i].parentNode.removeChild(old4[i]);
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
    // Wire theme toggle
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
    // Wire logout
    var logoutBtn = document.getElementById('rdx-logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('reasondx-user');
        localStorage.removeItem('reasondx_student_code');
        localStorage.removeItem('rdx-progress');
        sessionStorage.clear();
        window.location.href = toRoot + 'auth/register.html';
      });
    }
    // --- About ReasonDx modal (launch version) ---
    var overlay = document.createElement('div');
    overlay.id = 'rdx-about-overlay';
    overlay.innerHTML =
      '<div id="rdx-about-modal">' +
        '<div class="rdx-about-hdr" style="position:relative;">' +
          '<button class="rdx-about-close" id="rdx-about-close-btn">&times;</button>' +
          '<h2>ReasonDx</h2>' +
          '<p>AI-Powered Clinical Reasoning Platform</p>' +
        '</div>' +
        '<div class="rdx-about-body">' +
          '<h3>What is ReasonDx?</h3>' +
          '<p>ReasonDx is an AI-powered clinical reasoning platform that helps learners develop systematic diagnostic thinking. Practice building differentials, communicate your reasoning through structured SBAR handoffs, and reflect on your growth with personalized AI coaching.</p>' +
          '<div class="rdx-about-grid">' +
            '<div class="rdx-about-stat"><div class="num">323</div><div class="lbl">Reasoning Cases</div></div>' +
            '<div class="rdx-about-stat"><div class="num">29</div><div class="lbl">Specialties</div></div>' +
            '<div class="rdx-about-stat"><div class="num">13</div><div class="lbl">SBAR Scenarios</div></div>' +
            '<div class="rdx-about-stat"><div class="num">AI</div><div class="lbl">Coaching</div></div>' +
          '</div>' +
          '<h3>The Platform</h3>' +
          '<p><strong>CoachDx</strong> \u2014 Clinical reasoning cases, AI simulations, SBAR handoffs, ED handoff training, and Socratic AI coaching \u2014 all in one hub<br>' +
          '<strong>Dashboard</strong> \u2014 Track progress and view your Reasoning Fingerprint</p>' +
          '<h3>How It Works</h3>' +
          '<p>Each session follows a clinical reasoning workflow: review the presentation \u2192 build your differential \u2192 interview the patient \u2192 refine your diagnosis \u2192 communicate via SBAR \u2192 reflect with your AI coach. Your Reasoning Fingerprint tracks how your clinical thinking evolves over time.</p>' +
          '<p style="margin-top:16px;padding-top:16px;border-top:1px solid var(--rdx-border,#e2e8f0);font-size:13px;color:var(--rdx-text-muted,#64748b);">Contact: <a href="mailto:lfine@nova.edu" style="color:#1f5f8b;">lfine@nova.edu</a></p>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) overlay.classList.remove('open');
    });
    var closeBtn = document.getElementById('rdx-about-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', function() { overlay.classList.remove('open'); });
    var infoBtn = document.getElementById('rdx-info-btn');
    if (infoBtn) {
      infoBtn.addEventListener('click', function() {
        overlay.classList.add('open');
      });
    }
    // About ReasonDx modal (launch version - duplicate kept for backward compat)
    var overlay = document.createElement('div');
    overlay.id = 'rdx-about-overlay';
    overlay.innerHTML =
      '<div id="rdx-about-modal" style="position:relative;">' +
        '<button class="rdx-about-close" id="rdx-about-x">\u2715</button>' +
        '<div class="rdx-about-hdr">' +
          '<h2>ReasonDx</h2>' +
          '<p>AI-Powered Clinical Reasoning Platform</p>' +
        '</div>' +
        '<div class="rdx-about-body">' +
          '<h3>What is ReasonDx?</h3>' +
          '<p>ReasonDx is an AI-powered clinical reasoning platform designed to help learners develop systematic diagnostic thinking. Practice building differentials, communicate your reasoning through structured SBAR handoffs, and grow with personalized AI coaching that tracks your reasoning patterns over time.</p>' +
          '<div class="rdx-about-grid">' +
            '<div class="rdx-about-stat"><div class="num">323</div><div class="lbl">Reasoning Cases</div></div>' +
            '<div class="rdx-about-stat"><div class="num">29</div><div class="lbl">Specialties</div></div>' +
            '<div class="rdx-about-stat"><div class="num">13</div><div class="lbl">SBAR Scenarios</div></div>' +
            '<div class="rdx-about-stat"><div class="num">AI</div><div class="lbl">Coaching</div></div>' +
          '</div>' +
          '<h3>Core Experience</h3>' +
          '<p><strong>CoachDx</strong> \u2014 Clinical reasoning cases, AI simulations, SBAR handoffs, ED handoff training, and Socratic AI coaching \u2014 all in one hub<br>' +
          '<strong>Dashboard</strong> \u2014 Track progress and your Reasoning Fingerprint over time</p>' +
          '<h3>How It Works</h3>' +
          '<p>Every session follows a clinical reasoning workflow: (1) Review the presentation, (2) Build your differential, (3) Interview the patient and gather findings, (4) Refine your diagnosis, (5) Communicate via SBAR, (6) Reflect with your AI coach. Your Reasoning Fingerprint captures how your clinical thinking evolves.</p>' +
          '<p style="margin-top:16px;padding-top:14px;border-top:1px solid var(--rdx-border,#e2e8f0);font-size:12px;color:var(--rdx-text-muted,#94a3b8);text-align:center;">\u00A9 2026 ReasonDx \u00B7 Developed for medical education</p>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.classList.remove('open'); });
    document.getElementById('rdx-about-x').addEventListener('click', function() { overlay.classList.remove('open'); });
    var infoBtn = document.getElementById('rdx-info-btn');
    if (infoBtn) {
      infoBtn.addEventListener('click', function() { overlay.classList.toggle('open'); });
    }
  }

  if (document.body) { insert(); }
  else { document.addEventListener('DOMContentLoaded', insert); }
})();
