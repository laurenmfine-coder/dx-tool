/* js/ddx-checkpoints.js — DDx Checkpoint System for ReasonDx
 * Prompts students to revise and commit their differential at 4 clinical stages.
 * Gives AI feedback comparing each revision to the prior one.
 * Integrates with MissionControl (snapshots) and DdxBuilder (entries).
 */
(function() {
  'use strict';

  var CHECKPOINTS = [
    {
      id:       'initial',
      label:    '① Initial DDx',
      subtitle: 'Based on chart review only — before speaking to the patient',
      when:     'Complete after reviewing the chart (Problems, Meds, Vitals, Allergies).',
      expect:   'Should be BROAD: ≥3 diagnoses, must-not-miss items included. You only have demographics, CC, and chart data — think wide.',
      color:    '#2874A6',
      bg:       '#EBF5FB',
      icon:     '📋',
      next:     'interview',
      nextLabel:'Go interview the patient →'
    },
    {
      id:       'post-interview',
      label:    '② Post-Interview DDx',
      subtitle: 'Revised after taking the history',
      when:     'Complete after finishing the patient interview.',
      expect:   'Should START NARROWING: prune diagnoses the history makes unlikely, elevate those supported by OLDCARTS findings. Still keep must-not-miss items.',
      color:    '#7C3AED',
      bg:       '#F5F3FF',
      icon:     '💬',
      next:     'orders',
      nextLabel:'Place targeted orders →'
    },
    {
      id:       'post-exam',
      label:    '③ Post-Exam DDx',
      subtitle: 'Revised after physical examination',
      when:     'Complete after performing your physical exam.',
      expect:   'Physical findings should further narrow your list. Positive findings elevate diagnoses; negative findings help exclude them. Your leading diagnosis should be clearer now.',
      color:    '#059669',
      bg:       '#F0FDF4',
      icon:     '🩺',
      next:     'orders',
      nextLabel:'Place targeted orders →'
    },
    {
      id:       'post-results',
      label:    '④ Post-Results DDx',
      subtitle: 'Final — after lab and imaging results',
      when:     'Complete after reviewing your resulted orders.',
      expect:   'Your differential should now be DATA-DRIVEN. Your leading diagnosis should have specific supporting evidence from results. Most alternative diagnoses should be explicitly addressed.',
      color:    '#D97706',
      bg:       '#FFFBEB',
      icon:     '🧪',
      next:     'documentation',
      nextLabel:'Write your note →'
    }
  ];

  // Determine which checkpoint the student is at now
  function _getCurrentCheckpoint() {
    if (!window.MissionControl) return CHECKPOINTS[0];
    var snaps = MissionControl.getDdxSnapshots ? MissionControl.getDdxSnapshots() : [];
    var snapIds = snaps.map(function(s){ return s.id || s.checkpoint; });

    // Figure out what stage they're at
    var hasInterview  = window.S && S.ptMessages && S.ptMessages.length >= 2;
    var hasExam       = window.ExamBuilder && ExamBuilder.getSelectedCount && ExamBuilder.getSelectedCount() >= 2;
    var hasResults    = window.S && (
      (S.labOrders  && S.labOrders.some(function(o){ return o.resulted; })) ||
      (S.imgOrders  && S.imgOrders.some(function(o){ return o.resulted; }))
    );

    // Return the first checkpoint not yet snapshotted that they're eligible for
    if (hasResults   && !snapIds.indexOf('post-results') >= 0 )  return CHECKPOINTS[3];
    if (hasResults   && snapIds.indexOf('post-results') < 0)     return CHECKPOINTS[3];
    if (hasExam      && snapIds.indexOf('post-exam') < 0)        return CHECKPOINTS[2];
    if (hasInterview && snapIds.indexOf('post-interview') < 0)   return CHECKPOINTS[1];
    if (!snapIds.indexOf('initial') >= 0 || snapIds.indexOf('initial') < 0) return CHECKPOINTS[0];
    return CHECKPOINTS[0];
  }

  function _getCompletedCheckpoints() {
    if (!window.MissionControl || !MissionControl.getDdxSnapshots) return [];
    return MissionControl.getDdxSnapshots().map(function(s){ return s.id || s.checkpoint; });
  }

  // Render the checkpoint header banner
  function _renderCheckpointBanner(cp) {
    var completed = _getCompletedCheckpoints();
    var html = '';

    // Progress stepper
    html += '<div style="display:flex;gap:4px;margin-bottom:12px;flex-wrap:wrap">';
    CHECKPOINTS.forEach(function(c) {
      var done = completed.indexOf(c.id) >= 0;
      var active = c.id === cp.id;
      html += '<div style="display:flex;align-items:center;gap:4px;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:700;'
        + 'background:' + (done ? c.bg : active ? c.bg : '#F1F5F9') + ';'
        + 'color:' + (done ? c.color : active ? c.color : '#94A3B8') + ';'
        + 'border:1px solid ' + (active ? c.color : done ? c.color : '#E2E8F0') + '">'
        + (done ? '✓ ' : '') + c.icon + ' ' + c.label
        + '</div>';
      if (c !== CHECKPOINTS[CHECKPOINTS.length-1]) {
        html += '<span style="color:#CBD5E1;align-self:center;font-size:10px">›</span>';
      }
    });
    html += '</div>';

    // Active checkpoint card
    html += '<div style="background:' + cp.bg + ';border:2px solid ' + cp.color + ';border-radius:12px;padding:14px 16px;margin-bottom:16px">';
    html += '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap">';
    html += '<div style="flex:1">';
    html += '<div style="font-size:13px;font-weight:800;color:' + cp.color + ';margin-bottom:4px">' + cp.icon + ' ' + cp.label + ' — ' + cp.subtitle + '</div>';
    html += '<div style="font-size:12px;color:#374151;line-height:1.6;margin-bottom:6px"><strong>What to do:</strong> ' + cp.when + '</div>';
    html += '<div style="font-size:12px;color:#374151;line-height:1.6"><strong>Expected:</strong> ' + cp.expect + '</div>';
    html += '</div>';
    html += '<button type="button" id="ddx-commit-btn" onclick="DDxCheckpoints.commit()" '
      + 'style="padding:9px 18px;background:' + cp.color + ';color:#fff;border:none;border-radius:8px;'
      + 'font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;flex-shrink:0">'
      + '✓ Commit This DDx</button>';
    html += '</div>';
    html += '</div>';

    return html;
  }

  // Render history of prior snapshots (collapsible)
  function _renderSnapshotHistory() {
    if (!window.MissionControl || !MissionControl.getDdxSnapshots) return '';
    var snaps = MissionControl.getDdxSnapshots();
    if (!snaps.length) return '';

    var html = '<details style="margin-top:16px;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden">';
    html += '<summary style="padding:10px 14px;cursor:pointer;font-size:12px;font-weight:700;color:#475569;background:#F8FAFC;list-style:none;display:flex;align-items:center;gap:8px">'
      + '📜 Prior DDx Snapshots (' + snaps.length + ')</summary>';
    html += '<div style="padding:12px 14px">';

    snaps.forEach(function(snap) {
      var cp = CHECKPOINTS.find(function(c){ return c.id === (snap.checkpoint || snap.id); }) || {};
      html += '<div style="margin-bottom:12px;padding:10px 12px;background:' + (cp.bg||'#F8FAFC') + ';border-left:3px solid ' + (cp.color||'#94A3B8') + ';border-radius:0 6px 6px 0">';
      html += '<div style="font-size:11px;font-weight:700;color:' + (cp.color||'#94A3B8') + ';margin-bottom:6px">' + (cp.icon||'') + ' ' + (cp.label||snap.checkpoint) + '</div>';
      if (snap.entries && snap.entries.length) {
        snap.entries.forEach(function(e, i) {
          html += '<div style="font-size:12px;color:#374151;padding:2px 0">'
            + '<span style="font-weight:700;margin-right:6px">#' + (i+1) + '</span>'
            + (e.diagnosis||'Unnamed')
            + ' <span style="font-size:10px;color:#94A3B8;margin-left:4px">(' + (e.confidence||50) + '%)</span>'
            + (e.category === 'must-not-miss' ? ' <span style="color:#DC2626;font-size:10px;font-weight:700">[MNM]</span>' : '')
            + '</div>';
        });
      } else {
        html += '<div style="font-size:12px;color:#94A3B8;font-style:italic">No diagnoses entered at this checkpoint</div>';
      }
      html += '</div>';
    });

    // AI feedback section if available
    if (window.S && S._ddxFeedback) {
      Object.keys(S._ddxFeedback).forEach(function(cpId) {
        var fb = S._ddxFeedback[cpId];
        if (!fb) return;
        var cp2 = CHECKPOINTS.find(function(c){ return c.id === cpId; }) || {};
        html += '<div style="margin-bottom:12px;padding:12px;background:#EBF5FB;border-radius:8px;border-left:3px solid #2874A6">';
        html += '<div style="font-size:11px;font-weight:700;color:#2874A6;margin-bottom:6px">🤖 AI Feedback — ' + (cp2.label||cpId) + '</div>';
        html += '<div style="font-size:12px;color:#1B3A5C;line-height:1.6">' + esc(fb.summary||'') + '</div>';
        if (fb.strengths && fb.strengths.length) {
          html += '<div style="margin-top:6px"><strong style="font-size:11px;color:#059669">✓ Strong:</strong> ' + fb.strengths.map(function(s){return esc(s);}).join(' · ') + '</div>';
        }
        if (fb.improve && fb.improve.length) {
          html += '<div style="margin-top:4px"><strong style="font-size:11px;color:#DC2626">↑ Improve:</strong> ' + fb.improve.map(function(s){return esc(s);}).join(' · ') + '</div>';
        }
        html += '</div>';
      });
    }

    html += '</div></details>';
    return html;
  }

  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  // Generate AI feedback comparing this snapshot to the prior one
  function _generateFeedback(cp, currentEntries, priorEntries, diagnosis) {
    var ptCC    = (window.PATIENT && PATIENT.chiefComplaint) ? PATIENT.chiefComplaint : '';
    var correct = diagnosis || '';

    var priorStr = priorEntries && priorEntries.length
      ? priorEntries.map(function(e,i){ return '#'+(i+1)+' '+e.diagnosis+' ('+( e.confidence||50)+'%)'; }).join(', ')
      : 'None (first DDx)';

    var currentStr = currentEntries && currentEntries.length
      ? currentEntries.map(function(e,i){ return '#'+(i+1)+' '+e.diagnosis+' ('+(e.confidence||50)+'%)'+(e.category==='must-not-miss'?' [MNM]':''); }).join(', ')
      : 'Empty';

    var systemPrompt = 'You are a clinical educator evaluating a medical student\'s differential diagnosis reasoning. '
      + 'Patient CC: ' + ptCC + '. '
      + (correct ? 'Correct diagnosis: ' + correct + '. ' : '')
      + 'Checkpoint: ' + cp.label + ' (' + cp.subtitle + '). '
      + 'Expected: ' + cp.expect
      + '\nReturn JSON only: {"score":0-10,"summary":"2 sentence assessment","strengths":["s1","s2"],"improve":["i1","i2"],"breadth":"too_narrow|appropriate|too_broad","correctDxPresent":true/false}';

    var userMsg = 'Prior DDx: ' + priorStr + '\nCurrent DDx: ' + currentStr
      + '\nEvaluate: Is the differential appropriately ' + (cp.id === 'initial' ? 'broad' : 'focused') + ' for this stage? '
      + 'Did they include must-not-miss diagnoses? Did they appropriately narrow from prior checkpoint?';

    // Show loading state
    var btn = document.getElementById('ddx-commit-btn');
    if (btn) { btn.disabled = true; btn.textContent = '🤖 Getting AI feedback...'; }

    fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMsg }]
      })
    })
    .then(function(r){ return r.json(); })
    .then(function(data) {
      try {
        var raw = data.content && data.content[0] ? data.content[0].text : '';
        var clean = raw.replace(/```json|```/g,'').trim();
        var fb = JSON.parse(clean);
        if (!window.S._ddxFeedback) window.S._ddxFeedback = {};
        window.S._ddxFeedback[cp.id] = fb;
        if (window.render) render();
        if (window.showToast) showToast('✓ DDx feedback ready — see Snapshot History below');
      } catch(e) {
        console.warn('[DDxCheckpoints] feedback parse error:', e.message);
        if (window.render) render();
      }
    })
    .catch(function(e) {
      console.warn('[DDxCheckpoints] API error:', e.message);
      if (window.render) render();
    });
  }

  // ── Public API ────────────────────────────────────────────────────────────
  window.DDxCheckpoints = {

    render: function() {
      var cp = _getCurrentCheckpoint();
      var diagnosis = (window.CRT_DATA && window.CASE_ID && CRT_DATA[CASE_ID])
        ? CRT_DATA[CASE_ID].diagnosis : '';

      var banner  = _renderCheckpointBanner(cp);
      var history = _renderSnapshotHistory();

      return banner + history;
    },

    commit: function() {
      var cp = _getCurrentCheckpoint();
      if (!window.MissionControl) return;

      var currentEntries = MissionControl.getDdxEntries ? MissionControl.getDdxEntries() : [];
      if (!currentEntries.length) {
        if (window.showToast) showToast('Add at least one diagnosis before committing this checkpoint.');
        return;
      }

      // Take snapshot
      MissionControl.takeSnapshot(cp.id);
      if (window.showToast) showToast('✓ DDx snapshot saved — generating AI feedback...');

      // Get prior snapshot for comparison
      var snaps = MissionControl.getDdxSnapshots();
      var cpIdx = CHECKPOINTS.findIndex(function(c){ return c.id === cp.id; });
      var priorSnap = cpIdx > 0 ? snaps.find(function(s){ return s.checkpoint === CHECKPOINTS[cpIdx-1].id; }) : null;
      var priorEntries = priorSnap ? priorSnap.entries : [];

      var diagnosis = (window.CRT_DATA && window.CASE_ID && CRT_DATA[CASE_ID])
        ? CRT_DATA[CASE_ID].diagnosis : '';

      _generateFeedback(cp, currentEntries, priorEntries, diagnosis);
    }
  };

})();
