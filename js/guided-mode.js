/* js/guided-mode.js — ReasonDx Guided Case Mode Phase Engine
 * Manages phase state, lock/unlock logic, progression, and phase UI rendering.
 * Reads case guided{} block and optional institutional config.
 * Works alongside (not replacing) the Open Chart mode.
 */
(function () {
  'use strict';

  // ── Phase definitions ────────────────────────────────────────
  var PHASES = [
    { id: 1, key: 'cc',         label: 'Chief Complaint',   icon: '🩺', desc: 'Review the chief complaint and setting' },
    { id: 2, key: 'ddx-init',   label: 'Initial DDx',       icon: '📋', desc: 'Build your first differential (CC only)' },
    { id: 3, key: 'interview',  label: 'Patient Interview',  icon: '💬', desc: 'Take a history from the patient' },
    { id: 4, key: 'exam',       label: 'Physical Exam',      icon: '🔍', desc: 'Select and perform examination maneuvers' },
    { id: 5, key: 'ddx-refine', label: 'Refined DDx',        icon: '🔄', desc: 'Revise your differential after history & exam' },
    { id: 6, key: 'past-data',  label: 'Past Data Review',   icon: '📂', desc: 'Review labs, imaging, and chart history' },
    { id: 7, key: 'orders',     label: 'New Orders',         icon: '📤', desc: 'Order new diagnostics and interpret results' },
    { id: 8, key: 'note',       label: 'Note & Feedback',    icon: '🎯', desc: 'Write your note and receive AI coaching' }
  ];

  // ── Default coach config — which phases require/offer CoachDx ─
  var DEFAULT_COACH_CONFIG = {
    1: 'optional',
    2: 'optional',
    3: 'available',   // on-demand throughout
    4: 'optional',
    5: 'required',    // only required default
    6: 'optional',
    7: 'optional',
    8: 'always'       // always available at debrief
  };

  // ── State ────────────────────────────────────────────────────
  var _state = {
    active:    false,
    caseId:    '',
    currentPhase: 1,
    completed: {},       // { phaseKey: true }
    coachDone: {},       // { phaseKey: true }
    ddxPhase2: [],       // snapshot at phase 2
    ddxPhase5: [],       // snapshot at phase 5
    examDone:  [],       // completed maneuvers
    config:    null,     // institutional override (null = defaults)
    guided:    null      // case guided{} block
  };

  // ── Persistence ──────────────────────────────────────────────
  function _save() {
    try {
      sessionStorage.setItem('rdx-guided-state', JSON.stringify({
        caseId:       _state.caseId,
        currentPhase: _state.currentPhase,
        completed:    _state.completed,
        coachDone:    _state.coachDone,
        ddxPhase2:    _state.ddxPhase2,
        ddxPhase5:    _state.ddxPhase5,
        examDone:     _state.examDone
      }));
    } catch (e) {}
  }

  function _load(caseId) {
    try {
      var raw = JSON.parse(sessionStorage.getItem('rdx-guided-state'));
      if (raw && raw.caseId === caseId) {
        _state.currentPhase = raw.currentPhase || 1;
        _state.completed    = raw.completed    || {};
        _state.coachDone    = raw.coachDone    || {};
        _state.ddxPhase2    = raw.ddxPhase2    || [];
        _state.ddxPhase5    = raw.ddxPhase5    || [];
        _state.examDone     = raw.examDone     || [];
        return true;
      }
    } catch (e) {}
    return false;
  }

  // ── Config helpers ───────────────────────────────────────────
  function _getCoachMode(phaseId) {
    var cfg = (_state.config && _state.config.coachModes) || DEFAULT_COACH_CONFIG;
    return cfg[phaseId] || 'optional';
  }

  function _isPhaseEnabled(phaseId) {
    if (!_state.config || !_state.config.enabledPhases) return true;
    return _state.config.enabledPhases.indexOf(phaseId) !== -1;
  }

  function _isPhaseUnlocked(phaseId) {
    if (phaseId === 1) return true;
    if (_state.config && _state.config.allowSkipAhead) return true;
    // All prior enabled phases must be complete
    for (var i = 1; i < phaseId; i++) {
      if (!_isPhaseEnabled(i)) continue;
      var phaseKey = PHASES[i - 1].key;
      if (!_state.completed[phaseKey]) return false;
      // If coach is required at this phase, must be done too
      if (_getCoachMode(i) === 'required' && !_state.coachDone[phaseKey]) return false;
    }
    return true;
  }

  function _completePhase(phaseKey) {
    _state.completed[phaseKey] = true;
    _save();
    if (window.MissionControl) MissionControl.trackTab('guided-' + phaseKey);
  }

  function _markCoachDone(phaseKey) {
    _state.coachDone[phaseKey] = true;
    _save();
  }

  // ── Public API ───────────────────────────────────────────────
  window.GuidedMode = {

    init: function (caseId, config) {
      var guided = window.EMR_DATA && window.EMR_DATA.guided;
      if (!guided || !guided.supported) return false;

      _state.active  = true;
      _state.caseId  = caseId;
      _state.guided  = guided;
      _state.config  = config || (window.RDXInstitutionalConfig && RDXInstitutionalConfig.get(caseId)) || null;

      var resumed = _load(caseId);
      if (!resumed) {
        _state.currentPhase = 1;
        _state.completed    = {};
        _state.coachDone    = {};
        _state.ddxPhase2    = [];
        _state.ddxPhase5    = [];
        _state.examDone     = [];
      }

      return true;
    },

    isActive:        function () { return _state.active; },
    currentPhase:    function () { return _state.currentPhase; },
    isUnlocked:      function (id) { return _isPhaseUnlocked(id); },
    isComplete:      function (key) { return !!_state.completed[key]; },
    getCoachMode:    function (id) { return _getCoachMode(id); },
    getGuidedBlock:  function () { return _state.guided; },
    getDdxPhase2:    function () { return _state.ddxPhase2; },
    getDdxPhase5:    function () { return _state.ddxPhase5; },
    getExamDone:     function () { return _state.examDone; },

    advanceTo: function (phaseId) {
      if (!_isPhaseUnlocked(phaseId)) return false;
      _state.currentPhase = phaseId;
      _save();
      if (window.render) render();
      return true;
    },

    completeCurrentPhase: function (data) {
      var phase = PHASES[_state.currentPhase - 1];
      if (!phase) return;
      // Snapshot DDx at phase 2 and 5
      if (phase.key === 'ddx-init' && data && data.ddx) {
        _state.ddxPhase2 = data.ddx.slice();
      }
      if (phase.key === 'ddx-refine' && data && data.ddx) {
        _state.ddxPhase5 = data.ddx.slice();
      }
      if (phase.key === 'exam' && data && data.examDone) {
        _state.examDone = data.examDone.slice();
      }
      _completePhase(phase.key);
      // Auto-advance to next enabled phase
      var nextId = _state.currentPhase + 1;
      while (nextId <= PHASES.length && !_isPhaseEnabled(nextId)) nextId++;
      if (nextId <= PHASES.length) {
        _state.currentPhase = nextId;
      }
      _save();
      if (window.render) render();
    },

    markCoachComplete: function (phaseId) {
      var phase = PHASES[(phaseId || _state.currentPhase) - 1];
      if (phase) _markCoachDone(phase.key);
      if (window.render) render();
    },

    // ── Phase stepper sidebar ─────────────────────────────────
    renderStepper: function () {
      var html = '<div style="padding:12px 0">';
      html += '<div style="font-size:9px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:1px;padding:0 16px;margin-bottom:8px">Guided Mode</div>';

      PHASES.forEach(function (p) {
        if (!_isPhaseEnabled(p.id)) return;
        var unlocked  = _isPhaseUnlocked(p.id);
        var completed = !!_state.completed[p.key];
        var current   = _state.currentPhase === p.id;
        var coachReq  = _getCoachMode(p.id) === 'required';
        var coachDone = !!_state.coachDone[p.key];
        var coachFlag = coachReq && !coachDone && completed;

        var bg    = current   ? 'rgba(40,116,166,.13)' : 'transparent';
        var color = completed ? '#1B7A3D' : current ? '#2874A6' : unlocked ? '#2d3748' : '#a0aec0';
        var fw    = current   ? '700' : '500';
        var icon  = completed ? '✅' : current ? p.icon : unlocked ? p.icon : '🔒';

        html += '<button type="button" ' +
          (unlocked ? 'onclick="GuidedMode.advanceTo(' + p.id + ')"' : 'disabled') +
          ' style="display:flex;align-items:center;gap:9px;width:100%;padding:7px 16px;border:none;background:' + bg + ';cursor:' + (unlocked ? 'pointer' : 'default') + ';text-align:left;font-family:inherit">';
        html += '<span style="font-size:14px;flex-shrink:0;width:18px;text-align:center">' + icon + '</span>';
        html += '<span style="font-size:12px;font-weight:' + fw + ';color:' + color + ';line-height:1.3">' + p.label + '</span>';
        if (coachFlag) html += '<span style="margin-left:auto;font-size:9px;background:#FDF6E3;color:#C49A1A;border-radius:3px;padding:1px 5px;font-weight:700;flex-shrink:0">COACH</span>';
        html += '</button>';
      });

      html += '</div>';
      return html;
    },

    // ── Main phase content renderer ───────────────────────────
    renderPhase: function () {
      var phase = PHASES[_state.currentPhase - 1];
      if (!phase) return '<div>Phase not found.</div>';

      var coachMode = _getCoachMode(phase.id);
      var coachDone = !!_state.coachDone[phase.key];
      var FF = 'font-family:\'DM Sans\',-apple-system,sans-serif;';

      var html = '<div style="' + FF + '">';

      // Phase header
      html += '<div style="display:flex;align-items:center;gap:12px;padding:20px 20px 0">';
      html += '<span style="font-size:28px">' + phase.icon + '</span>';
      html += '<div>';
      html += '<div style="font-size:11px;font-weight:700;color:#2874A6;text-transform:uppercase;letter-spacing:1px">Phase ' + phase.id + ' of ' + PHASES.length + '</div>';
      html += '<div style="font-size:20px;font-weight:700;color:#0f2d42">' + phase.label + '</div>';
      html += '<div style="font-size:13px;color:#718096;margin-top:2px">' + phase.desc + '</div>';
      html += '</div>';
      // Progress dots
      html += '<div style="margin-left:auto;display:flex;gap:4px;flex-wrap:wrap;max-width:120px;justify-content:flex-end">';
      PHASES.forEach(function (p) {
        if (!_isPhaseEnabled(p.id)) return;
        var done = !!_state.completed[p.key];
        var cur  = p.id === _state.currentPhase;
        html += '<div style="width:8px;height:8px;border-radius:50%;background:' +
          (done ? '#1B7A3D' : cur ? '#2874A6' : '#D0DCE8') + '"></div>';
      });
      html += '</div>';
      html += '</div>';

      html += '<div style="height:1px;background:#e2ecf4;margin:16px 0 0"></div>';

      // Phase body
      html += '<div style="padding:20px">';
      switch (phase.key) {
        case 'cc':        html += this._renderCC();       break;
        case 'ddx-init':  html += this._renderDdxInit();  break;
        case 'interview': html += this._renderInterview(); break;
        case 'exam':      html += this._renderExam();      break;
        case 'ddx-refine':html += this._renderDdxRefine(); break;
        case 'past-data': html += this._renderPastData();  break;
        case 'orders':    html += this._renderOrders();    break;
        case 'note':      html += this._renderNote();      break;
        default:          html += '<p>Phase content coming soon.</p>';
      }
      html += '</div>';

      // CoachDx bar
      if (coachMode !== 'hidden') {
        html += this._renderCoachBar(phase, coachMode, coachDone);
      }

      html += '</div>';
      return html;
    },

    // ── Phase 1: Chief Complaint ─────────────────────────────
    _renderCC: function () {
      var pt = window.PATIENT || {};
      var cc = (pt.chiefComplaint) || 'See chart';
      var setting = (window.S && S.clinicalSetting || 'ED').toUpperCase();
      var html = '';

      // Phase header with step count and time estimate
      html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px">';
      html += '<div style="display:flex;align-items:center;gap:8px">';
      html += '<span style="background:#2874A6;color:#fff;font-size:10px;font-weight:800;padding:3px 10px;border-radius:12px;text-transform:uppercase;letter-spacing:.06em">Phase 1 of 8</span>';
      html += '<span style="font-size:13px;font-weight:700;color:#1B4F72">Chief Complaint</span>';
      html += '</div>';
      html += '<span style="font-size:12px;color:#718096;background:#F7F9FC;border:1px solid #E2E8F0;padding:4px 10px;border-radius:8px">⏱ Estimated time: 30–45 min total</span>';
      html += '</div>';

      html += '<div style="background:#EBF5FB;border-radius:10px;padding:20px 24px;margin-bottom:20px;border-left:4px solid #2874A6">';
      html += '<div style="font-size:11px;font-weight:700;color:#2874A6;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Chief Complaint</div>';
      html += '<div style="font-size:22px;font-weight:700;color:#0f2d42;line-height:1.3;margin-bottom:8px">"' + cc + '"</div>';
      html += '<div style="font-size:13px;color:#4a5568">';
      html += '<strong>' + (pt.name || 'Patient') + '</strong>, ';
      html += (pt.age || '?') + 'yo ' + (pt.sex || '') + ' · ';
      html += 'Setting: <strong>' + setting + '</strong>';
      html += '</div>';
      html += '</div>';

      html += '<div style="background:#FFF8E1;border-radius:8px;padding:14px 16px;margin-bottom:20px;border:1px solid #FFE082">';
      html += '<div style="font-size:13px;color:#5D4037;line-height:1.6">';
      html += '<strong>🎯 Your task:</strong> Based only on this chief complaint and patient demographics, ';
      html += 'form your initial thinking. <em>No chart data is visible yet</em> — this mirrors real first contact. ';
      html += 'What are the most important diagnoses you must consider?</div>';
      html += '</div>';

      html += '<p style="font-size:13px;color:#4a5568;line-height:1.6">When you\'re ready, advance to Phase 2 to build your initial differential diagnosis.</p>';

      html += '<button type="button" onclick="GuidedMode.completeCurrentPhase({})" ' +
        'style="margin-top:16px;padding:11px 24px;background:#2874A6;color:#fff;border:none;border-radius:8px;' +
        'font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">Build Initial DDx →</button>';

      return html;
    },

    // ── Phase 2: Initial DDx ─────────────────────────────────
    _renderDdxInit: function () {
      var entries = (window.MissionControl && MissionControl.getDdxEntries) ? MissionControl.getDdxEntries() : [];
      var html = '';

      html += '<div style="background:#EBF5FB;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#1B4F72">';
      html += '📋 <strong>Build your differential</strong> based only on the chief complaint. ';
      html += 'No history, labs, or exam yet. This snapshot is saved and compared to your refined DDx in Phase 5.</div>';

      // Render DDx builder inline
      if (window.DdxBuilder) {
        html += DdxBuilder.renderTab();
      } else {
        html += this._renderSimpleDdx('ddx-init');
      }

      var canAdvance = entries.length >= 2;
      html += '<div style="margin-top:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap">';
      if (!canAdvance) {
        html += '<div style="font-size:12px;color:#718096;font-style:italic">Add at least 2 diagnoses to advance.</div>';
      }
      html += '<button type="button" ' +
        (canAdvance ? '' : 'disabled ') +
        'onclick="GuidedMode._submitDdxPhase2()" ' +
        'style="padding:10px 22px;background:' + (canAdvance ? '#2874A6' : '#CBD5E0') + ';color:#fff;border:none;border-radius:8px;' +
        'font-size:13px;font-weight:700;font-family:inherit;cursor:' + (canAdvance ? 'pointer' : 'default') + '">' +
        'Save DDx &amp; Interview Patient →</button>';
      html += '</div>';

      return html;
    },

    _submitDdxPhase2: function () {
      var entries = (window.MissionControl && MissionControl.getDdxEntries) ? MissionControl.getDdxEntries() : [];
      if (entries.length < 2) return;
      this.completeCurrentPhase({ ddx: entries.map(function (e) { return e.name || e; }) });
    },

    // ── Phase 3: Patient Interview ────────────────────────────
    _renderInterview: function () {
      var html = '';
      html += '<div style="background:#EBF5FB;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#1B4F72">';
      html += '💬 <strong>Interview the patient.</strong> Ask questions to build your history. ';
      html += 'The patient responds in character. CoachDx is available throughout if you want guidance.</div>';

      if (window.PatientInterview) {
        html += PatientInterview.render();
      } else {
        html += '<div style="padding:20px;background:#f8fafc;border-radius:8px;border:1px solid #e2ecf4;text-align:center">';
        html += '<div style="font-size:24px;margin-bottom:8px">💬</div>';
        html += '<div style="font-size:14px;color:#4a5568">Patient interview loading...</div>';
        html += '</div>';
      }

      html += '<div style="margin-top:20px;padding-top:16px;border-top:1px solid #e2ecf4">';
      html += '<button type="button" onclick="GuidedMode.completeCurrentPhase({})" ' +
        'style="padding:10px 22px;background:#2874A6;color:#fff;border:none;border-radius:8px;' +
        'font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">History Complete — Proceed to Exam →</button>';
      html += '<div style="font-size:11px;color:#a0aec0;margin-top:6px">You can return to the interview at any time via the stepper.</div>';
      html += '</div>';

      return html;
    },

    // ── Phase 4: Physical Exam ────────────────────────────────
    _renderExam: function () {
      var html = '';
      html += '<div style="background:#EBF5FB;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#1B4F72">';
      html += '🔍 <strong>Select examination maneuvers.</strong> Choose what to examine based on your current differential. ';
      html += 'Results reflect the case findings. Be deliberate — your choices are tracked.</div>';

      if (window.ExamBuilder) {
        html += ExamBuilder.render();
      } else {
        html += '<div style="padding:20px;background:#f8fafc;border-radius:8px;border:1px solid #e2ecf4;text-align:center">';
        html += '<div style="font-size:24px;margin-bottom:8px">🔍</div>';
        html += '<div style="font-size:14px;color:#4a5568">Exam builder loading...</div>';
        html += '</div>';
      }

      var examCount = _state.examDone.length;
      html += '<div style="margin-top:20px;padding-top:16px;border-top:1px solid #e2ecf4;display:flex;align-items:center;gap:12px;flex-wrap:wrap">';
      if (examCount < 2) {
        html += '<div style="font-size:12px;color:#718096;font-style:italic">Perform at least 2 exam maneuvers to advance.</div>';
      }
      html += '<button type="button" ' +
        (examCount >= 2 ? '' : 'disabled ') +
        'onclick="GuidedMode.completeCurrentPhase({examDone: GuidedMode.getExamDone()})" ' +
        'style="padding:10px 22px;background:' + (examCount >= 2 ? '#2874A6' : '#CBD5E0') + ';color:#fff;border:none;border-radius:8px;' +
        'font-size:13px;font-weight:700;font-family:inherit;cursor:' + (examCount >= 2 ? 'pointer' : 'default') + '">' +
        'Exam Complete — Refine DDx →</button>';
      html += '</div>';

      return html;
    },

    // ── Phase 5: Refined DDx ─────────────────────────────────
    _renderDdxRefine: function () {
      var phase2 = _state.ddxPhase2;
      var html = '';

      // Show phase 2 DDx as reference
      if (phase2.length > 0) {
        html += '<div style="background:#f8fafc;border:1px solid #e2ecf4;border-radius:8px;padding:14px 16px;margin-bottom:16px">';
        html += '<div style="font-size:11px;font-weight:700;color:#718096;text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px">Your Phase 2 DDx (CC only)</div>';
        phase2.forEach(function (dx, i) {
          html += '<div style="font-size:13px;color:#4a5568;padding:3px 0">' +
            '<span style="color:#2874A6;font-weight:600;margin-right:6px">' + (i + 1) + '.</span>' + dx + '</div>';
        });
        html += '</div>';
      }

      html += '<div style="background:#EBF5FB;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#1B4F72">';
      html += '🔄 <strong>Now revise your differential</strong> based on everything you\'ve learned from the history and physical exam. ';
      html += 'Your updated DDx will be compared to Phase 2 for cognitive bias analysis.</div>';

      if (window.DdxBuilder) {
        html += DdxBuilder.renderTab();
      } else {
        html += this._renderSimpleDdx('ddx-refine');
      }

      var entries = (window.MissionControl && MissionControl.getDdxEntries) ? MissionControl.getDdxEntries() : [];
      var canAdvance = entries.length >= 2;
      var coachRequired = _getCoachMode(5) === 'required';
      var coachDone = !!_state.coachDone['ddx-refine'];
      var btnBlocked = !canAdvance || (coachRequired && !coachDone);

      html += '<div style="margin-top:16px;display:flex;flex-direction:column;gap:8px">';
      if (coachRequired && !coachDone) {
        html += '<div style="background:#FDF6E3;border:1px solid #FFE082;border-radius:8px;padding:10px 14px;font-size:12px;color:#92400E">';
        html += '🧠 <strong>Required:</strong> Present your revised DDx to your CoachDx attending before advancing. ';
        html += 'Use the coaching panel below.</div>';
      }
      html += '<button type="button" ' +
        (btnBlocked ? 'disabled ' : '') +
        'onclick="GuidedMode._submitDdxPhase5()" ' +
        'style="align-self:flex-start;padding:10px 22px;background:' + (!btnBlocked ? '#2874A6' : '#CBD5E0') + ';color:#fff;border:none;border-radius:8px;' +
        'font-size:13px;font-weight:700;font-family:inherit;cursor:' + (!btnBlocked ? 'pointer' : 'default') + '">' +
        'Save Refined DDx — Review Past Data →</button>';
      html += '</div>';

      return html;
    },

    _submitDdxPhase5: function () {
      var entries = (window.MissionControl && MissionControl.getDdxEntries) ? MissionControl.getDdxEntries() : [];
      if (entries.length < 2) return;
      var coachRequired = _getCoachMode(5) === 'required';
      if (coachRequired && !_state.coachDone['ddx-refine']) return;
      this.completeCurrentPhase({ ddx: entries.map(function (e) { return e.name || e; }) });
    },

    // ── Phase 6: Past Data Review ────────────────────────────
    _renderPastData: function () {
      var html = '';
      html += '<div style="background:#EBF5FB;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#1B4F72">';
      html += '📂 <strong>Review past chart data.</strong> Labs, imaging, visit history, medications, and problem list are now available. ';
      html += 'Interpret this data in the context of your refined differential.</div>';

      html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px">';
      var tabs = [
        { key:'labs',    icon:'🧪', label:'Labs',         fn:'labs'          },
        { key:'imaging', icon:'🫁', label:'Imaging',      fn:'imaging'       },
        { key:'visits',  icon:'📝', label:'Visit History',fn:'visits'        },
        { key:'problems',icon:'📋', label:'Problem List', fn:'problems'      },
        { key:'meds',    icon:'💊', label:'Medications',  fn:'medications'   },
        { key:'history', icon:'📂', label:'Past History', fn:'history'       }
      ];
      tabs.forEach(function (t) {
        html += '<button type="button" onclick="if(window.switchTab)switchTab(\'' + t.fn + '\')" ' +
          'style="display:flex;align-items:center;gap:8px;padding:10px 14px;background:#fff;border:1px solid #d0dce8;border-radius:8px;cursor:pointer;font-family:inherit;text-align:left">';
        html += '<span style="font-size:18px">' + t.icon + '</span>';
        html += '<span style="font-size:13px;font-weight:600;color:#2874A6">' + t.label + '</span>';
        html += '</button>';
      });
      html += '</div>';

      html += '<p style="font-size:13px;color:#4a5568;line-height:1.6">Use the chart tabs above or in the sidebar to review past data. When you\'re ready to order new diagnostics, advance to Phase 7.</p>';

      html += '<button type="button" onclick="GuidedMode.completeCurrentPhase({})" ' +
        'style="margin-top:12px;padding:10px 22px;background:#2874A6;color:#fff;border:none;border-radius:8px;' +
        'font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">Past Data Reviewed — Place New Orders →</button>';

      return html;
    },

    // ── Phase 7: New Orders ──────────────────────────────────
    _renderOrders: function () {
      var html = '';
      html += '<div style="background:#EBF5FB;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#1B4F72">';
      html += '📤 <strong>Place new diagnostic orders.</strong> Order labs, imaging, and consults. ';
      html += 'Ask yourself: which result would most change your management? Your order rationale is tracked.</div>';

      html += '<button type="button" onclick="if(window.switchTab)switchTab(\'orders\')" ' +
        'style="display:block;width:100%;padding:14px;background:#fff;border:2px solid #2874A6;border-radius:8px;' +
        'font-size:14px;font-weight:700;color:#2874A6;cursor:pointer;font-family:inherit;margin-bottom:16px">' +
        '📤 Open Order Entry →</button>';

      html += '<p style="font-size:13px;color:#4a5568;line-height:1.6">After reviewing your order results, advance to Phase 8 to write your clinical note and receive AI feedback.</p>';

      html += '<button type="button" onclick="GuidedMode.completeCurrentPhase({})" ' +
        'style="margin-top:12px;padding:10px 22px;background:#2874A6;color:#fff;border:none;border-radius:8px;' +
        'font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">Orders Done — Write Note →</button>';

      return html;
    },

    // ── Phase 8: Note + Feedback ─────────────────────────────
    _renderNote: function () {
      var p2 = _state.ddxPhase2;
      var p5 = _state.ddxPhase5;
      var html = '';

      // ── Case Debrief Header ────────────────────────────────
      html += '<div style="background:linear-gradient(135deg,#1B4F72,#0D7A67);border-radius:12px;padding:20px 24px;margin-bottom:20px;color:#fff">';
      html += '<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;opacity:.7;margin-bottom:6px">Case Complete — Phase 8 of 8</div>';
      html += '<div style="font-size:18px;font-weight:800;margin-bottom:4px">Case Debrief</div>';
      html += '<div style="font-size:13px;opacity:.8">Review your reasoning journey before writing your final note.</div>';
      html += '</div>';

      // ── Phase completion timeline ─────────────────────────
      var phaseSummary = [
        { key:'cc',         label:'Chief Complaint',   icon:'🩺' },
        { key:'ddx-init',   label:'Initial DDx',       icon:'📋' },
        { key:'interview',  label:'Patient Interview',  icon:'💬' },
        { key:'exam',       label:'Physical Exam',      icon:'🔍' },
        { key:'ddx-refine', label:'Refined DDx',        icon:'🔄' },
        { key:'past-data',  label:'Past Data',          icon:'📂' },
        { key:'orders',     label:'Orders',             icon:'📤' }
      ];
      html += '<div style="display:flex;gap:4px;margin-bottom:20px;flex-wrap:wrap">';
      phaseSummary.forEach(function(p) {
        var done = !!_state.completed[p.key];
        html += '<div style="flex:1;min-width:70px;text-align:center;padding:8px 4px;background:' +
          (done ? '#E8F5E9' : '#f8fafc') + ';border-radius:8px;border:1px solid ' +
          (done ? '#A5D6A7' : '#e2ecf4') + '">';
        html += '<div style="font-size:14px">' + p.icon + (done ? '✅' : '') + '</div>';
        html += '<div style="font-size:9px;color:' + (done ? '#1B7A3D' : '#94a3b8') + ';font-weight:700;margin-top:2px">' + p.label + '</div>';
        html += '</div>';
      });
      html += '</div>';

      // DDx comparison summary if available
      if (p2.length > 0 && p5.length > 0) {
        html += '<div style="background:#f8fafc;border:1px solid #e2ecf4;border-radius:10px;padding:16px;margin-bottom:16px">';
        html += '<div style="font-size:11px;font-weight:700;color:#718096;text-transform:uppercase;letter-spacing:.8px;margin-bottom:12px">Your DDx Journey</div>';
        html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">';

        html += '<div>';
        html += '<div style="font-size:11px;font-weight:700;color:#2874A6;margin-bottom:6px">Phase 2 — Initial (CC only)</div>';
        p2.forEach(function (dx, i) {
          html += '<div style="font-size:12px;color:#4a5568;padding:2px 0">' + (i+1) + '. ' + dx + '</div>';
        });
        html += '</div>';

        html += '<div>';
        html += '<div style="font-size:11px;font-weight:700;color:#0D7A67;margin-bottom:6px">Phase 5 — Refined (post H&amp;P)</div>';
        p5.forEach(function (dx, i) {
          html += '<div style="font-size:12px;color:#4a5568;padding:2px 0">' + (i+1) + '. ' + dx + '</div>';
        });
        html += '</div>';
        html += '</div>';

        // Anchoring flag
        var p2str = JSON.stringify(p2.slice().sort());
        var p5str = JSON.stringify(p5.slice().sort());
        if (p2str === p5str) {
          html += '<div style="margin-top:10px;padding:8px 12px;background:#FDF6E3;border-radius:6px;font-size:12px;color:#92400E">';
          html += '⚠️ <strong>Anchoring signal:</strong> Your differential didn\'t change between Phases 2 and 5. Discuss with CoachDx.';
          html += '</div>';
        }
        html += '</div>';
      }

      // ── Bias detection teaching moment ────────────────────
      var totalExamDone = _state.examDone ? _state.examDone.length : 0;
      var hadCoachDx = _state.coachDone && Object.keys(_state.coachDone).length > 0;
      if (totalExamDone === 0 || !hadCoachDx) {
        html += '<div style="background:#FDF6E3;border:1px solid #F59E0B;border-radius:8px;padding:12px 14px;margin-bottom:16px;font-size:12px;color:#92400E">';
        if (totalExamDone === 0) {
          html += '<strong>⚠️ Physical exam skipped</strong> — Your note will have limited examination findings. This may affect your feedback score.';
        }
        if (!hadCoachDx) {
          html += (totalExamDone === 0 ? '<br>' : '') + '<strong>💡 Tip:</strong> CoachDx coaching wasn't used this session. Try it on your next case for deeper reasoning feedback.';
        }
        html += '</div>';
      }

      html += '<div style="background:#EBF5FB;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#1B4F72">';
      html += '🎯 <strong>Write your clinical note and receive AI feedback.</strong> ';
      html += 'Your note quality directly affects feedback depth. Include your assessment and plan with clear clinical reasoning.</div>';

      html += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">';
      html += '<button type="button" onclick="if(window.switchTab)switchTab(\'documentation\')" ' +
        'style="flex:1;padding:12px;background:#fff;border:2px solid #2874A6;border-radius:8px;font-size:13px;font-weight:700;color:#2874A6;cursor:pointer;font-family:inherit">' +
        '✏️ Write Your Note</button>';
      html += '<button type="button" onclick="if(window.switchTab)switchTab(\'grading\')" ' +
        'style="flex:1;padding:12px;background:#2874A6;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit">' +
        '🎯 Get AI Feedback</button>';
      html += '</div>';

      return html;
    },

    // ── Simple DDx fallback (if DdxBuilder not loaded) ───────
    _renderSimpleDdx: function (phase) {
      var storageKey = 'rdx-simple-ddx-' + phase;
      var existing = [];
      try { existing = JSON.parse(sessionStorage.getItem(storageKey)) || []; } catch (e) {}
      var html = '<div id="rdx-simple-ddx-' + phase + '">';
      html += '<div style="margin-bottom:10px;font-size:13px;color:#4a5568">Enter diagnoses (one per line):</div>';
      html += '<textarea id="simple-ddx-input" placeholder="e.g. STEMI\nAortic dissection\nPulmonary embolism" ' +
        'style="width:100%;min-height:120px;padding:10px;border:1px solid #d0dce8;border-radius:6px;font-family:inherit;font-size:13px;box-sizing:border-box" ' +
        'oninput="GuidedMode._syncSimpleDdx(\'' + phase + '\')">' + existing.join('\n') + '</textarea>';
      html += '</div>';
      return html;
    },

    _syncSimpleDdx: function (phase) {
      var ta = document.getElementById('simple-ddx-input');
      if (!ta) return;
      var lines = ta.value.split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
      try { sessionStorage.setItem('rdx-simple-ddx-' + phase, JSON.stringify(lines)); } catch (e) {}
      if (window.MissionControl && MissionControl.setDdxEntries) {
        MissionControl.setDdxEntries(lines.map(function (l) { return { name: l, category: 'likely' }; }));
      }
    },

    // ── CoachDx bar ──────────────────────────────────────────
    _renderCoachBar: function (phase, coachMode, coachDone) {
      var FF = 'font-family:\'DM Sans\',-apple-system,sans-serif;';
      var isRequired = coachMode === 'required';
      var bgColor = isRequired ? (coachDone ? '#E8F5E9' : '#FDF6E3') : '#f8fafc';
      var borderColor = isRequired ? (coachDone ? '#1B7A3D' : '#C49A1A') : '#e2ecf4';

      var html = '<div style="margin:0 20px 20px;padding:14px 16px;background:' + bgColor + ';border:1px solid ' + borderColor + ';border-radius:10px;' + FF + '">';
      html += '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">';
      html += '<div>';
      html += '<div style="font-size:12px;font-weight:700;color:' + (isRequired ? (coachDone ? '#1B7A3D' : '#92400E') : '#2874A6') + '">';
      html += '🧠 CoachDx Attending';
      if (isRequired) html += ' <span style="font-size:10px;background:' + (coachDone ? '#1B7A3D' : '#C49A1A') + ';color:#fff;padding:1px 6px;border-radius:3px;margin-left:4px">' + (coachDone ? 'DONE' : 'REQUIRED') + '</span>';
      html += '</div>';
      html += '<div style="font-size:11px;color:#718096;margin-top:2px">';
      if (isRequired && !coachDone) {
        // Show exchange progress toward 3
        var _coachMsgs = (window.S && S.coachMessages) ? S.coachMessages.filter(function(m){return m.role==='user';}).length : 0;
        var _needed = Math.max(0, 3 - _coachMsgs);
        if (_coachMsgs === 0) html += 'Discuss your reasoning before advancing (3 exchanges required).';
        else if (_needed > 0) html += '✓ ' + _coachMsgs + '/3 exchanges — ' + _needed + ' more to unlock next phase.';
        else html += '✓ 3 exchanges done — marking complete...';
      } else if (coachDone) html += '✅ Coaching complete for this phase.';
      else html += 'Optional — discuss your reasoning with your AI attending.';
      html += '</div>';
      html += '</div>';
      html += '<button type="button" onclick="GuidedMode._openCoach(' + phase.id + ')" ' +
        'style="padding:8px 16px;background:' + (isRequired && !coachDone ? '#C49A1A' : '#2874A6') + ';color:#fff;border:none;border-radius:7px;font-size:12px;font-weight:700;' + FF + 'cursor:pointer;white-space:nowrap">' +
        (coachDone ? '🧠 Talk Again' : '🧠 Talk to Attending') + '</button>';
      html += '</div>';
      html += '</div>';
      return html;
    },

    _openCoach: function (phaseId) {
      // Set a context flag that CoachDx picks up for phase-aware prompting
      try { sessionStorage.setItem('rdx-coach-phase', String(phaseId)); } catch (e) {}
      if (window.switchTab) switchTab('coach');
      if (window.render) render();
    },

    // ── Entry point: called from renderApp after case loads ──
    tryInit: function () {
      // Allow force-init via URL ?mode=guided even if case has no guided block
      var forced = window.GuidedMode && GuidedMode._forceMode;
      if (!forced && (!window.EMR_DATA || !window.EMR_DATA.guided || !window.EMR_DATA.guided.supported)) return false;
      var caseId = (window.S && S.caseId) || (window.CASE_ID) || '';
      var initialized = this.init(caseId, null);
      if (initialized) {
        console.log('[GuidedMode] Active — Phase', _state.currentPhase);
      }
      return initialized;
    }
  };

})();
