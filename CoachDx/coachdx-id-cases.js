// ============================================================================
// COACHDX INFECTIOUS DISEASE CASE PACK
// SBAR scenarios for ID emergencies communication training
// Created: January 30, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================

const COACHDX_ID_CASES = {

// ============================================================================
// CASE 1: BACTERIAL MENINGITIS
// ============================================================================

'bacterial-meningitis': {
    id: 'bacterial-meningitis',
    title: 'Bacterial Meningitis - Adult',
    category: 'Infectious Disease',
    isParallel: false,
    parallelCase: 'viral-meningitis',
    parallelDescription: 'Viral meningitis - supportive care',
    patient: { 
        name: 'Marcus Williams', 
        age: 22, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Headache and Confusion' 
    },
    description: 'A 22-year-old college student presents with 18 hours of severe headache, fever 39.8°C, neck stiffness, and photophobia. Now confused and irritable. HR 118, BP 142/88, petechial rash on trunk. Brudzinski and Kernig signs positive.',
    openingStatement: 'Marcus has classic bacterial meningitis - fever, neck stiffness, altered mental status, plus a petechial rash suggesting meningococcemia. This is immediately life-threatening. What\'s your approach?',
    conceptDomains: {
        'Situation': ['meningeal_signs', 'mental_status', 'rash'],
        'Background': ['immunization_status', 'close_contacts', 'recent_illness'],
        'Assessment': ['bacterial_vs_viral', 'organism_likelihood', 'complications'],
        'Recommendation': ['empiric_antibiotics', 'steroid_timing', 'lumbar_puncture']
    },
    quickActions: [
        'When do I give antibiotics?',
        'Do I need CT before LP?',
        'What antibiotics should I use?',
        'Who needs prophylaxis?'
    ],
    keyTeachingPoints: [
        'Antibiotics should be given IMMEDIATELY if bacterial meningitis suspected - do not delay for LP',
        'Dexamethasone should be given BEFORE or WITH first antibiotic dose (not after)',
        'CT before LP only if: altered mental status, focal neuro signs, papilledema, immunocompromised, seizure',
        'Empiric coverage in adults: Ceftriaxone + Vancomycin ± Ampicillin (if >50 or immunocompromised)',
        'Petechial rash suggests meningococcemia - high mortality without rapid treatment'
    ],
    sbarTemplate: {
        situation: 'I have a 22-year-old with bacterial meningitis. He has the classic triad - fever, neck stiffness, altered mental status - plus a petechial rash suggesting meningococcemia. This is critical.',
        background: 'He\'s a college student, so high-risk population for N. meningitidis. Symptoms started about 18 hours ago and he\'s deteriorating rapidly. His immunization status is unknown.',
        assessment: 'This is presumed bacterial meningitis with possible meningococcemia given the petechial rash. Mortality approaches 20-30% even with treatment, higher with delays.',
        recommendation: 'I\'m giving dexamethasone 0.15 mg/kg NOW followed immediately by ceftriaxone 2g IV and vancomycin. Will get CT head since he\'s confused, then LP. Need to arrange ICU and notify public health for contact prophylaxis.'
    },
    defined_responses: {
        'antibiotic timing': 'Give antibiotics IMMEDIATELY if bacterial meningitis is suspected. Every hour of delay increases mortality. "Time is brain" applies here too. The LP can wait - antibiotics cannot. CSF will still show pleocytosis for many hours after antibiotics.',
        'ct before lp': 'CT before LP is indicated if: (1) Altered mental status/GCS <10 (he has this), (2) Focal neurologic signs, (3) New-onset seizures, (4) Papilledema, (5) Immunocompromised. Give antibiotics FIRST, then CT, then LP. Don\'t let CT delay antibiotics.',
        'antibiotic choice': 'Empiric regimen for community-acquired bacterial meningitis in adults: (1) Ceftriaxone 2g IV q12h - covers S. pneumoniae, N. meningitidis, (2) Vancomycin 15-20mg/kg IV q8-12h - covers resistant pneumococcus, (3) Add Ampicillin 2g IV q4h if >50yo, pregnant, or immunocompromised - covers Listeria.',
        'dexamethasone timing': 'Dexamethasone 0.15 mg/kg q6h x4 days should be given BEFORE or WITH the first antibiotic dose. If given after antibiotics already started, benefit is lost. Reduces mortality and hearing loss in pneumococcal meningitis. Give it even if you\'re not sure.',
        'prophylaxis': 'Close contacts need prophylaxis for N. meningitidis: Household contacts, kissing contacts, anyone sharing respiratory secretions. Give rifampin 600mg PO q12h x4 doses, OR ciprofloxacin 500mg x1, OR ceftriaxone 250mg IM x1. Notify public health immediately.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Meningitis Module', link: '../mechanism/meningitis-module.html', reason: 'CSF analysis and pathophysiology' },
        { type: 'reasondx', title: 'Meningitis Adventure', link: '../ReasonDx/adventure-cases/meningitis-expanded.html', reason: 'Practice meningitis workup' },
        { type: 'reasondx', title: 'Meningitis Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=meningitis-deep-dive', reason: 'CSF interpretation' }
    ],
    evidenceBase: {
        guidelines: ["IDSA Bacterial Meningitis Guidelines 2017", "Surviving Sepsis Campaign 2021"],
        keyEvidence: [
            "Each hour of antibiotic delay increases mortality by 10-15%",
            "Dexamethasone must precede or accompany first antibiotic dose",
            "Classic triad (fever, neck stiffness, AMS) present in only 44% of adults"
        ],
        openAccessLinks: ["https://academic.oup.com/cid/article/64/6/e51/3058233"]
    }
},

