// ============================================================================
// COACHDX NEUROLOGY CASE PACK
// SBAR scenarios for neurology communication training
// Created: January 29, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================
//
// CASES INCLUDED:
// 1. Status Epilepticus - Refractory
// 2. Subarachnoid Hemorrhage - Thunderclap Headache
// 3. Guillain-Barré Syndrome - Ascending Weakness
// 4. Myasthenic Crisis - Respiratory Failure
// 5. Spinal Cord Compression - Oncologic Emergency
//
// ============================================================================

const COACHDX_NEUROLOGY_CASES = {

// ============================================================================
// CASE 1: STATUS EPILEPTICUS
// ============================================================================

'status-epilepticus-refractory': {
    id: 'status-epilepticus-refractory',
    title: 'Status Epilepticus - Refractory',
    category: 'Neurology',
    isParallel: false,
    parallelCase: 'seizure-first',
    parallelDescription: 'First-time seizure, self-resolved',
    patient: { 
        name: 'Thomas Miller', 
        age: 52, 
        sex: 'Male', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Ongoing Seizure' 
    },
    description: 'A 52-year-old man with epilepsy (non-compliant with levetiracetam) brought in seizing. Has been convulsing for 20 minutes. Given lorazepam 4mg IV by EMS, then another 4mg in ED - still seizing. Now 35 minutes of continuous seizure activity. HR 128, BP 178/102, SpO2 92% on NRB, febrile 38.4°C.',
    openingStatement: 'Mr. Miller is in refractory status epilepticus - he\'s failed first-line benzos and is still seizing at 35 minutes. Every minute of seizure activity causes neuronal damage. How do you escalate treatment and communicate this emergency?',
    conceptDomains: {
        'Situation': ['seizure_duration', 'medications_given', 'current_status'],
        'Background': ['epilepsy_history', 'compliance', 'aed_levels'],
        'Assessment': ['se_classification', 'refractory_criteria', 'airway_status'],
        'Recommendation': ['second_line_aed', 'intubation', 'continuous_eeg']
    },
    quickActions: [
        'What defines status epilepticus?',
        'First-line treatment failed - what\'s next?',
        'When should I intubate?',
        'What if second-line fails too?'
    ],
    keyTeachingPoints: [
        'Status epilepticus: Seizure >5 minutes OR 2+ seizures without return to baseline',
        'Treatment timeline: 0-5 min (benzos), 5-20 min (second-line AED), >20 min (anesthetic)',
        'Second-line options: Fosphenytoin, valproate, levetiracetam - all have similar efficacy (ESETT trial)',
        'Refractory SE: Continues despite benzo + second-line AED → need anesthetic (propofol, midazolam, pentobarbital)',
        'Continuous EEG mandatory in refractory SE - nonconvulsive SE common after convulsions stop'
    ],
    sbarTemplate: {
        situation: 'I have a 52-year-old man in refractory status epilepticus - he\'s been seizing for 35 minutes and has failed two doses of lorazepam totaling 8mg. He\'s still convulsing.',
        background: 'He has epilepsy on levetiracetam but has been non-compliant. No history of status before. He\'s febrile at 38.4 which could be a trigger or consequence. No recent illness that family knows of.',
        assessment: 'This is refractory status epilepticus - he\'s failed adequate benzodiazepine dosing. He\'s at high risk for neuronal injury, aspiration, and rhabdomyolysis. Airway is tenuous with SpO2 92%.',
        recommendation: 'I\'m giving fosphenytoin 20mg PE/kg IV now as second-line. He likely needs intubation for airway protection. If this fails, we need anesthetic infusion with continuous EEG monitoring. Can neurology and anesthesia come urgently? He needs ICU.'
    },
    defined_responses: {
        'se definition': 'Status epilepticus = seizure lasting >5 minutes OR ≥2 seizures without return to baseline between. The old definition of 30 minutes is outdated - permanent neuronal damage starts at 30 minutes, so we intervene much earlier.',
        'second line': 'After benzos fail, give a second-line AED. ESETT trial showed fosphenytoin, valproate, and levetiracetam have equivalent efficacy (~45% response). Choose based on comorbidities: avoid phenytoin in cardiac disease, avoid valproate in liver disease/pregnancy, levetiracetam has fewest interactions.',
        'intubation': 'Indubate for: (1) Airway compromise/aspiration risk (he\'s protecting poorly), (2) Failure of second-line requiring anesthetic infusion, (3) Prolonged SE >30 min, (4) Hypoxia despite supplemental O2. His SpO2 of 92% with NRB suggests he needs intubation.',
        'refractory treatment': 'Refractory SE (failed benzo + second-line): Start anesthetic infusion with EEG monitoring. Options: Propofol (fast onset, fast offset), Midazolam (less hypotension), Pentobarbital (most effective but most complications). Target burst suppression on EEG.',
        'workup': 'While treating, workup for etiology: Check glucose immediately, electrolytes, AED levels, consider LP for meningitis/encephalitis if febrile (after seizure controlled), CT head, toxicology screen.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Status Epilepticus Module', link: '../mechanism/status-epilepticus-module.html', reason: 'Understand seizure pathophysiology' },
        { type: 'reasondx', title: 'Status Epilepticus Adventure', link: '../ReasonDx/adventure-cases/status-epilepticus-adventure.html', reason: 'Practice SE management' },
        { type: 'reasondx', title: 'Status Epilepticus Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=status-epilepticus-deep-dive', reason: 'AES guidelines and algorithms' }
    ],
    evidenceBase: {
        guidelines: [
            "AES Status Epilepticus Guidelines 2016",
            "NCS Status Epilepticus Guidelines 2012"
        ],
        keyEvidence: [
            "ESETT trial: Fosphenytoin, valproate, levetiracetam equally effective as second-line",
            "RAMPART trial: IM midazolam equivalent to IV lorazepam for prehospital SE",
            "Continuous EEG identifies nonconvulsive SE in 48% of patients after convulsions stop",
            "Earlier treatment = better outcomes"
        ],
        openAccessLinks: [
            "https://www.nejm.org/doi/full/10.1056/NEJMoa1905795"
        ]
    }
},

