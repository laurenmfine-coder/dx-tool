// ============================================================================
// COACHDX EMS/PARAMEDIC CASE LIBRARY
// Prehospital Clinical Reasoning Cases
// Created: January 2026
// ============================================================================
// 
// 15 EMS-specific cases for prehospital clinical reasoning training
// Designed for: Paramedic students, EMT students, EMS continuing education
// 
// To integrate: Merge with coachdx-cases-merged.js
// ============================================================================

const COACHDX_EMS_CASES = {

// ============================================================================
// EMS/PREHOSPITAL CASES (15 cases)
// ============================================================================

'ems-stemi': {
    id: 'ems-stemi',
    title: 'Field STEMI - Cath Lab Activation',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'Hiroshi Sato',
        age: 58,
        sex: 'Male',
        setting: 'Field - Patient Home',
        acuity: 'Critical',
        chiefComplaint: 'Chest Pain'
    },
    description: 'Dispatched for 58-year-old male with chest pain. Patient sitting in recliner, diaphoretic, clutching chest. Wife states pain started 45 minutes ago. History of HTN and high cholesterol.',
    openingStatement: 'You arrive at the home of Mr. Reilly who is pale and diaphoretic with crushing chest pain. Your partner is getting vitals. What are your priorities?',
    conceptDomains: {
        'Scene Assessment': ['scene_safety', 'resources_needed', 'transport_decision'],
        'History': ['opqrst', 'cardiac_history', 'medications', 'last_meal'],
        'Physical Assessment': ['vitals', 'skin_signs', 'lung_sounds', 'peripheral_pulses'],
        '12-Lead': ['stemi_recognition', 'lead_placement', 'artifact_troubleshooting'],
        'Interventions': ['aspirin', 'nitro', 'iv_access', 'oxygen'],
        'Transport': ['cath_lab_alert', 'destination_decision', 'time_goals']
    },
    quickActions: [
        'Get 12-lead immediately',
        'Aspirin 324mg chewed',
        'IV access',
        'Call for STEMI alert'
    ],
    defined_responses: {
        'vitals': 'BP 158/94, HR 88, RR 20, SpO2 96% on room air. Skin cool and diaphoretic.',
        '12-lead': 'Sinus rhythm, rate 88. ST elevation in V1-V4 (2-4mm), reciprocal ST depression in II, III, aVF. This is an anterior STEMI.',
        'history': 'Pain started suddenly 45 min ago. Crushing, 9/10, radiates to left arm. Took one of wife\'s nitro with minimal relief. No recent illness. Last ate 3 hours ago.',
        'medications': 'Lisinopril 10mg daily, atorvastatin 40mg daily. No blood thinners.',
        'allergies': 'No known drug allergies.',
        'lung sounds': 'Clear bilaterally, no crackles or wheezing.',
        'right sided': 'Good question! In inferior STEMI you\'d want right-sided leads. This is anterior, but always smart to consider.'
    },
    keyTeachingPoints: [
        'Time is muscle - minimize scene time for STEMI',
        'First medical contact to device time goal: <90 minutes',
        'Prehospital STEMI activation reduces door-to-balloon time by 15-20 minutes',
        'Aspirin is the single most important medication - 324mg chewed',
        'Avoid nitro if suspected right ventricular involvement (inferior STEMI)',
        'Serial 12-leads if initial is non-diagnostic but suspicion high'
    ],
    defined_responses: {
        'cath lab': 'Excellent. Call early - the cath lab needs 20-30 minutes to assemble the team. Your early activation saves critical time.',
        'nitro': 'Can give nitro 0.4mg SL if SBP >100 and no right ventricular involvement. May repeat x3. Watch BP closely.',
        'morphine': 'Use cautiously - may cause hypotension and masks symptoms. Many systems have moved away from routine morphine.',
        'transport time': 'Closest PCI-capable hospital is 18 minutes. Call STEMI alert now so they\'re ready when you arrive.',
        'scene time': 'Target scene time <10 minutes for STEMI. Load and go - do interventions en route.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'ACS Pathophysiology', link: '../mechanism/acs-module.html', reason: 'Understand STEMI pathophysiology' },
        { type: 'coachdx', title: 'ED STEMI Case', link: 'mentor-chat.html?case=stemi', reason: 'See hospital continuation' },
        { type: 'reasondx', title: 'Chest Pain Cases', link: '../ReasonDx/training.html', reason: 'Practice more ACS cases' }
    ]
},

'ems-chest-pain-notstemi': {
    id: 'ems-chest-pain-notstemi',
    title: 'Chest Pain - Non-STEMI Workup',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'Ayumi Watanabe',
        age: 64,
        sex: 'Female',
        setting: 'Field - Workplace',
        acuity: 'High',
        chiefComplaint: 'Chest Discomfort'
    },
    description: 'Dispatched to office building for 64-year-old female with chest discomfort. Patient is sitting at desk, appears uncomfortable but not in acute distress. Coworker called 911.',
    openingStatement: 'Mrs. Morrison says she\'s had "pressure" in her chest for about 2 hours. She didn\'t want to bother anyone but her coworker insisted on calling. 12-lead shows no obvious ST changes. How do you proceed?',
    conceptDomains: {
        'Scene Assessment': ['scene_safety', 'patient_access'],
        'History': ['opqrst', 'associated_symptoms', 'risk_factors', 'atypical_presentations'],
        'Physical Assessment': ['vitals', 'appearance', 'lung_sounds'],
        '12-Lead': ['subtle_changes', 'wellens', 'de_winter', 'serial_ecgs'],
        'Risk Stratification': ['heart_score', 'timi_risk'],
        'Transport Decision': ['als_vs_bls', 'destination']
    },
    quickActions: [
        'Complete OPQRST history',
        'Obtain 12-lead ECG',
        'Check risk factors',
        'Aspirin if ACS suspected'
    ],
    defined_responses: {
        'vitals': 'BP 142/88, HR 78, RR 16, SpO2 98%. Skin warm and dry.',
        '12-lead': 'Normal sinus rhythm. No ST elevation. Subtle T-wave flattening in V3-V4. No prior ECG for comparison.',
        'pain description': 'Pressure, not sharp. About 5/10. Started gradually 2 hours ago. No radiation. Associated with mild nausea. No dyspnea.',
        'risk factors': 'Diabetic for 15 years, HTN, high cholesterol. Mother had MI at 62. Never smoked. Postmenopausal.',
        'medications': 'Metformin, lisinopril, atorvastatin. Compliant with all.',
        'diabetic': 'Great consideration! Diabetics often have atypical presentations - may not have classic chest pain.'
    },
    keyTeachingPoints: [
        'Absence of STEMI doesn\'t rule out ACS - NSTEMI and unstable angina are still emergencies',
        'Women and diabetics often have atypical presentations',
        'Subtle ECG changes (T-wave inversions, flattening) may indicate ischemia',
        'When in doubt, treat as ACS and transport to appropriate facility',
        'Risk factors matter: DM, HTN, hyperlipidemia, family history, age all increase pretest probability',
        'Serial 12-leads may reveal evolving changes'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'ACS Spectrum', link: '../mechanism/acs-module.html', reason: 'STEMI vs NSTEMI vs UA' },
        { type: 'coachdx', title: 'Atypical ACS', link: 'mentor-chat.html?case=chest-pain-acs-b', reason: 'More atypical presentations' }
    ]
},

