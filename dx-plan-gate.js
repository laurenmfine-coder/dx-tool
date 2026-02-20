/**
 * ReasonDx Plan Gating System
 * ============================
 * Enforces Free vs Pro content limits across the platform.
 * 
 * FREE TIER LIMITS:
 *  - 5 unique learning modules (MechanismDx)
 *  - 3 clinical cases per week (resets every 7 days)
 *  - 20 board-style MCQs total
 *  - No deep dive content
 *  - No AI Tutor
 *  - All clinical calculators: allowed
 *  - Basic progress tracking: allowed
 * 
 * PRO TIER: Unlimited everything
 * 
 * Usage:
 *   <script src="dx-plan-gate.js"></script>
 *   Then call DxPlanGate methods from any page.
 */
(function() {
    'use strict';

    var STORAGE_KEY = 'reasondx-plan-usage';
    var USER_KEY = 'reasondx-user';

    var LIMITS = {
        modules: 5,        // 5 unique modules total
        casesPerWeek: 3,   // 3 cases per rolling 7-day window
        mcqs: 20,          // 20 board-prep MCQs total
        deepDives: 0,      // No deep dives on free
        aiTutor: 0         // No AI tutor on free
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

            // Check for active Pro trial (from referral rewards)
            if (user.proTrialExpires) {
                var expiry = new Date(user.proTrialExpires);
                if (expiry > new Date()) return 'pro';
            }

            return (user.plan === 'pro') ? 'pro' : 'free';
        } catch(e) {
            return 'free';
        }
    }

    function isPro() {
        return getUserPlan() === 'pro';
    }

    // ============================================
    // USAGE TRACKING
    // ============================================
    function getUsage() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return createFreshUsage();
            var usage = JSON.parse(raw);
            // Clean expired weekly cases
            usage.cases = cleanWeeklyCases(usage.cases || []);
            return usage;
        } catch(e) {
            return createFreshUsage();
        }
    }

    function createFreshUsage() {
        return {
            modules: [],       // Array of module IDs accessed
            cases: [],         // Array of {id, timestamp} for weekly tracking
            mcqsAnswered: 0,   // Total MCQs answered
            deepDives: [],     // Deep dive IDs accessed
            firstAccess: new Date().toISOString()
        };
    }

    function saveUsage(usage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
    }

    function cleanWeeklyCases(cases) {
        var oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        return cases.filter(function(c) {
            return c.timestamp > oneWeekAgo;
        });
    }

    // ============================================
    // ACCESS CHECKS
    // ============================================

    /**
     * Check if user can access content of a given type.
     * @param {string} type - 'module', 'case', 'mcq', 'deepDive', 'aiTutor', 'calculator'
     * @param {string} contentId - optional unique ID for the content
     * @returns {object} { allowed: bool, reason: string, current: number, limit: number }
     */
    function checkAccess(type, contentId) {
        // Pro users always have access
        if (isPro()) return { allowed: true };

        var usage = getUsage();

        switch(type) {
            case 'module':
                // Already accessed this module? Allow re-access
                if (contentId && usage.modules.indexOf(contentId) !== -1) {
                    return { allowed: true, revisit: true };
                }
                var moduleCount = usage.modules.length;
                if (moduleCount >= LIMITS.modules) {
                    return {
                        allowed: false,
                        reason: 'You\'ve reached your free limit of ' + LIMITS.modules + ' learning modules.',
                        current: moduleCount,
                        limit: LIMITS.modules,
                        type: 'module'
                    };
                }
                return { allowed: true, current: moduleCount, limit: LIMITS.modules };

            case 'case':
                // Already accessed this case this week? Allow re-access
                var thisWeekCases = cleanWeeklyCases(usage.cases);
                var caseIds = thisWeekCases.map(function(c) { return c.id; });
                if (contentId && caseIds.indexOf(contentId) !== -1) {
                    return { allowed: true, revisit: true };
                }
                var uniqueThisWeek = [];
                caseIds.forEach(function(id) {
                    if (uniqueThisWeek.indexOf(id) === -1) uniqueThisWeek.push(id);
                });
                if (uniqueThisWeek.length >= LIMITS.casesPerWeek) {
                    return {
                        allowed: false,
                        reason: 'You\'ve used your ' + LIMITS.casesPerWeek + ' free cases this week. Resets in ' + getDaysUntilReset(thisWeekCases) + ' days.',
                        current: uniqueThisWeek.length,
                        limit: LIMITS.casesPerWeek,
                        type: 'case'
                    };
                }
                return { allowed: true, current: uniqueThisWeek.length, limit: LIMITS.casesPerWeek };

            case 'mcq':
                if (usage.mcqsAnswered >= LIMITS.mcqs) {
                    return {
                        allowed: false,
                        reason: 'You\'ve answered your ' + LIMITS.mcqs + ' free board-prep questions.',
                        current: usage.mcqsAnswered,
                        limit: LIMITS.mcqs,
                        type: 'mcq'
                    };
                }
                return { allowed: true, current: usage.mcqsAnswered, limit: LIMITS.mcqs };

            case 'deepDive':
                return {
                    allowed: false,
                    reason: 'Deep dive content is available with Pro.',
                    type: 'deepDive'
                };

            case 'aiTutor':
                return {
                    allowed: false,
                    reason: 'AI Tutor is available with Pro.',
                    type: 'aiTutor'
                };

            case 'simRoom':
                // Free users can access SimRoom with patient + attending only
                // Pro unlocks: all 6 characters, multiplayer, voice, instructor mode
                return {
                    allowed: true,
                    proOnly: {
                        allCharacters: false,
                        multiplayer: false,
                        voice: false,
                        instructorMode: false,
                        transcriptExport: false
                    },
                    type: 'simRoom'
                };

            case 'simRoomPro':
                // Gate check for Pro-only SimRoom features
                return {
                    allowed: false,
                    reason: 'Full SimRoomDx (all characters, multiplayer, voice) is available with Pro.',
                    type: 'simRoomPro'
                };

            case 'calculator':
            case 'progress':
                return { allowed: true };

            default:
                return { allowed: true };
        }
    }

    function getDaysUntilReset(cases) {
        if (!cases || cases.length === 0) return 7;
        var oldest = Math.min.apply(null, cases.map(function(c) { return c.timestamp; }));
        var resetTime = oldest + (7 * 24 * 60 * 60 * 1000);
        var daysLeft = Math.ceil((resetTime - Date.now()) / (24 * 60 * 60 * 1000));
        return Math.max(1, daysLeft);
    }

    /**
     * Record that user accessed content.
     * Call AFTER confirming access is allowed.
     */
    function trackUsage(type, contentId) {
        if (isPro()) return; // Don't track for pro users

        var usage = getUsage();

        switch(type) {
            case 'module':
                if (contentId && usage.modules.indexOf(contentId) === -1) {
                    usage.modules.push(contentId);
                }
                break;
            case 'case':
                if (contentId) {
                    usage.cases.push({ id: contentId, timestamp: Date.now() });
                }
                break;
            case 'mcq':
                usage.mcqsAnswered = (usage.mcqsAnswered || 0) + 1;
                break;
            case 'deepDive':
                if (contentId && usage.deepDives.indexOf(contentId) === -1) {
                    usage.deepDives.push(contentId);
                }
                break;
        }

        saveUsage(usage);
    }

    // ============================================
    // UPGRADE MODAL
    // ============================================
    function showUpgradeModal(result) {
        // Remove existing modal if any
        var existing = document.getElementById('dxUpgradeModal');
        if (existing) existing.remove();

        var reason = (result && result.reason) || 'This content requires a Pro subscription.';
        var usageBar = '';
        if (result && result.current !== undefined && result.limit !== undefined) {
            var pct = Math.min(100, Math.round((result.current / result.limit) * 100));
            usageBar = '<div style="margin:16px 0 8px;"><div style="background:#e2e8f0;border-radius:6px;height:8px;overflow:hidden;"><div style="background:#2874A6;height:100%;width:' + pct + '%;border-radius:6px;transition:width 0.3s;"></div></div><div style="font-size:12px;color:#94a3b8;margin-top:4px;">' + result.current + ' of ' + result.limit + ' used</div></div>';
        }

        var modal = document.createElement('div');
        modal.id = 'dxUpgradeModal';
        modal.innerHTML = '<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;" onclick="if(event.target===this)this.remove()">' +
            '<div style="background:white;border-radius:20px;max-width:440px;width:100%;padding:40px 32px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.15);position:relative;">' +
                '<button onclick="this.closest(\'#dxUpgradeModal\').remove()" style="position:absolute;top:16px;right:16px;background:none;border:none;font-size:24px;color:#94a3b8;cursor:pointer;line-height:1;">&times;</button>' +
                '<div style="width:56px;height:56px;border-radius:50%;background:#f0f7fc;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;"><svg width="24" height="24" fill="none" stroke="#2874A6" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>' +
                '<h3 style="font-size:20px;color:#1e3a5f;margin-bottom:8px;font-weight:700;">Upgrade to Pro</h3>' +
                '<p style="font-size:15px;color:#64748b;line-height:1.5;margin-bottom:4px;">' + reason + '</p>' +
                usageBar +
                '<p style="font-size:14px;color:#475569;margin:16px 0;">Pro gives you unlimited access to all 316 topics, 615 MCQs, 320+ cases, AI Tutor, deep dives, and more.</p>' +
                '<a href="' + getRegisterPath() + '" style="display:inline-block;padding:14px 36px;background:#2874A6;color:white;border-radius:28px;font-size:15px;font-weight:600;text-decoration:none;letter-spacing:0.3px;margin-bottom:12px;">Upgrade to Pro — $14.99/mo</a>' +
                '<div style="font-size:13px;color:#94a3b8;">or $99/year (save 45%)</div>' +
            '</div>' +
        '</div>';

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
    /**
     * Call on content pages to auto-gate based on URL pattern.
     * Detects page type from the URL and gates accordingly.
     */
    function autoGate() {
        if (isPro()) return;

        var path = location.pathname.toLowerCase();
        var page = path.split('/').pop().replace('.html', '');
        var result;

        if (path.indexOf('/modules/') !== -1) {
            result = checkAccess('module', page);
            if (result.allowed && !result.revisit) {
                trackUsage('module', page);
            }
        } else if (path.indexOf('/cases/') !== -1 || path.indexOf('adventure') !== -1) {
            result = checkAccess('case', page);
            if (result.allowed && !result.revisit) {
                trackUsage('case', page);
            }
        } else if (path.indexOf('/topics/') !== -1) {
            // Topics are informational — always allowed
            return;
        } else if (path.indexOf('deep-dive') !== -1) {
            result = checkAccess('deepDive', page);
        } else if (path.indexOf('board-prep') !== -1) {
            // Board prep gating handled within board-prep.html itself
            return;
        } else if (path.indexOf('ai-trainer') !== -1 || path.indexOf('mentor-chat') !== -1) {
            result = checkAccess('aiTutor');
        } else if (path.indexOf('simroomdx') !== -1 || path.indexOf('sim-room') !== -1) {
            result = checkAccess('simRoom');
            // SimRoom itself is allowed on free; Pro features gated within the page
        }

        if (result && !result.allowed) {
            showUpgradeModal(result);
            // Blur the page content behind the modal
            var main = document.querySelector('main') || document.querySelector('.container') || document.body.firstElementChild;
            if (main && main !== document.body) {
                main.style.filter = 'blur(4px)';
                main.style.pointerEvents = 'none';
                main.style.userSelect = 'none';
            }
        }
    }

    // ============================================
    // USAGE SUMMARY (for dashboard / UI display)
    // ============================================
    function getUsageSummary() {
        if (isPro()) {
            return { plan: 'pro', unlimited: true };
        }
        var usage = getUsage();
        var weekCases = cleanWeeklyCases(usage.cases);
        var uniqueCaseIds = [];
        weekCases.forEach(function(c) {
            if (uniqueCaseIds.indexOf(c.id) === -1) uniqueCaseIds.push(c.id);
        });

        return {
            plan: 'free',
            modules: { used: usage.modules.length, limit: LIMITS.modules },
            cases: { used: uniqueCaseIds.length, limit: LIMITS.casesPerWeek },
            mcqs: { used: usage.mcqsAnswered || 0, limit: LIMITS.mcqs },
            deepDives: { allowed: false },
            aiTutor: { allowed: false }
        };
    }

    // ============================================
    // LOCK BADGE HELPER
    // ============================================
    /**
     * Returns HTML for a small lock icon to overlay on gated content cards.
     */
    function lockBadge() {
        return '<span style="display:inline-flex;align-items:center;gap:3px;background:#2874A6;color:white;font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;letter-spacing:0.3px;"><svg width="10" height="10" fill="white" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="white" stroke-width="2"/></svg>PRO</span>';
    }

    /**
     * Returns a usage indicator HTML string for hub pages.
     */
    function usagePill(type) {
        if (isPro()) return '';
        var summary = getUsageSummary();
        var data;
        switch(type) {
            case 'module': data = summary.modules; break;
            case 'case': data = summary.cases; break;
            case 'mcq': data = summary.mcqs; break;
            default: return '';
        }
        if (!data) return '';
        var color = data.used >= data.limit ? '#dc2626' : '#2874A6';
        return '<span style="font-size:11px;color:' + color + ';font-weight:600;">' + data.used + '/' + data.limit + ' used</span>';
    }

    // ============================================
    // SIMROOM FEATURE DETECTION
    // ============================================

    // The one free demo case — all other cases require Pro
    var SIMROOM_FREE_CASES = ['stemi-anterior'];

    /**
     * Returns which SimRoom features are available based on plan.
     * Use in simroomdx.html to show/hide characters, multiplayer, voice, etc.
     */
    function getSimRoomFeatures() {
        var pro = isPro();
        return {
            plan: pro ? 'pro' : 'free',
            maxCharacters: pro ? 6 : 2,           // Free: patient + attending only
            allowedCharacters: pro
                ? ['patient','attending','nurse','family','consultant','pharmacist']
                : ['patient','attending'],
            multiplayer: pro,
            voice: pro,
            hdVoice: pro,                          // ElevenLabs HD
            instructorMode: pro,
            transcriptExport: pro,
            customRooms: pro,
            clinicalEvents: pro,                   // Free gets auto-events only
            freeCases: SIMROOM_FREE_CASES,         // Case IDs available on free tier
            allCases: pro                          // Pro gets unlimited cases
        };
    }

    /**
     * Check if a specific SimRoom case is accessible.
     * @param {string} caseId - the case identifier
     * @returns {object} { allowed: bool, reason: string }
     */
    function checkSimRoomCase(caseId) {
        if (isPro()) return { allowed: true };
        if (SIMROOM_FREE_CASES.indexOf(caseId) !== -1) return { allowed: true, demo: true };
        return {
            allowed: false,
            reason: 'This simulation case requires Pro. Free users can practice with the Anterior STEMI demo case.',
            type: 'simRoomPro'
        };
    }

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
        getSimRoomFeatures: getSimRoomFeatures,
        checkSimRoomCase: checkSimRoomCase,
        SIMROOM_FREE_CASES: SIMROOM_FREE_CASES,
        LIMITS: LIMITS
    };

})();
