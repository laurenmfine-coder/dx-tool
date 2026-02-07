// ============================================================================
// COACHDX CARDIOLOGY CASE PACK
// SBAR scenarios for cardiology communication training
// Created: January 29, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================
//
// CASES INCLUDED:
// 1. STEMI - Door to Balloon Activation
// 2. Acute Decompensated Heart Failure - Flash Pulmonary Edema
// 3. Complete Heart Block - Symptomatic Bradycardia
// 4. Aortic Dissection - Type A
// 5. Cardiac Tamponade - Beck's Triad
//
// ============================================================================

const COACHDX_CARDIOLOGY_CASES = {

// ============================================================================
// CASE 1: STEMI - CATH LAB ACTIVATION
// ============================================================================

'stemi-cath-activation': {
    id: 'stemi-cath-activation',
    title: 'STEMI - Cath Lab Activation',
    category: 'Cardiology',
    isParallel: false,
    parallelCase: 'nstemi-management',
    parallelDescription: 'NSTEMI - urgent but not emergent cath',
    patient: { 
        name: 'Robert Johnson', 
        age: 58, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Crushing Chest Pain' 
    },
    description: 'A 58-year-old man with HTN, diabetes, and smoking presents with 45 minutes of crushing substernal chest pressure radiating to left arm, diaphoresis. HR 92, BP 148/88, SpO2 96%. ECG shows 4mm ST elevation V1-V4 with reciprocal changes in inferior leads. Troponin pending.',
    openingStatement: 'Mr. Johnson has an anterior STEMI - the clock is ticking on his myocardium. Door-to-balloon time target is 90 minutes. How do you activate the cath lab and communicate the urgency?',
    conceptDomains: {
        'Situation': ['ecg_findings', 'symptom_duration', 'hemodynamic_status'],
        'Background': ['cardiac_risk_factors', 'contraindications_to_intervention'],
        'Assessment': ['stemi_criteria', 'culprit_vessel', 'killip_class'],
        'Recommendation': ['cath_lab_activation', 'adjunctive_therapy', 'transfer_if_no_pci']
    },
    quickActions: [
        'What are the STEMI criteria?',
        'What medications should he get?',
        'What if we don\'t have a cath lab?',
        'Do I wait for troponin?'
    ],
    keyTeachingPoints: [
        'STEMI = ST elevation ≥1mm in 2+ contiguous leads (≥2mm in V2-V3 for men)',
        'Door-to-balloon target: <90 minutes for PCI-capable, <120 minutes for transfer',
        'Don\'t wait for troponin - STEMI is an ECG diagnosis',
        'Adjunctive therapy: ASA 325mg, P2Y12 inhibitor, anticoagulation, consider GP IIb/IIIa',
        'His anterior STEMI (V1-V4) = LAD territory - high-risk with large area at jeopardy'
    ],
    sbarTemplate: {
        situation: 'I\'m activating the cath lab for a STEMI. I have a 58-year-old man with 45 minutes of chest pain and an ECG showing anterior ST elevation V1-V4.',
        background: 'He has hypertension, diabetes, and smokes - multiple risk factors. No contraindications to anticoagulation or PCI that I know of. He can lay flat.',
        assessment: 'This is an acute anterior STEMI - likely LAD occlusion. He\'s Killip class I - no heart failure yet. Large territory at risk. Time is myocardium.',
        recommendation: 'Cath lab activated. He\'s getting aspirin, ticagrelor, and heparin now. ETA to cath lab should be within 30 minutes to hit our door-to-balloon target. Is the interventionalist aware?'
    },
    defined_responses: {
        'stemi criteria': 'STEMI criteria: ST elevation ≥1mm in ≥2 contiguous leads, OR ≥2mm in V2-V3 for men (≥1.5mm for women), OR new LBBB with ischemic symptoms. His 4mm elevation in V1-V4 clearly meets criteria. Reciprocal changes (inferior ST depression) support the diagnosis.',
        'medications': 'Immediate: ASA 325mg (chewed), P2Y12 inhibitor (ticagrelor 180mg or clopidogrel 600mg), anticoagulation (UFH or bivalirudin per protocol). Consider: GP IIb/IIIa inhibitor, nitro for pain (avoid if hypotensive or RV infarct), morphine sparingly. AVOID thrombolytics if going to cath.',
        'no cath lab': 'If no PCI capability: (1) Transfer to PCI center if can achieve door-to-balloon <120 min, (2) If transfer time >120 min, give thrombolytics (TNK or tPA) within 30 min of arrival, then transfer for rescue PCI if needed. Fibrinolytics are second-line to PCI.',
        'troponin': 'Do NOT wait for troponin! STEMI is an ECG diagnosis. Troponin may be negative early or in patients presenting within 1-2 hours. His 45-minute symptom duration means troponin might still be undetectable. Treat the ECG.',
        'culprit vessel': 'Anterior ST elevation (V1-V4) = LAD territory. Lateral involvement (V5-V6, I, aVL) suggests proximal LAD or large LAD. Reciprocal inferior changes support LAD. This is a "widow-maker" location with significant mortality risk - urgent reperfusion critical.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'ACS Module', link: '../mechanism/acs-module.html', reason: 'Understand plaque rupture and MI pathophysiology' },
        { type: 'reasondx', title: 'ACS Adventure', link: '../ReasonDx/adventure-cases/acs-expanded.html', reason: 'Practice ACS workup' },
        { type: 'reasondx', title: 'ECG Quiz', link: '../ReasonDx/ecg/ecg-quiz.html', reason: 'STEMI recognition' }
    ],
    evidenceBase: {
        guidelines: [
            "AHA/ACC STEMI Guidelines 2021",
            "ESC STEMI Guidelines 2017"
        ],
        keyEvidence: [
            "Primary PCI superior to fibrinolytics when available within time window",
            "Door-to-balloon <90 min associated with better outcomes",
            "Every 30-minute delay increases mortality ~7.5%",
            "Dual antiplatelet therapy before PCI improves outcomes"
        ],
        openAccessLinks: [
            "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000950"
        ]
    }
},

// ============================================================================
// CASE 2: FLASH PULMONARY EDEMA
// ============================================================================

'flash-pulmonary-edema': {
    id: 'flash-pulmonary-edema',
    title: 'Acute HF - Flash Pulmonary Edema',
    category: 'Cardiology',
    isParallel: false,
    parallelCase: 'acute-hf-decompensation',
    parallelDescription: 'Gradual HF decompensation',
    patient: { 
        name: 'Eleanor Williams', 
        age: 74, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Can\'t Breathe' 
    },
    description: 'A 74-year-old woman with HFrEF (EF 25%), HTN, and renal artery stenosis presents with acute dyspnea woke her from sleep 2 hours ago. Pink frothy sputum, sitting bolt upright. HR 112, BP 198/108, RR 32, SpO2 82% on NRB. Diffuse crackles, JVD, S3 gallop. BNP 2,840. CXR: bilateral pulmonary edema.',
    openingStatement: 'Mrs. Williams has flash pulmonary edema - she\'s drowning in her own fluid with severely elevated blood pressure driving it. She needs aggressive treatment NOW. What\'s your approach?',
    conceptDomains: {
        'Situation': ['respiratory_status', 'blood_pressure', 'volume_status'],
        'Background': ['hf_history', 'ef', 'renal_artery_stenosis'],
        'Assessment': ['flash_vs_gradual_decompensation', 'precipitant', 'niv_candidacy'],
        'Recommendation': ['niv_initiation', 'vasodilators', 'diuretics', 'morphine_consideration']
    },
    quickActions: [
        'What makes this "flash" pulmonary edema?',
        'Why is her BP so high?',
        'BiPAP or diuretics first?',
        'Should I give morphine?'
    ],
    keyTeachingPoints: [
        'Flash pulmonary edema = acute, rapid-onset pulmonary edema, often with preserved or elevated BP',
        'Common triggers: Severe HTN, ACS, acute MR, renal artery stenosis, medication non-compliance',
        'Treatment priorities: Sit upright, NIV (reduces preload/afterload), IV vasodilators for HTN',
        'Diuretics less immediately effective than vasodilators in flash edema',
        'Renal artery stenosis + flash edema = classic association (Pickering syndrome)'
    ],
    sbarTemplate: {
        situation: 'I have a 74-year-old woman with flash pulmonary edema. She\'s severely hypoxic at 82% on high-flow O2 with a BP of 198/108. She\'s in acute respiratory distress with pink frothy sputum.',
        background: 'She has HFrEF with EF 25%, hypertension, and known renal artery stenosis - which is a classic cause of flash edema. She woke from sleep 2 hours ago unable to breathe.',
        assessment: 'This is flash pulmonary edema likely triggered by hypertensive crisis in the setting of her renal artery stenosis. She needs urgent afterload reduction and respiratory support.',
        recommendation: 'Starting BiPAP now for respiratory support. Giving IV nitroglycerin to reduce preload and afterload. Furosemide IV as well. If she doesn\'t improve rapidly on NIV, she may need intubation. Can cardiology come urgently?'
    },
    defined_responses: {
        'flash vs gradual': 'Flash pulmonary edema: Acute onset (minutes to hours), often hypertensive, less total body volume overload. Gradual decompensation: Days to weeks, more peripheral edema, often euvolemic or hypotensive. Her 2-hour onset with HTN = flash edema.',
        'why hypertensive': 'Flash edema is often triggered BY hypertension - the elevated afterload causes acute LV failure and pulmonary congestion. Her renal artery stenosis causes renovascular hypertension (Pickering syndrome). Also consider ACS, acute MR, or arrhythmia as triggers.',
        'treatment priority': 'Priority is AFTERLOAD REDUCTION, not just diuresis. Start with: (1) Sit upright - immediate preload reduction, (2) BiPAP - reduces preload AND afterload, (3) IV nitroglycerin or nitroprusside for BP, (4) Furosemide - but works slower than vasodilators in acute phase.',
        'morphine': 'Morphine was traditionally used but is now DISCOURAGED. Studies show increased mortality, intubation, and ICU admissions with morphine in acute HF. Use sparingly only for severe anxiety uncontrolled by NIV. Better anxiolysis from NIV itself.',
        'renal artery stenosis': 'Bilateral renal artery stenosis (or stenosis of sole kidney) causes volume-dependent hypertension. ACEi/ARBs are dangerous - cause AKI. Flash edema is classic presentation (Pickering syndrome). May need renal artery revascularization for definitive treatment.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Heart Failure Module', link: '../mechanism/hf-module.html', reason: 'Understand HF pathophysiology' },
        { type: 'reasondx', title: 'Heart Failure Adventure', link: '../ReasonDx/adventure-cases/heart-failure-expanded.html', reason: 'Practice HF management' },
        { type: 'reasondx', title: 'Heart Failure Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=heart-failure-deep-dive', reason: 'ACC/AHA HF guidelines' }
    ],
    evidenceBase: {
        guidelines: [
            "AHA/ACC/HFSA Heart Failure Guidelines 2022",
            "ESC Acute Heart Failure Guidelines 2021"
        ],
        keyEvidence: [
            "NIV reduces intubation and mortality in acute cardiogenic pulmonary edema",
            "Morphine associated with worse outcomes - avoid routine use",
            "Vasodilators may be more rapidly effective than diuretics in flash edema",
            "Renal artery stenosis is treatable cause of recurrent flash edema"
        ],
        openAccessLinks: [
            "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063"
        ]
    }
},