// ============================================================================
// CASE 2: SUBARACHNOID HEMORRHAGE
// ============================================================================

'sah-thunderclap': {
    id: 'sah-thunderclap',
    title: 'SAH - Thunderclap Headache',
    category: 'Neurology',
    isParallel: false,
    parallelCase: 'migraine-severe',
    parallelDescription: 'Severe migraine',
    patient: { 
        name: 'Catherine Davis', 
        age: 48, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Worst Headache of My Life' 
    },
    description: 'A 48-year-old woman presents with sudden-onset severe headache while exercising, reaching maximum intensity within seconds. "Worst headache of my life." Associated nausea, neck stiffness, photophobia. HR 92, BP 182/104, GCS 14 (confused). Smoker, family history of aneurysm. CT head shows hyperdensity in basal cisterns.',
    openingStatement: 'Mrs. Davis has a subarachnoid hemorrhage - her thunderclap headache and CT findings confirm it. This is a neurosurgical emergency with risk of rebleeding and vasospasm. How do you stabilize her and coordinate care?',
    conceptDomains: {
        'Situation': ['headache_characteristics', 'neuro_exam', 'ct_findings'],
        'Background': ['risk_factors', 'family_history', 'onset_circumstances'],
        'Assessment': ['hunt_hess_grade', 'fisher_scale', 'rebleed_risk'],
        'Recommendation': ['blood_pressure_management', 'neurosurgery_consult', 'icu_monitoring']
    },
    quickActions: [
        'What if the CT was negative?',
        'How do I grade SAH severity?',
        'What BP should I target?',
        'What are the major complications?'
    ],
    keyTeachingPoints: [
        'Thunderclap headache = maximal intensity within seconds → SAH until proven otherwise',
        'CT sensitivity: ~95% within 6 hours, drops to ~50% by day 5',
        'CT negative? → LP for xanthochromia (need 12+ hours for RBC lysis)',
        'Rebleeding is devastating - highest risk in first 24 hours, BP control critical',
        'Vasospasm peaks days 4-14 - leads to delayed cerebral ischemia'
    ],
    sbarTemplate: {
        situation: 'I have a 48-year-old woman with subarachnoid hemorrhage confirmed on CT. She presented with sudden-onset thunderclap headache during exercise, worst headache of her life.',
        background: 'She\'s a smoker with family history of aneurysm. Headache began abruptly while on treadmill. She has nuchal rigidity and is slightly confused but otherwise following commands.',
        assessment: 'CT shows blood in the basal cisterns - this is an aneurysmal SAH until proven otherwise. She\'s Hunt-Hess grade 2 (moderate headache, nuchal rigidity, mild confusion). High rebleed risk. BP is 182/104 which is dangerously high.',
        recommendation: 'She needs urgent neurosurgery consult for CTA to identify the aneurysm, BP control targeting SBP <160, nimodipine for vasospasm prophylaxis, and ICU admission. Can you help arrange emergent neuro-IR or neurosurgery evaluation?'
    },
    defined_responses: {
        'ct negative': 'CT sensitivity drops over time. If CT is negative but clinical suspicion high → LP at least 12 hours after headache onset. Look for xanthochromia (yellow CSF from bilirubin) or elevated RBCs that don\'t clear. Traumatic tap has clearing RBCs; SAH doesn\'t.',
        'grading': 'Hunt-Hess (clinical): Grade 1 (asymptomatic or mild headache), Grade 2 (moderate headache, nuchal rigidity), Grade 3 (drowsy, confused), Grade 4 (stupor, hemiparesis), Grade 5 (coma). Fisher (CT): Based on blood amount - higher grades = higher vasospasm risk. She\'s Hunt-Hess 2.',
        'bp target': 'Before aneurysm secured: SBP <160 (some say <140) to reduce rebleed risk while maintaining perfusion. Use IV labetalol, nicardipine, or clevidipine. AVOID nitroprusside (increases ICP). After securing: can liberalize for vasospasm.',
        'complications': 'Major SAH complications: (1) Rebleeding - highest risk first 24 hours, 30% mortality, (2) Vasospasm/DCI - days 4-14, monitor with TCDs, (3) Hydrocephalus - may need EVD, (4) Hyponatremia - SIADH or cerebral salt wasting, (5) Cardiac - neurogenic stunning, arrhythmias.',
        'nimodipine': 'Nimodipine 60mg PO/NG q4h for 21 days - ONLY calcium channel blocker proven to improve outcomes in SAH. Reduces DCI and improves neurologic outcomes. Start immediately. Monitor BP as it can cause hypotension.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'SAH Module', link: '../mechanism/sah-module.html', reason: 'Understand aneurysm pathophysiology' },
        { type: 'reasondx', title: 'SAH Adventure', link: '../ReasonDx/adventure-cases/sah-expanded.html', reason: 'Practice SAH workup' },
        { type: 'reasondx', title: 'Headache Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=headache-deep-dive', reason: 'Dangerous headache red flags' }
    ],
    evidenceBase: {
        guidelines: [
            "AHA/ASA SAH Guidelines 2012 (update pending)",
            "Neurocritical Care Society SAH Guidelines 2023"
        ],
        keyEvidence: [
            "CT sensitivity 98% in first 6 hours, ~90% at 24 hours",
            "Nimodipine reduces poor outcome (NNT ~14)",
            "Early aneurysm treatment (<24 hours) reduces rebleeding",
            "Triple-H therapy replaced by euvolemia with induced hypertension for vasospasm"
        ],
        openAccessLinks: [
            "https://www.ahajournals.org/doi/10.1161/STR.0b013e3182587839"
        ]
    }
},

