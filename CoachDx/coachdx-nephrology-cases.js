// ============================================================================
// COACHDX NEPHROLOGY CASE PACK
// SBAR scenarios for nephrology communication training
// Created: January 29, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================
//
// This module adds nephrology SBAR scenarios that link directly to
// existing ReasonDx adventures and MechanismDx modules.
//
// CASES INCLUDED:
// 1. AKI Consult - New AKI requiring nephrology input
// 2. Hyperkalemia Emergency - ECG changes, urgent management
// 3. Dialysis Initiation - Emergent vs urgent indications
// 4. Hyponatremia Workup - Severe symptomatic hyponatremia
// 5. Contrast-Induced AKI Prevention - High-risk patient pre-procedure
//
// ============================================================================

const COACHDX_NEPHROLOGY_CASES = {

// ============================================================================
// CASE 1: AKI CONSULT
// ============================================================================

'aki-nephrology-consult': {
    id: 'aki-nephrology-consult',
    title: 'AKI - Nephrology Consult',
    category: 'Nephrology',
    isParallel: false,
    parallelCase: 'aki-prerenal',
    parallelDescription: 'Prerenal AKI - fluid responsive',
    patient: { 
        name: 'Harold Martinez', 
        age: 72, 
        sex: 'Male', 
        setting: 'Medical Floor', 
        acuity: 'High', 
        chiefComplaint: 'Rising Creatinine' 
    },
    description: 'A 72-year-old with HTN, diabetes, and CKD stage 3b (baseline Cr 2.1) admitted for pneumonia. Creatinine rose from 2.1 to 4.8 over 48 hours despite IV fluids. Urine output 180 mL over past 12 hours. BP 142/88, no edema. Started on vancomycin and piperacillin-tazobactam. FENa 2.8%, urine sediment shows muddy brown casts.',
    openingStatement: 'Mr. Martinez has AKI on CKD that\'s not responding to fluids, and the urine sediment suggests ATN. You need to consult nephrology. How do you present this case effectively?',
    conceptDomains: {
        'Situation': ['current_creatinine', 'baseline_function', 'urine_output', 'trend'],
        'Background': ['ckd_stage', 'nephrotoxin_exposure', 'volume_status', 'comorbidities'],
        'Assessment': ['aki_stage', 'etiology', 'urine_studies', 'complications'],
        'Recommendation': ['medication_adjustment', 'rrt_consideration', 'monitoring']
    },
    quickActions: [
        'How do I stage this AKI?',
        'What do the urine studies tell me?',
        'Which medications are nephrotoxic?',
        'When should I consider dialysis?'
    ],
    keyTeachingPoints: [
        'KDIGO AKI staging: Stage 1 (1.5-1.9x baseline), Stage 2 (2-2.9x), Stage 3 (≥3x or Cr ≥4 with acute rise)',
        'FENa >2% with muddy brown casts = intrinsic renal disease (ATN)',
        'Vancomycin + pip-tazo ("vanc-zosyn") is a known nephrotoxic combination',
        'ATN recovery typically 1-3 weeks if insult removed',
        'Dialysis indications: AEIOU (Acidosis, Electrolytes, Intoxication, Overload, Uremia symptoms)'
    ],
    sbarTemplate: {
        situation: 'I\'m calling to consult on Mr. Martinez, a 72-year-old with AKI on CKD. His creatinine has risen from baseline 2.1 to 4.8 over 48 hours, and he\'s oliguric.',
        background: 'He has CKD stage 3b at baseline, diabetes, and HTN. He was admitted for pneumonia and started on vancomycin and piperacillin-tazobactam 3 days ago. He\'s received 3 liters of crystalloid without improvement.',
        assessment: 'This appears to be ATN - FENa is 2.8% and urine sediment shows muddy brown casts. I\'m concerned about vanc-zosyn nephrotoxicity as a contributor. He\'s now KDIGO stage 3. No hyperkalemia yet, bicarb is 18.',
        recommendation: 'I\'d like your guidance on antibiotic adjustment, whether we need to hold further nephrotoxins, and at what point we should consider RRT if he doesn\'t improve.'
    },
    defined_responses: {
        'aki staging': 'KDIGO Stage 3: Cr rose from 2.1 to 4.8, which is >3x baseline. Also qualifies because Cr ≥4.0 with acute rise ≥0.5. Stage 3 AKI has highest risk of needing RRT and mortality.',
        'urine studies': 'FENa 2.8% (>2% suggests intrinsic renal) plus muddy brown casts = ATN. The casts are sloughed tubular epithelial cells. This is NOT prerenal - prerenal would have FENa <1% and bland sediment.',
        'nephrotoxins': 'Vancomycin + pip-tazo ("vanc-zosyn") has synergistic nephrotoxicity - studies show 2-3x higher AKI risk than vanc + cefepime. Consider switching to vanc + cefepime or meropenem if pseudomonal coverage needed.',
        'dialysis indications': 'AEIOU: Acidosis (pH <7.1 refractory), Electrolytes (K >6.5 refractory), Intoxication, Overload (pulmonary edema refractory to diuretics), Uremia (encephalopathy, pericarditis, bleeding). He doesn\'t meet criteria yet but watch closely.',
        'recovery timeline': 'ATN typically recovers in 1-3 weeks if the insult is removed. Some patients need temporary dialysis as a bridge. CKD patients may not return to baseline.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'AKI Module', link: '../mechanism/aki-module.html', reason: 'Understand prerenal vs intrinsic vs postrenal' },
        { type: 'reasondx', title: 'AKI Adventure Case', link: '../ReasonDx/adventure-cases/aki-expanded.html', reason: 'Practice AKI workup and staging' },
        { type: 'reasondx', title: 'AKI Deep Dive', link: '../ReasonDx/deep-dive-player-integrated.html?module=aki-deep-dive', reason: 'KDIGO guidelines and management' }
    ],
    evidenceBase: {
        guidelines: [
            "KDIGO AKI Guidelines 2012",
            "KDIGO AKI Guideline Update 2024"
        ],
        keyEvidence: [
            "Vancomycin + pip-tazo associated with higher AKI risk than alternatives (Navalkele, CID 2017)",
            "FENa <1% suggests prerenal; >2% suggests intrinsic (with caveats)",
            "Early nephrology consultation in AKI associated with improved outcomes",
            "Urine microscopy is underutilized but highly valuable for AKI diagnosis"
        ],
        openAccessLinks: [
            "https://kdigo.org/guidelines/acute-kidney-injury/"
        ]
    }
},

// ============================================================================
// CASE 2: HYPERKALEMIA EMERGENCY
// ============================================================================

'hyperkalemia-emergency': {
    id: 'hyperkalemia-emergency',
    title: 'Hyperkalemia - ECG Changes',
    category: 'Nephrology',
    isParallel: false,
    parallelCase: 'hyperkalemia-mild',
    parallelDescription: 'Mild hyperkalemia without ECG changes',
    patient: { 
        name: 'Eleanor Washington', 
        age: 68, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Weakness' 
    },
    description: 'A 68-year-old with ESRD on HD (missed last 2 sessions) presents with progressive weakness. K+ 7.8, ECG shows peaked T waves and widened QRS (120ms). BP 158/92, HR 52, appears fatigued but alert. Last dialysis 5 days ago.',
    openingStatement: 'Mrs. Washington has severe hyperkalemia with ECG changes - this is a cardiac emergency. You need to stabilize her and communicate urgently with the dialysis team. Walk me through your approach.',
    conceptDomains: {
        'Situation': ['potassium_level', 'ecg_findings', 'symptoms', 'hemodynamic_status'],
        'Background': ['esrd_history', 'dialysis_schedule', 'medications', 'missed_sessions'],
        'Assessment': ['cardiac_toxicity', 'urgency_level', 'treatment_sequence'],
        'Recommendation': ['immediate_treatment', 'emergent_dialysis', 'monitoring']
    },
    quickActions: [
        'What ECG changes do I look for?',
        'What\'s the treatment sequence?',
        'When is calcium indicated?',
        'How fast does dialysis remove potassium?'
    ],
    keyTeachingPoints: [
        'ECG progression: Peaked T waves → PR prolongation → QRS widening → sine wave → VF/asystole',
        'Treatment sequence: (1) Calcium for membrane stabilization, (2) Shift K+ intracellularly, (3) Remove K+ from body',
        'Calcium gluconate 1-2g IV over 2-3 min - works in 1-3 minutes, lasts 30-60 min',
        'Insulin + glucose shifts K+ in 15-30 min; beta-agonists also help',
        'Only dialysis, kayexalate, or diuretics (if kidneys work) actually REMOVE potassium'
    ],
    sbarTemplate: {
        situation: 'I have a 68-year-old ESRD patient with critical hyperkalemia - K is 7.8 with ECG changes including peaked T waves and QRS widening to 120ms. She needs emergent treatment and dialysis.',
        background: 'She\'s on HD but missed her last 2 sessions - it\'s been 5 days since dialysis. She\'s on lisinopril and spironolactone at home. Presenting with weakness, HR is 52.',
        assessment: 'This is cardiac-toxic hyperkalemia requiring immediate intervention. She has both ECG changes and bradycardia. High risk for deterioration to fatal arrhythmia.',
        recommendation: 'I\'m giving calcium gluconate now for membrane stabilization, then insulin/glucose for shifting. She needs emergent dialysis - can you help arrange an urgent HD slot or should we prepare for emergent vascular access?'
    },
    defined_responses: {
        'ecg changes': 'Progressive ECG changes: (1) Peaked T waves (K 5.5-6.5), (2) PR prolongation, flattened P waves (K 6.5-7.5), (3) QRS widening (K 7-8), (4) Sine wave pattern (K >8), (5) VF or asystole. Her QRS widening at 120ms is serious.',
        'treatment sequence': 'Stabilize → Shift → Remove. (1) CALCIUM gluconate 1-2g IV - stabilizes membrane in 1-3 min. (2) Insulin 10 units regular + D50 - shifts K in 15-30 min. (3) Dialysis to remove. Kayexalate takes hours and is not for emergencies.',
        'calcium indication': 'Give calcium for ANY ECG changes OR K >6.5. It doesn\'t lower K - it stabilizes the cardiac membrane and buys time. Can repeat every 5-10 min if ECG doesn\'t improve. Use calcium chloride via central line if available (3x more elemental calcium).',
        'dialysis speed': 'Dialysis removes K rapidly - can drop K by 1-1.5 mEq/L in the first hour. A 3-4 hour session can normalize K. She needs emergent dialysis - either through her access or temporary catheter if access isn\'t working.',
        'avoid': 'HOLD her lisinopril and spironolactone - both cause hyperkalemia. ACEi/ARBs and K-sparing diuretics are the most common culprits in ESRD patients.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Potassium Module', link: '../mechanism/potassium-module.html', reason: 'Understand K+ physiology and cardiac effects' },
        { type: 'reasondx', title: 'Hyperkalemia Adventure', link: '../ReasonDx/adventure-cases/hyperkalemia-expanded.html', reason: 'Practice hyperkalemia management' },
        { type: 'reasondx', title: 'ECG Module', link: '../ReasonDx/ecg/ecg-quiz.html', reason: 'Recognize hyperkalemia on ECG' }
    ],
    evidenceBase: {
        guidelines: [
            "AHA ACLS Guidelines 2020",
            "UK Renal Association Hyperkalemia Guidelines 2020"
        ],
        keyEvidence: [
            "Calcium stabilizes cardiac membrane within 1-3 minutes",
            "Insulin + glucose most reliable K-shifting agent",
            "ECG changes don't always correlate with K level - treat the patient",
            "Sodium bicarbonate is NOT effective for acute K shifting in ESRD"
        ],
        openAccessLinks: [
            "https://renal.org/sites/renal.org/files/FINAL%20VERSION%20-%20MANAGEMENT%20OF%20HYPERKALAEMIA%20IN%20ADULTS.pdf"
        ]
    }
},

