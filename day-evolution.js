/* emr-data/day-evolution.js — Patient Day Evolution
 * Manages how patient status evolves over the course of a hospital day.
 */
var DayEvolution = window.DayEvolution || {
  getPhase: function(hour) {
    if (hour < 7) return 'overnight';
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    if (hour < 21) return 'evening';
    return 'overnight';
  },
  evolve: function(caseData, hours) { return caseData; }
};
