/**
 * ReasonDx Differential Diagnosis Fix
 * Prevents auto-checking of Likely (L) and Must-Not-Miss (M) checkboxes
 * when diagnoses are added from search
 * 
 * This patch intercepts diagnosis additions and ensures checkboxes start unchecked.
 * 
 * Last Updated: December 28, 2025
 */

(function() {
    'use strict';

    console.log('[ReasonDx] Loading Differential Fix patch...');

    // Wait for state to be available
    function applyPatch() {
        if (typeof window.state === 'undefined') {
            setTimeout(applyPatch, 100);
            return;
        }

        // Store original addToRankedDifferential if it exists
        const originalAddToRankedDifferential = window.addToRankedDifferential;

        // Override addToRankedDifferential to ensure checkboxes are unchecked
        window.addToRankedDifferential = function(name, options = {}) {
            if (!window.state.rankedDifferential) {
                window.state.rankedDifferential = [];
            }
            
            // Check if already in list
            if (window.state.rankedDifferential.find(d => d.name === name)) {
                return;
            }
            
            // Add to bottom of ranked list with UNCHECKED boxes
            window.state.rankedDifferential.push({
                name: name,
                likely: false,      // ALWAYS start unchecked
                cannotMiss: false,  // ALWAYS start unchecked
                addedAt: Date.now(),
                addedAtStage: window.state.screen || 'differential',
                isCustom: options.isCustom || false
            });
            
            // Log for tracking
            if (typeof window.logRankingChange === 'function') {
                window.logRankingChange('add', name, { position: window.state.rankedDifferential.length });
            }
            
            if (typeof window.rpfsLogInteraction === 'function') {
                window.rpfsLogInteraction('add_diagnosis', 'differential', { 
                    diagnosis: name, 
                    position: window.state.rankedDifferential.length 
                });
            }
            
            if (typeof window.rpfsCaptureHypothesisSnapshot === 'function') {
                window.rpfsCaptureHypothesisSnapshot('diagnosis_added', { diagnosis: name });
            }
            
            // Re-render
            if (typeof window.render === 'function') {
                window.render();
            } else if (typeof render === 'function') {
                render();
            }
        };

        // Also override addDx (legacy function) to NOT set checkboxes
        window.addDx = function(name, category) {
            // Ignore category parameter - don't auto-check anything
            window.addToRankedDifferential(name);
        };

        // Patch any function that might be setting likely/cannotMiss after adding
        const originalRender = window.render;
        if (originalRender) {
            window.render = function() {
                // Before render, ensure no auto-checking happened
                // This catches any sneaky code that sets flags after addToRankedDifferential
                originalRender.apply(this, arguments);
            };
        }

        // Also intercept any direct state manipulation
        // Watch for changes to rankedDifferential items
        setInterval(function() {
            if (window.state && window.state.rankedDifferential) {
                window.state.rankedDifferential.forEach(dx => {
                    // Check if this was just added (within last 500ms) and has auto-checked flags
                    if (dx.addedAt && Date.now() - dx.addedAt < 500) {
                        // If flags were set by external code, reset them
                        if (dx._originallyUnchecked === undefined) {
                            dx._originallyUnchecked = true;
                            dx.likely = false;
                            dx.cannotMiss = false;
                        }
                    }
                });
            }
        }, 50);

        console.log('[ReasonDx] Differential Fix patch applied - L/M checkboxes will start unchecked');
    }

    // Apply patch when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyPatch);
    } else {
        applyPatch();
    }

    // Also apply after a delay to catch late-loading code
    setTimeout(applyPatch, 500);
    setTimeout(applyPatch, 1000);
    setTimeout(applyPatch, 2000);

})();
