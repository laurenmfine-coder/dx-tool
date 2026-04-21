#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"bacterial-tracheitis": {
  "diagnosis": "Bacterial Tracheitis (Membranous Croup) — Staphylococcus aureus",
  "problems": [
    {"problem":"Bacterial tracheitis — subglottic obstruction with membrane","icd":"J04.11","onset":"2024","status":"Active","notes":"Ethan Morris, 4M — 2 days viral croup treated at home, now acute deterioration: high fever 40.2°C, toxic appearance, stridor at rest, drooling, not responsive to racemic epinephrine. Bacterial superinfection of trachea."},
    {"problem":"Upper airway obstruction — impending respiratory failure","icd":"J98.01","onset":"2024","status":"Active","notes":"Child sitting upright, stridor worsening, SpO2 91% on 10L. Bacterial tracheitis does not respond to croup standard treatment. Requires intubation — fibrinous membrane can cause sudden complete obstruction."},
    {"problem":"Sepsis — systemic toxicity","icd":"A41.01","onset":"2024","status":"Active","notes":"High fever, toxic appearance, tachycardia 162. Bacterial tracheitis causes significant systemic toxicity unlike viral croup."}
  ],
  "medications": [
    {"name":"Controlled endotracheal intubation — OR with ENT/anesthesia ready","sig":"Bacterial tracheitis requires intubation in a controlled setting (OR ideally). Membranes can cause sudden complete obstruction during intubation. Have ENT ready for emergency bronchoscopy.","prescriber":"Pediatric Emergency/Anesthesia","start":"2024","refills":0,"status":"URGENT"},
    {"name":"Vancomycin 60mg/kg/day IV divided q6h","sig":"MRSA coverage — S. aureus (including MRSA) is the most common pathogen. IV antibiotics after airway secured.","prescriber":"Pediatric Infectious Disease","start":"2024","refills":0,"status":"After airway secured"},
    {"name":"Avoid agitation and lay flat — can cause complete obstruction","sig":"Keep child calm and upright. Do NOT examine oropharynx, do NOT attempt venous access without monitoring. Agitation → complete obstruction.","prescriber":"Pediatric Emergency","start":"2024","refills":0,"status":"Active — positioning"}
  ],
  "labs": [{"date":"04/2024","panel":"Bacterial Tracheitis","results":[
    {"test":"WBC","value":"32.4","unit":"K/μL","ref":"5-15 (age 4)","flag":"H"},
    {"test":"Temperature","value":"40.2","unit":"°C","ref":"<38","flag":"H"},
    {"test":"SpO2","value":"91","unit":"% on 10L","ref":"≥95%","flag":"L"},
    {"test":"Response to racemic epinephrine","value":"None — no improvement","unit":"","ref":"Croup improves; tracheitis does NOT","flag":"H"},
    {"test":"Blood cultures x2","value":"Pending — before antibiotics","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"Lateral Neck X-Ray","findings":"Subglottic narrowing with irregular tracheal wall ('steeple sign' absent — irregular rather than smooth narrowing). Tracheal membrane visible. Normal epiglottis.","impression":"Irregular subglottic narrowing consistent with bacterial tracheitis. Not typical croup pattern."}],
  "ddxTargets": ["Bacterial tracheitis — staphylococcal (correct)","Viral croup — responds to epinephrine and dexamethasone; smooth subglottic steeple sign; less toxic","Epiglottitis — thumb sign on lateral X-ray; normal subglottis; tripod positioning; H. influenzae b (vaccinated children)","Foreign body aspiration — sudden onset in previously well child; unilateral wheeze; no fever","Retropharyngeal abscess — posterior soft tissue swelling on lateral neck X-ray; drooling"],
  "coachFinal": "Diagnosis: bacterial tracheitis (membranous croup). Key learning: (1) Bacterial tracheitis vs viral croup: viral croup = gradual onset, barky cough, responds to epinephrine and dexamethasone, minimal toxicity. Bacterial tracheitis = viral prodrome then sudden deterioration, HIGH fever, toxic appearance, does NOT respond to epinephrine. The failure to respond to racemic epinephrine is the key distinguishing feature. (2) Pathophysiology: S. aureus (most common, including MRSA) superinfects a virally inflamed trachea → produces fibrinous pseudomembranes that can cause sudden complete obstruction. (3) Airway management is the priority: controlled intubation in the OR with ENT/anesthesia ready. Never agitate the child or force IV access before the airway is secured. Do NOT examine the oropharynx. Sudden complete obstruction can occur at any moment. (4) Direct laryngoscopy/bronchoscopy may be needed to clear membranes after intubation — fibrinous debris can occlude the endotracheal tube. (5) Antibiotics after airway: IV vancomycin (MRSA coverage). Duration typically 10-14 days. Most children improve dramatically within 3-5 days of airway management and antibiotics."
},
"bilateral-lumbar-radiculopathy": {
  "diagnosis": "Bilateral Lumbar Radiculopathy — L5 with Progressive Foot Drop (Cauda Equina Risk)",
  "problems": [
    {"problem":"Bilateral L5 radiculopathy with progressive left foot drop","icd":"M54.41","onset":"2024","status":"Active","notes":"Thomas Green, 58M — 6-week history worsening back pain with bilateral leg radiation, left worse than right. New left foot drop (cannot dorsiflex). EHL weakness. L4-5 central disc herniation on MRI compressing bilateral L5 nerve roots."},
    {"problem":"Progressive neurological deficit — surgical urgency assessment","icd":"M51.16","onset":"2024","status":"Active","notes":"Foot drop is a motor deficit. Progressive motor deficits from disc herniation warrant urgent neurosurgical evaluation. Cauda equina syndrome must be actively excluded."},
    {"problem":"Cauda equina screen — saddle anesthesia and bladder function","icd":"G83.4","onset":"2024","status":"Active","notes":"Cauda equina syndrome (CES) = bilateral radiculopathy + saddle anesthesia + bladder/bowel dysfunction = surgical emergency. Ask specifically about urinary retention, incontinence, saddle numbness."}
  ],
  "medications": [
    {"name":"Urgent neurosurgical consultation — progressive motor deficit","sig":"Progressive foot drop + bilateral radiculopathy = urgent neurosurgery referral. L4-5 microdiscectomy indicated for progressive motor deficit not responding to conservative management.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"URGENT"},
    {"name":"Dexamethasone 10mg IV — acute neurological compression","sig":"Reduces periradicular edema in setting of acute neurological deficit. Bridge to surgical decompression.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Active"},
    {"name":"PT/PT referral — foot drop management, AFO fitting","sig":"Ankle-foot orthosis (AFO) for foot drop while awaiting surgery. PT for gait training and fall prevention.","prescriber":"Neurosurgery/PM&R","start":"2024","refills":0,"status":"Referral placed"}
  ],
  "labs": [{"date":"04/2024","panel":"Radiculopathy Assessment","results":[
    {"test":"Left EHL strength","value":"2/5 (able to contract but cannot move against gravity)","unit":"","ref":"5/5","flag":"H"},
    {"test":"Left ankle dorsiflexion","value":"1/5 — foot drop","unit":"","ref":"5/5","flag":"H"},
    {"test":"Saddle sensation","value":"Intact — no perianal numbness","unit":"","ref":"Intact — CES excluded","flag":""},
    {"test":"Bladder function","value":"No urinary retention — post-void residual 40mL","unit":"","ref":"<50mL — normal","flag":""},
    {"test":"MRI L-spine","value":"L4-5 central disc herniation compressing bilateral L5 nerve roots","unit":"","ref":"Normal","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Lumbar Spine without Contrast","findings":"Large central L4-5 disc herniation with bilateral foraminal extension. Compression of bilateral L5 nerve roots. No epidural abscess or hematoma. Mild L3-4 degenerative changes.","impression":"L4-5 central disc herniation with bilateral L5 nerve root compression. Urgent neurosurgical evaluation for progressive foot drop."}],
  "ddxTargets": ["Bilateral L5 radiculopathy from central disc herniation (correct)","Cauda equina syndrome — bladder/bowel dysfunction + saddle anesthesia absent here; must actively screen","Spinal epidural abscess — fever, elevated ESR/CRP; MRI enhancement; different mechanism","Lumbar stenosis — bilateral neurogenic claudication; older patient; multilevel; different MRI pattern","Peripheral neuropathy — stocking-glove distribution; EMG distinguishes from radiculopathy","L4 radiculopathy — knee extension weakness; patellar reflex; different dermatomal pattern"],
  "coachFinal": "Diagnosis: bilateral L5 radiculopathy with foot drop. Key learning: (1) Cauda equina syndrome (CES) is the surgical emergency to always rule out in bilateral radiculopathy. The classic triad: bilateral radiculopathy + saddle anesthesia (perianal, perineal numbness) + bladder/bowel dysfunction. Urinary retention is the most common early finding. Any one of these features = emergent MRI and surgical decompression within 24-48 hours. (2) L5 dermatome vs L4: L5 = dorsum of foot, first web space, great toe; EHL weakness (great toe extension); foot drop. L4 = medial leg and foot; quadriceps weakness; knee extension; patellar reflex. (3) Foot drop urgency: progressive motor deficit (not just pain) changes the surgical indication from elective to urgent. Pain alone can often be managed conservatively 6-8 weeks. Motor deficits cannot wait. (4) The straight leg raise test: positive when reproduction of radicular pain (not just back pain) below the knee at <60° of hip flexion = highly sensitive for L4-5 or L5-S1 disc herniation. Crossed straight leg raise (contralateral leg) is highly specific for large central herniations. (5) Prognosis for foot drop: best recovery occurs with decompression within 24-48 hours of onset. Prolonged compression → axonal injury → incomplete recovery. Time is nerve."
},
"brain-abscess": {
  "diagnosis": "Brain Abscess — Sinusitis with Contiguous Spread (Frontal Lobe)",
  "problems": [
    {"problem":"Frontal lobe brain abscess — sinusitis origin","icd":"G06.0","onset":"2024","status":"Active","notes":"Christopher Lee, 24M — 2-week history severe frontal headache, fever, frontal sinusitis treated with antibiotics. Now new focal seizure and left-sided weakness. CT: ring-enhancing lesion right frontal lobe with surrounding edema."},
    {"problem":"Focal neurological deficit — left arm weakness","icd":"G06.0","onset":"2024","status":"Active","notes":"Left arm weakness from right frontal lobe involvement (motor cortex or premotor area). Localizing deficit guiding surgical approach."},
    {"problem":"Seizure — from cortical irritation","icd":"G40.909","onset":"2024","status":"Active","notes":"Focal seizure from cortical irritation adjacent to abscess. Antiepileptic prophylaxis required."}
  ],
  "medications": [
    {"name":"Ceftriaxone 2g IV q12h + metronidazole 500mg IV q8h","sig":"Empiric coverage for sinogenic brain abscess: streptococci (microaerophilic), anaerobes, gram-negatives. Metronidazole penetrates BBB well and covers anaerobes. Duration 6-8 weeks total.","prescriber":"Neurosurgery/Infectious Disease","start":"2024","refills":0,"status":"Active — IV"},
    {"name":"Dexamethasone 4mg IV q6h — for cerebral edema","sig":"Reduces vasogenic edema from abscess. Controversial — may reduce antibiotic penetration. Use for significant mass effect or herniation risk. Taper as edema resolves.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Stereotactic aspiration or craniotomy — surgical drainage","sig":"Abscesses >2.5cm or with neurological deficits → surgical drainage. Stereotactic aspiration (CT-guided) preferred. Craniotomy for multiloculated or posterior fossa abscesses. Sends culture to guide antibiotics.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Scheduled"}
  ],
  "labs": [{"date":"04/2024","panel":"Brain Abscess Assessment","results":[
    {"test":"WBC","value":"18.2","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"ESR","value":"84","unit":"mm/hr","ref":"<20","flag":"H"},
    {"test":"Blood cultures x2","value":"Pending — before antibiotics","unit":"","ref":"","flag":""},
    {"test":"HIV test","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"MRI spectroscopy","value":"Lactate and amino acid peaks — consistent with pyogenic abscess","unit":"","ref":"","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with and without Contrast","findings":"2.8cm ring-enhancing lesion right frontal lobe with surrounding vasogenic edema and mild midline shift (4mm). Restricted diffusion on DWI — consistent with pyogenic abscess. Adjacent frontal sinus mucosal thickening.","impression":"Right frontal lobe brain abscess, likely sinogenic origin. Neurosurgical consultation for drainage."}],
  "ddxTargets": ["Brain abscess — sinusitis origin (correct)","Glioblastoma (GBM) — ring-enhancing; older patient; no fever; spectroscopy: choline peak (not lactate/amino acids)","Brain metastasis — known primary cancer; multiple lesions more common; DWI restricted diffusion less typical","CNS toxoplasmosis — HIV positive; multiple ring-enhancing lesions; CD4 <200; treat empirically with pyrimethamine/sulfadiazine","Primary CNS lymphoma — HIV or immunocompromised; periventricular; DWI different; responds to steroids dramatically","Tumefactive MS — young patient; incomplete ring enhancement; CSF oligoclonal bands"],
  "coachFinal": "Diagnosis: brain abscess from sinogenic spread. Key learning: (1) Brain abscess sources and typical organisms: sinusitis/otitis (streptococci, anaerobes, gram-negatives), dental (streptococci, anaerobes), post-neurosurgical/trauma (S. aureus, gram-negatives), hematogenous spread (dependent on source). Empiric coverage: ceftriaxone + metronidazole covers most community-acquired abscesses. Add vancomycin for post-surgical or trauma. (2) DWI on MRI is key: pyogenic abscess = restricted diffusion (bright on DWI) from viscous pus. Brain tumor = variable, often no restriction. This distinguishes abscess from necrotic tumor — critical decision point. MR spectroscopy: lactate + amino acids (succinate, acetate) = abscess. Choline peak = tumor. (3) Surgical indication: abscesses >2.5cm, mass effect, neurological deficits, or failure to respond to antibiotics → surgical drainage. Aspiration preferred over excision. Culture guides antibiotics. (4) LP is contraindicated in brain abscess with mass effect — risk of herniation. CT/MRI first always. LP may be done if no mass effect and no herniation risk. (5) Duration: IV antibiotics 6-8 weeks, serial MRI to confirm resolution. Seizure prophylaxis (levetiracetam) for cortical location."
},
"brain-masstumor": {
  "diagnosis": "Brain Mass — Metastatic Breast Cancer",
  "problems": [
    {"problem":"Brain metastasis — right parietal lobe, metastatic breast cancer","icd":"C79.31","onset":"2024","status":"Active","notes":"Susan Chen, 52F — known HER2-positive breast cancer stage III, completed chemotherapy 18 months ago. New progressive right parietal headache, left arm numbness, visual changes. MRI: 3.2cm enhancing mass right parietal lobe with significant edema."},
    {"problem":"Vasogenic edema — significant mass effect","icd":"G93.6","onset":"2024","status":"Active","notes":"Large surrounding edema causing midline shift 7mm. Steroid therapy is the most effective immediate intervention for vasogenic edema."},
    {"problem":"Seizure risk — cortical location","icd":"G40.909","onset":"2024","status":"Active","notes":"Parietal cortex involvement. Prophylactic antiepileptic consideration."}
  ],
  "medications": [
    {"name":"Dexamethasone 10mg IV loading then 4mg q6h","sig":"Most effective treatment for vasogenic edema from brain metastasis. Improves symptoms within 24-48 hours. Taper after definitive treatment (radiation/surgery).","prescriber":"Neurosurgery/Oncology","start":"2024","refills":0,"status":"Active"},
    {"name":"Stereotactic radiosurgery (SRS) — Gamma Knife/CyberKnife","sig":"1-3 brain metastases, good PS, controlled systemic disease → SRS. Single fraction high-dose radiation. Preserves cognition vs WBRT.","prescriber":"Radiation Oncology","start":"2024","refills":0,"status":"Planned"},
    {"name":"Levetiracetam 500mg BID — antiepileptic prophylaxis","sig":"Cortical metastasis → seizure risk. Levetiracetam preferred (no CYP450 interactions with chemotherapy).","prescriber":"Neurology/Oncology","start":"2024","refills":3,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"Brain Metastasis Workup","results":[
    {"test":"HER2 status","value":"3+ (positive) — IHC","unit":"","ref":"0-1+ = negative","flag":"H"},
    {"test":"CT chest/abdomen/pelvis","value":"No new systemic metastases — stable primary site","unit":"","ref":"","flag":""},
    {"test":"CEA","value":"28","unit":"ng/mL","ref":"<3","flag":"H"},
    {"test":"Performance status (ECOG)","value":"1 — ambulatory, restricted strenuous activity","unit":"","ref":"0 = fully active","flag":""},
    {"test":"Neurological exam — left arm","value":"Reduced cortical sensation; mild left arm weakness 4/5","unit":"","ref":"Normal","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with and without Contrast","findings":"3.2cm enhancing mass right parietal lobe with surrounding vasogenic edema. Midline shift 7mm. No leptomeningeal enhancement. No other enhancing lesions.","impression":"Solitary brain metastasis, right parietal lobe. Consistent with known breast cancer primary. Neurosurgical and radiation oncology consultation."}],
  "ddxTargets": ["Brain metastasis — breast cancer (correct)","Primary brain tumor (glioblastoma) — no known primary; single ring-enhancing in older adult; biopsy distinguishes","Brain abscess — fever; restricted DWI; pyogenic source; no cancer history","Radiation necrosis — prior radiation to brain; imaging overlap with metastasis; MR perfusion/PET distinguish","Lymphoma — periventricular; responds dramatically to steroids; AIDS or immunosuppression","Cavernous malformation — blood products; hemosiderin ring on T2*; no enhancement typically"],
  "coachFinal": "Diagnosis: brain metastasis from breast cancer. Key learning: (1) Most common primary cancers causing brain metastases (in order): lung (most common overall), breast (most common in women with brain mets), melanoma (highest rate per patient), renal cell, colorectal. Breast cancer mets tend to be larger, better circumscribed, and more responsive to local therapy than lung. (2) Vasogenic edema treatment: dexamethasone reduces vascular permeability around tumor → reduces edema. Effect within 24-48 hours. Does NOT treat the tumor — only the edema. Taper after definitive treatment. (3) Treatment strategy for limited brain metastases (1-3): stereotactic radiosurgery (SRS) preferred over whole brain radiation therapy (WBRT) for ≤3-4 lesions with good PS and controlled systemic disease. SRS preserves neurocognition. WBRT causes cognitive decline — reserved for extensive/leptomeningeal disease. (4) Surgery indication: single large metastasis causing significant mass effect + accessible location + good systemic control → surgical resection followed by SRS to cavity. (5) HER2+ breast cancer and lapatinib/tucatinib: newer HER2-targeted agents cross the BBB better than trastuzumab — increasingly used for HER2+ brain metastases."
},
"brain-metastasis": {
  "diagnosis": "Brain Metastases — Multiple Lesions from NSCLC with New-Onset Seizure",
  "problems": [
    {"problem":"Multiple brain metastases — NSCLC origin, 3 lesions","icd":"C79.31","onset":"2024","status":"Active","notes":"Richard Thompson, 66M — heavy smoker, newly diagnosed NSCLC stage IV (2 months ago). New generalized tonic-clonic seizure. MRI: 3 enhancing lesions — right frontal (2.1cm), left cerebellar (1.4cm), right temporal (0.9cm)."},
    {"problem":"New-onset seizure — from right frontal metastasis","icd":"G40.119","onset":"2024","status":"Active","notes":"Focal onset (right frontal lobe irritation) with secondary generalization. Post-ictal confusion on presentation. Load antiepileptic."},
    {"problem":"NSCLC — EGFR/ALK/ROS1 mutation status critical","icd":"C34.10","onset":"2024","status":"Active","notes":"Molecular profiling determines systemic treatment. EGFR-mutated NSCLC: osimertinib crosses BBB and treats both systemic and brain disease. ALK-rearranged: alectinib has excellent CNS penetration."}
  ],
  "medications": [
    {"name":"Levetiracetam 1g IV loading → 500mg BID maintenance","sig":"Antiepileptic for seizure from brain metastasis. Levetiracetam preferred — no CYP450 drug interactions with chemotherapy or targeted agents.","prescriber":"Neurology/Oncology","start":"2024","refills":3,"status":"Active — loaded"},
    {"name":"Dexamethasone 10mg IV then 4mg q6h","sig":"Reduces vasogenic edema around multiple lesions. Symptom relief within 24-48h.","prescriber":"Neurology/Oncology","start":"2024","refills":0,"status":"Active"},
    {"name":"Whole brain radiation therapy vs SRS — multidisciplinary decision","sig":"3 lesions: SRS preferred if lesions accessible and PS good. WBRT for extensive disease or leptomeningeal involvement. If EGFR+: osimertinib as systemic treatment also has intracranial activity.","prescriber":"Radiation/Medical Oncology","start":"2024","refills":0,"status":"Planning — MDT"}
  ],
  "labs": [{"date":"04/2024","panel":"Brain Metastasis/NSCLC Workup","results":[
    {"test":"EGFR mutation status","value":"Exon 19 deletion — POSITIVE","unit":"","ref":"Wild-type","flag":"H"},
    {"test":"ALK rearrangement","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"PD-L1 expression","value":"30%","unit":"","ref":"","flag":""},
    {"test":"Performance status (ECOG)","value":"1","unit":"","ref":"0 = fully active","flag":""},
    {"test":"Post-ictal glucose","value":"Normal","unit":"","ref":"Rule out hypoglycemia","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with Gadolinium","findings":"Three enhancing lesions: right frontal 2.1cm (with surrounding edema), left cerebellar 1.4cm, right temporal 0.9cm. No leptomeningeal enhancement. Midline shift 5mm from right frontal lesion.","impression":"Multiple brain metastases, pattern consistent with hematogenous spread. Primary unknown by imaging — NSCLC consistent with clinical context."}],
  "ddxTargets": ["Multiple brain metastases — NSCLC (correct)","Primary CNS lymphoma — periventricular; immunocompromised; single lesion more common; responds dramatically to steroids","GBM with satellite lesions — irregular enhancement; mass effect dominant; no known primary","Brain abscesses (multiple) — fever; restricted DWI; source of infection","Demyelinating disease (MS) — younger patient; periventricular; Dawson fingers on MRI; no enhancement pattern like met","Toxoplasmosis — HIV; CD4 <200; ring-enhancing; responds to pyrimethamine/sulfadiazine empirically"],
  "coachFinal": "Diagnosis: multiple brain metastases from NSCLC (EGFR-mutated). Key learning: (1) EGFR-mutated NSCLC and osimertinib: this is the most important molecular finding here. Osimertinib (3rd-generation EGFR TKI) penetrates the BBB and has demonstrated intracranial response rates >80%. For EGFR+ NSCLC with brain metastases, osimertinib is preferred first-line systemic therapy AND treats the brain disease simultaneously — may allow deferral of radiation. (2) New-onset seizure workup: always obtain glucose immediately. Post-ictal confusion is normal and temporary. Load antiepileptic. Get MRI (not CT) for suspected brain metastasis — superior sensitivity. (3) Multiple brain metastases treatment: ≤4 discrete lesions, good PS → SRS to all lesions (avoids WBRT cognitive toxicity). >4 lesions or leptomeningeal → WBRT. WBRT causes cognitive decline — the QUARTZ trial showed no survival benefit of WBRT over supportive care in poor-PS NSCLC. (4) Molecular profiling in NSCLC stage IV: EGFR exon 19/21 (osimertinib), ALK rearrangement (alectinib, brigatinib), ROS1, BRAF V600E, MET exon 14, RET, KRAS G12C — each has a targeted therapy. Reflexive next-generation sequencing at diagnosis. (5) Antiepileptic choice: levetiracetam preferred over phenytoin/valproate in oncology patients — no CYP450 interactions with chemotherapy."
},
"cardiac-syncope": {
  "diagnosis": "Cardiac Syncope — Exertional Syncope from Severe Aortic Stenosis",
  "problems": [
    {"problem":"Exertional syncope — severe aortic stenosis","icd":"I35.0","onset":"2024","status":"Active","notes":"Arthur Livingston, 79M — syncope while walking upstairs. No prodrome, no tongue biting, rapid return to consciousness. Echo: severe AS (AVA 0.7cm², peak gradient 78mmHg, mean gradient 52mmHg). This is the classic AS triad: angina, syncope, or heart failure."},
    {"problem":"Severe aortic stenosis — valve replacement candidacy assessment","icd":"I35.0","onset":"2022","status":"Active","notes":"AVA 0.7cm² (severe = <1.0cm²). Symptomatic severe AS has median survival <2 years without valve replacement. Exertional syncope = surgical urgency."},
    {"problem":"Aortic stenosis triad — syncope is middle stage","icd":"I35.0","onset":"2024","status":"Active","notes":"Classic AS symptom progression: angina (5yr survival) → syncope (3yr survival) → heart failure (1-2yr survival). Syncope marks critical threshold."}
  ],
  "medications": [
    {"name":"Urgent cardiology referral — TAVR or SAVR assessment","sig":"Symptomatic severe AS with exertional syncope = urgent valve replacement. Transcatheter (TAVR) vs surgical (SAVR) decision based on surgical risk score (STS score). High surgical risk → TAVR. Low-moderate risk → either.","prescriber":"Cardiology/Cardiac Surgery","start":"2024","refills":0,"status":"URGENT"},
    {"name":"Avoid vasodilators and diuretics — hemodynamic dependency","sig":"AS patients are preload-dependent and have fixed cardiac output. Vasodilators (nitrates, ACE inhibitors) and over-diuresis → profound hypotension. Handle all medications carefully.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active — medication restriction"},
    {"name":"Beta-blockers with caution — do not reduce heart rate excessively","sig":"AS patients compensate with tachycardia. Over-slowing the heart rate reduces cardiac output further in severe AS. Use beta-blockers only if essential (AF) and with great caution.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Caution"}
  ],
  "labs": [{"date":"04/2024","panel":"Severe AS Assessment","results":[
    {"test":"Echocardiography — AVA","value":"0.7","unit":"cm² (severe <1.0cm²)","ref":">2.0 normal","flag":"H"},
    {"test":"Peak aortic gradient","value":"78","unit":"mmHg","ref":"<20 normal; >64 = very severe","flag":"H"},
    {"test":"LVEF","value":"55","unit":"% (preserved — not yet decompensated)","ref":"≥55%","flag":""},
    {"test":"BNP","value":"680","unit":"pg/mL","ref":"<100","flag":"H"},
    {"test":"STS surgical risk score","value":"5.2%","unit":"(intermediate surgical risk)","ref":"","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"Transthoracic Echocardiogram","findings":"Tricuspid aortic valve with severe calcification and restriction. AVA 0.7cm² by continuity equation. Peak/mean gradients 78/52mmHg. LVEF 55%. Concentric LVH. Mild mitral regurgitation.","impression":"Severe calcific aortic stenosis. Symptomatic — exertional syncope. Valve replacement indicated."}],
  "ddxTargets": ["Cardiac syncope from severe AS (correct)","Vasovagal syncope — prodrome (nausea, diaphoresis); situational trigger; not exertional; not this patient","Arrhythmic syncope (complete heart block, VT) — ECG; Holter; no warning; could coexist with AS","Orthostatic hypotension — position-related; tilt table test; not exertional","Hypertrophic obstructive cardiomyopathy (HOCM) — young athlete; dynamic obstruction; different echo pattern","Pulmonary hypertension with exertional syncope — RV failure; echo shows elevated RVSP"],
  "coachFinal": "Diagnosis: exertional syncope from severe aortic stenosis. Key learning: (1) The AS triad and prognosis: angina (5-year median survival without repair), exertional syncope (3-year survival), heart failure (1-2 year survival). Once symptoms develop, urgent valve replacement is indicated — the natural history of symptomatic severe AS is rapidly progressive. (2) Exertional syncope mechanism: fixed cardiac output + vasodilation with exercise → cerebral hypoperfusion. The stenotic valve cannot increase flow to match demand → drop in BP → loss of consciousness. (3) Severe AS definitions (echo): AVA <1.0cm² + peak gradient >40mmHg + mean gradient >40mmHg + jet velocity >4 m/s. 'Very severe' if Vmax >5 m/s or mean gradient >60mmHg. (4) TAVR vs SAVR: high surgical risk (STS >8%) → TAVR. Intermediate risk (STS 4-8%) → TAVR preferred for most. Low risk → both acceptable, younger patients (SAVR if very young for durability). (5) Hemodynamic precautions in severe AS: preload-dependent (avoid diuretics and vasodilators). Fixed cardiac output (cannot increase with demand). Relative tachycardia compensatory (avoid excessive beta-blockade). AF very poorly tolerated — loss of atrial kick reduces SV dramatically."
},
"cellulitis": {
  "diagnosis": "Scrotal Cellulitis vs Fournier Gangrene — Necrotizing Fasciitis Screen",
  "problems": [
    {"problem":"Scrotal erythema and swelling — Fournier gangrene must be excluded","icd":"L03.818","onset":"2024","status":"Active","notes":"James Taylor, 58M — diabetic, 3 days scrotal pain, erythema, and swelling. Fever 38.8°C. Question: is this simple cellulitis or Fournier gangrene (necrotizing fasciitis of perineum)?"},
    {"problem":"Diabetes mellitus — major risk factor for Fournier gangrene","icd":"E11.9","onset":"2015","status":"Active","notes":"DM is the most common predisposing condition for Fournier gangrene. Impaired immune function and vascular disease allow rapidly progressive infection."},
    {"problem":"Risk stratification — Laboratory Risk Indicator for Necrotizing Fasciitis (LRINEC) score","icd":"M72.6","onset":"2024","status":"Active","notes":"LRINEC ≥6 = high risk for necrotizing fasciitis. Parameters: CRP, WBC, hemoglobin, sodium, creatinine, glucose."}
  ],
  "medications": [
    {"name":"Urgent surgical consultation — if Fournier features present","sig":"Fournier gangrene requires emergent surgical debridement within hours of diagnosis. Mortality 20-40% even with treatment. If any suspicion: OR NOW, not after 'watching.'","prescriber":"Surgery/Urology","start":"2024","refills":0,"status":"Consulted"},
    {"name":"Cefazolin 1g IV q8h — if simple cellulitis confirmed","sig":"For non-necrotizing cellulitis: anti-staph/strep coverage. Upgrade to broad-spectrum if progression or Fournier features emerge.","prescriber":"Medicine","start":"2024","refills":0,"status":"Pending surgical assessment"},
    {"name":"Broad-spectrum antibiotics if Fournier suspected","sig":"Vancomycin + piperacillin-tazobactam + metronidazole — polymicrobial coverage for Fournier. IV antibiotics are adjunct to surgery, NOT primary treatment.","prescriber":"Surgery/Infectious Disease","start":"2024","refills":0,"status":"Ready — if FG suspected"}
  ],
  "labs": [{"date":"04/2024","panel":"Fournier/Cellulitis Risk Assessment","results":[
    {"test":"WBC","value":"16.8","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"CRP","value":"142","unit":"mg/L","ref":"<10","flag":"H"},
    {"test":"Creatinine","value":"1.8","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Sodium","value":"132","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"LRINEC score","value":"7 (high risk — >6 = necrotizing fasciitis likely)","unit":"","ref":"<6 = low risk","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Pelvis with Contrast","findings":"Scrotal wall thickening and edema. Small amount of gas tracking along fascial planes of perineum and scrotum — pathognomonic for necrotizing fasciitis. No abscess. No free perforation.","impression":"Gas in fascial planes consistent with Fournier gangrene (necrotizing fasciitis). Emergent surgical debridement indicated."}],
  "ddxTargets": ["Fournier gangrene — necrotizing fasciitis (correct — gas on CT clinches it)","Simple scrotal cellulitis — no gas on CT; LRINEC <6; no fascial plane involvement","Epididymo-orchitis — testicular tenderness; scrotal Doppler increased flow; systemic toxicity less","Scrotal abscess — fluctuant; loculated on ultrasound; I&D sufficient","Incarcerated inguinal hernia — bowel palpable; no fever; different examination"],
  "coachFinal": "Diagnosis: Fournier gangrene (necrotizing fasciitis of perineum). Key learning: (1) Fournier gangrene is necrotizing fasciitis of the perineum and external genitalia — polymicrobial (aerobic + anaerobic synergy), rapidly progressive, requires emergent surgical debridement. Risk factors: DM (most common), alcoholism, immunocompromised, trauma, perineal surgery. (2) Gas in fascial planes on CT is pathognomonic: CT pelvis with contrast is the study of choice to detect gas tracking along fascial planes. Absence of gas does NOT exclude early Fournier — do not be falsely reassured. (3) LRINEC score: CRP >150 (4pts) + WBC >15 (1pt) + Hgb <13.5 (1pt) + sodium <135 (2pts) + Cr >1.6 (2pts) + glucose >180 (1pt). Score ≥6 = high risk for necrotizing fasciitis. Useful but not definitive — clinical judgment predominates. (4) The 'surgical look' rule: if Fournier is suspected and CT is equivocal, take to OR for examination under anesthesia. The finger test — blunt dissection with finger, no resistance of tissues = necrotizing fasciitis. A negative look (simple cellulitis) costs 30 minutes of OR time. A missed Fournier costs a life. (5) Treatment: aggressive surgical debridement ± diverting colostomy + broad-spectrum antibiotics + hyperbaric oxygen (adjunct, not primary). Mortality 20-40%; wounds often require multiple debridements."
},
"cerebral-contusion": {
  "diagnosis": "Cerebral Contusion with Traumatic Subarachnoid Hemorrhage",
  "problems": [
    {"problem":"Cerebral contusion — right frontal and temporal","icd":"S06.310A","onset":"2024","status":"Active","notes":"Michael Brown, 35M — restrained driver in MVA, airbag deployed. GCS 13 on arrival (confused, eyes open to voice). CT: right frontal and temporal contusions, small traumatic SAH in right sylvian fissure."},
    {"problem":"Traumatic subarachnoid hemorrhage — small volume","icd":"S06.6X2A","onset":"2024","status":"Active","notes":"Traumatic SAH in right sylvian fissure — distinct from aneurysmal SAH. Monitor for cerebral vasospasm (less common than aneurysmal but can occur)."},
    {"problem":"Contusion expansion risk — 6-hour CT critical","icd":"S06.310A","onset":"2024","status":"Active","notes":"Contusions can expand significantly in the first 24-48 hours. Repeat CT at 6 hours and again at 24 hours mandatory. Any neurological deterioration = immediate CT."}
  ],
  "medications": [
    {"name":"Neurosurgery consultation — monitoring and escalation plan","sig":"GCS 13, contusions: admit to neurosurgical ICU or step-down. Serial neurological exams q1h. Repeat CT at 6h. Clear plan for ICP monitoring if deterioration.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Active — ICU monitoring"},
    {"name":"Levetiracetam 500mg BID — post-traumatic seizure prophylaxis","sig":"Early post-traumatic seizures (within 7 days) occur in 10-15% of moderate-severe TBI. Levetiracetam x 7 days reduces early seizures. Not indicated beyond 7 days — does not prevent late epilepsy.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Active — 7-day course"},
    {"name":"Reverse anticoagulation if present — urgent","sig":"Any anticoagulation must be reversed urgently in traumatic brain injury. Warfarin: PCC + vitamin K. DOACs: specific reversal agents (idarucizumab for dabigatran, andexanet alfa for Factor Xa inhibitors).","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"N/A — not anticoagulated"}
  ],
  "labs": [{"date":"04/2024","panel":"TBI Assessment","results":[
    {"test":"GCS","value":"13 (E3V4M6)","unit":"","ref":"15 = normal","flag":"H"},
    {"test":"INR","value":"1.0","unit":"","ref":"<1.2 — not anticoagulated","flag":""},
    {"test":"Platelet count","value":"224","unit":"K/μL","ref":"150-400","flag":""},
    {"test":"Blood alcohol level","value":"0.12","unit":"g/dL","ref":"0 (legal limit 0.08)","flag":"H"},
    {"test":"Glucose","value":"148","unit":"mg/dL","ref":"70-140","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Head Non-Contrast","findings":"Right frontal and right temporal cortical contusions (heterogeneous hyperdense foci). Small traumatic SAH in right sylvian fissure. No midline shift. No epidural or subdural hematoma. No herniation.","impression":"Cerebral contusions with traumatic SAH. Neurosurgical admission for monitoring. Repeat CT in 6 hours."}],
  "ddxTargets": ["Cerebral contusion with traumatic SAH (correct)","Epidural hematoma — biconvex hyperdense collection; lucid interval; arterial (MMA) source; different management","Subdural hematoma — crescent-shaped collection; venous source; bridging veins; different demographics","Diffuse axonal injury — CT often normal or microhemorrhages; MRI shows white matter injury; severe GCS depression","Aneurysmal SAH — no trauma; thunderclap headache; cistern blood on CT; CTA for aneurysm"],
  "coachFinal": "Diagnosis: cerebral contusion with traumatic SAH. Key learning: (1) GCS interpretation: Eye (1-4) + Verbal (1-5) + Motor (1-6) = 3-15. Mild TBI = GCS 13-15. Moderate = 9-12. Severe = ≤8 (intubate). This patient GCS 13 = mild-moderate TBI with CT findings. (2) Contusion expansion: cortical contusions are dynamic — the 'blossoming contusion' phenomenon occurs in 30-40% within 24 hours. A small contusion can double in size. This is why serial CT is mandatory. Any neurological deterioration = immediate CT. (3) Coagulopathy in TBI: anticoagulated patients with ANY intracranial blood = reverse immediately. Warfarin: PCC 4F + vitamin K. Target INR <1.4. DOACs: specific reversal agents. Platelets <100,000 with TBI = platelet transfusion. (4) Early post-traumatic seizure prophylaxis: levetiracetam x 7 days reduces early seizures. Does NOT prevent late post-traumatic epilepsy. After 7 days, stop unless seizure occurs. (5) Hyperglycemia worsens TBI outcomes: glucose 140-180 is the target. Avoid both hyperglycemia (worsens neuronal injury) and hypoglycemia (cerebral ischemia)."
},
"cerebral-salt-wasting": {
  "diagnosis": "Cerebral Salt Wasting Syndrome — Post-SAH Hyponatremia",
  "problems": [
    {"problem":"Cerebral salt wasting — post-SAH day 10, severe hyponatremia","icd":"E87.1","onset":"2024","status":"Active","notes":"Elena Rodriguez, 54F — SAH from ruptured ICA aneurysm, coiled 10 days ago. Now Na 118, volume-depleted clinically. CSW vs SIADH distinction critical — treatment is opposite."},
    {"problem":"Volume depletion — distinguishes CSW from SIADH","icd":"E87.1","onset":"2024","status":"Active","notes":"CSW: volume depleted (elevated BUN, tachycardia, orthostasis, negative fluid balance). SIADH: euvolemic or mildly hypervolemic. Clinical assessment of volume status is the key diagnostic step."},
    {"problem":"Vasospasm risk — hyponatremia and volume depletion worsen cerebral perfusion","icd":"I60.9","onset":"2024","status":"Active","notes":"Post-SAH vasospasm peaks days 5-14. Volume depletion reduces cerebral perfusion pressure. Hyponatremia + vasospasm = high risk for delayed cerebral ischemia."}
  ],
  "medications": [
    {"name":"IV normal saline or hypertonic saline — volume replacement","sig":"CSW treatment: replace sodium AND volume with NS or 3% NaCl. Correct sodium no faster than 10-12mEq/L in 24 hours (avoid osmotic demyelination syndrome). Use 3% NaCl if severe or symptomatic.","prescriber":"Neurosurgery/Neurology","start":"2024","refills":0,"status":"Active — 3% NaCl at 20mL/hr"},
    {"name":"Fludrocortisone 0.1mg BID — reduces natriuresis","sig":"Mineralocorticoid reduces renal sodium wasting in CSW. Adjunct to fluid replacement. Can reduce the volume of IV fluid needed.","prescriber":"Neurosurgery/Endocrinology","start":"2024","refills":0,"status":"Active"},
    {"name":"Fluid restriction is CONTRAINDICATED in CSW","sig":"Fluid restriction treats SIADH (euvolemic hyponatremia). Fluid restriction in CSW worsens volume depletion → worsens cerebral perfusion → triggers vasospasm → delayed cerebral ischemia. Do NOT restrict fluids.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Active — contraindicated"}
  ],
  "labs": [{"date":"04/2024","panel":"CSW vs SIADH Differentiation","results":[
    {"test":"Serum sodium","value":"118","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"Urine sodium","value":"180","unit":"mEq/L","ref":"<20 = sodium conserving; >20 = sodium wasting","flag":"H"},
    {"test":"Urine osmolality","value":"620","unit":"mOsm/kg","ref":"Concentrated — both CSW and SIADH","flag":"H"},
    {"test":"BUN","value":"28","unit":"mg/dL","ref":"7-20 (elevated = volume depleted)","flag":"H"},
    {"test":"Clinical volume status","value":"Tachycardia 108, orthostasis +20mmHg drop, mucous membranes dry — VOLUME DEPLETED","unit":"","ref":"Euvolemic = SIADH","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Cerebral salt wasting (correct — volume depleted)","SIADH — euvolemic or hypervolemic; low urine output; restrict fluids; opposite treatment to CSW","Adrenal insufficiency — hyponatremia + hyperkalemia; low cortisol; cortisol stimulation test","Hypothyroidism — thyroid-related hyponatremia; TSH elevated; thyroid replacement","Diuretic-induced hyponatremia — thiazide use; volume depleted but urine sodium <20 early; history"],
  "coachFinal": "Diagnosis: cerebral salt wasting (CSW). Key learning: (1) CSW vs SIADH — the most important distinction in post-SAH hyponatremia: CSW = volume DEPLETED (tachycardia, orthostasis, elevated BUN, high urine sodium due to renal salt wasting). SIADH = euvolemic or slightly hypervolemic (urine sodium high but volume normal). Both have high urine sodium and osmolality — volume status is the KEY differentiator. (2) Treatment is OPPOSITE: CSW → replace salt and volume. SIADH → restrict fluids. Treating CSW with fluid restriction (as for SIADH) causes severe volume depletion, worsens cerebral perfusion, and triggers delayed cerebral ischemia. This error is potentially fatal in post-SAH patients. (3) Mechanism of CSW: brain injury → release of brain natriuretic peptide (BNP) and atrial natriuretic peptide (ANP) → renal sodium and water wasting → volume depletion → dilutional hyponatremia. (4) Correction rate: maximum 10-12mEq/L per 24 hours to prevent osmotic demyelination syndrome (ODS), formerly called central pontine myelinolysis. Use 3% NaCl for severe symptomatic hyponatremia. (5) Post-SAH vasospasm window: days 4-14 after ictus. Volume depletion during this window dramatically increases risk of delayed cerebral ischemia. Triple-H therapy (hypertension, hypervolemia, hemodilution) — now controversial but maintaining euvolemia/normovolemia is still critical."
},
"cervical-artery-dissection": {
  "diagnosis": "Internal Carotid Artery Dissection — Post-Chiropractic Manipulation",
  "problems": [
    {"problem":"Internal carotid artery dissection — ischemic stroke risk","icd":"I72.0","onset":"2024","status":"Active","notes":"Ashley Wong, 34F — neck pain onset during chiropractic neck manipulation 2 days ago. Now right-sided headache, left arm weakness, left-sided facial droop. CTA: right ICA dissection with intramural hematoma."},
    {"problem":"Stroke risk — thrombus at dissection site can embolize","icd":"I63.031","onset":"2024","status":"Active","notes":"ICA dissection causes ischemic stroke via two mechanisms: intraluminal thrombus formation at dissection site that embolizes distally, and direct luminal narrowing causing hypoperfusion. Anticoagulation or antiplatelet prevents further stroke."},
    {"problem":"Horner syndrome — sympathetic chain disruption","icd":"G90.2","onset":"2024","status":"Active","notes":"Ptosis + miosis + anhidrosis = Horner syndrome from ICA dissection disrupting pericarotid sympathetic plexus. Classic accompanying finding."}
  ],
  "medications": [
    {"name":"Anticoagulation (heparin) OR antiplatelet — debated, use antiplatelet","sig":"CADISS trial showed no significant difference between anticoagulation and antiplatelet for cervical artery dissection. Current practice: antiplatelet (aspirin 325mg) preferred unless large thrombus or very high stroke risk. Avoid heparin if hemorrhagic transformation.","prescriber":"Neurology","start":"2024","refills":0,"status":"Aspirin 325mg initiated"},
    {"name":"Blood pressure control — target SBP <140","sig":"Hypertension worsens dissection propagation and increases stroke risk. Avoid vasodilators — maintain cerebral perfusion pressure especially in setting of stroke.","prescriber":"Neurology","start":"2024","refills":0,"status":"Active"},
    {"name":"Avoid further neck manipulation — patient education","sig":"Chiropractic manipulation and ICA/VA dissection: the relationship is debated (causation vs coincidence), but avoidance of further manipulation is standard recommendation during dissection healing.","prescriber":"Neurology","start":"2024","refills":0,"status":"Counseled"}
  ],
  "labs": [{"date":"04/2024","panel":"Cervical Artery Dissection","results":[
    {"test":"Hypercoagulable screen","value":"Pending — factor V Leiden, prothrombin mutation, protein C/S, antiphospholipid","unit":"","ref":"","flag":""},
    {"test":"ESR/CRP","value":"Normal","unit":"","ref":"Normal — no vasculitis","flag":""},
    {"test":"MRI brain DWI","value":"Small acute infarct right MCA territory","unit":"","ref":"No acute ischemia = normal","flag":"H"},
    {"test":"Pupil exam","value":"Right: 4mm. Left: 2mm, ptosis — right Horner syndrome (ipsilateral to dissection)","unit":"","ref":"Equal pupils","flag":"H"},
    {"test":"CTA neck","value":"Right ICA dissection with intramural hematoma, string sign — 70% stenosis","unit":"","ref":"Normal lumen","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CTA Head and Neck","findings":"Right internal carotid artery dissection beginning at C2-C3, with intramural hematoma and 'string sign' (70% luminal narrowing). Small filling defect consistent with intraluminal thrombus. MRI brain: small right MCA territory acute infarct on DWI.","impression":"Right ICA dissection with ischemic stroke. Antiplatelet therapy and neurology follow-up."}],
  "ddxTargets": ["ICA dissection — post-manipulation (correct)","Atherosclerotic carotid stenosis — older patient; no trauma/manipulation; calcified plaque on CTA; different pattern","Hypertensive stroke — no dissection on CTA; no neck pain or Horner","Spontaneous dissection from connective tissue disorder — Marfan, Ehlers-Danlos; screen for underlying CTD in young patients","Vertebral artery dissection — posterior circulation symptoms (vertigo, ataxia, dysphagia); Wallenberg syndrome","Carotid web — thin shelf of tissue; different CTA appearance; embolic strokes in young women"],
  "coachFinal": "Diagnosis: internal carotid artery dissection. Key learning: (1) Cervical artery dissection (CAD) is a leading cause of stroke in patients under 45 years old. ICA dissection (anterior circulation) vs vertebral artery dissection (posterior circulation — Wallenberg syndrome). The classic history: neck pain or headache preceding stroke symptoms, often with a precipitating event (trauma, manipulation, Valsalva). (2) Horner syndrome: ipsilateral ptosis + miosis + anhidrosis from disruption of the pericarotid sympathetic plexus. Classic accompanying finding in ICA dissection — localizes the lesion. (3) CTA findings: intramural hematoma (crescent-shaped wall thickening), 'string sign' (long segment narrowing), double lumen, flame-shaped occlusion. CTA/MRA of the neck are the imaging of choice. (4) Antiplatelet vs anticoagulation (CADISS trial): no significant difference in outcomes. Antiplatelet (aspirin) is now the preferred initial treatment for most CAD. Reserve anticoagulation for high thrombus burden or recurrent embolism. (5) Prognosis: most cervical artery dissections heal spontaneously within 3-6 months. Antithrombotic therapy continued for 3-6 months then reassess imaging. Underlying connective tissue disorders (Marfan, Ehlers-Danlos, FMD) should be considered in young patients with spontaneous dissection."
},
"chf-exacerbation-v2": {
  "diagnosis": "Acute Decompensated Heart Failure (HFrEF) — Exacerbation",
  "problems": [
    {"problem":"Acute decompensated HFrEF — volume overload","icd":"I50.21","onset":"2024","status":"Active","notes":"Margaret Wilson, 68F — known HFrEF (EF 30%), 5-day history progressive dyspnea, orthopnea, paroxysmal nocturnal dyspnea, 8 lb weight gain. Bilateral crackles, JVP 16cm, bilateral pitting edema."},
    {"problem":"Precipitant — medication non-adherence and dietary indiscretion","icd":"I50.21","onset":"2024","status":"Active","notes":"Admits stopping furosemide 2 weeks ago and high dietary sodium intake. Medication non-adherence is the most common precipitant of HF decompensation."},
    {"problem":"EF 30% — HFrEF with appropriate GDMT","icd":"I50.21","onset":"2020","status":"Active","notes":"On appropriate guideline-directed medical therapy: ACE inhibitor, beta-blocker, MRA, SGLT2 inhibitor. Volume overload despite GDMT."}
  ],
  "medications": [
    {"name":"Furosemide 80mg IV — IV diuresis (1-2x home oral dose)","sig":"IV furosemide provides superior and more reliable diuresis than oral in acute decompensation (impaired gut absorption from bowel edema). Initial dose = 1-2x home oral dose. Target urine output 0.5-1mL/kg/hr. DOSE trial: continuous vs bolus equivalent.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active — IV bolus"},
    {"name":"Continue GDMT: ACE inhibitor, beta-blocker, MRA, SGLT2i","sig":"Continue all guideline-directed therapies through hospitalization unless hemodynamically unstable. Do NOT stop beta-blockers in stable ADHF — associated with higher mortality if stopped. SGLT2 inhibitors reduce HF hospitalization.","prescriber":"Cardiology","start":"2024","refills":3,"status":"Continued"},
    {"name":"Daily weights — discharge criterion: net negative 0.5-1kg/day","sig":"Daily morning weights track diuretic response. Discharge when at dry weight, tolerating oral medications, on stable diuretic regimen, patient educated on daily weights and symptom monitoring.","prescriber":"Cardiology/Nursing","start":"2024","refills":0,"status":"Active monitoring"}
  ],
  "labs": [{"date":"04/2024","panel":"ADHF Assessment","results":[
    {"test":"BNP","value":"1840","unit":"pg/mL","ref":"<100 (elevated = volume overload)","flag":"H"},
    {"test":"Creatinine","value":"1.6","unit":"mg/dL","ref":"0.7-1.3 (cardiorenal)","flag":"H"},
    {"test":"Sodium","value":"132","unit":"mEq/L","ref":"136-145 (dilutional)","flag":"L"},
    {"test":"Troponin","value":"0.06","unit":"ng/mL","ref":"<0.04 (demand ischemia vs new ACS)","flag":"H"},
    {"test":"Chest X-Ray","value":"Bilateral interstitial edema, Kerley B lines, cardiomegaly, small bilateral effusions","unit":"","ref":"Normal","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Echocardiogram","findings":"EF 28% (previously 30% — stable). Dilated LV. Moderate MR. Elevated E/e' ratio (22) — elevated LV filling pressures. No new wall motion abnormalities.","impression":"Decompensated HFrEF. No new ischemia. Elevated filling pressures consistent with volume overload."}],
  "ddxTargets": ["Acute decompensated HFrEF — volume overload (correct)","New ACS triggering decompensation — troponin 0.06 is mildly elevated but E/e' pattern + known HF + no new wall motion; demand ischemia","Pulmonary embolism — acute dyspnea + right heart strain; BNP can elevate in PE; no signs of RV failure on echo","COPD exacerbation — bronchospasm; smoking history; different spirometry; can coexist","Cardiac tamponade — JVP elevated but pulsus paradoxus; effusion on echo; different pattern"],
  "coachFinal": "Diagnosis: acute decompensated HFrEF, volume overload. Key learning: (1) Precipitants of HF decompensation (FAILURES mnemonic): Forgot medication/non-adherence (most common), Arrhythmia (new AF), Ischemia/infarction, Lifestyle (sodium/fluid), Uncontrolled hypertension, Renal failure, Embolism, anemia, and Stenosis (valvular). Identify and treat the precipitant. (2) IV vs oral diuretics: IV furosemide preferred in ADHF due to impaired gut absorption from bowel edema. IV is 2x as potent as oral. Start at 1-2x the home oral dose. DOSE trial showed no significant difference between low-dose and high-dose, bolus vs continuous — titrate to response. (3) Continue beta-blockers in stable ADHF: stopping beta-blockers in hospitalized HF patients is associated with worse in-hospital outcomes. Only hold if hemodynamically unstable (hypotension, cardiogenic shock). (4) BNP-guided therapy: BNP >1000 at discharge is associated with higher 30-day readmission. Target BNP <500 before discharge if possible. (5) GDMT in HFrEF: four pillars — ACE inhibitor/ARNi (sacubitril-valsartan preferred over ACE for symptomatic HFrEF), beta-blocker (carvedilol, metoprolol succinate, bisoprolol), MRA (spironolactone/eplerenone), SGLT2 inhibitor (dapagliflozin/empagliflozin). All four reduce mortality and HF hospitalization."
},
"chf-exacerbation": {
  "diagnosis": "Acute Decompensated HFrEF (NYHA IV) — Cardiogenic Pulmonary Edema",
  "problems": [
    {"problem":"Acute decompensated heart failure — cardiogenic pulmonary edema","icd":"I50.21","onset":"2024","status":"Active","notes":"Harold Davis, 72M — known EF 25%, presents with acute onset dyspnea at rest, SpO2 82% on room air, pink frothy sputum, diffuse crackles, diaphoresis. Cardiogenic pulmonary edema requiring urgent intervention."},
    {"problem":"Severe hypoxemia — SpO2 82%, HFNC or BiPAP threshold","icd":"J81.0","onset":"2024","status":"Active","notes":"SpO2 82% = severe hypoxemia. BiPAP/CPAP is preferred non-invasive ventilation for cardiogenic pulmonary edema — reduces preload, reduces WOB, avoids intubation in 30-40% of cases."},
    {"problem":"Possible ACS precipitant — troponin and ECG urgent","icd":"I50.21","onset":"2024","status":"Active","notes":"New decompensation in known HF may be triggered by new ACS. 12-lead ECG and troponin are urgent components of the evaluation."}
  ],
  "medications": [
    {"name":"BiPAP/CPAP — immediate","sig":"Non-invasive ventilation is first-line for cardiogenic pulmonary edema. Reduces afterload (PEEP), reduces preload, improves oxygenation, reduces work of breathing. Reduces intubation rate by 30-40%.","prescriber":"Emergency/Cardiology","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Furosemide 80-100mg IV + nitroglycerin IV — afterload reduction","sig":"Furosemide: venodilation (preload) within minutes of IV, then diuresis. IV nitroglycerin: potent venodilator → afterload and preload reduction. Combination rapidly improves hemodynamics. Avoid if hypotensive.","prescriber":"Emergency/Cardiology","start":"2024","refills":0,"status":"Active — concurrent"},
    {"name":"Morphine 2-4mg IV — dyspnea relief (use cautiously)","sig":"Venodilatation + anxiolysis reduces perceived dyspnea. Use cautiously — respiratory depression. Some evidence suggests worse outcomes. Reserve for refractory dyspnea.","prescriber":"Emergency","start":"2024","refills":0,"status":"PRN — cautious use"}
  ],
  "labs": [{"date":"04/2024","panel":"Cardiogenic Pulmonary Edema","results":[
    {"test":"BNP","value":"4200","unit":"pg/mL","ref":"<100","flag":"H"},
    {"test":"Troponin I (stat)","value":"0.22","unit":"ng/mL","ref":"<0.04 — possible new ACS","flag":"H"},
    {"test":"SpO2","value":"82","unit":"% room air","ref":"≥95%","flag":"L"},
    {"test":"ECG","value":"Sinus tachycardia 118. LBBB — old vs new (Sgarbossa criteria)","unit":"","ref":"Normal","flag":"H"},
    {"test":"CXR","value":"Bilateral bat-wing pulmonary edema, cardiomegaly, bilateral pleural effusions","unit":"","ref":"Normal","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Chest X-Ray + Bedside Echo","findings":"CXR: bilateral alveolar infiltrates in bat-wing distribution. Cardiomegaly. Bilateral pleural effusions. Bedside echo: EF 20-25%, severely dilated LV, elevated E/e' ratio.","impression":"Cardiogenic pulmonary edema. Bedside echo confirms severely reduced EF. Urgent treatment required."}],
  "ddxTargets": ["Cardiogenic pulmonary edema — acute ADHF (correct)","ARDS — bilateral infiltrates; non-cardiogenic; normal BNP; different oxygenation pattern; usually inflammatory trigger","Massive PE — acute dyspnea; right heart strain on echo; BNP can elevate; no pulmonary edema on CXR","Bilateral pneumonia — fever; crackles; normal BNP; different CXR pattern (consolidation not bat-wing)","Flash pulmonary edema from hypertensive emergency — SBP >180; rapid resolution with BP control; small heart"],
  "coachFinal": "Diagnosis: acute cardiogenic pulmonary edema, ADHF. Key learning: (1) BiPAP/CPAP is the most important immediate intervention for cardiogenic pulmonary edema: reduces preload (PEEP reduces venous return), improves oxygenation, reduces work of breathing, avoids intubation in 30-40% of patients. Start immediately in SpO2 <90% with cardiogenic pulmonary edema. (2) The '3V' treatment of acute pulmonary edema: Ventilation (BiPAP), Vasodilators (nitroglycerin — potent venodilator → preload ↓↓ and afterload ↓), and diuretic for Volume. Nitroglycerin begins working in minutes. Furosemide IV provides venodilation within 5-15 minutes (before diuresis even begins). (3) Flash pulmonary edema vs chronic decompensation: flash = acute onset, small cardiac silhouette on CXR, often hypertensive emergency or ACS. Chronic ADHF = gradual onset, cardiomegaly, pleural effusions. Treatment similar but flash responds faster to IV diuretics/nitrates. (4) LBBB in the context of acute decompensation: new LBBB = STEMI equivalent until proven otherwise (Sgarbossa criteria apply). If new LBBB + elevated troponin → activate cath lab. (5) Morphine in cardiogenic pulmonary edema: traditionally used for dyspnea; observational data suggests worse outcomes. Use with caution — avoid if there is any concern for respiratory depression or the patient is tiring."
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
print(f"\nBatch 21: {done}/{len(ENRICHMENTS)} enriched")
