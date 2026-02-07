/**
 * DxSuite Unified Progress Engine
 * ================================
 * Central module for all progress tracking across the platform.
 * Every content type writes through this module. Both dashboards read from it.
 * This makes RPFS real — transforming it from a concept into actual tracked pathway data.
 *
 * localStorage key: 'dx-progress'
 *
 * Schema:
 * {
 *   topics: {
 *     'acs': {
 *       mechanism:  { completed: bool, score: number, date: ISO, timeSpent: ms },
 *       adventure:  { completed: bool, score: number, date: ISO, timeSpent: ms, variant: string },
 *       deepDive:   { completed: bool, date: ISO, timeSpent: ms, sectionsViewed: number },
 *       quiz:       [ { qId: string, correct: bool, date: ISO, category: string } ],
 *       crt:        { completed: bool, score: number, date: ISO, timeSpent: ms },
 *       reasoning:  { pathways: [ { caseId, nodes: [...], timestamps: [...], date: ISO } ] }
 *     }, ...
 *   },
 *   profile: { ... },   // synced from reasondx-user + enhanced registration
 *   streaks: {
 *     current: number,
 *     longest: number,
 *     lastActiveDate: 'YYYY-MM-DD',
 *     activeDates: ['YYYY-MM-DD', ...]
 *   },
 *   spacedRep: {
 *     'acs': { lastReview: ISO, nextReview: ISO, easeFactor: 2.5, interval: number, repetitions: number },
 *     ...
 *   },
 *   stats: {
 *     totalTimeSpent: ms,
 *     totalCompletions: number,
 *     firstActivity: ISO,
 *     lastActivity: ISO
 *   }
 * }
 */
