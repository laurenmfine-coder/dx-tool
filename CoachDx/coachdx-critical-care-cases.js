// ============================================================================
// COACHDX CRITICAL CARE CASE PACK
// High-acuity SBAR scenarios for ICU communication training
// Created: January 29, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================
//
// This module adds 5 critical care SBAR scenarios that link directly to
// existing ReasonDx adventures and MechanismDx modules for comprehensive
// cross-platform learning.
//
// CASES INCLUDED:
// 1. Septic Shock Escalation (links to sepsis-expanded)
// 2. ARDS Respiratory Failure (links to ards-module)
// 3. Massive PE with Hemodynamic Compromise (links to pe-expanded)
// 4. Acute Stroke - tPA Decision (links to stroke-expanded)
// 5. Cardiogenic Shock (links to shock-expanded, heart-failure)
//
// HOW TO USE:
// Add to mentor-chat.html or merge into coachdx-cases-with-guidelines.js
// ============================================================================

const COACHDX_CRITICAL_CARE_CASES = {

// ============================================================================
// CASE 1: SEPTIC SHOCK ESCALATION
// ============================================================================

'septic-shock-escalation': {
    id: 'septic-shock-escalation',
    title: 'Septic Shock - ICU Escalation',
    category: 'Critical Care',
    isParallel: false,
    parallelCase: 'sepsis-pneumonia',
    parallelDescription: 'Sepsis without shock',
    patient: { 
        name: 'William Torres', 
        age: 58, 
        sex: 'Male', 
        setting: 'Medical Floor → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Hypotension Despite Fluids' 
    },
    description: 'A 58-year-old admitted for pneumonia is now hypotensive despite 3L crystalloid. T 39.2°C, HR 124, BP 78/42, RR 32, SpO2 89% on 6L NC. Lactate rose from 2.4 to 5.8 mmol/L. Mental status declining. You need to call the ICU for urgent transfer.',
    openingStatement: 'Mr. Torres is deteriorating rapidly on the floor. He\'s septic and now in septic shock - refractory hypotension despite fluids with rising lactate. You need to give a clear, urgent SBAR to the ICU team. What do you say?',
    conceptDomains: {
        'Situation': ['patient_identification', 'current_status', 'urgency_level'],
        'Background': ['admission_diagnosis', 'relevant_history', 'treatments_given'],
        'Assessment': ['sepsis_criteria', 'shock_recognition', 'organ_dysfunction'],
        'Recommendation': ['icu_transfer', 'vasopressor_need', 'central_access']
    },
    quickActions: [
        'Start my SBAR presentation',
        'What makes this septic SHOCK vs just sepsis?',
        'What interventions has he had?',
        'What does the ICU need to know most urgently?'
    ],
    keyTeachingPoints: [
        'Septic shock = sepsis + vasopressor requirement to maintain MAP ≥65 + lactate >2 despite adequate fluid resuscitation',
        'Rising lactate indicates worsening tissue hypoperfusion - do not wait',
        'SBAR for ICU: Lead with "I have a patient in septic shock who needs immediate transfer"',
        'Include: source, fluid given, current lactate trend, vasopressor status, airway concerns',
        'SSC Hour-1 bundle: lactate, cultures, antibiotics, fluids, vasopressors if needed'
    ],
    sbarTemplate: {
        situation: 'I\'m calling about Mr. Torres in room 412. He\'s a 58-year-old with pneumonia who has progressed to septic shock and needs immediate ICU transfer.',
        background: 'He was admitted yesterday with CAP. Over the past 4 hours, he\'s received 3 liters of crystalloid but remains hypotensive. He\'s on ceftriaxone and azithromycin started 18 hours ago.',
        assessment: 'He meets septic shock criteria: MAP 52 despite fluids, lactate has risen from 2.4 to 5.8, and he\'s becoming confused. I\'m concerned about respiratory failure - he\'s now requiring 6L NC with sats of 89%.',
        recommendation: 'He needs ICU transfer now for vasopressor initiation and likely central line placement. May need intubation if respiratory status worsens. Can you accept him immediately?'
    },
    defined_responses: {
        'sbar start': 'Lead with urgency and the bottom line: "This is [name] calling from 4 West about Mr. Torres, a patient in septic shock who needs immediate ICU transfer." Then give concise details.',
        'shock vs sepsis': 'Septic SHOCK is defined by: (1) Vasopressor requirement to maintain MAP ≥65 AND (2) Lactate >2 mmol/L DESPITE adequate fluid resuscitation (usually ≥30 mL/kg). Mr. Torres has both - he\'s hypotensive after 3L and lactate is 5.8.',
        'lactate trending': 'Rising lactate is ominous. It indicates ongoing tissue hypoperfusion and anaerobic metabolism. A lactate that doubles suggests the resuscitation is failing and escalation is urgent.',
        'what icu needs': 'The ICU needs to know: (1) How much fluid given/response, (2) Current lactate and trend, (3) Airway status, (4) Source of infection, (5) Antibiotics given and timing, (6) Access available (peripheral vs central).',
        'vasopressor': 'Norepinephrine is first-line vasopressor for septic shock. Target MAP ≥65. Don\'t delay vasopressors waiting for central access - can start peripherally in emergencies.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Sepsis & Septic Shock Module', link: '../mechanism/sepsis-shock-module.html', reason: 'Understand cytokine storm and hemodynamic collapse' },
        { type: 'reasondx', title: 'Sepsis Adventure Case', link: '../ReasonDx/adventure-cases/sepsis-expanded.html', reason: 'Practice sepsis workup and management decisions' },
        { type: 'reasondx', title: 'Sepsis Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=sepsis-deep-dive', reason: 'SSC guidelines and bundle compliance' },
        { type: 'parallel', title: 'Sepsis-Pneumonia Case', link: 'mentor-chat.html?case=sepsis-pneumonia', reason: 'Compare with sepsis without shock' }
    ],
    evidenceBase: {
        guidelines: [
            "Surviving Sepsis Campaign Guidelines 2021 (Crit Care Med 2021;49:e1063-e1143)",
            "Sepsis-3 Definitions (JAMA 2016;315:801-810)"
        ],
        keyEvidence: [
            "Hour-1 bundle improves survival: measure lactate, obtain cultures, start antibiotics, give fluids, start vasopressors if shock",
            "Norepinephrine is first-line vasopressor (SSC 2021)",
            "Lactate clearance >10% at 2 hours associated with improved survival",
            "Peripheral vasopressors safe for short-term use if central access delayed"
        ],
        openAccessLinks: [
            "https://journals.lww.com/ccmjournal/fulltext/2021/11000/surviving_sepsis_campaign__international.21.aspx"
        ]
    }
},

