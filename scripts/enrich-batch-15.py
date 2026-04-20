#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"nec-fasciitis": {
  "diagnosis": "Necrotizing Fasciitis — Type I Polymicrobial, Finger Test Positive, Emergency Surgical Debridement",
  "problems": [
    {"problem":"Necrotizing fasciitis — type I polymicrobial, lower extremity","icd":"M72.6","onset":"2024","status":"Active","notes":"Roberto Diaz, 58M — T2DM poorly controlled, A1c 11.2%. Right thigh cellulitis x3 days, now woody induration, crepitus on palpation, fever 39.6°C."},
    {"problem":"Rapidly progressing — pain out of proportion, skin necrosis developing","icd":"M72.6","onset":"2024","status":"Active","notes":"'Pain out of proportion to skin findings' is the classic NF warning. Skin appears relatively benign early — deep fascia necrosis is occult."},
    {"problem":"Septic shock — from fascial plane infection and bacteremia","icd":"R65.21","onset":"2024","status":"Active","notes":"BP 88/54, MAP 62. Lactate 4.8. Resuscitation ongoing. Surgery being activated simultaneously."}
  ],
  "medications": [
    {"name":"Vancomycin + piperacillin-tazobactam + clindamycin — empiric triple therapy","sig":"Vancomycin covers MRSA. Pip-tazo covers gram-negative and anaerobes. Clindamycin inhibits toxin production (anti-toxin effect beyond bactericidal).","prescriber":"Surgery/ID","start":"2024","refills":0,"status":"Active"},
    {"name":"Norepinephrine — vasopressor for septic shock","sig":"MAP target >65. Concurrent with surgical preparation.","prescriber":"ICU","start":"2024","refills":0,"status":"Active"},
    {"name":"Emergency surgical debridement — within 6 hours of recognition","sig":"Surgery is the ONLY treatment for NF. Antibiotics alone will not cure NF — debridement removes the necrotic tissue driving the infection. Every 1h delay increases mortality ~9%.","prescriber":"Surgery","start":"2024","refills":0,"status":"EMERGENT — OR activated"}
  ],
  "labs": [{"date":"11/2024","panel":"NF Workup","results":[
    {"test":"WBC","value":"32.4","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"CRP","value":"380","unit":"mg/L","ref":"<10","flag":"H"},
    {"test":"Sodium","value":"128","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"Creatinine","value":"2.4","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Lactate","value":"4.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"LRINEC score","value":"11","unit":"/13","ref":"≥6 = high risk","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Right Thigh With Contrast","indication":"Severe cellulitis, crepitus, systemic toxicity","findings":"Gas in fascial planes of right thigh, extending from proximal thigh to knee. Fascial plane thickening and enhancement. No abscess — diffuse fascial involvement.","impression":"Necrotizing fasciitis — gas in fascial planes confirmed. Emergent surgical debridement required."}],
  "ddxTargets": ["Necrotizing fasciitis — crepitus, gas on CT, LRINEC ≥6, septic shock (correct)","Severe cellulitis — no fascial gas on CT; no crepitus; less toxic","Gas gangrene (Clostridium myonecrosis) — rapidly progressive, severe pain, crepitus; type II NF variant","Fournier's gangrene — perineal NF specifically; same management","Pyomyositis — muscle involvement on CT, tropical infection; different compartment","Compartment syndrome — elevated compartment pressures, no infection/gas"],
  "coachFinal": "Diagnosis: necrotizing fasciitis. Key learning: (1) NF diagnostic triad: pain out of proportion to skin appearance + rapid progression + systemic toxicity. The skin often LOOKS like cellulitis early — the necrosis is in the deep fascia and muscle fascia, not the skin. Crepitus (gas in tissues) and 'woody' induration are late signs that confirm NF but should not be waited for. (2) LRINEC score (Laboratory Risk Indicator for Necrotizing Fasciitis): CRP >150 (+4), WBC >25 (+2), hemoglobin <11 (+2), sodium <135 (+2), creatinine >1.6 (+2), glucose >180 (+1). Score ≥6 = high risk for NF. Score 11 here = very high risk. Useful but not definitive — clinical suspicion overrides. (3) The finger test: surgeons insert a finger at the edge of suspicious skin → if fascia separates without resistance ('finger test positive') — NF confirmed. Simple bedside test that should accompany CT in uncertain cases. (4) Surgical debridement timing: every hour of delay after recognition increases mortality by ~9%. Mortality rises from ~15% with early surgery to >30-50% with delayed debridement. No antibiotic regimen substitutes for surgery. Multiple return trips to OR for reassessment of tissue viability are standard. (5) Antibiotic rationale: clindamycin's role is anti-toxin (inhibits ribosomal translation → reduces production of streptococcal/staphylococcal exotoxins that drive toxic shock). It is added alongside bactericidal agents specifically for toxin suppression."
},
"neovascular-glaucoma-od": {
  "diagnosis": "Neovascular Glaucoma — Diabetic Retinopathy with Iris Neovascularization, IOP 48, Emergency Ophthalmology",
  "problems": [
    {"problem":"Neovascular glaucoma — IOP 48 mmHg, iris neovascularization","icd":"H40.63","onset":"2024","status":"Active","notes":"Darnell Washington, 52M — T2DM x15 years, poor control. Sudden vision loss right eye, severe pain, red eye, IOP 48 mmHg."},
    {"problem":"Proliferative diabetic retinopathy — underlying driver of neovascularization","icd":"E11.3591","onset":"2023","status":"Active","notes":"PDR with VEGF-driven neovascularization on iris (rubeosis iridis) → blocks trabecular meshwork → angle closure."},
    {"problem":"Diabetic control — A1c 11.8%, IOP crisis from chronic neglect","icd":"E11.65","onset":"2009","status":"Active","notes":"Prolonged poor glycemic control → PDR → NVG. Annual eye exams were missed for 4 years."}
  ],
  "medications": [
    {"name":"Timolol 0.5% eye drops — IOP lowering","sig":"Beta-blocker: reduces aqueous production. 1 drop affected eye BID. First-line topical IOP reduction.","prescriber":"Ophthalmology","start":"2024","refills":2,"status":"Active"},
    {"name":"Brimonidine 0.2% eye drops — adjunct IOP lowering","sig":"Alpha-2 agonist: reduces aqueous production AND increases outflow. 1 drop TID.","prescriber":"Ophthalmology","start":"2024","refills":2,"status":"Active"},
    {"name":"Acetazolamide 500mg PO stat — systemic carbonic anhydrase inhibitor","sig":"Systemic IOP reduction for acute crisis. Give stat for IOP >40.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active — acute"},
    {"name":"Intravitreal anti-VEGF (bevacizumab 1.25mg) — treat underlying NV","sig":"Anti-VEGF causes regression of iris and retinal neovascularization. Given before pan-retinal photocoagulation (PRP) to reduce neovascularization prior to laser.","prescriber":"Retina/Ophthalmology","start":"2024","refills":0,"status":"Active — procedure"}
  ],
  "labs": [{"date":"11/2024","panel":"NVG/Diabetes Panel","results":[
    {"test":"IOP right eye","value":"48","unit":"mmHg","ref":"10-21","flag":"H"},
    {"test":"IOP left eye","value":"16","unit":"mmHg","ref":"10-21","flag":""},
    {"test":"HbA1c","value":"11.8","unit":"%","ref":"<7.0","flag":"H"},
    {"test":"Creatinine","value":"1.8","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Fasting glucose","value":"268","unit":"mg/dL","ref":"70-100","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"Fundus Exam + Fluorescein Angiography","indication":"NVG workup — extent of PDR","findings":"Disc neovascularization, extensive peripheral NVD (neovascularization elsewhere). Rubeosis iridis (iris neovascularization). Vitreous hemorrhage small. No tractional retinal detachment yet.","impression":"Proliferative diabetic retinopathy with rubeosis iridis causing neovascular glaucoma. Anti-VEGF + PRP required urgently."}],
  "ddxTargets": ["Neovascular glaucoma — PDR, rubeosis iridis, IOP 48 (correct)","Acute primary angle closure — fixed mid-dilated pupil, very narrow angle; no neovascularization","Open-angle glaucoma — chronic, insidious; not acute crisis with pain and vision loss","Uveitic glaucoma — inflammatory cells in anterior chamber; different workup","Central retinal vein occlusion — can also cause NVG; fundus exam distinguishes","Hyphema — blood in anterior chamber; blunt trauma history"],
  "coachFinal": "Diagnosis: neovascular glaucoma from PDR. Key learning: (1) NVG mechanism: chronic retinal ischemia (from PDR, CRVO, or other) → VEGF production → new vessel growth on iris (rubeosis iridis) and into the trabecular meshwork → angle closure → IOP rises acutely. IOP >40 causes acute pain, corneal edema, and rapid vision loss. (2) NVG is an ophthalmologic emergency: IOP 48 mmHg will cause permanent optic nerve damage within hours to days if not treated. Medical IOP lowering (timolol, brimonidine, acetazolamide, mannitol IV) buys time for definitive treatment. (3) Anti-VEGF + PRP sequence: intravitreal anti-VEGF causes regression of neovascularization within 24-72h — making PRP (pan-retinal photocoagulation) safer and more effective. PRP destroys ischemic peripheral retina, reducing VEGF drive. (4) Prevention of NVG: annual dilated fundus exam in all diabetics. PDR diagnosis → immediate PRP referral. A1c control <7% reduces PDR progression by 76% (DCCT trial). (5) Prognosis: NVG is associated with poor visual prognosis — even with treatment, significant permanent vision loss is common due to optic nerve damage from acute IOP elevation. Prevention through diabetic eye care compliance is critical."
},
"new-seizure-mass": {
  "diagnosis": "New-Onset Seizure — Brain Mass, Glioblastoma Multiforme vs Metastasis, Neurosurgery and Oncology Evaluation",
  "problems": [
    {"problem":"New-onset seizure — focal with secondary generalization, brain mass on MRI","icd":"G40.109","onset":"2024","status":"Active","notes":"Patricia O'Brien, 62F — first-ever seizure during dinner. Postictal confusion. MRI: ring-enhancing mass right temporal lobe."},
    {"problem":"Ring-enhancing lesion — GBM vs brain metastasis vs abscess differential","icd":"C71.9","onset":"2024","status":"Active","notes":"Ring-enhancing mass with surrounding edema. Age 62, no known primary cancer, no fever — GBM most likely."},
    {"problem":"Elevated ICP — edema surrounding mass causing midline shift 4mm","icd":"G93.2","onset":"2024","status":"Active","notes":"Mass effect with 4mm midline shift — dexamethasone for edema, anti-epileptic for seizure prophylaxis."}
  ],
  "medications": [
    {"name":"Dexamethasone 10mg IV loading, then 4mg q6h — cerebral edema","sig":"Reduces vasogenic edema from tumor. Significant symptom relief within 24-48h.","prescriber":"Neurology/Neurosurgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Levetiracetam 1000mg IV BID — seizure prophylaxis","sig":"Anti-epileptic for tumor-associated seizure. Does not interact with chemotherapy. First-line for tumor seizures.","prescriber":"Neurology","start":"2024","refills":3,"status":"Active"},
    {"name":"Mannitol 1g/kg IV — if acute herniation signs","sig":"Osmotic diuresis for herniation threat — hold unless acute deterioration.","prescriber":"Neurosurgery/ICU","start":"2024","refills":0,"status":"Hold — PRN herniation"}
  ],
  "labs": [{"date":"11/2024","panel":"Brain Mass Workup","results":[
    {"test":"CBC — normal","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"CRP","value":"8","unit":"mg/L","ref":"<10","flag":""},
    {"test":"CEA","value":"2.4","unit":"ng/mL","ref":"<3.0","flag":""},
    {"test":"CA 19-9","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"CT chest/abdomen/pelvis","value":"No primary malignancy identified","unit":"","ref":"Normal","flag":""},
    {"test":"HIV","value":"Negative","unit":"","ref":"Negative","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"MRI Brain With and Without Contrast","indication":"New-onset seizure","findings":"4.2cm ring-enhancing mass right temporal lobe with surrounding vasogenic edema. 4mm rightward midline shift. No satellite lesions. No leptomeningeal enhancement. Single lesion.","impression":"Single ring-enhancing mass — GBM most likely given age, single lesion, no known primary. Metastasis, lymphoma, abscess in differential. Neurosurgical biopsy required for definitive diagnosis."}],
  "ddxTargets": ["Glioblastoma multiforme — single ring-enhancing mass, age 62, no primary (correct)","Brain metastasis — single lesion possible but no primary found on staging CT","CNS lymphoma — usually multiple lesions or periventricular, immunocompromised (HIV negative)","Brain abscess — CRP normal, no fever, no immunocompromise; ring-enhancing but DWI may differentiate","Tumefactive MS — younger patients, different lesion characteristics on MRI","High-grade astrocytoma WHO grade 3 — differentiated by MGMT/IDH mutation status on biopsy"],
  "coachFinal": "Diagnosis: new-onset seizure from brain mass, GBM most likely. Key learning: (1) New-onset seizure in adults >40 warrants brain imaging — MRI with contrast preferred. Structural cause (tumor, abscess, vascular malformation) must be excluded before diagnosing new epilepsy. (2) Ring-enhancing lesion differential: MAGIC mnemonic — Metastasis, Abscess, Glioblastoma, Infarct (subacute), Contusion. In immunocompetent adult >50 with single lesion and no known primary: GBM first. Multiple lesions → metastases. In immunocompromised (HIV CD4 <200): Toxoplasma vs CNS lymphoma (Toxoplasma responds to empiric treatment in 2 weeks — if no response, biopsy for PCNSL). (3) GBM characteristics: IDH wild-type, high mitotic index, necrosis histologically, MGMT promoter methylation status (predicts temozolomide response). Median survival 14-16 months with Stupp protocol (surgery + RT + temozolomide). (4) Dexamethasone for brain tumor edema: works within 24-48h — reduces vasogenic edema from blood-brain barrier disruption. Does NOT treat the tumor. Beware: hyperglycemia, GI bleeding (add PPI), behavioral changes, adrenal suppression with prolonged use. (5) Levetiracetam for tumor-associated seizure: preferred over phenytoin/carbamazepine — fewer drug interactions with chemotherapy and immunosuppressants, no enzyme induction. Not recommended prophylactically in patients with brain tumor who have NOT yet seized."
},
"ocular-hypertension-corneal-thickness-od": {
  "diagnosis": "Ocular Hypertension — Elevated IOP with Thick Corneas, Observation vs Treatment Decision Using OHTS Risk Calculator",
  "problems": [
    {"problem":"Ocular hypertension — IOP 26-28 mmHg bilaterally, no glaucoma yet","icd":"H40.051","onset":"2024","status":"Active","notes":"Marcus Johnson, 48M — referred for elevated IOP found on routine optometry exam. Optic nerves healthy. Visual fields normal."},
    {"problem":"Central corneal thickness 620 microns bilaterally — thick corneas","icd":"H40.051","onset":"2024","status":"Active","notes":"Thick corneas cause IOP OVERESTIMATION by Goldmann tonometry. True IOP may be lower than measured. CCT adjusts risk calculation."},
    {"problem":"OHTS risk calculation — 5-year risk of glaucoma conversion <5%","icd":"H40.051","onset":"2024","status":"Active","notes":"Ocular Hypertension Treatment Study calculator: age, IOP, CCT, cup-to-disc ratio, visual field PSD. This patient: low-risk. Observation appropriate."}
  ],
  "medications": [
    {"name":"Observation — no treatment yet (low OHTS risk score)","sig":"Annual IOP monitoring, optic nerve photos, visual field testing. Treat if risk increases or optic nerve change noted.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active — monitor"},
    {"name":"Latanoprost 0.005% (if treatment decided) — first-line prostaglandin","sig":"If treatment initiated: 1 drop affected eye(s) at bedtime. Prostaglandin analogue — increases uveoscleral outflow. Most effective IOP-lowering agent.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Hold — for future use if indicated"}
  ],
  "labs": [{"date":"11/2024","panel":"Ocular Hypertension Assessment","results":[
    {"test":"IOP right eye (Goldmann)","value":"27","unit":"mmHg","ref":"10-21","flag":"H"},
    {"test":"IOP left eye (Goldmann)","value":"26","unit":"mmHg","ref":"10-21","flag":"H"},
    {"test":"CCT right eye","value":"620","unit":"microns","ref":"530-540 average","flag":"H"},
    {"test":"CCT left eye","value":"618","unit":"microns","ref":"530-540 average","flag":"H"},
    {"test":"Cup-to-disc ratio","value":"0.3 bilaterally","unit":"","ref":"<0.5 normal","flag":""},
    {"test":"Visual field — Humphrey 24-2","value":"Normal — no scotoma","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"Optic Nerve OCT (RNFL)","indication":"Elevated IOP — baseline structural assessment","findings":"Normal retinal nerve fiber layer thickness bilaterally. No superior or inferior thinning. Symmetric.","impression":"No structural glaucomatous damage. Consistent with ocular hypertension without glaucoma conversion."}],
  "ddxTargets": ["Ocular hypertension — thick corneas, low OHTS risk, observation (correct)","Open-angle glaucoma — optic nerve and RNFL normal; no glaucoma yet","Pseudoexfoliation glaucoma — pseudoexfoliation material on lens not present","Secondary glaucoma from steroid use — no steroid history","Normal tension glaucoma — IOP normal or low with glaucomatous changes; this patient has elevated IOP with NORMAL optic nerve","Angle closure — open angle on gonioscopy; different mechanism"],
  "coachFinal": "Diagnosis: ocular hypertension — low OHTS risk, observation. Key learning: (1) Ocular hypertension ≠ glaucoma: OHT = elevated IOP without optic nerve damage or visual field loss. Glaucoma = structural optic nerve damage ± visual field loss. Most OHT patients NEVER develop glaucoma — treatment decision must balance progression risk vs treatment burden. (2) Central corneal thickness (CCT) and IOP: Goldmann tonometry (standard) was calibrated for CCT of ~540 microns. Thick corneas (>580) → IOP OVERESTIMATED (true IOP lower). Thin corneas (<480) → IOP UNDERESTIMATED (true IOP higher — more dangerous). CCT 620 → measured IOP 27 may reflect true IOP of ~22-23. (3) OHTS risk calculator: Ocular Hypertension Treatment Study developed a 5-year risk estimate using age, IOP, CCT, vertical C/D ratio, and visual field PSD. Low risk (<5%) = observe. High risk (>15-20%) = treat. This patient: young, thick corneas, small C/D, normal VF → low risk. (4) When to start treatment: progressive optic nerve change on photos/OCT, rising IOP beyond threshold, increased risk score, patient preference after risk counseling. (5) Glaucoma monitoring: optic nerve photos, RNFL OCT, and Humphrey visual fields annually in OHT. These structural tests detect damage before functional vision loss occurs — allowing earlier intervention."
},
"pcp-hiv-adult": {
  "diagnosis": "Pneumocystis Pneumonia (PCP) — HIV with CD4 Count 42, TMP-SMX Treatment and PCP Prophylaxis Education",
  "problems": [
    {"problem":"PCP — Pneumocystis jirovecii pneumonia, HIV-related","icd":"B59","onset":"2024","status":"Active","notes":"Marcus Brown, 34M — undiagnosed HIV. Progressive dyspnea x3 weeks, dry cough, fever. SpO2 86% on room air. CD4 42."},
    {"problem":"HIV — newly diagnosed, uncontrolled, CD4 42 cells/μL","icd":"B24","onset":"2024","status":"Active","notes":"No prior HIV testing. CD4 42 = AIDS. Multiple OI prophylaxis required. ART deferred until PCP treatment underway (2 weeks)."},
    {"problem":"Adjunctive corticosteroids — indicated for PCP with PaO2 <70","icd":"B59","onset":"2024","status":"Active","notes":"PaO2 58 on ABG — meets criteria for adjunctive steroids. Steroids reduce mortality by 50% in severe PCP."}
  ],
  "medications": [
    {"name":"TMP-SMX 15-20mg/kg/day IV divided q8h — PCP treatment","sig":"Based on trimethoprim component. Duration 21 days. Transition to oral when clinically improved.","prescriber":"ID/Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Prednisone 40mg PO BID x5 days, then taper — adjunctive steroid","sig":"Start within 72h of PCP antibiotics. Indication: PaO2 <70 or A-a gradient >35 on room air. Reduces respiratory failure and mortality.","prescriber":"ID/Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"ART (antiretroviral therapy) — defer 2 weeks after PCP treatment","sig":"Starting ART too early with active PCP can precipitate IRIS (immune reconstitution inflammatory syndrome). Begin after 2 weeks of PCP treatment.","prescriber":"HIV Medicine/ID","start":"Defer","refills":0,"status":"Defer — 2 weeks"},
    {"name":"TMP-SMX 1 DS PO daily — PCP prophylaxis after treatment","sig":"Lifelong prophylaxis until CD4 >200 x3 months on ART. Also covers Toxoplasma prophylaxis at this dose.","prescriber":"ID","start":"After treatment","refills":11,"status":"After treatment completion"}
  ],
  "labs": [{"date":"11/2024","panel":"PCP/HIV Panel","results":[
    {"test":"CD4 count","value":"42","unit":"cells/μL","ref":">500 normal","flag":"L"},
    {"test":"HIV viral load","value":"580,000","unit":"copies/mL","ref":"Undetectable","flag":"H"},
    {"test":"ABG — PaO2","value":"58","unit":"mmHg","ref":"80-100","flag":"L"},
    {"test":"LDH","value":"720","unit":"U/L","ref":"135-225","flag":"H"},
    {"test":"Beta-D-glucan","value":">500","unit":"pg/mL","ref":"<80 pg/mL","flag":"H"},
    {"test":"BAL — GMS stain","value":"Pneumocystis cysts confirmed","unit":"","ref":"No organisms","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CXR PA","indication":"Progressive dyspnea, HIV","findings":"Bilateral perihilar ground-glass opacities, 'bat wing' distribution. No pleural effusion. No lobar consolidation.","impression":"Classic PCP pattern — bilateral perihilar ground-glass opacities in HIV patient. CD4 42 makes PCP highly likely."}],
  "ddxTargets": ["PCP — CD4 42, bilateral GGO, elevated LDH and beta-D-glucan (correct)","Bacterial pneumonia — lobar consolidation, more abrupt onset; GGO pattern atypical","COVID-19 pneumonia — possible but PCP must be excluded in HIV/AIDS","Tuberculosis — upper lobe disease, lymphadenopathy; PCP more consistent with this pattern","Histoplasmosis — endemic exposure, disseminated pattern, different lab profile","Lymphocytic interstitial pneumonia — HIV-related but indolent, CD4 often higher"],
  "coachFinal": "Diagnosis: PCP in HIV/AIDS. Key learning: (1) PCP classic presentation: subacute onset (weeks) of progressive exertional dyspnea + dry cough + fever in HIV patient with CD4 <200. CXR: bilateral perihilar ground-glass opacities ('bat wing' or 'butterfly' pattern). LDH is elevated in ~90% — a sensitive but nonspecific marker. Beta-D-glucan >80 pg/mL is sensitive for PCP. (2) Adjunctive steroids: indicated when PaO2 <70 mmHg or A-a gradient >35 on room air. Start within 72 hours of antibiotics. Regimen: prednisone 40mg BID x5d → 40mg daily x5d → 20mg daily x11d. Reduces mortality by ~50% in severe PCP — one of the clearest evidence-based adjunctive therapy benefits in ID. (3) IRIS (immune reconstitution inflammatory syndrome): starting ART too soon during active OI can trigger paradoxical worsening as CD4 cells recover and mount an inflammatory response against the pathogen. Standard: begin ART 2 weeks after starting OI treatment for PCP (vs 2 weeks for most OIs, 4-8 weeks for CNS infections like cryptococcal meningitis). (4) OI prophylaxis thresholds in HIV: CD4 <200 → TMP-SMX for PCP + Toxoplasma. CD4 <50 → add azithromycin for MAC (Mycobacterium avium complex). CD4 <100 + seropositive → add TMP-SMX dose for Toxoplasma encephalitis prevention. (5) TMP-SMX allergy in HIV: ~40% of HIV patients on TMP-SMX develop hypersensitivity. Desensitization protocol is preferred over switching to pentamidine (more toxic) when possible."
},
"peanut-allergy-anaphylaxis-v2": {
  "diagnosis": "Peanut Anaphylaxis — Hidden Peanut in Restaurant Dish, Epinephrine Auto-Injector Not Used Initially, Education Gap",
  "problems": [
    {"problem":"Peanut anaphylaxis — hidden peanut ingestion, restaurant exposure","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"Ashley Kim, 19F — known peanut allergy. Thai restaurant — pad Thai 'without peanuts.' Urticaria + angioedema + wheeze 20 min after eating."},
    {"problem":"EpiPen not used before ED arrival — delay in epinephrine","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"Patient used diphenhydramine first. Key education gap: epinephrine is FIRST-line, not after antihistamines."},
    {"problem":"Biphasic anaphylaxis risk — observation required 4-6 hours","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"After epinephrine given in ED — observe 4-6 hours for biphasic reaction. Discharge with written action plan."}
  ],
  "medications": [
    {"name":"Epinephrine 0.3mg IM — given in ED (delayed, should have been used at onset)","sig":"First-line. Should have been used at first systemic symptom at restaurant. Not after antihistamines fail.","prescriber":"ED","start":"2024","refills":0,"status":"Given"},
    {"name":"Diphenhydramine 25mg IV — adjunct after epinephrine","sig":"Antihistamine is adjunct — treats itch and urticaria. Does NOT prevent or reverse anaphylaxis. Should NOT be used instead of epinephrine.","prescriber":"ED","start":"2024","refills":0,"status":"Given"},
    {"name":"EpiPen 0.3mg x2 — reinforce prescription and education","sig":"Use at FIRST sign of systemic reaction — don't wait to 'see if it gets worse.' Use, then call 911, then use second dose if needed at 5-10 min.","prescriber":"ED/Allergy","start":"2024","refills":1,"status":"Active — reinforce education"},
    {"name":"Oral prednisone 40mg x3 days — prevention of biphasic reaction","sig":"Steroid course — evidence for preventing biphasic reaction is limited but commonly used.","prescriber":"ED","start":"2024","refills":0,"status":"Active — discharge"}
  ],
  "labs": [{"date":"11/2024","panel":"Anaphylaxis Assessment","results":[
    {"test":"Tryptase (drawn 1h post-reaction)","value":"24.6","unit":"ng/mL","ref":"<11.4","flag":"H"},
    {"test":"Tryptase baseline (24h post)","value":"4.2","unit":"ng/mL","ref":"<11.4","flag":""},
    {"test":"Peanut IgE","value":"24.8","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Ara h 2 IgE","value":"16.4","unit":"kU/L","ref":"<0.35","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Peanut anaphylaxis — hidden exposure, delayed epinephrine use (correct)","Allergic reaction without anaphylaxis — wheeze + urticaria + angioedema = anaphylaxis by criteria","Vasovagal reaction — no urticaria or angioedema; vasovagal has pallor and bradycardia","Panic attack — somatic symptoms of anxiety; no urticaria, normal tryptase","Scombroid poisoning — flushing, urticaria, headache after spoiled fish; not Thai food in this case","Hereditary angioedema — normal complement between attacks; urticaria present argues against HAE"],
  "coachFinal": "Diagnosis: peanut anaphylaxis — education gap about epinephrine priority. Key learning: (1) The #1 error in anaphylaxis management: using antihistamines instead of epinephrine. Antihistamines take 30-60 minutes to reach peak effect and do NOT block bronchoconstriction, hypotension, or progressive angioedema. Epinephrine works in minutes via alpha-1 (vasoconstriction), beta-1 (chronotropy/inotropy), and beta-2 (bronchodilation) effects simultaneously. (2) Epinephrine threshold: use at the first sign of a SYSTEMIC reaction (hives spreading + any ONE of: wheeze, throat tightness, vomiting, hypotension). Do not wait to 'see if it gets worse' — anaphylaxis can progress from mild to fatal within minutes. (3) Hidden peanut education: peanut is in many dishes where not listed (Thai/Asian sauces, Mexican mole, Indian curries, desserts, 'may contain' labeling). Patients must ask about ALL ingredients, inform staff of allergy severity, carry epinephrine always. (4) Biphasic anaphylaxis: occurs in ~10-20%, 1-72h after apparent resolution without re-exposure. Risk factors: severe initial reaction, delayed epinephrine use. Observe 4-6 hours in ED. Discharge criteria: symptoms resolved, vital signs stable, reliable home access to epinephrine. (5) Written anaphylaxis action plan: every patient should leave with a written plan — when to use EpiPen, when to call 911, when to go to ED. Verbal instructions alone are insufficient in the setting of an acute reaction."
},
"penicillin-allergy-delabeling-v2": {
  "diagnosis": "Penicillin Allergy De-Labeling — Low-Risk History, Skin Test and Oral Challenge Protocol, Allergy Removal",
  "problems": [
    {"problem":"Penicillin allergy label — low-risk history, 20 years ago","icd":"Z88.0","onset":"2024","status":"Active","notes":"Sandra Wright, 58F — 'penicillin allergy' from childhood rash. No urticaria, no angioedema, no anaphylaxis. Rash resolved. 20 years ago."},
    {"problem":"Allergy label consequences — receiving vancomycin and fluoroquinolones instead of optimal therapy","icd":"Z88.0","onset":"2024","status":"Active","notes":"MRSA screen positive — labeled penicillin allergy → getting vancomycin instead of optimal beta-lactam therapy. De-labeling would change management."},
    {"problem":"Low-risk history — most penicillin allergy labels are incorrect","icd":"Z88.0","onset":"2024","status":"Active","notes":"~80-90% of patients labeled penicillin allergic are NOT truly allergic. Risk stratification and challenge eliminate most false labels."}
  ],
  "medications": [
    {"name":"Penicillin skin test (major and minor determinants) — if available","sig":"Negative skin test = <1-3% risk of immediate hypersensitivity. Proceed to oral challenge after negative skin test.","prescriber":"Allergy","start":"2024","refills":0,"status":"Active — test"},
    {"name":"Amoxicillin 250mg PO oral challenge — after negative skin test or directly (low-risk)","sig":"Supervised 1-hour oral challenge — if no reaction in 1 hour, penicillin allergy label removed. Low-risk histories can proceed directly to oral challenge without skin testing.","prescriber":"Allergy","start":"2024","refills":0,"status":"Active — challenge"},
    {"name":"Document: penicillin allergy REMOVED from chart","sig":"Update medical record across all systems. Specify drug and dates in allergy reconciliation note.","prescriber":"Allergy/PCP","start":"2024","refills":0,"status":"Active — documentation"}
  ],
  "labs": [{"date":"11/2024","panel":"Penicillin Allergy Evaluation","results":[
    {"test":"Penicilloyl-polylysine (PPL) skin test — major determinant","value":"Negative (wheal <3mm)","unit":"","ref":"<3mm = negative","flag":""},
    {"test":"Minor determinant mixture skin test","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Amoxicillin oral challenge — 250mg supervised","value":"No reaction at 1 hour","unit":"","ref":"No reaction","flag":""},
    {"test":"IgE cross-reactivity — cephalosporins","value":"Not tested — low cross-reactivity after de-labeling (<1%)","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Penicillin allergy — correctly de-labeled after negative skin test and oral challenge (correct)","True IgE-mediated penicillin allergy — negative skin test + successful oral challenge excludes","Cephalosporin cross-reactivity — after de-labeling, cephalosporins safe (<1% cross-reactivity in truly allergic; lower in de-labeled)","Non-IgE drug reaction — maculopapular rash from childhood; not immune-mediated hypersensitivity","Viral exanthem misattributed to amoxicillin — very common; EBV + amoxicillin = rash","Drug intolerance — GI symptoms; not allergic; safe to use penicillin"],
  "coachFinal": "Diagnosis: penicillin allergy de-labeled — low-risk history. Key learning: (1) The penicillin allergy problem: ~10-15% of US patients carry a penicillin allergy label. Of these, ~80-90% are NOT truly allergic when formally evaluated. The label leads to use of broader-spectrum, more expensive, and more toxic alternative antibiotics (vancomycin, fluoroquinolones) with worse outcomes. (2) Risk stratification: HIGH risk histories (immediate urticaria, angioedema, anaphylaxis <1h after penicillin) → skin test before challenge. LOW risk (delayed non-urticarial rash, rash >72h after dose, remote history, family history only, unknown reaction type) → can proceed directly to oral challenge without skin testing. (3) Cross-reactivity myth: penicillin-cephalosporin cross-reactivity was historically quoted at 10%. Modern data shows it is ~1-2% in truly allergic patients, and even lower (~0.1-0.5%) in de-labeled patients. Do not avoid cephalosporins in a de-labeled patient. (4) Viral rash misattributed to amoxicillin: EBV infection (mono) + amoxicillin = 80-100% develop a widespread maculopapular rash. This is NOT a drug allergy — it is a virus-drug interaction (immune complex-mediated). These patients are NOT penicillin allergic. (5) De-labeling impact: penicillin allergy removal allows use of narrow-spectrum beta-lactams, reduces CDiff from fluoroquinolone use, reduces MRSA acquisition from vancomycin exposure, and improves surgical infection outcomes. A quality improvement and patient safety initiative."
},
"peritonsillar-abscess": {
  "diagnosis": "Peritonsillar Abscess — Needle Aspiration, Penicillin Treatment, Hot Potato Voice Pathognomonic",
  "problems": [
    {"problem":"Peritonsillar abscess — right-sided, uvular deviation","icd":"J36","onset":"2024","status":"Active","notes":"Tyler Brooks, 24M — 5 days progressive sore throat, trismus, muffled 'hot potato' voice. Right peritonsillar bulge, uvular deviation to left."},
    {"problem":"Trismus — inability to open mouth >2cm","icd":"M26.65","onset":"2024","status":"Active","notes":"Trismus from medial pterygoid spasm from peritonsillar inflammation — limits exam and needle aspiration."},
    {"problem":"Airway — risk of progression to parapharyngeal space or Ludwig's angina","icd":"J36","onset":"2024","status":"Active","notes":"Most PTAs stay localized. Extension to parapharyngeal space or deep neck is uncommon but catastrophic."}
  ],
  "medications": [
    {"name":"Needle aspiration — primary treatment","sig":"Medial to anterior tonsillar pillar, lateral to palate. Aspirate pus. 85-95% success rate — avoids I&D in compliant patients.","prescriber":"ENT/ED","start":"2024","refills":0,"status":"Active — procedure"},
    {"name":"Penicillin VK 500mg PO QID x10 days — post-aspiration","sig":"First-line antibiotic for PTA — Streptococcus pyogenes, oral anaerobes. Amoxicillin-clavulanate for broader coverage.","prescriber":"ENT/ED","start":"2024","refills":0,"status":"Active"},
    {"name":"Dexamethasone 10mg IV/IM — single dose","sig":"Single steroid dose reduces pain, trismus, and swallowing dysfunction. Significantly improves patient-reported outcomes.","prescriber":"ENT/ED","start":"2024","refills":0,"status":"Given — one dose"},
    {"name":"Magic mouthwash + analgesics — pain control","sig":"Viscous lidocaine + diphenhydramine + antacid: swish and spit. Systemic analgesics (ibuprofen + acetaminophen) scheduled.","prescriber":"ED","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"PTA Workup","results":[
    {"test":"WBC","value":"16.8","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Monospot test","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Throat culture","value":"Group A Streptococcus positive","unit":"","ref":"No pathogens","flag":"H"},
    {"test":"CRP","value":"88","unit":"mg/L","ref":"<10","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"Soft Tissue Neck Ultrasound (intraoral)","indication":"PTA vs peritonsillar cellulitis — confirm abscess before aspiration","findings":"4.2cm peritonsillar fluid collection right side — abscess confirmed. No extension into parapharyngeal space.","impression":"Peritonsillar abscess — localized. Needle aspiration appropriate."}],
  "ddxTargets": ["Peritonsillar abscess — uvular deviation, hot potato voice, unilateral bulge (correct)","Peritonsillar cellulitis — no fluctuance, no definitive abscess on ultrasound; treat with antibiotics alone","Tonsillar malignancy — asymmetric tonsil in adult without acute infection features; biopsy if persistent","Epiglottitis — supraglottic, different symptoms, no peritonsillar bulge","Parapharyngeal abscess — deeper, no uvular deviation, CT/MRI distinguishes","Ludwig's angina — bilateral submandibular, trismus, different anatomy"],
  "coachFinal": "Diagnosis: peritonsillar abscess. Key learning: (1) Classic PTA presentation: unilateral peritonsillar bulge + uvular deviation to contralateral side + 'hot potato' muffled voice + trismus + severe odynophagia + drooling. The combination of uvular deviation + hot potato voice is highly specific. (2) PTA vs cellulitis: peritonsillar cellulitis = erythema, swelling, no discrete fluid collection. PTA = fluctuant collection (clinical or ultrasound-confirmed). Distinction matters because cellulitis is treated with antibiotics alone; PTA requires drainage. Intraoral ultrasound is the most reliable bedside tool to differentiate. (3) Needle aspiration: the preferred treatment — 85-95% success rate, avoids formal I&D. Landmark: medial to the anterior tonsillar pillar, never lateral (internal carotid artery is lateral). Aspirate pus, send for culture. If needle aspiration fails x2, proceed to formal I&D or quinsy tonsillectomy. (4) Dexamethasone single dose: randomized trials show single IM/IV dexamethasone dose significantly reduces pain, trismus, and swallowing dysfunction. Standard of care adjunct to drainage and antibiotics. (5) Recurrence: PTA recurs in ~10-15%. Tonsillectomy is recommended after second episode (quinsy tonsillectomy immediately vs interval tonsillectomy 4-6 weeks later). First episode in adults: drain and antibiotics, discuss tonsillectomy if symptomatic tonsillitis history."
},
"sah-v1": {
  "diagnosis": "Subarachnoid Hemorrhage — 'Thunderclap' Headache, Berry Aneurysm, Emergency Neurosurgical Evaluation",
  "problems": [
    {"problem":"Subarachnoid hemorrhage — aneurysmal, CT positive","icd":"I60.9","onset":"2024","status":"Active","notes":"Elena Reyes, 47F — sudden severe headache 'worst of my life' during exercise, vomiting, neck stiffness. Hemorrhage on CT."},
    {"problem":"Berry aneurysm — 8mm left MCA aneurysm on CTA","icd":"I67.1","onset":"2024","status":"Active","notes":"CT angiography: 8mm left MCA bifurcation aneurysm — likely source. Neurovascular surgery evaluating coiling vs clipping."},
    {"problem":"Vasospasm prevention — nimodipine protocol initiated","icd":"I60.9","onset":"2024","status":"Active","notes":"Cerebral vasospasm occurs 3-14 days post-SAH — leading cause of delayed morbidity. Nimodipine reduces vasospasm-related mortality."}
  ],
  "medications": [
    {"name":"Nimodipine 60mg PO q4h x21 days — vasospasm prevention","sig":"Oral calcium channel blocker — reduces cerebral vasospasm and improves neurologic outcome post-SAH. Give even if patient is NPO via NG tube (capsule contents via tube).","prescriber":"Neurosurgery/Neurology","start":"2024","refills":0,"status":"Active"},
    {"name":"Labetalol IV PRN — BP control <160 systolic","sig":"SBP target <160 before aneurysm secured. After securing: permissive hypertension to maintain cerebral perfusion.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Active PRN"},
    {"name":"Levetiracetam 1000mg IV BID — seizure prophylaxis","sig":"Short-term seizure prophylaxis (7 days) — reduces re-bleeding risk from seizure-induced BP surge before aneurysm is secured.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Active — 7-day course"},
    {"name":"Stool softeners + anti-emetics — prevent Valsalva","sig":"Valsalva maneuver increases ICP and can precipitate re-bleeding. Docusate sodium + ondansetron.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"SAH Assessment","results":[
    {"test":"CT Head Non-Contrast — acute","value":"Blood in basal cisterns, sylvian fissure — SAH pattern","unit":"","ref":"No blood","flag":"H"},
    {"test":"CSF — xanthochromia","value":"Yellow — xanthochromia positive","unit":"","ref":"Clear","flag":"H"},
    {"test":"CSF — RBC","value":"100,000","unit":"cells/μL","ref":"<5","flag":"H"},
    {"test":"CSF — WBC","value":"50","unit":"cells/μL","ref":"<5","flag":"H"},
    {"test":"Sodium","value":"134","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"Troponin I","value":"0.14","unit":"ng/mL","ref":"<0.04","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Angiography Head","indication":"SAH — aneurysm identification","findings":"8mm left MCA bifurcation aneurysm — lobulated, irregular margins. No other aneurysms. No arteriovenous malformation.","impression":"Left MCA aneurysm — likely source of SAH. Neurovascular surgery urgent consultation. Coiling vs clipping decision pending."}],
  "ddxTargets": ["Aneurysmal SAH — thunderclap headache, basal cistern blood, MCA aneurysm (correct)","Thunderclap headache — benign sentinel bleed is SAH until proven otherwise","Meningitis — fever, gradual onset, CSF differs (WBC higher, glucose low)","Hypertensive intracerebral hemorrhage — parenchymal blood, not cistern pattern","Cerebral venous sinus thrombosis — different headache pattern, different CT findings","Reversible cerebral vasoconstriction syndrome — similar presentation, repeat imaging needed"],
  "coachFinal": "Diagnosis: aneurysmal SAH. Key learning: (1) 'Worst headache of my life' + thunderclap onset = SAH until proven otherwise. Sensitivity of non-contrast CT within 6h of onset is ~98-99%. After 6h, sensitivity drops (blood is reabsorbed) → LP for xanthochromia required if CT negative. Xanthochromia (yellow CSF) from RBC breakdown is detectable within 2-4h and persists 2 weeks. (2) LP timing: if CT negative, LP should be performed at least 6h after headache onset — false negatives occur if LP done too early before xanthochromia develops. (3) Nimodipine mechanism: calcium channel blocker that reduces cerebral vasospasm — the leading cause of delayed morbidity (days 3-14 post-SAH). Does NOT prevent vasospasm radiographically but reduces neurologic deficits and mortality. Give 60mg q4h for 21 days regardless of vasospasm status. (4) Re-bleeding risk: highest in first 24h (~15%). Maintain SBP <160 before aneurysm is secured. Anti-emetics and stool softeners prevent Valsalva-induced re-bleeding. (5) Treatment — coiling vs clipping: endovascular coiling is preferred when feasible (less invasive, faster recovery, equivalent long-term durability per ISAT trial). Surgical clipping preferred for wide-necked aneurysms, MCA aneurysms with intracerebral hematoma requiring evacuation. Neurovascular team decides based on anatomy and patient factors."
},
"sbo-strangulation": {
  "diagnosis": "Small Bowel Obstruction — Strangulation, Free Fluid, Emergency Laparotomy",
  "problems": [
    {"problem":"SBO with strangulation — closed-loop obstruction","icd":"K56.69","onset":"2024","status":"Active","notes":"Henry Walsh, 68M — prior appendectomy. Sudden severe colicky pain, vomiting, distension. CT: closed-loop SBO, free fluid, wall thickening."},
    {"problem":"Signs of strangulation — ischemic bowel, emergency surgery required","icd":"K56.69","onset":"2024","status":"Active","notes":"CT: free peritoneal fluid, closed-loop configuration, bowel wall thickening, pneumatosis intestinalis. Time-sensitive — ischemic bowel within hours."},
    {"problem":"Adhesion — from prior appendectomy, most common SBO cause","icd":"K56.50","onset":"2024","status":"Active","notes":"Adhesions from prior abdominal surgery are the most common cause of SBO in adults. Closed-loop = more dangerous than simple partial obstruction."}
  ],
  "medications": [
    {"name":"NGT decompression — immediate","sig":"NG tube to suction — decompresses proximal bowel, reduces vomiting and aspiration risk. Mandatory in SBO.","prescriber":"Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"IV fluid resuscitation — NS 1L bolus, then maintenance","sig":"SBO causes significant third-spacing and dehydration from vomiting. Resuscitate before and during surgical prep.","prescriber":"Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Broad-spectrum antibiotics — cefazolin + metronidazole","sig":"Perioperative antibiotics — covers gram-positive (skin) and anaerobes. Bacterial translocation from ischemic bowel.","prescriber":"Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Emergency laparotomy — immediate OR activation","sig":"Strangulation = surgical emergency. Every hour of delay → more ischemic bowel → greater resection and morbidity.","prescriber":"Surgery","start":"2024","refills":0,"status":"EMERGENT — OR activated"}
  ],
  "labs": [{"date":"11/2024","panel":"SBO Strangulation Panel","results":[
    {"test":"WBC","value":"18.6","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Lactate","value":"3.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"Creatinine","value":"1.6","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Sodium","value":"133","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"ABG — pH","value":"7.28","unit":"","ref":"7.35-7.45","flag":"L"},
    {"test":"Lipase","value":"Normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Abdomen/Pelvis With IV Contrast","indication":"Acute abdomen, prior appendectomy","findings":"Closed-loop small bowel obstruction — two transition points. Dilated small bowel loops, pneumatosis intestinalis. Free peritoneal fluid. Mesenteric fat stranding. Bowel wall thickening and reduced enhancement.","impression":"SBO with strangulation signs — pneumatosis, free fluid, reduced bowel wall enhancement. Emergency surgical consultation. Time-critical."}],
  "ddxTargets": ["SBO with strangulation — closed-loop, pneumatosis, free fluid (correct)","Simple adhesive SBO without strangulation — no strangulation signs; NG decompression + observation possible","Large bowel obstruction — colon dilated, not small bowel; different CT pattern","Volvulus — sigmoid or cecal twisting; may be closed-loop; depends on CT findings","Incarcerated hernia — examine for inguinal/umbilical/incisional hernia; CT confirms","Mesenteric ischemia — similar CT findings possible; SBO creates secondary ischemia here"],
  "coachFinal": "Diagnosis: SBO with strangulation — emergency surgery. Key learning: (1) SBO management algorithm: partial SBO without strangulation signs → NG decompression + IV fluids + observation 24-48h (Gastrografin study if non-operative management considered). Complete SBO or strangulation signs → emergency surgery. Strangulation signs mandate OR — no trial of non-operative management. (2) CT signs of strangulation: closed-loop configuration (two transition points), pneumatosis intestinalis (gas in bowel wall = mucosal necrosis), free peritoneal fluid (bowel leak or ischemia), reduced or absent bowel wall enhancement, mesenteric fat stranding. ANY of these = presumed strangulation = surgery. (3) Closed-loop obstruction: two points of obstruction with a loop of bowel trapped between → most dangerous configuration. Vascular supply to the trapped loop can twist with the bowel → strangulation develops rapidly. (4) Adhesions are the most common cause of SBO in adults (60-75%) — typically from prior abdominal surgery. Other causes: hernias, malignancy, Crohn's stricture, intussusception, volvulus. (5) Surgical approach: laparoscopic adhesiolysis if feasible for simple adhesion without strangulation. Open laparotomy for strangulation, extensive adhesions, or bowel resection needed. Damage control surgery if hemodynamically unstable — resect ischemic segment, leave bowel in discontinuity, return to OR in 24-48h when stable (Hartmann procedure concept)."
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
print(f"\nBatch 15: {done}/{len(ENRICHMENTS)} enriched")
