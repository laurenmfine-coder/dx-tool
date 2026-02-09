/**
 * ReasonDx Progress Tracking System
 * Tracks learner progress across modules, cases, and quizzes
 */
(function() {
    if (window.DxProgress) return;

    const STORAGE_KEY = 'reasondx-progress';

    function getProgress() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch(e) { return {}; }
    }

    function saveProgress(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch(e) { console.warn('DxProgress: Could not save progress', e); }
    }

    window.DxProgress = {
        /**
         * Record completion of a module/case/quiz
         * @param {string} type - 'deepDive', 'adventure', 'quiz', 'crt', 'ecg'
         * @param {string} id - unique identifier
         * @param {object} result - score, time, details
         */
        recordCompletion: function(type, id, result) {
            const progress = getProgress();
            if (!progress[type]) progress[type] = {};
            progress[type][id] = {
                completed: true,
                completedAt: new Date().toISOString(),
                score: result.score || null,
                timeSpent: result.timeSpent || null,
                attempts: (progress[type][id]?.attempts || 0) + 1,
                bestScore: Math.max(result.score || 0, progress[type][id]?.bestScore || 0),
                ...result
            };
            saveProgress(progress);
            return progress[type][id];
        },

        /**
         * Get progress for a specific item
         */
        getItem: function(type, id) {
            const progress = getProgress();
            return progress[type]?.[id] || null;
        },

        /**
         * Get all progress for a type
         */
        getByType: function(type) {
            const progress = getProgress();
            return progress[type] || {};
        },

        /**
         * Get overall stats
         */
        getStats: function() {
            const progress = getProgress();
            const stats = { totalCompleted: 0, byType: {} };
            for (const [type, items] of Object.entries(progress)) {
                const completed = Object.values(items).filter(i => i.completed).length;
                stats.byType[type] = { completed, total: Object.keys(items).length };
                stats.totalCompleted += completed;
            }
            return stats;
        },

        /**
         * Record a study session
         */
        recordSession: function(data) {
            const progress = getProgress();
            if (!progress._sessions) progress._sessions = [];
            progress._sessions.push({
                timestamp: new Date().toISOString(),
                duration: data.duration || 0,
                type: data.type || 'general',
                details: data.details || {}
            });
            // Keep last 100 sessions
            if (progress._sessions.length > 100) {
                progress._sessions = progress._sessions.slice(-100);
            }
            saveProgress(progress);
        },

        /**
         * Get recent sessions
         */
        getRecentSessions: function(count) {
            const progress = getProgress();
            return (progress._sessions || []).slice(-(count || 10));
        },

        /**
         * Export all progress data
         */
        exportData: function() {
            return getProgress();
        },

        /**
         * Import progress data (merges with existing)
         */
        importData: function(data) {
            const current = getProgress();
            const merged = { ...current };
            for (const [key, val] of Object.entries(data)) {
                if (typeof val === 'object' && !Array.isArray(val)) {
                    merged[key] = { ...(current[key] || {}), ...val };
                } else {
                    merged[key] = val;
                }
            }
            saveProgress(merged);
            return merged;
        },

        /**
         * Reset all progress
         */
        reset: function() {
            localStorage.removeItem(STORAGE_KEY);
        }
    };

    console.log('DxProgress initialized');
})();
