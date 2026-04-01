/* emr-caseframe.js — CaseFrame Data Layer
 * Thin adapter that delegates to window.CaseFrame (caseframe-engine.js).
 * Provides structured case frame data for the virtual EMR.
 * Kept for backward compatibility.
 */
(function () {
  'use strict';
  var _currentCaseId = null;

  window.EMRCaseFrame = {
    load: function (caseId) {
      _currentCaseId = caseId;
      // Auto-register with CaseFrame engine if CRT_DATA is available
      if (window.CaseFrame && window.CRT_DATA && window.CRT_DATA[caseId]) {
        window.CaseFrame.autoRegister(caseId, window.CRT_DATA[caseId]);
        return window.CRT_DATA[caseId];
      }
      return null;
    },
    getFrame: function () {
      if (!_currentCaseId || !window.CRT_DATA) return {};
      return window.CRT_DATA[_currentCaseId] || {};
    },
    updateFrame: function (key, value) {
      // No-op: CRT cases are read-only reference data
    }
  };
})();
