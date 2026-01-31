// ============================================================================
// COACHDX HEMATOLOGY/ONCOLOGY CASE PACK
// SBAR scenarios for heme/onc communication training
// Created: January 29, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================
//
// CASES INCLUDED:
// 1. Neutropenic Fever - Oncologic Emergency
// 2. Tumor Lysis Syndrome - Prevention and Management
// 3. DIC - Consumptive Coagulopathy
// 4. TTP - Thrombotic Microangiopathy
// 5. Acute Leukemia - New Diagnosis with Hyperleukocytosis
//
// ============================================================================

const COACHDX_HEME_ONC_CASES = {

// ============================================================================
// CASE 1: NEUTROPENIC FEVER
// ============================================================================

'neutropenic-fever-emergency': {
    id: 'neutropenic-fever-emergency',
    title: 'Neutropenic Fever - Oncologic Emergency',
    category: 'Hematology/Oncology',
    isParallel: false,
    parallelCase: 'sepsis-pneumonia',
    parallelDescription: 'Sepsis in immunocompetent patient',
    patient: { 
        name: 'Sandra Mitchell', 
        age: 54, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Fever and Chills' 
    },
    description: 'A 54-year-old woman with breast cancer, day 10 post-chemotherapy (docetaxel/cyclophosphamide), presents with fever 39.2°C and rigors for 3 hours. HR 112, BP 98/62. ANC 80 cells/µL. No obvious source - lungs clear, no skin breakdown, port site clean. Creatinine 1.4, lactate 2.8.',
    openingStatement: 'Mrs. Mitchell has neutropenic fever - this is an oncologic emergency where every hour of antibiotic delay increases mortality. You need to act fast and communicate urgently. What\'s your approach?',
    conceptDomains: {
        'Situation': ['fever_definition', 'anc_level', 'hemodynamic_status'],
        'Background': ['cancer_type', 'chemo_regimen', 'days_since_chemo', 'prior_infections'],
        'Assessment': ['mascc_score', 'infection_source', 'risk_stratification'],
        'Recommendation': ['empiric_antibiotics', 'admission_vs_outpatient', 'gcsf_consideration']
    },
    quickActions: [
        'What defines neutropenic fever?',
        'What antibiotic should I start?',
        'Does she need to be admitted?',
        'Should I add vancomycin?'
    ],
    keyTeachingPoints: [
        'Neutropenic fever: ANC <500 (or <1000 and expected to fall) + single temp ≥38.3°C or ≥38.0°C for >1 hour',
        'Antibiotics within 60 minutes - mortality increases 18% per hour of delay',
        'Empiric coverage: Anti-pseudomonal β-lactam (cefepime, pip-tazo, meropenem)',
        'MASCC score helps identify low-risk patients who may be treated outpatient',
        'Add vancomycin only for specific indications (line infection, skin/soft tissue, mucositis, hypotension)'
    ],
    sbarTemplate: {
        situation: 'I have a 54-year-old woman with neutropenic fever - ANC is 80, temp 39.2°C, and she\'s borderline hypotensive. This is an oncologic emergency requiring immediate antibiotics.',
        background: 'She has breast cancer and is day 10 post docetaxel/cyclophosphamide. No obvious infection source on exam - port site is clean, lungs are clear, no skin breakdown. She\'s never had neutropenic fever before.',
        assessment: 'She\'s high-risk given hypotension, ANC <100, and elevated lactate at 2.8. MASCC score is low. She needs admission, broad-spectrum antibiotics, and likely ICU monitoring.',
        recommendation: 'I\'m starting cefepime now - it\'s been 20 minutes since arrival. She needs blood cultures from port and peripheral before antibiotics but I\'m not delaying treatment. Can you help with ICU bed and oncology notification?'
    },
    defined_responses: {
        'nf definition': 'Neutropenic fever = ANC <500 cells/µL (or <1000 expected to fall to <500) PLUS single oral temp ≥38.3°C OR temp ≥38.0°C sustained over 1 hour. Her ANC of 80 is severely neutropenic.',
        'antibiotic choice': 'Empiric monotherapy with anti-pseudomonal β-lactam: cefepime 2g IV, pip-tazo 4.5g IV, or meropenem 1g IV. All are acceptable first-line. Start within 60 minutes of triage - mortality increases 18% per hour of delay.',
        'admission': 'Yes - she\'s high-risk. MASCC score helps stratify: points for burden of illness, hypotension, COPD, solid tumor, no dehydration, outpatient status, age <60. Score <21 = high-risk, needs admission. Her hypotension and ANC <100 make her high-risk regardless.',
        'add vancomycin': 'NOT routinely. Add vancomycin for: (1) Hemodynamic instability (she has this - borderline), (2) Skin/soft tissue infection, (3) Catheter-related infection suspected, (4) Severe mucositis, (5) Known MRSA colonization. Given her hypotension, I would add it.',
        'gcsf': 'G-CSF (filgrastim) can be considered for high-risk patients or prolonged neutropenia expected. Doesn\'t replace antibiotics. Some give prophylactically after high-risk chemo. Discuss with oncology.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Neutropenic Fever Module', link: '../mechanism/neutropenic-fever-module.html', reason: 'Understand immune deficiency in chemotherapy' },
        { type: 'reasondx', title: 'Neutropenic Fever Adventure', link: '../ReasonDx/adventure-cases/neutropenic-fever-expanded.html', reason: 'Practice neutropenic fever workup' },
        { type: 'reasondx', title: 'Sepsis Module', link: '../mechanism/sepsis-shock-module.html', reason: 'Sepsis management principles' }
    ],
    evidenceBase: {
        guidelines: [
            "IDSA Neutropenic Fever Guidelines 2010 (update pending)",
            "ASCO/IDSA Outpatient Management of Fever and Neutropenia 2018",
            "NCCN Prevention and Treatment of Cancer-Related Infections 2024"
        ],
        keyEvidence: [
            "Antibiotic delay increases mortality - give within 60 minutes",
            "Monotherapy with anti-pseudomonal β-lactam is standard of care",
            "MASCC score identifies low-risk patients for potential outpatient management",
            "Routine vancomycin addition doesn't improve outcomes and increases resistance"
        ],
        openAccessLinks: [
            "https://academic.oup.com/cid/article/52/4/e56/382256"
        ]
    }
},

