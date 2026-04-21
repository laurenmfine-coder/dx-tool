#!/usr/bin/env python3
"""Batch 26 (handoff Section 3.2 'Batch 23') — Part A: 9 cases.

Cases: crswnp-biologics, crswnp-dupilumab, digeorge-22q11, ectopic-pregnancy-workup,
       febrile-neutropenia, heart-failure-hfpef, hip-dislocation, hypercalcemia,
       hypereosinophilic-syndrome
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "crswnp-biologics": {
    "diagnosis": "Severe CRSwNP with AERD (Samter's Triad) — Biologic Therapy Decision",
    "coachFinal": (
      "Diagnosis: severe CRSwNP with AERD (aspirin-exacerbated respiratory disease, Samter's Triad). "
      "Key learning: "
      "(1) Samter's Triad is the combination of chronic rhinosinusitis with nasal polyps, asthma, and NSAID hypersensitivity. "
      "It represents a COX-1-mediated eicosanoid dysregulation: inhibition of COX-1 shunts arachidonic acid toward cysteinyl leukotrienes, triggering nasal and bronchial inflammation. "
      "Classic presentation is a middle-aged adult with refractory polyposis, anosmia, and asthma who reacts to aspirin or NSAIDs within 30-90 minutes. "
      "(2) Diagnosis is clinical (history of reproducible NSAID reaction plus polyps plus asthma); confirmation can be done with graded aspirin challenge in a monitored setting when the diagnosis is uncertain. "
      "CT sinus typically shows pansinus opacification and polypoid mucosal thickening; endoscopy reveals grade 2-3 polyps. "
      "(3) Biologic selection for CRSwNP is now evidence-based. Dupilumab (anti-IL-4Ra, blocks type 2 inflammation) has the strongest data for CRSwNP with asthma and is first line for polyp reduction, asthma control, and smell recovery (SINUS-24/52 trials). "
      "Omalizumab (anti-IgE) is reasonable when allergic asthma dominates. Mepolizumab and benralizumab (anti-IL-5 axis) are options when eosinophilia is the dominant driver but are less potent for polyps than dupilumab. "
      "(4) Aspirin desensitization remains a powerful option in AERD: after desensitization, daily aspirin (typically 325-650 mg BID) suppresses leukotriene-driven inflammation, reduces polyp recurrence, and decreases systemic steroid need. "
      "It requires commitment (daily therapy indefinitely, cannot be interrupted), adequate asthma control before initiation, and access to a supervised protocol. "
      "Dupilumab and aspirin desensitization can be complementary; the choice depends on asthma severity, cost, tolerance, and patient preference. "
      "(5) Classic pitfall: treating isolated rhinosinusitis with repeated antibiotic courses without recognizing the unified airway. "
      "Any patient with recurrent polyps should be asked explicitly about NSAID reactions; many patients have simply avoided NSAIDs for years without a formal diagnosis. "
      "Counsel all AERD patients to avoid all COX-1 inhibitors (aspirin, ibuprofen, naproxen, ketorolac) and to use acetaminophen or selective COX-2 inhibitors (celecoxib) when analgesia is needed. "
      "Anosmia recovery is often the most meaningful patient-centered outcome — track it formally with a smell identification test at baseline and follow-up."
    )
  },

  "crswnp-dupilumab": {
    "diagnosis": "CRSwNP with AERD — Dupilumab Initiation and Aspirin Desensitization",
    "coachFinal": (
      "Diagnosis: severe CRSwNP with AERD, post-FESS polyp recurrence, initiating dupilumab with planned aspirin desensitization. "
      "Key learning: "
      "(1) Polyp recurrence after FESS is common in AERD — up to 90% recur within 5 years without disease-modifying therapy. "
      "Surgery clears the mechanical obstruction but does not address the underlying type 2 inflammation, which is why a medical strategy is essential. "
      "The modern treatment paradigm is: topical intranasal corticosteroids (first line), short courses of oral corticosteroids for acute flares, then escalation to biologics and/or aspirin desensitization for steroid-dependent or recurrent disease. "
      "(2) Dupilumab mechanism: monoclonal antibody against IL-4Ra, blocking signaling from both IL-4 and IL-13. "
      "It addresses the core type 2 inflammatory axis driving polyp formation, mucus hypersecretion, and goblet cell hyperplasia. "
      "SINUS-24 and SINUS-52 trials demonstrated significant reductions in nasal polyp score, nasal congestion score, and Lund-Mackay CT score, with measurable smell recovery within weeks. "
      "Dosing for CRSwNP is 300 mg SQ every 2 weeks. "
      "(3) Safety considerations: dupilumab can cause transient eosinophilia (usually clinically insignificant but monitor), conjunctivitis (counsel patients; treat with lubricating drops or topical therapy), and rare joint symptoms. "
      "It is not associated with immunosuppression, infection risk, or malignancy in long-term data to date. "
      "(4) Aspirin desensitization (ASD) offers disease modification beyond symptom control. "
      "The protocol typically escalates doses (e.g., 40 mg to 81 to 162 to 325 mg) over 1-2 days under continuous monitoring with rescue medications ready. "
      "Maintenance dose is usually 325-650 mg BID, taken indefinitely — any interruption over 48 hours requires re-desensitization. "
      "Combining dupilumab with ASD is increasingly common and well tolerated; some centers initiate dupilumab first to optimize airway status, then proceed to ASD. "
      "(5) Pitfall: underestimating the quality-of-life impact of anosmia. "
      "For many AERD patients, smell loss is more distressing than nasal obstruction — they cannot smell food, their children, or smoke (a safety concern). "
      "Counsel patients that smell recovery with dupilumab is real but variable (30-60% regain meaningful olfaction within 6 months), and document baseline and follow-up smell testing (UPSIT, Sniffin' Sticks). "
      "Finally: united airway disease means asthma control and rhinitis control rise and fall together — optimize both, always."
    )
  },

  "digeorge-22q11": {
    "diagnosis": "DiGeorge Syndrome (22q11.2 Deletion Syndrome) — Neonatal Presentation",
    "coachFinal": (
      "Diagnosis: DiGeorge syndrome (22q11.2 deletion) presenting with the classic triad of conotruncal cardiac defect (truncus arteriosus), hypocalcemia, and palate anomaly. "
      "Key learning: "
      "(1) The 22q11.2 deletion syndrome spectrum includes DiGeorge syndrome, velocardiofacial syndrome, and conotruncal anomaly face syndrome — all caused by the same 1.5-3 Mb deletion on chromosome 22. "
      "The mnemonic CATCH-22 captures the phenotype: Cardiac anomalies (conotruncal — truncus arteriosus, TOF, interrupted aortic arch type B, VSD), Abnormal facies (micrognathia, low-set ears, hypertelorism), Thymic hypoplasia or aplasia (T-cell deficiency), Cleft palate (especially submucous), Hypocalcemia (parathyroid hypoplasia), 22q11.2 deletion. "
      "(2) Diagnostic workup: confirmation is by chromosomal microarray or FISH for 22q11.2. "
      "In any neonate with a conotruncal heart defect plus hypocalcemia or palate anomaly, this deletion should be assumed until proven otherwise. "
      "Additional evaluation includes echo, calcium and PTH, T-cell subsets (CD3, CD4, CD8, naive CD4 via CD45RA), TREC analysis (often flagged on newborn screen in complete DiGeorge), immunoglobulin levels, and mitogen response. "
      "(3) Immunologic spectrum: partial DiGeorge (majority of cases) has residual thymic tissue and only modest T-cell lymphopenia that typically improves over the first year. "
      "Complete DiGeorge (<1%) has athymia, profound T-cell deficiency, and is a pediatric emergency mimicking SCID — requires thymus transplantation or consideration of hematopoietic stem cell transplant. "
      "(4) Management pearls: LIVE VACCINES (MMR, varicella, rotavirus, BCG) are CONTRAINDICATED until T-cell function is documented adequate (CD4 >500, normal mitogen response, and usually age >12 months with reassuring subsets). "
      "All blood products must be irradiated and CMV-negative to prevent transfusion-associated GVHD and CMV transmission. "
      "Calcium and calcitriol replacement are mainstays of hypoparathyroidism management; avoid high phosphate formulas that can precipitate hypocalcemic seizures. "
      "Multidisciplinary care includes cardiology, immunology, endocrinology, genetics, ENT, speech/feeding therapy, and developmental pediatrics. "
      "(5) Classic pitfall: missing the diagnosis in older children who present with learning disability, psychiatric symptoms (schizophrenia risk is 25x), or recurrent sinopulmonary infections without the florid neonatal presentation. "
      "Any child with an unexplained cardiac defect plus speech/language delay, hypernasal speech, or recurrent infection deserves a microarray. "
      "Genetic counseling is essential — the deletion is de novo in ~90% but inherited autosomal dominant in ~10%, with variable expressivity that can mislead family history taking."
    )
  },

  "ectopic-pregnancy-workup": {
    "diagnosis": "Ruptured Ectopic Pregnancy — Hemorrhagic Shock",
    "coachFinal": (
      "Diagnosis: ruptured ectopic pregnancy with hemorrhagic shock. "
      "Key learning: "
      "(1) Ectopic pregnancy must be on the differential for any woman of reproductive age with abdominal pain, vaginal bleeding, or a positive pregnancy test — it is the leading cause of first-trimester maternal death. "
      "The classic triad (amenorrhea + abdominal pain + vaginal bleeding) is present in only about 50% of patients; atypical presentations are common. "
      "Risk factors include prior ectopic (10x risk), prior tubal surgery, prior PID/chlamydia, IUD in situ (rare but when pregnancy occurs it is more likely ectopic), assisted reproductive technology, and smoking. "
      "(2) Diagnostic framework: quantitative beta-hCG plus transvaginal ultrasound are the core. "
      "The 'discriminatory zone' — beta-hCG above which an intrauterine pregnancy should be visible on TVUS — is roughly 1,500-3,500 IU/L depending on machine and operator. "
      "If beta-hCG is above the discriminatory zone and the uterus is empty, ectopic pregnancy is the working diagnosis. "
      "POCUS findings that clinch rupture are an empty uterus, an adnexal mass or ring, and free fluid in the pelvis or Morison's pouch. "
      "(3) Hemodynamic status drives management, not labs. "
      "An unstable patient — tachycardia, hypotension, diaphoresis, peritoneal signs, significant free fluid — goes directly to the OR for emergency salpingectomy. "
      "Do not delay surgery to chase a beta-hCG result; the number changes nothing about the operative decision. "
      "Two large-bore IVs, type and crossmatch, activate massive transfusion if needed, and transfuse O-negative blood early if crystalloid response is inadequate. "
      "(4) Stable patients have three options: (a) methotrexate (single or multi-dose IM) if beta-hCG under 5,000 (ideally under 3,500), sac under 3.5 cm, no fetal cardiac activity, no rupture, reliable follow-up, normal LFTs/renal function/CBC, no breastfeeding. "
      "(b) Laparoscopic salpingostomy (fertility-preserving if contralateral tube diseased) or salpingectomy. "
      "(c) Expectant management only for very low and declining beta-hCG in asymptomatic patients. "
      "Methotrexate follow-up requires beta-hCG on day 1, 4, and 7 expecting >=15% drop between day 4 and 7. "
      "(5) Classic pitfalls: (a) not checking Rh status — Rh-negative patients need Rho(D) immune globulin regardless of gestational age to prevent alloimmunization in future pregnancies. "
      "(b) Being falsely reassured by a low beta-hCG — heterotopic and ruptured ectopics can present with low or plateauing levels. "
      "(c) Delaying definitive management while awaiting beta-hCG trends in a patient with worsening pain or free fluid. "
      "(d) Overlooking cervical, interstitial, cornual, and cesarean scar ectopic locations, which can bleed catastrophically and require specialized management."
    )
  },

  "febrile-neutropenia": {
    "diagnosis": "High-Risk Febrile Neutropenia — Oncologic Emergency",
    "coachFinal": (
      "Diagnosis: high-risk febrile neutropenia in a patient on dose-dense chemotherapy for breast cancer. "
      "Key learning: "
      "(1) Febrile neutropenia (FN) is defined as a single oral temperature >=38.3 C (101 F) or >=38.0 C sustained over 1 hour in a patient with an absolute neutrophil count (ANC) under 500/uL, or under 1,000/uL with predicted decline to under 500 within 48 hours. "
      "The nadir period after most cytotoxic regimens is days 7-14 — ask specifically about day post-chemotherapy when evaluating any oncology patient with fever. "
      "Even with normal-appearing vitals, these patients can decompensate rapidly because the inflammatory signs of infection are blunted. "
      "(2) The door-to-antibiotic target is 60 minutes. Every hour of delay increases mortality in febrile neutropenia, and the typical workflow bottleneck is waiting for labs or imaging before initiating empiric coverage. "
      "Get blood cultures (x2 — one peripheral, one from each indwelling line lumen), urinalysis and urine culture, chest X-ray, CBC with differential, and CMP — then give antibiotics immediately, do not wait for results. "
      "(3) Empiric antibiotic selection uses a single anti-pseudomonal beta-lactam: cefepime, piperacillin-tazobactam, or meropenem. "
      "Vancomycin is NOT routine — add it only for specific indications (hemodynamic instability, known MRSA colonization, catheter-site or skin/soft-tissue infection, severe mucositis, suspected pneumonia, recent fluoroquinolone prophylaxis). "
      "Add antifungal coverage (usually an echinocandin) if fever persists over 4-7 days on broad-spectrum antibacterials, especially with prolonged neutropenia. "
      "A penicillin allergy of 'childhood hives' should not deter cefepime — cross-reactivity is under 2% and the risk of untreated FN far exceeds the allergy risk. "
      "(4) MASCC risk score stratifies admission needs: burden of illness (no/mild symptoms 5 pts), no hypotension (5), no COPD (4), solid tumor or no prior fungal infection (4), no dehydration (3), outpatient status (3), age under 60 (2). "
      "Score >=21 = low risk (may be candidate for oral outpatient therapy in select systems); under 21 = high risk (IV antibiotics, admission). "
      "(5) Classic pitfalls: (a) failing to recognize that a patient with ANC under 100 may not mount a fever — any neutropenic patient with new hypotension, altered mental status, or localized pain should be treated as presumed FN. "
      "(b) Forgetting that pegfilgrastim does not prevent all post-chemo neutropenia; patients can still present with profound ANC nadirs. "
      "(c) Delaying antibiotics for a CT scan when a CXR would suffice. "
      "(d) Not involving oncology early — admission location (oncology floor vs ICU) and continuation of chemotherapy depend on their input."
    )
  },

  "heart-failure-hfpef": {
    "diagnosis": "Acute Decompensated Heart Failure with Preserved EF (HFpEF)",
    "coachFinal": (
      "Diagnosis: acute decompensated heart failure with preserved ejection fraction (HFpEF), hypertensive etiology, precipitated by dietary sodium and uncontrolled blood pressure. "
      "Key learning: "
      "(1) HFpEF now accounts for roughly half of all heart failure cases and is the dominant phenotype in older women with hypertension, diabetes, obesity, and atrial fibrillation. "
      "Diagnosis requires signs and symptoms of heart failure, EF >=50%, and evidence of elevated filling pressures or structural heart disease (LV hypertrophy, left atrial enlargement, diastolic dysfunction on echo, elevated natriuretic peptides). "
      "Validated scoring tools — H2FPEF and HFA-PEFF — help when the diagnosis is uncertain, particularly in patients with dyspnea and preserved EF but no obvious decompensation signs. "
      "(2) The HFpEF vs HFrEF distinction drives therapy and must be made early. "
      "In HFrEF (EF <=40%), the mortality-reducing quartet is established: ARNI or ACE-I/ARB, beta-blocker, MRA, and SGLT2 inhibitor. "
      "In HFpEF, only SGLT2 inhibitors (empagliflozin in EMPEROR-Preserved, dapagliflozin in DELIVER) have shown clear reductions in heart failure hospitalization and cardiovascular death. "
      "ACE-I, ARBs, and beta-blockers do not reduce mortality in HFpEF, though they are often continued for coexisting HTN, CAD, or atrial fibrillation. "
      "(3) Acute decompensation management is similar to HFrEF: IV loop diuretic (furosemide dosed at >=2.5x the patient's home oral dose, or an initial IV dose of 40 mg if diuretic-naive), strict I/Os, daily weights, and fluid and sodium restriction. "
      "Target urine output of roughly 3-5 L net negative over the admission. "
      "Hypertensive HFpEF often responds dramatically to BP control — IV nitroglycerin for acute afterload reduction, then transition to oral antihypertensives. "
      "(4) Precipitants must always be identified and addressed: dietary indiscretion (sodium), medication nonadherence, uncontrolled HTN, rapid atrial fibrillation (loss of atrial kick is especially detrimental in stiff ventricles), ischemia, infection, NSAIDs, and renal dysfunction. "
      "Rate and rhythm control in AF become high-priority interventions in HFpEF because diastolic filling depends heavily on atrial contraction. "
      "(5) Classic pitfalls: (a) dismissing HFpEF as 'just diastolic dysfunction' and undertreating it — these patients have mortality comparable to HFrEF. "
      "(b) Over-diuresing and driving AKI, hyponatremia, or hypotension in patients whose hemodynamics depend on adequate preload. "
      "(c) Missing amyloid cardiomyopathy masquerading as HFpEF in older patients with unexplained LV hypertrophy, low-voltage ECG, carpal tunnel history, or discordance between wall thickness and QRS voltage — bone scintigraphy with 99mTc-PYP and free light chains should be considered. "
      "(d) Forgetting the lifestyle foundation: salt restriction, weight loss, exercise training, and BP control do more for long-term outcomes than any single medication."
    )
  },

  "hip-dislocation": {
    "diagnosis": "Posterior Prosthetic Hip Dislocation (Post-THA)",
    "coachFinal": (
      "Diagnosis: posterior prosthetic hip dislocation in a patient with a prior total hip arthroplasty (THA). "
      "Key learning: "
      "(1) Prosthetic hip dislocation is one of the most common complications after THA (1-3% lifetime risk, higher in revision cases, elderly, and those with neuromuscular or cognitive impairment). "
      "The classic mechanism is flexion combined with internal rotation and adduction — putting on socks, crossing legs, rising from a low chair, or a fall. "
      "Presentation is dramatic: sudden severe pain, inability to bear weight, and the affected limb held in a characteristic position — flexed, adducted, and internally rotated with apparent limb shortening for posterior dislocations (which account for 85-90%), versus extended and externally rotated for anterior dislocations. "
      "(2) Diagnosis is clinical but confirmed with AP pelvis and cross-table lateral radiographs. "
      "Assess for associated fractures (periprosthetic femoral fracture, acetabular fracture), component position (signs of loosening, malpositioning), and sciatic nerve involvement (foot drop, altered sensation in sciatic distribution — up to 10% of posterior dislocations). "
      "A careful neurovascular exam before AND after reduction is mandatory and must be documented. "
      "(3) Closed reduction is the immediate priority and should be attempted expeditiously — prolonged dislocation increases the risk of sciatic nerve injury, avascular necrosis of acetabular bone, and soft-tissue contracture. "
      "Reduction is performed under procedural sedation with adequate muscle relaxation (propofol +/- a short-acting opioid; occasionally general anesthesia is required). "
      "Common techniques: Allis maneuver (patient supine, assistant stabilizes pelvis, operator flexes hip to 90 degrees with knee flexed and applies longitudinal traction with gentle internal/external rotation) or Captain Morgan maneuver. "
      "Confirm reduction with post-reduction imaging and repeat neurovascular exam. "
      "(4) Post-reduction management: hip precautions (no hip flexion over 90 degrees, no adduction past midline, no internal rotation) for 6 weeks, abduction pillow or brace if instability is marked, physical therapy for gait and strengthening, and orthopedic follow-up. "
      "Recurrent dislocation (especially more than 2 episodes) prompts evaluation for revision arthroplasty — component malposition, polyethylene wear, abductor insufficiency, or anatomic issues may need surgical correction. "
      "(5) Classic pitfalls: (a) missing a periprosthetic femoral fracture before attempting reduction — always review films carefully; reducing a fracture-dislocation with traction can displace the fracture and damage the prosthesis. "
      "(b) Inadequate sedation leading to failed reduction and muscle spasm that makes repeat attempts harder. "
      "(c) Discharging without confirming neurovascular status, hip precautions education, and orthopedic follow-up. "
      "(d) In native (non-prosthetic) hip dislocation, which is almost always high-energy trauma, the urgency is even greater — AVN risk climbs sharply after 6 hours of dislocation, and these patients need emergent orthopedic consultation."
    )
  },

  "hypercalcemia": {
    "diagnosis": "Severe Hypercalcemia of Malignancy (PTHrP-Mediated) — Squamous Cell Lung Cancer",
    "coachFinal": (
      "Diagnosis: severe hypercalcemia of malignancy, PTHrP-mediated, in squamous cell lung carcinoma. "
      "Key learning: "
      "(1) The classic hypercalcemia mnemonic 'bones, stones, abdominal groans, psychic moans, and thrones' maps to bone pain/fractures, renal stones and polyuria, constipation/abdominal pain/pancreatitis, altered mental status and depression, and polyuria. "
      "Severity drives symptoms: mild (under 12 mg/dL) is often asymptomatic, moderate (12-14) causes fatigue and polyuria, and severe (over 14) brings confusion, dehydration, and can progress to coma or arrhythmia. "
      "Always correct for albumin — corrected Ca = measured Ca + 0.8 x (4 - albumin) — or use ionized calcium, which is more reliable especially in cancer and critical illness. "
      "(2) The differential is organized by PTH: if PTH is HIGH or inappropriately normal, think primary hyperparathyroidism (by far the most common cause overall), familial hypocalciuric hypercalcemia, or lithium. "
      "If PTH is LOW/suppressed, think malignancy (PTHrP-mediated in squamous cell, renal, bladder, and head/neck cancers; lytic metastases in breast and multiple myeloma; 1,25-vitamin D mediated in lymphoma and granulomatous disease), vitamin D toxicity, thyrotoxicosis, immobilization, and milk-alkali syndrome. "
      "Workup should always include PTH, PTHrP, 25-OH and 1,25-OH vitamin D, SPEP with free light chains (myeloma), TSH, phosphorus, magnesium, and renal function. "
      "(3) Treatment is stepwise and driven by severity and symptoms: (a) Aggressive IV isotonic saline (200-500 mL/hr, typically 4-6 L in the first 24 hours) restores volume and promotes calciuresis; loop diuretics are NOT routine and are reserved for fluid overload after adequate resuscitation. "
      "(b) Calcitonin (4 IU/kg SQ/IM q12h) works within hours but develops tachyphylaxis in 24-48 hours — use it for rapid bridging. "
      "(c) Bisphosphonates (zoledronic acid 4 mg IV over 15 min, preferred; pamidronate as alternative) are the mainstay for malignancy-related hypercalcemia, with onset at 24-48 hours and duration of weeks. "
      "(d) Denosumab is useful when bisphosphonates are contraindicated (renal failure) or refractory cases. "
      "(e) Glucocorticoids work for vitamin D mediated hypercalcemia (granulomatous disease, lymphoma). "
      "(f) Dialysis is reserved for severe refractory cases or renal failure. "
      "(4) Discontinue offending agents: calcium supplements, vitamin D, thiazides, lithium, and milk-alkali sources. "
      "Oncology consultation is essential because hypercalcemia of malignancy often signals progression — median survival after the first episode is historically months, though newer oncologic therapies are changing this. "
      "(5) Classic pitfalls: (a) not correcting for albumin in a cachectic cancer patient — a 'normal' calcium on a low albumin is actually high. "
      "(b) Using loop diuretics as first-line therapy before adequate volume resuscitation, worsening dehydration. "
      "(c) Missing multiple myeloma by failing to check SPEP/free light chains in an older patient with hypercalcemia, anemia, renal dysfunction, and bone pain (CRAB criteria). "
      "(d) Undertreating severe hypercalcemia as though it were outpatient — Ca over 14 or any symptomatic patient needs aggressive, staged therapy and close monitoring."
    )
  },

  "hypereosinophilic-syndrome": {
    "diagnosis": "Myeloproliferative Hypereosinophilic Syndrome with FIP1L1-PDGFRA Fusion",
    "coachFinal": (
      "Diagnosis: myeloproliferative hypereosinophilic syndrome (HES) with FIP1L1-PDGFRA fusion, complicated by eosinophilic endomyocarditis and lung infiltration. "
      "Key learning: "
      "(1) Hypereosinophilic syndrome is defined by persistent eosinophilia >=1,500/uL on at least two occasions a month apart (or once with end-organ damage), plus evidence of eosinophil-mediated organ damage. "
      "The most feared complications are cardiac (eosinophilic endomyocarditis progressing through necrotic, thrombotic, and fibrotic stages — Loffler endocarditis), pulmonary infiltrates, skin involvement (urticaria, angioedema, nodules), neurologic (encephalopathy, peripheral neuropathy, cerebral infarction), and gastrointestinal (eosinophilic gastroenteritis). "
      "Troponin and cardiac MRI are essential in any patient with sustained eosinophilia — cardiac damage can be clinically silent until advanced. "
      "(2) The diagnostic workup is guided by a structured differential: (a) secondary/reactive eosinophilia — parasitic infection (strongyloides is a must-rule-out before any immunosuppression; check serology), drug reaction (DRESS syndrome, eosinophilia-triggering drugs), allergic/atopic disease, ABPA, collagen vascular disease, adrenal insufficiency. "
      "(b) Clonal/neoplastic — myeloproliferative HES (FIP1L1-PDGFRA fusion is the classic imatinib-responsive lesion; also PDGFRB, FGFR1, JAK2 rearrangements), chronic eosinophilic leukemia, systemic mastocytosis, T-cell lymphoma (aberrant T-cell clones secreting IL-5 leading to lymphocytic variant HES). "
      "(c) Idiopathic HES — diagnosis of exclusion. "
      "Testing must include strongyloides serology, stool O&P, HIV, tryptase, vitamin B12 (elevated in myeloproliferative variants), peripheral flow cytometry for aberrant T-cell populations, bone marrow biopsy with cytogenetics and molecular testing for FIP1L1-PDGFRA and related fusions, and TCR rearrangement studies. "
      "(3) Treatment is driven by subtype. "
      "FIP1L1-PDGFRA-positive patients respond dramatically to imatinib at low doses (100-400 mg daily) with hematologic remission within weeks and molecular remission in most. "
      "Lymphocytic variant and idiopathic HES are first treated with systemic corticosteroids (prednisone 0.5-1 mg/kg/day). "
      "Second-line and steroid-sparing options include mepolizumab (anti-IL-5, FDA-approved for HES), benralizumab (anti-IL-5Ra), hydroxyurea, and interferon-alpha. "
      "(4) Cardiac management: anticoagulation is strongly considered when intracardiac thrombus is present; heart failure is treated with standard evidence-based therapy; advanced fibrotic endomyocardial disease may require surgical intervention. "
      "Monitor troponin, NT-proBNP, and echocardiography serially. "
      "(5) Classic pitfalls: (a) starting systemic steroids without first ruling out strongyloides — disseminated strongyloidiasis in an immunosuppressed host is often fatal. "
      "(b) Missing FIP1L1-PDGFRA by not ordering the molecular test — these patients can be spared steroids entirely. "
      "(c) Treating eosinophilia as 'just atopy' without checking for organ involvement — silent cardiac disease is the classic catastrophe. "
      "(d) Forgetting that the eosinophil count does not have to be extremely high to cause organ damage; sustained moderate eosinophilia over months or years can still cause fibrosis."
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
    print(f'\nBatch 26A: {done}/{len(ENRICHMENTS)} enriched')
