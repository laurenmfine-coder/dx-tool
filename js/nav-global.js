/* nav-global.js — ReasonDx Global Navigation
 * Injects a consistent top bar on every page.
 * Reads Supabase session for auth state.
 * Replace the existing nav-global.js with this file.
 */
(function () {
  'use strict';

  // Don't double-inject
  if (document.getElementById('rdx-global-nav')) return;

  // Determine base path
  var depth = (location.pathname.match(/\//g) || []).length - 1;
  var base = '';
  for (var i = 0; i < depth; i++) base += '../';

  var SB_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';
  var SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  // Inject styles
  var style = document.createElement('style');
  style.textContent = `
    #rdx-global-nav {
      position: fixed; top: 0; left: 0; right: 0; height: 44px; z-index: 9999;
      background: rgba(250,249,247,.97); backdrop-filter: blur(16px);
      border-bottom: 1px solid #E6E4DF;
      display: flex; align-items: center; padding: 0 24px; gap: 6px;
      font-family: 'DM Sans', -apple-system, sans-serif;
      font-size: 12px; color: #706F6A;
    }
    #rdx-global-nav * { box-sizing: border-box; }
    .rdx-nav-logo {
      display: flex; align-items: center; gap: 7px;
      text-decoration: none; color: #1C1C1A; margin-right: 8px; flex-shrink: 0;
    }
    .rdx-nav-mark {
      width: 24px; height: 24px; background: #2874A6; border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      color: #fff; font-size: 11px; font-weight: 600; flex-shrink: 0;
      font-family: 'Playfair Display', Georgia, serif;
    }
    .rdx-nav-wordmark {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 15px; font-weight: 400; color: #1C1C1A;
    }
    .rdx-nav-sep { color: #E6E4DF; font-size: 16px; margin: 0 2px; }
    .rdx-nav-link {
      padding: 5px 10px; border-radius: 6px; color: #706F6A;
      text-decoration: none; white-space: nowrap; transition: all .15s;
      font-weight: 400;
    }
    .rdx-nav-link:hover { background: #F4F2EE; color: #1C1C1A; }
    .rdx-nav-link.active { color: #2874A6; font-weight: 600; }
    .rdx-nav-right { margin-left: auto; display: flex; align-items: center; gap: 6px; }
    .rdx-nav-start {
      padding: 6px 14px; background: #2874A6; color: #fff;
      border-radius: 6px; font-weight: 600; text-decoration: none;
      font-size: 12px; white-space: nowrap; transition: background .15s;
    }
    .rdx-nav-start:hover { background: #1B4F72; }
    .rdx-nav-user { font-weight: 600; color: #1C1C1A; font-size: 12px; }
    .rdx-nav-action {
      padding: 5px 10px; border-radius: 6px; color: #706F6A;
      text-decoration: none; font-size: 12px; cursor: pointer;
      background: none; border: none; font-family: inherit; transition: all .15s;
    }
    .rdx-nav-action:hover { background: #F4F2EE; color: #1C1C1A; }
    body { padding-top: 44px !important; }
    /* Hide on pages that have their own full nav */
    body.has-own-nav #rdx-global-nav { display: none !important; }
    body.has-own-nav { padding-top: 0 !important; }
    @media (max-width: 640px) {
      .rdx-nav-links { display: none; }
      #rdx-global-nav { padding: 0 16px; }
    }
  `;
  document.head.appendChild(style);

  // Determine active link
  var path = location.pathname;
  function isActive(href) {
    return path.includes(href.replace('.html','').replace('../',''));
  }

  // Build nav HTML
  var nav = document.createElement('div');
  nav.id = 'rdx-global-nav';
  nav.innerHTML = `
    <a class="rdx-nav-logo" href="${base}index.html">
      <div class="rdx-nav-mark">Rx</div>
      <span class="rdx-nav-wordmark">ReasonDx</span>
    </a>
    <span class="rdx-nav-sep">|</span>
    <div class="rdx-nav-links" style="display:flex;align-items:center;gap:2px">
      <a class="rdx-nav-link ${isActive('CoachDx') ? 'active' : ''}"
         href="${base}CoachDx/mentor-chat.html">🧑‍⚕️ CoachDx</a>
      <a class="rdx-nav-link ${isActive('virtual-emr') || isActive('ed-board') ? 'active' : ''}"
         href="${base}virtual-emr.html">🩺 Cases</a>
      <a class="rdx-nav-link ${isActive('mechanism') ? 'active' : ''}"
         href="${base}mechanism/anaphylaxis-module.html">🔬 MechanismDx</a>
    </div>
    <div class="rdx-nav-right" id="rdxNavRight">
      <a class="rdx-nav-start" href="${base}start.html">▶ Start Session</a>
    </div>
  `;

  // Insert at top of body
  if (document.body) {
    document.body.insertBefore(nav, document.body.firstChild);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.insertBefore(nav, document.body.firstChild);
    });
  }

  // Auth state
  function updateAuth(user) {
    var right = document.getElementById('rdxNavRight');
    if (!right) return;
    if (user) {
      var name = (user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name))
        || (user.email ? user.email.split('@')[0] : 'Student');
      // Show first name only
      var first = name.split(' ')[0];
      right.innerHTML = `
        <span class="rdx-nav-user">${first}</span>
        <a class="rdx-nav-action" href="${base}analytics-dashboard.html">My Progress</a>
        <button class="rdx-nav-action" onclick="rdxGlobalSignOut()">Sign Out</button>
      `;
    } else {
      right.innerHTML = `
        <a class="rdx-nav-action" href="${base}auth/login.html">Sign In</a>
        <a class="rdx-nav-start" href="${base}start.html">▶ Start Session</a>
      `;
    }
  }

  // Sign out
  window.rdxGlobalSignOut = function() {
    try {
      var sb = window.supabase && window.supabase.createClient
        ? window.supabase.createClient(SB_URL, SB_KEY) : null;
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

  // Check auth after Supabase loads
  function checkAuth() {
    var sb = null;
    try {
      if (window.supabase && window.supabase.createClient)
        sb = window.supabase.createClient(SB_URL, SB_KEY);
    } catch(e) {}

    if (sb) {
      sb.auth.getSession().then(function(result) {
        var user = result && result.data && result.data.session
          ? result.data.session.user : null;
        if (!user) {
          try {
            var stored = JSON.parse(localStorage.getItem('reasondx-user') || 'null');
            if (stored && stored.email) user = stored;
          } catch(e) {}
        }
        updateAuth(user);
        // Keep listening
        sb.auth.onAuthStateChange(function(event, session) {
          updateAuth(session ? session.user : null);
        });
      });
    } else {
      // Try localStorage fallback
      try {
        var stored = JSON.parse(localStorage.getItem('reasondx-user') || 'null');
        if (stored && stored.email) updateAuth(stored);
      } catch(e) {}
    }
  }

  // Wait for Supabase if it's loading async
  if (window.supabase) {
    checkAuth();
  } else {
    var attempts = 0;
    var poll = setInterval(function() {
      attempts++;
      if (window.supabase || attempts > 20) {
        clearInterval(poll);
        checkAuth();
      }
    }, 150);
  }

  // Expose for dx-user-bar compatibility
  window.DxUserBar = window.DxUserBar || { init: checkAuth, signOut: window.rdxGlobalSignOut };

})();
