/* js/patient-list.js — Unified Patient List for ReasonDx Virtual EMR
 * Replaces the basic case picker with an EMR-native patient list.
 * Integrates: EMR_MANIFEST, PATIENT_NAMES, difficulty settings, spoiler mode, completion tracking.
 */
(function() {
  'use strict';

  var ACUITY = {
    1: { label: 'ESI-1 Resuscitation', short: 'ESI-1', color: '#C62828', bg: '#FFEBEE' },
    2: { label: 'ESI-2 Emergent', short: 'ESI-2', color: '#E65100', bg: '#FFF3E0' },
    3: { label: 'ESI-3 Urgent', short: 'ESI-3', color: '#F9A825', bg: '#FFFDE7' },
    4: { label: 'ESI-4 Less Urgent', short: 'ESI-4', color: '#2E7D32', bg: '#E8F5E9' },
    5: { label: 'ESI-5 Non-Urgent', short: 'ESI-5', color: '#1565C0', bg: '#E3F2FD' }
  };

  var CATEGORIES = {
    cardiology: { label: 'Cardiology', emoji: '\u2764\uFE0F', color: '#C62828' },
    pulmonary: { label: 'Pulmonary', emoji: '\uD83E\uDEC1', color: '#1565C0' },
    neurology: { label: 'Neurology', emoji: '\uD83E\uDDE0', color: '#6A1B9A' },
    gi: { label: 'GI', emoji: '\uD83E\uDDB7', color: '#E65100' },
    infectious: { label: 'Infectious', emoji: '\uD83E\uDDA0', color: '#2E7D32' },
    endocrine: { label: 'Endocrine', emoji: '\uD83E\uDE78', color: '#00838F' },
    renal: { label: 'Renal', emoji: '\uD83E\uDEC0', color: '#4527A0' },
    hematology: { label: 'Hematology', emoji: '\uD83E\uDE78', color: '#AD1457' },
    allergy: { label: 'Allergy / Immunology', emoji: '\u26A0\uFE0F', color: '#EF6C00' },
    toxicology: { label: 'Toxicology', emoji: '\u2620\uFE0F', color: '#37474F' },
    surgery: { label: 'Surgery', emoji: '\uD83E\uDE7A', color: '#283593' }
  };

  var SETTINGS = {
    ed: { label: 'Emergency Department', emoji: '\uD83D\uDEA8' },
    inpatient: { label: 'Inpatient', emoji: '\uD83C\uDFE5' },
    consult: { label: 'Consult', emoji: '\uD83D\uDCCB' },
    clinic: { label: 'Clinic', emoji: '\uD83E\uDE7A' },
    icu: { label: 'ICU', emoji: '\uD83C\uDD98' }
  };

  // Internal filter state
  var _filter = {
    search: '',
    category: 'all',
    acuity: 'all',
    status: 'all',    // all | new | started | completed
    hideDx: false
  };

  // Load persisted preferences
  try {
    var saved = JSON.parse(localStorage.getItem('rdx-pl-filter'));
    if (saved) {
      _filter.hideDx = saved.hideDx || false;
    }
  } catch(e) {}

  // ═══════════════════════════════════════════════════════
  // HELPERS
  // ═══════════════════════════════════════════════════════
  function _esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function _getCompletionStatus(caseId) {
    // Check localStorage for submission data
    try {
      var keys = Object.keys(localStorage);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].indexOf('subs-') === 0) {
          var subs = JSON.parse(localStorage.getItem(keys[i]));
          if (Array.isArray(subs)) {
            for (var j = 0; j < subs.length; j++) {
              // Match by patient name or case fields
              if (subs[j].caseId === caseId) return 'completed';
            }
          }
        }
      }
      // Check for drafts
      for (var k = 0; k < keys.length; k++) {
        if (keys[k].indexOf('draft-') === 0 && keys[k].indexOf(caseId) >= 0) {
          var draft = JSON.parse(localStorage.getItem(keys[k]));
          if (draft && Object.values(draft).some(function(v) { return v && v.trim(); })) return 'started';
        }
      }
      // Check Mission Control progress
      var mc = JSON.parse(localStorage.getItem('mc-' + caseId));
      if (mc && mc.completed && Object.keys(mc.completed).length > 0) return 'started';
    } catch(e) {}
    return 'new';
  }

  function _flattenManifest(manifest, setting, specialty) {
    var cases = [];
    var SPEC_MAP = window.CASE_SPECIALTY_MAP;
    var filtered = manifest;
    
    if (specialty && specialty !== 'em' && SPEC_MAP) {
      filtered = SPEC_MAP.filterManifest(manifest, specialty, true);
    }

    filtered.forEach(function(group) {
      group.cases.forEach(function(c) {
        var pn = (window.PATIENT_NAMES && PATIENT_NAMES[c.id]) || null;
        cases.push({
          id: c.id,
          diagnosis: c.diagnosis,
          category: c.category || 'unknown',
          acuity: c.acuity || 3,
          presentation: group.presentation,
          setting: c.setting || setting || 'ed',
          name: pn ? pn.name : _generateName(c.id),
          age: pn ? pn.age : _hashAge(c.id),
          sex: pn ? pn.sex : 'Unknown',
          variation: c.variation || false,
          allergySubtype: c.allergySubtype || null
        });
      });
    });
    return cases;
  }

  function _generateName(id) {
    // Fallback name from case ID
    return id.split('-').map(function(w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(' ');
  }

  function _hashAge(id) {
    var hash = 0;
    for (var i = 0; i < id.length; i++) hash = ((hash << 5) - hash) + id.charCodeAt(i);
    return 20 + (Math.abs(hash) % 65);
  }

  function _getUniqueCategories(cases) {
    var cats = {};
    cases.forEach(function(c) { cats[c.category] = true; });
    return Object.keys(cats).sort();
  }

  // ═══════════════════════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════════════════════
  window.PatientList = {

    render: function(setting, specialty, embedded) {
      var manifest = window.EMR_MANIFEST || [];
      var cases = _flattenManifest(manifest, setting, specialty);
      var uniqueCats = _getUniqueCategories(cases);
      var settingLabel = (SETTINGS[setting] || {}).label || 'Clinical';
      var settingEmoji = (SETTINGS[setting] || {}).emoji || '\uD83C\uDFE5';
      var specNames = { im: 'Internal Medicine', surgery: 'Surgery', pediatrics: 'Pediatrics', obgyn: 'OB/GYN', psychiatry: 'Psychiatry', fm: 'Family Medicine', neuro: 'Neurology', em: 'Emergency Medicine' };

      // Apply filters
      var filtered = cases.filter(function(c) {
        if (_filter.search) {
          var q = _filter.search.toLowerCase();
          var searchable = (c.name + ' ' + c.diagnosis + ' ' + c.presentation + ' ' + c.category + ' ' + c.id).toLowerCase();
          if (searchable.indexOf(q) < 0) return false;
        }
        if (_filter.category !== 'all' && c.category !== _filter.category) return false;
        if (_filter.acuity !== 'all' && c.acuity !== parseInt(_filter.acuity)) return false;
        if (_filter.status !== 'all') {
          var status = _getCompletionStatus(c.id);
          if (_filter.status !== status) return false;
        }
        return true;
      });

      // Sort: ESI-1 first, then alphabetical
      filtered.sort(function(a, b) {
        if (a.acuity !== b.acuity) return a.acuity - b.acuity;
        return a.name.localeCompare(b.name);
      });

      var html = '';

      if (embedded) {
        // Embedded mode: just filters + table, no outer wrapper/nav/title
        html += '<div style="padding:16px 20px;font-family:\'IBM Plex Sans\',-apple-system,sans-serif">';
      } else {
        // ─── Header ───
        html += '<div style="max-width:1200px;margin:0 auto;padding:24px 16px;font-family:\'IBM Plex Sans\',-apple-system,sans-serif">';
      }
      
      if (!embedded) {
      // Top nav
      html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">';
      html += '<a href="index.html" style="color:#64748b;font-size:12px;text-decoration:none">\u2190 ReasonDx</a>';
      html += '<span style="color:#cbd5e1">|</span>';
      html += '<a href="virtual-emr.html" style="color:#2874A6;font-size:12px;text-decoration:none;font-weight:600">\u2190 Change Setting</a>';
      html += '</div>';

      // Title area
      html += '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:24px;flex-wrap:wrap">';
      html += '<div>';
      html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">';
      html += '<span style="font-size:24px">' + settingEmoji + '</span>';
      html += '<h1 style="font-size:clamp(20px,4vw,26px);font-weight:700;color:#1A1A2E;margin:0">Patient List</h1>';
      html += '<span style="padding:4px 12px;border-radius:6px;font-size:12px;font-weight:600;color:#2874A6;background:#EBF5FB">' + _esc(settingLabel) + '</span>';
      if (specialty && specialty !== 'em') {
        html += '<span style="padding:4px 12px;border-radius:6px;font-size:12px;font-weight:600;color:#6A1B9A;background:#F3E5F5">' + _esc(specNames[specialty] || specialty) + '</span>';
      }
      html += '</div>';
      html += '<p style="font-size:13px;color:#5A6178;margin:4px 0 0">Select a patient to open their chart. ' + filtered.length + ' of ' + cases.length + ' patients.</p>';
      html += '</div>';
      
      // Spoiler toggle
      html += '<button type="button" onclick="PatientList._toggleSpoiler()" style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;transition:all .15s;min-height:40px;border:1px solid ' + (_filter.hideDx ? '#2874A6' : '#DFE1E6') + ';background:' + (_filter.hideDx ? '#EBF5FB' : '#fff') + ';color:' + (_filter.hideDx ? '#2874A6' : '#5A6178') + '">';
      html += _filter.hideDx ? '\uD83D\uDE48 Diagnoses Hidden \u2014 Tap to Reveal' : '\uD83D\uDC41\uFE0F Hide Diagnoses (Spoiler-Free Mode)';
      html += '</button>';
      html += '</div>';
      } else {
        // Embedded: compact header with count + spoiler toggle
        html += '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:12px;flex-wrap:wrap">';
        html += '<span style="font-size:13px;color:#5A6178">' + filtered.length + ' of ' + cases.length + ' patients</span>';
        html += '<button type="button" onclick="PatientList._toggleSpoiler()" style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;border:1px solid ' + (_filter.hideDx ? '#2874A6' : '#DFE1E6') + ';background:' + (_filter.hideDx ? '#EBF5FB' : '#fff') + ';color:' + (_filter.hideDx ? '#2874A6' : '#8C92A4') + '">';
        html += _filter.hideDx ? '\uD83D\uDE48 Hidden' : '\uD83D\uDC41\uFE0F Hide Dx';
        html += '</button>';
        html += '</div>';
      }

      // ─── Filter Bar ───
      html += '<div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;align-items:center">';
      
      // Search
      html += '<div style="position:relative;flex:1;min-width:200px">';
      html += '<input type="text" id="plSearch" value="' + _esc(_filter.search) + '" placeholder="\uD83D\uDD0D Search patients, diagnoses, symptoms\u2026" oninput="PatientList._search(this.value)" style="width:100%;padding:10px 12px 10px 36px;border:1px solid #DFE1E6;border-radius:8px;font-size:13px;font-family:inherit;background:#fff;outline:none;min-height:42px">';
      html += '<span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:#8C92A4;font-size:14px;pointer-events:none">\uD83D\uDD0D</span>';
      html += '</div>';

      // Category filter
      html += '<select onchange="PatientList._setFilter(this.dataset.fk,this.value)" data-fk="category" style="padding:10px 12px;border:1px solid #DFE1E6;border-radius:8px;font-size:12px;font-family:inherit;background:#fff;cursor:pointer;min-height:42px;color:#1A1A2E">';
      html += '<option value="all"' + (_filter.category === 'all' ? ' selected' : '') + '>All Systems</option>';
      uniqueCats.forEach(function(cat) {
        var info = CATEGORIES[cat] || { label: cat, emoji: '\uD83D\uDCCB' };
        html += '<option value="' + cat + '"' + (_filter.category === cat ? ' selected' : '') + '>' + info.emoji + ' ' + _esc(info.label) + '</option>';
      });
      html += '</select>';

      // Acuity filter
      html += '<select onchange="PatientList._setFilter(this.dataset.fk,this.value)" data-fk="acuity" style="padding:10px 12px;border:1px solid #DFE1E6;border-radius:8px;font-size:12px;font-family:inherit;background:#fff;cursor:pointer;min-height:42px;color:#1A1A2E">';
      html += '<option value="all"' + (_filter.acuity === 'all' ? ' selected' : '') + '>All Acuities</option>';
      [1, 2, 3, 4].forEach(function(a) {
        var info = ACUITY[a];
        html += '<option value="' + a + '"' + (_filter.acuity == a ? ' selected' : '') + '>' + info.short + '</option>';
      });
      html += '</select>';

      // Status filter
      html += '<select onchange="PatientList._setFilter(this.dataset.fk,this.value)" data-fk="status" style="padding:10px 12px;border:1px solid #DFE1E6;border-radius:8px;font-size:12px;font-family:inherit;background:#fff;cursor:pointer;min-height:42px;color:#1A1A2E">';
      html += '<option value="all"' + (_filter.status === 'all' ? ' selected' : '') + '>All Status</option>';
      html += '<option value="new"' + (_filter.status === 'new' ? ' selected' : '') + '>\u{1F195} New</option>';
      html += '<option value="started"' + (_filter.status === 'started' ? ' selected' : '') + '>\u23F3 In Progress</option>';
      html += '<option value="completed"' + (_filter.status === 'completed' ? ' selected' : '') + '>\u2705 Completed</option>';
      html += '</select>';

      html += '</div>';

      // ─── Patient Table ───
      if (filtered.length === 0) {
        html += '<div style="text-align:center;padding:60px 20px;color:#8C92A4">';
        html += '<div style="font-size:40px;margin-bottom:12px">\uD83D\uDD0D</div>';
        html += '<p style="font-size:15px;font-weight:600;color:#5A6178">No patients match your filters</p>';
        html += '<p style="font-size:13px;margin-top:4px">Try adjusting your search or filter criteria.</p>';
        html += '<button type="button" onclick="PatientList._clearFilters()" style="margin-top:16px;padding:10px 20px;border:1px solid #2874A6;border-radius:8px;background:#EBF5FB;color:#2874A6;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer">Clear All Filters</button>';
        html += '</div>';
      } else {
        // Table header
        html += '<div style="border:1px solid #DFE1E6;border-radius:10px;overflow:hidden;background:#fff">';
        html += '<div style="display:grid;grid-template-columns:44px 1fr 1fr 100px 100px 80px 90px;gap:0;padding:10px 14px;background:#F7F8FA;border-bottom:1px solid #DFE1E6;font-size:10px;font-weight:700;color:#8C92A4;text-transform:uppercase;letter-spacing:.5px">';
        html += '<span></span><span>Patient</span><span>' + (_filter.hideDx ? 'Presentation' : 'Diagnosis') + '</span><span>Acuity</span><span>System</span><span>Status</span><span></span>';
        html += '</div>';

        // Table rows
        filtered.forEach(function(c, idx) {
          var acuityInfo = ACUITY[c.acuity] || ACUITY[3];
          var catInfo = CATEGORIES[c.category] || { label: c.category, emoji: '\uD83D\uDCCB', color: '#607D8B' };
          var status = _getCompletionStatus(c.id);
          var statusBadge = status === 'completed' ? '\u2705' : status === 'started' ? '\u23F3' : '\u{1F195}';
          var statusLabel = status === 'completed' ? 'Done' : status === 'started' ? 'Active' : 'New';

          var caseUrl = 'virtual-emr.html?case=' + c.id;
          if (setting) caseUrl += '&setting=' + (c.setting || setting);
          if (specialty) caseUrl += '&specialty=' + specialty;

          var displayDx = _filter.hideDx ? c.presentation + ' \u2014 Case ' + (idx + 1) : c.diagnosis;
          var initials = c.name.split(' ').map(function(w) { return w[0]; }).join('').substring(0, 2);

          var rowBg = idx % 2 === 0 ? '#fff' : '#FAFBFC';
          
          html += '<a href="' + caseUrl + '" style="display:grid;grid-template-columns:44px 1fr 1fr 100px 100px 80px 90px;gap:0;padding:10px 14px;border-bottom:1px solid #ECEEF2;text-decoration:none;color:inherit;transition:background .1s;background:' + rowBg + '" onmouseover="this.style.background=\'#EBF5FB\'" onmouseout="this.style.background=\'' + rowBg + '\'">';
          
          // Avatar
          html += '<div style="display:flex;align-items:center"><div style="width:36px;height:36px;border-radius:50%;background:' + acuityInfo.bg + ';color:' + acuityInfo.color + ';display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">' + _esc(initials) + '</div></div>';
          
          // Patient name + age
          html += '<div style="display:flex;flex-direction:column;justify-content:center;min-width:0">';
          html += '<div style="font-size:13px;font-weight:600;color:#1A1A2E;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + _esc(c.name) + '</div>';
          html += '<div style="font-size:11px;color:#8C92A4">' + c.age + ' ' + (c.sex === 'Female' ? 'F' : c.sex === 'Male' ? 'M' : '') + '</div>';
          html += '</div>';
          
          // Diagnosis/Presentation
          html += '<div style="display:flex;align-items:center;min-width:0"><span style="font-size:12px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + _esc(displayDx) + '</span></div>';
          
          // Acuity badge
          html += '<div style="display:flex;align-items:center"><span style="padding:3px 8px;border-radius:4px;font-size:10px;font-weight:700;color:' + acuityInfo.color + ';background:' + acuityInfo.bg + '">' + acuityInfo.short + '</span></div>';
          
          // System
          html += '<div style="display:flex;align-items:center"><span style="font-size:11px;color:#5A6178">' + catInfo.emoji + ' ' + _esc(catInfo.label) + '</span></div>';
          
          // Status
          html += '<div style="display:flex;align-items:center"><span style="font-size:11px">' + statusBadge + ' ' + statusLabel + '</span></div>';
          
          // Action
          html += '<div style="display:flex;align-items:center;justify-content:flex-end"><span style="padding:6px 12px;border-radius:6px;font-size:11px;font-weight:600;color:#2874A6;background:#EBF5FB;white-space:nowrap">Open Chart \u2192</span></div>';
          
          html += '</a>';
        });

        html += '</div>';
      }

      // ─── Stats Footer ───
      html += '<div style="margin-top:16px;display:flex;gap:16px;flex-wrap:wrap;justify-content:center">';
      var stats = { total: cases.length, showing: filtered.length };
      var newCount = 0, startedCount = 0, doneCount = 0;
      cases.forEach(function(c) {
        var s = _getCompletionStatus(c.id);
        if (s === 'completed') doneCount++;
        else if (s === 'started') startedCount++;
        else newCount++;
      });
      html += '<span style="font-size:11px;color:#8C92A4">\uD83D\uDCCA ' + stats.total + ' total patients</span>';
      html += '<span style="font-size:11px;color:#8C92A4">\u{1F195} ' + newCount + ' new</span>';
      html += '<span style="font-size:11px;color:#8C92A4">\u23F3 ' + startedCount + ' in progress</span>';
      html += '<span style="font-size:11px;color:#8C92A4">\u2705 ' + doneCount + ' completed</span>';
      html += '</div>';

      html += '</div>';

      // ─── Responsive override ───
      html += '<style>';
      html += '@media(max-width:768px){';
      html += '[style*="grid-template-columns:44px 1fr 1fr 100px 100px 80px 90px"]{grid-template-columns:44px 1fr 80px 70px!important}';
      html += '[style*="grid-template-columns:44px 1fr 1fr 100px 100px 80px 90px"] > :nth-child(3),[style*="grid-template-columns:44px 1fr 1fr 100px 100px 80px 90px"] > :nth-child(5),[style*="grid-template-columns:44px 1fr 1fr 100px 100px 80px 90px"] > :nth-child(6){display:none!important}';
      html += '}';
      html += '</style>';

      return html;
    },

    // ═══════════════════════════════════════════════════════
    // FILTER ACTIONS (called from inline handlers)
    // ═══════════════════════════════════════════════════════
    _search: function(val) {
      _filter.search = val;
      PatientList._rerender();
    },

    _setFilter: function(key, val) {
      _filter[key] = val;
      PatientList._rerender();
    },

    _toggleSpoiler: function() {
      _filter.hideDx = !_filter.hideDx;
      try { localStorage.setItem('rdx-pl-filter', JSON.stringify({ hideDx: _filter.hideDx })); } catch(e) {}
      PatientList._rerender();
    },

    _clearFilters: function() {
      _filter.search = '';
      _filter.category = 'all';
      _filter.acuity = 'all';
      _filter.status = 'all';
      PatientList._rerender();
    },

    _rerender: function() {
      try {
        var params = new URLSearchParams(window.location.search);
        var setting = params.get('setting') || ((window.S && S.clinicalSetting) ? S.clinicalSetting : null);
        var specialty = params.get('specialty') || ((window.S && S.specialty) ? S.specialty : null);
        var app = document.getElementById('app');
        if (!app || !window.EMR_MANIFEST) return;

        // If inside the EMR Overview, re-render the embedded patient list portion
        var plInner = document.getElementById('patientListInner');
        if (plInner) {
          plInner.innerHTML = PatientList.render(setting, specialty, true);
        } else {
          // Standalone mode
          app.innerHTML = PatientList.render(setting, specialty);
        }
        // Restore focus to search
        var searchEl = document.getElementById('plSearch');
        if (searchEl && _filter.search) {
          searchEl.focus();
          searchEl.setSelectionRange(_filter.search.length, _filter.search.length);
        }
      } catch(e) {
        console.error('PatientList._rerender error:', e);
      }
    }
  };

})();
