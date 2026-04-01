/* dx-case-nav.js — Case navigation breadcrumb bar
 * Auto-injects a slim top navigation bar showing the parent context
 * and a back link. Called by ECG quiz/viewer pages.
 * Usage: DxCaseNav.init({ parentPage: '../training.html', parentName: 'Training' })
 */
(function () {
  'use strict';

  window.DxCaseNav = {
    init: function (config) {
      config = config || {};
      var parentPage = config.parentPage || '/browse.html';
      var parentName = config.parentName || 'Back';
      var currentName = config.currentName || document.title.split('|')[0].trim() || 'Current';

      // Inject styles
      var style = document.createElement('style');
      style.textContent = [
        '.dx-case-nav-bar{position:sticky;top:0;z-index:200;background:#fff;',
        'border-bottom:1px solid #E2E8F0;padding:8px 20px;display:flex;',
        'align-items:center;gap:8px;font-family:-apple-system,"DM Sans",sans-serif;',
        'font-size:13px;color:#64748B}',
        '.dx-case-nav-back{display:inline-flex;align-items:center;gap:5px;',
        'color:#2874A6;text-decoration:none;font-weight:600}',
        '.dx-case-nav-back:hover{text-decoration:underline}',
        '.dx-case-nav-sep{color:#CBD5E1}',
        '.dx-case-nav-current{color:#1E293B;font-weight:500}'
      ].join('');
      document.head.appendChild(style);

      // Build bar
      var bar = document.createElement('div');
      bar.className = 'dx-case-nav-bar';
      bar.innerHTML =
        '<a href="' + parentPage + '" class="dx-case-nav-back">← ' + parentName + '</a>' +
        '<span class="dx-case-nav-sep">/</span>' +
        '<span class="dx-case-nav-current">' + currentName + '</span>';

      // Prepend to body (before any existing content)
      document.body.insertBefore(bar, document.body.firstChild);
    }
  };

})();