'ems-stroke': {
    id: 'ems-stroke',
    title: 'Stroke - Field Assessment & Routing',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'William Jackson',
        age: 71,
        sex: 'Male',
        setting: 'Field - Patient Home',
        acuity: 'Critical',
        chiefComplaint: 'Left-sided Weakness'
    },
    description: 'Dispatched for 71-year-old male with sudden weakness. Wife states patient was watching TV when he suddenly couldn\'t lift his left arm. Speech sounds "garbled." Symptoms started 45 minutes ago.',
    openingStatement: 'Mr. Jackson has clear left-sided weakness and slurred speech that started suddenly 45 minutes ago. Time is brain. What\'s your assessment and plan?',
    conceptDomains: {
        'Scene Assessment': ['scene_safety', 'time_critical'],
        'History': ['last_known_well', 'symptom_onset', 'witnesses', 'medications'],
        'Stroke Assessment': ['cincinnati', 'fast', 'nihss_prehospital', 'lvo_screening'],
        'Physical Assessment': ['vitals', 'glucose', 'neuro_exam'],
        'Transport Decision': ['stroke_center_routing', 'psc_vs_csc', 'air_medical'],
        'Communication': ['stroke_alert', 'hospital_notification']
    },
    quickActions: [
        'Establish last known well time',
        'Cincinnati Stroke Scale',
        'Check blood glucose',
        'Call stroke alert'
    ],
    defined_responses: {
        'last known well': 'Wife confirms he was completely normal at 7:15 AM watching the news. It\'s now 8:05 AM. Last known well: 50 minutes ago.',
        'vitals': 'BP 178/96, HR 82 regular, RR 14, SpO2 97%, Glucose 142.',
        'cincinnati': 'Facial droop: YES - left side. Arm drift: YES - left arm drifts down. Speech: YES - slurred, "no ifs ands or buts" garbled. 3/3 positive.',
        'medications': 'Warfarin for AFib, metoprolol, lisinopril. Wife unsure of recent INR.',
        'anticoagulation': 'Critical information! On warfarin - need to alert receiving hospital. May affect treatment options.',
        'lvo screening': 'Using LAMS: Face 1, Arm 2, Speech 1 = 4. Score ≥4 suggests large vessel occlusion. Consider comprehensive stroke center.',
        'gaze': 'Eyes deviated to the right (toward the lesion). Suggests large territory stroke.'
    },
    keyTeachingPoints: [
        'Last known well (LKW) is the most critical piece of history - determines tPA eligibility',
        'tPA window: up to 4.5 hours from LKW (with some exclusions)',
        'Thrombectomy window: up to 24 hours for select patients with LVO',
        'Large vessel occlusion (LVO) screening helps determine optimal destination',
        'Comprehensive stroke centers can do thrombectomy; primary stroke centers cannot',
        'Blood glucose check is mandatory - hypoglycemia can mimic stroke',
        'Anticoagulation status affects treatment decisions',
        'Keep BP permissive unless >220/120 or tPA candidate'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Stroke Mechanisms', link: '../mechanism/stroke-module.html', reason: 'Ischemic vs hemorrhagic' },
        { type: 'coachdx', title: 'ED Stroke', link: 'mentor-chat.html?case=stroke', reason: 'Hospital management' }
    ]
},

'ems-altered-mental-status': {
    id: 'ems-altered-mental-status',
    title: 'Altered Mental Status - Field Workup',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'Esther Asante',
        age: 78,
        sex: 'Female',
        setting: 'Field - Nursing Facility',
        acuity: 'High',
        chiefComplaint: 'Confusion'
    },
    description: 'Dispatched to nursing home for 78-year-old female with altered mental status. Staff reports patient was fine yesterday but found confused and lethargic this morning. Unable to provide history.',
    openingStatement: 'Mrs. Evans is confused and can\'t tell you what\'s wrong. Nursing staff has limited information. How do you systematically approach altered mental status in the field?',
    conceptDomains: {
        'Scene Assessment': ['medication_bottles', 'environmental_clues', 'facility_records'],
        'History': ['aeiou_tips', 'baseline_mental_status', 'recent_changes', 'medications'],
        'Physical Assessment': ['vitals', 'glucose', 'neuro_exam', 'pupil_exam', 'skin_signs'],
        'Differential': ['reversible_causes', 'life_threats'],
        'Interventions': ['glucose', 'narcan', 'oxygen'],
        'Transport': ['destination_decision', 'information_gathering']
    },
    quickActions: [
        'Check blood glucose NOW',
        'Get medication list',
        'AEIOU-TIPS differential',
        'Pupil and neuro exam'
    ],
    defined_responses: {
        'glucose': 'Glucose: 48 mg/dL. This is significant hypoglycemia!',
        'aeiou_tips': 'A-Alcohol/Acidosis, E-Epilepsy/Electrolytes/Encephalopathy, I-Infection/Intoxication, O-Overdose/Oxygen, U-Uremia. T-Trauma/Temperature, I-Infection/Insulin, P-Psych/Poison, S-Stroke/Shock/Seizure',
        'vitals': 'BP 108/62, HR 96, RR 18, SpO2 95%, Temp 99.8°F. Skin cool and slightly diaphoretic.',
        'medications': 'Per MAR: glipizide 10mg BID, metformin, lisinopril, furosemide, potassium. Diabetic on sulfonylurea.',
        'pupils': 'PERRL, 4mm bilaterally. No focal findings.',
        'treatment': 'D50 (or D10 if available) IV. If no IV, glucagon 1mg IM. Recheck glucose in 5 minutes.',
        'response to dextrose': 'After D50: Patient becomes more alert within 3 minutes. Glucose now 186. She asks where she is.'
    },
    keyTeachingPoints: [
        'ALWAYS check glucose in altered mental status - it\'s fast, easy, and potentially life-saving',
        'Hypoglycemia can mimic stroke, intoxication, psychiatric emergency',
        'Sulfonylureas (glipizide, glyburide) cause prolonged hypoglycemia - may need repeat dosing',
        'AEIOU-TIPS is a useful mnemonic for AMS differential',
        'Look for medication bottles, patches, medical alert jewelry',
        'Nursing home patients: ask about recent changes, infections, falls, medication changes',
        'Naloxone is diagnostic and therapeutic - low threshold to give if opioid suspected'
    ],
    relatedContent: [
        { type: 'coachdx', title: 'Hypoglycemia Management', link: 'mentor-chat.html?case=hypoglycemia', reason: 'In-depth glucose management' },
        { type: 'mechanism', title: 'Diabetes & DKA', link: '../mechanism/diabetes-dka-module.html', reason: 'Glucose physiology' }
    ]
},

