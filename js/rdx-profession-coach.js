/**
 * rdx-profession-coach.js — ReasonDx ProfessionCoach Agent
 * ═══════════════════════════════════════════════════════════════
 * Generates weekly reasoning development briefs tailored to each
 * health profession. Synthesizes RPFS, baseline, session history,
 * passive signals, and profession-specific error mode tracking into
 * an interpretive narrative + targeted recommendations.
 *
 * THREE OUTPUTS:
 *  1. weeklyBrief()     → AI-generated narrative coaching summary
 *  2. errorModeReport() → Profession-specific error pattern analysis
 *  3. researchExport()  → De-identified data packet for study analysis
 *
 * USED BY: dashboard.html, faculty-dashboard.html, cohort-analytics.html
 * RESEARCH: feeds longitudinal cohort study data pipeline
 */

(function(window) {
'use strict';

var WORKER_URL = 'https://coachdx-attending.laurenmfine.workers.dev';
var SB_URL     = 'https://lpwbiqpojisqgezycupw.supabase.co';
var SB_KEY     = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0';

// ── PROFESSION METADATA ───────────────────────────────────────────────────────

var PROF_META = {
  medicine:  { title:'Attending Physician',        boardLabel:'USMLE/COMLEX', coachVerb:'diagnose and treat' },
  pa:        { title:'Supervising Physician',      boardLabel:'PANCE',        coachVerb:'manage independently within scope' },
  pharmacy:  { title:'Clinical Pharmacist Preceptor', boardLabel:'NAPLEX',   coachVerb:'optimize pharmacotherapy' },
  optometry: { title:'Attending Optometrist',      boardLabel:'NBEO',         coachVerb:'distinguish ocular from systemic disease' },
  dentistry: { title:'Attending Dentist',          boardLabel:'NBDE/INBDE',   coachVerb:'diagnose and manage orofacial conditions' },
  pt:        { title:'Clinical Instructor (CI)',   boardLabel:'NPTE',         coachVerb:'screen, evaluate, and treat movement dysfunction' },
  ot:        { title:'Supervising Occupational Therapist', boardLabel:'NBCOT', coachVerb:'address occupational performance deficits' },
  nursing:   { title:'Charge Nurse / NP Preceptor', boardLabel:'NCLEX/AANP', coachVerb:'assess, monitor, and communicate' },
  mbs:       { title:'Faculty Mentor',             boardLabel:'MCAT',         coachVerb:'bridge basic science to clinical presentation' },
  other:     { title:'Clinical Supervisor',        boardLabel:'varies',       coachVerb:'reason through clinical problems' }
};

var PROF_ERROR_MODES = {
  medicine:  ['anchoring','premature_closure','availability_bias','commission_bias'],
  pa:        ['anchoring','threshold_confusion','generalist_scatter','scope_uncertainty'],
  pharmacy:  ['drug_class_anchoring','patient_factor_neglect','mechanism_skip','polypharmacy_tunnel'],
  optometry: ['ocular_anchoring','systemic_miss','neuro_underweight','bilateral_symmetry_assumption'],
  dentistry: ['local_anchoring','systemic_miss','pain_attribution_error','pharmacology_gap'],
  pt:        ['structural_anchoring','systemic_miss','red_flag_under_screen','movement_tunnel'],
  ot:        ['functional_skip','diagnosis_avoidance','occupational_lens_delay','cognitive_under_screen'],
  nursing:   ['protocol_anchoring','surveillance_action_gap','sbar_under_use','physician_deference'],
  mbs:       ['mechanism_fragmentation','clinical_bridge_gap','certainty_over_seeking','pattern_absent'],
  other:     ['anchoring','premature_closure']
};

var ERROR_MODE_LABELS = {
  anchoring:                  'Diagnostic Anchoring',
  premature_closure:          'Premature Closure',
  availability_bias:          'Availability Bias',
  commission_bias:            'Commission Bias',
  threshold_confusion:        'Diagnostic Threshold Confusion',
  generalist_scatter:         'Generalist Scatter (too many hypotheses)',
  scope_uncertainty:          'Scope-of-Practice Uncertainty',
  drug_class_anchoring:       'Drug-Class Anchoring',
  patient_factor_neglect:     'Patient Factor Neglect',
  mechanism_skip:             'Mechanism Skip',
  polypharmacy_tunnel:        'Polypharmacy Tunnel Vision',
  ocular_anchoring:           'Ocular Anchoring',
  systemic_miss:              'Missing Systemic Cause',
  neuro_underweight:          'Under-weighting Neurological Cause',
  bilateral_symmetry_assumption: 'Bilateral Symmetry Assumption',
  local_anchoring:            'Local/Structural Anchoring',
  pain_attribution_error:     'Pain Attribution Error',
  pharmacology_gap:           'Pharmacology Knowledge Gap',
  structural_anchoring:       'Structural Anchoring',
  red_flag_under_screen:      'Red Flag Under-Screening',
  movement_tunnel:            'Movement Analysis Tunnel',
  functional_skip:            'Functional Outcome Skip',
  diagnosis_avoidance:        'Diagnosis Avoidance',
  occupational_lens_delay:    'Delayed Occupational Lens',
  cognitive_under_screen:     'Cognitive Under-Screening',
  protocol_anchoring:         'Protocol Anchoring',
  surveillance_action_gap:    'Surveillance-Action Gap',
  sbar_under_use:             'SBAR Under-Use',
  physician_deference:        'Excessive Physician Deference',
  mechanism_fragmentation:    'Mechanism Fragmentation',
  clinical_bridge_gap:        'Mechanism-to-Clinical Bridge Gap',
  certainty_over_seeking:     'Certainty Over-Seeking',
  pattern_absent:             'Pattern Recognition Not Yet Developed'
};

// ── DATA COLLECTORS ───────────────────────────────────────────────────────────

function getProfessionProfile() {
  try {
    var u = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
    return u.professionProfile || null;
  } catch(e) { return null; }
}

function getBaselineScores() {
  try {
    var bs = localStorage.getItem('rdx-baseline-scores');
    return bs ? JSON.parse(bs) : null;
  } catch(e) { return null; }
}

function getRPFS() {
  try {
    var fp = localStorage.getItem('rdx-fingerprint');
    return fp ? JSON.parse(fp) : null;
  } catch(e) { return null; }
}

function getCurrentUser() {
  try {
    var u = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
    return u;
  } catch(e) { return {}; }
}

async function getRecentSessions(userId, limit) {
  limit = limit || 10;
  if (!userId) return null;
  try {
    var res = await fetch(SB_URL + '/rest/v1/rad_study_sessions?user_id=eq.' + userId +
      '&order=created_at.desc&limit=' + limit, {
      headers: { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY }
    });
    var data = await res.json();
    return Array.isArray(data) ? data : null;
  } catch(e) { return null; }
}

async function saveWeeklyBrief(userId, briefData) {
  if (!userId) return;
  try {
    await fetch(SB_URL + '/rest/v1/profession_coach_briefs', {
      method: 'POST',
      headers: {
        'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY,
        'Content-Type': 'application/json', 'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        user_id:      userId,
        profession_id: briefData.professionId,
        week_of:      briefData.weekOf,
        brief_text:   briefData.brief,
        error_modes:  briefData.errorModes,
        dimensions:   briefData.dimensions,
        recommendations: briefData.recommendations,
        research_data: briefData.research
      })
    });
  } catch(e) { console.warn('[ProfessionCoach] Save failed:', e); }
}

// ── ERROR MODE ANALYSIS ───────────────────────────────────────────────────────

function analyzeErrorModes(sessions, professionId) {
  if (!sessions || !sessions.length) return { detected: [], counts: {}, dominant: null };

  var counts = {};
  var profModes = PROF_ERROR_MODES[professionId] || PROF_ERROR_MODES['other'];

  sessions.forEach(function(s) {
    if (s.anchoring_detected)   counts['anchoring'] = (counts['anchoring'] || 0) + 1;
    if (s.premature_closure)    counts['premature_closure'] = (counts['premature_closure'] || 0) + 1;
    if (s.missed_pivot_history) counts['context_miss'] = (counts['context_miss'] || 0) + 1;

    // Profession-specific from passive data
    if (s.passive_data) {
      var pd = typeof s.passive_data === 'string' ? JSON.parse(s.passive_data) : s.passive_data;
      var ps = pd && pd.professionSignals;
      if (ps && ps.flagCounts) {
        // Pharmacy
        if (ps.flagCounts['drug_name_before_mechanism'] > 0) counts['drug_class_anchoring'] = (counts['drug_class_anchoring'] || 0) + 1;
        if (ps.flagCounts['patient_factor_neglect'] > 0)     counts['patient_factor_neglect'] = (counts['patient_factor_neglect'] || 0) + 1;
        // PT
        if (ps.flagCounts['red_flag_not_screened_early'] > 0) counts['red_flag_under_screen'] = (counts['red_flag_under_screen'] || 0) + 1;
        if (ps.flagCounts['functional_outcome_framed'] === 0)  counts['functional_skip'] = (counts['functional_skip'] || 0) + 1;
        // Optometry
        if (ps.flagCounts['ocular_anchoring_risk'] > 0)       counts['ocular_anchoring'] = (counts['ocular_anchoring'] || 0) + 1;
        // OT
        if (ps.flagCounts['diagnosis_without_function'] > 0)  counts['functional_skip'] = (counts['functional_skip'] || 0) + 1;
        // MBS
        if (ps.flagCounts['mechanism_without_clinical'] > 0)  counts['clinical_bridge_gap'] = (counts['clinical_bridge_gap'] || 0) + 1;
      }
    }
  });

  // Identify which profession-expected modes are actually showing up
  var detected = profModes.filter(function(m) { return (counts[m] || 0) > 0; });
  var dominant = detected.length > 0
    ? detected.reduce(function(a, b) { return (counts[a] || 0) >= (counts[b] || 0) ? a : b; })
    : null;

  return { detected: detected, counts: counts, dominant: dominant, total: sessions.length };
}

// ── DIMENSION TRAJECTORY ─────────────────────────────────────────────────────

function computeTrajectory(sessions) {
  if (!sessions || sessions.length < 3) return { direction: 'insufficient_data', evidence: [] };

  var recent = sessions.slice(0, 5);
  var older  = sessions.slice(5, 10);

  function avg(arr, key) {
    var vals = arr.map(function(s) { return s[key]; }).filter(function(v) { return v !== null && v !== undefined; });
    return vals.length > 0 ? vals.reduce(function(a, b) { return a + b; }, 0) / vals.length : null;
  }

  var metrics = {
    accuracy:  { recent: avg(recent, 'target_in_final'), older: avg(older, 'target_in_final') },
    anchoring: { recent: avg(recent, 'anchoring_detected'), older: avg(older, 'anchoring_detected') },
    history:   { recent: avg(recent, 'env_history_score'), older: avg(older, 'env_history_score') }
  };

  var evidence = [];
  var improvements = 0, declines = 0;

  if (metrics.accuracy.recent !== null && metrics.accuracy.older !== null) {
    var diff = metrics.accuracy.recent - metrics.accuracy.older;
    if (diff > 0.1) { improvements++; evidence.push('diagnostic accuracy improving'); }
    else if (diff < -0.1) { declines++; evidence.push('diagnostic accuracy declining'); }
  }
  if (metrics.anchoring.recent !== null && metrics.anchoring.older !== null) {
    var adiff = metrics.anchoring.older - metrics.anchoring.recent; // lower is better
    if (adiff > 0.1) { improvements++; evidence.push('anchoring decreasing'); }
    else if (adiff < -0.1) { declines++; evidence.push('anchoring increasing'); }
  }
  if (metrics.history.recent !== null && metrics.history.older !== null) {
    var hdiff = metrics.history.recent - metrics.history.older;
    if (hdiff > 0.15) { improvements++; evidence.push('history thoroughness improving'); }
  }

  var direction = improvements > declines ? 'improving'
    : declines > improvements ? 'declining' : 'stable';

  return { direction: direction, evidence: evidence, metrics: metrics };
}

// ── AI BRIEF GENERATOR ────────────────────────────────────────────────────────

async function generateBrief(profileData) {
  var prof = profileData.professionId || 'medicine';
  var meta = PROF_META[prof] || PROF_META['other'];

  var systemPrompt = [
    'You are a ' + meta.title + ' writing a weekly reasoning development brief for a ' + (PROF_META[prof] ? prof + ' student' : 'health professions student') + '.',
    'Your role: give honest, specific, encouraging coaching grounded in data.',
    'Core skill you are developing: ability to ' + meta.coachVerb + '.',
    '',
    'Write a 3-paragraph brief:',
    'Para 1: What this student did WELL this week (specific, data-grounded). Max 3 sentences.',
    'Para 2: The ONE most important reasoning pattern to work on. Name the error mode explicitly.',
    '         Give one concrete example from their session data. Max 3 sentences.',
    'Para 3: ONE specific recommended action for next week. Be precise about what case type,',
    '         CoachDx topic, or mechanism module would address their gap. Max 2 sentences.',
    '',
    'Tone: warm clinical supervisor — honest but not harsh. Sound like a real attending/preceptor.',
    'Do NOT use bullet points. Write in flowing prose.',
    'Do NOT start with "Dear" or "Hi". Start directly with the substance.',
    'Board exam target for this student: ' + meta.boardLabel + '.',
    'Always connect recommendations to board readiness when relevant.'
  ].join('\n');

  var userContent = buildBriefContext(profileData);

  try {
    var res = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'passthrough',
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        system: systemPrompt,
        messages: [{ role: 'user', content: userContent }]
      })
    });
    var data = await res.json();
    return (data.content && data.content[0] && data.content[0].text) || null;
  } catch(e) {
    return null;
  }
}

