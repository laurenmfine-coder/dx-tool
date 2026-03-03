/* js/emr-overview.js — EMR-Native Overview & Department Dashboard
 * Shows: department stats, quick actions, then embedded patient list.
 * Handles manifest loading race condition with retry logic.
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

  function _getCaseStats() {
    var m = window.EMR_MANIFEST || [];
    var total = 0, byAcuity = {1:0,2:0,3:0,4:0}, byCategory = {};
    m.forEach(function(g) {
      g.cases.forEach(function(c) {
        total++;
        byAcuity[c.acuity] = (byAcuity[c.acuity]||0) + 1;
        byCategory[c.category] = (byCategory[c.category]||0) + 1;
      });
    });
    var completed = 0, started = 0;
    try {
      Object.keys(localStorage).forEach(function(k) {
        if (k.indexOf('mc-') === 0) { var mc = JSON.parse(localStorage.getItem(k)); if (mc && mc.completed && Object.keys(mc.completed).length > 0) started++; }
        if (k.indexOf('subs-') === 0) { var subs = JSON.parse(localStorage.getItem(k)); if (Array.isArray(subs)) completed += subs.length; }
      });
    } catch(e) {}
    return { total: total, byAcuity: byAcuity, byCategory: byCategory, completed: completed, started: started };
  }

  window.EMROverview = {

    render: function() {
      var currentSetting = (window.S && S.clinicalSetting) || null;
      var currentDept = currentSetting ? (DEPTS[currentSetting] || DEPTS.ed) : null;
      var stats = _getCaseStats();
      var insideShell = !!document.getElementById('emr-shell');
      var html = '';

      if (insideShell) {
        html += '<div style="padding:20px;font-family:\'IBM Plex Sans\',-apple-system,sans-serif;background:#F0F2F5;min-height:100%">';
        if (currentSetting && currentDept) {
          html += EMROverview._renderDashboard(currentSetting, currentDept, stats);
        } else {
          html += '<p style="color:#8C92A4">Select a department from the sidebar.</p>';
        }
        html += '</div>';
        return html;
      }

      // Standalone mode
      html += '<div style="min-height:100vh;background:#F0F2F5;font-family:\'IBM Plex Sans\',-apple-system,sans-serif">';

      // Top Bar
      html += '<div style="background:linear-gradient(135deg,#1A2332 0%,#2C3E50 100%);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between">';
      html += '<div style="display:flex;align-items:center;gap:14px">';
      html += '<span style="color:#fff;font-size:15px;font-weight:700"><span style="color:#5DADE2">Reason</span><span style="font-style:italic;color:#85C1E9">Dx</span></span>';
      html += '<span style="color:#4A6274">\u2502</span>';
      html += '<span style="color:#85929E;font-size:12px;font-weight:500">Virtual EMR</span>';
      html += '</div>';
      html += '<div style="display:flex;align-items:center;gap:10px">';
      html += '<select id="deptSelect" onchange="EMROverview._changeDept(this.value)" style="padding:6px 10px;border:1px solid #4A6274;border-radius:6px;background:#2C3E50;color:#ECF0F1;font-size:12px;font-weight:600;font-family:inherit;cursor:pointer">';
      html += '<option value=""' + (!currentSetting ? ' selected' : '') + '>Select Department\u2026</option>';
      Object.keys(DEPTS).forEach(function(id) {
        var d = DEPTS[id];
        html += '<option value="' + id + '"' + (currentSetting === id ? ' selected' : '') + '>' + d.icon + ' ' + d.label + '</option>';
      });
      html += '</select>';
      html += '<a href="virtual-emr.html" style="color:#85929E;font-size:11px;text-decoration:none;padding:4px 8px;border-radius:4px;border:1px solid #4A6274">\u2190 Overview</a>';
      html += '</div></div>';

      // Breadcrumb
      if (currentDept) {
        html += '<div style="background:#fff;border-bottom:1px solid #DFE1E6;padding:8px 20px;display:flex;align-items:center;gap:8px;font-size:12px">';
        html += '<span style="color:#8C92A4">ReasonDx</span><span style="color:#DFE1E6">/</span>';
        html += '<span style="color:#1A1A2E;font-weight:600">' + currentDept.icon + ' ' + _esc(currentDept.label) + '</span>';
        html += '</div>';
      }

      html += '<div style="max-width:1200px;margin:0 auto;padding:24px 20px">';
      if (!currentSetting) {
        html += EMROverview._renderWelcome(stats);
      } else {
        html += EMROverview._renderDashboard(currentSetting, currentDept, stats);
      }
      html += '</div></div>';
      return html;
    },

    _renderWelcome: function(stats) {
      var html = '';
      html += '<div style="text-align:center;padding:40px 20px 32px">';
      html += '<div style="font-size:36px;margin-bottom:8px">\uD83C\uDFE5</div>';
      html += '<h1 style="font-size:26px;font-weight:700;color:#1A1A2E;margin:0 0 8px">Welcome to the Virtual EMR</h1>';
      html += '<p style="font-size:14px;color:#5A6178;max-width:500px;margin:0 auto;line-height:1.5">Select your department above to see your patient list.</p>';
      html += '</div>';

      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin-bottom:32px">';
      Object.keys(DEPTS).forEach(function(id) {
        var d = DEPTS[id];
        html += '<button type="button" onclick="EMROverview._changeDept(\'' + id + '\')" style="display:flex;align-items:center;gap:10px;padding:14px 16px;border:1px solid #DFE1E6;border-radius:10px;background:#fff;cursor:pointer;transition:all .15s;text-align:left;font-family:inherit;border-left:4px solid ' + d.color + '">';
        html += '<span style="font-size:22px">' + d.icon + '</span>';
        html += '<div><div style="font-size:13px;font-weight:600;color:#1A1A2E">' + _esc(d.label) + '</div></div>';
        html += '</button>';
      });
      html += '</div>';

      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px">';
      [{ label: 'Total Cases', value: stats.total, icon: '\uD83D\uDCCB', color: '#2874A6' },
       { label: 'In Progress', value: stats.started, icon: '\u23F3', color: '#E65100' },
       { label: 'Completed', value: stats.completed, icon: '\u2705', color: '#2E7D32' }
      ].forEach(function(s) {
        html += '<div style="background:#fff;border:1px solid #ECEEF2;border-radius:10px;padding:16px;text-align:center">';
        html += '<div style="font-size:22px;margin-bottom:4px">' + s.icon + '</div>';
        html += '<div style="font-size:24px;font-weight:700;color:' + s.color + '">' + s.value + '</div>';
        html += '<div style="font-size:11px;color:#8C92A4">' + s.label + '</div></div>';
      });
      html += '</div>';
      return html;
    },

    _renderDashboard: function(setting, dept, stats) {
      var html = '';

      // Stats strip
      html += '<div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap">';
      [{ label: 'Total Patients', val: stats.total, color: dept.color, icon: '\uD83D\uDCCB' },
       { label: 'In Progress', val: stats.started, color: '#E65100', icon: '\u23F3' },
       { label: 'Completed', val: stats.completed, color: '#2E7D32', icon: '\u2705' }
      ].forEach(function(s) {
        html += '<div style="flex:1;min-width:120px;background:#fff;border:1px solid #ECEEF2;border-radius:10px;padding:14px 16px;display:flex;align-items:center;gap:10px">';
        html += '<span style="font-size:20px">' + s.icon + '</span>';
        html += '<div><div style="font-size:20px;font-weight:700;color:' + s.color + '">' + s.val + '</div>';
        html += '<div style="font-size:10px;color:#8C92A4;font-weight:500;text-transform:uppercase">' + s.label + '</div></div>';
        html += '</div>';
      });
      html += '</div>';

      // Quick actions
      html += '<div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap">';
      var actions = [];
      if (setting === 'ed') {
        actions.push({ label: 'ED Track Board', url: 'ed-board-v2.html', icon: '\uD83D\uDCCB' });
      }
      if (setting === 'inpatient' || setting === 'icu') {
        actions.push({ label: 'SimRoomDx', url: 'simroomdx.html?setting=' + setting, icon: '\uD83C\uDFA4' });
      }
      if (setting === 'consult') {
        actions.push({ label: 'Take a Consult', url: 'consult-callback.html', icon: '\uD83D\uDCDE' });
      }
      actions.forEach(function(a) {
        html += '<a href="' + a.url + '" style="display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;border:1px solid #DFE1E6;background:#fff;color:#1A1A2E;font-size:12px;font-weight:500;text-decoration:none;transition:all .15s" onmouseover="this.style.borderColor=\'#2874A6\';this.style.background=\'#EBF5FB\'" onmouseout="this.style.borderColor=\'#DFE1E6\';this.style.background=\'#fff\'">' + a.icon + ' ' + a.label + '</a>';
      });
      html += '</div>';

      // Patient List section
      html += '<div style="background:#fff;border:1px solid #ECEEF2;border-radius:12px;overflow:hidden">';
      html += '<div style="padding:16px 20px;border-bottom:1px solid #ECEEF2;display:flex;align-items:center;justify-content:space-between">';
      html += '<div style="display:flex;align-items:center;gap:8px"><span style="font-size:16px">' + dept.icon + '</span><h2 style="font-size:15px;font-weight:700;color:#1A1A2E;margin:0">Patient List</h2></div>';
      html += '</div>';

      // Embed the patient list
      if (window.PatientList && window.EMR_MANIFEST && EMR_MANIFEST.length > 0) {
        html += '<div id="patientListInner">' + PatientList.render(setting, (window.S && S.specialty) || null, true) + '</div>';
      } else {
        // Manifest not loaded yet — show loading state with retry
        html += '<div id="patientListInner" style="text-align:center;padding:40px;color:#8C92A4">';
        html += '<p>Loading patient list\u2026</p>';
        html += '</div>';
        // Schedule a retry to populate once manifest is available
        EMROverview._schedulePatientListRetry(setting);
      }
      html += '</div>';

      return html;
    },

    // Retry rendering patient list until manifest is available
    _schedulePatientListRetry: function(setting) {
      var attempts = 0;
      var maxAttempts = 20;
      var interval = setInterval(function() {
        attempts++;
        if (window.PatientList && window.EMR_MANIFEST && EMR_MANIFEST.length > 0) {
          clearInterval(interval);
          var plInner = document.getElementById('patientListInner');
          if (plInner) {
            plInner.innerHTML = PatientList.render(setting, (window.S && S.specialty) || null, true);
          }
        } else if (attempts >= maxAttempts) {
          clearInterval(interval);
          var plInner2 = document.getElementById('patientListInner');
          if (plInner2) {
            plInner2.innerHTML = '<div style="text-align:center;padding:40px;color:#C62828"><p>Could not load patient data. <a href="javascript:location.reload()" style="color:#2874A6">Reload page</a></p></div>';
          }
        }
      }, 250);
    },

    _changeDept: function(id) {
      if (!id) return;
      var params = new URLSearchParams(window.location.search);
      params.set('setting', id);
      params.delete('case');
      window.location.search = params.toString();
    }
  };
})();
