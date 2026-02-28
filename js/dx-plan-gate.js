/** dx-plan-gate.js — Plan tier feature gating stub.
 *  Checks user subscription tier and gates premium features accordingly.
 *  Currently a no-op stub — all features unlocked. */
(function(){
  'use strict';
  window.RDX_PLAN = window.RDX_PLAN || { tier: 'pro', gates: {} };
  window.checkPlanAccess = function(feature){ return true; };
  window.showUpgradeModal = function(feature){
    console.log('[Plan Gate] Feature requires upgrade:', feature);
  };
})();
