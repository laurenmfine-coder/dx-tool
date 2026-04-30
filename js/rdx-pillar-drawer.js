/* eslint-disable no-console */
/**
 * rdx-pillar-drawer.js
 * ════════════════════════════════════════════════════════════════════
 * Slide-over drawer that lets a learner pause a case to review the
 * matched mechanism module or have a CoachDx conversation, without
 * leaving the case.
 *
 * Renders on top of virtual-emr.html. The case stays mounted underneath,
 * scroll position preserved. When the drawer closes, the case is exactly
 * where the learner left it.
 *
 * Usage:
 *   window.RdxDrawer.open({
 *     pillar: 'mechanism' | 'coach',
 *     caseId: 'anaphylaxis',
 *     module: 'anaphylaxis-module',     // for mechanism
 *     topic: 'Anaphylaxis',             // for coach
 *     coachId: 'anaphylaxis'            // for coach
 *   });
 *   window.RdxDrawer.close();
 *
 * The inner page is loaded in an iframe with ?embed=1 so it knows to
 * suppress its own nav, footer, and help-FAB.
 */

(function() {
  'use strict';

  if (window.RdxDrawer) return; // already loaded

  // ──────────────────────────────────────────────────────────────
  // Inject styles once
  // ──────────────────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById('rdx-drawer-style')) return;
    var s = document.createElement('style');
    s.id = 'rdx-drawer-style';
    s.textContent = [
      '#rdx-drawer-backdrop {',
      '  position: fixed; inset: 0; background: rgba(15, 23, 42, 0.55);',
      '  backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);',
      '  z-index: 9500; opacity: 0; transition: opacity .22s ease;',
      '  pointer-events: none;',
      '}',
      '#rdx-drawer-backdrop.open { opacity: 1; pointer-events: auto; }',
      '',
      '#rdx-drawer {',
      '  position: fixed; top: 0; right: 0; bottom: 0; width: 90%;',
      '  max-width: 540px; background: #fff; z-index: 9501;',
      '  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.18);',
      '  display: flex; flex-direction: column;',
      '  transform: translateX(100%); transition: transform .28s cubic-bezier(.2,.8,.3,1);',
      '  font-family: "DM Sans", -apple-system, sans-serif;',
      '}',
      '@media (min-width: 641px) { #rdx-drawer { width: 480px; } }',
      '@media (min-width: 900px) { #rdx-drawer { width: 540px; } }',
      '#rdx-drawer.open { transform: translateX(0); }',
      '',
      '#rdx-drawer-header {',
      '  flex-shrink: 0; display: flex; align-items: center; gap: 10px;',
      '  padding: 12px 14px; border-bottom: 1px solid #E2E8F0;',
      '  background: linear-gradient(180deg, #fff 0%, #F8FAFC 100%);',
      '}',
      '#rdx-drawer-header .rdx-drawer-icon {',
      '  flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px;',
      '  display: flex; align-items: center; justify-content: center;',
      '  font-size: 17px; background: #EBF5FB;',
      '}',
      '#rdx-drawer-header .rdx-drawer-titles { flex: 1; min-width: 0; }',
      '#rdx-drawer-header .rdx-drawer-eyebrow {',
      '  font-size: 10.5px; font-weight: 700; letter-spacing: .08em;',
      '  text-transform: uppercase; color: #64748B; line-height: 1;',
      '}',
      '#rdx-drawer-header .rdx-drawer-title {',
      '  font-size: 14px; font-weight: 700; color: #1E293B;',
      '  line-height: 1.3; margin-top: 3px;',
      '  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;',
      '}',
      '#rdx-drawer-header .rdx-drawer-actions {',
      '  display: flex; gap: 4px; flex-shrink: 0; align-items: center;',
      '}',
      '#rdx-drawer-header .rdx-drawer-btn {',
      '  background: none; border: none; cursor: pointer;',
      '  padding: 6px 10px; border-radius: 7px; font-family: inherit;',
      '  font-size: 12px; font-weight: 600; color: #64748B;',
      '  transition: background .15s, color .15s;',
      '}',
      '#rdx-drawer-header .rdx-drawer-btn:hover { background: #F1F5F9; color: #1E293B; }',
      '#rdx-drawer-header .rdx-drawer-close {',
      '  width: 32px; height: 32px; padding: 0;',
      '  display: flex; align-items: center; justify-content: center;',
      '  font-size: 18px; line-height: 1;',
      '}',
      '',
      '#rdx-drawer-body {',
      '  flex: 1; min-height: 0; overflow: hidden; position: relative;',
      '  background: #F0F3F7;',
      '}',
      '#rdx-drawer-iframe {',
      '  width: 100%; height: 100%; border: 0; display: block;',
      '  background: #fff;',
      '}',
      '#rdx-drawer-loading {',
      '  position: absolute; inset: 0; display: flex; align-items: center;',
      '  justify-content: center; flex-direction: column; gap: 12px;',
      '  background: #F0F3F7; color: #64748B;',
      '  font-size: 13px; transition: opacity .2s; pointer-events: none;',
      '}',
      '#rdx-drawer-loading.hide { opacity: 0; }',
      '#rdx-drawer-loading .rdx-spinner {',
      '  width: 28px; height: 28px; border: 3px solid #CBD5E1;',
      '  border-top-color: #2874A6; border-radius: 50%;',
      '  animation: rdxDrawerSpin .8s linear infinite;',
      '}',
      '@keyframes rdxDrawerSpin { to { transform: rotate(360deg); } }',
      '',
      'body.rdx-drawer-open { overflow: hidden; }'
    ].join('\n');
    document.head.appendChild(s);
  }

  // ──────────────────────────────────────────────────────────────
  // Build DOM (lazy)
  // ──────────────────────────────────────────────────────────────
  function buildDom() {
    if (document.getElementById('rdx-drawer')) return;

    var backdrop = document.createElement('div');
    backdrop.id = 'rdx-drawer-backdrop';
    backdrop.addEventListener('click', close);

    var drawer = document.createElement('aside');
    drawer.id = 'rdx-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-hidden', 'true');

    drawer.innerHTML = [
      '<header id="rdx-drawer-header">',
      '  <div class="rdx-drawer-icon" id="rdx-drawer-pillarIcon">🔬</div>',
      '  <div class="rdx-drawer-titles">',
      '    <div class="rdx-drawer-eyebrow" id="rdx-drawer-eyebrow">Reviewing</div>',
      '    <div class="rdx-drawer-title" id="rdx-drawer-title">—</div>',
      '  </div>',
      '  <div class="rdx-drawer-actions">',
      '    <button class="rdx-drawer-btn" id="rdx-drawer-fullpage" type="button" title="Open in full page">↗ Full page</button>',
      '    <button class="rdx-drawer-btn rdx-drawer-close" id="rdx-drawer-closeBtn" type="button" aria-label="Close drawer">✕</button>',
      '  </div>',
      '</header>',
      '<div id="rdx-drawer-body">',
      '  <div id="rdx-drawer-loading"><div class="rdx-spinner"></div><div>Loading…</div></div>',
      '  <iframe id="rdx-drawer-iframe" title="Pillar content" loading="lazy"></iframe>',
      '</div>'
    ].join('');

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    document.getElementById('rdx-drawer-closeBtn').addEventListener('click', close);
    document.getElementById('rdx-drawer-fullpage').addEventListener('click', openFullPage);

    document.getElementById('rdx-drawer-iframe').addEventListener('load', function() {
      var loading = document.getElementById('rdx-drawer-loading');
      if (loading) loading.classList.add('hide');
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) close();
    });
  }

  // ──────────────────────────────────────────────────────────────
  // State
  // ──────────────────────────────────────────────────────────────
  var currentConfig = null;

  // Build the iframe URL based on pillar config
  function buildSrc(cfg) {
    var src;
    if (cfg.pillar === 'mechanism') {
      src = '/mechanism/' + encodeURIComponent(cfg.module || 'index') + '.html?embed=1';
      if (cfg.caseId) src += '&case=' + encodeURIComponent(cfg.caseId);
      if (cfg.topicId) src += '&topic=' + encodeURIComponent(cfg.topicId);
      if (cfg.persona) src += '&persona=' + encodeURIComponent(cfg.persona);
      // ref=casedx so the in-module gap-banner reads "while working through a case"
      // rather than the default fallback. Suppressed in embed mode anyway, but
      // helps if the user clicks "Open in full page".
      src += '&ref=casedx';
    } else if (cfg.pillar === 'coach') {
      src = '/CoachDx/mentor-chat.html?embed=1&ref=drawer';
      if (cfg.topic)   src += '&topic='   + encodeURIComponent(cfg.topic);
      if (cfg.caseId)  src += '&caseId='  + encodeURIComponent(cfg.caseId);
    } else {
      src = '/mechanism/index.html?embed=1';
    }
    return src;
  }

  function buildFullPageUrl(cfg) {
    // Same as src but without ?embed=1, and without ref=drawer
    var url;
    if (cfg.pillar === 'mechanism') {
      url = '/mechanism/' + encodeURIComponent(cfg.module || 'index') + '.html';
      if (cfg.caseId) url += '?case=' + encodeURIComponent(cfg.caseId);
    } else if (cfg.pillar === 'coach') {
      url = '/CoachDx/mentor-chat.html';
      var qs = [];
      if (cfg.topic)  qs.push('topic='  + encodeURIComponent(cfg.topic));
      if (cfg.caseId) qs.push('caseId=' + encodeURIComponent(cfg.caseId));
      qs.push('ref=mechanism'); // so it auto-starts
      if (qs.length) url += '?' + qs.join('&');
    } else {
      url = '/mechanism/index.html';
    }
    return url;
  }

  function setHeader(cfg) {
    var icon = document.getElementById('rdx-drawer-pillarIcon');
    var eyebrow = document.getElementById('rdx-drawer-eyebrow');
    var title = document.getElementById('rdx-drawer-title');
    if (cfg.pillar === 'mechanism') {
      icon.textContent = '🔬';
      icon.style.background = '#F5F3FF';
      eyebrow.textContent = 'MechanismDx';
      title.textContent = cfg.title || 'Pathophysiology';
    } else if (cfg.pillar === 'coach') {
      icon.textContent = '🧠';
      icon.style.background = '#EBF5FB';
      eyebrow.textContent = 'CoachDx';
      title.textContent = cfg.title || 'Attending conversation';
    } else {
      icon.textContent = '🔬';
      eyebrow.textContent = 'Reviewing';
      title.textContent = cfg.title || '—';
    }
  }

  // ──────────────────────────────────────────────────────────────
  // Public API
  // ──────────────────────────────────────────────────────────────
  function open(cfg) {
    cfg = cfg || {};
    currentConfig = cfg;
    injectStyles();
    buildDom();
    setHeader(cfg);

    var iframe = document.getElementById('rdx-drawer-iframe');
    var loading = document.getElementById('rdx-drawer-loading');
    if (loading) loading.classList.remove('hide');

    var src = buildSrc(cfg);
    // Only update src if it changed (preserves drawer scroll/state across reopens
    // for the same content)
    if (iframe.getAttribute('data-src') !== src) {
      iframe.setAttribute('data-src', src);
      iframe.src = src;
    }

    // Trigger animation on next frame
    requestAnimationFrame(function() {
      document.getElementById('rdx-drawer-backdrop').classList.add('open');
      var d = document.getElementById('rdx-drawer');
      d.classList.add('open');
      d.setAttribute('aria-hidden', 'false');
      document.body.classList.add('rdx-drawer-open');
    });

    // Analytics
    try {
      if (typeof gtag === 'function') {
        gtag('event', 'drawer_open', {
          pillar: cfg.pillar,
          caseId: cfg.caseId || '',
          module: cfg.module || '',
          topic: cfg.topic || ''
        });
      }
    } catch(e) {}
  }

  function close() {
    var drawer = document.getElementById('rdx-drawer');
    var backdrop = document.getElementById('rdx-drawer-backdrop');
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (backdrop) backdrop.classList.remove('open');
    document.body.classList.remove('rdx-drawer-open');

    try {
      if (typeof gtag === 'function') {
        gtag('event', 'drawer_close', {
          pillar: (currentConfig && currentConfig.pillar) || '',
          caseId: (currentConfig && currentConfig.caseId) || ''
        });
      }
    } catch(e) {}
  }

  function openFullPage() {
    if (!currentConfig) return;
    var url = buildFullPageUrl(currentConfig);
    // Open in a new tab so the case behind the drawer remains intact and the
    // user can return without losing state.
    window.open(url, '_blank', 'noopener');
  }

  function isOpen() {
    var d = document.getElementById('rdx-drawer');
    return !!(d && d.classList.contains('open'));
  }

  window.RdxDrawer = {
    open: open,
    close: close,
    isOpen: isOpen
  };
})();
