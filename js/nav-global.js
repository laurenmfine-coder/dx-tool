// ReasonDx Global Navigation — Design System v2
// Injects the top navigation bar into all pages.
// Requires: /css/rdx-design-system.css
(function() {
  if (document.getElementById('rdx-global-nav')) return;
  const nav = document.createElement('div');
  nav.id = 'rdx-global-nav';

  // Highlight active page
  const path = window.location.pathname;
  const isActive = (href) => path.endsWith(href) || path.includes(href.replace('.html','')) ? 'active' : '';

  nav.innerHTML = `
    <a class="rdx-logo" href="/index.html">Reason<span>Dx</span></a>
    <div class="rdx-nav-links">
      <a class="rdx-nav-link ${isActive('casedx.html')}"    href="/casedx.html">CaseDx</a>
      <a class="rdx-nav-link ${isActive('CoachDx')}"        href="/CoachDx/index.html">CoachDx</a>
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
            <span class="rdx-dropdown-item-sub">560 topics · 5-phase mastery</span>
          </a>
        </div>
      </div>
      <a class="rdx-nav-link ${isActive('virtual-emr.html')}" href="/virtual-emr.html">ED Board</a>
      <div class="rdx-nav-dropdown">
        <button class="rdx-nav-dropdown-btn">Genetics 🧬</button>
        <div class="rdx-dropdown-menu">
          <a class="rdx-dropdown-item" href="/genetics/genetics-module.html">
            <span class="rdx-dropdown-item-title">🧬 Genetics Module</span>
            <span class="rdx-dropdown-item-sub">18 cases · 7 clinical tracks</span>
          </a>
          <div class="rdx-dropdown-divider"></div>
          <a class="rdx-dropdown-item" href="/genetics/genetics-demo-case.html">
            <span class="rdx-dropdown-item-title">▶ Featured Case</span>
            <span class="rdx-dropdown-item-sub">The Child Who Keeps Falling</span>
          </a>
        </div>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-left:16px;flex-shrink:0;">
      <a class="rdx-nav-btn rdx-nav-btn-ghost" href="/analytics-dashboard.html">Dashboard</a>
      <a class="rdx-nav-btn rdx-nav-btn-primary" href="/casedx.html">Start Case</a>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
})();
