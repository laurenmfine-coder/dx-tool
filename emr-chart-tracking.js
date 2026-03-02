/* emr-chart-tracking.js — Chart Interaction Tracking
 * Tracks which EMR tabs the learner opens, time spent on each section.
 */
(function() {
  'use strict';
  window.ChartTracking = {
    _log: [],
    track: function(section, action) {
      this._log.push({ section: section, action: action, ts: Date.now() });
    },
    getLog: function() { return this._log; },
    getSummary: function() {
      var counts = {};
      this._log.forEach(function(e) { counts[e.section] = (counts[e.section]||0) + 1; });
      return counts;
    }
  };
})();
