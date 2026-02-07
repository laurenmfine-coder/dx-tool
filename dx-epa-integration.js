/**
 * DxSuite EPA Integration Layer
 * ===============================
 * Adds EPA competency visibility to:
 *   - Learning Dashboard (EPA progress summary card)
 *   - Fingerprint Dashboard (competency radar)
 *   - Recommendations engine (EPA gap-driven suggestions)
 *
 * Depends on: dx-progress.js, EPASystem/dx-epa-bridge.js (optional)
 */
(function() {
    'use strict';

    // EPA definitions (lightweight, no external dependency needed)
    const CORE_EPAS = {
        EPA1: { name: 'History & Physical', icon: '🩺', modules: ['ReasonDx', 'CoachDx'] },
        EPA2: { name: 'Differential Diagnosis', icon: '🔍', modules: ['ReasonDx', 'CoachDx', 'MechanismDx'] },
        EPA3: { name: 'Diagnostic Tests', icon: '🧪', modules: ['ReasonDx', 'MechanismDx'] },
        EPA4: { name: 'Orders & Prescriptions', icon: '💊', modules: ['ReasonDx'] },
        EPA5: { name: 'Documentation', icon: '📝', modules: ['CoachDx'] },
        EPA6: { name: 'Oral Presentation', icon: '🎤', modules: ['CoachDx'] },
        EPA7: { name: 'Clinical Questions & Evidence', icon: '📖', modules: ['MechanismDx', 'ReasonDx'] },
        EPA8: { name: 'Patient Handoffs', icon: '🤝', modules: ['TeamDx', 'CoachDx'] },
        EPA9: { name: 'Interprofessional Collaboration', icon: '👥', modules: ['TeamDx', 'CoachDx'] },
        EPA10: { name: 'Urgent/Emergent Care', icon: '🚨', modules: ['ReasonDx', 'MechanismDx'] },
        EPA11: { name: 'Informed Consent', icon: '📋', modules: ['ConsentDx'] },
        EPA12: { name: 'General Procedures', icon: '🔧', modules: ['ProcedureDx'] },
        EPA13: { name: 'Patient Safety', icon: '🛡️', modules: ['SystemsDx'] }
    };

    // EPA ↔ content type mapping
    const EPA_CONTENT_MAP = {
        EPA1: ['adventure', 'coachdx'],
        EPA2: ['adventure', 'coachdx', 'mechanism'],
        EPA3: ['mechanism', 'deepDive'],
        EPA4: ['mechanism'],
        EPA5: ['sbar', 'coachdx'],
        EPA6: ['sbar', 'coachdx'],
        EPA7: ['mechanism', 'deepDive'],
        EPA8: ['sbar', 'coachdx'],
        EPA9: ['coachdx', 'tool'],
        EPA10: ['adventure', 'mechanism'],
        EPA11: ['coachdx'],
        EPA12: ['tool'],
        EPA13: ['tool', 'coachdx']
    };

    // Derive EPA scores from DxProgress data
    function computeEPAScores() {
        if (!window.DxProgress) return {};

        let progress;
        try {
            progress = DxProgress.getProgressData ? DxProgress.getProgressData() : null;
        } catch (e) {
            return {};
        }
        if (!progress || !progress.topics) return {};

        const scores = {};
        Object.entries(CORE_EPAS).forEach(([epaId, epa]) => {
            const contentTypes = EPA_CONTENT_MAP[epaId] || [];
            let totalScore = 0, count = 0;

            Object.values(progress.topics).forEach(topicData => {
                contentTypes.forEach(type => {
                    if (topicData[type] && topicData[type].completed) {
                        totalScore += topicData[type].lastScore || topicData[type].bestScore || 70;
                        count++;
                    }
                });
            });

            const avg = count > 0 ? Math.round(totalScore / count) : 0;
            scores[epaId] = {
                ...epa,
                avgScore: avg,
                activities: count,
                level: count === 0 ? '—' : avg >= 90 ? '3b' : avg >= 80 ? '3a' : avg >= 70 ? '2b' : avg >= 50 ? '2a' : '1b'
            };
        });

        return scores;
    }

    // Inject EPA card into Learning Dashboard
    function injectDashboardCard() {
        const page = window.location.pathname;
        if (!page.includes('learning-dashboard')) return;

        const scores = computeEPAScores();
        const hasData = Object.values(scores).some(s => s.activities > 0);

        // Find insertion point (after spaced rep section or at bottom of content)
        const target = document.querySelector('.content, .container, main, [style*="max-width"]');
        if (!target) return;

        const card = document.createElement('div');
        card.style.cssText = 'background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-top: 20px;';

        let html = `
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
                <h2 style="font-size: 18px; margin: 0; display: flex; align-items: center; gap: 8px;">
                    🎓 EPA Competency Progress
                </h2>
                <a href="../EPASystem/epa-dashboard.html" style="font-size: 0.8rem; color: #3b82f6; text-decoration: none; font-weight: 600;">
                    Full EPA Dashboard →
                </a>
            </div>
        `;

        if (!hasData) {
            html += '<p style="color: #94a3b8; text-align: center; padding: 20px 0;">Complete cases and modules to build your EPA competency profile.</p>';
        } else {
            html += '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">';
            Object.entries(scores).forEach(([id, data]) => {
                const levelColors = { '—': '#94a3b8', '1b': '#ef4444', '2a': '#f97316', '2b': '#eab308', '3a': '#22c55e', '3b': '#06b6d4' };
                const color = levelColors[data.level] || '#94a3b8';
                html += `
                    <div style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; border: 1px solid #e2e8f0; border-left: 3px solid ${color};">
                        <span style="font-size: 1.2rem;">${data.icon}</span>
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-size: 0.78rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${id}</div>
                            <div style="font-size: 0.68rem; color: #64748b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${data.name}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 0.88rem; font-weight: 700; color: ${color};">${data.level}</div>
                            <div style="font-size: 0.6rem; color: #94a3b8;">${data.activities} act</div>
                        </div>
                    </div>`;
            });
            html += '</div>';

            // EPA gap alerts
            const gaps = Object.entries(scores)
                .filter(([_, d]) => d.activities < 5 && d.level !== '—')
                .sort((a, b) => a[1].activities - b[1].activities)
                .slice(0, 3);

            if (gaps.length > 0) {
                html += `<div style="margin-top: 14px; padding: 12px; background: #fef3c7; border-radius: 8px; border: 1px solid #fcd34d;">
                    <div style="font-size: 0.78rem; font-weight: 600; color: #92400e; margin-bottom: 6px;">⚠️ EPA Areas Needing Attention</div>`;
                gaps.forEach(([id, data]) => {
                    html += `<div style="font-size: 0.75rem; color: #78350f; margin-bottom: 3px;">${data.icon} ${id}: ${data.name} — only ${data.activities} activities</div>`;
                });
                html += '</div>';
            }
        }

        card.innerHTML = html;
        target.appendChild(card);
    }

    // Inject EPA mini-radar into Fingerprint Dashboard
    function injectFingerprintEPA() {
        const page = window.location.pathname;
        if (!page.includes('fingerprint-dashboard')) return;

        const scores = computeEPAScores();
        const hasData = Object.values(scores).some(s => s.activities > 0);
        if (!hasData) return;

        const target = document.querySelector('.content, .container, main, [style*="max-width"]');
        if (!target) return;

        const card = document.createElement('div');
        card.style.cssText = 'background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-top: 20px;';

        let html = `<h3 style="font-size: 16px; margin: 0 0 16px 0;">🎓 EPA Competency Fingerprint</h3>`;
        html += '<div style="display: flex; flex-wrap: wrap; gap: 6px;">';

        Object.entries(scores).forEach(([id, data]) => {
            const levelColors = { '—': '#e2e8f0', '1b': '#fecaca', '2a': '#fed7aa', '2b': '#fef08a', '3a': '#bbf7d0', '3b': '#a5f3fc' };
            const bg = levelColors[data.level] || '#e2e8f0';
            html += `<div style="padding: 6px 10px; background: ${bg}; border-radius: 6px; font-size: 0.72rem; font-weight: 600; text-align: center; min-width: 60px;">
                <div>${data.icon}</div>
                <div>${id}</div>
                <div style="font-size: 0.65rem; font-weight: 400; color: #64748b;">${data.level}</div>
            </div>`;
        });
        html += '</div>';

        html += `<div style="margin-top: 12px; text-align: right;">
            <a href="../EPASystem/epa-dashboard.html" style="font-size: 0.78rem; color: #3b82f6; text-decoration: none;">View Full EPA Dashboard →</a>
        </div>`;

        card.innerHTML = html;
        target.appendChild(card);
    }

    // Get EPA-driven recommendations
    function getEPARecommendations() {
        const scores = computeEPAScores();
        const recs = [];

        Object.entries(scores).forEach(([epaId, data]) => {
            // Recommend EPAs with lowest activity counts
            if (data.activities < 3) {
                recs.push({
                    epaId: epaId,
                    name: data.name,
                    icon: data.icon,
                    reason: `${epaId} needs more practice (${data.activities} activities)`,
                    priority: 10 - data.activities,
                    modules: data.modules
                });
            }
        });

        return recs.sort((a, b) => b.priority - a.priority);
    }

    // Public API
    window.DxEPAIntegration = {
        getScores: computeEPAScores,
        getRecommendations: getEPARecommendations,
        CORE_EPAS: CORE_EPAS
    };

    // Auto-inject based on current page
    function init() {
        if (!window.DxProgress) return;
        injectDashboardCard();
        injectFingerprintEPA();
    }

    if (document.readyState === 'complete') {
        setTimeout(init, 200);
    } else {
        window.addEventListener('load', () => setTimeout(init, 200));
    }

})();