// ============================================================================
// CASE 3: COMPLETE HEART BLOCK
// ============================================================================

'complete-heart-block': {
    id: 'complete-heart-block',
    title: 'Complete Heart Block - Symptomatic',
    category: 'Cardiology',
    isParallel: false,
    parallelCase: 'second-degree-mobitz-2',
    parallelDescription: 'Mobitz II - intermittent block',
    patient: { 
        name: 'George Harrison', 
        age: 78, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Passed Out' 
    },
    description: 'A 78-year-old man with HTN presents after witnessed syncope while standing. Wife says he was "pale as a ghost." Now alert but fatigued. HR 34, BP 88/52, regular rhythm. ECG shows complete AV dissociation - P waves marching through at 80/min, QRS at 34/min with wide escape. No chest pain.',
    openingStatement: 'Mr. Harrison has complete heart block with hemodynamic compromise - his ventricles are barely keeping him alive at 34 bpm. He needs pacing. What\'s your approach?',
    conceptDomains: {
        'Situation': ['heart_rate', 'blood_pressure', 'ecg_findings', 'symptoms'],
        'Background': ['cardiac_history', 'medications', 'recent_illness'],
        'Assessment': ['block_level', 'stability', 'etiology'],
        'Recommendation': ['chronotropic_agents', 'transcutaneous_pacing', 'transvenous_pacing']
    },
    quickActions: [
        'What defines complete heart block?',
        'Atropine or pacing first?',
        'How do I set up transcutaneous pacing?',
        'What caused this?'
    ],
    keyTeachingPoints: [
        'Complete (3rd degree) AV block: NO conduction from atria to ventricles - complete AV dissociation',
        'Narrow escape = junctional (40-60 bpm), wide escape = ventricular (20-40 bpm) - his is wide/ventricular',
        'Atropine usually ineffective in infranodal block (wide QRS) - go straight to pacing',
        'Transcutaneous pacing is bridge to transvenous pacing',
        'Causes: Degenerative (Lenegre/Lev disease), ischemic, drugs, infection (Lyme), post-surgical'
    ],
    sbarTemplate: {
        situation: 'I have a 78-year-old man with complete heart block. Heart rate is 34 with a wide QRS escape rhythm, and he\'s hypotensive at 88/52. He just had syncope.',
        background: 'He has hypertension but no known cardiac disease. Not on any rate-controlling medications. No recent illness or chest pain. Wife says he\'s been fatigued for a few days.',
        assessment: 'This is complete AV block with ventricular escape - infranodal block. He\'s symptomatic with syncope and hypotension. Atropine is unlikely to work given the wide escape. He needs pacing.',
        recommendation: 'I\'m setting up transcutaneous pacing now. He needs emergent cardiology consult for transvenous pacer placement and workup for permanent pacemaker. Can EP or cardiology come urgently?'
    },
    defined_responses: {
        'chb definition': 'Complete heart block = complete AV dissociation with no relationship between P waves and QRS complexes. P waves "march through" at their own rate (usually 60-100), QRS has independent escape rhythm. His ECG shows P at 80/min and QRS at 34/min with no relationship.',
        'atropine vs pacing': 'Atropine works on the AV NODE (increases conduction). In infranodal block (wide QRS escape), the problem is BELOW the node - atropine won\'t help. His wide escape indicates infranodal block. Go straight to pacing. Atropine can try if narrow escape (junctional), but don\'t delay pacing for it.',
        'tcp setup': 'Transcutaneous pacing: (1) Pads anterior-posterior or anterior-lateral, (2) Set rate 60-80, (3) Increase output until capture (watch for wide QRS after each pacing spike), (4) Confirm mechanical capture with pulse/BP, (5) Sedate if patient conscious - it\'s painful. This is bridge to transvenous.',
        'causes': 'Causes of CHB: (1) Degenerative/fibrotic (Lenegre-Lev disease) - most common in elderly, (2) Ischemic - inferior MI affects AV node, anterior MI affects bundle branches, (3) Drugs - beta-blockers, CCBs, digoxin, (4) Infectious - Lyme disease, (5) Infiltrative - sarcoid, amyloid, (6) Post-cardiac surgery/TAVR.',
        'pacemaker': 'He will need a permanent pacemaker. Complete heart block is a Class I indication for PPM regardless of symptoms. Standard is dual-chamber pacemaker (DDD). Temporary transvenous pacing bridges to permanent implant.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Arrhythmia Module', link: '../mechanism/syncope-arrhythmia-module.html', reason: 'Understand conduction system' },
        { type: 'reasondx', title: 'Bradycardia Adventure', link: '../ReasonDx/adventure-cases/bradycardia-expanded.html', reason: 'Practice bradycardia workup' },
        { type: 'reasondx', title: 'ECG Quiz', link: '../ReasonDx/ecg/ecg-quiz.html', reason: 'Heart block recognition' }
    ],
    evidenceBase: {
        guidelines: [
            "AHA/ACC/HRS Bradycardia and Conduction Delay Guidelines 2018",
            "ESC Guidelines on Cardiac Pacing 2021"
        ],
        keyEvidence: [
            "Complete heart block is Class I indication for permanent pacemaker",
            "Atropine ineffective in infranodal block",
            "Transcutaneous pacing is effective bridge to transvenous/permanent",
            "Dual-chamber pacing preferred over single-chamber in most patients"
        ],
        openAccessLinks: [
            "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000628"
        ]
    }
},

