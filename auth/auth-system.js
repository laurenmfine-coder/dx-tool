/**
 * DxSuite Authentication System
 * Powered by Supabase
 * 
 * SETUP:
 * 1. Create a Supabase project at supabase.com
 * 2. Replace SUPABASE_URL and SUPABASE_ANON_KEY below
 * 3. Include this script in your HTML pages
 * 4. Include the Supabase JS library before this script:
 *    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 */

// ============================================
// CONFIGURATION
// ============================================
const SUPABASE_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

// Initialize Supabase client (use existing if already declared)
let supabase;
if (typeof window._supabaseClient === 'undefined') {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window._supabaseClient = supabase;
} else {
    supabase = window._supabaseClient;
}

// ============================================
// AUTH STATE MANAGEMENT
// ============================================

// Current user state
let currentUser = null;
let userProfile = null;

// Initialize auth state on page load
async function initAuth() {
    // Check for existing session
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
        currentUser = session.user;
        await loadUserProfile();
        onAuthStateChange('SIGNED_IN', session);
    } else {
        onAuthStateChange('SIGNED_OUT', null);
    }
    
    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (event, session) => {
        currentUser = session?.user || null;
        if (currentUser) {
            await loadUserProfile();
        } else {
            userProfile = null;
        }
        onAuthStateChange(event, session);
    });
}

// Load user profile from database
async function loadUserProfile() {
    if (!currentUser) return null;
    
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', currentUser.id)
        .single();
    
    if (error && error.code === 'PGRST116') {
        // Profile doesn't exist, create it
        const { data: newProfile } = await supabase
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
    
    return userProfile;
}

// Handle auth state changes - customize this for your UI
function onAuthStateChange(event, session) {
    console.log('Auth state changed:', event);
    
    // Update UI elements
    updateAuthUI();
    
    // Handle protected content
    if (event === 'SIGNED_OUT') {
        handleSignedOut();
    } else if (event === 'SIGNED_IN') {
        handleSignedIn();
    }
    
    // Dispatch custom event for other scripts to listen to
    window.dispatchEvent(new CustomEvent('dxsuite-auth-change', {
        detail: { event, session, user: currentUser, profile: userProfile }
    }));
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

/**
 * Sign up a new user
 * @param {string} email 
 * @param {string} password 
 * @param {string} fullName 
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function signUp(email, password, fullName = '') {
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { full_name: fullName },
                emailRedirectTo: `${window.location.origin}/auth/callback`
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

/**
 * Sign in existing user
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function signIn(email, password) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
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

/**
 * Sign out current user
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function signOut() {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.error('Sign out error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Send password reset email
 * @param {string} email 
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function resetPassword(email) {
    try {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/auth/reset-password`
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

/**
 * Update user's password (when logged in or from reset link)
 * @param {string} newPassword 
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function updatePassword(newPassword) {
    try {
        const { error } = await supabase.auth.updateUser({
            password: newPassword
        });
        
        if (error) throw error;
        
        return { success: true, message: 'Password updated successfully!' };
    } catch (error) {
        console.error('Update password error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Update user's email
 * @param {string} newEmail 
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function updateEmail(newEmail) {
    try {
        const { error } = await supabase.auth.updateUser({
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

/**
 * Update user profile
 * @param {object} updates - { full_name, etc }
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function updateProfile(updates) {
    if (!currentUser) return { success: false, error: 'Not logged in' };
    
    try {
        const { data, error } = await supabase
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
// SUBSCRIPTION / ACCESS CONTROL
// ============================================

/**
 * Check if user has premium access
 * @returns {boolean}
 */
function isPremium() {
    return userProfile?.subscription_tier === 'premium' || 
           userProfile?.subscription_tier === 'annual';
}

/**
 * Check if user is logged in
 * @returns {boolean}
 */
function isLoggedIn() {
    return currentUser !== null;
}

/**
 * Get current user's subscription tier
 * @returns {string} 'free' | 'premium' | 'annual' | null
 */
function getSubscriptionTier() {
    return userProfile?.subscription_tier || null;
}

/**
 * Require authentication - redirect to login if not logged in
 * @param {string} redirectUrl - Where to go after login
 */
function requireAuth(redirectUrl = window.location.href) {
    if (!isLoggedIn()) {
        sessionStorage.setItem('dxsuite-redirect-after-login', redirectUrl);
        window.location.href = '/auth/login.html';
        return false;
    }
    return true;
}

/**
 * Require premium - show upgrade prompt if not premium
 * @param {string} featureName - Name of the feature being accessed
 */
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

// Update UI based on auth state
function updateAuthUI() {
    // Show/hide elements based on auth state
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
    
    // Update user info displays
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

// Handle signed out state
function handleSignedOut() {
    // Check if current page requires auth
    if (document.body.hasAttribute('data-require-auth')) {
        window.location.href = '/auth/login.html';
    }
}

// Handle signed in state
function handleSignedIn() {
    // Check for redirect after login
    const redirectUrl = sessionStorage.getItem('dxsuite-redirect-after-login');
    if (redirectUrl) {
        sessionStorage.removeItem('dxsuite-redirect-after-login');
        window.location.href = redirectUrl;
    }
}

// Show upgrade modal (customize this for your design)
function showUpgradeModal(featureName) {
    // Check if modal already exists
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
        
        // Add styles
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

function closeUpgradeModal() {
    const modal = document.getElementById('dxsuite-upgrade-modal');
    if (modal) modal.style.display = 'none';
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}

// ============================================
// EXPORT FOR USE IN OTHER SCRIPTS
// ============================================
window.DxAuth = {
    // State
    get user() { return currentUser; },
    get profile() { return userProfile; },
    
    // Auth functions
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    updateEmail,
    updateProfile,
    
    // Access control
    isLoggedIn,
    isPremium,
    getSubscriptionTier,
    requireAuth,
    requirePremium,
    
    // Utilities
    initAuth,
    loadUserProfile
};
