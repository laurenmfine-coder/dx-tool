/**
 * rdx-rpfs.js — Reasoning Pathway Fingerprint System
 *
 * Responsibilities:
 *  1. Listen for `rdx-rpfs-update` events (dispatched by consult-callback + CRT)
 *  2. Persist events to localStorage (`rdx-rpfs-events`, max 500)
 *  3. Expose RDX_RPFS.computeCRTFingerprint(caseId, state, crtData)
 *     — called by crt-chart.js on case completion to emit a CRT-sourced RPFS event
 *  4. Expose RDX_RPFS.getSummary() — aggregated dimension scores for analytics dashboard
 *  5. Render post-case RPFS panel into a target element (used by virtual-emr CRT tab)
 */

(function (window) {
  'use strict';

  var STORAGE_KEY = 'rdx-rpfs-events';
  var MAX_EVENTS  = 500;

  // ─── 8 RPFS Dimensions ───────────────────────────────────────────────────
  var DIMENSIONS = [
    'Data Gathering',
    'Problem Representation',
    'Hypothesis Generation',
    'Diagnostic Verification',
    'Bayesian Updating',
    'Cognitive Flexibility',
    'Illness Script Matching',
    'Metacognition'
  ];

  // ─── Storage helpers ──────────────────────────────────────────────────────
  function loadEvents() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch (e) { return []; }
  }

  function saveEvents(events) {
    try {
      if (events.length > MAX_EVENTS) events = events.slice(-MAX_EVENTS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    } catch (e) {}
  }

  function appendEvent(evt) {
    var events = loadEvents();
    events.push(evt);
    saveEvents(events);
  }

  // ─── CRT → RPFS dimension mapping ────────────────────────────────────────
  // Given CRT case state and data, derive scores for each RPFS dimension.
  function computeCRTFingerprint(caseId, state, crtData) {
    if (!crtData || !crtData.treatments) return null;
    var orders   = crtData.treatments.orders || [];
    var placed   = state.ordersPlaced || [];
    var pitfalls = state.pitfallsTriggered || [];

    var totalCorrect   = orders.filter(function (o) { return o.correct; }).length;
    var totalCritical  = orders.filter(function (o) { return o.correct && o.critical; }).length;
    var placedOrders   = orders.filter(function (o) { return placed.includes(o.id); });
    var correctPlaced  = placedOrders.filter(function (o) { return o.correct; }).length;
    var criticalPlaced = placedOrders.filter(function (o) { return o.correct && o.critical; }).length;
    var wrongPlaced    = placedOrders.filter(function (o) { return !o.correct; }).length;
    var pitfallCount   = pitfalls.length;

    // Phase breadth: how many distinct phases covered by correct orders
    var phasesHit = {};
    placedOrders.filter(function (o) { return o.correct; }).forEach(function (o) {
      if (o.phase != null) phasesHit[o.phase] = true;
    });
    var phaseScore = Object.keys(phasesHit).length;
    var totalPhases = Math.max(1, (crtData.treatments.phases || []).length);

    // Derived scores (0–100)
    var correctRatio   = totalCorrect  > 0 ? correctPlaced  / totalCorrect  : 0;
    var criticalRatio  = totalCritical > 0 ? criticalPlaced / totalCritical : 1; // no critical = full credit
    var wrongPenalty   = Math.max(0, 1 - (wrongPlaced * 0.12));   // -12% per wrong order
    var pitfallPenalty = Math.max(0, 1 - (pitfallCount * 0.2));   // -20% per pitfall triggered
    var phaseRatio     = phaseScore / totalPhases;

    function pct(v) { return Math.round(Math.min(100, Math.max(0, v * 100))); }

    var dimensions = {
      'Data Gathering':         pct(correctRatio * wrongPenalty),
      'Problem Representation': pct(phaseRatio * wrongPenalty),
      'Hypothesis Generation':  pct((correctRatio * 0.6 + phaseRatio * 0.4) * wrongPenalty),
      'Diagnostic Verification':pct(criticalRatio * pitfallPenalty),
      'Bayesian Updating':      pct(phaseRatio * pitfallPenalty),
      'Cognitive Flexibility':  pct((1 - (wrongPlaced / Math.max(1, placed.length))) * wrongPenalty),
      'Illness Script Matching':pct(criticalRatio * correctRatio),
      'Metacognition':          pct(pitfallPenalty * (placed.length > 0 ? 1 : 0))
    };

    var overall = Math.round(
      Object.values(dimensions).reduce(function (a, b) { return a + b; }, 0) / DIMENSIONS.length
    );

    var evt = {
      tool:       'CRT',
      timestamp:  new Date().toISOString(),
      caseId:     caseId,
      diagnosis:  crtData.diagnosis || caseId,
      category:   crtData.category  || '',
      dimensions: dimensions,
      overall:    overall,
      meta: {
        ordersPlaced:   placed.length,
        correctPlaced:  correctPlaced,
        wrongPlaced:    wrongPlaced,
        criticalPlaced: criticalPlaced,
        pitfallsHit:    pitfallCount,
        phasesCompleted:phaseScore
      }
    };

    appendEvent(evt);
    window.dispatchEvent(new CustomEvent('rdx-rpfs-update', { detail: evt }));
    return evt;
  }

  // ─── Aggregated summary for analytics dashboard ───────────────────────────
  function getSummary(filterTool) {
    var events = loadEvents();
    if (filterTool) events = events.filter(function (e) { return e.tool === filterTool; });
    if (!events.length) return null;

    var totals = {};
    DIMENSIONS.forEach(function (d) { totals[d] = 0; });
    var count = 0;

    events.forEach(function (evt) {
      if (!evt.dimensions) return;
      DIMENSIONS.forEach(function (d) {
        if (typeof evt.dimensions[d] === 'number') totals[d] += evt.dimensions[d];
      });
      count++;
    });

    if (!count) return null;

    var averages = {};
    DIMENSIONS.forEach(function (d) {
      averages[d] = { score: Math.round(totals[d] / count), prior: 0 };
    });

    // Calculate trend: compare last 5 vs prior 5 events
    if (events.length >= 6) {
      var recent = events.slice(-5);
      var prior  = events.slice(-10, -5);
      DIMENSIONS.forEach(function (d) {
        var rAvg = recent.reduce(function (a, e) { return a + (e.dimensions && e.dimensions[d] ? e.dimensions[d] : 0); }, 0) / recent.length;
        var pAvg = prior.reduce(function (a, e)  { return a + (e.dimensions && e.dimensions[d] ? e.dimensions[d] : 0); }, 0) / prior.length;
        averages[d].prior = Math.round(pAvg);
        averages[d].trend = rAvg - pAvg; // positive = improving
      });
    }

    return {
      dimensions:   averages,
      totalSessions:count,
      overallAvg:   Math.round(events.reduce(function (a, e) { return a + (e.overall || 0); }, 0) / count),
      lastUpdated:  events[events.length - 1].timestamp,
      recentEvents: events.slice(-10).reverse()
    };
  }

  // ─── Render post-case RPFS panel ─────────────────────────────────────────
  // Injects a compact fingerprint panel into `targetEl` after CRT completion.
  function renderPostCasePanel(targetEl, rpfsEvent) {
    if (!targetEl || !rpfsEvent || !rpfsEvent.dimensions) return;

    function color(s) {
      return s >= 75 ? '#27AE60' : s >= 50 ? '#F39C12' : '#E74C3C';
    }

    var dims = DIMENSIONS.map(function (d) {
      return { name: d, score: rpfsEvent.dimensions[d] || 0 };
    });

    var weakest = dims.slice().sort(function (a, b) { return a.score - b.score; }).slice(0, 2);
    var strongest = dims.slice().sort(function (a, b) { return b.score - a.score; }).slice(0, 2);

    var barsHtml = dims.map(function (d) {
      return [
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px">',
        '<div style="font-size:11px;color:#666;width:130px;flex-shrink:0">' + d.name + '</div>',
        '<div style="flex:1;height:6px;background:#eee;border-radius:3px;overflow:hidden">',
        '<div style="width:' + d.score + '%;height:100%;border-radius:3px;background:' + color(d.score) + ';transition:width .8s"></div>',
        '</div>',
        '<div style="font-family:monospace;font-size:11px;font-weight:700;width:28px;text-align:right;color:' + color(d.score) + '">' + d.score + '</div>',
        '</div>'
      ].join('');
    }).join('');

    var insightsHtml = '';
    if (weakest.length) {
      insightsHtml += '<div style="margin-top:10px;padding:8px 12px;background:#FEF9E7;border-left:3px solid #F39C12;border-radius:0 4px 4px 0;font-size:12px">';
      insightsHtml += '<strong>Focus areas:</strong> ' + weakest.map(function (d) { return d.name + ' (' + d.score + ')'; }).join(', ');
      insightsHtml += '</div>';
    }
    if (strongest.length) {
      insightsHtml += '<div style="margin-top:6px;padding:8px 12px;background:#E9F7EF;border-left:3px solid #27AE60;border-radius:0 4px 4px 0;font-size:12px">';
      insightsHtml += '<strong>Strengths:</strong> ' + strongest.map(function (d) { return d.name + ' (' + d.score + ')'; }).join(', ');
      insightsHtml += '</div>';
    }

    var overallColor = color(rpfsEvent.overall);
    var panel = [
      '<div id="rdx-rpfs-panel" style="margin-top:16px;padding:16px;background:#fff;border:1px solid #ddd;border-radius:8px;border-top:3px solid #2874A6">',
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">',
      '<h4 style="margin:0;font-size:13px;font-weight:700;color:#1A5276">🧬 Reasoning Pathway Fingerprint</h4>',
      '<span style="font-family:monospace;font-size:16px;font-weight:700;color:' + overallColor + '">' + rpfsEvent.overall + '</span>',
      '</div>',
      barsHtml,
      insightsHtml,
      '<div style="margin-top:10px;text-align:right">',
      '<a href="learning-analytics.html" style="font-size:11px;color:#2874A6;text-decoration:none">📊 View full analytics →</a>',
      '</div>',
      '</div>'
    ].join('');

    // Remove any existing panel before inserting
    var existing = document.getElementById('rdx-rpfs-panel');
    if (existing) existing.remove();

    targetEl.insertAdjacentHTML('beforeend', panel);
  }

  // ─── Global event listener ────────────────────────────────────────────────
  // Persists every rdx-rpfs-update event; also forwards to analytics tracker
  window.addEventListener('rdx-rpfs-update', function (e) {
    var evt = e.detail;
    if (!evt) return;

    // Persist (consult-callback already appends for its own events;
    // CRT events are appended inside computeCRTFingerprint.
    // Only append here for events from other unknown sources.)
    if (evt.tool && evt.tool !== 'CRT' && evt.tool !== 'Consult Callback') {
      appendEvent(evt);
    }

    // Forward to Supabase analytics if available
    if (window.RDXAnalytics && window.RDXAnalytics.trackEvent) {
      try {
        window.RDXAnalytics.trackEvent('rpfs_update', {
          tool:    evt.tool,
          caseId:  evt.caseId || evt.patient || '',
          overall: evt.overall || 0,
          dimensions: evt.dimensions || {}
        });
      } catch (err) {}
    }
  });

  // ─── Public API ───────────────────────────────────────────────────────────
  window.RDX_RPFS = {
    computeCRTFingerprint: computeCRTFingerprint,
    getSummary:            getSummary,
    renderPostCasePanel:   renderPostCasePanel,
    loadEvents:            loadEvents,
    DIMENSIONS:            DIMENSIONS
  };

}(window));