'ems-respiratory-distress': {
    id: 'ems-respiratory-distress',
    title: 'Respiratory Distress - CHF vs COPD',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'Chukwuemeka Nnamdi',
        age: 72,
        sex: 'Male',
        setting: 'Field - Patient Home',
        acuity: 'Critical',
        chiefComplaint: 'Can\'t Breathe'
    },
    description: 'Dispatched for 72-year-old male in respiratory distress. Patient found sitting upright in chair, tripoding, speaking in 2-3 word sentences. History of both CHF and COPD per wife.',
    openingStatement: 'Mr. Kowalski is in severe respiratory distress - tripoding, using accessory muscles, SpO2 84%. He has both CHF and COPD. How do you differentiate and treat in the field?',
    conceptDomains: {
        'Scene Assessment': ['home_equipment', 'medication_clues', 'positioning'],
        'History': ['onset', 'triggers', 'orthopnea_vs_copd_pattern', 'medications'],
        'Physical Assessment': ['vitals', 'lung_sounds', 'jvd', 'peripheral_edema', 'skin'],
        'Differentiation': ['chf_vs_copd', 'mixed_picture'],
        'Interventions': ['cpap', 'bronchodilators', 'nitro', 'positioning'],
        'Transport': ['als_critical', 'continue_treatment']
    },
    quickActions: [
        'High-flow O2 or CPAP',
        'Assess lung sounds',
        'Look for JVD and edema',
        'Nebulized albuterol'
    ],
    defined_responses: {
        'vitals': 'BP 188/102, HR 118 irregular, RR 32, SpO2 84% on room air. Temp 98.4°F.',
        'lung sounds': 'Bilateral crackles to mid-lung fields, with some scattered expiratory wheezes.',
        'jvd': 'Yes, JVD present at 45 degrees.',
        'edema': '2+ pitting edema bilateral lower extremities. Wife says "his legs have been swelling for a week."',
        'history': 'Progressively worse over 3 days. Worse when lying flat - sleeping in recliner. No fever or cough. Ran out of "water pill" last week.',
        'medications': 'Usually takes: furosemide, lisinopril, metoprolol, albuterol inhaler, tiotropium. Ran out of furosemide.',
        'cpap': 'Excellent choice. CPAP at 10 cmH2O - reduces preload AND afterload, improves oxygenation. SpO2 improves to 92% within 5 minutes.'
    },
    keyTeachingPoints: [
        'CHF clues: JVD, peripheral edema, orthopnea, crackles, S3 gallop',
        'COPD clues: barrel chest, pursed-lip breathing, wheezes > crackles, prolonged expiration',
        'Many patients have BOTH - treat what you find',
        'CPAP is first-line for acute pulmonary edema - reduces mortality',
        'Can give bronchodilators and CPAP together',
        'Nitro (if SBP >100) reduces preload in CHF',
        'If wheezes predominate, add bronchodilators',
        'Position of comfort - usually sitting upright'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Heart Failure', link: '../mechanism/hf-module.html', reason: 'CHF pathophysiology' },
        { type: 'mechanism', title: 'COPD', link: '../mechanism/copd-module.html', reason: 'COPD pathophysiology' },
        { type: 'coachdx', title: 'Acute CHF', link: 'mentor-chat.html?case=acute-dyspnea-chf', reason: 'Hospital CHF management' }
    ]
},

'ems-trauma-mvc': {
    id: 'ems-trauma-mvc',
    title: 'Trauma - MVC Assessment',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'advanced',
    patient: {
        name: 'Michael Torres',
        age: 34,
        sex: 'Male',
        setting: 'Field - Highway',
        acuity: 'Critical',
        chiefComplaint: 'Motor Vehicle Crash'
    },
    description: 'Dispatched to highway MVC. Single vehicle vs tree, high speed. Driver unrestrained, positive airbag deployment, major front-end damage, starring of windshield. Patient ambulatory but confused.',
    openingStatement: 'Mr. Torres was the unrestrained driver in a high-speed MVC. He\'s ambulatory and says he\'s fine, but the mechanism is significant. How do you approach this trauma?',
    conceptDomains: {
        'Scene Assessment': ['scene_safety', 'mechanism', 'additional_patients', 'resources'],
        'Primary Survey': ['catastrophic_hemorrhage', 'airway', 'breathing', 'circulation', 'disability'],
        'Secondary Survey': ['head_to_toe', 'hidden_injuries'],
        'C-Spine': ['immobilization_criteria', 'nexus', 'canadian_cspine'],
        'Trauma Decision': ['load_and_go', 'stay_and_play', 'trauma_center_criteria'],
        'Transport': ['destination', 'air_medical', 'handoff']
    },
    quickActions: [
        'C-spine stabilization',
        'Primary survey (MARCH/ABCDE)',
        'Look for hidden hemorrhage',
        'Trauma center criteria?'
    ],
    defined_responses: {
        'scene': 'High-speed impact, major front-end damage, windshield starring (head impact), unrestrained driver. Fire on scene, vehicle stable.',
        'primary survey': 'A: Patent, speaking. B: Clear bilaterally, no flail chest. C: Radial pulse present, slightly tachycardic. D: GCS 14 (E4V4M6), confused about events. E: No obvious external hemorrhage.',
        'vitals': 'BP 104/72, HR 108, RR 20, SpO2 98%.',
        'secondary survey': 'Contusion to forehead from windshield. Seat belt sign across abdomen despite being unrestrained (hit steering wheel). Tender LUQ. Left arm deformity - likely closed forearm fracture.',
        'pupils': 'PERRL 4mm bilaterally.',
        'cspine': 'Mechanism warrants immobilization. Altered mental status. Full c-spine precautions indicated.',
        'trauma center': 'YES - Multiple criteria: unrestrained, high-speed, altered mental status, abdominal tenderness with mechanism. Consider air medical if >20 min ground transport.'
    },
    keyTeachingPoints: [
        'Mechanism matters: unrestrained + high speed + windshield = high suspicion',
        '"Walking wounded" can still have life-threatening injuries',
        'Tachycardia may be early sign of hemorrhage - don\'t wait for hypotension',
        'Seat belt sign with abdominal tenderness = high suspicion for hollow viscus or solid organ injury',
        'NEXUS and Canadian C-Spine rules help with immobilization decisions',
        'Trauma center criteria: know them and use them',
        'Load and go - scene time <10 minutes for critical trauma',
        'Golden hour: definitive care within 60 minutes of injury'
    ],
    relatedContent: [
        { type: 'reasondx', title: 'Trauma Cases', link: '../ReasonDx/training.html', reason: 'Practice trauma assessment' }
    ]
},

