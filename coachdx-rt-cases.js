// ============================================================================
// COACHDX RESPIRATORY THERAPY CASE LIBRARY
// Clinical Reasoning Cases for RT Students
// Created: January 2026
// ============================================================================
// 
// 10 RT-specific cases for clinical reasoning training
// Designed for: Respiratory Therapy students, RT continuing education
// 
// Coach Persona: Jennifer Park, RRT - Lead Respiratory Therapist
// 
// SBAR Integration: Each case includes communication scenarios where
// RT students practice SBAR with physicians about respiratory interventions
// ============================================================================

const COACHDX_RT_CASES = {

// Coach persona for RT cases
_coachPersona: {
    name: 'Jennifer Park, RRT',
    title: 'Lead Respiratory Therapist',
    role: 'Your clinical preceptor',
    style: 'collaborative_technical',
    avatar: '🫁',
    phrases: {
        greeting: "Hey, we've got a patient I want you to take the lead on.",
        challenge: "Walk me through your assessment before we make any changes.",
        praise: "Good respiratory thinking. That's exactly right.",
        redirect: "Hold on - let's look at the whole picture first.",
        handoff: "Before we call the physician, what's your recommendation going to be?"
    }
},

// ============================================================================
// RESPIRATORY THERAPY CASES (10 cases)
// ============================================================================

'rt-copd-bipap': {
    id: 'rt-copd-bipap',
    title: 'COPD Exacerbation - BiPAP Management',
    category: 'Respiratory Therapy',
    discipline: 'rt',
    difficulty: 'intermediate',
    patient: {
        name: 'Frank Kowalski',
        age: 68,
        sex: 'Male',
        setting: 'Emergency Department',
        acuity: 'High',
        chiefComplaint: 'Severe Dyspnea'
    },
    description: 'Mr. Kowalski is a known COPD patient brought in by EMS with severe respiratory distress. He\'s on 4L NC with SpO2 88%, using accessory muscles, speaking in 2-word sentences.',
    openingStatement: 'Mr. Kowalski is working hard to breathe. The ED physician wants to avoid intubation if possible and asks for your assessment. ABG: pH 7.28, PaCO2 68, PaO2 58, HCO3 28. What\'s your plan?',
    conceptDomains: {
        'Assessment': ['work_of_breathing', 'mental_status', 'abg_interpretation'],
        'BiPAP Indication': ['acute_hypercapnic_failure', 'contraindications', 'patient_selection'],
        'BiPAP Settings': ['ipap', 'epap', 'fio2', 'titration'],
        'Monitoring': ['improvement_signs', 'failure_criteria', 'abg_timing'],
        'Escalation': ['intubation_criteria', 'when_to_call'],
        'Patient Coaching': ['mask_tolerance', 'synchrony', 'reassurance']
    },
    quickActions: [
        'Assess BiPAP candidacy',
        'Recommend initial settings',
        'Coach patient on mask fit',
        'Plan reassessment timeline'
    ],
    defined_responses: {
        'assessment': 'RR 32, accessory muscle use, can follow commands but fatigued. Speaking 2-3 words. Alert but anxious. Prolonged expiration, diffuse wheezes.',
        'abg interpretation': 'pH 7.28 (acidemic), PaCO2 68 (elevated - respiratory acidosis), HCO3 28 (elevated - chronic compensation). This is acute-on-chronic respiratory acidosis. His baseline CO2 is probably around 50.',
        'bipap candidate': 'YES - good candidate. Alert, can protect airway, can cooperate with mask, acute hypercapnic respiratory failure with pH <7.35. No contraindications.',
        'initial settings': 'Start BiPAP: IPAP 12, EPAP 5, FiO2 0.40. Pressure support = IPAP - EPAP = 7 cmH2O. This provides ventilatory assistance for CO2 clearance.',
        'titration': 'Reassess in 15-30 min. If still acidotic/high CO2, increase IPAP by 2 (to 14). Target: improved WOB, RR <25, pH improving.',
        'mask coaching': 'Key to success: "Mr. Kowalski, this mask will help you breathe easier. Breathe normally - let the machine do the work. It may feel strange at first but give it a few minutes."',
        'failure signs': 'Watch for: worsening mental status, pH not improving after 1-2 hours, inability to tolerate mask, hemodynamic instability. These = intubation.',
        'success': 'After 1 hour on BiPAP IPAP 14/EPAP 5: RR 22, speaking sentences, SpO2 94%. Repeat ABG: pH 7.34, CO2 58. Improving!'
    },
    sbarScenario: {
        context: 'After initial assessment, you need to call the ED physician to recommend BiPAP.',
        callingTo: 'Dr. Martinez (ED Attending)',
        yourRole: 'Respiratory Therapist',
        expectedSBAR: {
            situation: 'I\'m calling about Mr. Kowalski in Bed 12, the COPD patient in respiratory distress.',
            background: 'He\'s 68 with severe COPD, came in with acute dyspnea. Currently on 4L NC with SpO2 88%, RR 32, using accessory muscles. ABG shows pH 7.28, CO2 68 - acute on chronic respiratory acidosis.',
            assessment: 'He\'s in acute hypercapnic respiratory failure but is alert and cooperative. He\'s a good candidate for BiPAP - no contraindications.',
            recommendation: 'I recommend starting BiPAP at IPAP 12, EPAP 5, FiO2 40%. I\'ll reassess in 30 minutes with repeat ABG at 1 hour. I\'ll call you if he\'s not improving or needs intubation.'
        },
        physicianResponse: 'Good assessment. I agree - let\'s try BiPAP first. Start those settings and keep me posted. What would make you call me back sooner?'
    },
    keyTeachingPoints: [
        'BiPAP reduces mortality in acute COPD exacerbations - it\'s not just comfort',
        'Patient selection is key: must be alert, cooperative, able to protect airway',
        'IPAP provides ventilatory support (CO2 clearance), EPAP provides oxygenation and PEEP',
        'Pressure support = IPAP - EPAP; start around 5-7 cmH2O and titrate',
        'Reassess frequently - improvement should be seen in 1-2 hours',
        'Patient coaching is RT\'s superpower - mask tolerance often determines success',
        'Know when to escalate: failure to improve, declining mental status, instability'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'COPD Pathophysiology', link: '../mechanism/copd-module.html', reason: 'Why CO2 retention occurs' },
        { type: 'mechanism', title: 'Acid-Base', link: '../mechanism/acid-base-module.html', reason: 'ABG interpretation' }
    ]
},

