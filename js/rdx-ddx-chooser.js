/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx DDx Chooser — js/rdx-ddx-chooser.js
 * ═══════════════════════════════════════════════════════════════
 * Structured differential diagnosis builder with:
 * - Searchable 800+ diagnosis database
 * - Drag/reorder priority ranking
 * - "Likely" vs "Must-Not-Miss" categorization
 * - Phase-aware snapshots (Phase 1, 4, 6)
 * - Comparison across phases for bias detection
 *
 * Requires: emr-data/dx-database.js loaded first
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  const DdxChooser = {

    _entries: [],       // current list: [{name, category, rank}]
    _snapshots: {},     // {phase1: [...], phase4: [...], phase6: [...]}
    _containerId: null,
    _onChangeCallback: null,

    /**
     * Initialize and render into a container element.
     */
    init: function(containerId, options) {
      options = options || {};
      this._containerId = containerId;
      this._entries = [];
      this._snapshots = {};
      this._onChangeCallback = options.onChange || null;
      this.render();
    },

    /**
     * Render the full chooser UI.
     */
    render: function() {
      var container = document.getElementById(this._containerId);
      if (!container) return;

      var self = this;
      var html = '';

      // Search input
      html += '<div style="margin-bottom:12px">';
      html += '<div style="font-size:13px;font-weight:700;color:#1B4F72;margin-bottom:6px">Search & Add Diagnoses</div>';
      html += '<div style="position:relative">';
      html += '<input type="text" id="ddxSearchInput" placeholder="Type to search 800+ diagnoses..." autocomplete="off" ';
      html += 'style="width:100%;padding:10px 14px;border:2px solid #D0D5DD;border-radius:8px;font-size:14px;font-family:inherit;box-sizing:border-box" ';
      html += 'oninput="DdxChooser._onSearch(this.value)" onfocus="DdxChooser._onSearch(this.value)">';
      html += '<div id="ddxSearchResults" style="display:none;position:absolute;top:100%;left:0;right:0;max-height:240px;overflow-y:auto;background:#fff;border:1px solid #D0D5DD;border-top:none;border-radius:0 0 8px 8px;z-index:100;box-shadow:0 4px 12px rgba(0,0,0,.1)"></div>';
      html += '</div></div>';

      // Current differential list
      html += '<div style="font-size:13px;font-weight:700;color:#1B4F72;margin-bottom:6px">Your Differential (' + this._entries.length + ')</div>';

      if (this._entries.length === 0) {
        html += '<div style="text-align:center;padding:20px;color:#94A3B8;font-size:13px;border:2px dashed #E2E8F0;border-radius:8px">Search above to add diagnoses to your differential</div>';
      } else {
        this._entries.forEach(function(entry, i) {
          var rank = i + 1;
          var catColor = entry.category === 'must-not-miss' ? '#DC2626' : '#2874A6';
          var catBg = entry.category === 'must-not-miss' ? '#FEF2F2' : '#EBF5FB';
          var catLabel = entry.category === 'must-not-miss' ? 'MUST NOT MISS' : 'LIKELY';

          html += '<div style="display:flex;align-items:center;gap:8px;padding:10px 12px;margin-bottom:6px;border:2px solid ' + (rank === 1 ? '#2874A6' : '#E2E8F0') + ';border-radius:8px;background:#fff">';

          // Rank number
          html += '<span style="width:28px;height:28px;border-radius:50%;background:' + (rank <= 2 ? '#2874A6' : '#F1F5F9') + ';color:' + (rank <= 2 ? '#fff' : '#64748B') + ';display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0">#' + rank + '</span>';

          // Diagnosis name
          html += '<div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600;color:#1a1a2e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + self._esc(entry.name) + '</div></div>';

          // Category toggle
          html += '<button type="button" onclick="DdxChooser._toggleCategory(' + i + ')" style="padding:4px 10px;border:1px solid ' + catColor + ';border-radius:12px;background:' + catBg + ';color:' + catColor + ';font-size:10px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;letter-spacing:.3px">' + catLabel + '</button>';

          // Move buttons
          html += '<div style="display:flex;flex-direction:column;gap:2px">';
          if (i > 0) html += '<button type="button" onclick="DdxChooser._move(' + i + ',-1)" style="padding:2px 6px;border:1px solid #E2E8F0;border-radius:4px;background:#fff;cursor:pointer;font-size:11px;line-height:1" title="Move up">\u2191</button>';
          if (i < self._entries.length - 1) html += '<button type="button" onclick="DdxChooser._move(' + i + ',1)" style="padding:2px 6px;border:1px solid #E2E8F0;border-radius:4px;background:#fff;cursor:pointer;font-size:11px;line-height:1" title="Move down">\u2193</button>';
          html += '</div>';

          // Remove
          html += '<button type="button" onclick="DdxChooser._remove(' + i + ')" style="padding:2px 6px;border:1px solid #FECACA;border-radius:4px;background:#FEF2F2;cursor:pointer;font-size:11px;color:#DC2626;line-height:1" title="Remove">\u2715</button>';

          html += '</div>';
        });
      }

      // Submit button (only show if entries exist)
      if (this._entries.length > 0) {
        html += '<button type="button" onclick="DdxChooser._submit()" style="width:100%;padding:12px;margin-top:12px;background:#2874A6;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit">Submit Differential & Continue</button>';
      }

      container.innerHTML = html;

      // Close search results on outside click
      document.addEventListener('click', function(e) {
        var results = document.getElementById('ddxSearchResults');
        var input = document.getElementById('ddxSearchInput');
        if (results && !results.contains(e.target) && e.target !== input) {
          results.style.display = 'none';
        }
      });
    },

    /**
     * Search handler — filters diagnosis database.
     */
    _onSearch: function(query) {
      var resultsEl = document.getElementById('ddxSearchResults');
      if (!resultsEl) return;

      if (!query || query.length < 2) {
        resultsEl.style.display = 'none';
        return;
      }

      var db = window.DX_DATABASE || [];
      var q = query.toLowerCase();
      var self = this;
      var alreadyAdded = this._entries.map(function(e) { return e.name.toLowerCase(); });

      var matches = db.filter(function(dx) {
        if (alreadyAdded.indexOf(dx.n.toLowerCase()) !== -1) return false;
        if (dx.n.toLowerCase().indexOf(q) !== -1) return true;
        if (dx.a && dx.a.some(function(a) { return a.toLowerCase().indexOf(q) !== -1; })) return true;
        return false;
      }).slice(0, 12);

      if (matches.length === 0) {
        // Allow custom entry
        resultsEl.innerHTML = '<div onclick="DdxChooser._addCustom(\'' + self._esc(query) + '\')" style="padding:10px 14px;cursor:pointer;font-size:13px;color:#2874A6;font-weight:600;border-bottom:1px solid #F1F5F9">Add custom: "' + self._esc(query) + '"</div>';
        resultsEl.style.display = 'block';
        return;
      }

      var html = '';

      // System color map
      var sysColors = {
        cardiovascular: '#DC2626', pulmonary: '#2563EB', infectious: '#D97706',
        gi: '#059669', renal: '#7C3AED', neuro: '#BE185D', endocrine: '#0891B2',
        heme: '#9333EA', rheum: '#EA580C', tox: '#4F46E5', psych: '#0D9488',
        derm: '#DB2777', msk: '#65A30D', obgyn: '#E11D48', ent: '#6366F1', misc: '#6B7280'
      };

      matches.forEach(function(dx, i) {
        var sysColor = sysColors[dx.s] || '#6B7280';
        html += '<div onclick="DdxChooser._addFromDb(' + i + ',\'' + self._esc(query) + '\')" style="padding:10px 14px;cursor:pointer;font-size:13px;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:8px" onmouseover="this.style.background=\'#F8FAFC\'" onmouseout="this.style.background=\'#fff\'">';
        html += '<span style="width:8px;height:8px;border-radius:50%;background:' + sysColor + ';flex-shrink:0"></span>';
        html += '<span style="flex:1">' + self._esc(dx.n) + '</span>';
        html += '<span style="font-size:10px;color:#94A3B8;text-transform:uppercase;letter-spacing:.5px">' + self._esc(dx.s) + '</span>';
        html += '</div>';
      });

      // Custom entry option at bottom
      html += '<div onclick="DdxChooser._addCustom(\'' + self._esc(query) + '\')" style="padding:10px 14px;cursor:pointer;font-size:12px;color:#64748B;border-top:2px solid #F1F5F9" onmouseover="this.style.background=\'#F8FAFC\'" onmouseout="this.style.background=\'#fff\'">+ Add custom diagnosis: "' + self._esc(query) + '"</div>';

      resultsEl.innerHTML = html;
      resultsEl.style.display = 'block';

      // Stash matches for click handler
      this._lastMatches = matches;
    },

    _addFromDb: function(matchIndex, query) {
      var match = this._lastMatches && this._lastMatches[matchIndex];
      if (!match) return;
      this._entries.push({ name: match.n, category: 'likely', system: match.s });
      document.getElementById('ddxSearchInput').value = '';
      document.getElementById('ddxSearchResults').style.display = 'none';
      this.render();
      if (this._onChangeCallback) this._onChangeCallback(this._entries);
    },

    _addCustom: function(name) {
      if (!name) return;
      this._entries.push({ name: name, category: 'likely', system: 'custom' });
      document.getElementById('ddxSearchInput').value = '';
      document.getElementById('ddxSearchResults').style.display = 'none';
      this.render();
      if (this._onChangeCallback) this._onChangeCallback(this._entries);
    },

    _toggleCategory: function(index) {
      if (this._entries[index]) {
        this._entries[index].category = this._entries[index].category === 'likely' ? 'must-not-miss' : 'likely';
        this.render();
        if (this._onChangeCallback) this._onChangeCallback(this._entries);
      }
    },

    _move: function(index, direction) {
      var newIndex = index + direction;
      if (newIndex < 0 || newIndex >= this._entries.length) return;
      var temp = this._entries[index];
      this._entries[index] = this._entries[newIndex];
      this._entries[newIndex] = temp;
      this.render();
      if (this._onChangeCallback) this._onChangeCallback(this._entries);
    },

    _remove: function(index) {
      this._entries.splice(index, 1);
      this.render();
      if (this._onChangeCallback) this._onChangeCallback(this._entries);
    },

    _submit: function() {
      // Dispatch event so the orchestrator knows the differential was submitted
      window.dispatchEvent(new CustomEvent('ddx:submitted', {
        detail: {
          entries: this._entries.map(function(e, i) {
            return { rank: i + 1, diagnosis: e.name, category: e.category, system: e.system };
          }),
          phase: window.state ? window.state.currentPhase : null,
          timestamp: new Date().toISOString()
        }
      }));
    },

    /**
     * Take a snapshot of the current differential for a phase.
     */
    snapshot: function(phaseLabel) {
      this._snapshots[phaseLabel] = this._entries.map(function(e, i) {
        return { rank: i + 1, diagnosis: e.name, category: e.category, system: e.system };
      });
      return this._snapshots[phaseLabel];
    },

    /**
     * Get all snapshots.
     */
    getSnapshots: function() { return this._snapshots; },

    /**
     * Compare two phase snapshots for bias detection.
     */
    comparePhases: function(phaseA, phaseB) {
      var a = this._snapshots[phaseA] || [];
      var b = this._snapshots[phaseB] || [];

      var aDx = a.map(function(e) { return e.diagnosis.toLowerCase(); });
      var bDx = b.map(function(e) { return e.diagnosis.toLowerCase(); });

      var added = bDx.filter(function(d) { return aDx.indexOf(d) === -1; });
      var removed = aDx.filter(function(d) { return bDx.indexOf(d) === -1; });

      // Rank changes
      var rankChanges = [];
      a.forEach(function(ae) {
        var bEntry = b.find(function(be) { return be.diagnosis.toLowerCase() === ae.diagnosis.toLowerCase(); });
        if (bEntry && bEntry.rank !== ae.rank) {
          rankChanges.push({
            diagnosis: ae.diagnosis,
            fromRank: ae.rank,
            toRank: bEntry.rank,
            direction: bEntry.rank < ae.rank ? 'promoted' : 'demoted'
          });
        }
      });

      // Category changes (likely <-> must-not-miss)
      var categoryChanges = [];
      a.forEach(function(ae) {
        var bEntry = b.find(function(be) { return be.diagnosis.toLowerCase() === ae.diagnosis.toLowerCase(); });
        if (bEntry && bEntry.category !== ae.category) {
          categoryChanges.push({
            diagnosis: ae.diagnosis,
            fromCategory: ae.category,
            toCategory: bEntry.category
          });
        }
      });

      return {
        phaseA: phaseA,
        phaseB: phaseB,
        added: added,
        removed: removed,
        rankChanges: rankChanges,
        categoryChanges: categoryChanges,
        totalChanges: added.length + removed.length + rankChanges.length + categoryChanges.length,
        differentialStable: added.length === 0 && removed.length === 0 && rankChanges.length === 0
      };
    },

    /**
     * Get current entries.
     */
    getEntries: function() {
      return this._entries.map(function(e, i) {
        return { rank: i + 1, diagnosis: e.name, category: e.category, system: e.system };
      });
    },

    /**
     * Clear the chooser.
     */
    clear: function() {
      this._entries = [];
      this._snapshots = {};
      this.render();
    },

    _esc: function(s) {
      return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    }
  };

  window.DdxChooser = DdxChooser;
})();
