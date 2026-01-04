/**
 * ============================================================================
 * REASONDX CASE DATA PATIENT NAME UPDATER
 * ============================================================================
 * Version: 1.0 | December 2025
 * 
 * This module updates existing case data to use full patient names
 * instead of initials. Run this AFTER all case files are loaded.
 * 
 * Add to index.html AFTER all case-related scripts:
 * <script src="reasondx-update-patient-names.js"></script>
 * ============================================================================
 */

(function() {
    'use strict';

    // Full patient name mappings with demographics
    const PATIENT_NAME_UPDATES = {
        // Format: "initials": { fullName: "Full Name", context: "case category for reference" }
        
        // Respiratory/Pulmonary
        "R.G.": { fullName: "Robert Garcia" },
        "L.C.": { fullName: "Linda Chen" },
        "K.M.": { fullName: "Kevin Mitchell" },
        "D.H.": { fullName: "Diane Henderson" },
        "E.R.": { fullName: "Eduardo Reyes" },
        "W.J.": { fullName: "William Jackson" },
        
        // Cardiac
        "M.R.": { fullName: "Maria Rodriguez" },
        "T.S.": { fullName: "Thomas Sullivan" },
        "E.M.": { fullName: "Elizabeth Martinez" },
        "R.T.": { fullName: "Richard Thompson" },
        "P.D.": { fullName: "Patricia Davis" },
        "K.L.": { fullName: "Kenneth Lee" },
        
        // GI
        "S.K.": { fullName: "Sarah Kim" },
        "J.D.": { fullName: "James Dawson" },
        "D.P.": { fullName: "Daniel Park" },
        "T.W.": { fullName: "Theresa Williams" },
        "C.H.": { fullName: "Catherine Harris" },
        "S.M.": { fullName: "Steven Miller" },
        
        // Neuro
        "H.J.": { fullName: "Helen Johnson" },
        "M.T.": { fullName: "Michael Torres" },
        "J.P.": { fullName: "Jennifer Patel" },
        "W.B.": { fullName: "Walter Brown" },
        "R.H.": { fullName: "Rosa Hernandez" },
        
        // Rheumatology/MSK
        "B.T.": { fullName: "Barbara Taylor" },
        "D.K.": { fullName: "David Kim" },
        "S.T.": { fullName: "Sandra Thompson" },
        "S.L.": { fullName: "Samuel Lee" },
        "P.R.": { fullName: "Paula Rivera" },
        "H.P.": { fullName: "Howard Phillips" },
        "M.L.": { fullName: "Margaret Lewis" },
        
        // Infectious Disease
        "A.R.": { fullName: "Anthony Robinson" },
        "J.N.": { fullName: "Jessica Nguyen" },
        "K.S.": { fullName: "Karen Simmons" },
        "R.J.": { fullName: "Ronald James" },
        
        // Endocrine
        "G.P.": { fullName: "Gloria Patterson" },
        "T.M.": { fullName: "Timothy Moore" },
        "W.S.": { fullName: "Wendy Santos" },
        "L.M.": { fullName: "Lawrence Martinez" },
        
        // Additional
        "A.K.": { fullName: "Amanda King" },
        "J.T.": { fullName: "Joseph Turner" },
        
        // Normalize existing partial names (First initial + Last)
        "A. Price": { fullName: "Amanda Price" },
        "R. Thompson": { fullName: "Rachel Thompson" },
        "M. Sullivan": { fullName: "Mark Sullivan" },
        "E. Patterson": { fullName: "Emily Patterson" },
        "S. Martinez": { fullName: "Sofia Martinez" },
        "J. Quincy": { fullName: "James Quincy" },
        "J. Park": { fullName: "Jennifer Park" },
        "M. Torres": { fullName: "Miguel Torres" },
        "A. Rivera": { fullName: "Ana Rivera" },
        "S. Martin": { fullName: "Samuel Martin" },
        "J. Rivera": { fullName: "Julian Rivera" },
        "R. Chen": { fullName: "Rebecca Chen" },
        "T. Chen": { fullName: "Timothy Chen" },
        "J. Smith": { fullName: "Jason Smith" },
        "J. Martin": { fullName: "Julia Martin" },
        "A. Kim": { fullName: "Andrew Kim" },
        "S. Reyes": { fullName: "Sophia Reyes" },
        "K. Williams": { fullName: "Kevin Williams" },
        "B. Thompson": { fullName: "Brandon Thompson" },
        "R. Franklin": { fullName: "Robert Franklin" },
        "L. Edwards": { fullName: "Lisa Edwards" },
        "A. Chen": { fullName: "Alice Chen" },
        "D. Williams": { fullName: "Derek Williams" },
        "J. Rodriguez": { fullName: "Juan Rodriguez" }
    };

    /**
     * Update all case variants with full patient names
     */
    function updateCasePatientNames() {
        if (typeof cases === 'undefined' || !Array.isArray(cases)) {
            console.warn('ReasonDx: cases array not found, skipping name updates');
            return { updated: 0, skipped: 0 };
        }

        let updated = 0;
        let skipped = 0;

        cases.forEach(caseData => {
            if (!caseData.variants) return;
            
            Object.values(caseData.variants).forEach(variant => {
                if (!variant.name) {
                    skipped++;
                    return;
                }
                
                const mapping = PATIENT_NAME_UPDATES[variant.name];
                if (mapping) {
                    // Store original initials for reference
                    variant.initials = variant.name;
                    // Update to full name
                    variant.name = mapping.fullName;
                    updated++;
                } else if (variant.name.length > 10 && variant.name.includes(' ')) {
                    // Already appears to be a full name
                    skipped++;
                } else {
                    console.log(`ReasonDx: No mapping found for patient name "${variant.name}" in case ${caseData.id}`);
                    skipped++;
                }
            });
        });

        return { updated, skipped };
    }

    /**
     * Initialize and apply updates
     */
    function initialize() {
        // Wait a moment for all case data to be loaded
        setTimeout(() => {
            const result = updateCasePatientNames();
            console.log(`✓ ReasonDx Patient Names Updated: ${result.updated} variants updated, ${result.skipped} skipped`);
        }, 200);
    }

    // Expose for debugging
    window.ReasonDxNameUpdater = {
        PATIENT_NAME_UPDATES,
        updateCasePatientNames,
        initialize
    };

    // Auto-initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

})();