'rt-asthma-failure': {
    id: 'rt-asthma-failure',
    title: 'Asthma - Impending Respiratory Failure',
    category: 'Respiratory Therapy',
    discipline: 'rt',
    difficulty: 'advanced',
    patient: {
        name: 'Marcus Johnson',
        age: 24,
        sex: 'Male',
        setting: 'Emergency Department',
        acuity: 'Critical',
        chiefComplaint: 'Severe Asthma Attack'
    },
    description: 'Young man with asthma brought in by ambulance. Multiple nebs given by EMS with minimal improvement. Now barely moving air, speaking single words, appears exhausted.',
    openingStatement: 'Marcus has severe asthma - EMS gave 3 albuterol nebs without much improvement. He\'s barely wheezing now (ominous sign), SpO2 91% on high-flow, can only say one word at a time. What concerns you and what do you recommend?',
    conceptDomains: {
        'Assessment': ['silent_chest', 'fatigue', 'mental_status', 'peak_flow'],
        'Severity Recognition': ['impending_failure_signs', 'normal_co2_in_asthma'],
        'Aggressive Treatment': ['continuous_nebs', 'ipratropium', 'magnesium', 'steroids'],
        'Escalation': ['heliox', 'bipap_in_asthma', 'intubation_prep'],
        'Communication': ['sbar_to_physician', 'team_coordination']
    },
    quickActions: [
        'Recognize severity (silent chest = bad)',
        'Continuous nebulizer',
        'Call for backup - may need intubation',
        'Recommend magnesium'
    ],
    defined_responses: {
        'assessment': 'Tripoding, diaphoretic, barely audible breath sounds bilaterally (silent chest). Speaking single words. RR 34 but shallow. SpO2 91% on 15L NRB.',
        'silent chest': 'DANGER SIGN. Silent chest in asthma means so little air movement that you can\'t hear wheezes. This is worse than loud wheezing.',
        'abg': 'pH 7.35, PaCO2 42, PaO2 68. Normal CO2 in severe asthma is ABNORMAL - he should be hyperventilating with low CO2. This means he\'s tiring out.',
        'peak flow': 'Unable to perform - too dyspneic. This alone indicates severity.',
        'treatment': 'Continuous albuterol nebulizer, ipratropium 0.5mg added. Magnesium 2g IV over 20 min. Methylprednisolone 125mg IV. Keep him upright.',
        'magnesium': 'Magnesium causes bronchial smooth muscle relaxation. 2g IV over 20 minutes. Very helpful in severe asthma.',
        'bipap': 'Controversial in asthma - can help avoid intubation but need cooperative patient. If using: low EPAP (3-5), modest IPAP (10-12). Watch for air trapping.',
        'intubation prep': 'Have intubation equipment at bedside. If mental status declines or CO2 rises, he needs a tube. Ketamine is preferred induction agent (bronchodilator).'
    },
    sbarScenario: {
        context: 'This patient is critically ill. You need to urgently communicate with the ED attending.',
        callingTo: 'Dr. Williams (ED Attending)',
        yourRole: 'Respiratory Therapist',
        expectedSBAR: {
            situation: 'I need you at Bed 4 now. Marcus Johnson, 24-year-old with severe asthma, is in impending respiratory failure.',
            background: 'Multiple nebs by EMS and here without improvement. He now has a silent chest - barely moving air. ABG shows CO2 of 42 which is abnormal for asthma.',
            assessment: 'He\'s exhausted and failing. The normal CO2 tells me he can\'t maintain his respiratory effort. He may need intubation soon.',
            recommendation: 'I\'ve started continuous nebs and recommend magnesium 2g IV now. I have intubation equipment at bedside. Can you come evaluate him immediately?'
        },
        physicianResponse: 'On my way. Good call on the magnesium - hang it now. Let\'s also try BiPAP while I get there. Have RSI meds drawn up just in case.'
    },
    keyTeachingPoints: [
        'Silent chest = near-death asthma - this is an emergency',
        'Normal CO2 in acute asthma is BAD - patient should be hyperventilating',
        'Rising CO2 or declining mental status = prepare for intubation',
        'Magnesium 2g IV is evidence-based for severe asthma',
        'Continuous nebulization is more effective than intermittent in severe cases',
        'Ketamine is preferred for intubation in asthma (bronchodilator properties)',
        'This patient needs constant RT presence - don\'t leave the bedside'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Asthma Pathophysiology', link: '../mechanism/asthma-module.html', reason: 'Bronchospasm mechanisms' }
    ]
},

