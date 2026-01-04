// NEW COACHDX CASES - Gap Fill
// Add these to the CASES object in mentor-chat.html

// ==================== DKA / HHS PARALLEL PAIR ====================
'dka': {
    id: 'dka', 
    title: 'DKA - Diabetic Ketoacidosis', 
    category: 'Endocrine',
    isParallel: false, 
    parallelCase: 'hhs',
    parallelDescription: 'Hyperosmolar Hyperglycemic State',
    patient: { 
        name: 'Marcus Thompson', 
        age: 22, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Nausea, Vomiting, Abdominal Pain' 
    },
    description: 'A 22-year-old with Type 1 DM presents with 2 days of nausea, vomiting, and abdominal pain. He ran out of insulin 3 days ago. Lethargic, Kussmaul breathing, fruity breath. Glucose 485, pH 7.12, bicarb 8, anion gap 28.',
    openingStatement: 'Marcus is a young T1DM who ran out of insulin. He\'s in DKA - acidotic with Kussmaul breathing. Walk me through your approach to managing DKA.',
    conceptDomains: {
        'History': ['insulin_compliance', 'precipitant', 'symptoms_duration', 'intake'],
        'Physical Exam': ['mental_status', 'breathing_pattern', 'hydration', 'abdominal_exam'],
        'Pathophysiology': ['ketogenesis', 'anion_gap', 'osmotic_diuresis', 'potassium_shifts'],
        'Workup': ['abg_vbg', 'bmp', 'anion_gap_calculation', 'ketones', 'infection_workup'],
        'Management': ['fluids', 'insulin_drip', 'potassium_replacement', 'gap_closure', 'transition_to_subq']
    },
    quickActions: [
        'Calculate anion gap', 
        'Start IV fluids - what kind?', 
        'When do I start insulin?', 
        'Check potassium first!',
        'What\'s the precipitant?'
    ],
    keyTeachingPoints: [
        'Never start insulin until K+ is known and >3.3 mEq/L',
        'Fluid resuscitation is priority #1 - typically 1-2L NS in first hour',
        'Anion gap closure (not glucose) determines when to stop insulin drip',
        'Look for precipitants: Infection, Infarction, Insulin missed, Intoxication',
        'Cerebral edema risk in young patients with rapid correction'
    ],
    relatedContent: [
        { type: 'parallel', title: 'HHS Comparison', link: 'mentor-chat.html?case=hhs', reason: 'Compare DKA vs HHS pathophysiology' },
        { type: 'mechanism', title: 'Ketogenesis Pathway', link: '/mechanism/endocrine.html', reason: 'Understand metabolic derangement' },
        { type: 'reasondx', title: 'DKA Case', link: '/index.html?case=dka', reason: 'Practice the full workup' }
    ],
    defined_responses: {
        'anion gap': 'Great question! Let\'s calculate it together. AG = Na - (Cl + HCO3) = 140 - (104 + 8) = 28. That\'s significantly elevated (normal 8-12). In DKA, the gap is from ketoacids - beta-hydroxybutyrate and acetoacetate. What does this tell us about severity?',
        'fluids': 'Fluid resuscitation is critical! These patients are typically 5-10L down from osmotic diuresis. Start with isotonic saline - usually 1-2L in the first hour. Why NS first? We want to restore intravascular volume. When would you consider switching to half-normal saline?',
        'insulin': 'Here\'s a critical teaching point: NEVER start insulin until you know the potassium level. Why? Insulin drives K+ into cells. If K+ is already low, insulin can cause fatal hypokalemia with arrhythmias. Our patient\'s K+ is 5.8 - that seems high, right? But what will happen to it as we treat?',
        'potassium': 'Excellent focus on potassium! The serum K+ of 5.8 looks high, but total body K+ is actually depleted from osmotic diuresis. As we correct acidosis and give insulin, K+ will drop rapidly. We need to replace K+ when it falls below 5.0-5.3. This is why we monitor it every 2-4 hours.',
        'precipitant': 'Always look for the 5 I\'s: Infection (most common - UTI, pneumonia), Infarction (MI, stroke), Insulin missed/insufficient, Intoxication (drugs, alcohol), and Iatrogenic (steroids, thiazides). What workup would you want to identify a precipitant?'
    }
},

