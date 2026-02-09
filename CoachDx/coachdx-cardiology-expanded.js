// ============================================================================
// COACHDX CARDIOLOGY EXPANDED CASE PACK
// Attending conversations for all Cardiology topics missing CoachDx coverage
// Created: February 7, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================

const COACHDX_CARDIOLOGY_EXPANDED = {

// ============================================================================
// CASE: ACS - Acute Coronary Syndrome
// ============================================================================
'acs-nstemi-workup': {
    id: 'acs-nstemi-workup',
    title: 'NSTEMI - Risk Stratification & Management',
    category: 'Cardiology',
    isParallel: true,
    parallelCase: 'stemi-cath-activation',
    parallelDescription: 'STEMI requiring emergent cath lab activation',
    patient: {
        name: 'Helen Ortiz',
        age: 67,
        sex: 'Female',
        setting: 'Emergency',
        acuity: 'High',
        chiefComplaint: 'Substernal Chest Pressure'
    },
    description: 'A 67-year-old woman with HTN, type 2 DM, and hyperlipidemia presents with 3 hours of substernal chest pressure radiating to her jaw, associated with nausea. HR 88, BP 162/94, SpO2 97%. ECG shows ST depression V4-V6 and T-wave inversions. Troponin I is 0.42 ng/mL (normal <0.04).',
    openingStatement: 'Ms. Ortiz has an NSTEMI. Unlike a STEMI, there is no 90-minute door-to-balloon clock — but that does not mean you have unlimited time. How do you risk-stratify her, and what determines whether she goes to the cath lab in 2 hours versus 24 hours?',
    conceptDomains: {
        'Situation': ['troponin_elevation', 'ecg_changes', 'ongoing_symptoms'],
        'Background': ['cardiovascular_risk_factors', 'diabetes_and_acs', 'prior_cardiac_history'],
        'Assessment': ['nstemi_vs_stemi', 'timi_grace_score', 'high_risk_features'],
        'Recommendation': ['anticoagulation_strategy', 'timing_of_catheterization', 'dual_antiplatelet']
    },
    quickActions: [
        'How does NSTEMI differ from STEMI management?',
        'What makes her high-risk?',
        'When does she need the cath lab?',
        'What medications should I start?'
    ],
    keyTeachingPoints: [
        'NSTEMI = troponin elevation + ischemic symptoms/ECG changes WITHOUT ST elevation',
        'TIMI risk score and GRACE score guide timing: high-risk features → early invasive (≤24h)',
        'High-risk features: hemodynamic instability, refractory angina, new HF, sustained VT, GRACE >140',
        'Dual antiplatelet (ASA + P2Y12 inhibitor) + anticoagulation started immediately',
        'Diabetes worsens prognosis in ACS — more diffuse disease, atypical presentations common'
    ],
    sbarTemplate: {
        situation: 'I have a 67-year-old woman with an NSTEMI. Troponin 0.42, ST depression in the lateral leads. She is still having chest pressure.',
        background: 'She has diabetes, hypertension, and hyperlipidemia. No prior cardiac history. No contraindications to anticoagulation.',
        assessment: 'This is a high-risk NSTEMI given ongoing symptoms, elevated troponin, and dynamic ECG changes. Her TIMI score is at least 4. She needs early invasive strategy.',
        recommendation: 'I have started ASA, ticagrelor, and heparin drip. Requesting cardiology consult for catheterization within 24 hours. She is on telemetry and I will recheck troponin in 3 hours to trend.'
    },
    defined_responses: {
        'nstemi vs stemi': 'STEMI has a clear culprit lesion with total occlusion — time-critical reperfusion within 90 minutes. NSTEMI usually involves subtotal occlusion or microembolization. No emergent cath lab activation, but high-risk patients benefit from early invasive strategy within 24 hours. The distinction is on ECG: ST elevation = STEMI, ST depression or T-wave changes = NSTEMI.',
        'high risk features': 'High-risk NSTEMI features: ongoing/refractory chest pain, hemodynamic instability, sustained ventricular tachycardia, heart failure, GRACE score >140, rising troponins. Her ongoing symptoms and dynamic lateral ECG changes plus the troponin make her high-risk. She should go to cath within 24 hours, possibly sooner if pain doesn\'t resolve.',
        'cath timing': 'Three timing strategies: (1) Immediate (<2h) for hemodynamic instability, refractory angina, sustained VT, or cardiogenic shock. (2) Early invasive (≤24h) for high-risk features — that\'s her. (3) Ischemia-guided (conservative) for low-risk patients with resolved symptoms and normal troponins.',
        'medications': 'Immediate: ASA 325mg (then 81mg daily), P2Y12 inhibitor (ticagrelor 180mg then 90mg BID, or clopidogrel if bleeding risk high), anticoagulation (UFH or enoxaparin). Also: high-intensity statin, beta-blocker (if no contraindication), NTG for pain. Hold ACEi until hemodynamically stable.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'ACS Module', link: '../mechanism/acs-module.html', reason: 'Pathophysiology of plaque rupture and coronary thrombosis' },
        { type: 'reasondx', title: 'ACS Adventure', link: '../ReasonDx/adventure-cases/acs-expanded-adventure.html', reason: 'Practice full ACS diagnostic workup' }
    ],
    evidenceBase: {
        guidelines: ['AHA/ACC NSTEMI Guidelines 2021', 'ESC NSTE-ACS Guidelines 2020'],
        openAccess: ['StatPearls: Non-ST-Elevation Myocardial Infarction (NBK513228)', 'GRACE Risk Calculator']
    }
},

// ============================================================================
// CASE: Heart Failure
// ============================================================================
'hf-decompensation': {
    id: 'hf-decompensation',
    title: 'Acute Decompensated Heart Failure',
    category: 'Cardiology',
    patient: {
        name: 'William Carter',
        age: 72,
        sex: 'Male',
        setting: 'Emergency',
        acuity: 'High',
        chiefComplaint: 'Worsening Dyspnea and Leg Swelling'
    },
    description: 'A 72-year-old man with known HFrEF (EF 30%), HTN, and CKD stage 3 presents with 5 days of worsening dyspnea on exertion, orthopnea (3 pillows), and bilateral lower extremity edema. He ran out of furosemide 2 weeks ago. HR 104, BP 152/90, SpO2 91% on RA, JVP elevated, bibasilar crackles, 2+ pitting edema to knees.',
    openingStatement: 'Mr. Carter is in acute decompensated heart failure. He tells you he ran out of his diuretic 2 weeks ago. Walk me through how you assess his volume status, choose your diuretic strategy, and decide whether he can be managed on the floor or needs the ICU.',
    conceptDomains: {
        'Situation': ['volume_overload_signs', 'hypoxia', 'tachycardia'],
        'Background': ['baseline_ef', 'ckd_and_diuretic_resistance', 'medication_noncompliance'],
        'Assessment': ['warm_wet_cold_wet_classification', 'precipitating_factors', 'end_organ_perfusion'],
        'Recommendation': ['iv_diuretic_strategy', 'afterload_reduction', 'monitoring_targets']
    },
    quickActions: [
        'How do I assess his perfusion status?',
        'What diuretic dose should I use?',
        'When does he need the ICU?',
        'What is GDMT?'
    ],
    keyTeachingPoints: [
        'Classify by perfusion and congestion: warm-wet (most common ADHF), warm-dry, cold-wet, cold-dry',
        'IV furosemide: give at least their home dose IV; if furosemide-naïve start 20-40mg IV',
        'Monitor: urine output (goal >0.5 mL/kg/hr), daily weights, renal function, electrolytes',
        'Precipitants: medication noncompliance, dietary indiscretion, new arrhythmia (check for afib), infection',
        'GDMT for HFrEF: ACEi/ARB/ARNI + beta-blocker + MRA + SGLT2i — the four pillars'
    ],
    sbarTemplate: {
        situation: 'I have a 72-year-old man with acute decompensated heart failure. He is hypoxic at 91%, tachycardic at 104, with bilateral crackles and significant edema.',
        background: 'Known HFrEF with EF 30%, CKD stage 3. He ran out of furosemide 2 weeks ago — medication noncompliance is the precipitant.',
        assessment: 'He is warm and wet — adequate perfusion with significant volume overload. No signs of cardiogenic shock. Precipitant identified.',
        recommendation: 'Started IV furosemide 40mg, placed on 2L nasal cannula, telemetry. Will trend I/Os, BMP in 6 hours, daily weights. Once stabilized, will restart and optimize GDMT.'
    },
    defined_responses: {
        'perfusion assessment': 'The Nohria-Stevenson classification: check extremities (warm vs cool), mental status, pulse pressure, and urine output. Warm extremities + congestion = warm-wet (treat with diuretics). Cool extremities + congestion = cold-wet (may need inotropes). His warm hands, adequate BP, and intact mentation make him warm-wet — the most treatable profile.',
        'diuretic dose': 'Rule: give at least their total daily oral dose as an IV bolus. If he was on furosemide 40mg PO BID (80mg/day), start 80mg IV. If furosemide-naïve: 20-40mg IV. IV has 100% bioavailability vs ~50% oral. If no response in 2 hours (urine output <100-200 mL), double the dose. Consider adding metolazone for diuretic resistance.',
        'icu criteria': 'ICU for: cardiogenic shock (cold-wet with hypotension), need for inotropes or vasopressors, respiratory failure requiring BiPAP/intubation, new sustained arrhythmias, or acute coronary syndrome as precipitant. His SpO2 91% on RA should respond to nasal cannula and diuresis — if not improving in 1-2 hours, escalate.',
        'gdmt': 'Four pillars of GDMT for HFrEF: (1) ACEi/ARB or sacubitril-valsartan (ARNI), (2) evidence-based beta-blocker (carvedilol, metoprolol succinate, or bisoprolol), (3) mineralocorticoid receptor antagonist (spironolactone or eplerenone), (4) SGLT2 inhibitor (dapagliflozin or empagliflozin). All four reduce mortality. Do NOT start beta-blocker during acute decompensation — optimize after euvolemia.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Heart Failure Module', link: '../mechanism/heart-failure-module.html', reason: 'Frank-Starling curve and neurohormonal activation' },
        { type: 'reasondx', title: 'Heart Failure Adventure', link: '../ReasonDx/adventure-cases/heart-failure-expanded-adventure.html', reason: 'Practice HF workup and management' }
    ],
    evidenceBase: {
        guidelines: ['AHA/ACC/HFSA Heart Failure Guidelines 2022'],
        openAccess: ['StatPearls: Congestive Heart Failure (NBK430873)', 'StatPearls: Cardiogenic Shock (NBK482255)']
    }
},