// ============================================================================
// CASE 2: NECROTIZING FASCIITIS
// ============================================================================

'necrotizing-fasciitis': {
    id: 'necrotizing-fasciitis',
    title: 'Necrotizing Fasciitis',
    category: 'Infectious Disease',
    isParallel: false,
    parallelCase: 'cellulitis-severe',
    parallelDescription: 'Severe cellulitis - antibiotics only',
    patient: { 
        name: 'Robert Garcia', 
        age: 58, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Leg Pain Out of Proportion' 
    },
    description: 'A 58-year-old diabetic man presents with 2 days of right leg pain, swelling, and fever. Vital signs: T 39.2°C, HR 124, BP 92/58, RR 24. Exam shows tense edema with skin discoloration, crepitus on palpation, pain out of proportion to visible findings. WBC 24,000, Na 131, Cr 2.1.',
    openingStatement: 'Mr. Garcia has concerning features for necrotizing fasciitis - pain out of proportion, crepitus, systemic toxicity, and he\'s diabetic. This needs urgent surgical evaluation. What are you thinking?',
    conceptDomains: {
        'Situation': ['pain_out_of_proportion', 'skin_findings', 'systemic_toxicity'],
        'Background': ['diabetes', 'recent_trauma', 'immunosuppression'],
        'Assessment': ['nec_fasc_vs_cellulitis', 'lrinec_score', 'type_classification'],
        'Recommendation': ['emergent_surgery', 'broad_antibiotics', 'resuscitation']
    },
    quickActions: [
        'What makes this nec fasc vs cellulitis?',
        'Do I need imaging first?',
        'What antibiotics?',
        'When does surgery need to happen?'
    ],
    keyTeachingPoints: [
        'Pain out of proportion to visible findings is the hallmark - skin changes lag behind fascial destruction',
        'Necrotizing fasciitis is a SURGICAL emergency - antibiotics alone will not cure it',
        'Do NOT delay surgery for imaging - CT can miss early nec fasc',
        'LRINEC score ≥6 suggests nec fasc, but clinical suspicion overrides',
        'Mortality increases 25% for every hour of surgical delay'
    ],
    sbarTemplate: {
        situation: 'I have a 58-year-old diabetic man with concern for necrotizing fasciitis of his right leg. He has pain out of proportion, crepitus, skin discoloration, and sepsis with hypotension.',
        background: 'He\'s diabetic - major risk factor. His labs are concerning with WBC 24k, sodium 131, and creatinine elevated. LRINEC score calculates to about 8.',
        assessment: 'This is necrotizing fasciitis until proven otherwise. The pain out of proportion, crepitus, and systemic toxicity are classic. He needs emergent surgical debridement - this is not a cellulitis you can treat with antibiotics alone.',
        recommendation: 'Surgery needs to see him NOW for emergent debridement. Starting broad-spectrum antibiotics - vancomycin, pip-tazo, and clindamycin. Aggressive fluid resuscitation. He needs ICU admission. Can general surgery come immediately?'
    },
    defined_responses: {
        'nec fasc vs cellulitis': 'Key differences: (1) Pain out of proportion - severe pain with minimal skin findings, (2) Rapid progression, (3) Systemic toxicity/sepsis, (4) Skin changes - dusky, bullae, necrosis, (5) Crepitus - indicates gas-forming organisms, (6) Failure to improve on antibiotics. If you\'re not sure, err on the side of surgery.',
        'imaging': 'CT may show fascial thickening, fluid tracking, gas - but can be NORMAL in early nec fasc. Do NOT delay surgery for imaging. If clinical suspicion is high, go straight to OR. Imaging is more useful to define extent before surgery, not to diagnose.',
        'antibiotics': 'Broad-spectrum empiric coverage: (1) Vancomycin 25-30mg/kg IV - covers MRSA, (2) Piperacillin-tazobactam 4.5g IV q6h OR meropenem - covers gram negatives and anaerobes, (3) Clindamycin 900mg IV q8h - toxin suppression (reduces strep toxin production). Antibiotics are ADJUNCTIVE - surgery is definitive.',
        'surgery timing': 'Emergent - within 6-12 hours at most, ideally within hours of diagnosis. Mortality increases ~25% for every hour of surgical delay. Surgery involves wide debridement of all necrotic tissue. Often requires multiple trips to OR for serial debridements. This is not an overnight case.',
        'lrinec score': 'LRINEC (Laboratory Risk Indicator for Necrotizing Fasciitis): CRP, WBC, Hgb, sodium, creatinine, glucose. Score ≥6 = intermediate risk, ≥8 = high risk. But CLINICAL SUSPICION overrides any score. Don\'t let a low LRINEC score reassure you if the exam is concerning.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Nec Fasc Module', link: '../mechanism/nec-fasc-module.html', reason: 'Types and pathophysiology' },
        { type: 'reasondx', title: 'Cellulitis vs Nec Fasc', link: '../ReasonDx/adventure-cases/cellulitis-necfasc-expanded.html', reason: 'Practice differentiation' }
    ],
    evidenceBase: {
        guidelines: ["IDSA Skin and Soft Tissue Guidelines 2014", "World Society of Emergency Surgery Guidelines 2018"],
        keyEvidence: [
            "Mortality increases 25% per hour of surgical delay",
            "Clinical diagnosis - imaging can miss early disease",
            "Clindamycin added for toxin suppression in streptococcal disease"
        ],
        openAccessLinks: ["https://academic.oup.com/cid/article/59/2/e10/2895845"]
    }
},

