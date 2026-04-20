#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"abpa-aspergillus": {
  "diagnosis": "Allergic Bronchopulmonary Aspergillosis (ABPA)",
  "problems": [
    {"problem":"ABPA — recurrent infiltrates, elevated IgE, eosinophilia","icd":"B44.1","onset":"2019","status":"Active","notes":"Maria Santos, 34F — poorly controlled asthma since childhood, 3 pneumonias in 2 years. IgE 2400, eosinophils 14%. CT: bilateral upper lobe bronchiectasis with mucus plugging. Aspergillus-specific IgE positive."},
    {"problem":"Moderate-severe asthma — baseline FEV1 62%","icd":"J45.40","onset":"2015","status":"Active","notes":"Asthma worsening over 2 years correlates with ABPA progression."},
    {"problem":"Central bronchiectasis — bilateral upper lobes","icd":"J47.9","onset":"2020","status":"Active","notes":"High-attenuation mucus plugs on CT = pathognomonic for ABPA. Irreversible structural damage."}
  ],
  "medications": [
    {"name":"Prednisone 0.5mg/kg/day (40mg) x2 weeks then taper","sig":"Induction with systemic corticosteroids suppresses immune-mediated inflammation. Taper over 3-6 months guided by IgE levels.","prescriber":"Pulmonology","start":"2024","refills":0,"status":"Active — induction"},
    {"name":"Itraconazole 200mg BID x4 months","sig":"Antifungal reduces Aspergillus burden → reduces ongoing immune stimulation. Allows steroid dose reduction. Monitor LFTs.","prescriber":"Pulmonology","start":"2024","refills":1,"status":"Active — steroid-sparing"},
    {"name":"High-dose ICS + LABA — fluticasone/salmeterol","sig":"Maintenance asthma therapy. Continue throughout treatment.","prescriber":"Pulmonology","start":"2019","refills":3,"status":"Active"}
  ],
  "labs": [{"date":"03/2024","panel":"ABPA Diagnostic Panel","results":[
    {"test":"Total serum IgE","value":"2400","unit":"IU/mL","ref":"<100","flag":"H"},
    {"test":"Aspergillus-specific IgE","value":"Positive 4+ (>3.5 kU/L)","unit":"","ref":"Negative","flag":"H"},
    {"test":"Eosinophil count","value":"1.4","unit":"K/μL (14%)","ref":"<0.5","flag":"H"},
    {"test":"Aspergillus skin test","value":"Positive — immediate wheal/flare","unit":"","ref":"Negative","flag":"H"},
    {"test":"Precipitating Aspergillus antibodies","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"FEV1","value":"62","unit":"% predicted","ref":">80%","flag":"L"}
  ]}],
  "imaging": [{"date":"03/2024","study":"HRCT Chest","findings":"Bilateral upper lobe bronchiectasis, central distribution. High-attenuation mucus plugs in right upper lobe (pathognomonic for ABPA). No cavitation. No pleural effusion.","impression":"Findings consistent with ABPA. Central bronchiectasis with mucus plugging."}],
  "ddxTargets": ["ABPA (correct)","Simple asthma — cannot explain bronchiectasis, elevated IgE, positive Aspergillus sensitization","Invasive aspergillosis — immunocompetent patient, not invasive; classic ABPA pattern","CF — check sweat chloride; can coexist; ABPA is common complication of CF","Eosinophilic granulomatosis with polyangiitis (EGPA) — ANCA pattern, systemic vasculitis; different","Hypersensitivity pneumonitis — different antigen source, IgG not IgE mechanism"],
  "coachFinal": "Diagnosis: ABPA. Key learning: (1) ABPA diagnostic criteria (modified Rosenberg-Patterson): asthma + Aspergillus sensitization (skin test or IgE) + elevated total IgE (>1000 IU/mL) + eosinophilia + central bronchiectasis + pulmonary infiltrates. Not all required simultaneously. (2) Pathophysiology: Aspergillus colonizes airways → IgE-mediated (Type I) + immune complex (Type III) hypersensitivity → mucus plugging → bronchiectasis → fibrosis. (3) High-attenuation mucus plugs on CT are essentially pathognomonic — high-density mucus from eosinophilic plugging is unique to ABPA. (4) Treatment goal: suppress immune response with corticosteroids + reduce fungal burden with itraconazole. Serial IgE monitoring tracks treatment response — IgE should fall ≥35% within 6-8 weeks of treatment. (5) Staging: Stage I (acute), II (remission), III (recurrent exacerbation), IV (corticosteroid-dependent asthma), V (fibrotic lung disease). Treatment strategy differs by stage."
},
"acne-management": {
  "diagnosis": "Severe Nodular/Cystic Acne — Isotretinoin Candidate",
  "problems": [
    {"problem":"Severe inflammatory nodulocystic acne — IGA 4","icd":"L70.0","onset":"2021","status":"Active","notes":"Tyler Brooks, 19M — forehead, cheeks, chin, upper back. 12+ nodules/cysts. Deep scarring developing. Failed 3 months doxycycline + benzoyl peroxide + adapalene."},
    {"problem":"Scarring — early atrophic scars bilateral cheeks","icd":"L90.5","onset":"2023","status":"Active","notes":"Active scarring from cystic lesions. Isotretinoin is the only treatment that prevents further scar development."},
    {"problem":"Psychological impact — avoiding social situations","icd":"F32.9","onset":"2023","status":"Active","notes":"PHQ-9 6 (mild). Monitor mood on isotretinoin. Acne itself causes depression independent of isotretinoin."}
  ],
  "medications": [
    {"name":"Isotretinoin 0.5mg/kg/day → 1mg/kg/day — 5-6 month course","sig":"Target cumulative dose 120-150mg/kg. iPLEDGE program mandatory. Monthly visits, labs, and pregnancy tests (females). Start 0.5mg/kg x1 month then escalate if tolerated.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active — iPLEDGE"},
    {"name":"Lip balm + gentle non-comedogenic moisturizer — daily","sig":"Mucocutaneous dryness is universal. Prevents cheilitis (most common reason patients want to stop).","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active — supportive"},
    {"name":"Sunscreen SPF 30+ — daily","sig":"Photosensitivity from isotretinoin. Avoid prolonged sun exposure.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"Isotretinoin Baseline (iPLEDGE)","results":[
    {"test":"Fasting lipid panel — triglycerides","value":"142","unit":"mg/dL","ref":"<150","flag":""},
    {"test":"LFTs — ALT","value":"22","unit":"U/L","ref":"7-56","flag":""},
    {"test":"CBC — WBC","value":"7.2","unit":"K/μL","ref":"4.5-11","flag":""},
    {"test":"Pregnancy test (urine hCG)","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"IGA (Investigator Global Assessment)","value":"4/5","unit":"","ref":"0 = clear","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Severe nodulocystic acne — isotretinoin (correct)","Continue topical therapy — failed; IGA 4 with scarring requires systemic isotretinoin","Oral spironolactone first-line (males) — not indicated in males; works via anti-androgenic mechanism","Intralesional triamcinolone only — adjunct for individual cysts, not definitive therapy","Acne rosacea — different morphology, location, age pattern; no comedones","Gram-negative folliculitis — complication of prolonged antibiotic use; culture would distinguish"],
  "coachFinal": "Diagnosis: severe nodulocystic acne — isotretinoin candidate. Key learning: (1) Isotretinoin is the only treatment that produces long-term remission in severe acne by targeting all four pathogenic factors: sebum production (↓90%), C. acnes colonization, follicular keratinization, and inflammation. (2) iPLEDGE requirements: two forms of contraception (females), monthly pregnancy tests, liver function tests, lipid panel before starting and monthly. (3) Cumulative dose determines remission rate: 120-150mg/kg = ~70-80% chance of permanent clearance. Doses <100mg/kg have higher relapse rates. (4) Common side effects: cheilitis (universal), xerosis, epistaxis, myalgias, triglyceride elevation. Rare: pseudotumor cerebri (avoid tetracyclines simultaneously), IBD signal (controversial, not causally proven). (5) Mental health monitoring: acne itself causes significant depression and anxiety. Monitor PHQ-9 at each visit; the isotretinoin-depression link is debated and the net mental health effect after clearing severe acne is often positive."
},
"acute-anterior-uveitis": {
  "diagnosis": "Acute Anterior Uveitis (HLA-B27-Associated, Recurrent) in Ankylosing Spondylitis",
  "problems": [
    {"problem":"Acute anterior uveitis — left eye, flare #3","icd":"H20.011","onset":"2021","status":"Active","notes":"James Rivera, 34M — HLA-B27+, ankylosing spondylitis diagnosed 2019. Sudden left eye pain, photophobia, vision blurring. Ciliary flush. Slit lamp: 3+ cells, fibrin, flare."},
    {"problem":"Ankylosing spondylitis — NSAID-managed","icd":"M45.9","onset":"2019","status":"Active","notes":"HLA-B27 positive. Third uveitis episode in 3 years. Poor systemic disease control increases uveitis frequency."},
    {"problem":"Posterior synechiae — left eye (from prior episodes)","icd":"H21.511","onset":"2022","status":"Active","notes":"Adhesions between iris and lens from prior untreated inflammation. Risk factor for secondary glaucoma."}
  ],
  "medications": [
    {"name":"Prednisolone acetate 1% — 1 drop q1h initially, taper over 4-6 weeks","sig":"Topical corticosteroid. Frequency depends on cell count response. Taper guided by slit-lamp examination — do NOT taper based on symptoms alone.","prescriber":"Ophthalmology","start":"2024","refills":1,"status":"Active — acute flare"},
    {"name":"Cyclopentolate 1% BID — cycloplegia","sig":"Dilates pupil, prevents posterior synechiae formation, relieves ciliary spasm (photophobia). Must continue while active inflammation present.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active"},
    {"name":"Adalimumab (Humira) — rheumatology referral for TNF inhibitor","sig":"For recurrent/refractory HLA-B27 uveitis — reduces flare frequency. Addresses both AS and uveitis. Rheumatology coordinates.","prescriber":"Rheumatology/Ophthalmology","start":"2024","refills":2,"status":"Initiated"}
  ],
  "labs": [{"date":"04/2024","panel":"Uveitis Workup","results":[
    {"test":"HLA-B27","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"IOP left eye","value":"14","unit":"mmHg","ref":"10-21","flag":""},
    {"test":"Visual acuity left","value":"20/60","unit":"","ref":"20/20","flag":"H"},
    {"test":"Cells in AC (slit lamp)","value":"3+","unit":"(11-30 cells/HPF)","ref":"0","flag":"H"},
    {"test":"ESR","value":"42","unit":"mm/hr","ref":"<20","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["HLA-B27 anterior uveitis in AS (correct)","Acute angle-closure glaucoma — mid-dilated fixed pupil, IOP >30; not present here","Herpetic anterior uveitis — unilateral, elevated IOP, corneal dendrites; check history","Sarcoid uveitis — granulomatous KPs, systemic features; chest imaging","Behçet disease — bilateral, posterior involvement, oral/genital ulcers; different pattern","Reactive arthritis uveitis — HLA-B27+, recent infection trigger; different systemic context"],
  "coachFinal": "Diagnosis: HLA-B27 anterior uveitis in AS. Key learning: (1) HLA-B27 is present in ~8% of the general population but >90% of AS patients. Uveitis occurs in 25-40% of AS patients and is the most common extra-articular manifestation. (2) Classic HLA-B27 uveitis: acute, unilateral (alternating eyes), anterior, non-granulomatous. Rapid onset, responds well to topical steroids but recurs. (3) Cycloplegia (cyclopentolate) serves two purposes: prevents posterior synechiae formation AND provides analgesic relief from ciliary spasm (photophobia). Never omit. (4) Posterior synechiae are the most important structural complication — adhesions between iris and lens → irregular pupil, angle closure, secondary glaucoma. Prompt treatment prevents them. (5) TNF inhibitor indication: recurrent uveitis (≥3 episodes/2 years) or bilateral involvement despite topical therapy → adalimumab is FDA-approved for non-infectious uveitis. Addresses both AS and reduces uveitis recurrence frequency."
},
"acute-aortic-dissection": {
  "diagnosis": "Acute Aortic Dissection (Stanford Type A — Ascending Aorta)",
  "problems": [
    {"problem":"Acute Type A aortic dissection — surgical emergency","icd":"I71.01","onset":"2024","status":"Active","notes":"Richard Chen, 58M — sudden tearing chest/back pain, BP differential right > left arm. CT: dissection flap ascending aorta extending to arch. Pericardial effusion."},
    {"problem":"Hypertension — poorly controlled, MAR 180s/90s","icd":"I10","onset":"2015","status":"Active","notes":"Primary risk factor. BP differential on exam is a red flag sign."},
    {"problem":"Aortic regurgitation — acute from root involvement","icd":"I35.1","onset":"2024","status":"Active","notes":"Diastolic murmur on exam. Root involvement in Type A dissection can cause acute AR and hemodynamic compromise."}
  ],
  "medications": [
    {"name":"Esmolol IV infusion — HR target <60 bpm","sig":"Heart rate control is FIRST priority — reducing dP/dt (rate of pressure rise). Start before vasodilators. Target HR <60.","prescriber":"CT Surgery/ICU","start":"2024","refills":0,"status":"Active — ICU"},
    {"name":"Nitroprusside IV — SBP target 100-120 mmHg","sig":"After heart rate is controlled. Never give nitroprusside alone without beta-blockade — reflex tachycardia worsens dissection.","prescriber":"CT Surgery/ICU","start":"2024","refills":0,"status":"Active — ICU"},
    {"name":"Emergent CT surgery — within 24 hours","sig":"Type A dissection has 1-2% mortality per hour without surgery. Emergent open repair. No medical management is definitive for Type A.","prescriber":"CT Surgery","start":"2024","refills":0,"status":"EMERGENT"}
  ],
  "labs": [{"date":"04/2024","panel":"Aortic Dissection Workup","results":[
    {"test":"D-dimer","value":"6800","unit":"ng/mL","ref":"<500","flag":"H"},
    {"test":"Troponin I","value":"0.08","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"BP right arm / left arm","value":"186/104 / 158/96","unit":"mmHg","ref":"<10mmHg differential","flag":"H"},
    {"test":"Creatinine","value":"1.4","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Hgb","value":"11.2","unit":"g/dL","ref":"13.5-17.5","flag":"L"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Aortography with Contrast","findings":"Dissection flap from aortic root through ascending aorta extending to the arch. True and false lumen visible. Pericardial effusion. No branch vessel involvement.","impression":"Acute Stanford Type A aortic dissection. Emergent surgical consultation required."}],
  "ddxTargets": ["Acute Type A aortic dissection (correct)","STEMI — troponin elevation here from coronary ostia involvement; ECG can be normal in dissection","Acute PE — may cause chest/back pain; CT confirms aortic dissection, not PE","Hypertensive emergency without dissection — pain character + BP differential + CT distinguish","Esophageal rupture (Boerhaave) — usually post-emetic; CXR shows mediastinal air/effusion","Pericarditis — no tearing pain, BP differential, or CT flap; diffuse ST elevation pattern"],
  "coachFinal": "Diagnosis: Stanford Type A aortic dissection. Key learning: (1) Classic presentation: sudden-onset 'tearing' or 'ripping' chest/back pain at maximum intensity at onset (vs ACS which crescendos). Pulse differential or BP differential between arms (>20 mmHg) is a red flag sign with high specificity. (2) Stanford classification: Type A = involves ascending aorta → emergent surgery. Type B = descending only → medical management unless complicated. DeBakey I (whole aorta), II (ascending only), III (descending only). (3) Initial management — HR first, then BP: esmolol to HR <60 bpm BEFORE nitroprusside. Reflex tachycardia from vasodilator alone increases dP/dt and worsens dissection. Mnemonic: 'Heart before pressure.' (4) Complications of Type A: aortic regurgitation (root involvement), coronary ostia involvement (STEMI pattern), pericardial effusion/tamponade, stroke (arch vessel involvement), paraplegia (spinal artery), mesenteric/renal ischemia. (5) D-dimer: elevated in dissection (as in this case) — not specific, but a negative D-dimer in a low-pretest probability patient can help rule out dissection (high sensitivity, low specificity)."
},
"acute-cholecystitis": {
  "diagnosis": "Acute Calculous Cholecystitis (Tokyo Grade II — Moderate)",
  "problems": [
    {"problem":"Acute cholecystitis — Tokyo Grade II (moderate)","icd":"K81.0","onset":"2024","status":"Active","notes":"Susan Park, 52F — RUQ pain 12 hours, Murphy sign positive, fever 38.6°C, WBC 14.2. Ultrasound: gallstones, wall thickening, pericholecystic fluid."},
    {"problem":"Cholelithiasis — multiple stones","icd":"K80.20","onset":"2022","status":"Active","notes":"Known gallstones. Classic 'fat, female, forty, fertile, fair' but applies to less than half of cases."},
    {"problem":"Mild transaminase elevation — possible CBD stone","icd":"K80.50","onset":"2024","status":"Active","notes":"ALT 68, AST 72 — biliary pattern. Check direct bilirubin and consider MRCP to rule out choledocholithiasis."}
  ],
  "medications": [
    {"name":"Piperacillin-tazobactam 3.375g IV q6h","sig":"Empiric coverage for gram-negative biliary pathogens (E. coli, Klebsiella). Tokyo guidelines recommend antibiotics for Grade II and III.","prescriber":"Surgery/Medicine","start":"2024","refills":0,"status":"Active — IV"},
    {"name":"IV hydration — LR 125mL/hr","sig":"NPO for potential surgery. Fluid resuscitation.","prescriber":"Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Laparoscopic cholecystectomy — within 24-72 hours","sig":"Tokyo Grade II: early laparoscopic cholecystectomy preferred over interval. 72-hour window associated with lowest conversion-to-open rate.","prescriber":"Surgery","start":"2024","refills":0,"status":"Scheduled — 24h"}
  ],
  "labs": [{"date":"04/2024","panel":"Cholecystitis Workup","results":[
    {"test":"WBC","value":"14.2","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Total bilirubin","value":"1.8","unit":"mg/dL","ref":"0.2-1.2","flag":"H"},
    {"test":"Direct bilirubin","value":"0.9","unit":"mg/dL","ref":"0-0.3","flag":"H"},
    {"test":"ALT","value":"68","unit":"U/L","ref":"7-56","flag":"H"},
    {"test":"Lipase","value":"42","unit":"U/L","ref":"10-140","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"Right Upper Quadrant Ultrasound","findings":"Multiple echogenic gallstones with posterior shadowing. Gallbladder wall thickening 6mm. Pericholecystic fluid. Sonographic Murphy sign positive.","impression":"Acute calculous cholecystitis. No common bile duct dilation on ultrasound."}],
  "ddxTargets": ["Acute cholecystitis — Tokyo Grade II (correct)","Choledocholithiasis — elevated direct bilirubin warrants MRCP; can coexist","Acute pancreatitis — lipase normal, pain epigastric not RUQ; different",  "Peptic ulcer disease — no stones, different pain location and character","Hepatic abscess — different fever pattern, no Murphy sign; CT distinguishes","Fitz-Hugh-Curtis syndrome — young women, right shoulder tip, sexual history"],
  "coachFinal": "Diagnosis: acute cholecystitis — Tokyo Grade II. Key learning: (1) Tokyo Guidelines grading: Grade I (mild) = no organ dysfunction, responds to medical therapy. Grade II (moderate) = WBC >18, duration >72h, significant local inflammation. Grade III (severe) = organ dysfunction (hypotension, renal failure, jaundice). Grade determines urgency of surgery. (2) Murphy sign: inspiratory arrest on deep palpation of RUQ — high specificity for cholecystitis. Sonographic Murphy sign on ultrasound has similar value. (3) Early vs interval cholecystectomy: for Grade I/II, early laparoscopic cholecystectomy within 72 hours is preferred — lower conversion rate than delayed (>72h) and shorter hospital stay. The 'best timing window' is <24 hours from symptom onset. (4) CBD stone evaluation: elevated direct bilirubin + transaminases warrants MRCP before cholecystectomy. Preoperative ERCP if CBD stone confirmed. (5) Acalculous cholecystitis: occurs in critically ill ICU patients (sepsis, trauma, burns, TPN). Higher morbidity — often gangrenous."
},
"acute-compartment-syndrome": {
  "diagnosis": "Acute Compartment Syndrome — Anterior Compartment, Right Leg (Post-Tibial Fracture)",
  "problems": [
    {"problem":"Acute compartment syndrome — anterior compartment R leg","icd":"M79.A21","onset":"2024","status":"Active","notes":"Mike Johnson, 28M — tibial fracture MVA 6 hours ago. Worsening pain out of proportion, pain with passive toe extension, tense compartment. Compartment pressure 42 mmHg."},
    {"problem":"Tibial shaft fracture — R leg, awaiting repair","icd":"S82.201A","onset":"2024","status":"Active","notes":"Definitive fracture repair deferred pending fasciotomy. Fracture fixation after compartment pressure normalizes."},
    {"problem":"Vascular status — dorsalis pedis present but weak","icd":"M79.A21","onset":"2024","status":"Active","notes":"Preserved Doppler signal does not rule out compartment syndrome — compartment pressure can be elevated with intact pulses early."}
  ],
  "medications": [
    {"name":"Emergency four-compartment fasciotomy — NOW","sig":"Indicated: compartment pressure >30 mmHg OR within 30 mmHg of diastolic BP (ΔP <30). This patient ΔP = 62-42 = 20 mmHg → IMMEDIATE fasciotomy. Every hour of delay risks permanent muscle necrosis.","prescriber":"Orthopedic Surgery","start":"2024","refills":0,"status":"EMERGENT"},
    {"name":"IV morphine 4mg q4h — analgesia","sig":"Pain out of proportion to injury is the cardinal symptom. Adequate analgesia while arranging fasciotomy.","prescriber":"Emergency Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Remove constrictive dressings/splints — IMMEDIATELY","sig":"First intervention: remove all circumferential dressings. Temporary pressure reduction while preparing for fasciotomy.","prescriber":"Emergency Medicine","start":"2024","refills":0,"status":"Done"}
  ],
  "labs": [{"date":"04/2024","panel":"Compartment Syndrome Assessment","results":[
    {"test":"Compartment pressure — anterior compartment","value":"42","unit":"mmHg","ref":"<30 mmHg (fasciotomy threshold)","flag":"H"},
    {"test":"ΔP (diastolic minus compartment pressure)","value":"20","unit":"mmHg","ref":">30 mmHg (safe)","flag":"H"},
    {"test":"CK","value":"4800","unit":"U/L","ref":"<200","flag":"H"},
    {"test":"Creatinine","value":"1.2","unit":"mg/dL","ref":"0.7-1.3","flag":""},
    {"test":"Urine myoglobin","value":"Positive — dark urine","unit":"","ref":"Negative","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"X-Ray Right Tibia/Fibula AP and Lateral","findings":"Mid-shaft tibial fracture, non-comminuted, mild angulation. No vascular calcification. Soft tissue swelling.","impression":"Tibial shaft fracture. Clinical diagnosis of compartment syndrome — compartment pressure measurement is the gold standard."}],
  "ddxTargets": ["Acute compartment syndrome — anterior compartment (correct)","Deep vein thrombosis — calf pain, but no tense compartment, pain with passive stretch","Arterial insufficiency — absent pulses distinguish; compartment syndrome can coexist","Rhabdomyolysis alone — rhabdo IS occurring but compartment syndrome is the driver","Normal post-fracture pain — pain out of proportion + tense compartment + ΔP <30 mmHg = not normal","Infection/cellulitis — too early post-injury; infection risk increases with fasciotomy delay"],
  "coachFinal": "Diagnosis: acute compartment syndrome. Key learning: (1) Six P's: Pain (out of proportion), Pressure (tense compartment), Paresthesias (nerve ischemia), Paralysis (late), Pallor, Pulselessness (very late — do not wait for this). Pain with passive stretch of muscles in the affected compartment is the most sensitive early sign. (2) Compartment pressure thresholds: absolute >30 mmHg OR ΔP (diastolic BP minus compartment pressure) <30 mmHg → fasciotomy indicated. This patient ΔP = 20 mmHg → immediate fasciotomy. (3) Normal pulses do NOT rule out compartment syndrome. Compartment pressure can cause muscle/nerve ischemia before arterial occlusion. Pulses present in >50% of confirmed compartment syndrome cases at presentation. (4) Fasciotomy: four-compartment fasciotomy of the leg (anterior, lateral, deep posterior, superficial posterior). Wounds left open 48-72 hours then closed. (5) Reperfusion injury and rhabdomyolysis: elevated CK (>5000) from muscle necrosis. Monitor urine output (target 1-2 mL/kg/hr), urine myoglobin, creatinine for myoglobinuric AKI."
},
"acute-coronary-syndrome": {
  "diagnosis": "Non-ST-Elevation ACS (NSTEMI — Dyspnea-Predominant, Diabetic Anginal Equivalent)",
  "problems": [
    {"problem":"NSTEMI — dyspnea-predominant, anginal equivalent","icd":"I21.4","onset":"2024","status":"Active","notes":"Dorothy Williams, 67F — T2DM, hypertension, smoker. Dyspnea at rest x3 hours, no chest pain. Diaphoretic. ECG: ST depression V4-V6. Troponin rising."},
    {"problem":"T2DM — predisposes to silent/atypical MI presentation","icd":"E11.9","onset":"2015","status":"Active","notes":"Diabetic neuropathy reduces pain signal → dyspnea, fatigue, nausea as ACS equivalents. High-risk feature."},
    {"problem":"Prior PCI — stent thrombosis risk if antiplatelet stopped","icd":"Z95.5","onset":"2022","status":"Active","notes":"LAD drug-eluting stent placed 2022. Dual antiplatelet continued. In-stent restenosis on differential."}
  ],
  "medications": [
    {"name":"Aspirin 325mg loading then 81mg daily","sig":"Dual antiplatelet loading. COX-1 inhibition prevents thromboxane-mediated platelet aggregation.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active — loading"},
    {"name":"Ticagrelor 180mg loading then 90mg BID","sig":"P2Y12 inhibitor — preferred over clopidogrel for NSTEMI (faster onset, reversible binding, superior outcomes in PLATO trial).","prescriber":"Cardiology","start":"2024","refills":1,"status":"Active — loading"},
    {"name":"Heparin UFH 60 units/kg bolus + infusion","sig":"Anticoagulation prevents further clot propagation. aPTT target 60-100 seconds. Bridge to PCI.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active — infusion"},
    {"name":"Early invasive strategy — cath within 24 hours","sig":"NSTEMI with high TIMI risk score → early PCI within 24 hours (not delayed >72h). TIMI score: age >65, prior CAD, ST deviation, positive troponin, 3+ risk factors.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Scheduled"}
  ],
  "labs": [{"date":"04/2024","panel":"ACS Workup","results":[
    {"test":"Troponin I (high-sensitivity) — first","value":"0.42","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"Troponin I — 3 hours later","value":"2.8","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"ECG","value":"ST depression 1.5mm V4-V6, T-wave inversions","unit":"","ref":"Normal","flag":"H"},
    {"test":"BNP","value":"380","unit":"pg/mL","ref":"<100","flag":"H"},
    {"test":"LDL","value":"142","unit":"mg/dL","ref":"<70 for CAD","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Chest X-Ray","findings":"Mild pulmonary vascular congestion. No frank pulmonary edema. No pneumothorax. Cardiomegaly.","impression":"Pulmonary vascular congestion consistent with elevated LV filling pressures."}],
  "ddxTargets": ["NSTEMI — dyspnea-predominant presentation (correct)","Acute decompensated heart failure — BNP elevated and some congestion, but troponin rise and ECG changes = ACS as the driver","Type 2 MI from demand ischemia — no clear precipitant here; Type 1 from plaque rupture more likely","Pulmonary embolism — may have ST changes; troponin pattern + ECG changes here more consistent with ACS","Unstable angina — no troponin rise; troponin rising = NSTEMI not UA","Esophageal spasm — can mimic angina; no ECG changes or troponin rise expected"],
  "coachFinal": "Diagnosis: NSTEMI — dyspnea-predominant. Key learning: (1) Diabetic anginal equivalents: up to 40% of MIs in diabetic patients present without chest pain. Dyspnea, diaphoresis, fatigue, nausea/vomiting, or syncope are classic anginal equivalents. A high index of suspicion is mandatory for all diabetic patients with acute cardiorespiratory symptoms. (2) NSTEMI vs UA: both have ECG changes without ST elevation. Troponin rise distinguishes NSTEMI (positive) from UA (negative). (3) TIMI Risk Score (0-7): 7 variables (age ≥65, ≥3 CAD risk factors, prior coronary stenosis, ST deviation, ≥2 anginal events in 24h, aspirin use in past 7 days, elevated cardiac markers). Score ≥3 → early invasive strategy. (4) P2Y12 inhibitor choice: ticagrelor > clopidogrel for NSTEMI based on PLATO trial (reduced MACE, no increase in bleeding). Prasugrel used if PCI is definitive. (5) Timing of invasive strategy: immediate (<2h) for very high-risk features (ongoing ischemia, hemodynamic instability, sustained VT). Early (<24h) for high TIMI score. Delayed (<72h) for low-risk."
},
"acute-embolic-limb-ischemia": {
  "diagnosis": "Acute Embolic Limb Ischemia (Rutherford IIb — Immediately Threatened)",
  "problems": [
    {"problem":"Acute limb ischemia — left lower extremity, Rutherford IIb","icd":"I74.3","onset":"2024","status":"Active","notes":"George Martinez, 72M — known AFib, sudden onset cold pulseless left leg 3 hours ago. Pain, pallor, paresthesias, paralysis. Embolus from AF most likely source."},
    {"problem":"Atrial fibrillation — source of embolus, not anticoagulated","icd":"I48.0","onset":"2021","status":"Active","notes":"CHA2DS2-VASc 4. On aspirin only — subtherapeutic. Had refused warfarin due to fall risk concern."},
    {"problem":"Paralysis onset — indicates advanced ischemia","icd":"I74.3","onset":"2024","status":"Active","notes":"Motor deficit indicates muscle ischemia progressing. Rutherford IIb = threatened, requires revascularization within 4-6 hours."}
  ],
  "medications": [
    {"name":"Heparin UFH 100 units/kg IV bolus — IMMEDIATE","sig":"Prevents propagation of thrombus and distal embolization. Start before imaging if clinical diagnosis is clear.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Active — STAT"},
    {"name":"Catheter-directed thrombolysis OR surgical embolectomy","sig":"Rutherford IIb with 3-hour window — surgical embolectomy preferred for embolic ALI (faster than CDT). CDT for thrombotic ALI without motor deficit. Time is muscle.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Emergent — OR"},
    {"name":"Fasciotomy — anticipate","sig":"Reperfusion injury after revascularization → compartment syndrome in >30% of ALI cases. Prophylactic fasciotomy at time of revascularization often indicated.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Anticipate"}
  ],
  "labs": [{"date":"04/2024","panel":"ALI Assessment","results":[
    {"test":"ABI (left)","value":"Not measurable — no Doppler signal","unit":"","ref":"0.9-1.3","flag":"H"},
    {"test":"Doppler — left dorsalis pedis","value":"Absent","unit":"","ref":"Present","flag":"H"},
    {"test":"Lactate","value":"3.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"CK","value":"2400","unit":"U/L","ref":"<200","flag":"H"},
    {"test":"INR","value":"1.1","unit":"","ref":"Not anticoagulated","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Angiogram — Lower Extremity","findings":"Abrupt cutoff of left superficial femoral artery at mid-thigh level. No significant atherosclerotic disease in runoff vessels. Embolus-in-transit pattern.","impression":"Acute embolic occlusion left SFA. No significant underlying peripheral arterial disease. Consistent with cardiac source embolism."}],
  "ddxTargets": ["Acute embolic limb ischemia — Rutherford IIb (correct)","Acute thrombosis on PAD — underlying atherosclerosis would show on CTA; absence suggests embolism","DVT — venous, not arterial; no Homan sign; ABI not affected","Aortic dissection with limb involvement — would show on CTA; usually bilateral","Phlegmasia cerulea dolens — massive DVT with arterial compromise; venous pattern","Ergotamine toxicity — bilateral, diffuse; medication history distinguishes"],
  "coachFinal": "Diagnosis: acute embolic limb ischemia, Rutherford IIb. Key learning: (1) The 6 P's of ALI: Pain, Pallor, Pulselessness, Paresthesias, Paralysis, Poikilothermia (cold). Paresthesias = sensory ischemia (less urgent). Paralysis = motor ischemia = Rutherford IIb (immediately threatened). (2) Rutherford classification guides urgency: I (viable, non-urgent) → CDT or watchful waiting. IIa (marginally threatened) → urgent CDT or surgery. IIb (immediately threatened) → EMERGENT surgery/CDT. III (irreversible) → amputation. (3) Embolic vs thrombotic ALI: embolic = acute onset, no prior claudication, no PAD on CTA, cardiac source (AF, recent MI, endocarditis) → surgical embolectomy preferred. Thrombotic = gradual, history of claudication, PAD on CTA → CDT more appropriate. (4) Heparin immediately: prevents propagation and embolization without waiting for imaging if clinical diagnosis is clear. (5) Reperfusion injury: after revascularization, myoglobin and potassium released from ischemic muscle → AKI, hyperkalemia, compartment syndrome. Watch CK, creatinine; prophylactic fasciotomy often performed at time of revascularization."
},
"acute-hemolytic-transfusion-reaction": {
  "diagnosis": "Acute Hemolytic Transfusion Reaction — ABO Incompatibility",
  "problems": [
    {"problem":"Acute hemolytic transfusion reaction — ABO incompatibility","icd":"T80.310A","onset":"2024","status":"Active","notes":"James Kim, 45M — received 2 units pRBC. 30 minutes into transfusion: fever 39.2°C, rigors, flank pain, hematuria. STOP transfusion immediately."},
    {"problem":"ABO mismatch — clerical error suspected","icd":"T80.310A","onset":"2024","status":"Active","notes":"Most common cause of fatal AHTR is clerical/labeling error — wrong blood to wrong patient. Mandatory incident report."},
    {"problem":"DIC risk — intravascular hemolysis activates coagulation cascade","icd":"D65","onset":"2024","status":"Active","notes":"ABO AHTR triggers DIC via tissue factor release from hemolyzed RBCs. Monitor PT/PTT, fibrinogen, D-dimer."}
  ],
  "medications": [
    {"name":"STOP TRANSFUSION IMMEDIATELY — keep IV access","sig":"Most critical intervention. Do not restart any blood products until blood bank investigation complete. Keep IV line with normal saline.","prescriber":"Nursing/Medicine","start":"STOP","refills":0,"status":"IMMEDIATE"},
    {"name":"IV normal saline — 200-300mL/hr initial","sig":"Maintain urine output >1 mL/kg/hr to prevent hemoglobin precipitation in tubules → AKI. Aggressive hydration is the cornerstone of treatment.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Notify blood bank — return bag + new patient sample","sig":"Repeat crossmatch with new sample. Return implicated unit. Blood bank will investigate for clerical error and repeat compatibility testing.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active — urgent"}
  ],
  "labs": [{"date":"04/2024","panel":"AHTR Workup","results":[
    {"test":"Plasma hemoglobin (free)","value":"Elevated — pink/red plasma","unit":"","ref":"Clear","flag":"H"},
    {"test":"Direct Coombs (DAT)","value":"Positive — IgG + C3d on RBCs","unit":"","ref":"Negative","flag":"H"},
    {"test":"Plasma haptoglobin","value":"Undetectable","unit":"mg/dL","ref":"30-200","flag":"L"},
    {"test":"LDH","value":"2800","unit":"U/L","ref":"100-220","flag":"H"},
    {"test":"Urine — hemoglobinuria","value":"Dark red — positive for Hgb","unit":"","ref":"Clear","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["AHTR — ABO incompatibility (correct)","Febrile non-hemolytic transfusion reaction — fever only, no hemolysis markers, no DIC risk; treat with antipyretic, can restart","Allergic transfusion reaction — urticaria ± bronchospasm, no hemolysis markers; antihistamine ± epinephrine","Bacterial contamination of unit — fever + hypotension but Gram stain/culture of unit distinguishes","Delayed hemolytic reaction — occurs 5-10 days post-transfusion; less acute",  "TRALI — pulmonary infiltrates, not flank pain/hematuria; different pathophysiology"],
  "coachFinal": "Diagnosis: AHTR — ABO incompatibility. Key learning: (1) STOP is the first intervention — immediately, before even calling for help. Even 10mL of incompatible blood can be fatal. Keep IV access to administer saline. (2) ABO incompatibility mechanism: pre-formed IgM antibodies against donor ABO antigens → complement activation → intravascular hemolysis → free hemoglobin → renal tubular precipitation. (3) Triad of symptoms: fever/rigors + flank/back pain (hemoglobin in renal tubules) + hemoglobinuria (dark red urine). In anesthetized patients, only hypotension and hemoglobinuria may be seen. (4) Investigations: free plasma Hgb (pink plasma), haptoglobin (undetectable — consumed binding free Hgb), direct Coombs (positive), urinalysis (hemoglobinuria). (5) AKI prevention: IV NS at 200-300mL/hr to maintain urine output >1mL/kg/hr. Furosemide if oliguric. DIC monitoring: check PT, PTT, fibrinogen, D-dimer every 4-6 hours. Most fatalities are from DIC and AKI, not the hemolysis itself."
},
"acute-ischemic-stroke": {
  "diagnosis": "Acute Ischemic Stroke — Left MCA Territory (Cardioembolic, AF-Related)",
  "problems": [
    {"problem":"Acute ischemic stroke — left MCA territory, NIHSS 16","icd":"I63.411","onset":"2024","status":"Active","notes":"Eleanor Washington, 74F — sudden aphasia, right hemiplegia, gaze deviation. NIHSS 16. CTA: left M1 LVO. Within tPA and thrombectomy window."},
    {"problem":"Atrial fibrillation — cardioembolic source","icd":"I48.11","onset":"2019","status":"Active","notes":"CHA2DS2-VASc 7. On apixaban but took last dose 36 hours ago. Subtherapeutic anticoagulation → cardioembolic stroke."},
    {"problem":"LVO — left M1 occlusion, ASPECTS 8","icd":"I63.411","onset":"2024","status":"Active","notes":"Large vessel occlusion — mechanical thrombectomy indicated regardless of tPA decision."}
  ],
  "medications": [
    {"name":"Alteplase (tPA) 0.9mg/kg IV (max 90mg) — if eligible","sig":"10% bolus, remainder over 60 min. Check eligibility: onset <4.5h, no ICH on CT, BP <185/110, no recent surgery/trauma. BP control before tPA.","prescriber":"Neurology","start":"2024","refills":0,"status":"Active — administered"},
    {"name":"Mechanical thrombectomy — within 24h of LVO","sig":"DAWN/DEFUSE criteria for extended window up to 24h in selected patients. BP target <180/105 post-tPA. Transfer to comprehensive stroke center.","prescriber":"Neurointerventional","start":"2024","refills":0,"status":"Active — procedure"},
    {"name":"BP management — labetalol or nicardipine if >185/110","sig":"BP must be <185/110 BEFORE tPA. Post-tPA target <180/105. Permissive hypertension otherwise — do NOT aggressively lower BP in ischemic stroke without specific indication.","prescriber":"Neurology","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"Stroke Workup","results":[
    {"test":"NIHSS","value":"16","unit":"","ref":"0 = normal","flag":"H"},
    {"test":"CT head — ICH","value":"No hemorrhage. No early ischemic change.","unit":"","ref":"Normal","flag":""},
    {"test":"ASPECTS score","value":"8/10","unit":"","ref":"≥6 = thrombectomy benefit","flag":""},
    {"test":"Blood glucose","value":"142","unit":"mg/dL","ref":"70-140","flag":"H"},
    {"test":"INR (on apixaban)","value":"1.1","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT + CTA Brain and Neck","findings":"No intracranial hemorrhage. No early ischemic changes. ASPECTS 8. Left M1 occlusion confirmed on CTA. No significant cervical stenosis.","impression":"Acute ischemic stroke with left M1 LVO. Eligible for tPA and mechanical thrombectomy."}],
  "ddxTargets": ["Acute ischemic stroke — LVO, cardioembolic (correct)","Hemorrhagic stroke — no blood on CT non-contrast; BP pattern may differ","Todd's paralysis post-seizure — gradual resolution, prior seizure history; CT negative helps distinguish","Complex migraine with aura — younger patient, prior migraines, resolves fully; LVO absent","Hypoglycemic hemiplegia — check glucose immediately in ALL stroke mimics (glucose here is 142)","Brain tumor — subacute onset, edema/mass effect on CT; not acute ictus presentation"],
  "coachFinal": "Diagnosis: acute ischemic stroke — LVO. Key learning: (1) LVO stroke recognition: NIHSS ≥6-10 with gaze deviation, aphasia, hemineglect → activate LVO protocol immediately. Get CTA head/neck with CT non-contrast in one workflow. Time to CTA should be <25 minutes from door arrival. (2) tPA eligibility checklist: BP <185/110 (treat first if needed), no hemorrhage on CT, onset <4.5 hours (or last-known-well), glucose 50-400, no recent major surgery/trauma/bleeding. Check INR if on warfarin (must be <1.7). DOACs: if last dose >48h or factor Xa level undetectable, tPA is generally acceptable. (3) Mechanical thrombectomy indications: LVO (M1/M2, basilar), ASPECTS ≥6, onset <6h (or 6-24h if DAWN/DEFUSE criteria met — salvageable penumbra on perfusion imaging). (4) BP in ischemic stroke: permissive hypertension (up to 220/120) unless tPA (target <185/110 before, <180/105 after) or cardiac source requiring anticoagulation. Aggressive BP reduction reduces cerebral perfusion pressure in penumbra. (5) Hyperglycemia worsens stroke outcomes — correct to 140-180 mg/dL. Hypoglycemia must be ruled out in all stroke mimics (glucose <60 can cause hemiplegia)."
},
"acute-mi-dyspnea": {
  "diagnosis": "Acute STEMI — Dyspnea-Predominant Presentation (Silent MI in Diabetic Patient)",
  "problems": [
    {"problem":"Anterior STEMI — dyspnea-predominant, no chest pain","icd":"I21.09","onset":"2024","status":"Active","notes":"Margaret Lee, 67F — T2DM, hypertension. Acute dyspnea at rest x2 hours, diaphoretic. No chest pain. ECG: ST elevation V1-V4. Diabetic neuropathy → atypical MI presentation."},
    {"problem":"Acute pulmonary edema — from LV dysfunction","icd":"J81.0","onset":"2024","status":"Active","notes":"LAD territory infarct → anterior wall dysfunction → acute LV failure → pulmonary edema. Dyspnea as chief complaint in STEMI."},
    {"problem":"T2DM — anginal equivalent predisposing factor","icd":"E11.65","onset":"2014","status":"Active","notes":"Autonomic neuropathy blunts ischemic pain signal. A1c 9.2% — poorly controlled."}
  ],
  "medications": [
    {"name":"Primary PCI — activate cath lab NOW","sig":"Door-to-balloon target 90 min. Every 30-minute delay increases mortality 7.5%. Do NOT delay PCI for workup — if ECG shows STEMI, activate cath lab.","prescriber":"Cardiology","start":"2024","refills":0,"status":"ACTIVATING"},
    {"name":"Aspirin 325mg + Ticagrelor 180mg — loading doses","sig":"Dual antiplatelet loading before PCI. Aspirin → COX-1 inhibition. Ticagrelor → P2Y12 inhibition. Superior to aspirin alone in PLATO.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Administered"},
    {"name":"Heparin UFH 60 units/kg IV bolus","sig":"Anticoagulation to prevent clot extension. Standard pre-PCI anticoagulation.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active — IV push"}
  ],
  "labs": [{"date":"04/2024","panel":"STEMI Workup","results":[
    {"test":"ECG","value":"ST elevation 3mm V1-V4, reciprocal changes II/III/aVF","unit":"","ref":"Normal","flag":"H"},
    {"test":"Troponin I — first draw","value":"0.12","unit":"ng/mL","ref":"<0.04 (too early for full rise)","flag":"H"},
    {"test":"BNP","value":"520","unit":"pg/mL","ref":"<100","flag":"H"},
    {"test":"CXR","value":"Bilateral pulmonary edema, cardiomegaly","unit":"","ref":"Normal","flag":"H"},
    {"test":"SpO2","value":"89","unit":"% on room air","ref":"≥95%","flag":"L"}
  ]}],
  "imaging": [{"date":"04/2024","study":"ECG + Chest X-Ray","findings":"ECG: ST elevation V1-V4, reciprocal ST depression inferiorly. CXR: bilateral interstitial edema, cardiomegaly.","impression":"Anterior STEMI with acute pulmonary edema. Primary PCI indicated urgently."}],
  "ddxTargets": ["Anterior STEMI — dyspnea-predominant (correct)","Acute decompensated heart failure — BNP elevated and pulmonary edema present, but ECG shows STEMI as the PRIMARY driver of the decompensation","Pulmonary embolism — BNP and troponin can both be elevated; ECG S1Q3T3 vs anterior ST elevation distinguishes","Acute anterior STEMI without dyspnea — dyspnea IS the predominant presentation here; classic 'silent MI'","Hypertensive emergency with pulmonary edema — no ST elevation expected with pure hypertensive emergency","Stress cardiomyopathy (Takotsubo) — preceded by emotional/physical stress; usually in postmenopausal women; similar ECG changes"],
  "coachFinal": "Diagnosis: STEMI — dyspnea-predominant. Key learning: (1) Silent and atypical MI: up to 20-35% of MIs in diabetic patients present without chest pain. Dyspnea (as here), diaphoresis alone, nausea/vomiting, syncope, or simply 'not feeling well' are anginal equivalents. The diabetic patient presenting with acute dyspnea deserves an immediate ECG. (2) ECG is the critical diagnostic step — takes 90 seconds and changes management immediately. Any ST elevation >1mm in ≥2 contiguous leads = STEMI = activate cath lab. Do not wait for troponin. (3) Troponin in early STEMI: may not be elevated in the first 1-2 hours (as here — 0.12 ng/mL, slightly elevated early). A normal troponin does NOT rule out STEMI if ECG shows ST elevation. (4) Door-to-balloon time: primary PCI must occur within 90 minutes of first medical contact. Every 30 minutes of delay increases 1-year mortality by approximately 7.5%. Streamlining the STEMI pathway is a core quality metric. (5) Acute pulmonary edema in STEMI: anterior STEMI → LAD occlusion → LV anterior wall akinesis → acute LV failure → elevated LVEDP → pulmonary edema. The dyspnea is a consequence of the STEMI, not a separate diagnosis."
},
"acute-mi-with-av-block": {
  "diagnosis": "Acute Inferior STEMI with Complete Heart Block (Third-Degree AV Block)",
  "problems": [
    {"problem":"Acute inferior STEMI — RCA occlusion","icd":"I21.19","onset":"2024","status":"Active","notes":"Robert Chen, 64M — chest pressure, diaphoresis, nausea. ECG: ST elevation II, III, aVF + ST depression I, aVL. HR 38 bpm, complete heart block."},
    {"problem":"Complete heart block — AV node ischemia from RCA","icd":"I44.2","onset":"2024","status":"Active","notes":"RCA supplies AV node in 90% of patients. Inferior STEMI + complete heart block = high-grade complication requiring temporary pacing."},
    {"problem":"Hemodynamic compromise from low heart rate","icd":"R00.1","onset":"2024","status":"Active","notes":"BP 88/60 from low cardiac output. CO = HR × SV. HR 38 → inadequate CO despite maintained SV."}
  ],
  "medications": [
    {"name":"Atropine 0.5mg IV — if hemodynamically unstable","sig":"Increases AV conduction via vagolytic effect. May partially restore conduction in inferior MI with AV block. Dose up to 3mg total. Note: often ineffective in complete AV block.","prescriber":"Cardiology/Emergency","start":"2024","refills":0,"status":"Given — limited response"},
    {"name":"Transcutaneous pacing — bridge to transvenous","sig":"External pacing pads. Uncomfortable — sedation with fentanyl/midazolam. Rate 60-80 bpm. Confirm capture (wide QRS with pacer spike + pulse).","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active — transcutaneous"},
    {"name":"Primary PCI + transvenous pacing — cath lab","sig":"Reperfusion of RCA is definitive treatment. AV block usually resolves within 24-48 hours of reperfusion. Transvenous temporary pacer placed in cath lab.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Emergent"}
  ],
  "labs": [{"date":"04/2024","panel":"Inferior STEMI Assessment","results":[
    {"test":"ECG","value":"ST elevation II/III/aVF 3mm. ST depression I/aVL (reciprocal). HR 38 — complete heart block. Wide escape rhythm.","unit":"","ref":"Normal","flag":"H"},
    {"test":"ECG V4R","value":"ST elevation V4R >1mm — RV infarct","unit":"","ref":"Normal","flag":"H"},
    {"test":"Troponin I","value":"0.32","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"BP","value":"88/60","unit":"mmHg","ref":"SBP >90","flag":"L"},
    {"test":"Creatinine","value":"1.3","unit":"mg/dL","ref":"0.7-1.3","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"ECG","findings":"Inferior ST elevation pattern. Right-sided leads: ST elevation in V4R. Complete heart block with ventricular escape at 38 bpm.","impression":"Inferior STEMI with RV infarct and complete heart block. Emergent PCI + temporary pacing."}],
  "ddxTargets": ["Inferior STEMI + complete heart block (correct)","Anterior STEMI — ST elevation in V1-V4, not II/III/aVF; different territory","Hyperkalemia — wide QRS bradycardia but no ST elevation pattern; K+ level distinguishes","Drug-induced AV block — beta-blocker/calcium channel blocker overdose; medication history","High-grade (Mobitz II or 2:1) block — look for P wave relationship on rhythm strip; complete block has AV dissociation","Vagal syncope with bradycardia — no ST elevation; resolves spontaneously with position"],
  "coachFinal": "Diagnosis: inferior STEMI with complete heart block. Key learning: (1) AV block anatomy: RCA supplies the AV node in 90% of people (right dominant circulation). Inferior STEMI from RCA occlusion → AV nodal ischemia → high-grade AV block. The block is usually at or above the bundle of His → narrow escape rhythm (unless bundle involvement). (2) High-degree AV block in inferior STEMI: often resolves within 24-72 hours of reperfusion. Most do NOT require permanent pacing. In contrast, AV block from anterior STEMI (below the His bundle) has worse prognosis and more often requires permanent pacing. (3) RV infarct recognition: V4R lead is critical — ST elevation >1mm in V4R is diagnostic. Clinical triad: hypotension + elevated JVP + clear lungs. AVOID nitrates in RV infarct — preload-dependent, nitrates cause severe hypotension. (4) Pacing sequence: atropine (may help in inferior MI) → transcutaneous pacing (bridge) → transvenous temporary pacing in cath lab → primary PCI. (5) Reciprocal changes: ST depression in I and aVL with inferior STEMI = reciprocal changes from the electrical vector, NOT a separate anterior ischemic territory."
},
"acute-mi": {
  "diagnosis": "Acute STEMI — Cardiogenic Shock (Killip Class IV)",
  "problems": [
    {"problem":"Anterior STEMI — cardiogenic shock, Killip IV","icd":"I21.09","onset":"2024","status":"Active","notes":"Frank Miller, 68M — crushing chest pain + severe dyspnea, BP 76/50, HR 118, SpO2 84%. ECG: ST elevation V1-V5. Pulmonary edema. Cardiogenic shock from massive anterior MI."},
    {"problem":"Cardiogenic shock — IABP + vasopressor dependent","icd":"R57.0","onset":"2024","status":"Active","notes":"CI <2.0 L/min/m², PCWP >18 mmHg. Primary cardiogenic shock from acute MI. Mechanical circulatory support required."},
    {"problem":"Acute pulmonary edema — from LV failure","icd":"J81.0","onset":"2024","status":"Active","notes":"Respiratory failure from elevated LVEDP. Intubation may be necessary if mask CPAP fails."}
  ],
  "medications": [
    {"name":"Primary PCI — immediate cath lab activation","sig":"Door-to-balloon <90 min. Primary PCI reduces mortality in cardiogenic shock (SHOCK trial showed survival benefit at 6 months). Do not delay for hemodynamic stabilization before PCI.","prescriber":"Cardiology","start":"2024","refills":0,"status":"ACTIVATING"},
    {"name":"Norepinephrine 0.1-0.5 mcg/kg/min — vasopressor","sig":"First-line vasopressor in cardiogenic shock. Superior to dopamine (less arrhythmogenic — SOAP II trial). Target MAP ≥65 mmHg.","prescriber":"Cardiology/ICU","start":"2024","refills":0,"status":"Active — IV infusion"},
    {"name":"IABP or Impella — mechanical circulatory support","sig":"IABP: afterload reduction + coronary perfusion augmentation. Impella (CP or 5.0): actively unloads LV, increases cardiac output. Use before/during PCI in cardiogenic shock.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Active — pre-PCI"}
  ],
  "labs": [{"date":"04/2024","panel":"STEMI Cardiogenic Shock","results":[
    {"test":"ECG","value":"ST elevation 4mm V1-V5. Reciprocal changes inferiorly.","unit":"","ref":"Normal","flag":"H"},
    {"test":"Troponin I","value":"0.28","unit":"ng/mL (early rise)","ref":"<0.04","flag":"H"},
    {"test":"Lactate","value":"5.6","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"BP","value":"76/50","unit":"mmHg","ref":"SBP >90","flag":"L"},
    {"test":"ScvO2","value":"52","unit":"%","ref":"≥70%","flag":"L"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Emergent Echo (Bedside)","findings":"Anterior wall and apical akinesis. EF estimated 20-25%. No pericardial effusion. No mechanical complications (no VSD, no papillary muscle rupture).","impression":"Severe anterior wall motion abnormality consistent with acute anterior MI. EF 20-25%. Emergent PCI indicated."}],
  "ddxTargets": ["STEMI cardiogenic shock — Killip IV (correct)","Non-cardiogenic pulmonary edema (ARDS) — no ECG ST elevation; different mechanism","Aortic dissection with hemodynamic compromise — CT shows aortic dissection; ECG pattern + echo distinguish","Cardiac tamponade — pulsus paradoxus, no ST elevation, echo shows effusion/compression","Massive PE with cardiogenic shock — RV strain pattern on ECG, echo shows RV dilation not LV failure","Decompensated CHF without new MI — chronic history, no acute ST elevation, not acute troponin rise"],
  "coachFinal": "Diagnosis: STEMI with cardiogenic shock. Key learning: (1) Killip Classification: I = no HF signs, II = S3/rales, III = pulmonary edema, IV = cardiogenic shock (SBP <90 + end-organ hypoperfusion). Killip IV has 30-day mortality of ~60-80% without revascularization. (2) SHOCK trial: primary PCI in STEMI + cardiogenic shock improved 6-month and 1-year mortality compared to initial stabilization then PCI. Do NOT delay PCI to stabilize hemodynamics. (3) Vasopressor choice: norepinephrine over dopamine — SOAP II trial showed less arrhythmia and improved survival. Dopamine causes significantly more arrhythmias in cardiogenic shock. (4) Mechanical circulatory support: IABP reduces afterload and augments diastolic coronary filling but does not increase cardiac output. Impella CP/5.0 actively pumps blood from LV to aorta — true mechanical LV support. CS team activation for Impella-supported PCI. (5) Lactate as shock severity marker: lactate >4 mmol/L in cardiogenic shock = high mortality. Lactate clearance (reduction >10% at 2 hours) is associated with improved outcomes."
},
"acute-necrotizing-gallstone-pancreatitis": {
  "diagnosis": "Acute Necrotizing Gallstone Pancreatitis (Revised Atlanta Classification — Moderately Severe)",
  "problems": [
    {"problem":"Necrotizing pancreatitis — pancreatic/peripancreatic necrosis","icd":"K85.10","onset":"2024","status":"Active","notes":"Patricia Williams, 56F — gallstone pancreatitis, CTSI 7 (severe). CT: 50% pancreatic necrosis + peripancreatic fluid collection. Revised Atlanta: moderately severe (no persistent organ failure yet)."},
    {"problem":"Choledocholithiasis — CBD stone on MRCP","icd":"K80.51","onset":"2024","status":"Active","notes":"MRCP: CBD stone causing biliary obstruction. ERCP indicated within 24 hours if cholangitis present (no cholangitis here — defer ERCP)."},
    {"problem":"Infection risk — necrotizing pancreatitis","icd":"K85.10","onset":"2024","status":"Active","notes":"Infected necrosis (walled-off necrosis + fever + rising WBC at day 7-10) carries >30% mortality. FNA/CT-guided drainage when infected necrosis suspected."}
  ],
  "medications": [
    {"name":"Aggressive early IV fluid resuscitation — LR preferred","sig":"Lactated Ringer's superior to normal saline (reduces SIRS, acidosis). Goal-directed: 250-500mL/hr first 12-24h, targeting BUN decrease, urine output 0.5-1mL/kg/hr. Avoid over-resuscitation (abdominal compartment syndrome).","prescriber":"Surgery/GI","start":"2024","refills":0,"status":"Active — LR at 300mL/hr"},
    {"name":"Early enteral nutrition (NOT parenteral) — within 24-48h","sig":"Nasojejunal feeds if patient cannot tolerate oral. Early EN maintains gut barrier, reduces bacterial translocation, reduces infected necrosis risk. Avoid NPO + TPN unless EN truly impossible.","prescriber":"Surgery/GI/Nutrition","start":"2024","refills":0,"status":"Active — NJ feeds"},
    {"name":"Antibiotics only if infected necrosis confirmed — NOT prophylactic","sig":"Do NOT give prophylactic antibiotics for necrotizing pancreatitis. Only when infected necrosis proven (FNA positive or gas in necrosis on CT). Prophylactic antibiotics do not prevent infection.","prescriber":"Surgery/GI","start":"2024","refills":0,"status":"Hold — no infection yet"}
  ],
  "labs": [{"date":"04/2024","panel":"Necrotizing Pancreatitis Severity","results":[
    {"test":"Lipase","value":"4800","unit":"U/L","ref":"10-140","flag":"H"},
    {"test":"CRP","value":"280","unit":"mg/L","ref":"<10 (peak at 48-72h)","flag":"H"},
    {"test":"BUN","value":"28","unit":"mg/dL","ref":"7-20","flag":"H"},
    {"test":"Creatinine","value":"1.6","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Ca2+","value":"7.8","unit":"mg/dL","ref":"8.5-10.5 (saponification)","flag":"L"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Abdomen/Pelvis with Contrast (CTSI)","findings":"Pancreatic necrosis involving 50% of pancreatic body/tail with peripancreatic fluid. CTSI score 7 (severe). No gas in necrosis. No organized walled-off collection yet (day 3).","impression":"Necrotizing pancreatitis — moderately severe (Revised Atlanta). No infected necrosis. CTSI 7."}],
  "ddxTargets": ["Acute necrotizing gallstone pancreatitis (correct)","Interstitial edematous pancreatitis — no necrosis on CT; different severity and management","Perforated peptic ulcer — amylase/lipase can be mildly elevated; CT shows free air, not pancreatic necrosis","Mesenteric ischemia — lactic acidosis, pain out of proportion; CT shows bowel wall ischemia","Acute cholecystitis — RUQ pain + gallstones, but lipase normal and no pancreatic necrosis","Ruptured AAA — pulsatile mass, hemodynamics; CT shows aortic pathology"],
  "coachFinal": "Diagnosis: necrotizing gallstone pancreatitis. Key learning: (1) Revised Atlanta Classification: mild (no organ failure, no local complications), moderately severe (transient organ failure <48h or local complications), severe (persistent organ failure >48h). The key prognostic factor is persistent organ failure, not necrosis alone. (2) Fluid resuscitation: LR is superior to normal saline — reduces SIRS and acidosis in AP (WATERFALL trial). Goal-directed fluid therapy (target BUN normalization + adequate urine output) is better than fixed-rate infusions. Avoid over-resuscitation → abdominal compartment syndrome. (3) Early enteral nutrition: nasojejunal tube feeds within 24-48h reduce infected necrosis risk by maintaining gut barrier. Early EN vs NPO+TPN: EN associated with lower mortality and organ failure. (4) Antibiotic rule: prophylactic antibiotics do NOT prevent infected necrosis (three RCTs showed no benefit). Only use when infected necrosis is confirmed by FNA or CT showing gas in necrosis. (5) Infected necrosis management: walled-off necrosis typically forms after 4 weeks. Drainage strategy: step-up approach (percutaneous drain → video-assisted retroperitoneal debridement/endoscopic transgastric drainage) preferred over open surgery — reduces morbidity (TENSION trial)."
},
"acute-pancreatitis": {
  "diagnosis": "Acute Pancreatitis with Vascular Complication (Splenic Artery Pseudoaneurysm)",
  "problems": [
    {"problem":"Acute pancreatitis — recurrent, alcoholic","icd":"K85.20","onset":"2020","status":"Active","notes":"Carlos Rivera, 42M — alcohol-induced pancreatitis, 3rd episode. Now day 7: sudden severe worsening pain, new hematemesis, Hgb drop from 12 to 7.8."},
    {"problem":"Splenic artery pseudoaneurysm — vascular complication of pancreatitis","icd":"I72.8","onset":"2024","status":"Active","notes":"Pancreatic enzymes erode splenic artery wall → pseudoaneurysm. Risk of rupture → hemorrhagic pancreatitis. Most common vascular complication of AP."},
    {"problem":"Alcohol use disorder — ongoing, driving recurrent pancreatitis","icd":"F10.20","onset":"2019","status":"Active","notes":"Three episodes in 4 years. AUDIT-C 10. Requires addiction counseling and support."}
  ],
  "medications": [
    {"name":"Emergent angiography + embolization — splenic artery","sig":"Endovascular embolization is the first-line treatment for splenic artery pseudoaneurysm (coil embolization proximal and distal to pseudoaneurysm). Surgical ligation if embolization fails.","prescriber":"Interventional Radiology","start":"2024","refills":0,"status":"EMERGENT"},
    {"name":"pRBC transfusion — 2 units","sig":"Hemoglobin dropped from 12 to 7.8 from bleeding into pseudoaneurysm/peritoneum.","prescriber":"Surgery/IR","start":"2024","refills":0,"status":"Transfusing"},
    {"name":"Alcohol cessation + naltrexone","sig":"Naltrexone reduces alcohol craving. Addiction counseling referral. Further alcohol use will cause recurrent pancreatitis and progression to chronic pancreatitis/exocrine insufficiency.","prescriber":"Medicine/Addiction","start":"2024","refills":2,"status":"Planned — post-acute"}
  ],
  "labs": [{"date":"04/2024","panel":"Pancreatitis Vascular Complication","results":[
    {"test":"Hemoglobin","value":"7.8","unit":"g/dL","ref":"13.5-17.5","flag":"L"},
    {"test":"Lipase (baseline elevated)","value":"620","unit":"U/L","ref":"10-140","flag":"H"},
    {"test":"HR","value":"118","unit":"bpm","ref":"60-100 (hemorrhagic shock)","flag":"H"},
    {"test":"BP","value":"96/62","unit":"mmHg","ref":"SBP >100","flag":"L"},
    {"test":"Triglycerides","value":"820","unit":"mg/dL","ref":"<150 (hypertriglyceridemia AP)","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Angiography Abdomen","findings":"Large pseudoaneurysm arising from splenic artery (3.2cm). Active extravasation into lesser sac on arterial phase. Extensive peripancreatic inflammatory changes. No free air.","impression":"Splenic artery pseudoaneurysm with active bleeding. Emergent interventional radiology consultation."}],
  "ddxTargets": ["Splenic artery pseudoaneurysm from pancreatitis (correct)","Recurrent acute pancreatitis flare without vascular complication — Hgb drop + hemodynamic instability indicate bleeding","Peptic ulcer hemorrhage — hematemesis could suggest; but CT shows pancreatic/peripancreatic source","Splenic rupture — different mechanism, no AP history; blunt trauma usually involved","Gastric variceal bleeding — portal hypertension signs; no CT evidence here","Pancreatic pseudocyst rupture — could bleed; but CT shows pseudoaneurysm as definitive finding"],
  "coachFinal": "Diagnosis: acute pancreatitis complicated by splenic artery pseudoaneurysm. Key learning: (1) Vascular complications of pancreatitis: pancreatic enzymes (elastase) erode adjacent arterial walls. Splenic artery is most common (50%), followed by gastroduodenal, pancreaticoduodenal. They form pseudoaneurysms → rupture → hemorrhagic pancreatitis. (2) Pseudoaneurysm vs true aneurysm: true aneurysm involves all three vessel wall layers. Pseudoaneurysm = pulsatile hematoma contained by adventitia and perivascular tissue only — more prone to rupture. (3) Bleeding recognition in pancreatitis: sudden Hgb drop + hemodynamic instability in a patient with known pancreatitis = vascular complication until proven otherwise. CT angiography is the diagnostic and therapeutic gateway (can proceed directly to embolization). (4) Management: endovascular coil embolization first line — proximal and distal to the pseudoaneurysm (sandwich technique). Surgical ligation if embolization fails or patient unstable. (5) Recurrent alcoholic pancreatitis: three episodes = high risk for chronic pancreatitis (exocrine insufficiency → steatorrhea, malabsorption; endocrine insufficiency → brittle diabetes). Alcohol cessation is the only intervention that prevents progression."
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
print(f"\nBatch 18: {done}/{len(ENRICHMENTS)} enriched")
