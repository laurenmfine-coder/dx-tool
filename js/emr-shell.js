/* js/emr-shell.js — EMR Shell with Collapsible Left Sidebar
 * Wraps the entire EMR in an Epic-style activity menu.
 * Shows when ?setting or ?case is present (not on landing page).
 * Sidebar items: Department selector, Patient List, tools (CRT, MechanismDx, etc.)
 * Collapses to icon-only when in a patient chart.
 */
(function() {
  'use strict';

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

  // Tools available in sidebar
  var TOOLS = [
    { id: 'patients', label: 'Patient List', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', section: 'clinical', color: '#2874A6' },
    { id: 'crt', label: 'Clinical Reasoning', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>', section: 'tools', url: 'crt-hub.html', color: '#6A1B9A' },
    { id: 'mechanism', label: 'MechanismDx', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>', section: 'tools', url: 'pathway.html', color: '#00838F' },
    { id: 'coach', label: 'CoachDx', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>', section: 'tools', url: 'CoachDx/index.html', color: '#AD1457' },
    { id: 'sbar', label: 'SBAR Practice', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>', section: 'tools', url: 'training.html', color: '#D97706' },
    { id: 'boardprep', label: 'Board Prep', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>', section: 'tools', url: 'board-prep.html', color: '#1565C0' },
    { id: 'studyhub', label: 'Study Hub', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>', section: 'tools', url: 'study-mode.html', color: '#E65100' },
    { id: 'ecg', label: 'ECG Trainer', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>', section: 'tools', url: 'ecg/index.html', color: '#2E7D32' }
  ];

  function _getSetting() {
    var params = new URLSearchParams(window.location.search);
    return params.get('setting') || ((window.S && S.clinicalSetting) ? S.clinicalSetting : null);
  }

  function _getCaseId() {
    var params = new URLSearchParams(window.location.search);
    return params.get('case') || null;
  }

  window.EMRShell = {

    // Inject the shell around #app if not already done
    inject: function() {
      if (SHELL_RENDERED) return;
      var app = document.getElementById('app');
      if (!app) return;

      var setting = _getSetting();
      var caseId = _getCaseId();
      if (!setting && !caseId) return; // Landing page, no shell needed

      SIDEBAR_COLLAPSED = !!caseId; // Collapse when in a chart

      // Create shell wrapper
      var shell = document.createElement('div');
      shell.id = 'emr-shell';
      shell.style.cssText = 'display:flex;min-height:100vh;font-family:"IBM Plex Sans",-apple-system,sans-serif;background:#F0F2F5';

      // Create sidebar
      var sidebar = document.createElement('div');
      sidebar.id = 'emr-sidebar';
      sidebar.innerHTML = EMRShell._renderSidebar(setting, caseId);

      // Create main area wrapper
      var main = document.createElement('div');
      main.id = 'emr-main';
      main.style.cssText = 'flex:1;min-width:0;display:flex;flex-direction:column';

      // Create top bar
      var topbar = document.createElement('div');
      topbar.id = 'emr-topbar';
      topbar.innerHTML = EMRShell._renderTopbar(setting, caseId);

      // Move app inside main
      var appParent = app.parentNode;
      main.appendChild(topbar);
      appParent.replaceChild(shell, app);
      main.appendChild(app);
      shell.appendChild(sidebar);
      shell.appendChild(main);

      // Add shell styles
      EMRShell._injectStyles();
      SHELL_RENDERED = true;
    },

    _renderSidebar: function(setting, caseId) {
      var collapsed = !!caseId;
      var w = collapsed ? '52px' : '200px';
      var dept = setting ? (DEPTS[setting] || DEPTS.inpatient) : null;
      var html = '';

      html += '<div style="width:' + w + ';background:#1A2332;color:#94A3B8;display:flex;flex-direction:column;height:100vh;position:sticky;top:0;transition:width .2s;overflow:hidden;flex-shrink:0;z-index:50">';

      // Logo
      html += '<div style="padding:12px ' + (collapsed ? '0' : '14px') + ';border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;' + (collapsed ? 'justify-content:center' : 'gap:8px') + ';height:48px;flex-shrink:0">';
      if (collapsed) {
        html += '<span style="font-size:14px;font-weight:800;color:#5DADE2;cursor:pointer" onclick="EMRShell.toggleSidebar()" title="Expand menu">R</span>';
      } else {
        html += '<span style="font-size:15px;font-weight:700;letter-spacing:-.3px"><span style="color:#5DADE2">Reason</span><span style="color:#85C1E9;font-style:italic">Dx</span></span>';
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

      // Navigation items
      var sections = { clinical: 'CLINICAL', tools: 'LEARNING TOOLS' };
      var currentSection = '';

      TOOLS.forEach(function(t) {
        if (t.section !== currentSection) {
          currentSection = t.section;
          if (!collapsed) {
            html += '<div style="padding:16px 14px 4px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#4A6274">' + sections[t.section] + '</div>';
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

      // Bottom: overview link + collapse toggle
      html += '<div style="margin-top:auto;border-top:1px solid rgba(255,255,255,.06);padding:8px ' + (collapsed ? '0' : '10px') + '">';
      if (collapsed) {
        html += '<div onclick="window.location.href=\'virtual-emr.html\'" style="display:flex;align-items:center;justify-content:center;padding:8px 0;cursor:pointer;color:#64748B;font-size:16px" title="Overview">\uD83C\uDFE0</div>';
      } else {
        html += '<div onclick="window.location.href=\'virtual-emr.html\'" style="display:flex;align-items:center;gap:8px;padding:6px 4px;cursor:pointer;font-size:11px;color:#64748B;transition:color .15s" onmouseover="this.style.color=\'#94A3B8\'" onmouseout="this.style.color=\'#64748B\'">';
        html += '<span>\uD83C\uDFE0</span><span>Overview</span>';
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

      // Left: breadcrumb
      html += '<div style="display:flex;align-items:center;gap:8px">';
      html += '<a href="virtual-emr.html" style="color:#8C92A4;text-decoration:none;font-weight:500">ReasonDx</a>';
      if (dept) {
        html += '<span style="color:#DFE1E6">/</span>';
        html += '<a href="virtual-emr.html?setting=' + setting + '" style="color:#1A1A2E;font-weight:600;text-decoration:none">' + dept.icon + ' ' + dept.label + '</a>';
      }
      if (caseId) {
        html += '<span style="color:#DFE1E6">/</span>';
        html += '<span style="color:#2874A6;font-weight:600">' + caseId.replace(/-/g, ' ').replace(/\b\w/g, function(l){ return l.toUpperCase(); }) + '</span>';
      }
      html += '</div>';

      // Right: user info (since we hide the chart header)
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
      var params = new URLSearchParams(window.location.search);
      params.set('setting', id);
      params.delete('case');
      window.location.search = params.toString();
    },

    navigate: function(toolId) {
      var tool = TOOLS.find(function(t) { return t.id === toolId; });
      if (!tool) return;

      if (toolId === 'patients') {
        // Go to patient list
        var setting = _getSetting() || 'inpatient';
        window.location.href = 'virtual-emr.html?setting=' + setting;
        return;
      }

      if (tool.url) {
        // Open tool in the main content area
        var app = document.getElementById('app');
        if (app) {
          app.innerHTML = '<iframe src="' + tool.url + '" style="width:100%;height:calc(100vh - 36px);border:none;background:#fff"></iframe>';
        }
      }
    }
  };

  // Call EMRShell.inject() explicitly before bootstrapApp() runs
})();
