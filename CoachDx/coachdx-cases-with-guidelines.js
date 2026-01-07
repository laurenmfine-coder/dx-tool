// ============================================================================
// COACHDX COMPLETE CASE LIBRARY - MERGED
// All cases from: original mentor-chat.html + round 2 + DKA/DVT/Hyponatremia + round 3
// Last updated: January 7, 2026
// WITH EVIDENCE-BASED GUIDELINES INTEGRATED
// ============================================================================
// 
// HOW TO USE:
// 1. Include this file in mentor-chat.html before the main script:
//    <script src="coachdx-cases-merged.js"></script>
// 2. Reference COACHDX_CASES instead of inline CASES object
// 
// TOTAL CASES: 50+ cases organized by category
// ============================================================================

const COACHDX_CASES = {

// ============================================================================
// CARDIOVASCULAR (10 cases)
// ============================================================================

'chest-pain-acs': {
    id: 'chest-pain-acs', title: 'Chest Pain - ACS Evaluation', category: 'Cardiovascular',
    isParallel: false, parallelCase: 'chest-pain-acs-b',
    parallelDescription: 'Atypical ACS in diabetic patient',
    patient: { name: 'Maria Santos', age: 52, sex: 'Female', setting: 'Emergency', acuity: 'High', chiefComplaint: 'Chest Pain' },
    description: 'A 52-year-old woman presents with chest pain that started 2 hours ago. Substernal pressure 7/10, diaphoresis, nausea. History of HTN and T2DM.',
    openingStatement: 'Mrs. Santos is a 52-year-old woman with chest pain, triaged as high acuity. What would you like to know first?',
    conceptDomains: {
        'History': ['onset', 'character', 'radiation', 'associated_symptoms', 'risk_factors'],
        'Physical Exam': ['vitals', 'cardiac_exam', 'lung_exam', 'peripheral_pulses'],
        'Pathophysiology': ['coronary_anatomy', 'acs_spectrum', 'biomarkers'],
        'Workup': ['ecg', 'troponin', 'cxr'],
        'Management': ['antiplatelet', 'anticoagulation', 'reperfusion']
    },
    quickActions: ['Tell me about the chest pain', 'What are her vital signs?', 'Any cardiac history?', 'What does the ECG show?'],
    relatedContent: [
        { type: 'mechanism', title: 'ACS Pathophysiology', link: 'mechanismdx-acs-module.html', reason: 'Understand ischemic cascade' },
        { type: 'reasondx', title: 'Chest Pain Cases', link: 'reasondx-index.html', reason: 'Practice more workups' }
    ]
,
    evidenceBase: {
        guidelines: [
                  "AHA/ACC Chest Pain Guideline 2021 (Circulation 2021;144:e364-e454)",
                  "ESC Guidelines for NSTE-ACS 2020"
        ],
        keyEvidence: [
                  "High-sensitivity troponin enables rapid rule-out protocols (0/1h or 0/2h)",
                  "HEART score validated for risk stratification",
                  "Dual antiplatelet therapy reduces recurrent events"
        ],
        openAccessLinks: ["https://www.ahajournals.org/doi/10.1161/CIR.0000000000001029"]
    }},

'chest-pain-acs-b': {
    id: 'chest-pain-acs-b', title: 'Chest Pain - Atypical ACS', category: 'Cardiovascular',
    isParallel: true, parallelCase: 'chest-pain-acs',
    parallelDescription: 'Classic ACS presentation',
    patient: { name: 'James Liu', age: 68, sex: 'Male', setting: 'Emergency', acuity: 'Medium', chiefComplaint: 'Fatigue and Nausea' },
    description: 'A 68-year-old man with diabetes and CKD presents with fatigue, nausea, mild dyspnea. Denies chest pain. Diaphoretic. Prior cath showed non-obstructive CAD.',
    openingStatement: 'Mr. Liu is diabetic, no chest pain, but diaphoretic and his wife says he doesn\'t look right. BP 100/70, HR 95. What\'s your approach?',
    conceptDomains: {
        'History': ['atypical_symptoms', 'diabetic_equivalents', 'autonomic_neuropathy'],
        'Physical Exam': ['vitals', 'diaphoresis', 'heart_sounds'],
        'Pathophysiology': ['silent_ischemia', 'diabetic_heart'],
        'Workup': ['ecg', 'troponin', 'bnp'],
        'Management': ['acs_protocol', 'glucose_management']
    },
    quickActions: ['Why does his wife think something is wrong?', 'Check glucose', 'Get an ECG', 'Cardiac risk factors?'],
    relatedContent: [
        { type: 'parallel', title: 'Typical ACS', link: 'mentor-chat.html?case=chest-pain-acs', reason: 'Compare presentations' },
        { type: 'mechanism', title: 'Silent MI in Diabetics', link: 'mechanismdx-acs-module.html', reason: 'Why atypical presentations' }
    ]
,
    evidenceBase: {
        guidelines: [
                  "AHA/ACC Chest Pain Guideline 2021",
                  "ACC/AHA STEMI Guideline 2013"
        ],
        keyEvidence: [
                  "Diabetic patients often have atypical presentations",
                  "Silent ischemia more common with autonomic neuropathy",
                  "Same treatment algorithms apply regardless of symptom typicality"
        ]
    }},

'chest-pain-noncardiac': {
    id: 'chest-pain-noncardiac', title: 'Chest Pain - Musculoskeletal', category: 'Cardiovascular',
    isParallel: true, parallelCase: 'chest-pain-acs',
    parallelDescription: 'NSTEMI',
    patient: { name: 'Jennifer Lee', age: 34, sex: 'Female', setting: 'Urgent Care', acuity: 'Low', chiefComplaint: 'Chest Pain' },
    description: 'A 34-year-old healthy woman with 2 days of left-sided chest pain after moving furniture. Sharp, worse with movement and deep breath, reproducible with palpation. No risk factors. ECG normal, troponin negative.',
    openingStatement: 'Ms. Lee has chest pain but very different features from ACS. What makes you confident this is non-cardiac, and when would you still worry?',
    conceptDomains: {
        'History': ['mechanism', 'character', 'reproducibility'],
        'Physical Exam': ['chest_wall_tenderness', 'vitals'],
        'Pathophysiology': ['msk_pain', 'costochondritis'],
        'Workup': ['ecg', 'troponin', 'when_to_stop'],
        'Management': ['nsaids', 'reassurance']
    },
    quickActions: ['Is pain reproducible?', 'Any risk factors?', 'Calculate HEART score', 'Consider PE?'],
    keyTeachingPoints: [
        'Reproducible chest wall tenderness suggests MSK cause',
        'Young, no risk factors, atypical features = low pre-test probability',
        'Still consider PE in young women (OCPs, immobility)',
        'HEART score helps risk stratify'
    ],
    defined_responses: {
        'safe discharge': 'Likely yes. Young, no risk factors, reproducible pain, negative ECG and troponin. HEART score very low.',
        'pe': 'Always consider! She\'s low risk - no immobility, no hormonal contraceptives. Wells score low.'
    }
},

'atrial-fibrillation': {
    id: 'atrial-fibrillation', title: 'New Onset AFib', category: 'Cardiovascular',
    isParallel: false, parallelCase: 'atrial-fibrillation-b',
    parallelDescription: 'Unstable AFib with RVR',
    patient: { name: 'Barbara Chen', age: 67, sex: 'Female', setting: 'Emergency', acuity: 'Medium', chiefComplaint: 'Palpitations' },
    description: 'A 67-year-old woman with 2 days of palpitations and mild dyspnea. ECG shows AFib with RVR at 134. HTN and diabetes. No prior AFib.',
    openingStatement: 'Mrs. Chen is in new-onset AFib with RVR at 134. We need to think rate control, rhythm control, and anticoagulation. How do you approach this?',
    conceptDomains: {
        'History': ['symptom_onset', 'triggers', 'stroke_risk'],
        'Physical Exam': ['heart_rate', 'signs_of_hf'],
        'Pathophysiology': ['atrial_remodeling', 'stroke_risk'],
        'Workup': ['ecg', 'tsh', 'echo'],
        'Management': ['rate_control', 'rhythm_control', 'chadsvasc', 'anticoagulation']
    },
    quickActions: ['Calculate CHA2DS2-VASc', 'What rate control agent?', 'Check thyroid', 'Anticoagulation?'],
    relatedContent: [
        { type: 'mechanism', title: 'Syncope & Arrhythmias', link: 'mechanismdx-syncope-arrhythmia-module.html', reason: 'AFib pathophysiology' }
    ]
,
    evidenceBase: {
        guidelines: [
                  "AHA/ACC/ACCP/HRS AFib Guideline 2023",
                  "ESC Guidelines for AF 2020"
        ],
        keyEvidence: [
                  "CHA2DS2-VASc for stroke risk stratification",
                  "Rate control target <110 bpm at rest for most patients",
                  "DOACs preferred over warfarin for stroke prevention"
        ],
        openAccessLinks: ["https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193"]
    }},

'atrial-fibrillation-b': {
    id: 'atrial-fibrillation-b', title: 'Unstable AFib with RVR', category: 'Cardiovascular',
    isParallel: true, parallelCase: 'atrial-fibrillation',
    parallelDescription: 'Stable new-onset AFib',
    patient: { name: 'Richard Adams', age: 72, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Chest Pain and Dizziness' },
    description: 'A 72-year-old with chest pain, dizziness, near-syncope. HR 178 irregular, BP 82/54. ECG: AFib with RVR, ST depressions. Known CHF, EF 35%.',
    openingStatement: 'Mr. Adams is in AFib with RVR and crashing - hypotensive with chest pain. This is unstable AFib. What do you do right now?',
    conceptDomains: {
        'History': ['hemodynamic_symptoms', 'cardiac_history'],
        'Physical Exam': ['vitals', 'perfusion'],
        'Pathophysiology': ['tachycardia_induced_hypotension'],
        'Management': ['cardioversion_indications', 'sedation']
    },
    quickActions: ['Cardioversion candidate?', 'IV access and monitoring', 'Sedation needed?', 'Anticoagulation status?'],
    relatedContent: [
        { type: 'parallel', title: 'Stable AFib', link: 'mentor-chat.html?case=atrial-fibrillation', reason: 'Compare approaches' }
    ]
},

'syncope': {
    id: 'syncope', title: 'Syncope - Vasovagal', category: 'Cardiovascular',
    isParallel: false, parallelCase: 'syncope-cardiac',
    parallelDescription: 'Cardiac syncope',
    patient: { name: 'Helen Park', age: 45, sex: 'Female', setting: 'Emergency', acuity: 'Medium', chiefComplaint: 'Passed Out' },
    description: 'A 45-year-old passed out while standing in a meeting. Felt lightheaded and warm beforehand. Unconscious 20 seconds. No seizure activity. No cardiac history.',
    openingStatement: 'Ms. Park passed out at work. Sounds like vasovagal given the prodrome, but we need to rule out dangerous causes. How do you approach syncope?',
    conceptDomains: {
        'History': ['prodrome', 'triggers', 'witnesses'],
        'Physical Exam': ['vitals', 'orthostatics', 'cardiac_exam'],
        'Pathophysiology': ['vasovagal_mechanism', 'cardiac_causes'],
        'Workup': ['ecg', 'labs', 'risk_stratification'],
        'Management': ['disposition', 'monitoring']
    },
    quickActions: ['What was she doing?', 'Warning signs?', 'Orthostatic vitals', 'Get ECG'],
    relatedContent: [
        { type: 'mechanism', title: 'Syncope Mechanisms', link: 'mechanismdx-syncope-arrhythmia-module.html', reason: 'Understanding causes' }
    ]
,
    evidenceBase: {
        guidelines: [
                  "ACC/AHA/HRS Syncope Guideline 2017",
                  "ESC Syncope Guidelines 2018"
        ],
        keyEvidence: [
                  "History and physical exam diagnose cause in ~50%",
                  "San Francisco Syncope Rule and Canadian Syncope Risk Score for risk stratification",
                  "Cardiac syncope has 1-year mortality ~30% vs 5% for vasovagal"
        ]
    }},

'syncope-cardiac': {
    id: 'syncope-cardiac', title: 'Syncope - Cardiac', category: 'Cardiovascular',
    isParallel: true, parallelCase: 'syncope',
    parallelDescription: 'Vasovagal syncope',
    patient: { name: 'George Miller', age: 68, sex: 'Male', setting: 'Emergency', acuity: 'High', chiefComplaint: 'Collapse' },
    description: 'A 68-year-old collapsed suddenly while walking. No prodrome. Unconscious 2 minutes. Wife says face turned blue. Prior MI. ECG: sinus bradycardia 42, intermittent complete heart block.',
    openingStatement: 'Mr. Miller had sudden collapse without warning. ECG shows conduction disease. Concerning for cardiogenic syncope. What\'s your approach?',
    conceptDomains: {
        'History': ['sudden_onset', 'no_prodrome', 'cardiac_history'],
        'Physical Exam': ['vitals', 'cardiac_exam'],
        'Pathophysiology': ['heart_block', 'stokes_adams'],
        'Workup': ['monitoring', 'echo'],
        'Management': ['pacemaker', 'temporary_pacing']
    },
    quickActions: ['Temporary pacing needed?', 'AV nodal blockers?', 'Check troponin', 'Call cardiology'],
    relatedContent: [
        { type: 'parallel', title: 'Vasovagal Syncope', link: 'mentor-chat.html?case=syncope', reason: 'Compare benign vs dangerous' }
    ]
},

'acute-dyspnea-chf': {
    id: 'acute-dyspnea-chf', title: 'Acute Dyspnea - CHF', category: 'Cardiovascular',
    isParallel: false, parallelCase: 'acute-dyspnea-pe',
    parallelDescription: 'PE in young patient',
    patient: { name: 'Robert Chen', age: 68, sex: 'Male', setting: 'Emergency', acuity: 'High', chiefComplaint: 'Shortness of Breath' },
    description: 'A 68-year-old with sudden dyspnea waking him from sleep. Orthopnea, sleeping on 3 pillows. HTN, MI 5 years ago. Ran out of meds 2 weeks ago.',
    openingStatement: 'Mr. Chen came by ambulance with acute dyspnea. Using accessory muscles. What\'s your approach?',
    conceptDomains: {
        'History': ['onset', 'orthopnea', 'pnd', 'edema', 'medications'],
        'Physical Exam': ['vitals', 'respiratory_exam', 'cardiac_exam', 'jvd'],
        'Pathophysiology': ['heart_failure', 'pulmonary_edema'],
        'Workup': ['cxr', 'bnp', 'ecg', 'echo'],
        'Management': ['diuretics', 'oxygen', 'vasodilators']
    },
    quickActions: ['When did this start?', 'Check O2 sat', 'Leg swelling?', 'Taking medications?'],
    relatedContent: [
        { type: 'mechanism', title: 'Heart Failure', link: 'mechanismdx-hf-module.html', reason: 'CHF pathophysiology' }
    ]
,
    evidenceBase: {
        guidelines: [
                  "AHA/ACC/HFSA Heart Failure Guideline 2022",
                  "ESC Guidelines for Heart Failure 2021"
        ],
        keyEvidence: [
                  "BNP/NT-proBNP useful for diagnosis (BNP >100, NT-proBNP >300)",
                  "IV diuretics first-line for acute decompensation",
                  "GDMT (ACEi/ARB/ARNI, BB, MRA, SGLT2i) reduces mortality"
        ],
        openAccessLinks: ["https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063"]
    }},

'acute-dyspnea-pe': {
    id: 'acute-dyspnea-pe', title: 'Acute Dyspnea - PE', category: 'Cardiovascular',
    isParallel: true, parallelCase: 'acute-dyspnea-chf',
    parallelDescription: 'CHF exacerbation',
    patient: { name: 'Amanda Torres', age: 34, sex: 'Female', setting: 'Emergency', acuity: 'High', chiefComplaint: 'Sudden Shortness of Breath' },
    description: 'A 34-year-old with sudden dyspnea and pleuritic chest pain 3 hours ago. Returned from 14-hour flight 2 days ago. On OCPs. HR 115, SpO2 91%.',
    openingStatement: 'Ms. Torres is young with sudden dyspnea after long flight. HR elevated, O2 low. What are you thinking?',
    conceptDomains: {
        'History': ['risk_factors', 'travel', 'medications', 'pleuritic_pain'],
        'Physical Exam': ['vitals', 'respiratory_exam', 'leg_exam'],
        'Pathophysiology': ['virchow_triad', 'vq_mismatch'],
        'Workup': ['wells_score', 'd_dimer', 'ctpa'],
        'Management': ['anticoagulation', 'thrombolysis_criteria']
    },
    quickActions: ['Calculate Wells score', 'Leg swelling?', 'Hemodynamically stable?', 'Get D-dimer'],
    relatedContent: [
        { type: 'parallel', title: 'CHF Dyspnea', link: 'mentor-chat.html?case=acute-dyspnea-chf', reason: 'Compare etiologies' },
        { type: 'mechanism', title: 'VTE & PE Module', link: 'mechanismdx-vte-pe-module.html', reason: 'PE pathophysiology' }
    ]
,
    evidenceBase: {
        guidelines: [
                  "ESC Guidelines for Pulmonary Embolism 2019",
                  "ACEP PE Clinical Policy 2018"
        ],
        keyEvidence: [
                  "Wells score + D-dimer can safely rule out PE (PERC if very low risk)",
                  "CTPA is diagnostic test of choice",
                  "Anticoagulation should not be delayed for imaging in high probability"
        ],
        openAccessLinks: ["https://academic.oup.com/eurheartj/article/41/4/543/5556136"]
    }},

// ============================================================================
// PULMONARY (4 cases)
// ============================================================================

'copd-exacerbation': {
    id: 'copd-exacerbation', title: 'COPD Exacerbation', category: 'Pulmonary',
    isParallel: false, parallelCase: 'asthma-exacerbation',
    parallelDescription: 'Severe asthma',
    patient: { name: 'Harold Stevens', age: 72, sex: 'Male', setting: 'Emergency', acuity: 'High', chiefComplaint: 'Worsening SOB' },
    description: 'A 72-year-old with severe COPD (FEV1 35%) with 3 days worsening dyspnea, increased purulent sputum. Home O2 2L. 50 pack-year smoking.',
    openingStatement: 'Mr. Stevens is a severe COPD patient much worse than baseline. Tripoding, pursed-lip breathing, SpO2 86% on 2L. How do you approach COPD exacerbation?',
    conceptDomains: {
        'History': ['baseline_function', 'sputum_changes', 'medication_compliance'],
        'Physical Exam': ['respiratory_effort', 'breath_sounds', 'accessory_muscles'],
        'Pathophysiology': ['airflow_obstruction', 'hyperinflation'],
        'Workup': ['abg', 'cxr', 'sputum_culture'],
        'Management': ['bronchodilators', 'steroids', 'antibiotics', 'niv_indications']
    },
    quickActions: ['Get ABG', 'Start nebulizers', 'Does he need BiPAP?', 'Sputum color?'],
    relatedContent: [
        { type: 'mechanism', title: 'Obstructive Lung Disease', link: 'mechanismdx-obstructive-lung-module.html', reason: 'COPD pathophysiology' }
    ]
,
    evidenceBase: {
        guidelines: [
                  "GOLD COPD Guidelines 2024",
                  "ATS/ERS COPD Exacerbation Statement"
        ],
        keyEvidence: [
                  "Short-course steroids (5 days) equivalent to longer courses",
                  "Antibiotics for purulent sputum or severe exacerbation",
                  "NIV reduces intubation in hypercapnic respiratory failure"
        ],
        openAccessLinks: ["https://goldcopd.org/2024-gold-report/"]
    }},

'asthma-exacerbation': {
    id: 'asthma-exacerbation', title: 'Severe Asthma', category: 'Pulmonary',
    isParallel: true, parallelCase: 'copd-exacerbation',
    parallelDescription: 'COPD exacerbation',
    patient: { name: 'Jessica Martinez', age: 24, sex: 'Female', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Can\'t Breathe' },
    description: 'A 24-year-old with asthma, 2 prior ICU admissions. Severe dyspnea, 2-word sentences. HR 128, RR 32, SpO2 88%. Using albuterol hourly x2 days.',
    openingStatement: 'Jessica has severe asthma and is in trouble - can barely talk, tachypneic, hypoxic. History of ICU admissions. What do you do?',
    conceptDomains: {
        'History': ['prior_intubations', 'trigger', 'medication_use'],
        'Physical Exam': ['air_movement', 'accessory_muscles', 'mental_status'],
        'Pathophysiology': ['bronchospasm', 'inflammation'],
        'Workup': ['peak_flow', 'abg'],
        'Management': ['continuous_nebs', 'steroids', 'magnesium', 'intubation_criteria']
    },
    quickActions: ['Continuous nebs', 'IV steroids', 'Magnesium dose?', 'When to intubate?'],
    relatedContent: [
        { type: 'parallel', title: 'COPD', link: 'mentor-chat.html?case=copd-exacerbation', reason: 'Compare obstructive diseases' },
        { type: 'mechanism', title: 'Obstructive Lung Disease', link: 'mechanismdx-obstructive-lung-module.html', reason: 'Asthma pathophysiology' }
    ]
,
    evidenceBase: {
        guidelines: [
                  "GINA Global Strategy for Asthma 2024",
                  "Expert Panel Report 3 (NIH)"
        ],
        keyEvidence: [
                  "Systemic corticosteroids within first hour reduce hospitalizations",
                  "Continuous albuterol for severe exacerbations",
                  "Magnesium sulfate IV for severe/life-threatening"
        ],
        openAccessLinks: ["https://ginasthma.org/2024-gina-main-report/"]
    }},

// ============================================================================
// INFECTIOUS DISEASE / CRITICAL CARE (6 cases)
// ============================================================================

'sepsis-uti': {
    id: 'sepsis-uti',
    title: 'Sepsis - Urosepsis',
    category: 'Infectious Disease',
    isParallel: false,
    parallelCase: 'sepsis-pneumonia',
    parallelDescription: 'Pneumonia-Source Sepsis',
    patient: { name: 'Helen Morrison', age: 78, sex: 'Female', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Confusion and Fever' },
    description: 'A 78-year-old nursing home resident brought in for confusion and fever. History of recurrent UTIs and diabetes. T 39.4°C, HR 112, BP 88/54, RR 24. Altered mental status, suprapubic tenderness. WBC 18K, Cr 2.4 (baseline 1.1), lactate 4.2.',
    openingStatement: 'Mrs. Morrison appears septic with likely urinary source. Walk me through your approach to recognition, resuscitation, and treatment using Sepsis-3 criteria.',
    conceptDomains: {
        'Recognition': ['qsofa', 'sepsis3_criteria', 'organ_dysfunction'],
        'Resuscitation': ['hour1_bundle', 'fluid_choice', 'vasopressor_timing'],
        'Source Control': ['urine_culture', 'imaging', 'catheter_management'],
        'Antibiotics': ['coverage', 'timing', 'deescalation'],
        'Monitoring': ['lactate_clearance', 'map_target', 'urine_output']
    },
    quickActions: ['Calculate qSOFA score', 'Hour-1 bundle elements?', 'Fluid choice: NS vs LR?', 'When to start vasopressors?', 'Antibiotic coverage for urosepsis?'],
    keyTeachingPoints: [
        'qSOFA ≥2: RR ≥22, SBP ≤100, altered mental status',
        'Hour-1 bundle: lactate, cultures, antibiotics, 30mL/kg crystalloid if hypotensive/lactate≥4',
        'Balanced crystalloids (LR) preferred over NS',
        'Start vasopressors if MAP <65 during or after fluids',
        'Ceftriaxone covers most urosepsis'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Sepsis & Shock Module', link: 'mechanismdx-sepsis-shock-module.html', reason: 'Understand sepsis pathophysiology' },
        { type: 'parallel', title: 'Pneumonia Sepsis', link: 'mentor-chat.html?case=sepsis-pneumonia', reason: 'Compare sepsis presentations by source' }
    ],
    defined_responses: {
        'qsofa': 'Let\'s calculate her qSOFA: RR 24 (≥22) ✓, SBP 88 (≤100) ✓, Altered mental status ✓. That\'s 3/3 — very high risk. qSOFA is screening, not diagnostic.',
        'hour-1 bundle': 'The Hour-1 bundle: 1) Measure lactate, 2) Blood cultures before antibiotics, 3) Broad-spectrum antibiotics within 1 hour, 4) 30 mL/kg crystalloid if hypotensive or lactate ≥4, 5) Vasopressors if MAP <65 during/after fluids.',
        'fluid choice': 'Balanced crystalloids (LR, Plasmalyte) have shown better renal outcomes in SMART trial. Start with LR — no need to add chloride load to an acidotic patient.',
        'vasopressors': 'Don\'t wait until fluids are "complete"! If MAP remains <65 during resuscitation, start norepinephrine. Early vasopressors prevent prolonged hypoperfusion.',
        'antibiotics': 'For uncomplicated urosepsis, ceftriaxone covers E. coli and Klebsiella well. Consider piperacillin-tazobactam for high-risk patients.'
    }
,
    evidenceBase: {
        guidelines: [
                  "Surviving Sepsis Campaign 2021",
                  "IDSA UTI Guidelines 2010"
        ],
        keyEvidence: [
                  "Hour-1 bundle: lactate, blood cultures, antibiotics, fluids",
                  "30 mL/kg crystalloid for hypotension or lactate ≥4",
                  "Norepinephrine first-line vasopressor"
        ],
        openAccessLinks: ["https://www.ccmjournal.org/article/S0090-3493(21)00003-1/fulltext"]
    }},

'sepsis-pneumonia': {
    id: 'sepsis-pneumonia',
    title: 'Sepsis - Pneumonia Source',
    category: 'Infectious Disease',
    isParallel: true,
    parallelCase: 'sepsis-uti',
    parallelDescription: 'Urosepsis',
    patient: { name: 'Robert Chen', age: 65, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Shortness of Breath and Fever' },
    description: 'A 65-year-old with COPD presents with 3 days of productive cough, now acutely short of breath. T 38.9°C, HR 118, BP 92/58, RR 28, O2 sat 88% on RA. Rhonchi and crackles RLL. WBC 22K, lactate 3.8, procalcitonin 8.5. CXR: RLL consolidation.',
    openingStatement: 'Mr. Chen has severe CAP with sepsis. His COPD adds complexity. How do you approach CAP severity assessment and sepsis management simultaneously?',
    conceptDomains: {
        'Severity Assessment': ['curb65', 'psi', 'ats_idsa_severe'],
        'Sepsis Recognition': ['sepsis3', 'qsofa', 'lactate_interpretation'],
        'Antibiotic Selection': ['cap_coverage', 'atypical_coverage', 'pseudomonas_risk'],
        'Respiratory Support': ['oxygen_targets', 'niv_vs_intubation'],
        'Monitoring': ['procalcitonin_use', 'lactate_clearance']
    },
    quickActions: ['Calculate CURB-65', 'Does he meet severe CAP criteria?', 'Antibiotic selection for ICU CAP', 'Procalcitonin interpretation', 'Pseudomonas coverage needed?'],
    keyTeachingPoints: [
        'CURB-65: Confusion, Urea >19, RR ≥30, BP low, Age ≥65',
        'ATS/IDSA severe CAP: 1 major OR ≥3 minor criteria',
        'ICU CAP: β-lactam + macrolide OR β-lactam + respiratory FQ',
        'With COPD + severe: consider Pseudomonas coverage',
        'Procalcitonin 8.5 strongly suggests bacterial infection'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Pneumonia Module', link: 'mechanismdx-pneumonia-module.html', reason: 'CAP pathogen patterns and treatment' },
        { type: 'mechanism', title: 'Sepsis Module', link: 'mechanismdx-sepsis-shock-module.html', reason: 'Sepsis resuscitation principles' },
        { type: 'parallel', title: 'Urosepsis Case', link: 'mentor-chat.html?case=sepsis-uti', reason: 'Compare sepsis by source' }
    ],
    defined_responses: {
        'curb65': 'CURB-65 for Mr. Chen: Confusion (ask), Urea (need BUN), RR ≥30 (28 close), BP SBP<90 (92 borderline), Age ≥65 (yes). Even with 2-3, he needs ICU based on severity.',
        'severe cap': 'ATS/IDSA severe CAP: 1 major (mech vent or vasopressors) OR ≥3 minor (RR ≥30, PaO2/FiO2 ≤250, multilobar, confusion, BUN ≥20, WBC <4K, platelets <100K, hypothermia, hypotension). He likely meets several minor.',
        'antibiotics': 'ICU CAP: β-lactam (ceftriaxone) + macrolide (azithromycin) OR β-lactam + respiratory FQ. Given COPD with frequent exacerbations, consider Pseudomonas coverage with piperacillin-tazobactam.',
        'procalcitonin': 'Procalcitonin 8.5 is markedly elevated — strongly suggests bacterial infection. Use for duration guidance: stop when <0.25 or dropped ≥80%.'
    }
,
    evidenceBase: {
        guidelines: [
                  "IDSA/ATS CAP Guidelines 2019",
                  "Surviving Sepsis Campaign 2021"
        ],
        keyEvidence: [
                  "Empiric coverage: β-lactam + macrolide or respiratory fluoroquinolone",
                  "Procalcitonin can guide antibiotic duration",
                  "ATS/IDSA severe CAP criteria identify ICU need"
        ],
        openAccessLinks: ["https://www.atsjournals.org/doi/10.1164/rccm.201908-1581ST"]
    }},

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
        'first step': 'EPINEPHRINE IM 0.3-0.5mg (1:1000) anterolateral thigh. Don\'t delay! This is the only drug that treats all components of anaphylaxis.',
        'beta blocker': 'Excellent catch! Metoprolol blocks the beta receptors epinephrine needs. If refractory to epinephrine, give GLUCAGON 1-5mg IV.',
        'fluids': 'Yes, aggressive fluids! Anaphylaxis causes massive vasodilation. Give 1-2L NS rapidly.',
        'observation': 'Observe at least 4-6 hours. Biphasic reactions occur in 5-20% of cases.',
        'discharge': 'Prescribe EpiPen, oral antihistamines, prednisone taper. MUST refer to allergist. Strict avoidance of shellfish.'
    }
,
    evidenceBase: {
        guidelines: [
                  "WAO Anaphylaxis Guidelines 2020",
                  "EAACI Anaphylaxis Guidelines"
        ],
        keyEvidence: [
                  "Epinephrine IM (0.3-0.5mg) is FIRST-LINE - no contraindications",
                  "Biphasic reactions occur in 5-20% - observe 4-6 hours minimum",
                  "Prescribe epinephrine auto-injector and refer to allergist"
        ]
    }},

// ============================================================================
// GI CASES (8 cases)
// ============================================================================

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
    relatedContent: [
        { type: 'mechanism', title: 'GI Bleeding Module', link: 'mechanismdx-gi-bleeding-module.html', reason: 'GI bleed pathophysiology' },
        { type: 'parallel', title: 'Lower GI Bleed', link: 'mentor-chat.html?case=lower-gi-bleed', reason: 'Compare upper vs lower' }
    ],
    defined_responses: {
        'glasgow blatchford': 'GBS around 15 - very high risk! Score of 0-1 is low risk and can be outpatient. His score mandates admission and urgent EGD.',
        'transfuse': 'Restrictive strategy! Target Hgb 7-9. Studies show liberal transfusion INCREASES mortality in upper GIB.',
        'scope': 'EGD within 24 hours. Earlier (within 12 hours) if hemodynamically unstable.',
        'ppi dose': 'High-risk lesions: 80mg bolus then 8mg/hour infusion for 72 hours.'
    }
,
    evidenceBase: {
        guidelines: [
                  "ACG Upper GI Bleeding Guidelines 2021",
                  "International Consensus Group 2019"
        ],
        keyEvidence: [
                  "Glasgow-Blatchford score for risk stratification",
                  "PPI infusion post-endoscopy reduces rebleeding",
                  "Restrictive transfusion (Hgb <7) improves outcomes"
        ],
        openAccessLinks: ["https://journals.lww.com/ajg/fulltext/2021/01000/acg_clinical_guideline__upper_gastrointestinal_and.13.aspx"]
    }},

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
        'know its lower': 'Painless maroon stools with known diverticula suggests lower, BUT brisk UGIB can present with hematochezia. No melena or hematemesis is reassuring.',
        'when to scope': 'Colonoscopy within 24 hours after rapid bowel prep (4-6L PEG).',
        'doesnt stop': 'If active bleeding: CTA to localize, then IR angiography with embolization.',
        'recurrence': '25-40% of diverticular bleeds recur. After second bleed, consider elective colectomy.'
    }
