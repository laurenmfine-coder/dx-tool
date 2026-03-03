/* js/emr-overview.js — EMR-Native Overview & Department Picker
 * Replaces card-based setting selector with an EMR-style interface.
 * Shows: department dropdown, overview dashboard with stats, then patient list.
 */
(function() {
  'use strict';

  var DEPTS = {
    ed:             { label: 'Emergency Department', short: 'ED', icon: '\uD83D\uDEA8', color: '#C62828', bg: '#FFEBEE' },
    inpatient:      { label: 'Inpatient Floor', short: 'Floor', icon: '\uD83C\uDFE5', color: '#1565C0', bg: '#E3F2FD' },
    consult:        { label: 'Inpatient Consult', short: 'Consult', icon: '\uD83D\uDCCB', color: '#6A1B9A', bg: '#F3E5F5' },
    icu:            { label: 'ICU', short: 'ICU', icon: '\uD83D\uDC93', color: '#AD1457', bg: '#FCE4EC' },
    clinic:         { label: 'Outpatient Clinic', short: 'Clinic', icon: '\uD83E\uDE7A', color: '#2E7D32', bg: '#E8F5E9' },
    'post-discharge': { label: 'Post-Discharge', short: 'Post-DC', icon: '\uD83D\uDD04', color: '#00838F', bg: '#E0F7FA' }
  };

  function _esc(s) { if(!s) return ''; var d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

  function _getCaseStats(setting) {
    var manifest = window.EMR_MANIFEST || [];
    var total = 0, byAcuity = {1:0,2:0,3:0,4:0}, byCategory = {};
    manifest.forEach(function(g) {
      g.cases.forEach(function(c) {
        total++;
        byAcuity[c.acuity] = (byAcuity[c.acuity]||0) + 1;
        byCategory[c.category] = (byCategory[c.category]||0) + 1;
      });
    });
    // Count completed
    var completed = 0, started = 0;
    try {
      var keys = Object.keys(localStorage);
      keys.forEach(function(k) {
        if (k.indexOf('mc-') === 0) {
          var mc = JSON.parse(localStorage.getItem(k));
          if (mc && mc.completed && Object.keys(mc.completed).length > 0) started++;
        }
        if (k.indexOf('subs-') === 0) {
          var subs = JSON.parse(localStorage.getItem(k));
          if (Array.isArray(subs)) completed += subs.length;
        }
      });
    } catch(e) {}
    return { total: total, byAcuity: byAcuity, byCategory: byCategory, completed: completed, started: started };
  }

  window.EMROverview = {

    render: function() {
      var currentSetting = (window.S && S.clinicalSetting) || null;
      var currentDept = currentSetting ? (DEPTS[currentSetting] || DEPTS.ed) : null;
      var stats = _getCaseStats(currentSetting);
      var html = '';

      // ═══ EMR CHROME ═══
      html += '<div style="min-height:100vh;background:#F0F2F5;font-family:\'IBM Plex Sans\',-apple-system,sans-serif">';

      // ─── Top Bar (EMR header) ───
      html += '<div style="background:linear-gradient(135deg,#1A2332 0%,#2C3E50 100%);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between">';
      html += '<div style="display:flex;align-items:center;gap:14px">';
      html += '<span style="color:#fff;font-size:15px;font-weight:700;letter-spacing:-.3px"><span style="color:#5DADE2">Reason</span><span style="font-style:italic;color:#85C1E9">Dx</span></span>';
      html += '<span style="color:#4A6274;font-size:18px">\u2502</span>';
      html += '<span style="color:#85929E;font-size:12px;font-weight:500">Virtual EMR</span>';
      html += '</div>';

      // Department selector in the header
      html += '<div style="display:flex;align-items:center;gap:10px">';
      html += '<select id="deptSelect" onchange="EMROverview._changeDept(this.value)" style="padding:6px 28px 6px 10px;border:1px solid #4A6274;border-radius:6px;background:#2C3E50;color:#ECF0F1;font-size:12px;font-weight:600;font-family:inherit;cursor:pointer;appearance:none;-webkit-appearance:none;background-image:url(\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%226%22><path d=%22M0 0l5 6 5-6z%22 fill=%22%2385929E%22/></svg>\');background-repeat:no-repeat;background-position:right 8px center">';
      html += '<option value=""' + (!currentSetting ? ' selected' : '') + '>Select Department\u2026</option>';
      Object.keys(DEPTS).forEach(function(id) {
        var d = DEPTS[id];
        html += '<option value="' + id + '"' + (currentSetting === id ? ' selected' : '') + '>' + d.icon + ' ' + d.label + '</option>';
      });
      html += '</select>';
      html += '<a href="case-browser.html" style="color:#85929E;font-size:11px;text-decoration:none;padding:4px 8px;border-radius:4px;border:1px solid #4A6274">\u2190 Hub</a>';
      html += '</div>';
      html += '</div>';

      // ─── Breadcrumb / context bar ───
      if (currentDept) {
        html += '<div style="background:#fff;border-bottom:1px solid #DFE1E6;padding:8px 20px;display:flex;align-items:center;gap:8px;font-size:12px">';
        html += '<span style="color:#8C92A4">ReasonDx</span>';
        html += '<span style="color:#DFE1E6">/</span>';
        html += '<span style="color:#1A1A2E;font-weight:600">' + currentDept.icon + ' ' + _esc(currentDept.label) + '</span>';
        html += '</div>';
      }

      // ═══ CONTENT AREA ═══
      html += '<div style="max-width:1200px;margin:0 auto;padding:24px 20px">';

      if (!currentSetting) {
        // ─── No department selected — welcome screen ───
        html += EMROverview._renderWelcome(stats);
      } else {
        // ─── Department selected — overview dashboard + patient list ───
        html += EMROverview._renderDashboard(currentSetting, currentDept, stats);
      }

      html += '</div></div>';
      return html;
    },

    _renderWelcome: function(stats) {
      var html = '';

      // Welcome hero
      html += '<div style="text-align:center;padding:40px 20px 32px">';
      html += '<div style="font-size:36px;margin-bottom:8px">\uD83C\uDFE5</div>';
      html += '<h1 style="font-size:clamp(22px,4vw,28px);font-weight:700;color:#1A1A2E;margin:0 0 8px">Welcome to the Virtual EMR</h1>';
      html += '<p style="font-size:14px;color:#5A6178;max-width:500px;margin:0 auto;line-height:1.5">Select your department above to see your patient list. Every chart, order, and note adapts to the clinical environment.</p>';
      html += '</div>';

      // Department cards in a compact grid
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin-bottom:32px">';
      Object.keys(DEPTS).forEach(function(id) {
        var d = DEPTS[id];
        html += '<button type="button" onclick="EMROverview._changeDept(\'' + id + '\')" style="display:flex;align-items:center;gap:10px;padding:14px 16px;border:1px solid #DFE1E6;border-radius:10px;background:#fff;cursor:pointer;transition:all .15s;text-align:left;font-family:inherit;border-left:4px solid ' + d.color + '" onmouseover="this.style.borderColor=\'' + d.color + '\';this.style.boxShadow=\'0 2px 8px rgba(0,0,0,.06)\'" onmouseout="this.style.borderColor=\'#DFE1E6\';this.style.borderLeftColor=\'' + d.color + '\';this.style.boxShadow=\'none\'">';
        html += '<span style="font-size:22px">' + d.icon + '</span>';
        html += '<div><div style="font-size:13px;font-weight:600;color:#1A1A2E">' + _esc(d.label) + '</div>';
        html += '<div style="font-size:11px;color:#8C92A4">' + _esc(d.short) + '</div></div>';
        html += '</button>';
      });
      html += '</div>';

      // Quick stats
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin-bottom:24px">';
      var statItems = [
        { label: 'Total Cases', value: stats.total, icon: '\uD83D\uDCCB', color: '#2874A6' },
        { label: 'Cases Started', value: stats.started, icon: '\u23F3', color: '#E65100' },
        { label: 'Completed', value: stats.completed, icon: '\u2705', color: '#2E7D32' },
        { label: 'ESI-1 Critical', value: stats.byAcuity[1] || 0, icon: '\uD83D\uDEA8', color: '#C62828' }
      ];
      statItems.forEach(function(s) {
        html += '<div style="background:#fff;border:1px solid #ECEEF2;border-radius:10px;padding:16px;text-align:center">';
        html += '<div style="font-size:22px;margin-bottom:4px">' + s.icon + '</div>';
        html += '<div style="font-size:24px;font-weight:700;color:' + s.color + '">' + s.value + '</div>';
        html += '<div style="font-size:11px;color:#8C92A4;font-weight:500">' + s.label + '</div>';
        html += '</div>';
      });
      html += '</div>';

      // Quick links
      html += '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">';
      var links = [
        { label: 'MechanismDx', url: 'pathway.html', icon: '\uD83E\uDDEC' },
        { label: 'Clinical Reasoning Trainer', url: 'crt-hub.html', icon: '\uD83C\uDFAF' },
        { label: 'Board Prep', url: 'board-prep.html', icon: '\uD83D\uDCDA' }
      ];
      links.forEach(function(l) {
        html += '<a href="' + l.url + '" style="padding:8px 16px;border-radius:8px;border:1px solid #DFE1E6;background:#fff;color:#5A6178;font-size:12px;font-weight:500;text-decoration:none;display:flex;align-items:center;gap:6px">' + l.icon + ' ' + l.label + '</a>';
      });
      html += '</div>';

      return html;
    },

    _renderDashboard: function(setting, dept, stats) {
      var html = '';

      // ─── Overview stats strip ───
      html += '<div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap">';

      // Stat cards
      var items = [
        { label: 'Total Patients', val: stats.total, color: dept.color, icon: '\uD83D\uDCCB' },
        { label: 'In Progress', val: stats.started, color: '#E65100', icon: '\u23F3' },
        { label: 'Completed', val: stats.completed, color: '#2E7D32', icon: '\u2705' }
      ];
      items.forEach(function(s) {
        html += '<div style="flex:1;min-width:120px;background:#fff;border:1px solid #ECEEF2;border-radius:10px;padding:14px 16px;display:flex;align-items:center;gap:10px">';
        html += '<span style="font-size:20px">' + s.icon + '</span>';
        html += '<div><div style="font-size:20px;font-weight:700;color:' + s.color + '">' + s.val + '</div>';
        html += '<div style="font-size:10px;color:#8C92A4;font-weight:500;text-transform:uppercase;letter-spacing:.3px">' + s.label + '</div></div>';
        html += '</div>';
      });

      html += '</div>';

      // ─── Quick actions ───
      html += '<div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap">';
      var actions = [];
      if (setting === 'ed') {
        actions.push({ label: 'ED Track Board', url: 'ed-board-v2.html', icon: '\uD83D\uDCCB' });
        actions.push({ label: 'Enter the ED', url: 'ed-3d.html', icon: '\uD83D\uDEA8' });
      }
      if (setting === 'inpatient' || setting === 'icu') {
        actions.push({ label: 'Start an Admission', url: 'admissions.html', icon: '\uD83D\uDCE5' });
        actions.push({ label: 'Morning Rounds', url: 'simroomdx.html?setting=' + setting, icon: '\uD83C\uDFA4' });
      }
      if (setting === 'consult') {
        actions.push({ label: 'Take a Consult', url: 'consult-callback.html', icon: '\uD83D\uDCDE' });
      }
      actions.push({ label: 'Clinical Reasoning Trainer', url: 'crt-hub.html', icon: '\uD83C\uDFAF' });
      actions.push({ label: 'MechanismDx', url: 'pathway.html', icon: '\uD83E\uDDEC' });

      actions.forEach(function(a) {
        html += '<a href="' + a.url + '" style="display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;border:1px solid #DFE1E6;background:#fff;color:#1A1A2E;font-size:12px;font-weight:500;text-decoration:none;transition:all .15s" onmouseover="this.style.borderColor=\'#2874A6\';this.style.background=\'#EBF5FB\'" onmouseout="this.style.borderColor=\'#DFE1E6\';this.style.background=\'#fff\'">' + a.icon + ' ' + a.label + '</a>';
      });
      html += '</div>';

      // ─── Patient List ───
      html += '<div style="background:#fff;border:1px solid #ECEEF2;border-radius:12px;overflow:hidden">';
      html += '<div style="padding:16px 20px;border-bottom:1px solid #ECEEF2;display:flex;align-items:center;justify-content:space-between">';
      html += '<div style="display:flex;align-items:center;gap:8px"><span style="font-size:16px">' + dept.icon + '</span><h2 style="font-size:15px;font-weight:700;color:#1A1A2E;margin:0">Patient List</h2><span style="font-size:11px;color:#8C92A4;font-weight:500">' + stats.total + ' patients</span></div>';
      html += '</div>';

      // Embed the patient list (renders just the inner content)
      if (window.PatientList) {
        html += '<div id="patientListInner">' + PatientList.render(setting, (window.S && S.specialty) || null, true) + '</div>';
      }
      html += '</div>';

      return html;
    },

    _changeDept: function(id) {
      if (!id) return;
      // Update URL and reload with new setting
      var params = new URLSearchParams(window.location.search);
      params.set('setting', id);
      params.delete('case');
      window.location.search = params.toString();
    }
  };
})();
