/* dx-plan-gate.js — Plan/Subscription Gate
 * Controls access to Pro features based on Supabase profile tier.
 * Checks: localStorage reasondx-user.tier → Supabase profiles.tier
 * Tiers: 'free' (limited) | 'pro' (full access) | 'beta' (full access)
 *
 * FREE TIER LIMITS:
 *   - Cases: access to first 20 cases in manifest only
 *   - CoachDx: 5 coaching sessions per day
 *   - MechanismDx: first 2 modules only
 *   - Faculty dashboard: not accessible
 *
 * Pro: $14.99/mo or $99/yr (Stripe)
 */
(function() {
  'use strict';

  var SB_URL = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
  var SB_KEY = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_ANON_KEY)||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  // Free tier case limit
  var FREE_CASE_LIMIT = 20;
  // Free tier daily CoachDx session limit
  var FREE_COACH_LIMIT = 5;
  // Free tier mechanism modules
  var FREE_MECHANISM_MODULES = ['anaphylaxis-module', 'sepsis-module'];

  // ── Tier resolution ─────────────────────────────────────────────────────
  // Check local cache first (fast), then verify with Supabase (authoritative)
  function getCachedTier() {
    try {
      var u = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
      return u.tier || 'free';
    } catch(e) { return 'free'; }
  }

  function setCachedTier(tier) {
    try {
      var u = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
      u.tier = tier;
      u.tierCheckedAt = Date.now();
      localStorage.setItem('reasondx-user', JSON.stringify(u));
    } catch(e) {}
  }

  // Verify tier with Supabase (async — call on page load, result cached)
  async function verifyTierWithSupabase() {
    try {
      // Get current session token
      var session = null;
      try {
        var raw = localStorage.getItem('sb-lpwbiqpojisqgezycupw-auth-token');
        if (raw) session = JSON.parse(raw);
      } catch(e) {}

      if (!session || !session.access_token) return getCachedTier();

      var uid = session.user && session.user.id;
      if (!uid) return getCachedTier();

      var resp = await fetch(
        SB_URL + '/rest/v1/profiles?id=eq.' + uid + '&select=tier',
        { headers: { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + session.access_token } }
      );
      if (!resp.ok) return getCachedTier();
      var data = await resp.json();
      var tier = (data && data[0] && data[0].tier) || 'free';
      setCachedTier(tier);
      return tier;
    } catch(e) {
      return getCachedTier();
    }
  }

  // ── Public API ────────────────────────────────────────────────────────────
  window.DxPlanGate = {

    isPro: function() {
      var tier = getCachedTier();
      return tier === 'pro' || tier === 'beta' || tier === 'admin';
    },

    getTier: function() {
      return getCachedTier();
    },

    // Verify with Supabase on page load — keeps cache fresh
    init: async function() {
      var tier = await verifyTierWithSupabase();
      // Dispatch event so pages can react
      document.dispatchEvent(new CustomEvent('rdx:tierResolved', { detail: { tier: tier } }));
      return tier;
    },

    // Gate a feature — calls callback if allowed, else shows upgrade prompt
    gate: function(feature, callback) {
      if (this.isPro()) {
        callback();
        return;
      }
      // Free tier: allow with limits
      if (feature === 'case') {
        // Check if case index is within free limit
        callback(); // Individual case gating handled in gateCase()
        return;
      }
      callback(); // Default allow, specific gates below
    },

    // Gate a specific case by its manifest index
    gateCase: function(caseIndex, caseId, onAllow, onBlock) {
      if (this.isPro()) { onAllow(); return; }
      // Free tier: allow first FREE_CASE_LIMIT cases
      if (typeof caseIndex === 'number' && caseIndex < FREE_CASE_LIMIT) {
        onAllow();
      } else {
        onBlock(caseId);
      }
    },

    // Gate CoachDx session
    gateCoachSession: function(onAllow, onBlock) {
      if (this.isPro()) { onAllow(); return; }
      // Check daily session count
      var today = new Date().toDateString();
      try {
        var coaching = JSON.parse(localStorage.getItem('rdx-coaching-sessions') || '{}');
        var todayCount = coaching[today] || 0;
        if (todayCount < FREE_COACH_LIMIT) {
          coaching[today] = todayCount + 1;
          localStorage.setItem('rdx-coaching-sessions', JSON.stringify(coaching));
          onAllow();
        } else {
          onBlock('coaching');
        }
      } catch(e) { onAllow(); }
    },

    // Gate a mechanism module
    gateMechanismModule: function(moduleId, onAllow, onBlock) {
      if (this.isPro()) { onAllow(); return; }
      if (FREE_MECHANISM_MODULES.some(function(m) { return moduleId.indexOf(m) >= 0; })) {
        onAllow();
      } else {
        onBlock(moduleId);
      }
    },

    // Show upgrade prompt modal
    showUpgradePrompt: function(feature) {
      this.showUpgradeModal({
        title: 'Upgrade to ReasonDx Pro',
        feature: feature,
        message: this._featureMessage(feature)
      });
    },

    _featureMessage: function(feature) {
      var msgs = {
        'case': 'You\'ve reached your 20-case free limit. Upgrade to Pro for all 191 cases.',
        'coaching': 'You\'ve used your 5 free CoachDx sessions today. Upgrade for unlimited coaching.',
        'mechanism': 'This MechanismDx module is Pro only. Upgrade for all 36+ modules.',
        'default': 'This feature requires a ReasonDx Pro subscription.'
      };
      return msgs[feature] || msgs['default'];
    },

    showUpgradeModal: function(opts) {
      // Remove existing modal
      var existing = document.getElementById('rdx-gate-modal');
      if (existing) existing.remove();

      var modal = document.createElement('div');
      modal.id = 'rdx-gate-modal';
      modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:99999;display:flex;align-items:center;justify-content:center;font-family:\'IBM Plex Sans\',-apple-system,sans-serif';
      modal.innerHTML = [
        '<div style="background:#fff;border-radius:16px;padding:32px;max-width:440px;width:90vw;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.2)">',
        '<div style="font-size:36px;margin-bottom:12px">🔒</div>',
        '<h2 style="font-size:20px;font-weight:700;color:#1A2D3F;margin-bottom:8px">' + (opts.title || 'ReasonDx Pro') + '</h2>',
        '<p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:20px">' + (opts.message || '') + '</p>',
        '<div style="background:#F8FAFC;border-radius:10px;padding:16px;margin-bottom:20px;text-align:left">',
        '<div style="font-size:12px;font-weight:700;color:#1A2D3F;margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">Pro includes</div>',
        ['All 191 clinical cases', 'Unlimited CoachDx coaching sessions', 'All 36+ MechanismDx modules', 'Reasoning Pathway Fingerprint analytics', 'Priority access to new cases'].map(function(f) {
          return '<div style="font-size:13px;color:#334155;padding:3px 0;display:flex;gap:8px;align-items:center"><span style="color:#0D7A67;font-weight:700">✓</span>' + f + '</div>';
        }).join(''),
        '</div>',
        '<a href="/auth/register.html?plan=pro" style="display:block;background:#2874A6;color:#fff;text-decoration:none;padding:13px 24px;border-radius:10px;font-size:15px;font-weight:700;margin-bottom:10px">Upgrade to Pro — $14.99/mo</a>',
        '<a href="/auth/register.html?plan=annual" style="display:block;background:#EBF5FB;color:#2874A6;text-decoration:none;padding:10px 24px;border-radius:10px;font-size:13px;font-weight:600;margin-bottom:16px">Annual plan — $99/yr (save 45%)</a>',
        '<button onclick="document.getElementById(\'rdx-gate-modal\').remove()" style="background:none;border:none;color:#94A3B8;font-size:13px;cursor:pointer;font-family:inherit">Maybe later</button>',
        '</div>'
      ].join('');
      document.body.appendChild(modal);
      modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.remove();
      });
    },

    // Legacy compatibility
    getSimRoomFeatures: function() {
      var pro = this.isPro();
      return {
        plan: pro ? 'pro' : 'free',
        maxCharacters: pro ? 6 : 2,
        allowedCharacters: pro
          ? ['patient','attending','nurse','family','consultant','pharmacist']
          : ['patient','attending'],
        multiplayer: false,
        voice: pro,
        freeCases: pro ? [] : (function() {
          var cases = [];
          for (var i = 0; i < FREE_CASE_LIMIT; i++) cases.push(i);
          return cases;
        })(),
        allCases: pro
      };
    }
  };

  // Auto-init on load to warm up the tier cache
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      DxPlanGate.init();
    });
  } else {
    DxPlanGate.init();
  }

})();