'hhs': {
    id: 'hhs', 
    title: 'HHS - Hyperosmolar Hyperglycemic State', 
    category: 'Endocrine',
    isParallel: true, 
    parallelCase: 'dka',
    parallelDescription: 'Diabetic Ketoacidosis',
    patient: { 
        name: 'Dorothy Williams', 
        age: 72, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Confusion and Weakness' 
    },
    description: 'A 72-year-old with Type 2 DM brought from nursing home for confusion and weakness over 3 days. Decreased oral intake. Obtunded, severely dehydrated. Glucose 892, Na 152, serum osm 348, pH 7.32, bicarb 22, minimal ketones.',
    openingStatement: 'Mrs. Williams is critically ill with profound hyperglycemia but minimal acidosis. This is HHS, not DKA. How does your management approach differ from DKA?',
    conceptDomains: {
        'History': ['mental_status_baseline', 'oral_intake', 'infection_symptoms', 'medications'],
        'Physical Exam': ['neuro_exam', 'hydration_status', 'focal_deficits'],
        'Pathophysiology': ['hyperosmolarity', 'insulin_vs_glucagon', 'why_no_ketosis'],
        'Workup': ['osmolarity_calculation', 'corrected_sodium', 'infection_source'],
        'Management': ['aggressive_fluids', 'slower_insulin', 'monitoring', 'thromboprophylaxis']
    },
    quickActions: [
        'Calculate serum osmolarity', 
        'What\'s the corrected sodium?', 
        'How much fluid deficit?', 
        'Why no ketoacidosis?',
        'DVT prophylaxis?'
    ],
    keyTeachingPoints: [
        'HHS has MORE severe dehydration than DKA (typically 8-12L deficit)',
        'Mortality is higher in HHS (10-20%) vs DKA (1-5%)',
        'Minimal ketosis because some endogenous insulin suppresses lipolysis',
        'Slower glucose correction to prevent cerebral edema',
        'High thrombosis risk - need prophylaxis'
    ],
    relatedContent: [
        { type: 'parallel', title: 'DKA Comparison', link: 'mentor-chat.html?case=dka', reason: 'Compare DKA vs HHS' },
        { type: 'mechanism', title: 'Osmolarity Effects', link: '/mechanism/endocrine.html', reason: 'Understand neurologic manifestations' }
    ],
    defined_responses: {
        'osmolarity': 'Let\'s calculate: Serum osm = 2(Na) + Glucose/18 + BUN/2.8 = 2(152) + 892/18 + 45/2.8 = 304 + 50 + 16 = 370 mOsm/kg. Anything >320 is concerning for HHS. How does this explain her mental status?',
        'corrected sodium': 'Important calculation! For every 100 mg/dL glucose above 100, add 1.6-2.4 to sodium. Her glucose is 792 above normal: 792/100 × 2 = about 16. Corrected Na = 152 + 16 = 168! She\'s profoundly hypernatremic. What does this mean for fluid choice?',
        'fluid deficit': 'HHS patients are typically 8-12 LITERS down - more than DKA! She weighs 60kg, and with severe dehydration, that\'s about 10L deficit. We need aggressive resuscitation but balanced correction. What\'s the risk of correcting sodium too quickly?',
        'why no ketosis': 'Great pathophysiology question! In T2DM, patients have SOME residual insulin secretion - enough to suppress lipolysis and ketogenesis, but not enough to prevent hyperglycemia. Without lipolysis, no fatty acids reach the liver for ketone production. T1DM has absolute insulin deficiency, so nothing suppresses ketogenesis.',
        'dvt': 'Excellent thinking! HHS is a hypercoagulable state - hyperosmolarity, dehydration, and immobility increase DVT/PE risk significantly. All HHS patients should receive pharmacologic DVT prophylaxis unless contraindicated. What would you use?'
    }
},

