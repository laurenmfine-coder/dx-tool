#!/usr/bin/env python3
"""Batch 30 — Part B: 7 cases.

Cases: pneumonia-on-copd-v2, pneumonia-on-copd, pneumonia-v2, pneumonia,
       pneumothorax, postconcussion-with-intracranial-hypertension, primary-brain-tumor
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "pneumonia-on-copd-v2": {
    "diagnosis": "Community-Acquired Pneumonia Superimposed on Severe COPD",
    "coachFinal": (
      "Diagnosis: community-acquired pneumonia (CAP) in a patient with severe chronic obstructive pulmonary disease — a common and high-risk combination. "
      "Key learning: "
      "(1) Patients with COPD are particularly vulnerable to pneumonia because of impaired mucociliary clearance, structural lung disease (bronchiectasis and bullae trap pathogens), frequent corticosteroid use, and common colonization with Pseudomonas, H. influenzae, and Moraxella. "
      "The distinction between a COPD exacerbation, CAP, and COPD exacerbation triggered by pneumonia is often blurred but important — pneumonia requires specific antibiotic selection, longer monitoring, and carries higher mortality. "
      "(2) Clinical features favoring pneumonia superimposed on COPD: new focal consolidation on imaging, elevated procalcitonin (not perfectly specific but helpful), higher fever, more pronounced leukocytosis, and productive cough with purulent sputum. "
      "Features of isolated COPD exacerbation: diffuse wheezing, hyperinflation, and often no infiltrate on chest X-ray (chest CT more sensitive for subtle pneumonia when clinically suspected). "
      "(3) Severity assessment guides admission and treatment. "
      "CURB-65: Confusion, Urea >7 mmol/L (BUN >19), RR >=30, BP systolic <90 or diastolic <=60, age >=65 — score >=2 indicates admission, >=3 ICU consideration. "
      "PSI (Pneumonia Severity Index) is more detailed. "
      "ATS/IDSA severe CAP criteria for ICU: 1 major (mechanical ventilation, septic shock) or 3 minor (RR >=30, PaO2/FiO2 <=250, multilobar infiltrates, confusion, BUN >=20, WBC <4, platelets <100, temp <36, hypotension requiring aggressive fluid). "
      "(4) Antibiotic selection. "
      "Outpatient CAP with comorbidities (COPD): amoxicillin-clavulanate OR cephalosporin (cefuroxime, cefpodoxime) PLUS a macrolide (azithromycin) OR doxycycline; OR respiratory fluoroquinolone (levofloxacin, moxifloxacin) monotherapy. "
      "Inpatient non-severe CAP: beta-lactam (ceftriaxone, ampicillin-sulbactam, or cefotaxime) plus macrolide; OR respiratory fluoroquinolone. "
      "Inpatient severe CAP (ICU): beta-lactam plus macrolide OR beta-lactam plus respiratory fluoroquinolone. "
      "COPD-specific considerations: expand coverage for Pseudomonas (piperacillin-tazobactam, cefepime, meropenem, or levofloxacin 750 mg) in severe COPD, frequent exacerbations, recent antibiotic use, hospitalization in last 90 days, chronic steroid use, or bronchiectasis. "
      "Add MRSA coverage (vancomycin or linezolid) in risk factors: severe illness, IVDU, recent influenza, cavitary pneumonia, known colonization. "
      "Duration 5-7 days typically, extended for complicated or slow-responding disease. "
      "(5) Adjunctive management. "
      "Respiratory support: supplemental oxygen to target SpO2 88-92% (COPD patients have chronic CO2 retention — aggressive oxygen can worsen hypercapnia), bronchodilators (albuterol + ipratropium nebulized), and corticosteroids (prednisone 40 mg daily x 5 days or equivalent) — evidence of benefit in COPD exacerbation, with mixed data in pneumonia itself. "
      "NIV (BiPAP) for hypercapnic respiratory failure. "
      "Intubation for persistent hypercapnia, exhaustion, inability to protect airway. "
      "VTE prophylaxis, early mobilization, aspiration precautions, and smoking cessation counseling. "
      "Classic pitfalls: (a) over-oxygenating COPD patient and precipitating CO2 narcosis and respiratory failure — target SpO2 88-92. "
      "(b) Narrowing too quickly before cultures return or treatment failure is identified — CAP in COPD often has resistant or unusual organisms. "
      "(c) Missing concurrent influenza or SARS-CoV-2 — test in appropriate seasons or clinical context. "
      "(d) Failing to use pneumonia as a teachable moment for COPD management optimization: inhaler technique, pulmonary rehab, vaccination (pneumococcal, influenza, RSV, COVID), smoking cessation."
    )
  },

  "pneumonia-on-copd": {
    "diagnosis": "Community-Acquired Pneumonia Superimposed on COPD GOLD Stage IV with Acute Hypercapnic Respiratory Failure and Sepsis",
    "coachFinal": (
      "Diagnosis: community-acquired pneumonia superimposed on very severe COPD (GOLD stage IV) with acute hypercapnic respiratory failure and sepsis. "
      "Key learning: "
      "(1) This is the most severe end of the pneumonia-plus-COPD spectrum: a patient with baseline FEV1 <30% predicted, limited respiratory reserve, evidence of sepsis, and decompensated hypercapnic respiratory failure. "
      "Mortality is high (20-40%), and the care bundle of early antibiotics, respiratory support, sepsis resuscitation, and careful ventilatory management is critical. "
      "(2) Sepsis recognition and management (Surviving Sepsis Campaign). "
      "Initial hour bundle: obtain blood cultures x2 BEFORE antibiotics when feasible, measure lactate, administer broad-spectrum antibiotics within 1 hour, begin 30 mL/kg IV crystalloid within the first 3 hours for hypotension or lactate >=4, start vasopressors (norepinephrine first) if still hypotensive after fluids. "
      "Source control: CXR and sputum culture for pneumonia; expand imaging if alternative source suspected. "
      "Balance volume resuscitation against worsening oxygenation — use dynamic measures of volume responsiveness (pulse pressure variation, bedside IVC ultrasound, passive leg raise) rather than blind fluid bolus in patients with severe COPD. "
      "(3) Respiratory management. "
      "Target SpO2 88-92% (avoid overoxygenation in chronic CO2 retainers). "
      "NIV (BiPAP) is first-line for acute hypercapnic respiratory failure in COPD — reduces intubation, mortality, and length of stay. Contraindications: altered mental status preventing cooperation, inability to protect airway, hemodynamic instability, copious secretions, facial trauma. "
      "If NIV fails (not improving or worsening after 1-2 hours, worsening pH, tiring patient), intubate and ventilate. "
      "Ventilator strategy: low tidal volumes (6 mL/kg ideal body weight), adequate expiratory time (prolonged I:E ratio 1:4 or more), PEEP matched to intrinsic PEEP (auto-PEEP), permissive hypercapnia — accept higher PaCO2 to allow adequate expiration. "
      "Avoid beta-agonist excess and monitor for arrhythmia and hypokalemia. "
      "(4) Antibiotics — empiric coverage including Pseudomonas and MRSA is appropriate in very severe COPD with sepsis: piperacillin-tazobactam or cefepime PLUS azithromycin (or respiratory fluoroquinolone) PLUS vancomycin (for MRSA). "
      "De-escalate based on cultures. "
      "Add systemic corticosteroids (prednisone 40 mg PO daily or equivalent IV) for COPD exacerbation component. "
      "Consider and treat viral co-infection (influenza, RSV, SARS-CoV-2) with season-appropriate testing and antivirals. "
      "(5) Goals of care. "
      "GOLD stage IV COPD carries poor prognosis — 5-year survival ~30-50% depending on comorbidities. "
      "Every hospital admission is an opportunity to discuss advance care planning, palliative care consultation, and goals of care — especially if the patient is on home oxygen, has frequent hospitalizations, significant weight loss, BMI <21, or severe functional limitation. "
      "Preferences for intubation, CPR, and end-of-life priorities should be explored before deterioration. "
      "Classic pitfalls: (a) intubating early in COPD exacerbation before adequate trial of NIV — NIV is first-line unless contraindicated. "
      "(b) High tidal volumes in a COPD patient on the ventilator — causes dynamic hyperinflation, breath stacking, hypotension, and barotrauma; dial down tidal volume and extend expiratory time. "
      "(c) Withholding steroids because of pneumonia — COPD exacerbation with or without pneumonia benefits from systemic steroids. "
      "(d) Not discussing goals of care with patients and families in advanced COPD — 'surprise question' (would you be surprised if the patient died in the next year?) helps identify appropriate timing. "
      "(e) Forgetting to discharge with pulmonary rehab referral, inhaler technique reinforcement, smoking cessation plan, vaccination update, and close follow-up to prevent readmission."
    )
  },

  "pneumonia-v2": {
    "diagnosis": "Community-Acquired Pneumonia",
    "coachFinal": (
      "Diagnosis: community-acquired pneumonia (CAP) — a common diagnosis with evolving guidelines and a wide severity spectrum. "
      "Key learning: "
      "(1) Diagnosis of CAP requires clinical features (cough, fever, sputum production, pleuritic chest pain, dyspnea) plus radiographic evidence of infiltrate. "
      "Chest X-ray is the standard initial imaging; chest CT is more sensitive for subtle disease and may change management in equivocal cases. "
      "Atypical presentations are common in the elderly (confusion, falls, anorexia, generalized weakness — sometimes without fever or cough) and immunocompromised patients. "
      "(2) Microbiology and empiric coverage. "
      "Typical pathogens: Streptococcus pneumoniae (still most common), Haemophilus influenzae, Moraxella catarrhalis, Staphylococcus aureus (including MRSA in risk settings). "
      "Atypical pathogens: Mycoplasma pneumoniae, Chlamydia pneumoniae, Legionella. "
      "Viral: influenza, RSV, SARS-CoV-2, other respiratory viruses. "
      "In most CAP, specific microbiologic diagnosis is not obtained — empiric therapy is based on severity and risk factors. "
      "Sputum culture, blood cultures, urine antigen (S. pneumoniae, Legionella), respiratory viral panel, and procalcitonin are useful in severe cases, atypical presentations, or when failing therapy. "
      "(3) Severity assessment. "
      "CURB-65 (clinical score, 0-5): admission generally recommended at >=2, ICU consideration at >=3. "
      "PSI (Pneumonia Severity Index): more granular 5-class stratification, commonly used in emergency settings. "
      "ATS/IDSA severe CAP criteria trigger ICU admission (at least 1 major or 3 minor criteria — see earlier case). "
      "Biomarkers: lactate (sepsis severity), procalcitonin (bacterial vs viral guidance, antibiotic de-escalation). "
      "(4) Empiric antibiotic selection (2019 ATS/IDSA guidelines). "
      "Outpatient, healthy, no comorbidities: amoxicillin OR doxycycline OR macrolide (if local pneumococcal resistance <25%). "
      "Outpatient with comorbidities (chronic heart/lung/liver/renal disease, diabetes, alcohol use disorder, malignancy, asplenia): beta-lactam (amoxicillin-clavulanate or cephalosporin) plus macrolide or doxycycline; OR respiratory fluoroquinolone monotherapy. "
      "Inpatient non-severe: beta-lactam plus macrolide; OR respiratory fluoroquinolone. "
      "Inpatient severe: beta-lactam plus macrolide; OR beta-lactam plus respiratory fluoroquinolone. "
      "Add empiric MRSA (vancomycin/linezolid) and Pseudomonas (piperacillin-tazobactam, cefepime, meropenem) coverage based on risk factors: prior MRSA or Pseudomonas respiratory isolate (strongest predictor), recent hospitalization with parenteral antibiotics in last 90 days. "
      "Duration typically 5-7 days; guided by clinical response and procalcitonin trends; extend for complicated pneumonia (empyema, abscess, bacteremia, specific organisms like Legionella, MRSA, Pseudomonas). "
      "(5) Prevention is high-yield. "
      "Vaccination: PCV20 or PCV15+PPSV23 sequence for older adults and selected younger adults with risk conditions; annual influenza vaccination; RSV vaccine for adults over 60; SARS-CoV-2 vaccines and boosters per current guidance. "
      "Smoking cessation. "
      "Oral hygiene (reduces aspiration pneumonia). "
      "Classic pitfalls: (a) 'healthcare-associated pneumonia' (HCAP) is no longer a category in 2019 guidelines — empiric broad coverage based solely on nursing home residence has been abandoned; instead individualize based on specific MRSA and Pseudomonas risk factors. "
      "(b) Missing alternative diagnoses that mimic pneumonia: PE, heart failure, lung cancer, aspiration, COVID-19, tuberculosis, fungal pneumonia in immunocompromised. "
      "(c) Over-prescribing antibiotics for viral illnesses — procalcitonin and viral testing help when available. "
      "(d) Not following up CXR at 6-8 weeks post-treatment in older adults or smokers — persistent infiltrate may unmask underlying lung cancer or non-infectious cause."
    )
  },

  "pneumonia": {
    "diagnosis": "Community-Acquired Pneumonia (RLL Lobar Consolidation, Likely S. pneumoniae) in Asthmatic Patient with Penicillin Allergy",
    "coachFinal": (
      "Diagnosis: community-acquired pneumonia with right lower lobe lobar consolidation, likely Streptococcus pneumoniae, in an asthmatic patient with reported penicillin allergy. "
      "Key learning: "
      "(1) Lobar pneumonia is the classic presentation of S. pneumoniae — fever, productive cough with rust-colored sputum, pleuritic chest pain, tachypnea, and consolidation on imaging. "
      "Other typical causes can produce lobar patterns (Klebsiella, Haemophilus), while atypical organisms (Mycoplasma, Chlamydia, viral) typically cause interstitial or patchy infiltrates. "
      "(2) Evaluating a reported penicillin allergy is a critical clinical skill. "
      "About 10% of patients report penicillin allergy, but fewer than 1% have true IgE-mediated reactions on formal testing. "
      "Detailed allergy history: (a) What drug and exact name? (b) What happened (rash, hives, anaphylaxis, GI symptoms)? (c) How soon after taking the drug? (d) How long ago? (e) How was it treated? (f) Has the patient tolerated other beta-lactams since? "
      "Low-risk reactions (family history only, childhood 'rash' without specifics, isolated GI symptoms, reaction >10 years ago) often allow safe cephalosporin use (cross-reactivity <2% for most cephalosporins). "
      "High-risk reactions (anaphylaxis, bronchospasm, angioedema, Stevens-Johnson, DRESS, anaphylactoid features) require allergy referral for testing and desensitization. "
      "Amoxicillin-EBV rash is NOT a true allergy and should be documented as such. "
      "(3) Antibiotic selection for CAP with penicillin allergy. "
      "Low-risk allergy (non-anaphylactic): cephalosporin (cefuroxime, ceftriaxone) is safe; combined with macrolide (azithromycin) or doxycycline for atypical coverage. "
      "High-risk allergy (anaphylaxis, severe reactions): respiratory fluoroquinolone (levofloxacin, moxifloxacin) monotherapy; or combination of doxycycline plus aztreonam (beta-lactam with no cross-reactivity) in severe cases; consult allergy for testing and desensitization when possible. "
      "Avoid fluoroquinolones when alternatives exist (tendinopathy, QT prolongation, C. difficile risk, peripheral neuropathy, aortic aneurysm risk) but they remain an important option in significant allergy. "
      "(4) Asthma-specific considerations. "
      "Avoid triggering asthma: use bronchodilators prophylactically if needed for coughing and deep breathing; monitor for beta-lactam-induced bronchospasm in hypersensitive individuals. "
      "Macrolides (azithromycin) have modest anti-inflammatory effects and are often well tolerated in asthma. "
      "Steroids may be added if asthma is exacerbated — helps both asthma and consolidation-associated airway inflammation. "
      "(5) Management. "
      "Outpatient or inpatient per severity (CURB-65, PSI). "
      "Oxygen therapy targeted to SpO2 >=94% (or 88-92% if coexisting COPD, not typical for isolated asthma). "
      "Hydration, antipyretics, incentive spirometry, and early mobilization to reduce atelectasis. "
      "Follow-up CXR at 6-8 weeks in older adults and smokers to rule out underlying malignancy. "
      "Update vaccinations (pneumococcal, influenza, RSV, SARS-CoV-2) during admission or at follow-up. "
      "Classic pitfalls: (a) using a fluoroquinolone reflexively for any 'penicillin allergy' — many patients can safely receive cephalosporins and avoid FQ toxicities. "
      "(b) Not investigating the allergy history in detail — penicillin allergy testing is widely available and de-labeling improves future care. "
      "(c) Missing atypical pathogens (Legionella) in severe community-acquired pneumonia — add urine Legionella antigen and use a macrolide or FQ for coverage. "
      "(d) Forgetting asthma control optimization at discharge: inhaler technique review, written action plan, trigger identification, and follow-up scheduling."
    )
  },

  "pneumothorax": {
    "diagnosis": "Primary Spontaneous Pneumothorax",
    "coachFinal": (
      "Diagnosis: primary spontaneous pneumothorax (PSP). "
      "Key learning: "
      "(1) Pneumothorax classification: "
      "(a) Primary spontaneous (PSP) — no underlying lung disease, typically tall thin young men 18-40 (6:1 male predominance), often with subpleural blebs/bullae rupture; smoking increases risk 9-22x. "
      "(b) Secondary spontaneous (SSP) — underlying lung disease (COPD, cystic fibrosis, Pneumocystis pneumonia, TB, cancer, LAM, Marfan) — more dangerous because the underlying lung has poor reserve. "
      "(c) Traumatic — penetrating or blunt chest trauma. "
      "(d) Iatrogenic — central line, transbronchial biopsy, transthoracic needle biopsy, CPR, mechanical ventilation. "
      "(e) Tension pneumothorax — pressurized air accumulation causing mediastinal shift and hemodynamic collapse — clinical diagnosis requiring IMMEDIATE needle decompression, then tube thoracostomy. "
      "(2) Clinical presentation. "
      "Sudden-onset unilateral pleuritic chest pain and dyspnea; in small PSP often surprisingly mild — patients may present hours later. "
      "Physical exam: decreased breath sounds on the affected side, hyperresonance to percussion, decreased tactile fremitus. "
      "Tension pneumothorax: tracheal deviation away from affected side, jugular venous distension, hemodynamic instability, profound respiratory distress. "
      "(3) Diagnosis. "
      "Upright PA chest X-ray: visceral pleural line with absence of lung markings peripheral to it. "
      "CT chest: highest sensitivity, identifies small pneumothoraces, characterizes underlying lung disease, and visualizes bullae. "
      "Bedside ultrasound: absence of lung sliding is highly sensitive for pneumothorax, especially in unstable patients; the 'lung point' confirms the transition zone. "
      "Measurement of size (British Thoracic Society 2 cm from chest wall at hilum level, or apex-to-cupula distance) guides management. "
      "(4) Management by size and clinical status. "
      "Small PSP (<2 cm, minimal symptoms): observation with oxygen (increases nitrogen gradient, speeds reabsorption), serial CXR, outpatient management in selected reliable patients with follow-up in 24-48 hours. "
      "Moderate-large PSP (>=2 cm or significant symptoms): simple aspiration (catheter insertion and manual aspiration) OR small-bore chest tube (pigtail 8-14 Fr) — modern guidelines favor these less invasive approaches over traditional 24-32 Fr thoracostomy for PSP. "
      "Tension pneumothorax: IMMEDIATE needle decompression (14-16 gauge angiocath, 2nd intercostal space midclavicular line OR 4th-5th ICS anterior axillary line in larger patients) then definitive tube thoracostomy. "
      "Secondary spontaneous pneumothorax: more aggressive management — tube thoracostomy for most cases, longer observation, and lower threshold for surgical intervention. "
      "Persistent air leak >3-5 days or recurrent pneumothorax: VATS pleurodesis (mechanical abrasion or talc) and bullectomy. "
      "(5) Discharge counseling. "
      "Avoid air travel until fully resolved and for 1-2 weeks after resolution (expansion of residual air at altitude). "
      "No scuba diving ever after PSP (absolute contraindication). "
      "Smoking cessation strongly emphasized — reduces recurrence 50-70%. "
      "Recurrence rate 20-50% after first PSP and higher after each subsequent episode; after second recurrence, definitive surgical management (VATS with pleurodesis and bullectomy) is standard. "
      "Return precautions: increasing dyspnea, recurrent chest pain, hemodynamic instability. "
      "Classic pitfalls: (a) missing tension pneumothorax and waiting for CXR — clinical diagnosis warranting immediate decompression. "
      "(b) Inserting too large a chest tube for simple PSP — pigtail catheters are effective and less traumatic. "
      "(c) Failing to identify catamenial pneumothorax (recurrent around menses, endometriosis of diaphragm) in women of reproductive age — consider thoracic endometriosis. "
      "(d) Attributing chest pain in a tall thin young man to musculoskeletal cause without imaging — low threshold for CXR or ultrasound. "
      "(e) Forgetting to counsel about occupational risks (pilots, divers, astronauts) and recurrence prevention."
    )
  },

  "postconcussion-with-intracranial-hypertension": {
    "diagnosis": "Post-Concussion Syndrome with Intracranial Hypertension",
    "coachFinal": (
      "Diagnosis: post-concussion syndrome with intracranial hypertension. "
      "Key learning: "
      "(1) Concussion (mild traumatic brain injury, mTBI) is a biomechanically induced brain injury manifesting as transient alteration in mental status — confusion, amnesia, brief loss of consciousness (not required), somatic symptoms (headache, dizziness, nausea), emotional (irritability, sadness), cognitive (slowed thinking, difficulty concentrating), and sleep (insomnia or hypersomnia) changes. "
      "GCS 13-15 and normal structural imaging define mTBI by most criteria. "
      "(2) Initial management uses decision rules (Canadian CT Head Rule, New Orleans Criteria) to identify patients who need imaging. "
      "Red flags for structural injury and deterioration: GCS decline, focal neurologic deficit, severe or worsening headache, repeated vomiting, seizure, skull fracture signs (raccoon eyes, Battle sign, CSF rhinorrhea/otorrhea, hemotympanum), coagulopathy or anticoagulation use, age >65, high-risk mechanism (high-speed MVC, fall >1 m or 5 stairs, pedestrian struck). "
      "Non-contrast head CT is the standard initial study. "
      "MRI for subacute or persistent symptoms, suspicion of diffuse axonal injury, or when CT is normal but symptoms persist. "
      "(3) Post-concussion syndrome (PCS) is defined by persistent symptoms >=4 weeks after the injury. "
      "Symptoms include persistent headache (often migraine-like), cognitive problems (concentration, memory, slowed processing), mood changes (depression, anxiety, irritability), sleep disturbance, fatigue, dizziness, and photophobia/phonophobia. "
      "About 10-25% of mTBI patients develop PCS; risk factors include prior concussion, female sex, history of migraine, psychiatric comorbidity, and more severe initial injury. "
      "(4) Management of PCS is multidisciplinary: "
      "Cognitive rest initially (24-48 hours) then gradual return to cognitive and physical activity — prolonged rest delays recovery. "
      "Headache management: acetaminophen initially; NSAIDs in moderation; avoid overuse which causes medication overuse headache. "
      "Preventive migraine therapy (amitriptyline, topiramate, beta-blockers) for persistent headache. "
      "Vestibular and oculomotor rehabilitation for dizziness and visual symptoms. "
      "Cognitive behavioral therapy for mood and anxiety symptoms. "
      "Sleep hygiene and treatment of sleep disorders. "
      "Gradual return-to-play/return-to-learn protocols using stepwise progression — no same-day return to play, and each step requires symptom-free status for 24 hours before advancing. "
      "Referral to specialized concussion clinic for refractory or complex cases. "
      "(5) Intracranial hypertension in post-concussion syndrome is uncommon and concerning — may indicate evolving structural injury (chronic subdural hematoma, cerebral edema), venous sinus thrombosis, or idiopathic intracranial hypertension triggered by the injury. "
      "Workup: MRI brain with venography, LP with opening pressure (after imaging rules out mass effect), ophthalmologic exam for papilledema, and evaluation for contributing factors. "
      "Treatment: acetazolamide or topiramate for IIH; anticoagulation for venous sinus thrombosis; surgical management (drainage, shunt) for progressive hydrocephalus or mass lesion. "
      "Classic pitfalls: (a) clearing an athlete to return to play before complete symptom resolution — risk of second impact syndrome (rare but often fatal diffuse cerebral edema). "
      "(b) Excessive prolonged rest — counterproductive; gradual resumption of activity speeds recovery. "
      "(c) Missing chronic subdural hematoma in older adults on anticoagulation with delayed neurologic changes after head trauma — low threshold for imaging days to weeks after injury. "
      "(d) Attributing PCS symptoms to 'malingering' or psychiatric illness — organic basis is real, and dismissive approach worsens outcomes. "
      "(e) Forgetting CTE (chronic traumatic encephalopathy) counseling in athletes with multiple concussions — cumulative risk of long-term neurodegeneration, evolving evidence base."
    )
  },

  "primary-brain-tumor": {
    "diagnosis": "Glioblastoma (WHO Grade IV) with New-Onset Seizure and Early Uncal Herniation",
    "coachFinal": (
      "Diagnosis: glioblastoma multiforme (GBM, WHO grade IV astrocytoma) with new-onset seizure and early uncal herniation. "
      "Key learning: "
      "(1) GBM is the most common primary malignant brain tumor in adults, comprising about 15% of all primary CNS tumors and 50-60% of gliomas. "
      "Median age at diagnosis is 64; incidence increases with age. "
      "2021 WHO classification integrates histology and molecular features: GBM, IDH-wildtype is reserved for astrocytic tumors without IDH mutation; IDH-mutant tumors are now called 'astrocytoma, IDH-mutant' and have better prognosis. "
      "MGMT promoter methylation status predicts response to temozolomide (methylated = better response). "
      "(2) Presentation. "
      "Common symptoms: subacute or progressive neurologic deficits (hemiparesis, aphasia, visual field defects, cognitive or personality change), headache (often worse in morning from overnight recumbent increase in ICP), new-onset seizure, and signs of increased ICP (papilledema, vomiting, decreased consciousness). "
      "Herniation syndromes are late and catastrophic: uncal herniation (ipsilateral CN III palsy with blown pupil, contralateral hemiparesis), central herniation (progressive brainstem compression), tonsillar herniation (respiratory arrest). "
      "(3) Initial evaluation. "
      "MRI brain with and without contrast: heterogeneously enhancing mass with central necrosis, surrounding vasogenic edema, mass effect, often crossing the corpus callosum ('butterfly glioma'). "
      "Stereotactic or open biopsy for tissue diagnosis — histology shows pleomorphic astrocytic cells, vascular proliferation, and pseudopalisading necrosis. "
      "Molecular profiling: IDH status (IDH-wildtype more aggressive), MGMT methylation (predicts temozolomide response), EGFR amplification, TERT promoter mutation. "
      "(4) Management of increased ICP and herniation (acute). "
      "Elevate head of bed 30 degrees, ensure euthermia, optimize ventilation (avoid hypoxia and hypercarbia, target normocapnia). "
      "Osmotic therapy: mannitol 1 g/kg IV or hypertonic saline (3% saline 250 mL bolus or 23.4% 30 mL bolus) for acute herniation. "
      "DEXAMETHASONE 10 mg IV loading dose, then 4 mg q6h — highly effective for peritumoral vasogenic edema from tumor; continue during workup and treatment. "
      "Neurosurgical consultation urgent — decompressive craniectomy or tumor resection may be needed. "
      "Seizure management: benzodiazepines for active seizure, then loading dose of levetiracetam (first-line in brain tumor because fewer drug interactions than phenytoin); continue chronic anticonvulsant prophylaxis is controversial — usually only after a seizure has occurred. "
      "(5) Definitive therapy and prognosis. "
      "Standard Stupp protocol: maximal safe surgical resection (gross total resection when feasible — 5-ALA fluorescence guidance improves extent of resection; awake mapping for eloquent areas), followed by concurrent radiation (60 Gy in 30 fractions) plus temozolomide, then adjuvant temozolomide monthly x 6 cycles. "
      "Tumor-treating fields (Optune) added for MGMT-methylated or after initial therapy has improved outcomes. "
      "Clinical trials for novel agents are encouraged given limited options. "
      "Recurrence is inevitable — options include bevacizumab, re-resection, re-irradiation, and clinical trials. "
      "Median survival: IDH-wildtype GBM 12-15 months; IDH-mutant astrocytoma grade 4 better. "
      "Palliative care involvement early improves quality of life. "
      "Classic pitfalls: (a) missing early herniation signs — always check pupils and track neurologic exam closely in any patient with increased ICP; pupillary asymmetry is an emergency. "
      "(b) Not giving dexamethasone promptly — transforms symptoms within hours. "
      "(c) Under-emphasizing goals-of-care discussion — GBM has poor prognosis, and early honest conversations about expected trajectory, treatment burden, and preferences improve care. "
      "(d) Starting phenytoin in a brain tumor patient — enzyme induction interferes with chemotherapy metabolism; levetiracetam is preferred. "
      "(e) Forgetting clinical trial consideration and multidisciplinary tumor board review — offers access to novel therapies and expert management."
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
    print(f'\nBatch 30B: {done}/{len(ENRICHMENTS)} enriched')
