// ============================================================
// REASONDX RESEARCH DATA COLLECTION MODULE
// Centralized data collection for IRB-approved research
// ============================================================
//
// This module provides:
// 1. Automatic collection of all platform interactions
// 2. Student ID tracking (required for curricular, optional for voluntary)
// 3. Consent management (curricular vs. voluntary opt-out)
// 4. Session-based data packaging
// 5. Multiple submission methods (download, server, LMS)
// 6. Faculty dashboard for data aggregation
// ============================================================

(function() {
    'use strict';
    
    // ============================================================
    // CONFIGURATION - SET THESE FOR YOUR INSTITUTION
    // ============================================================
    
    window.ResearchConfig = {
        // Institution info
        institutionName: 'NSU Dr. Kiran C. Patel College of Allopathic Medicine',
        studyTitle: 'ReasonDx Clinical Reasoning Study',
        piName: 'Lauren Mazzurco, DO',
        irbNumber: '', // Fill in when approved
        
        // Data collection endpoints (optional - for server-based collection)
        // If not set, data will be stored locally and exported manually
        dataEndpoint: '', // e.g., 'https://your-server.edu/api/reasondx/submit'
        apiKey: '', // For authenticated submissions
        
        // Google Sheets integration (alternative to server)
        googleScriptUrl: '', // Google Apps Script web app URL
        
        // LMS integration
        lmsType: 'canvas', // 'canvas', 'blackboard', 'moodle', 'none'
        lmsDataFieldId: '', // For LTI integration
        
        // Consent settings
        requireConsentForVoluntary: true,
        allowOptOutForVoluntary: true,
        curricularDataCollection: true, // Always true - curricular data is collected
        
        // Data retention
        localStorageKey: 'reasondx_research_data',
        maxLocalSessions: 100, // Keep last N sessions locally
        
        // Session settings
        sessionTimeoutMinutes: 120,
        autoSaveIntervalSeconds: 30
    };
    
    // ============================================================
    // RESEARCH DATA COLLECTOR STATE
    // ============================================================
    
    window.ResearchDataCollector = {
        initialized: false,
        currentSession: null,
        consentStatus: null, // 'consented', 'opted-out', 'pending'
        studentId: null,
        sessionType: null, // 'curricular', 'voluntary'
        autoSaveInterval: null
    };
    
    const RDC = window.ResearchDataCollector;
    
    // ============================================================
    // INITIALIZATION
    // ============================================================
    
    window.initResearchDataCollection = function(config = {}) {
        // Merge config
        Object.assign(ResearchConfig, config);
        
        // Load consent status
        RDC.consentStatus = localStorage.getItem('reasondx_research_consent') || 'pending';
        RDC.studentId = localStorage.getItem('reasondx_student_id') || null;
        
        // Check if this is curricular or voluntary use
        RDC.sessionType = detectSessionType();
        
        RDC.initialized = true;
        
        console.log('Research Data Collection initialized:', {
            consent: RDC.consentStatus,
            studentId: RDC.studentId ? 'Set' : 'Not set',
            sessionType: RDC.sessionType
        });
        
        // Start auto-save if consented or curricular
        if (shouldCollectData()) {
            startAutoSave();
        }
        
        return RDC;
    };
    
    function detectSessionType() {
        // Check URL parameters or state for curricular indicators
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('curricular') === 'true' || 
            urlParams.get('assessment') === 'true' ||
            urlParams.get('class') ||
            window.state?.assessmentMode ||
            window.state?.smallGroupMode) {
            return 'curricular';
        }
        return 'voluntary';
    }
    
    function shouldCollectData() {
        if (RDC.sessionType === 'curricular') {
            return true; // Always collect for curricular
        }
        return RDC.consentStatus === 'consented';
    }
    
    // ============================================================
    // CONSENT MANAGEMENT
    // ============================================================
    
    window.showResearchConsentDialog = function() {
        if (RDC.sessionType === 'curricular') {
            // For curricular, show information notice (not opt-in)
            return showCurricularNotice();
        }
        
        if (RDC.consentStatus !== 'pending') {
            return; // Already decided
        }
        
        // Show opt-in/opt-out dialog for voluntary use
        const dialog = document.createElement('div');
        dialog.id = 'research-consent-dialog';
        dialog.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        dialog.innerHTML = `
            <div class="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                <div class="bg-blue-600 text-white p-6 rounded-t-xl">
                    <h2 class="text-xl font-bold">Research Study Participation</h2>
                    <p class="text-blue-100 mt-1">${ResearchConfig.studyTitle}</p>
                </div>
                
                <div class="p-6">
                    <p class="text-gray-700 mb-4">
                        You are using ReasonDx for <strong>voluntary practice</strong> (not required for any course).
                    </p>
                    
                    <p class="text-gray-700 mb-4">
                        We are conducting research to understand how medical students develop clinical reasoning skills. 
                        Your de-identified data can help improve medical education.
                    </p>
                    
                    <div class="bg-gray-50 rounded-lg p-4 mb-4">
                        <h3 class="font-semibold text-gray-800 mb-2">What data is collected:</h3>
                        <ul class="text-sm text-gray-600 space-y-1">
                            <li>• Diagnostic decisions and reasoning patterns</li>
                            <li>• Time spent on each stage</li>
                            <li>• Confidence ratings</li>
                            <li>• Learning progression</li>
                        </ul>
                    </div>
                    
                    <div class="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 class="font-semibold text-blue-800 mb-2">Your choice:</h3>
                        <p class="text-sm text-blue-700">
                            <strong>Opting out</strong> does NOT affect your platform access. 
                            You still get all feedback and analytics.
                        </p>
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="setResearchConsent('consented')" 
                                class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                            Yes, include my data
                        </button>
                        <button onclick="setResearchConsent('opted-out')"
                                class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300">
                            No, opt out
                        </button>
                    </div>
                    
                    <p class="text-xs text-gray-500 mt-4 text-center">
                        You can change this choice anytime in Settings.
                        ${ResearchConfig.irbNumber ? `IRB #${ResearchConfig.irbNumber}` : ''}
                    </p>
                </div>
            </div>
        `;
        document.body.appendChild(dialog);
    };
    
    function showCurricularNotice() {
        // Just an informational notice - they can't opt out of curricular data
        const dialog = document.createElement('div');
        dialog.id = 'research-consent-dialog';
        dialog.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        dialog.innerHTML = `
            <div class="bg-white rounded-xl shadow-2xl max-w-lg w-full">
                <div class="bg-green-600 text-white p-6 rounded-t-xl">
                    <h2 class="text-xl font-bold">Course Activity - Data Collection Notice</h2>
                </div>
                
                <div class="p-6">
                    <p class="text-gray-700 mb-4">
                        This is a <strong>required course activity</strong>. Your performance data will be collected 
                        as part of your educational assessment.
                    </p>
                    
                    <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                        <p class="text-sm text-amber-800">
                            <strong>For research:</strong> De-identified data may be used for educational research. 
                            You may request exclusion from <em>publications</em> without affecting your grade.
                        </p>
                    </div>
                    
                    <p class="text-sm text-gray-600 mb-4">
                        Contact ${ResearchConfig.piName} if you have questions.
                    </p>
                    
                    <button onclick="acknowledgeCurricularNotice()" 
                            class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
                        I Understand - Continue
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(dialog);
    }
    
    window.setResearchConsent = function(status) {
        RDC.consentStatus = status;
        localStorage.setItem('reasondx_research_consent', status);
        
        const dialog = document.getElementById('research-consent-dialog');
        if (dialog) dialog.remove();
        
        if (status === 'consented') {
            startAutoSave();
            promptForStudentId();
        }
        
        console.log('Research consent set:', status);
    };
    
    window.acknowledgeCurricularNotice = function() {
        const dialog = document.getElementById('research-consent-dialog');
        if (dialog) dialog.remove();
        
        promptForStudentId();
    };
    
    function promptForStudentId() {
        if (RDC.studentId) return;
        
        const id = prompt('Please enter your Student ID for data tracking:');
        if (id && id.trim()) {
            RDC.studentId = id.trim();
            localStorage.setItem('reasondx_student_id', RDC.studentId);
        }
    }
    
    // ============================================================
    // SESSION MANAGEMENT
    // ============================================================
    
    window.startResearchSession = function(sessionConfig = {}) {
        if (!RDC.initialized) {
            initResearchDataCollection();
        }
        
        RDC.currentSession = {
            sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            studentId: RDC.studentId || 'anonymous',
            sessionType: RDC.sessionType,
            consentStatus: RDC.consentStatus,
            startTime: Date.now(),
            startTimeISO: new Date().toISOString(),
            
            // Context
            caseId: sessionConfig.caseId || window.state?.caseType,
            caseTitle: sessionConfig.caseTitle || '',
            mode: sessionConfig.mode || window.state?.mode,
            groupId: sessionConfig.groupId || window.SmallGroupMode?.groupId,
            facilitatorId: sessionConfig.facilitatorId || window.SmallGroupMode?.facilitatorId,
            
            // Data containers
            interactions: [],
            stageData: {},
            rpfsData: null,
            smallGroupData: null,
            assessmentData: null,
            lscsData: null,
            
            // Metadata
            userAgent: navigator.userAgent,
            screenSize: `${window.innerWidth}x${window.innerHeight}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        
        console.log('Research session started:', RDC.currentSession.sessionId);
        
        return RDC.currentSession.sessionId;
    };
    
    window.endResearchSession = function() {
        if (!RDC.currentSession) return null;
        
        RDC.currentSession.endTime = Date.now();
        RDC.currentSession.endTimeISO = new Date().toISOString();
        RDC.currentSession.durationMinutes = Math.round((RDC.currentSession.endTime - RDC.currentSession.startTime) / 60000 * 10) / 10;
        
        // Capture final state from various systems
        captureRPFSData();
        captureSmallGroupData();
        captureAssessmentData();
        captureLSCSData();
        
        // Save session
        saveSessionToStorage(RDC.currentSession);
        
        // Attempt server submission if configured
        if (ResearchConfig.dataEndpoint) {
            submitToServer(RDC.currentSession);
        }
        
        const session = RDC.currentSession;
        RDC.currentSession = null;
        
        console.log('Research session ended:', session.sessionId);
        
        return session;
    };
    
    // ============================================================
    // DATA CAPTURE FUNCTIONS
    // ============================================================
    
    window.logResearchInteraction = function(action, category, details = {}) {
        if (!shouldCollectData() || !RDC.currentSession) return;
        
        const interaction = {
            timestamp: Date.now(),
            timeOffset: Date.now() - RDC.currentSession.startTime,
            action: action,
            category: category,
            details: details,
            currentStage: window.state?.screen || 'unknown'
        };
        
        RDC.currentSession.interactions.push(interaction);
    };
    
    window.logResearchStageData = function(stageName, data) {
        if (!shouldCollectData() || !RDC.currentSession) return;
        
        RDC.currentSession.stageData[stageName] = {
            timestamp: Date.now(),
            data: JSON.parse(JSON.stringify(data))
        };
    };
    
    function captureRPFSData() {
        if (typeof rpfsGenerateReport === 'function') {
            try {
                RDC.currentSession.rpfsData = rpfsGenerateReport();
            } catch (e) {
                console.error('Error capturing RPFS data:', e);
            }
        } else if (typeof window.rpfsExportData === 'function') {
            try {
                RDC.currentSession.rpfsData = JSON.parse(window.rpfsExportData());
            } catch (e) {
                console.error('Error capturing RPFS data:', e);
            }
        }
    }
    
    function captureSmallGroupData() {
        if (window.SmallGroupMode?.enabled && typeof exportSmallGroupData === 'function') {
            try {
                RDC.currentSession.smallGroupData = exportSmallGroupData();
            } catch (e) {
                console.error('Error capturing Small Group data:', e);
            }
        }
    }
    
    function captureAssessmentData() {
        if (window.AssessmentMode?.enabled && typeof generateSubmissionPackage === 'function') {
            try {
                RDC.currentSession.assessmentData = generateSubmissionPackage();
            } catch (e) {
                console.error('Error capturing Assessment data:', e);
            }
        }
    }
    
    function captureLSCSData() {
        if (window.LSCS && typeof window.LSCS.exportData === 'function') {
            try {
                RDC.currentSession.lscsData = window.LSCS.exportData();
            } catch (e) {
                console.error('Error capturing LSCS data:', e);
            }
        }
    }
    
    // ============================================================
    // STORAGE AND SUBMISSION
    // ============================================================
    
    function saveSessionToStorage(session) {
        const key = ResearchConfig.localStorageKey;
        let sessions = [];
        
        try {
            sessions = JSON.parse(localStorage.getItem(key) || '[]');
        } catch (e) {
            sessions = [];
        }
        
        sessions.push(session);
        
        // Keep only last N sessions
        if (sessions.length > ResearchConfig.maxLocalSessions) {
            sessions = sessions.slice(-ResearchConfig.maxLocalSessions);
        }
        
        localStorage.setItem(key, JSON.stringify(sessions));
    }
    
    function startAutoSave() {
        if (RDC.autoSaveInterval) return;
        
        RDC.autoSaveInterval = setInterval(() => {
            if (RDC.currentSession) {
                // Capture current state
                captureRPFSData();
                captureSmallGroupData();
                
                // Save to storage
                const key = ResearchConfig.localStorageKey + '_autosave';
                localStorage.setItem(key, JSON.stringify(RDC.currentSession));
            }
        }, ResearchConfig.autoSaveIntervalSeconds * 1000);
    }
    
    async function submitToServer(session) {
        if (!ResearchConfig.dataEndpoint) return;
        
        try {
            const response = await fetch(ResearchConfig.dataEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': ResearchConfig.apiKey || ''
                },
                body: JSON.stringify(session)
            });
            
            if (response.ok) {
                console.log('Session submitted to server');
                markSessionAsSubmitted(session.sessionId);
            }
        } catch (e) {
            console.error('Server submission failed:', e);
        }
    }
    
    function markSessionAsSubmitted(sessionId) {
        const submitted = JSON.parse(localStorage.getItem('reasondx_submitted_sessions') || '[]');
        submitted.push(sessionId);
        localStorage.setItem('reasondx_submitted_sessions', JSON.stringify(submitted));
    }
    
    // ============================================================
    // EXPORT FUNCTIONS
    // ============================================================
    
    window.exportAllResearchSessions = function() {
        const key = ResearchConfig.localStorageKey;
        try {
            return JSON.parse(localStorage.getItem(key) || '[]');
        } catch (e) {
            return [];
        }
    };
    
    window.downloadResearchData = function(format = 'json') {
        const sessions = exportAllResearchSessions();
        
        if (sessions.length === 0) {
            alert('No research data to export');
            return;
        }
        
        let blob, filename;
        
        if (format === 'csv') {
            const csv = convertSessionsToCSV(sessions);
            blob = new Blob([csv], { type: 'text/csv' });
            filename = `reasondx_research_data_${Date.now()}.csv`;
        } else {
            blob = new Blob([JSON.stringify(sessions, null, 2)], { type: 'application/json' });
            filename = `reasondx_research_data_${Date.now()}.json`;
        }
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };
    
    function convertSessionsToCSV(sessions) {
        const headers = [
            'Session ID', 'Student ID', 'Session Type', 'Case ID', 'Mode',
            'Start Time', 'Duration (min)', 'Interactions Count',
            'Initial Differential Count', 'Final Diagnosis', 'Final Confidence',
            'CRDA Divergence Score', 'Expert Alignment Score'
        ];
        
        const rows = sessions.map(s => {
            const rpfs = s.rpfsData || {};
            const sg = s.smallGroupData || {};
            const assess = s.assessmentData || {};
            
            return [
                s.sessionId,
                s.studentId,
                s.sessionType,
                s.caseId,
                s.mode,
                s.startTimeISO,
                s.durationMinutes || 0,
                s.interactions?.length || 0,
                rpfs.hypothesisEvolution?.snapshots?.[0]?.diagnoses?.length || 0,
                rpfs.hypothesisEvolution?.finalDiagnosis || assess.differential?.final || '',
                rpfs.confidence?.final || assess.differential?.finalConfidence || '',
                sg.divergenceAnalysis?.differential?.score || '',
                sg.crdaComparison?.differential?.divergence?.revisedToFacilitator?.score || ''
            ].map(v => typeof v === 'string' && v.includes(',') ? `"${v}"` : v).join(',');
        });
        
        return [headers.join(','), ...rows].join('\n');
    }
    
    window.clearResearchData = function(confirm = false) {
        if (!confirm) {
            if (!window.confirm('Are you sure you want to clear all local research data? This cannot be undone.')) {
                return false;
            }
        }
        
        localStorage.removeItem(ResearchConfig.localStorageKey);
        localStorage.removeItem(ResearchConfig.localStorageKey + '_autosave');
        console.log('Research data cleared');
        return true;
    };
    
    // ============================================================
    // FACULTY DATA AGGREGATION
    // ============================================================
    
    window.renderResearchDataDashboard = function() {
        const sessions = exportAllResearchSessions();
        
        // Calculate summary statistics
        const stats = {
            totalSessions: sessions.length,
            uniqueStudents: new Set(sessions.map(s => s.studentId)).size,
            curricularSessions: sessions.filter(s => s.sessionType === 'curricular').length,
            voluntarySessions: sessions.filter(s => s.sessionType === 'voluntary').length,
            avgDuration: sessions.length > 0 
                ? Math.round(sessions.reduce((sum, s) => sum + (s.durationMinutes || 0), 0) / sessions.length * 10) / 10
                : 0,
            totalInteractions: sessions.reduce((sum, s) => sum + (s.interactions?.length || 0), 0)
        };
        
        return `
            <div class="fade-in max-w-6xl mx-auto">
                <div class="card p-6 mb-6">
                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center gap-4">
                            <span class="text-4xl">📊</span>
                            <div>
                                <h2 class="text-2xl font-bold text-gray-800">Research Data Dashboard</h2>
                                <p class="text-gray-600">${ResearchConfig.studyTitle}</p>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button onclick="downloadResearchData('json')" class="btn-primary px-4 py-2">
                                Export JSON
                            </button>
                            <button onclick="downloadResearchData('csv')" class="btn-secondary px-4 py-2">
                                Export CSV
                            </button>
                        </div>
                    </div>
                    
                    <!-- Summary Stats -->
                    <div class="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                        <div class="bg-blue-50 rounded-lg p-4 text-center">
                            <div class="text-2xl font-bold text-blue-700">${stats.totalSessions}</div>
                            <div class="text-xs text-blue-600">Total Sessions</div>
                        </div>
                        <div class="bg-green-50 rounded-lg p-4 text-center">
                            <div class="text-2xl font-bold text-green-700">${stats.uniqueStudents}</div>
                            <div class="text-xs text-green-600">Unique Students</div>
                        </div>
                        <div class="bg-purple-50 rounded-lg p-4 text-center">
                            <div class="text-2xl font-bold text-purple-700">${stats.curricularSessions}</div>
                            <div class="text-xs text-purple-600">Curricular</div>
                        </div>
                        <div class="bg-amber-50 rounded-lg p-4 text-center">
                            <div class="text-2xl font-bold text-amber-700">${stats.voluntarySessions}</div>
                            <div class="text-xs text-amber-600">Voluntary</div>
                        </div>
                        <div class="bg-teal-50 rounded-lg p-4 text-center">
                            <div class="text-2xl font-bold text-teal-700">${stats.avgDuration}</div>
                            <div class="text-xs text-teal-600">Avg Minutes</div>
                        </div>
                        <div class="bg-rose-50 rounded-lg p-4 text-center">
                            <div class="text-2xl font-bold text-rose-700">${stats.totalInteractions}</div>
                            <div class="text-xs text-rose-600">Interactions</div>
                        </div>
                    </div>
                    
                    <!-- Import Section -->
                    <div class="bg-gray-50 rounded-lg p-4 mb-6">
                        <h3 class="font-semibold text-gray-800 mb-2">Import Student Data</h3>
                        <p class="text-sm text-gray-600 mb-2">Upload JSON files from student devices or LMS submissions</p>
                        <input type="file" accept=".json" multiple 
                               onchange="importResearchDataFiles(this.files)"
                               class="text-sm">
                    </div>
                    
                    <!-- Sessions Table -->
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="p-2 text-left">Student</th>
                                    <th class="p-2 text-left">Case</th>
                                    <th class="p-2 text-left">Type</th>
                                    <th class="p-2 text-center">Duration</th>
                                    <th class="p-2 text-center">Interactions</th>
                                    <th class="p-2 text-left">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${sessions.slice(-50).reverse().map(s => `
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="p-2 font-mono text-xs">${s.studentId || 'N/A'}</td>
                                        <td class="p-2">${s.caseId || s.caseTitle || 'N/A'}</td>
                                        <td class="p-2">
                                            <span class="px-2 py-0.5 rounded text-xs ${
                                                s.sessionType === 'curricular' 
                                                    ? 'bg-purple-100 text-purple-700' 
                                                    : 'bg-amber-100 text-amber-700'
                                            }">${s.sessionType || 'unknown'}</span>
                                        </td>
                                        <td class="p-2 text-center">${s.durationMinutes || 0} min</td>
                                        <td class="p-2 text-center">${s.interactions?.length || 0}</td>
                                        <td class="p-2 text-xs text-gray-500">${new Date(s.startTime).toLocaleString()}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                        ${sessions.length > 50 ? `<p class="text-sm text-gray-500 mt-2">Showing last 50 of ${sessions.length} sessions</p>` : ''}
                    </div>
                </div>
            </div>
        `;
    };
    
    window.importResearchDataFiles = function(files) {
        let importCount = 0;
        
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    // Handle array of sessions or single session
                    const sessions = Array.isArray(data) ? data : [data];
                    
                    sessions.forEach(session => {
                        if (session.sessionId) {
                            saveSessionToStorage(session);
                            importCount++;
                        }
                    });
                    
                    console.log(`Imported ${importCount} sessions from ${file.name}`);
                    
                    // Refresh display
                    if (typeof render === 'function') render();
                } catch (err) {
                    console.error('Error importing file:', file.name, err);
                }
            };
            reader.readAsText(file);
        });
    };
    
    // ============================================================
    // INTEGRATION HOOKS
    // ============================================================
    
    // Auto-start session when case begins
    window.addEventListener('load', () => {
        // Initialize on page load
        setTimeout(() => {
            initResearchDataCollection();
        }, 1000);
    });
    
    // Hook into existing RPFS logging
    const originalRpfsLog = window.rpfsLogInteraction;
    if (typeof originalRpfsLog === 'function') {
        window.rpfsLogInteraction = function(action, target, details) {
            // Call original
            originalRpfsLog(action, target, details);
            // Also log to research collector
            logResearchInteraction(action, target, details);
        };
    }
    
    console.log('ReasonDx Research Data Collection module loaded');
    
})();
