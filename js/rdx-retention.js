/**
 * rdx-retention.js — ReasonDx Retention System
 * Handles: streak tracking, cases completed, email opt-in, next case recommendation
 * Writes to Supabase profiles table on case completion
 */

(function() {
  'use strict';

  const SUPABASE_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  // ─── SUPABASE HELPER ─────────────────────────────────────────────────────────
  async function sbFetch(path, opts = {}) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
        ...opts.headers
      },
      ...opts
    });
    if (!res.ok) throw new Error(`Supabase error: ${res.status}`);
    return res.json().catch(() => null);
  }

  // ─── GET CURRENT USER ────────────────────────────────────────────────────────
  function getCurrentUser() {
    try {
      const keys = Object.keys(localStorage).filter(k => k.includes('supabase') && k.includes('auth'));
      for (const key of keys) {
        const data = JSON.parse(localStorage.getItem(key) || '{}');
        const user = data?.user || data?.session?.user;
        if (user?.id) return user;
      }
    } catch(e) {}
    return null;
  }

  // ─── LOAD USER STATS FROM SUPABASE ──────────────────────────────────────────
  async function loadUserStats(userId) {
    try {
      const data = await sbFetch(`profiles?id=eq.${userId}&select=total_cases_completed,streak_days,last_active_at,email_weekly_case`);
      return data?.[0] || null;
    } catch(e) {
      console.log('rdx-retention: could not load stats', e);
      return null;
    }
  }

  // ─── CALCULATE STREAK ────────────────────────────────────────────────────────
  function calculateStreak(lastActiveAt, currentStreak) {
    if (!lastActiveAt) return 1;
    const last = new Date(lastActiveAt);
    const now = new Date();
    const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return currentStreak; // same day, no change
    if (diffDays === 1) return (currentStreak || 0) + 1; // consecutive day
    return 1; // streak broken, reset to 1
  }

  // ─── UPDATE PROFILE ON CASE COMPLETION ──────────────────────────────────────
  async function onCaseCompleted(caseData) {
    const user = getCurrentUser();
    if (!user) return;

    try {
      const stats = await loadUserStats(user.id);
      const newStreak = calculateStreak(stats?.last_active_at, stats?.streak_days || 0);
      const newCasesCompleted = (stats?.total_cases_completed || 0) + 1;

      await sbFetch(`profiles?id=eq.${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          total_cases_completed: newCasesCompleted,
          streak_days: newStreak,
          last_active_at: new Date().toISOString()
        })
      });

      // Update local cache
      localStorage.setItem('rdx_streak', newStreak);
      localStorage.setItem('rdx_cases_completed', newCasesCompleted);

      // Dispatch event for dashboard to pick up
      window.dispatchEvent(new CustomEvent('rdx-stats-updated', {
        detail: { streak: newStreak, casesCompleted: newCasesCompleted }
      }));

      console.log(`rdx-retention: streak=${newStreak}, cases=${newCasesCompleted}`);
    } catch(e) {
      console.log('rdx-retention: could not update stats', e);
    }
  }

  // ─── LISTEN FOR CASE COMPLETION ─────────────────────────────────────────────
  // Hook into simulation engine's EventBus
  function hookEventBus() {
    // Wait for EventBus to be available
    const maxWait = 10000;
    const start = Date.now();
    const interval = setInterval(() => {
      const P = window.RDXPassive || window.P;
      if (P?.EventBus?.on) {
        P.EventBus.on('case_completed', 'rdx-retention', onCaseCompleted);
        clearInterval(interval);
        console.log('rdx-retention: hooked into EventBus');
        return;
      }
      // Also listen for postMessage from simulation engine
      if (Date.now() - start > maxWait) clearInterval(interval);
    }, 200);
  }

  // Also listen for window events from simulation engine
  window.addEventListener('message', function(e) {
    if (e.data?.type === 'rdx-case-complete') {
      onCaseCompleted(e.data);
    }
  });

  // ─── LOAD AND DISPLAY STATS ──────────────────────────────────────────────────
  async function initStats() {
    const user = getCurrentUser();
    if (!user) return;

    // Try Supabase first, fall back to localStorage
    let streak = parseInt(localStorage.getItem('rdx_streak') || '0');
    let casesCompleted = parseInt(localStorage.getItem('rdx_cases_completed') || '0');
    let emailOptIn = true;

    try {
      const stats = await loadUserStats(user.id);
      if (stats) {
        streak = stats.streak_days || 0;
        casesCompleted = stats.total_cases_completed || 0;
        emailOptIn = stats.email_weekly_case !== false;
        localStorage.setItem('rdx_streak', streak);
        localStorage.setItem('rdx_cases_completed', casesCompleted);
      }
    } catch(e) {}

    // Update streak display
    const streakEl = document.getElementById('rdx-streak-count');
    if (streakEl) streakEl.textContent = streak;

    // Update cases completed display
    const casesEl = document.getElementById('rdx-cases-completed');
    if (casesEl) casesEl.textContent = casesCompleted;

    // Update email opt-in toggle
    const emailToggle = document.getElementById('rdx-email-optin');
    if (emailToggle) emailToggle.checked = emailOptIn;

    // Show streak badge if > 0
    const streakBadge = document.getElementById('rdx-streak-badge');
    if (streakBadge && streak > 0) {
      streakBadge.style.display = 'flex';
      if (streak >= 7) streakBadge.classList.add('rdx-streak-gold');
      if (streak >= 30) streakBadge.classList.add('rdx-streak-platinum');
    }

    return { streak, casesCompleted, emailOptIn };
  }

  // ─── EMAIL OPT-IN HANDLER ────────────────────────────────────────────────────
  async function setEmailOptIn(optIn) {
    const user = getCurrentUser();
    if (!user) return;
    try {
      await sbFetch(`profiles?id=eq.${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ email_weekly_case: optIn })
      });
    } catch(e) {
      console.log('rdx-retention: could not update email opt-in', e);
    }
  }

  // ─── NEXT CASE RECOMMENDATION ────────────────────────────────────────────────
  async function getNextCaseRecommendation() {
    const user = getCurrentUser();
    if (!user) return null;

    try {
      // Get profession from local storage
      const profData = JSON.parse(localStorage.getItem('rdx_profession_profile') || '{}');
      const profession = profData.professionId || 'medicine';

      // Get completed cases
      const completed = JSON.parse(localStorage.getItem('rdx-completed-cases') || '[]');

      // Map profession to case tags
      const professionTags = {
        medicine: ['internal-medicine', 'emergency', 'cardiology'],
        nursing: ['critical-care', 'general', 'pharmacology'],
        pharmacy: ['pharmacology', 'cardiology', 'endocrinology'],
        pa: ['internal-medicine', 'emergency', 'surgery'],
        pt: ['musculoskeletal', 'neurology', 'cardiopulmonary'],
        ot: ['neurology', 'psychiatry', 'musculoskeletal'],
        dentistry: ['oral-medicine', 'pharmacology', 'infectious-disease'],
        optometry: ['ophthalmology', 'neurology', 'endocrinology'],
        nursing: ['general', 'critical-care', 'pediatrics'],
        vet: ['general', 'pharmacology', 'infectious-disease'],
        other: ['general', 'internal-medicine']
      };

      const tags = professionTags[profession] || professionTags.medicine;
      const primaryTag = tags[Math.floor(Math.random() * Math.min(2, tags.length))];

      return {
        profession,
        tag: primaryTag,
        url: `/browse.html?mode=simulate&tag=${primaryTag}&profession=${profession}`,
        label: `${primaryTag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Case`
      };
    } catch(e) {
      return null;
    }
  }

  // ─── RENDER NEXT CASE WIDGET ─────────────────────────────────────────────────
  async function renderNextCaseWidget(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const rec = await getNextCaseRecommendation();
    if (!rec) return;

    const casesCompleted = parseInt(localStorage.getItem('rdx_cases_completed') || '0');
    const streak = parseInt(localStorage.getItem('rdx_streak') || '0');

    container.innerHTML = `
      <div style="background:linear-gradient(135deg,#1f5f8b,#2874a6);border-radius:16px;padding:24px 28px;color:#fff;margin:24px 0">
        <div style="font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;opacity:0.7;margin-bottom:8px">
          ${casesCompleted > 0 ? `${casesCompleted} cases completed · ${streak} day streak` : 'Ready to start your first case?'}
        </div>
        <div style="font-size:20px;font-weight:700;margin-bottom:4px">Next Recommended Case</div>
        <div style="font-size:14px;opacity:0.85;margin-bottom:20px">
          Based on your ${rec.profession} track — ${rec.label}
        </div>
        <a href="${rec.url}" style="display:inline-flex;align-items:center;gap:8px;background:#fff;color:#1f5f8b;padding:10px 20px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none">
          Start Case →
        </a>
      </div>
    `;
  }

  // ─── PUBLIC API ──────────────────────────────────────────────────────────────
  window.RDXRetention = {
    init: initStats,
    hookEventBus,
    onCaseCompleted,
    setEmailOptIn,
    getNextCaseRecommendation,
    renderNextCaseWidget
  };

  // Auto-init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initStats();
      hookEventBus();
    });
  } else {
    initStats();
    hookEventBus();
  }

  // Also update stats when rdx-stats-updated fires
  window.addEventListener('rdx-stats-updated', function(e) {
    const { streak, casesCompleted } = e.detail;
    const streakEl = document.getElementById('rdx-streak-count');
    if (streakEl) streakEl.textContent = streak;
    const casesEl = document.getElementById('rdx-cases-completed');
    if (casesEl) casesEl.textContent = casesCompleted;
    const streakBadge = document.getElementById('rdx-streak-badge');
    if (streakBadge && streak > 0) streakBadge.style.display = 'flex';
  });

})();
