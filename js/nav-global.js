// ReasonDx Global Navigation
// Injects the top navigation bar into all pages
(function() {
  const nav = document.createElement('div');
  nav.id = 'rdx-global-nav';
  nav.innerHTML = `
    <style>
      #rdx-global-nav{position:fixed;top:0;left:0;right:0;height:52px;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);border-bottom:1px solid #E2E8F0;display:flex;align-items:center;padding:0 20px;gap:16px;z-index:200;font-family:'IBM Plex Sans',-apple-system,sans-serif}
      #rdx-global-nav .rdx-logo{font-weight:800;font-size:15px;color:#1B4F72;letter-spacing:-.3px;text-decoration:none}
      #rdx-global-nav .rdx-nav-links{display:flex;gap:4px;margin-left:auto}
      #rdx-global-nav .rdx-nav-link{font-size:12.5px;font-weight:600;color:#64748B;padding:5px 10px;border-radius:6px;text-decoration:none;transition:all .15s}
      #rdx-global-nav .rdx-nav-link:hover{background:#F1F5F9;color:#1E293B}
      body{padding-top:52px}
    </style>
    <a class="rdx-logo" href="/index.html">ReasonDx</a>
    <div class="rdx-nav-links">
      <a class="rdx-nav-link" href="/casedx.html">CaseDx</a>
      <a class="rdx-nav-link" href="/coachdx.html">CoachDx</a>
      <a class="rdx-nav-link" href="/mechanism/index.html">MechanismDx</a>
      <a class="rdx-nav-link" href="/virtual-emr.html">ED Board</a>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
})();
