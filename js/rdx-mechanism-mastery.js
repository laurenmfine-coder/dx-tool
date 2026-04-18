/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/**
 * rdx-mechanism-mastery.js — MechanismDx Concept Mastery Persistence
 * ════════════════════════════════════════════════════════════════════
 * Builds and persists a cross-session Concept Mastery Profile (CMP)
 * from MechanismDx tutor interactions.
 *
 * PROBLEM SOLVED:
 * The AI tutor identifies concept gaps during sessions but doesn't persist
 * them. A student who struggles with osmotic demyelination in one session
 * gets no continuity when they return. This module fixes that.
 *
 * ARCHITECTURE:
 *  1. Each MechanismDx module calls emitConceptSignal() when:
 *     - Student explicitly marks a gap
 *     - AI tutor identifies a concept misunderstanding
 *     - Student correctly explains a mechanism
 *  2. This module aggregates signals into a per-student CMP
 *  3. CMP is saved to Supabase (mechanism_concept_mastery table)
 *  4. On next visit, CMP is loaded and shown as "Your Weak Areas"
 *  5. When a new case is started, student's concept gaps inform the
 *     attending's coaching focus (fed into StudentModelBus)
 *
 * RESEARCH USE (MechanismDx Concept Mastery Study):
 *  - Does structured MechanismDx use produce a valid concept mastery profile?
 *  - Does concept mastery profile predict downstream diagnostic accuracy?
 *  - Which mechanisms are hardest for each profession? (cross-profession analysis)
 *
 * USED BY: All mechanism/*.html modules, dashboard.html, simulation-engine.html
 */

