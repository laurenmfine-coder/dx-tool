/**
 * DxSuite User Bar
 * ================
 * Shows logged-in user's name and account/sign-out controls.
 * Auto-injects into any existing <nav> on the page, or creates
 * a fixed top-right badge if no nav is found.
 *
 * Reads from localStorage 'reasondx-user' {email, name, plan, ...}
 * Usage: Drop <script src="dx-user-bar.js"></script> into any page.
 */
(function() {
    'use strict';

    var AUTH_KEY = 'reasondx-user';

    function getUser() {
        try {
            var raw = localStorage.getItem(AUTH_KEY);
            if (raw) {
                var u = JSON.parse(raw);
                if (u && u.email) return u;
            }
        } catch(e) {}
        return null;
    }

    function getRelativePath(target) {
        var depth = (location.pathname.match(/\//g) || []).length - 1;
        var prefix = '';
        for (var i = 0; i < depth; i++) prefix += '../';
        return prefix + target;
    }

    function getFirstName(fullName) {
        if (!fullName) return '';
        return fullName.split(' ')[0];
    }

    function getPlanBadge(plan) {
        if (!plan || plan === 'free') return '';
        var label = plan === 'admin' ? 'Admin' : plan === 'annual' ? 'Pro' : plan.charAt(0).toUpperCase() + plan.slice(1);
        return '<span class="dx-ub-badge">' + label + '</span>';
    }

    function handleSignOut() {
        // Set explicit flag for auth-system.js
        window._dxExplicitSignOut = true;
        localStorage.removeItem(AUTH_KEY);
        // Also try Supabase sign-out if DxAuth is available
        if (window.DxAuth && typeof window.DxAuth.signOut === 'function') {
            window.DxAuth.signOut().then(function() {
                window.location.href = getRelativePath('index.html');
            });
        } else {
            window.location.href = getRelativePath('index.html');
        }
    }

    function injectStyles() {
        if (document.getElementById('dx-user-bar-styles')) return;
        var style = document.createElement('style');
        style.id = 'dx-user-bar-styles';
        style.textContent = [
            '.dx-ub { display:flex; align-items:center; gap:8px; margin-left:auto; padding-left:16px; }',
            '.dx-ub-greeting { font-size:13px; color:#374151; font-weight:500; white-space:nowrap; }',
            '.dx-ub-name { font-weight:600; color:#059669; }',
            '.dx-ub-badge { font-size:10px; padding:2px 6px; border-radius:4px; background:#ecfdf5; color:#059669; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; margin-left:2px; }',
            '.dx-ub-btn { font-size:12px; padding:5px 10px; border-radius:6px; text-decoration:none; cursor:pointer; border:none; font-family:inherit; transition:all 0.15s; white-space:nowrap; }',
            '.dx-ub-account { background:#f1f5f9; color:#475569; }',
            '.dx-ub-account:hover { background:#e2e8f0; color:#1e293b; }',
            '.dx-ub-signout { background:transparent; color:#94a3b8; }',
            '.dx-ub-signout:hover { color:#ef4444; background:#fef2f2; }',
            '.dx-ub-signin { background:#059669; color:white; font-weight:600; padding:6px 14px; }',
            '.dx-ub-signin:hover { background:#047857; }',
            /* Floating mode (no nav) */
            '.dx-ub-float { position:fixed; top:12px; right:16px; z-index:9999; background:white; padding:6px 12px; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.12); border:1px solid #e5e7eb; }',
            /* Mobile */
            '@media(max-width:768px) { .dx-ub-greeting { display:none; } .dx-ub { gap:4px; } .dx-ub-float { top:8px; right:8px; } }'
        ].join('\n');
        document.head.appendChild(style);
    }

    function buildUserHTML(user) {
        var firstName = getFirstName(user.name || user.email.split('@')[0]);
        var badge = getPlanBadge(user.plan);
        return '<span class="dx-ub-greeting">Welcome, <span class="dx-ub-name">' + firstName + '</span>' + badge + '</span>'
             + '<a class="dx-ub-btn dx-ub-account" href="' + getRelativePath('auth/account.html') + '">Account</a>'
             + '<button class="dx-ub-btn dx-ub-signout" onclick="window._dxSignOut()">Sign Out</button>';
    }

    function buildGuestHTML() {
        return '<a class="dx-ub-btn dx-ub-signin" href="' + getRelativePath('auth/register.html') + '">Sign In</a>';
    }

    function render() {
        injectStyles();
        var user = getUser();
        var html = user ? buildUserHTML(user) : buildGuestHTML();

        // Expose sign-out globally
        window._dxSignOut = handleSignOut;

        // Strategy 1: Find existing nav and inject into it
        var navInner = document.querySelector('.nav-inner, .dx-nav-inner, nav .nav-links, .navbar-inner');
        if (navInner) {
            // Remove any existing user bar
            var existing = navInner.querySelector('.dx-ub');
            if (existing) existing.remove();

            var container = document.createElement('div');
            container.className = 'dx-ub';
            container.innerHTML = html;
            navInner.appendChild(container);
            return;
        }

        // Strategy 2: Find any nav element
        var nav = document.querySelector('nav');
        if (nav) {
            var existing2 = nav.querySelector('.dx-ub');
            if (existing2) existing2.remove();

            var container2 = document.createElement('div');
            container2.className = 'dx-ub';
            container2.style.cssText = 'margin-left:auto; padding-right:16px;';
            container2.innerHTML = html;
            // Append to the last flex/grid child
            var inner = nav.querySelector('div') || nav;
            inner.appendChild(container2);
            return;
        }

        // Strategy 3: Floating badge (no nav on page)
        var existingFloat = document.querySelector('.dx-ub-float');
        if (existingFloat) existingFloat.remove();

        var floater = document.createElement('div');
        floater.className = 'dx-ub dx-ub-float';
        floater.innerHTML = html;
        document.body.appendChild(floater);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }

    // Also re-render on auth change events
    window.addEventListener('dxsuite-auth-change', function() {
        setTimeout(render, 100);
    });

    // Expose for manual refresh
    window.DxUserBar = { render: render };
})();
