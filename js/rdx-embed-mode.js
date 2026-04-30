/* eslint-disable no-console */
/**
 * rdx-embed-mode.js
 * ════════════════════════════════════════════════════════════════════
 * When loaded inside an iframe with ?embed=1, hides the global nav,
 * the EMR shell, the help FAB, the mechanism-bridge augmentation
 * footer, demo banner, and other page chrome that doesn't belong in
 * a drawer view.
 *
 * Designed to be loaded early (before nav-global.js and other UI
 * scripts inject their elements) so we can apply CSS that prevents
 * them from rendering. Where that's not possible (scripts that
 * inject after this), we use a MutationObserver to remove them as
 * they appear.
 *
 * Activated by the presence of ?embed=1 in the URL.
 *
 * Inner-page contract:
 *   - <body> gets class "rdx-embed-mode"
 *   - global window.RDX_EMBED_MODE === true
 *   - Document title gets a "[embed]" suffix to make it obvious in
 *     devtools when debugging.
 */

(function() {
  'use strict';
  try {
    var p = new URLSearchParams(window.location.search);
    if (p.get('embed') !== '1') return;
  } catch(e) { return; }

  window.RDX_EMBED_MODE = true;

  // Inject CSS as early as possible
  var css = [
    'body.rdx-embed-mode { padding-top: 0 !important; }',
    // Hide global nav even if it injects
    'body.rdx-embed-mode #rdx-global-nav,',
    'body.rdx-embed-mode #rdx-mobile-drawer { display: none !important; }',
    // Hide EMR shell sidebar, demo banner
    'body.rdx-embed-mode #emr-shell-sidebar,',
    'body.rdx-embed-mode #emr-sidebar,',
    'body.rdx-embed-mode #demo-banner { display: none !important; }',
    // Hide mechanism-bridge augmentation footer
    'body.rdx-embed-mode #mech-bridge-footer { display: none !important; }',
    // Hide help / agent / floating widgets
    'body.rdx-embed-mode .rdx-help-fab,',
    'body.rdx-embed-mode .rdx-help-float,',
    'body.rdx-embed-mode #rdx-navigator-widget,',
    'body.rdx-embed-mode #rdx-pillar-fab,',
    'body.rdx-embed-mode #rdx-pillar-pop { display: none !important; }',
    // Hide guest signup nudges (we want the drawer to feel clean)
    'body.rdx-embed-mode .guest-nudge,',
    'body.rdx-embed-mode #guestNudge,',
    'body.rdx-embed-mode .signup-banner { display: none !important; }',
    // Trim heavy outer paddings — drawer is narrow
    'body.rdx-embed-mode { background: #fff !important; }',
    // Mechanism module pages have a .page wrapper with default padding
    'body.rdx-embed-mode .page { padding-top: 12px !important; padding-bottom: 24px !important; }',
    // CoachDx mentor-chat: collapse the topic picker sidebar; the user
    // already chose a topic on the previous page. Show only the chat.
    'body.rdx-embed-mode #picker,',
    'body.rdx-embed-mode .picker { display: none !important; }',
    'body.rdx-embed-mode .layout { grid-template-columns: 1fr !important; display: flex !important; }',
    'body.rdx-embed-mode .chat-area { width: 100% !important; max-width: 100% !important; flex: 1 !important; }',
    // Mechanism modules: the gap-banner and return-float compete with the
    // drawer close button. Hide them in embed mode.
    'body.rdx-embed-mode .gap-banner,',
    'body.rdx-embed-mode .return-float { display: none !important; }',
    // Mechanism module hero is large; make it more compact in the drawer
    'body.rdx-embed-mode .hero { padding: 18px 20px 14px !important; margin-bottom: 18px !important; }',
    'body.rdx-embed-mode .hero h1 { font-size: 18px !important; }',
    'body.rdx-embed-mode .hero-sub { font-size: 12px !important; }'
  ].join('\n');

  function injectCss() {
    var s = document.createElement('style');
    s.id = 'rdx-embed-style';
    s.textContent = css;
    if (document.head) document.head.appendChild(s);
    else document.documentElement.appendChild(s);
  }

  injectCss();

  // Mark body as soon as it exists
  function markBody() {
    if (document.body) {
      document.body.classList.add('rdx-embed-mode');
    } else {
      // Body not ready — try again
      setTimeout(markBody, 10);
    }
  }
  markBody();

  // Title suffix for devtools clarity
  if (document.title && !/\[embed\]/.test(document.title)) {
    document.title = document.title + ' [embed]';
  }

  // Some scripts inject after load — sweep for them periodically for the
  // first few seconds.
  function sweep() {
    var ids = ['rdx-global-nav', 'rdx-mobile-drawer', 'emr-shell-sidebar',
               'emr-sidebar', 'demo-banner', 'mech-bridge-footer',
               'rdx-navigator-widget'];
    ids.forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
    var byClass = ['.rdx-help-fab', '.rdx-help-float', '.guest-nudge', '.signup-banner'];
    byClass.forEach(function(sel) {
      try {
        document.querySelectorAll(sel).forEach(function(el) { el.style.display = 'none'; });
      } catch(e) {}
    });
  }

  // Run sweep periodically for the first ~6 seconds (catches deferred inject)
  var sweepCount = 0;
  var sweepInt = setInterval(function() {
    sweep();
    sweepCount++;
    if (sweepCount > 12) clearInterval(sweepInt);
  }, 500);
})();
