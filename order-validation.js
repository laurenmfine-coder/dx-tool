/* order-validation.js — Clinical Order Validation Engine
 *
 * Validates student lab and imaging orders against:
 *   1. Case-specific wrong orders from CRT_DATA[CASE_ID].treatments.orders
 *      (correct:false entries with teaching points + references)
 *   2. Global clinical safety rules — evidence-based contraindications
 *      that apply regardless of case context
 *
 * API (all methods are no-ops if CASE_ID or CRT_DATA not available,
 * so the EMR degrades gracefully when case data isn't loaded):
 *
 *   OrderValidator.validate({id, name, type})
 *     → { status:'safe'|'warning'|'danger', alerts:[], teaching:'', order:null|{} }
 *
 *   OrderValidator.log(result, action, studentName, caseId)
 *   OrderValidator.showToast(result)
 *   OrderValidator.renderSummary(studentName, caseId) → HTML string
 *   OrderValidator.getAnalytics(studentName, caseId) → object
 *   OrderValidator.getCRDAVector(studentName, caseId) → number[]
 *
 * Evidence basis:
 *   Global safety rules are grounded in open-access clinical guidelines.
 *   Case-specific rules are sourced from CRT case data which itself cites
 *   StatPearls and major society guidelines (ACC/AHA, IDSA, etc.).
 *
 *   See docs/simulation-design-evidence-base.md for framework context.
 */