'ems-pediatric-fever': {
    id: 'ems-pediatric-fever',
    title: 'Pediatric Fever - Sick vs Not Sick',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'Emma Rodriguez',
        age: 14,
        sex: 'Female',
        setting: 'Field - Patient Home',
        acuity: 'Medium',
        chiefComplaint: 'Fever',
        ageMonths: 14
    },
    description: 'Dispatched for 14-month-old female with fever. Parents state temp was 103.4°F at home, child has been fussy and not eating well for 1 day. First-time parents are very worried.',
    openingStatement: 'Emma\'s parents are scared - she\'s been hot and fussy all day. She\'s alert but irritable. Your job is to determine: is this a sick child or a not-sick child with a fever? How do you assess?',
    conceptDomains: {
        'Scene Assessment': ['environment', 'parent_reliability', 'resources'],
        'History': ['fever_duration', 'associated_symptoms', 'intake_output', 'immunizations', 'sick_contacts'],
        'Pediatric Assessment': ['appearance', 'work_of_breathing', 'circulation', 'pat_triangle'],
        'Physical Assessment': ['vitals', 'fontanelle', 'skin', 'hydration', 'rash'],
        'Red Flags': ['toxic_appearance', 'meningismus', 'petechiae', 'ill_appearing'],
        'Management': ['supportive_care', 'transport_decision']
    },
    quickActions: [
        'Pediatric Assessment Triangle',
        'Check for rash/petechiae',
        'Assess hydration status',
        'Any stiff neck?'
    ],
    defined_responses: {
        'vitals': 'Temp 103.2°F (39.6°C), HR 156, RR 32, SpO2 99%. Weight ~10kg per parents.',
        'pat': 'Appearance: Alert, fussy but consolable by mom, makes eye contact. Work of Breathing: Normal - no retractions, no flaring. Circulation: Pink, warm extremities.',
        'fontanelle': 'Anterior fontanelle soft, flat - not bulging or sunken.',
        'rash': 'No rash, no petechiae.',
        'hydration': 'Mucous membranes slightly dry. Last wet diaper 4 hours ago. Has been taking some fluids.',
        'history': 'Fever started yesterday evening. Runny nose, pulling at right ear. No vomiting, no diarrhea. Vaccinations up to date. Older sibling had cold last week.',
        'meningitis signs': 'No nuchal rigidity. No photophobia. Consolable. Not toxic-appearing.'
    },
    keyTeachingPoints: [
        'Pediatric Assessment Triangle (PAT): Appearance, Work of Breathing, Circulation',
        'Sick vs Not Sick is the key field determination',
        'Red flags: toxic appearance, petechiae/purpura, bulging fontanelle, inconsolable, stiff neck',
        'Fever alone in a well-appearing child 3-36 months is usually viral',
        'Under 3 months with fever = always transport - high risk for serious bacterial infection',
        'Trust your gut and parent concern, but use objective assessment',
        'Ear tugging + URI symptoms + fever = likely otitis media',
        'Hydration status: wet diapers, mucous membranes, skin turgor'
    ],
    relatedContent: [
        { type: 'coachdx', title: 'Pediatric Fever ED', link: 'mentor-chat.html?case=pediatric-fever', reason: 'Hospital workup' }
    ]
},

'ems-anaphylaxis': {
    id: 'ems-anaphylaxis',
    title: 'Anaphylaxis - Don\'t Delay Epi',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'Lakshmi Venkatesh',
        age: 28,
        sex: 'Female',
        setting: 'Field - Restaurant',
        acuity: 'Critical',
        chiefComplaint: 'Allergic Reaction'
    },
    description: 'Dispatched to restaurant for allergic reaction. 28-year-old female with lip swelling and hives after eating. Patient has known peanut allergy but thought dish was safe. Epi-pen available but patient hesitant to use it.',
    openingStatement: 'Ms. Tanaka has lip and tongue swelling, hives on her trunk, and feels her throat getting tight. She\'s scared to use her EpiPen. BP 92/58, HR 124. What do you do?',
    conceptDomains: {
        'Scene Assessment': ['remove_trigger', 'resources'],
        'Recognition': ['anaphylaxis_criteria', 'multisystem_involvement'],
        'History': ['allergen', 'prior_reactions', 'timing'],
        'Physical Assessment': ['airway', 'breathing', 'circulation', 'skin'],
        'Treatment': ['epinephrine', 'positioning', 'fluids', 'adjuncts'],
        'Transport': ['anticipate_deterioration', 'biphasic_reaction']
    },
    quickActions: [
        'Give epinephrine NOW',
        'Position supine, legs elevated',
        'High-flow oxygen',
        'IV access and fluids'
    ],
    defined_responses: {
        'vitals': 'BP 92/58, HR 124, RR 24, SpO2 94%. Voice becoming hoarse.',
        'airway': 'Lip and tongue swelling present. Mild stridor beginning. Can still speak in full sentences but voice is hoarse.',
        'skin': 'Diffuse urticaria on trunk and extremities. Flushed.',
        'history': 'Peanut allergy since childhood. Has EpiPen but never used it. Last reaction was 3 years ago, milder.',
        'epinephrine': 'This is ANAPHYLAXIS. Give epi 0.3mg IM (adult dose) NOW into lateral thigh. Don\'t wait - airway can close rapidly.',
        'after epi': 'Within 5 minutes: HR down to 102, BP 108/68, stridor improving, reports feeling better. Symptoms improving.',
        'positioning': 'Supine with legs elevated unless respiratory distress - then position of comfort (often sitting up).'
    },
    keyTeachingPoints: [
        'Anaphylaxis = allergic symptoms + respiratory OR cardiovascular compromise',
        'EPINEPHRINE IS THE ONLY LIFE-SAVING TREATMENT - do not delay',
        'Epi dose: 0.3-0.5mg IM (1:1000) for adults, 0.15mg for peds <25kg',
        'Can repeat epi every 5-15 minutes if symptoms persist',
        'Antihistamines and steroids are adjuncts - they don\'t save lives in acute anaphylaxis',
        'Biphasic reactions can occur 4-12 hours later - patients need ED observation',
        'Hypotension without epi = may need aggressive IV fluids (1-2L rapid)',
        'Supine positioning improves venous return in distributive shock'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Anaphylaxis Mechanism', link: '../mechanism/allergy-module.html', reason: 'Type I hypersensitivity' },
        { type: 'coachdx', title: 'ED Anaphylaxis', link: 'mentor-chat.html?case=anaphylaxis', reason: 'Hospital continuation' }
    ]
},

