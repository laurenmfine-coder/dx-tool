// ============================================================
// REASONDX SEARCHABLE DIFFERENTIAL DIAGNOSIS SYSTEM
// ============================================================
// EXPANDED VERSION - 800+ diagnoses across 16 organ systems
// Includes fuzzy search, synonyms, and tiered scoring
// ============================================================

const ReasonDxDifferentialSystem = (function() {
    'use strict';

    // ============================================================
    // MASTER DIAGNOSIS DATABASE - 800+ DIAGNOSES BY ORGAN SYSTEM
    // ============================================================
    
    const DIAGNOSIS_DATABASE = {
        // ========== CARDIOVASCULAR (85 diagnoses) ==========
        cardiovascular: {
            name: "❤️ Cardiovascular",
            diagnoses: [
                // Acute Coronary Syndrome (7)
                { id: "acute_mi", name: "Acute Myocardial Infarction", subcategory: "acs", mustNotMiss: true },
                { id: "stemi", name: "STEMI (ST-Elevation MI)", subcategory: "acs", mustNotMiss: true },
                { id: "nstemi", name: "NSTEMI (Non-ST-Elevation MI)", subcategory: "acs", mustNotMiss: true },
                { id: "unstable_angina", name: "Unstable Angina", subcategory: "acs", mustNotMiss: true },
                { id: "stable_angina", name: "Stable Angina", subcategory: "acs" },
                { id: "prinzmetal_angina", name: "Prinzmetal (Variant) Angina", subcategory: "acs" },
                { id: "coronary_vasospasm", name: "Coronary Vasospasm", subcategory: "acs" },
                
                // Arrhythmias (17)
                { id: "afib", name: "Atrial Fibrillation", subcategory: "arrhythmia" },
                { id: "aflutter", name: "Atrial Flutter", subcategory: "arrhythmia" },
                { id: "svt", name: "Supraventricular Tachycardia (SVT)", subcategory: "arrhythmia" },
                { id: "avnrt", name: "AV Nodal Reentrant Tachycardia (AVNRT)", subcategory: "arrhythmia" },
                { id: "vtach", name: "Ventricular Tachycardia", subcategory: "arrhythmia", mustNotMiss: true },
                { id: "vfib", name: "Ventricular Fibrillation", subcategory: "arrhythmia", mustNotMiss: true },
                { id: "sinus_bradycardia", name: "Sinus Bradycardia", subcategory: "arrhythmia" },
                { id: "sinus_tachycardia", name: "Sinus Tachycardia", subcategory: "arrhythmia" },
                { id: "heart_block_1", name: "First-Degree Heart Block", subcategory: "arrhythmia" },
                { id: "heart_block_2_type1", name: "Second-Degree Heart Block (Mobitz I/Wenckebach)", subcategory: "arrhythmia" },
                { id: "heart_block_2_type2", name: "Second-Degree Heart Block (Mobitz II)", subcategory: "arrhythmia", mustNotMiss: true },
                { id: "heart_block_3", name: "Third-Degree (Complete) Heart Block", subcategory: "arrhythmia", mustNotMiss: true },
                { id: "sick_sinus", name: "Sick Sinus Syndrome", subcategory: "arrhythmia" },
                { id: "wpw", name: "Wolff-Parkinson-White Syndrome", subcategory: "arrhythmia" },
                { id: "long_qt", name: "Long QT Syndrome", subcategory: "arrhythmia" },
                { id: "torsades", name: "Torsades de Pointes", subcategory: "arrhythmia", mustNotMiss: true },
                { id: "pvc", name: "Premature Ventricular Contractions (PVCs)", subcategory: "arrhythmia" },
                
                // Heart Failure (5)
                { id: "chf_hfref", name: "Heart Failure with Reduced EF (HFrEF)", subcategory: "heart_failure" },
                { id: "chf_hfpef", name: "Heart Failure with Preserved EF (HFpEF)", subcategory: "heart_failure" },
                { id: "chf_acute", name: "Acute Decompensated Heart Failure", subcategory: "heart_failure" },
                { id: "cardiogenic_shock", name: "Cardiogenic Shock", subcategory: "heart_failure", mustNotMiss: true },
                { id: "flash_pulm_edema", name: "Flash Pulmonary Edema", subcategory: "heart_failure", mustNotMiss: true },
                
                // Valvular Disease (8)
                { id: "aortic_stenosis", name: "Aortic Stenosis", subcategory: "valvular" },
                { id: "aortic_regurg", name: "Aortic Regurgitation", subcategory: "valvular" },
                { id: "mitral_stenosis", name: "Mitral Stenosis", subcategory: "valvular" },
                { id: "mitral_regurg", name: "Mitral Regurgitation", subcategory: "valvular" },
                { id: "mitral_prolapse", name: "Mitral Valve Prolapse", subcategory: "valvular" },
                { id: "tricuspid_regurg", name: "Tricuspid Regurgitation", subcategory: "valvular" },
                { id: "endocarditis", name: "Infective Endocarditis", subcategory: "valvular", mustNotMiss: true },
                { id: "rheumatic_heart", name: "Rheumatic Heart Disease", subcategory: "valvular" },
                
                // Pericardial Disease (4)
                { id: "pericarditis_acute", name: "Acute Pericarditis", subcategory: "pericardial" },
                { id: "pericarditis_constrictive", name: "Constrictive Pericarditis", subcategory: "pericardial" },
                { id: "pericardial_effusion", name: "Pericardial Effusion", subcategory: "pericardial" },
                { id: "cardiac_tamponade", name: "Cardiac Tamponade", subcategory: "pericardial", mustNotMiss: true },
                
                // Cardiomyopathy (5)
                { id: "dcm", name: "Dilated Cardiomyopathy", subcategory: "cardiomyopathy" },
                { id: "hcm", name: "Hypertrophic Cardiomyopathy", subcategory: "cardiomyopathy" },
                { id: "restrictive_cm", name: "Restrictive Cardiomyopathy", subcategory: "cardiomyopathy" },
                { id: "takotsubo", name: "Takotsubo (Stress) Cardiomyopathy", subcategory: "cardiomyopathy" },
                { id: "myocarditis", name: "Myocarditis", subcategory: "cardiomyopathy" },
                
                // Aortic Disease (4)
                { id: "aortic_dissection", name: "Aortic Dissection", subcategory: "aortic", mustNotMiss: true },
                { id: "aaa", name: "Abdominal Aortic Aneurysm", subcategory: "aortic" },
                { id: "aaa_rupture", name: "Ruptured AAA", subcategory: "aortic", mustNotMiss: true },
                { id: "thoracic_aneurysm", name: "Thoracic Aortic Aneurysm", subcategory: "aortic" },
                
                // Venous Thromboembolism (4)
                { id: "dvt", name: "Deep Vein Thrombosis (DVT)", subcategory: "vte" },
                { id: "dvt_upper", name: "Upper Extremity DVT", subcategory: "vte" },
                { id: "pe", name: "Pulmonary Embolism", subcategory: "vte", mustNotMiss: true },
                { id: "superficial_thrombophlebitis", name: "Superficial Thrombophlebitis", subcategory: "vte" },
                
                // Hypertension (5)
                { id: "htn_essential", name: "Essential Hypertension", subcategory: "hypertension" },
                { id: "htn_secondary", name: "Secondary Hypertension", subcategory: "hypertension" },
                { id: "htn_emergency", name: "Hypertensive Emergency", subcategory: "hypertension", mustNotMiss: true },
                { id: "htn_urgency", name: "Hypertensive Urgency", subcategory: "hypertension" },
                { id: "malignant_htn", name: "Malignant Hypertension", subcategory: "hypertension", mustNotMiss: true },
                
                // Peripheral Vascular (5)
                { id: "pad", name: "Peripheral Artery Disease", subcategory: "peripheral_vascular" },
                { id: "acute_limb_ischemia", name: "Acute Limb Ischemia", subcategory: "peripheral_vascular", mustNotMiss: true },
                { id: "chronic_venous_insufficiency", name: "Chronic Venous Insufficiency", subcategory: "peripheral_vascular" },
                { id: "lymphedema", name: "Lymphedema", subcategory: "peripheral_vascular" },
                { id: "varicose_veins", name: "Varicose Veins", subcategory: "peripheral_vascular" },
                
                // Syncope (5)
                { id: "syncope_vasovagal", name: "Vasovagal Syncope", subcategory: "syncope" },
                { id: "syncope_cardiac", name: "Cardiac Syncope", subcategory: "syncope", mustNotMiss: true },
                { id: "syncope_orthostatic", name: "Orthostatic Hypotension", subcategory: "syncope" },
                { id: "syncope_situational", name: "Situational Syncope", subcategory: "syncope" },
                { id: "carotid_hypersensitivity", name: "Carotid Sinus Hypersensitivity", subcategory: "syncope" },
            ]
        },

        // ========== PULMONARY (60 diagnoses) ==========
        pulmonary: {
            name: "🫁 Pulmonary",
            diagnoses: [
                // Pulmonary Infections (12)
                { id: "pneumonia_bacterial", name: "Bacterial Pneumonia", subcategory: "infection" },
                { id: "pneumonia_viral", name: "Viral Pneumonia", subcategory: "infection" },
                { id: "pneumonia_atypical", name: "Atypical Pneumonia (Walking Pneumonia)", subcategory: "infection" },
                { id: "pneumonia_aspiration", name: "Aspiration Pneumonia", subcategory: "infection" },
                { id: "pneumonia_fungal", name: "Fungal Pneumonia", subcategory: "infection" },
                { id: "pneumonia_pcp", name: "PCP Pneumonia (Pneumocystis)", subcategory: "infection" },
                { id: "lung_abscess", name: "Lung Abscess", subcategory: "infection" },
                { id: "empyema", name: "Empyema", subcategory: "infection" },
                { id: "tb_active", name: "Active Tuberculosis", subcategory: "infection", mustNotMiss: true },
                { id: "tb_latent", name: "Latent Tuberculosis", subcategory: "infection" },
                { id: "bronchitis_acute", name: "Acute Bronchitis", subcategory: "infection" },
                { id: "bronchitis_chronic", name: "Chronic Bronchitis", subcategory: "infection" },
                
                // Obstructive Lung Disease (8)
                { id: "asthma_acute", name: "Asthma Exacerbation", subcategory: "obstructive" },
                { id: "asthma_chronic", name: "Chronic Asthma", subcategory: "obstructive" },
                { id: "copd_exacerbation", name: "COPD Exacerbation", subcategory: "obstructive" },
                { id: "copd_chronic", name: "Chronic COPD", subcategory: "obstructive" },
                { id: "bronchiectasis", name: "Bronchiectasis", subcategory: "obstructive" },
                { id: "bronchiolitis", name: "Bronchiolitis", subcategory: "obstructive" },
                { id: "status_asthmaticus", name: "Status Asthmaticus", subcategory: "obstructive", mustNotMiss: true },
                { id: "alpha1_antitrypsin", name: "Alpha-1 Antitrypsin Deficiency", subcategory: "obstructive" },
                
                // Restrictive/Interstitial (6)
                { id: "ipf", name: "Idiopathic Pulmonary Fibrosis", subcategory: "restrictive" },
                { id: "sarcoidosis", name: "Pulmonary Sarcoidosis", subcategory: "restrictive" },
                { id: "hypersensitivity_pneumonitis", name: "Hypersensitivity Pneumonitis", subcategory: "restrictive" },
                { id: "pneumoconiosis", name: "Pneumoconiosis", subcategory: "restrictive" },
                { id: "asbestosis", name: "Asbestosis", subcategory: "restrictive" },
                { id: "silicosis", name: "Silicosis", subcategory: "restrictive" },
                
                // Pleural Disease (7)
                { id: "pleural_effusion", name: "Pleural Effusion", subcategory: "pleural" },
                { id: "pneumothorax", name: "Pneumothorax", subcategory: "pleural" },
                { id: "tension_pneumothorax", name: "Tension Pneumothorax", subcategory: "pleural", mustNotMiss: true },
                { id: "hemothorax", name: "Hemothorax", subcategory: "pleural", mustNotMiss: true },
                { id: "pleurisy", name: "Pleurisy/Pleuritis", subcategory: "pleural" },
                { id: "mesothelioma", name: "Mesothelioma", subcategory: "pleural" },
                { id: "chylothorax", name: "Chylothorax", subcategory: "pleural" },
                
                // Pulmonary Vascular (5)
                { id: "pulmonary_embolism", name: "Pulmonary Embolism", subcategory: "vascular", mustNotMiss: true },
                { id: "pulmonary_htn", name: "Pulmonary Hypertension", subcategory: "vascular" },
                { id: "pulmonary_edema", name: "Pulmonary Edema", subcategory: "vascular" },
                { id: "cor_pulmonale", name: "Cor Pulmonale", subcategory: "vascular" },
                { id: "pulmonary_infarction", name: "Pulmonary Infarction", subcategory: "vascular" },
                
                // Respiratory Failure (4)
                { id: "ards", name: "ARDS (Acute Respiratory Distress Syndrome)", subcategory: "respiratory_failure", mustNotMiss: true },
                { id: "respiratory_failure_acute", name: "Acute Respiratory Failure", subcategory: "respiratory_failure", mustNotMiss: true },
                { id: "respiratory_failure_chronic", name: "Chronic Respiratory Failure", subcategory: "respiratory_failure" },
                { id: "hypoxemic_respiratory_failure", name: "Hypoxemic Respiratory Failure (Type 1)", subcategory: "respiratory_failure" },
                
                // Pulmonary Malignancy (5)
                { id: "lung_cancer_nsclc", name: "Non-Small Cell Lung Cancer", subcategory: "malignancy" },
                { id: "lung_cancer_sclc", name: "Small Cell Lung Cancer", subcategory: "malignancy" },
                { id: "lung_nodule", name: "Pulmonary Nodule", subcategory: "malignancy" },
                { id: "lung_metastases", name: "Pulmonary Metastases", subcategory: "malignancy" },
                { id: "carcinoid_lung", name: "Pulmonary Carcinoid", subcategory: "malignancy" },
                
                // Upper Airway (7)
                { id: "uri", name: "Upper Respiratory Infection", subcategory: "upper_airway" },
                { id: "croup", name: "Croup (Laryngotracheobronchitis)", subcategory: "upper_airway" },
                { id: "epiglottitis", name: "Epiglottitis", subcategory: "upper_airway", mustNotMiss: true },
                { id: "pertussis", name: "Pertussis (Whooping Cough)", subcategory: "upper_airway" },
                { id: "laryngitis", name: "Laryngitis", subcategory: "upper_airway" },
                { id: "foreign_body_airway", name: "Foreign Body Aspiration", subcategory: "upper_airway", mustNotMiss: true },
                { id: "vocal_cord_dysfunction", name: "Vocal Cord Dysfunction", subcategory: "upper_airway" },
                
                // Other Pulmonary (6)
                { id: "atelectasis", name: "Atelectasis", subcategory: "other" },
                { id: "sleep_apnea_obstructive", name: "Obstructive Sleep Apnea", subcategory: "other" },
                { id: "sleep_apnea_central", name: "Central Sleep Apnea", subcategory: "other" },
                { id: "obesity_hypoventilation", name: "Obesity Hypoventilation Syndrome", subcategory: "other" },
                { id: "pulmonary_contusion", name: "Pulmonary Contusion", subcategory: "other" },
                { id: "hemoptysis", name: "Hemoptysis", subcategory: "other" },
            ]
        },

        // ========== GASTROINTESTINAL (95 diagnoses) ==========
        gastrointestinal: {
            name: "🍽️ Gastrointestinal",
            diagnoses: [
                // Esophageal (12)
                { id: "gerd", name: "GERD (Gastroesophageal Reflux)", subcategory: "esophageal" },
                { id: "esophagitis", name: "Esophagitis", subcategory: "esophageal" },
                { id: "esophagitis_eosinophilic", name: "Eosinophilic Esophagitis", subcategory: "esophageal" },
                { id: "esophageal_spasm", name: "Esophageal Spasm", subcategory: "esophageal" },
                { id: "achalasia", name: "Achalasia", subcategory: "esophageal" },
                { id: "esophageal_stricture", name: "Esophageal Stricture", subcategory: "esophageal" },
                { id: "esophageal_cancer", name: "Esophageal Cancer", subcategory: "esophageal" },
                { id: "esophageal_varices", name: "Esophageal Varices", subcategory: "esophageal", mustNotMiss: true },
                { id: "mallory_weiss", name: "Mallory-Weiss Tear", subcategory: "esophageal" },
                { id: "boerhaave", name: "Boerhaave Syndrome (Esophageal Rupture)", subcategory: "esophageal", mustNotMiss: true },
                { id: "zenker_diverticulum", name: "Zenker's Diverticulum", subcategory: "esophageal" },
                { id: "hiatal_hernia", name: "Hiatal Hernia", subcategory: "esophageal" },
                
                // Gastric (10)
                { id: "gastritis", name: "Gastritis", subcategory: "gastric" },
                { id: "gastritis_erosive", name: "Erosive Gastritis", subcategory: "gastric" },
                { id: "peptic_ulcer", name: "Peptic Ulcer Disease", subcategory: "gastric" },
                { id: "gastric_ulcer", name: "Gastric Ulcer", subcategory: "gastric" },
                { id: "duodenal_ulcer", name: "Duodenal Ulcer", subcategory: "gastric" },
                { id: "perforated_ulcer", name: "Perforated Ulcer", subcategory: "gastric", mustNotMiss: true },
                { id: "gastric_cancer", name: "Gastric Cancer", subcategory: "gastric" },
                { id: "gastroparesis", name: "Gastroparesis", subcategory: "gastric" },
                { id: "gi_bleed_upper", name: "Upper GI Bleeding", subcategory: "gastric", mustNotMiss: true },
                { id: "hpylori", name: "H. pylori Infection", subcategory: "gastric" },
                
                // Hepatic (15)
                { id: "hepatitis_a", name: "Hepatitis A", subcategory: "hepatic" },
                { id: "hepatitis_b_acute", name: "Acute Hepatitis B", subcategory: "hepatic" },
                { id: "hepatitis_b_chronic", name: "Chronic Hepatitis B", subcategory: "hepatic" },
                { id: "hepatitis_c", name: "Hepatitis C", subcategory: "hepatic" },
                { id: "hepatitis_alcoholic", name: "Alcoholic Hepatitis", subcategory: "hepatic" },
                { id: "hepatitis_autoimmune", name: "Autoimmune Hepatitis", subcategory: "hepatic" },
                { id: "hepatitis_drug", name: "Drug-Induced Liver Injury (DILI)", subcategory: "hepatic" },
                { id: "cirrhosis", name: "Cirrhosis", subcategory: "hepatic" },
                { id: "nafld", name: "Non-Alcoholic Fatty Liver Disease (NAFLD)", subcategory: "hepatic" },
                { id: "nash", name: "Non-Alcoholic Steatohepatitis (NASH)", subcategory: "hepatic" },
                { id: "hepatocellular_ca", name: "Hepatocellular Carcinoma", subcategory: "hepatic" },
                { id: "liver_failure_acute", name: "Acute Liver Failure", subcategory: "hepatic", mustNotMiss: true },
                { id: "hepatic_encephalopathy", name: "Hepatic Encephalopathy", subcategory: "hepatic" },
                { id: "portal_htn", name: "Portal Hypertension", subcategory: "hepatic" },
                { id: "hepatorenal_syndrome", name: "Hepatorenal Syndrome", subcategory: "hepatic", mustNotMiss: true },
                
                // Biliary (10)
                { id: "cholelithiasis", name: "Cholelithiasis (Gallstones)", subcategory: "biliary" },
                { id: "cholecystitis_acute", name: "Acute Cholecystitis", subcategory: "biliary" },
                { id: "cholecystitis_chronic", name: "Chronic Cholecystitis", subcategory: "biliary" },
                { id: "cholecystitis_acalculous", name: "Acalculous Cholecystitis", subcategory: "biliary" },
                { id: "choledocholithiasis", name: "Choledocholithiasis (CBD Stone)", subcategory: "biliary" },
                { id: "cholangitis", name: "Ascending Cholangitis", subcategory: "biliary", mustNotMiss: true },
                { id: "biliary_obstruction", name: "Biliary Obstruction", subcategory: "biliary" },
                { id: "pbc", name: "Primary Biliary Cholangitis", subcategory: "biliary" },
                { id: "psc", name: "Primary Sclerosing Cholangitis", subcategory: "biliary" },
                { id: "cholangiocarcinoma", name: "Cholangiocarcinoma", subcategory: "biliary" },
                
                // Pancreatic (6)
                { id: "pancreatitis_acute", name: "Acute Pancreatitis", subcategory: "pancreatic" },
                { id: "pancreatitis_chronic", name: "Chronic Pancreatitis", subcategory: "pancreatic" },
                { id: "pancreatic_cancer", name: "Pancreatic Cancer", subcategory: "pancreatic" },
                { id: "pancreatic_pseudocyst", name: "Pancreatic Pseudocyst", subcategory: "pancreatic" },
                { id: "pancreatic_necrosis", name: "Necrotizing Pancreatitis", subcategory: "pancreatic", mustNotMiss: true },
                { id: "pancreatic_insufficiency", name: "Exocrine Pancreatic Insufficiency", subcategory: "pancreatic" },
                
                // Small Bowel (8)
                { id: "sbo", name: "Small Bowel Obstruction", subcategory: "small_bowel", mustNotMiss: true },
                { id: "ileus", name: "Ileus", subcategory: "small_bowel" },
                { id: "celiac_disease", name: "Celiac Disease", subcategory: "small_bowel" },
                { id: "crohns", name: "Crohn's Disease", subcategory: "small_bowel" },
                { id: "mesenteric_ischemia", name: "Mesenteric Ischemia", subcategory: "small_bowel", mustNotMiss: true },
                { id: "intussusception", name: "Intussusception", subcategory: "small_bowel", mustNotMiss: true },
                { id: "small_bowel_tumor", name: "Small Bowel Tumor", subcategory: "small_bowel" },
                { id: "sibo", name: "Small Intestinal Bacterial Overgrowth (SIBO)", subcategory: "small_bowel" },
                
                // Large Bowel (16)
                { id: "lbo", name: "Large Bowel Obstruction", subcategory: "large_bowel", mustNotMiss: true },
                { id: "diverticulitis", name: "Diverticulitis", subcategory: "large_bowel" },
                { id: "diverticulosis", name: "Diverticulosis", subcategory: "large_bowel" },
                { id: "ulcerative_colitis", name: "Ulcerative Colitis", subcategory: "large_bowel" },
                { id: "ischemic_colitis", name: "Ischemic Colitis", subcategory: "large_bowel" },
                { id: "cdiff", name: "C. difficile Colitis", subcategory: "large_bowel" },
                { id: "infectious_colitis", name: "Infectious Colitis", subcategory: "large_bowel" },
                { id: "microscopic_colitis", name: "Microscopic Colitis", subcategory: "large_bowel" },
                { id: "colon_cancer", name: "Colon Cancer", subcategory: "large_bowel" },
                { id: "colon_polyp", name: "Colon Polyp", subcategory: "large_bowel" },
                { id: "volvulus", name: "Volvulus", subcategory: "large_bowel", mustNotMiss: true },
                { id: "ogilvie", name: "Ogilvie Syndrome (Pseudo-obstruction)", subcategory: "large_bowel" },
                { id: "gi_bleed_lower", name: "Lower GI Bleeding", subcategory: "large_bowel" },
                { id: "hemorrhoids", name: "Hemorrhoids", subcategory: "large_bowel" },
                { id: "anal_fissure", name: "Anal Fissure", subcategory: "large_bowel" },
                { id: "toxic_megacolon", name: "Toxic Megacolon", subcategory: "large_bowel", mustNotMiss: true },
                
                // Abdominal Emergency (9)
                { id: "appendicitis", name: "Appendicitis", subcategory: "abdominal_emergency", mustNotMiss: true },
                { id: "peritonitis", name: "Peritonitis", subcategory: "abdominal_emergency", mustNotMiss: true },
                { id: "sbp", name: "Spontaneous Bacterial Peritonitis", subcategory: "abdominal_emergency", mustNotMiss: true },
                { id: "bowel_perforation", name: "Bowel Perforation", subcategory: "abdominal_emergency", mustNotMiss: true },
                { id: "incarcerated_hernia", name: "Incarcerated Hernia", subcategory: "abdominal_emergency", mustNotMiss: true },
                { id: "strangulated_hernia", name: "Strangulated Hernia", subcategory: "abdominal_emergency", mustNotMiss: true },
                { id: "inguinal_hernia", name: "Inguinal Hernia", subcategory: "abdominal_emergency" },
                { id: "femoral_hernia", name: "Femoral Hernia", subcategory: "abdominal_emergency" },
                { id: "umbilical_hernia", name: "Umbilical Hernia", subcategory: "abdominal_emergency" },
                
                // GI Infections (7)
                { id: "gastroenteritis_viral", name: "Viral Gastroenteritis", subcategory: "infectious" },
                { id: "gastroenteritis_bacterial", name: "Bacterial Gastroenteritis", subcategory: "infectious" },
                { id: "food_poisoning", name: "Food Poisoning", subcategory: "infectious" },
                { id: "travelers_diarrhea", name: "Traveler's Diarrhea", subcategory: "infectious" },
                { id: "giardiasis", name: "Giardiasis", subcategory: "infectious" },
                { id: "amebiasis", name: "Amebiasis", subcategory: "infectious" },
                { id: "parasitic_infection", name: "Parasitic Intestinal Infection", subcategory: "infectious" },
                
                // Functional (5)
                { id: "ibs", name: "Irritable Bowel Syndrome", subcategory: "functional" },
                { id: "ibs_c", name: "IBS with Constipation (IBS-C)", subcategory: "functional" },
                { id: "ibs_d", name: "IBS with Diarrhea (IBS-D)", subcategory: "functional" },
                { id: "functional_dyspepsia", name: "Functional Dyspepsia", subcategory: "functional" },
                { id: "constipation", name: "Chronic Constipation", subcategory: "functional" },
            ]
        },

        // ========== RENAL/GENITOURINARY (70 diagnoses) ==========
        renal: {
            name: "🫘 Renal/GU",
            diagnoses: [
                // AKI (8)
                { id: "aki_prerenal", name: "Prerenal AKI (Dehydration/Hypoperfusion)", subcategory: "aki" },
                { id: "aki_intrinsic", name: "Intrinsic AKI", subcategory: "aki" },
                { id: "aki_postrenal", name: "Postrenal AKI (Obstruction)", subcategory: "aki" },
                { id: "atn", name: "Acute Tubular Necrosis (ATN)", subcategory: "aki" },
                { id: "ain", name: "Acute Interstitial Nephritis", subcategory: "aki" },
                { id: "contrast_nephropathy", name: "Contrast-Induced Nephropathy", subcategory: "aki" },
                { id: "rhabdomyolysis", name: "Rhabdomyolysis", subcategory: "aki", mustNotMiss: true },
                { id: "cortical_necrosis", name: "Acute Cortical Necrosis", subcategory: "aki" },
                
                // CKD (6)
                { id: "ckd_stage1", name: "CKD Stage 1", subcategory: "ckd" },
                { id: "ckd_stage2", name: "CKD Stage 2", subcategory: "ckd" },
                { id: "ckd_stage3", name: "CKD Stage 3", subcategory: "ckd" },
                { id: "ckd_stage4", name: "CKD Stage 4", subcategory: "ckd" },
                { id: "ckd_stage5", name: "CKD Stage 5", subcategory: "ckd" },
                { id: "esrd", name: "End-Stage Renal Disease (ESRD)", subcategory: "ckd" },
                
                // Glomerular Disease (12)
                { id: "glomerulonephritis", name: "Glomerulonephritis", subcategory: "glomerular" },
                { id: "nephrotic_syndrome", name: "Nephrotic Syndrome", subcategory: "glomerular" },
                { id: "nephritic_syndrome", name: "Nephritic Syndrome", subcategory: "glomerular" },
                { id: "iga_nephropathy", name: "IgA Nephropathy", subcategory: "glomerular" },
                { id: "membranous_nephropathy", name: "Membranous Nephropathy", subcategory: "glomerular" },
                { id: "fsgs", name: "Focal Segmental Glomerulosclerosis (FSGS)", subcategory: "glomerular" },
                { id: "minimal_change", name: "Minimal Change Disease", subcategory: "glomerular" },
                { id: "lupus_nephritis", name: "Lupus Nephritis", subcategory: "glomerular" },
                { id: "goodpasture", name: "Goodpasture Syndrome", subcategory: "glomerular", mustNotMiss: true },
                { id: "post_strep_gn", name: "Post-Streptococcal Glomerulonephritis", subcategory: "glomerular" },
                { id: "rpgn", name: "Rapidly Progressive Glomerulonephritis (RPGN)", subcategory: "glomerular", mustNotMiss: true },
                { id: "mpgn", name: "Membranoproliferative GN", subcategory: "glomerular" },
                
                // UTI (8)
                { id: "cystitis", name: "Cystitis (Bladder Infection)", subcategory: "uti" },
                { id: "pyelonephritis", name: "Pyelonephritis", subcategory: "uti" },
                { id: "prostatitis_acute", name: "Acute Prostatitis", subcategory: "uti" },
                { id: "prostatitis_chronic", name: "Chronic Prostatitis", subcategory: "uti" },
                { id: "urethritis", name: "Urethritis", subcategory: "uti" },
                { id: "complicated_uti", name: "Complicated UTI", subcategory: "uti" },
                { id: "recurrent_uti", name: "Recurrent UTI", subcategory: "uti" },
                { id: "urosepsis", name: "Urosepsis", subcategory: "uti", mustNotMiss: true },
                
                // Nephrolithiasis (4)
                { id: "kidney_stone", name: "Kidney Stone (Nephrolithiasis)", subcategory: "stones" },
                { id: "ureteral_stone", name: "Ureteral Stone", subcategory: "stones" },
                { id: "bladder_stone", name: "Bladder Stone", subcategory: "stones" },
                { id: "staghorn_calculus", name: "Staghorn Calculus", subcategory: "stones" },
                
                // Urinary Obstruction (6)
                { id: "bph", name: "Benign Prostatic Hyperplasia (BPH)", subcategory: "obstruction" },
                { id: "urinary_retention", name: "Urinary Retention", subcategory: "obstruction" },
                { id: "hydronephrosis", name: "Hydronephrosis", subcategory: "obstruction" },
                { id: "urethral_stricture", name: "Urethral Stricture", subcategory: "obstruction" },
                { id: "neurogenic_bladder", name: "Neurogenic Bladder", subcategory: "obstruction" },
                { id: "bladder_outlet_obstruction", name: "Bladder Outlet Obstruction", subcategory: "obstruction" },
                
                // Electrolyte Disorders (10)
                { id: "hyponatremia", name: "Hyponatremia", subcategory: "electrolyte" },
                { id: "hypernatremia", name: "Hypernatremia", subcategory: "electrolyte" },
                { id: "hypokalemia", name: "Hypokalemia", subcategory: "electrolyte" },
                { id: "hyperkalemia", name: "Hyperkalemia", subcategory: "electrolyte", mustNotMiss: true },
                { id: "hypocalcemia", name: "Hypocalcemia", subcategory: "electrolyte" },
                { id: "hypercalcemia", name: "Hypercalcemia", subcategory: "electrolyte" },
                { id: "hypomagnesemia", name: "Hypomagnesemia", subcategory: "electrolyte" },
                { id: "hypermagnesemia", name: "Hypermagnesemia", subcategory: "electrolyte" },
                { id: "hypophosphatemia", name: "Hypophosphatemia", subcategory: "electrolyte" },
                { id: "hyperphosphatemia", name: "Hyperphosphatemia", subcategory: "electrolyte" },
                
                // Male GU (8)
                { id: "testicular_torsion", name: "Testicular Torsion", subcategory: "male_gu", mustNotMiss: true },
                { id: "epididymitis", name: "Epididymitis", subcategory: "male_gu" },
                { id: "orchitis", name: "Orchitis", subcategory: "male_gu" },
                { id: "prostate_cancer", name: "Prostate Cancer", subcategory: "male_gu" },
                { id: "testicular_cancer", name: "Testicular Cancer", subcategory: "male_gu" },
                { id: "erectile_dysfunction", name: "Erectile Dysfunction", subcategory: "male_gu" },
                { id: "priapism", name: "Priapism", subcategory: "male_gu", mustNotMiss: true },
                { id: "fournier_gangrene", name: "Fournier's Gangrene", subcategory: "male_gu", mustNotMiss: true },
                
                // Female GU (8)
                { id: "ectopic_pregnancy", name: "Ectopic Pregnancy", subcategory: "female_gu", mustNotMiss: true },
                { id: "ovarian_torsion", name: "Ovarian Torsion", subcategory: "female_gu", mustNotMiss: true },
                { id: "ovarian_cyst", name: "Ovarian Cyst", subcategory: "female_gu" },
                { id: "ruptured_ovarian_cyst", name: "Ruptured Ovarian Cyst", subcategory: "female_gu" },
                { id: "pid", name: "Pelvic Inflammatory Disease", subcategory: "female_gu" },
                { id: "tubo_ovarian_abscess", name: "Tubo-Ovarian Abscess", subcategory: "female_gu", mustNotMiss: true },
                { id: "endometriosis", name: "Endometriosis", subcategory: "female_gu" },
                { id: "uterine_fibroids", name: "Uterine Fibroids", subcategory: "female_gu" },
            ]
        },

        // ========== NEUROLOGICAL (75 diagnoses) ==========
        neurological: {
            name: "🧠 Neurological",
            diagnoses: [
                // Cerebrovascular (11)
                { id: "stroke_ischemic", name: "Ischemic Stroke", subcategory: "stroke", mustNotMiss: true },
                { id: "stroke_hemorrhagic", name: "Hemorrhagic Stroke", subcategory: "stroke", mustNotMiss: true },
                { id: "tia", name: "Transient Ischemic Attack (TIA)", subcategory: "stroke", mustNotMiss: true },
                { id: "sah", name: "Subarachnoid Hemorrhage", subcategory: "stroke", mustNotMiss: true },
                { id: "subdural_hematoma", name: "Subdural Hematoma", subcategory: "stroke", mustNotMiss: true },
                { id: "epidural_hematoma", name: "Epidural Hematoma", subcategory: "stroke", mustNotMiss: true },
                { id: "ich", name: "Intracerebral Hemorrhage", subcategory: "stroke", mustNotMiss: true },
                { id: "cerebral_venous_thrombosis", name: "Cerebral Venous Thrombosis", subcategory: "stroke", mustNotMiss: true },
                { id: "cavernous_sinus_thrombosis", name: "Cavernous Sinus Thrombosis", subcategory: "stroke", mustNotMiss: true },
                { id: "vertebral_dissection", name: "Vertebral Artery Dissection", subcategory: "stroke", mustNotMiss: true },
                { id: "carotid_dissection", name: "Carotid Artery Dissection", subcategory: "stroke", mustNotMiss: true },
                
                // Headache (9)
                { id: "migraine", name: "Migraine", subcategory: "headache" },
                { id: "migraine_with_aura", name: "Migraine with Aura", subcategory: "headache" },
                { id: "tension_headache", name: "Tension Headache", subcategory: "headache" },
                { id: "cluster_headache", name: "Cluster Headache", subcategory: "headache" },
                { id: "medication_overuse_headache", name: "Medication Overuse Headache", subcategory: "headache" },
                { id: "thunderclap_headache", name: "Thunderclap Headache", subcategory: "headache", mustNotMiss: true },
                { id: "pseudotumor_cerebri", name: "Idiopathic Intracranial Hypertension", subcategory: "headache" },
                { id: "post_concussion_headache", name: "Post-Concussion Headache", subcategory: "headache" },
                { id: "trigeminal_neuralgia", name: "Trigeminal Neuralgia", subcategory: "headache" },
                
                // CNS Infection (8)
                { id: "meningitis_bacterial", name: "Bacterial Meningitis", subcategory: "cns_infection", mustNotMiss: true },
                { id: "meningitis_viral", name: "Viral Meningitis", subcategory: "cns_infection" },
                { id: "meningitis_fungal", name: "Fungal Meningitis", subcategory: "cns_infection" },
                { id: "meningitis_tb", name: "Tuberculous Meningitis", subcategory: "cns_infection", mustNotMiss: true },
                { id: "encephalitis", name: "Encephalitis", subcategory: "cns_infection", mustNotMiss: true },
                { id: "brain_abscess", name: "Brain Abscess", subcategory: "cns_infection", mustNotMiss: true },
                { id: "epidural_abscess_spinal", name: "Spinal Epidural Abscess", subcategory: "cns_infection", mustNotMiss: true },
                { id: "subdural_empyema", name: "Subdural Empyema", subcategory: "cns_infection", mustNotMiss: true },
                
                // Seizure (7)
                { id: "seizure_generalized", name: "Generalized Seizure", subcategory: "seizure" },
                { id: "seizure_focal", name: "Focal Seizure", subcategory: "seizure" },
                { id: "status_epilepticus", name: "Status Epilepticus", subcategory: "seizure", mustNotMiss: true },
                { id: "epilepsy", name: "Epilepsy", subcategory: "seizure" },
                { id: "febrile_seizure", name: "Febrile Seizure", subcategory: "seizure" },
                { id: "absence_seizure", name: "Absence Seizure", subcategory: "seizure" },
                { id: "nonepileptic_seizure", name: "Psychogenic Non-Epileptic Seizure", subcategory: "seizure" },
                
                // Spinal Cord (9)
                { id: "spinal_cord_compression", name: "Spinal Cord Compression", subcategory: "spinal", mustNotMiss: true },
                { id: "cauda_equina", name: "Cauda Equina Syndrome", subcategory: "spinal", mustNotMiss: true },
                { id: "transverse_myelitis", name: "Transverse Myelitis", subcategory: "spinal" },
                { id: "herniated_disc", name: "Herniated Disc", subcategory: "spinal" },
                { id: "spinal_stenosis", name: "Spinal Stenosis", subcategory: "spinal" },
                { id: "cervical_radiculopathy", name: "Cervical Radiculopathy", subcategory: "spinal" },
                { id: "lumbar_radiculopathy", name: "Lumbar Radiculopathy", subcategory: "spinal" },
                { id: "syringomyelia", name: "Syringomyelia", subcategory: "spinal" },
                { id: "spinal_cord_infarction", name: "Spinal Cord Infarction", subcategory: "spinal", mustNotMiss: true },
                
                // Demyelinating (6)
                { id: "multiple_sclerosis", name: "Multiple Sclerosis", subcategory: "demyelinating" },
                { id: "guillain_barre", name: "Guillain-Barré Syndrome", subcategory: "demyelinating", mustNotMiss: true },
                { id: "cidp", name: "Chronic Inflammatory Demyelinating Polyneuropathy", subcategory: "demyelinating" },
                { id: "neuromyelitis_optica", name: "Neuromyelitis Optica (Devic's)", subcategory: "demyelinating" },
                { id: "adem", name: "Acute Disseminated Encephalomyelitis", subcategory: "demyelinating" },
                { id: "optic_neuritis", name: "Optic Neuritis", subcategory: "demyelinating" },
                
                // Neuromuscular (7)
                { id: "myasthenia_gravis", name: "Myasthenia Gravis", subcategory: "neuromuscular" },
                { id: "myasthenic_crisis", name: "Myasthenic Crisis", subcategory: "neuromuscular", mustNotMiss: true },
                { id: "als", name: "ALS (Amyotrophic Lateral Sclerosis)", subcategory: "neuromuscular" },
                { id: "lambert_eaton", name: "Lambert-Eaton Syndrome", subcategory: "neuromuscular" },
                { id: "muscular_dystrophy", name: "Muscular Dystrophy", subcategory: "neuromuscular" },
                { id: "polymyositis", name: "Polymyositis", subcategory: "neuromuscular" },
                { id: "dermatomyositis", name: "Dermatomyositis", subcategory: "neuromuscular" },
                
                // Neuropathy (8)
                { id: "peripheral_neuropathy", name: "Peripheral Neuropathy", subcategory: "neuropathy" },
                { id: "diabetic_neuropathy", name: "Diabetic Neuropathy", subcategory: "neuropathy" },
                { id: "carpal_tunnel", name: "Carpal Tunnel Syndrome", subcategory: "neuropathy" },
                { id: "ulnar_neuropathy", name: "Ulnar Neuropathy", subcategory: "neuropathy" },
                { id: "sciatica", name: "Sciatica", subcategory: "neuropathy" },
                { id: "bells_palsy", name: "Bell's Palsy", subcategory: "neuropathy" },
                { id: "peroneal_neuropathy", name: "Peroneal Neuropathy", subcategory: "neuropathy" },
                { id: "small_fiber_neuropathy", name: "Small Fiber Neuropathy", subcategory: "neuropathy" },
                
                // Movement Disorders (8)
                { id: "parkinsons", name: "Parkinson's Disease", subcategory: "movement" },
                { id: "essential_tremor", name: "Essential Tremor", subcategory: "movement" },
                { id: "huntingtons", name: "Huntington's Disease", subcategory: "movement" },
                { id: "dystonia", name: "Dystonia", subcategory: "movement" },
                { id: "tardive_dyskinesia", name: "Tardive Dyskinesia", subcategory: "movement" },
                { id: "restless_leg", name: "Restless Leg Syndrome", subcategory: "movement" },
                { id: "chorea", name: "Chorea", subcategory: "movement" },
                { id: "ataxia", name: "Ataxia", subcategory: "movement" },
                
                // Dementia/Cognitive (7)
                { id: "alzheimers", name: "Alzheimer's Disease", subcategory: "dementia" },
                { id: "vascular_dementia", name: "Vascular Dementia", subcategory: "dementia" },
                { id: "lewy_body_dementia", name: "Lewy Body Dementia", subcategory: "dementia" },
                { id: "frontotemporal_dementia", name: "Frontotemporal Dementia", subcategory: "dementia" },
                { id: "normal_pressure_hydrocephalus", name: "Normal Pressure Hydrocephalus", subcategory: "dementia" },
                { id: "delirium", name: "Delirium", subcategory: "dementia" },
                { id: "mild_cognitive_impairment", name: "Mild Cognitive Impairment", subcategory: "dementia" },
                
                // Vertigo (7)
                { id: "bppv", name: "BPPV (Benign Paroxysmal Positional Vertigo)", subcategory: "vertigo" },
                { id: "vestibular_neuritis", name: "Vestibular Neuritis", subcategory: "vertigo" },
                { id: "menieres", name: "Ménière's Disease", subcategory: "vertigo" },
                { id: "labyrinthitis", name: "Labyrinthitis", subcategory: "vertigo" },
                { id: "central_vertigo", name: "Central Vertigo", subcategory: "vertigo", mustNotMiss: true },
                { id: "acoustic_neuroma", name: "Acoustic Neuroma", subcategory: "vertigo" },
                { id: "vestibular_migraine", name: "Vestibular Migraine", subcategory: "vertigo" },
            ]
        },

        // ========== INFECTIOUS DISEASE (55 diagnoses) ==========
        infectious: {
            name: "🦠 Infectious Disease",
            diagnoses: [
                // Sepsis (4)
                { id: "sepsis", name: "Sepsis", subcategory: "sepsis", mustNotMiss: true },
                { id: "severe_sepsis", name: "Severe Sepsis", subcategory: "sepsis", mustNotMiss: true },
                { id: "septic_shock", name: "Septic Shock", subcategory: "sepsis", mustNotMiss: true },
                { id: "bacteremia", name: "Bacteremia", subcategory: "sepsis" },
                
                // Skin/Soft Tissue (10)
                { id: "cellulitis", name: "Cellulitis", subcategory: "skin" },
                { id: "abscess", name: "Abscess", subcategory: "skin" },
                { id: "necrotizing_fasciitis", name: "Necrotizing Fasciitis", subcategory: "skin", mustNotMiss: true },
                { id: "erysipelas", name: "Erysipelas", subcategory: "skin" },
                { id: "impetigo", name: "Impetigo", subcategory: "skin" },
                { id: "folliculitis", name: "Folliculitis", subcategory: "skin" },
                { id: "furuncle", name: "Furuncle (Boil)", subcategory: "skin" },
                { id: "carbuncle", name: "Carbuncle", subcategory: "skin" },
                { id: "wound_infection", name: "Wound Infection", subcategory: "skin" },
                { id: "mrsa", name: "MRSA Infection", subcategory: "skin" },
                
                // Bone/Joint (4)
                { id: "osteomyelitis", name: "Osteomyelitis", subcategory: "bone_joint" },
                { id: "septic_arthritis", name: "Septic Arthritis", subcategory: "bone_joint", mustNotMiss: true },
                { id: "prosthetic_joint_infection", name: "Prosthetic Joint Infection", subcategory: "bone_joint" },
                { id: "discitis", name: "Discitis", subcategory: "bone_joint" },
                
                // STIs (10)
                { id: "chlamydia", name: "Chlamydia", subcategory: "sti" },
                { id: "gonorrhea", name: "Gonorrhea", subcategory: "sti" },
                { id: "syphilis_primary", name: "Primary Syphilis", subcategory: "sti" },
                { id: "syphilis_secondary", name: "Secondary Syphilis", subcategory: "sti" },
                { id: "syphilis_tertiary", name: "Tertiary Syphilis", subcategory: "sti" },
                { id: "herpes_genital", name: "Genital Herpes", subcategory: "sti" },
                { id: "hiv_acute", name: "Acute HIV Infection", subcategory: "sti" },
                { id: "hiv_chronic", name: "HIV/AIDS", subcategory: "sti" },
                { id: "trichomoniasis", name: "Trichomoniasis", subcategory: "sti" },
                { id: "hpv", name: "HPV Infection", subcategory: "sti" },
                
                // Viral (10)
                { id: "influenza", name: "Influenza", subcategory: "viral" },
                { id: "covid19", name: "COVID-19", subcategory: "viral" },
                { id: "rsv", name: "RSV (Respiratory Syncytial Virus)", subcategory: "viral" },
                { id: "mononucleosis", name: "Infectious Mononucleosis (EBV)", subcategory: "viral" },
                { id: "cmv", name: "Cytomegalovirus (CMV)", subcategory: "viral" },
                { id: "herpes_zoster", name: "Herpes Zoster (Shingles)", subcategory: "viral" },
                { id: "herpes_simplex", name: "Herpes Simplex", subcategory: "viral" },
                { id: "varicella", name: "Varicella (Chickenpox)", subcategory: "viral" },
                { id: "viral_syndrome", name: "Viral Syndrome", subcategory: "viral" },
                { id: "hand_foot_mouth", name: "Hand, Foot, and Mouth Disease", subcategory: "viral" },
                
                // Fungal (6)
                { id: "candidiasis", name: "Candidiasis", subcategory: "fungal" },
                { id: "aspergillosis", name: "Aspergillosis", subcategory: "fungal" },
                { id: "cryptococcosis", name: "Cryptococcosis", subcategory: "fungal" },
                { id: "histoplasmosis", name: "Histoplasmosis", subcategory: "fungal" },
                { id: "coccidioidomycosis", name: "Coccidioidomycosis (Valley Fever)", subcategory: "fungal" },
                { id: "pneumocystis", name: "Pneumocystis (PCP)", subcategory: "fungal" },
                
                // Tick-Borne (5)
                { id: "lyme_disease", name: "Lyme Disease", subcategory: "tick_borne" },
                { id: "rmsf", name: "Rocky Mountain Spotted Fever", subcategory: "tick_borne", mustNotMiss: true },
                { id: "ehrlichiosis", name: "Ehrlichiosis", subcategory: "tick_borne" },
                { id: "anaplasmosis", name: "Anaplasmosis", subcategory: "tick_borne" },
                { id: "babesiosis", name: "Babesiosis", subcategory: "tick_borne" },
                
                // Other (6)
                { id: "endocarditis_infective", name: "Infective Endocarditis", subcategory: "endovascular", mustNotMiss: true },
                { id: "infected_device", name: "Infected Implantable Device", subcategory: "endovascular" },
                { id: "malaria", name: "Malaria", subcategory: "parasitic" },
                { id: "dengue", name: "Dengue Fever", subcategory: "parasitic" },
                { id: "toxoplasmosis", name: "Toxoplasmosis", subcategory: "parasitic" },
                { id: "tetanus", name: "Tetanus", subcategory: "other", mustNotMiss: true },
            ]
        },

        // ========== ENDOCRINE (45 diagnoses) ==========
        endocrine: {
            name: "🦋 Endocrine",
            diagnoses: [
                // Diabetes (8)
                { id: "dka", name: "Diabetic Ketoacidosis (DKA)", subcategory: "diabetes", mustNotMiss: true },
                { id: "hhs", name: "Hyperosmolar Hyperglycemic State (HHS)", subcategory: "diabetes", mustNotMiss: true },
                { id: "hypoglycemia", name: "Hypoglycemia", subcategory: "diabetes", mustNotMiss: true },
                { id: "dm_type1", name: "Type 1 Diabetes Mellitus", subcategory: "diabetes" },
                { id: "dm_type2", name: "Type 2 Diabetes Mellitus", subcategory: "diabetes" },
                { id: "prediabetes", name: "Prediabetes", subcategory: "diabetes" },
                { id: "gestational_diabetes", name: "Gestational Diabetes", subcategory: "diabetes" },
                { id: "diabetic_neuropathy_endo", name: "Diabetic Complications", subcategory: "diabetes" },
                
                // Thyroid (12)
                { id: "hypothyroidism", name: "Hypothyroidism", subcategory: "thyroid" },
                { id: "hyperthyroidism", name: "Hyperthyroidism", subcategory: "thyroid" },
                { id: "graves_disease", name: "Graves' Disease", subcategory: "thyroid" },
                { id: "hashimotos", name: "Hashimoto's Thyroiditis", subcategory: "thyroid" },
                { id: "thyroid_storm", name: "Thyroid Storm", subcategory: "thyroid", mustNotMiss: true },
                { id: "myxedema_coma", name: "Myxedema Coma", subcategory: "thyroid", mustNotMiss: true },
                { id: "thyroiditis_subacute", name: "Subacute Thyroiditis", subcategory: "thyroid" },
                { id: "thyroiditis_postpartum", name: "Postpartum Thyroiditis", subcategory: "thyroid" },
                { id: "thyroid_nodule", name: "Thyroid Nodule", subcategory: "thyroid" },
                { id: "thyroid_cancer", name: "Thyroid Cancer", subcategory: "thyroid" },
                { id: "sick_euthyroid", name: "Sick Euthyroid Syndrome", subcategory: "thyroid" },
                { id: "goiter", name: "Goiter", subcategory: "thyroid" },
                
                // Adrenal (8)
                { id: "adrenal_insufficiency", name: "Adrenal Insufficiency", subcategory: "adrenal", mustNotMiss: true },
                { id: "adrenal_crisis", name: "Adrenal Crisis", subcategory: "adrenal", mustNotMiss: true },
                { id: "addison_disease", name: "Addison's Disease", subcategory: "adrenal" },
                { id: "cushings_syndrome", name: "Cushing's Syndrome", subcategory: "adrenal" },
                { id: "cushings_disease", name: "Cushing's Disease", subcategory: "adrenal" },
                { id: "pheochromocytoma", name: "Pheochromocytoma", subcategory: "adrenal", mustNotMiss: true },
                { id: "hyperaldosteronism", name: "Hyperaldosteronism (Conn's)", subcategory: "adrenal" },
                { id: "adrenal_incidentaloma", name: "Adrenal Incidentaloma", subcategory: "adrenal" },
                
                // Pituitary (7)
                { id: "hypopituitarism", name: "Hypopituitarism", subcategory: "pituitary" },
                { id: "pituitary_adenoma", name: "Pituitary Adenoma", subcategory: "pituitary" },
                { id: "prolactinoma", name: "Prolactinoma", subcategory: "pituitary" },
                { id: "acromegaly", name: "Acromegaly", subcategory: "pituitary" },
                { id: "diabetes_insipidus", name: "Diabetes Insipidus", subcategory: "pituitary" },
                { id: "siadh", name: "SIADH", subcategory: "pituitary" },
                { id: "pituitary_apoplexy", name: "Pituitary Apoplexy", subcategory: "pituitary", mustNotMiss: true },
                
                // Parathyroid (5)
                { id: "hyperparathyroidism_primary", name: "Primary Hyperparathyroidism", subcategory: "parathyroid" },
                { id: "hyperparathyroidism_secondary", name: "Secondary Hyperparathyroidism", subcategory: "parathyroid" },
                { id: "hypoparathyroidism", name: "Hypoparathyroidism", subcategory: "parathyroid" },
                { id: "hypercalcemia_malignancy", name: "Hypercalcemia of Malignancy", subcategory: "parathyroid" },
                { id: "hungry_bone", name: "Hungry Bone Syndrome", subcategory: "parathyroid" },
                
                // Other Metabolic (5)
                { id: "obesity", name: "Obesity", subcategory: "metabolic" },
                { id: "metabolic_syndrome", name: "Metabolic Syndrome", subcategory: "metabolic" },
                { id: "dyslipidemia", name: "Dyslipidemia", subcategory: "metabolic" },
                { id: "vitamin_d_deficiency", name: "Vitamin D Deficiency", subcategory: "metabolic" },
                { id: "osteoporosis_endo", name: "Osteoporosis", subcategory: "metabolic" },
            ]
        },

        // ========== HEMATOLOGY/ONCOLOGY (50 diagnoses) ==========
        hematology: {
            name: "🩸 Hematology/Oncology",
            diagnoses: [
                // Anemia (12)
                { id: "anemia_iron_def", name: "Iron Deficiency Anemia", subcategory: "anemia" },
                { id: "anemia_b12", name: "B12 Deficiency Anemia", subcategory: "anemia" },
                { id: "anemia_folate", name: "Folate Deficiency Anemia", subcategory: "anemia" },
                { id: "anemia_chronic_disease", name: "Anemia of Chronic Disease", subcategory: "anemia" },
                { id: "hemolytic_anemia", name: "Hemolytic Anemia", subcategory: "anemia" },
                { id: "autoimmune_hemolytic", name: "Autoimmune Hemolytic Anemia", subcategory: "anemia" },
                { id: "sickle_cell_disease", name: "Sickle Cell Disease", subcategory: "anemia" },
                { id: "sickle_cell_crisis", name: "Sickle Cell Crisis", subcategory: "anemia", mustNotMiss: true },
                { id: "thalassemia", name: "Thalassemia", subcategory: "anemia" },
                { id: "aplastic_anemia", name: "Aplastic Anemia", subcategory: "anemia" },
                { id: "g6pd_deficiency", name: "G6PD Deficiency", subcategory: "anemia" },
                { id: "myelodysplastic", name: "Myelodysplastic Syndrome", subcategory: "anemia" },
                
                // Bleeding/Coagulation (12)
                { id: "dic", name: "DIC (Disseminated Intravascular Coagulation)", subcategory: "coagulation", mustNotMiss: true },
                { id: "hit", name: "HIT (Heparin-Induced Thrombocytopenia)", subcategory: "coagulation", mustNotMiss: true },
                { id: "ttp", name: "TTP (Thrombotic Thrombocytopenic Purpura)", subcategory: "coagulation", mustNotMiss: true },
                { id: "hus", name: "HUS (Hemolytic Uremic Syndrome)", subcategory: "coagulation", mustNotMiss: true },
                { id: "itp", name: "ITP (Immune Thrombocytopenia)", subcategory: "coagulation" },
                { id: "hemophilia_a", name: "Hemophilia A", subcategory: "coagulation" },
                { id: "hemophilia_b", name: "Hemophilia B", subcategory: "coagulation" },
                { id: "von_willebrand", name: "Von Willebrand Disease", subcategory: "coagulation" },
                { id: "vitamin_k_deficiency", name: "Vitamin K Deficiency", subcategory: "coagulation" },
                { id: "factor_v_leiden", name: "Factor V Leiden", subcategory: "coagulation" },
                { id: "antiphospholipid", name: "Antiphospholipid Syndrome", subcategory: "coagulation" },
                { id: "warfarin_toxicity", name: "Warfarin Toxicity/Supratherapeutic INR", subcategory: "coagulation" },
                
                // Hematologic Malignancy (12)
                { id: "aml", name: "Acute Myeloid Leukemia (AML)", subcategory: "malignancy" },
                { id: "all", name: "Acute Lymphoblastic Leukemia (ALL)", subcategory: "malignancy" },
                { id: "cml", name: "Chronic Myeloid Leukemia (CML)", subcategory: "malignancy" },
                { id: "cll", name: "Chronic Lymphocytic Leukemia (CLL)", subcategory: "malignancy" },
                { id: "lymphoma_hodgkins", name: "Hodgkin Lymphoma", subcategory: "malignancy" },
                { id: "lymphoma_non_hodgkins", name: "Non-Hodgkin Lymphoma", subcategory: "malignancy" },
                { id: "multiple_myeloma", name: "Multiple Myeloma", subcategory: "malignancy" },
                { id: "polycythemia_vera", name: "Polycythemia Vera", subcategory: "malignancy" },
                { id: "essential_thrombocythemia", name: "Essential Thrombocythemia", subcategory: "malignancy" },
                { id: "myelofibrosis", name: "Myelofibrosis", subcategory: "malignancy" },
                { id: "waldenstrom", name: "Waldenström Macroglobulinemia", subcategory: "malignancy" },
                { id: "hairy_cell_leukemia", name: "Hairy Cell Leukemia", subcategory: "malignancy" },
                
                // WBC Disorders (6)
                { id: "leukocytosis", name: "Leukocytosis", subcategory: "wbc" },
                { id: "leukopenia", name: "Leukopenia", subcategory: "wbc" },
                { id: "neutropenia", name: "Neutropenia", subcategory: "wbc" },
                { id: "neutropenic_fever", name: "Neutropenic Fever", subcategory: "wbc", mustNotMiss: true },
                { id: "lymphocytosis", name: "Lymphocytosis", subcategory: "wbc" },
                { id: "eosinophilia", name: "Eosinophilia", subcategory: "wbc" },
                
                // Oncologic Emergencies (8)
                { id: "tumor_lysis", name: "Tumor Lysis Syndrome", subcategory: "onc_emergency", mustNotMiss: true },
                { id: "spinal_cord_compression_onc", name: "Malignant Spinal Cord Compression", subcategory: "onc_emergency", mustNotMiss: true },
                { id: "svc_syndrome", name: "Superior Vena Cava Syndrome", subcategory: "onc_emergency", mustNotMiss: true },
                { id: "hypercalcemia_onc", name: "Hypercalcemia of Malignancy", subcategory: "onc_emergency", mustNotMiss: true },
                { id: "febrile_neutropenia", name: "Febrile Neutropenia", subcategory: "onc_emergency", mustNotMiss: true },
                { id: "malignant_pericardial", name: "Malignant Pericardial Effusion", subcategory: "onc_emergency" },
                { id: "malignant_pleural", name: "Malignant Pleural Effusion", subcategory: "onc_emergency" },
                { id: "brain_herniation", name: "Brain Herniation", subcategory: "onc_emergency", mustNotMiss: true },
            ]
        },

        // ========== RHEUMATOLOGY (40 diagnoses) ==========
        rheumatology: {
            name: "🦴 Rheumatology",
            diagnoses: [
                // Inflammatory Arthritis (10)
                { id: "rheumatoid_arthritis", name: "Rheumatoid Arthritis", subcategory: "arthritis" },
                { id: "osteoarthritis", name: "Osteoarthritis", subcategory: "arthritis" },
                { id: "gout", name: "Gout", subcategory: "arthritis" },
                { id: "pseudogout", name: "Pseudogout (CPPD)", subcategory: "arthritis" },
                { id: "septic_arthritis_rheum", name: "Septic Arthritis", subcategory: "arthritis", mustNotMiss: true },
                { id: "reactive_arthritis", name: "Reactive Arthritis", subcategory: "arthritis" },
                { id: "psoriatic_arthritis", name: "Psoriatic Arthritis", subcategory: "arthritis" },
                { id: "ankylosing_spondylitis", name: "Ankylosing Spondylitis", subcategory: "arthritis" },
                { id: "juvenile_idiopathic", name: "Juvenile Idiopathic Arthritis", subcategory: "arthritis" },
                { id: "gonococcal_arthritis", name: "Gonococcal Arthritis", subcategory: "arthritis" },
                
                // Connective Tissue Disease (10)
                { id: "sle", name: "Systemic Lupus Erythematosus (SLE)", subcategory: "connective_tissue" },
                { id: "lupus_flare", name: "Lupus Flare", subcategory: "connective_tissue" },
                { id: "scleroderma", name: "Systemic Sclerosis (Scleroderma)", subcategory: "connective_tissue" },
                { id: "scleroderma_renal_crisis", name: "Scleroderma Renal Crisis", subcategory: "connective_tissue", mustNotMiss: true },
                { id: "sjogrens", name: "Sjögren's Syndrome", subcategory: "connective_tissue" },
                { id: "dermatomyositis_rheum", name: "Dermatomyositis", subcategory: "connective_tissue" },
                { id: "polymyositis_rheum", name: "Polymyositis", subcategory: "connective_tissue" },
                { id: "mixed_connective_tissue", name: "Mixed Connective Tissue Disease", subcategory: "connective_tissue" },
                { id: "drug_induced_lupus", name: "Drug-Induced Lupus", subcategory: "connective_tissue" },
                { id: "antiphospholipid_rheum", name: "Antiphospholipid Syndrome", subcategory: "connective_tissue" },
                
                // Vasculitis (12)
                { id: "giant_cell_arteritis", name: "Giant Cell (Temporal) Arteritis", subcategory: "vasculitis", mustNotMiss: true },
                { id: "pmr", name: "Polymyalgia Rheumatica", subcategory: "vasculitis" },
                { id: "takayasu", name: "Takayasu Arteritis", subcategory: "vasculitis" },
                { id: "gpa", name: "Granulomatosis with Polyangiitis (GPA/Wegener's)", subcategory: "vasculitis" },
                { id: "egpa", name: "Eosinophilic Granulomatosis with Polyangiitis (EGPA)", subcategory: "vasculitis" },
                { id: "mpa", name: "Microscopic Polyangiitis", subcategory: "vasculitis" },
                { id: "polyarteritis_nodosa", name: "Polyarteritis Nodosa", subcategory: "vasculitis" },
                { id: "henoch_schonlein", name: "IgA Vasculitis (Henoch-Schönlein)", subcategory: "vasculitis" },
                { id: "behcets", name: "Behçet's Disease", subcategory: "vasculitis" },
                { id: "cryoglobulinemia", name: "Cryoglobulinemic Vasculitis", subcategory: "vasculitis" },
                { id: "kawasaki", name: "Kawasaki Disease", subcategory: "vasculitis", mustNotMiss: true },
                { id: "hypersensitivity_vasculitis", name: "Hypersensitivity Vasculitis", subcategory: "vasculitis" },
                
                // Other Rheum (8)
                { id: "fibromyalgia", name: "Fibromyalgia", subcategory: "other_rheum" },
                { id: "raynauds", name: "Raynaud's Phenomenon", subcategory: "other_rheum" },
                { id: "complex_regional_pain", name: "Complex Regional Pain Syndrome", subcategory: "other_rheum" },
                { id: "sarcoidosis_rheum", name: "Sarcoidosis", subcategory: "other_rheum" },
                { id: "adult_stills", name: "Adult-Onset Still's Disease", subcategory: "other_rheum" },
                { id: "relapsing_polychondritis", name: "Relapsing Polychondritis", subcategory: "other_rheum" },
                { id: "anca_vasculitis", name: "ANCA-Associated Vasculitis", subcategory: "other_rheum" },
                { id: "overlap_syndrome", name: "Overlap Syndrome", subcategory: "other_rheum" },
            ]
        },

        // ========== MUSCULOSKELETAL (35 diagnoses) ==========
        musculoskeletal: {
            name: "💪 Musculoskeletal",
            diagnoses: [
                // Spine (10)
                { id: "low_back_pain", name: "Low Back Pain (Mechanical)", subcategory: "spine" },
                { id: "lumbar_strain", name: "Lumbar Strain", subcategory: "spine" },
                { id: "degenerative_disc", name: "Degenerative Disc Disease", subcategory: "spine" },
                { id: "spondylosis", name: "Spondylosis", subcategory: "spine" },
                { id: "spondylolisthesis", name: "Spondylolisthesis", subcategory: "spine" },
                { id: "compression_fracture", name: "Vertebral Compression Fracture", subcategory: "spine" },
                { id: "cervical_strain", name: "Cervical Strain (Whiplash)", subcategory: "spine" },
                { id: "torticollis", name: "Torticollis", subcategory: "spine" },
                { id: "sacroiliitis", name: "Sacroiliitis", subcategory: "spine" },
                { id: "coccydynia", name: "Coccydynia", subcategory: "spine" },
                
                // Soft Tissue (12)
                { id: "muscle_strain", name: "Muscle Strain", subcategory: "soft_tissue" },
                { id: "tendinitis", name: "Tendinitis", subcategory: "soft_tissue" },
                { id: "bursitis", name: "Bursitis", subcategory: "soft_tissue" },
                { id: "rotator_cuff_tear", name: "Rotator Cuff Tear", subcategory: "soft_tissue" },
                { id: "rotator_cuff_tendinitis", name: "Rotator Cuff Tendinitis", subcategory: "soft_tissue" },
                { id: "frozen_shoulder", name: "Frozen Shoulder (Adhesive Capsulitis)", subcategory: "soft_tissue" },
                { id: "tennis_elbow", name: "Lateral Epicondylitis (Tennis Elbow)", subcategory: "soft_tissue" },
                { id: "golfers_elbow", name: "Medial Epicondylitis (Golfer's Elbow)", subcategory: "soft_tissue" },
                { id: "plantar_fasciitis", name: "Plantar Fasciitis", subcategory: "soft_tissue" },
                { id: "achilles_tendinitis", name: "Achilles Tendinitis", subcategory: "soft_tissue" },
                { id: "meniscus_tear", name: "Meniscus Tear", subcategory: "soft_tissue" },
                { id: "acl_tear", name: "ACL Tear", subcategory: "soft_tissue" },
                
                // Fractures (8)
                { id: "fracture_hip", name: "Hip Fracture", subcategory: "fracture", mustNotMiss: true },
                { id: "fracture_femur", name: "Femur Fracture", subcategory: "fracture" },
                { id: "fracture_ankle", name: "Ankle Fracture", subcategory: "fracture" },
                { id: "fracture_wrist", name: "Wrist Fracture (Colles/Smith)", subcategory: "fracture" },
                { id: "fracture_clavicle", name: "Clavicle Fracture", subcategory: "fracture" },
                { id: "rib_fracture", name: "Rib Fracture", subcategory: "fracture" },
                { id: "stress_fracture", name: "Stress Fracture", subcategory: "fracture" },
                { id: "pathologic_fracture", name: "Pathologic Fracture", subcategory: "fracture" },
                
                // Other MSK (5)
                { id: "compartment_syndrome_msk", name: "Compartment Syndrome", subcategory: "emergency", mustNotMiss: true },
                { id: "osteomyelitis_msk", name: "Osteomyelitis", subcategory: "infection" },
                { id: "osteoporosis", name: "Osteoporosis", subcategory: "bone" },
                { id: "avascular_necrosis", name: "Avascular Necrosis", subcategory: "bone" },
                { id: "pagets_disease", name: "Paget's Disease of Bone", subcategory: "bone" },
            ]
        },

        // ========== PSYCHIATRY (35 diagnoses) ==========
        psychiatry: {
            name: "🧘 Psychiatry",
            diagnoses: [
                // Mood Disorders (8)
                { id: "major_depression", name: "Major Depressive Disorder", subcategory: "mood" },
                { id: "persistent_depressive", name: "Persistent Depressive Disorder (Dysthymia)", subcategory: "mood" },
                { id: "bipolar_disorder_1", name: "Bipolar I Disorder", subcategory: "mood" },
                { id: "bipolar_disorder_2", name: "Bipolar II Disorder", subcategory: "mood" },
                { id: "manic_episode", name: "Manic Episode", subcategory: "mood" },
                { id: "seasonal_affective", name: "Seasonal Affective Disorder", subcategory: "mood" },
                { id: "postpartum_depression", name: "Postpartum Depression", subcategory: "mood" },
                { id: "adjustment_disorder", name: "Adjustment Disorder", subcategory: "mood" },
                
                // Anxiety Disorders (8)
                { id: "generalized_anxiety", name: "Generalized Anxiety Disorder", subcategory: "anxiety" },
                { id: "panic_disorder", name: "Panic Disorder", subcategory: "anxiety" },
                { id: "panic_attack", name: "Panic Attack", subcategory: "anxiety" },
                { id: "social_anxiety", name: "Social Anxiety Disorder", subcategory: "anxiety" },
                { id: "specific_phobia", name: "Specific Phobia", subcategory: "anxiety" },
                { id: "ocd", name: "Obsessive-Compulsive Disorder", subcategory: "anxiety" },
                { id: "ptsd", name: "Post-Traumatic Stress Disorder", subcategory: "anxiety" },
                { id: "agoraphobia", name: "Agoraphobia", subcategory: "anxiety" },
                
                // Psychotic Disorders (5)
                { id: "schizophrenia", name: "Schizophrenia", subcategory: "psychotic" },
                { id: "schizoaffective", name: "Schizoaffective Disorder", subcategory: "psychotic" },
                { id: "brief_psychotic", name: "Brief Psychotic Disorder", subcategory: "psychotic" },
                { id: "delusional_disorder", name: "Delusional Disorder", subcategory: "psychotic" },
                { id: "psychosis_nos", name: "Psychosis NOS", subcategory: "psychotic" },
                
                // Substance Use (6)
                { id: "alcohol_use_disorder", name: "Alcohol Use Disorder", subcategory: "substance" },
                { id: "alcohol_withdrawal_psych", name: "Alcohol Withdrawal", subcategory: "substance", mustNotMiss: true },
                { id: "opioid_use_disorder", name: "Opioid Use Disorder", subcategory: "substance" },
                { id: "stimulant_use", name: "Stimulant Use Disorder", subcategory: "substance" },
                { id: "benzodiazepine_dependence", name: "Benzodiazepine Dependence", subcategory: "substance" },
                { id: "cannabis_use", name: "Cannabis Use Disorder", subcategory: "substance" },
                
                // Psychiatric Emergencies (5)
                { id: "suicidal_ideation", name: "Suicidal Ideation", subcategory: "emergency", mustNotMiss: true },
                { id: "suicide_attempt", name: "Suicide Attempt", subcategory: "emergency", mustNotMiss: true },
                { id: "homicidal_ideation", name: "Homicidal Ideation", subcategory: "emergency", mustNotMiss: true },
                { id: "acute_psychosis", name: "Acute Psychosis", subcategory: "emergency" },
                { id: "catatonia", name: "Catatonia", subcategory: "emergency" },
                
                // Other Psychiatric (3)
                { id: "somatic_symptom", name: "Somatic Symptom Disorder", subcategory: "somatic" },
                { id: "conversion_disorder", name: "Conversion Disorder", subcategory: "somatic" },
                { id: "factitious_disorder", name: "Factitious Disorder", subcategory: "somatic" },
            ]
        },

        // ========== TOXICOLOGY (35 diagnoses) ==========
        toxicology: {
            name: "☠️ Toxicology",
            diagnoses: [
                // Overdose/Ingestion (16)
                { id: "acetaminophen_overdose", name: "Acetaminophen Overdose", subcategory: "overdose", mustNotMiss: true },
                { id: "aspirin_overdose", name: "Salicylate Toxicity", subcategory: "overdose", mustNotMiss: true },
                { id: "opioid_overdose", name: "Opioid Overdose", subcategory: "overdose", mustNotMiss: true },
                { id: "benzodiazepine_overdose", name: "Benzodiazepine Overdose", subcategory: "overdose" },
                { id: "tricyclic_overdose", name: "Tricyclic Antidepressant Overdose", subcategory: "overdose", mustNotMiss: true },
                { id: "beta_blocker_overdose", name: "Beta Blocker Overdose", subcategory: "overdose", mustNotMiss: true },
                { id: "calcium_channel_overdose", name: "Calcium Channel Blocker Overdose", subcategory: "overdose", mustNotMiss: true },
                { id: "digoxin_toxicity", name: "Digoxin Toxicity", subcategory: "overdose", mustNotMiss: true },
                { id: "lithium_toxicity", name: "Lithium Toxicity", subcategory: "overdose" },
                { id: "alcohol_intoxication", name: "Alcohol Intoxication", subcategory: "overdose" },
                { id: "methanol_poisoning", name: "Methanol Poisoning", subcategory: "overdose", mustNotMiss: true },
                { id: "ethylene_glycol", name: "Ethylene Glycol Poisoning", subcategory: "overdose", mustNotMiss: true },
                { id: "organophosphate", name: "Organophosphate Poisoning", subcategory: "overdose", mustNotMiss: true },
                { id: "anticholinergic_toxicity", name: "Anticholinergic Toxicity", subcategory: "overdose" },
                { id: "sympathomimetic_toxicity", name: "Sympathomimetic Toxicity", subcategory: "overdose" },
                { id: "ssri_overdose", name: "SSRI Overdose", subcategory: "overdose" },
                
                // Withdrawal (5)
                { id: "alcohol_withdrawal", name: "Alcohol Withdrawal", subcategory: "withdrawal", mustNotMiss: true },
                { id: "delirium_tremens", name: "Delirium Tremens", subcategory: "withdrawal", mustNotMiss: true },
                { id: "opioid_withdrawal", name: "Opioid Withdrawal", subcategory: "withdrawal" },
                { id: "benzodiazepine_withdrawal", name: "Benzodiazepine Withdrawal", subcategory: "withdrawal", mustNotMiss: true },
                { id: "stimulant_withdrawal", name: "Stimulant Withdrawal", subcategory: "withdrawal" },
                
                // Drug Reactions (6)
                { id: "serotonin_syndrome", name: "Serotonin Syndrome", subcategory: "drug_reaction", mustNotMiss: true },
                { id: "nms", name: "Neuroleptic Malignant Syndrome", subcategory: "drug_reaction", mustNotMiss: true },
                { id: "malignant_hyperthermia", name: "Malignant Hyperthermia", subcategory: "drug_reaction", mustNotMiss: true },
                { id: "drug_reaction_adverse", name: "Adverse Drug Reaction", subcategory: "drug_reaction" },
                { id: "drug_induced_parkinsonism", name: "Drug-Induced Parkinsonism", subcategory: "drug_reaction" },
                { id: "akathisia", name: "Akathisia", subcategory: "drug_reaction" },
                
                // Environmental (8)
                { id: "carbon_monoxide", name: "Carbon Monoxide Poisoning", subcategory: "environmental", mustNotMiss: true },
                { id: "cyanide_poisoning", name: "Cyanide Poisoning", subcategory: "environmental", mustNotMiss: true },
                { id: "heat_stroke", name: "Heat Stroke", subcategory: "environmental", mustNotMiss: true },
                { id: "heat_exhaustion", name: "Heat Exhaustion", subcategory: "environmental" },
                { id: "hypothermia", name: "Hypothermia", subcategory: "environmental" },
                { id: "frostbite", name: "Frostbite", subcategory: "environmental" },
                { id: "drowning", name: "Drowning/Near-Drowning", subcategory: "environmental" },
                { id: "electrical_injury", name: "Electrical Injury", subcategory: "environmental" },
            ]
        },

        // ========== DERMATOLOGY (30 diagnoses) ==========
        dermatology: {
            name: "🩹 Dermatology",
            diagnoses: [
                // Allergic/Immune (8)
                { id: "urticaria", name: "Urticaria (Hives)", subcategory: "allergic" },
                { id: "angioedema", name: "Angioedema", subcategory: "allergic", mustNotMiss: true },
                { id: "anaphylaxis", name: "Anaphylaxis", subcategory: "allergic", mustNotMiss: true },
                { id: "contact_dermatitis", name: "Contact Dermatitis", subcategory: "allergic" },
                { id: "drug_eruption", name: "Drug Eruption", subcategory: "allergic" },
                { id: "stevens_johnson", name: "Stevens-Johnson Syndrome", subcategory: "allergic", mustNotMiss: true },
                { id: "ten", name: "Toxic Epidermal Necrolysis (TEN)", subcategory: "allergic", mustNotMiss: true },
                { id: "erythema_multiforme", name: "Erythema Multiforme", subcategory: "allergic" },
                
                // Inflammatory (8)
                { id: "eczema", name: "Eczema/Atopic Dermatitis", subcategory: "inflammatory" },
                { id: "psoriasis", name: "Psoriasis", subcategory: "inflammatory" },
                { id: "seborrheic_dermatitis", name: "Seborrheic Dermatitis", subcategory: "inflammatory" },
                { id: "rosacea", name: "Rosacea", subcategory: "inflammatory" },
                { id: "acne", name: "Acne Vulgaris", subcategory: "inflammatory" },
                { id: "lichen_planus", name: "Lichen Planus", subcategory: "inflammatory" },
                { id: "pityriasis_rosea", name: "Pityriasis Rosea", subcategory: "inflammatory" },
                { id: "dermatitis_herpetiformis", name: "Dermatitis Herpetiformis", subcategory: "inflammatory" },
                
                // Infections (8)
                { id: "cellulitis_derm", name: "Cellulitis", subcategory: "infection" },
                { id: "abscess_derm", name: "Skin Abscess", subcategory: "infection" },
                { id: "impetigo_derm", name: "Impetigo", subcategory: "infection" },
                { id: "tinea", name: "Tinea (Dermatophyte Infection)", subcategory: "infection" },
                { id: "scabies", name: "Scabies", subcategory: "infection" },
                { id: "molluscum", name: "Molluscum Contagiosum", subcategory: "infection" },
                { id: "warts", name: "Warts (Verruca)", subcategory: "infection" },
                { id: "herpes_skin", name: "Herpes Simplex (Skin)", subcategory: "infection" },
                
                // Malignancy (6)
                { id: "melanoma", name: "Melanoma", subcategory: "malignancy", mustNotMiss: true },
                { id: "basal_cell_ca", name: "Basal Cell Carcinoma", subcategory: "malignancy" },
                { id: "squamous_cell_ca_skin", name: "Squamous Cell Carcinoma (Skin)", subcategory: "malignancy" },
                { id: "kaposi_sarcoma", name: "Kaposi Sarcoma", subcategory: "malignancy" },
                { id: "cutaneous_lymphoma", name: "Cutaneous Lymphoma", subcategory: "malignancy" },
                { id: "actinic_keratosis", name: "Actinic Keratosis", subcategory: "malignancy" },
            ]
        },

        // ========== OB/GYN (40 diagnoses) ==========
        obgyn: {
            name: "🤰 OB/GYN",
            diagnoses: [
                // Pregnancy Complications (14)
                { id: "ectopic_pregnancy_ob", name: "Ectopic Pregnancy", subcategory: "pregnancy", mustNotMiss: true },
                { id: "miscarriage", name: "Miscarriage/Spontaneous Abortion", subcategory: "pregnancy" },
                { id: "threatened_abortion", name: "Threatened Abortion", subcategory: "pregnancy" },
                { id: "incomplete_abortion", name: "Incomplete Abortion", subcategory: "pregnancy" },
                { id: "hyperemesis_gravidarum", name: "Hyperemesis Gravidarum", subcategory: "pregnancy" },
                { id: "preeclampsia", name: "Preeclampsia", subcategory: "pregnancy", mustNotMiss: true },
                { id: "eclampsia", name: "Eclampsia", subcategory: "pregnancy", mustNotMiss: true },
                { id: "hellp", name: "HELLP Syndrome", subcategory: "pregnancy", mustNotMiss: true },
                { id: "placenta_previa", name: "Placenta Previa", subcategory: "pregnancy", mustNotMiss: true },
                { id: "placental_abruption", name: "Placental Abruption", subcategory: "pregnancy", mustNotMiss: true },
                { id: "preterm_labor", name: "Preterm Labor", subcategory: "pregnancy" },
                { id: "postpartum_hemorrhage", name: "Postpartum Hemorrhage", subcategory: "pregnancy", mustNotMiss: true },
                { id: "chorioamnionitis", name: "Chorioamnionitis", subcategory: "pregnancy" },
                { id: "amniotic_fluid_embolism", name: "Amniotic Fluid Embolism", subcategory: "pregnancy", mustNotMiss: true },
                
                // Gynecologic Infections (6)
                { id: "pid_ob", name: "Pelvic Inflammatory Disease", subcategory: "gyn_infection" },
                { id: "toa", name: "Tubo-Ovarian Abscess", subcategory: "gyn_infection", mustNotMiss: true },
                { id: "vulvovaginitis", name: "Vulvovaginitis", subcategory: "gyn_infection" },
                { id: "bacterial_vaginosis", name: "Bacterial Vaginosis", subcategory: "gyn_infection" },
                { id: "cervicitis", name: "Cervicitis", subcategory: "gyn_infection" },
                { id: "bartholin_abscess", name: "Bartholin Abscess", subcategory: "gyn_infection" },
                
                // Abnormal Uterine Bleeding (5)
                { id: "abnormal_uterine_bleeding", name: "Abnormal Uterine Bleeding", subcategory: "bleeding" },
                { id: "menorrhagia", name: "Menorrhagia", subcategory: "bleeding" },
                { id: "postmenopausal_bleeding", name: "Postmenopausal Bleeding", subcategory: "bleeding" },
                { id: "dysfunctional_uterine_bleeding", name: "Dysfunctional Uterine Bleeding", subcategory: "bleeding" },
                { id: "breakthrough_bleeding", name: "Breakthrough Bleeding", subcategory: "bleeding" },
                
                // Gynecologic Mass/Cancer (8)
                { id: "ovarian_cyst_ob", name: "Ovarian Cyst", subcategory: "gyn_mass" },
                { id: "ovarian_torsion_ob", name: "Ovarian Torsion", subcategory: "gyn_mass", mustNotMiss: true },
                { id: "ovarian_cancer", name: "Ovarian Cancer", subcategory: "gyn_mass" },
                { id: "uterine_fibroids_ob", name: "Uterine Fibroids", subcategory: "gyn_mass" },
                { id: "endometrial_cancer", name: "Endometrial Cancer", subcategory: "gyn_mass" },
                { id: "cervical_cancer", name: "Cervical Cancer", subcategory: "gyn_mass" },
                { id: "endometriosis_ob", name: "Endometriosis", subcategory: "gyn_mass" },
                { id: "adenomyosis", name: "Adenomyosis", subcategory: "gyn_mass" },
                
                // Other Gyn (7)
                { id: "pcos", name: "Polycystic Ovary Syndrome (PCOS)", subcategory: "other_gyn" },
                { id: "menopause", name: "Menopause", subcategory: "other_gyn" },
                { id: "primary_amenorrhea", name: "Primary Amenorrhea", subcategory: "other_gyn" },
                { id: "secondary_amenorrhea", name: "Secondary Amenorrhea", subcategory: "other_gyn" },
                { id: "dysmenorrhea", name: "Dysmenorrhea", subcategory: "other_gyn" },
                { id: "premenstrual_syndrome", name: "Premenstrual Syndrome (PMS)", subcategory: "other_gyn" },
                { id: "pelvic_organ_prolapse", name: "Pelvic Organ Prolapse", subcategory: "other_gyn" },
            ]
        },

        // ========== TRAUMA (30 diagnoses) ==========
        trauma: {
            name: "🚑 Trauma",
            diagnoses: [
                // Head Trauma (7)
                { id: "concussion", name: "Concussion", subcategory: "head" },
                { id: "tbi_mild", name: "Mild Traumatic Brain Injury", subcategory: "head" },
                { id: "tbi_moderate", name: "Moderate Traumatic Brain Injury", subcategory: "head", mustNotMiss: true },
                { id: "tbi_severe", name: "Severe Traumatic Brain Injury", subcategory: "head", mustNotMiss: true },
                { id: "subdural_traumatic", name: "Traumatic Subdural Hematoma", subcategory: "head", mustNotMiss: true },
                { id: "epidural_traumatic", name: "Traumatic Epidural Hematoma", subcategory: "head", mustNotMiss: true },
                { id: "skull_fracture", name: "Skull Fracture", subcategory: "head" },
                
                // Spine Trauma (6)
                { id: "cervical_spine_injury", name: "Cervical Spine Injury", subcategory: "spine_trauma", mustNotMiss: true },
                { id: "thoracic_spine_injury", name: "Thoracic Spine Injury", subcategory: "spine_trauma" },
                { id: "lumbar_spine_injury", name: "Lumbar Spine Injury", subcategory: "spine_trauma" },
                { id: "spinal_cord_injury", name: "Spinal Cord Injury", subcategory: "spine_trauma", mustNotMiss: true },
                { id: "sciwora", name: "SCIWORA", subcategory: "spine_trauma" },
                { id: "spinal_shock", name: "Spinal Shock", subcategory: "spine_trauma" },
                
                // Chest Trauma (7)
                { id: "rib_fracture_trauma", name: "Rib Fracture", subcategory: "chest_trauma" },
                { id: "flail_chest", name: "Flail Chest", subcategory: "chest_trauma", mustNotMiss: true },
                { id: "pneumothorax_traumatic", name: "Traumatic Pneumothorax", subcategory: "chest_trauma" },
                { id: "hemothorax_traumatic", name: "Traumatic Hemothorax", subcategory: "chest_trauma", mustNotMiss: true },
                { id: "pulmonary_contusion_trauma", name: "Pulmonary Contusion", subcategory: "chest_trauma" },
                { id: "cardiac_contusion", name: "Cardiac Contusion", subcategory: "chest_trauma" },
                { id: "aortic_injury", name: "Traumatic Aortic Injury", subcategory: "chest_trauma", mustNotMiss: true },
                
                // Abdominal Trauma (6)
                { id: "splenic_laceration", name: "Splenic Laceration", subcategory: "abdominal_trauma", mustNotMiss: true },
                { id: "liver_laceration", name: "Liver Laceration", subcategory: "abdominal_trauma", mustNotMiss: true },
                { id: "bowel_injury", name: "Bowel Injury", subcategory: "abdominal_trauma", mustNotMiss: true },
                { id: "kidney_injury", name: "Kidney Injury", subcategory: "abdominal_trauma" },
                { id: "bladder_injury", name: "Bladder Injury", subcategory: "abdominal_trauma" },
                { id: "mesenteric_injury", name: "Mesenteric Injury", subcategory: "abdominal_trauma", mustNotMiss: true },
                
                // Extremity Trauma (4)
                { id: "open_fracture", name: "Open Fracture", subcategory: "extremity_trauma", mustNotMiss: true },
                { id: "dislocation", name: "Joint Dislocation", subcategory: "extremity_trauma" },
                { id: "crush_injury", name: "Crush Injury", subcategory: "extremity_trauma", mustNotMiss: true },
                { id: "traumatic_amputation", name: "Traumatic Amputation", subcategory: "extremity_trauma", mustNotMiss: true },
            ]
        },

        // ========== OPHTHALMOLOGY/ENT (25 diagnoses) ==========
        ophthalmology_ent: {
            name: "👁️ Ophthalmology/ENT",
            diagnoses: [
                // Eye Emergencies (10)
                { id: "acute_angle_closure", name: "Acute Angle-Closure Glaucoma", subcategory: "eye", mustNotMiss: true },
                { id: "open_angle_glaucoma", name: "Open-Angle Glaucoma", subcategory: "eye" },
                { id: "retinal_detachment", name: "Retinal Detachment", subcategory: "eye", mustNotMiss: true },
                { id: "central_retinal_artery", name: "Central Retinal Artery Occlusion", subcategory: "eye", mustNotMiss: true },
                { id: "orbital_cellulitis", name: "Orbital Cellulitis", subcategory: "eye", mustNotMiss: true },
                { id: "corneal_ulcer", name: "Corneal Ulcer", subcategory: "eye" },
                { id: "uveitis", name: "Uveitis", subcategory: "eye" },
                { id: "conjunctivitis", name: "Conjunctivitis", subcategory: "eye" },
                { id: "corneal_abrasion", name: "Corneal Abrasion", subcategory: "eye" },
                { id: "hyphema", name: "Hyphema", subcategory: "eye" },
                
                // ENT (15)
                { id: "peritonsillar_abscess", name: "Peritonsillar Abscess", subcategory: "ent", mustNotMiss: true },
                { id: "retropharyngeal_abscess", name: "Retropharyngeal Abscess", subcategory: "ent", mustNotMiss: true },
                { id: "ludwigs_angina", name: "Ludwig's Angina", subcategory: "ent", mustNotMiss: true },
                { id: "acute_otitis_media", name: "Acute Otitis Media", subcategory: "ent" },
                { id: "otitis_externa", name: "Otitis Externa", subcategory: "ent" },
                { id: "mastoiditis", name: "Mastoiditis", subcategory: "ent", mustNotMiss: true },
                { id: "sinusitis_acute", name: "Acute Sinusitis", subcategory: "ent" },
                { id: "sinusitis_chronic", name: "Chronic Sinusitis", subcategory: "ent" },
                { id: "epistaxis", name: "Epistaxis (Nosebleed)", subcategory: "ent" },
                { id: "pharyngitis", name: "Pharyngitis", subcategory: "ent" },
                { id: "strep_throat", name: "Streptococcal Pharyngitis", subcategory: "ent" },
                { id: "tonsillitis", name: "Tonsillitis", subcategory: "ent" },
                { id: "hearing_loss_sudden", name: "Sudden Sensorineural Hearing Loss", subcategory: "ent", mustNotMiss: true },
                { id: "allergic_rhinitis", name: "Allergic Rhinitis", subcategory: "ent" },
                { id: "nasal_polyps", name: "Nasal Polyps", subcategory: "ent" },
            ]
        },

        // ========== PEDIATRICS (45 diagnoses) ==========
        pediatrics: {
            name: "👶 Pediatrics",
            diagnoses: [
                // Respiratory (10)
                { id: "bronchiolitis_peds", name: "Bronchiolitis", subcategory: "respiratory_peds" },
                { id: "croup_peds", name: "Croup", subcategory: "respiratory_peds" },
                { id: "rsv_peds", name: "RSV Infection", subcategory: "respiratory_peds" },
                { id: "pertussis_peds", name: "Pertussis (Whooping Cough)", subcategory: "respiratory_peds" },
                { id: "epiglottitis_peds", name: "Epiglottitis", subcategory: "respiratory_peds", mustNotMiss: true },
                { id: "foreign_body_peds", name: "Foreign Body Aspiration", subcategory: "respiratory_peds", mustNotMiss: true },
                { id: "pneumonia_peds", name: "Pediatric Pneumonia", subcategory: "respiratory_peds" },
                { id: "asthma_peds", name: "Pediatric Asthma", subcategory: "respiratory_peds" },
                { id: "reactive_airway", name: "Reactive Airway Disease", subcategory: "respiratory_peds" },
                { id: "tracheitis_bacterial", name: "Bacterial Tracheitis", subcategory: "respiratory_peds", mustNotMiss: true },
                
                // GI Peds (8)
                { id: "pyloric_stenosis", name: "Pyloric Stenosis", subcategory: "gi_peds" },
                { id: "intussusception_peds", name: "Intussusception", subcategory: "gi_peds", mustNotMiss: true },
                { id: "meckel_diverticulum", name: "Meckel's Diverticulum", subcategory: "gi_peds" },
                { id: "hirschsprung", name: "Hirschsprung Disease", subcategory: "gi_peds" },
                { id: "necrotizing_enterocolitis", name: "Necrotizing Enterocolitis (NEC)", subcategory: "gi_peds", mustNotMiss: true },
                { id: "malrotation_volvulus", name: "Malrotation with Volvulus", subcategory: "gi_peds", mustNotMiss: true },
                { id: "gastroenteritis_peds", name: "Pediatric Gastroenteritis", subcategory: "gi_peds" },
                { id: "colic", name: "Infantile Colic", subcategory: "gi_peds" },
                
                // Infectious Peds (10)
                { id: "meningitis_peds", name: "Pediatric Meningitis", subcategory: "infectious_peds", mustNotMiss: true },
                { id: "otitis_media_peds", name: "Acute Otitis Media", subcategory: "infectious_peds" },
                { id: "strep_pharyngitis_peds", name: "Strep Pharyngitis", subcategory: "infectious_peds" },
                { id: "hand_foot_mouth_peds", name: "Hand, Foot, and Mouth Disease", subcategory: "infectious_peds" },
                { id: "roseola", name: "Roseola", subcategory: "infectious_peds" },
                { id: "fifth_disease", name: "Fifth Disease (Erythema Infectiosum)", subcategory: "infectious_peds" },
                { id: "scarlet_fever", name: "Scarlet Fever", subcategory: "infectious_peds" },
                { id: "measles", name: "Measles", subcategory: "infectious_peds" },
                { id: "mumps", name: "Mumps", subcategory: "infectious_peds" },
                { id: "varicella_peds", name: "Chickenpox", subcategory: "infectious_peds" },
                
                // Cardiac Peds (5)
                { id: "kawasaki_peds", name: "Kawasaki Disease", subcategory: "cardiac_peds", mustNotMiss: true },
                { id: "myocarditis_peds", name: "Pediatric Myocarditis", subcategory: "cardiac_peds", mustNotMiss: true },
                { id: "congenital_heart", name: "Congenital Heart Disease", subcategory: "cardiac_peds" },
                { id: "rheumatic_fever", name: "Acute Rheumatic Fever", subcategory: "cardiac_peds" },
                { id: "svt_peds", name: "Pediatric SVT", subcategory: "cardiac_peds" },
                
                // Neuro Peds (7)
                { id: "febrile_seizure_peds", name: "Febrile Seizure", subcategory: "neuro_peds" },
                { id: "epilepsy_peds", name: "Pediatric Epilepsy", subcategory: "neuro_peds" },
                { id: "hydrocephalus", name: "Hydrocephalus", subcategory: "neuro_peds" },
                { id: "shaken_baby", name: "Abusive Head Trauma", subcategory: "neuro_peds", mustNotMiss: true },
                { id: "cerebral_palsy", name: "Cerebral Palsy", subcategory: "neuro_peds" },
                { id: "autism", name: "Autism Spectrum Disorder", subcategory: "neuro_peds" },
                { id: "adhd", name: "ADHD", subcategory: "neuro_peds" },
                
                // Other Peds (5)
                { id: "jaundice_neonatal", name: "Neonatal Jaundice", subcategory: "other_peds" },
                { id: "kernicterus", name: "Kernicterus", subcategory: "other_peds", mustNotMiss: true },
                { id: "failure_to_thrive", name: "Failure to Thrive", subcategory: "other_peds" },
                { id: "child_abuse", name: "Child Abuse/Non-Accidental Trauma", subcategory: "other_peds", mustNotMiss: true },
                { id: "sudden_infant_death", name: "SIDS/ALTE/BRUE", subcategory: "other_peds" },
            ]
        },

        // ========== ALLERGIC/IMMUNOLOGIC (25 diagnoses) ==========
        allergic_immunologic: {
            name: "🛡️ Allergy/Immunology",
            diagnoses: [
                // Allergic Reactions (10)
                { id: "anaphylaxis_allergy", name: "Anaphylaxis", subcategory: "allergic_reaction", mustNotMiss: true },
                { id: "anaphylactoid", name: "Anaphylactoid Reaction", subcategory: "allergic_reaction" },
                { id: "angioedema_allergy", name: "Angioedema", subcategory: "allergic_reaction", mustNotMiss: true },
                { id: "hereditary_angioedema", name: "Hereditary Angioedema", subcategory: "allergic_reaction" },
                { id: "urticaria_allergy", name: "Urticaria (Hives)", subcategory: "allergic_reaction" },
                { id: "drug_allergy", name: "Drug Allergy", subcategory: "allergic_reaction" },
                { id: "food_allergy", name: "Food Allergy", subcategory: "allergic_reaction" },
                { id: "insect_sting_allergy", name: "Insect Sting Allergy", subcategory: "allergic_reaction" },
                { id: "latex_allergy", name: "Latex Allergy", subcategory: "allergic_reaction" },
                { id: "contrast_allergy", name: "Contrast Media Reaction", subcategory: "allergic_reaction" },
                
                // Immunodeficiency (8)
                { id: "hiv_aids_immuno", name: "HIV/AIDS", subcategory: "immunodeficiency" },
                { id: "cvid", name: "Common Variable Immunodeficiency", subcategory: "immunodeficiency" },
                { id: "iga_deficiency", name: "IgA Deficiency", subcategory: "immunodeficiency" },
                { id: "scid", name: "Severe Combined Immunodeficiency", subcategory: "immunodeficiency" },
                { id: "bruton_agammaglobulinemia", name: "X-Linked Agammaglobulinemia", subcategory: "immunodeficiency" },
                { id: "complement_deficiency", name: "Complement Deficiency", subcategory: "immunodeficiency" },
                { id: "neutropenia_congenital", name: "Congenital Neutropenia", subcategory: "immunodeficiency" },
                { id: "transplant_rejection", name: "Transplant Rejection", subcategory: "immunodeficiency" },
                
                // Other (7)
                { id: "serum_sickness", name: "Serum Sickness", subcategory: "other_allergy" },
                { id: "mast_cell_activation", name: "Mast Cell Activation Syndrome", subcategory: "other_allergy" },
                { id: "eosinophilic_esophagitis_allergy", name: "Eosinophilic Esophagitis", subcategory: "other_allergy" },
                { id: "allergic_rhinitis_allergy", name: "Allergic Rhinitis", subcategory: "other_allergy" },
                { id: "asthma_allergic", name: "Allergic Asthma", subcategory: "other_allergy" },
                { id: "atopic_dermatitis_allergy", name: "Atopic Dermatitis", subcategory: "other_allergy" },
                { id: "graft_vs_host", name: "Graft-versus-Host Disease", subcategory: "other_allergy" },
            ]
        },

        // ========== ONCOLOGIC (35 diagnoses) ==========
        oncologic: {
            name: "🎗️ Oncology",
            diagnoses: [
                // Solid Tumors (20)
                { id: "lung_cancer_onc", name: "Lung Cancer", subcategory: "solid_tumor" },
                { id: "breast_cancer", name: "Breast Cancer", subcategory: "solid_tumor" },
                { id: "colon_cancer_onc", name: "Colorectal Cancer", subcategory: "solid_tumor" },
                { id: "prostate_cancer_onc", name: "Prostate Cancer", subcategory: "solid_tumor" },
                { id: "pancreatic_cancer_onc", name: "Pancreatic Cancer", subcategory: "solid_tumor" },
                { id: "gastric_cancer_onc", name: "Gastric Cancer", subcategory: "solid_tumor" },
                { id: "esophageal_cancer_onc", name: "Esophageal Cancer", subcategory: "solid_tumor" },
                { id: "hepatocellular_ca_onc", name: "Hepatocellular Carcinoma", subcategory: "solid_tumor" },
                { id: "renal_cell_ca", name: "Renal Cell Carcinoma", subcategory: "solid_tumor" },
                { id: "bladder_cancer_onc", name: "Bladder Cancer", subcategory: "solid_tumor" },
                { id: "ovarian_cancer_onc", name: "Ovarian Cancer", subcategory: "solid_tumor" },
                { id: "cervical_cancer_onc", name: "Cervical Cancer", subcategory: "solid_tumor" },
                { id: "endometrial_cancer_onc", name: "Endometrial Cancer", subcategory: "solid_tumor" },
                { id: "testicular_cancer_onc", name: "Testicular Cancer", subcategory: "solid_tumor" },
                { id: "thyroid_cancer_onc", name: "Thyroid Cancer", subcategory: "solid_tumor" },
                { id: "melanoma_onc", name: "Melanoma", subcategory: "solid_tumor" },
                { id: "head_neck_cancer", name: "Head and Neck Cancer", subcategory: "solid_tumor" },
                { id: "brain_tumor_onc", name: "Primary Brain Tumor", subcategory: "solid_tumor" },
                { id: "sarcoma", name: "Sarcoma", subcategory: "solid_tumor" },
                { id: "unknown_primary", name: "Cancer of Unknown Primary", subcategory: "solid_tumor" },
                
                // Metastatic (7)
                { id: "brain_metastases", name: "Brain Metastases", subcategory: "metastatic" },
                { id: "bone_metastases", name: "Bone Metastases", subcategory: "metastatic" },
                { id: "liver_metastases", name: "Liver Metastases", subcategory: "metastatic" },
                { id: "lung_metastases", name: "Lung Metastases", subcategory: "metastatic" },
                { id: "malignant_ascites", name: "Malignant Ascites", subcategory: "metastatic" },
                { id: "leptomeningeal_mets", name: "Leptomeningeal Carcinomatosis", subcategory: "metastatic" },
                { id: "peritoneal_carcinomatosis", name: "Peritoneal Carcinomatosis", subcategory: "metastatic" },
                
                // Paraneoplastic (8)
                { id: "paraneoplastic_syndrome", name: "Paraneoplastic Syndrome", subcategory: "paraneoplastic" },
                { id: "siadh_onc", name: "SIADH (Malignancy)", subcategory: "paraneoplastic" },
                { id: "hypercalcemia_onc", name: "Hypercalcemia of Malignancy", subcategory: "paraneoplastic" },
                { id: "cushing_ectopic", name: "Ectopic Cushing Syndrome", subcategory: "paraneoplastic" },
                { id: "lambert_eaton_onc", name: "Lambert-Eaton Syndrome", subcategory: "paraneoplastic" },
                { id: "limbic_encephalitis", name: "Paraneoplastic Limbic Encephalitis", subcategory: "paraneoplastic" },
                { id: "trousseau_syndrome", name: "Trousseau Syndrome", subcategory: "paraneoplastic" },
                { id: "dermatomyositis_onc", name: "Dermatomyositis (Paraneoplastic)", subcategory: "paraneoplastic" },
            ]
        },

        // ========== GERIATRICS (20 diagnoses) ==========
        geriatrics: {
            name: "👴 Geriatrics",
            diagnoses: [
                { id: "delirium_geriatric", name: "Delirium (Elderly)", subcategory: "geriatric" },
                { id: "falls_elderly", name: "Falls in Elderly", subcategory: "geriatric" },
                { id: "polypharmacy", name: "Polypharmacy Effects", subcategory: "geriatric" },
                { id: "frailty", name: "Frailty Syndrome", subcategory: "geriatric" },
                { id: "pressure_ulcer", name: "Pressure Ulcer/Decubitus", subcategory: "geriatric" },
                { id: "urinary_incontinence", name: "Urinary Incontinence", subcategory: "geriatric" },
                { id: "fecal_incontinence", name: "Fecal Incontinence", subcategory: "geriatric" },
                { id: "dementia_geriatric", name: "Dementia", subcategory: "geriatric" },
                { id: "elder_abuse", name: "Elder Abuse", subcategory: "geriatric", mustNotMiss: true },
                { id: "failure_to_thrive_elderly", name: "Failure to Thrive (Elderly)", subcategory: "geriatric" },
                { id: "osteoporotic_fracture", name: "Osteoporotic Fracture", subcategory: "geriatric" },
                { id: "orthostatic_hypotension_ger", name: "Orthostatic Hypotension", subcategory: "geriatric" },
                { id: "sarcopenia", name: "Sarcopenia", subcategory: "geriatric" },
                { id: "malnutrition_elderly", name: "Malnutrition (Elderly)", subcategory: "geriatric" },
                { id: "sundowning", name: "Sundowning", subcategory: "geriatric" },
                { id: "behavioral_psych_dementia", name: "Behavioral Symptoms of Dementia", subcategory: "geriatric" },
                { id: "caregiver_burnout", name: "Caregiver Burnout", subcategory: "geriatric" },
                { id: "hospice_consideration", name: "End-of-Life/Hospice Consideration", subcategory: "geriatric" },
                { id: "medication_nonadherence", name: "Medication Non-Adherence", subcategory: "geriatric" },
                { id: "functional_decline", name: "Functional Decline", subcategory: "geriatric" },
            ]
        },

        // ========== PALLIATIVE/PAIN (15 diagnoses) ==========
        palliative_pain: {
            name: "💊 Pain/Palliative",
            diagnoses: [
                { id: "chronic_pain_syndrome", name: "Chronic Pain Syndrome", subcategory: "pain" },
                { id: "neuropathic_pain", name: "Neuropathic Pain", subcategory: "pain" },
                { id: "cancer_pain", name: "Cancer Pain", subcategory: "pain" },
                { id: "post_surgical_pain", name: "Post-Surgical Pain", subcategory: "pain" },
                { id: "myofascial_pain", name: "Myofascial Pain Syndrome", subcategory: "pain" },
                { id: "phantom_limb_pain", name: "Phantom Limb Pain", subcategory: "pain" },
                { id: "opioid_induced_hyperalgesia", name: "Opioid-Induced Hyperalgesia", subcategory: "pain" },
                { id: "terminal_dyspnea", name: "Terminal Dyspnea", subcategory: "palliative" },
                { id: "terminal_delirium", name: "Terminal Delirium", subcategory: "palliative" },
                { id: "death_rattle", name: "Death Rattle", subcategory: "palliative" },
                { id: "intractable_nausea", name: "Intractable Nausea/Vomiting", subcategory: "palliative" },
                { id: "malignant_bowel_obstruction", name: "Malignant Bowel Obstruction", subcategory: "palliative" },
                { id: "cachexia", name: "Cancer Cachexia", subcategory: "palliative" },
                { id: "existential_distress", name: "Existential Distress", subcategory: "palliative" },
                { id: "refractory_symptoms", name: "Refractory Symptoms", subcategory: "palliative" },
            ]
        },
    };

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    
    // Get all diagnoses as flat array
    function getAllDiagnoses() {
        const all = [];
        Object.keys(DIAGNOSIS_DATABASE).forEach(category => {
            DIAGNOSIS_DATABASE[category].diagnoses.forEach(dx => {
                all.push({
                    ...dx,
                    category: category,
                    categoryName: DIAGNOSIS_DATABASE[category].name
                });
            });
        });
        return all;
    }
    
    // Fuzzy search function
    function searchDiagnoses(query) {
        if (!query || query.length < 2) return [];
        
        const normalizedQuery = query.toLowerCase().trim();
        const allDx = getAllDiagnoses();
        
        // Score each diagnosis
        const scored = allDx.map(dx => {
            const name = dx.name.toLowerCase();
            let score = 0;
            
            // Exact match
            if (name === normalizedQuery) score = 100;
            // Starts with query
            else if (name.startsWith(normalizedQuery)) score = 80;
            // Contains query as whole word
            else if (name.includes(' ' + normalizedQuery) || name.includes(normalizedQuery + ' ')) score = 60;
            // Contains query
            else if (name.includes(normalizedQuery)) score = 40;
            // Fuzzy match (check if all chars present in order)
            else {
                let queryIdx = 0;
                for (let i = 0; i < name.length && queryIdx < normalizedQuery.length; i++) {
                    if (name[i] === normalizedQuery[queryIdx]) queryIdx++;
                }
                if (queryIdx === normalizedQuery.length) score = 20;
            }
            
            // Check abbreviations/synonyms
            const synonyms = getSynonyms(dx.id);
            synonyms.forEach(syn => {
                if (syn.toLowerCase() === normalizedQuery) score = Math.max(score, 90);
                else if (syn.toLowerCase().startsWith(normalizedQuery)) score = Math.max(score, 70);
                else if (syn.toLowerCase().includes(normalizedQuery)) score = Math.max(score, 50);
            });
            
            return { ...dx, score };
        });
        
        // Filter and sort by score
        return scored
            .filter(dx => dx.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 25); // Top 25 results
    }
    
    // Common synonyms/abbreviations mapping
    function getSynonyms(dxId) {
        const synonymMap = {
            // Cardiovascular
            'stemi': ['STEMI', 'ST elevation MI', 'heart attack', 'MI', 'myocardial infarction', 'acute MI', 'AMI', 'acute myocardial infarction'],
            'nstemi': ['NSTEMI', 'non-STEMI', 'heart attack', 'myocardial infarction', 'MI', 'acute MI'],
            'acute_mi': ['MI', 'myocardial infarction', 'heart attack', 'AMI', 'acute myocardial infarction', 'STEMI', 'NSTEMI'],
            'pe': ['PE', 'pulmonary embolus', 'blood clot lung'],
            'pulmonary_embolism': ['PE', 'pulmonary embolus', 'blood clot lung'],
            'dvt': ['DVT', 'deep vein thrombosis', 'blood clot leg', 'leg clot'],
            'afib': ['AFib', 'a-fib', 'atrial fib', 'irregular heartbeat'],
            'chf_acute': ['CHF', 'heart failure', 'congestive heart failure'],
            'cardiac_tamponade': ['tamponade', 'beck triad'],
            'aortic_dissection': ['dissection', 'tearing chest pain'],
            
            // Pulmonary
            'copd_exacerbation': ['COPD', 'COPD flare', 'emphysema'],
            'asthma_acute': ['asthma attack', 'asthma exacerbation', 'wheezing'],
            'pneumonia_bacterial': ['pneumonia', 'PNA', 'CAP', 'lung infection'],
            'ards': ['ARDS', 'acute respiratory distress'],
            'tension_pneumothorax': ['tension pneumo', 'collapsed lung'],
            
            // GI
            'gerd': ['GERD', 'acid reflux', 'heartburn', 'reflux'],
            'sbo': ['SBO', 'small bowel obstruction', 'bowel obstruction'],
            'lbo': ['LBO', 'large bowel obstruction'],
            'gi_bleed_upper': ['GI bleed', 'upper GI bleed', 'UGIB', 'hematemesis'],
            'gi_bleed_lower': ['lower GI bleed', 'LGIB', 'hematochezia'],
            'appendicitis': ['appy', 'appendix'],
            'cholecystitis_acute': ['gallbladder attack', 'cholecystitis'],
            'pancreatitis_acute': ['pancreatitis'],
            'cdiff': ['C diff', 'C. diff', 'clostridium difficile'],
            
            // Renal
            'aki_prerenal': ['AKI', 'acute kidney injury', 'kidney failure', 'prerenal'],
            'uti': ['UTI', 'urinary tract infection', 'bladder infection'],
            'cystitis': ['UTI', 'bladder infection'],
            'pyelonephritis': ['pyelo', 'kidney infection'],
            'kidney_stone': ['renal colic', 'nephrolithiasis', 'stone'],
            'hyperkalemia': ['high potassium', 'high K'],
            'hyponatremia': ['low sodium', 'low Na'],
            
            // Neuro
            'stroke_ischemic': ['stroke', 'CVA', 'ischemic stroke', 'brain attack'],
            'tia': ['TIA', 'mini stroke', 'transient ischemic'],
            'sah': ['SAH', 'subarachnoid', 'worst headache'],
            'meningitis_bacterial': ['meningitis', 'bacterial meningitis'],
            'status_epilepticus': ['status', 'continuous seizure'],
            'cauda_equina': ['cauda equina', 'saddle anesthesia'],
            'guillain_barre': ['GBS', 'Guillain-Barre'],
            
            // Infectious
            'sepsis': ['sepsis', 'septicemia', 'blood infection'],
            'septic_shock': ['septic shock'],
            'necrotizing_fasciitis': ['nec fasc', 'flesh eating bacteria'],
            'cellulitis': ['skin infection'],
            
            // Endocrine
            'dka': ['DKA', 'diabetic ketoacidosis'],
            'hhs': ['HHS', 'hyperosmolar', 'HONK'],
            'hypoglycemia': ['low blood sugar', 'low glucose'],
            'thyroid_storm': ['thyrotoxicosis', 'thyroid storm'],
            'adrenal_crisis': ['addisonian crisis', 'adrenal crisis'],
            
            // Heme/Onc
            'dic': ['DIC', 'disseminated intravascular'],
            'ttp': ['TTP', 'thrombotic thrombocytopenic'],
            'hit': ['HIT', 'heparin induced thrombocytopenia'],
            'tumor_lysis': ['TLS', 'tumor lysis'],
            'neutropenic_fever': ['febrile neutropenia'],
            
            // Rheum
            'sle': ['lupus', 'SLE', 'systemic lupus'],
            'gout': ['gout attack', 'gouty arthritis'],
            'giant_cell_arteritis': ['temporal arteritis', 'GCA'],
            'pmr': ['PMR', 'polymyalgia'],
            
            // Psych
            'major_depression': ['depression', 'MDD'],
            'panic_attack': ['panic', 'anxiety attack'],
            'alcohol_withdrawal': ['AWS', 'withdrawal'],
            'delirium_tremens': ['DTs', 'DT'],
            
            // Tox
            'acetaminophen_overdose': ['tylenol overdose', 'APAP', 'paracetamol'],
            'opioid_overdose': ['OD', 'heroin overdose', 'fentanyl overdose'],
            'serotonin_syndrome': ['serotonin syndrome', 'SS'],
            'nms': ['NMS', 'neuroleptic malignant'],
            'carbon_monoxide': ['CO poisoning'],
            
            // OB/GYN
            'ectopic_pregnancy': ['ectopic', 'tubal pregnancy'],
            'preeclampsia': ['pre-eclampsia', 'toxemia'],
            'hellp': ['HELLP syndrome'],
            'placental_abruption': ['abruption'],
            
            // Trauma
            'tbi_severe': ['TBI', 'traumatic brain injury'],
            
            // Ophth/ENT
            'acute_angle_closure': ['acute glaucoma', 'angle closure'],
            'peritonsillar_abscess': ['PTA', 'quinsy'],
        };
        return synonymMap[dxId] || [];
    }
    
    // Get diagnoses by category
    function getDiagnosesByCategory(category) {
        if (DIAGNOSIS_DATABASE[category]) {
            return DIAGNOSIS_DATABASE[category].diagnoses.map(dx => ({
                ...dx,
                category: category,
                categoryName: DIAGNOSIS_DATABASE[category].name
            }));
        }
        return [];
    }
    
    // Get all categories
    function getCategories() {
        return Object.keys(DIAGNOSIS_DATABASE).map(key => ({
            id: key,
            name: DIAGNOSIS_DATABASE[key].name,
            count: DIAGNOSIS_DATABASE[key].diagnoses.length
        }));
    }
    
    // Get must-not-miss diagnoses
    function getMustNotMissDiagnoses() {
        return getAllDiagnoses().filter(dx => dx.mustNotMiss);
    }
    
    // Find matching diagnosis
    function findMatchingDiagnosis(name) {
        const allDx = getAllDiagnoses();
        const normalized = name.toLowerCase().trim();
        
        // Exact name match
        let match = allDx.find(d => d.name.toLowerCase() === normalized);
        if (match) return match;
        
        // ID match
        match = allDx.find(d => d.id === normalized);
        if (match) return match;
        
        // Search match (high confidence)
        const results = searchDiagnoses(name);
        if (results.length > 0 && results[0].score >= 80) {
            return results[0];
        }
        
        return null;
    }
    
    // ============================================================
    // SCORING SYSTEM
    // ============================================================
    
    function scoreDifferential(studentDifferential, correctDiagnosis, mustNotMiss = [], reasonableDifferentials = []) {
        let totalScore = 0;
        let maxScore = 100;
        let feedback = [];
        
        const allDx = getAllDiagnoses();
        const correctDx = allDx.find(d => 
            d.id === correctDiagnosis || 
            d.name.toLowerCase() === correctDiagnosis.toLowerCase()
        );
        
        studentDifferential.forEach((studentDx, rank) => {
            const matchedDx = findMatchingDiagnosis(studentDx.name);
            
            if (!matchedDx) {
                // Custom entry - give partial credit
                feedback.push({
                    diagnosis: studentDx.name,
                    rank: rank + 1,
                    score: 15,
                    tier: 'custom',
                    message: 'Custom entry - partial credit for clinical thinking'
                });
                totalScore += 15;
                return;
            }
            
            let score = 0;
            let tier = '';
            let message = '';
            
            // Tier 1: Correct diagnosis
            if (correctDx && (matchedDx.id === correctDx.id || matchedDx.name.toLowerCase() === correctDx.name.toLowerCase())) {
                score = rank === 0 ? 110 : 100; // Bonus for #1 ranking
                tier = 'correct';
                message = rank === 0 ? '✓ Correct diagnosis ranked #1! (+10 bonus)' : '✓ Correct diagnosis!';
            }
            // Tier 2: Must-not-miss (from case or inherently dangerous)
            else if (mustNotMiss.includes(matchedDx.id) || matchedDx.mustNotMiss) {
                score = 90;
                tier = 'must_not_miss';
                message = '⚠️ Must-not-miss diagnosis - excellent safety awareness!';
                if (rank > 3) {
                    score -= 15;
                    message += ' (Consider ranking higher)';
                }
            }
            // Tier 3: Same subcategory as correct
            else if (correctDx && matchedDx.subcategory === correctDx.subcategory) {
                score = 75;
                tier = 'same_subcategory';
                message = '○ Same diagnostic family - good reasoning';
            }
            // Tier 4: Same organ system
            else if (correctDx && matchedDx.category === correctDx.category) {
                score = 60;
                tier = 'same_category';
                message = '○ Same organ system - reasonable consideration';
            }
            // Tier 5: Listed as reasonable for this case
            else if (reasonableDifferentials.includes(matchedDx.id)) {
                score = 50;
                tier = 'reasonable';
                message = '○ Reasonable differential for this presentation';
            }
            // Tier 6: Any valid diagnosis (plausible)
            else {
                score = 30;
                tier = 'plausible';
                message = '○ Valid diagnosis, less likely for this presentation';
            }
            
            totalScore += score;
            feedback.push({
                diagnosis: matchedDx.name,
                rank: rank + 1,
                score: score,
                tier: tier,
                message: message,
                category: matchedDx.categoryName
            });
        });
        
        // Check for missed must-not-miss diagnoses
        const studentDxIds = studentDifferential.map(d => {
            const match = findMatchingDiagnosis(d.name);
            return match ? match.id : null;
        }).filter(Boolean);
        
        const missedMustNotMiss = mustNotMiss.filter(id => !studentDxIds.includes(id));
        if (missedMustNotMiss.length > 0) {
            const missedNames = missedMustNotMiss.map(id => {
                const dx = allDx.find(d => d.id === id);
                return dx ? dx.name : id;
            });
            
            feedback.push({
                diagnosis: 'Missed Must-Not-Miss',
                score: -15 * missedMustNotMiss.length,
                tier: 'penalty',
                message: `⚠️ Consider adding: ${missedNames.join(', ')}`
            });
            totalScore -= 15 * missedMustNotMiss.length;
        }
        
        return {
            score: Math.max(0, Math.min(totalScore, maxScore * 2)),
            percentage: Math.round((totalScore / maxScore) * 100),
            feedback: feedback,
            missedMustNotMiss: missedMustNotMiss
        };
    }
    
    // ============================================================
    // PUBLIC API
    // ============================================================
    
    return {
        getAllDiagnoses,
        searchDiagnoses,
        getDiagnosesByCategory,
        getCategories,
        getMustNotMissDiagnoses,
        scoreDifferential,
        findMatchingDiagnosis,
        DIAGNOSIS_DATABASE
    };
    
})();

// Make globally available
window.ReasonDxDifferentialSystem = ReasonDxDifferentialSystem;

// Log diagnosis count
(function() {
    const count = ReasonDxDifferentialSystem.getAllDiagnoses().length;
    const mustNotMiss = ReasonDxDifferentialSystem.getMustNotMissDiagnoses().length;
    console.log(`ReasonDx Differential System loaded: ${count} diagnoses (${mustNotMiss} must-not-miss)`);
})();