,
    evidenceBase: {
        guidelines: [
                  "ACG Lower GI Bleeding Guidelines 2023",
                  "BSG Guidelines 2019"
        ],
        keyEvidence: [
                  "CT angiography for localization if hemodynamically unstable",
                  "Colonoscopy within 24 hours for most patients",
                  "Most diverticular bleeds stop spontaneously"
        ]
    }},

'appendicitis': {
    id: 'appendicitis',
    title: 'Acute Appendicitis',
    category: 'GI/Surgery',
    isParallel: false,
    parallelCase: 'diverticulitis',
    parallelDescription: 'Acute Diverticulitis',
    patient: { name: 'Tyler Johnson', age: 24, sex: 'Male', setting: 'Emergency', acuity: 'Urgent', chiefComplaint: 'Abdominal Pain' },
    description: 'A 24-year-old man presents with 18 hours of abdominal pain. Started periumbilical, now localized to RLQ. Associated anorexia and one episode of vomiting. T 38.1°C, HR 92, RLQ tenderness with guarding, positive McBurney\'s point tenderness. WBC 14K with left shift.',
    openingStatement: 'Tyler has a classic appendicitis presentation. Walk me through the pathophysiology that explains his symptom progression, and how you\'d confirm the diagnosis.',
    conceptDomains: {
        'Pathophysiology': ['obstruction', 'visceral_to_somatic', 'perforation_timeline'],
        'Diagnosis': ['alvarado_score', 'imaging_choice', 'clinical_signs'],
        'Management': ['surgical_timing', 'antibiotics', 'perforation_management'],
        'Complications': ['perforation', 'abscess', 'phlegmon']
    },
    quickActions: ['Calculate Alvarado score', 'Why does pain migrate?', 'CT vs ultrasound?', 'Antibiotics before surgery?', 'Signs of perforation?'],
    keyTeachingPoints: [
        'Pain migration: visceral pain (periumbilical) → somatic pain (RLQ) as parietal peritoneum involved',
        'Alvarado score (MANTRELS): Migration, Anorexia, Nausea, Tenderness RLQ, Rebound, Elevated temp, Leukocytosis, Shift',
        'CT is gold standard (95%+ sensitivity); ultrasound first-line in children, pregnant women',
        'Appendectomy within 24 hours for uncomplicated; antibiotics started preoperatively',
        'Perforation signs: high fever, peritonitis, worsening despite treatment'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Acute Abdomen Module', link: 'mechanismdx-acute-abdomen-module.html', reason: 'Surgical emergency pathophysiology' },
        { type: 'parallel', title: 'Diverticulitis Case', link: 'mentor-chat.html?case=diverticulitis', reason: 'Compare RLQ vs LLQ presentations' }
    ],
    defined_responses: {
        'pain migration': 'Excellent question! The appendix is a midgut structure — visceral afferents enter at T10, same as umbilicus. Early appendiceal distension causes poorly localized periumbilical pain. As inflammation reaches the parietal peritoneum, pain "migrates" to RLQ.',
        'alvarado': 'MANTRELS score: Migration (1), Anorexia (1), Nausea/vomiting (1), Tenderness RLQ (2), Rebound (check), Elevated temp (1), Leukocytosis (2), Shift left (1). With confirmed findings, he\'s likely 7-8/10.',
        'imaging': 'CT has 95-98% sensitivity/specificity. In classic presentations with high Alvarado, some surgeons proceed directly to OR.',
        'antibiotics': 'Preoperative antibiotics reduce surgical site infection. Typically cefoxitin or cefazolin + metronidazole.'
    }
,
    evidenceBase: {
        guidelines: [
                  "SAGES Appendicitis Guidelines 2021",
                  "WSES Jerusalem Guidelines 2020"
        ],
        keyEvidence: [
                  "CT has >95% sensitivity/specificity",
                  "Laparoscopic appendectomy preferred",
                  "Antibiotics alone option for uncomplicated (shared decision-making)"
        ]
    }},

