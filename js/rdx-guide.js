/* rdx-guide.js — Intelligent Case-Driven Navigation Guide
 * Three features:
 *   1. "Attending Nudge" strip — one persistent sentence that tells the learner what to do next
 *   2. Sidebar dim — unvisited/not-yet-relevant tabs render at reduced opacity
 *   3. Icon-collapse sidebar — collapses to icon-only, expands on hover, saves horizontal space
 *
 * All state is read from the existing S object, sessionStorage (visited tabs), 
 * and CRT state — nothing new to maintain.
 */
(function() {
  'use strict';

  var GUIDE_KEY = 'rdx-guide-visited';

  // ── Utilities ─────────────────────────────────────────────────────────────
  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = String(s);
    return d.innerHTML;
  }

  function getCaseKey() {
    try {
      var p = new URLSearchParams(window.location.search);
      return (p.get('case') || 'unknown');
    } catch(e) { return 'unknown'; }
  }

  // ── Visited tab tracking ───────────────────────────────────────────────────
  function getVisited() {
    try {
      var raw = sessionStorage.getItem(GUIDE_KEY + '-' + getCaseKey());
      return raw ? JSON.parse(raw) : {};
    } catch(e) { return {}; }
  }

  function markVisited(tabId) {
    try {
      var v = getVisited();
      if (!v[tabId]) {
        v[tabId] = Date.now();
        sessionStorage.setItem(GUIDE_KEY + '-' + getCaseKey(), JSON.stringify(v));
      }
    } catch(e) {}
  }

  function hasVisited(tabId) {
    return !!getVisited()[tabId];
  }

  function hasVisitedAny(tabIds) {
    var v = getVisited();
    return tabIds.some(function(id) { return !!v[id]; });
  }

  // ── Learner state assessment ───────────────────────────────────────────────
  function getState() {
    try {
      var s = window.S || {};
      var visited = getVisited();

      // Note content
      var noteWords = 0;
      Object.values(s.noteFields || {}).forEach(function(v) {
        if (v) noteWords += v.trim().split(/\s+/).filter(Boolean).length;
      });

      // Abnormal labs
      var abnLabs = 0;
      if (window.LABS) {
        LABS.forEach(function(lab) {
          lab.groups.forEach(function(g) {
            abnLabs += g.results.filter(function(r) { return r.flag; }).length;
          });
        });
      }

      // Abnormal vitals
      var abnVitals = false;
      if (window.VITALS && VITALS[0]) {
        var v0 = VITALS[0];
        if (parseInt(v0.hr) > 100 || parseInt(v0.hr) < 60 || parseInt(v0.spo2) < 95 || parseInt(v0.bp) < 90) {
          abnVitals = true;
        }
      }

      // CRT state
      var crtState = null;
      try {
        var raw = sessionStorage.getItem('rdx_crt_state');
        var all = raw ? JSON.parse(raw) : {};
        crtState = all[getCaseKey()] || null;
      } catch(e) {}

      // DDx
      var hasDDx = !!sessionStorage.getItem('rdx-ddx-' + getCaseKey());

      // CoachDx
      var coachMsgs = (s.coachMessages || []).filter(function(m) { return m.role === 'user'; }).length;

      // Orders
      var orderCount = ((s.labOrders || []).length + (s.imgOrders || []).length);
      var crtOrders = crtState ? (crtState.ordersPlaced || []).length : 0;

      // Chart review — key tabs
      var reviewedLabs     = hasVisited('labs');
      var reviewedVitals   = hasVisited('vitals');
      var reviewedMeds     = hasVisited('medications');
      var reviewedImaging  = hasVisited('imaging');
      var startedNote      = noteWords > 10;
      var submittedNote    = !!s.submitted;
      var startedCoach     = coachMsgs > 0;
      var crtStarted       = crtOrders > 0;

      // Estimate chart review completeness (0-4)
      var chartScore = [reviewedLabs, reviewedVitals, reviewedMeds, Object.keys(visited).length >= 3].filter(Boolean).length;

      return {
        activeTab:       s.activeTab || 'demographics',
        visited:         visited,
        chartScore:      chartScore,
        abnLabs:         abnLabs,
        abnVitals:       abnVitals,
        reviewedLabs:    reviewedLabs,
        reviewedVitals:  reviewedVitals,
        reviewedMeds:    reviewedMeds,
        reviewedImaging: reviewedImaging,
        hasDDx:          hasDDx,
        noteWords:       noteWords,
        startedNote:     startedNote,
        submittedNote:   submittedNote,
        startedCoach:    startedCoach,
        coachMsgs:       coachMsgs,
        crtStarted:      crtStarted,
        crtOrders:       crtOrders,
        orderCount:      orderCount,
        crtCompleted:    crtState && crtState.completed,
        pitfalls:        crtState ? (crtState.pitfallsTriggered || []).length : 0,
      };
    } catch(e) { return {}; }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // FEATURE 1 — ATTENDING NUDGE STRIP
  // ══════════════════════════════════════════════════════════════════════════
  var NUDGE_DISMISSED = false;

  var NUDGES = [
    // ── Stage 0: Just opened, haven't looked at anything critical ─────────
    {
      condition: function(st) { return st.chartScore === 0 && !st.startedNote; },
      icon: '🔍',
      text: function(st) {
        var urgency = st.abnVitals ? 'The vitals are abnormal — start there.' :
                      st.abnLabs  ? 'There are ' + st.abnLabs + ' abnormal labs waiting.' :
                      'Start by reviewing the chart — labs, vitals, and medications.';
        return urgency;
      },
      action: function(st) { return st.abnVitals ? 'vitals' : 'labs'; },
      actionLabel: function(st) { return st.abnVitals ? 'View Vitals →' : 'Open Labs →'; },
      color: '#EF4444',
      bg: '#FEF2F2',
      border: '#FECACA',
    },

    // ── Stage 1: Reviewed some chart but missed labs or vitals ────────────
    {
      condition: function(st) { return st.chartScore >= 1 && st.chartScore < 3 && !st.startedNote && !st.hasDDx; },
      icon: '📋',
      text: function(st) {
        if (!st.reviewedLabs && st.abnLabs > 0) return 'Don\'t miss the labs — ' + st.abnLabs + ' values are flagged abnormal.';
        if (!st.reviewedVitals && st.abnVitals) return 'Check the vitals — something is out of range.';
        if (!st.reviewedMeds) return 'Review medications before forming your differential — allergies and interactions matter.';
        return 'You\'ve reviewed the chart. What\'s your differential? Commit before you talk to the patient.';
      },
      action: function(st) {
        if (!st.reviewedLabs) return 'labs';
        if (!st.reviewedVitals) return 'vitals';
        if (!st.reviewedMeds) return 'medications';
        return null;
      },
      actionLabel: function(st) {
        if (!st.reviewedLabs) return 'Open Labs →';
        if (!st.reviewedVitals) return 'Open Vitals →';
        if (!st.reviewedMeds) return 'Open Meds →';
        return null;
      },
      color: '#D97706',
      bg: '#FFFBEB',
      border: '#FDE68A',
    },

    // ── Stage 2: Reviewed chart, no DDx yet ───────────────────────────────
    {
      condition: function(st) { return st.chartScore >= 3 && !st.hasDDx && !st.startedNote; },
      icon: '💡',
      text: function() { return 'Good chart review. Write your differential now — before the history anchors your thinking.'; },
      action: function() { return '__ddx'; },
      actionLabel: function() { return 'Write DDx →'; },
      color: '#7C3AED',
      bg: '#F5F3FF',
      border: '#DDD6FE',
    },

    // ── Stage 3: Has DDx, hasn't started note ─────────────────────────────
    {
      condition: function(st) { return st.hasDDx && !st.startedNote && !st.startedCoach; },
      icon: '🗣️',
      text: function() { return 'Differential saved. Now go take the history — ask the patient questions and document your HPI.'; },
      action: function() { return 'documentation'; },
      actionLabel: function() { return 'Write HPI →'; },
      color: '#2874A6',
      bg: '#EBF4FB',
      border: '#BFDBFE',
    },

    // ── Stage 4: Note started, CoachDx untouched ─────────────────────────
    {
      condition: function(st) { return st.startedNote && !st.startedCoach && !st.submittedNote; },
      icon: '🧠',
      text: function(st) {
        var words = st.noteWords;
        if (words < 50) return 'Keep building the HPI. Then when you\'re ready, talk through your reasoning with your AI attending.';
        return 'Solid start on the note. Your AI attending is ready — share your differential and defend it.';
      },
      action: function() { return 'coach'; },
      actionLabel: function() { return 'Open CoachDx →'; },
      color: '#2874A6',
      bg: '#EBF4FB',
      border: '#BFDBFE',
    },

    // ── Stage 5: CoachDx active, no orders yet ────────────────────────────
    {
      condition: function(st) { return st.startedCoach && !st.crtStarted && !st.submittedNote && st.noteWords > 30; },
      icon: '⚡',
      text: function() { return 'Good reasoning with your attending. Now place your orders — what workup does this patient need?'; },
      action: function() { return 'orders'; },
      actionLabel: function() { return 'Place Orders →'; },
      color: '#065F46',
      bg: '#ECFDF5',
      border: '#A7F3D0',
    },

    // ── Stage 6: Orders placed, note needs finishing ──────────────────────
    {
      condition: function(st) { return (st.crtStarted || st.orderCount > 0) && !st.submittedNote && st.noteWords > 50; },
      icon: '📝',
      text: function(st) {
        var words = st.noteWords;
        if (words < 100) return 'Orders are in. Finish your assessment and plan in the note, then submit.';
        return 'Looking good. Complete your plan and submit when you\'re confident in your reasoning.';
      },
      action: function() { return 'documentation'; },
      actionLabel: function() { return 'Finish Note →'; },
      color: '#2874A6',
      bg: '#EBF4FB',
      border: '#BFDBFE',
    },

    // ── Stage 7: Note submitted ───────────────────────────────────────────
    {
      condition: function(st) { return st.submittedNote && !st.crtCompleted; },
      icon: '✅',
      text: function() { return 'Note submitted. Your debrief is below — review what you got right, what you missed, and key learning points.'; },
      action: function() { return null; },
      actionLabel: function() { return null; },
      color: '#065F46',
      bg: '#ECFDF5',
      border: '#A7F3D0',
    },

    // ── Stage 8: Everything complete ─────────────────────────────────────
    {
      condition: function(st) { return st.submittedNote && st.crtCompleted; },
      icon: '🎯',
      text: function(st) {
        if (st.pitfalls > 0) return 'Case complete — but watch the pitfalls section. ' + st.pitfalls + ' were triggered.';
        return 'Case complete. Strong work. Review your debrief and then try a new case.';
      },
      action: function() { return null; },
      actionLabel: function() { return null; },
      color: '#065F46',
      bg: '#ECFDF5',
      border: '#A7F3D0',
    },
  ];

  function getCurrentNudge() {
    var st = getState();
    for (var i = 0; i < NUDGES.length; i++) {
      if (NUDGES[i].condition(st)) {
        return { nudge: NUDGES[i], state: st };
      }
    }
    return null;
  }

  window.RDXGuide = {

    // ── Render the nudge strip ───────────────────────────────────────────
    renderNudgeStrip: function() {
      if (NUDGE_DISMISSED) return '';
      var result = getCurrentNudge();
      if (!result) return '';
      var n = result.nudge, st = result.state;

      var text = n.text(st);
      var action = n.action(st);
      var actionLabel = n.actionLabel(st);

      var actionBtn = '';
      if (action && actionLabel) {
        if (action === '__ddx') {
          actionBtn = '<button onclick="RDXIntegration&&RDXIntegration.showDDxPrompt?RDXIntegration.showDDxPrompt():null" style="flex-shrink:0;padding:5px 12px;background:' + n.color + ';color:#fff;border:none;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit">' + esc(actionLabel) + '</button>';
        } else {
          actionBtn = '<button onclick="switchTab(\'' + action + '\')" style="flex-shrink:0;padding:5px 12px;background:' + n.color + ';color:#fff;border:none;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit">' + esc(actionLabel) + '</button>';
        }
      }

      return '<div id="rdx-nudge-strip" style="display:flex;align-items:center;gap:10px;padding:8px 20px;background:' + n.bg + ';border-bottom:1px solid ' + n.border + ';flex-shrink:0">'
        + '<span style="font-size:16px;flex-shrink:0">' + n.icon + '</span>'
        + '<span style="font-size:13px;color:#374151;flex:1;line-height:1.4"><strong style="color:' + n.color + '">Next: </strong>' + esc(text) + '</span>'
        + actionBtn
        + '<button onclick="RDXGuide.dismissNudge()" style="flex-shrink:0;background:none;border:none;color:#9CA3AF;cursor:pointer;font-size:16px;line-height:1;padding:2px 4px;font-family:inherit" title="Dismiss">×</button>'
        + '</div>';
    },

    dismissNudge: function() {
      NUDGE_DISMISSED = true;
      var el = document.getElementById('rdx-nudge-strip');
      if (el) {
        el.style.transition = 'opacity .2s, max-height .3s';
        el.style.opacity = '0';
        el.style.overflow = 'hidden';
        el.style.maxHeight = '0';
        setTimeout(function() { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
      }
    },

    // Re-show nudge on tab switch (case may have progressed)
    resetNudge: function() {
      NUDGE_DISMISSED = false;
    },

    // ── Tab dim logic ────────────────────────────────────────────────────
    // Returns CSS class to add to a sidebar button based on learner stage
    getTabDimClass: function(tabId) {
      var st = getState();
      var visited = st.visited || {};

      // Never dim active tab or already-visited tabs
      if (st.activeTab === tabId) return '';
      if (visited[tabId]) return '';

      // Define unlock order — tabs dim until their stage is reached
      var unlockAtStage = {
        // Always accessible (chart review)
        'demographics':   0,
        'problems':       0,
        'labs':           0,
        'vitals':         0,
        'medications':    0,
        'allergies':      0,
        'imaging':        0,
        'history':        0,
        'immunizations':  0,
        'visits':         0,
        // Unlocks after basic chart review
        'documentation':  1,
        // Unlocks after HPI started
        'coach':          2,
        'crt':            2,
        'orders':         2,
        // Unlocks after CoachDx started
        'oral':           3,
        'studyhub':       3,
        'autofeedback':   4,
        'feedback':       5,
        // Faculty/admin — never dim
        'grading':        0,
        'admin':          0,
        'handoff':        0,
      };

      var required = unlockAtStage[tabId];
      if (required === undefined) return '';

      var currentStage = 0;
      if (st.chartScore >= 2)    currentStage = 1;
      if (st.startedNote)        currentStage = 2;
      if (st.startedCoach)       currentStage = 3;
      if (st.submittedNote)      currentStage = 4;
      if (st.crtCompleted)       currentStage = 5;

      return (required > currentStage) ? 'rdx-tab-dim' : '';
    },

    // ── Mark tab visited on switch ────────────────────────────────────────
    trackTabVisit: function(tabId) {
      markVisited(tabId);
    },

    // ── Inline nudge for dimmed tabs (shown on hover) ─────────────────────
    getDimTooltip: function(tabId) {
      var msgs = {
        'documentation': 'Available after chart review',
        'coach':         'Available after starting your HPI',
        'crt':           'Available after starting your HPI',
        'orders':        'Available after starting your HPI',
        'oral':          'Available after talking with CoachDx',
        'studyhub':      'Available after talking with CoachDx',
        'autofeedback':  'Available after submitting your note',
        'feedback':      'Available after submitting your note',
      };
      return msgs[tabId] || '';
    },

  };

  // ── Hook into tab switches ────────────────────────────────────────────────
  document.addEventListener('rdx-tab-switch', function(e) {
    if (e.detail && e.detail.tab) {
      markVisited(e.detail.tab);
      // Reset nudge so it re-evaluates for new state
      setTimeout(function() {
        NUDGE_DISMISSED = false;
        // Patch nudge strip in-place without full re-render
        var existing = document.getElementById('rdx-nudge-strip');
        var container = existing ? existing.parentNode : null;
        if (container) {
          var newStrip = document.createElement('div');
          newStrip.innerHTML = window.RDXGuide.renderNudgeStrip();
          var newEl = newStrip.firstChild;
          if (newEl) {
            if (existing) container.replaceChild(newEl, existing);
            else container.insertBefore(newEl, container.firstChild);
          } else if (existing) {
            container.removeChild(existing);
          }
        }
      }, 100);
    }
  });

  // ── Icon sidebar CSS injection ────────────────────────────────────────────
  // Applied via CSS class on .sidebar — toggles via user pref or auto on narrow screens
  function injectGuideCss() {
    if (document.getElementById('rdx-guide-css')) return;
    var style = document.createElement('style');
    style.id = 'rdx-guide-css';
    style.textContent = [

      // Dim class for locked tabs
      '.rdx-tab-dim { opacity: 0.38; transition: opacity .2s; }',
      '.rdx-tab-dim:hover { opacity: 0.7; }',
      '.rdx-tab-dim.active { opacity: 1; }',

      // Icon-only sidebar mode
      '.sidebar.rdx-icon-sidebar { width: 52px; transition: width .2s ease; overflow: hidden; }',
      '.sidebar.rdx-icon-sidebar:hover { width: 200px; overflow: visible; z-index: 100; box-shadow: 4px 0 16px rgba(0,0,0,.12); }',
      '.sidebar.rdx-icon-sidebar .sidebar-btn { justify-content: center; padding: 10px 0; }',
      '.sidebar.rdx-icon-sidebar:not(:hover) .sidebar-btn span { opacity: 0; width: 0; overflow: hidden; display: none; }',
      '.sidebar.rdx-icon-sidebar:not(:hover) [class*="rdx-sidebar-ai"] { font-size: 0; padding: 0 4px; }',
      '.sidebar.rdx-icon-sidebar:not(:hover) .rdx-section-label { opacity: 0; height: 0; overflow: hidden; margin: 0; padding: 0; }',
      '.sidebar.rdx-icon-sidebar:not(:hover) [data-ai-desc]::after { display: none; }',

      // Sidebar toggle button
      '.rdx-sidebar-toggle { position: absolute; bottom: 12px; left: 0; right: 0; display: flex; justify-content: center; }',
      '.rdx-sidebar-toggle button { background: none; border: none; cursor: pointer; color: #94A3B8; font-size: 16px; padding: 4px 8px; border-radius: 6px; font-family: inherit; }',
      '.rdx-sidebar-toggle button:hover { background: #F1F5F9; color: #2874A6; }',

      // Nudge strip pulse on first load
      '@keyframes rdxNudgePulse { 0%,100% { box-shadow: 0 0 0 0 rgba(40,116,166,0); } 50% { box-shadow: 0 0 0 4px rgba(40,116,166,.15); } }',
      '#rdx-nudge-strip { animation: rdxNudgePulse 2s ease 1s 2; }',

      // Smooth tab transitions
      '.sidebar-btn { transition: opacity .2s, background .15s, border-color .15s; }',

      // Stage unlock animation — flash green when a tab unlocks
      '@keyframes rdxTabUnlock { 0% { background: #ECFDF5; } 100% { background: transparent; } }',
      '.sidebar-btn.rdx-just-unlocked { animation: rdxTabUnlock .8s ease; }',

    ].join('\n');
    document.head.appendChild(style);
  }

  injectGuideCss();

  // ── Sidebar icon-collapse toggle ──────────────────────────────────────────
  var _iconMode = false;

  window.RDXGuide.toggleIconSidebar = function() {
    _iconMode = !_iconMode;
    var sb = document.querySelector('.sidebar');
    if (sb) {
      sb.classList.toggle('rdx-icon-sidebar', _iconMode);
      try { localStorage.setItem('rdx-icon-sidebar', _iconMode ? '1' : '0'); } catch(e) {}
    }
    var btn = document.getElementById('rdx-icon-toggle-btn');
    if (btn) btn.title = _iconMode ? 'Expand sidebar' : 'Collapse sidebar';
    if (btn) btn.textContent = _iconMode ? '›' : '‹';
  };

  // Default: icon-only sidebar. Expanded only if user explicitly set '0'.
  try {
    var _iconPref = localStorage.getItem('rdx-icon-sidebar');
    if (_iconPref !== '0') {  // default ON unless user explicitly expanded
      _iconMode = true;
      var sb = document.querySelector('.sidebar');
      if (sb) sb.classList.add('rdx-icon-sidebar');
    }
  } catch(e) {}

  // ── Render sidebar toggle button (injected at bottom of sidebar) ──────────
  window.RDXGuide.renderSidebarToggle = function() {
    return '<div class="rdx-sidebar-toggle"><button id="rdx-icon-toggle-btn" onclick="RDXGuide.toggleIconSidebar()" title="Collapse sidebar">‹</button></div>';
  };

})();
