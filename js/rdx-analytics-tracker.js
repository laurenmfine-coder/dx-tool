/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/* eslint-disable no-console */ if(typeof window!=='undefined'&&!window.RDX_DEV){var _cl=console.log;console.log=function(){};}
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

// Wait for RDX to be available AND supabase client to be initialized.
// The Supabase SDK may load asynchronously, so we poll briefly.
function startTracker() {
  var rdxReady = typeof window.RDX !== 'undefined'
    && window.RDX.track
    && window.RDX.ready === true;

  if (!rdxReady) {
    if (startTracker._attempts === undefined) startTracker._attempts = 0;
    startTracker._attempts++;
    if (startTracker._attempts > 60) {  // 60 * 150ms = 9 seconds
      console.warn('[Tracker] RDX never became ready after 9s. Analytics tracking disabled.');
      return;
    }
    setTimeout(startTracker, 150);
    return;
  }
  _init();
}

function _init() {

var _startTime = Date.now();
var _currentPage = window.location.pathname.split('/').pop() || 'index.html';
var _setting = new URLSearchParams(window.location.search).get('setting');

// Resolve case ID from either ?case=<slug> (legacy) or ?cx=<token> (new format).
// The cx token maps back to a slug via window.RDX_CASE_TOKENS if loaded.
var _caseId = (function() {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get('case');
  if (slug) return slug;
  var token = params.get('cx');
  if (token && window.RDX_CASE_TOKENS && window.RDX_CASE_TOKENS.tokenToSlug) {
    return window.RDX_CASE_TOKENS.tokenToSlug[token] || token;
  }
  return token || null;  // fall back to raw token if map unavailable
})();

var _tracked = {};  // prevent duplicate events

function log(msg) {
  if (window.location.search.indexOf('debug=1') >= 0) {
    rdxLog('[Tracker] ' + msg);
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
    // Also fire a lightweight 'case_start' analytics_events row.
    // RDX.track.caseStart writes to case_attempts and skips for
    // anonymous users (no profile to link). The event below writes
    // to analytics_events, which DOES accept anonymous_session_id,
    // so the anonymous funnel includes case-start signal — the
    // single most important event for first-5-minutes analysis.
    RDX.track.event('case_start', null, {
      case_id: _caseId,
      setting: _setting || 'ed',
      page: _currentPage
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
    if (seconds <= 5) return; // Only track meaningful sessions
    if (!window.RDX || !window.RDX.getClient || !window.RDX.getClient()) return;

    var client = RDX.getClient();
    var user = RDX.getProfile && RDX.getProfile();
    var anonKey = (window.RDX_CONFIG && window.RDX_CONFIG.SUPABASE_ANON_KEY) || '';

    // For authenticated users, send with their JWT. For anonymous
    // browsers, send through the anon RLS policy (anon_event_insert)
    // with the session and visitor IDs that trackEvent uses for
    // every other anonymous insert. Both paths land in the same
    // analytics_events table.
    var accessToken = '';
    try {
      if (client.auth && client.auth._currentSession) {
        accessToken = client.auth._currentSession.access_token || '';
      }
    } catch(_) {}
    var session = client.auth && client.auth.session && client.auth.session();
    if (!accessToken && session && session.access_token) {
      accessToken = session.access_token;
    }

    var body;
    if (user && user.id) {
      body = {
        user_id: user.id,
        event_type: 'session_end',
        event_data: {
          page: _currentPage,
          duration_seconds: seconds,
          setting: _setting,
          case_id: _caseId
        }
      };
    } else {
      // Anonymous path. RDX exposes the same session/visitor ID
      // helpers used by trackEvent so all anonymous events for one
      // browser tab share an anonymous_session_id.
      var sid = (RDX.anonSessionId && RDX.anonSessionId()) || null;
      var vid = (RDX.anonVisitorId && RDX.anonVisitorId()) || null;
      if (!sid) return;  // can't track without a session id
      body = {
        user_id: null,
        anonymous_session_id: sid,
        anonymous_visitor_id: vid,
        event_type: 'session_end',
        event_data: {
          page: _currentPage,
          duration_seconds: seconds,
          setting: _setting,
          case_id: _caseId
        }
      };
    }

    var url = client.supabaseUrl + '/rest/v1/analytics_events';
    var payload = JSON.stringify(body);

    try {
      fetch(url, {
        method: 'POST',
        keepalive: true,
        headers: {
          'Content-Type': 'application/json',
          'apikey': anonKey,
          'Authorization': accessToken ? ('Bearer ' + accessToken) : ('Bearer ' + anonKey),
          'Prefer': 'return=minimal'
        },
        body: payload
      });
    } catch(_) {
      if (navigator.sendBeacon) {
        try {
          navigator.sendBeacon(
            url + '?apikey=' + encodeURIComponent(anonKey),
            new Blob([payload], { type: 'application/json' })
          );
        } catch(__) {}
      }
    }
  });
}

// ═══════════════════════════════════════
// INITIALIZE ALL INSTRUMENTS
// ═══════════════════════════════════════
function init() {
  // Flag to prevent double-instrumentation when auth event fires after
  // anonymous instrumentation already started.
  var _instrumented = false;
  function runAll() {
    if (_instrumented) return;
    _instrumented = true;
    trackPageView();
    instrumentEMR();
    instrumentTrackBoard();
    instrumentCRT();
    instrumentConsult();
    instrumentProcedureLab();
    instrumentPathway();
    trackSessionEnd();
  }

  // Wait for auth to resolve before tracking (authenticated users)
  document.addEventListener('rdx:auth', function(e) {
    if (e.detail.user) {
      log('Auth resolved, starting instrumentation for ' + _currentPage);
      runAll();
    }
  });

  // Also try immediately — covers BOTH authenticated (if already logged in)
  // AND anonymous users (majority of traffic). This is the critical path
  // that was missing: previously this fired only for authenticated users.
  setTimeout(function() {
    if (_instrumented) return;
    log('Immediate init — anonymous or pre-authenticated path');
    runAll();
  }, 2000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

log('Analytics tracker loaded for: ' + _currentPage);

}  // end _init()

startTracker();  // kicks off RDX readiness polling

})();
