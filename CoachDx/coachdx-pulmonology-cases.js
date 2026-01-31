// ============================================================================
// COACHDX PULMONOLOGY CASE PACK
// SBAR scenarios for pulmonary/critical care communication training
// Created: January 29, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================
//
// CASES INCLUDED:
// 1. COPD Exacerbation - NIV Failure
// 2. Asthma - Near-Fatal/Status Asthmaticus
// 3. Massive Hemoptysis
// 4. Tension Pneumothorax
// 5. Acute Hypercapnic Respiratory Failure
//
// ============================================================================

const COACHDX_PULMONOLOGY_CASES = {

// ============================================================================
// CASE 1: COPD EXACERBATION - NIV FAILURE
// ============================================================================

'copd-niv-failure': {
    id: 'copd-niv-failure',
    title: 'COPD Exacerbation - NIV Failure',
    category: 'Pulmonology',
    isParallel: false,
    parallelCase: 'copd-exacerbation',
    parallelDescription: 'COPD responding to NIV',
    patient: { 
        name: 'Harold Stevens', 
        age: 72, 
        sex: 'Male', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Worsening Shortness of Breath' 
    },
    description: 'A 72-year-old man with severe COPD (FEV1 28% predicted, on home O2) presents with 3-day AECOPD. Started on BiPAP 2 hours ago (15/5). Initial ABG: pH 7.28, PaCO2 68, PaO2 58. Repeat ABG now: pH 7.22, PaCO2 78, PaO2 52. Increasingly somnolent, RR 28, accessory muscle use, can\'t speak full sentences.',
    openingStatement: 'Mr. Stevens is failing non-invasive ventilation for his COPD exacerbation - his CO2 is rising and pH is dropping despite BiPAP. You need to decide about intubation and communicate with the ICU. What\'s your approach?',
    conceptDomains: {
        'Situation': ['niv_settings', 'abg_trend', 'clinical_status'],
        'Background': ['copd_severity', 'baseline_function', 'prior_intubations'],
        'Assessment': ['niv_failure_criteria', 'intubation_decision', 'goals_of_care'],
        'Recommendation': ['optimize_niv_vs_intubate', 'icu_transfer', 'family_discussion']
    },
    quickActions: [
        'What defines NIV failure?',
        'Can I try higher BiPAP settings first?',
        'What are the intubation considerations in COPD?',
        'What if he doesn\'t want intubation?'
    ],
    keyTeachingPoints: [
        'NIV success predictors: pH improvement within 1-2 hours, decreased RR, improved mental status',
        'NIV failure signs: Worsening pH/PaCO2, deteriorating mental status, hemodynamic instability',
        'Don\'t delay intubation waiting for "one more ABG" - clinical trajectory matters',
        'COPD intubation challenges: Auto-PEEP, dynamic hyperinflation, prolonged wean',
        'Goals of care discussion crucial in severe COPD - may not want intubation'
    ],
    sbarTemplate: {
        situation: 'I have a 72-year-old man with severe COPD who is failing BiPAP. He\'s been on NIV for 2 hours but his pH dropped from 7.28 to 7.22 and CO2 rose from 68 to 78. He\'s becoming somnolent.',
        background: 'He has very severe COPD with FEV1 28% predicted, on home oxygen. He\'s had multiple exacerbations but never been intubated. His baseline is limited - can walk about 50 feet.',
        assessment: 'He\'s failing NIV by objective and clinical criteria. pH is worsening despite adequate settings, and his mental status is deteriorating. He needs either intubation or a goals of care discussion about comfort measures.',
        recommendation: 'I think he needs intubation unless goals of care dictate otherwise. Can you help with ICU bed? We should also discuss with family about his wishes if we haven\'t already - severe COPD intubation has significant morbidity.'
    },
    defined_responses: {
        'niv failure': 'NIV failure criteria: (1) No pH improvement or worsening after 1-2 hours, (2) Worsening mental status (his somnolence), (3) Inability to tolerate mask, (4) Hemodynamic instability, (5) Worsening hypoxemia despite FiO2 increase. He meets multiple criteria - pH worsened from 7.28 to 7.22.',
        'higher settings': 'You can try optimizing: Increase IPAP (driving pressure for ventilation) to 18-20 if tolerated. Check mask fit for leaks. But don\'t chase settings indefinitely - if clinical trajectory is down after adequate trial, proceed to intubation. Delaying can lead to crash intubation.',
        'copd intubation': 'Special considerations: (1) High risk of auto-PEEP/dynamic hyperinflation - use low RR (10-12), long expiratory time, (2) May need extrinsic PEEP to match auto-PEEP, (3) Permissive hypercapnia acceptable - target pH not PaCO2, (4) Prolonged weaning expected - early trach discussion.',
        'no intubation': 'If he declines intubation or has advance directive against it: Continue NIV as ceiling of care, optimize comfort (morphine for dyspnea, anxiolytics), involve palliative care. BiPAP can be used for comfort even if not for cure. Respect his autonomy.',
        'prognosis': 'Severe COPD requiring intubation has significant mortality (15-25% in-hospital). Of survivors, many have prolonged ICU stays and difficulty weaning. Important to have realistic discussion with patient/family about what intubation means for someone with his severity.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'COPD Module', link: '../mechanism/copd-module.html', reason: 'Understand obstructive physiology' },
        { type: 'reasondx', title: 'COPD Adventure', link: '../ReasonDx/adventure-cases/copd-exacerbation-expanded.html', reason: 'Practice AECOPD management' },
        { type: 'reasondx', title: 'COPD Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=copd-exacerbation-deep-dive', reason: 'GOLD guidelines and NIV evidence' }
    ],
    evidenceBase: {
        guidelines: [
            "GOLD COPD Guidelines 2024",
            "BTS/ICS NIV Guidelines 2016"
        ],
        keyEvidence: [
            "NIV reduces intubation and mortality in AECOPD with respiratory acidosis",
            "pH improvement within 1-2 hours predicts NIV success",
            "Early intubation better than delayed crash intubation",
            "Palliative NIV is appropriate when intubation declined"
        ],
        openAccessLinks: [
            "https://goldcopd.org/2024-gold-report/"
        ]
    }
},

// ============================================================================
// CASE 2: STATUS ASTHMATICUS
// ============================================================================

'status-asthmaticus': {
    id: 'status-asthmaticus',
    title: 'Status Asthmaticus - Near-Fatal',
    category: 'Pulmonology',
    isParallel: false,
    parallelCase: 'asthma-exacerbation-severe',
    parallelDescription: 'Severe asthma responding to treatment',
    patient: { 
        name: 'Maria Santos', 
        age: 28, 
        sex: 'Female', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Can\'t Breathe' 
    },
    description: 'A 28-year-old woman with asthma (2 prior intubations) presents after running out of inhalers 1 week ago. Speaking single words, tripoding, diffuse wheezing then becoming silent chest. HR 128, RR 36, SpO2 86% on NRB, pulsus paradoxus 22 mmHg. Given 3 nebs, IV magnesium, IV steroids - minimal improvement. ABG: pH 7.18, PaCO2 62.',
    openingStatement: 'Ms. Santos has near-fatal asthma - she\'s exhausted, hypercapnic, and has a silent chest which means she\'s not moving air. This is an airway emergency. How do you manage this and prepare for intubation?',
    conceptDomains: {
        'Situation': ['severity_markers', 'treatment_given', 'response'],
        'Background': ['asthma_history', 'prior_intubations', 'triggers'],
        'Assessment': ['near_fatal_criteria', 'intubation_decision', 'risks'],
        'Recommendation': ['additional_therapies', 'ketamine', 'intubation_preparation']
    },
    quickActions: [
        'What makes this "near-fatal" asthma?',
        'What else can I try before intubation?',
        'Why is asthma intubation dangerous?',
        'What ventilator settings should I use?'
    ],
    keyTeachingPoints: [
        'Near-fatal/life-threatening signs: Silent chest, cyanosis, bradycardia, hypotension, exhaustion, confusion, PaCO2 normal/elevated',
        'Silent chest = no air movement = critical obstruction',
        'Pulsus paradoxus >15 mmHg indicates severe air trapping',
        'Additional therapies: IV magnesium, terbutaline/epinephrine, ketamine, heliox',
        'Intubation in asthma is HIGH RISK - can precipitate arrest from air trapping'
    ],
    sbarTemplate: {
        situation: 'I have a 28-year-old woman with near-fatal asthma who is not responding to aggressive treatment. She has a silent chest, is hypercapnic with pH 7.18, and is exhausting. She\'s going to need intubation.',
        background: 'She has severe asthma with 2 prior intubations. She ran out of her inhalers a week ago. She\'s received continuous nebs, IV magnesium, and IV steroids with minimal improvement.',
        assessment: 'This is near-fatal asthma - she has multiple life-threatening features including silent chest, hypercapnia with acidosis, and pulsus paradoxus of 22. She\'s tiring and will arrest if we don\'t secure her airway soon.',
        recommendation: 'I\'m preparing for intubation with ketamine for induction. Starting epinephrine drip for bronchodilation. Need anesthesia backup given difficult airway risk. She needs ICU with ventilator expertise in severe asthma. Can you help coordinate?'
    },
    defined_responses: {
        'near fatal criteria': 'Life-threatening features: (1) Silent chest (she has this), (2) Cyanosis, (3) Bradycardia or arrhythmia, (4) Hypotension, (5) Exhaustion/confusion, (6) PaCO2 normal or elevated (hers is 62 - very bad), (7) SpO2 <92% despite O2. She has multiple - this is near-fatal asthma.',
        'additional therapies': 'Before intubation if time: (1) Epinephrine 0.3-0.5 mg IM or IV infusion (bronchodilator), (2) Terbutaline 0.25 mg SC, (3) Ketamine 0.5-1 mg/kg IV (bronchodilator properties), (4) Heliox if available (reduces airway resistance), (5) Continuous nebulization if not already.',
        'intubation danger': 'Asthma intubation is HIGH RISK because: (1) Positive pressure worsens air trapping → hypotension/arrest, (2) Already hypoxic with little reserve, (3) Laryngospasm possible, (4) Post-intubation can\'t ventilate due to severe bronchospasm. Have epinephrine ready, use ketamine induction (bronchodilates), avoid rapid sequence if possible.',
        'vent settings': 'Post-intubation: (1) Low RR 8-12 (allow expiration), (2) Low Vt 6-8 mL/kg, (3) Long expiratory time (I:E 1:3 to 1:5), (4) PEEP low or zero initially, (5) Accept permissive hypercapnia - target pH not PaCO2, (6) Watch for auto-PEEP - may need to disconnect and decompress.',
        'arrest management': 'If she arrests: Standard ACLS plus bilateral needle decompression (tension physiology from air trapping is common), disconnect from vent to allow exhalation, push epinephrine early and often.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Asthma Module', link: '../mechanism/asthma-module.html', reason: 'Understand airway inflammation and bronchospasm' },
        { type: 'reasondx', title: 'Asthma Adventure', link: '../ReasonDx/adventure-cases/asthma-exacerbation-expanded.html', reason: 'Practice asthma management' },
        { type: 'reasondx', title: 'Asthma Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=asthma-exacerbation-deep-dive', reason: 'Severity assessment and escalation' }
    ],
    evidenceBase: {
        guidelines: [
            "GINA Severe Asthma Guidelines 2024",
            "BTS/SIGN Asthma Guidelines 2019"
        ],
        keyEvidence: [
            "IV magnesium reduces admissions in severe asthma",
            "Ketamine has bronchodilator properties - useful for induction",
            "Permissive hypercapnia is safe and preferred over aggressive ventilation",
            "Most asthma deaths occur before reaching hospital"
        ],
        openAccessLinks: [
            "https://ginasthma.org/gina-reports/"
        ]
    }
},

