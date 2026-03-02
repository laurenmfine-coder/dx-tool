/* dx-plan-gate.js — Plan/Subscription Gate
 * Controls access to Pro features.
 * NOTE: All features unlocked during free launch period.
 * To re-enable gating, change isPro() to check localStorage plan field.
 */
(function() {
  'use strict';
  window.DxPlanGate = {
    isPro: function() {
      // Free launch: all features unlocked
      return true;
    },
    gate: function(feature, callback) {
      callback();
    },
    showUpgradePrompt: function(feature) {},
    showUpgradeModal: function(opts) {},
    getSimRoomFeatures: function() {
      return { plan: 'pro', maxCharacters: 6, allowedCharacters: ['patient','attending','nurse','family','consultant','pharmacist'], multiplayer: false, voice: true, freeCases: [], allCases: true };
    }
  };
})();
