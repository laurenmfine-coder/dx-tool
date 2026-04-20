#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"arc-cancer-dentistry": {
  "diagnosis": "Head and Neck Cancer Patient — Dental Clearance Before Radiation, Extractions and Preventive Protocol",
  "problems": [
    {"problem":"Head and neck cancer — pre-radiation dental clearance","icd":"C10.9","onset":"2024","status":"Active","notes":"Robert Chen, 58M — base of tongue SCC, radiation field includes mandible and maxilla. Dental clearance required before XRT starts."},
    {"problem":"Osteoradionecrosis prevention — teeth in radiation field must be extracted","icd":"M87.189","onset":"2024","status":"Active","notes":"Teeth with poor prognosis in radiation field must be extracted ≥14-21 days before XRT to allow healing."},
    {"problem":"Radiation caries risk — xerostomia post-XRT","icd":"K02.9","onset":"2024","status":"Active","notes":"Salivary gland damage from XRT causes severe xerostomia → rapid cervical caries. Fluoride protocol critical."}
  ],
  "medications": [
    {"name":"Fluoride varnish 5% NaF — applied at every dental visit","sig":"High-concentration fluoride varnish every 3 months. Daily 1.1% NaF prescription gel at home.","prescriber":"Dentistry","start":"2024","refills":5,"status":"Active — pre/post XRT"},
    {"name":"Pilocarpine 5mg PO TID (post-XRT) — sialogue","sig":"Muscarinic agonist — stimulates remaining salivary tissue. Start after XRT completion.","prescriber":"Oncology/Dentistry","start":"2024","refills":3,"status":"Active — start post-XRT"},
    {"name":"Chlorhexidine 0.12% oral rinse BID","sig":"Antimicrobial rinse — reduces cariogenic bacteria during radiation and post-XRT xerostomia period.","prescriber":"Dentistry","start":"2024","refills":2,"status":"Active"},
    {"name":"Hyperbaric oxygen (HBO) — if post-XRT extraction needed","sig":"HBO before and after any post-XRT dental extraction in radiation field — reduces ORN risk. 20 dives pre-op, 10 post-op.","prescriber":"Oral Surgery/Oncology","start":"2024","refills":0,"status":"Protocol — if needed post-XRT"}
  ],
  "labs": [{"date":"11/2024","panel":"Pre-XRT Dental Assessment","results":[
    {"test":"Panoramic radiograph","value":"Multiple periapical lesions — 3 teeth in radiation field require extraction","unit":"","ref":"Teeth in XRT field assessed","flag":"H"},
    {"test":"Full mouth periodontal charting","value":"Generalized moderate periodontitis","unit":"","ref":"Healthy periodontium","flag":"H"},
    {"test":"Salivary flow rate (unstimulated)","value":"0.3","unit":"mL/min","ref":">0.1 mL/min","flag":""},
    {"test":"Xerostomia baseline VAS","value":"2/10","unit":"","ref":"0/10 normal","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Pre-XRT dental clearance — extractions required before radiation (correct)","Post-XRT extraction without HBO — ORN risk; HBO protocol required","Dental treatment during active XRT — generally avoided if possible; emergency only","Routine dental maintenance without oncology communication — unsafe in this context","Bisphosphonate-related ONJ — different etiology; XRT here is the mechanism","Mucositis management only — insufficient; structural dental disease must be addressed"],
  "coachFinal": "Diagnosis: pre-radiation dental clearance for head and neck cancer. Key learning: (1) Osteoradionecrosis (ORN): radiation to jaw causes hypovascular, hypocellular, hypoxic tissue — impaired healing. Post-XRT extractions in the radiation field have 5-15% ORN risk without HBO vs ~1% with HBO protocol. Prevention is far better than treatment. (2) Pre-XRT timeline: extractions in radiation field must be completed ≥14-21 days before XRT starts — allows initial socket healing before vascularity is compromised. Restorations, scaling, and prophylaxis ideally completed before XRT begins. (3) Fluoride protocol post-XRT: xerostomia from salivary gland damage causes dramatically accelerated caries (cervical location, rapid progression). Prescription-strength fluoride (1.1% NaF gel daily in custom trays) is mandatory — OTC fluoride is insufficient. (4) Radiation caries is preventable: the combination of fluoride, chlorhexidine, salivary stimulants (pilocarpine, cevimeline), and oral hygiene education can dramatically reduce caries incidence. (5) Oncology-dentistry communication: dental team must receive XRT treatment plan (dose, field) to identify which teeth are in the radiation field. This communication gap is the most common reason for inadequate pre-XRT clearance."
},
"dental-fluorosis-vs-hypoplasia": {
  "diagnosis": "Dental Fluorosis vs Enamel Hypoplasia — Differential Diagnosis of White Spot Lesions in Child",
  "problems": [
    {"problem":"White spot lesions — bilateral symmetric pattern on permanent teeth","icd":"K00.3","onset":"2024","status":"Active","notes":"Jayden Williams, 10M — parents concerned about white chalky spots on upper front teeth. Symmetric distribution. No pain."},
    {"problem":"Fluoride exposure history — well water area","icd":"K00.3","onset":"2024","status":"Active","notes":"Family on private well water. Fluoride level not tested. Early childhood exposure unknown."},
    {"problem":"Differential — fluorosis vs hypoplasia vs white spot from early decay","icd":"K00.3","onset":"2024","status":"Active","notes":"Symmetric bilateral = fluorosis. Asymmetric focal = hypoplasia or early caries. Location and distribution are diagnostic."}
  ],
  "medications": [
    {"name":"Microabrasion — cosmetic treatment for mild fluorosis","sig":"Hydrochloric acid + pumice abrasive — removes superficial enamel with fluorosis staining. Effective for white/brown surface fluorosis.","prescriber":"Dentistry","start":"2024","refills":0,"status":"Consider — cosmetic"},
    {"name":"Topical fluoride — resin infiltration for white spots","sig":"Icon resin infiltrant — fills enamel pores, camouflages white spot lesions. Effective for subsurface fluorosis and early caries lesions.","prescriber":"Dentistry","start":"2024","refills":0,"status":"Consider — cosmetic"},
    {"name":"No systemic fluoride supplementation — well water testing first","sig":"Do not prescribe fluoride supplements until well water fluoride level is measured. Excess fluoride causes further fluorosis.","prescriber":"Dentistry","start":"Defer","refills":0,"status":"Defer pending water test"}
  ],
  "labs": [{"date":"11/2024","panel":"Dental Assessment","results":[
    {"test":"Well water fluoride level — sent","value":"Pending","unit":"ppm","ref":"0.7 ppm optimal","flag":""},
    {"test":"Dean's fluorosis index","value":"2 — moderate (white opaque >25% surface)","unit":"","ref":"0 = normal","flag":"H"},
    {"test":"DMFT score","value":"0 — caries-free","unit":"","ref":"0 = caries-free","flag":""},
    {"test":"Distribution pattern","value":"Bilateral, symmetric, all permanent incisors","unit":"","ref":"Symmetric = fluorosis","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Dental fluorosis — bilateral symmetric white opacities, well water area (correct)","Enamel hypoplasia — asymmetric, focal, often single tooth; associated with local trauma or systemic illness during crown formation","White spot lesions from early caries — adjacent to gingival margin, associated with plaque retention","Amelogenesis imperfecta — genetic, entire dentition affected, family history","Turner's tooth — single tooth, associated with primary tooth infection or trauma","Tetracycline staining — intrinsic gray-brown discoloration, entire crown, band pattern"],
  "coachFinal": "Diagnosis: dental fluorosis — bilateral symmetric pattern. Key learning: (1) Fluorosis pattern recognition: bilateral, symmetric involvement of homologous teeth = fluorosis (systemic cause during crown development). Single tooth or asymmetric = local cause (hypoplasia, Turner's tooth, early caries). (2) Fluorosis mechanism: excess fluoride during amelogenesis → hypomineralization of enamel → white opaque to pitted to brown staining depending on severity. The critical window: 0-8 years when permanent crowns are forming. (3) Dean's fluorosis index: 0 (normal) → 1 (questionable) → 2 (very mild/mild) → 3 (moderate) → 4 (severe, pitting). Treatment indication increases with severity. (4) Enamel hypoplasia distinction: caused by local insult (primary tooth abscess → Turner's tooth), systemic illness (high fever), nutritional deficiency during crown formation. Typically asymmetric and involves single or few teeth. (5) Treatment options: mild fluorosis → microabrasion ± resin infiltration (Icon) for cosmetics. Moderate → composite bonding. Severe with pitting → veneer or crown. Primary concern is cosmetic — fluorosis enamel is actually more caries-resistant due to higher fluoride content."
},
"dental-pediatric-dental-fear": {
  "diagnosis": "Pediatric Dental Fear and Anxiety — Behavior Guidance Escalation, Nitrous Oxide Sedation, Prevention of Dental Avoidance",
  "problems": [
    {"problem":"Severe dental anxiety — uncooperative for examination","icd":"F40.298","onset":"2024","status":"Active","notes":"Emma Torres, 7F — screaming and crying at every dental visit since age 3. Unable to complete examination. Multiple caries unaddressed."},
    {"problem":"Multiple untreated caries — consequence of dental avoidance","icd":"K02.9","onset":"2024","status":"Active","notes":"4 cavities requiring treatment. Dental avoidance driving progressive disease. Treatment under sedation required."},
    {"problem":"Behavior guidance approach — tell-show-do, desensitization, nitrous oxide","icd":"F40.298","onset":"2024","status":"Active","notes":"Stepwise approach: build trust first, nitrous oxide for desensitization, IV sedation if insufficient."}
  ],
  "medications": [
    {"name":"Nitrous oxide 30-50% with oxygen — anxiolysis","sig":"Inhaled anxiolytic — onset 2-3 min, recovery complete within 5 min of stopping. Patient remains conscious, maintains protective reflexes.","prescriber":"Dentistry (pediatric)","start":"2024","refills":0,"status":"Active — use at appointments"},
    {"name":"Oral midazolam 0.5mg/kg (max 15mg) PO — moderate sedation","sig":"For procedures requiring deeper cooperation — given 20-30 min before procedure. Requires monitoring and recovery time.","prescriber":"Pediatric Dentistry","start":"2024","refills":0,"status":"Consider for restorations"},
    {"name":"Silver diamine fluoride (SDF) 38% — caries arrest without drilling","sig":"Applied to carious lesions — arrests caries progression without anesthesia or drilling. Stains lesion black (inform parents). Buys time until child is cooperative.","prescriber":"Pediatric Dentistry","start":"2024","refills":0,"status":"Active — interim caries arrest"}
  ],
  "labs": [{"date":"11/2024","panel":"Pediatric Dental Assessment","results":[
    {"test":"DMFT (primary dentition)","value":"4 — 4 cavitated lesions","unit":"","ref":"0 = caries-free","flag":"H"},
    {"test":"Frankl behavior scale","value":"1 — definitely negative (uncooperative)","unit":"","ref":"4 = definitely positive","flag":"L"},
    {"test":"Caries risk assessment","value":"High","unit":"","ref":"Low","flag":"H"},
    {"test":"Panoramic radiograph attempt","value":"Unable to complete — patient uncooperative","unit":"","ref":"Completed","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Dental fear and anxiety — Frankl 1, behavior guidance required (correct)","Autism spectrum disorder contributing to dental avoidance — screen; different management pathway","Prior traumatic dental experience — explore history; targeted desensitization","Pain-related avoidance — untreated caries causing pain driving avoidance","Parental anxiety transfer — parent modeling of dental fear; parent counseling needed","ADHD-related behavior — impulse control different from anxiety; different guidance approach"],
  "coachFinal": "Diagnosis: severe pediatric dental anxiety, behavior guidance escalation. Key learning: (1) Tell-Show-Do (TSD): foundational behavior guidance — tell the child what will happen (in age-appropriate language), show the instrument without using it, then do the procedure slowly. Builds trust and reduces fear of the unknown. First step for every child. (2) Nitrous oxide/oxygen in pediatric dentistry: minimal/moderate sedation. Maintains consciousness, rapid onset/offset, no IV required. Effective for mild-moderate anxiety. Requires continuous monitoring and appropriate scavenging equipment. Absolute contraindication: nasal congestion. (3) Silver diamine fluoride (SDF): 38% SDF arrests active caries without any drilling or anesthesia — applied with a microbrush. Ideal for uncooperative young children with active decay. Stains arrested caries permanently black — must counsel parents. Allows caries arrest until child is ready for conventional treatment. (4) Behavior guidance escalation: TSD → positive reinforcement → voice control → nitrous oxide → oral sedation → IV sedation/general anesthesia. Escalate based on procedure complexity and child's cooperation level. (5) Prevention of dental avoidance patterns: early positive dental experiences at age 1 (first dental visit recommendation). Parental anxiety about dentistry transfers directly to children — address parent anxiety as part of pediatric dental care."
},
"dental-referred-cardiac-pain": {
  "diagnosis": "Cardiac Pain Referred to Jaw — Unstable Angina Presenting as Toothache, Dental Cause Excluded",
  "problems": [
    {"problem":"Referred cardiac pain to mandible — unstable angina","icd":"I20.0","onset":"2024","status":"Active","notes":"Frank Davis, 61M — jaw pain and 'toothache' for 2 days, worse with exertion. No dental cause found on exam. Diaphoretic."},
    {"problem":"Unstable angina — HEART score 7, troponin pending","icd":"I20.0","onset":"2024","status":"Active","notes":"Exertional jaw pain + diaphoresis + cardiac risk factors (T2DM, HTN, smoker) = ACS until proven otherwise. Referred to ED."},
    {"problem":"Dental exam — normal, no odontogenic cause","icd":"Z01.20","onset":"2024","status":"Active","notes":"Full mouth exam and periapical radiographs — no periapical pathology, no caries, no cracked teeth, negative percussion/palpation. Pain is non-odontogenic."}
  ],
  "medications": [
    {"name":"IMMEDIATE ED REFERRAL — do not treat dentally","sig":"Do not administer local anesthetic or perform any dental procedure. Call 911 or direct to ED immediately.","prescriber":"Dentistry","start":"2024","refills":0,"status":"REFER TO ED"},
    {"name":"Aspirin 324mg PO — give before ED transfer if available","sig":"Non-enteric coated aspirin — chew and swallow. Anti-platelet loading if ACS suspected.","prescriber":"Dentistry/ED","start":"2024","refills":0,"status":"Given — pre-transfer"}
  ],
  "labs": [{"date":"11/2024","panel":"In-office Dental Assessment","results":[
    {"test":"Percussion test all teeth","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Pulp vitality test","value":"Normal response all teeth","unit":"","ref":"Normal","flag":""},
    {"test":"Periapical radiographs","value":"No periapical pathology","unit":"","ref":"Normal","flag":""},
    {"test":"Soft tissue exam","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"BP (taken in office)","value":"168/98","unit":"mmHg","ref":"<130/80","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Referred cardiac pain to jaw — ACS with atypical presentation (correct)","Pulpitis — percussion sensitive, thermal sensitivity, identifiable tooth; all negative here","Periapical abscess — swelling, percussion sensitivity, radiographic lesion; absent","Cracked tooth syndrome — bite test positive; negative here","Trigeminal neuralgia — electric shock quality, trigger zone; different character","Temporomandibular joint pain — jaw joint tenderness, clicking, limited opening"],
  "coachFinal": "Diagnosis: referred cardiac pain to mandible — ACS. Key learning: (1) Cardiac-dental referral pattern: the mandible receives its sensory innervation from the inferior alveolar nerve (V3 branch of trigeminal). Ischemic myocardial pain can refer via convergent pathways to the mandible, presenting as toothache, jaw tightness, or dental pain. Diabetics, elderly, and women are most likely to present with atypical cardiac symptoms. (2) Red flags for non-odontogenic jaw pain: pain reproduces with exertion (not with chewing alone), diaphoresis, pain that does not localize to a single tooth, normal dental exam, systemic symptoms (nausea, dyspnea). Any one of these in a patient with cardiac risk factors = cardiac workup before any dental treatment. (3) Dental provider role: perform thorough dental exam to exclude odontogenic cause. If dental exam is normal AND systemic symptoms are present → DO NOT provide dental treatment. Refer immediately to ED or call 911. Do not administer local anesthetic (epinephrine in LA can precipitate arrhythmia in active ACS). (4) Give aspirin before transfer: 325mg non-enteric coated aspirin chewed is appropriate dental office management before ED transfer if ACS is suspected — evidence-based bridge. (5) Documentation: document the exam findings, exclusion of dental cause, systemic findings (BP, diaphoresis), the referral decision, and that the patient was directed to the ED."
},
"dental-xerostomia-radiation": {
  "diagnosis": "Post-Radiation Xerostomia — Severe Salivary Gland Damage, Caries Prevention and Salivary Substitutes",
  "problems": [
    {"problem":"Severe xerostomia — post-XRT salivary gland damage","icd":"K11.7","onset":"2024","status":"Active","notes":"Margaret Liu, 65F — completed radiation for parotid tumor 8 months ago. Bilateral parotid in XRT field. Mouth dry 24/7."},
    {"problem":"Radiation caries — rapidly progressive cervical decay","icd":"K02.9","onset":"2024","status":"Active","notes":"4 new cervical caries lesions in 8 months — all at gingival margin. Pattern classic for radiation caries."},
    {"problem":"Oral candidiasis — xerostomia-associated","icd":"B37.0","onset":"2024","status":"Active","notes":"White plaques on tongue and palate — Candida overgrowth from loss of salivary antimicrobial proteins."}
  ],
  "medications": [
    {"name":"Fluconazole 100mg PO daily x14 days — oral candidiasis treatment","sig":"Systemic antifungal — more effective than nystatin swish/swallow for xerostomia-associated candidiasis.","prescriber":"Dentistry/Oncology","start":"2024","refills":0,"status":"Active"},
    {"name":"1.1% NaF custom tray application — daily","sig":"Prescription fluoride gel in custom-fitted trays, 5-10 min daily. Superior caries protection vs brushing alone in xerostomia patients.","prescriber":"Dentistry","start":"2024","refills":5,"status":"Active"},
    {"name":"Pilocarpine 5mg PO TID — sialogue","sig":"Stimulates residual salivary tissue. Effective if ANY salivary tissue remains functional. Side effects: sweating, rhinorrhea.","prescriber":"Oncology","start":"2024","refills":3,"status":"Active"},
    {"name":"Biotène gel/spray — salivary substitute PRN","sig":"Artificial saliva substitute — use as needed throughout day and at bedtime. Lubricates without stimulating salivary tissue.","prescriber":"Dentistry","start":"2024","refills":3,"status":"Active — symptomatic"}
  ],
  "labs": [{"date":"11/2024","panel":"Post-XRT Dental Monitoring","results":[
    {"test":"Unstimulated salivary flow rate","value":"0.05","unit":"mL/min","ref":">0.1 mL/min","flag":"L"},
    {"test":"Stimulated salivary flow rate","value":"0.3","unit":"mL/min","ref":">0.7 mL/min","flag":"L"},
    {"test":"Oral pH","value":"5.8","unit":"","ref":">6.7","flag":"L"},
    {"test":"New caries lesions (6-month recall)","value":"4","unit":"cavitated lesions","ref":"0","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Post-XRT xerostomia — radiation caries pattern (correct)","Sjögren syndrome-related xerostomia — autoimmune, different history, anti-Ro/La antibodies","Medication-induced xerostomia — anticholinergics, antihistamines; post-XRT here","Dehydration — systemic, not XRT-specific pattern","Salivary gland obstruction — stone or stricture, usually unilateral","Diabetes-associated xerostomia — hyperglycemia-related; glucose management"],
  "coachFinal": "Diagnosis: post-radiation xerostomia with radiation caries. Key learning: (1) Radiation-induced xerostomia mechanism: XRT doses >26 Gy to salivary glands cause acinar cell apoptosis → permanent salivary dysfunction. Parotid glands most sensitive (serous acini). Parotid-sparing IMRT (intensity-modulated radiation therapy) reduces xerostomia risk. (2) Radiation caries pattern: cervical location (at the gingival margin), rapid progression (months not years), smooth surfaces. Driven by: absence of salivary buffering → low oral pH → demineralization. This is distinct from typical caries pattern. (3) Custom fluoride tray protocol: prescription 1.1% NaF gel in custom trays worn 5-10 minutes daily. This is the standard of care for post-XRT patients. OTC fluoride toothpaste alone is insufficient for this caries risk level. (4) Caries activity monitoring: patients with post-XRT xerostomia require 3-month recall intervals (vs 6-12 months for low-risk patients). Caries can cavitate within weeks in severe xerostomia. (5) Salivary substitutes vs sialogues: pilocarpine works only if functional salivary tissue remains — ineffective if glands are completely destroyed. Biotène and other salivary substitutes provide symptomatic lubrication regardless of residual gland function — always useful."
},
"layer2-dental-anticoag-dilemma": {
  "diagnosis": "Dental Extraction in Anticoagulated Patient — Warfarin Management, Bridging Therapy Decision, Local Hemostasis Protocol",
  "problems": [
    {"problem":"Dental extraction needed — patient on warfarin for AFib","icd":"I48.91","onset":"2024","status":"Active","notes":"Thomas Park, 72M — CHA2DS2-VASc 5, warfarin INR 2.4. Symptomatic #30 needing extraction. Anticoagulation management required."},
    {"problem":"Bridging therapy decision — INR management for extraction","icd":"Z79.01","onset":"2024","status":"Active","notes":"Evidence: for simple extractions, continue warfarin WITHOUT bridging if INR ≤3.5. Local hemostasis measures are sufficient."},
    {"problem":"Post-extraction hemostasis — oxidized cellulose and suture","icd":"Z79.01","onset":"2024","status":"Active","notes":"Surgicel (oxidized cellulose) + primary closure with resorbable suture + tranexamic acid mouthwash protocol."}
  ],
  "medications": [
    {"name":"Warfarin — CONTINUE at current dose (do NOT hold)","sig":"Evidence-based: simple dental extraction safe with INR up to 3.5 without holding warfarin. Stopping warfarin → thromboembolic risk (stroke in AFib). Local hemostasis is sufficient.","prescriber":"Dentistry/Medicine","start":"2024","refills":0,"status":"CONTINUE — do not hold"},
    {"name":"Tranexamic acid 4.8% mouthwash — post-extraction","sig":"Antifibrinolytic rinse — swish for 2 min, spit, every 6h x2 days. Reduces post-extraction bleeding without systemic anticoagulation reversal.","prescriber":"Dentistry","start":"2024","refills":0,"status":"Active — post-extraction"},
    {"name":"Surgicel (oxidized cellulose) — pack socket","sig":"Hemostatic agent packed into extraction socket. Absorbed over 7-14 days.","prescriber":"Dentistry","start":"2024","refills":0,"status":"Active — intraoperative"},
    {"name":"Resorbable sutures — primary closure","sig":"Close extraction site primarily — reduces clot displacement risk.","prescriber":"Dentistry","start":"2024","refills":0,"status":"Active — intraoperative"}
  ],
  "labs": [{"date":"11/2024","panel":"Pre-Extraction Assessment","results":[
    {"test":"INR (day of extraction)","value":"2.4","unit":"","ref":"2.0-3.0 therapeutic for AFib","flag":""},
    {"test":"CHA2DS2-VASc score","value":"5","unit":"","ref":"Score 0-1 = low risk","flag":"H"},
    {"test":"HAS-BLED score","value":"2","unit":"","ref":"Score <3 = low bleeding risk","flag":""},
    {"test":"Platelet count","value":"188","unit":"K/μL","ref":"150-400","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Continue warfarin, use local hemostasis — evidence-based approach (correct)","Hold warfarin for extraction — increases thromboembolic stroke risk; not evidence-based for simple extraction","Heparin bridge — increases bleeding without reducing stroke risk; not recommended for dental procedures","Reverse warfarin with vitamin K — inappropriate for elective dental procedure in therapeutic range","Refuse treatment — inappropriate; procedure is safe with proper protocol","Refer to oral surgeon for all anticoagulated patients — simple extractions can be done in general practice with proper protocol"],
  "coachFinal": "Diagnosis: warfarin management for dental extraction. Key learning: (1) Current evidence consensus: for routine dental extractions (1-3 teeth), continue warfarin WITHOUT interruption if INR ≤3.5. Local hemostatic measures are sufficient. Interrupting warfarin to prevent dental bleeding causes MORE thromboembolic events (stroke) than it prevents bleeding complications. The risk-benefit calculation overwhelmingly favors continuation. (2) Local hemostasis protocol: oxidized cellulose (Surgicel) or gelatin sponge (Gelfoam) in socket + primary suture closure + pressure for 30-60 minutes + tranexamic acid mouthwash. This combination manages bleeding effectively at any therapeutic INR. (3) Bridging therapy: NEVER appropriate for routine dental procedures. Bridging with heparin increases bleeding complications without reducing thromboembolic risk. Reserved for major surgeries where anticoagulation must be interrupted. (4) DOAC patients: rivaroxaban, apixaban, dabigatran — timing around dental extraction: skip the morning dose on the day of extraction for standard procedures. Resume evening dose same day. No bridging needed. (5) Communication with prescribing physician: always inform the prescribing physician (cardiologist, PCP) of planned procedure. Confirm current INR day of procedure. Document the decision-making and INR value in the dental record."
},
"layer2-dental-bisphosphonate-emergency": {
  "diagnosis": "Medication-Related Osteonecrosis of the Jaw (MRONJ) — Bisphosphonate Patient, Exposed Bone, Stage 2",
  "problems": [
    {"problem":"MRONJ — Stage 2, exposed bone with infection","icd":"M87.180","onset":"2024","status":"Active","notes":"Dorothy Adams, 68F — alendronate x8 years for osteoporosis. Mandibular molar extracted 3 months ago. Exposed bone + purulence."},
    {"problem":"Bisphosphonate exposure — IV vs oral risk stratification","icd":"M87.180","onset":"2024","status":"Active","notes":"Oral bisphosphonate (alendronate) x8 years — lower MRONJ risk than IV bisphosphonates (zoledronate for cancer). Stage 2 requires antibiotic + specialist referral."},
    {"problem":"Jaw pain and trismus — progressive infection","icd":"M87.180","onset":"2024","status":"Active","notes":"Persistent jaw pain, difficulty opening mouth, purulent discharge — Stage 2 MRONJ criteria met."}
  ],
  "medications": [
    {"name":"Amoxicillin 500mg TID x2-4 weeks — active MRONJ infection","sig":"Oral antibiotic — streptococcal and anaerobic coverage for jaw infection in MRONJ. Extend if inadequate response.","prescriber":"Oral Surgery","start":"2024","refills":1,"status":"Active"},
    {"name":"Chlorhexidine 0.12% oral rinse BID — antimicrobial","sig":"Reduce oral bacterial load — irrigate around exposed bone site.","prescriber":"Oral Surgery","start":"2024","refills":2,"status":"Active"},
    {"name":"Hold alendronate — discuss with prescribing physician","sig":"Drug holiday (bisphosphonate hold) remains controversial — evidence limited. Discuss risk-benefit with prescribing physician. Osteoporosis fracture risk vs MRONJ management.","prescriber":"Oral Surgery/PCP","start":"2024","refills":0,"status":"Discuss with PCP"},
    {"name":"Oral surgery referral — Stage 2 MRONJ requires specialist management","sig":"Oral maxillofacial surgery — debridement, possible sequestrectomy, HBO consideration.","prescriber":"Dentistry","start":"2024","refills":0,"status":"Active — urgent referral"}
  ],
  "labs": [{"date":"11/2024","panel":"MRONJ Assessment","results":[
    {"test":"Panoramic radiograph","value":"Mandibular sequestrum formation, rarefaction around extraction site","unit":"","ref":"Normal healing","flag":"H"},
    {"test":"CTX (C-terminal telopeptide)","value":"148","unit":"pg/mL","ref":">150 pg/mL = lower MRONJ risk for surgery","flag":"L"},
    {"test":"CBC","value":"WBC 13.2 — mild elevation","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"CRP","value":"42","unit":"mg/L","ref":"<10","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["MRONJ Stage 2 — oral bisphosphonate, exposed bone + infection (correct)","Osteoradionecrosis — no radiation history; MRONJ from bisphosphonate is the diagnosis","Osteomyelitis of jaw — overlapping entity; MRONJ has a specific medication history component","Normal extraction socket — 3 months post-extraction, exposed bone is NOT normal","Periodontal abscess — bone exposure distinguishes MRONJ from soft tissue abscess","Squamous cell carcinoma invading bone — biopsy if uncertain; MRONJ history is key"],
  "coachFinal": "Diagnosis: MRONJ Stage 2. Key learning: (1) MRONJ definition (AAOMS): exposed bone OR bone that can be probed through fistula in maxillofacial region, persisting >8 weeks, in patients with current or prior antiresorptive/antiangiogenic drug exposure, and no history of radiation or metastatic disease to the jaw. Bisphosphonates, denosumab, and antiangiogenic agents (bevacizumab, sunitinib) are causative. (2) MRONJ staging: Stage 0 = no bone, non-specific symptoms. Stage 1 = exposed bone, no infection. Stage 2 = exposed bone + infection (pain + erythema ± purulence). Stage 3 = exposed bone + infection + pathologic fracture or extraoral fistula or osteolysis to inferior border. (3) Oral vs IV bisphosphonate risk: oral bisphosphonates (alendronate, risedronate — osteoporosis) = MRONJ risk ~0.001-0.01%. IV bisphosphonates (zoledronate — cancer) = 1-10% MRONJ risk. IV antiresorptives require more conservative dental management. (4) CTX as surgical guidance: serum CTX >150 pg/mL has been used to identify lower MRONJ risk for elective extractions in bisphosphonate patients — though evidence is limited, some practitioners use it for risk stratification. (5) Prevention: before starting IV bisphosphonates or denosumab — dental clearance (extract hopeless teeth, complete restorations). For oral bisphosphonates: individualized risk discussion before invasive procedures."
},
"layer2-dental-hiv-oral": {
  "diagnosis": "HIV-Positive Patient — Oral Manifestations, CD4-Guided Treatment Modifications, Universal Precautions",
  "problems": [
    {"problem":"Oral candidiasis — HIV-associated, CD4 220","icd":"B37.0","onset":"2024","status":"Active","notes":"Marcus Brown, 38M — HIV on ART, CD4 220. White plaques on tongue (thrush) and angular cheilitis."},
    {"problem":"Linear gingival erythema — HIV-associated periodontal disease","icd":"K05.10","onset":"2024","status":"Active","notes":"Red band along free gingival margin — disproportionate to plaque level. HIV-associated LGE."},
    {"problem":"Dental treatment planning — CD4-guided modifications","icd":"B20","onset":"2024","status":"Active","notes":"CD4 >200 = treat like immunocompetent with standard infection precautions. CD4 <200 = consult with HIV provider, consider antibiotic prophylaxis for invasive procedures."}
  ],
  "medications": [
    {"name":"Fluconazole 100-200mg PO daily x7-14 days — oral candidiasis","sig":"Systemic azole — more effective than nystatin for moderate-severe candidiasis. Interaction: many azoles inhibit CYP3A4 — check HIV medication interactions.","prescriber":"Dentistry/ID","start":"2024","refills":0,"status":"Active"},
    {"name":"Chlorhexidine 0.12% oral rinse BID — LGE and periodontal disease","sig":"Antimicrobial rinse — adjunct to scaling for HIV-associated periodontal disease. 1-min rinse before scaling procedures.","prescriber":"Dentistry","start":"2024","refills":2,"status":"Active"},
    {"name":"Nystatin oral suspension 400,000 units swish/swallow QID — angular cheilitis","sig":"Topical treatment for angular cheilitis component — nystatin ointment to lip corners BID","prescriber":"Dentistry","start":"2024","refills":1,"status":"Active — corners of mouth"},
    {"name":"Antiretroviral therapy — continue, verify adherence","sig":"Optimal ART adherence improves CD4 and reduces oral manifestations. Confirm patient is taking medications as prescribed.","prescriber":"ID (HIV provider)","start":"2022","refills":5,"status":"Continue — not modified by dental"}
  ],
  "labs": [{"date":"11/2024","panel":"HIV Status for Dental Planning","results":[
    {"test":"CD4 count","value":"220","unit":"cells/μL","ref":">500 normal","flag":"L"},
    {"test":"HIV viral load","value":"850","unit":"copies/mL","ref":"<20 undetectable","flag":"H"},
    {"test":"CBC — absolute neutrophil count","value":"1800","unit":"cells/μL","ref":">1500 — adequate for dental surgery","flag":""},
    {"test":"Platelet count","value":"142","unit":"K/μL","ref":"150-400","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["HIV-associated oral candidiasis and LGE — CD4 220 (correct)","Hairy leukoplakia — EBV-associated, lateral tongue, white corrugated, cannot be wiped off; this is removable candida","Oral SCC in HIV — increased risk; any non-healing lesion requires biopsy","Necrotizing ulcerative gingivitis — more severe, fetid odor, necrotic papillae; LGE is milder","Drug-induced gingival overgrowth — calcium channel blockers, phenytoin; different morphology","Acute leukemia — thrombocytopenia + gingival changes; CBC shows malignant cells"],
  "coachFinal": "Diagnosis: HIV-associated oral candidiasis + LGE. Key learning: (1) CD4 thresholds for dental treatment: CD4 >500 = treat routinely. CD4 200-500 = standard treatment, reinforce oral hygiene, monitor closely. CD4 <200 = consult HIV provider before elective invasive procedures; consider antibiotic prophylaxis for surgery; avoid elective treatment when viral load is high and CD4 is actively declining. (2) Universal precautions: ALL patients should be treated with the same infection control standards — HIV status does not change the standard of care for PPE, sterilization, or instrument handling. It is unethical to refuse treatment based on HIV status. (3) HIV oral manifestations: oral candidiasis (most common), hairy leukoplakia (EBV, lateral tongue), linear gingival erythema, necrotizing periodontal disease, KS (Kaposi sarcoma — purple lesions), lymphoma. Oral candidiasis or hairy leukoplakia may be the first sign of HIV — the dental provider may be the first to identify HIV. (4) Drug interactions: azole antifungals + many HIV PIs (ritonavir, lopinavir) — significant CYP3A4 interactions. Check HIV medication list before prescribing antifungals. (5) Dry mouth in HIV: many ART medications cause xerostomia, which increases caries risk. Fluoride supplementation and salivary management are important in HIV-positive dental patients."
},
"layer2-dental-pediatric-neglect": {
  "diagnosis": "Early Childhood Caries — Severe Nursing Bottle Caries, Mandatory Reporting Consideration, Social Determinants",
  "problems": [
    {"problem":"Severe early childhood caries — nursing bottle caries pattern","icd":"K02.51","onset":"2024","status":"Active","notes":"Aiden Foster, 3M — S-ECC: 10 decayed teeth (8 cavitated), upper anterior teeth severely affected, lower first molars involved. DMFT 10."},
    {"problem":"Caregiver practices — sweetened bottle at bedtime","icd":"K02.51","onset":"2024","status":"Active","notes":"Juice in bottle at bedtime x18 months. Classic nursing bottle caries etiology. No prior dental visits."},
    {"problem":"Mandatory reporting consideration — dental neglect assessment","icd":"Z62.810","onset":"2024","status":"Active","notes":"Dental neglect = caregiver failure to seek or follow through with recommended dental treatment. Assess intent vs access barriers before reporting."}
  ],
  "medications": [
    {"name":"Silver diamine fluoride 38% — caries arrest, multiple teeth","sig":"Apply to all active carious lesions — arrests progression without anesthesia. Interim measure before definitive treatment under general anesthesia.","prescriber":"Pediatric Dentistry","start":"2024","refills":0,"status":"Active — immediate"},
    {"name":"Fluoride varnish 5% NaF — every 3 months","sig":"High-frequency fluoride varnish application — reduces new caries risk on remaining sound teeth.","prescriber":"Pediatric Dentistry","start":"2024","refills":3,"status":"Active"},
    {"name":"General anesthesia referral — definitive restoration","sig":"S-ECC this severe requires comprehensive treatment under GA. Refer to pediatric dental specialist with hospital privileges.","prescriber":"Pediatric Dentistry","start":"2024","refills":0,"status":"Active — referral"}
  ],
  "labs": [{"date":"11/2024","panel":"Pediatric Dental Assessment","results":[
    {"test":"DMFT (primary dentition)","value":"10 — 10 cavitated lesions","unit":"","ref":"0 = caries-free","flag":"H"},
    {"test":"Radiographic survey","value":"Multiple periapical abscesses — #E, F, H","unit":"","ref":"Normal periapical anatomy","flag":"H"},
    {"test":"Caries risk assessment","value":"Extreme risk — ECC","flag":"H"},
    {"test":"Social determinants screen","value":"Food insecurity, single parent, Medicaid — access barriers documented","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Severe early childhood caries — nursing bottle pattern, S-ECC (correct)","Amelogenesis imperfecta — genetic, no caries risk pattern, entire dentition symmetrically affected","Dental fluorosis — white opaque, not cavitated lesions","Hypophosphatasia — rare metabolic disease, premature primary tooth loss","Normal primary tooth anatomy — caries vs developmental; this is clearly active decay","Trauma to primary teeth — upper anterior involvement could be trauma; caries pattern here is circumferential"],
  "coachFinal": "Diagnosis: severe early childhood caries (S-ECC). Key learning: (1) ECC definition: ≥1 decayed, missing (due to caries), or filled tooth surface in any primary tooth in child <6 years. S-ECC (severe): ≥4 decayed surfaces at age 3, or ≥1 smooth-surface caries at age 1-3. This patient: 10 cavitated lesions = severe. (2) Nursing bottle caries pattern: maxillary anterior teeth most severely affected (pooling of liquid around upper front teeth when sleeping with bottle). Mandibular incisors relatively spared (protected by tongue position). Classic pattern. (3) Dental neglect vs access barriers: dental neglect is failure to seek treatment for a condition causing pain or infection, despite ability to do so. Before reporting, assess: Has the family had access to dental care? Are there financial barriers? Was the caries risk counseling provided previously? Willful neglect vs inability to access care requires different responses — social work referral for barriers, mandatory reporting for true neglect. (4) Silver diamine fluoride for S-ECC: allows non-invasive, no-anesthesia caries arrest in an uncooperative or medically complex young child. Stains caries black — must counsel caregivers. Buys time until GA. (5) S-ECC prevention: no juice/sweetened beverages in bottles, no bottle in crib/bed, transition to cup by 12 months, first dental visit by age 1."
},
"layer2-dental-pregnancy": {
  "diagnosis": "Dental Treatment During Pregnancy — Second Trimester Safety, Periodontal Disease and Preterm Birth Risk",
  "problems": [
    {"problem":"Dental care during pregnancy — 22 weeks gestation, second trimester","icd":"Z34.22","onset":"2024","status":"Active","notes":"Sofia Reyes, 28F — 22 weeks pregnant. Painful upper right molar, swollen gingiva. Dental avoidance during pregnancy is a myth — treatment is safe and necessary."},
    {"problem":"Pregnancy gingivitis — exaggerated gingival response to plaque","icd":"K05.10","onset":"2024","status":"Active","notes":"Progesterone increases gingival vascularity and plaque response. Generalized erythema and edema — pregnancy-associated gingivitis."},
    {"problem":"Periodontal disease in pregnancy — preterm birth link","icd":"K05.31","onset":"2024","status":"Active","notes":"Moderate periodontitis — treating periodontal disease during pregnancy may reduce preterm birth risk (evidence emerging but not definitive)."}
  ],
  "medications": [
    {"name":"Lidocaine 2% with 1:100,000 epinephrine — safe in pregnancy","sig":"Local anesthetic of choice in pregnancy. Category B. Standard doses safe. Epinephrine in LA is safe — does not reach fetus at dental doses.","prescriber":"Dentistry","start":"2024","refills":0,"status":"Safe — use as needed"},
    {"name":"Amoxicillin 500mg TID — if antibiotic needed for dental infection","sig":"Category B antibiotic — safe in pregnancy. Avoid tetracyclines (tooth staining), fluoroquinolones, metronidazole in first trimester.","prescriber":"Dentistry","start":"2024","refills":0,"status":"Active — if infection"},
    {"name":"Acetaminophen 500-1000mg q6h PRN — dental pain","sig":"Category B — safe in pregnancy for dental pain. Avoid NSAIDs after 20 weeks (premature closure of ductus arteriosus).","prescriber":"Dentistry","start":"2024","refills":0,"status":"PRN"},
    {"name":"X-rays — minimized but safe when necessary","sig":"Dental radiographs with thyroid collar and lead apron have negligible fetal radiation exposure — safe when clinically indicated. Do not withhold necessary radiographs from pregnant patients.","prescriber":"Dentistry","start":"2024","refills":0,"status":"Use when clinically indicated"}
  ],
  "labs": [{"date":"11/2024","panel":"Pregnancy Dental Assessment","results":[
    {"test":"Periodontal probing depths","value":"4-6mm — generalized moderate periodontitis","unit":"","ref":"<3mm healthy","flag":"H"},
    {"test":"Plaque score","value":"68%","unit":"","ref":"<20%","flag":"H"},
    {"test":"Gestational age","value":"22 weeks (second trimester)","unit":"","ref":"Second trimester = optimal for dental treatment","flag":""},
    {"test":"OB clearance","value":"Obtained — cleared for dental treatment","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Pregnancy gingivitis + moderate periodontitis — safe to treat in second trimester (correct)","Defer all dental treatment until postpartum — a myth; dental disease in pregnancy is a risk to mother and fetus","First trimester emergency only — dental treatment deferred in first trimester when possible but not an absolute contraindication","Pyogenic granuloma (pregnancy tumor) — localized vascular gingival overgrowth, usually single site; here generalized gingivitis","Gingival overgrowth from systemic disease — medications, leukemia; pregnancy gingivitis is the diagnosis in this context","Acute necrotizing periodontal disease — pain, necrosis, fetid odor; pregnancy gingivitis is less severe"],
  "coachFinal": "Diagnosis: dental treatment safety in second trimester pregnancy. Key learning: (1) Dental treatment in pregnancy is SAFE and recommended. The second trimester (weeks 14-27) is the optimal window — organogenesis is complete, patient is comfortable, supine positioning still feasible. First trimester: avoid elective treatment if possible (organogenesis). Third trimester: supine hypotension risk (left lateral tilt), patient discomfort — emergency treatment only in late third trimester. (2) Local anesthesia in pregnancy: lidocaine with 1:100,000 epinephrine is Category B — safe. Epinephrine in dental doses does not reach the fetus in significant concentrations. Withholding adequate LA causes pain and stress hormones — more harmful than the LA itself. (3) Medications to avoid: tetracyclines (tooth/bone staining), fluoroquinolones, high-dose aspirin, NSAIDs after 20 weeks. Safe: amoxicillin, cephalexin, clindamycin, acetaminophen. (4) Dental X-rays in pregnancy: safe when clinically indicated with lead apron and thyroid collar. Fetal radiation exposure from dental radiographs is negligible. Withholding necessary radiographs can delay diagnosis — more harmful than the imaging. (5) Periodontal disease and preterm birth: strong association between untreated periodontitis and preterm/low birthweight infants (inflammatory mediators, bacteremia). Treating periodontitis during pregnancy is beneficial. Dental cleaning and periodontal treatment are safe throughout pregnancy."
},
"sjs-ten": {
  "diagnosis": "Stevens-Johnson Syndrome/Toxic Epidermal Necrolysis — Drug-Induced, Mucosal and Cutaneous Epidermal Detachment, ICU Transfer",
  "problems": [
    {"problem":"SJS/TEN overlap — 15-30% BSA epidermal detachment","icd":"L51.3","onset":"2024","status":"Active","notes":"Patricia Kim, 42F — sulfamethoxazole-trimethoprim started 3 weeks ago. Fever, oral/ocular mucosal sloughing, skin blistering. BSA 18% — SJS/TEN overlap."},
    {"problem":"Ocular involvement — conjunctival synechiae risk","icd":"H10.89","onset":"2024","status":"Active","notes":"Ophthalmology urgent: bilateral conjunctival involvement. Without aggressive eye care, permanent vision loss from symblepharon."},
    {"problem":"Airway at risk — oral mucosal sloughing","icd":"J38.4","onset":"2024","status":"Active","notes":"Extensive oral mucosal sloughing — hemorrhagic lip crusting, pseudomembranes. Intubation anticipation planning with anesthesia."}
  ],
  "medications": [
    {"name":"STOP sulfamethoxazole-trimethoprim IMMEDIATELY","sig":"Remove causative drug. Every hour of continued exposure worsens BSA.","prescriber":"Dermatology","start":"STOP","refills":0,"status":"DISCONTINUED"},
    {"name":"IVIG 1g/kg/day IV x3 days — SJS/TEN treatment","sig":"High-dose IVIG — blocks Fas-FasL interaction that drives keratinocyte apoptosis. Most evidence-supported non-steroid therapy.","prescriber":"Dermatology/ICU","start":"2024","refills":0,"status":"Active"},
    {"name":"Cyclosporine 3-5mg/kg/day PO — T-cell suppression","sig":"Increasingly used — blocks T-cell cytotoxicity driving keratinocyte destruction. Can be used with or instead of IVIG.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active — consider"},
    {"name":"Ophthalmology — daily amniotic membrane, lubricant drops","sig":"Prevent symblepharon (conjunctival adhesions → vision loss). Amniotic membrane transplant to protect conjunctival surface.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active — daily ophthalmology"},
    {"name":"ICU wound care — non-adherent dressings, temperature control","sig":"Treat like burn patient — non-adherent silicone dressings. Warm room (30°C). Strict infection control. Nutritional support.","prescriber":"ICU/Dermatology","start":"2024","refills":0,"status":"Active — burn protocol"}
  ],
  "labs": [{"date":"11/2024","panel":"SJS/TEN Assessment","results":[
    {"test":"SCORTEN score","value":"3 — mortality risk ~35%","unit":"","ref":"0-1 = <5% mortality","flag":"H"},
    {"test":"BSA involved","value":"18","unit":"%","ref":"<10% = SJS; >30% = TEN","flag":"H"},
    {"test":"Creatinine","value":"1.4","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Albumin","value":"2.8","unit":"g/dL","ref":"3.5-5.0","flag":"L"},
    {"test":"WBC","value":"2.8","unit":"K/μL","ref":"4.5-11","flag":"L"},
    {"test":"Glucose","value":"182","unit":"mg/dL","ref":"70-100","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["SJS/TEN overlap — sulfa drug, mucosal sloughing, 18% BSA (correct)","DRESS — no epidermal detachment; eosinophilia distinguishes","Erythema multiforme major — true target lesions, <10% BSA, usually HSV not drug-triggered","Staphylococcal scalded skin syndrome — children, superficial cleavage plane, Nikolsky positive but different split level","Pemphigus vulgaris — flaccid blisters, Nikolsky positive, acantholysis on biopsy, not drug-triggered","Toxic shock syndrome — fever, rash, hypotension; no epidermal detachment"],
  "coachFinal": "Diagnosis: SJS/TEN overlap. Key learning: (1) SJS/TEN spectrum: SJS = <10% BSA. SJS/TEN overlap = 10-30% BSA. TEN = >30% BSA. Mortality: SJS ~5%, TEN ~30-50%. SCORTEN predicts mortality — score ≥3 = specialist center/burn unit required. (2) High-risk drugs: sulfonamides (most common), aromatic anticonvulsants (carbamazepine, phenytoin, lamotrigine), allopurinol, NSAIDs (oxicam class), nevirapine. Latency: 1-4 weeks after initiation. (3) Drug withdrawal timing: EVERY hour of continued drug exposure increases BSA detachment. Immediate discontinuation is the single most important intervention — reduces BSA progression rate significantly. (4) Ophthalmic emergencies in SJS/TEN: conjunctival involvement in ~80%. Without daily aggressive eye care (lubricants, amniotic membrane, prevention of symblepharon), permanent blindness from corneal scarring occurs in 20-35%. Ophthalmology must be involved from day 1. (5) Systemic treatment controversy: steroids are debated (may increase infection risk). IVIG (blocks keratinocyte apoptosis) and cyclosporine (reduces T-cell cytotoxicity) have best evidence. Etanercept (TNF-α blocker) is emerging. All patients require ICU-level care with burn management protocols."
},
"arc-hf-pharmacy": {
  "diagnosis": "HFrEF — Pharmacy Case: GDMT Optimization, Medication Reconciliation, Patient Counseling on New Agents",
  "problems": [
    {"problem":"HFrEF — GDMT incomplete, medication reconciliation needed","icd":"I50.20","onset":"2021","status":"Active","notes":"Dorothy Williams, 67F — EF 30%, on furosemide + carvedilol + lisinopril. Missing ARNI, MRA, and SGLT-2i — four-pillar GDMT incomplete."},
    {"problem":"Sacubitril-valsartan initiation — ACEi washout critical","icd":"I50.20","onset":"2024","status":"Active","notes":"Transitioning from lisinopril to Entresto. 36-hour ACEi washout MANDATORY — co-administration risks angioedema."},
    {"problem":"Potassium monitoring — spironolactone initiation in CKD","icd":"E87.5","onset":"2024","status":"Active","notes":"eGFR 44 + spironolactone = hyperkalemia risk. K+ and creatinine check at 1 week post-initiation required."}
  ],
  "medications": [
    {"name":"Sacubitril-valsartan 24/26mg BID — START after 36h lisinopril washout","sig":"CRITICAL: stop lisinopril, wait 36 hours, THEN start sacubitril-valsartan. Do NOT co-administer. Titrate to 49/51mg then 97/103mg q2-4 weeks as tolerated.","prescriber":"Cardiology (pharmacy verification)","start":"2024","refills":3,"status":"Active — new, after washout"},
    {"name":"Spironolactone 25mg PO daily — MRA add","sig":"Aldosterone antagonist — mortality benefit in HFrEF EF <35%. Check K+ and Cr at 1 week. Hold if K+ >5.5 or Cr >2.5.","prescriber":"Cardiology","start":"2024","refills":3,"status":"Active — new"},
    {"name":"Empagliflozin 10mg PO daily — SGLT-2i add","sig":"SGLT-2 inhibitor — reduces HF hospitalization and CV death regardless of diabetes status. Can lower BP — monitor for dizziness.","prescriber":"Cardiology","start":"2024","refills":3,"status":"Active — new"},
    {"name":"Furosemide 40mg PO daily — continue","sig":"Continue diuretic for volume management. May need dose reduction as ARNI reduces afterload and preload.","prescriber":"Cardiology","start":"2021","refills":5,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"HF Medication Safety Panel","results":[
    {"test":"Potassium","value":"4.3","unit":"mEq/L","ref":"3.5-5.0","flag":""},
    {"test":"Creatinine","value":"1.6","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"eGFR","value":"44","unit":"mL/min/1.73m²","ref":">60","flag":"L"},
    {"test":"Sodium","value":"136","unit":"mEq/L","ref":"136-145","flag":""},
    {"test":"BNP","value":"842","unit":"pg/mL","ref":"<100","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["HFrEF incomplete GDMT — pharmacy optimization role (correct)","ACEi + ARNI co-administration — dangerous medication error; pharmacy role is to intercept","Aldosterone antagonist without monitoring — hyperkalemia risk in CKD; pharmacy role is to ensure follow-up","SGLT-2i contraindicated in HFrEF — INCORRECT; now Class I in HFrEF regardless of diabetes","Diuretic continuation not needed with ARNI — INCORRECT; furosemide continued, monitor for overcorrection","ARNI safe in bilateral renal artery stenosis — INCORRECT; avoid ARNI/ACEi/ARB in bilateral RAS"],
  "coachFinal": "Diagnosis: HFrEF pharmacy case — GDMT optimization. Key learning: (1) Four pillars of HFrEF GDMT: (a) ARNI (sacubitril-valsartan) or ACEi/ARB. (b) Evidence-based beta-blocker (carvedilol, metoprolol succinate, bisoprolol). (c) MRA (spironolactone or eplerenone — EF <35%). (d) SGLT-2 inhibitor (dapagliflozin or empagliflozin — approved for HFrEF independent of diabetes). Each pillar independently reduces mortality. All four together are additive. (2) ACEi→ARNI transition: the pharmacist's most important HF drug safety intervention. Entresto co-administration with ACEi causes angioedema — the neprilysin component raises bradykinin (same as ACEi mechanism). Mandatory 36-hour washout. Verify this in medication reconciliation every time. (3) MRA + CKD monitoring: spironolactone in eGFR <45 requires K+ and Cr check at 1 week. Pharmacist role: flag monitoring requirement on prescription, ensure patient knows to follow up. Hold criteria: K+ >5.5 or Cr rise >30% from baseline. (4) SGLT-2i in HFrEF: empagliflozin and dapagliflozin are now Class I recommendations for HFrEF regardless of diabetes status. The HF benefit is independent of glycemic effect. eGFR threshold for initiation: ≥20 mL/min. (5) Pharmacist role in HF: medication reconciliation to identify incomplete GDMT, drug-drug interaction screening (ARNI + ACEi), monitoring parameter counseling, adherence support, and patient education on new agents."
},
"arc-pain-pharmacy": {
  "diagnosis": "Chronic Pain — Pharmacy Case: Opioid Risk Stratification, PDMP Review, Naloxone Dispensing",
  "problems": [
    {"problem":"Chronic pain prescription — opioid safety assessment","icd":"G89.29","onset":"2022","status":"Active","notes":"Kevin Torres, 48M — presents to pharmacy for opicodone 30mg #90 prescription. Pharmacist role: PDMP review, risk assessment, naloxone co-prescription."},
    {"problem":"PDMP controlled substance monitoring — multi-prescriber alert","icd":"F11.10","onset":"2024","status":"Active","notes":"PDMP shows prescriptions from 2 prescribers in past 30 days for controlled substances. Pharmacist must address."},
    {"problem":"Naloxone co-prescription — pharmacy initiation opportunity","icd":"T40.2X5A","onset":"2024","status":"Active","notes":"Patient on ≥50 MME/day. Pharmacist can prescribe naloxone independently in many states — standing order."}
  ],
  "medications": [
    {"name":"Oxycodone 30mg #90 — fill after PDMP review and documentation","sig":"PDMP reviewed: one prescriber, consistent fills, no overlapping. Appropriate to dispense.","prescriber":"Pain Medicine (pharmacy verification)","start":"2024","refills":0,"status":"Fill — after PDMP clearance"},
    {"name":"Naloxone 4mg intranasal kit — co-prescribe","sig":"Co-prescribe naloxone with all opioid prescriptions ≥50 MME/day or with any risk factor. Educate patient and household member on use.","prescriber":"Pharmacist (standing order) or prescriber","start":"2024","refills":1,"status":"Active — co-prescribe"},
    {"name":"Acetaminophen verification — avoid combination products","sig":"Verify patient is not taking acetaminophen-containing combination products (Percocet, NyQuil, Tylenol PM) concurrently — maximum 3g/day total.","prescriber":"Pharmacist — verify","start":"2024","refills":0,"status":"Verify — counseling"}
  ],
  "labs": [{"date":"11/2024","panel":"Pharmacy Assessment","results":[
    {"test":"PDMP check","value":"1 prescriber, consistent monthly fills, no overlapping prescriptions","unit":"","ref":"","flag":""},
    {"test":"MME calculation","value":"180 MME/day (oxycodone 30mg x6/day)","unit":"","ref":">50 MME = naloxone co-prescribe; >90 MME = discuss dose reduction","flag":"H"},
    {"test":"ORT (Opioid Risk Tool)","value":"Score 8 — high risk","unit":"","ref":"<4 low; 4-7 moderate; ≥8 high","flag":"H"},
    {"test":"UDS on file (pain clinic)","value":"Oxycodone positive, no illicit substances","unit":"","ref":"Consistent with prescription","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Appropriate chronic pain opioid prescription — fill after PDMP verification (correct)","Multi-prescriber shopping — PDMP shows single prescriber; not applicable here","Drug diversion concern — UDS consistent, PDMP consistent; no evidence","Acetaminophen toxicity from combination products — counseling needed, not a contraindication","Refusal to fill based on morphine dose alone — high-dose opioid does not mandate refusal if clinically appropriate","Naloxone required by law before filling — true in some states; good practice universally"],
  "coachFinal": "Diagnosis: pharmacy opioid safety assessment — appropriate fill with naloxone co-prescription. Key learning: (1) Pharmacist PDMP responsibilities: check PDMP for EVERY controlled substance prescription. Red flags: multiple prescribers for same drug class, overlapping fills, geographic inconsistency (prescriber and patient far apart), early refill requests. Document PDMP review in dispensing record. (2) MME (morphine milligram equivalents) thresholds: >50 MME/day = co-prescribe naloxone. >90 MME/day = CDC guideline recommends re-evaluation of risk-benefit and discussion with prescriber. >200 MME/day = consult pain specialist (if not already involved). (3) Naloxone co-prescribing: pharmacists in most US states can prescribe naloxone under a standing order or collaborative practice agreement without individual prescriber authorization. Every patient on ≥50 MME/day, combination opioid + benzodiazepine, or with risk factors should receive naloxone. Educate patient AND household members on use. (4) Opioid Risk Tool (ORT): brief 5-item assessment — personal/family history of substance use, age, history of prehabilitation, history of sexual abuse, psychological disease. Score ≥8 = high risk → more frequent monitoring, smaller supply, PDMP checks every fill. (5) Pharmacist refusal: the right to refuse to fill is a professional judgment — reserved for legitimate safety concerns (forgery, multi-prescriber, suspicious circumstances). NOT based on dose alone or personal discomfort with opioids in legitimate pain patients."
},
"arc-sepsis-pharmacy": {
  "diagnosis": "Sepsis — Pharmacy Case: Antibiotic Stewardship, PK/PD Optimization, De-escalation Protocol",
  "problems": [
    {"problem":"Sepsis — urosepsis, antibiotic optimization needed","icd":"A41.51","onset":"2024","status":"Active","notes":"Sandra Kim, 67F — septic shock from UTI. Empiric vancomycin + piperacillin-tazobactam started. Culture results pending. Pharmacy: optimize dosing and de-escalation plan."},
    {"problem":"Vancomycin AUC/MIC monitoring — AKI complicates dosing","icd":"N17.9","onset":"2024","status":"Active","notes":"Creatinine 2.1 (baseline 0.9). Vancomycin requires AUC-guided dosing in AKI — trough-based dosing inadequate and potentially nephrotoxic."},
    {"problem":"Piperacillin-tazobactam + vancomycin — AKI risk combination","icd":"N17.9","onset":"2024","status":"Active","notes":"Pip-tazo + vancomycin combination significantly increases nephrotoxicity vs vancomycin alone. De-escalate pip-tazo as soon as culture data available."}
  ],
  "medications": [
    {"name":"Vancomycin — AUC/MIC-guided dosing protocol","sig":"AKI present: load 25-30mg/kg IV x1, then reduce maintenance dose. Target AUC 400-600 mg·h/L. Draw levels for Bayesian PK modeling.","prescriber":"Pharmacy (ID collaboration)","start":"2024","refills":0,"status":"Active — AUC monitoring"},
    {"name":"Piperacillin-tazobactam 3.375g IV q8h extended infusion (4h)","sig":"Extended infusion (4-hour) optimizes PK/PD for time-dependent killing — maintains drug concentration above MIC longer than standard 30-min infusion.","prescriber":"Pharmacy/ID","start":"2024","refills":0,"status":"Active — extended infusion"},
    {"name":"Ceftriaxone 2g IV q24h — de-escalation target for gram-negative coverage","sig":"If urine culture returns gram-negative susceptible to ceftriaxone — de-escalate from pip-tazo to ceftriaxone + discontinue vancomycin if gram-positive coverage not needed.","prescriber":"Pharmacy — de-escalation plan","start":"2024","refills":0,"status":"Planned — pending culture"},
    {"name":"Procalcitonin-guided de-escalation — serial levels ordered","sig":"Procalcitonin trending down = infection responding = de-escalation/discontinuation safe. Reduces antibiotic duration by 2-3 days on average.","prescriber":"Medicine/Pharmacy","start":"2024","refills":0,"status":"Active — monitoring"}
  ],
  "labs": [{"date":"11/2024","panel":"Antibiotic Monitoring","results":[
    {"test":"Vancomycin trough (old method — informational only)","value":"12","unit":"mcg/mL","ref":"15-20 (old guideline)","flag":"L"},
    {"test":"Vancomycin AUC (Bayesian estimate)","value":"368","unit":"mg·h/L","ref":"400-600 target","flag":"L"},
    {"test":"Creatinine","value":"2.1","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Urine culture — preliminary","value":"Gram-negative rods — species/sensitivities pending","unit":"","ref":"No growth","flag":"H"},
    {"test":"Procalcitonin — day 1","value":"28","unit":"ng/mL","ref":"<0.25","flag":"H"},
    {"test":"Procalcitonin — day 3","value":"9","unit":"ng/mL","ref":"<0.25","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Urosepsis — vancomycin AUC-guided dosing, pip-tazo extended infusion (correct)","Vancomycin trough-only monitoring — old practice; AUC/MIC monitoring is current standard","Continue broad-spectrum antibiotics without culture-guided de-escalation — antibiotic stewardship failure","Standard 30-minute pip-tazo infusion — extended infusion has PK/PD advantage for treatment of resistant organisms","Pip-tazo continuation after gram-negative sensitivities returned — de-escalation to narrower spectrum is the stewardship goal","Vancomycin dose unchanged in AKI — significant nephrotoxicity risk without dose adjustment"],
  "coachFinal": "Diagnosis: pharmacy sepsis management — AUC monitoring and stewardship. Key learning: (1) Vancomycin AUC monitoring: ASHP/IDSA/SIDP 2020 guidelines replaced trough-only monitoring with AUC/MIC-guided dosing. Target AUC 400-600 mg·h/L. Trough-only monitoring overcorrelates with nephrotoxicity and does not reliably achieve AUC targets. Bayesian PK software using 2 vancomycin levels calculates individualized AUC. (2) Extended infusion beta-lactams: time-dependent killing antibiotics (penicillins, cephalosporins, carbapenems) achieve better PK/PD targets with extended infusions (3-4h) vs standard 30-min. Particularly beneficial for infections with higher MIC organisms (Pseudomonas, Klebsiella). (3) Pip-tazo + vancomycin nephrotoxicity: meta-analyses demonstrate 2-3x increased AKI incidence vs vancomycin alone. Mechanism unclear but real. Guidance: de-escalate pip-tazo as soon as gram-negative sensitivities allow, change to cefepime or ceftriaxone. (4) Antibiotic stewardship de-escalation: once culture data available — narrow to narrowest effective agent. Procalcitonin declining = infection responding = reassess need for antibiotics. Reduces resistance selection, adverse effects, and cost. (5) Pharmacist role in sepsis: AUC monitoring is pharmacy-driven in most institutions. Pharmacist participates in daily antibiotic rounds — calculates doses, reviews cultures, recommends de-escalation, monitors for toxicity."
},
"pharmacy-otc-hypertension": {
  "diagnosis": "OTC Medication Interaction With Hypertension — NSAIDs and Decongestants, Patient Counseling, Safe Alternatives",
  "problems": [
    {"problem":"Pseudoephedrine OTC purchase — hypertension contraindication","icd":"I10","onset":"2024","status":"Active","notes":"Maria Santos, 55F — hypertension on amlodipine + lisinopril. Purchasing pseudoephedrine (Sudafed) for cold symptoms. Pharmacist intervention needed."},
    {"problem":"NSAID use — ibuprofen purchased for pain","icd":"I10","onset":"2024","status":"Active","notes":"Ibuprofen purchased alongside pseudoephedrine. NSAIDs blunt antihypertensive effect of ACEi and diuretics — can significantly raise BP."},
    {"problem":"Pharmacist medication therapy management — OTC interaction interception","icd":"Z79.899","onset":"2024","status":"Active","notes":"Pharmacist role: intercept potentially harmful OTC purchases, counsel on safe alternatives, document interaction."}
  ],
  "medications": [
    {"name":"COUNSEL against pseudoephedrine — hypertension contraindication","sig":"Pseudoephedrine is a sympathomimetic — raises BP significantly in hypertensive patients. Contraindicated. Recommend intranasal saline or intranasal ipratropium as safe alternative.","prescriber":"Pharmacist — OTC counseling","start":"AVOID","refills":0,"status":"AVOID — counsel"},
    {"name":"Intranasal saline spray — safe decongestant alternative","sig":"Isotonic or hypertonic saline nasal spray — mechanically clears congestion without systemic BP effect.","prescriber":"Pharmacist","start":"2024","refills":0,"status":"Safe alternative"},
    {"name":"COUNSEL against OTC ibuprofen — reduce to short course or switch to acetaminophen","sig":"NSAIDs blunt ACEi/ARB and diuretic effects. For occasional use (1-2 days): acceptable. For ongoing pain: acetaminophen preferred in hypertension. Naproxen may have slightly lower BP effect than ibuprofen.","prescriber":"Pharmacist","start":"Acetaminophen preferred","refills":0,"status":"Switch to acetaminophen"},
    {"name":"Intranasal ipratropium 0.03% — reduce rhinorrhea","sig":"Anticholinergic nasal spray — reduces rhinorrhea without systemic vasopressor effect. Safe in hypertension.","prescriber":"Pharmacist","start":"2024","refills":1,"status":"Safe alternative"}
  ],
  "labs": [{"date":"11/2024","panel":"Pharmacy OTC Counseling","results":[
    {"test":"Current BP (checked at pharmacy kiosk)","value":"148/92","unit":"mmHg","ref":"<130/80 on treatment","flag":"H"},
    {"test":"Current medications confirmed","value":"Amlodipine 10mg, Lisinopril 20mg","unit":"","ref":"","flag":""},
    {"test":"OTC purchases flagged","value":"Pseudoephedrine 120mg + Ibuprofen 400mg","unit":"","ref":"Both problematic in hypertension","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["OTC medication-hypertension interaction — pharmacist intervention (correct)","Uncontrolled hypertension from non-adherence — BP elevated but OTC interaction is the immediate issue","Second antihypertensive needed — BP not at goal, but OTC medications are the acute issue to address","No intervention needed — OTC medications are widely available — INCORRECT; patient safety intervention required","Refer to PCP for all OTC questions — appropriate for complex cases, but pharmacist can and should counsel here","Pseudoephedrine safe with close BP monitoring — INCORRECT; contraindicated in significant hypertension"],
  "coachFinal": "Diagnosis: OTC medication safety in hypertension — pharmacy intervention. Key learning: (1) Sympathomimetics and hypertension: pseudoephedrine, phenylephrine (nasal spray and oral), and oxymetazoline (nasal spray — minimal systemic absorption) are decongestants. Pseudoephedrine and phenylephrine raise systolic BP by 5-10+ mmHg via alpha-1 receptor stimulation. Contraindicated in significant hypertension, especially uncontrolled. Safe nasal alternatives: isotonic saline irrigation, ipratropium nasal spray. (2) NSAIDs and antihypertensives: NSAIDs inhibit prostaglandin synthesis → sodium and water retention → blunt antihypertensive effect of ACEi, ARBs, and diuretics. Mean systolic BP rise of 3-5 mmHg with regular NSAID use. Most pronounced with indomethacin; naproxen and aspirin (low-dose) may be slightly better tolerated. Acetaminophen is the safe analgesic for hypertensive patients. (3) Pharmacy-based BP monitoring: BP measurement at the pharmacy kiosk identified uncontrolled hypertension — an opportunity to refer to PCP for medication adjustment AND prevent worsening with OTC purchase. (4) OTC counseling is a pharmacist core competency: pharmacists are the most accessible healthcare providers. Proactive counseling at point of sale prevents adverse drug events. The pharmacist-patient interaction at OTC purchase is a clinical intervention, not a transaction. (5) Documentation: pharmacist should document OTC counseling interventions in the pharmacy management system — creates a record and supports continuity of care."
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
