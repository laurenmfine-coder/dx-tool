// ═══════════════════════════════════════════════════════════════
// ORDER VALIDATION ENGINE — Clinical Decision Support
// ReasonDx · order-validation.js
//
// Validates lab and imaging orders against patient context:
//   • Allergy conflicts
//   • Drug–drug / drug–order interactions
//   • Diagnosis-based contraindications
//   • Lab-value safety gates
//   • Duplicate/redundant order detection
//   • Missing critical order prompts (educational)
//
// Each alert includes:  severity, ruleName, message, teaching, reference
// Severity levels:  'danger' (blocks), 'warning' (yellow toast), 'info'
//
// Integration: called by orderLab() / orderImg() in virtual-emr.html
//   OrderValidator.validate({id, name, type})  → { status, alerts, order }
// ═══════════════════════════════════════════════════════════════

(function(){
"use strict";

// ─── UTILITY HELPERS ───
function norm(s){ return (s||'').toLowerCase().replace(/[^a-z0-9]/g,''); }
function inc(hay,needle){ return norm(hay).indexOf(norm(needle))>=0; }
function anyM(text,kw){ return kw.some(function(k){ return inc(text,k); }); }
function getPatient(){ return window.PATIENT||{}; }
function getAllergies(){ return window.ALLERGIES||[]; }
function getMeds(){ return (window.MEDICATIONS||[]).filter(function(m){ return m.status==='Active'; }); }
function getProblems(){ return (window.PROBLEMS||[]).filter(function(p){ return p.status==='Active'; }); }
function getVitals(){
  var v=window.VITALS;
  if(!v||!v.length)return {};
  return v[v.length-1];
}
function getLabs(){
  var labs=window.LABS;if(!labs||!labs.length)return {};
  var lookup={};
  labs.forEach(function(panel){
    (panel.groups||[]).forEach(function(g){
      (g.results||[]).forEach(function(r){
        lookup[norm(r.test)]={value:parseFloat(r.value)||0,raw:r.value,flag:r.flag,test:r.test};
      });
    });
  });
  return lookup;
}
function getPending(){
  var S=window.S||{};
  return {labs:(S.labOrders||[]).map(function(o){return o.id}),imgs:(S.imgOrders||[]).map(function(o){return o.id})};
}
function mkAlert(sev,rule,msg,teach,ref){
  return {severity:sev,ruleName:rule,message:msg,teaching:teach||'',reference:ref||''};
}

// ═══════════════════════════════════════════════════════════════
// 1. ALLERGY RULES
// ═══════════════════════════════════════════════════════════════
var ALLERGY_MAP={
  'penicillin':{drugs:['amoxicillin','ampicillin','augmentin','piperacillin','nafcillin','oxacillin','penicillin','unasyn','zosyn'],crossReact:['cephalosporin'],note:'1-2% cross-reactivity with cephalosporins in true penicillin allergy.'},
  'sulfa':{drugs:['sulfamethoxazole','trimethoprim','bactrim','septra','sulfasalazine','dapsone','silver sulfadiazine'],crossReact:[],note:'Sulfonamide antibiotics share a core structure.'},
  'nsaids':{drugs:['ibuprofen','naproxen','ketorolac','indomethacin','diclofenac','meloxicam','celecoxib','aspirin','toradol'],crossReact:[],note:'NSAID hypersensitivity may be class-wide. Consider COX-2 selective if reaction was to non-selective.'},
  'aspirin':{drugs:['aspirin','asa'],crossReact:['nsaids'],note:'Aspirin-exacerbated respiratory disease (AERD/Samter triad): nasal polyps + asthma + ASA sensitivity.'},
  'iodine':{drugs:[],imaging:['cta_pe','ctchest','ctabdomen'],note:'Iodinated contrast allergy. Premedicate per ACR protocol or use alternative imaging.'},
  'contrast':{drugs:[],imaging:['cta_pe','ctchest','ctabdomen'],note:'Documented contrast allergy. Steroid premedication or MR alternative per ACR guidelines.'},
  'shellfish':{drugs:[],imaging:[],note:'Shellfish allergy does NOT predict contrast allergy (ACR 2022). This is a common myth.'},
  'morphine':{drugs:['morphine','codeine','hydrocodone','oxycodone'],crossReact:[],note:'True opioid allergy is rare. Distinguish allergy from side effects (nausea, histamine-mediated itching).'},
  'ace inhibitor':{drugs:['lisinopril','enalapril','ramipril','captopril','benazepril','quinapril','fosinopril'],crossReact:[],note:'ACE inhibitor allergy — commonly angioedema. Never rechallenge. ARBs may be considered with caution.'},
  'heparin':{drugs:['heparin','enoxaparin','dalteparin','lovenox'],crossReact:[],note:'HIT is immune-mediated. Use direct thrombin inhibitors (argatroban, bivalirudin) instead.'},
  'latex':{drugs:[],crossReact:[],note:'Ensure latex-free equipment. Cross-reactivity with banana, avocado, kiwi, chestnut.'},
  'metformin':{drugs:['metformin','glucophage'],crossReact:[],note:'True metformin allergy is rare. GI side effects are not allergic reactions.'},
  'statin':{drugs:['atorvastatin','rosuvastatin','simvastatin','pravastatin','lovastatin'],crossReact:[],note:'Statin intolerance (myalgia) is distinct from allergy. Try alternate statin or every-other-day dosing.'}
};

function checkAllergies(order){
  var alerts=[],allergies=getAllergies();
  if(!allergies.length)return alerts;
  allergies.forEach(function(allergy){
    var aKey=norm(allergy.allergen);
    Object.keys(ALLERGY_MAP).forEach(function(mk){
      if(!inc(aKey,mk)&&!inc(mk,aKey))return;
      var e=ALLERGY_MAP[mk];
      var drugHit=e.drugs.some(function(d){return inc(order.name,d)||inc(order.id,norm(d));});
      var imgHit=e.imaging&&e.imaging.indexOf(order.id)>=0;
      if(drugHit||imgHit){
        alerts.push(mkAlert('danger','Allergy Conflict: '+allergy.allergen,
          'Patient has documented '+allergy.allergen+' allergy ('+( allergy.reaction||'reaction not specified')+
          '). Ordering '+order.name+' may trigger allergic reaction.',e.note,
          'UpToDate: Drug Allergy · ACR Manual on Contrast Media 2022'));
      }
      (e.crossReact||[]).forEach(function(cr){
        if(inc(order.name,cr)||inc(order.id,cr)){
          alerts.push(mkAlert('warning','Cross-Reactivity: '+allergy.allergen+' → '+order.name,
            'Patient is allergic to '+allergy.allergen+'. '+order.name+' has potential cross-reactivity.',
            e.note,'JACI 2019: Cross-reactivity of beta-lactam antibiotics'));
        }
      });
    });
  });
  return alerts;
}

// ═══════════════════════════════════════════════════════════════
// 2. DRUG–DRUG / DRUG–ORDER INTERACTIONS
// ═══════════════════════════════════════════════════════════════
var INTERACTION_RULES=[
  {oM:['heparin','enoxaparin','lovenox'],mM:['warfarin','coumadin','apixaban','eliquis','rivaroxaban','xarelto','dabigatran','pradaxa','edoxaban'],
   sev:'danger',rule:'Dual Anticoagulation',
   msg:'Patient is on {med}. Adding {order} creates dual anticoagulation with high bleeding risk.',
   teach:'Dual anticoagulation is rarely indicated. If bridging warfarin, ensure INR is subtherapeutic. Verify indication.',
   ref:'CHEST 2021: Antithrombotic Therapy Guidelines'},

  {oM:['tramadol','fentanyl','meperidine','demerol','linezolid','methylene blue'],mM:['sertraline','fluoxetine','paroxetine','citalopram','escitalopram','venlafaxine','duloxetine'],
   sev:'danger',rule:'Serotonin Syndrome Risk',
   msg:'{order} + {med} increases serotonin syndrome risk: agitation, clonus, hyperthermia, autonomic instability.',
   teach:'Hunter criteria: clonus + agitation + diaphoresis + tremor. Medical emergency with mortality if untreated.',
   ref:'Boyer & Shannon, NEJM 2005: Serotonin Syndrome'},

  {oM:['haloperidol','haldol','ondansetron','zofran','erythromycin','azithromycin','levofloxacin','moxifloxacin','methadone','droperidol','amiodarone'],
   mM:['amiodarone','sotalol','haloperidol','ondansetron','quetiapine','ziprasidone','citalopram','escitalopram','methadone','erythromycin','levofloxacin','droperidol'],
   sev:'warning',rule:'QTc Prolongation Risk',
   msg:'Both {order} and {med} prolong the QT interval. Combined use increases Torsades de Pointes risk.',
   teach:'Check baseline QTc before combining QT-prolonging agents. QTc >500ms = high-risk. Correct K+ and Mg2+ first.',
   ref:'CredibleMeds.org · Tisdale QTc Risk Score'},

  {oM:['potassium','kcl','k-dur','klor-con'],mM:['spironolactone','aldactone','amiloride','triamterene','lisinopril','enalapril','ramipril','losartan','valsartan','irbesartan','sacubitril'],
   sev:'warning',rule:'Hyperkalemia Risk',
   msg:'Patient is on {med} (K+-sparing). Supplemental potassium may cause dangerous hyperkalemia.',
   teach:'ACEi, ARBs, and K+-sparing diuretics all raise K+. Check level before supplementing. Target 3.5-5.0 mEq/L.',
   ref:'StatPearls: Hyperkalemia'},

  {oM:['ibuprofen','naproxen','ketorolac','toradol','indomethacin','diclofenac','meloxicam'],
   mM:['warfarin','coumadin','apixaban','eliquis','rivaroxaban','xarelto','dabigatran','enoxaparin','heparin','aspirin','clopidogrel','plavix','ticagrelor','prasugrel'],
   sev:'danger',rule:'NSAID + Anticoagulant/Antiplatelet Bleeding Risk',
   msg:'{order} with {med} significantly increases GI and intracranial bleeding risk.',
   teach:'NSAIDs inhibit COX-1 + cause GI ulceration. Combined with anticoagulants = "double hit" on hemostasis. Use acetaminophen.',
   ref:'NEJM 2015: Risks of NSAID Use with Anticoagulants'},

  {oM:['metoprolol','atenolol','propranolol','carvedilol','labetalol','esmolol','bisoprolol'],
   mM:['diltiazem','verapamil','cardizem'],
   sev:'warning',rule:'Beta-Blocker + Non-DHP CCB → Bradycardia',
   msg:'Patient is on {med}. Adding {order} risks severe bradycardia, heart block, or cardiac arrest.',
   teach:'Beta-blockers + non-DHP CCBs (diltiazem/verapamil) both suppress AV conduction. Relatively contraindicated, especially in HF.',
   ref:'ACC/AHA Heart Failure Guidelines 2022'},

  {oM:['cta_pe','ctchest','ctabdomen'],mM:['metformin','glucophage'],
   sev:'warning',rule:'Metformin + IV Contrast',
   msg:'Patient takes metformin. IV contrast can precipitate lactic acidosis in renal impairment.',
   teach:'Hold metformin 48h after contrast and recheck Cr. eGFR >60 = ACR says no need to hold. eGFR 30-60 = hold. eGFR <30 = high risk.',
   ref:'ACR Manual on Contrast Media 2022'},

  {oM:['nitroglycerin','ntg','isosorbide','nitrate','nitroprusside'],
   mM:['sildenafil','viagra','tadalafil','cialis','vardenafil','avanafil'],
   sev:'danger',rule:'Nitrate + PDE5 Inhibitor → Refractory Hypotension',
   msg:'Patient takes {med}. Nitrates are ABSOLUTELY CONTRAINDICATED — causes severe, refractory hypotension.',
   teach:'Wait ≥24h after sildenafil/vardenafil, ≥48h after tadalafil. Hypotension may be unresponsive to vasopressors.',
   ref:'AHA/ACC STEMI Guidelines 2013 · StatPearls: PDE5 Inhibitors'},

  {oM:['digoxin','lanoxin'],mM:['amiodarone','verapamil','quinidine','dronedarone','cyclosporine'],
   sev:'warning',rule:'Digoxin Toxicity Risk',
   msg:'{med} increases digoxin levels. Monitor for toxicity: nausea, visual changes, arrhythmias.',
   teach:'Amiodarone increases digoxin levels by ~70%. Reduce digoxin dose by 50% when adding amiodarone. Check dig level.',
   ref:'StatPearls: Digoxin Toxicity'},

  {oM:['methotrexate','mtx'],mM:['trimethoprim','bactrim','nsaid','ibuprofen','naproxen','probenecid'],
   sev:'danger',rule:'Methotrexate Toxicity Risk',
   msg:'{med} reduces methotrexate clearance, increasing risk of pancytopenia, mucositis, and renal failure.',
   teach:'TMP-SMX and NSAIDs both decrease MTX clearance. Even low-dose MTX (for RA) can cause fatal pancytopenia with these interactions.',
   ref:'StatPearls: Methotrexate Toxicity'},

  {oM:['warfarin','coumadin'],mM:['fluconazole','metronidazole','flagyl','amiodarone','ciprofloxacin'],
   sev:'warning',rule:'Warfarin Potentiation',
   msg:'{med} potentiates warfarin via CYP inhibition. INR will rise — monitor closely.',
   teach:'Fluconazole inhibits CYP2C9 (major warfarin pathway). Expect INR to double within 3-5 days. Reduce warfarin dose 25-50% and check INR in 3 days.',
   ref:'StatPearls: Warfarin Drug Interactions'}
];

function checkInteractions(order){
  var alerts=[],meds=getMeds();if(!meds.length)return alerts;
  INTERACTION_RULES.forEach(function(r){
    var oHit=r.oM.some(function(t){return inc(order.name,t)||inc(order.id,t);});
    if(!oHit)return;
    meds.forEach(function(med){
      var mHit=r.mM.some(function(t){return inc(med.name,t);});
      if(!mHit)return;
      var medShort=med.name.split(' ')[0];
      alerts.push(mkAlert(r.sev,r.rule,
        r.msg.replace(/\{order\}/g,order.name).replace(/\{med\}/g,medShort),
        r.teach,r.ref));
    });
  });
  return alerts;
}

// ═══════════════════════════════════════════════════════════════
// 3. DIAGNOSIS-BASED CONTRAINDICATIONS
// ═══════════════════════════════════════════════════════════════
var CONTRA_RULES=[
  {oM:['metoprolol','atenolol','propranolol','carvedilol','labetalol','esmolol'],
   pM:['decompensated heart failure','acute heart failure','chf exacerbation','acute chf','cardiogenic shock'],
   sev:'danger',rule:'Beta-Blocker in Acute Decompensated HF',
   msg:'Beta-blockers can worsen hemodynamics in acute decompensated HF.',
   teach:'In ACUTE HF: hold beta-blockers until euvolemic and stable. In CHRONIC stable HF: beta-blockers reduce mortality (MERIT-HF, COPERNICUS).',
   ref:'ACC/AHA HF Guidelines 2022'},

  {oM:['metoprolol','atenolol','propranolol','carvedilol','labetalol','esmolol'],
   pM:['inferior stemi','inferior mi','inferior myocardial infarction','right ventricular','rv infarct','stemi'],
   sev:'danger',rule:'Beta-Blocker in Inferior STEMI / RV Infarct',
   msg:'Caution: inferior STEMI may have RV involvement — patient is preload-dependent.',
   teach:'RV infarct depends on preload. Beta-blockers reduce HR and contractility → cardiogenic shock. Check V4R. If RV involved, avoid beta-blockers, give IV fluids.',
   ref:'ACCF/AHA STEMI Guidelines 2013 · StatPearls: RV MI'},

  {oM:['ibuprofen','naproxen','ketorolac','toradol','indomethacin','diclofenac','meloxicam','celecoxib'],
   pM:['chronic kidney disease','ckd','renal insufficiency','renal failure','esrd','dialysis','acute kidney injury','aki'],
   sev:'danger',rule:'NSAID in Renal Disease',
   msg:'NSAIDs reduce renal perfusion via prostaglandin inhibition → afferent arteriolar constriction → decreased GFR.',
   teach:'In CKD: NSAIDs can precipitate AKI, worsen HTN, cause fluid retention. Use acetaminophen instead.',
   ref:'KDIGO CKD Guidelines 2024 · StatPearls: NSAID Nephrotoxicity'},

  {oM:['metformin','glucophage'],
   pM:['acute kidney injury','aki','renal failure','lactic acidosis','sepsis','shock','dehydration'],
   sev:'danger',rule:'Metformin in AKI/Shock',
   msg:'Metformin contraindicated in AKI, sepsis, and shock — fatal lactic acidosis risk.',
   teach:'Metformin accumulates in renal failure → lactic acidosis (mortality ~50%). Hold if eGFR <30 or hemodynamic instability.',
   ref:'FDA Black Box Warning · StatPearls: Metformin-Associated Lactic Acidosis'},

  {oM:['tpa','alteplase','tenecteplase','thrombolytic','streptokinase'],
   pM:['hemorrhagic stroke','intracranial hemorrhage','subarachnoid hemorrhage','sah','ich','brain bleed','subdural','epidural hematoma'],
   sev:'danger',rule:'Thrombolytics in Hemorrhagic Stroke',
   msg:'ABSOLUTE CONTRAINDICATION. Thrombolytics will cause fatal hemorrhagic expansion.',
   teach:'tPA is for ISCHEMIC stroke within 4.5h. ALWAYS get CT Head BEFORE thrombolysis. Any hemorrhage = absolute contraindication.',
   ref:'AHA/ASA Stroke Guidelines 2019'},

  {oM:['nitroglycerin','ntg','isosorbide','nitrate'],
   pM:['right ventricular','rv infarct','inferior stemi','severe aortic stenosis','aortic stenosis','hocm','hypertrophic','preload dependent'],
   sev:'danger',rule:'Nitrates in Preload-Dependent States',
   msg:'Nitrates reduce preload. In RV infarct, severe AS, or HOCM → cardiovascular collapse.',
   teach:'These conditions depend on preload for cardiac output. Nitrates → ↓filling → ↓stroke volume → syncope/shock. Give IV fluids instead.',
   ref:'StatPearls: Nitroglycerin Contraindications'},

  {oM:['lumbar puncture','lp','spinal tap','csf'],
   pM:['brain mass','intracranial mass','brain tumor','elevated icp','papilledema','midline shift','uncal herniation','posterior fossa'],
   sev:'danger',rule:'LP with Mass Effect / Elevated ICP',
   msg:'LP with mass lesion or elevated ICP risks uncal herniation and death.',
   teach:'Get CT Head BEFORE LP if: focal deficits, papilledema, altered consciousness, immunocompromised, new seizure.',
   ref:'IDSA Meningitis Guidelines 2017'},

  {oM:['succinylcholine','anectine'],
   pM:['hyperkalemia','crush injury','burn','rhabdomyolysis','spinal cord injury','denervation','muscular dystrophy'],
   sev:'danger',rule:'Succinylcholine in Hyperkalemia Risk',
   msg:'Succinylcholine causes potassium efflux. In burns, crush, denervation → fatal hyperkalemia.',
   teach:'Use rocuronium (non-depolarizing) instead. Sugammadex available for reversal. Risk begins 24h after injury and persists for months.',
   ref:'Miller Anesthesia · StatPearls: Succinylcholine'},

  {oM:['morphine','ms contin'],
   pM:['asthma','copd exacerbation','respiratory failure','respiratory depression','co2 narcosis'],
   sev:'warning',rule:'Morphine in Respiratory Compromise',
   msg:'Morphine causes respiratory depression. Use with extreme caution in COPD/asthma exacerbation.',
   teach:'In acute COPD exacerbation: morphine suppresses respiratory drive → CO2 retention → respiratory arrest. Consider non-opioid analgesics or closely monitored low-dose.',
   ref:'GOLD COPD Guidelines 2024'}
];

function checkContraindications(order){
  var alerts=[],problems=getProblems();if(!problems.length)return alerts;
  var pText=problems.map(function(p){return p.problem}).join(' | ');
  CONTRA_RULES.forEach(function(r){
    var oHit=r.oM.some(function(t){return inc(order.name,t)||inc(order.id,t);});
    if(!oHit)return;
    if(!r.pM.some(function(t){return inc(pText,t)}))return;
    alerts.push(mkAlert(r.sev,r.rule,r.msg,r.teach,r.ref));
  });
  return alerts;
}

// ═══════════════════════════════════════════════════════════════
// 4. LAB-VALUE SAFETY GATES
// ═══════════════════════════════════════════════════════════════
function checkLabSafety(order){
  var alerts=[],labs=getLabs();

  // Potassium supplementation when K+ already high
  if(anyM(order.name,['potassium','kcl','k-dur','klor'])){
    var k=labs[norm('Potassium')]||labs['k'];
    if(k&&k.value>=5.0) alerts.push(mkAlert('danger','Hyperkalemia — K+ '+k.raw,
      'Serum K+ is '+k.raw+' mEq/L. Supplementation is contraindicated — fatal arrhythmia risk.',
      'K+ >5.5: peaked T waves, PR prolongation, widened QRS. K+ >6.5: sine wave → VFib. Treat hyperkalemia first: calcium gluconate, insulin+D50, kayexalate, dialysis.',
      'StatPearls: Hyperkalemia'));
    else if(k&&k.value>=4.5) alerts.push(mkAlert('warning','K+ at Upper Normal — '+k.raw,
      'K+ is '+k.raw+' mEq/L. Supplementation may push into hyperkalemia range. Recheck before supplementing.',
      'Consider whether ACEi/ARB/spironolactone is also contributing.','StatPearls: Potassium Homeostasis'));
  }

  // Metformin + poor renal function
  if(anyM(order.name,['metformin','glucophage'])){
    var egfr=labs[norm('eGFR')]||labs['egfr'];
    var cr=labs[norm('Creatinine')]||labs['creatinine'];
    if(egfr&&egfr.value<30) alerts.push(mkAlert('danger','Metformin Contraindicated — eGFR '+egfr.raw,
      'eGFR '+egfr.raw+' mL/min. Metformin contraindicated at eGFR <30 (lactic acidosis).',
      'FDA: eGFR <30=contraindicated; 30-45=do not initiate; >45=safe.','FDA Safety Communication 2016'));
    else if(cr&&cr.value>1.5) alerts.push(mkAlert('warning','Renal Caution — Cr '+cr.raw,
      'Creatinine '+cr.raw+' mg/dL. Verify eGFR before continuing metformin.',
      'Elderly/low muscle mass may have "normal" Cr with impaired eGFR.','StatPearls: Metformin-Associated Lactic Acidosis'));
  }

  // Anticoagulation + thrombocytopenia
  if(anyM(order.name,['heparin','enoxaparin','warfarin','apixaban','rivaroxaban','fondaparinux'])){
    var plt=labs[norm('Platelets')]||labs[norm('Platelet Count')]||labs['platelets'];
    if(plt&&plt.value<50) alerts.push(mkAlert('danger','Thrombocytopenia — Plt '+plt.raw,
      'Platelets '+plt.raw+'K. Anticoagulation at <50K carries high bleeding risk.',
      'Plt >50K: full-dose AC generally safe. 25-50K: reduced dose. <25K: hold AC, consider IVC filter.',
      'ASH VTE Guidelines 2021'));
    else if(plt&&plt.value<100&&plt.value>=50) alerts.push(mkAlert('warning','Low Platelets — '+plt.raw+'K',
      'Platelets below normal. Monitor closely. If on heparin, check 4Ts score for HIT.',
      '','StatPearls: Heparin-Induced Thrombocytopenia'));
  }

  // Insulin + low glucose
  if(anyM(order.name,['insulin','humalog','novolog','lantus','glargine','nph'])){
    var glu=labs[norm('Glucose')]||labs['glucose'];
    if(glu&&glu.value<70) alerts.push(mkAlert('danger','Hypoglycemia — Glucose '+glu.raw,
      'Glucose is '+glu.raw+' mg/dL. Insulin will cause severe hypoglycemia.',
      'Treat first: D50 25g IV or oral glucose. In DKA: hold insulin when glucose reaches 200-250, switch to D5 + drip.',
      'ADA Standards of Care 2024'));
  }

  // IV contrast + poor renal function
  if(order.type==='imaging'&&anyM(order.name,['contrast','CTA','CT Chest','CT Abdomen'])){
    var egfr2=labs[norm('eGFR')]||labs['egfr'];
    if(egfr2&&egfr2.value<30) alerts.push(mkAlert('danger','Contrast-Induced AKI Risk — eGFR '+egfr2.raw,
      'eGFR '+egfr2.raw+'. High risk for contrast-induced nephropathy.',
      'Pre-hydrate with IV NS 1mL/kg/hr x6-12h. Use iso-osmolar contrast. Consider US/MRI alternatives.',
      'ACR Contrast Media 2022'));
    else if(egfr2&&egfr2.value<45) alerts.push(mkAlert('warning','Moderate CKD — eGFR '+egfr2.raw,
      'Pre-hydrate with IV normal saline before and after contrast.',
      'AMACING trial suggests true CI-AKI may be rarer than thought, but pre-hydration remains standard for eGFR <45.',
      'Lancet 2017: AMACING · ACR 2022'));
  }

  return alerts;
}

// ═══════════════════════════════════════════════════════════════
// 5. DUPLICATE / REDUNDANT ORDER DETECTION
// ═══════════════════════════════════════════════════════════════
function checkDuplicates(order){
  var alerts=[],pending=getPending();
  var existing=order.type==='lab'?pending.labs:pending.imgs;
  if(existing.indexOf(order.id)>=0){
    alerts.push(mkAlert('warning','Duplicate Order',
      order.name+' has already been ordered and is pending.',
      'Avoid duplicates. If repeat is clinically indicated (serial troponins), document the rationale.',''));
  }
  if(order.id==='bmp'&&existing.indexOf('cmp')>=0)
    alerts.push(mkAlert('info','Redundant: BMP covered by CMP',
      'CMP already ordered — includes all BMP components plus hepatic panel.','',''));
  if(order.id==='cmp'&&existing.indexOf('bmp')>=0)
    alerts.push(mkAlert('info','CMP supersedes pending BMP',
      'CMP includes everything in BMP plus hepatic function.','',''));
  return alerts;
}

// ═══════════════════════════════════════════════════════════════
// 6. MISSING CRITICAL ORDERS (educational prompts)
// ═══════════════════════════════════════════════════════════════
var CRITICAL_CHECKS=[
  {pM:['chest pain','stemi','nstemi','acs','myocardial infarction','mi','acute coronary'],
   labs:['troponin','cbc','bmp','pt_inr'],imgs:['ekg','cxr'],ctx:'ACS Workup'},
  {pM:['sepsis','septic shock','bacteremia','fever','infection'],
   labs:['cbc','bmp','bloodculture','ua','crp'],imgs:['cxr'],ctx:'Sepsis Workup'},
  {pM:['pulmonary embolism','pe','dvt','venous thromboembolism'],
   labs:['cbc','bmp','troponin','bnp','pt_inr'],imgs:['cta_pe'],ctx:'PE Workup'},
  {pM:['stroke','ischemic stroke','cerebrovascular','tia'],
   labs:['cbc','bmp','pt_inr','troponin'],imgs:['cthead'],ctx:'Stroke Workup'},
  {pM:['dka','diabetic ketoacidosis','ketoacidosis'],
   labs:['bmp','cbc','ua','hba1c'],imgs:[],ctx:'DKA Workup'},
  {pM:['meningitis','encephalitis','cns infection'],
   labs:['cbc','bmp','bloodculture','crp'],imgs:['cthead'],ctx:'Meningitis Workup'},
  {pM:['gi bleed','gastrointestinal bleeding','melena','hematemesis','hematochezia'],
   labs:['cbc','bmp','pt_inr','troponin','bloodculture'],imgs:[],ctx:'GI Bleed Workup'},
  {pM:['pancreatitis','acute pancreatitis'],
   labs:['cbc','bmp','cmp'],imgs:['ctabdomen','us_abdomen'],ctx:'Pancreatitis Workup'}
];

function getMissingCritical(){
  var problems=getProblems();if(!problems.length)return[];
  var pText=problems.map(function(p){return p.problem}).join(' | ');
  var pending=getPending(),all=pending.labs.concat(pending.imgs),missing=[];
  CRITICAL_CHECKS.forEach(function(c){
    if(!c.pM.some(function(t){return inc(pText,t)}))return;
    var mL=c.labs.filter(function(id){return all.indexOf(id)<0});
    var mI=c.imgs.filter(function(id){return all.indexOf(id)<0});
    if(mL.length||mI.length) missing.push({context:c.ctx,labs:mL,imgs:mI});
  });
  return missing;
}

// ═══════════════════════════════════════════════════════════════
// MAIN VALIDATOR
// ═══════════════════════════════════════════════════════════════
function validate(order){
  var all=[];
  all=all.concat(checkAllergies(order));
  all=all.concat(checkInteractions(order));
  all=all.concat(checkContraindications(order));
  all=all.concat(checkLabSafety(order));
  all=all.concat(checkDuplicates(order));
  var status='safe';
  if(all.some(function(a){return a.severity==='danger'})) status='danger';
  else if(all.some(function(a){return a.severity==='warning'})) status='warning';
  return {status:status,alerts:all,order:order,timestamp:new Date().toISOString()};
}

// ═══════════════════════════════════════════════════════════════
// LOGGING & ANALYTICS
// ═══════════════════════════════════════════════════════════════
var alertLog=[];

function log(vResult,action,username,caseId){
  var entry={
    timestamp:new Date().toISOString(),caseId:caseId||'',username:username||'',
    orderId:vResult.order.id,orderName:vResult.order.name,orderType:vResult.order.type,
    status:vResult.status,alertCount:vResult.alerts.length,
    alerts:vResult.alerts.map(function(a){return{severity:a.severity,rule:a.ruleName}}),
    action:action
  };
  alertLog.push(entry);
  try{
    var stored=JSON.parse(localStorage.getItem('rdx-order-validation-log')||'[]');
    stored.push(entry);if(stored.length>500)stored=stored.slice(-500);
    localStorage.setItem('rdx-order-validation-log',JSON.stringify(stored));
  }catch(e){}
}

function getAnalytics(){
  try{
    var stored=JSON.parse(localStorage.getItem('rdx-order-validation-log')||'[]');
    var total=stored.length;
    var dangerous=stored.filter(function(e){return e.status==='danger'}).length;
    var overridden=stored.filter(function(e){return e.action==='overridden'}).length;
    var cancelled=stored.filter(function(e){return e.action==='cancelled'}).length;
    var safetyScore=total>0?Math.round(((total-overridden)/total)*100):100;
    var rc={};
    stored.forEach(function(e){e.alerts.forEach(function(a){rc[a.rule]=(rc[a.rule]||0)+1})});
    var topA=Object.keys(rc).sort(function(a,b){return rc[b]-rc[a]}).slice(0,5);
    return{totalOrders:total,dangerousOrders:dangerous,overridden:overridden,cancelled:cancelled,
      safetyScore:safetyScore,topAlerts:topA.map(function(r){return{rule:r,count:rc[r]}}),alerts:stored};
  }catch(e){return{totalOrders:0,dangerousOrders:0,overridden:0,cancelled:0,safetyScore:100,topAlerts:[],alerts:[]};}
}

// ═══════════════════════════════════════════════════════════════
// TOAST HELPER
// ═══════════════════════════════════════════════════════════════
function showValidationToast(vResult){
  if(!vResult.alerts.length)return;
  var first=vResult.alerts[0];
  var bg=first.severity==='danger'?'#ef4444':first.severity==='warning'?'#f59e0b':'#3b82f6';
  var icon=first.severity==='danger'?'🛑':first.severity==='warning'?'⚠️':'ℹ️';
  var t=document.createElement('div');
  t.style.cssText='position:fixed;bottom:20px;right:20px;background:'+bg+';color:white;padding:12px 18px;border-radius:10px;font-size:13px;font-weight:500;box-shadow:0 8px 24px rgba(0,0,0,.25);z-index:9999;max-width:340px;line-height:1.4;animation:toastIn .3s forwards';
  t.innerHTML='<div style="font-weight:700;margin-bottom:2px">'+icon+' '+first.ruleName+'</div>'+
    '<div style="font-size:11px;opacity:.9">'+first.message.substring(0,140)+(first.message.length>140?'…':'')+'</div>';
  document.body.appendChild(t);
  setTimeout(function(){t.style.transition='opacity .3s';t.style.opacity='0';setTimeout(function(){try{t.remove()}catch(e){}},400)},4500);
}

// ═══════════════════════════════════════════════════════════════
// CRDA VECTOR (patent analytics integration)
// ═══════════════════════════════════════════════════════════════
function getCRDAVector(){
  var a=getAnalytics();
  return{dimension:'order-safety',safetyScore:a.safetyScore,
    overrideRate:a.totalOrders>0?(a.overridden/a.totalOrders):0,
    topMistakes:a.topAlerts,totalEvaluated:a.totalOrders};
}

// ═══════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════
window.OrderValidator={
  validate:validate,
  log:log,
  getAnalytics:getAnalytics,
  getCRDAVector:getCRDAVector,
  showToast:showValidationToast,
  getMissingCritical:getMissingCritical,
  triggeredAlerts:alertLog
};
window.ORDER_VALIDATION={triggeredAlerts:alertLog};

})();
