// ReasonDx Global Navigation — self-contained, no external CSS dependency
(function() {
  if (document.getElementById('rdx-global-nav')) return;

  const style = document.createElement('style');
  style.textContent = `
    #rdx-global-nav {
      position: fixed; top: 0; left: 0; right: 0; height: 52px;
      background: #0d2b3e; display: flex; align-items: center;
      padding: 0 24px; gap: 8px; z-index: 1000;
      font-family: -apple-system, 'IBM Plex Sans', sans-serif;
      border-bottom: 1px solid rgba(133,193,233,0.15);
      box-sizing: border-box;
    }
    #rdx-global-nav * { box-sizing: border-box; }
    #rdx-global-nav .rdx-logo {
      font-size: 1.15rem; font-weight: 800; color: #fff;
      text-decoration: none; letter-spacing: 0.01em; flex-shrink: 0;
      font-family: -apple-system, sans-serif;
    }
    #rdx-global-nav .rdx-logo span { color: #85c1e9; }
    #rdx-global-nav .rdx-nav-links {
      display: flex; align-items: center; gap: 2px; margin-left: auto;
    }
    #rdx-global-nav .rdx-nav-link {
      font-size: 0.8rem; font-weight: 600;
      color: rgba(255,255,255,0.72); text-decoration: none;
      padding: 6px 12px; border-radius: 7px;
      transition: all 0.15s; white-space: nowrap;
    }
    #rdx-global-nav .rdx-nav-link:hover,
    #rdx-global-nav .rdx-nav-link.active {
      color: #fff; background: rgba(255,255,255,0.1);
    }
    #rdx-global-nav .rdx-nav-dropdown { position: relative; display: inline-block; }
    #rdx-global-nav .rdx-nav-dropdown-btn {
      font-size: 0.8rem; font-weight: 600;
      color: rgba(255,255,255,0.72); background: none; border: none;
      padding: 6px 12px; border-radius: 7px; cursor: pointer;
      font-family: inherit; transition: all 0.15s; white-space: nowrap;
    }
    #rdx-global-nav .rdx-nav-dropdown-btn:hover { color: #fff; background: rgba(255,255,255,0.1); }
    #rdx-global-nav .rdx-nav-dropdown-btn::after {
      content: ''; display: inline-block; width: 0; height: 0;
      border-left: 4px solid transparent; border-right: 4px solid transparent;
      border-top: 4px solid currentColor; margin-left: 6px; vertical-align: middle;
      opacity: 0.6;
    }
    #rdx-global-nav .rdx-dropdown-menu {
      display: none; position: absolute; top: calc(100% + 8px); right: 0;
      background: #fff; border: 1.5px solid #dde4ec; border-radius: 10px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.14); min-width: 230px;
      padding: 6px; z-index: 400;
    }
    #rdx-global-nav .rdx-nav-dropdown:hover .rdx-dropdown-menu { display: block; }
    #rdx-global-nav .rdx-dropdown-item {
      display: flex; flex-direction: column; padding: 9px 12px;
      border-radius: 7px; text-decoration: none; transition: background 0.12s; color: #1a2332;
    }
    #rdx-global-nav .rdx-dropdown-item:hover { background: #f8fafc; }
    #rdx-global-nav .rdx-dropdown-item-title { font-size: 0.82rem; font-weight: 700; color: #1a2332; }
    #rdx-global-nav .rdx-dropdown-item-sub { font-size: 0.72rem; color: #5d6d7e; margin-top: 1px; }
    #rdx-global-nav .rdx-dropdown-divider { height: 1px; background: #dde4ec; margin: 4px 0; }
    #rdx-global-nav .rdx-nav-actions { display: flex; gap: 8px; margin-left: 16px; flex-shrink: 0; }
    #rdx-global-nav .rdx-nav-btn {
      font-size: 0.78rem; font-weight: 700; padding: 6px 14px;
      border-radius: 7px; text-decoration: none; white-space: nowrap;
      font-family: inherit; cursor: pointer; border: none; transition: all 0.15s;
    }
    #rdx-global-nav .rdx-nav-btn-ghost {
      color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.1);
    }
    #rdx-global-nav .rdx-nav-btn-ghost:hover { background: rgba(255,255,255,0.18); color: #fff; }
    #rdx-global-nav .rdx-nav-btn-primary {
      color: #fff; background: #2874A6;
    }
    #rdx-global-nav .rdx-nav-btn-primary:hover { background: #1a5276; }
    body { padding-top: 52px; }
    @media (max-width: 768px) {
      #rdx-global-nav .rdx-nav-links { display: none; }
      #rdx-global-nav .rdx-nav-actions { margin-left: auto; }
    }
  `;
  document.head.appendChild(style);

  const path = window.location.pathname;
  const isActive = (href) => path.endsWith(href) || path.includes(href.replace('.html','')) ? 'active' : '';

  const nav = document.createElement('div');
  nav.id = 'rdx-global-nav';
  nav.innerHTML = `
    <a class="rdx-logo" href="/index.html">Reason<span>Dx</span></a>
    <div class="rdx-nav-links">
      <a class="rdx-nav-link ${isActive('casedx.html')}" href="/casedx.html">CaseDx</a>
      <a class="rdx-nav-link ${isActive('CoachDx')}" href="/CoachDx/index.html">CoachDx</a>
      <div class="rdx-nav-dropdown">
        <button class="rdx-nav-dropdown-btn">MechanismDx</button>
        <div class="rdx-dropdown-menu">
          <a class="rdx-dropdown-item" href="/mechanism/index.html">
            <span class="rdx-dropdown-item-title">🎓 Attending Modules</span>
            <span class="rdx-dropdown-item-sub">28 curated topics · attending conversation</span>
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
            <span class="rdx-dropdown-item-title">▶ Angelman Syndrome Case</span>
            <span class="rdx-dropdown-item-sub">The Child Who Keeps Falling</span>
          </a>
          <a class="rdx-dropdown-item" href="/genetics/genetics-aadc-case.html">
            <span class="rdx-dropdown-item-title">▶ AADC Deficiency Case</span>
            <span class="rdx-dropdown-item-sub">The Baby Who Wouldn't Stop Rolling Her Eyes</span>
          </a>
          <div class="rdx-dropdown-divider"></div>
          <a class="rdx-dropdown-item" href="/genetics/genetics-ai-case.html">
            <span class="rdx-dropdown-item-title">▶ HAE / A&sol;I Genetics Case</span>
            <span class="rdx-dropdown-item-sub">The Swelling That Skips Generations</span>
          </a>
          <div class="rdx-dropdown-divider"></div>
          <a class="rdx-dropdown-item" href="/genetics/genetics-cme.html">
            <span class="rdx-dropdown-item-title">🎓 CME Module</span>
            <span class="rdx-dropdown-item-sub">6.0 credits · For practicing physicians</span>
          </a>
        </div>
      </div>
    </div>
    <div class="rdx-nav-actions">
      <a class="rdx-nav-btn rdx-nav-btn-ghost" href="/analytics-dashboard.html">Dashboard</a>
      <a class="rdx-nav-btn rdx-nav-btn-primary" href="/casedx.html">Start Case</a>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
})();
