/**
 * CROSS-PLATFORM LEARNING PATHWAY MAP
 * Dx Learning Ecosystem - Inter-Platform Recommendations
 * 
 * Maps topics across all 3 platforms (ReasonDx, MechanismDx, CoachDx)
 * Provides intelligent recommendations based on completed content
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 */

const CROSS_PLATFORM_MAP = {

// ============================================================================
// CARDIOVASCULAR TOPIC CLUSTER
// ============================================================================
"cardiovascular": {
    topicName: "Cardiovascular",
    icon: "❤️",
    
    // Cases in each platform
    reasondx: [
        { id: "chest-pain", title: "Chest Pain Evaluation", difficulty: "intermediate" },
        { id: "stemi", title: "STEMI Recognition", difficulty: "intermediate" },
        { id: "heart-failure", title: "Acute Heart Failure", difficulty: "intermediate" },
        { id: "afib", title: "Atrial Fibrillation", difficulty: "intermediate" },
        { id: "syncope", title: "Syncope Workup", difficulty: "advanced" }
    ],
    
    mechanismdx: [
        { id: "acs-module", file: "acs-module.html", title: "ACS Pathophysiology", concepts: ["plaque rupture", "troponin kinetics", "STEMI vs NSTEMI"] },
        { id: "hf-module", file: "hf-module.html", title: "Heart Failure Mechanisms", concepts: ["preload/afterload", "EF types", "neurohormonal"] },
        { id: "afib-module", file: "afib-module.html", title: "AFib Mechanisms", concepts: ["reentry", "rate vs rhythm", "stroke risk"] },
        { id: "ecg-module", file: "ecg-module.html", title: "ECG Interpretation", concepts: ["STEMI criteria", "arrhythmias", "axis"] }
    ],
    
    coachdx: [
        { id: "chest-pain-acs", title: "Chest Pain - ACS", coach: "Dr. Sarah Chen" },
        { id: "chest-pain-acs-b", title: "Atypical ACS (Diabetic)", coach: "Dr. Sarah Chen" },
        { id: "atrial-fibrillation", title: "New Onset AFib", coach: "Dr. Sarah Chen" },
        { id: "acute-dyspnea-chf", title: "Acute CHF", coach: "Dr. Sarah Chen" },
        { id: "syncope", title: "Syncope Evaluation", coach: "Dr. Sarah Chen" },
        { id: "stemi", title: "STEMI Management", coach: "Dr. Sarah Chen" }
    ],
    
    // Learning pathway - suggested order
    learningPath: {
        beginner: ["mechanismdx:acs-module", "reasondx:chest-pain", "coachdx:chest-pain-acs"],
        intermediate: ["mechanismdx:hf-module", "reasondx:heart-failure", "coachdx:acute-dyspnea-chf", "coachdx:atrial-fibrillation"],
        advanced: ["reasondx:syncope", "coachdx:syncope", "coachdx:stemi"]
    },
    
    // Open-access guidelines
    guidelines: [
        { name: "AHA/ACC Chest Pain Guidelines 2021", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001029" },
        { name: "AHA/ACC HF Guidelines 2022", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063" },
        { name: "AHA/ACC/HRS AFib Guidelines 2023", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193" }
    ]
},

// ============================================================================
// PULMONARY TOPIC CLUSTER
// ============================================================================
"pulmonary": {
    topicName: "Pulmonary",
    icon: "🫁",
    
    reasondx: [
        { id: "dyspnea", title: "Acute Dyspnea", difficulty: "intermediate" },
        { id: "copd", title: "COPD Exacerbation", difficulty: "intermediate" },
        { id: "asthma", title: "Asthma Exacerbation", difficulty: "intermediate" },
        { id: "pe", title: "Pulmonary Embolism", difficulty: "advanced" }
    ],
    
    mechanismdx: [
        { id: "pe-module", file: "pe-module.html", title: "PE Pathophysiology", concepts: ["Virchow triad", "V/Q mismatch", "Wells score"] },
        { id: "abg-module", file: "acid-base-module.html", title: "ABG Interpretation", concepts: ["pH compensation", "anion gap", "respiratory vs metabolic"] },
        { id: "copd-module", file: "copd-module.html", title: "Obstructive Lung Disease", concepts: ["FEV1/FVC", "air trapping", "exacerbation triggers"] }
    ],
    
    coachdx: [
        { id: "acute-dyspnea-pe", title: "PE Presentation", coach: "Dr. Sarah Chen" },
        { id: "copd-exacerbation", title: "COPD Exacerbation", coach: "Dr. Sarah Chen" },
        { id: "asthma-exacerbation", title: "Severe Asthma", coach: "Dr. Sarah Chen" }
    ],
    
    // RT-specific cases
    coachdx_rt: [
        { id: "rt-copd-bipap", title: "BiPAP Management", coach: "Jennifer Park, RRT" },
        { id: "rt-asthma-failure", title: "Asthma Failure", coach: "Jennifer Park, RRT" },
        { id: "rt-ards-ventilator", title: "ARDS Ventilation", coach: "Jennifer Park, RRT" },
        { id: "rt-abg-complex", title: "Complex ABG", coach: "Jennifer Park, RRT" }
    ],
    
    learningPath: {
        beginner: ["mechanismdx:abg-module", "reasondx:dyspnea", "coachdx:copd-exacerbation"],
        intermediate: ["mechanismdx:pe-module", "reasondx:pe", "coachdx:acute-dyspnea-pe"],
        advanced: ["coachdx_rt:rt-ards-ventilator", "coachdx_rt:rt-abg-complex"]
    },
    
    guidelines: [
        { name: "GOLD COPD Guidelines 2024", url: "https://goldcopd.org/2024-gold-report/" },
        { name: "GINA Asthma Guidelines 2024", url: "https://ginasthma.org/2024-gina-main-report/" },
        { name: "ESC PE Guidelines 2019", url: "https://academic.oup.com/eurheartj/article/41/4/543/5556136" }
    ]
},

// ============================================================================
// INFECTIOUS DISEASE / SEPSIS TOPIC CLUSTER
// ============================================================================
"sepsis": {
    topicName: "Sepsis & Infectious Disease",
    icon: "🦠",
    
    reasondx: [
        { id: "sepsis", title: "Sepsis Recognition", difficulty: "intermediate" },
        { id: "pneumonia", title: "Community-Acquired Pneumonia", difficulty: "intermediate" },
        { id: "uti-pyelo", title: "UTI/Pyelonephritis", difficulty: "beginner" },
        { id: "meningitis", title: "Meningitis", difficulty: "advanced" }
    ],
    
    mechanismdx: [
        { id: "sepsis-module", file: "sepsis-shock-module.html", title: "Sepsis Pathophysiology", concepts: ["SIRS", "qSOFA", "lactate", "vasopressors"] },
        { id: "abx-module", file: "antibiotics-module.html", title: "Antibiotic Selection", concepts: ["empiric coverage", "de-escalation", "cultures"] }
    ],
    
    coachdx: [
        { id: "sepsis-uti", title: "Urosepsis", coach: "Dr. Sarah Chen" },
        { id: "sepsis-pneumonia", title: "Pneumonia Sepsis", coach: "Dr. Sarah Chen" },
        { id: "meningitis", title: "Meningitis", coach: "Dr. Sarah Chen" }
    ],
    
    // Nursing cases
    coachdx_nursing: [
        { id: "nursing-deteriorating-patient", title: "Deteriorating Patient", coach: "Rachel Torres, RN" },
        { id: "nursing-respiratory-decline", title: "Respiratory Decline", coach: "Rachel Torres, RN" }
    ],
    
    // EMS cases
    coachdx_ems: [
        { id: "ems-altered-mental-status", title: "Field Sepsis Recognition", coach: "Captain Mike Rodriguez" }
    ],
    
    learningPath: {
        beginner: ["mechanismdx:sepsis-module", "reasondx:uti-pyelo", "coachdx:sepsis-uti"],
        intermediate: ["reasondx:pneumonia", "coachdx:sepsis-pneumonia", "coachdx_nursing:nursing-deteriorating-patient"],
        advanced: ["reasondx:meningitis", "coachdx:meningitis"]
    },
    
    guidelines: [
        { name: "Surviving Sepsis Campaign 2021", url: "https://www.ccmjournal.org/article/S0090-3493(21)00003-1/fulltext" },
        { name: "IDSA/ATS CAP Guidelines 2019", url: "https://www.atsjournals.org/doi/10.1164/rccm.201908-1581ST" }
    ]
},

// ============================================================================
// ENDOCRINE / METABOLIC TOPIC CLUSTER
// ============================================================================
"endocrine": {
    topicName: "Endocrine & Metabolic",
    icon: "🔬",
    
    reasondx: [
        { id: "dka", title: "Diabetic Ketoacidosis", difficulty: "intermediate" },
        { id: "hhs", title: "Hyperosmolar Hyperglycemic State", difficulty: "advanced" },
        { id: "hypoglycemia", title: "Hypoglycemia", difficulty: "beginner" },
        { id: "thyroid", title: "Thyroid Emergencies", difficulty: "advanced" }
    ],
    
    mechanismdx: [
        { id: "dka-module", file: "diabetes-dka-module.html", title: "DKA Pathophysiology", concepts: ["insulin deficiency", "anion gap", "fluid shifts"] },
        { id: "electrolyte-module", file: "electrolyte-module.html", title: "Electrolyte Disorders", concepts: ["potassium shifts", "sodium correction"] }
    ],
    
    coachdx: [
        { id: "dka", title: "DKA Management", coach: "Dr. Sarah Chen" },
        { id: "hhs", title: "HHS vs DKA", coach: "Dr. Sarah Chen" },
        { id: "thyroid-storm", title: "Thyroid Storm", coach: "Dr. Sarah Chen" },
        { id: "hyperkalemia", title: "Hyperkalemia", coach: "Dr. Sarah Chen" }
    ],
    
    // Nursing cases
    coachdx_nursing: [
        { id: "nursing-hypoglycemia", title: "Hypoglycemia Recognition", coach: "Rachel Torres, RN" },
        { id: "nursing-diabetic-foot", title: "Diabetic Foot Assessment", coach: "Rachel Torres, RN" }
    ],
    
    // EMS cases
    coachdx_ems: [
        { id: "ems-hypoglycemia", title: "Field Hypoglycemia", coach: "Captain Mike Rodriguez" }
    ],
    
    learningPath: {
        beginner: ["mechanismdx:dka-module", "coachdx_nursing:nursing-hypoglycemia", "coachdx_ems:ems-hypoglycemia"],
        intermediate: ["reasondx:dka", "coachdx:dka", "coachdx:hyperkalemia"],
        advanced: ["reasondx:hhs", "coachdx:hhs", "coachdx:thyroid-storm"]
    },
    
    guidelines: [
        { name: "ADA Standards of Care 2024", url: "https://diabetesjournals.org/care/issue/47/Supplement_1" },
        { name: "ATA Thyroid Storm Guidelines 2016", url: "https://www.liebertpub.com/doi/10.1089/thy.2016.0229" }
    ]
},

// ============================================================================
// RENAL TOPIC CLUSTER
// ============================================================================
"renal": {
    topicName: "Renal & Electrolytes",
    icon: "🫘",
    
    reasondx: [
        { id: "aki", title: "Acute Kidney Injury", difficulty: "intermediate" },
        { id: "hyponatremia", title: "Hyponatremia", difficulty: "advanced" },
        { id: "hyperkalemia", title: "Hyperkalemia", difficulty: "intermediate" }
    ],
    
    mechanismdx: [
        { id: "aki-module", file: "aki-module.html", title: "AKI Pathophysiology", concepts: ["prerenal vs intrinsic", "FeNa", "urinalysis"] },
        { id: "hyponatremia-module", file: "hyponatremia-module.html", title: "Hyponatremia", concepts: ["osmolality", "volume status", "SIADH"] }
    ],
    
    coachdx: [
        { id: "aki-prerenal", title: "Prerenal AKI", coach: "Dr. Sarah Chen" },
        { id: "aki-intrinsic", title: "Intrinsic AKI", coach: "Dr. Sarah Chen" },
        { id: "hyponatremia-siadh", title: "SIADH", coach: "Dr. Sarah Chen" },
        { id: "hyponatremia-hypovolemic", title: "Hypovolemic Hyponatremia", coach: "Dr. Sarah Chen" }
    ],
    
    learningPath: {
        beginner: ["mechanismdx:aki-module", "coachdx:aki-prerenal"],
        intermediate: ["reasondx:aki", "coachdx:aki-intrinsic", "mechanismdx:hyponatremia-module"],
        advanced: ["reasondx:hyponatremia", "coachdx:hyponatremia-siadh"]
    },
    
    guidelines: [
        { name: "KDIGO AKI Guidelines 2012", url: "https://kdigo.org/guidelines/acute-kidney-injury/" },
        { name: "European Hyponatremia Guidelines 2014", url: "https://academic.oup.com/ndt/article/29/suppl_2/i1/1904943" }
    ]
},

// ============================================================================
// GI TOPIC CLUSTER
// ============================================================================
"gi": {
    topicName: "Gastrointestinal",
    icon: "🫃",
    
    reasondx: [
        { id: "gi-bleed", title: "GI Bleeding", difficulty: "intermediate" },
        { id: "abdominal-pain", title: "Acute Abdomen", difficulty: "intermediate" },
        { id: "pancreatitis", title: "Pancreatitis", difficulty: "intermediate" }
    ],
    
    mechanismdx: [
        { id: "gi-bleeding-module", file: "gi-bleeding-module.html", title: "GI Bleeding", concepts: ["upper vs lower", "variceal", "resuscitation"] },
        { id: "liver-module", file: "cirrhosis-module.html", title: "Liver Disease", concepts: ["portal hypertension", "hepatorenal", "encephalopathy"] }
    ],
    
    coachdx: [
        { id: "upper-gi-bleed", title: "Upper GI Bleed", coach: "Dr. Sarah Chen" },
        { id: "lower-gi-bleed", title: "Lower GI Bleed", coach: "Dr. Sarah Chen" },
        { id: "appendicitis", title: "Appendicitis", coach: "Dr. Sarah Chen" },
        { id: "cholangitis", title: "Cholangitis", coach: "Dr. Sarah Chen" },
        { id: "sbo", title: "Small Bowel Obstruction", coach: "Dr. Sarah Chen" }
    ],
    
    // Surgical resident cases
    coachdx_resident: [
        { id: "surg-acute-abdomen", title: "Surgical Acute Abdomen", coach: "Dr. David Kim" },
        { id: "surg-post-op-complication", title: "Post-Op Complications", coach: "Dr. David Kim" }
    ],
    
    learningPath: {
        beginner: ["mechanismdx:gi-bleeding-module", "reasondx:abdominal-pain"],
        intermediate: ["coachdx:upper-gi-bleed", "coachdx:appendicitis", "coachdx:cholangitis"],
        advanced: ["coachdx_resident:surg-acute-abdomen", "coachdx:sbo"]
    },
    
    guidelines: [
        { name: "ACG Upper GI Bleeding Guidelines 2021", url: "https://journals.lww.com/ajg/fulltext/2021/01000/acg_clinical_guideline__upper_gastrointestinal_and.13.aspx" },
        { name: "Tokyo Guidelines 2018 (Cholangitis)", url: "https://www.jstage.jst.go.jp/article/jhbps/25/1/25_11/_article" }
    ]
},

// ============================================================================
// NEUROLOGY TOPIC CLUSTER
// ============================================================================
"neurology": {
    topicName: "Neurology",
    icon: "🧠",
    
    reasondx: [
        { id: "stroke", title: "Acute Stroke", difficulty: "intermediate" },
        { id: "headache", title: "Headache Evaluation", difficulty: "intermediate" },
        { id: "seizure", title: "Seizure/Status", difficulty: "advanced" },
        { id: "altered-mental-status", title: "Altered Mental Status", difficulty: "intermediate" }
    ],
    
    mechanismdx: [
        { id: "stroke-module", file: "stroke-module.html", title: "Stroke Pathophysiology", concepts: ["ischemic vs hemorrhagic", "tPA window", "NIHSS"] },
        { id: "neuro-exam-module", file: "neuro-exam-module.html", title: "Neurological Exam", concepts: ["localization", "cranial nerves", "motor/sensory"] }
    ],
    
    coachdx: [
        { id: "altered-mental-status", title: "Altered Mental Status", coach: "Dr. Sarah Chen" },
        { id: "headache-migraine", title: "Headache - Migraine", coach: "Dr. Sarah Chen" },
        { id: "headache-sah", title: "Headache - SAH", coach: "Dr. Sarah Chen" },
        { id: "seizure-firsttime", title: "First-Time Seizure", coach: "Dr. Sarah Chen" },
        { id: "status-epilepticus", title: "Status Epilepticus", coach: "Dr. Sarah Chen" }
    ],
    
    // EMS cases
    coachdx_ems: [
        { id: "ems-stroke", title: "Field Stroke Recognition", coach: "Captain Mike Rodriguez" },
        { id: "ems-seizure", title: "Field Seizure Management", coach: "Captain Mike Rodriguez" }
    ],
    
    learningPath: {
        beginner: ["mechanismdx:neuro-exam-module", "coachdx_ems:ems-stroke"],
        intermediate: ["mechanismdx:stroke-module", "reasondx:stroke", "coachdx:headache-sah"],
        advanced: ["coachdx:status-epilepticus", "reasondx:seizure"]
    },
    
    guidelines: [
        { name: "AHA/ASA Stroke Guidelines 2019", url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211" },
        { name: "AAN First Seizure Guidelines 2015", url: "https://www.aan.com/Guidelines/home/GuidelineDetail/717" }
    ]
},

// ============================================================================
// PHYSICAL THERAPY TOPIC CLUSTER
// ============================================================================
"physical-therapy": {
    topicName: "Physical Therapy",
    icon: "🦿",
    professions: ["pt"],
    
    reasondx: [
        { id: "PT-001", title: "Low Back Pain with Radiculopathy", difficulty: "intermediate" },
        { id: "PT-002", title: "ACL Reconstruction Rehab", difficulty: "intermediate" },
        { id: "PT-003", title: "Stroke Rehabilitation", difficulty: "advanced" },
        { id: "PT-004", title: "Shoulder Impingement", difficulty: "beginner" },
        { id: "PT-005", title: "Geriatric Balance/Falls", difficulty: "intermediate" }
    ],
    
    mechanismdx: [
        { id: "msk-module", file: "msk-module.html", title: "MSK Pathophysiology", concepts: ["joint mechanics", "tissue healing", "pain pathways"] }
    ],
    
    coachdx: [], // Future: PT-specific CoachDx cases
    
    learningPath: {
        beginner: ["reasondx:PT-004", "mechanismdx:msk-module"],
        intermediate: ["reasondx:PT-001", "reasondx:PT-002", "reasondx:PT-005"],
        advanced: ["reasondx:PT-003"]
    },
    
    guidelines: [
        { name: "APTA Low Back Pain CPG 2021", url: "https://www.jospt.org/doi/10.2519/jospt.2021.0302" },
        { name: "CDC STEADI Fall Prevention", url: "https://www.cdc.gov/steadi/index.html" }
    ]
},

// ============================================================================
// PODIATRY TOPIC CLUSTER
// ============================================================================
"podiatry": {
    topicName: "Podiatry",
    icon: "🦶",
    professions: ["dpm"],
    
    reasondx: [
        { id: "DPM-001", title: "Diabetic Foot Ulcer", difficulty: "intermediate" },
        { id: "DPM-002", title: "Plantar Fasciitis", difficulty: "beginner" },
        { id: "DPM-003", title: "Hallux Valgus (Bunion)", difficulty: "intermediate" },
        { id: "DPM-004", title: "Ingrown Toenail", difficulty: "beginner" },
        { id: "DPM-005", title: "Charcot Foot", difficulty: "advanced" }
    ],
    
    mechanismdx: [
        { id: "diabetic-foot-module", file: "diabetic-foot-module.html", title: "Diabetic Foot Pathophysiology", concepts: ["neuropathy", "vascular disease", "wound healing"] }
    ],
    
    coachdx: [], // Future: Podiatry-specific CoachDx cases
    
    learningPath: {
        beginner: ["reasondx:DPM-002", "reasondx:DPM-004"],
        intermediate: ["mechanismdx:diabetic-foot-module", "reasondx:DPM-001", "reasondx:DPM-003"],
        advanced: ["reasondx:DPM-005"]
    },
    
    guidelines: [
        { name: "IWGDF Guidelines 2023", url: "https://iwgdfguidelines.org/guidelines-2023/" },
        { name: "ACFAS Heel Pain Guidelines", url: "https://www.acfas.org/clinical-practice-guidelines/" }
    ]
},

// ============================================================================
// PHARMACOLOGY TOPIC CLUSTER
// ============================================================================
"pharmacology": {
    topicName: "Pharmacology",
    icon: "💊",
    
    reasondx: [],
    
    mechanismdx: [
        { id: "beta-lactams", file: "../pharmacology/beta-lactams.html", title: "Beta-Lactam Antibiotics", concepts: ["penicillins", "cephalosporins", "carbapenems", "cell wall inhibition"] },
        { id: "vancomycin", file: "../pharmacology/vancomycin.html", title: "Vancomycin", concepts: ["glycopeptides", "trough levels", "MRSA", "red man syndrome"] },
        { id: "aminoglycosides", file: "../pharmacology/aminoglycosides.html", title: "Aminoglycosides", concepts: ["nephrotoxicity", "ototoxicity", "30S ribosome", "concentration-dependent"] },
        { id: "fluoroquinolones", file: "../pharmacology/fluoroquinolones.html", title: "Fluoroquinolones", concepts: ["DNA gyrase", "topoisomerase IV", "tendinopathy", "QT prolongation"] },
        { id: "macrolides", file: "../pharmacology/macrolides.html", title: "Macrolides", concepts: ["50S ribosome", "azithromycin", "CYP450 inhibition"] },
        { id: "anti-tb-drugs", file: "../pharmacology/anti-tb-drugs.html", title: "Anti-TB Drugs", concepts: ["RIPE therapy", "isoniazid hepatotoxicity", "rifampin CYP induction"] },
        { id: "antifungals", file: "../pharmacology/antifungals.html", title: "Antifungal Agents", concepts: ["azoles", "amphotericin B", "echinocandins", "ergosterol"] },
        { id: "antivirals", file: "../pharmacology/antivirals.html", title: "Antiviral Agents", concepts: ["reverse transcriptase", "protease inhibitors", "HAART", "acyclovir"] },
        { id: "antiparasitics", file: "../pharmacology/antiparasitics.html", title: "Antiparasitic Agents", concepts: ["chloroquine", "metronidazole", "ivermectin", "artemisinin"] },
        { id: "tmp-smx", file: "../pharmacology/tmp-smx.html", title: "TMP-SMX", concepts: ["folate synthesis", "PCP prophylaxis", "hyperkalemia"] },
        { id: "metronidazole", file: "../pharmacology/metronidazole.html", title: "Metronidazole", concepts: ["anaerobes", "C. diff", "disulfiram-like reaction"] },
        { id: "tetracyclines", file: "../pharmacology/tetracyclines.html", title: "Tetracyclines", concepts: ["30S ribosome", "doxycycline", "photosensitivity", "tooth discoloration"] },
        { id: "clindamycin", file: "../pharmacology/clindamycin.html", title: "Clindamycin", concepts: ["50S ribosome", "C. diff risk", "anaerobic coverage"] },
        { id: "linezolid-daptomycin", file: "../pharmacology/linezolid-daptomycin.html", title: "Linezolid & Daptomycin", concepts: ["VRE", "MRSA", "serotonin syndrome", "CPK monitoring"] },
        { id: "uti-agents", file: "../pharmacology/uti-agents.html", title: "UTI Agents", concepts: ["nitrofurantoin", "fosfomycin", "empiric therapy"] }
    ],
    
    coachdx: [
        { id: "antibiotic-stewardship", title: "Antibiotic Stewardship", coach: "PharmD Coach" },
        { id: "drug-interactions", title: "Drug Interaction Case", coach: "PharmD Coach" }
    ],
    
    learningPath: {
        beginner: ["mechanismdx:beta-lactams", "mechanismdx:vancomycin", "mechanismdx:tmp-smx"],
        intermediate: ["mechanismdx:fluoroquinolones", "mechanismdx:aminoglycosides", "mechanismdx:macrolides", "mechanismdx:antifungals"],
        advanced: ["mechanismdx:anti-tb-drugs", "mechanismdx:antivirals", "mechanismdx:linezolid-daptomycin"]
    },
    
    guidelines: [
        { name: "IDSA Antimicrobial Stewardship Guidelines", url: "https://www.idsociety.org/practice-guideline/antimicrobial-stewardship/" },
        { name: "Sanford Guide (Open Access Portions)", url: "https://www.sanfordguide.com/" }
    ]
},

// ============================================================================
// MICROBIOLOGY TOPIC CLUSTER
// ============================================================================
"microbiology": {
    topicName: "Microbiology",
    icon: "🦠",
    
    reasondx: [],
    
    mechanismdx: [
        // Gram-Positive Bacteria
        { id: "s-aureus", file: "../microbiology/s-aureus-module.html", title: "Staphylococcus aureus", concepts: ["MSSA vs MRSA", "coagulase positive", "toxic shock", "endocarditis"] },
        { id: "s-pneumoniae", file: "../microbiology/s-pneumoniae-module.html", title: "Streptococcus pneumoniae", concepts: ["pneumonia", "meningitis", "capsule", "optochin sensitive"] },
        { id: "gas", file: "../microbiology/gas-spyogenes-module.html", title: "Group A Strep", concepts: ["pharyngitis", "necrotizing fasciitis", "rheumatic fever", "M protein"] },
        { id: "gbs", file: "../microbiology/gbs-sagalactiae-module.html", title: "Group B Strep", concepts: ["neonatal meningitis", "intrapartum prophylaxis", "CAMP test"] },
        { id: "enterococcus", file: "../microbiology/enterococcus-module.html", title: "Enterococcus", concepts: ["VRE", "endocarditis", "UTI", "bile esculin"] },
        { id: "clostridium", file: "../microbiology/clostridium-module.html", title: "Clostridium species", concepts: ["tetanus", "botulism", "gas gangrene", "anaerobes"] },
        { id: "cdiff", file: "../microbiology/cdiff-module.html", title: "C. difficile", concepts: ["pseudomembranous colitis", "toxin A/B", "fidaxomicin", "fecal transplant"] },
        { id: "listeria", file: "../microbiology/listeria-module.html", title: "Listeria monocytogenes", concepts: ["neonatal meningitis", "cold growth", "deli meats", "ampicillin"] },

        // Gram-Negative Bacteria
        { id: "e-coli", file: "../microbiology/e-coli-module.html", title: "E. coli", concepts: ["UTI", "EHEC", "HUS", "traveler's diarrhea"] },
        { id: "klebsiella", file: "../microbiology/klebsiella-module.html", title: "Klebsiella pneumoniae", concepts: ["currant jelly sputum", "ESBL", "liver abscess", "nosocomial"] },
        { id: "pseudomonas", file: "../microbiology/pseudomonas-module.html", title: "Pseudomonas aeruginosa", concepts: ["burn wounds", "CF lung", "blue-green pigment", "anti-pseudomonal"] },
        { id: "neisseria", file: "../microbiology/neisseria-module.html", title: "Neisseria species", concepts: ["meningitidis", "gonorrhoeae", "complement deficiency", "chocolate agar"] },
        { id: "haemophilus", file: "../microbiology/haemophilus-module.html", title: "Haemophilus influenzae", concepts: ["epiglottitis", "otitis media", "Hib vaccine", "factor V/X"] },
        { id: "salmonella-shigella", file: "../microbiology/salmonella-shigella-module.html", title: "Salmonella & Shigella", concepts: ["enteric fever", "bloody diarrhea", "osteomyelitis sickle cell"] },
        { id: "legionella", file: "../microbiology/legionella-module.html", title: "Legionella pneumophila", concepts: ["atypical pneumonia", "urine antigen", "hyponatremia", "cooling towers"] },
        { id: "bordetella", file: "../microbiology/bordetella-module.html", title: "Bordetella pertussis", concepts: ["whooping cough", "lymphocytosis", "DTaP/Tdap", "100-day cough"] },
        { id: "hpylori", file: "../microbiology/hpylori-campylobacter-module.html", title: "H. pylori & Campylobacter", concepts: ["peptic ulcer", "gastric cancer", "triple therapy", "Guillain-Barré"] },

        // Atypical Bacteria
        { id: "mycoplasma", file: "../microbiology/mycoplasma-module.html", title: "Mycoplasma pneumoniae", concepts: ["walking pneumonia", "no cell wall", "cold agglutinins", "macrolides"] },
        { id: "chlamydia", file: "../microbiology/chlamydia-module.html", title: "Chlamydia species", concepts: ["STI", "trachoma", "atypical pneumonia", "intracellular"] },
        { id: "rickettsia", file: "../microbiology/rickettsia-module.html", title: "Rickettsia species", concepts: ["RMSF", "tick-borne", "Weil-Felix", "doxycycline"] },
        { id: "lyme", file: "../microbiology/lyme-module.html", title: "Lyme Disease (Borrelia)", concepts: ["erythema migrans", "Ixodes tick", "Bell palsy", "heart block"] },
        { id: "syphilis", file: "../microbiology/syphilis-module.html", title: "Treponema pallidum", concepts: ["chancre", "condylomata lata", "FTA-ABS", "penicillin G"] },
        { id: "tuberculosis", file: "../microbiology/tuberculosis-module.html", title: "Mycobacterium tuberculosis", concepts: ["AFB stain", "Ghon complex", "RIPE therapy", "PPD/IGRA"] },

        // Fungi
        { id: "candida", file: "../microbiology/candida-module.html", title: "Candida species", concepts: ["thrush", "vulvovaginitis", "catheter infections", "echinocandins"] },
        { id: "aspergillus", file: "../microbiology/aspergillus-module.html", title: "Aspergillus", concepts: ["invasive aspergillosis", "ABPA", "aspergilloma", "voriconazole"] },
        { id: "cryptococcus", file: "../microbiology/cryptoccocus-module.html", title: "Cryptococcus", concepts: ["meningitis", "India ink", "HIV/AIDS", "latex agglutination"] },
        { id: "histoplasma", file: "../microbiology/histoplasma-module.html", title: "Histoplasma capsulatum", concepts: ["Ohio/Mississippi Valley", "bat/bird droppings", "granulomas"] },
        { id: "coccidioides", file: "../microbiology/coccidioides-module.html", title: "Coccidioides immitis", concepts: ["Valley fever", "Southwest US", "spherules", "erythema nodosum"] },
        { id: "blastomyces", file: "../microbiology/blastomyces-module.html", title: "Blastomyces", concepts: ["Great Lakes region", "broad-based budding", "skin and lung"] },
        { id: "pcp", file: "../microbiology/pcp-module.html", title: "Pneumocystis jirovecii", concepts: ["PCP pneumonia", "HIV/AIDS", "TMP-SMX prophylaxis", "ground glass"] },
        { id: "mucor", file: "../microbiology/mucor-module.html", title: "Mucor/Rhizopus", concepts: ["rhinocerebral", "DKA", "non-septate hyphae", "amphotericin B"] },

        // Viruses
        { id: "hiv", file: "../microbiology/hiv-aids-module.html", title: "HIV/AIDS", concepts: ["CD4 count", "HAART", "opportunistic infections", "window period"] },
        { id: "hepatitis", file: "../microbiology/hepatitis-viruses-module.html", title: "Hepatitis Viruses", concepts: ["Hep A/B/C", "serology", "chronic infection", "vaccination"] },
        { id: "herpes", file: "../microbiology/herpes-viruses-module.html", title: "Herpes Viruses", concepts: ["HSV", "VZV", "EBV", "CMV", "latency"] },
        { id: "influenza", file: "../microbiology/influenza-module.html", title: "Influenza", concepts: ["antigenic drift/shift", "oseltamivir", "H and N types"] },
        { id: "rsv", file: "../microbiology/rsv-module.html", title: "RSV", concepts: ["bronchiolitis", "infants", "palivizumab", "syncytial cells"] },

        // Parasites
        { id: "malaria", file: "../microbiology/malaria-module.html", title: "Plasmodium (Malaria)", concepts: ["Anopheles mosquito", "P. falciparum", "cyclic fevers", "chloroquine"] },
        { id: "toxoplasma", file: "../microbiology/toxoplasma-module.html", title: "Toxoplasma gondii", concepts: ["ring-enhancing lesions", "cats", "pregnancy", "pyrimethamine"] },
        { id: "giardia", file: "../microbiology/giardia-module.html", title: "Giardia lamblia", concepts: ["backpackers", "fatty stool", "trophozoites", "metronidazole"] }
    ],
    
    coachdx: [
        { id: "sepsis-id", title: "Sepsis - Infectious Disease", coach: "ID Coach" },
        { id: "meningitis", title: "Meningitis Workup", coach: "ID Coach" },
        { id: "pneumonia-id", title: "Community-Acquired Pneumonia", coach: "ID Coach" }
    ],
    
    learningPath: {
        beginner: ["mechanismdx:s-aureus", "mechanismdx:e-coli", "mechanismdx:s-pneumoniae", "mechanismdx:candida"],
        intermediate: ["mechanismdx:pseudomonas", "mechanismdx:cdiff", "mechanismdx:tuberculosis", "mechanismdx:hiv", "mechanismdx:hepatitis"],
        advanced: ["mechanismdx:aspergillus", "mechanismdx:malaria", "mechanismdx:pcp", "mechanismdx:rickettsia", "mechanismdx:lyme"]
    },
    
    guidelines: [
        { name: "IDSA Practice Guidelines", url: "https://www.idsociety.org/practice-guideline/practice-guidelines/" },
        { name: "CDC Antibiotic Prescribing Guidelines", url: "https://www.cdc.gov/antibiotic-use/" },
        { name: "WHO Essential Medicines List", url: "https://www.who.int/publications/i/item/WHO-MHP-HPS-EML-2023.02" }
    ]
}

};

// ============================================================================
// RECOMMENDATION ENGINE FUNCTIONS
// ============================================================================

/**
 * Get recommendations based on completed content
 */
function getRecommendations(completedCases, profession = "md-do", level = "intermediate") {
    const recommendations = [];
    
    // Analyze what topics the user has explored
    const topicsExplored = new Set();
    const platformsUsed = new Set();
    
    completedCases.forEach(caseId => {
        Object.values(CROSS_PLATFORM_MAP).forEach(topic => {
            // Check each platform
            ['reasondx', 'mechanismdx', 'coachdx', 'coachdx_nursing', 'coachdx_ems', 'coachdx_rt'].forEach(platform => {
                if (topic[platform]) {
                    topic[platform].forEach(c => {
                        if (c.id === caseId || c.file === caseId) {
                            topicsExplored.add(topic.topicName);
                            platformsUsed.add(platform);
                        }
                    });
                }
            });
        });
    });
    
    // Generate recommendations
    Object.values(CROSS_PLATFORM_MAP).forEach(topic => {
        // Skip profession-specific topics that don't match
        if (topic.professions && !topic.professions.includes(profession)) return;
        
        // If user has explored this topic, recommend other platforms
        if (topicsExplored.has(topic.topicName)) {
            ['reasondx', 'mechanismdx', 'coachdx'].forEach(platform => {
                if (!platformsUsed.has(platform) && topic[platform] && topic[platform].length > 0) {
                    recommendations.push({
                        type: 'same-topic-different-platform',
                        topic: topic.topicName,
                        platform: platform,
                        suggestion: topic[platform][0],
                        reason: `You've studied ${topic.topicName} - try it on ${platform} for a different perspective`
                    });
                }
            });
        }
        
        // Suggest learning path based on level
        if (topic.learningPath && topic.learningPath[level]) {
            const pathItems = topic.learningPath[level];
            pathItems.forEach(item => {
                const [platform, caseId] = item.split(':');
                if (!completedCases.includes(caseId)) {
                    recommendations.push({
                        type: 'learning-path',
                        topic: topic.topicName,
                        platform: platform,
                        caseId: caseId,
                        reason: `Recommended for ${level} learners in ${topic.topicName}`
                    });
                }
            });
        }
    });
    
    return recommendations.slice(0, 5); // Return top 5
}

/**
 * Get cross-platform links for a specific case
 */
function getCrossPlatformLinks(caseId, currentPlatform) {
    const links = { sameTopic: [], relatedTopics: [] };
    
    Object.values(CROSS_PLATFORM_MAP).forEach(topic => {
        let foundInTopic = false;
        
        // Check if this case is in any platform of this topic
        ['reasondx', 'mechanismdx', 'coachdx', 'coachdx_nursing', 'coachdx_ems', 'coachdx_rt'].forEach(platform => {
            if (topic[platform]) {
                topic[platform].forEach(c => {
                    if (c.id === caseId || c.file === caseId) {
                        foundInTopic = true;
                    }
                });
            }
        });
        
        if (foundInTopic) {
            // Add other platforms in same topic
            ['reasondx', 'mechanismdx', 'coachdx'].forEach(platform => {
                if (platform !== currentPlatform && topic[platform]) {
                    topic[platform].forEach(c => {
                        links.sameTopic.push({
                            platform: platform,
                            ...c,
                            topic: topic.topicName
                        });
                    });
                }
            });
            
            // Add guidelines
            if (topic.guidelines) {
                links.guidelines = topic.guidelines;
            }
        }
    });
    
    return links;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CROSS_PLATFORM_MAP, getRecommendations, getCrossPlatformLinks };
}
if (typeof window !== 'undefined') {
    window.CROSS_PLATFORM_MAP = CROSS_PLATFORM_MAP;
    window.getRecommendations = getRecommendations;
    window.getCrossPlatformLinks = getCrossPlatformLinks;
}

console.log('[CrossPlatformMap] Loaded ' + Object.keys(CROSS_PLATFORM_MAP).length + ' topic clusters');