// ============================================================================
// CASE: Atrial Fibrillation
// ============================================================================
'afib-rvr-management': {
    id: 'afib-rvr-management',
    title: 'Atrial Fibrillation with Rapid Ventricular Response',
    category: 'Cardiology',
    patient: {
        name: 'Patricia Nguyen',
        age: 74,
        sex: 'Female',
        setting: 'Emergency',
        acuity: 'Moderate',
        chiefComplaint: 'Palpitations and Lightheadedness'
    },
    description: 'A 74-year-old woman with HTN and hypothyroidism presents with 6 hours of palpitations and lightheadedness. HR 142 irregularly irregular, BP 118/72, SpO2 97%. ECG confirms AFib with RVR. No chest pain, no dyspnea at rest. No prior history of AFib. TSH was normal 3 months ago.',
    openingStatement: 'Mrs. Nguyen is in new-onset AFib with rapid ventricular response. Before you reach for the diltiazem, walk me through your thinking: rate vs rhythm control, anticoagulation decision, and what underlying causes you need to rule out.',
    conceptDomains: {
        'Situation': ['irregularly_irregular', 'hemodynamic_status', 'symptom_duration'],
        'Background': ['new_onset_vs_chronic', 'hypothyroidism_and_afib', 'stroke_risk_factors'],
        'Assessment': ['chads_vasc_score', 'rate_vs_rhythm_decision', 'reversible_causes'],
        'Recommendation': ['rate_control_agents', 'anticoagulation_initiation', 'cardioversion_consideration']
    },
    quickActions: [
        'Rate control vs rhythm control?',
        'What is CHA2DS2-VASc?',
        'Does she need anticoagulation?',
        'Can I cardiovert her?'
    ],
    keyTeachingPoints: [
        'New AFib workup: TSH, electrolytes (Mg, K), echocardiogram, consider PE if acute onset',
        'CHA2DS2-VASc ≥2 in women (≥1 in men) → long-term anticoagulation for stroke prevention',
        'Rate control first-line: diltiazem or metoprolol IV for acute RVR; target HR <110 at rest',
        'Cardioversion safe if onset <48h; if >48h or unknown, need TEE or 3 weeks anticoagulation first',
        'Always check for underlying cause: thyrotoxicosis, PE, sepsis, alcohol, surgery, HF'
    ],
    sbarTemplate: {
        situation: 'I have a 74-year-old woman with new-onset atrial fibrillation with a ventricular rate of 142. She is hemodynamically stable but symptomatic with palpitations.',
        background: 'No prior AFib history. She has hypertension and hypothyroidism. TSH was normal 3 months ago.',
        assessment: 'Her CHA2DS2-VASc is at least 4 (age, HTN, female). She needs anticoagulation. Hemodynamically stable so rate control is first priority.',
        recommendation: 'Starting IV diltiazem for rate control, targeting heart rate under 110. Sending TSH, BMP, magnesium, BNP, and ordering an echocardiogram. Will initiate anticoagulation with a DOAC once rate is controlled.'
    },
    defined_responses: {
        'rate vs rhythm': 'Rate control is first priority when the patient is stable. AFFIRM and RACE trials showed rate control is non-inferior to rhythm control for most patients. However, rhythm control may be preferred if: very symptomatic despite rate control, younger patient, first episode with clear trigger, HFrEF. Her age and comorbidities favor rate control initially.',
        'chads vasc': 'CHA2DS2-VASc: C=CHF (0), H=HTN (1), A2=Age ≥75 (2), D=DM (0), S2=Stroke/TIA (0), V=Vascular disease (0), A=Age 65-74 (0 — she gets the 75+ points), Sc=Sex female (1). Her score: 1+2+1 = 4. That means ~4% annual stroke risk without anticoagulation. She absolutely needs a DOAC.',
        'anticoagulation': 'With CHA2DS2-VASc of 4, she needs long-term anticoagulation. DOACs (apixaban, rivaroxaban, edoxaban, dabigatran) are preferred over warfarin for non-valvular AFib. Apixaban has the best safety profile in elderly. Check renal function — all DOACs need dose adjustment for CKD. HAS-BLED score assesses bleeding risk but rarely outweighs stroke benefit at her CHA2DS2-VASc.',
        'cardioversion': 'Onset is 6 hours ago — less than 48 hours, so cardioversion is safe without TEE IF you are confident about the timing. However, she is stable, so there is no urgency. Rate control + anticoagulation is a reasonable initial strategy. If she remains symptomatic after rate control, cardioversion can be considered. Start anticoagulation before cardioversion and continue for at least 4 weeks after.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'AFib Module', link: '../mechanism/afib-module.html', reason: 'Atrial remodeling and thromboembolism risk' },
        { type: 'reasondx', title: 'AFib Adventure', link: '../ReasonDx/adventure-cases/afib-expanded-adventure.html', reason: 'Practice AFib workup and management decisions' }
    ],
    evidenceBase: {
        guidelines: ['AHA/ACC/HRS AFib Guidelines 2023', 'CCS AFib Guidelines 2020'],
        openAccess: ['StatPearls: Atrial Fibrillation (NBK526072)']
    }
},