'rt-ards-ventilator': {
    id: 'rt-ards-ventilator',
    title: 'ARDS Ventilator Management',
    category: 'Respiratory Therapy',
    discipline: 'rt',
    difficulty: 'advanced',
    patient: {
        name: 'Sarah Mitchell',
        age: 45,
        sex: 'Female',
        setting: 'ICU',
        acuity: 'Critical',
        chiefComplaint: 'ARDS from Pneumonia'
    },
    description: 'Mrs. Mitchell was intubated 2 days ago for severe pneumonia progressing to ARDS. Current vent settings aren\'t achieving adequate oxygenation despite high FiO2. Team is asking for your input on ventilator optimization.',
    openingStatement: 'Mrs. Mitchell has ARDS - P/F ratio is 85. Current settings: AC/VC, Vt 480 (she\'s 70kg), RR 18, PEEP 10, FiO2 80%. SpO2 88%. The ICU team wants your recommendations. What do you assess and suggest?',
    conceptDomains: {
        'ARDS Assessment': ['pf_ratio', 'severity_classification', 'cxr_findings'],
        'Lung Protective Ventilation': ['low_tidal_volume', 'plateau_pressure', 'driving_pressure'],
        'PEEP Optimization': ['peep_fio2_tables', 'recruitment', 'overdistension'],
        'Advanced Strategies': ['proning', 'paralysis', 'recruitment_maneuvers'],
        'Monitoring': ['plateau_pressure', 'compliance', 'abg_goals']
    },
    quickActions: [
        'Calculate Vt per IBW',
        'Check plateau pressure',
        'Assess PEEP adequacy',
        'Consider prone positioning'
    ],
    defined_responses: {
        'ibw calculation': 'Female, let\'s estimate 5\'6\" = 58 kg IBW. Vt should be 6-8 mL/kg IBW = 348-464 mL. Current 480 is slightly high.',
        'current plateau': 'Plateau pressure is 32 cmH2O. Goal is <30. She\'s above target.',
        'driving pressure': 'Driving pressure = Plateau - PEEP = 32 - 10 = 22. Goal is <15. This is too high and associated with increased mortality.',
        'assessment': 'Problems: Vt too high for IBW, plateau and driving pressures elevated, PEEP may be inadequate for her level of hypoxemia.',
        'recommendations': 'Reduce Vt to 400 (6 mL/kg IBW). Increase PEEP to 14-16 per ARDSNet high PEEP table at FiO2 80%. Increase RR to 22-24 to compensate. Recheck plateau.',
        'post changes': 'After adjustments - Vt 400, PEEP 16, RR 24: Plateau now 28, driving pressure 12, SpO2 92% on FiO2 70%. Much better!',
        'proning': 'With P/F <150, she\'s a candidate for prone positioning. Proning for 16+ hours improves survival in severe ARDS.',
        'permissive hypercapnia': 'With low Vt, CO2 may rise. We accept pH down to 7.20 - this is permissive hypercapnia. Oxygenation and lung protection take priority.'
    },
    sbarScenario: {
        context: 'You\'ve assessed the patient and have recommendations for the ICU team.',
        callingTo: 'Dr. Patel (ICU Attending)',
        yourRole: 'Respiratory Therapist',
        expectedSBAR: {
            situation: 'I\'m calling about Mrs. Mitchell\'s ventilator management. She\'s not oxygenating well and I have concerns about her current settings.',
            background: 'She has severe ARDS with P/F ratio of 85. Current settings have her plateau pressure at 32 and driving pressure at 22 - both above our targets.',
            assessment: 'Her tidal volume is too high for her ideal body weight, and her PEEP is too low for her FiO2 per ARDSNet tables. We\'re causing ventilator-induced lung injury.',
            recommendation: 'I recommend reducing tidal volume to 400, increasing PEEP to 16, and increasing rate to compensate. If she doesn\'t improve, I think we should discuss proning.'
        },
        physicianResponse: 'Great analysis. Make those changes and let\'s get an ABG in 30 minutes. I agree about proning - let\'s plan for this afternoon if she\'s still struggling.'
    },
    keyTeachingPoints: [
        'ARDS requires lung-protective ventilation: Vt 4-8 mL/kg IBW, plateau <30, driving pressure <15',
        'Use IDEAL body weight (based on height), not actual weight',
        'Higher PEEP improves oxygenation by recruiting collapsed alveoli',
        'Driving pressure (plateau - PEEP) is strongly associated with mortality',
        'Prone positioning improves survival in severe ARDS (P/F <150) - RT plays key role',
        'Permissive hypercapnia is acceptable - prioritize lung protection over normal CO2',
        'ARDSNet tables guide PEEP/FiO2 combinations'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'ARDS Pathophysiology', link: '../mechanism/ards-module.html', reason: 'Why lungs fail in ARDS' }
    ]
},

