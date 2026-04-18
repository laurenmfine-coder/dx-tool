/* js/emr-shell.js — EMR Shell with Collapsible Left Sidebar
 * Streamlined: only links to functional pages, no duplicates.
 * Sections: Clinical, Simulations, Learning Tools.
 */
(function() {
  'use strict';
  if (typeof R === 'undefined') window.R = './';

  var SHELL_RENDERED = false;
  var SIDEBAR_COLLAPSED = false;

  var DEPTS = {
    ed:             { label: 'Emergency Dept', short: 'ED', icon: '\uD83D\uDEA8', color: '#C62828' },
    inpatient:      { label: 'Inpatient Floor', short: 'Floor', icon: '\uD83C\uDFE5', color: '#1565C0' },
    consult:        { label: 'Consult', short: 'Consult', icon: '\uD83D\uDCCB', color: '#6A1B9A' },
    icu:            { label: 'ICU', short: 'ICU', icon: '\uD83D\uDC93', color: '#AD1457' },
    clinic:         { label: 'Clinic', short: 'Clinic', icon: '\uD83E\uDE7A', color: '#2E7D32' },
    'post-discharge': { label: 'Post-Discharge', short: 'Post-DC', icon: '\uD83D\uDD04', color: '#00838F' }
  };

  var ICO = {
    patients: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    edBoard: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>',
    nightFloat: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    simRoom: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    consult: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    crt: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    mechanism: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    ecg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
  };

  var TOOLS = [
    { id: 'patients',   label: 'Cases',              icon: ICO.patients,   section: 'clinical' },
    { id: 'crt',        label: 'Reasoning Trainer',  icon: ICO.crt,        section: 'learning' },
    { id: 'mechanism',  label: 'MechanismDx',        icon: ICO.mechanism,  section: 'learning', url: 'mechanism/index.html' },
    { id: 'ecg',        label: 'ECG Trainer',        icon: ICO.ecg,        section: 'learning', url: 'ecg/index.html' },
    { id: 'milestones', label: 'Milestones',         icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>', section: 'learning', url: 'milestone-tracker.html' },
    { id: 'consult',    label: 'Consult Call',       icon: ICO.consult,    section: 'simulations', url: 'consult-callback.html' },
    { id: 'night-float',label: 'Night Float',        icon: ICO.nightFloat, section: 'simulations', url: 'night-float.html' },
  ];

  var SECTIONS = { clinical: 'CASES', learning: 'LEARNING', simulations: 'SIMULATIONS' };

  function _getSetting() {
    try {
      var params = new URLSearchParams(window.location.search);
      return params.get('setting') || ((window.S && S.clinicalSetting) ? S.clinicalSetting : null);
    } catch(e) { return null; }
  }

  function _getCaseId() {
    try {
      var params = new URLSearchParams(window.location.search);
      return params.get('case') || null;
    } catch(e) { return null; }
  }

  window.EMRShell = {

    inject: function() {
      if (SHELL_RENDERED) return;
      var app = document.getElementById('app');
      if (!app) return;

      var setting = _getSetting();
      var caseId = _getCaseId();
      if (!setting && !caseId) return;

      SIDEBAR_COLLAPSED = !!caseId;

      var shell = document.createElement('div');
      shell.id = 'emr-shell';
      shell.style.cssText = 'display:flex;min-height:100vh;font-family:"IBM Plex Sans",-apple-system,sans-serif;background:#F0F2F5';

      var sidebar = document.createElement('div');
      sidebar.id = 'emr-sidebar';
      sidebar.innerHTML = EMRShell._renderSidebar(setting, caseId);

      var main = document.createElement('div');
      main.id = 'emr-main';
      main.style.cssText = 'flex:1;min-width:0;display:flex;flex-direction:column';

      var topbar = document.createElement('div');
      topbar.id = 'emr-topbar';
      topbar.innerHTML = EMRShell._renderTopbar(setting, caseId);

      var appParent = app.parentNode;
      main.appendChild(topbar);
      appParent.replaceChild(shell, app);
      main.appendChild(app);
      shell.appendChild(sidebar);
      shell.appendChild(main);

      EMRShell._injectStyles();
      SHELL_RENDERED = true;
    },

    _renderSidebar: function(setting, caseId) {
      var collapsed = SIDEBAR_COLLAPSED;
      var w = collapsed ? '52px' : '200px';
      var html = '';

      html += '<div style="width:' + w + ';background:#1A2332;color:#94A3B8;display:flex;flex-direction:column;height:100vh;position:sticky;top:0;transition:width .2s;overflow:hidden;flex-shrink:0;z-index:50">';

      // Logo
      html += '<div style="padding:12px ' + (collapsed ? '0' : '14px') + ';border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;' + (collapsed ? 'justify-content:center' : 'gap:8px') + ';height:48px;flex-shrink:0">';
      if (collapsed) {
        html += '<span style="font-size:14px;font-weight:800;color:#5DADE2;cursor:pointer" onclick="EMRShell.toggleSidebar()" title="Expand menu">R</span>';
      } else {
        html += '<img src="icons/logo-white.png" alt="ReasonDx" style="height:20px;width:auto">';
        html += '<span style="margin-left:auto;cursor:pointer;font-size:14px;opacity:.5;padding:4px" onclick="EMRShell.toggleSidebar()" title="Collapse">\u276E</span>';
      }
      html += '</div>';

      // Department selector
      if (!collapsed) {
        html += '<div style="padding:10px 10px 6px">';
        html += '<select onchange="EMRShell.changeDept(this.value)" style="width:100%;padding:7px 8px;border-radius:6px;background:#2C3E50;color:#ECF0F1;border:1px solid #4A6274;font-size:11px;font-weight:600;font-family:inherit;cursor:pointer">';
        Object.keys(DEPTS).forEach(function(id) {
          var d = DEPTS[id];
          html += '<option value="' + id + '"' + (setting === id ? ' selected' : '') + '>' + d.icon + ' ' + d.label + '</option>';
        });
        html += '</select>';
        html += '</div>';
      }

      // Nav items
      var currentSection = '';
      TOOLS.forEach(function(t) {
        if (t.section !== currentSection) {
          currentSection = t.section;
          if (!collapsed) {
            html += '<div style="padding:16px 14px 4px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#4A6274">' + SECTIONS[t.section] + '</div>';
          } else {
            html += '<div style="height:1px;background:rgba(255,255,255,.06);margin:8px 6px"></div>';
          }
        }

        var isActive = (t.id === 'patients' && !caseId);
        var bgActive = isActive ? 'rgba(40,116,166,.15)' : 'transparent';
        var colorActive = isActive ? '#5DADE2' : '#94A3B8';

        if (collapsed) {
          html += '<div onclick="EMRShell.navigate(\'' + t.id + '\')" style="display:flex;align-items:center;justify-content:center;padding:10px 0;cursor:pointer;color:' + colorActive + ';background:' + bgActive + ';transition:all .15s" onmouseover="this.style.background=\'rgba(255,255,255,.05)\'" onmouseout="this.style.background=\'' + bgActive + '\'" title="' + t.label + '">';
          html += '<span style="display:flex;align-items:center;justify-content:center;width:20px;height:20px">' + t.icon + '</span>';
          html += '</div>';
        } else {
          html += '<div onclick="EMRShell.navigate(\'' + t.id + '\')" style="display:flex;align-items:center;gap:10px;padding:8px 14px;cursor:pointer;font-size:12px;font-weight:' + (isActive ? '600' : '500') + ';color:' + colorActive + ';background:' + bgActive + ';border-right:2px solid ' + (isActive ? '#5DADE2' : 'transparent') + ';transition:all .15s" onmouseover="this.style.background=\'rgba(255,255,255,.05)\'" onmouseout="this.style.background=\'' + bgActive + '\'">';
          html += '<span style="display:flex;align-items:center;justify-content:center;width:20px;height:20px;flex-shrink:0">' + t.icon + '</span>';
          html += '<span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + t.label + '</span>';
          html += '</div>';
        }
      });

      // Bottom home
      html += '<div style="margin-top:auto;border-top:1px solid rgba(255,255,255,.06);padding:8px ' + (collapsed ? '0' : '10px') + '">';
      if (collapsed) {
        html += '<div onclick="window.location.href=\'virtual-emr.html\'" style="display:flex;align-items:center;justify-content:center;padding:8px 0;cursor:pointer;color:#64748B;font-size:16px" title="Home">\uD83C\uDFE0</div>';
      } else {
        html += '<div onclick="window.location.href=\'virtual-emr.html\'" style="display:flex;align-items:center;gap:8px;padding:6px 4px;cursor:pointer;font-size:11px;color:#64748B;transition:color .15s" onmouseover="this.style.color=\'#94A3B8\'" onmouseout="this.style.color=\'#64748B\'">';
        html += '<span>\uD83C\uDFE0</span><span>Home</span>';
        html += '</div>';
      }
      html += '</div>';

      html += '</div>';
      return html;
    },

    _renderTopbar: function(setting, caseId) {
      var dept = setting ? (DEPTS[setting] || DEPTS.inpatient) : null;
      var html = '';
      html += '<div style="height:40px;background:#fff;border-bottom:1px solid #DFE1E6;padding:0 16px;display:flex;align-items:center;justify-content:space-between;font-size:12px;flex-shrink:0">';

      html += '<div style="display:flex;align-items:center;gap:8px">';
      html += '<a href="/browse.html" style="color:#8C92A4;text-decoration:none;font-weight:500;display:flex;align-items:center;gap:4px" title="Back to case browser">← Cases</a>';
      html += '<span style="color:#DFE1E6;margin:0 4px">/</span>';
      html += '<a href="virtual-emr.html" style="color:#8C92A4;text-decoration:none;font-weight:500">EMR</a>';
      if (dept) {
        html += '<span style="color:#DFE1E6">/</span>';
        html += '<a href="virtual-emr.html?setting=' + setting + '" style="color:#1A1A2E;font-weight:600;text-decoration:none">' + dept.icon + ' ' + dept.label + '</a>';
      }
      if (caseId) {
        html += '<span style="color:#DFE1E6">/</span>';
        html += '<span style="color:#2874A6;font-weight:600">' + caseId.replace(/-/g, ' ').replace(/\b\w/g, function(l){ return l.toUpperCase(); }) + '</span>';
      }
      html += '</div>';

      html += '<div style="display:flex;align-items:center;gap:8px">';
      if (window.S && S.currentUser) {
        html += '<span style="color:#64748B;font-size:11px">\uD83C\uDF93 ' + (S.currentUser.displayName || '') + '</span>';
        html += '<button type="button" onclick="doSignOut()" style="padding:3px 8px;border-radius:4px;border:1px solid #DFE1E6;background:#fff;color:#64748B;font-size:10px;cursor:pointer;font-family:inherit">Sign Out</button>';
      }
      html += '</div>';
      html += '</div>';
      return html;
    },

    _injectStyles: function() {
      if (document.getElementById('emr-shell-styles')) return;
      var style = document.createElement('style');
      style.id = 'emr-shell-styles';
      style.textContent = [
        '#emr-shell { display:flex; min-height:100vh; }',
        '#emr-sidebar { flex-shrink:0; }',
        '#emr-main { flex:1; min-width:0; display:flex; flex-direction:column; }',
        '#emr-topbar { flex-shrink:0; }',
        '#app { flex:1; }',
        'body { margin:0; padding:0; }',
        '#emr-shell .header-bar { display:none !important; }',
        '@media(max-width:768px) { #emr-sidebar { display:none !important; } }'
      ].join('\n');
      document.head.appendChild(style);
    },

    toggleSidebar: function() {
      SIDEBAR_COLLAPSED = !SIDEBAR_COLLAPSED;
      var sidebar = document.getElementById('emr-sidebar');
      if (sidebar) {
        sidebar.innerHTML = EMRShell._renderSidebar(_getSetting(), _getCaseId());
      }
    },

    changeDept: function(id) {
      try { sessionStorage.setItem('rdx-last-setting', id); } catch(e) {}
      var params = new URLSearchParams(window.location.search);
      params.set('setting', id);
      params.delete('case');
      window.location.search = params.toString();
    },

    navigate: function(toolId) {
      var tool = TOOLS.find(function(t) { return t.id === toolId; });
      if (!tool) return;

      if (toolId === 'patients') {
        var setting = _getSetting() || 'ed';
        window.location.href = 'virtual-emr.html?setting=' + setting;
        return;
      }

      // Clinical Reasoning tab — switches panel inside the EMR, never navigates away
      if (toolId === 'crt') {
        if (typeof switchTab === 'function') {
          switchTab('crt');
        } else if (typeof window.switchTab === 'function') {
          window.switchTab('crt');
        }
        return;
      }

      if (tool.url) {
        // Consult Callback — only navigate when an active case is in session
        if (toolId === 'consult') {
          var caseId = _getCaseId();
          if (!caseId) {
            // No active case — silently ignore the click (button shouldn't be visible without a case)
            return;
          }
          var setting = _getSetting();
          var url = tool.url;
          var params = [];
          params.push('case=' + caseId);
          if (setting) params.push('setting=' + setting);
          url += '?' + params.join('&');
          window.location.href = url;
          return;
        }
        window.open(tool.url, '_blank');
      }
    }
  };
})();