// ==================== DVT / SUPERFICIAL THROMBOPHLEBITIS PARALLEL PAIR ====================
'dvt': {
    id: 'dvt', 
    title: 'Deep Vein Thrombosis', 
    category: 'Cardiovascular',
    isParallel: false, 
    parallelCase: 'superficial-thrombophlebitis',
    parallelDescription: 'Superficial Thrombophlebitis',
    patient: { 
        name: 'Linda Chen', 
        age: 45, 
        sex: 'Female', 
        setting: 'Urgent Care', 
        acuity: 'Medium', 
        chiefComplaint: 'Left Leg Swelling and Pain' 
    },
    description: 'A 45-year-old woman presents with 3 days of left leg swelling and calf pain. She had knee surgery 2 weeks ago and recently flew back from visiting family (4-hour flight). On OCPs. Left calf is 3cm larger than right, with pitting edema.',
    openingStatement: 'Ms. Chen has unilateral leg swelling after surgery and travel. She has multiple DVT risk factors. How do you approach suspected DVT?',
    conceptDomains: {
        'History': ['risk_factors', 'symptom_onset', 'prior_vte', 'medications', 'immobility'],
        'Physical Exam': ['calf_circumference', 'homans_sign', 'edema', 'skin_changes'],
        'Pathophysiology': ['virchow_triad', 'clot_propagation', 'pe_risk'],
        'Workup': ['wells_score', 'd_dimer', 'ultrasound'],
        'Management': ['anticoagulation_choice', 'duration', 'ivc_filter_indications', 'compression']
    },
    quickActions: [
        'Calculate Wells score', 
        'D-dimer indicated?', 
        'Order ultrasound', 
        'What anticoagulant?',
        'How long to treat?'
    ],
    keyTeachingPoints: [
        'Use Wells score to determine pre-test probability and guide testing',
        'D-dimer only useful in LOW probability patients (high sensitivity, low specificity)',
        'Proximal DVT (above knee) has higher PE risk than distal',
        'DOACs are first-line for most DVT; LMWH for cancer-associated',
        'Provoked DVT (surgery, immobility): 3 months; Unprovoked: consider extended'
    ],
    relatedContent: [
        { type: 'parallel', title: 'Superficial Thrombophlebitis', link: 'mentor-chat.html?case=superficial-thrombophlebitis', reason: 'Compare superficial vs deep' },
        { type: 'mechanism', title: 'VTE Pathophysiology', link: '/mechanism/vte-module.html', reason: 'Understand clot formation' },
        { type: 'reasondx', title: 'DVT Case', link: '/index.html?case=dvt', reason: 'Full workup practice' }
    ],
    defined_responses: {
        'wells score': 'Let\'s calculate her Wells score for DVT: Active cancer (0), Paralysis/immobilization (0), Bedridden >3 days or surgery within 12 weeks (+1), Localized tenderness (+1), Entire leg swelling (0), Calf swelling >3cm (+1), Pitting edema (+1), Collateral veins (0), Prior DVT (0), Alternative diagnosis less likely (+1). Total = 5 points. What probability category is this?',
        'd-dimer': 'With a Wells score of 5, she\'s HIGH probability. In high probability patients, D-dimer is NOT useful - even if negative, you still need imaging. D-dimer has high sensitivity but low specificity. It\'s only useful to RULE OUT DVT in LOW probability patients. What imaging do you want?',
        'ultrasound': 'Compression ultrasound is the test of choice. We look for: 1) Non-compressibility of the vein - the hallmark finding, 2) Absence of flow on Doppler, 3) Direct visualization of thrombus. Her ultrasound shows non-compressible left popliteal and femoral veins. This is proximal DVT. Why does location matter?',
        'anticoagulation': 'For most patients with DVT, DOACs are first-line: rivaroxaban, apixaban, edoxaban, or dabigatran. Advantages over warfarin: no bridging (for rivaroxaban/apixaban), no monitoring, fewer interactions. When would you choose LMWH or warfarin instead?',
        'duration': 'Great question! Duration depends on whether DVT was provoked: PROVOKED by major transient risk factor (surgery, trauma): 3 months. UNPROVOKED or minor risk factor (OCPs, travel): Consider extended anticoagulation - discuss bleeding vs recurrence risk. She has both surgery AND OCPs. How would you approach this?'
    }
},