// ============================================================================
// CASE 4: AORTIC DISSECTION TYPE A
// ============================================================================

'aortic-dissection-type-a': {
    id: 'aortic-dissection-type-a',
    title: 'Aortic Dissection - Type A',
    category: 'Cardiology',
    isParallel: false,
    parallelCase: 'aortic-dissection-type-b',
    parallelDescription: 'Type B - medical management',
    patient: { 
        name: 'William Chang', 
        age: 62, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Tearing Chest Pain' 
    },
    description: 'A 62-year-old man with poorly controlled HTN presents with sudden-onset severe "tearing" chest pain radiating to back. HR 98, BP 188/102 right arm vs 142/78 left arm, RR 22. Diastolic murmur at LSB. ECG shows inferior ST depression. CTA shows intimal flap in ascending aorta extending to arch.',
    openingStatement: 'Mr. Chang has a Type A aortic dissection - this is a surgical emergency with mortality increasing 1-2% per hour without intervention. The BP differential, new murmur, and imaging confirm it. How do you stabilize and coordinate emergent surgery?',
    conceptDomains: {
        'Situation': ['pain_characteristics', 'bp_differential', 'imaging_findings'],
        'Background': ['hypertension_history', 'marfan_features', 'other_risk_factors'],
        'Assessment': ['stanford_classification', 'complications', 'surgical_urgency'],
        'Recommendation': ['bp_hr_control', 'surgical_consultation', 'avoid_anticoagulation']
    },
    quickActions: [
        'Type A vs Type B?',
        'What\'s causing the murmur?',
        'Target BP and HR?',
        'Why can\'t I anticoagulate?'
    ],
    keyTeachingPoints: [
        'Stanford A: Involves ascending aorta (± descending) = SURGICAL EMERGENCY',
        'Stanford B: Descending aorta only, distal to left subclavian = usually medical management',
        'BP differential >20 mmHg suggests arch involvement with branch compromise',
        'New diastolic murmur = aortic regurgitation from dissection into aortic root',
        'Target: HR <60 first (reduce shear stress), then SBP 100-120'
    ],
    sbarTemplate: {
        situation: 'I have a 62-year-old man with Type A aortic dissection confirmed on CTA. He has a BP differential of 46 mmHg between arms, new aortic regurgitation murmur, and current BP 188/102.',
        background: 'He has poorly controlled hypertension. Pain is classic - sudden, tearing, radiating to back. No Marfan features. The dissection involves the ascending aorta and arch.',
        assessment: 'This is Stanford Type A - a surgical emergency. He has complications already: branch vessel involvement (BP differential) and aortic root involvement (AR murmur). Mortality increases 1-2% per hour without surgery.',
        recommendation: 'Starting esmolol to get HR <60, then nitroprusside for BP 100-120. Calling CT surgery for emergent repair. He needs ICU and OR as soon as possible. NO anticoagulation or thrombolytics. Can you help coordinate?'
    },
    defined_responses: {
        'type a vs b': 'Stanford classification: Type A = involves ascending aorta (regardless of extent) = SURGICAL. Type B = only descending aorta (distal to left subclavian) = usually medical unless complicated. His ascending aorta involvement makes this Type A requiring emergent surgery.',
        'murmur cause': 'New diastolic murmur = aortic regurgitation from dissection extending into aortic root and disrupting the aortic valve. This is a complication indicating proximal extension. Other complications: coronary involvement (MI), pericardial involvement (tamponade), branch vessel malperfusion.',
        'bp hr targets': 'Control HR FIRST (reduces dP/dt = shear stress on aortic wall), then BP. Target: HR <60 with IV beta-blocker (esmolol, labetalol), then SBP 100-120 with vasodilator (nitroprusside, nicardipine). NEVER give vasodilator before beta-blocker - reflex tachycardia worsens dissection.',
        'no anticoagulation': 'Anticoagulation (heparin, thrombolytics) can be FATAL - promotes bleeding into false lumen and can cause rupture. His ECG changes might tempt ACS treatment, but this is NOT the management. The ST changes are from dissection into coronary ostia or from hemodynamic compromise.',
        'surgery urgency': 'Type A dissection mortality without surgery: 1-2% per hour for first 48 hours. Even with surgery, mortality is 15-30%. But without surgery, it\'s nearly uniformly fatal. Time to OR is critical.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Aortic Dissection Module', link: '../mechanism/aortic-dissection-module.html', reason: 'Understand dissection pathophysiology' },
        { type: 'reasondx', title: 'Aortic Dissection Adventure', link: '../ReasonDx/adventure-cases/aortic-dissection-expanded.html', reason: 'Practice dissection workup' },
        { type: 'coachDx', title: 'Chest Pain ACS', link: 'mentor-chat.html?case=chest-pain-acs', reason: 'Differentiate from ACS' }
    ],
    evidenceBase: {
        guidelines: [
            "AHA/ACC Aortic Disease Guidelines 2022",
            "ESC Aortic Diseases Guidelines 2014"
        ],
        keyEvidence: [
            "Type A dissection is surgical emergency - medical management alone is nearly fatal",
            "Beta-blocker first, then vasodilator - never reverse",
            "Mortality 1-2% per hour without surgery",
            "CTA is imaging modality of choice (sensitivity >95%)"
        ],
        openAccessLinks: [
            "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106"
        ]
    }
},

