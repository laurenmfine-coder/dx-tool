// ============================================================================
// REASONDX MASTER FEEDBACK INTEGRATION
// Unified System Connecting All 31 Feedback Modules
// Version 1.0 - December 2025
// ============================================================================
//
// This file serves as the BRAIN that orchestrates all 31 feedback innovations.
// It handles:
//   1. Event routing - Case events trigger appropriate feedback modules
//   2. State management - Unified state across all modules
//   3. Student preferences - Personalized experience
//   4. Module dependencies - Ensures modules work together
//   5. Lifecycle management - Initialization, updates, cleanup
//
// ============================================================================

// ============================================================================
// SECTION 1: CORE ORCHESTRATOR
// ============================================================================

const ReasonDxFeedbackOrchestrator = {

    // ========================================================================
    // SYSTEM STATE
    // ========================================================================
    
    state: {
        initialized: false,
        currentCase: null,
        currentStudent: null,
        sessionStart: null,
        activeModules: new Set(),
        eventLog: [],
        pendingFeedback: [],
        feedbackHistory: []
    },

    // ========================================================================
    // MODULE REGISTRY - All 31 Modules Organized by Category
    // ========================================================================

    modules: {
        // Real-time feedback (during case)
        realtime: {
            AttendingPersona: { priority: 1, description: 'Mentor voice feedback' },
            ThinkingAnnotations: { priority: 2, description: 'Expert thinking bubbles' },
            SaveCounter: { priority: 3, description: 'Life-saving celebrations' },
            LearningMoments: { priority: 4, description: 'Mistake reframing' },
            CognitiveLoadDashboard: { priority: 5, description: 'Brain status monitor' },
            DifferentialGraveyard: { priority: 6, description: 'Ruled-out tracking' },
            EncouragementEngine: { priority: 7, description: 'Contextual motivation' }
        },
        
        // Post-case feedback (after completing case)
        postCase: {
            DiagnosticAutopsy: { priority: 1, description: 'Physiological narrative' },
            ButterflyEffect: { priority: 2, description: 'Parallel timelines' },
            CognitiveReplay: { priority: 3, description: 'Decision replay with coaching' },
            DifferentialDance: { priority: 4, description: 'Differential evolution' },
            RippleEffect: { priority: 5, description: 'Downstream impact' },
            GrandmotherTest: { priority: 6, description: 'Explain simply challenge' },
            MentorsNotebook: { priority: 7, description: 'Pearl extraction' },
            BoardExaminerMode: { priority: 8, description: 'Board-style feedback' }
        },
        
        // Analytics & Progress (dashboard views)
        analytics: {
            PatternRecognitionTracker: { priority: 1, description: 'Skills by category' },
            ConstellationView: { priority: 2, description: 'Knowledge connections' },
            PeerComparison: { priority: 3, description: 'Anonymous benchmarking' },
            WeeklyCoachingReport: { priority: 4, description: 'Weekly summary' },
            ConfidenceCalibration: { priority: 5, description: 'Calibration tracking' },
            ClinicalIntuitionMeter: { priority: 6, description: 'Gut accuracy' },
            UncertaintyEmbrace: { priority: 7, description: 'Epistemic humility' },
            ClinicalMirror: { priority: 8, description: 'Clinical identity' },
            AchievementSystem: { priority: 9, description: 'Badges & achievements' }
        },
        
        // Special modes (opt-in experiences)
        specialModes: {
            NightShiftSimulator: { priority: 1, description: 'Fatigue mode' },
            AttendingRounds: { priority: 2, description: 'Pimping simulator' },
            ExpertAttentionMap: { priority: 3, description: 'Visual attention' }
        },
        
        // Async feedback (appears later)
        async: {
            FutureSelfLetters: { priority: 1, description: 'Letters from future self' },
            PatientFollowUp: { priority: 2, description: 'Patient outcomes' },
            SpacedRepetitionEngine: { priority: 3, description: 'Review scheduling' }
        },
        
        // Communication skills
        communication: {
            EmotionalIntelligenceFeedback: { priority: 1, description: 'Empathy analysis' }
        }
    },

    // ========================================================================
    // INITIALIZATION
    // ========================================================================

    initialize: async function(studentId, options = {}) {
        console.log('🚀 Initializing ReasonDx Feedback Orchestrator...');
        
        // Load student data
        this.state.currentStudent = await this.loadStudent(studentId);
        this.state.sessionStart = Date.now();
        
        // Load preferences
        this.state.settings = StudentPreferences.load(studentId);
        
        // Initialize all enabled modules
        await this.initializeModules();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Check for pending async feedback (patient follow-ups, etc.)
        this.checkAsyncFeedback();
        
        // Start cognitive load tracking
        if (this.isModuleEnabled('CognitiveLoadDashboard')) {
            CognitiveLoadDashboard.startSession();
        }
        
        this.state.initialized = true;
        console.log('✅ Feedback Orchestrator initialized with', this.state.activeModules.size, 'modules');
        
        return this;
    },

    loadStudent: async function(studentId) {
        // Load from localStorage or API
        const saved = localStorage.getItem(`reasondx_student_${studentId}`);
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            id: studentId,
            name: null,
            createdAt: Date.now(),
            totalCases: 0,
            totalTime: 0,
            accuracy: 0,
            streak: 0
        };
    },

    initializeModules: async function() {
        const settings = this.state.settings;
        
        // Initialize each module category
        for (const [category, modules] of Object.entries(this.modules)) {
            for (const [moduleName, config] of Object.entries(modules)) {
                // Check if module is enabled in settings
                if (this.isModuleEnabled(moduleName)) {
                    try {
                        // Call module's load/initialize if it exists
                        if (window[moduleName] && typeof window[moduleName].load === 'function') {
                            window[moduleName].load();
                        }
                        if (window[moduleName] && typeof window[moduleName].initialize === 'function') {
                            await window[moduleName].initialize();
                        }
                        this.state.activeModules.add(moduleName);
                    } catch (error) {
                        console.error(`Failed to initialize ${moduleName}:`, error);
                    }
                }
            }
        }
    },

    isModuleEnabled: function(moduleName) {
        const settings = this.state.settings;
        
        // Check if specifically disabled
        if (settings.disabledModules && settings.disabledModules.includes(moduleName)) {
            return false;
        }
        
        // Special modes require explicit enabling
        const specialModes = ['NightShiftSimulator', 'AttendingRounds', 'BoardExaminerMode'];
        if (specialModes.includes(moduleName)) {
            return settings.enabledSpecialModes && settings.enabledSpecialModes.includes(moduleName);
        }
        
        // Default: enabled
        return true;
    },

    // ========================================================================
    // EVENT SYSTEM - Routes Case Events to Appropriate Modules
    // ========================================================================

    setupEventListeners: function() {
        // Listen for global case events
        document.addEventListener('reasondx:caseEvent', (e) => {
            this.handleCaseEvent(e.detail);
        });
        
        // Listen for UI interactions
        document.addEventListener('reasondx:userAction', (e) => {
            this.handleUserAction(e.detail);
        });
    },

    // Dispatch an event to trigger feedback
    dispatchEvent: function(eventType, data) {
        const event = new CustomEvent('reasondx:caseEvent', {
            detail: { type: eventType, data: data, timestamp: Date.now() }
        });
        document.dispatchEvent(event);
    },

    handleCaseEvent: function(event) {
        // Log the event
        this.state.eventLog.push(event);
        
        // Route to appropriate modules based on event type
        const handlers = this.eventHandlers[event.type];
        if (handlers) {
            handlers.forEach(handler => {
                try {
                    handler.call(this, event.data);
                } catch (error) {
                    console.error(`Error handling event ${event.type}:`, error);
                }
            });
        }
    },

    // ========================================================================
    // EVENT HANDLERS - Maps Events to Module Actions
    // ========================================================================

    eventHandlers: {
        // Case lifecycle events
        'case:started': [
            function(data) {
                this.state.currentCase = data;
                CognitiveLoadDashboard.startSession();
                DifferentialGraveyard.ruledOut = []; // Reset for new case
                
                if (this.isModuleEnabled('EncouragementEngine')) {
                    const greeting = EncouragementEngine.getEncouragement({ context: 'case_start' });
                    this.queueFeedback('encouragement', greeting, 'low');
                }
            }
        ],
        
        'case:completed': [
            function(data) {
                // Trigger post-case feedback sequence
                this.triggerPostCaseFeedback(data);
                
                // Schedule patient follow-up for later
                if (this.isModuleEnabled('PatientFollowUp')) {
                    PatientFollowUp.scheduleFollowUp(data, 
                        Math.floor(Math.random() * 7) + 3, // 3-10 days later
                        data.outcome || 'good'
                    );
                }
                
                // Extract clinical pearls
                if (this.isModuleEnabled('MentorsNotebook') && data.pearls) {
                    data.pearls.forEach(pearl => MentorsNotebook.addPearl(pearl));
                }
                
                // Update spaced repetition
                if (this.isModuleEnabled('SpacedRepetitionEngine')) {
                    this.addToSpacedRepetition(data);
                }
                
                // Check for new achievements
                if (this.isModuleEnabled('AchievementSystem')) {
                    const newBadges = AchievementSystem.checkBadges(this.getStudentStats());
                    newBadges.forEach(badge => {
                        this.queueFeedback('achievement', badge, 'high');
                    });
                }
                
                // Update pattern recognition
                if (this.isModuleEnabled('PatternRecognitionTracker')) {
                    PatternRecognitionTracker.updateFromCase(data);
                }
                
                // Update confidence calibration
                if (this.isModuleEnabled('ConfidenceCalibration') && data.confidenceRatings) {
                    data.confidenceRatings.forEach(rating => {
                        ConfidenceCalibration.recordPrediction(
                            rating.confidence,
                            rating.wasCorrect,
                            rating.topic
                        );
                    });
                }
                
                // Update clinical intuition
                if (this.isModuleEnabled('ClinicalIntuitionMeter') && data.initialGut) {
                    ClinicalIntuitionMeter.recordGutFeeling(
                        data.initialGut,
                        data.finalDiagnosis,
                        data.initialGut === data.correctDiagnosis
                    );
                }
                
                // Update uncertainty tracking
                if (this.isModuleEnabled('UncertaintyEmbrace')) {
                    UncertaintyEmbrace.recordDecision(
                        data.statedConfidence,
                        data.wasCorrect ? 'correct' : 'incorrect',
                        data.orderedConfirmatoryTests
                    );
                }
            }
        ],
        
        // Diagnostic events
        'diagnosis:selected': [
            function(data) {
                // Record for cognitive replay
                if (this.isModuleEnabled('CognitiveReplay')) {
                    CognitiveReplay.recordEvent({
                        type: 'select_diagnosis',
                        diagnosis: data.diagnosis,
                        confidence: data.confidence,
                        timestamp: Date.now()
                    });
                }
                
                // Record initial gut feeling
                if (!this.state.currentCase.initialGut) {
                    this.state.currentCase.initialGut = data.diagnosis;
                }
            }
        ],
        
        'diagnosis:correct': [
            function(data) {
                // Check if it's a critical/life-saving diagnosis
                if (data.isCritical && this.isModuleEnabled('SaveCounter')) {
                    SaveCounter.recordSave(data.saveType, data);
                    const celebration = SaveCounter.renderCelebration(data);
                    this.queueFeedback('save', celebration, 'high');
                }
                
                // Attending persona feedback
                if (this.isModuleEnabled('AttendingPersona')) {
                    const feedback = AttendingPersona.generateFeedback('excellent', data);
                    this.queueFeedback('persona', feedback, 'medium');
                }
                
                // Update differential dance
                if (this.isModuleEnabled('DifferentialDance')) {
                    DifferentialDance.recordState('Final', data.differential);
                }
            }
        ],
        
        'diagnosis:incorrect': [
            function(data) {
                // Learning moments - reframe the mistake
                if (this.isModuleEnabled('LearningMoments')) {
                    const reframe = LearningMoments.reframeMistake(data);
                    this.queueFeedback('learning', reframe, 'medium');
                }
                
                // Attending persona - supportive feedback
                if (this.isModuleEnabled('AttendingPersona')) {
                    const feedback = AttendingPersona.generateFeedback('needs_work', data);
                    this.queueFeedback('persona', feedback, 'medium');
                }
                
                // Track for pattern recognition
                if (this.isModuleEnabled('PatternRecognitionTracker')) {
                    PatternRecognitionTracker.recordAttempt(data.category, data.subskill, false);
                }
            }
        ],
        
        'diagnosis:ruled_out': [
            function(data) {
                // Add to differential graveyard
                if (this.isModuleEnabled('DifferentialGraveyard')) {
                    DifferentialGraveyard.addToGraveyard(
                        data.diagnosis,
                        data.reason,
                        data.evidence
                    );
                }
                
                // Update differential dance
                if (this.isModuleEnabled('DifferentialDance')) {
                    DifferentialDance.recordState(`After ${data.trigger}`, data.currentDifferential);
                }
            }
        ],
        
        // Test ordering events
        'test:ordered': [
            function(data) {
                // Record for cognitive replay
                if (this.isModuleEnabled('CognitiveReplay')) {
                    CognitiveReplay.recordEvent({
                        type: 'order_test',
                        test: data.test,
                        reasoning: data.reasoning,
                        timestamp: Date.now()
                    });
                }
                
                // Show thinking annotation
                if (this.isModuleEnabled('ThinkingAnnotations')) {
                    const annotation = ThinkingAnnotations.getAnnotation('order_test', data.test);
                    if (annotation) {
                        this.showThinkingBubble(annotation);
                    }
                }
                
                // Update cognitive load
                if (this.isModuleEnabled('CognitiveLoadDashboard')) {
                    CognitiveLoadDashboard.recordResponse(data.timeTaken, true, false, false);
                }
            }
        ],
        
        'test:result_viewed': [
            function(data) {
                // Record for cognitive replay
                if (this.isModuleEnabled('CognitiveReplay')) {
                    CognitiveReplay.recordEvent({
                        type: 'view_result',
                        test: data.test,
                        result: data.result,
                        timestamp: Date.now()
                    });
                }
                
                // Show thinking annotation
                if (this.isModuleEnabled('ThinkingAnnotations')) {
                    const annotation = ThinkingAnnotations.getAnnotation('interpret_result', data.test);
                    if (annotation) {
                        this.showThinkingBubble(annotation);
                    }
                }
                
                // Update differential dance
                if (this.isModuleEnabled('DifferentialDance')) {
                    DifferentialDance.recordState(`After ${data.test}`, data.currentDifferential);
                }
            }
        ],
        
        // History taking events
        'history:question_asked': [
            function(data) {
                // Record for cognitive replay
                if (this.isModuleEnabled('CognitiveReplay')) {
                    CognitiveReplay.recordEvent({
                        type: 'ask_question',
                        question: data.question,
                        category: data.category,
                        timestamp: Date.now()
                    });
                }
            }
        ],
        
        // Patient communication events
        'communication:response': [
            function(data) {
                // Analyze empathy
                if (this.isModuleEnabled('EmotionalIntelligenceFeedback')) {
                    const analysis = EmotionalIntelligenceFeedback.analyzeResponse(
                        data.studentResponse,
                        data.patientContext
                    );
                    this.queueFeedback('empathy', analysis, 'low');
                }
            }
        ],
        
        // Time pressure events
        'timer:warning': [
            function(data) {
                // Encouragement under pressure
                if (this.isModuleEnabled('EncouragementEngine')) {
                    const encouragement = EncouragementEngine.getEncouragement({ 
                        context: 'time_pressure',
                        timeRemaining: data.timeRemaining
                    });
                    this.queueFeedback('encouragement', encouragement, 'medium');
                }
            }
        ],
        
        // Night shift mode events
        'nightshift:distraction': [
            function(data) {
                if (this.isModuleEnabled('NightShiftSimulator') && NightShiftSimulator.enabled) {
                    if (NightShiftSimulator.shouldShowDistraction()) {
                        const distraction = NightShiftSimulator.getRandomDistraction();
                        this.showDistraction(distraction);
                    }
                }
            }
        ]
    },

    // ========================================================================
    // FEEDBACK QUEUE SYSTEM - Manages Timing & Priority of Feedback
    // ========================================================================

    queueFeedback: function(type, content, priority = 'medium') {
        const feedback = {
            id: `feedback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            type: type,
            content: content,
            priority: priority,
            queuedAt: Date.now(),
            shown: false
        };
        
        this.state.pendingFeedback.push(feedback);
        this.processFeedbackQueue();
    },

    processFeedbackQueue: function() {
        // Sort by priority
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        this.state.pendingFeedback.sort((a, b) => 
            priorityOrder[a.priority] - priorityOrder[b.priority]
        );
        
        // Show next feedback if none currently showing
        if (!this.state.showingFeedback && this.state.pendingFeedback.length > 0) {
            const next = this.state.pendingFeedback.shift();
            this.showFeedback(next);
        }
    },

    showFeedback: function(feedback) {
        this.state.showingFeedback = true;
        
        // Get the feedback container
        const container = document.getElementById('reasondx-feedback-container');
        if (!container) {
            console.warn('Feedback container not found');
            return;
        }
        
        // Render based on type
        let html = '';
        switch (feedback.type) {
            case 'save':
                html = feedback.content; // Already rendered HTML
                break;
            case 'persona':
                html = AttendingPersona.renderFeedback(feedback.content);
                break;
            case 'learning':
                html = LearningMoments.renderLearningMoment(feedback.content);
                break;
            case 'achievement':
                html = AchievementSystem.showBadgeEarned(feedback.content);
                break;
            case 'empathy':
                html = EmotionalIntelligenceFeedback.renderFeedback(feedback.content);
                break;
            case 'encouragement':
                html = this.renderEncouragement(feedback.content);
                break;
            default:
                html = `<div class="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow">${JSON.stringify(feedback.content)}</div>`;
        }
        
        container.innerHTML = html;
        container.classList.remove('hidden');
        
        // Auto-hide based on priority
        const durations = { high: 8000, medium: 5000, low: 3000 };
        setTimeout(() => {
            container.classList.add('hidden');
            this.state.showingFeedback = false;
            this.state.feedbackHistory.push(feedback);
            this.processFeedbackQueue();
        }, durations[feedback.priority]);
    },

    renderEncouragement: function(content) {
        return `
            <div class="encouragement-toast fixed bottom-4 right-4 max-w-sm bg-gradient-to-r 
                        from-purple-600 to-pink-600 text-white rounded-xl shadow-lg p-4 
                        animate-slide-up z-50">
                <p class="font-medium">${content.message || content}</p>
            </div>
        `;
    },

    showThinkingBubble: function(annotation) {
        const container = document.getElementById('reasondx-thinking-container');
        if (!container) return;
        
        const html = ThinkingAnnotations.renderAnnotation(annotation);
        container.innerHTML = html;
        container.classList.remove('hidden');
        
        setTimeout(() => {
            container.classList.add('hidden');
        }, 4000);
    },

    showDistraction: function(distraction) {
        const html = NightShiftSimulator.renderDistraction(distraction);
        const container = document.createElement('div');
        container.innerHTML = html;
        document.body.appendChild(container.firstElementChild);
    },

    // ========================================================================
    // POST-CASE FEEDBACK SEQUENCE
    // ========================================================================

    triggerPostCaseFeedback: function(caseData) {
        const settings = this.state.settings;
        const feedbackSequence = [];
        
        // Build sequence based on what's enabled and relevant
        
        // 1. Diagnostic Autopsy (always valuable)
        if (this.isModuleEnabled('DiagnosticAutopsy')) {
            const narrative = DiagnosticAutopsy.generateNarrative(
                caseData.type,
                caseData.studentActions
            );
            if (narrative) {
                feedbackSequence.push({
                    module: 'DiagnosticAutopsy',
                    content: narrative,
                    render: () => DiagnosticAutopsy.renderNarrative(narrative)
                });
            }
        }
        
        // 2. Butterfly Effect (for critical decisions)
        if (this.isModuleEnabled('ButterflyEffect') && caseData.hasCriticalDecision) {
            const visualization = ButterflyEffect.generateVisualization(
                caseData.scenarioType,
                caseData.studentChoice
            );
            if (visualization) {
                feedbackSequence.push({
                    module: 'ButterflyEffect',
                    content: visualization,
                    render: () => ButterflyEffect.renderVisualization(visualization)
                });
            }
        }
        
        // 3. Cognitive Replay
        if (this.isModuleEnabled('CognitiveReplay')) {
            const replay = CognitiveReplay.generateReplay(caseData);
            feedbackSequence.push({
                module: 'CognitiveReplay',
                content: replay,
                render: () => CognitiveReplay.renderReplay(replay)
            });
        }
        
        // 4. Differential Dance
        if (this.isModuleEnabled('DifferentialDance')) {
            const dance = DifferentialDance.generateAnimation();
            feedbackSequence.push({
                module: 'DifferentialDance',
                content: dance,
                render: () => DifferentialDance.renderTimeline(dance)
            });
        }
        
        // 5. Ripple Effect (for time-sensitive cases)
        if (this.isModuleEnabled('RippleEffect') && caseData.timeSensitive) {
            feedbackSequence.push({
                module: 'RippleEffect',
                content: caseData.impactType,
                render: () => RippleEffect.showRipple(caseData.impactType)
            });
        }
        
        // 6. Board Examiner Mode (if enabled)
        if (this.isModuleEnabled('BoardExaminerMode') && BoardExaminerMode.enabled) {
            const evaluation = BoardExaminerMode.evaluateResponse(
                caseData.studentResponse,
                caseData
            );
            if (evaluation) {
                feedbackSequence.push({
                    module: 'BoardExaminerMode',
                    content: evaluation,
                    render: () => BoardExaminerMode.renderFeedback(evaluation)
                });
            }
        }
        
        // 7. Grandmother Test (optional challenge)
        if (this.isModuleEnabled('GrandmotherTest') && settings.enableGrandmotherChallenge) {
            feedbackSequence.push({
                module: 'GrandmotherTest',
                content: { concept: caseData.diagnosis },
                render: () => this.renderGrandmotherChallenge(caseData.diagnosis)
            });
        }
        
        // Show the post-case feedback panel
        this.showPostCaseFeedbackPanel(feedbackSequence, caseData);
    },

    showPostCaseFeedbackPanel: function(feedbackSequence, caseData) {
        // Create the post-case review panel
        const panel = document.createElement('div');
        panel.id = 'reasondx-postcase-panel';
        panel.className = 'fixed inset-0 bg-black/80 z-50 overflow-auto';
        
        // Calculate performance summary
        const summary = this.calculateCaseSummary(caseData);
        
        panel.innerHTML = `
            <div class="max-w-4xl mx-auto py-8 px-4">
                <!-- Header -->
                <div class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                            rounded-t-2xl p-6 text-white">
                    <div class="flex items-center justify-between">
                        <div>
                            <h2 class="text-2xl font-bold">Case Complete</h2>
                            <p class="text-purple-200">${caseData.diagnosis || 'Case Review'}</p>
                        </div>
                        <div class="text-right">
                            <div class="text-4xl font-bold">${summary.score}%</div>
                            <div class="text-purple-200">${summary.grade}</div>
                        </div>
                    </div>
                </div>
                
                <!-- Quick stats -->
                <div class="bg-white dark:bg-zinc-800 p-4 grid grid-cols-4 gap-4 border-b border-zinc-200 dark:border-zinc-700">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-zinc-800 dark:text-white">${summary.timeToCorrect}</div>
                        <div class="text-xs text-zinc-500">Time to Dx</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-zinc-800 dark:text-white">${summary.testsOrdered}</div>
                        <div class="text-xs text-zinc-500">Tests Ordered</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold ${summary.criticalMissed ? 'text-red-500' : 'text-green-500'}">
                            ${summary.criticalMissed ? '⚠️' : '✓'}
                        </div>
                        <div class="text-xs text-zinc-500">Critical Items</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-zinc-800 dark:text-white">${summary.efficiency}%</div>
                        <div class="text-xs text-zinc-500">Efficiency</div>
                    </div>
                </div>
                
                <!-- Feedback tabs -->
                <div class="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
                    <div class="flex overflow-x-auto" id="postcase-tabs">
                        ${feedbackSequence.map((item, index) => `
                            <button class="px-4 py-3 text-sm font-medium whitespace-nowrap
                                          ${index === 0 ? 'text-purple-600 border-b-2 border-purple-600' : 'text-zinc-500'}
                                          hover:text-purple-600 transition-colors"
                                    onclick="ReasonDxFeedbackOrchestrator.switchPostCaseTab(${index})">
                                ${this.getModuleIcon(item.module)} ${this.getModuleDisplayName(item.module)}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Feedback content -->
                <div class="bg-white dark:bg-zinc-800 rounded-b-2xl" id="postcase-content">
                    ${feedbackSequence.length > 0 ? feedbackSequence[0].render() : '<p class="p-8 text-center text-zinc-500">No feedback to display</p>'}
                </div>
                
                <!-- Actions -->
                <div class="mt-4 flex justify-center gap-4">
                    <button onclick="ReasonDxFeedbackOrchestrator.closePostCasePanel()"
                            class="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 
                                   rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow">
                        Continue to Next Case
                    </button>
                    <button onclick="ReasonDxFeedbackOrchestrator.showDashboard()"
                            class="px-6 py-3 bg-purple-600 text-white rounded-xl font-medium 
                                   shadow-lg hover:shadow-xl transition-shadow">
                        View Dashboard
                    </button>
                </div>
            </div>
        `;
        
        // Store feedback sequence for tab switching
        this.state.currentFeedbackSequence = feedbackSequence;
        
        document.body.appendChild(panel);
    },

    switchPostCaseTab: function(index) {
        const sequence = this.state.currentFeedbackSequence;
        if (!sequence || !sequence[index]) return;
        
        // Update tab styling
        const tabs = document.querySelectorAll('#postcase-tabs button');
        tabs.forEach((tab, i) => {
            if (i === index) {
                tab.classList.add('text-purple-600', 'border-b-2', 'border-purple-600');
                tab.classList.remove('text-zinc-500');
            } else {
                tab.classList.remove('text-purple-600', 'border-b-2', 'border-purple-600');
                tab.classList.add('text-zinc-500');
            }
        });
        
        // Update content
        const content = document.getElementById('postcase-content');
        if (content) {
            content.innerHTML = sequence[index].render();
        }
    },

    closePostCasePanel: function() {
        const panel = document.getElementById('reasondx-postcase-panel');
        if (panel) {
            panel.remove();
        }
    },

    getModuleIcon: function(moduleName) {
        const icons = {
            DiagnosticAutopsy: '🫀',
            ButterflyEffect: '🦋',
            CognitiveReplay: '🔄',
            DifferentialDance: '💃',
            RippleEffect: '🌊',
            BoardExaminerMode: '🎓',
            GrandmotherTest: '👵'
        };
        return icons[moduleName] || '📋';
    },

    getModuleDisplayName: function(moduleName) {
        const names = {
            DiagnosticAutopsy: 'Patient Story',
            ButterflyEffect: 'What If?',
            CognitiveReplay: 'Decision Replay',
            DifferentialDance: 'Differential',
            RippleEffect: 'Impact',
            BoardExaminerMode: 'Board Review',
            GrandmotherTest: 'Explain Simply'
        };
        return names[moduleName] || moduleName;
    },

    calculateCaseSummary: function(caseData) {
        return {
            score: caseData.score || Math.round(70 + Math.random() * 30),
            grade: caseData.grade || 'Good',
            timeToCorrect: caseData.timeToCorrect || '4:32',
            testsOrdered: caseData.testsOrdered || 5,
            criticalMissed: caseData.criticalMissed || false,
            efficiency: caseData.efficiency || Math.round(70 + Math.random() * 25)
        };
    },

    // ========================================================================
    // ASYNC FEEDBACK CHECK (Patient Follow-ups, Reminders, etc.)
    // ========================================================================

    checkAsyncFeedback: function() {
        // Check for patient follow-ups
        if (this.isModuleEnabled('PatientFollowUp')) {
            const dueFollowUps = PatientFollowUp.checkForDueFollowUps();
            dueFollowUps.forEach(followUp => {
                const rendered = PatientFollowUp.renderFollowUp(followUp);
                this.queueFeedback('followup', { html: rendered }, 'high');
                PatientFollowUp.deliverFollowUp(followUp.id);
            });
        }
        
        // Check for spaced repetition due cards
        if (this.isModuleEnabled('SpacedRepetitionEngine')) {
            const reminder = SpacedRepetitionEngine.generateSmartReminder();
            if (reminder.type === 'due' && reminder.totalDue > 5) {
                this.queueFeedback('srs_reminder', reminder, 'low');
            }
        }
        
        // Check for future self letters
        if (this.isModuleEnabled('FutureSelfLetters')) {
            // Letters are generated after specific milestones
            // Check if any milestones were hit
        }
    },

    addToSpacedRepetition: function(caseData) {
        // Add key concepts from the case to SRS
        if (caseData.keyLearningPoints) {
            caseData.keyLearningPoints.forEach(point => {
                SpacedRepetitionEngine.addCard(
                    `card_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
                    point.content,
                    point.category
                );
            });
        }
    },

    // ========================================================================
    // DASHBOARD VIEW
    // ========================================================================

    showDashboard: function() {
        this.closePostCasePanel();
        
        const dashboard = document.createElement('div');
        dashboard.id = 'reasondx-dashboard';
        dashboard.className = 'fixed inset-0 bg-zinc-100 dark:bg-zinc-900 z-50 overflow-auto';
        
        dashboard.innerHTML = `
            <div class="max-w-6xl mx-auto py-8 px-4">
                <!-- Header -->
                <div class="flex items-center justify-between mb-8">
                    <h1 class="text-3xl font-bold text-zinc-900 dark:text-white">
                        📊 Your Dashboard
                    </h1>
                    <button onclick="document.getElementById('reasondx-dashboard').remove()"
                            class="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg">
                        ✕ Close
                    </button>
                </div>
                
                <!-- Grid of analytics modules -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${this.renderDashboardWidgets()}
                </div>
                
                <!-- Settings button -->
                <div class="mt-8 text-center">
                    <button onclick="StudentPreferences.showSettingsPanel()"
                            class="px-6 py-3 bg-purple-600 text-white rounded-xl font-medium">
                        ⚙️ Customize Your Experience
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(dashboard);
    },

    renderDashboardWidgets: function() {
        const widgets = [];
        
        // Pattern Recognition Tracker
        if (this.isModuleEnabled('PatternRecognitionTracker')) {
            widgets.push(PatternRecognitionTracker.renderDashboard());
        }
        
        // Confidence Calibration
        if (this.isModuleEnabled('ConfidenceCalibration')) {
            widgets.push(ConfidenceCalibration.renderCalibrationChart());
        }
        
        // Clinical Intuition
        if (this.isModuleEnabled('ClinicalIntuitionMeter')) {
            widgets.push(ClinicalIntuitionMeter.renderMeter());
        }
        
        // Uncertainty Embrace
        if (this.isModuleEnabled('UncertaintyEmbrace')) {
            widgets.push(UncertaintyEmbrace.renderDashboard());
        }
        
        // Clinical Mirror
        if (this.isModuleEnabled('ClinicalMirror')) {
            widgets.push(ClinicalMirror.renderMirror());
        }
        
        // Achievement System
        if (this.isModuleEnabled('AchievementSystem')) {
            widgets.push(AchievementSystem.renderBadgeCollection());
        }
        
        // Spaced Repetition
        if (this.isModuleEnabled('SpacedRepetitionEngine')) {
            widgets.push(SpacedRepetitionEngine.renderDashboard());
        }
        
        // Cognitive Load (current session)
        if (this.isModuleEnabled('CognitiveLoadDashboard')) {
            widgets.push(CognitiveLoadDashboard.renderDashboard());
        }
        
        // Constellation View
        if (this.isModuleEnabled('ConstellationView')) {
            widgets.push(ConstellationView.renderConstellation());
        }
        
        // Peer Comparison
        if (this.isModuleEnabled('PeerComparison')) {
            widgets.push(PeerComparison.renderComparison());
        }
        
        // Mentor's Notebook
        if (this.isModuleEnabled('MentorsNotebook')) {
            widgets.push(MentorsNotebook.renderNotebook());
        }
        
        return widgets.join('');
    },

    // ========================================================================
    // UTILITY METHODS
    // ========================================================================

    getStudentStats: function() {
        const student = this.state.currentStudent;
        return {
            totalCases: student.totalCases || 0,
            accuracy: student.accuracy || 0,
            streak: student.streak || 0,
            criticalMisses: student.criticalMisses || 0,
            criticalCases: student.criticalCases || 0,
            perfectStreak: student.perfectStreak || 0,
            subtleFindings: student.subtleFindings || 0,
            learningMomentsReviewed: student.learningMomentsReviewed || 0
            // ... more stats as needed for achievements
        };
    },

    saveState: function() {
        localStorage.setItem('reasondx_orchestrator_state', JSON.stringify({
            student: this.state.currentStudent,
            settings: this.state.settings
        }));
    }
};


// ============================================================================
// SECTION 2: STUDENT PREFERENCES SYSTEM
// ============================================================================

const StudentPreferences = {

    defaults: {
        // Persona preferences
        preferredPersona: 'dr_chen', // 'dr_chen', 'dr_patel', 'coach_k', 'professor_maieutic'
        
        // Feedback timing
        feedbackFrequency: 'normal', // 'minimal', 'normal', 'verbose'
        showThinkingAnnotations: true,
        showEncouragement: true,
        
        // Post-case preferences
        autoShowPostCase: true,
        enableGrandmotherChallenge: false, // Optional challenge
        
        // Analytics preferences
        showPeerComparison: true,
        anonymousDataSharing: true, // For cohort statistics
        
        // Special modes (opt-in)
        enabledSpecialModes: [], // 'NightShiftSimulator', 'AttendingRounds', 'BoardExaminerMode'
        
        // Gamification
        showAchievements: true,
        showSaveCounter: true,
        showStreak: true,
        
        // Disabled modules (user can turn off)
        disabledModules: [],
        
        // Display preferences
        darkMode: 'system', // 'light', 'dark', 'system'
        animationsEnabled: true,
        soundEnabled: false
    },

    current: null,

    load: function(studentId) {
        const saved = localStorage.getItem(`reasondx_prefs_${studentId}`);
        if (saved) {
            this.current = { ...this.defaults, ...JSON.parse(saved) };
        } else {
            this.current = { ...this.defaults };
        }
        return this.current;
    },

    save: function(studentId) {
        localStorage.setItem(`reasondx_prefs_${studentId}`, JSON.stringify(this.current));
    },

    update: function(key, value) {
        this.current[key] = value;
        this.save(ReasonDxFeedbackOrchestrator.state.currentStudent?.id);
    },

    showSettingsPanel: function() {
        const panel = document.createElement('div');
        panel.id = 'reasondx-settings-panel';
        panel.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4';
        
        panel.innerHTML = `
            <div class="bg-white dark:bg-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl">
                <!-- Header -->
                <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white sticky top-0">
                    <div class="flex items-center justify-between">
                        <h2 class="text-xl font-bold">⚙️ Customize Your Experience</h2>
                        <button onclick="document.getElementById('reasondx-settings-panel').remove()"
                                class="text-white/80 hover:text-white">
                            ✕
                        </button>
                    </div>
                    <p class="text-purple-200 text-sm mt-1">Make ReasonDx work the way you learn best</p>
                </div>
                
                <div class="p-6 space-y-8">
                    ${this.renderSettingsSections()}
                </div>
                
                <!-- Footer -->
                <div class="p-4 bg-zinc-50 dark:bg-zinc-900 sticky bottom-0 flex justify-end gap-4">
                    <button onclick="StudentPreferences.resetToDefaults()"
                            class="px-4 py-2 text-zinc-600 dark:text-zinc-400">
                        Reset to Defaults
                    </button>
                    <button onclick="StudentPreferences.saveAndClose()"
                            class="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium">
                        Save Changes
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(panel);
    },

    renderSettingsSections: function() {
        const prefs = this.current;
        
        return `
            <!-- Mentor Persona -->
            <section>
                <h3 class="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                    👨‍⚕️ Choose Your Mentor
                </h3>
                <div class="grid grid-cols-2 gap-4">
                    ${this.renderPersonaOption('dr_chen', 'Dr. Chen', 'Attending Physician', 'Warm but rigorous, asks great questions', prefs.preferredPersona === 'dr_chen')}
                    ${this.renderPersonaOption('dr_patel', 'Dr. Patel', 'Chief Resident', 'Peer mentor, recently in your shoes', prefs.preferredPersona === 'dr_patel')}
                    ${this.renderPersonaOption('coach_k', 'Coach K', 'Performance Coach', 'Motivational, championship mindset', prefs.preferredPersona === 'coach_k')}
                    ${this.renderPersonaOption('professor_maieutic', 'Professor Maieutic', 'Socratic Guide', 'Questions only, never tells answers', prefs.preferredPersona === 'professor_maieutic')}
                </div>
            </section>
            
            <!-- Feedback Style -->
            <section>
                <h3 class="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                    💬 Feedback Style
                </h3>
                <div class="space-y-4">
                    ${this.renderSelectOption('feedbackFrequency', 'How much feedback do you want?', [
                        { value: 'minimal', label: 'Minimal - Just the essentials' },
                        { value: 'normal', label: 'Normal - Balanced feedback' },
                        { value: 'verbose', label: 'Detailed - Explain everything' }
                    ], prefs.feedbackFrequency)}
                    
                    ${this.renderToggle('showThinkingAnnotations', 'Show Expert Thinking Bubbles', 'See what an expert would be thinking as you work', prefs.showThinkingAnnotations)}
                    ${this.renderToggle('showEncouragement', 'Show Encouragement Messages', 'Motivational messages during cases', prefs.showEncouragement)}
                </div>
            </section>
            
            <!-- Gamification -->
            <section>
                <h3 class="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                    🏆 Gamification
                </h3>
                <div class="space-y-4">
                    ${this.renderToggle('showAchievements', 'Show Badges & Achievements', 'Celebrate milestones with badges', prefs.showAchievements)}
                    ${this.renderToggle('showSaveCounter', 'Show "Lives Saved" Counter', 'Track critical diagnoses caught', prefs.showSaveCounter)}
                    ${this.renderToggle('showStreak', 'Show Study Streak', 'Track consecutive days of practice', prefs.showStreak)}
                    ${this.renderToggle('showPeerComparison', 'Show Peer Comparison', 'Anonymous benchmarking against cohort', prefs.showPeerComparison)}
                </div>
            </section>
            
            <!-- Special Modes -->
            <section>
                <h3 class="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                    ⚡ Special Modes
                </h3>
                <p class="text-sm text-zinc-500 mb-4">Advanced features for extra challenge</p>
                <div class="space-y-4">
                    ${this.renderToggle('mode_BoardExaminerMode', 'Board Examiner Mode', 'Rigorous Step 2-style feedback', prefs.enabledSpecialModes?.includes('BoardExaminerMode'))}
                    ${this.renderToggle('mode_NightShiftSimulator', 'Night Shift Simulator', 'Practice under fatigue with distractions', prefs.enabledSpecialModes?.includes('NightShiftSimulator'))}
                    ${this.renderToggle('mode_AttendingRounds', 'Attending Rounds', 'Simulated pimping questions', prefs.enabledSpecialModes?.includes('AttendingRounds'))}
                    ${this.renderToggle('enableGrandmotherChallenge', 'Grandmother Test', 'Challenge to explain concepts simply', prefs.enableGrandmotherChallenge)}
                </div>
            </section>
            
            <!-- Advanced: Disable Modules -->
            <section>
                <h3 class="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                    🔧 Advanced: Turn Off Features
                </h3>
                <p class="text-sm text-zinc-500 mb-4">Not using something? Turn it off to simplify your experience.</p>
                <div class="grid grid-cols-2 gap-2">
                    ${this.renderModuleToggles(prefs.disabledModules)}
                </div>
            </section>
            
            <!-- Display -->
            <section>
                <h3 class="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                    🎨 Display
                </h3>
                <div class="space-y-4">
                    ${this.renderSelectOption('darkMode', 'Theme', [
                        { value: 'light', label: 'Light' },
                        { value: 'dark', label: 'Dark' },
                        { value: 'system', label: 'System Default' }
                    ], prefs.darkMode)}
                    
                    ${this.renderToggle('animationsEnabled', 'Enable Animations', 'Smooth transitions and effects', prefs.animationsEnabled)}
                    ${this.renderToggle('soundEnabled', 'Enable Sounds', 'Audio feedback for events', prefs.soundEnabled)}
                </div>
            </section>
        `;
    },

    renderPersonaOption: function(value, name, role, description, isSelected) {
        return `
            <label class="relative cursor-pointer">
                <input type="radio" name="preferredPersona" value="${value}" 
                       ${isSelected ? 'checked' : ''}
                       class="peer sr-only"
                       onchange="StudentPreferences.update('preferredPersona', '${value}')">
                <div class="p-4 rounded-xl border-2 transition-all
                            ${isSelected ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30' : 
                                          'border-zinc-200 dark:border-zinc-700 hover:border-purple-300'}">
                    <div class="font-bold text-zinc-900 dark:text-white">${name}</div>
                    <div class="text-sm text-purple-600">${role}</div>
                    <div class="text-xs text-zinc-500 mt-1">${description}</div>
                </div>
            </label>
        `;
    },

    renderToggle: function(key, label, description, isEnabled) {
        return `
            <div class="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                <div>
                    <div class="font-medium text-zinc-900 dark:text-white">${label}</div>
                    <div class="text-xs text-zinc-500">${description}</div>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" ${isEnabled ? 'checked' : ''} class="sr-only peer"
                           onchange="StudentPreferences.handleToggle('${key}', this.checked)">
                    <div class="w-11 h-6 bg-zinc-300 peer-focus:ring-2 peer-focus:ring-purple-300 
                                rounded-full peer dark:bg-zinc-600 
                                peer-checked:after:translate-x-full peer-checked:after:border-white 
                                after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                after:bg-white after:border-zinc-300 after:border after:rounded-full 
                                after:h-5 after:w-5 after:transition-all dark:border-zinc-500 
                                peer-checked:bg-purple-600"></div>
                </label>
            </div>
        `;
    },

    renderSelectOption: function(key, label, options, currentValue) {
        return `
            <div class="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                <label class="block font-medium text-zinc-900 dark:text-white mb-2">${label}</label>
                <select class="w-full p-2 rounded-lg border border-zinc-300 dark:border-zinc-600 
                               bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                        onchange="StudentPreferences.update('${key}', this.value)">
                    ${options.map(opt => `
                        <option value="${opt.value}" ${currentValue === opt.value ? 'selected' : ''}>
                            ${opt.label}
                        </option>
                    `).join('')}
                </select>
            </div>
        `;
    },

    renderModuleToggles: function(disabledModules) {
        const modules = [
            { key: 'DifferentialDance', label: 'Differential Animation' },
            { key: 'CognitiveReplay', label: 'Decision Replay' },
            { key: 'PatternRecognitionTracker', label: 'Pattern Tracking' },
            { key: 'ConstellationView', label: 'Knowledge Map' },
            { key: 'SpacedRepetitionEngine', label: 'Spaced Repetition' },
            { key: 'FutureSelfLetters', label: 'Future Self Letters' },
            { key: 'PatientFollowUp', label: 'Patient Follow-ups' },
            { key: 'RippleEffect', label: 'Ripple Effect' },
            { key: 'DiagnosticAutopsy', label: 'Patient Story' },
            { key: 'ButterflyEffect', label: 'What-If Timelines' },
            { key: 'MentorsNotebook', label: "Mentor's Notebook" },
            { key: 'ClinicalMirror', label: 'Clinical Identity' }
        ];
        
        return modules.map(mod => `
            <label class="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700">
                <input type="checkbox" ${!disabledModules?.includes(mod.key) ? 'checked' : ''}
                       onchange="StudentPreferences.toggleModule('${mod.key}', this.checked)"
                       class="rounded text-purple-600">
                <span class="text-sm text-zinc-700 dark:text-zinc-300">${mod.label}</span>
            </label>
        `).join('');
    },

    handleToggle: function(key, value) {
        if (key.startsWith('mode_')) {
            // Handle special mode toggles
            const modeName = key.replace('mode_', '');
            let modes = this.current.enabledSpecialModes || [];
            if (value) {
                modes.push(modeName);
            } else {
                modes = modes.filter(m => m !== modeName);
            }
            this.update('enabledSpecialModes', modes);
        } else {
            this.update(key, value);
        }
    },

    toggleModule: function(moduleName, enabled) {
        let disabled = this.current.disabledModules || [];
        if (enabled) {
            disabled = disabled.filter(m => m !== moduleName);
        } else {
            disabled.push(moduleName);
        }
        this.update('disabledModules', disabled);
    },

    resetToDefaults: function() {
        this.current = { ...this.defaults };
        this.showSettingsPanel(); // Refresh the panel
    },

    saveAndClose: function() {
        this.save(ReasonDxFeedbackOrchestrator.state.currentStudent?.id);
        document.getElementById('reasondx-settings-panel')?.remove();
        
        // Show confirmation
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-50';
        toast.textContent = '✓ Settings saved!';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
};


// ============================================================================
// SECTION 3: MODULE DEPENDENCIES & FEATURE MATRIX
// ============================================================================

const ModuleDependencies = {
    
    // Modules that work together and enhance each other
    synergies: {
        // When these modules are both enabled, they share data
        'CognitiveReplay + ThinkingAnnotations': {
            description: 'Replay shows expert thinking at each step',
            integration: 'ThinkingAnnotations provides expert thoughts for CognitiveReplay timeline'
        },
        'SaveCounter + RippleEffect': {
            description: 'Celebrations show downstream impact',
            integration: 'When SaveCounter fires, RippleEffect shows what was prevented'
        },
        'LearningMoments + MentorsNotebook': {
            description: 'Mistakes become pearls',
            integration: 'LearningMoments automatically adds insights to MentorsNotebook'
        },
        'DifferentialDance + DifferentialGraveyard': {
            description: 'Visual differential evolution with ruled-out tracking',
            integration: 'Graveyard feeds into Dance visualization'
        },
        'ConfidenceCalibration + UncertaintyEmbrace + ClinicalIntuitionMeter': {
            description: 'Comprehensive metacognition tracking',
            integration: 'All three modules share confidence data for complete picture'
        },
        'PatternRecognitionTracker + ConstellationView': {
            description: 'Skills map to knowledge network',
            integration: 'Mastered patterns unlock new constellation connections'
        },
        'SpacedRepetitionEngine + LearningMoments': {
            description: 'Mistakes become review cards',
            integration: 'LearningMoments auto-creates SRS cards'
        },
        'BoardExaminerMode + AttendingRounds': {
            description: 'Exam prep experience',
            integration: 'Both modes use similar scoring and feedback'
        },
        'CognitiveLoadDashboard + NightShiftSimulator': {
            description: 'Fatigue tracking',
            integration: 'NightShift uses CognitiveLoad metrics to adjust difficulty'
        }
    },

    // Data flow between modules
    dataFlows: {
        'case_completion': [
            'PatternRecognitionTracker.updateFromCase()',
            'ConfidenceCalibration.recordPrediction()',
            'ClinicalIntuitionMeter.recordGutFeeling()',
            'UncertaintyEmbrace.recordDecision()',
            'AchievementSystem.checkBadges()',
            'SpacedRepetitionEngine.addCard()',
            'MentorsNotebook.addPearl()',
            'PatientFollowUp.scheduleFollowUp()'
        ],
        'realtime_action': [
            'CognitiveReplay.recordEvent()',
            'DifferentialDance.recordState()',
            'CognitiveLoadDashboard.recordResponse()',
            'ThinkingAnnotations.getAnnotation()'
        ],
        'mistake_made': [
            'LearningMoments.reframeMistake()',
            'SpacedRepetitionEngine.addCard()',
            'PatternRecognitionTracker.recordAttempt()'
        ]
    }
};


// ============================================================================
// SECTION 4: EVENT DISPATCH HELPERS (For Integration with Main Platform)
// ============================================================================

const ReasonDxEvents = {
    
    // Call these from the main platform to trigger feedback
    
    caseStarted: function(caseData) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('case:started', caseData);
    },
    
    caseCompleted: function(caseData) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('case:completed', caseData);
    },
    
    diagnosisSelected: function(diagnosis, confidence) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('diagnosis:selected', { diagnosis, confidence });
    },
    
    diagnosisCorrect: function(data) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('diagnosis:correct', data);
    },
    
    diagnosisIncorrect: function(data) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('diagnosis:incorrect', data);
    },
    
    diagnosisRuledOut: function(diagnosis, reason, evidence) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('diagnosis:ruled_out', { diagnosis, reason, evidence });
    },
    
    testOrdered: function(test, reasoning, timeTaken) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('test:ordered', { test, reasoning, timeTaken });
    },
    
    testResultViewed: function(test, result, currentDifferential) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('test:result_viewed', { test, result, currentDifferential });
    },
    
    historyQuestionAsked: function(question, category) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('history:question_asked', { question, category });
    },
    
    patientCommunication: function(studentResponse, patientContext) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('communication:response', { studentResponse, patientContext });
    },
    
    timerWarning: function(timeRemaining) {
        ReasonDxFeedbackOrchestrator.dispatchEvent('timer:warning', { timeRemaining });
    }
};


// ============================================================================
// SECTION 5: HTML CONTAINERS NEEDED IN MAIN PLATFORM
// ============================================================================

const ReasonDxContainers = {
    
    // Call this to inject required containers into the page
    injectContainers: function() {
        const containers = `
            <!-- Feedback toast container -->
            <div id="reasondx-feedback-container" 
                 class="fixed bottom-4 right-4 z-50 max-w-md hidden"></div>
            
            <!-- Thinking annotation container -->
            <div id="reasondx-thinking-container" 
                 class="fixed top-4 right-4 z-40 max-w-sm hidden"></div>
            
            <!-- Cognitive load mini-display -->
            <div id="reasondx-cognitive-load-mini" 
                 class="fixed top-4 left-4 z-30"></div>
            
            <!-- Save counter display -->
            <div id="reasondx-save-counter" 
                 class="fixed top-4 left-1/2 -translate-x-1/2 z-30"></div>
            
            <!-- Streak display -->
            <div id="reasondx-streak-display" 
                 class="fixed top-4 right-4 z-30"></div>
        `;
        
        const wrapper = document.createElement('div');
        wrapper.id = 'reasondx-containers';
        wrapper.innerHTML = containers;
        document.body.appendChild(wrapper);
    },
    
    // CSS animations needed
    injectStyles: function() {
        const styles = `
            @keyframes slideUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: translateX(20px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes bounceIn {
                0% { transform: scale(0.5); opacity: 0; }
                60% { transform: scale(1.1); }
                100% { transform: scale(1); opacity: 1; }
            }
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
            .animate-slide-up { animation: slideUp 0.3s ease-out; }
            .animate-slide-in { animation: slideIn 0.3s ease-out; }
            .animate-bounce-in { animation: bounceIn 0.5s ease-out; }
            .animate-pulse { animation: pulse 2s infinite; }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
};


// ============================================================================
// SECTION 6: INITIALIZATION & EXPORTS
// ============================================================================

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        // Inject required containers
        ReasonDxContainers.injectContainers();
        ReasonDxContainers.injectStyles();
        
        console.log('📦 ReasonDx Feedback containers ready');
    });
}

// Browser exports
if (typeof window !== 'undefined') {
    window.ReasonDxFeedbackOrchestrator = ReasonDxFeedbackOrchestrator;
    window.StudentPreferences = StudentPreferences;
    window.ModuleDependencies = ModuleDependencies;
    window.ReasonDxEvents = ReasonDxEvents;
    window.ReasonDxContainers = ReasonDxContainers;
}

console.log('✅ ReasonDx Master Integration loaded');
console.log('📚 31 feedback modules connected');
console.log('🎛️ Student preferences system ready');
console.log('🔗 Event routing configured');


// ============================================================================
// QUICK START GUIDE
// ============================================================================
/*

INTEGRATION WITH MAIN REASONDX PLATFORM:
=========================================

1. Include all feedback module files:
   - reasondx-feedback-system-part1.js
   - reasondx-feedback-system-part3.js
   - reasondx-feedback-system-part5.js
   - reasondx-master-integration.js (this file)

2. Initialize the orchestrator when user logs in:
   
   ReasonDxFeedbackOrchestrator.initialize('student_123');

3. Dispatch events from your case engine:

   // When case starts
   ReasonDxEvents.caseStarted({
       id: 'case_456',
       type: 'sepsis',
       difficulty: 'medium'
   });

   // When student orders a test
   ReasonDxEvents.testOrdered('Lactate', 'Concerned about perfusion', 5000);

   // When student views result
   ReasonDxEvents.testResultViewed('Lactate', '4.2 mmol/L', currentDifferential);

   // When student selects diagnosis
   ReasonDxEvents.diagnosisSelected('Sepsis', 85);

   // When diagnosis is correct
   ReasonDxEvents.diagnosisCorrect({
       diagnosis: 'Sepsis',
       isCritical: true,
       saveType: 'missed_sepsis',
       timeSensitive: true
   });

   // When case completes
   ReasonDxEvents.caseCompleted({
       id: 'case_456',
       diagnosis: 'Sepsis',
       score: 92,
       studentActions: [...],
       outcome: 'excellent',
       pearls: [...]
   });

4. The orchestrator handles everything else automatically!
   - Real-time feedback appears during case
   - Post-case panel shows after completion
   - Analytics update in background
   - Achievements trigger when earned
   - Patient follow-ups schedule for later

5. Student can access settings anytime:
   
   StudentPreferences.showSettingsPanel();

6. Dashboard shows all analytics:
   
   ReasonDxFeedbackOrchestrator.showDashboard();

*/
