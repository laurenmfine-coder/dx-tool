/* eslint-disable no-console */ if(typeof window!=='undefined'&&!window.RDX_DEV){var _ce=console.error;console.error=function(){};}
/* js/patient-list.js — Unified Patient List for ReasonDx Virtual EMR
 * Hospital-location filtering, comprehensive/filtered views, spoiler mode.
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
    allergy: { label: 'Allergy/Immuno', emoji: '\u26A0\uFE0F', color: '#EF6C00' },
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

  // Hospital locations per setting
  var LOCATIONS = {
    ed: [
      { id: 'all', label: 'All Patients' },
      { id: 'resus', label: 'Resus Bay' },
      { id: 'acute', label: 'Acute Care' },
      { id: 'fast-track', label: 'Fast Track' }
    ],
    inpatient: [
      { id: 'all', label: 'All Inpatients' },
      { id: 'medicine', label: 'Medicine' },
      { id: 'telemetry', label: 'Telemetry' },
      { id: 'stepdown', label: 'Step-Down' }
    ],
    icu: [
      { id: 'all', label: 'All ICU' },
      { id: 'micu', label: 'MICU' },
      { id: 'sicu', label: 'SICU' },
      { id: 'ccu', label: 'CCU' }
    ],
    consult: [
      { id: 'all', label: 'All Consults' },
      { id: 'pending', label: 'Pending' },
      { id: 'active', label: 'Active' }
    ],
    clinic: [
      { id: 'all', label: 'All Clinic' },
      { id: 'scheduled', label: 'Scheduled' },
      { id: 'walkin', label: 'Walk-in' }
    ]
  };

  var _filter = { search: '', category: 'all', acuity: 'all', status: 'all', location: 'all', hideDx: false };
  try { var saved = JSON.parse(localStorage.getItem('rdx-pl-filter')); if (saved) _filter.hideDx = saved.hideDx || false; } catch(e) {}

  function _esc(s) { if (!s) return ''; var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  function _hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i); return Math.abs(h); }

  function _getStatus(caseId) {
    try {
      var keys = Object.keys(localStorage);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].indexOf('subs-') === 0) { var subs = JSON.parse(localStorage.getItem(keys[i])); if (Array.isArray(subs)) for (var j = 0; j < subs.length; j++) if (subs[j].caseId === caseId) return 'completed'; }
      }
      for (var k = 0; k < keys.length; k++) {
        if (keys[k].indexOf('draft-') === 0 && keys[k].indexOf(caseId) >= 0) { var draft = JSON.parse(localStorage.getItem(keys[k])); if (draft && Object.values(draft).some(function(v) { return v && v.trim(); })) return 'started'; }
      }
      var mc = JSON.parse(localStorage.getItem('mc-' + caseId));
      if (mc && mc.completed && Object.keys(mc.completed).length > 0) return 'started';
    } catch(e) {}
    return 'new';
  }

  function _assignLoc(c, setting) {
    var seed = _hash(c.id);
    if (setting === 'ed') { return c.acuity === 1 ? 'resus' : c.acuity === 2 ? (seed % 3 === 0 ? 'resus' : 'acute') : c.acuity === 3 ? 'acute' : 'fast-track'; }
    if (setting === 'icu') { return c.category === 'cardiology' ? 'ccu' : c.category === 'surgery' ? 'sicu' : 'micu'; }
    if (setting === 'inpatient') { return c.category === 'cardiology' ? 'telemetry' : c.acuity <= 2 ? 'stepdown' : 'medicine'; }
    if (setting === 'consult') return seed % 2 === 0 ? 'pending' : 'active';
    if (setting === 'clinic') return seed % 5 === 0 ? 'walkin' : 'scheduled';
    return 'all';
  }

  function _flatten(manifest, setting, specialty) {
    var cases = [], filtered = manifest;
    if (specialty && specialty !== 'em' && window.CASE_SPECIALTY_MAP && CASE_SPECIALTY_MAP.filterManifest) filtered = CASE_SPECIALTY_MAP.filterManifest(manifest, specialty, true);
    filtered.forEach(function(group) {
      group.cases.forEach(function(c) {
        var pn = (window.PATIENT_NAMES && PATIENT_NAMES[c.id]) || null;
        cases.push({
          id: c.id, diagnosis: c.diagnosis, category: c.category || 'unknown', acuity: c.acuity || 3,
          presentation: group.presentation, setting: c.setting || setting || 'ed',
          name: pn ? pn.name : c.id.split('-').map(function(w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(' '),
          age: pn ? pn.age : 20 + (_hash(c.id) % 65), sex: pn ? pn.sex : 'Unknown',
          location: _assignLoc(c, setting)
        });
      });
    });
    return cases;
  }

  window.PatientList = {

    render: function(setting, specialty, embedded) {
      var manifest = window.EMR_MANIFEST || [];
      if (!manifest.length) return '<div style="text-align:center;padding:40px;color:#8C92A4"><p>Loading patient data\u2026</p></div>';

      var cases = _flatten(manifest, setting, specialty);
      var locs = LOCATIONS[setting] || [];
      var settingLabel = (SETTINGS[setting] || {}).label || 'Clinical';
      var settingEmoji = (SETTINGS[setting] || {}).emoji || '\uD83C\uDFE5';

      var filtered = cases.filter(function(c) {
        if (_filter.search) { var q = _filter.search.toLowerCase(); if ((c.name + ' ' + c.diagnosis + ' ' + c.presentation + ' ' + c.category).toLowerCase().indexOf(q) < 0) return false; }
        if (_filter.category !== 'all' && c.category !== _filter.category) return false;
        if (_filter.acuity !== 'all' && c.acuity !== parseInt(_filter.acuity)) return false;
        if (_filter.location !== 'all' && c.location !== _filter.location) return false;
        if (_filter.status !== 'all') { if (_getStatus(c.id) !== _filter.status) return false; }
        return true;
      });
      filtered.sort(function(a, b) { return a.acuity !== b.acuity ? a.acuity - b.acuity : a.name.localeCompare(b.name); });

      var uniqueCats = {}; cases.forEach(function(c) { uniqueCats[c.category] = true; });
      var html = '';
      html += '<div style="padding:' + (embedded ? '16px 20px' : '24px 16px;max-width:1200px;margin:0 auto') + ';font-family:\'IBM Plex Sans\',-apple-system,sans-serif">';

      if (!embedded) {
        html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px"><a href="virtual-emr.html" style="color:#2874A6;font-size:12px;text-decoration:none;font-weight:600">\u2190 Change Setting</a></div>';
        html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:20px"><span style="font-size:24px">' + settingEmoji + '</span><h1 style="font-size:24px;font-weight:700;color:#1A1A2E;margin:0">Patient List</h1><span style="padding:4px 12px;border-radius:6px;font-size:12px;font-weight:600;color:#2874A6;background:#EBF5FB">' + _esc(settingLabel) + '</span></div>';
      } else {
        html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span style="font-size:13px;color:#5A6178">' + filtered.length + ' of ' + cases.length + ' patients</span></div>';
      }

      // Location tabs
      if (locs.length > 1) {
        html += '<div style="display:flex;gap:4px;margin-bottom:12px;padding:4px;background:#F7F8FA;border-radius:10px;border:1px solid #ECEEF2;flex-wrap:wrap">';
        locs.forEach(function(loc) {
          var isActive = _filter.location === loc.id;
          var cnt = cases.filter(function(c) { return loc.id === 'all' || c.location === loc.id; }).length;
          html += '<button type="button" onclick="PatientList._setFilter(\'location\',\'' + loc.id + '\')" style="padding:8px 14px;border-radius:8px;font-size:12px;font-weight:' + (isActive ? '700' : '500') + ';font-family:inherit;cursor:pointer;border:none;background:' + (isActive ? '#2874A6' : 'transparent') + ';color:' + (isActive ? '#fff' : '#5A6178') + ';transition:all .15s">' + _esc(loc.label) + ' <span style="opacity:.7;font-size:10px">' + cnt + '</span></button>';
        });
        html += '</div>';
      }

      // Filters
      html += '<div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;align-items:center">';
      html += '<div style="position:relative;flex:1;min-width:200px"><input type="text" id="plSearch" value="' + _esc(_filter.search) + '" placeholder="\uD83D\uDD0D Search patients\u2026" oninput="PatientList._search(this.value)" style="width:100%;padding:10px 12px 10px 14px;border:1px solid #DFE1E6;border-radius:8px;font-size:13px;font-family:inherit;background:#fff;outline:none"></div>';
      html += '<select onchange="PatientList._setFilter(\'category\',this.value)" style="padding:10px;border:1px solid #DFE1E6;border-radius:8px;font-size:12px;font-family:inherit;background:#fff;cursor:pointer"><option value="all"' + (_filter.category === 'all' ? ' selected' : '') + '>All Systems</option>';
      Object.keys(uniqueCats).sort().forEach(function(cat) { var info = CATEGORIES[cat] || { label: cat, emoji: '' }; html += '<option value="' + cat + '"' + (_filter.category === cat ? ' selected' : '') + '>' + info.emoji + ' ' + _esc(info.label) + '</option>'; });
      html += '</select>';
      html += '<select onchange="PatientList._setFilter(\'acuity\',this.value)" style="padding:10px;border:1px solid #DFE1E6;border-radius:8px;font-size:12px;font-family:inherit;background:#fff;cursor:pointer"><option value="all"' + (_filter.acuity === 'all' ? ' selected' : '') + '>All Acuities</option>';
      [1,2,3,4].forEach(function(a) { html += '<option value="' + a + '"' + (_filter.acuity == a ? ' selected' : '') + '>' + ACUITY[a].short + '</option>'; });
      html += '</select>';
      html += '<select onchange="PatientList._setFilter(\'status\',this.value)" style="padding:10px;border:1px solid #DFE1E6;border-radius:8px;font-size:12px;font-family:inherit;background:#fff;cursor:pointer"><option value="all">All Status</option><option value="new"' + (_filter.status === 'new' ? ' selected' : '') + '>New</option><option value="started"' + (_filter.status === 'started' ? ' selected' : '') + '>In Progress</option><option value="completed"' + (_filter.status === 'completed' ? ' selected' : '') + '>Completed</option></select>';
      var hasFilters = _filter.search || _filter.category !== 'all' || _filter.acuity !== 'all' || _filter.status !== 'all' || _filter.location !== 'all';
      if (hasFilters) html += '<button type="button" onclick="PatientList._clearFilters()" style="padding:10px 14px;border-radius:8px;border:1px solid #DFE1E6;background:#fff;color:#C62828;font-size:12px;font-weight:600;font-family:inherit;cursor:pointer">\u2715 Clear</button>';
      html += '</div>';

      // Table
      if (!filtered.length) {
        html += '<div style="text-align:center;padding:60px 20px;color:#8C92A4"><p style="font-size:15px;font-weight:600;color:#5A6178">No patients match your filters</p><button type="button" onclick="PatientList._clearFilters()" style="margin-top:16px;padding:10px 20px;border:1px solid #2874A6;border-radius:8px;background:#EBF5FB;color:#2874A6;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer">Clear All Filters</button></div>';
      } else {
        html += '<div style="border:1px solid #DFE1E6;border-radius:10px;overflow:hidden;background:#fff">';
        html += '<div style="display:grid;grid-template-columns:44px 1.2fr 1fr 90px 90px 80px 90px;gap:0;padding:10px 14px;background:#F7F8FA;border-bottom:1px solid #DFE1E6;font-size:10px;font-weight:700;color:#8C92A4;text-transform:uppercase;letter-spacing:.5px"><span></span><span>Patient</span><span style="display:flex;align-items:center;gap:6px">' + (_filter.hideDx ? 'Presentation' : 'Diagnosis') + '<button type="button" onclick="PatientList._toggleSpoiler()" style="padding:2px 8px;border-radius:5px;font-size:9px;font-weight:700;font-family:inherit;cursor:pointer;border:1px solid ' + (_filter.hideDx ? '#2874A6' : '#DFE1E6') + ';background:' + (_filter.hideDx ? '#EBF5FB' : '#fff') + ';color:' + (_filter.hideDx ? '#2874A6' : '#8C92A4') + ';text-transform:none;letter-spacing:0;line-height:1.4">' + (_filter.hideDx ? '\uD83D\uDE48 Show' : '\uD83D\uDC41\uFE0F Hide') + '</button></span><span>Acuity</span><span>System</span><span>Status</span><span></span></div>';
        filtered.forEach(function(c, idx) {
          var ai = ACUITY[c.acuity] || ACUITY[3], ci = CATEGORIES[c.category] || { label: c.category, emoji: '', color: '#607D8B' };
          var st = _getStatus(c.id), sb = st === 'completed' ? '\u2705' : st === 'started' ? '\u23F3' : '\u{1F195}', sl = st === 'completed' ? 'Done' : st === 'started' ? 'Active' : 'New';
          var url = ((window.RDX_CASE_TOKENS&&window.RDX_CASE_TOKENS.slugToToken&&window.RDX_CASE_TOKENS.slugToToken[c.id])?('virtual-emr.html?cx='+window.RDX_CASE_TOKENS.slugToToken[c.id]):('virtual-emr.html?case='+c.id))+(setting?'&setting='+setting:'')+(specialty?'&specialty='+specialty:'');
          var dx = _filter.hideDx ? c.presentation + ' \u2014 Case ' + (idx + 1) : c.diagnosis;
          var ini = c.name.split(' ').map(function(w) { return w[0]; }).join('').substring(0, 2);
          var bg = idx % 2 === 0 ? '#fff' : '#FAFBFC';
          html += '<a href="' + url + '" style="display:grid;grid-template-columns:44px 1.2fr 1fr 90px 90px 80px 90px;gap:0;padding:10px 14px;border-bottom:1px solid #ECEEF2;text-decoration:none;color:inherit;transition:background .1s;background:' + bg + '" onmouseover="this.style.background=\'#EBF5FB\'" onmouseout="this.style.background=\'' + bg + '\'">';
          html += '<div style="display:flex;align-items:center"><div style="width:36px;height:36px;border-radius:50%;background:' + ai.bg + ';color:' + ai.color + ';display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700">' + _esc(ini) + '</div></div>';
          html += '<div style="display:flex;flex-direction:column;justify-content:center;min-width:0"><div style="font-size:13px;font-weight:600;color:#1A1A2E;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + _esc(c.name) + '</div><div style="font-size:11px;color:#8C92A4">' + c.age + ' ' + (c.sex === 'Female' ? 'F' : c.sex === 'Male' ? 'M' : '') + '</div></div>';
          html += '<div style="display:flex;align-items:center;min-width:0"><span style="font-size:12px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + _esc(dx) + '</span></div>';
          html += '<div style="display:flex;align-items:center"><span style="padding:3px 8px;border-radius:4px;font-size:10px;font-weight:700;color:' + ai.color + ';background:' + ai.bg + '">' + ai.short + '</span></div>';
          html += '<div style="display:flex;align-items:center"><span style="font-size:11px;color:#5A6178">' + ci.emoji + ' ' + _esc(ci.label) + '</span></div>';
          html += '<div style="display:flex;align-items:center"><span style="font-size:11px">' + sb + ' ' + sl + '</span></div>';
          html += '<div style="display:flex;align-items:center;justify-content:flex-end"><span style="padding:6px 12px;border-radius:6px;font-size:11px;font-weight:600;color:#2874A6;background:#EBF5FB;white-space:nowrap">Open \u2192</span></div>';
          html += '</a>';
        });
        html += '</div>';
      }

      // Stats
      html += '<div style="margin-top:16px;display:flex;gap:16px;flex-wrap:wrap;justify-content:center">';
      var nc = 0, sc = 0, dc = 0;
      cases.forEach(function(c) { var s = _getStatus(c.id); if (s === 'completed') dc++; else if (s === 'started') sc++; else nc++; });
      html += '<span style="font-size:11px;color:#8C92A4">' + cases.length + ' total \u00B7 ' + nc + ' new \u00B7 ' + sc + ' in progress \u00B7 ' + dc + ' completed</span>';
      html += '</div></div>';

      html += '<style>@media(max-width:768px){[style*="grid-template-columns:44px 1.2fr"]{grid-template-columns:44px 1fr 80px!important}[style*="grid-template-columns:44px 1.2fr"] > :nth-child(3),[style*="grid-template-columns:44px 1.2fr"] > :nth-child(5),[style*="grid-template-columns:44px 1.2fr"] > :nth-child(6){display:none!important}}</style>';
      return html;
    },

    _search: function(v) { _filter.search = v; PatientList._rerender(); },
    _setFilter: function(k, v) { _filter[k] = v; PatientList._rerender(); },
    _toggleSpoiler: function() { _filter.hideDx = !_filter.hideDx; try { localStorage.setItem('rdx-pl-filter', JSON.stringify({ hideDx: _filter.hideDx })); } catch(e) {} PatientList._rerender(); },
    _clearFilters: function() { _filter = { search: '', category: 'all', acuity: 'all', status: 'all', location: 'all', hideDx: _filter.hideDx }; PatientList._rerender(); },
    _rerender: function() {
      try {
        var params = new URLSearchParams(window.location.search);
        var setting = params.get('setting') || ((window.S && S.clinicalSetting) ? S.clinicalSetting : null);
        var specialty = params.get('specialty') || ((window.S && S.specialty) ? S.specialty : null);
        var plInner = document.getElementById('patientListInner');
        if (plInner) { plInner.innerHTML = PatientList.render(setting, specialty, true); }
        else { var app = document.getElementById('app'); if (app && window.EMR_MANIFEST) app.innerHTML = PatientList.render(setting, specialty); }
        var el = document.getElementById('plSearch');
        if (el && _filter.search) { el.focus(); el.setSelectionRange(_filter.search.length, _filter.search.length); }
      } catch(e) { console.error('PatientList._rerender:', e); }
    }
  };
})();