(function(window) {
    'use strict';

    const STORAGE_KEY = 'dx-progress';
    const USER_KEY = 'reasondx-user';

    // ================================================================
    //  Internal Helpers
    // ================================================================
    function getStore() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) {
            console.warn('DxProgress: Failed to read store', e);
        }
        return createEmptyStore();
    }

    function saveStore(store) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
            return true;
        } catch (e) {
            console.warn('DxProgress: Failed to save store', e);
            return false;
        }
    }

    function createEmptyStore() {
        return {
            topics: {},
            profile: {},
            streaks: {
                current: 0,
                longest: 0,
                lastActiveDate: null,
                activeDates: []
            },
            spacedRep: {},
            stats: {
                totalTimeSpent: 0,
                totalCompletions: 0,
                firstActivity: null,
                lastActivity: null
            }
        };
    }

    function ensureTopic(store, topicId) {
        if (!store.topics[topicId]) {
            store.topics[topicId] = {
                mechanism: null,
                adventure: null,
                deepDive: null,
                quiz: [],
                crt: null,
                reasoning: { pathways: [] }
            };
        }
        return store.topics[topicId];
    }

    function todayStr() {
        return new Date().toISOString().split('T')[0];
    }

    function updateStreaks(store) {
        const today = todayStr();
        const streaks = store.streaks;

        if (streaks.lastActiveDate === today) return; // already counted today

        // Add today to active dates (keep last 365 days)
        if (!streaks.activeDates.includes(today)) {
            streaks.activeDates.push(today);
            if (streaks.activeDates.length > 365) {
                streaks.activeDates = streaks.activeDates.slice(-365);
            }
        }

        // Check if yesterday was active
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (streaks.lastActiveDate === yesterdayStr) {
            streaks.current += 1;
        } else if (streaks.lastActiveDate !== today) {
            streaks.current = 1; // streak broken, start new
        }

        if (streaks.current > streaks.longest) {
            streaks.longest = streaks.current;
        }

        streaks.lastActiveDate = today;
    }

    function updateStats(store, timeSpent) {
        const now = new Date().toISOString();
        store.stats.totalCompletions += 1;
        store.stats.totalTimeSpent += (timeSpent || 0);
        store.stats.lastActivity = now;
        if (!store.stats.firstActivity) {
            store.stats.firstActivity = now;
        }
    }

    // ================================================================
    //  RPFS Session Sync (for Fingerprint Dashboard)
    // ================================================================
    function syncToRPFS(caseId, topicId, pathway, metadata) {
        try {
            // Build RPFS-compatible session report
            const report = {
                session: {
                    caseId: caseId,
                    startTime: Date.now() - (metadata.duration || 120000),
                    endTime: Date.now(),
                    topicId: topicId,
                    source: 'dx-progress'
                },
                reasoningQualityScore: metadata.score || 50,
                cognitivePatterns: {
                    prematureClosure: metadata.pivotPoints > 2 ? 0.6 : 0.3,
                    anchoring: metadata.pivotPoints > 3 ? 0.5 : 0.2,
                    diagnosticMomentum: 0.2,
                    confirmationBias: metadata.diagnosisCorrect === false ? 0.5 : 0.2,
                    hypothesisFlexibility: metadata.differentialSize > 3 ? 0.7 : 0.4
                },
                hypothesisEvolution: {
                    totalDifferentials: metadata.differentialSize || 3,
                    pivotPoints: metadata.pivotPoints || 0,
                    finalDiagnosisCorrect: metadata.diagnosisCorrect
                },
                metacognition: {
                    moments: metadata.metacogMoments || 0
                },
                pathway: pathway
            };

            // Try to use RdxPatent RPFS directly if available
            if (window.RdxPatent && window.RdxPatent.RPFS && window.RdxPatent.RPFS.saveSession) {
                window.RdxPatent.RPFS.saveSession(report);
            } else {
                // Manually write to localStorage for later pickup
                const KEY = 'rdx_rpfs_sessions';
                const sessions = JSON.parse(localStorage.getItem(KEY) || '[]');
                report._savedAt = Date.now();
                report._id = 'rpfs_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
                sessions.push(report);
                if (sessions.length > 200) sessions.splice(0, sessions.length - 200);
                localStorage.setItem(KEY, JSON.stringify(sessions));
            }
        } catch (e) {
            console.warn('DxProgress: RPFS sync failed', e);
        }
    }

    // ================================================================
    //  SM-2 Spaced Repetition Algorithm
    // ================================================================
    function calculateSR(topicId, quality, store) {
        // quality: 0-5 (0-2 = fail, 3-5 = pass)
        const sr = store.spacedRep[topicId] || {
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0,
            lastReview: null,
            nextReview: null
        };

        if (quality >= 3) {
            // Correct response
            if (sr.repetitions === 0) {
                sr.interval = 1; // 1 day
            } else if (sr.repetitions === 1) {
                sr.interval = 6; // 6 days
            } else {
                sr.interval = Math.round(sr.interval * sr.easeFactor);
            }
            sr.repetitions += 1;
        } else {
            // Incorrect — reset
            sr.repetitions = 0;
            sr.interval = 1;
        }

        // Update ease factor (minimum 1.3)
        sr.easeFactor = Math.max(1.3,
            sr.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
        );

        const now = new Date();
        sr.lastReview = now.toISOString();
        const next = new Date(now);
        next.setDate(next.getDate() + sr.interval);
        sr.nextReview = next.toISOString();

        store.spacedRep[topicId] = sr;
        return sr;
    }

    // ================================================================
    //  Migration: Import from Scattered Keys
    // ================================================================
    function migrateFromLegacyKeys(store) {
        if (store._migrated) return store;

        // Migrate CRT scores
        try {
            const crtRaw = localStorage.getItem('crtScores');
            if (crtRaw) {
                const crtData = JSON.parse(crtRaw);
                if (crtData && typeof crtData === 'object') {
                    Object.entries(crtData).forEach(([key, val]) => {
                        // CRT keys are typically like 'sepsis-crt' or topic names
                        const topicId = key.replace(/-crt$/i, '').toLowerCase().replace(/\s+/g, '-');
                        const topic = ensureTopic(store, topicId);
                        if (!topic.crt) {
                            topic.crt = {
                                completed: true,
                                score: typeof val === 'number' ? val : (val?.score || 0),
                                date: val?.date || new Date().toISOString(),
                                timeSpent: val?.timeSpent || 0
                            };
                        }
                    });
                }
            }
        } catch (e) { /* ignore migration errors */ }

        // Migrate board prep stats
        try {
            const bpStats = localStorage.getItem('boardPrepStats');
            const bpHistory = localStorage.getItem('boardPrepHistory');
            if (bpStats) {
                const stats = JSON.parse(bpStats);
                // Store as aggregate quiz stats if available
                if (stats && typeof stats === 'object') {
                    store._legacyBoardPrep = stats;
                }
            }
            if (bpHistory) {
                const history = JSON.parse(bpHistory);
                if (Array.isArray(history)) {
                    history.forEach(entry => {
                        if (entry.topicId || entry.category) {
                            const topicId = (entry.topicId || entry.category || 'general')
                                .toLowerCase().replace(/\s+/g, '-');
                            const topic = ensureTopic(store, topicId);
                            topic.quiz.push({
                                qId: entry.questionId || entry.qId || `legacy-${Date.now()}`,
                                correct: !!entry.correct,
                                date: entry.date || new Date().toISOString(),
                                category: entry.category || ''
                            });
                        }
                    });
                }
            }
        } catch (e) { /* ignore */ }

        // Migrate mechanism completions
        try {
            const mechRaw = localStorage.getItem('mechanismDxCompletions');
            if (mechRaw) {
                const mechData = JSON.parse(mechRaw);
                if (mechData && typeof mechData === 'object') {
                    Object.entries(mechData).forEach(([key, val]) => {
                        const topicId = key.toLowerCase().replace(/\s+/g, '-');
                        const topic = ensureTopic(store, topicId);
                        if (!topic.mechanism) {
                            topic.mechanism = {
                                completed: true,
                                score: val?.score || 100,
                                date: val?.date || new Date().toISOString(),
                                timeSpent: val?.timeSpent || 0
                            };
                        }
                    });
                }
            }
        } catch (e) { /* ignore */ }

        // Migrate old progress key
        try {
            const oldProgress = localStorage.getItem('reasondx-progress');
            if (oldProgress) {
                const data = JSON.parse(oldProgress);
                if (data) {
                    store._legacyProgress = data;
                }
            }
        } catch (e) { /* ignore */ }

        // Migrate RPFS sessions into reasoning pathways
        try {
            const rpfsSessions = localStorage.getItem('rdx_rpfs_sessions');
            if (rpfsSessions) {
                const sessions = JSON.parse(rpfsSessions);
                if (Array.isArray(sessions)) {
                    sessions.forEach(session => {
                        const caseId = session?.session?.caseId ||
                                       session?.session?.caseName?.toLowerCase().replace(/\s+/g, '-');
                        if (caseId) {
                            const topicId = caseId.toLowerCase().replace(/\s+/g, '-');
                            const topic = ensureTopic(store, topicId);
                            topic.reasoning.pathways.push({
                                caseId: caseId,
                                nodes: session?.session?.decisionNodes || [],
                                timestamps: session?.session?.timestamps || [],
                                date: session?._savedAt
                                    ? new Date(session._savedAt).toISOString()
                                    : new Date().toISOString(),
                                rpfsId: session?._id || null
                            });
                        }
                    });
                }
            }
        } catch (e) { /* ignore */ }

        // Sync profile from user data
        try {
            const userRaw = localStorage.getItem(USER_KEY);
            if (userRaw) {
                const user = JSON.parse(userRaw);
                store.profile = {
                    name: user.name || '',
                    email: user.email || '',
                    plan: user.plan || 'free',
                    trainingLevel: user.trainingLevel || user.role || '',
                    specialty: user.specialty || '',
                    institution: user.institution || '',
                    graduationYear: user.graduationYear || '',
                    studyGoal: user.studyGoal || '',
                    createdAt: user.createdAt || ''
                };
            }
        } catch (e) { /* ignore */ }

        store._migrated = true;
        store._migratedAt = new Date().toISOString();
        saveStore(store);
        return store;
    }

    // ================================================================
    //  Public API
    // ================================================================
    const DxProgress = {

        /**
         * Initialize the progress engine.
         * Call this on page load. Handles migration from legacy keys if needed.
         */
        init() {
            let store = getStore();
            if (!store._migrated) {
                store = migrateFromLegacyKeys(store);
            }
            // Sync profile on every init
            this.syncProfile();
            return this;
        },

        /**
         * Record a completion event for any content type.
         * @param {string} topicId - Topic slug (e.g., 'acs', 'sepsis', 'pe')
         * @param {string} contentType - One of: 'mechanism', 'adventure', 'deepDive', 'quiz', 'crt'
         * @param {number} score - Score 0-100 (or null for deep dives)
         * @param {object} metadata - Additional data (timeSpent, variant, qId, etc.)
         */
        recordCompletion(topicId, contentType, score, metadata = {}) {
            if (!topicId || !contentType) {
                console.warn('DxProgress.recordCompletion: topicId and contentType required');
                return false;
            }

            const store = getStore();
            const topic = ensureTopic(store, topicId);
            const now = new Date().toISOString();

            switch (contentType) {
                case 'mechanism':
                    topic.mechanism = {
                        completed: true,
                        score: score || 100,
                        date: now,
                        timeSpent: metadata.timeSpent || 0
                    };
                    break;

                case 'adventure':
                    topic.adventure = {
                        completed: true,
                        score: score || 0,
                        date: now,
                        timeSpent: metadata.timeSpent || 0,
                        variant: metadata.variant || 'default'
                    };
                    break;

                case 'deepDive':
                    topic.deepDive = {
                        completed: true,
                        date: now,
                        timeSpent: metadata.timeSpent || 0,
                        sectionsViewed: metadata.sectionsViewed || 0
                    };
                    break;

                case 'quiz':
                    topic.quiz.push({
                        qId: metadata.qId || `q-${Date.now()}`,
                        correct: score >= 1,
                        date: now,
                        category: metadata.category || topicId,
                        examType: metadata.examType || ''
                    });
                    // Keep last 500 quiz entries per topic
                    if (topic.quiz.length > 500) {
                        topic.quiz = topic.quiz.slice(-500);
                    }
                    break;

                case 'crt':
                    topic.crt = {
                        completed: true,
                        score: score || 0,
                        date: now,
                        timeSpent: metadata.timeSpent || 0
                    };
                    break;

                default:
                    console.warn('DxProgress.recordCompletion: Unknown contentType', contentType);
                    return false;
            }

            // Update spaced repetition schedule
            const srQuality = score != null ? Math.min(5, Math.round((score / 100) * 5)) : 3;
            calculateSR(topicId, srQuality, store);

            // Update streaks and stats
            updateStreaks(store);
            updateStats(store, metadata.timeSpent || 0);

            // Dispatch event for live dashboard updates
            window.dispatchEvent(new CustomEvent('dx-progress-update', {
                detail: { topicId, contentType, score, metadata }
            }));

            return saveStore(store);
        },

        /**
         * Record a reasoning pathway for RPFS tracking.
         * @param {string} caseId - Case identifier
         * @param {string} topicId - Topic slug
         * @param {Array} nodes - Decision nodes with data
         * @param {Array} timestamps - Timestamps for each node
         * @param {object} metadata - Additional pathway data
         */
        recordReasoningPathway(caseId, topicId, nodes, timestamps, metadata = {}) {
            const store = getStore();
            const topic = ensureTopic(store, topicId || caseId);
            const now = new Date().toISOString();

            const pathway = {
                caseId: caseId,
                nodes: nodes || [],
                timestamps: timestamps || [],
                date: now,
                score: metadata.score || null,
                duration: metadata.duration || null,
                diagnosisCorrect: metadata.diagnosisCorrect || null,
                differentialSize: metadata.differentialSize || null,
                pivotPoints: metadata.pivotPoints || 0,
                metacogMoments: metadata.metacogMoments || 0
            };

            topic.reasoning.pathways.push(pathway);

            // Keep last 50 pathways per topic
            if (topic.reasoning.pathways.length > 50) {
                topic.reasoning.pathways = topic.reasoning.pathways.slice(-50);
            }

            updateStreaks(store);
            updateStats(store, metadata.duration || 0);

            window.dispatchEvent(new CustomEvent('dx-progress-update', {
                detail: { topicId: topicId || caseId, contentType: 'reasoning', pathway }
            }));

            // Sync to RdxPatent RPFS format for fingerprint dashboard
            syncToRPFS(caseId, topicId, pathway, metadata);

            return saveStore(store);
        },

        /**
         * Get progress for a single topic.
         * @param {string} topicId
         * @returns {object} { mechanism, adventure, deepDive, quiz, crt, reasoning, spacedRep }
         */
        getTopicProgress(topicId) {
            const store = getStore();
            const topic = store.topics[topicId] || null;
            const sr = store.spacedRep[topicId] || null;
            if (!topic) return null;
            return { ...topic, spacedRep: sr };
        },

        /**
         * Get progress for all topics.
         * @returns {object} Full topics map keyed by topic ID
         */
        getAllProgress() {
            const store = getStore();
            return store.topics;
        },

        /**
         * Get reasoning pathway data for a specific case/topic.
         * @param {string} caseId
         * @returns {Array} Array of pathway objects
         */
        getReasoningPathway(caseId) {
            const store = getStore();
            const topic = store.topics[caseId];
            if (!topic) return [];
            return topic.reasoning?.pathways || [];
        },

        /**
         * Get streak data.
         * @returns {object} { current, longest, lastActiveDate, activeDates }
         */
        getStreaks() {
            const store = getStore();
            // Recalculate current streak on access
            const today = todayStr();
            const streaks = store.streaks;
            if (streaks.lastActiveDate && streaks.lastActiveDate !== today) {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                const yStr = yesterday.toISOString().split('T')[0];
                if (streaks.lastActiveDate !== yStr) {
                    streaks.current = 0; // streak broken
                }
            }
            return { ...streaks };
        },

        /**
         * Get spaced repetition data for all topics.
         * @returns {object} Map of topicId → SR schedule data
         */
        getSpacedRep() {
            const store = getStore();
            return store.spacedRep;
        },

        /**
         * Get topics due for spaced repetition review.
         * @returns {Array} Sorted array of { topicId, nextReview, daysPast, urgency }
         */
        getDueForReview() {
            const store = getStore();
            const now = new Date();
            const due = [];

            Object.entries(store.spacedRep).forEach(([topicId, sr]) => {
                if (!sr.nextReview) return;
                const reviewDate = new Date(sr.nextReview);
                const daysPast = Math.floor((now - reviewDate) / (1000 * 60 * 60 * 24));

                if (daysPast >= 0) {
                    due.push({
                        topicId,
                        nextReview: sr.nextReview,
                        lastReview: sr.lastReview,
                        daysPast,
                        interval: sr.interval,
                        urgency: daysPast > 7 ? 'high' : daysPast > 2 ? 'medium' : 'low'
                    });
                }
            });

            // Sort by urgency (most overdue first)
            return due.sort((a, b) => b.daysPast - a.daysPast);
        },

        /**
         * Get aggregate statistics across all topics.
         * @returns {object} Summary stats
         */
        getStats() {
            const store = getStore();
            const topics = store.topics;
            const topicIds = Object.keys(topics);

            let mechanismComplete = 0;
            let adventureComplete = 0;
            let deepDiveComplete = 0;
            let crtComplete = 0;
            let totalQuizQuestions = 0;
            let correctQuizQuestions = 0;
            let topicsStarted = 0;
            const categoryCounts = {};

            topicIds.forEach(topicId => {
                const t = topics[topicId];
                let hasActivity = false;

                if (t.mechanism?.completed) { mechanismComplete++; hasActivity = true; }
                if (t.adventure?.completed) { adventureComplete++; hasActivity = true; }
                if (t.deepDive?.completed) { deepDiveComplete++; hasActivity = true; }
                if (t.crt?.completed) { crtComplete++; hasActivity = true; }

                if (t.quiz && t.quiz.length > 0) {
                    hasActivity = true;
                    totalQuizQuestions += t.quiz.length;
                    correctQuizQuestions += t.quiz.filter(q => q.correct).length;
                }

                if (hasActivity) topicsStarted++;
            });

            return {
                topicsStarted,
                totalTopics: topicIds.length,
                mechanismComplete,
                adventureComplete,
                deepDiveComplete,
                crtComplete,
                quizAccuracy: totalQuizQuestions > 0
                    ? Math.round((correctQuizQuestions / totalQuizQuestions) * 100) : 0,
                totalQuizQuestions,
                correctQuizQuestions,
                streaks: this.getStreaks(),
                dueForReview: this.getDueForReview().length,
                totalTimeSpent: store.stats.totalTimeSpent,
                totalCompletions: store.stats.totalCompletions,
                firstActivity: store.stats.firstActivity,
                lastActivity: store.stats.lastActivity
            };
        },

        /**
         * Get completion percentage for a topic across all content types.
         * @param {string} topicId
         * @returns {object} { percentage, completed: [...], remaining: [...] }
         */
        getTopicCompletionRate(topicId) {
            const topic = this.getTopicProgress(topicId);
            if (!topic) return { percentage: 0, completed: [], remaining: ['mechanism', 'adventure', 'deepDive', 'crt'] };

            const types = ['mechanism', 'adventure', 'deepDive', 'crt'];
            const completed = types.filter(t => topic[t]?.completed);
            const remaining = types.filter(t => !topic[t]?.completed);

            return {
                percentage: Math.round((completed.length / types.length) * 100),
                completed,
                remaining
            };
        },

        /**
         * Get topics that have never been attempted.
         * Requires topic-map.json to be loaded.
         * @param {object} topicMap - The loaded topic-map.json topics object
         * @returns {Array} Array of { topicId, displayName, category }
         */
        getUnattemptedTopics(topicMap) {
            if (!topicMap) return [];
            const store = getStore();
            const unattempted = [];

            Object.entries(topicMap).forEach(([topicId, topicData]) => {
                if (typeof topicData !== 'object' || !topicData.displayName) return;
                if (!store.topics[topicId]) {
                    unattempted.push({
                        topicId,
                        displayName: topicData.displayName,
                        category: topicData.category || '',
                        examRelevance: topicData.examRelevance || []
                    });
                }
            });

            return unattempted;
        },

        /**
         * Get topics with low quiz performance.
         * @param {number} threshold - Score threshold (default 70)
         * @returns {Array} Array of { topicId, accuracy, totalQuestions }
         */
        getLowPerformanceTopics(threshold = 70) {
            const store = getStore();
            const low = [];

            Object.entries(store.topics).forEach(([topicId, topic]) => {
                if (!topic.quiz || topic.quiz.length < 3) return; // need minimum data
                const correct = topic.quiz.filter(q => q.correct).length;
                const accuracy = Math.round((correct / topic.quiz.length) * 100);
                if (accuracy < threshold) {
                    low.push({
                        topicId,
                        accuracy,
                        totalQuestions: topic.quiz.length,
                        lastAttempt: topic.quiz[topic.quiz.length - 1]?.date
                    });
                }
            });

            return low.sort((a, b) => a.accuracy - b.accuracy);
        },

        /**
         * Get topics where reasoning diverged significantly from expert pathways.
         * @returns {Array} Topics with high divergence scores
         */
        getDivergentReasoningTopics() {
            const store = getStore();
            const divergent = [];

            Object.entries(store.topics).forEach(([topicId, topic]) => {
                if (!topic.reasoning?.pathways?.length) return;
                const latestPathway = topic.reasoning.pathways[topic.reasoning.pathways.length - 1];
                if (latestPathway.diagnosisCorrect === false || latestPathway.pivotPoints > 5) {
                    divergent.push({
                        topicId,
                        pivotPoints: latestPathway.pivotPoints,
                        diagnosisCorrect: latestPathway.diagnosisCorrect,
                        date: latestPathway.date
                    });
                }
            });

            return divergent;
        },

        /**
         * Sync profile data from reasondx-user localStorage.
         */
        syncProfile() {
            try {
                const userRaw = localStorage.getItem(USER_KEY);
                if (!userRaw) return;
                const user = JSON.parse(userRaw);
                const store = getStore();
                store.profile = {
                    name: user.name || '',
                    email: user.email || '',
                    plan: user.plan || 'free',
                    trainingLevel: user.trainingLevel || user.role || '',
                    specialty: user.specialty || '',
                    institution: user.institution || '',
                    graduationYear: user.graduationYear || '',
                    studyGoal: user.studyGoal || '',
                    createdAt: user.createdAt || ''
                };
                saveStore(store);
            } catch (e) { /* ignore */ }
        },

        /**
         * Get the user profile data.
         * @returns {object} Profile object
         */
        getProfile() {
            const store = getStore();
            return store.profile || {};
        },

        /**
         * Get activity calendar data (last N days).
         * @param {number} days - Number of days to return (default 28)
         * @returns {Array} Array of { date, active }
         */
        getActivityCalendar(days = 28) {
            const store = getStore();
            const activeDates = new Set(store.streaks.activeDates || []);
            const calendar = [];
            const today = new Date();

            for (let i = days - 1; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                const dateStr = date.toISOString().split('T')[0];
                calendar.push({
                    date: dateStr,
                    active: activeDates.has(dateStr),
                    isToday: i === 0
                });
            }

            return calendar;
        },

        /**
         * Get category-level progress summary.
         * @param {object} topicMap - The loaded topic-map topics object
         * @returns {object} Map of category → { total, completed, percentage }
         */
        getCategoryProgress(topicMap) {
            if (!topicMap) return {};
            const store = getStore();
            const categories = {};

            Object.entries(topicMap).forEach(([topicId, topicData]) => {
                if (typeof topicData !== 'object' || !topicData.category) return;
                const cat = topicData.category;
                if (!categories[cat]) {
                    categories[cat] = { total: 0, started: 0, mechanismComplete: 0 };
                }
                categories[cat].total++;
                const topic = store.topics[topicId];
                if (topic) {
                    categories[cat].started++;
                    if (topic.mechanism?.completed) categories[cat].mechanismComplete++;
                }
            });

            Object.keys(categories).forEach(cat => {
                categories[cat].percentage = categories[cat].total > 0
                    ? Math.round((categories[cat].mechanismComplete / categories[cat].total) * 100)
                    : 0;
            });

            return categories;
        },

        /**
         * Export all progress data as JSON (for backup/portability).
         * @returns {string} JSON string of full store
         */
        exportData() {
            return JSON.stringify(getStore(), null, 2);
        },

        /**
         * Import progress data from JSON.
         * @param {string} jsonStr - JSON string to import
         * @returns {boolean} Success
         */
        importData(jsonStr) {
            try {
                const data = JSON.parse(jsonStr);
                if (data && data.topics) {
                    return saveStore(data);
                }
                return false;
            } catch (e) {
                console.warn('DxProgress.importData: Invalid JSON', e);
                return false;
            }
        },

        /**
         * Clear all progress data (with confirmation).
         * @param {boolean} confirm - Must be true to execute
         */
        clearAll(confirm) {
            if (confirm !== true) {
                console.warn('DxProgress.clearAll: Pass true to confirm');
                return false;
            }
            return saveStore(createEmptyStore());
        },

        /**
         * Get a summary suitable for dashboard display.
         * @returns {object} Dashboard-ready data
         */
        getDashboardSummary() {
            const stats = this.getStats();
            const streaks = this.getStreaks();
            const dueForReview = this.getDueForReview();
            const lowPerf = this.getLowPerformanceTopics();
            const calendar = this.getActivityCalendar(28);

            // Calculate hours studied
            const hoursStudied = Math.round((stats.totalTimeSpent / (1000 * 60 * 60)) * 10) / 10;

            return {
                modulesCompleted: stats.mechanismComplete,
                adventuresCompleted: stats.adventureComplete,
                deepDivesCompleted: stats.deepDiveComplete,
                crtsCompleted: stats.crtComplete,
                topicsStarted: stats.topicsStarted,
                quizAccuracy: stats.quizAccuracy,
                totalQuizQuestions: stats.totalQuizQuestions,
                hoursStudied,
                currentStreak: streaks.current,
                longestStreak: streaks.longest,
                dueForReview: dueForReview.slice(0, 10),
                lowPerformanceTopics: lowPerf.slice(0, 5),
                activityCalendar: calendar,
                lastActivity: stats.lastActivity
            };
        }
    };

    // ================================================================
    //  Auto-initialize
    // ================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => DxProgress.init());
    } else {
        DxProgress.init();
    }

    // Export
    window.DxProgress = DxProgress;

    console.log('DxProgress unified progress engine loaded');

})(window);
