// ═══════════════════════════════════════════════════════════════
// CASEFRAME SCORING ENGINE
// ReasonDx · caseframe-engine.js
//
// Scores student documentation against dynamically generated
// illness scripts. Evaluates:
//   • Problem identification completeness
//   • Medication reconciliation accuracy
//   • Allergy documentation
//   • HPI quality (OLDCARTS, pertinent +/-)
//   • Physical exam thoroughness
//   • Assessment quality (DDx, clinical reasoning)
//   • Plan appropriateness
//   • Workup completeness (labs + imaging ordered)
//   • Must-not-miss considerations
//
// Called by virtual-emr.html on note submission:
//   CaseFrame.score(caseId, noteFields, extras) → result object
// ═══════════════════════════════════════════════════════════════

(function(){
"use strict";

function norm(s){ return (s||'').toLowerCase(); }
function inc(hay,needle){ return norm(hay).indexOf(norm(needle)) >= 0; }
function wordCount(s){ return (s||'').split(/\s+/).filter(Boolean).length; }
function pct(n,d){ return d > 0 ? Math.round((n/d)*100) : 0; }

// ═══════════════════════════════════════════════════════════════
// SCORING FUNCTIONS
// ═══════════════════════════════════════════════════════════════

// 1. PROBLEM LIST COMPLETENESS (15 pts)
function scoreProblems(script, fields, extras){
  var assess = norm(fields.assess || '');
  var plan = norm(fields.plan || '');
  var combined = assess + ' ' + plan;
  var studentProbs = (extras.problems || []).map(function(p){ return norm(p.problem || p); });

  var found = [], missed = [];
  script.expectedProblems.forEach(function(prob){
    var probN = norm(prob);
    var hit = inc(combined, prob) || studentProbs.some(function(sp){ return inc(sp, probN) || inc(probN, sp); });
    if(hit) found.push(prob);
    else missed.push(prob);
  });

  var coverage = script.expectedProblems.length > 0 ? found.length / script.expectedProblems.length : 1;
  var score = Math.round(coverage * 15);

  return {
    score: Math.min(score, 15), max: 15,
    label: 'Problem Identification',
    found: found, missed: missed,
    detail: found.length + '/' + script.expectedProblems.length + ' active problems identified'
  };
}

// 2. MEDICATION RECONCILIATION (10 pts)
function scoreMeds(script, fields){
  var medsText = norm(fields.meds || '') + ' ' + norm(fields.hpi || '') + ' ' + norm(fields.plan || '');
  var found = [], missed = [];

  script.expectedMeds.forEach(function(med){
    if(inc(medsText, med.name)) found.push(med.fullName);
    else missed.push(med.fullName);
  });

  var coverage = script.expectedMeds.length > 0 ? found.length / script.expectedMeds.length : 1;
  var score = Math.round(coverage * 10);

  return {
    score: Math.min(score, 10), max: 10,
    label: 'Medication Reconciliation',
    found: found, missed: missed,
    detail: found.length + '/' + script.expectedMeds.length + ' medications documented'
  };
}

// 3. ALLERGY DOCUMENTATION (5 pts)
function scoreAllergies(script, fields){
  var allergyText = norm(fields.allergies || '') + ' ' + norm(fields.hpi || '');
  var found = [], missed = [];

  script.expectedAllergies.forEach(function(a){
    if(inc(allergyText, a.allergen)) found.push(a.allergen + (a.reaction ? ' (' + a.reaction + ')' : ''));
    else missed.push(a.allergen);
  });

  var coverage = script.expectedAllergies.length > 0 ? found.length / script.expectedAllergies.length : 1;
  var score = Math.round(coverage * 5);

  return {
    score: Math.min(score, 5), max: 5,
    label: 'Allergy Documentation',
    found: found, missed: missed,
    detail: found.length + '/' + script.expectedAllergies.length + ' allergies documented'
  };
}

// 4. HPI QUALITY (15 pts)
function scoreHPI(script, fields){
  var hpi = norm(fields.hpi || '') + ' ' + norm(fields.cc || '');
  var score = 0;
  var feedback = [];

  // Length check (2 pts)
  var wc = wordCount(fields.hpi || '');
  if(wc >= 100){ score += 2; feedback.push({type:'strength', msg:'Adequate HPI length (' + wc + ' words)'}); }
  else if(wc >= 50){ score += 1; feedback.push({type:'warn', msg:'HPI is brief (' + wc + ' words) — aim for ≥100 words'}); }
  else { feedback.push({type:'miss', msg:'HPI is too short (' + wc + ' words)'}); }

  // OLDCARTS framework (4 pts)
  var oldcarts = {
    onset: ['onset','started','began','woke','sudden','gradual','day','hour','week','ago'].some(function(t){ return inc(hpi,t); }),
    location: ['location','localize','substernal','epigastric','right','left','bilateral','diffuse','radiates'].some(function(t){ return inc(hpi,t); }),
    duration: ['duration','constant','intermittent','hours','days','minutes','weeks','ongoing','persistent'].some(function(t){ return inc(hpi,t); }),
    character: ['character','sharp','dull','pressure','burning','stabbing','tearing','crampy','aching','throbbing','squeezing'].some(function(t){ return inc(hpi,t); }),
    aggravating: ['worse','aggravat','exertion','eating','movement','coughing','inspiration','position','bending'].some(function(t){ return inc(hpi,t); }),
    relieving: ['reliev','better','rest','nitro','tylenol','ibuprofen','position','nothing','medication'].some(function(t){ return inc(hpi,t); }),
    timing: ['timing','morning','night','after meals','constant','episodic','waxing','waning','frequency','recurrent'].some(function(t){ return inc(hpi,t); }),
    severity: ['severity','scale','10','pain','worst','mild','moderate','severe','rated'].some(function(t){ return inc(hpi,t); })
  };
  var oldcartsHit = Object.values(oldcarts).filter(Boolean).length;
  if(oldcartsHit >= 7){ score += 4; feedback.push({type:'strength', msg:'Excellent OLDCARTS coverage (' + oldcartsHit + '/8)'}); }
  else if(oldcartsHit >= 5){ score += 3; feedback.push({type:'warn', msg:'Partial OLDCARTS (' + oldcartsHit + '/8)'}); }
  else if(oldcartsHit >= 3){ score += 2; feedback.push({type:'warn', msg:'Incomplete OLDCARTS (' + oldcartsHit + '/8)'}); }
  else { score += 1; feedback.push({type:'miss', msg:'Missing OLDCARTS framework (' + oldcartsHit + '/8)'}); }

  // Category-specific terms (4 pts)
  var catHit = 0;
  script.hpiTerms.forEach(function(t){ if(inc(hpi,t)) catHit++; });
  var catPct = script.hpiTerms.length > 0 ? catHit / script.hpiTerms.length : 1;
  if(catPct >= 0.5){ score += 4; }
  else if(catPct >= 0.3){ score += 3; }
  else if(catPct >= 0.15){ score += 2; }
  else { score += 1; }
  feedback.push({type: catPct >= 0.3 ? 'strength' : 'warn', msg: catHit + ' of ' + script.hpiTerms.length + ' category-relevant HPI terms found'});

  // Pertinent negatives (3 pts)
  var negTerms = ['denies','no ','negative','absent','without','ruled out','r/o'];
  var hasNegs = negTerms.some(function(t){ return inc(hpi,t); });
  if(hasNegs){ score += 3; feedback.push({type:'strength', msg:'Pertinent negatives documented'}); }
  else { score += 0; feedback.push({type:'miss', msg:'Missing pertinent negatives — document what the patient DENIES'}); }

  // Age/sex in CC (2 pts)
  var cc = norm(fields.cc || '');
  var hasAgeSex = (/\d{1,3}\s*(y\/?o|year|yr|m\b|f\b|male|female|man|woman)/i).test(cc + ' ' + (fields.hpi||'').substring(0,100));
  if(hasAgeSex){ score += 2; feedback.push({type:'strength', msg:'Age/sex included in presentation'}); }
  else { feedback.push({type:'warn', msg:'Include age/sex at start of HPI (e.g., "58-year-old male…")'}); }

  return {
    score: Math.min(score, 15), max: 15,
    label: 'HPI Quality',
    oldcarts: oldcarts, oldcartsCount: oldcartsHit,
    feedback: feedback,
    detail: 'OLDCARTS ' + oldcartsHit + '/8, ' + wc + ' words'
  };
}

// 5. PHYSICAL EXAM (10 pts)
function scorePE(script, fields){
  var pe = norm(fields.pe || '');
  var score = 0;
  var feedback = [];

  // System coverage
  var systems = {
    general: ['well-appearing','nad','no acute distress','alert','oriented','obese','cachectic','ill-appearing','toxic'],
    heent: ['perrl','eomi','pupil','conjunctiv','oropharynx','tympanic','sclera','fundoscop'],
    neck: ['supple','lymphadenopathy','lad','thyroid','jvd','jugular','meningismus','nuchal'],
    cv: ['rrr','regular rate','rhythm','murmur','gallop','rub','s1','s2','s3','s4','pmi','carotid'],
    lungs: ['cta','clear to auscultation','wheeze','crackle','rhonchi','diminished','breath sounds','rales','egophony'],
    abdomen: ['soft','tender','distend','bowel sounds','guarding','rebound','murphy','hepatomegaly','splenomegaly'],
    extremities: ['edema','pulse','cyanosis','clubbing','capillary refill','warmth','range of motion'],
    neuro: ['cranial nerve','cn ','motor','sensation','strength','reflex','babinski','pronator drift','cerebellar','finger to nose','gait','romberg'],
    skin: ['rash','lesion','wound','erythema','warm','indurat','fluctuan','crepitus','ecchymosis','intact']
  };

  var sysCovered = 0, sysTotal = Object.keys(systems).length;
  var coveredNames = [], missedNames = [];

  Object.keys(systems).forEach(function(sys){
    var hit = systems[sys].some(function(t){ return inc(pe,t); });
    if(hit){ sysCovered++; coveredNames.push(sys); }
    else { missedNames.push(sys); }
  });

  // Score based on coverage
  if(sysCovered >= 8){ score = 8; }
  else if(sysCovered >= 6){ score = 6; }
  else if(sysCovered >= 4){ score = 4; }
  else if(sysCovered >= 2){ score = 2; }
  else { score = 1; }

  feedback.push({type: sysCovered >= 6 ? 'strength' : 'warn', msg: sysCovered + '/' + sysTotal + ' organ systems examined'});
  if(missedNames.length > 0 && missedNames.length <= 4){
    feedback.push({type:'warn', msg:'Consider adding: ' + missedNames.join(', ')});
  }

  // Category-specific PE terms (2 pts)
  var catHit = script.peTerms.filter(function(t){ return inc(pe,t); }).length;
  if(catHit >= 3){ score += 2; feedback.push({type:'strength', msg:'Key category exam findings documented'}); }
  else if(catHit >= 1){ score += 1; feedback.push({type:'warn', msg:'Missing some category-specific exam findings'}); }

  // WNL penalty
  var wnlTerms = ['wnl','within normal limits','unremarkable','benign','nonfocal','non-focal','grossly normal'];
  var wnlCount = wnlTerms.filter(function(t){ return inc(pe,t); }).length;
  if(wnlCount >= 2){
    score = Math.max(score - 2, 0);
    feedback.push({type:'miss', msg:'Avoid "WNL"/"unremarkable" — document specific findings. What did you see, hear, feel?'});
  }

  // Vital signs mentioned (bonus acknowledgment)
  if(script.vitalFlags.length > 0){
    var vitalsInPE = script.vitalFlags.some(function(vf){ return inc(pe, vf.split('(')[0].trim()); });
    if(!vitalsInPE) feedback.push({type:'warn', msg:'Abnormal vitals present — address: ' + script.vitalFlags.slice(0,2).join(', ')});
  }

  return {
    score: Math.min(score, 10), max: 10,
    label: 'Physical Examination',
    systemsCovered: coveredNames, systemsMissed: missedNames,
    feedback: feedback,
    detail: sysCovered + '/' + sysTotal + ' systems, ' + catHit + ' category-specific findings'
  };
}

// 6. ASSESSMENT & CLINICAL REASONING (20 pts)
function scoreAssessment(script, fields){
  var assess = norm(fields.assess || '');
  var score = 0;
  var feedback = [];

  // Primary diagnosis identified (6 pts)
  var dxTerms = script.diagnosis.toLowerCase().split(/[\s—–\-()\/]+/).filter(function(t){ return t.length > 3; });
  var dxHits = dxTerms.filter(function(t){ return inc(assess, t); }).length;
  var dxCoverage = dxTerms.length > 0 ? dxHits / dxTerms.length : 0;

  if(dxCoverage >= 0.5){ score += 6; feedback.push({type:'strength', msg:'Primary diagnosis identified: ' + script.diagnosis}); }
  else if(dxCoverage >= 0.25){ score += 4; feedback.push({type:'warn', msg:'Partially identified — diagnosis is: ' + script.diagnosis}); }
  else if(assess.length > 20){ score += 2; feedback.push({type:'miss', msg:'Primary diagnosis not clearly stated. Expected: ' + script.diagnosis}); }
  else { feedback.push({type:'miss', msg:'Assessment is empty or minimal'}); }

  // Differential diagnosis (5 pts)
  var ddxTerms = ['differential','ddx','versus','vs','consider','rule out','r/o','alternatively','less likely','more likely','unlikely'];
  var hasDDx = ddxTerms.some(function(t){ return inc(assess, t); });
  if(hasDDx){ score += 5; feedback.push({type:'strength', msg:'Differential diagnosis articulated'}); }
  else { score += 1; feedback.push({type:'miss', msg:'Include a differential diagnosis — what else could this be?'}); }

  // Must-not-miss diagnoses considered (5 pts)
  var mustHits = script.mustConsider.filter(function(dx){ return inc(assess, dx) || inc(norm(fields.plan||''), dx); });
  if(mustHits.length >= 3){ score += 5; feedback.push({type:'strength', msg:mustHits.length + ' must-not-miss diagnoses considered'}); }
  else if(mustHits.length >= 1){ score += 3; feedback.push({type:'warn', msg:'Consider more must-not-miss diagnoses: ' + script.mustConsider.filter(function(d){ return !inc(assess,d); }).slice(0,3).join(', ')}); }
  else if(script.mustConsider.length > 0){ score += 1; feedback.push({type:'miss', msg:'Must-not-miss: ' + script.mustConsider.slice(0,3).join(', ')}); }
  else { score += 5; } // no must-consider for this category

  // Clinical reasoning language (4 pts)
  var reasoningTerms = ['because','consistent with','given that','suggestive of','supported by','probability','likelihood','risk factor','pathophysiology','mechanism','etiology','secondary to','most likely'];
  var reasonHits = reasoningTerms.filter(function(t){ return inc(assess, t); }).length;
  if(reasonHits >= 3){ score += 4; feedback.push({type:'strength', msg:'Strong clinical reasoning language'}); }
  else if(reasonHits >= 1){ score += 2; feedback.push({type:'warn', msg:'Link findings to your diagnosis — explain WHY you think this'}); }
  else { score += 0; feedback.push({type:'miss', msg:'Assessment should explain reasoning, not just list diagnoses'}); }

  return {
    score: Math.min(score, 20), max: 20,
    label: 'Assessment & Clinical Reasoning',
    diagnosisIdentified: dxCoverage >= 0.5,
    hasDifferential: hasDDx,
    mustNotMissFound: mustHits,
    mustNotMissMissed: script.mustConsider.filter(function(d){ return mustHits.indexOf(d) < 0; }),
    feedback: feedback,
    detail: (dxCoverage >= 0.5 ? 'Dx identified' : 'Dx not identified') + ', DDx: ' + (hasDDx ? 'yes' : 'no') + ', ' + mustHits.length + ' must-not-miss'
  };
}

// 7. PLAN QUALITY (15 pts)
function scorePlan(script, fields){
  var plan = norm(fields.plan || '');
  var assess = norm(fields.assess || '');
  var score = 0;
  var feedback = [];

  // Plan exists and has substance (3 pts)
  var planWords = wordCount(fields.plan || '');
  if(planWords >= 50){ score += 3; }
  else if(planWords >= 20){ score += 2; feedback.push({type:'warn', msg:'Plan is brief — elaborate on management'}); }
  else { score += 0; feedback.push({type:'miss', msg:'Plan is too short or empty'}); }

  // Problem-oriented (organized by problem) (3 pts)
  var numbered = (/\n\s*[#\d]|^\s*[#\d]/m).test(fields.plan || '');
  var problemOriented = numbered || (/problem|issue|diagnosis/i).test(fields.plan || '');
  if(numbered){ score += 3; feedback.push({type:'strength', msg:'Problem-oriented plan format'}); }
  else if(problemOriented){ score += 2; }
  else if(planWords > 30){ score += 1; feedback.push({type:'warn', msg:'Organize plan by problem (e.g., "#1 Chest Pain: ...")'}); }

  // Critical actions addressed (5 pts)
  var actionHits = script.criticalActions.filter(function(a){ return inc(plan, a) || inc(assess, a); });
  var actionPct = script.criticalActions.length > 0 ? actionHits.length / script.criticalActions.length : 1;
  if(actionPct >= 0.6){ score += 5; feedback.push({type:'strength', msg:actionHits.length + '/' + script.criticalActions.length + ' critical actions in plan'}); }
  else if(actionPct >= 0.3){ score += 3; feedback.push({type:'warn', msg:'Missing critical actions: ' + script.criticalActions.filter(function(a){ return !inc(plan,a)&&!inc(assess,a); }).slice(0,3).join(', ')}); }
  else if(script.criticalActions.length > 0){ score += 1; feedback.push({type:'miss', msg:'Key actions needed: ' + script.criticalActions.slice(0,3).join(', ')}); }
  else { score += 5; }

  // Disposition mentioned (2 pts)
  var dispoTerms = ['admit','discharge','observation','transfer','icu','floor','home','follow-up','follow up','consult','referral'];
  if(dispoTerms.some(function(t){ return inc(plan, t); })){ score += 2; feedback.push({type:'strength', msg:'Disposition addressed'}); }
  else { feedback.push({type:'warn', msg:'Include disposition: admit, discharge, transfer?'}); }

  // Monitoring / re-evaluation (2 pts)
  var monitorTerms = ['monitor','recheck','repeat','serial','trend','reassess','re-evaluate','vital signs','q','hourly','telemetry'];
  if(monitorTerms.some(function(t){ return inc(plan, t); })){ score += 2; feedback.push({type:'strength', msg:'Monitoring plan included'}); }
  else { feedback.push({type:'warn', msg:'Include monitoring — what will you recheck and when?'}); }

  return {
    score: Math.min(score, 15), max: 15,
    label: 'Plan Quality',
    criticalActionsFound: actionHits,
    criticalActionsMissed: script.criticalActions.filter(function(a){ return !inc(plan,a)&&!inc(assess,a); }),
    feedback: feedback,
    detail: planWords + ' words, ' + actionHits.length + '/' + script.criticalActions.length + ' critical actions'
  };
}

// 8. WORKUP COMPLETENESS (10 pts)
function scoreWorkup(script, extras){
  var labIds = (extras.labOrders || []).map(function(o){ return o.id || o; });
  var imgIds = (extras.imgOrders || []).map(function(o){ return o.id || o; });
  var refIds = (extras.referrals || []).map(function(r){ return norm(r.specialty || r); });
  var allOrdered = labIds.concat(imgIds).concat(refIds);

  var score = 0;
  var feedback = [];

  // Labs ordered (4 pts)
  if(labIds.length >= 5){ score += 4; feedback.push({type:'strength', msg:labIds.length + ' labs ordered — comprehensive workup'}); }
  else if(labIds.length >= 3){ score += 3; feedback.push({type:'warn', msg:labIds.length + ' labs ordered — consider additional workup'}); }
  else if(labIds.length >= 1){ score += 2; }
  else { score += 0; feedback.push({type:'miss', msg:'No labs ordered'}); }

  // Imaging ordered (3 pts)
  if(imgIds.length >= 2){ score += 3; feedback.push({type:'strength', msg:imgIds.length + ' imaging studies ordered'}); }
  else if(imgIds.length >= 1){ score += 2; }
  else { score += 0; feedback.push({type:'warn', msg:'Consider imaging for this presentation'}); }

  // Appropriate for category (3 pts) — use missing critical from OrderValidator if available
  var missing = [];
  if(window.OrderValidator && typeof window.OrderValidator.getMissingCritical === 'function'){
    missing = window.OrderValidator.getMissingCritical();
  }
  if(missing.length === 0){ score += 3; feedback.push({type:'strength', msg:'Workup appropriate for diagnosis'}); }
  else {
    var totalMissing = missing.reduce(function(s,m){ return s + m.labs.length + m.imgs.length; }, 0);
    if(totalMissing <= 2){ score += 2; }
    else { score += 1; }
    missing.forEach(function(m){
      var items = m.labs.concat(m.imgs).slice(0, 3);
      feedback.push({type:'warn', msg:m.context + ': consider ordering ' + items.join(', ')});
    });
  }

  return {
    score: Math.min(score, 10), max: 10,
    label: 'Workup Completeness',
    labsOrdered: labIds.length, imgsOrdered: imgIds.length,
    missingWorkup: missing,
    feedback: feedback,
    detail: labIds.length + ' labs, ' + imgIds.length + ' imaging ordered'
  };
}

// ═══════════════════════════════════════════════════════════════
// MAIN SCORE FUNCTION
// ═══════════════════════════════════════════════════════════════
function score(caseId, noteFields, extras){
  if(!window.CASEFRAME_DATA || !window.CASEFRAME_DATA.getScript) return null;

  var script = window.CASEFRAME_DATA.getScript(caseId);
  if(!script) return null;

  var fields = noteFields || {};
  var ext = extras || {};

  var sections = [
    scoreProblems(script, fields, ext),    // 15
    scoreMeds(script, fields),             // 10
    scoreAllergies(script, fields),        // 5
    scoreHPI(script, fields),              // 15
    scorePE(script, fields),               // 10
    scoreAssessment(script, fields),       // 20
    scorePlan(script, fields),             // 15
    scoreWorkup(script, ext)               // 10
  ];

  var totalScore = sections.reduce(function(s,sec){ return s + sec.score; }, 0);
  var maxScore = sections.reduce(function(s,sec){ return s + sec.max; }, 0);
  var percentage = pct(totalScore, maxScore);

  // Letter grade
  var grade = 'F';
  if(percentage >= 90) grade = 'A';
  else if(percentage >= 80) grade = 'B';
  else if(percentage >= 70) grade = 'C';
  else if(percentage >= 60) grade = 'D';

  // Top strengths and areas for improvement
  var strengths = [], improvements = [];
  sections.forEach(function(sec){
    (sec.feedback || []).forEach(function(f){
      if(f.type === 'strength') strengths.push(f.msg);
      if(f.type === 'miss') improvements.push(f.msg);
    });
    if(sec.missed && sec.missed.length > 0){
      improvements.push(sec.label + ': missed ' + sec.missed.slice(0,3).join(', '));
    }
  });

  return {
    caseId: caseId,
    diagnosis: script.diagnosis,
    category: script.category,
    totalScore: totalScore,
    maxScore: maxScore,
    percentage: percentage,
    grade: grade,
    sections: sections,
    strengths: strengths.slice(0, 5),
    improvements: improvements.slice(0, 5),
    mustNotMissFound: sections[5].mustNotMissFound || [],
    mustNotMissMissed: sections[5].mustNotMissMissed || [],
    timestamp: new Date().toISOString()
  };
}

// ═══════════════════════════════════════════════════════════════
// PERSISTENCE
// ═══════════════════════════════════════════════════════════════
function saveResult(username, caseId, result){
  if(!result) return;
  try{
    var key = 'rdx-cf-' + (username||'anon') + '-' + caseId;
    localStorage.setItem(key, JSON.stringify({ result:result, savedAt:new Date().toISOString() }));
    // Also append to history
    var histKey = 'rdx-cf-history-' + (username||'anon');
    var hist = JSON.parse(localStorage.getItem(histKey) || '[]');
    hist.push({ caseId:caseId, score:result.totalScore, max:result.maxScore, pct:result.percentage, grade:result.grade, ts:new Date().toISOString() });
    if(hist.length > 200) hist = hist.slice(-200);
    localStorage.setItem(histKey, JSON.stringify(hist));
  }catch(e){}
}

function loadResult(username, caseId){
  try{
    var key = 'rdx-cf-' + (username||'anon') + '-' + caseId;
    var stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  }catch(e){ return null; }
}

function getHistory(username){
  try{
    return JSON.parse(localStorage.getItem('rdx-cf-history-' + (username||'anon')) || '[]');
  }catch(e){ return []; }
}

// ═══════════════════════════════════════════════════════════════
// ANALYTICS VECTOR (for RPFS/CRDA integration)
// ═══════════════════════════════════════════════════════════════
function getCaseFrameVector(result){
  if(!result) return [];
  return result.sections.map(function(sec){
    return { dimension: sec.label, score: sec.score, max: sec.max, pct: pct(sec.score, sec.max) };
  });
}

// ═══════════════════════════════════════════════════════════════
// AUTO-REGISTER (called when case loads)
// ═══════════════════════════════════════════════════════════════
function autoRegister(caseId, caseData){
  // Pre-cache the illness script when case loads
  if(window.CASEFRAME_DATA && window.CASEFRAME_DATA.clearCache){
    window.CASEFRAME_DATA.clearCache();
    window.CASEFRAME_DATA.getScript(caseId);
  }
}

// ═══════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════
window.CaseFrame = {
  score: score,
  loadResult: loadResult,
  saveResult: saveResult,
  getHistory: getHistory,
  getCaseFrameVector: getCaseFrameVector,
  autoRegister: autoRegister,
  renderSummary: function(){ return ''; } // placeholder — overridden by integration layer
};

window.CASEFRAME_ENGINE = {
  getAnalysis: function(caseId, fields, extras){ return score(caseId, fields, extras); }
};

})();
