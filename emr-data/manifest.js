/* emr-data/manifest.js — EMR Case Manifest
 * Provides window.EMR_MANIFEST used by admissions, ed-3d, night-float, virtual-emr.
 * Each entry is a batch grouped by presentation.
 */
var EMR_MANIFEST = window.EMR_MANIFEST || [
  { presentation:"Chest Pain", cases:[
    {id:"stemi-v1",diagnosis:"ST-Elevation MI",category:"cardiology",acuity:1},
    {id:"nstemi-v1",diagnosis:"NSTEMI",category:"cardiology",acuity:2},
    {id:"acute-coronary-syndrome",diagnosis:"Acute Coronary Syndrome",category:"cardiology",acuity:2},
    {id:"pe-v1",diagnosis:"Pulmonary Embolism",category:"pulmonary",acuity:1},
    {id:"pericarditis-v1",diagnosis:"Pericarditis",category:"cardiology",acuity:3},
    {id:"aortic-dissection-back",diagnosis:"Aortic Dissection",category:"cardiology",acuity:1},
    {id:"pneumothorax",diagnosis:"Pneumothorax",category:"pulmonary",acuity:2}
  ]},
  { presentation:"Dyspnea", cases:[
    {id:"chf-exacerbation",diagnosis:"CHF Exacerbation",category:"cardiology",acuity:2},
    {id:"copd-v1",diagnosis:"COPD Exacerbation",category:"pulmonary",acuity:2},
    {id:"asthma-exacerbation",diagnosis:"Asthma Exacerbation",category:"pulmonary",acuity:2},
    {id:"pneumonia",diagnosis:"Community-Acquired Pneumonia",category:"infectious",acuity:3},
    {id:"massive-pe-with-rv-failure",diagnosis:"Massive PE with RV Failure",category:"pulmonary",acuity:1}
  ]},
  { presentation:"Altered Mental Status", cases:[
    {id:"dka-v1",diagnosis:"Diabetic Ketoacidosis",category:"endocrine",acuity:1},
    {id:"stroke-v1",diagnosis:"Acute Ischemic Stroke",category:"neurology",acuity:1},
    {id:"meningitis-v1",diagnosis:"Bacterial Meningitis",category:"infectious",acuity:1},
    {id:"status-epilepticus",diagnosis:"Status Epilepticus",category:"neurology",acuity:1},
    {id:"severe-hyponatremia",diagnosis:"Severe Hyponatremia",category:"renal",acuity:2}
  ]},
  { presentation:"Abdominal Pain", cases:[
    {id:"appendicitis-v1",diagnosis:"Acute Appendicitis",category:"surgery",acuity:2},
    {id:"acute-pancreatitis",diagnosis:"Acute Pancreatitis",category:"gi",acuity:2},
    {id:"acute-cholecystitis",diagnosis:"Acute Cholecystitis",category:"gi",acuity:3},
    {id:"sbo-strangulation",diagnosis:"SBO with Strangulation",category:"surgery",acuity:1},
    {id:"mesenteric-ischemia",diagnosis:"Mesenteric Ischemia",category:"surgery",acuity:1},
    {id:"perforated-peptic-ulcer",diagnosis:"Perforated Peptic Ulcer",category:"surgery",acuity:1}
  ]},
  { presentation:"Allergic/Immunologic", cases:[
    {id:"anaphylaxis",diagnosis:"Anaphylaxis",category:"allergy",acuity:1},
    {id:"severe-allergic-reaction",diagnosis:"Severe Allergic Reaction",category:"allergy",acuity:2},
    {id:"ace-angioedema",diagnosis:"ACE Inhibitor Angioedema",category:"allergy",acuity:2},
    {id:"hereditary-angioedema",diagnosis:"Hereditary Angioedema",category:"allergy",acuity:2},
    {id:"allergic-angioedema",diagnosis:"Allergic Angioedema",category:"allergy",acuity:2},
    {id:"idiopathic-angioedema",diagnosis:"Idiopathic Angioedema",category:"allergy",acuity:3},
    {id:"acquired-c1esterase-inhibitor-deficiency",diagnosis:"Acquired C1-INH Deficiency",category:"allergy",acuity:2}
  ]},
  { presentation:"Skin/Drug Reactions", cases:[
    {id:"sjs-ten",diagnosis:"SJS/TEN",category:"allergy",acuity:1},
    {id:"sjsten-overlap",diagnosis:"SJS/TEN Overlap",category:"allergy",acuity:1},
    {id:"dress-syndrome",diagnosis:"DRESS Syndrome",category:"allergy",acuity:2},
    {id:"erythema-multiforme-major",diagnosis:"Erythema Multiforme Major",category:"allergy",acuity:3}
  ]},
  { presentation:"Headache", cases:[
    {id:"sah-v1",diagnosis:"Subarachnoid Hemorrhage",category:"neurology",acuity:1},
    {id:"migraine",diagnosis:"Migraine",category:"neurology",acuity:4}
  ]},
  { presentation:"Fever", cases:[
    {id:"sepsisseptic-shock",diagnosis:"Sepsis/Septic Shock",category:"infectious",acuity:1},
    {id:"neutropenic-fever",diagnosis:"Neutropenic Fever",category:"hematology",acuity:1},
    {id:"infective-endocarditis",diagnosis:"Infective Endocarditis",category:"infectious",acuity:2},
    {id:"pyelonephritis-urosepsis",diagnosis:"Pyelonephritis/Urosepsis",category:"infectious",acuity:2}
  ]},
  { presentation:"Syncope", cases:[
    {id:"cardiac-syncope",diagnosis:"Cardiac Syncope",category:"cardiology",acuity:2},
    {id:"vasovagal-syncope",diagnosis:"Vasovagal Syncope",category:"cardiology",acuity:4},
    {id:"pulmonary-embolism-syncope",diagnosis:"PE with Syncope",category:"pulmonary",acuity:1}
  ]},
  { presentation:"Toxicology", cases:[
    {id:"apap-overdose",diagnosis:"Acetaminophen Overdose",category:"toxicology",acuity:2},
    {id:"serotonin-syndrome",diagnosis:"Serotonin Syndrome",category:"toxicology",acuity:2},
    {id:"salicylate-toxicity",diagnosis:"Salicylate Toxicity",category:"toxicology",acuity:1}
  ]},
  { presentation:"Hematologic", cases:[
    {id:"ttp",diagnosis:"TTP",category:"hematology",acuity:1},
    {id:"sle-flare-with-cytopenias",diagnosis:"SLE Flare with Cytopenias",category:"hematology",acuity:2},
    {id:"autoimmune-hemolytic-anemia",diagnosis:"Autoimmune Hemolytic Anemia",category:"hematology",acuity:2}
  ]},
  { presentation:"Renal/Electrolyte", cases:[
    {id:"hyperkalemia-cardiac",diagnosis:"Hyperkalemia with Cardiac Changes",category:"renal",acuity:1},
    {id:"renal-colic",diagnosis:"Renal Colic",category:"renal",acuity:3}
  ]},
  { presentation:"Endocrine", cases:[
    {id:"thyroid-storm",diagnosis:"Thyroid Storm",category:"endocrine",acuity:1},
    {id:"adrenal-crisis",diagnosis:"Adrenal Crisis",category:"endocrine",acuity:1},
    {id:"myxedema-coma",diagnosis:"Myxedema Coma",category:"endocrine",acuity:1}
  ]},
  // ── Allergy Curriculum Expansion ──
  { presentation:"Urticaria", cases:[
    {id:"acute-urticaria",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"ed",allergySubtype:"urticaria",allSettings:true},
    {id:"chronic-spontaneous-urticaria",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"urticaria",allSettings:true},
    {id:"urticarial-vasculitis",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"consult",allergySubtype:"urticaria",allSettings:true}
  ]},
  { presentation:"Food Allergy", cases:[
    {id:"peanut-allergy-anaphylaxis",diagnosis:"Acute Urticaria",category:"allergy",acuity:1,setting:"ed",allergySubtype:"food-allergy",allSettings:true},
    {id:"food-allergy-oit-reaction",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"clinic",allergySubtype:"food-allergy",allSettings:true},
    {id:"milk-allergy-infant",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"consult",allergySubtype:"food-allergy",allSettings:true}
  ]},
  { presentation:"FPIES", cases:[
    {id:"fpies-acute",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"ed",allergySubtype:"fpies",allSettings:true},
    {id:"fpies-chronic",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"consult",allergySubtype:"fpies",allSettings:true}
  ]},
  { presentation:"EoE", cases:[
    {id:"eoe-adult",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"ed",allergySubtype:"eoe",allSettings:true},
    {id:"eoe-pediatric",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"consult",allergySubtype:"eoe",allSettings:true}
  ]},
  { presentation:"Atopic Dermatitis", cases:[
    {id:"atopic-dermatitis-severe",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"eczema",allSettings:true},
    {id:"eczema-herpeticum",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"ed",allergySubtype:"eczema",allSettings:true}
  ]},
  { presentation:"Allergic Rhinitis", cases:[
    {id:"allergic-rhinitis-uncontrolled",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"allergic-rhinitis",allSettings:true}
  ]},
  { presentation:"Insect Allergy", cases:[
    {id:"insect-sting-anaphylaxis",diagnosis:"Acute Urticaria",category:"allergy",acuity:1,setting:"ed",allergySubtype:"insect-allergy",allSettings:true},
    {id:"venom-immunotherapy-reaction",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"clinic",allergySubtype:"insect-allergy",allSettings:true}
  ]},
  { presentation:"Allergic Conjunctivitis", cases:[
    {id:"allergic-conjunctivitis-severe",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"consult",allergySubtype:"allergic-conjunctivitis",allSettings:true}
  ]},
  { presentation:"Drug Allergy", cases:[
    {id:"penicillin-allergy-delabeling",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"consult",allergySubtype:"drug-allergy",allSettings:true},
    {id:"nsaid-hypersensitivity",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"inpatient",allergySubtype:"drug-allergy",allSettings:true},
    {id:"drug-allergy-vancomycin-rms",diagnosis:"Acute Urticaria",category:"allergy",acuity:3,setting:"consult",allergySubtype:"drug-allergy",allSettings:true}
  ]},
  { presentation:"Mast Cell Disease", cases:[
    {id:"mastocytosis",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"consult",allergySubtype:"mast-cell",allSettings:true}
  ]},
  { presentation:"Immunodeficiency", cases:[
    {id:"cvid-presentation",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"immunodeficiency",allSettings:true}
  ]},
  { presentation:"Contact Dermatitis", cases:[
    {id:"contact-dermatitis-occupational",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"contact-dermatitis",allSettings:true}
  ]},
  {presentation:"Allergy Variations",cases:[
    {id:"anaphylaxis-v2",diagnosis:"Anaphylaxis (Elderly + Beta-Blocker)",category:"allergy",acuity:1,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true,note:"72M on metoprolol, bee sting, blunted tachycardia, lives alone, Mandarin-speaking"},
    {id:"anaphylaxis-v3",diagnosis:"Anaphylaxis (Latex, Occupational)",category:"allergy",acuity:1,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true,note:"32F uninsured house cleaner, latex exposure, expired EpiPen, Spanish-speaking"},
    {id:"anaphylaxis-v4",diagnosis:"Anaphylaxis (Adolescent, Psychosocial)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true,note:"16F peanut, school event, EpiPen embarrassment, food allergy anxiety, social avoidance"},
    {id:"anaphylaxis-v5",diagnosis:"Anaphylaxis (Pediatric, Cultural/Language)",category:"allergy",acuity:1,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true,note:"8F sesame, Syrian refugee family, Arabic-only parents, food bank exposure, cultural diet impact"},
    {id:"chronic-spontaneous-urticaria-v2",diagnosis:"CSU (Refractory + Autoimmune)",category:"allergy",acuity:3,setting:"ed",allergySubtype:"urticaria",allSettings:true,variation:true,note:"55M construction worker, autoimmune thyroiditis, pressure urticaria, depression, divorce stress"},
    {id:"penicillin-allergy-delabeling-v2",diagnosis:"PCN Delabeling (Pregnancy + GBS)",category:"allergy",acuity:3,setting:"consult",allergySubtype:"drug-allergy",allSettings:true,variation:true,note:"38F 34wk pregnant, GBS positive, unverified childhood allergy, urgent delabeling for intrapartum prophylaxis"},
    {id:"atopic-dermatitis-severe-v2",diagnosis:"Severe AD (Pediatric, SDOH)",category:"allergy",acuity:3,setting:"ed",allergySubtype:"atopic-dermatitis",allSettings:true,variation:true,note:"4M MRSA superinfection, public housing cockroach/mold, single mother, adherence barriers, regimen simplification"},
    {id:"peanut-allergy-anaphylaxis-v2",diagnosis:"Food Allergy (Misattributed Trigger)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"food-allergy",allSettings:true,variation:true,note:"3M first reaction, assumed peanut but actually CASHEW, importance of component testing"},
    {id:"eoe-adult-v2",diagnosis:"EoE (Diagnostic Delay)",category:"allergy",acuity:3,setting:"ed",allergySubtype:"eoe",allSettings:true,variation:true,note:"29M 3-year GERD misdiagnosis, adaptive eating behaviors, social impact, food impaction"}
  ]},
  {presentation:"Allergy Variations — Batch 2-3",cases:[
    {id:"ace-angioedema-v2",diagnosis:"ACE Angioedema (AA Female, CHF, Late-Onset)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"angioedema",allSettings:true,variation:true},
    {id:"acquired-c1esterase-inhibitor-deficiency-v2",diagnosis:"Acquired C1-INH Deficiency (MGUS-Driven)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"angioedema",allSettings:true,variation:true},
    {id:"acute-urticaria-v2",diagnosis:"Acute Urticaria (Post-Viral, Unnecessary Testing)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"urticaria",allSettings:true,variation:true},
    {id:"allergic-angioedema-v2",diagnosis:"Allergic Angioedema (Obesity, Epi Dosing)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"angioedema",allSettings:true,variation:true},
    {id:"allergic-conjunctivitis-severe-v2",diagnosis:"Vernal Keratoconjunctivitis (Shield Ulcer)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"conjunctivitis",allSettings:true,variation:true},
    {id:"allergic-rhinitis-uncontrolled-v2",diagnosis:"Allergic Rhinitis (Vet Tech, Occupational SCIT)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"rhinitis",allSettings:true,variation:true},
    {id:"contact-dermatitis-occupational-v2",diagnosis:"ACD (Hairstylist, PPD, Career Threat)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"contact-dermatitis",allSettings:true,variation:true},
    {id:"cvid-presentation-v2",diagnosis:"CVID (Insurance Crisis, Diagnostic Delay)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"immunodeficiency",allSettings:true,variation:true},
    {id:"dress-syndrome-v2",diagnosis:"DRESS (Allopurinol, HLA-B*58:01, Korean)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-reactions",allSettings:true,variation:true},
    {id:"drug-allergy-vancomycin-rms-v2",diagnosis:"Vancomycin RMS (Elderly, False Allergy Cascade)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-allergy",allSettings:true,variation:true},
    {id:"eczema-herpeticum-v2",diagnosis:"Eczema Herpeticum (Toddler, Cold Sore Exposure)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"atopic-dermatitis",allSettings:true,variation:true},
    {id:"eoe-pediatric-v2",diagnosis:"EoE Pediatric (Picky Eater Misdiagnosis, 6yr Delay)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"eoe",allSettings:true,variation:true},
    {id:"erythema-multiforme-major-v2",diagnosis:"EM Major (Recurrent HSV-Triggered)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-reactions",allSettings:true,variation:true},
    {id:"food-allergy-oit-reaction-v2",diagnosis:"OIT Reaction (Swimmer, Exercise Window)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"food-allergy",allSettings:true,variation:true},
    {id:"fpies-acute-v2",diagnosis:"FPIES Acute (School Exposure, EpiPen Failure)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"fpies",allSettings:true,variation:true},
    {id:"fpies-chronic-v2",diagnosis:"FPIES Chronic (Infant FTT, Reflux Misdiagnosis)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"fpies",allSettings:true,variation:true},
    {id:"hereditary-angioedema-v2",diagnosis:"HAE (College Student, OCP Trigger, Diagnostic Odyssey)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"angioedema",allSettings:true,variation:true},
    {id:"idiopathic-angioedema-v2",diagnosis:"Idiopathic Angioedema (Travel Anxiety, Omalizumab)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"angioedema",allSettings:true,variation:true},
    {id:"insect-sting-anaphylaxis-v2",diagnosis:"Venom Anaphylaxis (Uninsured Landscape Worker)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"insect-allergy",allSettings:true,variation:true},
    {id:"mastocytosis-v2",diagnosis:"MCAS (3yr Diagnostic Odyssey, Told Anxiety)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"mast-cell",allSettings:true,variation:true},
    {id:"milk-allergy-infant-v2",diagnosis:"CMPA (Breastfed, Mother Misconception)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"food-allergy",allSettings:true,variation:true},
    {id:"nsaid-hypersensitivity-v2",diagnosis:"AERD/Samter Triad (Chef with Anosmia)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-allergy",allSettings:true,variation:true},
    {id:"severe-allergic-reaction-v2",diagnosis:"Contrast Reaction (Premedication Failure)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true},
    {id:"severe-allergic-reaction-v3",diagnosis:"Amoxicillin Delabeling (College Athlete)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-allergy",allSettings:true,variation:true},
    {id:"sjs-ten-v2",diagnosis:"SJS/TEN (Lamotrigine, HLA-B*15:13)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-reactions",allSettings:true,variation:true},
    {id:"sjsten-overlap-v2",diagnosis:"SJS/TEN Overlap (HIV + Bactrim)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-reactions",allSettings:true,variation:true},
    {id:"urticarial-vasculitis-v2",diagnosis:"Urticarial Vasculitis (Hypocomplementemic)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"urticaria",allSettings:true,variation:true},
    {id:"venom-immunotherapy-reaction-v2",diagnosis:"VIT Reaction (ACE Inhibitor Amplification)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"insect-allergy",allSettings:true,variation:true}
  ]}
];
var CASE_MANIFEST = window.CASE_MANIFEST || {};
CASE_MANIFEST.cases = [];
EMR_MANIFEST.forEach(function(g){g.cases.forEach(function(c){CASE_MANIFEST.cases.push(c)})});
CASE_MANIFEST.batches = EMR_MANIFEST;
CASE_MANIFEST.version = '1.0.0';
CASE_MANIFEST.totalCases = CASE_MANIFEST.cases.length;