// ============================================================================
// CASE 3: DIALYSIS INITIATION
// ============================================================================

'dialysis-initiation-urgent': {
    id: 'dialysis-initiation-urgent',
    title: 'Dialysis Initiation - Uremic Symptoms',
    category: 'Nephrology',
    isParallel: false,
    parallelCase: 'dialysis-elective',
    parallelDescription: 'Elective dialysis start',
    patient: { 
        name: 'George Thompson', 
        age: 74, 
        sex: 'Male', 
        setting: 'Medical Floor', 
        acuity: 'High', 
        chiefComplaint: 'Confusion and Nausea' 
    },
    description: 'A 74-year-old with CKD stage 5 (known GFR 12, not yet on dialysis) admitted for confusion and intractable nausea/vomiting. BUN 148, Cr 11.2, K 5.9, bicarb 14, pH 7.28. Has asterixis on exam. Family reports he\'s been increasingly confused over 1 week. No AV fistula - was scheduled for fistula creation next month.',
    openingStatement: 'Mr. Thompson has uremic encephalopathy - a clear indication for dialysis initiation. But he has no permanent access. You need to discuss with nephrology about urgent dialysis and access planning. How do you approach this?',
    conceptDomains: {
        'Situation': ['uremic_symptoms', 'lab_values', 'mental_status', 'access_status'],
        'Background': ['ckd_progression', 'dialysis_planning', 'comorbidities'],
        'Assessment': ['dialysis_indication', 'access_options', 'urgency'],
        'Recommendation': ['temporary_access', 'dialysis_initiation', 'long_term_planning']
    },
    quickActions: [
        'What are the indications for dialysis?',
        'What access options does he have?',
        'How do I explain this to the family?',
        'What about peritoneal dialysis?'
    ],
    keyTeachingPoints: [
        'Absolute dialysis indications (AEIOU): Acidosis, Electrolytes, Intoxication, Overload, Uremia',
        'Uremic symptoms: encephalopathy (asterixis, confusion), pericarditis, bleeding, intractable nausea',
        'No access? Temporary dialysis catheter (IJ or femoral) while planning permanent access',
        'First HD session should be gentle - avoid dialysis disequilibrium syndrome',
        'AV fistula is gold standard but takes 2-3 months to mature'
    ],
    sbarTemplate: {
        situation: 'I\'m calling about Mr. Thompson, a 74-year-old CKD 5 patient who now has uremic encephalopathy and needs urgent dialysis initiation. He has no dialysis access.',
        background: 'His GFR has been around 12, and he was scheduled for fistula creation next month. Over the past week he\'s become progressively confused with nausea and vomiting. BUN is 148, creatinine 11.2, and he has asterixis.',
        assessment: 'He has clear uremic symptoms requiring dialysis - encephalopathy with asterixis and intractable GI symptoms. Potassium is 5.9 and bicarb 14 with pH 7.28, so metabolic acidosis too. This is urgent.',
        recommendation: 'He needs a temporary dialysis catheter for urgent HD initiation. Can we get IR or your team to place a tunneled catheter today? We should also discuss accelerating his permanent access planning.'
    },
    defined_responses: {
        'dialysis indications': 'AEIOU: Acidosis (refractory, pH <7.1), Electrolytes (hyperK refractory to medical therapy), Intoxication (lithium, methanol, etc.), Overload (pulmonary edema refractory to diuretics), Uremia (encephalopathy, pericarditis, bleeding). Mr. Thompson has uremic encephalopathy - a clear indication.',
        'access options': 'Temporary: tunneled dialysis catheter (preferred - lower infection risk, can be used immediately) or non-tunneled catheter. Permanent: AV fistula (best, needs 2-3 mo to mature), AV graft (can use in 2-3 weeks), PD catheter. He needs temporary access now.',
        'family discussion': '"Mr. Thompson\'s kidneys have reached the point where they can no longer clean his blood adequately. The confusion and nausea are from toxin buildup. He needs dialysis to filter his blood - this will be ongoing. We\'ll start with a temporary catheter and plan for permanent access."',
        'first session': 'First HD should be gentle to avoid dialysis disequilibrium syndrome (cerebral edema from rapid osmotic shifts). Shorter duration (2 hours), lower blood flow, smaller fluid removal. Monitor for headache, confusion, seizures.',
        'pd option': 'PD is an option but requires catheter placement and 2-week break-in period before use. Not ideal for urgent starts. Can transition to PD later if patient prefers home dialysis.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'AKI-CKD Module', link: '../mechanism/aki-ckd.html', reason: 'Understand progression to ESRD' },
        { type: 'reasondx', title: 'AKI Adventure', link: '../ReasonDx/adventure-cases/aki-expanded.html', reason: 'Practice renal failure workup' },
        { type: 'consentdx', title: 'Dialysis Consent', link: '../ConsentDx/consentdx-main.html', reason: 'Practice dialysis consent conversation' }
    ],
    evidenceBase: {
        guidelines: [
            "KDOQI Vascular Access Guidelines 2019",
            "KDIGO CKD Guidelines 2012"
        ],
        keyEvidence: [
            "Fistula first' - AV fistula has lowest infection and thrombosis rates",
            "Urgent-start PD is feasible but requires experienced center",
            "Dialysis disequilibrium more common with very high BUN (>150)",
            "Tunneled catheters preferred over non-tunneled for >1-2 weeks expected use"
        ],
        openAccessLinks: [
            "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext"
        ]
    }
},

