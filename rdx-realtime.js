/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/**
 * rdx-realtime.js
 * Supabase Realtime — faculty live observation of student simulations.
 *
 * Two modes:
 *   STUDENT mode: broadcasts simulation turns to a shared channel
 *   FACULTY mode: subscribes to a student's channel and renders live feed
 *
 * Usage:
 *   RDXRealtime.initStudent(studentId, caseId)  — call at sim start
 *   RDXRealtime.broadcastTurn(turn)             — call after each turn
 *   RDXRealtime.initFaculty(studentId)          — call in faculty observer
 *   RDXRealtime.stopBroadcast()                 — call at sim end
 */

(function(window) {
  'use strict';

  var SUPABASE_URL = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_KEY = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_ANON_KEY)||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  var _client   = null;
  var _channel  = null;
  var _mode     = null; // 'student' | 'faculty'
  var _studentId = null;
  var _caseId    = null;
  var _onTurn    = null; // faculty callback

  // ── Init Supabase client ──────────────────────────────────────────────────
  function getClient() {
    if (_client) return _client;
    if (window.supabase && window.supabase.createClient) {
      _client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      return _client;
    }
    throw new Error('Supabase client not available');
  }

  // ── STUDENT: start broadcasting ───────────────────────────────────────────
  function initStudent(studentId, caseId) {
    _mode      = 'student';
    _studentId = studentId;
    _caseId    = caseId;

    try {
      var client  = getClient();
      var channel = 'rdx-sim-' + studentId.replace(/[^a-z0-9]/gi, '-');
      _channel = client.channel(channel, {
        config: { broadcast: { self: false } }
      });

      _channel.subscribe(function(status) {
        if (status === 'SUBSCRIBED') {
          rdxLog('[RDXRealtime] Broadcasting on channel:', channel);
          // Announce session start
          _channel.send({
            type: 'broadcast',
            event: 'session_start',
            payload: {
              studentId: studentId,
              caseId:    caseId,
              startedAt: new Date().toISOString(),
            }
          });
        }
      });
    } catch(e) {
      console.warn('[RDXRealtime] Student init failed:', e.message);
    }
  }

  // ── STUDENT: broadcast a turn ─────────────────────────────────────────────
  function broadcastTurn(turn) {
    if (!_channel || _mode !== 'student') return;
    try {
      _channel.send({
        type:  'broadcast',
        event: 'turn',
        payload: {
          studentId:   _studentId,
          caseId:      _caseId,
          timestamp:   new Date().toISOString(),
          role:        turn.role,        // 'student' | 'patient' | 'system'
          content:     turn.content,
          phase:       turn.phase,
          turnNumber:  turn.turnNumber,
          ddx:         turn.ddx || null,
          orders:      turn.orders || null,
        }
      });
    } catch(e) {
      console.warn('[RDXRealtime] Broadcast failed:', e.message);
    }
  }

  // ── STUDENT: broadcast DDx update ─────────────────────────────────────────
  function broadcastDDx(differentials) {
    if (!_channel || _mode !== 'student') return;
    try {
      _channel.send({
        type:  'broadcast',
        event: 'ddx_update',
        payload: {
          studentId:     _studentId,
          caseId:        _caseId,
          timestamp:     new Date().toISOString(),
          differentials: differentials,
        }
      });
    } catch(e) {}
  }

  // ── STUDENT: stop broadcasting ────────────────────────────────────────────
  function stopBroadcast(finalState) {
    if (!_channel) return;
    try {
      _channel.send({
        type:  'broadcast',
        event: 'session_end',
        payload: {
          studentId:  _studentId,
          caseId:     _caseId,
          endedAt:    new Date().toISOString(),
          finalState: finalState || null,
        }
      });
      getClient().removeChannel(_channel);
    } catch(e) {}
    _channel = null;
  }

  // ── FACULTY: observe a student ────────────────────────────────────────────
  function initFaculty(studentId, onTurnCallback) {
    _mode      = 'faculty';
    _studentId = studentId;
    _onTurn    = onTurnCallback;

    try {
      var client  = getClient();
      var channel = 'rdx-sim-' + studentId.replace(/[^a-z0-9]/gi, '-');

      _channel = client.channel(channel);

      _channel
        .on('broadcast', { event: 'session_start' }, function(payload) {
          if (_onTurn) _onTurn({ type: 'session_start', data: payload.payload });
        })
        .on('broadcast', { event: 'turn' }, function(payload) {
          if (_onTurn) _onTurn({ type: 'turn', data: payload.payload });
        })
        .on('broadcast', { event: 'ddx_update' }, function(payload) {
          if (_onTurn) _onTurn({ type: 'ddx_update', data: payload.payload });
        })
        .on('broadcast', { event: 'session_end' }, function(payload) {
          if (_onTurn) _onTurn({ type: 'session_end', data: payload.payload });
        })
        .subscribe(function(status) {
          rdxLog('[RDXRealtime] Faculty subscribed to', studentId, '— status:', status);
        });
    } catch(e) {
      console.warn('[RDXRealtime] Faculty init failed:', e.message);
    }
  }

  // ── Stop faculty observation ───────────────────────────────────────────────
  function stopObserving() {
    if (!_channel) return;
    try { getClient().removeChannel(_channel); } catch(e) {}
    _channel = null;
  }

  // ── Generate shareable observation link ───────────────────────────────────
  function getObservationLink(studentId) {
    return window.location.origin +
      '/faculty-dashboard.html?observe=' +
      encodeURIComponent(studentId || _studentId);
  }

  // ── Public API ─────────────────────────────────────────────────────────────
  window.RDXRealtime = {
    initStudent:       initStudent,
    broadcastTurn:     broadcastTurn,
    broadcastDDx:      broadcastDDx,
    stopBroadcast:     stopBroadcast,
    initFaculty:       initFaculty,
    stopObserving:     stopObserving,
    getObservationLink: getObservationLink,
  };

})(window);