// ============================================================================
// CASE 3: GUILLAIN-BARRÉ SYNDROME
// ============================================================================

'guillain-barre-ascending': {
    id: 'guillain-barre-ascending',
    title: 'Guillain-Barré - Ascending Weakness',
    category: 'Neurology',
    isParallel: false,
    parallelCase: 'myasthenia-crisis',
    parallelDescription: 'Myasthenic crisis',
    patient: { 
        name: 'Kevin Park', 
        age: 34, 
        sex: 'Male', 
        setting: 'Emergency → ICU', 
        acuity: 'High', 
        chiefComplaint: 'Progressive Leg Weakness' 
    },
    description: 'A 34-year-old man presents with 4 days of progressive weakness starting in legs, now involving arms. Had gastroenteritis 2 weeks ago. Can\'t walk, bilateral facial weakness, areflexia throughout. NIF -35 cmH2O, FVC 1.8L (predicted 4.5L). HR varies 50-110, BP labile.',
    openingStatement: 'Mr. Park has Guillain-Barré syndrome with respiratory compromise and dysautonomia. He\'s at high risk for respiratory failure. How do you monitor and manage this, and when do you intubate?',
    conceptDomains: {
        'Situation': ['weakness_progression', 'respiratory_parameters', 'autonomic_instability'],
        'Background': ['preceding_illness', 'symptom_timeline', 'other_symptoms'],
        'Assessment': ['gbs_criteria', 'respiratory_status', 'need_for_icu'],
        'Recommendation': ['ivig_vs_plex', 'respiratory_monitoring', 'intubation_threshold']
    },
    quickActions: [
        'What are the diagnostic criteria for GBS?',
        'When should I intubate?',
        'IVIG or plasmapheresis?',
        'What is dysautonomia?'
    ],
    keyTeachingPoints: [
        'Classic GBS: Ascending weakness, areflexia, often post-infectious (Campylobacter common)',
        'Respiratory failure in 30% - monitor NIF and FVC serially (q4-6h if worsening)',
        'Rule of 20-30-40: Intubate if NIF < -20 to -30, FVC <20 mL/kg or declining >30%, or FVC <1L',
        'IVIG and plasmapheresis equally effective - choose based on availability/patient factors',
        'Dysautonomia can be fatal - monitor for arrhythmias, BP swings, ileus'
    ],
    sbarTemplate: {
        situation: 'I have a 34-year-old man with Guillain-Barré syndrome and respiratory compromise. His weakness is progressing rapidly, FVC is 1.8L which is 40% predicted, and he has dysautonomia.',
        background: 'He had gastroenteritis 2 weeks ago, then developed tingling in his feet progressing to weakness ascending from legs to arms over 4 days. Now has bilateral facial weakness and can\'t walk.',
        assessment: 'He meets GBS criteria: progressive weakness, areflexia, post-infectious. His NIF is -35 and FVC is severely reduced. He has dysautonomia with HR varying 50-110 and labile BP. High risk for respiratory failure.',
        recommendation: 'He needs ICU admission for q4h respiratory monitoring. FVC trend will determine intubation timing. Starting IVIG 0.4g/kg/day for 5 days. Cardiac monitoring for dysautonomia. Can neurology confirm and ICU accept?'
    },
    defined_responses: {
        'gbs criteria': 'Required: Progressive weakness (usually ascending), Areflexia or hyporeflexia. Supportive: Progression over days-4 weeks, relative symmetry, mild sensory symptoms, cranial nerve involvement (facial weakness), autonomic dysfunction, CSF albuminocytologic dissociation (high protein, normal cells).',
        'intubation criteria': 'Rule of 20-30-40: (1) NIF weaker than -20 to -30 cmH2O, (2) FVC <20 mL/kg or <1L, (3) FVC declining >30% from baseline. Also intubate for: inability to handle secretions, severe bulbar weakness, rapid progression. His FVC of 1.8L (40% predicted) is concerning.',
        'ivig vs plex': 'Both equally effective. IVIG: 0.4g/kg/day × 5 days. Easier to administer, better for hemodynamically unstable patients. PLEX: 5 exchanges over 7-14 days. Slightly faster onset but requires central access. Do NOT combine them - no added benefit.',
        'dysautonomia': 'Autonomic instability affects 70% of severe GBS. Manifestations: HR variability (bradycardia, tachycardia), BP fluctuations (hypertension, hypotension), ileus, urinary retention, excessive sweating. Can cause sudden cardiac death. Need continuous monitoring. Treat symptomatically - avoid long-acting agents.',
        'prognosis': 'Most recover but takes months. 80% walk independently at 6 months. Poor prognostic factors: rapid progression, need for ventilation, age >40, preceding Campylobacter, axonal variant on EMG.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'GBS Module', link: '../mechanism/guillain-barre-module.html', reason: 'Understand demyelination and variants' },
        { type: 'reasondx', title: 'GBS Adventure', link: '../ReasonDx/adventure-cases/guillain-barre-adventure.html', reason: 'Practice GBS workup' },
        { type: 'coachDx', title: 'Myasthenic Crisis', link: 'mentor-chat.html?case=myasthenia-crisis', reason: 'Compare neuromuscular weakness' }
    ],
    evidenceBase: {
        guidelines: [
            "AAN GBS Practice Parameter 2003 (update in progress)",
            "Cochrane Reviews on GBS Treatment"
        ],
        keyEvidence: [
            "IVIG and PLEX equivalent efficacy",
            "Steroids NOT beneficial and potentially harmful",
            "Serial FVC more predictive than single measurement",
            "Early treatment (within 2 weeks of weakness onset) most effective"
        ],
        openAccessLinks: [
            "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD002063.pub6/full"
        ]
    }
},