// ============================================================================
// CASE 2: TUMOR LYSIS SYNDROME
// ============================================================================

'tumor-lysis-syndrome': {
    id: 'tumor-lysis-syndrome',
    title: 'Tumor Lysis Syndrome',
    category: 'Hematology/Oncology',
    isParallel: false,
    parallelCase: 'hyperkalemia-emergency',
    parallelDescription: 'Hyperkalemia from renal failure',
    patient: { 
        name: 'Marcus Johnson', 
        age: 28, 
        sex: 'Male', 
        setting: 'Oncology Floor → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Weakness and Palpitations' 
    },
    description: 'A 28-year-old man with newly diagnosed Burkitt lymphoma started chemotherapy 18 hours ago. Now with weakness, muscle cramps, palpitations. K+ 7.2, phosphorus 8.4, calcium 6.8, uric acid 14.2, creatinine rose from 1.0 to 3.2. ECG shows peaked T waves. He received allopurinol but not rasburicase prior to chemo.',
    openingStatement: 'Mr. Johnson has tumor lysis syndrome - the metabolic emergency from rapid cell death after chemotherapy. He has life-threatening hyperkalemia and acute kidney injury. How do you manage this and communicate with the team?',
    conceptDomains: {
        'Situation': ['electrolyte_abnormalities', 'renal_function', 'cardiac_status'],
        'Background': ['malignancy_type', 'tls_risk', 'prophylaxis_given'],
        'Assessment': ['laboratory_vs_clinical_tls', 'severity', 'dialysis_indications'],
        'Recommendation': ['hyperkalemia_treatment', 'rasburicase', 'dialysis_consideration']
    },
    quickActions: [
        'What defines tumor lysis syndrome?',
        'Why is his calcium low?',
        'Should he get rasburicase now?',
        'When does he need dialysis?'
    ],
    keyTeachingPoints: [
        'TLS: Rapid release of intracellular contents → hyperK, hyperphosphatemia, hyperuricemia, hypocalcemia',
        'Laboratory TLS: ≥2 abnormalities within 3 days before or 7 days after chemo',
        'Clinical TLS: Lab TLS + AKI, seizure, arrhythmia, or death',
        'High-risk: Burkitt, ALL, AML with high WBC, bulky lymphoma',
        'Rasburicase for high-risk or established TLS (contraindicated in G6PD deficiency)'
    ],
    sbarTemplate: {
        situation: 'I have a 28-year-old with Burkitt lymphoma who developed tumor lysis syndrome 18 hours after starting chemotherapy. He has critical hyperkalemia at 7.2 with ECG changes and AKI.',
        background: 'He was started on chemo yesterday for newly diagnosed Burkitt - a high-risk malignancy for TLS. He received allopurinol for prophylaxis but not rasburicase. His creatinine has tripled.',
        assessment: 'This is clinical TLS - he has the lab criteria plus AKI and cardiac manifestations. Potassium is 7.2 with peaked T waves, phosphorus is 8.4 causing hypocalcemia at 6.8, uric acid is 14.2.',
        recommendation: 'I\'m treating hyperkalemia emergently with calcium, insulin/glucose, and considering rasburicase for the uric acid. He likely needs dialysis given refractory hyperkalemia and AKI. Can nephrology see him urgently and can we get an ICU bed?'
    },
    defined_responses: {
        'tls definition': 'Laboratory TLS: ≥2 of the following within 3 days before to 7 days after chemo: K >6 or 25% increase, Phos >4.5 or 25% increase, Uric acid >8 or 25% increase, Ca <7 or 25% decrease. Clinical TLS = Lab TLS + AKI (Cr ≥1.5x), arrhythmia, seizure, or death.',
        'hypocalcemia mechanism': 'The hyperphosphatemia causes hypocalcemia! Released phosphorus binds calcium, forming calcium-phosphate precipitates (also deposits in kidneys worsening AKI). Don\'t give calcium unless symptomatic - it worsens calcium-phosphate deposition.',
        'rasburicase': 'Yes - give rasburicase (recombinant urate oxidase) now. It rapidly converts uric acid to allantoin (water-soluble). Dose: 0.2 mg/kg IV once. Works within hours. CONTRAINDICATED in G6PD deficiency - causes hemolysis. Check G6PD if unknown.',
        'dialysis indications': 'Dialysis for TLS if: (1) Refractory hyperkalemia (his is 7.2 with ECG changes), (2) Severe hyperphosphatemia causing symptomatic hypocalcemia, (3) Volume overload, (4) Severe AKI with oliguria. His hyperkalemia with ECG changes is an indication.',
        'prevent': 'Prevention is key. High-risk patients (Burkitt, ALL, bulky lymphoma, high WBC): Aggressive hydration (3L/m²/day), rasburicase prophylaxis, avoid potassium in fluids, monitor labs q6-8h after chemo.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Tumor Lysis Module', link: '../mechanism/tumor-lysis-module.html', reason: 'Understand TLS pathophysiology' },
        { type: 'reasondx', title: 'TLS Adventure', link: '../ReasonDx/adventure-cases/tumor-lysis-syndrome-adventure.html', reason: 'Practice TLS management' },
        { type: 'coachDx', title: 'Hyperkalemia Case', link: 'mentor-chat.html?case=hyperkalemia-emergency', reason: 'Hyperkalemia treatment' }
    ],
    evidenceBase: {
        guidelines: [
            "ASCO TLS Guidelines 2024",
            "Expert Panel Recommendations on TLS (JCO 2008)"
        ],
        keyEvidence: [
            "Rasburicase superior to allopurinol for high-risk patients",
            "Aggressive hydration (3L/m²/day) is cornerstone of prevention",
            "Dialysis for refractory electrolyte abnormalities",
            "Risk stratification guides prophylaxis intensity"
        ],
        openAccessLinks: [
            "https://ascopubs.org/doi/10.1200/JCO.2024.00.0000"
        ]
    }
},

