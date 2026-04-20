#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"aadc-deficiency": {
  "diagnosis": "AADC Deficiency — Aromatic L-Amino Acid Decarboxylase Deficiency, Infant with Movement Disorder and Oculogyric Crises",
  "problems": [
    {"problem":"AADC deficiency — confirmed on enzyme assay","icd":"E70.89","onset":"2024","status":"Active","notes":"DDC gene mutation confirmed. Urine vanillylactic acid elevated; HVA and 5-HIAA low."},
    {"problem":"Oculogyric crises — episodic upward eye deviation","icd":"H51.8","onset":"2024","status":"Active","notes":"Triggered by stimulation or fever. Lasts minutes to hours. Hallmark of AADC deficiency."},
    {"problem":"Hypotonia — severe axial and appendicular","icd":"P94.2","onset":"Birth","status":"Active","notes":"Unable to achieve head control. Feeding difficulties requiring NG tube supplementation."},
    {"problem":"Autonomic instability — ptosis, mottling, temperature dysregulation","icd":"G90.9","onset":"Birth","status":"Active","notes":"Dopamine and serotonin deficiency affects autonomic nervous system globally."}
  ],
  "medications": [
    {"name":"Pyridoxine (B6) 30mg/kg/day divided TID","sig":"Cofactor for AADC enzyme — partial activity enhancement in some mutations","prescriber":"Neurology/Genetics","start":"2024","refills":5,"status":"Active"},
    {"name":"Selegiline 0.1mg/kg/day (MAO-B inhibitor)","sig":"Inhibits dopamine breakdown — compensates for reduced synthesis","prescriber":"Neurology","start":"2024","refills":3,"status":"Active"},
    {"name":"Pramipexole 0.05mg/kg/day (dopamine agonist)","sig":"Direct dopamine receptor stimulation — bypasses synthesis defect","prescriber":"Neurology","start":"2024","refills":3,"status":"Active"}
  ],
  "labs": [{"date":"01/2024","panel":"AADC Diagnostic Panel","results":[
    {"test":"Plasma AADC enzyme activity","value":"2","unit":"nmol/hr/mL","ref":"5-25","flag":"L"},
    {"test":"CSF HVA (homovanillic acid)","value":"18","unit":"nmol/L","ref":"90-250","flag":"L"},
    {"test":"CSF 5-HIAA","value":"12","unit":"nmol/L","ref":"80-250","flag":"L"},
    {"test":"Urine vanillylactic acid","value":"Elevated","unit":"","ref":"Undetectable","flag":"H"},
    {"test":"CSF 3-O-methyldopa","value":"Elevated","unit":"","ref":"Undetectable","flag":"H"}
  ]}],
  "imaging": [{"date":"01/2024","study":"MRI Brain","indication":"Hypotonia and developmental delay workup","findings":"No structural abnormality. Cerebellum normal.","impression":"Normal MRI — structural causes of hypotonia excluded. Supports metabolic/enzymatic diagnosis."}],
  "ddxTargets": ["AADC deficiency — oculogyric crises + hypotonia + low CSF HVA/5-HIAA (correct)","Cerebral palsy — normal MRI excludes structural cause","Spinal muscular atrophy — no oculogyric crises; EMG/genetic testing differs","Mitochondrial disease — different metabolic profile","Dopamine transporter deficiency (SLC6A3) — similar phenotype, different CSF profile","Infantile Parkinsonism-dystonia — related disorder, differentiated by enzyme assay"],
  "coachFinal": "Diagnosis: AADC deficiency. Key learning: (1) AADC converts L-DOPA → dopamine AND 5-HTP → serotonin. Deficiency = combined dopaminergic AND serotonergic failure — explains oculogyric crises, autonomic instability, and hypotonia. (2) CSF pattern is diagnostic: low HVA (dopamine metabolite), low 5-HIAA (serotonin metabolite), elevated 3-O-methyldopa (L-DOPA backs up upstream). Plasma enzyme activity confirms. (3) Oculogyric crises are pathognomonic — episodic sustained upward or lateral eye deviation, often with neck extension. In any infant with hypotonia + OGC, AADC deficiency must be excluded. (4) Treatment hierarchy: pyridoxine (cofactor) → MAO-B inhibitors → dopamine agonists → gene therapy (AAV2-DDC, approved in some countries). (5) Prognosis with gene therapy is dramatically improving — early diagnosis is critical for neurodevelopmental outcome."
},
"ace-angioedema-v2": {
  "diagnosis": "ACE Inhibitor-Induced Angioedema — Bradykinin-Mediated, No Urticaria, Lisinopril Discontinuation Required",
  "problems": [
    {"problem":"ACE inhibitor-induced angioedema — lisinopril","icd":"T46.4X5A","onset":"2024","status":"Active","notes":"Lip and tongue swelling without urticaria. On lisinopril 3 years — can occur any time after initiation."},
    {"problem":"Airway risk — tongue involvement","icd":"J38.4","onset":"2024","status":"Active","notes":"Tongue angioedema can progress to laryngeal involvement. Serial airway exams q30 minutes."},
    {"problem":"Hypertension — requires alternative antihypertensive","icd":"I10","onset":"2019","status":"Active","notes":"ARB is safe alternative — does not cause bradykinin-mediated angioedema by same mechanism."}
  ],
  "medications": [
    {"name":"STOP lisinopril immediately — permanent discontinuation","sig":"Document allergy. Do NOT switch to another ACE inhibitor.","prescriber":"ED/Allergy","start":"2024","refills":0,"status":"DISCONTINUED"},
    {"name":"Epinephrine 0.3mg IM — if airway compromise develops","sig":"IM injection lateral thigh — for laryngeal edema or hemodynamic compromise","prescriber":"ED","start":"2024","refills":0,"status":"PRN Emergency"},
    {"name":"Icatibant 30mg SQ (bradykinin B2 receptor antagonist)","sig":"Specific treatment for bradykinin-mediated angioedema — most effective available agent","prescriber":"ED/Allergy","start":"2024","refills":0,"status":"Active if available"},
    {"name":"Loratadine 10mg PO — symptomatic comfort only","sig":"Antihistamines do NOT treat bradykinin angioedema — given for comfort only","prescriber":"ED","start":"2024","refills":0,"status":"Active — limited efficacy"}
  ],
  "labs": [{"date":"11/2024","panel":"Angioedema Workup","results":[
    {"test":"C4 complement","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"C1 esterase inhibitor level","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"C1q","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"Tryptase (drawn within 1h)","value":"3.8","unit":"ng/mL","ref":"<11.4","flag":""},
    {"test":"CBC","value":"Normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["ACE inhibitor angioedema — bradykinin-mediated, no urticaria (correct)","Hereditary angioedema — normal C4/C1-INH excludes HAE","Allergic (IgE-mediated) angioedema — would have urticaria and elevated tryptase","Acquired C1 esterase inhibitor deficiency — excluded by normal complement","Idiopathic histaminergic angioedema — responds to antihistamines, has urticaria","Contact angioedema — localized, exposure history differs"],
  "coachFinal": "Diagnosis: ACE inhibitor-induced angioedema. Key learning: (1) Mechanism: ACE normally degrades bradykinin. ACE inhibitors block this → bradykinin accumulates → vascular permeability → angioedema. NOT IgE-mediated — no urticaria, antihistamines are ineffective, can occur months to years after starting drug. (2) Can occur at ANY time — 3 years on lisinopril with no prior events does NOT rule this out. Tell patients this. (3) Distinguishing from HAE: ACEi angioedema = normal complement; HAE = low C4 (always), low C1-INH level or function. (4) ARBs: safe alternative — ~10x lower angioedema risk than ACEi. Do NOT rechallenge with any ACE inhibitor. (5) Airway assessment is the priority: tongue → palate → larynx progression. Tongue angioedema = emergency ENT/anesthesia standby; consider early intubation before airway is lost."
},
"acute-urticaria-v2": {
  "diagnosis": "Acute Urticaria — NSAID-Exacerbated Cutaneous Disease, Ibuprofen Trigger, Antihistamine Step-Up",
  "problems": [
    {"problem":"Acute urticaria — NSAID trigger","icd":"L50.0","onset":"2024","status":"Active","notes":"Pruritic wheals after ibuprofen — no angioedema, no systemic symptoms."},
    {"problem":"NSAID hypersensitivity — urticaria/angioedema phenotype (NECD)","icd":"T39.395A","onset":"2024","status":"Active","notes":"NSAID-exacerbated cutaneous disease — COX-1 inhibition shifts to leukotriene pathway."},
    {"problem":"Analgesic counseling — safe alternatives required","icd":"Z71.89","onset":"2024","status":"Active","notes":"Acetaminophen is safe. COX-2 selective inhibitor challenge possible under supervision."}
  ],
  "medications": [
    {"name":"Cetirizine 10mg PO daily (first-line antihistamine)","sig":"Once daily. Non-sedating at standard doses. Onset 1 hour, 24h duration.","prescriber":"ED/PCP","start":"2024","refills":2,"status":"Active"},
    {"name":"Hydroxyzine 25mg PO q6h PRN — breakthrough itch","sig":"PRN for severe itch — sedating, do not drive. Helpful at bedtime.","prescriber":"ED/PCP","start":"2024","refills":0,"status":"PRN"},
    {"name":"AVOID all NSAIDs — ibuprofen, naproxen, aspirin >81mg","sig":"Cross-reactivity among COX-1 inhibitors in NECD — avoid entire class","prescriber":"Allergy","start":"2024","refills":0,"status":"Permanent avoidance"},
    {"name":"Acetaminophen 500-1000mg q6h PRN — safe alternative","sig":"Does not inhibit COX-1 — safe in NSAID-exacerbated urticaria","prescriber":"Allergy","start":"2024","refills":2,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Urticaria Evaluation","results":[
    {"test":"CBC with differential","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"Tryptase (acute)","value":"4.2","unit":"ng/mL","ref":"<11.4","flag":""},
    {"test":"Total IgE","value":"180","unit":"IU/mL","ref":"<150","flag":"H"},
    {"test":"CMP","value":"Normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Acute NSAID-exacerbated urticaria — COX-1 inhibitor trigger (correct)","Anaphylaxis — no systemic features or hemodynamic compromise","Urticarial vasculitis — wheals >24h, burns not itches, abnormal biopsy","Serum sickness-like reaction — joint pain, fever, lymphadenopathy","Chronic spontaneous urticaria — too early, <6 weeks duration","Contact urticaria — localized, immediate contact-site distribution"],
  "coachFinal": "Diagnosis: NSAID-exacerbated cutaneous disease (NECD). Key learning: (1) NSAID hypersensitivity phenotypes: NECD (urticaria/angioedema with any COX-1 inhibitor), NERD (nasal/bronchospasm — Samter's triad), and NSAID-induced urticaria in chronic urticaria patients. Each has different implications. (2) Mechanism: COX-1 inhibition → reduced prostaglandin E2 → disinhibits mast cell degranulation + shifts arachidonic acid to leukotriene pathway → urticaria. (3) Cross-reactivity: NECD affects ALL COX-1 inhibitors. COX-2 selective inhibitors (celecoxib) are usually tolerated — can confirm with supervised oral challenge. (4) Acute management: oral second-generation H1 antihistamines are first line. Up-dosing to 4x the licensed dose is safe and often more effective than adding hydroxyzine. (5) Tryptase normal confirms NOT anaphylaxis — important for management and patient education."
},
"allergic-angioedema-v2": {
  "diagnosis": "Allergic Angioedema — IgE-Mediated Peanut Anaphylaxis, Epinephrine Required, EpiPen Discharge Prescription",
  "problems": [
    {"problem":"IgE-mediated allergic angioedema — peanut","icd":"T78.1XXA","onset":"2024","status":"Active","notes":"Lip/periorbital swelling + urticaria within 15 min of peanut exposure."},
    {"problem":"Anaphylaxis — multisystem (cutaneous + GI)","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"Urticaria + angioedema + nausea = anaphylaxis by World Allergy Organization criteria. Epinephrine indicated."},
    {"problem":"Peanut allergy — epinephrine auto-injector and allergy referral","icd":"Z91.010","onset":"2024","status":"Active","notes":"EpiPen 0.3mg x2 prescribed. Oral immunotherapy evaluation at follow-up."}
  ],
  "medications": [
    {"name":"Epinephrine 0.3mg IM lateral thigh — administered","sig":"First-line anaphylaxis treatment — NOT optional for IgE-mediated multisystem reaction","prescriber":"ED","start":"2024","refills":0,"status":"Given"},
    {"name":"Diphenhydramine 25mg IV — adjunct after epinephrine","sig":"H1 antihistamine — treats urticaria/pruritus but does NOT treat anaphylaxis","prescriber":"ED","start":"2024","refills":0,"status":"Given"},
    {"name":"EpiPen 0.3mg auto-injector x2 — discharge prescription","sig":"Inject outer thigh at first sign of reaction. Call 911. Second dose after 5-10 min if no improvement. Carry 2 at all times.","prescriber":"ED/Allergy","start":"2024","refills":1,"status":"Active"},
    {"name":"Loratadine 10mg PO daily — ongoing antihistamine","sig":"Daily scheduled antihistamine — reduces breakthrough urticaria risk","prescriber":"Allergy","start":"2024","refills":2,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Anaphylaxis/Allergy Workup","results":[
    {"test":"Tryptase (drawn 1h post-reaction)","value":"22.4","unit":"ng/mL","ref":"<11.4","flag":"H"},
    {"test":"Baseline tryptase (24h post)","value":"4.1","unit":"ng/mL","ref":"<11.4","flag":""},
    {"test":"Peanut-specific IgE (ImmunoCAP)","value":"18.6","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Ara h 2 component IgE","value":"12.4","unit":"kU/L","ref":"<0.35","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["IgE-mediated peanut anaphylaxis — urticaria + angioedema + GI (correct)","ACE inhibitor angioedema — no urticaria, bradykinin-mediated, different trigger","Hereditary angioedema — no urticaria, complement abnormal, different trigger","Scombroid fish poisoning — flushing after spoiled fish, not peanuts","Mastocytosis-triggered anaphylaxis — elevated baseline tryptase distinguishes","Vasovagal reaction — pallor/bradycardia without urticaria or angioedema"],
  "coachFinal": "Diagnosis: IgE-mediated peanut anaphylaxis. Key learning: (1) Anaphylaxis diagnosis: 2+ organ systems OR known allergen exposure + hypotension/bronchospasm. This patient: skin (urticaria + angioedema) + GI (nausea) = anaphylaxis even without hypotension. (2) Epinephrine is ALWAYS first line — not antihistamines, not steroids. Delay in epinephrine is the #1 cause of anaphylaxis fatalities. Diphenhydramine treats itching, not anaphylaxis. Steroids prevent biphasic reaction but act too slowly for acute treatment. (3) Biphasic anaphylaxis: recurrence 1-72h after apparent resolution without re-exposure, in ~10-20% of cases. Observe 4-6 hours in ED. (4) Tryptase elevation: acute >baseline confirms mast cell-mediated mechanism. Elevated baseline tryptase (>20) suggests mastocytosis. (5) Ara h 2 IgE is the best predictor of systemic peanut reactivity. Palforzia (peanut OIT) is FDA-approved — refer to allergy for evaluation."
},
"allergic-conjunctivitis-severe": {
  "diagnosis": "Vernal Keratoconjunctivitis — Giant Cobblestone Papillae, Shield Ulcer Risk, Urgent Ophthalmology Referral",
  "problems": [
    {"problem":"Vernal keratoconjunctivitis (VKC) — severe allergic eye disease","icd":"H10.13","onset":"2022","status":"Active","notes":"Giant cobblestone papillae under upper lid. Teenage male — peak demographic. Perennial, not seasonal."},
    {"problem":"Corneal shield ulcer — present on slit lamp","icd":"H16.009","onset":"2024","status":"Active","notes":"Whitish plaque superior cornea from papillae trauma. Urgent ophthalmology referral."},
    {"problem":"Steroid-induced IOP risk — monitoring required","icd":"H40.09","onset":"2023","status":"Active","notes":"Long-term topical steroid use raises intraocular pressure. Annual IOP monitoring."}
  ],
  "medications": [
    {"name":"Olopatadine 0.7% (Pataday Once Daily)","sig":"1 drop each eye once daily — H1 antagonist + mast cell stabilizer","prescriber":"Ophthalmology/Allergy","start":"2024","refills":3,"status":"Active"},
    {"name":"Loteprednol 0.5% ophthalmic — pulsed steroid","sig":"1 drop each eye QID x5 days — loteprednol has lower IOP-raising potential than prednisolone","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active — short course"},
    {"name":"Tacrolimus 0.03% ophthalmic (compounded) — steroid-sparing","sig":"1 drop each eye BID — calcineurin inhibitor, reduces steroid dependence in VKC","prescriber":"Ophthalmology","start":"2024","refills":2,"status":"Active"},
    {"name":"Cool compresses + preservative-free artificial tears PRN","sig":"Cooling reduces mast cell degranulation. Frequent use throughout day.","prescriber":"Allergy","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Allergy/Ocular Workup","results":[
    {"test":"Total IgE","value":"420","unit":"IU/mL","ref":"<150","flag":"H"},
    {"test":"Dust mite specific IgE","value":"8.4","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Eosinophil count","value":"0.8","unit":"K/μL","ref":"<0.5","flag":"H"},
    {"test":"IOP right eye","value":"16","unit":"mmHg","ref":"10-21","flag":""},
    {"test":"IOP left eye","value":"17","unit":"mmHg","ref":"10-21","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Vernal keratoconjunctivitis — giant papillae + shield ulcer risk (correct)","Seasonal allergic conjunctivitis — seasonal, no giant papillae, less severe","Atopic keratoconjunctivitis — older adults, associated atopic dermatitis","Bacterial conjunctivitis — purulent discharge, acute, not eosinophilic","Giant papillary conjunctivitis — contact lens-associated, not IgE-mediated","HSV keratitis — dendritic ulcer on fluorescein, different morphology"],
  "coachFinal": "Diagnosis: vernal keratoconjunctivitis (VKC). Key learning: (1) VKC spectrum: seasonal AC (mild) → perennial AC → VKC (severe, sight-threatening). VKC is predominantly young males in tropical climates with atopy. Perennial — not seasonal. (2) Giant cobblestone papillae under upper eyelid are pathognomonic — must evert the upper lid to see. (3) Shield ulcer: papillae mechanically traumatize the cornea → epithelial breakdown → whitish plaque (fibrin/mucus) in superior cornea. Risk of permanent scarring — urgent ophthalmology. (4) Topical steroid caution: effective for flares but steroid-induced glaucoma and cataracts risk with prolonged use. Loteprednol preferred over prednisolone. Transition to tacrolimus for maintenance. (5) Allergen immunotherapy is effective when a specific trigger is identified — reduces disease severity and steroid dependence over time."
},
"allergic-conjunctivitis-severe-v2": {
  "diagnosis": "Severe Perennial Allergic Conjunctivitis — Inadequate Control on Antihistamine Drops, Step-Up to Mast Cell Stabilizer and Immunotherapy",
  "problems": [
    {"problem":"Severe perennial allergic conjunctivitis — uncontrolled","icd":"H10.13","onset":"2021","status":"Active","notes":"Year-round symptoms, dust mite sensitization. Olopatadine alone insufficient. Corneal staining."},
    {"problem":"Superficial punctate keratopathy — corneal staining","icd":"H16.149","onset":"2024","status":"Active","notes":"Fluorescein staining of inferior corneal epithelium from chronic inflammation and eye rubbing."},
    {"problem":"Eye rubbing habit — must counsel cessation","icd":"H10.9","onset":"2024","status":"Active","notes":"Rubbing releases histamine, worsens corneal damage, causes keratoconus over time."}
  ],
  "medications": [
    {"name":"Alcaftadine 0.25% (Lastacaft) once daily","sig":"Superior antihistamine/mast cell stabilizer for severe PAC — step up from olopatadine","prescriber":"Allergy/Ophthalmology","start":"2024","refills":3,"status":"Active"},
    {"name":"Nedocromil 2% ophthalmic BID — prophylactic mast cell stabilizer","sig":"Must use consistently — NOT effective PRN. Start before allergen season.","prescriber":"Ophthalmology","start":"2024","refills":3,"status":"Active"},
    {"name":"Dust mite SCIT — allergen immunotherapy","sig":"Subcutaneous immunotherapy — disease-modifying, reduces chronic ocular inflammation","prescriber":"Allergy","start":"2024","refills":0,"status":"Active — ongoing series"},
    {"name":"Preservative-free artificial tears — frequent use","sig":"Dilutes allergens, lubricates, reduces epithelial damage from dry rubbing","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Allergy/Ocular Assessment","results":[
    {"test":"Dust mite IgE (Der p 1)","value":"15.2","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Total IgE","value":"380","unit":"IU/mL","ref":"<150","flag":"H"},
    {"test":"Conjunctival cytology — eosinophils","value":"Present","unit":"","ref":"Absent","flag":"H"},
    {"test":"IOP right","value":"14","unit":"mmHg","ref":"10-21","flag":""},
    {"test":"IOP left","value":"15","unit":"mmHg","ref":"10-21","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Severe perennial allergic conjunctivitis — inadequate step-1 control (correct)","Dry eye syndrome — punctate staining, but no eosinophils","Vernal keratoconjunctivitis — giant papillae and shield ulcer more prominent","Blepharitis — lid margin disease, different treatment approach","Viral conjunctivitis — acute, preauricular adenopathy, not eosinophilic","Chlamydial conjunctivitis — chronic follicular, STI history"],
  "coachFinal": "Diagnosis: severe PAC, inadequately controlled. Key learning: (1) Step-up for allergic conjunctivitis: cold compresses + avoidance → topical antihistamine/mast cell stabilizer → mast cell stabilizer monotherapy (prophylactic) → brief topical steroid → topical calcineurin inhibitors → allergen immunotherapy. (2) Eye rubbing education is mandatory: every patient must be counseled to stop — rubbing releases histamine, worsens symptoms acutely, and chronic rubbing causes keratoconus (irregular corneal ectasia → blurred vision → potential transplant). (3) Mast cell stabilizer timing: nedocromil and cromolyn only work prophylactically — must start 1-2 weeks before exposure or continuously year-round. Patients who use them PRN get no benefit. (4) Immunotherapy is the only disease-modifying option — targets TH2 sensitization rather than blocking symptoms downstream. (5) Punctate keratopathy is a marker of inadequate control — refer ophthalmology when corneal involvement present."
},
"allergic-rhinitis-uncontrolled-v2": {
  "diagnosis": "Perennial Allergic Rhinitis — Inadequate Control on Antihistamine Alone, INCS Step-Up with Technique Counseling",
  "problems": [
    {"problem":"Perennial allergic rhinitis — uncontrolled on loratadine","icd":"J30.9","onset":"2020","status":"Active","notes":"Daily congestion, rhinorrhea, sneezing despite antihistamine. Dust mite + cat sensitization."},
    {"problem":"INCS technique error — patient not using correctly","icd":"Z79.899","onset":"2024","status":"Active","notes":"Fluticasone started 2 weeks ago — 'doesn't help.' Likely septum-directed spray and inadequate expectations."},
    {"problem":"Comorbid allergic conjunctivitis — undertreated","icd":"H10.10","onset":"2021","status":"Active","notes":"Concurrent eye symptoms — topical eye drop more effective than oral antihistamine."}
  ],
  "medications": [
    {"name":"Fluticasone propionate 50mcg — 2 sprays each nostril daily","sig":"AIM TOWARD EAR/EYE SIDE — NOT toward septum. Sniff gently. Takes 1-2 weeks for full effect. DAILY, not PRN.","prescriber":"Allergy","start":"2024","refills":5,"status":"Active"},
    {"name":"Loratadine 10mg PO daily — continue","sig":"Continue for systemic and ocular symptoms. INCS is superior for nasal congestion.","prescriber":"Allergy","start":"2024","refills":5,"status":"Active"},
    {"name":"Olopatadine 0.1% eye drops BID — add for ocular symptoms","sig":"Topical drop more effective than oral antihistamine for ocular allergy","prescriber":"Allergy","start":"2024","refills":3,"status":"Active — add on"},
    {"name":"Saline nasal rinse daily — allergen clearance","sig":"Irrigate each nostril daily — reduces allergen load, improves INCS efficacy","prescriber":"Allergy","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Allergy Evaluation","results":[
    {"test":"Dust mite IgE (D. pteronyssinus)","value":"12.4","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Cat dander IgE (Fel d 1)","value":"6.8","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Total IgE","value":"220","unit":"IU/mL","ref":"<150","flag":"H"},
    {"test":"Eosinophils","value":"0.5","unit":"K/μL","ref":"<0.5","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Allergic rhinitis — INCS underutilized/technique error (correct)","Non-allergic rhinitis (vasomotor) — normal IgE, no sensitization","Nasal polyps — absent on exam; CT and ENT if suspected","Chronic sinusitis — pressure symptoms, purulent drainage, different workup","Rhinitis medicamentosa — topical decongestant overuse (not present here)","Immunodeficiency — recurrent sinopulmonary infections would prompt workup"],
  "coachFinal": "Diagnosis: inadequately controlled allergic rhinitis — INCS underutilization. Key learning: (1) INCS are the most effective monotherapy for allergic rhinitis — superior to antihistamines for nasal congestion, rhinorrhea, AND sneezing. Antihistamines primarily address sneezing and rhinorrhea but not congestion. (2) Technique is everything — most patients aim toward the septum and get epistaxis and no benefit. Correct technique: angle the spray laterally (toward the same-side eye/ear), sniff gently, do not sniff forcefully. Demonstrate in office. (3) INCS takes 1-2 weeks for full benefit — set expectations. Patients stop early assuming it doesn't work. (4) Step-up algorithm: antihistamine alone → INCS → INCS + antihistamine → montelukast add-on (modest) → allergen immunotherapy (disease-modifying). (5) Topical eye drops outperform systemic antihistamines for ocular allergy — oral antihistamine penetration into the eye is limited."
},
"angelman-syndrome": {
  "diagnosis": "Angelman Syndrome — Maternal 15q11-q13 Deletion, Seizures, Severe Intellectual Disability, Characteristic Happy Affect",
  "problems": [
    {"problem":"Angelman syndrome — confirmed genetic diagnosis","icd":"Q93.51","onset":"Birth","status":"Active","notes":"Maternal chromosome 15q11-q13 deletion confirmed on methylation analysis. UBE3A absent from maternal allele."},
    {"problem":"Epilepsy — atypical absence and myoclonic seizures","icd":"G40.409","onset":"2022","status":"Active","notes":"EEG: high-amplitude delta with triphasic morphology — characteristic AS pattern. Controlled on valproate."},
    {"problem":"Severe intellectual disability — nonverbal, AAC device","icd":"F73","onset":"Birth","status":"Active","notes":"No speech. Happy affect, easily excitable. Walking present but ataxic gait."},
    {"problem":"Sleep disturbance — reduced sleep need","icd":"G47.09","onset":"2023","status":"Active","notes":"Sleeps 4-5 hours/night. Circadian rhythm disturbance common in AS."}
  ],
  "medications": [
    {"name":"Valproic acid 250mg BID — seizure control","sig":"Monitor CBC and LFTs annually. Therapeutic level 50-100 mcg/mL.","prescriber":"Neurology","start":"2022","refills":5,"status":"Active"},
    {"name":"Melatonin 5mg at bedtime","sig":"Start 30 min before desired bedtime. Adjust to 10mg if needed.","prescriber":"Developmental Peds","start":"2023","refills":3,"status":"Active"},
    {"name":"Physical therapy — gait training weekly","sig":"Weekly PT — improve balance, reduce fall risk, maintain mobility","prescriber":"Developmental Peds","start":"2022","refills":0,"status":"Active ongoing"}
  ],
  "labs": [{"date":"01/2024","panel":"AS Monitoring","results":[
    {"test":"Valproate level","value":"78","unit":"mcg/mL","ref":"50-100","flag":""},
    {"test":"CBC","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"LFTs","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"Ammonia","value":"28","unit":"mcmol/L","ref":"15-45","flag":""},
    {"test":"Chromosomal microarray","value":"Maternal 15q11-q13 deletion confirmed","unit":"","ref":"Normal","flag":"H"}
  ]}],
  "imaging": [{"date":"2022","study":"MRI Brain","indication":"Seizure onset evaluation","findings":"Mild cortical atrophy. Simplified gyral pattern. Normal myelination.","impression":"Mild changes consistent with Angelman syndrome. No structural epileptic substrate."}],
  "ddxTargets": ["Angelman syndrome — maternal 15q11-q13 deletion, happy affect + seizures + nonverbal (correct)","Prader-Willi syndrome — PATERNAL 15q11-q13 deletion; hypotonia + hyperphagia, NOT happy demeanor","Rett syndrome — X-linked females only, regression after normal early development, hand-wringing","Phelan-McDermid syndrome — 22q13 deletion, similar phenotype, different genetic locus","Lennox-Gastaut syndrome — epileptic syndrome, not a specific genetic entity","Mowat-Wilson syndrome — different facial features, Hirschsprung association"],
  "coachFinal": "Diagnosis: Angelman syndrome. Key learning: (1) Imprinting rule for chromosome 15q11-q13: MATERNAL deletion/paternal UPD → Angelman syndrome (UBE3A gene, only maternally expressed in neurons). PATERNAL deletion/maternal UPD → Prader-Willi syndrome. Same chromosomal region, parent-of-origin determines the syndrome. (2) Clinical features of AS: happy easily excitable affect, severe intellectual disability, absent speech, seizures, ataxic gait, microcephaly. EEG pattern (high-amplitude delta with triphasic morphology) is characteristic and often seen before clinical seizures. (3) AS vs PWS: AS = happy, hyperactive, nonverbal, seizures, normal/thin build. PWS = hypotonic infant, hyperphagia, obesity, behavioral dysregulation, some speech. (4) Valproate is first-line for AS seizures — broad-spectrum for atypical absence and myoclonic. Lamotrigine may worsen myoclonus — avoid. (5) Emerging therapy: antisense oligonucleotides targeting paternal UBE3A-antisense transcript to activate the silenced paternal allele — clinical trials active."
},
"arc-diabetes-medicine": {
  "diagnosis": "Type 2 Diabetes — Suboptimal A1c 9.2% on Metformin Monotherapy, GLP-1 Agonist Initiation and Lifestyle Intensification",
  "problems": [
    {"problem":"Type 2 diabetes — suboptimal control, A1c 9.2%","icd":"E11.65","onset":"2019","status":"Active","notes":"On metformin 1000mg BID — maximum tolerated dose. GLP-1 agonist addition indicated."},
    {"problem":"Obesity — BMI 34, contributing to insulin resistance","icd":"E66.01","onset":"2016","status":"Active","notes":"GLP-1 agonist addresses both glycemia AND weight — dual benefit in this patient."},
    {"problem":"Hypertension — on lisinopril, BP 138/88","icd":"I10","onset":"2020","status":"Active","notes":"ACEi preferred in T2DM for nephroprotection. BP slightly above target <130/80."},
    {"problem":"Microalbuminuria — early diabetic nephropathy","icd":"E11.65","onset":"2023","status":"Active","notes":"UACR 45 mg/g — above normal (<30). Nephroprotective therapy optimization needed."}
  ],
  "medications": [
    {"name":"Metformin 1000mg PO BID — continue","sig":"Take with meals — reduces GI side effects. Maximum effective dose.","prescriber":"PCP/Endocrinology","start":"2019","refills":5,"status":"Active"},
    {"name":"Semaglutide (Ozempic) 0.25mg SQ weekly — initiate","sig":"Inject weekly, same day. Titrate to 0.5mg at 4 weeks, then 1mg. GLP-1 agonist — reduces A1c and weight.","prescriber":"Endocrinology","start":"2024","refills":3,"status":"Active — new"},
    {"name":"Lisinopril 10mg PO daily — increase to 20mg","sig":"ACEi — nephroprotective in diabetic nephropathy. Uptitrate for BP <130/80.","prescriber":"PCP","start":"2020","refills":5,"status":"Active — dose increased"},
    {"name":"Atorvastatin 40mg PO daily","sig":"Statin — T2DM with CV risk factors. LDL target <70 mg/dL.","prescriber":"PCP","start":"2020","refills":5,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Diabetes Management Panel","results":[
    {"test":"HbA1c","value":"9.2","unit":"%","ref":"<7.0","flag":"H"},
    {"test":"Fasting glucose","value":"214","unit":"mg/dL","ref":"70-100","flag":"H"},
    {"test":"UACR","value":"45","unit":"mg/g","ref":"<30","flag":"H"},
    {"test":"eGFR","value":"72","unit":"mL/min/1.73m²","ref":">60","flag":""},
    {"test":"LDL","value":"98","unit":"mg/dL","ref":"<70 for T2DM+risk","flag":"H"},
    {"test":"TSH","value":"2.1","unit":"mIU/L","ref":"0.4-4.0","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["T2DM — suboptimal on metformin monotherapy, GLP-1 addition indicated (correct)","Type 1 DM — age of onset, obesity, family history, C-peptide argue against","MODY (maturity-onset diabetes of the young) — family history and age pattern atypical","Secondary diabetes — no pancreatic disease, no steroid use","Inadequate metformin dose — already at maximum tolerated dose","Insulin initiation needed now — GLP-1 trial appropriate before insulin in this phenotype"],
  "coachFinal": "Diagnosis: T2DM suboptimally controlled, GLP-1 agonist initiation. Key learning: (1) ADA algorithm for T2DM intensification: after maximizing metformin, next agent choice depends on comorbidities. Obesity + high CV risk + nephropathy → GLP-1 agonist (semaglutide) or SGLT-2 inhibitor (empagliflozin). Both have cardiovascular and renal outcome data. (2) GLP-1 mechanism: incretin effect → glucose-dependent insulin secretion → suppresses glucagon → delays gastric emptying → central appetite suppression. A1c reduction ~1.5-2%, weight loss ~4-6 kg. (3) SGLT-2 inhibitors (empagliflozin, dapagliflozin) are preferred when eGFR >25 and albuminuria present — superior renal and heart failure outcomes vs GLP-1 in established nephropathy. Consider adding SGLT-2 here. (4) Microalbuminuria management: ACEi or ARB is first-line nephroprotection in T2DM. UACR 45 mg/g is early nephropathy — optimize ACEi dose AND add SGLT-2 inhibitor for additive renoprotection. (5) LDL target <70 mg/dL in T2DM with additional CV risk factors — this patient's LDL 98 requires statin uptitration."
},
"arc-hf-medicine": {
  "diagnosis": "HFrEF — EF 30%, Decompensated, IV Diuresis and Guideline-Directed Medical Therapy Optimization",
  "problems": [
    {"problem":"HFrEF decompensation — EF 30%, acute volume overload","icd":"I50.20","onset":"2020","status":"Active","notes":"Richard Chen, 62M — 8 lb weight gain over 5 days, worsening dyspnea. Third hospitalization."},
    {"problem":"GDMT optimization — not on sacubitril-valsartan or MRA","icd":"I50.20","onset":"2020","status":"Active","notes":"Currently on carvedilol + enalapril + furosemide. Transition to Entresto + spironolactone indicated."},
    {"problem":"Atrial fibrillation — persistent, rate-controlled","icd":"I48.19","onset":"2022","status":"Active","notes":"CHA2DS2-VASc 4 — anticoagulated on apixaban. Ventricular rate 82 bpm."},
    {"problem":"CKD stage 3a — eGFR 48","icd":"N18.3","onset":"2021","status":"Active","notes":"Baseline creatinine 1.6. Monitor closely with diuresis — goal euvolemia without overcorrection."}
  ],
  "medications": [
    {"name":"Furosemide 80mg IV BID — decongestion","sig":"IV bolus twice daily. Goal: net negative 1-2L/day. Monitor creatinine, K+ q12h.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active — inpatient"},
    {"name":"Carvedilol 25mg BID — continue (do not hold in decompensation)","sig":"Continue beta-blocker through decompensation unless cardiogenic shock or HR <60. Stopping worsens outcomes.","prescriber":"Cardiology","start":"2020","refills":5,"status":"Active — continue"},
    {"name":"Sacubitril-valsartan 24/26mg BID — transition from enalapril","sig":"Stop enalapril 36h BEFORE starting Entresto — wash-out required (angioedema risk). Titrate q2-4 weeks.","prescriber":"Cardiology","start":"2024","refills":3,"status":"Active — new, transition"},
    {"name":"Spironolactone 25mg daily — add MRA","sig":"Aldosterone antagonist — mortality benefit in HFrEF EF <35%. Monitor K+ and creatinine in 1 week.","prescriber":"Cardiology","start":"2024","refills":3,"status":"Active — new"},
    {"name":"Apixaban 5mg BID — continue for AFib","sig":"CHA2DS2-VASc 4 — anticoagulation indicated. Dose adjust if 2 of 3: age >80, wt <60kg, Cr >1.5.","prescriber":"Cardiology","start":"2022","refills":5,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"HF Decompensation Panel","results":[
    {"test":"BNP","value":"2840","unit":"pg/mL","ref":"<100","flag":"H"},
    {"test":"Creatinine","value":"1.8","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Potassium","value":"3.7","unit":"mEq/L","ref":"3.5-5.0","flag":""},
    {"test":"Sodium","value":"133","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"Hemoglobin","value":"11.2","unit":"g/dL","ref":"13.5-17.5","flag":"L"},
    {"test":"TSH","value":"1.8","unit":"mIU/L","ref":"0.4-4.0","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"Chest X-ray PA/Lateral","indication":"Dyspnea, known HF","findings":"Cardiomegaly. Bilateral interstitial edema. Small bilateral pleural effusions. Vascular cephalization.","impression":"Acute decompensated heart failure — pulmonary edema pattern."}],
  "ddxTargets": ["HFrEF decompensation — volume overload, GDMT optimization needed (correct)","Cardiac tamponade — no equalization of pressures, no pulsus paradoxus","ARDS — cardiogenic edema pattern, BNP markedly elevated","Pulmonary embolism — bilateral edema not typical, BNP reflects HF","Hypertensive emergency — BP not critically elevated here","New ACS precipitating decompensation — troponin needed to exclude"],
  "coachFinal": "Diagnosis: HFrEF decompensation, GDMT optimization opportunity. Key learning: (1) The four pillars of GDMT for HFrEF (EF <40%): (a) ACEi/ARB or ARNI (Entresto) — Entresto reduces mortality 20% vs ACEi. (b) Beta-blocker (carvedilol, metoprolol succinate, bisoprolol). (c) MRA (spironolactone or eplerenone — EF <35%). (d) SGLT-2 inhibitor (dapagliflozin or empagliflozin). Each pillar has mortality benefit. This patient is missing ARNI and MRA. (2) ACEi → Entresto transition: mandatory 36-hour washout to prevent angioedema — the N in ARNI (neprilysin inhibitor) potentiates bradykinin. (3) Beta-blocker in decompensation: do NOT stop carvedilol unless cardiogenic shock or HR <55-60. Stopping worsen outcomes. If in cardiogenic shock, reduce dose rather than stop. (4) Diuresis goal: net negative 1-2L/day. Reassess daily — too aggressive causes pre-renal azotemia; inadequate → persistent congestion and readmission. BNP trending down is the target. (5) Hyponatremia (Na 133) in HF: dilutional — from ADH activation and low cardiac output. Treat the HF, not the sodium directly. Fluid restriction if Na <130."
}
}

def enrich(slug, e):
    path = os.path.join(EMR_DIR, f"{slug}.js")
    if not os.path.exists(path): print(f"  SKIP {slug}"); return False
    with open(path) as f: src = f.read()
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m: print(f"  PARSE ERROR {slug}"); return False
    data = json.loads(m.group(1))
    if "meta" not in data: data["meta"] = {}
    data["meta"]["diagnosis"] = e.get("diagnosis","")
    data["meta"]["caseId"] = slug
    for k in ["problems","medications","labs","imaging"]:
        if k in e: data[k] = e[k]
    if "ddxTargets" in e:
        if "guided" not in data: data["guided"] = {}
        data["guided"]["ddxTargets"] = e["ddxTargets"]
    if "coachFinal" in e:
        if "guided" not in data: data["guided"] = {}
        if "coachPrompts" not in data["guided"]: data["guided"]["coachPrompts"] = {}
        data["guided"]["coachPrompts"]["final"] = e["coachFinal"]
    with open(path,'w') as f: f.write(f"\nwindow.EMR_DATA = {json.dumps(data,indent=2)};\n")
    return True

done = 0
for s,e in ENRICHMENTS.items():
    if enrich(s,e): print(f"✓ {s}"); done += 1
print(f"\nBatch 10: {done}/{len(ENRICHMENTS)} enriched")