'rt-difficult-wean': {
    id: 'rt-difficult-wean',
    title: 'Difficult Ventilator Wean',
    category: 'Respiratory Therapy',
    discipline: 'rt',
    difficulty: 'advanced',
    patient: {
        name: 'William Chen',
        age: 72,
        sex: 'Male',
        setting: 'ICU',
        acuity: 'Medium',
        chiefComplaint: 'Prolonged Ventilator Dependence'
    },
    description: 'Mr. Chen has been intubated for 10 days after sepsis. His initial illness has resolved but he\'s failed two spontaneous breathing trials (SBTs). The team is frustrated - why can\'t he wean?',
    openingStatement: 'Mr. Chen keeps failing SBTs. His sepsis is resolved, he\'s awake and following commands, but 30 minutes into the trial he becomes tachypneic and diaphoretic. Let\'s figure out why and fix it.',
    conceptDomains: {
        'Weaning Assessment': ['readiness_criteria', 'rsbi', 'mental_status'],
        'Failure Analysis': ['why_sbt_fails', 'cardiac_vs_respiratory', 'secretions'],
        'Wean Barriers': ['delirium', 'weakness', 'cardiac', 'metabolic', 'psychological'],
        'Liberation Strategies': ['sbt_protocols', 'trach_timing', 'pt_involvement'],
        'Optimization': ['diuresis', 'nutrition', 'mobility', 'sedation']
    },
    quickActions: [
        'Calculate RSBI',
        'Review why previous SBTs failed',
        'Check for wean barriers',
        'Optimize before next attempt'
    ],
    defined_responses: {
        'rsbi': 'Rapid shallow breathing index: RR 28, Vt 280 mL → RSBI = 100. This is borderline (>105 predicts failure). He\'s working hard.',
        'previous failures': 'Chart review: Both times developed tachypnea (RR >35), tachycardia (HR >120), and diaphoresis at 30 minutes. SpO2 stayed okay.',
        'cardiac': 'Key finding: BNP is 1200. ECG shows new TWI. He may have demand ischemia or flash pulmonary edema when work of breathing increases. This is cardiac wean failure!',
        'weakness': 'ICU-acquired weakness likely after 10 days. Can barely lift arms off bed. MRC score is 36/60. Needs PT.',
        'secretions': 'Moderate secretions, requiring suctioning q4h. Not excessive but contribute to work.',
        'delirium': 'CAM-ICU positive some days. On and off delirious - affects cooperation.',
        'plan': '1) Diurese (BNP elevated), 2) Check echo, 3) PT/OT for strengthening, 4) Optimize nutrition, 5) Address delirium, 6) Retry SBT in 24-48h.'
    },
    sbarScenario: {
        context: 'You\'ve identified potential causes of wean failure and need to discuss with the team.',
        callingTo: 'Dr. Rodriguez (ICU Attending)',
        yourRole: 'Respiratory Therapist',
        expectedSBAR: {
            situation: 'I\'d like to discuss Mr. Chen\'s weaning failures. I think I\'ve identified some issues we can address.',
            background: 'He\'s failed two SBTs at 30 minutes with tachycardia and tachypnea. His RSBI is borderline at 100.',
            assessment: 'I think he has cardiac wean failure. His BNP is 1200 and he\'s getting new ECG changes. When we increase his work of breathing, his heart can\'t keep up. He also has significant ICU-acquired weakness.',
            recommendation: 'I recommend holding the next SBT until we diurese him and check an echo. Can we also get PT more involved? Once he\'s optimized, I think he\'ll succeed.'
        },
        physicianResponse: 'You\'re probably right - I hadn\'t connected the BNP. Let\'s give 40 of Lasix and get an echo today. Great catch on the cardiac angle.'
    },
    keyTeachingPoints: [
        'Weaning failure is a diagnosis - find the cause, don\'t just keep trying',
        'RSBI (RR/Vt) >105 predicts failure, <80 predicts success',
        'Cardiac wean failure is common and underrecognized - look for elevated BNP, fluid overload',
        'ICU-acquired weakness affects 50%+ of prolonged ICU patients',
        'The mnemonic "WEANS NOW": Weaning parameters, Endurance, Airway, Nutrition, Secretions, Neuro, O2, Wakefulness',
        'Optimize BEFORE the SBT - don\'t set patient up to fail',
        'Early mobility and PT reduce ventilator days'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Heart Failure', link: '../mechanism/hf-module.html', reason: 'Cardiac wean failure' }
    ]
},

'rt-post-extubation-stridor': {
    id: 'rt-post-extubation-stridor',
    title: 'Post-Extubation Stridor',
    category: 'Respiratory Therapy',
    discipline: 'rt',
    difficulty: 'intermediate',
    patient: {
        name: 'Jennifer Walsh',
        age: 38,
        sex: 'Female',
        setting: 'ICU',
        acuity: 'High',
        chiefComplaint: 'Stridor After Extubation'
    },
    description: 'Ms. Walsh was just extubated after 5 days of intubation for pneumonia. Within 30 minutes, she develops inspiratory stridor and increasing work of breathing.',
    openingStatement: 'Ms. Walsh was extubated 30 minutes ago and now has audible stridor. SpO2 is 93% on 4L NC, she\'s anxious and grabbing at her throat. What do you do?',
    conceptDomains: {
        'Recognition': ['stridor_characteristics', 'timing', 'severity'],
        'Causes': ['laryngeal_edema', 'vocal_cord_dysfunction', 'secretions'],
        'Treatment': ['racemic_epinephrine', 'steroids', 'heliox'],
        'Escalation': ['reintubation_criteria', 'difficult_airway_prep'],
        'Prevention': ['cuff_leak_test', 'steroid_pretreatment']
    },
    quickActions: [
        'Stay calm - assess severity',
        'Racemic epinephrine STAT',
        'Call for help - may need reintubation',
        'Prepare difficult airway equipment'
    ],
    defined_responses: {
        'assessment': 'Inspiratory stridor, audible without stethoscope. RR 28, SpO2 93% on 4L. Anxious, using accessory muscles. Hoarse voice.',
        'cause': 'Likely laryngeal edema from intubation trauma. 5 days of intubation increases risk. Female, smaller airway, also higher risk.',
        'cuff leak': 'She had borderline cuff leak test (100 mL) before extubation - should have been concerning.',
        'treatment': 'Racemic epinephrine 0.5 mL in 3 mL NS via nebulizer - causes local vasoconstriction, reduces edema. Effect in minutes.',
        'steroids': 'Dexamethasone 10mg IV (or methylprednisolone) - helps but takes hours for full effect. Should have been given 4+ hours before extubation.',
        'response': 'After racemic epi: stridor improved, SpO2 96%, RR 22, much less anxious. Continue to monitor - effects wear off in 1-2 hours.',
        'heliox': 'If available and stridor persists, heliox (70:30 or 80:20 helium:oxygen) reduces turbulent airflow and work of breathing.',
        'reintubation': 'If stridor worsens despite treatment, reintubate early before complete obstruction. Anticipate difficult airway - swollen structures.'
    },
    sbarScenario: {
        context: 'Patient developing stridor - you need physician at bedside.',
        callingTo: 'Dr. Kim (ICU Fellow)',
        yourRole: 'Respiratory Therapist',
        expectedSBAR: {
            situation: 'I need you at Bed 8 now - Ms. Walsh is developing post-extubation stridor.',
            background: 'She was extubated 30 minutes ago after 5 days for pneumonia. She had borderline cuff leak before extubation.',
            assessment: 'She has inspiratory stridor, using accessory muscles, SpO2 93%. I think she has laryngeal edema.',
            recommendation: 'I\'m giving racemic epinephrine now. Can you come evaluate? If she doesn\'t improve, we may need to reintubate and I want difficult airway equipment ready.'
        },
        physicianResponse: 'Coming now. Good call on the racemic epi. Page anesthesia to be aware - if she needs reintubation it could be difficult.'
    },
    keyTeachingPoints: [
        'Post-extubation stridor is an airway emergency - act fast',
        'Risk factors: prolonged intubation, female, large tube, traumatic intubation',
        'Cuff leak test <110 mL (or absent) predicts stridor - consider steroids pre-extubation',
        'Racemic epinephrine works in minutes - first-line treatment',
        'Effects of racemic epi wear off - monitor for rebound stridor',
        'Don\'t delay reintubation if not improving - swollen airway = difficult airway',
        'Prevention: steroids 12-24h before extubation if high risk'
    ],
    relatedContent: [
        { type: 'coachdx', title: 'Airway Emergencies', link: 'mentor-chat.html?case=airway', reason: 'Airway management' }
    ]
},

