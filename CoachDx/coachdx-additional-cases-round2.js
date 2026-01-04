// ADDITIONAL COACHDX CASES - Gap Fill Round 2
// Add these to the CASES object in mentor-chat.html

// ==================== AKI PARALLEL PAIR ====================
'aki-prerenal': {
    id: 'aki-prerenal',
    title: 'AKI - Pre-Renal',
    category: 'Renal',
    isParallel: false,
    parallelCase: 'aki-intrinsic',
    parallelDescription: 'Intrinsic AKI (ATN)',
    patient: { name: 'Harold Mitchell', age: 72, sex: 'Male', setting: 'Emergency', acuity: 'High', chiefComplaint: 'Weakness and Decreased Urine' },
    description: 'A 72-year-old with HTN, CHF on lisinopril and furosemide presents after 3 days of diarrheal illness. Orthostatic, dry mucous membranes. Cr rose from baseline 1.2 to 3.8. BUN 68. UA bland. FENa 0.4%.',
    openingStatement: 'Mr. Mitchell has volume depletion from diarrhea on top of medications that affect renal hemodynamics. This looks like pre-renal AKI. How do we confirm and manage this?',
    keyTeachingPoints: [
        'Pre-renal AKI: FENa <1%, BUN:Cr >20:1, UOsm >500',
        'ACEi + NSAIDs + Diuretics = "Triple whammy" for AKI',
        'Hold ACEi/ARBs and diuretics in volume depletion',
        'Pre-renal should respond to fluids within 24-72 hours'
    ],
    defined_responses: {
        'fena': 'FENa of 0.4% is very low - the kidney is avidly holding onto sodium. Tubular function is intact. Formula: FENa = (UNa × PCr) / (PNa × UCr) × 100. In ATN, FENa >2% because damaged tubules can\'t reabsorb sodium.',
        'bun cr ratio': 'BUN:Cr ratio is 68:3.8 = about 18:1. Elevated (>20:1 classic for pre-renal). In low-flow states, urea is passively reabsorbed following water. Creatinine is not reabsorbed, so BUN rises disproportionately.',
        'ace inhibitor': 'Hold the lisinopril! He\'s volume depleted, relying on angiotensin II to maintain GFR via efferent constriction. Block that → GFR drops further.',
        'fluids': 'Start with isotonic saline - 1-2L bolus, then reassess. In CHF patients, we walk a fine line - too much fluid and we tip him into pulmonary edema.'
    }
},

'aki-intrinsic': {
    id: 'aki-intrinsic',
    title: 'AKI - Intrinsic (ATN)',
    category: 'Renal',
    isParallel: true,
    parallelCase: 'aki-prerenal',
    parallelDescription: 'Pre-Renal AKI',
    patient: { name: 'Patricia Gomez', age: 58, sex: 'Female', setting: 'Inpatient', acuity: 'High', chiefComplaint: 'Post-Operative Rising Creatinine' },
    description: 'A 58-year-old had AAA repair with prolonged hypotension intraoperatively. POD 2 Cr rose from 1.0 to 4.2 despite adequate fluids. UA shows muddy brown granular casts. FENa 3.2%. Oliguric.',
    openingStatement: 'Mrs. Gomez had ischemic injury from intraoperative hypotension. Despite fluids, her creatinine keeps rising. This is ATN. How does our approach differ from pre-renal?',
    keyTeachingPoints: [
        'ATN: Muddy brown casts, FENa >2%, BUN:Cr ~10-15:1',
        'Tubular damage = can\'t reabsorb sodium = high FENa',
        'Phases: Initiation → Maintenance (1-2 weeks) → Recovery',
        'Diuretics don\'t improve outcomes but help volume management'
    ],
    defined_responses: {
        'muddy brown casts': 'Pathognomonic for ATN! Sloughed tubular epithelial cells forming casts. RBC casts would suggest glomerulonephritis instead.',
        'fena high': 'FENa is 3.2% because damaged tubules CAN\'T reabsorb sodium properly. In pre-renal, tubules work fine and hold onto sodium (FENa <1%).',
        'dialysis': 'Dialysis is for complications, not the creatinine number. Remember AEIOU: Acidosis, Electrolytes (hyperkalemia), Ingestions, Overload, Uremia.',
        'prognosis': 'Most ischemic ATN recovers in 1-3 weeks. Bad prognostic factors: Prolonged oliguria, need for dialysis, pre-existing CKD.'
    }
},

