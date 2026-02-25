// ReasonDx — Rotation-Specific Order Templates (Phase 3)
// 5 rotation templates + case-specific expected orders + scoring engine

window.RDX_ORDER_TEMPLATES = (function() {

const TEMPLATES = {
im: {
    name:'Internal Medicine Admission Orders', icon:'🩺',
    categories: {
        codeStatus: { label:'Code Status', type:'select',
            options:['Full code','DNR/Full treatment','DNR/DNI','Comfort measures only','Discuss with patient/family'],
            teaching:'Code status should be addressed within 24h of admission for all patients.' },
        diet: { label:'Diet', type:'select',
            options:['NPO','NPO except meds','Clear liquids','Cardiac / low sodium','Diabetic / carb-controlled','Renal diet','Regular','Advance as tolerated'],
            teaching:'NPO if any procedure anticipated. Cardiac diet for ACS/CHF.' },
        activity: { label:'Activity', type:'select',
            options:['Bedrest','Bedrest with BSC','Up to chair TID','Ambulate with assist','Up ad lib','Fall precautions','Seizure precautions'],
            teaching:'Early mobilization reduces DVT, deconditioning, and hospital-acquired complications.' },
        nursing: { label:'Nursing Orders', type:'multi',
            options:['Vitals Q4h','Vitals Q2h','Vitals Q1h','Continuous pulse ox','Strict I&Os','Daily weights','Neuro checks Q2h','Neuro checks Q4h','Finger stick glucose AC+HS','Finger stick glucose Q6h','Wound care per protocol','Foley catheter — document indication','Restraints — document indication Q4h'],
            teaching:'Vitals frequency matches acuity. Daily weights are the most sensitive marker of fluid status.' },
        telemetry: { label:'Monitoring', type:'select',
            options:['None','Continuous telemetry','Continuous telemetry + pulse ox','Spot check ECG in AM'],
            teaching:'Telemetry for: ACS, new arrhythmia, electrolyte abnormalities, syncope workup, drug toxicity.' },
        ivFluids: { label:'IV Fluids', type:'multi',
            options:['── Maintenance ──','NS at 125 mL/hr','NS at 75 mL/hr','LR at 125 mL/hr','D5 1/2NS at 75 mL/hr','── Bolus ──','NS 500mL bolus x1','NS 1L bolus x1','── Drips ──','Heparin drip per protocol','Insulin drip per DKA protocol','── Other ──','Saline lock only','No IV fluids — PO adequate'],
            teaching:'NS for volume resuscitation. Avoid LR if hyperkalemic. Document fluid rate rationale.' },
        labs: { label:'Labs & Studies', type:'multi',
            options:['CBC in AM','BMP in AM','CMP in AM','Troponin Q3h x 3','Troponin Q6h x 2','BMP Q2h (DKA)','BMP Q4h','Lipid panel fasting','A1c','BNP / NT-proBNP','TSH','Lactate now','VBG now','ABG now','Blood cultures x 2 now','UA + culture now','Procalcitonin','Coags (PT/INR, PTT)','Type and screen','Mg + Phos','LFTs','Sputum culture','ESR / CRP','D-dimer','Fibrinogen','LDH + haptoglobin + retic','Drug levels (specify)'],
            teaching:'AM labs ordered by 10 PM ensure results by rounds. Serial troponins rule in/out ACS.' },
        imaging: { label:'Imaging', type:'multi',
            options:['CXR portable now','CXR PA/Lat in AM','CT head without contrast','CT chest PE protocol','CT abdomen/pelvis with contrast','ECG now','ECG in AM','Echocardiogram','Ultrasound (specify)','No additional imaging'],
            teaching:'Portable CXR for acute respiratory. CT PE protocol requires adequate renal function.' },
        meds: { label:'Medications', type:'multi',
            options:['── Home Medications ──','Continue home medications (reconciled)','Hold home medications pending review','── Cardiac ──','Aspirin 81mg daily','Aspirin 325mg x1 then 81mg daily','Atorvastatin 80mg QHS','Metoprolol tartrate 25mg Q6h (hold SBP<100 HR<60)','Lisinopril 10mg daily (hold SBP<100)','Heparin drip per ACS protocol','Enoxaparin 1mg/kg subQ Q12h','Nitroglycerin 0.4mg SL PRN','Furosemide 40mg IV x1','Furosemide 20mg IV Q12h','── Pulmonary ──','Albuterol neb Q4h + PRN','Ipratropium neb Q6h','Prednisone 40mg daily x 5d','O2 titrate to SpO2 88-92% (COPD)','O2 titrate to SpO2 >94%','── GI ──','Pantoprazole 40mg IV BID','Octreotide drip (GI bleed)','Ondansetron 4mg IV Q6h PRN','── Endocrine ──','Insulin drip per DKA protocol','Insulin sliding scale','D50 amp at bedside','── ID ──','Vancomycin per pharmacy','Piperacillin-tazobactam 4.5g IV Q6h','Ceftriaxone 2g IV Q12h','Azithromycin 500mg daily','Metronidazole 500mg IV Q8h','Acyclovir 10mg/kg IV Q8h','Ampicillin 2g IV Q4h','── Pain ──','Acetaminophen 1000mg Q6h','Ibuprofen 400mg Q6h','Morphine 2mg IV Q4h PRN','Oxycodone 5mg Q4h PRN','── Electrolytes ──','KCl 20mEq (K<4.0)','KCl 40mEq IV (K<3.5)','MgSO4 2g IV (Mg<1.8)','── Specific ──','NAC protocol (21h IV)','Cyproheptadine 12mg load','Dantrolene 1-2.5mg/kg IV','Bromocriptine 2.5mg Q6-8h','Mannitol 1g/kg IV','Dexamethasone 10mg IV x1'],
            teaching:'Reconcile ALL home medications. Document indication for each new medication.' },
        consults: { label:'Consults', type:'multi',
            options:['Cardiology STAT','Cardiology AM','Pulmonology','GI STAT','GI AM','Nephrology','Neurology STAT','Neurology AM','Infectious Disease','Hematology','Endocrine','Toxicology','Palliative Care','Social Work','Case Management','Respiratory Therapy','Physical Therapy','Nutrition'],
            teaching:'STAT consults for emergent procedures. AM consults for non-emergent specialist input.' },
        dvt: { label:'DVT Prophylaxis', type:'select',
            options:['Heparin 5000u subQ Q8h','Enoxaparin 40mg subQ daily','SCDs only','SCDs + pharmacologic','Therapeutic anticoag (no additional ppx)','Contraindicated — active bleeding'],
            teaching:'EVERY admitted patient needs VTE prophylaxis assessment.' }
    }
},

surgery: {
    name:'Surgical Admission Orders', icon:'🔪',
    categories: {
        npoStatus: { label:'NPO Status', type:'select',
            options:['NPO after midnight','NPO now — OR anticipated','NPO except meds with sip','Clear liquids until 2h before OR','Regular — no surgery planned'],
            teaching:'ASA fasting: clear liquids until 2h, light meal until 6h before anesthesia.' },
        activity: { label:'Activity', type:'select',
            options:['Bedrest strict','Bedrest with BSC','Up to chair with assist','Ambulate with assist','Non-weight-bearing (specify)','Elevate extremity','Up ad lib'],
            teaching:'Post-op mobilize within 24h. Orthopedic patients may have weight-bearing restrictions.' },
        nursing: { label:'Nursing', type:'multi',
            options:['Vitals Q4h','Vitals Q2h','Vitals Q1h x 4 then Q4h','Strict I&Os','Foley to gravity','Foley remove POD1','Monitor drain output Q shift','Monitor drain output Q4h','Incentive spirometry Q1h while awake','Wound check Q shift','Dressing change per protocol','NG tube to low wall suction','Neurovascular checks Q2h','Compartment checks Q1h','Fall precautions'],
            teaching:'IS prevents atelectasis — #1 post-op fever cause. Document drain character and volume.' },
        preOpLabs: { label:'Pre-Op Labs', type:'multi',
            options:['Type and screen','Type and crossmatch 2u PRBCs','CBC now','BMP now','Coags','LFTs','Lipase','Lactate now','Blood cultures x 2','UA now','Urine pregnancy test','CXR portable','ECG (age >50 or cardiac hx)','CT abdomen/pelvis','CT angiography'],
            teaching:'Type and screen for bleeding risk. Pregnancy test MANDATORY before anesthetic.' },
        postOpLabs: { label:'Post-Op Labs', type:'multi',
            options:['CBC in AM','BMP in AM','H&H Q6h x 2','Lactate Q6h until normal','CBC + BMP in PACU','Coags in AM','No additional labs'],
            teaching:'Serial H&H after major surgery. Trend lactate for tissue perfusion.' },
        antibiotics: { label:'Antibiotics', type:'multi',
            options:['── Prophylaxis ──','Cefazolin 2g IV within 60 min of incision','Cefoxitin 2g IV (colorectal)','Clindamycin 900mg IV (allergy)','Metronidazole 500mg IV (add for GI)','── Therapeutic ──','Piperacillin-tazobactam 4.5g IV Q6h','Vancomycin per pharmacy','Ceftriaxone 2g IV daily','── Duration ──','Prophylaxis: discontinue within 24h post-op','Therapeutic: pending cultures'],
            teaching:'Prophylaxis within 60 min of incision, discontinue within 24h (SCIP guidelines).' },
        meds: { label:'Medications', type:'multi',
            options:['── Pain (Multimodal) ──','Acetaminophen 1000mg Q6h (scheduled)','Ketorolac 15mg IV Q6h x 48h','Gabapentin 300mg Q8h','Morphine 2-4mg IV Q3h PRN','Oxycodone 5mg Q4h PRN','PCA morphine','── GI ──','Famotidine 20mg IV Q12h','Ondansetron 4mg IV Q6h PRN','Docusate 100mg BID','Senna 2 tabs QHS','── Fluids ──','LR at 125 mL/hr','NS at 125 mL/hr','Bolus NS 500mL for UOP <0.5mL/kg/hr','── Other ──','Continue home meds except (specify holds)','Hold anticoagulation — restart when (specify)','Insulin sliding scale'],
            teaching:'ERAS: multimodal analgesia with opioids as rescue. Bowel regimen mandatory with opioids.' },
        consults: { label:'Consults', type:'multi',
            options:['Anesthesia pre-op','Medicine pre-op clearance','Vascular surgery','Orthopedics','Neurosurgery','IR','PT start POD1','OT','Wound care / ostomy nurse','Nutrition','Social Work'],
            teaching:'PT starts POD1 for most surgeries. Ostomy nurse pre-op for planned diversions.' },
        dvt: { label:'VTE Prophylaxis', type:'multi',
            options:['SCDs intra-op and until ambulatory','Heparin 5000u subQ Q8h post-op','Enoxaparin 40mg subQ daily post-op','Hold pharmacologic — bleeding risk','Caprini score documented'],
            teaching:'SCDs before induction. Pharmacologic post-op when hemostasis confirmed.' },
        consent: { label:'Consent / OR Prep', type:'multi',
            options:['Informed consent obtained','Consent pending','Surgical site marked','H&P on chart','Pre-op checklist complete','Blood products consented','Notify OR scheduling','Emergency — proceed per policy'],
            teaching:'Consent: procedure, risks, benefits, alternatives. Site marking prevents wrong-site surgery.' }
    }
},

psych: {
    name:'Psychiatric Admission Orders', icon:'🧠',
    categories: {
        legalStatus: { label:'Legal Status', type:'select',
            options:['Voluntary admission','Involuntary hold (Baker Act / 5150)','Court-ordered evaluation','Emergency detention','Converting voluntary to involuntary'],
            teaching:'Know your state hold criteria: danger to self, danger to others, gravely disabled.' },
        safetyLevel: { label:'Safety Precautions', type:'multi',
            options:['1:1 constant observation','Q15 minute checks','Q30 minute checks','Line of sight supervision','Elopement precautions','Sharps restriction','Contraband search completed','Suicide precautions — remove ligature points','Assault precautions','Fall precautions','Supervised meals','Supervised bathroom'],
            teaching:'1:1 for active SI with plan/intent or recent attempt. Always document safety level rationale.' },
        diet: { label:'Diet', type:'select',
            options:['Regular','Supervised meals (ED protocol)','Refeeding protocol','Diabetic','Soft mechanical (sedation risk)'],
            teaching:'Supervised meals for eating disorders — monitor 1h post-meal.' },
        activity: { label:'Activity / Milieu', type:'multi',
            options:['Unit milieu as tolerated','Restricted to unit','Off-unit with staff escort','Group therapy when stable','Single room for safety','Visitors (specify restrictions)','No visitors initially','Phone privileges (specify)','No phone — safety concern'],
            teaching:'Gradual privilege escalation reflects improvement. Document restriction rationale.' },
        nursing: { label:'Nursing / Vitals', type:'multi',
            options:['Vitals Q shift','Vitals Q4h','Vitals Q1h (post-medication)','Orthostatic vitals daily','Weight on admission then weekly','Finger stick glucose if diabetic','CIWA protocol (alcohol withdrawal)','COWS protocol (opioid withdrawal)','Seizure precautions','Document sleep pattern nightly','Behavioral observations Q shift'],
            teaching:'CIWA/COWS guide withdrawal management. Track sleep — insomnia signals mania or med side effects.' },
        labs: { label:'Labs', type:'multi',
            options:['── Admission ──','CBC','CMP','TSH','UA','Urine drug screen','Urine pregnancy test','Blood alcohol level','Acetaminophen level','Salicylate level','Lithium level','Valproic acid level','CPK (NMS concern)','── Additional ──','RPR/VDRL','HIV screening','Hepatitis panel','A1c','Lipid panel','ECG (baseline for QTc)','CT head (first break psychosis)'],
            teaching:'ECG before starting QTc-prolonging antipsychotics. CT head for first-break psychosis.' },
        meds: { label:'Medications', type:'multi',
            options:['── Antipsychotics ──','Haloperidol 5mg PO BID','Haloperidol 5mg IM PRN','Olanzapine 10mg PO QHS','Olanzapine 10mg IM PRN','Risperidone 2mg PO BID','Quetiapine 25-50mg QHS','Aripiprazole 10mg daily','── Mood Stabilizers ──','Lithium 300mg BID','Valproic acid 500mg BID','Lamotrigine 25mg daily (slow titration)','── Antidepressants ──','Sertraline 50mg daily','Fluoxetine 20mg daily','Mirtazapine 15mg QHS','── PRN ──','Lorazepam 1mg PO/IM Q6h PRN anxiety','Lorazepam 2mg IM PRN agitation','Hydroxyzine 25mg Q6h PRN','Trazodone 50mg QHS PRN insomnia','── Emergency ──','B52: Benadryl 50mg + Haldol 5mg + Lorazepam 2mg IM','Olanzapine 10mg IM (do NOT combine with IM benzo)','── Withdrawal ──','CIWA-guided lorazepam','Buprenorphine per COWS'],
            teaching:'Never combine IM olanzapine with IM benzo — respiratory depression risk.' },
        riskAssessment: { label:'Risk Assessment', type:'multi',
            options:['C-SSRS completed','PHQ-9 completed','GAD-7 completed','CAGE/AUDIT completed','Safety plan developed','Lethal means counseling documented','Family contacted (with consent)','Prior records reviewed','Collateral obtained','Capacity assessment documented'],
            teaching:'C-SSRS is gold standard for suicide risk. Lethal means restriction is the most effective prevention intervention.' },
        consults: { label:'Consults', type:'multi',
            options:['Social work — disposition','Social work — safety/DV','Case management','Addiction medicine / MOUD','Neuropsychological testing','ECT evaluation','Medicine consult','Neurology','Legal / patient advocate','Chaplaincy','Group therapy enrollment'],
            teaching:'Disposition planning starts at admission. Early MOUD initiation improves outcomes.' },
        dvt: { label:'VTE Prophylaxis', type:'select',
            options:['Ambulation — no pharmacologic needed','SCDs (if restrained/bedbound)','Heparin 5000u subQ Q8h (prolonged immobility)'],
            teaching:'Psychiatric patients are generally ambulatory. VTE ppx if sedated, restrained, or immobilized.' }
    }
},

ob: {
    name:'Obstetric Admission Orders', icon:'🤰',
    categories: {
        obstetricStatus: { label:'Obstetric Status', type:'multi',
            options:['Gravida ___ Para ___','Gestational age ___ weeks','GBS status: positive / negative / unknown','Rh status documented','Prenatal records on chart'],
            teaching:'GBS prophylaxis if positive or unknown. Rh-negative patients need RhoGAM.' },
        fetalMonitoring: { label:'Fetal Monitoring', type:'select',
            options:['Continuous EFM','Intermittent auscultation Q15-30 min','NST on admission then continuous','No monitoring (pre-viable)'],
            teaching:'Continuous EFM for high-risk: preeclampsia, PPROM, meconium, abnormal FHR.' },
        diet: { label:'Diet', type:'select',
            options:['Clear liquids during labor','NPO — C-section anticipated','NPO — magnesium (aspiration risk)','Regular — antepartum','Ice chips only'],
            teaching:'NPO with magnesium due to decreased protective airway reflexes.' },
        activity: { label:'Activity', type:'select',
            options:['Ambulate as tolerated','Bedrest — preeclampsia/previa','Bedrest with BSC','Left lateral decubitus (fetal distress)'],
            teaching:'Left lateral decubitus improves uteroplacental perfusion.' },
        nursing: { label:'Nursing', type:'multi',
            options:['Vitals Q4h','Vitals Q1h (preeclampsia)','Strict I&Os','Foley catheter','Daily weight','Urine protein dipstick each void','DTRs Q1-2h (if on MgSO4)','Respiratory rate Q1h (if on MgSO4)','Fundal checks Q15 min post-delivery x4','Pad count for hemorrhage','Breast/lactation support'],
            teaching:'On MgSO4: stop if RR<12, DTRs absent, UOP<30mL/hr. Calcium gluconate at bedside.' },
        labs: { label:'Labs', type:'multi',
            options:['CBC now','CMP now','Type and screen','Type and crossmatch 2 units','Coags + fibrinogen','LFTs + LDH (HELLP)','Uric acid','Protein/creatinine ratio','Urine drug screen','Magnesium level Q4-6h (if on drip)','Kleihauer-Betke (Rh neg + bleeding)','BetaHCG quantitative','Ultrasound fetal biometry','Ultrasound placental location'],
            teaching:'HELLP: platelets + AST/ALT + LDH. Fibrinogen <200 is critical in pregnancy.' },
        meds: { label:'Medications', type:'multi',
            options:['── Preeclampsia/Eclampsia ──','MgSO4 4-6g IV load','MgSO4 1-2g/hr maintenance','Calcium gluconate at bedside','Labetalol 20mg IV (may double Q10 min)','Hydralazine 5mg IV Q20 min','Nifedipine 10mg PO Q20 min','── Labor ──','Oxytocin per induction protocol','Epidural — anesthesia consult','── Hemorrhage ──','Oxytocin 40u in 1L LR','Methylergonovine 0.2mg IM (NOT if hypertensive)','Misoprostol 800mcg PR','Carboprost 250mcg IM (NOT if asthma)','TXA 1g IV','── Antibiotics ──','GBS ppx: Penicillin G 5M units load then 2.5M Q4h','GBS ppx (allergy): Cefazolin 2g then 1g Q8h','GBS ppx (high-risk allergy): Vancomycin 1g Q12h','Chorioamnionitis: Ampicillin + Gentamicin','── Other ──','RhoGAM 300mcg IM (Rh negative)','Betamethasone 12mg IM x2 (fetal lungs, 23-34 wks)','Acetaminophen 1000mg Q6h PRN','Ondansetron 4mg IV Q6h PRN'],
            teaching:'MgSO4 for seizure prophylaxis NOT BP lowering. Methylergonovine contraindicated in HTN.' },
        consults: { label:'Consults', type:'multi',
            options:['Attending OB notified','MFM consult','Anesthesia — epidural/OR standby','NICU notification','Neonatology at delivery','Blood bank — MTP standby','Social work','Lactation consultant','Pediatrics for newborn'],
            teaching:'NICU notification for preterm, meconium, IUGR, abnormal FHR.' },
        delivery: { label:'Delivery Planning', type:'multi',
            options:['Vaginal delivery anticipated','C-section scheduled','C-section emergent (Category 1)','C-section urgent (Category 2)','Operative vaginal delivery possible','Delayed cord clamping','Skin-to-skin post-delivery','Placenta to pathology'],
            teaching:'Category 1: immediate threat to life — decision-to-incision <30 min.' }
    }
},

neuro: {
    name:'Neurology Admission Orders', icon:'🧠',
    categories: {
        neuroChecks: { label:'Neurologic Monitoring', type:'multi',
            options:['NIHSS Q1h x 24h then Q4h','NIHSS Q4h','GCS Q1h','GCS Q2h','GCS Q4h','Pupil checks Q1h','Neuro checks Q2h','Neuro checks Q4h','Seizure precautions','Continuous EEG','Routine EEG','EVD per protocol','ICP monitoring — notify if >20'],
            teaching:'NIHSS Q1h after tPA — increase ≥4 triggers emergent CT for hemorrhagic transformation.' },
        diet: { label:'Diet', type:'select',
            options:['NPO — swallow eval pending','NPO — intubated/decreased LOC','Dysphagia diet (specify)','Thickened liquids','Regular — swallow intact','Tube feeds per protocol'],
            teaching:'EVERY stroke patient needs swallow eval BEFORE any PO intake. Aspiration pneumonia is leading post-stroke mortality cause.' },
        activity: { label:'Activity / Positioning', type:'select',
            options:['Bedrest — HOB 30°','Bedrest — HOB flat (vasospasm protocol)','Bedrest with BSC','Up to chair with assist','Ambulate with assist — PT eval','Seizure precautions + padded rails'],
            teaching:'HOB 30° reduces ICP. Exception: SAH vasospasm — keep flat to maintain cerebral perfusion.' },
        nursing: { label:'Nursing', type:'multi',
            options:['Vitals Q1h','Vitals Q2h','Vitals Q4h','Strict I&Os','Continuous pulse ox','BP keep SBP <180/105 (post-tPA)','BP keep SBP <220/120 (non-tPA stroke)','BP permissive HTN (SAH 120-160)','Temp checks Q4h — treat fever aggressively','Glucose Q6h — treat >180 and <60','Foley with hourly UOP','DVT compression devices'],
            teaching:'Fever worsens neuro outcomes — treat aggressively. Hyperglycemia >180 worsens stroke outcomes.' },
        labs: { label:'Labs', type:'multi',
            options:['── Acute ──','CBC now','BMP now','Coags','Troponin','Glucose STAT','Type and screen','── Stroke Workup ──','Lipid panel','A1c','Echocardiogram (TTE, consider TEE)','Carotid duplex','CTA head and neck','MRI brain diffusion','MRA head and neck','Hypercoag panel (if young)','Holter/telemetry (AF detection)','── Seizure ──','AED levels','Prolactin (within 20 min)','Ammonia','MRI seizure protocol','── CSF ──','LP: OP, cell count, protein, glucose, culture','CSF HSV PCR','CSF oligoclonal bands'],
            teaching:'Stroke workup: vascular imaging + cardiac source + metabolic risk factors.' },
        meds: { label:'Medications', type:'multi',
            options:['── Stroke ──','tPA per stroke protocol','Aspirin 325mg (after tPA 24h)','Aspirin 325mg now (non-tPA)','Clopidogrel 300mg load then 75mg','Atorvastatin 80mg QHS','Heparin drip (cardiac thrombus/dissection)','── BP ──','Labetalol 10-20mg IV PRN','Nicardipine drip 5mg/hr','Hydralazine 10mg IV PRN','── Seizure ──','Levetiracetam 1000mg IV load then 500mg Q12h','Fosphenytoin 20mg PE/kg load','Valproic acid 20-40mg/kg load','Lacosamide 200mg IV load then 100mg Q12h','Lorazepam 4mg IV (seizure emergency)','── SAH / ICP ──','Nimodipine 60mg Q4h x 21d','Hypertonic saline 23.4% (herniation)','Mannitol 1g/kg IV','── Neuroprotection ──','Acetaminophen 1000mg IV Q6h (fever)','External cooling PRN >38°C','Insulin drip glucose 140-180','── Other ──','Famotidine 20mg IV Q12h','Dexamethasone 10mg IV (vasogenic edema)'],
            teaching:'tPA within 4.5h. No antiplatelets 24h post-tPA. Nimodipine is THE drug for SAH vasospasm.' },
        consults: { label:'Consults', type:'multi',
            options:['Neurosurgery STAT','Neurosurgery AM','Neurointerventional STAT (thrombectomy)','Speech Pathology — swallow ASAP','Physical Therapy','Occupational Therapy','Epilepsy team','Palliative Care','Social Work','Case Management — rehab placement'],
            teaching:'Thrombectomy for LVO within 24h (DAWN/DEFUSE-3). Speech path BEFORE any PO.' },
        dvt: { label:'VTE Prophylaxis', type:'select',
            options:['SCDs bilateral (hemorrhagic — no pharmacologic)','SCDs + Heparin 5000u Q8h (ischemic, start 24-48h)','SCDs + Enoxaparin 40mg daily','Hold pharmacologic — recent hemorrhage or tPA <24h'],
            teaching:'NO pharmacologic VTE ppx 24h post-tPA or in hemorrhagic stroke. SCDs immediately.' }
    }
},

peds: {
    name:'Pediatric Admission Orders', icon:'👶',
    categories: {
        diet: { label:'Diet / Nutrition', type:'select',
            options:['Age-appropriate diet','NPO','Clear liquids','Breast milk / formula ad lib','Breast milk / formula Q3h','Advance as tolerated','Pedialyte PO','Tube feeds (specify)'],
            teaching:'Infants need frequent feeds. NPO only if procedure or severe respiratory distress.' },
        activity: { label:'Activity', type:'select',
            options:['Crib — continuous monitoring','Bedrest with crib rails','Up ad lib age-appropriate','Parental supervision','Fall precautions'],
            teaching:'Parents at bedside is therapeutic. Age-appropriate activity promotes recovery.' },
        nursing: { label:'Nursing', type:'multi',
            options:['Vitals Q4h','Vitals Q2h','Vitals Q1h','Continuous pulse ox','Continuous cardiorespiratory monitor','Strict I&Os — diaper weights','Daily weight (same scale, same time)','Finger stick glucose Q6h','Head circumference daily (infants)','Temperature rectal (<3 months)','Pain assessment age-appropriate (FLACC/Wong-Baker)','Assess hydration Q shift'],
            teaching:'Diaper weights = gold standard I&Os (1g = 1mL). Monitor fontanelle in infants.' },
        ivFluids: { label:'IV Fluids', type:'multi',
            options:['── Maintenance (Holliday-Segar) ──','D5 NS at maintenance rate','D5 NS + 20 KCl/L at maintenance','── Bolus ──','NS 20 mL/kg bolus (may repeat x3)','NS 10 mL/kg (cardiac caution)','LR 20 mL/kg','── Other ──','D10W maintenance (neonates)','Saline lock only','No IV — tolerating PO'],
            teaching:'Holliday-Segar: 4/2/1 rule. ALWAYS isotonic fluids for maintenance — hypotonic kills.' },
        labs: { label:'Labs', type:'multi',
            options:['CBC','BMP','CMP','Blood culture','UA + culture (cath if <2yr)','RSV/Flu rapid','Respiratory viral panel','CRP','Procalcitonin','Blood gas (VBG/cap)','Lactate','Type and screen','CSF studies','CXR','Abdominal XR','Ultrasound (specify)'],
            teaching:'Minimize blood draws — every mL counts. Catheter urine for culture in non-toilet-trained.' },
        meds: { label:'Medications (WEIGHT-BASED)', type:'multi',
            options:['── DOCUMENT WEIGHT IN KG ──','Patient weight: ___ kg','── Respiratory ──','Albuterol neb 2.5mg Q4h + PRN','Albuterol continuous (severe)','Ipratropium 0.5mg Q6h','Dexamethasone 0.6mg/kg PO x1 (croup, max 16mg)','Prednisolone 1-2mg/kg/day (max 60mg)','Racemic epinephrine 0.5mL neb','O2 via NC/mask/HFNC to SpO2 >92%','── ID ──','Ceftriaxone 50mg/kg IV Q24h (max 2g)','Ampicillin 50mg/kg IV Q6h','Vancomycin 15mg/kg IV Q6h','Acyclovir 20mg/kg IV Q8h (neonatal HSV)','Amoxicillin 45mg/kg BID (high dose)','── Pain/Fever ──','Acetaminophen 15mg/kg Q4h PRN (max 75mg/kg/day)','Ibuprofen 10mg/kg Q6h PRN (>6mo, max 40mg/kg/day)','Morphine 0.1mg/kg IV Q4h PRN','── GI ──','Ondansetron 0.15mg/kg IV Q6h PRN (max 4mg)','Pedialyte 5mL Q5 min','── Emergency ──','Lorazepam 0.1mg/kg IV (seizure, max 4mg)','Midazolam 0.2mg/kg intranasal','Epinephrine 0.01mg/kg IM (anaphylaxis)'],
            teaching:'ALL peds meds are WEIGHT-BASED. Double-check doses. Never exceed adult max. 10x errors are most common and most dangerous.' },
        consults: { label:'Consults', type:'multi',
            options:['Pediatric surgery','Pediatric GI','Pediatric neurology','Pediatric cardiology','Child Life specialist','Social work','CPS (if NAT concern)','Respiratory therapy','PT/OT','Nutrition/lactation','Palliative care'],
            teaching:'Child Life for any significant procedure. Social work for ALL pediatric trauma (NAT screen).' },
        family: { label:'Family Communication', type:'multi',
            options:['Parents at bedside — updated','Parents contacted by phone','Guardianship verified','Interpreter needed (specify)','Teaching provided: diagnosis + plan','Discharge planning discussed','Safe sleep education (infants)'],
            teaching:'Family-centered care: parents are care team partners. Verify guardianship. Use teach-back.' },
        dvt: { label:'VTE Prophylaxis', type:'select',
            options:['Not indicated (ambulatory child)','SCDs (bedbound adolescent)','Enoxaparin 0.5mg/kg Q12h (high-risk adolescent)','Active mobilization'],
            teaching:'VTE ppx rarely needed in young children. Consider post-pubertal adolescents with risk factors.' }
    }
},

em: { name:'ED Disposition Orders', icon:'🚑', useDefault:true }
};

// CASE-SPECIFIC EXPECTED ORDERS
var EXPECTED = {
'nstemi': { im: {
    critical:['NPO','Continuous telemetry','Troponin Q3h','Aspirin','Heparin drip','Statin','Metoprolol','DVT prophylaxis'],
    important:['Cardiology','BMP in AM','Lipid panel','A1c','Code status','Nitroglycerin PRN'],
    bonus:['BNP','Echocardiogram'],
    unsafe:['Regular diet','No telemetry']
}},
'dka': { im: {
    critical:['NPO','Insulin drip','fluid resuscitation','BMP Q2h','Potassium','telemetry','glucose'],
    important:['Strict I&Os','VBG','Phosphorus','D5 when glucose <250','Endocrine','DVT prophylaxis'],
    bonus:['A1c','Diabetes education','subQ insulin transition'],
    unsafe:['SubQ insulin only','No potassium monitoring']
}},
'copd': { im: {
    critical:['Prednisone 40mg','Albuterol','Azithromycin','O2 88-92%','DVT prophylaxis'],
    important:['Ipratropium','tiotropium','BMP','Sputum culture','Vitals Q4h'],
    bonus:['Procalcitonin','Pulmonology','Respiratory Therapy'],
    unsafe:['O2 100%','No steroid']
}},
'stemi': { im: {
    critical:['NPO','telemetry','Cardiology STAT','Aspirin','Heparin','Statin','cath lab'],
    important:['Troponin','BMP','Lipid','Code status','Echocardiogram','Beta-blocker'],
    bonus:['BNP','ACE inhibitor','Cardiac rehab'],
    unsafe:['Beta-blocker if acute HF','Delay cath lab']
}},
'pe': { im: {
    critical:['Anticoagulation','telemetry','Troponin','BNP','Type and screen'],
    important:['Echocardiogram','Vitals Q2h','duplex','CBC','BMP'],
    bonus:['Hypercoag workup','Pulmonology','sPESI'],
    unsafe:['No anticoagulation']
}},
'meningitis': { im: {
    critical:['Ceftriaxone','Vancomycin','Dexamethasone','Blood cultures','precautions'],
    important:['I&Os','Vitals Q2h','Neuro checks','Acyclovir','BMP','isolation'],
    bonus:['Neurology','Seizure precautions','Repeat LP'],
    unsafe:['Delay antibiotics','No dexamethasone']
}},
'gi-bleed': { im: {
    critical:['NPO','large-bore IV','Type and crossmatch','CBC Q6h','GI consult','PPI','fluid resuscitation'],
    important:['BMP','Coags','Vitals Q2h','I&Os','Foley','Hold anticoagulation'],
    bonus:['Octreotide','Lactate','Transfuse PRBCs'],
    unsafe:['Oral diet','Discharge without endoscopy']
}},
'chf': { im: {
    critical:['Cardiac diet','furosemide','telemetry','Daily weights','I&Os','BMP','BNP'],
    important:['Fluid restriction','Vitals Q4h','Echocardiogram','O2','ACE/ARB','DVT prophylaxis'],
    bonus:['Cardiology','TSH','Iron studies','Cardiac rehab'],
    unsafe:['IV fluids','NSAIDs']
}},
'stroke': {
    neuro: {
        critical:['NIHSS','NPO swallow','BP parameter','telemetry','Aspirin after tPA','Statin','CTA'],
        important:['Speech pathology','PT/OT','Echocardiogram','Carotid duplex','A1c','Lipid','DVT SCDs'],
        bonus:['MRI diffusion','Holter','Hypercoag workup'],
        unsafe:['Aspirin within 24h tPA','No swallow eval','Aggressive BP lowering']
    },
    im: {
        critical:['NIHSS','NPO swallow','BP protocol','telemetry','Aspirin after tPA','Statin'],
        important:['Neurology','Speech pathology','PT/OT','Echo','DVT'],
        bonus:['MRI','Vascular imaging'],
        unsafe:['Early aspirin with tPA','PO without swallow']
    }
},
'pancreatitis': { im: {
    critical:['NPO then advance','IV fluid','Pain management','Lipase','BMP'],
    important:['Vitals Q4h','I&Os','imaging','Nutrition','DVT prophylaxis'],
    bonus:['RUQ ultrasound','Triglycerides','MRCP','GI consult'],
    unsafe:['Delayed feeding','Meperidine']
}},
'urosepsis': { im: {
    critical:['Blood cultures before antibiotics','Broad-spectrum antibiotics','IV fluid','Lactate','UA culture','Vitals Q2h'],
    important:['BMP','CBC','CMP','I&Os','Foley','DVT','telemetry'],
    bonus:['Procalcitonin','CT abdomen','Urology','Narrow antibiotics'],
    unsafe:['Delay antibiotics','No fluids']
}},
'appendicitis': { surgery: {
    critical:['NPO','Type and screen','CBC BMP','consent','antibiotics','DVT SCDs','IV access'],
    important:['CT confirmed','Pain management','UA','pregnancy test','OR scheduling','Anesthesia'],
    bonus:['Antibiotics within 60 min','Site marking','Pre-op checklist'],
    unsafe:['Delay OR >12h','No antibiotics']
}},
'aaa': { surgery: {
    critical:['Type and crossmatch','large-bore IV','Vascular surgery STAT','NPO','CTA','telemetry','MTP'],
    important:['CBC BMP coags','Foley hourly UOP','Vitals Q15','consent','Anesthesia OR standby'],
    bonus:['Cardiology clearance','Beta-blocker','Permissive hypotension'],
    unsafe:['Delay imaging','No blood products']
}},
'apap-overdose': {
    psych: {
        critical:['1:1','Contraband search','Suicide precautions','C-SSRS','Safety plan','Acetaminophen level','LFTs coags'],
        important:['Salicylate','UDS','Blood alcohol','Lethal means','Social work','Prior records','Family contacted'],
        bonus:['PHQ-9','Capacity','Addiction medicine'],
        unsafe:['No 1:1','No safety plan','No lethal means counseling']
    },
    im: {
        critical:['NAC protocol','Acetaminophen level','LFTs coags BMP','Toxicology','telemetry'],
        important:['Serial LFTs','Salicylate','UDS','Psychiatry','1:1 sitter'],
        bonus:['GI consult','Transfer criteria'],
        unsafe:['No NAC','No acetaminophen level','Discharge without psych']
    }
},
'nms-case': { psych: {
    critical:['STOP offending agent','CPK','BMP','Dantrolene','Bromocriptine','IV hydration','telemetry'],
    important:['Serial CPK','Urine myoglobin','Cooling','Lorazepam','Renal function','Alternative antipsychotic'],
    bonus:['Neurology','ICU transfer','Urine alkalinization'],
    unsafe:['Continue antipsychotic','Restart same agent']
}},
'serotonin-syndrome-case': { psych: {
    critical:['STOP serotonergic agents','Cyproheptadine','Lorazepam','telemetry','Cooling'],
    important:['BMP CBC CMP','CPK','IV fluids','Medication reconciliation','Vitals Q1h'],
    bonus:['Toxicology','ICU','Washout period planning'],
    unsafe:['Continue SSRI','Chlorpromazine','Restraints without sedation']
}},
'eclampsia': { ob: {
    critical:['MgSO4 load','MgSO4 maintenance','Calcium gluconate bedside','BP control','Continuous EFM','Delivery planning','Type crossmatch','Labs CBC CMP LFTs LDH coags'],
    important:['I&Os','Foley','Magnesium levels','DTRs RR Q1h','NICU notification','Anesthesia','Betamethasone if <34wk'],
    bonus:['MFM','24h urine protein','Postpartum MgSO4'],
    unsafe:['No MgSO4','Delay delivery','Methylergonovine']
}},
'ectopic': { ob: {
    critical:['large-bore IV','Type crossmatch','CBC BMP','Surgical consent','OR STAT','IV fluid resuscitation','RhoGAM if Rh neg'],
    important:['Vitals Q15','Foley hourly UOP','betaHCG','TVUS','Pain management','Anesthesia'],
    bonus:['MTP standby','Grief counseling','Follow-up betaHCG'],
    unsafe:['Delay OR','Methotrexate for ruptured']
}}
};

// SCORING ENGINE
function scoreOrders(caseId, rotation, selectedOrders) {
    var expected = EXPECTED[caseId] && EXPECTED[caseId][rotation];
    if (!expected) {
        return { score:Math.min(100, Math.round((selectedOrders.length/8)*80+20)), critical:{total:0,hit:0,missed:[]}, important:{total:0,hit:0,missed:[]}, bonus:{total:0,hit:0}, unsafe:[], feedback:'Generic evaluation applied.', grade:selectedOrders.length>=6?'B':'C' };
    }
    var selectedText = selectedOrders.join(' ').toLowerCase();
    function checkMatch(kw) {
        kw = kw.toLowerCase();
        if (selectedText.indexOf(kw) >= 0) return true;
        var terms = kw.split(/[\s—,()\/]+/).filter(function(t){return t.length>3;});
        var hit = 0;
        terms.forEach(function(t){ if(selectedText.indexOf(t)>=0) hit++; });
        return hit >= Math.ceil(terms.length * 0.5);
    }
    var cH=0,cM=[]; (expected.critical||[]).forEach(function(o){ if(checkMatch(o)) cH++; else cM.push(o); });
    var iH=0,iM=[]; (expected.important||[]).forEach(function(o){ if(checkMatch(o)) iH++; else iM.push(o); });
    var bH=0; (expected.bonus||[]).forEach(function(o){ if(checkMatch(o)) bH++; });
    var uF=[]; (expected.unsafe||[]).forEach(function(o){ if(checkMatch(o)) uF.push(o); });
    var cT=(expected.critical||[]).length, iT=(expected.important||[]).length, bT=(expected.bonus||[]).length;
    var maxPts=cT*4+iT*2+bT, earnPts=Math.max(0, cH*4+iH*2+bH - uF.length*10);
    var score = maxPts>0 ? Math.round((earnPts/maxPts)*100) : 0;
    var grade = score>=90&&!uF.length?'A' : score>=80&&!uF.length?'B+' : score>=70?'B' : score>=60?'C+' : score>=50?'C' : 'Needs Improvement';
    var fb='';
    if(cM.length) fb+='⚠️ Critical missed: '+cM.join('; ')+'. ';
    if(uF.length) fb+='🚫 Unsafe: '+uF.join('; ')+'. ';
    if(cH===cT&&!uF.length) fb+='✅ All critical orders placed. ';
    if(iM.length&&iM.length<=3) fb+='💡 Consider: '+iM.join('; ')+'. ';
    if(bH) fb+='⭐ '+bH+' bonus orders. ';
    return { score:score, critical:{total:cT,hit:cH,missed:cM}, important:{total:iT,hit:iH,missed:iM}, bonus:{total:bT,hit:bH}, unsafe:uF, feedback:fb.trim(), grade:grade };
}

function renderOrderForm(rotation, caseId) {
    var t = TEMPLATES[rotation];
    if (!t || t.useDefault) return null;
    var h='<div class="rotation-orders" data-rotation="'+rotation+'" data-case="'+(caseId||'')+'">';
    h+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;"><span style="font-size:24px;">'+t.icon+'</span><div><div style="font-weight:700;font-size:16px;">'+t.name+'</div><div style="font-size:11px;color:var(--text-dim);">Select all appropriate orders. Critical omissions will be flagged.</div></div></div>';
    for(var k in t.categories){
        var c=t.categories[k];
        h+='<div class="order-group" style="margin-bottom:12px;"><div class="order-label" style="font-weight:600;font-size:13px;color:var(--brand);margin-bottom:6px;">'+c.label+'</div>';
        if(c.type==='select'){
            h+='<div class="order-checks">';
            c.options.forEach(function(o){ h+='<label class="order-check" onclick="this.classList.toggle(\'checked\')" style="display:block;padding:6px 10px;margin:2px 0;border-radius:6px;cursor:pointer;font-size:13px;"><input type="radio" name="'+k+'" value="'+o.replace(/"/g,'&quot;')+'" style="margin-right:8px;">'+o+'</label>'; });
            h+='</div>';
        } else {
            h+='<div class="order-checks" style="max-height:200px;overflow-y:auto;">';
            c.options.forEach(function(o){
                if(o.indexOf('──')===0){ h+='<div style="font-size:11px;font-weight:700;color:var(--text-dim);margin:8px 0 4px 4px;text-transform:uppercase;letter-spacing:0.5px;">'+o.replace(/──/g,'').trim()+'</div>'; return; }
                h+='<label class="order-check" onclick="this.classList.toggle(\'checked\')" style="display:block;padding:5px 10px;margin:1px 0;border-radius:6px;cursor:pointer;font-size:12px;"><input type="checkbox" name="'+k+'" value="'+o.replace(/"/g,'&quot;')+'" style="margin-right:8px;">'+o+'</label>';
            });
            h+='</div>';
        }
        if(c.teaching) h+='<div class="order-teaching" style="font-size:11px;color:var(--text-dim);margin-top:4px;padding:4px 8px;background:rgba(59,130,246,0.05);border-radius:4px;border-left:2px solid var(--brand);display:none;">💡 '+c.teaching+'</div>';
        h+='</div>';
    }
    h+='<div style="display:flex;gap:8px;margin-top:16px;"><button class="submit-orders" onclick="submitRotationOrders(\''+(caseId||'')+'\')" style="flex:1;">Submit Orders</button><button onclick="toggleOrderTeaching()" style="background:transparent;border:1px solid var(--border);color:var(--text-muted);padding:8px 12px;border-radius:8px;cursor:pointer;font-size:12px;">💡 Show Tips</button></div></div>';
    return h;
}

return {
    TEMPLATES:TEMPLATES, EXPECTED_ORDERS:EXPECTED,
    getTemplate:function(r){return TEMPLATES[r]||TEMPLATES['im'];},
    hasTemplate:function(r){return TEMPLATES[r]&&!TEMPLATES[r].useDefault;},
    renderOrderForm:renderOrderForm,
    scoreOrders:scoreOrders,
    getExpectedOrders:function(c,r){return (EXPECTED[c]&&EXPECTED[c][r])||null;}
};
})();
