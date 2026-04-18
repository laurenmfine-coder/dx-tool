/**
 * rdx-emr-enhancements.js
 * ReasonDx · Lauren Fine, MD, FAAAAI
 *
 * Loaded after virtual-emr.html core. Adds:
 *   1. Custom program rubric system (faculty can create/upload)
 *   2. Auto-result orders with simulated TAT timers
 *   3. First-time onboarding overlay (pre-clinical friendly)
 *   4. Faculty dashboard with aggregate view
 *   5. Program personalization (name, accent color, rubric)
 *
 * All data stored in localStorage under 'rdx-program-*' keys.
 * Designed to be upgraded to Supabase per-program storage.
 */

(function () {
'use strict';

// ─── PROGRAM CONFIG STORAGE ─────────────────────────────────────────────────
var PROG_KEY = 'rdx-program-config';

window.RDXProgram = {
  get: function () {
    try { return JSON.parse(localStorage.getItem(PROG_KEY) || 'null') || _defaultConfig(); }
    catch(e) { return _defaultConfig(); }
  },
  save: function (cfg) {
    try { localStorage.setItem(PROG_KEY, JSON.stringify(cfg)); } catch(e) {}
  },
  getRubric: function () {
    var cfg = this.get();
    return (cfg.rubric && cfg.rubric.length) ? cfg.rubric : null; // null = use default
  },
  getActiveRubric: function () {
    return this.getRubric() || window.RUBRIC || [];
  },
};

function _defaultConfig() {
  return {
    name: '',
    accentColor: '#2874A6',
    logoText: '',
    rubric: [],           // empty = use ReasonDx default
    assignments: [],      // [{caseId, dueDate, cohort, note}]
    welcomeMessage: '',
    createdAt: new Date().toISOString(),
  };
}

// ─── PATCH: replace RUBRIC with program rubric if set ───────────────────────
// Called after page loads — overrides the hardcoded RUBRIC constant
function _patchRubric() {
  var custom = window.RDXProgram.getRubric();
  if (custom && custom.length && typeof window.RUBRIC !== 'undefined') {
    // Splice custom rubric over the const (can't reassign const, but we can
    // empty it and push — this works because RUBRIC is an array object ref)
    window.RUBRIC.splice(0, window.RUBRIC.length, ...custom);
  }
}
setTimeout(_patchRubric, 300);

// ─── 1. CUSTOM RUBRIC BUILDER ───────────────────────────────────────────────
window.RDXRubricBuilder = {

  renderModal: function () {
    var prog = window.RDXProgram.get();
    var rubric = prog.rubric.length ? prog.rubric : _builtinRubricTemplate();
    var total = rubric.reduce(function(s, r){ return s + r.max; }, 0);

    return `
<div id="rubricBuilderModal" style="
  position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:10000;
  display:flex;align-items:center;justify-content:center;padding:16px">
  <div style="
    background:#fff;border-radius:16px;max-width:720px;width:100%;
    max-height:90vh;overflow:hidden;display:flex;flex-direction:column;
    box-shadow:0 20px 60px rgba(0,0,0,.25)">

    <!-- Header -->
    <div style="
      background:linear-gradient(135deg,#1B4F72,#2874A6);
      color:#fff;padding:20px 24px;flex-shrink:0">
      <div style="font-size:18px;font-weight:700;margin-bottom:4px">
        📋 Program Rubric Settings
      </div>
      <div style="font-size:13px;opacity:.8">
        Customize how student notes are graded in your program.
        Students see this rubric while writing.
      </div>
    </div>

    <!-- Tabs -->
    <div style="
      display:flex;border-bottom:1px solid #E2E8F0;flex-shrink:0;
      padding:0 24px;background:#F8FAFC">
      <button onclick="RDXRubricBuilder.showTab('build')"
        id="rbTab-build"
        style="padding:12px 16px;border:none;background:none;font-family:inherit;
        font-size:13px;font-weight:600;color:#2874A6;border-bottom:2px solid #2874A6;
        cursor:pointer">
        Build Rubric
      </button>
      <button onclick="RDXRubricBuilder.showTab('upload')"
        id="rbTab-upload"
        style="padding:12px 16px;border:none;background:none;font-family:inherit;
        font-size:13px;font-weight:600;color:#64748B;border-bottom:2px solid transparent;
        cursor:pointer">
        Upload / Paste
      </button>
      <button onclick="RDXRubricBuilder.showTab('program')"
        id="rbTab-program"
        style="padding:12px 16px;border:none;background:none;font-family:inherit;
        font-size:13px;font-weight:600;color:#64748B;border-bottom:2px solid transparent;
        cursor:pointer">
        Program Settings
      </button>
    </div>

    <!-- Content -->
    <div style="overflow-y:auto;flex:1;padding:24px" id="rubricBuilderContent">
      ${this._renderBuildTab(rubric, total)}
    </div>

    <!-- Footer -->
    <div style="
      padding:16px 24px;border-top:1px solid #E2E8F0;
      display:flex;justify-content:space-between;align-items:center;
      flex-shrink:0;background:#F8FAFC">
      <div style="font-size:12px;color:#64748B">
        Changes apply to all students in your program
      </div>
      <div style="display:flex;gap:8px">
        <button onclick="RDXRubricBuilder.resetToDefault()"
          style="padding:10px 16px;border:1px solid #E2E8F0;border-radius:8px;
          background:#fff;font-family:inherit;font-size:13px;font-weight:600;
          color:#64748B;cursor:pointer">
          Reset to Default
        </button>
        <button onclick="RDXRubricBuilder.close()"
          style="padding:10px 16px;border:none;border-radius:8px;
          background:#E2E8F0;font-family:inherit;font-size:13px;font-weight:600;
          color:#475569;cursor:pointer">
          Cancel
        </button>
        <button onclick="RDXRubricBuilder.save()"
          style="padding:10px 20px;border:none;border-radius:8px;
          background:#2874A6;color:#fff;font-family:inherit;font-size:13px;
          font-weight:700;cursor:pointer">
          ✓ Save Rubric
        </button>
      </div>
    </div>
  </div>
</div>`;
  },

  _renderBuildTab: function(rubric, total) {
    var rows = rubric.map(function(r, i) {
      return `<tr>
        <td style="padding:8px">
          <input type="text" value="${(r.label||'').replace(/"/g,'&quot;')}"
            onchange="RDXRubricBuilder._updateCriterion(${i},'label',this.value)"
            style="width:100%;padding:7px 10px;border:1px solid #E2E8F0;border-radius:6px;
            font-family:inherit;font-size:13px;outline:none"
            placeholder="Criterion name">
        </td>
        <td style="padding:8px;width:70px">
          <input type="number" min="1" max="50" value="${r.max||10}"
            onchange="RDXRubricBuilder._updateCriterion(${i},'max',parseInt(this.value)||10)"
            style="width:60px;padding:7px 8px;border:1px solid #E2E8F0;border-radius:6px;
            font-family:'IBM Plex Mono',monospace;font-size:13px;text-align:center;outline:none">
        </td>
        <td style="padding:8px">
          <input type="text" value="${(r.desc||'').replace(/"/g,'&quot;')}"
            onchange="RDXRubricBuilder._updateCriterion(${i},'desc',this.value)"
            style="width:100%;padding:7px 10px;border:1px solid #E2E8F0;border-radius:6px;
            font-family:inherit;font-size:13px;outline:none"
            placeholder="Brief description for students">
        </td>
        <td style="padding:8px;width:36px">
          <button onclick="RDXRubricBuilder._deleteRow(${i})"
            style="width:28px;height:28px;border:none;background:#FEE2E2;color:#991B1B;
            border-radius:6px;cursor:pointer;font-size:14px;display:flex;align-items:center;
            justify-content:center">×</button>
        </td>
      </tr>`;
    }).join('');

    return `
      <div style="margin-bottom:16px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:14px;font-weight:600;color:#1E293B">Grading Criteria</div>
          <div style="font-size:12px;color:#64748B;margin-top:2px">
            Total: <strong>${total} points</strong> across ${rubric.length} criteria
          </div>
        </div>
        <button onclick="RDXRubricBuilder._addRow()"
          style="padding:8px 14px;background:#EBF5FB;color:#2874A6;border:1px solid #BFDBFE;
          border-radius:8px;font-family:inherit;font-size:12px;font-weight:700;cursor:pointer">
          + Add Criterion
        </button>
      </div>
      <div style="background:#F8FAFC;border-radius:8px;border:1px solid #E2E8F0;overflow:hidden">
        <table style="width:100%;border-collapse:collapse">
          <thead>
            <tr style="background:#EFF6FF">
              <th style="padding:8px 12px;text-align:left;font-size:11px;font-weight:700;
                color:#475569;text-transform:uppercase;letter-spacing:.5px">Criterion Name</th>
              <th style="padding:8px 12px;text-align:center;font-size:11px;font-weight:700;
                color:#475569;text-transform:uppercase;letter-spacing:.5px">Pts</th>
              <th style="padding:8px 12px;text-align:left;font-size:11px;font-weight:700;
                color:#475569;text-transform:uppercase;letter-spacing:.5px">Description (shown to students)</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="rubricRows">
            ${rows}
          </tbody>
        </table>
      </div>
      <div style="margin-top:12px;padding:10px 14px;background:#FFF7ED;border-radius:8px;
        border:1px solid #FED7AA;font-size:12px;color:#92400E">
        💡 <strong>Tip:</strong> Points don't need to sum to 100.
        Students see this rubric as a collapsible panel while writing their note.
        Faculty use it to score submissions.
      </div>`;
  },

  _renderUploadTab: function() {
    return `
      <div style="margin-bottom:16px">
        <div style="font-size:14px;font-weight:600;color:#1E293B;margin-bottom:6px">
          Paste Rubric as JSON or CSV
        </div>
        <div style="font-size:12px;color:#64748B;margin-bottom:12px">
          Paste a list of criteria in either format below.
          Use JSON for full control, or CSV for a quick import from Excel/Google Sheets.
        </div>
        <div style="background:#F8FAFC;border-radius:8px;border:1px solid #E2E8F0;
          padding:12px;margin-bottom:12px;font-family:'IBM Plex Mono',monospace;font-size:11px;color:#475569">
          <div style="font-weight:700;margin-bottom:4px;color:#1E293B">CSV format:</div>
          Criterion Name, Points, Description<br>
          Chief Complaint, 5, Clear concise presenting concern<br>
          HPI Quality, 20, OLDCARTS elements present with narrative flow<br>
          Assessment & Plan, 30, Problem-based with DDx and reasoning
        </div>
        <textarea id="rubricPasteInput"
          autocomplete="off" autocorrect="off" spellcheck="false"
          style="width:100%;min-height:180px;padding:12px;border:1.5px solid #E2E8F0;
          border-radius:8px;font-family:'IBM Plex Mono',monospace;font-size:12px;
          line-height:1.6;outline:none;resize:vertical"
          placeholder="Paste CSV or JSON here..."></textarea>
        <button onclick="RDXRubricBuilder._importPasted()"
          style="margin-top:10px;padding:10px 20px;background:#2874A6;color:#fff;
          border:none;border-radius:8px;font-family:inherit;font-size:13px;
          font-weight:700;cursor:pointer">
          Import & Preview
        </button>
        <div id="rubricImportResult" style="margin-top:10px;font-size:12px"></div>
      </div>`;
  },

  _renderProgramTab: function() {
    var cfg = window.RDXProgram.get();
    return `
      <div>
        <div style="font-size:14px;font-weight:600;color:#1E293B;margin-bottom:16px">
          Program Identity
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:#475569;
              text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">
              Program Name
            </label>
            <input type="text" id="progName" value="${(cfg.name||'').replace(/"/g,'&quot;')}"
              autocomplete="off" autocorrect="off" spellcheck="false"
              style="width:100%;padding:10px 12px;border:1.5px solid #E2E8F0;border-radius:8px;
              font-family:inherit;font-size:14px;outline:none"
              placeholder="e.g. ReasonDx Class of 2027">
          </div>
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:#475569;
              text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">
              Header Accent Color
            </label>
            <div style="display:flex;gap:8px;align-items:center">
              <input type="color" id="progColor" value="${cfg.accentColor||'#2874A6'}"
                style="width:44px;height:44px;padding:2px;border:1.5px solid #E2E8F0;
                border-radius:8px;cursor:pointer">
              <span style="font-size:12px;color:#64748B">
                Applied to the EMR header bar
              </span>
            </div>
          </div>
        </div>
        <div style="margin-bottom:16px">
          <label style="display:block;font-size:11px;font-weight:700;color:#475569;
            text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">
            Welcome Message (shown to students on first login)
          </label>
          <textarea id="progWelcome" rows="3"
            autocomplete="off" autocorrect="off" spellcheck="false"
            style="width:100%;padding:10px 12px;border:1.5px solid #E2E8F0;border-radius:8px;
            font-family:inherit;font-size:13px;outline:none;resize:vertical"
            placeholder="e.g. Welcome to the ReasonDx Virtual EMR. Your clerkship director has assigned the following cases for this block...">${cfg.welcomeMessage||''}</textarea>
        </div>
        <div style="padding:12px 14px;background:#F0FDF4;border-radius:8px;
          border:1px solid #BBF7D0;font-size:12px;color:#166534">
          ✓ Program settings are stored locally in this browser.
          For multi-device deployment, contact us to enable cloud sync for your institution.
        </div>
      </div>`;
  },

  _localRubric: null, // working copy during editing

  showTab: function(tab) {
    var prog = window.RDXProgram.get();
    var rubric = this._localRubric || (prog.rubric.length ? prog.rubric : _builtinRubricTemplate());
    if (!this._localRubric) this._localRubric = JSON.parse(JSON.stringify(rubric));

    ['build','upload','program'].forEach(function(t) {
      var btn = document.getElementById('rbTab-' + t);
      if (btn) {
        btn.style.color = t === tab ? '#2874A6' : '#64748B';
        btn.style.borderBottomColor = t === tab ? '#2874A6' : 'transparent';
      }
    });
    var content = document.getElementById('rubricBuilderContent');
    if (!content) return;
    var total = this._localRubric.reduce(function(s, r){ return s + (r.max||0); }, 0);
    if (tab === 'build') content.innerHTML = this._renderBuildTab(this._localRubric, total);
    else if (tab === 'upload') content.innerHTML = this._renderUploadTab();
    else content.innerHTML = this._renderProgramTab();
  },

  _updateCriterion: function(idx, field, value) {
    if (!this._localRubric) return;
    if (this._localRubric[idx]) {
      this._localRubric[idx][field] = value;
    }
  },

  _addRow: function() {
    if (!this._localRubric) this._localRubric = [];
    this._localRubric.push({ id: 'custom_' + Date.now(), label: '', max: 10, desc: '', category: 'Custom' });
    this.showTab('build');
  },

  _deleteRow: function(idx) {
    if (!this._localRubric) return;
    this._localRubric.splice(idx, 1);
    this.showTab('build');
  },

  _importPasted: function() {
    var input = document.getElementById('rubricPasteInput');
    var result = document.getElementById('rubricImportResult');
    if (!input) return;
    var text = input.value.trim();
    var parsed = [];
    try {
      // Try JSON first
      if (text.startsWith('[')) {
        parsed = JSON.parse(text);
      } else {
        // CSV parse
        var lines = text.split('\n').filter(function(l){ return l.trim(); });
        parsed = lines.map(function(line, i) {
          var parts = line.split(',');
          var label = (parts[0]||'').trim();
          var max = parseInt((parts[1]||'10').trim()) || 10;
          var desc = (parts.slice(2).join(',') || '').trim();
          return { id: 'import_' + i, label: label, max: max, desc: desc, category: 'Imported' };
        }).filter(function(r){ return r.label; });
      }
      if (!parsed.length) throw new Error('No criteria found');
      this._localRubric = parsed;
      var total = parsed.reduce(function(s,r){ return s+r.max; }, 0);
      result.innerHTML = '<span style="color:#059669;font-weight:600">✓ Imported ' + parsed.length + ' criteria (' + total + ' pts total). Switch to "Build Rubric" to review.</span>';
    } catch(e) {
      result.innerHTML = '<span style="color:#DC2626;font-weight:600">⚠ Could not parse — check CSV/JSON format. ' + e.message + '</span>';
    }
  },

  resetToDefault: function() {
    if (!confirm('Reset to the ReasonDx default rubric? Your custom rubric will be lost.')) return;
    this._localRubric = _builtinRubricTemplate();
    this.showTab('build');
  },

  save: function() {
    var cfg = window.RDXProgram.get();

    // Save rubric from working copy
    if (this._localRubric && this._localRubric.length) {
      cfg.rubric = this._localRubric;
    }

    // Save program settings if on that tab
    var nameEl = document.getElementById('progName');
    var colorEl = document.getElementById('progColor');
    var welcomeEl = document.getElementById('progWelcome');
    if (nameEl) cfg.name = nameEl.value.trim();
    if (colorEl) cfg.accentColor = colorEl.value;
    if (welcomeEl) cfg.welcomeMessage = welcomeEl.value.trim();

    window.RDXProgram.save(cfg);
    _patchRubric();
    _applyProgramBranding();
    this.close();
    _showToast('✓ Program rubric saved — applies to all students now');
  },

  open: function() {
    this._localRubric = null;
    var existing = document.getElementById('rubricBuilderModal');
    if (existing) existing.remove();
    document.body.insertAdjacentHTML('beforeend', this.renderModal());
  },

  close: function() {
    var el = document.getElementById('rubricBuilderModal');
    if (el) el.remove();
    this._localRubric = null;
  },
};

function _builtinRubricTemplate() {
  // Mirror of the default RUBRIC in virtual-emr.html
  return [
    {id:'cc',   label:'Chief Complaint',            max:5,  desc:'Clear, concise presenting concern', category:'Content'},
    {id:'hpi',  label:'HPI Quality',                max:15, desc:'OLDCARTS, pertinent pos/neg, timeline', category:'Content'},
    {id:'pmh',  label:'PMH / PSH',                  max:5,  desc:'Relevant conditions documented', category:'Content'},
    {id:'meds', label:'Meds & Allergies',            max:5,  desc:'Complete medication reconciliation', category:'Accuracy'},
    {id:'fsh',  label:'FH & SH',                    max:5,  desc:'Relevant details per context', category:'Content'},
    {id:'ros',  label:'Review of Systems',           max:10, desc:'Pertinent systems with pos/neg', category:'Organization'},
    {id:'pe',   label:'Physical Examination',        max:15, desc:'Organized, appropriate, clear findings', category:'Quality'},
    {id:'assess',label:'Assessment & Differential', max:15, desc:'Problem list with reasoning/DDx', category:'Clinical Reasoning'},
    {id:'plan', label:'Plan',                        max:15, desc:'Evidence-based, specific per problem', category:'Clinical Reasoning'},
    {id:'prof', label:'Professionalism & Organization',max:10,desc:'Organized, legible, proper terminology', category:'Organization'},
  ];
}

// ─── 2. APPLY PROGRAM BRANDING ──────────────────────────────────────────────
function _applyProgramBranding() {
  var cfg = window.RDXProgram.get();
  if (!cfg.name && !cfg.accentColor) return;

  // Header bar color
  var header = document.querySelector('.header-bar');
  if (header && cfg.accentColor) {
    header.style.background = cfg.accentColor;
  }

  // Program name in header
  if (cfg.name) {
    var logoSub = document.querySelector('.header-logo-sub');
    if (logoSub) logoSub.textContent = cfg.name;
  }
}
setTimeout(_applyProgramBranding, 500);

// ─── 3. AUTO-RESULT ORDERS ──────────────────────────────────────────────────
// TAT in seconds (simulated — much shorter than real life for practice)
var AUTO_RESULT_TAT = {
  // Labs (seconds)
  troponin: 15, ekg: 8, pt_inr: 15, ptt: 15,
  bmp: 20, cbc: 20, cmp: 25,
  cxr: 20, cta_pe: 30, cthead: 25, ctchest: 30, ctabdomen: 35,
  ua: 18, bloodculture: 45, uculture: 45,
  tsh: 30, ft4: 30, hba1c: 30, lipid: 30,
  bnp: 15, hcg: 20, crp: 20, esr: 25,
  echo: 40, us_abdomen: 35, us_renal: 35, doppler_le: 40,
  mribrain: 60, mrilspine: 60,
  vitd: 35, b12: 35, folate: 35, iron: 30, uricacid: 25, magnesium: 20,
  phosphorus: 20, cortisol: 30, prealbumin: 30, hepatitis: 40, hiv: 40,
  xr_knee: 18, xr_shoulder: 18, xr_ankle: 18, carotid_us: 40,
  dexa: 45, mammo: 45,
  _default_lab: 25,
  _default_img: 35,
};

var _autoResultTimers = {};

window.RDXAutoResult = {
  enabled: true, // can be toggled off for "advanced" mode

  scheduleAll: function() {
    if (!this.enabled) return;
    var self = this;
    // Schedule for any pending orders not yet resulted
    var allOrders = (window.S && window.S.labOrders ? window.S.labOrders : [])
      .concat(window.S && window.S.imgOrders ? window.S.imgOrders : []);
    allOrders.forEach(function(order, i) {
      if (!order.resulted && !_autoResultTimers[order.id + '_' + i]) {
        self.schedule(order, i, order._type || 'lab');
      }
    });
  },

  schedule: function(order, idx, type) {
    var tat = AUTO_RESULT_TAT[order.id]
      || (type === 'imaging' ? AUTO_RESULT_TAT._default_img : AUTO_RESULT_TAT._default_lab);
    var timerKey = order.id + '_' + idx;
    if (_autoResultTimers[timerKey]) return;

    _autoResultTimers[timerKey] = setTimeout(function() {
      delete _autoResultTimers[timerKey];
      // Auto-fire the result
      if (type === 'imaging') {
        if (window.resultImgOrder) {
          // Find the pending index
          var pending = (window.S.imgOrders||[]).filter(function(o){ return !o.resulted; });
          var pIdx = pending.findIndex(function(o){ return o.id === order.id; });
          if (pIdx >= 0) { window.resultImgOrder(pIdx); }
        }
      } else {
        if (window.resultLabOrder) {
          var pending = (window.S.labOrders||[]).filter(function(o){ return !o.resulted; });
          var pIdx = pending.findIndex(function(o){ return o.id === order.id; });
          if (pIdx >= 0) { window.resultLabOrder(pIdx); }
        }
      }
    }, tat * 1000);

    // Show progress toast
    _showToast('⏳ ' + order.name + ' — results in ~' + _tatLabel(tat));
  },
};

function _tatLabel(secs) {
  if (secs < 60) return secs + 's';
  return Math.round(secs/60) + ' min';
}

// Patch _placeLabOrder and _placeImgOrder to schedule auto-results
var _origPlaceLabOrder = null;
var _origPlaceImgOrder = null;
function _patchOrderFunctions() {
  if (window._placeLabOrder && !window._placeLabOrder._patched) {
    _origPlaceLabOrder = window._placeLabOrder;
    window._placeLabOrder = function(id, cat, vResult, action) {
      _origPlaceLabOrder(id, cat, vResult, action);
      // Find newly added order and schedule auto-result
      setTimeout(function() {
        var pending = (window.S.labOrders||[]).filter(function(o){ return !o.resulted; });
        var newOrder = pending.find(function(o){ return o.id === id; });
        if (newOrder && window.RDXAutoResult.enabled) {
          window.RDXAutoResult.schedule(newOrder, 0, 'lab');
        }
      }, 100);
    };
    window._placeLabOrder._patched = true;
  }
  if (window._placeImgOrder && !window._placeImgOrder._patched) {
    _origPlaceImgOrder = window._placeImgOrder;
    window._placeImgOrder = function(id, cat, vResult, action) {
      _origPlaceImgOrder(id, cat, vResult, action);
      setTimeout(function() {
        var pending = (window.S.imgOrders||[]).filter(function(o){ return !o.resulted; });
        var newOrder = pending.find(function(o){ return o.id === id; });
        if (newOrder && window.RDXAutoResult.enabled) {
          window.RDXAutoResult.schedule(newOrder, 0, 'imaging');
        }
      }, 100);
    };
    window._placeImgOrder._patched = true;
  }
}
setTimeout(_patchOrderFunctions, 600);

// ─── 4. FIRST-TIME ONBOARDING OVERLAY ──────────────────────────────────────
var ONBOARD_KEY = 'rdx-emr-onboarded';

window.RDXOnboarding = {
  shouldShow: function() {
    try {
      var shown = localStorage.getItem(ONBOARD_KEY);
      var user = window.S && window.S.currentUser;
      // Only show for students or guest users on their first visit
      if (shown) return false;
      if (user && (user.role === 'faculty' || user.role === 'admin')) return false;
      return true;
    } catch(e) { return false; }
  },

  show: function() {
    if (document.getElementById('rdxOnboardModal')) return;
    document.body.insertAdjacentHTML('beforeend', this._html());
    this._goToStep(0);
  },

  dismiss: function() {
    try { localStorage.setItem(ONBOARD_KEY, '1'); } catch(e) {}
    var el = document.getElementById('rdxOnboardModal');
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'scale(.97)';
      setTimeout(function(){ if(el.parentNode) el.remove(); }, 250);
    }
  },

  _steps: [
    {
      icon: '📋',
      title: 'Step 1 — Review the Chart',
      body: 'Start with the patient\'s Demographics, then work through Problems, Medications, Allergies, Labs, and Imaging. Get to know your patient before you see them — just like in a real clinical setting.',
      cta: 'Got it →',
    },
    {
      icon: '🗣️',
      title: 'Step 2 — Interview & Examine',
      body: 'Use the <strong>Write Note</strong> tab to write your H&P. Interview the patient first, then document. Use <strong>Order Tests</strong> to order labs and imaging. The patient\'s story is there to help you. You can also order labs and imaging under <strong>Orders</strong>.',
      cta: 'Next →',
    },
    {
      icon: '🩺',
      title: 'Step 3 — Build Your Assessment',
      body: 'In <strong>Write Note</strong>, your Assessment & Plan is most important — state your leading diagnosis, differential, and clinical reasoning. The rubric below the note shows how you'll be graded. Use the rubric panel (below the note) to see how you\'ll be graded.',
      cta: 'Next →',
    },
    {
      icon: '🤖',
      title: 'Step 4 — Get Feedback',
      body: 'After submitting your note, <strong>AI Feedback</strong> fires automatically with criterion-by-criterion scores. Talk through your reasoning with <strong>CoachDx</strong> — your AI attending who asks questions instead of giving you the answer.',
      cta: 'Start the Case →',
    },
  ],

  _currentStep: 0,

  _goToStep: function(i) {
    this._currentStep = i;
    var steps = this._steps;
    var step = steps[i];
    var dots = steps.map(function(_, j){
      return '<div style="width:8px;height:8px;border-radius:50%;background:'+(j===i?'#2874A6':'#CBD5E1')+'"></div>';
    }).join('');

    var content = document.getElementById('rdxOnboardContent');
    if (!content) return;
    content.innerHTML = `
      <div style="font-size:42px;text-align:center;margin-bottom:16px">${step.icon}</div>
      <div style="font-size:19px;font-weight:700;color:#1E293B;text-align:center;margin-bottom:12px">
        ${step.title}
      </div>
      <div style="font-size:14px;color:#475569;line-height:1.7;text-align:center;margin-bottom:24px;max-width:380px;margin-left:auto;margin-right:auto">
        ${step.body}
      </div>
      <div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${dots}</div>
      <div style="display:flex;gap:10px;justify-content:center">
        ${i > 0 ? '<button onclick="RDXOnboarding._goToStep('+(i-1)+')" style="padding:10px 20px;border:1.5px solid #E2E8F0;border-radius:10px;background:#fff;font-family:inherit;font-size:14px;font-weight:600;color:#64748B;cursor:pointer">← Back</button>' : ''}
        ${i < steps.length - 1
          ? '<button onclick="RDXOnboarding._goToStep('+(i+1)+')" style="padding:10px 28px;border:none;border-radius:10px;background:#2874A6;color:#fff;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer">'+step.cta+'</button>'
          : '<button onclick="RDXOnboarding.dismiss()" style="padding:10px 28px;border:none;border-radius:10px;background:#2874A6;color:#fff;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer">'+step.cta+'</button>'
        }
      </div>
      <div style="text-align:center;margin-top:14px">
        <button onclick="RDXOnboarding.dismiss()" style="background:none;border:none;color:#94A3B8;font-size:12px;cursor:pointer;font-family:inherit">
          Skip tutorial
        </button>
      </div>`;

  },

  _html: function() {
    return `
<div id="rdxOnboardModal" style="
  position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:10001;
  display:flex;align-items:center;justify-content:center;padding:24px;
  transition:opacity .25s,transform .25s">
  <div style="
    background:#fff;border-radius:20px;max-width:480px;width:100%;
    padding:40px 36px;box-shadow:0 24px 64px rgba(0,0,0,.2);
    position:relative">
    <div id="rdxOnboardContent"></div>
  </div>
</div>`;
  },
};

// Auto-show onboarding after case loads (brief delay to let UI settle)
setTimeout(function() {
  if (window.PATIENT && window.RDXOnboarding.shouldShow()) {
    window.RDXOnboarding.show();
  }
}, 1800);

// ─── 5. FACULTY DASHBOARD ───────────────────────────────────────────────────
window.RDXFacultyDashboard = {

  render: function() {
    var allSubs = (window.S && window.S.allSubmissions) || [];
    var students = {};
    allSubs.forEach(function(sub) {
      if (!students[sub.studentName]) students[sub.studentName] = [];
      students[sub.studentName].push(sub);
    });
    var studentList = Object.keys(students);
    var prog = window.RDXProgram.get();
    var rubric = window.RDXProgram.getActiveRubric() || _builtinRubricTemplate();
    var maxScore = rubric.reduce(function(s,r){ return s+r.max; }, 0);

    if (!studentList.length) {
      return `
        <div style="text-align:center;padding:60px 20px">
          <div style="font-size:48px;margin-bottom:16px">👩‍⚕️</div>
          <div style="font-size:18px;font-weight:700;color:#1E293B;margin-bottom:8px">
            No submissions yet
          </div>
          <div style="font-size:14px;color:#64748B;max-width:400px;margin:0 auto;line-height:1.6">
            Student submissions will appear here once they complete and submit their documentation.
            Make sure students are assigned to you in the Admin panel.
          </div>
          <button onclick="RDXRubricBuilder.open()"
            style="margin-top:20px;padding:10px 20px;background:#2874A6;color:#fff;
            border:none;border-radius:8px;font-family:inherit;font-size:13px;
            font-weight:700;cursor:pointer">
            ⚙️ Configure Program Rubric
          </button>
        </div>`;
    }

    // Aggregate stats
    var totalSubs = allSubs.length;
    var scoredSubs = allSubs.filter(function(s){ return s.feedback && s.feedback.totalScore !== undefined; });
    var avgScore = scoredSubs.length
      ? Math.round(scoredSubs.reduce(function(a,s){ return a + s.feedback.totalScore; }, 0) / scoredSubs.length)
      : null;

    // Per-criterion averages
    var criterionTotals = {};
    var criterionCounts = {};
    scoredSubs.forEach(function(sub) {
      var scores = sub.feedback && sub.feedback.scores;
      if (!scores) return;
      Object.keys(scores).forEach(function(id) {
        criterionTotals[id] = (criterionTotals[id]||0) + (parseInt(scores[id])||0);
        criterionCounts[id] = (criterionCounts[id]||0) + 1;
      });
    });

    var criterionRows = rubric.map(function(r) {
      var avg = criterionCounts[r.id] ? Math.round(criterionTotals[r.id] / criterionCounts[r.id]) : null;
      var pct = avg !== null ? Math.round((avg / r.max) * 100) : null;
      var color = pct === null ? '#CBD5E1' : pct >= 80 ? '#059669' : pct >= 60 ? '#D97706' : '#DC2626';
      return `<tr>
        <td style="padding:10px 12px;font-weight:500;color:#1E293B">${r.label}</td>
        <td style="padding:10px 12px;text-align:center;font-family:'IBM Plex Mono',monospace">
          ${avg !== null ? avg + ' / ' + r.max : '—'}
        </td>
        <td style="padding:10px 12px">
          ${pct !== null ? `
            <div style="display:flex;align-items:center;gap:8px">
              <div style="flex:1;height:6px;background:#F1F5F9;border-radius:3px">
                <div style="width:${pct}%;height:6px;border-radius:3px;background:${color}"></div>
              </div>
              <span style="font-size:12px;font-weight:600;color:${color};min-width:32px">${pct}%</span>
            </div>` : '<span style="color:#94A3B8;font-size:12px">No data</span>'}
        </td>
      </tr>`;
    }).join('');

    var studentRows = studentList.map(function(name) {
      var subs = students[name];
      var latest = subs[subs.length - 1];
      var score = latest.feedback ? latest.feedback.totalScore + '/' + (latest.feedback.maxScore || maxScore) : '—';
      var pct = latest.feedback ? Math.round((latest.feedback.totalScore / (latest.feedback.maxScore || maxScore)) * 100) : null;
      var statusColor = pct === null ? '#94A3B8' : pct >= 80 ? '#059669' : pct >= 60 ? '#D97706' : '#DC2626';
      var statusLabel = pct === null ? 'Submitted' : pct >= 80 ? 'Strong' : pct >= 60 ? 'Developing' : 'Needs Work';
      return `<tr style="cursor:pointer" onclick="if(window.switchTab)switchTab('grading')">
        <td style="padding:10px 12px;font-weight:600;color:#1E293B">${name}</td>
        <td style="padding:10px 12px;color:#64748B;font-size:13px">${subs.length} submission${subs.length!==1?'s':''}</td>
        <td style="padding:10px 12px;font-family:'IBM Plex Mono',monospace;font-size:13px">${score}</td>
        <td style="padding:10px 12px">
          <span style="padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;
            background:${statusColor}18;color:${statusColor}">${statusLabel}</span>
        </td>
      </tr>`;
    }).join('');

    return `
      <!-- Summary stats -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:20px">
        ${[
          ['Students', studentList.length, '#2874A6'],
          ['Submissions', totalSubs, '#059669'],
          ['Scored', scoredSubs.length, '#D97706'],
          ['Avg Score', avgScore !== null ? avgScore + '/' + maxScore : '—', '#7C3AED'],
        ].map(function(stat) { return `
          <div style="background:#fff;border:1.5px solid #E2E8F0;border-radius:12px;padding:16px;text-align:center;border-top:3px solid ${stat[2]};box-shadow:0 2px 8px rgba(0,0,0,.04)">
            <div style="font-size:26px;font-weight:800;color:${stat[2]};font-family:'IBM Plex Mono',monospace;line-height:1">
              ${stat[1]}
            </div>
            <div style="font-size:11px;font-weight:700;color:#64748B;text-transform:uppercase;
              letter-spacing:.6px;margin-top:6px">${stat[0]}</div>
          </div>`;}).join('')}
      </div>

      <!-- Rubric configure button -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="font-size:14px;font-weight:700;color:#1E293B">
          Class Performance by Criterion
          ${prog.name ? '<span style="font-size:12px;font-weight:400;color:#64748B;margin-left:8px">— ' + prog.name + '</span>' : ''}
        </div>
        <button onclick="RDXRubricBuilder.open()"
          style="padding:7px 14px;background:#EBF5FB;color:#2874A6;border:1px solid #BFDBFE;
          border-radius:8px;font-family:inherit;font-size:12px;font-weight:700;cursor:pointer">
          ⚙️ Edit Rubric
        </button>
      </div>

      <!-- Criterion aggregate -->
      <div style="background:#fff;border:1.5px solid #E2E8F0;border-radius:12px;overflow:hidden;margin-bottom:20px">
        <table style="width:100%;border-collapse:collapse">
          <thead>
            <tr style="background:#F8FAFC">
              <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;
                color:#475569;text-transform:uppercase;letter-spacing:.5px">Criterion</th>
              <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;
                color:#475569;text-transform:uppercase;letter-spacing:.5px;width:100px">Class Avg</th>
              <th style="padding:10px 12px;font-size:11px;font-weight:700;
                color:#475569;text-transform:uppercase;letter-spacing:.5px">Distribution</th>
            </tr>
          </thead>
          <tbody>
            ${criterionRows}
          </tbody>
        </table>
      </div>

      <!-- Student list -->
      <div style="font-size:14px;font-weight:700;color:#1E293B;margin-bottom:12px">
        Student Submissions
      </div>
      <div style="background:#fff;border:1.5px solid #E2E8F0;border-radius:12px;overflow:hidden">
        <table style="width:100%;border-collapse:collapse">
          <thead>
            <tr style="background:#F8FAFC">
              <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;
                color:#475569;text-transform:uppercase;letter-spacing:.5px">Student</th>
              <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;
                color:#475569;text-transform:uppercase;letter-spacing:.5px">Activity</th>
              <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;
                color:#475569;text-transform:uppercase;letter-spacing:.5px">Score</th>
              <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;
                color:#475569;text-transform:uppercase;letter-spacing:.5px">Status</th>
            </tr>
          </thead>
          <tbody>
            ${studentRows}
          </tbody>
        </table>
      </div>`;
  },
};

// ─── 6. INJECT FACULTY DASHBOARD TAB ────────────────────────────────────────
// Patch renderGrading to prepend the faculty dashboard summary
var _origRenderGrading = null;
function _patchFacultyTab() {
  if (typeof window.renderGrading === 'function' && !window.renderGrading._patched) {
    _origRenderGrading = window.renderGrading;
    window.renderGrading = function() {
      var user = window.S && window.S.currentUser;
      if (user && (user.role === 'faculty' || user.role === 'admin')) {
        var dash = `
          <div style="margin-bottom:20px;padding:20px;background:linear-gradient(135deg,#EBF5FB,#F0FDF4);
            border-radius:14px;border:1.5px solid #BFDBFE">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
              <div style="font-size:16px;font-weight:700;color:#1B4F72">Faculty Overview</div>
              <button onclick="RDXRubricBuilder.open()"
                style="padding:7px 14px;background:#fff;color:#2874A6;
                border:1.5px solid #2874A6;border-radius:8px;font-family:inherit;
                font-size:12px;font-weight:700;cursor:pointer">
                ⚙️ Program Rubric & Settings
              </button>
            </div>
            ${window.RDXFacultyDashboard.render()}
          </div>`;
        return dash + _origRenderGrading.call(this);
      }
      return _origRenderGrading.call(this);
    };
    window.renderGrading._patched = true;
  }
}
setTimeout(_patchFacultyTab, 800);

// ─── 7. RUBRIC VISIBLE WHILE WRITING ────────────────────────────────────────
// Patch renderDocumentation to append a collapsible rubric panel
var _origRenderDoc = null;
function _patchDocumentationRubric() {
  if (typeof window.renderDocumentation === 'function' && !window.renderDocumentation._patched) {
    _origRenderDoc = window.renderDocumentation;
    window.renderDocumentation = function() {
      var base = _origRenderDoc.call(this);
      // Already has Documentation Rubric section built in — don't double it
      return base;
    };
    window.renderDocumentation._patched = true;
  }
}
setTimeout(_patchDocumentationRubric, 800);

// ─── UTILITIES ───────────────────────────────────────────────────────────────
function _showToast(msg) {
  if (typeof window.showToast === 'function') {
    window.showToast(msg);
  } else {
    var t = document.getElementById('toast');
    if (t) { t.textContent = msg; t.classList.add('visible'); setTimeout(function(){ t.classList.remove('visible'); }, 3000); }
  }
}

// Expose rubric builder button for faculty sidebar
window.openRubricBuilder = function() { window.RDXRubricBuilder.open(); };

// ─── 8. ORDER SELECTIVITY SCORER ────────────────────────────────────────────
window.RDXOrderScore = {

  score: function(caseId, labOrders, imgOrders) {
    var rubric = window.RDX_ORDER_RUBRICS && window.RDX_ORDER_RUBRICS[caseId];
    if (!rubric) return null;

    var allOrders = (labOrders||[]).concat(imgOrders||[]).map(function(o){ return o.id; });
    var required = rubric.required || [];
    var recommended = rubric.recommended || [];
    var avoid = rubric.avoid || [];

    var hit = required.filter(function(id){ return allOrders.indexOf(id) >= 0; });
    var missed = required.filter(function(id){ return allOrders.indexOf(id) < 0; });
    var unnecessary = allOrders.filter(function(id){
      return avoid.indexOf(id) >= 0;
    });
    var extra = allOrders.filter(function(id){
      return required.indexOf(id) < 0 &&
             recommended.indexOf(id) < 0 &&
             avoid.indexOf(id) < 0;
    });

    // Score: required hit = 8 pts each, unnecessary = -5 each, extra = -2 each
    var baseScore = hit.length * 8;
    var penalty = (unnecessary.length * 5) + (extra.length * 2);
    var maxScore = required.length * 8;
    var raw = Math.max(0, baseScore - penalty);
    var pct = maxScore > 0 ? Math.round((raw / maxScore) * 100) : 0;

    return {
      caseId: caseId,
      required: required,
      hit: hit,
      missed: missed,
      unnecessary: unnecessary,
      extra: extra,
      score: raw,
      maxScore: maxScore,
      pct: Math.min(100, pct),
      rubric: rubric,
    };
  },

  renderFeedback: function(result) {
    if (!result) return '';
    var pct = result.pct;
    var color = pct >= 80 ? '#059669' : pct >= 55 ? '#D97706' : '#DC2626';
    var label = pct >= 80 ? 'Excellent — key tests ordered' : pct >= 55 ? 'Developing — some important tests missed' : 'Needs work — key tests missing or inappropriate tests ordered';

    var html = '<div style="background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:14px;padding:20px;margin:16px 0">';
    html += '<div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">';
    html += '<div style="width:56px;height:56px;border-radius:50%;background:' + color + '18;border:2.5px solid ' + color + ';display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:' + color + ';flex-shrink:0">' + pct + '</div>';
    html += '<div><div style="font-size:15px;font-weight:700;color:#1E293B">Order Selectivity</div><div style="font-size:12px;color:#64748B;margin-top:2px">' + label + '</div></div>';
    html += '</div>';

    // Required tests ordered
    if (result.hit.length) {
      html += '<div style="margin-bottom:12px"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#059669;margin-bottom:6px">✓ Key Tests Ordered</div>';
      result.hit.forEach(function(id) {
        var tp = result.rubric.teaching && result.rubric.teaching[id];
        html += '<div style="padding:8px 12px;background:#F0FDF4;border-left:3px solid #10B981;border-radius:0 8px 8px 0;margin-bottom:5px;font-size:13px">';
        html += '<strong>' + _labName(id) + '</strong>';
        if (tp) html += '<br><span style="font-size:11px;color:#166534;line-height:1.5">' + tp + '</span>';
        html += '</div>';
      });
      html += '</div>';
    }

    // Missed required tests
    if (result.missed.length) {
      html += '<div style="margin-bottom:12px"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#D97706;margin-bottom:6px">⚠ Should Have Ordered</div>';
      result.missed.forEach(function(id) {
        var tp = result.rubric.teaching && result.rubric.teaching[id];
        html += '<div style="padding:8px 12px;background:#FFFBEB;border-left:3px solid #F59E0B;border-radius:0 8px 8px 0;margin-bottom:5px;font-size:13px">';
        html += '<strong>' + _labName(id) + '</strong>';
        if (tp) html += '<br><span style="font-size:11px;color:#92400E;line-height:1.5">' + tp + '</span>';
        html += '</div>';
      });
      html += '</div>';
    }

    // Inappropriate tests
    if (result.unnecessary.length) {
      html += '<div style="margin-bottom:12px"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#DC2626;margin-bottom:6px">✗ Not Indicated</div>';
      result.unnecessary.forEach(function(id) {
        var tp = result.rubric.teaching && result.rubric.teaching[id];
        html += '<div style="padding:8px 12px;background:#FEF2F2;border-left:3px solid #F87171;border-radius:0 8px 8px 0;margin-bottom:5px;font-size:13px">';
        html += '<strong>' + _labName(id) + '</strong>';
        if (tp) html += '<br><span style="font-size:11px;color:#991B1B;line-height:1.5">' + tp + '</span>';
        else html += '<br><span style="font-size:11px;color:#991B1B">Not clinically indicated for this presentation.</span>';
        html += '</div>';
      });
      html += '</div>';
    }

    // Over-ordering note
    if (result.extra.length > 2) {
      html += '<div style="padding:10px 14px;background:#EFF6FF;border-radius:8px;font-size:12px;color:#1D4ED8;line-height:1.5">';
      html += '<strong>Choosing Wisely:</strong> ' + result.extra.length + ' additional tests ordered that were neither required nor inappropriate for this case. ';
      html += 'Targeted ordering reduces cost, patient burden, and incidental findings. Next time, aim for tests that directly change management.';
      html += '</div>';
    }

    html += '</div>';
    return html;
  },
};

// Show order selectivity feedback after note submission
var _origSubmitNote = null;
function _patchNoteSubmit() {
  if (typeof window.submitDocumentation === 'function' && !window.submitDocumentation._orderPatched) {
    var _orig = window.submitDocumentation;
    window.submitDocumentation = function() {
      _orig.apply(this, arguments);
      // After submission, compute and store order score
      setTimeout(function() {
        if (!window.CASE_ID || !window.S) return;
        var result = window.RDXOrderScore.score(
          window.CASE_ID,
          window.S.labOrders || [],
          window.S.imgOrders || []
        );
        if (result) {
          try {
            localStorage.setItem('rdx-order-score-' + window.CASE_ID, JSON.stringify(result));
          } catch(e) {}
        }
      }, 200);
    };
    window.submitDocumentation._orderPatched = true;
  }
}
setTimeout(_patchNoteSubmit, 900);

// Inject order score into the autofeedback tab
var _origAutoFeedback = null;
function _patchAutoFeedback() {
  if (typeof window.renderAutoFeedback === 'function' && !window.renderAutoFeedback._orderPatched) {
    var _orig = window.renderAutoFeedback;
    window.renderAutoFeedback = function() {
      var base = _orig.call(this);
      // Append order selectivity section if we have a score
      try {
        var stored = JSON.parse(localStorage.getItem('rdx-order-score-' + window.CASE_ID) || 'null');
        if (stored) {
          var feedback = window.RDXOrderScore.renderFeedback(stored);
          if (feedback) {
            // Inject before the rubric reference section
            var insertPoint = base.lastIndexOf('<div');
            if (insertPoint > 0) {
              base = base.slice(0, insertPoint) + feedback + base.slice(insertPoint);
            }
          }
        }
      } catch(e) {}
      return base;
    };
    window.renderAutoFeedback._orderPatched = true;
  }
}
setTimeout(_patchAutoFeedback, 900);

// Map common order IDs to readable names
function _labName(id) {
  var names = {
    troponin:'Troponin I', ekg:'12-Lead EKG', cbc:'CBC with Differential',
    bmp:'Basic Metabolic Panel', cmp:'Comprehensive Metabolic Panel',
    cta_pe:'CTA Chest (PE Protocol)', cthead:'CT Head without Contrast',
    ctchest:'CT Chest with Contrast', ctabdomen:'CT Abdomen/Pelvis with Contrast',
    echo:'Echocardiogram (TTE)', cxr:'Chest X-Ray', us_abdomen:'Ultrasound Abdomen',
    us_renal:'Ultrasound Renal', doppler_le:'Venous Duplex Lower Extremities',
    bnp:'BNP / NT-proBNP', pt_inr:'PT/INR', ptt:'PTT', crp:'CRP',
    bloodculture:'Blood Culture x2', uculture:'Urine Culture', ua:'Urinalysis',
    tsh:'TSH', ft4:'Free T4', hba1c:'Hemoglobin A1c', lipid:'Lipid Panel',
    mribrain:'MRI Brain', mrilspine:'MRI Lumbar Spine', dexa:'DEXA Bone Density',
    mammo:'Mammogram', procalcitonin:'Procalcitonin', lipase:'Lipase',
    hcg:'Serum hCG (Pregnancy)', esr:'ESR',
  };
  return names[id] || id.toUpperCase();
}


})();
