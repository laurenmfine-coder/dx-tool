// ============================================================================
// COACHDX NURSING CASE LIBRARY
// Clinical Reasoning Cases for RN/BSN Students
// Created: January 2026
// ============================================================================
// 
// 15 Nursing-specific cases for clinical reasoning training
// Designed for: RN students, BSN students, nursing continuing education
// 
// To integrate: Merge with coachdx-cases-merged.js
// ============================================================================

const COACHDX_NURSING_CASES = {

// ============================================================================
// NURSING CASES (15 cases)
// ============================================================================

'nursing-deteriorating-patient': {
    id: 'nursing-deteriorating-patient',
    title: 'Deteriorating Patient - Early Recognition',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'Eleanor Mitchell',
        age: 72,
        sex: 'Female',
        setting: 'Medical-Surgical Floor',
        acuity: 'Medium → High',
        chiefComplaint: 'Post-op Day 2 Hip Replacement'
    },
    description: 'You\'re the night shift nurse caring for Mrs. Mitchell, POD2 from hip replacement. During 2 AM rounds, she seems "off" - more confused than earlier. Vital signs have changed subtly since your last check.',
    openingStatement: 'Mrs. Mitchell was oriented and pleasant at 10 PM. Now at 2 AM she\'s confused about where she is and keeps asking for her husband (who passed away years ago). Something feels wrong. What do you assess?',
    conceptDomains: {
        'Assessment': ['baseline_comparison', 'vital_sign_trends', 'mental_status_changes'],
        'Early Warning Signs': ['news_score', 'mews', 'subtle_changes'],
        'Differential': ['sepsis', 'pe', 'hypoxia', 'medication_effect', 'delirium'],
        'Interventions': ['oxygen', 'labs', 'notification'],
        'Communication': ['sbar', 'when_to_escalate', 'chain_of_command'],
        'Documentation': ['objective_findings', 'timeline']
    },
    quickActions: [
        'Full vital signs including SpO2',
        'Compare to baseline vitals',
        'Check blood glucose',
        'Review recent medications'
    ],
    keyTeachingPoints: [
        'Confusion in elderly is often first sign of serious illness - never assume "sundowning"',
        'Vital sign TRENDS matter more than single readings',
        'Early warning scores (NEWS, MEWS) help quantify deterioration',
        'SBAR communication: Situation, Background, Assessment, Recommendation',
        'Trust your gut - "the patient looks bad" is a valid concern'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Sepsis & Shock', link: '../mechanism/sepsis-shock-module.html', reason: 'Sepsis pathophysiology' }
    ]
},

'nursing-medication-error': {
    id: 'nursing-medication-error',
    title: 'High-Alert Medication Safety',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'James Chen',
        age: 58,
        sex: 'Male',
        setting: 'Cardiac Step-Down Unit',
        acuity: 'Medium',
        chiefComplaint: 'CHF Exacerbation'
    },
    description: 'You\'re preparing to give Mr. Chen\'s 8 AM medications. He\'s admitted for CHF exacerbation and has multiple cardiac medications. The MAR shows several high-alert medications.',
    openingStatement: 'Mr. Chen\'s MAR shows: metoprolol 50mg PO, lisinopril 20mg PO, potassium 40 mEq PO, digoxin 0.25mg PO, and furosemide 40mg IV. Before you administer these, walk me through your safety checks.',
    keyTeachingPoints: [
        'High-alert medications require extra verification',
        'Know your hold parameters: typically hold digoxin if HR <60',
        'Check relevant labs before giving: K+ before potassium/digoxin',
        'Question orders that don\'t make sense',
        'Document held medications AND why you held them'
    ]
},

'nursing-postop-hypotension': {
    id: 'nursing-postop-hypotension',
    title: 'Post-op Hypotension - Assessment First',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'Robert Williams',
        age: 64,
        sex: 'Male',
        setting: 'PACU → Surgical Floor',
        acuity: 'High',
        chiefComplaint: 'Post-op Colectomy Day 0'
    },
    description: 'Mr. Williams just arrived to your floor from PACU after open colectomy for colon cancer. He was stable in PACU but his first set of vitals on your floor shows BP 88/52.',
    openingStatement: 'Mr. Williams arrived from PACU 30 minutes ago. PACU reported him stable. You just got his vitals: BP 88/52, HR 112, RR 20. He says he feels "okay but tired." What do you do?',
    keyTeachingPoints: [
        'New post-op hypotension is bleeding until proven otherwise',
        'Don\'t attribute hypotension to "just anesthesia wearing off"',
        'Check drain output - more than 100mL/hr from JP is concerning',
        'Tachycardia often precedes hypotension in hemorrhage',
        'Notify surgeon early - they need to know about their patient'
    ]
},

