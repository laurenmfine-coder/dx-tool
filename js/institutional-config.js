/* js/institutional-config.js — ReasonDx Institutional Customization
 * Reads program configuration from Supabase (program_configs table) or localStorage.
 * Applies preset templates + toggle overrides to GuidedMode on case load.
 * Used by admin/program-config.html for the config UI.
 */
(function () {
  'use strict';

  var SUPABASE_URL      = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_ANON_KEY = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_ANON_KEY)||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  // ── Preset Templates ────────────────────────────────────────────
  var PRESETS = {

    year1: {
      id: 'year1',
      label: 'Year 1 / Pre-clinical',
      description: 'Phases 1–5 only. Phase 5 CoachDx required. No orders. Focus: hypothesis generation and history-taking.',
      icon: '🌱',
      enabledPhases: [1, 2, 3, 4, 5],
      coachConfig: { 1: 'optional', 2: 'optional', 3: 'available', 4: 'optional', 5: 'required' },
      ddxMinEntries: 2,
      allowBacktrack: true,
      timeLimits: {},
      showOrdersPhase: false
    },

    clerkship: {
      id: 'clerkship',
      label: 'Year 3 / Clerkship',
      description: 'All 8 phases. Phase 5 CoachDx required. Orders available. Full clinical reasoning cycle.',
      icon: '🏥',
      enabledPhases: [1, 2, 3, 4, 5, 6, 7, 8],
      coachConfig: { 1: 'optional', 2: 'optional', 3: 'available', 4: 'optional', 5: 'required', 6: 'optional', 7: 'optional', 8: 'always' },
      ddxMinEntries: 2,
      allowBacktrack: true,
      timeLimits: {},
      showOrdersPhase: true
    },

    osce: {
      id: 'osce',
      label: 'OSCE Prep Mode',
      description: 'Phases 1–5 only. Timed. No CoachDx. Mirrors real OSCE structure.',
      icon: '⏱️',
      enabledPhases: [1, 2, 3, 4, 5],
      coachConfig: { 1: 'hidden', 2: 'hidden', 3: 'hidden', 4: 'hidden', 5: 'hidden' },
      ddxMinEntries: 1,
      allowBacktrack: false,
      timeLimits: { 3: 480, 4: 300 }, // seconds: 8 min interview, 5 min exam
      showOrdersPhase: false
    },

    advanced: {
      id: 'advanced',
      label: 'Advanced / Independent',
      description: 'All phases unlocked from start. All CoachDx optional. Open Chart fallback available.',
      icon: '🎓',
      enabledPhases: [1, 2, 3, 4, 5, 6, 7, 8],
      coachConfig: { 1: 'optional', 2: 'optional', 3: 'optional', 4: 'optional', 5: 'optional', 6: 'optional', 7: 'optional', 8: 'optional' },
      ddxMinEntries: 1,
      allowBacktrack: true,
      timeLimits: {},
      showOrdersPhase: true
    },

    ipe: {
      id: 'ipe',
      label: 'Interprofessional (IPE)',
      description: 'Phases 1–6 only. Profession-specific exam maneuvers. CoachDx uses profession framing.',
      icon: '🤝',
      enabledPhases: [1, 2, 3, 4, 5, 6],
      coachConfig: { 1: 'optional', 2: 'optional', 3: 'available', 4: 'optional', 5: 'required', 6: 'optional' },
      ddxMinEntries: 2,
      allowBacktrack: true,
      timeLimits: {},
      showOrdersPhase: false,
      professionFraming: true
    }
  };

  // ── Default config (no institutional override) ──────────────────
  var DEFAULT_CONFIG = PRESETS.clerkship;

  // ── Supabase helpers ────────────────────────────────────────────
  async function _sbGet(table, filters) {
    var qs = Object.entries(filters || {})
      .map(function (kv) { return encodeURIComponent(kv[0]) + '=eq.' + encodeURIComponent(kv[1]); })
      .join('&');
    try {
      var res = await fetch(SUPABASE_URL + '/rest/v1/' + table + (qs ? '?' + qs : '') + '&limit=1', {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
        }
      });
      if (!res.ok) return null;
      var data = await res.json();
      return data && data[0] ? data[0] : null;
    } catch (e) { return null; }
  }

  async function _sbUpsert(table, data) {
    try {
      var res = await fetch(SUPABASE_URL + '/rest/v1/' + table, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates,return=representation'
        },
        body: JSON.stringify(data)
      });
      return res.ok;
    } catch (e) { return false; }
  }

  // ── Detect current program ID ───────────────────────────────────
  function _getProgramId() {
    // Check URL param, then localStorage, then Supabase user metadata
    var urlParam = new URLSearchParams(window.location.search).get('program');
    if (urlParam) return urlParam;
    try {
      var user = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
      return user.programId || user.program_id || null;
    } catch (e) { return null; }
  }

  // ── Merge preset + overrides ────────────────────────────────────
  function _mergeConfig(presetId, overrides) {
    var base = PRESETS[presetId] || DEFAULT_CONFIG;
    if (!overrides || Object.keys(overrides).length === 0) return Object.assign({}, base);

    return Object.assign({}, base, overrides, {
      // Deep merge coachConfig if both exist
      coachConfig: Object.assign({}, base.coachConfig, overrides.coachConfig || {}),
      timeLimits:  Object.assign({}, base.timeLimits,  overrides.timeLimits  || {})
    });
  }

  // ── State ───────────────────────────────────────────────────────
  var _config     = null;
  var _programId  = null;
  var _loaded     = false;

  // ── Public API ──────────────────────────────────────────────────
  window.InstitutionalConfig = {

    PRESETS: PRESETS,

    // Load config for the current program
    // Checks Supabase first, falls back to localStorage, then default
    load: async function () {
      if (_loaded) return _config;
      _programId = _getProgramId();

      // Try Supabase
      if (_programId) {
        var row = await _sbGet('program_configs', { program_id: _programId });
        if (row && row.config) {
          var parsed = typeof row.config === 'string' ? JSON.parse(row.config) : row.config;
          _config = _mergeConfig(parsed.preset || 'clerkship', parsed.overrides || {});
          _loaded = true;
          return _config;
        }
      }

      // Try localStorage cache
      try {
        var cached = localStorage.getItem('rdx-program-config-' + (_programId || 'default'));
        if (cached) {
          var c = JSON.parse(cached);
          _config = _mergeConfig(c.preset || 'clerkship', c.overrides || {});
          _loaded = true;
          return _config;
        }
      } catch (e) {}

      // Default
      _config = Object.assign({}, DEFAULT_CONFIG);
      _loaded = true;
      return _config;
    },

    // Get currently loaded config (synchronous — call load() first)
    get: function () { return _config || Object.assign({}, DEFAULT_CONFIG); },

    // Save a config (admin use)
    save: async function (programId, presetId, overrides) {
      var configData = { preset: presetId, overrides: overrides || {} };
      var ok = await _sbUpsert('program_configs', {
        program_id: programId,
        config: JSON.stringify(configData),
        updated_at: new Date().toISOString()
      });
      if (ok) {
        try { localStorage.setItem('rdx-program-config-' + programId, JSON.stringify(configData)); } catch (e) {}
        _config = _mergeConfig(presetId, overrides);
        _loaded = true;
      }
      return ok;
    },

    // Apply loaded config to GuidedMode
    applyToGuidedMode: function () {
      var cfg = this.get();
      if (!window.GuidedMode) return;
      GuidedMode._applyInstitutionalConfig({
        enabledPhases: cfg.enabledPhases,
        coachConfig:   cfg.coachConfig,
        ddxMinEntries: cfg.ddxMinEntries,
        allowBacktrack: cfg.allowBacktrack,
        timeLimits:    cfg.timeLimits
      });
    },

    getPresetLabel: function (presetId) {
      return PRESETS[presetId] ? PRESETS[presetId].label : 'Custom';
    },

    isInstitutional: function () {
      return !!_programId;
    }
  };

  // ── Auto-load and apply on guided mode init ─────────────────────
  document.addEventListener('rdx-guided-init', function () {
    InstitutionalConfig.load().then(function () {
      InstitutionalConfig.applyToGuidedMode();
    });
  });

  // ── Patch GuidedMode to accept institutional config ─────────────
  var _patchInterval = setInterval(function () {
    if (!window.GuidedMode) return;
    clearInterval(_patchInterval);

    GuidedMode._applyInstitutionalConfig = function (cfg) {
      if (!cfg) return;
      if (cfg.enabledPhases) {
        this._instEnabledPhases = cfg.enabledPhases;
      }
      if (cfg.coachConfig) {
        this._instCoachConfig = cfg.coachConfig;
      }
      if (typeof cfg.ddxMinEntries === 'number') {
        this._instDdxMin = cfg.ddxMinEntries;
      }
      if (typeof cfg.allowBacktrack === 'boolean') {
        this._instAllowBacktrack = cfg.allowBacktrack;
      }
      if (cfg.timeLimits) {
        this._instTimeLimits = cfg.timeLimits;
      }
    };

  }, 200);

})();
