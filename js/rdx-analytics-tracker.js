/* js/rdx-analytics-tracker.js — Auto-instrumentation for ReasonDx
 * ═══════════════════════════════════════════════════════════════
 * Automatically tracks user activity across all platform pages.
 * Listens for DOM events, URL changes, and page lifecycle to log
 * analytics events to Supabase via the RDX.track.* API.
 *
 * Load AFTER rdx-supabase.js:
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 *   <script src="js/rdx-supabase.js"></script>
 *   <script src="js/rdx-analytics-tracker.js"></script>
 *
 * Works silently — no UI changes to any existing page.
 */
(function() {
'use strict';

// Wait for RDX to be available
if (typeof window.RDX === 'undefined') {
  console.warn('[Tracker] RDX not loaded. Analytics tracking disabled.');
  return;
}

var _startTime = Date.now();
var _currentPage = window.location.pathname.split('/').pop() || 'index.html';
var _setting = new URLSearchParams(window.location.search).get('setting');
var _caseId = new URLSearchParams(window.location.search).get('case');
var _tracked = {};  // prevent duplicate events

function log(msg) {
  if (window.location.search.indexOf('debug=1') >= 0) {
    console.log('[Tracker] ' + msg);
  }
}

function elapsed() {
  return Math.round((Date.now() - _startTime) / 1000);
}

// ═══════════════════════════════════════
// PAGE VIEW TRACKING
// ═══════════════════════════════════════
function trackPageView() {
  RDX.track.event('page_view', null, {
    page: _currentPage,
    setting: _setting,
    case_id: _caseId,
    referrer: document.referrer
  });
  log('Page view: ' + _currentPage);
}

// ═══════════════════════════════════════
// VIRTUAL EMR TRACKING
// ═══════════════════════════════════════
function instrumentEMR() {
  if (_currentPage !== 'virtual-emr.html' && _currentPage !== 'setting-selector.html') return;

  // Track case opens via URL parameter
  if (_caseId && !_tracked['case_' + _caseId]) {
    _tracked['case_' + _caseId] = true;
    RDX.track.caseStart(_caseId, {
      setting: _setting || 'ed',
      tool: 'virtual-emr',
      milestoneTags: getMilestoneTags(_caseId),
      metadata: { page: _currentPage }
    });
    log('Case started: ' + _caseId + ' in ' + _setting);
  }

  // Track tab navigation within EMR
  document.addEventListener('click', function(e) {
    var tab = e.target.closest('[data-tab], .emr-tab, .chart-tab');
    if (tab) {
      var tabName = tab.getAttribute('data-tab') || tab.textContent.trim();
      RDX.track.event('chart_tab_view', null, {
        tab: tabName,
        case_id: _caseId,
        setting: _setting,
        time_elapsed: elapsed()
      });
      log('Tab view: ' + tabName);
    }
  });

  // Track diagnosis confirmation
  // Listen for the dx-earned event or button clicks
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.confirm-dx, [data-action="confirm-dx"], .dx-confirm-btn');
    if (btn) {
      var dxText = '';
      var dxInput = document.querySelector('.dx-input, #dxInput, [name="diagnosis"]');
      if (dxInput) dxText = dxInput.value || dxInput.textContent || '';

      RDX.track.caseComplete(null, {
        dxSubmitted: dxText,
        timeSeconds: elapsed(),
        stagesCompleted: 1
      });
      log('Diagnosis submitted: ' + dxText);
    }
  });

  // Listen for custom dx-earned events (if the platform dispatches them)
  document.addEventListener('rdx:dx-earned', function(e) {
    var detail = e.detail || {};
    RDX.track.caseComplete(null, {
      dxSubmitted: detail.diagnosis || '',
      dxCorrect: detail.correct || null,
      timeSeconds: elapsed(),
      stagesCompleted: detail.stage || 1
    });
    log('DX earned event: ' + (detail.diagnosis || 'unknown'));
  });
}

// ═══════════════════════════════════════
// ED TRACK BOARD TRACKING
// ═══════════════════════════════════════
function instrumentTrackBoard() {
  if (_currentPage !== 'virtual-emr.html' || _setting !== 'ed') return;

  document.addEventListener('click', function(e) {
    // Track when a patient is selected from the board
    var row = e.target.closest('.patient-row, .bed-card, [data-case-id]');
    if (row) {
      var caseId = row.getAttribute('data-case-id') || row.getAttribute('data-case') || '';
      if (caseId && !_tracked['ed_' + caseId]) {
        _tracked['ed_' + caseId] = true;
        RDX.track.event('ed_patient_selected', null, {
          case_id: caseId,
          time_elapsed: elapsed()
        });
        log('ED patient selected: ' + caseId);
      }
    }

    // Track disposition decisions
    var dispo = e.target.closest('.dispo-btn, [data-disposition]');
    if (dispo) {
      RDX.track.event('ed_disposition', null, {
        disposition: dispo.getAttribute('data-disposition') || dispo.textContent.trim(),
        case_id: _caseId,
        time_elapsed: elapsed()
      });
      log('ED disposition: ' + (dispo.getAttribute('data-disposition') || ''));
    }
  });
}

