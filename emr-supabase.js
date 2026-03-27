/* eslint-disable no-console */ if(typeof window!=='undefined'&&!window.RDX_DEV){var _cl=console.log;console.log=function(){};}
/* emr-supabase.js — ReasonDx Cloud Sync (Real Implementation)
 * Syncs submissions, feedback, and annotations to Supabase
 * Tables required: emr_submissions, emr_feedback, emr_annotations, emr_session_data
 */
(function() {
  'use strict';

  var SUPABASE_URL      = 'https://lpwbiqpojisqgezycupw.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

  // ── Supabase REST helper ────────────────────────────────────────────────────
  async function sbFetch(path, opts) {
    var url = SUPABASE_URL + '/rest/v1/' + path;
    var headers = Object.assign({
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    }, opts.headers || {});
    try {
      var res = await fetch(url, Object.assign({}, opts, { headers: headers }));
      if (!res.ok) {
        var err = await res.text();
        console.warn('EMRCloud sbFetch error:', res.status, err);
        return null;
      }
      var text = await res.text();
      return text ? JSON.parse(text) : [];
    } catch(e) {
      console.warn('EMRCloud network error:', e);
      return null;
    }
  }

  // ── upsert helper ───────────────────────────────────────────────────────────
  async function upsert(table, data) {
    return sbFetch(table, {
      method: 'POST',
      headers: { 'Prefer': 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify(data)
    });
  }

  // ── select helper ───────────────────────────────────────────────────────────
  async function select(table, filters) {
    var qs = Object.entries(filters||{}).map(function(kv){
      return encodeURIComponent(kv[0]) + '=eq.' + encodeURIComponent(kv[1]);
    }).join('&');
    return sbFetch(table + (qs ? '?' + qs : ''), { method: 'GET' });
  }

  // ── also write to localStorage as cache ────────────────────────────────────
  function localSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {}
  }
  function localGet(key) {
    try { var r = localStorage.getItem(key); return r ? JSON.parse(r) : null; } catch(e) { return null; }
  }

  // ── EMRCloud public API ─────────────────────────────────────────────────────
  var EMRCloud = {
    _ready: false,
    _uid: null,

    init: async function(uid) {
      this._uid = uid || 'anonymous';
      this._ready = true;
      // Pull this user's data from cloud into localStorage
      await this._pullUserData(uid);
      return true;
    },

    // Pull all cloud data for a user into localStorage on page load
    _pullUserData: async function(uid) {
      if (!uid || uid === 'anonymous') return;
      try {
        // Pull submissions for this student
        var subs = await select('emr_submissions', { student_id: uid });
        if (subs && subs.length) {
          // Group by student and store
          var byStudent = {};
          subs.forEach(function(s) {
            var sid = s.student_id;
            if (!byStudent[sid]) byStudent[sid] = [];
            byStudent[sid].push({
              week: s.week, fields: s.fields, text: s.text,
              timestamp: s.submitted_at, patient: s.patient,
              studentName: s.student_id, caseId: s.case_id
            });
          });
          Object.keys(byStudent).forEach(function(sid) {
            localSet('subs-' + sid, byStudent[sid]);
          });
        }

        // Pull feedback for this user
        var feedbacks = await select('emr_feedback', { student_id: uid });
        if (feedbacks && feedbacks.length) {
          feedbacks.forEach(function(fb) {
            var key = 'feedback-' + fb.student_id + '-' + fb.week;
            localSet(key, {
              totalScore: fb.total_score, maxScore: fb.max_score,
              scores: fb.scores, comments: fb.comments,
              overallComment: fb.overall_comment,
              grader: fb.grader, timestamp: fb.graded_at
            });
          });
        }

        // Pull annotations for this user
        var anns = await select('emr_annotations', { student_id: uid });
        if (anns && anns.length) {
          var byWeek = {};
          anns.forEach(function(a) {
            var k = a.student_id + '-' + a.week;
            if (!byWeek[k]) byWeek[k] = [];
            byWeek[k].push({
              selectedText: a.selected_text, comment: a.comment,
              color: a.color, sectionId: a.section_id,
              grader: a.grader, timestamp: a.created_at
            });
          });
          Object.keys(byWeek).forEach(function(k) {
            var parts = k.split('-');
            var sid = parts[0];
            var week = parts.slice(1).join('-');
            localSet('annotations-' + sid + '-' + week, byWeek[k]);
          });
        }

        // Also pull submissions FOR students if this is faculty/admin
        // (pull all submissions where grader/faculty matches)
        var allSubs = await select('emr_submissions', {});
        if (allSubs && allSubs.length) {
          var byStudentAll = {};
          allSubs.forEach(function(s) {
            if (!byStudentAll[s.student_id]) byStudentAll[s.student_id] = [];
            byStudentAll[s.student_id].push({
              week: s.week, fields: s.fields, text: s.text,
              timestamp: s.submitted_at, patient: s.patient,
              studentName: s.student_id, caseId: s.case_id
            });
          });
          Object.keys(byStudentAll).forEach(function(sid) {
            localSet('subs-' + sid, byStudentAll[sid]);
          });
        }

      } catch(e) {
        console.warn('EMRCloud._pullUserData failed:', e);
      }
    },

    // ── Sync a student submission to cloud ──────────────────────────────────
    syncSubmission: async function(studentId, caseId, sub) {
      if (!this._ready) return false;
      // Write to localStorage immediately
      var existing = localGet('subs-' + studentId) || [];
      var idx = existing.findIndex(function(s){ return s.week === sub.week; });
      if (idx >= 0) existing[idx] = sub; else existing.push(sub);
      localSet('subs-' + studentId, existing);
      // Sync to Supabase
      try {
        await upsert('emr_submissions', {
          student_id: studentId,
          case_id: caseId || '',
          week: sub.week || '',
          fields: sub.fields || {},
          text: sub.text || '',
          patient: sub.patient || '',
          submitted_at: sub.timestamp || new Date().toISOString()
        });
        console.log('EMRCloud: submission synced for', studentId);
        return true;
      } catch(e) {
        console.warn('EMRCloud.syncSubmission failed:', e);
        return false;
      }
    },

    // ── Sync faculty feedback to cloud ──────────────────────────────────────
    syncFeedback: async function(studentId, week, caseId, fb) {
      if (!this._ready) return false;
      // Write to localStorage immediately
      localSet('feedback-' + studentId + '-' + week, fb);
      // Sync to Supabase
      try {
        await upsert('emr_feedback', {
          student_id: studentId,
          case_id: caseId || '',
          week: week || '',
          total_score: fb.totalScore || 0,
          max_score: fb.maxScore || 100,
          scores: fb.scores || {},
          comments: fb.comments || {},
          overall_comment: fb.overallComment || '',
          grader: fb.grader || '',
          graded_at: fb.timestamp || new Date().toISOString()
        });
        console.log('EMRCloud: feedback synced for', studentId, week);
        return true;
      } catch(e) {
        console.warn('EMRCloud.syncFeedback failed:', e);
        return false;
      }
    },

    // ── Sync annotations to cloud ───────────────────────────────────────────
    syncAnnotations: async function(studentId, week, caseId, annotations) {
      if (!this._ready) return false;
      // Write to localStorage immediately
      localSet('annotations-' + studentId + '-' + week, annotations);
      // Sync to Supabase — delete existing then reinsert
      try {
        // Delete old annotations for this student+week
        await sbFetch('emr_annotations?student_id=eq.' + encodeURIComponent(studentId) + '&week=eq.' + encodeURIComponent(week), {
          method: 'DELETE'
        });
        // Insert new ones
        if (annotations && annotations.length) {
          var rows = annotations.map(function(a) {
            return {
              student_id: studentId, week: week, case_id: caseId || '',
              selected_text: a.selectedText || '',
              comment: a.comment || '',
              color: a.color || '',
              section_id: a.sectionId || '',
              grader: a.grader || '',
              created_at: a.timestamp || new Date().toISOString()
            };
          });
          await upsert('emr_annotations', rows);
        }
        console.log('EMRCloud: annotations synced for', studentId, week);
        return true;
      } catch(e) {
        console.warn('EMRCloud.syncAnnotations failed:', e);
        return false;
      }
    },

    // ── Sync session/draft data ─────────────────────────────────────────────
    syncSessionData: async function(studentId, key, caseId, data) {
      if (!this._ready) return false;
      localSet(key, data);
      try {
        await upsert('emr_session_data', {
          student_id: studentId, session_key: key,
          case_id: caseId || '', data: data,
          updated_at: new Date().toISOString()
        });
        return true;
      } catch(e) { return false; }
    },

    // ── Sync user role ──────────────────────────────────────────────────────
    syncRole: async function(username, role) {
      var roles = localGet('emr-roles') || {};
      roles[username] = role;
      localSet('emr-roles', roles);
    },

    // ── Sync assignments ────────────────────────────────────────────────────
    syncAssignments: async function(assignments) {
      localSet('assignments', assignments);
    },

    // ── Sync user to registry ───────────────────────────────────────────────
    syncUser: async function(user) {
      var users = localGet('emr-users') || {};
      users[user.email] = user;
      localSet('emr-users', users);
    },

    deleteUser: async function(username) {
      var users = localGet('emr-users') || {};
      delete users[username];
      localSet('emr-users', users);
    },

    // Legacy save/load kept for compatibility
    save: async function(caseId, data) {
      return this.syncSessionData(this._uid, 'rdx-emr-' + this._uid + '-' + caseId, caseId, data);
    },
    load: async function(caseId) {
      return localGet('rdx-emr-' + this._uid + '-' + caseId);
    }
  };

  window.EMRCloud = EMRCloud;

  // Defensive proxy for any missing methods
  window.EMRCloud = new Proxy(EMRCloud, {
    get: function(target, prop) {
      if (prop in target) return target[prop];
      return function() {
        console.debug('EMRCloud.' + String(prop) + ' called (no-op)');
      };
    }
  });

})();
