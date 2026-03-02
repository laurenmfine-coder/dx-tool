/* rdx-persist.js — LocalStorage persistence layer */
(function(){'use strict';
  window.RDX = window.RDX || {};
  RDX.persist = {
    get: function(key) { try { return JSON.parse(localStorage.getItem('rdx-' + key)); } catch(e) { return null; } },
    set: function(key, val) { try { localStorage.setItem('rdx-' + key, JSON.stringify(val)); } catch(e) {} },
    remove: function(key) { localStorage.removeItem('rdx-' + key); }
  };
})();