// ============================================================================
// CASE 3: MASSIVE HEMOPTYSIS
// ============================================================================

'massive-hemoptysis': {
    id: 'massive-hemoptysis',
    title: 'Massive Hemoptysis',
    category: 'Pulmonology',
    isParallel: false,
    parallelCase: 'hemoptysis-mild',
    parallelDescription: 'Minor hemoptysis',
    patient: { 
        name: 'James Wilson', 
        age: 58, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Coughing Up Blood' 
    },
    description: 'A 58-year-old man with history of lung cancer (s/p RUL lobectomy 2 years ago, recent recurrence) presents after coughing up approximately 300 mL of bright red blood over 1 hour. Still coughing blood. HR 108, BP 142/88, RR 26, SpO2 91% on 6L NC. CXR shows RUL opacity. Hemoglobin 10.2.',
    openingStatement: 'Mr. Wilson has massive hemoptysis - he\'s at risk of asphyxiation from blood filling his airways, not just exsanguination. How do you stabilize him and coordinate urgent intervention?',
    conceptDomains: {
        'Situation': ['volume_of_hemoptysis', 'ongoing_bleeding', 'oxygenation'],
        'Background': ['lung_cancer_history', 'surgery_history', 'anticoagulation'],
        'Assessment': ['massive_hemoptysis_criteria', 'lateralization', 'airway_risk'],
        'Recommendation': ['positioning', 'bronchoscopy_vs_ir', 'surgical_backup']
    },
    quickActions: [
        'What defines massive hemoptysis?',
        'How do I protect his airway?',
        'Bronchoscopy or IR embolization?',
        'Which side is bleeding?'
    ],
    keyTeachingPoints: [
        'Massive hemoptysis: >200-600 mL/24h (definitions vary) OR any amount causing hemodynamic/respiratory compromise',
        'Death is from ASPHYXIATION, not exsanguination - airway protection is priority',
        'Position bleeding side DOWN to protect good lung',
        'If must intubate: Consider single-lung intubation to isolate bleeding',
        'Bronchial artery embolization is treatment of choice for most causes'
    ],
    sbarTemplate: {
        situation: 'I have a 58-year-old man with massive hemoptysis - he\'s coughed up about 300 mL of blood in the last hour and is still actively bleeding. He has lung cancer with recent recurrence.',
        background: 'He had RUL lobectomy 2 years ago for lung cancer, recently found to have recurrence. He\'s not on anticoagulation. CXR shows opacity in the right upper lobe area suggesting that\'s the bleeding source.',
        assessment: 'This is massive hemoptysis with risk of asphyxiation. The bleeding appears to be from the right side based on history and imaging. He needs urgent intervention to stop the bleeding.',
        recommendation: 'I have him positioned right side down to protect his left lung. He needs emergent pulmonology for bronchoscopy and IR for potential bronchial artery embolization. Thoracic surgery should be aware as backup. Can you help coordinate these consults stat?'
    },
    defined_responses: {
        'massive definition': 'Massive hemoptysis definitions vary: >200-600 mL/24h depending on source. More practically: any hemoptysis causing respiratory compromise or hemodynamic instability. His 300 mL in 1 hour with ongoing bleeding and hypoxia qualifies.',
        'airway protection': 'Priority is preventing asphyxiation: (1) Position bleeding side DOWN (right side for him) - gravity keeps blood out of good lung, (2) Suction aggressively, (3) If intubation needed, consider right mainstem intubation to isolate bleeding or use double-lumen tube, (4) Keep head of bed up to facilitate drainage.',
        'bronch vs ir': 'Bronchoscopy: Localizes bleeding, can attempt tamponade with balloon or cold saline, but usually temporizing. Bronchial artery embolization (BAE): Treatment of choice for most massive hemoptysis - 85-90% immediate success. Usually do bronch first to lateralize, then IR. Surgery reserved for failures.',
        'lateralize bleeding': 'Knowing which side is critical! Clues: (1) Which side does patient feel the blood coming from? (2) CXR findings (his shows RUL opacity), (3) CT if stable, (4) Bronchoscopy. He likely has recurrent cancer eroding into bronchial artery on right.',
        'cancer hemoptysis': 'Hemoptysis from lung cancer is concerning for major vessel erosion. Bronchial artery embolization is first-line. If massive and uncontrolled, may need emergent surgery or even palliative radiation. Discuss goals of care given his cancer recurrence.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Pulmonary Module', link: '../mechanism/pulmonary.html', reason: 'Bronchial vs pulmonary circulation' },
        { type: 'reasondx', title: 'Hemoptysis Workup', link: '../ReasonDx/adventure-cases/hemoptysis-expanded.html', reason: 'Practice hemoptysis evaluation' }
    ],
    evidenceBase: {
        guidelines: [
            "ACCP Hemoptysis Guidelines",
            "BTS Hemoptysis Guidelines"
        ],
        keyEvidence: [
            "Bronchial artery embolization has 85-90% immediate success rate",
            "Death from massive hemoptysis is usually asphyxiation, not hemorrhage",
            "Positioning bleeding side down improves outcomes",
            "Early bronchoscopy helps lateralize and plan intervention"
        ],
        openAccessLinks: [
            "https://journal.chestnet.org/article/S0012-3692(17)33140-5/fulltext"
        ]
    }
},

