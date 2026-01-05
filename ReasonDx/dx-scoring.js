/**
 * Dx Platform - Unified Scoring System
 * Include this file in all platform pages: <script src="dx-scoring.js"></script>
 */
const DxScoring = {
    KEYS: {
        REASON_XP: 'dx_reason_xp', REASON_CASES: 'dx_reason_cases', REASON_CORRECT: 'dx_reason_correct', REASON_TOTAL: 'dx_reason_total',
        MECH_XP: 'dx_mech_xp', MECH_MCQS: 'dx_mech_mcqs', MECH_CORRECT: 'dx_mech_correct', MECH_CHALLENGES: 'dx_mech_challenges', MECH_MODULES: 'dx_mech_modules',
        COACH_XP: 'dx_coach_xp', COACH_SESSIONS: 'dx_coach_sessions', COACH_MASTERED: 'dx_coach_mastered',
        STREAK: 'dx_streak', LAST_ACTIVE: 'dx_last_active', ACHIEVEMENTS: 'dx_achievements', ACTIVITY_LOG: 'dx_activity_log'
    },
    XP: { REASON_CASE: 50, REASON_PERFECT: 100, MECH_MCQ: 10, MECH_MODULE: 50, MECH_PERFECT: 100, MECH_CHALLENGE: 25, COACH_SESSION: 50, COACH_MASTERY: 100 },
    
    get(key, def = 0) { const v = localStorage.getItem(key); if (v === null) return def; try { return JSON.parse(v); } catch { return v; } },
    set(key, val) { localStorage.setItem(key, JSON.stringify(val)); },
    
    getReasonXP() { return this.get(this.KEYS.REASON_XP, 0); },
    getMechXP() { return this.get(this.KEYS.MECH_XP, 0); },
    getCoachXP() { return this.get(this.KEYS.COACH_XP, 0); },
    getTotalXP() { return this.getReasonXP() + this.getMechXP() + this.getCoachXP(); },
    getLevel() { return Math.floor(this.getTotalXP() / 500) + 1; },
    getLevelProgress() { const t = this.getTotalXP(), l = this.getLevel(), c = (l - 1) * 500; return { current: t - c, needed: 500, percent: ((t - c) / 500) * 100 }; },
    getLevelTitle(l) { if (l >= 25) return 'Master Diagnostician'; if (l >= 20) return 'Expert Clinician'; if (l >= 15) return 'Advanced Diagnostician'; if (l >= 10) return 'Clinical Reasoner'; if (l >= 5) return 'Emerging Clinician'; return 'Medical Student'; },
    getStreak() { return this.get(this.KEYS.STREAK, 0); },
    
    addReasonXP(amt, act = 'ReasonDx') { const c = this.getReasonXP(); this.set(this.KEYS.REASON_XP, c + amt); this.logActivity('reason', act, amt); this.updateStreak(); this.checkAchievements(); return c + amt; },
    addMechXP(amt, act = 'MechanismDx') { const c = this.getMechXP(); this.set(this.KEYS.MECH_XP, c + amt); this.logActivity('mech', act, amt); this.updateStreak(); this.checkAchievements(); return c + amt; },
    addCoachXP(amt, act = 'CoachDx') { const c = this.getCoachXP(); this.set(this.KEYS.COACH_XP, c + amt); this.logActivity('coach', act, amt); this.updateStreak(); this.checkAchievements(); return c + amt; },
    
    incrementStat(key, amt = 1) { const c = this.get(key, 0); this.set(key, c + amt); return c + amt; },
    
    recordReasonCase(correct, total) {
        this.incrementStat(this.KEYS.REASON_CASES); this.incrementStat(this.KEYS.REASON_CORRECT, correct); this.incrementStat(this.KEYS.REASON_TOTAL, total);
        const xp = correct === total ? this.XP.REASON_PERFECT : this.XP.REASON_CASE;
        this.addReasonXP(xp, `Completed case (${correct}/${total})`);
        if (correct === total) this.unlockAchievement('perfect_case');
        if (this.get(this.KEYS.REASON_CASES) === 1) this.unlockAchievement('first_case');
        if (this.get(this.KEYS.REASON_CASES) >= 10) this.unlockAchievement('cases_10');
        if (this.get(this.KEYS.REASON_CASES) >= 50) this.unlockAchievement('cases_50');
    },
    getReasonAccuracy() { const c = this.get(this.KEYS.REASON_CORRECT, 0), t = this.get(this.KEYS.REASON_TOTAL, 0); return t > 0 ? Math.round((c / t) * 100) : 0; },
    
    recordMechMCQ(isCorrect) {
        this.incrementStat(this.KEYS.MECH_MCQS);
        if (isCorrect) { this.incrementStat(this.KEYS.MECH_CORRECT); this.addMechXP(this.XP.MECH_MCQ, 'Correct MCQ'); }
        if (this.get(this.KEYS.MECH_CORRECT, 0) >= 100) this.unlockAchievement('mcqs_100');
    },
    recordMechModule(score, total) {
        this.incrementStat(this.KEYS.MECH_MODULES);
        const xp = score === total ? this.XP.MECH_PERFECT : this.XP.MECH_MODULE;
        this.addMechXP(xp, `Module complete (${score}/${total})`);
        if (score === total) this.unlockAchievement('perfect_module');
        if (this.get(this.KEYS.MECH_MODULES) === 1) this.unlockAchievement('first_module');
    },
    recordMechChallenge() { this.incrementStat(this.KEYS.MECH_CHALLENGES); this.addMechXP(this.XP.MECH_CHALLENGE, 'Challenge complete'); },
    getMechAccuracy() { const c = this.get(this.KEYS.MECH_CORRECT, 0), t = this.get(this.KEYS.MECH_MCQS, 0); return t > 0 ? Math.round((c / t) * 100) : 0; },
    
    recordCoachSession() {
        this.incrementStat(this.KEYS.COACH_SESSIONS); this.addCoachXP(this.XP.COACH_SESSION, 'Session complete');
        if (this.get(this.KEYS.COACH_SESSIONS) === 1) this.unlockAchievement('first_session');
        if (this.get(this.KEYS.COACH_SESSIONS) >= 10) this.unlockAchievement('sessions_10');
    },
    recordCoachMastery(name) { this.incrementStat(this.KEYS.COACH_MASTERED); this.addCoachXP(this.XP.COACH_MASTERY, `Mastered: ${name}`); },
    
    updateStreak() {
        const today = new Date().toDateString(), last = this.get(this.KEYS.LAST_ACTIVE, '');
        if (last === today) return;
        const y = new Date(); y.setDate(y.getDate() - 1);
        if (last === y.toDateString()) { const n = this.getStreak() + 1; this.set(this.KEYS.STREAK, n); if (n === 7) this.unlockAchievement('streak_7'); if (n === 30) this.unlockAchievement('streak_30'); }
        else if (last !== '') { this.set(this.KEYS.STREAK, 1); }
        else { this.set(this.KEYS.STREAK, 1); }
        this.set(this.KEYS.LAST_ACTIVE, today);
    },
    
    getUnlockedAchievements() { return this.get(this.KEYS.ACHIEVEMENTS, []); },
    unlockAchievement(id) {
        const u = this.getUnlockedAchievements(); if (u.includes(id)) return false;
        u.push(id); this.set(this.KEYS.ACHIEVEMENTS, u);
        this.logActivity('achievement', `Earned: ${id}`, 0);
        if (this.getReasonXP() > 0 && this.getMechXP() > 0 && this.getCoachXP() > 0 && !u.includes('cross_platform')) this.unlockAchievement('cross_platform');
        return true;
    },
    checkAchievements() {
        const l = this.getLevel();
        if (l >= 10) this.unlockAchievement('level_10');
        if (l >= 20) this.unlockAchievement('level_20');
        if (this.getReasonXP() > 0 && this.getMechXP() > 0 && this.getCoachXP() > 0) this.unlockAchievement('cross_platform');
    },
    
    logActivity(platform, desc, xp) { const log = this.get(this.KEYS.ACTIVITY_LOG, []); log.unshift({ platform, description: desc, xp, timestamp: Date.now() }); this.set(this.KEYS.ACTIVITY_LOG, log.slice(0, 50)); },
    getRecentActivity(count = 10) { return this.get(this.KEYS.ACTIVITY_LOG, []).slice(0, count); },
    
    getSummary() {
        return {
            totalXP: this.getTotalXP(), level: this.getLevel(), levelTitle: this.getLevelTitle(this.getLevel()), levelProgress: this.getLevelProgress(), streak: this.getStreak(),
            platforms: {
                reason: { xp: this.getReasonXP(), cases: this.get(this.KEYS.REASON_CASES, 0), accuracy: this.getReasonAccuracy() },
                mech: { xp: this.getMechXP(), mcqs: this.get(this.KEYS.MECH_MCQS, 0), accuracy: this.getMechAccuracy(), challenges: this.get(this.KEYS.MECH_CHALLENGES, 0), modules: this.get(this.KEYS.MECH_MODULES, 0) },
                coach: { xp: this.getCoachXP(), sessions: this.get(this.KEYS.COACH_SESSIONS, 0), mastered: this.get(this.KEYS.COACH_MASTERED, 0) }
            },
            achievements: this.getUnlockedAchievements(), recentActivity: this.getRecentActivity(5)
        };
    },
    
    resetAll() { Object.values(this.KEYS).forEach(k => localStorage.removeItem(k)); },
    loadDemoData() {
        this.set(this.KEYS.REASON_XP, 1850); this.set(this.KEYS.REASON_CASES, 23); this.set(this.KEYS.REASON_CORRECT, 72); this.set(this.KEYS.REASON_TOTAL, 92);
        this.set(this.KEYS.MECH_XP, 1400); this.set(this.KEYS.MECH_MCQS, 87); this.set(this.KEYS.MECH_CORRECT, 63); this.set(this.KEYS.MECH_CHALLENGES, 15); this.set(this.KEYS.MECH_MODULES, 8);
        this.set(this.KEYS.COACH_XP, 1000); this.set(this.KEYS.COACH_SESSIONS, 12); this.set(this.KEYS.COACH_MASTERED, 8);
        this.set(this.KEYS.STREAK, 7); this.set(this.KEYS.LAST_ACTIVE, new Date().toDateString());
        this.set(this.KEYS.ACHIEVEMENTS, ['first_case', 'first_module', 'first_session', 'streak_7', 'cross_platform', 'level_10', 'perfect_module', 'well_calibrated']);
        this.set(this.KEYS.ACTIVITY_LOG, [
            { platform: 'reason', description: 'Completed Chest Pain case', xp: 80, timestamp: Date.now() - 7200000 },
            { platform: 'mech', description: 'Finished Stroke Module', xp: 120, timestamp: Date.now() - 86400000 },
            { platform: 'coach', description: 'Mastered: DVT Case', xp: 100, timestamp: Date.now() - 90000000 },
            { platform: 'mech', description: 'Completed Pathway Challenge', xp: 50, timestamp: Date.now() - 172800000 },
            { platform: 'achievement', description: 'Earned: Well Calibrated', xp: 200, timestamp: Date.now() - 259200000 }
        ]);
    }
};
document.addEventListener('DOMContentLoaded', () => { DxScoring.updateStreak(); });
window.DxScoring = DxScoring;