// ============================================================================
// CASE 3: SEPTIC SHOCK - SOURCE CONTROL
// ============================================================================

'septic-shock-source': {
    id: 'septic-shock-source',
    title: 'Septic Shock - Source Control Needed',
    category: 'Infectious Disease',
    isParallel: false,
    parallelCase: 'sepsis-bacteremia',
    parallelDescription: 'Sepsis without drainable source',
    patient: { 
        name: 'Patricia Chen', 
        age: 67, 
        sex: 'Female', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Fever and Abdominal Pain' 
    },
    description: 'A 67-year-old woman presents with 3 days of RUQ pain, fever, and now confusion. Vitals: T 39.4°C, HR 128, BP 78/52 (not responding to 2L fluids), RR 26. RUQ tenderness with positive Murphy sign. Labs: WBC 22k, total bilirubin 6.2, alk phos 380, lipase normal. Lactate 5.2.',
    openingStatement: 'Mrs. Chen has septic shock from acute cholangitis - Charcot\'s triad plus hypotension. She\'s failing fluid resuscitation and needs emergent biliary decompression. This is source control dependent.',
    conceptDomains: {
        'Situation': ['shock_state', 'charcot_triad', 'reynolds_pentad'],
        'Background': ['gallstone_history', 'prior_ercp', 'biliary_anatomy'],
        'Assessment': ['cholangitis_diagnosis', 'source_control_priority', 'antibiotic_choice'],
        'Recommendation': ['emergent_ercp', 'broad_antibiotics', 'vasopressor_support']
    },
    quickActions: [
        'What is Charcot\'s triad?',
        'Why won\'t antibiotics alone work?',
        'ERCP vs percutaneous drainage?',
        'Which antibiotics for cholangitis?'
    ],
    keyTeachingPoints: [
        'Charcot\'s triad: Fever, RUQ pain, jaundice - present in 50-75% of cholangitis',
        'Reynolds\' pentad: Add hypotension and AMS - indicates severe/suppurative cholangitis',
        'Source control within 24 hours for cholangitis - 12 hours if unstable',
        'Antibiotics alone cannot clear infection behind an obstructed duct',
        'ERCP preferred for biliary decompression if available'
    ],
    sbarTemplate: {
        situation: 'I have a 67-year-old woman in septic shock from acute cholangitis. She has Charcot\'s triad progressing to Reynolds\' pentad - now hypotensive and confused. Lactate is 5.2.',
        background: 'She has gallstones and her bilirubin is 6.2 with elevated alk phos. This is obstructive cholangitis. She\'s not responding to fluids alone.',
        assessment: 'This is source control-dependent septic shock. Antibiotics alone will not cure cholangitis with an obstructed biliary system. She needs emergent biliary decompression.',
        recommendation: 'Starting broad-spectrum antibiotics now. She needs emergent ERCP - can GI do this tonight? If ERCP unavailable or fails, she\'ll need percutaneous transhepatic drainage. Starting norepinephrine for MAP goal. ICU admission.'
    },
    defined_responses: {
        'charcot triad': 'Charcot\'s triad = Fever + RUQ pain + Jaundice. Present in 50-75% of acute cholangitis. It indicates infection in an obstructed biliary system. Reynolds\' pentad adds hypotension and altered mental status - indicates severe/suppurative cholangitis with high mortality.',
        'source control': 'Antibiotics CANNOT cure cholangitis alone - the infection is behind an obstructed duct where antibiotics can\'t reach adequate concentrations. Source control means decompressing the biliary system to drain the pus. This is the only definitive treatment. Timing: Stable patients can wait 24-48h; unstable patients need decompression within 12 hours.',
        'ercp vs perc': 'ERCP (endoscopic retrograde cholangiopancreatography) is first-line if available - sphincterotomy and stent/stone extraction. Success rate >90%. Percutaneous transhepatic cholangiography (PTC) if ERCP fails or is unavailable. Surgical decompression is last resort.',
        'antibiotics': 'Empiric coverage for cholangitis: (1) Piperacillin-tazobactam 4.5g IV q6h, OR (2) Ceftriaxone 2g IV + metronidazole 500mg IV q8h, OR (3) Meropenem if penicillin allergy or resistant organisms suspected. Cover gram negatives (E. coli, Klebsiella) and anaerobes (Bacteroides).'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Cholecystitis Module', link: '../mechanism/cholecystitis-module.html', reason: 'Biliary pathophysiology' },
        { type: 'reasondx', title: 'Cholecystitis Adventure', link: '../ReasonDx/adventure-cases/cholecystitis-expanded.html', reason: 'Biliary disease workup' },
        { type: 'reasondx', title: 'Sepsis Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=sepsis-deep-dive', reason: 'Sepsis bundles and source control' }
    ],
    evidenceBase: {
        guidelines: ["Tokyo Guidelines 2018 for Acute Cholangitis", "Surviving Sepsis Campaign 2021"],
        keyEvidence: [
            "Source control within 12 hours for unstable patients with cholangitis",
            "ERCP is first-line for biliary decompression",
            "Charcot's triad present in 50-75%, Reynolds' pentad indicates severity"
        ],
        openAccessLinks: ["https://www.sciencedirect.com/science/article/pii/S2095881117301380"]
    }
},