function buildBriefContext(p) {
  var lines = ['STUDENT WEEKLY DATA:'];
  lines.push('Profession: ' + (p.professionLabel || p.professionId));
  if (p.trackId) lines.push('Track: ' + p.trackId);
  if (p.programName) lines.push('Program: ' + p.programName);
  lines.push('Sessions this week: ' + (p.weekSessions || 0));
  lines.push('Total sessions: ' + (p.totalSessions || 0));

  if (p.trajectory) {
    lines.push('Trajectory: ' + p.trajectory.direction);
    if (p.trajectory.evidence.length) lines.push('Evidence: ' + p.trajectory.evidence.join(', '));
  }

  if (p.errorModeAnalysis) {
    var em = p.errorModeAnalysis;
    if (em.dominant) lines.push('Dominant error mode: ' + (ERROR_MODE_LABELS[em.dominant] || em.dominant));
    if (em.detected.length > 1) lines.push('Other error modes detected: ' + em.detected.slice(1,3).map(function(m) { return ERROR_MODE_LABELS[m] || m; }).join(', '));
    lines.push('Sessions with anchoring: ' + (em.counts['anchoring'] || 0) + '/' + em.total);
    lines.push('Sessions with premature closure: ' + (em.counts['premature_closure'] || 0) + '/' + em.total);
  }

  if (p.rpfs) {
    lines.push('RPFS weakest dimension: ' + (p.rpfs.weakest || 'unknown'));
    lines.push('RPFS trajectory: ' + (p.rpfs.trajectory || 'unknown'));
  }

  if (p.baselineScores && p.baselineScores._composite !== null) {
    var bs = p.baselineScores;
    lines.push('Baseline composite: ' + Math.round((bs._composite || 0) * 100) + '%');
    if (bs.anchoring_bias !== null) lines.push('Baseline anchoring resistance: ' + Math.round((bs.anchoring_bias || 0) * 100) + '%');
    if (bs.uncertainty_tolerance !== null) lines.push('Baseline uncertainty tolerance: ' + Math.round((bs.uncertainty_tolerance || 0) * 100) + '%');
  }

  if (p.recentCases && p.recentCases.length) {
    lines.push('Recent cases: ' + p.recentCases.slice(0,3).join(', '));
  }

  if (p.professionSignalsSummary) {
    var ps = p.professionSignalsSummary;
    if (ps.keyMetrics) {
      Object.entries(ps.keyMetrics).forEach(function(e) {
        if (e[1] !== null) lines.push('Profession signal — ' + e[0].replace(/_/g, ' ') + ': ' + e[1]);
      });
    }
  }

  return lines.join('\n');
}

