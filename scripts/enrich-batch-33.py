#!/usr/bin/env python3
"""Batch 33 — Part A: 8 cases.

Cases: stemi-v1, structural-lesion, submandibular-sialolithiasis-with-secondary-infection,
       submersion-injury, superior-vena-cava-syndrome, surgical-bleeding,
       sympathomimetic-toxicity, takotsubo-cardiomyopathy
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "stemi-v1": {
    "diagnosis": "ST-Elevation Myocardial Infarction (STEMI)",
    "coachFinal": (
      "Diagnosis: ST-elevation myocardial infarction (STEMI) — a time-sensitive cardiac emergency. "
      "Key learning: "
      "(1) STEMI criteria: new ST elevation at the J-point in at least 2 contiguous leads of >=1 mm in most leads, >=2 mm in leads V2-V3 (1.5 mm in women; 2.5 mm in men under 40), OR new left bundle branch block with clinical features of ischemia (Sgarbossa criteria helpful), OR posterior MI (ST depression V1-V3 with dominant R waves and posterior leads V7-V9 showing STE). "
      "The diagnosis activates an emergent pathway regardless of time from symptom onset — every minute of reperfusion delay increases mortality. "
      "(2) Treatment is rapid reperfusion. "
      "(a) PRIMARY PERCUTANEOUS CORONARY INTERVENTION (PCI) is the preferred reperfusion strategy when available within 90 minutes of first medical contact (120 minutes if transferred from a non-PCI hospital). "
      "Door-to-balloon time target <90 minutes for PCI-capable facilities. "
      "(b) FIBRINOLYTIC THERAPY (alteplase, tenecteplase, reteplase) if PCI not available within 120 minutes, given within 30 minutes of first medical contact. "
      "Contraindications to fibrinolysis must be reviewed: active bleeding, prior intracranial hemorrhage, ischemic stroke within 3 months, suspected aortic dissection, severe uncontrolled hypertension (>180/110). "
      "After fibrinolysis, transfer for PCI (rescue if failed, routine if successful — 'pharmacoinvasive' strategy). "
      "(3) Adjunctive therapy ('MONA-BASH' is outdated — contemporary: dual antiplatelet, anticoagulation, beta-blocker, statin, and oxygen only if hypoxic). "
      "(a) Aspirin 325 mg chewed (loading). "
      "(b) P2Y12 inhibitor loading — ticagrelor 180 mg or prasugrel 60 mg (preferred over clopidogrel 600 mg in PCI-STEMI when no increased bleeding risk; prasugrel contraindicated with prior stroke/TIA and caution over age 75). "
      "(c) Anticoagulation — unfractionated heparin (bolus 60 units/kg then 12 units/kg/hr) OR bivalirudin. Enoxaparin if fibrinolysis given. "
      "(d) High-intensity statin — atorvastatin 80 mg or rosuvastatin 40 mg (pleiotropic benefits plus lipid lowering). "
      "(e) Beta-blocker within 24 hours if no hypotension, heart failure, or contraindication. "
      "(f) Nitroglycerin for ongoing ischemia, hypertension, or pulmonary edema (avoid in RV infarct, severe hypotension, recent PDE-5 inhibitor use). "
      "(g) Oxygen ONLY if SpO2 <90% (routine oxygen in normoxemic patients may cause harm). "
      "(h) Morphine for refractory pain (use sparingly — delays gastric absorption of antiplatelets and may increase mortality per recent data). "
      "(4) Localization and RV involvement. "
      "Inferior STEMI (II, III, aVF): ST elevation greater in III than II suggests RCA occlusion; less in III than II suggests LCx. "
      "Right-sided ECG (V4R) for inferior STEMI — ST elevation in V4R indicates RV infarct. "
      "RV infarct management differs: preload-dependent, AVOID nitrates and diuretics (can precipitate shock), volume loading, maintain sinus rhythm (AV pacing may be needed), and early reperfusion. "
      "Anterior STEMI (V1-V6): LAD occlusion — larger territory, higher mortality, higher risk of arrhythmia and mechanical complications. "
      "Posterior STEMI: ST depression V1-V3 with tall R waves; posterior lead ECG confirms. "
      "(5) Complications and long-term management. "
      "Acute: arrhythmia (VF/VT in first 48 hours), cardiogenic shock, mechanical complications (papillary muscle rupture causing acute MR, VSD, free wall rupture — typically days 3-7 post-MI), pericarditis (early fibrinous, or late Dressler syndrome). "
      "Secondary prevention: dual antiplatelet therapy x 12 months (longer for some high-risk), indefinite aspirin, statin, beta-blocker, ACE-I or ARB (especially for LV dysfunction), MRA for EF <40% with symptoms, SGLT2 inhibitor for HFrEF or diabetes, cardiac rehabilitation (proven mortality benefit). "
      "Risk factor modification: smoking cessation, BP control, lipid management, diabetes control, weight loss, exercise, Mediterranean diet. "
      "Classic pitfalls: (a) missing STEMI in atypical presentations — women, elderly, diabetics may present with dyspnea, epigastric pain, fatigue rather than classic chest pain. "
      "(b) Delaying reperfusion for lab results or imaging — time is muscle. "
      "(c) Using nitrates or diuretics in RV infarct. "
      "(d) Not pursuing dual antiplatelet duration adherence — premature discontinuation is the leading cause of stent thrombosis. "
      "(e) Forgetting cardiac rehabilitation referral — reduces mortality by ~20-30%."
    )
  },

  "structural-lesion": {
    "diagnosis": "Cerebral Cavernous Malformation with Acute Hemorrhage and Focal-to-Bilateral Tonic-Clonic Seizure",
    "coachFinal": (
      "Diagnosis: cerebral cavernous malformation (cavernoma) in the left mesial temporal lobe with acute hemorrhage presenting as focal seizure with bilateral tonic-clonic evolution. "
      "Key learning: "
      "(1) Cerebral cavernous malformations (CCMs) are clusters of enlarged, thin-walled vascular channels without intervening neural tissue, accounting for ~10-15% of all cerebral vascular malformations. "
      "Characteristic 'mulberry' or 'popcorn' appearance on MRI (T2-weighted with dark hemosiderin rim from prior microbleeds, heterogeneous internal signal). "
      "Two forms: sporadic (usually single, ~80%) and familial (multiple lesions, KRIT1/CCM1, CCM2, PDCD10/CCM3 mutations, autosomal dominant with variable penetrance, particularly common in Hispanic populations). "
      "(2) Clinical presentations of CCM: "
      "(a) Seizures (most common, up to 50%) — especially with cortical or mesial temporal location. "
      "(b) Focal neurologic deficits from hemorrhage or mass effect. "
      "(c) Headache. "
      "(d) Incidental finding on imaging for other indications. "
      "Annual hemorrhage risk: ~0.25-2% per lesion per year (higher with prior hemorrhage, brainstem location, and familial forms). "
      "(3) Diagnosis. "
      "MRI is the gold standard — T2-weighted and especially SWI (susceptibility-weighted imaging) or GRE (gradient echo) sequences best demonstrate CCMs and associated hemosiderin. "
      "CT may show acute hemorrhage but misses small or non-hemorrhagic CCMs. "
      "Catheter angiography is typically NORMAL in CCM (unlike AVMs) — 'angiographically occult vascular malformation' — because flow is low and vessels don't opacify. "
      "Genetic testing for familial forms (multiple lesions, family history) — implications for siblings and offspring. "
      "(4) Management. "
      "(a) Acute hemorrhage: supportive care (head elevation, BP control, euvolemia), reverse coagulopathy, neurosurgical consultation. "
      "Typically small to moderate hemorrhages are managed non-operatively; large hemorrhages with mass effect may need surgical evacuation. "
      "(b) Seizure management: anti-seizure medication — levetiracetam preferred (fewer interactions, good tolerability); follow with EEG, clinical course. "
      "(c) Surgical resection: considered for symptomatic CCMs with recurrent seizures (especially drug-resistant), recurrent hemorrhage, or progressive deficits. "
      "Accessible supratentorial lesions: good surgical outcomes. "
      "Brainstem or deep/eloquent lesions: higher surgical risk; often observed unless hemorrhage is recurrent or progressive. "
      "(d) Stereotactic radiosurgery — role controversial; reserved for inoperable CCMs with recurrent hemorrhage. "
      "(e) Pharmacotherapy trials exploring statins, propranolol, and other agents are ongoing. "
      "(5) Long-term and familial considerations. "
      "Serial MRI surveillance (usually annually or with symptom change). "
      "Genetic counseling for familial CCM — siblings and offspring may benefit from screening MRI. "
      "Avoid anticoagulation when possible — individualize based on CCM burden, location, bleeding history, and anticoagulation indication (not absolutely contraindicated but decisions are nuanced). "
      "Pregnancy counseling — no strong evidence of increased hemorrhage risk but individual risk assessment appropriate. "
      "Seizure precautions: driving restrictions per local law, water safety, heights, dangerous machinery. "
      "Classic pitfalls: (a) missing CCM on CT — MRI is essential for diagnosis. "
      "(b) Confusing a CCM with other vascular malformations (AVM, DVA, capillary telangiectasia) — has different management implications. "
      "(c) Avoiding all anticoagulation when clearly indicated (e.g., for mechanical valve or high-risk AF) — requires risk-benefit analysis with neurology and hematology. "
      "(d) Not offering genetic testing and family screening in patients with multiple CCMs. "
      "(e) Aggressive surgical resection of all CCMs — many are safely observed; intervention should be driven by symptoms and feasibility."
    )
  },

  "submandibular-sialolithiasis-with-secondary-infection": {
    "diagnosis": "Submandibular Sialolithiasis with Secondary Sialadenitis",
    "coachFinal": (
      "Diagnosis: submandibular sialolithiasis with secondary bacterial sialadenitis. "
      "Key learning: "
      "(1) Sialolithiasis (salivary stones) affects the submandibular gland in 80-90% of cases because of anatomical features: longer uphill course of Wharton duct, thicker mucin-rich saliva, and higher calcium/phosphate concentration. "
      "Parotid gland (Stensen duct) accounts for 10-15%, and sublingual and minor glands rarely. "
      "Stones composed mainly of calcium phosphate and hydroxyapatite. "
      "Risk factors: dehydration, anticholinergic medications, Sjogren syndrome, diabetes, gout, and aging. "
      "(2) Classic presentation: postprandial (mealtime) pain and swelling of the involved gland that improves between meals as saliva clears — the 'meal-time syndrome.' "
      "Physical exam: palpable stone along Wharton duct in the floor of mouth, tender enlarged submandibular gland, purulent saliva expressed from the ductal opening (suggests secondary infection), and sometimes fever and systemic signs. "
      "Complications: acute bacterial sialadenitis (often Staphylococcus aureus, streptococci, anaerobes from oral flora), abscess, ductal stricture, gland fibrosis with recurrent episodes, and deep neck space infection. "
      "(3) Workup. "
      "Physical exam and bimanual palpation along Wharton duct. "
      "Imaging: "
      "(a) Non-contrast CT — highly sensitive for calcified stones, characterizes gland, assesses for abscess. "
      "(b) Ultrasound — operator-dependent but radiation-free; identifies stones and ductal dilation. "
      "(c) Sialography — historical, less commonly used now due to CT/MRI. "
      "(d) Sialendoscopy — both diagnostic and therapeutic; direct visualization of the ductal system. "
      "Labs: CBC, CMP, blood cultures if febrile; culture expressed pus from ductal orifice. "
      "(4) Management. "
      "Acute sialadenitis: antibiotics targeting oral flora and S. aureus — amoxicillin-clavulanate (875/125 mg BID) or clindamycin (for penicillin allergy); more severe/inpatient disease gets IV ampicillin-sulbactam or piperacillin-tazobactam. "
      "Vancomycin if MRSA risk. "
      "Adjunctive: aggressive hydration, warm compresses, gland massage (milking), sialogogues (sour candies, lemon slices — stimulate saliva flow to help flush the duct), and NSAIDs. "
      "Stone management: "
      "(a) Small stones (<4 mm) near duct orifice: may pass spontaneously with sialogogues and massage. "
      "(b) Medium stones (4-7 mm): sialendoscopic removal — minimally invasive, gland-preserving. "
      "(c) Large or deep stones: combined approach (sialendoscopy with transoral or transcutaneous removal) or gland-preserving surgery. "
      "(d) Refractory disease or severe gland damage: submandibular gland excision (via external neck approach or transoral). "
      "Abscess drainage when present. "
      "(5) Prevention of recurrence. "
      "Address risk factors: adequate hydration (especially in dry climates, diuretic use, elderly), salivary stimulation, review medications (anticholinergics, antihistamines, opioids, TCAs — all reduce saliva flow), good oral hygiene, and management of Sjogren syndrome with pilocarpine or cevimeline. "
      "Classic pitfalls: (a) missing deeper infections — submandibular sialadenitis can extend into the submandibular space, sublingual space, or parapharyngeal space; any expanding neck mass, trismus, airway compromise, or fever warrants CT and surgical consultation. "
      "(b) Attributing 'mumps' to every parotid swelling — mumps is now rare with vaccination; most acute parotid swelling in adults is bacterial or sialolith-related. "
      "(c) Overlooking tumor in chronic or unilateral painless gland enlargement — salivary gland neoplasms present with persistent mass; fine needle aspiration or open biopsy after imaging. "
      "(d) Removing the gland when gland-preserving endoscopic options exist — referral to centers with sialendoscopy expertise improves outcomes. "
      "(e) Forgetting that pilocarpine and cevimeline are effective for Sjogren-associated xerostomia and recurrent sialadenitis."
    )
  },

  "submersion-injury": {
    "diagnosis": "Submersion Injury (Freshwater Near-Drowning, Pediatric)",
    "coachFinal": (
      "Diagnosis: pediatric submersion injury (near-drowning) from freshwater submersion. "
      "Key learning: "
      "(1) Drowning is the process of experiencing respiratory impairment from submersion or immersion in liquid — updated 2005 definition abandons outdated terms (near-drowning, wet/dry drowning, secondary drowning) in favor of a spectrum based on outcome: fatal drowning, nonfatal drowning with or without morbidity. "
      "Leading cause of accidental death in children 1-4 years old (often in residential pools) and a significant cause in teens (often with alcohol use in natural water). "
      "Key risk factors: lack of supervision, inability to swim, alcohol/drugs, seizure disorder, long QT and other inherited arrhythmias (LQT1 particularly associated with drowning), hypoglycemia, trauma/spinal injury (diving). "
      "(2) Pathophysiology: submersion leads to reflexive breath-holding and laryngospasm, then forced inhalation of water, alveolar flooding, surfactant washout, ventilation-perfusion mismatch, and severe hypoxia. "
      "Freshwater vs saltwater differences clinically minimal — both cause hypoxemia, cerebral ischemia, and multi-organ injury. "
      "Cardiac arrest in drowning is typically asystolic from hypoxia (differs from adult sudden cardiac arrest which is often VF/VT). "
      "(3) Initial management at scene and ED. "
      "(a) Airway, breathing, oxygenation take priority — rescue breathing in the water for deeper rescue, then transport. "
      "(b) CPR per BLS/PALS with early attention to ventilation (the primary pathology is hypoxia); asystolic/bradyasystolic arrest common, follow non-shockable algorithm. "
      "(c) Spinal precautions only if trauma suspected (diving, high-energy fall into water, witnessed trauma). "
      "(d) Prolonged resuscitation is often appropriate in submersion — especially in cold water, where hypothermia may provide neuroprotection and recovery with good neurologic outcome has occurred after submersions of over an hour in very cold water. "
      "(e) In ED: supplemental oxygen or non-invasive/invasive ventilation as needed, warming for hypothermia, IV access, continuous monitoring, ABG, lactate, electrolytes, CK, CBC, CXR, ECG (look for long QT, arrhythmia). "
      "(4) Hospital management and observation. "
      "Asymptomatic patients without initial hypoxia, cyanosis, or respiratory symptoms, and with normal exam, CXR, and pulse oximetry after 4-8 hours of observation can usually be discharged with clear return precautions. "
      "Symptomatic patients (hypoxia, abnormal lung exam, altered mental status, arrhythmia) require admission. "
      "ICU for severe hypoxia, ARDS physiology, unstable vitals, or altered mental status. "
      "ARDS management: lung-protective ventilation (low tidal volume 6 mL/kg IBW, PEEP), prone positioning, neuromuscular blockade, ECMO for refractory hypoxemia. "
      "Corticosteroids and prophylactic antibiotics are NOT routine — reserved for specific indications (aspiration pneumonitis evolution to pneumonia, adrenal suppression, or other specific indication). "
      "Hypothermia protocols: rewarming to 36 C; therapeutic hypothermia as per local protocols. "
      "Neurologic monitoring: most long-term morbidity is neurologic; early EEG if seizures; serial neuro exams; consider neuroprotective interventions (head of bed, euoxia, normothermia, normal glucose). "
      "(5) Prognosis and prevention. "
      "Prognostic factors: submersion time (>10 min worse), water temperature (cold water may be neuroprotective), time to CPR, arrest rhythm on arrival, neurologic status on arrival, GCS, fixed pupils. "
      "Prevention is the highest-yield intervention: active supervision ('touch supervision' for infants and toddlers), fencing around residential pools (4-sided isolation fencing 4+ feet tall), swim lessons (for all children but doesn't substitute for supervision), CPR training, life jackets, avoiding alcohol in/around water, and addressing underlying medical risks (treatable long QT). "
      "Classic pitfalls: (a) terminating resuscitation too early in submersion/cold water — especially pediatric — prolonged resuscitation can have good outcomes. "
      "(b) Missing the 'secondary drowning' reality — patients who initially appear well but develop delayed pulmonary edema; observation period post-submersion is important. "
      "(c) Giving empiric antibiotics and steroids routinely — not evidence-based. "
      "(d) Not screening survivors for underlying arrhythmia syndromes (long QT, CPVT, Brugada) — especially in young competitive swimmers with unexplained drowning. "
      "(e) Forgetting the powerful prevention framework — outpatient discussions about supervision, fencing, and swim lessons save more lives than in-hospital care."
    )
  },

  "superior-vena-cava-syndrome": {
    "diagnosis": "Superior Vena Cava Syndrome (NSCLC Extrinsic Compression)",
    "coachFinal": (
      "Diagnosis: superior vena cava (SVC) syndrome from extrinsic compression by non-small cell lung cancer. "
      "Key learning: "
      "(1) SVC syndrome results from obstruction of blood flow through the superior vena cava, leading to venous congestion above the obstruction. "
      "Etiologies: malignancy causes ~60-85% (lung cancer especially SCLC and NSCLC, lymphoma, germ cell tumors, metastatic disease). "
      "Non-malignant causes: thrombosis (often related to indwelling central catheters, pacemaker leads, dialysis catheters — an increasingly common cause), mediastinal fibrosis (histoplasmosis, tuberculosis, radiation), and aortic aneurysm. "
      "(2) Presentation depends on speed of onset and extent of collateralization. "
      "Classic features: facial and neck swelling (plethoric, 'moon face'), distended neck and chest wall veins (collateral circulation), upper extremity swelling, dyspnea (airway compression, tracheal edema), cough, dysphagia (esophageal compression), and headache and visual disturbance (increased intracranial pressure). "
      "Pemberton sign: raising arms overhead causes facial plethora and increased venous congestion within 1 minute (classic bedside maneuver). "
      "Severe SVC syndrome with airway or neurologic compromise is a medical emergency; many patients have a more indolent course over weeks to months allowing time for diagnosis and treatment planning. "
      "(3) Workup. "
      "Imaging: CT chest with IV contrast is the study of choice — identifies SVC obstruction, extent, cause (mass, thrombus, fibrosis), collateral vessels, and guides biopsy and treatment planning. "
      "MRV as alternative if iodinated contrast contraindicated. "
      "Tissue diagnosis is essential before cancer-directed therapy (except in true airway-compromising emergency): CT-guided biopsy, bronchoscopy with EBUS, mediastinoscopy, or excisional biopsy depending on accessibility and suspected histology. "
      "Labs: CBC, CMP, tumor markers, LDH, and other relevant for suspected diagnosis. "
      "(4) Management depends on severity and underlying cause. "
      "(a) Symptomatic management: head of bed elevation, supplemental oxygen, diuretics (cautious — can worsen hemodynamics), corticosteroids (dexamethasone — reduces edema and is helpful pending definitive treatment in lymphoma or steroid-sensitive tumors). "
      "(b) Endovascular intervention (SVC stenting) provides rapid symptom relief within 24-72 hours — particularly for severe symptoms or bridge to definitive therapy; first-line for severe airway/neurologic symptoms in malignancy. "
      "Anticoagulation after stenting. "
      "(c) Cancer-directed therapy: chemotherapy for lymphoma, SCLC, and germ cell tumors (highly chemosensitive); radiation therapy for NSCLC and other radioresponsive tumors — delivers symptomatic improvement within days to weeks; targeted therapy and immunotherapy based on molecular profile. "
      "(d) Thrombus-related SVC syndrome: anticoagulation, thrombolysis (systemic or catheter-directed), and/or thrombectomy; remove offending device (catheter, pacemaker lead) when feasible. "
      "(e) Non-malignant fibrosis: endovascular stenting is mainstay; surgical bypass in select cases. "
      "(5) Classic pitfalls: (a) treating empirically with chemotherapy or radiation without first obtaining tissue — histology determines therapy (SCLC, lymphoma, NSCLC, germ cell tumors have very different treatments with different prognoses), and empiric treatment can obscure diagnosis. "
      "In true life-threatening emergency, stenting buys time for diagnosis. "
      "(b) Missing catheter-related thrombotic SVC syndrome in a patient with indwelling central access — ultrasound and CT venography confirm, and anticoagulation plus device management is the approach. "
      "(c) Over-administering diuretics causing hypovolemia and worsening cerebral perfusion. "
      "(d) Not anticipating airway compromise — any patient with severe SVC syndrome may need emergent airway planning; awake fiberoptic intubation preferred if at all feasible. "
      "(e) Forgetting that SVC syndrome can resolve with effective cancer-directed treatment — even without stenting — in chemosensitive tumors."
    )
  },

  "surgical-bleeding": {
    "diagnosis": "Post-Operative Surgical Bleeding with Anticoagulation Complication (Post-THA)",
    "coachFinal": (
      "Diagnosis: post-operative surgical bleeding following total hip arthroplasty, complicated by ongoing anticoagulation. "
      "Key learning: "
      "(1) Perioperative bleeding in an orthopedic patient is typically a balance of three factors: (a) surgical bleeding (active arterial or venous source, capsular or periosteal oozing), (b) medication effects (anticoagulants, antiplatelets, NSAIDs), and (c) patient-intrinsic factors (thrombocytopenia, coagulopathy from liver disease, acquired hemophilia, renal failure). "
      "Identifying the cause guides treatment — transfusion alone is not sufficient without source control and correction of coagulopathy. "
      "(2) Workup for post-operative bleeding. "
      "Clinical: serial hemoglobin and hematocrit, vital signs trend (hypotension and tachycardia signal ongoing loss), drain output volume and character, expanding hematoma on exam, wound saturation of dressings. "
      "Labs: CBC, PT/INR, PTT, fibrinogen, platelet count; TEG or ROTEM (viscoelastic testing) when available — identifies specific coagulopathy components and guides targeted product replacement. "
      "Imaging: CT angiography identifies active extravasation and bleeding source; CT for hematoma extent. "
      "(3) Reversal of anticoagulation. "
      "(a) Warfarin: Vitamin K (5-10 mg PO or slow IV, avoid IM); 4-factor prothrombin complex concentrate (PCC — Kcentra in US) for urgent reversal; FFP as alternative if PCC unavailable. "
      "INR target <1.4-1.5 for most surgical bleeding. "
      "(b) Unfractionated heparin: protamine sulfate 1 mg per 100 units heparin (full reversal if within 30 minutes of last dose, partial reversal thereafter). "
      "(c) LMWH: partial reversal with protamine (1 mg per 1 mg enoxaparin within 8 hours, half-dose after); not complete reversal. "
      "(d) Dabigatran: idarucizumab (Praxbind) — specific antidote, complete reversal. Dialysis if idarucizumab unavailable (dabigatran is dialyzable). "
      "(e) Apixaban, rivaroxaban, edoxaban: andexanet alfa (specific antidote — expensive, limited availability) or 4-factor PCC at higher dose (50 units/kg). "
      "(f) Antiplatelet agents (aspirin, P2Y12 inhibitors): platelet transfusion for active bleeding (though recent data question effectiveness for aspirin). Desmopressin (DDAVP) may be adjunctive. Effect of P2Y12 inhibitors wanes over 3-7 days depending on agent. "
      "(4) Blood product resuscitation. "
      "Balanced transfusion 1:1:1 (pRBCs:FFP:platelets) for massive hemorrhage — activates massive transfusion protocol. "
      "Restrictive transfusion (Hgb 7-8 g/dL) for stable non-massive bleeding; higher threshold (8-9 g/dL) for active cardiac ischemia. "
      "Cryoprecipitate for fibrinogen <150 mg/dL. "
      "Tranexamic acid (antifibrinolytic) — 1 g IV within 3 hours of trauma or active bleeding reduces mortality (CRASH-2 trial); increasingly used perioperatively including elective total joint arthroplasty where it reduces transfusion. "
      "Calcium replacement (ionized calcium) — hypocalcemia develops with massive transfusion (citrate in blood products chelates calcium) and worsens coagulation. "
      "(5) Source control. "
      "Surgical re-exploration for clinically significant ongoing bleeding despite medical management. "
      "Interventional radiology embolization for identifiable bleeding arterial source (e.g., branches of the profunda femoris in post-THA). "
      "Local hemostatic agents (topical thrombin, Surgicel, FloSeal) at the time of surgery. "
      "Post-bleed: reassess VTE risk vs ongoing bleeding for anticoagulation resumption; often restart at lower dose or switch agents after the risk-benefit shifts (typically 24-72 hours after hemostasis confirmed). "
      "Classic pitfalls: (a) transfusing blood without addressing the anticoagulation source — keeps bleeding, dilutes coagulation factors, induces hyperkalemia and acidosis. "
      "(b) Using FFP alone for urgent warfarin reversal when PCC is available — slower and less effective. "
      "(c) Giving unnecessary FFP or platelets in a patient without coagulopathy or bleeding (no 'ceremonial' transfusions). "
      "(d) Missing acquired hemophilia or other rare causes in unexpected bleeding — hematology consult for unexplained bleeding with normal platelets and INR/PTT. "
      "(e) Not recalibrating VTE prophylaxis after bleeding event — resume mechanical prophylaxis immediately, pharmacologic as soon as safe; VTE risk is high post-THA."
    )
  },

  "sympathomimetic-toxicity": {
    "diagnosis": "Sympathomimetic Toxidrome — Amphetamine Excess with Caffeine and Demand Ischemia",
    "coachFinal": (
      "Diagnosis: sympathomimetic toxidrome from prescription amphetamine excess (60 mg) combined with excessive caffeine, causing demand ischemia and mild rhabdomyolysis. "
      "Key learning: "
      "(1) The sympathomimetic toxidrome results from excess alpha and beta adrenergic stimulation, classically from cocaine, amphetamines, MDMA (ecstasy), bath salts (synthetic cathinones), methamphetamine, pseudoephedrine, and combinations with caffeine or stimulant energy products. "
      "Findings: tachycardia, hypertension, hyperthermia, diaphoresis, mydriasis (distinguishes from opioid pinpoint pupils), agitation, psychosis, seizures, chest pain/ischemia, rhabdomyolysis, and potentially fatal arrhythmia and multi-organ failure. "
      "(2) The 'toxidrome matrix' helps differentiate: "
      "Sympathomimetic: tachycardia, hypertension, mydriasis, DIAPHORESIS, agitation, hyperthermia. "
      "Anticholinergic: tachycardia, hypertension, mydriasis, DRY skin, hyperthermia, confusion, urinary retention. "
      "Serotonin syndrome: tachycardia, hypertension, HYPERREFLEXIA and CLONUS (especially lower extremity), tremor, diaphoresis, diarrhea, recent serotonergic agent. "
      "Cholinergic: bradycardia (or tachycardia), bronchorrhea/bronchospasm, diaphoresis, SLUDGE symptoms. "
      "Opioid: bradypnea, miosis (pinpoint), sedation. "
      "Overlap occurs, and co-ingestions are common. "
      "(3) Cardiovascular complications. "
      "Sympathomimetic-induced chest pain deserves careful evaluation: coronary vasospasm, platelet activation, accelerated atherosclerosis with plaque rupture, and direct myocardial toxicity. "
      "Sympathomimetic MI management differs from typical MI: "
      "(a) FIRST-LINE: benzodiazepines — calm the patient, reduce sympathetic drive, reduce oxygen demand, and often resolve tachycardia and hypertension. "
      "(b) Nitroglycerin and calcium channel blockers for coronary vasospasm and hypertension. "
      "(c) Aspirin for platelet inhibition. "
      "(d) Phentolamine for refractory hypertension (alpha-blockade). "
      "(e) AVOID beta-blockers alone — can cause unopposed alpha stimulation with paradoxical worsening of hypertension and coronary vasospasm. Combined alpha-beta blocker (labetalol) is controversial; phentolamine preferred. "
      "(f) Cath lab for ongoing ischemia/STEMI as usual. "
      "(4) Supportive management. "
      "(a) Rapid cooling for hyperthermia — active cooling (evaporative, ice packs, cool IV fluids) with target temp <39 C; external cooling plus aggressive sedation. "
      "(b) IV benzodiazepines (lorazepam, diazepam, midazolam) for agitation, hypertension, tachycardia, hyperthermia, seizures, and sympathetic drive reduction — often high and repeated doses required. "
      "(c) Seizure management — benzodiazepines first-line; second-line barbiturate or propofol. "
      "(d) Rhabdomyolysis — aggressive IV crystalloid, monitor CK and renal function, treat hyperkalemia. "
      "(e) Airway protection and sedation for severe agitation. "
      "(f) Treat comorbid conditions: hyperthermia, acidosis, electrolytes. "
      "(g) Psychiatric evaluation once medically stable — for substance use treatment and/or psychosis management. "
      "(5) Long-term management and counseling. "
      "Address underlying substance use disorder — motivational interviewing, referral to substance treatment, behavioral therapy, medications for specific substance use disorders (naltrexone, contingency management for stimulant use). "
      "Review prescribed stimulants in ADHD or narcolepsy — adherence, dosing, potential misuse, and assessment for cardiovascular risk. "
      "Educate on interaction of prescribed amphetamines with OTC energy products, caffeine, and decongestants. "
      "Cardiovascular risk modification if atherosclerotic disease identified. "
      "Classic pitfalls: (a) beta-blocker monotherapy in sympathomimetic toxicity — 'unopposed alpha' can cause severe hypertension and coronary vasospasm. "
      "(b) Under-sedating agitated patients — inadequate benzodiazepine dosing fails to control sympathetic drive. "
      "(c) Missing serotonin syndrome in patient on SSRI who also takes amphetamine or MDMA — presents similarly but has hyperreflexia/clonus. "
      "(d) Neuroleptic use for agitation — antipsychotics can lower seizure threshold and add to hyperthermia; benzodiazepines are preferred. "
      "(e) Forgetting to screen for substance use and connect with treatment — medical stabilization is incomplete without addressing the underlying issue."
    )
  },

  "takotsubo-cardiomyopathy": {
    "diagnosis": "Takotsubo Cardiomyopathy (Stress Cardiomyopathy, 'Broken Heart Syndrome')",
    "coachFinal": (
      "Diagnosis: takotsubo cardiomyopathy ('stress cardiomyopathy', 'apical ballooning syndrome', 'broken heart syndrome'). "
      "Key learning: "
      "(1) Takotsubo cardiomyopathy is a transient systolic dysfunction of the left ventricle that mimics acute coronary syndrome, typically precipitated by an acute emotional or physical stressor. "
      "Named for the Japanese octopus-trapping pot (takotsubo) because of the classic apical ballooning appearance on ventriculogram. "
      "Predominantly affects postmenopausal women (>90% of cases, median age ~65). "
      "Triggers: emotional stress (death of loved one, bad news, relationship stress), physical stress (severe illness, surgery, sepsis, asthma exacerbation, subarachnoid hemorrhage, drug withdrawal), and medication-induced (catecholamine surges). "
      "(2) Pathophysiology (incompletely understood). "
      "Catecholamine-mediated myocardial stunning is the leading hypothesis — massive sympathetic surge causes direct myocyte toxicity, microvascular spasm, and transient hibernation. "
      "Supporting evidence: elevated circulating catecholamines (often 2-3x higher than in MI), precipitating events often involve fight-or-flight activation, and pheochromocytoma can cause a takotsubo-like picture. "
      "(3) Presentation — indistinguishable from acute coronary syndrome at initial evaluation: "
      "Chest pain (most common), dyspnea, ST changes (often anterior ST elevation or T-wave inversion), troponin elevation, and sometimes cardiogenic shock or ventricular arrhythmia. "
      "Typical patterns: apical ballooning (most common, 80%), midventricular, basal (reverse takotsubo, more common in younger patients), and focal. "
      "Always consider in postmenopausal woman with chest pain after acute stressor or severe illness. "
      "(4) Diagnosis. "
      "Modified Mayo criteria: "
      "(a) Transient hypokinesis, akinesis, or dyskinesis of LV mid-segments with or without apical involvement; wall motion abnormalities extend beyond a single coronary distribution. "
      "(b) Absence of obstructive coronary disease or angiographic evidence of acute plaque rupture. "
      "(c) New ECG abnormalities (ST elevation, T wave inversion) or modest troponin elevation. "
      "(d) Absence of pheochromocytoma or myocarditis. "
      "Workup: ECG, troponin, echocardiogram (reveals characteristic apical ballooning), coronary angiography (to rule out CAD — absence of obstructive CAD is key), cardiac MRI (helps distinguish from MI and myocarditis, supports diagnosis), and rule out pheochromocytoma and myocarditis. "
      "(5) Management and prognosis. "
      "Supportive care — there is no specific treatment; most patients recover completely within 4-8 weeks. "
      "(a) Beta-blockers and ACE-I/ARB during recovery — standard heart failure management; no strong mortality benefit specific to takotsubo but standard of care for reduced EF. "
      "(b) Diuretics for pulmonary edema; avoid over-diuresis. "
      "(c) Anticoagulation for apical thrombus (seen in 5-10% due to stasis in ballooned apex) — continue for 3-6 months with follow-up imaging. "
      "(d) Cardiogenic shock: AVOID inotropes and vasopressors that further elevate catecholamines (epinephrine, norepinephrine, dopamine worsen the picture); intra-aortic balloon pump, mechanical circulatory support (Impella, ECMO), and venoarterial ECMO are options. "
      "(e) Arrhythmia: manage acutely; most resolve with recovery. "
      "Mortality is low (<5%) but not zero; complications include heart failure, LV outflow tract obstruction (relative contraindication to inotropes), arrhythmia, thrombus, and free wall rupture (rare). "
      "Recurrence 2-10% over 5 years. "
      "Address the precipitating stressor and psychological support are important. "
      "Classic pitfalls: (a) missing acute coronary syndrome — tissue diagnosis (coronary angiography) is essential, because empiric treatment as takotsubo without excluding MI misses potentially reperfusion-amenable STEMI. "
      "(b) Treating cardiogenic shock from takotsubo with catecholamine infusions that worsen the picture — mechanical support is preferred in severe cases. "
      "(c) Missing LVOT obstruction: basal and midventricular hypercontractility with apical ballooning can create dynamic LVOT obstruction and hypotension — managed with beta-blockers, NOT inotropes. "
      "(d) Missing pheochromocytoma as cause — similar presentation and must be excluded because management is specific. "
      "(e) Not addressing the psychological trigger — counseling and treatment of depression/anxiety reduce recurrence."
    )
  },

}


def enrich(slug, e):
    path = os.path.join(EMR_DIR, f'{slug}.js')
    if not os.path.exists(path):
        print(f'  SKIP (missing) {slug}'); return False
    with open(path) as f:
        src = f.read()
    header_match = re.match(r'^(.*?)window\.EMR_DATA\s*=', src, re.DOTALL)
    header = header_match.group(1) if header_match else ''
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m:
        print(f'  PARSE ERROR {slug}'); return False
    try:
        data = json.loads(m.group(1))
    except Exception as ex:
        print(f'  JSON ERROR {slug}: {ex}'); return False

    if not isinstance(data.get('meta'), dict):
        data['meta'] = {}
    if e.get('diagnosis'):
        data['meta']['diagnosis'] = e['diagnosis']
    data['meta']['caseId'] = slug

    if not isinstance(data.get('guided'), dict):
        data['guided'] = {}
    if not isinstance(data['guided'].get('coachPrompts'), dict):
        data['guided']['coachPrompts'] = {}
    if 'coachFinal' in e:
        data['guided']['coachPrompts']['final'] = e['coachFinal']

    with open(path, 'w') as f:
        if header and not header.endswith('\n'):
            header = header + '\n'
        f.write(f'{header}window.EMR_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};\n')
    return True


if __name__ == '__main__':
    done = 0
    for s, e in ENRICHMENTS.items():
        if enrich(s, e):
            print(f'OK {s}')
            done += 1
    print(f'\nBatch 33A: {done}/{len(ENRICHMENTS)} enriched')
