/* dx-plan-gate.js — Plan/Subscription Gate
 * Checks if user has access to Pro features.
 */
(function() {
  'use strict';
  window.DxPlanGate = {
    isPro: function() {
      try {
        var user = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
        return user.plan === 'pro';
      } catch(e) { return false; }
    },
    gate: function(feature, callback) {
      if (this.isPro()) { callback(); }
      else { this.showUpgradePrompt(feature); }
    },
    showUpgradePrompt: function(feature) {
      // Show upgrade modal
    }
  };
})();
