/* js/rdx-supabase.js — Supabase Client for ReasonDx
 * ═══════════════════════════════════════════════════
 * Provides: auth, data persistence, analytics tracking.
 * 
 * SETUP: Replace SUPABASE_URL and SUPABASE_ANON_KEY below
 * with your project values from Supabase Dashboard → Settings → API.
 *
 * Load BEFORE any page scripts:
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 *   <script src="js/rdx-supabase.js"></script>
 */
(function() {
'use strict';

// Guard against duplicate initialization (causes GoTrueClient warning)
if (window.RDX && window.RDX.ready !== undefined) return;


// ═══════════════════════════════════════
// CONFIGURATION — UPDATE THESE VALUES
// ═══════════════════════════════════════
var SUPABASE_URL  = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_URL)||'https://lpwbiqpojisqgezycupw.supabase.co';
var SUPABASE_ANON_KEY = (window.RDX_CONFIG&&window.RDX_CONFIG.SUPABASE_ANON_KEY)||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

// ═══════════════════════════════════════
// CLIENT INITIALIZATION
// ═══════════════════════════════════════
var supabase = null;
var currentUser = null;
var currentProfile = null;

function init() {
  if (window._rdxSbClient) {
    supabase = window._rdxSbClient;
  } else if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window._rdxSbClient = supabase;
  } else if (typeof supabaseJs !== 'undefined') {
    supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window._rdxSbClient = supabase;
  } else {
    console.warn('[RDX] Supabase JS library not loaded. Analytics will use localStorage fallback.');
    return false;
  }

  // Listen for auth state changes
  supabase.auth.onAuthStateChange(function(event, session) {
    if (session && session.user) {
      currentUser = session.user;
      loadProfile(session.user.id);
      // Bridge Supabase session → reasondx-user localStorage so inline guards work
      try {
        var existing = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
        localStorage.setItem('reasondx-user', JSON.stringify({
          ...existing,
          email: session.user.email,
          name: existing.name || session.user.email.split('@')[0],
          supabaseId: session.user.id,
          lastLogin: new Date().toISOString()
        }));
      } catch(e) {}
      document.dispatchEvent(new CustomEvent('rdx:auth', { detail: { user: session.user, event: event } }));

      // Auto-track pending referral code from URL or localStorage
      if (event === 'SIGNED_IN') {
        try {
          var pendingRef = localStorage.getItem('rdx-pending-ref') ||
            new URLSearchParams(window.location.search).get('ref');
          if (pendingRef) trackReferral(pendingRef);
        } catch(e) {}
      }
    } else {
      currentUser = null;
      currentProfile = null;
      // Only clear reasondx-user on explicit sign-out, not on session-not-found
      if (event === 'SIGNED_OUT') {
        try { localStorage.removeItem('reasondx-user'); } catch(e) {}
      }
      document.dispatchEvent(new CustomEvent('rdx:auth', { detail: { user: null, event: event } }));
    }
  });

  return true;
}

// ═══════════════════════════════════════
// AUTH METHODS
// ═══════════════════════════════════════
async function signUp(email, password, metadata) {
  if (!supabase) return { error: { message: 'Supabase not initialized' } };
  var result = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: metadata || {}
    }
  });
  return result;
}

async function signIn(email, password) {
  if (!supabase) return { error: { message: 'Supabase not initialized' } };
  return await supabase.auth.signInWithPassword({ email: email, password: password });
}

async function signInWithMagicLink(email) {
  if (!supabase) return { error: { message: 'Supabase not initialized' } };
  return await supabase.auth.signInWithOtp({ email: email });
}

async function signOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
  currentUser = null;
  currentProfile = null;
}

async function getSession() {
  if (!supabase) return null;
  var result = await supabase.auth.getSession();
  return result.data.session;
}

async function getUser() {
  if (currentUser) return currentUser;
  var session = await getSession();
  return session ? session.user : null;
}

// ═══════════════════════════════════════
// PROFILE METHODS
// ═══════════════════════════════════════
async function loadProfile(userId) {
  if (!supabase) return null;
  try {
    var result = await supabase
      .from('profiles')
      .select('*')  // program and specialty are direct columns on profiles
      .eq('id', userId)
      .single();
    if (result.data) {
      currentProfile = result.data;
    }
    return result.data || null;
  } catch(e) {
    console.warn('[RDX] loadProfile failed:', e.message);
    return null;
  }
}

