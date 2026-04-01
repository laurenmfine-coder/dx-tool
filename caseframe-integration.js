/* caseframe-integration.js — CaseFrame UI Integration
 * Thin adapter that delegates to window.CaseFrame (caseframe-engine.js).
 * Kept for backward compatibility with any code that references
 * CaseFrameIntegration directly.
 */
(function () {
  'use strict';
  window.CaseFrameIntegration = {
    init: function (containerId) {
      // Re-render the CaseFrame summary into a container if provided
      if (containerId && window.CaseFrame) {
        var el = document.getElementById(containerId);
        if (el) el.innerHTML = '<div style="color:#64748B;font-size:12px">CaseFrame loaded.</div>';
      }
    },
    render: function (frame) {
      // frame: { caseId, noteFields, extras }
      if (!frame || !window.CaseFrame) return '';
      var result = window.CaseFrame.score(frame.caseId || '', frame.noteFields || {}, frame.extras || {});
      return window.CaseFrame.renderSummary(result);
    },
    onUpdate: function (callback) {
      // No-op: updates happen synchronously through score() calls
      if (typeof callback === 'function') callback();
    }
  };
})();
