// ReasonDx Global Navigation — self-contained, auth-aware
(function() {
  if (document.getElementById('rdx-global-nav')) return;

  const style = document.createElement('style');
  style.textContent = `
    #rdx-global-nav {
      position: fixed; top: 0; left: 0; right: 0; height: 52px;
      background: #0d2b3e; display: flex; align-items: center;
      padding: 0 24px; gap: 8px; z-index: 1000;
      font-family: -apple-system, 'DM Sans', sans-serif;
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
    /* Hamburger */
    #rdx-global-nav .rdx-hamburger {
      display: none; background: none; border: none; cursor: pointer; padding: 6px;
      margin-left: auto; color: rgba(255,255,255,.8);
    }
    #rdx-global-nav .rdx-hamburger svg { display: block; }
    /* Mobile drawer */
    #rdx-mobile-drawer {
      display: none; position: fixed; top: 52px; left: 0; right: 0; bottom: 0;
      background: #0d2b3e; z-index: 999; padding: 16px 24px;
      flex-direction: column; gap: 4px; overflow-y: auto;
    }
    #rdx-mobile-drawer.open { display: flex; }
    #rdx-mobile-drawer a {
      font-size: 1rem; font-weight: 600; color: rgba(255,255,255,.8);
      text-decoration: none; padding: 12px 16px; border-radius: 8px;
      transition: background .15s;
    }
    #rdx-mobile-drawer a:hover, #rdx-mobile-drawer a.active { background: rgba(255,255,255,.1); color: #fff; }
    #rdx-mobile-drawer .rdx-drawer-divider { height: 1px; background: rgba(255,255,255,.1); margin: 8px 0; }
    #rdx-mobile-drawer .rdx-drawer-actions { display: flex; gap: 8px; margin-top: 12px; padding: 0 16px; }
    body { padding-top: 52px; }
    @media (max-width: 768px) {
      #rdx-global-nav .rdx-nav-links { display: none; }
      #rdx-global-nav .rdx-nav-actions { display: none; }
      #rdx-global-nav .rdx-hamburger { display: block; }
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
      <a class="rdx-logo" href="/browse.html">Reason<span>Dx</span></a>
      <div class="rdx-nav-actions" style="margin-left:auto">${authActions}</div>
    `;

    // Build mobile drawer
    var drawer = document.getElementById('rdx-mobile-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'rdx-mobile-drawer';
      document.body.appendChild(drawer);
    }
    drawer.innerHTML = `
      <div class="rdx-drawer-actions">
        ${userEmail
          ? '<button class="rdx-nav-btn rdx-nav-btn-danger" onclick="rdxSignOut()" style="flex:1">Sign Out</button>'
          : '<a class="rdx-nav-btn rdx-nav-btn-ghost" href="/auth/login.html" style="flex:1;text-align:center">Sign In</a><a class="rdx-nav-btn rdx-nav-btn-primary" href="/auth/register.html" style="flex:1;text-align:center">Sign Up</a>'
        }
      </div>
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
    var scripts = ['/js/rdx-platform.js', '/js/rdx-agent-core.js', '/js/rdx-navigator-widget.js', '/js/rdx-module-hooks.js', '/js/rdx-readability.js', '/js/rdx-passive.js', '/js/rdx-voice.js', '/js/rdx-reasoning-tools.js', '/js/rdx-notebooklm-tracker.js', '/js/rdx-mechanism-mastery.js', '/js/rdx-illness-script-comparator.js', '/js/rdx-lscs.js'];
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
