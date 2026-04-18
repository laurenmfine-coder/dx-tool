/* js/guest-nudge.js — ReasonDx Sitewide Guest Registration Nudge
 * Passive bottom banner (always visible for guests) +
 * Exit-intent popup (once per session when guest moves to leave).
 * Zero impact on authenticated users. ~3KB minified.
 */
(function () {
  'use strict';

  // ── Auth detection ──────────────────────────────────────────
  function isAuthenticated() {
    try {
      return !!(
        localStorage.getItem('rdx-user-token') ||
        localStorage.getItem('sb-lpwbiqpojisqgezycupw-auth-token') ||
        localStorage.getItem('rdx-user-id')
      );
    } catch (e) { return false; }
  }

  // ── Skip pages ──────────────────────────────────────────────
  var skipPaths = ['/auth/register', '/auth/login', '/auth/signup'];
  function onSkipPage() {
    var path = window.location.pathname;
    return skipPaths.some(function (p) { return path.indexOf(p) !== -1; });
  }

  // ── Dismissal state ─────────────────────────────────────────
  function bannerDismissed() {
    try { return !!localStorage.getItem('rdx-nudge-dismissed'); } catch (e) { return false; }
  }
  function exitDismissed() {
    try { return !!sessionStorage.getItem('rdx-exit-dismissed'); } catch (e) { return false; }
  }
  function dismissBanner() {
    try { localStorage.setItem('rdx-nudge-dismissed', '1'); } catch (e) {}
    var el = document.getElementById('rdx-guest-banner');
    if (el) { el.style.transform = 'translateY(100%)'; el.style.opacity = '0'; setTimeout(function () { el.remove(); }, 300); }
  }
  function dismissExit() {
    try { sessionStorage.setItem('rdx-exit-dismissed', '1'); } catch (e) {}
    var el = document.getElementById('rdx-exit-nudge');
    if (el) { el.style.opacity = '0'; setTimeout(function () { el.remove(); }, 220); }
  }

  // ── Context-aware banner copy ────────────────────────────────
  // Picks a slightly different line based on what the user just did
  function getBannerCopy() {
    var path = window.location.pathname;
    if (path.indexOf('virtual-emr') !== -1) {
      return 'Working on a case? <strong>Create a free account</strong> to save your progress and come back to it later.';
    }
    if (path.indexOf('simulation-engine') !== -1 || path.indexOf('browse') !== -1) {
      return 'Want to track your reasoning over time? <strong>Sign up free</strong> \u2014 it takes 30 seconds.';
    }
    if (path.indexOf('puzzles') !== -1) {
      return 'Keep your streak going. <strong>Create a free account</strong> to save your puzzle history.';
    }
    return 'You\u2019re using ReasonDx as a guest. <strong>Sign up free</strong> to save your work and unlock profession-specific feedback.';
  }

  // ── Styles ───────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById('rdx-nudge-css')) return;
    var s = document.createElement('style');
    s.id = 'rdx-nudge-css';
    s.textContent = [
      // Banner
      '#rdx-guest-banner{position:fixed;bottom:0;left:0;right:0;z-index:8888;background:#1B4F72;color:#fff;padding:10px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;font-family:\'DM Sans\',-apple-system,sans-serif;font-size:13px;box-shadow:0 -2px 12px rgba(0,0,0,.18);transform:translateY(0);transition:transform .3s ease,opacity .3s ease;flex-wrap:wrap}',
      '#rdx-guest-banner a.rdx-nudge-cta{display:inline-block;padding:6px 16px;background:#2874A6;color:#fff;border-radius:20px;font-size:12px;font-weight:700;text-decoration:none;white-space:nowrap;transition:background .15s;flex-shrink:0}',
      '#rdx-guest-banner a.rdx-nudge-cta:hover{background:#0D7A67}',
      '#rdx-guest-banner .rdx-nudge-text{flex:1;min-width:200px;line-height:1.4;color:rgba(255,255,255,.9)}',
      '#rdx-guest-banner .rdx-nudge-text strong{color:#fff}',
      '#rdx-nudge-dismiss{background:none;border:none;color:rgba(255,255,255,.5);font-size:18px;cursor:pointer;padding:0 4px;line-height:1;flex-shrink:0;font-family:inherit}',
      '#rdx-nudge-dismiss:hover{color:#fff}',
      // Exit intent overlay
      '#rdx-exit-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9888;animation:rdxFadeIn .2s ease}',
      '#rdx-exit-nudge{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9889;background:#fff;border-radius:12px;padding:32px 36px;max-width:420px;width:90vw;box-shadow:0 8px 40px rgba(0,0,0,.2);font-family:\'DM Sans\',-apple-system,sans-serif;animation:rdxSlideUp .22s ease;text-align:center}',
      '#rdx-exit-nudge h3{margin:0 0 10px;font-size:20px;font-weight:700;color:#1B4F72}',
      '#rdx-exit-nudge p{margin:0 0 20px;font-size:14px;color:#4a5568;line-height:1.6}',
      '#rdx-exit-nudge .rdx-exit-cta{display:block;width:100%;padding:12px;background:#2874A6;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;text-decoration:none;margin-bottom:10px;transition:background .15s;box-sizing:border-box;text-align:center}',
      '#rdx-exit-nudge .rdx-exit-cta:hover{background:#1B4F72}',
      '#rdx-exit-nudge .rdx-exit-skip{background:none;border:none;font-size:13px;color:#718096;cursor:pointer;font-family:inherit;text-decoration:underline;text-underline-offset:2px}',
      '#rdx-exit-nudge .rdx-exit-skip:hover{color:#2874A6}',
      '@keyframes rdxFadeIn{from{opacity:0}to{opacity:1}}',
      '@keyframes rdxSlideUp{from{opacity:0;transform:translate(-50%,-46%)}to{opacity:1;transform:translate(-50%,-50%)}}',
      '@media(max-width:500px){#rdx-guest-banner{padding:10px 14px;font-size:12px}#rdx-exit-nudge{padding:24px 20px}}'
    ].join('');
    document.head.appendChild(s);
  }

  // ── Passive bottom banner ────────────────────────────────────
  function injectBanner() {
    if (bannerDismissed()) return;
    if (document.getElementById('rdx-guest-banner')) return;

    var registerUrl = (window.location.pathname.indexOf('/auth/') !== -1 ? '' : '') + '/auth/register.html';

    var banner = document.createElement('div');
    banner.id = 'rdx-guest-banner';
    banner.setAttribute('role', 'complementary');
    banner.setAttribute('aria-label', 'Guest registration prompt');
    banner.innerHTML =
      '<span class="rdx-nudge-text">' + getBannerCopy() + '</span>' +
      '<a href="' + registerUrl + '" class="rdx-nudge-cta" onclick="try{localStorage.setItem(\'rdx-nudge-dismissed\',\'1\')}catch(e){}">Create Free Account</a>' +
      '<button id="rdx-nudge-dismiss" onclick="window.RDXNudge&&RDXNudge.dismissBanner()" aria-label="Dismiss">\u00d7</button>';

    document.body.appendChild(banner);

    // Nudge page content up slightly so banner doesn't overlap bottom content
    // Only on pages where body isn't already padded (EMR manages its own layout)
    var isEMR = document.querySelector('.app-container');
    if (!isEMR) {
      document.body.style.paddingBottom = Math.max(
        parseInt(getComputedStyle(document.body).paddingBottom) || 0,
        52
      ) + 'px';
    }
  }

  // ── Exit-intent popup ────────────────────────────────────────
  var _exitFired = false;

  function showExitNudge() {
    if (_exitFired) return;
    if (exitDismissed()) return;
    if (bannerDismissed()) return; // already engaged, don't double-nudge
    if (document.getElementById('rdx-exit-nudge')) return;

    _exitFired = true;
    try { sessionStorage.setItem('rdx-exit-dismissed', '1'); } catch (e) {}

    var registerUrl = '/auth/register.html';

    var backdrop = document.createElement('div');
    backdrop.id = 'rdx-exit-backdrop';
    backdrop.onclick = function () { dismissExitFull(); };

    var modal = document.createElement('div');
    modal.id = 'rdx-exit-nudge';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'rdx-exit-title');
    modal.innerHTML =
      '<h3 id="rdx-exit-title">Before you go \u2014</h3>' +
      '<p>Your work won\u2019t be saved as a guest. It takes about 30 seconds to create a free account, and you\u2019ll be able to come back and pick up right where you left off.</p>' +
      '<a href="' + registerUrl + '" class="rdx-exit-cta" onclick="try{localStorage.setItem(\'rdx-nudge-dismissed\',\'1\')}catch(e){}">Create Free Account \u2192</a>' +
      '<button class="rdx-exit-skip" onclick="window.RDXNudge&&RDXNudge.dismissExitFull()">Continue as guest</button>';

    document.body.appendChild(backdrop);
    document.body.appendChild(modal);
  }

  function dismissExitFull() {
    var backdrop = document.getElementById('rdx-exit-backdrop');
    var modal    = document.getElementById('rdx-exit-nudge');
    if (backdrop) { backdrop.style.opacity = '0'; setTimeout(function () { backdrop.remove(); }, 220); }
    if (modal)    { modal.style.opacity    = '0'; setTimeout(function () { modal.remove();    }, 220); }
  }

  // Desktop: mouse leaves viewport toward top (classic exit intent)
  function onMouseLeave(e) {
    if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth) {
      showExitNudge();
    }
  }

  // Mobile / all devices: page hidden (tab switch or app switch = likely leaving)
  function onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      showExitNudge();
    }
  }

  // ── Public API ───────────────────────────────────────────────
  window.RDXNudge = {
    dismissBanner:   dismissBanner,
    dismissExitFull: dismissExitFull,
    show:            injectBanner
  };

  // ── Init ─────────────────────────────────────────────────────
  function init() {
    if (isAuthenticated()) return;
    if (onSkipPage())      return;

    injectStyles();

    // Banner: show immediately on DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', injectBanner);
    } else {
      injectBanner();
    }

    // Exit intent: attach after a brief delay so we don't fire on normal navigation
    setTimeout(function () {
      if (isAuthenticated()) return; // re-check in case auth happened fast
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('visibilitychange', onVisibilityChange);
    }, 3000);
  }

  init();

})();
