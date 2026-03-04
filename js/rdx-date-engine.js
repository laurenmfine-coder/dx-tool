/* js/rdx-date-engine.js — Dynamic Date Engine for ReasonDx
 * All chart dates are calculated relative to TODAY's real date.
 * No hardcoded dates anywhere — encounters stay current.
 *
 * Usage:
 *   DateEngine.today()                → '03/03/2026' (MM/DD/YYYY)
 *   DateEngine.daysAgo(2)             → '03/01/2026'
 *   DateEngine.daysAgo(2, 'long')     → 'March 1, 2026'
 *   DateEngine.daysAgo(2, 'short')    → 'Mar 1'
 *   DateEngine.daysAgo(2, 'iso')      → '2026-03-01'
 *   DateEngine.daysAgo(2, 'emr')      → '03/01/2026 14:32' (with random time)
 *   DateEngine.timeToday()            → '14:32' (random plausible clinical time)
 *   DateEngine.encounterDate(offset, format) → date string for a specific encounter
 *   DateEngine.relativeLabel(offset)  → 'Today' | 'Yesterday' | '3 days ago' | 'Mar 1'
 */
(function() {
  'use strict';

  var MONTHS_LONG = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  function _pad(n) { return n < 10 ? '0' + n : '' + n; }

  function _dateOffset(daysBack) {
    var d = new Date();
    d.setDate(d.getDate() - (daysBack || 0));
    d.setHours(0, 0, 0, 0);
    return d;
  }

  // Seeded-ish random time based on offset (so same offset = same time in a session)
  function _clinicalTime(offset) {
    // Generate plausible clinical times: 6am-10pm
    var seed = (offset || 0) * 137 + 42;
    var hour = 6 + (seed % 16);      // 6-21
    var minute = (seed * 7) % 60;
    return _pad(hour) + ':' + _pad(minute);
  }

  function _format(d, fmt, offset) {
    var m = d.getMonth(), day = d.getDate(), y = d.getFullYear();
    switch (fmt) {
      case 'long':
        return MONTHS_LONG[m] + ' ' + day + ', ' + y;
      case 'short':
        return MONTHS_SHORT[m] + ' ' + day;
      case 'iso':
        return y + '-' + _pad(m + 1) + '-' + _pad(day);
      case 'emr':
        return _pad(m + 1) + '/' + _pad(day) + '/' + y + ' ' + _clinicalTime(offset);
      case 'day':
        return DAYS[d.getDay()];
      case 'narrative':
        // "Tuesday, March 3, 2026"
        return DAYS[d.getDay()] + ', ' + MONTHS_LONG[m] + ' ' + day + ', ' + y;
      default:
        // MM/DD/YYYY
        return _pad(m + 1) + '/' + _pad(day) + '/' + y;
    }
  }

  window.DateEngine = {
    today: function(fmt) {
      return _format(new Date(), fmt || 'default', 0);
    },

    daysAgo: function(n, fmt) {
      return _format(_dateOffset(n), fmt || 'default', n);
    },

    // Get a Date object for n days ago
    dateObj: function(n) {
      return _dateOffset(n || 0);
    },

    encounterDate: function(offset, fmt) {
      return _format(_dateOffset(offset), fmt || 'emr', offset);
    },

    timeToday: function() {
      return _clinicalTime(0);
    },

    relativeLabel: function(daysBack) {
      if (daysBack === 0) return 'Today';
      if (daysBack === 1) return 'Yesterday';
      if (daysBack <= 6) return daysBack + ' days ago';
      if (daysBack <= 13) return 'Last ' + DAYS[_dateOffset(daysBack).getDay()];
      return _format(_dateOffset(daysBack), 'short', daysBack);
    },

    // Generate a clinical timestamp for chart notes
    // offset = days ago, period = 'morning'|'afternoon'|'evening'|'night'
    chartTimestamp: function(offset, period) {
      var d = _dateOffset(offset);
      var hour;
      switch (period) {
        case 'morning':   hour = 7 + Math.floor((offset * 3) % 4); break;   // 7-10
        case 'afternoon': hour = 12 + Math.floor((offset * 5) % 5); break;  // 12-16
        case 'evening':   hour = 17 + Math.floor((offset * 2) % 4); break;  // 17-20
        case 'night':     hour = 21 + Math.floor((offset * 7) % 3); break;  // 21-23
        default:          hour = 8 + Math.floor((offset * 137) % 12); break; // 8-19
      }
      var minute = ((offset || 1) * 17) % 60;
      return _pad(d.getMonth() + 1) + '/' + _pad(d.getDate()) + '/' + d.getFullYear() + ' ' + _pad(hour) + ':' + _pad(minute);
    }
  };
})();
