/* auth/auth-guard.js — Route protection for ReasonDx
 * ═══════════════════════════════════════════════════
 * Include on any page that requires authentication.
 * If user is not signed in, redirects to login page.
 *
 * Usage:
 *   <script src="js/rdx-supabase.js"></script>
 *   <script src="auth/auth-guard.js"></script>
 *
 * Optional: add data-require-role="program_director" to <html> or <body>
 * to restrict the page to a specific role.
 */
(function() {
'use strict';

// Pages that don't require auth
var PUBLIC_PAGES = [
  'index.html', 'how-it-works.html', '',
  'auth/login.html', 'auth/register.html',
  'auth/privacy.html', 'auth/terms.html'
];

function getPagePath() {
  var path = window.location.pathname;
  // Get just the filename or relative path
  var parts = path.split('/');
  var file = parts[parts.length - 1] || 'index.html';
  // Check if in auth/ subdirectory
  if (parts.length >= 2 && parts[parts.length - 2] === 'auth') {
    file = 'auth/' + file;
  }
  return file;
}

function isPublicPage() {
  var page = getPagePath();
  return PUBLIC_PAGES.indexOf(page) >= 0;
}

function getAuthBasePath() {
  // Determine path to auth/ relative to current page
  var page = getPagePath();
  if (page.indexOf('auth/') === 0) return '';
  return 'auth/';
}

// Check auth state after Supabase initializes
function checkAuth() {
  if (isPublicPage()) return;

  // If RDX isn't ready (Supabase not loaded), allow page to render
  // This prevents breaking the site if Supabase CDN is slow
  if (typeof window.RDX === 'undefined' || !window.RDX.ready) {
    console.warn('[AuthGuard] Supabase not initialized. Allowing access in development mode.');
    return;
  }

  // Listen for auth state
  document.addEventListener('rdx:auth', function handler(e) {
    if (!e.detail.user) {
      // Not logged in — redirect to login
      var returnUrl = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.href = getAuthBasePath() + 'login.html?return=' + returnUrl;
    } else {
      // Check role requirement
      var requiredRole = document.documentElement.getAttribute('data-require-role')
        || document.body.getAttribute('data-require-role');

      if (requiredRole) {
        // Wait for profile to load, then check
        var checkInterval = setInterval(function() {
          var profile = RDX.getProfile();
          if (profile) {
            clearInterval(checkInterval);
            if (profile.role !== requiredRole && profile.role !== 'admin') {
              // Wrong role — show access denied
              document.body.innerHTML = '<div style="text-align:center;padding:80px 20px;font-family:sans-serif">'
                + '<h1 style="color:#DC2626;font-size:24px">Access Denied</h1>'
                + '<p style="color:#64748B;margin-top:12px">This page requires ' + requiredRole + ' access.</p>'
                + '<a href="../dashboard.html" style="color:#2874A6;margin-top:16px;display:inline-block">← Back to Dashboard</a>'
                + '</div>';
            }
          }
        }, 100);

        // Timeout after 5 seconds
        setTimeout(function() {}, 5000);
      }
    }

    // Remove listener after first check
    document.removeEventListener('rdx:auth', handler);
  });

  // Also check immediately in case auth already resolved
  RDX.auth.getSession().then(function(session) {
    if (!session && !isPublicPage()) {
      var returnUrl = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.href = getAuthBasePath() + 'login.html?return=' + returnUrl;
    }
  });
}

// Run check after a short delay to allow Supabase to initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { setTimeout(checkAuth, 100); });
} else {
  setTimeout(checkAuth, 100);
}

})();