// ============================================================================
// CASE: Aortic Dissection
// ============================================================================
'aortic-dissection-diagnosis': {
    id: 'aortic-dissection-diagnosis',
    title: 'Aortic Dissection - Type A vs Type B',
    category: 'Cardiology',
    patient: {
        name: 'Marcus Thompson',
        age: 55,
        sex: 'Male',
        setting: 'Emergency',
        acuity: 'Critical',
        chiefComplaint: 'Tearing Chest Pain Radiating to Back'
    },
    description: 'A 55-year-old man with poorly controlled HTN presents with sudden-onset severe tearing chest pain radiating to his back. BP 198/110 right arm, 162/88 left arm. HR 96, SpO2 96%. He is diaphoretic and anxious. Chest X-ray shows widened mediastinum.',
    openingStatement: 'Mr. Thompson has a blood pressure differential of 36 mmHg between arms, tearing chest pain, and a widened mediastinum. This is aortic dissection until proven otherwise. Walk me through how you confirm the diagnosis, classify it, and why the classification determines whether he goes to the OR or the ICU.',
    conceptDomains: {
        'Situation': ['bp_differential', 'widened_mediastinum', 'pain_character'],
        'Background': ['uncontrolled_htn', 'marfan_screening', 'cocaine_use'],
        'Assessment': ['stanford_classification', 'debakey_classification', 'complications'],
        'Recommendation': ['bp_hr_targets', 'surgical_vs_medical', 'imaging_choice']
    },
    quickActions: [
        'What imaging do I need?',
        'Type A vs Type B — why does it matter?',
        'What are the BP and HR goals?',
        'What complications should I watch for?'
    ],
    keyTeachingPoints: [
        'Stanford Type A = involves ascending aorta → surgical emergency. Type B = descending only → medical management',
        'CTA chest/abdomen/pelvis is the imaging of choice — fast, widely available, shows extent',
        'BP goal: SBP 100-120 mmHg. HR goal: <60 bpm. Use IV esmolol or labetalol FIRST (reduce shear stress)',
        'Start beta-blocker BEFORE vasodilators — vasodilators alone cause reflex tachycardia which worsens dissection',
        'Complications: tamponade, aortic regurgitation, malperfusion (stroke, mesenteric ischemia, limb ischemia)'
    ],
    sbarTemplate: {
        situation: 'I have a 55-year-old man with suspected aortic dissection. Tearing chest pain, 36 mmHg BP differential between arms, widened mediastinum on CXR.',
        background: 'Poorly controlled hypertension. No known connective tissue disease. No cocaine use.',
        assessment: 'High clinical suspicion for acute aortic dissection. Need emergent CTA to classify Stanford type and extent. If Type A, he needs emergent surgery.',
        recommendation: 'Started esmolol drip targeting HR <60 and SBP 100-120. CTA ordered STAT. Surgery and cardiology notified. Large bore IV access, type and crossmatch for 6 units. Pain controlled with IV morphine.'
    },
    defined_responses: {
        'imaging': 'CTA chest/abdomen/pelvis with IV contrast is first-line — sensitivity >95%, fast, shows the intimal flap, true vs false lumen, and extent of dissection. TEE is an alternative if patient too unstable for CT or in the OR. MRA is most accurate but too slow for acute setting. Plain CXR: widened mediastinum is only 60-90% sensitive — a normal CXR does NOT rule out dissection.',
        'type a vs b': 'Stanford Type A: any involvement of the ascending aorta, regardless of origin. Surgical emergency — mortality increases 1-2% per HOUR without repair. Stanford Type B: confined to descending aorta (distal to left subclavian). Usually managed medically with BP/HR control. Complicated Type B (malperfusion, rupture, refractory pain) may need TEVAR.',
        'bp hr goals': 'Goal: SBP 100-120, HR <60. Start IV beta-blocker FIRST: esmolol (titratable, short-acting) or labetalol. This reduces dP/dt (the force of ventricular ejection hitting the aortic wall). If BP still high after beta-blockade, add nicardipine or nitroprusside. NEVER start vasodilator without beta-blocker — reflex tachycardia worsens dissection propagation.',
        'complications': 'Type A complications: cardiac tamponade (dissection extends into pericardium), acute aortic regurgitation (flap disrupts valve), coronary malperfusion (RCA most common → inferior STEMI), stroke (carotid involvement). Type B complications: mesenteric ischemia, renal malperfusion, limb ischemia. Check pulses in all extremities, lactate, creatinine.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Aortic Dissection Module', link: '../mechanism/aortic-dissection-module.html', reason: 'Pathophysiology of medial degeneration and dissection propagation' },
        { type: 'reasondx', title: 'Aortic Dissection Adventure', link: '../ReasonDx/adventure-cases/aortic-dissection-expanded.html', reason: 'Practice dissection workup' }
    ],
    evidenceBase: {
        guidelines: ['AHA/ACC Aortic Disease Guidelines 2022', 'ESC Aortic Diseases Guidelines 2014'],
        openAccess: ['StatPearls: Aortic Dissection (NBK441963)']
    }
},

