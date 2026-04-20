#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"cross-oral-sepsis": {
  "diagnosis": "Oral Source of Sepsis — Periapical Abscess with Bacteremia, Dental Extraction Needed After Medical Stabilization",
  "problems": [
    {"problem":"Sepsis — oral/dental source, Ludwig's angina risk","icd":"A41.89","onset":"2024","status":"Active","notes":"Tomás Guerrero, 44M — febrile, swollen right jaw, trismus, elevated WBC. Blood cultures pending. CT neck ordered."},
    {"problem":"Periapical abscess — mandibular molar, spreading cellulitis","icd":"K04.7","onset":"2024","status":"Active","notes":"Unable to open mouth >1cm. Medial pterygoid space involved. Ludwig's angina must be excluded urgently."},
    {"problem":"Airway at risk — sublingual/submandibular space involvement","icd":"J38.4","onset":"2024","status":"Active","notes":"CT neck: bilateral submandibular involvement beginning. Anesthesia and ENT on standby."}
  ],
  "medications": [
    {"name":"Ampicillin-sulbactam 3g IV q6h — empiric oral flora","sig":"Covers Streptococcus, anaerobes, oral gram-negatives. Backbone of Ludwig's angina treatment.","prescriber":"ENT/Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Metronidazole 500mg IV q8h — add anaerobic coverage","sig":"Adjunct for deep space neck infection — polymicrobial including Fusobacterium, Bacteroides","prescriber":"ENT/Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Dexamethasone 10mg IV q6h — reduce airway edema","sig":"Steroids reduce cellulitis and airway edema in Ludwig's angina — given WITH antibiotics, not alone","prescriber":"ENT","start":"2024","refills":0,"status":"Active"},
    {"name":"Serial airway assessments — anesthesia standby","sig":"If stridor, drooling, inability to swallow, posturing → intubate EARLY. Awake fiberoptic preferred before complete closure.","prescriber":"Anesthesia/ENT","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Sepsis/Neck Infection Panel","results":[
    {"test":"WBC","value":"24.6","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"CRP","value":"184","unit":"mg/L","ref":"<10","flag":"H"},
    {"test":"Creatinine","value":"1.3","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Lactate","value":"2.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"Blood cultures x2","value":"Pending","unit":"","ref":"","flag":""},
    {"test":"Glucose","value":"224","unit":"mg/dL","ref":"70-100","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Neck With Contrast","indication":"Jaw swelling, trismus, fever — deep space infection?","findings":"Bilateral submandibular and submental space involvement. Early sublingual space gas. No drainable abscess identified — phlegmon. Airway midline but narrowed at base of tongue.","impression":"Ludwig's angina — bilateral deep space neck infection. Airway compromise risk HIGH. No discrete abscess for I&D — IV antibiotics + airway monitoring."}],
  "ddxTargets": ["Ludwig's angina — dental source sepsis, bilateral deep space neck infection (correct)","Peritonsillar abscess — unilateral, uvular deviation, different age group","Parapharyngeal space abscess — different CT location, usually unilateral","Submandibular lymphadenitis — does not cause gas or bilateral space involvement","Angioedema — no skin erythema/heat, no dental source, different history","Epiglottitis — epiglottis normal on CT; different presentation"],
  "coachFinal": "Diagnosis: Ludwig's angina — deep space neck infection from dental source. Key learning: (1) Ludwig's angina is a bilateral submandibular/sublingual/submental space infection — a true surgical emergency. Most common source: mandibular second or third molar periapical abscess. Organisms: mixed oral flora (Streptococcus, Staphylococcus, anaerobes). (2) Airway is the first priority — can progress from open airway to complete closure in hours. Warning signs: stridor, drooling, muffled voice, anterior neck edema, inability to swallow. Awake fiberoptic intubation before airway closes is far safer than crash intubation. (3) Gas on CT: pathognomonic for deep space infection with gas-producing organisms (polymicrobial, anaerobic). Urgent surgical and ENT evaluation. (4) I&D: if no discrete abscess on CT (phlegmon), antibiotics alone may suffice. If abscess present → surgical drainage. Dental extraction of source tooth after medical stabilization. (5) Interdisciplinary key learning: dental providers should recognize that a painful, swollen tooth presenting with fever, trismus, and dysphagia requires ED referral, not just antibiotic prescription and discharge."
},
"cross-postop-deterioration": {
  "diagnosis": "Post-Operative Deterioration — Pulmonary Embolism Day 3 Post-Op, Missed DVT Prophylaxis",
  "problems": [
    {"problem":"Pulmonary embolism — post-operative day 3, bilateral","icd":"I26.99","onset":"2024","status":"Active","notes":"Nadia Okonkwo, 52F — sudden dyspnea and pleuritic pain after right knee replacement. SpO2 dropped to 88%."},
    {"problem":"DVT prophylaxis missed — 2 doses enoxaparin held without indication","icd":"Z79.01","onset":"2024","status":"Active","notes":"Nursing notes show 2 doses held 'for bleeding precaution' — no documentation of surgical team order to hold."},
    {"problem":"Hemodynamically stable PE — submassive risk stratification","icd":"I26.99","onset":"2024","status":"Active","notes":"BP 108/68, HR 118. RV strain on echo. Troponin elevated. Risk-stratify for systemic thrombolysis vs anticoagulation."}
  ],
  "medications": [
    {"name":"Heparin UFH IV infusion — therapeutic anticoagulation","sig":"Weight-based heparin protocol. aPTT target 60-100 seconds. Bridge to rivaroxaban at discharge.","prescriber":"Medicine/Hematology","start":"2024","refills":0,"status":"Active"},
    {"name":"Rivaroxaban 15mg BID x21 days, then 20mg daily — transition","sig":"DOACs are first-line for PE. Rivaroxaban approved for acute PE without bridging if stable.","prescriber":"Medicine","start":"2024","refills":1,"status":"Active — discharge"},
    {"name":"Supplemental O2 — titrate to SpO2 >94%","sig":"High-flow O2 via face mask. Target SpO2 ≥94%.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Hold systemic thrombolysis — hemodynamically stable","sig":"Systemic tPA reserved for massive PE (sustained BP <90). Submassive PE = anticoagulate, monitor closely.","prescriber":"Medicine/Pulm","start":"2024","refills":0,"status":"Hold — monitoring"}
  ],
  "labs": [{"date":"11/2024","panel":"PE Risk Stratification Panel","results":[
    {"test":"Troponin I","value":"0.22","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"BNP","value":"680","unit":"pg/mL","ref":"<100","flag":"H"},
    {"test":"D-dimer","value":">20","unit":"mg/L","ref":"<0.5","flag":"H"},
    {"test":"ABG — PaO2","value":"61","unit":"mmHg","ref":"80-100","flag":"L"},
    {"test":"ABG — PaCO2","value":"32","unit":"mmHg","ref":"35-45","flag":"L"},
    {"test":"Creatinine","value":"1.0","unit":"mg/dL","ref":"0.7-1.3","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Pulmonary Angiography","indication":"Acute dyspnea, pleuritic pain, post-op day 3","findings":"Bilateral pulmonary emboli — right main and left lower lobe branches. Right ventricular dilation. No saddle embolus.","impression":"Bilateral submassive PE with RV strain. No saddle embolus. Hemodynamically stable at time of scan."}],
  "ddxTargets": ["Pulmonary embolism — post-op, missed DVT prophylaxis (correct)","Pneumonia — no infiltrate, acute onset, pleuritic pattern","Pleural effusion causing dyspnea — small effusion only, not explanatory","MI with respiratory symptoms — troponin elevated but CTPA confirms PE","Atelectasis — common post-op but does not cause SpO2 88% pleuritic pain","Pneumothorax — excluded on CTPA"],
  "coachFinal": "Diagnosis: submassive PE — post-op, missed prophylaxis. Key learning: (1) VTE prophylaxis is a patient safety imperative — holding without documented indication is a medication error. DVT prophylaxis should only be held with explicit surgical team order and documented reason. Knee replacement is a VERY high VTE risk — enoxaparin is mandatory. (2) PE severity classification: massive = sustained SBP <90 for >15 min (systemic thrombolysis indicated). Submassive = hemodynamically stable + RV dysfunction on echo or elevated troponin/BNP (anticoagulate, consider catheter-directed thrombolysis). Low-risk = none of the above (anticoagulate, early discharge). (3) RV strain markers: RV/LV ratio >0.9 on CTPA or echo, elevated troponin, elevated BNP, S1Q3T3 on ECG. These define submassive PE and warrant ICU-level monitoring. (4) DOAC selection for PE: rivaroxaban (acute dosing 15mg BID x21d then 20mg daily) and apixaban (10mg BID x7d then 5mg BID) can be started without heparin bridging in stable PE. Not for hemodynamically unstable or severe renal impairment. (5) Systemic thrombolysis: reserved for massive PE or submassive PE deteriorating on anticoagulation. Bleeding risk is 1-3% intracranial hemorrhage. Catheter-directed thrombolysis (lower systemic dose via catheter into clot) is an intermediate option for submassive PE with deterioration."
},
"cvid-presentation-v2": {
  "diagnosis": "Common Variable Immunodeficiency — Recurrent Sinopulmonary Infections, Low IgG/IgA/IgM, IVIG Initiation",
  "problems": [
    {"problem":"Common variable immunodeficiency (CVID) — confirmed diagnosis","icd":"D83.9","onset":"2024","status":"Active","notes":"Sarah Park, 29F — 4 bacterial pneumonias in 2 years, 3 sinusitis episodes. IgG 180 mg/dL (normal >700)."},
    {"problem":"Bronchiectasis — sequela of recurrent infections","icd":"J47.9","onset":"2024","status":"Active","notes":"CT chest: bilateral lower lobe bronchiectasis. Pulmonary function monitoring required annually."},
    {"problem":"IVIG therapy initiation — immunoglobulin replacement","icd":"D83.9","onset":"2024","status":"Active","notes":"IVIG 0.4-0.6g/kg q3-4 weeks. Target trough IgG >500-700 mg/dL. Infusion reaction monitoring."}
  ],
  "medications": [
    {"name":"IVIG 0.5g/kg IV q4 weeks — immunoglobulin replacement","sig":"Infuse slowly initially — monitor for infusion reactions. Trough IgG goal >600 mg/dL.","prescriber":"Allergy/Immunology","start":"2024","refills":11,"status":"Active — new"},
    {"name":"Azithromycin 500mg PO 3x/week — prophylactic antibiotic","sig":"Prophylactic antibiotic — reduces breakthrough bacterial infections during IVIG titration","prescriber":"Allergy/Immunology","start":"2024","refills":3,"status":"Active"},
    {"name":"Albuterol MDI PRN — bronchospasm with bronchiectasis","sig":"Rescue bronchodilator for bronchospasm symptoms","prescriber":"Pulmonology","start":"2024","refills":3,"status":"Active PRN"}
  ],
  "labs": [{"date":"10/2024","panel":"Immunodeficiency Workup","results":[
    {"test":"IgG","value":"180","unit":"mg/dL","ref":"700-1600","flag":"L"},
    {"test":"IgA","value":"8","unit":"mg/dL","ref":"70-400","flag":"L"},
    {"test":"IgM","value":"22","unit":"mg/dL","ref":"40-230","flag":"L"},
    {"test":"Vaccine response — tetanus IgG (post-booster)","value":"Non-protective (<0.1 IU/mL)","unit":"","ref":">0.1 IU/mL protective","flag":"L"},
    {"test":"Vaccine response — pneumococcal IgG (post-Pneumovax)","value":"Non-protective","unit":"","ref":">1.3 mcg/mL x7 serotypes","flag":"L"},
    {"test":"B-cell count","value":"Normal (220/μL)","unit":"","ref":"100-500","flag":""}
  ]}],
  "imaging": [{"date":"10/2024","study":"CT Chest High-Resolution","indication":"Recurrent pneumonias — bronchiectasis evaluation","findings":"Bilateral lower lobe bronchiectasis, mild. No active consolidation. No lymphadenopathy.","impression":"Bronchiectasis from recurrent infections. No active pneumonia. Consistent with CVID sequela."}],
  "ddxTargets": ["CVID — pan-hypogammaglobulinemia + vaccine non-response (correct)","X-linked agammaglobulinemia — males only, onset in infancy, nearly absent B cells","IgA deficiency alone — IgG and IgM normal in isolated IgA deficiency","Secondary hypogammaglobulinemia — medications (rituximab), lymphoma; no such history","Good's syndrome — thymoma + hypogammaglobulinemia; no thymoma here","Transient hypogammaglobulinemia of infancy — age at diagnosis (29 years) excludes"],
  "coachFinal": "Diagnosis: CVID. Key learning: (1) CVID diagnostic criteria: IgG <2SD below mean for age + low IgA and/or IgM + poor vaccine response (non-protective antibody titers to T-dependent and T-independent antigens) + exclusion of secondary causes + age >2 years. B-cell count is typically normal (unlike XLA). (2) Classic presentation: young adult with recurrent bacterial sinopulmonary infections (pneumococcus, H. influenzae) — average 6-7 year diagnostic delay from first symptom. Bronchiectasis is a preventable sequela with early IVIG. (3) IVIG mechanism: replaces missing IgG — provides passive immunity. Does NOT restore endogenous antibody production. Trough IgG >500-700 mg/dL reduces infection frequency. Some patients need SCIG (subcutaneous — weekly self-injection) instead. (4) Non-infectious CVID complications: autoimmune disease (ITP, hemolytic anemia), granulomatous disease (lung, liver, spleen), GI inflammation (IBD-like), lymphoma risk increased. These occur in ~25-50% of CVID patients and may not be infection-related. (5) Live vaccines: ABSOLUTELY contraindicated in CVID — MMR, varicella, yellow fever can cause disseminated infection. Inactivated vaccines safe but may not produce protective responses."
},
"cvid-presentation": {
  "diagnosis": "CVID — First Presentation at Age 22, Recurrent Pneumonia, Diagnostic Workup Initiated",
  "problems": [
    {"problem":"CVID — suspected, diagnostic workup","icd":"D83.9","onset":"2024","status":"Active","notes":"James Caldwell, 22M — 3rd pneumonia in 18 months. Primary care physician initiating immunodeficiency workup."},
    {"problem":"Recurrent pneumococcal pneumonia — same organism x2","icd":"J13","onset":"2024","status":"Active","notes":"Blood cultures: Streptococcus pneumoniae. Despite prior vaccination — vaccine non-response suspected."},
    {"problem":"Family history — brother with unexplained recurrent infections","icd":"Z83.79","onset":"2024","status":"Active","notes":"Brother had similar infections at same age — CVID has familial clustering (10-20% family history)."}
  ],
  "medications": [
    {"name":"Amoxicillin-clavulanate 875mg BID x10 days — current pneumonia","sig":"Oral outpatient treatment — mild CAP. Complete full course.","prescriber":"PCP","start":"2024","refills":0,"status":"Active"},
    {"name":"Immunology referral — urgent","sig":"Immunologist referral for confirmatory testing and IVIG initiation if CVID confirmed","prescriber":"PCP","start":"2024","refills":0,"status":"Active — referral placed"}
  ],
  "labs": [{"date":"11/2024","panel":"Initial Immunodeficiency Screen","results":[
    {"test":"IgG","value":"220","unit":"mg/dL","ref":"700-1600","flag":"L"},
    {"test":"IgA","value":"12","unit":"mg/dL","ref":"70-400","flag":"L"},
    {"test":"IgM","value":"18","unit":"mg/dL","ref":"40-230","flag":"L"},
    {"test":"CBC — B cells (flow cytometry, ordered)","value":"Pending","unit":"","ref":"100-500","flag":""},
    {"test":"HIV antibody","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Protein electrophoresis","value":"Hypogammaglobulinemia pattern, no M-spike","unit":"","ref":"Normal gammaglobulin","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["CVID — pan-hypogammaglobulinemia, recurrent pneumococcal pneumonia (correct)","HIV/AIDS — negative HIV test","Multiple myeloma — SPEP no M-spike; age atypical","X-linked agammaglobulinemia — age of onset (recurrent from infancy), absent B cells","Secondary immunodeficiency (medications, malnutrition) — no risk factors","Complement deficiency — C3/C4 normal; would cause specific Neisseria/pneumococcal susceptibility"],
  "coachFinal": "Diagnosis: CVID — initial presentation. Key learning: (1) Red flags for primary immunodeficiency: ≥2 serious bacterial infections per year, infections with unusual/opportunistic organisms, infections requiring IV antibiotics, infections at unusual sites (brain abscess), family history of PID, failure to thrive. The 10 Warning Signs (Jeffrey Modell Foundation) are a useful screening tool. (2) PCP workup for recurrent infections: CBC with differential, quantitative immunoglobulins (IgG, IgA, IgM, IgE), HIV antibody, serum protein electrophoresis. If immunoglobulins low: flow cytometry for B/T/NK cells, vaccine titers (tetanus, pneumococcal). (3) Diagnosis requires referral to allergy/immunology — IVIG cannot be initiated by PCP in most settings (insurance authorization, infusion center logistics). Urgent referral is appropriate. (4) Do NOT give live vaccines if CVID suspected — defer MMR, varicella, yellow fever until immunologist evaluates. Inactivated vaccines are safe. (5) CVID vs XLA: both have hypogammaglobulinemia, but XLA (Bruton's) = males only, onset in infancy after maternal antibody wanes, B cells nearly absent on flow cytometry. CVID = any sex, onset 20s-30s, B cells usually normal in number but dysfunctional."
},
"dka-v1": {
  "diagnosis": "Diabetic Ketoacidosis — New-Onset T1DM, Insulin Drip, Anion Gap Closure, Transition to Subcutaneous Protocol",
  "problems": [
    {"problem":"DKA — new-onset T1DM, severe (pH 7.18)","icd":"E10.10","onset":"2024","status":"Active","notes":"Alex Kim, 19M — polyuria/polydipsia x3 weeks, vomiting x2 days. Glucose 524, pH 7.18, AG 28."},
    {"problem":"Severe dehydration — 6-8L deficit estimated","icd":"E86.0","onset":"2024","status":"Active","notes":"HR 128, BP 98/62. Dry mucous membranes. Initial resuscitation with NS, then switch to 0.45% NaCl."},
    {"problem":"Hypokalemia risk — insulin and fluids will worsen K+","icd":"E87.6","onset":"2024","status":"Active","notes":"K+ 3.4 on arrival — must replace to ≥3.5 BEFORE starting insulin. Ongoing replacement required."}
  ],
  "medications": [
    {"name":"Normal saline 1L IV bolus, then 500mL/h x2h — resuscitation","sig":"Restore intravascular volume first. Switch to 0.45% NaCl + 20mEq KCl at 250mL/h after hemodynamic stabilization.","prescriber":"Medicine/Endocrinology","start":"2024","refills":0,"status":"Active"},
    {"name":"Potassium chloride 40mEq IV — before insulin","sig":"MUST replace K+ to ≥3.5 before starting insulin. Insulin drives K+ into cells — severe hypokalemia causes fatal arrhythmia.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Regular insulin 0.1 units/kg/h IV infusion — after K+ ≥3.5","sig":"Do NOT bolus unless pH <6.9. Continuous infusion. Target glucose drop 50-75 mg/dL/h.","prescriber":"Endocrinology","start":"2024","refills":0,"status":"Active — after K+ replacement"},
    {"name":"Dextrose 5% in 0.45% NaCl — add when glucose <250","sig":"Switch IVF to D5 0.45NS when glucose drops below 250 — keeps insulin running while preventing hypoglycemia. The goal is anion gap closure, not glucose normalization.","prescriber":"Endocrinology","start":"2024","refills":0,"status":"Active — conditional"}
  ],
  "labs": [{"date":"11/2024","panel":"DKA Panel — Initial","results":[
    {"test":"Glucose","value":"524","unit":"mg/dL","ref":"70-100","flag":"H"},
    {"test":"pH (venous)","value":"7.18","unit":"","ref":"7.35-7.45","flag":"L"},
    {"test":"Bicarbonate","value":"8","unit":"mEq/L","ref":"22-26","flag":"L"},
    {"test":"Anion gap","value":"28","unit":"mEq/L","ref":"8-12","flag":"H"},
    {"test":"Potassium","value":"3.4","unit":"mEq/L","ref":"3.5-5.0","flag":"L"},
    {"test":"Beta-hydroxybutyrate","value":"8.4","unit":"mmol/L","ref":"<0.6","flag":"H"},
    {"test":"HbA1c","value":"12.8","unit":"%","ref":"<5.7","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["DKA — new-onset T1DM (correct)","HHS (hyperosmolar hyperglycemic state) — T2DM, older, no ketosis, glucose often >600","Alcoholic ketoacidosis — history, glucose often normal or low, alcohol odor","Starvation ketosis — mild, glucose normal/low, no acidosis","SGLT-2 inhibitor euglycemic DKA — glucose often <250 despite DKA; not applicable here (new T1DM)","Lactic acidosis — lactate elevated; DKA anion gap from ketones not lactate"],
  "coachFinal": "Diagnosis: DKA, new-onset T1DM. Key learning: (1) DKA triad: glucose >250 + pH <7.30 + positive ketones. Severity: mild pH 7.25-7.30, moderate 7.00-7.25, severe <7.00. This patient: pH 7.18 = moderate-severe. (2) Potassium rule: NEVER start insulin until K+ ≥3.5. Insulin drives potassium into cells → serum K+ drops → fatal arrhythmia. Replace K+ to ≥3.5 before ANY insulin. Even in DKA with a normal or high K+ on admission, total body K+ is depleted — aggressive replacement ongoing. (3) Glucose vs anion gap: the treatment goal is ANION GAP CLOSURE, not glucose normalization. When glucose drops below 250, ADD dextrose to IVF and continue insulin — this keeps the insulin running to close the gap without causing hypoglycemia. (4) Cerebral edema: risk is higher in pediatric/young patients with DKA. Warning signs: headache, altered mental status, bradycardia during treatment. Prevent by avoiding overly rapid fluid correction or sodium drop. Mannitol 0.5-1g/kg IV if suspected. (5) Subcutaneous insulin transition: once AG closed + patient tolerating PO → overlap SC long-acting insulin with IV insulin by 1-2 hours before stopping drip (prevents rebound ketosis). Start basal-bolus regimen with endocrinology guidance."
},
"dress-syndrome-v2": {
  "diagnosis": "DRESS Syndrome — Allopurinol-Induced, Multiorgan Involvement, Systemic Steroid Required",
  "problems": [
    {"problem":"DRESS syndrome — Drug Reaction with Eosinophilia and Systemic Symptoms","icd":"L27.0","onset":"2024","status":"Active","notes":"Marcus Lin, 58M — allopurinol started 5 weeks ago. Widespread morbilliform rash, fever, lymphadenopathy, eosinophilia."},
    {"problem":"Hepatitis — drug-induced, DRESS-related","icd":"K71.6","onset":"2024","status":"Active","notes":"ALT 320, AST 280 — DRESS hepatitis. Liver can progress to fulminant failure. Serial monitoring required."},
    {"problem":"Allopurinol hypersensitivity — HLA-B*58:01 association","icd":"L27.0","onset":"2024","status":"Active","notes":"HLA-B*58:01 allele is strongly associated with allopurinol DRESS/SJS-TEN in Asian populations. Genetic screening now recommended before allopurinol in high-risk populations."}
  ],
  "medications": [
    {"name":"STOP allopurinol immediately — causative drug","sig":"Permanent discontinuation. Document allergy. Allopurinol rechallenge is absolutely contraindicated.","prescriber":"Allergy/Dermatology","start":"DISCONTINUE","refills":0,"status":"DISCONTINUED"},
    {"name":"Prednisone 1mg/kg/day PO — systemic steroid","sig":"Systemic corticosteroid — reduces inflammation, prevents organ progression. Taper slowly over 6-8 weeks — rapid taper causes rebound.","prescriber":"Dermatology/Allergy","start":"2024","refills":0,"status":"Active"},
    {"name":"Topical triamcinolone 0.1% — skin symptom relief","sig":"Apply to affected skin areas TID. Adjunct to systemic steroid for itch and rash.","prescriber":"Dermatology","start":"2024","refills":3,"status":"Active"},
    {"name":"Hydroxyzine 25mg PO q6h PRN — antihistamine for itch","sig":"H1 antihistamine for symptom relief. DRESS itch is cytokine-mediated, not histamine-only — antihistamines are adjuncts.","prescriber":"Dermatology","start":"2024","refills":0,"status":"PRN"}
  ],
  "labs": [{"date":"11/2024","panel":"DRESS Organ Assessment","results":[
    {"test":"Eosinophil count","value":"3.8","unit":"K/μL","ref":"<0.5","flag":"H"},
    {"test":"ALT","value":"320","unit":"U/L","ref":"7-56","flag":"H"},
    {"test":"AST","value":"280","unit":"U/L","ref":"10-40","flag":"H"},
    {"test":"Creatinine","value":"1.6","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Atypical lymphocytes","value":"12","unit":"%","ref":"<5%","flag":"H"},
    {"test":"HHV-6 IgM (reactivation)","value":"Positive","unit":"","ref":"Negative","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["DRESS syndrome — allopurinol, multiorgan involvement (correct)","Stevens-Johnson syndrome/TEN — epidermal detachment, mucosal involvement, different morphology","Viral exanthem — atypical lymphocytes but no eosinophilia this high, no organ involvement","Serum sickness — joint pain, urticaria, complement low; different profile","Lymphoma — lymphadenopathy + atypical cells, but drug timing and eosinophilia fit DRESS","Drug-induced hypersensitivity vasculitis — palpable purpura, different histology"],
  "coachFinal": "Diagnosis: DRESS syndrome, allopurinol-induced. Key learning: (1) DRESS RegiSCAR criteria: hospitalized + suspected drug reaction + ≥3 of: fever >38.5°C, lymphadenopathy ≥2 sites, atypical lymphocytes, eosinophilia >700 or >10%, skin involvement >50% BSA, ≥1 organ involved. Score 4+ = probable, 5+ = definite. (2) Latency: 2-8 weeks after drug initiation — makes the causative drug harder to identify. Allopurinol is the #1 cause in the US/Europe; carbamazepine and phenytoin common too. (3) HHV-6 reactivation: occurs in ~60% of DRESS patients — the reactivated herpesvirus amplifies the immune response. HHV-6 IgM positive is diagnostic support but not required. (4) Steroid tapering: CRITICAL — steroid must be tapered over 6-8 weeks. Rapid discontinuation causes severe rebound reaction. Many patients need a prolonged taper over 3-6 months. (5) HLA-B*58:01 and allopurinol: Asian populations (Han Chinese, Korean, Thai) have 6-8% prevalence of HLA-B*58:01 — strongly associated with allopurinol DRESS and SJS/TEN. Pre-prescription HLA typing is recommended in these populations before starting allopurinol (CPIC guideline)."
},
"dress-syndrome": {
  "diagnosis": "DRESS Syndrome — Carbamazepine-Induced, Initial Presentation, Emergency Dermatology and Allergy Evaluation",
  "problems": [
    {"problem":"DRESS syndrome — carbamazepine, initial presentation","icd":"L27.0","onset":"2024","status":"Active","notes":"Sofia Torres, 32F — carbamazepine started 6 weeks ago for trigeminal neuralgia. Fever, rash, facial edema, lymphadenopathy."},
    {"problem":"Facial edema — characteristic of DRESS","icd":"R60.0","onset":"2024","status":"Active","notes":"Facial edema distinguishes DRESS from morbilliform viral exanthem — present in ~75% of DRESS cases."},
    {"problem":"Organ involvement workup — hepatitis and nephritis must be excluded","icd":"L27.0","onset":"2024","status":"Active","notes":"LFTs and creatinine must be checked. Even if normal at presentation, organ involvement can develop over days."}
  ],
  "medications": [
    {"name":"STOP carbamazepine immediately","sig":"Causative drug. Permanent discontinuation. Document allergy — cross-reactivity with other aromatic anticonvulsants (phenytoin, phenobarbital, lamotrigine) is possible.","prescriber":"Neurology/Allergy","start":"DISCONTINUE","refills":0,"status":"DISCONTINUED"},
    {"name":"Prednisone 1mg/kg/day — systemic steroid","sig":"Systemic steroid for organ protection. Taper slowly over 6-8+ weeks.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active"},
    {"name":"Alternative anticonvulsant — gabapentin or oxcarbazepine (under supervision)","sig":"Trigeminal neuralgia alternative. Oxcarbazepine has some aromatic ring cross-reactivity risk — use gabapentin or pregabalin as safer alternatives. Neurology guidance required.","prescriber":"Neurology","start":"2024","refills":3,"status":"Active — transition"}
  ],
  "labs": [{"date":"11/2024","panel":"DRESS Initial Workup","results":[
    {"test":"Eosinophil count","value":"2.8","unit":"K/μL","ref":"<0.5","flag":"H"},
    {"test":"ALT","value":"186","unit":"U/L","ref":"7-56","flag":"H"},
    {"test":"AST","value":"152","unit":"U/L","ref":"10-40","flag":"H"},
    {"test":"Creatinine","value":"1.1","unit":"mg/dL","ref":"0.7-1.3","flag":""},
    {"test":"Atypical lymphocytes","value":"9","unit":"%","ref":"<5%","flag":"H"},
    {"test":"CBC — WBC","value":"18.4","unit":"K/μL","ref":"4.5-11","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["DRESS syndrome — carbamazepine, 6-week latency (correct)","Mononucleosis — EBV; can cause similar picture but drug timing diagnostic","Drug rash without systemic involvement — no eosinophilia or organ involvement","SJS/TEN — epidermal detachment, mucosal blistering; look for Nikolsky sign","Viral exanthem — atypical lymphocytes possible but eosinophilia argues against","Adult Still's disease — quotidian fever, salmon-colored rash, arthritis; no drug exposure"],
  "coachFinal": "Diagnosis: DRESS — carbamazepine-induced. Key learning: (1) Aromatic anticonvulsant cross-reactivity: carbamazepine, phenytoin, phenobarbital, oxcarbazepine — share an aromatic ring structure and can cross-react in immune-mediated reactions (~40-58% cross-reactivity risk). After DRESS with carbamazepine, these agents should be avoided. Gabapentin, pregabalin, lamotrigine (use cautiously — also causes DRESS but different mechanism), valproate are generally safer alternatives. (2) Facial edema is distinctive: present in ~75% of DRESS and helps distinguish it from viral exanthems and other drug rashes. (3) The 'DRESS incubation': 2-8 week latency after drug initiation. If a patient develops fever + rash + eosinophilia 2-8 weeks after starting a new drug — DRESS until proven otherwise. (4) Serial organ monitoring: LFTs and creatinine can be normal initially and worsen over days. Monitor every 2-3 days during the first 2 weeks even if initial values are normal. (5) Long-term complications: hypothyroidism develops in ~20% of DRESS patients months after the reaction — Hashimoto's thyroiditis is a delayed immune sequela. Check TSH at 3-6 months post-resolution."
},
"eoe-adult-v2": {
  "diagnosis": "Eosinophilic Esophagitis — Adult, Food Impaction Presenting Event, Dietary Elimination and PPI Trial",
  "problems": [
    {"problem":"Eosinophilic esophagitis — EGD-confirmed","icd":"K20.0","onset":"2024","status":"Active","notes":"Derek Walsh, 34M — recurrent dysphagia to solids x2 years, food impaction last week. Biopsy: >15 eos/hpf."},
    {"problem":"Esophageal stricture — fibrostenotic EoE complication","icd":"K22.2","onset":"2024","status":"Active","notes":"EGD: rings, furrows, white exudate. Mild stricture. Dilation performed at same session."},
    {"problem":"Atopic comorbidities — asthma, allergic rhinitis","icd":"J45.909","onset":"2015","status":"Active","notes":"EoE is an atopic disease — 70-80% have concurrent atopic conditions. Allergy referral for food trigger testing."}
  ],
  "medications": [
    {"name":"Fluticasone 880mcg swallowed (not inhaled) BID — topical esophageal steroid","sig":"Swallow the MDI puff — do NOT inhale. Topical steroid for esophageal eosinophilic inflammation. Do not eat/drink x30 min.","prescriber":"GI/Allergy","start":"2024","refills":3,"status":"Active"},
    {"name":"Omeprazole 40mg PO BID — PPI trial x8-12 weeks","sig":"PPI-responsive esophageal eosinophilia (PREE) must be excluded. If biopsy normalizes on PPI alone — PPI-REE, not EoE (though increasingly considered a spectrum).","prescriber":"GI","start":"2024","refills":2,"status":"Active — diagnostic trial"},
    {"name":"Six-food elimination diet — concurrent dietary trial","sig":"Eliminate: milk, wheat, egg, soy, tree nuts, seafood. Reintroduce one at a time with EGD between each — identify specific trigger. Milk and wheat are most common triggers.","prescriber":"GI/Dietitian","start":"2024","refills":0,"status":"Active — dietary"}
  ],
  "labs": [{"date":"11/2024","panel":"EoE Workup","results":[
    {"test":"Esophageal biopsy — eosinophils/hpf","value":"42","unit":"eos/hpf","ref":"<15 eos/hpf","flag":"H"},
    {"test":"Peripheral blood eosinophils","value":"0.7","unit":"K/μL","ref":"<0.5","flag":"H"},
    {"test":"Total IgE","value":"340","unit":"IU/mL","ref":"<150","flag":"H"},
    {"test":"Wheat-specific IgE","value":"4.2","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Milk-specific IgE","value":"2.1","unit":"kU/L","ref":"<0.35","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"Upper Endoscopy (EGD)","indication":"Dysphagia, food impaction","findings":"Esophageal rings (trachealization), longitudinal furrows, white exudate. Mid-esophageal stricture. Biopsies taken proximal, mid, and distal.","impression":"EoE endoscopic appearance — rings, furrows, exudate. Mild stricture dilated to 16mm. Histology: 42 eos/hpf confirming EoE."}],
  "ddxTargets": ["EoE — recurrent dysphagia, food impaction, >15 eos/hpf on biopsy (correct)","GERD — can cause esophageal eosinophilia but <15 eos/hpf; no rings/furrows","Achalasia — failure of LES relaxation; manometry distinguishes; different dysphagia pattern","Esophageal candidiasis — white plaques but in immunocompromised; biopsy confirms","Pill esophagitis — localized, history of medication use","Hypereosinophilic syndrome — systemic eosinophilia involving multiple organs"],
  "coachFinal": "Diagnosis: EoE, adult. Key learning: (1) EoE diagnostic criteria: symptoms of esophageal dysfunction + ≥15 eosinophils/hpf on proximal AND distal esophageal biopsy + exclusion of secondary causes. Biopsies must be taken from multiple levels — patchy disease can be missed with single-site biopsy. (2) Classic endoscopic features (EREFS score): Edema (loss of vascular pattern), Rings (fixed rings = fibrostenotic), Exudate (white specks), Furrows (longitudinal), Stricture. EoE can have a normal-appearing esophagus endoscopically (~10%) — biopsies are essential regardless of appearance. (3) Swallowed vs inhaled steroid: fluticasone must be swallowed (puffed into mouth, swallowed without inhaling) — the goal is topical esophageal mucosal contact. Budesonide slurry (oral viscous budesonide) is an alternative with better mucosal contact. Do not eat or drink for 30 minutes after dosing. (4) Dietary therapy: six-food elimination (milk, wheat, egg, soy, tree nuts, seafood) achieves histologic remission in ~70%. Milk and wheat are triggers in ~60-70% — targeted elimination after food testing is an alternative to empiric six-food. Lifelong dietary management vs medication are both valid approaches. (5) Dilation: for strictures causing significant symptoms — treats the mechanical complication but does not treat the underlying inflammation. Inflammation management prevents recurrent stricture."
},
"eoe-pediatric-v2": {
  "diagnosis": "Eosinophilic Esophagitis — Pediatric, Feeding Refusal and Growth Failure, Milk Elimination Initiated",
  "problems": [
    {"problem":"EoE — pediatric presentation, confirmed on biopsy","icd":"K20.0","onset":"2024","status":"Active","notes":"Jaylen Carter, 6M — feeding refusal, arching, irritability with feeds. Biopsy: 28 eos/hpf. Exclusively breastfed."},
    {"problem":"Growth failure — weight at 3rd percentile, crossing percentile lines","icd":"R62.51","onset":"2024","status":"Active","notes":"Birth weight 50th percentile — now 3rd. Feeding pain and volume limitation driving growth impairment."},
    {"problem":"Maternal diet modification — breastfeeding infant with EoE","icd":"K20.0","onset":"2024","status":"Active","notes":"Breast milk EoE driven by maternal dietary antigens. Mother begins milk elimination first."}
  ],
  "medications": [
    {"name":"Maternal milk elimination — breastfed infant EoE","sig":"Mother eliminates all dairy products from diet x4-6 weeks. If improvement — milk is the trigger. Reintroduce with monitoring.","prescriber":"GI/Allergy","start":"2024","refills":0,"status":"Active"},
    {"name":"Omeprazole 0.7mg/kg/day PO — PPI trial","sig":"Split dose BID. PPI trial concurrent with dietary intervention.","prescriber":"Pediatric GI","start":"2024","refills":2,"status":"Active"},
    {"name":"Thickened feeds or positioning modifications — feeding therapy","sig":"Thickening feeds with rice cereal reduces reflux symptoms. OT/feeding therapy referral for feeding aversion.","prescriber":"Pediatric GI/OT","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Pediatric EoE Workup","results":[
    {"test":"Esophageal biopsy — eos/hpf","value":"28","unit":"eos/hpf","ref":"<15","flag":"H"},
    {"test":"Peripheral eosinophils","value":"0.9","unit":"K/μL","ref":"<0.5","flag":"H"},
    {"test":"Total IgE","value":"28","unit":"IU/mL","ref":"<10 for age","flag":"H"},
    {"test":"Cow's milk protein IgE (RAST)","value":"2.4","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Iron","value":"42","unit":"mcg/dL","ref":"50-120","flag":"L"}
  ]}],
  "imaging": [{"date":"11/2024","study":"Upper Endoscopy — Pediatric","indication":"Feeding refusal, growth failure, rule out EoE","findings":"Infant esophagus — subtle pallor, mild edema. No rings (infants may not develop rings typical of adults). Biopsies from proximal, mid, distal esophagus.","impression":"Histologic EoE confirmed — 28 eos/hpf. Age-appropriate absence of rings. Dietary intervention initiated."}],
  "ddxTargets": ["EoE — pediatric, milk-protein trigger, feeding refusal (correct)","GERD — can cause esophageal eosinophilia but <15 eos/hpf; overlaps clinically","Cow's milk protein allergy (CMPA) — non-IgE-mediated GI allergy; different workup, proctocolitis vs esophagitis","Celiac disease — gluten, different location (small bowel), different biopsy","Achalasia — older children, different presentation","Eosinophilic gastroenteritis — stomach/bowel involved; check gastric biopsies"],
  "coachFinal": "Diagnosis: pediatric EoE, breastfeeding infant. Key learning: (1) Infant EoE presentation differs from adults: no dysphagia or food impaction (can't report symptoms). Instead: feeding refusal, arching, irritability, vomiting, growth failure — overlaps significantly with GERD. High index of suspicion needed. (2) Breastfed infant mechanism: maternal food antigens (most commonly cow's milk protein, then egg, soy) pass into breast milk → infant ingests → esophageal eosinophilic inflammation. Management = maternal elimination diet, NOT infant formula change. (3) Pediatric endoscopic findings differ: infants often lack the rings/furrows/exudate seen in adults. Normal-appearing esophagus is common — biopsies are essential regardless. (4) OT/feeding therapy: infants who have had painful feeds may develop learned feeding aversion — ongoing feeding refusal even after inflammation treated. Early OT referral prevents prolonged feeding dysfunction. (5) Growth monitoring: EoE is a significant cause of pediatric feeding difficulty and growth faltering. After diagnosis and treatment, expect catch-up growth within 3-6 months if triggers are eliminated and caloric needs met. Iron deficiency from poor intake is common — supplement."
},
"eoe-pediatric": {
  "diagnosis": "Eosinophilic Esophagitis — Pediatric, School-Age Child, Vomiting and Dysphagia, Wheat and Milk Triggers",
  "problems": [
    {"problem":"EoE — school-age child, confirmed on EGD","icd":"K20.0","onset":"2023","status":"Active","notes":"Maya Singh, 9F — vomiting and gagging with solids x18 months. Avoids meats and bread. Biopsy 38 eos/hpf."},
    {"problem":"Food avoidance — behavioral adaptation to swallowing pain","icd":"R63.3","onset":"2023","status":"Active","notes":"Avoiding specific food textures — steak, bread, crackers. Self-protecting against impaction. Nutritional deficit possible."},
    {"problem":"Atopic triad — asthma, eczema, allergic rhinitis all present","icd":"J45.909","onset":"2019","status":"Active","notes":"Concurrent atopy in 70-80% of pediatric EoE. Allergy evaluation ongoing."}
  ],
  "medications": [
    {"name":"Budesonide oral viscous suspension 1mg swallowed BID","sig":"Swallow — do not dilute. Topical esophageal steroid with improved mucosal contact vs MDI. Do not eat/drink x30 min.","prescriber":"Pediatric GI","start":"2024","refills":3,"status":"Active"},
    {"name":"Milk and wheat elimination — targeted 2-food elimination","sig":"Eliminate milk and wheat — most common EoE triggers in children. Reintroduce individually with repeat EGD between each.","prescriber":"GI/Dietitian","start":"2024","refills":0,"status":"Active"},
    {"name":"Omeprazole 20mg PO daily — PPI concurrent","sig":"PPI trial concurrent with dietary therapy. Reassess on EGD in 8-12 weeks.","prescriber":"Pediatric GI","start":"2024","refills":2,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"EoE Workup — Pediatric","results":[
    {"test":"Esophageal biopsy eos/hpf","value":"38","unit":"eos/hpf","ref":"<15","flag":"H"},
    {"test":"Peripheral eosinophils","value":"1.1","unit":"K/μL","ref":"<0.5","flag":"H"},
    {"test":"Total IgE","value":"480","unit":"IU/mL","ref":"<150","flag":"H"},
    {"test":"Wheat IgE","value":"6.4","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Milk IgE (casein)","value":"3.8","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Peanut IgE","value":"0.8","unit":"kU/L","ref":"<0.35","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"EGD — Pediatric","indication":"Chronic vomiting, dysphagia, food avoidance","findings":"Esophageal rings (trachealization), furrows, white exudate — classic EoE triad. No stricture. Biopsies: 38 eos/hpf throughout.","impression":"EoE confirmed histologically and endoscopically. No stricture requiring dilation. Dietary and topical steroid therapy initiated."}],
  "ddxTargets": ["EoE — wheat and milk triggers, dysphagia and vomiting in child (correct)","GERD — common in children, but <15 eos/hpf; rings and furrows not typical of GERD","Achalasia — different motility pattern, LES dilation on manometry","Esophageal foreign body — chronic, not acute; no foreign body on imaging","Functional dysphagia — exclusion diagnosis after negative organic workup","Celiac disease — gluten, but small bowel location; can co-exist with EoE"],
  "coachFinal": "Diagnosis: pediatric EoE, wheat and milk triggers. Key learning: (1) Food trigger pattern in pediatric EoE: milk (most common, ~50-60%), wheat (~50%), egg, soy, tree nuts, seafood. Testing (IgE, skin prick) has poor predictive value for EoE — dietary elimination and EGD reassessment is more reliable than serology-guided elimination. (2) Food avoidance behavior: children often self-identify which foods cause pain and avoid them — leading to missed diagnosis as 'picky eating.' A history of texture-specific avoidance (tough meats, bread, crackers) in an atopic child = EoE until proven otherwise. (3) Budesonide oral viscous suspension vs fluticasone MDI: budesonide suspension has better esophageal mucosal contact — preferred in pediatric patients who can swallow it. Fluticasone MDI (puffed and swallowed) is an alternative. (4) Reintroduction protocol: eliminate 2-6 foods → EGD at 8-12 weeks to confirm histologic remission → reintroduce one food at a time → EGD after each reintroduction to identify which food caused relapse. The process takes 1-2 years but identifies specific triggers allowing a less restrictive long-term diet. (5) EoE is a chronic, relapsing condition — unlike food allergy in some children, EoE does not typically resolve with age. Long-term management plan needed."
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
print(f"\nBatch 12: {done}/{len(ENRICHMENTS)} enriched")
