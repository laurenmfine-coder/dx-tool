/* js/exam-builder.js — ReasonDx Physical Exam Builder
 * Renders a maneuver selector with case-specific or universal findings.
 * Tracks selected maneuvers and exposes results for guided mode progression.
 * Integrates with GuidedMode for phase completion.
 */
(function () {
  'use strict';

  // ── Universal fallback findings (used if case has no examFindings) ──
  var UNIVERSAL_FINDINGS = {
    'General appearance':             'Patient appears their stated age, in mild-to-moderate distress. Alert and oriented x3.',
    'Vital signs review':             'See vitals tab for current measurements.',
    'Cardiovascular — auscultation':  'Regular rate and rhythm. S1/S2 present. No murmurs appreciated.',
    'Cardiovascular — JVD assessment':'JVD not elevated. No hepatojugular reflux.',
    'Pulmonary — auscultation':       'Clear to auscultation bilaterally. No adventitious sounds.',
    'Abdomen — inspection and palpation': 'Soft, non-tender, non-distended. Normal bowel sounds.',
    'Extremities — edema assessment': 'No peripheral edema. Pulses 2+ bilaterally.',
    'Skin — color, temperature, moisture': 'Warm, dry, intact. No rash.',
    'Neurological — brief screen':    'Alert, oriented x3. No focal deficits.',
    'Head and neck':                  'Normocephalic, atraumatic. No lymphadenopathy.',
    'HEENT':                          'Pupils equal, round, reactive. Oropharynx clear.',
    'Musculoskeletal':                'No joint swelling or tenderness. Full ROM.',
    'Psychiatric':                    'Appropriate affect. Normal speech. No SI/HI.',
    'Respiratory effort':             'Unlabored breathing. No use of accessory muscles.'
  };

  // ── Maneuver categories for organized display ──────────────────
  var CATEGORIES = [
    {
      label: 'General & Vitals',
      maneuvers: ['General appearance', 'Vital signs review', 'Skin — color, temperature, moisture']
    },
    {
      label: 'Cardiovascular',
      maneuvers: ['Cardiovascular — auscultation', 'Cardiovascular — JVD assessment', 'Extremities — edema assessment']
    },
    {
      label: 'Pulmonary',
      maneuvers: ['Pulmonary — auscultation', 'Respiratory effort']
    },
    {
      label: 'Abdomen',
      maneuvers: ['Abdomen — inspection and palpation']
    },
    {
      label: 'Neurological & Psych',
      maneuvers: ['Neurological — brief screen', 'Head and neck', 'HEENT', 'Psychiatric']
    },
    {
      label: 'Musculoskeletal',
      maneuvers: ['Musculoskeletal']
    }
  ];

  var _selected = {};     // { maneuverName: true }
  var _revealed = {};     // { maneuverName: true } — results that have been opened
  var _guided   = null;

  // ── Persistence ────────────────────────────────────────────────
  function _save() {
    try {
      sessionStorage.setItem('rdx-exam-state', JSON.stringify({ selected: _selected, revealed: _revealed }));
    } catch (e) {}
  }

  function _load() {
    try {
      var raw = JSON.parse(sessionStorage.getItem('rdx-exam-state'));
      if (raw) { _selected = raw.selected || {}; _revealed = raw.revealed || {}; return true; }
    } catch (e) {}
    return false;
  }

  // ── Get finding for a maneuver ──────────────────────────────────
  function _getFinding(maneuver) {
    var caseFindings = _guided && _guided.examFindings;
    if (caseFindings && caseFindings[maneuver]) return caseFindings[maneuver];
    return UNIVERSAL_FINDINGS[maneuver] || 'No specific findings documented for this maneuver in this case.';
  }

  // ── Get all available maneuvers (case or universal) ─────────────
  function _getManeuvers() {
    if (_guided && _guided.examManeuvers && _guided.examManeuvers.length > 0) {
      return _guided.examManeuvers;
    }
    return Object.keys(UNIVERSAL_FINDINGS);
  }

  // ── Re-render the exam panel ────────────────────────────────────
  function _rerender() {
    var container = document.getElementById('rdx-exam-builder');
    if (!container) return;
    container.innerHTML = _buildInner();
    // Sync GuidedMode with current selection
    if (window.GuidedMode) {
      var done = Object.keys(_selected);
      GuidedMode.getExamDone && (GuidedMode._state_examDone = done);
    }
  }

  // ── Toggle a maneuver selection ─────────────────────────────────
  window._rdxExamToggle = function (maneuver) {
    if (_selected[maneuver]) {
      delete _selected[maneuver];
      delete _revealed[maneuver];
    } else {
      _selected[maneuver] = true;
    }
    _save();
    _rerender();
    // Update GuidedMode exam count
    if (window.GuidedMode) {
      var examDone = Object.keys(_selected);
      // Patch into the guided state so the advance button reflects count
      if (window.GuidedMode.getExamDone) {
        window.GuidedMode._examDoneOverride = examDone;
      }
    }
  };

  // ── Reveal a finding ────────────────────────────────────────────
  window._rdxExamReveal = function (maneuver) {
    _revealed[maneuver] = true;
    _save();
    _rerender();
  };

  // ── Build the inner HTML ────────────────────────────────────────
  function _buildInner() {
    var allManeuvers = _getManeuvers();
    var selectedCount = Object.keys(_selected).length;
    var FF = 'font-family:\'DM Sans\',-apple-system,sans-serif;';
    var html = '';

    // Summary bar
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;' + FF + '">';
    html += '<div style="font-size:12px;color:#4a5568"><strong style="color:#2874A6">' + selectedCount + '</strong> maneuver' + (selectedCount !== 1 ? 's' : '') + ' selected</div>';
    if (selectedCount >= 2) {
      html += '<div style="font-size:11px;color:#1B7A3D;font-weight:600">✓ Minimum met — you can advance</div>';
    } else {
      html += '<div style="font-size:11px;color:#718096">Select at least 2 to advance</div>';
    }
    html += '</div>';

    // Build categories, using case-specific maneuvers if available
    var useCaseManeuvers = _guided && _guided.examManeuvers && _guided.examManeuvers.length > 0;

    if (useCaseManeuvers) {
      // Case provides its own maneuver list — show ungrouped
      html += _buildManeuverGroup('Available Maneuvers', allManeuvers);
    } else {
      // Universal — show by category
      CATEGORIES.forEach(function (cat) {
        var available = cat.maneuvers.filter(function (m) { return allManeuvers.indexOf(m) !== -1; });
        if (available.length > 0) {
          html += _buildManeuverGroup(cat.label, available);
        }
      });
    }

    // Revealed findings panel
    var revealedKeys = Object.keys(_revealed);
    if (revealedKeys.length > 0) {
      html += '<div style="margin-top:20px;padding-top:16px;border-top:2px solid #e2ecf4">';
      html += '<div style="font-size:11px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:.8px;margin-bottom:12px">Examination Findings</div>';
      revealedKeys.forEach(function (m) {
        html += '<div style="margin-bottom:12px;padding:12px 14px;background:#f8fafc;border-radius:8px;border-left:3px solid #2874A6">';
        html += '<div style="font-size:12px;font-weight:700;color:#2874A6;margin-bottom:5px">' + m + '</div>';
        html += '<div style="font-size:13px;color:#2d3748;line-height:1.6">' + _getFinding(m) + '</div>';
        html += '</div>';
      });
      html += '</div>';
    }

    return html;
  }

  function _buildManeuverGroup(label, maneuvers) {
    var html = '<div style="margin-bottom:14px">';
    html += '<div style="font-size:10px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px">' + label + '</div>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:6px">';
    maneuvers.forEach(function (m) {
      var selected = !!_selected[m];
      var revealed = !!_revealed[m];
      html += '<div style="display:flex;align-items:stretch;border-radius:20px;overflow:hidden;border:1px solid ' + (selected ? '#2874A6' : '#d0dce8') + '">';
      // Select button
      html += '<button type="button" onclick="_rdxExamToggle(' + JSON.stringify(m) + ')" ' +
        'style="padding:5px 12px;background:' + (selected ? '#2874A6' : '#fff') + ';color:' + (selected ? '#fff' : '#4a5568') + ';border:none;font-size:12px;cursor:pointer;font-family:inherit">' +
        (selected ? '✓ ' : '') + m + '</button>';
      // Reveal result button (only shown when selected)
      if (selected) {
        html += '<button type="button" onclick="_rdxExamReveal(' + JSON.stringify(m) + ')" ' +
          'style="padding:5px 10px;background:' + (revealed ? '#0D7A67' : '#EBF5FB') + ';color:' + (revealed ? '#fff' : '#2874A6') + ';border:none;border-left:1px solid ' + (revealed ? '#0D7A67' : '#2874A6') + ';font-size:11px;cursor:pointer;font-family:inherit;font-weight:700">' +
          (revealed ? '✓' : '→') + '</button>';
      }
      html += '</div>';
    });
    html += '</div></div>';
    return html;
  }

  // ── Public API ───────────────────────────────────────────────────
  window.ExamBuilder = {

    init: function () {
      _guided = window.EMR_DATA && window.EMR_DATA.guided;
      _load();
    },

    render: function () {
      this.init();
      var html = '<div id="rdx-exam-builder">' + _buildInner() + '</div>';
      return html;
    },

    getSelected:    function () { return Object.keys(_selected); },
    getRevealed:    function () { return Object.keys(_revealed); },
    getSelectedCount: function () { return Object.keys(_selected).length; },

    reset: function () {
      _selected = {}; _revealed = {};
      sessionStorage.removeItem('rdx-exam-state');
    }
  };

  // Patch GuidedMode.getExamDone to read from ExamBuilder
  var _origGetExamDone = window.GuidedMode && window.GuidedMode.getExamDone;
  if (window.GuidedMode) {
    window.GuidedMode.getExamDone = function () {
      if (window.ExamBuilder) return ExamBuilder.getSelected();
      return _origGetExamDone ? _origGetExamDone.call(window.GuidedMode) : [];
    };
  }

})();
