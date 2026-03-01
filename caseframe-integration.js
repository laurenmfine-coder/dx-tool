// ═══════════════════════════════════════════════════════════════
// CASEFRAME INTEGRATION LAYER
// ReasonDx · caseframe-integration.js
//
// Renders the CaseFrame scoring summary in the Virtual EMR
// Grading tab. Wires into CaseFrame.renderSummary().
// ═══════════════════════════════════════════════════════════════

(function(){
"use strict";

function esc(s){ var d=document.createElement('div');d.textContent=s||'';return d.innerHTML; }

// Grade → color
var GRADE_COLORS = {
  'A':'#059669','B':'#2874A6','C':'#D97706','D':'#EA580C','F':'#DC2626'
};

// Section icon map
var SECTION_ICONS = {
  'Problem Identification':'📋',
  'Medication Reconciliation':'💊',
  'Allergy Documentation':'⚠️',
  'HPI Quality':'📝',
  'Physical Examination':'🩺',
  'Assessment & Clinical Reasoning':'🧠',
  'Plan Quality':'📊',
  'Workup Completeness':'🔬'
};

function renderSummary(result, options){
  if(!result || !result.sections) return '';
  var opts = options || {};

  var gc = GRADE_COLORS[result.grade] || '#6B7280';

  // ─── Header with grade circle ───
  var h = '<div style="border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;margin-bottom:16px">';
  h += '<div style="background:linear-gradient(135deg,' + gc + '11,' + gc + '05);padding:20px 24px;border-bottom:1px solid #E5E7EB;display:flex;align-items:center;gap:20px">';

  // Grade circle
  h += '<div style="width:64px;height:64px;border-radius:50%;background:' + gc + ';display:flex;align-items:center;justify-content:center;flex-shrink:0">';
  h += '<span style="color:#fff;font-size:28px;font-weight:800">' + result.grade + '</span></div>';

  // Score info
  h += '<div><div style="font-size:18px;font-weight:700;color:#1A1A2E">CaseFrame Analysis</div>';
  h += '<div style="font-size:13px;color:#5A6178;margin-top:2px">' + esc(result.diagnosis) + '</div>';
  h += '<div style="font-size:14px;font-weight:600;color:' + gc + ';margin-top:4px">' + result.totalScore + ' / ' + result.maxScore + ' points (' + result.percentage + '%)</div>';
  h += '</div></div>';

  // ─── Score bar visualization ───
  h += '<div style="padding:16px 24px;border-bottom:1px solid #E5E7EB">';
  h += '<div style="display:flex;gap:2px;height:8px;border-radius:4px;overflow:hidden;background:#F3F4F6">';
  result.sections.forEach(function(sec){
    var pct = sec.max > 0 ? (sec.score / sec.max) * 100 : 100;
    var w = (sec.max / result.maxScore) * 100;
    var c = pct >= 80 ? '#059669' : pct >= 60 ? '#D97706' : pct >= 40 ? '#EA580C' : '#DC2626';
    h += '<div style="width:' + w + '%;background:' + c + ';position:relative" title="' + esc(sec.label) + ': ' + sec.score + '/' + sec.max + '"></div>';
  });
  h += '</div>';
  h += '<div style="display:flex;justify-content:space-between;margin-top:4px;font-size:9px;color:#9CA3AF">';
  result.sections.forEach(function(sec){
    var w = (sec.max / result.maxScore) * 100;
    if(w >= 8) h += '<span style="width:' + w + '%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + (SECTION_ICONS[sec.label]||'') + '</span>';
  });
  h += '</div></div>';

  // ─── Section breakdown ───
  h += '<div style="padding:12px 24px">';
  result.sections.forEach(function(sec){
    var pct = sec.max > 0 ? Math.round((sec.score / sec.max) * 100) : 100;
    var barC = pct >= 80 ? '#059669' : pct >= 60 ? '#D97706' : pct >= 40 ? '#EA580C' : '#DC2626';
    var icon = SECTION_ICONS[sec.label] || '📋';

    h += '<div style="padding:10px 0;border-bottom:1px solid #F3F4F6">';
    h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">';
    h += '<div style="display:flex;align-items:center;gap:8px"><span style="font-size:14px">' + icon + '</span>';
    h += '<span style="font-size:13px;font-weight:600;color:#1A1A2E">' + esc(sec.label) + '</span></div>';
    h += '<span style="font-size:12px;font-weight:700;color:' + barC + '">' + sec.score + '/' + sec.max + '</span></div>';

    // Progress bar
    h += '<div style="height:4px;background:#F3F4F6;border-radius:2px;overflow:hidden;margin-bottom:6px">';
    h += '<div style="height:100%;width:' + pct + '%;background:' + barC + ';border-radius:2px;transition:width .3s"></div></div>';

    // Feedback items
    if(sec.feedback){
      sec.feedback.forEach(function(fb){
        var fbIcon = fb.type === 'strength' ? '✓' : fb.type === 'miss' ? '✗' : '⚠';
        var fbC = fb.type === 'strength' ? '#059669' : fb.type === 'miss' ? '#DC2626' : '#D97706';
        h += '<div style="font-size:11px;color:#5A6178;padding:2px 0;display:flex;align-items:flex-start;gap:6px">';
        h += '<span style="color:' + fbC + ';font-weight:700;flex-shrink:0">' + fbIcon + '</span>';
        h += '<span>' + esc(fb.msg) + '</span></div>';
      });
    }

    // Missed items (collapsed)
    if(sec.missed && sec.missed.length > 0){
      h += '<div style="font-size:11px;color:#DC2626;padding:2px 0;margin-top:2px">✗ Missed: ' + sec.missed.slice(0,5).map(esc).join(', ');
      if(sec.missed.length > 5) h += ' (+' + (sec.missed.length - 5) + ' more)';
      h += '</div>';
    }

    h += '</div>';
  });
  h += '</div>';

  // ─── Strengths & Improvements ───
  if(result.strengths.length > 0 || result.improvements.length > 0){
    h += '<div style="padding:16px 24px;display:grid;grid-template-columns:1fr 1fr;gap:16px">';

    if(result.strengths.length){
      h += '<div style="padding:12px 16px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px">';
      h += '<div style="font-size:11px;font-weight:700;color:#059669;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">✓ Strengths</div>';
      result.strengths.forEach(function(s){
        h += '<div style="font-size:11px;color:#166534;padding:2px 0;line-height:1.4">' + esc(s) + '</div>';
      });
      h += '</div>';
    }

    if(result.improvements.length){
      h += '<div style="padding:12px 16px;background:#FFF7ED;border:1px solid #FED7AA;border-radius:8px">';
      h += '<div style="font-size:11px;font-weight:700;color:#EA580C;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">↑ Areas for Growth</div>';
      result.improvements.forEach(function(s){
        h += '<div style="font-size:11px;color:#9A3412;padding:2px 0;line-height:1.4">' + esc(s) + '</div>';
      });
      h += '</div>';
    }

    h += '</div>';
  }

  // ─── Must-Not-Miss ───
  if(result.mustNotMissMissed && result.mustNotMissMissed.length > 0){
    h += '<div style="padding:12px 24px 16px"><div style="padding:10px 14px;background:#FEF2F2;border:1px solid #FECACA;border-radius:8px">';
    h += '<div style="font-size:11px;font-weight:700;color:#991B1B;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">🚨 Must-Not-Miss Diagnoses</div>';
    h += '<div style="font-size:12px;color:#991B1B;line-height:1.5">You did not consider: <strong>' + result.mustNotMissMissed.map(esc).join(', ') + '</strong></div>';
    h += '<div style="font-size:10px;color:#B91C1C;margin-top:4px;font-style:italic">Always include dangerous differentials even if unlikely — "rule out" demonstrates safety awareness.</div>';
    h += '</div></div>';
  }

  // ─── Chart Review & Order Validation cross-data (if available) ───
  if(opts.chartReview || opts.orderValidation){
    h += '<div style="padding:0 24px 16px;display:flex;gap:12px;flex-wrap:wrap">';
    if(opts.chartReview && opts.chartReview.highValueCoverage != null){
      var crPct = Math.round(opts.chartReview.highValueCoverage * 100);
      h += '<div style="padding:8px 14px;background:#F0F9FF;border:1px solid #BAE6FD;border-radius:6px;font-size:11px;color:#0369A1">';
      h += '📋 Chart Review Coverage: <strong>' + crPct + '%</strong></div>';
    }
    if(opts.orderValidation){
      var ov = opts.orderValidation;
      if(ov.safetyScore != null){
        h += '<div style="padding:8px 14px;background:' + (ov.safetyScore >= 90 ? '#F0FDF4;border:1px solid #BBF7D0' : '#FEF2F2;border:1px solid #FECACA') + ';border-radius:6px;font-size:11px;color:' + (ov.safetyScore >= 90 ? '#059669' : '#DC2626') + '">';
        h += '🛡️ Order Safety: <strong>' + ov.safetyScore + '%</strong></div>';
      }
    }
    h += '</div>';
  }

  h += '</div>'; // close card

  return '<div class="section-card" style="margin-bottom:16px">' +
    '<div class="section-header"><span style="display:flex;align-items:center;gap:8px"><span style="font-size:16px">🧠</span>' +
    '<span style="font-size:13px;font-weight:700;color:var(--primary)">CASEFRAME SCORING</span></span></div>' +
    '<div style="padding:16px">' + h + '</div></div>';
}

// Override CaseFrame.renderSummary if CaseFrame exists
if(window.CaseFrame){
  window.CaseFrame.renderSummary = renderSummary;
}

// Also export standalone
window.CaseFrameUI = {
  renderSummary: renderSummary
};

})();