// ============================================================================
// CASE 4: SEVERE HYPONATREMIA
// ============================================================================

'hyponatremia-severe': {
    id: 'hyponatremia-severe',
    title: 'Severe Hyponatremia - Symptomatic',
    category: 'Nephrology',
    isParallel: false,
    parallelCase: 'hyponatremia-chronic',
    parallelDescription: 'Chronic asymptomatic hyponatremia',
    patient: { 
        name: 'Patricia Kim', 
        age: 71, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Seizure' 
    },
    description: 'A 71-year-old with depression on SSRI presents after witnessed seizure at home. Na+ 112, serum osm 238, urine osm 420, urine Na 58. Lethargic but arousable post-ictally. BP 128/78, euvolemic on exam. Daughter says mom has been drinking excessive water lately "for her health."',
    openingStatement: 'Mrs. Kim has severe symptomatic hyponatremia with seizures - this is life-threatening and needs urgent correction. But we have to be careful about overcorrection. How do you manage this and communicate with the team?',
    conceptDomains: {
        'Situation': ['sodium_level', 'symptoms', 'seizure', 'mental_status'],
        'Background': ['medication_history', 'fluid_intake', 'chronicity', 'volume_status'],
        'Assessment': ['etiology', 'severity', 'correction_rate', 'osmotic_demyelination_risk'],
        'Recommendation': ['hypertonic_saline', 'monitoring_frequency', 'nephrology_involvement']
    },
    quickActions: [
        'What\'s causing her hyponatremia?',
        'How fast should I correct sodium?',
        'When do I give hypertonic saline?',
        'What is osmotic demyelination syndrome?'
    ],
    keyTeachingPoints: [
        'Severe symptoms (seizures, coma): Give 3% saline 100-150 mL bolus, can repeat x2',
        'Target: Raise Na by 4-6 mEq/L in first few hours to stop symptoms',
        'Correction limit: ≤10-12 mEq/L in 24 hours, ≤18 mEq/L in 48 hours',
        'Overcorrection risk → Osmotic demyelination syndrome (ODS)',
        'SIADH likely here: hypotonic hyponatremia + concentrated urine + euvolemic + SSRI'
    ],
    sbarTemplate: {
        situation: 'I have a 71-year-old woman with severe symptomatic hyponatremia - sodium 112 with seizures. She needs urgent correction with hypertonic saline.',
        background: 'She\'s on sertraline for depression. Her daughter reports excessive water drinking recently. She\'s euvolemic on exam. Urine osm is 420 with urine sodium 58, suggesting SIADH.',
        assessment: 'This is severe hyponatremia with neurologic symptoms requiring emergent treatment. Likely SIADH from SSRI plus psychogenic polydipsia. High risk for osmotic demyelination if we overcorrect.',
        recommendation: 'I\'m giving 3% saline 100 mL bolus now and rechecking sodium in 2 hours. Goal is to raise sodium 4-6 mEq/L initially to stop seizures, then slow correction to avoid ODS. Can you help guide the correction rate and discuss fluid restriction once stable?'
    },
    defined_responses: {
        'etiology': 'SIADH from SSRI is likely. She has hypotonic hyponatremia (serum osm 238) with inappropriately concentrated urine (osm 420 > serum). Urine Na 58 confirms renal salt wasting in SIADH. The polydipsia worsened it. SSRIs are common SIADH causes.',
        'correction rate': 'For severe symptoms (seizures): Raise Na 4-6 mEq/L in first 1-2 hours with 3% saline boluses. Then slow down. Total correction should not exceed 10-12 mEq/L in 24 hours or 18 in 48 hours. Check Na q2h initially.',
        'hypertonic saline': 'Give 3% saline for severe symptoms (seizures, obtundation, coma). Dose: 100-150 mL bolus over 10-20 minutes. Can repeat 1-2 times if symptoms persist. Each 100 mL raises Na ~1.5-2 mEq/L in average adult.',
        'ods': 'Osmotic demyelination syndrome (ODS, formerly central pontine myelinolysis) occurs with rapid sodium correction. Risk factors: Na <120, chronic hyponatremia, alcoholism, malnutrition, hypokalemia. Presents 2-6 days after correction with dysarthria, dysphagia, quadriparesis. Devastating and often irreversible.',
        'overcorrection': 'If sodium rises too fast, you can RE-LOWER it with D5W or desmopressin. This is called "rescue therapy." Better to be cautious. Some experts give prophylactic desmopressin with 3% saline to control correction rate.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Hyponatremia Module', link: '../mechanism/hyponatremia-module.html', reason: 'Understand sodium and water balance' },
        { type: 'reasondx', title: 'Hyponatremia Adventure', link: '../ReasonDx/adventure-cases/hyponatremia-expanded.html', reason: 'Practice hyponatremia workup' },
        { type: 'reasondx', title: 'Electrolyte Emergencies', link: '../ReasonDx/adventure-cases/electrolyte-emergencies-expanded.html', reason: 'Broader electrolyte management' }
    ],
    evidenceBase: {
        guidelines: [
            "European Hyponatremia Guidelines 2014",
            "CJASN Expert Panel Recommendations 2017"
        ],
        keyEvidence: [
            "3% saline boluses (100-150 mL) are safe and effective for severe symptoms",
            "ODS risk increases dramatically when correction exceeds 10-12 mEq/L/24h",
            "Desmopressin can be used proactively to prevent overcorrection",
            "SSRIs are among most common causes of SIADH in elderly"
        ],
        openAccessLinks: [
            "https://academic.oup.com/ndt/article/29/suppl_2/i1/1905488"
        ]
    }
},

