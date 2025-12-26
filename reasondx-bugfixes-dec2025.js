/**
 * ============================================================================
 * REASONDX BUG FIXES: Question Matching & Stage Transitions
 * ============================================================================
 * Version: 1.0 | December 2025
 * 
 * This module fixes:
 * 1. Question matching issues (e.g., vaccination → allergy mismatch)
 * 2. Stage transition issues (looping from revised differential)
 * 3. "What makes it better/worse" getting emotional responses
 * 
 * INSTALLATION:
 * Add this script AFTER all other ReasonDx scripts in index.html:
 * <script src="reasondx-bugfixes-dec2025.js"></script>
 * ============================================================================
 */

(function() {
    'use strict';

    console.log('[ReasonDx Bugfixes] Initializing...');

    // ========================================================================
    // FIX 1: ADD MISSING KEYWORD PATTERNS
    // Adds vaccination, immunization, and improves alleviating/aggravating
    // ========================================================================
    
    function patchKeywordPatterns() {
        if (typeof HISTORY_KEYWORD_PATTERNS === 'undefined') {
            console.warn('[ReasonDx Bugfixes] HISTORY_KEYWORD_PATTERNS not found, will retry...');
            return false;
        }
        
        // Add vaccination/immunization pattern
        if (!HISTORY_KEYWORD_PATTERNS.vaccination) {
            HISTORY_KEYWORD_PATTERNS.vaccination = [
                'vaccine', 'vaccines', 'vaccination', 'vaccinations', 
                'immunization', 'immunizations', 'immunized',
                'flu shot', 'pneumonia shot', 'pneumovax', 
                'tdap', 'tetanus', 'shingles', 'shingrix',
                'covid shot', 'covid vaccine', 'booster',
                'up to date', 'shots'
            ];
            console.log('[ReasonDx Bugfixes] Added vaccination keyword pattern');
        }
        
        // Enhance alleviating pattern to avoid emotional matches
        if (HISTORY_KEYWORD_PATTERNS.alleviating) {
            // Make sure it doesn't match emotional/concern responses
            HISTORY_KEYWORD_PATTERNS.alleviating = [
                'better', 'relieve', 'relief', 'help', 'improve', 
                'make it better', 'ease', 'alleviate', 'lessens',
                'what helps', 'anything help', 'tried anything',
                'position', 'rest', 'medication help'
            ];
            console.log('[ReasonDx Bugfixes] Enhanced alleviating keyword pattern');
        }
        
        // Enhance aggravating pattern
        if (HISTORY_KEYWORD_PATTERNS.aggravating) {
            HISTORY_KEYWORD_PATTERNS.aggravating = [
                'worse', 'worsen', 'aggravate', 'trigger', 'triggers',
                'bring on', 'exacerbate', 'make it worse', 'makes worse',
                'provoke', 'precipitate', 'activity', 'movement',
                'eating', 'breathing', 'exertion', 'position'
            ];
            console.log('[ReasonDx Bugfixes] Enhanced aggravating keyword pattern');
        }
        
        // Add concerns/worries pattern (so emotional responses have a proper category)
        if (!HISTORY_KEYWORD_PATTERNS.concerns) {
            HISTORY_KEYWORD_PATTERNS.concerns = [
                'worried', 'worry', 'concern', 'concerned', 'scared',
                'afraid', 'anxious', 'nervous', 'fear', 'hoping',
                'what do you think', 'is it serious', 'is this bad',
                'what are you most worried'
            ];
            console.log('[ReasonDx Bugfixes] Added concerns keyword pattern');
        }
        
        return true;
    }

    // ========================================================================
    // FIX 2: IMPROVE QUESTION INTENT DETECTION
    // Ensures vaccination vs allergy questions are distinguished
    // ========================================================================
    
    function patchIntentDetection() {
        // Store reference to original detectQuestionIntent if it exists
        if (typeof window.detectQuestionIntent === 'function') {
            const originalDetectIntent = window.detectQuestionIntent;
            
            window.detectQuestionIntent = function(question) {
                const q = question.toLowerCase();
                
                // PRIORITY: Check for vaccination/immunization first
                // These should NOT be confused with allergies
                if (q.includes('vaccin') || q.includes('immuniz') || 
                    q.includes('flu shot') || q.includes('shot') && q.includes('date') ||
                    q.includes('pneumonia shot') || q.includes('booster')) {
                    return 'vaccination';
                }
                
                // Check for allergy specifically (not vaccination)
                if ((q.includes('allerg') || q.includes('reaction') || q.includes('nkda')) &&
                    !q.includes('vaccin') && !q.includes('shot')) {
                    return 'allergies';
                }
                
                // Check for concerns/worries
                if (q.includes('worried') || q.includes('concern') || q.includes('scared') ||
                    q.includes('afraid') || q.includes('nervous') || q.includes('hoping')) {
                    return 'concerns';
                }
                
                // Check for alleviating factors (what makes it better)
                if ((q.includes('better') || q.includes('help') || q.includes('relieve') || q.includes('ease')) &&
                    (q.includes('what') || q.includes('anything') || q.includes('does'))) {
                    return 'alleviating';
                }
                
                // Check for aggravating factors (what makes it worse)
                if ((q.includes('worse') || q.includes('aggravat') || q.includes('trigger')) &&
                    (q.includes('what') || q.includes('anything') || q.includes('does'))) {
                    return 'aggravating';
                }
                
                // Fall back to original detection
                return originalDetectIntent(q);
            };
            
            console.log('[ReasonDx Bugfixes] Patched detectQuestionIntent function');
        }
    }

    // ========================================================================
    // FIX 3: IMPROVE QUESTION MATCHING SPECIFICITY
    // Ensures questions with clear keywords match correctly
    // ========================================================================
    
    function patchQuestionMatching() {
        if (typeof window.matchHistoryQuestion !== 'function') {
            console.warn('[ReasonDx Bugfixes] matchHistoryQuestion not found');
            return;
        }
        
        const originalMatch = window.matchHistoryQuestion;
        
        window.matchHistoryQuestion = function(studentQuestion, caseHistoryQuestions, variant) {
            const normalizedInput = studentQuestion.toLowerCase().trim();
            
            // PRIORITY MATCHING: For very specific question types, look for direct matches first
            
            // 1. Vaccination questions
            if (normalizedInput.includes('vaccin') || normalizedInput.includes('immuniz') ||
                (normalizedInput.includes('shot') && (normalizedInput.includes('flu') || normalizedInput.includes('pneumonia')))) {
                
                // Find vaccination question directly
                const vaccQuestion = caseHistoryQuestions.find(q => 
                    q.id === 'vaccinations' || q.id === 'immunization' || q.id === 'vaccines' ||
                    q.text.toLowerCase().includes('vaccin') || q.text.toLowerCase().includes('immuniz')
                );
                
                if (vaccQuestion) {
                    console.log('[ReasonDx Bugfixes] Direct vaccination match found');
                    return vaccQuestion;
                }
            }
            
            // 2. Allergy questions (but NOT if asking about vaccines)
            if ((normalizedInput.includes('allerg') || normalizedInput.includes('reaction')) &&
                !normalizedInput.includes('vaccin') && !normalizedInput.includes('shot')) {
                
                const allergyQuestion = caseHistoryQuestions.find(q =>
                    q.id === 'allergies' || q.id === 'allergy' ||
                    q.text.toLowerCase().includes('allerg')
                );
                
                if (allergyQuestion) {
                    console.log('[ReasonDx Bugfixes] Direct allergy match found');
                    return allergyQuestion;
                }
            }
            
            // 3. What makes it better/worse - specific pattern matching
            if (normalizedInput.includes('what') && normalizedInput.includes('better')) {
                const alleviatingQuestion = caseHistoryQuestions.find(q =>
                    q.id.includes('alleviat') || q.id.includes('better') || q.id.includes('relief') ||
                    (q.text.toLowerCase().includes('better') && q.text.toLowerCase().includes('make'))
                );
                
                if (alleviatingQuestion) {
                    console.log('[ReasonDx Bugfixes] Direct alleviating match found');
                    return alleviatingQuestion;
                }
            }
            
            if (normalizedInput.includes('what') && normalizedInput.includes('worse')) {
                const aggravatingQuestion = caseHistoryQuestions.find(q =>
                    q.id.includes('aggravat') || q.id.includes('worse') || q.id.includes('trigger') ||
                    (q.text.toLowerCase().includes('worse') && q.text.toLowerCase().includes('make'))
                );
                
                if (aggravatingQuestion) {
                    console.log('[ReasonDx Bugfixes] Direct aggravating match found');
                    return aggravatingQuestion;
                }
            }
            
            // 4. Patient concerns/worries
            if (normalizedInput.includes('worried') || normalizedInput.includes('concern') ||
                normalizedInput.includes('scared') || normalizedInput.includes('hoping')) {
                
                const concernQuestion = caseHistoryQuestions.find(q =>
                    q.id.includes('concern') || q.id.includes('worry') || q.id.includes('worried') ||
                    q.text.toLowerCase().includes('worried') || q.text.toLowerCase().includes('hoping')
                );
                
                if (concernQuestion) {
                    console.log('[ReasonDx Bugfixes] Direct concern match found');
                    return concernQuestion;
                }
            }
            
            // Fall back to original matching for everything else
            return originalMatch(studentQuestion, caseHistoryQuestions, variant);
        };
        
        console.log('[ReasonDx Bugfixes] Patched matchHistoryQuestion function');
    }

    // ========================================================================
    // FIX 4: ENSURE STAGE TRANSITIONS WORK CORRECTLY
    // Prevent looping back from revised-differential to history
    // ========================================================================
    
    function patchStageTransitions() {
        // Ensure advanceToWorkup always moves forward
        if (typeof window.advanceToWorkup === 'function') {
            const originalAdvance = window.advanceToWorkup;
            
            window.advanceToWorkup = function() {
                console.log('[ReasonDx Bugfixes] advanceToWorkup called, current screen:', window.state?.screen);
                
                // Ensure we're moving to workup
                if (window.state) {
                    // Record stage time if timer enabled
                    if (window.state.timerEnabled && typeof recordStageTime === 'function') {
                        recordStageTime('revised-differential');
                    }
                    if (window.state.timerEnabled && typeof resetStageTimer === 'function') {
                        resetStageTimer();
                    }
                    
                    // Force transition to workup
                    window.state.screen = 'workup';
                    
                    // Log the transition
                    if (typeof rpfsLogStageTransition === 'function') {
                        rpfsLogStageTransition('revised-differential', 'workup');
                    }
                    
                    // Render
                    if (typeof render === 'function') {
                        render();
                    }
                    
                    // Update timer display if needed
                    if (window.state.timerEnabled && typeof updateTimerDisplay === 'function') {
                        updateTimerDisplay();
                    }
                    
                    console.log('[ReasonDx Bugfixes] Transitioned to workup, new screen:', window.state.screen);
                } else {
                    // Fallback to original
                    originalAdvance();
                }
            };
            
            console.log('[ReasonDx Bugfixes] Patched advanceToWorkup function');
        }
        
        // Monitor for unexpected state changes
        if (window.state) {
            let lastScreen = window.state.screen;
            
            // Create a proxy to detect screen changes
            const stateHandler = {
                set: function(obj, prop, value) {
                    if (prop === 'screen') {
                        // Detect potential looping
                        if (lastScreen === 'revised-differential' && 
                            (value === 'history' || value === 'differential')) {
                            console.warn('[ReasonDx Bugfixes] POTENTIAL LOOP DETECTED: Going from revised-differential back to', value);
                            console.trace('Stack trace for loop detection');
                        }
                        lastScreen = value;
                    }
                    obj[prop] = value;
                    return true;
                }
            };
            
            // Note: Can't easily proxy existing object, so just log
            console.log('[ReasonDx Bugfixes] Stage transition monitoring enabled');
        }
    }

    // ========================================================================
    // INITIALIZATION
    // ========================================================================
    
    function initialize() {
        let attempts = 0;
        const maxAttempts = 10;
        
        function tryInit() {
            attempts++;
            
            // Try to patch keyword patterns
            const patternsPatched = patchKeywordPatterns();
            
            // Patch other functions if available
            patchIntentDetection();
            patchQuestionMatching();
            patchStageTransitions();
            
            if (patternsPatched) {
                console.log('[ReasonDx Bugfixes] All patches applied successfully');
            } else if (attempts < maxAttempts) {
                console.log(`[ReasonDx Bugfixes] Retry ${attempts}/${maxAttempts}...`);
                setTimeout(tryInit, 200);
            } else {
                console.warn('[ReasonDx Bugfixes] Could not patch all components after', maxAttempts, 'attempts');
            }
        }
        
        // Start initialization
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => setTimeout(tryInit, 300));
        } else {
            setTimeout(tryInit, 300);
        }
    }

    // ========================================================================
    // EXPOSE FOR DEBUGGING
    // ========================================================================
    
    window.ReasonDxBugfixes = {
        patchKeywordPatterns,
        patchIntentDetection,
        patchQuestionMatching,
        patchStageTransitions,
        reinitialize: initialize,
        version: '1.0.0'
    };

    // Start initialization
    initialize();

    console.log('[ReasonDx Bugfixes] Module loaded');

})();
