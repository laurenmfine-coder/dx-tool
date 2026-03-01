/* rdx-demo-tour.js — ReasonDx Guided Demo Walkthrough
 * Activated via URL param ?demo=1 or keyboard shortcut Ctrl+Shift+D
 * Shows a step-by-step overlay guiding investors through key features
 */
(function() {
  'use strict';
  
  var TOUR_STEPS = {
    'index.html': [
      { text: 'Welcome to ReasonDx — a clinical reasoning education platform with 256 virtual EMR cases, AI coaching, and real-time performance analytics.', pos: 'center' },
      { sel: '.pricing', text: 'Freemium model: $0 for core access, $14.99/mo Pro with full EMR + AI coaching + analytics. $99/yr saves 45%.', pos: 'top' },
      { sel: '.cta-btn, .hero-cta', text: 'One-click registration with Google SSO. Referral system built in (REF-XX codes with tiered rewards).', pos: 'bottom' }
    ],
    'hospital-3d.html': [
      { text: 'The Hospital Hub — every simulation accessible from one page. 10 departments covering the full clinical education journey.', pos: 'center' },
      { sel: '.floor-item', text: 'Each department is a complete simulation environment. Let\'s explore the ED Board first.', pos: 'right' }
    ],
    'ed-board-v2.html': [
      { text: 'ED Board — Full 8-room emergency department simulation. Students manage patient flow, triage, orders, and dispositions.', pos: 'center' },
      { text: 'Each room has a complete patient encounter with vitals, labs, imaging, and clinical decision support alerts.', pos: 'center' }
    ],
    'virtual-emr.html': [
      { text: 'Virtual EMR — The platform\'s flagship feature. 256 unique cases with full documentation workflow.', pos: 'center' },
      { text: '12 documentation sections scored by the CaseFrame Engine across 8 dimensions (100 points). Order Validation provides 61 CDS safety rules.', pos: 'center' },
      { text: 'Integrated: CoachDx AI tutoring, SpacedRep flashcard generation, structured ED-to-floor handoffs, and Study Hub cross-links.', pos: 'center' }
    ],
    'night-float.html': [
      { text: 'Night Float Simulator — 255 patients bridged from real ED handoff data. Nurse pages, decompensation events, and morning I-PASS grading.', pos: 'center' },
      { text: 'Reference-based scoring compares student handoffs against gold-standard I-PASS data. Severity-appropriate teaching moments.', pos: 'center' }
    ],
    'analytics-dashboard.html': [
      { text: 'Analytics Dashboard — Tracks progress across all platform engines: Board Prep, CaseFrame scoring, Order Safety, Night Float performance.', pos: 'center' },
      { text: 'Dimension breakdowns show exactly where students need to improve. Faculty can monitor cohort progress.', pos: 'center' }
    ],
    'crt-hub.html': [
      { text: 'CRT Hub — 262 clinical topics across 25 specialties in 5 learning formats: Modules, Expanded Cases, Adventures, CRTs, and Overviews.', pos: 'center' }
    ],
    'board-prep.html': [
      { text: 'Board Prep — 615 board-style questions with system-based practice, spaced repetition, and detailed analytics.', pos: 'center' }
    ],
    'simroomdx.html': [
      { text: 'SimRoomDx — AI-powered multi-character simulation room. Voice-enabled conversations with patients, nurses, attendings, and consultants.', pos: 'center' }
    ]
  };

  var currentStep = 0;
  var steps = [];
  var overlay = null;
  var active = false;

  function getPageKey() {
    var path = location.pathname;
    var file = path.split('/').pop() || 'index.html';
    return file;
  }

  function createOverlay() {
    if (overlay) return;
    
    var css = document.createElement('style');
    css.textContent = 
      '#rdx-tour-overlay{position:fixed;inset:0;z-index:99000;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(2px);animation:rdxTourIn .3s ease}' +
      '@keyframes rdxTourIn{from{opacity:0}to{opacity:1}}' +
      '#rdx-tour-card{background:#fff;border-radius:20px;max-width:520px;width:90%;padding:32px;box-shadow:0 25px 60px rgba(0,0,0,.3);position:relative;animation:rdxTourCardIn .3s ease}' +
      '@keyframes rdxTourCardIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}' +
      '.rdx-tour-badge{display:inline-block;background:#2874A6;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;margin-bottom:12px;letter-spacing:.04em}' +
      '.rdx-tour-text{font-size:16px;line-height:1.7;color:#1E293B;font-family:"DM Sans",sans-serif}' +
      '.rdx-tour-nav{display:flex;justify-content:space-between;align-items:center;margin-top:24px;padding-top:16px;border-top:1px solid #E2E8F0}' +
      '.rdx-tour-btn{padding:8px 20px;border-radius:10px;border:none;font-family:inherit;font-size:13px;font-weight:600;cursor:pointer;transition:all .15s}' +
      '.rdx-tour-btn.primary{background:#2874A6;color:#fff}.rdx-tour-btn.primary:hover{background:#1B4F72}' +
      '.rdx-tour-btn.ghost{background:none;color:#64748B}.rdx-tour-btn.ghost:hover{color:#1E293B}' +
      '.rdx-tour-dots{display:flex;gap:6px;align-items:center}' +
      '.rdx-tour-dot{width:8px;height:8px;border-radius:50%;background:#E2E8F0;transition:all .2s}' +
      '.rdx-tour-dot.active{background:#2874A6;width:20px;border-radius:4px}' +
      '.rdx-tour-step{font-size:12px;color:#94A3B8;font-weight:500}';
    document.head.appendChild(css);

    overlay = document.createElement('div');
    overlay.id = 'rdx-tour-overlay';
    overlay.addEventListener('click', function(e) { if (e.target === overlay) closeTour(); });
    document.body.appendChild(overlay);
  }

  function renderStep() {
    if (!steps[currentStep]) return closeTour();
    var step = steps[currentStep];
    var dots = steps.map(function(_, i) {
      return '<div class="rdx-tour-dot' + (i === currentStep ? ' active' : '') + '"></div>';
    }).join('');

    overlay.innerHTML = 
      '<div id="rdx-tour-card">' +
        '<div class="rdx-tour-badge">DEMO WALKTHROUGH</div>' +
        '<div class="rdx-tour-step">Step ' + (currentStep + 1) + ' of ' + steps.length + '</div>' +
        '<div class="rdx-tour-text" style="margin-top:12px">' + step.text + '</div>' +
        '<div class="rdx-tour-nav">' +
          '<button class="rdx-tour-btn ghost" onclick="window._rdxTourPrev()">← Back</button>' +
          '<div class="rdx-tour-dots">' + dots + '</div>' +
          '<button class="rdx-tour-btn primary" onclick="window._rdxTourNext()">' + (currentStep < steps.length - 1 ? 'Next →' : 'Finish ✓') + '</button>' +
        '</div>' +
      '</div>';
  }

  function openTour() {
    var key = getPageKey();
    steps = TOUR_STEPS[key] || [{ text: 'This is the ' + document.title + ' page. Use the navigation bar to explore the full platform.', pos: 'center' }];
    currentStep = 0;
    active = true;
    createOverlay();
    overlay.style.display = 'flex';
    renderStep();
  }

  function closeTour() {
    active = false;
    if (overlay) overlay.style.display = 'none';
  }

  window._rdxTourNext = function() {
    currentStep++;
    if (currentStep >= steps.length) closeTour();
    else renderStep();
  };

  window._rdxTourPrev = function() {
    if (currentStep > 0) { currentStep--; renderStep(); }
  };

  window.DxDemoTour = { open: openTour, close: closeTour };

  // Auto-activate on ?demo=1
  if (location.search.indexOf('demo=1') !== -1) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { setTimeout(openTour, 1000); });
    } else {
      setTimeout(openTour, 1000);
    }
  }

  // Keyboard shortcut: Ctrl+Shift+D
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
      e.preventDefault();
      if (active) closeTour(); else openTour();
    }
  });

  // Add demo button to footer or nav if on demo mode
  if (location.search.indexOf('demo=1') !== -1) {
    var btn = document.createElement('button');
    btn.textContent = '🎯 Demo Tour';
    btn.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:98000;background:#2874A6;color:#fff;border:none;padding:10px 18px;border-radius:12px;font-family:"DM Sans",sans-serif;font-weight:600;font-size:13px;cursor:pointer;box-shadow:0 4px 15px rgba(40,116,166,.3);transition:all .15s';
    btn.addEventListener('mouseenter', function() { btn.style.transform = 'scale(1.05)'; });
    btn.addEventListener('mouseleave', function() { btn.style.transform = 'scale(1)'; });
    btn.addEventListener('click', openTour);
    document.addEventListener('DOMContentLoaded', function() { document.body.appendChild(btn); });
  }
})();