// ============================================================================
// CASE 2: ARDS RESPIRATORY FAILURE
// ============================================================================

'ards-respiratory-failure': {
    id: 'ards-respiratory-failure',
    title: 'ARDS - Worsening Respiratory Failure',
    category: 'Critical Care',
    isParallel: false,
    parallelCase: 'copd-exacerbation',
    parallelDescription: 'COPD exacerbation',
    patient: { 
        name: 'Patricia Williams', 
        age: 62, 
        sex: 'Female', 
        setting: 'ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Worsening Hypoxemia on Ventilator' 
    },
    description: 'A 62-year-old intubated 2 days ago for COVID pneumonia/ARDS. Currently on AC 6/450/14/100%, PEEP 14. P/F ratio dropped from 120 to 68 over past shift. ABG: pH 7.28, PaCO2 52, PaO2 58. Chest X-ray shows worsening bilateral infiltrates. Plateau pressure 32 cmH2O.',
    openingStatement: 'Mrs. Williams has severe ARDS and is deteriorating despite lung-protective ventilation. Her P/F ratio is now 68, which is severe ARDS. You need to call the attending and discuss next steps. Walk me through your assessment and communication.',
    conceptDomains: {
        'Situation': ['current_ventilator_settings', 'oxygenation_status', 'trend_deterioration'],
        'Background': ['ards_etiology', 'ards_severity_classification', 'current_treatment'],
        'Assessment': ['p_f_ratio_interpretation', 'driving_pressure', 'rescue_therapy_indications'],
        'Recommendation': ['prone_positioning', 'paralysis', 'ecmo_consideration']
    },
    quickActions: [
        'How do I classify ARDS severity?',
        'What\'s her driving pressure?',
        'When do I consider proning?',
        'What are the rescue therapies for severe ARDS?'
    ],
    keyTeachingPoints: [
        'ARDS severity by P/F ratio: Mild 200-300, Moderate 100-200, Severe <100',
        'Lung-protective ventilation: Vt 6 mL/kg IBW, plateau <30, driving pressure <15',
        'Driving pressure = Plateau - PEEP (32-14 = 18 cmH2O - too high!)',
        'Prone positioning for P/F <150 improves survival (PROSEVA trial)',
        'Neuromuscular blockade for P/F <150 in first 48 hours (ACURASYS)',
        'Consider ECMO referral for P/F <80 despite optimization'
    ],
    sbarTemplate: {
        situation: 'I\'m calling about Mrs. Williams in ICU bed 8. She has severe ARDS from COVID pneumonia and her oxygenation is deteriorating despite optimal ventilator settings.',
        background: 'She was intubated 2 days ago with moderate ARDS, P/F around 120. She\'s been on lung-protective settings with PEEP of 14. Over the past 8 hours, her P/F ratio has dropped to 68.',
        assessment: 'This is now severe ARDS by Berlin criteria. Her plateau pressure is 32, giving a driving pressure of 18, which is above our target. ABG shows combined hypoxemic and hypercapnic respiratory failure with respiratory acidosis.',
        recommendation: 'I think she needs prone positioning and likely neuromuscular blockade. Should we also discuss ECMO referral given P/F less than 80? I\'d like your guidance on next steps.'
    },
    defined_responses: {
        'ards severity': 'Berlin Definition: Mild P/F 200-300, Moderate P/F 100-200, Severe P/F <100 (all with PEEP ≥5). At P/F 68, she has SEVERE ARDS with high mortality risk.',
        'driving pressure': 'Driving pressure = Plateau pressure - PEEP = 32 - 14 = 18 cmH2O. Target is <15. This is associated with increased mortality. Consider reducing Vt further or adjusting PEEP.',
        'when prone': 'Prone positioning is indicated for P/F <150 with FiO2 ≥60%. PROSEVA trial showed mortality benefit with 16+ hours of proning daily. Mrs. Williams qualifies.',
        'rescue therapies': 'For severe ARDS: (1) Prone positioning 16+ hrs/day, (2) Neuromuscular blockade (cisatracurium) for 48 hrs, (3) Consider inhaled pulmonary vasodilators (iNO, epoprostenol), (4) ECMO referral if P/F <80 despite above.',
        'ecmo criteria': 'Consider ECMO for P/F <80 despite prone + paralysis, or pH <7.20 with PaCO2 >80. Early referral is key - don\'t wait until moribund.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'ARDS Module', link: '../mechanism/ards-module.html', reason: 'Understand alveolar damage and ventilator-induced lung injury' },
        { type: 'reasondx', title: 'ARDS Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=ards-deep-dive', reason: 'Berlin criteria and management strategies' },
        { type: 'parallel', title: 'COPD Exacerbation', link: 'mentor-chat.html?case=copd-exacerbation', reason: 'Compare obstructive vs restrictive respiratory failure' }
    ],
    evidenceBase: {
        guidelines: [
            "ATS/ESICM/SCCM ARDS Guidelines 2017",
            "Berlin Definition (JAMA 2012;307:2526-2533)"
        ],
        keyEvidence: [
            "PROSEVA trial: Prone positioning ≥16 hrs/day reduces mortality in severe ARDS",
            "ARDSNet: Vt 6 mL/kg IBW reduces mortality vs 12 mL/kg",
            "ACURASYS: Early neuromuscular blockade may improve survival in severe ARDS",
            "Driving pressure <15 cmH2O associated with better outcomes"
        ],
        openAccessLinks: [
            "https://www.nejm.org/doi/full/10.1056/NEJMoa1214103"
        ]
    }
},

