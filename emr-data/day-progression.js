/* emr-data/day-progression.js — Day/Time Progression Engine
 * Manages in-case time progression for virtual EMR encounters.
 */
var DayProgression = window.DayProgression || {
  currentHour: 8,
  currentDay: 1,
  advance: function(hours) { this.currentHour += hours; if(this.currentHour >= 24) { this.currentDay++; this.currentHour -= 24; } },
  getTimeString: function() { var h = this.currentHour % 12 || 12; var ampm = this.currentHour < 12 ? 'AM' : 'PM'; return h + ':00 ' + ampm; },
  reset: function() { this.currentHour = 8; this.currentDay = 1; }
};
