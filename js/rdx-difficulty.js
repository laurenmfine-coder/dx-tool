/* js/rdx-difficulty.js — Global Difficulty Level System
 * Reads from sessionStorage and URL params. Exposes window.RDX_DIFFICULTY.
 * Values: 'guided' | 'standard' | 'advanced'
 * Default: 'standard'
 */
(function() {
  'use strict';
  var STORAGE_KEY = 'rdx-difficulty';
  var VALID = ['guided', 'standard', 'advanced'];
  var DEFAULT = 'standard';

  // Read from URL first, then sessionStorage
  var params = new URLSearchParams(window.location.search);
  var fromUrl = params.get('difficulty');
  var fromStorage = null;
  try { fromStorage = sessionStorage.getItem(STORAGE_KEY); } catch(e) {}

  var level = DEFAULT;
  if (fromUrl && VALID.indexOf(fromUrl) >= 0) {
    level = fromUrl;
  } else if (fromStorage && VALID.indexOf(fromStorage) >= 0) {
    level = fromStorage;
  }

  // Persist
  try { sessionStorage.setItem(STORAGE_KEY, level); } catch(e) {}

  // Expose globally
  window.RDX_DIFFICULTY = level;

  // Helper to append difficulty to any URL
  window.RDX_DIFFICULTY_URL = function(url) {
    if (!url) return url;
    var sep = url.indexOf('?') >= 0 ? '&' : '?';
    return url + sep + 'difficulty=' + level;
  };

  // Helper: get config for current difficulty
  window.RDX_DIFF_CONFIG = {
    guided: {
      label: 'Guided',
      icon: '\u{1F331}',
      color: '#059669',
      tagline: 'M1\u2013M2 / Early Learner',
      description: 'Structured history, flagged abnormals, teaching-mode coaching, DDx hints, templates pre-filled.',
      coachPersona: 'teaching',
      flagAbnormals: true,
      showRefRanges: true,
      highlightFindings: true,
      ddxHints: true,
      sbarTemplate: true,
      mechanismInline: true,
      nightFloatPatients: 2,
      timePressure: false
    },
    standard: {
      label: 'Standard',
      icon: '\u{1F3AF}',
      color: '#2874A6',
      tagline: 'M3\u2013M4 / Clerkship',
      description: 'Realistic history, standard EMR view, Socratic coaching, unguided DDx, blank SBAR.',
      coachPersona: 'socratic',
      flagAbnormals: false,
      showRefRanges: true,
      highlightFindings: false,
      ddxHints: false,
      sbarTemplate: false,
      mechanismInline: false,
      nightFloatPatients: 4,
      timePressure: false
    },
    advanced: {
      label: 'Advanced',
      icon: '\u{1F525}',
      color: '#DC2626',
      tagline: 'Sub-I / Intern',
      description: 'Poor historian, raw lab values, pimp-style coaching, time pressure, competing priorities.',
      coachPersona: 'pimp',
      flagAbnormals: false,
      showRefRanges: false,
      highlightFindings: false,
      ddxHints: false,
      sbarTemplate: false,
      mechanismInline: false,
      nightFloatPatients: 8,
      timePressure: true
    }
  };

  // Get current config
  window.RDX_DIFF = window.RDX_DIFF_CONFIG[level] || window.RDX_DIFF_CONFIG.standard;

})();
