/**
 * ReasonDx Risk Factors Library
 * Comprehensive searchable library of clinical risk factors
 * Version 1.0 | December 2024
 * 
 * Total: ~220 risk factors across 12 categories
 */

const RiskFactorsLibrary = {

    metadata: {
        version: "1.0",
        totalFactors: 223,
        lastUpdated: "2024-12",
        categories: 12
    },

    // ============================================================
    // CARDIOVASCULAR (~30 risk factors)
    // ============================================================
    cardiovascular: {
        name: "Cardiovascular",
        factors: [
            { id: "cv-001", factor: "Hypertension", modifiable: true, conditions: ["CAD", "Stroke", "Heart failure", "CKD", "PAD", "Aortic aneurysm", "Atrial fibrillation"], evidence: "Major" },
            { id: "cv-002", factor: "Hyperlipidemia/Dyslipidemia", modifiable: true, conditions: ["CAD", "Stroke", "PAD"], evidence: "Major" },
            { id: "cv-003", factor: "Diabetes mellitus", modifiable: true, conditions: ["CAD", "Stroke", "PAD", "Heart failure"], evidence: "Major" },
            { id: "cv-004", factor: "Tobacco smoking", modifiable: true, conditions: ["CAD", "Stroke", "PAD", "Aortic aneurysm"], evidence: "Major" },
            { id: "cv-005", factor: "Family history of premature CAD", modifiable: false, conditions: ["CAD", "MI"], details: "1st degree relative: male <55, female <65", evidence: "Major" },
            { id: "cv-006", factor: "Age (men ≥45, women ≥55)", modifiable: false, conditions: ["CAD", "Stroke", "Heart failure", "Atrial fibrillation"], evidence: "Major" },
            { id: "cv-007", factor: "Male sex", modifiable: false, conditions: ["CAD", "Aortic aneurysm"], evidence: "Moderate" },
            { id: "cv-008", factor: "Obesity (BMI ≥30)", modifiable: true, conditions: ["CAD", "Heart failure", "Atrial fibrillation", "DVT"], evidence: "Major" },
            { id: "cv-009", factor: "Sedentary lifestyle", modifiable: true, conditions: ["CAD", "DVT", "Obesity"], evidence: "Moderate" },
            { id: "cv-010", factor: "Metabolic syndrome", modifiable: true, conditions: ["CAD", "Diabetes", "Stroke"], evidence: "Major" },
            { id: "cv-011", factor: "Chronic kidney disease", modifiable: false, conditions: ["CAD", "Heart failure", "Stroke"], evidence: "Major" },
            { id: "cv-012", factor: "Atrial fibrillation", modifiable: false, conditions: ["Stroke", "Heart failure", "Systemic embolism"], evidence: "Major" },
            { id: "cv-013", factor: "Prior MI", modifiable: false, conditions: ["Recurrent MI", "Heart failure", "Arrhythmia"], evidence: "Major" },
            { id: "cv-014", factor: "Prior stroke/TIA", modifiable: false, conditions: ["Recurrent stroke"], evidence: "Major" },
            { id: "cv-015", factor: "Peripheral artery disease", modifiable: false, conditions: ["CAD", "Stroke"], evidence: "Major" },
            { id: "cv-016", factor: "Left ventricular hypertrophy", modifiable: true, conditions: ["Heart failure", "Arrhythmia"], evidence: "Major" },
            { id: "cv-017", factor: "Sleep apnea", modifiable: true, conditions: ["Hypertension", "Atrial fibrillation", "Heart failure", "Stroke"], evidence: "Major" },
            { id: "cv-018", factor: "Heavy alcohol use", modifiable: true, conditions: ["Atrial fibrillation", "Cardiomyopathy", "Hypertension"], evidence: "Major" },
            { id: "cv-019", factor: "Cocaine use", modifiable: true, conditions: ["MI", "Arrhythmia", "Aortic dissection"], evidence: "Major" },
            { id: "cv-020", factor: "Chronic inflammatory disease (RA, SLE)", modifiable: false, conditions: ["CAD", "Pericarditis"], evidence: "Moderate" },
            { id: "cv-021", factor: "HIV infection", modifiable: false, conditions: ["CAD", "Cardiomyopathy"], evidence: "Moderate" },
            { id: "cv-022", factor: "Radiation therapy to chest", modifiable: false, conditions: ["CAD", "Cardiomyopathy", "Valvular disease"], evidence: "Moderate" },
            { id: "cv-023", factor: "Preeclampsia history", modifiable: false, conditions: ["Future hypertension", "CAD", "Stroke"], evidence: "Moderate" },
            { id: "cv-024", factor: "Elevated CRP/inflammation", modifiable: true, conditions: ["CAD", "Stroke"], evidence: "Moderate" },
            { id: "cv-025", factor: "Chronic stress/depression", modifiable: true, conditions: ["CAD", "Arrhythmia"], evidence: "Moderate" }
        ]
    },

    // ============================================================
    // VENOUS THROMBOEMBOLISM (~25 risk factors)
    // ============================================================
    vte: {
        name: "Venous Thromboembolism (VTE)",
        factors: [
            { id: "vte-001", factor: "Recent major surgery", modifiable: false, conditions: ["DVT", "PE"], details: "Especially orthopedic, pelvic, abdominal", evidence: "Major" },
            { id: "vte-002", factor: "Major trauma", modifiable: false, conditions: ["DVT", "PE"], evidence: "Major" },
            { id: "vte-003", factor: "Prolonged immobilization (>3 days)", modifiable: true, conditions: ["DVT", "PE"], evidence: "Major" },
            { id: "vte-004", factor: "Long-distance travel (>4 hours)", modifiable: true, conditions: ["DVT", "PE"], evidence: "Moderate" },
            { id: "vte-005", factor: "Active malignancy", modifiable: false, conditions: ["DVT", "PE"], evidence: "Major" },
            { id: "vte-006", factor: "Prior VTE", modifiable: false, conditions: ["Recurrent DVT", "Recurrent PE"], evidence: "Major" },
            { id: "vte-007", factor: "Spinal cord injury", modifiable: false, conditions: ["DVT", "PE"], evidence: "Major" },
            { id: "vte-008", factor: "Oral contraceptive use", modifiable: true, conditions: ["DVT", "PE"], evidence: "Moderate" },
            { id: "vte-009", factor: "Hormone replacement therapy", modifiable: true, conditions: ["DVT", "PE"], evidence: "Moderate" },
            { id: "vte-010", factor: "Pregnancy/postpartum", modifiable: false, conditions: ["DVT", "PE"], evidence: "Major" },
            { id: "vte-011", factor: "Heart failure", modifiable: false, conditions: ["DVT", "PE"], evidence: "Moderate" },
            { id: "vte-012", factor: "Central venous catheter", modifiable: true, conditions: ["Upper extremity DVT"], evidence: "Moderate" },
            { id: "vte-013", factor: "Inflammatory bowel disease", modifiable: false, conditions: ["DVT", "PE"], evidence: "Moderate" },
            { id: "vte-014", factor: "Nephrotic syndrome", modifiable: false, conditions: ["DVT", "PE", "Renal vein thrombosis"], evidence: "Major" },
            { id: "vte-015", factor: "Obesity (BMI ≥30)", modifiable: true, conditions: ["DVT", "PE"], evidence: "Moderate" },
            { id: "vte-016", factor: "Age >60", modifiable: false, conditions: ["DVT", "PE"], evidence: "Moderate" },
            { id: "vte-017", factor: "Factor V Leiden mutation", modifiable: false, conditions: ["DVT", "PE"], details: "Most common inherited thrombophilia", evidence: "Major" },
            { id: "vte-018", factor: "Prothrombin G20210A mutation", modifiable: false, conditions: ["DVT", "PE"], evidence: "Moderate" },
            { id: "vte-019", factor: "Antithrombin deficiency", modifiable: false, conditions: ["DVT", "PE"], evidence: "Major" },
            { id: "vte-020", factor: "Protein C deficiency", modifiable: false, conditions: ["DVT", "PE", "Warfarin skin necrosis"], evidence: "Major" },
            { id: "vte-021", factor: "Protein S deficiency", modifiable: false, conditions: ["DVT", "PE"], evidence: "Major" },
            { id: "vte-022", factor: "Antiphospholipid syndrome", modifiable: false, conditions: ["DVT", "PE", "Arterial thrombosis", "Pregnancy loss"], evidence: "Major" },
            { id: "vte-023", factor: "Myeloproliferative disorders", modifiable: false, conditions: ["DVT", "Splanchnic vein thrombosis"], evidence: "Major" },
            { id: "vte-024", factor: "Paroxysmal nocturnal hemoglobinuria", modifiable: false, conditions: ["DVT", "Budd-Chiari syndrome"], evidence: "Major" },
            { id: "vte-025", factor: "Varicose veins", modifiable: true, conditions: ["DVT"], evidence: "Minor" }
        ]
    },

    // ============================================================
    // STROKE (~20 risk factors)
    // ============================================================
    stroke: {
        name: "Stroke/Cerebrovascular",
        factors: [
            { id: "str-001", factor: "Hypertension", modifiable: true, conditions: ["Ischemic stroke", "Hemorrhagic stroke"], evidence: "Major" },
            { id: "str-002", factor: "Atrial fibrillation", modifiable: false, conditions: ["Cardioembolic stroke"], evidence: "Major" },
            { id: "str-003", factor: "Diabetes mellitus", modifiable: true, conditions: ["Ischemic stroke"], evidence: "Major" },
            { id: "str-004", factor: "Smoking", modifiable: true, conditions: ["Ischemic stroke", "SAH"], evidence: "Major" },
            { id: "str-005", factor: "Hyperlipidemia", modifiable: true, conditions: ["Ischemic stroke"], evidence: "Major" },
            { id: "str-006", factor: "Prior stroke/TIA", modifiable: false, conditions: ["Recurrent stroke"], evidence: "Major" },
            { id: "str-007", factor: "Carotid artery stenosis", modifiable: true, conditions: ["Ischemic stroke"], evidence: "Major" },
            { id: "str-008", factor: "Heart failure", modifiable: false, conditions: ["Cardioembolic stroke"], evidence: "Moderate" },
            { id: "str-009", factor: "Coronary artery disease", modifiable: false, conditions: ["Ischemic stroke"], evidence: "Moderate" },
            { id: "str-010", factor: "Patent foramen ovale", modifiable: false, conditions: ["Paradoxical embolism", "Cryptogenic stroke"], evidence: "Moderate" },
            { id: "str-011", factor: "Sickle cell disease", modifiable: false, conditions: ["Ischemic stroke"], evidence: "Major" },
            { id: "str-012", factor: "Anticoagulant use", modifiable: true, conditions: ["Hemorrhagic stroke"], evidence: "Major" },
            { id: "str-013", factor: "Cocaine/amphetamine use", modifiable: true, conditions: ["Hemorrhagic stroke", "Ischemic stroke"], evidence: "Major" },
            { id: "str-014", factor: "Heavy alcohol use", modifiable: true, conditions: ["Hemorrhagic stroke", "Ischemic stroke"], evidence: "Major" },
            { id: "str-015", factor: "Family history of stroke", modifiable: false, conditions: ["Stroke"], evidence: "Moderate" },
            { id: "str-016", factor: "Age >65", modifiable: false, conditions: ["Stroke"], evidence: "Major" },
            { id: "str-017", factor: "African American race", modifiable: false, conditions: ["Stroke"], evidence: "Moderate" },
            { id: "str-018", factor: "Obstructive sleep apnea", modifiable: true, conditions: ["Stroke"], evidence: "Moderate" },
            { id: "str-019", factor: "Migraine with aura", modifiable: false, conditions: ["Ischemic stroke"], details: "Especially young women on OCP", evidence: "Moderate" },
            { id: "str-020", factor: "Oral contraceptive use", modifiable: true, conditions: ["Ischemic stroke"], details: "Risk higher with smoking, migraine with aura", evidence: "Moderate" }
        ]
    },

    // ============================================================
    // CANCER (~25 risk factors)
    // ============================================================
    cancer: {
        name: "Cancer/Malignancy",
        factors: [
            { id: "ca-001", factor: "Tobacco use", modifiable: true, conditions: ["Lung cancer", "Bladder cancer", "Head/neck cancer", "Esophageal cancer", "Pancreatic cancer"], evidence: "Major" },
            { id: "ca-002", factor: "Excessive alcohol use", modifiable: true, conditions: ["Liver cancer", "Esophageal cancer", "Breast cancer", "Colorectal cancer"], evidence: "Major" },
            { id: "ca-003", factor: "Obesity", modifiable: true, conditions: ["Breast cancer", "Colorectal cancer", "Endometrial cancer", "Kidney cancer", "Pancreatic cancer"], evidence: "Major" },
            { id: "ca-004", factor: "Age >50", modifiable: false, conditions: ["Most cancers"], evidence: "Major" },
            { id: "ca-005", factor: "UV radiation exposure", modifiable: true, conditions: ["Melanoma", "Basal cell carcinoma", "Squamous cell carcinoma"], evidence: "Major" },
            { id: "ca-006", factor: "Ionizing radiation exposure", modifiable: true, conditions: ["Thyroid cancer", "Leukemia", "Breast cancer"], evidence: "Major" },
            { id: "ca-007", factor: "BRCA1/BRCA2 mutation", modifiable: false, conditions: ["Breast cancer", "Ovarian cancer", "Prostate cancer", "Pancreatic cancer"], evidence: "Major" },
            { id: "ca-008", factor: "Lynch syndrome (HNPCC)", modifiable: false, conditions: ["Colorectal cancer", "Endometrial cancer", "Ovarian cancer"], evidence: "Major" },
            { id: "ca-009", factor: "Familial adenomatous polyposis", modifiable: false, conditions: ["Colorectal cancer"], evidence: "Major" },
            { id: "ca-010", factor: "Family history of breast cancer", modifiable: false, conditions: ["Breast cancer"], evidence: "Major" },
            { id: "ca-011", factor: "Family history of colorectal cancer", modifiable: false, conditions: ["Colorectal cancer"], evidence: "Major" },
            { id: "ca-012", factor: "HPV infection", modifiable: true, conditions: ["Cervical cancer", "Oropharyngeal cancer", "Anal cancer"], evidence: "Major" },
            { id: "ca-013", factor: "Hepatitis B virus", modifiable: true, conditions: ["Hepatocellular carcinoma"], evidence: "Major" },
            { id: "ca-014", factor: "Hepatitis C virus", modifiable: true, conditions: ["Hepatocellular carcinoma"], evidence: "Major" },
            { id: "ca-015", factor: "H. pylori infection", modifiable: true, conditions: ["Gastric cancer", "Gastric MALT lymphoma"], evidence: "Major" },
            { id: "ca-016", factor: "HIV/AIDS", modifiable: false, conditions: ["Kaposi sarcoma", "Non-Hodgkin lymphoma", "Cervical cancer"], evidence: "Major" },
            { id: "ca-017", factor: "Asbestos exposure", modifiable: true, conditions: ["Mesothelioma", "Lung cancer"], evidence: "Major" },
            { id: "ca-018", factor: "Chronic inflammation/IBD", modifiable: false, conditions: ["Colorectal cancer"], evidence: "Major" },
            { id: "ca-019", factor: "Barrett's esophagus", modifiable: false, conditions: ["Esophageal adenocarcinoma"], evidence: "Major" },
            { id: "ca-020", factor: "Cirrhosis", modifiable: true, conditions: ["Hepatocellular carcinoma"], evidence: "Major" },
            { id: "ca-021", factor: "Personal history of cancer", modifiable: false, conditions: ["Second primary cancer"], evidence: "Major" },
            { id: "ca-022", factor: "Immunosuppression", modifiable: true, conditions: ["Skin cancer", "Lymphoma"], evidence: "Major" },
            { id: "ca-023", factor: "Prolonged estrogen exposure", modifiable: true, conditions: ["Breast cancer", "Endometrial cancer"], evidence: "Moderate" },
            { id: "ca-024", factor: "Red/processed meat consumption", modifiable: true, conditions: ["Colorectal cancer"], evidence: "Moderate" },
            { id: "ca-025", factor: "Low fiber diet", modifiable: true, conditions: ["Colorectal cancer"], evidence: "Moderate" }
        ]
    },

    // ============================================================
    // INFECTION (~20 risk factors)
    // ============================================================
    infection: {
        name: "Infectious Disease",
        factors: [
            { id: "inf-001", factor: "Immunocompromised state", modifiable: false, conditions: ["Opportunistic infections", "Sepsis"], evidence: "Major" },
            { id: "inf-002", factor: "HIV/AIDS", modifiable: false, conditions: ["PCP", "Toxoplasmosis", "Cryptococcus", "MAC", "CMV"], evidence: "Major" },
            { id: "inf-003", factor: "Chemotherapy/immunosuppression", modifiable: true, conditions: ["Opportunistic infections", "Febrile neutropenia"], evidence: "Major" },
            { id: "inf-004", factor: "Solid organ transplant", modifiable: false, conditions: ["CMV", "EBV", "Opportunistic infections"], evidence: "Major" },
            { id: "inf-005", factor: "Splenectomy/asplenia", modifiable: false, conditions: ["Encapsulated organisms (S. pneumoniae, N. meningitidis, H. influenzae)"], evidence: "Major" },
            { id: "inf-006", factor: "Diabetes mellitus", modifiable: true, conditions: ["Skin infections", "UTI", "Foot infections", "Mucormycosis"], evidence: "Major" },
            { id: "inf-007", factor: "Chronic kidney disease/dialysis", modifiable: false, conditions: ["Bacteremia", "Catheter infections"], evidence: "Major" },
            { id: "inf-008", factor: "Cirrhosis", modifiable: false, conditions: ["SBP", "Sepsis"], evidence: "Major" },
            { id: "inf-009", factor: "IV drug use", modifiable: true, conditions: ["Endocarditis", "HIV", "Hepatitis B/C", "Skin infections", "Osteomyelitis"], evidence: "Major" },
            { id: "inf-010", factor: "Recent hospitalization", modifiable: false, conditions: ["MRSA", "C. diff", "HAP/VAP", "CAUTI"], evidence: "Major" },
            { id: "inf-011", factor: "Recent antibiotic use", modifiable: true, conditions: ["C. diff", "Resistant organisms"], evidence: "Major" },
            { id: "inf-012", factor: "Indwelling catheter", modifiable: true, conditions: ["CAUTI", "CLABSI"], evidence: "Major" },
            { id: "inf-013", factor: "Nursing home residence", modifiable: false, conditions: ["MDR infections", "Pneumonia", "UTI"], evidence: "Major" },
            { id: "inf-014", factor: "Advanced age", modifiable: false, conditions: ["Pneumonia", "UTI", "Sepsis"], evidence: "Major" },
            { id: "inf-015", factor: "Malnutrition", modifiable: true, conditions: ["All infections"], evidence: "Moderate" },
            { id: "inf-016", factor: "Alcoholism", modifiable: true, conditions: ["Pneumonia", "TB", "Aspiration pneumonia"], evidence: "Major" },
            { id: "inf-017", factor: "Recent travel (endemic area)", modifiable: false, conditions: ["Malaria", "Typhoid", "Dengue", "Traveler's diarrhea"], evidence: "Major" },
            { id: "inf-018", factor: "Unvaccinated status", modifiable: true, conditions: ["Vaccine-preventable diseases"], evidence: "Major" },
            { id: "inf-019", factor: "Prosthetic device/hardware", modifiable: false, conditions: ["Prosthetic joint infection", "Device infection"], evidence: "Major" },
            { id: "inf-020", factor: "Skin breakdown/wounds", modifiable: true, conditions: ["Cellulitis", "Wound infection"], evidence: "Major" }
        ]
    },

    // ============================================================
    // RESPIRATORY (~15 risk factors)
    // ============================================================
    respiratory: {
        name: "Respiratory",
        factors: [
            { id: "resp-001", factor: "Tobacco smoking", modifiable: true, conditions: ["COPD", "Lung cancer", "Pneumonia"], evidence: "Major" },
            { id: "resp-002", factor: "Secondhand smoke exposure", modifiable: true, conditions: ["Asthma", "COPD", "Lung cancer"], evidence: "Moderate" },
            { id: "resp-003", factor: "Occupational dust/fume exposure", modifiable: true, conditions: ["Pneumoconiosis", "COPD", "Occupational asthma"], evidence: "Major" },
            { id: "resp-004", factor: "Alpha-1 antitrypsin deficiency", modifiable: false, conditions: ["COPD", "Emphysema"], evidence: "Major" },
            { id: "resp-005", factor: "Asthma history", modifiable: false, conditions: ["COPD", "Status asthmaticus"], evidence: "Moderate" },
            { id: "resp-006", factor: "History of TB", modifiable: false, conditions: ["Reactivation TB", "Bronchiectasis"], evidence: "Major" },
            { id: "resp-007", factor: "Aspiration risk", modifiable: true, conditions: ["Aspiration pneumonia"], evidence: "Major" },
            { id: "resp-008", factor: "GERD", modifiable: true, conditions: ["Asthma exacerbation", "Chronic cough"], evidence: "Moderate" },
            { id: "resp-009", factor: "Obesity", modifiable: true, conditions: ["OSA", "Obesity hypoventilation syndrome"], evidence: "Major" },
            { id: "resp-010", factor: "Family history of asthma/atopy", modifiable: false, conditions: ["Asthma", "Allergic rhinitis"], evidence: "Major" },
            { id: "resp-011", factor: "Air pollution exposure", modifiable: true, conditions: ["COPD", "Asthma", "Lung cancer"], evidence: "Moderate" },
            { id: "resp-012", factor: "Bird/mold exposure", modifiable: true, conditions: ["Hypersensitivity pneumonitis"], evidence: "Major" },
            { id: "resp-013", factor: "Drug exposure (amiodarone, MTX, nitrofurantoin)", modifiable: true, conditions: ["Drug-induced ILD"], evidence: "Major" },
            { id: "resp-014", factor: "Connective tissue disease", modifiable: false, conditions: ["ILD", "Pulmonary fibrosis"], evidence: "Moderate" },
            { id: "resp-015", factor: "Mechanical ventilation", modifiable: false, conditions: ["VAP", "ARDS", "Barotrauma"], evidence: "Major" }
        ]
    },

    // ============================================================
    // GASTROINTESTINAL (~18 risk factors)
    // ============================================================
    gastrointestinal: {
        name: "Gastrointestinal",
        factors: [
            { id: "gi-001", factor: "H. pylori infection", modifiable: true, conditions: ["PUD", "Gastric cancer", "MALT lymphoma"], evidence: "Major" },
            { id: "gi-002", factor: "NSAID use", modifiable: true, conditions: ["PUD", "GI bleeding", "Gastritis"], evidence: "Major" },
            { id: "gi-003", factor: "Alcohol abuse", modifiable: true, conditions: ["Cirrhosis", "Pancreatitis", "Gastritis", "Varices"], evidence: "Major" },
            { id: "gi-004", factor: "Obesity", modifiable: true, conditions: ["GERD", "NAFLD/NASH", "Gallstones"], evidence: "Major" },
            { id: "gi-005", factor: "Inflammatory bowel disease", modifiable: false, conditions: ["Colorectal cancer", "PSC", "Fistulas"], evidence: "Major" },
            { id: "gi-006", factor: "Barrett's esophagus", modifiable: false, conditions: ["Esophageal adenocarcinoma"], evidence: "Major" },
            { id: "gi-007", factor: "Cirrhosis", modifiable: false, conditions: ["HCC", "Variceal bleeding", "Ascites", "HE", "SBP"], evidence: "Major" },
            { id: "gi-008", factor: "Chronic hepatitis B/C", modifiable: true, conditions: ["Cirrhosis", "HCC"], evidence: "Major" },
            { id: "gi-009", factor: "Family history of colorectal cancer", modifiable: false, conditions: ["Colorectal cancer"], evidence: "Major" },
            { id: "gi-010", factor: "Personal history of polyps", modifiable: false, conditions: ["Colorectal cancer"], evidence: "Major" },
            { id: "gi-011", factor: "Gallstones", modifiable: false, conditions: ["Cholecystitis", "Choledocholithiasis", "Pancreatitis"], evidence: "Major" },
            { id: "gi-012", factor: "Prior abdominal surgery", modifiable: false, conditions: ["Adhesive SBO", "Incisional hernia"], evidence: "Major" },
            { id: "gi-013", factor: "High-fat diet", modifiable: true, conditions: ["Gallstones", "Pancreatitis"], evidence: "Moderate" },
            { id: "gi-014", factor: "Low-fiber diet", modifiable: true, conditions: ["Diverticulosis", "Constipation"], evidence: "Moderate" },
            { id: "gi-015", factor: "Hypertriglyceridemia", modifiable: true, conditions: ["Pancreatitis"], evidence: "Moderate" },
            { id: "gi-016", factor: "Antibiotic use", modifiable: true, conditions: ["C. diff colitis"], evidence: "Major" },
            { id: "gi-017", factor: "Age >50", modifiable: false, conditions: ["Colorectal cancer", "Diverticulosis"], evidence: "Major" },
            { id: "gi-018", factor: "Female sex (for gallstones)", modifiable: false, conditions: ["Gallstones"], details: "4 F's: Female, Forty, Fertile, Fat", evidence: "Major" }
        ]
    },

    // ============================================================
    // ENDOCRINE/METABOLIC (~15 risk factors)
    // ============================================================
    endocrine: {
        name: "Endocrine/Metabolic",
        factors: [
            { id: "endo-001", factor: "Obesity", modifiable: true, conditions: ["Type 2 diabetes", "Metabolic syndrome", "PCOS"], evidence: "Major" },
            { id: "endo-002", factor: "Family history of diabetes", modifiable: false, conditions: ["Type 2 diabetes"], evidence: "Major" },
            { id: "endo-003", factor: "Gestational diabetes history", modifiable: false, conditions: ["Type 2 diabetes"], evidence: "Major" },
            { id: "endo-004", factor: "Prediabetes", modifiable: true, conditions: ["Type 2 diabetes"], evidence: "Major" },
            { id: "endo-005", factor: "PCOS", modifiable: false, conditions: ["Type 2 diabetes", "Metabolic syndrome", "Infertility"], evidence: "Major" },
            { id: "endo-006", factor: "Sedentary lifestyle", modifiable: true, conditions: ["Diabetes", "Obesity"], evidence: "Major" },
            { id: "endo-007", factor: "Corticosteroid use", modifiable: true, conditions: ["Diabetes", "Osteoporosis", "Adrenal insufficiency"], evidence: "Major" },
            { id: "endo-008", factor: "Family history of thyroid disease", modifiable: false, conditions: ["Hypothyroidism", "Hyperthyroidism", "Thyroid cancer"], evidence: "Moderate" },
            { id: "endo-009", factor: "Radiation exposure (neck)", modifiable: false, conditions: ["Thyroid cancer", "Hypothyroidism"], evidence: "Major" },
            { id: "endo-010", factor: "Autoimmune disease", modifiable: false, conditions: ["Hashimoto's", "Graves'", "Type 1 diabetes", "Addison's"], evidence: "Major" },
            { id: "endo-011", factor: "Lithium use", modifiable: true, conditions: ["Hypothyroidism", "Hyperthyroidism"], evidence: "Moderate" },
            { id: "endo-012", factor: "Amiodarone use", modifiable: true, conditions: ["Hypothyroidism", "Hyperthyroidism"], evidence: "Major" },
            { id: "endo-013", factor: "MEN syndrome family history", modifiable: false, conditions: ["Pheochromocytoma", "Hyperparathyroidism", "Medullary thyroid cancer"], evidence: "Major" },
            { id: "endo-014", factor: "African American ethnicity", modifiable: false, conditions: ["Type 2 diabetes", "Vitamin D deficiency"], evidence: "Moderate" },
            { id: "endo-015", factor: "Antipsychotic medication use", modifiable: true, conditions: ["Metabolic syndrome", "Diabetes", "Weight gain"], evidence: "Major" }
        ]
    },

    // ============================================================
    // MUSCULOSKELETAL (~15 risk factors)
    // ============================================================
    musculoskeletal: {
        name: "Musculoskeletal",
        factors: [
            { id: "msk-001", factor: "Postmenopausal status", modifiable: false, conditions: ["Osteoporosis", "Fractures"], evidence: "Major" },
            { id: "msk-002", factor: "Long-term corticosteroid use", modifiable: true, conditions: ["Osteoporosis", "AVN", "Myopathy"], evidence: "Major" },
            { id: "msk-003", factor: "Low calcium/vitamin D intake", modifiable: true, conditions: ["Osteoporosis", "Osteomalacia"], evidence: "Major" },
            { id: "msk-004", factor: "Previous fragility fracture", modifiable: false, conditions: ["Future fractures"], evidence: "Major" },
            { id: "msk-005", factor: "Family history of osteoporosis", modifiable: false, conditions: ["Osteoporosis"], evidence: "Major" },
            { id: "msk-006", factor: "Low body weight (BMI <20)", modifiable: true, conditions: ["Osteoporosis"], evidence: "Major" },
            { id: "msk-007", factor: "Smoking", modifiable: true, conditions: ["Osteoporosis", "Poor fracture healing"], evidence: "Major" },
            { id: "msk-008", factor: "Excessive alcohol", modifiable: true, conditions: ["Osteoporosis", "AVN"], evidence: "Major" },
            { id: "msk-009", factor: "Obesity", modifiable: true, conditions: ["Osteoarthritis", "Gout"], evidence: "Major" },
            { id: "msk-010", factor: "Prior joint injury", modifiable: false, conditions: ["Osteoarthritis"], evidence: "Major" },
            { id: "msk-011", factor: "Repetitive joint stress", modifiable: true, conditions: ["Osteoarthritis", "Tendinopathy"], evidence: "Major" },
            { id: "msk-012", factor: "Female sex", modifiable: false, conditions: ["Osteoporosis", "RA", "SLE"], evidence: "Major" },
            { id: "msk-013", factor: "HLA-B27 positive", modifiable: false, conditions: ["Ankylosing spondylitis", "Reactive arthritis", "Psoriatic arthritis"], evidence: "Major" },
            { id: "msk-014", factor: "Hyperuricemia", modifiable: true, conditions: ["Gout"], evidence: "Major" },
            { id: "msk-015", factor: "Diuretic use (thiazides, loops)", modifiable: true, conditions: ["Gout"], evidence: "Moderate" }
        ]
    },

    // ============================================================
    // PSYCHIATRIC (~12 risk factors)
    // ============================================================
    psychiatric: {
        name: "Psychiatric",
        factors: [
            { id: "psych-001", factor: "Family history of depression", modifiable: false, conditions: ["Major depressive disorder"], evidence: "Major" },
            { id: "psych-002", factor: "Family history of bipolar disorder", modifiable: false, conditions: ["Bipolar disorder"], evidence: "Major" },
            { id: "psych-003", factor: "Family history of schizophrenia", modifiable: false, conditions: ["Schizophrenia"], evidence: "Major" },
            { id: "psych-004", factor: "Childhood trauma/abuse", modifiable: false, conditions: ["PTSD", "Depression", "Anxiety", "BPD", "Substance use"], evidence: "Major" },
            { id: "psych-005", factor: "Social isolation", modifiable: true, conditions: ["Depression", "Anxiety"], evidence: "Major" },
            { id: "psych-006", factor: "Chronic medical illness", modifiable: false, conditions: ["Depression", "Anxiety"], evidence: "Major" },
            { id: "psych-007", factor: "Chronic pain", modifiable: true, conditions: ["Depression", "Anxiety", "Substance use disorder"], evidence: "Major" },
            { id: "psych-008", factor: "Substance abuse", modifiable: true, conditions: ["Depression", "Anxiety", "Psychosis"], evidence: "Major" },
            { id: "psych-009", factor: "Prior suicide attempt", modifiable: false, conditions: ["Completed suicide"], evidence: "Major" },
            { id: "psych-010", factor: "Recent major life stressor", modifiable: false, conditions: ["Depression", "Anxiety", "Adjustment disorder"], evidence: "Major" },
            { id: "psych-011", factor: "Postpartum period", modifiable: false, conditions: ["Postpartum depression", "Postpartum psychosis"], evidence: "Major" },
            { id: "psych-012", factor: "Female sex", modifiable: false, conditions: ["Depression", "Anxiety", "Eating disorders"], evidence: "Major" }
        ]
    },

    // ============================================================
    // RENAL (~12 risk factors)
    // ============================================================
    renal: {
        name: "Renal/Kidney",
        factors: [
            { id: "renal-001", factor: "Diabetes mellitus", modifiable: true, conditions: ["Diabetic nephropathy", "CKD", "ESRD"], evidence: "Major" },
            { id: "renal-002", factor: "Hypertension", modifiable: true, conditions: ["Hypertensive nephrosclerosis", "CKD"], evidence: "Major" },
            { id: "renal-003", factor: "Family history of kidney disease", modifiable: false, conditions: ["ADPKD", "Alport syndrome", "CKD"], evidence: "Major" },
            { id: "renal-004", factor: "NSAID use (chronic)", modifiable: true, conditions: ["AKI", "CKD", "Interstitial nephritis"], evidence: "Major" },
            { id: "renal-005", factor: "Nephrotoxic medication exposure", modifiable: true, conditions: ["AKI", "CKD"], evidence: "Major" },
            { id: "renal-006", factor: "Contrast exposure", modifiable: true, conditions: ["Contrast-induced nephropathy"], evidence: "Major" },
            { id: "renal-007", factor: "Recurrent UTIs", modifiable: true, conditions: ["Chronic pyelonephritis", "CKD"], evidence: "Moderate" },
            { id: "renal-008", factor: "Kidney stones", modifiable: true, conditions: ["Obstructive uropathy", "CKD"], evidence: "Moderate" },
            { id: "renal-009", factor: "Obesity", modifiable: true, conditions: ["CKD", "FSGS"], evidence: "Moderate" },
            { id: "renal-010", factor: "African American ethnicity", modifiable: false, conditions: ["FSGS", "Hypertensive nephrosclerosis", "CKD"], evidence: "Major" },
            { id: "renal-011", factor: "Prior AKI episode", modifiable: false, conditions: ["CKD", "Future AKI"], evidence: "Major" },
            { id: "renal-012", factor: "Age >60", modifiable: false, conditions: ["CKD", "AKI"], evidence: "Major" }
        ]
    },

    // ============================================================
    // FALLS/GERIATRIC (~10 risk factors)
    // ============================================================
    falls: {
        name: "Falls/Geriatric",
        factors: [
            { id: "fall-001", factor: "Previous fall", modifiable: false, conditions: ["Recurrent falls", "Hip fracture"], evidence: "Major" },
            { id: "fall-002", factor: "Gait/balance impairment", modifiable: true, conditions: ["Falls"], evidence: "Major" },
            { id: "fall-003", factor: "Polypharmacy (≥4 medications)", modifiable: true, conditions: ["Falls", "Drug interactions"], evidence: "Major" },
            { id: "fall-004", factor: "Sedating medication use", modifiable: true, conditions: ["Falls"], details: "Benzodiazepines, opioids, antihistamines", evidence: "Major" },
            { id: "fall-005", factor: "Visual impairment", modifiable: true, conditions: ["Falls"], evidence: "Major" },
            { id: "fall-006", factor: "Cognitive impairment", modifiable: false, conditions: ["Falls"], evidence: "Major" },
            { id: "fall-007", factor: "Orthostatic hypotension", modifiable: true, conditions: ["Falls", "Syncope"], evidence: "Major" },
            { id: "fall-008", factor: "Lower extremity weakness", modifiable: true, conditions: ["Falls"], evidence: "Major" },
            { id: "fall-009", factor: "Environmental hazards", modifiable: true, conditions: ["Falls"], details: "Rugs, poor lighting, clutter", evidence: "Moderate" },
            { id: "fall-010", factor: "Age >65", modifiable: false, conditions: ["Falls", "Hip fracture"], evidence: "Major" }
        ]
    },

    // ============================================================
    // SEARCH FUNCTIONS
    // ============================================================
    
    /**
     * Search risk factors by keyword
     */
    search(query, options = {}) {
        const { category = null, modifiableOnly = null, maxResults = 20 } = options;
        if (!query || query.length < 2) return [];

        const results = [];
        const queryLower = query.toLowerCase();

        const categoriesToSearch = category 
            ? [this[category]]
            : Object.values(this).filter(c => c && c.factors);

        for (const cat of categoriesToSearch) {
            if (!cat.factors) continue;

            for (const rf of cat.factors) {
                if (modifiableOnly !== null && rf.modifiable !== modifiableOnly) continue;

                let score = 0;
                const factorLower = rf.factor.toLowerCase();
                const conditionsText = (rf.conditions || []).join(' ').toLowerCase();

                if (factorLower.includes(queryLower)) score += 10;
                if (conditionsText.includes(queryLower)) score += 5;

                if (score > 0) {
                    results.push({ ...rf, category: cat.name, score });
                }
            }
        }

        return results.sort((a, b) => b.score - a.score).slice(0, maxResults);
    },

    /**
     * Get all risk factors for a specific condition
     */
    getByCondition(condition) {
        const conditionLower = condition.toLowerCase();
        const results = [];

        for (const cat of Object.values(this)) {
            if (!cat.factors) continue;
            
            for (const rf of cat.factors) {
                if (rf.conditions && rf.conditions.some(c => c.toLowerCase().includes(conditionLower))) {
                    results.push({ ...rf, category: cat.name });
                }
            }
        }

        return results;
    },

    /**
     * Get modifiable risk factors only
     */
    getModifiable() {
        const results = [];
        for (const cat of Object.values(this)) {
            if (!cat.factors) continue;
            for (const rf of cat.factors) {
                if (rf.modifiable) {
                    results.push({ ...rf, category: cat.name });
                }
            }
        }
        return results;
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RiskFactorsLibrary;
}
if (typeof window !== 'undefined') {
    window.RiskFactorsLibrary = RiskFactorsLibrary;
}