'diverticulitis': {
    id: 'diverticulitis',
    title: 'Acute Diverticulitis',
    category: 'GI/Surgery',
    isParallel: true,
    parallelCase: 'appendicitis',
    parallelDescription: 'Acute Appendicitis',
    patient: { name: 'Barbara Williams', age: 62, sex: 'Female', setting: 'Emergency', acuity: 'Urgent', chiefComplaint: 'Left Lower Quadrant Pain' },
    description: 'A 62-year-old woman with no prior abdominal surgery presents with 2 days of progressive LLQ pain, low-grade fever, and constipation. T 38.3°C, HR 88, BP 138/82. LLQ tenderness without peritonitis. WBC 13K. CT shows sigmoid diverticulitis with 3cm pericolic abscess.',
    openingStatement: 'Mrs. Williams has complicated diverticulitis with a small abscess. How does this change your management compared to uncomplicated diverticulitis?',
    quickActions: ['Hinchey classification?', 'Abscess <4cm vs >4cm management', 'Antibiotics for diverticulitis', 'When to do colonoscopy?', 'Indications for surgery?'],
    keyTeachingPoints: [
        'Diverticulitis = microperforation of diverticulum → localized inflammation',
        'Hinchey: I (pericolic abscess), II (pelvic abscess), III (purulent peritonitis), IV (fecal peritonitis)',
        'Uncomplicated: outpatient oral antibiotics (or no antibiotics per recent data)',
        'Abscess >3-4cm: percutaneous drainage + IV antibiotics',
        'Colonoscopy 6-8 weeks after resolution to rule out malignancy'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Acute Abdomen Module', link: 'mechanismdx-acute-abdomen-module.html', reason: 'GI emergencies comparison' },
        { type: 'parallel', title: 'Appendicitis Case', link: 'mentor-chat.html?case=appendicitis', reason: 'Compare appendicitis vs diverticulitis' }
    ],
    defined_responses: {
        'hinchey': 'Her 3cm pericolic abscess is Hinchey Stage I. Stage II is distant abscess (pelvic). Stage III is purulent peritonitis. Stage IV is fecal peritonitis.',
        'abscess management': 'Her 3cm abscess is borderline. <3-4cm → IV antibiotics, observation. >4cm → percutaneous CT-guided drainage + antibiotics.',
        'antibiotics': 'Complicated diverticulitis: IV antibiotics covering gram-negatives and anaerobes. Options: ciprofloxacin + metronidazole, or piperacillin-tazobactam.',
        'colonoscopy': 'Colonoscopy is contraindicated acutely. Perform 6-8 weeks after resolution to rule out underlying malignancy.'
    }
},