'rt-abg-complex': {
    id: 'rt-abg-complex',
    title: 'ABG Interpretation - Complex Disorders',
    category: 'Respiratory Therapy',
    discipline: 'rt',
    difficulty: 'advanced',
    patient: {
        name: 'Robert Martinez',
        age: 55,
        sex: 'Male',
        setting: 'Emergency Department',
        acuity: 'High',
        chiefComplaint: 'Diabetic with Respiratory Distress'
    },
    description: 'Mr. Martinez is a diabetic found unresponsive at home. He\'s now arousable but confused. ABG results just came back and they\'re complex. The ED physician wants your interpretation.',
    openingStatement: 'ABG results: pH 7.18, PaCO2 22, PaO2 95, HCO3 8. Basic metabolic panel shows glucose 580, Na 128, K 5.8, Cl 98. What\'s going on and how do you interpret this?',
    conceptDomains: {
        'ABG Interpretation': ['ph_assessment', 'primary_disorder', 'compensation'],
        'Anion Gap': ['calculation', 'interpretation', 'delta_delta'],
        'Mixed Disorders': ['triple_disorders', 'identifying_multiple'],
        'Clinical Correlation': ['dka', 'lactic_acidosis', 'renal_failure'],
        'Treatment Implications': ['ventilator_settings', 'avoid_overcorrection']
    },
    quickActions: [
        'Identify primary disorder',
        'Calculate anion gap',
        'Assess compensation',
        'Calculate delta-delta'
    ],
    defined_responses: {
        'primary': 'pH 7.18 = acidemia. HCO3 8 (very low) = metabolic acidosis. This is the primary disorder.',
        'compensation': 'Expected CO2 = 1.5 × HCO3 + 8 = 1.5 × 8 + 8 = 20. Actual CO2 is 22 - close, so appropriate respiratory compensation (he\'s hyperventilating to blow off CO2).',
        'anion gap': 'AG = Na - (Cl + HCO3) = 128 - (98 + 8) = 22. Elevated! Normal is 8-12. This is a high anion gap metabolic acidosis.',
        'delta delta': 'Delta AG = 22 - 10 = 12. Delta HCO3 = 24 - 8 = 16. Delta ratio = 12/16 = 0.75. Ratio <1 suggests coexisting non-anion gap metabolic acidosis.',
        'diagnosis': 'This is DKA (glucose 580, high AG) with possible concurrent non-AG metabolic acidosis (maybe from diarrhea or early renal tubular acidosis from DKA).',
        'triple disorder': 'If his CO2 was 30 instead of 22, we\'d have inadequate compensation = additional respiratory acidosis. Watch for this if he tires out.',
        'clinical significance': 'With pH 7.18, his respiratory drive is maxed out. If he gets intubated, DO NOT normalize his CO2 suddenly - would cause severe acidemia. Match his current minute ventilation.'
    },
    sbarScenario: {
        context: 'ED physician asks for your ABG interpretation and implications for management.',
        callingTo: 'Dr. Thompson (ED Attending)',
        yourRole: 'Respiratory Therapist',
        expectedSBAR: {
            situation: 'I\'ve analyzed Mr. Martinez\'s ABG and wanted to share my interpretation.',
            background: 'He\'s a diabetic with glucose 580, found unresponsive. ABG shows pH 7.18, CO2 22, HCO3 8.',
            assessment: 'He has a high anion gap metabolic acidosis from DKA with appropriate respiratory compensation - he\'s hyperventilating maximally. His delta-delta suggests a possible mixed metabolic picture.',
            recommendation: 'If he needs intubation, we need to match his current minute ventilation - he\'s moving a lot of air to compensate. I\'d set a high rate around 24-28 to keep his CO2 in the low 20s. Normalizing CO2 too fast would be dangerous.'
        },
        physicianResponse: 'Excellent analysis. That\'s exactly right - I\'ve seen people code when we overcorrect CO2 on intubation. Let\'s hope he doesn\'t need a tube, but if he does, your settings make sense.'
    },
    keyTeachingPoints: [
        'Systematic ABG approach: pH → primary disorder → compensation → anion gap → delta-delta',
        'Anion gap = Na - (Cl + HCO3); normal 8-12',
        'High AG causes: MUDPILES (Methanol, Uremia, DKA, Propylene glycol, Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates)',
        'Delta-delta helps identify mixed disorders',
        'Respiratory compensation formula: Expected CO2 = 1.5 × HCO3 + 8 (±2)',
        'CRITICAL: If intubating a compensating patient, match their minute ventilation - don\'t normalize!',
        'This module builds on MechanismDx acid-base content'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Acid-Base Module', link: '../mechanism/acid-base-module.html', reason: 'Foundation for ABG interpretation' },
        { type: 'mechanism', title: 'DKA Module', link: '../mechanism/diabetes-dka-module.html', reason: 'DKA pathophysiology' }
    ]
},

