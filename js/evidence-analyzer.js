/* js/evidence-analyzer.js — Soft nudge + AI grading for DDx evidence quality.
 *
 * Phase 3 task: when learners build their differential, we want them to
 * articulate supporting AND refuting evidence for their top diagnoses.
 * The DdxBuilder already has those text fields; this module adds:
 *   1. A soft-nudge banner on the DDx tab when top-3 entries lack evidence.
 *      Learners can still advance to Orders without filling it in.
 *   2. An "Analyze My Evidence" button that grades quality with Claude.
 *      Returns per-Dx feedback: supports/refutes alignment, reasoning quality,
 *      and what they missed.
 *
 * Public API:
 *   EvidenceAnalyzer.renderBanner()   — banner HTML to prepend to DDx tab
 *   EvidenceAnalyzer.renderResults()  — grading results HTML (after analysis)
 *   EvidenceAnalyzer.analyze()        — call Claude API and store feedback in S
 */
(function() {
  'use strict';

  function _esc(s){if(!s&&s!==0)return'';var d=document.createElement('div');d.textContent=String(s);return d.innerHTML;}

  function _getTopThree() {
    if (!window.MissionControl || !MissionControl.getDdxEntries) return [];
    var entries = MissionControl.getDdxEntries() || [];
    return entries.slice(0, 3).filter(function(e){ return e && e.diagnosis && e.diagnosis.trim(); });
  }

  function _isEvidenceComplete(entries) {
    if (!entries.length) return false;
    return entries.every(function(e) {
      return (e.supporting && e.supporting.trim().length >= 10)
          && (e.refuting   && e.refuting.trim().length >= 10);
    });
  }

  function _missingFor(entries) {
    var missing = [];
    entries.forEach(function(e) {
      var lacks = [];
      if (!e.supporting || e.supporting.trim().length < 10) lacks.push('supporting');
      if (!e.refuting   || e.refuting.trim().length < 10)   lacks.push('refuting');
      if (lacks.length) missing.push({ dx: e.diagnosis, lacks: lacks });
    });
    return missing;
  }

  window.EvidenceAnalyzer = {

    renderBanner: function() {
      var top3 = _getTopThree();
      if (top3.length < 1) return '';
      var complete = _isEvidenceComplete(top3);
      var missing = _missingFor(top3);
      var hasAnalysis = window.S && S._evidenceFeedback;

      // If complete AND no analysis yet — show "Analyze" CTA in green
      if (complete && !hasAnalysis) {
        return '<div style="margin-bottom:16px;padding:14px 18px;background:linear-gradient(135deg,#ECFDF5,#F0FDF4);border:1px solid #6EE7B7;border-radius:10px;display:flex;align-items:center;gap:14px;flex-wrap:wrap">'
          + '<div style="font-size:24px">✅</div>'
          + '<div style="flex:1;min-width:200px"><div style="font-size:13px;font-weight:700;color:#065F46;margin-bottom:2px">Evidence complete for top ' + top3.length + ' diagnoses</div>'
          + '<div style="font-size:12px;color:#047857;line-height:1.5">Want feedback on the quality of your reasoning? Run AI analysis.</div></div>'
          + '<button type="button" onclick="EvidenceAnalyzer.analyze()" id="evidenceAnalyzeBtn" style="padding:9px 18px;background:#10B981;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap">🤖 Analyze My Evidence</button>'
          + '</div>';
      }

      // If complete AND analysis exists — show "Re-analyze" CTA
      if (complete && hasAnalysis) {
        return '<div style="margin-bottom:16px;padding:10px 16px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">'
          + '<div style="font-size:14px">✅</div>'
          + '<div style="flex:1;min-width:200px;font-size:12px;color:#047857">Evidence analyzed. Update your DDx and re-analyze if you make changes.</div>'
          + '<button type="button" onclick="EvidenceAnalyzer.analyze()" style="padding:6px 12px;background:#fff;color:#059669;border:1px solid #6EE7B7;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit">🔄 Re-analyze</button>'
          + '</div>';
      }

      // Soft nudge: missing evidence for some top-3 entries
      var missList = missing.map(function(m) {
        return '<li style="margin:3px 0"><strong>' + _esc(m.dx) + '</strong> — missing ' + m.lacks.join(' and ') + ' evidence</li>';
      }).join('');

      return '<div style="margin-bottom:16px;padding:14px 18px;background:linear-gradient(135deg,#FEF3C7,#FFFBEB);border:1px solid #FCD34D;border-radius:10px">'
        + '<div style="display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap">'
        + '<div style="font-size:24px;line-height:1">💭</div>'
        + '<div style="flex:1;min-width:200px">'
        + '<div style="font-size:13px;font-weight:700;color:#78350F;margin-bottom:4px">Strengthen your reasoning</div>'
        + '<div style="font-size:12px;color:#92400E;line-height:1.5;margin-bottom:6px">For your top ' + top3.length + ' ' + (top3.length === 1 ? 'diagnosis' : 'diagnoses') + ', articulate at least one finding that supports each Dx and one that argues against it. This is the heart of clinical reasoning, and you can run AI analysis once you do.</div>'
        + '<ul style="margin:6px 0 0;padding-left:18px;font-size:11px;color:#78350F">' + missList + '</ul>'
        + '<div style="margin-top:8px;font-size:11px;color:#92400E;font-style:italic">You can advance to Orders without filling this in — but the better you reason, the better the AI feedback.</div>'
        + '</div></div></div>';
    },

    renderResults: function() {
      if (!window.S || !S._evidenceFeedback) return '';
      var fb = S._evidenceFeedback;
      if (fb._error) {
        return '<div style="margin-bottom:16px;padding:12px 16px;background:#FEF2F2;border:1px solid #FCA5A5;border-radius:10px;font-size:12px;color:#991B1B">'
          + '⚠️ Could not analyze evidence: ' + _esc(fb._error)
          + '</div>';
      }
      if (!fb.perDx || !fb.perDx.length) return '';
      var html = '<div style="margin-bottom:16px;padding:16px 18px;background:#fff;border:2px solid #2874A6;border-radius:12px">'
        + '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><div style="font-size:16px">🤖</div><div style="font-size:13px;font-weight:700;color:#1B5272">AI Feedback on Your Evidence</div></div>';
      if (fb.overall) {
        html += '<div style="padding:10px 12px;background:#EBF5FB;border-radius:8px;margin-bottom:10px;font-size:12px;color:#1B5272;line-height:1.6">' + _esc(fb.overall) + '</div>';
      }
      fb.perDx.forEach(function(p) {
        var sCol = p.supportingScore >= 7 ? '#059669' : p.supportingScore >= 4 ? '#D97706' : '#DC2626';
        var rCol = p.refutingScore   >= 7 ? '#059669' : p.refutingScore   >= 4 ? '#D97706' : '#DC2626';
        html += '<div style="padding:10px 12px;border:1px solid #E2E8F0;border-radius:8px;margin-bottom:8px">'
          + '<div style="font-size:12px;font-weight:700;color:#1A1A2E;margin-bottom:6px">' + _esc(p.diagnosis) + '</div>'
          + '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:6px">'
          + '<div style="flex:1;min-width:150px"><div style="font-size:10px;font-weight:700;color:' + sCol + ';text-transform:uppercase;letter-spacing:.4px">✅ Supporting · ' + (p.supportingScore || 0) + '/10</div><div style="font-size:11px;color:#475569;margin-top:3px;line-height:1.5">' + _esc(p.supportingFeedback || '') + '</div></div>'
          + '<div style="flex:1;min-width:150px"><div style="font-size:10px;font-weight:700;color:' + rCol + ';text-transform:uppercase;letter-spacing:.4px">❌ Refuting · ' + (p.refutingScore || 0) + '/10</div><div style="font-size:11px;color:#475569;margin-top:3px;line-height:1.5">' + _esc(p.refutingFeedback || '') + '</div></div>'
          + '</div>';
        if (p.missed && p.missed.length) {
          html += '<div style="margin-top:6px;padding:8px 10px;background:#FEF3C7;border-radius:6px;font-size:11px;color:#78350F"><strong>What to consider:</strong> ' + _esc(p.missed.join('; ')) + '</div>';
        }
        html += '</div>';
      });
      html += '</div>';
      return html;
    },

    analyze: function() {
      var top3 = _getTopThree();
      if (!top3.length) {
        if (window.showToast) showToast('Add at least one diagnosis with evidence first.');
        return;
      }
      // Set loading state
      var btn = document.getElementById('evidenceAnalyzeBtn');
      if (btn) { btn.disabled = true; btn.textContent = '🤖 Analyzing...'; btn.style.opacity = '0.7'; }

      var ptCC   = (window.PATIENT && PATIENT.chiefComplaint) || '';
      var ptInfo = (window.PATIENT) ? (PATIENT.age + 'yo ' + (PATIENT.sex || '') + ', CC: ' + ptCC) : '';
      var correct = (window.CRT_DATA && window.CASE_ID && CRT_DATA[CASE_ID]) ? CRT_DATA[CASE_ID].diagnosis : '';

      var ddxStr = top3.map(function(e, i) {
        return (i+1) + '. ' + e.diagnosis + ' (' + (e.confidence || 50) + '%)\n'
          + '   Supporting: ' + (e.supporting || '(none provided)') + '\n'
          + '   Refuting: ' + (e.refuting || '(none provided)');
      }).join('\n\n');

      var systemPrompt = 'You are a clinical educator grading the quality of a medical student\'s diagnostic reasoning. '
        + 'For each diagnosis they gave, evaluate whether the supporting evidence actually supports that Dx, '
        + 'whether the refuting evidence actually argues against it, and what they missed.\n\n'
        + 'Patient: ' + ptInfo + '\n'
        + (correct ? 'Working diagnosis (for grading reference, do not reveal): ' + correct + '\n' : '')
        + '\nReturn JSON only with this exact shape:\n'
        + '{\n'
        + '  "overall": "1-2 sentence summary of reasoning quality",\n'
        + '  "perDx": [\n'
        + '    {\n'
        + '      "diagnosis": "<the dx name>",\n'
        + '      "supportingScore": 0-10,\n'
        + '      "supportingFeedback": "1-2 sentences: do the cited findings actually support this Dx? Specific feedback.",\n'
        + '      "refutingScore": 0-10,\n'
        + '      "refutingFeedback": "1-2 sentences: do the cited findings actually argue against this Dx?",\n'
        + '      "missed": ["1-3 short notes on key evidence the student didn\'t mention"]\n'
        + '    }\n'
        + '  ]\n'
        + '}\n'
        + 'Be specific and clinically grounded. If evidence is weak or generic, say so. Reward correct pathophysiologic reasoning. Do not penalize the student for not knowing the working dx, but DO note if their top dx is wrong direction.';

      fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1500,
          system: systemPrompt,
          messages: [{ role: 'user', content: 'Grade these top diagnoses:\n\n' + ddxStr }]
        })
      })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var raw = '';
        if (data && data.content) {
          raw = (data.content.find(function(c) { return c.type === 'text'; }) || data.content[0] || {}).text || '';
        }
        var clean = raw.replace(/```json|```/g, '').trim();
        try {
          var fb = JSON.parse(clean);
          if (!window.S) window.S = {};
          S._evidenceFeedback = fb;
          if (window.render) render();
          if (window.showToast) showToast('✓ Evidence analysis ready');
        } catch (e) {
          if (!window.S) window.S = {};
          S._evidenceFeedback = { _error: 'AI returned an unparseable response. Try again.' };
          if (window.render) render();
        }
      })
      .catch(function(e) {
        if (!window.S) window.S = {};
        S._evidenceFeedback = { _error: e.message || 'Network error' };
        if (window.render) render();
      });
    },

    clear: function() {
      if (window.S) S._evidenceFeedback = null;
      if (window.render) render();
    }
  };
})();
