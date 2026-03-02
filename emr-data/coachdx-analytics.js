/* emr-data/coachdx-analytics.js — CoachDx Analytics Integration
 * Tracks clinical reasoning patterns for analytics dashboard.
 */
var CoachDxAnalytics = window.CoachDxAnalytics || {
  track: function(event, data) {
    try {
      var log = JSON.parse(localStorage.getItem('rdx-analytics') || '[]');
      log.push({ event: event, data: data, ts: Date.now() });
      if (log.length > 500) log = log.slice(-500);
      localStorage.setItem('rdx-analytics', JSON.stringify(log));
    } catch(e) {}
  },
  getLog: function() {
    try { return JSON.parse(localStorage.getItem('rdx-analytics') || '[]'); } catch(e) { return []; }
  }
};
