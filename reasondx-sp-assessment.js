/**
 * ReasonDx SP Assessment Mode
 * Version 2.0 - Individual & Team-Based Clinical Reasoning
 * 
 * Features:
 * - 13-stage clinical reasoning flow
 * - Individual response → Confidence → Discussion → Revision → Confidence
 * - Facilitator dashboard for small groups
 * - Course Director dashboard with real-time analytics
 * - Session pre-generation and management
 * - CSV export for research data
 */

(function() {
    'use strict';

    // ================================================
    // SP ASSESSMENT STATE
    // ================================================
    
    window.spAssessmentState = {
        active: false,
        sessionCode: null,
        caseId: null,
        studentId: null,
        studentName: '',
        teamId: null,
        teamName: '',
        role: null, // 'student', 'facilitator', 'director'
        currentStage: 0,
        currentPhase: 'individual', // 'individual', 'discussion', 'revision'
        
        // 13-stage flow with correct confidence patterns
        stages: [
            { 
                id: 'initial-ddx', 
                name: 'Initial Differential Diagnosis',
                icon: '🎯',
                prompt: 'Based on the chief complaint, list your differential diagnosis in order of likelihood.',
                hasInitialConfidence: true,
                hasDiscussion: true,
                hasRevision: true,
                hasRevisionConfidence: true,
                inputType: 'differential'
            },
            { 
                id: 'plan-history', 
                name: 'Plan History Questions',
                icon: '📝',
                prompt: 'What history questions would you ask? Match each question to which differential diagnosis it helps evaluate.',
                hasInitialConfidence: false,
                hasDiscussion: true,
                hasRevision: true,
                hasRevisionConfidence: false,
                inputType: 'history-planning'
            },
            { 
                id: 'take-history', 
                name: 'Document History Findings',
                icon: '📋',
                prompt: 'Document the history findings from your encounter. Include HPI, PMH, medications, family history, social history.',
                hasInitialConfidence: false,
                hasDiscussion: true,
                hasRevision: false,
                hasRevisionConfidence: false,
                inputType: 'group-documentation',
                isGroupActivity: true
            },
            { 
                id: 'post-history-ddx', 
                name: 'Post-History Differential',
                icon: '🔄',
                prompt: 'Based on the history, revise your differential diagnosis. What moved up? What moved down? What was ruled out?',
                hasInitialConfidence: true,
                hasDiscussion: true,
                hasRevision: true,
                hasRevisionConfidence: true,
                inputType: 'differential'
            },
            { 
                id: 'plan-exam', 
                name: 'Plan Physical Exam',
                icon: '🩺',
                prompt: 'What physical exam maneuvers would you perform? What findings are you looking for and why?',
                hasInitialConfidence: false,
                hasDiscussion: true,
                hasRevision: false,
                hasRevisionConfidence: false,
                inputType: 'exam-planning',
                discussionNote: 'Practice the exam maneuvers with your group'
            },
            { 
                id: 'exam-results', 
                name: 'Physical Exam Results',
                icon: '📊',
                prompt: 'Review the physical exam findings.',
                hasInitialConfidence: false,
                hasDiscussion: false,
                hasRevision: false,
                hasRevisionConfidence: false,
                inputType: 'results-review',
                isResultsStage: true
            },
            { 
                id: 'post-exam-ddx', 
                name: 'Post-Exam Differential',
                icon: '🔄',
                prompt: 'Based on history AND physical exam findings, revise your differential diagnosis.',
                hasInitialConfidence: true,
                hasDiscussion: true,
                hasRevision: true,
                hasRevisionConfidence: true,
                inputType: 'differential'
            },
            { 
                id: 'order-workup', 
                name: 'Order Diagnostic Workup',
                icon: '🔬',
                prompt: 'What diagnostic tests would you order? Include labs, imaging, and any other studies. Justify each choice.',
                hasInitialConfidence: true,
                hasDiscussion: true,
                hasRevision: true,
                hasRevisionConfidence: false,
                inputType: 'workup-ordering'
            },
            { 
                id: 'workup-results', 
                name: 'Workup Results',
                icon: '📈',
                prompt: 'Review the diagnostic test results.',
                hasInitialConfidence: false,
                hasDiscussion: false,
                hasRevision: false,
                hasRevisionConfidence: false,
                inputType: 'results-review',
                isResultsStage: true
            },
            { 
                id: 'final-ddx', 
                name: 'Final Diagnosis',
                icon: '✅',
                prompt: 'Based on all available information, what is your final diagnosis? What is your reasoning?',
                hasInitialConfidence: true,
                hasDiscussion: true,
                hasRevision: true,
                hasRevisionConfidence: true,
                inputType: 'final-diagnosis'
            },
            { 
                id: 'management-plan', 
                name: 'Management Plan',
                icon: '💊',
                prompt: 'What is your management plan? Include disposition, medications, consultations, and follow-up.',
                hasInitialConfidence: true,
                hasDiscussion: true,
                hasRevision: true,
                hasRevisionConfidence: true,
                inputType: 'management'
            },
            { 
                id: 'patient-counseling', 
                name: 'Patient Counseling',
                icon: '💬',
                prompt: 'Write an explanation for the patient at a 6th-grade literacy level. Explain their problem and the plan in plain language.',
                hasInitialConfidence: false,
                hasDiscussion: true,
                hasRevision: true,
                hasRevisionConfidence: false,
                inputType: 'counseling',
                discussionNote: 'Practice explaining this verbally to your group'
            },
            { 
                id: 'sbar-handoff', 
                name: 'SBAR Handoff',
                icon: '🤝',
                prompt: 'Write an SBAR handoff for this patient as if you were handing off to the next provider.',
                hasInitialConfidence: false,
                hasDiscussion: true,
                hasRevision: true,
                hasRevisionConfidence: false,
                inputType: 'sbar',
                discussionNote: 'Practice your verbal SBAR with your group'
            }
        ],
        
        responses: {}
    };

    // ================================================
    // UTILITY FUNCTIONS
    // ================================================
    
    function generateSessionCode() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }
    
    function generatePIN() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }
    
    function getConfidenceLabel(n) {
        const labels = { 1: 'Guessing', 2: 'Uncertain', 3: 'Somewhat', 4: 'Confident', 5: 'Very Sure' };
        return labels[n] || '';
    }
    
    function getStagePlaceholder(stageId) {
        const placeholders = {
            'initial-ddx': '1. Most likely diagnosis\n2. Second most likely\n3. Third most likely\n...\n\nInclude "must not miss" diagnoses',
            'plan-history': 'List questions you would ask:\n- Question 1 → helps evaluate [diagnosis]\n- Question 2 → helps evaluate [diagnosis]',
            'take-history': 'HPI:\n\nPMH:\n\nMedications:\n\nAllergies:\n\nFamily History:\n\nSocial History:',
            'post-history-ddx': '1. Most likely (moved up/down because...)\n2. \n3. \n\nRuled out: [diagnosis] because...',
            'plan-exam': 'Exam maneuvers to perform:\n- [maneuver] → looking for [finding]',
            'post-exam-ddx': '1. Most likely diagnosis\n2. \n3. \n\nReasoning:',
            'order-workup': 'Tests to order:\n- [test] → looking for [result]',
            'final-ddx': 'Final diagnosis: \n\nReasoning: \n\nKey supporting evidence:',
            'management': 'Disposition:\n\nMedications:\n\nConsultations:\n\nFollow-up:',
            'patient-counseling': '"You have... This means... We are going to... You should watch for..."',
            'sbar-handoff': 'S - Situation:\n\nB - Background:\n\nA - Assessment:\n\nR - Recommendation:'
        };
        return placeholders[stageId] || 'Enter your response...';
    }
    
    function getAllSessions() {
        const sessions = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('sp_session_')) {
                try {
                    sessions.push(JSON.parse(localStorage.getItem(key)));
                } catch (e) {}
            }
        }
        return sessions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    // ================================================
    // SETUP SCREEN
    // ================================================
    
    window.renderSPAssessmentSetup = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const casesAvailable = typeof cases !== 'undefined' ? cases.filter(c => c.variants && Object.keys(c.variants).length > 0) : [];
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-zinc-900 dark:to-zinc-800 text-zinc-900 dark:text-zinc-100">
                <div class="max-w-3xl mx-auto px-6 py-12">
                    
                    <button onclick="goToScreen('menu')" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 flex items-center gap-2">
                        ← Back to Menu
                    </button>
                    
                    <div class="text-center mb-10">
                        <span class="text-5xl mb-4 block">🩺</span>
                        <h1 class="text-3xl font-bold mb-2">SP Assessment Mode</h1>
                        <p class="text-zinc-600 dark:text-zinc-400">Clinical reasoning with confidence tracking and collaborative discussion</p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        
                        <!-- Student Join -->
                        <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                            <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
                                <span class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">👤</span>
                                Join as Student
                            </h2>
                            
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium mb-2">Session Code</label>
                                    <input type="text" id="spSessionCode" placeholder="ABC123" 
                                        class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-lg tracking-widest uppercase text-center font-mono"
                                        maxlength="6" oninput="this.value = this.value.toUpperCase()">
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium mb-2">Display Name (use assigned ID)</label>
                                    <input type="text" id="spStudentName" placeholder="e.g., Student042" 
                                        class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900">
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium mb-2">Team/Table</label>
                                    <input type="text" id="spTeamName" placeholder="e.g., Table 3" 
                                        class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900">
                                </div>
                                
                                <button onclick="window.spJoinAsStudent()" 
                                    class="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold">
                                    Join Session →
                                </button>
                            </div>
                        </div>
                        
                        <!-- Facilitator Join -->
                        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-6">
                            <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-900 dark:text-purple-100">
                                <span class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">👩‍🏫</span>
                                Facilitator
                            </h2>
                            
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium mb-2 text-purple-800 dark:text-purple-200">Session Code</label>
                                    <input type="text" id="spFacilitatorCode" placeholder="ABC123" 
                                        class="w-full px-4 py-3 border border-purple-300 dark:border-purple-700 rounded-lg bg-white dark:bg-zinc-900 text-lg tracking-widest uppercase text-center font-mono"
                                        maxlength="6" oninput="this.value = this.value.toUpperCase()">
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium mb-2 text-purple-800 dark:text-purple-200">Facilitator PIN</label>
                                    <input type="text" id="spFacilitatorPIN" placeholder="1234" 
                                        class="w-full px-4 py-3 border border-purple-300 dark:border-purple-700 rounded-lg bg-white dark:bg-zinc-900 text-lg tracking-widest text-center font-mono"
                                        maxlength="4">
                                </div>
                                
                                <button onclick="window.spJoinAsFacilitator()" 
                                    class="w-full py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-semibold">
                                    Open Dashboard →
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Course Director -->
                    <div class="mt-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
                        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-900 dark:text-blue-100">
                            <span class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">🎓</span>
                            Course Director
                        </h2>
                        
                        <div class="grid md:grid-cols-2 gap-4 mb-4">
                            <button onclick="goToScreen('sp-director-sessions')" 
                                class="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-400 transition text-left">
                                <p class="font-semibold text-blue-800 dark:text-blue-200">📋 Manage Sessions</p>
                                <p class="text-sm text-blue-600 dark:text-blue-400">Create & pre-generate codes</p>
                            </button>
                            
                            <button onclick="goToScreen('sp-director-dashboard')" 
                                class="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-400 transition text-left">
                                <p class="font-semibold text-blue-800 dark:text-blue-200">📊 Live Dashboard</p>
                                <p class="text-sm text-blue-600 dark:text-blue-400">Real-time analytics & export</p>
                            </button>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-4">
                            <button onclick="goToScreen('classroom-setup')" 
                                class="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl border border-indigo-300 dark:border-indigo-700 hover:border-indigo-500 transition text-left">
                                <p class="font-semibold text-indigo-800 dark:text-indigo-200">🎓 Classroom Mode</p>
                                <p class="text-sm text-indigo-600 dark:text-indigo-400">Large group - you control the pace</p>
                            </button>
                            
                            <button onclick="goToScreen('sp-google-sheets-setup')" 
                                class="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-400 transition text-left">
                                <p class="font-semibold text-blue-800 dark:text-blue-200">📊 Google Sheets</p>
                                <p class="text-sm text-blue-600 dark:text-blue-400">Configure auto-sync</p>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Learning Flow -->
                    <div class="mt-6 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-5">
                        <h3 class="font-semibold mb-3">📚 The Learning Flow</h3>
                        <div class="grid grid-cols-4 gap-3 text-sm text-center">
                            <div>
                                <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</div>
                                <p class="font-medium">Individual</p>
                                <p class="text-xs text-zinc-500">Answer + confidence</p>
                            </div>
                            <div>
                                <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">2</div>
                                <p class="font-medium">Discussion</p>
                                <p class="text-xs text-zinc-500">Share reasoning</p>
                            </div>
                            <div>
                                <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">3</div>
                                <p class="font-medium">Revision</p>
                                <p class="text-xs text-zinc-500">Update answer</p>
                            </div>
                            <div>
                                <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">4</div>
                                <p class="font-medium">Confidence</p>
                                <p class="text-xs text-zinc-500">Rate again</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `;
    };

    // ================================================
    // JOIN FUNCTIONS
    // ================================================
    
    window.spJoinAsStudent = function() {
        const code = document.getElementById('spSessionCode')?.value?.toUpperCase();
        const name = document.getElementById('spStudentName')?.value?.trim();
        const team = document.getElementById('spTeamName')?.value?.trim() || 'Unassigned';
        
        if (!code || code.length !== 6) { alert('Enter valid 6-character code'); return; }
        if (!name) { alert('Enter your display name'); return; }
        
        const sessionData = localStorage.getItem('sp_session_' + code);
        if (!sessionData) { alert('Session not found'); return; }
        
        const session = JSON.parse(sessionData);
        const studentId = 'STU_' + Date.now();
        
        spAssessmentState.active = true;
        spAssessmentState.sessionCode = code;
        spAssessmentState.caseId = session.caseId;
        spAssessmentState.studentId = studentId;
        spAssessmentState.studentName = name;
        spAssessmentState.teamName = team;
        spAssessmentState.teamId = team.toLowerCase().replace(/\s+/g, '-');
        spAssessmentState.role = 'student';
        spAssessmentState.currentStage = 0;
        spAssessmentState.currentPhase = 'individual';
        spAssessmentState.responses = {};
        
        // Add to session
        session.students = session.students || [];
        session.students.push({ id: studentId, name, team, joinedAt: new Date().toISOString() });
        session.studentResponses = session.studentResponses || [];
        localStorage.setItem('sp_session_' + code, JSON.stringify(session));
        
        goToScreen('sp-assessment');
    };
    
    window.spJoinAsFacilitator = function() {
        const code = document.getElementById('spFacilitatorCode')?.value?.toUpperCase();
        const pin = document.getElementById('spFacilitatorPIN')?.value;
        
        if (!code || code.length !== 6) { alert('Enter valid session code'); return; }
        if (!pin || pin.length !== 4) { alert('Enter 4-digit PIN'); return; }
        
        const sessionData = localStorage.getItem('sp_session_' + code);
        if (!sessionData) { alert('Session not found'); return; }
        
        const session = JSON.parse(sessionData);
        if (session.facilitatorPIN !== pin) { alert('Invalid PIN'); return; }
        
        spAssessmentState.active = true;
        spAssessmentState.sessionCode = code;
        spAssessmentState.caseId = session.caseId;
        spAssessmentState.role = 'facilitator';
        
        goToScreen('sp-facilitator-dashboard');
    };

    // ================================================
    // STUDENT ASSESSMENT SCREEN
    // ================================================
    
    window.renderSPAssessmentScreen = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const stage = spAssessmentState.stages[spAssessmentState.currentStage];
        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === spAssessmentState.caseId) : null;
        const response = spAssessmentState.responses[stage.id] || {};
        const phase = spAssessmentState.currentPhase;
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                
                <header class="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 sticky top-0 z-50">
                    <div class="max-w-4xl mx-auto px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-xs text-zinc-500 uppercase">SP Assessment</p>
                                <h1 class="font-semibold">${caseData?.title || 'Case'}</h1>
                            </div>
                            <div class="text-right text-sm">
                                <p class="font-medium">${spAssessmentState.studentName}</p>
                                <p class="text-xs text-zinc-500">${spAssessmentState.teamName} • ${spAssessmentState.sessionCode}</p>
                            </div>
                        </div>
                        
                        <!-- Progress -->
                        <div class="mt-4 flex gap-1">
                            ${spAssessmentState.stages.map((s, i) => `
                                <div class="flex-1 h-2 rounded-full ${i < spAssessmentState.currentStage ? 'bg-green-500' : i === spAssessmentState.currentStage ? 'bg-blue-500' : 'bg-zinc-200 dark:bg-zinc-700'}"></div>
                            `).join('')}
                        </div>
                        <p class="text-xs text-zinc-500 mt-1">${stage.icon} Stage ${spAssessmentState.currentStage + 1}/${spAssessmentState.stages.length}: ${stage.name}</p>
                    </div>
                </header>
                
                <main class="max-w-4xl mx-auto px-6 py-8">
                    ${stage.isResultsStage ? renderResultsStage(stage) : 
                      stage.isGroupActivity ? renderGroupActivity(stage, response) :
                      phase === 'individual' ? renderIndividualPhase(stage, response, caseData) :
                      phase === 'discussion' ? renderDiscussionPhase(stage, response) :
                      renderRevisionPhase(stage, response)}
                </main>
            </div>
            </div>
        `;
    };
    
    function renderIndividualPhase(stage, response, caseData) {
        if (response.initial !== undefined) {
            return `
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                    <div class="flex items-center gap-3 mb-6">
                        <span class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-2xl">✓</span>
                        <div>
                            <h2 class="text-xl font-semibold">Response Submitted</h2>
                            <p class="text-sm text-zinc-500">Ready for ${stage.hasDiscussion ? 'discussion' : 'next stage'}</p>
                        </div>
                    </div>
                    
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
                        <p class="text-sm font-medium text-blue-600 mb-2">Your Response:</p>
                        <p class="whitespace-pre-wrap">${response.initial}</p>
                        ${response.initialConfidence ? `<p class="text-xs text-blue-500 mt-2">Confidence: ${response.initialConfidence}/5</p>` : ''}
                    </div>
                    
                    ${stage.hasDiscussion ? `
                        <button onclick="window.spAdvancePhase('discussion')" class="w-full py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-semibold">
                            Ready for Discussion →
                        </button>
                    ` : `
                        <button onclick="window.spNextStage()" class="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                            Continue →
                        </button>
                    `}
                </div>
            `;
        }
        
        return `
            <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-2xl">${stage.icon}</span>
                    <div>
                        <h2 class="text-xl font-semibold">${stage.name}</h2>
                        <p class="text-sm text-zinc-500">Individual Response</p>
                    </div>
                </div>
                
                ${caseData?.chiefComplaint ? `
                    <div class="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-4 mb-6">
                        <p class="text-sm text-zinc-500">Chief Complaint</p>
                        <p class="font-medium">${caseData.chiefComplaint}</p>
                    </div>
                ` : ''}
                
                <p class="text-zinc-600 dark:text-zinc-400 mb-4">${stage.prompt}</p>
                
                <textarea id="spInput" rows="6" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-900 mb-4"
                    placeholder="${getStagePlaceholder(stage.id)}"></textarea>
                
                ${stage.hasInitialConfidence ? `
                    <div class="mb-6">
                        <label class="block text-sm font-medium mb-3">How confident are you?</label>
                        <div class="flex gap-2" id="confBtns">
                            ${[1,2,3,4,5].map(n => `
                                <button type="button" onclick="window.spSelectConfidence(${n})"
                                    class="flex-1 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-blue-400 font-semibold transition" id="conf${n}">
                                    ${n}<br><span class="text-xs text-zinc-500">${getConfidenceLabel(n)}</span>
                                </button>
                            `).join('')}
                        </div>
                        <input type="hidden" id="spConfidence" value="">
                    </div>
                ` : ''}
                
                <button onclick="window.spSubmitInitial('${stage.id}')" class="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold text-lg">
                    Submit Response
                </button>
            </div>
        `;
    }
    
    function renderDiscussionPhase(stage, response) {
        return `
            <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-2xl">💬</span>
                    <div>
                        <h2 class="text-xl font-semibold">Discussion Phase</h2>
                        <p class="text-sm text-zinc-500">${stage.name}</p>
                    </div>
                </div>
                
                <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
                    <p class="text-sm font-medium text-blue-600 mb-2">Your Initial Response:</p>
                    <p class="whitespace-pre-wrap">${response.initial}</p>
                    ${response.initialConfidence ? `<p class="text-xs text-blue-500 mt-2">Confidence: ${response.initialConfidence}/5</p>` : ''}
                </div>
                
                <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 mb-6">
                    <h3 class="font-semibold text-purple-800 dark:text-purple-200 mb-3">🗣️ Discussion Guide</h3>
                    <ul class="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                        <li>• Share your reasoning with your group</li>
                        <li>• What did others consider that you didn't?</li>
                        <li>• Where do you agree or disagree?</li>
                        <li>• What evidence supports each view?</li>
                    </ul>
                    ${stage.discussionNote ? `<p class="mt-4 font-medium text-purple-800 dark:text-purple-200">📌 ${stage.discussionNote}</p>` : ''}
                </div>
                
                ${stage.hasRevision ? `
                    <button onclick="window.spAdvancePhase('revision')" class="w-full py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold text-lg">
                        Ready to Revise →
                    </button>
                ` : `
                    <button onclick="window.spNextStage()" class="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold text-lg">
                        Continue →
                    </button>
                `}
            </div>
        `;
    }
    
    function renderRevisionPhase(stage, response) {
        if (response.revised !== undefined) {
            return `
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                    <div class="flex items-center gap-3 mb-6">
                        <span class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">✓</span>
                        <div>
                            <h2 class="text-xl font-semibold">Revision Complete</h2>
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-4 mb-6">
                        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                            <p class="text-xs font-medium text-blue-600 mb-1">Initial ${response.initialConfidence ? `(${response.initialConfidence}/5)` : ''}</p>
                            <p class="text-sm whitespace-pre-wrap">${response.initial}</p>
                        </div>
                        <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                            <p class="text-xs font-medium text-green-600 mb-1">Revised ${response.revisedConfidence ? `(${response.revisedConfidence}/5)` : ''}</p>
                            <p class="text-sm whitespace-pre-wrap">${response.revised}</p>
                        </div>
                    </div>
                    
                    <button onclick="window.spNextStage()" class="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Continue →
                    </button>
                </div>
            `;
        }
        
        return `
            <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-2xl">✏️</span>
                    <div>
                        <h2 class="text-xl font-semibold">Revise Your Response</h2>
                        <p class="text-sm text-zinc-500">Based on the discussion</p>
                    </div>
                </div>
                
                <div class="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-4 mb-4">
                    <p class="text-xs text-zinc-500 mb-1">Your Initial Response:</p>
                    <p class="text-sm whitespace-pre-wrap">${response.initial}</p>
                </div>
                
                <p class="text-sm text-zinc-500 mb-2">You can keep it the same, modify it, or change completely.</p>
                
                <textarea id="spRevisionInput" rows="6" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-900 mb-4">${response.initial}</textarea>
                
                ${stage.hasRevisionConfidence ? `
                    <div class="mb-6">
                        <label class="block text-sm font-medium mb-3">How confident are you now?</label>
                        <div class="flex gap-2">
                            ${[1,2,3,4,5].map(n => `
                                <button type="button" onclick="window.spSelectRevisionConfidence(${n})"
                                    class="flex-1 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-green-400 font-semibold transition" id="revConf${n}">
                                    ${n}<br><span class="text-xs text-zinc-500">${getConfidenceLabel(n)}</span>
                                </button>
                            `).join('')}
                        </div>
                        <input type="hidden" id="spRevisionConfidence" value="">
                    </div>
                ` : ''}
                
                <button onclick="window.spSubmitRevision('${stage.id}')" class="w-full py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold text-lg">
                    Submit Revised Response
                </button>
            </div>
        `;
    }
    
    function renderResultsStage(stage) {
        return `
            <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl">${stage.icon}</span>
                    <div>
                        <h2 class="text-xl font-semibold">${stage.name}</h2>
                        <p class="text-sm text-zinc-500">Review the findings</p>
                    </div>
                </div>
                
                <div class="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 mb-6">
                    <p class="text-amber-800 dark:text-amber-200">
                        ${stage.id === 'exam-results' ? '🩺 Review the physical exam findings with your instructor.' : '📋 Review the test results provided.'}
                    </p>
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-medium mb-2">Notes (optional):</label>
                    <textarea id="spNotes" rows="3" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-900" placeholder="Key findings..."></textarea>
                </div>
                
                <button onclick="window.spSaveNotes('${stage.id}'); window.spNextStage()" class="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                    Continue →
                </button>
            </div>
        `;
    }
    
    function renderGroupActivity(stage, response) {
        if (response.initial !== undefined) {
            return `
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                    <div class="flex items-center gap-3 mb-6">
                        <span class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">✓</span>
                        <h2 class="text-xl font-semibold">Documentation Complete</h2>
                    </div>
                    <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 mb-6">
                        <p class="whitespace-pre-wrap">${response.initial}</p>
                    </div>
                    <button onclick="window.spNextStage()" class="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Continue →
                    </button>
                </div>
            `;
        }
        
        return `
            <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">${stage.icon}</span>
                    <div>
                        <h2 class="text-xl font-semibold">${stage.name}</h2>
                        <p class="text-sm text-zinc-500">Group Activity</p>
                    </div>
                </div>
                
                <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 mb-4">
                    <p class="text-purple-800 dark:text-purple-200 font-medium">👥 Work together with your group</p>
                    <p class="text-sm text-purple-700 dark:text-purple-300 mt-1">${stage.prompt}</p>
                </div>
                
                <textarea id="spInput" rows="8" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-900 mb-4"
                    placeholder="${getStagePlaceholder(stage.id)}"></textarea>
                
                <button onclick="window.spSubmitInitial('${stage.id}')" class="w-full py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-semibold">
                    Submit Documentation
                </button>
            </div>
        `;
    }

    // ================================================
    // STUDENT ACTION HANDLERS
    // ================================================
    
    window.spSelectConfidence = function(n) {
        document.getElementById('spConfidence').value = n;
        for (let i = 1; i <= 5; i++) {
            const btn = document.getElementById('conf' + i);
            btn.classList.toggle('ring-2', i === n);
            btn.classList.toggle('ring-blue-500', i === n);
            btn.classList.toggle('bg-blue-50', i === n);
        }
    };
    
    window.spSelectRevisionConfidence = function(n) {
        document.getElementById('spRevisionConfidence').value = n;
        for (let i = 1; i <= 5; i++) {
            const btn = document.getElementById('revConf' + i);
            btn.classList.toggle('ring-2', i === n);
            btn.classList.toggle('ring-green-500', i === n);
            btn.classList.toggle('bg-green-50', i === n);
        }
    };
    
    window.spSubmitInitial = function(stageId) {
        const input = document.getElementById('spInput');
        const conf = document.getElementById('spConfidence');
        const stage = spAssessmentState.stages.find(s => s.id === stageId);
        
        if (!input?.value?.trim()) { alert('Please enter a response'); return; }
        if (stage?.hasInitialConfidence && !conf?.value) { alert('Please select confidence'); return; }
        
        spAssessmentState.responses[stageId] = {
            initial: input.value.trim(),
            initialConfidence: conf?.value ? parseInt(conf.value) : null,
            initialTimestamp: new Date().toISOString()
        };
        
        saveSPData();
        render();
    };
    
    window.spSubmitRevision = function(stageId) {
        const input = document.getElementById('spRevisionInput');
        const conf = document.getElementById('spRevisionConfidence');
        const stage = spAssessmentState.stages.find(s => s.id === stageId);
        
        if (!input?.value?.trim()) { alert('Please enter a response'); return; }
        if (stage?.hasRevisionConfidence && !conf?.value) { alert('Please select confidence'); return; }
        
        spAssessmentState.responses[stageId].revised = input.value.trim();
        spAssessmentState.responses[stageId].revisedConfidence = conf?.value ? parseInt(conf.value) : null;
        spAssessmentState.responses[stageId].revisedTimestamp = new Date().toISOString();
        
        saveSPData();
        render();
    };
    
    window.spSaveNotes = function(stageId) {
        const notes = document.getElementById('spNotes');
        if (notes?.value?.trim()) {
            spAssessmentState.responses[stageId] = { notes: notes.value.trim(), timestamp: new Date().toISOString() };
            saveSPData();
        }
    };
    
    window.spAdvancePhase = function(phase) {
        spAssessmentState.currentPhase = phase;
        render();
        window.scrollTo(0, 0);
    };
    
    window.spNextStage = function() {
        if (spAssessmentState.currentStage < spAssessmentState.stages.length - 1) {
            spAssessmentState.currentStage++;
            spAssessmentState.currentPhase = 'individual';
            render();
            window.scrollTo(0, 0);
        } else {
            saveSPData();
            alert('🎉 Congratulations! You completed the SP Assessment.');
            goToScreen('menu');
        }
    };
    
    function saveSPData() {
        const key = 'sp_session_' + spAssessmentState.sessionCode;
        const session = JSON.parse(localStorage.getItem(key) || '{}');
        
        const studentData = {
            studentId: spAssessmentState.studentId,
            studentName: spAssessmentState.studentName,
            teamId: spAssessmentState.teamId,
            teamName: spAssessmentState.teamName,
            currentStage: spAssessmentState.currentStage,
            responses: spAssessmentState.responses,
            lastUpdated: new Date().toISOString()
        };
        
        session.studentResponses = session.studentResponses || [];
        const idx = session.studentResponses.findIndex(s => s.studentId === spAssessmentState.studentId);
        if (idx >= 0) session.studentResponses[idx] = studentData;
        else session.studentResponses.push(studentData);
        
        localStorage.setItem(key, JSON.stringify(session));
    }

    // ================================================
    // FACILITATOR DASHBOARD
    // ================================================
    
    window.renderSPFacilitatorDashboard = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const session = JSON.parse(localStorage.getItem('sp_session_' + spAssessmentState.sessionCode) || '{}');
        const students = session.studentResponses || [];
        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === session.caseId) : null;
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                
                <header class="bg-purple-600 text-white py-4">
                    <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
                        <div>
                            <p class="text-purple-200 text-sm">Facilitator Dashboard</p>
                            <h1 class="font-semibold text-xl">${caseData?.title || 'SP Assessment'}</h1>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="text-center px-4 py-2 bg-white/20 rounded-lg">
                                <p class="text-2xl font-bold font-mono">${spAssessmentState.sessionCode}</p>
                            </div>
                            <button onclick="render()" class="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30">🔄 Refresh</button>
                        </div>
                    </div>
                </header>
                
                <main class="max-w-6xl mx-auto px-6 py-8">
                    
                    <div class="grid grid-cols-3 gap-4 mb-8">
                        <div class="bg-white dark:bg-zinc-800 rounded-xl p-5 text-center border">
                            <p class="text-4xl font-bold text-purple-600">${students.length}</p>
                            <p class="text-sm text-zinc-500">Students</p>
                        </div>
                        <div class="bg-white dark:bg-zinc-800 rounded-xl p-5 text-center border">
                            <p class="text-4xl font-bold text-green-600">${students.filter(s => Object.keys(s.responses||{}).length > 0).length}</p>
                            <p class="text-sm text-zinc-500">Active</p>
                        </div>
                        <div class="bg-white dark:bg-zinc-800 rounded-xl p-5 text-center border">
                            <p class="text-4xl font-bold text-blue-600">${Math.round(students.reduce((a,s) => a + (s.currentStage||0), 0) / Math.max(students.length,1))}</p>
                            <p class="text-sm text-zinc-500">Avg Stage</p>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-zinc-800 rounded-xl border p-6 mb-6">
                        <h2 class="text-xl font-semibold mb-4">👥 Students</h2>
                        ${students.length === 0 ? `
                            <p class="text-center py-8 text-zinc-500">Waiting for students... Code: <strong>${spAssessmentState.sessionCode}</strong></p>
                        ` : `
                            <table class="w-full">
                                <thead><tr class="text-left text-sm text-zinc-500 border-b"><th class="pb-2">Name</th><th class="pb-2">Team</th><th class="pb-2">Stage</th><th class="pb-2">Progress</th></tr></thead>
                                <tbody>
                                    ${students.map(s => `
                                        <tr class="border-b border-zinc-100 dark:border-zinc-700">
                                            <td class="py-3 font-medium">${s.studentName}</td>
                                            <td class="py-3 text-zinc-500">${s.teamName}</td>
                                            <td class="py-3">${spAssessmentState.stages[s.currentStage||0]?.name || '-'}</td>
                                            <td class="py-3"><div class="flex gap-0.5">${spAssessmentState.stages.map((_,i) => `<div class="w-3 h-3 rounded ${i <= (s.currentStage||0) ? 'bg-green-500' : 'bg-zinc-200'}"></div>`).join('')}</div></td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        `}
                    </div>
                    
                    <div class="bg-white dark:bg-zinc-800 rounded-xl border p-6">
                        <h2 class="text-xl font-semibold mb-4">📋 Responses</h2>
                        <div class="space-y-2">
                            ${spAssessmentState.stages.map(stage => {
                                const count = students.filter(s => s.responses?.[stage.id]).length;
                                return `
                                    <details class="border rounded-lg">
                                        <summary class="px-4 py-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-700 flex justify-between">
                                            <span>${stage.icon} ${stage.name}</span>
                                            <span class="text-sm ${count > 0 ? 'text-green-600' : 'text-zinc-400'}">${count} responses</span>
                                        </summary>
                                        <div class="px-4 py-3 border-t bg-zinc-50 dark:bg-zinc-900 max-h-64 overflow-y-auto text-sm space-y-2">
                                            ${students.filter(s => s.responses?.[stage.id]).map(s => `
                                                <div class="p-2 bg-white dark:bg-zinc-800 rounded">
                                                    <p class="font-medium">${s.studentName} <span class="text-zinc-400 font-normal">(${s.teamName})</span></p>
                                                    <p class="text-xs text-blue-600">Initial${s.responses[stage.id]?.initialConfidence ? ` [${s.responses[stage.id].initialConfidence}/5]` : ''}:</p>
                                                    <p class="whitespace-pre-wrap text-xs">${s.responses[stage.id]?.initial || '-'}</p>
                                                    ${s.responses[stage.id]?.revised ? `
                                                        <p class="text-xs text-green-600 mt-1">Revised${s.responses[stage.id]?.revisedConfidence ? ` [${s.responses[stage.id].revisedConfidence}/5]` : ''}:</p>
                                                        <p class="whitespace-pre-wrap text-xs">${s.responses[stage.id].revised}</p>
                                                    ` : ''}
                                                </div>
                                            `).join('') || '<p class="text-zinc-500">No responses yet</p>'}
                                        </div>
                                    </details>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    
                    <button onclick="goToScreen('sp-assessment-setup')" class="mt-6 px-6 py-3 border rounded-xl hover:bg-zinc-100">← Exit</button>
                </main>
            </div>
            </div>
        `;
    };

    // ================================================
    // DIRECTOR SESSION MANAGEMENT
    // ================================================
    
    window.renderSPDirectorSessions = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const sessions = getAllSessions();
        const casesAvailable = typeof cases !== 'undefined' ? cases.filter(c => c.variants && Object.keys(c.variants).length > 0) : [];
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                
                <header class="bg-blue-600 text-white py-4">
                    <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
                        <div>
                            <p class="text-blue-200 text-sm">Course Director</p>
                            <h1 class="font-semibold text-xl">Session Management</h1>
                        </div>
                        <button onclick="goToScreen('sp-assessment-setup')" class="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30">← Back</button>
                    </div>
                </header>
                
                <main class="max-w-6xl mx-auto px-6 py-8">
                    
                    <div class="bg-white dark:bg-zinc-800 rounded-xl border p-6 mb-8">
                        <h2 class="text-xl font-semibold mb-4">➕ Generate Sessions</h2>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium mb-2">Case</label>
                                <select id="dirCaseSelect" class="w-full px-4 py-3 border rounded-lg bg-white dark:bg-zinc-900">
                                    <option value="">Select case...</option>
                                    ${casesAvailable.map(c => `<option value="${c.id}">${c.title}</option>`).join('')}
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Number of Sessions</label>
                                <input type="number" id="dirSessionCount" value="10" min="1" max="50" class="w-full px-4 py-3 border rounded-lg bg-white dark:bg-zinc-900">
                            </div>
                        </div>
                        <button onclick="window.spGenerateSessions()" class="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                            Generate & Download Codes
                        </button>
                    </div>
                    
                    <div class="bg-white dark:bg-zinc-800 rounded-xl border p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="text-xl font-semibold">📋 Existing Sessions</h2>
                            <button onclick="render()" class="text-blue-600 hover:underline text-sm">🔄 Refresh</button>
                        </div>
                        ${sessions.length === 0 ? '<p class="text-zinc-500 text-center py-8">No sessions yet</p>' : `
                            <table class="w-full text-sm">
                                <thead><tr class="text-left text-zinc-500 border-b"><th class="pb-2">Code</th><th class="pb-2">PIN</th><th class="pb-2">Case</th><th class="pb-2">Students</th><th class="pb-2">Created</th><th class="pb-2">Actions</th></tr></thead>
                                <tbody>
                                    ${sessions.map(s => `
                                        <tr class="border-b border-zinc-100">
                                            <td class="py-3 font-mono font-bold text-blue-600">${s.code}</td>
                                            <td class="py-3 font-mono">${s.facilitatorPIN || '-'}</td>
                                            <td class="py-3">${(typeof cases !== 'undefined' ? cases.find(c => c.id === s.caseId)?.title : null) || s.caseId}</td>
                                            <td class="py-3">${(s.studentResponses||[]).length}</td>
                                            <td class="py-3 text-zinc-500">${new Date(s.createdAt).toLocaleDateString()}</td>
                                            <td class="py-3">
                                                <button onclick="window.spViewSession('${s.code}')" class="text-blue-600 hover:underline mr-2">View</button>
                                                <button onclick="window.spDeleteSession('${s.code}')" class="text-red-600 hover:underline">Delete</button>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        `}
                    </div>
                </main>
            </div>
            </div>
        `;
    };
    
    window.spGenerateSessions = function() {
        const caseId = document.getElementById('dirCaseSelect')?.value;
        const count = parseInt(document.getElementById('dirSessionCount')?.value) || 10;
        
        if (!caseId) { alert('Select a case'); return; }
        
        const generated = [];
        for (let i = 0; i < count; i++) {
            const code = generateSessionCode();
            const pin = generatePIN();
            localStorage.setItem('sp_session_' + code, JSON.stringify({
                code, facilitatorPIN: pin, caseId, createdAt: new Date().toISOString(), students: [], studentResponses: []
            }));
            generated.push({ code, pin, caseId });
        }
        
        // Download CSV
        const caseTitle = (typeof cases !== 'undefined' ? cases.find(c => c.id === caseId)?.title : null) || caseId;
        let csv = 'Session Code,Facilitator PIN,Case,Group\n';
        generated.forEach((s, i) => csv += `${s.code},${s.pin},"${caseTitle}",Group ${i + 1}\n`);
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `sp-sessions-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        
        alert(`✅ Generated ${count} sessions! CSV downloaded.`);
        render();
    };
    
    window.spViewSession = function(code) {
        spAssessmentState.sessionCode = code;
        spAssessmentState.role = 'director';
        goToScreen('sp-director-dashboard');
    };
    
    window.spDeleteSession = function(code) {
        if (confirm(`Delete session ${code}?`)) {
            localStorage.removeItem('sp_session_' + code);
            render();
        }
    };

    // ================================================
    // DIRECTOR LIVE DASHBOARD
    // ================================================
    
    window.renderSPDirectorDashboard = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const sessions = getAllSessions();
        
        let allStudents = [];
        sessions.forEach(s => {
            (s.studentResponses || []).forEach(st => {
                allStudents.push({ ...st, sessionCode: s.code, caseId: s.caseId });
            });
        });
        
        // Calculate confidence change
        let confChanges = [];
        allStudents.forEach(s => {
            ['initial-ddx', 'post-history-ddx', 'post-exam-ddx', 'final-ddx'].forEach(stageId => {
                const r = s.responses?.[stageId];
                if (r?.initialConfidence && r?.revisedConfidence) {
                    confChanges.push(r.revisedConfidence - r.initialConfidence);
                }
            });
        });
        const avgChange = confChanges.length > 0 ? (confChanges.reduce((a,b) => a+b, 0) / confChanges.length).toFixed(1) : '—';
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                
                <header class="bg-blue-600 text-white py-4">
                    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
                        <div>
                            <p class="text-blue-200 text-sm">Course Director</p>
                            <h1 class="font-semibold text-xl">Live Dashboard</h1>
                        </div>
                        <div class="flex gap-3">
                            <button onclick="render()" class="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30">🔄 Refresh</button>
                            <button onclick="window.spExportAllData()" class="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30">📊 Export All</button>
                            <button onclick="goToScreen('sp-assessment-setup')" class="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30">← Back</button>
                        </div>
                    </div>
                </header>
                
                <main class="max-w-7xl mx-auto px-6 py-8">
                    
                    <div class="grid grid-cols-4 gap-4 mb-8">
                        <div class="bg-white dark:bg-zinc-800 rounded-xl p-5 text-center border">
                            <p class="text-4xl font-bold text-blue-600">${sessions.length}</p>
                            <p class="text-sm text-zinc-500">Sessions</p>
                        </div>
                        <div class="bg-white dark:bg-zinc-800 rounded-xl p-5 text-center border">
                            <p class="text-4xl font-bold text-green-600">${allStudents.length}</p>
                            <p class="text-sm text-zinc-500">Students</p>
                        </div>
                        <div class="bg-white dark:bg-zinc-800 rounded-xl p-5 text-center border">
                            <p class="text-4xl font-bold text-purple-600">${allStudents.filter(s => Object.keys(s.responses||{}).length >= 10).length}</p>
                            <p class="text-sm text-zinc-500">Near Complete</p>
                        </div>
                        <div class="bg-white dark:bg-zinc-800 rounded-xl p-5 text-center border">
                            <p class="text-4xl font-bold text-amber-600">${avgChange >= 0 ? '+' : ''}${avgChange}</p>
                            <p class="text-sm text-zinc-500">Avg Conf Δ</p>
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="bg-white dark:bg-zinc-800 rounded-xl border p-6">
                            <h3 class="font-semibold mb-4">📊 Session Progress</h3>
                            <div class="space-y-3">
                                ${sessions.slice(0, 10).map(s => {
                                    const sts = s.studentResponses || [];
                                    const avg = sts.length > 0 ? Math.round(sts.reduce((a, st) => a + (st.currentStage || 0), 0) / sts.length / 13 * 100) : 0;
                                    return `
                                        <div class="flex items-center gap-3">
                                            <span class="font-mono text-sm w-16 text-blue-600">${s.code}</span>
                                            <div class="flex-1 h-3 bg-zinc-200 rounded-full overflow-hidden">
                                                <div class="h-full bg-green-500" style="width: ${avg}%"></div>
                                            </div>
                                            <span class="text-xs text-zinc-500 w-20 text-right">${sts.length} students</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                        
                        <div class="bg-white dark:bg-zinc-800 rounded-xl border p-6">
                            <h3 class="font-semibold mb-4">📈 Confidence (Initial DDx)</h3>
                            ${renderConfChart(allStudents)}
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-zinc-800 rounded-xl border p-6">
                        <h3 class="font-semibold mb-4">📋 Stage Completion</h3>
                        <div class="flex gap-1">
                            ${spAssessmentState.stages.map((stage, i) => {
                                const count = allStudents.filter(s => s.responses?.[stage.id]?.initial).length;
                                const pct = allStudents.length > 0 ? Math.round(count / allStudents.length * 100) : 0;
                                return `
                                    <div class="flex-1 text-center p-2 rounded ${pct > 75 ? 'bg-green-100' : pct > 25 ? 'bg-amber-100' : 'bg-zinc-100'}">
                                        <p class="text-xs font-medium">${i + 1}</p>
                                        <p class="text-lg font-bold">${pct}%</p>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <p class="text-xs text-zinc-500 mt-2 text-center">${spAssessmentState.stages.map((s, i) => `${i+1}. ${s.name}`).join(' | ')}</p>
                    </div>
                </main>
            </div>
            </div>
        `;
    };
    
    function renderConfChart(students) {
        const initial = [0,0,0,0,0];
        const revised = [0,0,0,0,0];
        students.forEach(s => {
            const r = s.responses?.['initial-ddx'];
            if (r?.initialConfidence) initial[r.initialConfidence - 1]++;
            if (r?.revisedConfidence) revised[r.revisedConfidence - 1]++;
        });
        const max = Math.max(...initial, ...revised, 1);
        
        return `
            <div class="flex items-end justify-between h-24 gap-2">
                ${[1,2,3,4,5].map(n => `
                    <div class="flex-1 flex flex-col items-center gap-1">
                        <div class="w-full flex gap-1 items-end" style="height: 60px;">
                            <div class="flex-1 bg-blue-400 rounded-t" style="height: ${(initial[n-1]/max)*100}%"></div>
                            <div class="flex-1 bg-green-400 rounded-t" style="height: ${(revised[n-1]/max)*100}%"></div>
                        </div>
                        <span class="text-xs font-medium">${n}</span>
                    </div>
                `).join('')}
            </div>
            <div class="flex justify-center gap-4 mt-2 text-xs">
                <span class="flex items-center gap-1"><span class="w-3 h-3 bg-blue-400 rounded"></span> Initial</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 bg-green-400 rounded"></span> Revised</span>
            </div>
        `;
    }
    
    window.spExportAllData = function() {
        const sessions = getAllSessions();
        let csv = 'Session,Case,Student ID,Student Name,Team,Stage,Type,Response,Confidence,Timestamp\n';
        
        sessions.forEach(session => {
            const caseTitle = (typeof cases !== 'undefined' ? cases.find(c => c.id === session.caseId)?.title : null) || session.caseId;
            (session.studentResponses || []).forEach(student => {
                spAssessmentState.stages.forEach(stage => {
                    const r = student.responses?.[stage.id];
                    if (r?.initial) {
                        csv += `"${session.code}","${caseTitle}","${student.studentId}","${student.studentName}","${student.teamName}","${stage.name}","initial","${(r.initial||'').replace(/"/g,'""').replace(/\n/g,' ')}",${r.initialConfidence||''},"${r.initialTimestamp||''}"\n`;
                    }
                    if (r?.revised) {
                        csv += `"${session.code}","${caseTitle}","${student.studentId}","${student.studentName}","${student.teamName}","${stage.name}","revised","${(r.revised||'').replace(/"/g,'""').replace(/\n/g,' ')}",${r.revisedConfidence||''},"${r.revisedTimestamp||''}"\n`;
                    }
                });
            });
        });
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `sp-assessment-data-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    // ================================================
    // CLASSROOM MODE - Large Group Instructor-Controlled
    // ================================================
    
    window.classroomState = {
        active: false,
        sessionCode: null,
        caseId: null,
        currentStage: 0,
        currentPhase: 'individual', // 'individual', 'discussion', 'revision'
        stageUnlocked: true,
        autoRefreshInterval: null,
        // Cold call roster - COMPLETELY SEPARATE from assessment data
        coldCallRoster: [], // Array of names for cold calling only
        coldCallHistory: [], // Track who's been called to ensure fairness
        lastColdCall: null
    };
    
    // ================================================
    // CLASSROOM SETUP
    // ================================================
    
    window.renderClassroomSetup = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const casesAvailable = typeof cases !== 'undefined' ? cases.filter(c => c.variants && Object.keys(c.variants).length > 0) : [];
        
        // Load saved roster if exists
        const savedRoster = localStorage.getItem('classroom_cold_call_roster');
        const rosterNames = savedRoster ? JSON.parse(savedRoster) : [];
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-800 text-zinc-900 dark:text-zinc-100">
                <div class="max-w-4xl mx-auto px-6 py-12">
                    
                    <button onclick="goToScreen('sp-assessment-setup')" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 flex items-center gap-2">
                        ← Back
                    </button>
                    
                    <div class="text-center mb-10">
                        <span class="text-5xl mb-4 block">🎓</span>
                        <h1 class="text-3xl font-bold mb-2">Classroom Mode</h1>
                        <p class="text-zinc-600 dark:text-zinc-400">Large group learning - you control the pace for all students</p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        
                        <!-- Create Session -->
                        <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                            <h2 class="text-xl font-semibold mb-4">🎯 Create Session</h2>
                            
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium mb-2">Select Case</label>
                                    <select id="classroomCaseSelect" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900">
                                        <option value="">Choose a case...</option>
                                        ${casesAvailable.map(c => `<option value="${c.id}">${c.title}</option>`).join('')}
                                    </select>
                                </div>
                                
                                <button onclick="window.createClassroomSession()" 
                                    class="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold">
                                    Create Session →
                                </button>
                            </div>
                        </div>
                        
                        <!-- Cold Call Roster (SEPARATE from data) -->
                        <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
                            <h2 class="text-xl font-semibold mb-2 text-amber-900 dark:text-amber-100">🎲 Cold Call Roster</h2>
                            <p class="text-sm text-amber-700 dark:text-amber-300 mb-4">
                                <strong>Separate from assessment data.</strong> Names here are only used for random cold calling - never linked to responses.
                            </p>
                            
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium mb-2 text-amber-800 dark:text-amber-200">Paste student names (one per line)</label>
                                    <textarea id="coldCallRosterInput" rows="6" 
                                        class="w-full px-4 py-3 border border-amber-300 dark:border-amber-700 rounded-lg bg-white dark:bg-zinc-900 text-sm"
                                        placeholder="Sarah Johnson&#10;Michael Chen&#10;Emily Rodriguez&#10;...">${rosterNames.join('\n')}</textarea>
                                </div>
                                
                                <div class="flex gap-2">
                                    <button onclick="window.saveColdCallRoster()" 
                                        class="flex-1 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium">
                                        Save Roster (${rosterNames.length} names)
                                    </button>
                                    <button onclick="window.uploadColdCallCSV()" 
                                        class="px-4 py-2 border border-amber-400 text-amber-700 dark:text-amber-300 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/30">
                                        📄 Upload CSV
                                    </button>
                                </div>
                                
                                <input type="file" id="coldCallCSVInput" accept=".csv,.txt" class="hidden" onchange="window.processColdCallCSV(event)">
                            </div>
                        </div>
                    </div>
                    
                    <!-- How it works -->
                    <div class="mt-6 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-5">
                        <h3 class="font-semibold mb-3">How Classroom Mode Works</h3>
                        <div class="grid md:grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                            <ul class="space-y-2">
                                <li class="flex gap-2">📺 <span>Project instructor view on screen</span></li>
                                <li class="flex gap-2">👥 <span>Students join with session code</span></li>
                                <li class="flex gap-2">⏸️ <span>You control stage progression</span></li>
                            </ul>
                            <ul class="space-y-2">
                                <li class="flex gap-2">📊 <span>Real-time word clouds & charts</span></li>
                                <li class="flex gap-2">🎲 <span>Cold call from your roster</span></li>
                                <li class="flex gap-2">🔒 <span>Responses stay anonymous</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `;
    };
    
    window.saveColdCallRoster = function() {
        const input = document.getElementById('coldCallRosterInput');
        if (!input) return;
        
        const names = input.value.split('\n')
            .map(n => n.trim())
            .filter(n => n.length > 0);
        
        localStorage.setItem('classroom_cold_call_roster', JSON.stringify(names));
        classroomState.coldCallRoster = names;
        classroomState.coldCallHistory = [];
        
        alert(`✅ Saved ${names.length} names for cold calling`);
        render();
    };
    
    window.uploadColdCallCSV = function() {
        document.getElementById('coldCallCSVInput')?.click();
    };
    
    window.processColdCallCSV = function(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            // Parse CSV - assume first column is names, skip header if present
            const lines = text.split('\n');
            const names = [];
            
            lines.forEach((line, idx) => {
                const cols = line.split(',');
                const name = cols[0]?.trim().replace(/^["']|["']$/g, '');
                // Skip if looks like header
                if (idx === 0 && (name.toLowerCase() === 'name' || name.toLowerCase() === 'student')) return;
                if (name && name.length > 0) names.push(name);
            });
            
            document.getElementById('coldCallRosterInput').value = names.join('\n');
            window.saveColdCallRoster();
        };
        reader.readAsText(file);
    };
    
    window.createClassroomSession = function() {
        const caseId = document.getElementById('classroomCaseSelect')?.value;
        if (!caseId) { alert('Please select a case'); return; }
        
        const code = generateSessionCode();
        const session = {
            code: code,
            caseId: caseId,
            mode: 'classroom',
            createdAt: new Date().toISOString(),
            currentStage: 0,
            currentPhase: 'individual',
            stageUnlocked: true,
            students: [],
            studentResponses: []
        };
        
        localStorage.setItem('sp_session_' + code, JSON.stringify(session));
        
        // Load cold call roster
        const savedRoster = localStorage.getItem('classroom_cold_call_roster');
        classroomState.coldCallRoster = savedRoster ? JSON.parse(savedRoster) : [];
        classroomState.coldCallHistory = [];
        
        classroomState.active = true;
        classroomState.sessionCode = code;
        classroomState.caseId = caseId;
        classroomState.currentStage = 0;
        classroomState.currentPhase = 'individual';
        
        goToScreen('classroom-instructor');
    };
    
    // ================================================
    // CLASSROOM INSTRUCTOR VIEW (Big Screen)
    // ================================================
    
    window.renderClassroomInstructor = function() {
        const darkClass = 'dark'; // Always dark for projection
        const session = JSON.parse(localStorage.getItem('sp_session_' + classroomState.sessionCode) || '{}');
        const students = session.studentResponses || [];
        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === session.caseId) : null;
        const stage = spAssessmentState.stages[classroomState.currentStage];
        const phase = classroomState.currentPhase;
        
        // Count submissions for current stage/phase
        const submissionKey = phase === 'revision' ? 'revised' : 'initial';
        const submissions = students.filter(s => s.responses?.[stage.id]?.[submissionKey]).length;
        const totalStudents = students.length;
        const pct = totalStudents > 0 ? Math.round(submissions / totalStudents * 100) : 0;
        
        // Get responses for word cloud
        const responses = students
            .map(s => s.responses?.[stage.id]?.[submissionKey])
            .filter(r => r);
        
        // Get confidence distribution
        const confKey = phase === 'revision' ? 'revisedConfidence' : 'initialConfidence';
        const confidences = [0,0,0,0,0];
        students.forEach(s => {
            const conf = s.responses?.[stage.id]?.[confKey];
            if (conf >= 1 && conf <= 5) confidences[conf - 1]++;
        });
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-zinc-900 text-white">
                
                <!-- Top Bar -->
                <header class="bg-indigo-600 py-3">
                    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
                        <div class="flex items-center gap-6">
                            <div>
                                <p class="text-indigo-200 text-xs uppercase tracking-wide">Classroom Mode</p>
                                <h1 class="font-bold text-xl">${caseData?.title || 'Case'}</h1>
                            </div>
                            <div class="px-4 py-2 bg-white/20 rounded-lg">
                                <p class="text-3xl font-bold font-mono">${classroomState.sessionCode}</p>
                                <p class="text-xs text-indigo-200">Join Code</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="text-center px-4 py-2 bg-white/10 rounded-lg">
                                <p class="text-2xl font-bold">${totalStudents}</p>
                                <p class="text-xs text-indigo-200">Students</p>
                            </div>
                            <button onclick="window.refreshClassroom()" class="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30">🔄</button>
                            <button onclick="goToScreen('classroom-setup')" class="px-4 py-2 bg-red-500/50 rounded-lg hover:bg-red-500">✕ End</button>
                        </div>
                    </div>
                </header>
                
                <!-- Stage Info -->
                <div class="bg-zinc-800 border-b border-zinc-700 py-4">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <span class="text-4xl">${stage.icon}</span>
                                <div>
                                    <p class="text-zinc-400 text-sm">Stage ${classroomState.currentStage + 1} of ${spAssessmentState.stages.length}</p>
                                    <h2 class="text-2xl font-bold">${stage.name}</h2>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="px-3 py-1 rounded-full text-sm font-medium ${
                                    phase === 'individual' ? 'bg-blue-500' : 
                                    phase === 'discussion' ? 'bg-purple-500' : 'bg-green-500'
                                }">
                                    ${phase === 'individual' ? '👤 Individual' : phase === 'discussion' ? '💬 Discussion' : '✏️ Revision'}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Progress bar -->
                        <div class="mt-4 flex gap-1">
                            ${spAssessmentState.stages.map((s, i) => `
                                <div class="flex-1 h-2 rounded-full ${i < classroomState.currentStage ? 'bg-green-500' : i === classroomState.currentStage ? 'bg-indigo-500' : 'bg-zinc-700'}"></div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <main class="max-w-7xl mx-auto px-6 py-6">
                    <div class="grid grid-cols-3 gap-6">
                        
                        <!-- Left: Submission Status -->
                        <div class="col-span-2 space-y-6">
                            
                            <!-- Submission Counter -->
                            <div class="bg-zinc-800 rounded-2xl p-6">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="text-xl font-semibold">📊 Submissions</h3>
                                    <span class="text-4xl font-bold ${pct >= 75 ? 'text-green-400' : pct >= 50 ? 'text-amber-400' : 'text-zinc-400'}">${pct}%</span>
                                </div>
                                <div class="h-6 bg-zinc-700 rounded-full overflow-hidden mb-2">
                                    <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500" style="width: ${pct}%"></div>
                                </div>
                                <p class="text-zinc-400">${submissions} of ${totalStudents} students submitted</p>
                            </div>
                            
                            <!-- Word Cloud / Response Summary -->
                            <div class="bg-zinc-800 rounded-2xl p-6">
                                <h3 class="text-xl font-semibold mb-4">☁️ Response Themes</h3>
                                ${responses.length === 0 ? `
                                    <p class="text-zinc-500 text-center py-8">Waiting for submissions...</p>
                                ` : `
                                    <div class="flex flex-wrap gap-2">
                                        ${generateWordCloud(responses).map(word => `
                                            <span class="px-3 py-1 rounded-full text-sm" style="background: rgba(99, 102, 241, ${word.weight}); font-size: ${12 + word.weight * 10}px;">
                                                ${word.text}
                                            </span>
                                        `).join('')}
                                    </div>
                                `}
                            </div>
                            
                            <!-- Confidence Chart -->
                            ${stage.hasInitialConfidence || stage.hasRevisionConfidence ? `
                                <div class="bg-zinc-800 rounded-2xl p-6">
                                    <h3 class="text-xl font-semibold mb-4">📈 Confidence Distribution</h3>
                                    <div class="flex items-end justify-between h-32 gap-4">
                                        ${[1,2,3,4,5].map(n => {
                                            const count = confidences[n-1];
                                            const maxConf = Math.max(...confidences, 1);
                                            const height = (count / maxConf) * 100;
                                            return `
                                                <div class="flex-1 flex flex-col items-center">
                                                    <div class="w-full bg-zinc-700 rounded-t relative" style="height: 100px;">
                                                        <div class="absolute bottom-0 w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t transition-all duration-500" style="height: ${height}%"></div>
                                                    </div>
                                                    <p class="mt-2 text-lg font-bold">${n}</p>
                                                    <p class="text-xs text-zinc-500">${count}</p>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                    <div class="flex justify-between text-xs text-zinc-500 mt-2">
                                        <span>Guessing</span>
                                        <span>Very Confident</span>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                        
                        <!-- Right: Controls -->
                        <div class="space-y-6">
                            
                            <!-- Phase Controls -->
                            <div class="bg-zinc-800 rounded-2xl p-6">
                                <h3 class="text-lg font-semibold mb-4">🎮 Controls</h3>
                                <div class="space-y-3">
                                    ${phase === 'individual' && stage.hasDiscussion ? `
                                        <button onclick="window.classroomAdvancePhase('discussion')" 
                                            class="w-full py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-semibold">
                                            💬 Start Discussion
                                        </button>
                                    ` : ''}
                                    ${phase === 'discussion' && stage.hasRevision ? `
                                        <button onclick="window.classroomAdvancePhase('revision')" 
                                            class="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold">
                                            ✏️ Open Revision
                                        </button>
                                    ` : ''}
                                    ${(phase === 'revision' || (phase === 'discussion' && !stage.hasRevision) || (phase === 'individual' && !stage.hasDiscussion)) ? `
                                        <button onclick="window.classroomNextStage()" 
                                            class="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold">
                                            ⏭️ Next Stage
                                        </button>
                                    ` : ''}
                                    ${classroomState.currentStage > 0 ? `
                                        <button onclick="window.classroomPrevStage()" 
                                            class="w-full py-2 border border-zinc-600 text-zinc-300 rounded-xl hover:bg-zinc-700">
                                            ← Previous Stage
                                        </button>
                                    ` : ''}
                                </div>
                            </div>
                            
                            <!-- Cold Call -->
                            <div class="bg-gradient-to-br from-amber-900/50 to-orange-900/50 border border-amber-700 rounded-2xl p-6">
                                <h3 class="text-lg font-semibold mb-4 text-amber-200">🎲 Cold Call</h3>
                                
                                ${classroomState.lastColdCall ? `
                                    <div class="bg-black/30 rounded-xl p-4 mb-4 text-center">
                                        <p class="text-amber-300 text-sm">Called on:</p>
                                        <p class="text-3xl font-bold text-white">${classroomState.lastColdCall}</p>
                                    </div>
                                ` : ''}
                                
                                <button onclick="window.coldCallStudent()" 
                                    class="w-full py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 font-semibold">
                                    🎲 Random Student
                                </button>
                                
                                <p class="text-xs text-amber-400 mt-2 text-center">
                                    ${classroomState.coldCallRoster.length} names loaded • 
                                    ${classroomState.coldCallHistory.length} called
                                </p>
                            </div>
                            
                            <!-- Quick Actions -->
                            <div class="bg-zinc-800 rounded-2xl p-6">
                                <h3 class="text-lg font-semibold mb-4">⚡ Quick Actions</h3>
                                <div class="space-y-2">
                                    <button onclick="window.showCaseInfo()" class="w-full py-2 text-left px-4 bg-zinc-700 rounded-lg hover:bg-zinc-600">
                                        📋 Show Case Info
                                    </button>
                                    <button onclick="window.toggleAutoRefresh()" class="w-full py-2 text-left px-4 bg-zinc-700 rounded-lg hover:bg-zinc-600">
                                        ${classroomState.autoRefreshInterval ? '⏸️ Stop Auto-Refresh' : '▶️ Start Auto-Refresh'}
                                    </button>
                                    <button onclick="window.exportClassroomData()" class="w-full py-2 text-left px-4 bg-zinc-700 rounded-lg hover:bg-zinc-600">
                                        📊 Export Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            </div>
        `;
    };
    
    // Word cloud generator - extracts common terms from responses
    function generateWordCloud(responses) {
        const stopWords = new Set(['the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from', 'as', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'between', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 'just', 'and', 'but', 'or', 'if', 'because', 'until', 'while', 'this', 'that', 'these', 'those', 'am', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'what', 'which', 'who', 'whom', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'patient', 'history', 'exam', '1', '2', '3', '4', '5']);
        
        const wordCounts = {};
        
        responses.forEach(response => {
            if (!response) return;
            const words = response.toLowerCase()
                .replace(/[^a-z\s]/g, ' ')
                .split(/\s+/)
                .filter(w => w.length > 2 && !stopWords.has(w));
            
            words.forEach(word => {
                wordCounts[word] = (wordCounts[word] || 0) + 1;
            });
        });
        
        // Sort by frequency and take top 20
        const sorted = Object.entries(wordCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 20);
        
        if (sorted.length === 0) return [];
        
        const maxCount = sorted[0][1];
        return sorted.map(([text, count]) => ({
            text,
            weight: Math.max(0.3, count / maxCount)
        }));
    }
    
    // Classroom controls
    window.refreshClassroom = function() {
        render();
    };
    
    window.toggleAutoRefresh = function() {
        if (classroomState.autoRefreshInterval) {
            clearInterval(classroomState.autoRefreshInterval);
            classroomState.autoRefreshInterval = null;
        } else {
            classroomState.autoRefreshInterval = setInterval(() => render(), 3000);
        }
        render();
    };
    
    window.classroomAdvancePhase = function(newPhase) {
        classroomState.currentPhase = newPhase;
        
        // Update session
        const session = JSON.parse(localStorage.getItem('sp_session_' + classroomState.sessionCode) || '{}');
        session.currentPhase = newPhase;
        localStorage.setItem('sp_session_' + classroomState.sessionCode, JSON.stringify(session));
        
        render();
    };
    
    window.classroomNextStage = function() {
        if (classroomState.currentStage < spAssessmentState.stages.length - 1) {
            classroomState.currentStage++;
            classroomState.currentPhase = 'individual';
            
            // Update session
            const session = JSON.parse(localStorage.getItem('sp_session_' + classroomState.sessionCode) || '{}');
            session.currentStage = classroomState.currentStage;
            session.currentPhase = 'individual';
            localStorage.setItem('sp_session_' + classroomState.sessionCode, JSON.stringify(session));
            
            render();
        } else {
            alert('🎉 Assessment complete! Export your data from the Quick Actions menu.');
        }
    };
    
    window.classroomPrevStage = function() {
        if (classroomState.currentStage > 0) {
            classroomState.currentStage--;
            classroomState.currentPhase = 'individual';
            
            const session = JSON.parse(localStorage.getItem('sp_session_' + classroomState.sessionCode) || '{}');
            session.currentStage = classroomState.currentStage;
            session.currentPhase = 'individual';
            localStorage.setItem('sp_session_' + classroomState.sessionCode, JSON.stringify(session));
            
            render();
        }
    };
    
    window.coldCallStudent = function() {
        const roster = classroomState.coldCallRoster;
        
        if (roster.length === 0) {
            alert('No names in cold call roster. Go to Classroom Setup to add names.');
            return;
        }
        
        // Get names not yet called (or reset if all called)
        let available = roster.filter(n => !classroomState.coldCallHistory.includes(n));
        
        if (available.length === 0) {
            // Everyone has been called - reset history
            classroomState.coldCallHistory = [];
            available = [...roster];
        }
        
        // Random selection
        const selected = available[Math.floor(Math.random() * available.length)];
        classroomState.lastColdCall = selected;
        classroomState.coldCallHistory.push(selected);
        
        render();
    };
    
    window.showCaseInfo = function() {
        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === classroomState.caseId) : null;
        if (caseData) {
            alert(`Case: ${caseData.title}\n\nChief Complaint: ${caseData.chiefComplaint || 'See case details'}`);
        }
    };
    
    window.exportClassroomData = function() {
        const session = JSON.parse(localStorage.getItem('sp_session_' + classroomState.sessionCode) || '{}');
        const students = session.studentResponses || [];
        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === session.caseId) : null;
        
        let csv = 'Student ID,Team,Stage,Type,Response,Confidence,Timestamp\n';
        
        students.forEach(student => {
            spAssessmentState.stages.forEach(stage => {
                const r = student.responses?.[stage.id];
                if (r?.initial) {
                    csv += `"${student.studentName}","${student.teamName}","${stage.name}","initial","${(r.initial||'').replace(/"/g,'""').replace(/\n/g,' ')}",${r.initialConfidence||''},"${r.initialTimestamp||''}"\n`;
                }
                if (r?.revised) {
                    csv += `"${student.studentName}","${student.teamName}","${stage.name}","revised","${(r.revised||'').replace(/"/g,'""').replace(/\n/g,' ')}",${r.revisedConfidence||''},"${r.revisedTimestamp||''}"\n`;
                }
            });
        });
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `classroom-${classroomState.sessionCode}-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };
    
    // ================================================
    // CLASSROOM STUDENT VIEW
    // ================================================
    
    window.renderClassroomStudent = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const session = JSON.parse(localStorage.getItem('sp_session_' + spAssessmentState.sessionCode) || '{}');
        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === session.caseId) : null;
        
        // Get instructor's current stage/phase
        const instructorStage = session.currentStage || 0;
        const instructorPhase = session.currentPhase || 'individual';
        const stage = spAssessmentState.stages[instructorStage];
        const response = spAssessmentState.responses[stage.id] || {};
        
        // Check if student is in sync with instructor
        const isSync = spAssessmentState.currentStage === instructorStage;
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                
                <header class="bg-indigo-600 text-white py-3">
                    <div class="max-w-4xl mx-auto px-6 flex justify-between items-center">
                        <div>
                            <p class="text-indigo-200 text-xs">Classroom Session</p>
                            <h1 class="font-semibold">${caseData?.title || 'Case'}</h1>
                        </div>
                        <div class="text-right">
                            <p class="font-medium">${spAssessmentState.studentName}</p>
                            <p class="text-xs text-indigo-200">${spAssessmentState.sessionCode}</p>
                        </div>
                    </div>
                </header>
                
                <!-- Sync indicator -->
                <div class="bg-zinc-800 text-white py-2">
                    <div class="max-w-4xl mx-auto px-6 flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="text-2xl">${stage.icon}</span>
                            <span class="font-medium">${stage.name}</span>
                            <span class="px-2 py-0.5 rounded text-xs ${
                                instructorPhase === 'individual' ? 'bg-blue-500' : 
                                instructorPhase === 'discussion' ? 'bg-purple-500' : 'bg-green-500'
                            }">
                                ${instructorPhase === 'individual' ? 'Individual' : instructorPhase === 'discussion' ? 'Discussion' : 'Revision'}
                            </span>
                        </div>
                        <button onclick="render()" class="text-xs text-indigo-300 hover:text-white">🔄 Sync</button>
                    </div>
                </div>
                
                <main class="max-w-4xl mx-auto px-6 py-8">
                    ${instructorPhase === 'discussion' ? `
                        <div class="bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 rounded-2xl p-6 text-center">
                            <span class="text-5xl mb-4 block">💬</span>
                            <h2 class="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">Discussion Time</h2>
                            <p class="text-purple-700 dark:text-purple-300">Turn to your neighbor and discuss your reasoning.</p>
                            ${response.initial ? `
                                <div class="mt-4 bg-white dark:bg-zinc-800 rounded-xl p-4 text-left">
                                    <p class="text-xs text-zinc-500 mb-1">Your response:</p>
                                    <p class="whitespace-pre-wrap text-sm">${response.initial}</p>
                                </div>
                            ` : ''}
                        </div>
                    ` : instructorPhase === 'revision' && response.initial && !response.revised ? `
                        ${renderClassroomRevision(stage, response)}
                    ` : response[instructorPhase === 'revision' ? 'revised' : 'initial'] ? `
                        <div class="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-2xl p-6 text-center">
                            <span class="text-5xl mb-4 block">✓</span>
                            <h2 class="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">Submitted!</h2>
                            <p class="text-green-700 dark:text-green-300">Waiting for instructor to advance...</p>
                        </div>
                    ` : `
                        ${renderClassroomInput(stage, response, caseData)}
                    `}
                </main>
            </div>
            </div>
        `;
    };
    
    function renderClassroomInput(stage, response, caseData) {
        return `
            <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                <p class="text-zinc-600 dark:text-zinc-400 mb-4">${stage.prompt}</p>
                
                ${caseData?.chiefComplaint ? `
                    <div class="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-4 mb-4">
                        <p class="text-sm text-zinc-500">Chief Complaint</p>
                        <p class="font-medium">${caseData.chiefComplaint}</p>
                    </div>
                ` : ''}
                
                <textarea id="spInput" rows="6" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-900 mb-4"
                    placeholder="${getStagePlaceholder(stage.id)}"></textarea>
                
                ${stage.hasInitialConfidence ? `
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-2">Confidence</label>
                        <div class="flex gap-2">
                            ${[1,2,3,4,5].map(n => `
                                <button type="button" onclick="window.spSelectConfidence(${n})"
                                    class="flex-1 py-2 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 hover:border-blue-400 font-semibold" id="conf${n}">
                                    ${n}
                                </button>
                            `).join('')}
                        </div>
                        <input type="hidden" id="spConfidence" value="">
                    </div>
                ` : ''}
                
                <button onclick="window.spSubmitInitial('${stage.id}')" class="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold">
                    Submit
                </button>
            </div>
        `;
    }
    
    function renderClassroomRevision(stage, response) {
        return `
            <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-2xl">✏️</span>
                    <h2 class="text-xl font-semibold">Revise Your Response</h2>
                </div>
                
                <div class="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-4 mb-4">
                    <p class="text-xs text-zinc-500 mb-1">Your initial response:</p>
                    <p class="text-sm whitespace-pre-wrap">${response.initial}</p>
                </div>
                
                <textarea id="spRevisionInput" rows="6" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-900 mb-4">${response.initial}</textarea>
                
                ${stage.hasRevisionConfidence ? `
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-2">New Confidence</label>
                        <div class="flex gap-2">
                            ${[1,2,3,4,5].map(n => `
                                <button type="button" onclick="window.spSelectRevisionConfidence(${n})"
                                    class="flex-1 py-2 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 hover:border-green-400 font-semibold" id="revConf${n}">
                                    ${n}
                                </button>
                            `).join('')}
                        </div>
                        <input type="hidden" id="spRevisionConfidence" value="">
                    </div>
                ` : ''}
                
                <button onclick="window.spSubmitRevision('${stage.id}')" class="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold">
                    Submit Revision
                </button>
            </div>
        `;
    }
    
    // ================================================
    // GOOGLE SHEETS INTEGRATION
    // ================================================
    
    window.spGoogleSheetsConfig = {
        enabled: false,
        spreadsheetId: null,
        apiKey: null,
        autoSync: false
    };
    
    window.renderGoogleSheetsSetup = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const config = spGoogleSheetsConfig;
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 p-8">
                <div class="max-w-2xl mx-auto">
                    
                    <button onclick="goToScreen('sp-director-sessions')" class="text-zinc-500 hover:text-zinc-900 mb-8 flex items-center gap-2">
                        ← Back
                    </button>
                    
                    <h1 class="text-2xl font-bold mb-6">📊 Google Sheets Integration</h1>
                    
                    <div class="bg-white dark:bg-zinc-800 rounded-xl border p-6 mb-6">
                        <h2 class="font-semibold mb-4">Setup Instructions</h2>
                        <ol class="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                            <li>1. Create a Google Sheet for your data</li>
                            <li>2. Go to File → Share → Publish to web</li>
                            <li>3. Copy the Spreadsheet ID from the URL</li>
                            <li>4. Create headers in Row 1: Session, Case, Student ID, Student Name, Team, Stage, Type, Response, Confidence, Timestamp</li>
                            <li>5. For write access, use a Google Apps Script Web App (instructions below)</li>
                        </ol>
                    </div>
                    
                    <div class="bg-white dark:bg-zinc-800 rounded-xl border p-6 mb-6">
                        <h2 class="font-semibold mb-4">Configuration</h2>
                        
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-2">Google Apps Script Web App URL</label>
                                <input type="text" id="gsSheetsUrl" 
                                    class="w-full px-4 py-3 border rounded-lg bg-white dark:bg-zinc-900"
                                    placeholder="https://script.google.com/macros/s/..."
                                    value="${config.webAppUrl || ''}">
                                <p class="text-xs text-zinc-500 mt-1">Deploy a Google Apps Script to accept POST requests</p>
                            </div>
                            
                            <div class="flex items-center gap-3">
                                <input type="checkbox" id="gsAutoSync" ${config.autoSync ? 'checked' : ''}>
                                <label for="gsAutoSync" class="text-sm">Auto-sync after each submission</label>
                            </div>
                            
                            <button onclick="window.saveGoogleSheetsConfig()" 
                                class="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold">
                                Save Configuration
                            </button>
                        </div>
                    </div>
                    
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                        <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Google Apps Script Code</h3>
                        <p class="text-sm text-blue-700 dark:text-blue-300 mb-3">Create a new Google Apps Script and paste this code:</p>
                        <pre class="bg-zinc-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  data.rows.forEach(function(row) {
    sheet.appendRow(row);
  });
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
                        </pre>
                        <p class="text-xs text-blue-600 dark:text-blue-400 mt-2">Deploy as Web App with "Anyone" access</p>
                    </div>
                </div>
            </div>
            </div>
        `;
    };
    
    window.saveGoogleSheetsConfig = function() {
        const url = document.getElementById('gsSheetsUrl')?.value?.trim();
        const autoSync = document.getElementById('gsAutoSync')?.checked;
        
        spGoogleSheetsConfig.webAppUrl = url;
        spGoogleSheetsConfig.autoSync = autoSync;
        spGoogleSheetsConfig.enabled = !!url;
        
        localStorage.setItem('sp_google_sheets_config', JSON.stringify(spGoogleSheetsConfig));
        
        alert('✅ Google Sheets configuration saved');
    };
    
    // Load saved config
    (function loadGoogleSheetsConfig() {
        const saved = localStorage.getItem('sp_google_sheets_config');
        if (saved) {
            Object.assign(spGoogleSheetsConfig, JSON.parse(saved));
        }
    })();
    
    // Sync to Google Sheets
    window.syncToGoogleSheets = async function(sessionCode) {
        if (!spGoogleSheetsConfig.enabled || !spGoogleSheetsConfig.webAppUrl) {
            console.log('Google Sheets sync not configured');
            return;
        }
        
        const session = JSON.parse(localStorage.getItem('sp_session_' + sessionCode) || '{}');
        const students = session.studentResponses || [];
        const caseTitle = (typeof cases !== 'undefined' ? cases.find(c => c.id === session.caseId)?.title : null) || session.caseId;
        
        const rows = [];
        
        students.forEach(student => {
            spAssessmentState.stages.forEach(stage => {
                const r = student.responses?.[stage.id];
                if (r?.initial) {
                    rows.push([
                        session.code,
                        caseTitle,
                        student.studentId,
                        student.studentName,
                        student.teamName,
                        stage.name,
                        'initial',
                        r.initial || '',
                        r.initialConfidence || '',
                        r.initialTimestamp || ''
                    ]);
                }
                if (r?.revised) {
                    rows.push([
                        session.code,
                        caseTitle,
                        student.studentId,
                        student.studentName,
                        student.teamName,
                        stage.name,
                        'revised',
                        r.revised || '',
                        r.revisedConfidence || '',
                        r.revisedTimestamp || ''
                    ]);
                }
            });
        });
        
        if (rows.length === 0) return;
        
        try {
            const response = await fetch(spGoogleSheetsConfig.webAppUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rows })
            });
            console.log('✅ Synced to Google Sheets');
        } catch (error) {
            console.error('Google Sheets sync failed:', error);
        }
    };

    // ================================================
    // INITIALIZATION
    // ================================================
    
    console.log('✅ ReasonDx SP Assessment Mode v2.0 loaded');
    console.log('   - 13 clinical reasoning stages');
    console.log('   - Individual → Discussion → Revision flow');
    console.log('   - Facilitator & Director dashboards');
    console.log('   - Classroom Mode for large groups');
    console.log('   - Cold call with separate roster');
    console.log('   - Google Sheets integration');
    
})();