async function updateProfile(updates) {
  try {
    if (!supabase || !currentUser) return { error: 'Not authenticated' };
    return await supabase
      .from('profiles')
      .update(updates)
      .eq('id', currentUser.id);
  } catch(e) { return { error: e.message }; }
}

function getProfile() {
  return currentProfile;
}

function isRole(role) {
  return currentProfile && currentProfile.role === role;
}

function isPD() {
  return isRole('program_director') || isRole('admin');
}

// ═══════════════════════════════════════
// CASE ATTEMPT TRACKING
// ═══════════════════════════════════════
async function startCaseAttempt(caseId, opts) {
  try {  if (!supabase) return fallbackStore('case_start', caseId, opts);

  var row = {
    user_id: currentUser ? currentUser.id : null,
    case_id: caseId,
    setting: (opts && opts.setting) || null,
    tool: (opts && opts.tool) || 'virtual-emr',
    total_stages: (opts && opts.totalStages) || null,
    milestone_tags: (opts && opts.milestoneTags) || [],
    metadata: (opts && opts.metadata) || {}
  };

  var result = await supabase.from('case_attempts').insert(row).select().single();
  if (result.data) {
    // Store attempt ID for later updates
    sessionStorage.setItem('rdx-current-attempt', result.data.id);
  }
  return result;
  } catch(e) {
    console.warn('[RDX] startCaseAttempt failed:', e.message);
    return null;
  }
}

async function completeCaseAttempt(attemptId, data) {
  try {
    if (!supabase) return fallbackStore('case_complete', attemptId, data);

    var id = attemptId || sessionStorage.getItem('rdx-current-attempt');
    if (!id) return { error: 'No active attempt' };

    var result = await supabase
      .from('case_attempts')
      .update({
        completed_at: new Date().toISOString(),
        dx_submitted: data.dxSubmitted || null,
        dx_correct: data.dxCorrect || null,
        time_seconds: data.timeSeconds || 0,
        stages_completed: data.stagesCompleted || 0
      })
      .eq('id', id);

    // Auto-score milestones if case has milestone tags
    if (data.dxCorrect !== false) {
      autoScoreMilestones(id);
    }

    return result;
  } catch(e) {
    console.warn('[RDX] completeCaseAttempt failed:', e.message);
    return null;
  }
}

// ═══════════════════════════════════════
// MILESTONE AUTO-SCORING
// ═══════════════════════════════════════
// Level thresholds: how many correct case completions to reach each level
var LEVEL_THRESHOLDS = { 1: 0, 2: 2, 3: 5, 4: 10, 5: 18 };

function evidenceToLevel(count) {
  if (count >= LEVEL_THRESHOLDS[5]) return 5;
  if (count >= LEVEL_THRESHOLDS[4]) return 4;
  if (count >= LEVEL_THRESHOLDS[3]) return 3;
  if (count >= LEVEL_THRESHOLDS[2]) return 2;
  return 1;
}

