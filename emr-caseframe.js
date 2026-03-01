// ═══════════════════════════════════════════════════════════════
// EMR CASEFRAME — Dynamic Illness Script Generator
// ReasonDx · emr-caseframe.js
//
// Auto-generates illness script expectations from loaded case data
// (PATIENT, PROBLEMS, MEDICATIONS, ALLERGIES, LABS, IMAGING).
// No per-case authoring needed — works across all 256 cases.
// ═══════════════════════════════════════════════════════════════

(function(){
"use strict";

// Category → critical findings that should appear in student docs
var CATEGORY_KEYWORDS = {
  cardiovascular: {
    hpiTerms:["chest pain","pressure","radiation","jaw","arm","diaphoresis","SOB","shortness of breath","exertional","palpitations","syncope","edema","orthopnea","PND"],
    peTerms:["heart sounds","murmur","gallop","S3","S4","JVD","jugular","edema","pulse","rhythm","rub","PMI"],
    mustConsider:["acute coronary syndrome","aortic dissection","pulmonary embolism","heart failure","pericarditis","arrhythmia"],
    criticalActions:["troponin","EKG","cardiac monitor","aspirin","heparin","cardiology consult"]
  },
  gastrointestinal: {
    hpiTerms:["abdominal pain","nausea","vomiting","diarrhea","constipation","melena","hematochezia","hematemesis","dysphagia","jaundice","bloating"],
    peTerms:["abdomen","tender","distension","rebound","guarding","bowel sounds","Murphy","McBurney","Rovsing","hepatomegaly","peritoneal"],
    mustConsider:["appendicitis","cholecystitis","pancreatitis","bowel obstruction","perforation","GI bleed","mesenteric ischemia"],
    criticalActions:["CBC","CMP","lipase","CT abdomen","surgery consult","NPO","IV fluids"]
  },
  neurologic: {
    hpiTerms:["headache","weakness","numbness","vision change","speech","seizure","confusion","dizziness","vertigo","gait","syncope","thunderclap"],
    peTerms:["cranial nerve","CN","motor","sensation","strength","reflex","Babinski","pronator drift","cerebellar","NIHSS","mental status","pupil","fundoscopic"],
    mustConsider:["stroke","subarachnoid hemorrhage","meningitis","mass lesion","seizure","epidural","subdural"],
    criticalActions:["CT head","glucose","tPA evaluation","neurology consult","blood pressure management"]
  },
  respiratory: {
    hpiTerms:["dyspnea","SOB","cough","sputum","hemoptysis","pleuritic","wheezing","stridor","orthopnea","exposure"],
    peTerms:["lung sounds","crackles","wheezes","rhonchi","diminished","tracheal deviation","accessory muscles","respiratory effort","SpO2","cyanosis"],
    mustConsider:["pneumonia","PE","pneumothorax","COPD exacerbation","asthma","pleural effusion","CHF"],
    criticalActions:["CXR","ABG","SpO2","oxygen","bronchodilators","antibiotics"]
  },
  infectious: {
    hpiTerms:["fever","chills","rigors","night sweats","malaise","exposure","travel","immunocompromised","recent surgery","indwelling"],
    peTerms:["temperature","tachycardia","hypotension","erythema","warmth","fluctuance","lymphadenopathy","meningismus","Kernig","Brudzinski"],
    mustConsider:["sepsis","pneumonia","UTI","cellulitis","meningitis","endocarditis","abscess"],
    criticalActions:["blood cultures","CBC","lactate","antibiotics within 1 hour","IV fluids","source control"]
  },
  toxicology: {
    hpiTerms:["ingestion","overdose","exposure","substance","medication","suicidal","accidental","toxidrome","pupils","agitation"],
    peTerms:["pupils","temperature","diaphoresis","dry","flushed","agitation","sedation","tremor","clonus","bowel sounds"],
    mustConsider:["acetaminophen toxicity","salicylate toxicity","opioid overdose","anticholinergic","serotonin syndrome","alcohol withdrawal"],
    criticalActions:["acetaminophen level","salicylate level","EKG","glucose","toxicology consult","antidote"]
  },
  hematologic: {
    hpiTerms:["bleeding","bruising","petechiae","fatigue","pallor","transfusion","anticoagulation","clot","DVT","swelling"],
    peTerms:["petechiae","purpura","ecchymosis","pallor","splenomegaly","lymphadenopathy","Homan"],
    mustConsider:["DIC","TTP","HIT","ITP","DVT/PE","hemorrhage","coagulopathy"],
    criticalActions:["CBC","coagulation panel","type and screen","blood bank","transfusion","hematology consult"]
  },
  endocrine: {
    hpiTerms:["polyuria","polydipsia","weight change","fatigue","tremor","heat intolerance","cold intolerance","glucose","insulin"],
    peTerms:["thyroid","exophthalmos","tremor","skin","hair","reflexes","mucous membranes","turgor","Kussmaul"],
    mustConsider:["DKA","HHS","thyroid storm","myxedema coma","adrenal crisis","hypoglycemia"],
    criticalActions:["glucose","BMP","A1c","TSH","cortisol","insulin","IV fluids","endocrine consult"]
  },
  musculoskeletal: {
    hpiTerms:["pain","swelling","deformity","mechanism","fall","injury","range of motion","weakness","back pain","radiculopathy"],
    peTerms:["deformity","swelling","ecchymosis","ROM","neurovascular","sensation","pulse","compartment","straight leg raise","tenderness"],
    mustConsider:["fracture","dislocation","compartment syndrome","septic arthritis","cauda equina","spinal cord compression"],
    criticalActions:["X-ray","neurovascular exam","splint/immobilize","pain management","orthopedic consult"]
  },
  renal: {
    hpiTerms:["flank pain","hematuria","oliguria","anuria","edema","dialysis","creatinine","electrolyte"],
    peTerms:["CVA tenderness","edema","volume status","blood pressure","urethral meatus"],
    mustConsider:["AKI","obstruction","nephrolithiasis","pyelonephritis","hyperkalemia","uremia"],
    criticalActions:["BMP","urinalysis","renal ultrasound","urology consult","nephrology consult","IV fluids"]
  },
  dermatologic: {
    hpiTerms:["rash","lesion","pruritus","blistering","spreading","fever with rash","drug reaction","new medication"],
    peTerms:["distribution","morphology","Nikolsky","mucosal involvement","target lesion","purpura","vesicle","bulla","desquamation"],
    mustConsider:["SJS/TEN","DRESS","cellulitis","necrotizing fasciitis","meningococcemia","anaphylaxis"],
    criticalActions:["skin exam documentation","dermatology consult","biopsy","stop offending drug","wound care"]
  }
};

// ─── Build illness script from live case data ───
function buildIllnessScript(caseId){
  var patient = window.PATIENT || {};
  var problems = window.PROBLEMS || [];
  var meds = window.MEDICATIONS || [];
  var allergies = window.ALLERGIES || [];
  var labs = window.LABS || [];
  var imaging = window.IMAGING || [];
  var vitals = window.VITALS || [];
  var fhx = window.FAMILY_HISTORY || [];
  var shx = window.SOCIAL_HISTORY || [];

  // Determine case category from manifest
  var category = 'general';
  if(window.EMR_MANIFEST){
    window.EMR_MANIFEST.forEach(function(pres){
      (pres.cases||[]).forEach(function(c){
        if(c.id === caseId) category = c.category || 'general';
      });
    });
  }

  // Get category-specific keywords
  var catData = CATEGORY_KEYWORDS[category] || {};

  // Extract primary diagnosis from case data
  var diagnosis = '';
  if(window.EMR_MANIFEST){
    window.EMR_MANIFEST.forEach(function(pres){
      (pres.cases||[]).forEach(function(c){
        if(c.id === caseId) diagnosis = c.diagnosis || '';
      });
    });
  }

  // Build expected findings from actual patient data
  var expectedProblems = problems.filter(function(p){ return p.status === 'Active'; }).map(function(p){ return p.problem; });
  var expectedMeds = meds.filter(function(m){ return m.status === 'Active'; }).map(function(m){
    var parts = m.name.split(' ');
    return { name: parts[0], fullName: m.name };
  });
  var expectedAllergies = allergies.map(function(a){ return { allergen: a.allergen, reaction: a.reaction }; });

  // Extract abnormal lab values (high-value findings)
  var abnormalLabs = [];
  labs.forEach(function(panel){
    (panel.groups||[]).forEach(function(g){
      (g.results||[]).forEach(function(r){
        if(r.flag) abnormalLabs.push({ test: r.test, value: r.value, flag: r.flag });
      });
    });
  });

  // Extract critical imaging findings
  var imagingFindings = imaging.map(function(img){
    return { study: img.study, impression: img.impression || '', critical: (img.priority === 'STAT') };
  });

  // Extract vital sign abnormalities
  var vitalFlags = [];
  if(vitals.length){
    var v = vitals[vitals.length - 1];
    var hr = parseInt(v.hr); var rr = parseInt(v.rr);
    var spo2 = parseInt((v.spo2||'').replace('%',''));
    var temp = parseFloat((v.temp||'').replace('°F',''));
    var bp = (v.bp||'').split('/'); var sbp = parseInt(bp[0]); var dbp = parseInt(bp[1]);
    if(hr > 100) vitalFlags.push('tachycardia (HR ' + hr + ')');
    if(hr < 60) vitalFlags.push('bradycardia (HR ' + hr + ')');
    if(sbp < 90) vitalFlags.push('hypotension (SBP ' + sbp + ')');
    if(sbp > 180) vitalFlags.push('hypertensive urgency (SBP ' + sbp + ')');
    if(spo2 < 94) vitalFlags.push('hypoxia (SpO2 ' + spo2 + '%)');
    if(temp > 100.4) vitalFlags.push('fever (' + v.temp + ')');
    if(temp < 96) vitalFlags.push('hypothermia (' + v.temp + ')');
    if(rr > 22) vitalFlags.push('tachypnea (RR ' + rr + ')');
  }

  // Social history key items
  var shxItems = shx.map(function(s){ return (s[0]||'') + ': ' + (s[1]||''); });

  // Family history key items
  var fhxItems = fhx.slice();

  return {
    caseId: caseId,
    category: category,
    diagnosis: diagnosis,
    expectedProblems: expectedProblems,
    expectedMeds: expectedMeds,
    expectedAllergies: expectedAllergies,
    abnormalLabs: abnormalLabs,
    imagingFindings: imagingFindings,
    vitalFlags: vitalFlags,
    hpiTerms: catData.hpiTerms || [],
    peTerms: catData.peTerms || [],
    mustConsider: catData.mustConsider || [],
    criticalActions: catData.criticalActions || [],
    shxItems: shxItems,
    fhxItems: fhxItems,
    patient: { age: patient.age, sex: patient.sex, name: patient.name }
  };
}

// ─── Storage ───
var scriptCache = {};

function getScript(caseId){
  if(!scriptCache[caseId]) scriptCache[caseId] = buildIllnessScript(caseId);
  return scriptCache[caseId];
}

function clearCache(){ scriptCache = {}; }

// Export
window.CASEFRAME_DATA = {
  getScript: getScript,
  buildIllnessScript: buildIllnessScript,
  clearCache: clearCache,
  CATEGORY_KEYWORDS: CATEGORY_KEYWORDS
};

})();
