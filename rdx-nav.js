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

  // --- Detect section ---
  var section = 'home';
  if (/\/modules\/premed-|premed-hub/i.test(path)) section = 'premed';
  else if (/\/modules\/raddx-|raddx-hub/i.test(path)) section = 'raddx';
  else if (/\/modules\//i.test(path)) section = 'learn';
  else if (/\/topics\//i.test(path)) section = 'learn';
  else if (/\/cases\//i.test(path)) section = 'practice';
  else if (/board-prep|training/i.test(path)) section = 'practice';
  else if (/\/tools\/|\/ecg\//i.test(path)) section = 'tools';

  // --- Theme (ONLY light or dark) ---
  var saved = localStorage.getItem('rdx-theme') || 'light';
  if (saved !== 'light' && saved !== 'dark') { saved = 'light'; localStorage.setItem('rdx-theme', saved); }
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
    '<a href="' + toRoot + 'index.html" style="text-decoration:none;flex-shrink:0;display:flex;align-items:center;"><img src="' + toRoot + 'images/reasondx-logo.png" alt="ReasonDx" style="height:28px;width:auto;"></a>' +
    '<button id="rdx-hamburger" aria-label="Menu" style="display:none;background:none;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:8px 10px;cursor:pointer;font-size:18px;color:var(--rdx-text-muted,#475569);-webkit-tap-highlight-color:transparent;">☰</button>' +
    '<div id="rdx-nav-menu" style="display:flex;gap:6px;align-items:center;margin-left:auto;">' +
      navLink(toRoot + 'index.html', '🏠', 'Home', section === 'home') +
      navLink(toRoot + 'modules/index.html', '📚', 'Learn', section === 'learn') +
      navLink(toRoot + 'cases/clinical-reasoning-trainer.html', '🧩', 'Practice', section === 'practice') +
      navLink(toRoot + 'modules/raddx-hub.html', '🔬', 'RadDx', section === 'raddx') +
      navLink(toRoot + 'modules/premed-hub.html', '🩺', 'Premed', section === 'premed',
        'background:linear-gradient(135deg,#f0fdfa,#ccfbf1);color:#0f766e;font-weight:600;') +
      navLink(toRoot + 'tools/index.html', '🔧', 'Tools', section === 'tools') +
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
  nav.style.cssText = 'background:var(--rdx-bg-nav,#fff);border-bottom:1px solid var(--rdx-border,#e2e8f0);padding:0 20px;height:56px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:9000;font-family:"DM Sans","Inter",-apple-system,sans-serif;box-shadow:0 1px 3px rgba(0,0,0,0.04);transition:background .25s,border-color .25s;';
  nav.innerHTML = html;

  // --- Inject responsive styles ---
  var style = document.createElement('style');
  style.textContent =
    '[data-theme="dark"] #rdx-unified-nav{background:var(--rdx-bg-nav,#1e293b);border-color:var(--rdx-border,#334155);box-shadow:0 1px 3px rgba(0,0,0,0.3);}' +
    '[data-theme="dark"] #rdx-unified-nav a[style*="Georgia"]{color:#2dd4bf!important;}' +
    '[data-theme="dark"] #rdx-logout-btn{color:var(--rdx-text-muted,#94a3b8)!important;border-color:var(--rdx-border,#334155)!important;}' +
    '#rdx-about-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:10000;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px);}' +
    '#rdx-about-overlay.open{display:flex;}' +
    '#rdx-about-modal{background:var(--rdx-bg-card,#fff);border-radius:20px;max-width:560px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 25px 60px rgba(0,0,0,0.3);padding:0;animation:rdxModalIn .2s ease;}' +
    '[data-theme="dark"] #rdx-about-modal{background:var(--rdx-bg-card,#1e293b);color:var(--rdx-text,#e2e8f0);}' +
    '@keyframes rdxModalIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}' +
    '.rdx-about-hdr{background:linear-gradient(135deg,#0f766e,#14b8a6);padding:28px 28px 24px;border-radius:20px 20px 0 0;color:white;}' +
    '.rdx-about-hdr h2{margin:0 0 6px;font-size:22px;font-weight:700;font-family:Georgia,serif;}.rdx-about-hdr p{margin:0;opacity:0.9;font-size:14px;}' +
    '.rdx-about-body{padding:24px 28px 28px;font-size:14px;line-height:1.7;color:var(--rdx-text-secondary,#475569);}' +
    '[data-theme="dark"] .rdx-about-body{color:var(--rdx-text-secondary,#94a3b8);}' +
    '.rdx-about-body h3{font-size:15px;font-weight:700;color:var(--rdx-text,#1e293b);margin:20px 0 8px;}.rdx-about-body h3:first-child{margin-top:0;}' +
    '[data-theme="dark"] .rdx-about-body h3{color:var(--rdx-text,#e2e8f0);}' +
    '.rdx-about-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:12px 0;}' +
    '.rdx-about-stat{background:var(--rdx-teal-50,#f0fdfa);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:12px;text-align:center;}' +
    '[data-theme="dark"] .rdx-about-stat{background:rgba(20,184,166,0.08);border-color:var(--rdx-border,#334155);}' +
    '.rdx-about-stat .num{font-size:22px;font-weight:700;color:#0f766e;}.rdx-about-stat .lbl{font-size:12px;color:var(--rdx-text-muted,#64748b);}' +
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
    // --- About ReasonDx modal ---
    var overlay = document.createElement('div');
    overlay.id = 'rdx-about-overlay';
    overlay.innerHTML =
      '<div id="rdx-about-modal">' +
        '<div class="rdx-about-hdr" style="position:relative;">' +
          '<button class="rdx-about-close" id="rdx-about-close-btn">&times;</button>' +
          '<h2>ReasonDx</h2>' +
          '<p>Clinical Reasoning Training Platform</p>' +
        '</div>' +
        '<div class="rdx-about-body">' +
          '<h3>What is ReasonDx?</h3>' +
          '<p>ReasonDx is a case-based clinical reasoning platform that helps learners develop systematic diagnostic thinking. Rather than memorizing isolated facts, you learn to think through cases the way experienced clinicians do — building differentials, gathering targeted history, interpreting results, and making evidence-based decisions.</p>' +
          '<div class="rdx-about-grid">' +
            '<div class="rdx-about-stat"><div class="num">316</div><div class="lbl">Topics</div></div>' +
            '<div class="rdx-about-stat"><div class="num">320+</div><div class="lbl">Cases</div></div>' +
            '<div class="rdx-about-stat"><div class="num">400+</div><div class="lbl">Modules</div></div>' +
            '<div class="rdx-about-stat"><div class="num">615</div><div class="lbl">Questions</div></div>' +
          '</div>' +
          '<h3>The Platform</h3>' +
          '<p><strong>ReasonDx</strong> — Interactive clinical cases with step-by-step reasoning<br>' +
          '<strong>MechanismDx</strong> — Pathophysiology modules that explain the "why"<br>' +
          '<strong>RadDx</strong> — Imaging reasoning with real-world scenarios<br>' +
          '<strong>CoachDx</strong> — AI attending using Socratic questioning<br>' +
          '<strong>Deep Dives</strong> — Multi-layered explorations of key topics</p>' +
          '<h3>Learning Tracks</h3>' +
          '<div class="rdx-about-tracks">' +
            '<span class="rdx-about-pill">🩺 Premed</span>' +
            '<span class="rdx-about-pill">📖 Pathophysiology</span>' +
            '<span class="rdx-about-pill">📝 Shelf Exams</span>' +
            '<span class="rdx-about-pill">🎯 Step 2 / COMLEX</span>' +
          '</div>' +
          '<h3>How It Works</h3>' +
          '<p>Each case follows a clinical reasoning workflow: read the presentation → build a differential → gather history & exam findings → order workup → refine your diagnosis → review teaching points. Every step includes immediate feedback and evidence-based explanations.</p>' +
          '<p style="margin-top:16px;padding-top:16px;border-top:1px solid var(--rdx-border,#e2e8f0);font-size:13px;color:var(--rdx-text-muted,#64748b);">Contact: <a href="mailto:lfine@nova.edu" style="color:#0f766e;">lfine@nova.edu</a></p>' +
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
    // About ReasonDx modal
    var overlay = document.createElement('div');
    overlay.id = 'rdx-about-overlay';
    overlay.innerHTML =
      '<div id="rdx-about-modal" style="position:relative;">' +
        '<button class="rdx-about-close" id="rdx-about-x">✕</button>' +
        '<div class="rdx-about-hdr">' +
          '<h2>ReasonDx</h2>' +
          '<p>Clinical Reasoning Education Platform</p>' +
        '</div>' +
        '<div class="rdx-about-body">' +
          '<h3>What is ReasonDx?</h3>' +
          '<p>ReasonDx is an original, case-based clinical reasoning platform designed to help learners develop systematic diagnostic thinking. Rather than memorizing isolated facts, you learn to reason through cases the way experienced clinicians do \u2014 building differentials, gathering targeted history, ordering workups, and refining diagnoses with expert feedback at every step.</p>' +
          '<div class="rdx-about-grid">' +
            '<div class="rdx-about-stat"><div class="num">316</div><div class="lbl">Topics</div></div>' +
            '<div class="rdx-about-stat"><div class="num">320+</div><div class="lbl">Cases</div></div>' +
            '<div class="rdx-about-stat"><div class="num">400+</div><div class="lbl">Modules</div></div>' +
            '<div class="rdx-about-stat"><div class="num">282</div><div class="lbl">Deep Dives</div></div>' +
          '</div>' +
          '<h3>Learning Tracks</h3>' +
          '<div class="rdx-about-tracks">' +
            '<span class="rdx-about-pill">\uD83E\uDE7A Pre-Medical</span>' +
            '<span class="rdx-about-pill">\uD83E\uDDEC Pathophysiology</span>' +
            '<span class="rdx-about-pill">\uD83D\uDCCB Shelf Exams</span>' +
            '<span class="rdx-about-pill">\uD83C\uDFAF Step 2 / COMLEX</span>' +
          '</div>' +
          '<h3>Platform Components</h3>' +
          '<p><strong>Learn</strong> \u2014 Pathophysiology modules that build understanding from the ground up<br>' +
          '<strong>Practice</strong> \u2014 Interactive clinical cases with Socratic reasoning and expert feedback<br>' +
          '<strong>RadDx</strong> \u2014 Imaging-first scenarios linked to Radiopaedia\u2019s open-access library<br>' +
          '<strong>CoachDx</strong> \u2014 AI clinical coach using attending-level Socratic questioning<br>' +
          '<strong>Tools</strong> \u2014 Calculators, ECG practice, DDx builder, and clinical references</p>' +
          '<h3>How It Works</h3>' +
          '<p>Every case follows a 5-stage clinical reasoning workflow: (1) Read the presentation and form initial hypotheses, (2) Build your differential diagnosis, (3) Gather targeted history and physical exam findings, (4) Order and interpret diagnostic workup, (5) Make your diagnosis and learn from detailed explanations.</p>' +
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
