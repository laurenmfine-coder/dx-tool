/* js/emr-overview.js — EMR Department Dashboard
 * First visit: welcome banner + quick-start steps
 * Every visit: featured concepts, patient list, sidebar discovery hint
 */
(function() {
  'use strict';

  var DEPTS = {
    ed:               { label: 'Emergency Department', short: 'ED', icon: '\uD83D\uDEA8', color: '#C62828' },
    inpatient:        { label: 'Inpatient Floor', short: 'Floor', icon: '\uD83C\uDFE5', color: '#1565C0' },
    consult:          { label: 'Inpatient Consult', short: 'Consult', icon: '\uD83D\uDCCB', color: '#6A1B9A' },
    icu:              { label: 'ICU', short: 'ICU', icon: '\uD83D\uDC93', color: '#AD1457' },
    clinic:           { label: 'Outpatient Clinic', short: 'Clinic', icon: '\uD83E\uDE7A', color: '#2E7D32' },
    'post-discharge': { label: 'Post-Discharge', short: 'Post-DC', icon: '\uD83D\uDD04', color: '#00838F' }
  };

  function _esc(s) { if(!s) return ''; var d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

  function _getSetting() {
    try {
      var s = (window.S && S.clinicalSetting) || null;
      if (!s) s = new URLSearchParams(window.location.search).get('setting') || null;
      return s;
    } catch(e) { return null; }
  }

  function _isFirstVisit() {
    try { return !localStorage.getItem('rdx-overview-seen'); } catch(e) { return true; }
  }

  function _markSeen() {
    try { localStorage.setItem('rdx-overview-seen', '1'); } catch(e) {}
  }

  window.EMROverview = {

    render: function() {
      var currentSetting = _getSetting();
      var currentDept = currentSetting ? (DEPTS[currentSetting] || DEPTS.ed) : null;
      var insideShell = !!document.getElementById('emr-shell');
      var html = '';

      if (insideShell) {
        html += '<div style="padding:20px;font-family:\'IBM Plex Sans\',-apple-system,sans-serif;background:#F0F2F5;min-height:100%">';
        if (currentSetting && currentDept) {
          html += EMROverview._renderDashboard(currentSetting, currentDept);
        } else {
          html += EMROverview._renderWelcome();
        }
        html += '</div>';
        return html;
      }

      // Standalone (no shell)
      html += '<div style="min-height:100vh;background:#F0F2F5;font-family:\'IBM Plex Sans\',-apple-system,sans-serif">';
      html += '<div style="background:linear-gradient(135deg,#1A2332,#2C3E50);padding:0 20px;height:48px;display:flex;align-items:center;justify-content:space-between">';
      html += '<span style="color:#fff;font-size:15px;font-weight:700"><span style="color:#5DADE2">Reason</span><span style="font-style:italic;color:#85C1E9">Dx</span></span>';
      html += '<select id="deptSelect" onchange="EMROverview._changeDept(this.value)" style="padding:6px 10px;border:1px solid #4A6274;border-radius:6px;background:#2C3E50;color:#ECF0F1;font-size:12px;font-weight:600;font-family:inherit;cursor:pointer">';
      html += '<option value="">Select Department\u2026</option>';
      Object.keys(DEPTS).forEach(function(id) {
        var d = DEPTS[id];
        html += '<option value="' + id + '"' + (currentSetting === id ? ' selected' : '') + '>' + d.icon + ' ' + d.label + '</option>';
      });
      html += '</select></div>';
      html += '<div style="max-width:1200px;margin:0 auto;padding:24px 20px">';
      if (!currentSetting) { html += EMROverview._renderWelcome(); }
      else { html += EMROverview._renderDashboard(currentSetting, currentDept); }
      html += '</div></div>';
      return html;
    },

    // ─── No-setting welcome ───────────────────────────────────
    _renderWelcome: function() {
      var html = '';
      html += '<div style="text-align:center;padding:40px 20px 24px">';
      html += '<div style="font-size:36px;margin-bottom:8px">\uD83C\uDFE5</div>';
      html += '<h1 style="font-size:26px;font-weight:700;color:#1A1A2E;margin:0 0 8px">Virtual EMR</h1>';
      html += '<p style="font-size:14px;color:#5A6178;max-width:460px;margin:0 auto;line-height:1.5">Select a department to see your patient list.</p>';
      html += '</div>';
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin-bottom:32px">';
      Object.keys(DEPTS).forEach(function(id) {
        var d = DEPTS[id];
        html += '<button type="button" onclick="EMROverview._changeDept(\'' + id + '\')" style="display:flex;align-items:center;gap:10px;padding:14px 16px;border:1px solid #DFE1E6;border-radius:10px;background:#fff;cursor:pointer;transition:all .15s;text-align:left;font-family:inherit;border-left:4px solid ' + d.color + '">';
        html += '<span style="font-size:22px">' + d.icon + '</span>';
        html += '<div style="font-size:13px;font-weight:600;color:#1A1A2E">' + _esc(d.label) + '</div>';
        html += '</button>';
      });
      html += '</div>';
      return html;
    },

    // ─── Department dashboard ─────────────────────────────────
    _renderDashboard: function(setting, dept) {
      var firstVisit = _isFirstVisit();
      var html = '';

      // ── FIRST-VISIT WELCOME BANNER ─────────────────────────
      if (firstVisit) {
        html += '<div id="rdx-welcome-banner" style="background:linear-gradient(135deg,#1B2838,#2C3E50);border-radius:14px;padding:28px 24px;color:#fff;margin-bottom:16px;position:relative;overflow:hidden">';
        html += '<div style="position:absolute;top:-40px;right:-40px;font-size:120px;opacity:.04">\uD83C\uDF93</div>';

        html += '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap">';
        html += '<div style="flex:1;min-width:260px">';
        html += '<h2 style="font-size:20px;font-weight:700;margin:0 0 8px;line-height:1.3">Welcome to ReasonDx</h2>';
        html += '<p style="font-size:13px;color:#94A3B8;line-height:1.6;margin:0 0 20px;max-width:480px">This is a virtual EMR with real patient cases. You\u2019ll review charts, build differentials, write notes, and get AI coaching \u2014 just like a real clinical rotation.</p>';

        // Quick-start steps
        html += '<div style="display:flex;flex-direction:column;gap:10px">';
        var steps = [
          { num: '1', text: 'Pick a patient from the list below to open their chart', color: '#5DADE2' },
          { num: '2', text: 'Review the chart using the tabs on the left (vitals, labs, meds, imaging)', color: '#4ADE80' },
          { num: '3', text: 'Write your note in the <strong>Documentation</strong> tab', color: '#FBBF24' },
          { num: '4', text: 'Talk through your reasoning with your AI attending in the <strong>CoachDx</strong> tab', color: '#C084FC' }
        ];
        steps.forEach(function(s) {
          html += '<div style="display:flex;align-items:center;gap:10px">';
          html += '<div style="width:24px;height:24px;border-radius:50%;background:' + s.color + '20;color:' + s.color + ';display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0">' + s.num + '</div>';
          html += '<span style="font-size:12px;color:#CBD5E1;line-height:1.4">' + s.text + '</span>';
          html += '</div>';
        });
        html += '</div>';
        html += '</div>';

        // What's in the sidebar hint
        html += '<div style="min-width:180px;background:rgba(255,255,255,.05);border-radius:10px;padding:14px;border:1px solid rgba(255,255,255,.08)">';
        html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#5DADE2;margin-bottom:8px">\u2190 Sidebar Tools</div>';
        var sidebarHints = [
          { icon: '\uD83D\uDCCB', label: 'Patient List', desc: 'Your cases' },
          { icon: '\uD83D\uDEA8', label: 'Simulations', desc: 'ED Board, Night Float, Rounds' },
          { icon: '\uD83E\uDDE0', label: 'Learning', desc: 'CRT, Board Prep, ECG' }
        ];
        sidebarHints.forEach(function(h) {
          html += '<div style="display:flex;align-items:center;gap:8px;padding:4px 0">';
          html += '<span style="font-size:14px">' + h.icon + '</span>';
          html += '<div><div style="font-size:11px;font-weight:600;color:#E2E8F0">' + h.label + '</div>';
          html += '<div style="font-size:10px;color:#64748B">' + h.desc + '</div></div>';
          html += '</div>';
        });
        html += '</div>';

        html += '</div>';

        // Dismiss
        html += '<button type="button" onclick="EMROverview._dismissWelcome()" style="position:absolute;top:12px;right:14px;background:none;border:none;color:#64748B;cursor:pointer;font-size:16px;padding:4px" title="Dismiss">\u2715</button>';
        html += '</div>';
      }

      // ── BRANDED CONCEPT CARDS ──────────────────────────────
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin-bottom:16px">';

      // CoachDx
      html += '<div style="background:linear-gradient(135deg,#1B2838,#2C3E50);border-radius:12px;padding:16px;color:#fff;position:relative;overflow:hidden">';
      html += '<div style="position:absolute;top:-16px;right:-16px;font-size:60px;opacity:.06">\uD83D\uDCAC</div>';
      html += '<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;color:#5DADE2;margin-bottom:4px">AI Coaching</div>';
      html += '<div style="font-size:16px;font-weight:700;margin-bottom:4px">Coach<span style="color:#5DADE2">Dx</span></div>';
      html += '<p style="font-size:11px;color:#94A3B8;line-height:1.5;margin:0">Socratic AI attending in every patient chart. Open a case \u2192 CoachDx tab.</p>';
      html += '</div>';

      // MechanismDx
      html += '<a href="pathway.html" style="display:block;background:linear-gradient(135deg,#1B3A2D,#2D4F3E);border-radius:12px;padding:16px;color:#fff;text-decoration:none;position:relative;overflow:hidden;transition:transform .15s" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'\'">';
      html += '<div style="position:absolute;top:-16px;right:-16px;font-size:60px;opacity:.06">\uD83E\uDDEC</div>';
      html += '<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;color:#4ADE80;margin-bottom:4px">Pathophysiology</div>';
      html += '<div style="font-size:16px;font-weight:700;margin-bottom:4px">Mechanism<span style="color:#4ADE80">Dx</span></div>';
      html += '<p style="font-size:11px;color:#94A3B8;line-height:1.5;margin:0">Interactive disease pathways. Trace mechanisms from cause to presentation.</p>';
      html += '</a>';

      // ReasonDx / Clinical Reasoning
      html += '<a href="crt-hub.html" style="display:block;background:linear-gradient(135deg,#2A1B3D,#44295E);border-radius:12px;padding:16px;color:#fff;text-decoration:none;position:relative;overflow:hidden;transition:transform .15s" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'\'">';
      html += '<div style="position:absolute;top:-16px;right:-16px;font-size:60px;opacity:.06">\uD83E\uDDE0</div>';
      html += '<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;color:#C084FC;margin-bottom:4px">Guided Reasoning</div>';
      html += '<div style="font-size:16px;font-weight:700;margin-bottom:4px">Reason<span style="color:#C084FC">Dx</span></div>';
      html += '<p style="font-size:11px;color:#94A3B8;line-height:1.5;margin:0">Step-by-step clinical reasoning trainers for systematic diagnosis.</p>';
      html += '</a>';

      html += '</div>';

      // ── PATIENT LIST ────────────────────────────────────────
      html += '<div style="background:#fff;border:1px solid #ECEEF2;border-radius:12px;overflow:hidden">';
      html += '<div style="padding:12px 20px;border-bottom:1px solid #ECEEF2;display:flex;align-items:center;justify-content:space-between">';
      html += '<div style="display:flex;align-items:center;gap:8px">';
      html += '<span style="font-size:16px">' + dept.icon + '</span>';
      html += '<h2 style="font-size:15px;font-weight:700;color:#1A1A2E;margin:0">' + _esc(dept.label) + ' \u2014 Patient List</h2>';
      html += '</div>';
      // Inline help hint (always visible, not intrusive)
      html += '<span style="font-size:11px;color:#94A3B8">Click a patient to open their chart</span>';
      html += '</div>';

      if (window.PatientList && window.EMR_MANIFEST && EMR_MANIFEST.length > 0) {
        html += '<div id="patientListInner">' + PatientList.render(setting, (window.S && S.specialty) || null, true) + '</div>';
      } else {
        html += '<div id="patientListInner" style="text-align:center;padding:40px;color:#8C92A4"><p>Loading patient list\u2026</p></div>';
        EMROverview._schedulePatientListRetry(setting);
      }
      html += '</div>';

      return html;
    },

    _dismissWelcome: function() {
      _markSeen();
      var banner = document.getElementById('rdx-welcome-banner');
      if (banner) {
        banner.style.transition = 'all .3s ease';
        banner.style.opacity = '0';
        banner.style.maxHeight = '0';
        banner.style.marginBottom = '0';
        banner.style.padding = '0 24px';
        banner.style.overflow = 'hidden';
        setTimeout(function() { banner.remove(); }, 300);
      }
    },

    _schedulePatientListRetry: function(setting) {
      var attempts = 0;
      var maxAttempts = 20;
      var interval = setInterval(function() {
        attempts++;
        if (window.PatientList && window.EMR_MANIFEST && EMR_MANIFEST.length > 0) {
          clearInterval(interval);
          var el = document.getElementById('patientListInner');
          if (el) el.innerHTML = PatientList.render(setting, (window.S && S.specialty) || null, true);
        } else if (attempts >= maxAttempts) {
          clearInterval(interval);
          var el2 = document.getElementById('patientListInner');
          if (el2) el2.innerHTML = '<div style="text-align:center;padding:40px;color:#C62828"><p>Could not load patient data. <a href="javascript:location.reload()" style="color:#2874A6">Reload</a></p></div>';
        }
      }, 250);
    },

    _changeDept: function(id) {
      if (!id) return;
      try { sessionStorage.setItem('rdx-last-setting', id); } catch(e) {}
      var params = new URLSearchParams(window.location.search);
      params.set('setting', id);
      params.delete('case');
      window.location.search = params.toString();
    }
  };
})();
