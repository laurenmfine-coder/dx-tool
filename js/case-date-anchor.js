/* js/case-date-anchor.js — Anchor case dates to the learner's session.
 *
 * Problem: case data files have hardcoded dates (e.g. "11/14/2024") that
 * grow stale and break immersion when a learner sees "labs from 16 months ago"
 * in a case meant to be "today."
 *
 * Solution: on first case load, capture the learner's clock as the case's
 * "today." Compute an offset from the case's most recent visit date to that
 * "today," then slide every other date by the same offset. Persist per
 * (user, case) so dates stay stable across return visits.
 *
 * Public API:
 *   CaseDateAnchor.init()                      — call once after EMR_DATA loads
 *   CaseDateAnchor.shift(originalDateStr)      — anchored absolute date string (M/D/YYYY)
 *   CaseDateAnchor.relative(originalDateStr)   — "today", "yesterday", "3 days ago", "2 months ago"
 *   CaseDateAnchor.both(originalDateStr)       — "Today (4/27/2026)" or "3 days ago (4/24/2026)"
 *   CaseDateAnchor.diffDays(a,b)               — integer day delta from a to b (b-a)
 *   CaseDateAnchor.getMostRecentVisitDate()    — Date object for the case's anchor visit
 *   CaseDateAnchor.getSessionDate()            — Date object for the learner's "today"
 */
