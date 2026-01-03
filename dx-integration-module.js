// ============================================================
// DX ECOSYSTEM - CROSS-PLATFORM INTEGRATION MODULE
// Version 2.0 - January 2026
// Include this script in ReasonDx, MechanismDx, and CoachDx
// ============================================================

const DxIntegration = (function() {
    'use strict';
    
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwBMlYBWeF5QJjOxOH8_c-M47seJxojWlrekyTk2XGAKRTp99ghl0F3kW9y1kfVIAhG/exec';
    
    // ============================================================
    // UNIFIED LEARNING PATHS
    // ============================================================
    const LEARNING_PATHS = {
        'acs': {
            title: 'Master Acute Coronary Syndrome',
            topic: 'Cardiovascular',
            description: 'Complete journey from pathophysiology through expert-level case reasoning',
            steps: [
                { platform: 'mechanism', module: 'cardiac', title: 'ACS Pathophysiology', required: true },
                { platform: 'reason', caseFilter: 'chest-pain', difficulty: 'beginner', title: 'Chest Pain Case - Beginner' },
                { platform: 'coach', caseId: 'chest-pain-acs', title: 'ACS Teaching Session' },
                { platform: 'reason', caseFilter: 'stemi', difficulty: 'intermediate', title: 'STEMI vs NSTEMI' },
                { platform: 'reason', caseFilter: 'acs-atypical', difficulty: 'advanced', title: 'Atypical ACS Presentations' }
            ]
        },
        'chf': {
            title: 'Heart Failure Deep Dive',
            topic: 'Cardiovascular',
            description: 'From compensatory mechanisms to complex management',
            steps: [
                { platform: 'mechanism', module: 'cardiac', title: 'CHF Compensatory Mechanisms' },
                { platform: 'reason', caseFilter: 'dyspnea', title: 'Acute Dyspnea Case' },
                { platform: 'coach', caseId: 'acute-dyspnea', title: 'CHF Management Session' },
                { platform: 'reason', caseFilter: 'cardiorenal', title: 'Cardiorenal Syndrome' }
            ]
        },
        'anaphylaxis': {
            title: 'Anaphylaxis Mastery',
            topic: 'Allergy / Immunology',
            description: 'Type I hypersensitivity from molecules to emergency management',
            steps: [
                { platform: 'mechanism', module: 'allergy-immunology', title: 'Type I Hypersensitivity' },
                { platform: 'mechanism', module: 'allergy-immunology', title: 'Mast Cell Mediators' },
                { platform: 'coach', caseId: 'anaphylaxis', title: 'Anaphylaxis Teaching Case' },
                { platform: 'reason', caseFilter: 'drug-allergy', title: 'Drug Allergy Workup' }
            ]
        },
        'sepsis': {
            title: 'Sepsis Recognition & Response',
            topic: 'Critical Care',
            description: 'From SIRS through septic shock management',
            steps: [
                { platform: 'mechanism', module: 'infectious', title: 'Inflammatory Cascade' },
                { platform: 'mechanism', module: 'cardiac', title: 'Distributive Shock' },
                { platform: 'reason', caseFilter: 'fuo', title: 'FUO → Sepsis Case' },
                { platform: 'coach', caseId: 'fever-unknown-origin', title: 'Sepsis Workup Session' },
                { platform: 'reason', caseFilter: 'septic-shock', title: 'Septic Shock Management' }
            ]
        },
        'aki': {
            title: 'Acute Kidney Injury',
            topic: 'Nephrology',
            description: 'Pre-renal, intrinsic, and post-renal differentiation',
            steps: [
                { platform: 'mechanism', module: 'renal', title: 'GFR and Tubular Function' },
                { platform: 'mechanism', module: 'renal', title: 'AKI Classification' },
                { platform: 'coach', caseId: 'acute-kidney-injury', title: 'AKI Teaching Session' },
                { platform: 'reason', caseFilter: 'aki', title: 'Post-op AKI Case' }
            ]
        },
        'stroke': {
            title: 'Stroke Assessment',
            topic: 'Neurology',
            description: 'Recognition, localization, and acute management',
            steps: [
                { platform: 'mechanism', module: 'neuro', title: 'Cerebrovascular Anatomy' },
                { platform: 'mechanism', module: 'neuro', title: 'Stroke Syndromes' },
                { platform: 'reason', caseFilter: 'stroke', title: 'Acute Stroke Case' },
                { platform: 'coach', caseId: 'severe-headache', title: 'SAH Teaching Session' }
            ]
        }
    };
    
    // ============================================================
    // CONCEPT MAPPING - Links concepts across platforms
    // ============================================================
    const CONCEPT_MAP = {
        // Cardiovascular
        'acs': { mechanism: 'cardiac', reason: ['chest-pain', 'stemi', 'nstemi'], coach: ['chest-pain-acs'] },
        'chf': { mechanism: 'cardiac', reason: ['dyspnea', 'chf'], coach: ['acute-dyspnea'] },
        'arrhythmia': { mechanism: 'cardiac', reason: ['palpitations', 'syncope'], coach: [] },
        'shock': { mechanism: 'cardiac', reason: ['hypotension'], coach: [] },
        
        // Pulmonary
        'pneumonia': { mechanism: 'pulmonary', reason: ['cough', 'fever-pneumonia'], coach: [] },
        'copd': { mechanism: 'pulmonary', reason: ['dyspnea-copd'], coach: [] },
        'pe': { mechanism: 'pulmonary', reason: ['dyspnea-pe', 'chest-pain-pe'], coach: [] },
        
        // Renal
        'aki': { mechanism: 'renal', reason: ['aki', 'oliguria'], coach: ['acute-kidney-injury'] },
        'electrolytes': { mechanism: 'renal', reason: ['hyponatremia', 'hyperkalemia'], coach: [] },
        
        // Neuro
        'ams': { mechanism: 'neuro', reason: ['confusion', 'ams'], coach: ['altered-mental-status'] },
        'stroke': { mechanism: 'neuro', reason: ['weakness', 'stroke'], coach: [] },
        'headache': { mechanism: 'neuro', reason: ['headache'], coach: ['severe-headache'] },
        
        // Infectious
        'sepsis': { mechanism: 'infectious', reason: ['fever', 'sepsis'], coach: ['fever-unknown-origin'] },
        'fuo': { mechanism: 'infectious', reason: ['fuo'], coach: ['fever-unknown-origin'] },
        
        // Allergy/Immunology
        'anaphylaxis': { mechanism: 'allergy-immunology', reason: ['anaphylaxis', 'drug-allergy'], coach: ['anaphylaxis'] },
        'hypersensitivity': { mechanism: 'allergy-immunology', reason: ['rash', 'urticaria'], coach: [] },
        
        // Heme
        'anemia': { mechanism: 'heme', reason: ['anemia', 'fatigue'], coach: ['anemia-workup'] }
    };
    
    // ============================================================
    // PLATFORM DATA LOADERS
    // ============================================================
    function loadReasonDxData() {
        try {
            const playerData = JSON.parse(localStorage.getItem('reasonDxPlayerData') || '{}');
            const caseHistory = JSON.parse(localStorage.getItem('reasonDxCaseHistory') || '[]');
            const fingerprint = JSON.parse(localStorage.getItem('reasonDxFingerprint') || '{}');
            
            return {
                casesCompleted: playerData.casesCompleted || caseHistory.length || 0,
                accuracy: calculateAccuracy(caseHistory),
                calibration: playerData.calibrationScore || null,
                streak: playerData.currentStreak || 0,
                history: caseHistory,
                patterns: fingerprint.patterns || {},
                biases: fingerprint.biases || [],
                completedCases: caseHistory.map(c => c.caseId),
                systemPerformance: calculateSystemPerformance(caseHistory)
            };
        } catch(e) {
            console.error('[DxIntegration] Error loading ReasonDx data:', e);
            return { casesCompleted: 0, accuracy: null, history: [], completedCases: [], systemPerformance: {} };
        }
    }
    
    function loadMechanismDxData() {
        try {
            const progress = JSON.parse(localStorage.getItem('mechanismDxProgress') || '{}');
            const summaries = JSON.parse(localStorage.getItem('mechanismDxSummaries') || '[]');
            
            const modules = Object.keys(progress);
            const masterySum = Object.values(progress).reduce((sum, m) => sum + (m.mastery || 0), 0);
            const avgMastery = modules.length > 0 ? Math.round(masterySum / modules.length) : 0;
            
            const mastered = modules.filter(m => (progress[m].mastery || 0) >= 80);
            const inProgress = modules.filter(m => (progress[m].mastery || 0) >= 30 && (progress[m].mastery || 0) < 80);
            const weak = modules.filter(m => (progress[m].mastery || 0) < 30 && (progress[m].mastery || 0) > 0);
            
            return {
                modules: modules.length,
                avgMastery,
                mastered,
                inProgress,
                weak,
                progress,
                questionsAnswered: Object.values(progress).reduce((s, m) => s + (m.questionsAnswered || 0), 0),
                pathwaysBuilt: Object.values(progress).reduce((s, m) => s + (m.pathwaysCompleted || 0), 0)
            };
        } catch(e) {
            console.error('[DxIntegration] Error loading MechanismDx data:', e);
            return { modules: 0, avgMastery: 0, mastered: [], inProgress: [], weak: [], progress: {} };
        }
    }
    
    function loadCoachDxData() {
        try {
            const sessions = JSON.parse(localStorage.getItem('coachDxSessions') || '[]');
            const insights = JSON.parse(localStorage.getItem('coachDxInsights') || '[]');
            
            // Analyze concept gaps from sessions
            const conceptGaps = [];
            sessions.forEach(session => {
                try {
                    const concepts = JSON.parse(session.concepts_explored || '{}');
                    Object.entries(concepts).forEach(([domain, items]) => {
                        Object.entries(items).forEach(([concept, level]) => {
                            if (level === 0) {
                                conceptGaps.push({
                                    concept: concept.replace(/_/g, ' '),
                                    domain,
                                    caseId: session.case_id,
                                    caseTopic: session.case_topic
                                });
                            }
                        });
                    });
                } catch(e) {}
            });
            
            return {
                sessions: sessions.length,
                completedCases: [...new Set(sessions.map(s => s.case_id))],
                questionsAnswered: sessions.reduce((s, sess) => s + (sess.questions_answered || 0), 0),
                teachingMoments: sessions.reduce((s, sess) => s + (sess.teaching_moments_detected || 0), 0),
                insights: insights.length,
                conceptGaps,
                trend: calculateTrend(sessions)
            };
        } catch(e) {
            console.error('[DxIntegration] Error loading CoachDx data:', e);
            return { sessions: 0, completedCases: [], questionsAnswered: 0, conceptGaps: [], trend: '→' };
        }
    }
    
    // ============================================================
    // ANALYSIS HELPERS
    // ============================================================
    function calculateAccuracy(history) {
        if (!history || history.length === 0) return null;
        const correct = history.filter(c => c.correct).length;
        return Math.round((correct / history.length) * 100);
    }
    
    function calculateSystemPerformance(history) {
        const systems = {};
        history.forEach(c => {
            const sys = c.system || 'general';
            if (!systems[sys]) systems[sys] = { attempts: 0, correct: 0 };
            systems[sys].attempts++;
            if (c.correct) systems[sys].correct++;
        });
        
        Object.keys(systems).forEach(sys => {
            systems[sys].accuracy = Math.round((systems[sys].correct / systems[sys].attempts) * 100);
        });
        
        return systems;
    }
    
    function calculateTrend(sessions) {
        if (sessions.length < 2) return '→';
        const recent = sessions.slice(-3);
        const earlier = sessions.slice(-6, -3);
        if (recent.length === 0 || earlier.length === 0) return '→';
        
        const recentAvg = recent.reduce((s, x) => s + (x.teaching_moments_detected || 0), 0) / recent.length;
        const earlierAvg = earlier.reduce((s, x) => s + (x.teaching_moments_detected || 0), 0) / earlier.length;
        
        if (recentAvg > earlierAvg + 1) return '↑';
        if (recentAvg < earlierAvg - 1) return '↓';
        return '→';
    }
    
    // ============================================================
    // INTELLIGENT RECOMMENDATION ENGINE
    // ============================================================
    function generateRecommendations(currentPlatform, currentContext) {
        const recommendations = [];
        const reasonData = loadReasonDxData();
        const mechanismData = loadMechanismDxData();
        const coachData = loadCoachDxData();
        
        // Priority 1: Address gaps identified in CoachDx
        coachData.conceptGaps.slice(0, 3).forEach(gap => {
            const conceptInfo = Object.entries(CONCEPT_MAP).find(([k, v]) => 
                k.includes(gap.concept.toLowerCase().replace(/ /g, '-')) ||
                gap.concept.toLowerCase().includes(k)
            );
            
            if (conceptInfo) {
                recommendations.push({
                    priority: 'high',
                    platform: 'mechanism',
                    type: 'gap-fill',
                    title: `${gap.concept} Mechanisms`,
                    reason: `During your ${gap.caseTopic} session, you showed uncertainty about ${gap.concept.toLowerCase()}. Building this foundation will strengthen your clinical reasoning.`,
                    link: `mechanism/#${conceptInfo[1].mechanism}`,
                    source: 'CoachDx Session Gap'
                });
            }
        });
        
        // Priority 2: Mechanism gaps affecting case performance
        Object.entries(reasonData.systemPerformance).forEach(([system, stats]) => {
            if (stats.accuracy < 70) {
                const mechProgress = mechanismData.progress[system];
                if (!mechProgress || mechProgress.mastery < 60) {
                    recommendations.push({
                        priority: 'medium',
                        platform: 'mechanism',
                        type: 'foundation',
                        title: `${system.charAt(0).toUpperCase() + system.slice(1)} Pathophysiology`,
                        reason: `Your ${system} case performance (${stats.accuracy}%) suggests reviewing underlying mechanisms could help.`,
                        link: `mechanism/${system}.html`,
                        source: 'ReasonDx Performance'
                    });
                }
            }
        });
        
        // Priority 3: Suggest CoachDx for reasoning pattern issues
        if (reasonData.patterns?.prematureClosure > 2) {
            recommendations.push({
                priority: 'high',
                platform: 'coach',
                type: 'skill-building',
                title: 'Practice with AI Attending',
                reason: "You've shown a pattern of narrowing the differential early. Practice with Dr. Chen to develop broader initial hypotheses.",
                link: 'CoachDx/mentor-chat.html?case=altered-mental-status',
                source: 'Reasoning Pattern Analysis'
            });
        }
        
        // Priority 4: Apply mechanism mastery to cases
        mechanismData.mastered.forEach(module => {
            const relatedCases = Object.entries(CONCEPT_MAP)
                .filter(([k, v]) => v.mechanism === module)
                .flatMap(([k, v]) => v.reason);
            
            const uncompletedCases = relatedCases.filter(c => !reasonData.completedCases.includes(c));
            
            if (uncompletedCases.length > 0) {
                recommendations.push({
                    priority: 'low',
                    platform: 'reason',
                    type: 'application',
                    title: `Apply ${module.charAt(0).toUpperCase() + module.slice(1)} Knowledge`,
                    reason: `You've mastered ${module} mechanisms. Time to apply that knowledge to clinical cases!`,
                    link: `index.html?filter=${module}`,
                    source: 'Mechanism Mastery'
                });
            }
        });
        
        // Priority 5: Continue learning paths
        Object.entries(LEARNING_PATHS).forEach(([pathId, path]) => {
            const progress = getPathProgress(pathId, reasonData, mechanismData, coachData);
            if (progress.completed > 0 && progress.completed < progress.total) {
                const nextStep = path.steps[progress.completed];
                recommendations.push({
                    priority: 'medium',
                    platform: nextStep.platform,
                    type: 'learning-path',
                    title: `Continue: ${path.title}`,
                    reason: `You're ${progress.completed}/${progress.total} through this learning path. Next: ${nextStep.title}`,
                    link: getStepLink(nextStep),
                    source: 'Learning Path'
                });
            }
        });
        
        // Sort by priority and limit
        const priorityOrder = { 'high': 0, 'medium': 1, 'low': 2 };
        recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        
        return recommendations.slice(0, 6);
    }
    
    function getPathProgress(pathId, reasonData, mechanismData, coachData) {
        const path = LEARNING_PATHS[pathId];
        if (!path) return { completed: 0, total: 0 };
        
        let completed = 0;
        path.steps.forEach(step => {
            let isComplete = false;
            if (step.platform === 'mechanism') {
                const progress = mechanismData.progress[step.module];
                isComplete = progress && progress.mastery >= 70;
            } else if (step.platform === 'reason') {
                isComplete = reasonData.completedCases.some(c => 
                    c.includes(step.caseFilter) || step.caseFilter.includes(c)
                );
            } else if (step.platform === 'coach') {
                isComplete = coachData.completedCases.includes(step.caseId);
            }
            if (isComplete) completed++;
        });
        
        return { completed, total: path.steps.length };
    }
    
    function getStepLink(step) {
        if (step.platform === 'mechanism') {
            return `mechanism/${step.module}.html`;
        } else if (step.platform === 'reason') {
            return `index.html?filter=${step.caseFilter}`;
        } else if (step.platform === 'coach') {
            return `CoachDx/mentor-chat.html?case=${step.caseId}`;
        }
        return '#';
    }
    
    // ============================================================
    // PATENT INNOVATION METRICS
    // ============================================================
    
    // MDCLS - Multi-Dimensional Cognitive Load Sequencing
    function getMDCLSProfile() {
        const reasonData = loadReasonDxData();
        
        return {
            knowledgeRetrieval: calculateDimensionScore(reasonData, 'knowledge'),
            clinicalApplication: calculateDimensionScore(reasonData, 'application'),
            dataIntegration: calculateDimensionScore(reasonData, 'integration'),
            diagnosticSynthesis: calculateDimensionScore(reasonData, 'synthesis'),
            recommendedFocus: getRecommendedFocus(reasonData)
        };
    }
    
    function calculateDimensionScore(data, dimension) {
        // Simplified scoring based on case performance patterns
        const history = data.history || [];
        if (history.length === 0) return 50;
        
        let score = 50;
        switch(dimension) {
            case 'knowledge':
                score = Math.min(100, 50 + (history.length * 2));
                break;
            case 'application':
                score = data.accuracy || 50;
                break;
            case 'integration':
                score = Math.min(100, 40 + (history.filter(c => c.multiSystemCase).length * 10));
                break;
            case 'synthesis':
                score = Math.min(100, 30 + (history.filter(c => c.correct && c.difficulty === 'advanced').length * 15));
                break;
        }
        return Math.round(score);
    }
    
    function getRecommendedFocus(data) {
        const scores = {
            knowledge: calculateDimensionScore(data, 'knowledge'),
            application: calculateDimensionScore(data, 'application'),
            integration: calculateDimensionScore(data, 'integration'),
            synthesis: calculateDimensionScore(data, 'synthesis')
        };
        
        const lowest = Object.entries(scores).sort((a, b) => a[1] - b[1])[0];
        return lowest[0];
    }
    
    // MMD - Metacognitive Monitoring Dashboard
    function getMMDMetrics() {
        const reasonData = loadReasonDxData();
        const history = reasonData.history || [];
        
        // Calculate calibration (confidence vs accuracy alignment)
        let calibrationSum = 0;
        let calibrationCount = 0;
        history.forEach(c => {
            if (c.confidence !== undefined) {
                const expected = c.confidence / 100;
                const actual = c.correct ? 1 : 0;
                calibrationSum += Math.abs(expected - actual);
                calibrationCount++;
            }
        });
        
        const calibrationIndex = calibrationCount > 0 
            ? (1 - (calibrationSum / calibrationCount)).toFixed(2)
            : null;
        
        // Self-corrections (changed answers that were correct)
        const selfCorrections = history.filter(c => c.changedAnswer && c.correct).length;
        
        return {
            calibrationIndex,
            confidenceAccuracy: reasonData.accuracy,
            avgSelfCorrections: history.length > 0 ? (selfCorrections / history.length * 10).toFixed(1) : 0,
            weeklyTrend: calculateWeeklyTrend(history)
        };
    }
    
    function calculateWeeklyTrend(history) {
        const now = Date.now();
        const weekAgo = now - (7 * 24 * 60 * 60 * 1000);
        const twoWeeksAgo = now - (14 * 24 * 60 * 60 * 1000);
        
        const thisWeek = history.filter(c => new Date(c.timestamp) > weekAgo);
        const lastWeek = history.filter(c => {
            const t = new Date(c.timestamp);
            return t > twoWeeksAgo && t <= weekAgo;
        });
        
        if (thisWeek.length === 0 || lastWeek.length === 0) return '→';
        
        const thisWeekAcc = thisWeek.filter(c => c.correct).length / thisWeek.length;
        const lastWeekAcc = lastWeek.filter(c => c.correct).length / lastWeek.length;
        
        const diff = Math.round((thisWeekAcc - lastWeekAcc) * 100);
        if (diff > 5) return `↑${diff}%`;
        if (diff < -5) return `↓${Math.abs(diff)}%`;
        return '→';
    }
    
    // DKFCE - Dynamic Knowledge Frontier Calibration Engine
    function getDKFCEZone() {
        const reasonData = loadReasonDxData();
        const recentCases = reasonData.history.slice(-10);
        
        if (recentCases.length === 0) {
            return {
                zone: 'comfort',
                successRate: 100,
                recommendation: 'Try some cases to calibrate your learning zone',
                nextDifficulty: 'beginner'
            };
        }
        
        const successRate = Math.round((recentCases.filter(c => c.correct).length / recentCases.length) * 100);
        
        let zone, recommendation, nextDifficulty;
        
        if (successRate >= 90) {
            zone = 'comfort';
            recommendation = 'You\'re in the comfort zone - time to increase difficulty!';
            nextDifficulty = 'advanced';
        } else if (successRate >= 70) {
            zone = 'zpd'; // Zone of Proximal Development - optimal
            recommendation = 'Perfect! You\'re in the optimal learning zone.';
            nextDifficulty = 'intermediate+';
        } else if (successRate >= 50) {
            zone = 'stretch';
            recommendation = 'Challenging yourself - consider reviewing mechanisms for support.';
            nextDifficulty = 'intermediate';
        } else {
            zone = 'frustration';
            recommendation = 'Dial back difficulty and strengthen foundations first.';
            nextDifficulty = 'beginner';
        }
        
        return { zone, successRate, recommendation, nextDifficulty };
    }
    
    // ============================================================
    // UI COMPONENTS
    // ============================================================
    function renderRecommendationPanel(containerId, currentPlatform) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const recommendations = generateRecommendations(currentPlatform, {});
        
        const platformColors = {
            mechanism: '#10b981',
            reason: '#3b82f6',
            coach: '#8b5cf6'
        };
        
        const priorityIcons = {
            high: '🔴',
            medium: '🟡',
            low: '🟢'
        };
        
        let html = `
            <div class="dx-recommendations" style="font-family: system-ui, sans-serif;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                    <span style="font-size: 16px;">🎯</span>
                    <span style="font-weight: 600; font-size: 14px;">Recommended Next Steps</span>
                </div>
        `;
        
        recommendations.forEach(rec => {
            html += `
                <div style="background: #f8fafc; border-left: 3px solid ${platformColors[rec.platform]}; 
                     border-radius: 6px; padding: 12px; margin-bottom: 10px;">
                    <div style="font-size: 10px; color: #64748b; margin-bottom: 4px;">
                        ${priorityIcons[rec.priority]} ${rec.source}
                    </div>
                    <div style="font-weight: 500; font-size: 13px; margin-bottom: 4px;">${rec.title}</div>
                    <div style="font-size: 12px; color: #64748b; margin-bottom: 8px;">${rec.reason}</div>
                    <a href="${rec.link}" style="display: inline-block; padding: 6px 12px; 
                       background: #18181b; color: white; text-decoration: none; 
                       border-radius: 4px; font-size: 11px; font-weight: 500;">
                       Start →
                    </a>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    }
    
    function renderLearningPathWidget(containerId, pathId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const path = LEARNING_PATHS[pathId];
        if (!path) return;
        
        const reasonData = loadReasonDxData();
        const mechanismData = loadMechanismDxData();
        const coachData = loadCoachDxData();
        const progress = getPathProgress(pathId, reasonData, mechanismData, coachData);
        
        const platformIcons = {
            mechanism: '⚙️',
            reason: '🔬',
            coach: '🩺'
        };
        
        let html = `
            <div class="dx-learning-path" style="font-family: system-ui, sans-serif; 
                 background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                <div style="padding: 16px; border-bottom: 1px solid #e2e8f0;">
                    <div style="font-size: 10px; text-transform: uppercase; color: #64748b; 
                         font-weight: 600; letter-spacing: 0.5px;">${path.topic}</div>
                    <div style="font-weight: 600; font-size: 15px; margin: 4px 0;">${path.title}</div>
                    <div style="font-size: 12px; color: #64748b;">${path.description}</div>
                </div>
                <div style="padding: 12px 16px; background: #f8fafc;">
                    <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 6px;">
                        <span style="color: #64748b;">Progress</span>
                        <span style="font-weight: 500;">${progress.completed}/${progress.total}</span>
                    </div>
                    <div style="height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
                        <div style="height: 100%; width: ${(progress.completed/progress.total)*100}%; 
                             background: linear-gradient(90deg, #10b981, #3b82f6); border-radius: 3px;"></div>
                    </div>
                </div>
                <div style="padding: 12px 16px;">
        `;
        
        path.steps.forEach((step, i) => {
            const isComplete = i < progress.completed;
            const isCurrent = i === progress.completed;
            
            html += `
                <div style="display: flex; align-items: center; gap: 10px; padding: 8px 0; 
                     border-bottom: ${i < path.steps.length - 1 ? '1px solid #f1f5f9' : 'none'};">
                    <div style="width: 24px; height: 24px; border-radius: 50%; display: flex; 
                         align-items: center; justify-content: center; font-size: 11px; font-weight: 600;
                         ${isComplete ? 'background: #10b981; color: white;' : 
                           isCurrent ? 'background: #f59e0b; color: #18181b;' : 
                           'background: #f1f5f9; color: #94a3b8; border: 1px dashed #cbd5e1;'}">
                        ${isComplete ? '✓' : i + 1}
                    </div>
                    <div style="flex: 1;">
                        <div style="font-size: 10px; text-transform: uppercase; font-weight: 600; 
                             color: ${step.platform === 'mechanism' ? '#10b981' : 
                                     step.platform === 'reason' ? '#3b82f6' : '#8b5cf6'};">
                            ${platformIcons[step.platform]} ${step.platform}Dx
                        </div>
                        <div style="font-size: 12px; font-weight: 500;">${step.title}</div>
                    </div>
                    <div style="font-size: 11px; color: #94a3b8;">
                        ${isComplete ? 'Done' : isCurrent ? 'Start →' : 'Locked'}
                    </div>
                </div>
            `;
        });
        
        html += '</div></div>';
        container.innerHTML = html;
    }
    
    // ============================================================
    // PUBLIC API
    // ============================================================
    return {
        // Data loaders
        loadReasonDxData,
        loadMechanismDxData,
        loadCoachDxData,
        
        // Recommendations
        generateRecommendations,
        
        // Learning paths
        LEARNING_PATHS,
        getPathProgress,
        
        // Concept mapping
        CONCEPT_MAP,
        
        // Patent innovations
        getMDCLSProfile,
        getMMDMetrics,
        getDKFCEZone,
        
        // UI rendering
        renderRecommendationPanel,
        renderLearningPathWidget,
        
        // Utilities
        getStepLink
    };
})();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DxIntegration;
}