// ── RESEARCH DATA EXPORT ──────────────────────────────────────────────────────

function buildResearchExport(profileData, sessions, errorModes, trajectory) {
  var prof = profileData.professionId || 'medicine';
  return {
    // De-identified (no name, no email)
    professionId:      prof,
    trackId:           profileData.trackId || null,
    programName:       profileData.programName || null,
    yearOfTraining:    profileData.yearOfTraining || null,
    cohortId:          profileData.cohortId || null,
    weekOf:            new Date().toISOString().split('T')[0],

    // Baseline
    baselineComplete:  !!profileData.baselineScores,
    baselineComposite: profileData.baselineScores && profileData.baselineScores._composite !== null
      ? Math.round(profileData.baselineScores._composite * 100) : null,
    baselineDimensions: profileData.baselineScores ? {
      hypothesis_generation: Math.round((profileData.baselineScores.hypothesis_generation || 0) * 100),
      anchoring_bias:        Math.round((profileData.baselineScores.anchoring_bias || 0) * 100),
      uncertainty_tolerance: Math.round((profileData.baselineScores.uncertainty_tolerance || 0) * 100),
      management_reasoning:  Math.round((profileData.baselineScores.management_reasoning || 0) * 100),
      metacognition:         profileData.baselineScores.metacognition ? Math.round(profileData.baselineScores.metacognition * 100) : null
    } : null,

    // Session metrics
    totalSessions:     sessions ? sessions.length : 0,
    weekSessions:      profileData.weekSessions || 0,
    avgDiagnosticAccuracy: sessions ? (sessions.filter(function(s) { return s.target_in_final; }).length / Math.max(sessions.length, 1)) : null,
    avgAnchoringRate:  sessions ? (sessions.filter(function(s) { return s.anchoring_detected; }).length / Math.max(sessions.length, 1)) : null,
    avgHistoryScore:   sessions ? sessions.reduce(function(a, s) { return a + (s.env_history_score || 0); }, 0) / Math.max(sessions.length, 1) : null,

    // Error modes
    dominantErrorMode: errorModes ? errorModes.dominant : null,
    detectedErrorModes: errorModes ? errorModes.detected : [],
    errorModeCounts:   errorModes ? errorModes.counts : {},

    // Trajectory
    trajectoryDirection: trajectory ? trajectory.direction : null,
    trajectoryEvidence:  trajectory ? trajectory.evidence : [],

    // Profession-specific signals (from passive collector)
    professionSignals: profileData.professionSignalsSummary || null,

    // Metadata
    platformVersion:   '1.0',
    exportedAt:        new Date().toISOString()
  };
}

