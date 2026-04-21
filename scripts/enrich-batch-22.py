#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"cholelithiasis-cholecystitis": {
  "diagnosis": "Acute Calculous Cholecystitis with Choledocholithiasis (CBD Stone)",
  "problems": [
    {"problem":"Acute cholecystitis + choledocholithiasis","icd":"K80.42","onset":"2024","status":"Active","notes":"Patricia Monroe, 56F — RUQ pain, fever 38.8°C, Murphy sign positive, jaundice. ALT 180, direct bilirubin 3.2, CBD 12mm dilated on ultrasound — CBD stone plus cholecystitis."},
    {"problem":"Choledocholithiasis — ERCP indicated before cholecystectomy","icd":"K80.51","onset":"2024","status":"Active","notes":"CBD stone causing biliary obstruction. ERCP with stone extraction required before or during cholecystectomy."},
    {"problem":"Ascending cholangitis screen — Charcot triad","icd":"K83.0","onset":"2024","status":"Active","notes":"Fever + jaundice + RUQ pain = Charcot triad. Monitor closely for septic cholangitis (Reynolds pentad)."}
  ],
  "medications": [
    {"name":"Piperacillin-tazobactam 3.375g IV q6h","sig":"Empiric biliary coverage for gram-negative organisms.","prescriber":"Surgery/GI","start":"2024","refills":0,"status":"Active"},
    {"name":"ERCP with sphincterotomy and stone extraction — within 24h","sig":"CBD stone must be cleared before laparoscopic cholecystectomy. ERCP first, then same-admission cholecystectomy.","prescriber":"GI/Surgery","start":"2024","refills":0,"status":"Scheduled"},
    {"name":"Laparoscopic cholecystectomy — after ERCP","sig":"After CBD cleared, proceed with laparoscopic cholecystectomy same admission.","prescriber":"Surgery","start":"2024","refills":0,"status":"Planned"}
  ],
  "labs": [{"date":"04/2024","panel":"Cholecystitis + Choledocholithiasis","results":[
    {"test":"ALT","value":"180","unit":"U/L","ref":"7-56","flag":"H"},
    {"test":"Direct bilirubin","value":"3.2","unit":"mg/dL","ref":"0-0.3","flag":"H"},
    {"test":"ALP","value":"320","unit":"U/L","ref":"44-147","flag":"H"},
    {"test":"WBC","value":"16.2","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Lipase","value":"48","unit":"U/L","ref":"10-140","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"RUQ Ultrasound","findings":"Gallstones, wall thickening 6mm, pericholecystic fluid, Murphy sign positive. CBD 12mm with echogenic material consistent with stone.","impression":"Acute cholecystitis with CBD stone and biliary obstruction. ERCP indicated."}],
  "ddxTargets": ["Acute cholecystitis with choledocholithiasis (correct)","Cholecystitis without CBD stone — bilirubin/ALP pattern + CBD dilation distinguishes","Ascending cholangitis — Charcot triad present; treat same; ERCP emergent if septic","Gallstone pancreatitis — lipase normal here; ALT >150 suggests gallstone trigger"],
  "coachFinal": "Diagnosis: acute cholecystitis with choledocholithiasis. Key learning: (1) CBD stone detection: elevated direct bilirubin + ALP/GGT + dilated CBD on ultrasound. ALT >150 in cholecystitis strongly suggests gallstone cause. CBD >8mm warrants MRCP or ERCP. (2) Management sequence: confirm CBD stone → ERCP first → then laparoscopic cholecystectomy (same admission preferred). Cholecystectomy without clearing CBD = retained CBD stone. (3) Ascending cholangitis: Charcot triad = fever + RUQ pain + jaundice. Reynolds pentad adds hypotension and altered consciousness = septic cholangitis = emergent ERCP within hours. (4) ERCP complications: post-ERCP pancreatitis most common (2-3%). Success rate >90% for CBD stone extraction. (5) Gallstone pancreatitis rule: ALT >150 in acute pancreatitis = gallstone etiology (95% specific). ERCP only if concurrent cholangitis — not for uncomplicated gallstone pancreatitis."
},
"chronic-salicylate-toxicity": {
  "diagnosis": "Chronic Salicylate Toxicity — Occult, Elderly Patient",
  "problems": [
    {"problem":"Chronic salicylate toxicity — occult presentation","icd":"T39.091A","onset":"2024","status":"Active","notes":"Helen Foster, 82F — confusion, tinnitus, hyperventilation, metabolic acidosis. On aspirin 325mg daily + bismuth subsalicylate multiple times daily. Salicylate level 48mg/dL."},
    {"problem":"Mixed acid-base — respiratory alkalosis + metabolic acidosis","icd":"E87.2","onset":"2024","status":"Active","notes":"Salicylate stimulates respiratory center → respiratory alkalosis. Uncouples oxidative phosphorylation → metabolic acidosis. Mixed pattern is pathognomonic."},
    {"problem":"CNS effects — confusion and tinnitus","icd":"T39.091A","onset":"2024","status":"Active","notes":"CNS salicylate penetration. Elderly patients develop CNS toxicity at lower levels than acute overdose."}
  ],
  "medications": [
    {"name":"Stop all salicylate sources immediately","sig":"Aspirin + bismuth subsalicylate both discontinued. Review ALL medications for hidden salicylate.","prescriber":"Medicine/Toxicology","start":"2024","refills":0,"status":"STOP"},
    {"name":"IV sodium bicarbonate — urine alkalinization","sig":"Target urine pH 7.5-8.0. Alkalinized urine traps ionized salicylate → prevents tubular reabsorption → enhances elimination.","prescriber":"Medicine/Toxicology","start":"2024","refills":0,"status":"Active"},
    {"name":"Hemodialysis — if level >40mg/dL with symptoms","sig":"Lower threshold in chronic toxicity. Indications: AKI, altered mental status, pulmonary edema, refractory acidosis.","prescriber":"Nephrology/Toxicology","start":"2024","refills":0,"status":"Nephrology consulted"}
  ],
  "labs": [{"date":"04/2024","panel":"Salicylate Toxicity","results":[
    {"test":"Salicylate level","value":"48","unit":"mg/dL","ref":"<20 therapeutic; >30 toxic","flag":"H"},
    {"test":"ABG — pH","value":"7.46","unit":"","ref":"7.35-7.45","flag":"H"},
    {"test":"ABG — pCO2","value":"28","unit":"mmHg","ref":"35-45","flag":"L"},
    {"test":"Bicarbonate","value":"18","unit":"mEq/L","ref":"22-26","flag":"L"},
    {"test":"Anion gap","value":"18","unit":"mEq/L","ref":"8-12","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Chronic salicylate toxicity (correct)","Sepsis — mixed acid-base; but salicylate level diagnostic","Methanol/ethylene glycol — elevated osmolar gap; different history","SIADH — hyponatremia but not the mixed acid-base pattern"],
  "coachFinal": "Diagnosis: chronic salicylate toxicity. Key learning: (1) Chronic vs acute toxicity: chronic is more dangerous at lower levels, CNS symptoms prominent, levels 30-60mg/dL, elderly most vulnerable. The Done nomogram does NOT apply to chronic toxicity. (2) Classic mixed acid-base: salicylate stimulates respiratory center → respiratory alkalosis (low pCO2). Uncouples oxidative phosphorylation → lactic + metabolic acidosis. Mixed respiratory alkalosis + metabolic acidosis = highly characteristic. (3) Occult sources in elderly: bismuth subsalicylate (Pepto-Bismol), oil of wintergreen, topical salicylates. Always check in elderly with unexplained toxicity. (4) Urine alkalinization: NaHCO3 targets urine pH 7.5-8.0. Ionized salicylate at alkaline pH cannot cross tubular membrane → ion trapping → enhanced elimination. (5) Dialysis in chronic toxicity: lower threshold than acute. Level >40 with symptoms, AKI, CNS change, pulmonary edema = dialysis indication. Dialysis removes salicylate AND corrects acid-base."
},
"cns-infection": {
  "diagnosis": "CNS Toxoplasmosis — AIDS with CD4 82",
  "problems": [
    {"problem":"CNS toxoplasmosis — AIDS-defining, CD4 82","icd":"B58.2","onset":"2024","status":"Active","notes":"Marcus Johnson, 38M — known HIV, not on ART, CD4 82, VL 180,000. New seizure, left hemiparesis, headache. MRI: multiple ring-enhancing lesions. Toxoplasma IgG positive."},
    {"problem":"Multiple ring-enhancing lesions — toxoplasmosis vs PCNSL","icd":"B58.2","onset":"2024","status":"Active","notes":"Treat toxo empirically first. No improvement at 10-14 days → biopsy for PCNSL. Toxo far more common with CD4 <200 and Toxo IgG positive."},
    {"problem":"Not on ART — IRIS risk on starting treatment","icd":"B20","onset":"2024","status":"Active","notes":"Defer ART 2-3 weeks to avoid IRIS (immune reconstitution inflammatory syndrome causing paradoxical intracranial worsening)."}
  ],
  "medications": [
    {"name":"Pyrimethamine 200mg loading then 50mg daily + sulfadiazine 1.5g q6h","sig":"First-line for CNS toxoplasmosis. Duration: 6 weeks acute then lifelong suppressive therapy while CD4 <200.","prescriber":"Infectious Disease","start":"2024","refills":0,"status":"Active"},
    {"name":"Leucovorin 10-20mg daily — mandatory with pyrimethamine","sig":"Pyrimethamine inhibits DHFR → myelosuppression. Leucovorin bypasses inhibition. ALWAYS give with pyrimethamine.","prescriber":"Infectious Disease","start":"2024","refills":3,"status":"Active"},
    {"name":"ART — defer 2-3 weeks to avoid IRIS","sig":"Immediate ART with active CNS OI → IRIS → paradoxical intracranial inflammation → herniation.","prescriber":"Infectious Disease","start":"2024","refills":0,"status":"Deferred 2-3 weeks"}
  ],
  "labs": [{"date":"04/2024","panel":"CNS Toxoplasmosis","results":[
    {"test":"CD4 count","value":"82","unit":"cells/μL","ref":"500-1500","flag":"L"},
    {"test":"HIV viral load","value":"180,000","unit":"copies/mL","ref":"Undetectable","flag":"H"},
    {"test":"Toxoplasma IgG","value":"Positive — 1:1024","unit":"","ref":"Negative","flag":"H"},
    {"test":"Toxoplasma IgM","value":"Negative (reactivation, not primary)","unit":"","ref":"Negative","flag":""},
    {"test":"CSF EBV PCR","value":"Negative (positive suggests PCNSL)","unit":"","ref":"Negative","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with Gadolinium","findings":"Multiple ring-enhancing lesions (4): right basal ganglia 2.8cm, bilateral frontal lobe lesions. Eccentric target sign. Surrounding vasogenic edema.","impression":"Multiple ring-enhancing lesions in AIDS — CNS toxoplasmosis most likely. Empiric treatment indicated."}],
  "ddxTargets": ["CNS toxoplasmosis (correct — treat empirically)","Primary CNS lymphoma — EBV+ in CSF; single periventricular lesion; biopsy if toxo fails at 10-14 days","Cryptococcal meningitis — meningitic pattern; India ink; crypto antigen","Bacterial brain abscess — toxo IgG positive makes toxo more likely","Tuberculoma — endemic exposure; AFB culture"],
  "coachFinal": "Diagnosis: CNS toxoplasmosis in AIDS. Key learning: (1) Empiric treatment rule: HIV, CD4 <200, Toxoplasma IgG positive, multiple ring-enhancing lesions → treat empirically for toxoplasmosis first without biopsy. Clinical and radiological improvement at 10-14 days confirms toxo. No improvement → biopsy for PCNSL. (2) Toxo IgG negative: if seronegative, toxo very unlikely (<3%) → proceed to biopsy sooner. (3) PCNSL distinction: single periventricular lesion, EBV+ in CSF (85% sensitive), responds dramatically to dexamethasone, CD4 typically <50. (4) IRIS timing: treat OI 2-3 weeks before starting ART. Exception protocols for TB meningitis, cryptococcal meningitis, PML. (5) Suppressive therapy: after 6 weeks acute treatment, lifelong pyrimethamine + sulfadiazine until CD4 >200 for ≥6 months on ART. TMP-SMX primary prophylaxis for CD4 <200 covers both PCP and toxo."
},
"cns-lymphoma": {
  "diagnosis": "Primary CNS Lymphoma — Periventricular, Immunocompetent",
  "problems": [
    {"problem":"Primary CNS lymphoma — periventricular butterfly pattern","icd":"C85.20","onset":"2024","status":"Active","notes":"Elizabeth Park, 68F — immunocompetent. Progressive confusion, personality change, right arm weakness. MRI: periventricular butterfly-pattern homogeneous enhancing mass crossing corpus callosum."},
    {"problem":"Dramatic steroid response — diagnostic trap","icd":"C85.20","onset":"2024","status":"Active","notes":"PCNSL melts with corticosteroids. Steroids before biopsy = non-diagnostic biopsy. Withhold steroids until tissue obtained."},
    {"problem":"Biopsy required — tissue diagnosis mandatory","icd":"C85.20","onset":"2024","status":"Active","notes":"Stereotactic biopsy before any steroids. High yield >90% in PCNSL."}
  ],
  "medications": [
    {"name":"HOLD steroids until biopsy obtained","sig":"PCNSL is steroid-sensitive — lymphoma cells lyse → non-diagnostic biopsy. Only use dexamethasone if life-threatening herniation.","prescriber":"Neurosurgery/Neuro-oncology","start":"2024","refills":0,"status":"HOLD"},
    {"name":"High-dose methotrexate ≥3.5g/m² — post-biopsy","sig":"Backbone of PCNSL treatment. Penetrates BBB at high doses. Combined with rituximab and cytarabine consolidation. CR in 35-60%.","prescriber":"Neuro-oncology","start":"2024","refills":0,"status":"Post-biopsy"},
    {"name":"Stereotactic biopsy — before steroids","sig":"MRI-guided biopsy. Diagnostic yield >90%. Avoid steroids 7-10 days before biopsy if possible.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Scheduled"}
  ],
  "labs": [{"date":"04/2024","panel":"PCNSL Workup","results":[
    {"test":"HIV test","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"CSF cytology","value":"Atypical lymphocytes — suspicious","unit":"","ref":"Normal","flag":"H"},
    {"test":"CSF EBV PCR","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"CSF IL-10:IL-6 ratio","value":">1 (elevated IL-10 = PCNSL)","unit":"","ref":"<1 normal","flag":"H"},
    {"test":"Whole body PET","value":"No systemic lymphoma","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with Gadolinium","findings":"Periventricular homogeneous enhancing mass (4.2cm) crossing corpus callosum — butterfly pattern. Restricted diffusion on DWI. No ring enhancement.","impression":"Periventricular butterfly-pattern lesion highly characteristic of PCNSL. Biopsy before steroids."}],
  "ddxTargets": ["Primary CNS lymphoma (correct)","GBM — butterfly pattern can occur; heterogeneous ring enhancement more typical","CNS toxoplasmosis — ring-enhancing; CD4 <200; IgG positive; AIDS","Tumefactive MS — young patient; open ring sign; oligoclonal bands","Brain metastasis — known primary; multiple lesions more common"],
  "coachFinal": "Diagnosis: primary CNS lymphoma. Key learning: (1) PCNSL classic MRI: periventricular, corpus callosum (butterfly), HOMOGENEOUS enhancement (not ring-enhancing), restricted diffusion. 90% DLBCL. Median age 65. (2) The steroid trap: dexamethasone causes lymphoma cell lysis → lesion shrinks or disappears → biopsy non-diagnostic. Rule: no steroids before biopsy unless herniation. (3) AIDS vs immunocompetent PCNSL: AIDS = EBV-driven, CD4 <50, responds to ART. Immunocompetent = EBV-negative, requires high-dose MTX-based chemotherapy. (4) High-dose MTX rationale: MTX at ≥3.5g/m² penetrates BBB. Low-dose does not. Leucovorin rescue 24h after MTX is mandatory. (5) Whole-body staging with PET-CT to rule out systemic lymphoma. Vitreoretinal involvement in 15-25% — ophthalmology slit-lamp exam."
},
"complete-heart-block-v2": {
  "diagnosis": "Complete Heart Block — Lyme Carditis in Young Adult",
  "problems": [
    {"problem":"Complete (third-degree) AV block — young adult","icd":"I44.2","onset":"2024","status":"Active","notes":"Jennifer Kim, 35F — syncope while jogging. ECG: AV dissociation, ventricular rate 38, wide QRS escape. Young patient — reversible causes mandatory workup."},
    {"problem":"Lyme carditis — most common reversible cause in young adults","icd":"A69.20","onset":"2024","status":"Active","notes":"Hiked in Connecticut last month, rash 2 weeks ago (erythema migrans). Lyme serology pending. Endemic area + tick exposure + rash = strong suspicion."},
    {"problem":"Hemodynamic instability — transcutaneous pacing bridge","icd":"I44.2","onset":"2024","status":"Active","notes":"Rate 38, near-syncope. Transcutaneous pacing while etiology determined. Do NOT implant permanent pacemaker until reversible causes excluded."}
  ],
  "medications": [
    {"name":"Transcutaneous pacing — bridge to diagnosis","sig":"Temporary support at rate 60 bpm. Sedation required (uncomfortable). Confirms capture.","prescriber":"Cardiology/Emergency","start":"2024","refills":0,"status":"Active"},
    {"name":"IV ceftriaxone 2g daily x 14 days — if Lyme confirmed","sig":"Hospitalized Lyme carditis with high-degree AV block: IV ceftriaxone then oral doxycycline to complete 21 days. AV block resolves within 1-6 weeks of antibiotics.","prescriber":"Cardiology/ID","start":"2024","refills":0,"status":"Pending serology"},
    {"name":"HOLD permanent pacemaker — reversible cause first","sig":"Lyme carditis AV block is completely reversible. Premature PPM implantation = unnecessary permanent device. Hold until antibiotic trial complete.","prescriber":"Cardiology","start":"2024","refills":0,"status":"HOLD"}
  ],
  "labs": [{"date":"04/2024","panel":"Complete Heart Block Workup","results":[
    {"test":"Lyme ELISA (two-tier)","value":"Positive — IgM 1:256","unit":"","ref":"Negative","flag":"H"},
    {"test":"Lyme Western blot","value":"Positive — IgM bands (23kDa, 39kDa, 41kDa)","unit":"","ref":"Negative","flag":"H"},
    {"test":"Troponin I","value":"0.38","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"ANA/ANCA","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"TSH","value":"2.1","unit":"mIU/L","ref":"Normal","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"Echocardiogram","findings":"Normal LV size and function. EF 60%. No wall motion abnormalities. No pericardial effusion.","impression":"Normal systolic function. No structural cause for AV block."}],
  "ddxTargets": ["Lyme carditis — complete heart block (correct)","Degenerative conduction disease — older patient; no Lyme exposure; PPM indicated","Sarcoid heart disease — bilateral hilar adenopathy; ACE level; cardiac MRI","Myocarditis — troponin elevated here (Lyme myocarditis component)","Medication toxicity — digoxin, beta-blockers, CCBs; review medication list"],
  "coachFinal": "Diagnosis: Lyme carditis with complete heart block. Key learning: (1) Lyme carditis is completely reversible with antibiotics — the critical point. In complete heart block in patient <50 from endemic area: always ask about Lyme exposure, tick bite, erythema migrans rash. (2) Two-tier Lyme testing: ELISA first → if positive, Western blot confirmation. IgM = early. IgG = later/persistent. Do not diagnose on ELISA alone. (3) Treatment prevents PPM: antibiotics resolve AV block within 1-6 weeks in most cases. High-degree block = IV ceftriaxone inpatient. Lower-degree = oral doxycycline outpatient with monitoring. (4) Other reversible causes of complete heart block: medications (digoxin, beta-blockers, CCBs), hyperkalemia, myocarditis, sarcoidosis, Chagas disease, hypothyroidism. Always exclude before PPM. (5) PPM indication: complete heart block NOT from reversible cause, or reversible cause not resolving after appropriate treatment. For Lyme: if AV block persists >3-4 weeks of antibiotics, reassess for PPM."
},
"complex-migraine": {
  "diagnosis": "Sporadic Hemiplegic Migraine — After Stroke Exclusion",
  "problems": [
    {"problem":"Sporadic hemiplegic migraine — diagnosis of exclusion","icd":"G43.409","onset":"2024","status":"Active","notes":"Rachel Kim, 28F — 3rd episode over 2 years. Right throbbing headache with left arm and leg weakness developing over 20 minutes, resolving completely within 2 hours. MRI normal. No family history."},
    {"problem":"Stroke mimicry — mandatory workup each episode","icd":"G43.409","onset":"2024","status":"Active","notes":"Every episode requires acute stroke exclusion. MRI DWI is the key test. New neurological deficit = treat as stroke until imaging clears."},
    {"problem":"Triptan/ergotamine contraindication","icd":"G43.409","onset":"2024","status":"Active","notes":"Triptans and ergotamines contraindicated in hemiplegic migraine — theoretical vasoconstriction risk. Use antiemetics + NSAIDs."}
  ],
  "medications": [
    {"name":"Prochlorperazine 10mg IV — acute attack","sig":"IV dopamine antagonist effective for migraine. Avoid triptans and ergotamines in hemiplegic migraine.","prescriber":"Neurology/Emergency","start":"2024","refills":0,"status":"Active"},
    {"name":"Ketorolac 30mg IV + IV hydration","sig":"IV NSAID adjunct. Hydration improves headache regardless of status.","prescriber":"Emergency","start":"2024","refills":0,"status":"Active"},
    {"name":"Verapamil 240mg daily — preventive","sig":"Calcium channel blockade is first-line preventive for hemiplegic migraine. Avoid beta-blockers.","prescriber":"Neurology","start":"2024","refills":3,"status":"Initiating"}
  ],
  "labs": [{"date":"04/2024","panel":"Hemiplegic Migraine Workup","results":[
    {"test":"MRI DWI","value":"No restricted diffusion — no acute ischemia","unit":"","ref":"No stroke","flag":""},
    {"test":"MRA brain","value":"Normal — no stenosis or occlusion","unit":"","ref":"Normal","flag":""},
    {"test":"CADASIL screen (NOTCH3)","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Antiphospholipid antibodies","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"ESR/CRP","value":"Normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with DWI and MRA","findings":"No restricted diffusion. No enhancing lesions. No white matter lesions. Normal MRA.","impression":"Normal MRI brain. No acute ischemia. No structural cause."}],
  "ddxTargets": ["Sporadic hemiplegic migraine (correct — after stroke excluded)","Acute ischemic stroke — DWI negative excludes acute ischemia","TIA — fully resolved; but slow spreading aura distinguishes from sudden TIA","Focal seizure with Todd paralysis — EEG abnormality; seizure activity","CADASIL — white matter lesions; NOTCH3 mutation; subcortical infarcts"],
  "coachFinal": "Diagnosis: sporadic hemiplegic migraine. Key learning: (1) Hemiplegic migraine = migraine with MOTOR aura. Diagnosis of exclusion — every episode must exclude stroke. Aura spreads SLOWLY over 20-30 minutes (unlike sudden stroke onset) but DWI MRI is still mandatory. (2) Familial vs sporadic: familial = autosomal dominant, gene mutations (CACNA1A, ATP1A2, SCN1A). Sporadic = no family history, same clinical presentation. (3) Triptan contraindication: avoid triptans and ergotamines — theoretical vasoconstriction risk during possible reduced cerebral perfusion. Use IV prochlorperazine + ketorolac instead. (4) Cortical spreading depression: the pathophysiology — wave of neuronal depolarization followed by suppression spreading at 2-3mm/min across cortex. Explains the slow spread of symptoms. (5) Preventive: verapamil first-line. Valproate and topiramate also used. Avoid propranolol (theoretical worsening in hemiplegic migraine)."
},
"conus-medullaris-syndrome": {
  "diagnosis": "Conus Medullaris Syndrome — Metastatic Epidural Spinal Cord Compression",
  "problems": [
    {"problem":"Metastatic epidural cord compression — oncological emergency","icd":"G99.2","onset":"2024","status":"Active","notes":"Barbara Chen, 62F — metastatic breast cancer. Acute low back pain, perianal numbness, urinary retention, bilateral leg weakness. MRI: T12-L1 epidural metastasis compressing conus medullaris."},
    {"problem":"Conus medullaris — mixed UMN/LMN features","icd":"G99.2","onset":"2024","status":"Active","notes":"T12-L1 injury = mixed UMN + LMN: hyperreflexia + flaccid paralysis, saddle anesthesia, bladder/bowel dysfunction. Distinguishes from cauda equina (pure LMN) and thoracic cord (pure UMN)."},
    {"problem":"Urinary retention — bladder from conus","icd":"R33.9","onset":"2024","status":"Active","notes":"Conus controls bladder via S2-S4. Detrusor areflexia → urinary retention. Immediate catheterization."}
  ],
  "medications": [
    {"name":"Dexamethasone 10mg IV then 4mg q6h — IMMEDIATE","sig":"Reduces spinal cord edema. Start immediately on clinical suspicion — before MRI if deficits present. Every hour of untreated compression = permanent neurological loss.","prescriber":"Oncology/Neurosurgery","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Emergent spinal irradiation — within 24h","sig":"Radiation first-line for most metastatic cord compression. Start within 24 hours. Surgery first for radioresistant tumors or mechanical instability.","prescriber":"Radiation Oncology","start":"2024","refills":0,"status":"URGENT"},
    {"name":"Urinary catheterization — immediate","sig":"Foley for urinary retention. Prevent bladder overdistension injury.","prescriber":"Oncology","start":"2024","refills":0,"status":"Done — 450mL residual"}
  ],
  "labs": [{"date":"04/2024","panel":"Metastatic Cord Compression","results":[
    {"test":"Lower extremity strength","value":"3/5 bilateral hip flexors; 2/5 ankle dorsiflexion","unit":"","ref":"5/5","flag":"H"},
    {"test":"Perianal sensation","value":"Reduced — saddle anesthesia","unit":"","ref":"Intact","flag":"H"},
    {"test":"Bulbocavernosus reflex","value":"Absent (conus S3-4)","unit":"","ref":"Present","flag":"H"},
    {"test":"Calcium","value":"11.8","unit":"mg/dL","ref":"8.5-10.5","flag":"H"},
    {"test":"CEA","value":"68","unit":"ng/mL","ref":"<3","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Thoracolumbar Spine with Gadolinium","findings":"T12-L1 epidural metastasis with cord compression at conus medullaris. Pathological T12 fracture. Signal change within conus.","impression":"Metastatic epidural spinal cord compression at conus. Dexamethasone + radiation oncology urgently."}],
  "ddxTargets": ["Metastatic epidural cord compression at conus (correct)","Cauda equina syndrome — L2 and below; pure LMN; different level","Transverse myelitis — inflammatory; CSF pleocytosis; no mass","Epidural abscess — fever; elevated inflammatory markers; drainage required"],
  "coachFinal": "Diagnosis: metastatic epidural cord compression at conus medullaris. Key learning: (1) Spinal cord level localization: cervical/thoracic = UMN (spasticity, hyperreflexia, upgoing plantar). Conus medullaris (T12-L1) = MIXED UMN + LMN + saddle anesthesia + bladder/bowel. Cauda equina (below L1) = pure LMN, flaccid, areflexic, saddle anesthesia. (2) This is an oncological emergency: dexamethasone immediately (before MRI if deficits present), then emergent MRI, then radiation. Every hour = more permanent loss. (3) MRI entire spine: 30% of patients have multiple compression sites. Always image full spine. (4) Dexamethasone dose: 10mg IV bolus then 4mg q6h. Higher doses cause more side effects without benefit. (5) Surgery indication: radioresistant tumor, mechanical instability, unknown primary needing tissue diagnosis, neurological deterioration during radiation. Surgery + radiation superior to radiation alone (ASTRO trial)."
},
"copd-exacerbation-niv": {
  "diagnosis": "Acute COPD Exacerbation — Hypercapnic Respiratory Failure, NIV Indicated",
  "problems": [
    {"problem":"Acute COPD exacerbation — hypercapnic respiratory failure","icd":"J44.1","onset":"2024","status":"Active","notes":"Frank Morrison, 68M — GOLD stage III COPD, 60-pack-year smoking. Acute dyspnea, pursed-lip breathing, accessory muscle use, SpO2 84%, pH 7.28, pCO2 68mmHg. Type 2 respiratory failure."},
    {"problem":"Hypercapnia — BiPAP/NIV indicated","icd":"J44.1","onset":"2024","status":"Active","notes":"pH 7.28, pCO2 68. NIV (BiPAP) is indicated for acute COPD with pH <7.35 and pCO2 >45. Reduces intubation rate, ICU admission, and mortality."},
    {"problem":"Infection precipitant — antibiotic coverage","icd":"J44.1","onset":"2024","status":"Active","notes":"Purulent sputum, fever 38.2°C. Bacterial infection is the most common precipitant of AECOPD. Azithromycin + amoxicillin-clavulanate coverage."}
  ],
  "medications": [
    {"name":"BiPAP (IPAP 14/EPAP 6) — non-invasive ventilation","sig":"NIV first-line for AECOPD with pH <7.35 and pCO2 >45. Reduces intubation by 50%, ICU admission, and mortality. Target pH >7.35 within 1-2 hours.","prescriber":"Pulmonology/Critical Care","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Salbutamol + ipratropium nebulized q20min x 3 then q4h","sig":"Combined SABA + SAMA bronchodilation. Back-to-back during exacerbation.","prescriber":"Pulmonology","start":"2024","refills":0,"status":"Active"},
    {"name":"Prednisone 40mg daily x 5 days + azithromycin 500mg daily x 5 days","sig":"Systemic steroids reduce treatment failure and shorten hospitalization. Antibiotics for AECOPD with purulent sputum or fever (Anthonisen criteria).","prescriber":"Pulmonology","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"AECOPD/Respiratory Failure","results":[
    {"test":"ABG — pH","value":"7.28","unit":"","ref":"7.35-7.45","flag":"L"},
    {"test":"ABG — pCO2","value":"68","unit":"mmHg","ref":"35-45","flag":"H"},
    {"test":"ABG — pO2","value":"52","unit":"mmHg","ref":"≥80","flag":"L"},
    {"test":"SpO2 on 2L NC","value":"88","unit":"%","ref":"88-92% target in COPD","flag":""},
    {"test":"WBC","value":"14.6","unit":"K/μL","ref":"4.5-11","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Chest X-Ray","findings":"Hyperinflation, flattened diaphragms, increased AP diameter — chronic COPD changes. Right lower lobe infiltrate. No pneumothorax. No pleural effusion.","impression":"Chronic COPD with acute RLL infiltrate — AECOPD with infectious precipitant."}],
  "ddxTargets": ["AECOPD with hypercapnic failure — NIV indicated (correct)","Acute severe asthma — younger; no smoking history; different spirometry; responds better to bronchodilators","Pneumothorax — sudden onset; absent breath sounds; CXR confirms; decompress immediately","Congestive heart failure — BNP elevated; bilateral infiltrates; orthopnea; different pattern","PE — acute pleuritic pain; hypoxia out of proportion; CTA PE"],
  "coachFinal": "Diagnosis: AECOPD with hypercapnic respiratory failure — NIV indicated. Key learning: (1) NIV indications in AECOPD: pH <7.35 with pCO2 >45 = NIV indicated. NIV reduces intubation rate by 50%, reduces ICU admission, reduces mortality. The most important intervention after bronchodilators. (2) Oxygen target in COPD: 88-92% SpO2 (NOT 95-100%). Excessive oxygen in COPD can worsen hypercapnia via Haldane effect (oxyhemoglobin release of CO2) and loss of hypoxic drive. Titrate O2 carefully — target SpO2 88-92%. (3) NIV failure criteria → intubate: pH worsening after 1-2 hours of NIV, cannot protect airway, copious secretions, hemodynamic instability. If NIV fails → intubate immediately. (4) Steroids in AECOPD: prednisone 40mg x 5 days = equivalent to longer courses (REDUCE trial). Reduces treatment failure and length of stay. (5) Antibiotics in AECOPD: Anthonisen criteria — purulent sputum + increased dyspnea + increased sputum volume = all three present = antibiotics reduce mortality. One criterion alone = less clear benefit. Coverage: azithromycin or amoxicillin-clavulanate for outpatient/mild; fluoroquinolone for hospitalized."
},
"coral-snake-envenomation": {
  "diagnosis": "Eastern Coral Snake Envenomation — Delayed Neurotoxicity",
  "problems": [
    {"problem":"Eastern coral snake envenomation — neurotoxic","icd":"T63.021A","onset":"2024","status":"Active","notes":"Tyler Brooks, 22M — hiked in Florida, small puncture wounds on hand from red/yellow/black banded snake. Currently asymptomatic — 2 hours post-bite. Coral snake venom acts by irreversible acetylcholine receptor blockade → delayed neurotoxicity."},
    {"problem":"Delayed onset — 12-24 hour symptom-free period","icd":"T63.021A","onset":"2024","status":"Active","notes":"Classic: initial minimal local symptoms, then delayed bulbar palsy, ptosis, dysphagia, respiratory failure onset 12-24 hours after bite. Asymptomatic now does NOT mean safe."},
    {"problem":"Antivenom — give early, not wait for symptoms","icd":"T63.021A","onset":"2024","status":"Active","notes":"NORTH AMERICAN CORAL SNAKE ANTIVENOM: give as soon as envenomation confirmed. Once neurotoxicity begins, antivenom is LESS effective (irreversible receptor binding). Do not wait for symptoms."}
  ],
  "medications": [
    {"name":"North American Coral Snake Antivenom — 3-5 vials IV immediately","sig":"Give as soon as coral snake bite confirmed — do not wait for symptoms. Neurotoxicity is irreversible once it begins. Coral snake antivenom works by neutralizing free venom, not bound venom. Early is critical.","prescriber":"Emergency/Toxicology","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"ICU admission x 24 hours minimum — respiratory monitoring","sig":"All confirmed or suspected coral snake bites require ICU admission for 24h minimum. Respiratory failure can be sudden. Intubate early if bulbar symptoms develop.","prescriber":"Emergency/Toxicology","start":"2024","refills":0,"status":"ICU admission"},
    {"name":"Avoid neostigmine — not effective","sig":"Unlike pit viper envenomation, neostigmine does NOT reverse coral snake neurotoxicity (irreversible alpha-neurotoxin binding). Antivenom is the only treatment.","prescriber":"Toxicology","start":"2024","refills":0,"status":"Avoid"}
  ],
  "labs": [{"date":"04/2024","panel":"Coral Snake Envenomation","results":[
    {"test":"CBC/BMP","value":"Normal — no coagulopathy (unlike pit vipers)","unit":"","ref":"Coral snake = neurotoxic, not hemotoxic","flag":""},
    {"test":"PT/INR","value":"1.0","unit":"","ref":"Normal — no coagulopathy","flag":""},
    {"test":"CK","value":"Normal","unit":"U/L","ref":"No rhabdomyolysis initially","flag":""},
    {"test":"Ptosis assessment","value":"None currently — 2h post-bite","unit":"","ref":"Onset 12-24h","flag":""},
    {"test":"Negative pressure ventilation capacity","value":"Normal FVC — baseline","unit":"","ref":"Monitor q2-4h for decline","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Eastern coral snake envenomation — neurotoxic (correct)","Pit viper (rattlesnake, copperhead) — hemotoxic; local tissue destruction; coagulopathy; no delayed neurotoxicity; different antivenom","Non-venomous snake bite — no coral snake markings; symptomatic management","Myasthenia gravis crisis — not from snake bite; acetylcholine receptor antibodies","Botulism — descending paralysis; food history; not traumatic inoculation"],
  "coachFinal": "Diagnosis: Eastern coral snake envenomation. Key learning: (1) Coral snake identification: 'Red on yellow, kill a fellow; red on black, friend of Jack' — the coral snake has red touching yellow bands (Eastern US). Scarlet king snake (harmless) has red touching black. This mnemonic applies to North American snakes only. (2) Mechanism: coral snake venom contains post-synaptic alpha-neurotoxins that IRREVERSIBLY block acetylcholine receptors at the neuromuscular junction. This is why antivenom must be given early — once the toxin is bound, it cannot be displaced. (3) Delayed neurotoxicity: the symptom-free window of 12-24 hours is deceptive. Ptosis is usually the first symptom, followed by diplopia, dysphagia, dysarthria, then respiratory failure. Asymptomatic does NOT mean safe. (4) Antivenom timing: give North American Coral Snake Antivenom as soon as envenomation is confirmed — do not wait for symptoms. North American coral snake antivenom (Wyeth) has been discontinued; limited supply. Alternative: Tiger snake antivenom (Australian) has been used. (5) Unlike pit viper bites: coral snake envenomation causes NO significant local tissue destruction, NO coagulopathy, NO hemotoxicity. The only concern is neurotoxicity and respiratory failure. ICU for 24h minimum."
},
"crohn-flare": {
  "diagnosis": "Crohn's Disease Flare — Moderate-Severe, Steroid-Dependent",
  "problems": [
    {"problem":"Crohn's disease flare — moderate-severe (HBI 12)","icd":"K50.10","onset":"2024","status":"Active","notes":"Sophia Martinez, 32F — known Crohn's ileocolitis, on azathioprine. 3-week worsening abdominal pain, 8+ loose stools daily, 10 lb weight loss, CRP 84. HBI 12 = moderate-severe. Failed outpatient prednisone taper."},
    {"problem":"Steroid-dependent — escalation to biologic indicated","icd":"K50.10","onset":"2024","status":"Active","notes":"Third prednisone course in 12 months. Steroid-dependent disease = indication for biologic therapy. Continuing steroids → steroid toxicity without disease modification."},
    {"problem":"Abscess/fistula exclusion — complication screening","icd":"K50.10","onset":"2024","status":"Active","notes":"Crohn's complications: abscess (CT-guided drainage before steroids if present), fistula (perianal exam), stricture. CT enterography to exclude before immunosuppression intensification."}
  ],
  "medications": [
    {"name":"IV methylprednisolone 40-60mg daily — induction","sig":"For hospitalized moderate-severe Crohn's flare failing oral steroids. IV steroids for induction of remission only — not maintenance.","prescriber":"GI/Gastroenterology","start":"2024","refills":0,"status":"Active"},
    {"name":"Infliximab (Remicade) or vedolizumab — biologic initiation","sig":"Anti-TNF (infliximab) or gut-selective (vedolizumab) for steroid-dependent/refractory Crohn's. Initiate during hospitalization after excluding infection (TB screen, HBV, HIV). Accelerated induction (0, 2, 6 weeks).","prescriber":"Gastroenterology","start":"2024","refills":0,"status":"Initiating"},
    {"name":"Hold azathioprine during acute infection/flare assessment","sig":"Thiopurines are slow (3-6 months) and inadequate as monotherapy for moderate-severe disease. Combination with anti-TNF reduces immunogenicity.","prescriber":"Gastroenterology","start":"2024","refills":0,"status":"Review — hold if infection"}
  ],
  "labs": [{"date":"04/2024","panel":"Crohn's Flare Assessment","results":[
    {"test":"CRP","value":"84","unit":"mg/L","ref":"<10","flag":"H"},
    {"test":"ESR","value":"68","unit":"mm/hr","ref":"<20","flag":"H"},
    {"test":"Fecal calprotectin","value":"1840","unit":"μg/g","ref":"<50 (active IBD >250)","flag":"H"},
    {"test":"Stool C. diff","value":"Negative","unit":"","ref":"Negative (always check before immunosuppression)","flag":""},
    {"test":"Albumin","value":"2.9","unit":"g/dL","ref":"3.5-5.0","flag":"L"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Enterography","findings":"Wall thickening terminal ileum and ascending colon. Increased mural enhancement. Mesenteric fat stranding (creeping fat). No abscess. No free air. No stricture causing obstruction.","impression":"Active Crohn's ileocolitis. No complications. Biologic initiation appropriate."}],
  "ddxTargets": ["Crohn's disease flare — moderate-severe (correct)","Infectious colitis — C. diff negative; no recent antibiotics; but always test before immunosuppression","Intestinal lymphoma — risk in Crohn's especially with thiopurines; CT enterography helps","UC flare — Crohn's typically ileal/ileocolonic; skip lesions; transmural; rectal sparing","Bowel obstruction from stricture — CT shows no stricture here; obstructive symptoms absent"],
  "coachFinal": "Diagnosis: Crohn's disease flare, moderate-severe, steroid-dependent. Key learning: (1) Crohn's vs UC: Crohn's = transmural, any GI tract from mouth to anus, skip lesions, ileal/ileocolonic most common, perianal disease, fistulas/abscesses, smoking worsens. UC = mucosal, continuous from rectum proximally, no skip lesions, rectal involvement almost always. (2) Disease activity scoring: Harvey-Bradshaw Index (HBI) — stool frequency, abdominal pain, general wellbeing, complications. HBI >8 = moderate-severe. CRP + fecal calprotectin correlate with endoscopic activity. (3) Steroid-dependent definition: ≥2 steroid courses in 12 months or inability to taper below prednisolone 10mg = steroid-dependent = indication for biologic therapy. Steroids should never be maintenance therapy in IBD. (4) Before biologic initiation: TB screening (IGRA), HBV (reactivation risk), HIV, varicella immunity, pneumococcal vaccine. Exclude active infection — giving anti-TNF during active TB = fatal reactivation. (5) Anti-TNF vs vedolizumab: infliximab (anti-TNF) = faster onset, systemic immunosuppression, effective for extraintestinal manifestations. Vedolizumab (anti-α4β7 integrin) = gut-selective, slower onset, safer in elderly/vulnerable patients."
},
"deep-vein-thrombosis": {
  "diagnosis": "Acute Proximal DVT — Left Femoral Vein, Unprovoked",
  "problems": [
    {"problem":"Acute proximal DVT — left femoral vein, unprovoked","icd":"I82.4Y1","onset":"2024","status":"Active","notes":"Maria Chen, 38F — 2-week left leg swelling, pain, erythema. No recent travel, surgery, or immobilization. Wells score 3 (high). Duplex ultrasound: left femoral vein DVT extending to popliteal. Unprovoked = requires 3-6 months anticoagulation minimum."},
    {"problem":"Unprovoked DVT — malignancy and thrombophilia workup","icd":"I82.4Y1","onset":"2024","status":"Active","notes":"Unprovoked DVT in a patient <50 warrants age-appropriate cancer screening (breast, colorectal, cervical) and consideration of thrombophilia testing. Factor V Leiden most common inherited thrombophilia."},
    {"problem":"PE risk — proximal DVT has 50% PE rate without treatment","icd":"I82.4Y1","onset":"2024","status":"Active","notes":"Proximal DVT (above popliteal) has 50% risk of PE without anticoagulation. Isolated distal DVT (calf) has lower PE risk — anticoagulate based on symptoms and extension risk."}
  ],
  "medications": [
    {"name":"Apixaban 10mg BID x 7 days then 5mg BID x 3-6 months","sig":"DOAC is first-line for VTE treatment (AMPLIFY trial). No need for bridging heparin. Reduces stroke, PE, and VTE recurrence. Preferred over warfarin (no INR monitoring, fewer interactions).","prescriber":"Medicine/Hematology","start":"2024","refills":3,"status":"Active"},
    {"name":"Compression stockings — left leg","sig":"Graduated compression stockings reduce post-thrombotic syndrome (PTS) risk. Wear for at least 2 years after proximal DVT.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Thrombophilia workup — defer until off anticoagulation","sig":"Test after completing anticoagulation (results affected by active anticoagulation). Factor V Leiden, prothrombin G20210A, protein C/S, antithrombin III, antiphospholipid antibodies.","prescriber":"Hematology","start":"2024","refills":0,"status":"Deferred 3-6 months"}
  ],
  "labs": [{"date":"04/2024","panel":"DVT/PE Workup","results":[
    {"test":"D-dimer","value":"4.8","unit":"μg/mL","ref":"<0.5","flag":"H"},
    {"test":"CBC — platelet count","value":"228","unit":"K/μL","ref":"150-400 (baseline for anticoagulation)","flag":""},
    {"test":"Creatinine","value":"0.9","unit":"mg/dL","ref":"0.5-1.1 (renal function for DOAC dosing)","flag":""},
    {"test":"Beta-hCG","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Wells DVT Score","value":"3 — high probability","unit":"","ref":"≥3 = high probability","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Lower Extremity Venous Duplex Ultrasound","findings":"Non-compressible left femoral vein extending to popliteal vein. No flow on Doppler. Right lower extremity normal. No Baker cyst.","impression":"Acute left femoral-popliteal DVT. Anticoagulation indicated."}],
  "ddxTargets": ["Proximal DVT — unprovoked (correct)","Cellulitis — unilateral erythema but no clot on ultrasound; non-compressibility distinguishes","Ruptured Baker cyst — posterior knee pain; ultrasound shows cyst rupture; mimic DVT","Superficial thrombophlebitis — palpable cord; superficial vein; limited PE risk; NSAIDs","Lymphedema — bilateral; pitting; no D-dimer elevation; chronic onset"],
  "coachFinal": "Diagnosis: acute proximal DVT, unprovoked. Key learning: (1) Wells DVT score: each criterion = 1 point (+2 for active cancer; +1 for paralysis, recent plaster/cast; +1 for recently bedridden >3 days or surgery within 12 weeks; +1 for localized tenderness; +1 for entire leg swollen; +1 for calf swelling >3cm vs contralateral; +1 for pitting edema; +1 for collateral superficial veins; -2 for alternative diagnosis at least as likely). ≥3 = high probability. (2) D-dimer: highly sensitive but non-specific. Negative D-dimer in low-pretest probability = excludes DVT (NPV >99%). Elevated D-dimer with high probability = confirm with ultrasound, not add more tests. (3) DOAC vs warfarin for DVT: DOACs (apixaban, rivaroxaban) are preferred — noninferior, no INR monitoring, fewer interactions, lower bleeding risk. Warfarin still used in antiphospholipid syndrome (target INR 2-3 or 3-4 depending on risk). (4) Duration of anticoagulation: provoked (surgery, trauma, immobilization) = 3 months. Unprovoked = minimum 3-6 months, consider indefinite if high recurrence risk (male, proximal, no reversible risk factor). (5) Post-thrombotic syndrome: complication of DVT from venous hypertension → chronic leg pain, edema, skin changes, ulceration. Compression stockings for ≥2 years after proximal DVT reduce PTS risk."
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