// ============================================================================
// CASE: Syncope
// ============================================================================
'syncope-risk-stratification': {
    id: 'syncope-risk-stratification',
    title: 'Syncope - Risk Stratification & Workup',
    category: 'Cardiology',
    patient: {
        name: 'David Kim',
        age: 62,
        sex: 'Male',
        setting: 'Emergency',
        acuity: 'Moderate',
        chiefComplaint: 'Lost Consciousness While Walking'
    },
    description: 'A 62-year-old man with HTN and type 2 DM collapsed while walking his dog. No prodrome, no chest pain. Brief LOC (~30 seconds per witness), no seizure activity. Vitals normal. ECG shows sinus rhythm with a PR interval of 280ms. Orthostatics negative.',
    openingStatement: 'Mr. Kim had syncope without a clear prodrome while exerting himself, and his ECG shows first-degree AV block with a prolonged PR interval. This is not a simple vasovagal episode. What features of his presentation worry you, and how do you decide who can go home versus who needs admission and monitoring?',
    conceptDomains: {
        'Situation': ['exertional_syncope', 'no_prodrome', 'ecg_abnormality'],
        'Background': ['cardiac_risk_factors', 'medication_review', 'family_history_scd'],
        'Assessment': ['cardiac_vs_noncardiac_cause', 'risk_scores', 'conduction_disease'],
        'Recommendation': ['admission_criteria', 'telemetry_monitoring', 'further_workup']
    },
    quickActions: [
        'What makes syncope high-risk?',
        'Should I admit him?',
        'What workup does he need?',
        'Vasovagal vs cardiac — how do I tell?'
    ],
    keyTeachingPoints: [
        'High-risk syncope features: exertional, no prodrome, abnormal ECG, structural heart disease, family history of SCD',
        'San Francisco Syncope Rule and Canadian Syncope Risk Score help risk-stratify',
        'His first-degree AV block (PR 280ms) + exertional syncope = worry about high-grade block',
        'Admit for telemetry: any cardiac concern, abnormal ECG, exertional syncope, age >60 with no clear vasovagal trigger',
        'Vasovagal: typical prodrome (warmth, nausea, tunnel vision), situational trigger, younger patient'
    ],
    sbarTemplate: {
        situation: 'I have a 62-year-old man with exertional syncope without prodrome. ECG shows first-degree AV block with PR 280ms.',
        background: 'Hypertension and diabetes. No known cardiac history. No family history of sudden death.',
        assessment: 'This is high-risk syncope: exertional, no prodrome, abnormal ECG, age over 60. I am concerned about intermittent high-grade AV block or ventricular arrhythmia.',
        recommendation: 'Admitting to telemetry for continuous monitoring. Will get echocardiogram, BMP, troponin. If telemetry non-diagnostic, plan for outpatient loop recorder.'
    },
    defined_responses: {
        'high risk features': 'High-risk features that suggest cardiac syncope: (1) Exertional — syncope during activity suggests outflow obstruction or arrhythmia, (2) No prodrome — cardiac syncope is often sudden without warning, (3) Abnormal ECG — his prolonged PR could indicate conduction system disease, (4) Age >60 — cardiac cause more likely, (5) Structural heart disease, (6) Family history of sudden cardiac death <50.',
        'admission': 'Yes — admit. He has at least 3 high-risk features: exertional, no prodrome, abnormal ECG. Canadian Syncope Risk Score and San Francisco Syncope Rule both flag him. Telemetry for at least 24 hours. His prolonged PR interval may represent intermittent Mobitz II or complete heart block that has resolved by the time he reaches the ED.',
        'workup': 'Essential: continuous telemetry, echocardiogram (look for HOCM, aortic stenosis, structural disease), BMP, troponin, CBC. If telemetry non-diagnostic: ambulatory monitor (Holter 24-48h or loop recorder 2-4 weeks). If structural disease suspected: consider stress testing or cardiac MRI. EP study if still unexplained with high suspicion for arrhythmia.',
        'vasovagal vs cardiac': 'Vasovagal: prodrome (nausea, warmth, diaphoresis, tunnel vision), situational trigger (prolonged standing, hot environment, emotional stress, post-micturition), younger patient, gradual onset and recovery. Cardiac: sudden onset, no prodrome, exertional, abnormal ECG, older patient with risk factors, possible injury from fall (no time to protect self). His presentation screams cardiac.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Syncope Module', link: '../mechanism/syncope-module.html', reason: 'Cerebral hypoperfusion mechanisms' },
        { type: 'reasondx', title: 'Syncope Adventure', link: '../ReasonDx/adventure-cases/syncope-expanded.html', reason: 'Practice syncope risk stratification' }
    ],
    evidenceBase: {
        guidelines: ['ACC/AHA/HRS Syncope Guidelines 2017', 'ESC Syncope Guidelines 2018'],
        openAccess: ['StatPearls: Syncope (NBK526027)']
    }
},

// ============================================================================
// CASE: Valvular Heart Disease
// ============================================================================
'aortic-stenosis-management': {
    id: 'aortic-stenosis-management',
    title: 'Severe Aortic Stenosis - Surgical Decision',
    category: 'Cardiology',
    patient: {
        name: 'Frank Moretti',
        age: 78,
        sex: 'Male',
        setting: 'Outpatient Cardiology',
        acuity: 'Moderate',
        chiefComplaint: 'Exertional Dyspnea and Near-Syncope'
    },
    description: 'A 78-year-old man presents with 3 months of progressive exertional dyspnea and two episodes of near-syncope climbing stairs. Exam reveals a harsh crescendo-decrescendo systolic murmur at the right upper sternal border radiating to carotids, with parvus et tardus carotid pulse. Echo shows aortic valve area 0.7 cm², mean gradient 48 mmHg, EF 55%.',
    openingStatement: 'Mr. Moretti has severe symptomatic aortic stenosis. He has the classic triad: exertional dyspnea, syncope, and probably occult heart failure. Once these symptoms appear, the natural history changes dramatically. Walk me through why timing matters and how you decide between SAVR and TAVR.',
    conceptDomains: {
        'Situation': ['symptom_triad', 'echo_severity_criteria', 'physical_exam_findings'],
        'Background': ['degenerative_calcific_disease', 'comorbidities_for_surgical_risk', 'prior_functional_status'],
        'Assessment': ['severity_classification', 'surgical_risk_assessment', 'timing_of_intervention'],
        'Recommendation': ['savr_vs_tavr', 'bridging_medical_therapy', 'surgical_risk_scores']
    },
    quickActions: [
        'What defines severe aortic stenosis?',
        'Why is timing so critical?',
        'SAVR vs TAVR — how do you choose?',
        'What medical therapy can I use?'
    ],
    keyTeachingPoints: [
        'Severe AS: valve area <1.0 cm², mean gradient >40 mmHg, jet velocity >4 m/s',
        'Classic symptom triad: angina, syncope, heart failure — once symptomatic, 2-year survival drops to 50%',
        'Parvus et tardus = weak and late carotid upstroke — pathognomonic physical exam finding',
        'TAVR preferred for high/prohibitive surgical risk; SAVR for low surgical risk and younger patients',
        'No medical therapy treats the valve — vasodilators are dangerous (can cause hypotension without compensatory increase in CO)'
    ],
    sbarTemplate: {
        situation: 'I have a 78-year-old with severe symptomatic aortic stenosis. Valve area 0.7 cm², mean gradient 48. He has exertional dyspnea and near-syncope.',
        background: 'No prior cardiac surgery. His comorbidities need assessment for surgical risk scoring.',
        assessment: 'This is severe symptomatic AS. Without intervention, his prognosis is poor. He needs valve replacement.',
        recommendation: 'Referring to the heart valve team for SAVR vs TAVR evaluation. Will get STS score calculated. Avoiding vasodilators and keeping him well-hydrated in the meantime.'
    },
    defined_responses: {
        'severe as criteria': 'Severe AS: aortic valve area <1.0 cm² (his is 0.7), mean gradient >40 mmHg (his is 48), peak jet velocity >4.0 m/s. His numbers clearly meet criteria. Critical AS is sometimes defined as AVA <0.6 cm². Low-flow low-gradient AS (EF <50% with mean gradient <40) requires dobutamine stress echo to differentiate true severe from pseudo-severe.',
        'timing': 'Asymptomatic severe AS: watch and wait with surveillance echo every 6-12 months. Symptomatic severe AS: intervene — the clock has started. After symptom onset, average survival without intervention: angina = 5 years, syncope = 3 years, heart failure = 2 years. This is one of the most dramatic survival curves in cardiology. He needs valve replacement, not medical management.',
        'savr vs tavr': 'Decision by heart valve team using STS risk score: STS <4% (low risk) → SAVR traditionally preferred, though TAVR data is expanding. STS 4-8% → either, shared decision-making. STS >8% or prohibitive → TAVR. At age 78, TAVR is increasingly preferred — less invasive, faster recovery. Also consider: bicuspid valve (SAVR better), concomitant CABG needed (SAVR), prior chest radiation (TAVR), frailty (TAVR).',
        'medical therapy': 'There is no medical therapy that treats the stenosis itself. Avoid vasodilators (ACEi, nitrates) — these reduce afterload in a fixed-obstruction state, causing dangerous hypotension without the ability to increase cardiac output. Maintain preload (adequate hydration). Beta-blockers cautiously if needed for rate control. Statins do NOT slow progression. The only definitive treatment is valve replacement.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Valvular Disease Module', link: '../mechanism/valvular-disease-module.html', reason: 'Hemodynamics of stenotic and regurgitant valves' },
        { type: 'reasondx', title: 'Valvular Disease Adventure', link: '../ReasonDx/adventure-cases/valvular-disease-expanded-adventure.html', reason: 'Practice valve disease assessment' }
    ],
    evidenceBase: {
        guidelines: ['AHA/ACC Valvular Heart Disease Guidelines 2020'],
        openAccess: ['StatPearls: Aortic Stenosis (NBK557628)']
    }
},

