/* ReasonDx Help + Dashboard Widget Auto-Injector
   Include via: <script src="js/rdx-help-widget.js"></script> before </body>
   Automatically injects the floating help button and panel */

(function() {
  'use strict';

  // Determine base path (root vs subdirectory)
  const path = window.location.pathname;
  const isSubdir = path.includes('/cases/') || path.includes('/modules/') || 
                   path.includes('/topics/') || path.includes('/tools/') || 
                   path.includes('/ecg/') || path.includes('/CoachDx/') ||
                   path.includes('/data/');
  const base = isSubdir ? '../' : '';

  // Inject CSS if not already loaded
  if (!document.querySelector('link[href*="rdx-help-widget"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = base + 'css/rdx-help-widget.css';
    document.head.appendChild(link);
  }

  // Build widget HTML
  const widget = document.createElement('div');
  widget.innerHTML = `
    <!-- Help Panel (hidden by default) -->
    <div class="rdx-help-panel" id="rdx-help-panel">
      <div class="rdx-help-header">
        <h3>❓ Help & Navigation</h3>
        <button class="rdx-help-close" onclick="document.getElementById('rdx-help-panel').classList.remove('open')" aria-label="Close">✕</button>
      </div>
      <div class="rdx-help-body">
        <a href="${base}tools/learning-dashboard.html" class="rdx-help-link">
          <span class="icon">📊</span>
          <span>My Learning Dashboard<br><span class="desc">Progress, mastery map & spaced repetition</span></span>
        </a>
        <a href="${base}analytics-dashboard.html" class="rdx-help-link">
          <span class="icon">🧬</span>
          <span>Content Mastery Fingerprint<br><span class="desc">See your reasoning pathway strengths</span></span>
        </a>
        <div class="rdx-help-divider"></div>
        <a href="${base}index.html" class="rdx-help-link">
          <span class="icon">🏠</span>
          <span>Home</span>
        </a>
        <a href="${base}topics/index.html" class="rdx-help-link">
          <span class="icon">📚</span>
          <span>Topic Library</span>
        </a>
        <a href="${base}case-browser.html" class="rdx-help-link">
          <span class="icon">🧬</span>
          <span>Modules</span>
        </a>
        <a href="${base}case-browser.html" class="rdx-help-link">
          <span class="icon">🎮</span>
          <span>Cases & Adventures</span>
        </a>
        <a href="${base}board-prep.html" class="rdx-help-link">
          <span class="icon">📝</span>
          <span>Board Prep</span>
        </a>
        <a href="${base}training.html" class="rdx-help-link">
          <span class="icon">🏋️</span>
          <span>Training Hub</span>
        </a>
        <div class="rdx-help-divider"></div>
        <a href="${base}index.html" class="rdx-help-link">
          <span class="icon">ℹ️</span>
          <span>About ReasonDx & FAQ<br><span class="desc">Features, site map & how to use</span></span>
        </a>
      </div>
      <div class="rdx-help-contact">
        Questions? <a href="mailto:ReasonDxEducation@gmail.com">ReasonDxEducation@gmail.com</a>
      </div>
    </div>

    <!-- Floating Action Buttons -->
    <div class="rdx-fab-container">
      <div class="rdx-fab-wrapper">
        <span class="rdx-fab-label">My Progress</span>
        <a href="${base}tools/learning-dashboard.html" class="rdx-fab rdx-fab-dashboard" title="Learning Dashboard" aria-label="Open Learning Dashboard">📊</a>
      </div>
      <div class="rdx-fab-wrapper">
        <span class="rdx-fab-label">Help & Navigation</span>
        <button class="rdx-fab rdx-fab-help" id="rdx-help-toggle" title="Help & Navigation" aria-label="Open help menu">?</button>
      </div>
    </div>
  `;

  // Don't inject on the help page itself
  if (path.endsWith('DISABLED')) return;

  document.body.appendChild(widget);

  // Toggle help panel
  document.getElementById('rdx-help-toggle').addEventListener('click', function() {
    const panel = document.getElementById('rdx-help-panel');
    panel.classList.toggle('open');
  });

  // Close panel when clicking outside
  document.addEventListener('click', function(e) {
    const panel = document.getElementById('rdx-help-panel');
    const toggle = document.getElementById('rdx-help-toggle');
    if (panel && panel.classList.contains('open') && 
        !panel.contains(e.target) && e.target !== toggle) {
      panel.classList.remove('open');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const panel = document.getElementById('rdx-help-panel');
      if (panel) panel.classList.remove('open');
    }
  });
})();
