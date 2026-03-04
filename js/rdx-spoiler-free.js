/* js/rdx-spoiler-free.js — Spoiler-Free Mode for Clinical Reasoning Tools
 * Hides diagnoses by default across simulation tools so learners reason
 * toward the answer rather than seeing it upfront.
 *
 * Usage:
 *   SpoilerFree.isHidden()        → true/false
 *   SpoilerFree.toggle()          → flips and re-renders
 *   SpoilerFree.renderToggle()    → returns HTML for the toggle button
 *   SpoilerFree.mask(diagnosis, fallback)  → returns masked or real text
 *   SpoilerFree.earnReveal(caseId) → marks a case as "earned" (learner got dx right)
 *   SpoilerFree.isEarned(caseId)  → true if learner earned the reveal
 *
 * localStorage key: 'rdx-spoiler-free' = 'hidden' | 'visible'
 * localStorage key: 'rdx-dx-earned' = JSON { caseId: true, ... }
 */
(function() {
  'use strict';

  var PREF_KEY = 'rdx-spoiler-free';
  var EARNED_KEY = 'rdx-dx-earned';
  var _callbacks = [];

  function _getPref() {
    try { return localStorage.getItem(PREF_KEY) || 'hidden'; } catch(e) { return 'hidden'; }
  }

  function _setPref(val) {
    try { localStorage.setItem(PREF_KEY, val); } catch(e) {}
  }

  function _getEarned() {
    try { return JSON.parse(localStorage.getItem(EARNED_KEY) || '{}'); } catch(e) { return {}; }
  }

  window.SpoilerFree = {

    isHidden: function() {
      return _getPref() === 'hidden';
    },

    toggle: function() {
      var now = _getPref();
      _setPref(now === 'hidden' ? 'visible' : 'hidden');
      // Update toggle button if present
      var btn = document.getElementById('sf-toggle-btn');
      if (btn) btn.outerHTML = SpoilerFree.renderToggle();
      // Fire callbacks
      _callbacks.forEach(function(fn) { try { fn(); } catch(e) {} });
    },

    // Register a re-render callback
    onToggle: function(fn) {
      _callbacks.push(fn);
    },

    // Returns HTML string for the toggle button
    renderToggle: function() {
      var hidden = SpoilerFree.isHidden();
      var label = hidden
        ? '\uD83D\uDE48 Diagnoses Hidden \u2014 Tap to Reveal'
        : '\uD83D\uDC41\uFE0F Diagnoses Visible \u2014 Tap to Hide';
      var style = hidden
        ? 'background:#1E293B;color:#F59E0B;border:1px solid #F59E0B40'
        : 'background:#EBF5FB;color:#2874A6;border:1px solid #2874A6';
      return '<button type="button" id="sf-toggle-btn" onclick="SpoilerFree.toggle()" style="display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;font-size:12px;font-weight:600;font-family:inherit;cursor:pointer;transition:all .2s;' + style + '">' + label + '</button>';
    },

    // Mask a diagnosis string. If hidden and not earned, returns fallback.
    // If earned or visible, returns the real diagnosis.
    mask: function(diagnosis, fallback, caseId) {
      if (!SpoilerFree.isHidden()) return diagnosis || fallback || '';
      if (caseId && SpoilerFree.isEarned(caseId)) return diagnosis || fallback || '';
      return fallback || 'Clinical Case';
    },

    // Mark a case as earned (learner confirmed correct dx)
    earnReveal: function(caseId) {
      if (!caseId) return;
      var earned = _getEarned();
      earned[caseId] = true;
      try { localStorage.setItem(EARNED_KEY, JSON.stringify(earned)); } catch(e) {}
    },

    isEarned: function(caseId) {
      if (!caseId) return false;
      return _getEarned()[caseId] === true;
    },

    // Reset all earned reveals
    resetEarned: function() {
      try { localStorage.removeItem(EARNED_KEY); } catch(e) {}
    }
  };

})();
