/* rdx-integration.js — CRT ↔ EMR Chart Integration Layer
 * Bridges: Pre-commitment DDx, Post-submission debrief (pulls CRT data),
 * Auto-surfaced MechanismDx concepts, Sidebar state labels,
 * Vitals sparkline (CRT phase data), ED timer, Order reasoning field
 */
(function() {
  'use strict';

  // ── Utility ───────────────────────────────────────────────────────────────
  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = String(s);
    return d.innerHTML;
  }

  function getCaseId() {
    try {
      var p = new URLSearchParams(window.location.search);
      var c = p.get('case');
      if (c) return c;
      if (window.S && S.caseId) return S.caseId;
      if (window.CASE_ID) return CASE_ID;
    } catch(e) {}
    return null;
  }

  function getCRTData() {
    var id = getCaseId();
    if (!id || !window.CRT_DATA) return null;
    return CRT_DATA[id] || null;
  }

  function getCRTState() {
    try {
      var id = getCaseId();
      if (!id) return null;
      var raw = sessionStorage.getItem('rdx_crt_state');
      var all = raw ? JSON.parse(raw) : {};
      return all[id] || null;
    } catch(e) { return null; }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // FEATURE A — PRE-COMMITMENT DDx CAPTURE
  // Shown as a floating prompt when learner has spent 90s on chart tabs
  // and hasn't yet written their differential
  // ══════════════════════════════════════════════════════════════════════════
  var _ddxTimer = null;
  var _ddxShown = false;
  var _ddxDismissed = false;

  function startDDxTimer() {
    if (_ddxShown || _ddxDismissed) return;
    if (_ddxTimer) clearTimeout(_ddxTimer);
    _ddxTimer = setTimeout(function() {
      // Only fire on chart review tabs, not if already in documentation
      var chartTabs = ['demographics','problems','labs','medications','allergies','imaging','vitals','history'];
      var activeTab = window.S && S.activeTab;
      if (chartTabs.indexOf(activeTab) >= 0 && !_ddxShown && !_ddxDismissed) {
        // Don't show if they already have a note
        var noteWords = 0;
        try { Object.values(S.noteFields||{}).forEach(function(v){ if(v) noteWords += v.trim().split(/\s+/).length; }); } catch(e){}
        if (noteWords < 10) showDDxPrompt();
      }
    }, 90000); // 90 seconds
  }

  function showDDxPrompt() {
    if (_ddxShown || document.getElementById('rdx-ddx-modal')) return;
    _ddxShown = true;

    var crt = getCRTData();
    var cc = (window.PATIENT && PATIENT.chiefComplaint) ? PATIENT.chiefComplaint : 'this presentation';

    // Build suggested DDx entries from CRT data if available
    var suggestedDDx = [];
    if (crt && crt.treatments && crt.treatments.orders) {
      // Pull diagnosis as first entry placeholder
      suggestedDDx.push(crt.diagnosis);
    }

    var modal = document.createElement('div');
    modal.id = 'rdx-ddx-modal';
    modal.style.cssText = 'position:fixed;bottom:80px;right:24px;width:360px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.18);border:1.5px solid #2874A6;z-index:8000;animation:rdxSlideUp .3s ease;font-family:inherit';
    modal.innerHTML =
      '<div style="background:linear-gradient(135deg,#1B3A5C,#2874A6);padding:14px 16px;border-radius:14px 14px 0 0;display:flex;align-items:center;justify-content:space-between">' +
        '<div style="color:#fff">' +
          '<div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;opacity:.8">🔍 Commit Before You Anchor</div>' +
          '<div style="font-size:14px;font-weight:700;margin-top:2px">What\'s your initial differential?</div>' +
        '</div>' +
        '<button onclick="RDXIntegration.dismissDDx()" style="background:rgba(255,255,255,.2);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;font-family:inherit">×</button>' +
      '</div>' +
      '<div style="padding:14px 16px">' +
        '<div style="font-size:12px;color:#64748B;margin-bottom:10px">You\'ve been reviewing the chart for ' + cc.substring(0,60) + '. Write your top 3 diagnoses <em>before</em> taking the history — this builds pre-commitment reasoning.</div>' +
        '<textarea id="rdx-ddx-input" rows="4" placeholder="1. Most likely: ...\n2. Must not miss: ...\n3. Also consider: ..." style="width:100%;padding:10px;border:1.5px solid #E2E8F0;border-radius:8px;font-size:13px;font-family:inherit;resize:none;box-sizing:border-box;line-height:1.6"></textarea>' +
        '<div style="display:flex;gap:8px;margin-top:10px">' +
          '<button onclick="RDXIntegration.saveDDx()" style="flex:1;background:#2874A6;color:#fff;border:none;border-radius:8px;padding:9px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit">Save & Continue →</button>' +
          '<button onclick="RDXIntegration.dismissDDx()" style="background:#F1F5F9;color:#64748B;border:none;border-radius:8px;padding:9px 14px;font-size:13px;cursor:pointer;font-family:inherit">Skip</button>' +
        '</div>' +
        '<div style="font-size:10px;color:#94A3B8;margin-top:8px;text-align:center">Your DDx will be sent to CoachDx and saved with your submission</div>' +
      '</div>';

    document.body.appendChild(modal);

    // Add slide-up animation if not present
    if (!document.getElementById('rdx-integration-anim')) {
      var s = document.createElement('style');
      s.id = 'rdx-integration-anim';
      s.textContent = '@keyframes rdxSlideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}';
      document.head.appendChild(s);
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // FEATURE B — VITALS SPARKLINE using CRT phase data
  // Replaces flat vitals table with a mini trend visualization
  // ══════════════════════════════════════════════════════════════════════════
  function renderVitalsSparkline() {
    // Use ALL historical vitals from the chart (VITALS array) + live CRT phases
    var allPoints = [];

    // 1. Historical vitals (from patient chart, oldest → newest)
    if (window.VITALS && VITALS.length > 0) {
      // VITALS are stored newest-first — reverse for chronological order
      var sorted = VITALS.slice().reverse();
      sorted.forEach(function(v) {
        var tempStr = String(v.temp || '');
        var tempNum = parseFloat(tempStr) || 0;
        if (tempStr.indexOf('C') >= 0) tempNum = tempNum * 9/5 + 32;
        allPoints.push({
          label: v.date || '',
          date:  v.date || '',
          bp:    v.bp || '',
          hr:    parseInt(v.hr)  || 0,
          rr:    parseInt(v.rr)  || 0,
          spo2:  parseInt(v.spo2) || 0,
          temp:  v.temp || '',
          tempF: tempNum,
          wt:    v.wt || '',
          setting: v.setting || '',
          source: 'chart'
        });
      });
    }

    // 2. CRT encounter phases (live treatment phases, appended as "Presentation" etc.)
    var crt = getCRTData();
    if (crt && crt.treatments && crt.treatments.phases) {
      var crtState = getCRTState();
      var currentPhase = crtState ? crtState.currentPhase : 0;
      crt.treatments.phases.forEach(function(phase, i) {
        if (i <= currentPhase && phase.vitals) {
          var tempStr = String(phase.vitals.Temp || '');
          var tempNum = parseFloat(tempStr) || 0;
          if (tempStr.indexOf('C') >= 0) tempNum = tempNum * 9/5 + 32;
          allPoints.push({
            label: phase.label || ('Phase ' + (i+1)),
            date:  phase.label || ('Phase ' + (i+1)),
            bp:    phase.vitals.BP || '',
            hr:    parseInt(phase.vitals.HR) || 0,
            rr:    parseInt(phase.vitals.RR) || 0,
            spo2:  parseInt(phase.vitals.SpO2) || 0,
            temp:  phase.vitals.Temp || '',
            tempF: tempNum,
            source: 'encounter'
          });
        }
      });
    }

    if (allPoints.length === 0) return '';
    if (allPoints.length === 1) return renderBasicVitalsSparkline(window.VITALS ? VITALS[0] : null);

    var n = allPoints.length;
    var W = 420, H = 72;
    var PAD_L = 32, PAD_R = 12, PAD_T = 8, PAD_B = 28; // leave room for x-axis labels
    var cW = W - PAD_L - PAD_R;
    var cH = H - PAD_T - PAD_B;

    function ptX(i) { return PAD_L + (n > 1 ? (i / (n-1)) * cW : cW/2); }
    function ptY(val, minV, maxV) {
      var range = maxV - minV || 1;
      return PAD_T + cH - ((val - minV) / range) * cH;
    }

    function sparkLine(vals, minV, maxV, color, abnormalFn) {
      var points = vals.map(function(v, i) { return ptX(i).toFixed(1) + ',' + ptY(v, minV, maxV).toFixed(1); });
      var path = 'M' + points.join('L');
      var svgParts = [];
      // Reference line area fill (subtle)
      svgParts.push('<path d="' + path + '" fill="none" stroke="' + color + '" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>');
      // Dots with tooltips
      vals.forEach(function(v, i) {
        var x = ptX(i), y = ptY(v, minV, maxV);
        var pt = allPoints[i];
        var abn = abnormalFn(v);
        var dotColor = abn ? '#EF4444' : color;
        var tipText = (pt.date || pt.label) + ': ' + v + (color === '#10B981' ? '%' : ' bpm');
        svgParts.push(
          '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (i===n-1?4:3) + '"' +
          ' fill="' + dotColor + '" stroke="white" stroke-width="1.5">' +
          '<title>' + tipText + '</title></circle>'
        );
      });
      return svgParts.join('');
    }

    function xAxisLabels() {
      var parts = [];
      allPoints.forEach(function(pt, i) {
        var x = ptX(i);
        // Short label: if date format MM/DD/YYYY → MM/DD, else truncate to 8 chars
        var lbl = pt.date || pt.label || '';
        if (/^\d{2}\/\d{2}\/\d{4}$/.test(lbl)) lbl = lbl.substring(0,5);
        else lbl = lbl.substring(0, 8);
        // Alternate above/below to avoid overlap when many points
        var yOffset = (i % 2 === 0) ? H - PAD_B + 11 : H - PAD_B + 20;
        parts.push(
          '<text x="' + x.toFixed(1) + '" y="' + yOffset + '" text-anchor="middle"' +
          ' style="font-size:8px;fill:#94A3B8;">' + lbl + '</text>'
        );
      });
      return parts.join('');
    }

    // Value ranges
    var hrVals  = allPoints.map(function(d){ return d.hr; });
    var spo2Vals = allPoints.map(function(d){ return d.spo2; });
    var minHR = Math.min.apply(null, hrVals.filter(Boolean));
    var maxHR = Math.max.apply(null, hrVals.filter(Boolean));
    var minSpo2 = Math.min.apply(null, spo2Vals.filter(Boolean));
    var maxSpo2 = Math.max.apply(null, spo2Vals.filter(Boolean));

    // Trend helper
    function trendIcon(vals) {
      var first = vals[0], last = vals[vals.length-1];
      if (last < first - 2) return '<span style="color:#10B981">↓ improving</span>';
      if (last > first + 2) return '<span style="color:#EF4444">↑ worsening</span>';
      return '<span style="color:#94A3B8">→ stable</span>';
    }

    var lastPt = allPoints[allPoints.length - 1];
    var hrCurrent = hrVals[hrVals.length-1];
    var spo2Current = spo2Vals[spo2Vals.length-1];

    var html = '<div style="background:#fff;border-radius:12px;border:1px solid var(--border);overflow:hidden;margin-bottom:16px">';
    html += '<div style="padding:10px 16px;background:linear-gradient(135deg,#F0F9FF,#EBF4FB);border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">';
    html += '<div style="font-size:13px;font-weight:700;color:#1B3A5C">📈 Vitals Trend</div>';
    html += '<div style="font-size:11px;color:#64748B">' + n + ' time point' + (n>1?'s':'') + ' · hover dots for values</div>';
    html += '</div>';
    html += '<div style="padding:12px 16px;display:grid;grid-template-columns:1fr 1fr;gap:12px">';

    // HR chart
    html += '<div>';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">';
    html += '<span style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:.05em">Heart Rate</span>';
    html += '<span style="font-size:13px;font-weight:700;color:' + (hrCurrent>100?'#EF4444':hrCurrent<60?'#F59E0B':'#2874A6') + '">' + hrCurrent + ' bpm' + (hrCurrent>100?' ▲':hrCurrent<60?' ▼':'') + '</span>';
    html += '</div>';
    html += '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;height:auto;overflow:visible">';
    // Normal range band
    var hrNormY1 = ptY(100, minHR-10, maxHR+10), hrNormY2 = ptY(60, minHR-10, maxHR+10);
    html += '<rect x="' + PAD_L + '" y="' + hrNormY1.toFixed(1) + '" width="' + cW + '" height="' + (hrNormY2-hrNormY1).toFixed(1) + '" fill="#F0FDF4" opacity="0.6"/>';
    html += sparkLine(hrVals, minHR-10, maxHR+10, '#2874A6', function(v){ return v>100||v<60; });
    html += xAxisLabels();
    html += '</svg>';
    html += '<div style="font-size:10px;color:#94A3B8;margin-top:2px">' + trendIcon(hrVals) + '</div>';
    html += '</div>';

    // SpO2 chart
    html += '<div>';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">';
    html += '<span style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:.05em">SpO₂</span>';
    html += '<span style="font-size:13px;font-weight:700;color:' + (spo2Current<95?'#EF4444':spo2Current<98?'#F59E0B':'#10B981') + '">' + spo2Current + '%' + (spo2Current<95?' ▼':'') + '</span>';
    html += '</div>';
    html += '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;height:auto;overflow:visible">';
    // Normal range band (95-100%)
    var spo2NormY = ptY(95, minSpo2-2, Math.max(maxSpo2+2, 100));
    html += '<rect x="' + PAD_L + '" y="' + PAD_T + '" width="' + cW + '" height="' + (spo2NormY - PAD_T).toFixed(1) + '" fill="#F0FDF4" opacity="0.6"/>';
    html += sparkLine(spo2Vals, minSpo2-2, Math.max(maxSpo2+2,100), '#10B981', function(v){ return v<95; });
    html += xAxisLabels();
    html += '</svg>';
    html += '<div style="font-size:10px;color:#94A3B8;margin-top:2px">' + trendIcon(spo2Vals) + '</div>';
    html += '</div>';

    html += '</div>'; // grid

    // Current vitals strip
    html += '<div style="padding:8px 16px 10px;background:#F8FAFC;border-top:1px solid var(--border);display:flex;flex-wrap:wrap;gap:8px">';
    [
      { label:'BP', val: lastPt.bp, abn: function(){ var s=parseInt(lastPt.bp)||0; return s>=140||s<90; } },
      { label:'HR', val: hrCurrent+' bpm', abn: function(){ return hrCurrent>100||hrCurrent<60; } },
      { label:'RR', val: (lastPt.rr||'—')+'/min', abn: function(){ return (lastPt.rr||0)>20||(lastPt.rr||0)<12; } },
      { label:'SpO₂', val: spo2Current+'%', abn: function(){ return spo2Current<95; } },
      { label:'Temp', val: lastPt.temp||'—', abn: function(){ return (lastPt.tempF||0)>=100.4||(lastPt.tempF||0)<96.8; } },
    ].forEach(function(c) {
      var isAbn = c.abn();
      html += '<div style="display:flex;flex-direction:column;align-items:center;min-width:52px">';
      html += '<span style="font-size:9px;color:#94A3B8;font-weight:700;text-transform:uppercase;letter-spacing:.05em">' + c.label + '</span>';
      html += '<span style="font-size:13px;font-weight:700;color:' + (isAbn?'#EF4444':'#1B3A5C') + '">' + c.val + '</span>';
      html += '</div>';
    });
    html += '</div>';

    html += '</div>'; // card
    return html;
  }


  function renderBasicVitalsSparkline(v) {
    // Single time point — just show a nicely formatted card instead of table
    var chips = [
      { label:'BP', val: v.bp, warn: parseInt(v.bp) < 90 || parseInt(v.bp) > 160 },
      { label:'HR', val: v.hr + ' bpm', warn: parseInt(v.hr) > 100 || parseInt(v.hr) < 60 },
      { label:'RR', val: v.rr + '/min', warn: parseInt(v.rr) > 20 },
      { label:'SpO₂', val: v.spo2, warn: parseInt(v.spo2) < 95 },
      { label:'Temp', val: v.temp, warn: false },
    ];
    var html = '<div style="background:#fff;border-radius:12px;border:1px solid var(--border);padding:16px;margin-bottom:16px">';
    html += '<div style="font-size:13px;font-weight:700;color:#1B3A5C;margin-bottom:12px">📊 Vitals on Arrival</div>';
    html += '<div style="display:flex;gap:16px;flex-wrap:wrap">';
    chips.forEach(function(c) {
      html += '<div style="text-align:center;padding:10px 16px;background:' + (c.warn?'#FEF2F2':'#F8FAFC') + ';border-radius:10px;border:1px solid ' + (c.warn?'#FECACA':'#E2E8F0') + '">';
      html += '<div style="font-size:10px;color:#94A3B8;font-weight:600;text-transform:uppercase;letter-spacing:.4px">' + c.label + '</div>';
      html += '<div style="font-size:15px;font-weight:800;color:' + (c.warn?'#EF4444':'#1B3A5C') + '">' + esc(String(c.val||'—')) + '</div>';
      html += '</div>';
    });
    html += '</div></div>';
    return html;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // FEATURE C — SIDEBAR STATE LABELS
  // Injects live counts/states into tab labels
  // ══════════════════════════════════════════════════════════════════════════
  function getSidebarTabBadge(tabId) {
    try {
      switch(tabId) {
        case 'labs':
          var abn = 0;
          if (window.LABS) LABS.forEach(function(lab){ lab.groups.forEach(function(g){ abn += g.results.filter(function(r){ return r.flag; }).length; }); });
          return abn > 0 ? '<span style="margin-left:auto;font-size:9px;font-weight:700;background:#EF4444;color:#fff;padding:1px 5px;border-radius:8px">' + abn + '</span>' : '';
        case 'documentation':
          var words = 0;
          if (window.S && S.noteFields) Object.values(S.noteFields).forEach(function(v){ if(v) words += v.trim().split(/\s+/).filter(Boolean).length; });
          if (window.S && S.submitted) return '<span style="margin-left:auto;font-size:9px;font-weight:600;color:#10B981">✓</span>';
          return words > 0 ? '<span style="margin-left:auto;font-size:9px;color:#94A3B8">' + words + 'w</span>' : '<span style="margin-left:auto;font-size:9px;color:#F59E0B">empty</span>';
        case 'coach':
          var msgs = (window.S && S.coachMessages) ? S.coachMessages.filter(function(m){ return m.role==='user'; }).length : 0;
          return msgs > 0 ? '<span style="margin-left:auto;font-size:9px;color:#2874A6">' + msgs + ' msg</span>' : '';
        case 'medications':
          var medCount = window.MEDICATIONS ? MEDICATIONS.length : 0;
          return medCount > 0 ? '<span style="margin-left:auto;font-size:9px;color:#94A3B8">' + medCount + '</span>' : '';
        case 'orders':
          var orderCount = (window.S && S.labOrders) ? (S.labOrders.length + (S.imgOrders||[]).length) : 0;
          return orderCount > 0 ? '<span style="margin-left:auto;font-size:9px;color:#10B981">' + orderCount + '</span>' : '';
        case 'crt':
          var crtSt = getCRTState();
          if (!crtSt) return '';
          if (crtSt.completed) return '<span style="margin-left:auto;font-size:9px;color:#10B981">✓</span>';
          return crtSt.ordersPlaced && crtSt.ordersPlaced.length > 0 ? '<span style="margin-left:auto;font-size:9px;color:#2874A6">' + crtSt.ordersPlaced.length + ' orders</span>' : '';
        case 'vitals':
          var abnVitals = 0;
          if (window.VITALS && VITALS[0]) {
            var v0 = VITALS[0];
            if (parseInt(v0.hr) > 100 || parseInt(v0.hr) < 60) abnVitals++;
            if (parseInt(v0.spo2) < 95) abnVitals++;
            if (parseInt(v0.bp) < 90) abnVitals++;
          }
          return abnVitals > 0 ? '<span style="margin-left:auto;font-size:9px;font-weight:700;color:#EF4444">' + abnVitals + ' ⚠</span>' : '';
        default:
          return '';
      }
    } catch(e) { return ''; }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // FEATURE D — ED TIMER (optional, opt-in)
  // ══════════════════════════════════════════════════════════════════════════
  var _timerInterval = null;
  var _timerStarted = false;

  function renderEDTimerButton() {
    if (window.S && S.clinicalSetting !== 'ed') return '';
    var crtState = getCRTState();
    var startedAt = crtState ? crtState.startedAt : null;
    var timerActive = sessionStorage.getItem('rdx-ed-timer-active') === '1';

    if (!timerActive) {
      return '<button id="rdx-timer-btn" onclick="RDXIntegration.startTimer()" title="Optional: time yourself to practice under OSCE conditions" aria-label="Start optional OSCE practice timer" style="display:flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:8px;color:#fff;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit">⏱️ Start Timer</button>';
    }

    var elapsed = startedAt ? Math.floor((Date.now() - startedAt) / 1000) : 0;
    var mins = Math.floor(elapsed / 60);
    var secs = elapsed % 60;
    var urgency = mins >= 20 ? '#EF4444' : mins >= 10 ? '#F59E0B' : '#10B981';
    return '<div id="rdx-timer-display" style="display:flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(0,0,0,.2);border-radius:8px;font-size:13px;font-weight:700;color:' + urgency + ';cursor:pointer" onclick="RDXIntegration.stopTimer()" title="Click to stop timer">⏱️ ' + mins + ':' + (secs < 10 ? '0' : '') + secs + '</div>';
  }

  function tickTimer() {
    var display = document.getElementById('rdx-timer-display');
    if (!display) return;
    var crtState = getCRTState();
    var startedAt = crtState ? crtState.startedAt : (parseInt(sessionStorage.getItem('rdx-timer-start')) || Date.now());
    var elapsed = Math.floor((Date.now() - startedAt) / 1000);
    var mins = Math.floor(elapsed / 60);
    var secs = elapsed % 60;
    var urgency = mins >= 20 ? '#EF4444' : mins >= 10 ? '#F59E0B' : '#10B981';
    display.style.color = urgency;
    display.textContent = '⏱️ ' + mins + ':' + (secs < 10 ? '0' : '') + secs;

    // Gentle nudge at 10 and 20 mins
    if ((elapsed === 600 || elapsed === 1200) && window.showToast) {
      showToast('⏱️ ' + mins + ' minutes elapsed — how is your reasoning progressing?', 'info');
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // FEATURE E — AUTO-SURFACED MECHANISMDX CONCEPTS
  // Pulls from CRT keyLearningPoints + diagnosis and surfaces concept chips
  // ══════════════════════════════════════════════════════════════════════════
  function renderConceptSidebar() {
    var crt = getCRTData();
    if (!crt) return '';

    var concepts = [];

    // Pull from CRT diagnosis → generate concept topics
    if (crt.diagnosis) {
      concepts.push({ label: crt.diagnosis.split('(')[0].trim(), url: 'pathway.html?topic=' + encodeURIComponent((getCaseId()||'').replace(/-/g,' ')) });
    }

    // Pull from mustNotMiss — surface as concept chips
    if (crt.mustNotMiss && crt.mustNotMiss.length > 0) {
      crt.mustNotMiss.slice(0, 3).forEach(function(m) {
        var topic = m.replace(/[()]/g,'').split(' ').slice(0, 4).join(' ');
        concepts.push({ label: topic, url: 'pathway.html?topic=' + encodeURIComponent(topic), danger: true });
      });
    }

    // Pull from keyLearningPoints — extract key term
    if (crt.keyLearningPoints && crt.keyLearningPoints.length > 0) {
      crt.keyLearningPoints.slice(0, 3).forEach(function(pt) {
        var term = pt.replace(/[—\-]/g,' ').split('.')[0].trim().substring(0, 50);
        concepts.push({ label: term, url: 'pathway.html?topic=' + encodeURIComponent(term) });
      });
    }

    if (concepts.length === 0) return '';

    var html = '<div style="background:linear-gradient(180deg,#F0FDF4,#ECFDF5);border:1px solid #BBF7D0;border-radius:12px;padding:14px;margin-top:16px">';
    html += '<div style="font-size:11px;font-weight:700;color:#065F46;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">🧬 Related Concepts in MechanismDx</div>';
    concepts.forEach(function(c) {
      html += '<a href="' + esc(c.url) + '" target="_blank" style="display:flex;align-items:center;gap:8px;padding:7px 10px;background:#fff;border-radius:8px;border:1px solid ' + (c.danger ? '#FECACA' : '#D1FAE5') + ';margin-bottom:6px;text-decoration:none;transition:all .15s" onmouseover="this.style.background=\'#F0FDF4\'" onmouseout="this.style.background=\'#fff\'">';
      html += '<span style="font-size:14px">' + (c.danger ? '⚠️' : '🧬') + '</span>';
      html += '<span style="font-size:12px;font-weight:600;color:' + (c.danger ? '#DC2626' : '#065F46') + ';line-height:1.4">' + esc(c.label) + '</span>';
      html += '<span style="margin-left:auto;font-size:10px;color:#10B981">→</span>';
      html += '</a>';
    });
    html += '</div>';
    return html;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // FEATURE F — POST-SUBMISSION DEBRIEF CARD (CRT-powered)
  // Pulls CRT completion data into Documentation post-submit view
  // ══════════════════════════════════════════════════════════════════════════
  function renderPostSubmitDebrief() {
    if (!window.S || !S.submitted) return '';
    var crt = getCRTData();
    var crtState = getCRTState();
    var ddx = sessionStorage.getItem('rdx-ddx-' + (getCaseId()||''));

    var html = '<div style="background:linear-gradient(135deg,#F0FDF4,#ECFDF5);border:2px solid #10B981;border-radius:16px;padding:20px;margin-top:20px">';
    html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">';
    html += '<div style="font-size:24px">🎯</div>';
    html += '<div><div style="font-size:16px;font-weight:800;color:#065F46">Case Debrief</div>';
    html += '<div style="font-size:12px;color:#6EE7B7">Submitted — here\'s what to take away</div></div>';
    html += '</div>';

    // DDx comparison — what they wrote vs actual diagnosis
    if (ddx && crt) {
      html += '<div style="background:#fff;border-radius:10px;border:1px solid #D1FAE5;padding:14px;margin-bottom:12px">';
      html += '<div style="font-size:11px;font-weight:700;color:#065F46;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Your Initial Differential vs. Diagnosis</div>';
      html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">';
      html += '<div><div style="font-size:10px;color:#94A3B8;font-weight:600;margin-bottom:4px">YOUR DDx</div>';
      html += '<div style="font-size:12px;color:#374151;line-height:1.6;white-space:pre-line">' + esc(ddx) + '</div></div>';
      html += '<div><div style="font-size:10px;color:#94A3B8;font-weight:600;margin-bottom:4px">DIAGNOSIS</div>';
      html += '<div style="font-size:13px;font-weight:700;color:#065F46">' + esc(crt.diagnosis) + '</div>';
      if (crt.acuity) html += '<div style="margin-top:4px"><span style="padding:2px 8px;background:#FEE2E2;color:#DC2626;border-radius:4px;font-size:10px;font-weight:700">ESI ' + crt.acuity + '</span></div>';
      html += '</div>';
      html += '</div></div>';
    } else if (crt) {
      html += '<div style="background:#fff;border-radius:10px;border:1px solid #D1FAE5;padding:12px;margin-bottom:12px">';
      html += '<div style="font-size:11px;font-weight:700;color:#065F46;margin-bottom:4px">Diagnosis</div>';
      html += '<div style="font-size:14px;font-weight:700;color:#065F46">' + esc(crt.diagnosis) + '</div>';
      html += '</div>';
    }

    // CRT performance summary if available
    if (crtState && crt && crt.treatments) {
      var orders = crt.treatments.orders || [];
      var correct = (crtState.ordersPlaced||[]).filter(function(id){ var o=orders.find(function(x){return x.id===id}); return o&&o.correct; }).length;
      var total = orders.filter(function(o){ return o.correct; }).length;
      var missed = orders.filter(function(o){ return o.critical && o.correct && (crtState.ordersPlaced||[]).indexOf(o.id) < 0; });

      html += '<div style="background:#fff;border-radius:10px;border:1px solid #D1FAE5;padding:12px;margin-bottom:12px">';
      html += '<div style="font-size:11px;font-weight:700;color:#065F46;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Clinical Reasoning Trainer</div>';
      html += '<div style="display:flex;gap:16px">';
      html += '<div style="text-align:center"><div style="font-size:20px;font-weight:800;color:' + (correct/total >= .8 ? '#10B981' : '#F59E0B') + '">' + correct + '/' + total + '</div><div style="font-size:10px;color:#94A3B8">Correct orders</div></div>';
      html += '<div style="text-align:center"><div style="font-size:20px;font-weight:800;color:' + (crtState.pitfallsTriggered&&crtState.pitfallsTriggered.length > 0 ? '#EF4444' : '#10B981') + '">' + ((crtState.pitfallsTriggered||[]).length) + '</div><div style="font-size:10px;color:#94A3B8">Pitfalls hit</div></div>';
      html += '</div>';
      if (missed.length > 0) {
        html += '<div style="margin-top:10px;padding:8px;background:#FEF2F2;border-radius:8px">';
        html += '<div style="font-size:11px;font-weight:700;color:#DC2626;margin-bottom:4px">⚠️ Critical orders not placed:</div>';
        missed.forEach(function(o){ html += '<div style="font-size:12px;color:#374151;padding:2px 0">• ' + esc(o.name) + '</div>'; });
        html += '</div>';
      }
      html += '</div>';
    }

    // Must-not-miss from CRT
    if (crt && crt.mustNotMiss && crt.mustNotMiss.length > 0) {
      html += '<div style="background:#FEF2F2;border-radius:10px;border:1px solid #FECACA;padding:12px;margin-bottom:12px">';
      html += '<div style="font-size:11px;font-weight:700;color:#DC2626;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">🚨 Must Not Miss</div>';
      crt.mustNotMiss.slice(0, 3).forEach(function(pt) {
        html += '<div style="font-size:12px;color:#374151;padding:3px 0;border-bottom:1px solid #FEE2E2">• ' + esc(pt) + '</div>';
      });
      html += '</div>';
    }

    // Key learning points from CRT
    if (crt && crt.keyLearningPoints && crt.keyLearningPoints.length > 0) {
      html += '<div style="background:#fff;border-radius:10px;border:1px solid #D1FAE5;padding:12px;margin-bottom:12px">';
      html += '<div style="font-size:11px;font-weight:700;color:#065F46;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">📚 Key Learning Points</div>';
      crt.keyLearningPoints.slice(0, 4).forEach(function(pt) {
        html += '<div style="font-size:12px;color:#374151;padding:3px 0;border-bottom:1px solid #F0FDF4;line-height:1.5">✓ ' + esc(pt) + '</div>';
      });
      html += '</div>';
    }

    // Common pitfalls
    if (crt && crt.commonPitfalls && crt.commonPitfalls.length > 0) {
      html += '<div style="background:#FFFBEB;border-radius:10px;border:1px solid #FDE68A;padding:12px;margin-bottom:12px">';
      html += '<div style="font-size:11px;font-weight:700;color:#92400E;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">⚡ Common Pitfalls</div>';
      crt.commonPitfalls.slice(0, 3).forEach(function(pt) {
        html += '<div style="font-size:12px;color:#374151;padding:3px 0;border-bottom:1px solid #FEF3C7">⚠ ' + esc(pt) + '</div>';
      });
      html += '</div>';
    }

    // CTA — open CoachDx to discuss
    html += '<button onclick="switchTab(\'coach\')" style="width:100%;margin-top:4px;padding:12px;background:#2874A6;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit">🧠 Discuss with CoachDx →</button>';

    html += '</div>';
    return html;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // FEATURE G — ORDER REASONING FIELD
  // Adds "Why are you ordering this?" to the orders/CRT panel
  // Hooks into CRT's order placement flow
  // ══════════════════════════════════════════════════════════════════════════
  var _orderReasons = {};

  function getOrderReasoning(orderId) {
    try {
      var stored = sessionStorage.getItem('rdx-order-reasons-' + (getCaseId()||''));
      var reasons = stored ? JSON.parse(stored) : {};
      return reasons[orderId] || '';
    } catch(e) { return ''; }
  }

  function saveOrderReasoning(orderId, reason) {
    try {
      var key = 'rdx-order-reasons-' + (getCaseId()||'');
      var stored = sessionStorage.getItem(key);
      var reasons = stored ? JSON.parse(stored) : {};
      reasons[orderId] = reason;
      sessionStorage.setItem(key, JSON.stringify(reasons));
    } catch(e) {}
  }

  // ══════════════════════════════════════════════════════════════════════════
  // PUBLIC API
  // ══════════════════════════════════════════════════════════════════════════
  window.RDXIntegration = {

    // DDx
    saveDDx: function() {
      var inp = document.getElementById('rdx-ddx-input');
      if (!inp || !inp.value.trim()) return;
      var id = getCaseId() || 'unknown';
      sessionStorage.setItem('rdx-ddx-' + id, inp.value.trim());
      var modal = document.getElementById('rdx-ddx-modal');
      if (modal) modal.remove();
      if (window.showToast) showToast('✓ Differential saved — it will appear in your debrief after submission');
      // Seed CoachDx with the DDx
      if (window.S) {
        S.coachMessages = S.coachMessages || [];
        S.coachMessages.unshift({
          role: 'user',
          content: 'Before taking the history, here is my initial differential based on the chart:\n\n' + inp.value.trim()
        });
      }
    },

    dismissDDx: function() {
      _ddxDismissed = true;
      var modal = document.getElementById('rdx-ddx-modal');
      if (modal) modal.remove();
    },

    startTimer: function() {
      var crtState = getCRTState();
      var startTime = crtState ? crtState.startedAt : Date.now();
      sessionStorage.setItem('rdx-ed-timer-active', '1');
      sessionStorage.setItem('rdx-timer-start', String(startTime));
      _timerInterval = setInterval(tickTimer, 1000);
      if (window.render) render();
    },

    stopTimer: function() {
      sessionStorage.removeItem('rdx-ed-timer-active');
      if (_timerInterval) { clearInterval(_timerInterval); _timerInterval = null; }
      if (window.render) render();
    },

    // DDx prompt — exposed so guide button can call it
    showDDxPrompt:          showDDxPrompt,

    // Renderers exposed for EMR hooks
    renderVitalsSparkline:  renderVitalsSparkline,
    renderConceptSidebar:   renderConceptSidebar,
    renderPostSubmitDebrief:renderPostSubmitDebrief,
    renderEDTimerButton:    renderEDTimerButton,
    getSidebarTabBadge:     getSidebarTabBadge,
    startDDxTimer:          startDDxTimer,
    saveOrderReasoning:     saveOrderReasoning,
    getOrderReasoning:      getOrderReasoning,
  };

  // Auto-start DDx timer when on chart tabs
  document.addEventListener('click', function() {
    if (window.RDXIntegration) startDDxTimer();
  });

  // Restart timer on tab switches
  document.addEventListener('rdx-tab-switch', function() {
    startDDxTimer();
  });

  // Resume interval if timer was active
  if (sessionStorage.getItem('rdx-ed-timer-active') === '1') {
    _timerInterval = setInterval(tickTimer, 1000);
  }

})();
