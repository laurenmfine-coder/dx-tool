#!/usr/bin/env python3
"""Batch 33 — Part B: 7 cases.

Cases: temporal-arteritis, testicular-traumarupture, thiazideinduced-hyponatremia,
       tick-borne-illness, todd-paralysis, tonsillar-malignancy, torsion-of-appendix-testis
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "temporal-arteritis": {
    "diagnosis": "Giant Cell (Temporal) Arteritis with Polymyalgia Rheumatica — Vision Threatened",
    "coachFinal": (
      "Diagnosis: giant cell arteritis (GCA, temporal arteritis) with concurrent polymyalgia rheumatica (PMR) and threatened vision loss — an ophthalmic and rheumatologic emergency. "
      "Key learning: "
      "(1) Giant cell arteritis is a granulomatous large-vessel vasculitis affecting medium and large arteries, particularly branches of the external carotid (superficial temporal artery, posterior ciliary artery supplying the optic nerve), aorta and its branches. "
      "Almost exclusively affects patients >=50 years old (mean onset 70s), more common in women, and has strong association with polymyalgia rheumatica (present in 40-60% of GCA cases). "
      "The most feared complication is irreversible vision loss from anterior ischemic optic neuropathy (AION) — can occur suddenly, bilaterally, and without warning. "
      "(2) Classic features — the 'headache-old patient' combination demands GCA workup: "
      "(a) New-onset headache in a patient >50 (often temporal, burning, tender scalp). "
      "(b) Jaw claudication — pain with chewing is nearly pathognomonic and one of the most specific symptoms. "
      "(c) Visual symptoms — transient monocular vision loss (amaurosis fugax), diplopia, blurred vision, or sudden visual loss. "
      "(d) Scalp tenderness over temporal artery. "
      "(e) Constitutional: fever, fatigue, weight loss, anorexia. "
      "(f) Tongue claudication (rare but specific). "
      "Polymyalgia rheumatica presents with bilateral shoulder and hip girdle pain and morning stiffness lasting >1 hour, in patients >50, often with elevated inflammatory markers. "
      "(3) Diagnosis. "
      "Markedly elevated ESR (often >50, can be >100) and CRP are characteristic. "
      "CBC may show normocytic anemia and mild thrombocytosis. "
      "Temporal artery biopsy — gold standard, shows granulomatous inflammation with giant cells, media destruction, intimal proliferation; segmental involvement means a negative biopsy does not rule out GCA (bilateral or longer biopsies increase yield). "
      "DO NOT DELAY STEROID THERAPY to obtain biopsy — treat first, biopsy within 1-2 weeks afterward (steroids do not eliminate histologic findings during this window). "
      "Imaging: temporal artery ultrasound ('halo sign'), MR angiography or CT angiography, or FDG-PET for large-vessel involvement. "
      "ACR 1990 classification criteria: age >=50, new headache, temporal artery tenderness/decreased pulse, ESR >=50, positive biopsy (3 of 5 classifies GCA). "
      "(4) Treatment. "
      "(a) URGENT HIGH-DOSE CORTICOSTEROIDS: "
      "- With visual symptoms or vision threat: IV methylprednisolone 1,000 mg daily x 3 days, followed by oral prednisone 60-80 mg daily with slow taper. "
      "- Without visual symptoms: oral prednisone 40-60 mg daily. "
      "Treatment should start IMMEDIATELY on clinical suspicion — vision loss is often irreversible once it occurs. "
      "(b) Aspirin 81 mg daily — reduces thrombotic complications (ocular, stroke). "
      "(c) Tocilizumab (IL-6 inhibitor) — FDA approved for GCA, reduces steroid burden and flares; added as steroid-sparing therapy, especially in refractory or relapsing disease (GiACTA trial). "
      "(d) Methotrexate as alternative steroid-sparing agent. "
      "(e) Steroid taper is slow — typically over 1-2 years, guided by symptoms and ESR/CRP; relapses are common. "
      "(f) PMR alone is treated with lower-dose prednisone (15-20 mg daily starting) with taper. "
      "(g) Osteoporosis prophylaxis (bisphosphonate, calcium, vitamin D), PJP prophylaxis in prolonged high-dose steroids (TMP-SMX), steroid-induced diabetes monitoring, and gastric protection. "
      "(5) Long-term monitoring and complications. "
      "Large-vessel involvement: aortic aneurysm risk is elevated long-term — surveillance imaging (typically yearly CT or MR of aorta) for years after diagnosis. "
      "Relapse monitoring with clinical assessment and inflammatory markers. "
      "Steroid toxicity management — highest complication source in the long term. "
      "Classic pitfalls: (a) waiting for biopsy before starting steroids — vision loss is irreversible; start steroids on clinical suspicion. "
      "(b) Missing the diagnosis in a patient with 'just a headache' over age 50 — always ask about jaw claudication, visual symptoms, scalp tenderness, and polymyalgia symptoms; check ESR/CRP. "
      "(c) Stopping steroids too quickly — relapse rate is high; taper slowly. "
      "(d) Not initiating steroid-sparing therapy (tocilizumab, methotrexate) in patients at high risk for steroid complications. "
      "(e) Forgetting aortic aneurysm surveillance — 10-20% of GCA patients develop thoracic aortic aneurysm, often years after initial diagnosis."
    )
  },

  "testicular-traumarupture": {
    "diagnosis": "Testicular Trauma with Rupture",
    "coachFinal": (
      "Diagnosis: blunt testicular trauma with rupture of the tunica albuginea — a urologic emergency. "
      "Key learning: "
      "(1) Testicular trauma is typically blunt (sports injury, straddle injury, assault) but can be penetrating (stab, gunshot). "
      "The tunica albuginea is the tough fibrous capsule surrounding testicular parenchyma; its rupture allows extrusion of seminiferous tubules and hemorrhage. "
      "Other injuries in the trauma spectrum: hematocele (blood in tunica vaginalis), testicular contusion, intratesticular hematoma, epididymal injury, and dislocation. "
      "(2) Presentation: severe scrotal pain, swelling, bruising, nausea/vomiting, and inability to tolerate scrotal examination. "
      "Clinical exam: large tender scrotal hematoma, absent or indeterminate testicular contour, transillumination typically absent (hematocele is opaque), absent cremasteric reflex possible. "
      "Distinguish from testicular torsion (typically non-traumatic, though trauma can precede), epididymitis, and hemorrhagic hydrocele. "
      "(3) Workup — ULTRASOUND is the imaging modality of choice for suspected testicular trauma. "
      "Findings in rupture: heterogeneous testicular echotexture (disrupted parenchyma extruding through tunica defect), loss of normal contour, absent or reduced testicular perfusion on Doppler, large hematocele. "
      "Ultrasound sensitivity for rupture is 80-100% depending on operator experience. "
      "MRI reserved for equivocal cases. "
      "CT for polytrauma and associated injuries. "
      "(4) Management. "
      "Testicular rupture requires EMERGENT surgical exploration within 72 hours (ideally sooner) to preserve testicular function and fertility. "
      "Operative principles: scrotal hematoma evacuation, identification of tunica defect, debridement of nonviable tissue, primary repair of tunica albuginea (with absorbable sutures), and preservation of as much testicular tissue as feasible. "
      "Orchiectomy when the testicle is unsalvageable — severe tissue loss, vascular compromise, or extensive disruption. "
      "Even severely injured testicles can often be salvaged with timely surgery (preservation rates 80-90% with surgery within 72 hours, much lower with delay). "
      "Large hematocele without rupture: drainage and exploration to prevent chronic pain and atrophy. "
      "Supportive care: scrotal support, ice, analgesia, antiemetics, tetanus update, antibiotics for penetrating trauma or surgical site. "
      "(5) Complications and follow-up. "
      "Chronic pain, testicular atrophy, infertility (especially bilateral injury), hypogonadism (with bilateral orchiectomy or severe bilateral injury), and delayed infection. "
      "Offer sperm cryopreservation preoperatively when feasible and fertility is a concern. "
      "Post-operative follow-up: semen analysis (if fertility concerns), testosterone measurement (hypogonadism risk in significant trauma), and ultrasound for testicular size over time. "
      "Psychological support — the emotional impact of genital injury can be significant. "
      "Classic pitfalls: (a) delaying surgery for observation or conservative management in testicular rupture — salvage rate drops sharply after 72 hours. "
      "(b) Over-reassuring on clinical exam alone — ultrasound is essential to assess tunica integrity. "
      "(c) Missing concurrent testicular torsion — particularly in pediatric blunt trauma, where torsion can be triggered by trauma. "
      "(d) Not addressing fertility and hormone consequences — discuss openly with patient. "
      "(e) Forgetting genital protective equipment counseling in contact sports and certain occupations — primary prevention."
    )
  },

  "thiazideinduced-hyponatremia": {
    "diagnosis": "Thiazide-Induced Hyponatremia with Hyponatremic Encephalopathy",
    "coachFinal": (
      "Diagnosis: severe thiazide-induced hyponatremia (Na 118) 6 weeks after HCTZ initiation in an elderly female with symptomatic hyponatremic encephalopathy. "
      "Key learning: "
      "(1) Thiazide diuretics (hydrochlorothiazide, chlorthalidone, indapamide, metolazone) are among the most common drug causes of hyponatremia, particularly in elderly women. "
      "Mechanism is multifactorial: impaired urinary dilution (thiazides block sodium reabsorption at the distal convoluted tubule, impairing free water excretion at the diluting segment), volume contraction triggering ADH release, impaired concentration-dilution regulation, and age-related decrease in free water clearance. "
      "Typical onset: 1-6 weeks after initiation (peak around 2-4 weeks); can occur with stable long-term use triggered by illness or volume change. "
      "(2) Risk factors for thiazide-induced hyponatremia: older age, female sex, lower body weight, concurrent SSRIs or other ADH-modulating drugs, higher dose (chlorthalidone > HCTZ potency), and baseline sodium in low-normal range. "
      "Potentiated by concurrent illness causing volume depletion (vomiting, diarrhea, decreased intake, fever). "
      "(3) Assessment of hyponatremia. "
      "Check serum and urine osmolality, urine sodium, volume status: "
      "- Thiazide-induced typically shows hypotonic hyponatremia with urine osm inappropriately elevated (>100) and urine Na variable (can be high from thiazide effect even in volume depletion). "
      "- Distinguish from SIADH (often similar picture, but without diuretic). "
      "- Consider other concurrent causes: hypothyroidism, adrenal insufficiency, medications, polydipsia. "
      "Severity assessment: mild (130-134), moderate (125-129), severe (<125), or profound (<120). "
      "Symptoms also stratify: asymptomatic to mild (nausea, headache, lethargy) to severe (seizures, altered mental status, coma, respiratory arrest). "
      "(4) Management depends on severity, symptoms, and acuity. "
      "(a) SEVERE SYMPTOMATIC HYPONATREMIA (seizures, obtundation, coma): HYPERTONIC SALINE (3% NaCl) 100-150 mL IV bolus, repeat up to 3 times, targeting 4-6 mEq/L rise in first 6 hours to reverse symptoms. "
      "(b) AVOID over-rapid correction — maximum 8-10 mEq/L in first 24 hours (6 mEq/L in high-risk patients for osmotic demyelination: chronic hyponatremia, malnutrition, alcohol use, hypokalemia, advanced liver disease). "
      "(c) Moderate/asymptomatic: stop thiazide, fluid restriction initially, careful repletion. "
      "(d) Stop the thiazide and do not restart — switch to alternative antihypertensive (calcium channel blocker, ACE-I, ARB) that doesn't cause hyponatremia. "
      "(e) Recheck sodium every 2-4 hours during active correction; if overcorrection, give D5W or DDAVP to slow down or reverse. "
      "(f) Replete potassium cautiously (thiazides cause hypokalemia that compounds electrolyte derangements). "
      "(5) Prevention and long-term management. "
      "For patients with elevated risk (elderly female, low weight, history of thiazide-induced hyponatremia): "
      "- Use alternative antihypertensive when possible. "
      "- If thiazide is needed, check sodium 2-4 weeks after starting and periodically thereafter. "
      "- Counsel patients about sick-day rules (hold diuretic if vomiting, diarrhea, poor PO intake). "
      "- Avoid concurrent SSRI if alternative antidepressant available. "
      "- Elderly patients should have baseline and periodic electrolyte monitoring on any diuretic. "
      "Classic pitfalls: (a) correcting too rapidly, causing osmotic demyelination syndrome — may not manifest for days and is often irreversible. "
      "(b) Restarting thiazide after recovery — will recur; switch class. "
      "(c) Giving normal saline to 'replace sodium' — often paradoxically worsens in SIADH-like physiology; thiazide induced hyponatremia usually requires hypertonic saline for severe cases and fluid restriction for mild. "
      "(d) Attributing elderly confusion to 'dementia' without checking sodium — a common miss. "
      "(e) Forgetting concurrent hypokalemia, which independently causes weakness and arrhythmia and must be repleted carefully."
    )
  },

  "tick-borne-illness": {
    "diagnosis": "Human Monocytic Ehrlichiosis (Ehrlichia chaffeensis)",
    "coachFinal": (
      "Diagnosis: human monocytic ehrlichiosis (HME) from Ehrlichia chaffeensis infection. "
      "Key learning: "
      "(1) Tick-borne illnesses in the US include Lyme disease (Borrelia burgdorferi), anaplasmosis (Anaplasma phagocytophilum), ehrlichiosis (Ehrlichia chaffeensis, E. ewingii, E. muris eauclairensis), babesiosis (Babesia microti), Rocky Mountain spotted fever (Rickettsia rickettsii), tularemia, and Powassan virus. "
      "Exposure history is critical: recent tick bite (only 50-70% recall one), outdoor activity in endemic area, season (typically spring-summer peak), and geography. "
      "Ehrlichia chaffeensis — transmitted by Lone Star tick (Amblyomma americanum), endemic in southeastern and south-central United States. "
      "(2) Clinical presentation of ehrlichiosis: "
      "Non-specific febrile illness: high fever, severe headache, myalgia, malaise, nausea/vomiting, often 7-14 days after tick exposure. "
      "Rash is uncommon in adult ehrlichiosis (~30%) — absence does not exclude diagnosis. "
      "Laboratory: leukopenia (especially lymphopenia), thrombocytopenia, elevated liver enzymes (AST, ALT), elevated LDH, and elevated inflammatory markers. "
      "The triad of fever, leukopenia, and thrombocytopenia in an endemic area is highly suggestive. "
      "Severe disease: toxic shock, ARDS, meningoencephalitis, renal failure, DIC, and death (1-3% mortality). "
      "Immunocompromised patients (HIV, transplant, immunosuppressive therapy) have worse outcomes. "
      "(3) Diagnosis. "
      "Clinical suspicion in endemic area with appropriate exposure and findings. "
      "Confirmatory testing: "
      "(a) PCR for Ehrlichia DNA on blood — most sensitive in first week of illness. "
      "(b) Peripheral smear — morulae (intracellular bacterial aggregates) in monocytes (HME) or neutrophils (anaplasmosis/HGA); low sensitivity but highly specific. "
      "(c) Serology (IFA) with IgG and IgM — fourfold rise in paired acute and convalescent titers confirms diagnosis; acute-phase serology often negative because IgM response takes 1-2 weeks. "
      "(4) Treatment. "
      "DOXYCYCLINE 100 mg PO/IV BID is first-line for ALL tick-borne rickettsial and ehrlichial infections, regardless of age. "
      "Start EMPIRICALLY whenever ehrlichiosis, anaplasmosis, or Rocky Mountain spotted fever is suspected — DO NOT wait for confirmation; delay is associated with increased mortality, particularly for RMSF. "
      "Duration: 7-14 days or at least 3 days after fever resolves and clinical improvement. "
      "Response: fever typically defervesces within 48 hours; failure to respond should prompt reconsideration of diagnosis. "
      "In pregnancy and children, doxycycline remains first-line for tick-borne rickettsial infections — the old contraindication in young children (dental staining) is less concerning with short courses (<21 days) and is outweighed by mortality risk of untreated RMSF. "
      "Doxycycline over chloramphenicol (older alternative) — shorter course, better efficacy, fewer adverse effects. "
      "(5) Prevention and co-infection considerations. "
      "Tick prevention: DEET-containing insect repellent, permethrin-treated clothing, avoid tick habitats, daily tick checks, prompt removal of attached ticks (fine-tipped tweezers, grasp close to skin, steady upward pressure; avoid twisting/burning). "
      "Prophylactic doxycycline (single 200 mg dose) is recommended for adults and children after an Ixodes (deer tick) bite with attachment >=36 hours in highly endemic Lyme regions — reduces Lyme incidence. "
      "Co-infection is possible: Lyme and anaplasmosis transmitted by same tick (Ixodes); consider broader testing in severe or atypical illness. "
      "Babesiosis can coexist with Lyme/anaplasmosis — suspect in severe illness, hemolytic anemia, or immunocompromised patients. "
      "Classic pitfalls: (a) waiting for serology to confirm before treating — empirically treat any suspected rickettsial/ehrlichial illness with doxycycline; mortality rises with delay. "
      "(b) Missing RMSF — 'spotless' RMSF is common early, and delay is catastrophic (20% mortality untreated vs <5% treated). "
      "(c) Avoiding doxycycline in pregnancy or children when tick-borne rickettsial infection is suspected — short-course doxycycline is safe and lifesaving. "
      "(d) Missing co-infection in patients not responding to expected therapy — think babesiosis if hemolytic features, think Lyme if persistent arthritis or neurologic. "
      "(e) Not counseling patients about tick prevention in endemic areas and high-risk occupations."
    )
  },

  "todd-paralysis": {
    "diagnosis": "Todd's Paralysis (Postictal Paresis)",
    "coachFinal": (
      "Diagnosis: Todd's paralysis — transient postictal focal weakness. "
      "Key learning: "
      "(1) Todd's paralysis (Todd's paresis) is transient focal neurologic deficit following a focal or focal-to-bilateral seizure, typically lasting minutes to hours, rarely up to 48 hours. "
      "Most commonly presents as unilateral weakness (Todd's palsy) but can include aphasia (Todd's aphasia), visual field deficit, or sensory loss — depending on the region of the cortex involved in the seizure. "
      "The affected side corresponds to the seizure focus — contralateral weakness reflects a lateralizing ictal origin. "
      "(2) Pathophysiology is incompletely understood but likely involves neuronal exhaustion and suppression following intense ictal activity, with contributions from increased inhibitory transmission, altered blood flow, and energy depletion in the epileptic focus. "
      "The deficit is reversible and does not indicate structural injury from the seizure itself. "
      "(3) The critical clinical challenge is distinguishing Todd's paralysis from acute ischemic stroke — both can present as focal neurologic deficit, and misattribution can cause missed stroke (fatal error) or unnecessary tPA (dangerous). "
      "Features favoring Todd's paralysis: witnessed or documented preceding seizure, known epilepsy or brain lesion, gradual onset of weakness after the seizure, and improvement over time. "
      "Features favoring stroke: sudden onset of deficit without preceding event, deficit stable or progressing (not improving), cortical signs (aphasia, neglect), facial droop with body weakness, and appropriate vascular risk factors. "
      "Both can coexist — stroke can trigger seizure, and patients with stroke history have increased seizure risk. "
      "When uncertain, time is brain: image immediately and consider thrombolysis if within window and stroke confirmed. "
      "(4) Evaluation of a patient with postictal focal deficit. "
      "(a) Urgent imaging: non-contrast CT head to exclude hemorrhage, followed by CT angiography or MRI/MRA to evaluate for stroke. "
      "MRI DWI is particularly sensitive — Todd's paralysis typically shows no acute infarct; stroke shows restricted diffusion. "
      "Note: CT perfusion and MRI can show transient cortical hypoperfusion in Todd's, which could be confused with stroke — radiology expertise is helpful. "
      "(b) Labs: glucose, BMP, magnesium, calcium, phosphate, toxicology screen, CBC, coagulation. "
      "(c) EEG — ictal and postictal EEG can document seizure; not typically obtained emergently. "
      "(d) Search for seizure trigger: metabolic, drug, missed AED dose, sleep deprivation, infection, alcohol withdrawal. "
      "(e) Evaluate for underlying structural lesion if new-onset seizure — MRI brain with and without contrast. "
      "(5) Management. "
      "(a) Supportive care — airway, breathing, seizure precautions, prevent injury, monitor for recurrent seizure. "
      "(b) Reassure patient and family — the deficit typically resolves over minutes to hours. "
      "(c) Optimize anti-seizure medication regimen — identify cause of breakthrough seizure. "
      "(d) Stroke rule-out as above. "
      "(e) Drive and activity restrictions per local seizure laws. "
      "Classic pitfalls: (a) attributing focal deficit to Todd's paralysis and missing stroke — witnessed seizure does not exclude concurrent stroke, especially in patients with vascular risk factors; image promptly. "
      "(b) Giving tPA to a patient with true Todd's paralysis and no stroke — thorough history and imaging before thrombolysis. "
      "(c) Missing underlying structural lesion in first-ever seizure — always image. "
      "(d) Overlooking non-convulsive status epilepticus in a postictal patient whose mental status doesn't recover — EEG monitoring is essential. "
      "(e) Not counseling about driving and activity restrictions — legal and safety implications."
    )
  },

  "tonsillar-malignancy": {
    "diagnosis": "Oropharyngeal Squamous Cell Carcinoma (Tonsillar Malignancy)",
    "coachFinal": (
      "Diagnosis: oropharyngeal squamous cell carcinoma presenting as a tonsillar mass (tonsillar malignancy). "
      "Key learning: "
      "(1) Oropharyngeal squamous cell carcinoma (OPSCC) epidemiology has dramatically shifted in the past 2 decades. "
      "HPV-associated OPSCC (mostly HPV-16) now accounts for 60-80% of cases in the US — typically affecting younger (40-60), often non-smoking, non-drinking men; has better prognosis than HPV-negative disease. "
      "HPV-negative OPSCC is the classic tobacco- and alcohol-driven cancer — older patients, heavy exposure, worse prognosis. "
      "Tonsillar and base-of-tongue subsites most commonly HPV-associated. "
      "(2) Presentation. "
      "Early disease often asymptomatic or subtle: persistent sore throat, unilateral tonsillar enlargement, odynophagia, dysphagia, otalgia (referred through CN IX), oral bleeding, or painless neck mass (lateralized cervical lymphadenopathy). "
      "Advanced disease: trismus, dysphonia, weight loss, airway compromise, facial or neck pain. "
      "Red flags for tonsillar malignancy: unilateral tonsillar asymmetry (especially in adults), persistent unilateral sore throat >3 weeks, ulceration, firm texture, associated cervical lymphadenopathy. "
      "Any persistent unilateral tonsil mass in an adult should trigger biopsy. "
      "(3) Workup. "
      "Flexible fiberoptic laryngoscopy or nasopharyngoscopy — direct visualization of the primary lesion. "
      "BIOPSY of the primary lesion (or FNA of a cervical node if primary not clearly visible) is essential — SCC confirmed, with HPV status (p16 immunohistochemistry as surrogate, with or without HPV PCR/ISH). "
      "Imaging: CT neck with IV contrast (for extent, lymphadenopathy, tonsil asymmetry), MRI for soft tissue detail and perineural invasion, PET-CT for staging and distant metastasis assessment. "
      "Panendoscopy (laryngoscopy, esophagoscopy, bronchoscopy) to identify synchronous second primaries (tobacco-related cancers). "
      "Staging by AJCC 8th edition — HPV-positive and HPV-negative OPSCC have separate staging systems (HPV+ has lower stage for same anatomic disease reflecting better prognosis). "
      "Dental evaluation pre-treatment — for any needed extractions before radiation (avoids osteoradionecrosis). "
      "(4) Treatment. "
      "Multidisciplinary tumor board review is essential. "
      "(a) Early-stage (T1-T2, N0): single modality — transoral robotic surgery (TORS) or transoral laser microsurgery, OR definitive radiation. Choice depends on tumor location, patient factors, and center expertise. "
      "(b) Locally advanced (T3-T4 or N+): concurrent chemoradiation (cisplatin plus radiation) OR surgery followed by adjuvant radiation +/- chemotherapy based on pathology (positive margins, extranodal extension require chemo addition). "
      "(c) Metastatic/recurrent: systemic therapy — platinum-based chemotherapy, cetuximab (EGFR antibody), and immunotherapy (pembrolizumab, nivolumab for PD-L1+ disease) have improved outcomes. "
      "(d) HPV-associated OPSCC has active research on treatment de-escalation to reduce toxicity while preserving outcomes — ongoing trials. "
      "(5) Survivorship and prevention. "
      "Side effects of treatment: xerostomia (from radiation), dysphagia, mucositis, trismus, osteoradionecrosis, hypothyroidism, hearing loss (with cisplatin), and neurocognitive effects. "
      "Long-term multidisciplinary survivorship: dental care, speech and swallowing therapy, nutritional support (PEG tube often temporary), mental health, smoking cessation, alcohol counseling. "
      "HPV VACCINATION (Gardasil 9) — primary prevention; now recommended through age 45 in US, universal in adolescents. "
      "Classic pitfalls: (a) dismissing unilateral tonsillar asymmetry as 'tonsillitis' in adults — biopsy all persistent unilateral tonsillar enlargement. "
      "(b) Missing the painless neck mass as initial presentation — cervical lymphadenopathy is often the first sign of OPSCC; FNA of unexplained unilateral cervical lymphadenopathy in an adult. "
      "(c) Not testing HPV status on biopsy — affects prognosis and staging, increasingly treatment decisions. "
      "(d) Under-preparing for treatment-related morbidity: pre-treatment dental eval, nutritional planning, and counseling improve outcomes. "
      "(e) Forgetting to counsel about HPV vaccination — for the patient, partners, and age-appropriate family members."
    )
  },

  "torsion-of-appendix-testis": {
    "diagnosis": "Torsion of Appendix Testis",
    "coachFinal": (
      "Diagnosis: torsion of the appendix testis — a common cause of acute scrotal pain in prepubertal boys, distinct from and prognostically better than testicular torsion. "
      "Key learning: "
      "(1) Acute scrotal pain in pediatric patients has a critical differential: "
      "(a) Testicular torsion — SURGICAL EMERGENCY, must be ruled out. Typically sudden-onset severe pain, high-riding testicle, absent cremasteric reflex, horizontal lie. Peak age bimodal: neonates and adolescents. "
      "(b) Torsion of appendix testis (or appendix epididymis) — most common in prepubertal boys (peak 7-12 years). Gradual onset over hours to days, pain localized to superior pole, characteristic 'blue dot sign' if visible. "
      "(c) Epididymitis — often older adolescents, associated UTI symptoms or STI risk, gradual onset. "
      "(d) Orchitis. "
      "(e) Henoch-Schonlein purpura with scrotal involvement. "
      "(f) Incarcerated inguinal hernia. "
      "(g) Testicular trauma. "
      "(h) Idiopathic scrotal edema. "
      "(2) The appendix testis is a Mullerian duct remnant attached to the upper pole of the testis (similar remnants exist — appendix epididymis from the Wolffian duct). "
      "These vestigial structures can twist on their small pedicles, causing ischemic necrosis with localized pain, inflammation, and hyperemia. "
      "(3) Presentation. "
      "Gradual-onset unilateral scrotal pain over hours (slower than testicular torsion); localized tenderness at the superior pole of the testicle; BLUE DOT SIGN — visible blue-black discoloration through the scrotal skin over a torsed, necrosing appendix — pathognomonic but only visible in ~20% of cases. "
      "Associated findings: scrotal erythema and mild swelling, reactive hydrocele, preserved cremasteric reflex (distinguishing from testicular torsion where it's typically absent), and normal testicular lie (no high-riding testicle or transverse orientation). "
      "Pain typically less severe than testicular torsion but can be significant. "
      "(4) Diagnostic approach. "
      "Clinical examination is the cornerstone — a skilled exam differentiates from testicular torsion in many cases. "
      "Scrotal ULTRASOUND with Doppler is essential when testicular torsion cannot be confidently excluded: "
      "- Testicular torsion: reduced or absent testicular blood flow (critical finding). "
      "- Torsion of appendix testis: preserved testicular blood flow, small hyperechoic or hypoechoic nodule at the superior pole (torsed appendix), increased peri-appendiceal flow, reactive hydrocele. "
      "- Epididymitis: enlarged hyperemic epididymis with increased flow. "
      "If ultrasound or clinical picture remains uncertain, surgical exploration is warranted — better to explore and find appendix torsion than miss testicular torsion. "
      "(5) Management. "
      "Torsion of appendix testis is SELF-LIMITED and managed conservatively: "
      "(a) Analgesia (acetaminophen, ibuprofen). "
      "(b) Scrotal support, rest, limited activity. "
      "(c) Pain typically resolves in 5-10 days as the appendix necroses and calcifies. "
      "(d) Close follow-up to ensure resolution — any worsening or new concerns prompts reevaluation. "
      "Surgical excision is reserved for refractory pain or diagnostic uncertainty. "
      "Testicular function is preserved — good long-term prognosis with no impact on fertility. "
      "Classic pitfalls: (a) missing testicular torsion by labeling as appendix torsion — when in doubt, explore or obtain ultrasound with Doppler. Testicular torsion salvage rate drops rapidly after 6 hours. "
      "(b) Over-treating appendix torsion with surgery when conservative management suffices. "
      "(c) Missing HSP with scrotal involvement in a boy with rash, abdominal pain, arthralgias — systemic clues on exam. "
      "(d) Not considering incarcerated hernia in neonates and infants with scrotal swelling. "
      "(e) Forgetting epididymitis in sexually active adolescents — STI screening and treatment (ceftriaxone plus doxycycline for suspected GC/chlamydia), or urinary source workup in younger boys."
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
    print(f'\nBatch 33B: {done}/{len(ENRICHMENTS)} enriched')