'cholangitis': {
    id: 'cholangitis',
    title: 'Acute Cholangitis',
    category: 'GI/Surgery',
    isParallel: false,
    patient: { name: 'James Park', age: 71, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Fever, Jaundice, and Abdominal Pain' },
    description: 'A 71-year-old man presents with 2 days of RUQ pain, fever, and yellowing of his skin. History of gallstones. T 39.2°C, HR 108, BP 94/62. Jaundiced, RUQ tenderness. WBC 19K, Tbili 6.8, ALP 420, AST 180, ALT 210. Ultrasound: dilated CBD 12mm with shadowing stone.',
    openingStatement: 'Mr. Park has Charcot\'s triad and is progressing toward Reynolds\' pentad. This is acute cholangitis — a surgical emergency. What makes this different from cholecystitis?',
    quickActions: ['Charcot\'s vs Reynolds\' pentad', 'Why is this an emergency?', 'ERCP timing', 'Antibiotic coverage', 'Difference from cholecystitis'],
    keyTeachingPoints: [
        'Charcot\'s triad (50-70%): Fever + Jaundice + RUQ pain',
        'Reynolds\' pentad: + Hypotension + Altered mental status = septic cholangitis',
        'EMERGENCY: Obstructed infected bile duct → antibiotics alone insufficient',
        'Biliary decompression (ERCP) within 24-48h; sooner if septic',
        'Tokyo Guidelines grade severity and guide timing of intervention'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Acute Abdomen Module', link: 'mechanismdx-acute-abdomen-module.html', reason: 'Biliary disease spectrum' }
    ],
    defined_responses: {
        'charcot reynolds': 'He has Charcot\'s triad: Fever ✓, Jaundice ✓, RUQ pain ✓. His BP is 94/62 — that\'s hypotension, the fourth element of Reynolds\' pentad.',
        'emergency': 'Cholangitis is an obstructed AND infected biliary system — pressurized infected bile with nowhere to go. Antibiotics cannot penetrate an obstructed system adequately. The obstruction MUST be relieved.',
        'ercp': 'ERCP is the treatment of choice. Timing: mild → 24-72h; moderate-severe → within 24h; septic shock → emergent (<12h).',
        'antibiotics': 'Biliary pathogens: gram-negatives, Enterococcus, anaerobes. Options: piperacillin-tazobactam, ampicillin-sulbactam + FQ, or carbapenem.'
    }
,
    evidenceBase: {
        guidelines: [
                  "Tokyo Guidelines 2018 (TG18)",
                  "ASGE Bile Duct Stones Guidelines"
        ],
        keyEvidence: [
                  "Charcot's triad: fever, jaundice, RUQ pain",
                  "ERCP within 24-48 hours for moderate-severe",
                  "Broad-spectrum antibiotics covering gram-negatives and anaerobes"
        ],
        openAccessLinks: ["https://www.jstage.jst.go.jp/article/jhbps/25/1/25_11/_article"]
    }},

'sbo': {
    id: 'sbo',
    title: 'Small Bowel Obstruction',
    category: 'GI/Surgery',
    isParallel: false,
    patient: { name: 'Patricia Adams', age: 58, sex: 'Female', setting: 'Emergency', acuity: 'Urgent', chiefComplaint: 'Vomiting and Abdominal Distension' },
    description: 'A 58-year-old woman with history of appendectomy and cesarean section presents with 24 hours of crampy abdominal pain, bilious vomiting, and distension. No BM or flatus for 12 hours. Distended abdomen with high-pitched bowel sounds. WBC 11K, lactate 1.4. CT: dilated small bowel with transition point in RLQ, no signs of ischemia.',
    openingStatement: 'Mrs. Adams has adhesive small bowel obstruction. She has prior surgeries — the #1 risk factor. Walk me through your assessment for complete vs partial obstruction and signs of strangulation.',
    quickActions: ['Signs of strangulation?', 'Complete vs partial obstruction', 'When to operate?', 'Role of contrast study?', 'How long to trial conservative management?'],
    keyTeachingPoints: [
        'Adhesions cause 60% of SBO; prior surgery is #1 risk factor',
        'Strangulation = surgical emergency: continuous pain, fever, peritonitis, elevated lactate',
        'Partial SBO: trial of conservative management (NPO, NG, fluids, serial exams)',
        'No improvement in 48-72h or deterioration → surgery',
        'CT findings concerning for ischemia: wall thickening, mesenteric haziness, pneumatosis'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Acute Abdomen Module', link: 'mechanismdx-acute-abdomen-module.html', reason: 'Bowel obstruction pathophysiology' }
    ],
    defined_responses: {
        'strangulation': 'Strangulation means compromised blood supply — time-critical! Signs: continuous (not colicky) pain, fever, tachycardia, peritonitis, elevated lactate, metabolic acidosis. Her lactate is 1.4 (normal) — reassuring for now.',
        'complete vs partial': 'Complete: no flatus/stool at all, high-grade on imaging, usually requires surgery. Partial: some gas/stool passing, may resolve conservatively. She hasn\'t passed gas for 12 hours — concerning.',
        'conservative': 'Without strangulation signs: NPO, NG tube decompression, IV fluids, serial abdominal exams every 4-6h. Success rate 60-80% for partial SBO. Timeline: if no improvement in 48-72h → surgery.',
        'surgery': 'Indications: Signs of strangulation/ischemia, complete obstruction with no improvement, closed-loop obstruction, incarcerated hernia, failure of conservative management.'
    }
},

// ============================================================================
// ENDOCRINE (2 cases)
// ============================================================================

'dka': {
    id: 'dka',
    title: 'DKA - Diabetic Ketoacidosis',
    category: 'Endocrine',
    isParallel: false,
    parallelCase: 'hhs',
    parallelDescription: 'Hyperosmolar Hyperglycemic State',
    patient: { name: 'Marcus Thompson', age: 22, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Nausea, Vomiting, Abdominal Pain' },
    description: 'A 22-year-old with Type 1 DM presents with 2 days of nausea, vomiting, and abdominal pain. He ran out of insulin 3 days ago. Lethargic, Kussmaul breathing, fruity breath. Glucose 485, pH 7.12, bicarb 8, anion gap 28.',
    openingStatement: 'Marcus is a young T1DM who ran out of insulin. He\'s in DKA - acidotic with Kussmaul breathing. Walk me through your approach to managing DKA.',
    quickActions: ['Calculate anion gap', 'Start IV fluids - what kind?', 'When do I start insulin?', 'Check potassium first!', 'What\'s the precipitant?'],
    keyTeachingPoints: [
        'Never start insulin until K+ is known and >3.3 mEq/L',
        'Fluid resuscitation is priority #1 - typically 1-2L NS in first hour',
        'Anion gap closure (not glucose) determines when to stop insulin drip',
        'Look for precipitants: Infection, Infarction, Insulin missed, Intoxication',
        'Cerebral edema risk in young patients with rapid correction'
    ],
    relatedContent: [
        { type: 'parallel', title: 'HHS Comparison', link: 'mentor-chat.html?case=hhs', reason: 'Compare DKA vs HHS' },
        { type: 'mechanism', title: 'Diabetes & DKA Module', link: 'mechanismdx-diabetes-dka-module.html', reason: 'Understand metabolic derangement' }
    ],
    defined_responses: {
        'anion gap': 'AG = Na - (Cl + HCO3) = 140 - (104 + 8) = 28. Significantly elevated (normal 8-12). In DKA, the gap is from ketoacids.',
        'fluids': 'Fluid resuscitation is critical! These patients are typically 5-10L down. Start with isotonic saline - 1-2L in the first hour.',
        'insulin': 'NEVER start insulin until you know the potassium level. Insulin drives K+ into cells. If K+ is low, insulin can cause fatal hypokalemia.',
        'potassium': 'The serum K+ of 5.8 looks high, but total body K+ is depleted. As we correct acidosis and give insulin, K+ will drop rapidly.',
        'precipitant': 'Always look for the 5 I\'s: Infection, Infarction, Insulin missed, Intoxication, Iatrogenic.'
    }
,
    evidenceBase: {
        guidelines: [
                  "ADA Standards of Care 2024",
                  "JBDS DKA Guidelines (UK)"
        ],
        keyEvidence: [
                  "Fluid resuscitation: NS initially, then 0.45% if Na normal/high",
                  "Insulin infusion 0.1 units/kg/hr after initial fluids",
                  "Add dextrose when glucose <200-250, continue insulin until gap closes"
        ],
        openAccessLinks: ["https://diabetesjournals.org/care/issue/47/Supplement_1"]
    }},

'hhs': {
    id: 'hhs',
    title: 'HHS - Hyperosmolar Hyperglycemic State',
    category: 'Endocrine',
    isParallel: true,
    parallelCase: 'dka',
    parallelDescription: 'Diabetic Ketoacidosis',
    patient: { name: 'Dorothy Williams', age: 72, sex: 'Female', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Confusion and Weakness' },
    description: 'A 72-year-old with Type 2 DM brought from nursing home for confusion and weakness over 3 days. Decreased oral intake. Obtunded, severely dehydrated. Glucose 892, Na 152, serum osm 348, pH 7.32, bicarb 22, minimal ketones.',
    openingStatement: 'Mrs. Williams is critically ill with profound hyperglycemia but minimal acidosis. This is HHS, not DKA. How does your management approach differ?',
    quickActions: ['Calculate serum osmolarity', 'What\'s the corrected sodium?', 'How much fluid deficit?', 'Why no ketoacidosis?', 'DVT prophylaxis?'],
    keyTeachingPoints: [
        'HHS has MORE severe dehydration than DKA (typically 8-12L deficit)',
        'Mortality is higher in HHS (10-20%) vs DKA (1-5%)',
        'Minimal ketosis because some endogenous insulin suppresses lipolysis',
        'Slower glucose correction to prevent cerebral edema',
        'High thrombosis risk - need prophylaxis'
    ],
    relatedContent: [
        { type: 'parallel', title: 'DKA Comparison', link: 'mentor-chat.html?case=dka', reason: 'Compare DKA vs HHS' },
        { type: 'mechanism', title: 'Diabetes Module', link: 'mechanismdx-diabetes-dka-module.html', reason: 'Understand metabolic derangement' }
    ],
    defined_responses: {
        'osmolarity': 'Serum osm = 2(Na) + Glucose/18 + BUN/2.8 = 2(152) + 892/18 + 45/2.8 = 370 mOsm/kg. Anything >320 is concerning for HHS.',
        'corrected sodium': 'For every 100 mg/dL glucose above 100, add 1.6-2.4 to sodium. Corrected Na = 152 + 16 = 168! She\'s profoundly hypernatremic.',
        'fluid deficit': 'HHS patients are typically 8-12 LITERS down - more than DKA!',
        'why no ketosis': 'In T2DM, patients have SOME residual insulin - enough to suppress lipolysis but not enough to prevent hyperglycemia.',
        'dvt': 'HHS is a hypercoagulable state. All HHS patients should receive pharmacologic DVT prophylaxis.'
    }
,
    evidenceBase: {
        guidelines: [
                  "ADA Standards of Care 2024",
                  "AACE/ACE Consensus Statement"
        ],
        keyEvidence: [
                  "More profound dehydration than DKA (up to 9L deficit)",
                  "Slower glucose correction to prevent cerebral edema",
                  "Lower insulin requirements than DKA typically"
        ]
    }},

// ============================================================================
// RENAL / ELECTROLYTES (6 cases)
// ============================================================================

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
    relatedContent: [
        { type: 'parallel', title: 'Intrinsic AKI', link: 'mentor-chat.html?case=aki-intrinsic', reason: 'Compare pre-renal vs ATN' },
        { type: 'mechanism', title: 'AKI Module', link: 'mechanismdx-aki-module.html', reason: 'AKI pathophysiology' }
    ],
    defined_responses: {
        'fena': 'FENa of 0.4% is very low - the kidney is avidly holding onto sodium. Tubular function is intact. In ATN, FENa >2% because damaged tubules can\'t reabsorb sodium.',
        'bun cr ratio': 'BUN:Cr ratio is 68:3.8 = about 18:1. Elevated (>20:1 classic for pre-renal). In low-flow states, urea is passively reabsorbed.',
        'ace inhibitor': 'Hold the lisinopril! He\'s volume depleted, relying on angiotensin II to maintain GFR via efferent constriction.',
        'fluids': 'Start with isotonic saline - 1-2L bolus, then reassess. In CHF patients, we walk a fine line - too much fluid and we tip him into pulmonary edema.'
    }
,
    evidenceBase: {
        guidelines: [
                  "KDIGO AKI Guidelines 2012",
                  "NICE AKI Guidelines 2019"
        ],
        keyEvidence: [
                  "FeNa <1% suggests prerenal (off diuretics)",
                  "Fluid challenge diagnostic and therapeutic",
                  "Avoid nephrotoxins, adjust renally-cleared medications"
        ],
        openAccessLinks: ["https://kdigo.org/guidelines/acute-kidney-injury/"]
    }},

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
    relatedContent: [
        { type: 'parallel', title: 'Pre-renal AKI', link: 'mentor-chat.html?case=aki-prerenal', reason: 'Compare ATN vs pre-renal' },
        { type: 'mechanism', title: 'AKI Module', link: 'mechanismdx-aki-module.html', reason: 'ATN pathophysiology' }
    ],
    defined_responses: {
        'muddy brown casts': 'Pathognomonic for ATN! Sloughed tubular epithelial cells forming casts. RBC casts would suggest glomerulonephritis instead.',
        'fena high': 'FENa is 3.2% because damaged tubules CAN\'T reabsorb sodium properly. In pre-renal, tubules work fine and hold onto sodium (FENa <1%).',
        'dialysis': 'Dialysis is for complications, not the creatinine number. Remember AEIOU: Acidosis, Electrolytes (hyperkalemia), Ingestions, Overload, Uremia.',
        'prognosis': 'Most ischemic ATN recovers in 1-3 weeks. Bad prognostic factors: Prolonged oliguria, need for dialysis, pre-existing CKD.'
    }
,
    evidenceBase: {
        guidelines: [
                  "KDIGO AKI Guidelines 2012",
                  "NICE AKI Guidelines 2019"
        ],
        keyEvidence: [
                  "FeNa >2% suggests intrinsic renal disease",
                  "Urinalysis with muddy brown casts indicates ATN",
                  "Supportive care - no proven pharmacologic therapy for ATN"
        ],
        openAccessLinks: ["https://kdigo.org/guidelines/acute-kidney-injury/"]
    }},

'hyponatremia-siadh': {
    id: 'hyponatremia-siadh',
    title: 'Hyponatremia - SIADH',
    category: 'Renal/Electrolytes',
    isParallel: false,
    parallelCase: 'hyponatremia-hypovolemic',
    parallelDescription: 'Hypovolemic Hyponatremia',
    patient: { name: 'Robert Kim', age: 68, sex: 'Male', setting: 'Inpatient', acuity: 'Medium', chiefComplaint: 'Confusion' },
    description: 'A 68-year-old man admitted for pneumonia is found to have Na 118. He\'s confused but hemodynamically stable. Euvolemic on exam. He has small cell lung cancer diagnosed 2 months ago. Urine Na 45, urine osm 520, serum osm 248.',
    openingStatement: 'Mr. Kim has severe hyponatremia in the setting of SCLC and pneumonia - classic SIADH setup. How do you approach hyponatremia workup and management?',
    quickActions: ['Assess volume status', 'Check urine studies', 'How fast to correct?', 'Need hypertonic saline?', 'What caused SIADH?'],
    keyTeachingPoints: [
        'Volume status is KEY: Hypovolemic, Euvolemic, Hypervolemic',
        'SIADH criteria: Euvolemic, Urine osm >100, Urine Na >40, Low serum osm',
        'Correction limit: 8-10 mEq/L in 24 hours to prevent osmotic demyelination',
        'Hypertonic saline only for severe symptoms (seizures, obtundation)',
        'Treat underlying cause when possible'
    ],
    relatedContent: [
        { type: 'parallel', title: 'Hypovolemic Hyponatremia', link: 'mentor-chat.html?case=hyponatremia-hypovolemic', reason: 'Compare euvolemic vs hypovolemic' },
        { type: 'mechanism', title: 'Hyponatremia Module', link: 'mechanismdx-hyponatremia-module.html', reason: 'Hyponatremia pathophysiology' }
    ],
    defined_responses: {
        'volume status': 'He appears euvolemic - no edema, no dehydration signs. Euvolemic hyponatremia: SIADH, hypothyroidism, adrenal insufficiency. With his SCLC... SIADH is leading diagnosis.',
        'urine studies': 'Urine Na 45 (>40 in SIADH), Urine osm 520 (>100 - inappropriately concentrated). In SIADH, the kidney is concentrating urine when it should be diluting it.',
        'correction rate': 'THE most important principle: Correct slowly to prevent osmotic demyelination. Target: 8-10 mEq/L in first 24 hours. His Na is 118, so target 126-128.',
        'hypertonic saline': 'Reserved for SEVERE symptoms: seizures, coma. He\'s confused but not seizing. Start with fluid restriction (1-1.5L/day).',
        'siadh cause': 'SCLC is classic - tumor produces ectopic ADH. Other causes: CNS disorders, pulmonary disease (he has pneumonia!), medications, pain, nausea.'
    }
,
    evidenceBase: {
        guidelines: [
                  "European Hyponatremia Guidelines 2014",
                  "JASN Expert Panel 2015"
        ],
        keyEvidence: [
                  "Correction rate <8-10 mEq/L per 24 hours to prevent ODS",
                  "Hypertonic saline for severe symptomatic hyponatremia",
                  "Fluid restriction first-line for chronic SIADH"
        ],
        openAccessLinks: ["https://academic.oup.com/ndt/article/29/suppl_2/i1/1904943"]
    }},

'hyponatremia-hypovolemic': {
    id: 'hyponatremia-hypovolemic',
    title: 'Hyponatremia - Hypovolemic',
    category: 'Renal/Electrolytes',
    isParallel: true,
    parallelCase: 'hyponatremia-siadh',
    parallelDescription: 'SIADH',
    patient: { name: 'Maria Santos', age: 78, sex: 'Female', setting: 'Emergency', acuity: 'Medium', chiefComplaint: 'Weakness and Dizziness' },
    description: 'A 78-year-old woman on hydrochlorothiazide presents with 4 days of diarrhea, now weak and dizzy. Orthostatic (BP 142/78 lying → 98/62 standing). Dry mucous membranes, poor skin turgor. Na 126, urine Na 8, urine osm 650.',
    openingStatement: 'Mrs. Santos has hyponatremia with clear volume depletion from diarrhea, plus she\'s on a thiazide. How does hypovolemic hyponatremia differ in workup and management from SIADH?',
    quickActions: ['Check orthostatics', 'What does low urine Na mean?', 'Normal saline appropriate?', 'Stop the thiazide?', 'Monitor for overcorrection'],
    keyTeachingPoints: [
        'Low urine Na (<20) in hyponatremia = hypovolemic (kidney conserving Na)',
        'Thiazides are notorious cause of hyponatremia',
        'Treatment: Volume repletion with isotonic saline',
        'Watch for rapid autocorrection as volume restored',
        'May need D5W or desmopressin if correcting too fast'
    ],
    relatedContent: [
        { type: 'parallel', title: 'SIADH', link: 'mentor-chat.html?case=hyponatremia-siadh', reason: 'Compare hypovolemic vs euvolemic' },
        { type: 'mechanism', title: 'Hyponatremia Module', link: 'mechanismdx-hyponatremia-module.html', reason: 'Hyponatremia pathophysiology' }
    ],
    defined_responses: {
        'urine na': 'Her urine Na is 8 - very low. In hypovolemic hyponatremia, the kidney is appropriately conserving sodium. Compare to SIADH where urine Na is >40.',
        'normal saline': 'Yes! Unlike SIADH where we fluid restrict, here we GIVE isotonic saline. Once we restore volume, ADH will suppress and sodium will correct.',
        'thiazide': 'Absolutely stop the thiazide! Thiazides cause hyponatremia by blocking the diluting segment, volume depletion, and increasing ADH sensitivity.',
        'overcorrection': 'Critical point! Once you give volume, ADH turns off and she may have massive water diuresis - correcting too fast. If she corrects >8-10 mEq/L in 24h, you need to RELOWER sodium with D5W or desmopressin.'
    }
,
    evidenceBase: {
        guidelines: [
                  "European Hyponatremia Guidelines 2014",
                  "JASN Expert Panel 2015"
        ],
        keyEvidence: [
                  "Volume repletion with isotonic saline is primary treatment",
                  "Monitor for overcorrection as ADH suppresses with volume restoration",
                  "Correction rate <8-10 mEq/L per 24 hours"
        ]
    }},

// ============================================================================
// NEUROLOGY (5 cases)
// ============================================================================

'altered-mental-status': {
    id: 'altered-mental-status', title: 'Altered Mental Status', category: 'Neurology',
    isParallel: false, parallelCase: 'stroke-acute',
    parallelDescription: 'Acute stroke',
    patient: { name: 'Dorothy Williams', age: 74, sex: 'Female', setting: 'Emergency', acuity: 'High', chiefComplaint: 'Confusion' },
    description: 'A 74-year-old woman was found confused at home by her daughter. She was fine yesterday but today doesn\'t recognize family. History of T2DM, HTN, and mild dementia. Meds: metformin, lisinopril, donepezil.',
    openingStatement: 'Mrs. Williams is a 74-year-old brought in by her daughter who says "Mom isn\'t acting right." She has baseline mild dementia but this is different. Where do you want to start?',
    conceptDomains: {
        'History': ['baseline_status', 'timeline', 'recent_illness', 'medications'],
        'Physical Exam': ['vitals', 'neuro_exam', 'mental_status_exam'],
        'Pathophysiology': ['delirium_vs_dementia', 'metabolic_causes'],
        'Workup': ['labs', 'ua', 'ct_head'],
        'Management': ['treat_underlying', 'supportive_care']
    },
    quickActions: ['Baseline mental status?', 'Check glucose', 'UA', 'CT head needed?'],
    relatedContent: [
        { type: 'mechanism', title: 'Delirium', link: 'mechanismdx-stroke-module.html', reason: 'AMS pathophysiology' }
    ]
,
    evidenceBase: {
        guidelines: [
                  "AAN Delirium Quality Measures",
                  "AGS Delirium Guidelines"
        ],
        keyEvidence: [
                  "Mnemonic: I WATCH DEATH (causes of delirium)",
                  "Nonpharmacologic interventions first-line",
                  "Avoid deliriogenic medications (anticholinergics, benzos)"
        ]
    }},

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
        'Similar to prior headaches is reassuring'
    ],
    relatedContent: [
        { type: 'parallel', title: 'SAH', link: 'mentor-chat.html?case=headache-sah', reason: 'Compare benign vs dangerous headache' }
    ],
    defined_responses: {
        'red flags': 'Key reassuring features: Similar to prior headaches, gradual onset, preceded by typical aura, no fever, no neuro deficits.',
        'need imaging': 'Not with classic presentation similar to prior migraines. Image if: First/worst headache, thunderclap, new after 50, focal neuro findings.',
        'treatment': 'Acute: Triptans are first-line if no contraindications. Add antiemetic for nausea.',
        'prevention': 'Consider if ≥4 migraines/month. Options: Beta-blockers, topiramate, CGRP inhibitors.'
    }
