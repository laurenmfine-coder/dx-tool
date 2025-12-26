/**
 * ============================================================================
 * REASONDX PATIENT NAMES & RESUME MODAL FIX
 * ============================================================================
 * Version: 1.0 | December 2025
 * 
 * This module:
 * 1. Provides full patient names for all cases (instead of initials)
 * 2. Updates the resume modal to show patient-friendly information
 * 3. Creates learner-friendly stage name mapping
 * 
 * INSTALLATION:
 * Add this script AFTER reasondx-launch-readiness.js in index.html:
 * <script src="reasondx-patient-names-and-resume-fix.js"></script>
 * ============================================================================
 */

(function() {
    'use strict';

    // ========================================================================
    // PATIENT FULL NAME MAPPING
    // Maps initials to full names, maintaining demographic consistency
    // ========================================================================
    
    const PATIENT_FULL_NAMES = {
        // Pneumonia/Respiratory cases
        "R.G.": { fullName: "Robert Garcia", initials: "R.G." },
        "L.C.": { fullName: "Linda Chen", initials: "L.C." },
        "K.M.": { fullName: "Kevin Mitchell", initials: "K.M." },
        "D.H.": { fullName: "Diane Henderson", initials: "D.H." },
        "E.R.": { fullName: "Eduardo Reyes", initials: "E.R." },
        "W.J.": { fullName: "William Jackson", initials: "W.J." },
        
        // Cardiac cases
        "M.R.": { fullName: "Maria Rodriguez", initials: "M.R." },
        "T.S.": { fullName: "Thomas Sullivan", initials: "T.S." },
        "E.M.": { fullName: "Elizabeth Martinez", initials: "E.M." },
        "R.T.": { fullName: "Richard Thompson", initials: "R.T." },
        "P.D.": { fullName: "Patricia Davis", initials: "P.D." },
        "K.L.": { fullName: "Kenneth Lee", initials: "K.L." },
        
        // GI cases
        "S.K.": { fullName: "Sarah Kim", initials: "S.K." },
        "J.D.": { fullName: "James Dawson", initials: "J.D." },
        "D.P.": { fullName: "Daniel Park", initials: "D.P." },
        "T.W.": { fullName: "Theresa Williams", initials: "T.W." },
        "C.H.": { fullName: "Catherine Harris", initials: "C.H." },
        "S.M.": { fullName: "Steven Miller", initials: "S.M." },
        
        // Neuro cases
        "H.J.": { fullName: "Helen Johnson", initials: "H.J." },
        "M.T.": { fullName: "Michael Torres", initials: "M.T." },
        "J.P.": { fullName: "Jennifer Patel", initials: "J.P." },
        "W.B.": { fullName: "Walter Brown", initials: "W.B." },
        "R.H.": { fullName: "Rosa Hernandez", initials: "R.H." },
        
        // Rheumatology/MSK cases
        "B.T.": { fullName: "Barbara Taylor", initials: "B.T." },
        "D.K.": { fullName: "David Kim", initials: "D.K." },
        "S.T.": { fullName: "Sandra Thompson", initials: "S.T." },
        "S.L.": { fullName: "Samuel Lee", initials: "S.L." },
        "P.R.": { fullName: "Paula Rivera", initials: "P.R." },
        "H.P.": { fullName: "Howard Phillips", initials: "H.P." },
        "M.L.": { fullName: "Margaret Lewis", initials: "M.L." },
        
        // Infectious Disease cases
        "A.R.": { fullName: "Anthony Robinson", initials: "A.R." },
        "J.N.": { fullName: "Jessica Nguyen", initials: "J.N." },
        "K.S.": { fullName: "Karen Simmons", initials: "K.S." },
        "R.J.": { fullName: "Ronald James", initials: "R.J." },
        
        // Endocrine cases
        "G.P.": { fullName: "Gloria Patterson", initials: "G.P." },
        "T.M.": { fullName: "Timothy Moore", initials: "T.M." },
        "W.S.": { fullName: "Wendy Santos", initials: "W.S." },
        "L.M.": { fullName: "Lawrence Martinez", initials: "L.M." },
        
        // Additional cases
        "A.K.": { fullName: "Amanda King", initials: "A.K." },
        "J.T.": { fullName: "Joseph Turner", initials: "J.T." },
        
        // Cases that already have full names (normalize format)
        "A. Price": { fullName: "Amanda Price", initials: "A.P." },
        "R. Thompson": { fullName: "Rachel Thompson", initials: "R.T." },
        "M. Sullivan": { fullName: "Mark Sullivan", initials: "M.S." },
        "E. Patterson": { fullName: "Emily Patterson", initials: "E.P." },
        "S. Martinez": { fullName: "Sofia Martinez", initials: "S.M." },
        "J. Quincy": { fullName: "James Quincy", initials: "J.Q." },
        "J. Park": { fullName: "Jennifer Park", initials: "J.P." },
        "M. Torres": { fullName: "Miguel Torres", initials: "M.T." },
        "A. Rivera": { fullName: "Ana Rivera", initials: "A.R." },
        "S. Martin": { fullName: "Samuel Martin", initials: "S.M." },
        "J. Rivera": { fullName: "Julian Rivera", initials: "J.R." },
        "R. Chen": { fullName: "Rebecca Chen", initials: "R.C." },
        "T. Chen": { fullName: "Timothy Chen", initials: "T.C." },
        "J. Smith": { fullName: "Jason Smith", initials: "J.S." },
        "J. Martin": { fullName: "Julia Martin", initials: "J.M." },
        "A. Kim": { fullName: "Andrew Kim", initials: "A.K." },
        "S. Reyes": { fullName: "Sophia Reyes", initials: "S.R." },
        "K. Williams": { fullName: "Kevin Williams", initials: "K.W." },
        "B. Thompson": { fullName: "Brandon Thompson", initials: "B.T." },
        "R. Franklin": { fullName: "Robert Franklin", initials: "R.F." },
        "L. Edwards": { fullName: "Lisa Edwards", initials: "L.E." },
        "A. Chen": { fullName: "Alice Chen", initials: "A.C." },
        "D. Williams": { fullName: "Derek Williams", initials: "D.W." },
        "J. Rodriguez": { fullName: "Juan Rodriguez", initials: "J.R." }
    };

    // ========================================================================
    // LEARNER-FRIENDLY STAGE NAMES
    // Maps technical stage names to user-friendly display names
    // ========================================================================
    
    const STAGE_DISPLAY_NAMES = {
        // Main case progression stages
        'menu': 'Case Selection',
        'case-select': 'Selecting Case',
        'differential': 'Building Initial Differential',
        'history': 'Taking History',
        'physical': 'Physical Examination',
        'exam': 'Physical Examination',
        'workup': 'Ordering Tests',
        'testing': 'Reviewing Results',
        'revised-differential': 'Refining Differential',
        'revisedDifferential': 'Refining Differential',
        'diagnosis': 'Final Diagnosis',
        'final-diagnosis': 'Final Diagnosis',
        'management': 'Treatment Planning',
        'treatment': 'Treatment Planning',
        'results': 'Case Results',
        'feedback': 'Reviewing Feedback',
        'complete': 'Case Complete',
        
        // Study hub stages
        'study-hub': 'Study Hub',
        'flashcards': 'Flashcard Review',
        'quiz': 'Quiz Mode',
        
        // Other screens
        'stats': 'Progress Dashboard',
        'insights-dashboard': 'My Insights',
        'about': 'About',
        'reference-cards': 'Reference Cards',
        'image-quiz-select': 'Image Quiz'
    };

    /**
     * Get learner-friendly stage name
     */
    function getFriendlyStageDisplay(stage) {
        if (!stage) return 'In Progress';
        return STAGE_DISPLAY_NAMES[stage] || stage.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
    }

    /**
     * Get full patient name from initials or partial name
     */
    function getFullPatientName(nameOrInitials) {
        if (!nameOrInitials) return 'Unknown Patient';
        
        // Check direct lookup
        const mapping = PATIENT_FULL_NAMES[nameOrInitials];
        if (mapping) return mapping.fullName;
        
        // If already looks like a full name (has space and more than 3 chars after), return as-is
        if (nameOrInitials.includes(' ') && nameOrInitials.length > 5) {
            return nameOrInitials;
        }
        
        // Return original if no mapping found
        return nameOrInitials;
    }

    /**
     * Get patient display string with name, age, gender
     * @param {Object} variant - The case variant object
     * @returns {string} - Formatted display like "Robert Garcia, 55M"
     */
    function getPatientDisplayString(variant) {
        if (!variant) return 'Unknown Patient';
        
        const fullName = getFullPatientName(variant.name);
        const age = variant.age || '?';
        const gender = variant.gender ? variant.gender.charAt(0).toUpperCase() : '?';
        
        return `${fullName}, ${age}${gender}`;
    }

    /**
     * Get chief complaint for display (truncated if needed)
     */
    function getChiefComplaintDisplay(variant, maxLength = 60) {
        if (!variant || !variant.chiefComplaint) return 'Unknown complaint';
        
        let complaint = variant.chiefComplaint;
        
        // Remove "I've" and "I'm" from start to make it more concise
        complaint = complaint.replace(/^I've /i, '').replace(/^I'm /i, '').replace(/^I /i, '');
        
        // Capitalize first letter
        complaint = complaint.charAt(0).toUpperCase() + complaint.slice(1);
        
        // Truncate if too long
        if (complaint.length > maxLength) {
            complaint = complaint.substring(0, maxLength - 3) + '...';
        }
        
        return complaint;
    }

    // ========================================================================
    // OVERRIDE SESSION RECOVERY PROMPT
    // Shows patient-friendly info instead of diagnosis details
    // ========================================================================
    
    /**
     * Override the showSessionRecoveryPrompt function to use patient-friendly display
     */
    function showSessionRecoveryPromptEnhanced(session) {
        // Get case data to find variant info
        let patientDisplay = 'Unknown Patient';
        let chiefComplaintDisplay = 'Unknown complaint';
        let stageDisplay = getFriendlyStageDisplay(session.stage || session.screen);
        
        // Try to get case and variant data
        if (typeof cases !== 'undefined' && session.caseId) {
            const caseData = cases.find(c => c.id === session.caseId);
            if (caseData && caseData.variants) {
                // Get variant - try session's variantKey first, then first variant
                const variantKey = session.variantKey || Object.keys(caseData.variants)[0];
                const variant = caseData.variants[variantKey];
                
                if (variant) {
                    patientDisplay = getPatientDisplayString(variant);
                    chiefComplaintDisplay = getChiefComplaintDisplay(variant);
                }
            }
        }
        
        const timeAgo = formatTimeAgo ? formatTimeAgo(Date.now() - session.lastSave) : 'recently';
        
        const overlay = document.createElement('div');
        overlay.id = 'recovery-overlay';
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        overlay.innerHTML = `
            <div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                <div class="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
                    <h2 class="text-xl font-bold flex items-center gap-2">
                        <span>💾</span> Resume Previous Session?
                    </h2>
                </div>
                
                <div class="p-6">
                    <p class="text-gray-700 dark:text-gray-300 mb-4">
                        You have an unfinished case from <strong>${timeAgo}</strong>:
                    </p>
                    
                    <div class="bg-gray-50 dark:bg-zinc-700 rounded-lg p-4 mb-4">
                        <p class="font-semibold text-gray-800 dark:text-gray-100 text-lg">${patientDisplay}</p>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mt-1 italic">"${chiefComplaintDisplay}"</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            <span class="inline-flex items-center gap-1">
                                📍 ${stageDisplay}
                            </span>
                        </p>
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="discardRecoveredSession()" 
                                class="flex-1 bg-gray-200 dark:bg-zinc-600 text-gray-700 dark:text-gray-200 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-zinc-500 transition">
                            Start Fresh
                        </button>
                        <button onclick="restoreRecoveredSession()" 
                                class="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition">
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    // ========================================================================
    // OVERRIDE QUICK RESUME RENDERING
    // ========================================================================
    
    /**
     * Enhanced renderQuickResume that shows patient info
     */
    function renderQuickResumeEnhanced() {
        if (typeof lastPlayedCase === 'undefined' || !lastPlayedCase) return '';
        if (typeof state !== 'undefined' && state.screen !== 'menu') return '';
        
        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === lastPlayedCase.caseId) : null;
        if (!caseData) return '';
        
        // Get variant for patient info
        const variantKey = lastPlayedCase.variantKey || Object.keys(caseData.variants || {})[0];
        const variant = caseData.variants ? caseData.variants[variantKey] : null;
        
        let patientDisplay = 'Continue Case';
        let stageDisplay = getFriendlyStageDisplay(lastPlayedCase.stage);
        
        if (variant) {
            patientDisplay = getPatientDisplayString(variant);
        }
        
        return `
            <div class="quick-resume-banner" onclick="resumeLastCase()">
                <div class="quick-resume-icon">▶️</div>
                <div class="quick-resume-text">
                    <h4>Continue: ${patientDisplay}</h4>
                    <p>${stageDisplay}</p>
                </div>
            </div>
        `;
    }

    // ========================================================================
    // SAVE SESSION WITH PATIENT INFO
    // ========================================================================
    
    /**
     * Enhanced saveActiveSession that includes patient info for display
     */
    function saveActiveSessionEnhanced() {
        if (typeof window.state === 'undefined' || !window.state.caseType) return;
        
        // Get case and variant info
        let patientName = '';
        let chiefComplaint = '';
        let variantKey = window.state.variantKey;
        
        if (typeof cases !== 'undefined') {
            const caseData = cases.find(c => c.id === window.state.caseType);
            if (caseData && caseData.variants) {
                variantKey = variantKey || Object.keys(caseData.variants)[0];
                const variant = caseData.variants[variantKey];
                if (variant) {
                    patientName = getFullPatientName(variant.name);
                    chiefComplaint = variant.chiefComplaint || '';
                }
            }
        }
        
        const sessionData = {
            caseId: window.state.caseType,
            caseTitle: patientName || window.state.caseType, // Use patient name as title
            variantKey: variantKey,
            screen: window.state.screen,
            stage: window.state.screen,
            patientName: patientName,
            chiefComplaint: chiefComplaint,
            rankedDifferential: window.state.rankedDifferential || [],
            confidence: window.state.confidence,
            selectedHistory: window.state.selectedHistory || [],
            selectedPhysical: window.state.selectedPhysical || [],
            selectedWorkup: window.state.selectedWorkup || [],
            lastSave: Date.now(),
            studentId: localStorage.getItem('reasondx_study_id')
        };
        
        localStorage.setItem('reasondx_active_session', JSON.stringify(sessionData));
    }

    // ========================================================================
    // APPLY OVERRIDES
    // ========================================================================
    
    /**
     * Apply all enhancements when DOM is ready
     */
    function applyEnhancements() {
        // Override showSessionRecoveryPrompt if it exists
        if (typeof window.showSessionRecoveryPrompt === 'function' || typeof window.LaunchReadiness !== 'undefined') {
            // Store original for potential fallback
            const originalShowPrompt = window.showSessionRecoveryPrompt;
            
            window.showSessionRecoveryPrompt = function(session) {
                try {
                    showSessionRecoveryPromptEnhanced(session);
                } catch (e) {
                    console.error('Enhanced resume prompt failed, using original:', e);
                    if (originalShowPrompt) originalShowPrompt(session);
                }
            };
        }
        
        // Override renderQuickResume if it exists
        if (typeof window.renderQuickResume === 'function') {
            const originalRenderQuickResume = window.renderQuickResume;
            
            window.renderQuickResume = function() {
                try {
                    return renderQuickResumeEnhanced();
                } catch (e) {
                    console.error('Enhanced quick resume failed, using original:', e);
                    return originalRenderQuickResume ? originalRenderQuickResume() : '';
                }
            };
        }
        
        // Override saveActiveSession if it exists
        if (typeof window.saveActiveSession === 'function') {
            const originalSaveSession = window.saveActiveSession;
            
            window.saveActiveSession = function() {
                try {
                    saveActiveSessionEnhanced();
                } catch (e) {
                    console.error('Enhanced save session failed, using original:', e);
                    if (originalSaveSession) originalSaveSession();
                }
            };
        }
        
        console.log('✓ ReasonDx Patient Names & Resume Fix: Applied');
    }

    // ========================================================================
    // EXPOSE UTILITIES FOR OTHER MODULES
    // ========================================================================
    
    window.ReasonDxPatientNames = {
        // Name utilities
        getFullPatientName: getFullPatientName,
        getPatientDisplayString: getPatientDisplayString,
        getChiefComplaintDisplay: getChiefComplaintDisplay,
        
        // Stage utilities
        getFriendlyStageDisplay: getFriendlyStageDisplay,
        STAGE_DISPLAY_NAMES: STAGE_DISPLAY_NAMES,
        
        // Data
        PATIENT_FULL_NAMES: PATIENT_FULL_NAMES,
        
        // Manual application
        applyEnhancements: applyEnhancements
    };

    // ========================================================================
    // INITIALIZE
    // ========================================================================
    
    // Apply enhancements when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyEnhancements);
    } else {
        // DOM already loaded, apply after a short delay to ensure other scripts are loaded
        setTimeout(applyEnhancements, 100);
    }

    console.log('✓ ReasonDx Patient Names & Resume Fix: Loaded');
    console.log('  - Full patient names available for display');
    console.log('  - Learner-friendly stage names configured');
    console.log('  - Resume modal will show patient info instead of diagnosis');

})();
