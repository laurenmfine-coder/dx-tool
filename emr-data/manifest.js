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
  ]}
];
var CASE_MANIFEST = window.CASE_MANIFEST || {};
CASE_MANIFEST.cases = [];
EMR_MANIFEST.forEach(function(g){g.cases.forEach(function(c){CASE_MANIFEST.cases.push(c)})});
CASE_MANIFEST.batches = EMR_MANIFEST;
CASE_MANIFEST.version = '1.0.0';
CASE_MANIFEST.totalCases = CASE_MANIFEST.cases.length;
