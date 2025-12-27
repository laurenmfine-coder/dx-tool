// ============================================================
// REASONDX: WHAT IF PATHWAYS MODULE
// Version: 1.0.0
// Date: December 27, 2025
// 
// This module adds branching "What If" scenarios to cases,
// allowing students to explore how clinical reasoning changes
// when key variables are modified.
//
// INTEGRATION: Add this script tag to index.html after other
// ReasonDx modules (before </body>):
// <script src="reasondx-what-if-pathways.js"></script>
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // CONFIGURATION
    // ============================================================
    
    const CONFIG = {
        maxWhatIfsPerCase: 3,
        defaultDepth: 'full',  // 'quick', 'diagnostic', or 'full'
        partialCreditPercent: 50,
        bonusPointsPerWhatIf: 10
    };

    // ============================================================
    // WHAT IF STATE MANAGEMENT
    // ============================================================
    
    // Wait for state to be available, then extend it
    function initWhatIfState() {
        if (typeof window.state === 'undefined') {
            setTimeout(initWhatIfState, 100);
            return;
        }
        
        // Initialize What If state
        if (!window.state.whatIf) {
            window.state.whatIf = {
                active: false,
                currentScenarioId: null,
                mainCaseSnapshot: null,
                completedScenarios: [],
                inProgressScenario: null,
                scores: {}
            };
        }
        
        console.log('✅ What If state initialized');
    }
    
    // Initialize on load
    initWhatIfState();

    // ============================================================
    // WHAT IF SCENARIO DATA STRUCTURE
    // ============================================================
    
    /**
     * What If Scenario Schema:
     * {
     *   id: "whatif_fever_flank",
     *   title: "What if she had fever and flank pain?",
     *   description: "Explore how systemic symptoms change the diagnosis",
     *   icon: "🌡️",
     *   estimatedMinutes: 10,
     *   required: false,  // true for pre-class cases
     *   depth: "full",    // "quick", "diagnostic", or "full"
     *   
     *   modifications: {
     *     setting: { original: "urgent_care", modified: "emergency_department" },
     *     chiefComplaint: { 
     *       original: "...", 
     *       modified: "...",
     *       additions: ["back pain", "chills"]
     *     },
     *     vitals: {
     *       temp: { original: 98.8, modified: 101.8 },
     *       hr: { original: 76, modified: 102 }
     *     },
     *     // Can also modify history answers, PE findings, lab results
     *   },
     *   
     *   expectedReasoning: {
     *     topDiagnosis: "pyelonephritis",
     *     mustNotMiss: ["sepsis", "renal_abscess"],
     *     keyDiscriminators: ["fever", "flank_pain", "tachycardia"],
     *     shouldDrop: ["uncomplicated_cystitis"],
     *     shouldRise: ["pyelonephritis", "sepsis"]
     *   },
     *   
     *   feedback: {
     *     correct: "Excellent! You correctly identified...",
     *     partial: "Good start, but consider...",
     *     incorrect: "Remember that fever and flank pain suggest..."
     *   },
     *   
     *   comparisonNotes: "Without fever or flank pain, uncomplicated cystitis..."
     * }
     */

    // ============================================================
    // CORE FUNCTIONS
    // ============================================================

    /**
     * Check if the current case has What If scenarios available
     */
    window.hasWhatIfScenarios = function() {
        const currentCase = window.state?.currentCase || window.currentCase;
        return currentCase?.whatIfScenarios && currentCase.whatIfScenarios.length > 0;
    };

    /**
     * Get available What If scenarios for current case
     */
    window.getWhatIfScenarios = function() {
        const currentCase = window.state?.currentCase || window.currentCase;
        if (!currentCase?.whatIfScenarios) return [];
        
        return currentCase.whatIfScenarios.map(scenario => ({
            ...scenario,
            isCompleted: window.state.whatIf.completedScenarios.includes(scenario.id),
            isInProgress: window.state.whatIf.inProgressScenario === scenario.id
        }));
    };

    /**
     * Enter a What If scenario
     */
    window.enterWhatIfScenario = function(scenarioId) {
        const currentCase = window.state?.currentCase || window.currentCase;
        const scenario = currentCase?.whatIfScenarios?.find(s => s.id === scenarioId);
        
        if (!scenario) {
            console.error('What If scenario not found:', scenarioId);
            return false;
        }
        
        // Save current main case state
        window.state.whatIf.mainCaseSnapshot = {
            rankedDifferential: JSON.parse(JSON.stringify(window.state.rankedDifferential || [])),
            currentStage: window.state.currentStage,
            stageData: JSON.parse(JSON.stringify(window.state.stageData || {})),
            selectedHistory: JSON.parse(JSON.stringify(window.state.selectedHistory || [])),
            selectedExams: JSON.parse(JSON.stringify(window.state.selectedExams || [])),
            selectedTests: JSON.parse(JSON.stringify(window.state.selectedTests || []))
        };
        
        // Set What If state
        window.state.whatIf.active = true;
        window.state.whatIf.currentScenarioId = scenarioId;
        window.state.whatIf.inProgressScenario = scenarioId;
        
        // Reset differential for What If scenario
        window.state.rankedDifferential = [];
        window.state.currentStage = 'differential';
        
        // Apply scenario modifications to case display
        applyWhatIfModifications(scenario);
        
        // Log for analytics
        logWhatIfEvent('enter', scenarioId);
        
        // Re-render
        if (typeof window.render === 'function') {
            window.render();
        }
        
        // Close the scenario selection modal
        closeWhatIfModal();
        
        return true;
    };

    /**
     * Apply What If modifications to the displayed case
     */
    function applyWhatIfModifications(scenario) {
        const mods = scenario.modifications;
        
        // Store original values for comparison display
        window.state.whatIf.originalValues = {};
        
        // Apply setting change
        if (mods.setting) {
            window.state.whatIf.originalValues.setting = window.state.currentCase?.encounter?.setting;
            if (window.state.currentCase?.encounter) {
                window.state.currentCase.encounter.setting = mods.setting.modified;
                window.state.currentCase.encounter.settingDisplay = getSettingDisplayName(mods.setting.modified);
            }
        }
        
        // Apply vital sign changes
        if (mods.vitals) {
            window.state.whatIf.originalValues.vitals = {};
            Object.keys(mods.vitals).forEach(vital => {
                window.state.whatIf.originalValues.vitals[vital] = window.state.currentCase?.vitals?.[vital];
                if (window.state.currentCase?.vitals) {
                    window.state.currentCase.vitals[vital] = mods.vitals[vital].modified;
                }
            });
        }
        
        // Apply chief complaint change
        if (mods.chiefComplaint) {
            window.state.whatIf.originalValues.chiefComplaint = window.state.currentCase?.chiefComplaint;
            if (window.state.currentCase) {
                window.state.currentCase.chiefComplaint = mods.chiefComplaint.modified;
            }
        }
        
        // Store the scenario for reference
        window.state.whatIf.currentScenario = scenario;
    }

    /**
     * Exit What If scenario and return to main case
     */
    window.exitWhatIfScenario = function(saveProgress = true) {
        if (!window.state.whatIf.active) return;
        
        const scenarioId = window.state.whatIf.currentScenarioId;
        const scenario = window.state.whatIf.currentScenario;
        
        // Calculate and save score for this What If
        if (saveProgress && window.state.rankedDifferential?.length > 0) {
            const score = calculateWhatIfScore(scenario);
            window.state.whatIf.scores[scenarioId] = score;
            
            // Mark as completed
            if (!window.state.whatIf.completedScenarios.includes(scenarioId)) {
                window.state.whatIf.completedScenarios.push(scenarioId);
            }
        }
        
        // Log for analytics
        logWhatIfEvent('exit', scenarioId, { saveProgress, completed: saveProgress });
        
        // Restore main case state
        const snapshot = window.state.whatIf.mainCaseSnapshot;
        if (snapshot) {
            window.state.rankedDifferential = snapshot.rankedDifferential;
            window.state.currentStage = snapshot.currentStage;
            window.state.stageData = snapshot.stageData;
            window.state.selectedHistory = snapshot.selectedHistory;
            window.state.selectedExams = snapshot.selectedExams;
            window.state.selectedTests = snapshot.selectedTests;
        }
        
        // Restore original case values
        restoreOriginalCaseValues();
        
        // Clear What If state
        window.state.whatIf.active = false;
        window.state.whatIf.currentScenarioId = null;
        window.state.whatIf.inProgressScenario = null;
        window.state.whatIf.mainCaseSnapshot = null;
        window.state.whatIf.currentScenario = null;
        
        // Re-render
        if (typeof window.render === 'function') {
            window.render();
        }
    };

    /**
     * Restore original case values after exiting What If
     */
    function restoreOriginalCaseValues() {
        const original = window.state.whatIf.originalValues;
        if (!original) return;
        
        if (original.setting && window.state.currentCase?.encounter) {
            window.state.currentCase.encounter.setting = original.setting;
            window.state.currentCase.encounter.settingDisplay = getSettingDisplayName(original.setting);
        }
        
        if (original.vitals && window.state.currentCase?.vitals) {
            Object.keys(original.vitals).forEach(vital => {
                window.state.currentCase.vitals[vital] = original.vitals[vital];
            });
        }
        
        if (original.chiefComplaint && window.state.currentCase) {
            window.state.currentCase.chiefComplaint = original.chiefComplaint;
        }
        
        window.state.whatIf.originalValues = null;
    }

    // ============================================================
    // SCORING
    // ============================================================

    /**
     * Calculate score for a What If scenario
     */
    function calculateWhatIfScore(scenario) {
        if (!scenario?.expectedReasoning) return { total: 0, breakdown: {} };
        
        const expected = scenario.expectedReasoning;
        const studentDiff = window.state.rankedDifferential || [];
        
        let score = {
            total: 0,
            maxPossible: 100,
            breakdown: {
                topDiagnosis: 0,
                mustNotMiss: 0,
                appropriateChanges: 0,
                flexibilityBonus: 0
            }
        };
        
        // Check if top diagnosis is correct (40 points)
        if (studentDiff.length > 0) {
            const studentTop = studentDiff[0].name.toLowerCase();
            if (studentTop.includes(expected.topDiagnosis.toLowerCase()) ||
                expected.topDiagnosis.toLowerCase().includes(studentTop)) {
                score.breakdown.topDiagnosis = 40;
            }
        }
        
        // Check must-not-miss diagnoses (30 points)
        const studentDxNames = studentDiff.map(d => d.name.toLowerCase());
        const mustNotMissFound = expected.mustNotMiss.filter(mnm => 
            studentDxNames.some(sd => sd.includes(mnm.toLowerCase()) || mnm.toLowerCase().includes(sd))
        );
        score.breakdown.mustNotMiss = Math.round((mustNotMissFound.length / expected.mustNotMiss.length) * 30);
        
        // Check if diagnoses that should rise/drop did (20 points)
        let changeScore = 0;
        if (expected.shouldRise) {
            expected.shouldRise.forEach((dx, idx) => {
                const studentIdx = studentDxNames.findIndex(sd => 
                    sd.includes(dx.toLowerCase()) || dx.toLowerCase().includes(sd)
                );
                if (studentIdx !== -1 && studentIdx < 3) {
                    changeScore += 5;
                }
            });
        }
        score.breakdown.appropriateChanges = Math.min(changeScore, 20);
        
        // Flexibility bonus - did they actually change their thinking? (10 points)
        const mainCaseDiff = window.state.whatIf.mainCaseSnapshot?.rankedDifferential || [];
        if (mainCaseDiff.length > 0 && studentDiff.length > 0) {
            const mainTop = mainCaseDiff[0]?.name?.toLowerCase();
            const whatIfTop = studentDiff[0]?.name?.toLowerCase();
            if (mainTop !== whatIfTop) {
                score.breakdown.flexibilityBonus = 10;
            }
        }
        
        // Calculate total
        score.total = Object.values(score.breakdown).reduce((a, b) => a + b, 0);
        
        return score;
    }

    /**
     * Calculate reasoning flexibility score across all What Ifs
     */
    window.calculateReasoningFlexibility = function() {
        const scores = window.state.whatIf.scores;
        const scenarios = Object.keys(scores);
        
        if (scenarios.length === 0) return null;
        
        const totalFlexibility = scenarios.reduce((sum, id) => {
            return sum + (scores[id].breakdown?.flexibilityBonus || 0);
        }, 0);
        
        const maxFlexibility = scenarios.length * 10;
        
        return {
            score: totalFlexibility,
            maxPossible: maxFlexibility,
            percentage: Math.round((totalFlexibility / maxFlexibility) * 100),
            scenariosCompleted: scenarios.length
        };
    };

    // ============================================================
    // UI COMPONENTS
    // ============================================================

    /**
     * Render the What If button (shown during case)
     */
    window.renderWhatIfButton = function() {
        if (!window.hasWhatIfScenarios()) return '';
        
        const scenarios = window.getWhatIfScenarios();
        const completedCount = scenarios.filter(s => s.isCompleted).length;
        const totalCount = scenarios.length;
        const hasRequired = scenarios.some(s => s.required && !s.isCompleted);
        
        // Don't show button if already in a What If
        if (window.state.whatIf.active) {
            return renderWhatIfActiveBar();
        }
        
        return `
            <button onclick="window.openWhatIfModal()"
                    class="fixed bottom-20 right-4 z-40 flex items-center gap-2 px-4 py-3 
                           bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg
                           transition-all transform hover:scale-105
                           ${hasRequired ? 'animate-pulse' : ''}">
                <span class="text-xl">🔀</span>
                <span class="font-medium">What If?</span>
                <span class="bg-purple-800 px-2 py-0.5 rounded-full text-sm">
                    ${completedCount}/${totalCount}
                </span>
            </button>
        `;
    };

    /**
     * Render the active What If indicator bar
     */
    function renderWhatIfActiveBar() {
        const scenario = window.state.whatIf.currentScenario;
        if (!scenario) return '';
        
        return `
            <div class="fixed top-0 left-0 right-0 z-50 bg-purple-600 text-white px-4 py-2 
                        flex items-center justify-between shadow-lg">
                <div class="flex items-center gap-3">
                    <span class="text-xl">${scenario.icon || '🔀'}</span>
                    <div>
                        <div class="font-bold text-sm">WHAT IF SCENARIO</div>
                        <div class="text-purple-200 text-xs">${scenario.title}</div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="window.showWhatIfExitConfirm()"
                            class="px-3 py-1 bg-purple-800 hover:bg-purple-900 rounded text-sm">
                        Return to Main Case
                    </button>
                </div>
            </div>
            <div class="h-14"></div> <!-- Spacer for fixed bar -->
        `;
    }

    /**
     * Open the What If scenario selection modal
     */
    window.openWhatIfModal = function() {
        const scenarios = window.getWhatIfScenarios();
        
        const modal = document.createElement('div');
        modal.id = 'whatif-modal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50';
        
        modal.innerHTML = `
            <div class="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden">
                <!-- Header -->
                <div class="bg-purple-600 text-white px-6 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">🔀</span>
                            <div>
                                <h2 class="text-xl font-bold">What If Scenarios</h2>
                                <p class="text-purple-200 text-sm">Explore alternate presentations</p>
                            </div>
                        </div>
                        <button onclick="window.closeWhatIfModal()" 
                                class="text-purple-200 hover:text-white text-2xl">&times;</button>
                    </div>
                </div>
                
                <!-- Scenarios List -->
                <div class="p-6 overflow-y-auto max-h-[60vh]">
                    <p class="text-gray-600 mb-4 text-sm">
                        How would your clinical reasoning change if the presentation was different?
                        Select a scenario to explore.
                    </p>
                    
                    <div class="space-y-3">
                        ${scenarios.map(scenario => renderWhatIfCard(scenario)).join('')}
                    </div>
                </div>
                
                <!-- Footer -->
                <div class="bg-gray-50 px-6 py-3 border-t">
                    <p class="text-xs text-gray-500 text-center">
                        ${scenarios.some(s => s.required) ? 
                            '⚠️ Complete required scenarios before class' : 
                            'What If scenarios are optional but earn bonus points'}
                    </p>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeWhatIfModal();
        });
    };

    /**
     * Render a single What If scenario card
     */
    function renderWhatIfCard(scenario) {
        const statusClass = scenario.isCompleted ? 'border-green-300 bg-green-50' :
                           scenario.isInProgress ? 'border-yellow-300 bg-yellow-50' :
                           scenario.required ? 'border-red-300 bg-red-50' :
                           'border-gray-200 hover:border-purple-300 hover:bg-purple-50';
        
        const statusBadge = scenario.isCompleted ? 
            '<span class="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">✓ Completed</span>' :
            scenario.isInProgress ?
            '<span class="bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">In Progress</span>' :
            scenario.required ?
            '<span class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">Required</span>' :
            '<span class="bg-gray-400 text-white text-xs px-2 py-0.5 rounded-full">Optional</span>';
        
        const depthLabel = scenario.depth === 'full' ? 'Full pathway' :
                          scenario.depth === 'diagnostic' ? 'Dx + History + PE' :
                          'Quick pivot';
        
        return `
            <div class="border-2 rounded-lg p-4 cursor-pointer transition-all ${statusClass}"
                 onclick="window.enterWhatIfScenario('${scenario.id}')">
                <div class="flex items-start gap-3">
                    <span class="text-2xl">${scenario.icon || '❓'}</span>
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-1">
                            <h3 class="font-bold text-gray-800">${scenario.title}</h3>
                            ${statusBadge}
                        </div>
                        <p class="text-sm text-gray-600 mb-2">${scenario.description || ''}</p>
                        <div class="flex items-center gap-3 text-xs text-gray-500">
                            <span>⏱️ ~${scenario.estimatedMinutes || 10} min</span>
                            <span>📊 ${depthLabel}</span>
                        </div>
                        ${scenario.isCompleted && window.state.whatIf.scores[scenario.id] ? 
                            `<div class="mt-2 text-sm text-green-600 font-medium">
                                Score: ${window.state.whatIf.scores[scenario.id].total}/100
                            </div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Close the What If modal
     */
    window.closeWhatIfModal = function() {
        const modal = document.getElementById('whatif-modal');
        if (modal) modal.remove();
    };

    /**
     * Show exit confirmation dialog
     */
    window.showWhatIfExitConfirm = function() {
        const modal = document.createElement('div');
        modal.id = 'whatif-exit-confirm';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50';
        
        modal.innerHTML = `
            <div class="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Return to Main Case?</h3>
                <p class="text-gray-600 mb-4">
                    You can save your progress and return to this What If later, or 
                    continue to complete it now.
                </p>
                <div class="flex gap-3">
                    <button onclick="document.getElementById('whatif-exit-confirm').remove()"
                            class="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        Continue What If
                    </button>
                    <button onclick="window.exitWhatIfScenario(true); document.getElementById('whatif-exit-confirm').remove()"
                            class="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                        Save & Return
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    };

    /**
     * Render What If comparison summary (shown at end of case)
     */
    window.renderWhatIfSummary = function() {
        const scenarios = window.getWhatIfScenarios();
        const completedScenarios = scenarios.filter(s => s.isCompleted);
        
        if (completedScenarios.length === 0) return '';
        
        const flexScore = window.calculateReasoningFlexibility();
        
        return `
            <div class="bg-purple-50 rounded-xl p-6 mt-6 border-2 border-purple-200">
                <h3 class="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                    <span>🔀</span> What If Pathway Results
                </h3>
                
                <!-- Flexibility Score -->
                <div class="bg-white rounded-lg p-4 mb-4">
                    <div class="flex items-center justify-between mb-2">
                        <span class="font-medium text-gray-700">Reasoning Flexibility Score</span>
                        <span class="text-2xl font-bold text-purple-600">${flexScore?.percentage || 0}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                        <div class="bg-purple-600 h-3 rounded-full transition-all" 
                             style="width: ${flexScore?.percentage || 0}%"></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-2">
                        Measures how well you adapted your clinical reasoning to different scenarios
                    </p>
                </div>
                
                <!-- Scenario Breakdown -->
                <div class="space-y-3">
                    ${completedScenarios.map(s => renderScenarioResult(s)).join('')}
                </div>
            </div>
        `;
    };

    /**
     * Render individual scenario result
     */
    function renderScenarioResult(scenario) {
        const score = window.state.whatIf.scores[scenario.id];
        if (!score) return '';
        
        return `
            <div class="bg-white rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                        <span>${scenario.icon || '❓'}</span>
                        <span class="font-medium text-gray-800">${scenario.title}</span>
                    </div>
                    <span class="font-bold ${score.total >= 70 ? 'text-green-600' : score.total >= 50 ? 'text-yellow-600' : 'text-red-600'}">
                        ${score.total}/100
                    </span>
                </div>
                <div class="grid grid-cols-4 gap-2 text-xs">
                    <div class="text-center p-2 bg-gray-50 rounded">
                        <div class="font-bold text-gray-700">${score.breakdown?.topDiagnosis || 0}</div>
                        <div class="text-gray-500">Top Dx</div>
                    </div>
                    <div class="text-center p-2 bg-gray-50 rounded">
                        <div class="font-bold text-gray-700">${score.breakdown?.mustNotMiss || 0}</div>
                        <div class="text-gray-500">Must-Not-Miss</div>
                    </div>
                    <div class="text-center p-2 bg-gray-50 rounded">
                        <div class="font-bold text-gray-700">${score.breakdown?.appropriateChanges || 0}</div>
                        <div class="text-gray-500">Dx Changes</div>
                    </div>
                    <div class="text-center p-2 bg-gray-50 rounded">
                        <div class="font-bold text-gray-700">${score.breakdown?.flexibilityBonus || 0}</div>
                        <div class="text-gray-500">Flexibility</div>
                    </div>
                </div>
            </div>
        `;
    }

    // ============================================================
    // UTILITIES
    // ============================================================

    /**
     * Get display name for clinical setting
     */
    function getSettingDisplayName(setting) {
        const settingMap = {
            'emergency_department': 'Emergency Department',
            'urgent_care': 'Urgent Care Visit',
            'primary_care': 'Primary Care Office',
            'hospital_inpatient': 'Hospital Inpatient',
            'icu': 'Intensive Care Unit',
            'ob_clinic': 'OB Clinic Visit',
            'nursing_facility': 'Nursing Facility',
            'telehealth': 'Telehealth Visit',
            'student_health': 'Student Health Center',
            'occupational_health': 'Occupational Health'
        };
        return settingMap[setting] || setting;
    }

    /**
     * Log What If events for analytics
     */
    function logWhatIfEvent(action, scenarioId, data = {}) {
        const event = {
            timestamp: Date.now(),
            action: action,
            scenarioId: scenarioId,
            caseId: window.state.currentCase?.id,
            ...data
        };
        
        // Store in state for RPFS integration
        if (!window.state.whatIfEvents) window.state.whatIfEvents = [];
        window.state.whatIfEvents.push(event);
        
        console.log('What If Event:', event);
        
        // If RPFS logging exists, use it
        if (typeof window.rpfsLogInteraction === 'function') {
            window.rpfsLogInteraction('whatif_' + action, 'whatif', { scenarioId, ...data });
        }
    }

    // ============================================================
    // INTEGRATION HOOKS
    // ============================================================

    /**
     * Hook into the main render function to add What If UI
     */
    const originalRender = window.render;
    if (typeof originalRender === 'function') {
        window.render = function() {
            originalRender.apply(this, arguments);
            
            // Inject What If button after render
            setTimeout(() => {
                const existingButton = document.getElementById('whatif-floating-btn');
                if (existingButton) existingButton.remove();
                
                if (window.hasWhatIfScenarios()) {
                    const buttonContainer = document.createElement('div');
                    buttonContainer.id = 'whatif-floating-btn';
                    buttonContainer.innerHTML = window.renderWhatIfButton();
                    document.body.appendChild(buttonContainer);
                }
            }, 100);
        };
    }

    // ============================================================
    // INITIALIZATION
    // ============================================================

    console.log('✅ ReasonDx What If Pathways module loaded');
    console.log('   - Use window.openWhatIfModal() to open scenario selection');
    console.log('   - Use window.enterWhatIfScenario(id) to enter a scenario');
    console.log('   - Use window.exitWhatIfScenario() to return to main case');

})();
