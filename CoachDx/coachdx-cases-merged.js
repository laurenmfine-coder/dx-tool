// ============================================================================
// COACHDX COMPLETE CASE LIBRARY - MERGED
// Automatically loads all profession-specific case files and merges them
// Last updated: January 7, 2026
// ============================================================================
// 
// This file should be loaded AFTER all individual case files:
//   <script src="coachdx-cases-with-guidelines.js"></script>
//   <script src="coachdx-nursing-cases.js"></script>
//   <script src="coachdx-ems-cases.js"></script>
//   <script src="coachdx-rt-cases.js"></script>
//   <script src="coachdx-pt-cases.js"></script>
//   <script src="coachdx-pharmd-cases.js"></script>
//   <script src="coachdx-dental-cases.js"></script>
//   <script src="coachdx-omfs-cases.js"></script>
//   <script src="coachdx-podiatry-cases.js"></script>
//   <script src="coachdx-resident-cases.js"></script>
//   <script src="coachdx-interprofessional-cases.js"></script>
//   <script src="coachdx-specialty-cases.js"></script>
//   <script src="coachdx-allergy-cases.js"></script>
//   <script src="coachdx-cases-merged.js"></script>  <!-- This file last -->
//
// OR: Use this file standalone (it includes all cases inline)
// ============================================================================

// ============================================================================
// INLINE CASES (fallback if individual files not loaded)
// ============================================================================

