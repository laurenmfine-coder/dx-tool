/* js/rdx-stats.js — Dynamic platform stats
 * Reads EMR_MANIFEST (if loaded) and computes live counts.
 * Any element with data-rdx-stat="cases|specialties|tools" gets auto-populated.
 *
 * Usage:
 *   <span data-rdx-stat="cases">–</span>
 *   <span data-rdx-stat="specialties">–</span>
 *   <span data-rdx-stat="tools">–</span>
 *   <span data-rdx-stat="settings">–</span>
 *
 * Include AFTER manifest.js (or it will retry until manifest loads).
 */
(function() {
  'use strict';

  // ── Hardcoded tool registry (update when adding/removing tools) ──
  // Each entry = one user-facing learning tool on the platform
  var TOOLS = [
    { id: 'ed',           label: 'Emergency Department',  href: 'virtual-emr.html?setting=ed' },
    { id: 'sim',          label: 'Simulation Lab',         href: 'simroomdx.html' },
    { id: 'night-float',  label: 'Night Float',            href: 'night-float.html' },
    { id: 'admissions',   label: 'Admissions',             href: 'admissions.html' },
    { id: 'consult',      label: 'Consult Service',        href: 'consult-callback.html' },
    { id: 'emr',          label: 'Virtual EMR',            href: 'virtual-emr.html?setting=ed' },
    { id: 'procedure',    label: 'Procedure Lab',          href: 'procedure-lab.html' },
    { id: 'counseling',   label: 'Patient Counseling',     href: 'counseling-scenarios.html' },
    { id: 'milestones',   label: 'Milestone Tracker',      href: 'milestone-tracker.html' },
    { id: 'analytics',    label: 'Learning Analytics',     href: 'learning-analytics.html' },
    { id: 'crt',          label: 'Clinical Reasoning',     href: 'consult-callback.html' },
    { id: 'mechanism',    label: 'MechanismDx',            href: 'pathway.html' },
    { id: 'ecg',          label: 'ECG Trainer',            href: 'ecg-trainer.html' }
  ];

  // Clinical settings in the EMR
  var SETTINGS = ['Emergency Dept', 'Inpatient Floor', 'Inpatient Consult', 'ICU', 'Outpatient Clinic', 'Post-Discharge'];

  function _computeStats() {
    var stats = {
      cases: 0,
      specialties: 0,
      tools: TOOLS.length,
      settings: SETTINGS.length
    };

    // Count cases and specialties from manifest
    if (window.EMR_MANIFEST && Array.isArray(EMR_MANIFEST)) {
      var cats = {};
      EMR_MANIFEST.forEach(function(group) {
        if (group.cases && Array.isArray(group.cases)) {
          group.cases.forEach(function(c) {
            stats.cases++;
            if (c.category) cats[c.category] = true;
          });
        }
      });
      stats.specialties = Object.keys(cats).length;
    }

    return stats;
  }

  function _applyStats() {
    var stats = _computeStats();
    var els = document.querySelectorAll('[data-rdx-stat]');
    els.forEach(function(el) {
      var key = el.getAttribute('data-rdx-stat');
      if (stats[key] !== undefined) {
        // Format: add "+" suffix for specialties if > 20
        var val = stats[key];
        if (key === 'specialties' && val >= 20) {
          el.textContent = val;
        } else {
          el.textContent = val;
        }
      }
    });
  }

  // Try to apply immediately, retry if manifest hasn't loaded yet
  function _init() {
    if (window.EMR_MANIFEST && EMR_MANIFEST.length > 0) {
      _applyStats();
    } else {
      // Retry up to 20 times (5 seconds)
      var attempts = 0;
      var timer = setInterval(function() {
        attempts++;
        if (window.EMR_MANIFEST && EMR_MANIFEST.length > 0) {
          clearInterval(timer);
          _applyStats();
        } else if (attempts >= 20) {
          clearInterval(timer);
          // Fallback: still apply what we can (tools/settings are known)
          _applyStats();
        }
      }, 250);
    }
  }

  // Expose for manual refresh
  window.RDXStats = {
    compute: _computeStats,
    apply: _applyStats,
    TOOLS: TOOLS,
    SETTINGS: SETTINGS
  };

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }
})();