'ems-overdose': {
    id: 'ems-overdose',
    title: 'Overdose - Unknown Substance',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'Jason Miller',
        age: 24,
        sex: 'Male',
        setting: 'Field - Public Park',
        acuity: 'Critical',
        chiefComplaint: 'Unresponsive'
    },
    description: 'Dispatched to park for unresponsive male. Bystanders found 24-year-old on bench, won\'t wake up. Nearby drug paraphernalia noted. Unknown substance involved.',
    openingStatement: 'Mr. Miller is unresponsive on a park bench. RR is 6, shallow. Pinpoint pupils. There\'s a needle and baggie nearby. Your partner is getting naloxone. What\'s your full approach?',
    conceptDomains: {
        'Scene Safety': ['bsl_precautions', 'needle_safety', 'potential_combativeness'],
        'Assessment': ['level_of_consciousness', 'respiratory_status', 'pupil_exam'],
        'Toxidromes': ['opioid', 'sympathomimetic', 'cholinergic', 'anticholinergic', 'sedative'],
        'Interventions': ['airway_management', 'naloxone', 'supportive'],
        'Considerations': ['polysubstance', 'contaminants', 'bystander_naloxone'],
        'Transport': ['ongoing_monitoring', 'repeat_dosing']
    },
    quickActions: [
        'BSI/Scene safety - gloves',
        'Check responsiveness',
        'Support ventilations',
        'Naloxone 2mg IN or 0.4mg IV'
    ],
    defined_responses: {
        'scene': 'Public park, daylight. One bystander present. Needle on ground, small baggie with white powder residue. Patient alone.',
        'vitals': 'BP 98/62, HR 58, RR 6 and shallow, SpO2 82% on room air. Temp not obtainable.',
        'assessment': 'GCS 3 (E1V1M1). Pinpoint pupils (1mm). No response to sternal rub. Track marks on arms.',
        'bag_valve_mask': 'Start BVM with high-flow O2 immediately. SPO2 improves to 94% with assisted ventilations.',
        'naloxone': 'Give naloxone 2mg intranasal (1mg each nostril) or 0.4mg IV/IM. Can titrate to respiratory effort, not necessarily full consciousness.',
        'response': 'After 2 minutes: Respirations improving to 12/min. Becoming responsive to voice. Starting to move extremities.',
        'wakes up angry': 'Common. Many patients wake agitated. Explain what happened. He may refuse transport - document thoroughly.'
    },
    keyTeachingPoints: [
        'Scene safety paramount - needles, unknown substances, patient may wake combative',
        'Opioid toxidrome: pinpoint pupils, respiratory depression, decreased LOC',
        'Support ventilations FIRST - naloxone takes time to work',
        'Naloxone goal: restore respiratory drive, not full alertness',
        'Start with lower naloxone doses to avoid precipitating severe withdrawal',
        'Fentanyl may require higher/repeated naloxone doses',
        'Duration of naloxone < duration of many opioids - patient can re-sedate',
        'If no response to naloxone, consider other substances or medical causes',
        'Polysubstance use is common - patient may have multiple toxidromes'
    ],
    relatedContent: [
        { type: 'coachdx', title: 'Acetaminophen OD', link: 'mentor-chat.html?case=acetaminophen-overdose', reason: 'Other overdose patterns' },
        { type: 'mechanism', title: 'Toxicology', link: '../mechanism/toxicology-module.html', reason: 'Toxidrome recognition' }
    ]
},

