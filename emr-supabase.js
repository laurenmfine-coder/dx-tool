/* emr-supabase.js — ReasonDx Cloud Sync (Production)
 * Real Supabase integration for cross-device submission, grading, and annotation.
 * Tables: emr_users, emr_submissions, emr_feedback, emr_annotations,
 *          emr_assignments, emr_session_data
 */
(function () {
  'use strict';

  var SUPABASE_URL      = 'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  // ── Low-level fetch helper ──────────────────────────────────────────────────
  function sbFetch(path, opts) {
    var headers = Object.assign({
      'apikey':        SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
      'Content-Type':  'application/json',
      'Prefer':        'return=representation'
    }, opts.headers || {});

    // Use real Supabase JWT if available
    try {
      var raw = localStorage.getItem('reasondx-user');
      if (raw) {
        var u = JSON.parse(raw);
        if (u && u.access_token) headers['Authorization'] = 'Bearer ' + u.access_token;
      }
    } catch (e) {}

    return fetch(SUPABASE_URL + '/rest/v1/' + path, Object.assign({}, opts, { headers: headers }))
      .then(function (r) {
        if (!r.ok) return r.text().then(function (t) { throw new Error(r.status + ': ' + t); });
        var ct = r.headers.get('content-type') || '';
        return ct.indexOf('application/json') >= 0 ? r.json() : r.text();
      });
  }

  function upsert(table, data, conflictCols) {
    return sbFetch(table + '?on_conflict=' + conflictCols, {
      method:  'POST',
      headers: { 'Prefer': 'resolution=merge-duplicates,return=representation' },
      body:    JSON.stringify(data)
    });
  }

  function select(table, query) {
    return sbFetch(table + '?' + query, { method: 'GET' });
  }

  function del(table, query) {
    return sbFetch(table + '?' + query, { method: 'DELETE' });
  }

  function lsSet(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch(e){} }
  function lsGet(key) { try { var r=localStorage.getItem(key); return r?JSON.parse(r):null; } catch(e){return null;} }

  // ── EMRCloud ────────────────────────────────────────────────────────────────
  var EMRCloud = {
    _ready: false,
    _uid:   null,

    init: async function (uid) {
      this._uid   = uid || 'anonymous';
      this._ready = true;
      try { await this._pullAll(uid); }
      catch (e) { console.warn('EMRCloud init pull failed (offline?):', e.message); }
      return true;
    },

    _pullAll: async function (uid) {
      if (!uid) return;

      // 1. Own user record → update local role/tier
      try {
        var users = await select('emr_users', 'email=eq.' + encodeURIComponent(uid) + '&limit=1');
        if (users && users.length) {
          var u = users[0];
          var usersMap = lsGet('emr-users') || {};
          usersMap[uid] = { username: uid, displayName: u.display_name, tier: u.tier, role: u.role };
          lsSet('emr-users', usersMap);
          var rolesMap = lsGet('emr-roles') || {};
          rolesMap[uid] = u.role;
          lsSet('emr-roles', rolesMap);
        }
      } catch(e) { console.warn('pull user record failed:', e.message); }

      // 2. Assignments
      try {
        var assignments = await select('emr_assignments', 'select=*');
        if (assignments && assignments.length) {
          var aMap = {};
          assignments.forEach(function(a) {
            if (!aMap[a.faculty_email]) aMap[a.faculty_email] = [];
            aMap[a.faculty_email].push(a.student_email);
          });
          lsSet('assignments', aMap);
        }
      } catch(e) { console.warn('pull assignments failed:', e.message); }

      // 3. Own submissions (as student)
      try {
        var subs = await select('emr_submissions',
          'user_email=eq.' + encodeURIComponent(uid) + '&order=submitted_at.desc');
        if (subs && subs.length) {
          lsSet('subs-' + uid, subs.map(function(s) { return {
            week: s.week, caseId: s.case_id, fields: s.fields||{},
            text: s.note_text||'', timestamp: s.submitted_at,
            patientName: s.patient_name||'',
            chartReviewData: s.chart_review_data,
            orderValidationData: s.order_validation_data,
            clinicalActions: s.clinical_actions
          }; }));
        }
      } catch(e) { console.warn('pull submissions failed:', e.message); }

      // 4. Own feedback (as student)
      try {
        var feedbacks = await select('emr_feedback', 'student_email=eq.' + encodeURIComponent(uid));
        if (feedbacks && feedbacks.length) {
          feedbacks.forEach(function(fb) {
            lsSet('feedback-' + uid + '-' + fb.week, {
              scores: fb.scores, comments: fb.comments,
              overallComment: fb.overall_comment, grader: fb.grader,
              totalScore: fb.total_score, maxScore: fb.max_score,
              timestamp: fb.updated_at
            });
          });
        }
      } catch(e) { console.warn('pull feedback failed:', e.message); }

      // 5. Own annotations (as student)
      try {
        var anns = await select('emr_annotations', 'student_email=eq.' + encodeURIComponent(uid));
        if (anns && anns.length) {
          anns.forEach(function(a) { lsSet('annotations-' + uid + '-' + a.week, a.annotations||[]); });
        }
      } catch(e) { console.warn('pull annotations failed:', e.message); }

      // 6. If faculty/admin — pull all students' data
      var myRole = (lsGet('emr-roles')||{})[uid];
      if (myRole === 'faculty' || myRole === 'admin') {
        await this._pullFacultyData(uid, myRole);
      }
    },

    _pullFacultyData: async function (uid, role) {
      var studentEmails = [];
      try {
        if (role === 'admin') {
          var allDbUsers = await select('emr_users', 'select=*');
          if (allDbUsers && allDbUsers.length) {
            var usersMap = lsGet('emr-users')||{};
            var rolesMap = lsGet('emr-roles')||{};
            allDbUsers.forEach(function(u) {
              usersMap[u.email] = { username:u.email, displayName:u.display_name, tier:u.tier, role:u.role };
              rolesMap[u.email] = u.role;
            });
            lsSet('emr-users', usersMap);
            lsSet('emr-roles', rolesMap);
            studentEmails = allDbUsers.filter(function(u){return u.role==='student';}).map(function(u){return u.email;});
          }
        } else {
          var assignMap = lsGet('assignments')||{};
          studentEmails = assignMap[uid]||[];
        }
        if (!studentEmails.length) return;

        // All submissions for assigned students
        var allSubs = await select('emr_submissions',
          'user_email=in.(' + studentEmails.map(function(e){return encodeURIComponent(e);}).join(',') + ')&order=submitted_at.desc');
        if (allSubs && allSubs.length) {
          var byStudent = {};
          allSubs.forEach(function(s) {
            if (!byStudent[s.user_email]) byStudent[s.user_email] = [];
            byStudent[s.user_email].push({
              week:s.week, caseId:s.case_id, fields:s.fields||{},
              text:s.note_text||'', timestamp:s.submitted_at,
              patientName:s.patient_name||'',
              chartReviewData:s.chart_review_data,
              orderValidationData:s.order_validation_data,
              clinicalActions:s.clinical_actions
            });
          });
          Object.keys(byStudent).forEach(function(email) { lsSet('subs-'+email, byStudent[email]); });
        }

        // All feedback + annotations for assigned students
        var encoded = studentEmails.map(function(e){return encodeURIComponent(e);}).join(',');
        var fbAll  = await select('emr_feedback',    'student_email=in.(' + encoded + ')');
        var annAll = await select('emr_annotations', 'student_email=in.(' + encoded + ')');

        if (fbAll && fbAll.length) {
          fbAll.forEach(function(fb) {
            lsSet('feedback-'+fb.student_email+'-'+fb.week, {
              scores:fb.scores, comments:fb.comments,
              overallComment:fb.overall_comment, grader:fb.grader,
              totalScore:fb.total_score, maxScore:fb.max_score, timestamp:fb.updated_at
            });
          });
        }
        if (annAll && annAll.length) {
          annAll.forEach(function(a) { lsSet('annotations-'+a.student_email+'-'+a.week, a.annotations||[]); });
        }
      } catch(e) { console.warn('_pullFacultyData failed:', e.message); }
    },

    // ── Public sync methods (called by virtual-emr.html) ─────────────────────

    syncUser: async function (userData) {
      if (!this._ready) return;
      try {
        await upsert('emr_users', {
          email: userData.email,
          display_name: userData.displayName || userData.email.split('@')[0],
          role: userData.role || 'student',
          tier: userData.tier || 'free',
          updated_at: new Date().toISOString()
        }, 'email');
      } catch(e) { console.warn('syncUser failed:', e.message); }
    },

    syncSubmission: async function (studentEmail, caseId, sub) {
      if (!this._ready) return;
      try {
        await upsert('emr_submissions', {
          user_email: studentEmail, case_id: caseId||'', week: sub.week||'',
          fields: sub.fields||{}, note_text: sub.text||'',
          patient_name: sub.patientName||'',
          clinical_actions: sub.clinicalActions||null,
          chart_review_data: sub.chartReviewData||null,
          order_validation_data: sub.orderValidationData||null,
          submitted_at: sub.timestamp||new Date().toISOString()
        }, 'user_email,case_id,week');
        console.log('✓ Submission synced:', studentEmail, sub.week);
      } catch(e) { console.warn('syncSubmission failed:', e.message); }
    },

    syncFeedback: async function (studentEmail, week, caseId, fb) {
      if (!this._ready) return;
      try {
        await upsert('emr_feedback', {
          student_email: studentEmail, week: week, case_id: caseId||'',
          scores: fb.scores||{}, comments: fb.comments||{},
          overall_comment: fb.overallComment||'', grader: fb.grader||'',
          total_score: fb.totalScore||0, max_score: fb.maxScore||100,
          updated_at: new Date().toISOString()
        }, 'student_email,week,case_id');
        console.log('✓ Feedback synced:', studentEmail, week);
      } catch(e) { console.warn('syncFeedback failed:', e.message); }
    },

    syncAnnotations: async function (studentEmail, week, caseId, annotations) {
      if (!this._ready) return;
      try {
        await upsert('emr_annotations', {
          student_email: studentEmail, week: week, case_id: caseId||'',
          annotations: annotations||[], updated_at: new Date().toISOString()
        }, 'student_email,week,case_id');
        console.log('✓ Annotations synced:', studentEmail, week, (annotations||[]).length, 'items');
      } catch(e) { console.warn('syncAnnotations failed:', e.message); }
    },

    syncAssignments: async function (assignMap) {
      if (!this._ready) return;
      try {
        var rows = [];
        Object.keys(assignMap).forEach(function(fac) {
          (assignMap[fac]||[]).forEach(function(stu) {
            rows.push({ faculty_email: fac, student_email: stu });
          });
        });
        if (rows.length) await upsert('emr_assignments', rows, 'faculty_email,student_email');
        console.log('✓ Assignments synced:', rows.length, 'pairs');
      } catch(e) { console.warn('syncAssignments failed:', e.message); }
    },

    syncRole: async function (email, newRole) {
      if (!this._ready) return;
      try {
        await sbFetch('emr_users?email=eq.' + encodeURIComponent(email), {
          method: 'PATCH',
          body: JSON.stringify({ role: newRole, updated_at: new Date().toISOString() })
        });
        console.log('✓ Role synced:', email, newRole);
      } catch(e) { console.warn('syncRole failed:', e.message); }
    },

    syncSessionData: async function (userEmail, dataKey, caseId, data) {
      if (!this._ready) return;
      try {
        await upsert('emr_session_data', {
          user_email: userEmail, data_key: dataKey, case_id: caseId||'',
          data: data||{}, updated_at: new Date().toISOString()
        }, 'user_email,data_key,case_id');
      } catch(e) { console.warn('syncSessionData failed:', e.message); }
    },

    deleteUser: async function (email) {
      if (!this._ready) return;
      try { await del('emr_users', 'email=eq.' + encodeURIComponent(email)); }
      catch(e) { console.warn('deleteUser failed:', e.message); }
    },

    // Legacy compat
    save: async function (caseId, data) {
      return this.syncSessionData(this._uid, 'rdx-emr-'+this._uid+'-'+caseId, caseId, data);
    },
    load: async function (caseId) {
      try {
        var rows = await select('emr_session_data',
          'user_email=eq.'+encodeURIComponent(this._uid)+
          '&data_key=eq.'+encodeURIComponent('rdx-emr-'+this._uid+'-'+caseId)+'&limit=1');
        return (rows&&rows.length) ? rows[0].data : null;
      } catch(e) { return null; }
    },
    listCases: async function () {
      try {
        var prefix = 'rdx-emr-'+this._uid+'-';
        var rows = await select('emr_session_data',
          'user_email=eq.'+encodeURIComponent(this._uid)+
          '&data_key=like.'+encodeURIComponent(prefix+'*'));
        return (rows||[]).map(function(r){return r.data_key.replace(prefix,'');});
      } catch(e) { return []; }
    },
    delete: async function (caseId) {
      try {
        await del('emr_session_data',
          'user_email=eq.'+encodeURIComponent(this._uid)+
          '&data_key=eq.'+encodeURIComponent('rdx-emr-'+this._uid+'-'+caseId));
        return true;
      } catch(e) { return false; }
    }
  };

  window.EMRCloud = EMRCloud;

})();
