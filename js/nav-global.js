// ReasonDx Global Navigation — self-contained, auth-aware
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
      border-top: 4px solid currentColor; margin-left: 6px; vertical-align: middle; opacity: 0.6;
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
    #rdx-global-nav .rdx-nav-actions { display: flex; gap: 8px; margin-left: 16px; flex-shrink: 0; align-items: center; }
    #rdx-global-nav .rdx-nav-btn {
      font-size: 0.78rem; font-weight: 700; padding: 6px 14px;
      border-radius: 7px; text-decoration: none; white-space: nowrap;
      font-family: inherit; cursor: pointer; border: none; transition: all 0.15s;
    }
    #rdx-global-nav .rdx-nav-btn-ghost {
      color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.1);
    }
    #rdx-global-nav .rdx-nav-btn-ghost:hover { background: rgba(255,255,255,0.18); color: #fff; }
    #rdx-global-nav .rdx-nav-btn-primary { color: #fff; background: #2874A6; }
    #rdx-global-nav .rdx-nav-btn-primary:hover { background: #1a5276; }
    #rdx-global-nav .rdx-nav-btn-danger {
      color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
    }
    #rdx-global-nav .rdx-nav-btn-danger:hover { background: rgba(220,38,38,0.3); color: #fff; border-color: rgba(220,38,38,0.4); }
    #rdx-global-nav .rdx-user-email {
      font-size: 0.72rem; color: rgba(255,255,255,0.45); white-space: nowrap;
      max-width: 160px; overflow: hidden; text-overflow: ellipsis;
    }
    body { padding-top: 52px; }
    @media (max-width: 768px) {
      #rdx-global-nav .rdx-nav-links { display: none; }
      #rdx-global-nav .rdx-nav-actions { margin-left: auto; }
      #rdx-global-nav .rdx-user-email { display: none; }
    }
  `;
  document.head.appendChild(style);

  const path = window.location.pathname;
  const isActive = (href) => path.endsWith(href) || path.includes(href.replace('.html','')) ? 'active' : '';

  const nav = document.createElement('div');
  nav.id = 'rdx-global-nav';

  function buildNav(userEmail) {
    const authActions = userEmail
      ? `<span class="rdx-user-email">${userEmail}</span>
         <button class="rdx-nav-btn rdx-nav-btn-danger" onclick="rdxSignOut()">Sign Out</button>`
      : `<a class="rdx-nav-btn rdx-nav-btn-ghost" href="/auth/login.html">Sign In</a>
         <a class="rdx-nav-btn rdx-nav-btn-primary" href="/auth/register.html">Sign Up</a>`;

    nav.innerHTML = `
      <a class="rdx-logo" href="/index.html">Reason<span>Dx</span></a>
      <div class="rdx-nav-links">
        <a class="rdx-nav-link ${isActive('browse.html')}" href="/browse.html" style="font-weight:700">Browse</a>
        <a class="rdx-nav-link ${isActive('casedx.html')}" href="/casedx.html">CaseDx</a>
        <a class="rdx-nav-link ${isActive('CoachDx')}" href="/CoachDx/index.html">CoachDx</a>
        <a class="rdx-nav-link ${isActive('mechanism')}" href="/mechanism/index.html">MechanismDx</a>
        <a class="rdx-nav-link ${isActive('virtual-emr.html')}" href="/virtual-emr.html">ED Board</a>
        <a class="rdx-nav-link ${isActive('genetics')}" href="/genetics/genetics-module.html">Genetics</a>
      </div>
      <div class="rdx-nav-actions">${authActions}</div>
    `;
  }

  // Sign out handler
  window.rdxSignOut = async function() {
    try {
      if (window.RDX && window.RDX.signOut) {
        await window.RDX.signOut();
      } else if (window.supabase) {
        const url = 'https://lpwbiqpojisqgezycupw.supabase.co';
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';
        const client = window.supabase.createClient(url, key);
        await client.auth.signOut();
      }
    } catch(e) { console.warn('Sign out error:', e); }
    window.location.href = '/auth/login.html';
  };

  // Build nav initially (no user)
  buildNav(null);
  document.body.insertBefore(nav, document.body.firstChild);

  // Update nav once auth state is known
  function updateNavAuth() {
    const tryUpdate = () => {
      if (window.RDX && typeof window.RDX.getSession === 'function') {
        window.RDX.getSession().then(session => {
          const email = session?.user?.email || null;
          buildNav(email);
        }).catch(() => buildNav(null));
      } else if (window.supabase) {
        const url = 'https://lpwbiqpojisqgezycupw.supabase.co';
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';
        const client = window.supabase.createClient(url, key);
        client.auth.getSession().then(({ data }) => {
          const email = data?.session?.user?.email || null;
          buildNav(email);
        }).catch(() => buildNav(null));
      }
    };
    // Try immediately, then retry after scripts load
    tryUpdate();
    setTimeout(tryUpdate, 800);
  }

  // Listen for auth events from rdx-supabase.js
  document.addEventListener('rdx:auth', function(e) {
    const email = e.detail?.user?.email || null;
    buildNav(email);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateNavAuth);
  } else {
    updateNavAuth();
  }

  // ── INJECT AGENT CORE + NAVIGATOR WIDGET ──
  // Loads the intelligent navigation agent on every page
  function injectAgentScripts() {
    var scripts = ['/js/rdx-platform.js', '/js/rdx-agent-core.js', '/js/rdx-navigator-widget.js', '/js/rdx-module-hooks.js', '/js/rdx-readability.js', '/js/rdx-passive.js', '/js/rdx-voice.js'];
    scripts.forEach(function(src) {
      var s = document.createElement('script');
      s.src = src;
      s.async = true;
      document.head.appendChild(s);
    });
  }
  // Small delay to avoid competing with page load
  setTimeout(injectAgentScripts, 1500);
})();
