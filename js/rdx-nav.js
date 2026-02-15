/* ============================================================
   rdx-nav.js — Unified ReasonDx Navigation + Theme Toggle
   Matches the landing page (index.html) nav aesthetic.
   Auto-injects at top of <body> on every page.
   ============================================================ */
(function() {
  'use strict';
  if (document.querySelector('.rdx-nav')) return;

  // --- Determine context ---
  var path = window.location.pathname;
  var parts = path.split('/').filter(Boolean);
  var depth = 0;
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].endsWith('.html') || parts[i].endsWith('.htm')) continue;
    depth++;
  }
  // For files in subdirs like /topics/x.html, depth=1 → toRoot="../"
  var inSubdir = /\/(topics|modules|cases|tools|ecg|CoachDx|auth|data)\//i.test(path);
  var toRoot = inSubdir ? '../' : './';

  // Detect section
  var section = 'Home';
  if (/\/topics\//i.test(path)) section = 'Topics';
  else if (/\/modules\//i.test(path)) section = 'Modules';
  else if (/\/cases\//i.test(path)) section = 'Cases';
  else if (/\/tools\//i.test(path)) section = 'Tools';
  else if (/\/ecg\//i.test(path)) section = 'ECG';

  // --- Theme ---
  var saved = localStorage.getItem('rdx-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rdx-theme', next);
    var icon = document.getElementById('rdx-theme-icon');
    if (icon) icon.textContent = next === 'dark' ? '☀️' : '🌙';
  }

  // --- Build nav ---
  var nav = document.createElement('nav');
  nav.className = 'rdx-nav';
  nav.setAttribute('role', 'navigation');
  nav.innerHTML =
    '<a class="rdx-nav-brand" href="' + toRoot + 'index.html">ReasonDx</a>' +
    '<div class="rdx-nav-links">' +
      '<a href="' + toRoot + 'index.html"' + (section === 'Home' ? ' class="active"' : '') + '>Home</a>' +
      '<a href="' + toRoot + 'adventure-hub.html"' + (section === 'Cases' ? ' class="active"' : '') + '>Cases</a>' +
      '<a href="' + toRoot + 'modules/training.html"' + (section === 'Modules' ? ' class="active"' : '') + '>Modules</a>' +
      '<a href="' + toRoot + 'tools/calculator-hub.html"' + (section === 'Tools' ? ' class="active"' : '') + '>Tools</a>' +
    '</div>' +
    '<button class="rdx-theme-btn" onclick="(function(){var c=document.documentElement.getAttribute(\'data-theme\');var n=c===\'dark\'?\'light\':\'dark\';document.documentElement.setAttribute(\'data-theme\',n);localStorage.setItem(\'rdx-theme\',n);var i=document.getElementById(\'rdx-theme-icon\');if(i)i.textContent=n===\'dark\'?\'☀️\':\'🌙\';})()" aria-label="Toggle theme">' +
      '<span id="rdx-theme-icon">' + (saved === 'dark' ? '☀️' : '🌙') + '</span>' +
    '</button>';

  // --- Inject style ---
  var style = document.createElement('style');
  style.textContent =
    '.rdx-nav{position:sticky;top:0;z-index:1000;background:var(--rdx-bg-nav,#fff);border-bottom:1px solid var(--rdx-border,#e2e8f0);padding:0 24px;height:56px;display:flex;align-items:center;gap:16px;font-family:"DM Sans",-apple-system,BlinkMacSystemFont,sans-serif;transition:background .25s,border-color .25s}' +
    '.rdx-nav-brand{font-family:"DM Serif Display",Georgia,serif;font-size:20px;color:var(--rdx-teal-dark,#0f766e);text-decoration:none;letter-spacing:-0.3px;flex-shrink:0}' +
    '.rdx-nav-links{display:flex;gap:4px;margin-left:auto;align-items:center}' +
    '.rdx-nav-links a{text-decoration:none;font-size:14px;font-weight:500;color:var(--rdx-text-muted,#64748b);padding:6px 14px;border-radius:8px;transition:all .15s;white-space:nowrap}' +
    '.rdx-nav-links a:hover{background:var(--rdx-bg-hover,#f1f5f9);color:var(--rdx-text,#1e293b)}' +
    '.rdx-nav-links a.active{background:var(--rdx-teal-50,#f0fdfa);color:var(--rdx-teal-dark,#0f766e);font-weight:600}' +
    '.rdx-theme-btn{background:none;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:4px 10px;cursor:pointer;font-size:16px;line-height:1;transition:all .15s;flex-shrink:0}' +
    '.rdx-theme-btn:hover{background:var(--rdx-bg-hover,#f1f5f9);border-color:var(--rdx-border-hover,#cbd5e1)}' +
    '@media(max-width:640px){.rdx-nav{padding:0 12px;gap:8px;height:48px}.rdx-nav-brand{font-size:17px}.rdx-nav-links a{font-size:12px;padding:5px 8px}}';
  document.head.appendChild(style);

  // --- Insert ---
  function insert() {
    // Remove any existing old navs to avoid doubles
    var oldNavs = document.querySelectorAll('.dx-universal-nav');
    for (var i = 0; i < oldNavs.length; i++) oldNavs[i].remove();
    // Hide old inline <nav class="nav"> elements
    var oldInlineNavs = document.querySelectorAll('nav.nav:not(.rdx-nav)');
    for (var i = 0; i < oldInlineNavs.length; i++) oldInlineNavs[i].style.display = 'none';
    document.body.insertBefore(nav, document.body.firstChild);
  }

  if (document.body) { insert(); }
  else { document.addEventListener('DOMContentLoaded', insert); }
})();