'superficial-thrombophlebitis': {
    id: 'superficial-thrombophlebitis', 
    title: 'Superficial Thrombophlebitis', 
    category: 'Cardiovascular',
    isParallel: true, 
    parallelCase: 'dvt',
    parallelDescription: 'Deep Vein Thrombosis',
    patient: { 
        name: 'Barbara Martinez', 
        age: 58, 
        sex: 'Female', 
        setting: 'Outpatient Clinic', 
        acuity: 'Low', 
        chiefComplaint: 'Painful Cord in Leg' 
    },
    description: 'A 58-year-old woman with varicose veins presents with 4 days of pain and redness along a visible vein on her inner thigh. She feels a tender, firm cord. No leg swelling. No recent surgery or travel.',
    openingStatement: 'Mrs. Martinez has a tender, palpable cord along a superficial vein. This looks like superficial thrombophlebitis. How does your approach differ from DVT workup?',
    conceptDomains: {
        'History': ['varicose_veins', 'prior_svt', 'risk_factors', 'symptoms'],
        'Physical Exam': ['palpable_cord', 'erythema', 'no_leg_swelling', 'location'],
        'Pathophysiology': ['superficial_vs_deep', 'extension_risk'],
        'Workup': ['when_to_ultrasound', 'proximity_to_sfj'],
        'Management': ['nsaids', 'compression', 'when_anticoagulate']
    },
    quickActions: [
        'Does she need ultrasound?', 
        'How close to saphenofemoral junction?', 
        'NSAIDs appropriate?', 
        'When to anticoagulate?',
        'Follow-up plan?'
    ],
    keyTeachingPoints: [
        'Superficial thrombophlebitis is usually benign but can extend to deep system',
        'Ultrasound needed if: within 3cm of saphenofemoral junction, above knee, extensive (>5cm)',
        'Treatment usually NSAIDs + compression for symptom relief',
        'Anticoagulation if: close to SFJ, extending despite treatment, high DVT risk',
        'SVT can be marker for occult malignancy - consider if recurrent/migratory'
    ],
    relatedContent: [
        { type: 'parallel', title: 'DVT', link: 'mentor-chat.html?case=dvt', reason: 'Compare SVT vs DVT' }
    ],
    defined_responses: {
        'ultrasound': 'Good thinking! Not all SVT needs ultrasound, but we should image if: 1) Thrombus is above the knee (closer to SFJ), 2) Within 3cm of saphenofemoral junction (high DVT risk), 3) Extensive involvement (>5cm), 4) Not responding to treatment. Her thrombus is mid-thigh - we should check proximity to SFJ. What would change your management if it\'s close?',
        'sfj': 'The saphenofemoral junction is where the great saphenous vein joins the femoral vein. If SVT extends to within 3cm of SFJ, there\'s significant risk of extending into the deep system (essentially becoming DVT). This is when we consider anticoagulation rather than just NSAIDs. Her ultrasound shows thrombus ending 8cm from SFJ. Safe to treat conservatively?',
        'nsaids': 'For uncomplicated SVT away from the SFJ, NSAIDs are first-line for pain and inflammation. Ibuprofen or naproxen for 1-2 weeks. Topical NSAIDs can also help. Add compression stockings for comfort. What symptoms would make you worried about extension?',
        'anticoagulate': 'Anticoagulation for SVT is indicated when: 1) Within 3cm of SFJ (high extension risk), 2) Extensive (>5cm) SVT in great saphenous vein, 3) Progressive extension despite treatment, 4) Concomitant DVT found on imaging. Typically use prophylactic-dose LMWH or intermediate-dose fondaparinux for 4-6 weeks.',
        'malignancy': 'Important teaching point! Recurrent or migratory superficial thrombophlebitis (Trousseau syndrome) can be a paraneoplastic phenomenon. If she has: recurrent SVT without clear cause, unusual locations, or constitutional symptoms - consider occult malignancy workup. What cancers are associated?'
    }
},