// ============================================================================
// CASE 4: TENSION PNEUMOTHORAX
// ============================================================================

'tension-pneumothorax': {
    id: 'tension-pneumothorax',
    title: 'Tension Pneumothorax',
    category: 'Pulmonology/Emergency',
    isParallel: false,
    parallelCase: 'pneumothorax-simple',
    parallelDescription: 'Simple pneumothorax',
    patient: { 
        name: 'Brian Taylor', 
        age: 32, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Sudden Chest Pain and Difficulty Breathing' 
    },
    description: 'A 32-year-old tall, thin man presents with sudden right-sided chest pain and dyspnea while playing basketball. Now severely distressed, HR 132, BP 82/50, RR 36, SpO2 82% on NRB. Absent breath sounds on right, trachea deviated to left, JVD present. Cyanotic.',
    openingStatement: 'Mr. Taylor has tension pneumothorax - this is a clinical diagnosis requiring immediate intervention. He will arrest if you don\'t decompress now. Do you wait for a chest X-ray?',
    conceptDomains: {
        'Situation': ['vital_signs', 'physical_exam_findings', 'oxygenation'],
        'Background': ['spontaneous_vs_traumatic', 'risk_factors'],
        'Assessment': ['tension_physiology', 'clinical_diagnosis', 'imminent_arrest'],
        'Recommendation': ['needle_decompression', 'chest_tube', 'no_cxr_first']
    },
    quickActions: [
        'Do I need imaging first?',
        'Where do I needle decompress?',
        'What causes tension physiology?',
        'What happens after needle decompression?'
    ],
    keyTeachingPoints: [
        'Tension pneumothorax is a CLINICAL diagnosis - don\'t wait for CXR if classic presentation',
        'Classic triad: Hypotension, absent breath sounds, tracheal deviation (away from affected side)',
        'Immediate needle decompression: 2nd intercostal space, midclavicular line (or 5th ICS, anterior axillary)',
        'Needle decompression is temporizing - chest tube still needed',
        'Mechanism: One-way valve effect → progressive air accumulation → mediastinal shift → decreased venous return → death'
    ],
    sbarTemplate: {
        situation: 'I have a 32-year-old man with tension pneumothorax - he\'s hypotensive, hypoxic, with absent right breath sounds and tracheal deviation. I\'m performing needle decompression now.',
        background: 'He\'s tall and thin - classic risk factors for spontaneous pneumothorax. Sudden onset during basketball. No trauma.',
        assessment: 'This is tension pneumothorax causing obstructive shock. He has the classic triad: hypotension, absent breath sounds, tracheal deviation away from the affected side. He will arrest without immediate decompression.',
        recommendation: 'I\'m doing needle decompression right 2nd intercostal space now. He needs a chest tube placed urgently after. Please have thoracostomy tray ready. Can surgery or ED come assist with chest tube?'
    },
    defined_responses: {
        'imaging first': 'NO! Tension pneumothorax is a CLINICAL diagnosis. If you have classic presentation (hypotension + absent breath sounds + tracheal deviation + JVD), DECOMPRESS FIRST. Getting a CXR wastes critical time. He could arrest while in radiology.',
        'needle location': 'Traditional: 2nd intercostal space, midclavicular line, over the top of the 3rd rib. Alternative: 5th intercostal space, anterior axillary line (may have better success in muscular/obese patients). Use large-bore needle (14-16g) or angiocath. You\'ll hear/feel air rush.',
        'tension physiology': 'One-way valve mechanism: Air enters pleural space with inspiration but can\'t escape. Progressive accumulation → increased intrathoracic pressure → mediastinal shift to opposite side → compression of contralateral lung AND kinking of great vessels → decreased venous return → obstructive shock → death.',
        'after needle': 'Needle decompression is TEMPORIZING. It converts tension pneumothorax to simple pneumothorax. Still need definitive chest tube (usually 28-32 Fr for trauma/large PTX). If needle doesn\'t improve patient, consider: wrong diagnosis, needle too short, or needle kinked.',
        'risk factors': 'Primary spontaneous: Tall thin young males (like him), smokers, Marfan syndrome, blebs. Secondary: COPD, asthma, CF, Pneumocystis, lung cancer. Traumatic: Rib fractures, penetrating injury, iatrogenic (central line, mechanical ventilation).'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Tension Pneumothorax Module', link: '../mechanism/tension-ptx-module.html', reason: 'Understand pressure dynamics' },
        { type: 'reasondx', title: 'Tension PTX Adventure', link: '../ReasonDx/adventure-cases/tension-ptx-expanded.html', reason: 'Practice emergency management' },
        { type: 'proceduredx', title: 'Chest Tube Procedure', link: '../ProcedureDx/proceduredx-main.html?procedure=chest-tube', reason: 'Chest tube technique' }
    ],
    evidenceBase: {
        guidelines: [
            "ATLS Guidelines 10th Edition",
            "BTS Pneumothorax Guidelines 2010"
        ],
        keyEvidence: [
            "Clinical diagnosis - imaging delays treatment",
            "Needle decompression is life-saving temporizing measure",
            "5th ICS anterior axillary may have better success than 2nd ICS MCL",
            "All needle decompressions require follow-up chest tube"
        ],
        openAccessLinks: [
            "https://thorax.bmj.com/content/65/Suppl_2/ii18"
        ]
    }
},