'nursing-chest-pain-floor': {
    id: 'nursing-chest-pain-floor',
    title: 'Chest Pain on the Floor - Time Critical',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'Patricia Adams',
        age: 68,
        sex: 'Female',
        setting: 'Medical-Surgical Floor',
        acuity: 'Medium → Critical',
        chiefComplaint: 'Admitted for Pneumonia'
    },
    description: 'Mrs. Adams was admitted 2 days ago for community-acquired pneumonia. She\'s been improving. She just pressed her call light and says she has chest pain.',
    openingStatement: 'Mrs. Adams says her chest started hurting about 10 minutes ago. She describes it as "pressure" in the center of her chest. She looks anxious and is slightly diaphoretic. What do you do?',
    keyTeachingPoints: [
        'Chest pain on the floor is an emergency until proven otherwise',
        'NEVER leave a patient with chest pain alone',
        'Time to ECG should be <10 minutes from symptom onset',
        'Nurses often activate STEMI protocols - know your hospital\'s process',
        'Aspirin 324mg chewed is first-line treatment if no contraindication'
    ]
},

'nursing-elderly-confusion': {
    id: 'nursing-elderly-confusion',
    title: 'New Confusion in Elderly - Not Just Old Age',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'Harold Thompson',
        age: 84,
        sex: 'Male',
        setting: 'Medical-Surgical Floor',
        acuity: 'Medium',
        chiefComplaint: 'Admitted for Heart Failure'
    },
    description: 'Mr. Thompson was admitted 3 days ago for CHF exacerbation. He\'s been pleasant and cooperative. Today he\'s refusing medications, doesn\'t recognize his daughter, and thinks he\'s at a hotel.',
    openingStatement: 'The day shift nurse says Mr. Thompson "sundowns" but he was fine yesterday. His daughter is upset - "this isn\'t like Dad." He\'s now agitated and trying to climb out of bed. What\'s going on?',
    keyTeachingPoints: [
        'Acute confusion in elderly is DELIRIUM until proven otherwise',
        'CAM: acute onset, fluctuating course, inattention, disorganized thinking',
        'Common causes: Infection, Medications, Metabolic, Hypoxia',
        'UTI is OVER-diagnosed as cause of delirium',
        'Anticholinergic medications (diphenhydramine!) are major delirium risk'
    ]
},

'nursing-hypoglycemia': {
    id: 'nursing-hypoglycemia',
    title: 'Hypoglycemia Protocol - Severity-Based',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'basic',
    patient: {
        name: 'Linda Martinez',
        age: 56,
        sex: 'Female',
        setting: 'Medical-Surgical Floor',
        acuity: 'Medium',
        chiefComplaint: 'Post-op Day 1 Cholecystectomy'
    },
    description: 'Mrs. Martinez is diabetic on insulin. She missed breakfast due to nausea and just received her scheduled insulin dose. During your assessment, she\'s diaphoretic and shaky. Point-of-care glucose is 52.',
    openingStatement: 'Mrs. Martinez is diaphoretic, shaky, and confused. Her glucose is 52. She received 12 units of insulin 30 minutes ago but hasn\'t eaten. She\'s alert but having trouble following your questions. What do you do?',
    keyTeachingPoints: [
        'Rule of 15: 15g carbs, wait 15 minutes, recheck glucose',
        'Mild hypoglycemia: oral glucose; Severe: D50 IV or glucagon IM',
        'ALWAYS recheck glucose 15 minutes after treatment',
        'Long-acting insulin continues working - patient needs ongoing monitoring',
        'HOLD insulin if patient is NPO or not eating - contact provider'
    ]
},

'nursing-transfusion-reaction': {
    id: 'nursing-transfusion-reaction',
    title: 'Blood Transfusion Reaction',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'Thomas Brown',
        age: 71,
        sex: 'Male',
        setting: 'Medical-Surgical Floor',
        acuity: 'Medium → High',
        chiefComplaint: 'Anemia - Receiving PRBCs'
    },
    description: 'Mr. Brown is receiving his second unit of PRBCs. Fifteen minutes into the second unit, he develops fever and chills.',
    openingStatement: 'Mr. Brown is 15 minutes into his second unit of blood. He\'s now having rigors (severe shaking chills) and says he feels "terrible." His temp was 98.6°F before the transfusion. What do you do?',
    keyTeachingPoints: [
        'Any transfusion reaction: STOP TRANSFUSION IMMEDIATELY',
        'Keep IV access but use new tubing',
        'Stay with patient - reactions can worsen rapidly',
        'Save the blood unit and tubing - blood bank needs them',
        'Know reaction types: febrile, allergic, hemolytic, TACO, TRALI'
    ]
},

