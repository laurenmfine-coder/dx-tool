// ============================================================
// REASONDX LAUNCH READINESS MODULE v1.0
// Comprehensive module for January 2026 research study launch
// ============================================================
//
// This module adds:
// 1. Study ID Entry & Validation
// 2. Research Consent Flow (curricular vs voluntary)
// 3. Facilitator Mode Entry
// 4. Session Recovery
// 5. Real-time Dashboard for Faculty
// 6. Student Feedback System
// 7. LSCS Check-in Reminders
// 8. IRB Data Export
// 9. Faculty Settings Panel
// 10. Launch Checklist Validator
// ============================================================

(function() {
    'use strict';
    
    // ============================================================
    // LAUNCH READINESS STATE
    // ============================================================
    
    window.LaunchReadiness = {
        version: '1.0.0',
        initialized: false,
        
        // Study configuration
        studyConfig: {
            studyName: 'ReasonDx Clinical Reasoning Study',
            institution: 'NSU Dr. Kiran C. Patel College of Allopathic Medicine',
            piName: 'Lauren Mazzurco, DO',
            piEmail: 'Lfine1@nova.edu',
            irbNumber: '', // Fill in when approved
            studyStartDate: '2026-01-01',
            studyEndDate: '2026-06-30'
        },
        
        // Study ID patterns for validation
        studyIdPatterns: {
            student: /^(Student|STU|MS[1-4])[0-9]{2,4}$/i,
            facilitator: /^(FAC|FACILITATOR)[0-9]{2,4}$/i,
            expert: /^(EXPERT|EXP)[0-9]{2,4}$/i,
            // Allow any format if validation is disabled
            any: /^.{3,20}$/
        },
        
        // Consent tracking
        consent: {
            status: null, // 'consented', 'declined', 'pending'
            timestamp: null,
            sessionType: null, // 'curricular', 'voluntary'
            version: '3.0'
        },
        
        // Session recovery
        recoveryData: null,
        
        // Settings
        settings: {
            requireStudyIdValidation: false, // Set true for strict validation
            showConsentOnFirstVisit: true,
            enableSessionRecovery: true,
            lscsReminderThreshold: 3, // Remind after N skipped check-ins
            autoSaveIntervalMs: 30000
        }
    };
    
    const LR = window.LaunchReadiness;
    
    // ============================================================
    // 1. STUDY ID ENTRY & VALIDATION
    // ============================================================
    
    window.showStudyIdEntry = function(callback) {
        const existingStudyId = localStorage.getItem('reasondx_study_id');
        if (existingStudyId) {
            if (callback) callback(existingStudyId);
            return;
        }
        
        const overlay = document.createElement('div');
        overlay.id = 'study-id-overlay';
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        overlay.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                    <h2 class="text-xl font-bold flex items-center gap-2">
                        <span>📋</span> Research Study Registration
                    </h2>
                    <p class="text-blue-100 text-sm mt-1">${LR.studyConfig.studyName}</p>
                </div>
                
                <div class="p-6">
                    <div class="mb-4">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Enter Your Study ID
                        </label>
                        <input type="text" 
                               id="study-id-input"
                               placeholder="e.g., Student001"
                               class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-lg font-mono
                                      focus:border-blue-500 focus:outline-none transition-colors"
                               autocomplete="off">
                        <p class="text-xs text-gray-500 mt-2">
                            This is the ID assigned to you for the research study.
                            Contact ${LR.studyConfig.piEmail} if you don't have one.
                        </p>
                    </div>
                    
                    <div id="study-id-error" class="hidden bg-red-50 text-red-700 p-3 rounded-lg text-sm mb-4">
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="submitStudyId()" 
                                class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Continue
                        </button>
                    </div>
                    
                    <div class="mt-4 pt-4 border-t border-gray-100">
                        <button onclick="skipStudyId()" 
                                class="w-full text-gray-500 text-sm hover:text-gray-700">
                            I'm just exploring (skip for now)
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        
        // Store callback
        window._studyIdCallback = callback;
        
        // Focus input
        setTimeout(() => {
            document.getElementById('study-id-input')?.focus();
        }, 100);
        
        // Handle enter key
        document.getElementById('study-id-input')?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') submitStudyId();
        });
    };
    
    window.submitStudyId = function() {
        const input = document.getElementById('study-id-input');
        const errorDiv = document.getElementById('study-id-error');
        const studyId = input?.value?.trim();
        
        if (!studyId) {
            errorDiv.textContent = 'Please enter your Study ID';
            errorDiv.classList.remove('hidden');
            return;
        }
        
        // Validate format if required
        if (LR.settings.requireStudyIdValidation) {
            const isValid = Object.values(LR.studyIdPatterns).some(pattern => pattern.test(studyId));
            if (!isValid) {
                errorDiv.textContent = 'Invalid Study ID format. Please check and try again.';
                errorDiv.classList.remove('hidden');
                return;
            }
        }
        
        // Save Study ID
        localStorage.setItem('reasondx_study_id', studyId);
        
        // Update research data collector if available
        if (window.ResearchDataCollector) {
            window.ResearchDataCollector.studentId = studyId;
        }
        
        // Close overlay
        document.getElementById('study-id-overlay')?.remove();
        
        // Call callback
        if (window._studyIdCallback) {
            window._studyIdCallback(studyId);
            window._studyIdCallback = null;
        }
        
        // Show consent if needed
        if (LR.settings.showConsentOnFirstVisit && !localStorage.getItem('reasondx_consent_status')) {
            setTimeout(() => showResearchConsent(), 300);
        }
    };
    
    window.skipStudyId = function() {
        localStorage.setItem('reasondx_study_id', 'ANONYMOUS_' + Date.now());
        document.getElementById('study-id-overlay')?.remove();
        
        if (window._studyIdCallback) {
            window._studyIdCallback(null);
            window._studyIdCallback = null;
        }
    };
    
    // ============================================================
    // 2. RESEARCH CONSENT FLOW
    // ============================================================
    
    window.showResearchConsent = function(sessionType = 'voluntary') {
        const existingConsent = localStorage.getItem('reasondx_consent_status');
        if (existingConsent) {
            LR.consent.status = existingConsent;
            return;
        }
        
        LR.consent.sessionType = sessionType;
        
        const overlay = document.createElement('div');
        overlay.id = 'consent-overlay';
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        
        if (sessionType === 'curricular') {
            // Curricular notice (required activity)
            overlay.innerHTML = `
                <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                    <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6">
                        <h2 class="text-xl font-bold">📚 Course Activity - Data Collection Notice</h2>
                    </div>
                    
                    <div class="p-6">
                        <p class="text-gray-700 mb-4">
                            This is a <strong>required course activity</strong>. Your performance data will be 
                            collected as part of your educational assessment.
                        </p>
                        
                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                            <p class="text-sm text-amber-800">
                                <strong>Research Use:</strong> De-identified data may be used for educational research. 
                                You may request exclusion from <em>publications</em> without affecting your grade.
                            </p>
                        </div>
                        
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                            <h3 class="font-semibold text-blue-800 mb-2">Data Collected:</h3>
                            <ul class="text-sm text-blue-700 space-y-1">
                                <li>• Diagnostic reasoning patterns</li>
                                <li>• Time spent on each stage</li>
                                <li>• Confidence ratings</li>
                                <li>• Learning progression</li>
                            </ul>
                        </div>
                        
                        <p class="text-sm text-gray-600 mb-4">
                            Questions? Contact ${LR.studyConfig.piName} at ${LR.studyConfig.piEmail}
                        </p>
                        
                        <button onclick="acceptCurricularConsent()" 
                                class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
                            I Understand - Continue
                        </button>
                        
                        <label class="flex items-start gap-2 mt-4 cursor-pointer">
                            <input type="checkbox" id="publication-opt-out" class="mt-1">
                            <span class="text-sm text-gray-600">
                                I request that my de-identified data NOT be used in publications
                            </span>
                        </label>
                    </div>
                </div>
            `;
        } else {
            // Voluntary consent (opt-in)
            overlay.innerHTML = `
                <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                        <h2 class="text-xl font-bold">🔬 Research Study Participation</h2>
                        <p class="text-blue-100 text-sm mt-1">${LR.studyConfig.studyName}</p>
                    </div>
                    
                    <div class="p-6">
                        <p class="text-gray-700 mb-4">
                            You are using ReasonDx for <strong>voluntary practice</strong>. We invite you to 
                            participate in our research study.
                        </p>
                        
                        <div class="bg-gray-50 rounded-lg p-4 mb-4">
                            <h3 class="font-semibold text-gray-800 mb-2">What data is collected:</h3>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Diagnostic decisions and reasoning patterns</li>
                                <li>• Time spent on each stage</li>
                                <li>• Confidence ratings</li>
                                <li>• Learning progression over time</li>
                            </ul>
                        </div>
                        
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                            <p class="text-sm text-blue-700">
                                <strong>Your choice matters:</strong> Opting out does NOT affect your platform access. 
                                You still get all feedback, analytics, and features.
                            </p>
                        </div>
                        
                        <div class="flex gap-3 mb-4">
                            <button onclick="acceptVoluntaryConsent(true)" 
                                    class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                                Yes, Include My Data
                            </button>
                            <button onclick="acceptVoluntaryConsent(false)"
                                    class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300">
                                No, Opt Out
                            </button>
                        </div>
                        
                        <p class="text-xs text-gray-500 text-center">
                            You can change this choice anytime in Settings.
                            ${LR.studyConfig.irbNumber ? `IRB #${LR.studyConfig.irbNumber}` : ''}
                        </p>
                    </div>
                </div>
            `;
        }
        
        document.body.appendChild(overlay);
    };
    
    window.acceptCurricularConsent = function() {
        const optOut = document.getElementById('publication-opt-out')?.checked;
        
        LR.consent.status = 'consented';
        LR.consent.timestamp = Date.now();
        LR.consent.sessionType = 'curricular';
        LR.consent.publicationOptOut = optOut;
        
        localStorage.setItem('reasondx_consent_status', 'consented');
        localStorage.setItem('reasondx_consent_timestamp', LR.consent.timestamp.toString());
        localStorage.setItem('reasondx_consent_type', 'curricular');
        localStorage.setItem('reasondx_publication_opt_out', optOut ? 'true' : 'false');
        
        document.getElementById('consent-overlay')?.remove();
        
        console.log('Curricular consent accepted', { publicationOptOut: optOut });
    };
    
    window.acceptVoluntaryConsent = function(consented) {
        LR.consent.status = consented ? 'consented' : 'declined';
        LR.consent.timestamp = Date.now();
        LR.consent.sessionType = 'voluntary';
        
        localStorage.setItem('reasondx_consent_status', LR.consent.status);
        localStorage.setItem('reasondx_consent_timestamp', LR.consent.timestamp.toString());
        localStorage.setItem('reasondx_consent_type', 'voluntary');
        
        document.getElementById('consent-overlay')?.remove();
        
        // Update research collector
        if (window.ResearchDataCollector) {
            window.ResearchDataCollector.consentStatus = LR.consent.status;
        }
        
        console.log('Voluntary consent:', consented ? 'accepted' : 'declined');
    };
    
    // ============================================================
    // 3. FACILITATOR MODE ENTRY
    // ============================================================
    
    window.showFacilitatorModeEntry = function(callback) {
        const overlay = document.createElement('div');
        overlay.id = 'facilitator-overlay';
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        overlay.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full">
                <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
                    <h2 class="text-xl font-bold flex items-center gap-2">
                        <span>🎓</span> Facilitator Mode
                    </h2>
                    <p class="text-purple-100 text-sm mt-1">Enter your credentials to facilitate a small group session</p>
                </div>
                
                <div class="p-6">
                    <div class="mb-4">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Facilitator ID
                        </label>
                        <input type="text" 
                               id="facilitator-id-input"
                               placeholder="e.g., FAC001"
                               class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-mono
                                      focus:border-purple-500 focus:outline-none">
                    </div>
                    
                    <div class="mb-4">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Your Name (for students to see)
                        </label>
                        <input type="text" 
                               id="facilitator-name-input"
                               placeholder="e.g., Dr. Smith"
                               class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                                      focus:border-purple-500 focus:outline-none">
                    </div>
                    
                    <div class="mb-4">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Group/Section (optional)
                        </label>
                        <input type="text" 
                               id="facilitator-group-input"
                               placeholder="e.g., Group A, Section 2"
                               class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                                      focus:border-purple-500 focus:outline-none">
                    </div>
                    
                    <div id="facilitator-error" class="hidden bg-red-50 text-red-700 p-3 rounded-lg text-sm mb-4">
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="cancelFacilitatorMode()" 
                                class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300">
                            Cancel
                        </button>
                        <button onclick="startFacilitatorMode()" 
                                class="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
                            Start Facilitating
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        
        window._facilitatorCallback = callback;
        
        setTimeout(() => {
            document.getElementById('facilitator-id-input')?.focus();
        }, 100);
    };
    
    window.startFacilitatorMode = function() {
        const facId = document.getElementById('facilitator-id-input')?.value?.trim();
        const facName = document.getElementById('facilitator-name-input')?.value?.trim();
        const facGroup = document.getElementById('facilitator-group-input')?.value?.trim();
        const errorDiv = document.getElementById('facilitator-error');
        
        if (!facId) {
            errorDiv.textContent = 'Please enter your Facilitator ID';
            errorDiv.classList.remove('hidden');
            return;
        }
        
        if (!facName) {
            errorDiv.textContent = 'Please enter your name';
            errorDiv.classList.remove('hidden');
            return;
        }
        
        // Store facilitator info
        const facilitatorInfo = {
            id: facId,
            name: facName,
            group: facGroup,
            startTime: Date.now()
        };
        
        sessionStorage.setItem('reasondx_facilitator', JSON.stringify(facilitatorInfo));
        
        // Update SmallGroupMode if available
        if (window.SmallGroupMode) {
            window.SmallGroupMode.role = 'facilitator';
            window.SmallGroupMode.facilitatorId = facId;
            window.SmallGroupMode.facilitatorName = facName;
        }
        
        document.getElementById('facilitator-overlay')?.remove();
        
        if (window._facilitatorCallback) {
            window._facilitatorCallback(facilitatorInfo);
            window._facilitatorCallback = null;
        }
        
        // Show confirmation
        showToast('🎓 Facilitator mode activated', 'success');
    };
    
    window.cancelFacilitatorMode = function() {
        document.getElementById('facilitator-overlay')?.remove();
        if (window._facilitatorCallback) {
            window._facilitatorCallback(null);
            window._facilitatorCallback = null;
        }
    };
    
    // ============================================================
    // 4. SESSION RECOVERY
    // ============================================================
    
    window.initSessionRecovery = function() {
        if (!LR.settings.enableSessionRecovery) return;
        
        // Check for crashed session
        const savedSession = localStorage.getItem('reasondx_active_session');
        if (savedSession) {
            try {
                const session = JSON.parse(savedSession);
                const age = Date.now() - session.lastSave;
                const maxAge = 2 * 60 * 60 * 1000; // 2 hours
                
                if (age < maxAge && session.caseId) {
                    LR.recoveryData = session;
                    showSessionRecoveryPrompt(session);
                } else {
                    // Too old, clear it
                    localStorage.removeItem('reasondx_active_session');
                }
            } catch (e) {
                localStorage.removeItem('reasondx_active_session');
            }
        }
        
        // Start auto-save
        setInterval(autoSaveSession, LR.settings.autoSaveIntervalMs);
    };
    
    function autoSaveSession() {
        if (!window.state?.caseType || window.state?.screen === 'home') return;
        
        const sessionData = {
            caseId: window.state.caseType,
            caseTitle: window.state.caseTitle || '',
            screen: window.state.screen,
            stage: window.state.stage,
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
    
    function showSessionRecoveryPrompt(session) {
        const caseTitle = session.caseTitle || session.caseId;
        const timeAgo = formatTimeAgo(Date.now() - session.lastSave);
        
        const overlay = document.createElement('div');
        overlay.id = 'recovery-overlay';
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        overlay.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full">
                <div class="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
                    <h2 class="text-xl font-bold flex items-center gap-2">
                        <span>💾</span> Resume Previous Session?
                    </h2>
                </div>
                
                <div class="p-6">
                    <p class="text-gray-700 mb-4">
                        You have an unfinished case from <strong>${timeAgo}</strong>:
                    </p>
                    
                    <div class="bg-gray-50 rounded-lg p-4 mb-4">
                        <p class="font-semibold text-gray-800">${caseTitle}</p>
                        <p class="text-sm text-gray-600">Stage: ${session.stage || session.screen}</p>
                        <p class="text-sm text-gray-600">Differential: ${session.rankedDifferential?.length || 0} diagnoses</p>
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="discardRecoveredSession()" 
                                class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300">
                            Start Fresh
                        </button>
                        <button onclick="restoreRecoveredSession()" 
                                class="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600">
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    window.restoreRecoveredSession = function() {
        if (!LR.recoveryData) return;
        
        // Restore state
        Object.assign(window.state, {
            caseType: LR.recoveryData.caseId,
            screen: LR.recoveryData.screen,
            stage: LR.recoveryData.stage,
            rankedDifferential: LR.recoveryData.rankedDifferential || [],
            confidence: LR.recoveryData.confidence,
            selectedHistory: LR.recoveryData.selectedHistory || [],
            selectedPhysical: LR.recoveryData.selectedPhysical || [],
            selectedWorkup: LR.recoveryData.selectedWorkup || []
        });
        
        document.getElementById('recovery-overlay')?.remove();
        localStorage.removeItem('reasondx_active_session');
        LR.recoveryData = null;
        
        // Re-render
        if (typeof render === 'function') render();
        
        showToast('Session restored!', 'success');
    };
    
    window.discardRecoveredSession = function() {
        document.getElementById('recovery-overlay')?.remove();
        localStorage.removeItem('reasondx_active_session');
        LR.recoveryData = null;
    };
    
    // Clear saved session when case completes normally
    window.clearActiveSession = function() {
        localStorage.removeItem('reasondx_active_session');
    };
    
    // ============================================================
    // 5. REAL-TIME FACULTY DASHBOARD
    // ============================================================
    
    window.renderFacultyLiveDashboard = function() {
        const sessions = JSON.parse(localStorage.getItem('reasondx_research_data') || '[]');
        const today = new Date().toDateString();
        
        // Calculate stats
        const todaySessions = sessions.filter(s => new Date(s.startTime).toDateString() === today);
        const uniqueStudentsToday = new Set(todaySessions.map(s => s.studentId)).size;
        const casesCompleted = todaySessions.filter(s => s.endTime).length;
        
        // Get case popularity
        const caseCounts = {};
        sessions.forEach(s => {
            if (s.caseId) {
                caseCounts[s.caseId] = (caseCounts[s.caseId] || 0) + 1;
            }
        });
        const topCases = Object.entries(caseCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        
        // Get recent activity
        const recentSessions = sessions.slice(-10).reverse();
        
        return `
            <div class="fade-in max-w-6xl mx-auto">
                <div class="card p-6 mb-6">
                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center gap-4">
                            <span class="text-4xl">📊</span>
                            <div>
                                <h2 class="text-2xl font-bold text-gray-800">Live Dashboard</h2>
                                <p class="text-gray-600">Real-time platform activity</p>
                            </div>
                        </div>
                        <button onclick="refreshDashboard()" class="btn-secondary px-4 py-2">
                            🔄 Refresh
                        </button>
                    </div>
                    
                    <!-- Today's Stats -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div class="bg-blue-50 rounded-lg p-4 text-center">
                            <div class="text-3xl font-bold text-blue-700">${uniqueStudentsToday}</div>
                            <div class="text-sm text-blue-600">Students Today</div>
                        </div>
                        <div class="bg-green-50 rounded-lg p-4 text-center">
                            <div class="text-3xl font-bold text-green-700">${todaySessions.length}</div>
                            <div class="text-sm text-green-600">Sessions Today</div>
                        </div>
                        <div class="bg-purple-50 rounded-lg p-4 text-center">
                            <div class="text-3xl font-bold text-purple-700">${casesCompleted}</div>
                            <div class="text-sm text-purple-600">Cases Completed</div>
                        </div>
                        <div class="bg-amber-50 rounded-lg p-4 text-center">
                            <div class="text-3xl font-bold text-amber-700">${sessions.length}</div>
                            <div class="text-sm text-amber-600">Total Sessions</div>
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Popular Cases -->
                        <div class="bg-gray-50 rounded-lg p-4">
                            <h3 class="font-semibold text-gray-800 mb-3">🏆 Most Popular Cases</h3>
                            ${topCases.length > 0 ? `
                                <div class="space-y-2">
                                    ${topCases.map(([caseId, count], i) => `
                                        <div class="flex items-center justify-between bg-white rounded p-2">
                                            <span class="text-gray-700">${i + 1}. ${caseId}</span>
                                            <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm">${count}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : '<p class="text-gray-500 text-sm">No data yet</p>'}
                        </div>
                        
                        <!-- Recent Activity -->
                        <div class="bg-gray-50 rounded-lg p-4">
                            <h3 class="font-semibold text-gray-800 mb-3">⏱️ Recent Activity</h3>
                            ${recentSessions.length > 0 ? `
                                <div class="space-y-2 max-h-64 overflow-y-auto">
                                    ${recentSessions.map(s => `
                                        <div class="bg-white rounded p-2 text-sm">
                                            <div class="flex justify-between">
                                                <span class="font-mono text-gray-600">${s.studentId || 'Anonymous'}</span>
                                                <span class="text-gray-400">${formatTimeAgo(Date.now() - s.startTime)}</span>
                                            </div>
                                            <div class="text-gray-700">${s.caseId || 'Unknown case'}</div>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : '<p class="text-gray-500 text-sm">No recent activity</p>'}
                        </div>
                    </div>
                </div>
            </div>
        `;
    };
    
    window.refreshDashboard = function() {
        if (typeof render === 'function') render();
    };
    
    // ============================================================
    // 6. STUDENT FEEDBACK SYSTEM
    // ============================================================
    
    window.showFeedbackButton = function() {
        // Add floating feedback button if not exists
        if (document.getElementById('feedback-fab')) return;
        
        const fab = document.createElement('button');
        fab.id = 'feedback-fab';
        fab.className = 'fixed bottom-4 right-4 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-40 flex items-center justify-center text-xl';
        fab.innerHTML = '💬';
        fab.title = 'Send Feedback';
        fab.onclick = showFeedbackModal;
        document.body.appendChild(fab);
    };
    
    window.showFeedbackModal = function() {
        const currentCase = window.state?.caseType || 'N/A';
        const currentScreen = window.state?.screen || 'N/A';
        
        const overlay = document.createElement('div');
        overlay.id = 'feedback-overlay';
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        overlay.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full">
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                    <h2 class="text-xl font-bold flex items-center gap-2">
                        <span>💬</span> Send Feedback
                    </h2>
                    <p class="text-blue-100 text-sm mt-1">Help us improve ReasonDx</p>
                </div>
                
                <div class="p-6">
                    <div class="mb-4">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Feedback Type
                        </label>
                        <select id="feedback-type" class="w-full px-4 py-2 border rounded-lg">
                            <option value="bug">🐛 Bug Report</option>
                            <option value="content">📝 Content Error</option>
                            <option value="suggestion">💡 Suggestion</option>
                            <option value="praise">⭐ Something I Love</option>
                            <option value="other">💬 Other</option>
                        </select>
                    </div>
                    
                    <div class="mb-4">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Your Feedback
                        </label>
                        <textarea id="feedback-text" 
                                  rows="4"
                                  placeholder="Describe your feedback..."
                                  class="w-full px-4 py-2 border rounded-lg resize-none"></textarea>
                    </div>
                    
                    <div class="text-xs text-gray-500 mb-4">
                        Context: ${currentCase} / ${currentScreen}
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="closeFeedbackModal()" 
                                class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300">
                            Cancel
                        </button>
                        <button onclick="submitFeedback()" 
                                class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    };
    
    window.closeFeedbackModal = function() {
        document.getElementById('feedback-overlay')?.remove();
    };
    
    window.submitFeedback = function() {
        const type = document.getElementById('feedback-type')?.value;
        const text = document.getElementById('feedback-text')?.value?.trim();
        
        if (!text) {
            alert('Please enter your feedback');
            return;
        }
        
        const feedback = {
            id: 'fb_' + Date.now(),
            type: type,
            text: text,
            timestamp: Date.now(),
            context: {
                caseId: window.state?.caseType,
                screen: window.state?.screen,
                studentId: localStorage.getItem('reasondx_study_id'),
                userAgent: navigator.userAgent
            }
        };
        
        // Store locally
        const feedbackList = JSON.parse(localStorage.getItem('reasondx_feedback') || '[]');
        feedbackList.push(feedback);
        localStorage.setItem('reasondx_feedback', JSON.stringify(feedbackList));
        
        // Try to send to Power Automate if configured
        if (window.ResearchConfig?.powerAutomateUrl) {
            fetch(window.ResearchConfig.powerAutomateUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'no-cors',
                body: JSON.stringify({ feedbackSubmission: feedback })
            }).catch(() => {});
        }
        
        closeFeedbackModal();
        showToast('Thanks for your feedback! 🙏', 'success');
    };
    
    // ============================================================
    // 7. LSCS CHECK-IN REMINDERS
    // ============================================================
    
    window.trackLSCSSkip = function() {
        const skipCount = parseInt(localStorage.getItem('reasondx_lscs_skips') || '0') + 1;
        localStorage.setItem('reasondx_lscs_skips', skipCount.toString());
        
        if (skipCount >= LR.settings.lscsReminderThreshold && skipCount % LR.settings.lscsReminderThreshold === 0) {
            showLSCSReminder();
        }
    };
    
    function showLSCSReminder() {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-20 right-4 bg-amber-50 border border-amber-200 rounded-lg p-4 shadow-lg z-50 max-w-xs';
        toast.innerHTML = `
            <div class="flex items-start gap-3">
                <span class="text-2xl">💡</span>
                <div>
                    <p class="font-semibold text-amber-800">Quick Check-ins Help!</p>
                    <p class="text-sm text-amber-700 mt-1">
                        The brief check-ins give you personalized insights about your learning patterns.
                    </p>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                            class="text-amber-600 text-sm mt-2 hover:underline">
                        Got it
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.remove(), 10000);
    };
    
    window.resetLSCSSkipCount = function() {
        localStorage.setItem('reasondx_lscs_skips', '0');
    };
    
    // ============================================================
    // 8. IRB DATA EXPORT
    // ============================================================
    
    window.generateIRBDataReport = function() {
        const sessions = JSON.parse(localStorage.getItem('reasondx_research_data') || '[]');
        const consent = {
            total: 0,
            consented: 0,
            declined: 0,
            curricular: 0,
            voluntary: 0,
            publicationOptOut: 0
        };
        
        // Count consent from sessions
        const uniqueStudents = new Set();
        sessions.forEach(s => {
            if (s.studentId && !uniqueStudents.has(s.studentId)) {
                uniqueStudents.add(s.studentId);
                consent.total++;
                if (s.consentStatus === 'consented') consent.consented++;
                if (s.consentStatus === 'declined') consent.declined++;
                if (s.sessionType === 'curricular') consent.curricular++;
                if (s.sessionType === 'voluntary') consent.voluntary++;
            }
        });
        
        const report = {
            reportGenerated: new Date().toISOString(),
            studyInfo: LR.studyConfig,
            
            participantSummary: {
                totalParticipants: uniqueStudents.size,
                consentedToResearch: consent.consented,
                declinedResearch: consent.declined,
                curricularParticipants: consent.curricular,
                voluntaryParticipants: consent.voluntary,
                publicationOptOuts: consent.publicationOptOut
            },
            
            sessionSummary: {
                totalSessions: sessions.length,
                completedSessions: sessions.filter(s => s.endTime).length,
                averageDuration: sessions.length > 0 
                    ? Math.round(sessions.reduce((sum, s) => sum + (s.durationMinutes || 0), 0) / sessions.length)
                    : 0,
                sessionsByMode: {
                    individual: sessions.filter(s => s.mode === 'individual' || !s.mode).length,
                    smallGroup: sessions.filter(s => s.mode === 'small-group').length,
                    assessment: sessions.filter(s => s.mode === 'assessment').length
                }
            },
            
            dataCollectionSummary: {
                rpfsDataCollected: sessions.filter(s => s.rpfsData).length,
                crdaDataCollected: sessions.filter(s => s.smallGroupData).length,
                lscsDataCollected: sessions.filter(s => s.lscsData).length,
                assessmentDataCollected: sessions.filter(s => s.assessmentData).length
            },
            
            dateRange: {
                earliest: sessions.length > 0 ? new Date(Math.min(...sessions.map(s => s.startTime))).toISOString() : null,
                latest: sessions.length > 0 ? new Date(Math.max(...sessions.map(s => s.startTime))).toISOString() : null
            }
        };
        
        return report;
    };
    
    window.downloadIRBReport = function() {
        const report = generateIRBDataReport();
        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ReasonDx_IRB_Report_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    
    window.renderIRBReportPanel = function() {
        const report = generateIRBDataReport();
        
        return `
            <div class="card p-6">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-xl font-bold text-gray-800">📋 IRB Data Summary</h3>
                    <button onclick="downloadIRBReport()" class="btn-primary px-4 py-2">
                        Download Report
                    </button>
                </div>
                
                <div class="grid md:grid-cols-3 gap-4 mb-6">
                    <div class="bg-blue-50 rounded-lg p-4">
                        <h4 class="font-semibold text-blue-800 mb-2">Participants</h4>
                        <div class="space-y-1 text-sm">
                            <div class="flex justify-between">
                                <span>Total:</span>
                                <span class="font-bold">${report.participantSummary.totalParticipants}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Consented:</span>
                                <span class="font-bold text-green-600">${report.participantSummary.consentedToResearch}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Declined:</span>
                                <span class="font-bold text-red-600">${report.participantSummary.declinedResearch}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-green-50 rounded-lg p-4">
                        <h4 class="font-semibold text-green-800 mb-2">Sessions</h4>
                        <div class="space-y-1 text-sm">
                            <div class="flex justify-between">
                                <span>Total:</span>
                                <span class="font-bold">${report.sessionSummary.totalSessions}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Completed:</span>
                                <span class="font-bold">${report.sessionSummary.completedSessions}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Avg Duration:</span>
                                <span class="font-bold">${report.sessionSummary.averageDuration} min</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-purple-50 rounded-lg p-4">
                        <h4 class="font-semibold text-purple-800 mb-2">Data Collected</h4>
                        <div class="space-y-1 text-sm">
                            <div class="flex justify-between">
                                <span>RPFS:</span>
                                <span class="font-bold">${report.dataCollectionSummary.rpfsDataCollected}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>CRDA:</span>
                                <span class="font-bold">${report.dataCollectionSummary.crdaDataCollected}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>LSCS:</span>
                                <span class="font-bold">${report.dataCollectionSummary.lscsDataCollected}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-sm text-gray-500">
                    Date range: ${report.dateRange.earliest ? new Date(report.dateRange.earliest).toLocaleDateString() : 'N/A'} 
                    to ${report.dateRange.latest ? new Date(report.dateRange.latest).toLocaleDateString() : 'N/A'}
                </div>
            </div>
        `;
    };
    
    // ============================================================
    // 9. FACULTY SETTINGS PANEL
    // ============================================================
    
    window.renderFacultySettingsPanel = function() {
        const powerAutomateUrl = window.ResearchConfig?.powerAutomateUrl || '';
        const dataEndpoint = window.ResearchConfig?.dataEndpoint || '';
        
        return `
            <div class="card p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-6">⚙️ Research Settings</h3>
                
                <div class="space-y-6">
                    <!-- Power Automate URL -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Microsoft 365 Power Automate URL
                        </label>
                        <input type="text" 
                               id="settings-power-automate-url"
                               value="${powerAutomateUrl}"
                               placeholder="https://prod-xx.westus.logic.azure.com/..."
                               class="w-full px-4 py-2 border rounded-lg font-mono text-sm">
                        <p class="text-xs text-gray-500 mt-1">
                            Paste your Power Automate HTTP POST URL here for automatic data backup
                        </p>
                    </div>
                    
                    <!-- Study Configuration -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            IRB Number
                        </label>
                        <input type="text" 
                               id="settings-irb-number"
                               value="${LR.studyConfig.irbNumber}"
                               placeholder="e.g., IRB-2025-001"
                               class="w-full px-4 py-2 border rounded-lg">
                    </div>
                    
                    <!-- Toggle Settings -->
                    <div class="space-y-3">
                        <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" 
                                   id="settings-session-recovery"
                                   ${LR.settings.enableSessionRecovery ? 'checked' : ''}>
                            <span class="text-gray-700">Enable session recovery (auto-save)</span>
                        </label>
                        
                        <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" 
                                   id="settings-study-id-validation"
                                   ${LR.settings.requireStudyIdValidation ? 'checked' : ''}>
                            <span class="text-gray-700">Require strict Study ID format validation</span>
                        </label>
                        
                        <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" 
                                   id="settings-consent-first-visit"
                                   ${LR.settings.showConsentOnFirstVisit ? 'checked' : ''}>
                            <span class="text-gray-700">Show consent dialog on first visit</span>
                        </label>
                    </div>
                    
                    <button onclick="saveFacultySettings()" 
                            class="btn-primary px-6 py-2">
                        Save Settings
                    </button>
                </div>
            </div>
        `;
    };
    
    window.saveFacultySettings = function() {
        // Update Power Automate URL
        const powerAutomateUrl = document.getElementById('settings-power-automate-url')?.value?.trim();
        if (powerAutomateUrl && window.ResearchConfig) {
            window.ResearchConfig.powerAutomateUrl = powerAutomateUrl;
            localStorage.setItem('reasondx_power_automate_url', powerAutomateUrl);
        }
        
        // Update IRB number
        const irbNumber = document.getElementById('settings-irb-number')?.value?.trim();
        LR.studyConfig.irbNumber = irbNumber;
        localStorage.setItem('reasondx_irb_number', irbNumber);
        
        // Update toggle settings
        LR.settings.enableSessionRecovery = document.getElementById('settings-session-recovery')?.checked;
        LR.settings.requireStudyIdValidation = document.getElementById('settings-study-id-validation')?.checked;
        LR.settings.showConsentOnFirstVisit = document.getElementById('settings-consent-first-visit')?.checked;
        
        localStorage.setItem('reasondx_settings', JSON.stringify(LR.settings));
        
        showToast('Settings saved!', 'success');
    };
    
    // ============================================================
    // 10. LAUNCH CHECKLIST VALIDATOR
    // ============================================================
    
    window.renderLaunchChecklist = function() {
        const checks = [
            {
                name: 'Power Automate URL configured',
                status: !!window.ResearchConfig?.powerAutomateUrl,
                fix: 'Add your Power Automate URL in Settings'
            },
            {
                name: 'IRB number entered',
                status: !!LR.studyConfig.irbNumber,
                fix: 'Add IRB approval number in Settings'
            },
            {
                name: 'Research data module loaded',
                status: typeof window.ResearchDataCollector !== 'undefined',
                fix: 'Ensure reasondx-research-data-collection.js is loaded'
            },
            {
                name: 'Small group mode available',
                status: typeof window.SmallGroupMode !== 'undefined',
                fix: 'Ensure reasondx-small-group-mode.js is loaded'
            },
            {
                name: 'Clinical skills cases available',
                status: typeof window.ClinicalSkillsCases !== 'undefined' || document.querySelector('[data-clinical-case]'),
                fix: 'Ensure reasondx-clinical-skills-cases.js is loaded'
            },
            {
                name: 'Consent system ready',
                status: typeof showResearchConsent === 'function',
                fix: 'Launch readiness module not fully loaded'
            },
            {
                name: 'Session recovery enabled',
                status: LR.settings.enableSessionRecovery,
                fix: 'Enable in Settings'
            },
            {
                name: 'Feedback button visible',
                status: !!document.getElementById('feedback-fab'),
                fix: 'Call showFeedbackButton()'
            }
        ];
        
        const passCount = checks.filter(c => c.status).length;
        const allPass = passCount === checks.length;
        
        return `
            <div class="card p-6">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-xl font-bold text-gray-800">🚀 Launch Checklist</h3>
                    <span class="px-3 py-1 rounded-full text-sm font-semibold ${
                        allPass ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }">
                        ${passCount}/${checks.length} Ready
                    </span>
                </div>
                
                <div class="space-y-3">
                    ${checks.map(check => `
                        <div class="flex items-center gap-3 p-3 rounded-lg ${
                            check.status ? 'bg-green-50' : 'bg-red-50'
                        }">
                            <span class="text-xl">${check.status ? '✅' : '❌'}</span>
                            <div class="flex-1">
                                <p class="font-medium ${check.status ? 'text-green-800' : 'text-red-800'}">
                                    ${check.name}
                                </p>
                                ${!check.status ? `
                                    <p class="text-sm text-red-600">${check.fix}</p>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                ${allPass ? `
                    <div class="mt-6 p-4 bg-green-100 rounded-lg text-center">
                        <p class="text-green-800 font-semibold">🎉 All systems ready for launch!</p>
                    </div>
                ` : `
                    <div class="mt-6 p-4 bg-amber-100 rounded-lg text-center">
                        <p class="text-amber-800">Complete the items above before launching the study</p>
                    </div>
                `}
            </div>
        `;
    };
    
    // ============================================================
    // UTILITY FUNCTIONS
    // ============================================================
    
    function formatTimeAgo(ms) {
        const seconds = Math.floor(ms / 1000);
        if (seconds < 60) return 'just now';
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        return `${days}d ago`;
    }
    
    window.showToast = function(message, type = 'info') {
        const colors = {
            success: 'bg-green-500',
            error: 'bg-red-500',
            info: 'bg-blue-500',
            warning: 'bg-amber-500'
        };
        
        const toast = document.createElement('div');
        toast.className = `fixed bottom-4 left-1/2 transform -translate-x-1/2 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('opacity-0', 'transition-opacity');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };
    
    // ============================================================
    // INITIALIZATION
    // ============================================================
    
    window.initLaunchReadiness = function() {
        if (LR.initialized) return;
        
        // Load saved settings
        const savedSettings = localStorage.getItem('reasondx_settings');
        if (savedSettings) {
            try {
                Object.assign(LR.settings, JSON.parse(savedSettings));
            } catch (e) {}
        }
        
        // Load Power Automate URL
        const savedUrl = localStorage.getItem('reasondx_power_automate_url');
        if (savedUrl && window.ResearchConfig) {
            window.ResearchConfig.powerAutomateUrl = savedUrl;
        }
        
        // Load IRB number
        const savedIrb = localStorage.getItem('reasondx_irb_number');
        if (savedIrb) {
            LR.studyConfig.irbNumber = savedIrb;
        }
        
        // Initialize session recovery
        initSessionRecovery();
        
        // Show feedback button
        showFeedbackButton();
        
        LR.initialized = true;
        console.log('🚀 Launch Readiness module initialized');
    };
    
    // Auto-initialize on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initLaunchReadiness, 500);
        });
    } else {
        setTimeout(initLaunchReadiness, 500);
    }
    
    console.log('ReasonDx Launch Readiness module loaded v' + LR.version);
    
})();
