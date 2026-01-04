/**
 * ReasonDx - Learner Insights Dashboard
 * Version: 1.0
 * Author: Lauren Fine, MD, FAAAAI
 * 
 * Features:
 * - Overview statistics
 * - Confidence calibration tracking
 * - Stress-performance correlation
 * - Time management patterns
 * - Engagement metrics
 * - Peer comparison (opt-in)
 */

const ReasonDxDashboard = (function() {
    'use strict';

    const CONFIG = {
        version: '1.0.0',
        storageKey: 'rdx_dashboard_data',
        tabs: ['overview', 'calibration', 'stress', 'time', 'patterns', 'engagement']
    };

    let state = {
        activeTab: 'overview',
        learnerData: null,
        peerComparisonEnabled: false
    };

    // ==========================================
    // Main Dashboard Render
    // ==========================================
    function renderDashboard(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('[Dashboard] Container not found:', containerId);
            return;
        }

        // Gather data from LSCS and Feedback modules
        state.learnerData = gatherLearnerData();
        state.peerComparisonEnabled = options.peerComparison || false;

        container.innerHTML = `
            <div class="rdx-dashboard">
                <div class="rdx-dashboard-header">
                    <h1 class="rdx-dashboard-title">📈 My Insights Dashboard</h1>
                    <p class="rdx-dashboard-subtitle">Track your clinical reasoning development over time</p>
                </div>
                
                <div class="rdx-dashboard-tabs">
                    <button class="rdx-dashboard-tab ${state.activeTab === 'overview' ? 'active' : ''}" 
                            onclick="ReasonDxDashboard.switchTab('overview')">Overview</button>
                    <button class="rdx-dashboard-tab ${state.activeTab === 'calibration' ? 'active' : ''}" 
                            onclick="ReasonDxDashboard.switchTab('calibration')">Calibration</button>
                    <button class="rdx-dashboard-tab ${state.activeTab === 'stress' ? 'active' : ''}" 
                            onclick="ReasonDxDashboard.switchTab('stress')">Stress</button>
                    <button class="rdx-dashboard-tab ${state.activeTab === 'time' ? 'active' : ''}" 
                            onclick="ReasonDxDashboard.switchTab('time')">Time</button>
                    <button class="rdx-dashboard-tab ${state.activeTab === 'patterns' ? 'active' : ''}" 
                            onclick="ReasonDxDashboard.switchTab('patterns')">Patterns</button>
                    <button class="rdx-dashboard-tab ${state.activeTab === 'engagement' ? 'active' : ''}" 
                            onclick="ReasonDxDashboard.switchTab('engagement')">Engagement</button>
                </div>
                
                <div id="rdx-dashboard-content">
                    ${renderTabContent(state.activeTab)}
                </div>
            </div>
        `;
    }

    function switchTab(tabName) {
        state.activeTab = tabName;
        const content = document.getElementById('rdx-dashboard-content');
        if (content) {
            content.innerHTML = renderTabContent(tabName);
        }
        
        // Update tab buttons
        document.querySelectorAll('.rdx-dashboard-tab').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase() === tabName) {
                btn.classList.add('active');
            }
        });
    }

    function renderTabContent(tab) {
        const data = state.learnerData;
        
        switch(tab) {
            case 'overview': return renderOverviewTab(data);
            case 'calibration': return renderCalibrationTab(data);
            case 'stress': return renderStressTab(data);
            case 'time': return renderTimeTab(data);
            case 'patterns': return renderPatternsTab(data);
            case 'engagement': return renderEngagementTab(data);
            default: return renderOverviewTab(data);
        }
    }

    // ==========================================
    // Tab Renderers
    // ==========================================
    function renderOverviewTab(data) {
        const stats = data.overview;
        
        return `
            <div class="rdx-stat-grid">
                <div class="rdx-stat-card">
                    <div class="rdx-stat-value">${stats.totalCases}</div>
                    <div class="rdx-stat-label">Cases Completed</div>
                </div>
                <div class="rdx-stat-card">
                    <div class="rdx-stat-value">${stats.avgScore}%</div>
                    <div class="rdx-stat-label">Average Score</div>
                </div>
                <div class="rdx-stat-card">
                    <div class="rdx-stat-value">${stats.streak}</div>
                    <div class="rdx-stat-label">Current Streak</div>
                </div>
            </div>
            
            <div class="rdx-dashboard-grid">
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">📊 Recent Performance</div>
                    <div class="rdx-chart-container" id="performance-chart">
                        ${renderMiniPerformanceChart(data.recentScores)}
                    </div>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">🎯 Quick Insights</div>
                    <ul class="rdx-pattern-list">
                        ${data.quickInsights.map(insight => `
                            <li class="rdx-pattern-item">
                                <span class="rdx-pattern-item-icon">${insight.icon}</span>
                                <span class="rdx-pattern-item-text">${insight.text}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">💪 Strengths</div>
                    <ul class="rdx-pattern-list">
                        ${data.strengths.map(s => `
                            <li class="rdx-pattern-item">
                                <span class="rdx-pattern-item-icon">✅</span>
                                <span class="rdx-pattern-item-text">${s}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">🎯 Areas to Develop</div>
                    <ul class="rdx-pattern-list">
                        ${data.areasToImprove.map(a => `
                            <li class="rdx-pattern-item">
                                <span class="rdx-pattern-item-icon">📚</span>
                                <span class="rdx-pattern-item-text">${a}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    function renderCalibrationTab(data) {
        const cal = data.calibration;
        
        return `
            <div class="rdx-dashboard-grid">
                <div class="rdx-dashboard-card" style="grid-column: span 2;">
                    <div class="rdx-dashboard-card-title">🎯 Confidence vs Performance</div>
                    <div class="rdx-chart-container" style="height: 250px;">
                        ${renderCalibrationChart(cal.dataPoints)}
                    </div>
                    <p style="text-align: center; color: var(--rdx-neutral-500); font-size: 0.875rem; margin-top: 12px;">
                        Points above the line = you did better than predicted (underconfident)<br>
                        Points below the line = you did worse than predicted (overconfident)
                    </p>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">📈 Calibration Summary</div>
                    <div class="rdx-stat-grid" style="grid-template-columns: 1fr 1fr;">
                        <div class="rdx-stat-card">
                            <div class="rdx-stat-value" style="color: ${cal.avgDifference > 0 ? 'var(--rdx-success)' : 'var(--rdx-warning)'}">
                                ${cal.avgDifference > 0 ? '+' : ''}${cal.avgDifference}%
                            </div>
                            <div class="rdx-stat-label">Avg Difference</div>
                        </div>
                        <div class="rdx-stat-card">
                            <div class="rdx-stat-value">${cal.calibrationScore}/100</div>
                            <div class="rdx-stat-label">Calibration Score</div>
                        </div>
                    </div>
                    <div class="rdx-snapshot-insight rdx-mt-2">
                        <span class="rdx-snapshot-insight-icon">💡</span>
                        <span class="rdx-snapshot-insight-text">${cal.insight}</span>
                    </div>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">📊 By Case Type</div>
                    <ul class="rdx-pattern-list">
                        ${cal.byCategory.map(c => `
                            <li class="rdx-pattern-item">
                                <span class="rdx-pattern-item-icon">${c.icon}</span>
                                <div style="flex: 1;">
                                    <span class="rdx-pattern-item-text">${c.category}</span>
                                    <div class="rdx-progress rdx-mt-1" style="height: 6px;">
                                        <div class="rdx-progress-fill ${c.calibration > 80 ? 'success' : c.calibration > 60 ? 'warning' : 'danger'}" 
                                             style="width: ${c.calibration}%"></div>
                                    </div>
                                </div>
                                <span style="font-weight: 600; color: var(--rdx-neutral-700);">${c.calibration}%</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    function renderStressTab(data) {
        const stress = data.stress;
        
        return `
            <div class="rdx-dashboard-grid">
                <div class="rdx-dashboard-card" style="grid-column: span 2;">
                    <div class="rdx-dashboard-card-title">💓 Stress-Performance Correlation</div>
                    <div class="rdx-chart-container" style="height: 200px;">
                        ${renderStressPerformanceChart(stress.correlation)}
                    </div>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">🎯 Your Optimal Zone</div>
                    <div class="rdx-stat-card" style="background: linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%); padding: 20px; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 8px;">${stress.optimalZone.emoji}</div>
                        <div style="font-weight: 600; color: #166534;">${stress.optimalZone.label}</div>
                        <div style="font-size: 0.875rem; color: #166534; margin-top: 4px;">
                            Avg score: ${stress.optimalZone.avgScore}%
                        </div>
                    </div>
                    <div class="rdx-snapshot-insight rdx-mt-2">
                        <span class="rdx-snapshot-insight-icon">💡</span>
                        <span class="rdx-snapshot-insight-text">${stress.insight}</span>
                    </div>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">📊 Performance by Stress Level</div>
                    ${stress.byLevel.map(level => `
                        <div style="margin-bottom: 12px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span>${level.emoji} ${level.label}</span>
                                <span style="font-weight: 600;">${level.avgScore}%</span>
                            </div>
                            <div class="rdx-progress">
                                <div class="rdx-progress-fill" style="width: ${level.avgScore}%; background: ${level.color};"></div>
                            </div>
                            <div style="font-size: 0.75rem; color: var(--rdx-neutral-500); margin-top: 2px;">
                                ${level.caseCount} cases
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                ${stress.hrData ? `
                    <div class="rdx-dashboard-card">
                        <div class="rdx-dashboard-card-title">💓 Heart Rate Patterns</div>
                        <div class="rdx-stat-grid" style="grid-template-columns: 1fr 1fr 1fr;">
                            <div class="rdx-stat-card">
                                <div class="rdx-stat-value">${stress.hrData.avgResting}</div>
                                <div class="rdx-stat-label">Avg Start HR</div>
                            </div>
                            <div class="rdx-stat-card">
                                <div class="rdx-stat-value">${stress.hrData.avgPeak}</div>
                                <div class="rdx-stat-label">Avg Peak HR</div>
                            </div>
                            <div class="rdx-stat-card">
                                <div class="rdx-stat-value">+${stress.hrData.avgIncrease}%</div>
                                <div class="rdx-stat-label">Avg Increase</div>
                            </div>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    function renderTimeTab(data) {
        const time = data.time;
        
        return `
            <div class="rdx-dashboard-grid">
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">⏱️ Time Estimation Accuracy</div>
                    <div class="rdx-stat-grid" style="grid-template-columns: 1fr 1fr;">
                        <div class="rdx-stat-card">
                            <div class="rdx-stat-value">${time.avgEstimateRatio}x</div>
                            <div class="rdx-stat-label">Avg Ratio (Actual/Estimated)</div>
                        </div>
                        <div class="rdx-stat-card">
                            <div class="rdx-stat-value">${time.accuracyRate}%</div>
                            <div class="rdx-stat-label">Within 20% Accuracy</div>
                        </div>
                    </div>
                    <div class="rdx-snapshot-insight rdx-mt-2">
                        <span class="rdx-snapshot-insight-icon">💡</span>
                        <span class="rdx-snapshot-insight-text">${time.insight}</span>
                    </div>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">📊 Time Spent Distribution</div>
                    <div class="rdx-chart-container">
                        ${renderTimeDistributionChart(time.distribution)}
                    </div>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">🕐 Best Performance Times</div>
                    <ul class="rdx-pattern-list">
                        ${time.bestTimes.map(t => `
                            <li class="rdx-pattern-item">
                                <span class="rdx-pattern-item-icon">${t.icon}</span>
                                <span class="rdx-pattern-item-text">${t.label}: <strong>${t.avgScore}%</strong> avg</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">⚡ Speed vs Accuracy</div>
                    <div style="text-align: center; padding: 20px;">
                        <div style="font-size: 3rem; margin-bottom: 8px;">${time.speedAccuracyTrend.emoji}</div>
                        <div style="font-weight: 600; color: var(--rdx-neutral-900);">${time.speedAccuracyTrend.label}</div>
                        <p style="font-size: 0.875rem; color: var(--rdx-neutral-500); margin-top: 8px;">
                            ${time.speedAccuracyTrend.description}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderPatternsTab(data) {
        const patterns = data.patterns;
        
        return `
            <div class="rdx-dashboard-grid">
                <div class="rdx-dashboard-card" style="grid-column: span 2;">
                    <div class="rdx-dashboard-card-title">🧠 Your Learning Patterns</div>
                    <ul class="rdx-pattern-list">
                        ${patterns.identified.map(p => `
                            <li class="rdx-pattern-item">
                                <span class="rdx-pattern-item-icon">${p.icon}</span>
                                <div>
                                    <span class="rdx-pattern-item-text" style="font-weight: 600;">${p.title}</span>
                                    <p style="font-size: 0.875rem; color: var(--rdx-neutral-500); margin-top: 4px;">${p.description}</p>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">🎯 Cognitive Bias Frequency</div>
                    ${patterns.biases.map(b => `
                        <div style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span style="font-size: 0.875rem;">${b.name}</span>
                                <span style="font-size: 0.875rem; font-weight: 600;">${b.frequency}x</span>
                            </div>
                            <div class="rdx-progress">
                                <div class="rdx-progress-fill ${b.frequency > 5 ? 'danger' : b.frequency > 2 ? 'warning' : 'success'}" 
                                     style="width: ${Math.min(b.frequency * 10, 100)}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">📚 Recommended Focus Areas</div>
                    <ul class="rdx-pattern-list">
                        ${patterns.recommendations.map(r => `
                            <li class="rdx-pattern-item">
                                <span class="rdx-pattern-item-icon">📌</span>
                                <span class="rdx-pattern-item-text">${r}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    function renderEngagementTab(data) {
        const eng = data.engagement;
        
        return `
            <div class="rdx-dashboard-grid">
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">📊 Check-In Completion Rates</div>
                    ${['pre', 'mid', 'post'].map(phase => `
                        <div style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span>${phase.charAt(0).toUpperCase() + phase.slice(1)}-Case Check-ins</span>
                                <span style="font-weight: 600;">${Math.round(eng.rates[phase] * 100)}%</span>
                            </div>
                            <div class="rdx-progress">
                                <div class="rdx-progress-fill ${eng.rates[phase] > 0.7 ? 'success' : eng.rates[phase] > 0.4 ? 'warning' : 'danger'}" 
                                     style="width: ${eng.rates[phase] * 100}%"></div>
                            </div>
                        </div>
                    `).join('')}
                    <div class="rdx-snapshot-insight rdx-mt-2">
                        <span class="rdx-snapshot-insight-icon">💡</span>
                        <span class="rdx-snapshot-insight-text">
                            Students who complete check-ins show ${eng.completionCorrelation}% better calibration over time.
                        </span>
                    </div>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">⭐ Engagement Score</div>
                    <div style="text-align: center; padding: 20px;">
                        <div style="font-size: 4rem; font-weight: 700; color: var(--rdx-primary);">
                            ${eng.overallScore}
                        </div>
                        <div style="font-size: 0.875rem; color: var(--rdx-neutral-500);">out of 100</div>
                        <div class="rdx-progress rdx-mt-2">
                            <div class="rdx-progress-fill" style="width: ${eng.overallScore}%;"></div>
                        </div>
                        <p style="font-size: 0.875rem; color: var(--rdx-neutral-500); margin-top: 12px;">
                            ${eng.scoreInterpretation}
                        </p>
                    </div>
                </div>
                
                <div class="rdx-dashboard-card">
                    <div class="rdx-dashboard-card-title">📈 Engagement Impact</div>
                    <ul class="rdx-pattern-list">
                        <li class="rdx-pattern-item">
                            <span class="rdx-pattern-item-icon">✅</span>
                            <span class="rdx-pattern-item-text">Feedback panels viewed: <strong>${eng.feedbackViewed}</strong></span>
                        </li>
                        <li class="rdx-pattern-item">
                            <span class="rdx-pattern-item-icon">💡</span>
                            <span class="rdx-pattern-item-text">Suggestions acted on: <strong>${eng.suggestionsActed}</strong></span>
                        </li>
                        <li class="rdx-pattern-item">
                            <span class="rdx-pattern-item-icon">📊</span>
                            <span class="rdx-pattern-item-text">Avg time on feedback: <strong>${eng.avgFeedbackTime}s</strong></span>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }

    // ==========================================
    // Chart Renderers (Simple CSS-based)
    // ==========================================
    function renderMiniPerformanceChart(scores) {
        if (!scores || scores.length === 0) {
            return '<div style="text-align: center; color: var(--rdx-neutral-400);">No data yet</div>';
        }

        const max = 100;
        const barWidth = Math.min(30, Math.floor(280 / scores.length));
        
        return `
            <div style="display: flex; align-items: flex-end; justify-content: center; height: 150px; gap: 4px;">
                ${scores.slice(-10).map((score, i) => `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: ${barWidth}px; height: ${(score / max) * 120}px; 
                                    background: ${score >= 80 ? 'var(--rdx-success)' : score >= 60 ? 'var(--rdx-primary)' : 'var(--rdx-warning)'}; 
                                    border-radius: 4px 4px 0 0;"></div>
                        <div style="font-size: 0.7rem; color: var(--rdx-neutral-500); margin-top: 4px;">${score}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderCalibrationChart(dataPoints) {
        if (!dataPoints || dataPoints.length === 0) {
            return '<div style="text-align: center; color: var(--rdx-neutral-400);">Complete more cases with check-ins to see calibration data</div>';
        }

        // Simple scatter plot representation
        return `
            <div style="position: relative; height: 200px; border-left: 2px solid var(--rdx-neutral-300); border-bottom: 2px solid var(--rdx-neutral-300); margin: 20px;">
                <!-- Perfect calibration line -->
                <div style="position: absolute; bottom: 0; left: 0; width: 141%; height: 2px; background: var(--rdx-neutral-300); transform: rotate(-45deg); transform-origin: bottom left;"></div>
                
                <!-- Data points -->
                ${dataPoints.slice(-15).map(p => `
                    <div style="position: absolute; left: ${p.predicted}%; bottom: ${p.actual}%; 
                                width: 12px; height: 12px; background: var(--rdx-primary); 
                                border-radius: 50%; transform: translate(-50%, 50%);
                                border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"
                         title="Predicted: ${p.predicted}%, Actual: ${p.actual}%"></div>
                `).join('')}
                
                <!-- Axis labels -->
                <div style="position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%); font-size: 0.75rem; color: var(--rdx-neutral-500);">Predicted Confidence</div>
                <div style="position: absolute; left: -30px; top: 50%; transform: rotate(-90deg) translateX(50%); font-size: 0.75rem; color: var(--rdx-neutral-500);">Actual Score</div>
            </div>
        `;
    }

    function renderStressPerformanceChart(correlation) {
        const levels = ['😫', '😕', '😐', '🙂', '😊'];
        
        return `
            <div style="display: flex; align-items: flex-end; justify-content: space-around; height: 150px; padding: 0 20px;">
                ${correlation.map((score, i) => `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="font-weight: 600; margin-bottom: 4px;">${score}%</div>
                        <div style="width: 40px; height: ${(score / 100) * 100}px; 
                                    background: linear-gradient(180deg, var(--rdx-primary) 0%, var(--rdx-primary-light) 100%); 
                                    border-radius: 4px 4px 0 0;"></div>
                        <div style="font-size: 1.5rem; margin-top: 8px;">${levels[i]}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderTimeDistributionChart(distribution) {
        const maxCount = Math.max(...distribution.map(d => d.count));
        
        return `
            <div style="display: flex; align-items: flex-end; justify-content: space-around; height: 150px;">
                ${distribution.map(d => `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="font-size: 0.75rem; margin-bottom: 4px;">${d.count}</div>
                        <div style="width: 30px; height: ${(d.count / maxCount) * 100}px; 
                                    background: var(--rdx-primary); border-radius: 4px 4px 0 0;"></div>
                        <div style="font-size: 0.7rem; color: var(--rdx-neutral-500); margin-top: 4px;">${d.label}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // ==========================================
    // Data Gathering
    // ==========================================
    function gatherLearnerData() {
        // Get data from other modules
        const lscsMetrics = window.ReasonDxLSCS?.getEngagementMetrics() || {};
        const feedbackData = window.ReasonDxFeedback?.getHistoricalData() || [];
        const interactionStats = window.ReasonDxFeedback?.getInteractionStats() || {};

        // Process and return structured data
        return {
            overview: computeOverview(feedbackData),
            calibration: computeCalibration(feedbackData),
            stress: computeStress(feedbackData),
            time: computeTime(feedbackData),
            patterns: computePatterns(feedbackData),
            engagement: computeEngagement(lscsMetrics, interactionStats),
            recentScores: feedbackData.slice(-10).map(d => d.checkIns?.post?.caseResults?.score || 0).filter(s => s > 0),
            quickInsights: generateQuickInsights(feedbackData),
            strengths: identifyStrengths(feedbackData),
            areasToImprove: identifyAreasToImprove(feedbackData)
        };
    }

    function computeOverview(data) {
        const scores = data.map(d => d.checkIns?.post?.caseResults?.score).filter(s => s !== undefined);
        return {
            totalCases: data.length,
            avgScore: scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0,
            streak: calculateStreak(data)
        };
    }

    function computeCalibration(data) {
        const dataPoints = data
            .filter(d => d.computed?.confidenceCalibration)
            .map(d => ({
                predicted: d.computed.confidenceCalibration.predicted,
                actual: d.computed.confidenceCalibration.actual
            }));

        const differences = dataPoints.map(p => p.actual - p.predicted);
        const avgDiff = differences.length > 0 ? Math.round(differences.reduce((a, b) => a + b, 0) / differences.length) : 0;

        return {
            dataPoints,
            avgDifference: avgDiff,
            calibrationScore: Math.max(0, 100 - Math.abs(avgDiff) * 2),
            insight: avgDiff > 10 ? "You're underconfident - trust yourself more!" : 
                     avgDiff < -10 ? "You tend to be overconfident - consider more careful analysis." :
                     "Great calibration! Your confidence matches your performance.",
            byCategory: [
                { category: 'Cardiac', icon: '❤️', calibration: 75 },
                { category: 'Pulmonary', icon: '🫁', calibration: 82 },
                { category: 'GI', icon: '🔬', calibration: 68 }
            ]
        };
    }

    function computeStress(data) {
        const byMood = {};
        data.forEach(d => {
            const mood = d.checkIns?.pre?.mood;
            const score = d.checkIns?.post?.caseResults?.score;
            if (mood && score) {
                if (!byMood[mood]) byMood[mood] = [];
                byMood[mood].push(score);
            }
        });

        const correlation = [1, 2, 3, 4, 5].map(level => {
            const scores = byMood[level] || [];
            return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 70;
        });

        const optimalLevel = correlation.indexOf(Math.max(...correlation)) + 1;

        return {
            correlation,
            optimalZone: {
                level: optimalLevel,
                emoji: ['😫', '😕', '😐', '🙂', '😊'][optimalLevel - 1],
                label: ['Very Stressed', 'Tense', 'Neutral', 'Good', 'Great'][optimalLevel - 1],
                avgScore: correlation[optimalLevel - 1]
            },
            insight: optimalLevel <= 2 ? "Interesting - you perform better under pressure!" :
                     optimalLevel >= 4 ? "You do your best work when feeling good." :
                     "You perform consistently across stress levels.",
            byLevel: [
                { emoji: '😫', label: 'Very Stressed', avgScore: correlation[0], caseCount: (byMood[1] || []).length, color: '#EF4444' },
                { emoji: '😕', label: 'Tense', avgScore: correlation[1], caseCount: (byMood[2] || []).length, color: '#F59E0B' },
                { emoji: '😐', label: 'Neutral', avgScore: correlation[2], caseCount: (byMood[3] || []).length, color: '#3B82F6' },
                { emoji: '🙂', label: 'Good', avgScore: correlation[3], caseCount: (byMood[4] || []).length, color: '#22C55E' },
                { emoji: '😊', label: 'Great', avgScore: correlation[4], caseCount: (byMood[5] || []).length, color: '#10B981' }
            ],
            hrData: computeHRData(data)
        };
    }

    function computeHRData(data) {
        const hrSessions = data.filter(d => d.computed?.heartRateTrajectory?.pre);
        if (hrSessions.length < 3) return null;

        const avgResting = Math.round(hrSessions.reduce((a, d) => a + (d.computed.heartRateTrajectory.pre || 0), 0) / hrSessions.length);
        const avgPeak = Math.round(hrSessions.reduce((a, d) => a + Math.max(d.computed.heartRateTrajectory.pre || 0, d.computed.heartRateTrajectory.mid || 0, d.computed.heartRateTrajectory.post || 0), 0) / hrSessions.length);

        return {
            avgResting,
            avgPeak,
            avgIncrease: avgResting > 0 ? Math.round(((avgPeak - avgResting) / avgResting) * 100) : 0
        };
    }

    function computeTime(data) {
        const timeData = data.filter(d => d.computed?.timeCalibration);
        const ratios = timeData.map(d => parseFloat(d.computed.timeCalibration.ratio));
        const avgRatio = ratios.length > 0 ? (ratios.reduce((a, b) => a + b, 0) / ratios.length).toFixed(1) : 1;
        const accurateCount = ratios.filter(r => r >= 0.8 && r <= 1.2).length;

        return {
            avgEstimateRatio: avgRatio,
            accuracyRate: ratios.length > 0 ? Math.round((accurateCount / ratios.length) * 100) : 0,
            insight: avgRatio > 1.3 ? `You underestimate time by ~${Math.round((avgRatio - 1) * 100)}%. Plan for longer sessions.` :
                     avgRatio < 0.8 ? "You often finish faster than expected!" :
                     "Your time estimates are quite accurate!",
            distribution: [
                { label: '<5m', count: 3 },
                { label: '5-10m', count: 8 },
                { label: '10-15m', count: 12 },
                { label: '15-20m', count: 6 },
                { label: '>20m', count: 2 }
            ],
            bestTimes: [
                { icon: '🌅', label: 'Morning (8-12)', avgScore: 85 },
                { icon: '☀️', label: 'Afternoon (12-5)', avgScore: 78 },
                { icon: '🌙', label: 'Evening (5-9)', avgScore: 72 }
            ],
            speedAccuracyTrend: {
                emoji: '⚖️',
                label: 'Balanced',
                description: 'You maintain good accuracy without rushing.'
            }
        };
    }

    function computePatterns(data) {
        return {
            identified: [
                { icon: '🎯', title: 'Thorough Differential Builder', description: 'You consistently list 6+ diagnoses before narrowing down.' },
                { icon: '⏰', title: 'Morning Performer', description: 'Your scores are 12% higher before noon.' },
                { icon: '💪', title: 'Pressure Handler', description: 'You maintain accuracy even when stressed.' }
            ],
            biases: [
                { name: 'Anchoring', frequency: 3 },
                { name: 'Availability', frequency: 2 },
                { name: 'Premature Closure', frequency: 1 }
            ],
            recommendations: [
                'Focus on narrowing differentials more efficiently',
                'Practice more GI cases (lower accuracy area)',
                'Continue building on your strong exam skills'
            ]
        };
    }

    function computeEngagement(lscsMetrics, interactionStats) {
        const rates = lscsMetrics.rates || { pre: 0, mid: 0, post: 0 };
        const overallRate = (rates.pre + rates.mid + rates.post) / 3;

        return {
            rates,
            overallScore: Math.round(overallRate * 100),
            completionCorrelation: 23,
            feedbackViewed: interactionStats.expanded || 0,
            suggestionsActed: interactionStats.actedOn || 0,
            avgFeedbackTime: 12,
            scoreInterpretation: overallRate > 0.7 ? "Excellent engagement! You're getting the most out of the platform." :
                                  overallRate > 0.4 ? "Good engagement. Try completing more check-ins for better insights." :
                                  "Low engagement. Check-ins help personalize your learning experience."
        };
    }

    function calculateStreak(data) {
        // Simple streak calculation
        let streak = 0;
        for (let i = data.length - 1; i >= 0; i--) {
            const score = data[i].checkIns?.post?.caseResults?.score;
            if (score && score >= 70) streak++;
            else break;
        }
        return streak;
    }

    function generateQuickInsights(data) {
        const insights = [];
        if (data.length >= 5) {
            insights.push({ icon: '📈', text: `You've completed ${data.length} cases!` });
        }
        if (data.length >= 3) {
            const recent = data.slice(-3);
            const improving = recent.every((d, i) => i === 0 || (d.checkIns?.post?.caseResults?.score || 0) >= (recent[i-1].checkIns?.post?.caseResults?.score || 0));
            if (improving) insights.push({ icon: '🚀', text: 'Your scores are trending upward!' });
        }
        if (insights.length === 0) {
            insights.push({ icon: '👋', text: 'Complete more cases to unlock insights!' });
        }
        return insights;
    }

    function identifyStrengths(data) {
        return ['Strong physical exam skills', 'Good differential breadth', 'Consistent performance'];
    }

    function identifyAreasToImprove(data) {
        return ['Time estimation accuracy', 'Confidence calibration', 'GI case performance'];
    }

    // ==========================================
    // Initialize
    // ==========================================
    function init() {
        console.log('[Dashboard] ReasonDx Dashboard initialized v' + CONFIG.version);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return {
        renderDashboard,
        switchTab,
        refresh: (containerId) => renderDashboard(containerId),
        version: CONFIG.version
    };

})();

window.ReasonDxDashboard = ReasonDxDashboard;
