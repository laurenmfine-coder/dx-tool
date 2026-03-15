/* emr-data/manifest.js — EMR Case Manifest
 * Provides window.EMR_MANIFEST used by admissions, ed-3d, night-float, virtual-emr.
 * Each entry is a batch grouped by presentation.
 * Updated: March 2026 — added 29 new cases across neurology, infectious, renal,
 * psychiatric, endocrine, oncology, MSK, cardiology, pulmonary, GI, dermatology,
 * pediatric, obstetric specialties.
 */
var EMR_MANIFEST = window.EMR_MANIFEST || [
  { presentation:"Chest Pain", cases:[
    {id:"stemi-v1",diagnosis:"ST-Elevation MI",category:"cardiology",acuity:1,cc:"Crushing chest pain radiating to left arm \u00D7 1hr"},
    {id:"nstemi-v1",diagnosis:"NSTEMI",category:"cardiology",acuity:2,cc:"Chest pressure and shortness of breath \u00D7 3hrs"},
    {id:"acute-coronary-syndrome",diagnosis:"Acute Coronary Syndrome",category:"cardiology",acuity:2,cc:"Substernal chest tightness with exertion, worse today"},
    {id:"pe-v1",diagnosis:"Pulmonary Embolism",category:"pulmonary",acuity:1,cc:"Sudden onset pleuritic chest pain and dyspnea"},
    {id:"pericarditis-v1",diagnosis:"Pericarditis",category:"cardiology",acuity:3,cc:"Sharp chest pain worse when lying flat, better leaning forward"},
    {id:"aortic-dissection-back",diagnosis:"Aortic Dissection",category:"cardiology",acuity:1,cc:"Sudden tearing chest pain radiating to back"},
    {id:"pneumothorax",diagnosis:"Pneumothorax",category:"pulmonary",acuity:2,cc:"Acute onset right-sided chest pain and difficulty breathing"}
  ]},
  { presentation:"Dyspnea", cases:[
    {id:"chf-exacerbation",diagnosis:"CHF Exacerbation",category:"cardiology",acuity:2,cc:"Worsening shortness of breath, can't lie flat, leg swelling \u00D7 3 days"},
    {id:"copd-v1",diagnosis:"COPD Exacerbation",category:"pulmonary",acuity:2,cc:"Worsening dyspnea and productive cough \u00D7 3 days"},
    {id:"copd-exacerbation-niv",diagnosis:"Severe COPD Exacerbation — Acute Hypercapnic Respiratory Failure — BiPAP",category:"pulmonary",acuity:2,cc:"77M GOLD IV COPD DNI, pH 7.29 pCO2 72, SpO2 84%, BiPAP initiated"},
    {id:"asthma-exacerbation",diagnosis:"Asthma Exacerbation",category:"pulmonary",acuity:2,cc:"Wheezing and difficulty breathing, inhaler not helping"},
    {id:"pneumonia",diagnosis:"Community-Acquired Pneumonia",category:"infectious",acuity:3,cc:"Fever, cough with yellow sputum, shortness of breath \u00D7 4 days"},
    {id:"community-acquired-pneumonia",diagnosis:"Community-Acquired Pneumonia — S. pneumoniae — CURB-65 3",category:"infectious",acuity:2,cc:"74F COPD, 5-day fever + productive cough, SpO2 88%, CURB-65 score 3"},
    {id:"massive-pe-with-rv-failure",diagnosis:"Massive PE with RV Failure",category:"pulmonary",acuity:1,cc:"Sudden severe dyspnea, near-syncope, cannot catch breath"},
    {id:"vocal-cord-dysfunction",diagnosis:"Vocal Cord Dysfunction (PVFM)",category:"pulmonary",acuity:3,cc:"Episodic inspiratory stridor and throat tightness — misdiagnosed as asthma for 2 years"}
  ]},
  { presentation:"Altered Mental Status", cases:[
    {id:"dka-v1",diagnosis:"Diabetic Ketoacidosis",category:"endocrine",acuity:1,cc:"Nausea, vomiting, abdominal pain, increasingly confused \u00D7 2 days"},
    {id:"stroke-v1",diagnosis:"Acute Ischemic Stroke",category:"neurology",acuity:1,cc:"Sudden left-sided weakness and slurred speech \u00D7 45min"},
    {id:"meningitis-v1",diagnosis:"Bacterial Meningitis",category:"infectious",acuity:1,cc:"Severe headache, neck stiffness, fever, photophobia"},
    {id:"status-epilepticus",diagnosis:"Status Epilepticus",category:"neurology",acuity:1,cc:"Witnessed seizure, not stopping, ongoing convulsions"},
    {id:"severe-hyponatremia",diagnosis:"Severe Hyponatremia",category:"renal",acuity:2,cc:"Confusion, lethargy, found acting strange by family"},
    {id:"alcohol-withdrawal",diagnosis:"Alcohol Withdrawal — CIWA 22 — DTs Prevention",category:"psychiatric",acuity:2,cc:"54M daily fifth x6yr, LDA 18h, tremor, diaphoresis, formication, prior withdrawal seizure"},
    {id:"delirium-elderly",diagnosis:"Post-Operative Delirium — Hyperactive — Elderly",category:"geriatric",acuity:2,cc:"85F post-op day 1 hip replacement, acute confusion, CAM positive, multiple precipitants"}
  ]},
  { presentation:"Abdominal Pain", cases:[
    {id:"appendicitis-v1",diagnosis:"Acute Appendicitis",category:"surgery",acuity:2,cc:"RLQ abdominal pain, nausea, low-grade fever \u00D7 18hrs"},
    {id:"acute-pancreatitis",diagnosis:"Acute Pancreatitis",category:"gi",acuity:2,cc:"Severe epigastric pain radiating to back after drinking"},
    {id:"acute-cholecystitis",diagnosis:"Acute Cholecystitis",category:"gi",acuity:3,cc:"RUQ pain after eating, worse with fatty food, nausea"},
    {id:"sbo-strangulation",diagnosis:"SBO with Strangulation",category:"surgery",acuity:1,cc:"Abdominal distension, bilious vomiting, severe crampy pain"},
    {id:"mesenteric-ischemia",diagnosis:"Mesenteric Ischemia",category:"surgery",acuity:1,cc:"Severe abdominal pain out of proportion to exam, bloody stool"},
    {id:"perforated-peptic-ulcer",diagnosis:"Perforated Peptic Ulcer",category:"surgery",acuity:1,cc:"Sudden onset severe epigastric pain, rigid abdomen"},
    {id:"upper-gi-bleed",diagnosis:"Upper GI Bleed — Duodenal Ulcer — H. pylori Positive",category:"gi",acuity:1,cc:"63M hematemesis + melena, NSAID use + heavy ETOH, GBS 12, Forrest Ia — endoscopic hemostasis"},
    {id:"ibs-management",diagnosis:"Irritable Bowel Syndrome — Mixed Type — Rome IV Criteria",category:"gi",acuity:3,cc:"35F 14-month abdominal pain relieved by defecation, alternating bowel habits, normal colonoscopy"}
  ]},
  { presentation:"Neurologic Emergency", cases:[
    {id:"sah-v1",diagnosis:"Subarachnoid Hemorrhage",category:"neurology",acuity:1,cc:"Sudden worst headache of my life, neck stiffness"},
    {id:"acute-ischemic-stroke-tpa",diagnosis:"Acute Ischemic Stroke — LVO — tPA + Thrombectomy",category:"neurology",acuity:1,cc:"75F AF on apixaban, sudden aphasia + right hemiplegia, NIHSS 18"},
    {id:"guillain-barre",diagnosis:"Guillain-Barré Syndrome",category:"neurology",acuity:2,cc:"37F progressive ascending weakness x10 days, areflexia, post-Campylobacter"},
    {id:"new-onset-seizure",diagnosis:"New-Onset Seizure — CNS Toxoplasmosis (HIV)",category:"neurology",acuity:2,cc:"40F HIV+ CD4 68, new tonic-clonic seizure, 3-week headache, ring-enhancing lesion"},
    {id:"hypertensive-emergency",diagnosis:"Hypertensive Emergency with End-Organ Damage",category:"neurology",acuity:2,cc:"57M BP 226/138, severe headache, blurred vision, papilledema"},
    {id:"new-seizure-mass",diagnosis:"New-Onset Seizure (Brain Mass)",category:"neurology",acuity:2,cc:"New-onset seizure, no prior history, persistent headache"},
    {id:"cauda-equina",diagnosis:"Cauda Equina Syndrome",category:"neurology",acuity:2,cc:"Severe low back pain, bilateral leg weakness, trouble urinating"}
  ]},
  { presentation:"Headache", cases:[
    {id:"migraine",diagnosis:"Migraine",category:"neurology",acuity:4,cc:"Severe throbbing headache with aura, nausea, photophobia \u00D7 6hrs"},
    {id:"migraine-management",diagnosis:"Migraine with Aura — Preventive Therapy — OCP Contraindicated",category:"neurology",acuity:3,cc:"37F migraine with aura 3x/week, MIDAS 22, daily NSAIDs — topiramate + sumatriptan + stop OCP"}
  ]},
  { presentation:"Infectious Disease", cases:[
    {id:"sepsisseptic-shock",diagnosis:"Sepsis/Septic Shock",category:"infectious",acuity:1,cc:"High fever, chills, confusion, feeling very ill \u00D7 1 day"},
    {id:"infective-endocarditis",diagnosis:"Infective Endocarditis — Tricuspid Valve — MSSA — IVDU",category:"infectious",acuity:2,cc:"31M IVDU, 3-week fever, new murmur, splinter hemorrhages, septic pulmonary emboli"},
    {id:"pyelonephritis-sepsis",diagnosis:"Urosepsis — Pyelonephritis — E. coli Bacteremia — Antibiotic De-escalation",category:"infectious",acuity:2,cc:"70F DM2, sulfa + PCN allergy — urosepsis qSOFA 2 — ceftriaxone to PO ciprofloxacin"},
    {id:"pyelonephritis-urosepsis",diagnosis:"Pyelonephritis/Urosepsis",category:"infectious",acuity:2,cc:"Flank pain, fever, burning with urination, rigors"},
    {id:"septic-shock-urosepsis",diagnosis:"Septic Shock (Urosepsis)",category:"infectious",acuity:1,cc:"High fever, confusion, low blood pressure, urinary symptoms"},
    {id:"nec-fasciitis",diagnosis:"Necrotizing Fasciitis",category:"infectious",acuity:1,cc:"Rapidly spreading painful red skin, blistering, high fever, toxic-appearing"},
    {id:"fournier-gangrene",diagnosis:"Fournier Gangrene",category:"infectious",acuity:1,cc:"Severe perineal pain, swelling, fever, foul-smelling drainage"}
  ]},
  { presentation:"Fever", cases:[
    {id:"neutropenic-fever",diagnosis:"Neutropenic Fever",category:"hematology",acuity:1,cc:"Fever and chills on chemotherapy, feeling weak"},
    {id:"febrile-neutropenia",diagnosis:"Febrile Neutropenia — E. coli Bacteremia — Breast Cancer",category:"hematology",acuity:2,cc:"56F on dose-dense AC chemo day 10, fever 38.8°C, ANC 180 — door-to-abx <60 min"}
  ]},
  { presentation:"Syncope", cases:[
    {id:"cardiac-syncope",diagnosis:"Cardiac Syncope",category:"cardiology",acuity:2,cc:"Passed out without warning while sitting, palpitations before"},
    {id:"vasovagal-syncope",diagnosis:"Vasovagal Syncope",category:"cardiology",acuity:4,cc:"Felt lightheaded then passed out briefly, came right back"},
    {id:"pulmonary-embolism-syncope",diagnosis:"PE with Syncope",category:"pulmonary",acuity:1,cc:"Sudden collapse, brief LOC, now short of breath and chest pain"}
  ]},
  { presentation:"Cardiac Emergency", cases:[
    {id:"cardiac-tamponade",diagnosis:"Cardiac Tamponade",category:"cardiac",acuity:1,cc:"Chest pain, shortness of breath, muffled heart sounds, hypotension"},
    {id:"complete-heart-block",diagnosis:"Complete Heart Block",category:"cardiac",acuity:2,cc:"Dizzy spells, near-syncope, heart rate in the 30s"},
    {id:"vt-syncope",diagnosis:"Ventricular Tachycardia with Syncope",category:"cardiology",acuity:2,cc:"Passed out at home, palpitations, chest discomfort"},
    {id:"chf-v1",diagnosis:"Acute Decompensated Heart Failure",category:"cardiology",acuity:2,cc:"Can't breathe lying down, legs very swollen, gained 15 lbs in a week"},
    {id:"new-onset-atrial-fibrillation",diagnosis:"New-Onset Atrial Fibrillation — Cardioversion — Anticoagulation",category:"cardiology",acuity:2,cc:"65M sudden palpitations + dyspnea x4h, HR 142 irregular, CHA2DS2-VASc 2"},
    {id:"heart-failure-hfpef",diagnosis:"Acute Decompensated HFpEF — Empagliflozin Initiation",category:"cardiology",acuity:2,cc:"77F HTN/DM2/AF, orthopnea + leg edema, BNP 820, EF 62% — IV diuresis + SGLT2i"}
  ]},
  { presentation:"Toxicology", cases:[
    {id:"apap-overdose",diagnosis:"Acetaminophen Overdose",category:"toxicology",acuity:2,cc:"Took a bottle of Tylenol, nausea, RUQ pain"},
    {id:"serotonin-syndrome",diagnosis:"Serotonin Syndrome",category:"toxicology",acuity:2,cc:"Agitation, tremor, diaphoresis, recently started new antidepressant"},
    {id:"salicylate-toxicity",diagnosis:"Salicylate Toxicity",category:"toxicology",acuity:1,cc:"Tinnitus, rapid breathing, confusion after taking many aspirin"}
  ]},
  { presentation:"Hematologic", cases:[
    {id:"ttp",diagnosis:"TTP",category:"hematology",acuity:1,cc:"Easy bruising, confusion, petechiae, dark urine"},
    {id:"sle-flare-with-cytopenias",diagnosis:"SLE Flare with Cytopenias",category:"hematology",acuity:2,cc:"Joint pain, fatigue, rash, low blood counts found on labs"},
    {id:"autoimmune-hemolytic-anemia",diagnosis:"Autoimmune Hemolytic Anemia",category:"hematology",acuity:2,cc:"Fatigue, jaundice, dark urine, feeling lightheaded"},
    {id:"dic-massive-transfusion",diagnosis:"DIC with Massive Hemorrhage",category:"hematology",acuity:1,cc:"Bleeding from multiple sites, oozing from IV sites, recent surgery"}
  ]},
  { presentation:"Oncology", cases:[
    {id:"lung-cancer-staging",diagnosis:"Non-Small Cell Lung Cancer — Squamous Cell — Stage IIIA Staging Workup",category:"hematology",acuity:3,cc:"74M 55 pack-years, 4-month cough + 18lb weight loss, right hilar mass, EBUS-confirmed N2 disease"}
  ]},
  { presentation:"Renal/Electrolyte", cases:[
    {id:"hyperkalemia-cardiac",diagnosis:"Hyperkalemia with Cardiac Changes",category:"renal",acuity:1,cc:"Generalized weakness, missed dialysis \u00D7 2 sessions, palpitations"},
    {id:"renal-colic",diagnosis:"Renal Colic",category:"renal",acuity:3,cc:"Severe left flank pain, hematuria, cannot sit still"},
    {id:"aki-differential",diagnosis:"Acute Kidney Injury — Prerenal vs NSAID-Induced ATN",category:"renal",acuity:2,cc:"69M Cr 4.2 from 0.9 after gastroenteritis + NSAID use, K+ 5.9, oliguria"},
    {id:"rhabdomyolysis",diagnosis:"Rhabdomyolysis — Statin-Induced + Exertional",category:"renal",acuity:2,cc:"47M on rosuvastatin, boot camp exercise, CK 48,000, cola-colored urine, AKI"}
  ]},
  { presentation:"Endocrine", cases:[
    {id:"thyroid-storm",diagnosis:"Thyroid Storm",category:"endocrine",acuity:1,cc:"High fever, racing heart, agitation, tremor, known thyroid disease"},
    {id:"adrenal-crisis",diagnosis:"Adrenal Crisis",category:"endocrine",acuity:1,cc:"Severe weakness, hypotension, abdominal pain, on chronic steroids that were stopped"},
    {id:"myxedema-coma",diagnosis:"Myxedema Coma",category:"endocrine",acuity:1,cc:"Found lethargic, hypothermic, bradycardic, known hypothyroidism"},
    {id:"hypercalcemia",diagnosis:"Hypercalcemia of Malignancy — PTHrP-Mediated",category:"endocrine",acuity:2,cc:"72M stage IV squamous cell lung cancer, confusion, Ca 14.2, polyuria"},
    {id:"inpatient-diabetes-management",diagnosis:"Inpatient Hyperglycemia — Basal-Bolus Insulin Initiation",category:"endocrine",acuity:3,cc:"62F T2DM admitted for CAP, BG 382, oral agents held, needs insulin regimen"},
    {id:"type2-diabetes-outpatient",diagnosis:"Type 2 Diabetes — Outpatient Optimization — Semaglutide",category:"endocrine",acuity:4,cc:"57F T2DM HbA1c 8.8%, obesity BMI 38, ASCVD risk 22%, GLP-1 initiation"}
  ]},
  { presentation:"Psychiatric / Behavioral", cases:[
    {id:"nms",diagnosis:"Neuroleptic Malignant Syndrome",category:"psychiatric",acuity:2,cc:"High fever, severe muscle rigidity, confusion, on antipsychotic"},
    {id:"acute-psychosis",diagnosis:"First-Episode Psychosis — Schizophrenia",category:"psychiatric",acuity:2,cc:"24M paranoid delusions, auditory hallucinations, 6-month prodrome, HIV negative, anti-NMDA negative"}
  ]},
  { presentation:"Musculoskeletal Emergency", cases:[
    {id:"septic-arthritis",diagnosis:"Septic Arthritis — Right Knee — MSSA — with Gout",category:"musculoskeletal",acuity:2,cc:"63M gout + DM2, acute monoarticular knee swelling, fever 38.8°C, post-cortisone injection"},
    {id:"compartment-syndrome",diagnosis:"Acute Compartment Syndrome",category:"musculoskeletal",acuity:2,cc:"Severe leg pain after injury, pain with passive stretch, tense swelling"}
  ]},
  { presentation:"Musculoskeletal / Clinic", cases:[
    {id:"rheumatoid-arthritis-new",diagnosis:"Rheumatoid Arthritis — New Diagnosis — Methotrexate Initiation",category:"musculoskeletal",acuity:3,cc:"47F bilateral symmetric polyarthritis MCPs/wrists, morning stiffness >1h, anti-CCP 182"}
  ]},
  { presentation:"Dermatology", cases:[
    {id:"acne-management",diagnosis:"Moderate-Severe Acne — Combination Therapy + Isotretinoin Referral",category:"dermatology",acuity:4,cc:"22F OTC failure, PIH on skin of color, early scarring — doxycycline + tretinoin + azelaic acid"},
    {id:"psoriasis-moderate-severe",diagnosis:"Psoriasis — Moderate-Severe — Biologic Initiation (Ixekizumab)",category:"dermatology",acuity:3,cc:"54M plaque psoriasis PASI 18.6 + psoriatic arthritis, methotrexate failure — IL-17A inhibitor"}
  ]},
  { presentation:"Allergic/Immunologic", cases:[
    {id:"anaphylaxis",diagnosis:"Anaphylaxis",category:"allergy",acuity:1,cc:"Lip swelling, hives, throat tightness after eating"},
    {id:"severe-allergic-reaction",diagnosis:"Severe Allergic Reaction",category:"allergy",acuity:2,cc:"Widespread hives, facial swelling after taking medication"},
    {id:"ace-angioedema",diagnosis:"ACE Inhibitor Angioedema",category:"allergy",acuity:2,cc:"Tongue and lip swelling, difficulty swallowing, on lisinopril"},
    {id:"hereditary-angioedema",diagnosis:"Hereditary Angioedema",category:"allergy",acuity:2,cc:"Recurrent facial swelling and severe abdominal pain, family history of similar episodes"},
    {id:"allergic-angioedema",diagnosis:"Allergic Angioedema",category:"allergy",acuity:2,cc:"Acute facial and lip swelling after new medication"},
    {id:"idiopathic-angioedema",diagnosis:"Idiopathic Angioedema",category:"allergy",acuity:3,cc:"Recurrent episodes of hand and facial swelling, no clear trigger"},
    {id:"acquired-c1esterase-inhibitor-deficiency",diagnosis:"Acquired C1-INH Deficiency",category:"allergy",acuity:2,cc:"Recurrent facial swelling and abdominal pain, not responding to antihistamines"},
    {id:"abpa-aspergillus",diagnosis:"ABPA (Allergic Bronchopulmonary Aspergillosis)",category:"allergy",acuity:3,cc:"Refractory asthma with recurrent pulmonary infiltrates and peripheral eosinophilia"},
    {id:"severe-asthma-biologics",diagnosis:"Severe Eosinophilic Asthma — Biologic Selection",category:"allergy",acuity:3,cc:"4th asthma exacerbation in 12 months despite Step 4 therapy — AERD + CRSwNP + eosinophilia"},
    {id:"occupational-asthma-isocyanate",diagnosis:"Isocyanate Occupational Asthma",category:"allergy",acuity:2,cc:"Work-related wheeze and dyspnea improving on weekends — automotive spray painter"},
    {id:"inducible-urticaria",diagnosis:"Cold-Induced Urticaria",category:"allergy",acuity:3,cc:"Hives and swelling triggered by cold water exposure — nearly drowned"},
    {id:"crswNP-biologics",diagnosis:"Severe CRSwNP + AERD — Dupilumab",category:"allergy",acuity:3,cc:"Complete anosmia × 2 years, FESS × 2 failures, severe nasal polyposis with NSAID hypersensitivity"},
    {id:"allergic-rhinitis-immunotherapy",diagnosis:"Allergic Rhinitis — Allergen Immunotherapy (SCIT)",category:"allergy",acuity:4,cc:"Perennial nasal congestion, sneezing, itchy eyes — dust mite + grass + mold sensitized, SCIT initiation with systemic reaction management"},
    {id:"hypersensitivity-pneumonitis",diagnosis:"Chronic Fibrotic Hypersensitivity Pneumonitis",category:"allergy",acuity:3,cc:"Progressive dyspnea 14 months, dry cough, weight loss — lifelong bird breeder × 25 years"},
    {id:"hypereosinophilic-syndrome",diagnosis:"Hypereosinophilic Syndrome — FIP1L1-PDGFRA Myeloproliferative",category:"allergy",acuity:2,cc:"Persistent eosinophilia 4,800 cells/µL on routine CBC — fatigue, borderline troponin elevation"}
  ]},
  { presentation:"Skin/Drug Reactions", cases:[
    {id:"sjs-ten",diagnosis:"SJS/TEN",category:"allergy",acuity:1,cc:"Widespread skin blistering, painful rash, fever after starting new medication"},
    {id:"sjsten-overlap",diagnosis:"SJS/TEN Overlap",category:"allergy",acuity:1,cc:"Mucosal erosions, skin sloughing, high fever after antibiotic"},
    {id:"dress-syndrome",diagnosis:"DRESS Syndrome",category:"allergy",acuity:2,cc:"Fever, diffuse rash, facial swelling 3 weeks after starting new medication"},
    {id:"erythema-multiforme-major",diagnosis:"Erythema Multiforme Major",category:"allergy",acuity:3,cc:"Target-shaped skin lesions, mouth sores, painful rash"}
  ]},
  // ── Allergy Curriculum Expansion ──
  { presentation:"Urticaria", cases:[
    {id:"acute-urticaria",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"ed",allergySubtype:"urticaria",allSettings:true,cc:"Sudden onset hives all over body, itching \u00D7 4hrs"},
    {id:"chronic-spontaneous-urticaria",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"urticaria",allSettings:true,cc:"Daily hives for over 6 weeks, no clear trigger"},
    {id:"urticarial-vasculitis",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"consult",allergySubtype:"urticaria",allSettings:true,cc:"Painful hives that last >24hrs and leave bruise-like marks"}
  ]},
  { presentation:"Food Allergy", cases:[
    {id:"peanut-allergy-anaphylaxis",diagnosis:"Acute Urticaria",category:"allergy",acuity:1,setting:"ed",allergySubtype:"food-allergy",allSettings:true,cc:"Throat tightness, hives, vomiting after eating peanut at party"},
    {id:"food-allergy-oit-reaction",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"clinic",allergySubtype:"food-allergy",allSettings:true,cc:"Hives and stomach pain during oral immunotherapy dose"},
    {id:"milk-allergy-infant",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"consult",allergySubtype:"food-allergy",allSettings:true,cc:"Infant with bloody stools, fussiness, poor feeding on formula"}
  ]},
  { presentation:"FPIES", cases:[
    {id:"fpies-acute",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"ed",allergySubtype:"fpies",allSettings:true,cc:"Infant with profuse vomiting and lethargy 2hrs after feeding"},
    {id:"fpies-chronic",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"consult",allergySubtype:"fpies",allSettings:true,cc:"Infant with chronic diarrhea, poor weight gain, irritability with feeds"}
  ]},
  { presentation:"EoE", cases:[
    {id:"eoe-adult",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"ed",allergySubtype:"eoe",allSettings:true,cc:"Food stuck in throat, difficulty swallowing solids \u00D7 months"},
    {id:"eoe-pediatric",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"consult",allergySubtype:"eoe",allSettings:true,cc:"Child with difficulty swallowing, food refusal, chronic heartburn"}
  ]},
  { presentation:"Atopic Dermatitis", cases:[
    {id:"atopic-dermatitis-severe",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"eczema",allSettings:true,cc:"Severe itchy rash flare, not sleeping, eczema all over"},
    {id:"eczema-herpeticum",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"ed",allergySubtype:"eczema",allSettings:true,cc:"Painful vesicular rash on face, fever, worsening eczema with punched-out lesions"}
  ]},
  { presentation:"Allergic Rhinitis", cases:[
    {id:"allergic-rhinitis-uncontrolled",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"allergic-rhinitis",allSettings:true,cc:"Constant nasal congestion, sneezing, itchy eyes, not controlled with over-the-counter meds"}
  ]},
  { presentation:"Insect Allergy", cases:[
    {id:"insect-sting-anaphylaxis",diagnosis:"Acute Urticaria",category:"allergy",acuity:1,setting:"ed",allergySubtype:"insect-allergy",allSettings:true,cc:"Bee sting 20min ago, now dizzy, hives, feeling faint"},
    {id:"venom-immunotherapy-reaction",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"clinic",allergySubtype:"insect-allergy",allSettings:true,cc:"Hives and wheezing after venom immunotherapy injection"}
  ]},
  { presentation:"Allergic Conjunctivitis", cases:[
    {id:"allergic-conjunctivitis-severe",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"consult",allergySubtype:"allergic-conjunctivitis",allSettings:true,cc:"Severe bilateral eye itching, tearing, swollen lids, blurred vision"}
  ]},
  { presentation:"Drug Allergy", cases:[
    {id:"penicillin-allergy-delabeling",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"consult",allergySubtype:"drug-allergy",allSettings:true,cc:"Reported penicillin allergy as a child, needs antibiotic for surgery"},
    {id:"nsaid-hypersensitivity",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"inpatient",allergySubtype:"drug-allergy",allSettings:true,cc:"Facial swelling and wheezing after taking ibuprofen, nasal polyps"},
    {id:"drug-allergy-vancomycin-rms",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"consult",allergySubtype:"drug-allergy",allSettings:true,cc:"Red flushing of face and chest during vancomycin infusion"}
  ]},
  { presentation:"Mast Cell Disease", cases:[
    {id:"mastocytosis",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"consult",allergySubtype:"mast-cell",allSettings:true,cc:"Flushing episodes, hives with skin stroking, recurrent anaphylaxis"},
    {id:"mcas-mast-cell",diagnosis:"Mast Cell Activation Syndrome (MCAS)",category:"allergy",acuity:3,cc:"Recurrent multisystem flushing, urticaria, GI cramping and near-syncope — tryptase elevated during attacks"},
    {id:"alpha-gal-syndrome",diagnosis:"Alpha-Gal Syndrome",category:"allergy",acuity:3,cc:"Delayed urticaria and anaphylaxis 3–4 hours after red meat — recent Lone Star tick bite history"}
  ]},
  { presentation:"Immunodeficiency", cases:[
    {id:"cvid-presentation",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"immunodeficiency",allSettings:true,cc:"Recurrent sinus and lung infections, 4 courses of antibiotics this year"},
    {id:"xla-brutons",diagnosis:"X-Linked Agammaglobulinemia (XLA)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"immunodeficiency",allSettings:true,cc:"2-year-old male with 4th serious bacterial infection — septic arthritis, recurrent encapsulated bacteria since 6 months"},
    {id:"scid-ada",diagnosis:"Severe Combined Immunodeficiency (ADA-SCID)",category:"allergy",acuity:1,setting:"ed",allergySubtype:"immunodeficiency",allSettings:true,cc:"6-week-old referred urgently — absent TRECs on newborn screening, no symptoms yet"},
    {id:"digeorge-22q11",diagnosis:"DiGeorge Syndrome (22q11.2 Deletion)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"immunodeficiency",allSettings:true,cc:"Newborn with truncus arteriosus, hypocalcemia seizure, and cleft palate — 22q11.2 evaluation"},
    {id:"cgd-xlinked",diagnosis:"Chronic Granulomatous Disease (X-linked CGD)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"immunodeficiency",allSettings:true,cc:"5-year-old with 3rd suppurative lymphadenitis, prior S. aureus liver abscess and Aspergillus pneumonia"}
  ]},
  { presentation:"Contact Dermatitis", cases:[
    {id:"contact-dermatitis-occupational",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"contact-dermatitis",allSettings:true,cc:"Itchy, blistering rash on hands, worse at work"}
  ]},
  {presentation:"Allergy Variations",cases:[
    {id:"anaphylaxis-v2",diagnosis:"Anaphylaxis (Elderly + Beta-Blocker)",category:"allergy",acuity:1,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true,note:"72M on metoprolol, bee sting, blunted tachycardia, lives alone, Mandarin-speaking",cc:"Bee sting, feeling dizzy and weak, swelling at sting site spreading"},
    {id:"anaphylaxis-v3",diagnosis:"Anaphylaxis (Latex, Occupational)",category:"allergy",acuity:1,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true,note:"32F uninsured house cleaner, latex exposure, expired EpiPen, Spanish-speaking",cc:"Difficulty breathing, hives on hands and arms after cleaning with gloves"},
    {id:"anaphylaxis-v4",diagnosis:"Anaphylaxis (Adolescent, Psychosocial)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true,note:"16F peanut, school event, EpiPen embarrassment, food allergy anxiety, social avoidance",cc:"Ate something at school event, throat feels tight, scared to use EpiPen"},
    {id:"anaphylaxis-v5",diagnosis:"Anaphylaxis (Pediatric, Cultural/Language)",category:"allergy",acuity:1,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true,note:"8F sesame, Syrian refugee family, Arabic-only parents, food bank exposure, cultural diet impact",cc:"Child with hives, vomiting, wheezing after eating food from food bank"},
    {id:"chronic-spontaneous-urticaria-v2",diagnosis:"CSU (Refractory + Autoimmune)",category:"allergy",acuity:3,setting:"ed",allergySubtype:"urticaria",allSettings:true,variation:true,note:"55M construction worker, autoimmune thyroiditis, pressure urticaria, depression, divorce stress",cc:"Daily hives for months, worse with pressure from tool belt, nothing is working"},
    {id:"penicillin-allergy-delabeling-v2",diagnosis:"PCN Delabeling (Pregnancy + GBS)",category:"allergy",acuity:3,setting:"consult",allergySubtype:"drug-allergy",allSettings:true,variation:true,note:"38F 34wk pregnant, GBS positive, unverified childhood allergy, urgent delabeling for intrapartum prophylaxis",cc:"Pregnant, GBS positive, told I'm allergic to penicillin as a child, need antibiotics for delivery"},
    {id:"atopic-dermatitis-severe-v2",diagnosis:"Severe AD (Pediatric, SDOH)",category:"allergy",acuity:3,setting:"ed",allergySubtype:"atopic-dermatitis",allSettings:true,variation:true,note:"4M MRSA superinfection, public housing cockroach/mold, single mother, adherence barriers, regimen simplification",cc:"Child's eczema much worse, oozing and crusting, fever, not improving with creams"},
    {id:"peanut-allergy-anaphylaxis-v2",diagnosis:"Food Allergy (Misattributed Trigger)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"food-allergy",allSettings:true,variation:true,note:"3M first reaction, assumed peanut but actually CASHEW, importance of component testing",cc:"Toddler with hives and vomiting after eating trail mix for first time"},
    {id:"eoe-adult-v2",diagnosis:"EoE (Diagnostic Delay)",category:"allergy",acuity:3,setting:"ed",allergySubtype:"eoe",allSettings:true,variation:true,note:"29M 3-year GERD misdiagnosis, adaptive eating behaviors, social impact, food impaction",cc:"Food stuck in chest, can't swallow, been having trouble eating solids for years"}
  ]},
  {presentation:"Allergy Variations — Batch 2-3",cases:[
    {id:"ace-angioedema-v2",diagnosis:"ACE Angioedema (AA Female, CHF, Late-Onset)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"angioedema",allSettings:true,variation:true,cc:"Tongue and lip swelling, been on blood pressure medication for years"},
    {id:"acquired-c1esterase-inhibitor-deficiency-v2",diagnosis:"Acquired C1-INH Deficiency (MGUS-Driven)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"angioedema",allSettings:true,variation:true,cc:"Recurrent facial swelling episodes, antihistamines not helping"},
    {id:"acute-urticaria-v2",diagnosis:"Acute Urticaria (Post-Viral, Unnecessary Testing)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"urticaria",allSettings:true,variation:true,cc:"Hives started after a cold, now all over body × 5 days"},
    {id:"allergic-angioedema-v2",diagnosis:"Allergic Angioedema (Obesity, Epi Dosing)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"angioedema",allSettings:true,variation:true,cc:"Lip and face swelling, used EpiPen but symptoms not fully resolving"},
    {id:"allergic-conjunctivitis-severe-v2",diagnosis:"Vernal Keratoconjunctivitis (Shield Ulcer)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"conjunctivitis",allSettings:true,variation:true,cc:"Severe eye pain, tearing, photophobia, thick stringy discharge from both eyes"},
    {id:"allergic-rhinitis-uncontrolled-v2",diagnosis:"Allergic Rhinitis (Vet Tech, Occupational SCIT)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"rhinitis",allSettings:true,variation:true,cc:"Constant runny nose, sneezing, congestion worse at work with animals"},
    {id:"contact-dermatitis-occupational-v2",diagnosis:"ACD (Hairstylist, PPD, Career Threat)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"contact-dermatitis",allSettings:true,variation:true,cc:"Blistering rash on hands from hair dye, can't work"},
    {id:"cvid-presentation-v2",diagnosis:"CVID (Insurance Crisis, Diagnostic Delay)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"immunodeficiency",allSettings:true,variation:true,cc:"Recurrent pneumonia, chronic sinusitis, lost insurance and missed infusions"},
    {id:"dress-syndrome-v2",diagnosis:"DRESS (Allopurinol, HLA-B*58:01, Korean)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-reactions",allSettings:true,variation:true,cc:"Fever, widespread rash, facial swelling 4 weeks after starting gout medication"},
    {id:"drug-allergy-vancomycin-rms-v2",diagnosis:"Vancomycin RMS (Elderly, False Allergy Cascade)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-allergy",allSettings:true,variation:true,cc:"Red flushing of neck and chest during antibiotic infusion, itching"},
    {id:"eczema-herpeticum-v2",diagnosis:"Eczema Herpeticum (Toddler, Cold Sore Exposure)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"atopic-dermatitis",allSettings:true,variation:true,cc:"Toddler with worsening eczema, painful blisters on face after grandparent visit"},
    {id:"eoe-pediatric-v2",diagnosis:"EoE Pediatric (Picky Eater Misdiagnosis, 6yr Delay)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"eoe",allSettings:true,variation:true,cc:"Child with food refusal, gagging, only eats soft foods, called a picky eater"},
    {id:"erythema-multiforme-major-v2",diagnosis:"EM Major (Recurrent HSV-Triggered)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-reactions",allSettings:true,variation:true,cc:"Target-shaped rash on hands and face, mouth sores, had cold sore last week"},
    {id:"food-allergy-oit-reaction-v2",diagnosis:"OIT Reaction (Swimmer, Exercise Window)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"food-allergy",allSettings:true,variation:true,cc:"Hives and throat tightness after swimming, took OIT dose before practice"},
    {id:"fpies-acute-v2",diagnosis:"FPIES Acute (School Exposure, EpiPen Failure)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"fpies",allSettings:true,variation:true,cc:"Child vomiting profusely and pale after eating at school, EpiPen given with no improvement"},
    {id:"fpies-chronic-v2",diagnosis:"FPIES Chronic (Infant FTT, Reflux Misdiagnosis)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"fpies",allSettings:true,variation:true,cc:"Infant with chronic vomiting, not gaining weight, treated for reflux with no improvement"},
    {id:"hereditary-angioedema-v2",diagnosis:"HAE (College Student, OCP Trigger, Diagnostic Odyssey)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"angioedema",allSettings:true,variation:true,cc:"Recurrent abdominal pain and facial swelling, started after going on birth control"},
    {id:"idiopathic-angioedema-v2",diagnosis:"Idiopathic Angioedema (Travel Anxiety, Omalizumab)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"angioedema",allSettings:true,variation:true,cc:"Lip and eyelid swelling episodes, afraid to travel, no clear trigger"},
    {id:"insect-sting-anaphylaxis-v2",diagnosis:"Venom Anaphylaxis (Uninsured Landscape Worker)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"insect-allergy",allSettings:true,variation:true,cc:"Wasp sting while working, hives spreading, feeling dizzy, no insurance"},
    {id:"mastocytosis-v2",diagnosis:"MCAS (3yr Diagnostic Odyssey, Told Anxiety)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"mast-cell",allSettings:true,variation:true,cc:"Flushing, racing heart, abdominal pain, told it's anxiety for 3 years"},
    {id:"milk-allergy-infant-v2",diagnosis:"CMPA (Breastfed, Mother Misconception)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"food-allergy",allSettings:true,variation:true,cc:"Breastfed infant with bloody stools, eczema, fussy after feeds"},
    {id:"nsaid-hypersensitivity-v2",diagnosis:"AERD/Samter Triad (Chef with Anosmia)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-allergy",allSettings:true,variation:true,cc:"Asthma attack after taking aspirin, nasal polyps, can't smell anymore"},
    {id:"severe-allergic-reaction-v2",diagnosis:"Contrast Reaction (Premedication Failure)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true,cc:"Hives, throat tightness after CT contrast despite taking premedication"},
    {id:"severe-allergic-reaction-v3",diagnosis:"Amoxicillin Delabeling (College Athlete)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-allergy",allSettings:true,variation:true,cc:"Rash as a child with amoxicillin, now needs antibiotic before dental work"},
    {id:"sjs-ten-v2",diagnosis:"SJS/TEN (Lamotrigine, HLA-B*15:13)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-reactions",allSettings:true,variation:true,cc:"Painful skin peeling, blisters, high fever 2 weeks after starting seizure medication"},
    {id:"sjsten-overlap-v2",diagnosis:"SJS/TEN Overlap (HIV + Bactrim)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-reactions",allSettings:true,variation:true,cc:"Widespread skin sloughing, mouth sores, high fever after starting antibiotic"},
    {id:"urticarial-vasculitis-v2",diagnosis:"Urticarial Vasculitis (Hypocomplementemic)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"urticaria",allSettings:true,variation:true,cc:"Painful hives that burn rather than itch, leaving dark marks, joint pain"},
    {id:"venom-immunotherapy-reaction-v2",diagnosis:"VIT Reaction (ACE Inhibitor Amplification)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"insect-allergy",allSettings:true,variation:true,cc:"Lightheaded, flushing, wheezing after allergy shot, on blood pressure medication"}
  ]},
  { presentation:"Trauma", cases:[
    {id:"tension-ptx",diagnosis:"Tension Pneumothorax",category:"trauma",acuity:1,cc:"Chest trauma, severe difficulty breathing, neck veins distended"},
    {id:"epidural-hematoma",diagnosis:"Epidural Hematoma",category:"trauma",acuity:1,cc:"Head injury, brief LOC then lucid, now rapidly declining"}
  ]},
  { presentation:"Vascular Emergency", cases:[
    {id:"aaa-v1",diagnosis:"Ruptured Abdominal Aortic Aneurysm",category:"vascular",acuity:1,cc:"Sudden severe abdominal and back pain, feeling faint"},
    {id:"acute-limb-ischemia",diagnosis:"Acute Limb Ischemia",category:"vascular",acuity:2,cc:"Sudden painful cold left leg, can't feel foot"}
  ]},
  { presentation:"GI Emergency", cases:[
    {id:"gi-bleed-syncope",diagnosis:"Upper GI Hemorrhage with Syncope",category:"gi",acuity:2,cc:"Vomiting blood, black stools, passed out at home"},
    {id:"severe-pancreatitis",diagnosis:"Acute Necrotizing Pancreatitis",category:"gi",acuity:2,cc:"Severe epigastric pain radiating to back, vomiting, fever"}
  ]},
  { presentation:"Obstetric Emergency", cases:[
    {id:"ectopic-pregnancy",diagnosis:"Ruptured Ectopic Pregnancy",category:"obstetric",acuity:1,cc:"Sudden severe lower abdominal pain, vaginal spotting, dizzy"},
    {id:"ectopic-pregnancy-workup",diagnosis:"Ruptured Ectopic Pregnancy — Hemorrhagic Shock — Emergency Salpingectomy",category:"obstetric",acuity:1,cc:"30F G1P0 6wk LMP + positive UPT — left adnexal mass + hemoperitoneum — BP 88/54 — OR now"},
    {id:"eclampsia",diagnosis:"Eclampsia",category:"obstetric",acuity:1,cc:"Pregnant, severe headache, seizure, high blood pressure"}
  ]},
  { presentation:"Pediatric Emergency", cases:[
    {id:"epiglottitis",diagnosis:"Acute Epiglottitis",category:"pediatric",acuity:1,cc:"Child with sore throat, drooling, difficulty swallowing, stridor"},
    {id:"intussusception",diagnosis:"Ileocolic Intussusception",category:"pediatric",acuity:2,cc:"Infant with intermittent crying episodes, currant jelly stools, vomiting"},
    {id:"croup-epiglottitis-ddx",diagnosis:"Moderate Croup — Westley Score 5 — vs Epiglottitis Differential",category:"pediatric",acuity:2,cc:"3yo barky cough + inspiratory stridor — dexamethasone + racemic epinephrine — observe 4h"}
  ]},
  { presentation:"Eye Emergency", cases:[
    {id:"angle-closure-glaucoma",diagnosis:"Acute Angle-Closure Glaucoma",category:"ophthalmology",acuity:2,cc:"Sudden severe eye pain, blurred vision, halos around lights, nausea"},
    {id:"crao",diagnosis:"Central Retinal Artery Occlusion",category:"ophthalmology",acuity:2,cc:"Sudden painless vision loss in one eye, like a curtain coming down"}
  ]},
  { presentation:"Urologic Emergency", cases:[
    {id:"testicular-torsion",diagnosis:"Testicular Torsion",category:"urology",acuity:2,cc:"Sudden severe testicular pain, nausea, swelling"}
  ]},
  { presentation:"ENT / Airway Emergency", cases:[
    {id:"peritonsillar-abscess",diagnosis:"Peritonsillar Abscess",category:"ent",acuity:3,cc:"Severe sore throat, can't swallow, muffled voice, trismus"},
    {id:"ludwigs-angina",diagnosis:"Ludwig Angina",category:"ent",acuity:1,cc:"Floor of mouth swelling, difficulty swallowing and breathing, recent dental pain"}
  ]},
  { presentation:"Geriatric Emergency", cases:[
    {id:"hip-fracture-anticoag",diagnosis:"Hip Fracture on Anticoagulation",category:"geriatric",acuity:3,cc:"Fall, unable to bear weight, on blood thinner"},
    {id:"subdural-hematoma",diagnosis:"Acute-on-Chronic Subdural Hematoma",category:"geriatric",acuity:2,cc:"Elderly, progressive confusion, headache, history of falls, on anticoagulation"}
  ]},
  { presentation:"Environmental Emergency", cases:[
    {id:"heat-stroke",diagnosis:"Exertional Heat Stroke",category:"environmental",acuity:1,cc:"Collapsed during exercise in heat, very hot, confused, not sweating"},
    {id:"severe-hypothermia",diagnosis:"Severe Accidental Hypothermia",category:"environmental",acuity:1,cc:"Found outdoors in cold, unresponsive, very low body temperature"}
  ]}
];
var CASE_MANIFEST = window.CASE_MANIFEST || {};
CASE_MANIFEST.cases = [];
EMR_MANIFEST.forEach(function(g){g.cases.forEach(function(c){CASE_MANIFEST.cases.push(c)})});
CASE_MANIFEST.batches = EMR_MANIFEST;
CASE_MANIFEST.version = '2.0.0';
CASE_MANIFEST.totalCases = CASE_MANIFEST.cases.length;