// ==================== HYPONATREMIA PARALLEL PAIR ====================
'hyponatremia-siadh': {
    id: 'hyponatremia-siadh', 
    title: 'Hyponatremia - SIADH', 
    category: 'Renal/Electrolytes',
    isParallel: false, 
    parallelCase: 'hyponatremia-hypovolemic',
    parallelDescription: 'Hypovolemic Hyponatremia',
    patient: { 
        name: 'Robert Kim', 
        age: 68, 
        sex: 'Male', 
        setting: 'Inpatient', 
        acuity: 'Medium', 
        chiefComplaint: 'Confusion' 
    },
    description: 'A 68-year-old man admitted for pneumonia is found to have Na 118. He\'s confused but hemodynamically stable. Euvolemic on exam. He has small cell lung cancer diagnosed 2 months ago. Urine Na 45, urine osm 520, serum osm 248.',
    openingStatement: 'Mr. Kim has severe hyponatremia in the setting of SCLC and pneumonia - classic SIADH setup. How do you approach hyponatremia workup and management?',
    conceptDomains: {
        'History': ['symptom_severity', 'acuity', 'medications', 'underlying_disease'],
        'Physical Exam': ['volume_status', 'neuro_exam', 'edema'],
        'Pathophysiology': ['siadh_mechanism', 'adh_regulation', 'urine_concentration'],
        'Workup': ['serum_osm', 'urine_osm', 'urine_na', 'volume_assessment'],
        'Management': ['fluid_restriction', 'hypertonic_saline', 'correction_rate', 'osmotic_demyelination']
    },
    quickActions: [
        'Assess volume status', 
        'Check urine studies', 
        'How fast to correct?', 
        'Need hypertonic saline?',
        'What caused SIADH?'
    ],
    keyTeachingPoints: [
        'Volume status is KEY to hyponatremia differential: Hypovolemic, Euvolemic, Hypervolemic',
        'SIADH criteria: Euvolemic, Urine osm >100, Urine Na >40, Low serum osm, Normal renal/adrenal/thyroid',
        'Correction limit: 8-10 mEq/L in 24 hours to prevent osmotic demyelination syndrome',
        'Hypertonic saline only for severe symptoms (seizures, obtundation)',
        'Treat underlying cause when possible'
    ],
    relatedContent: [
        { type: 'parallel', title: 'Hypovolemic Hyponatremia', link: 'mentor-chat.html?case=hyponatremia-hypovolemic', reason: 'Compare euvolemic vs hypovolemic' },
        { type: 'mechanism', title: 'ADH Physiology', link: '/mechanism/renal.html', reason: 'Understand water handling' },
        { type: 'reasondx', title: 'Hyponatremia Case', link: '/index.html?case=hyponatremia', reason: 'Full diagnostic workup' }
    ],
    defined_responses: {
        'volume status': 'Critical first step! He appears euvolemic - no edema, no signs of dehydration, normal JVP, no orthostasis. This narrows our differential significantly. Euvolemic hyponatremia: SIADH, hypothyroidism, adrenal insufficiency, beer potomania. With his SCLC... what\'s your leading diagnosis?',
        'urine studies': 'Let\'s interpret: Urine Na 45 (>40 in SIADH), Urine osm 520 (>100 - inappropriately concentrated), Serum osm 248 (<275 - hypotonic). In SIADH, the kidney is concentrating urine when it should be diluting it. The ADH is "inappropriate" because serum is already dilute. Why does SCLC cause this?',
        'correction rate': 'THE most important management principle: Correct slowly to prevent osmotic demyelination syndrome (ODS). Target: 8-10 mEq/L in first 24 hours, no more than 18 in 48 hours. For chronic hyponatremia (>48h), even slower. His Na is 118, so target 126-128 in first 24 hours. How do you monitor?',
        'hypertonic saline': 'Hypertonic (3%) saline is reserved for SEVERE symptoms: seizures, coma, respiratory distress from cerebral edema. He\'s confused but not seizing. Start with fluid restriction (1-1.5L/day) for mild symptoms. If not improving or worsening, then consider hypertonic saline 50-100mL boluses. What formula calculates expected Na change?',
        'siadh cause': 'SCLC is a classic cause - tumor produces ectopic ADH. Other causes: CNS disorders (stroke, infection, trauma), Pulmonary disease (pneumonia - he has this too!), Medications (SSRIs, carbamazepine, NSAIDs), Pain, Nausea. His SCLC is the likely culprit. What are long-term treatment options if this persists?'
    }
},

