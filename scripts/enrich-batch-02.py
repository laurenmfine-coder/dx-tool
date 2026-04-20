#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"serotonin-syndrome": {
  "diagnosis": "Serotonin Syndrome — Sertraline + Tramadol, Hunter Criteria Met",
  "problems": [
    {"problem":"Serotonin syndrome — Hunter criteria positive","icd":"T43.221A","onset":"2024","status":"Active","notes":"Clonus + agitation + diaphoresis after tramadol added to sertraline"},
    {"problem":"Major depressive disorder — on sertraline","icd":"F32.1","onset":"2022","status":"Active","notes":"Sertraline 150mg daily — serotonergic baseline"},
    {"problem":"Chronic back pain — tramadol newly added","icd":"M54.5","onset":"2024","status":"Active","notes":"Tramadol is a weak serotonin reuptake inhibitor — sufficient to precipitate SS with sertraline"}
  ],
  "medications": [
    {"name":"HOLD sertraline AND tramadol — both serotonergic","sig":"Discontinue both immediately","prescriber":"ED","start":"11/2024","refills":0,"status":"HELD"},
    {"name":"Cyproheptadine 12mg PO loading then 2mg q2h","sig":"5-HT2A antagonist — specific antidote for serotonin syndrome","prescriber":"Toxicology","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Lorazepam 1-2mg IV PRN agitation/myoclonus","sig":"Benzodiazepine — reduces agitation and neuromuscular hyperactivity","prescriber":"ED","start":"11/2024","refills":0,"status":"PRN"},
    {"name":"External cooling — fever management","sig":"Cooling blanket and ice packs — target temperature <38.5°C","prescriber":"ED","start":"11/2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Serotonin Syndrome Panel","results":[
    {"test":"CK","value":"4,200","unit":"U/L","ref":"22-198","flag":"H"},
    {"test":"Temperature","value":"39.8","unit":"°C","ref":"<37.5","flag":"H"},
    {"test":"WBC","value":"14.2","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Creatinine","value":"1.3","unit":"mg/dL","ref":"0.6-1.2","flag":"H"},
    {"test":"Sodium","value":"134","unit":"mEq/L","ref":"136-145","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Serotonin syndrome — sertraline + tramadol (correct)","NMS — lead-pipe rigidity vs clonus is the key distinguishing exam finding","Anticholinergic toxicity — dry/hot/flushed not diaphoretic","Stimulant toxicity — cocaine/amphetamine","Malignant hyperthermia — requires inhalation anesthetic","Sepsis — infection source absent"],
  "coachFinal": "Diagnosis: serotonin syndrome, sertraline + tramadol. Key pharmacy learning: (1) Hunter criteria (more sensitive than Sternbach): clonus + agitation OR hyperreflexia + agitation OR ocular clonus + diaphoresis/agitation = serotonin syndrome. Clonus (inducible, spontaneous, or ocular) is the KEY distinguishing feature from NMS and anticholinergic toxicity. (2) Tramadol is the most commonly missed serotonergic drug — it inhibits serotonin reuptake AND is a weak opioid agonist. Commonly prescribed with SSRIs without recognizing the interaction. (3) NMS vs SS key distinction: NMS = slow onset (days), lead-pipe rigidity, bradyreflexia, low serum iron. SS = rapid onset (hours), hyperreflexia, myoclonus, clonus, diaphoresis. (4) Cyproheptadine is the only oral 5-HT2A antagonist available — specific antidote. Benzodiazepines reduce agitation and neuromuscular hyperactivity (preferred IV). (5) Resolution: most cases resolve within 24h after stopping offending agents. Severe cases require ICU. This case — moderate severity — should resolve with cyproheptadine + benzo + supportive care."
},
"drug-allergy-vancomycin-rms": {
  "diagnosis": "Red Man Syndrome — Vancomycin Infusion Reaction (Not True IgE-Mediated Allergy)",
  "problems": [
    {"problem":"Red man syndrome — vancomycin infusion-related reaction","icd":"T36.8X5A","onset":"2024","status":"Active","notes":"Flushing + pruritus + erythema during infusion — rate-dependent, not IgE allergy"},
    {"problem":"MRSA bacteremia — requires vancomycin continuation","icd":"A41.02","onset":"2024","status":"Active","notes":"No alternatives as effective as vancomycin for MRSA blood culture positive"},
    {"problem":"Vancomycin labeled 'allergy' by nurse — INCORRECT, requires clarification","icd":"Z88.7","onset":"2024","status":"Active","notes":"Red man syndrome is not an allergy and should not be documented as one"}
  ],
  "medications": [
    {"name":"Vancomycin — slow infusion rate 10mg/min (was infusing at 15mg/min)","sig":"Maximum infusion rate 10mg/min — over at least 60-90 min per dose","prescriber":"Pharmacy/ID","start":"11/2024","refills":0,"status":"Active — rate corrected"},
    {"name":"Diphenhydramine 25mg IV 30 min before each vancomycin dose","sig":"Premedication — H1 blockade reduces histamine release","prescriber":"Pharmacy","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Hydrocortisone 25mg IV 30 min before each dose (if premedication insufficient)","sig":"Steroid premedication — reduces mast cell degranulation","prescriber":"Pharmacy","start":"11/2024","refills":0,"status":"Conditional"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Vancomycin Monitoring","results":[
    {"test":"Vancomycin AUC/MIC","value":"388","unit":"mg·h/L","ref":"400-600 target","flag":"L"},
    {"test":"Trough (old method)","value":"12","unit":"mcg/mL","ref":"15-20 for bacteremia","flag":"L"},
    {"test":"Creatinine","value":"1.1","unit":"mg/dL","ref":"0.6-1.2","flag":""},
    {"test":"WBC","value":"14.8","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Tryptase (drawn during reaction)","value":"3.2","unit":"ng/mL","ref":"<11.4","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Red man syndrome — rate-dependent infusion reaction (correct)","True IgE-mediated vancomycin allergy (INCORRECT — tryptase normal, no anaphylaxis)","Anaphylaxis — no hypotension, bronchospasm, or angioedema","MRSA bacteremia treatment failure requiring alternative","Contact dermatitis from IV tubing","Drug rash from beta-lactam started concurrently"],
  "coachFinal": "Diagnosis: red man syndrome — NOT true allergy. Key pharmacy learning: (1) Red man syndrome mechanism: vancomycin (especially fast infusion) → direct mast cell degranulation → histamine release → flushing, pruritus, erythema of face/neck/upper torso. NOT IgE-mediated. Tryptase elevation (marker of true anaphylaxis) is typically ABSENT or minimal. (2) Documentation matters enormously: labeling this as 'vancomycin allergy' in the chart will follow the patient forever and may deprive them of first-line MRSA therapy in future. The pharmacist's duty: correct the documentation, communicate to the team, update the allergy record. (3) Management: slow the infusion rate (10mg/min max), premedicate with diphenhydramine. Patient can continue vancomycin. (4) True vancomycin allergy: rare (AICD, thrombocytopenia, interstitial nephritis). Features that distinguish: urticaria + hypotension + bronchospasm + positive tryptase = true allergy. (5) AUC monitoring: pharmacy now monitors AUC/MIC (target 400-600) rather than troughs — reduces nephrotoxicity without sacrificing efficacy. This patient's AUC 388 is sub-therapeutic — dose adjustment needed alongside rate correction."
},
"severe-hyponatremia": {
  "diagnosis": "Severe Symptomatic Hyponatremia — SIADH from SSRIs, Na+ 118 with Altered Mental Status",
  "problems": [
    {"problem":"Severe symptomatic hyponatremia — Na+ 118","icd":"E87.1","onset":"2024","status":"Active","notes":"Confusion + nausea + gait instability — cerebral edema threshold approaching"},
    {"problem":"SIADH — SSRI-induced (sertraline)","icd":"E22.2","onset":"2024","status":"Active","notes":"Urine osmolality >100, urine Na+ >40, volume euvolemic — SIADH criteria met"},
    {"problem":"Hyponatremia correction risk — osmotic demyelination syndrome","icd":"G37.2","onset":"2024","status":"Active","notes":"Max correction: 8-10 mEq/L per 24h. Faster = osmotic demyelination (central pontine myelinolysis)."}
  ],
  "medications": [
    {"name":"3% NaCl 150mL IV over 20 min (for acute symptomatic correction)","sig":"Hypertonic saline bolus — raise Na+ 4-6 mEq/L to relieve cerebral edema acutely","prescriber":"Medicine","start":"11/2024","refills":0,"status":"Active"},
    {"name":"HOLD sertraline — contributing cause","sig":"Discontinue SSRI until sodium corrected","prescriber":"Medicine","start":"11/2024","refills":0,"status":"HELD"},
    {"name":"Fluid restriction 500-800 mL/day (after acute correction)","sig":"Primary SIADH treatment — free water restriction","prescriber":"Medicine","start":"11/2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Hyponatremia Workup","results":[
    {"test":"Serum sodium","value":"118","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"Serum osmolality","value":"245","unit":"mOsm/kg","ref":"285-295","flag":"L"},
    {"test":"Urine osmolality","value":"620","unit":"mOsm/kg","ref":"should be <100 if kidneys working normally","flag":"H"},
    {"test":"Urine sodium","value":"48","unit":"mEq/L","ref":"<20 if pre-renal","flag":"H"},
    {"test":"TSH","value":"2.1","unit":"mIU/L","ref":"0.4-4.0","flag":""},
    {"test":"Cortisol (AM)","value":"18","unit":"mcg/dL","ref":"6-23","flag":""},
    {"test":"BUN","value":"8","unit":"mg/dL","ref":"7-20","flag":""}
  ]}],
  "imaging": [{"date":"11/18/2024","study":"CT Head Without Contrast","indication":"Altered mental status with severe hyponatremia","findings":"No acute intracranial hemorrhage or mass effect. No midline shift. Mild sulcal effacement consistent with cerebral edema from hyponatremia.","impression":"Mild cerebral edema — consistent with acute hyponatremia. No structural cause for altered mental status."}],
  "ddxTargets": ["SIADH — SSRI-induced, Na+ 118 (correct)","Psychogenic polydipsia — urine osmolality would be dilute (<100)","Hypothyroidism — TSH normal","Adrenal insufficiency — cortisol normal","Heart failure hyponatremia — hypervolemic, not euvolemic","Beer potomania — different history"],
  "coachFinal": "Diagnosis: severe SIADH, SSRI-induced, Na+ 118. Key MBS learning: (1) SIADH criteria: low serum osm + urine osm >100 (inappropriately concentrated) + urine Na+ >40 + euvolemia + normal thyroid/adrenal. All met here. (2) Why SSRI causes SIADH: serotonin receptor activation in hypothalamus stimulates ADH (vasopressin) release. ADH → aquaporin-2 insertion in collecting duct → water reabsorption → dilutional hyponatremia. This is a class effect of all SSRIs. (3) Osmotic demyelination syndrome (ODS): rapid correction of chronic hyponatremia → oligodendrocytes dehydrate faster than they can adapt → myelin sheath destruction. MAX 8-10 mEq/L per 24h. Correction of >12 mEq/24h = risk of central pontine myelinolysis: locked-in syndrome, quadriplegia, dysarthria appearing 2-6 days after over-correction. (4) Hypertonic saline 3%: ONLY for symptomatic patients (seizure, altered consciousness). Purpose: raise Na+ 4-6 mEq/L to relieve cerebral edema acutely, not to fully correct. (5) Correction formula: for each liter of 3% NaCl infused: Na+ rises approximately (513 - patient's Na+) / (total body water + 1). Calculate carefully, monitor q2h initially."
},
"arc-hip-fracture-nursing": {
  "diagnosis": "Post-ORIF Hip Day 3 — Nursing Priority: New Confusion + Fall Risk + Delirium Workup",
  "problems": [
    {"problem":"Post-ORIF hip fracture — hospital day 3","icd":"S72.001A","onset":"2024","status":"Active","notes":"Margaret Chen, 78F — new confusion this AM, Morse Fall Score 65"},
    {"problem":"Acute delirium — post-operative","icd":"F05","onset":"2024","status":"Active","notes":"CAM positive: acute onset + inattention + disorganized thinking. Hyperactive subtype."},
    {"problem":"Urinary tract infection — suspected precipitant","icd":"N39.0","onset":"2024","status":"Active","notes":"Foley catheter day 3 — new confusion, UA sent, bacteria on dipstick"}
  ],
  "medications": [
    {"name":"Cefazolin 1g IV q8h (CAUTI treatment — pending culture)","sig":"IV infusion every 8 hours — empiric UTI treatment","prescriber":"Orthopedics","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Enoxaparin 40mg SQ daily — DVT prophylaxis","sig":"Subcutaneous daily","prescriber":"Orthopedics","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Acetaminophen 650mg q6h scheduled (pain control)","sig":"Scheduled — opioid-sparing for elderly delirium prevention","prescriber":"Orthopedics","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Oxycodone 5mg PO q4h PRN (MINIMIZE — delirium risk)","sig":"PRN only — use acetaminophen first, limit opioids in elderly","prescriber":"Orthopedics","start":"11/2024","refills":0,"status":"Active PRN"}
  ],
  "labs": [{"date":"11/20/2024","panel":"Delirium Workup","results":[
    {"test":"UA — WBC","value":">50","unit":"cells/HPF","ref":"<5","flag":"H"},
    {"test":"UA — bacteria","value":"Many","unit":"","ref":"None","flag":"H"},
    {"test":"UA — nitrites","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"Sodium","value":"132","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"Hemoglobin","value":"9.2","unit":"g/dL","ref":"12-16","flag":"L"},
    {"test":"TSH","value":"2.4","unit":"mIU/L","ref":"0.4-4.0","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Post-op delirium — CAUTI precipitant (correct)","Pain-related agitation — under-controlled pain","Medication-induced delirium — opioids contributing","Hyponatremia as primary delirium cause — contributing","Stroke — new neuro event (no focal findings)","Dementia exacerbation — no prior cognitive baseline documented"],
  "coachFinal": "Diagnosis: post-op delirium precipitated by CAUTI. Key nursing learning: (1) CAM assessment (Confusion Assessment Method): (a) Acute onset + fluctuating course? (b) Inattention? (c) Disorganized thinking? (d) Altered level of consciousness? Positive CAM requires A + B + either C or D. This patient = positive. Document and escalate. (2) THINK mnemonic for delirium: Toxic (medications), Hypoxia, Infection/Immobility, Nutritional, K+ and electrolytes. This patient has infection (CAUTI) + hyponatremia + opioids. Address all. (3) Foley catheter: day 3 Foley in elderly = significant CAUTI risk. Nursing initiates early Foley removal (CAUTI prevention bundle) — this should have been assessed daily. Once delirium develops, nursing advocates for removal. (4) Non-pharmacological delirium prevention: orient q2h (clock, board, date), mobilize out of bed with PT, maintain glasses/hearing aids, sleep hygiene, minimize nighttime interruptions, keep room bright during daytime. (5) Opioid minimization: opioids contribute to delirium. Scheduled acetaminophen reduces opioid requirement. This is a nursing drug-reconciliation responsibility."
},
"arc-stroke-nursing": {
  "diagnosis": "Post-Stroke Day 2 — Nursing Priority: Dysphagia Screen, NIHSS Monitoring, Anticoagulation Timing",
  "problems": [
    {"problem":"Ischemic stroke — post-acute day 2","icd":"I63.512","onset":"2024","status":"Active","notes":"James Okoye, 58M — NIHSS was 14, now 10. Aphasia improving. DVT/PE timing decision pending."},
    {"problem":"Dysphagia — aspiration risk","icd":"R13.10","onset":"2024","status":"Active","notes":"Speech path NPO order still active — nursing must screen before any oral intake"},
    {"problem":"DVT prophylaxis decision — anticoagulation timing in ischemic stroke","icd":"I63.9","onset":"2024","status":"Active","notes":"Day 2: start heparin prophylaxis vs aspirin controversy — awaiting neurology guidance"}
  ],
  "medications": [
    {"name":"Aspirin 325mg via NG tube daily (loading dose)","sig":"Via NG — NPO for dysphagia. Antiplatelet for ischemic stroke.","prescriber":"Neurology","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Atorvastatin 80mg via NG tube QHS","sig":"Via NG tube at bedtime","prescriber":"Neurology","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Enoxaparin 40mg SQ daily — DVT prophylaxis","sig":"Subcutaneous daily — mechanical prophylaxis insufficient alone","prescriber":"Neurology","start":"11/2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/20/2024","panel":"Post-Stroke Day 2","results":[
    {"test":"Glucose","value":"168","unit":"mg/dL","ref":"70-140","flag":"H"},
    {"test":"Sodium","value":"138","unit":"mEq/L","ref":"136-145","flag":""},
    {"test":"Hemoglobin","value":"13.8","unit":"g/dL","ref":"13.5-17.5","flag":""},
    {"test":"INR","value":"1.0","unit":"","ref":"0.9-1.1","flag":""},
    {"test":"LDL","value":"148","unit":"mg/dL","ref":"<70 for stroke","flag":"H"}
  ]}],
  "imaging": [{"date":"11/19/2024","study":"MRI Brain DWI/FLAIR Day 1 Post-Stroke","indication":"Left MCA stroke — confirm infarct extent, hemorrhagic transformation","findings":"Left MCA territory infarct, corona radiata and posterior frontal. No hemorrhagic transformation. Infarct volume ~40 mL.","impression":"Established left MCA infarct, no hemorrhagic transformation. Safe for antiplatelet therapy."}],
  "ddxTargets": ["Ischemic stroke — dysphagia nursing priority (correct)","Hemorrhagic transformation — no evidence on MRI","Post-stroke depression — too early to assess formally","Aspiration pneumonia — not yet, but imminent risk if dysphagia missed","Neurological worsening — NIHSS improving, not worsening","CAUTI — Foley present, early surveillance"],
  "coachFinal": "Diagnosis: ischemic stroke day 2 — nursing surveillance priorities. Key nursing learning: (1) Dysphagia screen is NURSING's responsibility before ANYTHING by mouth — including medications. Use the 3-oz water swallow test or validated bedside screen. Failed screen = NPO + SLP consult same day. Aspiration pneumonia post-stroke is the #1 preventable complication. (2) NIHSS trending: document NIHSS every shift with neurological checks q4h. Sudden NIHSS increase ≥4 points = call neurology immediately (hemorrhagic transformation or new stroke). (3) Glucose management: post-stroke hyperglycemia worsens infarct — target glucose <180 mg/dL. Insulin per protocol. Hypoglycemia also dangerous — glucose <60 = immediate action. (4) Positioning: head of bed 30° or higher to reduce aspiration risk. (5) Afib detection: continuous cardiac monitoring x72h post-stroke to detect paroxysmal AFib (changes from antiplatelet to anticoagulation)."
},
"arc-diabetes-nursing": {
  "diagnosis": "Insulin-Requiring T2DM Admitted for Pneumonia — Nursing: Glucose Surveillance, Sliding Scale Safety",
  "problems": [
    {"problem":"Type 2 diabetes — insulin-requiring, admitted for pneumonia","icd":"E11.9","onset":"2018","status":"Active","notes":"Robert Diaz, A1c 9.8%. Glucose trending 280-380 in-hospital. Insulin management suboptimal."},
    {"problem":"Community-acquired pneumonia","icd":"J18.9","onset":"2024","status":"Active","notes":"Primary admission diagnosis — hyperglycemia worsens pneumonia outcomes"},
    {"problem":"Hypoglycemia risk — insulin sliding scale + inconsistent PO intake","icd":"E16.0","onset":"2024","status":"Active","notes":"Patient eating <50% of meals — nursing must adjust insulin accordingly"}
  ],
  "medications": [
    {"name":"Ceftriaxone 1g IV daily — CAP treatment","sig":"IV once daily","prescriber":"Medicine","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Azithromycin 500mg PO daily — atypical coverage","sig":"Take orally once daily","prescriber":"Medicine","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Glargine (Lantus) 20 units SQ at bedtime","sig":"Subcutaneous injection at bedtime — basal insulin","prescriber":"Medicine","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Lispro (Humalog) per sliding scale with meals","sig":"Per hospital sliding scale — check glucose before each meal AND at bedtime","prescriber":"Medicine","start":"11/2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/20/2024","panel":"Inpatient Glucose Monitoring","results":[
    {"test":"Fasting glucose","value":"318","unit":"mg/dL","ref":"70-140 inpatient target","flag":"H"},
    {"test":"Pre-lunch glucose","value":"285","unit":"mg/dL","ref":"70-140","flag":"H"},
    {"test":"HbA1c","value":"9.8","unit":"%","ref":"<7.0","flag":"H"},
    {"test":"Creatinine","value":"1.0","unit":"mg/dL","ref":"0.6-1.2","flag":""},
    {"test":"Potassium","value":"3.6","unit":"mEq/L","ref":"3.5-5.0","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Inpatient T2DM — suboptimal glucose control (correct)","DKA — no acidosis, not T1DM","Medication-induced hyperglycemia — steroids not prescribed here","Hypoglycemia risk — insulin given without confirming PO intake","New T1DM — established T2DM, not new diagnosis","Osmotic diuresis masking dehydration"],
  "coachFinal": "Diagnosis: inpatient T2DM with suboptimal control. Key nursing learning: (1) Meal intake documentation is critical before insulin administration. If patient eats <50% of tray, notify physician before giving prandial insulin — hypoglycemia risk. Do not give full sliding scale dose for a meal that wasn't eaten. (2) Hypoglycemia protocol: glucose <70 → give 15g rapid carbohydrate (juice, glucose tabs), recheck in 15 min, notify physician. Glucose <50 → 25g dextrose IV STAT. Document and report. (3) Glucose trending: sustained in-hospital hyperglycemia (>180) worsens pneumonia outcomes, delays wound healing, and prolongs LOS. Advocate to prescriber for basal insulin increase if fasting glucose consistently >180. (4) Insulin types: glargine (long-acting, 20-24h) is basal — do not hold for one meal. Lispro (rapid-acting) is prandial — DO hold if patient not eating. Never confuse the two. (5) Time-critical: insulin should be given within 15 minutes before or after meal delivery. Not 2 hours before, not 1 hour after."
},
"arc-hf-nursing": {
  "diagnosis": "HFrEF Discharge Day — Nursing Priority: Teach-Back Education, Daily Weights, Medication Reconciliation",
  "problems": [
    {"problem":"HFrEF — EF 28%, discharge today","icd":"I50.20","onset":"2021","status":"Active","notes":"Dorothy Williams, 3rd HF hospitalization — 30-day readmission prevention is the nursing goal"},
    {"problem":"Medication reconciliation — 3 new medications added this admission","icd":"Z79.899","onset":"2024","status":"Active","notes":"Sacubitril-valsartan new, metoprolol dose changed, spironolactone added — teach-back required"},
    {"problem":"Readmission risk — prior non-compliance with daily weights","icd":"Z87.891","onset":"2024","status":"Active","notes":"Gained 8 lbs before this admission without presenting to clinic — education gap"}
  ],
  "medications": [
    {"name":"Sacubitril-valsartan (Entresto) 24/26mg BID — NEW","sig":"Take twice daily — replace prior lisinopril. DO NOT take with lisinopril.","prescriber":"Cardiology","start":"11/2024","refills":2,"status":"Active — NEW"},
    {"name":"Metoprolol succinate 100mg daily (increased from 50mg)","sig":"Take 1 tablet daily — do not stop suddenly","prescriber":"Cardiology","start":"11/2024","refills":5,"status":"Active — dose changed"},
    {"name":"Spironolactone 25mg daily — NEW","sig":"Take 1 tablet daily — monitor for hyperkalemia","prescriber":"Cardiology","start":"11/2024","refills":2,"status":"Active — NEW"},
    {"name":"Furosemide 40mg daily — continued","sig":"Take 1 tablet daily. If weight up >2 lbs → take 80mg and call clinic.","prescriber":"Cardiology","start":"2021","refills":5,"status":"Active"}
  ],
  "labs": [{"date":"11/20/2024","panel":"Pre-Discharge Labs","results":[
    {"test":"BNP","value":"486","unit":"pg/mL","ref":"<100","flag":"H"},
    {"test":"Potassium","value":"4.2","unit":"mEq/L","ref":"3.5-5.0","flag":""},
    {"test":"Creatinine","value":"1.4","unit":"mg/dL","ref":"0.6-1.1","flag":"H"},
    {"test":"Sodium","value":"134","unit":"mEq/L","ref":"136-145","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["HFrEF discharge — nursing readmission prevention priority (correct)","Premature discharge — BNP still elevated but clinical decongestion adequate","Volume overload persisting — clinical exam guides, not BNP alone","Medication error risk — 3 medication changes at discharge","30-day readmission — primary preventable nursing outcome","Patient non-compliance — reframe as health literacy gap, not willful non-compliance"],
  "coachFinal": "Diagnosis: HFrEF discharge — primary nursing outcome is preventing 30-day readmission. Key nursing learning: (1) Teach-back is non-negotiable: ask 'Can you tell me in your own words what you should do if you gain more than 2 pounds overnight?' Not 'Do you understand?' The patient must demonstrate understanding. Document teach-back was performed. (2) Daily weight protocol: same time, same scale, same clothes, before eating, after voiding. >2 lb overnight = extra furosemide AND call clinic. This patient didn't do this before admission — the education gap is the re-admission cause. (3) Entresto (sacubitril-valsartan) critical teaching: do NOT take with lisinopril (ACEi) — 36-hour washout required. Do NOT take if pregnant. (4) Spironolactone education: check potassium in 1 week, avoid salt substitutes (high potassium), call if muscle weakness or cramps (hyperkalemia symptoms). (5) Red flags that mean 'go to ED now': sudden weight gain >5 lbs, can't walk across room without breathlessness, swelling above knee, confusion."
},
"arc-pain-nursing": {
  "diagnosis": "Chronic Pain Patient Admitted for Unrelated Illness — Nursing: Opioid Safety, Pain Assessment, Pseudoaddiction vs Tolerance",
  "problems": [
    {"problem":"Chronic pain — opioid-tolerant patient, admitted for unrelated reason","icd":"G89.29","onset":"2022","status":"Active","notes":"Kevin Torres, oxycodone 30mg/day at home — hospital formulary dose equivalent required"},
    {"problem":"Opioid tolerance — home dose must be continued to prevent withdrawal","icd":"F11.20","onset":"2022","status":"Active","notes":"Tolerance is NOT addiction — must maintain home dose or prescribe equivalent"},
    {"problem":"Undertreated pain — nursing failure to reassess after analgesic","icd":"G89.29","onset":"2024","status":"Active","notes":"Pain 8/10 after morphine 2mg IV — inadequate dose for opioid-tolerant patient"}
  ],
  "medications": [
    {"name":"Morphine 4mg IV q4h scheduled (equianalgesic to home oxycodone)","sig":"Oxycodone 30mg/day = ~45mg oral morphine/day = ~15mg IV morphine/day. 4mg q4h = 24mg/day.","prescriber":"Pain Management","start":"11/2024","refills":0,"status":"Active — equianalgesic calculation"},
    {"name":"Oxycodone 15mg PO q4h PRN breakthrough (preferred oral)","sig":"When able to take PO — continue home opioid class","prescriber":"Pain Management","start":"11/2024","refills":0,"status":"Active PRN"},
    {"name":"Non-opioid multimodal — acetaminophen 650mg q6h scheduled","sig":"Scheduled — opioid-sparing adjunct","prescriber":"Medicine","start":"11/2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Pain/Opioid Safety Panel","results":[
    {"test":"Urine drug screen","value":"Oxycodone positive — consistent with prescription","unit":"","ref":"","flag":""},
    {"test":"Creatinine","value":"1.2","unit":"mg/dL","ref":"0.6-1.2","flag":""},
    {"test":"Hepatic function panel","value":"Normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Opioid-tolerant patient — home dose continuation required (correct)","Opioid-seeking behavior — tolerance ≠ addiction, reassess with equianalgesic calculation","Opioid overdose risk at home doses — tolerance protects against respiratory depression","Underprescribing — most common nursing error in opioid-tolerant patients","Pain as drug-seeking behavior — stigmatizing misclassification","Opioid rotation needed — no evidence of tolerance failure"],
  "coachFinal": "Diagnosis: opioid-tolerant patient with undertreated pain. Key nursing learning: (1) Opioid tolerance is not addiction. Tolerance = physiologic adaptation requiring higher doses for same effect. Addiction = compulsive use despite harm. A patient on chronic opioids for legitimate pain requiring their home dose in the hospital is demonstrating tolerance — not drug-seeking. (2) Equianalgesic dosing: the pharmacist is the resource. For this patient: oral oxycodone 30mg/day ÷ 1.5 (IV:oral opioid ratio) = 20mg IV morphine equivalent/day. Nurses must advocate for adequate equivalent dosing. (3) Pain reassessment: document pain score 30-60 minutes after any analgesic intervention. Pain still 7/10 after morphine 2mg IV = INADEQUATE — escalate to prescriber. Do not wait for next scheduled dose. (4) Pseudoaddiction: undertreated pain creates behaviors that LOOK like addiction (clock-watching, demanding pain meds) but resolve when pain is adequately treated. The solution is better pain management, not labeling. (5) Naloxone at bedside: for ANY patient on scheduled opioids in the hospital — have naloxone on the floor unit regardless of tolerance status."
}
}

def enrich(slug, e):
    path = os.path.join(EMR_DIR, f"{slug}.js")
    if not os.path.exists(path): print(f"  SKIP {slug}"); return False
    with open(path) as f: src = f.read()
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m: print(f"  PARSE {slug}"); return False
    data = json.loads(m.group(1))
    if "meta" not in data: data["meta"] = {}
    data["meta"]["diagnosis"] = e.get("diagnosis","")
    data["meta"]["caseId"] = slug
    for k in ["problems","medications","labs","imaging"]:
        if k in e: data[k] = e[k]
    if "ddxTargets" in e:
        if "guided" not in data: data["guided"] = {}
        data["guided"]["ddxTargets"] = e["ddxTargets"]
    if "coachFinal" in e:
        if "guided" not in data: data["guided"] = {}
        if "coachPrompts" not in data["guided"]: data["guided"]["coachPrompts"] = {}
        data["guided"]["coachPrompts"]["final"] = e["coachFinal"]
    with open(path,'w') as f: f.write(f"\nwindow.EMR_DATA = {json.dumps(data,indent=2)};\n")
    return True

done = 0
for s,e in ENRICHMENTS.items():
    if enrich(s,e): print(f"✓ {s}"); done += 1
print(f"\nBatch 02: {done}/{len(ENRICHMENTS)}")
