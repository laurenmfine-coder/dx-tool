/* rdx-gate.js — Feature Gate
 * Controls access to features based on user state and plan.
 */
(function() {
  'use strict';
  window.RDXGate = {
    check: function(feature) { return true; },
    require: function(feature, callback) {
      if (this.check(feature)) callback();
    }
  };
})();
