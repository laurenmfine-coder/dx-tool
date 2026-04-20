#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"arc-hip-fracture-medicine": {
  "diagnosis": "Post-ORIF Hip Fracture — Hospitalist Management: Delirium Workup, DVT Prophylaxis, Geriatric Optimization",
  "problems": [
    {"problem":"Post-ORIF hip fracture — hospital day 2","icd":"S72.001A","onset":"2024","status":"Active","notes":"Walter Osei, 81M — ORIF yesterday. New confusion this morning. CAM positive."},
    {"problem":"Acute delirium — post-operative, hyperactive subtype","icd":"F05","onset":"2024","status":"Active","notes":"Acute onset + inattention + disorganized thinking. Multifactorial: pain, opioids, sleep disruption, infection."},
    {"problem":"VTE prophylaxis decision — timing after ORIF","icd":"Z79.01","onset":"2024","status":"Active","notes":"Chemical prophylaxis delayed 12h post-op. Enoxaparin started — monitor for HIT if prolonged."},
    {"problem":"Pain management — opioid minimization in elderly","icd":"M16.11","onset":"2024","status":"Active","notes":"Scheduled acetaminophen + regional nerve block preferred. Minimize opioids — delirium risk."}
  ],
  "medications": [
    {"name":"Acetaminophen 1000mg PO q8h scheduled — primary analgesic","sig":"Scheduled around the clock — opioid-sparing. Maximum 3g/day in elderly with normal hepatic function.","prescriber":"Hospitalist","start":"2024","refills":0,"status":"Active"},
    {"name":"Oxycodone 2.5mg PO q6h PRN — minimize","sig":"Low-dose PRN only — use acetaminophen first. Opioids cause delirium, fall risk, constipation.","prescriber":"Hospitalist","start":"2024","refills":0,"status":"Active PRN — minimize"},
    {"name":"Enoxaparin 30mg SQ daily — DVT prophylaxis (renally adjusted)","sig":"Renal dose adjustment for eGFR 42. Standard dose 40mg daily would over-anticoagulate.","prescriber":"Hospitalist","start":"2024","refills":0,"status":"Active"},
    {"name":"Quetiapine 12.5mg PO QHS PRN — delirium agitation","sig":"Ultra-low dose for hyperactive delirium with safety risk only. Not routine.","prescriber":"Hospitalist/Geriatrics","start":"2024","refills":0,"status":"Active PRN — last resort"}
  ],
  "labs": [{"date":"11/2024","panel":"Post-Op Delirium Workup","results":[
    {"test":"Hemoglobin","value":"9.4","unit":"g/dL","ref":"13.5-17.5","flag":"L"},
    {"test":"Sodium","value":"131","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"Creatinine","value":"1.5","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"eGFR","value":"42","unit":"mL/min/1.73m²","ref":">60","flag":"L"},
    {"test":"UA","value":"Positive nitrites, >50 WBC/hpf","unit":"","ref":"Normal","flag":"H"},
    {"test":"TSH","value":"3.2","unit":"mIU/L","ref":"0.4-4.0","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"Hip X-ray Post-Op","indication":"ORIF verification","findings":"Hardware in good position. Femoral neck fracture reduced. No hardware complication.","impression":"Satisfactory ORIF result."}],
  "ddxTargets": ["Post-op delirium — multifactorial (CAUTI + hyponatremia + anemia + opioids) (correct)","Stroke — new focal deficit absent; neurological exam non-focal","Subdural hematoma — no head trauma, no progressive neuro deficit","Sepsis encephalopathy — culture pending, hemodynamics stable","Dementia exacerbation — acute onset argues for delirium, not baseline","Metabolic encephalopathy — hyponatremia contributing but not sole cause"],
  "coachFinal": "Diagnosis: post-op delirium — multifactorial. Key medicine learning: (1) THINK mnemonic for delirium causes: Toxic (medications — opioids, benzos, anticholinergics), Hypoxia, Infection/Immobility, Nutritional/metabolic (hyponatremia Na 131, anemia Hgb 9.4), K+ and electrolytes. Address ALL contributors simultaneously. (2) Non-pharmacological delirium management is first line: reorient q2h (clock, date, whiteboard), mobilize out of bed with PT by post-op day 1, maintain sensory aids (glasses, hearing aids), sleep hygiene (noise reduction, lights off at night), minimize nighttime vitals if stable. (3) Enoxaparin dosing in CKD: eGFR <30 requires dose adjustment to 30mg SQ daily or anti-Xa monitoring. eGFR 42 in this elderly patient — reduce to 30mg and monitor. (4) Opioid minimization in elderly: scheduled acetaminophen, regional anesthesia (femoral nerve block), NSAIDs avoided due to renal function and GI risk. Each opioid dose increases delirium risk by ~20% in elderly hip fracture patients. (5) Quetiapine for delirium: only for agitation creating safety risk (removing lines, climbing out of bed). Use lowest effective dose, short duration. Not for quiet/hypoactive delirium."
},
"arc-pain-medicine": {
  "diagnosis": "Chronic Pain — Opioid-Tolerant Patient Admitted for Acute Illness, Equianalgesic Dosing and Addiction Medicine Principles",
  "problems": [
    {"problem":"Chronic low back pain — opioid-tolerant, admitted for pneumonia","icd":"G89.29","onset":"2021","status":"Active","notes":"Marcus Webb, 48M — oxycodone 60mg/day OME at home. Hospital formulary requires equivalent IV dosing."},
    {"problem":"Opioid tolerance — NOT addiction, must continue home dose equivalent","icd":"F11.20","onset":"2021","status":"Active","notes":"Physiologic tolerance — stopping or under-dosing causes withdrawal. Stigma must not drive clinical decisions."},
    {"problem":"Community-acquired pneumonia — primary admission diagnosis","icd":"J18.9","onset":"2024","status":"Active","notes":"Primary diagnosis — pain management must be maintained while treating pneumonia."}
  ],
  "medications": [
    {"name":"Morphine 10mg IV q4h scheduled (equianalgesic conversion)","sig":"Oxycodone 60mg/day PO ÷ 1.5 (oral:IV ratio) = 40mg IV morphine/day. 10mg q4h = 60mg/day — slight increase accounts for incomplete cross-tolerance.","prescriber":"Pain Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Morphine 4mg IV q2h PRN — breakthrough pain","sig":"Breakthrough dose = 10-15% of total daily dose. Reassess pain score 30 min after each dose.","prescriber":"Pain Medicine","start":"2024","refills":0,"status":"Active PRN"},
    {"name":"Acetaminophen 1000mg IV q8h — multimodal adjunct","sig":"Non-opioid component of multimodal analgesia. IV formulation while NPO.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Ceftriaxone 1g IV daily + azithromycin 500mg PO daily — CAP","sig":"Standard CAP regimen. Duration guided by clinical response.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Admission Panel","results":[
    {"test":"WBC","value":"14.8","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Procalcitonin","value":"1.4","unit":"ng/mL","ref":"<0.25","flag":"H"},
    {"test":"Creatinine","value":"1.0","unit":"mg/dL","ref":"0.7-1.3","flag":""},
    {"test":"Urine drug screen","value":"Oxycodone positive — consistent with prescription","unit":"","ref":"","flag":""},
    {"test":"CXR","value":"Right lower lobe consolidation","unit":"","ref":"","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Opioid-tolerant patient — home dose continuation required (correct)","Opioid use disorder — tolerance ≠ addiction; UDS consistent with prescription","Undertreated pain — most common error in opioid-tolerant hospitalized patients","Opioid withdrawal — if home dose discontinued; tachycardia, diaphoresis, GI symptoms","Respiratory depression risk at home doses — tolerance provides protection","Opioid rotation needed — no evidence of tolerance failure here"],
  "coachFinal": "Diagnosis: opioid-tolerant patient with undertreated pain. Key medicine learning: (1) Tolerance vs addiction: tolerance = physiologic adaptation requiring higher doses for same effect. Addiction = compulsive use despite harm. A patient on chronic opioids requiring their home dose equivalent in the hospital is demonstrating tolerance — not drug-seeking. Stigma-driven under-dosing is a patient safety failure. (2) Equianalgesic conversion: oral oxycodone to IV morphine conversion factor = 1.5 (oxycodone is ~1.5x more potent than oral morphine; oral:IV morphine ratio = 3:1). Oxycodone 60mg PO/day → 40mg oral morphine equivalent → 13mg IV morphine/day at 3:1. Add 10-20% for incomplete cross-tolerance. Pain medicine consult validates calculations for complex patients. (3) Pseudoaddiction: undertreated pain creates clock-watching, demanding behavior that LOOKS like addiction but resolves with adequate treatment. The solution is better analgesia. (4) Multimodal analgesia: combining acetaminophen, NSAIDs (if safe), ketamine, regional blocks allows lower opioid doses and better pain control — not just opioids alone. (5) Documentation: always document the clinical reasoning for opioid prescribing in an opioid-tolerant patient — protects the patient from future undertreated pain and protects the physician."
},
"arc-sepsis-medicine": {
  "diagnosis": "Sepsis — Urinary Source, Fluid Resuscitation, Vasopressor Initiation, Hour-1 Bundle Compliance",
  "problems": [
    {"problem":"Sepsis — urinary source, qSOFA 2","icd":"A41.51","onset":"2024","status":"Active","notes":"Sandra Kim, 67F — fever 38.9°C, BP 88/52, HR 118, dysuria. Foley removed 3 days ago. eGFR declining."},
    {"problem":"Septic shock — MAP <65 despite 30mL/kg IVF","icd":"R65.21","onset":"2024","status":"Active","notes":"MAP 54 after 2L crystalloid. Norepinephrine started via peripheral IV — central line being placed."},
    {"problem":"Acute kidney injury — sepsis-related","icd":"N17.9","onset":"2024","status":"Active","notes":"Creatinine 2.1 from baseline 0.9. Urinary catheter placed to monitor UO. Target UO >0.5 mL/kg/h."}
  ],
  "medications": [
    {"name":"Norepinephrine 0.1-0.3 mcg/kg/min IV — vasopressor","sig":"First-line vasopressor for septic shock. Titrate to MAP >65 mmHg. Convert to central line ASAP.","prescriber":"ICU/Medicine","start":"2024","refills":0,"status":"Active — titrating"},
    {"name":"Ceftriaxone 2g IV q24h — empiric urosepsis","sig":"Empiric gram-negative coverage for urosepsis. Broaden if resistant organism suspected.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Normal saline 30mL/kg IV bolus — completed","sig":"2.1L given. Reassess fluid responsiveness before additional boluses — avoid fluid overload.","prescriber":"Medicine","start":"2024","refills":0,"status":"Completed — reassess"},
    {"name":"Hydrocortisone 200mg IV continuous OR 50mg q6h — consider","sig":"If norepinephrine >0.25 mcg/kg/min despite adequate resuscitation — refractory shock. ACTH stim not required.","prescriber":"ICU","start":"2024","refills":0,"status":"Hold — consider if refractory"}
  ],
  "labs": [{"date":"11/2024","panel":"Sepsis Bundle Labs","results":[
    {"test":"Lactate (initial)","value":"4.2","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"Lactate (2h repeat)","value":"2.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"WBC","value":"22.4","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Procalcitonin","value":"28","unit":"ng/mL","ref":"<0.25","flag":"H"},
    {"test":"Creatinine","value":"2.1","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Blood cultures x2","value":"Pending — drawn before antibiotics","unit":"","ref":"","flag":""},
    {"test":"UA","value":"Positive — >100 WBC, nitrites, bacteria","unit":"","ref":"Normal","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CXR Portable","indication":"Sepsis — exclude pulmonary source","findings":"No consolidation. Mild vascular congestion — IVF.","impression":"No pneumonia. Lungs clear. Consistent with urinary source of sepsis."}],
  "ddxTargets": ["Septic shock — urosepsis (correct)","Hypovolemic shock — infection source and fever distinguish from pure volume loss","Cardiogenic shock — warm extremities, elevated lactate, no pulmonary edema","Adrenal crisis — possible contributor if refractory, cortisol check reasonable","Gram-negative bacteremia from another source — blood cultures will clarify","Obstructive shock (PE) — no respiratory distress, no right heart strain"],
  "coachFinal": "Diagnosis: septic shock — urosepsis. Key medicine learning: (1) Surviving Sepsis Campaign Hour-1 Bundle: (a) measure lactate, (b) blood cultures before antibiotics, (c) broad-spectrum antibiotics, (d) 30mL/kg crystalloid if hypotension or lactate ≥4, (e) vasopressors if MAP <65 after IVF. Each hour of delay in antibiotics increases mortality ~7%. (2) Norepinephrine is first-line vasopressor — α1 predominant, increases SVR, minimal tachycardia. Dopamine is second-line (more arrhythmia risk). Vasopressin 0.03 units/min can be added as a steroid-sparing norepinephrine adjunct. (3) Fluid responsiveness assessment: after initial 30mL/kg, do not reflexively give more fluid. Use passive leg raise (PLR) test — increase in cardiac output confirms fluid responsiveness. Blind fluid boluses cause pulmonary edema without hemodynamic benefit in non-responders. (4) Lactate clearance: target >10% reduction per 2 hours. Persistent lactate elevation despite resuscitation = occult hypoperfusion or distributive physiology. Lactate 4.2 → 2.8 = partial clearance — continue goal-directed resuscitation. (5) Hydrocortisone: evidence supports use if norepinephrine dose exceeds 0.25 mcg/kg/min — reduces vasopressor requirement, shortens shock duration. Does not improve mortality but improves hemodynamic rescue."
},
"arc-stroke-medicine": {
  "diagnosis": "Acute Ischemic Stroke — Left MCA Territory, tPA Administered, Post-Thrombolysis Monitoring Protocol",
  "problems": [
    {"problem":"Acute ischemic stroke — left MCA, NIHSS 14","icd":"I63.512","onset":"2024","status":"Active","notes":"Patricia Malone, 71F — right-sided weakness + aphasia, LKW 2.5 hours ago. tPA given. NIHSS improving."},
    {"problem":"Post-tPA hemorrhagic transformation risk — BP management critical","icd":"I63.9","onset":"2024","status":"Active","notes":"BP target <180/105 for 24h post-tPA. Labetalol PRN protocol active. No anticoagulation x24h."},
    {"problem":"Atrial fibrillation — newly detected, likely cardioembolic source","icd":"I48.91","onset":"2024","status":"Active","notes":"New AFib on telemetry post-stroke. Anticoagulation timing: 2-4 weeks post-stroke for moderate infarct size."},
    {"problem":"Dysphagia — NPO, NG tube pending SLP evaluation","icd":"R13.10","onset":"2024","status":"Active","notes":"Bedside dysphagia screen failed. SLP evaluation tomorrow. NG tube for medications."}
  ],
  "medications": [
    {"name":"Alteplase 0.9mg/kg IV (max 90mg) — completed","sig":"10% bolus over 1 min, remainder over 60 min. Last dose given 45 min ago. Do NOT give antithrombotic x24h.","prescriber":"Neurology","start":"2024","refills":0,"status":"Completed"},
    {"name":"Labetalol 10-20mg IV PRN — BP >180/105","sig":"PRN for post-tPA BP management. Target <180/105. Avoid BP <150 — preserve penumbra perfusion.","prescriber":"Neurology","start":"2024","refills":0,"status":"Active PRN"},
    {"name":"Aspirin 325mg via NG tube — start at 24h post-tPA","sig":"Hold x24h after tPA. Start only after 24h MRI confirms no hemorrhagic transformation.","prescriber":"Neurology","start":"2024","refills":0,"status":"Hold — start at 24h"},
    {"name":"Atorvastatin 80mg via NG tube QHS","sig":"High-intensity statin for stroke — LDL target <70. Start immediately.","prescriber":"Neurology","start":"2024","refills":5,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Acute Stroke Panel","results":[
    {"test":"Glucose","value":"148","unit":"mg/dL","ref":"70-140","flag":"H"},
    {"test":"INR","value":"1.0","unit":"","ref":"0.9-1.1","flag":""},
    {"test":"Platelet count","value":"220","unit":"K/μL","ref":"150-400","flag":""},
    {"test":"Creatinine","value":"1.0","unit":"mg/dL","ref":"0.7-1.3","flag":""},
    {"test":"Troponin I (high sensitivity)","value":"0.08","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"LDL (fasting)","value":"128","unit":"mg/dL","ref":"<70 for stroke","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Head Non-Contrast — Acute","indication":"Acute stroke symptoms — exclude hemorrhage before tPA","findings":"No acute hemorrhage. No large established infarct. Loss of gray-white differentiation in left MCA territory — early ischemic change.","impression":"No hemorrhage — tPA eligible. Early left MCA ischemia confirmed."}],
  "ddxTargets": ["Left MCA ischemic stroke — tPA administered, post-thrombolysis monitoring (correct)","Hemorrhagic stroke — excluded by CT before tPA","Todd's paralysis post-seizure — no witnessed seizure, aphasia not postictal","Hypoglycemic hemiplegia — glucose 148, not hypoglycemic","Brain tumor with acute decompensation — no prior symptoms, acute onset","Complex migraine — no prior migraine history, NIHSS 14 too severe"],
  "coachFinal": "Diagnosis: left MCA ischemic stroke, post-tPA monitoring. Key medicine learning: (1) tPA eligibility criteria (simplified): onset <4.5h (some cases), no hemorrhage on CT, no recent major surgery, no anticoagulation, BP <185/110 controllable. Relative contraindications include glucose <50 or >400, INR >1.7, severe stroke (NIHSS >25) or very mild (NIHSS <4 in some guidelines. (2) Post-tPA BP management: maintain <180/105 for 24 hours — hemorrhagic transformation risk rises with uncontrolled hypertension. Do NOT lower BP aggressively — penumbral perfusion requires adequate pressure. Labetalol 10-20mg IV or nicardipine infusion for BP control. (3) Hemorrhagic transformation warning signs: sudden neurological worsening, new headache, decreased consciousness, new BP surge. If suspected: STAT CT, hold antithrombotics, reverse if needed. (4) Cardioembolic stroke and AFib: new AFib detected post-stroke → anticoagulation when safe. For moderate infarct: anticoagulate at 2-4 weeks (1-3-6-12 rule: TIA/minor = 1-3 days, moderate = 6-7 days, large = 2-4 weeks). (5) Elevated troponin post-stroke: stress cardiomyopathy or demand ischemia from sympathetic surge. Cardiology consultation, echo, and continuous telemetry."
},
"atopic-dermatitis-severe-v2": {
  "diagnosis": "Severe Atopic Dermatitis — Inadequate Topical Control, Dupilumab Initiation, Biologic Eligibility Criteria",
  "problems": [
    {"problem":"Severe atopic dermatitis — EASI score 34, inadequate topical control","icd":"L20.9","onset":"2018","status":"Active","notes":"Marcus Obi, 28M — widespread eczema, EASI 34 (severe ≥21). Failed TCS + tacrolimus + 2 cycles cyclosporine."},
    {"problem":"Itch-scratch cycle — sleep disruption, DLQI 18 (very large impact)","icd":"L29.9","onset":"2018","status":"Active","notes":"Waking 3-5 nights/week. Missing work. DLQI >10 = very large impact on quality of life."},
    {"problem":"Colonization — Staphylococcus aureus skin barrier breach","icd":"L08.89","onset":"2024","status":"Active","notes":"S. aureus colonization worsens AD flares via superantigen and IL-4/13 pathway amplification."}
  ],
  "medications": [
    {"name":"Dupilumab 600mg SQ loading dose, then 300mg q2weeks","sig":"IL-4Rα blocker — inhibits IL-4 and IL-13 signaling. Self-inject. Store in refrigerator. Do not shake.","prescriber":"Dermatology/Allergy","start":"2024","refills":5,"status":"Active — new biologic"},
    {"name":"Triamcinolone 0.1% ointment — flares only, face-sparing","sig":"Medium-potency TCS for trunk and extremities during flares. Do not use on face or groin — skin atrophy risk.","prescriber":"Dermatology","start":"2024","refills":3,"status":"Active — PRN flares"},
    {"name":"Tacrolimus 0.1% ointment — face and skin folds","sig":"Calcineurin inhibitor — safe for face, neck, groin (no atrophy risk). Apply BID to face/fold areas.","prescriber":"Dermatology","start":"2024","refills":3,"status":"Active"},
    {"name":"Bleach baths — dilute sodium hypochlorite 0.005%","sig":"1/2 tsp bleach per gallon of water, soak 5-10 min 2-3x/week. Reduces S. aureus colonization.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active — hygiene protocol"}
  ],
  "labs": [{"date":"11/2024","panel":"Dupilumab Pre-Treatment Panel","results":[
    {"test":"Total IgE","value":"3200","unit":"IU/mL","ref":"<150","flag":"H"},
    {"test":"Eosinophil count","value":"1.2","unit":"K/μL","ref":"<0.5","flag":"H"},
    {"test":"Serum TARC (thymus activation-regulated chemokine)","value":"3800","unit":"pg/mL","ref":"<450","flag":"H"},
    {"test":"CBC","value":"Normal except eosinophilia","unit":"","ref":"Normal","flag":""},
    {"test":"Hepatitis B/C screening","value":"Negative","unit":"","ref":"Negative","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Severe AD — dupilumab initiation (correct)","Contact dermatitis — patch testing negative; distribution and chronicity support AD","Psoriasis — silver scale, nail pitting, Auspitz sign; not eczematous morphology","Cutaneous T-cell lymphoma — older adults, patch/plaque morphology, biopsy distinguishes","Scabies — burrows in web spaces, new pruritus, close contacts affected","Seborrheic dermatitis — scalp/face predominance, greasy scale, not widespread"],
  "coachFinal": "Diagnosis: severe AD — dupilumab initiation. Key learning: (1) AD severity scoring: mild = EASI <7, moderate = 7-21, severe = >21. DLQI >10 = very large quality of life impact. Both scores are used for biologic eligibility (FDA: moderate-severe AD failing TCS). (2) Dupilumab mechanism: monoclonal antibody blocking IL-4Rα — the shared receptor for IL-4 and IL-13. Both cytokines drive TH2 inflammation, IgE production, and barrier dysfunction in AD. IL-13 directly impairs filaggrin expression. (3) Biologic eligibility criteria: moderate-severe AD (EASI ≥16 or IGA 3-4) + inadequate response to topical therapies ± systemic agents. Dupilumab is approved for age ≥6 months. Also approved: tralokinumab (IL-13 only), lebrikizumab (IL-13 only), abrocitinib/upadacitinib (JAK inhibitors — oral, more efficacious, more risks). (4) S. aureus and AD: >90% of AD skin colonized with S. aureus — not an infection but amplifies inflammation via superantigens and IL-4/13 induction. Bleach baths reduce colonization without antibiotic resistance risk. Treat clinically infected skin (honey crusting, fever) with antibiotics; routine antibiotics for colonization alone are not indicated. (5) Dupilumab side effects: conjunctivitis (most common, ~10-20%), injection site reactions, facial/neck erythema in some patients."
},
"chf-v1": {
  "diagnosis": "Acute Decompensated Heart Failure — HFpEF, Hypertensive Exacerbation, Diastolic Dysfunction",
  "problems": [
    {"problem":"Acute decompensated HF — HFpEF (EF 60%)","icd":"I50.30","onset":"2024","status":"Active","notes":"Elena Vasquez, 74F — sudden onset dyspnea, flash pulmonary edema. BP 192/108 on arrival. EF preserved."},
    {"problem":"Hypertensive urgency — precipitant of flash pulmonary edema","icd":"I10","onset":"2018","status":"Active","notes":"Hypertension is the primary driver — afterload reduction is key treatment."},
    {"problem":"Diastolic dysfunction grade 3 — impaired relaxation + elevated filling pressures","icd":"I50.30","onset":"2022","status":"Active","notes":"Echo: LVH, E/e' ratio 18, LA enlargement. Poor diastolic compliance with acute load."}
  ],
  "medications": [
    {"name":"Furosemide 40mg IV — diuresis","sig":"IV bolus — acute decongestion. Monitor urine output, electrolytes q4h.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active"},
    {"name":"Nitroglycerin 10-200 mcg/min IV infusion — venodilator","sig":"Reduces preload rapidly in flash pulmonary edema. Titrate to BP and dyspnea relief.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active — titrating"},
    {"name":"CPAP or BiPAP — respiratory support","sig":"Non-invasive positive pressure ventilation — reduces work of breathing, improves oxygenation, decreases preload.","prescriber":"Medicine/Pulm","start":"2024","refills":0,"status":"Active"},
    {"name":"Amlodipine 10mg PO daily — add for chronic BP control","sig":"Calcium channel blocker — effective in HFpEF for BP. Add after acute stabilization.","prescriber":"Cardiology","start":"2024","refills":5,"status":"Active — add outpatient"}
  ],
  "labs": [{"date":"11/2024","panel":"Acute HF Panel","results":[
    {"test":"BNP","value":"1840","unit":"pg/mL","ref":"<100","flag":"H"},
    {"test":"Creatinine","value":"1.1","unit":"mg/dL","ref":"0.7-1.3","flag":""},
    {"test":"Troponin I","value":"0.06","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"Sodium","value":"138","unit":"mEq/L","ref":"136-145","flag":""},
    {"test":"Potassium","value":"3.9","unit":"mEq/L","ref":"3.5-5.0","flag":""},
    {"test":"BNP","value":"1840","unit":"pg/mL","ref":"<100","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"Echo — Transthoracic","indication":"Acute HF — EF assessment and etiology","findings":"EF 60%. LVH. Grade 3 diastolic dysfunction. E/e' ratio 18. LA enlargement. No wall motion abnormality. Mild mitral regurgitation.","impression":"HFpEF — preserved EF with significantly elevated filling pressures. LVH consistent with chronic hypertension."}],
  "ddxTargets": ["HFpEF — hypertensive flash pulmonary edema (correct)","HFrEF — EF preserved on echo excludes","ARDS — cardiogenic edema pattern; BNP and response to diuresis distinguish","Pulmonary embolism — no right heart strain on echo, no pleuritic pain","Hypertensive emergency with target organ damage — BP 192, now with pulmonary edema = emergency","Aortic stenosis precipitating HF — no gradient on echo"],
  "coachFinal": "Diagnosis: HFpEF flash pulmonary edema, hypertensive exacerbation. Key learning: (1) HFpEF vs HFrEF: HFrEF = EF <40%, systolic dysfunction, responds to GDMT (ARNIs, beta-blockers, MRAs, SGLT-2i). HFpEF = EF ≥50%, diastolic dysfunction, GDMT is less effective except SGLT-2i (proven benefit) and spironolactone (modest). Treatment of HFpEF is primarily symptomatic and risk factor modification. (2) Flash pulmonary edema mechanism: acute hypertension → massive afterload increase → left ventricle cannot empty effectively → back pressure → acute pulmonary congestion. EF is preserved because this is a load-dependent phenomenon, not intrinsic contractile failure. (3) Treatment of flash pulmonary edema: rapid afterload reduction (IV nitroglycerin, nitroprusside), diuresis, non-invasive ventilation. Response is faster than in HFrEF decompensation. (4) Troponin elevation in HFpEF decompensation: demand ischemia from markedly elevated wall stress and tachycardia. Not always ACS — but ACS must be excluded, especially in patients with risk factors. (5) HFpEF management pillars: BP control (<130/80), rate control for AFib, diuresis for congestion, SGLT-2 inhibitors (empagliflozin, dapagliflozin — Class IIa/IIb for HFpEF), weight loss."
},
"copd-v1": {
  "diagnosis": "COPD Exacerbation — Moderate-Severe, Antibiotics and Steroids, NIV Candidate Assessment",
  "problems": [
    {"problem":"COPD exacerbation — moderate-severe, hospitalization required","icd":"J44.1","onset":"2024","status":"Active","notes":"Frank Devereux, 68M — worsening dyspnea, increased sputum production, new hypercapnia. PaCO2 58."},
    {"problem":"Hypercapnic respiratory failure — CO2 retention","icd":"J96.01","onset":"2024","status":"Active","notes":"pH 7.32, PaCO2 58 — type 2 respiratory failure. BiPAP reduces intubation risk significantly."},
    {"problem":"COPD — GOLD stage 3 (severe), FEV1 38% predicted","icd":"J44.1","onset":"2014","status":"Active","notes":"10 pack-year history. On LABA/LAMA + ICS. 2 exacerbations last year — high-risk phenotype."}
  ],
  "medications": [
    {"name":"BiPAP — IPAP 14 / EPAP 6, titrate to comfort and CO2","sig":"Non-invasive ventilation — reduces intubation rate 65% in hypercapnic COPD exacerbation. Use for pH <7.35 + PaCO2 >45.","prescriber":"Pulmonology/Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Methylprednisolone 125mg IV q8h x3 days, then prednisone 40mg PO x5 days","sig":"Systemic steroid — reduces treatment failure and length of stay. 5-day course as effective as 14 days.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Azithromycin 500mg PO daily x5 days — antibiotic","sig":"Antibiotic for COPD exacerbation — Streptococcus, H. influenzae, Moraxella. Reduces exacerbation duration.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Ipratropium/albuterol (DuoNeb) nebulizer q4h","sig":"Short-acting bronchodilator — maximize airway opening. Nebulizer preferred over MDI in acute exacerbation.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Tiotropium (Spiriva) 18mcg inhaled daily — continue LAMA","sig":"Continue long-acting bronchodilator throughout admission — do not hold.","prescriber":"Pulmonology","start":"2018","refills":5,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"COPD Exacerbation Panel","results":[
    {"test":"ABG — pH","value":"7.32","unit":"","ref":"7.35-7.45","flag":"L"},
    {"test":"ABG — PaCO2","value":"58","unit":"mmHg","ref":"35-45","flag":"H"},
    {"test":"ABG — PaO2","value":"56","unit":"mmHg","ref":"80-100","flag":"L"},
    {"test":"ABG — HCO3","value":"28","unit":"mEq/L","ref":"22-26","flag":"H"},
    {"test":"WBC","value":"13.8","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Procalcitonin","value":"0.18","unit":"ng/mL","ref":"<0.25","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"CXR PA","indication":"COPD exacerbation — exclude pneumonia or pneumothorax","findings":"Hyperinflation. Flattened diaphragms. No infiltrate. No pneumothorax.","impression":"Consistent with COPD exacerbation without pneumonia. No pneumothorax."}],
  "ddxTargets": ["COPD exacerbation — hypercapnic respiratory failure, NIV indicated (correct)","Pneumonia with COPD overlay — procalcitonin low, no infiltrate on CXR","Pneumothorax — excluded on CXR","Pulmonary embolism — pleuritic pain absent, different ABG pattern","Acute asthma — prior diagnosis of COPD, age, smoking history","Heart failure with COPD overlap — CXR no edema, BNP normal"],
  "coachFinal": "Diagnosis: COPD exacerbation with hypercapnic respiratory failure. Key learning: (1) NIV (BiPAP) indications in COPD: pH <7.35 + PaCO2 >45 + respiratory distress. Reduces need for intubation by ~65%, reduces mortality, reduces ICU length of stay. Contraindications: obtunded, unable to protect airway, vomiting, hemodynamic instability, excessive secretions. (2) Steroid dosing in COPD exacerbation: 40mg prednisone x5 days is as effective as 14 days (REDUCE trial) — use the short course. Reduces hyperglycemia and steroid complications. IV methylprednisolone for unable-to-take-PO or severe exacerbation. (3) Antibiotic indications in COPD exacerbation: purulent sputum + increased dyspnea + increased sputum volume (Anthonisen criteria) — give antibiotics. Single criterion or non-purulent sputum — antibiotics may not help but low harm. Procalcitonin-guided therapy reduces antibiotic use without worse outcomes. (4) Oxygen titration in COPD: target SpO2 88-92%, NOT 100%. Hypoxic respiratory drive is a real (if sometimes overstated) phenomenon in chronic CO2 retainers — excessive O2 worsens hypercapnia via Haldane effect and V/Q changes. (5) Discharge planning: ensure inhaler technique reviewed, smoking cessation offered, pulmonary rehab referral, LAMA + LABA ± ICS therapy optimized."
},
"cross-diabetic-triad": {
  "diagnosis": "Diabetic Triad — Peripheral Neuropathy, Nephropathy, and Retinopathy Presenting Together, Annual Screening Overdue",
  "problems": [
    {"problem":"Diabetic peripheral neuropathy — bilateral stocking-glove distribution","icd":"E11.40","onset":"2022","status":"Active","notes":"Eduardo Reyes, 56M — T2DM x12 years, A1c 10.1%. Burning feet, loss of protective sensation (LOPS)."},
    {"problem":"Diabetic nephropathy — UACR 420 mg/g (macroalbuminuria)","icd":"E11.65","onset":"2021","status":"Active","notes":"eGFR 52 — CKD stage 3b. Nephrology referral for co-management. SGLT-2i + ACEi/ARB indicated."},
    {"problem":"Diabetic retinopathy — non-proliferative, moderate grade","icd":"E11.319","onset":"2023","status":"Active","notes":"Ophthalmology: microaneurysms, dot-blot hemorrhages, no neovascularization. Annual dilated exam."},
    {"problem":"Foot at risk — LOPS + absent ankle reflexes + callus","icd":"E11.621","onset":"2024","status":"Active","notes":"Wagner grade 0 risk foot. Protective footwear, podiatry, patient education critical."}
  ],
  "medications": [
    {"name":"Metformin 1000mg BID — continue if tolerated (reduce if eGFR <30)","sig":"Hold if eGFR <30. Monitor eGFR q3-6 months.","prescriber":"PCP/Endocrinology","start":"2013","refills":5,"status":"Active"},
    {"name":"Empagliflozin 10mg PO daily — SGLT-2i for nephroprotection","sig":"SGLT-2 inhibitor — slows CKD progression, reduces CV events. Genital mycotic infection risk — counsel hygiene.","prescriber":"Nephrology/Endocrinology","start":"2024","refills":3,"status":"Active — new"},
    {"name":"Lisinopril 20mg PO daily — ACEi for nephroprotection","sig":"First-line nephroprotection. Uptitrate to maximum tolerated dose. Monitor K+ and creatinine.","prescriber":"PCP","start":"2020","refills":5,"status":"Active"},
    {"name":"Pregabalin 75mg BID — diabetic peripheral neuropathy pain","sig":"Uptitrate to 150mg BID if tolerated. First-line for DPN pain. Dizziness and drowsiness are common side effects.","prescriber":"Neurology/PCP","start":"2024","refills":3,"status":"Active — new"},
    {"name":"Protective footwear and daily foot inspection","sig":"Therapeutic shoes — reduces plantar pressure. Daily inspection of soles with mirror. No walking barefoot.","prescriber":"Podiatry","start":"2024","refills":0,"status":"Active — non-pharmacologic"}
  ],
  "labs": [{"date":"11/2024","panel":"Diabetes Complication Screen","results":[
    {"test":"HbA1c","value":"10.1","unit":"%","ref":"<7.0","flag":"H"},
    {"test":"UACR","value":"420","unit":"mg/g","ref":"<30","flag":"H"},
    {"test":"eGFR","value":"52","unit":"mL/min/1.73m²","ref":">60","flag":"L"},
    {"test":"LDL","value":"118","unit":"mg/dL","ref":"<70 for DM+CKD","flag":"H"},
    {"test":"10g monofilament — right foot","value":"Unable to feel","unit":"","ref":"Should feel","flag":"H"},
    {"test":"Vibration sense — right ankle","value":"Absent","unit":"","ref":"Present","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Diabetic triad — neuropathy + nephropathy + retinopathy (correct)","Uremia-induced neuropathy — CKD contributing but primary etiology is diabetes","IgA nephropathy — no hematuria, DM history and pattern supports diabetic nephropathy","CMV/HIV retinopathy — immunocompetent, distribution and lesion type differ","B12 deficiency neuropathy — check if on metformin long-term (B12 depletion risk)","Charcot-Marie-Tooth — genetic, symmetric motor > sensory, different onset pattern"],
  "coachFinal": "Diagnosis: diabetic triad — simultaneous neuropathy, nephropathy, retinopathy. Key learning: (1) Screening schedule for T2DM: Annual UACR + eGFR (nephropathy), annual dilated eye exam (retinopathy), annual foot exam with monofilament + ABI (neuropathy/PAD). A1c every 3 months until at goal, then q6 months. This patient had overdue screening — every element abnormal. (2) SGLT-2 inhibitors for diabetic nephropathy: empagliflozin and dapagliflozin reduce progression to ESRD by ~30-40% independent of glycemic control — a direct renoprotective mechanism via reduced glomerular hyperfiltration. CKD-approved at eGFR ≥20. (3) ACEi/ARB + SGLT-2i = additive renoprotection — the combination is now standard of care for macroalbuminuria in T2DM. (4) DPN treatment: pregabalin, duloxetine, and gabapentin are first-line for painful DPN. Tricyclic antidepressants (amitriptyline) are effective but limited by anticholinergic side effects in older adults. Opioids are not first-line. (5) Metformin and B12: long-term metformin use depletes B12 via ileal absorption interference. Annual B12 level in patients on metformin >5 years — B12 deficiency can cause neuropathy that mimics or worsens DPN."
},
"cross-falls-polypharmacy": {
  "diagnosis": "Recurrent Falls — Polypharmacy-Induced, Beer's Criteria Medications, Comprehensive Medication Reconciliation",
  "problems": [
    {"problem":"Recurrent falls — 3 in past 6 months, polypharmacy contributor","icd":"Z91.81","onset":"2024","status":"Active","notes":"Dorothy Walsh, 82F — on 11 medications, 4 on Beers Criteria list. TUG test abnormal at 18 seconds."},
    {"problem":"Polypharmacy — 11 medications, Beer's Criteria violations","icd":"Z79.899","onset":"2019","status":"Active","notes":"Diphenhydramine, lorazepam, nifedipine IR, cyclobenzaprine — all potentially inappropriate in elderly."},
    {"problem":"Orthostatic hypotension — systolic drop 24 mmHg on standing","icd":"I95.1","onset":"2024","status":"Active","notes":"Supine 142/84 → standing 118/76. Medication-induced — multiple offenders."},
    {"problem":"Cognitive impairment — MoCA 22 (mild)","icd":"G31.84","onset":"2023","status":"Active","notes":"Mild cognitive impairment — increases fall risk and medication adherence problems."}
  ],
  "medications": [
    {"name":"DISCONTINUE diphenhydramine (Benadryl) — Beer's Criteria","sig":"Highly anticholinergic in elderly — sedation, confusion, urinary retention, fall risk. Replace sleep complaints with melatonin or CBT-I.","prescriber":"Geriatrics","start":"DISCONTINUE","refills":0,"status":"DISCONTINUE"},
    {"name":"TAPER and DISCONTINUE lorazepam — Beer's Criteria","sig":"Benzodiazepine in elderly — increases fall risk 2-3x, cognitive impairment, respiratory depression. Taper over 4-8 weeks to prevent withdrawal seizure.","prescriber":"Geriatrics/PCP","start":"TAPER","refills":0,"status":"TAPER to DISCONTINUE"},
    {"name":"SWITCH nifedipine IR to amlodipine 5mg daily — Beer's Criteria","sig":"Short-acting nifedipine causes reflex tachycardia and BP swings contributing to orthostasis. Long-acting CCB is safer.","prescriber":"Geriatrics","start":"SWITCH","refills":5,"status":"SWITCH to amlodipine"},
    {"name":"Melatonin 5mg at bedtime — replace diphenhydramine for sleep","sig":"Safer sleep aid for elderly — no anticholinergic side effects, no fall risk","prescriber":"Geriatrics","start":"2024","refills":3,"status":"Active — replace Benadryl"}
  ],
  "labs": [{"date":"11/2024","panel":"Fall Risk Assessment","results":[
    {"test":"TUG test (Timed Up and Go)","value":"18","unit":"seconds","ref":"<12 normal, >13.5 high fall risk","flag":"H"},
    {"test":"MoCA cognitive screen","value":"22","unit":"/30","ref":"≥26 normal","flag":"L"},
    {"test":"Orthostatic BP — supine","value":"142/84","unit":"mmHg","ref":"","flag":""},
    {"test":"Orthostatic BP — standing 1 min","value":"118/76","unit":"mmHg","ref":"Drop <20 systolic","flag":"H"},
    {"test":"Vitamin D (25-OH)","value":"18","unit":"ng/mL","ref":"≥30","flag":"L"},
    {"test":"TSH","value":"2.8","unit":"mIU/L","ref":"0.4-4.0","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Polypharmacy-induced falls — Beer's Criteria medications, orthostasis (correct)","Parkinson's disease — no rigidity, bradykinesia, or resting tremor","Cerebellar ataxia — TUG abnormal but gait not grossly ataxic","Vertebrobasilar insufficiency — episodic vertigo not the primary complaint","Cardiac syncope — no witnessed LOC, no palpitations preceding fall","Osteoporosis complicating falls — relevant for injury prevention but not the fall cause"],
  "coachFinal": "Diagnosis: polypharmacy-induced recurrent falls. Key learning: (1) Beers Criteria 2023 (American Geriatrics Society): medications potentially inappropriate in adults ≥65: anticholinergics (diphenhydramine, oxybutynin, TCAs), benzodiazepines, non-BZD hypnotics (zolpidem), short-acting nifedipine, muscle relaxants, first-generation antihistamines. These increase fall and cognitive impairment risk. (2) Orthostatic hypotension definition: systolic drop ≥20 mmHg or diastolic drop ≥10 mmHg within 3 minutes of standing. Medication causes: alpha-blockers, diuretics, short-acting CCBs, beta-blockers, antidepressants. Remove offending agents before adding midodrine or fludrocortisone. (3) Benzodiazepine deprescription: MUST taper — abrupt discontinuation after long-term use risks seizure. Reduce by 10-25% every 1-2 weeks. CIWA monitoring if heavy use. (4) Fall risk multifactorial: address medications, vision (cataracts, glasses prescription), footwear (non-slip), home safety (grab bars, bath mat), vitamin D deficiency, PT/OT evaluation. (5) Vitamin D deficiency (18 ng/mL) increases fall risk — supplement with vitamin D3 800-2000 IU daily. Combined calcium + vitamin D reduces fall and fracture risk in elderly."
},
"cross-jaw-chest": {
  "diagnosis": "Jaw Pain Radiating to Chest — Referred Cardiac Pain vs Dental Pain, STEMI Workup Required",
  "problems": [
    {"problem":"Jaw and left-sided chest discomfort — unstable angina vs STEMI equivalent","icd":"I20.0","onset":"2024","status":"Active","notes":"Charles Ito, 62M — 45-min jaw tightness radiating to left chest and arm. Diaphoresis. EKG: ST depressions V4-V6."},
    {"problem":"Acute coronary syndrome — high HEART score (8)","icd":"I21.9","onset":"2024","status":"Active","notes":"HEART score 8 = high risk. Troponin pending. Cardiology activated. ACS until proven otherwise."},
    {"problem":"Hypertension + T2DM — silent ischemia risk factors","icd":"I10","onset":"2014","status":"Active","notes":"Diabetics frequently present with atypical symptoms — jaw pain, epigastric pain, fatigue instead of chest pain."}
  ],
  "medications": [
    {"name":"Aspirin 324mg PO — loading dose","sig":"Non-enteric coated, chew and swallow. Antiplatelet loading for ACS.","prescriber":"ED","start":"2024","refills":0,"status":"Given"},
    {"name":"Nitroglycerin 0.4mg SL q5min x3 — angina trial","sig":"SL nitroglycerin — if jaw/chest pain is angina, should improve. Hold if systolic <90 or right ventricular MI suspected.","prescriber":"ED","start":"2024","refills":0,"status":"Active — trial"},
    {"name":"Heparin UFH 60 units/kg IV bolus, then 12 units/kg/h infusion","sig":"Anticoagulation — NSTEMI/UA management. Titrate to aPTT 60-100 seconds.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active — pending troponin"},
    {"name":"Ticagrelor 180mg PO loading dose — DAPT","sig":"P2Y12 inhibitor — dual antiplatelet therapy with aspirin for ACS. Do NOT use ticagrelor if CABG planned (hold 5 days pre-op).","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"ACS Workup","results":[
    {"test":"Troponin I (hsTnI) — initial","value":"0.08","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"Troponin I — 3h repeat","value":"0.48","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"ECG interpretation","value":"ST depressions V4-V6, 1-2mm — posterior ischemia pattern","unit":"","ref":"Normal","flag":"H"},
    {"test":"Glucose","value":"218","unit":"mg/dL","ref":"70-100","flag":"H"},
    {"test":"BMP","value":"Na 138, K 4.1, Cr 1.0 — normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"Portable ECG","indication":"Jaw pain + chest pain — ACS workup","findings":"Normal sinus rhythm. ST depressions 1-2mm V4-V6. No ST elevation. No Q waves.","impression":"NSTEMI pattern — posterior ischemia. Cardiology activated."}],
  "ddxTargets": ["NSTEMI — jaw + chest pain, rising troponin, ST depressions (correct)","Dental pain with anxiety-driven chest symptoms — dental pain does NOT cause troponin rise or ECG changes","GERD — no temporal relationship to meals, diaphoresis not explained","Aortic dissection — tearing, back pain, BP differential; this presentation is more ACS","Musculoskeletal chest pain — reproducible on palpation; this is not","Inferior STEMI — right-sided leads needed; consider posterior leads (V7-V9)"],
  "coachFinal": "Diagnosis: NSTEMI presenting as jaw pain. Key learning: (1) Atypical ACS presentations: jaw pain, epigastric pain, left arm/shoulder pain, back pain, fatigue, dyspnea — ALL can be the sole or primary presentation of MI. Women, elderly, and diabetics are most likely to present atypically. Never dismiss jaw pain without an ECG and troponin in patients with cardiac risk factors. (2) The HEART score: History (suspicious vs typical vs non-suspicious), ECG (LBBB/LVH/ischemia), Age, Risk factors, Troponin. Score 0-3 = low risk, 4-6 = moderate, 7-10 = high. Score 8 here = high risk → mandatory cardiology, heparin, DAPT, early cath. (3) Posterior MI: ST depressions in V4-V6 may represent a posterior STEMI (mirror image). Apply posterior leads V7-V9 — ST elevation >0.5mm in posterior leads = posterior STEMI = cath lab activation, not NSTEMI management. (4) DAPT in ACS: aspirin + P2Y12 inhibitor (ticagrelor preferred over clopidogrel per PLATO trial — faster onset, more consistent platelet inhibition). Prasugrel is alternative. Hold P2Y12 if CABG planned: ticagrelor 5 days, prasugrel 7 days, clopidogrel 5 days. (5) Dental referral AFTER cardiac clearance: this patient has concurrent dental disease but the acute priority is ACS workup. Never let dental pain diagnosis delay cardiac evaluation in a patient with risk factors and atypical symptoms."
}
}

def enrich(slug, e):
    path = os.path.join(EMR_DIR, f"{slug}.js")
    if not os.path.exists(path): print(f"  SKIP {slug}"); return False
    with open(path) as f: src = f.read()
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m: print(f"  PARSE ERROR {slug}"); return False
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
print(f"\nBatch 11: {done}/{len(ENRICHMENTS)} enriched")
