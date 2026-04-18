/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx Platform Intelligence — rdx-platform.js
 * ═══════════════════════════════════════════════════════════════
 * The connective tissue of the living platform.
 * Loaded on EVERY page via nav-global.js.
 *
 * 1. EVENT BUS — write learning events from any module
 * 2. PROFILE MANAGER — read/update the unified student model
 * 3. SEQUENCE ENGINE — generate and track learning sequences
 * 4. CONTINUITY TRACKER — patient encounters across modules
 * 5. CROSS-MODULE HOOKS — automatic event capture
 *
 * Requires: Supabase client available as window.supabase
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  const SUPABASE_URL = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
  const SUPABASE_ANON_KEY = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_ANON_KEY)||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';
  const WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';

  let sb = null;
  try {
    if (window.supabase) sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch(e) {}

  // Get current user email from various sources
  function getUserEmail() {
    try {
      var auth = JSON.parse(localStorage.getItem('rdx_user') || '{}');
      if (auth.email) return auth.email;
      var sbAuth = JSON.parse(localStorage.getItem('sb-lpwbiqpojisqgezycupw-auth-token') || '{}');
      if (sbAuth.user && sbAuth.user.email) return sbAuth.user.email;
    } catch(e) {}
    return null;
  }


  // ═══════════════════════════════════════════════════════════════
  // 1. EVENT BUS
  // ═══════════════════════════════════════════════════════════════

  const EventBus = {

    /**
     * Record a learning event. Called from any module.
     * This is the WRITE side of the platform intelligence.
     */
    emit: async function(eventType, sourceModule, eventData, options) {
      options = options || {};
      var email = options.studentEmail || getUserEmail();
      if (!email && !options.allowAnonymous) {
        rdxLog('Platform event skipped (no user):', eventType);
        return false;
      }

      var event = {
        student_email: email || 'anonymous',
        event_type: eventType,
        source_module: sourceModule,
        case_id: options.caseId || null,
        phase: options.phase || null,
        session_id: options.sessionId || null,
        event_data: eventData,
        skill_impacts: options.skillImpacts || null
      };

      // Local event for same-page listeners
      window.dispatchEvent(new CustomEvent('rdx:learning_event', { detail: event }));

      // Persist to Supabase
      if (sb) {
        try {
          var result = await sb.from('learning_events').insert(event);
          if (result.error) {
            console.warn('Event persist failed:', result.error.message);
            // Queue for retry
            EventBus._queueForRetry(event);
            return false;
          }

          // Trigger profile update
          if (email) ProfileManager.onEvent(event);
          return true;
        } catch(e) {
          EventBus._queueForRetry(event);
          return false;
        }
      }

      return false;
    },

    // Retry queue for offline/failed events
    _queueForRetry: function(event) {
      try {
        var queue = JSON.parse(localStorage.getItem('rdx_event_queue') || '[]');
        queue.push(event);
        if (queue.length > 100) queue = queue.slice(-100);
        localStorage.setItem('rdx_event_queue', JSON.stringify(queue));
      } catch(e) {}
    },

    // Flush retry queue
    flushQueue: async function() {
      if (!sb) return;
      try {
        var queue = JSON.parse(localStorage.getItem('rdx_event_queue') || '[]');
        if (queue.length === 0) return;
        var result = await sb.from('learning_events').insert(queue);
        if (!result.error) {
          localStorage.setItem('rdx_event_queue', '[]');
          rdxLog('Flushed ' + queue.length + ' queued events');
        }
      } catch(e) {}
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 2. PROFILE MANAGER
  // ═══════════════════════════════════════════════════════════════

  const ProfileManager = {

    _cache: null,
    _cacheExpiry: 0,

    /**
     * Get the current student's profile. Caches for 5 minutes.
     */
    get: async function(email) {
      email = email || getUserEmail();
      if (!email || !sb) return null;

      if (this._cache && this._cacheExpiry > Date.now() && this._cache.email === email) {
        return this._cache;
      }

      try {
        var result = await sb.from('student_profiles').select('*').eq('email', email).single();
        if (result.error) {
          if (result.error.code === 'PGRST116') {
            // Profile doesn't exist yet — create it
            return await this.create(email);
          }
          return null;
        }
        this._cache = result.data;
        this._cacheExpiry = Date.now() + 300000;
        return result.data;
      } catch(e) {
        return null;
      }
    },

    /**
     * Create a new student profile.
     */
    create: async function(email) {
      if (!sb) return null;
      var profile = {
        email: email,
        display_name: email.split('@')[0],
        first_active_at: new Date().toISOString(),
        last_active_at: new Date().toISOString()
      };
      try {
        var result = await sb.from('student_profiles').insert(profile).select().single();
        if (result.error) return null;
        this._cache = result.data;
        this._cacheExpiry = Date.now() + 300000;
        return result.data;
      } catch(e) { return null; }
    },

    /**
     * Update profile based on a learning event.
     * This is where the magic happens — events shape the profile.
     */
    onEvent: async function(event) {
      if (!sb || !event.student_email || event.student_email === 'anonymous') return;

      var updates = { last_active_at: new Date().toISOString() };

      // Apply skill impacts
      if (event.skill_impacts) {
        var profile = await this.get(event.student_email);
        if (profile) {
          Object.entries(event.skill_impacts).forEach(function(entry) {
            var skillCol = 'skill_' + entry[0];
            if (profile[skillCol] !== undefined) {
              var newVal = Math.max(0, Math.min(1, profile[skillCol] + entry[1]));
              updates[skillCol] = Math.round(newVal * 1000) / 1000;
            }
          });
        }
      }

      // Update session counts
      if (event.event_type === 'case_completed') {
        updates.total_cases_completed = sb.rpc ? undefined : undefined; // handled below
      }

      // Increment counters
      try {
        // Get current profile for incrementing
        var current = await this.get(event.student_email);
        if (current) {
          if (event.event_type === 'case_completed') {
            updates.total_cases_completed = (current.total_cases_completed || 0) + 1;
            updates.total_sessions = (current.total_sessions || 0) + 1;
            // Add to completed cases list
            var completed = current.completed_cases || [];
            if (event.case_id && completed.indexOf(event.case_id) === -1) {
              completed.push(event.case_id);
              updates.completed_cases = completed;
            }
          }
          if (event.event_type === 'coaching_session') {
            updates.total_coaching_sessions = (current.total_coaching_sessions || 0) + 1;
          }
          if (event.event_type === 'mechanism_quiz') {
            updates.total_mechanism_modules = (current.total_mechanism_modules || 0) + 1;
          }

          // Update gaps
          if (event.event_type === 'gap_identified' && event.event_data.gapId) {
            var gaps = current.top_gaps || [];
            var exists = gaps.some(function(g) { return g.id === event.event_data.gapId; });
            if (!exists) {
              gaps.push({
                id: event.event_data.gapId,
                category: event.event_data.category,
                severity: event.event_data.severity,
                count: 1,
                firstSeen: new Date().toISOString()
              });
              // Keep top 10 gaps sorted by count
              gaps.sort(function(a, b) { return (b.count || 1) - (a.count || 1); });
              updates.top_gaps = gaps.slice(0, 10);
            } else {
              gaps = gaps.map(function(g) {
                if (g.id === event.event_data.gapId) g.count = (g.count || 1) + 1;
                return g;
              });
              updates.top_gaps = gaps;
            }
          }

          // Update bias tendencies
          if (event.event_type === 'bias_detected' && event.event_data.biasType) {
            var biasCol = 'bias_' + event.event_data.biasType.replace(/_/g, '_');
            if (current[biasCol] !== undefined) {
              updates[biasCol] = Math.min(1, current[biasCol] + 0.05);
            }
          }
        }

        await sb.from('student_profiles')
          .update(updates)
          .eq('email', event.student_email);

        this._cache = null;
        this._cacheExpiry = 0;
      } catch(e) {
        console.warn('Profile update failed:', e);
      }
    },

    /**
     * Get the skill radar data for visualization.
     */
    getSkillRadar: async function(email) {
      var profile = await this.get(email);
      if (!profile) return null;
      return {
        'History-Taking': profile.skill_history_taking,
        'Differential': profile.skill_differential_generation,
        'Test Ordering': profile.skill_test_ordering,
        'Data Integration': profile.skill_data_integration,
        'Management': profile.skill_management,
        'Communication': profile.skill_communication,
        'Time Mgmt': profile.skill_time_management,
        'Metacognition': profile.skill_metacognition
      };
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 3. SEQUENCE ENGINE
  // ═══════════════════════════════════════════════════════════════

  const SequenceEngine = {

    /**
     * Generate a personalized learning sequence using Claude.
     */
    generate: async function(email) {
      var profile = await ProfileManager.get(email);
      if (!profile) return null;

      var systemPrompt = 'You are a medical education curriculum engine. Given a student\'s learning profile, generate a personalized 5-step learning sequence. Each step specifies a module, action, URL, and the gap it addresses. Return ONLY a JSON array of steps. No explanation.\n\nAvailable modules: mechanismdx (/mechanism/), coachdx (/CoachDx/mentor-chat.html), casedx (/casedx.html), ed_board (/virtual-emr.html), clinic_board (/clinic-board.html), study_hub (/study-hub.html), ecg_trainer (/ecg/).\n\nRules:\n1. Start with knowledge review (MechanismDx) before application (cases)\n2. Address the top gap first\n3. Include at least one SpacedRep review step\n4. End with a case that tests whether gaps improved\n5. Each step: {order, module, action, url, reason, targetGap}';

      var profileSummary = JSON.stringify({
        year: profile.training_year,
        skills: {
          history: profile.skill_history_taking,
          differential: profile.skill_differential_generation,
          testing: profile.skill_test_ordering,
          integration: profile.skill_data_integration,
          management: profile.skill_management
        },
        topGaps: (profile.top_gaps || []).slice(0, 3),
        completedCases: profile.completed_cases || [],
        calibration: profile.uncertainty_calibration,
        totalSessions: profile.total_sessions
      });

      try {
        var resp = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studyMode: true,
            studySystem: systemPrompt,
            studyModel: 'claude-haiku-4-5-20251001',
            messages: [{ role: 'user', content: profileSummary }],
            max_tokens: 800
          })
        });
        var data = await resp.json();
        var text = (data.content && data.content[0] && data.content[0].text) || '[]';
        text = text.replace(/```json\s*|```\s*/g, '').trim();
        var steps = JSON.parse(text);

        // Save to Supabase
        if (sb) {
          // Supersede old sequences
          await sb.from('learning_sequences')
            .update({ status: 'superseded' })
            .eq('student_email', email)
            .eq('status', 'active');

          await sb.from('learning_sequences').insert({
            student_email: email,
            title: 'Your Learning Plan',
            steps: steps,
            rationale: 'Generated from skill profile and gap analysis',
            target_gaps: (profile.top_gaps || []).slice(0, 3)
          });
        }

        return steps;
      } catch(e) {
        console.error('Sequence generation failed:', e);
        return null;
      }
    },

    /**
     * Mark a step as completed.
     */
    completeStep: async function(email, stepOrder) {
      if (!sb) return;
      try {
        var result = await sb.from('learning_sequences')
          .select('*')
          .eq('student_email', email)
          .eq('status', 'active')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (result.error || !result.data) return;

        var steps = result.data.steps || [];
        steps = steps.map(function(s) {
          if (s.order === stepOrder) {
            s.completed = true;
            s.completedAt = new Date().toISOString();
          }
          return s;
        });

        var allDone = steps.every(function(s) { return s.completed; });
        await sb.from('learning_sequences')
          .update({ steps: steps, status: allDone ? 'completed' : 'active' })
          .eq('id', result.data.id);
      } catch(e) {}
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 4. CONTINUITY TRACKER
  // ═══════════════════════════════════════════════════════════════

  const ContinuityTracker = {

    /**
     * Record a patient encounter in any module.
     */
    recordEncounter: async function(email, patientId, patientName, encounter) {
      if (!sb || !email) return;
      try {
        // Check if this patient chain exists
        var result = await sb.from('patient_continuity')
          .select('*')
          .eq('student_email', email)
          .eq('patient_id', patientId)
          .single();

        if (result.error && result.error.code === 'PGRST116') {
          // Create new chain
          await sb.from('patient_continuity').insert({
            student_email: email,
            patient_id: patientId,
            patient_name: patientName,
            encounters: [encounter],
            last_encounter_module: encounter.module,
            last_encounter_date: new Date().toISOString()
          });
        } else if (result.data) {
          // Append to existing chain
          var encounters = result.data.encounters || [];
          encounters.push(encounter);
          await sb.from('patient_continuity')
            .update({
              encounters: encounters,
              last_encounter_module: encounter.module,
              last_encounter_date: new Date().toISOString(),
              updated_at: new Date().toISOString()
            })
            .eq('id', result.data.id);
        }
      } catch(e) { console.warn('Continuity tracking failed:', e); }
    },

    /**
     * Get all encounters for a patient by this student.
     */
    getPatientHistory: async function(email, patientId) {
      if (!sb || !email) return null;
      try {
        var result = await sb.from('patient_continuity')
          .select('*')
          .eq('student_email', email)
          .eq('patient_id', patientId)
          .single();
        return result.data || null;
      } catch(e) { return null; }
    },

    /**
     * Get all patients this student has seen (for clinic board continuity).
     */
    getStudentPatients: async function(email) {
      if (!sb || !email) return [];
      try {
        var result = await sb.from('patient_continuity')
          .select('patient_id, patient_name, encounters, last_encounter_date, follow_up_due')
          .eq('student_email', email)
          .order('last_encounter_date', { ascending: false });
        return result.data || [];
      } catch(e) { return []; }
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 5. CROSS-MODULE HOOKS
  // ═══════════════════════════════════════════════════════════════
  // Auto-capture events from page context without modules
  // needing to explicitly call the event bus.

  function autoCapture() {
    var email = getUserEmail();
    if (!email) return;

    // Track page visit
    var path = window.location.pathname.toLowerCase();
    var module = 'unknown';
    if (path.includes('mentor-chat') || path.includes('coachdx')) module = 'coachdx';
    else if (path.includes('casedx') || path.includes('case-browser')) module = 'casedx';
    else if (path.includes('mechanism')) module = 'mechanismdx';
    else if (path.includes('virtual-emr')) module = 'ed_board';
    else if (path.includes('clinic-board')) module = 'clinic_board';
    else if (path.includes('rad-study') && !path.includes('dashboard')) module = 'rad_study';
    else if (path.includes('study-hub')) module = 'study_hub';
    else if (path.includes('ecg')) module = 'ecg_trainer';
    else if (path.includes('start')) module = 'navigator';

    if (module !== 'unknown') {
      EventBus.emit('module_visit', module, { page: path }, { studentEmail: email });
    }

    // Flush any queued events from prior failed attempts
    EventBus.flushQueue();

    // Ensure profile exists
    ProfileManager.get(email);
  }

  // Run auto-capture after a short delay
  setTimeout(autoCapture, 2000);


  // ═══════════════════════════════════════════════════════════════
  // EXPORTS
  // ═══════════════════════════════════════════════════════════════

  window.RdxPlatform = {
    EventBus: EventBus,
    ProfileManager: ProfileManager,
    SequenceEngine: SequenceEngine,
    ContinuityTracker: ContinuityTracker,
    getUserEmail: getUserEmail,
    version: '1.0.0'
  };

})();
