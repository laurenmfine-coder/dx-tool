/* ReasonDx Help + Dashboard Widget Auto-Injector
   Include via: <script src="js/rdx-help-widget.js"></script> before </body>
   Automatically injects the floating help button and panel */

(function() {
  'use strict';

  const path = window.location.pathname;
  const isSubdir = path.includes('/cases/') || path.includes('/modules/') || 
                   path.includes('/topics/') || path.includes('/tools/') || 
                   path.includes('/ecg/') || path.includes('/CoachDx/') ||
                   path.includes('/auth/') || path.includes('/data/');
  const base = isSubdir ? '../' : '';

  const style = document.createElement('style');
  style.textContent = `
    .rdx-help-panel{position:fixed;bottom:72px;right:20px;width:320px;max-height:70vh;background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.12);z-index:9998;transform:translateY(10px) scale(.95);opacity:0;pointer-events:none;transition:all .2s ease;overflow:hidden;display:flex;flex-direction:column}
    .rdx-help-panel.open{transform:translateY(0) scale(1);opacity:1;pointer-events:auto}
    .rdx-help-header{padding:16px 20px;border-bottom:1px solid var(--rdx-border,#e2e8f0);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
    .rdx-help-header h3{font-size:14px;font-weight:700;color:var(--rdx-text,#1e293b);font-family:'IBM Plex Sans',-apple-system,sans-serif;margin:0}
    .rdx-help-close{background:none;border:none;font-size:18px;cursor:pointer;color:var(--rdx-text-muted,#64748b);padding:4px 8px;border-radius:6px;line-height:1}
    .rdx-help-close:hover{background:var(--rdx-bg-hover,#f8fafc)}
    .rdx-help-body{overflow-y:auto;padding:8px 0;flex:1}
    .rdx-help-link{display:flex;align-items:center;gap:12px;padding:10px 20px;text-decoration:none;color:var(--rdx-text,#1e293b);font-size:13px;font-weight:500;transition:background .1s;font-family:'IBM Plex Sans',-apple-system,sans-serif}
    .rdx-help-link:hover{background:var(--rdx-bg-hover,#f8fafc)}
    .rdx-help-link .icon{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;background:var(--rdx-blue-bg,rgba(40,116,166,.06));color:var(--rdx-blue,#2874A6);font-weight:700}
    .rdx-help-link .desc{font-size:11px;color:var(--rdx-text-muted,#64748b);font-weight:400;display:block;margin-top:1px}
    .rdx-help-divider{height:1px;background:var(--rdx-border,#e2e8f0);margin:4px 20px}
    .rdx-help-contact{padding:12px 20px;border-top:1px solid var(--rdx-border,#e2e8f0);font-size:11px;color:var(--rdx-text-muted,#64748b);font-family:'IBM Plex Sans',-apple-system,sans-serif;flex-shrink:0}
    .rdx-help-contact a{color:var(--rdx-blue,#2874A6);font-weight:600;text-decoration:none}
    .rdx-fab-container{position:fixed;bottom:20px;right:20px;display:flex;flex-direction:column;align-items:flex-end;gap:10px;z-index:9999}
    .rdx-fab-wrapper{display:flex;align-items:center;gap:8px}
    .rdx-fab-label{font-size:11px;font-weight:600;color:var(--rdx-text-muted,#64748b);background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);padding:4px 10px;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.06);opacity:0;transform:translateX(8px);transition:all .15s;pointer-events:none;font-family:'IBM Plex Sans',-apple-system,sans-serif;white-space:nowrap}
    .rdx-fab-wrapper:hover .rdx-fab-label{opacity:1;transform:translateX(0)}
    .rdx-fab{width:40px;height:40px;border-radius:12px;border:none;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 12px rgba(0,0,0,.1);transition:all .15s;font-family:'IBM Plex Sans',-apple-system,sans-serif}
    .rdx-fab:hover{transform:translateY(-2px);box-shadow:0 4px 16px rgba(0,0,0,.15)}
    .rdx-fab-dashboard{background:linear-gradient(135deg,#059669,#10b981);color:#fff;text-decoration:none;font-weight:700}
    .rdx-fab-help{background:var(--rdx-blue,#2874A6);color:#fff;font-weight:800;font-size:18px}
    @media(max-width:640px){.rdx-help-panel{left:12px;right:12px;width:auto;bottom:68px}.rdx-fab-label{display:none}}
    @media print{.rdx-fab-container,.rdx-help-panel{display:none!important}}
    [data-theme="dark"] .rdx-help-panel{background:var(--rdx-bg-card,#1e293b);border-color:var(--rdx-border,#334155)}
    [data-theme="dark"] .rdx-fab-label{background:#1e293b;border-color:#334155;color:#94a3b8}
  `;
  document.head.appendChild(style);

  const widget = document.createElement('div');
  widget.innerHTML = `
    <div class="rdx-help-panel" id="rdx-help-panel">
      <div class="rdx-help-header">
        <h3>Help & Navigation</h3>
        <button class="rdx-help-close" onclick="document.getElementById('rdx-help-panel').classList.remove('open')" aria-label="Close">&times;</button>
      </div>
      <div class="rdx-help-body">
        <a href="${base}analytics-dashboard.html" class="rdx-help-link">
          <span class="icon">D</span>
          <span>Learning Dashboard<br><span class="desc">Progress, mastery map & spaced repetition</span></span>
        </a>
        <a href="${base}analytics-dashboard.html" class="rdx-help-link">
          <span class="icon">F</span>
          <span>Content Mastery Fingerprint<br><span class="desc">See your reasoning pathway strengths</span></span>
        </a>
        <div class="rdx-help-divider"></div>
        <a href="${base}index.html" class="rdx-help-link">
          <span class="icon">H</span>
          <span>Home</span>
        </a>
        <a href="${base}study-mode.html" class="rdx-help-link">
          <span class="icon">T</span>
          <span>Study Mode</span>
        </a>
        <a href="${base}case-browser.html" class="rdx-help-link">
          <span class="icon">M</span>
          <span>Modules</span>
        </a>
        <a href="${base}case-browser.html" class="rdx-help-link">
          <span class="icon">C</span>
          <span>Cases & Adventures</span>
        </a>
        <a href="${base}training.html" class="rdx-help-link">
          <span class="icon">Tr</span>
          <span>Training Hub</span>
        </a>
        <div class="rdx-help-divider"></div>
        <a href="${base}index.html#faq" class="rdx-help-link">
          <span class="icon">i</span>
          <span>About ReasonDx & FAQ<br><span class="desc">Features, site map & how to use</span></span>
        </a>
      </div>
      <div class="rdx-help-contact">
        Questions? <a href="mailto:reasondx@laurenmfine.com">reasondx@laurenmfine.com</a>
      </div>
    </div>

    <div class="rdx-fab-container">
      <div class="rdx-fab-wrapper">
        <span class="rdx-fab-label">My Progress</span>
        <a href="${base}analytics-dashboard.html" class="rdx-fab rdx-fab-dashboard" title="Learning Dashboard" aria-label="Open Learning Dashboard">D</a>
      </div>
      <div class="rdx-fab-wrapper">
        <span class="rdx-fab-label">Help & Navigation</span>
        <button class="rdx-fab rdx-fab-help" id="rdx-help-toggle" title="Help & Navigation" aria-label="Open help menu">?</button>
      </div>
    </div>
  `;

  document.body.appendChild(widget);

  document.getElementById('rdx-help-toggle').addEventListener('click', function() {
    document.getElementById('rdx-help-panel').classList.toggle('open');
  });

  document.addEventListener('click', function(e) {
    const panel = document.getElementById('rdx-help-panel');
    const toggle = document.getElementById('rdx-help-toggle');
    if (panel && panel.classList.contains('open') && 
        !panel.contains(e.target) && e.target !== toggle) {
      panel.classList.remove('open');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const panel = document.getElementById('rdx-help-panel');
      if (panel) panel.classList.remove('open');
    }
  });
})();