// ============================================================================
// CASE 3: MASSIVE PE WITH HEMODYNAMIC COMPROMISE
// ============================================================================

'massive-pe-hemodynamic': {
    id: 'massive-pe-hemodynamic',
    title: 'Massive PE - Hemodynamic Compromise',
    category: 'Critical Care',
    isParallel: false,
    parallelCase: 'pe-submassive',
    parallelDescription: 'Submassive PE',
    patient: { 
        name: 'Robert Kim', 
        age: 54, 
        sex: 'Male', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Sudden Dyspnea and Near-Syncope' 
    },
    description: 'A 54-year-old with recent knee surgery presents with acute dyspnea and near-syncope. BP 82/54, HR 128, RR 32, SpO2 84% on 15L NRB. CTA shows bilateral central pulmonary emboli. Troponin elevated, BNP 1,840. Bedside echo shows RV dilation and McConnell\'s sign.',
    openingStatement: 'Mr. Kim has a massive PE with hemodynamic compromise - this is high-risk PE requiring emergent intervention. You need to mobilize resources and communicate urgently. What\'s your approach?',
    conceptDomains: {
        'Situation': ['hemodynamic_status', 'imaging_findings', 'severity_classification'],
        'Background': ['risk_factors', 'pe_timing', 'contraindications_to_lysis'],
        'Assessment': ['high_risk_pe_criteria', 'rv_strain_markers', 'bleeding_risk'],
        'Recommendation': ['systemic_thrombolysis', 'catheter_intervention', 'surgical_embolectomy']
    },
    quickActions: [
        'What makes this "massive" PE?',
        'What are my thrombolysis options?',
        'Does he have contraindications to tPA?',
        'When do I call IR or surgery?'
    ],
    keyTeachingPoints: [
        'High-risk (massive) PE = PE + sustained hypotension (SBP <90 for >15 min) or requiring vasopressors',
        'Intermediate-high risk = RV dysfunction + elevated biomarkers but hemodynamically stable',
        'Systemic thrombolysis for high-risk PE without contraindications: alteplase 100mg over 2 hours',
        'Catheter-directed therapy (CDT) increasingly used, especially with relative contraindications',
        'Surgical embolectomy if thrombolysis contraindicated and CDT unavailable'
    ],
    sbarTemplate: {
        situation: 'I have a 54-year-old man in the ED with massive pulmonary embolism and hemodynamic collapse. He needs emergent reperfusion therapy.',
        background: 'He had knee surgery 10 days ago, now presenting with sudden dyspnea and syncope. CTA confirms bilateral central PEs. Echo shows severe RV strain with McConnell\'s sign.',
        assessment: 'This is high-risk PE by ESC criteria - he has sustained hypotension despite fluids, SBP 82. Troponin and BNP are markedly elevated. He has no obvious contraindications to thrombolysis - no recent stroke, no active bleeding.',
        recommendation: 'I recommend systemic tPA. Alternatively, if we want to minimize bleeding risk, can we get IR for catheter-directed therapy? He needs ICU admission regardless. What\'s your preference?'
    },
    defined_responses: {
        'massive definition': 'High-risk (massive) PE is defined by hemodynamic instability: sustained hypotension (SBP <90 for ≥15 min), need for vasopressors, or cardiac arrest. Mr. Kim\'s BP of 82/54 qualifies.',
        'thrombolysis options': 'Systemic: Alteplase 100mg IV over 2 hours (or 0.6 mg/kg over 15 min if arrest). Catheter-directed: Lower dose (often 20-24mg) delivered directly to clot via catheter. Both reduce mortality in massive PE.',
        'contraindications': 'Absolute: Prior intracranial hemorrhage, ischemic stroke <3 months, brain tumor, active bleeding, recent brain/spine surgery. Relative: Recent surgery (his knee surgery was 10 days ago - this is RELATIVE, not absolute).',
        'when ir surgery': 'Call IR for catheter-directed therapy if: relative contraindication to systemic lysis, patient preference, or thrombus-in-transit. Call surgery for: absolute contraindication to lysis + no CDT available, or failed thrombolysis.',
        'supportive care': 'While arranging reperfusion: cautious IVF (250-500 mL boluses - RV is preload-dependent but can fail with overload), vasopressors (norepinephrine), avoid intubation if possible (can precipitate arrest), start anticoagulation.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'VTE/PE Module', link: '../mechanism/vte-pe-module.html', reason: 'Understand clot pathophysiology and hemodynamic effects' },
        { type: 'reasondx', title: 'PE Adventure Case', link: '../ReasonDx/adventure-cases/pe-expanded.html', reason: 'Practice PE workup and risk stratification' },
        { type: 'reasondx', title: 'PE Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=pe-deep-dive', reason: 'ESC guidelines and reperfusion strategies' }
    ],
    evidenceBase: {
        guidelines: [
            "ESC Guidelines for PE 2019 (Eur Heart J 2020;41:543-603)",
            "ACCP Antithrombotic Therapy Guidelines 2021"
        ],
        keyEvidence: [
            "Systemic thrombolysis reduces mortality in high-risk PE (PEITHO, meta-analyses)",
            "Catheter-directed therapy effective with potentially lower bleeding risk (ULTIMA, SEATTLE II)",
            "RV dysfunction on echo is key prognostic marker",
            "Half-dose tPA (50mg) may have similar efficacy with less bleeding (MOPETT)"
        ],
        openAccessLinks: [
            "https://academic.oup.com/eurheartj/article/41/4/543/5556136"
        ]
    }
},