// ============================================================================
// CASE 5: ACUTE HYPERCAPNIC RESPIRATORY FAILURE
// ============================================================================

'hypercapnic-respiratory-failure': {
    id: 'hypercapnic-respiratory-failure',
    title: 'Hypercapnic Respiratory Failure - Obesity Hypoventilation',
    category: 'Pulmonology',
    isParallel: false,
    parallelCase: 'copd-niv-failure',
    parallelDescription: 'COPD with hypercapnia',
    patient: { 
        name: 'Patricia Moore', 
        age: 52, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'High', 
        chiefComplaint: 'Confusion and Somnolence' 
    },
    description: 'A 52-year-old woman (BMI 52) with known OSA (non-compliant with CPAP) presents with progressive somnolence over 2 days. Found by family "hard to wake up." HR 88, BP 158/94, RR 12 (shallow), SpO2 78% on RA → 88% on 2L NC. ABG on 2L: pH 7.26, PaCO2 88, PaO2 62, HCO3 38. Wakes to sternal rub but falls back asleep.',
    openingStatement: 'Mrs. Moore has obesity hypoventilation syndrome with acute-on-chronic hypercapnic respiratory failure. Her CO2 is 88 and she\'s obtunded. How do you manage her ventilation without making things worse?',
    conceptDomains: {
        'Situation': ['mental_status', 'abg_values', 'oxygen_response'],
        'Background': ['obesity', 'osa_history', 'cpap_compliance'],
        'Assessment': ['ohs_diagnosis', 'acute_vs_chronic', 'oxygen_risks'],
        'Recommendation': ['niv_initiation', 'avoid_oxygen_overcorrection', 'monitoring']
    },
    quickActions: [
        'Why is her bicarb elevated?',
        'Can\'t I just give her more oxygen?',
        'What BiPAP settings should I use?',
        'What is obesity hypoventilation syndrome?'
    ],
    keyTeachingPoints: [
        'OHS = Obesity (BMI ≥30) + daytime hypercapnia (PaCO2 >45) + sleep-disordered breathing, no other cause',
        'Elevated HCO3 indicates chronic compensation - this isn\'t new hypercapnia',
        'DANGER: High-flow O2 can worsen hypercapnia in chronic retainers (lose hypoxic drive)',
        'BiPAP is first-line treatment - provides ventilatory support without intubation',
        'Target SpO2 88-92%, not 100% - avoid oxygen-induced hypercapnia'
    ],
    sbarTemplate: {
        situation: 'I have a 52-year-old woman with obesity hypoventilation syndrome in acute-on-chronic hypercapnic respiratory failure. She\'s obtunded with CO2 of 88 and pH 7.26.',
        background: 'She has a BMI of 52 and known OSA but doesn\'t use her CPAP. Her bicarb is 38, showing chronic CO2 retention. She\'s been progressively more somnolent over 2 days.',
        assessment: 'This is OHS with acute decompensation - likely triggered by not using CPAP. Her chronic hypercapnia has worsened acutely. I\'m concerned about giving too much oxygen and worsening her ventilation.',
        recommendation: 'Starting BiPAP with high driving pressure to support ventilation. Targeting SpO2 88-92% only - not higher. She needs ICU monitoring. If she doesn\'t improve on NIV within 1-2 hours, we may need to discuss intubation.'
    },
    defined_responses: {
        'elevated bicarb': 'Metabolic compensation for chronic respiratory acidosis. Kidneys retain HCO3 to buffer chronic hypercapnia. Her HCO3 of 38 indicates she lives with elevated CO2 - this is chronic. The acute component is her worsening pH (7.26) from further CO2 rise.',
        'oxygen danger': 'High-flow oxygen is DANGEROUS in chronic CO2 retainers. Mechanisms: (1) Loss of hypoxic ventilatory drive, (2) Haldane effect (O2 displaces CO2 from hemoglobin), (3) V/Q mismatch worsening. Target SpO2 88-92%. More O2 can actually INCREASE CO2 and worsen obtundation.',
        'bipap settings': 'Start with IPAP 12-16, EPAP 6-8 (high enough for OSA). Driving pressure (IPAP-EPAP) provides ventilation - may need IPAP 18-20+ for adequate support given her obesity. Backup rate 12-14. FiO2 to maintain SpO2 88-92%, not higher.',
        'ohs definition': 'Obesity Hypoventilation Syndrome (Pickwickian syndrome): (1) BMI ≥30, (2) Daytime hypercapnia (PaCO2 >45), (3) Sleep-disordered breathing (usually OSA), (4) No other cause of hypoventilation. She meets all criteria. Prevalence increasing with obesity epidemic.',
        'prognosis': 'OHS has high morbidity/mortality if untreated. Acute decompensation can be fatal. With treatment (PAP therapy, weight loss), outcomes improve dramatically. This hospitalization is opportunity to emphasize CPAP compliance.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Respiratory Physiology Module', link: '../mechanism/pulmonary-physiology-foundations.html', reason: 'Understand ventilatory control' },
        { type: 'reasondx', title: 'ABG Interpretation', link: '../mechanism/acid-base-module.html', reason: 'Acute vs chronic compensation' },
        { type: 'coachDx', title: 'COPD NIV Failure', link: 'mentor-chat.html?case=copd-niv-failure', reason: 'Compare hypercapnic respiratory failure' }
    ],
    evidenceBase: {
        guidelines: [
            "ATS Clinical Practice Guideline on OHS 2019",
            "BTS/ICS NIV Guidelines"
        ],
        keyEvidence: [
            "NIV is first-line treatment for acute OHS decompensation",
            "Target SpO2 88-92% to avoid oxygen-induced hypercapnia",
            "PAP therapy dramatically improves outcomes in OHS",
            "OHS prevalence increasing with obesity epidemic"
        ],
        openAccessLinks: [
            "https://www.atsjournals.org/doi/10.1164/rccm.201905-1071ST"
        ]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_PULMONOLOGY_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_PULMONOLOGY_CASES);
}