,
    evidenceBase: {
        guidelines: [
                  "AHS Migraine Treatment Guidelines 2021",
                  "AAN Migraine Practice Guidelines"
        ],
        keyEvidence: [
                  "NSAIDs and triptans are first-line for acute migraine",
                  "Antiemetics (metoclopramide) have independent analgesic effect",
                  "IV fluids commonly used but evidence limited"
        ]
    }},

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
    relatedContent: [
        { type: 'parallel', title: 'Migraine', link: 'mentor-chat.html?case=headache-migraine', reason: 'Compare benign vs dangerous headache' },
        { type: 'mechanism', title: 'Stroke Module', link: 'mechanismdx-stroke-module.html', reason: 'Hemorrhagic stroke pathophysiology' }
    ],
    defined_responses: {
        'workup': 'Stat non-contrast CT head. If within 6 hours, sensitivity >95-98%. If negative AND high clinical suspicion, LP is MANDATORY.',
        'ct negative': 'Does NOT rule out SAH if clinical suspicion is high! LP is required. Check RBC count in tubes 1 and 4, and xanthochromia.',
        'sah confirmed': 'Neurosurgery STAT. CTA to identify aneurysm. Admit to ICU. Control BP (target SBP <160), nimodipine for vasospasm prevention.',
        'vasospasm': 'Delayed cerebral ischemia peaks days 4-14 post-SAH. Nimodipine reduces poor outcomes.'
    }