// ============================================================================
// CASE 4: INFECTIVE ENDOCARDITIS - SURGICAL INDICATION
// ============================================================================

'endocarditis-surgical': {
    id: 'endocarditis-surgical',
    title: 'Endocarditis - Surgical Indication',
    category: 'Infectious Disease',
    isParallel: false,
    parallelCase: 'endocarditis-medical',
    parallelDescription: 'Uncomplicated endocarditis - medical management',
    patient: { 
        name: 'James Wilson', 
        age: 42, 
        sex: 'Male', 
        setting: 'ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Fever and New Murmur' 
    },
    description: 'A 42-year-old IVDU presents with 2 weeks of fever and malaise. Now with acute respiratory distress. HR 118, BP 100/40, RR 32, SpO2 88% on 6L NC. New holosystolic murmur at apex radiating to axilla. Echo shows 15mm mitral valve vegetation with severe MR and evidence of leaflet perforation. Blood cultures growing MSSA.',
    openingStatement: 'James has infective endocarditis with severe valve destruction causing acute heart failure. This is a surgical emergency - he needs valve replacement. How do you communicate this urgency?',
    conceptDomains: {
        'Situation': ['valve_destruction', 'heart_failure', 'embolic_risk'],
        'Background': ['ivdu_history', 'organism', 'vegetation_size'],
        'Assessment': ['surgical_indications', 'timing', 'operative_risk'],
        'Recommendation': ['urgent_surgery', 'antibiotic_continuation', 'preop_workup']
    },
    quickActions: [
        'What are the surgical indications?',
        'How urgent is surgery?',
        'Should I wait for negative cultures?',
        'What about the IVDU history?'
    ],
    keyTeachingPoints: [
        'Class I surgical indications: Heart failure, uncontrolled infection, vegetation >10mm with embolic events, severe valve regurgitation',
        'Heart failure from valve destruction is the most common and urgent surgical indication',
        'Do NOT wait for prolonged antibiotics - surgery during active infection is standard when indicated',
        'IVDU status is not a contraindication to surgery',
        'Vegetation >10mm has ~50% embolic risk'
    ],
    sbarTemplate: {
        situation: 'I have a 42-year-old with infective endocarditis causing acute heart failure. He has severe mitral regurgitation from leaflet perforation with a 15mm vegetation. He\'s hypoxic and in respiratory distress.',
        background: 'He\'s an IV drug user, blood cultures growing MSSA. The echo shows severe valve destruction - this is not going to respond to antibiotics alone. His pulmonary edema is from acute severe MR.',
        assessment: 'This is a Class I indication for urgent cardiac surgery. He has two major surgical indications: heart failure from valve destruction and large vegetation with high embolic risk. Medical therapy alone carries unacceptable mortality.',
        recommendation: 'CT surgery needs to evaluate him urgently - ideally surgery within 24-48 hours given the heart failure. Continue IV antibiotics. He needs preop CT head to rule out intracranial hemorrhage that would delay surgery. Can cardiac surgery see him now?'
    },
    defined_responses: {
        'surgical indications': 'Class I indications for surgery: (1) Heart failure from valve dysfunction - MOST COMMON, (2) Uncontrolled infection (persistent bacteremia, perivalvular abscess, resistant organisms), (3) Vegetation >10mm + embolic event or >15mm alone, (4) Prosthetic valve endocarditis with any of above. He has heart failure AND large vegetation.',
        'surgery timing': 'URGENT (within days, not weeks): Heart failure from acute regurgitation, persistent sepsis despite antibiotics, fungal endocarditis. EARLY (within 1-2 weeks): Large vegetation with embolic risk. Do NOT wait for prolonged antibiotics if surgical indication exists.',
        'negative cultures': 'Do NOT wait for negative cultures before surgery. Operating during active infection with positive cultures is standard practice when surgical indication exists. The alternative - waiting weeks - carries unacceptable mortality from heart failure, stroke, or uncontrolled infection.',
        'ivdu history': 'IVDU status is NOT a contraindication to valve surgery. Studies show acceptable outcomes with surgery in IVDU patients. The ethical and medical consensus is to offer surgery to IVDU patients who meet indications. Discuss addiction treatment, but don\'t deny lifesaving surgery.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Endocarditis Module', link: '../mechanism/infective-endocarditis-module.html', reason: 'Duke criteria and pathophysiology' },
        { type: 'reasondx', title: 'Endocarditis Adventure', link: '../ReasonDx/adventure-cases/infective-endocarditis-adventure.html', reason: 'Practice endocarditis workup' }
    ],
    evidenceBase: {
        guidelines: ["AHA/ACC Infective Endocarditis Guidelines 2015", "ESC Endocarditis Guidelines 2023"],
        keyEvidence: [
            "Heart failure is the most common indication for surgery",
            "Early surgery (within 48h) reduces mortality in heart failure cases",
            "Vegetation >10mm carries ~50% embolic risk"
        ],
        openAccessLinks: ["https://www.ahajournals.org/doi/10.1161/CIR.0000000000000296"]
    }
},

