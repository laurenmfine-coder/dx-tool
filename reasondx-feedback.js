/**
 * ReasonDx - Feedback System
 * Version: 1.0
 * Author: Lauren Fine, MD, FAAAAI
 * 
 * Components:
 * - Session Snapshot: Post-case feedback summary
 * - Real-Time Nudges: Contextual hints during cases
 * - Contextual Feedback Panels: Stage-specific feedback
 */

const ReasonDxFeedback = (function() {
    'use strict';

    const CONFIG = {
        version: '1.0.0',
        storageKey: 'rdx_feedback_data',
        nudgeDuration: 8000,
        feedbackDelayMs: 500
    };

    let state = {
        historicalData: [],
        currentNudge: null,
        nudgeQueue: [],
        feedbackInteractions: { expanded: 0, dismissed: 0, actedOn: 0 }
    };

    // ==========================================
    // Initialization
    // ==========================================
    function init() {
        loadFromStorage();
        createNudgeContainer();
        console.log('[Feedback] ReasonDx Feedback System initialized v' + CONFIG.version);
    }

    function loadFromStorage() {
        try {
            const stored = localStorage.getItem(CONFIG.storageKey);
            if (stored) {
                const data = JSON.parse(stored);
                state.historicalData = data.historicalData || [];
                state.feedbackInteractions = data.feedbackInteractions || state.feedbackInteractions;
            }
        } catch (e) {
            console.warn('[Feedback] Could not load from storage:', e);
        }
    }

    function saveToStorage() {
        try {
            localStorage.setItem(CONFIG.storageKey, JSON.stringify({
                historicalData: state.historicalData.slice(-50),
                feedbackInteractions: state.feedbackInteractions
            }));
        } catch (e) {
            console.warn('[Feedback] Could not save to storage:', e);
        }
    }

    function createNudgeContainer() {
        if (document.getElementById('rdx-nudge-container')) return;
        const container = document.createElement('div');
        container.id = 'rdx-nudge-container';
        document.body.appendChild(container);
    }

    // ==========================================
    // Session Snapshot
    // ==========================================
    function showSessionSnapshot(sessionData) {
        return new Promise((resolve) => {
            const { session, checkIns, computed } = sessionData;
            
            state.historicalData.push({
                timestamp: Date.now(),
                caseId: session?.caseId,
                checkIns,
                computed
            });
            saveToStorage();

            const snapshotHTML = generateSnapshotHTML(sessionData);
            
            const overlay = document.createElement('div');
            overlay.id = 'rdx-snapshot-overlay';
            overlay.className = 'rdx-modal-overlay';
            overlay.innerHTML = `
                <div class="rdx-modal" style="max-width: 600px;">
                    <div class="rdx-snapshot">${snapshotHTML}</div>
                    <div class="rdx-modal-footer" style="justify-content: center;">
                        <button class="rdx-btn rdx-btn-primary" id="rdx-snapshot-close">Continue →</button>
                    </div>
                </div>
            `;

            document.body.appendChild(overlay);
            requestAnimationFrame(() => overlay.classList.add('active'));

            overlay.querySelector('#rdx-snapshot-close').addEventListener('click', () => {
                overlay.classList.remove('active');
                setTimeout(() => { overlay.remove(); resolve(); }, 300);
            });
        });
    }

    function generateSnapshotHTML(sessionData) {
        const { checkIns, computed } = sessionData;
        const pre = checkIns?.pre || {};
        const post = checkIns?.post || {};
        const caseResults = post?.caseResults || {};

        let html = `
            <div class="rdx-snapshot-header">
                <div class="rdx-snapshot-title">📊 Your Session Snapshot</div>
                <div class="rdx-snapshot-subtitle">Here's how you did</div>
            </div>
            <div class="rdx-snapshot-body">
        `;

        // Performance Section
        if (caseResults.score !== undefined) {
            html += `
                <div class="rdx-snapshot-section">
                    <div class="rdx-snapshot-section-title">🎯 Performance</div>
                    <div class="rdx-snapshot-metric">
                        <span class="rdx-snapshot-metric-label">Score</span>
                        <span class="rdx-snapshot-metric-value" style="color: ${getScoreColor(caseResults.score)}">${caseResults.score}%</span>
                    </div>
                </div>
            `;
        }

        // Confidence Calibration
        if (computed?.confidenceCalibration) {
            const cal = computed.confidenceCalibration;
            html += `
                <div class="rdx-snapshot-section">
                    <div class="rdx-snapshot-section-title">🎯 Confidence Calibration</div>
                    <div class="rdx-snapshot-metric">
                        <span class="rdx-snapshot-metric-label">You predicted</span>
                        <span class="rdx-snapshot-metric-value">${cal.predicted}% confident</span>
                    </div>
                    <div class="rdx-snapshot-metric">
                        <span class="rdx-snapshot-metric-label">You scored</span>
                        <span class="rdx-snapshot-metric-value">${cal.actual}%</span>
                    </div>
                    <div class="rdx-snapshot-insight">
                        <span class="rdx-snapshot-insight-icon">💡</span>
                        <span class="rdx-snapshot-insight-text">${cal.assessment.message}</span>
                    </div>
                </div>
            `;
        }

        // Time Management
        if (computed?.timeCalibration) {
            const time = computed.timeCalibration;
            html += `
                <div class="rdx-snapshot-section">
                    <div class="rdx-snapshot-section-title">⏱️ Time Management</div>
                    <div class="rdx-snapshot-metric">
                        <span class="rdx-snapshot-metric-label">You estimated</span>
                        <span class="rdx-snapshot-metric-value">${time.estimated} min</span>
                    </div>
                    <div class="rdx-snapshot-metric">
                        <span class="rdx-snapshot-metric-label">Actual time</span>
                        <span class="rdx-snapshot-metric-value">${time.actual} min</span>
                    </div>
                    <div class="rdx-snapshot-insight">
                        <span class="rdx-snapshot-insight-icon">💡</span>
                        <span class="rdx-snapshot-insight-text">${time.assessment.message}</span>
                    </div>
                </div>
            `;
        }

        // Heart Rate Trajectory
        if (computed?.heartRateTrajectory?.pre || computed?.heartRateTrajectory?.mid || computed?.heartRateTrajectory?.post) {
            const hr = computed.heartRateTrajectory;
            html += `
                <div class="rdx-snapshot-section">
                    <div class="rdx-snapshot-section-title">💓 Stress Response</div>
                    <div class="rdx-hr-visual">${generateHRVisualization(hr)}</div>
                    ${hr.peakChange ? `
                        <div class="rdx-snapshot-insight rdx-mt-2">
                            <span class="rdx-snapshot-insight-icon">💡</span>
                            <span class="rdx-snapshot-insight-text">
                                ${hr.peakChange.percentChange > 15 
                                    ? `Your HR increased ${hr.peakChange.percentChange}% during the case - noticeable stress response!`
                                    : `Your HR stayed relatively stable (±${hr.peakChange.percentChange}%) - good composure!`}
                            </span>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        // Stress/Mood Trajectory
        if (computed?.stressTrajectory?.pre || computed?.stressTrajectory?.mid || computed?.stressTrajectory?.post) {
            const stress = computed.stressTrajectory;
            html += `
                <div class="rdx-snapshot-section">
                    <div class="rdx-snapshot-section-title">😊 Mood Journey</div>
                    <div class="rdx-stress-trail">
                        ${stress.pre ? `<span class="emoji">${getMoodEmoji(stress.pre)}</span>` : ''}
                        ${stress.pre && (stress.mid || stress.post) ? '<span class="arrow">→</span>' : ''}
                        ${stress.mid ? `<span class="emoji">${getMoodEmoji(stress.mid)}</span>` : ''}
                        ${stress.mid && stress.post ? '<span class="arrow">→</span>' : ''}
                        ${stress.post ? `<span class="emoji">${getMoodEmoji(stress.post)}</span>` : ''}
                    </div>
                    ${getStressInsight(stress)}
                </div>
            `;
        }

        // Cognitive Load
        if (post?.cognitiveLoad) {
            html += `
                <div class="rdx-snapshot-section">
                    <div class="rdx-snapshot-section-title">🧠 Mental Demand</div>
                    <div class="rdx-snapshot-metric">
                        <span class="rdx-snapshot-metric-label">Cognitive load rating</span>
                        <span class="rdx-snapshot-metric-value">${post.cognitiveLoad}/10</span>
                    </div>
                    <div class="rdx-progress rdx-mt-1">
                        <div class="rdx-progress-fill ${post.cognitiveLoad > 7 ? 'danger' : post.cognitiveLoad > 4 ? 'warning' : 'success'}" 
                             style="width: ${post.cognitiveLoad * 10}%"></div>
                    </div>
                    ${getCognitiveLoadInsight(post.cognitiveLoad, caseResults.score)}
                </div>
            `;
        }

        // Historical Pattern Insight
        const patternInsight = generatePatternInsight();
        if (patternInsight) {
            html += `
                <div class="rdx-snapshot-section" style="border-bottom: none;">
                    <div class="rdx-snapshot-section-title">📈 Your Pattern</div>
                    <div class="rdx-snapshot-insight" style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border-left-color: #F59E0B;">
                        <span class="rdx-snapshot-insight-icon">⭐</span>
                        <span class="rdx-snapshot-insight-text" style="color: #92400E;">${patternInsight}</span>
                    </div>
                </div>
            `;
        }

        html += '</div>';
        return html;
    }

    function generateHRVisualization(hr) {
        const values = [
            { label: 'Start', value: hr.pre },
            { label: 'Mid', value: hr.mid },
            { label: 'End', value: hr.post }
        ].filter(v => v.value);

        if (values.length === 0) return '';

        const max = Math.max(...values.map(v => v.value));
        const min = Math.min(...values.map(v => v.value));
        const range = max - min || 1;

        return `<div class="rdx-hr-points">
            ${values.map(v => {
                const height = 20 + ((v.value - min) / range) * 60;
                const isElevated = v.value === max && range > 10;
                return `<div class="rdx-hr-point">
                    <div class="rdx-hr-bar ${isElevated ? 'elevated' : ''}" style="height: ${height}px;"></div>
                    <div class="rdx-hr-value">${v.value}</div>
                    <div class="rdx-hr-label">${v.label}</div>
                </div>`;
            }).join('')}
        </div>`;
    }

    function getMoodEmoji(value) {
        return { 1: '😫', 2: '😕', 3: '😐', 4: '🙂', 5: '😊' }[value] || '😐';
    }

    function getStressInsight(stress) {
        const values = [stress.pre, stress.mid, stress.post].filter(v => v);
        if (values.length < 2) return '';

        const diff = values[values.length - 1] - values[0];
        let message = '';
        if (diff >= 2) message = 'Great recovery! You ended feeling much better than you started.';
        else if (diff >= 1) message = 'You finished in a better mood - the case went well!';
        else if (diff <= -2) message = 'This case was challenging. Consider taking a short break.';
        else if (diff <= -1) message = 'Slightly more stressed at the end - normal for tough cases.';
        else message = 'Your mood stayed steady throughout - good emotional regulation!';

        return `<div class="rdx-snapshot-insight rdx-mt-2">
            <span class="rdx-snapshot-insight-icon">💡</span>
            <span class="rdx-snapshot-insight-text">${message}</span>
        </div>`;
    }

    function getCognitiveLoadInsight(load, score) {
        if (load > 7 && score >= 80) {
            return `<div class="rdx-snapshot-insight rdx-mt-2" style="background: linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%); border-left-color: var(--rdx-success);">
                <span class="rdx-snapshot-insight-icon">🏆</span>
                <span class="rdx-snapshot-insight-text" style="color: #166534;">Impressive! High cognitive load but strong performance. You thrive under pressure!</span>
            </div>`;
        } else if (load > 7) {
            return `<div class="rdx-snapshot-insight rdx-mt-2">
                <span class="rdx-snapshot-insight-icon">💡</span>
                <span class="rdx-snapshot-insight-text">This case pushed your limits. Consider reviewing the teaching points when fresh.</span>
            </div>`;
        } else if (load < 4 && score >= 90) {
            return `<div class="rdx-snapshot-insight rdx-mt-2" style="background: linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%); border-left-color: var(--rdx-success);">
                <span class="rdx-snapshot-insight-icon">⚡</span>
                <span class="rdx-snapshot-insight-text" style="color: #166534;">This felt easy and you nailed it! Ready for a more challenging case?</span>
            </div>`;
        }
        return '';
    }

    function getScoreColor(score) {
        if (score >= 85) return 'var(--rdx-success)';
        if (score >= 70) return 'var(--rdx-primary)';
        if (score >= 50) return 'var(--rdx-warning)';
        return 'var(--rdx-danger)';
    }

    function generatePatternInsight() {
        if (state.historicalData.length < 3) return null;

        const recent = state.historicalData.slice(-10);
        
        // Confidence calibration pattern
        const calibrations = recent.filter(s => s.computed?.confidenceCalibration).map(s => s.computed.confidenceCalibration.difference);
        if (calibrations.length >= 3) {
            const avgDiff = calibrations.reduce((a, b) => a + b, 0) / calibrations.length;
            if (avgDiff > 15) return `You consistently perform better than you predict (avg +${Math.round(avgDiff)}%). Trust yourself more!`;
            if (avgDiff < -15) return `You tend to be overconfident (avg ${Math.round(avgDiff)}%). Consider more careful reasoning.`;
        }

        // Time estimation pattern
        const timeRatios = recent.filter(s => s.computed?.timeCalibration).map(s => parseFloat(s.computed.timeCalibration.ratio));
        if (timeRatios.length >= 3) {
            const avgRatio = timeRatios.reduce((a, b) => a + b, 0) / timeRatios.length;
            if (avgRatio > 1.4) return `You tend to underestimate time by ${Math.round((avgRatio - 1) * 100)}%. Plan for longer sessions.`;
            if (avgRatio < 0.7) return `You often finish faster than expected! You might be ready for harder cases.`;
        }

        // Stress-performance correlation
        const stressPerf = recent.filter(s => s.checkIns?.pre?.mood && s.checkIns?.post?.caseResults?.score);
        if (stressPerf.length >= 5) {
            const highStress = stressPerf.filter(s => s.checkIns.pre.mood <= 2);
            const lowStress = stressPerf.filter(s => s.checkIns.pre.mood >= 4);
            if (highStress.length >= 2 && lowStress.length >= 2) {
                const highAvg = highStress.reduce((a, s) => a + s.checkIns.post.caseResults.score, 0) / highStress.length;
                const lowAvg = lowStress.reduce((a, s) => a + s.checkIns.post.caseResults.score, 0) / lowStress.length;
                if (highAvg > lowAvg + 10) return `Interesting: You perform BETTER under stress! Your accuracy when stressed: ${Math.round(highAvg)}% vs ${Math.round(lowAvg)}% when relaxed.`;
            }
        }

        return null;
    }

    // ==========================================
    // Real-Time Nudges
    // ==========================================
    function showNudge(options) {
        const { type = 'tip', icon, title, text, actions = [], duration = CONFIG.nudgeDuration } = options;
        
        dismissNudge(); // Remove any existing nudge

        const nudge = document.createElement('div');
        nudge.id = 'rdx-current-nudge';
        nudge.className = `rdx-nudge ${type}`;
        nudge.innerHTML = `
            <button class="rdx-nudge-close" onclick="ReasonDxFeedback.dismissNudge()">×</button>
            <div class="rdx-nudge-header">
                <span class="rdx-nudge-icon">${icon || getNudgeIcon(type)}</span>
                <span class="rdx-nudge-title">${title}</span>
            </div>
            <div class="rdx-nudge-text">${text}</div>
            ${actions.length > 0 ? `
                <div class="rdx-nudge-actions">
                    ${actions.map(a => `
                        <button class="rdx-nudge-btn ${a.primary ? 'primary' : ''}" 
                                onclick="${a.onclick}">${a.label}</button>
                    `).join('')}
                </div>
            ` : ''}
        `;

        document.getElementById('rdx-nudge-container').appendChild(nudge);
        requestAnimationFrame(() => nudge.classList.add('active'));

        state.currentNudge = {
            element: nudge,
            timeout: duration ? setTimeout(() => dismissNudge(), duration) : null
        };

        return nudge;
    }

    function dismissNudge() {
        if (state.currentNudge) {
            if (state.currentNudge.timeout) clearTimeout(state.currentNudge.timeout);
            const el = state.currentNudge.element;
            if (el) {
                el.classList.remove('active');
                setTimeout(() => el.remove(), 300);
            }
            state.currentNudge = null;
            state.feedbackInteractions.dismissed++;
            saveToStorage();
        }
    }

    function getNudgeIcon(type) {
        return { tip: '💡', pattern: '🎯', success: '⚡', eomas: '🌿', warning: '⚠️' }[type] || '💡';
    }

    // Pre-built nudge types
    function showTipNudge(title, text, actions) {
        return showNudge({ type: 'tip', title, text, actions });
    }

    function showPatternNudge(title, text, actions) {
        return showNudge({ type: 'pattern', title, text, actions });
    }

    function showSuccessNudge(title, text) {
        return showNudge({ type: 'success', title, text, duration: 5000 });
    }

    function showEOMASNudge(text, actions) {
        return showNudge({ 
            type: 'eomas', 
            icon: '🌿',
            title: 'EOMAS Check', 
            text, 
            actions 
        });
    }

    // ==========================================
    // Contextual Feedback Panels
    // ==========================================
    function createFeedbackPanel(options) {
        const { icon, title, items = [], stats = [], insight = null } = options;

        const panel = document.createElement('div');
        panel.className = 'rdx-feedback-panel rdx-animate-fadeIn';
        panel.innerHTML = `
            <div class="rdx-feedback-panel-header">
                <span class="rdx-feedback-panel-icon">${icon}</span>
                <span class="rdx-feedback-panel-title">${title}</span>
            </div>
            ${items.map(item => `
                <div class="rdx-feedback-item ${item.type || 'neutral'}">
                    <span class="rdx-feedback-item-icon">${item.icon || getItemIcon(item.type)}</span>
                    <div class="rdx-feedback-item-content">
                        <div class="rdx-feedback-item-label">${item.label}</div>
                        ${item.detail ? `<div class="rdx-feedback-item-detail">${item.detail}</div>` : ''}
                    </div>
                </div>
            `).join('')}
            ${stats.length > 0 ? `
                <div style="display: flex; gap: 12px; margin-top: 12px;">
                    ${stats.map(s => `
                        <div class="rdx-pattern-stat" style="flex: 1;">
                            <div class="rdx-pattern-stat-label">${s.label}</div>
                            <div class="rdx-pattern-stat-value">${s.value}</div>
                            ${s.comparison ? `<div class="rdx-pattern-stat-comparison ${s.comparisonType || ''}">${s.comparison}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            ${insight ? `
                <div class="rdx-snapshot-insight rdx-mt-2">
                    <span class="rdx-snapshot-insight-icon">💡</span>
                    <span class="rdx-snapshot-insight-text">${insight}</span>
                </div>
            ` : ''}
        `;

        state.feedbackInteractions.expanded++;
        saveToStorage();

        return panel;
    }

    function getItemIcon(type) {
        return { positive: '✅', negative: '⚠️', neutral: '💡' }[type] || '•';
    }

    // Pre-built feedback panels
    function createHistoryFeedbackPanel(data) {
        return createFeedbackPanel({
            icon: '💬',
            title: 'History-Taking Insight',
            items: [
                ...(data.goodQuestions || []).map(q => ({ type: 'positive', label: q, detail: 'High-yield question' })),
                ...(data.missedQuestions || []).map(q => ({ type: 'negative', label: q, detail: 'Consider asking this' }))
            ],
            stats: [
                { label: 'Questions Asked', value: data.questionsAsked || '0' },
                { label: 'High-Yield', value: data.highYield || '0', comparison: data.comparison, comparisonType: data.comparisonType }
            ],
            insight: data.insight
        });
    }

    function createExamFeedbackPanel(data) {
        return createFeedbackPanel({
            icon: '🩺',
            title: 'Physical Exam Insight',
            items: [
                ...(data.foundFindings || []).map(f => ({ type: 'positive', label: f })),
                ...(data.missedFindings || []).map(f => ({ type: 'negative', label: f, detail: 'Critical finding missed' }))
            ],
            stats: [
                { label: 'Systems Examined', value: data.systemsExamined || '0' },
                { label: 'Key Findings', value: `${data.keyFound || 0}/${data.keyTotal || 0}` }
            ],
            insight: data.insight
        });
    }

    function createTestOrderingPanel(data) {
        return createFeedbackPanel({
            icon: '🧪',
            title: 'Test Ordering Insight',
            items: [
                ...(data.appropriateTests || []).map(t => ({ type: 'positive', label: t })),
                ...(data.questionableTests || []).map(t => ({ type: 'negative', label: t.name, detail: t.reason }))
            ],
            stats: [
                { label: 'Tests Ordered', value: data.testsOrdered || '0' },
                { label: 'Cost', value: `$${data.totalCost || 0}`, comparison: data.costComparison, comparisonType: data.costType }
            ],
            insight: data.insight
        });
    }

    function createDifferentialPanel(data) {
        return createFeedbackPanel({
            icon: '🎯',
            title: 'Differential Diagnosis Insight',
            items: [
                { type: data.correctInTop3 ? 'positive' : 'negative', 
                  label: data.correctInTop3 ? 'Correct diagnosis in top 3!' : 'Correct diagnosis not in top 3',
                  detail: data.correctPosition ? `It was #${data.correctPosition}` : '' },
                ...(data.biasesDetected || []).map(b => ({ type: 'neutral', label: b.name, detail: b.description }))
            ],
            stats: [
                { label: 'Diagnoses Listed', value: data.diagnosesCount || '0' },
                { label: 'Strategy', value: data.strategy || 'Mixed' }
            ],
            insight: data.insight
        });
    }

    // ==========================================
    // Engagement Tracking
    // ==========================================
    function getInteractionStats() {
        return {
            ...state.feedbackInteractions,
            historicalSessions: state.historicalData.length
        };
    }

    // ==========================================
    // Initialize
    // ==========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return {
        // Session Snapshot
        showSessionSnapshot,
        
        // Nudges
        showNudge,
        showTipNudge,
        showPatternNudge,
        showSuccessNudge,
        showEOMASNudge,
        dismissNudge,
        
        // Feedback Panels
        createFeedbackPanel,
        createHistoryFeedbackPanel,
        createExamFeedbackPanel,
        createTestOrderingPanel,
        createDifferentialPanel,
        
        // Analytics
        getInteractionStats,
        getHistoricalData: () => [...state.historicalData],
        
        version: CONFIG.version
    };

})();

window.ReasonDxFeedback = ReasonDxFeedback;