const INLINE_CASES = {

// ============================================================================
// CARDIOVASCULAR (10 cases)
// ============================================================================

'chest-pain-acs': {
    id: 'chest-pain-acs', 
    title: 'Chest Pain - ACS Evaluation', 
    category: 'Cardiovascular',
    discipline: 'medical',
    patient: { name: 'Maria Santos', age: 52, sex: 'Female', setting: 'Emergency', acuity: 'High', chiefComplaint: 'Chest Pain' },
    description: 'A 52-year-old woman presents with chest pain that started 2 hours ago. Substernal pressure 7/10, diaphoresis, nausea. History of HTN and T2DM.',
    openingStatement: 'Mrs. Santos is a 52-year-old woman with chest pain, triaged as high acuity. What would you like to know first?',
    conceptDomains: {
        'History': ['onset', 'character', 'radiation', 'associated_symptoms', 'risk_factors'],
        'Physical Exam': ['vitals', 'cardiac_exam', 'lung_exam', 'peripheral_pulses'],
        'Pathophysiology': ['coronary_anatomy', 'acs_spectrum', 'biomarkers'],
        'Workup': ['ecg', 'troponin', 'cxr'],
        'Management': ['antiplatelet', 'anticoagulation', 'reperfusion']
    },
    quickActions: ['Tell me about the chest pain', 'What are her vital signs?', 'Any cardiac history?', 'What does the ECG show?'],
    keyTeachingPoints: [
        'ACS spectrum ranges from unstable angina to STEMI',
        'High-sensitivity troponin enables rapid rule-out (0/1h or 0/2h protocols)',
        'HEART score validated for risk stratification'
    ],
    evidenceBase: {
        guidelines: ['AHA/ACC Chest Pain Guideline 2021', 'ESC NSTE-ACS Guidelines 2020'],
        keyEvidence: ['Dual antiplatelet therapy reduces recurrent events', 'Door-to-balloon <90 min for STEMI']
    }
},

'acute-dyspnea-chf': {
    id: 'acute-dyspnea-chf',
    title: 'Acute Dyspnea - CHF',
    category: 'Cardiovascular',
    discipline: 'medical',
    patient: { name: 'William Thompson', age: 75, sex: 'Male', setting: 'Emergency', acuity: 'High' },
    description: '75-year-old man with progressive dyspnea and leg swelling over 1 week. Known HFrEF.',
    openingStatement: 'Mr. Thompson has a history of heart failure and says he can barely walk across the room now. His legs are very swollen. What would you like to assess?',
    conceptDomains: {
        'History': ['dyspnea_progression', 'orthopnea', 'dietary_compliance', 'medication_adherence'],
        'Physical Exam': ['jvd', 'lung_exam', 'edema', 's3_gallop'],
        'Workup': ['bnp', 'cxr', 'echo'],
        'Management': ['diuresis', 'oxygen', 'afterload_reduction']
    },
    quickActions: ['How many pillows to sleep?', 'Check his weight', 'Lung exam findings?', 'Start diuretics?'],
    keyTeachingPoints: [
        'Look for precipitants: dietary indiscretion, medication non-compliance, new arrhythmia',
        'BNP/NT-proBNP helps confirm diagnosis and track response',
        'IV diuretics for acute decompensation'
    ]
},

'atrial-fibrillation': {
    id: 'atrial-fibrillation',
    title: 'New Onset Atrial Fibrillation',
    category: 'Cardiovascular',
    discipline: 'medical',
    patient: { name: 'Patricia Hughes', age: 72, sex: 'Female', setting: 'Emergency', acuity: 'High' },
    description: '72-year-old woman with palpitations and heart rate of 142. Irregularly irregular rhythm.',
    openingStatement: 'Mrs. Hughes feels her heart racing. The monitor shows an irregularly irregular rhythm at 142. She is hemodynamically stable. How would you approach this?',
    conceptDomains: {
        'Assessment': ['hemodynamic_stability', 'duration', 'triggers'],
        'Workup': ['tsh', 'electrolytes', 'echo'],
        'Management': ['rate_control', 'rhythm_control', 'anticoagulation']
    },
    quickActions: ['Is she stable?', 'How long has this been going on?', 'Start rate control?', 'CHADS-VASc score?'],
    keyTeachingPoints: [
        'Rate control first in stable patients',
        'Consider cardioversion if <48 hours',
        'CHADS-VASc guides anticoagulation decisions'
    ]
},

// ============================================================================
// PULMONARY (5 cases)
// ============================================================================

'acute-dyspnea-pe': {
    id: 'acute-dyspnea-pe',
    title: 'Acute Dyspnea - PE',
    category: 'Pulmonary',
    discipline: 'medical',
    patient: { name: 'Sarah Mitchell', age: 45, sex: 'Female', setting: 'Emergency', acuity: 'High' },
    description: '45-year-old woman 2 weeks post-op from knee surgery with sudden dyspnea and tachycardia.',
    openingStatement: 'Ms. Mitchell had knee surgery 2 weeks ago. She suddenly became short of breath this morning. Heart rate is 110, O2 sat 92%. What are you considering?',
    conceptDomains: {
        'Risk Assessment': ['wells_score', 'perc_rule', 'surgical_history'],
        'Workup': ['d_dimer', 'cta_chest', 'echo'],
        'Management': ['anticoagulation', 'thrombolysis', 'embolectomy']
    },
    quickActions: ['Calculate Wells score', 'Order D-dimer?', 'Go straight to CTA?', 'Check right heart strain'],
    keyTeachingPoints: [
        'Post-surgical patients are high risk - consider direct imaging',
        'Massive PE with shock may need thrombolytics or embolectomy',
        'YEARS algorithm can reduce unnecessary imaging'
    ]
},

'copd-exacerbation': {
    id: 'copd-exacerbation',
    title: 'COPD Exacerbation',
    category: 'Pulmonary',
    discipline: 'medical',
    patient: { name: 'Harold Jenkins', age: 68, sex: 'Male', setting: 'Emergency', acuity: 'High' },
    description: '68-year-old man with worsening dyspnea and productive cough for 3 days. 50 pack-year smoking history.',
    openingStatement: 'Mr. Jenkins says he can barely catch his breath. He has COPD and is using his home nebulizer every 2 hours without relief. What would you like to assess?',
    conceptDomains: {
        'History': ['baseline_function', 'sputum_changes', 'triggers'],
        'Physical Exam': ['work_of_breathing', 'wheezing', 'air_movement'],
        'Workup': ['abg', 'cxr', 'sputum_culture'],
        'Management': ['bronchodilators', 'steroids', 'antibiotics', 'bipap']
    },
    quickActions: ['Describe his breathing', 'What does the ABG show?', 'Does he need BiPAP?', 'Start steroids?'],
    keyTeachingPoints: [
        'GOLD criteria guide severity assessment',
        'Systemic steroids reduce treatment failure',
        'Consider NIV early to avoid intubation'
    ]
},

// ============================================================================
// INFECTIOUS DISEASE / SEPSIS (4 cases)
// ============================================================================

'sepsis-uti': {
    id: 'sepsis-uti',
    title: 'Urosepsis',
    category: 'Infectious Disease',
    discipline: 'medical',
    patient: { name: 'Eleanor Davis', age: 82, sex: 'Female', setting: 'Emergency', acuity: 'Critical' },
    description: '82-year-old woman from nursing home with confusion, fever, and hypotension.',
    openingStatement: 'Mrs. Davis was brought from her nursing home because she was confused this morning. Her BP is 88/52 and temp is 102.1°F. The staff says she has a history of UTIs. What do you need to know?',
    conceptDomains: {
        'Assessment': ['qsofa', 'lactate', 'source_identification'],
        'Workup': ['cultures', 'ua', 'imaging'],
        'Management': ['fluid_resuscitation', 'antibiotics', 'vasopressors', 'source_control']
    },
    quickActions: ['Calculate qSOFA', 'Order lactate', 'Start antibiotics?', 'Fluid bolus?'],
    keyTeachingPoints: [
        'Hour-1 bundle: lactate, cultures, antibiotics, fluids',
        'qSOFA identifies high-risk patients',
        'Source control essential when applicable'
    ]
},

'meningitis': {
    id: 'meningitis',
    title: 'Bacterial Meningitis',
    category: 'Infectious Disease',
    discipline: 'medical',
    isCritical: true,
    patient: { name: 'David Park', age: 22, sex: 'Male', setting: 'Emergency', acuity: 'Critical' },
    description: '22-year-old college student with severe headache, fever, neck stiffness, and photophobia.',
    openingStatement: 'David was brought in by his roommate. He has a severe headache, fever, and says the lights hurt his eyes. He seems confused. This is time-sensitive. What do you want to do?',
    conceptDomains: {
        'Assessment': ['meningeal_signs', 'mental_status', 'petechiae'],
        'Workup': ['lp', 'ct_head', 'blood_cultures'],
        'Management': ['empiric_antibiotics', 'steroids', 'isolation']
    },
    quickActions: ['Check for neck stiffness', 'Any rash?', 'LP or CT first?', 'Start antibiotics NOW?'],
    keyTeachingPoints: [
        'Do not delay antibiotics for imaging',
        'Dexamethasone before or with first antibiotic dose',
        'Classic triad: fever, neck stiffness, altered mental status'
    ]
},

// ============================================================================
// ENDOCRINE / METABOLIC (4 cases)
// ============================================================================

'dka': {
    id: 'dka',
    title: 'Diabetic Ketoacidosis',
    category: 'Endocrine',
    discipline: 'medical',
    patient: { name: 'Tyler Rodriguez', age: 28, sex: 'Male', setting: 'Emergency', acuity: 'High' },
    description: '28-year-old man with Type 1 DM presents with nausea, vomiting, and abdominal pain. Blood glucose 485.',
    openingStatement: 'Tyler has Type 1 diabetes. He ran out of insulin 2 days ago and now feels terrible. His glucose is 485 and he looks dehydrated. Walk me through your approach.',
    conceptDomains: {
        'Assessment': ['anion_gap', 'ketones', 'precipitant'],
        'Workup': ['bmp', 'abg', 'beta_hydroxybutyrate'],
        'Management': ['fluids', 'insulin', 'potassium', 'monitoring']
    },
    quickActions: ['Calculate anion gap', 'Check potassium', 'Start insulin drip?', 'How much fluid?'],
    keyTeachingPoints: [
        'Check potassium before starting insulin',
        'Close anion gap, not just glucose',
        'Look for precipitant: infection, MI, medication non-compliance'
    ]
},

'hyponatremia': {
    id: 'hyponatremia',
    title: 'Hyponatremia Workup',
    category: 'Endocrine',
    discipline: 'medical',
    patient: { name: 'Margaret Chen', age: 68, sex: 'Female', setting: 'Hospital', acuity: 'Medium' },
    description: '68-year-old woman with sodium of 122. Mild confusion, no focal neurologic deficits.',
    openingStatement: 'Mrs. Chen was admitted for pneumonia and her morning labs show sodium of 122. She seems a bit confused but oriented. How do you approach this?',
    conceptDomains: {
        'Assessment': ['volume_status', 'osmolality', 'urine_studies'],
        'Workup': ['serum_osm', 'urine_osm', 'urine_sodium'],
        'Management': ['fluid_restriction', 'hypertonic_saline', 'rate_of_correction']
    },
    quickActions: ['Assess volume status', 'Check serum osmolality', 'Urine sodium?', 'Any seizures?'],
    keyTeachingPoints: [
        'Correct slowly: <10 mEq/L per 24 hours to avoid ODS',
        'Volume status determines treatment approach',
        'SIADH vs hypovolemic vs hypervolemic hyponatremia'
    ]
},

// ============================================================================
// GI / HEPATOLOGY (4 cases)
// ============================================================================

'gi-bleed-upper': {
    id: 'gi-bleed-upper',
    title: 'Upper GI Bleed',
    category: 'GI',
    discipline: 'medical',
    isCritical: true,
    patient: { name: 'Robert Walsh', age: 62, sex: 'Male', setting: 'Emergency', acuity: 'Critical' },
    description: '62-year-old man with hematemesis and melena. History of alcohol use and NSAID use.',
    openingStatement: 'Mr. Walsh vomited blood in the waiting room. He says his stools have been black for 2 days. BP is 92/58, HR 118. What do you do first?',
    conceptDomains: {
        'Resuscitation': ['iv_access', 'fluids', 'blood_products'],
        'Risk Stratification': ['glasgow_blatchford', 'rockall'],
        'Management': ['ppi', 'octreotide', 'egd_timing']
    },
    quickActions: ['Two large-bore IVs', 'Type and cross', 'Start PPI drip?', 'Call GI for EGD?'],
    keyTeachingPoints: [
        'Resuscitate before endoscopy',
        'Restrictive transfusion strategy (Hgb <7) unless massive bleed',
        'IV PPI reduces rebleeding after endoscopy'
    ]
},

'acute-pancreatitis': {
    id: 'acute-pancreatitis',
    title: 'Acute Pancreatitis',
    category: 'GI',
    discipline: 'medical',
    patient: { name: 'Jennifer Martinez', age: 45, sex: 'Female', setting: 'Emergency', acuity: 'High' },
    description: '45-year-old woman with severe epigastric pain radiating to back. Lipase 1,850.',
    openingStatement: 'Ms. Martinez describes boring pain going straight through to her back. She is nauseated and the pain is 9/10. Lipase is very elevated. What is your approach?',
    conceptDomains: {
        'Diagnosis': ['atlanta_criteria', 'etiology'],
        'Severity': ['bisap', 'ranson', 'apache'],
        'Management': ['fluids', 'pain_control', 'nutrition', 'ercp_indication']
    },
    quickActions: ['Check for gallstones', 'Alcohol history?', 'Aggressive fluids?', 'When to feed?'],
    keyTeachingPoints: [
        'Most common causes: gallstones and alcohol',
        'Aggressive early fluid resuscitation improves outcomes',
        'Early enteral nutrition is preferred'
    ]
},

// ============================================================================
// NEUROLOGY (4 cases)
// ============================================================================

'stroke-acute': {
    id: 'stroke-acute',
    title: 'Acute Ischemic Stroke',
    category: 'Neurology',
    discipline: 'medical',
    isCritical: true,
    patient: { name: 'George Patterson', age: 72, sex: 'Male', setting: 'Emergency', acuity: 'Critical' },
    description: '72-year-old man with sudden right-sided weakness and slurred speech. Last known well 1 hour ago.',
    openingStatement: 'Mr. Patterson\'s wife says he was fine at breakfast but then couldn\'t lift his right arm and his speech was garbled. That was about an hour ago. Time is brain. What do you do?',
    conceptDomains: {
        'Assessment': ['nihss', 'last_known_well', 'contraindications'],
        'Imaging': ['ct_head', 'cta', 'perfusion'],
        'Management': ['tpa', 'thrombectomy', 'bp_management']
    },
    quickActions: ['Calculate NIHSS', 'Order CT now', 'tPA candidate?', 'Large vessel occlusion?'],
    keyTeachingPoints: [
        'Door-to-needle <60 minutes for tPA',
        'Thrombectomy extends window to 24 hours with favorable imaging',
        'NIHSS predicts outcome and guides treatment'
    ]
},

'altered-mental-status': {
    id: 'altered-mental-status',
    title: 'Altered Mental Status',
    category: 'Neurology',
    discipline: 'medical',
    patient: { name: 'Dorothy Williams', age: 78, sex: 'Female', setting: 'Emergency', acuity: 'High' },
    description: '78-year-old woman found confused at home. Multiple medications, lives alone.',
    openingStatement: 'Mrs. Williams was found by her neighbor wandering in the hallway, confused. She lives alone and takes "a lot of pills." Baseline is alert and oriented. What do you want to know?',
    conceptDomains: {
        'Assessment': ['vitals', 'glucose', 'neuro_exam'],
        'Workup': ['metabolic', 'infectious', 'toxic', 'structural'],
        'Differentials': ['delirium', 'dementia', 'stroke', 'infection']
    },
    quickActions: ['Check glucose', 'Review medications', 'Urine analysis?', 'CT head?'],
    keyTeachingPoints: [
        'AEIOU-TIPS mnemonic for causes',
        'Delirium is a medical emergency until proven otherwise',
        'Always check glucose, review meds, look for infection'
    ]
},

// ============================================================================
// NURSING-SPECIFIC CASES (Sample)
// ============================================================================

'nursing-deteriorating-patient': {
    id: 'nursing-deteriorating-patient',
    title: 'Deteriorating Patient - Early Recognition',
    category: 'Nursing',
    discipline: 'nursing',
    patient: { name: 'Eleanor Mitchell', age: 72, sex: 'Female', setting: 'Medical-Surgical Floor', acuity: 'Medium → High' },
    description: 'Post-op day 2 patient becoming more confused and tachycardic. You are the bedside nurse.',
    openingStatement: 'You are caring for Mrs. Mitchell, POD 2 from hip replacement. She was oriented this morning but now seems confused. Her heart rate has increased from 78 to 102. What do you assess first?',
    conceptDomains: {
        'Assessment': ['vital_signs', 'mental_status', 'pain_assessment'],
        'Recognition': ['early_warning_signs', 'sepsis_screening'],
        'Communication': ['sbar_preparation', 'escalation']
    },
    quickActions: ['Full vital signs', 'Check surgical site', 'Review I&Os', 'Prepare SBAR'],
    keyTeachingPoints: [
        'Trust your instincts - subtle changes matter',
        'Use SBAR for clear communication',
        'Early recognition saves lives'
    ]
},

// ============================================================================
// EMS-SPECIFIC CASES (Sample)
// ============================================================================

'ems-stemi': {
    id: 'ems-stemi',
    title: 'Field STEMI Recognition',
    category: 'EMS',
    discipline: 'ems',
    isCritical: true,
    patient: { name: 'Frank Morrison', age: 58, sex: 'Male', setting: 'Field', acuity: 'Critical' },
    description: 'Dispatched to 58-year-old male with chest pain and diaphoresis at home.',
    openingStatement: 'You arrive to find a 58-year-old man clutching his chest, diaphoretic. His wife says it started 30 minutes ago. What do you do?',
    conceptDomains: {
        'Assessment': ['12_lead', 'vitals', 'history'],
        'Recognition': ['stemi_criteria', 'equivalents'],
        'Management': ['aspirin', 'nitro', 'cath_lab_activation']
    },
    quickActions: ['12-lead ECG', 'Aspirin 324mg', 'IV access', 'Activate cath lab?'],
    keyTeachingPoints: [
        'First medical contact to device time matters',
        'Recognize STEMI equivalents (posterior, de Winter)',
        'Prehospital activation reduces door-to-balloon time'
    ]
},

// ============================================================================
// RT-SPECIFIC CASES (Sample)
// ============================================================================

'rt-copd-bipap': {
    id: 'rt-copd-bipap',
    title: 'COPD - BiPAP Management',
    category: 'Respiratory',
    discipline: 'rt',
    patient: { name: 'Harold Stevens', age: 71, sex: 'Male', setting: 'Emergency', acuity: 'High' },
    description: 'COPD exacerbation with respiratory acidosis. pH 7.28, pCO2 62, using accessory muscles.',
    openingStatement: 'You are called to initiate NIV on Mr. Stevens. ABG shows pH 7.28, pCO2 62. He is working hard to breathe. Walk me through your approach.',
    conceptDomains: {
        'Assessment': ['work_of_breathing', 'abg_interpretation', 'mentation'],
        'Settings': ['ipap', 'epap', 'fio2'],
        'Monitoring': ['response', 'failure_criteria']
    },
    quickActions: ['Initial BiPAP settings?', 'What FiO2?', 'When to recheck ABG?', 'Failure criteria?'],
    keyTeachingPoints: [
        'Start IPAP 10-12, EPAP 4-5 for COPD',
        'Target pH improvement, not just pCO2',
        'Recognize NIV failure early'
    ]
}

};

