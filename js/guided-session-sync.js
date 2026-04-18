/* js/guided-session-sync.js — ReasonDx Guided Session Sync
 * Listens to GuidedMode phase transitions and submission events,
 * assembles a guided_sessions row, and calls EMRCloud.syncGuidedSession.
 * Also handles session restore on page reload (resuming mid-case).
 * Zero dependencies beyond GuidedMode, EMRCloud, DdxCompare, and PatientInterview.
 */
(function () {
  'use strict';

  var _syncTimer    = null;
  var _phaseStart   = {};    // { phaseKey: Date.now() }
  var _phaseTimings = {};    // { phaseKey: secondsSpent }
  var _sessionStart = null;

  // ── Get student ID consistently ─────────────────────────────────
  function _studentId() {
    try {
      var u = window.S && S.currentUser;
      if (u && u.username) return u.username;
      var stored = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
      return stored.email || stored.name || 'guest';
    } catch (e) { return 'guest'; }
  }

  // ── Get profession from user profile ───────────────────────────
  function _profession() {
    try {
      var u = window.S && S.currentUser;
      if (u && u.profession) return u.profession;
      var stored = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
      return stored.profession || null;
    } catch (e) { return null; }
  }

  // ── Compute bias scores from current DDx state ──────────────────
  function _computeBiasData(ddx2, ddx5) {
    if (!window.DdxCompare || !ddx2 || !ddx2.length) {
      return { biasDetected: [], anchoringScore: null, prematureClosure: false };
    }
    var guided = window.EMR_DATA && window.EMR_DATA.guided;
    var result = DdxCompare.analyze(ddx2, ddx5, [], guided);

    // Anchoring score = similarity between phase 2 and phase 5 lists
    var n2 = DdxCompare.normalize(ddx2);
    var n5 = DdxCompare.normalize(ddx5 || []);
    var anchoringScore = null;
    if (n2.length > 0 && n5.length > 0) {
      var overlap = n5.filter(function (d) {
        return n2.some(function (e) { return DdxCompare.similar(e, d); });
      }).length;
      anchoringScore = parseFloat((overlap / Math.max(n2.length, n5.length)).toFixed(3));
    }

    var prematureClosure = result.detected.some(function (b) { return b.type === 'prematureClosure'; });

    // Check if correct diagnosis was in each DDx
    var guided2 = guided && guided.ddxTargets && guided.ddxTargets[0];
    var target = guided2 ? DdxCompare.normalize([guided2])[0] : null;
    var correctInDdx2 = target ? n2.some(function (d) { return DdxCompare.similar(d, target); }) : null;
    var correctInDdx5 = target ? n5.some(function (d) { return DdxCompare.similar(d, target); }) : null;

    return {
      biasDetected:     result.detected,
      anchoringScore:   anchoringScore,
      prematureClosure: prematureClosure,
      correctDxInDdx2:  correctInDdx2,
      correctDxInDdx5:  correctInDdx5
    };
  }

  // ── Build full session snapshot ─────────────────────────────────
  function _buildSnapshot(opts) {
    opts = opts || {};
    if (!window.GuidedMode) return null;

    var gm       = GuidedMode;
    var ddx2     = gm.getDdxPhase2 ? gm.getDdxPhase2() : [];
    var ddx5     = gm.getDdxPhase5 ? gm.getDdxPhase5() : [];
    var biasData = _computeBiasData(ddx2, ddx5);

    // Note word count from session state
    var noteWordCount = null;
    try {
      if (window.S && S.noteFields) {
        noteWordCount = Object.values(S.noteFields)
          .reduce(function (sum, v) { return sum + (v ? v.split(/\s+/).filter(Boolean).length : 0); }, 0);
        if (noteWordCount === 0) noteWordCount = null;
      }
    } catch (e) {}

    // Interview turns
    var interviewTurns = 0;
    try {
      if (window.PatientInterview) {
        interviewTurns = PatientInterview.getMessages().filter(function (m) { return m.role === 'user'; }).length;
      }
    } catch (e) {}

    // Exam maneuvers
    var examManeuvers = [];
    try {
      if (window.ExamBuilder) examManeuvers = ExamBuilder.getSelected();
    } catch (e) {}

    // Completed phases
    var completedPhases = [];
    try {
      var savedState = JSON.parse(sessionStorage.getItem('rdx-guided-' + (CASE_ID || '')) || '{}');
      completedPhases = Object.keys(savedState.completed || {}).filter(function (k) { return savedState.completed[k]; });
    } catch (e) {}

    // Total time
    var totalTimeSec = _sessionStart ? Math.round((Date.now() - _sessionStart) / 1000) : null;

    // Program ID
    var programId = null;
    try { programId = new URLSearchParams(location.search).get('program'); } catch (e) {}

    var snapshot = {
      programId:        programId,
      setting:          (window.S && S.clinicalSetting) || 'ed',
      profession:       _profession(),
      currentPhase:     gm.currentPhase ? gm.currentPhase() : 1,
      completedPhases:  completedPhases,
      coachDone:        {},    // populated below
      ddxPhase2:        ddx2,
      ddxPhase5:        ddx5,
      ddxFinal:         opts.ddxFinal || [],
      biasDetected:     biasData.biasDetected,
      anchoringScore:   biasData.anchoringScore,
      prematureClosure: biasData.prematureClosure,
      correctDxInDdx2:  biasData.correctDxInDdx2,
      correctDxInDdx5:  biasData.correctDxInDdx5,
      phaseTimings:     Object.assign({}, _phaseTimings),
      totalTimeSec:     totalTimeSec,
      interviewTurns:   interviewTurns,
      examManeuvers:    examManeuvers,
      noteSubmitted:    opts.noteSubmitted || (window.S && !!S.submitted) || false,
      noteWordCount:    noteWordCount,
      feedbackReceived: opts.feedbackReceived || false
    };

    // Completed_at if note submitted
    if (snapshot.noteSubmitted) {
      snapshot.completedAt = new Date().toISOString();
    }

    return snapshot;
  }

  // ── Debounced sync to Supabase ──────────────────────────────────
  function _scheduleSync(opts) {
    clearTimeout(_syncTimer);
    _syncTimer = setTimeout(function () {
      _doSync(opts);
    }, 1500);  // 1.5s debounce — batch rapid state changes
  }

  async function _doSync(opts) {
    if (!window.EMRCloud || !window.CASE_ID) return;
    var sid = _studentId();
    if (sid === 'guest') return;  // don't sync anonymous sessions
    var snapshot = _buildSnapshot(opts);
    if (!snapshot) return;
    await EMRCloud.syncGuidedSession(sid, CASE_ID, snapshot);
  }

  // ── Phase timing tracker ────────────────────────────────────────
  function _startPhaseTimer(phaseKey) {
    _phaseStart[phaseKey] = Date.now();
  }

  function _stopPhaseTimer(phaseKey) {
    if (!_phaseStart[phaseKey]) return;
    var elapsed = Math.round((Date.now() - _phaseStart[phaseKey]) / 1000);
    _phaseTimings[phaseKey] = (_phaseTimings[phaseKey] || 0) + elapsed;
    delete _phaseStart[phaseKey];
  }

  // ── Session restore ─────────────────────────────────────────────
  // On page load, check if this student has a prior saved session for this case.
  // If so, offer to resume (non-blocking — doesn't interrupt if they don't want to).
  async function _checkResume() {
    if (!window.EMRCloud || !window.CASE_ID) return;
    var sid = _studentId();
    if (sid === 'guest') return;

    var saved = await EMRCloud.loadGuidedSession(sid, CASE_ID);
    if (!saved) return;
    if (!saved.current_phase || saved.current_phase <= 1) return;
    if (saved.note_submitted) return;  // complete, don't re-resume

    // Only offer resume if they're more than 1 phase in
    if (saved.current_phase < 2) return;

    _showResumePrompt(saved);
  }

  function _showResumePrompt(saved) {
    if (document.getElementById('rdx-resume-banner')) return;
    var phaseName = ['', 'Chief Complaint', 'Initial DDx', 'Patient Interview',
                     'Physical Exam', 'Refined DDx', 'Past Data', 'New Orders', 'Note & Feedback'];
    var label = phaseName[saved.current_phase] || ('Phase ' + saved.current_phase);

    var banner = document.createElement('div');
    banner.id = 'rdx-resume-banner';
    banner.style.cssText = 'position:fixed;bottom:' + (document.getElementById('rdx-guest-banner') ? '52px' : '0') +
      ';left:0;right:0;z-index:8887;background:#1B4F72;color:#fff;padding:10px 20px;' +
      'display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;' +
      'font-family:\'DM Sans\',-apple-system,sans-serif;font-size:13px;box-shadow:0 -2px 12px rgba(0,0,0,.2)';
    banner.innerHTML =
      '<span>📋 You have an in-progress session for this case — last at <strong>' + label + '</strong>.</span>' +
      '<div style="display:flex;gap:8px;flex-shrink:0">' +
        '<button onclick="window.RDXGuidedSync.resume()" style="padding:6px 14px;background:#2874A6;color:#fff;border:none;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit">Resume →</button>' +
        '<button onclick="document.getElementById(\'rdx-resume-banner\').remove()" style="padding:6px 12px;background:rgba(255,255,255,.15);color:#fff;border:none;border-radius:6px;font-size:12px;cursor:pointer;font-family:inherit">Start Over</button>' +
      '</div>';
    document.body.appendChild(banner);
  }

  // ── Public API ──────────────────────────────────────────────────
  window.RDXGuidedSync = {

    // Called when page/case loads
    init: function () {
      _sessionStart = Date.now();

      // Attach to GuidedMode phase transitions
      var _patchInterval = setInterval(function () {
        if (!window.GuidedMode) return;
        clearInterval(_patchInterval);

        // Patch completeCurrentPhase to trigger sync
        var origComplete = GuidedMode.completeCurrentPhase.bind(GuidedMode);
        GuidedMode.completeCurrentPhase = function (data) {
          var phase = GuidedMode.PHASES &&
            GuidedMode.PHASES[GuidedMode.currentPhase ? GuidedMode.currentPhase() - 1 : 0];
          if (phase) _stopPhaseTimer(phase.key);
          origComplete(data);
          // Sync after transition
          _scheduleSync({});
          // Start timer for new phase
          setTimeout(function () {
            var newPhase = GuidedMode.PHASES &&
              GuidedMode.PHASES[GuidedMode.currentPhase ? GuidedMode.currentPhase() - 1 : 0];
            if (newPhase) _startPhaseTimer(newPhase.key);
          }, 100);
        };

        // Patch markCoachComplete to trigger sync
        var origCoach = GuidedMode.markCoachComplete.bind(GuidedMode);
        GuidedMode.markCoachComplete = function (phaseId) {
          origCoach(phaseId);
          _scheduleSync({});
        };

        // Start timer for phase 1
        var p1 = GuidedMode.PHASES && GuidedMode.PHASES[0];
        if (p1) _startPhaseTimer(p1.key);

        // Check if there's a prior session to resume
        setTimeout(_checkResume, 2000);

      }, 300);

      // Listen for note submission event
      document.addEventListener('rdx-submission-complete', function (e) {
        var noteWC = e.detail && e.detail.wordCount;
        _scheduleSync({ noteSubmitted: true, noteWordCount: noteWC, feedbackReceived: false });
      });

      // Listen for feedback received event
      document.addEventListener('rdx-feedback-received', function () {
        _scheduleSync({ noteSubmitted: true, feedbackReceived: true });
      });
    },

    // Resume a prior session — jump to saved phase
    resume: function () {
      var banner = document.getElementById('rdx-resume-banner');
      if (banner) banner.remove();
      var sid = _studentId();
      if (!sid || !window.CASE_ID) return;
      EMRCloud.loadGuidedSession(sid, CASE_ID).then(function (saved) {
        if (!saved || !window.GuidedMode) return;
        var targetPhase = saved.current_phase || 1;
        // Restore DDx snapshots to sessionStorage so GuidedMode picks them up
        try {
          var stateKey = 'rdx-guided-' + CASE_ID;
          var existing = JSON.parse(sessionStorage.getItem(stateKey) || '{}');
          if (saved.ddx_phase2) {
            var p2 = typeof saved.ddx_phase2 === 'string' ? JSON.parse(saved.ddx_phase2) : saved.ddx_phase2;
            existing.ddxPhase2 = p2;
          }
          if (saved.ddx_phase5) {
            var p5 = typeof saved.ddx_phase5 === 'string' ? JSON.parse(saved.ddx_phase5) : saved.ddx_phase5;
            existing.ddxPhase5 = p5;
          }
          // Mark phases as complete
          var completedPhases = saved.completed_phases;
          if (typeof completedPhases === 'string') completedPhases = JSON.parse(completedPhases);
          if (Array.isArray(completedPhases)) {
            existing.completed = existing.completed || {};
            completedPhases.forEach(function (k) { existing.completed[k] = true; });
          }
          existing.currentPhase = targetPhase;
          sessionStorage.setItem(stateKey, JSON.stringify(existing));
        } catch (e) {}
        // Navigate to the saved phase
        GuidedMode.advanceTo(targetPhase);
      });
    },

    // Force an immediate sync (e.g. called from submit button)
    syncNow: function (opts) {
      clearTimeout(_syncTimer);
      _doSync(opts || {});
    }
  };

  // ── Auto-init when case loads ────────────────────────────────────
  // Wait for both GuidedMode and EMRCloud to be ready
  var _initInterval = setInterval(function () {
    if (window.GuidedMode && window.GuidedMode.isActive && GuidedMode.isActive() &&
        window.EMRCloud && window.CASE_ID) {
      clearInterval(_initInterval);
      RDXGuidedSync.init();
    }
  }, 500);

  // Give up after 15 seconds if guided mode never activates
  setTimeout(function () { clearInterval(_initInterval); }, 15000);

})();