// ============================================================================
// CASE 3: DIC - DISSEMINATED INTRAVASCULAR COAGULATION
// ============================================================================

'dic-coagulopathy': {
    id: 'dic-coagulopathy',
    title: 'DIC - Consumptive Coagulopathy',
    category: 'Hematology/Oncology',
    isParallel: false,
    parallelCase: 'ttp-hus-presentation',
    parallelDescription: 'TTP - microangiopathic hemolysis',
    patient: { 
        name: 'Robert Anderson', 
        age: 62, 
        sex: 'Male', 
        setting: 'ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Bleeding from IV Sites and Oozing' 
    },
    description: 'A 62-year-old with sepsis from perforated diverticulitis, post-op day 1 from emergent colectomy. Now with diffuse oozing from surgical site, IV sites, and NG tube. PT 28 (INR 2.8), PTT 58, fibrinogen 68, platelets 42K, D-dimer >20. Schistocytes on smear. Hemoglobin dropped from 9.2 to 6.8.',
    openingStatement: 'Mr. Anderson has DIC from sepsis - he\'s consuming his clotting factors faster than he can make them and now he\'s bleeding everywhere. How do you manage this coagulopathy and communicate with the surgical and hematology teams?',
    conceptDomains: {
        'Situation': ['bleeding_sites', 'coagulation_labs', 'hemodynamic_status'],
        'Background': ['underlying_cause', 'surgical_status', 'sepsis_severity'],
        'Assessment': ['dic_score', 'bleeding_vs_thrombotic', 'transfusion_triggers'],
        'Recommendation': ['treat_underlying_cause', 'blood_products', 'hematology_consult']
    },
    quickActions: [
        'What labs confirm DIC?',
        'What blood products does he need?',
        'Should I give heparin?',
        'What\'s the most important treatment?'
    ],
    keyTeachingPoints: [
        'DIC is always secondary - find and treat the underlying cause',
        'Lab triad: Low platelets, prolonged PT/PTT, low fibrinogen + elevated D-dimer',
        'Schistocytes = microangiopathic hemolysis (consumption)',
        'Transfuse to bleeding: FFP for INR, cryo for fibrinogen <100, platelets if <50K and bleeding',
        'Heparin controversial - only consider for thrombotic DIC (Trousseau, purpura fulminans)'
    ],
    sbarTemplate: {
        situation: 'I have a post-op sepsis patient with DIC who is actively bleeding. He has diffuse oozing from his surgical site, IV sites, and NG tube. Labs show severe consumptive coagulopathy.',
        background: 'He\'s post-op day 1 from emergent colectomy for perforated diverticulitis. He developed septic shock requiring vasopressors. Over the past 6 hours, his coagulation has deteriorated.',
        assessment: 'He has overt DIC - platelets 42K, INR 2.8, PTT 58, fibrinogen critically low at 68, D-dimer massively elevated. Schistocytes confirm microangiopathic process. He\'s dropped his hemoglobin 2.4 points.',
        recommendation: 'The priority is treating his sepsis - source control and antibiotics. For coagulopathy, I\'m giving FFP, cryoprecipitate for fibrinogen, platelets, and PRBCs. Can hematology help guide ongoing management? Is surgery comfortable with the hemostasis at his surgical site?'
    },
    defined_responses: {
        'dic labs': 'Classic DIC labs: (1) Thrombocytopenia (consumption), (2) Prolonged PT/PTT (factor consumption), (3) Low fibrinogen <100 (consumption), (4) Elevated D-dimer (fibrinolysis), (5) Schistocytes on smear (microangiopathy). ISTH DIC score ≥5 = overt DIC.',
        'blood products': 'Transfuse ONLY if bleeding or need for procedures: FFP 15-30 mL/kg for INR >1.5 with bleeding, Cryoprecipitate 10 units for fibrinogen <100, Platelets for <50K with bleeding (or <20K even without). PRBCs for hemoglobin as needed. Don\'t chase numbers if not bleeding.',
        'heparin': 'Controversial and usually NOT indicated for sepsis-associated DIC. Heparin may be considered for: (1) Thrombotic manifestations (Trousseau syndrome, purpura fulminans), (2) Large vessel thrombosis despite bleeding. NOT for this patient with active bleeding.',
        'most important': 'TREAT THE UNDERLYING CAUSE. DIC is always secondary. His sepsis is driving the DIC - source control (surgery done), antibiotics, hemodynamic support. Without treating sepsis, blood products are just temporary.',
        'prognosis': 'DIC from sepsis has high mortality (40-80% depending on severity). Improvement in coag labs usually follows control of infection. If DIC persists despite treatment, reassess source control and consider occult infection.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'DIC Module', link: '../mechanism/dic-module.html', reason: 'Understand coagulation cascade consumption' },
        { type: 'reasondx', title: 'DIC Adventure', link: '../ReasonDx/adventure-cases/dic-expanded.html', reason: 'Practice DIC workup' },
        { type: 'reasondx', title: 'Sepsis Module', link: '../mechanism/sepsis-shock-module.html', reason: 'Sepsis as DIC trigger' }
    ],
    evidenceBase: {
        guidelines: [
            "ISTH Guidelines on DIC 2019",
            "BSH Guidelines on DIC 2009"
        ],
        keyEvidence: [
            "ISTH DIC scoring system validated for diagnosis and prognosis",
            "Treating underlying cause is the only definitive therapy",
            "Transfusion triggers should be guided by bleeding, not just lab values",
            "Heparin not routinely recommended in sepsis-associated DIC"
        ],
        openAccessLinks: [
            "https://onlinelibrary.wiley.com/doi/10.1111/jth.14462"
        ]
    }
},

