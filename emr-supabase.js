/**
 * ReasonDx Virtual EMR — Supabase Cloud Data Layer
 * =================================================
 * Provides cross-device persistence for EMR data.
 * 
 * Architecture:
 *   localStorage = fast synchronous cache (read path)
 *   Supabase     = persistent cloud store (write-through)
 * 
 * On startup: pull Supabase → localStorage (async)
 * On writes:  localStorage (instant) + Supabase (async, fire-and-forget)
 * 
 * Requires: @supabase/supabase-js loaded before this script
 */
(function() {
  'use strict';

  var SUPABASE_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  var sb = null;
  var _currentEmail = null;
  var _ready = false;

  function initClient() {
    if (sb) return sb;
    if (!window.supabase) {
      console.warn('EMRCloud: Supabase JS not loaded, running in offline mode');
      return null;
    }
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return sb;
  }

  // Helpers
  function ls(key) { try { return JSON.parse(localStorage.getItem(key)); } catch(e) { return null; } }
  function lsSet(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

  function log(msg) { console.log('[EMRCloud] ' + msg); }
  function warn(msg, err) { console.warn('[EMRCloud] ' + msg, err || ''); }

  // ════════════════════════════════════════════════════════
  // INIT — Pull all cloud data into localStorage
  // ════════════════════════════════════════════════════════
  async function init(email) {
    _currentEmail = email;
    if (!initClient()) {
      _ready = true;
      return; // offline mode — localStorage only
    }

    log('Syncing data for ' + email);
    var start = Date.now();

    try {
      // Pull in parallel
      var results = await Promise.allSettled([
        pullUsers(),
        pullAssignments(),
        pullSubmissions(email),
        pullFeedback(email),
        pullAnnotations(email),
        pullSessionData(email),
        pullAllSubmissionsForPrivileged(email)
      ]);

      results.forEach(function(r, i) {
        if (r.status === 'rejected') warn('Pull ' + i + ' failed:', r.reason);
      });

      log('Sync complete in ' + (Date.now() - start) + 'ms');
    } catch(e) {
      warn('Init failed, using localStorage cache:', e);
    }

    _ready = true;
  }

  // ════════════════════════════════════════════════════════
  // PULL functions — Supabase → localStorage
  // ════════════════════════════════════════════════════════

  async function pullUsers() {
    var { data, error } = await sb.from('emr_users').select('*');
    if (error) throw error;
    if (!data) return;

    // Build the emr-users and emr-roles maps
    var users = {};
    var roles = {};
    data.forEach(function(u) {
      users[u.email] = {
        username: u.email,
        displayName: u.display_name,
        email: u.email,
        tier: u.tier,
        createdAt: u.created_at
      };
      if (u.role !== 'student') roles[u.email] = u.role;
    });
    lsSet('vemr-emr-users', users);
    lsSet('vemr-emr-roles', roles);
    log('Pulled ' + data.length + ' users');
  }

  async function pullAssignments() {
    var { data, error } = await sb.from('emr_assignments').select('*');
    if (error) throw error;
    if (!data) return;

    // Build faculty→students map
    var assignments = {};
    data.forEach(function(a) {
      if (!assignments[a.faculty_email]) assignments[a.faculty_email] = [];
      assignments[a.faculty_email].push(a.student_email);
    });
    lsSet('vemr-assignments', assignments);
    log('Pulled assignments for ' + Object.keys(assignments).length + ' faculty');
  }

  async function pullSubmissions(email) {
    var { data, error } = await sb.from('emr_submissions')
      .select('*')
      .eq('user_email', email);
    if (error) throw error;
    if (!data || !data.length) return;

    // Convert to the submissions array format the EMR expects
    var subs = data.map(function(row) {
      var sub = {
        week: row.week,
        fields: row.fields || {},
        text: row.note_text || '',
        timestamp: row.submitted_at,
        patient: row.patient_name || '',
        caseId: row.case_id || ''
      };
      if (row.clinical_actions) sub.clinicalActions = row.clinical_actions;
      if (row.chart_review_data) sub.chartReviewData = row.chart_review_data;
      if (row.order_validation_data) sub.orderValidationData = row.order_validation_data;
      if (row.crda_vector) sub.orderCRDAVector = row.crda_vector;
      if (row.case_frame_result) sub.caseFrameResult = row.case_frame_result;
      if (row.case_frame_vector) sub.caseFrameVector = row.case_frame_vector;
      return sub;
    });
    lsSet('vemr-subs-' + email, subs);
    log('Pulled ' + subs.length + ' submissions for current user');
  }

  async function pullAllSubmissionsForPrivileged(email) {
    // Check if user is faculty/admin
    var roles = ls('vemr-emr-roles') || {};
    var role = roles[email] || 'student';
    if (role === 'student') return;

    // Faculty: pull submissions for assigned students
    // Admin: pull all submissions
    var query = sb.from('emr_submissions').select('*');

    if (role === 'faculty') {
      var assignments = ls('vemr-assignments') || {};
      var myStudents = assignments[email] || [];
      if (!myStudents.length) return;
      query = query.in('user_email', myStudents);
    }

    var { data, error } = await query;
    if (error) throw error;
    if (!data) return;

    // Store per-student
    var byStudent = {};
    data.forEach(function(row) {
      if (!byStudent[row.user_email]) byStudent[row.user_email] = [];
      var sub = {
        week: row.week,
        fields: row.fields || {},
        text: row.note_text || '',
        timestamp: row.submitted_at,
        patient: row.patient_name || '',
        caseId: row.case_id || ''
      };
      if (row.clinical_actions) sub.clinicalActions = row.clinical_actions;
      if (row.chart_review_data) sub.chartReviewData = row.chart_review_data;
      if (row.order_validation_data) sub.orderValidationData = row.order_validation_data;
      if (row.case_frame_result) sub.caseFrameResult = row.case_frame_result;
      if (row.case_frame_vector) sub.caseFrameVector = row.case_frame_vector;
      byStudent[row.user_email].push(sub);
    });
    Object.keys(byStudent).forEach(function(studentEmail) {
      lsSet('vemr-subs-' + studentEmail, byStudent[studentEmail]);
    });
    log('Pulled submissions for ' + Object.keys(byStudent).length + ' students');
  }

  async function pullFeedback(email) {
    // Pull feedback where student is this user, or where user is privileged
    var roles = ls('vemr-emr-roles') || {};
    var role = roles[email] || 'student';

    var query = sb.from('emr_feedback').select('*');
    if (role === 'student') {
      query = query.eq('student_email', email);
    }
    // faculty/admin get all feedback (for viewing alongside submissions)

    var { data, error } = await query;
    if (error) throw error;
    if (!data) return;

    data.forEach(function(row) {
      var fb = {
        scores: row.scores || {},
        comments: row.comments || {},
        overallComment: row.overall_comment || '',
        grader: row.grader,
        timestamp: row.updated_at,
        totalScore: row.total_score,
        maxScore: row.max_score
      };
      var key = 'vemr-feedback-' + row.student_email + '-' + row.week;
      lsSet(key, fb);
    });
    log('Pulled ' + data.length + ' feedback records');
  }

  async function pullAnnotations(email) {
    var roles = ls('vemr-emr-roles') || {};
    var role = roles[email] || 'student';

    var query = sb.from('emr_annotations').select('*');
    if (role === 'student') {
      query = query.eq('student_email', email);
    }

    var { data, error } = await query;
    if (error) throw error;
    if (!data) return;

    data.forEach(function(row) {
      var key = 'vemr-annotations-' + row.student_email + '-' + row.week;
      lsSet(key, row.annotations || []);
    });
    log('Pulled ' + data.length + ' annotation sets');
  }

  async function pullSessionData(email) {
    var { data, error } = await sb.from('emr_session_data')
      .select('*')
      .eq('user_email', email);
    if (error) throw error;
    if (!data) return;

    data.forEach(function(row) {
      // Reconstruct the localStorage key: vemr-{data_key}-{email}-{derived_from_key}
      // The data_key stores the full suffix after 'vemr-'
      var key = 'vemr-' + row.data_key;
      lsSet(key, row.data);
    });
    log('Pulled ' + data.length + ' session data items');
  }

  // ════════════════════════════════════════════════════════
  // SYNC functions — localStorage → Supabase (fire-and-forget)
  // ════════════════════════════════════════════════════════

  function syncUser(userData) {
    if (!sb) return;
    var email = userData.email || userData.username;
    sb.from('emr_users').upsert({
      email: email,
      display_name: userData.displayName || userData.display_name || email.split('@')[0],
      role: userData.role || 'student',
      tier: userData.tier || 'free',
      updated_at: new Date().toISOString()
    }, { onConflict: 'email' }).then(function(res) {
      if (res.error) warn('syncUser failed:', res.error);
    });
  }

  function syncRole(email, role) {
    if (!sb) return;
    sb.from('emr_users').update({
      role: role,
      updated_at: new Date().toISOString()
    }).eq('email', email).then(function(res) {
      if (res.error) warn('syncRole failed:', res.error);
    });
  }

  function syncAssignments(assignmentsMap) {
    if (!sb) return;
    // Delete all existing, re-insert
    // This is simpler than diffing for a small dataset
    sb.from('emr_assignments').delete().neq('id', '00000000-0000-0000-0000-000000000000')
      .then(function() {
        var rows = [];
        Object.keys(assignmentsMap).forEach(function(faculty) {
          (assignmentsMap[faculty] || []).forEach(function(student) {
            rows.push({ faculty_email: faculty, student_email: student });
          });
        });
        if (rows.length) {
          sb.from('emr_assignments').insert(rows).then(function(res) {
            if (res.error) warn('syncAssignments insert failed:', res.error);
            else log('Synced ' + rows.length + ' assignments');
          });
        }
      });
  }

  function syncSubmission(email, caseId, sub) {
    if (!sb) return;
    sb.from('emr_submissions').upsert({
      user_email: email,
      case_id: caseId || '',
      week: sub.week,
      fields: sub.fields || {},
      note_text: sub.text || '',
      patient_name: sub.patient || '',
      clinical_actions: sub.clinicalActions || null,
      chart_review_data: sub.chartReviewData || null,
      order_validation_data: sub.orderValidationData || null,
      crda_vector: sub.orderCRDAVector || null,
      case_frame_result: sub.caseFrameResult || null,
      case_frame_vector: sub.caseFrameVector || null,
      submitted_at: sub.timestamp || new Date().toISOString()
    }, { onConflict: 'user_email,case_id,week' }).then(function(res) {
      if (res.error) warn('syncSubmission failed:', res.error);
      else log('Synced submission: ' + email + ' / ' + sub.week);
    });
  }

  function syncFeedback(studentEmail, week, caseId, fb) {
    if (!sb) return;
    sb.from('emr_feedback').upsert({
      student_email: studentEmail,
      week: week,
      case_id: caseId || '',
      scores: fb.scores || {},
      comments: fb.comments || {},
      overall_comment: fb.overallComment || '',
      grader: fb.grader || '',
      total_score: fb.totalScore || 0,
      max_score: fb.maxScore || 0,
      updated_at: new Date().toISOString()
    }, { onConflict: 'student_email,week,case_id' }).then(function(res) {
      if (res.error) warn('syncFeedback failed:', res.error);
      else log('Synced feedback for ' + studentEmail + ' / ' + week);
    });
  }

  function syncAnnotations(studentEmail, week, caseId, annotations) {
    if (!sb) return;
    sb.from('emr_annotations').upsert({
      student_email: studentEmail,
      week: week,
      case_id: caseId || '',
      annotations: annotations || [],
      updated_at: new Date().toISOString()
    }, { onConflict: 'student_email,week,case_id' }).then(function(res) {
      if (res.error) warn('syncAnnotations failed:', res.error);
    });
  }

  function syncSessionData(email, dataKey, caseId, data) {
    if (!sb) return;
    sb.from('emr_session_data').upsert({
      user_email: email,
      data_key: dataKey,
      case_id: caseId || '',
      data: data,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_email,data_key,case_id' }).then(function(res) {
      if (res.error) warn('syncSessionData failed:', res.error);
    });
  }

  function deleteUser(email) {
    if (!sb) return;
    sb.from('emr_users').delete().eq('email', email).then(function(res) {
      if (res.error) warn('deleteUser failed:', res.error);
    });
    // Also clean assignments
    sb.from('emr_assignments').delete().or('faculty_email.eq.' + email + ',student_email.eq.' + email);
  }

  // ════════════════════════════════════════════════════════
  // PUBLIC API
  // ════════════════════════════════════════════════════════
  window.EMRCloud = {
    init: init,
    isReady: function() { return _ready; },
    // Sync functions (call after localStorage writes)
    syncUser: syncUser,
    syncRole: syncRole,
    syncAssignments: syncAssignments,
    syncSubmission: syncSubmission,
    syncFeedback: syncFeedback,
    syncAnnotations: syncAnnotations,
    syncSessionData: syncSessionData,
    deleteUser: deleteUser,
    // Re-pull from cloud (manual refresh)
    refresh: function() { if (_currentEmail) return init(_currentEmail); }
  };

})();
