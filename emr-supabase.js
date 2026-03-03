/* emr-supabase.js — ReasonDx Cloud Sync Stub
 * Provides EMRCloud interface for virtual-emr.html
 * In production, connects to Supabase for case progress persistence.
 * This stub provides a localStorage fallback when Supabase is unavailable.
 */
(function() {
  'use strict';

  var EMRCloud = {
    _ready: false,
    _uid: null,

    init: async function(uid) {
      this._uid = uid || 'anonymous';
      this._ready = true;
      return true;
    },

    save: async function(caseId, data) {
      if (!this._ready) return false;
      try {
        var key = 'rdx-emr-' + this._uid + '-' + caseId;
        localStorage.setItem(key, JSON.stringify({
          ...data,
          updatedAt: new Date().toISOString()
        }));
        return true;
      } catch(e) {
        console.warn('EMRCloud.save failed:', e);
        return false;
      }
    },

    load: async function(caseId) {
      if (!this._ready) return null;
      try {
        var key = 'rdx-emr-' + this._uid + '-' + caseId;
        var raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
      } catch(e) {
        return null;
      }
    },

    listCases: async function() {
      if (!this._ready) return [];
      var prefix = 'rdx-emr-' + this._uid + '-';
      var cases = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.startsWith(prefix)) {
          cases.push(k.replace(prefix, ''));
        }
      }
      return cases;
    },

    delete: async function(caseId) {
      if (!this._ready) return false;
      var key = 'rdx-emr-' + this._uid + '-' + caseId;
      localStorage.removeItem(key);
      return true;
    }
  };

  window.EMRCloud = EMRCloud;

  // Defensive wrapper: any call to an undefined EMRCloud method
  // (e.g. syncUser, syncSubmission, syncRole, etc.) becomes a no-op
  // instead of throwing "is not a function" and crashing the chart.
  window.EMRCloud = new Proxy(EMRCloud, {
    get: function(target, prop) {
      if (prop in target) return target[prop];
      // Return a no-op function for any missing method
      return function() {
        console.debug('EMRCloud.' + String(prop) + ' not implemented (no-op)');
      };
    }
  });

})();
