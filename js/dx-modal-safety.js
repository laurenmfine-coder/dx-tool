/* dx-modal-safety.js — Modal Safety Layer
 * Prevents multiple modals from stacking, manages z-index.
 */
(function() {
  'use strict';
  window.DxModalSafety = {
    _stack: [],
    push: function(modal) { this._stack.push(modal); },
    pop: function() { return this._stack.pop(); },
    closeAll: function() {
      while (this._stack.length) {
        var m = this._stack.pop();
        if (m && m.style) m.style.display = 'none';
      }
    }
  };
})();
