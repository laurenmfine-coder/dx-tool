#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"corneal-abrasionkeratitis": {
  "diagnosis": "Contact Lens-Related Bacterial Keratitis — Pseudomonas",
  "problems": [
    {"problem":"Bacterial keratitis — contact lens-related, Pseudomonas suspected","icd":"H16.009","onset":"2024","status":"Active","notes":"Jason Park, 24M — contact lens wearer (extended wear). 2-day severe right eye pain, photophobia, decreased vision, purulent discharge. Slit lamp: central corneal ulcer 3mm, hypopyon (layering white cells in anterior chamber). Emergency ophthalmology."},
    {"problem":"Hypopyon — severe anterior chamber inflammation","icd":"H16.009","onset":"2024","status":"Active","notes":"Hypopyon (white layering of inflammatory cells in anterior chamber) indicates severe infection with significant anterior chamber reaction. Poor prognostic sign for corneal scar."},
    {"problem":"Contact lens complication — extended wear highest risk","icd":"H16.009","onset":"2024","status":"Active","notes":"Extended wear contact lenses (overnight wear) increase risk 10-15x vs daily wear. Pseudomonas aeruginosa is the most common pathogen in contact lens keratitis — can cause rapidly progressive corneal destruction."}
  ],
  "medications": [
    {"name":"Ciprofloxacin 0.3% ophthalmic drops — q1h initially","sig":"Fluoroquinolone first-line for bacterial keratitis. Load: q15min x 6 doses first hour, then q30min x 6h, then q1h. Adjust to q4h as clinical improvement.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active — q1h"},
    {"name":"Discontinue contact lenses immediately — forever this eye","sig":"Remove all contact lenses immediately. Do not reinsert until fully healed and ophthalmology clears. Extended wear should be permanently discontinued.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Discontinued"},
    {"name":"Corneal scraping for culture — before starting antibiotics","sig":"Corneal scraping of ulcer edge for Gram stain and culture. Guides antibiotic therapy. Must be done before antibiotics — sensitivity drops rapidly after treatment started.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Done — before antibiotics"}
  ],
  "labs": [{"date":"04/2024","panel":"Bacterial Keratitis","results":[
    {"test":"Slit lamp — ulcer size","value":"3mm central corneal ulcer with dense stromal infiltrate","unit":"","ref":"No ulcer","flag":"H"},
    {"test":"Hypopyon","value":"Present — 2mm layering","unit":"","ref":"Absent","flag":"H"},
    {"test":"Visual acuity right","value":"20/400","unit":"","ref":"20/20","flag":"H"},
    {"test":"Corneal scraping — Gram stain","value":"Gram-negative rods — Pseudomonas suspected","unit":"","ref":"No organisms","flag":"H"},
    {"test":"IOP right","value":"14","unit":"mmHg","ref":"10-21","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Bacterial keratitis — Pseudomonas (contact lens) (correct)","Acanthamoeba keratitis — contact lens wearer + fresh water exposure; ring infiltrate; severe pain out of proportion; propamidine treatment","Herpes simplex keratitis — dendritic ulcer on fluorescein; no hypopyon initially; acyclovir ophthalmic","Fungal keratitis — trauma with vegetable matter; feathery infiltrate; voriconazole","Corneal abrasion — no infiltrate; no hypopyon; superficial; heals quickly with antibiotic drops"],
  "coachFinal": "Diagnosis: contact lens-related bacterial keratitis, Pseudomonas. Key learning: (1) Bacterial keratitis vs corneal abrasion: corneal abrasion = superficial defect, no stromal infiltrate, heals quickly. Bacterial keratitis = stromal infiltrate (white opacity), hypopyon, severe pain, progressive. The presence of a stromal infiltrate is the key finding. (2) Pseudomonas keratitis in contact lens wearers: Pseudomonas aeruginosa produces proteases that cause rapid corneal melting (keratolysis). Can progress from small ulcer to corneal perforation in 24-48 hours if untreated. Extended wear lenses have the highest risk. (3) Fluoroquinolone loading dose: ciprofloxacin 0.3% or moxifloxacin 0.5% ophthalmic — intensive loading (q15min initially) to achieve therapeutic concentrations in corneal stroma. Concentration-dependent killing. (4) Culture before antibiotics: corneal scraping for Gram stain and culture must be performed before antibiotics — sensitivity drops rapidly. Ophthalmology performs this under slit lamp with blade or spatula. (5) Hypopyon: sterile layering of inflammatory cells, not pus. Indicates severe anterior chamber reaction. In bacterial keratitis, hypopyon is reactive (bacteria usually NOT in anterior chamber). Resolves with treatment. If bacteria are IN the anterior chamber → endophthalmitis (worse prognosis, requires vitrectomy)."
},
"dilutional-coagulopathy": {
  "diagnosis": "Dilutional Coagulopathy — Massive Transfusion During EVAR",
  "problems": [
    {"problem":"Dilutional coagulopathy — massive transfusion","icd":"D68.9","onset":"2024","status":"Active","notes":"Robert Chen, 68M — endovascular AAA repair, unexpected hemorrhage requiring 12 units pRBC. Now: PT 22s, INR 1.9, fibrinogen 94, platelets 68. Dilutional coagulopathy from massive transfusion of packed red cells without FFP."},
    {"problem":"Massive transfusion definition — >10 units pRBC in 24h","icd":"D68.9","onset":"2024","status":"Active","notes":"Massive transfusion protocol (MTP) should have been activated. 1:1:1 ratio (pRBC:FFP:platelets) prevents dilutional coagulopathy. Was not initiated — now treating resultant coagulopathy."},
    {"problem":"Ongoing surgical hemorrhage — need coagulation correction","icd":"D68.9","onset":"2024","status":"Active","notes":"Still in OR. Active hemorrhage continues. Coagulation factors must be repleted immediately. Viscoelastic testing (TEG/ROTEM) guides product selection."}
  ],
  "medications": [
    {"name":"Fresh frozen plasma 4 units — replace coagulation factors","sig":"FFP contains all clotting factors. Target INR <1.5 for active hemorrhage. Give ahead of lab results if MTP activated (1:1:1 ratio).","prescriber":"Anesthesia/Vascular Surgery","start":"2024","refills":0,"status":"Active — ongoing"},
    {"name":"Cryoprecipitate 10 units — fibrinogen <150","sig":"Cryoprecipitate is the fastest source of fibrinogen. Target fibrinogen >200 mg/dL in surgical hemorrhage. Each unit raises fibrinogen 5-10 mg/dL.","prescriber":"Anesthesia","start":"2024","refills":0,"status":"Active"},
    {"name":"Platelets 1 apheresis unit — target >100K in active hemorrhage","sig":"Platelets consumed with massive transfusion. Target >100K for surgical hemorrhage (higher than non-bleeding threshold of 50K).","prescriber":"Anesthesia","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"Massive Transfusion Coagulopathy","results":[
    {"test":"PT/INR","value":"22s / 1.9","unit":"","ref":"12s / <1.2","flag":"H"},
    {"test":"Fibrinogen","value":"94","unit":"mg/dL","ref":"200-400","flag":"L"},
    {"test":"Platelets","value":"68","unit":"K/μL","ref":"150-400","flag":"L"},
    {"test":"TEG/ROTEM","value":"Prolonged clot formation time, reduced amplitude — confirms dilutional coagulopathy","unit":"","ref":"Normal","flag":"H"},
    {"test":"Temperature","value":"35.6","unit":"°C","ref":"37 — hypothermia worsens coagulopathy","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Dilutional coagulopathy from massive transfusion (correct)","DIC — D-dimer critically elevated; fibrinogen even lower; underlying trigger (trauma, sepsis, cancer)","Hemophilia A/B — factor assay; history; specific factor replacement","Liver failure coagulopathy — hepatic synthetic failure; elevated bilirubin; no hemorrhage trigger","Vitamin K deficiency — warfarin or malnutrition; PT prolonged predominantly; not acute setting"],
  "coachFinal": "Diagnosis: dilutional coagulopathy from massive transfusion. Key learning: (1) Massive transfusion protocol (MTP): 1:1:1 ratio (pRBC:FFP:platelets) mimics whole blood and prevents dilutional coagulopathy. Activating MTP early (>6 units pRBC anticipated) prevents the coagulopathy before it develops — treating it after is more difficult. (2) Dilutional coagulopathy mechanism: packed red cells contain no clotting factors or platelets. Transfusing 12 units pRBC = massive dilution of patient's own clotting factors → PT/INR prolonged, fibrinogen falls, platelets fall. Simple math problem. (3) Fibrinogen is the critical target: fibrinogen falls first and fastest in massive hemorrhage/dilution. Target fibrinogen >200 mg/dL during active hemorrhage. Cryoprecipitate is the fastest/most concentrated fibrinogen source. (4) Viscoelastic testing (TEG/ROTEM): provides real-time coagulation analysis in 10-15 minutes. Guides component therapy more precisely than INR/PT alone. Shows which specific component is deficient. (5) Lethal triad in surgical hemorrhage: hypothermia + acidosis + coagulopathy. All three are self-reinforcing. Rewarm, correct acidosis, replace clotting products simultaneously. Warm all blood products. Warm OR environment."
},
"epididymitis": {
  "diagnosis": "Acute Epididymitis — Sexually Transmitted (Chlamydia/Gonorrhea)",
  "problems": [
    {"problem":"Acute epididymitis — STI-related","icd":"N45.1","onset":"2024","status":"Active","notes":"Marcus Davis, 24M — 3-day progressive right scrotal pain and swelling, fever 38.1°C, urethral discharge. Positive Prehn sign (scrotal elevation relieves pain). Doppler ultrasound: increased right epididymal blood flow."},
    {"problem":"STI exposure — Chlamydia/Gonorrhea workup","icd":"A74.9","onset":"2024","status":"Active","notes":"Sexually active, new partner last month. In men <35, STIs (Chlamydia trachomatis, Neisseria gonorrhoeae) are the most common cause of epididymitis. Partner notification required."},
    {"problem":"Testicular torsion exclusion — critical","icd":"N45.1","onset":"2024","status":"Active","notes":"Testicular torsion presents similarly but requires immediate surgical detorsion. Positive Prehn sign (pain relief with elevation) suggests epididymitis. Doppler shows increased flow (epididymitis) vs absent flow (torsion). Torsion = absent flow = OR immediately."}
  ],
  "medications": [
    {"name":"Ceftriaxone 500mg IM x1 + doxycycline 100mg BID x 10 days","sig":"CDC-recommended dual therapy for epididymitis likely due to STI (gonorrhea + chlamydia coverage). Ceftriaxone for gonorrhea (escalating resistance — dose increased to 500mg). Doxycycline for chlamydia.","prescriber":"Emergency/Urology","start":"2024","refills":0,"status":"Active"},
    {"name":"NSAIDs — scrotal support and analgesia","sig":"Ibuprofen 600mg TID for pain and inflammation. Athletic supporter or snug underwear for scrotal elevation and support.","prescriber":"Emergency","start":"2024","refills":1,"status":"Active"},
    {"name":"Partner notification — STI treatment","sig":"Sexual partner(s) within 60 days require STI evaluation and treatment. Public health notification for gonorrhea.","prescriber":"Public Health","start":"2024","refills":0,"status":"Active — partner referral"}
  ],
  "labs": [{"date":"04/2024","panel":"Epididymitis Workup","results":[
    {"test":"NAAT (urine) — GC/Chlamydia","value":"Positive — Chlamydia trachomatis","unit":"","ref":"Negative","flag":"H"},
    {"test":"Prehn sign","value":"Positive — pain improves with elevation","unit":"","ref":"Positive = epididymitis (not torsion)","flag":""},
    {"test":"Scrotal Doppler — right epididymis","value":"Increased blood flow right epididymis","unit":"","ref":"Symmetric flow = normal","flag":"H"},
    {"test":"Urinalysis","value":"WBC 18, bacteria present","unit":"","ref":"Normal","flag":"H"},
    {"test":"Temperature","value":"38.1","unit":"°C","ref":"<38","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Scrotal Doppler Ultrasound","findings":"Enlarged right epididymis with increased color flow on Doppler. Right testis: normal size, normal echogenicity, normal blood flow. No abscess. No hydrocele.","impression":"Acute epididymitis. Testicular torsion excluded (normal testicular blood flow). No abscess."}],
  "ddxTargets": ["Acute epididymitis — STI-related (correct)","Testicular torsion — absent Doppler flow; negative Prehn sign; surgical emergency; bell-clapper deformity","Orchitis alone — isolated testicular inflammation; epididymis spared; often mumps-related","Inguinal hernia — bowel palpable; no fever; reducible; different exam","Epididymo-orchitis — both structures involved; more severe; same treatment principle"],
  "coachFinal": "Diagnosis: acute epididymitis, STI-related. Key learning: (1) Testicular torsion vs epididymitis clinical distinction: TORSION = sudden onset severe pain, nausea/vomiting, absent cremasteric reflex, high-riding testicle (bell-clapper), Prehn sign NEGATIVE (elevation doesn't help), Doppler ABSENT flow. EPIDIDYMITIS = gradual onset, fever, urethral discharge, Prehn sign POSITIVE, Doppler INCREASED flow. Any doubt → scrotal ultrasound immediately, and if still uncertain → OR. (2) Epididymitis by age: <35 years = STI (chlamydia, gonorrhea). >35 years = enteric organisms (E. coli, Klebsiella) from BPH, UTI, instrumentation. Treatment differs. (3) CDC dual therapy for STI epididymitis: ceftriaxone 500mg IM (gonorrhea) + doxycycline 100mg BID x 10 days (chlamydia). Increasing gonorrhea resistance has pushed ceftriaxone dose from 250mg to 500mg. (4) Complications without treatment: epididymo-orchitis, epididymal abscess, infarction, infertility. (5) Partner notification: notifiable STI — gonorrhea must be reported. All partners within 60 days require evaluation and treatment. Abstain from sex until both patient and partner complete treatment and symptoms resolve."
},
"epidural-abscess": {
  "diagnosis": "Spinal Epidural Abscess — Post-Epidural Steroid Injection, MSSA",
  "problems": [
    {"problem":"Spinal epidural abscess — post-ESI, L4-L5","icd":"G06.1","onset":"2024","status":"Active","notes":"William Chen, 58M — lumbar epidural steroid injection 2 weeks ago. Progressive severe back pain since injection, now bilateral leg weakness and urinary retention developing over 48h. MRI: epidural abscess L4-5 with cord/cauda compression."},
    {"problem":"Progressive neurological deficits — surgical emergency","icd":"G06.1","onset":"2024","status":"Active","notes":"Bilateral leg weakness + urinary retention = impending cauda equina syndrome. Every hour of untreated compression = permanent neurological deficit."},
    {"problem":"Staphylococcus aureus — most common pathogen","icd":"G06.1","onset":"2024","status":"Active","notes":"S. aureus accounts for >65% of spinal epidural abscesses. MRSA and MSSA both common. IV drug use, spinal procedures, and bacteremia are leading risk factors."}
  ],
  "medications": [
    {"name":"Surgical decompression — emergent laminectomy","sig":"Epidural abscess with neurological deficits = surgical emergency. Emergent laminectomy and drainage. Every hour of delay = more permanent neurological damage.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"EMERGENT — OR"},
    {"name":"Vancomycin 25-30mg/kg IV q8-12h — MRSA coverage","sig":"Empiric vancomycin pending cultures. Covers MRSA and MSSA. De-escalate to nafcillin if MSSA confirmed. Target vancomycin AUC 400-600 (or trough 15-20).","prescriber":"Infectious Disease/Neurosurgery","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Long-term IV antibiotics — 4-8 weeks post-drainage","sig":"SEA requires prolonged IV antibiotics (4-8 weeks) due to poor penetration into abscess cavity and adjacent bone. Duration based on clinical response and follow-up MRI.","prescriber":"Infectious Disease","start":"2024","refills":0,"status":"Plan — post-drainage"}
  ],
  "labs": [{"date":"04/2024","panel":"Spinal Epidural Abscess","results":[
    {"test":"WBC","value":"22.4","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"ESR","value":"118","unit":"mm/hr","ref":"<20","flag":"H"},
    {"test":"CRP","value":"240","unit":"mg/L","ref":"<10","flag":"H"},
    {"test":"Blood cultures x2","value":"Pending — before antibiotics","unit":"","ref":"","flag":""},
    {"test":"Bilateral leg strength","value":"3/5 bilaterally — progressive weakness","unit":"","ref":"5/5","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Spine with Gadolinium — Lumbar","findings":"Epidural abscess L3-L5 with rim enhancement. Cord/cauda equina compression at L4-5. Adjacent discitis and osteomyelitis L4-5. Epidural extension anteriorly.","impression":"Spinal epidural abscess with cauda equina compression and adjacent discitis-osteomyelitis. Emergent neurosurgical consultation."}],
  "ddxTargets": ["Spinal epidural abscess — post-ESI (correct)","Metastatic epidural cord compression — known cancer; no fever; no inflammatory markers; different MRI enhancement","Herniated disc with cauda equina — no fever; no inflammatory markers; different MRI — disc material not enhancing abscess","Transverse myelitis — inflammatory; CSF pleocytosis; different MRI pattern; no focal collection","Discitis-osteomyelitis alone — can coexist; but epidural collection is key finding requiring surgery"],
  "coachFinal": "Diagnosis: spinal epidural abscess. Key learning: (1) Classic SEA triad: back pain + fever + neurological deficit. Only 13% have all three at presentation — most present with back pain and fever initially. The triad fully present = late presentation. Do not wait for the full triad — MRI immediately if back pain + fever + any neurological symptom. (2) Post-procedure SEA: epidural steroid injections, spinal surgery, epidural anesthesia — all introduce bacteria into the epidural space. New or worsening back pain after spinal procedure = SEA until proven otherwise. ESR and CRP are highly sensitive markers. (3) Surgery vs antibiotics alone: neurological deficits = surgery immediately. No deficits + small abscess + poor surgical candidate = antibiotics alone with very close monitoring. Any neurological deterioration = OR. (4) S. aureus dominant: >65% of cases. MRSA increasingly common. Empiric vancomycin. De-escalate to nafcillin/oxacillin for MSSA (better CNS penetration than vancomycin). Duration: 4-8 weeks IV antibiotics after drainage. (5) Adjacent discitis-osteomyelitis: SEA frequently coexists with discitis-osteomyelitis. Treat both simultaneously — longer antibiotic course required for bone involvement."
},
"flail-chest": {
  "diagnosis": "Flail Chest — Paradoxical Chest Wall Movement, Pulmonary Contusion",
  "problems": [
    {"problem":"Flail chest — right-sided, ≥3 rib fractures x 2 levels","icd":"S22.5XXA","onset":"2024","status":"Active","notes":"David Park, 45M — restrained driver, high-speed MVA. Paradoxical chest wall movement right hemithorax, severe pain, SpO2 88%. CXR: multiple right rib fractures 4-8 in two places. CT: right pulmonary contusion."},
    {"problem":"Pulmonary contusion — underlying lung injury","icd":"S27.321A","onset":"2024","status":"Active","notes":"Pulmonary contusion underlies flail chest and is the primary driver of hypoxemia — not the paradoxical motion. Contusion worsens over 24-48 hours (edema maximal at 48h). Anticipate worsening."},
    {"problem":"Pain management — critical for respiratory mechanics","icd":"S22.5XXA","onset":"2024","status":"Active","notes":"Pain → splinting → reduced tidal volumes → atelectasis → pneumonia. Epidural analgesia or multimodal pain control is critical to allow deep breathing and prevent respiratory failure."}
  ],
  "medications": [
    {"name":"High-flow O2 via NRB mask → HFNC → BiPAP escalation","sig":"Target SpO2 >94%. Start high-flow O2. If SpO2 not maintained or work of breathing increasing → HFNC (40-60L/min, FiO2 0.6). BiPAP for respiratory fatigue. Intubate if failing NIV.","prescriber":"Trauma Surgery/Critical Care","start":"2024","refills":0,"status":"HFNC initiated"},
    {"name":"Thoracic epidural analgesia — pain control","sig":"Epidural analgesia is gold standard for flail chest pain management. Reduces need for intubation, reduces pneumonia rates, shortens ICU stay. T4-T6 epidural placement.","prescriber":"Anesthesia/Trauma Surgery","start":"2024","refills":0,"status":"Placed — T5 epidural"},
    {"name":"Rib fixation (surgical stabilization) — consider for severe flail","sig":"ORIF of rib fractures for large flail segments reduces ventilator days, ICU stay, and pneumonia. Best evidence in patients already requiring mechanical ventilation. Thoracic surgery consultation.","prescriber":"Thoracic Surgery","start":"2024","refills":0,"status":"Considering — thoracic surgery consulted"}
  ],
  "labs": [{"date":"04/2024","panel":"Flail Chest Assessment","results":[
    {"test":"SpO2","value":"88","unit":"% on 15L NRB","ref":"≥95%","flag":"L"},
    {"test":"ABG — pH","value":"7.32","unit":"","ref":"7.35-7.45","flag":"L"},
    {"test":"ABG — pO2","value":"58","unit":"mmHg","ref":"≥80","flag":"L"},
    {"test":"ABG — pCO2","value":"52","unit":"mmHg","ref":"35-45 (rising — fatigue)","flag":"H"},
    {"test":"Hemoglobin","value":"10.8","unit":"g/dL","ref":"13.5-17.5","flag":"L"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Chest","findings":"Fractures ribs 4-8 right, two levels each (flail segment). Right pulmonary contusion involving lower lobe. Small right pneumothorax (15%). No hemothorax. No aortic injury. Mediastinum normal.","impression":"Flail chest with pulmonary contusion. Small right pneumothorax may require observation vs chest tube. Thoracic surgery."}],
  "ddxTargets": ["Flail chest with pulmonary contusion (correct)","Simple multiple rib fractures — no paradoxical movement; no flail segment; pain management predominant","Pneumothorax causing respiratory distress — absent breath sounds; tracheal deviation; needle decompression","Hemothorax — dull to percussion; CXR opacification; chest tube","Diaphragmatic injury — unusual chest movement; bowel sounds in chest; CXR"],
  "coachFinal": "Diagnosis: flail chest with pulmonary contusion. Key learning: (1) Flail chest definition: ≥3 consecutive ribs fractured in ≥2 places creating a free-floating segment that moves paradoxically (IN on inspiration, OUT on expiration — opposite of normal chest wall). The diagnosis is clinical. (2) Hypoxemia in flail chest is primarily from pulmonary contusion, not paradoxical motion: the underlying lung injury is what drives respiratory failure. Pulmonary contusion worsens over 24-48 hours as edema peaks — anticipate respiratory deterioration in the first 48 hours. (3) Pain control is critical: pain → respiratory splinting → reduced tidal volumes → atelectasis → pneumonia. Thoracic epidural provides superior analgesia, reduces pneumonia, and reduces need for intubation. Avoid opioids alone (respiratory depression). (4) Avoid excessive IV fluids: pulmonary contusion + over-hydration = worsening hypoxemia (damaged lung takes up fluid preferentially). Restrictive fluid strategy. (5) Indications for intubation: SpO2 <90% despite HFNC/NIV, rising pCO2 with fatigue, GCS <9, severe associated injuries. Rib fixation (ORIF): evidence supports in mechanically ventilated patients with large flail segments — reduces ventilator days and ICU stay."
},
"gas-gangrene": {
  "diagnosis": "Gas Gangrene — Clostridial Myonecrosis",
  "problems": [
    {"problem":"Gas gangrene — clostridial myonecrosis, rapidly progressive","icd":"A48.0","onset":"2024","status":"Active","notes":"Carlos Rivera, 42M — puncture wound right lower leg 24h ago (nail). Now severe pain out of proportion, wooden-hard skin, crepitus on palpation, bronze/brown skin discoloration, gas in soft tissue on X-ray. Tachycardia 128, BP 96/62."},
    {"problem":"Gas in soft tissue — pathognomonic for clostridial infection","icd":"A48.0","onset":"2024","status":"Active","notes":"Gas in soft tissue on X-ray or CT = clostridial infection (Clostridium perfringens produces hydrogen gas from carbohydrate fermentation). Unlike crepitus from simple infection."},
    {"problem":"Septic shock — exotoxin-mediated","icd":"A41.4","onset":"2024","status":"Active","notes":"Clostridium perfringens produces alpha toxin (phospholipase C) → cell membrane destruction → massive hemolysis + myonecrosis → septic shock with multiorgan failure."}
  ],
  "medications": [
    {"name":"Emergent surgical debridement — to OR NOW","sig":"Gas gangrene is universally fatal without immediate surgical debridement. Delay of even 1-2 hours dramatically increases mortality. Emergency amputation may be required to save life.","prescriber":"Surgery","start":"2024","refills":0,"status":"EMERGENT — OR NOW"},
    {"name":"Penicillin G 4 million units IV q4h + clindamycin 900mg IV q8h","sig":"Penicillin G is the drug of choice for Clostridium perfringens. Add clindamycin — inhibits ribosomal protein synthesis → reduces toxin production (Eagle effect: penicillin less effective at high bacterial density; clindamycin retains efficacy). Continue post-surgery.","prescriber":"Surgery/Infectious Disease","start":"2024","refills":0,"status":"IMMEDIATE — pre-op"},
    {"name":"Hyperbaric oxygen — adjunct after surgery","sig":"HBO2 at 2-3 atm creates tissue oxygen tension hostile to anaerobes. Reduces demarcation line for amputation. Adjunct only — never delays surgery. Use after primary debridement.","prescriber":"Surgery/Hyperbaric Medicine","start":"2024","refills":0,"status":"Adjunct — post-op"}
  ],
  "labs": [{"date":"04/2024","panel":"Gas Gangrene Assessment","results":[
    {"test":"WBC","value":"28.4","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Hemoglobin","value":"7.2","unit":"g/dL","ref":"13.5-17.5 (hemolysis from alpha toxin)","flag":"L"},
    {"test":"LDH","value":"4800","unit":"U/L","ref":"100-220 (massive hemolysis)","flag":"H"},
    {"test":"Lactate","value":"6.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"X-ray right leg","value":"Gas in soft tissue tracking along fascial planes — pathognomonic for clostridial infection","unit":"","ref":"No gas","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"X-Ray and CT Right Lower Extremity","findings":"Extensive gas tracking along deep fascial planes of right lower leg and foot. Soft tissue destruction. No foreign body visualized.","impression":"Gas gangrene (clostridial myonecrosis). Surgical emergency. OR immediately."}],
  "ddxTargets": ["Gas gangrene — clostridial myonecrosis (correct)","Necrotizing fasciitis (non-clostridial) — gas less prominent; polymicrobial; LRINEC score; similar urgency","Simple cellulitis — no gas; less toxicity; no crepitus; responds to antibiotics alone","Compartment syndrome — tense compartment; gas absent; fasciotomy (not amputation)","Gas-forming E. coli infection — gram-negative; less rapidly progressive; different bacteria"],
  "coachFinal": "Diagnosis: gas gangrene (clostridial myonecrosis). Key learning: (1) Gas gangrene vs necrotizing fasciitis: both are surgical emergencies. Gas gangrene = Clostridium perfringens, gas prominent on X-ray/CT, extremely rapid (hours to death), hemolysis from alpha toxin. Necrotizing fasciitis = polymicrobial (Group A strep, mixed), gas less prominent, also rapidly progressive. Both require immediate debridement. (2) Eagle effect: at high bacterial densities, penicillin is paradoxically less effective (bacteria not actively dividing → less beta-lactam killing). Clindamycin, by inhibiting ribosomal protein synthesis (and thus toxin production), retains efficacy at all densities. Combination penicillin + clindamycin is superior. (3) Pain out of proportion to appearance: like compartment syndrome and necrotizing fasciitis, gas gangrene causes severe pain early when the skin may look relatively normal. The pain is from tissue ischemia/necrosis beneath. Do not dismiss it. (4) Hyperbaric oxygen: adjunct after surgery. 2-3 atm oxygen creates tissue PO2 >250 mmHg — lethal to obligate anaerobes. Reduces demarcation line for amputation, may save additional tissue. NEVER delays emergency debridement. (5) Mortality: gas gangrene mortality 25-50% even with treatment. Extremity involvement = better than trunk. Time to surgery is the primary prognostic factor."
},
"gastric-malignancy": {
  "diagnosis": "Gastric Adenocarcinoma — Presenting as Syncope from Chronic GI Blood Loss",
  "problems": [
    {"problem":"Gastric adenocarcinoma — iron deficiency anemia presentation","icd":"C16.9","onset":"2024","status":"Active","notes":"Gerald Kim, 68M — Korean-born, syncope at home. Found to have Hgb 6.4, MCV 68, ferritin 4. No obvious bleeding but chronic iron deficiency. EGD: large ulcerated mass lesser curvature stomach. Biopsy: adenocarcinoma."},
    {"problem":"Iron deficiency anemia — new diagnosis in >50 years = GI malignancy until proven otherwise","icd":"D50.9","onset":"2024","status":"Active","notes":"New iron deficiency anemia in a patient >50 years without obvious cause = GI malignancy until proven otherwise. EGD + colonoscopy mandatory."},
    {"problem":"H. pylori — strongest modifiable risk factor for gastric cancer","icd":"C16.9","onset":"2024","status":"Active","notes":"H. pylori infection is the primary risk factor for non-cardia gastric adenocarcinoma. Increases risk 6x. Korean-born: endemic area with high H. pylori prevalence."}
  ],
  "medications": [
    {"name":"IV iron sucrose — pre-operative optimization","sig":"Correct iron deficiency before surgery. IV iron more rapid correction than oral. Hgb target >10g/dL for elective surgery.","prescriber":"Hematology/Oncology","start":"2024","refills":0,"status":"Active"},
    {"name":"Staging workup — CT chest/abdomen/pelvis + PET scan","sig":"Complete staging before treatment decision. M1 disease (peritoneal, liver, distant) = palliative intent. M0 = resection candidacy.","prescriber":"Medical Oncology","start":"2024","refills":0,"status":"Ordered"},
    {"name":"Multidisciplinary team referral — gastrectomy planning","sig":"Curative intent for localized gastric cancer: subtotal or total gastrectomy + D2 lymph node dissection. Perioperative chemotherapy (FLOT regimen) improves survival (FLOT4 trial).","prescriber":"Surgical Oncology","start":"2024","refills":0,"status":"MDT referral"}
  ],
  "labs": [{"date":"04/2024","panel":"Gastric Cancer Presentation","results":[
    {"test":"Hemoglobin","value":"6.4","unit":"g/dL","ref":"13.5-17.5","flag":"L"},
    {"test":"MCV","value":"68","unit":"fL","ref":"80-100 (microcytic — iron deficiency)","flag":"L"},
    {"test":"Ferritin","value":"4","unit":"ng/mL","ref":"30-400 (depleted)","flag":"L"},
    {"test":"H. pylori serology","value":"Positive — IgG 1:256","unit":"","ref":"Negative","flag":"H"},
    {"test":"CEA","value":"8.4","unit":"ng/mL","ref":"<3 (modestly elevated)","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Chest/Abdomen/Pelvis with Contrast","findings":"Large ulcerated gastric mass lesser curvature, 5cm. Multiple regional lymph nodes. No liver metastases. No peritoneal disease. No distant metastases. T3N1M0 by CT (requires staging laparoscopy).","impression":"Gastric adenocarcinoma with regional lymph node involvement. No distant metastases. Curative resection potentially feasible."}],
  "ddxTargets": ["Gastric adenocarcinoma (correct)","Gastric lymphoma (MALT/DLBCL) — H. pylori related; MALT lymphoma may respond to H. pylori eradication; biopsy distinguishes","Gastric ulcer (benign) — biopsy multiple margins; cannot distinguish macroscopically; never assume benign","Gastrointestinal stromal tumor (GIST) — submucosal; spindle cells on biopsy; CD117/DOG-1 positive; imatinib treatment","Iron deficiency from colonic source — colonoscopy equally important; right colon cancer most common GI malignancy causing IDA in elderly"],
  "coachFinal": "Diagnosis: gastric adenocarcinoma presenting with iron deficiency anemia. Key learning: (1) New IDA in >50 = GI malignancy workup mandatory: EGD + colonoscopy. Do not simply treat the anemia without finding the source. Gastric cancer and right-sided colon cancer both present with occult GI blood loss and iron deficiency without obvious rectal bleeding. (2) H. pylori and gastric cancer: H. pylori causes chronic gastritis → intestinal metaplasia → dysplasia → adenocarcinoma (the Correa cascade). H. pylori eradication reduces but does not eliminate cancer risk. High-prevalence regions: East Asia, Eastern Europe, South America. (3) Gastric cancer staging: CT is used for staging but understages peritoneal disease. Staging laparoscopy should be performed before commitment to curative surgery — peritoneal dissemination (T3+ tumors) changes management to palliative. (4) Perioperative chemotherapy: FLOT4 trial showed FLOT regimen (docetaxel, oxaliplatin, leucovorin, 5-FU) perioperatively improves OS vs ECF chemotherapy. Chemotherapy before surgery (neoadjuvant) downstages the tumor and treats micrometastatic disease early. (5) Lauren classification: intestinal type (H. pylori associated, better prognosis, more common in East Asia) vs diffuse type (signet ring cells, linitis plastica, worse prognosis, genetic association E-cadherin mutation)."
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
print(f"\nBatch 24: {done}/{len(ENRICHMENTS)} enriched")