// ═══════════════════════════════════════
// CRT HUB TRACKING
// ═══════════════════════════════════════
function instrumentCRT() {
  if (_currentPage !== 'crt-hub.html') return;

  var crtStarted = false;
  var currentStage = 0;

  document.addEventListener('click', function(e) {
    // Track CRT case selection
    var card = e.target.closest('.crt-card, [data-crt-id]');
    if (card) {
      var crtId = card.getAttribute('data-crt-id') || card.getAttribute('data-id') || '';
      if (crtId && !crtStarted) {
        crtStarted = true;
        currentStage = 1;
        RDX.track.caseStart(crtId, {
          tool: 'crt',
          milestoneTags: getMilestoneTags(crtId),
          metadata: { source: 'crt-hub' }
        });
        log('CRT started: ' + crtId);
      }
    }

    // Track stage advancement
    var nextBtn = e.target.closest('.next-stage, .stage-next, [data-action="next-stage"], .crt-next');
    if (nextBtn && crtStarted) {
      currentStage++;
      RDX.track.crtStage(null, currentStage, {
        time_elapsed: elapsed()
      });
      log('CRT stage advanced: ' + currentStage);
    }

    // Track answer/response submissions within CRT
    var submitBtn = e.target.closest('.submit-answer, .crt-submit, [data-action="submit"]');
    if (submitBtn) {
      var answerEl = document.querySelector('.crt-answer, .answer-input, textarea.response');
      RDX.track.event('crt_answer_submit', null, {
        stage: currentStage,
        answer_length: answerEl ? (answerEl.value || answerEl.textContent || '').length : 0,
        time_elapsed: elapsed()
      });
      log('CRT answer submitted at stage ' + currentStage);
    }
  });
}

// ═══════════════════════════════════════
// CONSULT CALLBACK TRACKING
// ═══════════════════════════════════════
function instrumentConsult() {
  if (_currentPage !== 'consult-callback.html') return;

  var consultActive = false;
  var messageCount = 0;

  document.addEventListener('click', function(e) {
    // Track specialist selection / call initiation
    var specBtn = e.target.closest('.specialist-card, [data-specialist], .call-btn');
    if (specBtn && !consultActive) {
      consultActive = true;
      messageCount = 0;
      var specialist = specBtn.getAttribute('data-specialist')
        || specBtn.querySelector('.spec-name')?.textContent
        || specBtn.textContent.trim().substring(0, 30);
      var patientEl = document.querySelector('.patient-name, .active-patient');
      var caseId = patientEl ? (patientEl.getAttribute('data-case') || patientEl.textContent.trim()) : '';

      RDX.track.consultStart(caseId, specialist);
      log('Consult started: ' + specialist + ' for ' + caseId);
    }

    // Track message sends
    var sendBtn = e.target.closest('.send-btn, #sendBtn, [data-action="send"]');
    if (sendBtn && consultActive) {
      messageCount++;
      var msgInput = document.querySelector('.chat-input, #chatInput, textarea');
      var msgText = msgInput ? (msgInput.value || '') : '';

      RDX.track.consultMessage(null, {
        role: 'learner',
        text: msgText.substring(0, 200), // truncate for storage
        message_number: messageCount
      });
      log('Consult message #' + messageCount);
    }
  });

  // Track AI responses via MutationObserver on the chat area
  var chatObs = new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      m.addedNodes.forEach(function(node) {
        if (node.nodeType === 1 && (node.classList.contains('ai-message') || node.classList.contains('specialist-msg'))) {
          messageCount++;
          RDX.track.consultMessage(null, {
            role: 'specialist',
            text: (node.textContent || '').substring(0, 200),
            message_number: messageCount
          });
        }
      });
    });
  });

  // Start observing once the chat container exists
  var checkChat = setInterval(function() {
    var chatArea = document.querySelector('.chat-messages, #chatArea, .messages-container');
    if (chatArea) {
      chatObs.observe(chatArea, { childList: true, subtree: true });
      clearInterval(checkChat);
    }
  }, 500);

  // Track performance review / completion
  document.addEventListener('click', function(e) {
    var endBtn = e.target.closest('.fb-btn.primary, [data-action="end-consult"]');
    if (endBtn && consultActive) {
      // Try to capture scores from the feedback card
      var scores = {};
      document.querySelectorAll('.fb-row').forEach(function(row) {
        var label = row.querySelector('.fb-label');
        var val = row.querySelector('.fb-val');
        if (label && val) {
          scores[label.textContent.trim()] = parseInt(val.textContent) || 0;
        }
      });

      RDX.track.consultComplete(null, scores);
      consultActive = false;
      log('Consult completed with scores: ' + JSON.stringify(scores));
    }
  });
}

