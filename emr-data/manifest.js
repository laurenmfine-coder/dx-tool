/* emr-data/manifest.js — EMR Case Manifest
 * Provides window.EMR_MANIFEST used by admissions, ed-3d, night-float, virtual-emr.
 * Each entry is a batch grouped by presentation.
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
    {id:"asthma-exacerbation",diagnosis:"Asthma Exacerbation",category:"pulmonary",acuity:2,cc:"Wheezing and difficulty breathing, inhaler not helping"},
    {id:"pneumonia",diagnosis:"Community-Acquired Pneumonia",category:"infectious",acuity:3,cc:"Fever, cough with yellow sputum, shortness of breath \u00D7 4 days"},
    {id:"massive-pe-with-rv-failure",diagnosis:"Massive PE with RV Failure",category:"pulmonary",acuity:1,cc:"Sudden severe dyspnea, near-syncope, cannot catch breath"}
  ]},
  { presentation:"Altered Mental Status", cases:[
    {id:"dka-v1",diagnosis:"Diabetic Ketoacidosis",category:"endocrine",acuity:1,cc:"Nausea, vomiting, abdominal pain, increasingly confused \u00D7 2 days"},
    {id:"stroke-v1",diagnosis:"Acute Ischemic Stroke",category:"neurology",acuity:1,cc:"Sudden left-sided weakness and slurred speech \u00D7 45min"},
    {id:"meningitis-v1",diagnosis:"Bacterial Meningitis",category:"infectious",acuity:1,cc:"Severe headache, neck stiffness, fever, photophobia"},
    {id:"status-epilepticus",diagnosis:"Status Epilepticus",category:"neurology",acuity:1,cc:"Witnessed seizure, not stopping, ongoing convulsions"},
    {id:"severe-hyponatremia",diagnosis:"Severe Hyponatremia",category:"renal",acuity:2,cc:"Confusion, lethargy, found acting strange by family"}
  ]},
  { presentation:"Abdominal Pain", cases:[
    {id:"appendicitis-v1",diagnosis:"Acute Appendicitis",category:"surgery",acuity:2,cc:"RLQ abdominal pain, nausea, low-grade fever \u00D7 18hrs"},
    {id:"acute-pancreatitis",diagnosis:"Acute Pancreatitis",category:"gi",acuity:2,cc:"Severe epigastric pain radiating to back after drinking"},
    {id:"acute-cholecystitis",diagnosis:"Acute Cholecystitis",category:"gi",acuity:3,cc:"RUQ pain after eating, worse with fatty food, nausea"},
    {id:"sbo-strangulation",diagnosis:"SBO with Strangulation",category:"surgery",acuity:1,cc:"Abdominal distension, bilious vomiting, severe crampy pain"},
    {id:"mesenteric-ischemia",diagnosis:"Mesenteric Ischemia",category:"surgery",acuity:1,cc:"Severe abdominal pain out of proportion to exam, bloody stool"},
    {id:"perforated-peptic-ulcer",diagnosis:"Perforated Peptic Ulcer",category:"surgery",acuity:1,cc:"Sudden onset severe epigastric pain, rigid abdomen"}
  ]},
  { presentation:"Allergic/Immunologic", cases:[
    {id:"anaphylaxis",diagnosis:"Anaphylaxis",category:"allergy",acuity:1,cc:"Lip swelling, hives, throat tightness after eating"},
    {id:"severe-allergic-reaction",diagnosis:"Severe Allergic Reaction",category:"allergy",acuity:2,cc:"Widespread hives, facial swelling after taking medication"},
    {id:"ace-angioedema",diagnosis:"ACE Inhibitor Angioedema",category:"allergy",acuity:2,cc:"Tongue and lip swelling, difficulty swallowing, on lisinopril"},
    {id:"hereditary-angioedema",diagnosis:"Hereditary Angioedema",category:"allergy",acuity:2,cc:"Recurrent facial swelling and severe abdominal pain, family history of similar episodes"},
    {id:"allergic-angioedema",diagnosis:"Allergic Angioedema",category:"allergy",acuity:2,cc:"Acute facial and lip swelling after new medication"},
    {id:"idiopathic-angioedema",diagnosis:"Idiopathic Angioedema",category:"allergy",acuity:3,cc:"Recurrent episodes of hand and facial swelling, no clear trigger"},
    {id:"acquired-c1esterase-inhibitor-deficiency",diagnosis:"Acquired C1-INH Deficiency",category:"allergy",acuity:2,cc:"Recurrent facial swelling and abdominal pain, not responding to antihistamines"}
  ]},
  { presentation:"Skin/Drug Reactions", cases:[
    {id:"sjs-ten",diagnosis:"SJS/TEN",category:"allergy",acuity:1,cc:"Widespread skin blistering, painful rash, fever after starting new medication"},
    {id:"sjsten-overlap",diagnosis:"SJS/TEN Overlap",category:"allergy",acuity:1,cc:"Mucosal erosions, skin sloughing, high fever after antibiotic"},
    {id:"dress-syndrome",diagnosis:"DRESS Syndrome",category:"allergy",acuity:2,cc:"Fever, diffuse rash, facial swelling 3 weeks after starting new medication"},
    {id:"erythema-multiforme-major",diagnosis:"Erythema Multiforme Major",category:"allergy",acuity:3,cc:"Target-shaped skin lesions, mouth sores, painful rash"}
  ]},
  { presentation:"Headache", cases:[
    {id:"sah-v1",diagnosis:"Subarachnoid Hemorrhage",category:"neurology",acuity:1,cc:"Sudden worst headache of my life, neck stiffness"},
    {id:"migraine",diagnosis:"Migraine",category:"neurology",acuity:4,cc:"Severe throbbing headache with aura, nausea, photophobia \u00D7 6hrs"}
  ]},
  { presentation:"Fever", cases:[
    {id:"sepsisseptic-shock",diagnosis:"Sepsis/Septic Shock",category:"infectious",acuity:1,cc:"High fever, chills, confusion, feeling very ill \u00D7 1 day"},
    {id:"neutropenic-fever",diagnosis:"Neutropenic Fever",category:"hematology",acuity:1,cc:"Fever and chills on chemotherapy, feeling weak"},
    {id:"infective-endocarditis",diagnosis:"Infective Endocarditis",category:"infectious",acuity:2,cc:"Persistent low-grade fever, night sweats, new heart murmur noted"},
    {id:"pyelonephritis-urosepsis",diagnosis:"Pyelonephritis/Urosepsis",category:"infectious",acuity:2,cc:"Flank pain, fever, burning with urination, rigors"}
  ]},
  { presentation:"Syncope", cases:[
    {id:"cardiac-syncope",diagnosis:"Cardiac Syncope",category:"cardiology",acuity:2,cc:"Passed out without warning while sitting, palpitations before"},
    {id:"vasovagal-syncope",diagnosis:"Vasovagal Syncope",category:"cardiology",acuity:4,cc:"Felt lightheaded then passed out briefly, came right back"},
    {id:"pulmonary-embolism-syncope",diagnosis:"PE with Syncope",category:"pulmonary",acuity:1,cc:"Sudden collapse, brief LOC, now short of breath and chest pain"}
  ]},
  { presentation:"Toxicology", cases:[
    {id:"apap-overdose",diagnosis:"Acetaminophen Overdose",category:"toxicology",acuity:2,cc:"Took a bottle of Tylenol, nausea, RUQ pain"},
    {id:"serotonin-syndrome",diagnosis:"Serotonin Syndrome",category:"toxicology",acuity:2,cc:"Agitation, tremor, diaphoresis, recently started new antidepressant"},
    {id:"salicylate-toxicity",diagnosis:"Salicylate Toxicity",category:"toxicology",acuity:1,cc:"Tinnitus, rapid breathing, confusion after taking many aspirin"}
  ]},
  { presentation:"Hematologic", cases:[
    {id:"ttp",diagnosis:"TTP",category:"hematology",acuity:1,cc:"Easy bruising, confusion, petechiae, dark urine"},
    {id:"sle-flare-with-cytopenias",diagnosis:"SLE Flare with Cytopenias",category:"hematology",acuity:2,cc:"Joint pain, fatigue, rash, low blood counts found on labs"},
    {id:"autoimmune-hemolytic-anemia",diagnosis:"Autoimmune Hemolytic Anemia",category:"hematology",acuity:2,cc:"Fatigue, jaundice, dark urine, feeling lightheaded"}
  ]},
  { presentation:"Renal/Electrolyte", cases:[
    {id:"hyperkalemia-cardiac",diagnosis:"Hyperkalemia with Cardiac Changes",category:"renal",acuity:1,cc:"Generalized weakness, missed dialysis \u00D7 2 sessions, palpitations"},
    {id:"renal-colic",diagnosis:"Renal Colic",category:"renal",acuity:3,cc:"Severe left flank pain, hematuria, cannot sit still"}
  ]},
  { presentation:"Endocrine", cases:[
    {id:"thyroid-storm",diagnosis:"Thyroid Storm",category:"endocrine",acuity:1,cc:"High fever, racing heart, agitation, tremor, known thyroid disease"},
    {id:"adrenal-crisis",diagnosis:"Adrenal Crisis",category:"endocrine",acuity:1,cc:"Severe weakness, hypotension, abdominal pain, on chronic steroids that were stopped"},
    {id:"myxedema-coma",diagnosis:"Myxedema Coma",category:"endocrine",acuity:1,cc:"Found lethargic, hypothermic, bradycardic, known hypothyroidism"}
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
    {id:"mastocytosis",diagnosis:"Acute Urticaria",category:"allergy",acuity:2,setting:"consult",allergySubtype:"mast-cell",allSettings:true,cc:"Flushing episodes, hives with skin stroking, recurrent anaphylaxis"}
  ]},
  { presentation:"Immunodeficiency", cases:[
    {id:"cvid-presentation",diagnosis:"Acute Urticaria",category:"allergy",acuity:4,setting:"clinic",allergySubtype:"immunodeficiency",allSettings:true,cc:"Recurrent sinus and lung infections, 4 courses of antibiotics this year"}
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
    {id:"contact-dermatitis-occupational-v2",diagnosis:"ACD (Hairstylist, PPD, Career Threat)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"contact-dermatitis",allSettings:true,variation:true,cc:"Blistering rash on hands from hair dye, can’t work"},
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
    {id:"mastocytosis-v2",diagnosis:"MCAS (3yr Diagnostic Odyssey, Told Anxiety)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"mast-cell",allSettings:true,variation:true,cc:"Flushing, racing heart, abdominal pain, told it’s anxiety for 3 years"},
    {id:"milk-allergy-infant-v2",diagnosis:"CMPA (Breastfed, Mother Misconception)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"food-allergy",allSettings:true,variation:true,cc:"Breastfed infant with bloody stools, eczema, fussy after feeds"},
    {id:"nsaid-hypersensitivity-v2",diagnosis:"AERD/Samter Triad (Chef with Anosmia)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-allergy",allSettings:true,variation:true,cc:"Asthma attack after taking aspirin, nasal polyps, can’t smell anymore"},
    {id:"severe-allergic-reaction-v2",diagnosis:"Contrast Reaction (Premedication Failure)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"anaphylaxis",allSettings:true,variation:true,cc:"Hives, throat tightness after CT contrast despite taking premedication"},
    {id:"severe-allergic-reaction-v3",diagnosis:"Amoxicillin Delabeling (College Athlete)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-allergy",allSettings:true,variation:true,cc:"Rash as a child with amoxicillin, now needs antibiotic before dental work"},
    {id:"sjs-ten-v2",diagnosis:"SJS/TEN (Lamotrigine, HLA-B*15:13)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-reactions",allSettings:true,variation:true,cc:"Painful skin peeling, blisters, high fever 2 weeks after starting seizure medication"},
    {id:"sjsten-overlap-v2",diagnosis:"SJS/TEN Overlap (HIV + Bactrim)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"drug-reactions",allSettings:true,variation:true,cc:"Widespread skin sloughing, mouth sores, high fever after starting antibiotic"},
    {id:"urticarial-vasculitis-v2",diagnosis:"Urticarial Vasculitis (Hypocomplementemic)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"urticaria",allSettings:true,variation:true,cc:"Painful hives that burn rather than itch, leaving dark marks, joint pain"},
    {id:"venom-immunotherapy-reaction-v2",diagnosis:"VIT Reaction (ACE Inhibitor Amplification)",category:"allergy",acuity:2,setting:"ed",allergySubtype:"insect-allergy",allSettings:true,variation:true,cc:"Lightheaded, flushing, wheezing after allergy shot, on blood pressure medication"}
  ]},
  // ═══ CRT Board-Only Cases (32 additional cases from ed-board-v2 CRT engine) ═══
  { presentation:"Trauma", cases:[
    {id:"tension-ptx",diagnosis:"Tension Pneumothorax",category:"trauma",acuity:1,cc:"Chest trauma, severe difficulty breathing, neck veins distended"},
    {id:"epidural-hematoma",diagnosis:"Epidural Hematoma",category:"trauma",acuity:1,cc:"Head injury, brief LOC then lucid, now rapidly declining"}
  ]},
  { presentation:"Cardiac Emergency", cases:[
    {id:"cardiac-tamponade",diagnosis:"Cardiac Tamponade",category:"cardiac",acuity:1,cc:"Chest pain, shortness of breath, muffled heart sounds, hypotension"},
    {id:"complete-heart-block",diagnosis:"Complete Heart Block",category:"cardiac",acuity:2,cc:"Dizzy spells, near-syncope, heart rate in the 30s"},
    {id:"vt-syncope",diagnosis:"Ventricular Tachycardia with Syncope",category:"cardiology",acuity:2,cc:"Passed out at home, palpitations, chest discomfort"},
    {id:"chf-v1",diagnosis:"Acute Decompensated Heart Failure",category:"cardiology",acuity:2,cc:"Can't breathe lying down, legs very swollen, gained 15 lbs in a week"}
  ]},
  { presentation:"Vascular Emergency", cases:[
    {id:"aaa-v1",diagnosis:"Ruptured Abdominal Aortic Aneurysm",category:"vascular",acuity:1,cc:"Sudden severe abdominal and back pain, feeling faint"},
    {id:"acute-limb-ischemia",diagnosis:"Acute Limb Ischemia",category:"vascular",acuity:2,cc:"Sudden painful cold left leg, can’t feel foot"}
  ]},
  { presentation:"GI Emergency", cases:[
    {id:"gi-bleed-syncope",diagnosis:"Upper GI Hemorrhage with Syncope",category:"gi",acuity:2,cc:"Vomiting blood, black stools, passed out at home"},
    {id:"severe-pancreatitis",diagnosis:"Acute Necrotizing Pancreatitis",category:"gi",acuity:2,cc:"Severe epigastric pain radiating to back, vomiting, fever"}
  ]},
  { presentation:"Obstetric Emergency", cases:[
    {id:"ectopic-pregnancy",diagnosis:"Ruptured Ectopic Pregnancy",category:"obstetric",acuity:1,cc:"Sudden severe lower abdominal pain, vaginal spotting, dizzy"},
    {id:"eclampsia",diagnosis:"Eclampsia",category:"obstetric",acuity:1,cc:"Pregnant, severe headache, seizure, high blood pressure"}
  ]},
  { presentation:"Pediatric Emergency", cases:[
    {id:"epiglottitis",diagnosis:"Acute Epiglottitis",category:"pediatric",acuity:1,cc:"Child with sore throat, drooling, difficulty swallowing, stridor"},
    {id:"intussusception",diagnosis:"Ileocolic Intussusception",category:"pediatric",acuity:2,cc:"Infant with intermittent crying episodes, currant jelly stools, vomiting"}
  ]},
  { presentation:"Neurologic Emergency", cases:[
    {id:"new-seizure-mass",diagnosis:"New-Onset Seizure (Brain Mass)",category:"neurology",acuity:2,cc:"New-onset seizure, no prior history, persistent headache"},
    {id:"cauda-equina",diagnosis:"Cauda Equina Syndrome",category:"neurology",acuity:2,cc:"Severe low back pain, bilateral leg weakness, trouble urinating"}
  ]},
  { presentation:"Psychiatric Emergency", cases:[
    {id:"nms",diagnosis:"Neuroleptic Malignant Syndrome",category:"psychiatric",acuity:2,cc:"High fever, severe muscle rigidity, confusion, on antipsychotic"}
  ]},
  { presentation:"Infectious Emergency", cases:[
    {id:"septic-shock-urosepsis",diagnosis:"Septic Shock (Urosepsis)",category:"infectious",acuity:1,cc:"High fever, confusion, low blood pressure, urinary symptoms"},
    {id:"nec-fasciitis",diagnosis:"Necrotizing Fasciitis",category:"infectious",acuity:1,cc:"Rapidly spreading painful red skin, blistering, high fever, toxic-appearing"},
    {id:"fournier-gangrene",diagnosis:"Fournier Gangrene",category:"infectious",acuity:1,cc:"Severe perineal pain, swelling, fever, foul-smelling drainage"}
  ]},
  { presentation:"Eye Emergency", cases:[
    {id:"angle-closure-glaucoma",diagnosis:"Acute Angle-Closure Glaucoma",category:"ophthalmology",acuity:2,cc:"Sudden severe eye pain, blurred vision, halos around lights, nausea"},
    {id:"crao",diagnosis:"Central Retinal Artery Occlusion",category:"ophthalmology",acuity:2,cc:"Sudden painless vision loss in one eye, like a curtain coming down"}
  ]},
  { presentation:"Urologic Emergency", cases:[
    {id:"testicular-torsion",diagnosis:"Testicular Torsion",category:"urology",acuity:2,cc:"Sudden severe testicular pain, nausea, swelling"}
  ]},
  { presentation:"ENT / Airway Emergency", cases:[
    {id:"peritonsillar-abscess",diagnosis:"Peritonsillar Abscess",category:"ent",acuity:3,cc:"Severe sore throat, can’t swallow, muffled voice, trismus"},
    {id:"ludwigs-angina",diagnosis:"Ludwig Angina",category:"ent",acuity:1,cc:"Floor of mouth swelling, difficulty swallowing and breathing, recent dental pain"}
  ]},
  { presentation:"Geriatric Emergency", cases:[
    {id:"hip-fracture-anticoag",diagnosis:"Hip Fracture on Anticoagulation",category:"geriatric",acuity:3,cc:"Fall, unable to bear weight, on blood thinner"},
    {id:"subdural-hematoma",diagnosis:"Acute-on-Chronic Subdural Hematoma",category:"geriatric",acuity:2,cc:"Elderly, progressive confusion, headache, history of falls, on anticoagulation"}
  ]},
  { presentation:"Environmental Emergency", cases:[
    {id:"heat-stroke",diagnosis:"Exertional Heat Stroke",category:"environmental",acuity:1,cc:"Collapsed during exercise in heat, very hot, confused, not sweating"},
    {id:"severe-hypothermia",diagnosis:"Severe Accidental Hypothermia",category:"environmental",acuity:1,cc:"Found outdoors in cold, unresponsive, very low body temperature"}
  ]},
  { presentation:"Hematologic Emergency", cases:[
    {id:"dic-massive-transfusion",diagnosis:"DIC with Massive Hemorrhage",category:"hematology",acuity:1,cc:"Bleeding from multiple sites, oozing from IV sites, recent surgery"}
  ]},
  { presentation:"Musculoskeletal Emergency", cases:[
    {id:"septic-arthritis",diagnosis:"Septic Arthritis",category:"musculoskeletal",acuity:3,cc:"Acutely hot, swollen, painful knee, fever, can’t bend it"},
    {id:"compartment-syndrome",diagnosis:"Acute Compartment Syndrome",category:"musculoskeletal",acuity:2,cc:"Severe leg pain after injury, pain with passive stretch, tense swelling"}
  ]}
];
var CASE_MANIFEST = window.CASE_MANIFEST || {};
CASE_MANIFEST.cases = [];
EMR_MANIFEST.forEach(function(g){g.cases.forEach(function(c){CASE_MANIFEST.cases.push(c)})});
CASE_MANIFEST.batches = EMR_MANIFEST;
CASE_MANIFEST.version = '1.0.0';
CASE_MANIFEST.totalCases = CASE_MANIFEST.cases.length;