'nursing-fall': {
    id: 'nursing-fall',
    title: 'Fall Risk Patient Found on Floor',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'basic',
    patient: {
        name: 'Evelyn Cooper',
        age: 82,
        sex: 'Female',
        setting: 'Medical-Surgical Floor',
        acuity: 'Medium',
        chiefComplaint: 'Found on Floor by Bathroom'
    },
    description: 'Mrs. Cooper is an 82-year-old admitted for pneumonia on fall precautions. You hear her bed alarm and find her on the floor next to her bed.',
    openingStatement: 'You find Mrs. Cooper on the floor. She\'s alert, lying on her left side, holding her left hip. She says she was trying to get to the bathroom. Walk me through your response.',
    keyTeachingPoints: [
        'Don\'t move patient until initial assessment complete',
        'Hip fracture signs: leg shortened and externally rotated',
        'Always check anticoagulation status - increases bleed risk',
        'Document: what you found, patient statement, assessment findings',
        'Root cause analysis: why did this fall happen?'
    ]
},

'nursing-pain-reassessment': {
    id: 'nursing-pain-reassessment',
    title: 'Pain Reassessment - Balanced Approach',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'David Foster',
        age: 45,
        sex: 'Male',
        setting: 'Medical-Surgical Floor',
        acuity: 'Medium',
        chiefComplaint: 'Post-op Day 2 Back Surgery'
    },
    description: 'Mr. Foster had lumbar fusion 2 days ago. He\'s rating his pain 10/10 and requesting IV dilaudid every 2 hours (PRN is q4h). He appears comfortable watching TV but insists he needs more pain medication.',
    openingStatement: 'Mr. Foster is asking for IV dilaudid again. He rates his pain 10/10 but is sitting up comfortably watching sports. How do you approach this?',
    keyTeachingPoints: [
        'Pain is subjective, but assessment includes both self-report AND objective findings',
        'Functional pain assessment: Can you do your PT? Can you eat?',
        'Multimodal analgesia: opioids + acetaminophen + NSAIDs + gabapentin',
        'Non-pharmacologic interventions are evidence-based',
        'If concerned about regimen adequacy, discuss with provider'
    ]
},

'nursing-new-afib': {
    id: 'nursing-new-afib',
    title: 'New Onset AFib - Stable vs Unstable',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'Raymond Chen',
        age: 69,
        sex: 'Male',
        setting: 'Medical-Surgical Floor',
        acuity: 'Medium',
        chiefComplaint: 'Admitted for Pneumonia'
    },
    description: 'Mr. Chen has been recovering from pneumonia. During routine vitals, you notice his heart rate is 142 and irregular. He says he feels "fluttery" in his chest.',
    openingStatement: 'Mr. Chen\'s monitor shows heart rate 142, irregularly irregular. He\'s never had AFib before. He feels palpitations but denies chest pain or shortness of breath. What do you assess?',
    keyTeachingPoints: [
        'Unstable AFib = hypotension, altered mental status, chest pain, acute HF',
        'Stable AFib with RVR = can rate control with medications',
        'Get 12-lead ECG to confirm rhythm and look for ischemia',
        'Look for underlying cause: infection, hypoxia, thyroid, electrolytes',
        'New AFib needs anticoagulation consideration'
    ]
},

'nursing-dvt-assessment': {
    id: 'nursing-dvt-assessment',
    title: 'DVT Signs Post-Surgical',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'Christine Hall',
        age: 54,
        sex: 'Female',
        setting: 'Orthopedic Floor',
        acuity: 'Medium',
        chiefComplaint: 'Post-op Day 3 Total Knee Replacement'
    },
    description: 'Mrs. Hall had knee replacement 3 days ago. During your morning assessment, she mentions her other (non-surgical) calf feels "tight." You notice it looks larger than yesterday.',
    openingStatement: 'Mrs. Hall points to her left (non-operative) calf and says it\'s been feeling tight since yesterday. It does appear more swollen than her right calf. What do you do?',
    keyTeachingPoints: [
        'DVT triad: stasis, endothelial injury, hypercoagulability',
        'Classic DVT signs: unilateral leg swelling, warmth, erythema, pain',
        'Measure and compare calf circumferences - >3cm difference is significant',
        'NEVER massage a leg with suspected DVT - risk of PE',
        'Homans sign is unreliable and not recommended'
    ]
},