// ============================================================================
// CASE: EKG Interpretation
// ============================================================================
'ekg-critical-findings': {
    id: 'ekg-critical-findings',
    title: 'EKG - Recognizing Critical Findings',
    category: 'Cardiology',
    patient: {
        name: 'Yolanda Barnes',
        age: 58,
        sex: 'Female',
        setting: 'Emergency',
        acuity: 'High',
        chiefComplaint: 'Chest Pain and Dizziness'
    },
    description: 'A 58-year-old woman presents with 2 hours of chest pressure and dizziness. HR 44, BP 92/60, SpO2 98%. ECG shows: regular P waves at rate 80, QRS complexes at rate 44, no consistent relationship between P waves and QRS complexes. QRS is narrow.',
    openingStatement: 'Read me this ECG. There are P waves doing one thing and QRS complexes doing another. What is the rhythm, why is she hemodynamically compromised, and what do you do in the next 5 minutes?',
    conceptDomains: {
        'Situation': ['av_dissociation', 'bradycardia_with_hypotension', 'narrow_qrs'],
        'Background': ['medication_review_nodal_agents', 'prior_cardiac_history', 'lyme_or_endocarditis'],
        'Assessment': ['complete_heart_block', 'escape_rhythm_type', 'hemodynamic_stability'],
        'Recommendation': ['atropine_vs_pacing', 'transcutaneous_pacing', 'cardiology_consult']
    },
    quickActions: [
        'What is the rhythm?',
        'Why is she hypotensive?',
        'What do I do first?',
        'Does she need a pacemaker?'
    ],
    keyTeachingPoints: [
        'AV dissociation with regular P-P and R-R intervals at different rates = third-degree (complete) heart block',
        'Narrow QRS escape = junctional escape (40-60 bpm, more stable). Wide QRS escape = ventricular (20-40 bpm, less reliable)',
        'Symptomatic bradycardia: atropine 0.5mg IV first, but it often fails in complete heart block',
        'Transcutaneous pacing is the bridge to transvenous pacing — have pads on while calling cardiology',
        'Reversible causes: hyperkalemia, medication (beta-blocker, CCB, digoxin), inferior MI, Lyme disease'
    ],
    sbarTemplate: {
        situation: 'I have a 58-year-old woman with complete heart block. Ventricular rate 44, hypotensive at 92/60, symptomatic with chest pain and dizziness.',
        background: 'Need to determine reversible causes. Checking medication list, potassium, and considering ischemia as etiology.',
        assessment: 'Third-degree AV block with junctional escape rhythm. She is hemodynamically unstable from the bradycardia.',
        recommendation: 'Gave atropine 0.5mg IV. Transcutaneous pacing pads are on and ready. Calling cardiology for emergent transvenous pacemaker. Sending BMP, troponin, and medication reconciliation.'
    },
    defined_responses: {
        'rhythm': 'Third-degree (complete) AV block. The hallmark: P waves march at their own rate (80 bpm) and QRS complexes march at a different rate (44 bpm) with NO relationship between them. This means the atrial and ventricular rhythms are completely independent — the AV node is not conducting any impulses. The narrow QRS tells you a junctional escape pacemaker has taken over.',
        'hypotension': 'She is hypotensive because the heart rate is too slow (44 bpm) and she has lost AV synchrony — the atria and ventricles are not coordinating. Normally the atrial kick contributes 15-25% of cardiac output. In complete heart block, the atria contract against closed AV valves some of the time, reducing preload. Combined with bradycardia: CO = HR × SV, and both are reduced.',
        'first steps': 'ACLS bradycardia algorithm: (1) Atropine 0.5mg IV — may work for junctional escape but often fails in complete block because the block is below the AV node. (2) Transcutaneous pacing — put pads on NOW, set rate 60-80, increase current until capture. (3) If pacer fails or as bridge: dopamine 5-20 mcg/kg/min or epinephrine 2-10 mcg/min infusion. (4) Call cardiology for transvenous pacemaker placement.',
        'pacemaker': 'Yes, she almost certainly needs a permanent pacemaker (PPM). Complete heart block is a Class I indication for PPM unless the cause is completely reversible (like drug toxicity that resolves). Reversible causes to check: hyperkalemia, drug effect (beta-blockers, CCBs, digoxin, amiodarone), inferior MI (AV block often transient), Lyme disease (may resolve with antibiotics). Even if reversible, she needs transvenous pacing as a bridge.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'EKG Module', link: '../mechanism/ekg-module.html', reason: 'Cardiac conduction system and rhythm interpretation' },
        { type: 'reasondx', title: 'EKG Adventure', link: '../ReasonDx/adventure-cases/ekg-expanded-adventure.html', reason: 'Practice ECG interpretation' }
    ],
    evidenceBase: {
        guidelines: ['AHA/ACC Bradycardia & Conduction Delay Guidelines 2018'],
        openAccess: ['StatPearls: Third-Degree Heart Block (NBK545199)']
    }
},