'ems-cardiac-arrest': {
    id: 'ems-cardiac-arrest',
    title: 'Cardiac Arrest - Field Management',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'advanced',
    patient: {
        name: 'Tariq Hussain',
        age: 62,
        sex: 'Male',
        setting: 'Field - Grocery Store',
        acuity: 'Critical',
        chiefComplaint: 'Cardiac Arrest'
    },
    description: 'Dispatched to grocery store for cardiac arrest. 62-year-old male collapsed in checkout line. Bystander CPR in progress. Store AED applied, advises shock.',
    openingStatement: 'You arrive to find a bystander doing CPR on Mr. Williams. Store AED is attached and advising shock. He collapsed about 4 minutes ago. Take over this resuscitation.',
    conceptDomains: {
        'Scene Management': ['scene_control', 'resources', 'crowd_control'],
        'Initial Actions': ['confirm_arrest', 'continue_cpr', 'defibrillation'],
        'ACLS': ['rhythm_analysis', 'shockable_vs_nonshockable', 'medications'],
        'High Quality CPR': ['rate', 'depth', 'recoil', 'minimizing_interruptions'],
        'Reversible Causes': ['hs_ts'],
        'Termination Criteria': ['rosc_signs', 'termination_rules']
    },
    quickActions: [
        'Continue CPR, deliver shock',
        'Advanced airway',
        'IV/IO access',
        'Epi 1mg q3-5min'
    ],
    defined_responses: {
        'initial rhythm': 'Ventricular fibrillation on AED. Shock advised.',
        'first shock': 'Shock delivered at 200J. Continue CPR immediately for 2 minutes before rhythm check.',
        'second check': 'Still VF after first 2 minutes of CPR. Second shock delivered.',
        'vitals during cpr': 'ETCO2 on capnography: 32 mmHg (good indicator of CPR quality). No pulse check until rhythm change.',
        'third check': 'Rhythm is now organized - appears sinus. Check pulse... weak carotid pulse present! ROSC achieved.',
        'post rosc': 'BP 88/54, HR 72 sinus. GCS 3 currently. Begin post-arrest care.',
        'meds given': 'Epinephrine 1mg IV x2 (every 3-5 min during arrest). Consider amiodarone 300mg for refractory VF.',
        'history': 'Witnesses say he grabbed his chest and collapsed suddenly. Bystander started CPR within 1 minute. AED arrived at 3 minutes.'
    },
    keyTeachingPoints: [
        'High-quality CPR saves lives: rate 100-120, depth 2-2.4 inches, full recoil, minimal interruptions',
        'Early defibrillation is key for VF/VT - each minute delay reduces survival ~10%',
        'Bystander CPR + AED dramatically improves survival',
        'Epinephrine 1mg IV/IO every 3-5 minutes',
        'Amiodarone 300mg first dose, 150mg second for refractory VF/pVT',
        'H\'s and T\'s: Hypovolemia, Hypoxia, Hydrogen ion, Hypo/hyperkalemia, Hypothermia, Tension pneumo, Tamponade, Toxins, Thrombosis (coronary/pulmonary)',
        'ETCO2 >10 mmHg suggests adequate CPR; sudden rise may indicate ROSC',
        'Post-ROSC: maintain oxygenation, BP support, targeted temperature management at hospital'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Arrhythmias', link: '../mechanism/syncope-arrhythmia-module.html', reason: 'VF/VT mechanisms' },
        { type: 'coachdx', title: 'Post-Arrest Care', link: 'mentor-chat.html?case=cardiac-arrest', reason: 'Hospital management' }
    ]
},

'ems-hypoglycemia': {
    id: 'ems-hypoglycemia',
    title: 'Hypoglycemia - Treat and Release?',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'basic',
    patient: {
        name: 'Margaret Thompson',
        age: 67,
        sex: 'Female',
        setting: 'Field - Patient Home',
        acuity: 'Medium',
        chiefComplaint: 'Weakness and Confusion'
    },
    description: 'Dispatched for 67-year-old diabetic female found confused by daughter. Patient takes insulin. Daughter gave her orange juice but called 911 anyway.',
    openingStatement: 'Mrs. Adesanya was confused when her daughter found her. Glucose is 54. The daughter gave OJ and she\'s more alert now. She wants to refuse transport. How do you handle this?',
    conceptDomains: {
        'Assessment': ['mental_status', 'glucose_level', 'symptoms'],
        'History': ['diabetes_type', 'medications', 'cause_of_hypoglycemia', 'recurrent'],
        'Treatment': ['oral_glucose', 'd50', 'd10', 'glucagon'],
        'Disposition': ['treat_and_release_criteria', 'refusal_considerations', 'patient_education'],
        'Documentation': ['informed_refusal', 'repeat_glucose']
    },
    quickActions: [
        'Recheck glucose',
        'Review diabetes medications',
        'Assess for cause',
        'Can she safely stay home?'
    ],
    defined_responses: {
        'initial glucose': 'Glucose: 54 mg/dL. After OJ, patient now more alert.',
        'repeat glucose': 'Glucose now: 98 mg/dL. Patient is A&Ox3, GCS 15.',
        'vitals': 'BP 138/82, HR 88, RR 16, SpO2 99%. All normal.',
        'medications': 'Takes metformin and glargine (long-acting insulin) daily. Took her usual dose this morning but then didn\'t eat breakfast - "wasn\'t hungry."',
        'history': 'Type 2 diabetes x 20 years. No prior severe hypoglycemia. No recent illness. Didn\'t eat because she felt tired.',
        'mental status': 'Fully alert, oriented to person, place, time, situation. Remembers events. Appropriate conversation.',
        'treat and release': 'Many systems allow treat-and-release if: glucose corrected >80, patient asymptomatic, can eat, reliable caregiver, no long-acting insulin/sulfonylurea concerns.'
    },
    keyTeachingPoints: [
        'Hypoglycemia rule of 15: 15g fast carbs, recheck in 15 minutes',
        'D50 = 25g dextrose. D10 preferred in many systems (less rebound, less extravasation risk)',
        'Glucagon 1mg IM if no IV access - works in 10-15 minutes',
        'Sulfonylureas and long-acting insulin cause prolonged hypoglycemia - higher risk of recurrence',
        'Treat and release criteria vary by system - know your protocols',
        'Always find the cause: missed meal, extra insulin, new medication, illness, alcohol',
        'Patients with recurrent hypoglycemia need tighter follow-up',
        'Document thoroughly if patient refuses transport after treatment'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Diabetes & DKA', link: '../mechanism/diabetes-dka-module.html', reason: 'Glucose physiology' },
        { type: 'coachdx', title: 'DKA Management', link: 'mentor-chat.html?case=dka', reason: 'Opposite end of glucose spectrum' }
    ]
},