,
    evidenceBase: {
        guidelines: [
                  "AHA/ASA SAH Guidelines 2023",
                  "ACEP Clinical Policy Headache"
        ],
        keyEvidence: [
                  "'Worst headache of life' sensitivity ~80% for SAH",
                  "CT sensitivity ~98% within 6 hours, decreases after",
                  "LP if CT negative and clinical suspicion remains"
        ]
    }},

'seizure-firsttime': {
    id: 'seizure-firsttime',
    title: 'First-Time Seizure',
    category: 'Neurology',
    isParallel: false,
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
        'seizure vs syncope': 'Key features: Lateral tongue biting (very specific!), prolonged confusion (postictal), witnessed tonic-clonic >30 seconds.',
        'workup': 'First unprovoked seizure: Basic labs, toxicology, MRI brain, EEG. LP only if concern for CNS infection.',
        'aeds': 'Not necessarily! After single unprovoked seizure, recurrence risk ~35%. Treat if: Abnormal EEG, structural lesion, or patient preference.',
        'driving': 'Cannot drive until seizure-free for state-mandated period (usually 3-12 months).'
    }
,
    evidenceBase: {
        guidelines: [
                  "AAN First Seizure Guidelines 2015",
                  "ILAE Guidelines"
        ],
        keyEvidence: [
                  "Recurrence risk ~40% after first unprovoked seizure",
                  "Antiepileptic drugs reduce recurrence but not long-term remission",
                  "Driving restrictions vary by state"
        ],
        openAccessLinks: ["https://www.aan.com/Guidelines/home/GuidelineDetail/717"]
    }},