// ============================================================================
// CASE: ACLS Rhythms
// ============================================================================
'vfib-arrest-management': {
    id: 'vfib-arrest-management',
    title: 'Ventricular Fibrillation Cardiac Arrest',
    category: 'Cardiology',
    patient: {
        name: 'James Whitfield',
        age: 52,
        sex: 'Male',
        setting: 'Emergency',
        acuity: 'Critical',
        chiefComplaint: 'Witnessed Cardiac Arrest'
    },
    description: 'A 52-year-old man collapses in the ED waiting room. Bystander CPR initiated immediately. Monitor shows coarse ventricular fibrillation. No known medical history. Last seen well 2 minutes ago.',
    openingStatement: 'You are running this code. The monitor shows VFib. Walk me through your first three cycles of ACLS — what you shock with, when you give medications, and what reversible causes you consider while running the code.',
    conceptDomains: {
        'Situation': ['witnessed_arrest', 'shockable_rhythm', 'downtime'],
        'Background': ['unknown_history', 'reversible_causes'],
        'Assessment': ['vfib_vs_vtach', 'rosc_indicators', 'rhythm_changes'],
        'Recommendation': ['defibrillation_protocol', 'epinephrine_timing', 'amiodarone_timing']
    },
    quickActions: [
        'Walk me through the first shock',
        'When do I give epinephrine?',
        'When do I give amiodarone?',
        'What are the H\'s and T\'s?'
    ],
    keyTeachingPoints: [
        'VFib/pVT: shock first, then CPR 2 min, rhythm check. Shock-CPR-check every 2 minutes.',
        'Epinephrine 1mg IV every 3-5 min — give after 2nd shock for VFib/pVT',
        'Amiodarone 300mg IV after 3rd shock, then 150mg once more if needed',
        'Hs and Ts: Hypovolemia, Hypoxia, Hydrogen ion, Hypo/hyperkalemia, Hypothermia, Tension pneumothorax, Tamponade, Toxins, Thrombosis (coronary and pulmonary)',
        'High-quality CPR: rate 100-120, depth 2-2.4 inches, full recoil, minimize interruptions (<10 sec for rhythm checks)'
    ],
    sbarTemplate: {
        situation: 'I am running a code on a 52-year-old man in VFib cardiac arrest. Witnessed collapse 2 minutes ago, bystander CPR was immediate.',
        background: 'No known medical history. Short downtime with good bystander CPR.',
        assessment: 'Shockable rhythm. Given immediate defibrillation, now in CPR. Considering reversible causes.',
        recommendation: 'Following ACLS VFib protocol. Will give epinephrine after second shock, amiodarone after third if needed. Running Hs and Ts differential. If ROSC, targeting TTM and emergent cath.'
    },
    defined_responses: {
        'first shock': 'Confirm VFib on monitor. Charge defibrillator to 200J biphasic (or 360J monophasic). Clear the patient — "I am clear, you are clear, everyone is clear." Deliver shock. Immediately resume CPR for 2 minutes — do NOT stop to check rhythm. After 2 minutes of CPR, pause briefly (<10 seconds) to check rhythm. If still VFib: shock again at same or higher energy.',
        'epinephrine': 'For shockable rhythms (VFib/pVT): give epinephrine 1mg IV/IO after the SECOND shock, during the CPR cycle. Then every 3-5 minutes. For non-shockable rhythms (PEA/asystole): give epinephrine as soon as IV/IO access is established. The timing difference matters because defibrillation is the primary intervention for VFib, not medications.',
        'amiodarone': 'After the THIRD shock if still in VFib/pVT: amiodarone 300mg IV/IO push. If VFib persists after another cycle: amiodarone 150mg IV/IO. Lidocaine (1-1.5 mg/kg) is an alternative if amiodarone unavailable. Total amiodarone dose in arrest: 450mg max.',
        'hs and ts': 'The reversible causes: Hs — Hypovolemia (give fluids), Hypoxia (secure airway), Hydrogen ion acidosis (consider bicarb), Hypo/hyperkalemia (check BMP or empirically give calcium), Hypothermia (rewarm). Ts — Tension pneumothorax (needle decompress), Tamponade (pericardiocentesis), Toxins (specific antidotes), Thrombosis coronary (cath lab), Thrombosis pulmonary (tPA). In a 52-year-old with VFib, MI is the most likely cause.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'ACLS Rhythms Module', link: '../mechanism/acls-rhythms-module.html', reason: 'Cardiac arrest algorithms and rhythm recognition' }
    ],
    evidenceBase: {
        guidelines: ['AHA ACLS Guidelines 2020'],
        openAccess: ['StatPearls: Ventricular Fibrillation (NBK537120)']
    }
},

