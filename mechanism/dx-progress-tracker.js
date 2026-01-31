// =====================================================
// Dx Learning Ecosystem - Progress Tracker & Analytics
// =====================================================
// Tracks student progress, saves across sessions, enables instructor analytics
// Place this file in your CoachDx folder
// =====================================================

const DxProgressTracker = (function() {
    
    // =====================================================
    // CONFIGURATION
    // =====================================================
    
    const CONFIG = {
        storageKey: 'dxEcosystemProgress',
        analyticsKey: 'dxEcosystemAnalytics',
        studentInfoKey: 'dxStudentInfo',
        version: '1.0'
    };

    // =====================================================
    // STUDENT PROFILE MANAGEMENT
    // =====================================================
    
    function getStudentInfo() {
        const stored = localStorage.getItem(CONFIG.studentInfoKey);
        if (stored) return JSON.parse(stored);
        return null;
    }
    
    function setStudentInfo(info) {
        const studentInfo = {
            id: info.id || generateStudentId(),
            name: info.name || 'Anonymous',
            email: info.email || '',
            cohort: info.cohort || 'Default',
            program: info.program || 'General',
            school: info.school || 'Medical School',
            role: info.role || 'nursing',
            level: info.level || 'beginner',
            enrolledAt: info.enrolledAt || new Date().toISOString(),
            lastActive: new Date().toISOString()
        };
        localStorage.setItem(CONFIG.studentInfoKey, JSON.stringify(studentInfo));
        return studentInfo;
    }
    
    function generateStudentId() {
        return 'STU-' + Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 5);
    }
    
    function updateLastActive() {
        const info = getStudentInfo();
        if (info) {
            info.lastActive = new Date().toISOString();
            localStorage.setItem(CONFIG.studentInfoKey, JSON.stringify(info));
        }
    }

    // =====================================================
    // PROGRESS DATA MANAGEMENT
    // =====================================================
    
    function getProgressData() {
        const stored = localStorage.getItem(CONFIG.storageKey);
        if (stored) {
            const data = JSON.parse(stored);
            if (data.version === CONFIG.version) return data;
        }
        return createFreshProgressData();
    }
    
    function createFreshProgressData() {
        return {
            version: CONFIG.version,
            cases: {},           // Case completion data
            sbar: {},            // SBAR practice data
            modules: {},         // MechanismDx module data
            achievements: [],    // Earned achievements
            totalTimeMinutes: 0,
            sessionsCount: 0,
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString()
        };
    }
    
    function saveProgressData(data) {
        data.lastUpdated = new Date().toISOString();
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
        
        // Also save to analytics for instructor view
        saveToAnalytics(data);
    }

    // =====================================================
    // CASE PROGRESS TRACKING
    // =====================================================
    
    function recordCaseStart(caseId, caseTitle, category) {
        const data = getProgressData();
        const student = getStudentInfo();
        
        if (!data.cases[caseId]) {
            data.cases[caseId] = {
                caseId,
                caseTitle,
                category,
                attempts: [],
                bestScore: 0,
                completed: false,
                firstAttempt: new Date().toISOString()
            };
        }
        
        // Start new attempt
        const attempt = {
            attemptNumber: data.cases[caseId].attempts.length + 1,
            startedAt: new Date().toISOString(),
            completedAt: null,
            duration: 0,
            conceptsExplored: [],
            questionsAsked: 0,
            score: 0,
            sbarTriggered: false,
            sbarCompleted: false
        };
        
        data.cases[caseId].attempts.push(attempt);
        data.cases[caseId].currentAttemptIndex = data.cases[caseId].attempts.length - 1;
        
        saveProgressData(data);
        updateLastActive();
        
        return attempt;
    }
    
    function recordCaseProgress(caseId, progressData) {
        const data = getProgressData();
        
        if (!data.cases[caseId]) return;
        
        const currentIndex = data.cases[caseId].currentAttemptIndex;
        const attempt = data.cases[caseId].attempts[currentIndex];
        
        if (progressData.conceptsExplored) {
            attempt.conceptsExplored = progressData.conceptsExplored;
        }
        if (progressData.questionsAsked !== undefined) {
            attempt.questionsAsked = progressData.questionsAsked;
        }
        if (progressData.sbarTriggered) {
            attempt.sbarTriggered = true;
        }
        
        saveProgressData(data);
    }
    
    function recordCaseComplete(caseId, score, duration, conceptsExplored) {
        const data = getProgressData();
        
        if (!data.cases[caseId]) return;
        
        const currentIndex = data.cases[caseId].currentAttemptIndex;
        const attempt = data.cases[caseId].attempts[currentIndex];
        
        attempt.completedAt = new Date().toISOString();
        attempt.duration = duration;
        attempt.score = score;
        attempt.conceptsExplored = conceptsExplored || attempt.conceptsExplored;
        
        // Update best score
        if (score > data.cases[caseId].bestScore) {
            data.cases[caseId].bestScore = score;
        }
        
        data.cases[caseId].completed = true;
        data.cases[caseId].lastCompleted = new Date().toISOString();
        
        // Update total time
        data.totalTimeMinutes += Math.round(duration / 60);
        
        saveProgressData(data);
        checkAchievements(data);
        
        return attempt;
    }

    // =====================================================
    // SBAR PROGRESS TRACKING
    // =====================================================
    
    function recordSBARAttempt(scenarioType, data) {
        const progress = getProgressData();
        
        if (!progress.sbar[scenarioType]) {
            progress.sbar[scenarioType] = {
                attempts: [],
                bestScore: 0,
                completed: false
            };
        }
        
        const attempt = {
            attemptNumber: progress.sbar[scenarioType].attempts.length + 1,
            timestamp: new Date().toISOString(),
            score: data.score || 0,
            duration: data.duration || 0,
            verbalPractice: data.verbalPractice || false,
            verbalDuration: data.verbalDuration || 0,
            feedback: data.feedback || {},
            fromCase: data.fromCase || null
        };
        
        progress.sbar[scenarioType].attempts.push(attempt);
        
        if (attempt.score > progress.sbar[scenarioType].bestScore) {
            progress.sbar[scenarioType].bestScore = attempt.score;
        }
        
        progress.sbar[scenarioType].completed = true;
        
        saveProgressData(progress);
        
        return attempt;
    }

    // =====================================================
    // MODULE PROGRESS TRACKING (MechanismDx)
    // =====================================================
    
    function recordModuleProgress(moduleId, data) {
        const progress = getProgressData();
        
        if (!progress.modules[moduleId]) {
            progress.modules[moduleId] = {
                moduleId,
                sectionsCompleted: [],
                quizScores: [],
                completed: false,
                firstAccess: new Date().toISOString()
            };
        }
        
        if (data.sectionCompleted && !progress.modules[moduleId].sectionsCompleted.includes(data.sectionCompleted)) {
            progress.modules[moduleId].sectionsCompleted.push(data.sectionCompleted);
        }
        
        if (data.quizScore !== undefined) {
            progress.modules[moduleId].quizScores.push({
                score: data.quizScore,
                timestamp: new Date().toISOString()
            });
        }
        
        if (data.completed) {
            progress.modules[moduleId].completed = true;
            progress.modules[moduleId].completedAt = new Date().toISOString();
        }
        
        saveProgressData(progress);
    }

    // =====================================================
    // ACHIEVEMENTS SYSTEM
    // =====================================================
    
    const ACHIEVEMENTS = {
        'first-case': { name: 'First Steps', description: 'Complete your first case', icon: '🎯' },
        'five-cases': { name: 'Getting Started', description: 'Complete 5 cases', icon: '⭐' },
        'ten-cases': { name: 'Dedicated Learner', description: 'Complete 10 cases', icon: '🌟' },
        'twenty-five-cases': { name: 'Case Master', description: 'Complete 25 cases', icon: '🏆' },
        'first-sbar': { name: 'Clear Communicator', description: 'Complete your first SBAR', icon: '📞' },
        'five-sbars': { name: 'Communication Pro', description: 'Complete 5 SBARs', icon: '📱' },
        'verbal-practice': { name: 'Voice of Confidence', description: 'Complete verbal SBAR practice', icon: '🎤' },
        'perfect-sbar': { name: 'Perfect Call', description: 'Score 100% on an SBAR', icon: '💯' },
        'one-hour': { name: 'Committed', description: 'Spend 1 hour learning', icon: '⏰' },
        'five-hours': { name: 'Invested', description: 'Spend 5 hours learning', icon: '📚' },
        'all-concepts': { name: 'Thorough', description: 'Explore all concepts in a case', icon: '🔍' },
        'streak-3': { name: 'On a Roll', description: '3-day learning streak', icon: '🔥' },
        'streak-7': { name: 'Week Warrior', description: '7-day learning streak', icon: '💪' }
    };
    
    function checkAchievements(data) {
        const newAchievements = [];
        
        // Count completed cases
        const completedCases = Object.values(data.cases).filter(c => c.completed).length;
        const completedSBARs = Object.values(data.sbar).filter(s => s.completed).length;
        
        // Case achievements
        if (completedCases >= 1 && !hasAchievement(data, 'first-case')) {
            newAchievements.push('first-case');
        }
        if (completedCases >= 5 && !hasAchievement(data, 'five-cases')) {
            newAchievements.push('five-cases');
        }
        if (completedCases >= 10 && !hasAchievement(data, 'ten-cases')) {
            newAchievements.push('ten-cases');
        }
        if (completedCases >= 25 && !hasAchievement(data, 'twenty-five-cases')) {
            newAchievements.push('twenty-five-cases');
        }
        
        // SBAR achievements
        if (completedSBARs >= 1 && !hasAchievement(data, 'first-sbar')) {
            newAchievements.push('first-sbar');
        }
        if (completedSBARs >= 5 && !hasAchievement(data, 'five-sbars')) {
            newAchievements.push('five-sbars');
        }
        
        // Time achievements
        if (data.totalTimeMinutes >= 60 && !hasAchievement(data, 'one-hour')) {
            newAchievements.push('one-hour');
        }
        if (data.totalTimeMinutes >= 300 && !hasAchievement(data, 'five-hours')) {
            newAchievements.push('five-hours');
        }
        
        // Add new achievements
        newAchievements.forEach(id => {
            data.achievements.push({
                id,
                earnedAt: new Date().toISOString()
            });
        });
        
        if (newAchievements.length > 0) {
            saveProgressData(data);
            showAchievementNotification(newAchievements);
        }
        
        return newAchievements;
    }
    
    function hasAchievement(data, achievementId) {
        return data.achievements.some(a => a.id === achievementId);
    }
    
    function showAchievementNotification(achievementIds) {
        achievementIds.forEach(id => {
            const achievement = ACHIEVEMENTS[id];
            if (!achievement) return;
            
            const notification = document.createElement('div');
            notification.className = 'dx-achievement-notification';
            notification.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-text">
                    <div class="achievement-title">Achievement Unlocked!</div>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.description}</div>
                </div>
            `;
            
            // Add styles if not present
            if (!document.getElementById('dx-achievement-styles')) {
                const styles = document.createElement('style');
                styles.id = 'dx-achievement-styles';
                styles.textContent = `
                    .dx-achievement-notification {
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
                        color: white;
                        padding: 15px 20px;
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        box-shadow: 0 10px 40px rgba(245, 158, 11, 0.4);
                        z-index: 10001;
                        animation: slideIn 0.5s ease, fadeOut 0.5s ease 3.5s forwards;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    }
                    .achievement-icon { font-size: 2.5rem; }
                    .achievement-title { font-size: 0.75rem; opacity: 0.9; text-transform: uppercase; }
                    .achievement-name { font-size: 1.1rem; font-weight: 700; }
                    .achievement-desc { font-size: 0.85rem; opacity: 0.9; }
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes fadeOut {
                        from { opacity: 1; }
                        to { opacity: 0; }
                    }
                `;
                document.head.appendChild(styles);
            }
            
            document.body.appendChild(notification);
            
            setTimeout(() => notification.remove(), 4000);
        });
    }

    // =====================================================
    // ANALYTICS FOR INSTRUCTOR DASHBOARD
    // =====================================================
    
    function saveToAnalytics(progressData) {
        const student = getStudentInfo();
        if (!student) return;
        
        // Create analytics record
        const analyticsRecord = {
            studentId: student.id,
            studentName: student.name,
            email: student.email,
            cohort: student.cohort,
            program: student.program,
            school: student.school,
            role: student.role,
            level: student.level,
            
            // Summary stats
            casesCompleted: Object.values(progressData.cases).filter(c => c.completed).length,
            casesAttempted: Object.keys(progressData.cases).length,
            sbarsCompleted: Object.values(progressData.sbar).filter(s => s.completed).length,
            modulesCompleted: Object.values(progressData.modules).filter(m => m.completed).length,
            totalTimeMinutes: progressData.totalTimeMinutes,
            achievementsCount: progressData.achievements.length,
            
            // Detailed data
            caseDetails: progressData.cases,
            sbarDetails: progressData.sbar,
            moduleDetails: progressData.modules,
            achievements: progressData.achievements,
            
            // Timestamps
            enrolledAt: student.enrolledAt,
            lastActive: new Date().toISOString(),
            
            // Version
            version: CONFIG.version
        };
        
        // Save to localStorage (in real system, would POST to server)
        const allAnalytics = getAllAnalytics();
        allAnalytics[student.id] = analyticsRecord;
        localStorage.setItem(CONFIG.analyticsKey, JSON.stringify(allAnalytics));
    }
    
    function getAllAnalytics() {
        const stored = localStorage.getItem(CONFIG.analyticsKey);
        return stored ? JSON.parse(stored) : {};
    }
    
    // Export analytics as CSV for instructor
    function exportAnalyticsCSV() {
        const analytics = getAllAnalytics();
        const records = Object.values(analytics);
        
        if (records.length === 0) return '';
        
        const headers = [
            'Student ID', 'Name', 'Email', 'Cohort', 'Program', 'School', 'Role',
            'Cases Completed', 'Cases Attempted', 'SBARs Completed', 'Modules Completed',
            'Total Time (min)', 'Achievements', 'Enrolled', 'Last Active'
        ];
        
        const rows = records.map(r => [
            r.studentId,
            r.studentName,
            r.email,
            r.cohort,
            r.program,
            r.school,
            r.role,
            r.casesCompleted,
            r.casesAttempted,
            r.sbarsCompleted,
            r.modulesCompleted,
            r.totalTimeMinutes,
            r.achievementsCount,
            r.enrolledAt,
            r.lastActive
        ]);
        
        const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
        return csv;
    }
    
    function downloadAnalyticsCSV() {
        const csv = exportAnalyticsCSV();
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `dx-analytics-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // =====================================================
    // STATISTICS & SUMMARIES
    // =====================================================
    
    function getStudentStats() {
        const data = getProgressData();
        const student = getStudentInfo();
        
        const completedCases = Object.values(data.cases).filter(c => c.completed);
        const completedSBARs = Object.values(data.sbar).filter(s => s.completed);
        
        // Calculate average scores
        const avgCaseScore = completedCases.length > 0 
            ? completedCases.reduce((sum, c) => sum + c.bestScore, 0) / completedCases.length 
            : 0;
        
        const avgSBARScore = completedSBARs.length > 0
            ? completedSBARs.reduce((sum, s) => sum + s.bestScore, 0) / completedSBARs.length
            : 0;
        
        // Categories breakdown
        const categoryCounts = {};
        completedCases.forEach(c => {
            const cat = c.category || 'General';
            categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
        });
        
        return {
            student: student,
            cases: {
                completed: completedCases.length,
                attempted: Object.keys(data.cases).length,
                averageScore: Math.round(avgCaseScore),
                byCategory: categoryCounts
            },
            sbar: {
                completed: completedSBARs.length,
                averageScore: Math.round(avgSBARScore),
                verbalPracticeCount: Object.values(data.sbar)
                    .reduce((sum, s) => sum + s.attempts.filter(a => a.verbalPractice).length, 0)
            },
            modules: {
                completed: Object.values(data.modules).filter(m => m.completed).length,
                inProgress: Object.values(data.modules).filter(m => !m.completed).length
            },
            time: {
                totalMinutes: data.totalTimeMinutes,
                totalHours: Math.round(data.totalTimeMinutes / 60 * 10) / 10
            },
            achievements: data.achievements.map(a => ({
                ...a,
                ...ACHIEVEMENTS[a.id]
            })),
            lastUpdated: data.lastUpdated
        };
    }

    // =====================================================
    // STUDENT REGISTRATION UI
    // =====================================================
    
    function showRegistrationModal(onComplete) {
        const existing = document.getElementById('dxRegistrationModal');
        if (existing) existing.remove();
        
        const modal = document.createElement('div');
        modal.id = 'dxRegistrationModal';
        modal.innerHTML = `
            <style>
                #dxRegistrationModal {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10002;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                .reg-modal-content {
                    background: white;
                    border-radius: 16px;
                    padding: 30px;
                    width: 90%;
                    max-width: 500px;
                    max-height: 90vh;
                    overflow-y: auto;
                }
                .reg-modal-content h2 {
                    margin: 0 0 10px 0;
                    color: #1E3A5F;
                }
                .reg-modal-content p {
                    color: #6B7280;
                    margin-bottom: 20px;
                }
                .reg-form-group {
                    margin-bottom: 15px;
                }
                .reg-form-group label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 5px;
                    color: #374151;
                }
                .reg-form-group input,
                .reg-form-group select {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #D1D5DB;
                    border-radius: 8px;
                    font-size: 1rem;
                }
                .reg-form-group input:focus,
                .reg-form-group select:focus {
                    outline: none;
                    border-color: #2563EB;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
                }
                .reg-submit-btn {
                    width: 100%;
                    padding: 12px;
                    background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    margin-top: 10px;
                }
                .reg-submit-btn:hover {
                    background: linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%);
                }
                .reg-skip {
                    text-align: center;
                    margin-top: 15px;
                }
                .reg-skip a {
                    color: #6B7280;
                    text-decoration: none;
                    font-size: 0.9rem;
                }
                .reg-skip a:hover {
                    color: #374151;
                }
            </style>
            <div class="reg-modal-content">
                <h2>👋 Welcome to Dx Learning Ecosystem</h2>
                <p>Please tell us a bit about yourself so we can personalize your learning experience and track your progress.</p>
                
                <form id="dxRegForm">
                    <div class="reg-form-group">
                        <label>Your Name *</label>
                        <input type="text" id="regName" required placeholder="Enter your full name">
                    </div>
                    
                    <div class="reg-form-group">
                        <label>Email (optional)</label>
                        <input type="email" id="regEmail" placeholder="your.email@school.edu">
                    </div>
                    
                    <div class="reg-form-group">
                        <label>School *</label>
                        <select id="regSchool" required>
                            <option value="">-- Select School --</option>
                            <option value="Medical">Medical School</option>
                            <option value="Nursing">Medical School - College of Nursing</option>
                            <option value="PA">Medical School - PA Program</option>
                            <option value="Other">Medical School - Other Program</option>
                            <option value="Other">Other Institution</option>
                        </select>
                    </div>
                    
                    <div class="reg-form-group">
                        <label>Program *</label>
                        <select id="regProgram" required>
                            <option value="">-- Select Program --</option>
                            <option value="MD">MD/DO Student</option>
                            <option value="PA">PA Student</option>
                            <option value="NP">NP Student</option>
                            <option value="BSN">BSN Student</option>
                            <option value="ADN">ADN Student</option>
                            <option value="Paramedic">Paramedic Student</option>
                            <option value="EMT">EMT Student</option>
                            <option value="RT">Respiratory Therapy Student</option>
                            <option value="Resident">Resident Physician</option>
                            <option value="RN">Practicing RN</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    
                    <div class="reg-form-group">
                        <label>Cohort/Class (e.g., "Class of 2026", "Spring 2026")</label>
                        <input type="text" id="regCohort" placeholder="e.g., Class of 2026">
                    </div>
                    
                    <div class="reg-form-group">
                        <label>Student ID (optional - for research study)</label>
                        <input type="text" id="regStudentId" placeholder="Your student ID number">
                    </div>
                    
                    <button type="submit" class="reg-submit-btn">Start Learning →</button>
                </form>
                
                <div class="reg-skip">
                    <a href="#" id="regSkip">Skip for now (progress won't be tracked)</a>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Handle form submission
        document.getElementById('dxRegForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const studentInfo = {
                name: document.getElementById('regName').value,
                email: document.getElementById('regEmail').value,
                school: document.getElementById('regSchool').value,
                program: document.getElementById('regProgram').value,
                cohort: document.getElementById('regCohort').value || 'Default',
                id: document.getElementById('regStudentId').value || generateStudentId()
            };
            
            setStudentInfo(studentInfo);
            modal.remove();
            
            if (onComplete) onComplete(studentInfo);
        });
        
        // Handle skip
        document.getElementById('regSkip').addEventListener('click', (e) => {
            e.preventDefault();
            modal.remove();
            if (onComplete) onComplete(null);
        });
    }
    
    function ensureStudentRegistered(callback) {
        const student = getStudentInfo();
        if (student) {
            updateLastActive();
            if (callback) callback(student);
        } else {
            showRegistrationModal(callback);
        }
    }

    // =====================================================
    // PUBLIC INTERFACE
    // =====================================================
    
    return {
        // Student profile
        getStudentInfo,
        setStudentInfo,
        ensureStudentRegistered,
        showRegistrationModal,
        
        // Progress tracking
        getProgressData,
        recordCaseStart,
        recordCaseProgress,
        recordCaseComplete,
        recordSBARAttempt,
        recordModuleProgress,
        
        // Statistics
        getStudentStats,
        
        // Achievements
        ACHIEVEMENTS,
        checkAchievements,
        
        // Analytics (for instructor dashboard)
        getAllAnalytics,
        exportAnalyticsCSV,
        downloadAnalyticsCSV,
        
        // Utilities
        updateLastActive
    };
})();

// Make globally available
window.DxProgressTracker = DxProgressTracker;