// ============================================================================
// CASE 4: TTP - THROMBOTIC THROMBOCYTOPENIC PURPURA
// ============================================================================

'ttp-hus-presentation': {
    id: 'ttp-hus-presentation',
    title: 'TTP - Thrombotic Microangiopathy',
    category: 'Hematology/Oncology',
    isParallel: false,
    parallelCase: 'dic-coagulopathy',
    parallelDescription: 'DIC - consumptive coagulopathy',
    patient: { 
        name: 'Lisa Chang', 
        age: 38, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Confusion and Petechiae' 
    },
    description: 'A 38-year-old previously healthy woman presents with 3 days of fatigue, confusion, and new petechiae. HR 108, BP 148/92, afebrile, disoriented to date. Platelets 12K, Hgb 7.2, creatinine 1.8, LDH 1,840, indirect bilirubin 3.2, haptoglobin <10. PT/PTT normal. Smear shows abundant schistocytes.',
    openingStatement: 'Ms. Chang has TTP until proven otherwise - this is a hematologic emergency where plasma exchange is life-saving. Without treatment, mortality is >90%. How do you recognize this and mobilize the team?',
    conceptDomains: {
        'Situation': ['pentad_features', 'hemolysis_markers', 'neurologic_status'],
        'Background': ['recent_illness', 'medications', 'pregnancy_status'],
        'Assessment': ['plasmic_score', 'differentiate_from_dic', 'adamts13_role'],
        'Recommendation': ['plasma_exchange', 'steroids', 'avoid_platelet_transfusion']
    },
    quickActions: [
        'What\'s the classic TTP pentad?',
        'How is this different from DIC?',
        'Why can\'t I transfuse platelets?',
        'How urgent is plasma exchange?'
    ],
    keyTeachingPoints: [
        'Classic pentad (all 5 rare): Thrombocytopenia, MAHA, neurologic symptoms, renal dysfunction, fever',
        'Key differentiator from DIC: PT/PTT are NORMAL in TTP',
        'PLASMIC score helps predict ADAMTS13 deficiency',
        'Plasma exchange is life-saving - mortality drops from >90% to <20%',
        'Do NOT transfuse platelets unless life-threatening bleeding - can worsen thrombosis'
    ],
    sbarTemplate: {
        situation: 'I have a 38-year-old woman with suspected TTP - she has severe thrombocytopenia, microangiopathic hemolytic anemia, and neurologic symptoms. This is a hematologic emergency requiring urgent plasma exchange.',
        background: 'She was previously healthy, presenting with 3 days of fatigue and confusion. No recent illness, no new medications, not pregnant. No diarrhea to suggest HUS.',
        assessment: 'She has the TTP triad: platelets 12K, MAHA with schistocytes and hemolysis markers (LDH 1840, haptoglobin undetectable, indirect bili elevated), and neurologic changes. Critically, her PT/PTT are normal - this is NOT DIC.',
        recommendation: 'She needs emergent plasma exchange - I\'m calling hematology and apheresis now. Start steroids while arranging PLEX. Please do NOT give platelets. Can you help expedite ADAMTS13 level and hematology consult?'
    },
    defined_responses: {
        'ttp pentad': 'Classic pentad: (1) Thrombocytopenia, (2) Microangiopathic hemolytic anemia (MAHA - schistocytes), (3) Neurologic symptoms (confusion, headache, seizures), (4) Renal dysfunction, (5) Fever. Full pentad is rare (<10%) - don\'t wait for all 5!',
        'ttp vs dic': 'Key difference: PT/PTT are NORMAL in TTP but prolonged in DIC. TTP has normal fibrinogen; DIC has low fibrinogen. Both have schistocytes and thrombocytopenia. DIC is always secondary to something else; TTP can be primary.',
        'no platelets': 'Platelet transfusion in TTP is like "adding fuel to fire" - the microthrombi consume the platelets and can worsen thrombosis, potentially causing strokes or MIs. Only transfuse for life-threatening bleeding or before procedures.',
        'plasma exchange': 'Plasma exchange (PLEX) is THE treatment. It removes anti-ADAMTS13 antibodies AND replaces the deficient enzyme. Start within 24 hours. Without PLEX: >90% mortality. With PLEX: <20% mortality. Start steroids too (methylprednisolone 1g IV or prednisone 1mg/kg).',
        'adamts13': 'ADAMTS13 is the enzyme that cleaves vWF multimers. In TTP, antibodies inhibit ADAMTS13 → ultra-large vWF multimers → platelet aggregation → microthrombi. Level <10% with inhibitor confirms TTP. Don\'t wait for results to start treatment!'
    },
    relatedContent: [
        { type: 'mechanism', title: 'TTP Module', link: '../mechanism/ttp-module.html', reason: 'Understand ADAMTS13 and microangiopathy' },
        { type: 'reasondx', title: 'TTP-HUS Adventure', link: '../ReasonDx/adventure-cases/ttp-hus-expanded.html', reason: 'Practice TTP workup and differentiation' },
        { type: 'coachDx', title: 'DIC Case', link: 'mentor-chat.html?case=dic-coagulopathy', reason: 'Compare DIC presentation' }
    ],
    evidenceBase: {
        guidelines: [
            "ISTH TTP Guidelines 2020",
            "BSH Guidelines for TTP 2012"
        ],
        keyEvidence: [
            "Plasma exchange reduces mortality from >90% to <20%",
            "PLASMIC score predicts ADAMTS13 <10% with high sensitivity",
            "Caplacizumab (anti-vWF) added to PLEX reduces time to platelet recovery",
            "Platelet transfusion associated with worse outcomes except for life-threatening bleeding"
        ],
        openAccessLinks: [
            "https://onlinelibrary.wiley.com/doi/10.1111/jth.14754"
        ]
    }
},

