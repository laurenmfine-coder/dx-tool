/*
 * rdx-focus-mode.js — Platform-Wide Focus Mode
 * ReasonDx · Lauren Fine, MD
 *
 * Persists a specialty + setting preference across all platform surfaces.
 * Each page reads this on load and auto-applies the appropriate filter.
 *
 * Usage:
 *   RDXFocus.get()                    // { specialty, setting }
 *   RDXFocus.set(specialty, setting)  // save and dispatch event
 *   RDXFocus.clear()                  // reset to 'all'
 *   RDXFocus.isActive()               // true if any non-all filter set
 *   RDXFocus.injectBanner(container)  // inject the focus banner UI
 *
 * Pages that respond:
 *   casedx.html         → auto-clicks specialty + setting filter chips
 *   mechanism/index.html → auto-clicks specialty filter pill
 *   clinic-board.html   → filters case pool to specialty
 *   virtual-emr.html    → pre-selects specialty on setting screen
 */

(function(window) {
  'use strict';

  var STORAGE_KEY = 'rdx-focus-mode';

  // ── Specialty definitions ──────────────────────────────────
  var SPECIALTIES = [
    { id: 'all',        label: 'All Specialties',      icon: '🏥' },
    { id: 'allergy',    label: 'Allergy/Immunology',   icon: '🌿' },
    { id: 'cardiology', label: 'Cardiology',            icon: '❤️' },
    { id: 'pulmonary',  label: 'Pulmonary',             icon: '🫁' },
    { id: 'infectious', label: 'Infectious Disease',    icon: '🦠' },
    { id: 'neurology',  label: 'Neurology',             icon: '🧠' },
    { id: 'gi',         label: 'GI / Hepatology',       icon: '🫄' },
    { id: 'renal',      label: 'Renal',                 icon: '🫘' },
    { id: 'endocrine',  label: 'Endocrine',             icon: '⚗️' },
    { id: 'hematology', label: 'Hematology',            icon: '🩸' },
    { id: 'rheumatology',label:'Rheumatology',          icon: '🦴' },
    { id: 'psychiatry', label: 'Psychiatry',            icon: '🧩' },
    { id: 'surgery',    label: 'Surgery',               icon: '🔪' },
  ];

  // ── Setting definitions ────────────────────────────────────
  var SETTINGS = [
    { id: 'all',       label: 'All Settings', icon: '🏥' },
    { id: 'ed',        label: 'ED',           icon: '🚨' },
    { id: 'inpatient', label: 'Inpatient',    icon: '🏨' },
    { id: 'clinic',    label: 'Clinic',       icon: '🩺' },
    { id: 'icu',       label: 'ICU',          icon: '⚡' },
  ];

  var RDXFocus = {

    // ── Core API ───────────────────────────────────────────────
    get: function() {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
      } catch(e) {}
      return { specialty: 'all', setting: 'all' };
    },

    set: function(specialty, setting) {
      var val = { specialty: specialty || 'all', setting: setting || 'all' };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(val)); } catch(e) {}
      // Dispatch event so same-page listeners can react
      try {
        window.dispatchEvent(new CustomEvent('rdxfocuschange', { detail: val }));
      } catch(e) {}
    },

    clear: function() {
      this.set('all', 'all');
    },

    isActive: function() {
      var f = this.get();
      return f.specialty !== 'all' || f.setting !== 'all';
    },

    getSpecialtyLabel: function(id) {
      var s = SPECIALTIES.find(function(x) { return x.id === id; });
      return s ? (s.icon + ' ' + s.label) : id;
    },

    getSettingLabel: function(id) {
      var s = SETTINGS.find(function(x) { return x.id === id; });
      return s ? (s.icon + ' ' + s.label) : id;
    },

    // ── Banner UI ─────────────────────────────────────────────
    // Injects a compact focus mode bar above page content.
    // Call after DOMContentLoaded on each page.
    injectBanner: function() {
      if (document.getElementById('rdx-focus-banner')) return;

      var f = this.get();
      var self = this;

      // Inject CSS once
      if (!document.getElementById('rdx-focus-styles')) {
        var style = document.createElement('style');
        style.id = 'rdx-focus-styles';
        style.textContent = [
          '#rdx-focus-banner{position:relative;z-index:150;background:#1B4F72;color:#fff;padding:0 20px;display:flex;align-items:center;gap:12px;min-height:38px;font-family:"IBM Plex Sans",-apple-system,sans-serif;flex-wrap:wrap;border-bottom:2px solid #2874A6}',
          '#rdx-focus-banner.inactive{background:#F0F3F7;border-bottom:1px solid #E2E8F0}',
          '.rfb-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;opacity:.7;white-space:nowrap}',
          '#rdx-focus-banner.inactive .rfb-label{color:#64748B}',
          '.rfb-chips{display:flex;gap:5px;flex-wrap:wrap;flex:1;padding:5px 0}',
          '.rfb-chip{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:600;border:1.5px solid rgba(255,255,255,.25);background:rgba(255,255,255,.1);color:#fff;cursor:pointer;transition:all .15s;white-space:nowrap;font-family:inherit}',
          '.rfb-chip:hover{background:rgba(255,255,255,.2)}',
          '.rfb-chip.active{background:#fff;color:#1B4F72;border-color:#fff}',
          '#rdx-focus-banner.inactive .rfb-chip{border-color:#CBD5E1;background:#fff;color:#64748B}',
          '#rdx-focus-banner.inactive .rfb-chip:hover{border-color:#2874A6;color:#2874A6}',
          '#rdx-focus-banner.inactive .rfb-chip.active{background:#2874A6;color:#fff;border-color:#2874A6}',
          '.rfb-active-badge{display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);border-radius:10px;padding:3px 10px;font-size:11px;font-weight:700;color:#fff;white-space:nowrap}',
          '.rfb-clear{font-size:10px;font-weight:700;opacity:.6;cursor:pointer;padding:2px 6px;border-radius:5px;border:1px solid rgba(255,255,255,.3);background:transparent;color:#fff;font-family:inherit;transition:all .15s;white-space:nowrap}',
          '.rfb-clear:hover{opacity:1;background:rgba(255,255,255,.15)}',
          '#rdx-focus-banner.inactive .rfb-clear{color:#64748B;border-color:#CBD5E1}',
          '.rfb-toggle{font-size:11px;font-weight:600;cursor:pointer;padding:3px 8px;border-radius:5px;border:none;background:rgba(255,255,255,.12);color:rgba(255,255,255,.8);font-family:inherit;transition:all .15s;white-space:nowrap}',
          '.rfb-toggle:hover{background:rgba(255,255,255,.22)}',
          '#rdx-focus-banner.inactive .rfb-toggle{background:#E2E8F0;color:#64748B}',
          '.rfb-expanded{display:none;width:100%;padding:8px 0 10px;border-top:1px solid rgba(255,255,255,.12)}',
          '#rdx-focus-banner.inactive .rfb-expanded{border-top-color:#E2E8F0}',
          '.rfb-expanded.open{display:block}',
          '.rfb-row{display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap}',
          '.rfb-row-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;opacity:.6;min-width:60px;white-space:nowrap}',
          '#rdx-focus-banner.inactive .rfb-row-label{color:#94A3B8}',
        ].join('\n');
        document.head.appendChild(style);
      }

      var banner = document.createElement('div');
      banner.id = 'rdx-focus-banner';
      banner.className = this.isActive() ? '' : 'inactive';

      banner.innerHTML = this._renderBannerHTML(f);

      // Insert after nav (body padding-top handles nav height)
      var nav = document.getElementById('rdx-global-nav');
      if (nav && nav.nextSibling) {
        nav.parentNode.insertBefore(banner, nav.nextSibling);
      } else {
        document.body.insertBefore(banner, document.body.firstChild);
      }

      // Listen for external changes
      window.addEventListener('rdxfocuschange', function(e) {
        self._refreshBanner();
      });
    },

    _renderBannerHTML: function(f) {
      var active = f.specialty !== 'all' || f.setting !== 'all';
      var parts = [];

      if (active) {
        // Compact active state: show what's set + clear button
        parts.push('<span class="rfb-label">Focus Mode</span>');
        parts.push('<div class="rfb-chips">');
        if (f.specialty !== 'all') {
          parts.push('<span class="rfb-active-badge">' + this.getSpecialtyLabel(f.specialty) + '</span>');
        }
        if (f.setting !== 'all') {
          parts.push('<span class="rfb-active-badge">' + this.getSettingLabel(f.setting) + '</span>');
        }
        parts.push('</div>');
        parts.push('<button class="rfb-toggle" onclick="RDXFocus._toggleExpanded()">Change ▾</button>');
        parts.push('<button class="rfb-clear" onclick="RDXFocus.clear();RDXFocus._refreshBanner();">✕ Clear</button>');
      } else {
        // Inactive: show as a compact inline selector
        parts.push('<span class="rfb-label">Focus</span>');
        parts.push('<div class="rfb-chips">');
        // Quick specialty chips (most common)
        var quickSpecialties = [
          { id: 'allergy',    icon: '🌿', label: 'A/I' },
          { id: 'cardiology', icon: '❤️', label: 'Cards' },
          { id: 'pulmonary',  icon: '🫁', label: 'Pulm' },
          { id: 'infectious', icon: '🦠', label: 'ID' },
          { id: 'neurology',  icon: '🧠', label: 'Neuro' },
        ];
        quickSpecialties.forEach(function(s) {
          var isActive = f.specialty === s.id;
          parts.push('<button class="rfb-chip' + (isActive ? ' active' : '') + '" onclick="RDXFocus._quickSet(\'' + s.id + '\',\'all\')">' + s.icon + ' ' + s.label + '</button>');
        });
        parts.push('</div>');
        parts.push('<button class="rfb-toggle" onclick="RDXFocus._toggleExpanded()">More ▾</button>');
      }

      // Expanded panel (hidden by default)
      parts.push('<div class="rfb-expanded" id="rfb-expanded">');
      parts.push('<div class="rfb-row"><span class="rfb-row-label">Specialty</span>');
      SPECIALTIES.forEach(function(s) {
        var isActive = f.specialty === s.id;
        parts.push('<button class="rfb-chip' + (isActive ? ' active' : '') + '" onclick="RDXFocus._setSpecialty(\'' + s.id + '\')">' + (s.id === 'all' ? 'All' : s.icon + ' ' + s.label) + '</button>');
      });
      parts.push('</div>');
      parts.push('<div class="rfb-row"><span class="rfb-row-label">Setting</span>');
      SETTINGS.forEach(function(s) {
        var isActive = f.setting === s.id;
        parts.push('<button class="rfb-chip' + (isActive ? ' active' : '') + '" onclick="RDXFocus._setSetting(\'' + s.id + '\')">' + (s.id === 'all' ? 'All' : s.icon + ' ' + s.label) + '</button>');
      });
      parts.push('</div></div>');

      return parts.join('');
    },

    _refreshBanner: function() {
      var banner = document.getElementById('rdx-focus-banner');
      if (!banner) return;
      var f = this.get();
      banner.className = this.isActive() ? '' : 'inactive';
      banner.innerHTML = this._renderBannerHTML(f);
      // Re-apply to page
      this.applyToPage();
    },

    _toggleExpanded: function() {
      var panel = document.getElementById('rfb-expanded');
      if (panel) panel.classList.toggle('open');
    },

    _quickSet: function(specialty, setting) {
      var current = this.get();
      // Toggle off if already active
      if (current.specialty === specialty && (setting === 'all' || current.setting === setting)) {
        this.set('all', 'all');
      } else {
        this.set(specialty, setting || current.setting);
      }
      this._refreshBanner();
      this.applyToPage();
    },

    _setSpecialty: function(specialty) {
      var current = this.get();
      this.set(specialty, current.setting);
      this._refreshBanner();
      this.applyToPage();
    },

    _setSetting: function(setting) {
      var current = this.get();
      this.set(current.specialty, setting);
      this._refreshBanner();
      this.applyToPage();
    },

    // ── Page Application ───────────────────────────────────────
    // Detects current page and applies focus mode to its filter UI.
    applyToPage: function() {
      var f = this.get();
      var path = window.location.pathname;

      if (path.indexOf('casedx') !== -1) {
        this._applyToCaseDx(f);
      } else if (path.indexOf('clinic-board') !== -1) {
        this._applyToClinicBoard(f);
      } else if (path.indexOf('mechanism') !== -1 && path.indexOf('index') !== -1) {
        this._applyToMechanismIndex(f);
      } else if (path.indexOf('virtual-emr') !== -1) {
        this._applyToVirtualEMR(f);
      } else if (path.indexOf('coachdx') !== -1) {
        this._applyToCoachDx(f);
      }
    },

    // casedx.html: click the matching filter chips
    _applyToCaseDx: function(f) {
      var self = this;
      // Click specialty chip
      if (f.specialty !== 'all') {
        document.querySelectorAll('.fchips .fc').forEach(function(btn) {
          var onclick = btn.getAttribute('onclick') || '';
          if (onclick.indexOf("'specialty'") !== -1 && onclick.indexOf("'" + f.specialty + "'") !== -1) {
            btn.click();
          }
        });
      }
      // Click setting chip
      if (f.setting !== 'all') {
        document.querySelectorAll('.fchips .fc').forEach(function(btn) {
          var onclick = btn.getAttribute('onclick') || '';
          if (onclick.indexOf("'setting'") !== -1 && onclick.indexOf("'" + f.setting + "'") !== -1) {
            btn.click();
          }
        });
      }
    },

    // mechanism/index.html: click the matching filter pill
    _applyToMechanismIndex: function(f) {
      if (f.specialty === 'all') return;
      document.querySelectorAll('.filter-pill').forEach(function(btn) {
        var onclick = btn.getAttribute('onclick') || '';
        if (onclick.indexOf("'" + f.specialty + "'") !== -1) {
          btn.click();
        }
      });
    },

    // clinic-board.html: filter the CLINIC_CASES pool before generateSchedule
    _applyToClinicBoard: function(f) {
      // Store on window so generateSchedule can read it
      window._rdxFocusSpecialty = f.specialty;
      window._rdxFocusSetting = f.setting;
      // If board already rendered, re-generate with filter applied
      if (window.generateSchedule) {
        generateSchedule();
      }
    },

    // virtual-emr.html: pre-select specialty on setting screen
    _applyToVirtualEMR: function(f) {
      if (f.specialty === 'all' && f.setting === 'all') return;
      // Pre-select specialty if available — handled by the setting selector render
      if (window.S) {
        if (f.specialty !== 'all') window.S._focusSpecialty = f.specialty;
        if (f.setting !== 'all' && f.setting !== 'icu') {
          window.S.clinicalSetting = f.setting;
        }
      }
    },

    // coachdx.html: filter topic list if specialty filter active
    _applyToCoachDx: function(f) {
      window._rdxFocusSpecialty = f.specialty;
      // CoachDx can read window._rdxFocusSpecialty to filter its topic list
    },
  };

  window.RDXFocus = RDXFocus;

})(window);
