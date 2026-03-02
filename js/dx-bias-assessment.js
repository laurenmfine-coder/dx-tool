/* dx-bias-assessment.js — Cognitive Bias Assessment
 * Detects potential cognitive biases in learner reasoning.
 */
(function() {
  'use strict';
  window.DxBiasAssessment = {
    biases: ['anchoring','premature_closure','availability','confirmation','framing','base_rate_neglect'],
    assess: function(reasoningPath) {
      return { detected: [], score: 0, feedback: '' };
    },
    getTeaching: function(biasType) {
      var teachings = {
        anchoring: 'Anchoring bias: fixating on an initial impression without adjusting for new data.',
        premature_closure: 'Premature closure: accepting a diagnosis before fully verifying it.',
        availability: 'Availability bias: overweighting diagnoses that come easily to mind.',
        confirmation: 'Confirmation bias: seeking only evidence that supports your hypothesis.',
        framing: 'Framing effect: being influenced by how information is presented.',
        base_rate_neglect: 'Base rate neglect: ignoring prevalence when estimating probability.'
      };
      return teachings[biasType] || '';
    }
  };
})();
