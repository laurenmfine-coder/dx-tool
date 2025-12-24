// ============================================================
// REASONDX SMALL GROUP CLINICAL REASONING MODE
// Collaborative Learning with Individual → Group → Revised Flow
// ============================================================
// 
// This module implements a pedagogically-rich collaborative learning mode where:
// 1. Students complete each stage individually first
// 2. Discuss as a group (platform pauses)
// 3. Revise their answers after discussion
// 4. Confidence is tracked before and after group discussion
//
// Data captured supports CRDA (Collaborative Reasoning Divergence Analysis)
// and Delphi-method consensus building research.
// ============================================================

(function() {
    'use strict';
    
    // ============================================================
    // SMALL GROUP MODE STATE
    // ============================================================
    
    window.SmallGroupMode = {
        enabled: false,
        groupId: null,
        groupName: '',
        studentId: null,
        
        // Role: 'student' or 'facilitator'
        role: 'student',
        
        // Facilitator info (if this is a facilitator session)
        facilitatorId: null,
        facilitatorName: '',
        
        // Current phase within each stage: 'individual', 'discussing', 'revised'
        currentPhase: 'individual',
        
        // Tracks all individual and revised submissions for CRDA analysis
        submissions: {
            differential: { individual: null, revised: null, individualConfidence: null, revisedConfidence: null },
            history: { individual: null, revised: null },
            physical: { individual: null, revised: null },
            revisedDifferential: { individual: null, revised: null, individualConfidence: null, revisedConfidence: null },
            workup: { individual: null, revised: null },
            caseSummary: { individual: null, revised: null, individualFeedback: null },
            assessmentPlan: { individual: null, revised: null, individualConfidence: null, revisedConfidence: null }
        },
        
        // Facilitator submissions (captured during group discussion phase)
        facilitatorSubmissions: {
            differential: { data: null, confidence: null, timestamp: null, rationale: '' },
            history: { data: null, timestamp: null, rationale: '' },
            physical: { data: null, timestamp: null, rationale: '' },
            revisedDifferential: { data: null, confidence: null, timestamp: null, rationale: '' },
            workup: { data: null, timestamp: null, rationale: '' },
            caseSummary: { data: null, timestamp: null },
            assessmentPlan: { data: null, confidence: null, timestamp: null, rationale: '' }
        },
        
        // Discussion timer (optional)
        discussionTimer: null,
        discussionTimeRemaining: 0,
        
        // Stage configuration
        stages: [
            { id: 'differential', name: 'Initial Differential', hasConfidence: true },
            { id: 'history', name: 'History Taking', hasConfidence: false },
            { id: 'physical', name: 'Physical Exam', hasConfidence: false },
            { id: 'revisedDifferential', name: 'Revised Differential', hasConfidence: true },
            { id: 'workup', name: 'Workup & Testing', hasConfidence: false },
            { id: 'caseSummary', name: 'Case Summary', hasConfidence: false, hasFeedback: true },
            { id: 'assessmentPlan', name: 'Assessment & Plan', hasConfidence: true }
        ]
    };
    
    const SGM = window.SmallGroupMode;
    
    // ============================================================
    // INITIALIZATION
    // ============================================================
    
    window.initSmallGroupMode = function(config = {}) {
        SGM.enabled = true;
        SGM.groupId = config.groupId || `group_${Date.now()}`;
        SGM.groupName = config.groupName || 'Small Group';
        SGM.studentId = config.studentId || localStorage.getItem('reasondx_display_name') || `student_${Date.now()}`;
        SGM.role = config.role || 'student'; // 'student' or 'facilitator'
        SGM.currentPhase = 'individual';
        
        // Facilitator info
        if (config.role === 'facilitator') {
            SGM.facilitatorId = SGM.studentId;
            SGM.facilitatorName = config.facilitatorName || SGM.studentId;
        } else {
            SGM.facilitatorId = config.facilitatorId || null;
            SGM.facilitatorName = config.facilitatorName || '';
        }
        
        // Reset submissions
        SGM.stages.forEach(stage => {
            SGM.submissions[stage.id] = {
                individual: null,
                revised: null,
                individualConfidence: null,
                revisedConfidence: null,
                individualTimestamp: null,
                revisedTimestamp: null
            };
            SGM.facilitatorSubmissions[stage.id] = {
                data: null,
                confidence: null,
                timestamp: null,
                rationale: ''
            };
        });
        
        console.log('Small Group Mode initialized:', SGM.groupId, SGM.studentId, 'Role:', SGM.role);
        
        // Log for CRDA/RPFS
        if (typeof rpfsLogInteraction === 'function') {
            rpfsLogInteraction('small_group_mode_started', 'collaboration', {
                groupId: SGM.groupId,
                participantId: SGM.studentId,
                role: SGM.role
            });
        }
    };
    
    window.exitSmallGroupMode = function() {
        SGM.enabled = false;
        if (SGM.discussionTimer) {
            clearInterval(SGM.discussionTimer);
        }
        console.log('Small Group Mode exited');
    };
    
    // ============================================================
    // PHASE MANAGEMENT
    // ============================================================
    
    // Submit individual answer for current stage
    window.submitIndividualAnswer = function(stageId, data, confidence = null) {
        if (!SGM.enabled) return;
        
        SGM.submissions[stageId].individual = JSON.parse(JSON.stringify(data));
        SGM.submissions[stageId].individualTimestamp = Date.now();
        
        if (confidence !== null) {
            SGM.submissions[stageId].individualConfidence = confidence;
        }
        
        // Log for CRDA
        if (typeof rpfsLogInteraction === 'function') {
            rpfsLogInteraction('individual_submission', stageId, {
                groupId: SGM.groupId,
                studentId: SGM.studentId,
                hasConfidence: confidence !== null,
                dataSize: JSON.stringify(data).length
            });
        }
        
        console.log(`Individual submission for ${stageId}:`, data);
    };
    
    // Transition to group discussion phase
    window.startGroupDiscussion = function(stageId, timerMinutes = 0) {
        if (!SGM.enabled) return;
        
        SGM.currentPhase = 'discussing';
        
        if (timerMinutes > 0) {
            SGM.discussionTimeRemaining = timerMinutes * 60;
            SGM.discussionTimer = setInterval(() => {
                SGM.discussionTimeRemaining--;
                updateDiscussionTimerDisplay();
                if (SGM.discussionTimeRemaining <= 0) {
                    clearInterval(SGM.discussionTimer);
                    // Optionally auto-advance or alert
                }
            }, 1000);
        }
        
        // Log for CRDA
        if (typeof rpfsLogInteraction === 'function') {
            rpfsLogInteraction('group_discussion_started', stageId, {
                groupId: SGM.groupId,
                timerMinutes: timerMinutes
            });
        }
    };
    
    // Submit revised answer after group discussion
    window.submitRevisedAnswer = function(stageId, data, confidence = null) {
        if (!SGM.enabled) return;
        
        SGM.submissions[stageId].revised = JSON.parse(JSON.stringify(data));
        SGM.submissions[stageId].revisedTimestamp = Date.now();
        
        if (confidence !== null) {
            SGM.submissions[stageId].revisedConfidence = confidence;
        }
        
        SGM.currentPhase = 'individual'; // Reset for next stage
        
        if (SGM.discussionTimer) {
            clearInterval(SGM.discussionTimer);
            SGM.discussionTimer = null;
        }
        
        // Calculate and log divergence
        const divergence = calculateDivergence(stageId);
        
        // Log for CRDA
        if (typeof rpfsLogInteraction === 'function') {
            rpfsLogInteraction('revised_submission', stageId, {
                groupId: SGM.groupId,
                studentId: SGM.studentId,
                divergenceScore: divergence.score,
                changesCount: divergence.changes,
                confidenceShift: divergence.confidenceShift
            });
        }
        
        console.log(`Revised submission for ${stageId}:`, data, 'Divergence:', divergence);
        
        return divergence;
    };
    
    // ============================================================
    // FACILITATOR SUBMISSION FUNCTIONS
    // ============================================================
    
    // Facilitator submits their expert answer during discussion phase
    window.submitFacilitatorAnswer = function(stageId, data, confidence = null, rationale = '') {
        if (!SGM.enabled) return;
        
        SGM.facilitatorSubmissions[stageId] = {
            data: JSON.parse(JSON.stringify(data)),
            confidence: confidence,
            timestamp: Date.now(),
            rationale: rationale,
            facilitatorId: SGM.role === 'facilitator' ? SGM.studentId : SGM.facilitatorId
        };
        
        // Log for CRDA
        if (typeof rpfsLogInteraction === 'function') {
            rpfsLogInteraction('facilitator_submission', stageId, {
                groupId: SGM.groupId,
                facilitatorId: SGM.facilitatorSubmissions[stageId].facilitatorId,
                hasRationale: !!rationale,
                confidence: confidence
            });
        }
        
        console.log(`Facilitator submission for ${stageId}:`, data);
    };
    
    // Calculate divergence between student answer and facilitator answer
    window.calculateFacilitatorDivergence = function(stageId, studentData) {
        const facilitatorData = SGM.facilitatorSubmissions[stageId]?.data;
        if (!facilitatorData || !studentData) {
            return { score: 0, alignment: 'unknown' };
        }
        
        let score = 0;
        let matches = 0;
        let total = 0;
        
        // For differential stages
        if (stageId.includes('ifferential') && Array.isArray(studentData) && Array.isArray(facilitatorData)) {
            const facNames = facilitatorData.map(d => (d.name || d).toLowerCase());
            const stuNames = studentData.map(d => (d.name || d).toLowerCase());
            
            // Check how many facilitator diagnoses student included
            facNames.forEach((fac, idx) => {
                total++;
                const stuIdx = stuNames.indexOf(fac);
                if (stuIdx !== -1) {
                    matches++;
                    // Bonus for similar ranking
                    if (Math.abs(stuIdx - idx) <= 1) {
                        matches += 0.5;
                    }
                }
            });
            
            // Check for extras student added
            const extras = stuNames.filter(s => !facNames.includes(s));
            total += extras.length * 0.5; // Penalize extras less
            
            score = total > 0 ? (matches / total) * 100 : 0;
        }
        // For selection stages
        else if (Array.isArray(studentData) && Array.isArray(facilitatorData)) {
            const common = studentData.filter(s => facilitatorData.includes(s));
            const union = [...new Set([...studentData, ...facilitatorData])];
            score = union.length > 0 ? (common.length / union.length) * 100 : 0;
        }
        
        let alignment = 'low';
        if (score >= 80) alignment = 'high';
        else if (score >= 60) alignment = 'moderate';
        else if (score >= 40) alignment = 'partial';
        
        return {
            score: Math.round(score),
            alignment: alignment,
            facilitatorConfidence: SGM.facilitatorSubmissions[stageId]?.confidence,
            rationale: SGM.facilitatorSubmissions[stageId]?.rationale
        };
    };
    
    // Get comparison of individual, revised, and facilitator for a stage
    window.getFullCRDAComparison = function(stageId) {
        const sub = SGM.submissions[stageId];
        const fac = SGM.facilitatorSubmissions[stageId];
        
        return {
            individual: {
                data: sub?.individual,
                confidence: sub?.individualConfidence,
                timestamp: sub?.individualTimestamp
            },
            revised: {
                data: sub?.revised,
                confidence: sub?.revisedConfidence,
                timestamp: sub?.revisedTimestamp
            },
            facilitator: {
                data: fac?.data,
                confidence: fac?.confidence,
                timestamp: fac?.timestamp,
                rationale: fac?.rationale
            },
            divergence: {
                individualToRevised: calculateDivergence(stageId),
                individualToFacilitator: sub?.individual ? calculateFacilitatorDivergence(stageId, sub.individual) : null,
                revisedToFacilitator: sub?.revised ? calculateFacilitatorDivergence(stageId, sub.revised) : null
            },
            improvement: sub?.individual && sub?.revised && fac?.data ? 
                (calculateFacilitatorDivergence(stageId, sub.revised).score - 
                 calculateFacilitatorDivergence(stageId, sub.individual).score) : null
        };
    };
    
    // ============================================================
    // DIVERGENCE ANALYSIS (CRDA Core)
    // ============================================================
    
    function calculateDivergence(stageId) {
        const submission = SGM.submissions[stageId];
        if (!submission.individual || !submission.revised) {
            return { score: 0, changes: 0, confidenceShift: 0 };
        }
        
        let changes = 0;
        let score = 0;
        
        const individual = submission.individual;
        const revised = submission.revised;
        
        // For differential stages (arrays of diagnoses)
        if (stageId.includes('ifferential')) {
            if (Array.isArray(individual) && Array.isArray(revised)) {
                // Count additions
                const added = revised.filter(r => !individual.some(i => 
                    (i.name || i).toLowerCase() === (r.name || r).toLowerCase()
                ));
                // Count removals
                const removed = individual.filter(i => !revised.some(r => 
                    (i.name || i).toLowerCase() === (r.name || r).toLowerCase()
                ));
                // Count reorderings
                const reordered = revised.filter((r, idx) => {
                    const originalIdx = individual.findIndex(i => 
                        (i.name || i).toLowerCase() === (r.name || r).toLowerCase()
                    );
                    return originalIdx !== -1 && originalIdx !== idx;
                });
                
                changes = added.length + removed.length + reordered.length;
                score = (changes / Math.max(individual.length, revised.length)) * 100;
            }
        }
        // For selection stages (arrays of IDs)
        else if (Array.isArray(individual) && Array.isArray(revised)) {
            const added = revised.filter(r => !individual.includes(r));
            const removed = individual.filter(i => !revised.includes(i));
            changes = added.length + removed.length;
            score = individual.length > 0 ? (changes / individual.length) * 100 : 0;
        }
        // For text stages (strings)
        else if (typeof individual === 'string' && typeof revised === 'string') {
            // Simple word-level comparison
            const indWords = individual.toLowerCase().split(/\s+/).filter(w => w.length > 3);
            const revWords = revised.toLowerCase().split(/\s+/).filter(w => w.length > 3);
            const newWords = revWords.filter(w => !indWords.includes(w));
            const removedWords = indWords.filter(w => !revWords.includes(w));
            changes = newWords.length + removedWords.length;
            score = indWords.length > 0 ? (changes / indWords.length) * 100 : 0;
        }
        
        // Confidence shift
        const confidenceShift = (submission.revisedConfidence || 0) - (submission.individualConfidence || 0);
        
        return {
            score: Math.round(score),
            changes: changes,
            confidenceShift: confidenceShift,
            details: {
                individual: individual,
                revised: revised,
                individualConfidence: submission.individualConfidence,
                revisedConfidence: submission.revisedConfidence
            }
        };
    }
    
    // ============================================================
    // DELPHI-STYLE CONSENSUS METRICS
    // ============================================================
    
    // For multi-student groups - aggregate individual submissions
    window.calculateGroupConsensus = function(stageId, allStudentSubmissions) {
        // allStudentSubmissions: [{ studentId, data, confidence }, ...]
        
        if (!allStudentSubmissions || allStudentSubmissions.length < 2) {
            return { consensusLevel: 100, divergentItems: [] };
        }
        
        // For differential stages
        if (stageId.includes('ifferential')) {
            // Count how many students included each diagnosis
            const dxCounts = {};
            const dxRankings = {};
            
            allStudentSubmissions.forEach(sub => {
                const dxList = sub.data || [];
                dxList.forEach((dx, rank) => {
                    const name = (dx.name || dx).toLowerCase();
                    dxCounts[name] = (dxCounts[name] || 0) + 1;
                    if (!dxRankings[name]) dxRankings[name] = [];
                    dxRankings[name].push(rank + 1);
                });
            });
            
            const totalStudents = allStudentSubmissions.length;
            const consensusItems = [];
            const divergentItems = [];
            
            Object.keys(dxCounts).forEach(dx => {
                const agreement = (dxCounts[dx] / totalStudents) * 100;
                const avgRank = dxRankings[dx].reduce((a, b) => a + b, 0) / dxRankings[dx].length;
                const rankVariance = dxRankings[dx].reduce((sum, r) => sum + Math.pow(r - avgRank, 2), 0) / dxRankings[dx].length;
                
                if (agreement >= 70) {
                    consensusItems.push({ name: dx, agreement, avgRank, rankVariance });
                } else {
                    divergentItems.push({ name: dx, agreement, avgRank, rankVariance });
                }
            });
            
            // Overall consensus level
            const consensusLevel = consensusItems.length > 0 
                ? Math.round((consensusItems.length / Object.keys(dxCounts).length) * 100)
                : 0;
            
            return {
                consensusLevel,
                consensusItems: consensusItems.sort((a, b) => a.avgRank - b.avgRank),
                divergentItems: divergentItems.sort((a, b) => b.agreement - a.agreement),
                totalUniqueItems: Object.keys(dxCounts).length,
                studentCount: totalStudents
            };
        }
        
        return { consensusLevel: 0, divergentItems: [] };
    };
    
    // ============================================================
    // UI RENDERING HELPERS
    // ============================================================
    
    window.renderSmallGroupPhaseIndicator = function(stageId) {
        if (!SGM.enabled) return '';
        
        const stage = SGM.stages.find(s => s.id === stageId);
        const stageName = stage ? stage.name : stageId;
        
        const phases = [
            { id: 'individual', label: '1. Individual', icon: '👤' },
            { id: 'discussing', label: '2. Group Discussion', icon: '👥' },
            { id: 'revised', label: '3. Revised', icon: '✏️' }
        ];
        
        return `
            <div class="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-4 mb-4">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <span class="text-xl">👥</span>
                        <span class="font-semibold text-green-800">Small Group Mode</span>
                        <span class="text-sm text-green-600">${SGM.groupName}</span>
                        ${SGM.role === 'facilitator' ? '<span class="text-xs bg-purple-500 text-white px-2 py-0.5 rounded-full ml-2">Facilitator</span>' : ''}
                    </div>
                    <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">${stageName}</span>
                </div>
                
                <div class="flex items-center justify-center gap-2">
                    ${phases.map((phase, idx) => `
                        <div class="flex items-center">
                            <div class="flex flex-col items-center">
                                <div class="w-10 h-10 rounded-full flex items-center justify-center text-lg
                                    ${SGM.currentPhase === phase.id 
                                        ? 'bg-green-500 text-white ring-2 ring-green-300' 
                                        : phases.findIndex(p => p.id === SGM.currentPhase) > idx
                                            ? 'bg-green-200 text-green-700'
                                            : 'bg-gray-100 text-gray-400'}">
                                    ${phase.icon}
                                </div>
                                <span class="text-xs mt-1 ${SGM.currentPhase === phase.id ? 'font-semibold text-green-700' : 'text-gray-500'}">
                                    ${phase.label}
                                </span>
                            </div>
                            ${idx < phases.length - 1 ? `
                                <div class="w-8 h-0.5 mx-1 ${phases.findIndex(p => p.id === SGM.currentPhase) > idx ? 'bg-green-300' : 'bg-gray-200'}"></div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
                
                ${SGM.currentPhase === 'discussing' && SGM.discussionTimeRemaining > 0 ? `
                    <div class="mt-3 text-center">
                        <span class="text-sm text-green-700">Discussion time remaining: </span>
                        <span id="discussion-timer" class="font-mono font-bold text-green-800">
                            ${Math.floor(SGM.discussionTimeRemaining / 60)}:${(SGM.discussionTimeRemaining % 60).toString().padStart(2, '0')}
                        </span>
                    </div>
                ` : ''}
            </div>
        `;
    };
    
    window.renderGroupDiscussionPrompt = function(stageId, instructions = '') {
        const defaultInstructions = {
            differential: 'Compare your differential diagnoses with your group. Discuss your reasoning for each diagnosis and its ranking.',
            history: 'Share which history questions you selected and why. Discuss what else the group thinks should be asked.',
            physical: 'Discuss which physical exam maneuvers you chose. What findings are you looking for?',
            revisedDifferential: 'Based on the history and physical findings, how has your thinking changed? Discuss as a group.',
            workup: 'What tests would you order? Discuss the rationale and cost-effectiveness of each.',
            caseSummary: 'Share your case summaries. What are the key elements? How would you present this to an attending?',
            assessmentPlan: 'Discuss your final assessment and plan. What\'s your working diagnosis and immediate next steps?'
        };
        
        return `
            <div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-4 text-center">
                <div class="text-4xl mb-3">💬</div>
                <h3 class="text-xl font-bold text-amber-800 mb-2">Time for Group Discussion!</h3>
                <p class="text-amber-700 mb-4">
                    ${instructions || defaultInstructions[stageId] || 'Discuss your answers with your group before revising.'}
                </p>
                
                <div class="bg-white rounded-lg p-4 mb-4 text-left">
                    <h4 class="font-semibold text-gray-700 mb-2">Your Individual Submission:</h4>
                    <div class="text-sm text-gray-600" id="individual-submission-preview">
                        ${renderSubmissionPreview(stageId, SGM.submissions[stageId]?.individual)}
                    </div>
                    ${SGM.submissions[stageId]?.individualConfidence !== null ? `
                        <div class="mt-2 text-sm">
                            <span class="text-gray-500">Your confidence:</span>
                            <span class="font-semibold text-amber-700">${SGM.submissions[stageId].individualConfidence}%</span>
                        </div>
                    ` : ''}
                </div>
                
                <button onclick="proceedToRevision('${stageId}')" class="btn-primary px-6 py-3">
                    Discussion Complete → Revise My Answer
                </button>
            </div>
        `;
    };
    
    // Facilitator entry panel - shown during discussion phase for facilitators
    window.renderFacilitatorEntryPanel = function(stageId) {
        if (!SGM.enabled || SGM.role !== 'facilitator') return '';
        
        const stage = SGM.stages.find(s => s.id === stageId);
        const hasConfidence = stage?.hasConfidence;
        const existing = SGM.facilitatorSubmissions[stageId];
        
        return `
            <div class="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-4">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-3xl">👨‍🏫</span>
                    <div>
                        <h3 class="text-lg font-bold text-purple-800">Facilitator Entry</h3>
                        <p class="text-sm text-purple-600">Enter your expert answer during group discussion</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg p-4 mb-4">
                    <p class="text-sm text-gray-600 mb-3">
                        While students discuss, enter what you (as the facilitator/expert) would answer for this stage. 
                        This will be used to compare student reasoning to expert reasoning.
                    </p>
                    
                    ${existing?.data ? `
                        <div class="bg-green-50 border border-green-200 rounded p-3 mb-3">
                            <div class="text-sm text-green-700 font-medium">✓ Your answer has been recorded</div>
                            <div class="text-xs text-green-600 mt-1">
                                Submitted at ${new Date(existing.timestamp).toLocaleTimeString()}
                                ${existing.confidence ? ` | Confidence: ${existing.confidence}%` : ''}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Your Expert Answer</label>
                        <textarea id="facilitator-answer-${stageId}" 
                                  class="w-full p-3 border border-purple-200 rounded-lg text-sm" 
                                  rows="4"
                                  placeholder="Enter your differential diagnoses, selections, or response...">${existing?.data ? (typeof existing.data === 'string' ? existing.data : JSON.stringify(existing.data, null, 2)) : ''}</textarea>
                    </div>
                    
                    ${hasConfidence ? `
                        <div class="mb-3">
                            <label class="block text-sm font-medium text-gray-700 mb-1">
                                Your Confidence: <span id="fac-confidence-display">${existing?.confidence || 75}%</span>
                            </label>
                            <input type="range" min="0" max="100" step="5" 
                                   id="facilitator-confidence-${stageId}"
                                   value="${existing?.confidence || 75}"
                                   oninput="document.getElementById('fac-confidence-display').textContent = this.value + '%'"
                                   class="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer">
                        </div>
                    ` : ''}
                    
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Teaching Rationale (optional)</label>
                        <textarea id="facilitator-rationale-${stageId}" 
                                  class="w-full p-3 border border-gray-200 rounded-lg text-sm" 
                                  rows="2"
                                  placeholder="Brief explanation of your reasoning (for teaching purposes)...">${existing?.rationale || ''}</textarea>
                    </div>
                    
                    <button onclick="saveFacilitatorAnswer('${stageId}')" class="btn-primary px-4 py-2">
                        ${existing?.data ? 'Update' : 'Save'} Facilitator Answer
                    </button>
                </div>
            </div>
        `;
    };
    
    window.saveFacilitatorAnswer = function(stageId) {
        const answerEl = document.getElementById('facilitator-answer-' + stageId);
        const confidenceEl = document.getElementById('facilitator-confidence-' + stageId);
        const rationaleEl = document.getElementById('facilitator-rationale-' + stageId);
        
        if (!answerEl || !answerEl.value.trim()) {
            alert('Please enter your answer');
            return;
        }
        
        let data = answerEl.value.trim();
        
        // Try to parse as JSON if it looks like a list
        if (data.startsWith('[') || data.startsWith('{')) {
            try {
                data = JSON.parse(data);
            } catch (e) {
                // Keep as string if not valid JSON
            }
        } else if (data.includes('\n')) {
            // Convert newline-separated items to array
            data = data.split('\n').map(line => line.trim()).filter(line => line);
        }
        
        const confidence = confidenceEl ? parseInt(confidenceEl.value) : null;
        const rationale = rationaleEl ? rationaleEl.value.trim() : '';
        
        submitFacilitatorAnswer(stageId, data, confidence, rationale);
        
        // Show confirmation
        alert('Facilitator answer saved!');
        if (typeof render === 'function') render();
    };
    
    // Render facilitator comparison (shown after students submit revised answers)
    window.renderFacilitatorComparison = function(stageId) {
        const comparison = getFullCRDAComparison(stageId);
        if (!comparison.facilitator?.data) return '';
        
        const improvementText = comparison.improvement !== null 
            ? (comparison.improvement > 0 
                ? `<span class="text-green-600">+${comparison.improvement}% closer to expert</span>`
                : comparison.improvement < 0 
                    ? `<span class="text-red-600">${comparison.improvement}% further from expert</span>`
                    : `<span class="text-gray-600">No change in alignment</span>`)
            : '';
        
        return `
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <h4 class="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <span>👨‍🏫</span> Facilitator Comparison
                </h4>
                
                <div class="grid grid-cols-2 gap-4 mb-3">
                    <div class="bg-white rounded p-3">
                        <div class="text-xs text-gray-500 mb-1">Your Initial → Facilitator</div>
                        <div class="text-lg font-bold ${comparison.divergence.individualToFacilitator?.alignment === 'high' ? 'text-green-600' : comparison.divergence.individualToFacilitator?.alignment === 'moderate' ? 'text-amber-600' : 'text-red-600'}">
                            ${comparison.divergence.individualToFacilitator?.score || 0}% aligned
                        </div>
                    </div>
                    <div class="bg-white rounded p-3">
                        <div class="text-xs text-gray-500 mb-1">Your Revised → Facilitator</div>
                        <div class="text-lg font-bold ${comparison.divergence.revisedToFacilitator?.alignment === 'high' ? 'text-green-600' : comparison.divergence.revisedToFacilitator?.alignment === 'moderate' ? 'text-amber-600' : 'text-red-600'}">
                            ${comparison.divergence.revisedToFacilitator?.score || 0}% aligned
                        </div>
                    </div>
                </div>
                
                ${improvementText ? `<div class="text-center text-sm mb-3">${improvementText}</div>` : ''}
                
                ${comparison.facilitator.rationale ? `
                    <div class="bg-white rounded p-3 mt-3">
                        <div class="text-xs text-gray-500 mb-1">Facilitator's Reasoning:</div>
                        <div class="text-sm text-gray-700 italic">"${comparison.facilitator.rationale}"</div>
                    </div>
                ` : ''}
            </div>
        `;
    };
    
    function renderSubmissionPreview(stageId, data) {
        if (!data) return '<em class="text-gray-400">No submission yet</em>';
        
        if (stageId.includes('ifferential') && Array.isArray(data)) {
            return `<ol class="list-decimal list-inside">${data.slice(0, 5).map(dx => 
                `<li>${dx.name || dx}${dx.likely ? ' <span class="text-green-600">(L)</span>' : ''}${dx.cannotMiss ? ' <span class="text-red-600">(M)</span>' : ''}</li>`
            ).join('')}</ol>`;
        }
        
        if (Array.isArray(data)) {
            return `<ul class="list-disc list-inside">${data.slice(0, 5).map(item => 
                `<li>${item}</li>`
            ).join('')}${data.length > 5 ? `<li class="text-gray-400">...and ${data.length - 5} more</li>` : ''}</ul>`;
        }
        
        if (typeof data === 'string') {
            return data.length > 200 ? data.substring(0, 200) + '...' : data;
        }
        
        return JSON.stringify(data).substring(0, 200);
    }
    
    window.proceedToRevision = function(stageId) {
        SGM.currentPhase = 'revised';
        if (typeof render === 'function') render();
    };
    
    function updateDiscussionTimerDisplay() {
        const timerEl = document.getElementById('discussion-timer');
        if (timerEl) {
            const mins = Math.floor(SGM.discussionTimeRemaining / 60);
            const secs = SGM.discussionTimeRemaining % 60;
            timerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        }
    }
    
    // ============================================================
    // CONFIDENCE TRACKING
    // ============================================================
    
    window.renderSmallGroupConfidenceSlider = function(stageId, isRevised = false) {
        const stage = SGM.stages.find(s => s.id === stageId);
        if (!stage?.hasConfidence) return '';
        
        const currentConfidence = isRevised 
            ? (SGM.submissions[stageId]?.revisedConfidence || 50)
            : (SGM.submissions[stageId]?.individualConfidence || 50);
        
        const previousConfidence = isRevised ? SGM.submissions[stageId]?.individualConfidence : null;
        
        return `
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <div class="flex items-center gap-2 mb-3">
                    <span class="text-xl">🎯</span>
                    <h4 class="font-semibold text-purple-800">
                        ${isRevised ? 'Post-Discussion Confidence' : 'Your Initial Confidence'}
                    </h4>
                </div>
                
                ${previousConfidence !== null ? `
                    <div class="text-sm text-purple-600 mb-2">
                        Your confidence before discussion: <strong>${previousConfidence}%</strong>
                    </div>
                ` : ''}
                
                <div class="mb-2">
                    <label class="block text-sm text-purple-700 mb-1">
                        How confident are you in your ${isRevised ? 'revised ' : ''}answer?
                        <span id="sg-confidence-display-${stageId}" class="font-bold">${currentConfidence}%</span>
                    </label>
                    <input type="range" min="0" max="100" step="5" 
                           value="${currentConfidence}"
                           oninput="updateSmallGroupConfidence('${stageId}', this.value, ${isRevised})"
                           class="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer">
                    <div class="flex justify-between text-xs text-purple-600 mt-1">
                        <span>0% - Very uncertain</span>
                        <span>50% - Unsure</span>
                        <span>100% - Certain</span>
                    </div>
                </div>
            </div>
        `;
    };
    
    window.updateSmallGroupConfidence = function(stageId, value, isRevised) {
        const conf = parseInt(value);
        if (isRevised) {
            SGM.submissions[stageId].revisedConfidence = conf;
        } else {
            SGM.submissions[stageId].individualConfidence = conf;
        }
        
        const display = document.getElementById(`sg-confidence-display-${stageId}`);
        if (display) display.textContent = conf + '%';
    };
    
    // ============================================================
    // EXPORT DATA FOR ANALYSIS
    // ============================================================
    
    window.exportSmallGroupData = function() {
        const exportData = {
            groupId: SGM.groupId,
            groupName: SGM.groupName,
            studentId: SGM.studentId,
            exportTimestamp: new Date().toISOString(),
            caseId: window.state?.caseType,
            variantKey: window.state?.variantKey,
            submissions: SGM.submissions,
            divergenceAnalysis: {}
        };
        
        // Calculate divergence for each stage
        SGM.stages.forEach(stage => {
            if (SGM.submissions[stage.id].individual && SGM.submissions[stage.id].revised) {
                exportData.divergenceAnalysis[stage.id] = calculateDivergence(stage.id);
            }
        });
        
        // Add facilitator data and comparisons
        exportData.role = SGM.role;
        exportData.facilitatorId = SGM.facilitatorId;
        exportData.facilitatorSubmissions = SGM.facilitatorSubmissions;
        
        // Calculate full CRDA comparison for each stage
        exportData.crdaComparison = {};
        SGM.stages.forEach(stage => {
            if (SGM.submissions[stage.id].individual || SGM.facilitatorSubmissions[stage.id]?.data) {
                exportData.crdaComparison[stage.id] = getFullCRDAComparison(stage.id);
            }
        });
        
        return exportData;
    };
    
    window.downloadSmallGroupReport = function() {
        const data = exportSmallGroupData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `small_group_report_${data.groupId}_${data.studentId}_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    
    // ============================================================
    // INTEGRATION WITH MAIN PLATFORM
    // ============================================================
    
    // Override for differential stage when in small group mode
    window.getSmallGroupDifferentialButtons = function() {
        if (!SGM.enabled) return '';
        
        const stageId = 'differential';
        
        if (SGM.currentPhase === 'individual') {
            return `
                <button onclick="submitIndividualDifferential()" class="btn-primary px-6 py-2">
                    Submit Individual Answer → Group Discussion
                </button>
            `;
        } else if (SGM.currentPhase === 'discussing') {
            return ''; // Handled by discussion prompt
        } else if (SGM.currentPhase === 'revised') {
            return `
                <button onclick="submitRevisedDifferential()" class="btn-primary px-6 py-2">
                    Submit Revised Answer → Continue
                </button>
            `;
        }
        
        return '';
    };
    
    window.submitIndividualDifferential = function() {
        const differential = window.state?.rankedDifferential || [];
        const confidence = window.state?.initialConfidence || 50;
        
        submitIndividualAnswer('differential', differential, confidence);
        startGroupDiscussion('differential');
        
        if (typeof render === 'function') render();
    };
    
    window.submitRevisedDifferential = function() {
        const differential = window.state?.rankedDifferential || [];
        const confidence = window.state?.initialConfidence || 50;
        
        const divergence = submitRevisedAnswer('differential', differential, confidence);
        
        // Show divergence feedback briefly
        console.log('Differential divergence:', divergence);
        
        // Continue to next stage
        if (typeof advanceToHistory === 'function') {
            advanceToHistory();
        }
    };
    
    console.log('ReasonDx Small Group Mode module loaded');
    
})();