// ============================================================================
// CASE 4: ACUTE STROKE - tPA DECISION
// ============================================================================

'acute-stroke-tpa': {
    id: 'acute-stroke-tpa',
    title: 'Acute Stroke - tPA Decision',
    category: 'Critical Care',
    isParallel: false,
    parallelCase: 'stroke-hemorrhagic',
    parallelDescription: 'Hemorrhagic stroke',
    patient: { 
        name: 'Margaret Chen', 
        age: 71, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Sudden Right-Sided Weakness and Speech Difficulty' 
    },
    description: 'A 71-year-old with HTN and AFib (not anticoagulated) presents with sudden right hemiparesis and aphasia. Last known well 2 hours ago. BP 178/96, HR 88 irregular. NIHSS 14. CT head shows no hemorrhage. CT angiogram shows left MCA M1 occlusion.',
    openingStatement: 'Mrs. Chen has an acute ischemic stroke with a large vessel occlusion. She\'s within the tPA window and potentially eligible for thrombectomy. Time is brain - you need to communicate rapidly with neurology and make treatment decisions. Walk me through it.',
    conceptDomains: {
        'Situation': ['time_last_known_well', 'nihss_score', 'imaging_findings'],
        'Background': ['stroke_risk_factors', 'current_medications', 'contraindications'],
        'Assessment': ['tpa_eligibility', 'thrombectomy_candidacy', 'blood_pressure_management'],
        'Recommendation': ['tpa_administration', 'interventional_transfer', 'nicu_admission']
    },
    quickActions: [
        'Is she eligible for tPA?',
        'Does she need thrombectomy?',
        'What about her blood pressure?',
        'She\'s on aspirin - is that a contraindication?'
    ],
    keyTeachingPoints: [
        'Door-to-needle target: <60 minutes for tPA',
        'tPA window: 0-4.5 hours from last known well (with additional exclusions 3-4.5 hr)',
        'LVO (large vessel occlusion) + NIHSS ≥6 → consider thrombectomy up to 24 hours in select patients',
        'BP must be <185/110 before tPA, then <180/105 for 24 hours after',
        'AFib is a risk factor, not a contraindication - but check for anticoagulation status'
    ],
    sbarTemplate: {
        situation: 'Code stroke - I have a 71-year-old woman with acute left MCA syndrome, last known well 2 hours ago. NIHSS is 14. CT shows no hemorrhage, CTA confirms left M1 occlusion.',
        background: 'She has hypertension and atrial fibrillation but is not on anticoagulation - only aspirin. No history of prior stroke or bleeding. Current BP is 178/96.',
        assessment: 'She\'s a tPA candidate - within 4.5 hour window, no hemorrhage, no contraindications that I can identify. She also has a large vessel occlusion amenable to thrombectomy.',
        recommendation: 'I recommend we give tPA now after lowering her BP below 185/110. She needs emergent transfer to thrombectomy-capable center or activation of our neurointerventional team. Can you confirm tPA dosing and help coordinate thrombectomy?'
    },
    defined_responses: {
        'tpa eligible': 'Yes! She meets criteria: (1) Ischemic stroke, (2) Within 4.5 hours of symptom onset (she\'s at 2 hrs), (3) No hemorrhage on CT, (4) No absolute contraindications. Give tPA 0.9 mg/kg (max 90 mg), 10% bolus, rest over 60 min.',
        'thrombectomy': 'Absolutely. Large vessel occlusion (M1) with NIHSS ≥6 within 24 hours is thrombectomy-eligible. Given her 2-hour window and good baseline, she\'s an excellent candidate. Don\'t delay tPA for thrombectomy - "drip and ship."',
        'blood pressure': 'BP must be <185/110 before tPA. Hers is 178/96 - close but okay. Use labetalol 10-20mg IV or nicardipine infusion if needed. After tPA, maintain <180/105 for 24 hours.',
        'aspirin contraindication': 'Aspirin alone is NOT a contraindication to tPA. Dual antiplatelet or therapeutic anticoagulation would be concerns, but she\'s only on aspirin. Proceed with tPA.',
        'afib significance': 'Her AFib explains the stroke mechanism - likely cardioembolic. This is a risk factor, not a contraindication. However, check INR if any chance she was on warfarin. DOACs may require specific reversal discussion.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Stroke Module', link: '../mechanism/stroke-module.html', reason: 'Understand ischemic penumbra and reperfusion' },
        { type: 'reasondx', title: 'Stroke Adventure Case', link: '../ReasonDx/adventure-cases/stroke-expanded.html', reason: 'Practice stroke workup and tPA decisions' },
        { type: 'reasondx', title: 'Stroke Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=stroke-deep-dive', reason: 'AHA/ASA guidelines and thrombectomy trials' }
    ],
    evidenceBase: {
        guidelines: [
            "AHA/ASA Acute Ischemic Stroke Guidelines 2019",
            "AHA/ASA Endovascular Therapy Guidelines 2019"
        ],
        keyEvidence: [
            "tPA within 4.5 hours improves functional outcomes (NINDS, ECASS III)",
            "Thrombectomy for LVO up to 24 hours in select patients (DAWN, DEFUSE 3)",
            "Door-to-needle <60 min and door-to-puncture <90 min are targets",
            "Number needed to treat with tPA at 90 min = 4.5 for good outcome"
        ],
        openAccessLinks: [
            "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211"
        ]
    }
},

