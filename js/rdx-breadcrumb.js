/* rdx-breadcrumb.js — Auto-generated breadcrumb navigation
 * Loaded automatically by rdx-nav.js
 */
(function() {
  'use strict';

  var path = window.location.pathname;
  var filename = path.split('/').pop() || 'index.html';

  // Don't show breadcrumb on index/landing page
  if (filename === 'index.html' && !path.includes('/topics/') && !path.includes('/tools/') && !path.includes('/CoachDx/') && !path.includes('/ecg/') && !path.includes('/auth/')) return;

  var MAP = {
    'case-browser.html': { label: 'Case Library', section: 'Learn' },
    'study-mode.html': { label: 'Study Mode', section: 'Learn' },
    'consult-callback.html': { label: 'Clinical Reasoning Trainer', section: 'Practice' },
    'consult-callback.html': { label: 'Consult Callback', section: 'Practice' },
    'case-browser.html': { label: 'Virtual Hospital', section: 'Simulate' },
    'ed-3d.html': { label: 'Emergency Department', section: 'Simulate' },
    
    'night-float.html': { label: 'Night Float', section: 'Simulate' },
    'admissions.html': { label: 'Admissions', section: 'Simulate' },
    'simroomdx.html': { label: 'SimRoomDx', section: 'Simulate' },
    'virtual-emr.html': { label: 'Virtual EMR', section: 'Practice' },
    'virtual-emr.html': { label: 'Virtual EMR', section: 'Practice' },
    'board-prep.html': { label: 'Board Prep', section: 'Learn' },
    'analytics-dashboard.html': { label: 'Analytics', section: 'Tools' },
    'virtual-emr.html': { label: 'Virtual EMR', section: 'Practice' },
    'ai-trainer-anaphylaxis-food.html': { label: 'AI Trainer: Anaphylaxis', section: 'Practice' },
  };

  // Subdirectory pages
  if (path.includes('/topics/')) MAP[filename] = { label: 'Study Mode', section: 'Learn' };
  if (path.includes('/tools/')) MAP[filename] = { label: document.title.split('|')[0].trim(), section: 'Tools' };
  if (path.includes('/CoachDx/')) MAP[filename] = { label: document.title.split('|')[0].split('—')[0].trim(), section: 'Practice' };
  if (path.includes('/ecg/')) MAP[filename] = { label: 'ECG Practice', section: 'Tools' };
  if (path.includes('/auth/')) return; // No breadcrumb on auth pages

  var info = MAP[filename];
  if (!info) return;

  var inSubdir = /\/(topics|tools|CoachDx|ecg|auth)\//i.test(path);
  var R = inSubdir ? '../' : './';

  var bc = document.createElement('div');
  bc.id = 'rdx-breadcrumb';
  bc.setAttribute('role', 'navigation');
  bc.setAttribute('aria-label', 'Breadcrumb');
  bc.innerHTML = '<a href="' + R + 'index.html">Home</a><span> / </span>' +
    '<span>' + info.section + '</span><span> / </span>' +
    '<span class="current">' + info.label + '</span>';

  var style = document.createElement('style');
  style.textContent =
    '#rdx-breadcrumb{padding:8px 20px;font-size:12px;color:var(--rdx-text-muted,#64748b);font-family:"IBM Plex Sans",-apple-system,sans-serif;background:var(--rdx-bg,#f0f4f8);border-bottom:1px solid var(--rdx-border,#e2e8f0)}' +
    '#rdx-breadcrumb a{color:var(--rdx-blue,#2874A6);text-decoration:none;font-weight:500}' +
    '#rdx-breadcrumb a:hover{text-decoration:underline}' +
    '#rdx-breadcrumb span{margin:0 2px}' +
    '#rdx-breadcrumb .current{font-weight:600;color:var(--rdx-text,#1e293b)}' +
    '' +
    '' +
    '@media print{#rdx-breadcrumb{display:none}}';
  document.head.appendChild(style);

  // Insert after nav
  var nav = document.getElementById('rdx-unified-nav');
  if (nav && nav.nextSibling) {
    nav.parentNode.insertBefore(bc, nav.nextSibling);
  }
})();