'hyponatremia-hypovolemic': {
    id: 'hyponatremia-hypovolemic', 
    title: 'Hyponatremia - Hypovolemic', 
    category: 'Renal/Electrolytes',
    isParallel: true, 
    parallelCase: 'hyponatremia-siadh',
    parallelDescription: 'SIADH',
    patient: { 
        name: 'Maria Santos', 
        age: 78, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Medium', 
        chiefComplaint: 'Weakness and Dizziness' 
    },
    description: 'A 78-year-old woman on hydrochlorothiazide presents with 4 days of diarrhea, now weak and dizzy. Orthostatic (BP 142/78 lying → 98/62 standing). Dry mucous membranes, poor skin turgor. Na 126, urine Na 8, urine osm 650.',
    openingStatement: 'Mrs. Santos has hyponatremia with clear volume depletion from diarrhea, plus she\'s on a thiazide. How does hypovolemic hyponatremia differ in workup and management from SIADH?',
    conceptDomains: {
        'History': ['fluid_losses', 'diuretic_use', 'intake'],
        'Physical Exam': ['orthostatics', 'skin_turgor', 'mucous_membranes'],
        'Pathophysiology': ['appropriate_adh', 'renal_na_conservation', 'thiazide_mechanism'],
        'Workup': ['urine_na_interpretation', 'volume_markers'],
        'Management': ['volume_resuscitation', 'stop_thiazide', 'monitoring']
    },
    quickActions: [
        'Check orthostatics', 
        'What does low urine Na mean?', 
        'Normal saline appropriate?', 
        'Stop the thiazide?',
        'Monitor for overcorrection'
    ],
    keyTeachingPoints: [
        'Low urine Na (<20) in hyponatremia = hypovolemic (kidney conserving Na)',
        'Thiazides are notorious cause of hyponatremia - interfere with diluting segment',
        'Treatment: Volume repletion with isotonic saline',
        'Watch for rapid autocorrection as volume restored and ADH suppressed',
        'May need to give D5W or desmopressin if correcting too fast'
    ],
    relatedContent: [
        { type: 'parallel', title: 'SIADH', link: 'mentor-chat.html?case=hyponatremia-siadh', reason: 'Compare hypovolemic vs euvolemic' }
    ],
    defined_responses: {
        'urine na': 'Key distinguishing feature! Her urine Na is 8 - very low. In hypovolemic hyponatremia, the kidney is appropriately conserving sodium. Compare to SIADH where urine Na is >40. Low urine Na means the kidney is sensing low volume and holding onto everything it can. What does her high urine osm tell you?',
        'normal saline': 'Yes! Unlike SIADH where we fluid restrict, here we GIVE isotonic saline. She\'s volume depleted, so her ADH elevation is APPROPRIATE. Once we restore volume, ADH will suppress, and she\'ll dilute her urine and correct the sodium. But here\'s the danger - what happens if she autocorrects too quickly?',
        'thiazide': 'Absolutely stop the thiazide! Thiazides cause hyponatremia by: 1) Blocking the diluting segment (DCT), 2) Volume depletion, 3) Increasing ADH sensitivity. They\'re the most common drug cause of severe hyponatremia, especially in elderly women. What would you use instead for her BP?',
        'overcorrection': 'Critical point! Once you give volume, ADH turns off, and she may have massive water diuresis - correcting too fast. If she corrects >8-10 mEq/L in 24h, you need to RELOWER sodium with D5W or desmopressin (recreates SIADH temporarily). Monitor Na every 2-4 hours initially. This is called "rescue" therapy for overcorrection.'
    }
}
