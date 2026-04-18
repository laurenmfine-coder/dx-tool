/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/**
 * rdx-notebooklm-tracker.js — NotebookLM Study Package Research Tracker
 * ═══════════════════════════════════════════════════════════════════════
 * Enables Sub-Project 2 (Closed-Loop Learning study) by tracking:
 *  - Whether a student downloaded a study package after Case N
 *  - Timestamp of download
 *  - Which case generated the package
 *  - Whether the next session shows improvement correlated with package use
 *
 * DATA FLOW:
 *  1. Student completes Case N → study package generated → download button shown
 *  2. Student clicks download → this module records the event
 *  3. Next time student opens simulation → module checks for prior package use
 *  4. That flag is included in the Supabase session record
 *  5. Analysis: Case N+1 performance × package_used flag = Sub-Project 2 outcome
 *
 * STORAGE: localStorage (immediate) + Supabase rad_study_sessions column
 *
 * RESEARCH DESIGN:
 *  - No randomization needed — natural variation in package download captures
 *    the between-condition difference (dose-response quasi-experimental design)
 *  - Students who download and use vs. students who skip = comparison groups
 *  - Strengthened by session timing: if next session is <72h after download,
 *    more likely the package was actually used (proximity heuristic)
 */

(function(window) {
  'use strict';

  var STORAGE_KEY = 'rdx_nlm_tracker';

  // ── READ/WRITE ──────────────────────────────────────────────────────────────

  function _load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch(e) { return {}; }
  }

  function _save(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch(e) {}
  }

  /**
   * Call this when the student clicks the Download Study Package button.
   * @param {string} caseId   - The case just completed
   * @param {string} studentId - Student name/email
   */
  function recordDownload(caseId, studentId) {
    var data = _load();
    var key = (studentId || 'anon').replace(/[^a-zA-Z0-9_]/g, '_');
    if (!data[key]) data[key] = [];
    data[key].push({
      caseId: caseId,
      downloadedAt: new Date().toISOString(),
      nextSessionChecked: false
    });
    // Keep last 20 records per student
    if (data[key].length > 20) data[key] = data[key].slice(-20);
    _save(data);
    rdxLog('[NLM Tracker] Download recorded:', caseId, studentId);
  }

  /**
   * Call this at session START to check if a prior package was downloaded.
   * Returns the most recent unused package record, or null.
   * @param {string} studentId
   * @returns {object|null} { caseId, downloadedAt, hoursSinceDownload }
   */
  function checkPriorPackage(studentId) {
    var data = _load();
    var key = (studentId || 'anon').replace(/[^a-zA-Z0-9_]/g, '_');
    var records = data[key] || [];
    // Find the most recent unmatched download
    var unused = records.filter(function(r) { return !r.nextSessionChecked; });
    if (!unused.length) return null;
    var latest = unused[unused.length - 1];
    var hoursSince = (Date.now() - new Date(latest.downloadedAt).getTime()) / 3600000;
    return {
      caseId: latest.caseId,
      downloadedAt: latest.downloadedAt,
      hoursSinceDownload: Math.round(hoursSince * 10) / 10,
      withinStudyWindow: hoursSince <= 72   // within 72h = likely used
    };
  }

  /**
   * Mark the prior package record as "consumed" by a follow-up session.
   * Call this after exportStudyData() to prevent double-counting.
   * @param {string} studentId
   */
  function markSessionConsumed(studentId) {
    var data = _load();
    var key = (studentId || 'anon').replace(/[^a-zA-Z0-9_]/g, '_');
    if (!data[key]) return;
    data[key].forEach(function(r) { if (!r.nextSessionChecked) r.nextSessionChecked = true; });
    _save(data);
  }

  /**
   * Build the research payload to include in the Supabase upsert.
   * Adds `notebooklm_prior_package` field to the session record.
   * @param {string} studentId
   * @returns {object} Fields to merge into the Supabase data object
   */
  function getSessionFields(studentId) {
    var prior = checkPriorPackage(studentId);
    return {
      notebooklm_prior_package: prior ? {
        prior_case_id: prior.caseId,
        downloaded_at: prior.downloadedAt,
        hours_since_download: prior.hoursSinceDownload,
        within_study_window: prior.withinStudyWindow
      } : null
    };
  }

  // ── PUBLIC API ──────────────────────────────────────────────────────────────
  window.RdxNLMTracker = {
    recordDownload: recordDownload,
    checkPriorPackage: checkPriorPackage,
    markSessionConsumed: markSessionConsumed,
    getSessionFields: getSessionFields
  };

})(window);