// ============================================================================
// CASE: Cardiac Tamponade
// ============================================================================
'tamponade-recognition': {
    id: 'tamponade-recognition',
    title: 'Cardiac Tamponade - Recognition & Management',
    category: 'Cardiology',
    patient: {
        name: 'Linda Esperanza',
        age: 45,
        sex: 'Female',
        setting: 'Emergency',
        acuity: 'Critical',
        chiefComplaint: 'Dyspnea and Hypotension'
    },
    description: 'A 45-year-old woman with metastatic breast cancer presents with progressive dyspnea over 3 days. BP 86/68, HR 118, SpO2 94%. JVP markedly elevated. Heart sounds distant. Pulsus paradoxus measured at 18 mmHg. Bedside echo shows large pericardial effusion with right atrial collapse in diastole.',
    openingStatement: 'Mrs. Esperanza has Beck\'s triad and pulsus paradoxus. The bedside echo confirms tamponade physiology. This is a clinical diagnosis — you do not need the echo to make it. Walk me through the pathophysiology of why her blood pressure drops and what you need to do right now.',
    conceptDomains: {
        'Situation': ['becks_triad', 'pulsus_paradoxus', 'echo_findings'],
        'Background': ['malignancy_and_effusion', 'rate_of_accumulation'],
        'Assessment': ['tamponade_physiology', 'chamber_compromise', 'hemodynamic_collapse'],
        'Recommendation': ['pericardiocentesis', 'volume_resuscitation', 'avoid_diuretics']
    },
    quickActions: [
        'What is Beck\'s triad?',
        'Why does pulsus paradoxus occur?',
        'How do I perform pericardiocentesis?',
        'What should I NOT do?'
    ],
    keyTeachingPoints: [
        'Beck\'s triad: hypotension, distended neck veins (elevated JVP), muffled heart sounds',
        'Pulsus paradoxus >10 mmHg: SBP drops >10 with inspiration due to ventricular interdependence',
        'Rate of fluid accumulation matters more than volume — rapid 150mL can tamponade; slow 1L may not',
        'Treatment: pericardiocentesis (subxiphoid approach, echo-guided). Volume resuscitation as bridge.',
        'DO NOT give diuretics — they reduce preload and worsen hemodynamics. DO NOT intubate if possible — positive pressure ventilation reduces venous return.'
    ],
    sbarTemplate: {
        situation: 'I have a 45-year-old woman with cardiac tamponade. Hypotensive at 86/68, tachycardic, pulsus paradoxus 18 mmHg, echo shows large effusion with RA collapse.',
        background: 'Metastatic breast cancer — malignant pericardial effusion is the likely etiology.',
        assessment: 'Hemodynamically significant tamponade with obstructive shock physiology. She needs emergent pericardiocentesis.',
        recommendation: 'Giving 500mL NS bolus as bridge. Preparing for bedside echo-guided pericardiocentesis. Cardiology and interventional radiology both notified. Avoiding sedation and positive-pressure ventilation.'
    },
    defined_responses: {
        'becks triad': 'Beck\'s triad: (1) Hypotension — the compressed heart cannot fill adequately, reducing stroke volume. (2) Elevated JVP — blood backs up because it cannot enter the compressed right atrium. (3) Muffled heart sounds — fluid around the heart dampens sound transmission. In reality, all three are present in only about 10-40% of tamponade cases. Pulsus paradoxus is often more reliable.',
        'pulsus paradoxus': 'Normally, SBP drops <10 mmHg with inspiration. In tamponade, the pericardium is a fixed, non-compliant space filled with fluid. When you inspire, the right ventricle fills more (increased venous return), but because the pericardium cannot expand, the RV bows into the LV (ventricular interdependence), reducing LV filling and stroke volume. This causes SBP to drop >10 mmHg — pulsus paradoxus.',
        'pericardiocentesis': 'Echo-guided subxiphoid approach: patient at 30-45 degrees. Insert needle at left xiphocostal angle, aim toward left shoulder, advance under echo guidance. Aspirate as you go. Even removing 50mL can dramatically improve hemodynamics because the pressure-volume relationship in tamponade is steep — a small volume reduction causes a large pressure drop. Leave a catheter for continued drainage.',
        'avoid': 'Three things that kill in tamponade: (1) Diuretics — reduce preload in a patient who is already preload-dependent. (2) Intubation with positive pressure ventilation — reduces venous return, can cause PEA arrest. If must intubate: preoxygenate, use ketamine for induction (maintains SVR), and prepare for immediate pericardiocentesis. (3) Waiting — this is an emergency. Do not wait for CT or formal echo if clinical picture is clear.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Cardiac Tamponade Module', link: '../mechanism/cardiac-tamponade-module.html', reason: 'Pericardial pressure-volume dynamics' },
        { type: 'reasondx', title: 'Tamponade Adventure', link: '../ReasonDx/adventure-cases/cardiac-tamponade-adventure.html', reason: 'Practice tamponade recognition and intervention' }
    ],
    evidenceBase: {
        guidelines: ['ESC Pericardial Diseases Guidelines 2015'],
        openAccess: ['StatPearls: Cardiac Tamponade (NBK431090)']
    }
},

// ============================================================================
// CASE: Infective Endocarditis
// ============================================================================
'endocarditis-diagnosis': {
    id: 'endocarditis-diagnosis',
    title: 'Infective Endocarditis - Duke Criteria',
    category: 'Cardiology',
    patient: {
        name: 'Derek Wallace',
        age: 34,
        sex: 'Male',
        setting: 'Inpatient Medicine',
        acuity: 'Moderate',
        chiefComplaint: 'Persistent Fever and New Murmur'
    },
    description: 'A 34-year-old man with a history of IV drug use presents with 2 weeks of fevers, malaise, and night sweats. T 39.1°C, HR 102, BP 118/58. New holosystolic murmur at left lower sternal border, louder with inspiration. Splinter hemorrhages noted. Two blood cultures drawn 12 hours apart grow MSSA.',
    openingStatement: 'Mr. Wallace has fevers, a new tricuspid regurgitation murmur that increases with inspiration, and Staph aureus in his blood. Apply the modified Duke criteria and tell me: does he have definite, possible, or rejected endocarditis? Then walk me through why right-sided versus left-sided endocarditis matters.',
    conceptDomains: {
        'Situation': ['persistent_bacteremia', 'new_murmur', 'embolic_phenomena'],
        'Background': ['iv_drug_use', 'right_vs_left_sided', 'staph_aureus_bacteremia'],
        'Assessment': ['duke_criteria', 'complications', 'abscess_risk'],
        'Recommendation': ['empiric_antibiotics', 'echo_tte_vs_tee', 'surgical_indications']
    },
    quickActions: [
        'What are the Duke criteria?',
        'Right-sided vs left-sided — why does it matter?',
        'TTE or TEE first?',
        'When does he need surgery?'
    ],
    keyTeachingPoints: [
        'Modified Duke criteria: 2 major, or 1 major + 3 minor, or 5 minor = definite IE',
        'Major: (1) ≥2 positive blood cultures with typical organism, (2) echo showing vegetation/abscess/new dehiscence',
        'IVDU predisposes to right-sided (tricuspid) endocarditis — Staph aureus is the most common organism',
        'Right-sided: septic pulmonary emboli (pulmonary infiltrates), generally better prognosis than left-sided',
        'All S. aureus bacteremia needs echo and 4-6 weeks of IV antibiotics — NEVER treat as simple bacteremia'
    ],
    sbarTemplate: {
        situation: 'I have a 34-year-old IV drug user with S. aureus bacteremia and a new tricuspid murmur. He meets Duke criteria for definite endocarditis.',
        background: 'Two sets of blood cultures positive for MSSA. Splinter hemorrhages present. No known valvular disease.',
        assessment: 'Definite right-sided infective endocarditis. Two major Duke criteria met: typical organism in 2+ cultures, and clinically new regurgitant murmur.',
        recommendation: 'Starting IV nafcillin. Will get TTE to confirm vegetations and assess size. Planning for 4-6 weeks of IV antibiotics. Monitoring for septic pulmonary emboli with CT chest.'
    },
    defined_responses: {
        'duke criteria': 'Modified Duke criteria — Major: (1) Blood cultures with typical organism (S. aureus, viridans strep, enterococcus, HACEK) in ≥2 cultures OR persistently positive cultures 12h apart, (2) Echo with vegetation, abscess, or new valve dehiscence. Minor: (1) predisposing condition (IVDU, abnormal valve), (2) fever ≥38°C, (3) vascular phenomena (Janeway lesions, mycotic aneurysm, septic emboli), (4) immunologic phenomena (Osler nodes, Roth spots, glomerulonephritis), (5) positive cultures not meeting major criteria. He has 2 major criteria (cultures + murmur) and at least 2 minor (IVDU, fever, splinter hemorrhages) = definite IE.',
        'right vs left': 'Right-sided (tricuspid): IVDU is the classic cause. Septic emboli go to lungs → multiple pulmonary nodules, infiltrates, cavitary lesions. Generally better prognosis — can often be treated with 4 weeks (vs 6) of antibiotics. Surgery less often needed. Left-sided (mitral/aortic): emboli go to brain (stroke), spleen (infarct), kidneys, extremities. Higher mortality, more surgical complications. Murmur location gives it away: tricuspid at LLSB louder with inspiration (his case), mitral at apex, aortic at RUSB.',
        'tte vs tee': 'Start with TTE — it is non-invasive and adequate for detecting large vegetations, especially right-sided. Sensitivity of TTE for right-sided vegetations is good (~70%). If TTE is negative but clinical suspicion is high, get TEE (sensitivity >90%). TEE is also preferred for: prosthetic valves, suspected abscess, left-sided lesions, poor TTE windows. In practice: for IVDU with suspected right-sided IE, TTE is often sufficient.',
        'surgery': 'Surgical indications in IE: (1) Heart failure from severe valvular regurgitation, (2) Uncontrolled infection despite appropriate antibiotics for 5-7 days, (3) Large vegetation (>10mm on left side with embolic risk), (4) Perivalvular abscess, (5) Fungal endocarditis, (6) Prosthetic valve with dehiscence. Right-sided IE rarely needs surgery unless massive vegetations causing persistent septic emboli despite antibiotics. For left-sided: ~50% eventually need surgery.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Infective Endocarditis Module', link: '../mechanism/infective-endocarditis-module.html', reason: 'Pathophysiology of vegetation formation and embolic phenomena' },
        { type: 'reasondx', title: 'Endocarditis Adventure', link: '../ReasonDx/adventure-cases/infective-endocarditis-adventure.html', reason: 'Practice Duke criteria application' }
    ],
    evidenceBase: {
        guidelines: ['AHA IE Guidelines 2015', 'ESC Endocarditis Guidelines 2023'],
        openAccess: ['StatPearls: Infective Endocarditis (NBK557641)']
    }
},