(function() {
  'use strict';

  function _parseDate(s) {
    if (!s) return null;
    if (s instanceof Date) return s;
    var str = String(s).trim();
    // Try MM/DD/YYYY or M/D/YYYY
    var m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (m) return new Date(+m[3], +m[1] - 1, +m[2]);
    // Try MM/YYYY (assume mid-month)
    m = str.match(/^(\d{1,2})\/(\d{4})$/);
    if (m) return new Date(+m[2], +m[1] - 1, 15);
    // Try YYYY-MM-DD
    m = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
    // Fallback to native parsing
    var d = new Date(str);
    return isNaN(d.getTime()) ? null : d;
  }

  function _formatDate(d, originalStr) {
    if (!d) return originalStr || '';
    // Match the original format
    if (originalStr && /^\d{1,2}\/\d{4}$/.test(originalStr.trim())) {
      // MM/YYYY format
      return (d.getMonth() + 1) + '/' + d.getFullYear();
    }
    // Default: M/D/YYYY
    return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
  }

  function _findMostRecentVisitDate() {
    var dates = [];
    if (window.VISITS && Array.isArray(window.VISITS)) {
      window.VISITS.forEach(function(v) {
        var d = _parseDate(v && v.date);
        if (d) dates.push(d);
      });
    }
    // Fallback: look in vitals — the most recent vital recording is usually "now"
    if (!dates.length && window.VITALS && Array.isArray(window.VITALS)) {
      window.VITALS.forEach(function(v) {
        var d = _parseDate(v && v.date);
        if (d) dates.push(d);
      });
    }
    if (!dates.length) return null;
    return new Date(Math.max.apply(null, dates));
  }

  function _getStorageKey() {
    var user = (window.S && window.S.currentUser && window.S.currentUser.username) || 'anon';
    var caseId = window.CASE_ID || 'no-case';
    return 'rdx-case-anchor:' + user + ':' + caseId;
  }

  function _loadAnchor() {
    try {
      var raw = localStorage.getItem(_getStorageKey());
      if (!raw) return null;
      var obj = JSON.parse(raw);
      if (!obj || !obj.sessionDate || typeof obj.offsetMs !== 'number') return null;
      return { sessionDate: new Date(obj.sessionDate), offsetMs: obj.offsetMs };
    } catch (e) { return null; }
  }

  function _saveAnchor(sessionDate, offsetMs) {
    try {
      localStorage.setItem(_getStorageKey(), JSON.stringify({
        sessionDate: sessionDate.toISOString(),
        offsetMs: offsetMs
      }));
    } catch (e) {}
  }

  var _state = null; // { sessionDate, offsetMs, mostRecentVisit }

  window.CaseDateAnchor = {

    init: function() {
      // Find the case's "anchor" date (most recent visit). If none, do nothing.
      var anchorDate = _findMostRecentVisitDate();
      if (!anchorDate) {
        _state = null;
        return false;
      }

      // Try to restore prior session — keeps dates stable across returns
      var prior = _loadAnchor();
      var sessionDate, offsetMs;
      if (prior) {
        sessionDate = prior.sessionDate;
        offsetMs = prior.offsetMs;
      } else {
        // First time: anchor "today" to right now
        sessionDate = new Date();
        offsetMs = sessionDate.getTime() - anchorDate.getTime();
        _saveAnchor(sessionDate, offsetMs);
      }

      _state = {
        sessionDate: sessionDate,
        offsetMs: offsetMs,
        mostRecentVisit: anchorDate
      };
      return true;
    },

    shift: function(originalDateStr) {
      if (!_state || !originalDateStr) return originalDateStr || '';
      var d = _parseDate(originalDateStr);
      if (!d) return originalDateStr;
      var shifted = new Date(d.getTime() + _state.offsetMs);
      return _formatDate(shifted, originalDateStr);
    },

    relative: function(originalDateStr) {
      if (!_state || !originalDateStr) return originalDateStr || '';
      var d = _parseDate(originalDateStr);
      if (!d) return originalDateStr;
      var shifted = new Date(d.getTime() + _state.offsetMs);
      var today = _state.sessionDate;
      // Compare at day granularity
      var dayMs = 24 * 60 * 60 * 1000;
      var deltaDays = Math.round((today.getTime() - shifted.getTime()) / dayMs);

      if (deltaDays === 0) return 'today';
      if (deltaDays === 1) return 'yesterday';
      if (deltaDays === -1) return 'tomorrow';
      if (deltaDays > 1 && deltaDays < 7) return deltaDays + ' days ago';
      if (deltaDays > 6 && deltaDays < 14) return 'last week';
      if (deltaDays > 13 && deltaDays < 31) return Math.round(deltaDays / 7) + ' weeks ago';
      if (deltaDays > 30 && deltaDays < 365) {
        var months = Math.round(deltaDays / 30);
        return months + ' month' + (months === 1 ? '' : 's') + ' ago';
      }
      if (deltaDays >= 365) {
        var years = Math.round(deltaDays / 365);
        return years + ' year' + (years === 1 ? '' : 's') + ' ago';
      }
      // Future
      var ad = Math.abs(deltaDays);
      if (ad < 7) return 'in ' + ad + ' days';
      if (ad < 31) return 'in ' + Math.round(ad / 7) + ' weeks';
      return 'in ' + Math.round(ad / 30) + ' months';
    },

    both: function(originalDateStr) {
      if (!_state || !originalDateStr) return originalDateStr || '';
      var rel = this.relative(originalDateStr);
      var abs = this.shift(originalDateStr);
      // Capitalize first letter of relative form when it leads
      var capRel = rel.charAt(0).toUpperCase() + rel.slice(1);
      return capRel + ' (' + abs + ')';
    },

    diffDays: function(dateA, dateB) {
      var a = _parseDate(dateA), b = _parseDate(dateB);
      if (!a || !b) return null;
      return Math.round((b.getTime() - a.getTime()) / (24 * 60 * 60 * 1000));
    },

    getMostRecentVisitDate: function() { return _state ? _state.mostRecentVisit : null; },
    getSessionDate: function() { return _state ? _state.sessionDate : null; },

    // Test/debug only — clears the persisted anchor for the current case
    _reset: function() {
      try { localStorage.removeItem(_getStorageKey()); } catch (e) {}
      _state = null;
    },

    isReady: function() { return _state !== null; }
  };
})();
