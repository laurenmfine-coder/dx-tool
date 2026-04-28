// ReasonDx Service Worker — shell caching + offline fallback
const CACHE_NAME = 'rdx-shell-2026-04-27-fix'; // Bumped after fixing fetch handler that returned undefined from respondWith
const SHELL_ASSETS = [
  '/',
  '/browse.html',
  '/index.html',
  '/virtual-emr.html',
  '/dashboard.html',
  '/js/nav-global.js',
  '/mobile.css',
  '/offline.html'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(SHELL_ASSETS.filter(function(url) {
        return url !== '/offline.html'; // optional, won't fail if missing
      }));
    }).catch(function() {}) // Never block install
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE_NAME; })
        .map(function(k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;
  var url;
  try { url = new URL(e.request.url); }
  catch(_) { return; } // malformed URL — let browser handle
  if (url.origin !== self.location.origin) return;

  // Don't intercept API calls — they should always go to the network unmodified.
  // Note: cross-origin already returned above, so the supabase/anthropic
  // hostname checks here are belt-and-suspenders for any same-origin
  // proxy paths.
  var isAPI = url.pathname.indexOf('/rest/v1') >= 0
           || url.pathname.indexOf('/functions/v1') >= 0
           || url.hostname.indexOf('supabase') >= 0
           || url.hostname.indexOf('anthropic') >= 0;
  if (isAPI) return; // Let API calls through unmodified

  var accept = (e.request.headers.get('accept') || '');
  var isHtml = accept.indexOf('text/html') >= 0;

  e.respondWith(
    fetch(e.request).then(function(response) {
      // Cache successful basic responses (skip opaque, error, redirect)
      if (response && response.ok && response.type === 'basic') {
        try {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(e.request, clone).catch(function(){});
          }).catch(function(){});
        } catch(_) {}
      }
      return response;
    }).catch(function() {
      // Network failed — fall back to cache
      return caches.match(e.request).then(function(cached) {
        if (cached) return cached;

        // No cache hit. Return SOMETHING — never undefined, or
        // event.respondWith throws "Failed to convert value to 'Response'"
        // which surfaces as an Uncaught (in promise) TypeError and breaks
        // the request entirely.
        if (isHtml) {
          return caches.match('/offline.html').then(function(off) {
            return off || new Response(
              '<html><body style="font-family:sans-serif;text-align:center;padding:60px">'
              + '<h2>You\'re offline</h2>'
              + '<p>ReasonDx needs a connection. Your completed cases are saved locally.</p>'
              + '<a href="/browse.html">Try again</a></body></html>',
              { status: 503, headers: { 'Content-Type': 'text/html' } }
            );
          });
        }
        // Non-HTML asset that's neither in cache nor reachable:
        // return a minimal 504 Response so the page can handle the
        // failure (e.g., a script tag's onerror) instead of the SW
        // crashing with an Uncaught TypeError.
        return new Response('', { status: 504, statusText: 'Gateway Timeout (offline)' });
      });
    })
  );
});