// ============================================================================
// CASE 5: ACUTE LEUKEMIA - HYPERLEUKOCYTOSIS
// ============================================================================

'hyperleukocytosis-leukemia': {
    id: 'hyperleukocytosis-leukemia',
    title: 'Acute Leukemia - Hyperleukocytosis',
    category: 'Hematology/Oncology',
    isParallel: false,
    parallelCase: 'neutropenic-fever-emergency',
    parallelDescription: 'Neutropenic fever post-chemo',
    patient: { 
        name: 'Daniel Wright', 
        age: 45, 
        sex: 'Male', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Fatigue and Dyspnea' 
    },
    description: 'A 45-year-old previously healthy man presents with 2 weeks of fatigue, now with dyspnea at rest. HR 118, RR 28, SpO2 88% on RA, bilateral pulmonary crackles. WBC 186K with 92% blasts, Hgb 6.8, platelets 28K. Creatinine 2.4, uric acid 12.8, LDH 2,400, K+ 5.8. Chest X-ray shows diffuse bilateral infiltrates.',
    openingStatement: 'Mr. Wright has newly diagnosed acute leukemia with hyperleukocytosis and leukostasis - the blasts are sludging in his pulmonary vasculature. This is a hematologic emergency. How do you manage this and coordinate with oncology?',
    conceptDomains: {
        'Situation': ['wbc_count', 'blast_percentage', 'respiratory_status', 'tls_risk'],
        'Background': ['symptom_duration', 'prior_health', 'leukemia_type'],
        'Assessment': ['leukostasis_criteria', 'organ_involvement', 'tls_presence'],
        'Recommendation': ['cytoreduction', 'supportive_care', 'avoid_transfusion_pitfalls']
    },
    quickActions: [
        'What is leukostasis?',
        'How do I reduce his WBC urgently?',
        'Can I transfuse his hemoglobin?',
        'What about tumor lysis prevention?'
    ],
    keyTeachingPoints: [
        'Hyperleukocytosis: WBC >100K. Leukostasis: Hyperleukocytosis + symptoms (pulmonary, CNS)',
        'Leukostasis more common in AML than ALL (blasts are stickier)',
        'Urgent cytoreduction: Hydroxyurea, leukapheresis if severe, start chemo',
        'AVOID RBC transfusion if possible - increases viscosity and worsens leukostasis',
        'High TLS risk - aggressive hydration, rasburicase, monitor closely'
    ],
    sbarTemplate: {
        situation: 'I have a 45-year-old man with newly diagnosed acute leukemia presenting with hyperleukocytosis and leukostasis. His WBC is 186K with 92% blasts and he has pulmonary symptoms with hypoxia.',
        background: 'He was previously healthy, presenting with 2 weeks of fatigue now with respiratory distress. No prior hematologic issues. He appears to have AML based on the blast morphology.',
        assessment: 'This is leukostasis - his blasts are causing pulmonary symptoms with hypoxia and bilateral infiltrates. He\'s also at high risk for TLS with elevated uric acid, LDH, potassium, and AKI already developing.',
        recommendation: 'He needs urgent cytoreduction - starting hydroxyurea 50-100 mg/kg now. Please consult oncology emergently for leukapheresis consideration and chemo initiation. Aggressive hydration and rasburicase for TLS prevention. Can we get him to ICU? And please hold RBC transfusion unless critical - it will worsen viscosity.'
    },
    defined_responses: {
        'leukostasis': 'Leukostasis = hyperleukocytosis (WBC >100K) + symptomatic hyperviscosity. Blasts (especially AML) are large, sticky, and sludge in microvasculature. Pulmonary (dyspnea, hypoxia, infiltrates) and CNS (confusion, headache, visual changes) most common. Mortality without treatment is very high.',
        'cytoreduction': 'Urgent options: (1) Hydroxyurea 50-100 mg/kg/day - starts working in hours, (2) Leukapheresis - can reduce WBC by 30-60% in one session, indicated for severe symptoms, (3) Start definitive chemotherapy ASAP. All can be done together.',
        'rbc transfusion': 'AVOID RBC transfusion if possible. RBCs increase blood viscosity, worsening leukostasis. Only transfuse for life-threatening anemia (Hgb <6 or active cardiac ischemia). If must transfuse, give slowly and give one unit at a time while cytoreducing.',
        'tls prevention': 'He\'s extremely high-risk for TLS: AML with high WBC, already has elevated uric acid, K, and creatinine. Aggressive IVF (200-250 mL/hr), rasburicase (NOT allopurinol - too slow), avoid potassium in fluids, monitor labs q6h.',
        'all vs aml': 'AML causes leukostasis more often than ALL despite similar WBC counts - AML blasts are larger and stickier. AML with monocytic differentiation (M4/M5) highest risk. ALL with WBC >400K can also cause leukostasis.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Tumor Lysis Module', link: '../mechanism/tumor-lysis-module.html', reason: 'TLS prevention in leukemia' },
        { type: 'reasondx', title: 'TLS Adventure', link: '../ReasonDx/adventure-cases/tumor-lysis-syndrome-adventure.html', reason: 'Practice TLS management' },
        { type: 'coachDx', title: 'TLS Case', link: 'mentor-chat.html?case=tumor-lysis-syndrome', reason: 'TLS management' }
    ],
    evidenceBase: {
        guidelines: [
            "ASH Education Book: Hyperleukocytosis and Leukostasis",
            "NCCN AML Guidelines 2024"
        ],
        keyEvidence: [
            "Leukostasis mortality 20-40% even with treatment",
            "Leukapheresis reduces early mortality but doesn't improve long-term survival",
            "RBC transfusion associated with worse outcomes in hyperleukocytosis",
            "Early chemotherapy is ultimately the definitive treatment"
        ],
        openAccessLinks: [
            "https://ashpublications.org/hematology/article/2020/1/63/474137"
        ]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_HEME_ONC_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_HEME_ONC_CASES);
}
