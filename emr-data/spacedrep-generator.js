/* emr-data/spacedrep-generator.js — Spaced Repetition Card Generator
 * Generates review cards from completed cases for spaced repetition.
 */
var SpacedRepGenerator = window.SpacedRepGenerator || {
  generateCards: function(caseData) {
    return [];
  },
  getNextReview: function(cardId) {
    return null;
  },
  recordReview: function(cardId, quality) {
    // SM-2 algorithm stub
  }
};