// ============================================================================
// CASE 5: CARDIOGENIC SHOCK
// ============================================================================

'cardiogenic-shock': {
    id: 'cardiogenic-shock',
    title: 'Cardiogenic Shock - Acute MI',
    category: 'Critical Care',
    isParallel: false,
    parallelCase: 'septic-shock-escalation',
    parallelDescription: 'Septic shock (distributive)',
    patient: { 
        name: 'James O\'Brien', 
        age: 67, 
        sex: 'Male', 
        setting: 'Emergency → CCU', 
        acuity: 'Critical', 
        chiefComplaint: 'Chest Pain and Shortness of Breath' 
    },
    description: 'A 67-year-old with HTN and diabetes presents with 3 hours of crushing chest pain. BP 84/58, HR 110, RR 28, SpO2 91% on 4L NC. Cool extremities, JVD, bibasilar crackles. ECG shows anterior STEMI. Bedside echo: EF 20%, anterior akinesis, no pericardial effusion. Lactate 4.2.',
    openingStatement: 'Mr. O\'Brien has an anterior STEMI complicated by cardiogenic shock - he has pump failure from his massive MI. This is the highest-risk ACS presentation. You need to communicate urgently with cardiology and the cath lab. How do you present this?',
    conceptDomains: {
        'Situation': ['stemi_identification', 'shock_recognition', 'hemodynamic_status'],
        'Background': ['cardiac_risk_factors', 'symptom_timeline', 'current_interventions'],
        'Assessment': ['cardiogenic_shock_criteria', 'killip_class', 'mechanical_complications'],
        'Recommendation': ['emergent_pci', 'mechanical_support', 'vasopressor_choice']
    },
    quickActions: [
        'What defines cardiogenic shock?',
        'What vasopressor should I use?',
        'Does he need mechanical support?',
        'How do I present to the cath lab?'
    ],
    keyTeachingPoints: [
        'Cardiogenic shock = cardiac output insufficient for organ perfusion, typically SBP <90 + signs of hypoperfusion',
        'In acute MI: emergent revascularization is LIFE-SAVING - don\'t delay for stabilization',
        'Norepinephrine preferred over dopamine for cardiogenic shock (SOAP II)',
        'Mechanical circulatory support (IABP, Impella, ECMO) may be needed for refractory cases',
        'Killip Class IV (shock) carries 30-50% in-hospital mortality'
    ],
    sbarTemplate: {
        situation: 'I have a 67-year-old man with anterior STEMI and cardiogenic shock in the ED. He needs emergent cath lab activation.',
        background: 'Three hours of chest pain, history of hypertension and diabetes. ECG shows ST elevation V1-V6. Bedside echo shows EF around 20% with anterior wall akinesis.',
        assessment: 'He\'s in cardiogenic shock - BP 84/58, cool extremities, lactate 4.2, pulmonary edema. This is Killip Class IV. No signs of mechanical complication on echo.',
        recommendation: 'He needs emergent PCI - culprit revascularization is the priority. I\'m starting norepinephrine for pressure support. Should we have mechanical support on standby? Can you activate the cath lab now?'
    },
    defined_responses: {
        'cardiogenic shock definition': 'Cardiogenic shock = inadequate cardiac output causing tissue hypoperfusion. Clinical: SBP <90 (or need for pressors to maintain), signs of hypoperfusion (cool/mottled extremities, altered mental status, oliguria, elevated lactate). Often CI <2.2 and PCWP >15 if measured.',
        'vasopressor choice': 'Norepinephrine is preferred over dopamine (SOAP II trial showed less arrhythmias, possibly lower mortality). Start at 0.1-0.2 mcg/kg/min and titrate to MAP ≥65. Dobutamine can be added for inotropy if needed.',
        'mechanical support': 'Consider for refractory shock: IABP (modest support, easy to place), Impella (better flow support), VA-ECMO (for profound shock/arrest). Decision often made by interventionalist. Have them on standby.',
        'cath lab presentation': '"STEMI with cardiogenic shock - this is a time-sensitive emergency. 67-year-old, 3-hour symptom onset, anterior STEMI on ECG, echo shows EF 20%. Currently hypotensive requiring vasopressors. Need emergent cath for primary PCI."',
        'dont delay': 'Do NOT delay cath for "stabilization" - revascularization IS the treatment. SHOCK trial proved emergent revascularization saves lives in cardiogenic shock from MI.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'ACS Module', link: '../mechanism/acs-module.html', reason: 'Understand MI pathophysiology and complications' },
        { type: 'mechanism', title: 'Shock Module', link: '../mechanism/shock-module.html', reason: 'Compare shock types and hemodynamic profiles' },
        { type: 'mechanism', title: 'Heart Failure Module', link: '../mechanism/hf-module.html', reason: 'Understand pump failure physiology' },
        { type: 'reasondx', title: 'ACS Adventure Case', link: '../ReasonDx/adventure-cases/acs-expanded.html', reason: 'Practice ACS management decisions' },
        { type: 'reasondx', title: 'Shock Adventure Case', link: '../ReasonDx/adventure-cases/shock-expanded.html', reason: 'Compare shock presentations' }
    ],
    evidenceBase: {
        guidelines: [
            "AHA/ACC STEMI Guidelines 2021",
            "ESC Guidelines for AMI with ST-elevation 2017",
            "SCAI Cardiogenic Shock Classification 2019"
        ],
        keyEvidence: [
            "SHOCK trial: Early revascularization reduces 6-month mortality in MI + cardiogenic shock",
            "SOAP II: Norepinephrine preferred over dopamine for cardiogenic shock",
            "IABP-SHOCK II: IABP did not reduce mortality (but still used as bridge)",
            "Door-to-balloon <90 min remains target; shorter is better for shock"
        ],
        openAccessLinks: [
            "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000950"
        ]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_CRITICAL_CARE_CASES;
}

// Merge with existing COACHDX_CASES if available
if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_CRITICAL_CARE_CASES);
}