'rt-oxygen-toxicity': {
    id: 'rt-oxygen-toxicity',
    title: 'Oxygen Therapy - When High O2 Harms',
    category: 'Respiratory Therapy',
    discipline: 'rt',
    difficulty: 'intermediate',
    patient: {
        name: 'George Wilson',
        age: 74,
        sex: 'Male',
        setting: 'Medical Floor',
        acuity: 'Medium',
        chiefComplaint: 'COPD Exacerbation'
    },
    description: 'Mr. Wilson has severe COPD and was placed on 10L high-flow by the admitting team "to keep his oxygen up." He\'s now increasingly drowsy and his ABG shows worsening hypercapnia.',
    openingStatement: 'Mr. Wilson came in with COPD exacerbation. Someone put him on 10L O2 and his SpO2 is now 99% - but he\'s gotten more somnolent. ABG: pH 7.28, CO2 78, PO2 145. What happened?',
    conceptDomains: {
        'Oxygen Physiology': ['hypoxic_drive', 'vq_mismatch', 'haldane_effect'],
        'COPD Considerations': ['target_spo2', 'co2_retention', 'oxygen_induced_hypercapnia'],
        'Titration': ['appropriate_targets', 'delivery_devices', 'monitoring'],
        'Education': ['staff_education', 'misconceptions'],
        'Rescue': ['reducing_fio2', 'niv_if_needed']
    },
    quickActions: [
        'Reduce FiO2 immediately',
        'Target SpO2 88-92%',
        'Reassess mental status',
        'Consider BiPAP if not improving'
    ],
    defined_responses: {
        'what happened': 'Oxygen-induced hypercapnia. High O2 in COPD causes: 1) Reduced hypoxic drive (less important than previously thought), 2) Worsened V/Q matching (main cause), 3) Haldane effect (O2 displaces CO2 from hemoglobin).',
        'haldane effect': 'When hemoglobin is saturated with O2, it releases CO2. Flooding him with O2 released bound CO2 into his blood, raising PCO2.',
        'vq mismatch': 'High O2 reverses hypoxic pulmonary vasoconstriction. Blood now flows to poorly ventilated areas, worsening overall gas exchange.',
        'fix': 'Reduce O2 to target SpO2 88-92%. Use Venturi mask for precise FiO2 control. Current: switch to Venturi 28% (about 2-3L equivalent).',
        'response': 'After reducing to Venturi 28%: SpO2 90%, and over 30 min he becomes more alert. Repeat ABG in 1 hour shows CO2 coming down.',
        'if not improving': 'If still hypercapnic and somnolent, needs BiPAP for ventilatory support. But often just reducing O2 helps tremendously.',
        'education': 'This is a common mistake. More O2 is not always better. Need to educate staff about COPD oxygen targets.'
    },
    sbarScenario: {
        context: 'You discovered the patient on excessive oxygen and need to communicate the issue.',
        callingTo: 'Dr. Adams (Medicine Resident)',
        yourRole: 'Respiratory Therapist',
        expectedSBAR: {
            situation: 'I need to update you on Mr. Wilson in room 412 - he\'s developed CO2 retention and I\'ve made some changes.',
            background: 'He\'s here for COPD exacerbation and was placed on 10L O2 by the admitting team. He\'s now somnolent with CO2 of 78.',
            assessment: 'This is oxygen-induced hypercapnia - too much O2 in a COPD patient. His SpO2 was 99% which is too high for him.',
            recommendation: 'I\'ve reduced him to Venturi 28% targeting SpO2 88-92%. He\'s already more alert. Can we get a repeat ABG in an hour? And if he doesn\'t improve, we should discuss BiPAP.'
        },
        physicianResponse: 'Thank you for catching that - I should have specified a target SpO2. Repeat ABG in an hour sounds right. Let me know if he needs BiPAP.'
    },
    keyTeachingPoints: [
        'COPD patients: target SpO2 88-92% (not higher!)',
        'Oxygen-induced hypercapnia is real and dangerous',
        'Main mechanism is V/Q mismatch worsening, not just "loss of hypoxic drive"',
        'Haldane effect: high O2 saturation causes hemoglobin to release CO2',
        'Venturi masks provide precise FiO2 control - ideal for COPD',
        'High-flow with COPD requires careful titration',
        'More oxygen is not always better - it\'s a drug with side effects',
        'Education of all staff is essential'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'COPD Pathophysiology', link: '../mechanism/copd-module.html', reason: 'Why CO2 retention occurs' }
    ]
},