// ============================================================================
// HEMATOLOGY (3 cases)
// ============================================================================

'dvt': {
    id: 'dvt',
    title: 'DVT - Deep Vein Thrombosis',
    category: 'Hematology',
    isParallel: false,
    parallelCase: 'svt',
    parallelDescription: 'Superficial Venous Thrombosis',
    patient: { name: 'James Morrison', age: 55, sex: 'Male', setting: 'Emergency', acuity: 'Medium', chiefComplaint: 'Swollen Leg' },
    description: 'A 55-year-old returns from a 2-week European vacation with 3 days of left calf pain and swelling. Left calf 4cm larger than right, pitting edema to knee, warmth. No SOB or chest pain. History of prostate cancer in remission.',
    openingStatement: 'Mr. Morrison has a swollen leg after long travel and history of malignancy. Walk me through your Wells score calculation and diagnostic approach.',
    quickActions: ['Calculate Wells score', 'D-dimer useful here?', 'When to get ultrasound?', 'Start anticoagulation?', 'Cancer history implications?'],
    keyTeachingPoints: [
        'Wells score stratifies pre-test probability for DVT',
        'Moderate/high probability → ultrasound directly; Low → D-dimer first',
        'Negative D-dimer with low pre-test probability rules out DVT',
        'Provoked vs unprovoked DVT affects anticoagulation duration',
        'Cancer-associated DVT: LMWH preferred historically; DOACs increasingly used'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'VTE & PE Module', link: 'mechanismdx-vte-pe-module.html', reason: 'DVT pathophysiology' },
        { type: 'parallel', title: 'SVT Case', link: 'mentor-chat.html?case=svt', reason: 'Compare DVT vs SVT' }
    ],
    defined_responses: {
        'wells score': 'Let\'s calculate: Active cancer (+1), Paralysis/immobilization (0), Bedridden >3 days/surgery (0), Localized tenderness (+1), Entire leg swollen (+1), Calf >3cm difference (+1), Pitting edema (+1), Collateral veins (0), Alternative diagnosis (-2 if yes, 0 here). Total = 5 points = HIGH probability.',
        'd dimer': 'With HIGH pre-test probability, D-dimer is not helpful. Even if negative, you still need imaging. Go straight to compression ultrasound.',
        'anticoagulation': 'Yes, start therapeutic anticoagulation! In high-probability DVT, it\'s reasonable to anticoagulate while awaiting imaging. Options: DOAC (rivaroxaban, apixaban) or LMWH bridge to warfarin.',
        'cancer': 'Important! Cancer-associated VTE has higher recurrence risk. Traditionally LMWH was preferred, but DOACs (edoxaban, rivaroxaban) are now options. Extended anticoagulation often indicated while cancer active.'
    }
