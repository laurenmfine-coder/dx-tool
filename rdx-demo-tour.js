/* rdx-demo-tour.js — Interactive Demo Tour
 * Provides guided walkthrough tooltips for first-time users.
 * Referenced by nearly all pages for onboarding.
 */
(function() {
  'use strict';
  window.RDXTour = {
    _steps: [],
    _current: 0,
    _active: false,

    register: function(pageId, steps) {
      this._steps = steps || [];
    },

    start: function() {
      if (!this._steps.length) return;
      var seen = localStorage.getItem('rdx-tour-' + window.location.pathname);
      if (seen) return;
      this._active = true;
      this._current = 0;
      this._show();
    },

    _show: function() {
      if (this._current >= this._steps.length) {
        this.end();
        return;
      }
      // Tour tooltip rendering would go here
    },

    next: function() {
      this._current++;
      this._show();
    },

    end: function() {
      this._active = false;
      localStorage.setItem('rdx-tour-' + window.location.pathname, '1');
    },

    reset: function() {
      localStorage.removeItem('rdx-tour-' + window.location.pathname);
    }
  };
})();
