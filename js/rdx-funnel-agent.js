/**
 * rdx-funnel-agent.js — Phase Abandonment & Funnel Tracking
 * 
 * Tracks where students drop out of the simulation, which cases
 * have high abandonment, and surfaces content gaps.
 * 
 * Data flows to Supabase funnel_events table (append-only).
 * Zero PII — uses session IDs, not emails.
 */

(function(window) {
  'use strict';

  var SUPABASE_URL = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gOVMHAMxT3sCCfLmgUSbPjj2eODenSHaIIp8I1w';

  // ── Session ID (anonymous) ────────────────────────────────────────
  function _getSessionId() {
    var key = 'rdx-funnel-session';
    var s = null;
    try { s = sessionStorage.getItem(key); } catch(e) {}
    if (!s) {
      s = 'fs-' + Math.random().toString(36).slice(2, 10) + '-' + Date.now().toString(36);
      try { sessionStorage.setItem(key, s); } catch(e) {}
    }
    return s;
  }

  // ── Get profession safely ────────────────────────────────────────
  function _getProfession() {
    try {
      var u = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
      return (u.professionProfile && u.professionProfile.professionId) || 
             localStorage.getItem('rdx-profession') || 'unknown';
    } catch(e) { return 'unknown'; }
  }

  // ── Fire event to Supabase ────────────────────────────────────────
  function _fire(eventName, payload) {
    var row = Object.assign({
      event_name:  eventName,
      session_id:  _getSessionId(),
      profession:  _getProfession(),
      ts:          new Date().toISOString(),
    }, payload || {});

    fetch(SUPABASE_URL + '/rest/v1/funnel_events', {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'apikey':        SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Prefer':        'return=minimal',
      },
      body: JSON.stringify(row),
    }).catch(function() {}); // silent fail
  }

  // ── Public API ────────────────────────────────────────────────────
  var RDXFunnelAgent = {

    /** Call when a case starts (Phase 1 begins) */
    caseStarted: function(caseId, source) {
      _fire('case_started', { case_id: caseId, source: source || 'direct' });
      // Store start time for time-on-case
      try { sessionStorage.setItem('rdx-funnel-start', Date.now().toString()); } catch(e) {}
    },

    /** Call at every phase transition */
    phaseEntered: function(caseId, phase, phaseName) {
      var startTs = null;
      try { startTs = parseInt(sessionStorage.getItem('rdx-funnel-start') || '0'); } catch(e) {}
      var secsIn = startTs ? Math.round((Date.now() - startTs) / 1000) : null;

      _fire('phase_entered', {
        case_id:    caseId,
        phase:      phase,
        phase_name: phaseName || ('Phase ' + phase),
        secs_in:    secsIn,
      });
    },

    /** Call when case completes (Phase 10) */
    caseCompleted: function(caseId, totalPhases, ddxAccuracy) {
      var startTs = null;
      try { startTs = parseInt(sessionStorage.getItem('rdx-funnel-start') || '0'); } catch(e) {}
      var totalSecs = startTs ? Math.round((Date.now() - startTs) / 1000) : null;

      _fire('case_completed', {
        case_id:     caseId,
        total_phases: totalPhases || 10,
        total_secs:  totalSecs,
        ddx_accuracy: ddxAccuracy || null,
      });
    },

    /** Call when user navigates away mid-case (beforeunload) */
    caseAbandoned: function(caseId, lastPhase, lastPhaseName) {
      var startTs = null;
      try { startTs = parseInt(sessionStorage.getItem('rdx-funnel-start') || '0'); } catch(e) {}
      var secsIn = startTs ? Math.round((Date.now() - startTs) / 1000) : null;

      _fire('case_abandoned', {
        case_id:        caseId,
        last_phase:     lastPhase,
        last_phase_name: lastPhaseName || ('Phase ' + lastPhase),
        secs_in:        secsIn,
      });
    },

    /** Call when a search returns zero results */
    searchZeroResults: function(query, mode) {
      _fire('search_zero_results', { query: query, mode: mode || 'simulate' });
    },

    /** Call when user changes profession filter */
    professionChanged: function(fromProfession, toProfession) {
      _fire('profession_changed', {
        from_profession: fromProfession || 'unknown',
        to_profession:   toProfession,
      });
    },

    /** Call when email capture is shown */
    emailCaptureShown: function(caseId, trigger) {
      _fire('email_capture_shown', { case_id: caseId, trigger: trigger || 'debrief' });
    },

    /** Call when email capture is submitted */
    emailCaptureConverted: function(caseId) {
      _fire('email_capture_converted', { case_id: caseId });
    },

    /** Call when email capture is dismissed */
    emailCaptureDismissed: function(caseId) {
      _fire('email_capture_dismissed', { case_id: caseId });
    },
  };

  window.RDXFunnelAgent = RDXFunnelAgent;

})(window);