// ============================================================================
// CASE: Hypertensive Emergency
// ============================================================================
'htn-emergency-vs-urgency': {
    id: 'htn-emergency-vs-urgency',
    title: 'Hypertensive Emergency vs Urgency',
    category: 'Cardiology',
    patient: {
        name: 'Rosa Delgado',
        age: 48,
        sex: 'Female',
        setting: 'Emergency',
        acuity: 'High',
        chiefComplaint: 'Severe Headache and Blurry Vision'
    },
    description: 'A 48-year-old woman with a history of noncompliance with HTN medications presents with severe headache and blurry vision for 6 hours. BP 228/134, HR 92, SpO2 99%. Fundoscopy shows papilledema and flame hemorrhages. Creatinine 2.1 (baseline 0.9). Urinalysis shows 2+ protein.',
    openingStatement: 'Her blood pressure is 228/134 — but high numbers alone do not make an emergency. What makes this an emergency rather than urgency? She has two organ systems screaming at you. Which ones, and how does that change your management from just giving an oral antihypertensive and sending her home?',
    conceptDomains: {
        'Situation': ['target_organ_damage', 'papilledema', 'renal_injury'],
        'Background': ['medication_noncompliance', 'secondary_htn_screening', 'previous_bp_control'],
        'Assessment': ['emergency_vs_urgency', 'end_organ_damage_assessment', 'malignant_htn'],
        'Recommendation': ['iv_antihypertensive_selection', 'bp_reduction_targets', 'monitoring']
    },
    quickActions: [
        'Emergency vs urgency — what\'s the difference?',
        'How fast should I lower the BP?',
        'Which IV medication do I use?',
        'What end organs do I need to check?'
    ],
    keyTeachingPoints: [
        'Emergency = elevated BP + acute end-organ damage. Urgency = elevated BP without end-organ damage',
        'Her end-organ damage: eyes (papilledema, hemorrhages = malignant HTN) + kidneys (acute creatinine rise, proteinuria)',
        'BP reduction target: lower MAP by ≤25% in first hour, then toward 160/100 over next 2-6 hours',
        'IV medications: nicardipine, clevidipine, labetalol, nitroprusside (for specific scenarios)',
        'NEVER drop BP too fast — risks watershed stroke, coronary ischemia, renal hypoperfusion'
    ],
    sbarTemplate: {
        situation: 'I have a 48-year-old woman with a hypertensive emergency. BP 228/134 with papilledema, flame hemorrhages, and acute kidney injury.',
        background: 'History of noncompliant HTN. Baseline creatinine was 0.9, now 2.1.',
        assessment: 'Hypertensive emergency with two-organ involvement: malignant hypertensive retinopathy and acute hypertensive nephropathy.',
        recommendation: 'Starting IV nicardipine drip. Target: reduce MAP by 25% in the first hour. Will recheck creatinine, UA, fundoscopy serially. Once stabilized, will restart oral regimen and address compliance.'
    },
    defined_responses: {
        'emergency vs urgency': 'Hypertensive emergency: elevated BP (usually >180/120 but no threshold defines it) PLUS acute end-organ damage. Examples: encephalopathy, retinal hemorrhages/papilledema, AKI, aortic dissection, acute HF/pulmonary edema, eclampsia. Hypertensive urgency: severely elevated BP WITHOUT end-organ damage. Urgency can be treated with oral medications and close follow-up. Emergency requires ICU admission and IV antihypertensives.',
        'bp reduction speed': 'The autoregulatory curve shifts right in chronic HTN — if you drop BP to "normal" quickly, the brain and kidneys cannot autoregulate and you cause ischemia. Target: reduce MAP by no more than 25% in the first hour. Over the next 2-6 hours, target ~160/100. Over the next 24-48 hours, gradually normalize. Exception: aortic dissection — needs SBP <120 within minutes.',
        'iv medication': 'Nicardipine: first-line for most hypertensive emergencies. Titratable, predictable, no rebound. Clevidipine: ultra-short-acting, good for precise control. Labetalol: good if concurrent tachycardia; avoid in acute HF, asthma, or cocaine. Nitroprusside: powerful but risk of cyanide toxicity with prolonged use. Fenoldopam: good for renal protection. Hydralazine: avoid — unpredictable response, long duration, hard to titrate.',
        'end organ check': 'Systematic end-organ assessment: (1) Brain: mental status, headache, focal deficits → CT head if concern for hemorrhage/encephalopathy. (2) Eyes: fundoscopy — hemorrhages, exudates, papilledema. (3) Heart: troponin, ECG, BNP → ACS, pulmonary edema. (4) Kidneys: creatinine, UA → AKI, proteinuria, hematuria. (5) Vascular: chest/back pain, pulse differentials → dissection. (6) Pregnancy: consider eclampsia in reproductive-age women.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Hypertensive Emergency Module', link: '../mechanism/hypertensive-emergency-module.html', reason: 'Autoregulatory failure and end-organ damage mechanisms' }
    ],
    evidenceBase: {
        guidelines: ['AHA/ACC Hypertension Guidelines 2017', 'ESC Hypertension Guidelines 2018'],
        openAccess: ['StatPearls: Hypertensive Emergency (NBK470371)']
    }
}

};

// Export for platform integration
if (typeof module !== 'undefined') module.exports = COACHDX_CARDIOLOGY_EXPANDED;
