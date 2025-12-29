/**
 * ReasonDx Searchable Orders System with Structured Reasoning
 * Comprehensive laboratory, imaging, procedures, and consultations
 * with hypothesis-driven justification requirements
 * 
 * Last Updated: December 28, 2025
 */

(function() {
    'use strict';

    // =========================================================================
    // COMPREHENSIVE ORDERS DATABASE
    // =========================================================================
    
    window.MASTER_ORDERS = {
        labs: {
            name: "Laboratory Tests",
            icon: "🧪",
            categories: {
                hematology: {
                    name: "Hematology",
                    tests: [
                        { id: "cbc", name: "CBC with Differential", turnaround: "1 hr", cost: "$" },
                        { id: "retic", name: "Reticulocyte Count", turnaround: "2 hr", cost: "$" },
                        { id: "peripheral_smear", name: "Peripheral Blood Smear", turnaround: "4 hr", cost: "$$" },
                        { id: "esr", name: "ESR (Sed Rate)", turnaround: "1 hr", cost: "$" },
                        { id: "crp", name: "C-Reactive Protein", turnaround: "1 hr", cost: "$" },
                        { id: "procalcitonin", name: "Procalcitonin", turnaround: "2 hr", cost: "$$" },
                        { id: "ferritin", name: "Ferritin", turnaround: "4 hr", cost: "$" },
                        { id: "iron_studies", name: "Iron Studies (Fe, TIBC, %Sat)", turnaround: "4 hr", cost: "$$" },
                        { id: "b12", name: "Vitamin B12", turnaround: "4 hr", cost: "$" },
                        { id: "folate", name: "Folate", turnaround: "4 hr", cost: "$" },
                        { id: "haptoglobin", name: "Haptoglobin", turnaround: "4 hr", cost: "$$" },
                        { id: "ldh", name: "LDH", turnaround: "2 hr", cost: "$" },
                        { id: "fibrinogen", name: "Fibrinogen", turnaround: "2 hr", cost: "$" },
                        { id: "d_dimer", name: "D-Dimer", turnaround: "1 hr", cost: "$$" }
                    ]
                },
                chemistry: {
                    name: "Chemistry",
                    tests: [
                        { id: "bmp", name: "BMP (Basic Metabolic Panel)", turnaround: "1 hr", cost: "$" },
                        { id: "cmp", name: "CMP (Comprehensive Metabolic Panel)", turnaround: "1 hr", cost: "$" },
                        { id: "glucose", name: "Glucose (fingerstick or serum)", turnaround: "5 min", cost: "$" },
                        { id: "hba1c", name: "Hemoglobin A1c", turnaround: "4 hr", cost: "$" },
                        { id: "magnesium", name: "Magnesium", turnaround: "2 hr", cost: "$" },
                        { id: "phosphorus", name: "Phosphorus", turnaround: "2 hr", cost: "$" },
                        { id: "calcium_ionized", name: "Ionized Calcium", turnaround: "1 hr", cost: "$" },
                        { id: "uric_acid", name: "Uric Acid", turnaround: "2 hr", cost: "$" },
                        { id: "ammonia", name: "Ammonia", turnaround: "1 hr", cost: "$" },
                        { id: "lactate", name: "Lactate", turnaround: "30 min", cost: "$" },
                        { id: "osmolality_serum", name: "Serum Osmolality", turnaround: "2 hr", cost: "$" },
                        { id: "osmolality_urine", name: "Urine Osmolality", turnaround: "2 hr", cost: "$" }
                    ]
                },
                liver: {
                    name: "Hepatic/GI",
                    tests: [
                        { id: "lfts", name: "LFTs (AST, ALT, Alk Phos, Bili, Albumin)", turnaround: "2 hr", cost: "$" },
                        { id: "ggt", name: "GGT", turnaround: "2 hr", cost: "$" },
                        { id: "lipase", name: "Lipase", turnaround: "2 hr", cost: "$" },
                        { id: "amylase", name: "Amylase", turnaround: "2 hr", cost: "$" },
                        { id: "hepatitis_panel", name: "Hepatitis Panel (A, B, C)", turnaround: "24 hr", cost: "$$$" },
                        { id: "acetaminophen_level", name: "Acetaminophen Level", turnaround: "2 hr", cost: "$" },
                        { id: "alcohol_level", name: "Alcohol Level", turnaround: "1 hr", cost: "$" },
                        { id: "ceruloplasmin", name: "Ceruloplasmin", turnaround: "24 hr", cost: "$$" },
                        { id: "alpha1_antitrypsin", name: "Alpha-1 Antitrypsin", turnaround: "24 hr", cost: "$$" }
                    ]
                },
                cardiac: {
                    name: "Cardiac Markers",
                    tests: [
                        { id: "troponin", name: "Troponin (High-sensitivity)", turnaround: "1 hr", cost: "$$" },
                        { id: "bnp", name: "BNP", turnaround: "1 hr", cost: "$$" },
                        { id: "nt_probnp", name: "NT-proBNP", turnaround: "1 hr", cost: "$$" },
                        { id: "ck_mb", name: "CK-MB", turnaround: "2 hr", cost: "$" },
                        { id: "ck_total", name: "CK Total", turnaround: "2 hr", cost: "$" },
                        { id: "myoglobin", name: "Myoglobin", turnaround: "2 hr", cost: "$" }
                    ]
                },
                coagulation: {
                    name: "Coagulation",
                    tests: [
                        { id: "pt_inr", name: "PT/INR", turnaround: "1 hr", cost: "$" },
                        { id: "ptt", name: "PTT", turnaround: "1 hr", cost: "$" },
                        { id: "mixing_study", name: "Mixing Study", turnaround: "4 hr", cost: "$$" },
                        { id: "factor_levels", name: "Factor Levels (specify)", turnaround: "24 hr", cost: "$$$" },
                        { id: "antithrombin", name: "Antithrombin III", turnaround: "24 hr", cost: "$$" },
                        { id: "protein_c", name: "Protein C", turnaround: "24 hr", cost: "$$" },
                        { id: "protein_s", name: "Protein S", turnaround: "24 hr", cost: "$$" },
                        { id: "factor_v_leiden", name: "Factor V Leiden", turnaround: "72 hr", cost: "$$$" },
                        { id: "lupus_anticoag", name: "Lupus Anticoagulant", turnaround: "24 hr", cost: "$$" },
                        { id: "anticardiolipin", name: "Anticardiolipin Antibodies", turnaround: "24 hr", cost: "$$" }
                    ]
                },
                endocrine: {
                    name: "Endocrine",
                    tests: [
                        { id: "tsh", name: "TSH", turnaround: "4 hr", cost: "$" },
                        { id: "free_t4", name: "Free T4", turnaround: "4 hr", cost: "$" },
                        { id: "free_t3", name: "Free T3", turnaround: "4 hr", cost: "$" },
                        { id: "cortisol_am", name: "AM Cortisol", turnaround: "4 hr", cost: "$" },
                        { id: "cortisol_random", name: "Random Cortisol", turnaround: "4 hr", cost: "$" },
                        { id: "acth", name: "ACTH", turnaround: "24 hr", cost: "$$" },
                        { id: "aldosterone", name: "Aldosterone", turnaround: "24 hr", cost: "$$" },
                        { id: "renin", name: "Renin", turnaround: "24 hr", cost: "$$" },
                        { id: "pth", name: "PTH (Parathyroid Hormone)", turnaround: "4 hr", cost: "$$" },
                        { id: "vitamin_d", name: "Vitamin D (25-OH)", turnaround: "24 hr", cost: "$" },
                        { id: "insulin", name: "Insulin Level", turnaround: "4 hr", cost: "$" },
                        { id: "c_peptide", name: "C-Peptide", turnaround: "24 hr", cost: "$$" },
                        { id: "hcg_quant", name: "Beta-hCG (Quantitative)", turnaround: "2 hr", cost: "$" },
                        { id: "prolactin", name: "Prolactin", turnaround: "4 hr", cost: "$" },
                        { id: "testosterone", name: "Testosterone", turnaround: "24 hr", cost: "$" },
                        { id: "estradiol", name: "Estradiol", turnaround: "24 hr", cost: "$" },
                        { id: "fsh_lh", name: "FSH/LH", turnaround: "24 hr", cost: "$$" }
                    ]
                },
                renal: {
                    name: "Renal/Urinalysis",
                    tests: [
                        { id: "ua", name: "Urinalysis", turnaround: "1 hr", cost: "$" },
                        { id: "urine_micro", name: "Urine Microscopy", turnaround: "2 hr", cost: "$" },
                        { id: "urine_culture", name: "Urine Culture", turnaround: "48 hr", cost: "$$" },
                        { id: "urine_electrolytes", name: "Urine Electrolytes (Na, K, Cl, Cr)", turnaround: "4 hr", cost: "$$" },
                        { id: "fena", name: "FENa Calculation", turnaround: "4 hr", cost: "$$" },
                        { id: "urine_protein_cr", name: "Urine Protein/Creatinine Ratio", turnaround: "4 hr", cost: "$" },
                        { id: "24hr_urine", name: "24-Hour Urine Collection", turnaround: "24+ hr", cost: "$$" },
                        { id: "urine_drug_screen", name: "Urine Drug Screen", turnaround: "2 hr", cost: "$" },
                        { id: "urine_pregnancy", name: "Urine Pregnancy Test", turnaround: "15 min", cost: "$" }
                    ]
                },
                infectious: {
                    name: "Infectious Disease",
                    tests: [
                        { id: "blood_culture", name: "Blood Cultures x2", turnaround: "48-72 hr", cost: "$$" },
                        { id: "sputum_culture", name: "Sputum Culture", turnaround: "48-72 hr", cost: "$$" },
                        { id: "sputum_gram_stain", name: "Sputum Gram Stain", turnaround: "2 hr", cost: "$" },
                        { id: "wound_culture", name: "Wound Culture", turnaround: "48-72 hr", cost: "$$" },
                        { id: "csf_studies", name: "CSF Studies (Cell count, Protein, Glucose, Gram stain, Culture)", turnaround: "varies", cost: "$$$" },
                        { id: "respiratory_viral", name: "Respiratory Viral Panel", turnaround: "4 hr", cost: "$$" },
                        { id: "flu_test", name: "Influenza A/B PCR", turnaround: "2 hr", cost: "$$" },
                        { id: "covid_pcr", name: "COVID-19 PCR", turnaround: "4 hr", cost: "$$" },
                        { id: "strep_rapid", name: "Rapid Strep Test", turnaround: "15 min", cost: "$" },
                        { id: "mono_spot", name: "Monospot (Heterophile Ab)", turnaround: "2 hr", cost: "$" },
                        { id: "hiv_test", name: "HIV Antibody/Antigen", turnaround: "4 hr", cost: "$" },
                        { id: "rpr_vdrl", name: "RPR/VDRL (Syphilis)", turnaround: "24 hr", cost: "$" },
                        { id: "gonorrhea_chlamydia", name: "GC/Chlamydia PCR", turnaround: "24 hr", cost: "$$" },
                        { id: "c_diff", name: "C. difficile Toxin/PCR", turnaround: "4 hr", cost: "$$" },
                        { id: "stool_culture", name: "Stool Culture", turnaround: "48-72 hr", cost: "$$" },
                        { id: "stool_ova_parasites", name: "Stool Ova & Parasites", turnaround: "24 hr", cost: "$$" },
                        { id: "legionella_urine", name: "Legionella Urine Antigen", turnaround: "4 hr", cost: "$$" },
                        { id: "strep_pneumo_urine", name: "Strep pneumo Urine Antigen", turnaround: "4 hr", cost: "$$" },
                        { id: "tb_quantiferon", name: "QuantiFERON-TB Gold", turnaround: "24-48 hr", cost: "$$" },
                        { id: "afb_smear_culture", name: "AFB Smear & Culture", turnaround: "6 weeks", cost: "$$$" }
                    ]
                },
                autoimmune: {
                    name: "Autoimmune/Rheumatology",
                    tests: [
                        { id: "ana", name: "ANA", turnaround: "24 hr", cost: "$$" },
                        { id: "rf", name: "Rheumatoid Factor", turnaround: "24 hr", cost: "$" },
                        { id: "anti_ccp", name: "Anti-CCP", turnaround: "24 hr", cost: "$$" },
                        { id: "dsdna", name: "Anti-dsDNA", turnaround: "24 hr", cost: "$$" },
                        { id: "complement", name: "Complement (C3, C4)", turnaround: "24 hr", cost: "$$" },
                        { id: "anca", name: "ANCA (p-ANCA, c-ANCA)", turnaround: "24 hr", cost: "$$" },
                        { id: "anti_gbm", name: "Anti-GBM Antibody", turnaround: "24 hr", cost: "$$" },
                        { id: "cryoglobulins", name: "Cryoglobulins", turnaround: "72 hr", cost: "$$$" }
                    ]
                },
                toxicology: {
                    name: "Toxicology",
                    tests: [
                        { id: "tox_screen", name: "Urine Toxicology Screen", turnaround: "2 hr", cost: "$" },
                        { id: "serum_tox", name: "Serum Toxicology Panel", turnaround: "4 hr", cost: "$$" },
                        { id: "digoxin_level", name: "Digoxin Level", turnaround: "4 hr", cost: "$" },
                        { id: "lithium_level", name: "Lithium Level", turnaround: "4 hr", cost: "$" },
                        { id: "valproic_level", name: "Valproic Acid Level", turnaround: "4 hr", cost: "$" },
                        { id: "phenytoin_level", name: "Phenytoin Level", turnaround: "4 hr", cost: "$" },
                        { id: "salicylate_level", name: "Salicylate Level", turnaround: "2 hr", cost: "$" },
                        { id: "carboxyhemoglobin", name: "Carboxyhemoglobin", turnaround: "1 hr", cost: "$" },
                        { id: "methemoglobin", name: "Methemoglobin", turnaround: "1 hr", cost: "$" },
                        { id: "lead_level", name: "Lead Level", turnaround: "24 hr", cost: "$$" },
                        { id: "theophylline", name: "Theophylline Level", turnaround: "4 hr", cost: "$" }
                    ]
                },
                abg: {
                    name: "Blood Gas",
                    tests: [
                        { id: "abg", name: "Arterial Blood Gas", turnaround: "15 min", cost: "$$" },
                        { id: "vbg", name: "Venous Blood Gas", turnaround: "15 min", cost: "$" }
                    ]
                },
                tumor_markers: {
                    name: "Tumor Markers",
                    tests: [
                        { id: "psa", name: "PSA", turnaround: "24 hr", cost: "$" },
                        { id: "cea", name: "CEA", turnaround: "24 hr", cost: "$" },
                        { id: "ca125", name: "CA-125", turnaround: "24 hr", cost: "$$" },
                        { id: "ca199", name: "CA 19-9", turnaround: "24 hr", cost: "$$" },
                        { id: "afp", name: "AFP (Alpha-fetoprotein)", turnaround: "24 hr", cost: "$$" }
                    ]
                },
                special: {
                    name: "Special/Other",
                    tests: [
                        { id: "type_screen", name: "Type and Screen", turnaround: "1 hr", cost: "$" },
                        { id: "crossmatch", name: "Type and Crossmatch", turnaround: "1 hr", cost: "$$" },
                        { id: "coombs_direct", name: "Direct Coombs (DAT)", turnaround: "4 hr", cost: "$" },
                        { id: "lipid_panel", name: "Lipid Panel", turnaround: "4 hr", cost: "$" },
                        { id: "homocysteine", name: "Homocysteine", turnaround: "24 hr", cost: "$$" },
                        { id: "joint_fluid", name: "Joint Fluid Analysis", turnaround: "4 hr", cost: "$$" },
                        { id: "paracentesis_fluid", name: "Ascitic Fluid Analysis", turnaround: "4 hr", cost: "$$" },
                        { id: "pleural_fluid", name: "Pleural Fluid Analysis", turnaround: "4 hr", cost: "$$" }
                    ]
                }
            }
        },
        imaging: {
            name: "Imaging Studies",
            icon: "📷",
            categories: {
                xray: {
                    name: "X-Ray",
                    tests: [
                        { id: "cxr_pa_lat", name: "Chest X-ray (PA and Lateral)", turnaround: "1 hr", cost: "$" },
                        { id: "cxr_portable", name: "Chest X-ray (Portable)", turnaround: "30 min", cost: "$" },
                        { id: "abd_xray", name: "Abdominal X-ray (KUB)", turnaround: "1 hr", cost: "$" },
                        { id: "abd_upright", name: "Abdominal X-ray (Upright)", turnaround: "1 hr", cost: "$" },
                        { id: "cspine_xray", name: "C-Spine X-ray", turnaround: "1 hr", cost: "$" },
                        { id: "lspine_xray", name: "L-Spine X-ray", turnaround: "1 hr", cost: "$" },
                        { id: "pelvis_xray", name: "Pelvis X-ray", turnaround: "1 hr", cost: "$" },
                        { id: "hip_xray", name: "Hip X-ray", turnaround: "1 hr", cost: "$" },
                        { id: "knee_xray", name: "Knee X-ray", turnaround: "1 hr", cost: "$" },
                        { id: "ankle_xray", name: "Ankle X-ray", turnaround: "1 hr", cost: "$" },
                        { id: "shoulder_xray", name: "Shoulder X-ray", turnaround: "1 hr", cost: "$" },
                        { id: "wrist_xray", name: "Wrist X-ray", turnaround: "1 hr", cost: "$" }
                    ]
                },
                ct: {
                    name: "CT Scan",
                    tests: [
                        { id: "ct_head_noncon", name: "CT Head without Contrast", turnaround: "1 hr", cost: "$$" },
                        { id: "ct_head_con", name: "CT Head with Contrast", turnaround: "2 hr", cost: "$$" },
                        { id: "cta_head_neck", name: "CTA Head and Neck", turnaround: "2 hr", cost: "$$$" },
                        { id: "ct_chest_noncon", name: "CT Chest without Contrast", turnaround: "2 hr", cost: "$$" },
                        { id: "ct_chest_con", name: "CT Chest with Contrast", turnaround: "2 hr", cost: "$$" },
                        { id: "cta_pe", name: "CTA Chest (PE Protocol)", turnaround: "2 hr", cost: "$$$" },
                        { id: "ct_abd_pelvis_con", name: "CT Abdomen/Pelvis with Contrast", turnaround: "2 hr", cost: "$$$" },
                        { id: "ct_abd_pelvis_noncon", name: "CT Abdomen/Pelvis without Contrast", turnaround: "2 hr", cost: "$$" },
                        { id: "ct_stone", name: "CT Abdomen/Pelvis (Stone Protocol)", turnaround: "2 hr", cost: "$$" },
                        { id: "cta_abdomen", name: "CTA Abdomen (Mesenteric)", turnaround: "2 hr", cost: "$$$" },
                        { id: "ct_cspine", name: "CT C-Spine", turnaround: "2 hr", cost: "$$" },
                        { id: "ct_lspine", name: "CT L-Spine", turnaround: "2 hr", cost: "$$" }
                    ]
                },
                mri: {
                    name: "MRI",
                    tests: [
                        { id: "mri_brain", name: "MRI Brain without Contrast", turnaround: "4 hr", cost: "$$$" },
                        { id: "mri_brain_con", name: "MRI Brain with Contrast", turnaround: "4 hr", cost: "$$$" },
                        { id: "mra_brain", name: "MRA Brain", turnaround: "4 hr", cost: "$$$" },
                        { id: "mri_cspine", name: "MRI C-Spine", turnaround: "4 hr", cost: "$$$" },
                        { id: "mri_lspine", name: "MRI L-Spine", turnaround: "4 hr", cost: "$$$" },
                        { id: "mrcp", name: "MRCP", turnaround: "4 hr", cost: "$$$" },
                        { id: "mri_abdomen", name: "MRI Abdomen", turnaround: "4 hr", cost: "$$$" },
                        { id: "mri_knee", name: "MRI Knee", turnaround: "4 hr", cost: "$$$" },
                        { id: "mri_shoulder", name: "MRI Shoulder", turnaround: "4 hr", cost: "$$$" }
                    ]
                },
                ultrasound: {
                    name: "Ultrasound",
                    tests: [
                        { id: "echo_tte", name: "Transthoracic Echocardiogram (TTE)", turnaround: "2 hr", cost: "$$" },
                        { id: "echo_tee", name: "Transesophageal Echo (TEE)", turnaround: "4 hr", cost: "$$$" },
                        { id: "us_abdomen", name: "Abdominal Ultrasound", turnaround: "2 hr", cost: "$$" },
                        { id: "ruq_us", name: "RUQ Ultrasound (Gallbladder)", turnaround: "2 hr", cost: "$$" },
                        { id: "us_renal", name: "Renal Ultrasound", turnaround: "2 hr", cost: "$$" },
                        { id: "us_pelvic", name: "Pelvic Ultrasound", turnaround: "2 hr", cost: "$$" },
                        { id: "us_transvaginal", name: "Transvaginal Ultrasound", turnaround: "2 hr", cost: "$$" },
                        { id: "us_dvt_le", name: "Lower Extremity Venous Duplex (DVT)", turnaround: "2 hr", cost: "$$" },
                        { id: "us_dvt_ue", name: "Upper Extremity Venous Duplex", turnaround: "2 hr", cost: "$$" },
                        { id: "carotid_us", name: "Carotid Duplex Ultrasound", turnaround: "2 hr", cost: "$$" },
                        { id: "us_thyroid", name: "Thyroid Ultrasound", turnaround: "2 hr", cost: "$$" },
                        { id: "us_testicular", name: "Testicular Ultrasound", turnaround: "2 hr", cost: "$$" },
                        { id: "us_soft_tissue", name: "Soft Tissue Ultrasound", turnaround: "2 hr", cost: "$$" },
                        { id: "us_aorta", name: "Aortic Ultrasound (AAA Screen)", turnaround: "2 hr", cost: "$$" },
                        { id: "fast_exam", name: "FAST Exam (Bedside)", turnaround: "15 min", cost: "$" },
                        { id: "pocus_cardiac", name: "POCUS Cardiac", turnaround: "15 min", cost: "$" },
                        { id: "pocus_lung", name: "POCUS Lung", turnaround: "15 min", cost: "$" }
                    ]
                },
                nuclear: {
                    name: "Nuclear Medicine",
                    tests: [
                        { id: "vq_scan", name: "V/Q Scan", turnaround: "4 hr", cost: "$$$" },
                        { id: "hida", name: "HIDA Scan", turnaround: "4 hr", cost: "$$$" },
                        { id: "thyroid_scan", name: "Thyroid Scan/Uptake", turnaround: "24 hr", cost: "$$$" },
                        { id: "bone_scan", name: "Bone Scan", turnaround: "4 hr", cost: "$$$" },
                        { id: "gi_bleeding_scan", name: "Tagged RBC Scan (GI Bleed)", turnaround: "4 hr", cost: "$$$" },
                        { id: "stress_nuclear", name: "Nuclear Stress Test", turnaround: "4 hr", cost: "$$$" }
                    ]
                },
                other_imaging: {
                    name: "Other Imaging",
                    tests: [
                        { id: "ecg", name: "12-Lead ECG/EKG", turnaround: "15 min", cost: "$" },
                        { id: "stress_echo", name: "Stress Echocardiogram", turnaround: "2 hr", cost: "$$$" },
                        { id: "stress_treadmill", name: "Exercise Stress Test", turnaround: "2 hr", cost: "$$" },
                        { id: "holter", name: "Holter Monitor (24-48 hr)", turnaround: "48 hr", cost: "$$" },
                        { id: "event_monitor", name: "Event Monitor", turnaround: "30 days", cost: "$$" },
                        { id: "eeg", name: "EEG", turnaround: "4 hr", cost: "$$" },
                        { id: "emg_ncv", name: "EMG/Nerve Conduction Studies", turnaround: "2 hr", cost: "$$$" },
                        { id: "angiography", name: "Conventional Angiography", turnaround: "4 hr", cost: "$$$$" }
                    ]
                }
            }
        },
        procedures: {
            name: "Procedures",
            icon: "💉",
            categories: {
                diagnostic: {
                    name: "Diagnostic Procedures",
                    tests: [
                        { id: "lumbar_puncture", name: "Lumbar Puncture", turnaround: "1 hr", cost: "$$" },
                        { id: "paracentesis", name: "Paracentesis (Diagnostic)", turnaround: "1 hr", cost: "$$" },
                        { id: "thoracentesis", name: "Thoracentesis (Diagnostic)", turnaround: "1 hr", cost: "$$" },
                        { id: "arthrocentesis", name: "Arthrocentesis (Joint Aspiration)", turnaround: "1 hr", cost: "$$" },
                        { id: "bone_marrow", name: "Bone Marrow Biopsy", turnaround: "72 hr", cost: "$$$" },
                        { id: "skin_biopsy", name: "Skin Biopsy", turnaround: "72 hr", cost: "$$" }
                    ]
                },
                therapeutic: {
                    name: "Therapeutic Procedures",
                    tests: [
                        { id: "paracentesis_therapeutic", name: "Paracentesis (Large Volume)", turnaround: "2 hr", cost: "$$" },
                        { id: "thoracentesis_therapeutic", name: "Thoracentesis (Therapeutic)", turnaround: "1 hr", cost: "$$" },
                        { id: "chest_tube", name: "Chest Tube Placement", turnaround: "1 hr", cost: "$$$" },
                        { id: "central_line", name: "Central Venous Catheter", turnaround: "1 hr", cost: "$$" },
                        { id: "arterial_line", name: "Arterial Line", turnaround: "30 min", cost: "$$" },
                        { id: "intubation", name: "Endotracheal Intubation", turnaround: "15 min", cost: "$$" },
                        { id: "cardioversion", name: "Cardioversion", turnaround: "30 min", cost: "$$$" },
                        { id: "pericardiocentesis", name: "Pericardiocentesis", turnaround: "1 hr", cost: "$$$" },
                        { id: "foley", name: "Foley Catheter", turnaround: "15 min", cost: "$" },
                        { id: "ng_tube", name: "Nasogastric Tube", turnaround: "15 min", cost: "$" }
                    ]
                },
                endoscopy: {
                    name: "Endoscopy",
                    tests: [
                        { id: "egd", name: "EGD (Upper Endoscopy)", turnaround: "4 hr", cost: "$$$" },
                        { id: "colonoscopy", name: "Colonoscopy", turnaround: "4 hr", cost: "$$$" },
                        { id: "ercp", name: "ERCP", turnaround: "4 hr", cost: "$$$$" },
                        { id: "bronchoscopy", name: "Bronchoscopy", turnaround: "4 hr", cost: "$$$" },
                        { id: "eus", name: "Endoscopic Ultrasound", turnaround: "4 hr", cost: "$$$$" }
                    ]
                }
            }
        },
        consults: {
            name: "Consultations",
            icon: "👨‍⚕️",
            categories: {
                medical: {
                    name: "Medical Specialties",
                    tests: [
                        { id: "consult_cardiology", name: "Cardiology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_pulmonology", name: "Pulmonology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_gi", name: "Gastroenterology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_nephrology", name: "Nephrology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_neurology", name: "Neurology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_id", name: "Infectious Disease", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_endocrine", name: "Endocrinology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_heme_onc", name: "Hematology/Oncology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_rheumatology", name: "Rheumatology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_allergy", name: "Allergy/Immunology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_palliative", name: "Palliative Care", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_toxicology", name: "Medical Toxicology", turnaround: "1-4 hr", cost: "$$" }
                    ]
                },
                surgical: {
                    name: "Surgical Specialties",
                    tests: [
                        { id: "consult_gen_surgery", name: "General Surgery", turnaround: "1-4 hr", cost: "$$" },
                        { id: "consult_vascular", name: "Vascular Surgery", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_ct_surgery", name: "Cardiothoracic Surgery", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_neurosurgery", name: "Neurosurgery", turnaround: "1-4 hr", cost: "$$" },
                        { id: "consult_ortho", name: "Orthopedic Surgery", turnaround: "1-4 hr", cost: "$$" },
                        { id: "consult_urology", name: "Urology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_ent", name: "ENT/Otolaryngology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_ophthalmology", name: "Ophthalmology", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_plastics", name: "Plastic Surgery", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_ir", name: "Interventional Radiology", turnaround: "1-4 hr", cost: "$$" }
                    ]
                },
                other: {
                    name: "Other Consultations",
                    tests: [
                        { id: "consult_psychiatry", name: "Psychiatry", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_obgyn", name: "OB/GYN", turnaround: "1-4 hr", cost: "$$" },
                        { id: "consult_peds", name: "Pediatrics", turnaround: "1-4 hr", cost: "$$" },
                        { id: "consult_geri", name: "Geriatrics", turnaround: "2-24 hr", cost: "$$" },
                        { id: "consult_social_work", name: "Social Work", turnaround: "2-24 hr", cost: "$" },
                        { id: "consult_case_management", name: "Case Management", turnaround: "2-24 hr", cost: "$" },
                        { id: "consult_ethics", name: "Ethics Committee", turnaround: "24-48 hr", cost: "$" },
                        { id: "consult_pt", name: "Physical Therapy", turnaround: "24 hr", cost: "$" },
                        { id: "consult_ot", name: "Occupational Therapy", turnaround: "24 hr", cost: "$" },
                        { id: "consult_slp", name: "Speech Therapy/Swallow Eval", turnaround: "24 hr", cost: "$" },
                        { id: "consult_nutrition", name: "Nutrition/Dietitian", turnaround: "24 hr", cost: "$" },
                        { id: "consult_pharmacy", name: "Clinical Pharmacy", turnaround: "2-4 hr", cost: "$" },
                        { id: "consult_wound_care", name: "Wound Care", turnaround: "24 hr", cost: "$" }
                    ]
                },
                critical: {
                    name: "Critical Care/Emergent",
                    tests: [
                        { id: "consult_icu", name: "ICU/Critical Care", turnaround: "< 1 hr", cost: "$$" },
                        { id: "consult_trauma", name: "Trauma Surgery", turnaround: "< 30 min", cost: "$$" },
                        { id: "consult_stroke", name: "Stroke Team/Neuro", turnaround: "< 15 min", cost: "$$" },
                        { id: "consult_stemi", name: "STEMI/Cardiology", turnaround: "< 15 min", cost: "$$" },
                        { id: "consult_anesthesia", name: "Anesthesiology", turnaround: "< 30 min", cost: "$$" },
                        { id: "consult_rapid_response", name: "Rapid Response Team", turnaround: "< 5 min", cost: "$" }
                    ]
                }
            }
        }
    };

    // =========================================================================
    // STRUCTURED REASONING OPTIONS
    // =========================================================================
    
    window.ORDER_JUSTIFICATIONS = {
        ruleIn: {
            id: "rule_in",
            label: "Rule IN",
            description: "Confirm presence of a diagnosis",
            icon: "✓",
            color: "green",
            prompt: "This test will help confirm:"
        },
        ruleOut: {
            id: "rule_out",
            label: "Rule OUT",
            description: "Exclude a diagnosis from consideration",
            icon: "✗",
            color: "red",
            prompt: "This test will help exclude:"
        },
        severity: {
            id: "assess_severity",
            label: "Assess Severity",
            description: "Determine how sick the patient is",
            icon: "📊",
            color: "orange",
            prompt: "This test assesses severity of:"
        },
        guideTreatment: {
            id: "guide_treatment",
            label: "Guide Treatment",
            description: "Inform therapeutic decision-making",
            icon: "💊",
            color: "blue",
            prompt: "This test will guide treatment for:"
        },
        monitor: {
            id: "monitor",
            label: "Monitor/Trend",
            description: "Track response or progression",
            icon: "📈",
            color: "purple",
            prompt: "This test monitors:"
        },
        disposition: {
            id: "disposition",
            label: "Determine Disposition",
            description: "Decide admit vs discharge",
            icon: "🏥",
            color: "teal",
            prompt: "This test helps determine disposition for:"
        },
        baseline: {
            id: "baseline",
            label: "Establish Baseline",
            description: "Get baseline values before treatment",
            icon: "📋",
            color: "gray",
            prompt: "This establishes baseline for:"
        },
        screening: {
            id: "screening",
            label: "Screening/Prevention",
            description: "Screen for occult conditions",
            icon: "🔍",
            color: "indigo",
            prompt: "This screens for:"
        }
    };

    // =========================================================================
    // SEARCHABLE ORDERS UI COMPONENT
    // =========================================================================
    
    window.SearchableOrdersPanel = {
        currentCategory: 'labs',
        searchQuery: '',
        selectedOrders: [],
        orderJustifications: {}, // { orderId: { reason: 'rule_in', diagnoses: ['Pneumonia', 'Sepsis'] } }
        
        init: function() {
            this.selectedOrders = [];
            this.orderJustifications = {};
            this.searchQuery = '';
        },
        
        // Get all tests flattened for searching
        getAllTests: function(category) {
            const categoryData = window.MASTER_ORDERS[category];
            if (!categoryData) return [];
            
            const tests = [];
            for (const [subCatId, subCat] of Object.entries(categoryData.categories)) {
                for (const test of subCat.tests) {
                    tests.push({
                        ...test,
                        category: category,
                        subCategory: subCatId,
                        subCategoryName: subCat.name
                    });
                }
            }
            return tests;
        },
        
        // Filter tests based on search query
        filterTests: function(tests, query) {
            if (!query || query.trim() === '') return tests;
            
            const lowerQuery = query.toLowerCase().trim();
            const queryWords = lowerQuery.split(/\s+/);
            
            return tests.filter(test => {
                const searchText = `${test.name} ${test.subCategoryName}`.toLowerCase();
                return queryWords.every(word => searchText.includes(word));
            });
        },
        
        // Render the searchable orders panel
        render: function(currentDifferential = []) {
            const self = this;
            const allCategories = Object.keys(window.MASTER_ORDERS);
            
            return `
                <div class="orders-panel bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <!-- Category Tabs -->
                    <div class="orders-tabs flex border-b border-gray-200 bg-gray-50">
                        ${allCategories.map(cat => `
                            <button onclick="SearchableOrdersPanel.setCategory('${cat}')"
                                    class="orders-tab flex-1 px-4 py-3 text-sm font-medium transition-all
                                           ${this.currentCategory === cat 
                                               ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
                                               : 'text-gray-600 hover:bg-gray-100'}">
                                <span class="mr-1">${window.MASTER_ORDERS[cat].icon}</span>
                                ${window.MASTER_ORDERS[cat].name}
                            </button>
                        `).join('')}
                    </div>
                    
                    <!-- Search Bar -->
                    <div class="p-4 border-b border-gray-200">
                        <div class="relative">
                            <input type="text" 
                                   id="orders-search-input"
                                   placeholder="Search ${window.MASTER_ORDERS[this.currentCategory].name.toLowerCase()}..."
                                   value="${this.searchQuery}"
                                   oninput="SearchableOrdersPanel.onSearch(this.value)"
                                   class="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 
                                          focus:ring-blue-500 focus:border-transparent text-gray-800"
                                   autocomplete="off">
                            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                            ${this.searchQuery ? `
                                <button onclick="SearchableOrdersPanel.clearSearch()" 
                                        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    ✕
                                </button>
                            ` : ''}
                        </div>
                        <div class="mt-2 text-xs text-gray-500">
                            💡 Tip: Search by test name or category (e.g., "troponin", "cardiac", "culture")
                        </div>
                    </div>
                    
                    <!-- Orders List -->
                    <div class="orders-list max-h-96 overflow-y-auto p-4">
                        ${this.renderOrdersList(currentDifferential)}
                    </div>
                    
                    <!-- Selected Orders Summary -->
                    ${this.selectedOrders.length > 0 ? `
                        <div class="orders-summary border-t border-gray-200 p-4 bg-blue-50">
                            <div class="flex items-center justify-between mb-2">
                                <span class="font-semibold text-gray-800">
                                    📋 Selected Orders (${this.selectedOrders.length})
                                </span>
                                <button onclick="SearchableOrdersPanel.clearAll()"
                                        class="text-sm text-red-600 hover:text-red-800">
                                    Clear All
                                </button>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                ${this.selectedOrders.map(orderId => {
                                    const test = this.findTestById(orderId);
                                    const justification = this.orderJustifications[orderId];
                                    return test ? `
                                        <div class="order-chip bg-white border border-blue-300 rounded-full 
                                                    px-3 py-1 text-sm flex items-center gap-2 shadow-sm">
                                            <span>${test.name}</span>
                                            ${justification ? `
                                                <span class="text-xs px-1 rounded bg-${window.ORDER_JUSTIFICATIONS[justification.reason]?.color || 'gray'}-100 
                                                             text-${window.ORDER_JUSTIFICATIONS[justification.reason]?.color || 'gray'}-700">
                                                    ${window.ORDER_JUSTIFICATIONS[justification.reason]?.icon || ''}
                                                </span>
                                            ` : ''}
                                            <button onclick="SearchableOrdersPanel.removeOrder('${orderId}')"
                                                    class="text-gray-400 hover:text-red-500">×</button>
                                        </div>
                                    ` : '';
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        },
        
        renderOrdersList: function(currentDifferential) {
            const allTests = this.getAllTests(this.currentCategory);
            const filteredTests = this.filterTests(allTests, this.searchQuery);
            
            if (filteredTests.length === 0) {
                return `
                    <div class="text-center text-gray-500 py-8">
                        <div class="text-4xl mb-2">🔍</div>
                        <p>No tests found matching "${this.searchQuery}"</p>
                        <button onclick="SearchableOrdersPanel.clearSearch()" 
                                class="mt-2 text-blue-600 hover:text-blue-800 text-sm">
                            Clear search
                        </button>
                    </div>
                `;
            }
            
            // Group by subcategory
            const grouped = {};
            filteredTests.forEach(test => {
                if (!grouped[test.subCategoryName]) {
                    grouped[test.subCategoryName] = [];
                }
                grouped[test.subCategoryName].push(test);
            });
            
            return Object.entries(grouped).map(([subCatName, tests]) => `
                <div class="order-category mb-4">
                    <h4 class="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2 
                               sticky top-0 bg-white py-1">
                        ${subCatName}
                    </h4>
                    <div class="space-y-1">
                        ${tests.map(test => this.renderOrderItem(test, currentDifferential)).join('')}
                    </div>
                </div>
            `).join('');
        },
        
        renderOrderItem: function(test, currentDifferential) {
            const isSelected = this.selectedOrders.includes(test.id);
            const justification = this.orderJustifications[test.id];
            
            return `
                <div class="order-item group ${isSelected ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} 
                            border rounded-lg p-3 cursor-pointer transition-all"
                     onclick="SearchableOrdersPanel.toggleOrder('${test.id}', ${JSON.stringify(currentDifferential).replace(/"/g, '&quot;')})">
                    <div class="flex items-start justify-between">
                        <div class="flex items-start gap-3">
                            <div class="mt-0.5">
                                ${isSelected 
                                    ? '<span class="text-blue-600">☑</span>' 
                                    : '<span class="text-gray-400 group-hover:text-gray-600">☐</span>'}
                            </div>
                            <div>
                                <div class="font-medium text-gray-800">${test.name}</div>
                                <div class="text-xs text-gray-500 mt-0.5">
                                    <span class="mr-3">⏱ ${test.turnaround}</span>
                                    <span>${test.cost}</span>
                                </div>
                                ${justification ? `
                                    <div class="mt-2 text-xs">
                                        <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full
                                                     bg-${window.ORDER_JUSTIFICATIONS[justification.reason]?.color || 'gray'}-100
                                                     text-${window.ORDER_JUSTIFICATIONS[justification.reason]?.color || 'gray'}-700">
                                            ${window.ORDER_JUSTIFICATIONS[justification.reason]?.icon || ''}
                                            ${window.ORDER_JUSTIFICATIONS[justification.reason]?.label || ''}:
                                            ${justification.diagnoses?.join(', ') || 'General'}
                                        </span>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        
        // Event handlers
        setCategory: function(category) {
            this.currentCategory = category;
            this.searchQuery = '';
            this.refreshUI();
        },
        
        onSearch: function(query) {
            this.searchQuery = query;
            this.refreshUI();
        },
        
        clearSearch: function() {
            this.searchQuery = '';
            document.getElementById('orders-search-input').value = '';
            this.refreshUI();
        },
        
        toggleOrder: function(orderId, currentDifferential) {
            if (this.selectedOrders.includes(orderId)) {
                this.removeOrder(orderId);
            } else {
                this.showJustificationModal(orderId, currentDifferential);
            }
        },
        
        removeOrder: function(orderId) {
            this.selectedOrders = this.selectedOrders.filter(id => id !== orderId);
            delete this.orderJustifications[orderId];
            this.refreshUI();
        },
        
        clearAll: function() {
            this.selectedOrders = [];
            this.orderJustifications = {};
            this.refreshUI();
        },
        
        addOrderWithJustification: function(orderId, reason, diagnoses) {
            if (!this.selectedOrders.includes(orderId)) {
                this.selectedOrders.push(orderId);
            }
            this.orderJustifications[orderId] = {
                reason: reason,
                diagnoses: diagnoses
            };
            this.closeJustificationModal();
            this.refreshUI();
        },
        
        showJustificationModal: function(orderId, currentDifferential) {
            const test = this.findTestById(orderId);
            if (!test) return;
            
            // Create modal
            const modalHtml = `
                <div id="justification-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                     onclick="if(event.target.id === 'justification-modal') SearchableOrdersPanel.closeJustificationModal()">
                    <div class="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden" onclick="event.stopPropagation()">
                        <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                            <h3 class="font-bold text-lg">Justify Your Order</h3>
                            <p class="text-blue-100 text-sm mt-1">📋 ${test.name}</p>
                        </div>
                        
                        <div class="p-4">
                            <p class="text-gray-700 mb-4 font-medium">Why are you ordering this test?</p>
                            
                            <!-- Reasoning Options -->
                            <div class="space-y-2 mb-4" id="justification-reasons">
                                ${Object.entries(window.ORDER_JUSTIFICATIONS).map(([key, justif]) => `
                                    <label class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer 
                                                  hover:bg-gray-50 transition-colors justif-option"
                                           onclick="SearchableOrdersPanel.selectJustificationReason('${key}')">
                                        <input type="radio" name="justification" value="${key}" class="hidden">
                                        <span class="w-8 h-8 flex items-center justify-center rounded-full 
                                                     bg-${justif.color}-100 text-${justif.color}-600">
                                            ${justif.icon}
                                        </span>
                                        <div>
                                            <div class="font-medium text-gray-800">${justif.label}</div>
                                            <div class="text-xs text-gray-500">${justif.description}</div>
                                        </div>
                                    </label>
                                `).join('')}
                            </div>
                            
                            <!-- Diagnosis Selection (shown after selecting reason) -->
                            <div id="diagnosis-selection" class="hidden mb-4">
                                <p class="text-gray-700 mb-2 font-medium" id="diagnosis-prompt">Select diagnosis:</p>
                                <div class="flex flex-wrap gap-2" id="diagnosis-options">
                                    ${currentDifferential && currentDifferential.length > 0 
                                        ? currentDifferential.map(dx => `
                                            <button onclick="SearchableOrdersPanel.toggleDiagnosis('${dx.replace(/'/g, "\\'")}')"
                                                    class="dx-btn px-3 py-2 border rounded-lg text-sm transition-all
                                                           hover:bg-blue-50 hover:border-blue-300"
                                                    data-dx="${dx}">
                                                ${dx}
                                            </button>
                                          `).join('')
                                        : `
                                            <button onclick="SearchableOrdersPanel.toggleDiagnosis('General Workup')"
                                                    class="dx-btn px-3 py-2 border rounded-lg text-sm transition-all
                                                           hover:bg-blue-50 hover:border-blue-300 bg-blue-50 border-blue-300"
                                                    data-dx="General Workup">
                                                General Workup
                                            </button>
                                          `
                                    }
                                </div>
                            </div>
                        </div>
                        
                        <div class="border-t p-4 flex gap-3 bg-gray-50">
                            <button onclick="SearchableOrdersPanel.closeJustificationModal()"
                                    class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 
                                           hover:bg-gray-100 transition-colors">
                                Cancel
                            </button>
                            <button onclick="SearchableOrdersPanel.confirmJustification('${orderId}')"
                                    id="confirm-order-btn"
                                    class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg 
                                           hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled>
                                Add Order
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            
            // Store state
            this._currentOrderId = orderId;
            this._selectedReason = null;
            this._selectedDiagnoses = [];
        },
        
        selectJustificationReason: function(reason) {
            this._selectedReason = reason;
            
            // Update UI
            document.querySelectorAll('.justif-option').forEach(el => {
                el.classList.remove('bg-blue-50', 'border-blue-300');
            });
            document.querySelector(`.justif-option input[value="${reason}"]`).closest('.justif-option')
                .classList.add('bg-blue-50', 'border-blue-300');
            
            // Show diagnosis selection
            const diagnosisSection = document.getElementById('diagnosis-selection');
            diagnosisSection.classList.remove('hidden');
            
            // Update prompt
            const promptEl = document.getElementById('diagnosis-prompt');
            promptEl.textContent = window.ORDER_JUSTIFICATIONS[reason]?.prompt || 'Select diagnosis:';
            
            this.updateConfirmButton();
        },
        
        toggleDiagnosis: function(dx) {
            const index = this._selectedDiagnoses.indexOf(dx);
            if (index > -1) {
                this._selectedDiagnoses.splice(index, 1);
            } else {
                this._selectedDiagnoses.push(dx);
            }
            
            // Update UI
            document.querySelectorAll('.dx-btn').forEach(btn => {
                if (this._selectedDiagnoses.includes(btn.dataset.dx)) {
                    btn.classList.add('bg-blue-50', 'border-blue-300');
                } else {
                    btn.classList.remove('bg-blue-50', 'border-blue-300');
                }
            });
            
            this.updateConfirmButton();
        },
        
        updateConfirmButton: function() {
            const btn = document.getElementById('confirm-order-btn');
            if (this._selectedReason && this._selectedDiagnoses.length > 0) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        },
        
        confirmJustification: function(orderId) {
            if (this._selectedReason && this._selectedDiagnoses.length > 0) {
                this.addOrderWithJustification(orderId, this._selectedReason, this._selectedDiagnoses);
            }
        },
        
        closeJustificationModal: function() {
            const modal = document.getElementById('justification-modal');
            if (modal) modal.remove();
            this._currentOrderId = null;
            this._selectedReason = null;
            this._selectedDiagnoses = [];
        },
        
        findTestById: function(testId) {
            for (const [catKey, category] of Object.entries(window.MASTER_ORDERS)) {
                for (const [subCatKey, subCategory] of Object.entries(category.categories)) {
                    const found = subCategory.tests.find(t => t.id === testId);
                    if (found) return { ...found, category: catKey, subCategory: subCatKey };
                }
            }
            return null;
        },
        
        refreshUI: function() {
            // Re-render the orders panel
            const container = document.querySelector('.orders-panel')?.parentElement;
            if (container && typeof state !== 'undefined' && state.rankedDifferential) {
                container.innerHTML = this.render(state.rankedDifferential.map(d => d.name || d));
            }
        },
        
        // Get selected orders for submission
        getSelectedOrders: function() {
            return this.selectedOrders.map(orderId => ({
                ...this.findTestById(orderId),
                justification: this.orderJustifications[orderId]
            }));
        },
        
        // Scoring helper - evaluate order appropriateness
        evaluateOrders: function(caseData) {
            const results = {
                essential: [],
                helpful: [],
                unnecessary: [],
                harmful: [],
                score: 0
            };
            
            // Get case-specific expected tests
            const expectedTests = this.getExpectedTests(caseData);
            
            this.selectedOrders.forEach(orderId => {
                const justification = this.orderJustifications[orderId];
                const testInfo = this.findTestById(orderId);
                
                if (expectedTests.essential?.includes(orderId)) {
                    results.essential.push({ id: orderId, justification, test: testInfo });
                    results.score += 10;
                    
                    // Bonus for correct justification
                    if (this.isJustificationCorrect(orderId, justification, caseData)) {
                        results.score += 5;
                    }
                } else if (expectedTests.helpful?.includes(orderId)) {
                    results.helpful.push({ id: orderId, justification, test: testInfo });
                    results.score += 5;
                } else if (expectedTests.harmful?.includes(orderId)) {
                    results.harmful.push({ id: orderId, justification, test: testInfo });
                    results.score -= 10;
                } else {
                    results.unnecessary.push({ id: orderId, justification, test: testInfo });
                    results.score -= 2;
                }
            });
            
            // Check for missed essential tests
            results.missedEssential = (expectedTests.essential || []).filter(
                id => !this.selectedOrders.includes(id)
            );
            
            results.score -= results.missedEssential.length * 5;
            
            return results;
        },
        
        getExpectedTests: function(caseData) {
            // This would be populated from case data
            // Returns { essential: [], helpful: [], harmful: [] }
            return caseData?.expectedTests || { essential: [], helpful: [], harmful: [] };
        },
        
        isJustificationCorrect: function(orderId, justification, caseData) {
            // Logic to check if the justification matches expected reasoning
            // Would compare against case-specific reasoning
            return true; // Placeholder
        }
    };

    // =========================================================================
    // CSS STYLES
    // =========================================================================
    
    const orderStyles = `
        <style id="searchable-orders-styles">
            .orders-panel {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .orders-tabs {
                scrollbar-width: none;
                -ms-overflow-style: none;
            }
            
            .orders-tabs::-webkit-scrollbar {
                display: none;
            }
            
            .orders-list::-webkit-scrollbar {
                width: 6px;
            }
            
            .orders-list::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 3px;
            }
            
            .orders-list::-webkit-scrollbar-thumb {
                background: #c1c1c1;
                border-radius: 3px;
            }
            
            .orders-list::-webkit-scrollbar-thumb:hover {
                background: #a1a1a1;
            }
            
            .order-item {
                animation: fadeIn 0.2s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-5px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .order-chip {
                animation: popIn 0.2s ease;
            }
            
            @keyframes popIn {
                from { transform: scale(0.8); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            
            #justification-modal {
                animation: modalFadeIn 0.2s ease;
            }
            
            @keyframes modalFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            #justification-modal > div {
                animation: modalSlideIn 0.3s ease;
            }
            
            @keyframes modalSlideIn {
                from { transform: scale(0.95) translateY(-10px); opacity: 0; }
                to { transform: scale(1) translateY(0); opacity: 1; }
            }
            
            /* Color classes for justification badges */
            .bg-green-100 { background-color: #dcfce7; }
            .text-green-700 { color: #15803d; }
            .bg-red-100 { background-color: #fee2e2; }
            .text-red-700 { color: #b91c1c; }
            .bg-orange-100 { background-color: #ffedd5; }
            .text-orange-700 { color: #c2410c; }
            .bg-blue-100 { background-color: #dbeafe; }
            .text-blue-700 { color: #1d4ed8; }
            .bg-purple-100 { background-color: #f3e8ff; }
            .text-purple-700 { color: #7e22ce; }
            .bg-teal-100 { background-color: #ccfbf1; }
            .text-teal-700 { color: #0f766e; }
            .bg-gray-100 { background-color: #f3f4f6; }
            .text-gray-700 { color: #374151; }
            .bg-indigo-100 { background-color: #e0e7ff; }
            .text-indigo-700 { color: #4338ca; }
            
            .bg-green-600 { background-color: #16a34a; }
            .bg-red-600 { background-color: #dc2626; }
            .bg-orange-600 { background-color: #ea580c; }
            .bg-purple-600 { background-color: #9333ea; }
            .bg-teal-600 { background-color: #0d9488; }
            .bg-indigo-600 { background-color: #4f46e5; }
        </style>
    `;
    
    // Inject styles
    if (!document.getElementById('searchable-orders-styles')) {
        document.head.insertAdjacentHTML('beforeend', orderStyles);
    }

    // =========================================================================
    // INITIALIZATION
    // =========================================================================
    
    console.log('[ReasonDx] Searchable Orders System loaded.');
    console.log('[ReasonDx] Available order categories:', Object.keys(window.MASTER_ORDERS));
    
    // Calculate total tests available
    let totalTests = 0;
    for (const category of Object.values(window.MASTER_ORDERS)) {
        for (const subCat of Object.values(category.categories)) {
            totalTests += subCat.tests.length;
        }
    }
    console.log('[ReasonDx] Total tests available:', totalTests);

})();