(function(window) {
  'use strict';

  var SB_URL = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
  var SB_KEY = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_ANON_KEY)||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';
  var LOCAL_KEY = 'rdx_concept_mastery';

  // ── MASTERY LEVELS ─────────────────────────────────────────────────────────
  var MASTERY = {
    NOT_SEEN:    0,
    EXPOSED:     1,   // Student has visited this topic
    STRUGGLING:  2,   // Gap flagged or AI identified misunderstanding
    DEVELOPING:  3,   // Partial understanding demonstrated
    PROFICIENT:  4,   // Correct explanation demonstrated
    MASTERED:    5    // Correct across multiple encounters
  };

  // ── LOCAL STORAGE ──────────────────────────────────────────────────────────
  function _loadProfile() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_KEY) || '{"concepts":{},"updatedAt":null}');
    } catch(e) {
      return { concepts: {}, updatedAt: null };
    }
  }

  function _saveProfile(profile) {
    profile.updatedAt = new Date().toISOString();
    try { localStorage.setItem(LOCAL_KEY, JSON.stringify(profile)); } catch(e) {}
  }

  // ── EMIT CONCEPT SIGNAL ────────────────────────────────────────────────────
  /**
   * Called by MechanismDx modules when a concept mastery signal is detected.
   *
   * @param {object} signal - {
   *   conceptId:    string  — unique concept key, e.g. 'osmotic-demyelination'
   *   conceptLabel: string  — human-readable name
   *   module:       string  — which MechanismDx module (e.g. 'hematology', 'renal')
   *   signalType:   string  — 'gap_flagged' | 'misunderstanding' | 'partial' | 'correct' | 'mastered'
   *   evidence:     string  — brief description of what triggered the signal
   *   studentId:    string  — student email or name
   * }
   */
  function emitConceptSignal(signal) {
    if (!signal || !signal.conceptId) return;

    var profile = _loadProfile();
    var concepts = profile.concepts;
    var now = new Date().toISOString();

    if (!concepts[signal.conceptId]) {
      concepts[signal.conceptId] = {
        conceptId:    signal.conceptId,
        conceptLabel: signal.conceptLabel || signal.conceptId,
        module:       signal.module || 'unknown',
        masteryLevel: MASTERY.NOT_SEEN,
        encounters:   0,
        gaps:         0,
        corrects:     0,
        lastSignal:   null,
        history:      []
      };
    }

    var c = concepts[signal.conceptId];
    c.encounters++;
    c.lastSignal = now;
    c.history.push({
      type: signal.signalType,
      evidence: (signal.evidence || '').slice(0, 200),
      ts: now
    });
    if (c.history.length > 20) c.history = c.history.slice(-20);

    // Update mastery level
    switch (signal.signalType) {
      case 'gap_flagged':
      case 'misunderstanding':
        c.gaps++;
        c.masteryLevel = Math.min(c.masteryLevel, MASTERY.STRUGGLING);
        if (c.masteryLevel === MASTERY.NOT_SEEN) c.masteryLevel = MASTERY.STRUGGLING;
        break;
      case 'partial':
        c.masteryLevel = Math.max(c.masteryLevel, MASTERY.DEVELOPING);
        break;
      case 'correct':
        c.corrects++;
        c.masteryLevel = Math.max(c.masteryLevel, MASTERY.PROFICIENT);
        break;
      case 'mastered':
        c.corrects++;
        c.masteryLevel = MASTERY.MASTERED;
        break;
      default:
        if (c.masteryLevel === MASTERY.NOT_SEEN) c.masteryLevel = MASTERY.EXPOSED;
    }

    profile.concepts = concepts;
    _saveProfile(profile);

    // Async sync to Supabase (non-blocking)
    _syncToSupabase(signal.studentId || 'anon', profile);
  }

  // ── GET PROFILE ────────────────────────────────────────────────────────────
  /**
   * Returns the student's full concept mastery profile.
   * @returns {object} { concepts: {...}, weakAreas: [...], strongAreas: [...] }
   */
  function getProfile() {
    var profile = _loadProfile();
    var concepts = Object.values(profile.concepts);

    var weakAreas = concepts
      .filter(function(c) { return c.masteryLevel <= MASTERY.STRUGGLING && c.gaps > 0; })
      .sort(function(a,b) { return b.gaps - a.gaps })
      .slice(0, 10);

    var strongAreas = concepts
      .filter(function(c) { return c.masteryLevel >= MASTERY.PROFICIENT; })
      .sort(function(a,b) { return b.corrects - a.corrects })
      .slice(0, 10);

    var inProgress = concepts
      .filter(function(c) { return c.masteryLevel === MASTERY.DEVELOPING; })
      .slice(0, 10);

    return {
      concepts:    profile.concepts,
      weakAreas:   weakAreas,
      strongAreas: strongAreas,
      inProgress:  inProgress,
      totalSeen:   concepts.filter(function(c){ return c.masteryLevel > MASTERY.NOT_SEEN; }).length,
      totalGaps:   concepts.filter(function(c){ return c.masteryLevel <= MASTERY.STRUGGLING && c.gaps > 0; }).length,
      totalMastered: concepts.filter(function(c){ return c.masteryLevel >= MASTERY.PROFICIENT; }).length,
      updatedAt:   profile.updatedAt
    };
  }

  /**
   * Returns a compact coaching summary for injection into simulation system prompts.
   * Called by StudentModelBus to inform the attending of known concept gaps.
   * @param {string} studentId
   * @returns {string} 1-3 sentence summary of known concept gaps
   */
  function getCoachingSummary(studentId) {
    var p = getProfile();
    if (p.totalGaps === 0 && p.totalSeen === 0) return '';

    var gaps = p.weakAreas.slice(0, 3).map(function(c) { return c.conceptLabel; });
    var strong = p.strongAreas.slice(0, 2).map(function(c) { return c.conceptLabel; });

    var lines = [];
    if (gaps.length > 0) {
      lines.push('CONCEPT GAPS (MechanismDx): ' + gaps.join(', ') + '.');
    }
    if (strong.length > 0) {
      lines.push('DEMONSTRATED UNDERSTANDING: ' + strong.join(', ') + '.');
    }
    if (lines.length > 0) {
      lines.push('If this case involves any flagged gaps, probe them Socratically.');
    }
    return lines.join(' ');
  }

  // ── AI GAP DETECTION ──────────────────────────────────────────────────────
  /**
   * Analyzes a MechanismDx conversation turn to detect concept signals.
   * Called after each AI response in MechanismDx chat.
   * Emits signals automatically — no student action required.
   *
   * @param {string} studentMessage - What the student said
   * @param {string} aiResponse     - What the AI tutor said
   * @param {string} conceptId      - Current topic being discussed
   * @param {string} conceptLabel   - Human label for the topic
   * @param {string} module         - Module name
   * @param {string} studentId      - Student identifier
   */
  function detectAndEmit(studentMessage, aiResponse, conceptId, conceptLabel, module, studentId) {
    var msg = (studentMessage || '').toLowerCase();
    var ai  = (aiResponse || '').toLowerCase();

    // Gap signals in AI response
    var gapPatterns = [
      'that\'s not quite right', 'let\'s revisit', 'common misconception',
      'actually,', 'careful here', 'not exactly', 'missing', 'forgot',
      'gap', 'incorrect', 'that\'s incorrect', 'think about', 'consider'
    ];
    // Correct signals in AI response
    var correctPatterns = [
      'exactly right', 'correct', 'well done', 'that\'s right', 'perfect',
      'excellent', 'you\'ve got it', 'spot on', 'good understanding'
    ];
    // Student self-flagging
    var selfGapPatterns = [
      'i don\'t understand', 'i\'m confused', 'i don\'t know', 'not sure',
      'what is', 'can you explain', 'i forgot', 'unclear'
    ];

    var signalType = null;
    var evidence = '';

    if (selfGapPatterns.some(function(p){ return msg.includes(p); })) {
      signalType = 'gap_flagged';
      evidence = 'Student expressed confusion: "' + studentMessage.slice(0,80) + '"';
    } else if (gapPatterns.some(function(p){ return ai.includes(p); })) {
      signalType = 'misunderstanding';
      evidence = 'AI identified gap in: "' + studentMessage.slice(0,80) + '"';
    } else if (correctPatterns.some(function(p){ return ai.includes(p); })) {
      signalType = 'correct';
      evidence = 'AI confirmed understanding of: "' + conceptLabel + '"';
    }

    if (signalType) {
      emitConceptSignal({
        conceptId:    conceptId,
        conceptLabel: conceptLabel,
        module:       module,
        signalType:   signalType,
        evidence:     evidence,
        studentId:    studentId
      });
    }
  }

  // ── SUPABASE SYNC ──────────────────────────────────────────────────────────
  async function _syncToSupabase(studentId, profile) {
    if (window._rdxPracticeOnly) return;
    try {
      var payload = {
        student_id:      studentId,
        concepts:        profile.concepts,
        total_seen:      Object.values(profile.concepts).filter(function(c){ return c.masteryLevel > 0; }).length,
        total_gaps:      Object.values(profile.concepts).filter(function(c){ return c.masteryLevel <= MASTERY.STRUGGLING && c.gaps > 0; }).length,
        total_mastered:  Object.values(profile.concepts).filter(function(c){ return c.masteryLevel >= MASTERY.PROFICIENT; }).length,
        updated_at:      new Date().toISOString()
      };
      await fetch(SB_URL + '/rest/v1/mechanism_concept_mastery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SB_KEY,
          'Authorization': 'Bearer ' + SB_KEY,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(payload)
      });
    } catch(e) {
      // Non-critical — local data is preserved
    }
  }

  /**
   * Load mastery profile from Supabase (call at session start).
   * @param {string} studentId
   */
  async function loadFromSupabase(studentId) {
    try {
      var res = await fetch(
        SB_URL + '/rest/v1/mechanism_concept_mastery?student_id=eq.' + encodeURIComponent(studentId) + '&limit=1',
        { headers: { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY } }
      );
      var rows = await res.json();
      if (rows && rows.length > 0 && rows[0].concepts) {
        var profile = _loadProfile();
        // Merge remote into local (remote wins for each concept)
        Object.assign(profile.concepts, rows[0].concepts);
        _saveProfile(profile);
        rdxLog('[MasteryProfile] Loaded from Supabase:', Object.keys(rows[0].concepts).length, 'concepts');
      }
    } catch(e) {
      console.warn('[MasteryProfile] Could not load from Supabase:', e.message);
    }
  }

  // ── PUBLIC API ──────────────────────────────────────────────────────────────
  window.RdxMechanismMastery = {
    MASTERY:           MASTERY,
    emitConceptSignal: emitConceptSignal,
    detectAndEmit:     detectAndEmit,
    getProfile:        getProfile,
    getCoachingSummary: getCoachingSummary,
    loadFromSupabase:  loadFromSupabase
  };

})(window);