'nursing-respiratory-decline': {
    id: 'nursing-respiratory-decline',
    title: 'Respiratory Decline on Oxygen',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'William Turner',
        age: 68,
        sex: 'Male',
        setting: 'Medical Floor',
        acuity: 'Medium → High',
        chiefComplaint: 'COPD Exacerbation Day 2'
    },
    description: 'Mr. Turner was admitted for COPD exacerbation, doing well on 2L NC. Today he\'s now needing 6L to keep SpO2 above 88%. He\'s more work of breathing than yesterday.',
    openingStatement: 'Mr. Turner has been stable on 2L nasal cannula. Today he\'s at 6L and still only saturating 88%. He\'s using accessory muscles and can only speak in short sentences. What\'s happening?',
    keyTeachingPoints: [
        'COPD patients: target SpO2 88-92%',
        'Rising CO2 in COPD = respiratory muscle fatigue',
        'BiPAP can prevent intubation in COPD exacerbations',
        'Work of breathing is as important as SpO2',
        'This patient may need ICU - consider rapid response'
    ]
},

'nursing-diabetic-foot': {
    id: 'nursing-diabetic-foot',
    title: 'Diabetic Foot Assessment',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'Henry Jackson',
        age: 62,
        sex: 'Male',
        setting: 'Medical Floor',
        acuity: 'Medium',
        chiefComplaint: 'Admitted for Cellulitis'
    },
    description: 'Mr. Jackson is a diabetic admitted for cellulitis. During your foot exam, you notice a small wound on his right heel he didn\'t mention. He says it doesn\'t hurt because "I can\'t feel my feet anymore."',
    openingStatement: 'While doing your admission assessment, you find a wound on Mr. Jackson\'s right heel - about 2cm, with some dark tissue in the center. What do you assess?',
    keyTeachingPoints: [
        'Diabetic patients: ALWAYS do complete foot exam - they may not feel wounds',
        'Loss of protective sensation = high amputation risk',
        'Check pulses on every admission',
        'Document: location, size, depth, tissue type, drainage, surrounding skin',
        'Poor glucose control impairs wound healing'
    ]
},

'nursing-comfort-care': {
    id: 'nursing-comfort-care',
    title: 'End-of-Life Comfort Care',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    patient: {
        name: 'Margaret Wilson',
        age: 87,
        sex: 'Female',
        setting: 'Medical Floor',
        acuity: 'Comfort Care',
        chiefComplaint: 'End-Stage Heart Failure'
    },
    description: 'Mrs. Wilson has end-stage heart failure and elected comfort care. She\'s actively dying. Family is at bedside. She\'s moaning with breathing and appears uncomfortable.',
    openingStatement: 'Mrs. Wilson is comfort care and actively dying. Her family is understandably distressed. She appears to be in discomfort - moaning with each breath, grimacing. What can you do to help her and her family?',
    keyTeachingPoints: [
        'Comfort care goal: minimize suffering, allow natural death',
        'Morphine for dyspnea is appropriate - treats air hunger',
        'Death rattle is normal - more distressing to family than patient',
        'Family needs education on what to expect',
        'This is a privilege to be present for - approach with compassion'
    ]
},

'nursing-discharge-teaching': {
    id: 'nursing-discharge-teaching',
    title: 'Discharge Teaching - Teach-Back Method',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'basic',
    patient: {
        name: 'Robert Martinez',
        age: 55,
        sex: 'Male',
        setting: 'Medical Floor',
        acuity: 'Low',
        chiefComplaint: 'New CHF Diagnosis'
    },
    description: 'Mr. Martinez was admitted with new-onset heart failure. He\'s being discharged today on multiple new medications and lifestyle modifications. He has 8th-grade education and English is his second language.',
    openingStatement: 'Mr. Martinez is going home with 4 new medications, a 2g sodium diet, daily weights, and needs to recognize warning signs. He keeps nodding "yes" when you explain things, but you\'re not sure he understands. How do you ensure effective discharge teaching?',
    keyTeachingPoints: [
        'Health literacy affects ~1/3 of Americans - don\'t assume understanding',
        'Teach-back: "Tell me in your own words..." not "Do you understand?"',
        'Limit to 3-4 key points at a time',
        'Use plain language and pictures',
        'Include family/caregivers in teaching'
    ]
}

};

// ============================================================================
// EXPORT FOR INTEGRATION
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_NURSING_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_NURSING_CASES);
    console.log('Nursing cases merged into COACHDX_CASES');
} else if (typeof window !== 'undefined') {
    window.COACHDX_NURSING_CASES = COACHDX_NURSING_CASES;
    console.log('Nursing cases available as window.COACHDX_NURSING_CASES');
}