async function autoScoreMilestones(attemptId) {
  if (!supabase || !currentUser) return;

  // Get the attempt to find case_id and milestone_tags
  var attempt = await supabase
    .from('case_attempts')
    .select('case_id, milestone_tags')
    .eq('id', attemptId)
    .single();

  if (!attempt.data) return;

  var tags = attempt.data.milestone_tags || [];

  // Also try MILESTONE_DATA if tags are empty
  if (tags.length === 0 && window.MILESTONE_DATA && window.MILESTONE_DATA.cases) {
    var caseInfo = window.MILESTONE_DATA.cases[attempt.data.case_id];
    if (caseInfo) tags = caseInfo.sub || [];
  }

  if (tags.length === 0) return;

  // For each milestone tag, upsert the score
  for (var i = 0; i < tags.length; i++) {
    var milestone = tags[i];

    // Get current score
    var current = null;
    try {
      var res = await supabase
        .from('milestone_scores')
        .select('evidence_count')
        .eq('user_id', currentUser.id)
        .eq('milestone', milestone)
        .single();
      current = res.data;
    } catch(e) { /* doesn't exist yet */ }

    var newCount = (current ? current.evidence_count : 0) + 1;
    var newLevel = evidenceToLevel(newCount);

    await supabase
      .from('milestone_scores')
      .upsert({
        user_id: currentUser.id,
        milestone: milestone,
        level: newLevel,
        evidence_count: newCount,
        last_evidence_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,milestone' });
  }
}

async function advanceCRTStage(attemptId, stageNum, stageData) {
  if (!supabase) return;
  var id = attemptId || sessionStorage.getItem('rdx-current-attempt');
  if (!id) return;

  // Update stages_completed
  await supabase
    .from('case_attempts')
    .update({ stages_completed: stageNum })
    .eq('id', id);

  // Log event
  await trackEvent('crt_stage_complete', id, {
    stage: stageNum,
    data: stageData
  });
}

// ═══════════════════════════════════════
// CONSULT TRACKING
// ═══════════════════════════════════════
async function startConsult(caseId, specialist) {
  if (!supabase) return fallbackStore('consult_start', caseId, specialist);

  var result = await supabase.from('consult_attempts').insert({
    user_id: currentUser ? currentUser.id : null,
    case_id: caseId,
    specialist: specialist
  }).select().single();

  if (result.data) {
    sessionStorage.setItem('rdx-current-consult', result.data.id);
  }
  return result;
}

async function addConsultMessage(consultId, message) {
  if (!supabase) return;
  var id = consultId || sessionStorage.getItem('rdx-current-consult');
  if (!id) return;

  // Fetch current messages, append, update
  var current = await supabase.from('consult_attempts').select('messages, message_count').eq('id', id).single();
  if (!current.data) return;

  var msgs = current.data.messages || [];
  msgs.push(message);

  return await supabase
    .from('consult_attempts')
    .update({ messages: msgs, message_count: msgs.length })
    .eq('id', id);
}

async function completeConsult(consultId, rubricScores) {
  if (!supabase) return;
  var id = consultId || sessionStorage.getItem('rdx-current-consult');
  if (!id) return;

  return await supabase
    .from('consult_attempts')
    .update({
      completed_at: new Date().toISOString(),
      rubric_scores: rubricScores || {}
    })
    .eq('id', id);
}

// ═══════════════════════════════════════
// PROCEDURE TRACKING
// ═══════════════════════════════════════
async function logProcedure(type, data) {
  if (!supabase) return fallbackStore('procedure', type, data);

  return await supabase.from('procedure_attempts').insert({
    user_id: currentUser ? currentUser.id : null,
    procedure_type: type,
    score: data.score || null,
    time_seconds: data.timeSeconds || null,
    passed: data.passed || null,
    metadata: data.metadata || {}
  });
}

// ═══════════════════════════════════════
// MILESTONE SCORING
// ═══════════════════════════════════════
async function updateMilestone(milestone, level, evidenceCount) {
  if (!supabase || !currentUser) return;

  return await supabase
    .from('milestone_scores')
    .upsert({
      user_id: currentUser.id,
      milestone: milestone,
      level: level,
      evidence_count: evidenceCount,
      last_evidence_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,milestone' });
}

async function getMilestones(userId) {
  try {
    if (!supabase) return [];
    var uid = userId || (currentUser && currentUser.id);
    if (!uid) return [];

    var result = await supabase
      .from('milestone_scores')
      .select('*')
      .eq('user_id', uid);
    return result.data || [];
  } catch(e) {
    console.warn('[RDX] getMilestones failed:', e.message);
    return [];
  }
}

// ═══════════════════════════════════════
// ANALYTICS EVENTS
// ═══════════════════════════════════════
async function trackEvent(eventType, attemptId, eventData) {
  if (!supabase) return fallbackStore('event', eventType, eventData);
  // Drop telemetry events when there's no logged-in user — the
  // analytics_events table has user_id NOT NULL and inserting null
  // returns 400. Anonymous-page telemetry should be a no-op, not an
  // error in the console.
  if (!currentUser || !currentUser.id) {
    if (window.RDX_DEV) console.log('[RDX] trackEvent skipped (anonymous):', eventType);
    return null;
  }
  if (!eventType) return null;

  try {
    // Plain insert. The previous implementation used upsert with
    // onConflict: 'user_id,attempt_id,event_type' and ignoreDuplicates,
    // which silently dropped every repeat event of the same type per
    // user (page_view, chart_tab_view, crt_answer_submit, etc.) and
    // also depended on a unique index that does not exist on the
    // analytics_events table. Result: ~2 rows in 2 months. We want
    // every event recorded, so a plain insert is correct here.
    var result = await supabase.from('analytics_events').insert({
      user_id: currentUser.id,
      attempt_id: attemptId || null,
      event_type: eventType,
      event_data: eventData || {}
    });
    if (result && result.error) {
      console.warn('[RDX] trackEvent insert error:', result.error.message || result.error);
    } else if (window.RDX_DEV) {
      console.log('[RDX] trackEvent inserted:', eventType);
    }
    return result;
  } catch(e) {
    // Telemetry must never break the app — swallow and warn.
    console.warn('[RDX] trackEvent failed:', e && e.message);
    return null;
  }
}

// ═══════════════════════════════════════
// PROGRAM DIRECTOR QUERIES
// ═══════════════════════════════════════
async function getProgramFellows() {
  if (!supabase || !currentProfile || !currentProfile.program_id) return [];

  var result = await supabase
    .from('profiles')
    .select('*')
    .eq('program_id', currentProfile.program_id)
    .eq('role', 'fellow')
    .order('display_name');
  return result.data || [];
}

async function getProgramCohortSummary() {
  if (!supabase || !currentProfile) return [];

  var result = await supabase
    .from('program_cohort_summary')
    .select('*')
    .eq('program_id', currentProfile.program_id);
  return result.data || [];
}

async function getProgramMilestoneSnapshot() {
  if (!supabase || !currentProfile) return [];

  var result = await supabase
    .from('milestone_snapshot')
    .select('*')
    .eq('program_id', currentProfile.program_id);
  return result.data || [];
}

async function getProgramCategoryPerformance() {
  if (!supabase || !currentProfile) return [];

  var result = await supabase
    .from('category_performance')
    .select('*')
    .eq('program_id', currentProfile.program_id);
  return result.data || [];
}

// ═══════════════════════════════════════
// INDIVIDUAL ANALYTICS QUERIES
// ═══════════════════════════════════════
async function getMyStats() {
  if (!supabase || !currentUser) return null;

  var cases = await supabase
    .from('case_attempts')
    .select('*')
    .eq('user_id', currentUser.id)
    .order('started_at', { ascending: false });

  var consults = await supabase
    .from('consult_attempts')
    .select('id, specialist, started_at')
    .eq('user_id', currentUser.id);

  var procedures = await supabase
    .from('procedure_attempts')
    .select('*')
    .eq('user_id', currentUser.id);

  var milestones = await getMilestones();

  var caseData = cases.data || [];
  var completed = caseData.filter(function(c) { return c.completed_at; });
  var correct = completed.filter(function(c) { return c.dx_correct; });
  var totalSeconds = completed.reduce(function(s, c) { return s + (c.time_seconds || 0); }, 0);

  return {
    casesCompleted: completed.length,
    casesTotal: caseData.length,
    accuracy: completed.length > 0 ? Math.round(correct.length / completed.length * 100) : 0,
    hoursLogged: (totalSeconds / 3600).toFixed(1),
    consultCalls: (consults.data || []).length,
    procedures: (procedures.data || []).length,
    milestones: milestones,
    recentCases: caseData.slice(0, 20)
  };
}

async function getWeeklyActivity(weeks) {
  if (!supabase || !currentUser) return [];
  var n = weeks || 12;
  var since = new Date();
  since.setDate(since.getDate() - (n * 7));

  var result = await supabase
    .from('analytics_events')
    .select('created_at')
    .eq('user_id', currentUser.id)
    .gte('created_at', since.toISOString())
    .order('created_at');

  if (!result.data) return [];

  // Group by week and day
  var heatmap = [];
  for (var w = 0; w < n; w++) {
    var week = [];
    for (var d = 0; d < 7; d++) week.push(0);
    heatmap.push(week);
  }

  var now = new Date();
  result.data.forEach(function(evt) {
    var dt = new Date(evt.created_at);
    var diffDays = Math.floor((now - dt) / 86400000);
    var weekIdx = n - 1 - Math.floor(diffDays / 7);
    var dayIdx = dt.getDay();
    if (weekIdx >= 0 && weekIdx < n) {
      heatmap[weekIdx][dayIdx] = Math.min(4, heatmap[weekIdx][dayIdx] + 1);
    }
  });

  return heatmap;
}

// ═══════════════════════════════════════
// FALLBACK: localStorage when Supabase is unavailable
// ═══════════════════════════════════════
function fallbackStore(type, key, data) {
  try {
    var store = JSON.parse(localStorage.getItem('rdx-offline-queue') || '[]');
    store.push({
      type: type,
      key: key,
      data: data,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('rdx-offline-queue', JSON.stringify(store));
  } catch (e) { /* silent */ }
  return { data: null, error: null };
}

// Flush offline queue when connection is restored
async function flushOfflineQueue() {
  if (!supabase || !currentUser) return;
  try {
    var queue = JSON.parse(localStorage.getItem('rdx-offline-queue') || '[]');
    if (queue.length === 0) return;

    for (var i = 0; i < queue.length; i++) {
      var item = queue[i];
      if (item.type === 'event') {
        await trackEvent(item.key, null, item.data);
      }
      // Add more flush handlers as needed
    }
    localStorage.removeItem('rdx-offline-queue');
  } catch (e) { /* silent */ }
}

// ─── REFERRAL SYSTEM ─────────────────────────────────────────────────────────

/**
 * generateReferralCode — creates a unique REF-XX0000 style code for the
 * current user and persists it to Supabase + localStorage fallback.
 */
async function generateReferralCode() {
  var user = await getUser();
  if (!user) return null;

  var existing = localStorage.getItem('rdx-referral-code-' + user.id);
  if (existing) return existing;

  try {
    var { data: rows } = await supabase
      .from('referrals')
      .select('code')
      .eq('referrer_id', user.id)
      .is('referred_user_id', null)
      .limit(1);
    if (rows && rows.length > 0) {
      localStorage.setItem('rdx-referral-code-' + user.id, rows[0].code);
      return rows[0].code;
    }
  } catch (e) {}

  var letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  var code = 'REF-' +
    letters[Math.floor(Math.random() * letters.length)] +
    letters[Math.floor(Math.random() * letters.length)] +
    String(Math.floor(Math.random() * 9000) + 1000);

  try {
    await supabase.from('referrals').insert({
      code: code,
      referrer_id: user.id,
      reward_tier: 'standard'
    });
  } catch (e) {}

  localStorage.setItem('rdx-referral-code-' + user.id, code);
  return code;
}

/**
 * trackReferral — called during registration when a referral code is present
 * in the URL (?ref=REF-XX0000) or localStorage ('rdx-pending-ref').
 */
async function trackReferral(code) {
  if (!code) return null;
  var user = await getUser();
  if (!user) {
    try { localStorage.setItem('rdx-pending-ref', code); } catch (e) {}
    return null;
  }
  try { localStorage.removeItem('rdx-pending-ref'); } catch (e) {}

  try {
    var { data: rows, error } = await supabase
      .from('referrals')
      .select('*')
      .eq('code', code)
      .is('referred_user_id', null)
      .limit(1);

    if (error || !rows || rows.length === 0) return null;
    var row = rows[0];
    if (row.referrer_id === user.id) return null; // no self-referral

    var { data: existing } = await supabase
      .from('referrals')
      .select('id')
      .eq('referrer_id', row.referrer_id)
      .not('referred_user_id', 'is', null);

    var count = existing ? existing.length : 0;
    var tier = count >= 10 ? 'gold' : count >= 5 ? 'silver' : count >= 1 ? 'bronze' : 'standard';

    await supabase
      .from('referrals')
      .update({ referred_user_id: user.id, reward_tier: tier })
      .eq('id', row.id);

    await trackEvent('referral_completed', null, {
      referrer_id: row.referrer_id,
      referred_id: user.id,
      code: code,
      tier: tier
    });

    return { referrerId: row.referrer_id, code: code, tier: tier };
  } catch (e) { return null; }
}

/**
 * getReferralStats — returns the current user's referral summary:
 * their code, total successful referrals, tier, and reward description.
 */
async function getReferralStats() {
  var user = await getUser();
  if (!user) return null;

  var code = await generateReferralCode();
  var rewards = {
    none:   'Refer 1 person to unlock Bronze rewards',
    bronze: '1 month Pro free — share with 5 for Silver',
    silver: '3 months Pro free — share with 10 for Gold',
    gold:   'Lifetime Pro discount — thank you!'
  };

  try {
    var { data: referrals, error } = await supabase
      .from('referrals')
      .select('*')
      .eq('referrer_id', user.id);

    if (error) throw error;
    var completed = (referrals || []).filter(function(r) { return r.referred_user_id; });
    var count = completed.length;
    var tier = count >= 10 ? 'gold' : count >= 5 ? 'silver' : count >= 1 ? 'bronze' : 'none';

    return {
      code:      code,
      total:     count,
      tier:      tier,
      reward:    rewards[tier],
      nextTier:  count < 1 ? 'bronze' : count < 5 ? 'silver' : count < 10 ? 'gold' : null,
      nextAt:    count < 1 ? 1 : count < 5 ? 5 : count < 10 ? 10 : null,
      referrals: completed
    };
  } catch (e) {
    return {
      code:      localStorage.getItem('rdx-referral-code-' + user.id) || code,
      total:     0,
      tier:      'none',
      reward:    rewards.none,
      nextTier:  'bronze',
      nextAt:    1,
      referrals: []
    };
  }
}

// ═══════════════════════════════════════
// PUBLIC API
// ═══════════════════════════════════════
var initialized = init();

// Support async loading of Supabase CDN script:
// If the CDN script loads after rdx-supabase.js, it can call RDXSupabaseInit()
// to retry initialization. Pages using <script async> set onload="if(window.RDXSupabaseInit)RDXSupabaseInit()"
window.RDXSupabaseInit = function() {
  if (!initialized) {
    initialized = init();
    if (window.RDX) window.RDX.ready = initialized;
  }
};


async function getLeaderboard(limit) {
  try {
    if (!supabase) return [];
    limit = limit || 10;
    var result = await supabase
      .from('profiles')
      .select('display_name, cases_completed, total_score, plan')
      .order('cases_completed', { ascending: false })
      .limit(limit);
    if (result.error) return [];
    return result.data || [];
  } catch(e) { return []; }
}

window.RDX = {
  // State
  ready: initialized,
  getClient: function() { return supabase; },
  getUser: getUser,
  getProfile: getProfile,
  isRole: isRole,
  isPD: isPD,

  // Auth
  auth: {
    signUp: signUp,
    signIn: signIn,
    signInWithMagicLink: signInWithMagicLink,
    signOut: signOut,
    getSession: getSession
  },

  // Profile
  profile: {
    load: loadProfile,
    update: updateProfile
  },

  // Tracking
  track: {
    caseStart: startCaseAttempt,
    caseComplete: completeCaseAttempt,
    crtStage: advanceCRTStage,
    consultStart: startConsult,
    consultMessage: addConsultMessage,
    consultComplete: completeConsult,
    procedure: logProcedure,
    milestone: updateMilestone,
    event: trackEvent
  },

  // Analytics
  analytics: {
    myStats: getMyStats,
    myWeeklyActivity: getWeeklyActivity,
    myMilestones: getMilestones,
    programFellows: getProgramFellows,
    programCohort: getProgramCohortSummary,
    programMilestones: getProgramMilestoneSnapshot,
    programCategories: getProgramCategoryPerformance
  },

  // Referrals
  referrals: {
    track: trackReferral,
    stats: getReferralStats,
    generateCode: generateReferralCode
  },

  // Leaderboard
  leaderboard: getLeaderboard,

  // Offline
  flushOffline: flushOfflineQueue
};

// Auto-flush offline queue on auth
document.addEventListener('rdx:auth', function(e) {
  if (e.detail.user) {
    flushOfflineQueue();
  }
});

})();
