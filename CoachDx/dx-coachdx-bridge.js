/**
 * CoachDx ↔ DxProgress Bridge
 * =============================
 * Bridges CoachDx's legacy DxProgressTracker to the unified DxProgress system.
 * Also adds CoachDx → Adventure routing when students struggle with a topic.
 *
 * How it works:
 *   1. Monkey-patches DxProgressTracker.recordCaseComplete() to also write to DxProgress
 *   2. Monkey-patches DxProgressTracker.recordSBARAttempt() to record in DxProgress
 *   3. Monkey-patches DxProgressTracker.recordModuleProgress() for mechanism tracking
 *   4. On page load, syncs any existing CoachDx data → DxProgress (one-time migration)
 *   5. Adds "Continue Learning" links when cases complete (adventure routing)
 *
 * Drop this script AFTER dx-progress-tracker.js and dx-progress.js
 */
(function() {
    'use strict';

    // Wait for both systems to be available
    function whenReady(cb) {
        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            if (window.DxProgress) {
                clearInterval(check);
                cb();
            }
            if (attempts > 100) clearInterval(check);
        }, 100);
    }

    // Map CoachDx case categories to DxProgress topic IDs
    const CATEGORY_TOPIC_MAP = {
        'cardiology': 'acs',
        'pulmonology': 'pneumonia',
        'critical-care': 'sepsis',
        'emergency': 'shock',
        'neurology': 'stroke',
        'gi': 'gi-bleed',
        'nephrology': 'aki',
        'endocrine': 'dka',
        'heme-onc': 'acute-leukemia',
        'infectious-disease': 'tuberculosis',
        'rheumatology': 'sle',
        'psychiatry': 'psychosis',
        'obgyn': 'preeclampsia',
        'pediatrics': 'kawasaki',
        'allergy': 'anaphylaxis',
        'toxicology': 'toxicology',
        'palliative': 'palliative',
        'geriatrics': 'geriatrics',
        'ems': 'trauma',
        'nursing': 'sepsis',
        'dental': 'dental',
        'podiatry': 'dfi',
        'omfs': 'omfs',
        'pharmacy': 'pharmacology',
        'respiratory-therapy': 'ards',
        'physical-therapy': 'msk'
    };

    // Map categories to best adventure files
    const CATEGORY_ADVENTURE_MAP = {
        'cardiology': 'acs-expanded-adventure.html',
        'pulmonology': 'pneumonia-expanded.html',
        'critical-care': 'sepsis-expanded-adventure.html',
        'emergency': 'shock-expanded.html',
        'neurology': 'stroke-expanded-adventure.html',
        'gi': 'gi-bleed-expanded-adventure.html',
        'nephrology': 'aki-expanded-adventure.html',
        'endocrine': 'dka-expanded-adventure.html',
        'heme-onc': 'acute-leukemia-expanded-adventure.html',
        'infectious-disease': 'tuberculosis-expanded-adventure.html',
        'psychiatry': 'psychosis-expanded.html',
        'obgyn': 'preeclampsia-expanded.html',
        'pediatrics': 'kawasaki-expanded.html',
        'allergy': 'anaphylaxis-expanded-adventure.html',
        'toxicology': 'toxicology-expanded-adventure.html',
        'ems': 'trauma-expanded-adventure.html',
        'respiratory-therapy': 'ards-adventure.html'
    };

    function deriveTopic(caseId, category) {
        // Try category map first
        const cat = (category || '').toLowerCase().replace(/[^a-z-]/g, '');
        if (CATEGORY_TOPIC_MAP[cat]) return CATEGORY_TOPIC_MAP[cat];
        
        // Derive from caseId
        return caseId
            .replace(/^coach-/, '')
            .replace(/-case-\d+$/, '')
            .replace(/-\d+$/, '')
            .toLowerCase();
    }

    // One-time migration of existing CoachDx data → DxProgress
    function migrateExistingData() {
        const migrationKey = 'dx-coachdx-migration-v1';
        if (localStorage.getItem(migrationKey)) return;

        try {
            const raw = localStorage.getItem('dxEcosystemProgress');
            if (!raw) { localStorage.setItem(migrationKey, 'no-data'); return; }

            const data = JSON.parse(raw);
            let migrated = 0;

            // Migrate completed cases
            if (data.cases) {
                Object.entries(data.cases).forEach(([caseId, caseData]) => {
                    if (caseData.completed) {
                        const topicId = deriveTopic(caseId, caseData.category);
                        const score = caseData.bestScore || 0;
                        DxProgress.recordCompletion(topicId, 'coachDx', score, {
                            source: 'coachdx-migration',
                            originalCaseId: caseId,
                            category: caseData.category,
                            completedAt: caseData.lastCompleted
                        });
                        migrated++;
                    }
                });
            }

            // Migrate SBAR attempts
            if (data.sbar) {
                Object.entries(data.sbar).forEach(([scenarioType, sbarData]) => {
                    if (sbarData.attempts && sbarData.attempts.length > 0) {
                        const topicId = deriveTopic(scenarioType, 'sbar');
                        const bestScore = sbarData.bestScore || Math.max(...sbarData.attempts.map(a => a.score || 0));
                        DxProgress.recordCompletion(topicId, 'sbar', bestScore, {
                            source: 'coachdx-migration',
                            attempts: sbarData.attempts.length
                        });
                        migrated++;
                    }
                });
            }

            // Migrate module completions
            if (data.modules) {
                Object.entries(data.modules).forEach(([modId, modData]) => {
                    if (modData.completed) {
                        DxProgress.recordCompletion(modId, 'mechanism', 100, {
                            source: 'coachdx-migration'
                        });
                        migrated++;
                    }
                });
            }

            localStorage.setItem(migrationKey, `migrated-${migrated}-items`);
            console.log(`CoachDx Bridge: Migrated ${migrated} items to DxProgress`);
        } catch (e) {
            console.warn('CoachDx Bridge: Migration error', e);
            localStorage.setItem(migrationKey, 'error');
        }
    }

    // Patch CoachDx functions to also write to DxProgress
    function installPatches() {
        if (typeof DxProgressTracker === 'undefined') {
            console.log('CoachDx Bridge: No DxProgressTracker found, skipping patches');
            return;
        }

        // Patch recordCaseComplete
        const origRecordCaseComplete = DxProgressTracker.recordCaseComplete;
        DxProgressTracker.recordCaseComplete = function(caseId, score, duration, conceptsExplored) {
            const result = origRecordCaseComplete.call(this, caseId, score, duration, conceptsExplored);

            // Also record in DxProgress
            try {
                const data = DxProgressTracker.getProgressData();
                const caseData = data.cases[caseId];
                const category = caseData ? caseData.category : '';
                const topicId = deriveTopic(caseId, category);

                DxProgress.recordCompletion(topicId, 'coachDx', score, {
                    timeSpent: (duration || 0) * 1000,
                    source: 'coachdx',
                    caseId: caseId,
                    category: category,
                    conceptsExplored: conceptsExplored || []
                });

                // Show "Continue Learning" suggestion if score < 70
                if (score < 70 && CATEGORY_ADVENTURE_MAP[category]) {
                    setTimeout(() => showAdventureLink(category, topicId, score), 500);
                }

                console.log(`CoachDx Bridge: Recorded ${caseId} → DxProgress (${topicId}, ${score}%)`);
            } catch (e) {
                console.warn('CoachDx Bridge: Error syncing to DxProgress', e);
            }

            return result;
        };

        // Patch recordSBARAttempt
        const origRecordSBAR = DxProgressTracker.recordSBARAttempt;
        DxProgressTracker.recordSBARAttempt = function(scenarioType, data) {
            const result = origRecordSBAR.call(this, scenarioType, data);

            try {
                const topicId = deriveTopic(scenarioType, 'sbar');
                const score = data.score || data.overallScore || 0;
                DxProgress.recordCompletion(topicId, 'sbar', score, {
                    source: 'coachdx-sbar',
                    scenarioType: scenarioType,
                    components: data.componentScores || {}
                });
            } catch (e) {
                console.warn('CoachDx Bridge: SBAR sync error', e);
            }

            return result;
        };

        // Patch recordModuleProgress
        const origRecordModule = DxProgressTracker.recordModuleProgress;
        DxProgressTracker.recordModuleProgress = function(moduleId, data) {
            const result = origRecordModule.call(this, moduleId, data);

            try {
                if (data.completed) {
                    const avgScore = data.quizScore || 80;
                    DxProgress.recordCompletion(moduleId, 'mechanism', avgScore, {
                        source: 'coachdx-module',
                        sectionsCompleted: data.sectionCompleted ? [data.sectionCompleted] : []
                    });
                }
            } catch (e) {
                console.warn('CoachDx Bridge: Module sync error', e);
            }

            return result;
        };

        console.log('CoachDx Bridge: Patches installed');
    }

    // Show adventure recommendation when student scores low
    function showAdventureLink(category, topicId, score) {
        const adventureFile = CATEGORY_ADVENTURE_MAP[category];
        if (!adventureFile) return;

        // Look for a debrief/results area to inject into
        const containers = [
            document.querySelector('.debrief-content'),
            document.querySelector('.results-panel'),
            document.querySelector('.case-complete'),
            document.querySelector('#results'),
            document.querySelector('.score-display')
        ].filter(Boolean);

        const target = containers[0] || document.body;

        // Don't duplicate
        if (document.querySelector('.coachdx-adventure-link')) return;

        const banner = document.createElement('div');
        banner.className = 'coachdx-adventure-link';
        banner.style.cssText = `
            margin: 16px auto; max-width: 500px; padding: 16px 20px;
            background: linear-gradient(135deg, #1e3a5f 0%, #2d5f8a 100%);
            border-radius: 12px; text-align: center; font-family: -apple-system, sans-serif;
        `;
        banner.innerHTML = `
            <div style="color: #93c5fd; font-size: 0.85rem; margin-bottom: 8px;">
                📈 Want to strengthen this topic?
            </div>
            <a href="../ReasonDx/adventure-cases/${adventureFile}?source=coachdx&topic=${topicId}"
               style="display: inline-block; padding: 10px 24px; background: #3b82f6; color: white;
                      border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 0.9rem;">
                🗺️ Try the Interactive Adventure
            </a>
            <div style="margin-top: 8px;">
                <a href="../tools/learning-dashboard.html" 
                   style="color: #60a5fa; font-size: 0.8rem; text-decoration: none;">
                    📊 View My Progress
                </a>
            </div>
        `;

        if (target === document.body) {
            // Float it
            banner.style.position = 'fixed';
            banner.style.bottom = '20px';
            banner.style.left = '50%';
            banner.style.transform = 'translateX(-50%)';
            banner.style.zIndex = '9999';
            banner.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
        }

        target.appendChild(banner);
    }

    // Initialize
    whenReady(() => {
        migrateExistingData();
        installPatches();
    });

})();
