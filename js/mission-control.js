/* js/mission-control.js — Mission Control Panel for ReasonDx Virtual EMR
 * Provides: progress tracking, task checklist, chart coverage heat map,
 * readiness indicator, first-time orientation, and inline tips.
 */
(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // TASK DEFINITIONS BY SETTING
  // ═══════════════════════════════════════════════════════════
  var TASKS_BY_SETTING = {
    ed: [
      { id: 'review-vitals', label: 'Review vitals', group: 'review', autoTab: 'vitals', autoTime: 5 },
      { id: 'review-labs', label: 'Review labs', group: 'review', autoTab: 'labs', autoTime: 3 },
      { id: 'review-meds', label: 'Review medications', group: 'review', autoTab: 'medications', autoTime: 3 },
      { id: 'review-allergies', label: 'Check allergies', group: 'review', autoTab: 'allergies', autoTime: 2 },
      { id: 'review-history', label: 'Review history', group: 'review', autoTab: 'history', autoTime: 3 },
      { id: 'place-orders', label: 'Place orders', group: 'action', check: '_checkOrders' },
      { id: 'build-ddx', label: 'Build differential diagnosis', group: 'action', check: '_checkDdx' },
      { id: 'write-note', label: 'Write documentation', group: 'action', check: '_checkNote' },
      { id: 'submit', label: 'Submit encounter', group: 'action', check: '_checkSubmitted' }
    ],
    inpatient: [
      { id: 'read-handoff', label: 'Receive ED handoff', group: 'review', autoTab: 'handoff', autoTime: 5 },
      { id: 'review-vitals', label: 'Review vitals', group: 'review', autoTab: 'vitals', autoTime: 5 },
      { id: 'review-labs', label: 'Review labs', group: 'review', autoTab: 'labs', autoTime: 3 },
      { id: 'review-meds', label: 'Review medications', group: 'review', autoTab: 'medications', autoTime: 3 },
      { id: 'med-recon', label: 'Complete medication reconciliation', group: 'action', check: '_checkMedRecon' },
      { id: 'place-orders', label: 'Place admission orders', group: 'action', check: '_checkOrders' },
      { id: 'write-note', label: 'Write admission H&P', group: 'action', check: '_checkNote' },
      { id: 'submit', label: 'Submit encounter', group: 'action', check: '_checkSubmitted' }
    ],
    consult: [
      { id: 'read-handoff', label: 'Review consult question', group: 'review', autoTab: 'handoff', autoTime: 5 },
      { id: 'review-labs', label: 'Review labs', group: 'review', autoTab: 'labs', autoTime: 3 },
      { id: 'review-meds', label: 'Review medications', group: 'review', autoTab: 'medications', autoTime: 3 },
      { id: 'review-history', label: 'Review history', group: 'review', autoTab: 'history', autoTime: 3 },
      { id: 'write-note', label: 'Write consult note', group: 'action', check: '_checkNote' },
      { id: 'submit', label: 'Submit encounter', group: 'action', check: '_checkSubmitted' }
    ],
    clinic: [
      { id: 'review-vitals', label: 'Review vitals', group: 'review', autoTab: 'vitals', autoTime: 3 },
      { id: 'review-meds', label: 'Review medications', group: 'review', autoTab: 'medications', autoTime: 3 },
      { id: 'review-history', label: 'Review history', group: 'review', autoTab: 'history', autoTime: 3 },
      { id: 'med-recon', label: 'Reconcile medications', group: 'action', check: '_checkMedRecon' },
      { id: 'write-note', label: 'Write visit note', group: 'action', check: '_checkNote' },
      { id: 'submit', label: 'Submit encounter', group: 'action', check: '_checkSubmitted' }
    ]
  };
  // Fallback
  TASKS_BY_SETTING.icu = TASKS_BY_SETTING.inpatient;
  TASKS_BY_SETTING['post-discharge'] = TASKS_BY_SETTING.clinic;

  // ═══════════════════════════════════════════════════════════
  // CHART SECTIONS FOR HEAT MAP
  // ═══════════════════════════════════════════════════════════
  var CHART_SECTIONS = [
    { id: 'demographics', label: 'Info', short: 'Info' },
    { id: 'problems', label: 'Probs', short: 'Probs' },
    { id: 'medications', label: 'Meds', short: 'Meds' },
    { id: 'allergies', label: 'Allrg', short: 'Allrg' },
    { id: 'vitals', label: 'Vitals', short: 'Vitals' },
    { id: 'labs', label: 'Labs', short: 'Labs' },
    { id: 'imaging', label: 'Img', short: 'Img' },
    { id: 'visits', label: 'Visits', short: 'Visits' },
    { id: 'history', label: 'Hx', short: 'Hx' }
  ];

  // ═══════════════════════════════════════════════════════════
  // INLINE TIPS (shown once per tab, first case only)
  // ═══════════════════════════════════════════════════════════
  var TIPS = {
    demographics: '\uD83D\uDCA1 Start here \u2014 review the patient\u2019s age, chief complaint, and history. Then use the tabs on the left to explore their vitals, labs, and medications.',
    vitals: '\uD83D\uDCA1 Look for trends, not just the latest values. Abnormal vitals are flagged. Think about what the pattern tells you.',
    labs: '\uD83D\uDCA1 Tip: Click any lab panel to expand it. Red values are above the reference range; blue values are below.',
    documentation: '\uD83D\uDCA1 Tip: Each section auto-saves as you type. Write as if this were a real patient encounter note.',
    orders: '\uD83D\uDCA1 Tip: Think about what additional information you need before ordering. Your order patterns are part of the learning assessment.',
    coach: '\uD83D\uDCA1 This is your AI attending. Present your thinking \u2014 your differential, your reasoning, your plan \u2014 and they\u2019ll help you refine it through Socratic questioning.',
    medications: '\uD83D\uDCA1 Tip: Review each medication and mark it as verified, held, or discontinued for medication reconciliation.',
    ddx: '\uD83D\uDCA1 Tip: Rank your differential by likelihood. Add supporting and refuting evidence for each diagnosis.',
    studyhub: '\uD83D\uDCA1 The Study Hub turns your cases into flashcards. Click "Harvest Learning Gaps" to auto-generate cards from this patient\u2019s key teaching points.'
  };

  // ═══════════════════════════════════════════════════════════
  // STATE
  // ═══════════════════════════════════════════════════════════
  var _state = {
    open: false,
    startTime: null,
    tabDwell: {},       // { tabId: totalSeconds }
    completed: {},      // { taskId: true }
    dismissed: false,
    ddxEntries: []      // for DDx Builder tracking
  };

  // ═══════════════════════════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════════════════════════
  window.MissionControl = {

    // Initialize when case loads
    init: function(setting, caseId, role) {
      if (role !== 'student') return;
      _state.startTime = Date.now();
      _state.setting = setting || 'ed';
      _state.caseId = caseId || '';
      _state.open = false;
      _state.dismissed = false;

      // Load persisted progress
      var key = 'mc-' + _state.caseId;
      try {
        var saved = JSON.parse(localStorage.getItem(key));
        if (saved) {
          _state.completed = saved.completed || {};
          _state.tabDwell = saved.tabDwell || {};
          _state.startTime = saved.startTime || _state.startTime;
          _state.ddxEntries = saved.ddxEntries || [];
        }
      } catch(e) {}

      // Auto-open for first-ever case
      if (this.isFirstCase()) {
        _state.open = true;
      }
    },

    // Save state to localStorage
    save: function() {
      if (!_state.caseId) return;
      try {
        localStorage.setItem('mc-' + _state.caseId, JSON.stringify({
          completed: _state.completed,
          tabDwell: _state.tabDwell,
          startTime: _state.startTime,
          ddxEntries: _state.ddxEntries
        }));
      } catch(e) {}
    },

    // Check if this is the user's very first case
    isFirstCase: function() {
      return !localStorage.getItem('rdx-mc-seen');
    },

    markSeen: function() {
      localStorage.setItem('rdx-mc-seen', '1');
    },

    // Track tab visits (called from switchTab)
    trackTab: function(tabId) {
      _state.tabDwell[tabId] = (_state.tabDwell[tabId] || 0) + 1;
      // Increment dwell time — in real implementation, use intervals
      // For now, each visit counts as ~3 seconds of engagement
      this._autoCheckReviewTasks();
      this.save();
    },

    // Track extended dwell (called periodically from render)
    addDwell: function(tabId, seconds) {
      _state.tabDwell[tabId] = (_state.tabDwell[tabId] || 0) + seconds;
      this._autoCheckReviewTasks();
      this.save();
    },

    // Toggle panel open/closed
    toggle: function() {
      _state.open = !_state.open;
      if (_state.open && this.isFirstCase()) {
        this.markSeen();
      }
    },

    isOpen: function() { return _state.open; },

    // ═══════════════════════════════════════════════════════
    // TASK STATUS COMPUTATION
    // ═══════════════════════════════════════════════════════
    getTasks: function() {
      var tasks = TASKS_BY_SETTING[_state.setting] || TASKS_BY_SETTING.ed;
      var self = this;
      return tasks.map(function(t) {
        var done = false;
        if (_state.completed[t.id]) {
          done = true;
        } else if (t.autoTab) {
          var dwell = _state.tabDwell[t.autoTab] || 0;
          done = dwell >= (t.autoTime || 3);
        } else if (t.check && self[t.check]) {
          done = self[t.check]();
        }
        if (done) _state.completed[t.id] = true;
        return { id: t.id, label: t.label, group: t.group, done: done };
      });
    },

    getCompletedCount: function() {
      var tasks = this.getTasks();
      return tasks.filter(function(t) { return t.done; }).length;
    },

    getTotalCount: function() {
      return (TASKS_BY_SETTING[_state.setting] || TASKS_BY_SETTING.ed).length;
    },

    // ═══════════════════════════════════════════════════════
    // TASK CHECK FUNCTIONS
    // ═══════════════════════════════════════════════════════
    _checkOrders: function() {
      return (window.S && ((S.labOrders && S.labOrders.length > 0) || (S.imgOrders && S.imgOrders.length > 0) || (S.referralOrders && S.referralOrders.length > 0)));
    },
    _checkNote: function() {
      if (!window.S || !S.noteFields) return false;
      var filled = Object.values(S.noteFields).filter(function(v) { return v && v.trim().length > 20; });
      var totalWords = Object.values(S.noteFields).reduce(function(s, v) { return s + (v ? v.split(/\s+/).filter(Boolean).length : 0); }, 0);
      return filled.length >= 4 && totalWords >= 150;
    },
    _checkMedRecon: function() {
      if (!window.S || !S.medReconStatus || !window.MEDICATIONS) return false;
      var total = MEDICATIONS.length;
      if (total === 0) return true;
      return Object.keys(S.medReconStatus).length >= total;
    },
    _checkDdx: function() {
      return _state.ddxEntries && _state.ddxEntries.length >= 2;
    },
    _checkSubmitted: function() {
      return window.S && S.submitted;
    },

    _autoCheckReviewTasks: function() {
      var tasks = TASKS_BY_SETTING[_state.setting] || TASKS_BY_SETTING.ed;
      tasks.forEach(function(t) {
        if (t.autoTab && !_state.completed[t.id]) {
          var dwell = _state.tabDwell[t.autoTab] || 0;
          if (dwell >= (t.autoTime || 3)) {
            _state.completed[t.id] = true;
          }
        }
      });
    },

    // ═══════════════════════════════════════════════════════
    // READINESS
    // ═══════════════════════════════════════════════════════
    getReadiness: function() {
      var tasks = this.getTasks();
      var done = tasks.filter(function(t) { return t.done; }).length;
      var total = tasks.length;
      var pct = total > 0 ? done / total : 0;
      if (pct >= 0.75) return { level: 'green', emoji: '\uD83D\uDFE2', label: 'Ready to submit when you are.' };
      if (pct >= 0.35) return { level: 'yellow', emoji: '\uD83D\uDFE1', label: 'In progress. Consider completing your assessment and plan.' };
      return { level: 'red', emoji: '\uD83D\uDD34', label: 'You may want to review more of the chart before documenting.' };
    },

    // ═══════════════════════════════════════════════════════
    // CHART HEAT MAP DATA
    // ═══════════════════════════════════════════════════════
    getHeatMap: function() {
      return CHART_SECTIONS.map(function(sec) {
        var dwell = _state.tabDwell[sec.id] || 0;
        return { id: sec.id, label: sec.short, visited: dwell >= 2, dwell: dwell };
      });
    },

    // ═══════════════════════════════════════════════════════
    // ELAPSED TIME
    // ═══════════════════════════════════════════════════════
    getElapsed: function() {
      if (!_state.startTime) return '0 min';
      var mins = Math.round((Date.now() - _state.startTime) / 60000);
      return mins + ' min';
    },

    // ═══════════════════════════════════════════════════════
    // DDX BUILDER STATE
    // ═══════════════════════════════════════════════════════
    getDdxEntries: function() { return _state.ddxEntries || []; },
    setDdxEntries: function(entries) { _state.ddxEntries = entries; this.save(); },
    addDdxEntry: function(entry) { _state.ddxEntries.push(entry); this.save(); },
    removeDdxEntry: function(idx) { _state.ddxEntries.splice(idx, 1); this.save(); },
    updateDdxEntry: function(idx, entry) { _state.ddxEntries[idx] = entry; this.save(); },

    // ═══════════════════════════════════════════════════════
    // INLINE TIPS
    // ═══════════════════════════════════════════════════════
    getTip: function(tabId) {
      if (!this.isFirstCase() && localStorage.getItem('rdx-mc-seen')) return null;
      var tipKey = 'rdx-tip-' + tabId;
      if (localStorage.getItem(tipKey)) return null;
      return TIPS[tabId] || null;
    },
    dismissTip: function(tabId) {
      localStorage.setItem('rdx-tip-' + tabId, '1');
    },

    // ═══════════════════════════════════════════════════════
    // RENDER: HEADER PROGRESS INDICATOR
    // ═══════════════════════════════════════════════════════
    renderHeaderBadge: function() {
      var done = this.getCompletedCount();
      var total = this.getTotalCount();
      var readiness = this.getReadiness();
      var dots = '';
      for (var i = 0; i < total; i++) {
        dots += '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 1px;background:' + (i < done ? '#2874A6' : 'rgba(255,255,255,.3)') + '"></span>';
      }
      return '<button type="button" onclick="MissionControl.toggle();render()" style="display:inline-flex;align-items:center;gap:8px;padding:4px 12px;border-radius:20px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:rgba(255,255,255,.85);font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;transition:all .15s;margin-left:12px" title="Mission Control">' +
        '<span>\uD83D\uDCCB</span>' +
        '<span>' + done + '/' + total + '</span>' +
        '<span style="display:inline-flex;align-items:center;gap:1px">' + dots + '</span>' +
        '<span style="opacity:.6">' + this.getElapsed() + '</span>' +
      '</button>';
    },

    // ═══════════════════════════════════════════════════════
    // RENDER: INLINE TIP BAR
    // ═══════════════════════════════════════════════════════
    renderTipBar: function(tabId) {
      var tip = this.getTip(tabId);
      if (!tip) return '';
      return '<div style="padding:10px 14px;background:#FFF8E1;border:1px solid #FFE082;border-radius:8px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;gap:12px;animation:fadeIn .3s ease">' +
        '<span style="font-size:12px;color:#5D4037;line-height:1.5">' + tip + '</span>' +
        '<button type="button" onclick="MissionControl.dismissTip(\'' + tabId + '\');render()" style="padding:4px 10px;border-radius:4px;border:1px solid #FFE082;background:#FFF;font-size:11px;font-weight:600;color:#795548;cursor:pointer;font-family:inherit;white-space:nowrap">Got it</button>' +
      '</div>';
    },

    // ═══════════════════════════════════════════════════════
    // RENDER: FULL PANEL
    // ═══════════════════════════════════════════════════════
    renderPanel: function() {
      if (!_state.open) return '';

      var tasks = this.getTasks();
      var done = tasks.filter(function(t) { return t.done; }).length;
      var total = tasks.length;
      var readiness = this.getReadiness();
      var heatMap = this.getHeatMap();
      var isFirst = this.isFirstCase();
      var setting = _state.setting || 'ed';
      var settingLabels = { ed: 'ED Encounter', inpatient: 'Inpatient Admission', consult: 'Consult', clinic: 'Clinic Visit', icu: 'ICU', 'post-discharge': 'Post-Discharge' };
      var patientName = (window.PATIENT && PATIENT.name) ? PATIENT.name : 'Patient';
      var cc = (window.PATIENT && PATIENT.chiefComplaint) ? PATIENT.chiefComplaint : '';

      var html = '<div style="position:fixed;top:0;right:0;width:420px;max-width:90vw;height:100vh;background:#fff;box-shadow:-4px 0 24px rgba(0,0,0,.15);z-index:999;overflow-y:auto;animation:mcSlideIn .25s ease;font-family:\'IBM Plex Sans\',-apple-system,sans-serif">';
      
      // Header
      html += '<div style="padding:20px 24px 16px;border-bottom:1px solid #eee;position:sticky;top:0;background:#fff;z-index:1">';
      html += '<div style="display:flex;justify-content:space-between;align-items:flex-start">';
      html += '<div><div style="font-size:18px;font-weight:700;color:#1A1A2E">\uD83D\uDCCB Mission Control</div>';
      html += '<div style="font-size:12px;color:#5A6178;margin-top:4px">' + (settingLabels[setting] || 'Encounter') + '</div></div>';
      html += '<button type="button" onclick="MissionControl.toggle();render()" style="padding:6px 10px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:14px;font-family:inherit;color:#5A6178">\u2715</button>';
      html += '</div>';
      // Patient context
      if (patientName) {
        html += '<div style="margin-top:12px;padding:10px 12px;background:#F7F8FA;border-radius:8px;font-size:12px;color:#1A1A2E">';
        html += '<strong>Patient:</strong> ' + patientName;
        if (cc) html += '  \u00B7  <strong>CC:</strong> ' + cc;
        html += '</div>';
      }
      html += '</div>';

      // First-time welcome
      if (isFirst) {
        html += '<div style="margin:16px 24px;padding:16px;background:#EBF5FB;border-radius:10px;border-left:4px solid #2874A6">';
        html += '<div style="font-size:13px;font-weight:700;color:#2874A6;margin-bottom:8px">\uD83D\uDC4B Welcome to Your First Patient!</div>';
        html += '<div style="font-size:12px;color:#333;line-height:1.6">This is a simulated EMR. Use the sidebar tabs to review the chart. When you\u2019re ready, write your note in the Documentation tab and submit for feedback. Your CoachDx attending is available whenever you want to think through your reasoning. There\u2019s no time limit and no wrong order.</div>';
        html += '</div>';
      }

      // Progress bar
      var pct = total > 0 ? Math.round(done / total * 100) : 0;
      html += '<div style="padding:16px 24px">';
      html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">';
      html += '<span style="font-size:12px;font-weight:600;color:#1A1A2E">Progress</span>';
      html += '<span style="font-size:12px;color:#5A6178">' + done + ' / ' + total + ' tasks \u00B7 ' + this.getElapsed() + '</span>';
      html += '</div>';
      html += '<div style="height:6px;background:#ECEEF2;border-radius:3px;overflow:hidden">';
      html += '<div style="height:100%;width:' + pct + '%;background:#2874A6;border-radius:3px;transition:width .3s"></div>';
      html += '</div></div>';

      // Task checklist
      html += '<div style="padding:0 24px 16px">';
      html += '<div style="font-size:10px;font-weight:700;color:#8C92A4;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px">Your Encounter Tasks</div>';
      tasks.forEach(function(t) {
        var icon = t.done ? '\u2705' : '\u25CB';
        var style = t.done ? 'color:#1B7A3D;text-decoration:line-through;opacity:.7' : 'color:#1A1A2E';
        html += '<div style="padding:6px 0;font-size:13px;display:flex;align-items:center;gap:8px;' + style + '">';
        html += '<span style="font-size:14px;flex-shrink:0">' + icon + '</span>';
        html += '<span>' + t.label + '</span>';
        html += '</div>';
      });
      html += '</div>';

      // Readiness indicator
      html += '<div style="margin:0 24px 16px;padding:12px 14px;background:' + (readiness.level === 'green' ? '#E8F5E9' : readiness.level === 'yellow' ? '#FFF8E1' : '#FFEBEE') + ';border-radius:8px;display:flex;align-items:center;gap:8px">';
      html += '<span style="font-size:18px">' + readiness.emoji + '</span>';
      html += '<span style="font-size:12px;font-weight:500;color:#333">' + readiness.label + '</span>';
      html += '</div>';

      // Chart coverage heat map
      html += '<div style="padding:0 24px 16px">';
      html += '<div style="font-size:10px;font-weight:700;color:#8C92A4;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px">Chart Coverage</div>';
      html += '<div style="display:flex;gap:6px;flex-wrap:wrap">';
      heatMap.forEach(function(sec) {
        var bg = sec.visited ? '#2874A6' : '#ECEEF2';
        var fg = sec.visited ? '#fff' : '#8C92A4';
        html += '<div style="padding:4px 8px;border-radius:4px;background:' + bg + ';color:' + fg + ';font-size:10px;font-weight:600;min-width:40px;text-align:center">' + sec.label + '</div>';
      });
      html += '</div>';
      html += '<div style="font-size:10px;color:#8C92A4;margin-top:6px">\u2588 = reviewed  \u2591 = not yet visited</div>';
      html += '</div>';

      // CoachDx quick-launch
      html += '<div style="padding:0 24px 24px">';
      html += '<button type="button" onclick="MissionControl.toggle();switchTab(\'coach\');render()" style="width:100%;padding:12px;border-radius:8px;border:2px solid #2874A6;background:#EBF5FB;color:#2874A6;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:all .15s">';
      html += '\uD83E\uDDE0 Talk to Your Attending';
      html += '</button>';
      html += '</div>';

      html += '</div>';

      // Backdrop
      html = '<div onclick="MissionControl.toggle();render()" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.3);z-index:998;animation:fadeIn .2s"></div>' + html;

      return html;
    }
  };

  // Add animation keyframes
  if (!document.getElementById('mc-animations')) {
    var style = document.createElement('style');
    style.id = 'mc-animations';
    style.textContent = '@keyframes mcSlideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}';
    document.head.appendChild(style);
  }

})();
