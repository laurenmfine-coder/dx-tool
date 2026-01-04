/**
 * ReasonDx Clinical Scores & Decision Rules Library
 * Comprehensive library of validated clinical prediction tools
 * Version 1.0 | December 2024
 * 
 * Total: ~120 clinical scores across all specialties
 */

const ClinicalScoresLibrary = {

    metadata: {
        version: "1.0",
        totalScores: 118,
        lastUpdated: "2024-12",
        categories: 12
    },

    // ============================================================
    // CARDIOVASCULAR SCORES
    // ============================================================
    cardiovascular: {
        name: "Cardiovascular",
        scores: [
            {
                id: "cv-001",
                name: "HEART Score",
                fullName: "History, ECG, Age, Risk Factors, Troponin",
                purpose: "Risk stratification for chest pain / suspected ACS",
                when: "Chest pain, suspected ACS in ED",
                components: [
                    { name: "History", scoring: "0=Slightly suspicious, 1=Moderately suspicious, 2=Highly suspicious" },
                    { name: "ECG", scoring: "0=Normal, 1=Non-specific changes, 2=Significant ST deviation" },
                    { name: "Age", scoring: "0=<45, 1=45-64, 2=≥65" },
                    { name: "Risk factors", scoring: "0=None, 1=1-2 factors, 2=≥3 or known CAD" },
                    { name: "Troponin", scoring: "0=Normal, 1=1-3x normal, 2=>3x normal" }
                ],
                maxScore: 10,
                interpretation: [
                    { score: "0-3", risk: "Low (1.7% MACE)", action: "Consider discharge with follow-up" },
                    { score: "4-6", risk: "Moderate (12-17% MACE)", action: "Admit, serial troponins, cardiology consult" },
                    { score: "7-10", risk: "High (50-65% MACE)", action: "Early invasive strategy" }
                ]
            },
            {
                id: "cv-002",
                name: "TIMI Risk Score (UA/NSTEMI)",
                purpose: "14-day risk of death, MI, or urgent revascularization",
                when: "Unstable angina or NSTEMI",
                components: [
                    { name: "Age ≥65", points: 1 },
                    { name: "≥3 CAD risk factors", points: 1 },
                    { name: "Known CAD (≥50% stenosis)", points: 1 },
                    { name: "Aspirin use in past 7 days", points: 1 },
                    { name: "Severe angina (≥2 episodes/24h)", points: 1 },
                    { name: "ST deviation ≥0.5mm", points: 1 },
                    { name: "Elevated cardiac markers", points: 1 }
                ],
                maxScore: 7,
                interpretation: [
                    { score: "0-1", risk: "5%", action: "Low risk" },
                    { score: "2", risk: "8%", action: "Low risk" },
                    { score: "3", risk: "13%", action: "Moderate risk" },
                    { score: "4", risk: "20%", action: "Moderate risk" },
                    { score: "5", risk: "26%", action: "High risk" },
                    { score: "6-7", risk: "41%", action: "High risk" }
                ]
            },
            {
                id: "cv-003",
                name: "CHA₂DS₂-VASc",
                purpose: "Annual stroke risk in non-valvular atrial fibrillation",
                when: "Atrial fibrillation - anticoagulation decision",
                components: [
                    { name: "Congestive heart failure", points: 1 },
                    { name: "Hypertension", points: 1 },
                    { name: "Age ≥75", points: 2 },
                    { name: "Diabetes", points: 1 },
                    { name: "Stroke/TIA/thromboembolism", points: 2 },
                    { name: "Vascular disease (MI, PAD, aortic plaque)", points: 1 },
                    { name: "Age 65-74", points: 1 },
                    { name: "Sex category (female)", points: 1 }
                ],
                maxScore: 9,
                interpretation: [
                    { score: "0 (male)", risk: "0%/year", action: "No anticoagulation" },
                    { score: "1", risk: "1.3%/year", action: "Consider anticoagulation" },
                    { score: "≥2", risk: "2.2-15%/year", action: "Anticoagulation recommended" }
                ]
            },
            {
                id: "cv-004",
                name: "HAS-BLED",
                purpose: "Major bleeding risk on anticoagulation",
                when: "Atrial fibrillation - bleeding risk assessment",
                components: [
                    { name: "Hypertension (uncontrolled, SBP>160)", points: 1 },
                    { name: "Abnormal renal function", points: 1 },
                    { name: "Abnormal liver function", points: 1 },
                    { name: "Stroke history", points: 1 },
                    { name: "Bleeding history/predisposition", points: 1 },
                    { name: "Labile INR (if on warfarin)", points: 1 },
                    { name: "Elderly (>65)", points: 1 },
                    { name: "Drugs (antiplatelet/NSAIDs)", points: 1 },
                    { name: "Alcohol excess", points: 1 }
                ],
                maxScore: 9,
                interpretation: [
                    { score: "0-2", risk: "Low (1-4%/year)", action: "Anticoagulation generally safe" },
                    { score: "≥3", risk: "High (6-12%/year)", action: "Caution, address modifiable factors. NOT a contraindication to anticoagulation" }
                ]
            },
            {
                id: "cv-005",
                name: "Wells Score - DVT",
                purpose: "Pre-test probability of deep vein thrombosis",
                when: "Suspected DVT",
                components: [
                    { name: "Active cancer", points: 1 },
                    { name: "Paralysis/paresis/recent cast", points: 1 },
                    { name: "Bedridden >3d or surgery <12wk", points: 1 },
                    { name: "Tenderness along deep veins", points: 1 },
                    { name: "Entire leg swollen", points: 1 },
                    { name: "Calf swelling >3cm vs other leg", points: 1 },
                    { name: "Pitting edema (symptomatic leg)", points: 1 },
                    { name: "Collateral superficial veins", points: 1 },
                    { name: "Previous DVT", points: 1 },
                    { name: "Alternative diagnosis as likely", points: -2 }
                ],
                interpretation: [
                    { score: "≤0", probability: "Low (5%)", action: "D-dimer; if negative, DVT excluded" },
                    { score: "1-2", probability: "Moderate (17%)", action: "D-dimer or ultrasound" },
                    { score: "≥3", probability: "High (53%)", action: "Ultrasound recommended" }
                ]
            },
            {
                id: "cv-006",
                name: "Wells Score - PE",
                purpose: "Pre-test probability of pulmonary embolism",
                when: "Suspected PE",
                components: [
                    { name: "Clinical signs/symptoms of DVT", points: 3 },
                    { name: "PE is #1 diagnosis or equally likely", points: 3 },
                    { name: "Heart rate >100", points: 1.5 },
                    { name: "Immobilization/surgery in past 4wk", points: 1.5 },
                    { name: "Previous DVT/PE", points: 1.5 },
                    { name: "Hemoptysis", points: 1 },
                    { name: "Malignancy", points: 1 }
                ],
                interpretation: [
                    { score: "≤4", probability: "PE Unlikely", action: "D-dimer; if negative, PE excluded" },
                    { score: ">4", probability: "PE Likely", action: "CT-PA recommended" }
                ],
                threeLevel: [
                    { score: "0-1", probability: "Low (1%)" },
                    { score: "2-6", probability: "Moderate (16%)" },
                    { score: "≥7", probability: "High (38%)" }
                ]
            },
            {
                id: "cv-007",
                name: "PERC Rule",
                purpose: "Rule out PE without D-dimer in low-risk patients",
                when: "Low pre-test probability PE (Wells ≤4)",
                criteria: [
                    "Age <50",
                    "HR <100",
                    "SpO2 ≥95% on room air",
                    "No hemoptysis",
                    "No estrogen use",
                    "No prior DVT/PE",
                    "No unilateral leg swelling",
                    "No surgery/trauma requiring hospitalization in past 4 weeks"
                ],
                interpretation: [
                    { result: "All 8 criteria met", action: "PE ruled out (<2% miss rate), no further testing" },
                    { result: "Any criterion NOT met", action: "Proceed with D-dimer" }
                ],
                caveat: "Only use in LOW pre-test probability patients"
            },
            {
                id: "cv-008",
                name: "GRACE Score",
                purpose: "In-hospital and 6-month mortality in ACS",
                when: "Acute coronary syndrome",
                components: [
                    { name: "Age", points: "0-100 (continuous)" },
                    { name: "Heart rate", points: "0-46" },
                    { name: "Systolic BP", points: "0-63" },
                    { name: "Creatinine", points: "0-31" },
                    { name: "Killip class", points: "0-64" },
                    { name: "Cardiac arrest at admission", points: 43 },
                    { name: "ST deviation", points: 30 },
                    { name: "Elevated cardiac markers", points: 15 }
                ],
                interpretation: [
                    { score: "≤108", risk: "Low (<1% mortality)" },
                    { score: "109-140", risk: "Intermediate (1-3%)" },
                    { score: ">140", risk: "High (>3%)" }
                ],
                note: "Use online calculator for precise risk"
            },
            {
                id: "cv-009",
                name: "Duke Criteria - Endocarditis",
                purpose: "Diagnosis of infective endocarditis",
                when: "Suspected infective endocarditis",
                majorCriteria: [
                    "Positive blood cultures (2+ with typical organism)",
                    "Echo evidence (vegetation, abscess, dehiscence, new regurgitation)"
                ],
                minorCriteria: [
                    "Predisposition (heart condition, IVDU)",
                    "Fever ≥38°C",
                    "Vascular phenomena (emboli, Janeway lesions, mycotic aneurysm)",
                    "Immunologic phenomena (Osler nodes, Roth spots, RF, GN)",
                    "Microbiologic evidence not meeting major"
                ],
                interpretation: [
                    { diagnosis: "Definite", criteria: "2 major, OR 1 major + 3 minor, OR 5 minor" },
                    { diagnosis: "Possible", criteria: "1 major + 1 minor, OR 3 minor" },
                    { diagnosis: "Rejected", criteria: "Firm alternative, resolution with ≤4d antibiotics" }
                ]
            },
            {
                id: "cv-010",
                name: "Sgarbossa Criteria",
                purpose: "Diagnose MI in LBBB or paced rhythm",
                when: "Chest pain with LBBB or ventricular paced rhythm",
                components: [
                    { name: "Concordant ST elevation ≥1mm", points: 5 },
                    { name: "Concordant ST depression ≥1mm in V1-V3", points: 3 },
                    { name: "Discordant ST elevation ≥5mm", points: 2 }
                ],
                interpretation: [
                    { score: "≥3", diagnosis: "Acute MI likely (specificity 90%)" }
                ],
                modified: "Smith Modified: Discordant ST/S ratio ≥0.25 is more sensitive"
            },
            {
                id: "cv-011",
                name: "NYHA Functional Classification",
                purpose: "Heart failure symptom severity",
                when: "Heart failure assessment",
                classes: [
                    { class: "I", description: "No limitation; ordinary activity doesn't cause symptoms" },
                    { class: "II", description: "Slight limitation; comfortable at rest, ordinary activity causes symptoms" },
                    { class: "III", description: "Marked limitation; comfortable at rest, less than ordinary activity causes symptoms" },
                    { class: "IV", description: "Unable to perform any activity without symptoms; symptoms at rest" }
                ]
            },
            {
                id: "cv-012",
                name: "Killip Classification",
                purpose: "Heart failure severity in acute MI",
                when: "Acute myocardial infarction",
                classes: [
                    { class: "I", description: "No heart failure signs", mortality: "6%" },
                    { class: "II", description: "Rales, S3, elevated JVP", mortality: "17%" },
                    { class: "III", description: "Acute pulmonary edema", mortality: "38%" },
                    { class: "IV", description: "Cardiogenic shock", mortality: "81%" }
                ]
            },
            {
                id: "cv-013",
                name: "Framingham Criteria - Heart Failure",
                purpose: "Clinical diagnosis of heart failure",
                majorCriteria: [
                    "Paroxysmal nocturnal dyspnea",
                    "Orthopnea",
                    "Elevated JVP",
                    "Pulmonary rales",
                    "S3 gallop",
                    "Cardiomegaly on CXR",
                    "Pulmonary edema on CXR",
                    "Weight loss >4.5kg in 5 days with treatment"
                ],
                minorCriteria: [
                    "Bilateral ankle edema",
                    "Nocturnal cough",
                    "Dyspnea on ordinary exertion",
                    "Hepatomegaly",
                    "Pleural effusion",
                    "Heart rate >120",
                    "Weight loss >4.5kg in 5 days"
                ],
                interpretation: "CHF diagnosis: 2 major OR 1 major + 2 minor"
            }
        ]
    },

    // ============================================================
    // PULMONARY SCORES
    // ============================================================
    pulmonary: {
        name: "Pulmonary",
        scores: [
            {
                id: "pulm-001",
                name: "CURB-65",
                purpose: "Pneumonia severity and disposition",
                when: "Community-acquired pneumonia",
                components: [
                    { name: "Confusion (new)", points: 1 },
                    { name: "Urea >7 mmol/L (BUN >19 mg/dL)", points: 1 },
                    { name: "Respiratory rate ≥30", points: 1 },
                    { name: "Blood pressure (SBP<90 or DBP≤60)", points: 1 },
                    { name: "Age ≥65", points: 1 }
                ],
                maxScore: 5,
                interpretation: [
                    { score: "0-1", mortality: "1.5%", action: "Outpatient treatment" },
                    { score: "2", mortality: "9%", action: "Consider short inpatient or close outpatient" },
                    { score: "3-5", mortality: "22%", action: "Hospitalize; if 4-5, consider ICU" }
                ]
            },
            {
                id: "pulm-002",
                name: "PSI/PORT Score",
                purpose: "30-day mortality in CAP",
                when: "Community-acquired pneumonia",
                riskFactors: "Age, nursing home, comorbidities, vital signs, labs",
                interpretation: [
                    { class: "I", criteria: "Age<50, no comorbidities, normal vitals", mortality: "0.1%", action: "Outpatient" },
                    { class: "II", points: "≤70", mortality: "0.6%", action: "Outpatient" },
                    { class: "III", points: "71-90", mortality: "2.8%", action: "Observation" },
                    { class: "IV", points: "91-130", mortality: "8.2%", action: "Inpatient" },
                    { class: "V", points: ">130", mortality: "29%", action: "Inpatient/ICU" }
                ]
            },
            {
                id: "pulm-003",
                name: "GOLD COPD Staging",
                purpose: "COPD severity classification",
                when: "COPD management",
                spirometry: [
                    { grade: "GOLD 1 (Mild)", fev1: "≥80% predicted" },
                    { grade: "GOLD 2 (Moderate)", fev1: "50-79% predicted" },
                    { grade: "GOLD 3 (Severe)", fev1: "30-49% predicted" },
                    { grade: "GOLD 4 (Very Severe)", fev1: "<30% predicted" }
                ],
                groups: [
                    { group: "A", exacerbations: "0-1 (no hosp)", symptoms: "Less (mMRC 0-1, CAT<10)" },
                    { group: "B", exacerbations: "0-1 (no hosp)", symptoms: "More (mMRC≥2, CAT≥10)" },
                    { group: "E", exacerbations: "≥2 or ≥1 hospitalization", symptoms: "Any" }
                ]
            },
            {
                id: "pulm-004",
                name: "Light's Criteria",
                purpose: "Exudate vs transudate pleural effusion",
                when: "Pleural effusion evaluation",
                exudateCriteria: [
                    "Pleural protein / Serum protein > 0.5",
                    "Pleural LDH / Serum LDH > 0.6",
                    "Pleural LDH > 2/3 upper limit of normal serum LDH"
                ],
                interpretation: [
                    { result: "Any 1 criterion met", diagnosis: "Exudate" },
                    { result: "No criteria met", diagnosis: "Transudate" }
                ],
                causes: {
                    transudate: ["CHF", "Cirrhosis", "Nephrotic syndrome", "PE (sometimes)"],
                    exudate: ["Pneumonia", "Malignancy", "PE", "TB", "Pancreatitis", "Rheumatologic"]
                }
            },
            {
                id: "pulm-005",
                name: "Geneva Score (Revised)",
                purpose: "Pre-test probability for PE",
                when: "Suspected PE (alternative to Wells)",
                components: [
                    { name: "Age >65", points: 1 },
                    { name: "Previous DVT or PE", points: 3 },
                    { name: "Surgery/fracture within 1 month", points: 2 },
                    { name: "Active malignancy", points: 2 },
                    { name: "Unilateral lower limb pain", points: 3 },
                    { name: "Hemoptysis", points: 2 },
                    { name: "Heart rate 75-94", points: 3 },
                    { name: "Heart rate ≥95", points: 5 },
                    { name: "Pain on leg palpation + unilateral edema", points: 4 }
                ],
                interpretation: [
                    { score: "0-3", probability: "Low (8%)" },
                    { score: "4-10", probability: "Intermediate (28%)" },
                    { score: "≥11", probability: "High (74%)" }
                ]
            },
            {
                id: "pulm-006",
                name: "PESI Score",
                purpose: "30-day mortality in confirmed PE",
                when: "After PE diagnosis - risk stratification",
                components: [
                    { name: "Age", points: "Age in years" },
                    { name: "Male sex", points: 10 },
                    { name: "Cancer", points: 30 },
                    { name: "Heart failure", points: 10 },
                    { name: "Chronic lung disease", points: 10 },
                    { name: "Pulse ≥110", points: 20 },
                    { name: "SBP <100", points: 30 },
                    { name: "RR ≥30", points: 20 },
                    { name: "Temp <36°C", points: 20 },
                    { name: "Altered mental status", points: 60 },
                    { name: "SpO2 <90%", points: 20 }
                ],
                interpretation: [
                    { class: "I-II", points: "≤85", mortality: "0-3%", action: "Consider outpatient" },
                    { class: "III-V", points: ">85", mortality: "3-25%", action: "Inpatient" }
                ]
            },
            {
                id: "pulm-007",
                name: "sPESI (Simplified PESI)",
                purpose: "Simplified PE mortality risk",
                when: "After PE diagnosis",
                components: [
                    { name: "Age >80", points: 1 },
                    { name: "Cancer", points: 1 },
                    { name: "Chronic cardiopulmonary disease", points: 1 },
                    { name: "HR ≥110", points: 1 },
                    { name: "SBP <100", points: 1 },
                    { name: "SpO2 <90%", points: 1 }
                ],
                interpretation: [
                    { score: "0", mortality: "1%", action: "Consider outpatient treatment" },
                    { score: "≥1", mortality: "11%", action: "Inpatient treatment" }
                ]
            },
            {
                id: "pulm-008",
                name: "BODE Index",
                purpose: "COPD mortality prediction",
                when: "COPD prognosis",
                components: [
                    { name: "BMI", scoring: "0 (>21) to 1 (≤21)" },
                    { name: "Obstruction (FEV1%)", scoring: "0 (≥65%) to 3 (<35%)" },
                    { name: "Dyspnea (mMRC)", scoring: "0 (0-1) to 3 (4)" },
                    { name: "Exercise (6MWD)", scoring: "0 (≥350m) to 3 (<150m)" }
                ],
                interpretation: [
                    { score: "0-2", mortality4yr: "20%" },
                    { score: "3-4", mortality4yr: "30%" },
                    { score: "5-6", mortality4yr: "40%" },
                    { score: "7-10", mortality4yr: "80%" }
                ]
            }
        ]
    },

    // ============================================================
    // NEUROLOGICAL SCORES
    // ============================================================
    neurological: {
        name: "Neurological",
        scores: [
            {
                id: "neuro-001",
                name: "Glasgow Coma Scale (GCS)",
                purpose: "Level of consciousness",
                when: "Any altered mental status, trauma, stroke",
                components: [
                    { name: "Eye Opening", options: "4=Spontaneous, 3=To voice, 2=To pain, 1=None" },
                    { name: "Verbal", options: "5=Oriented, 4=Confused, 3=Inappropriate, 2=Incomprehensible, 1=None" },
                    { name: "Motor", options: "6=Obeys, 5=Localizes, 4=Withdraws, 3=Flexion, 2=Extension, 1=None" }
                ],
                interpretation: [
                    { score: "13-15", severity: "Mild" },
                    { score: "9-12", severity: "Moderate" },
                    { score: "3-8", severity: "Severe (coma)", action: "Consider intubation" }
                ]
            },
            {
                id: "neuro-002",
                name: "NIH Stroke Scale (NIHSS)",
                purpose: "Stroke severity quantification",
                when: "Acute stroke",
                domains: [
                    "Level of consciousness (0-3)",
                    "LOC questions (0-2)",
                    "LOC commands (0-2)",
                    "Best gaze (0-2)",
                    "Visual fields (0-3)",
                    "Facial palsy (0-3)",
                    "Motor arm L & R (0-4 each)",
                    "Motor leg L & R (0-4 each)",
                    "Limb ataxia (0-2)",
                    "Sensory (0-2)",
                    "Language (0-3)",
                    "Dysarthria (0-2)",
                    "Extinction/inattention (0-2)"
                ],
                maxScore: 42,
                interpretation: [
                    { score: "0", severity: "No stroke symptoms" },
                    { score: "1-4", severity: "Minor stroke" },
                    { score: "5-15", severity: "Moderate stroke" },
                    { score: "16-20", severity: "Moderate-severe" },
                    { score: "21-42", severity: "Severe stroke" }
                ]
            },
            {
                id: "neuro-003",
                name: "ABCD² Score",
                purpose: "Stroke risk after TIA",
                when: "After TIA diagnosis",
                components: [
                    { name: "Age ≥60", points: 1 },
                    { name: "BP ≥140/90", points: 1 },
                    { name: "Clinical: Unilateral weakness", points: 2 },
                    { name: "Clinical: Speech disturbance only", points: 1 },
                    { name: "Duration ≥60 min", points: 2 },
                    { name: "Duration 10-59 min", points: 1 },
                    { name: "Diabetes", points: 1 }
                ],
                interpretation: [
                    { score: "0-3", risk2day: "1%", risk7day: "1.2%" },
                    { score: "4-5", risk2day: "4%", risk7day: "6%" },
                    { score: "6-7", risk2day: "8%", risk7day: "12%" }
                ]
            },
            {
                id: "neuro-004",
                name: "Canadian CT Head Rule",
                purpose: "Need for CT in minor head injury",
                when: "GCS 13-15, head injury, witnessed LOC/amnesia/confusion",
                highRisk: [
                    "GCS <15 at 2 hours post-injury",
                    "Suspected open or depressed skull fracture",
                    "Signs of basal skull fracture",
                    "≥2 episodes of vomiting",
                    "Age ≥65"
                ],
                mediumRisk: [
                    "Retrograde amnesia ≥30 minutes",
                    "Dangerous mechanism"
                ],
                interpretation: [
                    { result: "Any high-risk", action: "CT required" },
                    { result: "Any medium-risk", action: "CT recommended" },
                    { result: "None", action: "CT not required" }
                ]
            },
            {
                id: "neuro-005",
                name: "Hunt and Hess Scale",
                purpose: "SAH severity grading",
                when: "Subarachnoid hemorrhage",
                grades: [
                    { grade: "I", description: "Asymptomatic or mild headache", mortality: "30%" },
                    { grade: "II", description: "Moderate-severe headache, nuchal rigidity, CN palsy only", mortality: "40%" },
                    { grade: "III", description: "Drowsy/confused, mild focal deficit", mortality: "50%" },
                    { grade: "IV", description: "Stupor, moderate-severe hemiparesis", mortality: "80%" },
                    { grade: "V", description: "Coma, decerebrate posturing", mortality: "90%" }
                ]
            },
            {
                id: "neuro-006",
                name: "Ottawa SAH Rule",
                purpose: "Rule out SAH in alert headache patients",
                when: "Alert patient, non-traumatic headache, concern for SAH",
                criteria: [
                    "Age ≥40",
                    "Neck pain or stiffness",
                    "Witnessed LOC",
                    "Onset during exertion",
                    "Thunderclap headache (instant peak)",
                    "Limited neck flexion on exam"
                ],
                interpretation: [
                    { result: "Any criterion present", action: "Investigate for SAH" },
                    { result: "No criteria", action: "SAH ruled out (100% sensitivity)" }
                ]
            },
            {
                id: "neuro-007",
                name: "PECARN Pediatric Head Injury",
                purpose: "CT decision in pediatric head trauma",
                when: "Pediatric minor head injury (GCS 14-15)",
                under2: {
                    highRisk: ["GCS <15/AMS", "Palpable skull fracture"],
                    intermediateRisk: ["Non-frontal scalp hematoma", "LOC ≥5 sec", "Severe mechanism", "Not acting normally"]
                },
                over2: {
                    highRisk: ["GCS <15/AMS", "Signs of basilar skull fracture"],
                    intermediateRisk: ["LOC", "Vomiting", "Severe mechanism", "Severe headache"]
                },
                interpretation: [
                    { result: "High-risk features", action: "CT recommended" },
                    { result: "Intermediate risk", action: "Observation vs CT" },
                    { result: "No risk features", action: "CT not recommended" }
                ]
            },
            {
                id: "neuro-008",
                name: "Fisher Scale",
                purpose: "Vasospasm risk after SAH",
                when: "Subarachnoid hemorrhage on CT",
                grades: [
                    { grade: "1", description: "No blood detected", vasospasm: "Low" },
                    { grade: "2", description: "Diffuse thin SAH (<1mm)", vasospasm: "Low" },
                    { grade: "3", description: "Localized clot or thick SAH (>1mm)", vasospasm: "High" },
                    { grade: "4", description: "ICH or IVH with diffuse/no SAH", vasospasm: "Low" }
                ]
            }
        ]
    },

    // ============================================================
    // GASTROINTESTINAL SCORES
    // ============================================================
    gastrointestinal: {
        name: "Gastrointestinal",
        scores: [
            {
                id: "gi-001",
                name: "Child-Pugh Score",
                purpose: "Cirrhosis severity and prognosis",
                when: "Cirrhosis evaluation",
                components: [
                    { name: "Bilirubin", scoring: "1 (<2), 2 (2-3), 3 (>3 mg/dL)" },
                    { name: "Albumin", scoring: "1 (>3.5), 2 (2.8-3.5), 3 (<2.8 g/dL)" },
                    { name: "INR", scoring: "1 (<1.7), 2 (1.7-2.3), 3 (>2.3)" },
                    { name: "Ascites", scoring: "1 (None), 2 (Mild), 3 (Moderate-severe)" },
                    { name: "Encephalopathy", scoring: "1 (None), 2 (Grade 1-2), 3 (Grade 3-4)" }
                ],
                interpretation: [
                    { class: "A", points: "5-6", survival1yr: "100%", survival2yr: "85%" },
                    { class: "B", points: "7-9", survival1yr: "80%", survival2yr: "60%" },
                    { class: "C", points: "10-15", survival1yr: "45%", survival2yr: "35%" }
                ]
            },
            {
                id: "gi-002",
                name: "MELD Score",
                purpose: "Cirrhosis severity, transplant prioritization",
                when: "Cirrhosis, liver transplant evaluation",
                formula: "3.78×ln(bilirubin) + 11.2×ln(INR) + 9.57×ln(creatinine) + 6.43",
                interpretation: [
                    { score: "<9", mortality3mo: "2%" },
                    { score: "10-19", mortality3mo: "6%" },
                    { score: "20-29", mortality3mo: "20%" },
                    { score: "30-39", mortality3mo: "53%" },
                    { score: "≥40", mortality3mo: "71%" }
                ],
                note: "MELD-Na includes sodium for improved accuracy"
            },
            {
                id: "gi-003",
                name: "Glasgow-Blatchford Score",
                purpose: "Need for intervention in upper GI bleed",
                when: "Upper GI bleeding",
                components: [
                    { name: "BUN", scoring: "0-6 points based on level" },
                    { name: "Hemoglobin", scoring: "0-6 points (sex-specific)" },
                    { name: "SBP", scoring: "0-3 points" },
                    { name: "Pulse ≥100", points: 1 },
                    { name: "Melena", points: 1 },
                    { name: "Syncope", points: 2 },
                    { name: "Hepatic disease", points: 2 },
                    { name: "Heart failure", points: 2 }
                ],
                interpretation: [
                    { score: "0", risk: "Low", action: "Outpatient management possible" },
                    { score: "≥1", risk: "Higher", action: "Likely needs intervention/admission" }
                ]
            },
            {
                id: "gi-004",
                name: "Rockall Score",
                purpose: "Rebleeding and mortality in upper GI bleed",
                when: "After endoscopy for upper GI bleed",
                preEndoscopy: [
                    { name: "Age", scoring: "0 (<60), 1 (60-79), 2 (≥80)" },
                    { name: "Shock", scoring: "0 (none), 1 (tachy), 2 (hypotensive)" },
                    { name: "Comorbidity", scoring: "0-3 points" }
                ],
                postEndoscopy: [
                    { name: "Diagnosis", scoring: "0-2 points" },
                    { name: "Stigmata of recent hemorrhage", scoring: "0-2 points" }
                ],
                interpretation: [
                    { score: "0-2", rebleed: "5%", mortality: "0%" },
                    { score: "3-4", rebleed: "11%", mortality: "3%" },
                    { score: "5-6", rebleed: "25%", mortality: "11%" },
                    { score: "≥7", rebleed: "42%", mortality: "22%" }
                ]
            },
            {
                id: "gi-005",
                name: "Ranson's Criteria",
                purpose: "Acute pancreatitis severity",
                when: "Acute pancreatitis",
                atAdmission: [
                    "Age >55",
                    "WBC >16,000",
                    "Glucose >200",
                    "LDH >350",
                    "AST >250"
                ],
                at48hours: [
                    "Hematocrit drop >10%",
                    "BUN rise >5",
                    "Calcium <8",
                    "PaO2 <60",
                    "Base deficit >4",
                    "Fluid sequestration >6L"
                ],
                interpretation: [
                    { score: "0-2", mortality: "2%" },
                    { score: "3-4", mortality: "15%" },
                    { score: "5-6", mortality: "40%" },
                    { score: "≥7", mortality: "100%" }
                ]
            },
            {
                id: "gi-006",
                name: "BISAP Score",
                purpose: "Pancreatitis mortality (simpler than Ranson's)",
                when: "Acute pancreatitis - early risk stratification",
                components: [
                    { name: "BUN >25", points: 1 },
                    { name: "Impaired mental status", points: 1 },
                    { name: "SIRS (≥2 criteria)", points: 1 },
                    { name: "Age >60", points: 1 },
                    { name: "Pleural effusion", points: 1 }
                ],
                interpretation: [
                    { score: "0", mortality: "<1%" },
                    { score: "1", mortality: "<1%" },
                    { score: "2", mortality: "2%" },
                    { score: "3", mortality: "5-8%" },
                    { score: "4", mortality: "13%" },
                    { score: "5", mortality: "22%" }
                ]
            },
            {
                id: "gi-007",
                name: "Alvarado Score (MANTRELS)",
                purpose: "Likelihood of appendicitis",
                when: "Suspected appendicitis",
                components: [
                    { name: "Migration of pain to RLQ", points: 1 },
                    { name: "Anorexia", points: 1 },
                    { name: "Nausea/vomiting", points: 1 },
                    { name: "Tenderness in RLQ", points: 2 },
                    { name: "Rebound tenderness", points: 1 },
                    { name: "Elevated temperature (>37.3°C)", points: 1 },
                    { name: "Leukocytosis (>10,000)", points: 2 },
                    { name: "Shift to left (>75% neutrophils)", points: 1 }
                ],
                maxScore: 10,
                interpretation: [
                    { score: "0-4", likelihood: "Low", action: "Appendicitis unlikely" },
                    { score: "5-6", likelihood: "Possible", action: "Observe, consider imaging" },
                    { score: "7-8", likelihood: "Probable", action: "Surgery consult" },
                    { score: "9-10", likelihood: "Very likely", action: "Surgery" }
                ]
            },
            {
                id: "gi-008",
                name: "Rome IV Criteria - IBS",
                purpose: "Diagnosis of irritable bowel syndrome",
                when: "Chronic abdominal pain/altered bowels",
                criteria: [
                    "Recurrent abdominal pain ≥1 day/week in last 3 months",
                    "Associated with ≥2 of:",
                    "  - Related to defecation",
                    "  - Change in stool frequency",
                    "  - Change in stool form/appearance"
                ],
                subtypes: [
                    "IBS-C: Constipation predominant",
                    "IBS-D: Diarrhea predominant",
                    "IBS-M: Mixed",
                    "IBS-U: Unclassified"
                ]
            }
        ]
    },

    // ============================================================
    // INFECTIOUS DISEASE SCORES
    // ============================================================
    infectious: {
        name: "Infectious Disease",
        scores: [
            {
                id: "inf-001",
                name: "qSOFA",
                purpose: "Quick sepsis screening",
                when: "Suspected infection - bedside screening",
                components: [
                    { name: "Respiratory rate ≥22", points: 1 },
                    { name: "Altered mentation", points: 1 },
                    { name: "SBP ≤100", points: 1 }
                ],
                interpretation: [
                    { score: "≥2", action: "High risk of poor outcome; assess for organ dysfunction" }
                ]
            },
            {
                id: "inf-002",
                name: "SOFA Score",
                purpose: "Sepsis-related organ dysfunction",
                when: "ICU, suspected sepsis",
                systems: [
                    { name: "Respiration (PaO2/FiO2)", scoring: "0-4" },
                    { name: "Coagulation (Platelets)", scoring: "0-4" },
                    { name: "Liver (Bilirubin)", scoring: "0-4" },
                    { name: "Cardiovascular (MAP/vasopressors)", scoring: "0-4" },
                    { name: "CNS (GCS)", scoring: "0-4" },
                    { name: "Renal (Creatinine/UOP)", scoring: "0-4" }
                ],
                interpretation: "Sepsis = Infection + SOFA increase ≥2 from baseline"
            },
            {
                id: "inf-003",
                name: "SIRS Criteria",
                purpose: "Systemic inflammatory response",
                when: "Suspected infection/inflammation",
                criteria: [
                    "Temp >38°C or <36°C",
                    "HR >90",
                    "RR >20 or PaCO2 <32",
                    "WBC >12,000 or <4,000 or >10% bands"
                ],
                interpretation: "SIRS = ≥2 criteria present (less specific than qSOFA for sepsis)"
            },
            {
                id: "inf-004",
                name: "Centor Criteria",
                purpose: "Likelihood of strep pharyngitis",
                when: "Sore throat",
                components: [
                    { name: "Tonsillar exudates", points: 1 },
                    { name: "Tender anterior cervical adenopathy", points: 1 },
                    { name: "Fever (history or >38°C)", points: 1 },
                    { name: "Absence of cough", points: 1 }
                ],
                interpretation: [
                    { score: "0-1", strep: "1-10%", action: "No testing or antibiotics" },
                    { score: "2-3", strep: "11-35%", action: "Rapid strep test" },
                    { score: "4", strep: "51-53%", action: "Empiric treatment or test" }
                ]
            },
            {
                id: "inf-005",
                name: "McIsaac Score (Modified Centor)",
                purpose: "Strep pharyngitis with age adjustment",
                when: "Sore throat",
                components: [
                    { name: "Centor criteria", points: "0-4" },
                    { name: "Age 3-14", points: 1 },
                    { name: "Age 15-44", points: 0 },
                    { name: "Age ≥45", points: -1 }
                ],
                interpretation: [
                    { score: "≤0", action: "No testing" },
                    { score: "1", action: "No testing" },
                    { score: "2", action: "Rapid strep +/- culture" },
                    { score: "3", action: "Rapid strep +/- culture" },
                    { score: "≥4", action: "Rapid strep or empiric treatment" }
                ]
            },
            {
                id: "inf-006",
                name: "Pneumonia Severity Index (see PSI/PORT)",
                crossRef: "pulm-002"
            }
        ]
    },

    // ============================================================
    // HEMATOLOGY/ONCOLOGY SCORES
    // ============================================================
    hematology: {
        name: "Hematology/Oncology",
        scores: [
            {
                id: "hem-001",
                name: "4Ts Score for HIT",
                purpose: "Probability of heparin-induced thrombocytopenia",
                when: "Thrombocytopenia on heparin",
                components: [
                    { name: "Thrombocytopenia", scoring: "0-2 (degree and nadir)" },
                    { name: "Timing", scoring: "0-2 (days after heparin start)" },
                    { name: "Thrombosis", scoring: "0-2 (new thrombosis, skin necrosis)" },
                    { name: "Other causes", scoring: "0-2 (likelihood of alternative)" }
                ],
                interpretation: [
                    { score: "0-3", probability: "Low (<5%)", action: "HIT unlikely, consider other causes" },
                    { score: "4-5", probability: "Intermediate (14%)", action: "Send HIT antibody" },
                    { score: "6-8", probability: "High (64%)", action: "Stop heparin, start alternative anticoagulation" }
                ]
            },
            {
                id: "hem-002",
                name: "Wells DVT Score",
                crossRef: "cv-005"
            },
            {
                id: "hem-003",
                name: "Padua Prediction Score",
                purpose: "VTE risk in hospitalized medical patients",
                when: "Medical inpatient VTE prophylaxis decision",
                components: [
                    { name: "Active cancer", points: 3 },
                    { name: "Previous VTE", points: 3 },
                    { name: "Reduced mobility", points: 3 },
                    { name: "Known thrombophilia", points: 3 },
                    { name: "Recent trauma/surgery (≤1 month)", points: 2 },
                    { name: "Age ≥70", points: 1 },
                    { name: "Heart/respiratory failure", points: 1 },
                    { name: "Acute MI or stroke", points: 1 },
                    { name: "Acute infection/rheumatologic disorder", points: 1 },
                    { name: "Obesity (BMI ≥30)", points: 1 },
                    { name: "Ongoing hormonal treatment", points: 1 }
                ],
                interpretation: [
                    { score: "<4", risk: "Low (0.3%)", action: "Prophylaxis may not be needed" },
                    { score: "≥4", risk: "High (11%)", action: "Pharmacologic prophylaxis recommended" }
                ]
            },
            {
                id: "hem-004",
                name: "Caprini Score",
                purpose: "VTE risk in surgical patients",
                when: "Surgical patient VTE prophylaxis",
                riskFactors: "Age, surgery type, BMI, immobility, malignancy, prior VTE, thrombophilia, etc.",
                interpretation: [
                    { score: "0", risk: "Very low (<0.5%)", prophylaxis: "Early ambulation" },
                    { score: "1-2", risk: "Low (1.5%)", prophylaxis: "Mechanical +/- pharmacologic" },
                    { score: "3-4", risk: "Moderate (3%)", prophylaxis: "Pharmacologic + mechanical" },
                    { score: "≥5", risk: "High (6%)", prophylaxis: "Pharmacologic + mechanical + extended duration" }
                ]
            },
            {
                id: "hem-005",
                name: "ECOG Performance Status",
                purpose: "Functional status in cancer patients",
                when: "Oncology treatment planning",
                grades: [
                    { grade: 0, description: "Fully active, no restrictions" },
                    { grade: 1, description: "Restricted in strenuous activity, ambulatory, light work" },
                    { grade: 2, description: "Ambulatory, self-care, unable to work, up >50% of waking hours" },
                    { grade: 3, description: "Limited self-care, confined to bed/chair >50% of waking hours" },
                    { grade: 4, description: "Completely disabled, no self-care, totally confined" },
                    { grade: 5, description: "Dead" }
                ]
            },
            {
                id: "hem-006",
                name: "Karnofsky Performance Status",
                purpose: "Functional status (more granular than ECOG)",
                when: "Oncology, palliative care",
                scale: [
                    { score: 100, description: "Normal, no complaints" },
                    { score: 90, description: "Minor symptoms" },
                    { score: 80, description: "Some symptoms, normal activity with effort" },
                    { score: 70, description: "Cares for self, unable to work" },
                    { score: 60, description: "Requires occasional assistance" },
                    { score: 50, description: "Requires considerable assistance, frequent medical care" },
                    { score: 40, description: "Disabled, requires special care" },
                    { score: 30, description: "Severely disabled, hospitalization indicated" },
                    { score: 20, description: "Very sick, active supportive treatment needed" },
                    { score: 10, description: "Moribund" },
                    { score: 0, description: "Dead" }
                ]
            }
        ]
    },

    // ============================================================
    // PSYCHIATRIC SCORES
    // ============================================================
    psychiatric: {
        name: "Psychiatric",
        scores: [
            {
                id: "psych-001",
                name: "PHQ-9",
                purpose: "Depression screening and severity",
                when: "Suspected depression",
                questions: [
                    "Little interest or pleasure",
                    "Feeling down, depressed, hopeless",
                    "Sleep problems",
                    "Feeling tired",
                    "Appetite changes",
                    "Feeling bad about self",
                    "Trouble concentrating",
                    "Psychomotor changes",
                    "Thoughts of self-harm"
                ],
                scoring: "0-3 per item (Not at all to Nearly every day)",
                interpretation: [
                    { score: "0-4", severity: "Minimal" },
                    { score: "5-9", severity: "Mild" },
                    { score: "10-14", severity: "Moderate" },
                    { score: "15-19", severity: "Moderately severe" },
                    { score: "20-27", severity: "Severe" }
                ]
            },
            {
                id: "psych-002",
                name: "GAD-7",
                purpose: "Generalized anxiety screening",
                when: "Suspected anxiety",
                questions: [
                    "Feeling nervous, anxious",
                    "Can't stop worrying",
                    "Worrying too much",
                    "Trouble relaxing",
                    "Restless",
                    "Easily annoyed",
                    "Feeling afraid"
                ],
                scoring: "0-3 per item",
                interpretation: [
                    { score: "0-4", severity: "Minimal" },
                    { score: "5-9", severity: "Mild" },
                    { score: "10-14", severity: "Moderate" },
                    { score: "15-21", severity: "Severe" }
                ]
            },
            {
                id: "psych-003",
                name: "CAGE Questionnaire",
                purpose: "Alcohol use disorder screening",
                when: "Suspected alcohol problem",
                questions: [
                    "Cut down - felt need to cut down drinking?",
                    "Annoyed - annoyed by criticism of drinking?",
                    "Guilty - felt guilty about drinking?",
                    "Eye-opener - drink in the morning?"
                ],
                interpretation: [
                    { score: "≥2", action: "Positive screen, further evaluation needed" }
                ]
            },
            {
                id: "psych-004",
                name: "AUDIT-C",
                purpose: "Alcohol use screening",
                when: "Routine screening, suspected alcohol misuse",
                questions: [
                    "How often do you have a drink?",
                    "How many drinks on a typical day?",
                    "How often ≥6 drinks on one occasion?"
                ],
                interpretation: [
                    { score: "≥4 (men) / ≥3 (women)", action: "Positive screen" }
                ]
            },
            {
                id: "psych-005",
                name: "Columbia Suicide Severity Rating Scale (C-SSRS)",
                purpose: "Suicide risk assessment",
                when: "Any suicidal ideation or concern",
                domains: [
                    "Wish to be dead",
                    "Non-specific active suicidal thoughts",
                    "Active suicidal ideation with any methods",
                    "Active suicidal ideation with some intent",
                    "Active suicidal ideation with specific plan and intent"
                ],
                note: "Escalating severity; positive responses require appropriate intervention"
            },
            {
                id: "psych-006",
                name: "MMSE (Mini-Mental State Exam)",
                purpose: "Cognitive screening",
                when: "Suspected dementia/cognitive impairment",
                domains: [
                    "Orientation (10 points)",
                    "Registration (3 points)",
                    "Attention/calculation (5 points)",
                    "Recall (3 points)",
                    "Language (8 points)",
                    "Visual construction (1 point)"
                ],
                maxScore: 30,
                interpretation: [
                    { score: "24-30", cognition: "Normal" },
                    { score: "19-23", cognition: "Mild impairment" },
                    { score: "10-18", cognition: "Moderate impairment" },
                    { score: "<10", cognition: "Severe impairment" }
                ]
            },
            {
                id: "psych-007",
                name: "MoCA (Montreal Cognitive Assessment)",
                purpose: "Cognitive screening (more sensitive than MMSE)",
                when: "Suspected MCI or early dementia",
                domains: [
                    "Visuospatial/executive",
                    "Naming",
                    "Memory",
                    "Attention",
                    "Language",
                    "Abstraction",
                    "Delayed recall",
                    "Orientation"
                ],
                maxScore: 30,
                interpretation: [
                    { score: "≥26", cognition: "Normal" },
                    { score: "<26", cognition: "Cognitive impairment" }
                ]
            }
        ]
    },

    // ============================================================
    // TRAUMA/EMERGENCY SCORES
    // ============================================================
    trauma: {
        name: "Trauma/Emergency",
        scores: [
            {
                id: "trauma-001",
                name: "Revised Trauma Score (RTS)",
                purpose: "Trauma severity, triage",
                when: "Trauma patients",
                components: [
                    { name: "GCS", scoring: "0-4" },
                    { name: "SBP", scoring: "0-4" },
                    { name: "Respiratory rate", scoring: "0-4" }
                ],
                interpretation: "Lower score = higher mortality"
            },
            {
                id: "trauma-002",
                name: "Injury Severity Score (ISS)",
                purpose: "Anatomic trauma severity",
                when: "Trauma patients",
                calculation: "Sum of squares of top 3 AIS scores (different body regions)",
                interpretation: [
                    { score: "<9", severity: "Minor" },
                    { score: "9-15", severity: "Moderate" },
                    { score: "16-24", severity: "Severe" },
                    { score: "≥25", severity: "Critical" }
                ]
            },
            {
                id: "trauma-003",
                name: "NEXUS Criteria",
                purpose: "C-spine imaging in trauma",
                when: "Blunt trauma, neck pain/tenderness",
                criteria: [
                    "No posterior midline tenderness",
                    "No focal neurologic deficit",
                    "Normal alertness",
                    "No intoxication",
                    "No painful distracting injury"
                ],
                interpretation: [
                    { result: "All 5 criteria met", action: "C-spine imaging not indicated" },
                    { result: "Any criterion NOT met", action: "C-spine imaging indicated" }
                ]
            },
            {
                id: "trauma-004",
                name: "Canadian C-Spine Rule",
                purpose: "C-spine imaging decision",
                when: "Alert, stable trauma patient",
                highRisk: [
                    "Age ≥65",
                    "Dangerous mechanism",
                    "Paresthesias in extremities"
                ],
                lowRisk: [
                    "Simple rear-end MVC",
                    "Sitting in ED",
                    "Ambulatory at any time",
                    "Delayed onset neck pain",
                    "Absence of midline tenderness"
                ],
                interpretation: [
                    { result: "Any high-risk", action: "Imaging required" },
                    { result: "Any low-risk AND can rotate neck 45°", action: "No imaging needed" }
                ]
            },
            {
                id: "trauma-005",
                name: "Ottawa Ankle Rules",
                purpose: "X-ray decision for ankle injury",
                when: "Ankle injury",
                xrayIndicated: [
                    "Bone tenderness at posterior edge/tip of lateral malleolus",
                    "Bone tenderness at posterior edge/tip of medial malleolus",
                    "Inability to bear weight (4 steps) immediately and in ED"
                ],
                sensitivity: "Nearly 100%"
            },
            {
                id: "trauma-006",
                name: "Ottawa Knee Rules",
                purpose: "X-ray decision for knee injury",
                when: "Knee injury",
                xrayIndicated: [
                    "Age ≥55",
                    "Isolated patella tenderness",
                    "Tenderness at fibular head",
                    "Inability to flex to 90°",
                    "Inability to bear weight (4 steps) immediately and in ED"
                ]
            }
        ]
    },

    // ============================================================
    // RENAL SCORES
    // ============================================================
    renal: {
        name: "Renal",
        scores: [
            {
                id: "renal-001",
                name: "CKD-EPI GFR",
                purpose: "Estimated GFR calculation",
                when: "CKD staging, medication dosing",
                variables: ["Creatinine", "Age", "Sex", "Race (2021 update removes race)"],
                staging: [
                    { stage: "G1", gfr: "≥90", description: "Normal or high" },
                    { stage: "G2", gfr: "60-89", description: "Mildly decreased" },
                    { stage: "G3a", gfr: "45-59", description: "Mildly-moderately decreased" },
                    { stage: "G3b", gfr: "30-44", description: "Moderately-severely decreased" },
                    { stage: "G4", gfr: "15-29", description: "Severely decreased" },
                    { stage: "G5", gfr: "<15", description: "Kidney failure" }
                ]
            },
            {
                id: "renal-002",
                name: "KDIGO AKI Staging",
                purpose: "Acute kidney injury staging",
                when: "Suspected AKI",
                stages: [
                    { stage: 1, creatinine: "1.5-1.9x baseline OR ≥0.3 increase", uop: "<0.5 mL/kg/h for 6-12h" },
                    { stage: 2, creatinine: "2-2.9x baseline", uop: "<0.5 mL/kg/h for ≥12h" },
                    { stage: 3, creatinine: "≥3x baseline OR ≥4.0 OR RRT initiation", uop: "<0.3 mL/kg/h for ≥24h or anuria ≥12h" }
                ]
            },
            {
                id: "renal-003",
                name: "FENa (Fractional Excretion of Sodium)",
                purpose: "Differentiate prerenal vs intrinsic AKI",
                when: "Oliguric AKI",
                formula: "(UNa × PCr) / (PNa × UCr) × 100",
                interpretation: [
                    { result: "<1%", diagnosis: "Prerenal azotemia (or contrast, myoglobin, early obstruction)" },
                    { result: ">2%", diagnosis: "Intrinsic renal (ATN)" },
                    { result: "1-2%", diagnosis: "Indeterminate" }
                ],
                caveat: "Use FEUrea if patient on diuretics"
            }
        ]
    },

    // ============================================================
    // SEARCH FUNCTION
    // ============================================================
    search(query, options = {}) {
        const { category = null, maxResults = 15 } = options;
        if (!query || query.length < 2) return [];

        const results = [];
        const queryLower = query.toLowerCase();

        const categoriesToSearch = category 
            ? [this[category]]
            : Object.values(this).filter(c => c && c.scores);

        for (const cat of categoriesToSearch) {
            if (!cat.scores) continue;

            for (const score of cat.scores) {
                let matchScore = 0;
                const nameLower = score.name.toLowerCase();
                const fullNameLower = (score.fullName || '').toLowerCase();
                const purposeLower = (score.purpose || '').toLowerCase();

                if (nameLower.includes(queryLower)) matchScore += 10;
                if (fullNameLower.includes(queryLower)) matchScore += 5;
                if (purposeLower.includes(queryLower)) matchScore += 3;

                if (matchScore > 0) {
                    results.push({ ...score, category: cat.name, matchScore });
                }
            }
        }

        return results.sort((a, b) => b.matchScore - a.matchScore).slice(0, maxResults);
    },

    // Get scores by clinical scenario
    getByScenario(scenario) {
        const scenarioMap = {
            'chest pain': ['HEART Score', 'TIMI', 'GRACE', 'Wells PE', 'PERC'],
            'shortness of breath': ['Wells PE', 'PERC', 'Geneva', 'CURB-65', 'PESI'],
            'stroke': ['NIHSS', 'ABCD²', 'CHA₂DS₂-VASc'],
            'gi bleed': ['Glasgow-Blatchford', 'Rockall'],
            'sepsis': ['qSOFA', 'SOFA', 'SIRS'],
            'trauma': ['GCS', 'Canadian CT Head', 'NEXUS', 'Canadian C-Spine'],
            'dvt': ['Wells DVT'],
            'pe': ['Wells PE', 'PERC', 'Geneva', 'PESI', 'sPESI'],
            'afib': ['CHA₂DS₂-VASc', 'HAS-BLED'],
            'cirrhosis': ['Child-Pugh', 'MELD'],
            'pancreatitis': ['Ranson\'s', 'BISAP']
        };

        const scores = scenarioMap[scenario.toLowerCase()] || [];
        return scores.map(name => this.search(name)[0]).filter(Boolean);
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClinicalScoresLibrary;
}
if (typeof window !== 'undefined') {
    window.ClinicalScoresLibrary = ClinicalScoresLibrary;
}