'rt-bronchoscopy': {
    id: 'rt-bronchoscopy',
    title: 'Bronchoscopy Assistance',
    category: 'Respiratory Therapy',
    discipline: 'rt',
    difficulty: 'intermediate',
    patient: {
        name: 'Patricia Lee',
        age: 58,
        sex: 'Female',
        setting: 'ICU',
        acuity: 'High',
        chiefComplaint: 'VAP - Bronchoscopy for BAL'
    },
    description: 'Mrs. Lee is intubated for respiratory failure and has developed ventilator-associated pneumonia. Pulmonology is doing a bronchoscopy for bronchoalveolar lavage (BAL). You\'re the RT assisting.',
    openingStatement: 'We\'re doing a bronchoscopy on Mrs. Lee for BAL sampling. Current settings: AC/VC Vt 450, RR 16, PEEP 8, FiO2 50%. The pulmonologist wants you to prepare and assist. What are your considerations?',
    conceptDomains: {
        'Preparation': ['fio2_adjustment', 'sedation_check', 'equipment'],
        'During Procedure': ['monitoring', 'ventilator_alarms', 'suctioning'],
        'Complications': ['hypoxemia', 'bronchospasm', 'bleeding', 'pneumothorax'],
        'Post Procedure': ['assessment', 'cxr', 'settings_return']
    },
    quickActions: [
        'Increase FiO2 to 100%',
        'Confirm adequate sedation/paralysis',
        'Silence non-critical alarms',
        'Prepare for post-procedure assessment'
    ],
    defined_responses: {
        'pre-procedure': 'Increase FiO2 to 100% before procedure (will drop during scope). Verify sedation adequate - patient shouldn\'t cough/fight. Check ETT size (needs to accommodate scope).',
        'ett size': 'She has 7.5 ETT. Standard bronchoscope is 5.7mm. Adequate space but will increase resistance. Expect pressure changes.',
        'alarms': 'Set wider alarm limits temporarily - Vt delivery will drop, pressures will change. Low Vt alarm will go off.',
        'during scope': 'SpO2 may drop - have scope withdrawn if SpO2 <85% or patient desaturates significantly. Monitor closely.',
        'complications': 'Watch for: bronchospasm (wheezing, pressure increase), bleeding (blood in ETT), desaturation, arrhythmias. Have suction ready.',
        'post procedure': 'Return FiO2 to baseline gradually. Verify Vt delivery normalized. Assess lung sounds. CXR if any concern for pneumothorax.',
        'bal sample': 'BAL specimen goes to lab in sterile container immediately. This should give us the pathogen for targeted antibiotics.'
    },
    keyTeachingPoints: [
        'Pre-oxygenate with 100% FiO2 before bronchoscopy',
        'ETT size matters - scope takes up space and increases resistance',
        'Expect alarm changes during procedure - widen limits appropriately',
        'Have suction ready and functioning',
        'Watch for complications: hypoxemia, bronchospasm, bleeding, arrhythmias',
        'Be prepared to ask for scope withdrawal if significant desaturation',
        'Post-procedure: return settings, verify normal function, consider CXR',
        'RT is critical team member during bronchoscopy'
    ]
},

'rt-home-vent': {
    id: 'rt-home-vent',
    title: 'Home Vent/Trach Emergency',
    category: 'Respiratory Therapy',
    discipline: 'rt',
    difficulty: 'intermediate',
    patient: {
        name: 'Michael Thompson',
        age: 45,
        sex: 'Male',
        setting: 'Emergency Department',
        acuity: 'Critical',
        chiefComplaint: 'Trach Emergency'
    },
    description: 'EMS brings in Mr. Thompson, a vent-dependent quadriplegic with a trach. His home caregiver called 911 because the trach "came out" and she couldn\'t replace it. He\'s now on BVM via trach stoma.',
    openingStatement: 'Mr. Thompson is being bagged through his trach stoma but it\'s not going well - air is leaking and he\'s desaturating. His trach tube is in the caregiver\'s hand. This is an airway emergency. What do you do?',
    conceptDomains: {
        'Emergency Assessment': ['airway_patency', 'stoma_status', 'equipment_check'],
        'Trach Reinsertion': ['technique', 'backup_plans', 'smaller_tube'],
        'Troubleshooting': ['dislodged_vs_plugged', 'false_passage'],
        'Alternative Airways': ['oral_intubation', 'stoma_intubation'],
        'Chronic Vent Patients': ['home_equipment', 'baseline_settings', 'caregiver_info']
    },
    quickActions: [
        'Assess stoma patency',
        'Attempt trach reinsertion',
        'Have backup plan if can\'t replace',
        'Get home vent settings from caregiver'
    ],
    defined_responses: {
        'stoma assessment': 'Stoma is patent, not bleeding. Some secretions. Recent trach change was 2 weeks ago per caregiver. Mature stoma.',
        'trach tube': 'Shiley 6 cuffless. Tube appears intact. Inner cannula is in place.',
        'reinsertion': 'Lubricate tube, insert at angle then curve down into trachea. Feel for resistance and air movement. If can\'t pass, try smaller size (5 or 4).',
        'successful': 'Trach replaced successfully. Good air movement on bagging. Connect to vent.',
        'if cant replace': 'Options: 1) Smaller trach (sizes available in ED), 2) ETT through stoma (use 6.0 or smaller), 3) Oral intubation (upper airway may be patent in this patient).',
        'false passage': 'If air isn\'t moving or subcutaneous emphysema develops, trach may be in false passage. Remove, bag over stoma with occlusion, try again.',
        'home settings': 'Caregiver reports: LTV vent, AC mode, Vt 600, RR 14, PEEP 5, FiO2 21%. Match these settings.'
    },
    sbarScenario: {
        context: 'You\'ve stabilized the airway and need to update the ED team.',
        callingTo: 'Dr. Martinez (ED Attending)',
        yourRole: 'Respiratory Therapist',
        expectedSBAR: {
            situation: 'I have an update on the trach emergency in Bed 1 - airway is now secure.',
            background: 'Mr. Thompson is a vent-dependent quadriplegic whose trach dislodged at home. His stoma is mature from 2 years of trach.',
            assessment: 'I was able to replace his Shiley 6 without difficulty. He\'s now back on ventilator with his home settings. He\'s saturating 98% and looks comfortable.',
            recommendation: 'I\'d like to get a portable chest X-ray to confirm position. We should also discuss what caused the dislodgement - the caregiver mentioned the ties were loose.'
        },
        physicianResponse: 'Great work. Yes, get the CXR. Let\'s also talk to the caregiver about securing the trach properly before discharge.'
    },
    keyTeachingPoints: [
        'Trach emergencies are true airway emergencies - stay calm, work systematically',
        'Know trach anatomy: mature stomas (>7 days) are more stable for replacement',
        'Keep various sizes available - if the original size won\'t pass, go smaller',
        'ETT can be placed through stoma if trach won\'t pass',
        'Oral intubation is backup - upper airway may be patent in trach patients',
        'False passage = life-threatening - recognize subcutaneous emphysema, poor air movement',
        'Get home settings from caregiver - they know the patient best',
        'Education on trach security prevents repeat emergencies'
    ]
},

