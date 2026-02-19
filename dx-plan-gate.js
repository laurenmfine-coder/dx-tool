/**
 * ReasonDx Plan Gating System — Launch Version
 * ==============================================
 * Enforces Free vs Pro content limits for the focused MVP launch.
 * 
 * FREE TIER LIMITS (Launch):
 *  - 3 CRT cases per month (resets on 1st of each month)
 *  - Introductory difficulty only
 *  - SBAR template view only (no AI-scored feedback)
 *  - CoachDx summary only (no full metacognitive debrief)
 *  - Last 3 sessions visible in history
 *  - Reasoning Fingerprint: locked
 *  - Exportable reports: not available
 *  - Basic completion stats: allowed
 * 
 * PRO TIER ($14.99/mo or $99/yr):
 *  - Unlimited CRT cases, all difficulty levels
 *  - Full interactive SBAR practice with AI scoring
 *  - Complete CoachDx debrief with personalized pattern analysis
 *  - Full session history
 *  - Reasoning Fingerprint (RPFS) visualization
 *  - Detailed trend analysis + exportable reports
 */
(function() {
    'use strict';

    var STORAGE_KEY = 'reasondx-plan-usage';
    var USER_KEY = 'reasondx-user';

    var LIMITS = {
        casesPerMonth: 3,
        sbarFeedback: false,
        coachFull: false,
        fingerprint: false,
        sessionHistory: 3,
        exportReports: false,
        difficultyLevels: ['introductory']
    };

    // ============================================
    // PLAN DETECTION
    // ============================================
    function getUserPlan() {
        try {
            var raw = localStorage.getItem(USER_KEY);
            if (!raw) return 'free';
            var user = JSON.parse(raw);
            if (!user) return 'free';
            if (user.proTrialExpires) {
                var expiry = new Date(user.proTrialExpires);
                if (expiry > new Date()) return 'pro';
            }
            return (user.plan === 'pro') ? 'pro' : 'free';
        } catch(e) { return 'free'; }
    }

    function isPro() { return getUserPlan() === 'pro'; }

    // ============================================
    // USAGE TRACKING
    // ============================================
    function getUsage() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return createFreshUsage();
            var usage = JSON.parse(raw);
            usage.cases = cleanMonthlyCases(usage.cases || []);
            return usage;
        } catch(e) { return createFreshUsage(); }
    }

    function createFreshUsage() {
        return {
            cases: [],
            sbarSessions: [],
            coachSessions: [],
            firstAccess: new Date().toISOString()
        };
    }

    function saveUsage(usage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
    }

    function cleanMonthlyCases(cases) {
        var now = new Date();
        var monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        return cases.filter(function(c) { return c.timestamp >= monthStart; });
    }

    function getDaysUntilMonthReset() {
        var now = new Date();
        var nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        return Math.ceil((nextMonth - now) / (24 * 60 * 60 * 1000));
    }

    // ============================================
    // ACCESS CHECKS
    // ============================================
    function checkAccess(type, contentId) {
        if (isPro()) return { allowed: true };
        var usage = getUsage();

        switch(type) {
            case 'case':
                var thisMonthCases = cleanMonthlyCases(usage.cases);
                var caseIds = thisMonthCases.map(function(c) { return c.id; });
                if (contentId && caseIds.indexOf(contentId) !== -1) {
                    return { allowed: true, revisit: true };
                }
                var uniqueThisMonth = [];
                caseIds.forEach(function(id) {
                    if (uniqueThisMonth.indexOf(id) === -1) uniqueThisMonth.push(id);
                });
                if (uniqueThisMonth.length >= LIMITS.casesPerMonth) {
                    return {
                        allowed: false,
                        reason: 'You\'ve used your ' + LIMITS.casesPerMonth + ' free cases this month. Resets in ' + getDaysUntilMonthReset() + ' days.',
                        current: uniqueThisMonth.length,
                        limit: LIMITS.casesPerMonth,
                        type: 'case'
                    };
                }
                return { allowed: true, current: uniqueThisMonth.length, limit: LIMITS.casesPerMonth };

            case 'sbarFeedback':
                return { allowed: false, reason: 'AI-scored SBAR feedback is available with Pro. Free users can view SBAR templates.', type: 'sbarFeedback' };

            case 'coachFull':
                return { allowed: false, reason: 'Full CoachDx debriefs with personalized pattern analysis are available with Pro.', type: 'coachFull' };

            case 'fingerprint':
                return { allowed: false, reason: 'Your Reasoning Fingerprint visualization is available with Pro.', type: 'fingerprint' };

            case 'export':
                return { allowed: false, reason: 'Exportable progress reports are available with Pro.', type: 'export' };

            case 'sessionHistory':
                return { allowed: true, limit: LIMITS.sessionHistory };

            case 'difficulty':
                return { allowed: true, levels: LIMITS.difficultyLevels };

            case 'calculator':
            case 'progress':
                return { allowed: true };

            default:
                return { allowed: true };
        }
    }

    function trackUsage(type, contentId) {
        if (isPro()) return;
        var usage = getUsage();
        switch(type) {
            case 'case':
                if (contentId) usage.cases.push({ id: contentId, timestamp: Date.now() });
                break;
            case 'sbar':
                if (contentId) usage.sbarSessions.push({ id: contentId, timestamp: Date.now() });
                break;
            case 'coach':
                if (contentId) usage.coachSessions.push({ id: contentId, timestamp: Date.now() });
                break;
        }
        saveUsage(usage);
    }

    // ============================================
    // UPGRADE MODAL
    // ============================================
    function showUpgradeModal(result) {
        var existing = document.getElementById('dxUpgradeModal');
        if (existing) existing.remove();

        var reason = (result && result.reason) || 'This feature requires a Pro subscription.';
        var usageBar = '';
        if (result && result.current !== undefined && result.limit !== undefined) {
            var pct = Math.min(100, Math.round((result.current / result.limit) * 100));
            usageBar = '<div style="margin:16px 0 8px;"><div style="background:#e2e8f0;border-radius:6px;height:8px;overflow:hidden;"><div style="background:#2874A6;height:100%;width:' + pct + '%;border-radius:6px;transition:width 0.3s;"></div></div><div style="font-size:12px;color:#94a3b8;margin-top:4px;">' + result.current + ' of ' + result.limit + ' used this month</div></div>';
        }

        var features =
            '<div style="text-align:left;margin:16px 0;padding:16px;background:#f8fafc;border-radius:12px;">' +
            '<div style="font-size:13px;font-weight:600;color:#1e3a5f;margin-bottom:10px;">Pro includes:</div>' +
            '<div style="font-size:13px;color:#475569;line-height:1.8;">' +
            '\u2713 Unlimited cases across all difficulty levels<br>' +
            '\u2713 AI-scored SBAR communication feedback<br>' +
            '\u2713 Full CoachDx metacognitive debriefs<br>' +
            '\u2713 Reasoning Fingerprint visualization<br>' +
            '\u2713 Complete session history & trend analysis<br>' +
            '\u2713 Exportable progress reports</div></div>';

        var modal = document.createElement('div');
        modal.id = 'dxUpgradeModal';
        modal.innerHTML = '<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;" onclick="if(event.target===this)this.remove()">' +
            '<div style="background:white;border-radius:20px;max-width:440px;width:100%;padding:40px 32px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.15);position:relative;">' +
                '<button onclick="this.closest(\'#dxUpgradeModal\').remove()" style="position:absolute;top:16px;right:16px;background:none;border:none;font-size:24px;color:#94a3b8;cursor:pointer;line-height:1;">&times;</button>' +
                '<div style="width:56px;height:56px;border-radius:50%;background:#f0f7fc;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;"><svg width="24" height="24" fill="none" stroke="#2874A6" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>' +
                '<h3 style="font-size:20px;color:#1e3a5f;margin-bottom:8px;font-weight:700;">Upgrade to Pro</h3>' +
                '<p style="font-size:15px;color:#64748b;line-height:1.5;margin-bottom:4px;">' + reason + '</p>' +
                usageBar + features +
                '<a href="' + getRegisterPath() + '" style="display:inline-block;padding:14px 36px;background:#2874A6;color:white;border-radius:28px;font-size:15px;font-weight:600;text-decoration:none;letter-spacing:0.3px;margin-bottom:12px;">Upgrade to Pro \u2014 $14.99/mo</a>' +
                '<div style="font-size:13px;color:#94a3b8;">or $99/year (save 45%)</div>' +
            '</div></div>';

        document.body.appendChild(modal);
    }

    function getRegisterPath() {
        var depth = (location.pathname.split('/').length) - 2;
        var prefix = '';
        for (var i = 0; i < depth; i++) prefix += '../';
        return prefix + 'auth/register.html';
    }

    // ============================================
    // PAGE-LEVEL AUTO-GATE
    // ============================================
    function autoGate() {
        if (isPro()) return;
        var path = location.pathname.toLowerCase();
        var page = path.split('/').pop().replace('.html', '');
        var result;

        if (path.indexOf('training') !== -1 || path.indexOf('/cases/') !== -1) {
            result = checkAccess('case', page);
            if (result.allowed && !result.revisit) trackUsage('case', page);
        } else if (path.indexOf('coachdx') !== -1 || path.indexOf('sbar') !== -1 || path.indexOf('consult') !== -1 || path.indexOf('dashboard') !== -1) {
            return; // Feature-level gating handled within page UI
        }

        if (result && !result.allowed) {
            showUpgradeModal(result);
            var main = document.querySelector('main') || document.querySelector('.container') || document.body.firstElementChild;
            if (main && main !== document.body) {
                main.style.filter = 'blur(4px)';
                main.style.pointerEvents = 'none';
                main.style.userSelect = 'none';
            }
        }
    }

    // ============================================
    // USAGE SUMMARY
    // ============================================
    function getUsageSummary() {
        if (isPro()) return { plan: 'pro', unlimited: true };
        var usage = getUsage();
        var monthCases = cleanMonthlyCases(usage.cases);
        var uniqueCaseIds = [];
        monthCases.forEach(function(c) { if (uniqueCaseIds.indexOf(c.id) === -1) uniqueCaseIds.push(c.id); });

        return {
            plan: 'free',
            cases: { used: uniqueCaseIds.length, limit: LIMITS.casesPerMonth, resetDays: getDaysUntilMonthReset() },
            sbarFeedback: { allowed: false },
            coachFull: { allowed: false },
            fingerprint: { allowed: false },
            sessionHistory: { limit: LIMITS.sessionHistory },
            exportReports: { allowed: false }
        };
    }

    // ============================================
    // HELPERS
    // ============================================
    function lockBadge() {
        return '<span style="display:inline-flex;align-items:center;gap:3px;background:#2874A6;color:white;font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;letter-spacing:0.3px;"><svg width="10" height="10" fill="white" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="white" stroke-width="2"/></svg>PRO</span>';
    }

    function usagePill(type) {
        if (isPro()) return '';
        var summary = getUsageSummary();
        if (type === 'case' && summary.cases) {
            var color = summary.cases.used >= summary.cases.limit ? '#dc2626' : '#2874A6';
            return '<span style="font-size:11px;color:' + color + ';font-weight:600;">' + summary.cases.used + '/' + summary.cases.limit + ' this month</span>';
        }
        return '';
    }

    // Feature gate convenience functions
    function canUseSbarFeedback() { return isPro(); }
    function canUseFullCoach() { return isPro(); }
    function canViewFingerprint() { return isPro(); }
    function canExportReports() { return isPro(); }
    function getSessionHistoryLimit() { return isPro() ? Infinity : LIMITS.sessionHistory; }
    function getAllowedDifficulties() { return isPro() ? ['introductory','intermediate','advanced'] : LIMITS.difficultyLevels; }

    // ============================================
    // EXPORT
    // ============================================
    window.DxPlanGate = {
        getUserPlan: getUserPlan,
        isPro: isPro,
        checkAccess: checkAccess,
        trackUsage: trackUsage,
        showUpgradeModal: showUpgradeModal,
        autoGate: autoGate,
        getUsage: getUsage,
        getUsageSummary: getUsageSummary,
        lockBadge: lockBadge,
        usagePill: usagePill,
        LIMITS: LIMITS,
        canUseSbarFeedback: canUseSbarFeedback,
        canUseFullCoach: canUseFullCoach,
        canViewFingerprint: canViewFingerprint,
        canExportReports: canExportReports,
        getSessionHistoryLimit: getSessionHistoryLimit,
        getAllowedDifficulties: getAllowedDifficulties
    };
})();