// ============================================================================
// MERGE ALL CASE SOURCES
// ============================================================================

(function() {
    // Start with inline cases as base
    let merged = {...INLINE_CASES};
    
    // Merge all profession-specific case files if they exist
    const caseSources = [
        'COACHDX_CASES_WITH_GUIDELINES',
        'COACHDX_NURSING_CASES',
        'COACHDX_EMS_CASES', 
        'COACHDX_RT_CASES',
        'COACHDX_PT_CASES',
        'COACHDX_PHARMD_CASES',
        'COACHDX_DENTAL_CASES',
        'COACHDX_OMFS_CASES',
        'COACHDX_PODIATRY_CASES',
        'COACHDX_RESIDENT_CASES',
        'COACHDX_INTERPROFESSIONAL_CASES',
        'COACHDX_SPECIALTY_CASES',
        'COACHDX_ALLERGY_CASES'
    ];
    
    caseSources.forEach(sourceName => {
        if (typeof window[sourceName] !== 'undefined') {
            Object.assign(merged, window[sourceName]);
            console.log(`[CoachDx] Merged ${Object.keys(window[sourceName]).length} cases from ${sourceName}`);
        }
    });
    
    // Set the merged result globally
    window.COACHDX_CASES = merged;
    
    console.log('[CoachDx Cases] Total cases loaded: ' + Object.keys(merged).length);
})();