// ==================== GI BLEEDING PARALLEL PAIR ====================
'upper-gi-bleed': {
    id: 'upper-gi-bleed',
    title: 'Upper GI Bleeding - PUD',
    category: 'GI',
    isParallel: false,
    parallelCase: 'lower-gi-bleed',
    parallelDescription: 'Lower GI Bleeding',
    patient: { name: 'Frank Morrison', age: 68, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Vomiting Blood' },
    description: 'A 68-year-old on aspirin and ibuprofen presents with coffee-ground emesis and melena × 2 days. BP 88/52, HR 118. Hgb 7.2. BUN 42, Cr 1.1.',
    openingStatement: 'Mr. Morrison has hemodynamic instability from upper GI bleeding, likely NSAID-induced ulcer. Let\'s work through stabilization and management.',
    keyTeachingPoints: [
        'Melena = upper GI source (blood exposed to acid)',
        'Resuscitate before endoscopy - 2 large bore IVs, type and cross',
        'Restrictive transfusion (target Hgb 7-9) improves outcomes',
        'EGD within 24 hours; urgent if high-risk features'
    ],
    defined_responses: {
        'glasgow blatchford': 'GBS around 15 - very high risk! Score of 0-1 is low risk and can be outpatient. His score mandates admission and urgent EGD.',
        'transfuse': 'Restrictive strategy! Target Hgb 7-9. Studies show liberal transfusion INCREASES mortality in upper GIB.',
        'scope': 'EGD within 24 hours for admitted UGIB. Earlier (within 12 hours) if hemodynamically unstable.',
        'ppi dose': 'High-risk lesions: 80mg bolus then 8mg/hour infusion for 72 hours. Keeps pH >6 to stabilize clots.'
    }
},

'lower-gi-bleed': {
    id: 'lower-gi-bleed',
    title: 'Lower GI Bleeding - Diverticular',
    category: 'GI',
    isParallel: true,
    parallelCase: 'upper-gi-bleed',
    parallelDescription: 'Upper GI Bleeding',
    patient: { name: 'Dorothy Chen', age: 75, sex: 'Female', setting: 'Emergency', acuity: 'Medium', chiefComplaint: 'Bloody Stool' },
    description: 'A 75-year-old with known diverticulosis presents with painless maroon stools × 6 hours. BP 108/68, HR 96. Hgb 10.2. No abdominal tenderness.',
    openingStatement: 'Mrs. Chen likely has diverticular bleeding - most common cause of significant LGIB in elderly. How does our approach differ from upper GI bleeding?',
    keyTeachingPoints: [
        'Diverticular bleeding is typically painless and self-limited (80%)',
        'Maroon stool can be upper (brisk) or lower - consider upper GI evaluation',
        'Colonoscopy after rapid bowel prep, within 24 hours',
        'If unstable: CTA to localize, then angiography ± embolization'
    ],
    defined_responses: {
        'know its lower': 'Painless maroon stools with known diverticula suggests lower, BUT brisk UGIB can present with hematochezia too. No melena or hematemesis is reassuring.',
        'when to scope': 'Colonoscopy within 24 hours after rapid bowel prep (4-6L PEG). Prep improves visualization dramatically.',
        'doesnt stop': 'If active bleeding: Clips, epinephrine, thermal therapy. If too brisk: CTA to localize, then IR angiography with embolization.',
        'recurrence': '25-40% of diverticular bleeds recur. After second bleed, consider elective segmental colectomy.'
    }
},

// ==================== CHEST PAIN PARALLEL PAIR ====================
'chest-pain-acs': {
    id: 'chest-pain-acs',
    title: 'Chest Pain - NSTEMI',
    category: 'Cardiovascular',
    isParallel: false,
    parallelCase: 'chest-pain-noncardiac',
    parallelDescription: 'Non-Cardiac Chest Pain',
    patient: { name: 'Robert Williams', age: 62, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Chest Pain and Shortness of Breath' },
    description: 'A 62-year-old with HTN, DM, smoking presents with 2 hours of substernal pressure radiating to left arm. ECG shows ST depressions V3-V6. Troponin 2.4 ng/mL.',
    openingStatement: 'Mr. Williams has an NSTEMI with high-risk features. Walk me through immediate management and risk stratification.',
    keyTeachingPoints: [
        'NSTEMI = Troponin positive without ST elevation',
        'High-risk features: ST changes, elevated troponin, hemodynamic instability',
        'Early invasive strategy (<24h) for high-risk NSTEMI',
        'DAPT: Aspirin + P2Y12 inhibitor (ticagrelor or clopidogrel)'
    ],
    defined_responses: {
        'immediate': 'MONA-B plus more: Morphine (if needed), Oxygen (if hypoxic), Nitroglycerin, Aspirin 325mg, Beta-blocker. Plus: Load P2Y12 inhibitor, anticoagulation.',
        'timi risk': 'TIMI score ~3 = Intermediate risk. With ST changes and elevated troponin, he warrants early invasive strategy (cath within 24 hours).',
        'dapt': 'Aspirin 325mg immediately. P2Y12 inhibitor: Ticagrelor 180mg load preferred (faster onset, mortality benefit).',
        'destabilizes': 'If ongoing chest pain, ST elevation, hypotension → Immediate cath. New ST elevation = STEMI, goes to cath lab NOW.'
    }
},

'chest-pain-noncardiac': {
    id: 'chest-pain-noncardiac',
    title: 'Chest Pain - Musculoskeletal',
    category: 'Cardiovascular',
    isParallel: true,
    parallelCase: 'chest-pain-acs',
    parallelDescription: 'ACS (NSTEMI)',
    patient: { name: 'Jennifer Park', age: 34, sex: 'Female', setting: 'Urgent Care', acuity: 'Low', chiefComplaint: 'Left Chest Pain' },
    description: 'A 34-year-old healthy woman presents with 3 days of left chest pain - sharp, worse with movement, reproducible with palpation. Recently started new exercise program. Normal ECG, troponin negative.',
    openingStatement: 'Ms. Park has features suggesting musculoskeletal chest pain, but we need to be systematic. How do we safely rule out dangerous causes?',
    keyTeachingPoints: [
        'Reproducible chest wall tenderness suggests MSK cause',
        'Low pre-test probability + negative ECG/troponin = very low risk',
        'HEART score helps risk stratify chest pain',
        'Always consider PE, dissection, pneumothorax'
    ],
    defined_responses: {
        'safe discharge': 'Likely yes. Young, no risk factors, reproducible pain, negative ECG and troponin. HEART score very low.',
        'rules out acs': 'Combination of low pre-test probability, atypical features, normal ECG, negative troponin = very low probability.',
        'when worry': 'Red flags: Exertional component, radiation, diaphoresis, family history early CAD, troponin elevation. Also consider PE and dissection.',
        'pe': 'Always consider! She\'s low risk - no immobility, no hormonal contraceptives. Wells score low. If concern, d-dimer in low-probability patient rules out PE.'
    }
},

// ==================== SEIZURE CASE ====================
'seizure-firsttime': {
    id: 'seizure-firsttime',
    title: 'First-Time Seizure',
    category: 'Neurology',
    isParallel: false,
    parallelCase: 'syncope',
    parallelDescription: 'Syncope',
    patient: { name: 'Nicole Adams', age: 28, sex: 'Female', setting: 'Emergency', acuity: 'High', chiefComplaint: 'Found Down with Shaking' },
    description: 'A 28-year-old graduate student found shaking by coworkers, now postictal. Witnesses report 2 minutes of generalized tonic-clonic activity. Lateral tongue bite. Sleep-deprived finishing thesis.',
    openingStatement: 'Ms. Adams had her first witnessed seizure. The lateral tongue bite strongly suggests true seizure. How do we work up a first unprovoked seizure?',
    keyTeachingPoints: [
        'Lateral tongue bite is highly specific for generalized seizure',
        'First seizure workup: Glucose, lytes, toxicology, MRI brain, EEG',
        'Not all first seizures need AEDs - depends on recurrence risk',
        'Driving restrictions vary by state (typically 3-12 months)'
    ],
    defined_responses: {
        'seizure vs syncope': 'Key features: Lateral tongue biting (very specific!), prolonged confusion (postictal), witnessed tonic-clonic >30 seconds. Syncope has brief LOC, rapid recovery.',
        'workup': 'First unprovoked seizure: Basic labs (glucose, Na, Ca, Mg), toxicology, MRI brain with epilepsy protocol, EEG. LP only if concern for CNS infection.',
        'aeds': 'Not necessarily! After single unprovoked seizure, recurrence risk ~35%. Treat if: Abnormal EEG, structural lesion, or patient preference.',
        'driving': 'Cannot drive until seizure-free for state-mandated period (usually 3-12 months). Counsel about heights, swimming alone, machinery.'
    }
},

// ==================== ANAPHYLAXIS CASE ====================
'anaphylaxis': {
    id: 'anaphylaxis',
    title: 'Anaphylaxis',
    category: 'Allergy/Immunology',
    isParallel: false,
    parallelCase: null,
    patient: { name: 'Marcus Johnson', age: 35, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Difficulty Breathing and Rash' },
    description: 'A 35-year-old ate shrimp for the first time 20 minutes ago. Developed diffuse urticaria, lip swelling, wheezing, BP 82/48. On metoprolol for hypertension.',
    openingStatement: 'Mr. Johnson has anaphylaxis - multisystem involvement with hypotension. He\'s also on a beta-blocker which complicates treatment. What\'s your immediate approach?',
    keyTeachingPoints: [
        'Anaphylaxis = acute multisystem reaction, often with hypotension/airway compromise',
        'EPINEPHRINE IM is first-line - don\'t delay for antihistamines',
        'Beta-blocked patients may need glucagon (bypasses beta receptors)',
        'Observe 4-6+ hours for biphasic reaction',
        'Prescribe EpiPen and refer to allergist'
    ],
    defined_responses: {
        'first step': 'EPINEPHRINE IM 0.3-0.5mg (1:1000) anterolateral thigh. Don\'t delay! This is the only drug that treats all components of anaphylaxis. Can repeat every 5-15 minutes.',
        'beta blocker': 'Excellent catch! Metoprolol blocks the beta receptors epinephrine needs. If refractory to epinephrine, give GLUCAGON 1-5mg IV. It works via different pathway to increase cAMP.',
        'fluids': 'Yes, aggressive fluids! Anaphylaxis causes massive vasodilation and third-spacing. Give 1-2L NS rapidly. He may need 5-7L total.',
        'observation': 'Observe at least 4-6 hours. Biphasic reactions occur in 5-20% of cases, typically within 8-12 hours. Severe initial reaction = longer observation.',
        'discharge': 'Prescribe EpiPen (teach proper use), oral antihistamines and prednisone taper for 3-5 days. MUST refer to allergist for testing. Strict avoidance of shellfish.'
    }
},

// ==================== HEADACHE PARALLEL PAIR ====================
'headache-migraine': {
    id: 'headache-migraine',
    title: 'Headache - Migraine',
    category: 'Neurology',
    isParallel: false,
    parallelCase: 'headache-sah',
    parallelDescription: 'Subarachnoid Hemorrhage',
    patient: { name: 'Amy Rodriguez', age: 32, sex: 'Female', setting: 'Urgent Care', acuity: 'Low', chiefComplaint: 'Severe Headache' },
    description: 'A 32-year-old with history of similar headaches presents with unilateral throbbing headache with nausea, photophobia, and visual "zigzag lines" that preceded the pain. Gradual onset over 1 hour.',
    openingStatement: 'Ms. Rodriguez has classic migraine with aura. But with any severe headache, we need to think about dangerous causes. What makes this low-risk?',
    keyTeachingPoints: [
        'Migraine: Unilateral, throbbing, with nausea/photophobia/phonophobia',
        'Aura precedes headache by 5-60 minutes (visual, sensory, or speech)',
        'Red flags: Thunderclap, worst ever, new after age 50, neuro deficits, fever',
        'Similar to prior headaches is reassuring',
        'Acute treatment: NSAIDs, triptans; Preventive if frequent'
    ],
    defined_responses: {
        'red flags': 'Key reassuring features: Similar to prior headaches, gradual onset (not thunderclap), preceded by typical visual aura, no fever, no neuro deficits, not "worst headache of life." What would make you image?',
        'need imaging': 'Not with classic presentation similar to prior migraines. Imaging if: First/worst headache, thunderclap, new after 50, focal neuro findings, fever, papilledema.',
        'treatment': 'Acute: Triptans (sumatriptan) are first-line if no contraindications. NSAIDs also effective. Add antiemetic (metoclopramide) for nausea - it also helps triptan absorption.',
        'prevention': 'Consider if ≥4 migraines/month or significant disability. Options: Beta-blockers, topiramate, valproate, amitriptyline, CGRP inhibitors.'
    }
},

'headache-sah': {
    id: 'headache-sah',
    title: 'Headache - SAH',
    category: 'Neurology',
    isParallel: true,
    parallelCase: 'headache-migraine',
    parallelDescription: 'Migraine',
    patient: { name: 'David Kim', age: 48, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Worst Headache of My Life' },
    description: 'A 48-year-old presents with sudden onset "thunderclap" headache that peaked within seconds. States it\'s the worst headache of his life. Vomited twice. Mild neck stiffness. BP 182/98.',
    openingStatement: 'Mr. Kim has thunderclap headache - worst headache, sudden onset. This is SAH until proven otherwise. How do we work this up?',
    keyTeachingPoints: [
        'Thunderclap headache = SAH until proven otherwise',
        'CT head within 6 hours is >95% sensitive; sensitivity drops after',
        'If CT negative, LP is mandatory (xanthochromia)',
        'If SAH confirmed, CTA to find aneurysm',
        'Rebleeding risk is highest in first 24 hours'
    ],
    defined_responses: {
        'workup': 'Stat non-contrast CT head. If within 6 hours, sensitivity >95-98%. If negative AND high clinical suspicion, LP is MANDATORY - look for xanthochromia (yellow CSF from RBC breakdown). Never stop at negative CT!',
        'ct negative': 'Does NOT rule out SAH if clinical suspicion is high! LP is required. Check opening pressure, RBC count in tubes 1 and 4 (SAH: persistent RBCs), and xanthochromia (takes 6-12 hours to develop).',
        'sah confirmed': 'Neurosurgery STAT. CTA to identify aneurysm location. Admit to ICU. Control BP (target SBP <160), seizure prophylaxis (controversial), nimodipine to prevent vasospasm.',
        'vasospasm': 'Delayed cerebral ischemia from vasospasm peaks days 4-14 post-SAH. Nimodipine reduces poor outcomes. Monitor with transcranial Doppler or clinical exam. Treat with induced hypertension, angioplasty.'
    }
}