'ems-seizure': {
    id: 'ems-seizure',
    title: 'Seizure - Active vs Postictal',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'Anthony Garcia',
        age: 29,
        sex: 'Male',
        setting: 'Field - Workplace',
        acuity: 'High',
        chiefComplaint: 'Seizure'
    },
    description: 'Dispatched to construction site for seizure. 29-year-old male found seizing by coworkers. Seizure activity has been ongoing for 4 minutes per bystanders when you arrive.',
    openingStatement: 'Mr. Garcia is having a generalized tonic-clonic seizure, now going on 5 minutes. Coworkers are holding him down. What are your priorities?',
    conceptDomains: {
        'Scene Safety': ['patient_protection', 'bystander_education'],
        'Assessment': ['seizure_type', 'duration', 'airway'],
        'History': ['known_epilepsy', 'medications', 'triggers', 'aura'],
        'Interventions': ['positioning', 'benzodiazepines', 'airway_management'],
        'Status Epilepticus': ['definition', 'treatment_urgency'],
        'Postictal': ['expected_recovery', 'todd_paralysis']
    },
    quickActions: [
        'Stop them from holding him down',
        'Protect from injury',
        'Check glucose',
        'Prepare benzodiazepine'
    ],
    defined_responses: {
        'scene': 'Construction site, patient on ground. Coworkers holding his arms and legs. Hard hat nearby.',
        'assessment': 'Generalized tonic-clonic seizure. Eyes deviated, rhythmic jerking all extremities. Incontinent. Cyanotic around lips.',
        'duration': 'Bystanders report it started about 5 minutes ago. Still actively seizing.',
        'vitals during seizure': 'Can\'t get accurate vitals during active seizure. SpO2 shows 88% but probe unreliable with movement.',
        'glucose': 'Glucose: 118 mg/dL - not hypoglycemia.',
        'medication': 'This is status epilepticus (>5 min). Give midazolam 10mg IM or diazepam 10mg IV/PR. Lorazepam 4mg IV is also first-line.',
        'seizure stops': 'After midazolam 10mg IM, seizure stops at 7 minutes total duration. Patient now postictal - confused, not following commands.',
        'postictal': 'Postictal state is expected. GCS 10 (E3V3M4). Gradually becoming more responsive over 10 minutes.'
    },
    keyTeachingPoints: [
        'Status epilepticus = seizure >5 minutes or recurrent seizures without return to baseline',
        'DON\'T hold the patient down or put anything in their mouth',
        'DO: protect from injury, position on side if possible, prepare medication',
        'First-line benzos: midazolam IM (works fast, no IV needed), lorazepam IV, diazepam IV/PR',
        'Always check glucose - hypoglycemia causes seizures',
        'Postictal confusion is normal - typically resolves in 15-30 minutes',
        'Todd\'s paralysis: focal weakness after seizure, can mimic stroke, typically resolves',
        'New-onset seizure in adult = transport for workup (CT, labs)',
        'Known epileptic with typical seizure who returns to baseline may refuse transport'
    ],
    relatedContent: [
        { type: 'coachdx', title: 'Status Epilepticus', link: 'mentor-chat.html?case=status-epilepticus', reason: 'Hospital seizure management' },
        { type: 'mechanism', title: 'Neurology', link: '../mechanism/stroke-module.html', reason: 'Neurological emergencies' }
    ]
},

'ems-abdominal-pain': {
    id: 'ems-abdominal-pain',
    title: 'Abdominal Pain - Surgical Emergency?',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'Raj Malhotra',
        age: 74,
        sex: 'Male',
        setting: 'Field - Patient Home',
        acuity: 'High',
        chiefComplaint: 'Abdominal Pain'
    },
    description: 'Dispatched for 74-year-old male with severe abdominal pain. Patient found lying on bathroom floor, moaning. Reports sudden onset of severe abdominal and back pain. History of HTN and smoking.',
    openingStatement: 'Mr. Foster is a 74-year-old smoker with sudden severe abdominal and back pain. He\'s pale, diaphoretic, and says this is the worst pain of his life. What are you thinking?',
    conceptDomains: {
        'Assessment': ['pain_characteristics', 'associated_symptoms', 'vital_signs'],
        'History': ['onset', 'risk_factors', 'surgical_history', 'vascular_history'],
        'Physical Exam': ['abdominal_exam', 'pulse_exam', 'back_exam'],
        'Differential': ['aaa', 'mesenteric_ischemia', 'bowel_obstruction', 'perforated_viscus'],
        'Management': ['iv_access', 'pain_management', 'transport_decision'],
        'Transport': ['critical_destination', 'surgical_center']
    },
    quickActions: [
        'Large bore IV access x2',
        'Check bilateral radial and femoral pulses',
        'Pain management',
        'Rapid transport to surgical center'
    ],
    defined_responses: {
        'vitals': 'BP 88/62, HR 118, RR 24, SpO2 94%. Skin cool, pale, diaphoretic.',
        'pain': 'Sudden onset 1 hour ago. Tearing quality, started in abdomen and radiates to back. 10/10. Nothing makes it better.',
        'history': 'HTN x 20 years, "doesn\'t always take his pills." 50 pack-year smoking history. No prior surgery.',
        'abdominal exam': 'Diffusely tender, pulsatile mass palpable in periumbilical area.',
        'pulses': 'Radial pulses present but weak. Femoral pulses diminished bilaterally.',
        'diagnosis': 'Classic presentation for ruptured AAA: elderly male, smoking history, HTN, sudden tearing pain, pulsatile mass, hypotension.',
        'treatment': 'Two large bore IVs. Permissive hypotension (target SBP 80-90) - aggressive fluids may worsen bleeding. Pain management. RAPID transport to facility with vascular surgery.'
    },
    keyTeachingPoints: [
        'AAA risk factors: age >65, male, smoking, HTN, family history',
        'Classic AAA triad: abdominal/back pain, pulsatile mass, hypotension',
        'Ruptured AAA mortality is very high - time to surgery is critical',
        'Permissive hypotension: SBP 80-90 until surgical control',
        'Don\'t delay transport for interventions - load and go',
        'Destination must have vascular surgery capability',
        'Pain out of proportion to exam = consider mesenteric ischemia',
        'Elderly + abdominal pain + altered mental status = high suspicion for serious pathology'
    ],
    relatedContent: [
        { type: 'coachdx', title: 'Aortic Dissection', link: 'mentor-chat.html?case=aortic-dissection', reason: 'Similar presentation' },
        { type: 'reasondx', title: 'Abdominal Pain Cases', link: '../ReasonDx/training.html', reason: 'More abdominal cases' }
    ]
},

