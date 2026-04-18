/**
 * rdx-workspace.js — ReasonDx Workspace Configurator v2
 *
 * Three components:
 *  1. First-run setup wizard (shown once on first login)
 *  2. Gear panel — floating configurator, accessible from any page
 *  3. EMR tab filter — filters/pins tabs based on saved prefs
 *
 * Prefs stored in localStorage under 'rdx-workspace-prefs'
 * Public API: window.RDX_WORKSPACE.{load, save, applyToEMR, isTabEnabled, openPanel}
 */
(function () {
  'use strict';

  // ─── DEFAULT PREFS ────────────────────────────────────────────────────────
  var DEFAULTS = {
    setupDone: false,
    role: 'student',
    experienceLevel: 'beginner',

    showReasonDx:    true,
    showCoachDx:     true,
    showMechanismDx: true,
    showDashboard:   true,
    showStudyTools:  true,
    showSimulations: true,
    showFellowship:  false,
    showAnalytics:   false,

    emrTabs: {
      demographics:  true,  problems:      true,  visits:        false,
      medications:   true,  allergies:     true,  labs:          true,
      imaging:       true,  vitals:        true,  immunizations: false,
      history:       false, documentation: true,  coach:         true,
      studyhub:      true,  feedback:      true,  crt:           true,
      oral:          false, orders:        false, autofeedback:  false,
    },
    pinnedTabs: ['demographics','labs','medications'],
  };

  var PRESETS = {
    beginner: {
      experienceLevel: 'beginner',
      showMechanismDx:false, showDashboard:false, showStudyTools:false,
      showSimulations:false, showFellowship:false, showAnalytics:false,
      emrTabs:{demographics:true,problems:true,visits:false,medications:true,
        allergies:true,labs:true,imaging:false,vitals:true,immunizations:false,
        history:false,documentation:true,coach:true,studyhub:false,feedback:true,
        crt:false,oral:false,orders:false,autofeedback:false},
      pinnedTabs:['demographics','labs','medications'],
    },
    intermediate: {
      experienceLevel: 'intermediate',
      showMechanismDx:true, showDashboard:true, showStudyTools:true,
      showSimulations:true, showFellowship:false, showAnalytics:false,
      emrTabs:{demographics:true,problems:true,visits:true,medications:true,
        allergies:true,labs:true,imaging:true,vitals:true,immunizations:false,
        history:false,documentation:true,coach:true,studyhub:true,feedback:true,
        crt:true,oral:false,orders:false,autofeedback:false},
      pinnedTabs:['demographics','labs','medications','imaging'],
    },
    veteran: {
      experienceLevel: 'veteran',
      showMechanismDx:true, showDashboard:true, showStudyTools:true,
      showSimulations:true, showFellowship:true, showAnalytics:true,
      emrTabs:{demographics:true,problems:true,visits:true,medications:true,
        allergies:true,labs:true,imaging:true,vitals:true,immunizations:true,
        history:true,documentation:true,coach:true,studyhub:true,feedback:true,
        crt:true,oral:true,orders:true,autofeedback:true},
      pinnedTabs:['demographics','labs','medications','imaging','vitals'],
    },
  };

  // ─── STORAGE ──────────────────────────────────────────────────────────────
  var STORE_KEY = 'rdx-workspace-prefs';

  function getUserKey() {
    try { var u = window.S && S.currentUser && S.currentUser.username; if (u) return STORE_KEY + '-' + u; } catch(e){}
    return STORE_KEY;
  }

  function load() {
    try {
      var raw = localStorage.getItem(getUserKey()) || localStorage.getItem(STORE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULTS));
      var saved = JSON.parse(raw);
      var merged = JSON.parse(JSON.stringify(DEFAULTS));
      Object.keys(saved).forEach(function(k) {
        if (k === 'emrTabs' && saved[k] && typeof saved[k] === 'object') {
          Object.assign(merged.emrTabs, saved[k]);
        } else { merged[k] = saved[k]; }
      });
      return merged;
    } catch(e) { return JSON.parse(JSON.stringify(DEFAULTS)); }
  }

  function save(p) {
    try { localStorage.setItem(getUserKey(), JSON.stringify(p)); localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch(e) {}
    localStorage.setItem('rdx-exp-level', p.experienceLevel);
    window.RDX_EXP_LEVEL = p.experienceLevel;
    if (window.rdxApplyExp) window.rdxApplyExp();
  }

  function applyPreset(prefs, level) {
    var p = PRESETS[level] || PRESETS.intermediate;
    Object.keys(p).forEach(function(k) {
      if (k === 'emrTabs') prefs.emrTabs = JSON.parse(JSON.stringify(p.emrTabs));
      else if (k === 'pinnedTabs') prefs.pinnedTabs = p.pinnedTabs.slice();
      else prefs[k] = p[k];
    });
    return prefs;
  }

  // ─── EMR TAB FILTER (called by virtual-emr.html) ──────────────────────────
  function applyToEMR(tabs, primaryTabIds) {
    var prefs = load();
    var enabled = prefs.emrTabs;
    var pinned  = prefs.pinnedTabs;

    var filtered = tabs.filter(function(t) {
      if (t.divider) return true;
      if (t.id === 'demographics') return true;
      if (t.id === 'admin' || t.id === 'grading') return true;
      return enabled[t.id] !== false;
    });

    var effectivePrimary = filtered
      .filter(function(t) { return !t.divider && pinned.indexOf(t.id) >= 0; })
      .map(function(t) { return t.id; });

    if (effectivePrimary.indexOf('demographics') < 0) effectivePrimary.unshift('demographics');
    return { tabs: filtered, primaryTabIds: effectivePrimary };
  }

  function isTabEnabled(tabId) {
    if (tabId === 'demographics') return true;
    return load().emrTabs[tabId] !== false;
  }

  // ─── CSS ──────────────────────────────────────────────────────────────────
  function injectCSS() {
    if (document.getElementById('rdx-ws-css')) return;
    var s = document.createElement('style');
    s.id = 'rdx-ws-css';
    s.textContent = [
      /* Gear button */
      '#rdx-ws-gear{position:fixed;bottom:24px;right:24px;width:44px;height:44px;border-radius:50%;background:#1B5272;color:#fff;border:none;font-size:18px;cursor:pointer;z-index:9000;box-shadow:0 4px 20px rgba(0,0,0,.25);transition:all .2s;display:flex;align-items:center;justify-content:center;}',
      '#rdx-ws-gear:hover{background:#2874A6;transform:scale(1.08) rotate(30deg)}',
      '#rdx-ws-gear.panel-open{transform:rotate(45deg);background:#DC2626}',
      '#rdx-ws-gear.panel-open:hover{transform:rotate(45deg) scale(1.08)}',
      /* Panel */
      '#rdx-ws-panel{position:fixed;right:0;top:0;bottom:0;width:380px;max-width:100vw;background:#fff;box-shadow:-4px 0 32px rgba(0,0,0,.15);z-index:8999;transform:translateX(110%);transition:transform .3s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column;overflow:hidden;}',
      '#rdx-ws-panel.open{transform:translateX(0)}',
      '#rdx-ws-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:8998;display:none;backdrop-filter:blur(2px);}',
      '#rdx-ws-backdrop.open{display:block}',
      /* Panel internals */
      '.ws-panel-head{padding:18px 20px 14px;background:linear-gradient(135deg,#1B5272,#2874A6);color:#fff;flex-shrink:0;position:relative;}',
      '.ws-panel-head h2{font-size:17px;font-weight:700;margin-bottom:2px;font-family:inherit}',
      '.ws-panel-head p{font-size:12px;opacity:.75;font-family:inherit}',
      '.ws-close{position:absolute;top:14px;right:16px;background:rgba(255,255,255,.2);border:none;border-radius:8px;width:30px;height:30px;font-size:16px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;transition:background .15s;}',
      '.ws-close:hover{background:rgba(255,255,255,.35)}',
      '.ws-body{flex:1;overflow-y:auto;padding:16px 20px}',
      '.ws-presets{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap}',
      '.ws-preset{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;border:2px solid #E2E8F0;background:#F8FAFC;color:#64748B;cursor:pointer;transition:all .15s;font-family:inherit;}',
      '.ws-preset:hover{border-color:#2874A6;color:#2874A6}',
      '.ws-preset.active{border-color:#2874A6;background:#EBF4FB;color:#2874A6}',
      '.ws-section{margin-bottom:20px}',
      '.ws-section-hd{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#94A3B8;margin-bottom:10px;display:flex;align-items:center;gap:8px;padding-bottom:6px;border-bottom:1px solid #F1F5F9;}',
      '.ws-section-hd::before{content:"";width:3px;height:12px;border-radius:2px;background:#2874A6;flex-shrink:0}',
      '.ws-row{display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid #F8FAFC;}',
      '.ws-row:last-child{border-bottom:none}',
      '.ws-row-info{flex:1;min-width:0}',
      '.ws-row-label{font-size:13px;font-weight:600;color:#1E293B;font-family:inherit}',
      '.ws-row-desc{font-size:11px;color:#94A3B8;margin-top:1px;line-height:1.4;font-family:inherit}',
      /* Toggle */
      '.ws-toggle{position:relative;width:36px;height:20px;flex-shrink:0;margin-left:12px}',
      '.ws-toggle input{opacity:0;width:0;height:0;position:absolute}',
      '.ws-toggle-track{position:absolute;inset:0;background:#CBD5E1;border-radius:10px;transition:background .2s;cursor:pointer;}',
      '.ws-toggle input:checked ~ .ws-toggle-track{background:#2874A6}',
      '.ws-toggle-thumb{position:absolute;top:2px;left:2px;width:16px;height:16px;background:#fff;border-radius:50%;transition:transform .2s;box-shadow:0 1px 4px rgba(0,0,0,.2);pointer-events:none;}',
      '.ws-toggle input:checked ~ .ws-toggle-track + .ws-toggle-thumb{transform:translateX(16px)}',
      /* Pins */
      '.ws-pin-grid{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}',
      '.ws-pin-chip{padding:5px 10px;border-radius:6px;font-size:11px;font-weight:600;border:1.5px solid #E2E8F0;background:#F8FAFC;color:#64748B;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:4px;font-family:inherit;}',
      '.ws-pin-chip:hover{border-color:#2874A6;color:#2874A6}',
      '.ws-pin-chip.pinned{border-color:#2874A6;background:#EBF4FB;color:#2874A6}',
      /* AI badges inside AI section */
      '.ws-ai-badge{display:inline-block;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;padding:2px 8px;border-radius:4px;margin-left:6px;background:#EBF4FB;color:#2874A6;vertical-align:middle}',
      /* Footer */
      '.ws-footer{padding:14px 20px;border-top:1px solid #E2E8F0;display:flex;gap:10px;flex-shrink:0;background:#F8FAFC;align-items:center;}',
      '.ws-save{flex:1;padding:10px;background:#2874A6;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:background .15s;}',
      '.ws-save:hover{background:#1B5272}',
      '.ws-reset{padding:10px 14px;background:#fff;color:#64748B;border:1px solid #E2E8F0;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .15s;}',
      '.ws-reset:hover{border-color:#DC2626;color:#DC2626}',
      '.ws-saved-badge{font-size:11px;color:#0E9F6E;font-weight:600;display:flex;align-items:center;gap:4px;opacity:0;transition:opacity .3s;white-space:nowrap;}',
      '.ws-saved-badge.show{opacity:1}',
      /* Wizard */
      '#rdx-ws-wizard{position:fixed;inset:0;background:rgba(15,23,42,.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(6px);}',
      '.wiz-card{background:#fff;border-radius:20px;width:100%;max-width:540px;box-shadow:0 24px 80px rgba(0,0,0,.3);animation:wizIn .4s cubic-bezier(.34,1.56,.64,1);overflow:hidden;}',
      '@keyframes wizIn{from{opacity:0;transform:scale(.9) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}',
      '.wiz-progress{height:3px;background:#E2E8F0}',
      '.wiz-bar{height:100%;background:#2874A6;transition:width .4s ease}',
      '.wiz-step{display:none;padding:32px 36px 28px}',
      '.wiz-step.active{display:block;animation:wsFadeUp .25s ease}',
      '@keyframes wsFadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}',
      '.wiz-icon{font-size:40px;margin-bottom:16px}',
      '.wiz-title{font-size:22px;font-weight:800;letter-spacing:-.4px;color:#0F172A;margin-bottom:6px;font-family:inherit}',
      '.wiz-sub{font-size:14px;color:#64748B;line-height:1.6;margin-bottom:24px;font-family:inherit}',
      '.wiz-options{display:grid;gap:10px;margin-bottom:24px}',
      '.wiz-opt{padding:14px 16px;border:2px solid #E2E8F0;border-radius:12px;background:#F8FAFC;cursor:pointer;text-align:left;font-family:inherit;transition:all .2s;display:flex;align-items:center;gap:12px;}',
      '.wiz-opt:hover{border-color:#2874A6;background:#EBF4FB}',
      '.wiz-opt.selected{border-color:#2874A6;background:#EBF4FB}',
      '.wiz-opt .opt-icon{font-size:22px;flex-shrink:0}',
      '.wiz-opt .opt-label{font-size:14px;font-weight:700;color:#0F172A;font-family:inherit}',
      '.wiz-opt .opt-desc{font-size:12px;color:#64748B;margin-top:2px;line-height:1.4;font-family:inherit}',
      '.wiz-levels{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:24px}',
      '.wiz-level{padding:16px 12px;border:2px solid #E2E8F0;border-radius:12px;background:#F8FAFC;cursor:pointer;text-align:center;font-family:inherit;transition:all .2s;}',
      '.wiz-level:hover,.wiz-level.selected{border-color:#2874A6;background:#EBF4FB}',
      '.wiz-level .lv-icon{font-size:24px;margin-bottom:6px}',
      '.wiz-level .lv-name{font-size:13px;font-weight:700;color:#0F172A;font-family:inherit}',
      '.wiz-level .lv-desc{font-size:11px;color:#94A3B8;margin-top:2px;line-height:1.3;font-family:inherit}',
      '.wiz-nav{display:flex;align-items:center;justify-content:space-between;gap:12px}',
      '.wiz-next{padding:11px 28px;background:#2874A6;color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;gap:8px;}',
      '.wiz-next:hover{background:#1B5272}',
      '.wiz-next:disabled{opacity:.4;cursor:not-allowed}',
      '.wiz-back{padding:11px 20px;background:#fff;color:#64748B;border:1px solid #E2E8F0;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .15s;}',
      '.wiz-back:hover{border-color:#94A3B8;color:#475569}',
      '.wiz-skip{font-size:12px;color:#94A3B8;background:none;border:none;cursor:pointer;font-family:inherit;text-decoration:underline}',
      '.wiz-summary{display:flex;flex-direction:column;gap:10px;margin-bottom:24px}',
      '.sum-row{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#F8FAFC;border-radius:10px;font-size:13px;font-family:inherit}',
      '.sum-check{width:20px;height:20px;border-radius:50%;background:#EBF4FB;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#2874A6;font-size:11px;font-weight:700}',
      '.sum-label{font-weight:600;color:#0F172A;font-family:inherit}',
      '.sum-value{margin-left:auto;font-size:12px;color:#64748B;background:#E2E8F0;padding:2px 10px;border-radius:20px;font-family:inherit}',
    ].join('\n');
    document.head.appendChild(s);
  }

  // ─── WIZARD ───────────────────────────────────────────────────────────────
  var wizState = { role:'', level:'', goal:'' };
  var ROLE_LABELS  = {student:'Medical Student',resident:'Resident',fellow:'Fellow / Advanced',educator:'Educator / Faculty'};
  var LEVEL_LABELS = {beginner:'New here (clean view)',intermediate:'Getting started',veteran:'Power user (all features)'};
  var GOAL_LABELS  = {reasoning:'Work cases (ReasonDx)',coaching:'CoachDx coaching',pathophys:'MechanismDx deep dives',boardprep:'Case review / Spaced Rep'};

  function buildWizardHTML() {
    return '<div class="wiz-card">' +
      '<div class="wiz-progress"><div class="wiz-bar" id="wizBar" style="width:25%"></div></div>' +
      /* Step 0: Role */
      '<div class="wiz-step active" id="wiz-0"><div class="wiz-icon">👋</div>' +
      '<h2 class="wiz-title">Welcome to ReasonDx</h2>' +
      '<p class="wiz-sub">Let\'s set up your workspace in 60 seconds. You can change anything later from the ⚙ gear icon.</p>' +
      '<div class="wiz-options">' +
        '<button class="wiz-opt" data-role="student" onclick="rdxWizPick(this,\'role\')"><span class="opt-icon">🎓</span><div><div class="opt-label">Medical Student</div><div class="opt-desc">MS1–MS4, building clinical foundations</div></div></button>' +
        '<button class="wiz-opt" data-role="resident" onclick="rdxWizPick(this,\'role\')"><span class="opt-icon">🩺</span><div><div class="opt-label">Resident</div><div class="opt-desc">PGY1–3, expanding clinical reasoning</div></div></button>' +
        '<button class="wiz-opt" data-role="fellow" onclick="rdxWizPick(this,\'role\')"><span class="opt-icon">🔬</span><div><div class="opt-label">Fellow / Advanced Learner</div><div class="opt-desc">Subspecialty training, advanced cases</div></div></button>' +
        '<button class="wiz-opt" data-role="educator" onclick="rdxWizPick(this,\'role\')"><span class="opt-icon">👨‍🏫</span><div><div class="opt-label">Educator / Faculty</div><div class="opt-desc">Teaching, case building, assessment</div></div></button>' +
      '</div>' +
      '<div class="wiz-nav"><button class="wiz-skip" onclick="rdxWizSkip()">Skip setup</button><button class="wiz-next" id="wizNext0" onclick="rdxWizStep(1)" disabled>Next →</button></div>' +
      '</div>' +
      /* Step 1: Level */
      '<div class="wiz-step" id="wiz-1"><div class="wiz-icon">🎚️</div>' +
      '<h2 class="wiz-title">How familiar are you with ReasonDx?</h2>' +
      '<p class="wiz-sub">This sets your default view. You can always add or hide features from the gear panel.</p>' +
      '<div class="wiz-levels">' +
        '<button class="wiz-level" data-level="beginner" onclick="rdxWizPick(this,\'level\')"><div class="lv-icon">🌱</div><div class="lv-name">New here</div><div class="lv-desc">Essentials only. Clean, simple.</div></button>' +
        '<button class="wiz-level" data-level="intermediate" onclick="rdxWizPick(this,\'level\')"><div class="lv-icon">⚡</div><div class="lv-name">Getting started</div><div class="lv-desc">Core features + study tools.</div></button>' +
        '<button class="wiz-level" data-level="veteran" onclick="rdxWizPick(this,\'level\')"><div class="lv-icon">🏆</div><div class="lv-name">Power user</div><div class="lv-desc">Everything unlocked.</div></button>' +
      '</div>' +
      '<div class="wiz-nav"><button class="wiz-back" onclick="rdxWizStep(0)">← Back</button><button class="wiz-next" id="wizNext1" onclick="rdxWizStep(2)" disabled>Next →</button></div>' +
      '</div>' +
      /* Step 2: Goal */
      '<div class="wiz-step" id="wiz-2"><div class="wiz-icon">🎯</div>' +
      '<h2 class="wiz-title">What do you mainly want to do?</h2>' +
      '<p class="wiz-sub">Sets which tools appear first. You can always access everything.</p>' +
      '<div class="wiz-options">' +
        '<button class="wiz-opt" data-goal="reasoning" onclick="rdxWizPick(this,\'goal\')"><span class="opt-icon">🔍</span><div><div class="opt-label">Work through clinical cases</div><div class="opt-desc">Diagnosis, differential, workup — ReasonDx</div></div></button>' +
        '<button class="wiz-opt" data-goal="coaching" onclick="rdxWizPick(this,\'goal\')"><span class="opt-icon">🧑‍🏫</span><div><div class="opt-label">Get coached on my reasoning</div><div class="opt-desc">Socratic feedback, gap analysis — CoachDx</div></div></button>' +
        '<button class="wiz-opt" data-goal="pathophys" onclick="rdxWizPick(this,\'goal\')"><span class="opt-icon">🧬</span><div><div class="opt-label">Understand mechanisms deeply</div><div class="opt-desc">Pathophysiology modules — MechanismDx</div></div></button>' +
        '<button class="wiz-opt" data-goal="boardprep" onclick="rdxWizPick(this,\'goal\')"><span class="opt-icon">📚</span><div><div class="opt-label">Case review / Spaced Rep</div><div class="opt-desc">Spaced repetition, CoachDx, clinical cases</div></div></button>' +
      '</div>' +
      '<div class="wiz-nav"><button class="wiz-back" onclick="rdxWizStep(1)">← Back</button><button class="wiz-next" id="wizNext2" onclick="rdxWizStep(3)" disabled>Next →</button></div>' +
      '</div>' +
      /* Step 3: Summary */
      '<div class="wiz-step" id="wiz-3"><div class="wiz-icon">✅</div>' +
      '<h2 class="wiz-title">You\'re all set!</h2>' +
      '<p class="wiz-sub">Your workspace is configured below. Adjust anything anytime from the ⚙ gear icon.</p>' +
      '<div class="wiz-summary" id="wizSummary"></div>' +
      '<div class="wiz-nav"><button class="wiz-back" onclick="rdxWizStep(2)">← Back</button><button class="wiz-next" onclick="rdxWizFinish()">Start learning →</button></div>' +
      '</div>' +
      '</div>';
  }

  window.rdxWizPick = function(btn, type) {
    var group = btn.parentElement;
    group.querySelectorAll('.wiz-opt,.wiz-level').forEach(function(b){ b.classList.remove('selected'); });
    btn.classList.add('selected');
    if (type==='role')  { wizState.role  = btn.dataset.role;  var n = document.getElementById('wizNext0'); if(n) n.disabled=false; }
    if (type==='level') { wizState.level = btn.dataset.level; var n = document.getElementById('wizNext1'); if(n) n.disabled=false; }
    if (type==='goal')  { wizState.goal  = btn.dataset.goal;  var n = document.getElementById('wizNext2'); if(n) n.disabled=false; }
  };

  window.rdxWizStep = function(n) {
    document.querySelectorAll('.wiz-step').forEach(function(s){ s.classList.remove('active'); });
    var t = document.getElementById('wiz-'+n);
    if (t) t.classList.add('active');
    var bar = document.getElementById('wizBar');
    if (bar) bar.style.width = ((n+1)/4*100)+'%';
    if (n===3) {
      var sum = document.getElementById('wizSummary');
      if (sum) sum.innerHTML = [
        {label:'Role',value:ROLE_LABELS[wizState.role]||wizState.role},
        {label:'Interface',value:LEVEL_LABELS[wizState.level]||wizState.level},
        {label:'Primary goal',value:GOAL_LABELS[wizState.goal]||wizState.goal},
      ].map(function(r){
        return '<div class="sum-row"><div class="sum-check">✓</div><span class="sum-label">'+r.label+'</span><span class="sum-value">'+(r.value||'—')+'</span></div>';
      }).join('');
    }
  };

  window.rdxWizFinish = function() {
    var prefs = load();
    prefs.role = wizState.role || 'student';
    applyPreset(prefs, wizState.level || 'beginner');
    prefs.setupDone = true;
    save(prefs);
    var wiz = document.getElementById('rdx-ws-wizard');
    if (wiz) { wiz.style.opacity='0'; wiz.style.transition='opacity .3s'; setTimeout(function(){ wiz.remove(); },300); }
    if (window.render) { try { window.render(); } catch(e){} }
  };

  window.rdxWizSkip = function() {
    var prefs = load(); prefs.setupDone = true; save(prefs);
    var wiz = document.getElementById('rdx-ws-wizard');
    if (wiz) wiz.remove();
  };

  // ─── GEAR PANEL ───────────────────────────────────────────────────────────
  var TAB_ROWS = [
    /* Chart */
    {group:'Chart Tabs',id:'demographics',label:'Demographics',desc:'Patient info, problems, chief complaint',required:true},
    {group:'Chart Tabs',id:'medications', label:'Medications',  desc:'Active medication list'},
    {group:'Chart Tabs',id:'allergies',   label:'Allergies',    desc:'Allergy & reaction list'},
    {group:'Chart Tabs',id:'labs',        label:'Labs',         desc:'Lab results and trends'},
    {group:'Chart Tabs',id:'imaging',     label:'Imaging',      desc:'Radiology reports'},
    {group:'Chart Tabs',id:'vitals',      label:'Vitals',       desc:'Vital sign trends'},
    {group:'Chart Tabs',id:'visits',      label:'Visit History',desc:'Prior encounters'},
    {group:'Chart Tabs',id:'history',     label:'FH / SH',      desc:'Family & social history'},
    {group:'Chart Tabs',id:'immunizations',label:'Immunizations',desc:'Vaccine history'},
    /* Actions */
    {group:'Actions & Documentation',id:'documentation',label:'Documentation',  desc:'Write H&P, SOAP, discharge notes'},
    {group:'Actions & Documentation',id:'crt',          label:'Clinical Reasoning Trainer',desc:'Structured reasoning steps + framework'},
    {group:'Actions & Documentation',id:'orders',       label:'Orders & CDS',   desc:'Order lab/imaging/meds + clinical decision support'},
    {group:'Actions & Documentation',id:'oral',         label:'Oral Presentation',desc:'Practice oral case presentation format'},
    {group:'Actions & Documentation',id:'autofeedback', label:'Doc Assessment', desc:'AI feedback on your written notes'},
    /* AI Tools */
    {group:'AI Coaching Tools',id:'coach',    label:'CoachDx',   desc:'Socratic coaching on your reasoning process'},
    {group:'AI Coaching Tools',id:'studyhub', label:'Study Hub', desc:'Spaced repetition + MCQs available during a case'},
    {group:'AI Coaching Tools',id:'feedback', label:'Feedback',  desc:'Faculty feedback submission tab'},
  ];

  var GLOBAL_ROWS = [
    {pref:'showMechanismDx', label:'MechanismDx',        desc:'Pathophysiology tutor — 560 topics (nav + EMR)'},
    {pref:'showDashboard',   label:'Dashboard',           desc:'Learning analytics, progress homepage'},
    {pref:'showStudyTools',  label:'Study Tools',         desc:'SpacedRep, CoachDx, clinical cases'},
    {pref:'showSimulations', label:'Simulations',         desc:'ED 3D, Night Float, SimRoomDx environments'},
    {pref:'showFellowship',  label:'Fellowship Tools',    desc:'ACGME milestones, CCC, ILP, cohort analytics'},
    {pref:'showAnalytics',   label:'Analytics Dashboard', desc:'Detailed performance analytics and cohort data'},
  ];

  var PINNABLE = [
    {id:'demographics',label:'Demographics'},{id:'problems',label:'Problems'},
    {id:'medications',label:'Medications'},{id:'allergies',label:'Allergies'},
    {id:'labs',label:'Labs'},{id:'imaging',label:'Imaging'},
    {id:'vitals',label:'Vitals'},{id:'documentation',label:'Docs'},
    {id:'coach',label:'CoachDx'},{id:'crt',label:'CRT'},
  ];

  function mkToggle(uid, dataId, checked, onChange, disabled) {
    var dis = disabled ? ' disabled' : '';
    return '<label class="ws-toggle">' +
      '<input type="checkbox" id="'+uid+'" data-id="'+dataId+'" '+(checked?'checked':'')+dis+' onchange="'+onChange+'(this)">' +
      '<div class="ws-toggle-track"></div><div class="ws-toggle-thumb"></div>' +
      '</label>';
  }

  function buildPanel() {
    var prefs = load();
    var panel = document.getElementById('rdx-ws-panel');
    if (!panel) return;

    // Preset pills
    var presetHtml = ['beginner','intermediate','veteran'].map(function(lvl){
      var names = {beginner:'🌱 New here',intermediate:'⚡ Getting started',veteran:'🏆 Power user'};
      return '<button class="ws-preset'+(prefs.experienceLevel===lvl?' active':'')+'" onclick="rdxWsPreset(\''+lvl+'\')">'+names[lvl]+'</button>';
    }).join('');

    // Global toggles
    var globalHtml = GLOBAL_ROWS.map(function(r){
      var checked = prefs[r.pref] !== false;
      var uid = 'wsg-'+r.pref;
      return '<div class="ws-row"><div class="ws-row-info"><div class="ws-row-label">'+r.label+'</div><div class="ws-row-desc">'+r.desc+'</div></div>'+mkToggle(uid, r.pref, checked, 'rdxWsToggleGlobal', false)+'</div>';
    }).join('');

    // Tab groups
    var groups = {};
    TAB_ROWS.forEach(function(r){ (groups[r.group] = groups[r.group]||[]).push(r); });
    var groupOrder = ['Chart Tabs','Actions & Documentation','AI Coaching Tools'];
    var tabGroupsHtml = groupOrder.map(function(gname){
      var rows = groups[gname] || [];
      var rowsHtml = rows.map(function(r){
        var checked = prefs.emrTabs[r.id] !== false;
        var uid = 'wst-'+r.id;
        var reqNote = r.required ? ' <em style="color:#0E9F6E;font-size:10px;font-weight:600">(always on)</em>' : '';
        return '<div class="ws-row"><div class="ws-row-info"><div class="ws-row-label">'+r.label+reqNote+'</div><div class="ws-row-desc">'+r.desc+'</div></div>'+mkToggle(uid, r.id, checked, 'rdxWsToggleTab', !!r.required)+'</div>';
      }).join('');
      return '<div class="ws-section"><div class="ws-section-hd">'+gname+'</div>'+rowsHtml+'</div>';
    }).join('');

    // Pinned chips
    var pinsHtml = PINNABLE.map(function(t){
      var isPinned = prefs.pinnedTabs.indexOf(t.id) >= 0;
      return '<button class="ws-pin-chip'+(isPinned?' pinned':'')+'" data-tab="'+t.id+'" onclick="rdxWsTogglePin(this)">'+(isPinned?'📌 ':'')+t.label+'</button>';
    }).join('');

    panel.innerHTML =
      '<div class="ws-panel-head"><button class="ws-close" onclick="rdxWsClose()">×</button>' +
        '<h2>⚙ Workspace Settings</h2><p>Changes apply to your interface immediately</p></div>' +
      '<div class="ws-body">' +
        '<div class="ws-section"><div class="ws-section-hd">Quick presets</div>' +
          '<div class="ws-presets">'+presetHtml+'</div>' +
          '<p style="font-size:11px;color:#94A3B8;margin-top:-8px;margin-bottom:8px">Presets are a starting point — customize individual features below</p>' +
        '</div>' +
        '<div class="ws-section"><div class="ws-section-hd">Platform-wide features</div>'+globalHtml+'</div>' +
        tabGroupsHtml +
        '<div class="ws-section"><div class="ws-section-hd">📌 Pinned sidebar tabs <span style="font-size:10px;font-weight:400;color:#CBD5E1;margin-left:4px">Always visible — never hidden in overflow</span></div>' +
          '<div class="ws-pin-grid">'+pinsHtml+'</div>' +
          '<p style="font-size:11px;color:#94A3B8;margin-top:8px">Unpinned tabs move to the ••• overflow menu</p>' +
        '</div>' +
      '</div>' +
      '<div class="ws-footer">' +
        '<button class="ws-reset" onclick="rdxWsReset()">Reset</button>' +
        '<span class="ws-saved-badge" id="wsSavedBadge">✓ Saved</span>' +
        '<button class="ws-save" onclick="rdxWsSave()">Apply & Close</button>' +
      '</div>';
  }

  function flashSaved() {
    var b = document.getElementById('wsSavedBadge');
    if (b) { b.classList.add('show'); setTimeout(function(){ b.classList.remove('show'); }, 2200); }
  }

  window.rdxWsOpen = function() {
    buildPanel();
    document.getElementById('rdx-ws-panel').classList.add('open');
    document.getElementById('rdx-ws-backdrop').classList.add('open');
    document.getElementById('rdx-ws-gear').classList.add('panel-open');
  };

  window.rdxWsClose = function() {
    var p = document.getElementById('rdx-ws-panel');
    var b = document.getElementById('rdx-ws-backdrop');
    var g = document.getElementById('rdx-ws-gear');
    if (p) p.classList.remove('open');
    if (b) b.classList.remove('open');
    if (g) g.classList.remove('panel-open');
  };

  window.rdxWsPreset = function(level) {
    var prefs = load();
    applyPreset(prefs, level);
    save(prefs);
    buildPanel();
    flashSaved();
    if (window.render) { try { window.render(); } catch(e){} }
  };

  window.rdxWsToggleGlobal = function(cb) {
    var prefs = load();
    prefs[cb.dataset.id] = cb.checked;
    save(prefs);
  };

  window.rdxWsToggleTab = function(cb) {
    var prefs = load();
    var tabId = cb.dataset.id;
    prefs.emrTabs[tabId] = cb.checked;
    if (!cb.checked) {
      prefs.pinnedTabs = prefs.pinnedTabs.filter(function(p){ return p !== tabId; });
    }
    save(prefs);
  };

  window.rdxWsTogglePin = function(btn) {
    var prefs = load();
    var id = btn.dataset.tab;
    var idx = prefs.pinnedTabs.indexOf(id);
    if (idx >= 0) { prefs.pinnedTabs.splice(idx,1); btn.classList.remove('pinned'); btn.textContent = btn.textContent.replace('📌 ',''); }
    else { prefs.pinnedTabs.push(id); btn.classList.add('pinned'); btn.innerHTML = '📌 '+btn.textContent.trim(); }
    save(prefs);
  };

  window.rdxWsSave = function() {
    var prefs = load(); save(prefs); flashSaved();
    if (window.render) { try { window.render(); } catch(e){} }
    setTimeout(rdxWsClose, 900);
  };

  window.rdxWsReset = function() {
    if (!confirm('Reset all workspace settings to defaults?')) return;
    localStorage.removeItem(STORE_KEY);
    buildPanel(); flashSaved();
    if (window.render) { try { window.render(); } catch(e){} }
  };

  // ─── MOUNT ─────────────────────────────────────────────────────────────────
  function mount() {
    injectCSS();

    if (!_onEMR && !document.getElementById('rdx-ws-gear')) {
      var g = document.createElement('button');
      g.id = 'rdx-ws-gear'; g.title = 'Customize workspace'; g.innerHTML = '⚙';
      g.onclick = function() {
        document.getElementById('rdx-ws-panel').classList.contains('open') ? rdxWsClose() : rdxWsOpen();
      };
      document.body.appendChild(g);
    }

    if (!document.getElementById('rdx-ws-panel')) {
      var p = document.createElement('div'); p.id = 'rdx-ws-panel';
      document.body.appendChild(p);
    }

    if (!document.getElementById('rdx-ws-backdrop')) {
      var bd = document.createElement('div'); bd.id = 'rdx-ws-backdrop';
      bd.onclick = rdxWsClose;
      document.body.appendChild(bd);
    }

    // Wizard auto-init suppressed on page load — fired by EMR post-login hook
    // (ensures user identity is known so per-user prefs work correctly)
  }

  // ─── PUBLIC API ────────────────────────────────────────────────────────────
  window.RDX_WORKSPACE = {
    load: load, save: save,
    applyToEMR: applyToEMR,
    isTabEnabled: isTabEnabled,
    openPanel: function(){ rdxWsOpen(); },
    openWizard: function(){ if (!document.getElementById('rdx-ws-wizard')) { var wiz = document.createElement('div'); wiz.id = 'rdx-ws-wizard'; wiz.innerHTML = buildWizardHTML(); document.body.appendChild(wiz); } },
  };

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