// ============================================================================
// CASE 5: SPINAL EPIDURAL ABSCESS
// ============================================================================

'spinal-epidural-abscess': {
    id: 'spinal-epidural-abscess',
    title: 'Spinal Epidural Abscess',
    category: 'Infectious Disease',
    isParallel: false,
    parallelCase: 'vertebral-osteomyelitis',
    parallelDescription: 'Vertebral osteomyelitis without abscess',
    patient: { 
        name: 'David Thompson', 
        age: 55, 
        sex: 'Male', 
        setting: 'Emergency → OR', 
        acuity: 'Critical', 
        chiefComplaint: 'Back Pain and Leg Weakness' 
    },
    description: 'A 55-year-old diabetic man presents with 5 days of severe mid-back pain and fever. Now with bilateral leg weakness (3/5 strength), saddle anesthesia, and urinary retention. T 38.8°C, point tenderness at T8-10. MRI shows epidural abscess T7-T11 with cord compression.',
    openingStatement: 'David has a spinal epidural abscess with cord compression and evolving neurological deficits - leg weakness, saddle anesthesia, urinary retention. This is a surgical emergency. Hours matter.',
    conceptDomains: {
        'Situation': ['neurological_deficits', 'cord_compression', 'infection_signs'],
        'Background': ['diabetes', 'recent_procedures', 'ivdu'],
        'Assessment': ['abscess_extent', 'deficit_progression', 'surgical_urgency'],
        'Recommendation': ['emergent_surgery', 'iv_antibiotics', 'steroid_consideration']
    },
    quickActions: [
        'How urgent is surgery?',
        'What predicts neurological outcome?',
        'Which antibiotics?',
        'Medical management ever appropriate?'
    ],
    keyTeachingPoints: [
        'Spinal epidural abscess with neurological deficits is a SURGICAL EMERGENCY',
        'Neurological outcome depends on pre-operative deficit severity and duration',
        'Classic triad: Fever, back pain, neurological deficits (but only 10-15% have all three early)',
        'Risk factors: Diabetes, IVDU, spinal procedures, immunosuppression',
        'S. aureus is the most common organism (60-70%)'
    ],
    sbarTemplate: {
        situation: 'I have a 55-year-old with a spinal epidural abscess causing cord compression. He has evolving neurological deficits - bilateral leg weakness, saddle anesthesia, urinary retention. MRI confirms abscess from T7-T11.',
        background: 'He\'s diabetic - major risk factor. Symptoms started 5 days ago with back pain and fever. The neurological deficits are NEW and PROGRESSING. S. aureus is the most likely organism.',
        assessment: 'This is a surgical emergency. His neurological outcome depends on how quickly we decompress the cord. Once deficits are complete, recovery is unlikely. We have a narrow window.',
        recommendation: 'Spine surgery needs to see him IMMEDIATELY for emergent decompression. Starting empiric vancomycin and ceftriaxone now. He needs to go to OR within hours, not days. Can neurosurgery/spine surgery come evaluate now?'
    },
    defined_responses: {
        'surgery timing': 'EMERGENT - ideally within 12-24 hours of neurological deficit onset. Studies show: Surgery <24h from deficit onset = 91% improvement, 24-48h = 75% improvement, >48h = 30% improvement. His deficits are NEW - we have a window. Once paralysis is complete for >24-48h, it\'s often irreversible.',
        'outcome predictors': 'Pre-operative neurological status is the STRONGEST predictor of outcome. Patients who can still walk have better outcomes than those who can\'t. Complete paralysis >24h = poor recovery. Duration of symptoms before surgery also matters. His progressing but incomplete deficits suggest we can still help.',
        'antibiotics': 'Empiric: Vancomycin 25-30mg/kg IV (covers MRSA - most common organism) + Ceftriaxone 2g IV or Cefepime (covers gram negatives). Narrow based on culture results. Antibiotics are adjunctive - surgery is definitive for abscesses with neurological deficits.',
        'medical management': 'Medical management (antibiotics alone) may be considered ONLY if: No neurological deficits AND poor surgical candidate AND small abscess. But this patient has DEFICITS - he needs surgery. Medical management in the setting of neurological deficits carries unacceptable risk of permanent paralysis.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Osteomyelitis Module', link: '../mechanism/osteomyelitis-module.html', reason: 'Spinal infections pathophysiology' },
        { type: 'reasondx', title: 'Osteomyelitis Adventure', link: '../ReasonDx/adventure-cases/osteomyelitis-adventure.html', reason: 'Practice spinal infection workup' },
        { type: 'reasondx', title: 'Spinal Cord Compression', link: '../ReasonDx/adventure-cases/spinal-cord-compression-expanded.html', reason: 'Emergent management' }
    ],
    evidenceBase: {
        guidelines: ["IDSA Vertebral Osteomyelitis Guidelines 2015", "North American Spine Society Guidelines"],
        keyEvidence: [
            "Neurological outcome correlates with pre-operative status and time to surgery",
            "Surgery <24h from deficit onset associated with 91% improvement",
            "S. aureus accounts for 60-70% of cases"
        ],
        openAccessLinks: ["https://academic.oup.com/cid/article/61/6/859/354128"]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_ID_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_ID_CASES);
}