// ═══════════════════════════════════════
// PROCEDURE LAB TRACKING
// ═══════════════════════════════════════
function instrumentProcedureLab() {
  if (_currentPage !== 'procedure-lab.html') return;

  document.addEventListener('click', function(e) {
    // Track procedure type selection
    var procCard = e.target.closest('.proc-card, [data-procedure]');
    if (procCard) {
      var procType = procCard.getAttribute('data-procedure') || procCard.textContent.trim().substring(0, 30);
      RDX.track.event('procedure_start', null, {
        procedure_type: procType,
        time_elapsed: elapsed()
      });
      log('Procedure started: ' + procType);
    }

    // Track scoring / completion
    var scoreBtn = e.target.closest('[onclick*="scoreSkin"], [onclick*="scoreOFC"], .score-btn, .submit-procedure');
    if (scoreBtn) {
      // Capture any visible scores
      var scoreEl = document.querySelector('.score-value, .proc-score, .result-score');
      var score = scoreEl ? parseFloat(scoreEl.textContent) : null;

      RDX.track.procedure(_currentProcedureType || 'unknown', {
        score: score,
        timeSeconds: elapsed(),
        passed: score !== null ? score >= 70 : null,
        metadata: { page: _currentPage }
      });
      log('Procedure scored: ' + score);
    }
  });

  var _currentProcedureType = null;
  // Watch for procedure type changes
  var observer = new MutationObserver(function() {
    var active = document.querySelector('.proc-active, .active-procedure, [data-active-procedure]');
    if (active) {
      _currentProcedureType = active.getAttribute('data-active-procedure')
        || active.getAttribute('data-procedure')
        || active.textContent.trim().substring(0, 30);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
}

// ═══════════════════════════════════════
// ALLERGY PATHWAY TRACKING
// ═══════════════════════════════════════
function instrumentPathway() {
  if (_currentPage !== 'allergy-pathway.html' && _currentPage !== 'pathway.html') return;

  document.addEventListener('click', function(e) {
    var node = e.target.closest('.pathway-node, [data-pathway-step]');
    if (node) {
      var step = node.getAttribute('data-pathway-step') || node.textContent.trim().substring(0, 50);
      RDX.track.event('pathway_step', null, {
        step: step,
        time_elapsed: elapsed()
      });
      log('Pathway step: ' + step);
    }
  });
}

// ═══════════════════════════════════════
// MILESTONE TAG LOOKUP
// ═══════════════════════════════════════
function getMilestoneTags(caseId) {
  // Use MILESTONE_DATA if available (from js/milestone-data.js)
  if (window.MILESTONE_DATA && window.MILESTONE_DATA.cases && window.MILESTONE_DATA.cases[caseId]) {
    return window.MILESTONE_DATA.cases[caseId].sub || [];
  }
  return [];
}

// ═══════════════════════════════════════
// SESSION TRACKING
// ═══════════════════════════════════════
function trackSessionEnd() {
  // Track time spent when user leaves the page
  window.addEventListener('beforeunload', function() {
    var seconds = elapsed();
    if (seconds > 5) { // Only track meaningful sessions
      // Use sendBeacon for reliable delivery on page unload
      if (navigator.sendBeacon && window.RDX && window.RDX.getClient()) {
        var client = RDX.getClient();
        var user = RDX.getProfile();
        if (user) {
          navigator.sendBeacon(
            client.supabaseUrl + '/rest/v1/analytics_events',
            JSON.stringify({
              user_id: user.id,
              event_type: 'session_end',
              event_data: {
                page: _currentPage,
                duration_seconds: seconds,
                setting: _setting,
                case_id: _caseId
              }
            })
          );
        }
      }
    }
  });
}

// ═══════════════════════════════════════
// INITIALIZE ALL INSTRUMENTS
// ═══════════════════════════════════════
function init() {
  // Wait for auth to resolve before tracking
  document.addEventListener('rdx:auth', function(e) {
    if (e.detail.user) {
      log('Auth resolved, starting instrumentation for ' + _currentPage);
      trackPageView();
      instrumentEMR();
      instrumentTrackBoard();
      instrumentCRT();
      instrumentConsult();
      instrumentProcedureLab();
      instrumentPathway();
      trackSessionEnd();
    }
  });

  // Also try immediately in case auth already resolved
  setTimeout(function() {
    if (window.RDX && RDX.getProfile()) {
      log('Late init: auth already resolved');
      trackPageView();
      instrumentEMR();
      instrumentTrackBoard();
      instrumentCRT();
      instrumentConsult();
      instrumentProcedureLab();
      instrumentPathway();
      trackSessionEnd();
    }
  }, 2000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

log('Analytics tracker loaded for: ' + _currentPage);

})();
