/**
 * ReasonDx Content Gatekeeper v1.0
 * Add this script to ALL content pages to enforce authentication and tier gating
 * 
 * Usage: Add to <head> of any HTML file:
 * <script src="/rdx-gate.js"></script>
 * 
 * Or for files in subdirectories:
 * <script src="../rdx-gate.js"></script>
 * <script src="../../rdx-gate.js"></script>
 */

(function() {
    'use strict';
    
    // ============================================================
    // CONFIGURATION - Edit these values as needed
    // ============================================================
    
    const CONFIG = {
        // Where to redirect unauthenticated users
        LOGIN_URL: '/auth/register.html',
        
        // Pages that DON'T require authentication (public pages)
        PUBLIC_PAGES: [
            '/index.html',
            '/',
            '/auth/register.html',
            '/auth/login.html',
            '/auth/quick-access.html',
            '/privacy.html',
            '/terms.html',
            '/about.html'
        ],
        
        // Pages that require PRO tier (regex patterns)
        PRO_ONLY_PATTERNS: [
            /deep-dive/i,
            /adventure.*expanded/i,
            /advanced/i,
            /fingerprint-dashboard/i,
            /analytics-dashboard/i,
            /coachdx.*mentor/i
        ],
        
        // Free tier case limit per month
        FREE_CASE_LIMIT: 3,
        
        // localStorage keys
        STORAGE_KEYS: {
            user: 'reasondx-user',
            tier: 'reasondx-tier',
            caseCount: 'reasondx-case-count',
            caseMonth: 'reasondx-case-month'
        }
    };
    
    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    
    function getCurrentPath() {
        return window.location.pathname.toLowerCase();
    }
    
    function isPublicPage() {
        const path = getCurrentPath();
        return CONFIG.PUBLIC_PAGES.some(p => 
            path === p.toLowerCase() || 
            path.endsWith(p.toLowerCase())
        );
    }
    
    function isProOnlyPage() {
        const path = getCurrentPath();
        return CONFIG.PRO_ONLY_PATTERNS.some(pattern => pattern.test(path));
    }
    
    function getUser() {
        try {
            const userData = localStorage.getItem(CONFIG.STORAGE_KEYS.user);
            return userData ? JSON.parse(userData) : null;
        } catch (e) {
            return null;
        }
    }
    
    function getUserTier() {
        const user = getUser();
        if (!user) return 'none';
        
        // Check all possible tier fields — auth-system.js writes to .plan
        const tier = user.plan || user.tier || user.subscription_tier 
                     || localStorage.getItem(CONFIG.STORAGE_KEYS.tier) || 'free';
        
        // Normalize: admin/premium/annual all count as pro
        if (tier === 'pro' || tier === 'admin' || tier === 'premium' || tier === 'annual') return 'pro';
        return tier;
    }
    
    function getCaseCount() {
        const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
        const storedMonth = localStorage.getItem(CONFIG.STORAGE_KEYS.caseMonth);
        
        // Reset count if new month
        if (storedMonth !== currentMonth) {
            localStorage.setItem(CONFIG.STORAGE_KEYS.caseMonth, currentMonth);
            localStorage.setItem(CONFIG.STORAGE_KEYS.caseCount, '0');
            return 0;
        }
        
        return parseInt(localStorage.getItem(CONFIG.STORAGE_KEYS.caseCount) || '0', 10);
    }
    
    function incrementCaseCount() {
        const count = getCaseCount() + 1;
        localStorage.setItem(CONFIG.STORAGE_KEYS.caseCount, count.toString());
        return count;
    }
    
    function isCasePage() {
        const path = getCurrentPath();
        return /\/cases\/|training\.html|crt|trainer/i.test(path);
    }
    
    function redirect(url, message) {
        // Store return URL so user can come back after login
        sessionStorage.setItem('reasondx-return-url', window.location.href);
        
        // Store message to show on login page
        if (message) {
            sessionStorage.setItem('reasondx-gate-message', message);
        }
        
        window.location.href = url;
    }
    
    function showUpgradeModal(message) {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.id = 'rdx-upgrade-modal';
        overlay.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            ">
                <div style="
                    background: white;
                    border-radius: 16px;
                    padding: 32px;
                    max-width: 420px;
                    margin: 20px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                ">
                    <div style="font-size: 48px; margin-bottom: 16px;">🔒</div>
                    <h2 style="margin: 0 0 12px; color: #1e293b; font-size: 22px;">
                        Pro Feature
                    </h2>
                    <p style="color: #64748b; margin: 0 0 24px; line-height: 1.6;">
                        ${message}
                    </p>
                    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                        <a href="/auth/register.html?plan=pro" style="
                            background: #2874A6;
                            color: white;
                            padding: 12px 24px;
                            border-radius: 8px;
                            text-decoration: none;
                            font-weight: 600;
                            transition: background 0.2s;
                        ">Upgrade to Pro</a>
                        <button onclick="this.closest('#rdx-upgrade-modal').remove(); history.back();" style="
                            background: #f1f5f9;
                            color: #475569;
                            padding: 12px 24px;
                            border-radius: 8px;
                            border: none;
                            font-weight: 600;
                            cursor: pointer;
                        ">Go Back</button>
                    </div>
                    <p style="margin: 20px 0 0; font-size: 13px; color: #94a3b8;">
                        Pro: $14.99/month or $99/year
                    </p>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    function showCaseLimitModal(used, limit) {
        const overlay = document.createElement('div');
        overlay.id = 'rdx-limit-modal';
        overlay.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            ">
                <div style="
                    background: white;
                    border-radius: 16px;
                    padding: 32px;
                    max-width: 420px;
                    margin: 20px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                ">
                    <div style="font-size: 48px; margin-bottom: 16px;">📊</div>
                    <h2 style="margin: 0 0 12px; color: #1e293b; font-size: 22px;">
                        Monthly Limit Reached
                    </h2>
                    <p style="color: #64748b; margin: 0 0 16px; line-height: 1.6;">
                        You've completed <strong>${used}</strong> of your <strong>${limit}</strong> free cases this month.
                    </p>
                    <p style="color: #64748b; margin: 0 0 24px; line-height: 1.6;">
                        Upgrade to Pro for unlimited cases, advanced analytics, and AI coaching.
                    </p>
                    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                        <a href="/auth/register.html?plan=pro" style="
                            background: #2874A6;
                            color: white;
                            padding: 12px 24px;
                            border-radius: 8px;
                            text-decoration: none;
                            font-weight: 600;
                        ">Upgrade to Pro</a>
                        <button onclick="this.closest('#rdx-limit-modal').remove(); history.back();" style="
                            background: #f1f5f9;
                            color: #475569;
                            padding: 12px 24px;
                            border-radius: 8px;
                            border: none;
                            font-weight: 600;
                            cursor: pointer;
                        ">Go Back</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    // ============================================================
    // MAIN GATE LOGIC
    // ============================================================
    
    function runGate() {
        // Skip gating for public pages
        if (isPublicPage()) {
            console.log('[RDX Gate] Public page, no auth required');
            return;
        }
        
        const user = getUser();
        const tier = getUserTier();
        
        // Check 1: Is user logged in?
        if (!user) {
            console.log('[RDX Gate] No user found, redirecting to login');
            redirect(CONFIG.LOGIN_URL, 'Please sign in to access this content.');
            return;
        }
        
        // Check 2: Is this a Pro-only page?
        if (isProOnlyPage() && tier !== 'pro' && tier !== 'premium' && tier !== 'admin') {
            console.log('[RDX Gate] Pro-only page, user tier:', tier);
            showUpgradeModal('This content is available exclusively for Pro members. Upgrade to unlock advanced cases, deep dives, and personalized coaching.');
            return;
        }
        
        // Check 3: Free tier case limit (only for case pages)
        if (isCasePage() && tier === 'free') {
            const caseCount = getCaseCount();
            if (caseCount >= CONFIG.FREE_CASE_LIMIT) {
                console.log('[RDX Gate] Free tier case limit reached:', caseCount);
                showCaseLimitModal(caseCount, CONFIG.FREE_CASE_LIMIT);
                return;
            }
            // Note: Don't increment here - let the case page do it when case is started
        }
        
        console.log('[RDX Gate] Access granted. User:', user.email, 'Tier:', tier);
    }
    
    // ============================================================
    // UTILITY EXPORTS (for use by other scripts)
    // ============================================================
    
    window.RDXGate = {
        getUser,
        getUserTier,
        getCaseCount,
        incrementCaseCount,
        showUpgradeModal,
        showCaseLimitModal,
        CONFIG
    };
    
    // ============================================================
    // RUN ON PAGE LOAD
    // ============================================================
    
    // Run immediately if DOM is ready, otherwise wait
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runGate);
    } else {
        runGate();
    }
    
})();
