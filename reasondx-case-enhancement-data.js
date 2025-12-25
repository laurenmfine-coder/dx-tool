/**
 * ============================================================================
 * REASONDX CASE ENHANCEMENT DATA
 * ============================================================================
 * Version: 1.0 | December 2024
 * 
 * This module provides diagnosis-based enhancement data for cases.
 * When a case doesn't have explicit pmhConditions, surgicalHistory, etc.,
 * this module can generate appropriate data based on the diagnosis.
 * 
 * The system uses this to:
 * 1. Generate realistic PMH conditions based on diagnosis
 * 2. Add relevant family history conditions based on chief complaint
 * 3. Provide age/gender-appropriate screening data
 * 4. Create plausible surgical histories
 * ============================================================================
 */

const CaseEnhancementData = {

    // ========================================================================
    // DIAGNOSIS TO PMH CONDITIONS MAPPING
    // ========================================================================
    // Maps diagnosis keywords to likely PMH conditions the patient would have
    diagnosisToPMH: {
        // Cardiac diagnoses
        "STEMI": ["hypertension", "hyperlipidemia", "diabetes_type2", "smoking"],
        "NSTEMI": ["hypertension", "hyperlipidemia", "diabetes_type2", "cad"],
        "ACS": ["hypertension", "hyperlipidemia", "diabetes_type2"],
        "Unstable Angina": ["hypertension", "hyperlipidemia", "cad"],
        "Heart Failure": ["hypertension", "cad", "diabetes_type2", "afib"],
        "CHF": ["hypertension", "cad", "diabetes_type2"],
        "ADHF": ["chf", "cad", "hypertension", "ckd"],
        "Atrial Fibrillation": ["hypertension", "sleep_apnea"],
        "AFib with RVR": ["hypertension", "hyperthyroidism"],
        "Aortic Stenosis": ["hypertension", "cad"],
        "Aortic Dissection": ["hypertension", "marfan"],
        "Pericarditis": [],
        "Myocarditis": [],
        "Endocarditis": ["ivdu", "prosthetic_valve"],
        "Syncope": ["cad", "arrhythmia"],
        
        // Pulmonary diagnoses
        "Pneumonia": ["copd", "diabetes_type2", "smoking"],
        "CAP": ["copd", "smoking", "alcohol_use"],
        "COPD Exacerbation": ["copd", "smoking", "chf"],
        "Asthma Exacerbation": ["asthma", "allergies", "gerd"],
        "Pulmonary Embolism": ["dvt_history", "cancer", "immobility"],
        "PE": ["prior_dvt", "recent_surgery", "malignancy"],
        "ARDS": ["sepsis", "pneumonia"],
        
        // GI diagnoses
        "Appendicitis": [],
        "Cholecystitis": ["gallstones", "obesity"],
        "Pancreatitis": ["gallstones", "alcohol_use", "hypertriglyceridemia"],
        "Diverticulitis": ["constipation"],
        "SBO": ["prior_abdominal_surgery", "hernia"],
        "GI Bleed": ["nsaid_use", "alcohol_use", "liver_disease", "pud"],
        "UGIB": ["pud", "nsaid_use", "alcohol_use", "liver_cirrhosis"],
        "LGIB": ["diverticulosis", "hemorrhoids"],
        "PUD": ["nsaid_use", "h_pylori"],
        "Cirrhosis": ["alcohol_use", "hepatitis_c", "nafld"],
        "Hepatic Encephalopathy": ["cirrhosis", "alcohol_use"],
        
        // Neurological diagnoses
        "Stroke": ["hypertension", "afib", "diabetes_type2", "hyperlipidemia", "smoking"],
        "CVA": ["hypertension", "afib", "diabetes_type2", "cad"],
        "TIA": ["hypertension", "afib", "carotid_stenosis"],
        "ICH": ["hypertension", "anticoagulation"],
        "SAH": ["hypertension", "smoking"],
        "Meningitis": [],
        "Encephalitis": [],
        "Seizure": ["epilepsy", "alcohol_use", "prior_stroke"],
        "Status Epilepticus": ["epilepsy", "medication_noncompliance"],
        "Migraine": ["migraine_history", "anxiety"],
        "Delirium": ["dementia", "uti", "polypharmacy"],
        "Altered Mental Status": ["diabetes_type2", "ckd", "dementia"],
        
        // Infectious diagnoses
        "Sepsis": ["diabetes_type2", "immunocompromised", "ckd"],
        "Septic Shock": ["diabetes_type2", "malignancy", "immunocompromised"],
        "UTI": ["diabetes_type2", "bph", "prior_uti", "urinary_catheter"],
        "Pyelonephritis": ["diabetes_type2", "nephrolithiasis", "prior_uti"],
        "Cellulitis": ["diabetes_type2", "venous_insufficiency", "lymphedema"],
        "Osteomyelitis": ["diabetes_type2", "pvd"],
        "Epidural Abscess": ["ivdu", "diabetes_type2", "recent_spinal_procedure"],
        "Vertebral Osteomyelitis": ["ivdu", "diabetes_type2", "recent_bacteremia"],
        
        // Endocrine diagnoses
        "DKA": ["diabetes_type1", "insulin_use"],
        "HHS": ["diabetes_type2"],
        "Hypoglycemia": ["diabetes_type2", "insulin_use"],
        "Thyroid Storm": ["hyperthyroidism", "graves_disease"],
        "Myxedema Coma": ["hypothyroidism"],
        "Adrenal Crisis": ["adrenal_insufficiency", "chronic_steroid_use"],
        
        // Renal diagnoses
        "AKI": ["ckd", "diabetes_type2", "hypertension", "nsaid_use"],
        "CKD": ["diabetes_type2", "hypertension"],
        "ESRD": ["diabetes_type2", "hypertension", "dialysis"],
        "Nephrolithiasis": ["gout", "prior_kidney_stones", "dehydration"],
        "Rhabdomyolysis": ["statin_use", "alcohol_use", "seizure"],
        
        // MSK/Back Pain diagnoses
        "Cauda Equina": ["disc_herniation", "spinal_stenosis"],
        "Lumbar Radiculopathy": ["degenerative_disc_disease", "obesity"],
        "Compression Fracture": ["osteoporosis", "chronic_steroid_use"],
        "Spinal Stenosis": ["degenerative_arthritis"],
        
        // Hematologic diagnoses
        "DVT": ["prior_dvt", "cancer", "immobility", "oral_contraceptives"],
        "PE": ["prior_dvt", "cancer", "recent_surgery"],
        "Sickle Cell Crisis": ["sickle_cell_disease"],
        "TTP": [],
        "HIT": ["recent_heparin"],
        "DIC": ["sepsis", "malignancy"],
        
        // Toxicologic
        "Overdose": ["depression", "substance_use", "chronic_pain"],
        "Alcohol Withdrawal": ["alcohol_use_disorder"],
        "Opioid Overdose": ["opioid_use_disorder", "chronic_pain"],
        
        // Other
        "Anaphylaxis": ["allergies", "prior_anaphylaxis"],
        "Gout": ["gout", "ckd", "diuretic_use"],
        "Testicular Torsion": []
    },

    // ========================================================================
    // CHIEF COMPLAINT TO RELEVANT FAMILY HISTORY
    // ========================================================================
    chiefComplaintToFamilyHistory: {
        "chest pain": ["coronary_artery_disease", "mi_before_55", "sudden_cardiac_death", "diabetes_type2", "hyperlipidemia"],
        "shortness of breath": ["coronary_artery_disease", "cardiomyopathy", "asthma", "copd"],
        "abdominal pain": ["colon_cancer", "crohns_disease", "gallstones", "pancreatitis"],
        "headache": ["migraine", "stroke", "brain_aneurysm", "subarachnoid_hemorrhage"],
        "syncope": ["sudden_cardiac_death", "arrhythmia", "long_qt", "brugada"],
        "back pain": ["ankylosing_spondylitis", "osteoporosis", "aortic_aneurysm"],
        "leg swelling": ["dvt_pe", "heart_failure"],
        "palpitations": ["sudden_cardiac_death", "afib", "wpw", "cardiomyopathy"],
        "altered mental status": ["diabetes_type2", "stroke", "dementia", "alzheimers"],
        "fever": [],
        "cough": ["asthma", "copd", "lung_cancer", "tb"],
        "weakness": ["stroke", "als", "ms", "muscular_dystrophy"],
        "dizziness": ["stroke", "arrhythmia", "vestibular_disorders"],
        "confusion": ["dementia", "alzheimers", "stroke"],
        "blood in stool": ["colon_cancer", "ibd", "colon_polyps"],
        "vomiting blood": ["liver_disease", "varices"],
        "urinary symptoms": ["prostate_cancer", "kidney_disease"],
        "weight loss": ["cancer", "diabetes_type1", "hyperthyroidism"]
    },

    // ========================================================================
    // DIAGNOSIS TO SURGICAL HISTORY
    // ========================================================================
    diagnosisToSurgicalHistory: {
        "SBO": ["appendectomy", "cholecystectomy", "hernia_repair"],
        "Cholecystitis": [],  // Usually hasn't had cholecystectomy yet
        "Post-op Complications": ["recent_surgery"],
        "Incisional Hernia": ["prior_abdominal_surgery"],
        "CABG complication": ["cabg"],
        "Prosthetic Valve Endocarditis": ["valve_replacement"],
        "Stent Thrombosis": ["pci_stent"],
        "Joint Replacement Infection": ["hip_replacement", "knee_replacement"],
        "Compression Fracture": ["laminectomy", "spinal_fusion"]
    },

    // ========================================================================
    // USPSTF SCREENING DATA BY AGE/GENDER
    // ========================================================================
    generateScreeningData: function(age, gender) {
        const data = {};
        const maleGender = gender === 'M' || gender === 'male';
        const femaleGender = gender === 'F' || gender === 'female';
        
        // Colonoscopy (45-75)
        if (age >= 45 && age <= 75) {
            const yearsAgo = Math.floor(Math.random() * 8) + 1;
            data.colonoscopy = {
                upToDate: yearsAgo <= 10,
                lastDone: `${yearsAgo} years ago`,
                finding: yearsAgo <= 10 ? "normal, no polyps" : null
            };
        }
        
        // Mammogram (40-74, female)
        if (femaleGender && age >= 40 && age <= 74) {
            const monthsAgo = Math.floor(Math.random() * 18) + 6;
            data.mammogram = {
                upToDate: monthsAgo <= 24,
                lastDone: monthsAgo <= 12 ? "last year" : `${Math.floor(monthsAgo/12)} years ago`,
                finding: "normal, BI-RADS 1"
            };
        }
        
        // Pap smear (21-65, female)
        if (femaleGender && age >= 21 && age <= 65) {
            const yearsAgo = Math.floor(Math.random() * 4) + 1;
            data.papSmear = {
                upToDate: yearsAgo <= 3,
                lastDone: `${yearsAgo} years ago`,
                finding: "normal"
            };
        }
        
        // PSA (55-69, male) - controversial
        if (maleGender && age >= 55 && age <= 69) {
            data.psa = {
                discussed: true,
                lastValue: (Math.random() * 2 + 0.5).toFixed(1),
                decision: "elected to screen"
            };
        }
        
        // AAA screening (65-75, male with smoking history)
        if (maleGender && age >= 65 && age <= 75) {
            data.aaaScreening = {
                upToDate: true,
                result: "normal, aorta < 3cm"
            };
        }
        
        // DEXA (65+, female)
        if (femaleGender && age >= 65) {
            data.dexa = {
                upToDate: true,
                result: "T-score -1.2 (osteopenia)",
                lastDone: "2 years ago"
            };
        }
        
        // Diabetes screening (35-70)
        if (age >= 35 && age <= 70) {
            data.diabetesScreening = {
                upToDate: true,
                lastA1c: "5.6%",
                lastFasting: "98 mg/dL"
            };
        }
        
        // Lipid screening (40-75)
        if (age >= 40 && age <= 75) {
            data.lipidPanel = {
                upToDate: true,
                lastDone: "within past year"
            };
        }
        
        // Vaccinations
        data.vaccines = {
            flu: { upToDate: true, lastDone: "this season" },
            covid: { upToDate: true, lastBooster: "within past year" },
            tdap: { upToDate: true, lastDone: "5 years ago" }
        };
        
        if (age >= 50) {
            data.vaccines.shingrix = { upToDate: true, completed: "both doses" };
        }
        
        if (age >= 65) {
            data.vaccines.pneumonia = { upToDate: true, type: "PCV20" };
        }
        
        // Hepatitis C (18-79, one-time)
        if (age >= 18 && age <= 79) {
            data.hepCScreening = {
                completed: true,
                result: "negative"
            };
        }
        
        // HIV (15-65)
        if (age >= 15 && age <= 65) {
            data.hivScreening = {
                completed: true,
                result: "negative"
            };
        }
        
        return data;
    },

    // ========================================================================
    // GET ENHANCEMENT DATA FOR A CASE
    // ========================================================================
    /**
     * Get enhancement data for a case based on its diagnosis
     * @param {Object} variant - The case variant object
     * @returns {Object} Enhancement data including pmhConditions, familyHistory, screeningData
     */
    getEnhancementForCase: function(variant) {
        const diagnosis = variant.actualDiagnosis?.name || '';
        const chiefComplaint = (variant.chiefComplaint || '').toLowerCase();
        const age = variant.age || variant.patientProfile?.age || 55;
        const gender = variant.gender || variant.patientProfile?.gender || 'M';
        
        // Find matching PMH conditions
        let pmhConditions = [];
        for (const [diagKey, conditions] of Object.entries(this.diagnosisToPMH)) {
            if (diagnosis.toLowerCase().includes(diagKey.toLowerCase())) {
                pmhConditions = [...new Set([...pmhConditions, ...conditions])];
            }
        }
        
        // Find relevant family history
        let familyHistoryRelevant = [];
        for (const [ccKey, conditions] of Object.entries(this.chiefComplaintToFamilyHistory)) {
            if (chiefComplaint.includes(ccKey)) {
                familyHistoryRelevant = [...new Set([...familyHistoryRelevant, ...conditions])];
            }
        }
        
        // Find surgical history
        let surgicalHistory = [];
        for (const [diagKey, surgeries] of Object.entries(this.diagnosisToSurgicalHistory)) {
            if (diagnosis.toLowerCase().includes(diagKey.toLowerCase())) {
                surgicalHistory = [...new Set([...surgicalHistory, ...surgeries])];
            }
        }
        
        // Generate screening data
        const screeningData = this.generateScreeningData(age, gender);
        
        return {
            pmhConditions,
            familyHistoryRelevant,
            surgicalHistory,
            screeningData,
            visitHistory: {
                specialists: [],
                erVisits: [],
                urgentCare: [],
                hospitalizations: []
            }
        };
    },

    // ========================================================================
    // MERGE ENHANCEMENT INTO VARIANT
    // ========================================================================
    /**
     * Merge enhancement data into a variant, preserving any existing data
     * @param {Object} variant - The case variant
     * @returns {Object} Variant with merged enhancement data
     */
    enhanceVariant: function(variant) {
        const enhancement = this.getEnhancementForCase(variant);
        
        return {
            ...variant,
            pmhConditions: variant.pmhConditions || enhancement.pmhConditions,
            pmhResponses: variant.pmhResponses || {},
            familyHistoryRelevant: variant.familyHistoryRelevant || enhancement.familyHistoryRelevant,
            surgicalHistory: variant.surgicalHistory || enhancement.surgicalHistory,
            screeningData: variant.screeningData || enhancement.screeningData,
            visitHistory: variant.visitHistory || enhancement.visitHistory
        };
    }
};

// Export for use in ReasonDx
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CaseEnhancementData;
}

if (typeof window !== 'undefined') {
    window.CaseEnhancementData = CaseEnhancementData;
}

console.log("✓ ReasonDx Case Enhancement Data: Loaded");
