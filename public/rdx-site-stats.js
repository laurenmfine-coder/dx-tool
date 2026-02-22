/**
 * ReasonDx — Centralized Site Stats
 * ===================================
 * Single source of truth for all content counts displayed across the site.
 * 
 * HOW TO UPDATE:
 *   Edit the numbers below whenever content is added/removed.
 *   Every page that loads this script will auto-update.
 *
 * HOW TO USE IN HTML:
 *   <span data-rdx-stat="topics"></span>         → "297"
 *   <span data-rdx-stat="adventures"></span>     → "230+"
 *   <span data-rdx-stat="mcqs"></span>           → "2,900+"
 */
(function () {
    'use strict';

    const STATS = {
        // ─── Core Content Counts (raw) ───────────────
        topics:          297,
        specialties:     28,
        adventures:      239,
        deepDives:       211,
        mcqs:            2994,
        boardPrepQs:     615,
        calculators:     4,
        trainerCases:    323,

        // ─── Formatted Display Strings ───────────────
        // Marketing-safe rounded numbers for UI
        get mcqsDisplay()           { return '2,900+'; },
        get boardPrepQsDisplay()    { return '600+'; },
        get adventuresDisplay()     { return '230+'; },
        get topicsDisplay()         { return '297'; },
        get deepDivesDisplay()      { return '211'; },
        get modulesDisplay()        { return '297'; },
        get casesDisplay()          { return '230+'; },
        get trainerCasesDisplay()   { return '323'; },
        get specialtiesDisplay()    { return '28'; },
        get calculatorsDisplay()    { return '4'; },
        get totalContentDisplay()   { return '3,700+'; },
    };

    // ─── Auto-populate DOM elements ──────────────────
    function populateStats() {
        // Pattern 1: data-rdx-stat="key" → replaces element text
        document.querySelectorAll('[data-rdx-stat]').forEach(function (el) {
            var key = el.getAttribute('data-rdx-stat');
            var displayKey = key + 'Display';
            if (STATS[displayKey] !== undefined) {
                el.textContent = STATS[displayKey];
            } else if (STATS[key] !== undefined) {
                el.textContent = typeof STATS[key] === 'number' ? STATS[key].toLocaleString() : STATS[key];
            }
        });

        // Pattern 2: data-rdx-stat-text → replaces {key} tokens in text
        document.querySelectorAll('[data-rdx-stat-text]').forEach(function (el) {
            el.textContent = el.textContent.replace(/\{(\w+)\}/g, function (match, key) {
                var displayKey = key + 'Display';
                if (STATS[displayKey] !== undefined) return STATS[displayKey];
                if (STATS[key] !== undefined) return typeof STATS[key] === 'number' ? STATS[key].toLocaleString() : STATS[key];
                return match;
            });
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', populateStats);
    } else {
        populateStats();
    }

    // Expose for programmatic access
    window.RdxSiteStats = STATS;
})();
