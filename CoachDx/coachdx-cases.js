// CoachDx Case Definitions
// This file defines all cases and their learning objectives

const COACHDX_CASES = {
    'chest-pain-acs': {
        id: 'chest-pain-acs',
        title: 'Chest Pain - ACS Evaluation',
        patient: {
            name: 'Maria Santos',
            age: 52,
            sex: 'Female',
            setting: 'Emergency Department',
            acuity: 'High',
            chiefComplaint: 'Chest Pain'
        },
        description: 'A 52-year-old woman presents with chest pain that started 2 hours ago while walking to work. She describes substernal pressure, 7/10, "like an elephant sitting on my chest." Associated symptoms include diaphoresis and nausea. She has a history of hypertension and type 2 diabetes.',
        openingStatement: 'Good morning. I have a patient I\'d like you to help me think through. Mrs. Santos is a 52-year-old woman who presented to the ED with chest pain. She\'s been triaged as high acuity. What would you like to know first?',
        keyDiagnoses: ['STEMI', 'NSTEMI', 'Unstable Angina', 'Stable Angina', 'Aortic Dissection', 'Pulmonary Embolism', 'Pericarditis'],
        conceptDomains: {
            history: ['onset', 'character', 'radiation', 'associated_symptoms', 'risk_factors', 'medications', 'allergies'],
            physicalExam: ['vitals', 'cardiac_exam', 'lung_exam', 'peripheral_pulses', 'jvd'],
            pathophysiology: ['coronary_anatomy', 'acs_spectrum', 'cardiac_biomarkers', 'ecg_changes'],
            workup: ['ecg', 'troponin', 'cxr', 'echo'],
            management: ['antiplatelet', 'anticoagulation', 'reperfusion', 'risk_stratification']
        },
        relatedMechanismDx: ['cardiac-anatomy', 'acs-pathophysiology', 'ecg-interpretation'],
        relatedReasonDx: ['chest-pain-elderly', 'stemi-management']
    },
    
    'acute-dyspnea': {
        id: 'acute-dyspnea',
        title: 'Acute Dyspnea',
        patient: {
            name: 'Robert Chen',
            age: 68,
            sex: 'Male',
            setting: 'Emergency Department',
            acuity: 'High',
            chiefComplaint: 'Shortness of Breath'
        },
        description: 'A 68-year-old man presents with sudden onset shortness of breath that woke him from sleep 3 hours ago. He reports orthopnea and has been sleeping on 3 pillows recently. He has a history of hypertension and had an MI 5 years ago. He ran out of his medications 2 weeks ago.',
        openingStatement: 'Good morning. Mr. Chen is a 68-year-old man who came in by ambulance with acute shortness of breath. He looks uncomfortable and is using accessory muscles. What\'s your approach?',
        keyDiagnoses: ['Acute CHF Exacerbation', 'Pulmonary Embolism', 'COPD Exacerbation', 'Pneumonia', 'Pneumothorax', 'Cardiac Tamponade'],
        conceptDomains: {
            history: ['onset', 'orthopnea', 'pnd', 'edema', 'chest_pain', 'medication_compliance', 'dietary_changes'],
            physicalExam: ['vitals', 'respiratory_exam', 'cardiac_exam', 'peripheral_edema', 'jvd'],
            pathophysiology: ['heart_failure_types', 'fluid_overload', 'pulmonary_edema', 'bnp'],
            workup: ['cxr', 'bnp', 'ecg', 'echo', 'abg'],
            management: ['diuretics', 'oxygen', 'vasodilators', 'inotropes', 'ventilation']
        },
        relatedMechanismDx: ['heart-failure-pathophys', 'pulmonary-edema', 'diuretic-mechanisms'],
        relatedReasonDx: ['chf-exacerbation', 'dyspnea-workup']
    },
    
    'altered-mental-status': {
        id: 'altered-mental-status',
        title: 'Altered Mental Status',
        patient: {
            name: 'Dorothy Williams',
            age: 74,
            sex: 'Female',
            setting: 'Emergency Department',
            acuity: 'High',
            chiefComplaint: 'Confusion'
        },
        description: 'A 74-year-old woman was found confused at home by her daughter. She was fine yesterday but today doesn\'t recognize family members and is speaking incoherently. She has a history of type 2 diabetes, hypertension, and mild dementia at baseline. Her medications include metformin, lisinopril, and donepezil.',
        openingStatement: 'Mrs. Williams is a 74-year-old woman brought in by her daughter who says "Mom isn\'t acting right." She has baseline mild dementia but this is different. Where do you want to start?',
        keyDiagnoses: ['Delirium', 'UTI/Sepsis', 'Hypoglycemia', 'Stroke', 'Medication Toxicity', 'Metabolic Encephalopathy', 'Subdural Hematoma'],
        conceptDomains: {
            history: ['baseline_mental_status', 'timeline', 'recent_illness', 'medications', 'falls', 'urinary_symptoms', 'fever'],
            physicalExam: ['vitals', 'neuro_exam', 'mental_status_exam', 'focal_deficits', 'meningismus'],
            pathophysiology: ['delirium_vs_dementia', 'sepsis_encephalopathy', 'metabolic_causes', 'structural_causes'],
            workup: ['cbc', 'cmp', 'ua', 'blood_glucose', 'ct_head', 'lumbar_puncture'],
            management: ['treat_underlying', 'supportive_care', 'reorientation', 'avoid_sedatives']
        },
        relatedMechanismDx: ['delirium-pathophys', 'sepsis-cascade', 'glucose-metabolism'],
        relatedReasonDx: ['ams-elderly', 'delirium-workup']
    },
    
    'severe-headache': {
        id: 'severe-headache',
        title: 'Severe Headache',
        patient: {
            name: 'James Morrison',
            age: 42,
            sex: 'Male',
            setting: 'Emergency Department',
            acuity: 'High',
            chiefComplaint: 'Worst Headache of Life'
        },
        description: 'A 42-year-old man presents with sudden onset of the "worst headache of my life" that started 2 hours ago while lifting weights at the gym. He rates it 10/10 and describes it as "thunderclap." He has had some neck stiffness and one episode of vomiting. No history of migraines.',
        openingStatement: 'Mr. Morrison is a 42-year-old who says this is the worst headache he\'s ever had. It came on suddenly while he was at the gym. He looks like he\'s in significant pain. What are you thinking?',
        keyDiagnoses: ['Subarachnoid Hemorrhage', 'Meningitis', 'Migraine', 'Tension Headache', 'Hypertensive Emergency', 'Cerebral Venous Thrombosis', 'Cervical Artery Dissection'],
        conceptDomains: {
            history: ['onset_character', 'thunderclap', 'associated_symptoms', 'neck_stiffness', 'photophobia', 'fever', 'trauma', 'exertion'],
            physicalExam: ['vitals', 'neuro_exam', 'fundoscopy', 'meningismus', 'mental_status'],
            pathophysiology: ['aneurysm_rupture', 'meningeal_irritation', 'increased_icp', 'vascular_anatomy'],
            workup: ['ct_head', 'lumbar_puncture', 'cta_head', 'mri_mrv'],
            management: ['blood_pressure_control', 'pain_management', 'neurosurgery_consult', 'nimodipine']
        },
        relatedMechanismDx: ['cerebral-vasculature', 'csf-dynamics', 'hemorrhage-types'],
        relatedReasonDx: ['headache-red-flags', 'sah-workup']
    },
    
    'fever-unknown-origin': {
        id: 'fever-unknown-origin',
        title: 'Fever of Unknown Origin',
        patient: {
            name: 'Patricia Evans',
            age: 58,
            sex: 'Female',
            setting: 'Inpatient',
            acuity: 'Medium',
            chiefComplaint: 'Fever'
        },
        description: 'A 58-year-old woman has had daily fevers up to 39.2°C for 3 weeks. Outpatient workup including CBC, CMP, UA, CXR, and blood cultures have been unrevealing. She reports night sweats, 10-pound weight loss, and fatigue. She has no significant past medical history and takes no medications.',
        openingStatement: 'Mrs. Evans has been admitted for workup of fever of unknown origin. She\'s been febrile for 3 weeks and outpatient workup has been negative. How do you want to approach this systematically?',
        keyDiagnoses: ['Occult Infection', 'Malignancy', 'Autoimmune Disease', 'Drug Fever', 'Endocarditis', 'TB', 'Adult-Onset Still\'s Disease'],
        conceptDomains: {
            history: ['fever_pattern', 'constitutional_symptoms', 'travel', 'exposures', 'sexual_history', 'family_history', 'complete_ros'],
            physicalExam: ['vitals', 'lymph_nodes', 'skin', 'cardiac_exam', 'abdominal_exam', 'joint_exam', 'fundoscopy'],
            pathophysiology: ['infection_categories', 'malignancy_fever', 'autoimmune_mechanisms', 'cytokine_biology'],
            workup: ['blood_cultures', 'ct_imaging', 'echo', 'bone_marrow', 'autoimmune_panel', 'tumor_markers'],
            management: ['empiric_antibiotics', 'biopsy', 'specialist_referral', 'observation']
        },
        relatedMechanismDx: ['fever-pathophys', 'inflammatory-response', 'autoimmune-mechanisms'],
        relatedReasonDx: ['fuo-approach', 'occult-infection']
    },
    
    'acute-kidney-injury': {
        id: 'acute-kidney-injury',
        title: 'Acute Kidney Injury',
        patient: {
            name: 'William Thompson',
            age: 65,
            sex: 'Male',
            setting: 'Inpatient',
            acuity: 'Medium',
            chiefComplaint: 'Rising Creatinine'
        },
        description: 'A 65-year-old man is post-operative day 2 from a hip replacement. His creatinine rose from 1.0 pre-op to 2.4 today. He received IV contrast for a pre-op CT angiogram. He has been oliguric with only 200mL of urine output in the past 12 hours. PMH includes hypertension and takes lisinopril and ibuprofen for arthritis.',
        openingStatement: 'Mr. Thompson\'s creatinine has more than doubled since his hip surgery. The nurse is concerned about his low urine output. How do you approach acute kidney injury?',
        keyDiagnoses: ['Pre-renal AKI', 'ATN', 'Contrast-Induced Nephropathy', 'Obstruction', 'Interstitial Nephritis', 'Post-renal AKI'],
        conceptDomains: {
            history: ['baseline_cr', 'urine_output', 'medications', 'contrast_exposure', 'fluid_status', 'symptoms'],
            physicalExam: ['vitals', 'volume_status', 'bladder_scan', 'edema', 'jvd'],
            pathophysiology: ['prerenal_intrinsic_postrenal', 'atn_mechanisms', 'contrast_nephropathy', 'fena'],
            workup: ['ua_microscopy', 'fena', 'renal_ultrasound', 'fluid_challenge'],
            management: ['volume_resuscitation', 'hold_nephrotoxins', 'dialysis_indications', 'renal_consult']
        },
        relatedMechanismDx: ['renal-physiology', 'gfr-regulation', 'nephrotoxins'],
        relatedReasonDx: ['aki-workup', 'contrast-nephropathy']
    },
    
    'anemia-workup': {
        id: 'anemia-workup',
        title: 'Anemia Workup',
        patient: {
            name: 'Sarah Mitchell',
            age: 45,
            sex: 'Female',
            setting: 'Outpatient',
            acuity: 'Low',
            chiefComplaint: 'Fatigue'
        },
        description: 'A 45-year-old woman presents with 3 months of progressive fatigue. Labs show Hgb 8.2, MCV 68, and ferritin 8. She reports heavy menstrual periods and has been vegetarian for 2 years. She denies GI bleeding but has had some dyspepsia.',
        openingStatement: 'Ms. Mitchell came in for fatigue and her labs show she\'s significantly anemic with a low MCV. Walk me through your approach to anemia.',
        keyDiagnoses: ['Iron Deficiency Anemia', 'GI Blood Loss', 'Menorrhagia', 'Thalassemia', 'Anemia of Chronic Disease', 'B12 Deficiency'],
        conceptDomains: {
            history: ['bleeding_history', 'diet', 'menstrual_history', 'gi_symptoms', 'family_history', 'symptoms'],
            physicalExam: ['vitals', 'pallor', 'koilonychia', 'glossitis', 'rectal_exam', 'stool_guaiac'],
            pathophysiology: ['iron_metabolism', 'mcv_classification', 'hemoglobin_synthesis', 'b12_folate'],
            workup: ['iron_studies', 'reticulocyte', 'peripheral_smear', 'gi_workup', 'hemoglobin_electrophoresis'],
            management: ['iron_replacement', 'treat_underlying', 'transfusion_threshold', 'gi_referral']
        },
        relatedMechanismDx: ['iron-metabolism', 'hemoglobin-synthesis', 'anemia-classification'],
        relatedReasonDx: ['microcytic-anemia', 'gi-bleeding-workup']
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_CASES;
}
