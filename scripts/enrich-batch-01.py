#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"apap-overdose": {
  "diagnosis": "Acetaminophen Overdose — Rumack-Matthew High-Risk Zone, NAC Initiated",
  "problems": [
    {"problem":"Acetaminophen overdose — intentional","icd":"T39.1X1A","onset":"2024","status":"Active","notes":"Level 210 mcg/mL at 6h — high-risk zone on nomogram"},
    {"problem":"Major depressive disorder — precipitant","icd":"F32.1","onset":"2022","status":"Active","notes":"Psychiatry consult ordered"},
    {"problem":"Early hepatotoxicity — transaminases rising","icd":"K72.00","onset":"2024","status":"Active","notes":"AST/ALT trending up at hour 6"}
  ],
  "medications": [
    {"name":"N-Acetylcysteine 150mg/kg IV over 1h THEN 50mg/kg/4h THEN 100mg/kg/16h","sig":"3-bag IV Ramsay protocol — start immediately","prescriber":"Toxicology","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Ondansetron 4mg IV PRN","sig":"IV push q6h PRN nausea","prescriber":"ED","start":"11/2024","refills":0,"status":"PRN"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Acetaminophen Toxicity","results":[
    {"test":"APAP level (6h post-ingestion)","value":"210","unit":"mcg/mL","ref":"<10 therapeutic","flag":"H"},
    {"test":"AST","value":"88","unit":"U/L","ref":"10-40","flag":"H"},
    {"test":"ALT","value":"104","unit":"U/L","ref":"7-56","flag":"H"},
    {"test":"INR","value":"1.2","unit":"","ref":"0.9-1.1","flag":"H"},
    {"test":"Creatinine","value":"1.1","unit":"mg/dL","ref":"0.6-1.2","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Acetaminophen overdose — high-risk, NAC indicated (correct)","Non-toxic ingestion — level below treatment line","Hepatitis A/B — no exposure history","Alcohol hepatitis — coingestion possible but APAP is primary","Salicylate overdose — different acid-base pattern","Serotonin syndrome — no serotonergic agents involved"],
  "coachFinal": "Diagnosis: APAP overdose, Rumack-Matthew high-risk zone. Key pharmacy learning: (1) Nomogram: level 210 at 6h is well above the treatment line (150 at 4h). NAC is definitively indicated. (2) NAC mechanism: replenishes glutathione to conjugate NAPQI (toxic CYP2E1 metabolite). Effective even 10-24h post-ingestion. (3) Hepatotoxicity window: 24-72h. AST rising at 6h = early marker — NAC now prevents fulminant failure. (4) INR elevation follows transaminases and predicts severity — King's College criteria for transplant listing. (5) Late NAC: give even after 24h in massive ingestion — antioxidant and anti-inflammatory benefit persists."
},
"salicylate-toxicity": {
  "diagnosis": "Acute Salicylate Toxicity — Level 65 mg/dL, Mixed Respiratory Alkalosis + Metabolic Acidosis",
  "problems": [
    {"problem":"Acute salicylate toxicity","icd":"T39.011A","onset":"2024","status":"Active","notes":"Level 65 mg/dL — tinnitus, hyperventilation, confusion"},
    {"problem":"Mixed acid-base disorder","icd":"E87.2","onset":"2024","status":"Active","notes":"Respiratory alkalosis + metabolic acidosis — classic salicylate pattern"},
    {"problem":"Hypokalemia — barrier to urine alkalinization","icd":"E87.6","onset":"2024","status":"Active","notes":"K+ 3.1 — must replete before alkalinization will work"}
  ],
  "medications": [
    {"name":"NS 1L IV over 30 min then D5W + 3 amps NaHCO3 at 250mL/hr","sig":"Rehydrate then alkalinize — target urine pH 7.5-8.0","prescriber":"Toxicology","start":"11/2024","refills":0,"status":"Active"},
    {"name":"KCl 40 mEq in IV fluids","sig":"Add to every liter — cannot alkalinize urine without replete K+","prescriber":"Toxicology","start":"11/2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Salicylate Toxicity Panel","results":[
    {"test":"Salicylate level","value":"65","unit":"mg/dL","ref":"<25 (therapeutic 15-30)","flag":"H"},
    {"test":"Arterial pH","value":"7.48","unit":"","ref":"7.35-7.45","flag":"H"},
    {"test":"pCO2","value":"28","unit":"mmHg","ref":"35-45","flag":"L"},
    {"test":"HCO3","value":"20","unit":"mEq/L","ref":"22-26","flag":"L"},
    {"test":"Potassium","value":"3.1","unit":"mEq/L","ref":"3.5-5.0","flag":"L"},
    {"test":"Glucose","value":"62","unit":"mg/dL","ref":"70-100","flag":"L"},
    {"test":"Urine pH","value":"5.5","unit":"","ref":"target >7.5 with treatment","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Acute salicylate toxicity — urine alkalinization (correct)","Sepsis with lactic acidosis","Hyperventilation syndrome — respiratory alkalosis only","DKA — metabolic acidosis but different electrolytes","Theophylline toxicity — similar autonomic picture","Alcohol intoxication — different pattern"],
  "coachFinal": "Diagnosis: salicylate toxicity, level 65. Key pharmacy learning: (1) Acid-base: salicylates directly stimulate medullary respiratory center → hyperventilation → respiratory alkalosis. Also uncouple oxidative phosphorylation → metabolic acidosis. Mixed pattern is the fingerprint. (2) Urine alkalinization: salicylate pKa 3.5 — at urine pH 7.5+ >99.9% ionized and cannot be reabsorbed (ion trapping). Eliminates 5-10x faster. (3) Potassium: hypokalemia prevents alkalinization — kidney swaps K+ for H+, acidifying urine. Replete K+ aggressively. (4) Glucose: give dextrose even if serum glucose 'normal' — CNS glucose may be low. Salicylate + CNS hypoglycemia = severe toxicity. (5) HD threshold: level >100, severe CNS toxicity, renal failure, pulmonary edema."
},
"nms": {
  "diagnosis": "Neuroleptic Malignant Syndrome — Haloperidol Dose Increase, CK 18,000, ICU Care",
  "problems": [
    {"problem":"Neuroleptic malignant syndrome","icd":"G21.0","onset":"2024","status":"Active","notes":"Temp 41.2°C, lead-pipe rigidity, autonomic instability, CK 18,000"},
    {"problem":"Schizophrenia — haloperidol offending agent","icd":"F20.9","onset":"2019","status":"Active","notes":"Dose increased 5→10mg 3 days ago"},
    {"problem":"AKI — myoglobinuria from rhabdomyolysis","icd":"N17.9","onset":"2024","status":"Active","notes":"CK 18,000 → myoglobin nephrotoxicity"}
  ],
  "medications": [
    {"name":"HOLD ALL ANTIPSYCHOTICS — immediate","sig":"Discontinue haloperidol and all dopamine-blocking agents","prescriber":"Medicine/Psychiatry","start":"11/2024","refills":0,"status":"HELD"},
    {"name":"Bromocriptine 2.5mg PO TID","sig":"Dopamine agonist — restore D2 tone","prescriber":"Medicine","start":"11/2024","refills":1,"status":"Active"},
    {"name":"Dantrolene 2.5mg/kg IV PRN severe rigidity","sig":"IV — blocks SR Ca++ release, reduces rigidity","prescriber":"Medicine","start":"11/2024","refills":0,"status":"PRN"},
    {"name":"NS 1-1.5 L/hr IV — rhabdomyolysis hydration","sig":"Target UO 200 mL/hr","prescriber":"Medicine","start":"11/2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"NMS Panel","results":[
    {"test":"CK","value":"18,000","unit":"U/L","ref":"22-198","flag":"H"},
    {"test":"Temperature","value":"41.2","unit":"°C","ref":"36.5-37.5","flag":"H"},
    {"test":"WBC","value":"16.4","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Serum iron","value":"28","unit":"μg/dL","ref":"60-170","flag":"L"},
    {"test":"Creatinine","value":"2.1","unit":"mg/dL","ref":"0.6-1.2","flag":"H"},
    {"test":"Urine myoglobin","value":"Positive","unit":"","ref":"Negative","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Neuroleptic malignant syndrome — haloperidol (correct)","Serotonin syndrome — hyperreflexia/clonus, not lead-pipe rigidity","Malignant hyperthermia — inhaled anesthetic trigger required","Lethal catatonia — possibly same entity, different treatment","Anticholinergic toxicity — hot/dry/flushed but no rigidity","Heat stroke — no antipsychotic exposure"],
  "coachFinal": "Diagnosis: NMS from haloperidol dose escalation. Key pharmacy learning: (1) Mechanism: D2 blockade in striatum (rigidity), hypothalamus (hyperthermia), ANS (instability). Classic tetrad: fever + rigidity + altered consciousness + autonomic instability + elevated CK. (2) NMS vs serotonin syndrome: NMS = slow onset (days), lead-pipe rigidity, normal reflexes. SS = rapid onset (hours), hyperreflexia, myoclonus, clonus. Do not confuse — treatment differs. (3) Treatment: STOP the antipsychotic. Bromocriptine (DA agonist) counteracts D2 blockade. Dantrolene for severe muscle rigidity. Aggressive cooling and hydration. (4) Rhabdomyolysis: CK 18,000 → myoglobin nephrotoxicity → AKI. Aggressive NS at 1L/hr until CK trending down. (5) Antipsychotic restart: minimum 2 weeks after full resolution. Choose lower-potency, lower-D2-affinity agent (quetiapine over haloperidol)."
},
"status-epilepticus": {
  "diagnosis": "Refractory Generalized Convulsive Status Epilepticus — Second-Line Agent Required",
  "problems": [
    {"problem":"Refractory status epilepticus — GTC ongoing","icd":"G41.0","onset":"2024","status":"Active","notes":"Seizure 15+ min, lorazepam 4mg given without response"},
    {"problem":"Remote TBI — epileptogenic scar, probable etiology","icd":"S09.90","onset":"2021","status":"Resolved","notes":"Right frontal encephalomalacia on imaging"},
    {"problem":"Aspiration risk — ongoing seizure","icd":"J69.0","onset":"2024","status":"Active","notes":"Lateral positioning, suction available"}
  ],
  "medications": [
    {"name":"Lorazepam 4mg IV x2 (given — no response)","sig":"First-line given — no clinical response","prescriber":"ED","start":"11/2024","refills":0,"status":"Given"},
    {"name":"Levetiracetam 3000mg IV over 10 min","sig":"ESETT trial second-line — infuse over 10 minutes","prescriber":"ED","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Propofol infusion (third-line if LEV fails)","sig":"Requires intubation — anesthesia on standby","prescriber":"ICU","start":"11/2024","refills":0,"status":"Standby"}
  ],
  "labs": [{"date":"11/18/2024","panel":"SE Workup","results":[
    {"test":"Glucose (POC)","value":"82","unit":"mg/dL","ref":"70-100","flag":""},
    {"test":"Sodium","value":"136","unit":"mEq/L","ref":"136-145","flag":""},
    {"test":"pH (ABG)","value":"7.22","unit":"","ref":"7.35-7.45","flag":"L"},
    {"test":"Lactate","value":"6.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"Temperature","value":"38.8","unit":"°C","ref":"<38.0","flag":"H"}
  ]}],
  "imaging": [{"date":"11/18/2024","study":"CT Head Without Contrast","indication":"New-onset SE — rule out structural cause","findings":"Right frontal encephalomalacia consistent with prior TBI. No acute hemorrhage or mass effect.","impression":"Prior TBI scar — probable epileptogenic focus. No acute structural cause."}],
  "ddxTargets": ["Refractory GCSE — second-line treatment required (correct)","Non-convulsive SE after motor cessation — need cEEG","Psychogenic non-epileptic spell — not during true SE","Metabolic encephalopathy with myoclonus — labs normal","Encephalitis — CSF pending","Eclampsia — not pregnant"],
  "coachFinal": "Diagnosis: refractory GCSE. Key nursing learning: (1) Airway first — lateral position, suction, O2, anesthesia on standby. (2) Time benchmarks: benzos by 5 min, second-line by 20 min, third-line by 40 min. Each delay worsens neuronal injury. (3) ESETT trial: LEV 4500mg, fosphenytoin 20mg PE/kg, valproate 40mg/kg — all equivalent (~47% efficacy). LEV preferred: no cardiac monitoring required vs. fosphenytoin. (4) After motor stops: non-convulsive SE is common. Do NOT assume patient is post-ictal without cEEG. (5) Third-line = propofol/ketamine infusion → intubation + ICU. Nursing prepares RSI equipment, monitors continuous vitals."
},
"eclampsia": {
  "diagnosis": "Eclampsia — New-Onset Seizure at 38 Weeks Gestation, Severe Preeclampsia Features",
  "problems": [
    {"problem":"Eclampsia — first seizure at 38 weeks","icd":"O15.02","onset":"2024","status":"Active","notes":"GTC witnessed, resolved in 2 min, now postictal. Magnesium started."},
    {"problem":"Severe preeclampsia — unrecognized antepartum","icd":"O14.12","onset":"2024","status":"Active","notes":"BP labeled 'white coat' — anchoring error. Three prior readings >140/90."},
    {"problem":"HELLP syndrome — developing","icd":"O14.22","onset":"2024","status":"Active","notes":"Platelets 112K, LDH 788, AST 88 — all abnormal"}
  ],
  "medications": [
    {"name":"Magnesium sulfate 6g IV load over 20 min THEN 2g/hr","sig":"Higher loading dose for active eclampsia vs. prophylaxis (4g)","prescriber":"OB","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Labetalol 20mg IV q10min PRN BP >160/110","sig":"For acute severe hypertension — repeat x2 if needed","prescriber":"OB","start":"11/2024","refills":0,"status":"PRN"},
    {"name":"Calcium gluconate 1g IV at bedside — magnesium antidote","sig":"Administer if patellar reflex absent or RR <12","prescriber":"OB","start":"11/2024","refills":0,"status":"On standby"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Eclampsia/HELLP Panel","results":[
    {"test":"Platelets","value":"112","unit":"K/μL","ref":"150-400","flag":"L"},
    {"test":"LDH","value":"788","unit":"U/L","ref":"122-222","flag":"H"},
    {"test":"AST","value":"88","unit":"U/L","ref":"10-40","flag":"H"},
    {"test":"Urine protein dipstick","value":"3+","unit":"","ref":"Negative","flag":"H"},
    {"test":"Uric acid","value":"6.8","unit":"mg/dL","ref":"<6.0","flag":"H"},
    {"test":"Magnesium (post-load)","value":"4.8","unit":"mg/dL","ref":"therapeutic 4-7","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Eclampsia — new seizure in severe preeclampsia (correct)","Epilepsy with coincidental hypertension — no prior seizure history","Hypertensive encephalopathy","TTP — thrombocytopenia + neuro symptoms (preeclampsia fits better in pregnancy)","PRES — may coexist","Gestational hypertension only — labs prove more than that"],
  "coachFinal": "Diagnosis: eclampsia. Key nursing learning: (1) Classic bias trap: prior 'white coat hypertension' label prevented correct diagnosis. Three readings >140/90 in third trimester = preeclampsia. Nursing surveillance catches trending vitals when providers dismiss individual readings. (2) Mag toxicity monitoring — primary nursing responsibility: patellar reflex q1h (first sign of toxicity), RR q15min (depression at levels >12 mg/dL), hourly UO (mag is renally cleared — oliguria = accumulation). Therapeutic range 4-7 mg/dL. (3) Calcium gluconate at bedside BEFORE starting mag. 1g IV push over 2 min for respiratory arrest. (4) 25-40% of eclamptic seizures occur postpartum — continue mag 24h after delivery. Monitor BP closely for 48h post-delivery. (5) Delivery is the only cure. Eclampsia = expedited delivery regardless of gestational age."
},
"stroke-ot-profile": {
  "diagnosis": "Left MCA Stroke Day 10 — OT Occupational Profile: Expressive Aphasia, Moderate ADL Dependence",
  "problems": [
    {"problem":"Left MCA ischemic stroke — post-acute day 10","icd":"I63.512","onset":"2024","status":"Active","notes":"Right hemiplegia, expressive aphasia — OT occupational profile and ADL eval"},
    {"problem":"Expressive aphasia — Broca's type","icd":"R47.01","onset":"2024","status":"Active","notes":"Understands instructions, cannot produce speech — AAC strategies required for OT"},
    {"problem":"Moderate ADL dependence — max assist","icd":"Z74.3","onset":"2024","status":"Active","notes":"Feeding independent, dressing max assist, toilet transfers moderate assist"}
  ],
  "medications": [
    {"name":"Aspirin 81mg daily","sig":"Take 1 tablet daily","prescriber":"Neurology","start":"11/2024","refills":11,"status":"Active"},
    {"name":"Atorvastatin 80mg QHS","sig":"Take at bedtime","prescriber":"Neurology","start":"11/2024","refills":5,"status":"Active"},
    {"name":"Lisinopril 10mg daily","sig":"Take 1 tablet daily","prescriber":"Neurology","start":"11/2024","refills":5,"status":"Active"}
  ],
  "labs": [],
  "imaging": [{"date":"11/05/2024","study":"MRI Brain DWI/FLAIR","indication":"Acute stroke","findings":"Left MCA territory infarct — frontal, anterior parietal, corona radiata. Broca area involvement.","impression":"Left MCA infarct explaining right hemiplegia and expressive aphasia."}],
  "ddxTargets": ["Left MCA stroke — OT occupational profile (correct)","Right MCA stroke — contralateral deficits","Hemorrhagic stroke — different rehab trajectory","Brain tumor — slower onset","MS relapse — different MRI pattern","Todd's paralysis — transient, resolves quickly"],
  "coachFinal": "Diagnosis: left MCA stroke — OT focus. Key OT learning: (1) Expressive aphasia changes every assessment — use yes/no questions, picture boards, written choices, gestures. Comprehension is intact. Never assume cognitive impairment from inability to speak. (2) Occupational profile priority questions: What mattered most to this person before? (construction foreman, coaches kids' soccer) What is the hardest thing now? What does success look like for discharge? (3) Three must-achieve before discharge: (a) Safe toilet transfer, (b) Supervised oral feeding, (c) Caregiver training for wife on 2-person transfer technique. (4) Neuroplasticity window: Week 2 post-stroke is still early-critical period. High-intensity, task-specific training NOW has disproportionate long-term benefit. OT should be 2-3 sessions/day. (5) Team communication: 'He points to pictures reliably to communicate preferences. He prioritizes independence with self-feeding and toilet transfers over upper extremity recovery. Wife needs hands-on training before home discharge.'"
},
"tbi-return-to-work-ot": {
  "diagnosis": "Moderate TBI 7 Months Post — Dysexecutive Syndrome Causing Work Failure Despite Normal Clinic Testing",
  "problems": [
    {"problem":"Moderate TBI — dysexecutive syndrome","icd":"S06.2X4A","onset":"2024","status":"Active","notes":"Normal MoCA in clinic; failing at work — ecological validity gap"},
    {"problem":"Cognitive fatigue — post-TBI","icd":"G93.3","onset":"2024","status":"Active","notes":"Functional collapse after 3-4 hours — energy envelope exceeded"},
    {"problem":"Return-to-work failure — work demands exceed capacity","icd":"Z56.9","onset":"2024","status":"Active","notes":"Employer considering termination — OT RTW assessment needed urgently"}
  ],
  "medications": [
    {"name":"Amantadine 100mg BID","sig":"Take twice daily","prescriber":"Neurology","start":"2024","refills":3,"status":"Active"},
    {"name":"Melatonin 5mg QHS","sig":"Take at bedtime","prescriber":"Neurology","start":"2024","refills":6,"status":"Active"}
  ],
  "labs": [],
  "imaging": [{"date":"04/10/2024","study":"MRI Brain (3mo post-TBI)","indication":"Moderate TBI surveillance","findings":"Bilateral frontal microhemorrhages on SWI. Right frontal contusion evolving. White matter changes frontal projections.","impression":"Frontal lobe injury pattern explaining dysexecutive syndrome."}],
  "ddxTargets": ["Moderate TBI — dysexecutive syndrome, ecologically valid assessment needed (correct)","Malingering — fear of secondary gain (OT assessment objectively characterizes impairment)","Major depression — cognitive symptoms overlap, co-evaluate","ADHD — pre-existing or unmasked","Medication side effect — amantadine","Full recovery — normal clinic test is falsely reassuring"],
  "coachFinal": "Diagnosis: moderate TBI, dysexecutive syndrome — normal clinic testing misses real-world failure. Key OT learning: (1) Ecological validity gap: clinic testing is quiet, one-on-one, no distractions, short duration. Work = noise, competing priorities, interruptions, sustained 8 hours. This patient FAILS under load, not in controlled settings. (2) Use ecologically valid assessments: Multiple Errands Test (real shopping environment), kitchen task observation, simulated work tasks. These capture breakdown under cognitive load. (3) Energy envelope: post-TBI fatigue is neurological — not depression, not motivation. Limited daily cognitive budget. Once exceeded, performance deteriorates for hours to days. Teach pacing: structured breaks q90min, priority tasks in AM, written external memory aids. (4) RTW recommendations for employer: phased return (start 4h/day), quiet workspace, written daily task list, no >2-3 simultaneous priorities, flexible scheduling. (5) OT report language: 'This employee has documented cognitive limitations consistent with TBI. Reasonable accommodations under ADA include X, Y, Z. Phased return over 8-12 weeks is medically supported.'"
},
"cervical-myelopathy-screen-pt": {
  "diagnosis": "Cervical Spondylotic Myelopathy — UMN Signs on Screen, Urgent Neurosurgical Referral Required",
  "problems": [
    {"problem":"Cervical spondylotic myelopathy — suspected","icd":"G99.2","onset":"2024","status":"Active","notes":"Bilateral hand numbness + gait disturbance + hyperreflexia — UMN signs"},
    {"problem":"Cervical spondylosis — multilevel","icd":"M47.12","onset":"2024","status":"Active","notes":"MRI ordered — clinical presentation sufficient for urgent referral"},
    {"problem":"Fall risk — spastic gait","icd":"R26.89","onset":"2024","status":"Active","notes":"Wide-based gait, tandem walk impaired — myelopathic pattern"}
  ],
  "medications": [
    {"name":"Naproxen 500mg BID PRN","sig":"For cervical pain as needed","prescriber":"PCP","start":"2024","refills":2,"status":"Active"},
    {"name":"Gabapentin 300mg BID","sig":"Take twice daily — neuropathic paresthesias","prescriber":"PCP","start":"2024","refills":3,"status":"Active"}
  ],
  "labs": [],
  "imaging": [{"date":"11/18/2024","study":"Cervical Spine X-ray + MRI Ordered Urgently","indication":"UMN signs — myelopathy screen","findings":"X-ray: C5-C6 and C6-C7 disc space narrowing, osteophytes. MRI PENDING — ordered urgently.","impression":"Multilevel cervical spondylosis on plain film. MRI required before any cervical PT intervention."}],
  "ddxTargets": ["Cervical spondylotic myelopathy — neurosurgical referral (correct, NOT a PT case yet)","Cervical radiculopathy — LMN signs, different clinical picture","Multiple sclerosis — cervical compression must be excluded first","ALS — workup needed but myelopathy priority","Peripheral neuropathy — cannot explain UMN signs","Normal pressure hydrocephalus — different gait pattern"],
  "coachFinal": "Diagnosis: cervical spondylotic myelopathy — NOT safe for cervical PT until neurosurgical clearance. Key PT learning: (1) UMN screening is the most important cervical PT skill. Red flags: Hoffman's sign, Babinski, hyperreflexia (biceps/triceps/brachioradialis), ankle clonus, inverted supinator, Lhermitte's sign. ANY positive = stop, refer, do not treat. (2) Immediate action: call referring physician (not a fax), communicate 'I found UMN signs — needs urgent neurosurgical evaluation before cervical PT.' Document time of call. (3) Why urgent: cord compression from spondylosis is progressive. Manual therapy, traction, or aggressive AROM on a myelopathic spine risks cord injury. Minor fall = catastrophic cord event. (4) What PT CAN do now: cervical precaution education, advise against contact sports/heavy lifting/high-risk yoga, refer for fall safety assessment. (5) Documentation: 'Cervical PT deferred pending neurosurgical clearance — UMN signs identified. Referring provider notified [time].'"
},
"fear-avoidance-lbp-pt": {
  "diagnosis": "Chronic LBP — Fear-Avoidance Model, Tampa Scale 46, Kinesiophobia-Driven Disability",
  "problems": [
    {"problem":"Chronic non-specific LBP — fear-avoidance dominant","icd":"M54.5","onset":"2023","status":"Active","notes":"Tampa Scale 46, refuses exercise, disability claim — biopsychosocial model required"},
    {"problem":"Kinesiophobia — movement catastrophizing","icd":"F40.298","onset":"2023","status":"Active","notes":"Believes movement causes damage — pain beliefs drive disability, not structural pathology"},
    {"problem":"Deconditioning — 8 months inactivity","icd":"Z73.6","onset":"2024","status":"Active","notes":"Secondary to fear avoidance — now a physical contributor"}
  ],
  "medications": [
    {"name":"Oxycodone 10mg BID — wean plan in progress","sig":"Wean per pain management","prescriber":"Pain Mgmt","start":"2023","refills":2,"status":"Active — weaning"},
    {"name":"Duloxetine 60mg daily","sig":"Take daily — chronic pain + depression component","prescriber":"PCP","start":"2024","refills":4,"status":"Active"}
  ],
  "labs": [],
  "imaging": [{"date":"06/15/2024","study":"MRI Lumbar Spine","indication":"Chronic LBP — structural evaluation","findings":"L4-L5 Grade 1 anterolisthesis, moderate disc desiccation, mild foraminal narrowing. L5-S1 disc bulge without root compression.","impression":"Mild degenerative changes — age-appropriate, common in asymptomatic adults. Structural findings do NOT correlate with this degree of disability."}],
  "ddxTargets": ["Chronic LBP — fear-avoidance model, kinesiophobia-driven disability (correct)","Structural pathology causing disability — MRI findings are minimal","Malingering — fear-avoidance is real, measurable, evidence-based","Radiculopathy — no dermatomal symptoms","Spondylolisthesis requiring surgery — Grade 1, not surgical","Depression as primary — contributing but distinct from fear-avoidance"],
  "coachFinal": "Diagnosis: chronic LBP — fear-avoidance model dominant. Key PT learning: (1) Tampa Scale: score ≥37 = clinically significant kinesiophobia. Score 46 = high. Better predictor of PT dropout and poor outcomes than structural imaging. (2) Fear-avoidance cycle: pain → catastrophizing → movement fear → avoidance → deconditioning + hypervigilance → more pain. Breaking this cycle requires graded exposure — NOT validation of avoidance. (3) Session 1 strategy: build therapeutic alliance FIRST. Do NOT load the patient physically. Validate pain experience without validating avoidance beliefs. Explain pain neuroscience (pain ≠ damage). (4) Pain neuroscience education (PNE): explaining pain as a protective nervous system output — not a tissue damage signal — reduces catastrophizing and improves willingness to move. 15-min PNE before exercise improves outcomes over exercise alone. (5) Graded exposure: hierarchy of feared activities, start with least feared, demonstrate safety through controlled experience. 'You bent forward without damage — this shows your back can move safely.'"
},
"hyperkalemia-cardiac": {
  "diagnosis": "Severe Hyperkalemia with Cardiac Membrane Instability — K+ 7.0, Wide QRS, Peaked T-Waves",
  "problems": [
    {"problem":"Severe hyperkalemia — ESRD, missed dialysis","icd":"E87.5","onset":"2024","status":"Active","notes":"K+ 7.0 — peaked T-waves, widened QRS, bradycardia HR 48"},
    {"problem":"End-stage renal disease — dialysis-dependent","icd":"N18.6","onset":"2021","status":"Active","notes":"Missed 2 sessions — potassium accumulated without clearance"},
    {"problem":"Metabolic acidosis — from ESRD","icd":"E87.2","onset":"2024","status":"Active","notes":"pH 7.24 — bicarbonate shifts K+ intracellularly when corrected"}
  ],
  "medications": [
    {"name":"Calcium gluconate 1g IV over 2-3 min STAT","sig":"Membrane stabilizer — works in 1-3 min. Does NOT lower K+.","prescriber":"Emergency Medicine","start":"11/2024","refills":0,"status":"STAT"},
    {"name":"Regular insulin 10 units IV + D50 50mL IV","sig":"Shifts K+ intracellularly — onset 15-30 min, lasts 1-2h. Monitor glucose.","prescriber":"Emergency Medicine","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Sodium bicarbonate 3 amps IV","sig":"Intracellular shift in acidotic patients — use if pH <7.2","prescriber":"Emergency Medicine","start":"11/2024","refills":0,"status":"Conditional"},
    {"name":"Emergent hemodialysis — definitive","sig":"Removes K+ from body — all other treatments are bridges","prescriber":"Nephrology","start":"11/2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Hyperkalemia Emergency","results":[
    {"test":"Potassium","value":"7.0","unit":"mEq/L","ref":"3.5-5.0","flag":"H"},
    {"test":"Bicarbonate","value":"16","unit":"mEq/L","ref":"22-26","flag":"L"},
    {"test":"Creatinine","value":"12.4","unit":"mg/dL","ref":"0.6-1.2","flag":"H"},
    {"test":"pH (venous)","value":"7.24","unit":"","ref":"7.32-7.42","flag":"L"},
    {"test":"Glucose","value":"142","unit":"mg/dL","ref":"70-100","flag":"H"}
  ]}],
  "imaging": [{"date":"11/18/2024","study":"12-Lead ECG","indication":"Hyperkalemia with bradycardia","findings":"Sinus bradycardia 48 bpm. Tall peaked symmetric T-waves V2-V5. QRS 114ms widened. PR 226ms prolonged. No P-wave absence yet.","impression":"ECG changes consistent with severe hyperkalemia. Immediate treatment required — risk of VF/asystole."}],
  "ddxTargets": ["Severe hyperkalemia with cardiac toxicity — ESRD (correct)","Pseudohyperkalemia — hemolyzed sample","ACEi/ARB hyperkalemia in CKD","DKA with total-body K+ depletion (serum K+ elevated early)","Ischemic ECG changes — different T-wave morphology","Digoxin toxicity — different arrhythmia pattern"],
  "coachFinal": "Diagnosis: severe hyperkalemia with ECG cardiac toxicity. Key MBS learning: (1) Nernst equation: resting membrane potential set by K+ gradient (~-90mV). Rising extracellular K+ → gradient narrows → resting potential less negative → threshold approached → hyperexcitability then inexcitability (Na+ channel inactivation). (2) ECG progression: 5.5-6.5 → peaked T-waves (increased repolarization K+ conductance). 6.5-7.5 → PR prolongation, QRS widening. 7.5-9.0 → P-wave loss, sine-wave. >9.0 → VF/asystole. (3) Three treatment compartments: (a) Membrane stabilization — calcium gluconate (threshold ↑, does NOT lower K+). (b) Redistribution — insulin/dextrose, NaHCO3 (K+ into cells, temporary). (c) Removal — dialysis, loop diuretics. (4) Calcium gluconate does NOT lower serum K+ — it restores the gap between resting potential and threshold by raising the threshold potential. (5) Bradycardia at K+ 7.0: AV conduction slows when the gradient narrows enough to slow phase 4 depolarization in nodal cells. Precedes complete AV block."
},
"angle-closure-glaucoma": {
  "diagnosis": "Acute Primary Angle-Closure Glaucoma, Left Eye — IOP 54 mmHg, Peripheral Laser Iridotomy Urgent",
  "problems": [
    {"problem":"Acute angle-closure attack, left eye","icd":"H40.211","onset":"2024","status":"Active","notes":"IOP 54 mmHg, mid-dilated fixed pupil, corneal edema — angle closed 360°"},
    {"problem":"Narrow angles bilateral — fellow eye prophylaxis needed","icd":"H40.029","onset":"2024","status":"Active","notes":"Right eye has occludable angles — prophylactic LPI indicated"},
    {"problem":"Hyperopia — anatomic risk factor","icd":"H52.00","onset":"2015","status":"Active","notes":"Short axial length → shallow anterior chamber → angle closure risk"}
  ],
  "medications": [
    {"name":"Timolol 0.5% 1 drop left eye STAT","sig":"Reduce aqueous production immediately","prescriber":"Dr. Chen OD","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Brimonidine 0.15% 1 drop left eye STAT","sig":"Alpha-2 agonist — reduces aqueous and increases outflow","prescriber":"Dr. Chen OD","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Pilocarpine 1% 1 drop left eye q15min x2","sig":"Miotic — constricts pupil, pulls iris from angle","prescriber":"Dr. Chen OD","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Acetazolamide 500mg PO STAT","sig":"Systemic CAI — immediate IOP lowering","prescriber":"Dr. Chen OD","start":"11/2024","refills":0,"status":"Active"}
  ],
  "labs": [],
  "imaging": [{"date":"11/18/2024","study":"Gonioscopy + Anterior Segment OCT","indication":"Acute IOP elevation, mid-dilated pupil","findings":"Gonioscopy: 360° angle closure, no trabecular meshwork visible, appositional — no PAS yet. Right eye: Grade I-II narrow angle. Anterior segment OCT: iris bombé, shallow AC, corneal edema.","impression":"Acute primary angle closure left eye. Narrow angles right eye. LPI both eyes after IOP medically lowered."}],
  "ddxTargets": ["Acute primary angle-closure glaucoma (correct)","Anterior uveitis with IOP spike — different pupil, no iris bombé","Malignant glaucoma — rare, different anatomy","Neovascular glaucoma — no rubeosis iridis","Secondary angle closure — no predisposing medications","Acute corneal hydrops — different presentation"],
  "coachFinal": "Diagnosis: acute primary angle-closure glaucoma, IOP 54. Key OD learning: (1) Clinical triad: red eye + mid-dilated FIXED pupil + IOP >40. Halos and pain from corneal edema. This triad = angle closure until proven otherwise. (2) Pathophysiology: pupillary block → posterior chamber aqueous cannot reach anterior chamber → iris bombé (forward bowing) → angle closes → IOP spikes. Pilocarpine mechanically opens angle by pulling iris posteriorly. (3) Treatment sequence: topical cocktail (timolol + brimonidine + pilocarpine) + systemic acetazolamide → when IOP <35 → laser peripheral iridotomy. LPI creates alternate aqueous pathway bypassing pupillary block. (4) Fellow eye: 40% bilateral risk within 5 years without prophylaxis. Prophylactic LPI right eye same-day or next day. Non-negotiable. (5) Time matters: every hour at IOP 54 causes optic nerve damage. Start medical treatment in the office, phone ophthalmologist NOW if cannot manage LPI."
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
print(f"\nBatch 01: {done}/{len(ENRICHMENTS)}")