// ── MAIN API ──────────────────────────────────────────────────────────────────

async function weeklyBrief(options) {
  options = options || {};

  var user    = getCurrentUser();
  var userId  = user.supabaseId || user.email || null;
  var profile = getProfessionProfile();

  if (!profile || !profile.professionId) {
    return { error: 'No profession profile set', brief: null };
  }

  var profId = profile.professionId;
  var profLabel = (PROF_META[profId] || {}).title ? profId : profId;

  // Collect all data
  var sessions = await getRecentSessions(userId, 20);
  var baseline = getBaselineScores();
  var rpfs     = getRPFS();

  // Analysis
  var errorModes = analyzeErrorModes(sessions, profId);
  var trajectory = computeTrajectory(sessions || []);

  // Week sessions (last 7 days)
  var oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  var weekSessions = sessions
    ? sessions.filter(function(s) { return new Date(s.created_at).getTime() > oneWeekAgo; }).length
    : 0;

  // Profession signal summary from last session
  var profSignals = null;
  if (sessions && sessions.length > 0 && sessions[0].passive_data) {
    try {
      var pd = typeof sessions[0].passive_data === 'string'
        ? JSON.parse(sessions[0].passive_data) : sessions[0].passive_data;
      profSignals = pd && pd.professionSignals ? pd.professionSignals : null;
    } catch(e) {}
  }

  var profileData = {
    professionId:     profId,
    professionLabel:  profId,
    trackId:          profile.trackId,
    programName:      profile.programName,
    yearOfTraining:   profile.yearOfTraining,
    cohortId:         profile.cohortId,
    baselineScores:   baseline,
    rpfs:             rpfs,
    trajectory:       trajectory,
    errorModeAnalysis: errorModes,
    weekSessions:     weekSessions,
    totalSessions:    sessions ? sessions.length : 0,
    recentCases:      sessions ? sessions.slice(0, 3).map(function(s) { return s.case_id; }) : [],
    professionSignalsSummary: profSignals
  };

  // Generate AI brief
  var briefText = await generateBrief(profileData);

  // Build recommendations
  var recommendations = buildRecommendations(profId, errorModes, rpfs, baseline);

  // Research export
  var research = buildResearchExport(profileData, sessions, errorModes, trajectory);

  var result = {
    professionId:     profId,
    weekOf:           new Date().toISOString().split('T')[0],
    brief:            briefText || buildFallbackBrief(profileData),
    errorModes:       errorModes,
    dimensions:       trajectory.metrics || {},
    recommendations:  recommendations,
    trajectory:       trajectory,
    research:         research,
    generatedAt:      new Date().toISOString()
  };

  // Save to Supabase
  if (userId && profile.researchConsent !== false) {
    await saveWeeklyBrief(userId, result);
  }

  // Cache locally
  localStorage.setItem('rdx-last-weekly-brief', JSON.stringify({
    result: result,
    cachedAt: Date.now()
  }));

  return result;
}

