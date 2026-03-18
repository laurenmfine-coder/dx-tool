// ReasonDx Global Navigation
// Injects the top navigation bar into all pages
(function() {
  const nav = document.createElement('div');
  nav.id = 'rdx-global-nav';
  nav.innerHTML = `
    <style>
      #rdx-global-nav{position:fixed;top:0;left:0;right:0;height:52px;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);border-bottom:1px solid #E2E8F0;display:flex;align-items:center;padding:0 20px;gap:16px;z-index:200;font-family:'IBM Plex Sans',-apple-system,sans-serif}
      #rdx-global-nav .rdx-logo{font-weight:800;font-size:15px;color:#1B4F72;letter-spacing:-.3px;text-decoration:none}
      #rdx-global-nav .rdx-nav-links{display:flex;gap:4px;margin-left:auto;align-items:center}
      #rdx-global-nav .rdx-nav-link{font-size:12.5px;font-weight:600;color:#64748B;padding:5px 10px;border-radius:6px;text-decoration:none;transition:all .15s}
      #rdx-global-nav .rdx-nav-link:hover{background:#F1F5F9;color:#1E293B}
      #rdx-global-nav .rdx-nav-dropdown{position:relative;display:inline-block}
      #rdx-global-nav .rdx-nav-dropdown-btn{font-size:12.5px;font-weight:600;color:#64748B;padding:5px 10px;border-radius:6px;text-decoration:none;transition:all .15s;cursor:pointer;background:none;border:none;font-family:inherit;display:flex;align-items:center;gap:3px}
      #rdx-global-nav .rdx-nav-dropdown-btn:hover{background:#F1F5F9;color:#1E293B}
      #rdx-global-nav .rdx-nav-dropdown-btn::after{content:'▾';font-size:10px;opacity:.6}
      #rdx-global-nav .rdx-dropdown-menu{position:absolute;top:calc(100% + 6px);right:0;background:#fff;border:1px solid #E2E8F0;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.1);min-width:200px;padding:6px;display:none;z-index:300}
      #rdx-global-nav .rdx-nav-dropdown:hover .rdx-dropdown-menu{display:block}
      #rdx-global-nav .rdx-dropdown-item{display:flex;flex-direction:column;padding:8px 12px;border-radius:7px;text-decoration:none;transition:all .15s;gap:1px}
      #rdx-global-nav .rdx-dropdown-item:hover{background:#F8FAFC}
      #rdx-global-nav .rdx-dropdown-item-title{font-size:12.5px;font-weight:700;color:#1E293B}
      #rdx-global-nav .rdx-dropdown-item-sub{font-size:11px;color:#94A3B8}
      #rdx-global-nav .rdx-dropdown-divider{height:1px;background:#F1F5F9;margin:4px 0}
      body{padding-top:52px}
    </style>
    <a class="rdx-logo" href="/index.html">ReasonDx</a>
    <div class="rdx-nav-links">
      <a class="rdx-nav-link" href="/casedx.html">CaseDx</a>
      <a class="rdx-nav-link" href="/CoachDx/index.html">CoachDx</a>
      <div class="rdx-nav-dropdown">
        <button class="rdx-nav-dropdown-btn">MechanismDx</button>
        <div class="rdx-dropdown-menu">
          <a class="rdx-dropdown-item" href="/mechanism/index.html">
            <span class="rdx-dropdown-item-title">🎓 Attending Modules</span>
            <span class="rdx-dropdown-item-sub">20 curated topics · attending conversation</span>
          </a>
          <div class="rdx-dropdown-divider"></div>
          <a class="rdx-dropdown-item" href="/pathway.html">
            <span class="rdx-dropdown-item-title">🔬 Topic Explorer</span>
            <span class="rdx-dropdown-item-sub">560 topics · 5-phase mastery · board prep</span>
          </a>
        </div>
      </div>
      <a class="rdx-nav-link" href="/virtual-emr.html">ED Board</a>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
})();
