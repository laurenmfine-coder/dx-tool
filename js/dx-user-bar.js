/* dx-user-bar.js — ReasonDx User Auth Bar
 * Reads Supabase session and updates nav auth state on every page.
 * Works with both the new editorial index and legacy pages.
 */
(function () {
  'use strict';

  var SUPABASE_URL = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_KEY = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_ANON_KEY)||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  // Determine base path for links (handles pages in subfolders)
  var depth = (location.pathname.match(/\//g) || []).length - 1;
  var base = '';
  for (var i = 0; i < depth; i++) base += '../';

  // Get display name from session data
  function getDisplayName(user) {
    if (!user) return null;
    return (user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name))
      || user.email.split('@')[0];
  }

  // Update the nav auth area on the new index
  function updateNavAuth(user) {
    var navAuth = document.getElementById('navAuth');
    if (!navAuth) return;

    if (user) {
      var name = getDisplayName(user);
      navAuth.innerHTML =
        '<span style="font-size:13px;font-weight:600;color:var(--text,#1C1C1A);margin-right:4px">' + name + '</span>' +
        '<a href="' + base + 'analytics-dashboard.html" style="font-size:12px;color:var(--dim,#706F6A);padding:6px 10px;border-radius:6px;text-decoration:none;transition:all .15s" onmouseover="this.style.background=\'var(--cream,#F4F2EE)\'" onmouseout="this.style.background=\'transparent\'">My Progress</a>' +
        '<button onclick="rdxSignOut()" style="font-family:inherit;font-size:12px;color:var(--dim2,#B0AFA8);background:none;border:none;cursor:pointer;padding:6px 10px;border-radius:6px;transition:all .15s" onmouseover="this.style.color=\'var(--dim,#706F6A)\'" onmouseout="this.style.color=\'var(--dim2,#B0AFA8)\'">Sign Out</button>';
    } else {
      navAuth.innerHTML =
        '<a class="nav-btn-primary" href="' + base + 'auth/login.html" style="font-family:inherit;font-size:13px;font-weight:600;color:#fff;padding:9px 20px;border-radius:7px;background:#2874A6;text-decoration:none;display:inline-block;transition:all .15s" onmouseover="this.style.background=\'#1B4F72\'" onmouseout="this.style.background=\'#2874A6\'">Sign In</a>';
    }
  }

  // Update legacy pages that use the old top bar
  function updateLegacyBar(user) {
    // Look for any existing sign-in links and update them
    var signInLinks = document.querySelectorAll('a[href*="auth/login"], a[href*="auth/register"], a[href*="login.html"]');
    if (user && signInLinks.length) {
      var name = getDisplayName(user);
      signInLinks.forEach(function(link) {
        if (link.textContent.trim().toLowerCase().match(/sign in|log in|register|create account/)) {
          link.textContent = name;
          link.href = base + 'analytics-dashboard.html';
          link.style.fontWeight = '700';
        }
      });
    }
    // Also update vemr-session for compatibility with old pages
    if (user) {
      try {
        var existing = JSON.parse(localStorage.getItem('vemr-session') || '{}');
        if (!existing.displayName) {
          localStorage.setItem('vemr-session', JSON.stringify({
            displayName: getDisplayName(user),
            email: user.email
          }));
        }
      } catch(e) {}
    }
  }

  // Sign out
  window.rdxSignOut = function() {
    try {
      var sb = window._rdxSbClient || (window.supabase && window.supabase.createClient
        ? (window._rdxSbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY))
        : null);
      if (sb) {
        sb.auth.signOut().then(function() {
          localStorage.removeItem('reasondx-user');
          localStorage.removeItem('vemr-session');
          window.location.href = base + 'index.html';
        });
      } else {
        localStorage.removeItem('reasondx-user');
        localStorage.removeItem('vemr-session');
        window.location.href = base + 'index.html';
      }
    } catch(e) {
      localStorage.removeItem('reasondx-user');
      window.location.href = base + 'index.html';
    }
  };

  // Main init — runs after DOM and Supabase are ready
  function init() {
    var sb = null;
    try {
      if (window._rdxSbClient) {
        sb = window._rdxSbClient;
      } else if (window.supabase && window.supabase.createClient) {
        sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        window._rdxSbClient = sb;
      }
    } catch(e) {}

    if (sb) {
      // Get live session from Supabase
      sb.auth.getSession().then(function(result) {
        var user = result && result.data && result.data.session
          ? result.data.session.user : null;

        // Fall back to localStorage if no live session
        if (!user) {
          try {
            var stored = JSON.parse(localStorage.getItem('reasondx-user') || 'null');
            if (stored && stored.email) user = stored;
          } catch(e) {}
        }

        updateNavAuth(user);
        updateLegacyBar(user);

        // Keep listening for auth changes (sign in / sign out on same page)
        sb.auth.onAuthStateChange(function(event, session) {
          var u = session ? session.user : null;
          updateNavAuth(u);
          updateLegacyBar(u);
          // Sync to localStorage
          if (u) {
            try {
              localStorage.setItem('reasondx-user', JSON.stringify({
                email: u.email,
                name: getDisplayName(u),
                supabaseId: u.id
              }));
              localStorage.setItem('vemr-session', JSON.stringify({
                displayName: getDisplayName(u),
                email: u.email
              }));
            } catch(e2) {}
          } else if (event === 'SIGNED_OUT') {
            try {
              localStorage.removeItem('reasondx-user');
              localStorage.removeItem('vemr-session');
            } catch(e2) {}
          }
        });
      });
    } else {
      // No Supabase — try localStorage fallback
      try {
        var stored = JSON.parse(localStorage.getItem('reasondx-user') || 'null');
        if (stored && stored.email) updateNavAuth(stored);
        else updateNavAuth(null);
      } catch(e) {
        updateNavAuth(null);
      }
    }
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for external use
  window.DxUserBar = { init: init, signOut: window.rdxSignOut };

})();