// ============================================================================
// CASE 5: CARDIAC TAMPONADE
// ============================================================================

'cardiac-tamponade-becks': {
    id: 'cardiac-tamponade-becks',
    title: 'Cardiac Tamponade - Beck\'s Triad',
    category: 'Cardiology',
    isParallel: false,
    parallelCase: 'pericardial-effusion-stable',
    parallelDescription: 'Large effusion without tamponade',
    patient: { 
        name: 'Susan Miller', 
        age: 55, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Chest Pain and Lightheadedness' 
    },
    description: 'A 55-year-old woman with metastatic breast cancer (on chemo) presents with 2 days of dyspnea, chest pressure, and lightheadedness. HR 118, BP 82/68, pulsus paradoxus 18 mmHg, JVD, muffled heart sounds. ECG shows low voltage and electrical alternans. Bedside echo shows large circumferential effusion with RV diastolic collapse.',
    openingStatement: 'Mrs. Miller has cardiac tamponade - she has Beck\'s triad and echocardiographic evidence of hemodynamic compromise. She needs pericardiocentesis urgently. How do you stabilize and coordinate this procedure?',
    conceptDomains: {
        'Situation': ['becks_triad', 'pulsus_paradoxus', 'echo_findings'],
        'Background': ['cancer_history', 'chemo_status', 'symptom_progression'],
        'Assessment': ['tamponade_physiology', 'etiology', 'stability'],
        'Recommendation': ['iv_fluids', 'pericardiocentesis', 'avoid_diuretics_vasodilators']
    },
    quickActions: [
        'What is Beck\'s triad?',
        'What is pulsus paradoxus?',
        'Who does pericardiocentesis?',
        'Can I give fluids?'
    ],
    keyTeachingPoints: [
        'Beck\'s triad: Hypotension + JVD + muffled heart sounds (all 3 present in <40%)',
        'Pulsus paradoxus >10 mmHg (drop in SBP with inspiration) suggests tamponade',
        'Echo findings: Diastolic collapse of RA/RV, respiratory variation in flow, dilated IVC',
        'Tamponade is a CLINICAL diagnosis - effusion size doesn\'t determine tamponade',
        'Treatment: Pericardiocentesis. Avoid diuretics and vasodilators (worsen preload-dependent state)'
    ],
    sbarTemplate: {
        situation: 'I have a 55-year-old woman with cardiac tamponade. She has Beck\'s triad - hypotension at 82/68, JVD, and muffled heart sounds. Pulsus paradoxus is 18 mmHg. Echo confirms large effusion with RV collapse.',
        background: 'She has metastatic breast cancer on chemotherapy - malignant effusion is likely. She\'s been worsening over 2 days with dyspnea and lightheadedness.',
        assessment: 'This is tamponade physiology requiring urgent pericardiocentesis. She\'s preload-dependent - I\'m giving gentle IV fluids as a temporizing measure. The effusion is likely malignant.',
        recommendation: 'She needs urgent pericardiocentesis - is cardiology or interventional available? If not, I can attempt bedside echo-guided drainage. She should NOT get diuretics or vasodilators. Can we get cardiology and possibly CT surgery aware?'
    },
    defined_responses: {
        'becks triad': 'Beck\'s triad: (1) Hypotension (from decreased cardiac output), (2) JVD (from impaired venous return), (3) Muffled heart sounds (from fluid around heart). All three present in <40% of cases. She has all three - classic presentation.',
        'pulsus paradoxus': 'Pulsus paradoxus = SBP drop >10 mmHg with inspiration. Mechanism: Inspiration increases RV filling, but in tamponade the restricted pericardium forces the septum leftward, decreasing LV filling and output. Her 18 mmHg pulsus is significantly elevated.',
        'who does pericardiocentesis': 'Depends on institution: Cardiology, interventional cardiology, CT surgery, or trained emergency physician. Echo-guided approach is standard. Subxiphoid approach most common. If patient is unstable and no specialist available, emergency physician may need to perform bedside. OR drainage if loculated or surgical cause.',
        'fluids': 'YES - gentle IV fluids help in tamponade. The heart is preload-dependent because it can\'t fill adequately. Fluids increase RV filling pressure to overcome pericardial pressure. Give 250-500 mL boluses and reassess. AVOID diuretics (reduce preload) and vasodilators (worsen hypotension in preload-dependent state).',
        'malignant effusion': 'Malignant pericardial effusion is common in breast cancer, lung cancer, lymphoma, melanoma. After drainage, fluid should be sent for cytology. May need pericardial window to prevent recurrence. Discuss with oncology about prognosis and goals of care.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Cardiac Tamponade Module', link: '../mechanism/cardiac-tamponade-module.html', reason: 'Understand tamponade physiology' },
        { type: 'reasondx', title: 'Cardiac Tamponade Adventure', link: '../ReasonDx/adventure-cases/cardiac-tamponade-adventure.html', reason: 'Practice tamponade recognition' },
        { type: 'proceduredx', title: 'Pericardiocentesis', link: '../ProcedureDx/proceduredx-main.html?procedure=pericardiocentesis', reason: 'Pericardiocentesis technique' }
    ],
    evidenceBase: {
        guidelines: [
            "ESC Pericardial Diseases Guidelines 2015",
            "AHA Scientific Statement on Pericardial Diseases 2022"
        ],
        keyEvidence: [
            "Echo-guided pericardiocentesis has high success rate (>95%) and low complication rate",
            "Tamponade is clinical diagnosis - small effusions can tamponade, large may not",
            "Pulsus paradoxus >10 mmHg has high specificity for tamponade",
            "IV fluids provide temporary hemodynamic support while arranging drainage"
        ],
        openAccessLinks: [
            "https://academic.oup.com/eurheartj/article/36/42/2921/2293375"
        ]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_CARDIOLOGY_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_CARDIOLOGY_CASES);
}
