#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"cholelithiasis-cholecystitis": {
  "diagnosis": "Acute Calculous Cholecystitis with Choledocholithiasis (CBD Stone)",
  "problems": [
    {"problem":"Acute cholecystitis + choledocholithiasis","icd":"K80.42","onset":"2024","status":"Active","notes":"Patricia Monroe, 56F — RUQ pain, fever 38.8°C, Murphy sign positive, jaundice. ALT 180, direct bilirubin 3.2, CBD 12mm dilated with echogenic material — CBD stone in addition to cholecystitis."},
    {"problem":"Choledocholithiasis — ERCP indicated before cholecystectomy","icd":"K80.51","onset":"2024","status":"Active","notes":"CBD stone causing biliary obstruction. Risk of ascending cholangitis. ERCP with stone extraction required before or during cholecystectomy."},
    {"problem":"Ascending cholangitis risk — Charcot triad screen","icd":"K83.0","onset":"2024","status":"Active","notes":"Fever + jaundice + RUQ pain = Charcot triad. Reynolds pentad adds hypotension + AMS = septic cholangitis. Monitor closely for deterioration."}
  ],
  "medications": [
    {"name":"Piperacillin-tazobactam 3.375g IV q6h","sig":"Empiric biliary coverage. Gram-negative enteric organisms dominant in biliary infection.","prescriber":"Surgery/GI","start":"2024","refills":0,"status":"Active"},
    {"name":"ERCP with sphincterotomy and stone extraction — within 24h","sig":"CBD stone must be cleared before laparoscopic cholecystectomy. ERCP first if cholangitis present. Then laparoscopic cholecystectomy same admission or within 2 weeks.","prescriber":"GI/Surgery","start":"2024","refills":0,"status":"Scheduled"},
    {"name":"Laparoscopic cholecystectomy — after ERCP clearance","sig":"After CBD cleared by ERCP, proceed with laparoscopic cholecystectomy. Early same-admission cholecystectomy preferred.","prescriber":"Surgery","start":"2024","refills":0,"status":"Planned"}
  ],
  "labs": [{"date":"04/2024","panel":"Cholecystitis + Choledocholithiasis","results":[
    {"test":"ALT","value":"180","unit":"U/L","ref":"7-56","flag":"H"},
    {"test":"Direct bilirubin","value":"3.2","unit":"mg/dL","ref":"0-0.3","flag":"H"},
    {"test":"ALP","value":"320","unit":"U/L","ref":"44-147","flag":"H"},
    {"test":"WBC","value":"16.2","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Lipase","value":"48","unit":"U/L","ref":"10-140","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"Right Upper Quadrant Ultrasound","findings":"Gallstones, gallbladder wall 6mm, pericholecystic fluid, Murphy sign positive. CBD 12mm dilated with echogenic material consistent with stone. No intrahepatic ductal dilation.","impression":"Acute cholecystitis with CBD stone and biliary obstruction. ERCP indicated."}],
  "ddxTargets": ["Acute cholecystitis with choledocholithiasis (correct)","Cholecystitis without CBD stone — ALT/bilirubin pattern + CBD dilation distinguishes","Ascending cholangitis (Charcot triad) — fever + jaundice + RUQ pain present; same initial treatment","Gallstone pancreatitis — lipase normal here; ALT >150 would suggest gallstone trigger"],
  "coachFinal": "Diagnosis: acute cholecystitis with choledocholithiasis. Key learning: (1) When to suspect CBD stone: elevated direct bilirubin + elevated ALP/GGT + dilated CBD on ultrasound. ALT >150 in acute cholecystitis strongly suggests gallstone etiology. CBD >8mm (or >6mm without cholecystectomy) warrants MRCP or ERCP. (2) Management sequence: CBD stone confirmed → ERCP first → then laparoscopic cholecystectomy same admission if feasible. Performing cholecystectomy first without clearing the CBD = retained CBD stone = ongoing obstruction and cholangitis risk. (3) Ascending cholangitis: Charcot triad = fever + RUQ pain + jaundice. Reynolds pentad adds hypotension and AMS = septic cholangitis = emergent ERCP. (4) ERCP success >90% for CBD stone extraction. Complications: post-ERCP pancreatitis (2-3%), bleeding, perforation. (5) Gallstone pancreatitis: ERCP indicated within 24h only if concurrent cholangitis — NOT for uncomplicated gallstone pancreatitis (wait for inflammation to settle)."
},
"chronic-salicylate-toxicity": {
  "diagnosis": "Chronic Salicylate Toxicity — Occult, Elderly Patient",
  "problems": [
    {"problem":"Chronic salicylate toxicity — occult presentation","icd":"T39.091A","onset":"2024","status":"Active","notes":"Helen Foster, 82F — confusion, tinnitus, hyperventilation, metabolic acidosis. On aspirin 325mg daily + bismuth subsalicylate (Pepto-Bismol) multiple times daily. Salicylate level 48mg/dL."},
    {"problem":"Mixed acid-base — respiratory alkalosis + high anion gap metabolic acidosis","icd":"E87.2","onset":"2024","status":"Active","notes":"Salicylate stimulates respiratory center → respiratory alkalosis. Uncouples oxidative phosphorylation → metabolic acidosis. Mixed pattern is pathognomonic."},
    {"problem":"CNS effects — tinnitus, confusion, agitation","icd":"T39.091A","onset":"2024","status":"Active","notes":"Elderly patients develop CNS symptoms at lower serum levels than acute overdose. Tinnitus is a classic early sign."}
  ],
  "medications": [
    {"name":"Stop all salicylate sources immediately","sig":"Aspirin + bismuth subsalicylate discontinued. Review ALL medications for hidden salicylate.","prescriber":"Medicine/Toxicology","start":"2024","refills":0,"status":"STOP all"},
    {"name":"IV sodium bicarbonate — urine alkalinization","sig":"Target urine pH 7.5-8.0. Alkalinized urine traps ionized salicylate → prevents reabsorption → enhances elimination. Also corrects metabolic acidosis.","prescriber":"Medicine/Toxicology","start":"2024","refills":0,"status":"Active — IV bicarb infusion"},
    {"name":"Hemodialysis — if level >40mg/dL with symptoms in chronic toxicity","sig":"Chronic toxicity threshold for dialysis is lower than acute. Level 48 with confusion = nephrology consult for dialysis.","prescriber":"Nephrology/Toxicology","start":"2024","refills":0,"status":"Nephrology consulted"}
  ],
  "labs": [{"date":"04/2024","panel":"Salicylate Toxicity","results":[
    {"test":"Salicylate level","value":"48","unit":"mg/dL","ref":"<20 therapeutic; >30 toxic","flag":"H"},
    {"test":"ABG — pH","value":"7.46","unit":"","ref":"7.35-7.45","flag":"H"},
    {"test":"pCO2","value":"28","unit":"mmHg","ref":"35-45","flag":"L"},
    {"test":"Bicarb","value":"18","unit":"mEq/L","ref":"22-26","flag":"L"},
    {"test":"Anion gap","value":"18","unit":"mEq/L","ref":"8-12","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Chronic salicylate toxicity (correct)","Sepsis — mixed acid-base; but salicylate level diagnostic","Acute salicylate overdose — Done nomogram does NOT apply to chronic toxicity","Methanol/ethylene glycol — osmolar gap; different history"],
  "coachFinal": "Diagnosis: chronic salicylate toxicity. Key learning: (1) Chronic vs acute salicylate toxicity: chronic = more dangerous at lower levels, CNS symptoms prominent (tinnitus, confusion, agitation), elderly most vulnerable, Done nomogram does NOT apply. (2) Classic mixed acid-base: salicylate stimulates respiratory center → primary respiratory alkalosis (low pCO2). Uncouples oxidative phosphorylation → lactic acidosis → high anion gap metabolic acidosis. This mixed pattern is highly characteristic. (3) Occult salicylate sources in elderly: aspirin, bismuth subsalicylate (Pepto-Bismol), oil of wintergreen, salicylate-containing topicals. Always check bismuth subsalicylate in unexplained elderly toxicity. (4) Urine alkalinization: sodium bicarbonate to target urine pH 7.5-8.0 enhances renal elimination via ion trapping. Ionized salicylate at alkaline pH cannot cross tubular membrane. (5) Dialysis in chronic toxicity: level >40mg/dL with CNS symptoms, AKI, pulmonary edema, or refractory acidosis. Threshold is lower than acute toxicity."
},
"cns-infection": {
  "diagnosis": "CNS Toxoplasmosis — AIDS (CD4 82)",
  "problems": [
    {"problem":"CNS toxoplasmosis — AIDS-defining illness","icd":"B58.2","onset":"2024","status":"Active","notes":"Marcus Johnson, 38M — known HIV, not on ART (CD4 82, VL 180,000). New seizure, left hemiparesis. MRI: multiple ring-enhancing lesions with edema. Toxoplasma IgG positive."},
    {"problem":"Multiple ring-enhancing lesions — toxo vs CNS lymphoma","icd":"B58.2","onset":"2024","status":"Active","notes":"Treat empirically for toxo first. If no response in 10-14 days → biopsy for PCNSL. Toxo is far more common when CD4 <200 and IgG positive."},
    {"problem":"IRIS risk — defer ART 2-3 weeks","icd":"B20","onset":"2024","status":"Active","notes":"Starting ART during active CNS OI → IRIS → paradoxical intracranial inflammation → herniation. Wait 2-3 weeks of toxo treatment before ART."}
  ],
  "medications": [
    {"name":"Pyrimethamine 200mg loading then 50mg daily + sulfadiazine 1.5g q6h","sig":"Gold standard for CNS toxoplasmosis. Duration: acute 6 weeks, then lifelong suppressive therapy while CD4 <200.","prescriber":"Infectious Disease","start":"2024","refills":0,"status":"Active"},
    {"name":"Leucovorin 10-20mg daily — ALWAYS with pyrimethamine","sig":"Prevents pyrimethamine-induced bone marrow suppression. Never give pyrimethamine without leucovorin.","prescriber":"Infectious Disease","start":"2024","refills":3,"status":"Active"},
    {"name":"ART — defer 2-3 weeks","sig":"Prevents IRIS-related intracranial herniation in CNS OI. Start ART 2-3 weeks into toxo treatment.","prescriber":"Infectious Disease","start":"2024","refills":0,"status":"Planned — deferral"}
  ],
  "labs": [{"date":"04/2024","panel":"CNS Toxoplasmosis","results":[
    {"test":"CD4 count","value":"82","unit":"cells/μL","ref":"500-1500","flag":"L"},
    {"test":"HIV viral load","value":"180,000","unit":"copies/mL","ref":"Undetectable","flag":"H"},
    {"test":"Toxoplasma IgG","value":"Positive — 1:1024","unit":"","ref":"Negative","flag":"H"},
    {"test":"Toxoplasma IgM","value":"Negative (reactivation)","unit":"","ref":"Negative","flag":""},
    {"test":"CSF EBV PCR","value":"Negative (positive = PCNSL)","unit":"","ref":"Negative","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with Gadolinium","findings":"Multiple ring-enhancing lesions: largest in right basal ganglia (2.8cm), bilateral frontal. Surrounding edema. Eccentric target sign on basal ganglia lesion.","impression":"Multiple ring-enhancing lesions in AIDS patient — CNS toxoplasmosis most likely. Empiric treatment."}],
  "ddxTargets": ["CNS toxoplasmosis — empiric treatment first (correct)","Primary CNS lymphoma — EBV+ in CSF; single periventricular; responds dramatically to steroids; biopsy if toxo fails","Bacterial brain abscess — fever, restricted DWI; no AIDS history here","Cryptococcal meningitis — meningitic pattern; India ink; crypto antigen"],
  "coachFinal": "Diagnosis: CNS toxoplasmosis in AIDS. Key learning: (1) Empiric treatment rule: HIV patient with CD4 <200 + Toxo IgG positive + multiple ring-enhancing lesions → treat empirically for toxoplasmosis without biopsy. If clinical/radiological improvement at 10-14 days → confirmed. No improvement → biopsy for PCNSL. (2) Toxo IgG negative: if IgG negative, toxoplasmosis unlikely → biopsy sooner, consider PCNSL. (3) PCNSL characteristics: single periventricular lesion, EBV+ in CSF, responds dramatically to dexamethasone (may disappear before biopsy), CD4 typically <50. (4) IRIS timing: treating OI for 2-3 weeks before starting ART prevents IRIS-related intracranial herniation. Exception for some OIs — consult ID. (5) Suppressive therapy: after 6 weeks acute treatment, lifelong pyrimethamine + sulfadiazine until CD4 >200 for ≥6 months on ART."
},
"cns-lymphoma": {
  "diagnosis": "Primary CNS Lymphoma (PCNSL) — Periventricular Butterfly Pattern",
  "problems": [
    {"problem":"Primary CNS lymphoma — periventricular, immunocompetent","icd":"C85.20","onset":"2024","status":"Active","notes":"Elizabeth Park, 68F — immunocompetent. 6-week progressive confusion, personality change, right arm weakness. MRI: periventricular butterfly-pattern enhancing mass crossing corpus callosum. Homogeneous enhancement."},
    {"problem":"Steroids will destroy diagnostic tissue — hold until biopsy","icd":"C85.20","onset":"2024","status":"Active","notes":"PCNSL characteristically melts with corticosteroids. Dexamethasone causes temporary improvement or disappearance of lesions. Must obtain biopsy BEFORE steroids."},
    {"problem":"Stereotactic biopsy — tissue diagnosis mandatory","icd":"C85.20","onset":"2024","status":"Active","notes":"High diagnostic yield >90%. CT-guided or MRI-guided. Hold steroids 7-10 days before biopsy if possible."}
  ],
  "medications": [
    {"name":"HOLD steroids until biopsy obtained","sig":"PCNSL responds dramatically to dexamethasone → lymphoma cells lyse → non-diagnostic biopsy. Only use steroids for life-threatening herniation.","prescriber":"Neurosurgery/Neuro-oncology","start":"2024","refills":0,"status":"HOLD"},
    {"name":"High-dose methotrexate — post-biopsy first-line","sig":"High-dose MTX ≥3.5g/m² penetrates BBB at high doses. Combined with rituximab. MTX-based regimens achieve CR in 35-60%.","prescriber":"Neuro-oncology","start":"2024","refills":0,"status":"Post-biopsy"},
    {"name":"Stereotactic brain biopsy — urgently","sig":"Before any steroids. High diagnostic yield. CT or MRI guided. Minimally invasive.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Scheduled"}
  ],
  "labs": [{"date":"04/2024","panel":"PCNSL Workup","results":[
    {"test":"HIV test","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"CSF cytology","value":"Atypical lymphocytes — suspicious","unit":"","ref":"Normal","flag":"H"},
    {"test":"CSF EBV PCR","value":"Negative (positive = AIDS-related PCNSL)","unit":"","ref":"Negative","flag":""},
    {"test":"CSF IL-10:IL-6 ratio","value":">1 (elevated IL-10 = PCNSL)","unit":"","ref":"<1 normal","flag":"H"},
    {"test":"Whole body PET","value":"No systemic lymphoma","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with Gadolinium","findings":"Periventricular homogeneous enhancing mass (4.2cm) crossing corpus callosum — butterfly pattern. Restricted diffusion on DWI. No ring enhancement. Surrounding edema.","impression":"Periventricular butterfly-pattern lesion highly characteristic of PCNSL. Stereotactic biopsy before steroids."}],
  "ddxTargets": ["Primary CNS lymphoma (correct — biopsy confirms)","GBM — butterfly pattern can occur; heterogeneous ring enhancement more typical; necrosis","CNS toxoplasmosis — ring-enhancing not homogeneous; CD4 <200; IgG positive; AIDS","Tumefactive MS — young patient; incomplete ring (open ring sign); oligoclonal bands"],
  "coachFinal": "Diagnosis: primary CNS lymphoma. Key learning: (1) PCNSL classic MRI: periventricular, corpus callosum butterfly pattern, HOMOGENEOUS enhancement (not ring), restricted diffusion. 90% diffuse large B-cell lymphoma. Rare in immunocompetent (median age 65). (2) The steroid trap: PCNSL is steroid-sensitive — dexamethasone causes temporary lysis of lymphoma cells → lesion shrinks or disappears. Rule: do NOT give steroids until biopsy obtained, unless herniation. Even one dose of steroids can make the biopsy non-diagnostic. (3) AIDS vs immunocompetent PCNSL: AIDS = EBV-driven, CD4 <50, may respond to ART. Immunocompetent = EBV-negative, requires chemotherapy. (4) High-dose MTX rationale: standard-dose MTX does NOT penetrate BBB. Doses ≥3.5g/m² achieve CNS concentrations. Leucovorin rescue mandatory 24h after MTX. (5) Whole-body staging with PET-CT to rule out systemic lymphoma. Vitreoretinal involvement in 15-25% — ophthalmology slit-lamp exam."
},
"complete-heart-block-v2": {
  "diagnosis": "Complete Heart Block — Lyme Carditis in Young Adult",
  "problems": [
    {"problem":"Complete (third-degree) AV block — symptomatic, young adult","icd":"I44.2","onset":"2024","status":"Active","notes":"Jennifer Kim, 35F — syncope while jogging. ECG: AV dissociation, ventricular rate 38. Young patient with complete heart block — reversible causes mandatory workup."},
    {"problem":"Lyme carditis — most common reversible cause in young patient","icd":"A69.20","onset":"2024","status":"Active","notes":"Hiked in Connecticut last month. Erythema migrans rash 2 weeks ago. Lyme serology positive. Lyme carditis is the most common reversible cause of complete AV block in young adults in endemic areas."},
    {"problem":"Do NOT implant permanent pacemaker — reversible cause suspected","icd":"I44.2","onset":"2024","status":"Active","notes":"Permanent pacemaker contraindicated until Lyme serology returns and antibiotic trial given. Most Lyme AV block resolves with antibiotics within 1-6 weeks."}
  ],
  "medications": [
    {"name":"Transcutaneous pacing — bridge to diagnosis","sig":"Temporary hemodynamic support while etiology determined. Rate 60 bpm. Sedation required.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active"},
    {"name":"Ceftriaxone 2g IV daily x 14 days — Lyme carditis with high-degree block","sig":"IV ceftriaxone for hospitalized Lyme carditis with high-degree block. Then oral doxycycline to complete 21 days. Most AV block resolves within 1-6 weeks.","prescriber":"Cardiology/Infectious Disease","start":"2024","refills":0,"status":"Initiated after serology confirmed"},
    {"name":"Hold permanent pacemaker — Lyme AV block is reversible","sig":"Do NOT implant PPM until Lyme antibiotic trial complete. Lyme carditis resolves completely. Premature PPM = unnecessary permanent device.","prescriber":"Cardiology","start":"2024","refills":0,"status":"HOLD"}
  ],
  "labs": [{"date":"04/2024","panel":"Complete Heart Block Workup","results":[
    {"test":"Lyme ELISA (two-tier)","value":"Positive — IgM 1:256","unit":"","ref":"Negative","flag":"H"},
    {"test":"Lyme Western blot (confirmatory)","value":"Positive — IgM bands","unit":"","ref":"Negative","flag":"H"},
    {"test":"Troponin I","value":"0.38","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"ANA/ANCA","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"TSH","value":"2.1","unit":"mIU/L","ref":"Normal","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"Echocardiogram","findings":"Normal LV size and function. EF 60%. No wall motion abnormalities. No pericardial effusion.","impression":"Normal systolic function. No structural cause for AV block."}],
  "ddxTargets": ["Lyme carditis — complete heart block (correct)","Degenerative conduction disease — older patient; no Lyme exposure; PPM indicated","Sarcoid heart disease — bilateral hilar adenopathy; ACE level; cardiac MRI","Myocarditis from other cause — troponin elevated; cardiac MRI; viral serology"],
  "coachFinal": "Diagnosis: Lyme carditis with complete heart block. Key learning: (1) Lyme carditis mimics degenerative complete heart block but is COMPLETELY REVERSIBLE with antibiotics — the single most important distinction. Always consider Lyme in complete heart block in patients <50 from endemic areas (northeastern US, upper Midwest, Europe) during tick season. (2) Lyme two-tier testing: ELISA first → if positive, Western blot. IgM (early). A positive ELISA alone is not diagnostic — Western blot must confirm. (3) Treatment prevents PPM: high-degree block (3rd degree or PR >300ms) = IV ceftriaxone inpatient. Lower-degree block = oral doxycycline outpatient with telemetry monitoring. Most resolve within 1-6 weeks. (4) Other reversible causes of complete heart block: medications (digoxin, beta-blockers, CCBs), hyperkalemia, viral myocarditis, sarcoidosis, Chagas disease, hypothyroidism. Always exclude before PPM. (5) If AV block persists beyond 3-4 weeks of antibiotics → reassess for permanent pacemaker."
},
"complex-migraine": {
  "diagnosis": "Sporadic Hemiplegic Migraine",
  "problems": [
    {"problem":"Sporadic hemiplegic migraine — diagnosis of exclusion","icd":"G43.409","onset":"2024","status":"Active","notes":"Rachel Kim, 28F — 3rd episode over 2 years. Right throbbing headache with left arm and leg weakness over 20 minutes, resolving completely within 2 hours. MRI normal. No family history."},
    {"problem":"Stroke exclusion mandatory each episode","icd":"G43.409","onset":"2024","status":"Active","notes":"Every hemiplegic migraine episode requires MRI DWI to exclude acute ischemia. Never diagnose hemiplegic migraine without imaging."},
    {"problem":"Triptans and ergotamines contraindicated","icd":"G43.409","onset":"2024","status":"Active","notes":"Avoid vasoconstrictors in hemiplegic migraine — theoretical risk of cerebral vasoconstriction in setting of motor aura."}
  ],
  "medications": [
    {"name":"Prochlorperazine 10mg IV — acute attack","sig":"IV antiemetic (dopamine antagonist) effective for migraine. Avoid triptans and ergotamines.","prescriber":"Neurology/Emergency","start":"2024","refills":0,"status":"Active"},
    {"name":"Ketorolac 30mg IV + IV hydration","sig":"IV NSAID adjunct. IV hydration improves headache.","prescriber":"Emergency","start":"2024","refills":0,"status":"Active"},
    {"name":"Verapamil 240mg daily — preventive","sig":"Calcium channel blockade first-line preventive for hemiplegic migraine. Avoid propranolol.","prescriber":"Neurology","start":"2024","refills":3,"status":"Initiating"}
  ],
  "labs": [{"date":"04/2024","panel":"Hemiplegic Migraine Workup","results":[
    {"test":"MRI DWI","value":"No restricted diffusion — no acute ischemia","unit":"","ref":"Normal","flag":""},
    {"test":"MRA brain","value":"Normal — no stenosis or occlusion","unit":"","ref":"Normal","flag":""},
    {"test":"ESR/CRP","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"Antiphospholipid antibodies","value":"Negative","unit":"","ref":"Negative","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with DWI and MRA","findings":"No restricted diffusion. No enhancing lesions. Normal MRA. Normal cerebral architecture.","impression":"Normal MRI. No acute ischemia. No structural cause."}],
  "ddxTargets": ["Sporadic hemiplegic migraine (after stroke excluded — correct)","Acute ischemic stroke — DWI negative excludes; critical exclusion","TIA — no DWI changes; symptoms fully resolved; slow spread of aura distinguishes from stroke","Focal seizure with Todd paralysis — EEG abnormality; postictal confusion"],
  "coachFinal": "Diagnosis: sporadic hemiplegic migraine. Key learning: (1) Hemiplegic migraine = migraine with motor aura (hemiparesis/hemiplegia). Diagnosis of exclusion — every episode must exclude stroke with MRI DWI. The aura spreads slowly (over 20-30 min) unlike sudden-onset stroke, but this distinction alone is NOT safe — imaging is mandatory. (2) Familial vs sporadic: familial hemiplegic migraine has autosomal dominant inheritance (CACNA1A, ATP1A2, SCN1A gene mutations). Sporadic = same presentation, no family history. (3) Triptan/ergotamine contraindication: vasoconstriction during motor aura = theoretical stroke risk. Most neurologists avoid triptans in hemiplegic migraine. Use IV prochlorperazine + ketorolac. (4) Cortical spreading depression: hemiplegic migraine is caused by cortical spreading depression — a wave of neuronal depolarization spreading at 2-3mm/min. Explains the SLOW progression of symptoms over minutes. (5) Preventive: verapamil first-line (reduces cortical spreading depression). Avoid propranolol in hemiplegic migraine. Valproate and topiramate also effective."
},
"conus-medullaris-syndrome": {
  "diagnosis": "Conus Medullaris Syndrome — Metastatic Epidural Cord Compression",
  "problems": [
    {"problem":"Metastatic epidural cord compression — oncological emergency","icd":"G99.2","onset":"2024","status":"Active","notes":"Barbara Chen, 62F — metastatic breast cancer. Acute low back pain, perianal numbness, urinary retention, bilateral leg weakness. MRI: T12-L1 epidural metastasis compressing conus medullaris."},
    {"problem":"Conus medullaris — mixed UMN/LMN features","icd":"G99.2","onset":"2024","status":"Active","notes":"Conus (T12-L1): mixed UMN (hyperreflexia) + LMN (flaccid paralysis), saddle anesthesia, bladder/bowel dysfunction. Distinguishes from cauda equina (pure LMN) and thoracic cord (pure UMN)."},
    {"problem":"Urinary retention — catheterize immediately","icd":"R33.9","onset":"2024","status":"Active","notes":"Conus controls bladder via S2-S4. Conus lesion → detrusor areflexia → retention. Catheterization prevents bladder overdistension injury."}
  ],
  "medications": [
    {"name":"Dexamethasone 10mg IV bolus then 4mg q6h — IMMEDIATE","sig":"Start immediately on clinical suspicion — before MRI if deficits present. Every hour of untreated compression = permanent neurological loss.","prescriber":"Oncology/Neurosurgery","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Radiation oncology — emergent spinal irradiation within 24h","sig":"Radiation is first-line for most metastatic epidural cord compression. Radioresistant tumors or mechanical instability → surgery first then radiation.","prescriber":"Radiation Oncology","start":"2024","refills":0,"status":"URGENT"},
    {"name":"Urinary catheterization — immediate","sig":"Foley catheter for urinary retention. Prevents bladder injury.","prescriber":"Oncology","start":"2024","refills":0,"status":"Done — 450mL residual"}
  ],
  "labs": [{"date":"04/2024","panel":"Metastatic Cord Compression","results":[
    {"test":"Lower extremity strength","value":"3/5 bilateral hip flexors; 2/5 bilateral ankle","unit":"","ref":"5/5","flag":"H"},
    {"test":"Perianal sensation","value":"Reduced — saddle anesthesia","unit":"","ref":"Intact","flag":"H"},
    {"test":"Bulbocavernosus reflex","value":"Absent — S3-4 conus involvement","unit":"","ref":"Present","flag":"H"},
    {"test":"Calcium","value":"11.8","unit":"mg/dL","ref":"8.5-10.5","flag":"H"},
    {"test":"CEA","value":"68","unit":"ng/mL","ref":"<3","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Thoracolumbar Spine with Gadolinium","findings":"T12-L1 epidural metastasis with cord compression at conus medullaris. Pathological T12 fracture. Signal change within conus (edema).","impression":"Metastatic epidural cord compression at conus. Oncological emergency. Dexamethasone + urgent radiation."}],
  "ddxTargets": ["Metastatic epidural cord compression at conus (correct)","Cauda equina syndrome — below L1; pure LMN; different level","Transverse myelitis — inflammatory; CSF pleocytosis; no mass","Epidural abscess — fever; elevated WBC/ESR; drainage required"],
  "coachFinal": "Diagnosis: metastatic epidural cord compression at conus medullaris. Key learning: (1) Spinal levels: cervical/thoracic = UMN (spasticity, hyperreflexia). Conus (T12-L1) = MIXED UMN + LMN (hyperreflexia + flaccid, saddle anesthesia, bladder/bowel). Cauda equina (below L1) = pure LMN (flaccid, areflexic, saddle anesthesia). (2) True oncological emergency: every hour untreated = additional permanent deficit. Dexamethasone immediately (before MRI if deficits present), then urgent MRI, then radiation. (3) MRI entire spine: plain films and CT miss soft tissue epidural disease. MRI whole spine — 30% have multiple compression sites. (4) Dexamethasone dose: 10mg IV bolus then 4mg q6h is standard. Higher doses show more complications without clear benefit. (5) Surgery indications: radioresistant tumor, mechanical instability, unknown primary needing tissue, neurological deterioration during radiation. ASTRO trial: surgery + radiation superior to radiation alone."
},
"copd-exacerbation-niv": {
  "diagnosis": "Acute COPD Exacerbation — Hypercapnic Respiratory Failure, NIV Indicated",
  "problems": [
    {"problem":"Acute COPD exacerbation — hypercapnic respiratory failure","icd":"J44.1","onset":"2024","status":"Active","notes":"Frank Morrison, 68M — GOLD stage III COPD, 60-pack-year history. Acute dyspnea, pursed-lip breathing, accessory muscle use, SpO2 84% on room air, pH 7.28, pCO2 72. Non-invasive ventilation indicated."},
    {"problem":"Hypercapnia with acidosis — BiPAP indication","icd":"J96.01","onset":"2024","status":"Active","notes":"pH 7.28 with elevated pCO2 72 = acute hypercapnic respiratory failure. NIV (BiPAP) reduces intubation rate, ICU stay, and mortality. First-line before intubation."},
    {"problem":"Infection trigger — sputum purulence, fever","icd":"J44.1","onset":"2024","status":"Active","notes":"Yellow-green sputum, low-grade fever 38.1°C. Bacterial exacerbation most likely. Antibiotic therapy indicated for purulent sputum + increased dyspnea."}
  ],
  "medications": [
    {"name":"BiPAP (IPAP 12-14, EPAP 4-6) — immediate","sig":"NIV is first-line for hypercapnic COPD exacerbation (pH <7.35 with elevated pCO2). Target: pH improvement within 1-2 hours. Failure to improve → intubation.","prescriber":"Pulmonology/Emergency","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Albuterol + ipratropium nebulized — back-to-back x3 then q4h","sig":"Combination bronchodilation via beta-agonist + anticholinergic. Continuous nebulization initially in severe exacerbation.","prescriber":"Pulmonology","start":"2024","refills":0,"status":"Active"},
    {"name":"Methylprednisolone 125mg IV then prednisone 40mg x5 days","sig":"Systemic steroids reduce treatment failure rate in COPD exacerbation. 5 days as effective as longer courses (REDUCE trial).","prescriber":"Pulmonology","start":"2024","refills":0,"status":"Active"},
    {"name":"Azithromycin 500mg daily x5 days — bacterial exacerbation","sig":"Covers atypical organisms (Mycoplasma, Chlamydophila). For purulent sputum indicating bacterial exacerbation.","prescriber":"Pulmonology","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"COPD Exacerbation Assessment","results":[
    {"test":"ABG — pH","value":"7.28","unit":"","ref":"7.35-7.45","flag":"L"},
    {"test":"ABG — pCO2","value":"72","unit":"mmHg","ref":"35-45","flag":"H"},
    {"test":"SpO2","value":"84","unit":"% room air","ref":"≥95%","flag":"L"},
    {"test":"PEFR","value":"35","unit":"% predicted","ref":">50% = mild","flag":"L"},
    {"test":"Procalcitonin","value":"1.2","unit":"ng/mL","ref":"<0.25 = bacterial likely","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Chest X-Ray","findings":"Hyperinflation, flattened diaphragms. No new consolidation. No pneumothorax. No effusion.","impression":"Hyperinflation consistent with COPD. No pneumonia. No pneumothorax."}],
  "ddxTargets": ["Acute COPD exacerbation — hypercapnic respiratory failure (correct)","Acute severe asthma — younger patient; no emphysema on CXR; reversible obstruction; different management","Pneumonia with COPD — consolidation on CXR; antibiotic choice differs; can coexist","Pulmonary embolism — tachycardia; pleuritic pain; normal PEFR; V/Q mismatch","CHF exacerbation — bilateral crackles; BNP elevated; different CXR pattern"],
  "coachFinal": "Diagnosis: acute COPD exacerbation with hypercapnic respiratory failure. Key learning: (1) NIV (BiPAP) indications in COPD exacerbation: pH <7.35 + elevated pCO2 (hypercapnic respiratory failure). NIV reduces intubation rate by 65%, ICU mortality by 50%, hospital stay. First-line before intubation if no contraindications (AMS, inability to protect airway, hemodynamic instability, facial trauma). (2) Oxygen target: 88-92% SpO2 in COPD exacerbation — higher oxygen suppresses hypoxic drive in chronic CO2 retainers → worsens hypercapnia. Do NOT target normal SpO2 in COPD. (3) Steroid duration: 5 days as effective as 14 days (REDUCE trial). No benefit to prolonged courses. Oral prednisone 40mg x5 days. (4) Antibiotic indications in COPD exacerbation (Winnipeg criteria): increased dyspnea + increased sputum volume + sputum purulence = all 3 present → antibiotics. 2 of 3 with purulence → antibiotics. (5) NIV failure → intubation: if pH not improving after 1-2 hours of BiPAP, or patient tiring/agitated/deteriorating → intubate. Intubation in COPD carries risk of auto-PEEP — use low respiratory rate, low PEEP, allow full exhalation."
},
"coral-snake-envenomation": {
  "diagnosis": "Eastern Coral Snake Envenomation — Delayed Neurological Toxicity",
  "problems": [
    {"problem":"Eastern coral snake envenomation — delayed neurotoxicity","icd":"T63.021A","onset":"2024","status":"Active","notes":"Tyler Brooks, 22M — bitten on right hand by eastern coral snake (red-yellow-black banding) while hiking in Florida. Initially minimal local symptoms. Now 6 hours later: ptosis, dysphagia, diplopia — onset of neurotoxicity."},
    {"problem":"Progressive neuromuscular blockade — respiratory failure risk","icd":"T63.021A","onset":"2024","status":"Active","notes":"Coral snake venom contains neurotoxins (phospholipase A2) that block presynaptic neuromuscular junction → progressive flaccid paralysis. Respiratory failure can occur 12-24 hours post-bite. Intubation may be needed."},
    {"problem":"Antivenom availability — North American coral snake antivenom scarce","icd":"T63.021A","onset":"2024","status":"Active","notes":"North American coral snake antivenom (Wyeth) production discontinued. Limited supply. Contact Poison Control (1-800-222-1222) and Florida Poison Control for antivenom availability."}
  ],
  "medications": [
    {"name":"North American coral snake antivenom — give early, before symptoms progress","sig":"Antivenom is most effective if given BEFORE respiratory failure. Once paralysis progresses, antivenom may not reverse established neuromuscular blockade. Contact Poison Control for antivenom location. Give 3-5 vials IV.","prescriber":"Emergency/Toxicology","start":"2024","refills":0,"status":"Locating antivenom — Poison Control contacted"},
    {"name":"Intubation — anticipate, have ready","sig":"Progressive ptosis + dysphagia + diplopia = neuromuscular blockade progressing. Respiratory failure may follow in hours. Prepare for RSI. Succinylcholine safe (not snake-bite specific contraindication).","prescriber":"Emergency/ICU","start":"2024","refills":0,"status":"Prepared — intubation likely"},
    {"name":"Poison Control 1-800-222-1222 — call immediately","sig":"Expert guidance on antivenom availability and dosing. Florida Poison Control has regional expertise in coral snake envenomation.","prescriber":"Emergency","start":"2024","refills":0,"status":"Called"}
  ],
  "labs": [{"date":"04/2024","panel":"Envenomation Assessment","results":[
    {"test":"Neurological exam — ptosis","value":"Bilateral ptosis — 2mm palpebral aperture","unit":"","ref":"Normal lid height","flag":"H"},
    {"test":"Gag reflex","value":"Diminished","unit":"","ref":"Present","flag":"H"},
    {"test":"Grip strength","value":"3/5 bilateral","unit":"","ref":"5/5","flag":"H"},
    {"test":"SpO2","value":"97","unit":"% room air (monitor closely)","ref":"≥95%","flag":""},
    {"test":"Coagulation (PT/PTT/fibrinogen)","value":"Normal — coral snake venom NOT coagulopathic","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Eastern coral snake envenomation (correct)","Pit viper (rattlesnake) envenomation — significant local tissue destruction; coagulopathy; different venom profile","Myasthenia gravis crisis — ptosis + diplopia; but no snake bite history; pyridostigmine test","Botulism — descending paralysis; foodborne or wound; no bite history","Organophosphate poisoning — cholinergic toxidrome (miosis, secretions, bradycardia); different mechanism"],
  "coachFinal": "Diagnosis: eastern coral snake envenomation. Key learning: (1) Coral snake identification: 'red touches yellow = kill a fellow; red touches black = friend of Jack.' Eastern coral snake (red-yellow-black) is neurotoxic. Scarlet king snake (red-black-yellow) is harmless. The rhyme applies only to North American coral snakes. (2) Delayed neurotoxicity: coral snake venom causes presynaptic neuromuscular blockade. Initial symptoms may be minimal (no swelling, no pain). Neurotoxicity onset 1-13 hours post-bite. Once established, paralysis may be irreversible even with antivenom — treat prophylactically before respiratory failure. (3) Antivenom timing: most effective BEFORE respiratory failure develops. Do not wait for severe symptoms. Give antivenom to any confirmed coral snake bite even without symptoms. (4) No coagulopathy: coral snake venom is purely neurotoxic (unlike crotalid/pit vipers which cause coagulopathy, hemotoxicity, and local necrosis). Normal PT/PTT/fibrinogen. (5) Antivenom scarcity: Wyeth discontinued North American coral snake antivenom production. Contact Poison Control immediately for current availability. Supportive care (mechanical ventilation) is the backup — patients can recover fully with ventilatory support alone."
},
"corneal-abrasionkeratitis": {
  "diagnosis": "Contact Lens-Related Bacterial Keratitis (Pseudomonas Suspected)",
  "problems": [
    {"problem":"Bacterial keratitis — contact lens related, Pseudomonas suspected","icd":"H16.009","onset":"2024","status":"Active","notes":"Michael Chen, 24M — extended-wear contact lens user. Acute severe eye pain, photophobia, decreased vision, mucopurulent discharge. Slit lamp: central corneal ulcer 3mm with dense stromal infiltrate and hypopyon."},
    {"problem":"Hypopyon — sterile or infectious anterior chamber reaction","icd":"H16.009","onset":"2024","status":"Active","notes":"Hypopyon (layering of WBCs in anterior chamber) indicates severe inflammatory response. In keratitis context with ulcer = infectious until proven otherwise. Aggressive topical antibiotic therapy required."},
    {"problem":"Vision-threatening emergency — central ulcer location","icd":"H16.009","onset":"2024","status":"Active","notes":"Central corneal ulcer risks permanent corneal scarring, perforation, and vision loss. Ophthalmology emergency — same-day evaluation mandatory."}
  ],
  "medications": [
    {"name":"Ciprofloxacin 0.3% ophthalmic drops — q1h initially (day), q2h (night)","sig":"Fluoroquinolone covers Pseudomonas (most common contact lens pathogen) and gram-positive organisms. Start immediately. Loading: 2 drops q15min x4 doses, then q1h. Pseudomonas can perforate the cornea within 24-48 hours if untreated.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active — hourly dosing"},
    {"name":"STOP contact lens wear immediately","sig":"Remove contact lens. Do not reinsert any lens until infection fully resolved and cleared by ophthalmology. Contact lens case and solution also discarded.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Done"},
    {"name":"Corneal scraping for culture and Gram stain — before antibiotics if possible","sig":"Scraping of ulcer base with spatula → plated directly onto blood agar, chocolate agar, and Sabouraud's. Identifies organism and guides antibiotic therapy. If unavailable urgently, start empiric antibiotics and scrape within 24h.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Done — results pending"}
  ],
  "labs": [{"date":"04/2024","panel":"Keratitis Assessment","results":[
    {"test":"Visual acuity right eye","value":"20/200","unit":"","ref":"20/20","flag":"H"},
    {"test":"Slit lamp — ulcer size","value":"Central corneal ulcer 3mm, dense stromal infiltrate, hypopyon 1mm","unit":"","ref":"Clear cornea","flag":"H"},
    {"test":"Corneal scraping Gram stain","value":"Gram-negative rods (Pseudomonas suspected)","unit":"","ref":"No organisms","flag":"H"},
    {"test":"Intraocular pressure","value":"8","unit":"mmHg","ref":"10-21 (low = corneal perforation risk)","flag":"L"},
    {"test":"Contact lens wear pattern","value":"Extended-wear (overnight) for 2 weeks continuously","unit":"","ref":"Daily removal required","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Bacterial keratitis — Pseudomonas (correct)","Acanthamoeba keratitis — contact lens use; ring infiltrate; resistant to standard antibiotics; very painful; PHMB treatment","Fungal keratitis — post-trauma with plant material; feathery infiltrate; slower onset; natamycin treatment","Herpes simplex keratitis — dendritic ulcer on fluorescein staining; recurrent; antiviral treatment","Corneal abrasion — pain + tearing; no infiltrate; no hypopyon; heals with patching"],
  "coachFinal": "Diagnosis: bacterial keratitis from contact lens use (Pseudomonas suspected). Key learning: (1) Contact lens and Pseudomonas: extended overnight wear of contact lenses is the strongest risk factor for Pseudomonas aeruginosa keratitis. Pseudomonas has proteases that can perforate the cornea within 24-48 hours — this is an ophthalmological emergency. The longer the contact lens wear without removal, the higher the risk. (2) Empiric treatment: topical fluoroquinolone (ciprofloxacin or moxifloxacin) covers Pseudomonas. Fortified antibiotics (tobramycin + cefazolin) for severe cases. Hourly instillation initially. (3) Corneal scraping is diagnostic: perform before antibiotics if possible — spatula scraping of ulcer base → Gram stain + culture. Identifies organism and sensitivities. Directly plated onto media in clinic. (4) Acanthamoeba distinction: contact lens + severe pain + ring-shaped infiltrate = think Acanthamoeba (resistant to standard antibiotics, requires PHMB). (5) Hypopyon: does NOT indicate endophthalmitis or require anterior chamber tap in keratitis — it is a sterile inflammatory response to the corneal infection. Resolves with treatment of the keratitis."
},
"crohn-flare": {
  "diagnosis": "Crohn's Disease Flare — Moderate-Severe with Stricture",
  "problems": [
    {"problem":"Crohn's disease flare — moderate-severe (HBI 12)","icd":"K50.90","onset":"2024","status":"Active","notes":"Amanda Garcia, 32F — known Crohn's disease (terminal ileum) diagnosed 5 years ago. 3-week history crampy RLQ pain, 8 loose stools/day, low-grade fever, 8 lb weight loss. Harvey-Bradshaw Index 12 = moderate-severe."},
    {"problem":"Ileal stricture — obstructive symptoms","icd":"K50.012","onset":"2024","status":"Active","notes":"Post-inflammatory stricture terminal ileum on CT. Intermittent obstruction with eating. Stricture may require endoscopic dilation or resection if medically refractory."},
    {"problem":"Biologic therapy assessment — inadequate response to current therapy","icd":"K50.90","onset":"2024","status":"Active","notes":"Currently on azathioprine monotherapy. Moderate-severe flare despite immunomodulator = step up to biologic therapy (anti-TNF or vedolizumab or ustekinumab)."}
  ],
  "medications": [
    {"name":"Prednisone 40mg daily x8 weeks taper — induction","sig":"Systemic steroids for acute flare induction. NOT used for maintenance (steroid dependency = step-up therapy needed). Taper over 8-12 weeks.","prescriber":"Gastroenterology","start":"2024","refills":0,"status":"Active — induction"},
    {"name":"Adalimumab (Humira) — biologic step-up therapy","sig":"Anti-TNF for moderate-severe Crohn's failing immunomodulator. Adalimumab or infliximab. Screen for TB (TST/IGRA) and Hep B before starting. Effective for luminal and fistulizing disease.","prescriber":"Gastroenterology","start":"2024","refills":0,"status":"Initiating — screening complete"},
    {"name":"MR enterography — evaluate stricture","sig":"Best modality for Crohn's small bowel evaluation. Assesses stricture length, inflammatory vs fibrotic component, penetrating disease, abscesses. Guides decision for endoscopic vs surgical management.","prescriber":"Gastroenterology","start":"2024","refills":0,"status":"Ordered"}
  ],
  "labs": [{"date":"04/2024","panel":"Crohn's Flare Assessment","results":[
    {"test":"CRP","value":"48","unit":"mg/L","ref":"<10","flag":"H"},
    {"test":"ESR","value":"64","unit":"mm/hr","ref":"<20","flag":"H"},
    {"test":"Fecal calprotectin","value":"1800","unit":"μg/g","ref":"<50 normal; >250 = IBD active","flag":"H"},
    {"test":"Albumin","value":"2.9","unit":"g/dL","ref":"3.5-5.0","flag":"L"},
    {"test":"Hemoglobin","value":"10.2","unit":"g/dL","ref":"12-16","flag":"L"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Abdomen/Pelvis with Contrast","findings":"Terminal ileal wall thickening 12mm with surrounding fat stranding. Segment of stricturing 8cm. Small pre-stenotic dilation. No abscess, no perforation, no fistula.","impression":"Active Crohn's disease with terminal ileal stricture. No penetrating complications. Step-up therapy indicated."}],
  "ddxTargets": ["Crohn's disease flare with stricture (correct)","Ulcerative colitis — continuous mucosal involvement from rectum; no small bowel; different pattern","Ileocecal tuberculosis — endemic exposure; TB testing; similar CT appearance","Appendicitis — acute onset; RLQ tenderness; no known Crohn's history","Irritable bowel syndrome — no elevated inflammatory markers; no structural changes; functional diagnosis"],
  "coachFinal": "Diagnosis: Crohn's disease flare, moderate-severe. Key learning: (1) Crohn's vs UC distinction: Crohn's = transmural, skip lesions, small bowel involvement, perianal disease, fistulas, strictures, non-caseating granulomas. UC = continuous, mucosal only, rectum → proximal colon, no small bowel, no fistulas, pseudopolyps. Backwash ileitis (terminal ileum) can occur in severe UC but is not true small bowel Crohn's. (2) Disease severity scoring: Harvey-Bradshaw Index (HBI) for Crohn's — general well-being + abdominal pain + stools/day + abdominal mass + complications. Score >9 = severe. Endoscopic activity does not always correlate with clinical activity. (3) Inflammatory vs fibrotic stricture: CT/MR enterography can estimate the ratio of active inflammation to fibrous stricture. Inflammatory stricture → responds to medical therapy. Fibrotic stricture → endoscopic balloon dilation or surgical resection. (4) Biologic selection: anti-TNF (infliximab, adalimumab) for moderate-severe Crohn's. Vedolizumab (gut-selective) for patients where systemic immunosuppression is a concern. Ustekinumab (IL-12/23 blockade) for anti-TNF failure. Screen for TB and hepatitis B before ALL biologics. (5) Fecal calprotectin: excellent biomarker for IBD activity and mucosal healing. >250μg/g = active inflammation. <50 = mucosal healing. Useful for monitoring treatment response without repeated colonoscopy."
},
"deep-vein-thrombosis": {
  "diagnosis": "Acute Proximal Deep Vein Thrombosis — Left Femoral Vein (Provoked by Immobility)",
  "problems": [
    {"problem":"Proximal DVT — left femoral and popliteal veins","icd":"I82.402","onset":"2024","status":"Active","notes":"Sandra Williams, 58F — recent 14-hour flight, left leg swelling, pain, and erythema for 3 days. Duplex ultrasound: non-compressible left femoral and popliteal veins with echogenic thrombus. Wells score 3 = high probability."},
    {"problem":"Provoked DVT — prolonged immobility (flight)","icd":"I82.402","onset":"2024","status":"Active","notes":"Clear provokable risk factor (travel immobility). Provoked DVT has lower recurrence risk than unprovoked — anticoagulation duration typically 3 months."},
    {"problem":"PE risk — proximal DVT carries significant PE risk","icd":"I82.402","onset":"2024","status":"Active","notes":"Proximal DVT (above popliteal fossa) carries ~50% risk of symptomatic PE if untreated. Anticoagulation prevents further embolization."}
  ],
  "medications": [
    {"name":"Rivaroxaban 15mg BID x21 days then 20mg daily","sig":"DOAC first-line for DVT treatment. Rivaroxaban: fixed-dose oral, no monitoring, non-inferior to LMWH/warfarin (EINSTEIN trial). 3-month total duration for provoked DVT.","prescriber":"Medicine","start":"2024","refills":1,"status":"Active"},
    {"name":"Compression stockings 30-40mmHg — graduated","sig":"Reduces post-thrombotic syndrome (PTS) risk. Improves symptoms. Start after acute phase. Wear for minimum 2 years.","prescriber":"Medicine/Vascular","start":"2024","refills":0,"status":"Prescribed"},
    {"name":"Ambulation — encouraged immediately","sig":"Early ambulation with anticoagulation is SAFE and reduces pain and swelling. Bed rest does NOT prevent PE in anticoagulated patients and worsens outcomes.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active — ambulate"}
  ],
  "labs": [{"date":"04/2024","panel":"DVT Assessment","results":[
    {"test":"D-dimer","value":"3.8","unit":"mg/L","ref":"<0.5 (elevated — supports DVT)","flag":"H"},
    {"test":"Wells Score","value":"3 (high probability)","unit":"","ref":"0-1 = low; 2 = moderate; ≥3 = high","flag":"H"},
    {"test":"CBC — platelet count","value":"224","unit":"K/μL","ref":"150-400","flag":""},
    {"test":"Creatinine","value":"0.9","unit":"mg/dL","ref":"0.5-1.1 (for DOAC dosing)","flag":""},
    {"test":"Provokable risk factor screen","value":"14-hour flight 3 days before symptom onset","unit":"","ref":"","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Lower Extremity Duplex Ultrasound","findings":"Non-compressible left common femoral and popliteal veins. Echogenic thrombus visible. No flow on Doppler in involved segments. Right leg normal.","impression":"Acute proximal left DVT involving femoral and popliteal veins."}],
  "ddxTargets": ["Proximal DVT — left femoral vein (correct)","Cellulitis — erythema + warmth; no DVT on duplex; no travel history","Baker's cyst rupture — posterior knee swelling; ultrasound shows cyst rupture; no venous thrombosis","Superficial thrombophlebitis — palpable cord along vein; duplex shows superficial vein; different management","Muscle strain/hematoma — trauma history; ultrasound shows muscle not vein"],
  "coachFinal": "Diagnosis: acute proximal DVT, provoked. Key learning: (1) Wells DVT score: active cancer (1), paralysis/immobilization (1), bedridden >3 days or major surgery <12 weeks (1), localized tenderness along deep veins (1), entire leg swollen (1), calf swelling >3cm (1), pitting edema (1), collateral superficial veins (1), prior DVT (1), alternative diagnosis as likely as DVT (-2). Score ≥2 = duplex ultrasound. Score <2 + negative D-dimer = DVT excluded. (2) Proximal vs distal DVT: proximal (popliteal and above) = treat with anticoagulation. Isolated distal (calf) = can observe with serial ultrasound OR treat — depends on symptoms and risk factors. (3) DOAC advantages: fixed oral dosing, no monitoring, similar efficacy to LMWH/warfarin (EINSTEIN, AMPLIFY trials). Avoid DOACs in severe renal failure (eGFR <15-30) and antiphospholipid syndrome (use warfarin). (4) Duration: provoked (reversible risk factor like immobility, surgery, estrogen) → 3 months. Unprovoked → 3-6 months minimum, consider indefinite based on bleeding risk. Recurrent unprovoked → indefinite anticoagulation. (5) Post-thrombotic syndrome (PTS): chronic leg pain, swelling, skin changes after DVT from valve damage. Compression stockings for ≥2 years reduce PTS incidence."
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
    if e.get("diagnosis"): data["meta"]["diagnosis"] = e["diagnosis"]
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
print(f"\nBatch 22: {done}/{len(ENRICHMENTS)} enriched")