function buildRecommendations(profId, errorModes, rpfs, baseline) {
  var recs = [];
  var dominant = errorModes && errorModes.dominant;

  // Error mode recommendation
  if (dominant) {
    var errorRecMap = {
      drug_class_anchoring:    { label: 'Mechanism-First CoachDx', url: '/CoachDx/mentor-chat.html?topic=Pre-test+Probability', reason: 'Target drug-class anchoring with mechanism-first reasoning' },
      ocular_anchoring:        { label: 'Ocular-Systemic Cases', url: '/browse.html?profession=optometry&mode=simulate', reason: 'Bridge ocular findings to systemic differential' },
      structural_anchoring:    { label: 'Red Flag Screening Module', url: '/CoachDx/mentor-chat.html?topic=Cognitive+Bias+in+Dx', reason: 'Practice systematic red flag screening before structural diagnosis' },
      functional_skip:         { label: 'Cognitive Bias Coaching', url: '/CoachDx/mentor-chat.html?topic=Cognitive+Bias+in+Dx', reason: 'Address functional outcome skip pattern' },
      anchoring:               { label: 'Anchoring Resistance Cases', url: '/browse.html?mode=simulate', reason: 'Cases designed to pull you off the leading hypothesis' },
      premature_closure:       { label: 'DDx Building Workshop', url: '/CoachDx/mentor-chat.html?topic=Building+a+Differential', reason: 'Expand differential depth before narrowing' },
      clinical_bridge_gap:     { label: 'Mechanism → Clinical Bridge', url: '/mechanism/index.html', reason: 'Connect mechanism knowledge to clinical presentations' },
      red_flag_under_screen:   { label: 'Red Flag Screening', url: '/CoachDx/mentor-chat.html?topic=Cognitive+Bias+in+Dx', reason: 'Systematic red flag screening before musculoskeletal treatment' },
    };
    var rec = errorRecMap[dominant] || { label: 'Reasoning Fundamentals', url: '/CoachDx/mentor-chat.html?topic=Building+a+Differential', reason: 'Address dominant error pattern' };
    recs.push({ type: 'error_mode', priority: 1, ...rec });
  }

  // Baseline gap recommendation
  if (baseline) {
    var dims = ['anchoring_bias','uncertainty_tolerance','management_reasoning','hypothesis_generation'];
    var weakest = dims.reduce(function(w, d) {
      return (baseline[d] !== null && (w === null || baseline[d] < baseline[w])) ? d : w;
    }, null);
    if (weakest && baseline[weakest] < 0.6) {
      recs.push({
        type: 'baseline_gap',
        priority: 2,
        label: 'Baseline gap: ' + weakest.replace(/_/g,' '),
        url: '/browse.html?mode=simulate',
        reason: 'Baseline showed ' + Math.round(baseline[weakest]*100) + '% on ' + weakest.replace(/_/g,' ')
      });
    }
  }

  // Profession-specific recommendation
  var profRecs = {
    pharmacy:  { label: 'Pharmacotherapy Cases', url: '/browse.html?mode=coach&profession=pharmacy', reason: 'High-yield NAPLEX pharmacotherapy reasoning' },
    optometry: { label: 'Ocular-Systemic Bridge Cases', url: '/browse.html?mode=simulate', reason: 'NBEO preparation: ocular manifestations of systemic disease' },
    pt:        { label: 'Musculoskeletal + Red Flag Cases', url: '/browse.html?mode=simulate', reason: 'NPTE high-yield: screen before treat' },
    ot:        { label: 'Cognitive Assessment Coaching', url: '/CoachDx/mentor-chat.html?topic=Altered+Mental+Status', reason: 'NBCOT: delirium vs dementia vs depression differential' },
    pa:        { label: 'Generalist Clinical Simulation', url: '/browse.html?mode=simulate', reason: 'PANCE: breadth across all organ systems' },
    nursing:   { label: 'Surveillance & SBAR Practice', url: '/CoachDx/mentor-chat.html?topic=SBAR+Communication', reason: 'NCLEX: recognize change, communicate effectively' },
    mbs:       { label: 'Mechanism Modules', url: '/mechanism/index.html', reason: 'MCAT: connect basic science to clinical vignettes' },
    dentistry: { label: 'Oral-Systemic Pharmacology', url: '/CoachDx/mentor-chat.html?topic=Drug+Allergy', reason: 'INBDE: systemic considerations in dental practice' },
  };
  if (profRecs[profId]) {
    recs.push({ type: 'profession_board', priority: 3, ...profRecs[profId] });
  }

  return recs.slice(0, 3);
}