'ems-behavioral': {
    id: 'ems-behavioral',
    title: 'Behavioral Emergency - Safety First',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    patient: {
        name: 'Kevin Davis',
        age: 32,
        sex: 'Male',
        setting: 'Field - Street',
        acuity: 'High',
        chiefComplaint: 'Agitated, Threatening'
    },
    description: 'Dispatched for agitated male, police on scene. 32-year-old found yelling at people on street corner. Paranoid, says "they\'re trying to poison me." Has a history per police of schizophrenia.',
    openingStatement: 'Police have Mr. Davis loosely contained. He\'s pacing, yelling about being poisoned, won\'t let anyone approach. This is primarily a behavioral emergency but you need to rule out medical causes. How do you approach?',
    conceptDomains: {
        'Scene Safety': ['egress', 'law_enforcement', 'team_approach'],
        'Assessment': ['from_distance', 'medical_vs_psychiatric', 'intoxication'],
        'De-escalation': ['verbal_techniques', 'body_language', 'space'],
        'History': ['psychiatric_history', 'medications', 'substance_use'],
        'Medical Causes': ['hypoglycemia', 'hypoxia', 'infection', 'intoxication', 'head_injury'],
        'Management': ['chemical_restraint', 'physical_restraint', 'transport']
    },
    quickActions: [
        'Ensure scene safety',
        'Observe from distance first',
        'Attempt verbal de-escalation',
        'Rule out medical causes'
    ],
    defined_responses: {
        'scene': 'Street corner, daylight. Two police officers present. Patient pacing in small area, no weapons visible. Crowd of onlookers.',
        'observation': 'Alert, pacing, talking rapidly. Paranoid content. No obvious trauma. Appears well-nourished. Pupils difficult to assess from distance.',
        'approach': 'Approach slowly, non-threatening posture. Use calm, clear voice. "Hi Kevin, I\'m here to help. Can I talk with you for a minute?"',
        'de_escalation': 'Keep safe distance (arm\'s length +). Speak calmly and slowly. Validate feelings without agreeing with delusions. Offer simple choices.',
        'history': 'Per police: known to them for schizophrenia, usually on medication. Sister called saying he hasn\'t taken meds in a week.',
        'vitals': 'If he allows: BP 142/88, HR 112, glucose 94. No obvious focal deficits.',
        'medical causes': 'Alert, ambulatory, no obvious trauma, glucose normal. Likely psychiatric decompensation from medication non-compliance, but remain alert for medical mimics.'
    },
    keyTeachingPoints: [
        'Safety first - for you, your partner, patient, and bystanders',
        'Never enter unsafe scene - wait for law enforcement',
        'De-escalation is first-line: calm voice, non-threatening posture, safe distance',
        'Medical causes of altered behavior: hypoglycemia, hypoxia, infection, drug/alcohol, head injury, metabolic',
        'Excited delirium is a medical emergency with high mortality risk',
        'Chemical restraint options: ketamine, midazolam, haloperidol + diphenhydramine',
        'Physical restraints: use minimum necessary, monitor continuously, document',
        'Patients in behavioral crisis still have rights - try least restrictive options first',
        'Medication non-compliance is common cause of psychiatric decompensation'
    ],
    relatedContent: [
        { type: 'coachdx', title: 'ED Psychiatric Emergency', link: 'mentor-chat.html?case=psychiatric', reason: 'Hospital psychiatry' }
    ]
},

'ems-obstetric': {
    id: 'ems-obstetric',
    title: 'Obstetric Emergency - Imminent Delivery',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'advanced',
    patient: {
        name: 'Maria Gonzalez',
        age: 26,
        sex: 'Female',
        setting: 'Field - Patient Home',
        acuity: 'Critical',
        chiefComplaint: 'In Labor'
    },
    description: 'Dispatched for woman in labor. 26-year-old G3P2 at 38 weeks, contractions every 2 minutes, feels urge to push. This is her third baby. Lives 25 minutes from hospital.',
    openingStatement: 'Mrs. Gonzalez is having contractions every 2 minutes and says she needs to push NOW. She delivered her last baby in 3 hours. Hospital is 25 minutes away. Is this baby coming here or at the hospital?',
    conceptDomains: {
        'Assessment': ['contraction_pattern', 'urge_to_push', 'crowning', 'gravida_para'],
        'History': ['due_date', 'prenatal_care', 'prior_deliveries', 'complications'],
        'Decision': ['transport_vs_deliver', 'time_to_hospital', 'multiparity'],
        'Delivery': ['crowning', 'delivery_technique', 'cord_management'],
        'Complications': ['nuchal_cord', 'shoulder_dystocia', 'postpartum_hemorrhage'],
        'Neonatal': ['apgar', 'warmth', 'stimulation', 'nrp']
    },
    quickActions: [
        'Check for crowning',
        'Don\'t leave if crowning',
        'Prepare delivery equipment',
        'Call for backup'
    ],
    defined_responses: {
        'contractions': 'Every 2 minutes, lasting 60-90 seconds. She\'s bearing down involuntarily.',
        'crowning check': 'You look: YES, crowning - you can see the baby\'s head with contractions!',
        'history': 'G3P2, 38 weeks. Prenatal care regular. Last baby came fast - delivered at hospital but "just barely." No complications.',
        'decision': 'DO NOT transport with crowning visible - you will deliver in the ambulance. Prepare for field delivery.',
        'delivery': 'Support the perineum, control the head delivery (don\'t let it pop out). Check for nuchal cord. Gentle downward traction for anterior shoulder, upward for posterior.',
        'baby': 'Baby delivers! Appears term, crying, pink. Clamp and cut cord after 30-60 seconds of delayed clamping if baby vigorous.',
        'apgar': 'APGAR 1 min: HR>100 (2), Good respiratory effort (2), Active movement (2), Grimace (2), Pink body/blue extremities (1) = 9. Good!',
        'placenta': 'Placenta delivers 5-10 minutes after baby. Do not pull - let it deliver naturally. Uterine massage after.'
    },
    keyTeachingPoints: [
        'Multiparity + urge to push + crowning = imminent delivery - don\'t transport',
        'If crowning visible, prepare to deliver on scene',
        'Most field deliveries are uncomplicated - support don\'t intervene',
        'Control the head - slow delivery prevents perineal tears',
        'Check for nuchal cord - if loose, slip over head; if tight, clamp and cut',
        'Delayed cord clamping (30-60 sec) if baby vigorous',
        'Keep baby warm - dry immediately, skin-to-skin, cover',
        'Postpartum hemorrhage is leading cause of maternal death - uterine massage helps',
        'Shoulder dystocia: McRoberts position (knees to chest), suprapubic pressure'
    ],
    relatedContent: [
        { type: 'coachdx', title: 'OB Complications', link: 'mentor-chat.html?case=obstetric', reason: 'Hospital OB emergencies' }
    ]
}

};

// ============================================================================
// EXPORT FOR INTEGRATION
// ============================================================================

// If using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_EMS_CASES;
}

// For direct browser use - merge with existing cases
if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_EMS_CASES);
    console.log('EMS cases merged into COACHDX_CASES');
} else if (typeof window !== 'undefined') {
    window.COACHDX_EMS_CASES = COACHDX_EMS_CASES;
    console.log('EMS cases available as window.COACHDX_EMS_CASES');
}
