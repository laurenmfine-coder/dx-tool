#!/usr/bin/env python3
"""Batch 28 — Part A: 8 cases.

Cases: lung-cancer-staging, lung-cancer-with-postobstructive-process,
       lyme-carditis, malignant-hyperthermia, massive-hemothorax,
       massive-pe-with-rv-failure, meckel-diverticulum, medication-overdose
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "lung-cancer-staging": {
    "diagnosis": "Newly Diagnosed Lung Cancer — Staging Workup",
    "coachFinal": (
      "Diagnosis: newly diagnosed lung cancer requiring complete staging workup before treatment planning. "
      "Key learning: "
      "(1) Once lung cancer is suspected or biopsy-confirmed, complete staging is essential to define treatment — curative intent (surgery or chemoradiation) versus palliative systemic therapy. "
      "The key decisions are histology (non-small cell vs small cell), molecular/immunohistochemical profile (for NSCLC: EGFR, ALK, ROS1, BRAF V600E, KRAS G12C, MET exon 14, RET, HER2, NTRK, plus PD-L1 expression), and stage (TNM 8th edition for NSCLC; limited vs extensive for SCLC in older practice, though TNM is now used for both). "
      "(2) The standard staging package for NSCLC is CT chest with IV contrast extending through the adrenals and upper abdomen, PET-CT (to evaluate mediastinal nodes and distant metastases), MRI brain with contrast (high rate of occult CNS metastases, required even in asymptomatic patients with stage IB or higher), and invasive mediastinal staging in any case with suspicious nodes on imaging — EBUS-TBNA is first-line, mediastinoscopy or surgical staging if EBUS is non-diagnostic and result will change management. "
      "(3) Molecular profiling is essential before systemic therapy in NSCLC — treatment decisions in advanced disease depend on it. "
      "Send comprehensive next-generation sequencing from the biopsy tissue (or liquid biopsy if tissue insufficient); do not start empiric chemotherapy before results return in stable patients. "
      "Targetable driver mutations confer major survival benefit with matched targeted therapy (osimertinib for EGFR, alectinib for ALK, crizotinib for ROS1, dabrafenib-trametinib for BRAF, sotorasib for KRAS G12C). "
      "PD-L1 expression (tumor proportion score) guides immune checkpoint inhibitor selection in the absence of a driver mutation. "
      "(4) Functional assessment complements anatomic staging. "
      "PFTs with DLCO are standard before thoracic surgery — predicted postoperative FEV1 and DLCO below 40% suggest high surgical risk. "
      "Cardiopulmonary exercise testing (VO2 max) is used when PFTs are borderline. "
      "Performance status (ECOG or Karnofsky), nutritional assessment, and comorbidity burden influence candidacy for aggressive therapy. "
      "(5) Classic pitfalls: (a) starting systemic therapy before molecular results in an otherwise stable patient — a patient with an EGFR mutation given chemoimmunotherapy first may have compromised responses to subsequent targeted therapy. "
      "(b) Missing brain metastases by skipping MRI in 'asymptomatic' patients — treatment strategy (stereotactic radiosurgery, whole-brain radiation, CNS-penetrant targeted therapy) depends on identifying them. "
      "(c) Not offering smoking cessation pharmacotherapy at diagnosis — cessation improves treatment tolerance, response, and survival even after diagnosis. "
      "(d) Underutilizing multidisciplinary thoracic oncology tumor boards — survival outcomes are improved when decisions are made collaboratively among surgery, radiation oncology, medical oncology, pulmonology, radiology, and pathology. "
      "(e) Forgetting that NSCLC stage IIIA is a heterogeneous, treatment-decision-heavy subgroup where multidisciplinary review is particularly important."
    )
  },

  "lung-cancer-with-postobstructive-process": {
    "diagnosis": "Lung Cancer (Suspected Squamous Cell RUL) with Post-Obstructive Pneumonia and Hypercalcemia of Malignancy",
    "coachFinal": (
      "Diagnosis: right upper lobe lung cancer (likely squamous cell) with post-obstructive pneumonia and paraneoplastic hypercalcemia. "
      "Key learning: "
      "(1) This case illustrates the classic triad of a centrally located lung cancer: mass effect (cough, hemoptysis, post-obstructive pneumonia), local invasion or compression (superior vena cava syndrome, Pancoast/Horner syndrome with apical tumors, hoarseness from recurrent laryngeal nerve), and paraneoplastic syndromes (hypercalcemia from PTHrP in squamous cell, SIADH in small cell, Lambert-Eaton in small cell, ectopic Cushing syndrome, hypertrophic osteoarthropathy). "
      "Recognizing the pattern — 'something more than pneumonia' — triggers the imaging and bronchoscopic workup that leads to diagnosis. "
      "(2) Post-obstructive pneumonia biology differs from standard community-acquired pneumonia because impaired bronchial drainage promotes anaerobic overgrowth and creates a partially walled-off nidus of infection. "
      "Empiric coverage should include anaerobes (ampicillin-sulbactam or piperacillin-tazobactam alone, or ceftriaxone plus metronidazole), with longer duration than typical CAP (often 2-4 weeks), and consideration of drainage (bronchoscopy for mucus plug removal, stenting of the obstructed airway for durable aeration). "
      "(3) Hypercalcemia of malignancy from squamous cell lung cancer is typically PTHrP-mediated. "
      "PTHrP shares homology with PTH at the receptor but is not recognized by standard PTH assays — so PTH will be suppressed and specific PTHrP testing confirms the mechanism. "
      "Treatment is staged: aggressive IV isotonic saline (200-500 mL/hr), calcitonin (4 IU/kg SQ/IM q12h) for rapid onset within hours, and zoledronic acid (4 mg IV over 15 minutes) for sustained effect at 24-48 hours. "
      "Denosumab is an option for refractory cases or renal failure. "
      "Discontinue calcium and vitamin D supplements, thiazides, and lithium when possible. "
      "(4) Overall management strategy: treat the pneumonia and hypercalcemia urgently, stabilize the airway, then pursue staging (CT chest/abdomen/pelvis, PET-CT, MRI brain, bronchoscopy with biopsy, comprehensive molecular profiling and PD-L1) and tumor board review. "
      "Palliative care involvement early is associated with improved quality of life and sometimes survival — introduce this as an adjunct to oncologic care, not as an alternative. "
      "(5) Classic pitfalls: (a) treating the pneumonia with short-course azithromycin and discharging without imaging the chest — post-obstructive pneumonia in a smoker always needs a look for the underlying lesion. "
      "(b) Missing concurrent hypercalcemia because the patient's confusion is attributed to hypoxia — always check a calcium on any older patient with altered mental status and a lung mass. "
      "(c) Starting empiric chemoimmunotherapy before molecular and PD-L1 results are back — stability permitting, wait. "
      "(d) Forgetting to ask about driver-mutation risk factors like never-smoker status, adenocarcinoma histology, Asian ancestry (higher EGFR rate), and young age — these patients most benefit from comprehensive molecular profiling."
    )
  },

  "lyme-carditis": {
    "diagnosis": "Lyme Carditis with High-Grade AV Block",
    "coachFinal": (
      "Diagnosis: Lyme carditis with high-grade atrioventricular (AV) block. "
      "Key learning: "
      "(1) Lyme disease is caused by the spirochete Borrelia burgdorferi, transmitted by Ixodes ticks, and progresses through three stages: early localized (erythema migrans — the classic expanding bull's-eye rash at the bite site, though may be absent in up to 30%), early disseminated (multiple EM lesions, facial nerve palsy, meningitis, carditis), and late (arthritis — typically large joints like the knee — and chronic neuroborreliosis). "
      "Lyme carditis occurs in about 1% of untreated cases, usually in the early disseminated phase (weeks after exposure), and classically presents with fluctuating AV block of variable degree. "
      "(2) Clinical presentation of Lyme carditis: palpitations, dizziness, syncope or presyncope, dyspnea, and chest discomfort in a patient with epidemiologic risk (endemic region, outdoor exposure, tick bite, EM rash — though rash is absent in many patients). "
      "ECG classically shows AV block that can fluctuate rapidly between first-degree, Mobitz II, and third-degree block — the rapid variability and young age of the patient should prompt consideration. "
      "Less commonly: myopericarditis, mild LV dysfunction, and rarely bundle branch block or atrial arrhythmias. "
      "(3) The 'Suspicious Index in Lyme Carditis' (SILC) score helps stratify patients: Constitutional symptoms (1), Outdoor activity/endemic region (1), Male sex (1), Erythema migrans or rash (1), Young age under 50 (1), Tick bite history (1). "
      "Score 7+ suggests Lyme etiology. "
      "Diagnosis: two-step serology (ELISA screening, confirmatory Western blot for IgM in early and IgG in later disease). "
      "Serology may be negative in very early disease — clinical suspicion with exposure history supports empiric treatment. "
      "(4) Management of Lyme carditis with high-degree AV block requires hospital admission with continuous cardiac monitoring. "
      "Treatment is IV ceftriaxone 2 g daily for 14-21 days (can be narrowed to oral doxycycline once block resolves). "
      "Transcutaneous or transvenous pacing is used for hemodynamically unstable high-grade block; because the block typically resolves within days to weeks of antibiotics, PERMANENT pacemakers are almost never indicated — this is critical to avoid unnecessary lifetime device placement in young patients. "
      "Full recovery of conduction is the rule. "
      "(5) Classic pitfalls: (a) implanting a permanent pacemaker in a young patient with high-grade block without considering Lyme — always ask about exposures and check serology in patients from endemic areas with unexplained AV block. "
      "(b) Missing the diagnosis without an EM rash — the rash is absent in a substantial minority, and a negative history does not exclude Lyme. "
      "(c) Undertreating with oral antibiotics alone in high-grade block — IV ceftriaxone is standard for cardiac involvement. "
      "(d) Forgetting to evaluate for other tick-borne co-infections (Babesia, Anaplasma, Powassan virus) in patients from endemic regions with atypical or severe presentations."
    )
  },

  "malignant-hyperthermia": {
    "diagnosis": "Malignant Hyperthermia Triggered by Volatile Anesthetic + Succinylcholine",
    "coachFinal": (
      "Diagnosis: malignant hyperthermia (MH) triggered by sevoflurane and succinylcholine during general anesthesia, with rhabdomyolysis, AKI, DIC, and mixed acidosis. "
      "Key learning: "
      "(1) Malignant hyperthermia is a pharmacogenetic disorder of skeletal muscle calcium regulation, most commonly due to mutations in the ryanodine receptor RYR1 or the dihydropyridine receptor CACNA1S. "
      "Triggers are volatile anesthetics (sevoflurane, isoflurane, desflurane, halothane, enflurane) and the depolarizing neuromuscular blocker succinylcholine. "
      "The pathophysiology is sustained, uncontrolled release of calcium from the sarcoplasmic reticulum leading to prolonged muscle contraction, massive ATP consumption, heat production, acidosis, and eventual rhabdomyolysis. "
      "Incidence is about 1 in 5,000-50,000 anesthetics; genetic penetrance is variable, so family history is often silent. "
      "(2) Presentation — often intraoperative or immediately postop. "
      "Earliest signs: unexplained rise in end-tidal CO2 that does not respond to increased minute ventilation (the most sensitive early sign), tachycardia, masseter muscle rigidity with succinylcholine, and generalized muscle rigidity. "
      "Later: hyperthermia (often rapid rise, sometimes over 42 C), mixed respiratory and metabolic acidosis, hyperkalemia, rhabdomyolysis with CK over 10,000 (sometimes over 100,000), myoglobinuria, and DIC. "
      "Hyperthermia is a LATE sign — do not wait for it to diagnose MH. "
      "(3) Treatment is emergent and protocol-driven (MHAUS hotline 1-800-644-9737 is the North American resource). "
      "(a) STOP triggering agents immediately — switch to non-triggering anesthesia (propofol, total IV anesthesia) and change the circuit and soda lime. "
      "(b) Hyperventilate with 100% oxygen at high flows. "
      "(c) DANTROLENE 2.5 mg/kg IV bolus, repeated every 5-10 minutes up to 10 mg/kg or until signs resolve; maintenance 1 mg/kg q4-6h for 24-48 hours. "
      "Dantrolene directly inhibits the ryanodine receptor, stopping calcium release. "
      "Newer formulation Ryanodex is concentrated (250 mg per vial) and faster to reconstitute. "
      "(d) Active cooling: cold IV fluids, ice packs to groin/axillae, cooled body cavity lavage, evaporative cooling. Stop cooling at 38 C to avoid overshoot hypothermia. "
      "(e) Treat hyperkalemia (calcium, insulin/dextrose, bicarbonate, albuterol; dialysis for refractory cases). "
      "(f) Aggressive IV fluids and alkalinization (target urine output 1-2 mL/kg/hr) for pigment nephropathy from rhabdomyolysis. "
      "(g) Monitor CK, electrolytes, ABG, coagulation, lactate, myoglobin; transfuse for DIC as indicated. "
      "(h) ICU admission for 24-48 hours minimum because recrudescence occurs in up to 25%. "
      "(4) Diagnosis confirmation and genetic counseling. "
      "The clinical diagnosis is made on the scene by pattern recognition; MH gene testing should be sent on the patient and at-risk family members. "
      "The caffeine-halothane contracture test (CHCT, formerly the gold standard) remains definitive where available. "
      "Patients should wear medical alert identification and inform all future anesthesiologists. "
      "First-degree relatives should be considered affected until proven otherwise. "
      "(5) Classic pitfalls: (a) waiting for hyperthermia to make the diagnosis — by then the patient is in severe metabolic crisis. "
      "(b) Thinking MH is ruled out by prior uneventful anesthetics — MH can occur on first, second, or later exposure. "
      "(c) Using succinylcholine in an MH-susceptible patient 'just one more time' because they have had it before. "
      "(d) Forgetting to remove the vaporizer and change the circuit — residual volatile anesthetic continues the trigger. "
      "(e) Not stocking adequate dantrolene (at least 36 vials of the older formulation or an equivalent supply of Ryanodex) and not running annual MH drills in any facility that uses volatile anesthetics."
    )
  },

  "massive-hemothorax": {
    "diagnosis": "Massive Hemothorax",
    "coachFinal": (
      "Diagnosis: massive hemothorax requiring immediate tube thoracostomy and potential operative intervention. "
      "Key learning: "
      "(1) Hemothorax — blood in the pleural space — is classified as massive when the initial chest tube output is ≥1,500 mL (or ≥20 mL/kg in pediatrics) or ongoing output exceeds 200 mL/hr for 2-4 hours. "
      "These thresholds identify patients likely to need thoracotomy or VATS for ongoing hemorrhage. "
      "Mechanisms include blunt and penetrating chest trauma, lacerations of intercostal or internal thoracic arteries, pulmonary parenchymal injury, great vessel injury (aortic transection, pulmonary hilar injury — often rapidly fatal), and iatrogenic causes (central line placement, chest tube insertion, biopsy). "
      "(2) Clinical presentation: dyspnea, chest pain, hypotension, tachycardia, decreased or absent breath sounds, dullness to percussion on the affected side, and signs of shock. "
      "In trauma patients, always assess by primary survey (ABCDE) and identify hemothorax alongside other immediately life-threatening injuries — airway, tension pneumothorax, cardiac tamponade, open pneumothorax, massive hemothorax, flail chest (the 'deadly dozen' of thoracic trauma). "
      "eFAST (extended focused assessment with sonography in trauma) at the bedside identifies pleural fluid quickly and is part of standard trauma protocol. "
      "(3) Initial management: supplemental oxygen, large-bore peripheral IV access (at least two), type and crossmatch for blood, massive transfusion protocol activation if hemodynamically unstable, and balanced resuscitation (1:1:1 ratio of pRBCs, FFP, platelets) — avoid crystalloid-heavy resuscitation which worsens coagulopathy and mortality. "
      "Large-bore chest tube (28-36 Fr) placed in the 4th-5th intercostal space, mid-axillary line, for drainage. "
      "Autologous transfusion (cell saver) from chest tube output can be used for ongoing hemorrhage and is particularly useful in massive hemothorax. "
      "(4) Operative thoracotomy or VATS indications: immediate drainage ≥1,500 mL, ongoing output over 200 mL/hr for 4 hours, or hemodynamic instability despite resuscitation. "
      "Emergency department thoracotomy (resuscitative thoracotomy) is a salvage procedure indicated for penetrating chest trauma with signs of life lost within 15 minutes — allows aortic cross-clamping and repair of cardiac wounds. "
      "VATS has increasingly replaced open thoracotomy for retained hemothorax, delayed clotted hemothorax, and empyema complicating incomplete drainage. "
      "(5) Classic pitfalls: (a) under-resuscitating with crystalloid and 'catching up' with blood later — early balanced transfusion is associated with better outcomes. "
      "(b) Inserting a small-bore chest tube (pigtail catheter) for massive hemothorax — small catheters clot and fail to drain blood effectively; use large bore. "
      "(c) Missing retained hemothorax — up to 20% of hemothoraces leave residual blood after chest tube, which can progress to fibrothorax and empyema; CT chest after initial drainage identifies candidates for VATS evacuation. "
      "(d) Forgetting to consider aortic injury in deceleration mechanism (high-speed MVC, fall from height) — CT angiography when suspected; left hemothorax and widened mediastinum on CXR are red flags."
    )
  },

  "massive-pe-with-rv-failure": {
    "diagnosis": "Massive Pulmonary Embolism with Acute Right Ventricular Failure",
    "coachFinal": (
      "Diagnosis: massive (high-risk) pulmonary embolism with hemodynamic instability and acute right ventricular failure. "
      "Key learning: "
      "(1) Pulmonary embolism is risk-stratified into three tiers. "
      "High-risk (massive) PE: hemodynamic instability defined as sustained hypotension (SBP under 90 for at least 15 minutes or requiring vasopressors), cardiac arrest, or persistent profound bradycardia/shock. "
      "Intermediate-risk (submassive) PE: hemodynamically stable but with RV dysfunction on echo or CT (RV/LV ratio over 0.9) AND/OR elevated troponin or BNP. "
      "Low-risk PE: hemodynamically stable without RV strain or biomarker elevation, often suitable for outpatient management with selected DOACs. "
      "(2) Diagnostic workup depends on stability. "
      "In stable patients: CT pulmonary angiography is the gold standard; V/Q scan for patients with contrast allergy or significant kidney disease; D-dimer (age-adjusted cutoff for elderly: age x 10 ng/mL) to rule out PE in low-pretest-probability patients (Wells or Geneva score). "
      "In unstable patients: bedside echocardiography shows acute RV dilatation, McConnell sign (RV free-wall hypokinesis with preserved apical function), septal flattening (D-sign), and sometimes visible thrombus-in-transit — these findings support empiric treatment when the patient is too unstable for CT. "
      "ECG may show sinus tachycardia, right bundle branch block, S1Q3T3 pattern, right axis deviation, or anterior T-wave inversions (V1-V4, Mclennan sign). "
      "(3) Management of massive PE: IMMEDIATE reperfusion. "
      "Options in order of availability and patient factors: (a) Systemic thrombolysis with alteplase 100 mg IV over 2 hours (or 50 mg over 2 hours in high bleeding risk) or tenecteplase — standard for massive PE without absolute contraindications. "
      "(b) Catheter-directed thrombolysis (CDT, EKOS) or catheter-based thrombectomy (FlowTriever, Inari) — lower systemic dose, appealing when bleeding risk is elevated. "
      "(c) Surgical pulmonary embolectomy for failed lysis, shock with absolute lysis contraindications, or clot-in-transit. "
      "(d) ECMO (VA-ECMO) as a bridge to definitive therapy in refractory shock or arrest. "
      "Simultaneous anticoagulation with unfractionated heparin (preferred for its rapid onset and reversibility). "
      "(4) Hemodynamic support of RV failure: the failing RV is preload-dependent but preload-intolerant — too little volume drops RV output, too much dilates the RV and compresses the LV through interventricular dependence. "
      "Give small judicious fluid boluses (250-500 mL) with reassessment. "
      "Vasopressors: norepinephrine first (maintains systemic pressure without worsening RV afterload); vasopressin is a good adjunct because it increases SVR without increasing pulmonary vascular resistance. "
      "Avoid excessive dobutamine alone because it can cause hypotension; milrinone has pulmonary vasodilator properties but can drop BP — usually best combined with a pressor. "
      "Inhaled pulmonary vasodilators (iNO, inhaled prostacyclin) can temporize while waiting for reperfusion. "
      "Cautious intubation — positive pressure ventilation and induction agents can precipitate cardiac arrest; avoid ketamine hypotension, pre-load with pressors, and use low tidal volumes. "
      "(5) Classic pitfalls: (a) over-resuscitating with fluids in RV failure — worsens RV dilation and LV compression. "
      "(b) Attributing the hypotension to sepsis or hypovolemia and missing PE — any patient with unexplained shock plus tachycardia plus hypoxia needs PE on the differential, especially postop, post-trauma, or with risk factors. "
      "(c) Withholding thrombolysis out of bleeding fear in truly massive PE — the mortality of untreated massive PE is about 30-50%; thrombolysis cuts that substantially. "
      "(d) Forgetting long-term management: anticoagulation duration (at least 3 months; indefinite for unprovoked or recurrent, or in chronic thromboembolic pulmonary hypertension), evaluation for chronic thromboembolic pulmonary hypertension with V/Q at 3-6 months, thrombophilia workup in selected patients, and cancer screening in unprovoked PE over age 40."
    )
  },

  "meckel-diverticulum": {
    "diagnosis": "Symptomatic Meckel Diverticulum with Ectopic Gastric Mucosa and Acute GI Hemorrhage",
    "coachFinal": (
      "Diagnosis: bleeding Meckel diverticulum from ectopic gastric mucosa. "
      "Key learning: "
      "(1) Meckel diverticulum is the most common congenital GI anomaly, a true diverticulum (all three bowel wall layers) that is a remnant of the omphalomesenteric (vitelline) duct. "
      "The classic 'rule of 2s': 2% of the population, within 2 feet of the ileocecal valve, commonly 2 inches long, 2 types of ectopic mucosa (gastric and pancreatic), most symptomatic by age 2, and a 2:1 male predominance. "
      "Most are incidental and asymptomatic; lifetime risk of complication is about 4-6%. "
      "(2) Presentations vary by age and complication. "
      "Children — painless lower GI bleeding is the most common presentation; ectopic gastric mucosa produces acid that ulcerates adjacent ileal mucosa. "
      "Intussusception (diverticulum as lead point). "
      "Obstruction (from internal hernia around a vitelline remnant fibrous band, or intussusception). "
      "Meckel diverticulitis — presentation very similar to appendicitis, sometimes in a patient with normal appendix at laparotomy. "
      "Adults — more likely to present with obstruction (often from adhesions or band), diverticulitis, or chronic anemia from occult bleeding; overt painless bleeding is less common but occurs. "
      "(3) Diagnosis. "
      "Meckel scan (99mTc-pertechnetate) identifies ectopic gastric mucosa with high sensitivity in children, lower in adults; pretreatment with H2 blocker, glucagon, or pentagastrin can improve yield. "
      "CT scan identifies diverticulitis, obstruction, and some incidental Meckels but is insensitive for isolated bleeding Meckel. "
      "Angiography (tagged RBC scan followed by mesenteric angiography or CT angiography) for active bleeding over 0.5-1 mL/min. "
      "Capsule endoscopy and double-balloon enteroscopy are useful for obscure small bowel bleeding when the diagnosis is uncertain. "
      "Surgical exploration is sometimes both diagnostic and therapeutic. "
      "(4) Management is surgical resection. "
      "In pediatric symptomatic Meckel: laparoscopic or open resection of the diverticulum with a cuff of adjacent ileum if ulceration is present, or segmental small bowel resection if the ectopic mucosa or ulcer base extends. "
      "In adults, symptomatic Meckel is resected; incidental finding at laparotomy for another reason is more controversial — generally leave alone if patient is elderly, asymptomatic, and narrow-necked; resect if young, wide-based, palpable ectopic tissue, or prior symptoms. "
      "Preoperative stabilization includes blood products for significant bleeding, correction of coagulopathy, and IV fluids. "
      "(5) Classic pitfalls: (a) missing Meckel as the source of lower GI bleeding in a young child or young adult by stopping the workup at colonoscopy — the small bowel is the most commonly missed source. "
      "(b) Operating for presumed appendicitis, finding a normal appendix, and not exploring the terminal ileum for a Meckel diverticulitis. "
      "(c) Attributing iron deficiency anemia in a young adult to menstrual or dietary causes without considering small bowel bleeding. "
      "(d) Forgetting that the Meckel scan is a nuclear medicine test that detects ectopic gastric mucosa — diverticula without gastric mucosa (presenting with obstruction or diverticulitis rather than bleeding) will be missed."
    )
  },

  "medication-overdose": {
    "diagnosis": "Iatrogenic Hyperkalemia from ACE-I + Spironolactone + KCl Supplementation in CKD 3b",
    "coachFinal": (
      "Diagnosis: iatrogenic hyperkalemia (K 7.4) from an ACE-inhibitor plus spironolactone plus continued potassium chloride supplementation in CKD stage 3b — a medication safety error. "
      "Key learning: "
      "(1) This case is a textbook medication reconciliation failure. "
      "Three drugs with additive potassium-retaining effects were continued simultaneously in a patient with reduced kidney function. "
      "The key principle: whenever any single change is made — dose increase of an ACE-I/ARB/MRA, addition of a new potassium-retaining drug, worsening GFR, dehydration, or concurrent NSAIDs or trimethoprim — the potassium level must be rechecked and other potassium-raising agents should be reviewed. "
      "Classic culprits: ACE-I, ARBs, aldosterone antagonists (spironolactone, eplerenone), direct renin inhibitors, potassium-sparing diuretics (amiloride, triamterene), potassium supplements, trimethoprim/sulfamethoxazole (blocks distal sodium channels like amiloride), NSAIDs (impair renal prostaglandins and potassium excretion), heparin (inhibits aldosterone synthesis), tacrolimus, and beta-blockers (impair cellular uptake). "
      "(2) Emergency management follows the usual hyperkalemia algorithm: IV calcium gluconate 1-2 g for membrane stabilization if there are ECG changes; insulin 10 units IV with dextrose 25 g and albuterol 10-20 mg nebulized for intracellular shift; loop diuretic if volume allows; potassium binders (patiromer or sodium zirconium cyclosilicate preferred over sodium polystyrene sulfonate due to safety and speed) or hemodialysis for severe or refractory cases. "
      "Recheck potassium frequently; these interventions are temporizing, and elimination requires diuresis, binders, or dialysis. "
      "(3) Root cause analysis and system improvements. "
      "Was the potassium supplement continued by inertia after the spironolactone was added? "
      "Was the GFR trend missed? Was the patient using an OTC potassium-containing salt substitute or other hidden source? "
      "System-level safeguards: pharmacy-driven medication reconciliation at every transition of care, EHR alerts for concurrent potassium-retaining drugs, mandatory BMP check 1-2 weeks after ACE-I/ARB/MRA initiation or dose change, and CKD-specific dashboards. "
      "(4) Long-term plan for this patient. "
      "Reduce or discontinue the KCl supplement; consider whether spironolactone is essential for the indication or if another agent suffices; continue the ACE-I/ARB at reduced dose if proteinuric or heart-failure indication (with monitoring and dietary counseling) because discontinuation often worsens outcomes in patients who truly need renin-angiotensin blockade. "
      "Patiromer or sodium zirconium cyclosilicate chronically can enable continuation of RAAS inhibition in CKD, a strategy supported by recent trials. "
      "Dietary potassium counseling and medication list review at each visit are essential. "
      "(5) Classic pitfalls: (a) stopping the ACE-I permanently after a single hyperkalemia episode in a patient with heart failure or proteinuric CKD — loses cardiorenal protection. "
      "(b) Attributing the hyperkalemia to 'just CKD' without identifying the avoidable medication contributors. "
      "(c) Giving sodium polystyrene sulfonate (Kayexalate) to a postop or ileus patient — it is associated with rare but serious colonic necrosis, and newer binders are safer and faster. "
      "(d) Forgetting the patient education piece: low-potassium diet counseling, avoiding OTC salt substitutes, explaining sick-day rules (hold ACE-I/ARB/diuretic if vomiting or volume-depleted), and knowing signs of hyperkalemia (weakness, palpitations)."
    )
  },

}


def enrich(slug, e):
    path = os.path.join(EMR_DIR, f'{slug}.js')
    if not os.path.exists(path):
        print(f'  SKIP (missing) {slug}'); return False
    with open(path) as f:
        src = f.read()
    header_match = re.match(r'^(.*?)window\.EMR_DATA\s*=', src, re.DOTALL)
    header = header_match.group(1) if header_match else ''
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m:
        print(f'  PARSE ERROR {slug}'); return False
    try:
        data = json.loads(m.group(1))
    except Exception as ex:
        print(f'  JSON ERROR {slug}: {ex}'); return False

    if not isinstance(data.get('meta'), dict):
        data['meta'] = {}
    if e.get('diagnosis'):
        data['meta']['diagnosis'] = e['diagnosis']
    data['meta']['caseId'] = slug

    if not isinstance(data.get('guided'), dict):
        data['guided'] = {}
    if not isinstance(data['guided'].get('coachPrompts'), dict):
        data['guided']['coachPrompts'] = {}
    if 'coachFinal' in e:
        data['guided']['coachPrompts']['final'] = e['coachFinal']

    with open(path, 'w') as f:
        if header and not header.endswith('\n'):
            header = header + '\n'
        f.write(f'{header}window.EMR_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};\n')
    return True


if __name__ == '__main__':
    done = 0
    for s, e in ENRICHMENTS.items():
        if enrich(s, e):
            print(f'OK {s}')
            done += 1
    print(f'\nBatch 28A: {done}/{len(ENRICHMENTS)} enriched')
