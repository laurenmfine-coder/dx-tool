/**
 * EPA ↔ DxProgress Bridge
 * =========================
 * Connects EPA competency tracking to unified DxProgress.
 *
 * Maps EPA competencies to DxProgress topics using:
 *   1. Category field from topic-map.json (loaded dynamically)
 *   2. Direct topic slug matching (fallback)
 *   3. Module completion types (mechanism, adventure, crt, quiz)
 *
 * Provides entrustment level estimation based on actual performance data.
 */
(function() {
    'use strict';

    // EPA → Category/module mappings
    const EPA_TOPIC_MAP = {
        'EPA-1':  { name: 'History & Physical',
                    categories: ['cardiology', 'pulmonology', 'gi', 'neurology', 'nephrology', 'endocrine', 'heme-onc', 'rheumatology'],
                    directTopics: ['chest-pain', 'abdominal-pain', 'dyspnea', 'headache', 'syncope', 'altered-mental-status'],
                    contentTypes: ['adventure', 'crt'] },
        'EPA-2':  { name: 'Prioritize Differential',
                    categories: ['emergency', 'critical-care', 'internal-medicine', 'cardiology', 'pulmonology'],
                    directTopics: ['acs', 'pe', 'stroke', 'sepsis', 'dka', 'gi-bleed', 'meningitis', 'anaphylaxis'],
                    contentTypes: ['adventure', 'crt', 'mechanism'] },
        'EPA-3':  { name: 'Recommend & Interpret Dx Tests',
                    categories: ['nephrology', 'heme-onc', 'endocrine', 'pulmonology'],
                    directTopics: ['aki', 'hyperkalemia', 'hyponatremia', 'dic', 'dka', 'thyroid-storm'],
                    contentTypes: ['mechanism', 'quiz'] },
        'EPA-4':  { name: 'Enter Orders & Prescriptions',
                    categories: ['pharmacology'],
                    directTopics: ['beta-lactams', 'fluoroquinolones', 'antivirals', 'antifungals'],
                    contentTypes: ['mechanism', 'quiz'] },
        'EPA-5':  { name: 'Document Clinical Encounter',
                    categories: [],
                    directTopics: ['sbar', 'documentation'],
                    contentTypes: ['crt', 'quiz'] },
        'EPA-6':  { name: 'Oral Presentation',
                    categories: [],
                    directTopics: ['sbar', 'oral-presentation'],
                    contentTypes: ['crt'] },
        'EPA-7':  { name: 'Clinical Questions & Evidence',
                    categories: [],
                    directTopics: ['evidence-based-medicine', 'clinical-reasoning'],
                    contentTypes: ['deepDive', 'mechanism'] },
        'EPA-8':  { name: 'Patient Handoffs',
                    categories: [],
                    directTopics: ['sbar', 'interprofessional-collaboration', 'patient-safety'],
                    contentTypes: ['crt'] },
        'EPA-9':  { name: 'Interprofessional Collaboration',
                    categories: [],
                    directTopics: ['interprofessional-collaboration', 'teamdx'],
                    contentTypes: ['crt'] },
        'EPA-10': { name: 'Urgent/Emergent Care',
                    categories: ['emergency', 'critical-care'],
                    directTopics: ['anaphylaxis', 'sepsis', 'stemi', 'stroke', 'status-epilepticus', 'ards', 'shock', 'pneumothorax'],
                    contentTypes: ['adventure', 'crt', 'mechanism'] },
        'EPA-11': { name: 'Informed Consent',
                    categories: [],
                    directTopics: ['informed-consent', 'consentdx'],
                    contentTypes: ['crt'] },
        'EPA-12': { name: 'General Procedures',
                    categories: [],
                    directTopics: ['clinical-procedures', 'proceduredx'],
                    contentTypes: ['crt'] },
        'EPA-13': { name: 'Patient Safety',
                    categories: [],
                    directTopics: ['patient-safety', 'systemsdx'],
                    contentTypes: ['crt'] }
    };

    let topicMapCache = null;

    // Load topic map for category data
    async function loadTopicMap() {
        if (topicMapCache) return topicMapCache;
        try {
            const resp = await fetch('../data/topic-map.json');
            if (resp.ok) topicMapCache = await resp.json();
        } catch (e) { /* silent */ }
        return topicMapCache;
    }

    // Match a topic to an EPA using precise rules
    function topicMatchesEPA(topicId, topicData, epa) {
        // Direct slug match
        if (epa.directTopics.some(dt => topicId === dt || topicId.startsWith(dt + '-'))) return true;
        // Category match (from topic-map.json data if available)
        if (topicData && topicData.category && epa.categories.includes(topicData.category)) return true;
        // Fallback: check if topicId contains a category keyword (looser)
        if (epa.categories.some(cat => topicId.includes(cat))) return true;
        return false;
    }

    // Calculate EPA scores from progress data
    async function getEPAScoresFromProgress() {
        if (!window.DxProgress) return {};

        const progress = DxProgress.getAllProgress ? DxProgress.getAllProgress() : null;
        if (!progress || !progress.topics) return {};

        // Try to load topic map for category info
        const topicMap = await loadTopicMap();
        const topicMapEntries = (topicMap && topicMap.topics) ? topicMap.topics : {};

        const epaScores = {};

        Object.entries(EPA_TOPIC_MAP).forEach(([epaId, epa]) => {
            let totalScore = 0;
            let totalItems = 0;
            let completed = 0;
            const matchedTopics = [];

            Object.entries(progress.topics).forEach(([topicId, topicProgress]) => {
                const mapEntry = topicMapEntries[topicId] || null;

                if (!topicMatchesEPA(topicId, mapEntry, epa)) return;

                // Check relevant content types
                const typesToCheck = epa.contentTypes.length > 0 ? epa.contentTypes : ['mechanism', 'adventure', 'deepDive', 'crt', 'quiz'];

                typesToCheck.forEach(type => {
                    const data = topicProgress[type];
                    if (!data) return;

                    if (type === 'quiz' && Array.isArray(data)) {
                        // Quiz: count correct/total
                        if (data.length > 0) {
                            const correct = data.filter(q => q.correct).length;
                            const pct = Math.round((correct / data.length) * 100);
                            totalScore += pct;
                            totalItems++;
                            if (pct >= 60) completed++;
                        }
                    } else if (data.completed) {
                        totalScore += data.score || 70;
                        totalItems++;
                        completed++;
                    }
                });

                matchedTopics.push(topicId);
            });

            const avgScore = totalItems > 0 ? Math.round(totalScore / totalItems) : 0;

            epaScores[epaId] = {
                ...epa,
                avgScore,
                completedActivities: completed,
                matchedTopics,
                entrustmentLevel: calculateEntrustment(completed, avgScore)
            };
        });

        return epaScores;
    }

    // Map score + activity count to entrustment level
    function calculateEntrustment(completed, avgScore) {
        if (completed === 0) return '1b';
        if (completed <= 2 || avgScore < 50) return '2a';
        if (completed <= 5 || avgScore < 70) return '2b';
        if (completed <= 10 || avgScore < 85) return '3a';
        return '3b';
    }

    const LEVEL_META = {
        '1b': { label: 'Observation', color: '#c0392b' },
        '2a': { label: 'Co-Activity', color: '#d35400' },
        '2b': { label: 'Direct Supervision', color: '#f39c12' },
        '3a': { label: 'Indirect - Full Review', color: '#27ae60' },
        '3b': { label: 'Entrustable', color: '#16a085' }
    };

    // Public API
    window.DxEPABridge = {
        getEPAScores: getEPAScoresFromProgress,
        EPA_TOPIC_MAP,
        LEVEL_META,

        // Render EPA summary into any container
        async renderEPASummary(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const scores = await getEPAScoresFromProgress();
            if (Object.keys(scores).length === 0) {
                container.innerHTML = '<p style="color: #94a3b8; text-align: center;">Complete cases to build your EPA profile</p>';
                return;
            }

            let html = '<div style="display: grid; gap: 8px;">';
            Object.entries(scores).forEach(([epaId, data]) => {
                const level = LEVEL_META[data.entrustmentLevel] || LEVEL_META['1b'];

                html += `
                    <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px;
                                background: rgba(255,255,255,0.03); border-radius: 8px; border-left: 3px solid ${level.color};">
                        <div style="min-width: 55px; font-weight: 700; color: ${level.color}; font-size: 0.8rem;">${epaId}</div>
                        <div style="flex: 1;">
                            <div style="font-size: 0.85rem; font-weight: 500;">${data.name}</div>
                            <div style="font-size: 0.7rem; color: #64748b;">
                                ${data.completedActivities} activities · ${data.entrustmentLevel}: ${level.label}
                            </div>
                        </div>
                        <div style="font-weight: 700; color: ${level.color}; font-size: 1.1rem;">${data.avgScore || '—'}%</div>
                    </div>`;
            });
            html += '</div>';
            container.innerHTML = html;
        }
    };

    console.log('EPA Bridge: Initialized (precise matching)');
})();
