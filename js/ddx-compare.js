/* js/ddx-compare.js — ReasonDx DDx Comparison & Cognitive Bias Detection
 * Compares Phase 2 (CC only), Phase 5 (post H&P), and Final DDx.
 * Detects anchoring, premature closure, availability bias, and order effects.
 * Used at Phase 5 transition and Phase 8 final debrief.
 * Integrates with GuidedMode state and case guided{} bias flags.
 */
(function () {
  'use strict';

  // ── Bias definitions ────────────────────────────────────────────
  var BIAS_DEFS = {
    anchoring: {
      label: 'Anchoring Bias',
      icon: '⚓',
      color: '#C49A1A',
      bg: '#FDF6E3',
      border: '#FFE082',
      description: 'You fixed on your initial impression and didn\'t sufficiently revise it when new evidence emerged.',
      teaching: 'Anchoring is the most common cognitive error in clinical diagnosis. The antidote is deliberate counter-factual thinking: after forming a hypothesis, actively ask "What would I expect to find if this were NOT the diagnosis?"',
      questions: [
        'What finding from the history or exam most challenges your top diagnosis?',
        'If your leading diagnosis were wrong, what would it be instead?',
        'What evidence are you potentially discounting?'
      ]
    },
    prematureClosure: {
      label: 'Premature Closure',
      icon: '🔒',
      color: '#C0392B',
      bg: '#FDEDEC',
      border: '#F5B7B1',
      description: 'You accepted a diagnosis before adequately ruling out competing alternatives.',
      teaching: 'Premature closure accounts for nearly half of all diagnostic errors. The "doorstep diagnosis" problem — locking in too early — is especially dangerous when the correct diagnosis never made it onto the list. Always complete your differential before narrowing.',
      questions: [
        'What life-threatening diagnosis did you not consider?',
        'If you had to add one more entry to your differential right now, what would it be?',
        'What have you not yet ruled out?'
      ]
    },
    availabilityBias: {
      label: 'Availability Bias',
      icon: '📺',
      color: '#7D3C98',
      bg: '#F5EEF8',
      border: '#D7BDE2',
      description: 'You may have overweighted a diagnosis because it came easily to mind — from recent cases, teaching, or prominence.',
      teaching: 'Availability bias leads to over-diagnosis of conditions that are memorable or recently encountered. Base rates matter. Ask yourself: for this patient\'s demographics and presentation, what is the actual prevalence of this diagnosis?',
      questions: [
        'What is the actual prevalence of your top diagnosis in this presentation?',
        'Are you reaching for this diagnosis because it\'s familiar, not because it fits?',
        'What does the base rate tell you?'
      ]
    },
    confirmationBias: {
      label: 'Confirmation Bias',
      icon: '🔍',
      color: '#1F618D',
      bg: '#EBF5FB',
      border: '#AED6F1',
      description: 'Your order choices or interpretation pattern suggests you sought evidence that confirmed your hypothesis rather than testing it.',
      teaching: 'Confirmation bias is particularly dangerous in test ordering. The goal of a diagnostic test is to change the probability of a diagnosis — not to confirm what you already believe. Order tests that would most change your management.',
      questions: [
        'Did you order any test primarily to confirm what you already believed?',
        'What test result would most change your management — and did you order it?',
        'What would a skeptic of your diagnosis want to see?'
      ]
    },
    orderEffect: {
      label: 'Order Effect',
      icon: '📊',
      color: '#0D7A67',
      bg: '#E6F4F1',
      border: '#A9DFBF',
      description: 'The position of diagnoses on your list may reflect the order you thought of them rather than their true clinical likelihood.',
      teaching: 'The first entry on a differential often has disproportionate influence on decision-making. After building your list, deliberately re-rank by clinical probability — not by the order items came to mind.',
      questions: [
        'Is your #1 diagnosis truly the most likely, or just the first one you thought of?',
        'If you re-ranked by pure clinical probability, what would change?'
      ]
    }
  };

  // ── Normalize DDx entries to plain strings ──────────────────────
  function _normalize(entries) {
    if (!entries || !entries.length) return [];
    return entries.map(function (e) {
      var str = (typeof e === 'string') ? e : (e.name || e.diagnosis || String(e));
      return str.trim().toLowerCase();
    }).filter(Boolean);
  }

  // ── Fuzzy match — are two dx strings referring to the same thing ─
  var SYNONYMS = [
    ['stemi', 'st-elevation', 'st elevation', 'myocardial infarction', 'mi ', 'heart attack', 'acs'],
    ['nstemi', 'non-st', 'unstable angina', 'nste-acs'],
    ['pe', 'pulmonary embolism', 'pulmonary emboli'],
    ['aortic dissection', 'dissection'],
    ['chf', 'heart failure', 'congestive heart'],
    ['pneumonia', 'pneumo', 'pna'],
    ['sepsis', 'septic'],
    ['gerd', 'acid reflux', 'esophageal'],
    ['musculoskeletal', 'costochondritis', 'msk', 'chest wall']
  ];

  function _similar(a, b) {
    if (a === b) return true;
    if (a.indexOf(b) !== -1 || b.indexOf(a) !== -1) return true;
    for (var i = 0; i < SYNONYMS.length; i++) {
      var group = SYNONYMS[i];
      var aIn = group.some(function (s) { return a.indexOf(s) !== -1; });
      var bIn = group.some(function (s) { return b.indexOf(s) !== -1; });
      if (aIn && bIn) return true;
    }
    return false;
  }

  function _overlap(listA, listB) {
    // Returns number of entries in A that have a match in B
    var count = 0;
    listA.forEach(function (a) {
      if (listB.some(function (b) { return _similar(a, b); })) count++;
    });
    return count;
  }

  function _contains(list, term) {
    var t = term.trim().toLowerCase();
    return list.some(function (entry) { return _similar(entry, t); });
  }

  // ── Core bias analysis ──────────────────────────────────────────
  function analyze(ddx2, ddx5, ddxFinal, caseGuidedBlock) {
    var n2 = _normalize(ddx2);
    var n5 = _normalize(ddx5 || []);
    var nF = _normalize(ddxFinal || []);
    var biasFlags = (caseGuidedBlock && caseGuidedBlock.biasFlags) || {};
    var detected = [];
    var clean = [];

    // ── 1. Anchoring ──────────────────────────────────────────────
    // Signal: DDx2 and DDx5 are essentially identical (no meaningful revision)
    if (n2.length > 0 && n5.length > 0) {
      var overlap2to5 = _overlap(n2, n5);
      var similarity = overlap2to5 / Math.max(n2.length, n5.length);
      var noNewEntries = n5.every(function (d) { return n2.some(function (e) { return _similar(e, d); }); });
      var rankUnchanged = n2.length >= 2 && n5.length >= 2 &&
        _similar(n2[0], n5[0]) && _similar(n2[1], n5[1]);

      if (similarity >= 0.85 && noNewEntries) {
        detected.push({
          type: 'anchoring',
          severity: rankUnchanged ? 'high' : 'moderate',
          evidence: 'Your differential was ' + Math.round(similarity * 100) + '% unchanged between Phase 2 and Phase 5 despite new information from history and physical exam.',
          caseNote: biasFlags.anchoring || null
        });
      } else {
        clean.push('anchoring');
      }
    }

    // ── 2. Premature closure ──────────────────────────────────────
    // Signal: Correct final diagnosis never appeared on any DDx
    if (nF.length > 0 && (n2.length > 0 || n5.length > 0)) {
      var allDx = n2.concat(n5);
      var finalInDx = nF.some(function (f) {
        return allDx.some(function (d) { return _similar(d, f); });
      });

      if (!finalInDx && caseGuidedBlock && caseGuidedBlock.ddxTargets) {
        // Check if case's primary diagnosis target was ever considered
        var primaryTarget = _normalize([caseGuidedBlock.ddxTargets[0]])[0];
        var primaryConsidered = primaryTarget && allDx.some(function (d) { return _similar(d, primaryTarget); });
        if (!primaryConsidered) {
          detected.push({
            type: 'prematureClosure',
            severity: 'high',
            evidence: 'The correct diagnosis was not present on your differential at any point in the case.',
            caseNote: biasFlags.prematureClosure || null
          });
        }
      } else if (!finalInDx && nF.length > 0) {
        detected.push({
          type: 'prematureClosure',
          severity: 'moderate',
          evidence: 'The final diagnosis may not have been on your differential.',
          caseNote: null
        });
      } else {
        clean.push('prematureClosure');
      }
    }

    // ── 3. Availability bias ──────────────────────────────────────
    // Signal: Case explicitly flags this + student's #1 matches the flagged diagnosis
    if (biasFlags.availabilityBias && n2.length > 0) {
      var flaggedDx = _normalize([biasFlags.availabilityBias.split(' ')[0] || ''])[0];
      if (flaggedDx && n2[0] && _similar(n2[0], flaggedDx) && n5[0] && _similar(n5[0], flaggedDx)) {
        detected.push({
          type: 'availabilityBias',
          severity: 'moderate',
          evidence: 'Your top diagnosis remained unchanged and may reflect availability rather than case-specific reasoning.',
          caseNote: biasFlags.availabilityBias
        });
      }
    }

    // ── 4. Order effect ───────────────────────────────────────────
    // Signal: Top entry of Phase 2 DDx was generated quickly and stayed #1 through Phase 5
    // even as other entries shifted significantly
    if (n2.length >= 3 && n5.length >= 3) {
      var topUnchanged = _similar(n2[0], n5[0]);
      var bottomShifted = !_similar(n2[n2.length - 1], n5[n5.length - 1]);
      if (topUnchanged && bottomShifted) {
        detected.push({
          type: 'orderEffect',
          severity: 'low',
          evidence: 'Your top diagnosis didn\'t move while lower entries shifted — this may reflect anchoring on your first thought rather than re-ranking by probability.',
          caseNote: null
        });
      }
    }

    return {
      detected: detected,
      clean: clean,
      n2: n2,
      n5: n5,
      nF: nF,
      hasData: n2.length > 0
    };
  }

  // ── Render: Phase 5 mid-case comparison ────────────────────────
  // Shown at the start of Phase 5 and in the CoachDx context
  function renderPhase5Summary(ddx2, ddx5) {
    var n2 = _normalize(ddx2 || []);
    var n5 = _normalize(ddx5 || []);
    if (!n2.length) return '';

    var FF = 'font-family:\'DM Sans\',-apple-system,sans-serif;';
    var html = '<div style="background:#f8fafc;border:1px solid #e2ecf4;border-radius:10px;padding:16px;margin-bottom:16px;' + FF + '">';
    html += '<div style="font-size:11px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:.8px;margin-bottom:12px">DDx Comparison</div>';
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';

    // Phase 2
    html += '<div>';
    html += '<div style="font-size:11px;font-weight:700;color:#2874A6;margin-bottom:8px">📋 Phase 2 — CC Only</div>';
    n2.forEach(function (dx, i) {
      var inP5 = n5.some(function (d) { return _similar(d, dx); });
      html += '<div style="font-size:12px;padding:3px 0;color:' + (inP5 ? '#1B7A3D' : '#718096') + '">';
      html += '<span style="color:#2874A6;font-weight:600;margin-right:5px">' + (i + 1) + '.</span>';
      html += dx.charAt(0).toUpperCase() + dx.slice(1);
      if (!inP5 && n5.length > 0) html += ' <span style="font-size:10px;color:#a0aec0">(removed)</span>';
      html += '</div>';
    });
    html += '</div>';

    // Phase 5
    if (n5.length > 0) {
      html += '<div>';
      html += '<div style="font-size:11px;font-weight:700;color:#0D7A67;margin-bottom:8px">🔄 Phase 5 — Post H&P</div>';
      n5.forEach(function (dx, i) {
        var inP2 = n2.some(function (d) { return _similar(d, dx); });
        html += '<div style="font-size:12px;padding:3px 0;color:' + (!inP2 ? '#0D7A67' : '#4a5568') + '">';
        html += '<span style="color:#0D7A67;font-weight:600;margin-right:5px">' + (i + 1) + '.</span>';
        html += dx.charAt(0).toUpperCase() + dx.slice(1);
        if (!inP2) html += ' <span style="font-size:10px;font-weight:600;color:#0D7A67">✦ new</span>';
        html += '</div>';
      });
      html += '</div>';
    }
    html += '</div>';

    // Quick change summary
    if (n5.length > 0) {
      var added   = n5.filter(function (d) { return !n2.some(function (e) { return _similar(e, d); }); }).length;
      var removed = n2.filter(function (d) { return !n5.some(function (e) { return _similar(e, d); }); }).length;
      html += '<div style="margin-top:10px;padding-top:10px;border-top:1px solid #e2ecf4;display:flex;gap:16px;font-size:12px">';
      if (added)   html += '<span style="color:#0D7A67;font-weight:600">+' + added   + ' added</span>';
      if (removed) html += '<span style="color:#718096">−' + removed + ' removed</span>';
      if (!added && !removed) html += '<span style="color:#C49A1A;font-weight:600">⚠ No changes — review for anchoring</span>';
      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  // ── Render: Final debrief (Phase 8) ────────────────────────────
  function renderFinalDebrief(ddx2, ddx5, ddxFinal, caseGuidedBlock) {
    var result = analyze(ddx2, ddx5, ddxFinal, caseGuidedBlock);
    var FF = 'font-family:\'DM Sans\',-apple-system,sans-serif;';
    var html = '';

    // ── Three-column DDx journey ──
    html += '<div style="background:#f8fafc;border:1px solid #e2ecf4;border-radius:12px;padding:20px;margin-bottom:20px;' + FF + '">';
    html += '<div style="font-size:12px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:.8px;margin-bottom:14px">Your Diagnostic Journey</div>';
    html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px">';

    // Phase 2
    html += '<div style="background:#fff;border:1px solid #d0dce8;border-radius:8px;padding:12px">';
    html += '<div style="font-size:10px;font-weight:700;color:#2874A6;text-transform:uppercase;margin-bottom:8px">Phase 2 · CC Only</div>';
    result.n2.forEach(function (dx, i) {
      html += '<div style="font-size:12px;color:#4a5568;padding:2px 0"><span style="font-weight:600;color:#2874A6;margin-right:4px">' + (i+1) + '.</span>' +
        dx.charAt(0).toUpperCase() + dx.slice(1) + '</div>';
    });
    if (!result.n2.length) html += '<div style="font-size:11px;color:#a0aec0;font-style:italic">Not recorded</div>';
    html += '</div>';

    // Phase 5
    html += '<div style="background:#fff;border:1px solid #d0dce8;border-radius:8px;padding:12px">';
    html += '<div style="font-size:10px;font-weight:700;color:#0D7A67;text-transform:uppercase;margin-bottom:8px">Phase 5 · Post H&P</div>';
    result.n5.forEach(function (dx, i) {
      var isNew = !result.n2.some(function (e) { return _similar(e, dx); });
      html += '<div style="font-size:12px;color:' + (isNew ? '#0D7A67' : '#4a5568') + ';padding:2px 0"><span style="font-weight:600;color:#0D7A67;margin-right:4px">' + (i+1) + '.</span>' +
        dx.charAt(0).toUpperCase() + dx.slice(1) +
        (isNew ? ' <span style="font-size:9px;color:#0D7A67">✦</span>' : '') + '</div>';
    });
    if (!result.n5.length) html += '<div style="font-size:11px;color:#a0aec0;font-style:italic">Not recorded</div>';
    html += '</div>';

    // Final
    var finalDx = (caseGuidedBlock && caseGuidedBlock.ddxTargets && caseGuidedBlock.ddxTargets[0]) ||
                  (ddxFinal && ddxFinal[0]) || 'See case diagnosis';
    var finalNorm = _normalize([finalDx])[0] || '';
    var gotIt2 = result.n2.some(function (d) { return _similar(d, finalNorm); });
    var gotIt5 = result.n5.some(function (d) { return _similar(d, finalNorm); });
    html += '<div style="background:' + (gotIt2 || gotIt5 ? '#E8F5E9' : '#FFEBEE') + ';border:1px solid ' + (gotIt2 || gotIt5 ? '#A9DFBF' : '#F5B7B1') + ';border-radius:8px;padding:12px">';
    html += '<div style="font-size:10px;font-weight:700;color:' + (gotIt2 || gotIt5 ? '#1B7A3D' : '#C0392B') + ';text-transform:uppercase;margin-bottom:8px">Final Diagnosis</div>';
    html += '<div style="font-size:13px;font-weight:700;color:' + (gotIt2 || gotIt5 ? '#1B7A3D' : '#C0392B') + '">' + finalDx + '</div>';
    html += '<div style="font-size:11px;margin-top:6px;color:#4a5568">';
    if (gotIt2)       html += '✅ On your list from Phase 2';
    else if (gotIt5)  html += '✅ Added in Phase 5';
    else              html += '⚠️ Not on your differential';
    html += '</div></div>';
    html += '</div></div>';

    // ── Bias findings ──
    if (result.detected.length > 0) {
      html += '<div style="margin-bottom:16px;' + FF + '">';
      html += '<div style="font-size:12px;font-weight:700;color:#9aafbf;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px">Cognitive Bias Analysis</div>';
      result.detected.forEach(function (flag) {
        var def = BIAS_DEFS[flag.type];
        if (!def) return;
        html += '<div style="background:' + def.bg + ';border:1px solid ' + def.border + ';border-radius:10px;padding:14px 16px;margin-bottom:10px">';
        html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">';
        html += '<span style="font-size:18px">' + def.icon + '</span>';
        html += '<div>';
        html += '<div style="font-size:13px;font-weight:700;color:' + def.color + '">' + def.label + '</div>';
        var sevLabel = flag.severity === 'high' ? '🔴 High signal' : flag.severity === 'moderate' ? '🟡 Moderate signal' : '🟢 Low signal';
        html += '<div style="font-size:10px;color:#718096;margin-top:1px">' + sevLabel + '</div>';
        html += '</div></div>';
        html += '<div style="font-size:12px;color:#4a5568;line-height:1.6;margin-bottom:8px">' + flag.evidence + '</div>';
        html += '<div style="font-size:12px;color:#2d3748;line-height:1.6;padding:8px 10px;background:rgba(255,255,255,.6);border-radius:6px;margin-bottom:8px">';
        html += '<strong>Teaching point:</strong> ' + def.teaching + '</div>';
        html += '<div style="font-size:11px;color:#718096;font-style:italic">Reflect: ' + def.questions[0] + '</div>';
        if (flag.caseNote) {
          html += '<div style="font-size:11px;color:' + def.color + ';margin-top:6px;font-weight:600">Case note: ' + flag.caseNote + '</div>';
        }
        html += '</div>';
      });
      html += '</div>';
    } else if (result.hasData && result.n2.length > 0) {
      html += '<div style="background:#E8F5E9;border:1px solid #A9DFBF;border-radius:10px;padding:14px 16px;margin-bottom:16px;' + FF + '">';
      html += '<div style="font-size:13px;font-weight:700;color:#1B7A3D;margin-bottom:4px">✅ No significant cognitive biases detected</div>';
      html += '<div style="font-size:12px;color:#4a5568">Your differential evolved meaningfully between phases and included the correct diagnosis. Well done.</div>';
      html += '</div>';
    }

    return html;
  }

  // ── CoachDx context builder ─────────────────────────────────────
  // Returns a structured prompt fragment for CoachDx to use at pivot points
  function buildCoachContext(phaseId, ddx2, ddx5, caseGuidedBlock) {
    var n2 = _normalize(ddx2 || []);
    var n5 = _normalize(ddx5 || []);
    var guided = caseGuidedBlock || {};

    var ctx = '';

    if (phaseId === 5) {
      var prompt = (guided.coachPrompts && guided.coachPrompts.phase5) || '';
      prompt = prompt.replace('{{ddx2}}', n2.join(', ') || 'not recorded');
      prompt = prompt.replace('{{ddx5}}', n5.join(', ') || 'not yet submitted');
      ctx = prompt || ('The student\'s Phase 2 DDx was: ' + (n2.join(', ') || 'not recorded') +
        '. Their refined Phase 5 DDx is: ' + (n5.join(', ') || 'not yet submitted') +
        '. Compare these. If the differential is unchanged, explore anchoring. Ask Socratic questions.');
    }

    if (phaseId === 2) {
      var p2prompt = (guided.coachPrompts && guided.coachPrompts.phase2) || '';
      ctx = p2prompt || ('The student has submitted their initial DDx based only on the chief complaint: ' +
        (n2.join(', ') || 'not recorded') +
        '. Coach them on the breadth of the differential. Do not give the diagnosis.');
    }

    return ctx;
  }

  // ── Public API ──────────────────────────────────────────────────
  window.DdxCompare = {
    analyze:              analyze,
    renderPhase5Summary:  renderPhase5Summary,
    renderFinalDebrief:   renderFinalDebrief,
    buildCoachContext:    buildCoachContext,
    normalize:            _normalize,
    similar:              _similar,
    BIAS_DEFS:            BIAS_DEFS
  };

  // ── Hook into GuidedMode Phase 8 render ────────────────────────
  // When GuidedMode._renderNote() runs, prepend the debrief
  document.addEventListener('rdx-guided-phase', function (e) {
    if (e.detail && e.detail.phase === 8 && window.GuidedMode) {
      var ddx2 = GuidedMode.getDdxPhase2 ? GuidedMode.getDdxPhase2() : [];
      var ddx5 = GuidedMode.getDdxPhase5 ? GuidedMode.getDdxPhase5() : [];
      var guided = window.EMR_DATA && window.EMR_DATA.guided;
      // Store context for CoachDx to pick up
      try {
        sessionStorage.setItem('rdx-debrief-context', JSON.stringify({
          ddx2: ddx2, ddx5: ddx5,
          coachPrompt: buildCoachContext(8, ddx2, ddx5, guided)
        }));
      } catch (ex) {}
    }
  });

  // ── Inject debrief into Phase 5 rendering ──────────────────────
  // Patch GuidedMode._renderDdxRefine to include the Phase 5 comparison header
  var _patchInterval = setInterval(function () {
    if (!window.GuidedMode) return;
    clearInterval(_patchInterval);

    var orig5 = GuidedMode._renderDdxRefine.bind(GuidedMode);
    GuidedMode._renderDdxRefine = function () {
      var ddx2 = GuidedMode.getDdxPhase2 ? GuidedMode.getDdxPhase2() : [];
      var comparison = DdxCompare.renderPhase5Summary(ddx2, []);
      var base = orig5();
      // Insert comparison before the instruction box
      return comparison + base;
    };

    var orig8 = GuidedMode._renderNote.bind(GuidedMode);
    GuidedMode._renderNote = function () {
      var ddx2  = GuidedMode.getDdxPhase2 ? GuidedMode.getDdxPhase2() : [];
      var ddx5  = GuidedMode.getDdxPhase5 ? GuidedMode.getDdxPhase5() : [];
      var guided = window.EMR_DATA && window.EMR_DATA.guided;
      var debrief = DdxCompare.renderFinalDebrief(ddx2, ddx5, null, guided);
      return debrief + orig8();
    };

  }, 200);

})();