// ============================================================================
// CASE 4: MYASTHENIC CRISIS
// ============================================================================

'myasthenia-crisis': {
    id: 'myasthenia-crisis',
    title: 'Myasthenic Crisis - Respiratory Failure',
    category: 'Neurology',
    isParallel: false,
    parallelCase: 'guillain-barre-ascending',
    parallelDescription: 'GBS - ascending weakness',
    patient: { 
        name: 'Dorothy Martinez', 
        age: 58, 
        sex: 'Female', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Difficulty Breathing and Swallowing' 
    },
    description: 'A 58-year-old woman with known myasthenia gravis (on pyridostigmine and prednisone) presents with worsening dyspnea and difficulty swallowing over 2 days. Recently had URI. Speaking in short sentences, weak cough, ptosis, using accessory muscles. NIF -22 cmH2O, FVC 0.9L. Started azithromycin 3 days ago for bronchitis.',
    openingStatement: 'Mrs. Martinez is in myasthenic crisis precipitated by infection and possibly by azithromycin. She\'s on the verge of respiratory failure. How do you manage this and what medications should you avoid?',
    conceptDomains: {
        'Situation': ['respiratory_status', 'bulbar_symptoms', 'precipitating_factors'],
        'Background': ['mg_history', 'current_medications', 'recent_infections'],
        'Assessment': ['crisis_severity', 'cholinergic_vs_myasthenic', 'intubation_need'],
        'Recommendation': ['ivig_or_plex', 'medication_review', 'avoid_certain_drugs']
    },
    quickActions: [
        'What precipitates myasthenic crisis?',
        'How do I tell crisis from cholinergic crisis?',
        'What medications make MG worse?',
        'IVIG or plasmapheresis?'
    ],
    keyTeachingPoints: [
        'Crisis precipitants: Infection (#1), surgery, medication changes, pregnancy, emotional stress',
        'Many drugs worsen MG: Aminoglycosides, fluoroquinolones, macrolides, beta-blockers, magnesium',
        'Cholinergic crisis (too much pyridostigmine): SLUDGE symptoms + weakness',
        'Myasthenic crisis: Weakness without SLUDGE, often with precipitant',
        'Treatment: IVIG or PLEX (equally effective) + treat precipitant + supportive care'
    ],
    sbarTemplate: {
        situation: 'I have a 58-year-old woman with myasthenia gravis in myasthenic crisis. She has severe respiratory compromise with FVC 0.9L and is having difficulty swallowing. She needs ICU and likely intubation soon.',
        background: 'She has known MG on pyridostigmine and prednisone. She developed a URI and was started on azithromycin 3 days ago - which can worsen MG. Her respiratory symptoms have progressed rapidly over 2 days.',
        assessment: 'This is myasthenic crisis precipitated by infection and possibly worsened by azithromycin. Her NIF is -22 and FVC is 0.9L - she\'s at imminent risk of respiratory failure. She has bulbar symptoms with dysphagia.',
        recommendation: 'She needs ICU admission and likely intubation given her respiratory parameters. I\'m stopping azithromycin and will start IVIG. Hold pyridostigmine around intubation. Can neurology help with crisis management and ICU accept her?'
    },
    defined_responses: {
        'precipitants': 'Infection is #1 precipitant (40% of crises). Others: Surgery, anesthesia, medication changes (starting/stopping steroids, new drugs), pregnancy/postpartum, emotional stress. Her URI and azithromycin are both contributing.',
        'cholinergic vs myasthenic': 'Cholinergic crisis (pyridostigmine overdose): SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI cramping, Emesis) + miosis + bradycardia + muscle fasciculations PLUS weakness. Myasthenic crisis: Weakness WITHOUT cholinergic symptoms. When in doubt, hold pyridostigmine and observe.',
        'dangerous drugs': 'Drugs that worsen MG: Aminoglycosides (gentamicin, tobramycin), Fluoroquinolones (cipro, levo), Macrolides (azithromycin!), Beta-blockers, Magnesium, Botulinum toxin, Quinine, Lithium, D-penicillamine. She was on azithromycin - a known offender.',
        'ivig vs plex': 'Both equally effective for myasthenic crisis. IVIG: 0.4g/kg/day × 5 days (or 1g/kg × 2 days). PLEX: 5 exchanges. PLEX works slightly faster but requires large-bore access. Choice depends on availability and patient factors.',
        'intubation pearls': 'Special considerations: Avoid succinylcholine (MG patients are resistant, unpredictable). Use rocuronium at reduced dose (MG patients are VERY sensitive). Have sugammadex available for reversal. Hold pyridostigmine to avoid excessive secretions.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Myasthenic Crisis Module', link: '../mechanism/myasthenic-crisis-module.html', reason: 'Understand NMJ pathophysiology' },
        { type: 'reasondx', title: 'Myasthenic Crisis Adventure', link: '../ReasonDx/adventure-cases/myasthenic-crisis-adventure.html', reason: 'Practice crisis management' },
        { type: 'coachDx', title: 'GBS Case', link: 'mentor-chat.html?case=guillain-barre-ascending', reason: 'Compare neuromuscular emergencies' }
    ],
    evidenceBase: {
        guidelines: [
            "AAN Myasthenia Gravis Practice Parameter 2021",
            "International Consensus on MG Management 2016"
        ],
        keyEvidence: [
            "IVIG and PLEX equivalent in randomized trials",
            "Infection precipitates 40% of crises",
            "Many common medications can precipitate crisis",
            "Early recognition and ICU admission improve outcomes"
        ],
        openAccessLinks: [
            "https://n.neurology.org/content/96/3/114"
        ]
    }
},

