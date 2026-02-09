/**
 * DxSuite Auth Guard
 * ==================
 * Centralized authentication guard for all ReasonDx pages.
 * Drop this script into any page's <head> to enforce login.
 * 
 * Features:
 * - Checks localStorage for valid session
 * - Redirects to login page if not authenticated
 * - Preserves original URL for post-login redirect
 * - Supports both Supabase sessions and local sessions
 * 
 * Usage: <script src="[path]/auth/auth-guard.js"></script>
 */
(function() {
    'use strict';
    
    var AUTH_KEY = 'reasondx-user';
    var SUPABASE_KEY = 'sb-lpwbiqpojisqgezycupw-auth-token';
    
    function getAuthPath() {
        var depth = (location.pathname.match(/\//g) || []).length - 1;
        var prefix = '';
        for (var i = 0; i < depth; i++) prefix += '../';
        return prefix + 'auth/login.html';
    }
    
    function isAuthenticated() {
        try {
            // Check local session first
            var user = localStorage.getItem(AUTH_KEY);
            if (user) {
                var parsed = JSON.parse(user);
                if (parsed && parsed.email && parsed.name) return true;
            }
            // Check Supabase session
            var sb = localStorage.getItem(SUPABASE_KEY);
            if (sb) {
                var session = JSON.parse(sb);
                if (session && session.access_token) return true;
            }
        } catch(e) {
            console.warn('Auth check failed:', e);
        }
        return false;
    }
    
    function enforceAuth() {
        if (!isAuthenticated()) {
            sessionStorage.setItem('reasondx-redirect', location.href);
            location.replace(getAuthPath());
        }
    }
    
    // Export for programmatic use
    window.DxAuthGuard = {
        isAuthenticated: isAuthenticated,
        enforceAuth: enforceAuth,
        AUTH_KEY: AUTH_KEY,
        getUser: function() {
            try {
                var raw = localStorage.getItem(AUTH_KEY);
                return raw ? JSON.parse(raw) : null;
            } catch(e) { return null; }
        },
        signOut: function() {
            localStorage.removeItem(AUTH_KEY);
            localStorage.removeItem(SUPABASE_KEY);
            location.replace(getAuthPath());
        }
    };
    
    // Auto-enforce on load
    enforceAuth();
})();
