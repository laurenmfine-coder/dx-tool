/* dx-recommendations.js — Learning path recommendations engine */
(function() {
  window.DxRecommendations = {
    getSuggestions: function(profile) {
      return [
        { type: 'module', title: 'Review focus areas', priority: 'high' },
        { type: 'case', title: 'Practice clinical reasoning', priority: 'medium' }
      ];
    },
    getWeakAreas: function() {
      if (!window.DxProgress) return [];
      const data = DxProgress.get();
      return Object.entries(data.scores || {})
        .filter(([_, s]) => (typeof s === 'object' ? s.score : s) < 60)
        .map(([id]) => id);
    }
  };
  console.log('[DxRecommendations] Engine loaded');
})();