// ============================================================================
// CASE 5: CONTRAST-INDUCED AKI PREVENTION
// ============================================================================

'contrast-aki-prevention': {
    id: 'contrast-aki-prevention',
    title: 'Contrast-Induced AKI Prevention',
    category: 'Nephrology',
    isParallel: false,
    parallelCase: null,
    patient: { 
        name: 'Robert Chen', 
        age: 78, 
        sex: 'Male', 
        setting: 'Medical Floor', 
        acuity: 'Medium', 
        chiefComplaint: 'Pre-procedure Consultation' 
    },
    description: 'A 78-year-old with CKD stage 4 (GFR 22), diabetes, and heart failure needs a CT angiogram to evaluate for mesenteric ischemia. Cardiology is requesting the study urgently. Cr 3.2, K 4.8, on metformin, lisinopril, and furosemide. You need to discuss contrast risk and prevention with the primary team.',
    openingStatement: 'Mr. Chen has significant CKD and needs an urgent contrast study. Cardiology wants to proceed, but we need to optimize his renal protection. How do you communicate the risks and mitigation strategies?',
    conceptDomains: {
        'Situation': ['study_indication', 'urgency', 'current_renal_function'],
        'Background': ['ckd_stage', 'risk_factors', 'current_medications'],
        'Assessment': ['ci_aki_risk', 'risk_vs_benefit', 'preventive_measures'],
        'Recommendation': ['hydration_protocol', 'medication_holds', 'follow_up_monitoring']
    },
    quickActions: [
        'What\'s his risk of contrast-induced AKI?',
        'Do I need to hold metformin?',
        'What\'s the best prevention strategy?',
        'Should we use iso-osmolar contrast?'
    ],
    keyTeachingPoints: [
        'CI-AKI risk factors: CKD (biggest), diabetes, heart failure, volume depletion, high contrast volume',
        'Prevention: IV hydration is the mainstay (isotonic saline or bicarb)',
        'Hold metformin after contrast (not before) - risk of lactic acidosis if AKI develops',
        'NAC (N-acetylcysteine) - evidence is weak, but low risk so often given',
        'Contrast volume: aim for <100 mL or < (3 x GFR) mL'
    ],
    sbarTemplate: {
        situation: 'I\'m calling about Mr. Chen who needs urgent CTA for possible mesenteric ischemia. He has CKD 4 with creatinine 3.2, so I want to discuss contrast risk mitigation.',
        background: 'He\'s 78 with diabetes, CKD stage 4, and heart failure. Current meds include metformin, lisinopril, and furosemide. The study is clinically indicated - mesenteric ischemia can be life-threatening.',
        assessment: 'He\'s high risk for CI-AKI given CKD and diabetes. However, the clinical indication is strong. With proper prophylaxis, the risk-benefit likely favors proceeding.',
        recommendation: 'I recommend pre-procedure IV hydration with isotonic saline, holding metformin after the study until we confirm stable renal function at 48 hours, using low or iso-osmolar contrast with minimal volume, and checking creatinine at 48-72 hours post-procedure.'
    },
    defined_responses: {
        'ci-aki risk': 'High risk. CKD is the biggest risk factor - his GFR of 22 puts him at significant risk. Diabetes adds to risk. Heart failure complicates hydration. Estimate 10-20% risk of CI-AKI (vs 1-2% baseline risk). Most cases are transient, but some progress.',
        'metformin': 'Hold metformin AFTER contrast, not before. The concern is lactic acidosis if AKI develops and metformin accumulates. The ACR recommends: eGFR ≥30 can usually continue; eGFR <30 or getting arterial/high-volume contrast, hold for 48 hours and recheck Cr before restarting.',
        'prevention': 'IV hydration is the only proven prevention. Isotonic saline: 1-1.5 mL/kg/hr for 6-12 hours before and after. For HF patients, balance hydration vs volume overload. NAC is low-risk but evidence is weak. Statins may help but not proven.',
        'contrast type': 'Iso-osmolar (iodixanol) or low-osmolar contrast preferred over high-osmolar. Minimize volume - keep total <100 mL or < 3 x GFR. Iso-osmolar may be slightly better in high-risk patients, but difference is modest.',
        'hold other meds': 'Consider holding ACEi/ARB (lisinopril) and diuretics (furosemide) day of procedure and for 24-48 hours after - allows better hydration and reduces AKI risk. NSAIDs should definitely be held.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'AKI Module', link: '../mechanism/aki-module.html', reason: 'Understand nephrotoxic AKI mechanisms' },
        { type: 'reasondx', title: 'AKI Adventure', link: '../ReasonDx/adventure-cases/aki-expanded.html', reason: 'Practice AKI prevention and management' }
    ],
    evidenceBase: {
        guidelines: [
            "ACR Manual on Contrast Media 2022",
            "KDIGO AKI Guidelines 2012"
        ],
        keyEvidence: [
            "Volume expansion with saline is the most evidence-supported prevention strategy",
            "PRESERVE trial: NAC and bicarb showed no benefit over saline alone",
            "AMACING trial: Hydration may not be needed if eGFR >30 and low contrast volume",
            "CI-AKI risk may be overestimated in observational studies"
        ],
        openAccessLinks: [
            "https://www.acr.org/Clinical-Resources/Contrast-Manual"
        ]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_NEPHROLOGY_CASES;
}

// Merge with existing COACHDX_CASES if available
if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_NEPHROLOGY_CASES);
}