(function () {
  'use strict';

  // ── Session log ────────────────────────────────────────────────
  // Keyed by studentName + '-' + caseId
  var _logs = {};

  function _logKey(student, caseId) {
    return (student || 'anon') + '::' + (caseId || 'unknown');
  }

  // ── Global safety rules ────────────────────────────────────────
  // These apply regardless of the active case.
  // Each rule: { match: RegExp or string[], status, message, teaching, source }
  //
  // Sources:
  //  - Radiation safety: ACR Appropriateness Criteria (acr.org)
  //  - Contrast nephropathy: ACR Manual on Contrast Media 2023
  //  - Duplicate testing: ABIM Choosing Wisely (choosingwisely.org)
  //  - Radiation in pregnancy: ACOG Practice Bulletin 723 (2017)
  var GLOBAL_RULES = [
    // Radiation exposure — always flag CT with contrast when renal function unknown
    {
      ids: ['ctchest', 'ctabdomen', 'cta_pe'],
      type: 'imaging',
      status: 'warning',
      message: 'CT with contrast ordered — verify renal function',
      teaching: 'IV contrast carries risk of contrast-induced nephropathy in patients with eGFR < 30 mL/min. ' +
        'Check creatinine before ordering contrast-enhanced CT. ' +
        'ACR Manual on Contrast Media (2023): premedication and hydration protocols apply when eGFR < 30.',
      source: 'ACR Manual on Contrast Media, 2023. https://www.acr.org/Clinical-Resources/Contrast-Manual'
    },
    // Redundant coagulation ordering
    {
      ids: ['pt_inr', 'ptt'],
      type: 'lab',
      status: 'warning',
      message: 'Coagulation studies — ensure clinical indication',
      teaching: 'Routine preoperative coagulation screening is not recommended without a specific bleeding history or anticoagulation. ' +
        'ABIM Choosing Wisely: avoid routine coagulation studies in patients without clinical indication.',
      source: 'ABIM Choosing Wisely. https://www.choosingwisely.org'
    },
    // PSA in women / inappropriate context
    {
      ids: ['psa'],
      type: 'lab',
      status: 'warning',
      message: 'PSA ordered — confirm patient sex and clinical indication',
      teaching: 'PSA (Prostate Specific Antigen) is only applicable in patients with a prostate. ' +
        'USPSTF recommends shared decision-making for PSA screening in men aged 55–69; ' +
        'not recommended for routine screening in men ≥ 70.',
      source: 'USPSTF PSA Screening Recommendation. https://www.uspreventiveservicestaskforce.org'
    },
    // Fasting lipids — flag if urgent context
    {
      ids: ['lipid'],
      type: 'lab',
      status: 'warning',
      message: 'Fasting lipid panel — requires 9–12 hours fasting',
      teaching: 'Non-fasting lipid panels are now acceptable for cardiovascular risk screening (ACC/AHA 2018). ' +
        'However, fasting samples are still preferred when triglycerides are the primary concern. ' +
        'Consider non-fasting if patient is acutely ill.',
      source: 'ACC/AHA 2018 Cholesterol Guideline. https://www.ahajournals.org/doi/10.1161/CIR.0000000000000625'
    }
  ];

  // ── Helpers ────────────────────────────────────────────────────
  function _getCaseOrders() {
    var caseId = window.CASE_ID;
    var crtData = window.CRT_DATA;
    if (!caseId || !crtData || !crtData[caseId]) return [];
    var orders = (crtData[caseId].treatments && crtData[caseId].treatments.orders) || [];
    return orders;
  }

  function _normName(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function _matchesOrder(orderId, orderName, crtOrder) {
    // Match by explicit id match (if crt order has id field)
    if (crtOrder.id && crtOrder.id.toLowerCase() === orderId.toLowerCase()) return true;
    // Match by name similarity (first 3 meaningful words)
    var normCrt = _normName(crtOrder.name || '');
    var normReq = _normName(orderName || '');
    var crtWords = normCrt.split(' ').filter(function(w) { return w.length > 3; }).slice(0, 3);
    return crtWords.length > 0 && crtWords.every(function(w) { return normReq.indexOf(w) !== -1; });
  }

  // ── Core: validate ─────────────────────────────────────────────
  function validate(order) {
    var id   = (order.id   || '').toLowerCase();
    var name = (order.name || '');
    var type = (order.type || 'lab');

    var alerts  = [];
    var status  = 'safe';
    var teaching = '';
    var matchedCrtOrder = null;

    // 1. Check case-specific wrong orders from CRT data
    var caseOrders = _getCaseOrders();
    var wrongOrders = caseOrders.filter(function(o) { return o.correct === false; });

    wrongOrders.forEach(function(wo) {
      if (_matchesOrder(id, name, wo)) {
        matchedCrtOrder = wo;
        status   = 'danger';
        teaching = (wo.teaching || '').replace(/^⚠️?\s*/, '');
        alerts.push({
          level: 'danger',
          message: name + ' — contraindicated or harmful in this case',
          teaching: teaching,
          source: wo.references && wo.references[0] ? wo.references[0].source + ' · ' + wo.references[0].url : ''
        });
      }
    });

    // 2. Check case-specific correct/critical orders — if missing, no alert
    //    (positive reinforcement happens elsewhere, not in validation)

    // 3. Apply global safety rules (only if not already flagged as danger)
    if (status !== 'danger') {
      GLOBAL_RULES.forEach(function(rule) {
        if (rule.type !== type) return;
        if (rule.ids.indexOf(id) !== -1) {
          if (rule.status === 'danger') status = 'danger';
          else if (status === 'safe') status = 'warning';
          alerts.push({
            level: rule.status,
            message: rule.message,
            teaching: rule.teaching,
            source: rule.source
          });
        }
      });
    }

    return {
      status:   status,
      alerts:   alerts,
      teaching: teaching || (alerts.length > 0 ? alerts[0].teaching : ''),
      order:    matchedCrtOrder,
      orderId:  id,
      orderName: name,
      orderType: type
    };
  }

  // ── Log ────────────────────────────────────────────────────────
  function log(result, action, studentName, caseId) {
    var key = _logKey(studentName, caseId);
    if (!_logs[key]) _logs[key] = [];
    _logs[key].push({
      timestamp:   new Date().toISOString(),
      orderId:     result.orderId,
      orderName:   result.orderName,
      orderType:   result.orderType,
      status:      result.status,
      action:      action,           // 'placed', 'cancelled', 'overridden'
      alertCount:  result.alerts.length,
      teaching:    result.teaching ? result.teaching.substring(0, 120) : ''
    });
    // Persist to localStorage for cross-session summary
    try {
      var lsKey = 'rdx-ov-' + key;
      var stored = JSON.parse(localStorage.getItem(lsKey) || '[]');
      stored.push(_logs[key][_logs[key].length - 1]);
      // Keep last 100 entries
      if (stored.length > 100) stored = stored.slice(-100);
      localStorage.setItem(lsKey, JSON.stringify(stored));
    } catch(e) {}
  }

  // ── showToast ──────────────────────────────────────────────────
  function showToast(result) {
    if (!result || !result.alerts || result.alerts.length === 0) return;
    var alert = result.alerts[0];
    var bg = result.status === 'danger' ? '#FEF2F2' : '#FEF3C7';
    var border = result.status === 'danger' ? '#FCA5A5' : '#FCD34D';
    var textColor = result.status === 'danger' ? '#991B1B' : '#92400E';
    var icon = result.status === 'danger' ? '⚠️' : '⚡';

    var el = document.createElement('div');
    el.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);' +
      'background:' + bg + ';border:1.5px solid ' + border + ';border-radius:10px;' +
      'padding:12px 18px;max-width:480px;width:90%;z-index:9999;' +
      'box-shadow:0 4px 16px rgba(0,0,0,.12);font-family:inherit;';
    el.innerHTML =
      '<div style="font-size:13px;font-weight:700;color:' + textColor + ';margin-bottom:4px">' +
        icon + ' ' + (alert.message || 'Order alert') +
      '</div>' +
      '<div style="font-size:12px;color:' + textColor + ';line-height:1.5">' +
        (alert.teaching ? alert.teaching.substring(0, 200) + (alert.teaching.length > 200 ? '…' : '') : '') +
      '</div>' +
      (alert.source ? '<div style="font-size:10px;color:#94A3B8;margin-top:4px">' + alert.source.split('·')[0] + '</div>' : '') +
      '<button onclick="this.parentNode.remove()" style="position:absolute;top:8px;right:10px;background:none;border:none;font-size:16px;cursor:pointer;color:' + textColor + '">✕</button>';
    document.body.appendChild(el);
    setTimeout(function() { if (el.parentNode) el.parentNode.removeChild(el); }, 7000);
  }

  // ── getLog ─────────────────────────────────────────────────────
  function _getLog(studentName, caseId) {
    var key = _logKey(studentName, caseId);
    // Prefer in-memory log; fall back to localStorage
    if (_logs[key] && _logs[key].length > 0) return _logs[key];
    try {
      return JSON.parse(localStorage.getItem('rdx-ov-' + key) || '[]');
    } catch(e) { return []; }
  }

  // ── getAnalytics ───────────────────────────────────────────────
  function getAnalytics(studentName, caseId) {
    var entries = _getLog(studentName, caseId);
    var total    = entries.length;
    var safe     = entries.filter(function(e) { return e.status === 'safe'; }).length;
    var warnings = entries.filter(function(e) { return e.status === 'warning'; }).length;
    var dangers  = entries.filter(function(e) { return e.status === 'danger'; }).length;
    var overridden = entries.filter(function(e) { return e.action === 'overridden'; }).length;
    var cancelled  = entries.filter(function(e) { return e.action === 'cancelled'; }).length;

    // Safety score: 100 - (dangers * 15) - (overridden * 10) - (warnings * 2)
    var safetyScore = Math.max(0, Math.min(100,
      100 - (dangers * 15) - (overridden * 10) - (warnings * 2)
    ));

    return {
      total:       total,
      safe:        safe,
      warnings:    warnings,
      dangers:     dangers,
      overridden:  overridden,
      cancelled:   cancelled,
      safetyScore: safetyScore,
      entries:     entries.slice(-20)
    };
  }

  // ── getCRDAVector ──────────────────────────────────────────────
  // Returns a 5-element numeric array for CRDA longitudinal analysis:
  // [safetyScore/100, dangerRate, warningRate, overrideRate, cancelRate]
  function getCRDAVector(studentName, caseId) {
    var a = getAnalytics(studentName, caseId);
    if (a.total === 0) return [1, 0, 0, 0, 0];
    return [
      a.safetyScore / 100,
      a.dangers    / a.total,
      a.warnings   / a.total,
      a.overridden / a.total,
      a.cancelled  / a.total
    ];
  }

  // ── renderSummary ──────────────────────────────────────────────
  function renderSummary(studentName, caseId) {
    var a = getAnalytics(studentName, caseId);
    if (a.total === 0) return '';

    var scoreColor = a.safetyScore >= 85 ? '#059669' : a.safetyScore >= 65 ? '#D97706' : '#DC2626';
    var html = '<div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:18px;margin:12px 0">';
    html += '<div style="font-size:13px;font-weight:700;color:#1B4F72;margin-bottom:12px">🔬 Order Validation Summary</div>';

    // Safety score
    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">';
    html += '<div style="font-size:24px;font-weight:800;color:' + scoreColor + '">' + a.safetyScore + '</div>';
    html += '<div style="flex:1">';
    html += '<div style="height:7px;background:#E2E8F0;border-radius:4px;overflow:hidden"><div style="height:100%;width:' + a.safetyScore + '%;background:' + scoreColor + ';border-radius:4px"></div></div>';
    html += '<div style="font-size:11px;color:#64748B;margin-top:3px">Safety score — ' + a.total + ' orders placed</div>';
    html += '</div></div>';

    // Breakdown chips
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">';
    if (a.safe > 0)      html += _chip(a.safe + ' safe',      '#059669', '#ECFDF5');
    if (a.warnings > 0)  html += _chip(a.warnings + ' warning', '#D97706', '#FEF3C7');
    if (a.dangers > 0)   html += _chip(a.dangers + ' dangerous', '#DC2626', '#FEF2F2');
    if (a.overridden > 0) html += _chip(a.overridden + ' overridden', '#7C3AED', '#EDE9FE');
    if (a.cancelled > 0)  html += _chip(a.cancelled + ' cancelled', '#64748B', '#F1F5F9');
    html += '</div>';

    // Dangerous orders detail
    var dangerEntries = a.entries.filter(function(e) { return e.status === 'danger'; });
    if (dangerEntries.length > 0) {
      html += '<div style="font-size:12px;font-weight:700;color:#DC2626;margin-bottom:6px">Contraindicated orders:</div>';
      dangerEntries.forEach(function(e) {
        html += '<div style="font-size:12px;padding:8px 10px;background:#FEF2F2;border-left:3px solid #DC2626;border-radius:0 6px 6px 0;margin-bottom:5px">';
        html += '<strong>' + (e.action === 'cancelled' ? '✓ Cancelled: ' : e.action === 'overridden' ? '⚠ Overridden: ' : '✗ Placed: ') + '</strong>';
        html += _escHtml(e.orderName);
        if (e.teaching) html += '<br><span style="color:#991B1B;font-size:11px">' + _escHtml(e.teaching) + '</span>';
        html += '</div>';
      });
    }

    // Warnings detail
    var warnEntries = a.entries.filter(function(e) { return e.status === 'warning' && e.action !== 'cancelled'; });
    if (warnEntries.length > 0) {
      html += '<div style="font-size:12px;font-weight:700;color:#D97706;margin-bottom:6px;margin-top:8px">Orders requiring attention:</div>';
      warnEntries.forEach(function(e) {
        html += '<div style="font-size:12px;padding:8px 10px;background:#FEF3C7;border-left:3px solid #D97706;border-radius:0 6px 6px 0;margin-bottom:5px">';
        html += _escHtml(e.orderName);
        if (e.teaching) html += '<br><span style="color:#92400E;font-size:11px">' + _escHtml(e.teaching.substring(0, 120)) + '</span>';
        html += '</div>';
      });
    }

    html += '</div>';
    return html;
  }

  function _chip(text, color, bg) {
    return '<span style="display:inline-block;padding:3px 8px;background:' + bg + ';color:' + color +
      ';border-radius:20px;font-size:11px;font-weight:600">' + text + '</span>';
  }

  function _escHtml(s) {
    return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ── Export ─────────────────────────────────────────────────────
  window.OrderValidator = {
    validate:      validate,
    log:           log,
    showToast:     showToast,
    renderSummary: renderSummary,
    getAnalytics:  getAnalytics,
    getCRDAVector: getCRDAVector
  };

})();
