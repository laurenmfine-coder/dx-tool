/* js/mission-control.js — Mission Control Panel for ReasonDx Virtual EMR
 * Provides: progress tracking, task checklist, chart coverage heat map,
 * readiness indicator, first-time orientation, inline tips,
 * persistent Help FAB, context-aware guidance, and guest-mode support.
 */
(function() {
  'use strict';

  var TASKS_BY_SETTING = {
    ed: [
      // Phase 1: Chart review
      { id: 'review-vitals',    label: 'Review vitals',              group: 'review', autoTab: 'vitals',       autoTime: 5 },
      { id: 'review-problems',  label: 'Review problem list',        group: 'review', autoTab: 'problems',     autoTime: 3 },
      { id: 'review-meds',      label: 'Review medications',         group: 'review', autoTab: 'medications',  autoTime: 3 },
      { id: 'review-allergies', label: 'Check allergies',            group: 'review', autoTab: 'allergies',    autoTime: 2 },
      // Phase 2: Initial DDx before interview
      { id: 'initial-ddx',      label: 'Form initial differential (before interview)', group: 'reason', check: '_checkInitialDdx', autoTab: 'ddx', autoTime: 5 },
      // Phase 3: Take the history
      { id: 'interview-patient',label: 'Interview the patient',      group: 'reason', autoTab: 'interview',    autoTime: 5 },
      // Phase 4: Revise DDx after history
      { id: 'revised-ddx',      label: 'Revise differential after history',            group: 'reason', check: '_checkRevisedDdx'  },
      // Phase 5: Orders (informed by DDx + history)
      { id: 'place-orders',     label: 'Place targeted orders',      group: 'action', check: '_checkOrders'       },
      // Phase 6: Documentation
      { id: 'write-note',       label: 'Write H&P with Assessment & Plan', group: 'action', check: '_checkNote' },
      { id: 'submit',           label: 'Submit encounter',           group: 'action', check: '_checkSubmitted'    }
    ],
    inpatient: [
      { id: 'read-handoff',  label: 'Receive ED handoff',                  group: 'review', autoTab: 'handoff',     autoTime: 5 },
      { id: 'review-vitals', label: 'Review vitals',                       group: 'review', autoTab: 'vitals',      autoTime: 5 },
      { id: 'review-labs',   label: 'Review labs',                         group: 'review', autoTab: 'labs',        autoTime: 3 },
      { id: 'review-meds',   label: 'Review medications',                  group: 'review', autoTab: 'medications', autoTime: 3 },
      { id: 'med-recon',     label: 'Complete medication reconciliation',  group: 'action', check: '_checkMedRecon'  },
      { id: 'place-orders',  label: 'Place admission orders',              group: 'action', check: '_checkOrders'    },
      { id: 'write-note',    label: 'Write admission H&P',                 group: 'action', check: '_checkNote'      },
      { id: 'submit',        label: 'Submit encounter',                    group: 'action', check: '_checkSubmitted' }
    ],
    consult: [
      { id: 'read-handoff',   label: 'Review consult question', group: 'review', autoTab: 'handoff',     autoTime: 5 },
      { id: 'review-labs',    label: 'Review labs',             group: 'review', autoTab: 'labs',        autoTime: 3 },
      { id: 'review-meds',    label: 'Review medications',      group: 'review', autoTab: 'medications', autoTime: 3 },
      { id: 'review-history', label: 'Review history',          group: 'review', autoTab: 'history',     autoTime: 3 },
      { id: 'write-note',     label: 'Write consult note',      group: 'action', check: '_checkNote'        },
      { id: 'submit',         label: 'Submit encounter',        group: 'action', check: '_checkSubmitted'   }
    ],
    clinic: [
      { id: 'review-vitals', label: 'Review vitals',        group: 'review', autoTab: 'vitals',      autoTime: 3 },
      { id: 'review-meds',   label: 'Review medications',   group: 'review', autoTab: 'medications', autoTime: 3 },
      { id: 'review-history',label: 'Review history',       group: 'review', autoTab: 'history',     autoTime: 3 },
      { id: 'med-recon',     label: 'Reconcile medications',group: 'action', check: '_checkMedRecon'  },
      { id: 'write-note',    label: 'Write visit note',     group: 'action', check: '_checkNote'      },
      { id: 'submit',        label: 'Submit encounter',     group: 'action', check: '_checkSubmitted' }
    ]
  };
  TASKS_BY_SETTING.icu = TASKS_BY_SETTING.inpatient;
  TASKS_BY_SETTING['post-discharge'] = TASKS_BY_SETTING.clinic;

  var CHART_SECTIONS = [
    { id: 'demographics', short: 'Info'   },
    { id: 'problems',     short: 'Probs'  },
    { id: 'medications',  short: 'Meds'   },
    { id: 'allergies',    short: 'Allrg'  },
    { id: 'vitals',       short: 'Vitals' },
    { id: 'labs',         short: 'Labs'   },
    { id: 'imaging',      short: 'Img'    },
    { id: 'visits',       short: 'Visits' },
    { id: 'history',      short: 'Hx'     }
  ];

  var TIPS = {
    demographics:  '\uD83D\uDCA1 Start here \u2014 review the patient\u2019s age, chief complaint, and history. Then use the tabs on the left to explore vitals, labs, and medications.',
    vitals:        '\uD83D\uDCA1 Look for trends, not just the latest values. Abnormal vitals are flagged. Think about what the pattern tells you.',
    labs:          '\uD83D\uDCA1 Click any lab panel to expand it. Red values are above range; blue are below.',
    documentation: '\uD83D\uDCA1 Each section auto-saves as you type. Write as if this were a real patient encounter note.',
    orders:        '\uD83D\uDCA1 Think before ordering \u2014 which result would most change your management? Order patterns are part of the assessment.',
    coach:         '\uD83D\uDCA1 Present your thinking to your AI attending: the patient, CC, differential, and reasoning. They will ask Socratic questions \u2014 not just give answers.',
    medications:   '\uD83D\uDCA1 Review each medication and mark it as verified, held, or discontinued for reconciliation.',
    ddx:           '\uD83D\uDCA1 Rank your differential by likelihood. Add supporting and refuting evidence for each diagnosis.',
    studyhub:      '\uD83D\uDCA1 The Study Hub turns cases into flashcards. Click \u201cHarvest Learning Gaps\u201d to auto-generate cards.'
  };

  // Context-aware guidance shown per tab inside the Help panel
  // Context-aware guidance shown per tab inside the Help panel
  // Reflects the correct clinical reasoning workflow:
  // Chart review → Initial DDx → Interview → Revised DDx → Orders → Note → Submit
  var TAB_GUIDANCE = {
    demographics: { icon:'👤', heading:'Step 1 — Patient Info',
      body:'Note age, sex, setting, and allergies. This context shapes every diagnosis you consider. Then review the Problem List before opening any data.',
      nextLabel:'Next: Problem List', nextTab:'problems' },
    problems: { icon:'📋', heading:'Step 2 — Problem List',
      body:'Review active and chronic conditions. Each one is a lens for interpreting today\'s presentation. How might HTN, DM, or prior diagnoses relate to the chief complaint?',
      nextLabel:'Next: Medications', nextTab:'medications' },
    medications: { icon:'💊', heading:'Step 3 — Medications',
      body:'Review dose, frequency, and prescriber for each med. Ask: could any medication cause or worsen today\'s symptoms? Any interactions with possible new treatments?',
      nextLabel:'Next: Vitals', nextTab:'vitals' },
    allergies: { icon:'⚠️', heading:'Review Allergies',
      body:'Confirm allergy type and reaction severity before writing any orders. Drug allergy vs. intolerance has different clinical implications.',
      nextLabel:'Next: Vitals', nextTab:'vitals' },
    vitals: { icon:'📊', heading:'Step 4 — Vitals',
      body:'Look at trends, not just the latest values. What does tachycardia with hypoxia tell you? What does improving BP after fluids tell you? Build your first impressions here.',
      nextLabel:'Form your initial differential →', nextTab:'ddx' },
    visits: { icon:'📝', heading:'Visit History — Context Only',
      body:'This shows past notes and previous encounters. Use it to understand the patient\'s baseline — NOT as a substitute for taking the history yourself. Prior diagnoses can anchor your thinking — be aware of that bias.',
      nextLabel:'Now interview the patient →', nextTab:'interview' },
    interview: { icon:'💬', heading:'Step 5 — Take the History',
      body:'This is where the HPI happens. Start open-ended: "Tell me what\'s going on." Then clarify: onset, quality, severity, radiation, timing, modifying factors, associated symptoms. Your differential should be actively forming as you listen.',
      nextLabel:'Revise your differential →', nextTab:'documentation' },
    labs: { icon:'🧪', heading:'Step 7 — Interpret Labs',
      body:'Compare each result against your working differential — not against normal ranges in isolation. Ask: does this confirm my leading diagnosis? Refute it? Open a new branch? Order patterns are tracked.',
      nextLabel:'Next: Imaging', nextTab:'imaging' },
    imaging: { icon:'🩻', heading:'Step 8 — Imaging',
      body:'Read the impression first, then the full report. How does this change your differential? Does it confirm what you expected, or redirect you?',
      nextLabel:'Now write your note →', nextTab:'documentation' },
    history: { icon:'📂', heading:'Family & Social History',
      body:'Social history — smoking, alcohol, occupation, travel, drugs — and family history often hold the key to atypical presentations and risk stratification.',
      nextLabel:'Next: Labs', nextTab:'labs' },
    documentation: { icon:'✏️', heading:'Step 6 / 9 — Documentation',
      body:'Write after your orders have resulted. Your Assessment should reference actual results you have. Your Plan should acknowledge pending tests — state what action you will take based on each expected result. The Results Panel at the top of this tab shows what has resulted vs what is still pending.',
      nextLabel:'Place targeted orders →', nextTab:'orders' },
    ddx: { icon:'🧠', heading:'My Differential Diagnosis',
      body:'Use this tab twice. First BEFORE the interview to commit your initial thinking based on the chart alone. Then REVISE it after taking the history. Rank diagnoses by likelihood. Tag must-not-miss diagnoses. Add supporting and refuting evidence for each entry.',
      nextLabel:'Now interview the patient →', nextTab:'interview' },
    orders: { icon:'📤', heading:'Step 7 — Place Orders',
      body:'Order targeted tests based on your differential. Results arrive automatically after realistic turnaround time — EKG in ~30 sec, troponin in ~2 min, CT in ~8 min. Check Labs and Imaging tabs as results come in. THEN write your note using what you have.',
      nextLabel:'Review results →', nextTab:'labs' },
    grading: { icon:'🎯', heading:'AI Feedback',
      body:'Submit for AI coaching on diagnostic accuracy, reasoning framework, documentation quality, cognitive bias patterns (anchoring, premature closure), and evidence-based management.',
      nextLabel: null, nextTab: null },
    coach: { icon:'🧠', heading:'CoachDx Attending',
      body:'Your AI attending. Use it ANYTIME — talk through your differential, ask why a finding matters, get unstuck on what to do next, or debrief after submission. Socratic, not spoon-feeding.',
      nextLabel: null, nextTab: null }
  };

  var _state = {
    open: false, startTime: null, tabDwell: {}, completed: {},
    dismissed: false, ddxEntries: [], ddxSnapshots: [], initialized: false,
    role: 'student', setting: 'ed', caseId: '', activeTab: ''
  };

  // ─── Persistent Side Tab ──────────────────────────────────
  function _injectHelpFab() {
    if (document.getElementById('rdx-mc-tab-wrap')) return;

    var s = document.createElement('style');
    s.id = 'rdx-mc-tab-css';
    s.textContent =
      '#rdx-mc-tab-wrap{position:fixed;top:50%;right:0;transform:translateY(-50%);z-index:9990;}' +
      '#rdx-mc-tab{display:flex;flex-direction:column;align-items:center;gap:0;cursor:pointer;background:#2874A6;border:none;border-radius:10px 0 0 10px;padding:14px 9px 12px;box-shadow:-3px 0 18px rgba(40,116,166,.45);transition:all .15s;-webkit-tap-highlight-color:transparent;font-family:inherit;}' +
      '#rdx-mc-tab:hover{background:#1B4F72;box-shadow:-4px 0 22px rgba(27,79,114,.55);}' +
      '#rdx-mc-tab-icon{color:#fff;font-size:15px;line-height:1;margin-bottom:8px;}' +
      '#rdx-mc-tab-label{writing-mode:vertical-rl;text-orientation:mixed;transform:rotate(180deg);color:rgba(255,255,255,.92);font-size:11px;font-weight:700;letter-spacing:.12em;white-space:nowrap;line-height:1;}' +
      '#rdx-mc-tab-arrow{color:rgba(255,255,255,.55);font-size:9px;margin-top:10px;transition:transform .2s;}' +
      '#rdx-mc-tab.mc-open #rdx-mc-tab-arrow{transform:rotate(180deg);}' +
      '@media(max-width:600px){#rdx-mc-tab{padding:10px 7px;}#rdx-mc-tab-label{font-size:9px;}#rdx-mc-tab-icon{font-size:13px;}}';

    if (!document.getElementById('rdx-mc-tab-css')) document.head.appendChild(s);

    var wrap = document.createElement('div');
    wrap.id = 'rdx-mc-tab-wrap';
    wrap.innerHTML =
      '<button id="rdx-mc-tab" type="button" onclick="MissionControl.toggle();if(window.render)render();" aria-label="Mission Control — toggle navigation panel">' +
        '<span id="rdx-mc-tab-icon">&#9776;</span>' +
        '<span id="rdx-mc-tab-label">Mission Control</span>' +
        '<span id="rdx-mc-tab-arrow">&#x276E;</span>' +
      '</button>';
    document.body.appendChild(wrap);
  }

  function _updateTabArrow() {
    var tab = document.getElementById('rdx-mc-tab');
    var arrow = document.getElementById('rdx-mc-tab-arrow');
    if (!tab || !arrow) return;
    if (_state.open) {
      tab.classList.add('mc-open');
      arrow.innerHTML = '&#x276F;';  /* › points right = close */
    } else {
      tab.classList.remove('mc-open');
      arrow.innerHTML = '&#x276E;';  /* ‹ points left = open */
    }
  }

  function _pulseOnce() {
    /* No-op — tab is always visible, no pulse needed */
  }

  // ─── Public API ────────────────────────────────────────────
  window.MissionControl = {

    init: function(setting, caseId, role) {
      _state.role = role || 'student';
      _state.startTime = Date.now();
      _state.setting = setting || 'ed';
      _state.caseId = caseId || '';
      _state.open = false;
      _state.initialized = true;
      try {
        var saved = JSON.parse(localStorage.getItem('mc-' + _state.caseId));
        if (saved) {
          _state.completed    = saved.completed    || {};
          _state.tabDwell     = saved.tabDwell     || {};
          _state.startTime    = saved.startTime    || _state.startTime;
          _state.ddxEntries   = saved.ddxEntries   || [];
          _state.ddxRevisedAt  = saved.ddxRevisedAt  || null;
          _state.ddxSnapshots = saved.ddxSnapshots || [];
        }
      } catch(e) {}
      // Auto-open on the user's very first case. The Mission Control
      // panel contains the "How this works" orientation block plus
      // context-aware Where-You-Are guidance. Hiding it by default
      // meant new users saw an empty-looking EMR with no signposts;
      // they had no way to discover the panel existed without first
      // reading the small badge in the header.
      // After the first case the user has the muscle memory; the
      // panel reverts to closed-by-default so it does not get in
      // the way during real work.
      if (this.isFirstCase()) {
        _state.open = true;
        this.markSeen();
      } else {
        _state.open = false;
      }
      _injectHelpFab();
      _updateTabArrow();
      setTimeout(_pulseOnce, 1400);
    },

    initGuest: function(setting) {
      if (_state.initialized) return;
      _state.role = 'guest';
      _state.setting = setting || 'ed';
      _state.initialized = true;
      _state.startTime = Date.now();
      _injectHelpFab();
      _updateTabArrow();
      // Auto-open for guests too — they get the same orientation
      // panel a first-time student gets, plus a "Create a free
      // account" prompt at the bottom of the panel. The flag below
      // ensures we only auto-open the first time per browser; on
      // subsequent guest visits the panel reverts to closed.
      var alreadySeen = false;
      try { alreadySeen = !!localStorage.getItem('rdx-mc-guest-seen'); } catch(e) {}
      _state.open = !alreadySeen;
      try { localStorage.setItem('rdx-mc-guest-seen', '1'); } catch(e) {}
      setTimeout(_pulseOnce, 1400);
    },

    save: function() {
      if (!_state.caseId) return;
      try { localStorage.setItem('mc-' + _state.caseId, JSON.stringify({ completed: _state.completed, tabDwell: _state.tabDwell, startTime: _state.startTime, ddxEntries: _state.ddxEntries, ddxRevisedAt: _state.ddxRevisedAt, ddxSnapshots: _state.ddxSnapshots })); } catch(e) {}
    },

    isFirstCase: function() { return !localStorage.getItem('rdx-mc-seen'); },
    markSeen:    function() { localStorage.setItem('rdx-mc-seen', '1'); },

    trackTab: function(tabId) {
      _state.tabDwell[tabId] = (_state.tabDwell[tabId] || 0) + 1;
      _state.activeTab = tabId;
      this._autoCheckReviewTasks(); this.save();
    },
    addDwell: function(tabId, seconds) {
      _state.tabDwell[tabId] = (_state.tabDwell[tabId] || 0) + seconds;
      _state.activeTab = tabId;
      this._autoCheckReviewTasks(); this.save();
    },

    toggle: function() {
      _state.open = !_state.open;
      if (_state.open && this.isFirstCase()) this.markSeen();
      _injectHelpFab();
      _updateTabArrow();
    },
    isOpen: function() { return _state.open; },

    getTasks: function() {
      var tasks = TASKS_BY_SETTING[_state.setting] || TASKS_BY_SETTING.ed;
      var self = this;
      return tasks.map(function(t) {
        var done = _state.completed[t.id] ||
          (t.autoTab && (_state.tabDwell[t.autoTab]||0) >= (t.autoTime||3)) ||
          (t.check && self[t.check] && self[t.check]());
        if (done) _state.completed[t.id] = true;
        return { id: t.id, label: t.label, group: t.group, done: !!done };
      });
    },
    getCompletedCount: function() { return this.getTasks().filter(function(t){return t.done;}).length; },
    getTotalCount:     function() { return (TASKS_BY_SETTING[_state.setting]||TASKS_BY_SETTING.ed).length; },

    _checkOrders:    function() { return window.S && ((S.labOrders&&S.labOrders.length)||(S.imgOrders&&S.imgOrders.length)||(S.referralOrders&&S.referralOrders.length)); },
    _checkNote:      function() {
      if (!window.S||!S.noteFields) return false;
      var words = Object.values(S.noteFields).reduce(function(s,v){return s+(v?v.split(/\s+/).filter(Boolean).length:0);},0);
      return Object.values(S.noteFields).filter(function(v){return v&&v.trim().length>20;}).length>=4 && words>=150;
    },
    _checkMedRecon:  function() { return window.S&&S.medReconStatus&&window.MEDICATIONS&&Object.keys(S.medReconStatus).length>=MEDICATIONS.length; },
    _checkInitialDdx: function() { return _state.ddxEntries&&_state.ddxEntries.length>=1; },
    _checkRevisedDdx: function() { return _state.ddxEntries&&_state.ddxEntries.length>=2&&!!_state.ddxRevisedAt; },
    _checkDdx:        function() { return _state.ddxEntries&&_state.ddxEntries.length>=2; },
    _checkSubmitted: function() { return window.S&&S.submitted; },
    _autoCheckReviewTasks: function() {
      (TASKS_BY_SETTING[_state.setting]||TASKS_BY_SETTING.ed).forEach(function(t) {
        if (t.autoTab && !_state.completed[t.id] && (_state.tabDwell[t.autoTab]||0)>=(t.autoTime||3)) _state.completed[t.id]=true;
      });
    },

    getReadiness: function() {
      var tasks=this.getTasks(), done=tasks.filter(function(t){return t.done;}).length, pct=tasks.length?done/tasks.length:0;
      if (pct>=0.75) return {level:'green', emoji:'\uD83D\uDFE2', label:'Ready to submit when you are.'};
      if (pct>=0.35) return {level:'yellow',emoji:'\uD83D\uDFE1', label:'In progress. Consider completing your assessment and plan.'};
      return {level:'red',emoji:'\uD83D\uDD34',label:'You may want to review more of the chart before documenting.'};
    },

    getHeatMap: function() {
      return CHART_SECTIONS.map(function(s){ return {id:s.id,label:s.short,visited:(_state.tabDwell[s.id]||0)>=2}; });
    },
    getElapsed: function() { return _state.startTime ? Math.round((Date.now()-_state.startTime)/60000)+' min' : '0 min'; },

    getDdxEntries:    function()    { return _state.ddxEntries||[]; },
    setDdxEntries:    function(e)   { _state.ddxEntries=e; this.save(); },
    addDdxEntry:      function(e)   { _state.ddxEntries.push(e); this.save(); },
    markDdxRevised:   function()    { _state.ddxRevisedAt = Date.now(); this.save(); },
    takeSnapshot:     function(checkpoint) {
      // checkpoint: 'initial' | 'post-interview' | 'post-exam' | 'post-results'
      var snap = {
        checkpoint: checkpoint,
        timestamp:  Date.now(),
        entries:    JSON.parse(JSON.stringify(_state.ddxEntries || []))
      };
      // Remove any existing snapshot for this checkpoint
      _state.ddxSnapshots = (_state.ddxSnapshots || []).filter(function(s){ return s.checkpoint !== checkpoint; });
      _state.ddxSnapshots.push(snap);
      this.save();
      return snap;
    },
    getDdxSnapshots:  function() { return _state.ddxSnapshots || []; },
    getSnapshot:      function(checkpoint) {
      return (_state.ddxSnapshots || []).find(function(s){ return s.checkpoint === checkpoint; }) || null;
    },
    removeDdxEntry:   function(i)   { _state.ddxEntries.splice(i,1); this.save(); },
    updateDdxEntry:   function(i,e) { _state.ddxEntries[i]=e; this.save(); },

    getTip: function(tabId) {
      if (!this.isFirstCase()&&localStorage.getItem('rdx-mc-seen')) return null;
      if (localStorage.getItem('rdx-tip-'+tabId)) return null;
      return TIPS[tabId]||null;
    },
    dismissTip: function(tabId) { localStorage.setItem('rdx-tip-'+tabId,'1'); },

    renderHeaderBadge: function() {
      var done=this.getCompletedCount(), total=this.getTotalCount(), dots='';
      for (var i=0;i<total;i++) dots+='<span style="display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 1px;background:'+(i<done?'#2874A6':'rgba(255,255,255,.3)')+'"></span>';
      return '<button type="button" onclick="MissionControl.toggle();render()" style="display:inline-flex;align-items:center;gap:8px;padding:4px 12px;border-radius:20px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:rgba(255,255,255,.85);font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;margin-left:12px" title="Mission Control">\uD83D\uDCCB <span>'+done+'/'+total+'</span><span style="display:inline-flex;align-items:center;gap:1px">'+dots+'</span><span style="opacity:.6">'+this.getElapsed()+'</span></button>';
    },

    renderTipBar: function(tabId) {
      var tip=this.getTip(tabId);
      if (!tip) return '';
      return '<div style="padding:10px 14px;background:#FFF8E1;border:1px solid #FFE082;border-radius:8px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;gap:12px;animation:fadeIn .3s ease"><span style="font-size:12px;color:#5D4037;line-height:1.5">'+tip+'</span><button type="button" onclick="MissionControl.dismissTip(\''+tabId+'\');render()" style="padding:4px 10px;border-radius:4px;border:1px solid #FFE082;background:#FFF;font-size:11px;font-weight:600;color:#795548;cursor:pointer;font-family:inherit;white-space:nowrap">Got it</button></div>';
    },

    renderPanel: function() {
      if (!_state.open) return '';

      var isGuest  = (_state.role==='guest'||!_state.initialized);
      var activeTab= _state.activeTab||(window.S&&S.activeTab)||'';
      var guidance = TAB_GUIDANCE[activeTab]||null;
      var ptName   = (window.PATIENT&&PATIENT.name)||'';
      var cc       = (window.PATIENT&&PATIENT.chiefComplaint)||'';
      var settingLabels = {ed:'ED Encounter',inpatient:'Inpatient Admission',consult:'Consult',clinic:'Clinic Visit',icu:'ICU','post-discharge':'Post-Discharge'};
      var FF = 'font-family:\'DM Sans\',-apple-system,sans-serif;';

      _updateTabArrow();
      var html = '<div style="position:fixed;top:0;right:0;width:380px;max-width:92vw;height:100vh;background:#fff;box-shadow:-4px 0 28px rgba(0,0,0,.16);z-index:9999;overflow-y:auto;animation:mcSlideIn .22s ease;'+FF+'">';

      // Header
      html += '<div style="padding:18px 20px 14px;border-bottom:1px solid #eee;position:sticky;top:0;background:#fff;z-index:1">';
      html += '<div style="display:flex;justify-content:space-between;align-items:flex-start">';
      html += '<div><div style="font-size:16px;font-weight:700;color:#0f2d42">\uD83D\uDCCB Mission Control</div>';
      html += '<div style="font-size:11px;color:#718096;margin-top:2px">'+(settingLabels[_state.setting]||'Case Navigator')+'</div></div>';
      html += '<button type="button" onclick="MissionControl.toggle();if(window.render)render()" style="padding:6px 13px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:14px;font-weight:700;'+FF+'color:#2874A6;line-height:1" title="Collapse panel">&#x276F; Collapse</button>';
      html += '</div>';
      if (ptName) {
        html += '<div style="margin-top:10px;padding:9px 12px;background:#EBF5FB;border-radius:7px;font-size:12px;color:#1B4F72">';
        html += '<strong>'+ptName+'</strong>';
        if (cc) html += '<span style="color:#4a5568;font-weight:400"> &mdash; <span style="font-weight:600">CC:</span> '+cc+'</span>';
        html += '</div>';
      }
      html += '</div>';

      // Welcome / orientation — brief, actionable
      if (this.isFirstCase()||isGuest) {
        html += '<div style="margin:14px 16px 0;padding:14px 14px 12px;background:#EBF5FB;border-radius:10px;border-left:3px solid #2874A6">';
        html += '<div style="font-size:12px;font-weight:700;color:#2874A6;margin-bottom:8px">\uD83D\uDC4B How this works</div>';
        html += '<div style="font-size:11.5px;color:#1B4F72;line-height:1.7">';
        html += '<div style="margin-bottom:3px">Work through the case in five steps:</div>';
        html += '<div style="margin-left:4px"><strong>\u2460 Chart Review</strong> &mdash; read the chart</div>';
        html += '<div style="margin-left:4px"><strong>\u2461 Patient Interview</strong> &mdash; talk to the AI patient</div>';
        html += '<div style="margin-left:4px"><strong>\u2462 My Differential</strong> &mdash; build your DDx</div>';
        html += '<div style="margin-left:4px"><strong>\u2463 Order &amp; Document</strong> &mdash; orders and a note</div>';
        html += '<div style="margin-left:4px"><strong>\u2464 Coach &amp; Debrief</strong> &mdash; AI feedback</div>';
        html += '</div>';
        html += '<div style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(40,116,166,.18);font-size:11px;color:#1B4F72;line-height:1.5">';
        html += '<strong>Need a mechanism review or want to talk it out?</strong> Tap the blue \u21C4 <em>Mechanism &middot; Coach</em> pill at the bottom-left at any time.';
        html += '</div>';
        // Quick tour CTA — opens the existing video walkthrough
        if (window.RdxTours && window.RdxTours.show) {
          html += '<button type="button" onclick="if(window.RdxTours)RdxTours.show(\'virtual-emr\');" style="margin-top:10px;width:100%;padding:8px 12px;background:#2874A6;color:#fff;border:none;border-radius:7px;font-size:12px;font-weight:700;'+FF+'cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">\u25B6 Watch the 30-second walkthrough</button>';
        }
        if (isGuest) html += '<div style="margin-top:10px;font-size:11px;color:#1B4F72;text-align:center"><a href="/auth/register.html" style="color:#2874A6;font-weight:600">Create a free account</a> to save progress.</div>';
        html += '</div>';
      }

      // Context-aware tab guidance
      if (guidance) {
        html += '<div style="margin:14px 16px 0;padding:13px 14px;background:#fafcff;border:1px solid #d6e8f5;border-radius:10px">';
        html += '<div style="font-size:10px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px">Where You Are</div>';
        html += '<div style="display:flex;align-items:flex-start;gap:10px">';
        html += '<span style="font-size:20px;flex-shrink:0">'+guidance.icon+'</span>';
        html += '<div><div style="font-size:13px;font-weight:700;color:#0f2d42;margin-bottom:4px">'+guidance.heading+'</div>';
        html += '<div style="font-size:12px;color:#4a5568;line-height:1.65">'+guidance.body+'</div></div></div>';
        if (guidance.nextTab) {
          html += '<button type="button" onclick="MissionControl.toggle();if(window.switchTab)switchTab(\''+guidance.nextTab+'\');if(window.render)render();" style="margin-top:11px;width:100%;padding:9px 12px;background:#2874A6;color:#fff;border:none;border-radius:7px;font-size:12px;font-weight:700;'+FF+'cursor:pointer;display:flex;align-items:center;justify-content:space-between"><span>'+guidance.nextLabel+' \u2192</span></button>';
        }
        html += '</div>';
      }


      // Task checklist (authenticated students only)
      if (!isGuest && _state.initialized && _state.role==='student') {
        var tasks=this.getTasks();
        var done2=tasks.filter(function(t){return t.done;}).length;
        var total2=tasks.length, pct2=total2?Math.round(done2/total2*100):0;
        var readiness=this.getReadiness();
        html += '<div style="padding:14px 16px 0">';
        html += '<div style="font-size:10px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px">Encounter Progress</div>';
        html += '<div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="font-size:11px;color:#4a5568">'+done2+' / '+total2+' tasks \u00b7 '+this.getElapsed()+'</span><span style="font-size:11px;color:#2874A6;font-weight:600">'+pct2+'%</span></div>';
        html += '<div style="height:5px;background:#E2ECF4;border-radius:3px;overflow:hidden;margin-bottom:11px"><div style="height:100%;width:'+pct2+'%;background:#2874A6;border-radius:3px;transition:width .3s"></div></div>';
        var _phaseLabels = {
          'review-vitals':    '— CHART REVIEW —',
          'initial-ddx':      '— REASON: INITIAL DDx —',
          'interview-patient':'— HISTORY —',
          'revised-ddx':      '— REASON: REVISE DDx —',
          'place-orders':     '— ORDER & DOCUMENT —'
        };
        tasks.forEach(function(t){
          if (_phaseLabels[t.id]) {
            html += '<div style="font-size:9px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:.07em;margin:8px 0 3px;padding-left:2px">' + _phaseLabels[t.id] + '</div>';
          }
          html += '<div style="padding:4px 0;font-size:12px;display:flex;align-items:center;gap:8px;'+(t.done?'color:#1B7A3D;':'color:#2d3748;')+'"><span style="font-size:13px;flex-shrink:0">'+(t.done?'\u2705':'\u25cb')+'</span><span'+(t.done?' style="text-decoration:line-through;opacity:.65"':'')+'>'+t.label+'</span></div>';
        });
        var rbg=readiness.level==='green'?'#E8F5E9':readiness.level==='yellow'?'#FFF8E1':'#FFEBEE';
        html += '</div><div style="margin:10px 16px 0;padding:10px 12px;background:'+rbg+';border-radius:8px;display:flex;align-items:center;gap:8px"><span style="font-size:16px">'+readiness.emoji+'</span><span style="font-size:12px;font-weight:500;color:#333">'+readiness.label+'</span></div>';

        var heatMap=this.getHeatMap();
        html += '<div style="padding:14px 16px 0"><div style="font-size:10px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:.8px;margin-bottom:7px">Chart Coverage</div>';
        html += '<div style="display:flex;gap:5px;flex-wrap:wrap">';
        heatMap.forEach(function(s){ html += '<div style="padding:4px 8px;border-radius:4px;background:'+(s.visited?'#2874A6':'#ECEEF2')+';color:'+(s.visited?'#fff':'#8C92A4')+';font-size:10px;font-weight:600;min-width:36px;text-align:center">'+s.label+'</div>'; });
        html += '</div><div style="font-size:10px;color:#a0aec0;margin-top:5px">\u2588 reviewed &nbsp;\u2591 not yet visited</div></div>';
      }

      // CoachDx launch
      html += '<div style="padding:14px 16px 20px"><button type="button" onclick="MissionControl.toggle();if(window.switchTab)switchTab(\'coach\');if(window.render)render()" style="width:100%;padding:11px;border-radius:8px;border:2px solid #2874A6;background:#EBF5FB;color:#2874A6;font-size:13px;font-weight:700;'+FF+'cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">\uD83E\uDDE0 Talk to Your Attending</button></div>';

      html += '</div>';

      // Backdrop
      return '<div onclick="MissionControl.toggle();if(window.render)render()" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.28);z-index:9998;animation:fadeIn .2s"></div>'+html;
    }
  };

  // Add animation keyframes
  (function(){
    if (document.getElementById('mc-animations')) return;
    var s=document.createElement('style'); s.id='mc-animations';
    s.textContent='@keyframes mcSlideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes mcTabPulse{0%,100%{background:#2874A6}50%{background:#1B4F72}}';
    document.head.appendChild(s);
  })();

  // Guest auto-init: fires after page load if student init never ran
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (!_state.initialized && window.PATIENT) {
        var setting=(window.S&&S.clinicalSetting)||'ed';
        MissionControl.initGuest(setting);
        if (_state.open && window.render) render();
      } else if (_state.initialized) {
        _injectHelpFab();
        setTimeout(_pulseOnce, 800);
      }
    }, 900);
  });

})();
