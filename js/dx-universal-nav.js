/* dx-universal-nav.js — Lightweight nav bar for all ReasonDx pages */
(function() {
  if (document.querySelector('.dx-universal-nav')) return; // Already present

  // Determine current section from path
  const path = window.location.pathname;
  const parts = path.split('/').filter(Boolean);
  const filename = parts[parts.length - 1] || 'index.html';
  let section = 'Home';
  let sectionColor = '#0d9488';
  
  if (path.includes('/modules/')) section = 'Modules';
  else if (path.includes('/cases/')) section = 'Cases';
  else if (path.includes('/topics/')) section = 'Topics';
  else if (path.includes('/tools/')) section = 'Tools';
  else if (path.includes('/ecg/')) section = 'ECG';
  else if (path.includes('/CoachDx/')) section = 'CoachDx';

  // Build relative path to root
  const depth = parts.length - 1;
  const toRoot = depth > 0 ? '../'.repeat(depth) : '';
  // For local file:// usage, check if we need adjustment
  const rootPath = toRoot || './';

  const nav = document.createElement('div');
  nav.className = 'dx-universal-nav';
  nav.innerHTML = `
    <style>
      .dx-universal-nav {
        position: sticky; top: 0; z-index: 1000;
        background: #fff; border-bottom: 1px solid #e2e8f0;
        padding: 0 16px; font-family: 'Inter', system-ui, sans-serif;
        display: flex; align-items: center; height: 48px; gap: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      }
      .dx-universal-nav a {
        text-decoration: none; font-size: 13px; font-weight: 500;
        padding: 6px 10px; border-radius: 6px; transition: all 0.15s;
        white-space: nowrap;
      }
      .dx-universal-nav .dx-nav-home {
        color: #0d9488; font-weight: 700; font-size: 15px; margin-right: 4px;
      }
      .dx-universal-nav .dx-nav-home:hover { background: #f0fdfa; }
      .dx-nav-sep { color: #cbd5e1; font-size: 12px; }
      .dx-nav-section {
        background: #f0fdfa; color: #0d9488; font-weight: 600; font-size: 12px;
        padding: 4px 10px; border-radius: 12px;
      }
      .dx-nav-links { display: flex; gap: 2px; margin-left: auto; }
      .dx-nav-links a { color: #64748b; font-size: 12px; }
      .dx-nav-links a:hover { background: #f1f5f9; color: #1e293b; }
      .dx-nav-links a.active { color: #0d9488; background: #f0fdfa; }
      @media (max-width: 640px) {
        .dx-universal-nav { padding: 0 10px; gap: 4px; }
        .dx-nav-links a span { display: none; }
        .dx-nav-links a::before { font-size: 14px; }
      }
    </style>
    <a class="dx-nav-home" href="${rootPath}index.html">ReasonDx</a>
    <span class="dx-nav-sep">›</span>
    <span class="dx-nav-section">${section}</span>
    <div class="dx-nav-links">
      <a href="${rootPath}modules/index.html" class="${section==='Modules'?'active':''}">Modules</a>
      <a href="${rootPath}adventure-hub.html" class="${section==='Cases'?'active':''}">Cases</a>
      <a href="${rootPath}tools/calculator-hub.html" class="${section==='Tools'?'active':''}">Tools</a>
      <a href="${rootPath}ecg/ecg-quiz.html" class="${section==='ECG'?'active':''}">ECG</a>
      <a href="${rootPath}board-prep.html">Board Prep</a>
    </div>
  `;

  // Insert at top of body
  if (document.body) {
    document.body.insertBefore(nav, document.body.firstChild);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.insertBefore(nav, document.body.firstChild);
    });
  }
})();