function buildFallbackBrief(p) {
  var prof = p.professionId || 'medicine';
  var meta = PROF_META[prof] || PROF_META['other'];
  var em   = p.errorModeAnalysis;
  var dominant = em && em.dominant ? (ERROR_MODE_LABELS[em.dominant] || em.dominant) : null;

  var para1 = 'You completed ' + (p.weekSessions || 0) + ' session' + (p.weekSessions !== 1 ? 's' : '') + ' this week' +
    (p.trajectory && p.trajectory.direction === 'improving' ? ' and your reasoning trajectory shows consistent improvement' : '') + '. ' +
    'Your engagement with the platform reflects a commitment to developing the skills needed to ' + meta.coachVerb + '.';

  var para2 = dominant
    ? 'The pattern most worth addressing in your reasoning right now is ' + dominant + '. ' +
      'This is one of the characteristic reasoning challenges for ' + prof + ' learners at your stage, ' +
      'and targeted practice can substantially reduce its frequency within a few weeks.'
    : 'Your session data shows a solid foundation in hypothesis generation. ' +
      'The next challenge is to build greater fluency with evidence integration — specifically, updating your differential when new data contradicts your initial hypothesis.';

  var para3 = 'For next week, I\'d recommend focusing on ' + (p.recentCases && p.recentCases.length > 0 ? 'cases outside your recent practice categories' : 'a full clinical simulation') +
    ' using the CoachDx mentor for a topic where you feel least confident. ' +
    'Consistent with your ' + meta.boardLabel + ' preparation, this will directly address your highest-leverage growth area.';

  return [para1, para2, para3].join('\n\n');
}

function getCachedBrief() {
  try {
    var cached = localStorage.getItem('rdx-last-weekly-brief');
    if (!cached) return null;
    var data = JSON.parse(cached);
    // Cache valid for 7 days
    if (Date.now() - data.cachedAt > 7 * 24 * 60 * 60 * 1000) return null;
    return data.result;
  } catch(e) { return null; }
}

// ── PUBLIC API ────────────────────────────────────────────────────────────────

window.RDX_ProfessionCoach = {
  weeklyBrief:        weeklyBrief,
  getCachedBrief:     getCachedBrief,
  analyzeErrorModes:  analyzeErrorModes,
  computeTrajectory:  computeTrajectory,
  buildResearchExport: buildResearchExport,
  ERROR_MODE_LABELS:  ERROR_MODE_LABELS,
  PROF_META:          PROF_META,
  version:            '1.0.0'
};

})(window);
