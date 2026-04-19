/* rdx-welcome-redirect.js
 *
 * Redirect first-time visitors on /, /index.html, and /browse.html to
 * /welcome.html. Sets a localStorage flag on the welcome page itself so
 * returning visitors skip the redirect.
 *
 * Include this as the FIRST script in <head> on the entry pages so it
 * fires before any other rendering logic. The script is ~20 lines and
 * has no dependencies.
 *
 * Opt-outs (visitor won't be redirected):
 * - localStorage 'rdx-seen-welcome' is set (they've been to /welcome)
 * - URL has ?skip-welcome=1 (shareable skip link)
 * - referrer is from reasondx.com itself (they're navigating internally)
 * - localStorage is unavailable (private-mode Safari, etc.)
 */
(function() {
  try {
    // If user is already on the welcome page, do nothing.
    if (/\/welcome\.html?$/.test(location.pathname)) return;

    // If they have the skip flag in the URL, honor it and remember.
    if (/[?&]skip-welcome=1/.test(location.search)) {
      try { localStorage.setItem('rdx-seen-welcome', '1'); } catch(e) {}
      return;
    }

    // If they've already seen the welcome page, skip.
    if (localStorage.getItem('rdx-seen-welcome')) return;

    // If they arrived from elsewhere on reasondx.com (internal nav), skip.
    // This prevents redirect loops and avoids re-onboarding users who
    // deep-link into a case and come back to browse.
    if (document.referrer && /reasondx\.com/.test(document.referrer)) {
      try { localStorage.setItem('rdx-seen-welcome', '1'); } catch(e) {}
      return;
    }

    // First-time visitor. Redirect preserving any query params so
    // marketing UTM tags etc. aren't lost.
    var qs = location.search ? location.search : '';
    location.replace('/welcome.html' + qs);
  } catch(e) {
    // If anything throws, do nothing — the page continues to load normally.
  }
})();
