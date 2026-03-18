/* js/crt-chart.js — Clinical Reasoning Trainer for ReasonDx Virtual EMR
 * Renders interactive CRT experience inside the patient chart tab.
 * Reads pre-authored structured data from emr-data/crt-data.js (CRT_DATA).
 * Manages order placement, phase progression, pitfall events, and teaching.
 */
(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  // STATE — per-case CRT progress, keyed by case ID
  // ═══════════════════════════════════════════════════════════════
  var STATE_KEY = 'rdx_crt_state';
  var crtState = {};

  function loadState() {
    try {
      var raw = sessionStorage.getItem(STATE_KEY);
      if (raw) crtState = JSON.parse(raw);
    } catch(e) { crtState = {}; }
  }

  function saveState() {
    try { sessionStorage.setItem(STATE_KEY, JSON.stringify(crtState)); } catch(e) {}
  }

  function getCaseState(caseId) {
    if (!crtState[caseId]) {
      crtState[caseId] = {
        ordersPlaced: [],
        currentPhase: 0,
        pitfallsTriggered: [],
        completed: false,
        startedAt: Date.now()
      };
      saveState();
    }
    return crtState[caseId];
  }

  function resetCaseState(caseId) {
    crtState[caseId] = null;
    saveState();
  }

  loadState();

  // ═══════════════════════════════════════════════════════════════
  // HELPERS
  // ═══════════════════════════════════════════════════════════════
  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function getCaseId() {
    // Try to get from URL params
    var params = new URLSearchParams(window.location.search);
    var caseId = params.get('case');
    if (caseId) return caseId;
    // Try global state
    if (window.S && window.S.caseId) return window.S.caseId;
    // Try current loaded case data
    if (window.currentCase && window.currentCase.id) return window.currentCase.id;
    return null;
  }

  function getCRTForCase(caseId) {
    if (!window.CRT_DATA) return null;
    return window.CRT_DATA[caseId] || null;
  }

  // ═══════════════════════════════════════════════════════════════
  // MAIN RENDER
  // ═══════════════════════════════════════════════════════════════
  window.CRTChart = {

    renderTab: function() {
      var caseId = getCaseId();
      if (!caseId) return renderNoCaseMessage();

      var crt = getCRTForCase(caseId);
      if (!crt || !crt.treatments) return renderNoCRTMessage(caseId);

      var state = getCaseState(caseId);
      var tx = crt.treatments;
      var html = '';

      // Tip bar from MissionControl
      if (window.MissionControl && MissionControl.renderTipBar) {
        html += MissionControl.renderTipBar('crt');
      }

      // ── Header ──
      html += '<div class="section-card">';
      html += '<div class="section-header" style="display:flex;align-items:center;justify-content:space-between">';
      html += '<div style="display:flex;align-items:center;gap:8px">';
      html += '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>';
      html += '<span class="section-header-title">Clinical Reasoning Trainer</span>';
      html += '</div>';
      html += '<div style="display:flex;gap:6px">';
      if (state.ordersPlaced.length > 0) {
        html += '<button type="button" onclick="CRTChart._reset(\'' + esc(caseId) + '\')" class="crt-btn-sm crt-btn-outline" title="Reset progress">↺ Reset</button>';
      }
      html += '</div>';
      html += '</div>';

      // ── Diagnosis badge ──
      html += '<div style="padding:12px 16px;background:linear-gradient(135deg,#EBF5FB,#F8F9FA);border-bottom:1px solid var(--border,#dce3eb)">';
      html += '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">';
      html += '<span class="crt-acuity-badge crt-acuity-' + crt.acuity + '">ESI ' + crt.acuity + '</span>';
      html += '<span style="font-weight:700;font-size:14px;color:#1a1a2e">' + esc(crt.diagnosis) + '</span>';
      html += '</div>';
      html += '<div style="font-size:11px;color:#64748b;margin-top:4px">Chief Complaint: ' + esc(crt.chiefComplaint) + ' · ' + esc(crt.presentation) + '</div>';
      html += '</div>';

      // ── Phase Timeline ──
      html += renderPhaseTimeline(tx.phases, state);

      // ── Pitfall Alerts ──
      html += renderPitfallAlerts(state, tx);

      // ── Current Phase Reassessment ──
      if (state.currentPhase > 0) {
        html += renderReassessment(tx, state);
      }

      // ── Order Panel ──
      html += renderOrderPanel(tx, state, caseId);

      // ── Treatment Log ──
      if (state.ordersPlaced.length > 0) {
        html += renderTreatmentLog(tx, state);
      }

      // ── Score Summary (when complete) ──
      if (state.completed || (state.currentPhase >= tx.phases.length - 1 && state.currentPhase > 0)) {
        html += renderCompletionSummary(crt, tx, state);
      }

      // ── Key Learning Points ──
      if (crt.keyLearningPoints && crt.keyLearningPoints.length > 0) {
        html += renderLearningPoints(crt, state);
      }

      html += '</div>'; // close section-card
      return html;
    },

    // ── ACTIONS ──
    _submitOrders: function(caseId) {
      var crt = getCRTForCase(caseId);
      if (!crt || !crt.treatments) return;
      var state = getCaseState(caseId);
      var tx = crt.treatments;
      var newOrders = 0;

      document.querySelectorAll('input[name="crt-order"]:checked').forEach(function(cb) {
        if (!state.ordersPlaced.includes(cb.value)) {
          state.ordersPlaced.push(cb.value);
          newOrders++;

          // Check pitfall events
          if (tx.pitfallEvents) {
            tx.pitfallEvents.forEach(function(pe) {
              if (pe.trigger === cb.value && !state.pitfallsTriggered.some(function(t){ return t.event === pe.event; })) {
                state.pitfallsTriggered.push(pe);
              }
            });
          }
        }
      });

      if (newOrders > 0) {
        saveState();
        if (window.showToast) showToast(newOrders + ' order(s) submitted', 'success');
        if (window.render) render();
        else CRTChart._refreshTab();
      }
    },

    _reassess: function(caseId) {
      var crt = getCRTForCase(caseId);
      if (!crt || !crt.treatments) return;
      var state = getCaseState(caseId);
      var tx = crt.treatments;
      var nextPhase = findNextPhase(tx, state);

      if (nextPhase) {
        state.currentPhase = nextPhase.index;

        // Check if this is the final phase
        if (state.currentPhase >= tx.phases.length - 1) {
          state.completed = true;
        }

        saveState();
        if (window.showToast) showToast('Reassessment: ' + nextPhase.phase.label, 'success');
        if (window.render) render();
        else CRTChart._refreshTab();
      } else {
        if (window.showToast) showToast('Complete required orders before reassessing', 'warning');
      }
    },

    _reset: function(caseId) {
      if (confirm('Reset all CRT progress for this case? This cannot be undone.')) {
        resetCaseState(caseId);
        if (window.render) render();
        else CRTChart._refreshTab();
      }
    },

    _toggleLearning: function() {
      var el = document.getElementById('crt-learning-body');
      var btn = document.getElementById('crt-learning-toggle');
      if (el) {
        var hidden = el.style.display === 'none';
        el.style.display = hidden ? 'block' : 'none';
        if (btn) btn.textContent = hidden ? '▾ Hide' : '▸ Show';
      }
    },

    _refreshTab: function() {
      // Fallback re-render if global render() is not available
      var container = document.querySelector('[data-tab="crt"]') || document.getElementById('tab-crt');
      if (container) {
        container.innerHTML = CRTChart.renderTab();
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════
  // RENDER HELPERS
  // ═══════════════════════════════════════════════════════════════

  function renderNoCaseMessage() {
    return '<div class="section-card"><div style="text-align:center;padding:40px 20px;color:#64748b">' +
      '<div style="font-size:36px;margin-bottom:12px">🩺</div>' +
      '<h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:8px">Clinical Reasoning Trainer</h3>' +
      '<p style="font-size:13px;line-height:1.6">Select a patient from the list to begin the clinical reasoning experience.</p>' +
      '</div></div>';
  }

  function renderNoCRTMessage(caseId) {
    return '<div class="section-card"><div style="text-align:center;padding:40px 20px;color:#64748b">' +
      '<div style="font-size:36px;margin-bottom:12px">📋</div>' +
      '<h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:8px">DDx Builder</h3>' +
      '<p style="font-size:13px;line-height:1.6;margin-bottom:16px">No interactive Clinical Reasoning Trainer available for this case yet.</p>' +
      '<p style="font-size:12px;color:#94a3b8">Case ID: ' + esc(caseId) + '</p>' +
      '</div>' +
      // Fall back to DDx Builder if available
      ((window.DdxBuilder && DdxBuilder.renderTab) ? DdxBuilder.renderTab() : '') +
      '</div>';
  }

  function renderPhaseTimeline(phases, state) {
    var html = '<div class="crt-phase-timeline">';
    phases.forEach(function(phase, i) {
      var cls = 'crt-phase-step';
      if (i < state.currentPhase) cls += ' completed';
      else if (i === state.currentPhase) cls += ' active';
      html += '<div class="' + cls + '">';
      html += '<div class="crt-phase-dot">';
      if (i < state.currentPhase) html += '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
      else html += '<span style="font-size:8px;font-weight:700">' + (i + 1) + '</span>';
      html += '</div>';
      html += '<span class="crt-phase-label">' + esc(phase.label) + '</span>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  function renderPitfallAlerts(state, tx) {
    if (state.pitfallsTriggered.length === 0) return '';
    var html = '';
    state.pitfallsTriggered.forEach(function(evt) {
      html += '<div class="crt-pitfall-card">';
      html += '<div class="crt-pitfall-header">⚠️ Adverse Event</div>';
      html += '<p style="font-size:13px;margin:8px 0;color:#1a1a2e">' + esc(evt.message) + '</p>';
      if (evt.vitals && Object.keys(evt.vitals).length > 0) {
        html += '<div class="crt-pitfall-vitals">';
        Object.entries(evt.vitals).forEach(function(kv) {
          html += '<span class="crt-vital-chip danger">' + kv[0] + ': ' + kv[1] + '</span>';
        });
        html += '</div>';
      }
      html += '<div class="crt-teaching-box"><strong>Recovery:</strong> ' + esc(evt.recovery) + '</div>';
      html += '</div>';
    });
    return html;
  }

  function renderReassessment(tx, state) {
    var phase = tx.phases[state.currentPhase];
    if (!phase) return '';
    var prevPhase = tx.phases[0]; // Compare to initial

    var html = '<div class="crt-reassess-card">';
    html += '<div class="crt-reassess-header">📋 Reassessment — ' + esc(phase.label) + '</div>';

    // Updated vitals with comparison
    if (phase.vitals) {
      html += '<div class="crt-subsection-label">Updated Vitals</div>';
      html += renderVitalsComparison(prevPhase.vitals, phase.vitals);
    }

    // ECG
    if (phase.ecg) {
      html += '<div class="crt-subsection-label">ECG</div>';
      html += '<div class="crt-data-box">' + esc(phase.ecg) + '</div>';
    }

    // Lab highlights
    if (phase.labHighlights && Object.keys(phase.labHighlights).length > 0) {
      html += '<div class="crt-subsection-label">Key Labs</div>';
      html += '<div class="crt-data-box">';
      Object.entries(phase.labHighlights).forEach(function(kv) {
        html += '<div style="padding:3px 0;border-bottom:1px solid #f3f4f6"><strong>' + esc(kv[0]) + ':</strong> ' + esc(kv[1]) + '</div>';
      });
      html += '</div>';
    }

    // Exam
    if (phase.examNote) {
      html += '<div class="crt-subsection-label">Exam Findings</div>';
      html += '<div class="crt-data-box">' + esc(phase.examNote) + '</div>';
    }

    // AI Patient Voice
    if (phase.aiPatientUpdate) {
      html += '<div class="crt-patient-voice">';
      html += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#1B4F72;margin-bottom:4px">🗣️ Patient</div>';
      html += '"' + esc(phase.aiPatientUpdate) + '"';
      html += '</div>';
    }

    // Teaching
    if (phase.teaching) {
      html += '<div class="crt-teaching-box">' + esc(phase.teaching) + '</div>';
    }

    html += '</div>';
    return html;
  }

  function renderVitalsComparison(before, after) {
    if (!before || !after) return '';
    var keys = ['BP','HR','RR','Temp','SpO2'];
    var html = '<div class="crt-vitals-grid">';
    keys.forEach(function(k) {
      if (!after[k]) return;
      var bVal = parseInt(before[k]) || 0;
      var aVal = parseInt(after[k]) || 0;
      var delta = 'unchanged';
      if (k === 'HR' || k === 'RR') delta = aVal < bVal ? 'improved' : aVal > bVal ? 'worsened' : 'unchanged';
      else if (k === 'SpO2') delta = aVal > bVal ? 'improved' : aVal < bVal ? 'worsened' : 'unchanged';
      else if (k === 'BP') {
        var bSys = parseInt(before.BP); var aSys = parseInt(after.BP);
        delta = Math.abs(aSys - 120) < Math.abs(bSys - 120) ? 'improved' : 'unchanged';
      }
      var abn = (k==='HR' && (aVal>100||aVal<60)) || (k==='SpO2' && aVal<95) || (k==='RR' && aVal>20) || (k==='Temp' && parseFloat(after[k])>100.4);
      html += '<div class="crt-vital-card">';
      html += '<div class="crt-vital-label">' + k + '</div>';
      html += '<div class="crt-vital-value' + (abn ? ' abnormal' : '') + '">' + after[k] + '</div>';
      if (delta !== 'unchanged') {
        html += '<div class="crt-vital-delta ' + delta + '">' + (delta === 'improved' ? '↑' : '↓') + '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  function renderOrderPanel(tx, state, caseId) {
    var groups = {};
    tx.orders.forEach(function(o) {
      var g = o.group || 'Other';
      if (!groups[g]) groups[g] = [];
      groups[g].push(o);
    });

    var html = '<div class="crt-order-section">';
    html += '<div class="crt-order-header">';
    html += '<h4 style="margin:0;font-size:14px;font-weight:700;display:flex;align-items:center;gap:6px">💊 Treatment Orders</h4>';
    var correctCount = state.ordersPlaced.filter(function(id) {
      var o = tx.orders.find(function(x){return x.id===id});
      return o && o.correct;
    }).length;
    var totalCorrect = tx.orders.filter(function(o){return o.correct}).length;
    // Only show score counter AFTER student has placed at least one order
    // Showing it upfront reveals how many correct answers exist
    if (state.ordersPlaced.length > 0) {
      html += '<span class="crt-order-counter">' + correctCount + '/' + totalCorrect + ' correct</span>';
    }
    html += '</div>';

    Object.keys(groups).forEach(function(group) {
      html += '<div class="crt-group-label">' + esc(group) + '</div>';
      html += '<div class="crt-order-grid">';
      groups[group].forEach(function(o) {
        var ordered = state.ordersPlaced.includes(o.id);
        var cls = 'crt-order-item';
        if (ordered && o.correct) cls += ' correct';
        else if (ordered && !o.correct) cls += ' incorrect';
        // Only apply 'critical' class AFTER ordering — applying it before selection
        // gives away which orders are highest priority via the amber left border
        if (ordered && o.critical) cls += ' critical';

        html += '<label class="' + cls + '">';
        html += '<input type="checkbox" name="crt-order" value="' + esc(o.id) + '"' + (ordered ? ' disabled checked' : '') + '>';
        html += '<span class="crt-order-name">' + esc(o.name) + '</span>';
        // Critical badge intentionally hidden before selection — shown in feedback after ordering
        html += '</label>';

        // Show teaching after ordering
        if (ordered) {
          html += '<div class="crt-order-feedback ' + (o.correct ? 'correct' : 'incorrect') + '">';
          html += '<span class="crt-order-verdict">' + (o.correct ? '✅ Correct' : '❌ Incorrect') + '</span>';
          html += '<div class="crt-order-teaching">' + esc(o.teaching) + '</div>';
          if (o.references && o.references.length > 0) {
            html += '<div class="crt-order-refs">';
            o.references.forEach(function(ref) {
              html += '<a href="' + esc(ref.url) + '" target="_blank" rel="noopener" class="crt-ref-link">📎 ' + esc(ref.source) + '</a>';
            });
            html += '</div>';
          }
          html += '</div>';
        }
      });
      html += '</div>';
    });

    // Action buttons
    html += '<div class="crt-action-bar">';
    html += '<button type="button" onclick="CRTChart._submitOrders(\'' + esc(caseId) + '\')" class="crt-btn crt-btn-primary">Submit Orders</button>';

    var nextPhase = findNextPhase(tx, state);
    if (nextPhase && state.ordersPlaced.length > 0) {
      html += '<button type="button" onclick="CRTChart._reassess(\'' + esc(caseId) + '\')" class="crt-btn crt-btn-success">🔄 Reassess Patient</button>';
    }
    html += '</div>';

    html += '</div>';
    return html;
  }

  function renderTreatmentLog(tx, state) {
    var html = '<div class="crt-log-section">';
    html += '<div class="crt-subsection-label" style="padding:12px 16px 0">📝 Treatment Log</div>';
    html += '<div style="padding:8px 16px 16px">';
    state.ordersPlaced.forEach(function(id) {
      var order = tx.orders.find(function(o){return o.id===id});
      if (order) {
        html += '<div class="crt-log-entry ' + (order.correct ? 'correct' : 'incorrect') + '">';
        html += '<span class="crt-log-icon">' + (order.correct ? '✅' : '❌') + '</span>';
        html += '<div>';
        html += '<strong>' + esc(order.name) + '</strong>';
        html += '<div class="crt-log-teaching">' + esc(order.teaching) + '</div>';
        html += '</div>';
        html += '</div>';
      }
    });
    html += '</div></div>';
    return html;
  }

  function renderCompletionSummary(crt, tx, state) {
    var correct = state.ordersPlaced.filter(function(id) {
      var o = tx.orders.find(function(x){return x.id===id});
      return o && o.correct;
    }).length;
    var incorrect = state.ordersPlaced.filter(function(id) {
      var o = tx.orders.find(function(x){return x.id===id});
      return o && !o.correct;
    }).length;
    var totalCorrect = tx.orders.filter(function(o){return o.correct}).length;
    var criticalMissed = tx.orders.filter(function(o){
      return o.critical && o.correct && !state.ordersPlaced.includes(o.id);
    });

    var pct = totalCorrect > 0 ? Math.round((correct / totalCorrect) * 100) : 0;
    var grade = pct >= 90 ? 'A' : pct >= 80 ? 'B' : pct >= 70 ? 'C' : pct >= 60 ? 'D' : 'F';

    var html = '<div class="crt-completion-card">';
    html += '<div class="crt-completion-header">🎯 Case Complete</div>';
    html += '<div class="crt-score-grid">';
    html += '<div class="crt-score-item"><div class="crt-score-value grade-' + grade + '">' + grade + '</div><div class="crt-score-label">Grade</div></div>';
    html += '<div class="crt-score-item"><div class="crt-score-value">' + correct + '/' + totalCorrect + '</div><div class="crt-score-label">Correct Orders</div></div>';
    html += '<div class="crt-score-item"><div class="crt-score-value' + (incorrect > 0 ? ' danger' : '') + '">' + incorrect + '</div><div class="crt-score-label">Incorrect</div></div>';
    html += '<div class="crt-score-item"><div class="crt-score-value' + (state.pitfallsTriggered.length > 0 ? ' danger' : '') + '">' + state.pitfallsTriggered.length + '</div><div class="crt-score-label">Pitfalls</div></div>';
    html += '</div>';

    if (criticalMissed.length > 0) {
      html += '<div class="crt-missed-critical">';
      html += '<div style="font-weight:700;color:#DC2626;margin-bottom:6px">⚠️ Critical Orders Missed:</div>';
      criticalMissed.forEach(function(o) {
        html += '<div style="font-size:12px;padding:4px 0;border-bottom:1px solid #fecaca">' + esc(o.name) + '</div>';
      });
      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  function renderLearningPoints(crt, state) {
    // Show learning points collapsed initially, expanded after completion
    var expanded = state.completed || state.currentPhase > 0;
    var html = '<div class="crt-learning-section">';
    html += '<div class="crt-learning-header" onclick="CRTChart._toggleLearning()" style="cursor:pointer;display:flex;align-items:center;justify-content:space-between">';
    html += '<span style="font-weight:700;font-size:13px">📚 Key Learning Points</span>';
    html += '<span id="crt-learning-toggle" style="font-size:12px;color:#2874A6">' + (expanded ? '▾ Hide' : '▸ Show') + '</span>';
    html += '</div>';
    html += '<div id="crt-learning-body" style="display:' + (expanded ? 'block' : 'none') + '">';

    if (crt.keyLearningPoints) {
      crt.keyLearningPoints.forEach(function(pt) {
        html += '<div class="crt-learning-point">' + esc(pt) + '</div>';
      });
    }

    if (crt.mustNotMiss && crt.mustNotMiss.length > 0) {
      html += '<div style="margin-top:12px;font-weight:700;font-size:12px;color:#DC2626">🚨 Must Not Miss</div>';
      crt.mustNotMiss.forEach(function(pt) {
        html += '<div class="crt-learning-point danger">' + esc(pt) + '</div>';
      });
    }

    if (crt.commonPitfalls && crt.commonPitfalls.length > 0) {
      html += '<div style="margin-top:12px;font-weight:700;font-size:12px;color:#F59E0B">⚡ Common Pitfalls</div>';
      crt.commonPitfalls.forEach(function(pt) {
        html += '<div class="crt-learning-point warning">' + esc(pt) + '</div>';
      });
    }

    html += '</div></div>';
    return html;
  }

  function findNextPhase(tx, state) {
    for (var i = state.currentPhase + 1; i < tx.phases.length; i++) {
      var phase = tx.phases[i];
      if (!phase.requires) continue;
      var met = phase.requires.every(function(req) { return state.ordersPlaced.includes(req); });
      if (met) return { index: i, phase: phase };
    }
    return null;
  }

})();
