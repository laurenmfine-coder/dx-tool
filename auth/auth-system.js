/**
 * ReasonDx Authentication System
 * Powered by Supabase
 */
(function() {
    // Prevent double initialization
    if (window.DxAuth) {
        console.log('DxAuth already initialized');
        return;
    }

    // ============================================
    // CONFIGURATION
    // ============================================
    const SUPABASE_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

    // Initialize Supabase client (with graceful fallback if CDN fails)
    let supabaseClient = null;
    let supabaseAvailable = false;
    try {
        if (window.supabase && window.supabase.createClient) {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            supabaseAvailable = true;
        } else {
            console.warn('DxAuth: Supabase SDK not loaded — auth features limited');
        }
    } catch(e) {
        console.warn('DxAuth: Supabase init failed —', e.message);
    }

    // ============================================
    // AUTH STATE MANAGEMENT
    // ============================================
    let currentUser = null;
    let userProfile = null;

    async function initAuth() {
        if (!supabaseAvailable) {
            // No Supabase — check if user has stored credentials from a previous session
            const stored = localStorage.getItem('reasondx-user');
            if (stored) {
                try {
                    const userData = JSON.parse(stored);
                    if (userData && userData.email) {
                        currentUser = { email: userData.email, id: userData.supabaseId || 'local' };
                        onAuthStateChange('SIGNED_IN', null);
                        return;
                    }
                } catch(e) {}
            }
            onAuthStateChange('SIGNED_OUT', null);
            return;
        }

        try {
            const { data: { session } } = await supabaseClient.auth.getSession();
            
            if (session) {
                currentUser = session.user;
                await loadUserProfile();
                onAuthStateChange('SIGNED_IN', session);
            } else {
                onAuthStateChange('SIGNED_OUT', null);
            }
            
            supabaseClient.auth.onAuthStateChange(async (event, session) => {
                currentUser = session?.user || null;
                if (currentUser) {
                    await loadUserProfile();
                } else {
                    userProfile = null;
                }
                onAuthStateChange(event, session);
            });
        } catch (error) {
            console.error('Auth init error:', error);
        }
    }

    async function loadUserProfile() {
        if (!currentUser) return null;
        if (!supabaseAvailable) return null;
        
        try {
            const { data, error } = await supabaseClient
                .from('profiles')
                .select('*')
                .eq('id', currentUser.id)
                .single();
            
            if (error && error.code === 'PGRST116') {
                const { data: newProfile } = await supabaseClient
                    .from('profiles')
                    .insert({
                        id: currentUser.id,
                        email: currentUser.email,
                        subscription_tier: 'free'
                    })
                    .select()
                    .single();
                userProfile = newProfile;
            } else {
                userProfile = data;
            }
        } catch (error) {
            console.error('Load profile error:', error);
        }
        
        return userProfile;
    }

    function onAuthStateChange(event, session) {
        console.log('Auth state changed:', event);
        updateAuthUI();
        
        if (event === 'SIGNED_OUT') {
            handleSignedOut();
        } else if (event === 'SIGNED_IN') {
            handleSignedIn();
        }
        
        window.dispatchEvent(new CustomEvent('dxsuite-auth-change', {
            detail: { event, session, user: currentUser, profile: userProfile }
        }));
    }

    // ============================================
    // AUTHENTICATION FUNCTIONS
    // ============================================
    async function signUp(email, password, fullName = '') {
        if (!supabaseAvailable) {
            return { success: false, error: 'Authentication service unavailable. Please refresh and try again.' };
        }
        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email,
                password,
                options: {
                    data: { full_name: fullName },
                    emailRedirectTo: window.location.origin + '/auth/login.html'
                }
            });
            
            if (error) throw error;
            
            return { 
                success: true, 
                message: 'Check your email for the confirmation link!',
                user: data.user 
            };
        } catch (error) {
            console.error('Sign up error:', error);
            return { success: false, error: error.message };
        }
    }

    async function signIn(email, password) {
        if (!supabaseAvailable) {
            return { success: false, error: 'Authentication service unavailable. Please refresh and try again.' };
        }
        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email,
                password
            });
            
            if (error) throw error;
            
            return { success: true, user: data.user };
        } catch (error) {
            console.error('Sign in error:', error);
            return { success: false, error: error.message };
        }
    }

    async function signOut() {
        try {
            // Flag so handleSignedOut knows to clear localStorage
            window._dxExplicitSignOut = true;
            localStorage.removeItem('reasondx-user');
            const { error } = await supabaseClient.auth.signOut();
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Sign out error:', error);
            window._dxExplicitSignOut = false;
            return { success: false, error: error.message };
        }
    }

    async function resetPassword(email) {
        try {
            const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
                redirectTo: window.location.origin + '/auth/reset-password.html'
            });
            
            if (error) throw error;
            
            return { 
                success: true, 
                message: 'Check your email for the password reset link!' 
            };
        } catch (error) {
            console.error('Password reset error:', error);
            return { success: false, error: error.message };
        }
    }

    async function updatePassword(newPassword) {
        try {
            const { error } = await supabaseClient.auth.updateUser({
                password: newPassword
            });
            
            if (error) throw error;
            
            return { success: true, message: 'Password updated successfully!' };
        } catch (error) {
            console.error('Update password error:', error);
            return { success: false, error: error.message };
        }
    }

    async function updateEmail(newEmail) {
        try {
            const { error } = await supabaseClient.auth.updateUser({
                email: newEmail
            });
            
            if (error) throw error;
            
            return { 
                success: true, 
                message: 'Check your new email for confirmation!' 
            };
        } catch (error) {
            console.error('Update email error:', error);
            return { success: false, error: error.message };
        }
    }

    async function updateProfile(updates) {
        if (!currentUser) return { success: false, error: 'Not logged in' };
        
        try {
            const { data, error } = await supabaseClient
                .from('profiles')
                .update(updates)
                .eq('id', currentUser.id)
                .select()
                .single();
            
            if (error) throw error;
            
            userProfile = data;
            return { success: true, profile: data };
        } catch (error) {
            console.error('Update profile error:', error);
            return { success: false, error: error.message };
        }
    }

    // ============================================
    // ACCESS CONTROL
    // ============================================
    function isPremium() {
        return userProfile?.subscription_tier === 'premium' || 
               userProfile?.subscription_tier === 'annual' ||
               userProfile?.subscription_tier === 'admin';
    }

    function isAdmin() {
        return userProfile?.subscription_tier === 'admin';
    }

    function isLoggedIn() {
        return currentUser !== null;
    }

    function getSubscriptionTier() {
        return userProfile?.subscription_tier || null;
    }

    // Standardized redirect key (auth-guard.js and inline guards both use this)
    var REDIRECT_KEY = 'reasondx-redirect';

    function requireAuth(redirectUrl = window.location.href) {
        if (!isLoggedIn()) {
            sessionStorage.setItem('dxsuite-redirect-after-login', redirectUrl);
            window.location.href = '/auth/login.html';
            return false;
        }
        return true;
    }

    function requirePremium(featureName = 'this feature') {
        if (!isLoggedIn()) {
            requireAuth();
            return false;
        }
        
        if (!isPremium()) {
            showUpgradeModal(featureName);
            return false;
        }
        
        return true;
    }

    // ============================================
    // UI HELPERS
    // ============================================
    function updateAuthUI() {
        document.querySelectorAll('[data-auth="logged-in"]').forEach(el => {
            el.style.display = isLoggedIn() ? '' : 'none';
        });
        
        document.querySelectorAll('[data-auth="logged-out"]').forEach(el => {
            el.style.display = isLoggedIn() ? 'none' : '';
        });
        
        document.querySelectorAll('[data-auth="premium"]').forEach(el => {
            el.style.display = isPremium() ? '' : 'none';
        });
        
        document.querySelectorAll('[data-auth="free"]').forEach(el => {
            el.style.display = isPremium() ? 'none' : '';
        });
        
        document.querySelectorAll('[data-user="email"]').forEach(el => {
            el.textContent = currentUser?.email || '';
        });
        
        document.querySelectorAll('[data-user="name"]').forEach(el => {
            el.textContent = userProfile?.full_name || currentUser?.email?.split('@')[0] || '';
        });
        
        document.querySelectorAll('[data-user="tier"]').forEach(el => {
            el.textContent = userProfile?.subscription_tier || 'free';
        });
    }

    function handleSignedOut() {
        // Only clear localStorage if user explicitly signed out (not on session-not-found at page load)
        // The _explicitSignOut flag is set by the signOut() function
        if (window._dxExplicitSignOut) {
            localStorage.removeItem('reasondx-user');
            window._dxExplicitSignOut = false;
        }
        
        if (document.body.hasAttribute('data-require-auth')) {
            window.location.href = '/auth/login.html';
        }
    }

    function handleSignedIn() {
        // Bridge Supabase auth → reasondx-user localStorage (used by 769 inline guards)
        if (currentUser) {
            const fullName = userProfile?.full_name 
                || currentUser?.user_metadata?.full_name 
                || currentUser?.email?.split('@')[0] || 'Student';
            const existing = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
            localStorage.setItem('reasondx-user', JSON.stringify({
                ...existing,
                email: currentUser.email,
                name: fullName,
                plan: userProfile?.subscription_tier || existing.plan || 'free',
                supabaseId: currentUser.id,
                lastLogin: new Date().toISOString()
            }));
        }

        // Handle post-login redirect (check both key names)
        const redirectUrl = sessionStorage.getItem('reasondx-redirect')
            || sessionStorage.getItem('dxsuite-redirect-after-login');
        if (redirectUrl) {
            sessionStorage.removeItem('reasondx-redirect');
            sessionStorage.removeItem('dxsuite-redirect-after-login');
            window.location.href = redirectUrl;
        }
    }

    function showUpgradeModal(featureName) {
        let modal = document.getElementById('dxsuite-upgrade-modal');
        
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'dxsuite-upgrade-modal';
            modal.innerHTML = `
                <div class="dx-modal-overlay" onclick="closeUpgradeModal()">
                    <div class="dx-modal-content" onclick="event.stopPropagation()">
                        <button class="dx-modal-close" onclick="closeUpgradeModal()">×</button>
                        <div class="dx-modal-icon">🔒</div>
                        <h2>Upgrade to Premium</h2>
                        <p class="dx-modal-feature"></p>
                        <p>Get unlimited access to all modules, cases, and tools.</p>
                        <div class="dx-modal-buttons">
                            <a href="/pricing.html" class="dx-btn-primary">View Plans</a>
                            <button onclick="closeUpgradeModal()" class="dx-btn-secondary">Maybe Later</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            
            const style = document.createElement('style');
            style.textContent = `
                .dx-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 10000; }
                .dx-modal-content { background: white; border-radius: 20px; padding: 40px; max-width: 400px; text-align: center; position: relative; }
                .dx-modal-close { position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 24px; cursor: pointer; color: #94a3b8; }
                .dx-modal-icon { font-size: 48px; margin-bottom: 16px; }
                .dx-modal-content h2 { margin-bottom: 12px; }
                .dx-modal-content p { color: #64748b; margin-bottom: 8px; }
                .dx-modal-feature { font-weight: 600; color: #18181b !important; }
                .dx-modal-buttons { display: flex; gap: 12px; margin-top: 24px; }
                .dx-btn-primary { flex: 1; padding: 14px; background: #059669; color: white; border: none; border-radius: 10px; font-weight: 600; text-decoration: none; cursor: pointer; }
                .dx-btn-secondary { flex: 1; padding: 14px; background: #f1f5f9; color: #64748b; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; }
            `;
            document.head.appendChild(style);
        }
        
        modal.querySelector('.dx-modal-feature').textContent = `"${featureName}" is a premium feature.`;
        modal.style.display = 'block';
    }

    window.closeUpgradeModal = function() {
        const modal = document.getElementById('dxsuite-upgrade-modal');
        if (modal) modal.style.display = 'none';
    };

    // ============================================
    // INITIALIZE
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAuth);
    } else {
        initAuth();
    }

    // ============================================
    // EXPORT
    // ============================================
    window.DxAuth = {
        get user() { return currentUser; },
        get profile() { return userProfile; },
        signUp,
        signIn,
        signOut,
        resetPassword,
        updatePassword,
        updateEmail,
        updateProfile,
        isLoggedIn,
        isPremium,
        isAdmin,
        getSubscriptionTier,
        requireAuth,
        requirePremium,
        initAuth,
        loadUserProfile
    };

    console.log('DxAuth initialized successfully');
})();
