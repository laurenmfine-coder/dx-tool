#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"croup-epiglottitis-ddx": {
  "diagnosis": "Croup vs Epiglottitis — Differential Diagnosis of Pediatric Upper Airway Obstruction",
  "problems": [
    {"problem":"Pediatric upper airway obstruction — differentiating croup vs epiglottitis","icd":"J05.0","onset":"2024","status":"Active","notes":"Liam Torres, 3M — 2-day gradual onset barky cough, seal-like stridor, mild fever 38.1°C. Not drooling, not toxic-appearing, sits comfortably in mother's lap. Presentation favors viral croup."},
    {"problem":"Stridor at rest — moderate severity, requires treatment","icd":"J05.0","onset":"2024","status":"Active","notes":"Stridor at rest = at least moderate croup. Westley croup score 5 = moderate severity. Dexamethasone + racemic epinephrine indicated."},
    {"problem":"Airway assessment — rule out epiglottitis features","icd":"J05.0","onset":"2024","status":"Active","notes":"No drooling, not tripod posturing, not muffled voice, not toxic. All these features favor croup over epiglottitis. Epiglottitis now rare due to Hib vaccine."}
  ],
  "medications": [
    {"name":"Dexamethasone 0.6mg/kg PO/IM single dose","sig":"Single dose dexamethasone reduces croup symptoms within 2-6 hours, reduces return ED visits, reduces hospitalization. Oral equivalent to IM. Most important intervention for croup.","prescriber":"Pediatric Emergency","start":"2024","refills":0,"status":"Administered"},
    {"name":"Racemic epinephrine 0.5mL of 2.25% nebulized — if stridor at rest","sig":"Rapid symptomatic relief within 10-30 minutes. Effect temporary (2-3 hours) — observe for rebound. Does not change disease course but buys time. Can repeat q15-20 min x 3.","prescriber":"Pediatric Emergency","start":"2024","refills":0,"status":"Administered — observe 2-4h"},
    {"name":"Humidified air — no proven benefit but not harmful","sig":"Cool mist historically used but meta-analyses show no benefit. No longer routinely recommended. Dexamethasone is the evidence-based treatment.","prescriber":"Pediatric Emergency","start":"2024","refills":0,"status":"Not recommended"}
  ],
  "labs": [{"date":"04/2024","panel":"Croup Assessment","results":[
    {"test":"SpO2","value":"96","unit":"%","ref":"≥95%","flag":""},
    {"test":"Temperature","value":"38.1","unit":"°C","ref":"<38","flag":"H"},
    {"test":"Westley Croup Score","value":"5 — moderate (stridor at rest 2, mild retractions 1, normal air entry 0, no cyanosis 0, normal consciousness 0)","unit":"","ref":"<3 mild; 3-5 moderate; >5 severe","flag":"H"},
    {"test":"Response to racemic epinephrine","value":"Improved — stridor decreased, RR normalized","unit":"","ref":"Croup responds; epiglottitis does NOT","flag":""},
    {"test":"Lateral neck X-ray","value":"Steeple sign — smooth subglottic narrowing","unit":"","ref":"Steeple sign = croup","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"AP and Lateral Neck X-Ray","findings":"AP view: smooth subglottic narrowing — classic steeple sign. Lateral view: normal epiglottis. Normal hypopharynx. No thumb sign. No retropharyngeal soft tissue widening.","impression":"Steeple sign consistent with croup (subglottic edema). Normal epiglottis. Epiglottitis excluded."}],
  "ddxTargets": ["Viral croup — moderate severity (correct)","Epiglottitis — drooling, tripod, muffled voice, toxic, thumb sign on lateral neck X-ray; now rare post-Hib vaccine","Bacterial tracheitis — does not respond to epinephrine; high fever; toxic; irregular tracheal wall","Foreign body aspiration — sudden onset in well child; unilateral wheeze; no fever; bronchoscopy","Subglottic stenosis — history of intubation; recurrent croup presentations; CT airway"],
  "coachFinal": "Diagnosis: moderate viral croup. Key learning: (1) Croup vs epiglottitis clinical distinction: croup = gradual onset, barky cough, seal-like stridor, low fever, not drooling, not toxic, comfortable; responds to epinephrine. Epiglottitis = rapid onset, toxic, drooling, tripod position, muffled/hot potato voice, dysphagia; does NOT respond to epinephrine. (2) Hib vaccine impact: Haemophilus influenzae type b was the classic cause of epiglottitis. Post-Hib vaccine era: epiglottitis is now rare (occurs in unvaccinated or from other organisms: Group A strep, S. aureus, S. pneumoniae). (3) Westley croup score: 0-2 mild (discharge with dexamethasone), 3-5 moderate (dexamethasone + epinephrine, observe 2-4h), >5 severe (ICU). (4) Dexamethasone in croup: single dose 0.6mg/kg (max 10mg) reduces severity, return visits, and hospitalization. Oral and IM equally effective. Works within 2-6 hours — the most important intervention. (5) Observe after racemic epinephrine: effects wear off in 2-3 hours — rebound stridor is possible. All patients given epinephrine require 2-4 hours of observation. If stable after 2-4h and given dexamethasone, can discharge."
},
"delirium-elderly": {
  "diagnosis": "Delirium in Elderly — Multifactorial, Hospital-Acquired",
  "problems": [
    {"problem":"Acute delirium — fluctuating confusion, hospital day 3","icd":"F05","onset":"2024","status":"Active","notes":"Harold Foster, 82M — admitted for hip fracture, post-op day 2. Now acutely confused, agitated at night, pulling at IV lines. CAM positive. Multiple predisposing and precipitating factors."},
    {"problem":"Predisposing factors — high delirium risk baseline","icd":"F05","onset":"2024","status":"Active","notes":"Age >80, pre-existing cognitive impairment, hearing impairment, dehydration, functional dependence. High baseline vulnerability."},
    {"problem":"Precipitating factors — identify and treat each one","icd":"F05","onset":"2024","status":"Active","notes":"Post-op pain (undertreated), catheter, sleep deprivation, anticholinergic medications (diphenhydramine for sleep), constipation, urinary retention, dehydration. The VINDICATE mnemonic covers all causes."}
  ],
  "medications": [
    {"name":"Non-pharmacologic delirium management — FIRST LINE","sig":"Reorientation (large clock, calendar, familiar objects), restore sleep-wake cycle (no vitals at night unless critical), early mobilization, remove catheter, optimize sensory input (hearing aids, glasses), minimize unnecessary medications.","prescriber":"Medicine/Geriatrics","start":"2024","refills":0,"status":"Active — bundle initiated"},
    {"name":"Low-dose haloperidol 0.25-0.5mg PO/IM PRN — hyperactive delirium only","sig":"Only if patient is dangerous to self or others despite non-pharmacologic measures. Does NOT treat delirium — only manages agitation. Avoid benzodiazepines (worsen delirium). Avoid in Lewy body dementia (extrapyramidal crisis).","prescriber":"Medicine/Geriatrics","start":"2024","refills":0,"status":"PRN — last resort"},
    {"name":"Discontinue all anticholinergic and sedating medications","sig":"Review medication list: stop diphenhydramine, benzodiazepines, opioids (minimize), antihistamines, anticholinergics. These are modifiable precipitants.","prescriber":"Medicine/Geriatrics","start":"2024","refills":0,"status":"Active — medication reconciliation"}
  ],
  "labs": [{"date":"04/2024","panel":"Delirium Workup","results":[
    {"test":"CAM (Confusion Assessment Method)","value":"Positive — acute onset, fluctuating, inattention, disorganized thinking","unit":"","ref":"Negative = no delirium","flag":"H"},
    {"test":"Sodium","value":"131","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"Urinalysis","value":"WBC 12, bacteria present — UTI cannot be excluded","unit":"","ref":"<5 WBC","flag":"H"},
    {"test":"Oxygen saturation","value":"93","unit":"%","ref":"≥95%","flag":"L"},
    {"test":"Urine culture","value":"Pending","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Head Non-Contrast","findings":"Chronic cortical atrophy consistent with age. No acute intracranial process. No hemorrhage. No midline shift.","impression":"Age-related changes only. No acute intracranial cause of delirium."}],
  "ddxTargets": ["Hospital-acquired delirium — multifactorial (correct)","Dementia alone — gradual onset, not fluctuating; delirium superimposed on dementia is common","Septic encephalopathy — concurrent UTI possible; treat infection; but delirium predates positive culture","Stroke — focal deficits; CT/MRI shows lesion; delirium can accompany","Drug intoxication/withdrawal — medication review; diphenhydramine anticholinergic here"],
  "coachFinal": "Diagnosis: hospital-acquired delirium. Key learning: (1) CAM (Confusion Assessment Method) criteria: (1) acute onset and fluctuating course + (2) inattention + (3) disorganized thinking OR altered level of consciousness = delirium. CAM sensitivity 94-100%, specificity 90-95%. Must be POSITIVE for diagnosis. (2) VINDICATE mnemonic for delirium causes: Vascular (stroke, MI), Infectious (UTI, pneumonia, sepsis), Nutritional (thiamine, B12), Drugs (anticholinergics, opioids, benzos, steroids), Inflammatory (vasculitis), CNS (seizure, meningitis), Trauma (head injury), Endocrine (hypothyroid, glucose), metabolic/other. Address ALL modifiable factors. (3) Non-pharmacologic bundle (HELP program): reorientation, sleep hygiene (no vitals at 3am), early mobilization, remove catheters/restraints, hearing aids/glasses, adequate nutrition/hydration, cognitive stimulation. This is the evidence-based first-line treatment. (4) Avoid benzodiazepines: paradoxically worsen delirium. Only use in alcohol withdrawal delirium (DTs) and benzodiazepine withdrawal. (5) Delirium in dementia: dementia is the strongest predisposing factor for delirium. Delirium superimposed on dementia has worse outcomes and is underdiagnosed. Baseline cognitive function must be established from family/caregiver."
},
"dementia-with-acute-delirium": {
  "diagnosis": "Delirium Superimposed on Dementia — UTI Precipitant",
  "problems": [
    {"problem":"Acute delirium on baseline dementia — UTI precipitant","icd":"F05","onset":"2024","status":"Active","notes":"Margaret Wilson, 84F — known moderate Alzheimer's dementia (baseline MMSE 14). Acute worsening confusion, agitation, refusing food over 3 days. Urinalysis: WBC 25, bacteria, nitrites positive. UTI as precipitant."},
    {"problem":"Distinguishing delirium from dementia progression","icd":"F05","onset":"2024","status":"Active","notes":"Acute onset and fluctuating course distinguishes delirium from steady dementia progression. Collateral history from caregiver essential — what is the baseline?"},
    {"problem":"UTI diagnosis in dementia — diagnostic challenge","icd":"N39.0","onset":"2024","status":"Active","notes":"Bacteriuria is common in elderly women (>50% have asymptomatic bacteriuria) — do NOT treat ASB. Treat UTI only with localizing symptoms or delirium in context of no other explanation."}
  ],
  "medications": [
    {"name":"Nitrofurantoin 100mg ER BID x 5 days — uncomplicated UTI","sig":"First-line for uncomplicated lower UTI in women. Not appropriate if CrCl <30 or upper UTI suspected.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Non-pharmacologic delirium care bundle","sig":"Reorientation, familiar objects/family presence, restore day-night cycle, minimize anticholinergics, early mobilization, sensory aids.","prescriber":"Medicine/Geriatrics","start":"2024","refills":0,"status":"Active"},
    {"name":"Reassess after UTI treatment — not Alzheimer's progression","sig":"Delirium should resolve with UTI treatment in days. If confusion persists after UTI cleared → reevaluate for other causes. Do not attribute persistent confusion to dementia without re-evaluating.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active — monitor"}
  ],
  "labs": [{"date":"04/2024","panel":"Delirium on Dementia","results":[
    {"test":"Urinalysis","value":"WBC 25, bacteria 3+, nitrites positive, leukocyte esterase positive","unit":"","ref":"Normal","flag":"H"},
    {"test":"Urine culture","value":"E. coli >100,000 CFU/mL — nitrofurantoin sensitive","unit":"","ref":"No growth","flag":"H"},
    {"test":"Sodium","value":"148","unit":"mEq/L","ref":"136-145 — mild dehydration","flag":"H"},
    {"test":"Baseline MMSE (per family)","value":"14/30 baseline — moderate dementia","unit":"","ref":"Current MMSE 6 — acute decline","flag":"H"},
    {"test":"Thyroid function","value":"Normal — rules out hypothyroid","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Delirium superimposed on dementia — UTI precipitant (correct)","Dementia progression — gradual over months; not acute 3-day change; ask family about baseline","Subdural hematoma — fall history in dementia patients; CT head if trauma; acute decline","Medication toxicity — anticholinergics, opioids, benzos; medication review","Sepsis from UTI — escalating if vital signs unstable; blood cultures if pyelonephritis suspected"],
  "coachFinal": "Diagnosis: delirium superimposed on dementia. Key learning: (1) Delirium vs dementia distinction: dementia = chronic, gradual, stable. Delirium = ACUTE, FLUCTUATING, identifiable precipitant. The key clinical question: 'Is this different from their baseline?' Family/caregiver history is essential. (2) Asymptomatic bacteriuria (ASB) in elderly: >50% of elderly women have bacteria in urine without symptoms. Do NOT treat ASB — it leads to antibiotic resistance and C. diff without benefit. Treat UTI only when symptoms present OR acute delirium with UTI as the only identified precipitant and no other explanation. (3) Delirium in dementia is underdiagnosed: cognitive impairment masks the behavioral changes. The CAM must be compared to the patient's BASELINE behavior (from family), not population norms. (4) Falls in dementia patients: always consider fall + subdural hematoma in acute delirium in a patient with dementia and fall risk. Head CT if any trauma history or unexplained acute decline. (5) Post-delirium cognitive decline: delirium episodes in dementia patients accelerate dementia progression. Prevention of delirium (non-pharmacologic bundle) is the most evidence-based approach."
},
"dic-from-traumasurgery-with-hemorrhagic": {
  "diagnosis": "Disseminated Intravascular Coagulation — Trauma-Induced",
  "problems": [
    {"problem":"Acute DIC — trauma-induced, hemorrhagic phase","icd":"D65","onset":"2024","status":"Active","notes":"Kevin Park, 32M — major trauma (MVA, polytrauma). Now diffuse bleeding: IV sites, surgical wounds, GI. PT 28s, INR 2.4, platelets 44, fibrinogen 68, D-dimer critically elevated. Acute DIC with hemorrhagic predominance."},
    {"problem":"Underlying trigger — ongoing trauma/hemorrhagic shock","icd":"D65","onset":"2024","status":"Active","notes":"Treat the underlying cause. DIC from trauma driven by tissue factor release, massive transfusion, hypothermia, acidosis — the lethal triad. Damage control surgery to control hemorrhage."},
    {"problem":"Lethal triad — hypothermia, acidosis, coagulopathy","icd":"D65","onset":"2024","status":"Active","notes":"Temp 35.2°C, pH 7.18, coagulopathy. The lethal triad of trauma is self-reinforcing: coagulopathy worsens acidosis worsens hypothermia worsens coagulopathy. Correct all three simultaneously."}
  ],
  "medications": [
    {"name":"Fresh frozen plasma 4 units — replace clotting factors","sig":"FFP for DIC with active bleeding and prolonged PT/INR. Target fibrinogen >150 mg/dL, INR <1.5. Use 1:1:1 ratio with pRBC and platelets (damage control resuscitation).","prescriber":"Trauma Surgery/Critical Care","start":"2024","refills":0,"status":"Active — ongoing"},
    {"name":"Cryoprecipitate 10 units — fibrinogen replacement","sig":"Each unit cryoprecipitate contains fibrinogen (200-400mg), Factor VIII, vWF, Factor XIII. Use when fibrinogen <150 mg/dL (as here: 68). Target fibrinogen >150-200 mg/dL.","prescriber":"Trauma Surgery/Critical Care","start":"2024","refills":0,"status":"Active"},
    {"name":"Tranexamic acid 1g IV over 10 min — within 3 hours of injury","sig":"CRASH-2 trial: TXA within 3 hours of injury reduces mortality from hemorrhage. Antifibrinolytic mechanism. After 3 hours: no benefit and possible harm. Give early in major trauma with hemorrhage.","prescriber":"Trauma Surgery","start":"2024","refills":0,"status":"Administered — within 3h"}
  ],
  "labs": [{"date":"04/2024","panel":"Trauma DIC Assessment","results":[
    {"test":"PT/INR","value":"28s / 2.4","unit":"","ref":"12s / <1.2","flag":"H"},
    {"test":"Fibrinogen","value":"68","unit":"mg/dL","ref":"200-400 (critically low)","flag":"L"},
    {"test":"Platelets","value":"44","unit":"K/μL","ref":"150-400","flag":"L"},
    {"test":"D-dimer","value":">20","unit":"μg/mL","ref":"<0.5 (critically elevated)","flag":"H"},
    {"test":"ISTH DIC Score","value":"7 (>5 = overt DIC)","unit":"","ref":"<5 = non-overt","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Trauma-induced DIC — hemorrhagic phase (correct)","Massive transfusion dilutional coagulopathy — similar lab pattern; overlaps with DIC; treat with same products","Liver failure coagulopathy — similar PT/INR; but fibrinogen less severely low; no D-dimer elevation","TTP — thrombocytopenia + MAHA; normal coagulation; no trauma history","Heparin overdose — anti-Xa level; aPTT-specific prolongation; protamine reversal"],
  "coachFinal": "Diagnosis: trauma-induced DIC. Key learning: (1) DIC pathophysiology: massive tissue factor release (trauma, sepsis, malignancy) → thrombin generation → fibrin clot formation → consumption of clotting factors and platelets → bleeding. Simultaneously, fibrinolysis activated → elevated D-dimer (fibrin degradation products). (2) ISTH DIC score: platelet count (>100=0, <100=1, <50=2) + D-dimer (normal=0, moderate=2, strong=3) + PT prolongation + fibrinogen (<1g/L=1). Score ≥5 = overt DIC. (3) DIC lab pattern: PT ↑, aPTT ↑, INR ↑, fibrinogen ↓ (consumed), D-dimer ↑↑ (fibrinolysis), platelets ↓. Key: fibrinogen is an acute phase reactant that is actually ELEVATED in early DIC (can appear normal or high before dropping). (4) Trauma resuscitation — damage control: 1:1:1 ratio of pRBC:FFP:platelets. Permissive hypotension (MAP 50-65) until surgical hemorrhage control. Tranexamic acid within 3 hours (CRASH-2). Avoid NS (hyperchloremic acidosis worsens coagulopathy). Warm all blood products. (5) Lethal triad treatment: rewarm (Bair Hugger, warm fluids), correct acidosis (resuscitation, NaHCO3 if severe), replace clotting factors (FFP, cryo, platelets). All three must be addressed simultaneously."
},
"diffuse-axonal-injury": {
  "diagnosis": "Diffuse Axonal Injury (DAI) — Severe TBI with Normal Initial CT",
  "problems": [
    {"problem":"Diffuse axonal injury — GCS 6, CT appears normal","icd":"S06.2X3A","onset":"2024","status":"Active","notes":"James Wilson, 28M — high-speed MVA, unrestrained. GCS 6 at scene and on arrival. CT head: subtle microhemorrhages at grey-white junction and corpus callosum. MRI shows extensive white matter injury."},
    {"problem":"CT underestimates DAI — MRI required","icd":"S06.2X3A","onset":"2024","status":"Active","notes":"CT is insensitive for DAI — may appear normal or show only subtle microhemorrhages. MRI with SWI (susceptibility-weighted imaging) and DWI is the gold standard for DAI diagnosis."},
    {"problem":"Prognosis — corpus callosum and brainstem involvement = poor outcome","icd":"S06.2X3A","onset":"2024","status":"Active","notes":"DAI grade: Grade I = white matter only. Grade II = + corpus callosum. Grade III = + brainstem. Grade III DAI has high mortality and severe disability rate."}
  ],
  "medications": [
    {"name":"ICP monitoring — if GCS ≤8 with abnormal CT or clinical concern","sig":"Intracranial pressure monitoring with EVD or parenchymal monitor for GCS ≤8 TBI. Target ICP <20 mmHg, CPP 60-70 mmHg. Hyperosmolar therapy (mannitol, 3% NaCl) for ICP spikes.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Placed — ICU"},
    {"name":"Neuroprotective measures — temperature, glucose, seizure","sig":"Normothermia (target 36-37°C). Normoglycemia (140-180 mg/dL). Levetiracetam prophylaxis x 7 days. Head of bed 30°. Avoid hypotension (CPP ≥60). Avoid hypoxia (SpO2 >95%).","prescriber":"Neurosurgery/Critical Care","start":"2024","refills":0,"status":"Active — bundle"},
    {"name":"No surgery — no surgical lesion in DAI","sig":"DAI is a non-surgical injury. Axonal shearing cannot be surgically repaired. Management is supportive neuroprotection and rehabilitation.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Non-operative"}
  ],
  "labs": [{"date":"04/2024","panel":"Severe TBI/DAI","results":[
    {"test":"GCS","value":"6 (E1V1M4)","unit":"","ref":"15 normal","flag":"H"},
    {"test":"Pupils","value":"Equal, 3mm, sluggishly reactive","unit":"","ref":"Equal, briskly reactive","flag":"H"},
    {"test":"INR/platelets","value":"Normal — no coagulopathy","unit":"","ref":"Normal","flag":""},
    {"test":"Glucose","value":"182","unit":"mg/dL","ref":"Target 140-180 in TBI","flag":""},
    {"test":"Temperature","value":"37.2","unit":"°C","ref":"Target normothermia 36-37","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain SWI and DWI","findings":"Multiple microhemorrhages on SWI at bilateral grey-white junctions, corpus callosum splenium, and dorsolateral midbrain — Grade III DAI pattern. DWI: restricted diffusion in white matter tracts consistent with axonal injury. CT head showed only subtle microhemorrhages.","impression":"Grade III diffuse axonal injury with brainstem involvement. Poor prognosis. Neurocritical care."}],
  "ddxTargets": ["Diffuse axonal injury — Grade III (correct)","Cerebral contusion — focal, CT visible; different from DAI","Epidural/subdural hematoma — CT shows collection; surgical lesion","Hypoxic-ischemic injury — cardiac arrest precedes; watershed territory; different MRI pattern","ADEM (post-infectious) — demyelination; history of infection; different demographics"],
  "coachFinal": "Diagnosis: diffuse axonal injury, Grade III. Key learning: (1) DAI mechanism: rapid rotational acceleration-deceleration forces cause shearing of axons at grey-white junction, corpus callosum, and brainstem. The injury is to the axon itself (axolemmal disruption) — not focal hemorrhage. (2) CT vs MRI in DAI: CT is insensitive — microhemorrhages may be absent or subtle. MRI with SWI (shows microhemorrhages) and DWI (shows axonal edema) is the gold standard. Grade the injury: I = white matter, II = + corpus callosum, III = + brainstem. Grade predicts prognosis. (3) The GCS-CT disconnect: GCS of 6 with a CT that looks relatively normal = think DAI. The injury is at the microscopic axonal level, not visible as a large hematoma. (4) Neuroprotection bundle: avoid secondary injury — maintain CPP 60-70, SpO2 >95%, normoglycemia (140-180), normothermia, head of bed 30°. Each secondary insult (hypotension, hypoxia, hyperthermia) worsens axonal injury. (5) Prognosis: Grade I DAI = good recovery possible. Grade II = moderate disability. Grade III (brainstem involvement) = high mortality and persistent vegetative state. Rehabilitation is critical for all survivors."
},
"dvt-with-phlegmasia": {
  "diagnosis": "Phlegmasia Cerulea Dolens — Massive Iliofemoral DVT",
  "problems": [
    {"problem":"Phlegmasia cerulea dolens — limb-threatening venous occlusion","icd":"I82.401","onset":"2024","status":"Active","notes":"Robert Chen, 56M — known pancreatic cancer. Sudden onset massive left leg swelling, blue-purple discoloration, severe pain, and paresthesias. No palpable femoral pulse. Extensive iliofemoral DVT."},
    {"problem":"Venous gangrene risk — arterial compromise from venous hypertension","icd":"I82.401","onset":"2024","status":"Active","notes":"Phlegmasia cerulea dolens: massive venous occlusion → venous hypertension → arterial inflow compromise → venous gangrene. Limb loss without urgent treatment."},
    {"problem":"Underlying malignancy — Trousseau syndrome","icd":"C25.9","onset":"2024","status":"Active","notes":"Pancreatic cancer is the classic Trousseau syndrome malignancy — hypercoagulable state from tumor-produced procoagulants. DVT may be the presentation of occult cancer."}
  ],
  "medications": [
    {"name":"Unfractionated heparin — full therapeutic anticoagulation IMMEDIATELY","sig":"IV UFH with aPTT target 60-100s. Anticoagulation is mandatory and urgent. Does not dissolve existing clot but prevents extension.","prescriber":"Vascular Surgery/Hematology","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Catheter-directed thrombolysis OR mechanical thrombectomy — limb salvage","sig":"Phlegmasia cerulea dolens requires rapid clot removal. CDT (tPA intra-thrombus infusion) or percutaneous mechanical thrombectomy to restore venous outflow. Time-sensitive — act within hours.","prescriber":"Vascular Surgery/IR","start":"2024","refills":0,"status":"URGENT procedure"},
    {"name":"Leg elevation — venous drainage","sig":"Elevate leg above heart level to reduce venous hypertension. Remove all constrictive dressings. Do NOT massage.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"Phlegmasia Assessment","results":[
    {"test":"D-dimer","value":">20","unit":"μg/mL","ref":"<0.5","flag":"H"},
    {"test":"Fibrinogen","value":"620","unit":"mg/dL","ref":"200-400 (elevated — acute phase)","flag":"H"},
    {"test":"Venous duplex — left leg","value":"Iliofemoral DVT — complete occlusion from common femoral to iliac vein","unit":"","ref":"Patent","flag":"H"},
    {"test":"Arterial Doppler — left leg","value":"Diminished but present dorsalis pedis — early arterial compromise","unit":"","ref":"Normal","flag":"H"},
    {"test":"CA 19-9","value":"1840","unit":"U/mL","ref":"<37 — pancreatic cancer marker","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Venography Pelvis/Lower Extremity","findings":"Complete occlusion of left common femoral, external iliac, and common iliac veins. No IVC extension. Massive soft tissue edema of entire left lower extremity. Skin changes consistent with impending venous gangrene.","impression":"Phlegmasia cerulea dolens. Urgent CDT or mechanical thrombectomy for limb salvage."}],
  "ddxTargets": ["Phlegmasia cerulea dolens — venous gangrene risk (correct)","Simple proximal DVT — much less severe; no color change; no arterial compromise; standard anticoagulation sufficient","Phlegmasia alba dolens (milk leg) — milder form; white not blue; no cyanosis; arterial compromise absent","Acute arterial occlusion — pale not cyanotic; absent pulses; arterial source (embolism/thrombosis); different treatment","Compartment syndrome — tense compartment; pain with passive stretch; arterial cause"],
  "coachFinal": "Diagnosis: phlegmasia cerulea dolens. Key learning: (1) Phlegmasia spectrum: alba dolens (white leg) = edema, pain, white discoloration from venous obstruction without cyanosis. Cerulea dolens (blue leg) = massive venous occlusion causing cyanosis and impending arterial compromise. Venous gangrene = full arterial inflow compromise → irreversible limb ischemia. (2) Pathophysiology: massive iliofemoral DVT → severely elevated venous pressure → interstitial fluid accumulation → compartment pressure exceeds arterial inflow → arterial compromise. Vicious cycle leading to gangrene. (3) Trousseau syndrome: migratory thrombophlebitis associated with occult malignancy, especially pancreatic, GI, lung, ovarian cancers. Hypercoagulable state from tumor-produced procoagulants. DVT that is difficult to treat with anticoagulation or recurs should prompt cancer workup. (4) Treatment urgency: phlegmasia cerulea dolens requires immediate anticoagulation + urgent catheter-directed thrombolysis (CDT) or percutaneous mechanical thrombectomy to decompress the venous system. Anticoagulation alone is insufficient — clot must be removed to restore venous outflow. (5) IVC filter: in phlegmasia from cancer with high PE risk, consider IVC filter placement — but this is secondary to clot removal. Do not delay CDT for filter placement."
},
"encephalitis": {
  "diagnosis": "Viral Encephalitis — HSV Encephalitis (Most Common Treatable)",
  "problems": [
    {"problem":"Encephalitis — HSV most likely, empiric acyclovir indicated","icd":"B00.4","onset":"2024","status":"Active","notes":"Sarah Williams, 45F — 3-day progressive headache, fever, behavioral change, new temporal lobe seizure. MRI: T2 FLAIR signal in left temporal lobe and insula. CSF: lymphocytic pleocytosis, elevated protein, normal glucose. HSV PCR pending."},
    {"problem":"Temporal lobe involvement — HSV encephalitis signature","icd":"B00.4","onset":"2024","status":"Active","notes":"HSV-1 encephalitis characteristically involves temporal lobes bilaterally (asymmetric) and limbic system. Behavioral changes, memory loss, temporal lobe seizures are classic."},
    {"problem":"Do not wait for HSV PCR to treat — empiric acyclovir","icd":"B00.4","onset":"2024","status":"Active","notes":"HSV PCR from CSF has 98% sensitivity but takes 12-24 hours. Delay in acyclovir treatment is associated with worse outcomes. Treat empirically, stop if alternative diagnosis confirmed."}
  ],
  "medications": [
    {"name":"Acyclovir 10mg/kg IV q8h — IMMEDIATE, empiric","sig":"Do not wait for HSV PCR results. Acyclovir must be started immediately on clinical suspicion of HSV encephalitis. Duration 14-21 days for confirmed HSV. Stop only if alternative diagnosis confirmed. Hydrate well — nephrotoxic.","prescriber":"Infectious Disease/Neurology","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Dexamethasone — controversial, use cautiously","sig":"Limited evidence for steroids in viral encephalitis. Some data for HSV encephalitis with severe edema. Use only if severe cerebral edema causing herniation risk.","prescriber":"Neurology/ID","start":"2024","refills":0,"status":"Consider if herniation risk"},
    {"name":"Levetiracetam — seizure prophylaxis","sig":"Temporal lobe encephalitis has high seizure risk. Levetiracetam prophylaxis during acute phase. Continue until EEG follow-up.","prescriber":"Neurology","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"Encephalitis Workup","results":[
    {"test":"CSF WBC","value":"82","unit":"cells/μL (lymphocytic)","ref":"0-5","flag":"H"},
    {"test":"CSF glucose","value":"58","unit":"mg/dL (serum 90 — CSF:serum 0.64)","ref":">0.6 = viral pattern","flag":""},
    {"test":"CSF protein","value":"98","unit":"mg/dL","ref":"15-45","flag":"H"},
    {"test":"HSV PCR (CSF)","value":"Pending","unit":"","ref":"Negative = treat anyway if clinical suspicion","flag":""},
    {"test":"EEG","value":"Periodic lateralized epileptiform discharges (PLEDs) left temporal — classic HSV pattern","unit":"","ref":"Normal background","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with FLAIR and DWI","findings":"T2/FLAIR hyperintensity in left temporal lobe, insula, and cingulate gyrus. Mild restricted diffusion in left temporal region. No hemorrhage. Pattern highly characteristic of HSV encephalitis.","impression":"MRI pattern consistent with HSV encephalitis. Empiric acyclovir strongly indicated. Await HSV PCR."}],
  "ddxTargets": ["HSV encephalitis (correct — treat empirically)","Autoimmune encephalitis (anti-NMDAR) — behavioral change + seizures in young woman; check antibodies; may coexist with HSV","Bacterial meningitis — purulent CSF (PMN dominant, low glucose); treat with ceftriaxone + dexamethasone","CNS vasculitis — MRI ischemic pattern; angiography; CSF inflammatory; different","Metabolic encephalopathy — no fever; no CSF pleocytosis; no MRI changes"],
  "coachFinal": "Diagnosis: HSV encephalitis. Key learning: (1) Empiric acyclovir rule: DO NOT wait for HSV PCR results before starting acyclovir. HSV PCR sensitivity is 98% but takes 12-24 hours. Every hour of delay = more neuronal death. Start acyclovir immediately on clinical suspicion (encephalitis + temporal lobe involvement). Stop only if an alternative diagnosis is definitively confirmed. (2) HSV encephalitis signature: temporal lobe involvement on MRI (T2/FLAIR hyperintensity), limbic system involvement (behavioral change, memory loss), temporal lobe seizures, PLEDs on EEG in temporal region. (3) CSF pattern in viral encephalitis: lymphocytic pleocytosis (50-500 WBC), elevated protein (50-200 mg/dL), normal glucose (CSF:serum >0.6). Normal CSF glucose distinguishes viral from bacterial/fungal meningitis. (4) Anti-NMDA receptor encephalitis: can mimic HSV and can occur after HSV encephalitis (post-infectious autoimmune process). Young women with behavioral change + seizures + movement abnormalities. Check serum and CSF anti-NMDAR antibodies. (5) HSV PCR false negatives: can occur in first 24-72 hours of illness (virus not yet replicating in CSF). If initial PCR negative but clinical suspicion high, repeat in 3-5 days and continue acyclovir."
},
"displaced-femoral-neck-fracture": {
  "diagnosis": "Displaced Femoral Neck Fracture — Hip Arthroplasty Indicated",
  "problems": [
    {"problem":"Displaced femoral neck fracture — Garden III","icd":"S72.001A","onset":"2024","status":"Active","notes":"Dorothy Hansen, 78F — fell from standing height, cannot bear weight on right hip. Hip shortened and externally rotated. X-ray: displaced femoral neck fracture (Garden III — complete, displaced). Surgical repair within 24-48 hours."},
    {"problem":"Avascular necrosis risk — displaced fracture disrupts blood supply","icd":"S72.001A","onset":"2024","status":"Active","notes":"Femoral head blood supply (medial femoral circumflex artery) disrupted by displaced fracture → avascular necrosis if managed with ORIF. Arthroplasty avoids AVN risk for displaced fractures."},
    {"problem":"Surgical timing — 24-48 hours for optimal outcomes","icd":"S72.001A","onset":"2024","status":"Active","notes":"Hip fracture surgery within 24-48 hours reduces mortality, pain, delirium risk, and hospital complications. Surgery >48h associated with worse outcomes."}
  ],
  "medications": [
    {"name":"Hemiarthroplasty or total hip arthroplasty — within 24-48h","sig":"Displaced femoral neck fracture in elderly: arthroplasty preferred over ORIF (reduces re-operation rate from AVN). Active patients with good bone quality → THA. Sedentary/low-demand patients → hemiarthroplasty (faster, less complex).","prescriber":"Orthopedic Surgery","start":"2024","refills":0,"status":"Scheduled — within 24h"},
    {"name":"Fascia iliaca nerve block — pre-operative analgesia","sig":"Regional nerve block provides superior analgesia to IV opioids for hip fracture pre-operatively. Reduces opioid requirements, reduces delirium risk, facilitates mobilization.","prescriber":"Anesthesia/Orthopedics","start":"2024","refills":0,"status":"Administered"},
    {"name":"Anticoagulation — post-operative VTE prophylaxis","sig":"DVT/PE risk after hip surgery is high without prophylaxis. Aspirin 81mg (preferred per recent evidence) or LMWH x 28-35 days post-operatively.","prescriber":"Orthopedics","start":"2024","refills":0,"status":"Post-op"}
  ],
  "labs": [{"date":"04/2024","panel":"Hip Fracture Pre-Op","results":[
    {"test":"Hemoglobin","value":"11.8","unit":"g/dL","ref":"12-16 (transfuse if <8 or symptomatic)","flag":"L"},
    {"test":"INR","value":"1.1","unit":"","ref":"<1.5 for surgery","flag":""},
    {"test":"Creatinine","value":"1.2","unit":"mg/dL","ref":"0.5-1.1","flag":"H"},
    {"test":"BMP/electrolytes","value":"Sodium 138, K 3.8, normal metabolic panel","unit":"","ref":"Normal","flag":""},
    {"test":"ECG","value":"Normal sinus rhythm — pre-op clearance","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"Hip X-Ray AP and Cross-Table Lateral","findings":"Complete femoral neck fracture with displacement (Garden III). Femoral head in acetabulum. No acetabular fracture. Osteopenic bone.","impression":"Displaced femoral neck fracture. Orthopedic surgery consultation for arthroplasty."}],
  "ddxTargets": ["Displaced femoral neck fracture — arthroplasty indicated (correct)","Intertrochanteric fracture — extracapsular; treated with ORIF (DHS); different fracture pattern","Femoral head fracture — rare; associated with hip dislocation; CT for classification","Pathological fracture — known malignancy; permeative lytic lesion on X-ray; screen for cancer","Acetabular fracture — CT for characterization; different surgical approach"],
  "coachFinal": "Diagnosis: displaced femoral neck fracture (Garden III) — arthroplasty indicated. Key learning: (1) Garden classification: I = incomplete/impacted, II = complete undisplaced, III = complete partially displaced, IV = complete fully displaced. Garden I and II = ORIF (preserve femoral head). Garden III and IV in elderly = ARTHROPLASTY (replace femoral head — avoids AVN). (2) ORIF vs arthroplasty: ORIF preserves the native femoral head but risks AVN and fixation failure (re-operation rate 25-40% in displaced fractures). Arthroplasty eliminates AVN risk and allows immediate weight-bearing but is a larger operation. For active elderly patients with good bone quality → THA. For frail/low-demand patients → hemiarthroplasty. (3) Surgical timing: within 24-48 hours reduces: mortality at 30 days, pain, pressure ulcers, delirium, deep vein thrombosis, pneumonia, urinary infections. Surgery delays beyond 48 hours without medical reason = inferior quality metric. (4) Analgesia before surgery: fascia iliaca compartment block provides superior pain control and reduces opioid requirements (opioids increase delirium risk in elderly). (5) Osteoporosis evaluation: hip fracture = osteoporosis diagnosis by definition. Start bisphosphonate or denosumab after fracture healing. DEXA scan. Fall prevention assessment."
},
"druginduced-av-block": {
  "diagnosis": "Drug-Induced Complete AV Block — Digoxin Toxicity with CKD",
  "problems": [
    {"problem":"Complete AV block — digoxin toxicity","icd":"T46.0X1A","onset":"2024","status":"Active","notes":"Henry Morrison, 74M — CKD stage 3, on digoxin 0.25mg daily for AF. Now GCS 12, bradycardia rate 34, nausea/vomiting, visual disturbances (yellow-green halos). Dig level 4.2 ng/mL (toxic). Complete heart block."},
    {"problem":"CKD accumulation — digoxin is renally cleared","icd":"T46.0X1A","onset":"2024","status":"Active","notes":"Digoxin is renally excreted unchanged. CKD → reduced clearance → accumulation. Also acute AKI (dehydration this week) further reduced clearance. Classic scenario: stable patient becomes toxic with intercurrent illness."},
    {"problem":"Hypokalemia — potentiates digoxin toxicity","icd":"E87.6","onset":"2024","status":"Active","notes":"K 3.1 mEq/L. Hypokalemia potentiates digoxin toxicity — low potassium increases digoxin binding to Na-K-ATPase. Correct potassium as part of treatment."}
  ],
  "medications": [
    {"name":"Digoxin-specific antibody fragments (DigiFab) — IMMEDIATE","sig":"Specific antidote for digoxin toxicity. Dose calculation: [dig level (ng/mL) × weight (kg)] / 100 = vials of DigiFab. Or empiric 10 vials for acute severe toxicity. Onset within 30 minutes. Reverses all cardiac and extracardiac toxicity.","prescriber":"Emergency/Cardiology","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Transcutaneous pacing — bridge to DigiFab","sig":"Temporary pacing for hemodynamic compromise while DigiFab is being prepared. Atropine often ineffective in high-degree AV block from digoxin.","prescriber":"Emergency/Cardiology","start":"2024","refills":0,"status":"Active — bridge"},
    {"name":"Potassium replacement — IV KCl","sig":"Target K+ 4.0-5.0 mEq/L. Correction of hypokalemia reduces digoxin-Na-K-ATPase binding. Give IV in monitored setting (arrhythmia risk if too fast).","prescriber":"Emergency","start":"2024","refills":0,"status":"Active — IV KCl"}
  ],
  "labs": [{"date":"04/2024","panel":"Digoxin Toxicity","results":[
    {"test":"Digoxin level","value":"4.2","unit":"ng/mL","ref":"0.5-2.0 ng/mL therapeutic","flag":"H"},
    {"test":"Potassium","value":"3.1","unit":"mEq/L","ref":"3.5-5.0","flag":"L"},
    {"test":"Creatinine","value":"2.8","unit":"mg/dL","ref":"0.7-1.3 (AKI on CKD)","flag":"H"},
    {"test":"ECG","value":"Complete heart block, rate 34, junctional escape rhythm","unit":"","ref":"Normal sinus","flag":"H"},
    {"test":"Magnesium","value":"1.4","unit":"mg/dL","ref":"1.7-2.2","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Digoxin toxicity — complete heart block (correct)","Beta-blocker/CCB overdose — AV block; different drug history; calcium or glucagon as antidote","Hyperkalemia-induced AV block — K+ normal or elevated (not low); peaked T waves; different history","Lyme carditis — endemic area; rash; Lyme serology; different context","Idiopathic degenerative AV block — no drug cause; permanent pacemaker indicated"],
  "coachFinal": "Diagnosis: digoxin toxicity with complete heart block. Key learning: (1) Digoxin toxicity signs: cardiac (bradyarrhythmias, AV block, junctional tachycardia, bidirectional VT — the most characteristic) and extracardiac (nausea/vomiting, visual disturbances including xanthopsia/yellow-green vision, confusion). The visual symptoms are pathognomonic. (2) CKD + digoxin = toxicity risk: digoxin is renally cleared unchanged. Any acute reduction in GFR (dehydration, AKI, NSAID use) → digoxin accumulation. Digoxin dose must be reduced in CKD (0.125mg QOD or less). (3) Hypokalemia potentiates digoxin: digoxin inhibits Na-K-ATPase. Hypokalemia increases binding affinity. Diuretics given for AF cause hypokalemia → digoxin toxicity even at therapeutic levels. Always correct K+ in digoxin toxicity. (4) DigiFab (digoxin-specific Fab fragments): the specific antidote. Dose by formula or empirically. Onset 30 minutes. Works by binding free digoxin → removes from receptors. After DigiFab: total digoxin level rises (bound to Fab, not active) — do not re-dose based on level. (5) Narrow therapeutic index: digoxin therapeutic range 0.5-2.0 ng/mL. Recent evidence: target 0.5-0.9 ng/mL for HF mortality benefit. Levels >2.0 = toxicity. The toxic dose is close to the therapeutic dose — requires careful monitoring."
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
print(f"\nBatch 23: {done}/{len(ENRICHMENTS)} enriched")
