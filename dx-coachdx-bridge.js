/**
 * DxSuite CoachDx ↔ DxProgress Bridge
 * =====================================
 * Syncs data between CoachDx's DxProgressTracker (dxEcosystemProgress)
 * and the unified DxProgress system (dx-progress).
 *
 * Enhancements over v1:
 *  - Case-level topic mapping (not just category fallback)
 *  - Adventure routing: suggests related adventures after case completion
 *  - One-time migration flag to avoid duplicate imports
 *
 * Data flows:
 *   CoachDx cases → DxProgress topics (crt content type)
 *   CoachDx SBAR  → DxProgress topics (quiz/sbar content type)
 *   CoachDx modules → DxProgress topics (mechanism content type)
 *   DxProgress profile → CoachDx student info (keeps them in sync)
 */
(function() {
    'use strict';

    const BRIDGE_SYNCED_KEY = 'dx-coachdx-bridge-v2-synced';

    // ================================================================
    //  Case-Level Mapping: caseId → unified topicId
    // ================================================================
    const CASE_TOPIC_MAP = {
        // Cardiovascular
        'chest-pain-acs': 'acs', 'chest-pain-acs-b': 'acs',
        'atrial-fibrillation': 'afib', 'acute-dyspnea-chf': 'heart-failure',
        'syncope': 'syncope', 'stemi': 'stemi',
        'hypertensive-emergency': 'hypertensive-emergency',
        // Pulmonary
        'massive-pe-hemodynamic': 'pe', 'acute-asthma': 'asthma',
        'copd-exacerbation': 'copd', 'pneumonia-community': 'pneumonia',
        'pneumothorax': 'pneumothorax',
        // GI
        'gi-bleed-upper': 'gi-bleed', 'acute-pancreatitis': 'pancreatitis',
        'bowel-obstruction': 'bowel-obstruction', 'appendicitis': 'appendicitis',
        'cholecystitis': 'cholecystitis',
        // Endocrine
        'dka-management': 'dka', 'thyroid-storm': 'thyroid-storm',
        'adrenal-crisis': 'adrenal-crisis', 'hypoglycemia': 'hypoglycemia',
        // Neuro
        'stroke-acute': 'stroke', 'status-epilepticus': 'seizure',
        'meningitis-bacterial': 'meningitis', 'altered-mental-status': 'altered-mental-status',
        // Renal
        'aki-consult': 'aki', 'hyperkalemia': 'hyperkalemia', 'hyponatremia': 'hyponatremia',
        // ID
        'septic-shock-escalation': 'sepsis', 'sepsis-pneumonia': 'sepsis', 'sepsis-uti': 'uti',
        // Allergy
        'anaphylaxis': 'anaphylaxis', 'drug-allergy': 'drug-allergy', 'angioedema': 'angioedema',
        // Heme/Onc
        'dvt-evaluation': 'dvt', 'tumor-lysis': 'tumor-lysis', 'dic': 'dic',
        // Psych
        'suicidal-ideation': 'psych-emergency', 'agitated-delirium': 'delirium',
        // Peds
        'febrile-infant': 'febrile-infant', 'pediatric-asthma': 'pediatric-asthma', 'croup': 'croup',
        // OB/GYN
        'ectopic-pregnancy': 'ectopic-pregnancy', 'preeclampsia': 'preeclampsia',
        'postpartum-hemorrhage': 'postpartum-hemorrhage',
        // Critical Care
        'ventilator-management': 'mechanical-ventilation',
        'shock-undifferentiated': 'shock', 'ards': 'ards'
    };

    // Category → topicId fallback (used when caseId not in CASE_TOPIC_MAP)
    const CATEGORY_TOPIC_MAP = {
        'Cardiology': 'acs', 'Pulmonology': 'pneumonia', 'Critical Care': 'sepsis',
        'Emergency Medicine': 'shock', 'Neurology': 'stroke', 'GI': 'gi-bleed',
        'Gastroenterology': 'gi-bleed', 'Nephrology': 'aki', 'Hematology': 'dic',
        'Heme/Onc': 'dic', 'Infectious Disease': 'meningitis', 'Endocrine': 'dka',
        'Psychiatry': 'psychosis', 'OB/GYN': 'preeclampsia', 'Pediatrics': 'kawasaki',
        'Allergy': 'anaphylaxis', 'Immunology': 'immunodeficiency', 'Toxicology': 'toxicology',
        'Rheumatology': 'sle', 'Dermatology': 'cellulitis', 'ENT': 'ent-emergencies',
        'Ophthalmology': 'eye-emergencies', 'Geriatrics': 'delirium',
        'Palliative Care': 'palliative', 'EMS': 'trauma', 'Nursing': 'sepsis',
        'Dental': 'dental-emergencies', 'OMFS': 'omfs', 'Podiatry': 'dfi',
        'Respiratory Therapy': 'ards'
    };

    // Adventure routing: topicId → adventure filename
    const ADVENTURE_MAP = {
        'acs': 'chest-pain-expanded.html', 'pe': 'pe-adventure.html',
        'dka': 'dka-adventure.html', 'sepsis': 'sepsis-adventure.html',
        'pneumonia': 'pneumonia-adventure.html', 'stroke': 'stroke-adventure.html',
        'heart-failure': 'heart-failure-adventure.html', 'aki': 'aki-adventure.html',
        'anaphylaxis': 'anaphylaxis-adventure.html', 'meningitis': 'meningitis-adventure.html',
        'gi-bleed': 'gi-bleed-adventure.html', 'bowel-obstruction': 'bowel-obstruction-adventure.html',
        'pancreatitis': 'pancreatitis-adventure.html', 'copd': 'copd-adventure.html',
        'asthma': 'asthma-adventure.html'
    };

    // ================================================================
    //  Resolve caseId → topicId (case-level first, then category fallback)
    // ================================================================
    function resolveTopicId(caseId, category) {
        if (CASE_TOPIC_MAP[caseId]) return CASE_TOPIC_MAP[caseId];
        if (category && CATEGORY_TOPIC_MAP[category]) return CATEGORY_TOPIC_MAP[category];
        return (category || caseId || 'unknown').toLowerCase().replace(/[^a-z0-9]/g, '-');
    }

    // ================================================================
    //  Wait for both systems to load
    // ================================================================
    function waitForSystems(callback) {
        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            if (window.DxProgress && window.DxProgressTracker) {
                clearInterval(check);
                callback();
            }
            if (attempts > 100) clearInterval(check);
        }, 100);
    }

    // ================================================================
    //  One-Time Migration: import existing CoachDx completions
    // ================================================================
    function syncCoachDxToUnified() {
        if (!window.DxProgressTracker || !window.DxProgress) return { synced: 0 };

        // Skip if already migrated (v2)
        if (localStorage.getItem(BRIDGE_SYNCED_KEY)) return { synced: 0, skipped: true };

        const coachData = DxProgressTracker.getProgressData();
        let synced = 0;

        // Sync case completions
        if (coachData.cases) {
            Object.entries(coachData.cases).forEach(([caseId, caseData]) => {
                if (!caseData.completed) return;
                const topicId = resolveTopicId(caseId, caseData.category);

                DxProgress.recordCompletion(topicId, 'crt', caseData.bestScore, {
                    caseId: caseId,
                    caseTitle: caseData.caseTitle,
                    category: caseData.category,
                    attempts: caseData.attempts ? caseData.attempts.length : 1,
                    source: 'coachdx-migration',
                    lastCompleted: caseData.lastCompleted
                });
                synced++;
            });
        }

        // Sync SBAR completions
        if (coachData.sbar) {
            Object.entries(coachData.sbar).forEach(([scenarioType, sbarData]) => {
                if (!sbarData.completed) return;
                const topicId = scenarioType.toLowerCase().replace(/[^a-z0-9]/g, '-');
                DxProgress.recordCompletion(topicId, 'quiz', sbarData.bestScore || 0, {
                    category: 'sbar', scenarioType: scenarioType,
                    attempts: sbarData.attempts ? sbarData.attempts.length : 1,
                    source: 'coachdx-migration'
                });
                synced++;
            });
        }

        // Sync module completions
        if (coachData.modules) {
            Object.entries(coachData.modules).forEach(([moduleId, modData]) => {
                if (!modData.completed) return;
                const topicId = moduleId.toLowerCase().replace(/[^a-z0-9]/g, '-');
                const lastQuizScore = modData.quizScores && modData.quizScores.length > 0
                    ? modData.quizScores[modData.quizScores.length - 1].score : null;
                DxProgress.recordCompletion(topicId, 'mechanism', lastQuizScore, {
                    moduleId: moduleId, sectionsCompleted: modData.sectionsCompleted,
                    source: 'coachdx-migration'
                });
                synced++;
            });
        }

        localStorage.setItem(BRIDGE_SYNCED_KEY, new Date().toISOString());
        console.log(`DxCoachBridge: Migrated ${synced} records from CoachDx → DxProgress`);
        return { synced };
    }

    // ================================================================
    //  Profile Sync: unified auth → CoachDx student info
    // ================================================================
    function syncProfile() {
        if (!window.DxProgressTracker || !window.DxProgress) return;
        try {
            const authData = localStorage.getItem('reasondx-user');
            if (!authData) return;
            const user = JSON.parse(authData);
            const existingStudent = DxProgressTracker.getStudentInfo();
            if (!existingStudent || existingStudent.name === 'Anonymous') {
                DxProgressTracker.setStudentInfo({
                    name: user.name || 'Student', email: user.email || '',
                    school: user.school || 'Medical School', program: user.program || 'MD',
                    cohort: user.cohort || 'Default',
                    id: existingStudent ? existingStudent.id : undefined
                });
            }
        } catch (e) { /* silent */ }
    }

    // ================================================================
    //  Real-Time Interceptors + Adventure Routing
    // ================================================================
    function installAutoSync() {
        if (!window.DxProgressTracker) return;

        // --- Case completion intercept ---
        const originalComplete = DxProgressTracker.recordCaseComplete;
        DxProgressTracker.recordCaseComplete = function(caseId, score, duration, concepts) {
            const result = originalComplete.call(this, caseId, score, duration, concepts);

            if (window.DxProgress) {
                const data = DxProgressTracker.getProgressData();
                const caseData = data.cases[caseId];
                const topicId = resolveTopicId(caseId, caseData ? caseData.category : null);

                DxProgress.recordCompletion(topicId, 'crt', score, {
                    caseId: caseId,
                    caseTitle: caseData ? caseData.caseTitle : caseId,
                    category: caseData ? caseData.category : '',
                    duration: duration,
                    source: 'coachdx-live'
                });

                // Adventure suggestion after short delay
                setTimeout(() => showAdventureSuggestion(topicId, score), 1500);
            }
            return result;
        };

        // --- SBAR intercept ---
        const originalSBAR = DxProgressTracker.recordSBARAttempt;
        DxProgressTracker.recordSBARAttempt = function(scenarioType, data) {
            const result = originalSBAR.call(this, scenarioType, data);
            if (window.DxProgress) {
                const topicId = scenarioType.toLowerCase().replace(/[^a-z0-9]/g, '-');
                DxProgress.recordCompletion(topicId, 'quiz', data.score || 0, {
                    category: 'sbar', scenarioType: scenarioType, source: 'coachdx-live'
                });
            }
            return result;
        };

        console.log('DxCoachBridge: Auto-sync hooks installed');
    }

    // ================================================================
    //  Adventure Routing Popup
    // ================================================================
    function showAdventureSuggestion(topicId, score) {
        const adventureFile = ADVENTURE_MAP[topicId];
        if (!adventureFile) return;

        // Skip if adventure already completed
        if (window.DxProgress) {
            const tp = DxProgress.getTopicProgress(topicId);
            if (tp && tp.adventure && tp.adventure.completed) return;
        }

        // Remove any existing suggestion
        const existing = document.getElementById('dx-adventure-suggest');
        if (existing) existing.remove();

        const banner = document.createElement('div');
        banner.id = 'dx-adventure-suggest';
        banner.innerHTML = `
            <div style="position:fixed;bottom:20px;right:20px;max-width:380px;background:linear-gradient(135deg,#059669,#047857);
                        color:white;border-radius:16px;padding:20px;box-shadow:0 8px 32px rgba(0,0,0,0.2);
                        z-index:10000;animation:dxSlideUp 0.4s ease-out;font-family:'Inter',system-ui,sans-serif;">
                <div style="display:flex;align-items:flex-start;gap:12px;">
                    <span style="font-size:28px;">🗺️</span>
                    <div style="flex:1;">
                        <div style="font-weight:700;font-size:15px;margin-bottom:4px;">Ready for an Adventure?</div>
                        <div style="font-size:13px;opacity:0.9;line-height:1.5;">
                            ${score >= 80 ? 'Great work!' : 'Want to explore further?'}
                            Try the interactive adventure for <strong>${topicId.replace(/-/g, ' ')}</strong>.
                        </div>
                        <div style="display:flex;gap:8px;margin-top:12px;">
                            <a href="../ReasonDx/adventure-cases/${adventureFile}"
                               style="background:white;color:#047857;padding:8px 16px;border-radius:8px;font-size:13px;
                                      font-weight:600;text-decoration:none;">Start Adventure →</a>
                            <button onclick="this.closest('#dx-adventure-suggest').remove()"
                                    style="background:rgba(255,255,255,0.2);color:white;border:none;padding:8px 12px;
                                           border-radius:8px;font-size:13px;cursor:pointer;">Later</button>
                        </div>
                    </div>
                    <button onclick="this.closest('#dx-adventure-suggest').remove()"
                            style="background:none;border:none;color:white;opacity:0.7;cursor:pointer;font-size:18px;padding:0;">✕</button>
                </div>
            </div>
            <style>@keyframes dxSlideUp{from{transform:translateY(100px);opacity:0}to{transform:translateY(0);opacity:1}}</style>`;
        document.body.appendChild(banner);
        setTimeout(() => { const el = document.getElementById('dx-adventure-suggest'); if (el) el.remove(); }, 15000);
    }

    // ================================================================
    //  Combined Stats (for dashboards that want merged view)
    // ================================================================
    function getCombinedStats() {
        const unified = window.DxProgress ? DxProgress.getDashboardSummary() : {};
        const coach = window.DxProgressTracker ? DxProgressTracker.getStudentStats() : {};
        return {
            totalTopics: unified.topicsStarted || 0,
            totalCompleted: (unified.modulesCompleted || 0) + (unified.adventuresCompleted || 0),
            coachCases: coach.cases ? coach.cases.completed : 0,
            coachSBARs: coach.sbar ? coach.sbar.completed : 0,
            hoursStudied: unified.hoursStudied || 0,
            currentStreak: unified.currentStreak || 0,
            achievements: coach.achievements || [],
            lastActive: unified.lastActivity || null
        };
    }

    // ================================================================
    //  Public API
    // ================================================================
    window.DxCoachBridge = {
        sync: syncCoachDxToUnified,
        syncProfile: syncProfile,
        getCombinedStats: getCombinedStats,
        resolveTopicId: resolveTopicId,
        CASE_TOPIC_MAP: CASE_TOPIC_MAP,
        CATEGORY_TOPIC_MAP: CATEGORY_TOPIC_MAP,
        ADVENTURE_MAP: ADVENTURE_MAP
    };

    // Auto-initialize
    waitForSystems(() => {
        syncProfile();
        syncCoachDxToUnified();
        installAutoSync();
        console.log('DxCoachBridge: Initialized — CoachDx ↔ DxProgress sync active');
    });

})();