'rt-neonatal': {
    id: 'rt-neonatal',
    title: 'Neonatal Respiratory Distress',
    category: 'Respiratory Therapy',
    discipline: 'rt',
    difficulty: 'advanced',
    patient: {
        name: 'Baby Girl Johnson',
        age: 0,
        sex: 'Female',
        setting: 'NICU',
        acuity: 'Critical',
        chiefComplaint: 'Premature with Respiratory Distress'
    },
    description: 'Baby Girl Johnson was just delivered at 28 weeks gestation, birth weight 1100g. She\'s grunting, with nasal flaring and retractions. You\'re the RT called to the delivery for initial stabilization.',
    openingStatement: 'You\'re at the delivery of a 28-weeker. She\'s out, and she\'s working hard to breathe - grunting, flaring, retracting. HR is 130. APGAR at 1 minute was 5. What do you do?',
    conceptDomains: {
        'Initial Stabilization': ['warmth', 'airway', 'breathing', 'nrp'],
        'Premature Assessment': ['gestational_age', 'surfactant_deficiency', 'rds'],
        'Respiratory Support': ['cpap', 'intubation_criteria', 'surfactant'],
        'Settings': ['neonatal_parameters', 'fio2_titration', 'peep'],
        'Ongoing Care': ['blood_gas', 'temperature', 'transport']
    },
    quickActions: [
        'Warm, dry, stimulate',
        'Assess need for PPV',
        'CPAP if breathing but distressed',
        'Prepare for surfactant'
    ],
    defined_responses: {
        'initial': 'Dry, warm, stimulate. She\'s breathing but grunting - this is RDS pattern. Maintain warmth (plastic wrap for premie). Clear airway gently.',
        'assessment': 'Grunting (trying to maintain FRC), nasal flaring, subcostal retractions. SpO2 82% at 3 minutes (target is 70-75% at this point - almost okay). HR 140.',
        'cpap vs intubate': 'She\'s breathing and HR is good. Start CPAP 6 cmH2O. Reserve intubation for: apnea, HR <100 despite PPV, or no improvement on CPAP.',
        'cpap response': 'On CPAP 6, FiO2 40%: SpO2 88% at 10 min, HR 150, still grunting but improving. This is good response.',
        'surfactant': 'At 28 weeks with RDS, she\'ll likely need surfactant. Can give via IMedical SchoolRE (Intubate-Surfactant-Extubate) or LISA (less invasive surfactant administration) if trained.',
        'if intubated': 'ETT size for 28 weeks ≈ 2.5mm. Depth at lip ≈ 7cm. Initial vent: PIP 18-20, PEEP 5, Rate 40-60, iTime 0.3s, FiO2 to target SpO2 88-95%.',
        'blood gas': 'First gas: pH 7.28, CO2 55, PO2 60. Moderate respiratory acidosis expected. Goal: pH >7.25, SpO2 88-95%, permissive hypercapnia okay (CO2 50-60).'
    },
    keyTeachingPoints: [
        'Neonatal resuscitation priorities: Warmth, Airway, Breathing (not Circulation first)',
        '28-weeker has surfactant deficiency - expect RDS',
        'Grunting = baby creating auto-PEEP to maintain FRC',
        'SpO2 targets by age: 60-65% at 1 min, 65-70% at 2 min, 70-75% at 3 min, 75-80% at 4 min, 80-85% at 5 min',
        'CPAP is first-line for spontaneously breathing premie with RDS',
        'Surfactant dramatically improves compliance - be ready to reduce pressures after',
        'Permissive hypercapnia (CO2 50-60) is acceptable in premies - avoid volutrauma',
        'Temperature management is critical in premies - hypothermia increases mortality'
    ],
    relatedContent: [
        { type: 'mechanism', title: 'Surfactant & Premature Lungs', link: '../mechanism/neonatal-lungs-module.html', reason: 'Surfactant deficiency physiology' }
    ]
}

};

// ============================================================================
// SBAR MODULE FOR RT
// ============================================================================

COACHDX_RT_CASES._sbarModule = {
    description: 'SBAR Communication Training for Respiratory Therapists',
    typicalCalls: [
        { from: 'RT', to: 'Physician', scenario: 'Recommending BiPAP' },
        { from: 'RT', to: 'Physician', scenario: 'Reporting vent changes needed' },
        { from: 'RT', to: 'Physician', scenario: 'ABG interpretation and recommendations' },
        { from: 'RT', to: 'RN', scenario: 'Coordinating patient positioning' },
        { from: 'RT', to: 'ICU Team', scenario: 'Weaning readiness assessment' }
    ],
    tips: [
        'Include objective respiratory data (RR, SpO2, ABG values)',
        'State your clinical assessment clearly - RTs are respiratory experts',
        'Have a specific recommendation ready - physicians value RT input',
        'Know the patient\'s baseline for comparison'
    ]
};

// ============================================================================
// EXPORT FOR INTEGRATION
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_RT_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_RT_CASES);
    console.log('RT cases merged into COACHDX_CASES');
} else if (typeof window !== 'undefined') {
    window.COACHDX_RT_CASES = COACHDX_RT_CASES;
    console.log('RT cases available as window.COACHDX_RT_CASES');
}
