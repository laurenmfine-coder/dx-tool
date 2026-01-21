// ============================================================================
// COACHDX INTERPROFESSIONAL CASES - WITH SBAR INTEGRATION
// Nursing, EMS, and RT cases with sbarScenario triggers
// Updated: January 2026
// ============================================================================

const COACHDX_INTERPROFESSIONAL_CASES = {

// ============================================================================
// NURSING CASES
// ============================================================================

'nursing-deteriorating-patient': {
    id: 'nursing-deteriorating-patient',
    title: 'Deteriorating Patient - Early Recognition',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    sbarScenario: 'deteriorating-sepsis',
    sbarTrigger: { when: 'After recognizing vital sign changes', callingTo: 'On-call resident', urgency: 'urgent' },
    patient: { name: 'Eleanor Mitchell', age: 72, sex: 'Female', setting: 'Med-Surg Floor', room: '4215', acuity: 'High', chiefComplaint: 'POD2 Hip Replacement' },
    description: 'Night shift nurse caring for post-op patient who seems "off" at 2 AM rounds.',
    openingStatement: 'Mrs. Mitchell was oriented at 10 PM. Now at 2 AM she\'s confused. Something feels wrong. What do you assess?',
    conceptDomains: { 'Assessment': ['vital_sign_trends', 'mental_status'], 'Communication': ['sbar', 'escalation'] },
    quickActions: ['Full vital signs', 'Compare to baseline', 'Check glucose', 'Review meds'],
    defined_responses: {
        'vitals': 'BP 98/62 (was 128/76), HR 108 (was 78), RR 24, SpO2 91%, Temp 101.2°F',
        'mental status': 'Oriented only to name. Picking at bedsheets. Lethargic.'
    },
    keyTeachingPoints: ['Confusion in elderly often first sign of illness', 'Vital sign trends matter more than single readings', 'Trust your gut']
},

'nursing-postop-hypotension': {
    id: 'nursing-postop-hypotension',
    title: 'Post-op Hypotension - Bleeding?',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    sbarScenario: 'bleeding',
    sbarTrigger: { when: 'After identifying signs of bleeding', callingTo: 'Surgeon on call', urgency: 'emergent' },
    patient: { name: 'Robert Williams', age: 64, sex: 'Male', setting: 'Surgical Floor', room: '3108', acuity: 'High', chiefComplaint: 'Post-op Colectomy' },
    description: 'Patient from PACU with first floor vitals showing BP 88/52.',
    openingStatement: 'Mr. Williams arrived 30 minutes ago. PACU said stable. Vitals: BP 88/52, HR 112. What do you do?',
    conceptDomains: { 'Assessment': ['drain_output', 'surgical_site'], 'Communication': ['sbar', 'surgeon'] },
    quickActions: ['Repeat BP', 'Check drain', 'Assess dressing', 'Review PACU report'],
    defined_responses: {
        'drain': 'JP drain: 150mL serosanguinous in last hour',
        'dressing': 'Dry but abdomen more distended'
    },
    keyTeachingPoints: ['Post-op hypotension is bleeding until proven otherwise', 'Notify surgeon early']
},

'nursing-chest-pain-floor': {
    id: 'nursing-chest-pain-floor',
    title: 'Chest Pain on the Floor',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    sbarScenario: 'chest-pain',
    sbarTrigger: { when: 'After ECG shows STEMI', callingTo: 'Rapid Response', urgency: 'emergent' },
    patient: { name: 'Patricia Adams', age: 68, sex: 'Female', setting: 'Med-Surg', room: '2108', acuity: 'Critical', chiefComplaint: 'New chest pain' },
    description: 'Pneumonia patient with new chest pain.',
    openingStatement: 'Mrs. Adams has chest pressure for 10 minutes. Anxious, diaphoretic. What do you do?',
    conceptDomains: { 'Immediate': ['stay_with_patient', 'ecg'], 'Communication': ['code_stemi'] },
    quickActions: ['Stay with patient', 'Call for help', 'Get ECG stat', 'Oxygen'],
    defined_responses: {
        'ecg': 'ST elevation V1-V4. THIS IS A STEMI!',
        'vitals': 'BP 158/94, HR 98, RR 22, SpO2 93%'
    },
    keyTeachingPoints: ['Never leave chest pain patient alone', 'ECG within 10 minutes', 'STEMI = time critical']
},

'nursing-fall': {
    id: 'nursing-fall',
    title: 'Patient Fall with Injury',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'basic',
    sbarScenario: 'fall',
    sbarTrigger: { when: 'After finding hip fracture signs', callingTo: 'Provider', urgency: 'urgent' },
    patient: { name: 'Evelyn Cooper', age: 82, sex: 'Female', setting: 'Med-Surg', room: '3205', acuity: 'Medium', chiefComplaint: 'Found on floor' },
    description: 'Fall precaution patient found on floor by bathroom.',
    openingStatement: 'You find Mrs. Cooper on the floor, alert, holding her left hip. What\'s your response?',
    conceptDomains: { 'Assessment': ['injury', 'neuro'], 'Documentation': ['incident_report'] },
    quickActions: ['Don\'t move until assessed', 'Check orientation', 'Assess injury', 'Get help'],
    defined_responses: {
        'hip': 'Left leg shortened and externally rotated. Cannot bear weight.',
        'anticoag': 'On warfarin for AFib'
    },
    keyTeachingPoints: ['Don\'t move until assessed', 'Hip fracture signs: shortened, externally rotated', 'Check anticoagulation']
},

'nursing-medication-error': {
    id: 'nursing-medication-error',
    title: 'Medication Error - Hypoglycemia',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    sbarScenario: 'medication',
    sbarTrigger: { when: 'After discovering error', callingTo: 'Provider', urgency: 'emergent' },
    patient: { name: 'George Watson', age: 62, sex: 'Male', setting: 'Medical Floor', room: '4018', acuity: 'High', chiefComplaint: 'Hypoglycemia from insulin error' },
    description: 'Patient received 50 units insulin instead of 5. Glucose now 45.',
    openingStatement: 'Previous nurse gave 50 units instead of 5. Glucose is 45. What do you do?',
    conceptDomains: { 'Immediate': ['treat_hypoglycemia'], 'Communication': ['incident_report'] },
    quickActions: ['Treat NOW', 'Stay with patient', 'Get D50', 'Call for help'],
    defined_responses: {
        'symptoms': 'Diaphoretic, confused, shaky',
        'treatment': 'D50 25mL IV push immediately'
    },
    keyTeachingPoints: ['Treat hypoglycemia immediately', 'Report for system improvement']
},

'nursing-respiratory-decline': {
    id: 'nursing-respiratory-decline',
    title: 'Respiratory Decline - COPD',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    sbarScenario: 'deteriorating-resp',
    sbarTrigger: { when: 'After identifying worsening status', callingTo: 'Provider and RT', urgency: 'urgent' },
    patient: { name: 'William Turner', age: 68, sex: 'Male', setting: 'Medical Floor', room: '3102', acuity: 'High', chiefComplaint: 'COPD Exacerbation' },
    description: 'COPD patient now needing 6L O2 to maintain SpO2 88%.',
    openingStatement: 'Mr. Turner was stable on 2L. Now on 6L and only 88%. Using accessory muscles. What\'s happening?',
    conceptDomains: { 'Assessment': ['work_of_breathing', 'abg'], 'Escalation': ['bipap'] },
    quickActions: ['Full respiratory assessment', 'Get ABG', 'Call RT', 'Notify provider'],
    defined_responses: {
        'abg': 'pH 7.32, pCO2 58, PaO2 62',
        'vitals': 'RR 28, SpO2 88% on 6L'
    },
    keyTeachingPoints: ['COPD target SpO2: 88-92%', 'Rising CO2 = fatigue', 'BiPAP can prevent intubation']
},

'nursing-new-afib': {
    id: 'nursing-new-afib',
    title: 'New Onset AFib',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    sbarScenario: 'deteriorating-cardiac',
    sbarTrigger: { when: 'After confirming AFib on ECG', callingTo: 'Provider', urgency: 'urgent' },
    patient: { name: 'Raymond Chen', age: 69, sex: 'Male', setting: 'Medical Floor', room: '4105', acuity: 'Medium', chiefComplaint: 'Pneumonia with new AFib' },
    description: 'Patient with HR 142, irregularly irregular. No prior AFib.',
    openingStatement: 'Monitor shows HR 142, irregular. He feels "fluttery." What do you assess?',
    conceptDomains: { 'Assessment': ['stability'], 'Interventions': ['ecg'] },
    quickActions: ['Assess stability', 'Get 12-lead', 'Check SpO2', 'Notify provider'],
    defined_responses: {
        'vitals': 'BP 118/74, HR 142 irregular, SpO2 94%',
        'ecg': 'AFib with RVR at 138'
    },
    keyTeachingPoints: ['Unstable = hypotension, altered, chest pain', 'Look for underlying cause']
},

'nursing-transfusion-reaction': {
    id: 'nursing-transfusion-reaction',
    title: 'Blood Transfusion Reaction',
    category: 'Nursing',
    discipline: 'nursing',
    difficulty: 'intermediate',
    sbarScenario: 'deteriorating-sepsis',
    sbarTrigger: { when: 'After stopping transfusion', callingTo: 'Provider and Blood Bank', urgency: 'urgent' },
    patient: { name: 'Thomas Brown', age: 71, sex: 'Male', setting: 'Med-Surg', room: '2215', acuity: 'High', chiefComplaint: 'Transfusion reaction' },
    description: '15 minutes into 2nd unit of PRBCs, develops fever and rigors.',
    openingStatement: 'Mr. Brown is having rigors during his transfusion. Temp was 98.6 before. What do you do?',
    conceptDomains: { 'Immediate': ['stop_transfusion', 'maintain_iv'], 'Assessment': ['vital_signs'] },
    quickActions: ['STOP transfusion', 'Keep IV open with NS', 'Stay with patient', 'Get vitals'],
    defined_responses: {
        'vitals': 'Temp 101.8°F, BP 142/88, HR 108',
        'symptoms': 'Rigors, fever, nausea, mild back pain'
    },
    keyTeachingPoints: ['Any reaction: STOP immediately', 'Save blood bag for blood bank', 'Stay with patient']
},

// ============================================================================
// EMS CASES
// ============================================================================

'ems-stemi': {
    id: 'ems-stemi',
    title: 'Field STEMI Recognition',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    sbarScenario: 'ems-stemi',
    sbarTrigger: { when: 'After 12-lead shows STEMI', callingTo: 'Medical Control/ED', urgency: 'emergent' },
    patient: { name: 'Thomas Reilly', age: 58, sex: 'Male', setting: 'Field', room: 'Field', acuity: 'Critical', chiefComplaint: 'Crushing chest pain' },
    description: '58yo male with crushing chest pain x 30 minutes.',
    openingStatement: 'Mr. Reilly is pale, diaphoretic, crushing chest pain to jaw. Started 30 minutes ago. Approach?',
    conceptDomains: { 'Assessment': ['12_lead'], 'Interventions': ['aspirin', 'transmission'] },
    quickActions: ['12-lead ECG', 'Aspirin 324mg', 'IV access', 'Transmit ECG'],
    defined_responses: {
        '12lead': 'ST elevation II, III, aVF - INFERIOR STEMI',
        'vitals': 'BP 145/90, HR 88, SpO2 96%'
    },
    keyTeachingPoints: ['12-lead on ALL chest pain', 'Transmit for cath lab activation', 'Time is muscle']
},

'ems-stroke': {
    id: 'ems-stroke',
    title: 'Stroke Alert',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    sbarScenario: 'ems-stroke',
    sbarTrigger: { when: 'After positive stroke screen', callingTo: 'Stroke center', urgency: 'emergent' },
    patient: { name: 'Linda Martinez', age: 67, sex: 'Female', setting: 'Field', room: 'Field', acuity: 'Critical', chiefComplaint: 'Weakness and slurred speech' },
    description: '67yo female with sudden right-sided weakness and slurred speech.',
    openingStatement: 'Mrs. Martinez has right arm drift, facial droop, slurred speech. Husband says fine an hour ago. What do you need?',
    conceptDomains: { 'Assessment': ['lkw', 'fast'], 'Interventions': ['glucose'] },
    quickActions: ['Get exact LKW', 'Check glucose', 'FAST exam', 'Alert stroke center'],
    defined_responses: {
        'lkw': 'Last known well: 9:15 AM',
        'glucose': 'Blood glucose 118'
    },
    keyTeachingPoints: ['LKW time is critical', 'Check glucose to rule out mimic', 'Pre-notify allows team activation']
},

'ems-trauma': {
    id: 'ems-trauma',
    title: 'MVC Trauma',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    sbarScenario: 'ems-trauma',
    sbarTrigger: { when: 'After assessment reveals significant mechanism', callingTo: 'Trauma center', urgency: 'emergent' },
    patient: { name: 'Kevin Sullivan', age: 34, sex: 'Male', setting: 'Field', room: 'Field', acuity: 'Critical', chiefComplaint: 'MVC, unrestrained' },
    description: 'Unrestrained driver, T-bone collision with intrusion.',
    openingStatement: 'T-bone MVC. Unrestrained driver, significant intrusion. Alert, chest and belly pain. Approach?',
    conceptDomains: { 'Assessment': ['mechanism', 'primary_survey'], 'Communication': ['trauma_alert'] },
    quickActions: ['C-spine', 'Primary survey', 'Assess mechanism', 'Trauma decision'],
    defined_responses: {
        'mechanism': 'T-bone at 40mph, 12 inches intrusion, unrestrained',
        'primary': 'HR 115, BP 100/70. LUQ tender with guarding.'
    },
    keyTeachingPoints: ['Mechanism matters', 'Tachycardia + borderline BP = early shock', 'Don\'t delay transport']
},

'ems-respiratory': {
    id: 'ems-respiratory',
    title: 'Severe Respiratory Distress',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    sbarScenario: 'ems-general',
    sbarTrigger: { when: 'After initial treatment', callingTo: 'ED', urgency: 'urgent' },
    patient: { name: 'Barbara Nelson', age: 72, sex: 'Female', setting: 'Field', room: 'Field', acuity: 'High', chiefComplaint: 'Can\'t breathe' },
    description: '72yo with CHF/COPD history. Pink frothy sputum.',
    openingStatement: 'Mrs. Nelson tripoding, 2-word sentences, pink frothy sputum, bilateral crackles. What\'s your diagnosis?',
    conceptDomains: { 'Differential': ['chf_vs_copd'], 'Interventions': ['cpap', 'nitro'] },
    quickActions: ['CPAP', 'Nitro if BP allows', 'Position upright', 'IV'],
    defined_responses: {
        'vitals': 'BP 190/110, HR 120, RR 32, SpO2 82%',
        'lungs': 'Bilateral crackles to apices, JVD present'
    },
    keyTeachingPoints: ['Pink frothy sputum = pulmonary edema', 'CPAP is first-line for CHF', 'Don\'t treat CHF like COPD']
},

'ems-anaphylaxis': {
    id: 'ems-anaphylaxis',
    title: 'Anaphylaxis',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    sbarScenario: 'ems-general',
    sbarTrigger: { when: 'After epinephrine given', callingTo: 'ED', urgency: 'emergent' },
    patient: { name: 'Marcus Johnson', age: 28, sex: 'Male', setting: 'Field', room: 'Field', acuity: 'Critical', chiefComplaint: 'Allergic reaction' },
    description: '28yo with peanut allergy ate Thai food. Throat closing.',
    openingStatement: 'Mr. Johnson has hives, swollen lips, throat closing, stridor. First action?',
    conceptDomains: { 'Interventions': ['epinephrine', 'airway'] },
    quickActions: ['IM Epinephrine NOW', 'High-flow O2', 'IV access', 'Monitor airway'],
    defined_responses: {
        'vitals': 'BP 80/50, HR 130, SpO2 88%',
        'after_epi': 'After epi: BP 95/60, stridor improving'
    },
    keyTeachingPoints: ['Epinephrine IM first - don\'t delay', 'Give epi before IV if crashing', 'May need repeat doses']
},

'ems-altered-mental-status': {
    id: 'ems-altered-mental-status',
    title: 'Altered Mental Status',
    category: 'EMS',
    discipline: 'ems',
    difficulty: 'intermediate',
    sbarScenario: 'ems-general',
    sbarTrigger: { when: 'After glucose check', callingTo: 'ED', urgency: 'urgent' },
    patient: { name: 'Dorothy Phillips', age: 79, sex: 'Female', setting: 'Field', room: 'Field', acuity: 'High', chiefComplaint: 'Found confused' },
    description: '79yo grandmother confused and not acting right.',
    openingStatement: 'Mrs. Phillips is oriented only to name. Family says not her baseline. Differential?',
    conceptDomains: { 'Assessment': ['glucose', 'baseline'], 'Differential': ['aeiou_tips'] },
    quickActions: ['Check glucose', 'History from family', 'Neuro exam', 'Check meds'],
    defined_responses: {
        'glucose': 'Blood glucose: 45',
        'after_d10': 'After D10: alert, answering questions'
    },
    keyTeachingPoints: ['Check glucose on ALL AMS', 'Family is best for baseline', 'Treat reversible causes']
},

// ============================================================================
// RESPIRATORY THERAPY CASES
// ============================================================================

'rt-bipap-recommendation': {
    id: 'rt-bipap-recommendation',
    title: 'BiPAP Recommendation',
    category: 'RT',
    discipline: 'rt',
    difficulty: 'intermediate',
    sbarScenario: 'rt-bipap',
    sbarTrigger: { when: 'After ABG review', callingTo: 'Provider', urgency: 'urgent' },
    patient: { name: 'Frank Kowalski', age: 68, sex: 'Male', setting: 'ED', room: 'ED Bed 12', acuity: 'High', chiefComplaint: 'COPD Exacerbation' },
    description: 'COPD patient with hypercapnic respiratory failure.',
    openingStatement: 'Mr. Kowalski has COPD exacerbation. ABG: pH 7.28, CO2 68. On 4L with SpO2 89%, working hard. Your recommendation?',
    conceptDomains: { 'Assessment': ['abg', 'work_of_breathing'], 'Indication': ['nippv_criteria'] },
    quickActions: ['Review ABG', 'Assess WOB', 'Check contraindications', 'Formulate recommendation'],
    defined_responses: {
        'abg': 'pH 7.28, PaCO2 68, PaO2 58',
        'settings': 'Recommend IPAP 10, EPAP 5, FiO2 to keep SpO2 88-92%'
    },
    keyTeachingPoints: ['BiPAP reduces WOB and CO2', 'Patient must protect airway', 'Start IPAP 10/EPAP 5']
},

'rt-vent-settings': {
    id: 'rt-vent-settings',
    title: 'Ventilator Setting Change',
    category: 'RT',
    discipline: 'rt',
    difficulty: 'advanced',
    sbarScenario: 'rt-vent',
    sbarTrigger: { when: 'After identifying problem', callingTo: 'Intensivist', urgency: 'urgent' },
    patient: { name: 'Harold Jensen', age: 59, sex: 'Male', setting: 'ICU', room: 'ICU 4', acuity: 'Critical', chiefComplaint: 'ARDS' },
    description: 'ARDS patient with increasing peak pressures.',
    openingStatement: 'Mr. Jensen has ARDS. Peak pressures now 42 (were 35). ABG pH 7.30, CO2 52. Recommendation?',
    conceptDomains: { 'Assessment': ['compliance', 'plateau'], 'Lung Protection': ['low_vt'] },
    quickActions: ['Check plateau', 'Assess for plug', 'Review compliance', 'Calculate IBW'],
    defined_responses: {
        'plateau': 'Plateau 38 (goal <30)',
        'compliance': 'Static compliance 25, down from 35'
    },
    keyTeachingPoints: ['ARDSNet: 6 mL/kg IBW, plateau <30', 'High peak + normal plateau = resistance', 'Driving pressure <15']
},

'rt-weaning': {
    id: 'rt-weaning',
    title: 'Weaning Assessment',
    category: 'RT',
    discipline: 'rt',
    difficulty: 'advanced',
    sbarScenario: 'rt-wean',
    sbarTrigger: { when: 'After completing assessment', callingTo: 'Provider', urgency: 'routine' },
    patient: { name: 'Carol Thompson', age: 63, sex: 'Female', setting: 'ICU', room: 'ICU 7', acuity: 'Medium', chiefComplaint: 'Post-op respiratory failure improving' },
    description: 'Post-surgical patient improving, assess extubation readiness.',
    openingStatement: 'Mrs. Thompson on PSV 10/5, FiO2 30%. Assess extubation readiness.',
    conceptDomains: { 'Assessment': ['rsbi', 'nif', 'mental_status'], 'Criteria': ['sbt_protocol'] },
    quickActions: ['Perform SBT', 'Calculate RSBI', 'Check NIF', 'Assess cuff leak'],
    defined_responses: {
        'rsbi': 'RSBI on CPAP 5: 45 (goal <105)',
        'nif': 'NIF: -40 (goal more negative than -25)'
    },
    keyTeachingPoints: ['RSBI = RR/Vt in liters, want <105', 'NIF more negative than -25', 'Must follow commands']
},

'rt-abg-interpretation': {
    id: 'rt-abg-interpretation',
    title: 'ABG Interpretation',
    category: 'RT',
    discipline: 'rt',
    difficulty: 'intermediate',
    sbarScenario: 'rt-vent',
    sbarTrigger: { when: 'After interpreting ABG', callingTo: 'Provider', urgency: 'urgent' },
    patient: { name: 'Richard Lee', age: 55, sex: 'Male', setting: 'ICU', room: 'ICU 2', acuity: 'High', chiefComplaint: 'Pneumonia' },
    description: 'Intubated pneumonia patient with new ABG abnormalities.',
    openingStatement: 'Mr. Lee intubated for pneumonia. ABG: pH 7.25, PaCO2 62, PaO2 65. What\'s going on?',
    conceptDomains: { 'Interpretation': ['acid_base', 'ventilation'], 'Correction': ['minute_ventilation'] },
    quickActions: ['Interpret ABG', 'Identify problem', 'Recommend changes', 'Identify cause'],
    defined_responses: {
        'interpretation': 'Acute respiratory acidosis with hypoxemia',
        'options': 'Increase RR to 18-20 or increase Vt if plateau allows'
    },
    keyTeachingPoints: ['pH + CO2 opposite = respiratory process', 'Increase MV to blow off CO2', 'P/F ratio for ARDS']
}

};

// ============================================================================
// MERGE WITH EXISTING CASES
// ============================================================================

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_INTERPROFESSIONAL_CASES);
    console.log('Interprofessional cases merged');
} else if (typeof window !== 'undefined') {
    window.COACHDX_INTERPROFESSIONAL_CASES = COACHDX_INTERPROFESSIONAL_CASES;
}
