// =====================================================
// DX UNIFIED LEARNER PROFILE SYSTEM
// Cross-platform progress tracking for the Dx Ecosystem
// =====================================================
// 
// Usage:
// 1. Include this script in any Dx platform page
// 2. Call DxProfile.init() on page load
// 3. Use DxProfile.recordActivity() to track completions
// 4. Access DxProfile.data for current profile data
// =====================================================

const DxProfile = {
    VERSION: '1.0.0',
    STORAGE_KEY: 'dx_unified_profile',
    
    // Default profile structure
    defaultProfile: {
        version: '1.0.0',
        id: null,
        name: 'Learner',
        email: null,
        level: 'ume', // ume, pgy1, pgy2, pgy3, attending
        institution: null,
        created: null,
        lastActive: null,
        
        // Progress tracking
        progress: {
            reasondx: {
                casesCompleted: [],
                casesInProgress: [],
                scores: {},
                categoryMastery: {},
                totalTime: 0
            },
            mechanismdx: {
                modulesCompleted: [],
                modulesInProgress: [],
                quizScores: {},
                conceptMastery: {},
                totalTime: 0
            },
            coachdx: {
                sessionsCompleted: [],
                topicsCovered: [],
                reasoningScores: {},
                totalTime: 0
            }
        },
        
        // Analytics
        analytics: {
            streak: 0,
            longestStreak: 0,
            lastStreakDate: null,
            totalTimeSpent: 0,
            dailyActivity: {},
            weeklyGoal: 5, // activities per week
            strengths: [],
            weaknesses: [],
            recommendations: []
        },
        
        // Preferences
        preferences: {
            theme: 'light',
            notifications: true,
            difficulty: 'adaptive',
            focusAreas: []
        }
    },
    
    data: null,
    
    // Initialize the profile system
    init() {
        this.load();
        this.updateLastActive();
        this.checkStreak();
        this.analyzePerformance();
        console.log('[DxProfile] Initialized', this.data);
        return this;
    },
    
    // Load profile from storage
    load() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved) {
                this.data = JSON.parse(saved);
                // Merge with defaults for any new fields
                this.data = this.mergeWithDefaults(this.data);
            } else {
                this.data = this.createNew();
            }
        } catch (e) {
            console.error('[DxProfile] Load error:', e);
            this.data = this.createNew();
        }
        return this.data;
    },
    
    // Create new profile
    createNew() {
        const profile = JSON.parse(JSON.stringify(this.defaultProfile));
        profile.id = this.generateId();
        profile.created = new Date().toISOString();
        profile.lastActive = new Date().toISOString();
        this.save(profile);
        return profile;
    },
    
    // Merge loaded data with defaults
    mergeWithDefaults(loaded) {
        const merged = JSON.parse(JSON.stringify(this.defaultProfile));
        return this.deepMerge(merged, loaded);
    },
    
    // Deep merge helper
    deepMerge(target, source) {
        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                if (!target[key]) target[key] = {};
                this.deepMerge(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
        return target;
    },
    
    // Save profile
    save(data = this.data) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('[DxProfile] Save error:', e);
            return false;
        }
    },
    
    // Generate unique ID
    generateId() {
        return 'dx_' + Date.now().toString(36) + Math.random().toString(36).substr(2);
    },
    
    // Update last active timestamp
    updateLastActive() {
        this.data.lastActive = new Date().toISOString();
        this.save();
    },
    
    // =====================================================
    // ACTIVITY RECORDING
    // =====================================================
    
    // Record a completed activity
    recordActivity(platform, activityType, details) {
        const activity = {
            id: details.id,
            title: details.title,
            type: activityType,
            score: details.score || null,
            duration: details.duration || null,
            timestamp: new Date().toISOString(),
            metadata: details.metadata || {}
        };
        
        // Platform-specific recording
        switch (platform) {
            case 'reasondx':
                this.recordReasonDxActivity(activity);
                break;
            case 'mechanismdx':
                this.recordMechanismDxActivity(activity);
                break;
            case 'coachdx':
                this.recordCoachDxActivity(activity);
                break;
        }
        
        // Update daily activity
        this.recordDailyActivity();
        
        // Update streak
        this.checkStreak();
        
        // Re-analyze performance
        this.analyzePerformance();
        
        // Save
        this.save();
        
        // Dispatch event for other components
        this.dispatchActivityEvent(platform, activity);
        
        return activity;
    },
    
    // Record ReasonDx activity
    recordReasonDxActivity(activity) {
        const p = this.data.progress.reasondx;
        
        if (activity.type === 'case_completed') {
            if (!p.casesCompleted.includes(activity.id)) {
                p.casesCompleted.push(activity.id);
            }
            // Remove from in-progress
            p.casesInProgress = p.casesInProgress.filter(id => id !== activity.id);
            
            // Record score
            if (activity.score !== null) {
                p.scores[activity.id] = activity.score;
            }
            
            // Update category mastery
            if (activity.metadata.category) {
                const cat = activity.metadata.category;
                if (!p.categoryMastery[cat]) {
                    p.categoryMastery[cat] = { completed: 0, totalScore: 0 };
                }
                p.categoryMastery[cat].completed++;
                if (activity.score) {
                    p.categoryMastery[cat].totalScore += activity.score;
                }
            }
        } else if (activity.type === 'case_started') {
            if (!p.casesInProgress.includes(activity.id)) {
                p.casesInProgress.push(activity.id);
            }
        }
        
        if (activity.duration) {
            p.totalTime += activity.duration;
        }
    },
    
    // Record MechanismDx activity
    recordMechanismDxActivity(activity) {
        const p = this.data.progress.mechanismdx;
        
        if (activity.type === 'module_completed') {
            if (!p.modulesCompleted.includes(activity.id)) {
                p.modulesCompleted.push(activity.id);
            }
            p.modulesInProgress = p.modulesInProgress.filter(id => id !== activity.id);
            
            if (activity.score !== null) {
                p.quizScores[activity.id] = activity.score;
            }
            
            // Update concept mastery
            if (activity.metadata.concepts) {
                activity.metadata.concepts.forEach(concept => {
                    if (!p.conceptMastery[concept]) {
                        p.conceptMastery[concept] = { encounters: 0, avgScore: 0 };
                    }
                    const cm = p.conceptMastery[concept];
                    cm.avgScore = (cm.avgScore * cm.encounters + (activity.score || 0)) / (cm.encounters + 1);
                    cm.encounters++;
                });
            }
        } else if (activity.type === 'module_started') {
            if (!p.modulesInProgress.includes(activity.id)) {
                p.modulesInProgress.push(activity.id);
            }
        }
        
        if (activity.duration) {
            p.totalTime += activity.duration;
        }
    },
    
    // Record CoachDx activity
    recordCoachDxActivity(activity) {
        const p = this.data.progress.coachdx;
        
        if (activity.type === 'session_completed') {
            p.sessionsCompleted.push({
                id: activity.id,
                timestamp: activity.timestamp,
                score: activity.score
            });
            
            if (activity.metadata.topic && !p.topicsCovered.includes(activity.metadata.topic)) {
                p.topicsCovered.push(activity.metadata.topic);
            }
            
            if (activity.score !== null) {
                p.reasoningScores[activity.id] = activity.score;
            }
        }
        
        if (activity.duration) {
            p.totalTime += activity.duration;
        }
    },
    
    // Record daily activity for heatmap
    recordDailyActivity() {
        const today = new Date().toISOString().split('T')[0];
        if (!this.data.analytics.dailyActivity[today]) {
            this.data.analytics.dailyActivity[today] = 0;
        }
        this.data.analytics.dailyActivity[today]++;
    },
    
    // =====================================================
    // STREAK MANAGEMENT
    // =====================================================
    
    checkStreak() {
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        const analytics = this.data.analytics;
        
        const hadActivityToday = analytics.dailyActivity[today] > 0;
        const hadActivityYesterday = analytics.dailyActivity[yesterday] > 0;
        
        if (analytics.lastStreakDate === today) {
            // Already counted today
            return;
        }
        
        if (hadActivityToday) {
            if (analytics.lastStreakDate === yesterday || !analytics.lastStreakDate) {
                // Continue streak
                analytics.streak++;
            } else {
                // Streak broken, start new
                analytics.streak = 1;
            }
            analytics.lastStreakDate = today;
            
            // Update longest streak
            if (analytics.streak > analytics.longestStreak) {
                analytics.longestStreak = analytics.streak;
            }
        }
    },
    
    // =====================================================
    // PERFORMANCE ANALYSIS
    // =====================================================
    
    analyzePerformance() {
        const strengths = [];
        const weaknesses = [];
        
        // Analyze ReasonDx categories
        const catMastery = this.data.progress.reasondx.categoryMastery;
        for (const cat in catMastery) {
            const data = catMastery[cat];
            if (data.completed > 0) {
                const avg = data.totalScore / data.completed;
                if (avg >= 80) {
                    strengths.push({ area: cat, score: Math.round(avg), source: 'reasondx' });
                } else if (avg < 70) {
                    weaknesses.push({ area: cat, score: Math.round(avg), source: 'reasondx' });
                }
            }
        }
        
        // Analyze MechanismDx concepts
        const conceptMastery = this.data.progress.mechanismdx.conceptMastery;
        for (const concept in conceptMastery) {
            const data = conceptMastery[concept];
            if (data.encounters >= 2) {
                if (data.avgScore >= 85) {
                    strengths.push({ area: concept, score: Math.round(data.avgScore), source: 'mechanismdx' });
                } else if (data.avgScore < 65) {
                    weaknesses.push({ area: concept, score: Math.round(data.avgScore), source: 'mechanismdx' });
                }
            }
        }
        
        // Sort and store
        strengths.sort((a, b) => b.score - a.score);
        weaknesses.sort((a, b) => a.score - b.score);
        
        this.data.analytics.strengths = strengths.slice(0, 5);
        this.data.analytics.weaknesses = weaknesses.slice(0, 5);
        
        // Generate recommendations
        this.generateRecommendations();
    },
    
    // Generate personalized recommendations
    generateRecommendations() {
        const recommendations = [];
        const weaknesses = this.data.analytics.weaknesses;
        
        // Recommend based on weaknesses
        weaknesses.slice(0, 3).forEach(w => {
            if (w.source === 'reasondx') {
                recommendations.push({
                    type: 'practice',
                    platform: 'mechanismdx',
                    title: `Review ${w.area} Pathophysiology`,
                    reason: `Your ${w.area} case performance (${w.score}%) suggests reviewing the fundamentals`,
                    priority: 'high'
                });
            } else {
                recommendations.push({
                    type: 'practice',
                    platform: 'reasondx',
                    title: `Practice ${w.area} Cases`,
                    reason: `Apply your ${w.area} knowledge with clinical cases`,
                    priority: 'medium'
                });
            }
        });
        
        // Check for incomplete series
        const reasondxCases = this.data.progress.reasondx.casesCompleted.length;
        if (reasondxCases > 0 && reasondxCases < 50) {
            recommendations.push({
                type: 'progress',
                platform: 'reasondx',
                title: 'Continue Your Case Journey',
                reason: `You've completed ${reasondxCases} cases. Keep the momentum!`,
                priority: 'medium'
            });
        }
        
        // Suggest coaching if scores are variable
        const scores = Object.values(this.data.progress.reasondx.scores);
        if (scores.length >= 5) {
            const variance = this.calculateVariance(scores);
            if (variance > 200) {
                recommendations.push({
                    type: 'coaching',
                    platform: 'coachdx',
                    title: 'Strengthen Your Reasoning Process',
                    reason: 'Your scores vary significantly. CoachDx can help build consistent reasoning skills.',
                    priority: 'high'
                });
            }
        }
        
        this.data.analytics.recommendations = recommendations;
    },
    
    // Calculate variance helper
    calculateVariance(arr) {
        if (arr.length === 0) return 0;
        const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
        return arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length;
    },
    
    // =====================================================
    // GETTERS
    // =====================================================
    
    // Get overall mastery score
    getOverallMastery() {
        let totalScore = 0;
        let count = 0;
        
        // Average ReasonDx scores
        const reasondxScores = Object.values(this.data.progress.reasondx.scores);
        if (reasondxScores.length > 0) {
            totalScore += reasondxScores.reduce((a, b) => a + b, 0) / reasondxScores.length;
            count++;
        }
        
        // Average MechanismDx scores
        const mechScores = Object.values(this.data.progress.mechanismdx.quizScores);
        if (mechScores.length > 0) {
            totalScore += mechScores.reduce((a, b) => a + b, 0) / mechScores.length;
            count++;
        }
        
        // Average CoachDx scores
        const coachScores = Object.values(this.data.progress.coachdx.reasoningScores);
        if (coachScores.length > 0) {
            totalScore += coachScores.reduce((a, b) => a + b, 0) / coachScores.length;
            count++;
        }
        
        return count > 0 ? Math.round(totalScore / count) : 0;
    },
    
    // Get total activities count
    getTotalActivities() {
        return this.data.progress.reasondx.casesCompleted.length +
               this.data.progress.mechanismdx.modulesCompleted.length +
               this.data.progress.coachdx.sessionsCompleted.length;
    },
    
    // Get activity for date range
    getActivityRange(startDate, endDate) {
        const activity = this.data.analytics.dailyActivity;
        const result = {};
        
        let current = new Date(startDate);
        const end = new Date(endDate);
        
        while (current <= end) {
            const key = current.toISOString().split('T')[0];
            result[key] = activity[key] || 0;
            current.setDate(current.getDate() + 1);
        }
        
        return result;
    },
    
    // =====================================================
    // PROFILE MANAGEMENT
    // =====================================================
    
    // Update profile settings
    updateProfile(updates) {
        Object.assign(this.data, updates);
        this.save();
        return this.data;
    },
    
    // Update preferences
    updatePreferences(prefs) {
        Object.assign(this.data.preferences, prefs);
        this.save();
        return this.data.preferences;
    },
    
    // Reset progress (with confirmation)
    resetProgress(platform = 'all') {
        if (platform === 'all') {
            this.data.progress = JSON.parse(JSON.stringify(this.defaultProfile.progress));
            this.data.analytics = JSON.parse(JSON.stringify(this.defaultProfile.analytics));
        } else if (this.data.progress[platform]) {
            this.data.progress[platform] = JSON.parse(JSON.stringify(this.defaultProfile.progress[platform]));
        }
        this.save();
    },
    
    // Export profile
    export() {
        return JSON.stringify(this.data, null, 2);
    },
    
    // Import profile
    import(jsonString) {
        try {
            const imported = JSON.parse(jsonString);
            this.data = this.mergeWithDefaults(imported);
            this.save();
            return true;
        } catch (e) {
            console.error('[DxProfile] Import error:', e);
            return false;
        }
    },
    
    // =====================================================
    // EVENT SYSTEM
    // =====================================================
    
    // Dispatch activity event for cross-platform communication
    dispatchActivityEvent(platform, activity) {
        const event = new CustomEvent('dx-profile-activity', {
            detail: { platform, activity, profile: this.data }
        });
        window.dispatchEvent(event);
        
        // Also post to parent if in iframe
        if (window.parent !== window) {
            window.parent.postMessage({
                type: 'dx-profile-activity',
                platform,
                activity,
                profileId: this.data.id
            }, '*');
        }
    },
    
    // Listen for activity from other windows/iframes
    setupCrossWindowListener() {
        window.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'dx-activity-sync') {
                this.recordActivity(
                    event.data.platform,
                    event.data.activityType,
                    event.data.details
                );
            }
        });
    }
};

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => DxProfile.init());
} else {
    DxProfile.init();
}

// Expose globally
window.DxProfile = DxProfile;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DxProfile;
}