// ============================================================================
// CASE 5: SPINAL CORD COMPRESSION
// ============================================================================

'spinal-cord-compression': {
    id: 'spinal-cord-compression',
    title: 'Spinal Cord Compression - Oncologic',
    category: 'Neurology/Oncology',
    isParallel: false,
    parallelCase: 'cauda-equina',
    parallelDescription: 'Cauda equina syndrome',
    patient: { 
        name: 'Richard Chen', 
        age: 68, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Back Pain and Leg Weakness' 
    },
    description: 'A 68-year-old man with prostate cancer (known bone metastases) presents with 1 week of severe mid-back pain, now with 2 days of progressive leg weakness and difficulty urinating. Can\'t walk, bilateral leg weakness 3/5, sensory level at T8, urinary retention (post-void residual 600 mL). MRI shows T7 vertebral collapse with epidural mass causing cord compression.',
    openingStatement: 'Mr. Chen has malignant spinal cord compression - this is a neurologic and oncologic emergency. Every hour of delay worsens his chance of walking again. How do you act fast and coordinate with oncology and spine surgery?',
    conceptDomains: {
        'Situation': ['neuro_deficits', 'ambulatory_status', 'bladder_function'],
        'Background': ['cancer_history', 'symptom_progression', 'pain_characteristics'],
        'Assessment': ['level_of_compression', 'severity', 'prognosis_for_ambulation'],
        'Recommendation': ['steroids', 'radiation_vs_surgery', 'urgency']
    },
    quickActions: [
        'How quickly do I need to act?',
        'What dose of steroids?',
        'Surgery or radiation?',
        'What predicts if he\'ll walk again?'
    ],
    keyTeachingPoints: [
        'MSCC is time-sensitive: Pre-treatment ambulatory status is strongest predictor of outcome',
        'If walking before treatment → 75% remain ambulatory. If paraplegic → only 10% regain walking',
        'High-dose dexamethasone immediately: 10mg IV bolus, then 4-6mg q6h',
        'Surgery (decompression + stabilization) if: good prognosis, single site, spinal instability',
        'Radiation for: multiple levels, radiosensitive tumor, poor surgical candidate'
    ],
    sbarTemplate: {
        situation: 'I have a 68-year-old man with metastatic prostate cancer who has malignant spinal cord compression. He has T8 sensory level, bilateral leg weakness, and urinary retention. He can\'t walk.',
        background: 'He has known prostate cancer with bone metastases. He developed back pain 1 week ago, then progressive leg weakness over 2 days. MRI confirms T7 epidural compression with cord compression.',
        assessment: 'This is an emergency - his neurologic function is deteriorating. He\'s now non-ambulatory which significantly worsens his prognosis for recovery. He needs immediate high-dose steroids and urgent decompression.',
        recommendation: 'I\'m giving dexamethasone 10mg IV now. He needs emergent radiation oncology and spine surgery evaluation for definitive treatment. Can you help coordinate these consults urgently? Time is critical - his chance of walking again decreases every hour.'
    },
    defined_responses: {
        'urgency': 'This is a "spine emergency." Pre-treatment ambulatory status is the STRONGEST predictor of post-treatment function. Patients ambulatory at presentation: 75-90% remain ambulatory. Non-ambulatory <24 hours: ~50% may walk. Paraplegic >48 hours: <10% regain ambulation. He\'s non-ambulatory - every hour counts.',
        'steroid dose': 'High-dose dexamethasone: 10mg IV bolus immediately, then 4-6mg IV q6h (some protocols use 16-24mg bolus). Reduces vasogenic edema around tumor. Start before imaging if high suspicion. Continue through treatment. Taper over 2 weeks after definitive therapy.',
        'surgery vs radiation': 'Surgery (decompression + stabilization) preferred if: (1) Single site of compression, (2) Life expectancy >3 months, (3) Acceptable surgical risk, (4) Spinal instability, (5) Tumor not highly radiosensitive. Radiation for: multiple levels, radiosensitive tumors (lymphoma, myeloma, SCLC), poor surgical candidate. Patchell trial: Surgery + RT > RT alone.',
        'prognosis factors': 'Best chance of walking again: (1) Ambulatory at presentation, (2) Slow symptom progression (>14 days), (3) Favorable tumor histology, (4) Single site, (5) Less severe weakness. His 2-day progression and inability to walk are poor prognostic signs.',
        'cauda equina': 'Below L1-L2, spinal cord becomes cauda equina (nerve roots, not cord). Cauda equina syndrome: Saddle anesthesia, urinary retention, decreased rectal tone, bilateral leg weakness/pain. Similar urgency - also a surgical emergency.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Spinal Cord Module', link: '../mechanism/spinal-cord-module.html', reason: 'Understand cord anatomy and compression' },
        { type: 'reasondx', title: 'Spinal Cord Compression Adventure', link: '../ReasonDx/adventure-cases/spinal-cord-compression-expanded.html', reason: 'Practice SCC workup' },
        { type: 'reasondx', title: 'Oncologic Emergencies', link: '../ReasonDx/deep-dive-player-integrated.html?module=oncologic-emergencies-deep-dive', reason: 'Broader onc emergency context' }
    ],
    evidenceBase: {
        guidelines: [
            "NICE Metastatic Spinal Cord Compression Guidelines 2008",
            "ASCO Bone Metastasis Guidelines"
        ],
        keyEvidence: [
            "Patchell trial: Surgery + RT superior to RT alone for ambulatory outcomes",
            "Ambulatory status at presentation is strongest predictor of outcome",
            "High-dose steroids reduce edema and pain",
            "Time to treatment impacts functional outcomes"
        ],
        openAccessLinks: [
            "https://www.nice.org.uk/guidance/cg75"
        ]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_NEUROLOGY_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_NEUROLOGY_CASES);
}
