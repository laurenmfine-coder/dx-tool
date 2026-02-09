/**
 * ReasonDx User Bar
 * Displays user info and quick settings at the top of pages
 */
(function() {
    // Prevent double init
    if (document.getElementById('dx-user-bar')) return;

    const AUTH_KEY = 'reasondx-user';

    function getUserData() {
        try {
            const raw = localStorage.getItem(AUTH_KEY);
            if (raw) {
                const user = JSON.parse(raw);
                if (user && user.email && user.name) return user;
            }
        } catch(e) {}
        return null;
    }

    function createBar() {
        const user = getUserData();
        if (!user) return; // No bar if not logged in

        const bar = document.createElement('div');
        bar.id = 'dx-user-bar';
        bar.style.cssText = `
            position: fixed; top: 0; right: 0; z-index: 10000;
            display: flex; align-items: center; gap: 12px;
            padding: 6px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-size: 0.8rem; color: rgba(255,255,255,0.7);
        `;

        const nameSpan = document.createElement('span');
        nameSpan.textContent = user.name || user.email;
        nameSpan.style.cssText = 'font-weight: 500; color: rgba(255,255,255,0.9);';

        const signOutBtn = document.createElement('button');
        signOutBtn.textContent = 'Sign Out';
        signOutBtn.style.cssText = `
            background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
            color: rgba(255,255,255,0.7); padding: 3px 10px; border-radius: 4px;
            font-size: 0.75rem; cursor: pointer; transition: all 0.2s;
        `;
        signOutBtn.onmouseenter = () => { signOutBtn.style.background = 'rgba(255,255,255,0.2)'; };
        signOutBtn.onmouseleave = () => { signOutBtn.style.background = 'rgba(255,255,255,0.1)'; };
        signOutBtn.onclick = () => {
            localStorage.removeItem(AUTH_KEY);
            if (window.DxAuth && window.DxAuth.signOut) {
                window.DxAuth.signOut().then(() => { window.location.href = 'auth/login.html'; });
            } else {
                window.location.href = 'auth/login.html';
            }
        };

        bar.appendChild(nameSpan);
        bar.appendChild(signOutBtn);
        document.body.appendChild(bar);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createBar);
    } else {
        createBar();
    }
})();
