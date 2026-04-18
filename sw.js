// ReasonDx Service Worker — shell caching + offline fallback
const CACHE_NAME = 'rdx-shell-2026-04-18'; // Updated: 2026-04-18 — auto-versioned to bust stale caches on deploy
const SHELL_ASSETS = [
  '/',
  '/browse.html',
  '/index.html',
  '/simulation-engine.html',
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
  // Only handle GET requests for same-origin HTML/JS/CSS
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  // Network-first for API calls, cache-first for assets
  var isAPI = url.pathname.includes('/rest/v1') || url.pathname.includes('/functions/v1') || url.hostname.includes('supabase') || url.hostname.includes('anthropic');
  if (isAPI) return; // Let API calls through unmodified

  // Network-first for HTML; cache-first for assets (CSS/JS/images)
  var isHtml = (e.request.headers.get('accept') || '').includes('text/html');
  e.respondWith(
    fetch(e.request).then(function(response) {
      if (response.ok) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(e.request, clone); });
      }
      return response;
    }).catch(function() {
      // Network failed — try cache
      return caches.match(e.request).then(function(cached) {
        if (cached) return cached;
        // Return offline page for HTML requests
        if ((e.request.headers.get('accept') || '').includes('text/html')) {
          return caches.match('/offline.html') || new Response(
            '<html><body style="font-family:sans-serif;text-align:center;padding:60px"><h2>You\'re offline</h2><p>ReasonDx needs a connection. Your completed cases are saved locally.</p><a href="/browse.html">Try again</a></body></html>',
            { headers: { 'Content-Type': 'text/html' } }
          );
        }
      });
    })
  );
});
