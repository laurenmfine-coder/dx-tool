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
        function doPatching() {
            let patchedCount = 0;
            
            // Ensure advanceToWorkup always moves forward
            if (typeof window.advanceToWorkup === 'function' && !window.advanceToWorkup._patched) {
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
                        
                        console.log('[ReasonDx Bugfixes] Set screen to workup, about to render');
                        
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
                        console.log('[ReasonDx Bugfixes] No state, calling original advanceToWorkup');
                        originalAdvance();
                    }
                };
                window.advanceToWorkup._patched = true;
                patchedCount++;
                console.log('[ReasonDx Bugfixes] Patched advanceToWorkup function');
            }
            
            // Also patch submitRevisedDifferential to ensure proper flow
            if (typeof window.submitRevisedDifferential === 'function' && !window.submitRevisedDifferential._patched) {
                const originalSubmit = window.submitRevisedDifferential;
                
                window.submitRevisedDifferential = function() {
                    console.log('[ReasonDx Bugfixes] submitRevisedDifferential called, current screen:', window.state?.screen);
                    originalSubmit.apply(this, arguments);
                    console.log('[ReasonDx Bugfixes] After submitRevisedDifferential, screen is:', window.state?.screen, 'revisedSubmitted:', window.state?.revisedSubmitted);
                };
                window.submitRevisedDifferential._patched = true;
                patchedCount++;
                console.log('[ReasonDx Bugfixes] Patched submitRevisedDifferential for logging');
            }
            
            return patchedCount;
        }
        
        // Try patching immediately
        let patched = doPatching();
        
        // If not all functions available, retry after DOM loaded and a delay
        if (patched < 2) {
            console.log('[ReasonDx Bugfixes] Not all stage functions available, will retry...');
            
            // Retry multiple times with increasing delays
            [100, 300, 500, 1000, 2000].forEach(delay => {
                setTimeout(() => {
                    if (!window.advanceToWorkup?._patched || !window.submitRevisedDifferential?._patched) {
                        const newPatched = doPatching();
                        if (newPatched > 0) {
                            console.log('[ReasonDx Bugfixes] Delayed patching successful after', delay, 'ms');
                        }
                    }
                }, delay);
            });
        }
        
        // Monitor for unexpected state changes
        if (window.state) {
            console.log('[ReasonDx Bugfixes] Stage transition monitoring enabled');
        }
    }

    // ========================================================================
    // FIX 5: PATIENT FULL NAMES DISPLAY
    // Shows full patient names instead of initials on case screen
    // ========================================================================
    
    const PATIENT_FULL_NAMES = {
        // Pneumonia/Respiratory cases
        "R.G.": "Robert Garcia", "L.C.": "Linda Chen", "K.M.": "Kevin Mitchell",
        "D.H.": "Diane Henderson", "E.R.": "Eduardo Reyes", "W.J.": "William Jackson",
        // Cardiac cases
        "M.R.": "Maria Rodriguez", "T.S.": "Thomas Sullivan", "E.M.": "Elizabeth Martinez",
        "R.T.": "Richard Thompson", "P.D.": "Patricia Davis", "K.L.": "Kenneth Lee",
        // GI cases
        "S.K.": "Sarah Kim", "J.D.": "James Dawson", "D.P.": "Daniel Park",
        "T.W.": "Theresa Williams", "C.H.": "Catherine Harris", "S.M.": "Steven Miller",
        // Neuro cases
        "H.J.": "Helen Johnson", "M.T.": "Michael Torres", "J.P.": "Jennifer Patel",
        "W.B.": "Walter Brown", "R.H.": "Rosa Hernandez",
        // Rheumatology/MSK cases
        "B.T.": "Barbara Taylor", "D.K.": "David Kim", "S.T.": "Sandra Thompson",
        "S.L.": "Samuel Lee", "P.R.": "Paula Rivera", "H.P.": "Howard Phillips", "M.L.": "Margaret Lewis",
        // Infectious Disease cases
        "A.R.": "Anthony Robinson", "J.N.": "Jessica Nguyen", "K.S.": "Karen Simmons", "R.J.": "Ronald James",
        // Endocrine cases
        "G.P.": "Gloria Patterson", "T.M.": "Timothy Moore", "W.S.": "Wendy Santos", "L.M.": "Lawrence Martinez",
        // Additional cases
        "A.K.": "Amanda King", "J.T.": "Joseph Turner", "C.R.": "Carlos Rivera", "N.P.": "Nancy Park"
    };
    
    function getFullPatientName(nameOrInitials) {
        if (!nameOrInitials) return "Patient";
        const trimmed = nameOrInitials.trim();
        // Check if it's initials (e.g., "R.G." or "M.R.")
        if (PATIENT_FULL_NAMES[trimmed]) {
            return PATIENT_FULL_NAMES[trimmed];
        }
        // Already a full name or unknown format
        return trimmed;
    }
    
    function patchPatientNameDisplay() {
        // Patch the render functions to use full names
        // This intercepts when case data is accessed for display
        
        // Override getPatientDisplay if it exists
        if (typeof window.getPatientDisplay === 'function') {
            const original = window.getPatientDisplay;
            window.getPatientDisplay = function(patient) {
                const result = original(patient);
                // Replace initials with full names in the result
                return result.replace(/\b([A-Z]\.[A-Z]\.)\b/g, (match) => {
                    return PATIENT_FULL_NAMES[match] || match;
                });
            };
        }
        
        // Create utility function for use elsewhere
        window.getFullPatientName = getFullPatientName;
        
        // Patch case variant name access
        // When cases is accessed, intercept the patient name
        if (typeof window.cases !== 'undefined' && Array.isArray(window.cases)) {
            window.cases.forEach(caseData => {
                if (caseData.variants) {
                    Object.keys(caseData.variants).forEach(variantKey => {
                        const variant = caseData.variants[variantKey];
                        if (variant.patient && variant.patient.name) {
                            const original = variant.patient.name;
                            if (PATIENT_FULL_NAMES[original]) {
                                variant.patient.fullName = PATIENT_FULL_NAMES[original];
                                variant.patient.initials = original;
                                variant.patient.name = PATIENT_FULL_NAMES[original];
                            }
                        }
                    });
                }
            });
            console.log('[ReasonDx Bugfixes] Patient names updated to full names');
        }
    }

    // ========================================================================
    // FIX 6: AUTO CASE FRAME FEEDBACK ON EVERY UPDATE
    // Provides feedback automatically when student updates case frame
    // ========================================================================
    
    function patchCaseFrameAutoFeedback() {
        // Override updateCaseFrame to auto-evaluate
        if (typeof window.updateCaseFrame === 'function') {
            const originalUpdate = window.updateCaseFrame;
            let debounceTimer = null;
            
            window.updateCaseFrame = function(stage, value) {
                // Call original to update state
                originalUpdate(stage, value);
                
                // Debounce the evaluation (wait 1.5 seconds after typing stops)
                if (debounceTimer) clearTimeout(debounceTimer);
                debounceTimer = setTimeout(function() {
                    if (value && value.trim().length > 20) { // Only evaluate if there's meaningful content
                        if (typeof window.evaluateCaseFrame === 'function') {
                            window.evaluateCaseFrame(stage);
                            console.log('[ReasonDx Bugfixes] Auto-evaluated case frame for stage:', stage);
                        }
                    }
                }, 1500);
            };
            
            console.log('[ReasonDx Bugfixes] Case frame auto-feedback enabled');
        }
    }

    // ========================================================================
    // FIX 7: HIDE MNM (MUST NOT MISS) LABELS FROM DIAGNOSIS SEARCH
    // Students should not see which diagnoses are "must not miss" 
    // ========================================================================
    
    function patchHideMNMFromSearch() {
        // Find and hide MNM badges in diagnosis search results
        // This is done via CSS injection to avoid modifying render functions
        const style = document.createElement('style');
        style.id = 'reasondx-hide-mnm';
        style.textContent = `
            /* Hide MNM badges in diagnosis search/selection */
            .diagnosis-search-result .mnm-badge,
            .diagnosis-option .mnm-badge,
            .dx-search-result [class*="mnm"],
            .dx-picker [class*="must-not-miss"],
            .differential-builder [class*="mnm"]:not(.feedback-panel [class*="mnm"]),
            /* Hide in initial differential building */
            #differential-panel .mnm-indicator,
            .diagnosis-chip .mnm-label,
            /* But preserve in feedback/results panels */
            .feedback-panel .mnm-badge { display: inline !important; }
            
            /* General MNM hiding in selection contexts */
            [data-context="selection"] .mnm-badge,
            [data-context="search"] .mnm-badge,
            .search-results .mnm-badge,
            .diagnosis-list:not(.results-list) .mnm-badge {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
        
        // Also patch renderDiagnosisOption if it exists
        if (typeof window.renderDiagnosisOption === 'function') {
            const originalRender = window.renderDiagnosisOption;
            window.renderDiagnosisOption = function(dx, context) {
                let result = originalRender(dx, context);
                // Remove MNM badges from selection contexts
                if (context === 'search' || context === 'selection' || context === 'picker') {
                    result = result.replace(/class="[^"]*mnm[^"]*"/g, 'class="hidden-mnm"');
                    result = result.replace(/<span[^>]*mnm[^>]*>.*?<\/span>/gi, '');
                    result = result.replace(/\bMNM\b/g, '');
                    result = result.replace(/must.?not.?miss/gi, '');
                }
                return result;
            };
        }
        
        // Patch diagnosis filtering/display functions
        if (typeof window.filterDiagnoses === 'function') {
            const originalFilter = window.filterDiagnoses;
            window.filterDiagnoses = function(searchTerm, diagnoses) {
                const results = originalFilter(searchTerm, diagnoses);
                // Remove mustNotMiss property from returned results for display
                return results.map(dx => {
                    const cleaned = {...dx};
                    delete cleaned.mustNotMiss;
                    delete cleaned.isMNM;
                    return cleaned;
                });
            };
        }
        
        console.log('[ReasonDx Bugfixes] MNM labels hidden from diagnosis search');
    }

    // ========================================================================
    // FIX 8: IMPROVE HISTORY QUESTION MATCHING FOR UTI/URINARY QUESTIONS
    // Ensures UTI questions don't get matched to surgical history
    // ========================================================================
    
    function patchUTIQuestionMatching() {
        // Add UTI/urinary patterns if not present
        if (typeof HISTORY_KEYWORD_PATTERNS !== 'undefined') {
            // Add urinary/UTI patterns
            if (!HISTORY_KEYWORD_PATTERNS.urinary) {
                HISTORY_KEYWORD_PATTERNS.urinary = [
                    'uti', 'urinary', 'urine', 'urination', 'urinating', 'bladder',
                    'pee', 'peeing', 'burning', 'dysuria', 'frequency', 'urgency',
                    'kidney infection', 'pyelonephritis', 'cystitis',
                    'incontinence', 'retention', 'stream', 'nocturia'
                ];
            }
            
            // Add medical history patterns (separate from surgical)
            if (!HISTORY_KEYWORD_PATTERNS.medicalHistory) {
                HISTORY_KEYWORD_PATTERNS.medicalHistory = [
                    'history of', 'ever had', 'ever have', 'previous', 'before',
                    'past', 'recurrent', 'chronic', 'diagnosed with', 'suffer from',
                    'any history', 'medical history', 'pmh'
                ];
            }
            
            // Add fever patterns
            if (!HISTORY_KEYWORD_PATTERNS.fever) {
                HISTORY_KEYWORD_PATTERNS.fever = [
                    'fever', 'fevers', 'febrile', 'temperature', 'temp',
                    'hot', 'warm', 'chills', 'rigors', 'sweats', 'night sweats'
                ];
            }
            
            console.log('[ReasonDx Bugfixes] Added urinary, medical history, and fever keyword patterns');
        }
        
        // Patch the main matching function
        if (typeof window.matchHistoryQuestion === 'function') {
            const originalMatch = window.matchHistoryQuestion;
            
            window.matchHistoryQuestion = function(studentQuestion, caseHistoryQuestions, variant) {
                const q = studentQuestion.toLowerCase().trim();
                
                // ============================================================
                // PRIORITY 0: FEVER QUESTIONS - Check vitals if no fever question exists
                // ============================================================
                const isFeverQuestion = (
                    q.includes('fever') || q.includes('temperature') || q.includes('temp') ||
                    q.includes('chills') || q.includes('rigors') || q.includes('febrile')
                );
                
                if (isFeverQuestion) {
                    // First try to find an existing fever question
                    const feverQ = caseHistoryQuestions.find(cq =>
                        cq.id === 'fever' || cq.id === 'temperature' || cq.id === 'fevers' ||
                        cq.text.toLowerCase().includes('fever') ||
                        cq.text.toLowerCase().includes('temperature')
                    );
                    
                    if (feverQ) {
                        console.log('[ReasonDx Bugfixes] Found existing fever question');
                        return feverQ;
                    }
                    
                    // No fever question exists - generate answer from vital signs
                    if (variant && variant.vitalSigns && variant.vitalSigns.Temp) {
                        const temp = variant.vitalSigns.Temp;
                        const tempNum = parseFloat(temp);
                        let feverAnswer = '';
                        
                        if (tempNum >= 100.4 || temp.includes('101') || temp.includes('102') || temp.includes('103') || temp.includes('104')) {
                            // Has fever
                            if (q.includes('how high') || q.includes('how much') || q.includes('what was')) {
                                feverAnswer = `Yes, there's been a fever. The temperature was ${temp}.`;
                            } else {
                                feverAnswer = `Yes, there has been a fever - temperature is ${temp}.`;
                            }
                        } else if (tempNum >= 99.0 && tempNum < 100.4) {
                            feverAnswer = `There's been a low-grade temperature of ${temp}.`;
                        } else {
                            feverAnswer = `No fever - temperature has been normal at ${temp}.`;
                        }
                        
                        console.log('[ReasonDx Bugfixes] Generated fever answer from vitals:', feverAnswer);
                        return {
                            id: 'fever_generated',
                            text: 'Any fever?',
                            answer: feverAnswer,
                            tier: 'essential',
                            linkedDx: ['Infection'],
                            reasoning: 'Fever assessment helps identify infectious causes.',
                            generated: true
                        };
                    }
                }
                
                // ============================================================
                // PRIORITY 1: UTI/Urinary history questions
                // ============================================================
                const isUTIHistoryQuestion = (
                    (q.includes('uti') || q.includes('urinary tract') || q.includes('urinary infection')) &&
                    (q.includes('history') || q.includes('ever') || q.includes('before') || q.includes('previous'))
                ) || (
                    q.includes('urinary') && (q.includes('problem') || q.includes('issue') || q.includes('history'))
                );
                
                if (isUTIHistoryQuestion) {
                    // Look for urinary symptom questions first
                    const urinaryQ = caseHistoryQuestions.find(cq => 
                        cq.id === 'urinary_sx' || cq.id === 'urinary' || cq.id === 'uti' ||
                        cq.id === 'urinary_symptoms' || cq.id === 'dysuria' ||
                        cq.text.toLowerCase().includes('urinary') ||
                        cq.text.toLowerCase().includes('urin')
                    );
                    if (urinaryQ) {
                        console.log('[ReasonDx Bugfixes] UTI history question matched to urinary question');
                        return urinaryQ;
                    }
                    
                    // Also try PMH which might contain UTI history
                    const pmhQ = caseHistoryQuestions.find(cq =>
                        cq.id === 'pmh' || cq.id === 'medical_history' ||
                        cq.text.toLowerCase().includes('medical problem')
                    );
                    if (pmhQ) {
                        console.log('[ReasonDx Bugfixes] UTI history question matched to PMH');
                        return pmhQ;
                    }
                }
                
                // ============================================================
                // PRIORITY 2: General urinary questions (not about history)
                // ============================================================
                const isUrinaryQuestion = (
                    q.includes('uti') || q.includes('urinary') || q.includes('urine') ||
                    q.includes('bladder') || (q.includes('burning') && q.includes('urinat')) ||
                    q.includes('dysuria') || q.includes('peeing') || q.includes('pee')
                ) && !q.includes('surgery') && !q.includes('operation');
                
                if (isUrinaryQuestion) {
                    const urinaryQ = caseHistoryQuestions.find(cq =>
                        cq.id.includes('urinary') || cq.id.includes('uti') ||
                        cq.text.toLowerCase().includes('urinary') ||
                        cq.answer?.toLowerCase().includes('urinat') ||
                        (cq.answer?.toLowerCase().includes('burning') && cq.answer?.toLowerCase().includes('urin'))
                    );
                    if (urinaryQ) {
                        console.log('[ReasonDx Bugfixes] Urinary question matched');
                        return urinaryQ;
                    }
                }
                
                // ============================================================
                // PRIORITY 3: Make sure "history of X" doesn't match surgical history
                // ============================================================
                if (q.includes('history of') && !q.includes('surgical') && !q.includes('surgery') && !q.includes('operation')) {
                    // This is asking about medical history of a condition, NOT surgical history
                    const filteredQuestions = caseHistoryQuestions.filter(cq =>
                        !cq.id.includes('surgical') && !cq.id.includes('surgery')
                    );
                    
                    if (filteredQuestions.length > 0) {
                        const result = originalMatch(studentQuestion, filteredQuestions, variant);
                        if (result) {
                            console.log('[ReasonDx Bugfixes] History question matched (excluding surgical)');
                            return result;
                        }
                    }
                }
                
                // Fall back to original matching
                return originalMatch(studentQuestion, caseHistoryQuestions, variant);
            };
            
            console.log('[ReasonDx Bugfixes] Question matching improved with fever fallback and UTI handling');
        }
    }

    // ========================================================================
    // FIX 9: ENHANCED REVISED DIFFERENTIAL WITH REORDERING AND FEEDBACK
    // Adds up/down arrows to reorder diagnoses and provides real-time feedback
    // ========================================================================
    
    function patchRevisedDifferentialReordering() {
        // Add CSS for reorder buttons
        const style = document.createElement('style');
        style.id = 'reasondx-reorder-styles';
        style.textContent = `
            .dx-reorder-controls {
                display: flex;
                flex-direction: column;
                gap: 2px;
                margin-right: 8px;
            }
            .dx-reorder-btn {
                width: 24px;
                height: 20px;
                border: 1px solid #d1d5db;
                background: #f9fafb;
                border-radius: 4px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                color: #6b7280;
                transition: all 0.15s;
            }
            .dx-reorder-btn:hover:not(:disabled) {
                background: #e5e7eb;
                border-color: #9ca3af;
                color: #374151;
            }
            .dx-reorder-btn:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
            .dx-card-reorderable {
                display: flex;
                align-items: center;
                padding: 8px 12px;
                margin-bottom: 6px;
                background: #fff;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                transition: all 0.2s;
            }
            .dx-card-reorderable.selected-likely {
                background: #f0fdf4;
                border-color: #86efac;
            }
            .dx-card-reorderable.selected-must-not-miss {
                background: #fef2f2;
                border-color: #fca5a5;
            }
            .dx-rank-number {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: #e5e7eb;
                color: #374151;
                font-weight: 600;
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 10px;
            }
            .selected-likely .dx-rank-number {
                background: #22c55e;
                color: white;
            }
            .selected-must-not-miss .dx-rank-number {
                background: #ef4444;
                color: white;
            }
            .revised-diff-feedback {
                background: #f0f9ff;
                border: 1px solid #bae6fd;
                border-radius: 8px;
                padding: 12px;
                margin-top: 16px;
            }
            .revised-diff-feedback.improved {
                background: #f0fdf4;
                border-color: #86efac;
            }
            .revised-diff-feedback.needs-work {
                background: #fef3c7;
                border-color: #fcd34d;
            }
        `;
        
        if (!document.getElementById('reasondx-reorder-styles')) {
            document.head.appendChild(style);
        }
        
        // Add reorder functions to window
        window.moveRevisedDxUp = function(name, category) {
            const list = category === 'likely' ? state.revisedLikely : state.revisedMustNotMiss;
            const index = list.indexOf(name);
            if (index > 0) {
                // Swap with previous item
                [list[index - 1], list[index]] = [list[index], list[index - 1]];
                render();
            }
        };
        
        window.moveRevisedDxDown = function(name, category) {
            const list = category === 'likely' ? state.revisedLikely : state.revisedMustNotMiss;
            const index = list.indexOf(name);
            if (index < list.length - 1) {
                // Swap with next item
                [list[index], list[index + 1]] = [list[index + 1], list[index]];
                render();
            }
        };
        
        // Function to calculate revised differential score with ranking consideration
        window.calculateRevisedDifferentialScore = function(variant) {
            if (!variant || !variant.allDiagnoses) return { score: 0, feedback: [] };
            
            const idealLikely = variant.allDiagnoses.filter(d => d.correctCategory === 'likely').map(d => d.name);
            const idealMustNotMiss = variant.allDiagnoses.filter(d => d.correctCategory === 'must-not-miss').map(d => d.name);
            
            let score = 0;
            let maxScore = 100;
            let feedback = [];
            
            // Points for correct diagnoses in Most Likely (40 points max)
            const correctLikely = state.revisedLikely.filter(dx => idealLikely.includes(dx));
            const likelyPoints = Math.min(40, (correctLikely.length / Math.max(idealLikely.length, 1)) * 40);
            score += likelyPoints;
            
            // Points for correct diagnoses in Must Not Miss (40 points max)
            const correctMNM = state.revisedMustNotMiss.filter(dx => idealMustNotMiss.includes(dx));
            const mnmPoints = Math.min(40, (correctMNM.length / Math.max(idealMustNotMiss.length, 1)) * 40);
            score += mnmPoints;
            
            // Bonus: MNM in Likely is acceptable (partial credit)
            const mnmInLikely = state.revisedLikely.filter(dx => idealMustNotMiss.includes(dx));
            score += mnmInLikely.length * 5; // 5 points each
            
            // Ranking bonus: Is the #1 diagnosis correct? (10 points)
            if (state.revisedLikely.length > 0) {
                const topDx = state.revisedLikely[0];
                if (idealLikely.includes(topDx) || idealMustNotMiss.includes(topDx)) {
                    score += 10;
                    feedback.push({ type: 'good', text: '✓ Top diagnosis is appropriate' });
                } else {
                    feedback.push({ type: 'warning', text: '⚠ Consider if your #1 diagnosis is the most likely' });
                }
            }
            
            // Penalty: Missing must-not-miss diagnoses
            const missedMNM = idealMustNotMiss.filter(dx => 
                !state.revisedMustNotMiss.includes(dx) && !state.revisedLikely.includes(dx)
            );
            if (missedMNM.length > 0) {
                score -= missedMNM.length * 10;
                feedback.push({ type: 'error', text: `⚠ Missing ${missedMNM.length} must-not-miss diagnosis(es)` });
            }
            
            // Check if differential improved from initial
            const initialCorrect = state.selectedLikely.filter(dx => idealLikely.includes(dx)).length +
                                   state.selectedMustNotMiss.filter(dx => idealMustNotMiss.includes(dx)).length;
            const revisedCorrect = correctLikely.length + correctMNM.length + mnmInLikely.length;
            
            if (revisedCorrect > initialCorrect) {
                feedback.push({ type: 'good', text: '✓ Differential improved after history/physical!' });
            } else if (revisedCorrect < initialCorrect) {
                feedback.push({ type: 'warning', text: '⚠ Differential may have gotten less accurate' });
            }
            
            // Reasoning bonus (already handled elsewhere but note it)
            if (state.differentialNotes && state.differentialNotes.split(/\s+/).length >= 10) {
                feedback.push({ type: 'good', text: '✓ Good reasoning provided' });
            }
            
            return {
                score: Math.max(0, Math.min(100, Math.round(score))),
                feedback: feedback,
                correctLikely: correctLikely,
                correctMNM: correctMNM,
                missedMNM: missedMNM,
                improved: revisedCorrect > initialCorrect
            };
        };
        
        // Override the render function for revised differential cards
        window.renderReorderableDxCard = function(name, category, index, total) {
            const safeName = name.replace(/'/g, "\\'").replace(/"/g, "&quot;");
            const isFirst = index === 0;
            const isLast = index === total - 1;
            const categoryClass = category === 'likely' ? 'selected-likely' : 'selected-must-not-miss';
            
            return `
                <div class="dx-card-reorderable ${categoryClass}">
                    <div class="dx-reorder-controls">
                        <button class="dx-reorder-btn" 
                                onclick="moveRevisedDxUp('${safeName}', '${category}')"
                                ${isFirst ? 'disabled' : ''}
                                title="Move up">▲</button>
                        <button class="dx-reorder-btn" 
                                onclick="moveRevisedDxDown('${safeName}', '${category}')"
                                ${isLast ? 'disabled' : ''}
                                title="Move down">▼</button>
                    </div>
                    <span class="dx-rank-number">${index + 1}</span>
                    <span class="flex-1">${name}</span>
                    <button onclick="removeRevisedDx('${safeName}', '${category === 'likely' ? 'likely' : 'must-not-miss'}')" 
                            class="text-red-500 hover:text-red-700 ml-2 text-lg">✕</button>
                </div>
            `;
        };
        
        // Render real-time feedback panel
        window.renderRevisedDiffLiveFeedback = function(variant) {
            if (!variant) return '';
            
            const result = calculateRevisedDifferentialScore(variant);
            const feedbackClass = result.improved ? 'improved' : (result.missedMNM.length > 0 ? 'needs-work' : '');
            
            if (result.feedback.length === 0) return '';
            
            return `
                <div class="revised-diff-feedback ${feedbackClass}">
                    <div class="flex items-center justify-between mb-2">
                        <span class="font-semibold text-sm">Live Feedback</span>
                        <span class="text-xs px-2 py-1 rounded ${result.score >= 70 ? 'bg-green-100 text-green-700' : result.score >= 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}">
                            Score: ~${result.score}%
                        </span>
                    </div>
                    <ul class="text-xs space-y-1">
                        ${result.feedback.map(f => `
                            <li class="${f.type === 'good' ? 'text-green-700' : f.type === 'error' ? 'text-red-700' : 'text-amber-700'}">
                                ${f.text}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        };
        
        console.log('[ReasonDx Bugfixes] Revised differential reordering and feedback enabled');
        
        // Patch the actual renderRevisedDifferentialStage function
        if (typeof window.renderRevisedDifferentialStage === 'function') {
            const originalRender = window.renderRevisedDifferentialStage;
            
            window.renderRevisedDifferentialStage = function() {
                // Get the original HTML
                let html = originalRender();
                
                // If not submitted, replace the dx-card elements with reorderable versions
                if (!state.revisedSubmitted && state.revisedLikely && state.revisedMustNotMiss) {
                    const caseData = cases.find(c => c.id === state.caseType);
                    const variant = caseData?.variants[state.variantKey];
                    
                    // Replace the likely diagnoses section
                    if (state.revisedLikely.length > 0) {
                        const likelyCards = state.revisedLikely.map((name, idx) => 
                            renderReorderableDxCard(name, 'likely', idx, state.revisedLikely.length)
                        ).join('');
                        
                        // Find and replace the likely category content
                        const likelyRegex = /(<div class="category-zone likely[^>]*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<div>\s*<h4[^>]*Must Not Miss)/;
                        html = html.replace(likelyRegex, (match, start, content, end) => {
                            return start + likelyCards + '</div></div><div><h4';
                        });
                    }
                    
                    // Replace the must-not-miss diagnoses section
                    if (state.revisedMustNotMiss.length > 0) {
                        const mnmCards = state.revisedMustNotMiss.map((name, idx) => 
                            renderReorderableDxCard(name, 'must-not-miss', idx, state.revisedMustNotMiss.length)
                        ).join('');
                        
                        // Find and replace the MNM category content
                        const mnmRegex = /(<div class="category-zone must-not-miss[^>]*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<h4[^>]*Available)/;
                        html = html.replace(mnmRegex, (match, start, content, end) => {
                            return start + mnmCards + '</div></div></div><h4';
                        });
                    }
                    
                    // Add live feedback panel before the submit button
                    if (variant) {
                        const feedbackHtml = renderRevisedDiffLiveFeedback(variant);
                        if (feedbackHtml) {
                            html = html.replace(
                                /(<button onclick="submitRevisedDifferential\(\)")/,
                                feedbackHtml + '$1'
                            );
                        }
                    }
                }
                
                return html;
            };
            
            console.log('[ReasonDx Bugfixes] renderRevisedDifferentialStage patched for reordering');
        }
    }

    // ========================================================================
    // FIX 9: ENHANCED REVISED DIFFERENTIAL STAGE
    // Adds: reordering, diagnosis search, real-time feedback, scoring
    // ========================================================================
    
    function patchRevisedDifferentialStage() {
        // Add styles for drag-drop and enhanced UI
        const style = document.createElement('style');
        style.id = 'reasondx-revised-diff-styles';
        style.textContent = `
            .revised-dx-item {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 12px;
                background: white;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                margin-bottom: 8px;
                transition: all 0.2s;
            }
            .revised-dx-item:hover {
                border-color: #3b82f6;
                box-shadow: 0 2px 8px rgba(59,130,246,0.15);
            }
            .revised-dx-item .rank-number {
                width: 24px;
                height: 24px;
                background: #e2e8f0;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 600;
                color: #475569;
                flex-shrink: 0;
            }
            .revised-dx-item.likely .rank-number { background: #dcfce7; color: #166534; }
            .revised-dx-item.mnm .rank-number { background: #fee2e2; color: #991b1b; }
            .revised-dx-arrows {
                display: flex;
                flex-direction: column;
                gap: 2px;
            }
            .revised-dx-arrows button {
                padding: 2px 6px;
                font-size: 10px;
                background: #f1f5f9;
                border: 1px solid #e2e8f0;
                border-radius: 4px;
                cursor: pointer;
                line-height: 1;
            }
            .revised-dx-arrows button:hover:not(:disabled) {
                background: #e2e8f0;
            }
            .revised-dx-arrows button:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
            #revised-dx-search-results {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                max-height: 240px;
                overflow-y: auto;
                z-index: 100;
            }
            #revised-dx-search-results .search-result-item {
                padding: 10px 12px;
                cursor: pointer;
                border-bottom: 1px solid #f1f5f9;
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            #revised-dx-search-results .search-result-item:hover {
                background: #f8fafc;
            }
            #revised-dx-search-results .search-result-item:last-child {
                border-bottom: none;
            }
            .add-dx-btn {
                padding: 4px 8px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 11px;
                font-weight: 500;
                border: 1px solid;
            }
            .add-dx-btn.likely {
                background: #dcfce7;
                border-color: #86efac;
                color: #166534;
            }
            .add-dx-btn.mnm {
                background: #fee2e2;
                border-color: #fecaca;
                color: #991b1b;
            }
            .add-dx-btn:hover {
                filter: brightness(0.95);
            }
        `;
        if (!document.getElementById('reasondx-revised-diff-styles')) {
            document.head.appendChild(style);
        }
        
        // ===== REORDERING FUNCTIONS =====
        window.moveRevisedDx = function(category, index, direction) {
            const list = category === 'likely' ? state.revisedLikely : state.revisedMustNotMiss;
            const newIndex = index + direction;
            
            if (newIndex < 0 || newIndex >= list.length) return;
            
            // Swap items
            const temp = list[index];
            list[index] = list[newIndex];
            list[newIndex] = temp;
            
            if (typeof render === 'function') render();
            console.log('[ReasonDx] Reordered', category, ':', list);
        };
        
        // ===== SEARCH FUNCTIONS =====
        window.revisedDxSearchState = {
            query: '',
            results: [],
            showResults: false
        };
        
        window.searchRevisedDx = function(query) {
            window.revisedDxSearchState.query = query;
            
            if (!query || query.length < 2) {
                window.revisedDxSearchState.results = [];
                window.revisedDxSearchState.showResults = false;
                updateRevisedDxSearchResults();
                return;
            }
            
            const q = query.toLowerCase();
            
            // Get case diagnoses
            const caseData = cases.find(c => c.id === state.caseType);
            const variant = caseData?.variants[state.variantKey];
            const caseDx = variant?.allDiagnoses?.map(d => d.name) || [];
            
            // Common diagnoses database for free-text additions
            const commonDiagnoses = [
                // Cardiac
                'Acute Coronary Syndrome', 'Myocardial Infarction', 'STEMI', 'NSTEMI', 'Unstable Angina', 'Heart Failure', 'CHF Exacerbation', 'Atrial Fibrillation', 'Pericarditis', 'Myocarditis', 'Aortic Dissection', 'Pulmonary Embolism', 'Deep Vein Thrombosis', 'Hypertensive Emergency',
                // Pulmonary
                'Pneumonia', 'Community-Acquired Pneumonia', 'Hospital-Acquired Pneumonia', 'Aspiration Pneumonia', 'COPD Exacerbation', 'Asthma Exacerbation', 'Pneumothorax', 'Tension Pneumothorax', 'Pleural Effusion', 'Pulmonary Edema', 'ARDS', 'Respiratory Failure',
                // GI
                'Appendicitis', 'Cholecystitis', 'Acute Cholecystitis', 'Pancreatitis', 'Acute Pancreatitis', 'Diverticulitis', 'Bowel Obstruction', 'Small Bowel Obstruction', 'Large Bowel Obstruction', 'GI Bleed', 'Upper GI Bleed', 'Lower GI Bleed', 'Peptic Ulcer Disease', 'Gastritis', 'Mesenteric Ischemia', 'Inflammatory Bowel Disease', 'Crohn Disease', 'Ulcerative Colitis', 'C. diff Colitis', 'Esophageal Varices',
                // Neuro
                'Stroke', 'Ischemic Stroke', 'Hemorrhagic Stroke', 'TIA', 'Meningitis', 'Bacterial Meningitis', 'Viral Meningitis', 'Encephalitis', 'Seizure', 'Status Epilepticus', 'Migraine', 'Subarachnoid Hemorrhage', 'Subdural Hematoma', 'Epidural Hematoma', 'Brain Tumor', 'Intracranial Hemorrhage',
                // Infectious
                'Sepsis', 'Severe Sepsis', 'Septic Shock', 'Urosepsis', 'Urinary Tract Infection', 'Pyelonephritis', 'Cellulitis', 'Necrotizing Fasciitis', 'Osteomyelitis', 'Endocarditis', 'Abscess', 'COVID-19', 'Influenza', 'HIV/AIDS',
                // Metabolic/Endocrine
                'Diabetic Ketoacidosis', 'DKA', 'Hyperosmolar Hyperglycemic State', 'HHS', 'Hypoglycemia', 'Thyroid Storm', 'Myxedema Coma', 'Adrenal Crisis', 'Addisonian Crisis', 'Electrolyte Abnormality', 'Hyponatremia', 'Hypernatremia', 'Hypokalemia', 'Hyperkalemia', 'Dehydration',
                // Renal
                'Acute Kidney Injury', 'AKI', 'Chronic Kidney Disease', 'CKD', 'Nephrolithiasis', 'Kidney Stone', 'Urinary Retention',
                // MSK/Trauma
                'Fracture', 'Hip Fracture', 'Compartment Syndrome', 'Septic Arthritis', 'Gout', 'Pseudogout', 'Rhabdomyolysis',
                // Psych/Neuro
                'Delirium', 'Dementia', 'Alcohol Withdrawal', 'Drug Overdose', 'Opioid Overdose',
                // Heme/Onc
                'Anemia', 'Sickle Cell Crisis', 'Leukemia', 'Lymphoma', 'Tumor Lysis Syndrome', 'Neutropenic Fever',
                // Other
                'Anaphylaxis', 'Drug Reaction', 'Allergic Reaction', 'Malignancy', 'Autoimmune Disease', 'SLE', 'Vasculitis'
            ];
            
            // Combine and filter - prioritize case diagnoses
            const allDx = [...new Set([...caseDx, ...commonDiagnoses])];
            const results = allDx.filter(dx => 
                dx.toLowerCase().includes(q) &&
                !state.revisedLikely.includes(dx) &&
                !state.revisedMustNotMiss.includes(dx)
            ).slice(0, 10);
            
            window.revisedDxSearchState.results = results;
            window.revisedDxSearchState.showResults = results.length > 0;
            updateRevisedDxSearchResults();
        };
        
        window.addSearchedDx = function(dxName, category) {
            if (category === 'likely') {
                if (!state.revisedLikely.includes(dxName)) {
                    state.revisedLikely.push(dxName);
                }
            } else {
                if (!state.revisedMustNotMiss.includes(dxName)) {
                    state.revisedMustNotMiss.push(dxName);
                }
            }
            
            // Clear search
            window.revisedDxSearchState.query = '';
            window.revisedDxSearchState.results = [];
            window.revisedDxSearchState.showResults = false;
            
            const searchInput = document.getElementById('revised-dx-search-input');
            if (searchInput) searchInput.value = '';
            
            if (typeof render === 'function') render();
        };
        
        window.updateRevisedDxSearchResults = function() {
            const container = document.getElementById('revised-dx-search-results');
            if (!container) return;
            
            if (!window.revisedDxSearchState.showResults || window.revisedDxSearchState.results.length === 0) {
                container.innerHTML = '';
                container.style.display = 'none';
                return;
            }
            
            container.style.display = 'block';
            container.innerHTML = window.revisedDxSearchState.results.map(dx => {
                const safeDx = dx.replace(/'/g, "\\'");
                return `
                    <div class="search-result-item">
                        <span>${dx}</span>
                        <div style="display:flex;gap:8px;">
                            <button class="add-dx-btn likely" onclick="event.stopPropagation();addSearchedDx('${safeDx}', 'likely')">
                                + Likely
                            </button>
                            <button class="add-dx-btn mnm" onclick="event.stopPropagation();addSearchedDx('${safeDx}', 'mnm')">
                                + Must Not Miss
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        };
        
        // Close search results when clicking outside
        document.addEventListener('click', function(e) {
            const searchContainer = document.getElementById('revised-dx-search-results');
            const searchInput = document.getElementById('revised-dx-search-input');
            if (searchContainer && searchInput && !searchContainer.contains(e.target) && e.target !== searchInput) {
                searchContainer.style.display = 'none';
            }
        });
        
        // ===== FEEDBACK CALCULATION =====
        window.calculateRevisedDiffFeedback = function() {
            if (!state.caseType || !state.variantKey) return null;
            
            const caseData = cases.find(c => c.id === state.caseType);
            const variant = caseData?.variants[state.variantKey];
            if (!variant?.allDiagnoses) return null;
            
            const idealLikely = variant.allDiagnoses.filter(d => d.correctCategory === 'likely').map(d => d.name);
            const idealMNM = variant.allDiagnoses.filter(d => d.correctCategory === 'must-not-miss').map(d => d.name);
            
            // Calculate initial score
            const initialLikelyCorrect = state.selectedLikely.filter(dx => idealLikely.includes(dx) || idealMNM.includes(dx)).length;
            const initialMNMCorrect = state.selectedMustNotMiss.filter(dx => idealMNM.includes(dx)).length;
            const initialMNMMissed = idealMNM.filter(dx => !state.selectedMustNotMiss.includes(dx) && !state.selectedLikely.includes(dx)).length;
            const initialScore = (initialLikelyCorrect + initialMNMCorrect * 2) - (initialMNMMissed * 3);
            
            // Calculate revised score
            const revisedLikelyCorrect = state.revisedLikely.filter(dx => idealLikely.includes(dx) || idealMNM.includes(dx)).length;
            const revisedMNMCorrect = state.revisedMustNotMiss.filter(dx => idealMNM.includes(dx)).length;
            const revisedMNMMissed = idealMNM.filter(dx => !state.revisedMustNotMiss.includes(dx) && !state.revisedLikely.includes(dx)).length;
            const revisedScore = (revisedLikelyCorrect + revisedMNMCorrect * 2) - (revisedMNMMissed * 3);
            
            // Check rank order (is #1 most likely actually correct?)
            let rankBonus = 0;
            if (state.revisedLikely.length > 0) {
                const topDx = state.revisedLikely[0];
                const correctDx = variant.correctDiagnosis || idealLikely[0];
                // Check if top dx matches correct diagnosis (fuzzy match)
                if (correctDx && (topDx.toLowerCase().includes(correctDx.toLowerCase()) || 
                    correctDx.toLowerCase().includes(topDx.toLowerCase()) ||
                    topDx === idealLikely[0])) {
                    rankBonus = 5;
                }
            }
            
            const improvement = (revisedScore + rankBonus) - initialScore;
            
            return {
                initialScore,
                revisedScore: revisedScore + rankBonus,
                improvement,
                status: improvement > 0 ? 'improved' : improvement < 0 ? 'worse' : 'same',
                idealLikely,
                idealMNM,
                missedMNM: idealMNM.filter(dx => !state.revisedMustNotMiss.includes(dx) && !state.revisedLikely.includes(dx)),
                correctInLikely: state.revisedLikely.filter(dx => idealLikely.includes(dx)),
                correctInMNM: state.revisedMustNotMiss.filter(dx => idealMNM.includes(dx)),
                topDxCorrect: rankBonus > 0
            };
        };
        
        // ===== INJECT SEARCH BOX INTO REVISED DIFFERENTIAL =====
        // This runs after render to add the search functionality
        window.injectRevisedDiffEnhancements = function() {
            // Only inject on revised-differential screen
            if (state.screen !== 'revised-differential' || state.revisedSubmitted) return;
            
            // Check if search box already exists
            if (document.getElementById('revised-dx-search-input')) return;
            
            // Find the Category Zones comment or the grid
            const categoryZonesGrid = document.querySelector('.grid.md\\:grid-cols-2.gap-4.mb-6');
            if (!categoryZonesGrid) return;
            
            // Create search container
            const searchContainer = document.createElement('div');
            searchContainer.className = 'mb-4 relative';
            searchContainer.innerHTML = `
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-lg">🔍</span>
                    <span class="font-semibold text-gray-700">Search & Add Diagnoses</span>
                    <span class="text-xs text-gray-400">(type any diagnosis)</span>
                </div>
                <input type="text" 
                       id="revised-dx-search-input"
                       class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                       placeholder="Type to search for any diagnosis (e.g., 'sepsis', 'PE', 'appendicitis')..." 
                       oninput="searchRevisedDx(this.value)"
                       autocomplete="off">
                <div id="revised-dx-search-results"></div>
            `;
            
            // Insert before category zones
            categoryZonesGrid.parentNode.insertBefore(searchContainer, categoryZonesGrid);
            
            // Update list displays to include reordering
            updateRevisedListsWithReordering();
        };
        
        window.updateRevisedListsWithReordering = function() {
            // Find the category zones
            const likelyZone = document.querySelector('.category-zone.likely');
            const mnmZone = document.querySelector('.category-zone.must-not-miss');
            
            if (likelyZone && state.revisedLikely.length > 0) {
                likelyZone.innerHTML = state.revisedLikely.map((dx, idx) => {
                    const safeName = dx.replace(/'/g, "\\'").replace(/"/g, "&quot;");
                    return `
                        <div class="revised-dx-item likely">
                            <span class="rank-number">${idx + 1}</span>
                            <span style="flex:1;">${dx}</span>
                            <div class="revised-dx-arrows">
                                <button onclick="moveRevisedDx('likely', ${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>▲</button>
                                <button onclick="moveRevisedDx('likely', ${idx}, 1)" ${idx === state.revisedLikely.length - 1 ? 'disabled' : ''}>▼</button>
                            </div>
                            <button onclick="removeRevisedDx('${safeName}', 'likely')" class="text-red-500 hover:text-red-700 ml-2 text-lg">×</button>
                        </div>
                    `;
                }).join('');
            }
            
            if (mnmZone && state.revisedMustNotMiss.length > 0) {
                mnmZone.innerHTML = state.revisedMustNotMiss.map((dx, idx) => {
                    const safeName = dx.replace(/'/g, "\\'").replace(/"/g, "&quot;");
                    return `
                        <div class="revised-dx-item mnm">
                            <span class="rank-number">${idx + 1}</span>
                            <span style="flex:1;">${dx}</span>
                            <div class="revised-dx-arrows">
                                <button onclick="moveRevisedDx('must-not-miss', ${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>▲</button>
                                <button onclick="moveRevisedDx('must-not-miss', ${idx}, 1)" ${idx === state.revisedMustNotMiss.length - 1 ? 'disabled' : ''}>▼</button>
                            </div>
                            <button onclick="removeRevisedDx('${safeName}', 'must-not-miss')" class="text-red-500 hover:text-red-700 ml-2 text-lg">×</button>
                        </div>
                    `;
                }).join('');
            }
            
            // Also update header text to indicate reordering
            const likelyHeader = document.querySelector('h4.font-semibold.text-green-700');
            if (likelyHeader && !likelyHeader.innerHTML.includes('reorder')) {
                likelyHeader.innerHTML = likelyHeader.innerHTML.replace('</h4>', ' <span class="text-xs text-gray-400 font-normal">↕ drag to reorder</span></h4>');
            }
        };
        
        // Hook into render cycle
        const originalRender = window.render;
        if (typeof originalRender === 'function') {
            window.render = function() {
                originalRender.apply(this, arguments);
                // Inject enhancements after render
                setTimeout(injectRevisedDiffEnhancements, 50);
            };
            console.log('[ReasonDx Bugfixes] Hooked into render for revised differential enhancements');
        }
        
        console.log('[ReasonDx Bugfixes] Enhanced revised differential stage loaded');
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
            
            // NEW PATCHES
            patchPatientNameDisplay();
            patchCaseFrameAutoFeedback();
            patchHideMNMFromSearch();
            patchUTIQuestionMatching();
            patchRevisedDifferentialStage();
            patchRevisedDifferentialReordering();
            
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
        patchPatientNameDisplay,
        patchCaseFrameAutoFeedback,
        patchHideMNMFromSearch,
        patchUTIQuestionMatching,
        patchRevisedDifferentialReordering,
        getFullPatientName,
        PATIENT_FULL_NAMES,
        reinitialize: initialize,
        version: '1.3.0'
    };

    // Start initialization
    initialize();

    console.log('[ReasonDx Bugfixes] Module loaded');

})();
