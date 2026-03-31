/**
 * rdx-email-triggers.js
 * Client-side helper — fires events to rdx-email-worker after key user actions.
 * Include in simulation-engine.html and virtual-emr.html.
 * 
 * Usage:
 *   RDXEmail.simCompleted({ email, firstName, caseId, diagnosis, specialty, acuity, ddxAccuracy, phasesCompleted, totalCompleted });
 *   RDXEmail.emrSubmitted({ email, firstName, caseId, diagnosis, isFirstEver });
 *   RDXEmail.reengagement({ email, firstName }); // called from Supabase cron or scheduled worker
 */

(function(window) {
  'use strict';

  var EMAIL_WORKER_URL = 'https://rdx-email.laurenmfine.workers.dev';
  // ^ Update this once the worker is deployed

  function fire(eventType, email, firstName, data) {
    if (!email || !email.includes('@')) return; // don't fire for demo/guest users
    if (email.endsWith('@reasondx.local')) return;

    var payload = {
      eventType: eventType,
      email: email,
      firstName: firstName || '',
      data: data || {},
    };

    // Fire and forget — don't block UI
    fetch(EMAIL_WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(function(err) {
      console.warn('[RDXEmail] Worker unreachable:', err.message);
    });
  }

  /**
   * Call after simulation debrief is shown (phase 10 complete)
   * Pull totalCompleted from localStorage or Supabase
   */
  function simCompleted(opts) {
    var opts = opts || {};
    var totalKey = 'rdx-total-sims-' + (opts.email || 'anon');
    var prev = parseInt(localStorage.getItem(totalKey) || '0', 10);
    var total = prev + 1;
    localStorage.setItem(totalKey, String(total));

    var firstKey = 'rdx-first-sim-sent-' + (opts.email || 'anon');
    var isFirstEver = !localStorage.getItem(firstKey);
    if (isFirstEver) localStorage.setItem(firstKey, '1');

    fire('simulation_complete', opts.email, opts.firstName, {
      caseId:          opts.caseId,
      diagnosis:       opts.diagnosis,
      specialty:       opts.specialty,
      acuity:          opts.acuity,
      ddxAccuracy:     opts.ddxAccuracy,    // float 0–1
      phasesCompleted: opts.phasesCompleted,
      totalCompleted:  total,
      isFirstEver:     isFirstEver,
    });
  }

  /**
   * Call after EMR note is submitted (submitDoc)
   */
  function emrSubmitted(opts) {
    var opts = opts || {};
    var firstKey = 'rdx-first-emr-sent-' + (opts.email || 'anon');
    var isFirstEver = !localStorage.getItem(firstKey);
    if (isFirstEver) localStorage.setItem(firstKey, '1');

    fire('emr_submitted', opts.email, opts.firstName, {
      caseId:      opts.caseId,
      diagnosis:   opts.diagnosis,
      isFirstEver: isFirstEver,
    });
  }

  /**
   * Called by Supabase edge function or scheduled worker for 7-day inactivity
   */
  function reengagement(opts) {
    var opts = opts || {};
    fire('reengagement', opts.email, opts.firstName, {});
  }

  /**
   * Called for faculty weekly digest (from Supabase cron)
   */
  function facultyWeekly(opts) {
    var opts = opts || {};
    fire('faculty_weekly', opts.email, opts.firstName, {
      cohort:      opts.cohort,
      institution: opts.institution,
      role:        'faculty',
    });
  }

  window.RDXEmail = {
    simCompleted:   simCompleted,
    emrSubmitted:   emrSubmitted,
    reengagement:   reengagement,
    facultyWeekly:  facultyWeekly,
  };

})(window);
