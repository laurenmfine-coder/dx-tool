#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"epididymoorchitis": {
  "diagnosis": "Epididymo-orchitis — Sexually Transmitted, Bilateral Involvement",
  "problems": [
    {"problem":"Epididymo-orchitis — right-sided, STI-related","icd":"N45.3","onset":"2024","status":"Active","notes":"David Torres, 26M — 4-day right scrotal pain with fever 38.6°C, urethral discharge, both epididymis and testis tender. Doppler: increased flow both epididymis and testis. NAAT: gonorrhea positive."},
    {"problem":"Testicular involvement — orchitis component","icd":"N45.3","onset":"2024","status":"Active","notes":"Orchitis (testicular inflammation) in addition to epididymitis. Risk of testicular atrophy and subfertility if severe. Follow-up for fertility concerns."},
    {"problem":"Gonorrhea — partner notification and reporting","icd":"A54.23","onset":"2024","status":"Active","notes":"Gonorrhea is a notifiable disease. All sexual partners within 60 days require evaluation and treatment. HIV, syphilis, chlamydia co-testing mandatory."}
  ],
  "medications": [
    {"name":"Ceftriaxone 500mg IM x1 + doxycycline 100mg BID x 10 days","sig":"CDC dual therapy — gonorrhea (ceftriaxone) + chlamydia (doxycycline). Co-infection common. Doxycycline 10 days for epididymo-orchitis (longer than simple urethritis).","prescriber":"Emergency/Urology/ID","start":"2024","refills":0,"status":"Active"},
    {"name":"Scrotal support + NSAIDs + bed rest","sig":"Athletic supporter, ibuprofen 600mg TID, limit activity. Scrotal elevation reduces pain and swelling.","prescriber":"Urology","start":"2024","refills":1,"status":"Active"},
    {"name":"HIV + syphilis co-testing + partner referral","sig":"All STI workup mandatory. Partner referral. Repeat STI testing in 3 months.","prescriber":"ID/Public Health","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"Epididymo-orchitis","results":[
    {"test":"NAAT GC/Chlamydia — urine","value":"GC positive, Chlamydia negative","unit":"","ref":"Negative","flag":"H"},
    {"test":"HIV rapid test","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"RPR (syphilis)","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Scrotal Doppler","value":"Increased flow epididymis AND testis right — epididymo-orchitis","unit":"","ref":"Symmetric","flag":"H"},
    {"test":"WBC","value":"14.2","unit":"K/μL","ref":"4.5-11","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Scrotal Doppler Ultrasound","findings":"Enlarged right epididymis and testis with increased color Doppler flow. Reactive hydrocele. No abscess. Left testis normal.","impression":"Right epididymo-orchitis. No abscess. No torsion."}],
  "ddxTargets": ["Epididymo-orchitis — gonorrheal (correct)","Testicular torsion — absent Doppler flow; negative Prehn sign; surgical emergency","Mumps orchitis — bilateral; parotitis; unvaccinated; viral","Testicular tumor — painless mass; no fever; ultrasound shows solid nodule","Epididymitis alone — epididymis only; testis normal on Doppler"],
  "coachFinal": "Diagnosis: epididymo-orchitis, gonorrheal. Key learning: (1) Epididymitis vs epididymo-orchitis: epididymitis = epididymis only inflamed. Epididymo-orchitis = both epididymis and testis. Epididymo-orchitis has worse prognosis with higher risk of testicular atrophy and subfertility. (2) STI cause by age: <35 = chlamydia/gonorrhea. >35 = enteric organisms (E. coli, Klebsiella) from BPH/prostatism. Important because treatment differs. (3) Torsion exclusion: always Doppler ultrasound when scrotal pain + swelling. Increased flow = epididymo-orchitis. Absent flow = torsion (OR immediately). Clinical findings (Prehn sign, cremasteric reflex) are helpful but not reliable enough to exclude torsion without imaging. (4) Gonorrhea treatment: increasing resistance — ceftriaxone dose has been increased from 250mg to 500mg. IV ceftriaxone 1g for disseminated gonococcal infection. Partner treatment mandatory. (5) Complications of untreated epididymo-orchitis: epididymal obstruction → obstructive azoospermia, testicular atrophy, chronic scrotal pain, abscess formation requiring orchiectomy."
},
"exertional-heat-stroke": {
  "diagnosis": "Exertional Heat Stroke — with Sickle Cell Trait and Stimulant Use",
  "problems": [
    {"problem":"Exertional heat stroke — core temp 41.8°C, multiorgan failure","icd":"T67.01XA","onset":"2024","status":"Active","notes":"Marcus Johnson, 22M — football practice in August heat. Collapsed on field, confused, not sweating. Core rectal temp 41.8°C. GCS 10. Rhabdomyolysis, AKI, coagulopathy developing. Heat stroke = hyperthermia >40°C + CNS dysfunction."},
    {"problem":"Rhabdomyolysis — CK >100,000, AKI","icd":"M62.9","onset":"2024","status":"Active","notes":"Myoglobin from muscle necrosis → renal tubular precipitation → AKI. Aggressive IV fluid resuscitation mandatory. Target urine output 200-300mL/hr and urine myoglobin clearance."},
    {"problem":"Sickle cell trait — exertional sickling risk","icd":"D57.3","onset":"2024","status":"Active","notes":"Sickle cell trait (not disease) increases risk of exertional heat injury and exertional sickling — muscle ischemia from sickle cells in microvasculature. High body heat + exertion = sickling risk."}
  ],
  "medications": [
    {"name":"RAPID COOLING — ice water immersion target 39°C within 30 minutes","sig":"Cooling rate is the most important determinant of outcome. Target core temp <39°C within 30 minutes. Ice water immersion (1-15°C) most effective. Ice packs to neck, axilla, groin. Cold IV fluids. Fan + misting is inferior.","prescriber":"Emergency","start":"2024","refills":0,"status":"IMMEDIATE — ice water immersion"},
    {"name":"Aggressive IV fluid — NS 1-2L then titrate to urine output","sig":"Target urine output 200-300mL/hr to flush myoglobin from renal tubules. Aggressive hydration is the cornerstone of rhabdomyolysis management.","prescriber":"Emergency/Critical Care","start":"2024","refills":0,"status":"Active — 2L/hr initial"},
    {"name":"Avoid antipyretics — not effective in heat stroke","sig":"NSAIDs and acetaminophen work by inhibiting prostaglandins/cyclooxygenase — the hypothalamic set-point mechanism. Heat stroke is NOT a fever — it is failure of heat dissipation. Antipyretics have no role.","prescriber":"Emergency","start":"2024","refills":0,"status":"Do NOT give"}
  ],
  "labs": [{"date":"04/2024","panel":"Exertional Heat Stroke","results":[
    {"test":"Core rectal temperature","value":"41.8","unit":"°C","ref":"<37.5","flag":"H"},
    {"test":"CK","value":"112,000","unit":"U/L","ref":"<200","flag":"H"},
    {"test":"Creatinine","value":"3.2","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"INR","value":"2.1","unit":"","ref":"<1.2 (coagulopathy — DIC)","flag":"H"},
    {"test":"Urine myoglobin","value":"Dark brown — positive","unit":"","ref":"Negative","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Exertional heat stroke (correct)","Heat exhaustion — no CNS dysfunction; temperature <40°C; responds to rest and oral hydration","Neuroleptic malignant syndrome — antipsychotic exposure; rigidity; slow onset; different mechanism","Serotonin syndrome — serotonergic drug; hyperreflexia, clonus; rapid onset","Malignant hyperthermia — volatile anesthetic or succinylcholine trigger; OR setting; dantrolene treatment"],
  "coachFinal": "Diagnosis: exertional heat stroke. Key learning: (1) Heat stroke vs heat exhaustion: heat EXHAUSTION = elevated temp <40°C, intact CNS, responds to rest/cooling/fluids. Heat STROKE = core temp >40°C + CNS DYSFUNCTION (confusion, seizure, coma). Heat stroke is life-threatening. (2) Cooling is the intervention — antipyretics don't work: heat stroke is a failure of thermoregulation, not a reset of the hypothalamic set-point. NSAIDs/acetaminophen work on set-point — useless here. Only physical cooling works. Target <39°C within 30 minutes. (3) Ice water immersion is most effective: most rapid cooling rate. Other methods (evaporative, fans, ice packs) are inferior. Remove from immersion at 39°C to avoid overshoot hypothermia. (4) Rhabdomyolysis management: aggressive IVF (1-2L NS initial bolus, then titrate to UO 200-300mL/hr). Dark brown urine = myoglobinuria. Sodium bicarbonate to alkalinize urine (reduces myoglobin precipitation) is controversial but used in some centers. Monitor CK, creatinine, electrolytes, coagulation. (5) Sickle cell trait + exertional heat: exertional sickling can cause muscle ischemia independent of classic heat stroke. The combination of heat stress + exertion in sickle cell trait individuals dramatically increases heat stroke risk. NCAA has mandated sickle cell trait testing for college athletes."
},
"fracture-pain": {
  "diagnosis": "Distal Radius Fracture (Colles') — Osteoporotic, Elderly",
  "problems": [
    {"problem":"Colles' fracture — distal radius, osteoporotic","icd":"S52.501A","onset":"2024","status":"Active","notes":"Dorothy Williams, 74F — FOOSH (fall on outstretched hand). Dinner-fork deformity right wrist, severe pain. X-ray: distal radius fracture with dorsal angulation and displacement — classic Colles' fracture. Osteoporotic bone."},
    {"problem":"Osteoporosis — fragility fracture trigger for workup","icd":"M80.01XA","onset":"2024","status":"Active","notes":"Fall from standing height causing wrist fracture = fragility fracture = osteoporosis by definition (regardless of DEXA result). Must start bisphosphonate and treat underlying osteoporosis to prevent hip fracture."},
    {"problem":"Median nerve — carpal tunnel compartment watch","icd":"S52.501A","onset":"2024","status":"Active","notes":"Distal radius fracture can compress median nerve in carpal tunnel → acute carpal tunnel syndrome. Assess sensation of thumb/index/middle fingers and thenar muscle strength before and after reduction."}
  ],
  "medications": [
    {"name":"Closed reduction + sugar-tong splint","sig":"Hematoma block with lidocaine or procedural sedation. Longitudinal traction, ulnar deviation, and palmar flexion to reduce. Sugar-tong splint (not circumferential cast) allows swelling. Follow-up 1 week for cast or surgical referral.","prescriber":"Emergency/Orthopedics","start":"2024","refills":0,"status":"Procedure done"},
    {"name":"Alendronate 70mg weekly OR denosumab — osteoporosis treatment","sig":"Fragility fracture = osteoporosis treatment indication regardless of DEXA. Bisphosphonate reduces subsequent fracture risk 50% at hip and spine. Start after fracture heals (or immediately if denosumab).","prescriber":"PCP/Endocrinology","start":"2024","refills":3,"status":"Initiating"},
    {"name":"Vitamin D 2000 IU daily + calcium 1200mg daily","sig":"Optimizes bone health and fracture healing. Vitamin D deficiency is almost universal in osteoporotic fractures.","prescriber":"PCP","start":"2024","refills":3,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"Fragility Fracture Workup","results":[
    {"test":"Vitamin D (25-OH)","value":"16","unit":"ng/mL","ref":"30-100","flag":"L"},
    {"test":"Calcium","value":"9.2","unit":"mg/dL","ref":"8.5-10.5","flag":""},
    {"test":"PTH","value":"68","unit":"pg/mL","ref":"15-65 (secondary hyperparathyroidism from Vit D deficiency)","flag":"H"},
    {"test":"DEXA (ordered)","value":"Pending — T-score to quantify osteoporosis","unit":"","ref":"T-score <-2.5 = osteoporosis","flag":""},
    {"test":"Median nerve — sensation","value":"Intact — index/middle/thumb normal sensation","unit":"","ref":"Intact","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"Right Wrist X-Ray AP and Lateral","findings":"Distal radius fracture with dorsal angulation 25° and 3mm shortening. Radial styloid fracture. No ulnar fracture. Volar cortex intact. Classic Colles' fracture pattern.","impression":"Displaced Colles' fracture. Closed reduction indicated."}],
  "ddxTargets": ["Colles' fracture — osteoporotic (correct)","Smith fracture — volar (palmar) angulation (opposite of Colles'); fall on back of hand","Barton fracture — intra-articular; marginal fracture of distal radius; instability","Scaphoid fracture — snuffbox tenderness; FOOSH; may not show on initial X-ray; risk of AVN if missed","Distal ulnar fracture — associated Galeazzi injury (distal ulna fracture + DRUJ disruption); check ulna"],
  "coachFinal": "Diagnosis: Colles' fracture (distal radius) on osteoporotic bone. Key learning: (1) Colles' fracture: distal radius fracture with DORSAL angulation and displacement (dinner-fork deformity). Smith fracture = VOLAR angulation (garden-spade deformity). Mechanism for both = FOOSH (fall on outstretched hand). (2) Fracture in elderly woman from low-energy fall = fragility fracture = osteoporosis treatment regardless of prior DEXA results. Every fragility fracture represents a failure to identify and treat osteoporosis early. (3) Median nerve assessment: carpal tunnel lies just volar to distal radius. Acute displacement can acutely compress the median nerve → thenar weakness, numbness of thumb/index/middle fingers. Check before AND after reduction. Post-reduction persistent deficit → urgent carpal tunnel release. (4) Splint not cast for acute fractures: sugar-tong splint accommodates swelling. Circumferential casting too early risks compartment syndrome. Convert to cast at 1 week. (5) Surgical indications for Colles': >20° dorsal angulation after reduction, >3mm shortening, intra-articular involvement, open fracture, young active patient. External fixator or ORIF with volar locking plate."
},
"gastroenteritis": {
  "diagnosis": "Acute Viral Gastroenteritis — Moderate Dehydration, Norovirus",
  "problems": [
    {"problem":"Acute viral gastroenteritis — norovirus pattern","icd":"A08.11","onset":"2024","status":"Active","notes":"Kevin Park, 32M — 24-hour illness, profuse watery diarrhea 8x/day, vomiting, crampy abdominal pain. No blood. Cluster of cases at work event 48h ago — classic norovirus incubation. Moderate dehydration."},
    {"problem":"Moderate dehydration — IV hydration indicated","icd":"E86.0","onset":"2024","status":"Active","notes":"Dry mucous membranes, tachycardia 108, orthostasis. Moderate dehydration. Unable to tolerate oral fluids due to vomiting. IV hydration required."},
    {"problem":"Inflammatory diarrhea exclusion — no antibiotics without indication","icd":"A08.11","onset":"2024","status":"Active","notes":"Watery (not bloody), no fever, brief illness — viral pattern. Inflammatory diarrhea (fever + bloody stool + recent antibiotics or foreign travel) = culture + consider antibiotics."}
  ],
  "medications": [
    {"name":"IV normal saline 1-2L — rehydration","sig":"For vomiting patient unable to tolerate PO. 1L NS bolus then reassess. Transition to oral hydration once vomiting controlled.","prescriber":"Emergency","start":"2024","refills":0,"status":"Active"},
    {"name":"Ondansetron 4mg IV/ODT — antiemetic","sig":"Reduces vomiting and facilitates oral rehydration. ODT (orally disintegrating tablet) preferred once patient can tolerate sublingual.","prescriber":"Emergency","start":"2024","refills":0,"status":"Active"},
    {"name":"No antibiotics — viral gastroenteritis","sig":"Antibiotics not indicated for viral gastroenteritis. Inappropriate antibiotic use = C. diff risk, antibiotic resistance, no benefit. Culture if bloody stool, fever, severe illness, or immunocompromised.","prescriber":"Emergency","start":"2024","refills":0,"status":"Not indicated"}
  ],
  "labs": [{"date":"04/2024","panel":"Gastroenteritis Assessment","results":[
    {"test":"BMP — sodium","value":"142","unit":"mEq/L","ref":"136-145 (check for hypo/hypernatremia in dehydration)","flag":""},
    {"test":"BMP — creatinine","value":"1.4","unit":"mg/dL","ref":"0.7-1.3 (mild prerenal elevation)","flag":"H"},
    {"test":"WBC","value":"10.2","unit":"K/μL","ref":"4.5-11 (normal — viral)","flag":""},
    {"test":"Stool culture","value":"Pending — sent because work cluster (public health)","unit":"","ref":"No growth","flag":""},
    {"test":"Stool C. difficile","value":"Negative — no recent antibiotics","unit":"","ref":"Negative","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Viral gastroenteritis — norovirus (correct)","Bacterial gastroenteritis — fever + bloody stool; recent travel, raw food; culture-guided antibiotics","C. difficile colitis — recent antibiotics; watery diarrhea; positive toxin; metronidazole/vancomycin","Appendicitis — RLQ pain; fever; peritoneal signs; CT abdomen","Food poisoning — S. aureus (rapid onset 1-6h); B. cereus; C. perfringens; shorter course than norovirus","Inflammatory bowel disease — chronic/recurrent; blood/mucus; colonoscopy"],
  "coachFinal": "Diagnosis: acute viral gastroenteritis, norovirus. Key learning: (1) Norovirus characteristics: incubation 12-48 hours (food poisoning vs 1-6h), outbreak pattern (cruise ships, restaurants, healthcare facilities), profuse watery (non-bloody) vomiting and diarrhea, self-limited 24-72 hours, highly contagious. (2) Antibiotic decision in diarrhea: antibiotics indicated for: febrile dysentery (fever + bloody stool), Salmonella typhi, Shigella, traveler's diarrhea (moderate-severe), C. diff, immunocompromised host. NOT indicated for: watery non-bloody viral gastroenteritis. (3) Oral rehydration therapy (ORT): WHO ORS solution (75mEq Na+, 20mEq K+, 75mmol glucose, 10g rice in 1L water) exploits glucose-sodium cotransporter that remains active even during diarrhea. Effective in >90% of mild-moderate dehydration. IV fluids only when unable to tolerate PO. (4) Infectious diarrhea risk factors for bacterial cause: fever, bloody stool, >3 days duration, immunocompromised, recent antibiotics (C. diff), seafood (Vibrio), eggs/poultry (Salmonella), foreign travel. (5) Infection control for norovirus: highly contagious (10-100 virions infectious), survives on surfaces 2 weeks, alcohol gels ineffective (use soap and water for 20 seconds). Cohorting and contact precautions for hospitalized patients."
},
"giant-cell-arteritis-with-ophthalmic": {
  "diagnosis": "Giant Cell Arteritis with Anterior Ischemic Optic Neuropathy (Vision Loss)",
  "problems": [
    {"problem":"Giant cell arteritis — vision loss from AION","icd":"M31.6","onset":"2024","status":"Active","notes":"Barbara Anderson, 74F — 2-week headache, jaw claudication, scalp tenderness, now sudden painless visual loss left eye (counting fingers). Fundus: pale optic disc edema — anterior ischemic optic neuropathy (AION). ESR 118, CRP 84."},
    {"problem":"AION — irreversible vision loss in affected eye","icd":"H47.01","onset":"2024","status":"Active","notes":"Left eye vision loss from optic nerve ischemia is IRREVERSIBLE. Treatment with corticosteroids prevents vision loss in the fellow right eye — which is the primary goal of treatment."},
    {"problem":"Temporal artery biopsy — confirms diagnosis but do not delay steroids","icd":"M31.6","onset":"2024","status":"Active","notes":"TAB remains positive for 2-4 weeks after starting steroids. Do not delay treatment for biopsy. Biopsy within 1-2 weeks of starting steroids."}
  ],
  "medications": [
    {"name":"Methylprednisolone 1g IV daily x 3 days — HIGH DOSE for vision loss","sig":"IV pulse methylprednisolone for GCA with vision loss. Higher dose than oral prednisone for standard GCA. Goal: prevent contralateral eye involvement. Then transition to oral prednisone 60mg daily taper.","prescriber":"Rheumatology/Ophthalmology","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Aspirin 81mg daily — prevent visual and vascular events","sig":"Low-dose aspirin reduces risk of visual loss and ischemic events (TIA/stroke) in GCA. Add to corticosteroid therapy.","prescriber":"Rheumatology","start":"2024","refills":3,"status":"Active"},
    {"name":"Temporal artery biopsy — within 1-2 weeks","sig":"TAB provides tissue confirmation. Skip lesions — biopsy ≥2cm segment. Remains positive 2-4 weeks after steroids started. Schedule within 2 weeks.","prescriber":"Surgery/Rheumatology","start":"2024","refills":0,"status":"Scheduled within 2 weeks"}
  ],
  "labs": [{"date":"04/2024","panel":"GCA Assessment","results":[
    {"test":"ESR","value":"118","unit":"mm/hr","ref":"<20 (Westergren)","flag":"H"},
    {"test":"CRP","value":"84","unit":"mg/L","ref":"<10","flag":"H"},
    {"test":"Platelets","value":"480","unit":"K/μL","ref":"150-400 (reactive thrombocytosis)","flag":"H"},
    {"test":"Visual acuity — left eye","value":"Counting fingers at 3 feet","unit":"","ref":"20/20","flag":"H"},
    {"test":"Fundus exam — left","value":"Pale swollen optic disc — AION","unit":"","ref":"Normal","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Temporal Artery Ultrasound (Duplex)","findings":"Hypoechoic halo around left temporal artery — 'halo sign' characteristic of GCA vasculitis. Reduced flow on Doppler.","impression":"Temporal artery ultrasound findings supportive of GCA. Temporal artery biopsy scheduled to confirm."}],
  "ddxTargets": ["GCA with AION — vision loss (correct)","Non-arteritic AION — same fundus appearance; younger; risk factors (diabetes, HTN, small disc); no inflammatory markers","Acute angle closure glaucoma — painful red eye; elevated IOP; different exam","Central retinal artery occlusion — cherry red spot; different fundus; embolic source","Polymyalgia rheumatica alone — shoulder/hip girdle pain; no cranial symptoms; 50% have GCA concurrently"],
  "coachFinal": "Diagnosis: GCA with AION. Key learning: (1) GCA is a medical emergency when vision is threatened: start high-dose IV methylprednisolone IMMEDIATELY — do not wait for biopsy. The goal is to protect the contralateral eye. Once AION has occurred, the affected eye vision loss is irreversible. Treatment prevents the other eye from losing vision. (2) ACR criteria for GCA: age ≥50, new headache, temporal artery tenderness/decreased pulse, ESR ≥50, biopsy showing necrotizing arteritis. Sensitivity 93.5% with ≥3 criteria. (3) Temporal artery biopsy timing: start steroids immediately, schedule TAB within 1-2 weeks. Biopsy remains positive for 2-4 weeks after starting steroids (granulomatous inflammation persists longer than clinical activity). Skip lesions occur — biopsy ≥2cm segment. Negative biopsy does not exclude GCA if clinical suspicion high. (4) GCA + polymyalgia rheumatica: PMR (shoulder/hip girdle pain and stiffness) coexists in 40-50% of GCA patients. PMR alone = oral prednisone 15-20mg. GCA = prednisone 40-60mg (or IV pulse for vision threatened). (5) IL-6 receptor inhibitor (tocilizumab): FDA-approved for GCA. Reduces relapse rate and cumulative steroid dose. Consider for GCA patients with frequent relapses or steroid toxicity."
},
"gonococcal-arthritis": {
  "diagnosis": "Disseminated Gonococcal Infection (DGI) with Septic Arthritis",
  "problems": [
    {"problem":"Disseminated gonococcal infection — septic arthritis right knee","icd":"A54.42","onset":"2024","status":"Active","notes":"Ashley Chen, 23F — 3-day migratory polyarthralgia, fever, tenosynovitis right wrist, now hot swollen right knee. Dermatitis: sparse papulopustular lesions on extremities. Sexually active, new partner. DGI = most common cause of septic arthritis in sexually active adults <40."},
    {"problem":"Tenosynovitis — DGI triad component","icd":"A54.49","onset":"2024","status":"Active","notes":"Tenosynovitis (inflammation of tendon sheaths) is part of the DGI triad: (1) migratory polyarthralgia, (2) tenosynovitis, (3) dermatitis. Gonococcal septic arthritis is the purulent phase."},
    {"problem":"Cervical/urethral source — asymptomatic in 75% of women","icd":"A54.9","onset":"2024","status":"Active","notes":"75% of women with disseminated gonococcal infection have NO genital symptoms. Cervical NAAT is usually positive even without symptoms — always test the source."}
  ],
  "medications": [
    {"name":"Ceftriaxone 1g IV q24h — until improvement, then step-down","sig":"IV ceftriaxone for DGI. Step down to oral cefixime 400mg BID after 24-48h clinical improvement. Total duration 7 days. Test for cure in 1 week.","prescriber":"Infectious Disease/Rheumatology","start":"2024","refills":0,"status":"Active — IV"},
    {"name":"Doxycycline 100mg BID x 7 days — chlamydia co-treatment","sig":"Co-treat for chlamydia even if negative NAAT — co-infection common. Doxycycline added to gonorrhea treatment.","prescriber":"Infectious Disease","start":"2024","refills":0,"status":"Active — concurrent"},
    {"name":"Joint aspiration — diagnostic and therapeutic","sig":"Right knee arthrocentesis: confirm Gram stain/culture, cell count, crystals. Joint drainage reduces bacterial burden and inflammatory mediators.","prescriber":"Rheumatology","start":"2024","refills":0,"status":"Done — WBC 62,000"}
  ],
  "labs": [{"date":"04/2024","panel":"DGI Assessment","results":[
    {"test":"Synovial fluid WBC — right knee","value":"62,000","unit":"cells/μL (PMN dominant)","ref":"<2000 normal; >50,000 = septic","flag":"H"},
    {"test":"Cervical NAAT — GC/Chlamydia","value":"GC positive, Chlamydia negative","unit":"","ref":"Negative","flag":"H"},
    {"test":"Blood cultures","value":"Negative (blood cultures positive in <50% DGI)","unit":"","ref":"No growth","flag":""},
    {"test":"Synovial fluid Gram stain","value":"Gram-negative diplococci (low sensitivity in DGI)","unit":"","ref":"No organisms","flag":"H"},
    {"test":"Uric acid","value":"4.8","unit":"mg/dL","ref":"3.5-7.2 (gout excluded)","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"Right Knee X-Ray","findings":"Joint effusion. No fracture. No chondrocalcinosis. Normal joint space.","impression":"Joint effusion consistent with inflammatory arthritis. No bony destruction."}],
  "ddxTargets": ["Disseminated gonococcal infection — septic arthritis (correct)","Non-gonococcal septic arthritis — S. aureus most common; older patient; no genital symptoms; no dermatitis-tenosynovitis","Reactive arthritis (Reiter) — post-infectious; STI or GI trigger; uveitis, urethritis, arthritis triad; no bacteremia","Pseudogout — CPP crystals on synovial fluid; chondrocalcinosis on X-ray; no fever","Rheumatoid arthritis flare — chronic history; symmetric; RF/anti-CCP positive; no dermatitis pattern"],
  "coachFinal": "Diagnosis: disseminated gonococcal infection with septic arthritis. Key learning: (1) DGI is the most common cause of septic arthritis in sexually active patients <40 years. The DGI triad: (1) migratory polyarthralgia → (2) tenosynovitis → (3) dermatitis + arthritis. Tenosynovitis (fingers, wrists, ankles) is highly characteristic of DGI — rare in other septic arthritis. (2) DGI stages: bacteremic phase (migratory arthralgia, dermatitis, tenosynovitis, low-grade fever) → localized phase (frank septic arthritis, monoarticular). These stages overlap. (3) Gonococcal septic arthritis vs other organisms: DGI typically has lower WBC in joint fluid (20,000-60,000 vs >100,000 for S. aureus), positive genital cultures (but blood/joint cultures often negative), better prognosis (responds rapidly to antibiotics, no joint destruction). (4) Dermatitis of DGI: sparse (<20) papulopustular lesions on extremities/trunk. Painless or mildly tender. Punch skin biopsy: GC occasionally cultured from lesions. (5) Treatment duration: IV ceftriaxone 24-48h until clinical improvement then oral step-down. Total 7 days. Repeat STI testing in 3 months. Partner treatment."
},
"gout-flare": {
  "diagnosis": "Acute Gouty Arthritis — Right First MTP (Podagra), Non-Adherent to Allopurinol",
  "problems": [
    {"problem":"Acute gout flare — first MTP (podagra)","icd":"M10.071","onset":"2024","status":"Active","notes":"Harold Kim, 58M — sudden onset severe right first MTP joint pain, redness, swelling overnight. Cannot bear weight. Serum uric acid 9.8. Known gout, non-adherent to allopurinol."},
    {"problem":"Non-adherence to urate-lowering therapy — target uric acid <6","icd":"M10.071","onset":"2024","status":"Active","notes":"On allopurinol 100mg daily but takes it only sometimes. Uric acid 9.8 (target <6.0 for most patients; <5.0 for tophaceous gout). Non-adherence driving recurrent flares and tophi formation."},
    {"problem":"Tophi — urate crystal deposits in soft tissue","icd":"M10.071","onset":"2024","status":"Active","notes":"Chalky white deposits over right olecranon. Tophi = chronic urate crystal deposition = indication for more aggressive ULT and target uric acid <5.0."}
  ],
  "medications": [
    {"name":"Colchicine 1.2mg then 0.6mg 1h later — acute attack","sig":"Most effective when started within 12-24h of symptom onset. Anti-inflammatory via microtubule inhibition → inhibits neutrophil migration. Dose-dependent GI toxicity (diarrhea). Reduce dose in CKD and strong CYP3A4 inhibitors.","prescriber":"Rheumatology/Medicine","start":"2024","refills":0,"status":"Active — acute treatment"},
    {"name":"Naproxen 500mg BID OR indomethacin 50mg TID — if colchicine fails","sig":"NSAIDs as alternative for acute gout if no renal impairment or GI contraindication. Indomethacin is traditional but all NSAIDs equally effective.","prescriber":"Rheumatology/Medicine","start":"2024","refills":0,"status":"Alternative PRN"},
    {"name":"Allopurinol — escalate to 300mg daily, do NOT start/stop during flare","sig":"Do NOT start or stop allopurinol during an acute flare — changes in uric acid level can prolong flare. Continue if already on it. Escalate dose after flare resolves. Target uric acid <6.0 (or <5.0 for tophaceous gout).","prescriber":"Rheumatology","start":"2024","refills":3,"status":"Continue at current dose — escalate after flare"}
  ],
  "labs": [{"date":"04/2024","panel":"Gout Assessment","results":[
    {"test":"Serum uric acid","value":"9.8","unit":"mg/dL","ref":"Target <6.0 (normal <7.0 in men)","flag":"H"},
    {"test":"Creatinine","value":"1.3","unit":"mg/dL","ref":"0.7-1.3 (borderline — adjust allopurinol)","flag":""},
    {"test":"Synovial fluid — MSU crystals","value":"Negatively birefringent needle-shaped crystals — monosodium urate confirmed","unit":"","ref":"No crystals","flag":"H"},
    {"test":"WBC","value":"12.4","unit":"K/μL","ref":"4.5-11 (mild inflammation)","flag":"H"},
    {"test":"ESR","value":"68","unit":"mm/hr","ref":"<20","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Right Foot X-Ray","findings":"Soft tissue swelling first MTP. Punched-out erosions with overhanging edges at first MTP — chronic gouty erosions. Tophi calcification right olecranon.","impression":"Gout with chronic erosive changes. Tophaceous gout."}],
  "ddxTargets": ["Acute gout — podagra (correct)","Pseudogout (CPPD) — calcium pyrophosphate crystals (positively birefringent); knee more common; chondrocalcinosis","Septic arthritis — WBC >50,000; Gram stain/culture; no crystals; treat as septic until excluded","Reactive arthritis — post-infection; asymmetric oligoarthritis; Reiter syndrome triad","Cellulitis — skin infection; no joint involvement; no crystals"],
  "coachFinal": "Diagnosis: acute gouty arthritis (podagra), tophaceous gout. Key learning: (1) Acute gout treatment: colchicine 1.2mg then 0.6mg 1h later (START WITHIN 24h — dramatically more effective early), NSAIDs, or short course steroids. All three are equally effective if started early. Low-dose colchicine (as above) has same efficacy as high-dose with fewer GI side effects. (2) Crystal identification on arthrocentesis: MSU (gout) = negatively birefringent, needle-shaped crystals (yellow when parallel to polarizer axis). CPP (pseudogout) = positively birefringent, rhomboid-shaped crystals (blue when parallel to polarizer). (3) Do NOT start/stop allopurinol during acute flare: mobilization of urate from deposits causes paradoxical flare. If patient already taking allopurinol → continue. If starting ULT → wait until flare completely resolved (usually 2-4 weeks). (4) Urate-lowering therapy targets: most patients = uric acid <6.0 mg/dL. Tophaceous gout (as here) = <5.0 mg/dL. Allopurinol dose: start 100mg, increase monthly by 100mg to target. Max 800mg. Adjust for CKD. (5) Foods to avoid: red meat, organ meats, shellfish, high-fructose corn syrup, alcohol (especially beer). Increase water, dairy, coffee, cherries (anti-inflammatory). Weight loss reduces uric acid."
},
"hcm": {
  "diagnosis": "Hypertrophic Obstructive Cardiomyopathy (HOCM) — Exertional Syncope",
  "problems": [
    {"problem":"HOCM — exertional syncope, dynamic LVOT obstruction","icd":"I42.1","onset":"2024","status":"Active","notes":"Ryan Park, 22M — syncope during basketball game. Father died suddenly at 35 (undiagnosed heart disease). Echo: severe asymmetric septal hypertrophy (septum 2.4cm), systolic anterior motion (SAM) of mitral valve, LVOT gradient 80mmHg at rest."},
    {"problem":"Family history of sudden cardiac death — genetic condition","icd":"I42.1","onset":"2024","status":"Active","notes":"Autosomal dominant inheritance. Family members require screening echo. Genetic testing for MYH7, MYBPC3 mutations. SCD risk assessment for implantable defibrillator decision."},
    {"problem":"Sudden cardiac death risk — ICD consideration","icd":"I42.1","onset":"2024","status":"Active","notes":"HOCM is the most common cause of SCD in young athletes. Major risk factors: prior cardiac arrest, sustained VT, family SCD, syncope, massive LVH (wall >30mm), abnormal exercise BP response, NSVT on Holter."}
  ],
  "medications": [
    {"name":"Metoprolol succinate 25-50mg daily — first-line","sig":"Beta-blockers reduce heart rate → increases diastolic filling → reduces LVOT gradient and SAM. Reduces symptoms and improves exercise tolerance. Avoid positive inotropes (digoxin) and vasodilators (nitrates, ACE inhibitors).","prescriber":"Cardiology","start":"2024","refills":3,"status":"Initiating"},
    {"name":"ICD — consider for high-risk HOCM","sig":"ICD indicated for: prior cardiac arrest or VT, family history SCD + own syncope. Calculate HCM Risk-SCD score at 5 years (>6% = ICD recommended). This patient: syncope + family SCD = high risk.","prescriber":"Electrophysiology/Cardiology","start":"2024","refills":0,"status":"Under evaluation"},
    {"name":"Avoid competitive sports — activity restriction","sig":"All patients with HOCM should avoid intense competitive sports. Increased heart rate + reduced preload from exertion → increased LVOT gradient → dynamic obstruction. Basketball is high-risk.","prescriber":"Cardiology","start":"2024","refills":0,"status":"Counseled — activity restricted"}
  ],
  "labs": [{"date":"04/2024","panel":"HOCM Assessment","results":[
    {"test":"Echo — septal thickness","value":"2.4","unit":"cm","ref":"<1.2 normal; ≥1.5 = HCM; ≥3.0 = massive hypertrophy","flag":"H"},
    {"test":"LVOT gradient — resting","value":"80","unit":"mmHg","ref":"<30 mmHg (obstructive ≥30)","flag":"H"},
    {"test":"SAM (systolic anterior motion)","value":"Present — mitral valve drawn into LVOT during systole","unit":"","ref":"Absent","flag":"H"},
    {"test":"Holter monitor — 48h","value":"NSVT episodes x3 (3-6 beats)","unit":"","ref":"No VT","flag":"H"},
    {"test":"Exercise stress test — BP response","value":"Abnormal — BP fails to rise >20mmHg with exercise","unit":"","ref":"Normal rise","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Cardiac MRI with Gadolinium","findings":"Severe asymmetric septal hypertrophy (2.4cm). Systolic anterior motion of mitral valve causing LVOT obstruction. Late gadolinium enhancement (LGE) in midwall of hypertrophied segments — fibrosis marker. No other structural abnormality.","impression":"Obstructive HCM with fibrosis (LGE). ICD consideration given high-risk features."}],
  "ddxTargets": ["HOCM — obstructive (correct)","Hypertensive hypertrophy — symmetric; HTN history; no LVOT gradient; no SAM","Athlete's heart — physiologic hypertrophy; symmetric; no LVOT gradient; regresses with detraining","Aortic stenosis — fixed (not dynamic) gradient; valve calcification on echo; different mechanism","Fabry disease — symmetric hypertrophy; alpha-galactosidase A deficiency; enzyme assay"],
  "coachFinal": "Diagnosis: hypertrophic obstructive cardiomyopathy (HOCM). Key learning: (1) HOCM is the most common cause of sudden cardiac death in young athletes. The dynamic LVOT obstruction worsens with: decreased preload (dehydration, nitrates, Valsalva), decreased afterload (vasodilators), increased contractility (digoxin, exercise). The opposite maneuvers (increased preload, increased afterload) reduce the gradient. (2) Dynamic vs fixed obstruction distinction: HOCM murmur increases with standing (preload ↓) and Valsalva, decreases with squatting (preload ↑). Aortic stenosis murmur does the opposite. This is the key bedside maneuver. (3) HCM Risk-SCD score: calculator using age, max wall thickness, LA diameter, LVOT gradient, family SCD, NSVT, unexplained syncope. Score ≥6% at 5 years = ICD recommended. (4) Medications to avoid in HOCM: nitrates (preload reduction → more obstruction → severe hypotension), ACE inhibitors/ARBs (afterload reduction), digoxin (positive inotrope), diuretics (volume reduction). Treat HF symptoms with beta-blockers and disopyramide. (5) Septal reduction therapy: severe symptomatic HOCM refractory to medical therapy → surgical myomectomy (gold standard) or alcohol septal ablation (catheter-based alternative for poor surgical candidates)."
},
"hemorrhagic-stroke": {
  "diagnosis": "Hypertensive Intracerebral Hemorrhage — Basal Ganglia",
  "problems": [
    {"problem":"Hypertensive ICH — right basal ganglia","icd":"I61.0","onset":"2024","status":"Active","notes":"Harold Thompson, 62M — sudden severe headache, left hemiplegia, vomiting, BP 218/124 on arrival. CT: 3.8cm right basal ganglia hemorrhage with IVH extension. Hypertension history, not on treatment for years."},
    {"problem":"Intraventricular hemorrhage — IVH extension","icd":"I61.5","onset":"2024","status":"Active","notes":"Blood in ventricles on CT = IVH extension. Increases mortality, risk of hydrocephalus, vasospasm. May require EVD (external ventricular drain) placement for hydrocephalus."},
    {"problem":"BP management — acute phase target SBP 140-180","icd":"I61.0","onset":"2024","status":"Active","notes":"AHA guidelines: SBP >220 = lower BP. Target SBP 140-180 in acute ICH (INTERACT2 trial). Avoid excessive BP reduction — cerebral autoregulation impaired around hematoma."}
  ],
  "medications": [
    {"name":"Nicardipine IV infusion — BP target SBP 140-160","sig":"Continuous IV nicardipine titrated to SBP 140-160 mmHg. Smooth BP control. Avoid labetolol if heart block concern. Target achieved within 1 hour.","prescriber":"Neurosurgery/Neurology","start":"2024","refills":0,"status":"Active — titrating"},
    {"name":"Reverse anticoagulation if present — urgent (N/A here)","sig":"Any anticoagulation must be reversed immediately in ICH. Warfarin: PCC 4F + vitamin K IV. DOACs: specific reversal agents. Aspirin/clopidogrel: platelet transfusion controversial but consider if neurosurgery planned.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"N/A — not anticoagulated"},
    {"name":"Neurosurgery consultation — evacuation criteria","sig":"Surgical evacuation: cerebellar ICH >3cm (lower threshold), lobar ICH with clinical deterioration, life-threatening IVH with hydrocephalus. Basal ganglia ICH: STICH trial showed no benefit of early surgery over medical management.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Consulted — conservative management"}
  ],
  "labs": [{"date":"04/2024","panel":"Hemorrhagic Stroke Assessment","results":[
    {"test":"BP on arrival","value":"218/124","unit":"mmHg","ref":"Target SBP 140-160 in ICH","flag":"H"},
    {"test":"INR","value":"1.1","unit":"","ref":"<1.2 — not anticoagulated","flag":""},
    {"test":"Platelet count","value":"214","unit":"K/μL","ref":"150-400","flag":""},
    {"test":"Glucose","value":"196","unit":"mg/dL","ref":"Target 140-180 in ICH","flag":"H"},
    {"test":"GCS","value":"10 (E3V2M5)","unit":"","ref":"15 normal","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Head Non-Contrast","findings":"3.8cm hyperdense hematoma right basal ganglia. Intraventricular blood (IVH) in right lateral ventricle. Mild midline shift 5mm. No herniation. No SAH pattern.","impression":"Right basal ganglia hemorrhage with IVH. Hypertensive etiology most likely. Neurosurgery consultation."}],
  "ddxTargets": ["Hypertensive ICH — basal ganglia (correct)","Ischemic stroke with hemorrhagic transformation — typically cortical; lower BP; embolic pattern","Subarachnoid hemorrhage — CT shows cistern blood; thunderclap headache; CTA for aneurysm","AVM rupture — younger patient; CT angiography shows malformation; lobar more common","Coagulopathic ICH — anticoagulation history; INR elevated; typically lobar; reverse coagulation"],
  "coachFinal": "Diagnosis: hypertensive intracerebral hemorrhage, basal ganglia. Key learning: (1) Location predicts etiology: hypertensive ICH = deep structures (basal ganglia 35%, thalamus 25%, pons 10%, cerebellum 10%). Lobar/cortical ICH = amyloid angiopathy (elderly, cortical, recurrent), AVM, coagulopathy. Basal ganglia in a hypertensive patient = hypertensive ICH until proven otherwise. (2) BP management in ICH: SBP >220 = lower aggressively. SBP 150-220 = target 140-160 (INTERACT2 trial). Avoid hypotension — impairs perfusion in the ischemic penumbra around the hematoma. Continuous IV nicardipine or labetalol for smooth BP control. (3) Reversal of anticoagulation is urgent: warfarin → PCC 4F (fastest, repletes all factors) + vitamin K IV. Dabigatran → idarucizumab. Factor Xa inhibitors → andexanet alfa. Heparin → protamine. Every minute of ongoing anticoagulation = hematoma expansion. (4) Hematoma expansion: 30-40% of ICH hematomas expand in the first 24 hours. CTA spot sign (extravasation of contrast = active bleeding) predicts expansion. Factor VIIa reduces expansion but no mortality benefit. (5) Surgical indications: cerebellar ICH >3cm = surgery (brainstem compression risk). Cerebellar ICH requires lower threshold than other locations. Basal ganglia: STICH trial showed no benefit of early surgery over medical management in most cases."
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
print(f"\nBatch 25: {done}/{len(ENRICHMENTS)} enriched")
