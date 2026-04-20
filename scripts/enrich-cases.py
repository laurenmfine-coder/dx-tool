#!/usr/bin/env python3
"""
enrich-cases.py
Replaces generic scaffold content with clinically accurate data for each case.
Focuses on: meta.diagnosis, problems, medications, labs, imaging, ddxTargets, patientResponses, coachPrompts
Run: python3 scripts/enrich-cases.py
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

# ── Clinical enrichment data per case ─────────────────────────────────────
# Each entry: diagnosis, problems, medications, labs, imaging, ddxTargets, coachFinal
ENRICHMENTS = {

# ── OPTOMETRY ──────────────────────────────────────────────────────────────
"diabetic-retinopathy-od": {
  "diagnosis": "Non-Proliferative Diabetic Retinopathy (NPDR), Moderate — Bilateral",
  "problems": [
    {"problem":"Type 2 Diabetes Mellitus","icd":"E11.9","onset":"2016","status":"Active","notes":"A1c 9.2% — suboptimal control"},
    {"problem":"Hypertension","icd":"I10","onset":"2018","status":"Active","notes":"On lisinopril"},
    {"problem":"Diabetic retinopathy","icd":"E11.311","onset":"2024","status":"Active","notes":"Newly diagnosed on today's exam"}
  ],
  "medications": [
    {"name":"Metformin 1000mg BID","sig":"Take 1 tablet by mouth twice daily with meals","prescriber":"Dr. Kim","start":"01/2017","refills":6,"status":"Active"},
    {"name":"Lisinopril 10mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Dr. Kim","start":"03/2019","refills":5,"status":"Active"},
    {"name":"Glipizide 5mg daily","sig":"Take 1 tablet by mouth daily 30 minutes before breakfast","prescriber":"Dr. Kim","start":"06/2021","refills":4,"status":"Active"}
  ],
  "labs": [{"date":"10/15/2024","panel":"HbA1c and Metabolic","results":[
    {"test":"HbA1c","value":"9.2","unit":"%","ref":"<7.0","flag":"H"},
    {"test":"Fasting Glucose","value":"218","unit":"mg/dL","ref":"70-100","flag":"H"},
    {"test":"Creatinine","value":"1.1","unit":"mg/dL","ref":"0.6-1.2","flag":""},
    {"test":"eGFR","value":"72","unit":"mL/min/1.73m²","ref":">60","flag":""},
    {"test":"LDL","value":"128","unit":"mg/dL","ref":"<100","flag":"H"}
  ]}],
  "imaging": [{"date":"11/10/2024","study":"Fundus Photography with OCT — Bilateral","indication":"Diabetic retinopathy screening, A1c 9.2%","findings":"OD: Multiple dot-blot hemorrhages in all quadrants, scattered microaneurysms, two cotton-wool spots inferior arcade. No neovascularization. Macular OCT: central subfield thickness 298 μm, no diabetic macular edema. OS: Microaneurysms scattered mid-periphery, rare hard exudates temporal macula. Macular OCT: CST 284 μm, no DME.","impression":"Moderate NPDR bilateral. No proliferative disease. No clinically significant DME. Annual dilated exam recommended — consider referral to retina if progression."}],
  "ddxTargets": ["Moderate non-proliferative diabetic retinopathy (correct)","Mild NPDR — insufficient hemorrhage count","Proliferative diabetic retinopathy","Diabetic macular edema","Hypertensive retinopathy — look-alike","Branch retinal vein occlusion"],
  "coachFinal": "Diagnosis: moderate NPDR bilateral. Key OD learning points: (1) Classify by ETDRS severity — moderate NPDR means 20+ hemorrhages per quadrant OR venous beading in 1+ quadrant OR IRMA. (2) Systemic targets that slow progression: A1c <7%, BP <130/80, LDL <100. (3) Referral timing: moderate NPDR → annual; severe NPDR → retina within 3-4 months; any PDR or DME → urgent retina. (4) The cotton-wool spots represent nerve fiber layer infarcts from capillary non-perfusion — a progression marker. (5) Today's visit requires a co-management letter to the endocrinologist: A1c 9.2% is driving this."
},

"hypertensive-retinopathy-od": {
  "diagnosis": "Hypertensive Retinopathy, Grade III (Keith-Wagener-Barker) — Bilateral",
  "problems": [
    {"problem":"Hypertension — poorly controlled","icd":"I10","onset":"2014","status":"Active","notes":"BP 178/108 found on today's exam, off medications x3 weeks"},
    {"problem":"Hypertensive retinopathy","icd":"H35.031","onset":"2024","status":"Active","notes":"Newly identified, Grade III"}
  ],
  "medications": [
    {"name":"Amlodipine 5mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Dr. Torres","start":"01/2015","refills":0,"status":"Active — patient reports not filling for 3 weeks"},
    {"name":"Hydrochlorothiazide 25mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Dr. Torres","start":"06/2018","refills":0,"status":"Active — not filling"}
  ],
  "labs": [],
  "imaging": [{"date":"11/18/2024","study":"Fundus Photography — Bilateral","indication":"Elevated BP found at eye exam, headaches","findings":"OD and OS: Moderate arteriovenous nicking at 3 crossings bilaterally. Significant arteriolar narrowing with copper-wiring appearance. Flame hemorrhages at disc margin bilaterally. Hard exudates forming partial macular star pattern OD. Disc margins sharp bilaterally. Cotton-wool spots x2 OD superior.","impression":"Hypertensive retinopathy Grade III bilaterally. Flame hemorrhages and hard exudate macular star indicate end-organ damage. Urgent blood pressure management required. No papilledema (Grade IV)."}],
  "ddxTargets": ["Grade III hypertensive retinopathy (correct)","Grade II hypertensive retinopathy (mild AV nicking only)","Grade IV — malignant hypertension with papilledema","Diabetic retinopathy — similar hemorrhage pattern","Branch retinal vein occlusion","Radiation retinopathy"],
  "coachFinal": "Diagnosis: Grade III hypertensive retinopathy (Keith-Wagener-Barker). Key OD learning points: (1) KWB grading: I=arteriolar narrowing; II=AV nicking; III=hemorrhages, exudates, cotton-wool spots; IV=papilledema. Grade III = same-day medical referral. (2) Flame hemorrhages = nerve fiber layer hemorrhages from elevated pressure. Hard exudate macular star = lipid deposits from leaking capillaries. (3) This patient is off medications — the OD has found hypertensive crisis. BP 178/108 requires same-day medicine evaluation. (4) If papilledema were present (Grade IV), this is hypertensive emergency — call 911."
},

"ms-optic-neuritis-od": {
  "diagnosis": "Acute Demyelinating Optic Neuritis, Right Eye — High Risk for Multiple Sclerosis",
  "problems": [
    {"problem":"Optic neuritis, right eye","icd":"H46.01","onset":"2024","status":"Active","notes":"Acute presentation, 5 days"},
    {"problem":"Possible multiple sclerosis — high-risk features","icd":"G35","onset":"2024","status":"Active","notes":"MRI brain ordered — await results"}
  ],
  "medications": [
    {"name":"No current ocular medications","sig":"N/A","prescriber":"N/A","start":"N/A","refills":0,"status":"N/A"}
  ],
  "labs": [],
  "imaging": [{"date":"11/18/2024","study":"MRI Brain with and without gadolinium (ordered)","indication":"Acute optic neuritis — evaluate for demyelinating lesions","findings":"PENDING — ordered today","impression":"Pending. Patient advised results within 24-48 hours. Neurology referral placed."}],
  "ddxTargets": ["Acute demyelinating optic neuritis (correct)","Ischemic optic neuropathy (AION)","Leber hereditary optic neuropathy","Compressive optic neuropathy from orbital mass","Neuromyelitis optica (NMO/AQP4+)","Infectious optic neuritis"],
  "coachFinal": "Diagnosis: acute demyelinating optic neuritis, right eye, high MS risk. Key OD learning points: (1) Classic triad: painful vision loss + pain on eye movement + RAPD. (2) VEP shows prolonged P100 latency — confirms optic nerve demyelination. (3) MRI brain: >2 T2 white matter lesions = high MS risk; McDonald criteria 2017 may establish MS diagnosis on first attack. (4) Treat with IV methylprednisolone 1g/day x3 days — accelerates recovery but does NOT improve final visual outcome. (5) NMO/MOG antibodies must be checked — NMOSD is treated differently and IV steroids are insufficient."
},

"papilledema-od": {
  "diagnosis": "Papilledema from Idiopathic Intracranial Hypertension (IIH)",
  "problems": [
    {"problem":"Papilledema bilateral — elevated ICP","icd":"H47.10","onset":"2024","status":"Active","notes":"Opening pressure 32 cmH2O on LP"},
    {"problem":"Idiopathic intracranial hypertension","icd":"G93.2","onset":"2024","status":"Active","notes":"BMI 38, female, reproductive age — classic demographic"},
    {"problem":"Obesity","icd":"E66.9","onset":"2019","status":"Active","notes":"BMI 38"}
  ],
  "medications": [
    {"name":"Acetazolamide 500mg BID (starting today)","sig":"Take 1 tablet by mouth twice daily — new prescription","prescriber":"Dr. Neurology","start":"11/2024","refills":2,"status":"Active"},
    {"name":"Oral contraceptive pill","sig":"Take 1 tablet daily","prescriber":"Dr. OB","start":"2022","refills":11,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"CSF Analysis","results":[
    {"test":"Opening pressure","value":"32","unit":"cmH2O","ref":"<20","flag":"H"},
    {"test":"CSF appearance","value":"Clear, colorless","unit":"","ref":"Clear","flag":""},
    {"test":"CSF WBC","value":"2","unit":"cells/μL","ref":"0-5","flag":""},
    {"test":"CSF protein","value":"28","unit":"mg/dL","ref":"15-45","flag":""},
    {"test":"CSF glucose","value":"62","unit":"mg/dL","ref":"50-80","flag":""}
  ]}],
  "imaging": [{"date":"11/15/2024","study":"MRI Brain/Orbits with gadolinium","indication":"Bilateral disc swelling, headaches","findings":"Bilateral optic nerve sheath distension. Flattening of posterior globes bilaterally. Empty sella. No mass lesion, no venous sinus thrombosis, no hydrocephalus. Tonsillar position normal.","impression":"Imaging features consistent with raised intracranial pressure. No secondary cause identified. Findings support idiopathic intracranial hypertension."}],
  "ddxTargets": ["Idiopathic intracranial hypertension — papilledema (correct)","Malignant hypertension","Cerebral venous sinus thrombosis","Intracranial mass with mass effect","Cryptococcal meningitis","Medication-induced (tetracyclines, vitamin A, steroid withdrawal)"],
  "coachFinal": "Diagnosis: idiopathic intracranial hypertension causing papilledema. Key OD learning points: (1) Bilateral disc swelling in a young obese woman with headaches = IIH until proven otherwise. Unilateral disc swelling has a much broader differential including AION, mass, malignant hypertension. (2) LP opening pressure threshold for treatment: >25 cmH2O is borderline; >30 cmH2O with symptoms warrants treatment. (3) The OD's job: document visual fields (Humphrey 24-2) and OCT RNFL at every visit — visual field loss is the feared outcome, not the headache. (4) Treatment: weight loss (most effective long-term), acetazolamide, optic nerve sheath fenestration if failing medical therapy and vision declining. (5) This patient is on OCPs — while not the primary cause, all potential contributing medications should be reviewed."
},

"anterior-uveitis-hlab27-od": {
  "diagnosis": "Recurrent Anterior Uveitis, HLA-B27 Positive — Associated with Ankylosing Spondylitis",
  "problems": [
    {"problem":"Recurrent anterior uveitis, bilateral","icd":"H20.012","onset":"2021","status":"Active","notes":"Third episode in 3 years, HLA-B27 positive"},
    {"problem":"Ankylosing spondylitis — probable","icd":"M45.9","onset":"2024","status":"Active","notes":"Rheumatology referral placed today"},
    {"problem":"Morning stiffness — back pain","icd":"M54.5","onset":"2022","status":"Active","notes":"Worse in morning, improves with activity"}
  ],
  "medications": [
    {"name":"Prednisolone acetate 1% drops q1h right eye","sig":"Instill 1 drop right eye every 1 hour while awake","prescriber":"Dr. Chen","start":"11/2024","refills":1,"status":"Active"},
    {"name":"Homatropine 2% drops BID right eye","sig":"Instill 1 drop right eye twice daily","prescriber":"Dr. Chen","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Ibuprofen 400mg TID PRN","sig":"Take for back pain as needed","prescriber":"Self","start":"2022","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Uveitis Workup","results":[
    {"test":"HLA-B27","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"ANA","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"ANCA","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"ACE","value":"18","unit":"U/L","ref":"8-52","flag":""},
    {"test":"ESR","value":"42","unit":"mm/hr","ref":"0-20","flag":"H"},
    {"test":"CRP","value":"1.8","unit":"mg/dL","ref":"<1.0","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["HLA-B27 associated anterior uveitis — ankylosing spondylitis (correct)","Idiopathic anterior uveitis","Sarcoid uveitis","Reactive arthritis (Reiter syndrome)","IBD-associated uveitis","Herpes simplex anterior uveitis"],
  "coachFinal": "Diagnosis: recurrent HLA-B27 anterior uveitis associated with ankylosing spondylitis. Key OD learning points: (1) HLA-B27 uveitis classic: unilateral, acute onset, fibrinous/intense inflammation, recurrent (alternating eyes). (2) HLA-B27 associations to screen: ankylosing spondylitis (back pain + SI joint tenderness + morning stiffness > 3 months = refer rheum for XR sacroiliac joints), reactive arthritis, psoriatic arthritis, IBD. (3) Treatment: aggressive topical steroids (prednisolone q1h) + cycloplegic. Chronic cases may need systemic immunomodulatory therapy through rheumatology. (4) The OD's systemic referral today — rheumatology — is the most important management step. Untreated AS leads to spinal ankylosis ('bamboo spine'). (5) Complications of chronic uveitis: posterior synechiae, cataract, secondary glaucoma, CME."
},

"crao-systemic-workup-od": {
  "diagnosis": "Central Retinal Artery Occlusion (CRAO) — Cardioembolic, Urgent Stroke Workup Required",
  "problems": [
    {"problem":"Central retinal artery occlusion, left eye","icd":"H34.11","onset":"2024","status":"Active","notes":"Acute, 2 hours ago — within potential treatment window"},
    {"problem":"Atrial fibrillation — new diagnosis","icd":"I48.0","onset":"2024","status":"Active","notes":"Detected on ECG today, likely embolic source"},
    {"problem":"Hypertension","icd":"I10","onset":"2019","status":"Active","notes":"On amlodipine"}
  ],
  "medications": [
    {"name":"Amlodipine 10mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Dr. Kim","start":"01/2020","refills":5,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Urgent Cardiovascular and Stroke Labs","results":[
    {"test":"INR/PT","value":"1.1","unit":"","ref":"0.9-1.1","flag":""},
    {"test":"CBC — WBC","value":"8.2","unit":"K/μL","ref":"4.5-11","flag":""},
    {"test":"Lipid panel — LDL","value":"152","unit":"mg/dL","ref":"<100","flag":"H"},
    {"test":"HbA1c","value":"5.8","unit":"%","ref":"<5.7","flag":""},
    {"test":"ESR","value":"18","unit":"mm/hr","ref":"0-20","flag":""},
    {"test":"CRP","value":"0.4","unit":"mg/dL","ref":"<1.0","flag":""}
  ]}],
  "imaging": [{"date":"11/18/2024","study":"OCT Macula + Fundus Photography — Left Eye","indication":"Sudden painless vision loss, cherry red spot","findings":"Left eye: Diffuse inner retinal whitening (opacification) consistent with ischemia. Cherry red spot at fovea — intact choroidal circulation visible through thin foveal tissue. Boxcar segmentation of blood column in retinal arterioles. Foveal reflex absent. Right eye: Normal.","impression":"Findings diagnostic of central retinal artery occlusion left eye. Acute presentation — refer immediately for systemic stroke evaluation and potential thrombolysis consideration."}],
  "ddxTargets": ["Central retinal artery occlusion — cardioembolic (correct)","Branch retinal artery occlusion","Anterior ischemic optic neuropathy (AION)","Giant cell arteritis — CRAO","Central retinal vein occlusion","Acute angle closure glaucoma"],
  "coachFinal": "Diagnosis: acute CRAO, likely cardioembolic from newly detected atrial fibrillation. Key OD learning points: (1) CRAO is a 'stroke of the eye' — treat as a stroke. The 90-day stroke risk after CRAO is 10-15%, highest in first 2 weeks. IMMEDIATE referral to emergency room for stroke protocol. (2) Treatment window: IV tPA within 4.5 hours (central vision may be salvageable). Ocular massage, AC paracentesis, and IOP-lowering can improve perfusion acutely. (3) Embolic workup: ECG (found AFib today), carotid ultrasound, echo, lipid panel, ANA if younger patient. (4) AFib is the embolic source — this patient needs anticoagulation urgently. (5) Giant cell arteritis must be excluded in any CRAO in a patient >50 with ESR/CRP (this patient's ESR 18, CRP 0.4 — GCA less likely, but temporal artery biopsy may still be warranted if any jaw claudication or headache)."
},

"dry-eye-sjogrens-od": {
  "diagnosis": "Sjögren Syndrome — Primary, with Severe Aqueous-Deficient Dry Eye Disease",
  "problems": [
    {"problem":"Sjögren syndrome — primary","icd":"M35.00","onset":"2024","status":"Active","notes":"Anti-SSA/Ro positive, rheumatology referral placed"},
    {"problem":"Aqueous-deficient dry eye disease — severe","icd":"H04.123","onset":"2022","status":"Active","notes":"Schirmer test 3mm bilateral"},
    {"problem":"Arthralgias — bilateral small joints","icd":"M25.50","onset":"2023","status":"Active","notes":"Symmetric, hands and wrists"}
  ],
  "medications": [
    {"name":"Cyclosporine 0.09% ophthalmic emulsion (Restasis or generic) BID","sig":"Instill 1 drop each eye twice daily","prescriber":"Dr. Chen","start":"11/2024","refills":2,"status":"Active — new"},
    {"name":"Artificial tears preservative-free q2-4h","sig":"Instill 1-2 drops each eye every 2-4 hours as needed","prescriber":"Dr. Chen","start":"2022","refills":12,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Sjögren Antibody Panel","results":[
    {"test":"Anti-SSA (Ro)","value":"Positive 240","unit":"units","ref":"<20","flag":"H"},
    {"test":"Anti-SSB (La)","value":"Positive 68","unit":"units","ref":"<20","flag":"H"},
    {"test":"ANA","value":"Positive 1:320","unit":"titer","ref":"<1:80","flag":"H"},
    {"test":"RF","value":"Positive 48","unit":"IU/mL","ref":"<14","flag":"H"},
    {"test":"CBC — WBC","value":"3.8","unit":"K/μL","ref":"4.5-11","flag":"L"},
    {"test":"ESR","value":"48","unit":"mm/hr","ref":"0-20","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Primary Sjögren syndrome with aqueous-deficient DED (correct)","Rheumatoid arthritis — associated dry eye","Age-related aqueous deficiency","LASIK-related dry eye — neuropathic","Rosacea ocular — meibomian gland dysfunction","Lymphoma — rare orbital","Medication-induced dry eye"],
  "coachFinal": "Diagnosis: primary Sjögren syndrome with severe aqueous-deficient dry eye. Key OD learning points: (1) The SICCA criteria for Sjögren: anti-SSA/Ro positivity + Schirmer <5mm bilateral OR rose bengal staining pattern. This patient meets both. (2) Sjögren is systemic — beyond dry eyes and dry mouth: arthralgias (present), lymphoma risk (5-44x elevated), peripheral neuropathy, interstitial nephritis. Rheumatology referral is non-optional. (3) Treatment ladder: preservative-free tears → cyclosporine (anti-inflammatory) → lifitegrast → punctal plugs → serum tears → scleral lenses. (4) Lymphoma surveillance: swollen salivary glands + lymphadenopathy + leukopenia = red flag. This patient's WBC 3.8 (leukopenia) warrants lymphoma monitoring. (5) Anti-SSA/Ro positivity in pregnancy → risk of neonatal lupus/congenital heart block — counsel on this if childbearing age."
},

"glaucoma-progression-od": {
  "diagnosis": "Primary Open-Angle Glaucoma — Progression Despite Target IOP (Structural-Functional Progression)",
  "problems": [
    {"problem":"Primary open-angle glaucoma, bilateral","icd":"H40.1131","onset":"2019","status":"Active","notes":"Progressing despite IOP at target — OCT RNFL progression, new arcuate defect right eye"},
    {"problem":"Hypertension","icd":"I10","onset":"2016","status":"Active","notes":"On lisinopril — recent hypotensive episodes at night"}
  ],
  "medications": [
    {"name":"Latanoprost 0.005% drops QHS bilateral","sig":"Instill 1 drop each eye at bedtime","prescriber":"Dr. Chen","start":"2019","refills":5,"status":"Active"},
    {"name":"Lisinopril 20mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Dr. Kim","start":"2017","refills":8,"status":"Active"}
  ],
  "labs": [],
  "imaging": [{"date":"11/18/2024","study":"OCT RNFL and Ganglion Cell Complex + Humphrey Visual Field 24-2","indication":"Glaucoma monitoring, IOP 21 on latanoprost — check for progression","findings":"OCT RNFL: Right eye inferior sector thickness decreased from 82μm (2022) to 68μm (2024) — rate of progression -7μm/year. Left eye: stable. GCC: right eye inferior GCC loss corresponding to RNFL thinning. Humphrey VF 24-2: right eye new inferior arcuate scotoma (MD -4.2 dB, PSD 3.8 dB). Left eye: stable MD -1.1 dB. Cup-to-disc ratio OD 0.75, OS 0.70.","impression":"Structural and functional progression right eye despite IOP 21 (target IOP). Reassess target IOP — consider new target of <15 mmHg. SLT or add-on agent warranted. Consider 24-hour IOP monitoring and nocturnal blood pressure assessment."}],
  "ddxTargets": ["POAG with structural-functional progression at target IOP (correct)","Normal tension glaucoma — nocturnal hypotension driving progression","Steroid-induced glaucoma","Pseudoexfoliation glaucoma","Secondary open-angle — pigment dispersion","Progressive NAION mimicking glaucoma"],
  "coachFinal": "Diagnosis: POAG with progression despite target IOP. Key OD learning points: (1) Target IOP failure: structural change (OCT RNFL decline -7μm/year) + functional change (new arcuate scotoma) despite IOP at target. New target must be set lower. (2) SLT as next step: Laser Trabeculoplasty Consensus Trial shows SLT is as effective as medical therapy as initial or add-on treatment. (3) Nocturnal hypotension: this patient is on lisinopril and may have nocturnal BP dips → reduced ocular perfusion pressure during sleep → glaucoma progression independent of IOP. 24-hour BP Holter is warranted. (4) Rate of progression matters: -7μm/year is significant. Project lifespan remaining vision — at this rate, functional loss within 5-8 years in right eye. (5) The OD's documentation must include: MD trend, RNFL trend analysis graph (GPA), and explicit discussion of target IOP reassessment."
},

"pediatric-amblyopia-od": {
  "diagnosis": "Anisometropic Amblyopia, Right Eye — Moderate Severity",
  "problems": [
    {"problem":"Anisometropic amblyopia, right eye","icd":"H53.001","onset":"2024","status":"Active","notes":"BCVA 20/60 right eye, 20/20 left eye — significant anisometropia"},
    {"problem":"Hyperopia, high right eye","icd":"H52.01","onset":"2024","status":"Active","notes":"+4.75 DS OD vs +1.00 DS OS"}
  ],
  "medications": [
    {"name":"Spectacle correction — full cycloplegic refraction","sig":"Wear glasses full-time starting immediately","prescriber":"Dr. Chen","start":"11/2024","refills":0,"status":"Active — new prescription"}
  ],
  "labs": [],
  "imaging": [],
  "ddxTargets": ["Anisometropic amblyopia from high hyperopia right eye (correct)","Strabismic amblyopia — right esotropia","Deprivation amblyopia — congenital cataract","Organic vision loss — optic nerve hypoplasia","Normal visual variation — bilateral","Refractive amblyopia — bilateral high refractive error"],
  "coachFinal": "Diagnosis: anisometropic amblyopia OD from uncorrected high hyperopia. Key OD learning points: (1) Critical period for amblyopia treatment: birth to ~7 years (sensitive period), with diminishing plasticity. Age 6: good prognosis with treatment. (2) Evidence-based sequence: (a) Full spectacle correction FIRST — wait 12-18 weeks; many children gain 1-3 lines with glasses alone ('spectacle correction trial'). (b) Add patching/atropine penalization ONLY if glasses are insufficient. (3) Patching prescription: PEDIG data supports 2 hours/day near-vision patching as effective as 6 hours for moderate amblyopia. (4) Anisometropia threshold for amblyopia risk: ≥1.00 D myopia, ≥1.50 D hyperopia, ≥1.00 D astigmatism. This child has 3.75 D difference. (5) The parent's key question: 'Will my child have normal vision?' Answer: excellent prognosis if treated promptly — compliance with glasses and patching is the rate-limiting factor."
},

"contact-lens-keratitis-od": {
  "diagnosis": "Pseudomonas Aeruginosa Bacterial Keratitis — Contact Lens-Associated",
  "problems": [
    {"problem":"Bacterial keratitis, right eye — contact lens associated","icd":"H16.031","onset":"2024","status":"Active","notes":"Paracentral infiltrate, epithelial defect — Pseudomonas most likely"},
    {"problem":"Extended contact lens wear — overnight","icd":"Z96.1","onset":"2022","status":"Active","notes":"Patient admits to sleeping in lenses routinely"}
  ],
  "medications": [
    {"name":"Ciprofloxacin 0.3% drops q1h right eye (day 1-3)","sig":"Instill 1 drop right eye every 1 hour while awake, first 48 hours","prescriber":"Dr. Chen","start":"11/2024","refills":0,"status":"Active — new"},
    {"name":"Tobramycin 0.3% drops alternating with ciprofloxacin q30min (first 6 hours)","sig":"Alternate with ciprofloxacin every 30 minutes for first 6 hours only","prescriber":"Dr. Chen","start":"11/2024","refills":0,"status":"Active — loading dose only"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Corneal Cultures","results":[
    {"test":"Corneal scraping culture","value":"Gram-negative rods seen on smear","unit":"","ref":"No growth","flag":"H"},
    {"test":"Culture — preliminary","value":"Pending 24-48h — likely Pseudomonas aeruginosa","unit":"","ref":"No growth","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Pseudomonas bacterial keratitis — contact lens (correct)","Acanthamoeba keratitis — contact lens (misses shower/tap water history)","Sterile marginal infiltrate — smaller, peripheral, no epithelial defect","Herpes simplex keratitis — dendritic pattern","Staphylococcal keratitis — central, slower progression","Fungal keratitis — trauma history, feathery borders"],
  "coachFinal": "Diagnosis: bacterial keratitis (likely Pseudomonas) from overnight contact lens wear. Key OD learning points: (1) Pseudomonas vs Acanthamoeba distinction is critical — both are contact lens-associated but Acanthamoeba requires very different treatment (PHMB/brolene, NOT fluoroquinolones). Ask specifically about: shower/swimming in contacts, tap water exposure, hot tub use. (2) Culture BEFORE antibiotics — corneal scraping for gram stain, culture, and sensitivity. In practice, start treatment empirically then adjust based on cultures. (3) Fortified antibiotics for severe cases: tobramycin 14mg/mL alternating with cefazolin 50mg/mL. For moderate cases, fluoroquinolone monotherapy (ciprofloxacin) is first-line. (4) Pseudomonas: rapid, aggressive tissue destruction ('melting'). Follow daily in first 48 hours. Signs of worsening = refer to cornea specialist immediately. (5) Contact lens counseling: discard all current lenses and case, never sleep in lenses, replace case monthly, use fresh solution."
},

"macular-hole-staging-od": {
  "diagnosis": "Full-Thickness Macular Hole, Right Eye — Stage 3 (OCT Classification)",
  "problems": [
    {"problem":"Full-thickness macular hole, right eye — Stage 3","icd":"H35.341","onset":"2024","status":"Active","notes":"Vitreoretinal surgery referral urgent — within 2-4 weeks for best prognosis"},
    {"problem":"Age-related macular degeneration — fellow eye risk","icd":"H35.30","onset":"2024","status":"Active","notes":"No AMD changes OS currently, but fellow eye risk present"}
  ],
  "medications": [
    {"name":"No current ocular medications","sig":"N/A","prescriber":"N/A","start":"N/A","refills":0,"status":"N/A"}
  ],
  "labs": [],
  "imaging": [{"date":"11/18/2024","study":"OCT Macula — Bilateral","indication":"Central scotoma and metamorphopsia, right eye","findings":"Right eye: Full-thickness macular hole at foveal center, 312 μm minimum hole diameter, 481 μm base diameter. Intraretinal cysts at hole margins. No operculum visible (Stage 3). Subretinal fluid surrounding hole margins. Left eye: Normal foveal contour, no hole or lamellar changes.","impression":"Stage 3 full-thickness macular hole right eye (minimum diameter 312 μm, no Weiss ring visible confirming complete PVD has not occurred). Recommend vitreoretinal surgery consultation within 2-4 weeks. Prognosis: closure rate 90-95% with vitrectomy, ILM peeling, and gas tamponade."}],
  "ddxTargets": ["Stage 3 full-thickness macular hole (correct)","Stage 2 macular hole — smaller, without cysts","Lamellar macular hole — partial thickness, better prognosis","Macular pseudohole — epiretinal membrane, not a true hole","Age-related macular degeneration with geographic atrophy","Vitreomacular traction syndrome"],
  "coachFinal": "Diagnosis: Stage 3 full-thickness macular hole, right eye. Key OD learning points: (1) OCT staging: Stage 1 = vitreomacular traction; Stage 2 = small FTMH <250μm; Stage 3 = FTMH >250μm without posterior vitreous detachment; Stage 4 = FTMH with complete PVD (Weiss ring visible). (2) Natural history: Stage 3 macular holes rarely close spontaneously. Surgery is indicated. (3) Surgical success rate: 90-95% anatomic closure with PPV + ILM peeling + gas tamponade (C3F8 or SF6). Visual recovery: most patients gain 2+ lines; best results with smaller holes and shorter symptom duration. (4) Fellow eye risk: 10-15% lifetime risk of macular hole in the left eye. Educate on Amsler grid self-monitoring. (5) Post-op counseling: patient must maintain face-down position for 5-7 days — critical for gas bubble to tamponade the hole. Plan this before referring."
},

# ── PT CASES ──────────────────────────────────────────────────────────────
"acl-return-to-sport-pt": {
  "diagnosis": "ACL Reconstruction Rehabilitation — Return-to-Sport Evaluation (LSI 78%, Not Yet Cleared)",
  "problems": [
    {"problem":"Status post right ACL reconstruction with patellar tendon autograft","icd":"M23.611","onset":"2024","status":"Active","notes":"8 months post-op, return-to-sport evaluation"},
    {"problem":"Quadriceps weakness — right limb","icd":"M62.81","onset":"2024","status":"Active","notes":"LSI 78% on isokinetic testing — criterion <90% not met"}
  ],
  "medications": [
    {"name":"Ibuprofen 400mg PRN post-exercise","sig":"Take 1 tablet as needed after PT sessions if soreness","prescriber":"Dr. Ortho","start":"08/2024","refills":0,"status":"Active"}
  ],
  "labs": [],
  "imaging": [{"date":"03/15/2024","study":"MRI Right Knee — Pre-Op","indication":"ACL tear after soccer injury","findings":"Complete tear ACL at femoral attachment. Medial tibial and lateral femoral bone bruising consistent with pivot-shift mechanism. Intact PCL, MCL, LCL. No meniscal tear.","impression":"Complete ACL tear. Surgical candidate confirmed."}],
  "ddxTargets": ["ACL reconstruction rehab — not yet return-to-sport ready (correct)","Return-to-sport cleared — LSI criteria met","Re-rupture of ACL graft","Contralateral ACL injury risk","Patellofemoral pain syndrome — concomitant issue","Graft laxity — early failure"],
  "coachFinal": "Diagnosis: post-ACL reconstruction, return-to-sport evaluation — NOT yet cleared. LSI 78%, below 90% threshold. Key PT learning points: (1) Return-to-sport criteria: quad LSI ≥90% on isokinetic testing, hop test LSI ≥90% (single leg, triple hop, crossover hop), and psychological readiness (ACL-RSI ≥65). This patient fails on LSI. (2) Re-injury risk: an LSI of 78% carries 4x higher re-injury risk vs 90%+. The PT's role is to communicate this clearly — premature return is the leading cause of graft failure. (3) Testing battery: isokinetic testing at 60°/s and 180°/s, 4-hop test series, Y-balance test, 5-10-5 agility. (4) Time is not the criterion: 8 months is a guideline, not a clearance. Athletes can be 12 months post-op and still fail criteria. (5) The coach/athlete/parent pressure to return is real — the PT must hold the line on objective criteria."
},

"parkinson-falls-pt": {
  "diagnosis": "Parkinson Disease with Postural Instability and Gait Disorder (PIGD) — High Fall Risk",
  "problems": [
    {"problem":"Parkinson disease — Stage III Hoehn & Yahr","icd":"G20","onset":"2018","status":"Active","notes":"Third fall this month, festination, freezing at doorways"},
    {"problem":"Orthostatic hypotension","icd":"I95.1","onset":"2022","status":"Active","notes":"BP drop >20 systolic on standing — contributes to falls"}
  ],
  "medications": [
    {"name":"Carbidopa-levodopa 25-100mg TID","sig":"Take 1 tablet by mouth three times daily — 30 min before meals","prescriber":"Dr. Neurology","start":"2018","refills":5,"status":"Active"},
    {"name":"Pramipexole 0.5mg TID","sig":"Take 1 tablet by mouth three times daily","prescriber":"Dr. Neurology","start":"2020","refills":5,"status":"Active"},
    {"name":"Midodrine 5mg TID","sig":"Take 1 tablet three times daily, not after 6pm","prescriber":"Dr. Neurology","start":"2023","refills":3,"status":"Active"}
  ],
  "labs": [],
  "imaging": [],
  "ddxTargets": ["Parkinson disease with PIGD — fall risk (correct)","Progressive supranuclear palsy — early parkinsonism","Multiple system atrophy — autonomic dominant","Medication-induced parkinsonism","Normal pressure hydrocephalus — gait disorder","Vascular parkinsonism — step-wise pattern"],
  "coachFinal": "Diagnosis: PD with PIGD, Hoehn & Yahr Stage III, high fall risk. Key PT learning points: (1) Evidence-based PT for PD: LSVT BIG (amplitude-focused motor training) has strongest RCT support for motor function. Tango dancing also has strong evidence. Standard PT is less effective than cueing strategies. (2) Balance assessment: Berg Balance Scale <45 = high fall risk; MiniBESTest is more sensitive for PD. (3) Freezing of gait (FOG) strategies: auditory cues (metronome), visual cues (laser pointer, floor lines), attentional strategies, counting steps, turning technique. (4) Orthostatic hypotension: PT exercises supine/sitting first, check BP standing, compression garments, avoid hot environments, tilt-table training if severe. (5) Dual-task training is essential in PD — the loss of automaticity means patients must consciously control gait, but cannot simultaneously talk. This is why freezing occurs at doorways (cognitive demand increases)."
},

"stroke-pt-goals": {
  "diagnosis": "Acute Ischemic Stroke Rehabilitation — Brunnstrom Stage II, Early Neuroplasticity Window",
  "problems": [
    {"problem":"Left MCA ischemic stroke — acute","icd":"I63.512","onset":"2024","status":"Active","notes":"Day 14, right hemiplegia, acute inpatient rehab"},
    {"problem":"Right hemiplegia — upper and lower extremity","icd":"G81.90","onset":"2024","status":"Active","notes":"UE 2/5, LE 3/5 strength, Brunnstrom Stage II UE"},
    {"problem":"Dysphagia — moderate","icd":"R13.10","onset":"2024","status":"Active","notes":"SLP evaluation completed, pureed diet + nectar-thick liquids"}
  ],
  "medications": [
    {"name":"Aspirin 81mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Neurology","start":"11/2024","refills":11,"status":"Active"},
    {"name":"Atorvastatin 80mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Neurology","start":"11/2024","refills":5,"status":"Active"},
    {"name":"Lisinopril 10mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Neurology","start":"11/2024","refills":5,"status":"Active"}
  ],
  "labs": [],
  "imaging": [{"date":"11/05/2024","study":"MRI Brain DWI/FLAIR","indication":"Acute ischemic stroke evaluation","findings":"Diffusion restriction in left MCA territory — frontal lobe, anterior parietal lobe, and corona radiata. FLAIR: evolving ischemic change same distribution. No hemorrhagic transformation. No midline shift.","impression":"Left MCA territory ischemic infarct, age-acute. No hemorrhagic transformation."}],
  "ddxTargets": ["Left MCA stroke rehabilitation — Brunnstrom Stage II (correct)","Hemorrhagic stroke rehabilitation","Subdural hematoma — chronic, subacute presentation","Todd's paralysis — post-ictal, expected to resolve","MS relapse with hemiplegia","Brain tumor with focal deficits"],
  "coachFinal": "Diagnosis: left MCA stroke, early rehabilitation phase, Brunnstrom Stage II. Key PT learning points: (1) Brunnstrom staging: Stage I=flaccidity; Stage II=spasticity developing, mass flexion synergy; Stage III=voluntary movement only in synergy; Stage IV=movement outside synergy; Stage V=individual joint movements; Stage VI=near normal. Stage II prognosis: moderate — most Stage II patients progress to at least Stage III-IV with intensive PT. (2) Neuroplasticity window: most recovery occurs first 3-6 months post-stroke. Week 2 is still within the critical early window — high-intensity, task-specific training NOW has disproportionate benefit. (3) CIMT (constraint-induced movement therapy): most evidence-based for upper extremity when any wrist/finger extension present. (4) Intensity matters: EXCITE trial showed 2 weeks of CIMT superior to standard PT for UE function. Daily practice, massed practice, shaping. (5) The key question from family 'will he walk again?' — prognosis at Stage II LE: 60-70% community ambulators at 6 months with intensive PT."
},

# ── NURSING CASES ─────────────────────────────────────────────────────────
"nursing-sepsis-surveillance": {
  "diagnosis": "Post-Operative Sepsis — Anastomotic Leak after Colectomy",
  "problems": [
    {"problem":"Sigmoid colon resection for diverticular disease — post-op day 2","icd":"K57.30","onset":"2024","status":"Active","notes":"Laparoscopic sigmoid colectomy — now febrile, confused"},
    {"problem":"Developing sepsis — anastomotic leak suspected","icd":"A41.9","onset":"2024","status":"Active","notes":"NEWS2 score 7 — escalation criteria met"}
  ],
  "medications": [
    {"name":"Cefazolin 1g IV q8h (surgical prophylaxis)","sig":"IV infusion every 8 hours","prescriber":"Surgery","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Heparin 5000 units SQ BID","sig":"Subcutaneous injection twice daily","prescriber":"Surgery","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Ketorolac 15mg IV q6h PRN pain","sig":"IV push every 6 hours as needed for pain","prescriber":"Surgery","start":"11/2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/20/2024","panel":"Post-Op Day 2 Labs","results":[
    {"test":"WBC","value":"18.4","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Bands","value":"24","unit":"%","ref":"0-10","flag":"H"},
    {"test":"Lactate","value":"2.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"Creatinine","value":"1.8","unit":"mg/dL","ref":"0.6-1.2","flag":"H"},
    {"test":"Procalcitonin","value":"4.2","unit":"ng/mL","ref":"<0.5","flag":"H"}
  ]}],
  "imaging": [{"date":"11/20/2024","study":"CT Abdomen/Pelvis with Contrast (ordered STAT)","indication":"Post-op day 2, fever, confusion, worsening abdominal pain","findings":"PENDING — ordered by surgical team","impression":"CT ordered urgently — patient deteriorating, anastomotic leak cannot be excluded."}],
  "ddxTargets": ["Post-operative sepsis from anastomotic leak (correct)","Expected post-operative inflammation — not sepsis","Pneumonia — post-op atelectasis","Urinary tract infection — Foley catheter","Pulmonary embolism — post-op patient","Clostridium difficile colitis — post-antibiotics"],
  "coachFinal": "Diagnosis: post-op sepsis, likely anastomotic leak. Key nursing learning points: (1) NEWS2 calculation: RR 24 (+2), SpO2 93% (+2), temperature 38.9°C (+1), systolic BP 94 (+2) = NEWS2 score 7. Score ≥7 = immediate escalation required, physician must be present at bedside. (2) The RN is the surveillance system: 'looking wrong' + trending vitals are legitimate clinical findings. RN gestalt has been shown to predict deterioration before formal scoring triggers. (3) SBAR structure: Situation — 'Mr. Chen, post-op day 2 colectomy, new confusion and fever'; Background — 'HR trending up, now 118, temperature 38.9, BP falling to 94/62, RR 24, SpO2 93%'; Assessment — 'I'm concerned he's septic, possibly from anastomotic leak'; Recommendation — 'I need you at bedside now, lactate, blood cultures, CT abdomen STAT.' (4) Do NOT wait for a score to escalate when clinical gestalt says something is wrong. (5) The '3pm vital sign vs 5pm vital sign' pattern: nursing is uniquely positioned to recognize trends that individual snapshots miss."
},

"nursing-postpartum-emergency": {
  "diagnosis": "Postpartum Preeclampsia with Severe Features — Day 1 Post-Delivery",
  "problems": [
    {"problem":"Postpartum preeclampsia with severe features","icd":"O14.15","onset":"2024","status":"Active","notes":"BP 158/102, headache, RUQ pain, oliguria — postpartum day 1"},
    {"problem":"Recent vaginal delivery — 39 weeks","icd":"Z37.0","onset":"2024","status":"Active","notes":"Uncomplicated delivery, normotensive throughout labor"}
  ],
  "medications": [
    {"name":"Magnesium sulfate 4g IV loading dose THEN 2g/hr infusion","sig":"Loading dose 4g IV over 20 minutes, then continuous infusion 2g/hr","prescriber":"OB team","start":"11/2024","refills":0,"status":"Active — seizure prophylaxis"},
    {"name":"Labetalol 20mg IV q20min PRN","sig":"IV push for BP >160/110 — give 20mg, may repeat x2","prescriber":"OB team","start":"11/2024","refills":0,"status":"Active PRN"}
  ],
  "labs": [{"date":"11/20/2024","panel":"Preeclampsia Labs STAT","results":[
    {"test":"Platelet count","value":"98","unit":"K/μL","ref":"150-400","flag":"L"},
    {"test":"LDH","value":"892","unit":"U/L","ref":"122-222","flag":"H"},
    {"test":"AST","value":"124","unit":"U/L","ref":"10-40","flag":"H"},
    {"test":"ALT","value":"98","unit":"U/L","ref":"7-56","flag":"H"},
    {"test":"Urine protein","value":"3+","unit":"","ref":"Negative","flag":"H"},
    {"test":"Creatinine","value":"1.2","unit":"mg/dL","ref":"0.5-1.1","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Postpartum preeclampsia with severe features (correct)","Migraine — known history, dismissed too quickly","HELLP syndrome — platelets and LFTs elevated","Postpartum cardiomyopathy","Hypertensive urgency — non-pregnancy related","Eclampsia — seizures not yet occurred but risk present"],
  "coachFinal": "Diagnosis: postpartum preeclampsia with severe features. Key nursing learning points: (1) Preeclampsia does NOT end with delivery — 25-40% of eclampsia cases occur postpartum, most within 48 hours. BP must be monitored closely postpartum even after uncomplicated normotensive delivery. (2) Severe features: BP ≥160/110 (yes), headache unresponsive to medication (yes), RUQ/epigastric pain (yes), oliguria (yes). Any ONE severe feature requires magnesium seizure prophylaxis. (3) Migraine history does NOT change the clinical picture here — the constellation of BP + headache + RUQ pain + oliguria in a postpartum patient is preeclampsia until proven otherwise. Anchoring on 'she gets migraines' is a classic nursing error. (4) Magnesium toxicity signs the RN monitors: loss of patellar reflex (first sign), respiratory depression, then cardiac arrest. Antidote: calcium gluconate 1g IV. (5) SBAR to OB: 'I need you at bedside immediately — BP 158/102 with headache and RUQ pain, platelets 98K and LDH 892, magnesium running, patient is at risk for eclampsia.'"
},

# ── PHARMACY CASES ────────────────────────────────────────────────────────
"pharmacy-warfarin-cyp": {
  "diagnosis": "Clinically Significant Drug-Drug Interaction: Warfarin + Amiodarone + Clarithromycin (Triple CYP2C9/3A4 Inhibition)",
  "problems": [
    {"problem":"Atrial fibrillation — on warfarin","icd":"I48.0","onset":"2020","status":"Active","notes":"INR therapeutic 2.0-3.0 target on warfarin 5mg daily"},
    {"problem":"Ventricular arrhythmia — on amiodarone","icd":"I49.3","onset":"2023","status":"Active","notes":"Amiodarone 200mg daily — known CYP2C9 and CYP3A4 inhibitor"},
    {"problem":"Community-acquired pneumonia — requiring clarithromycin","icd":"J18.9","onset":"2024","status":"Active","notes":"New prescription today — strong CYP3A4 inhibitor"}
  ],
  "medications": [
    {"name":"Warfarin 5mg daily","sig":"Take 1 tablet by mouth daily — INR monitoring required","prescriber":"Dr. Cardiology","start":"03/2020","refills":11,"status":"Active"},
    {"name":"Amiodarone 200mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Dr. Cardiology","start":"08/2023","refills":5,"status":"Active"},
    {"name":"Clarithromycin 500mg BID x7 days (NEW — DO NOT FILL YET)","sig":"Take 1 tablet twice daily for 7 days","prescriber":"Dr. Urgent Care","start":"11/2024","refills":0,"status":"HOLD — interaction review required"}
  ],
  "labs": [{"date":"11/15/2024","panel":"INR Monitoring","results":[
    {"test":"INR","value":"2.4","unit":"","ref":"2.0-3.0","flag":""},
    {"test":"PT","value":"28.2","unit":"sec","ref":"11-13.5","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Dangerous CYP interaction: warfarin + amiodarone + clarithromycin (correct)","Safe to dispense with dose adjustment","Alternative antibiotic needed (azithromycin is safer)","INR monitoring only is sufficient","Discontinue amiodarone during antibiotic course","No interaction — proceed with prescription"],
  "coachFinal": "Diagnosis: triple drug interaction — warfarin toxicity risk from amiodarone + clarithromycin. Key pharmacy learning points: (1) Mechanism breakdown: Amiodarone is a potent CYP2C9 AND CYP3A4 inhibitor — it increases warfarin (S-warfarin via 2C9) AUC by 30-50% alone. Clarithromycin is a strong CYP3A4 inhibitor affecting R-warfarin. Together: expected INR increase of 50-100% from baseline. Current INR 2.4 → expected rise to 4.0-5.0+ = bleeding risk. (2) Recommendation: DO NOT dispense clarithromycin. Call prescriber. Suggest azithromycin (not a CYP3A4 inhibitor) as alternative. If clarithromycin is essential, warfarin dose must be reduced 25-50% AND INR rechecked in 3-4 days. (3) Time course: amiodarone has an extremely long half-life (40-55 days) — its CYP inhibition persists even after stopping. This interaction risk is ongoing for weeks to months. (4) Clinical documentation: flag the interaction, call the prescriber, document the conversation. The pharmacist's intervention prevents a potential intracranial hemorrhage. (5) This is precisely the scenario where the pharmacist's clinical training prevents harm that no other provider would catch."
},

"pharmacy-linezolid-ssri": {
  "diagnosis": "Contraindicated Drug Combination: Linezolid + Sertraline — Serotonin Syndrome Risk",
  "problems": [
    {"problem":"VRE bacteremia — requiring linezolid","icd":"A49.89","onset":"2024","status":"Active","notes":"MRSA coverage insufficient — VRE isolated from blood culture"},
    {"problem":"Major depressive disorder — on sertraline","icd":"F32.1","onset":"2021","status":"Active","notes":"Sertraline 150mg daily — SSRI, serotonergic agent"},
    {"problem":"Serotonin syndrome risk — if combination given","icd":"T43.221A","onset":"2024","status":"Active","notes":"Linezolid is a reversible MAO inhibitor — combination is potentially fatal"}
  ],
  "medications": [
    {"name":"Sertraline 150mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Dr. Psychiatry","start":"2021","refills":5,"status":"Active"},
    {"name":"Linezolid 600mg IV BID (PROPOSED — HOLD)","sig":"IV infusion every 12 hours — HOLD pending pharmacy review","prescriber":"ID team","start":"11/2024","refills":0,"status":"HOLD — serotonin syndrome risk"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Blood Culture — VRE","results":[
    {"test":"Blood culture x2","value":"Enterococcus faecium — Vancomycin-resistant (VRE)","unit":"","ref":"No growth","flag":"H"},
    {"test":"Linezolid susceptibility","value":"Susceptible (MIC 1)","unit":"","ref":"≤2","flag":""},
    {"test":"Daptomycin susceptibility","value":"Susceptible (MIC 1)","unit":"","ref":"≤4","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Linezolid contraindicated with sertraline — use daptomycin instead (correct)","Linezolid safe with careful monitoring","Sertraline must be discontinued and replaced","Wait 14 days (MAOi washout) before starting linezolid","Reduce sertraline dose to allow linezolid","Linezolid + sertraline with serotonin syndrome rescue plan"],
  "coachFinal": "Diagnosis: contraindicated combination — linezolid + sertraline = high serotonin syndrome risk. Key pharmacy learning points: (1) Mechanism: linezolid is a weak, reversible MAO-A inhibitor. SSRIs increase synaptic serotonin. MAO-A + SSRI = dramatic serotonin accumulation → Hunter criteria for serotonin syndrome: agitation, myoclonus, hyperreflexia, clonus, diaphoresis, tremor → can progress to hyperthermia, rhabdomyolysis, DIC, death. (2) Recommendation: use DAPTOMYCIN instead of linezolid for VRE bacteremia. Daptomycin 6mg/kg IV daily — no serotonergic interaction. Check susceptibility (already susceptible in this case). (3) If linezolid is truly the only option: discontinue sertraline and wait 2 weeks (5 half-lives). But 2-week washout is not practical in bacteremia. Daptomycin is the correct answer. (4) Other VRE options: tigecycline, oritavancin, telavancin — but daptomycin is first-line for bacteremia. (5) The pharmacist calling the ID team with this recommendation is preventing a potentially fatal drug interaction."
},

# ── PA CASES ──────────────────────────────────────────────────────────────
"pa-chest-pain-scope": {
  "diagnosis": "Acute Coronary Syndrome — Unstable Angina: PA Scope of Practice Threshold Reached",
  "problems": [
    {"problem":"Unstable angina — possible NSTEMI","icd":"I20.0","onset":"2024","status":"Active","notes":"Chest pressure 20 min, ECG ST changes, PA solo coverage — attending needed immediately"},
    {"problem":"Hypertension","icd":"I10","onset":"2018","status":"Active","notes":"On amlodipine"},
    {"problem":"Type 2 diabetes","icd":"E11.9","onset":"2020","status":"Active","notes":"A1c 7.8% on metformin"}
  ],
  "medications": [
    {"name":"Amlodipine 10mg daily","sig":"Take 1 tablet by mouth daily","prescriber":"Dr. Kim","start":"2019","refills":5,"status":"Active"},
    {"name":"Metformin 1000mg BID","sig":"Take 1 tablet by mouth twice daily with meals","prescriber":"Dr. Kim","start":"2021","refills":6,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Urgent Cardiac Workup","results":[
    {"test":"Troponin I (high-sensitivity)","value":"0.04","unit":"ng/mL","ref":"<0.02","flag":"H"},
    {"test":"BNP","value":"88","unit":"pg/mL","ref":"<100","flag":""},
    {"test":"Basic metabolic panel — K+","value":"4.1","unit":"mEq/L","ref":"3.5-5.0","flag":""}
  ]}],
  "imaging": [{"date":"11/18/2024","study":"12-Lead ECG","indication":"Chest pressure 20 minutes, tachycardia","findings":"Sinus tachycardia at 106 bpm. 1mm ST depression in V4-V6, leads II, aVF. No ST elevation. No pathological Q waves. Normal QTc 418ms.","impression":"Nonspecific ST changes — cannot exclude ischemia. Cardiac biomarkers and cardiology consultation required."}],
  "ddxTargets": ["Acute coronary syndrome — unstable angina/NSTEMI (correct)","Musculoskeletal chest wall pain","GERD / esophageal spasm","Pulmonary embolism","Pericarditis","Anxiety / hyperventilation"],
  "coachFinal": "Diagnosis: ACS (unstable angina vs early NSTEMI). PA scope of practice threshold clearly exceeded. Key PA learning points: (1) The PA's immediate action was correct: recognize the situation exceeds solo management, call attending IMMEDIATELY, do not delay while trying to work it up alone. This is not a failure — this is appropriate scope awareness. (2) PA-appropriate actions while attending arrives: 12-lead ECG ✓, IV access, aspirin 325mg chew, oxygen if SpO2 <94%, serial troponins, vitals q5-15min, prepare for potential transfer or cath lab activation. (3) HEART score: History (highly suspicious = 2) + ECG (nonspecific = 1) + Age (>65 = 2) + Risk factors (DM+HTN = 1) + Troponin (slight elevation = 2) = 8. High risk — early invasive strategy. (4) What the PA documents: 'Physician notified at [time], at bedside at [time], case transferred to physician management at [time].' Documentation protects the PA. (5) The PA's role post-attending arrival: logistics, family communication, coordination — not standing by feeling useless. The PA adds value."
},

# ── DENTAL CASES ──────────────────────────────────────────────────────────
"dental-perio-diabetes": {
  "diagnosis": "Generalized Stage III Grade C Periodontitis — Bidirectional Relationship with Uncontrolled T2DM",
  "problems": [
    {"problem":"Generalized Stage III Grade C periodontitis","icd":"K05.311","onset":"2024","status":"Active","notes":"5-7mm pocketing generalized, bone loss 30-50%"},
    {"problem":"Type 2 diabetes mellitus — poorly controlled","icd":"E11.9","onset":"2018","status":"Active","notes":"A1c 10.2% — periodontal inflammation drives insulin resistance"},
    {"problem":"Hypertension","icd":"I10","onset":"2019","status":"Active","notes":"On lisinopril, BP 148/92 today"}
  ],
  "medications": [
    {"name":"Metformin 500mg BID","sig":"Take 1 tablet by mouth twice daily","prescriber":"Dr. Castillo","start":"2019","refills":6,"status":"Active"},
    {"name":"Glipizide 5mg daily","sig":"Take 1 tablet daily","prescriber":"Dr. Castillo","start":"2021","refills":4,"status":"Active"},
    {"name":"Lisinopril 10mg daily","sig":"Take 1 tablet daily","prescriber":"Dr. Castillo","start":"2019","refills":5,"status":"Active"}
  ],
  "labs": [{"date":"10/20/2024","panel":"Diabetes Control","results":[
    {"test":"HbA1c","value":"10.2","unit":"%","ref":"<7.0","flag":"H"},
    {"test":"Fasting glucose","value":"248","unit":"mg/dL","ref":"70-100","flag":"H"},
    {"test":"LDL","value":"142","unit":"mg/dL","ref":"<100","flag":"H"}
  ]}],
  "imaging": [{"date":"11/18/2024","study":"Full Mouth Periapical and Bitewing Radiographs","indication":"Periodontal evaluation, generalized pocketing","findings":"Generalized horizontal bone loss averaging 30-35% at posterior teeth. Vertical bone loss 4-6mm at molars #2, #3, #14, #15, #18, #19. Furcation involvement Class II at upper molars bilaterally. Crestal bone loss at anterior teeth 2-3mm. No periapical pathology.","impression":"Generalized moderate-severe periodontitis with furcation involvement. Correlates with clinical probing depths 5-7mm. Treatment planning: full mouth scaling and root planing, periodontal reassessment at 6-8 weeks."}],
  "ddxTargets": ["Stage III Grade C generalized periodontitis — diabetes bidirectional (correct)","Stage II periodontitis — insufficient severity for this bone loss","Localized aggressive periodontitis","ANUG/ANUP — necrotizing","Gingival enlargement from medications (lisinopril/calcium channel blockers)","Leukemia — gingival infiltrate"],
  "coachFinal": "Diagnosis: Stage III Grade C periodontitis with uncontrolled T2DM — bidirectional relationship. Key dentistry learning points: (1) Bidirectional relationship: periodontal inflammation worsens insulin resistance (pro-inflammatory cytokines IL-6, TNF-α impair insulin signaling). Treating periodontitis reduces A1c by approximately 0.4% — similar to adding a second oral antidiabetic agent. (2) Staging (AAP 2017): Stage I-IV based on severity (probing depths, bone loss, tooth loss); Grading A/B/C based on rate of progression and risk factors. Grade C = rapid progression, evidence of glycemic risk factor. (3) Treatment modification for uncontrolled DM: prophylactic antibiotics NOT routinely needed, but infection risk is higher. Healing is impaired — the patient should be counseled that outcomes are better if A1c is improved. (4) Communication with endocrinologist: 'Your patient has Stage III periodontitis which is contributing to their difficulty achieving glycemic control. Following periodontal treatment, we expect a reduction in A1c.' (5) Monitoring schedule: diabetic patients require quarterly periodontal maintenance (3-month intervals) rather than standard 6-month recall."
},

"dental-ludwigs-angina": {
  "diagnosis": "Ludwig's Angina — Descending Neck Infection, Airway Emergency",
  "problems": [
    {"problem":"Ludwig's angina — bilateral floor of mouth and submandibular space infection","icd":"K12.2","onset":"2024","status":"Active","notes":"Airway emergency — bilateral elevation of floor of mouth, tongue displacement"},
    {"problem":"Source: mandibular molar infection, tooth #18","icd":"K04.7","onset":"2024","status":"Active","notes":"Necrotic tooth #18, periapical abscess as source"}
  ],
  "medications": [
    {"name":"Ampicillin-sulbactam 3g IV q6h (STAT)","sig":"IV infusion every 6 hours — started in ED","prescriber":"ED/Surgery","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Metronidazole 500mg IV q8h","sig":"IV infusion every 8 hours — anaerobic coverage","prescriber":"ED/Surgery","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Dexamethasone 8mg IV x1 (airway edema)","sig":"IV push once — reduce airway edema while preparing for intubation","prescriber":"ED","start":"11/2024","refills":0,"status":"Active — given once"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Infection and Metabolic","results":[
    {"test":"WBC","value":"22.4","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Bands","value":"31","unit":"%","ref":"0-10","flag":"H"},
    {"test":"CRP","value":"28.4","unit":"mg/dL","ref":"<1.0","flag":"H"},
    {"test":"Lactate","value":"2.1","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"Glucose","value":"194","unit":"mg/dL","ref":"70-100","flag":"H"}
  ]}],
  "imaging": [{"date":"11/18/2024","study":"CT Neck with Contrast","indication":"Bilateral floor of mouth swelling, trismus, fever — evaluate extent of infection and airway","findings":"Bilateral submandibular and sublingual space phlegmon with gas formation. Bilateral sublingual spaces elevated compressing floor of mouth and displacing tongue superiorly and posteriorly. Airway narrowing at oropharyngeal level — estimated 40% narrowing. No discrete drainable abscess on current imaging (phlegmon phase). No descending mediastinitis on current cuts — chest CT pending.","impression":"Ludwig's angina with imminent airway compromise. Immediate surgical and anesthesia consultation required. Airway management before any surgical drainage."}],
  "ddxTargets": ["Ludwig's angina — bilateral submandibular space infection (correct)","Unilateral submandibular abscess (not bilateral)","Peritonsillar abscess — different location","Epiglottitis — different anatomy","Angioedema — no infection, rapid onset","Sublingual hematoma"],
  "coachFinal": "Diagnosis: Ludwig's angina — airway emergency. Key dentistry learning points: (1) Ludwig's definition: BILATERAL submandibular + sublingual + submental space involvement. NOT an abscess (usually no fluctuance on CT initially — phlegmon phase). (2) Immediate actions in first 5 minutes: airway assessment (can they still open mouth? stridor? accessory muscle use?), call anesthesia NOW for awake fiberoptic intubation if indicated, IV access and antibiotics, call oral surgery/ENT. (3) Airway first — BEFORE anything else: trismus 15mm means conventional laryngoscopy is impossible. Awake fiberoptic or surgical airway (tracheotomy) may be required. (4) Antibiotic coverage: polymicrobial (gram-positive cocci + oral anaerobes) — ampicillin-sulbactam OR penicillin + metronidazole. Add clindamycin if penicillin allergy. (5) Dental prevention: Ludwig's typically originates from lower molar periapical abscess (tooth #17-18 most common). Early endodontic treatment or extraction of necrotic teeth prevents this catastrophic spread."
},

# ── VETERINARY CASES ─────────────────────────────────────────────────────
"vet-gastric-dilatation-volvulus": {
  "diagnosis": "Gastric Dilatation-Volvulus (GDV) — Great Dane, Hemodynamic Compromise",
  "problems": [
    {"problem":"Gastric dilatation-volvulus — emergent","icd":"K31.89","onset":"2024","status":"Active","notes":"Unproductive retching 3 hours, tympanic abdomen, HR 148, weak pulses — GDV until proven otherwise"},
    {"problem":"Hemorrhagic gastroenteritis — prior episode","icd":"K29.20","onset":"2022","status":"Resolved","notes":"Single prior episode, recovered with supportive care"}
  ],
  "medications": [
    {"name":"Normal saline 0.9% IV bolus 90mL/kg over 1 hour (shock dose)","sig":"IV bolus — calculate per weight, reassess q15 minutes","prescriber":"Dr. Chen DVM","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Carprofen 2.2mg/kg PO BID (post-op)","sig":"Give orally twice daily — post-surgical pain management","prescriber":"Dr. Chen DVM","start":"11/2024","refills":4,"status":"Active post-op"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Pre-Surgical Blood Work — GDV","results":[
    {"test":"PCV (packed cell volume)","value":"52","unit":"%","ref":"37-55","flag":""},
    {"test":"Total solids","value":"7.8","unit":"g/dL","ref":"5.5-8.5","flag":""},
    {"test":"Glucose","value":"72","unit":"mg/dL","ref":"70-138","flag":""},
    {"test":"BUN","value":"38","unit":"mg/dL","ref":"7-27","flag":"H"},
    {"test":"Creatinine","value":"1.8","unit":"mg/dL","ref":"0.5-1.5","flag":"H"},
    {"test":"Potassium","value":"3.1","unit":"mEq/L","ref":"3.5-5.5","flag":"L"},
    {"test":"Lactate","value":"6.8","unit":"mmol/L","ref":"<2.5","flag":"H"}
  ]}],
  "imaging": [{"date":"11/18/2024","study":"Right Lateral and VD Abdominal Radiographs","indication":"Acute abdomen, unproductive retching, tympany — rule out GDV","findings":"Right lateral view: large gas-distended stomach compartmentalization — 'double bubble' sign with soft tissue band dividing gastric compartments consistent with volvulus. Liver silhouette cranially displaced. No free peritoneal gas. VD view: stomach gas shadow extending caudal to spleen. Spleen in abnormal position.","impression":"Radiographic appearance consistent with gastric dilatation-volvulus (GDV). Emergency surgery required. Confirm orogastric tube will not pass prior to surgery."}],
  "ddxTargets": ["Gastric dilatation-volvulus (correct)","Gastric dilatation without volvulus — bloat only","Splenic mass with hemorrhage","Mesenteric volvulus","Intestinal obstruction","Hemoabdomen from ruptured tumor"],
  "coachFinal": "Diagnosis: GDV in a Great Dane — minutes-to-death emergency. Key veterinary learning points: (1) Stabilization sequence: IV catheter → aggressive fluid resuscitation (20-30 mL/kg boluses, reassess, goal lactate normalization) → gastric decompression (orogastric tube or trocar) → emergency surgery. Do NOT wait for full diagnostics before starting fluids. (2) The volvulus part is what kills: 270-360° rotation of stomach around the esophagogastric axis → portal vein compression → splenic congestion → cardiovascular collapse → DIC. Lactate 6.8 = profound ischemia. (3) Surgery involves: derotation of stomach, assessment of gastric wall viability (necrotic tissue = partial gastrectomy), splenectomy if splenic thrombosis, and gastropexy (permanent fixation to prevent recurrence). (4) Post-op monitoring priorities: cardiac arrhythmias (reperfusion injury causes ventricular arrhythmias — most common cause of post-op death), DIC monitoring (PT/aPTT/fibrinogen), and monitoring for delayed gastric necrosis. (5) Prevention: prophylactic gastropexy is recommended in predisposed breeds (Great Dane, Weimaraner, German Shepherd, standard poodle) — reduces GDV recurrence from 80% to <5%."
},

"vet-feline-urethral-obstruction": {
  "diagnosis": "Urethral Obstruction — Male Domestic Shorthair Cat, Hyperkalemic Cardiovascular Compromise",
  "problems": [
    {"problem":"Urethral obstruction — complete","icd":"N13.9","onset":"2024","status":"Active","notes":"48 hours straining, no urine — K+ 7.4 on point-of-care"},
    {"problem":"Urethral plug — matrix-crystalline","icd":"N21.1","onset":"2024","status":"Active","notes":"Most common cause in young male cats"},
    {"problem":"Post-obstructive diuresis anticipated","icd":"N39.0","onset":"2024","status":"Active","notes":"IV fluid management required post-unblocking"}
  ],
  "medications": [
    {"name":"0.9% NaCl IV 10mL/kg/hr initial rate (NO lactated Ringer's — hyperkalemia)","sig":"IV infusion — avoid LRS until K+ normalized. Use 0.9% NaCl.","prescriber":"Dr. Rodriguez DVM","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Buprenorphine 0.01mg/kg IV q6h","sig":"IV injection every 6 hours — pain management","prescriber":"Dr. Rodriguez DVM","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Prazosin 0.25mg PO q12h (post-unblocking)","sig":"Give orally twice daily — reduce urethral spasm to prevent re-obstruction","prescriber":"Dr. Rodriguez DVM","start":"11/2024","refills":5,"status":"Active post-procedure"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Blocked Cat — Emergency Profile","results":[
    {"test":"Potassium (iSTAT point-of-care)","value":"7.4","unit":"mEq/L","ref":"3.5-5.5","flag":"H"},
    {"test":"BUN","value":"142","unit":"mg/dL","ref":"14-36","flag":"H"},
    {"test":"Creatinine","value":"8.8","unit":"mg/dL","ref":"0.6-2.4","flag":"H"},
    {"test":"Phosphorus","value":"9.8","unit":"mg/dL","ref":"3.1-7.5","flag":"H"},
    {"test":"pH (venous)","value":"7.14","unit":"","ref":"7.32-7.42","flag":"L"},
    {"test":"Glucose","value":"188","unit":"mg/dL","ref":"70-120","flag":"H"}
  ]}],
  "imaging": [{"date":"11/18/2024","study":"Lateral Abdominal Radiograph","indication":"Urethral obstruction — evaluate bladder, rule out uroliths","findings":"Markedly enlarged, turgid urinary bladder extending from pelvis to mid-abdomen. No radiopaque uroliths identified in urethra or bladder. No free peritoneal fluid.","impression":"Severely distended urinary bladder consistent with complete urethral obstruction. No radiopaque uroliths — obstruction likely mucous/matrix plug or functional spasm."}],
  "ddxTargets": ["Urethral obstruction — matrix plug (correct)","Urethral urolith (calcium oxalate)","Functional urethral obstruction — spasm","Detrusor atony without obstruction","Bladder rupture with uroabdomen","Retrograde prolapses in male cats"],
  "coachFinal": "Diagnosis: urethral obstruction, male DSH, K+ 7.4 — cardiovascular risk. Key veterinary learning points: (1) K+ 7.4 is a cardiovascular emergency in cats: bradycardia + ECG changes (tall peaked T waves, wide QRS, absent P waves = 'sinoventricular rhythm') can cause ventricular fibrillation. IV fluids FIRST before attempting unblocking — dilute the K+. Use 0.9% NaCl — avoid LRS (contains 4 mEq/L K+). (2) Unblocking technique: sedation (butorphanol ± ketamine), perineal retropulsion with catheter and saline flush, hydrophilic catheter placement and balloon tie-in urinary catheter for 24-48 hours. (3) Post-obstructive diuresis: expect 3-5x maintenance urine output for 12-24 hours post-unblocking — replace fluids to prevent dehydration. Check K+ every 6 hours. (4) Prazosin post-unblocking: alpha-1 blocker reduces urethral smooth muscle spasm — evidence shows reduces re-obstruction rate from ~25% to ~8%. (5) Recurrence prevention: wet food diet (dilutes urine), environmental enrichment (reduces stress-induced idiopathic cystitis), weight management. Perineal urethrostomy for cats with 3+ obstructions."
},

"vet-parvovirus": {
  "diagnosis": "Canine Parvoviral Enteritis — Septic Shock, Unvaccinated Puppy",
  "problems": [
    {"problem":"Parvoviral enteritis — severe","icd":"B97.89","onset":"2024","status":"Active","notes":"Unvaccinated 12-week-old mixed breed — bloody diarrhea, vomiting, septic shock"},
    {"problem":"Septic shock — intestinal bacterial translocation","icd":"A41.9","onset":"2024","status":"Active","notes":"HR 168, BP 78/52, temperature 97.8°F (hypothermic) — negative prognostic indicator"}
  ],
  "medications": [
    {"name":"Lactated Ringer's 90mL/kg IV over 1 hour (shock dose)","sig":"IV bolus — reassess q15 minutes for BP and perfusion","prescriber":"Dr. Chen DVM","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Ampicillin 22mg/kg IV q8h","sig":"IV injection every 8 hours — gram-positive and anaerobic coverage","prescriber":"Dr. Chen DVM","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Enrofloxacin 5mg/kg IV q24h","sig":"IV injection once daily — gram-negative coverage","prescriber":"Dr. Chen DVM","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Maropitant (Cerenia) 1mg/kg SQ q24h","sig":"Subcutaneous injection once daily — antiemetic","prescriber":"Dr. Chen DVM","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Oseltamivir 2mg/kg PO BID — parvovirus adjunct (controversial, used in some protocols)","sig":"Give orally twice daily — some evidence for reducing viral shedding","prescriber":"Dr. Chen DVM","start":"11/2024","refills":0,"status":"Active — off-label"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Parvo Workup","results":[
    {"test":"SNAP Parvovirus Antigen Test","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"WBC","value":"0.8","unit":"K/μL","ref":"6-17","flag":"L"},
    {"test":"Neutrophils (absolute)","value":"0.2","unit":"K/μL","ref":"3-11.5","flag":"L"},
    {"test":"PCV","value":"28","unit":"%","ref":"37-55","flag":"L"},
    {"test":"Total protein","value":"4.1","unit":"g/dL","ref":"5.5-7.5","flag":"L"},
    {"test":"Glucose","value":"44","unit":"mg/dL","ref":"70-138","flag":"L"},
    {"test":"Albumin","value":"1.8","unit":"g/dL","ref":"2.5-3.5","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Canine parvoviral enteritis (correct)","Hemorrhagic gastroenteritis — PCV >60% (not as low as this)","Bacterial enteritis — Salmonella, Campylobacter","Intestinal intussusception — parvovirus complication","Canine distemper — multi-systemic","Toxin ingestion — garbage toxicosis"],
  "coachFinal": "Diagnosis: severe parvoviral enteritis with septic shock. Key veterinary learning points: (1) Pathophysiology: CPV-2 attacks rapidly dividing cells — intestinal crypt epithelium (GI barrier destruction → bacterial translocation → septic shock) AND bone marrow (leukopenia, especially neutropenia). The leukopenia + bloody diarrhea + unvaccinated puppy = parvo until proven otherwise. (2) Positive prognostic indicators: persistent fever (not hypothermia), early WBC recovery (monocytosis precedes neutrophilia), glucose >80. Negative: hypothermia, WBC <0.8K, severe hypoalbuminemia, septic shock. (3) Barrier nursing is essential: parvo sheds massively in feces, extremely environmentally stable (months in soil). Strict isolation, contact precautions, dedicated PPE, 1:30 bleach disinfection. (4) SNAP test sensitivity: ~81% — false negatives possible early in disease or post-vaccination. Clinical diagnosis takes precedence. (5) Prevention is everything: DAP vaccine series 6-8 weeks → 12 weeks → 16 weeks provides excellent protection. Maternal antibody interference is the reason for the 3-dose series."
},

"vet-xylitol-toxicity": {
  "diagnosis": "Xylitol Toxicosis — Dual-Mechanism: Hypoglycemia (Current) + Hepatotoxicity Risk (48-72 hours)",
  "problems": [
    {"problem":"Xylitol toxicosis — hypoglycemia phase","icd":"T65.891A","onset":"2024","status":"Active","notes":"30 minutes post-ingestion, glucose 34 mg/dL — at hypoglycemia threshold"},
    {"problem":"Acute hepatic necrosis risk — 48-72 hour window","icd":"K72.0","onset":"2024","status":"Active","notes":"High-dose xylitol (>0.1g/kg) carries hepatotoxicity risk — monitor LFTs at 24 and 48h"}
  ],
  "medications": [
    {"name":"Dextrose 50% IV 0.5mL/kg bolus slowly","sig":"Dilute to 25% and give slowly IV over 5 minutes — repeat as needed for glucose <60","prescriber":"Dr. Rodriguez DVM","start":"11/2024","refills":0,"status":"Active"},
    {"name":"Dextrose 2.5% in LRS continuous infusion (maintain glucose >80)","sig":"IV infusion at maintenance rate with dextrose supplementation","prescriber":"Dr. Rodriguez DVM","start":"11/2024","refills":0,"status":"Active"},
    {"name":"SAMe (S-Adenosylmethionine) 20mg/kg PO daily","sig":"Give orally once daily — hepatoprotective agent","prescriber":"Dr. Rodriguez DVM","start":"11/2024","refills":4,"status":"Active"}
  ],
  "labs": [{"date":"11/18/2024","panel":"Xylitol Toxicity Panel","results":[
    {"test":"Blood glucose (point-of-care)","value":"34","unit":"mg/dL","ref":"70-138","flag":"L"},
    {"test":"ALT","value":"62","unit":"U/L","ref":"10-125","flag":""},
    {"test":"ALP","value":"48","unit":"U/L","ref":"23-212","flag":""},
    {"test":"Bilirubin total","value":"0.3","unit":"mg/dL","ref":"0-0.4","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Xylitol toxicosis — hypoglycemia + hepatotoxicity risk (correct)","Insulinoma — endogenous insulin excess","Other toxin — ethylene glycol","Severe hypoglycemia from starvation","Sepsis-induced hypoglycemia","Addisonian hypoglycemia"],
  "coachFinal": "Diagnosis: xylitol toxicosis, hypoglycemia phase, hepatotoxicity anticipated. Key veterinary learning points: (1) DUAL mechanism — this is the critical teaching point: LOW DOSE xylitol (<0.1g/kg): causes profound insulin release (xylitol stimulates pancreatic beta cells in dogs but NOT humans or cats) → severe hypoglycemia in 30-60 min. HIGH DOSE xylitol (>0.1g/kg): hepatocellular necrosis at 24-72 hours — mechanism unknown, may involve zinc chelation or direct mitochondrial toxicity. Determine dose. (2) Dose calculation: sugarless gum contains 0.2-0.3g xylitol per piece. Mints: 0.5g each. 'Sugar-free' baked goods: highly variable. This dog ate ~2/3 of a pack of 30-piece gum ≈ 6g = 0.2g/kg → BOTH mechanisms at risk. (3) Management: correct hypoglycemia first (IV dextrose), then continuous glucose monitoring every 4 hours for 12 hours. Initiate hepatoprotectants (SAMe, milk thistle) even if liver values normal now. (4) Monitor ALT at 24 and 48 hours — rise indicates hepatic injury phase. Severe cases require N-acetylcysteine, hospital observation. (5) Xylitol is NOT toxic to cats — but NEVER tell a cat owner their pet is safe with xylitol to avoid confusion."
}

} # end of ENRICHMENTS dict

def enrich_case(slug, enrichment):
    """Load a case file, apply enrichment, and save"""
    path = os.path.join(EMR_DIR, f"{slug}.js")
    if not os.path.exists(path):
        print(f"  SKIP {slug} — file not found")
        return False
    
    with open(path) as f:
        src = f.read()
    
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m:
        print(f"  SKIP {slug} — parse error")
        return False
    
    data = json.loads(m.group(1))
    
    # Apply enrichments
    if "diagnosis" in enrichment:
        if "meta" not in data: data["meta"] = {}
        data["meta"]["diagnosis"] = enrichment["diagnosis"]
        data["meta"]["caseId"] = slug
    
    if "problems" in enrichment:
        data["problems"] = enrichment["problems"]
    
    if "medications" in enrichment:
        data["medications"] = enrichment["medications"]
    
    if "labs" in enrichment:
        data["labs"] = enrichment["labs"]
    
    if "imaging" in enrichment:
        data["imaging"] = enrichment["imaging"]
    
    if "ddxTargets" in enrichment:
        data["guided"]["ddxTargets"] = enrichment["ddxTargets"]
    
    if "coachFinal" in enrichment:
        if "coachPrompts" not in data["guided"]:
            data["guided"]["coachPrompts"] = {}
        data["guided"]["coachPrompts"]["final"] = enrichment["coachFinal"]
    
    # Write back
    output = f"\nwindow.EMR_DATA = {json.dumps(data, indent=2)};\n"
    with open(path, 'w') as f:
        f.write(output)
    return True

# Run enrichment
enriched = 0
for slug, enrichment in ENRICHMENTS.items():
    if enrich_case(slug, enrichment):
        print(f"✓ enriched {slug}")
        enriched += 1
    else:
        print(f"✗ failed {slug}")

print(f"\nEnriched {enriched}/{len(ENRICHMENTS)} cases")
print(f"\nRemaining scaffold cases (need ANTHROPIC_API_KEY to fully enrich):")
print("  Run: ANTHROPIC_API_KEY=<key> node scripts/generate-missing-cases.js")
print("  This will replace scaffold content with full clinical detail for remaining cases.")