,
    evidenceBase: {
        guidelines: [
                  "ASH VTE Guidelines 2020",
                  "ACCP VTE Guidelines (CHEST) 2016"
        ],
        keyEvidence: [
                  "Wells score + D-dimer for risk stratification",
                  "DOACs preferred for most VTE",
                  "Minimum 3 months anticoagulation for provoked VTE"
        ]
    }},

'svt': {
    id: 'svt',
    title: 'Superficial Venous Thrombosis',
    category: 'Hematology',
    isParallel: true,
    parallelCase: 'dvt',
    parallelDescription: 'Deep Vein Thrombosis',
    patient: { name: 'Linda Chen', age: 45, sex: 'Female', setting: 'Urgent Care', acuity: 'Low', chiefComplaint: 'Painful Red Cord on Leg' },
    description: 'A 45-year-old woman notices a painful, red, firm "cord" on her inner right thigh × 4 days. No recent immobilization or travel. Palpable tender cord along great saphenous vein distribution, surrounding erythema. No calf swelling.',
    openingStatement: 'Mrs. Chen has what appears to be superficial venous thrombosis. How does our approach differ from DVT? When do we worry about extension?',
    quickActions: ['Need imaging?', 'DVT vs SVT distinction', 'When to anticoagulate SVT?', 'NSAID treatment', 'Proximity to SFJ?'],
    keyTeachingPoints: [
        'SVT presents as palpable, tender cord with surrounding erythema',
        'Get duplex ultrasound to: confirm SVT, rule out concomitant DVT, assess proximity to SFJ',
        'SVT within 3cm of saphenofemoral junction (SFJ) = higher DVT/PE risk',
        'Treatment: NSAIDs, warm compresses for uncomplicated; anticoagulation for extensive or near SFJ',
        'Consider hypercoagulable workup if recurrent without clear risk factors'
    ],
    relatedContent: [
        { type: 'parallel', title: 'DVT Case', link: 'mentor-chat.html?case=dvt', reason: 'Compare DVT vs SVT' },
        { type: 'mechanism', title: 'VTE Module', link: 'mechanismdx-vte-pe-module.html', reason: 'Venous thrombosis pathophysiology' }
    ],
    defined_responses: {
        'imaging': 'Yes, get duplex ultrasound! Important to: 1) Confirm SVT diagnosis, 2) Rule out concomitant DVT (6-40% have concurrent DVT!), 3) Assess distance from saphenofemoral junction.',
        'sfj proximity': 'If SVT is within 3cm of the saphenofemoral junction, it can extend into the common femoral vein → DVT and PE risk. This changes management to anticoagulation.',
        'treatment': 'Uncomplicated SVT away from SFJ: NSAIDs (ibuprofen 400-800mg TID), warm compresses, compression stockings. Symptoms usually resolve in 1-3 weeks.',
        'anticoagulate': 'Anticoagulation indicated when: Within 3cm of SFJ, extensive (>5cm) SVT in great saphenous vein, progressive extension, or concomitant DVT found.'
    }
,
    evidenceBase: {
        guidelines: [
                  "ACC/AHA/HRS SVT Guideline 2015",
                  "ESC SVT Guidelines 2019"
        ],
        keyEvidence: [
                  "Vagal maneuvers first-line (Valsalva, carotid massage)",
                  "Adenosine 6mg → 12mg → 12mg rapid IV push",
                  "Synchronized cardioversion if unstable"
        ]
    }},

'anemia-workup': {
    id: 'anemia-workup', title: 'Anemia Workup', category: 'Hematology',
    patient: { name: 'Sarah Mitchell', age: 45, sex: 'Female', setting: 'Outpatient', acuity: 'Low', chiefComplaint: 'Fatigue' },
    description: 'A 45-year-old woman with 3 months of progressive fatigue. Labs: Hgb 8.2, MCV 68, ferritin 8. Heavy menstrual periods, vegetarian for 2 years. Some dyspepsia.',
    openingStatement: 'Ms. Mitchell came in for fatigue and her labs show microcytic anemia with low ferritin. Walk me through your approach to anemia.',
    conceptDomains: {
        'History': ['bleeding_history', 'diet', 'menstrual_history', 'gi_symptoms'],
        'Physical Exam': ['pallor', 'koilonychia', 'glossitis'],
        'Pathophysiology': ['iron_metabolism', 'mcv_classification'],
        'Workup': ['iron_studies', 'reticulocyte', 'gi_workup'],
        'Management': ['iron_replacement', 'treat_underlying', 'gi_referral']
    },
    quickActions: ['Interpret iron studies', 'MCV classification', 'Need GI workup?', 'Iron replacement options'],
    relatedContent: [
        { type: 'mechanism', title: 'Anemia Module', link: 'mechanismdx-anemia-module.html', reason: 'Anemia pathophysiology' }
    ]
,
    evidenceBase: {
        guidelines: [
                  "ASH Anemia Guidelines 2021",
                  "KDIGO Anemia Guidelines (CKD)"
        ],
        keyEvidence: [
                  "MCV classifies as microcytic, normocytic, macrocytic",
                  "Reticulocyte count differentiates production vs destruction",
                  "Iron studies: ferritin + TIBC most useful"
        ]
    }}

};

// Export for use in mentor-chat.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_CASES;
}
