#!/usr/bin/env python3
"""Batch 33 — Part B: 11 cases.

Cases: temporal-arteritis, testicular-traumarupture, thiazideinduced-hyponatremia,
       tick-borne-illness, todd-paralysis, tonsillar-malignancy, torsion-of-appendix-testis,
       toxic-ingestion, type-2-mi, type2-diabetes-outpatient, unstable-angina
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "temporal-arteritis": {
    "diagnosis": "Giant Cell (Temporal) Arteritis with Concurrent Polymyalgia Rheumatica — Vision Threatened",
    "coachFinal": (
      "Diagnosis: giant cell (temporal) arteritis (GCA) with concurrent polymyalgia rheumatica (PMR), vision at risk. "
      "Key learning: "
      "(1) Giant cell arteritis is a large-vessel vasculitis affecting medium and large arteries, particularly the extracranial branches of the carotid (temporal, ophthalmic, occipital, external carotid) but also the aorta and its major branches. "
      "Age over 50 is essentially required (peak 70-80). "
      "Strong association with polymyalgia rheumatica — about 40-50% of GCA patients have PMR features and 10-20% of PMR patients develop GCA. "
      "Women affected 2-3x more than men. "
      "(2) Classic features — ANY of these in an older adult warrants urgent evaluation: "
      "(a) New-onset headache (usually temporal or occipital, often severe). "
      "(b) Jaw claudication (pain with chewing — highly specific). "
      "(c) Vision changes (transient monocular visual loss — amaurosis fugax; diplopia; permanent loss from AION, CRAO, or posterior cerebral ischemia — 15-20% develop permanent vision loss). "
      "(d) Scalp tenderness, tender palpable temporal artery with decreased pulsation. "
      "(e) Systemic symptoms — fever, weight loss, fatigue, polymyalgia rheumatica features (shoulder and hip girdle pain/stiffness). "
      "(f) Stroke or TIA in vertebrobasilar territory. "
      "(3) Diagnosis. "
      "Laboratory: ESR (classically >50, often >100) and CRP are elevated in >95% — 'sedimentation rate normal' does not entirely rule out GCA but makes it much less likely. "
      "Thrombocytosis is common. "
      "Temporal artery biopsy is the gold standard — a 2-3 cm segment is taken from the affected side; skip lesions are common, so a negative unilateral biopsy has up to 10% false negative rate — contralateral biopsy can be considered. "
      "Biopsy findings: mononuclear infiltrate, giant cells, fragmented internal elastic lamina. "
      "Imaging alternatives and adjuncts: temporal artery ultrasound ('halo sign' — hypoechoic wall thickening), high-resolution MRI of the temporal arteries, PET-CT for large-vessel involvement. "
      "(4) Treatment. "
      "DO NOT wait for biopsy confirmation — start high-dose corticosteroids immediately on clinical suspicion. "
      "Biopsy remains positive for 2-4 weeks after steroid initiation, so steroids do not preclude confirmation. "
      "Dosing: "
      "(a) Vision-threatening GCA (visual symptoms, TIA-like, established infarction) — IV methylprednisolone 500-1,000 mg daily x 3 days, then oral prednisone 1 mg/kg/day. "
      "(b) GCA without vision involvement — oral prednisone 40-60 mg daily. "
      "Taper slowly over 12-18+ months with monitoring of ESR/CRP and symptoms. "
      "Relapse is common; most patients require 2-3 years of therapy. "
      "Steroid-sparing agents: tocilizumab (IL-6 inhibitor — FDA-approved for GCA, allows faster steroid taper; GIACTA trial), methotrexate (modest evidence). "
      "Prophylaxis: low-dose aspirin (reduces vascular events), calcium and vitamin D, PCP prophylaxis, bone density assessment, bisphosphonate for osteoporosis prevention, and routine ophthalmology if vision symptoms. "
      "(5) Polymyalgia rheumatica. "
      "Bilateral shoulder and/or hip girdle pain and stiffness >30 minutes morning stiffness, age >=50, elevated inflammatory markers. "
      "Response to low-dose prednisone (15-20 mg daily) is dramatic — non-response suggests alternative diagnosis. "
      "Taper over 1-2 years with monitoring. "
      "Screen for GCA at diagnosis and at every follow-up — symptoms can emerge during PMR course. "
      "Classic pitfalls: (a) missing GCA — untreated vision loss is usually permanent; even delay of days can cost an eye. "
      "(b) Waiting for biopsy before treating — unnecessary delay; treat on clinical suspicion. "
      "(c) Rapid steroid taper — relapse rate high; slow taper with monitoring is standard. "
      "(d) Not considering large-vessel involvement (aortic aneurysm, aortic dissection risk over years) — surveillance imaging is recommended. "
      "(e) Missing alternative diagnoses: other vasculitides, malignancy, infection, amyloidosis — which can mimic GCA/PMR."
    )
  },

  "testicular-traumarupture": {
    "diagnosis": "Testicular Trauma with Rupture",
    "coachFinal": (
      "Diagnosis: blunt testicular trauma with testicular rupture — a urologic surgical emergency. "
      "Key learning: "
      "(1) Testicular rupture is a disruption of the tunica albuginea (the tough fibrous capsule of the testis), most commonly from blunt scrotal trauma (sports, assault, MVC — straddle injury, kick). "
      "Penetrating injuries are less common but also serious. "
      "Testicular rupture occurs in 10-15% of blunt scrotal injuries and in up to 50% of penetrating testicular injuries — high clinical suspicion in any significant scrotal trauma. "
      "(2) Presentation: severe scrotal pain, swelling, ecchymosis, and sometimes systemic symptoms (nausea, vomiting from autonomic stimulation). "
      "Physical exam: tender enlarged scrotum, hematoma, tense tenderness, possible palpable disruption of testicular contour (hard to assess with swelling). "
      "Reflex nausea and vomiting are common with any testicular injury. "
      "The differential for acute scrotum: testicular torsion (surgical emergency — 6-8 hour salvage window), epididymitis/orchitis, torsion of the appendix testis (self-limited), incarcerated hernia, Fournier gangrene, and traumatic injuries (rupture, hematocele, intratesticular hematoma, fracture). "
      "(3) Diagnosis. "
      "Scrotal ULTRASOUND with DOPPLER is the primary imaging modality: "
      "(a) Tunical disruption (direct visualization of the defect). "
      "(b) Heterogeneous testicular echogenicity (hematoma within parenchyma). "
      "(c) Hematocele (blood within the tunica vaginalis). "
      "(d) Absent or decreased Doppler blood flow in disrupted areas. "
      "Ultrasound sensitivity for rupture is 80-90%; surgical exploration may be needed when imaging is equivocal but clinical suspicion is high. "
      "(4) Management. "
      "TESTICULAR RUPTURE REQUIRES EMERGENT SURGICAL EXPLORATION — ideally within 72 hours, as delay reduces salvage rate. "
      "Goals: evacuate hematoma and necrotic tissue, debride nonviable parenchyma, close the tunica albuginea to restore pressure (primary closure if possible, tunica vaginalis flap for coverage of defects), and preserve testicular function. "
      "Salvage rates are 80-90% with early repair (vs 45-55% with delayed/conservative management). "
      "Large hematoceles (without rupture) may also warrant exploration for evacuation — reduces pressure, pain, and atrophy risk. "
      "Orchiectomy if non-salvageable. "
      "(5) Other urologic trauma considerations. "
      "Testicular torsion can be triggered by minor trauma — always assess testicular lie (high-riding, transverse), cremasteric reflex (absent in torsion), and Prehn sign (pain relief with elevation — negative in torsion). Doppler to confirm flow. "
      "Torsion has a 6-hour window for salvage. "
      "Penile trauma: penile fracture (hearing a 'pop' during intercourse, rapid detumescence, swelling, 'eggplant deformity') — emergent surgical repair. "
      "Renal trauma grading (AAST) guides management — most Grade I-II managed conservatively, higher grades often operative. "
      "Bladder injury: intraperitoneal (always surgical repair) vs extraperitoneal (catheter drainage for most). "
      "Urethral injury: avoid Foley insertion if suspected (bloody meatus, perineal hematoma, high-riding prostate); retrograde urethrogram to evaluate. "
      "Classic pitfalls: (a) delaying imaging and urology consultation for traumatic scrotum — time matters for salvage. "
      "(b) Dismissing minor-appearing injuries — significant intratesticular damage can occur with minimal external findings. "
      "(c) Forgetting to consider concurrent torsion — mechanism may trigger torsion, and ischemia may not be obvious on exam. "
      "(d) Not providing psychological support and counseling about fertility — bilateral injury or orchiectomy affects fertility/hormonal function; sperm banking may be appropriate. "
      "(e) Forgetting mandatory reporting for non-accidental trauma in pediatric testicular injury."
    )
  },

  "thiazideinduced-hyponatremia": {
    "diagnosis": "Thiazide-Induced Symptomatic Hyponatremia",
    "coachFinal": (
      "Diagnosis: thiazide-induced severe symptomatic hyponatremia (Na 118) with hyponatremic encephalopathy, 6 weeks after HCTZ initiation in an elderly woman. "
      "Key learning: "
      "(1) Thiazide diuretics (HCTZ, chlorthalidone, indapamide) are among the most common causes of drug-induced hyponatremia, particularly in elderly women. "
      "The mechanism is multifactorial: (a) direct impairment of distal tubular sodium reabsorption and urine dilution (thiazides block the Na-Cl cotransporter in the distal convoluted tubule); (b) non-osmotic ADH release from mild volume depletion; (c) increased thirst and water intake in older patients. "
      "Onset is typically within the first 2-6 weeks of initiation. "
      "(2) Risk factors for thiazide-induced hyponatremia: elderly (especially female), low body weight, baseline low-normal sodium, concurrent use of SSRIs or other drugs affecting ADH/free water excretion, low dietary sodium, and concurrent psychiatric illness with polydipsia. "
      "Risk is dose-dependent but not linearly — even low doses cause problems in susceptible patients. "
      "Chlorthalidone has a longer half-life than HCTZ and may carry higher hyponatremia risk. "
      "(3) Clinical presentation. "
      "Neurologic symptoms predominate and correlate with severity and acuity. "
      "Acute severe hyponatremia (develops over hours-days): headache, nausea, vomiting, confusion, lethargy, seizures, coma, respiratory arrest from cerebral edema and herniation. "
      "Chronic hyponatremia (weeks or longer): more gradual symptoms, adaptation by brain osmolyte loss reduces cerebral edema but increases risk of ODS with correction. "
      "This patient has intermediate/chronic onset but is symptomatic — treat as moderate-severe hyponatremia with careful correction. "
      "(4) Management. "
      "(a) Severe symptomatic hyponatremia (seizures, obtundation, coma) — hypertonic 3% saline 100-150 mL IV bolus, repeat up to 3 times, targeting rise of 4-6 mEq/L in the first 4-6 hours to reverse symptoms. "
      "(b) After initial symptom reversal, slow to no more than 8 mEq/L over 24 hours to avoid osmotic demyelination syndrome (ODS). "
      "(c) For moderate hyponatremia without life-threatening symptoms: stop thiazide, IV or oral fluid management with isotonic or restricted oral free water, salt tablets, and close monitoring. "
      "(d) DISCONTINUE THIAZIDE permanently — do not rechallenge in someone with documented thiazide-induced hyponatremia. "
      "(e) Correct magnesium, potassium, and other electrolytes concurrently. "
      "Choice of alternative antihypertensive: calcium channel blocker (amlodipine), ACE-I/ARB (caution in renal or hyperkalemia concerns), or beta-blocker. "
      "(5) Correction rate and ODS risk. "
      "Overly rapid correction (more than 8-10 mEq/L in 24 hours, 18 mEq/L in 48 hours) causes osmotic demyelination syndrome — typically presents 2-7 days after correction with quadriparesis, dysphagia, dysarthria, altered mental status, locked-in syndrome; often irreversible and catastrophic. "
      "High-risk groups for ODS: chronic hyponatremia (Na <120 for >48 hours), alcohol use disorder, malnutrition, hypokalemia, liver disease, hypoxia, female — use slower targets (6-8 mEq/L per 24 hours). "
      "If overcorrection occurs, actively LOWER sodium with D5W and/or DDAVP — this has been shown to reduce ODS risk. "
      "Check sodium every 2 hours during active correction. "
      "Classic pitfalls: (a) correcting too rapidly and causing ODS. "
      "(b) Restarting the thiazide after recovery — DO NOT; document allergy/intolerance in the chart. "
      "(c) Attributing symptoms to 'dementia' or 'age' in an elderly woman with new confusion and a normal or low-normal baseline sodium that drops to 118 — always check Na. "
      "(d) Forgetting to check sodium 1-2 weeks after thiazide initiation in at-risk patients — prevention is the best strategy. "
      "(e) Missing concurrent causes of hyponatremia (SIADH drugs, hypothyroidism, adrenal insufficiency)."
    )
  },

  "tick-borne-illness": {
    "diagnosis": "Ehrlichiosis (Human Monocytic Ehrlichiosis)",
    "coachFinal": (
      "Diagnosis: human monocytic ehrlichiosis (HME) caused by Ehrlichia chaffeensis. "
      "Key learning: "
      "(1) Ehrlichiosis is a tick-borne rickettsial-like illness common in the south-central, southeastern, and mid-Atlantic United States. "
      "The main species: Ehrlichia chaffeensis (vector: Amblyomma americanum, the Lone Star tick; reservoir: white-tailed deer) causes human monocytic ehrlichiosis; Anaplasma phagocytophilum (vector: Ixodes scapularis; reservoir: small mammals) causes human granulocytic anaplasmosis (similar clinical picture but distinct organism). "
      "(2) Presentation typically 1-3 weeks after tick exposure (often unrecognized bite): fever, chills, headache, myalgia, malaise, nausea/vomiting, sometimes cough, confusion. "
      "Rash (maculopapular or petechial) occurs in about 30% of adults and 60% of children — more common in ehrlichiosis than anaplasmosis, less than RMSF. "
      "Key laboratory findings: LEUKOPENIA (especially lymphopenia), THROMBOCYTOPENIA, elevated transaminases, elevated LDH, and sometimes hyponatremia — the 'tick-borne triad' of fever + cytopenias + transaminitis in an exposed person should prompt empiric doxycycline. "
      "Severe complications: meningoencephalitis, renal failure, ARDS, DIC, toxic shock-like syndrome, and hemophagocytic lymphohistiocytosis (HLH) — mortality 1-3% overall, higher in immunocompromised (especially asplenia, HIV). "
      "(3) Differential in a patient with fever after possible tick exposure. "
      "(a) Ehrlichiosis/anaplasmosis. "
      "(b) Rocky Mountain spotted fever (Rickettsia rickettsii, Dermacentor ticks) — classically centripetal rash, more severe, higher mortality, treat empirically. "
      "(c) Lyme disease (Borrelia burgdorferi, Ixodes) — erythema migrans, flu-like illness; later arthritis, carditis, neurologic. "
      "(d) Babesiosis (Babesia microti, Ixodes) — fever, hemolytic anemia, thrombocytopenia; severe in asplenic patients (similar to malaria). "
      "(e) Powassan virus — rare but severe neurologic disease. "
      "(f) Alpha-gal syndrome (delayed allergy to mammalian meat after Lone Star tick bite) — not acute febrile illness but distinctive. "
      "Co-infections with multiple tick-borne pathogens are possible in endemic areas. "
      "(4) Diagnosis. "
      "Clinical — empiric treatment for suspected tick-borne illness should not wait for confirmation. "
      "Laboratory confirmation: PCR on whole blood (sensitive in early disease, best before antibiotics); serology (fourfold rise in IgG between acute and convalescent samples confirms); peripheral blood smear may show intracytoplasmic morulae (characteristic mulberry-like inclusions) in monocytes (ehrlichiosis) or neutrophils (anaplasmosis). "
      "Rule out co-infections in endemic areas. "
      "(5) Treatment. "
      "DOXYCYCLINE 100 mg PO/IV BID is first-line for all ages, including children under 8 and in pregnancy (benefits of rapid treatment outweigh theoretical dental staining risks — CDC position). "
      "Duration: at least 5-7 days and for at least 3 days after fever resolves; typical course 7-14 days. "
      "Rifampin is an alternative (e.g., for doxycycline allergy, but less effective). "
      "Rapid clinical response expected within 48-72 hours — persistent fever beyond that suggests alternative diagnosis, co-infection, or complication. "
      "Hospitalization and supportive care for severe disease. "
      "Prevention: tick avoidance (protective clothing, permethrin-treated clothing, DEET or picaridin repellents), daily tick checks, prompt removal with fine-tipped tweezers. "
      "Classic pitfalls: (a) delaying doxycycline waiting for confirmation — treat empirically in suspected RMSF or ehrlichiosis. "
      "(b) Using drug other than doxycycline — doxycycline is now preferred even in pregnancy/pediatrics. "
      "(c) Missing co-infections — test for Lyme, Babesia in endemic areas. "
      "(d) Not counseling tick-bite prevention at every primary care visit in endemic regions. "
      "(e) Forgetting to consider HLH in severe or atypically progressing cases — fever, pancytopenia, hyperferritinemia, splenomegaly."
    )
  },

  "todd-paralysis": {
    "diagnosis": "Todd's Paralysis (Postictal Paresis)",
    "coachFinal": (
      "Diagnosis: Todd's paralysis — transient postictal focal neurologic deficit following a seizure. "
      "Key learning: "
      "(1) Todd's paralysis is a transient focal neurologic deficit (most commonly hemiparesis, less often aphasia, sensory loss, or visual field defect) following a focal seizure. "
      "Mechanism: thought to be related to prolonged cortical depression, neuronal exhaustion, or local perfusion changes after intense seizure activity; the phenomenon is more common after secondarily generalized focal-onset seizures. "
      "Duration: typically resolves within 30 minutes to 36 hours (rarely longer); deficits lasting beyond that warrant urgent evaluation for alternative pathology. "
      "(2) The critical clinical problem is distinguishing Todd's paralysis from stroke. "
      "A patient with altered mental status and new hemiparesis could have: "
      "(a) Seizure with Todd's paralysis — motor deficit is postictal. "
      "(b) Ischemic stroke that provoked the seizure (about 10% of strokes have associated seizures — 'seizure with stroke' rather than 'stroke causing seizure'). "
      "(c) Seizure alone without stroke, but with prolonged postictal state. "
      "(d) Structural lesion (tumor, AVM, hemorrhage) presenting with both seizure and focal deficit. "
      "(e) Hypoglycemia (can cause both seizure and focal deficit — always check glucose). "
      "Until proven otherwise, treat any new focal deficit as potential stroke — do not label as 'Todd's paralysis' until stroke has been excluded. "
      "(3) Workup. "
      "Immediate: ABCs, accucheck glucose, ECG (arrhythmia as stroke etiology or seizure trigger). "
      "Emergent head CT (noncontrast) to exclude hemorrhage; CT angiography for vessel occlusion in suspected stroke; MRI with DWI is gold standard for ischemic stroke when CT negative and clinical window is still open. "
      "Basic labs: CBC, BMP, magnesium, calcium, hepatic panel, lactate, tox screen, INR/PTT if anticoagulated, and troponin. "
      "EEG helps confirm seizure but may not change acute decisions. "
      "LP if meningitis or encephalitis suspected. "
      "(4) Management. "
      "If stroke cannot be excluded and the patient is in the tPA window (<4.5 hours from symptom onset) — the decision is difficult. "
      "Guidelines now support tPA in patients with seizure at stroke onset IF the deficit is felt to be due to stroke rather than postictal phenomenon, based on clinical judgment and available imaging. "
      "Multimodal MRI stroke imaging is increasingly available and can guide decisions. "
      "For confirmed postictal Todd's paralysis (no stroke evidence): supportive observation, AED optimization for underlying epilepsy, monitor for deficit resolution (usually within hours). "
      "First seizure workup: MRI brain, EEG, AED consideration based on recurrence risk. "
      "(5) Classic pitfalls: (a) labeling a focal deficit as 'Todd's paralysis' without imaging to exclude stroke or structural lesion. "
      "(b) Failing to check glucose — hypoglycemia can cause focal deficit and seizure; treatable within minutes. "
      "(c) Not imaging because 'patient known to have epilepsy' — acute change in seizure pattern or new postictal deficit may herald new pathology. "
      "(d) Discharging after rapid resolution without evaluation for underlying cause. "
      "(e) Missing nonconvulsive status epilepticus in a patient with 'prolonged postictal state' — continuous EEG may be needed."
    )
  },

  "tonsillar-malignancy": {
    "diagnosis": "Tonsillar Malignancy (Oropharyngeal Squamous Cell Carcinoma)",
    "coachFinal": (
      "Diagnosis: oropharyngeal squamous cell carcinoma of the tonsil. "
      "Key learning: "
      "(1) Head and neck squamous cell carcinoma (HNSCC) of the oropharynx has shifted epidemiologically over the last 20 years from predominantly tobacco/alcohol-related to predominantly HPV-associated (especially HPV-16). "
      "HPV-positive oropharyngeal cancer: typically younger patients (40s-60s), nonsmokers or light smokers, men affected more, presents often with cervical lymphadenopathy as first sign. "
      "Has better prognosis and better treatment response than HPV-negative disease. "
      "HPV-negative oropharyngeal cancer: associated with tobacco and alcohol, older patients, worse prognosis. "
      "(2) Presentation. "
      "Symptoms: persistent sore throat, unilateral tonsillar enlargement (especially asymmetric and non-tender), dysphagia, odynophagia, referred otalgia, neck mass (often the only symptom in HPV+ disease), weight loss, muffled voice, hemoptysis. "
      "ANY unilateral tonsillar enlargement in an adult, persistent sore throat >2-3 weeks unresponsive to antibiotics, or unexplained cervical lymphadenopathy warrants urgent ENT evaluation. "
      "Physical exam: asymmetric tonsillar mass (often with surface ulceration or fullness), firm fixed lymphadenopathy, mucosal changes, cranial nerve deficits in advanced disease. "
      "(3) Workup. "
      "(a) Office examination with flexible nasopharyngoscopy. "
      "(b) Biopsy of the primary lesion — tonsillectomy is often both diagnostic and sometimes therapeutic for small lesions. HPV status (p16 immunohistochemistry as surrogate, or direct HPV DNA/RNA testing). "
      "(c) Fine-needle aspiration of any palpable neck lymphadenopathy. "
      "(d) Imaging: CT neck with contrast AND CT chest; PET-CT for staging; MRI for base of tongue or skull base concerns. "
      "(e) Direct laryngoscopy with biopsies under anesthesia for full assessment of extent and search for second primaries. "
      "(f) Staging uses TNM (AJCC 8th edition separates p16+ and p16- oropharyngeal cancer because of divergent prognosis). "
      "(4) Management. "
      "Early-stage HPV+ oropharyngeal cancer: single-modality therapy often sufficient — transoral robotic surgery (TORS) with neck dissection, OR definitive radiation. "
      "Locally advanced disease: combined modality therapy — concurrent chemoradiation (cisplatin with radiation) for most, or induction chemo followed by radiation. "
      "Salvage surgery for residual or recurrent disease. "
      "De-escalation trials are investigating whether HPV+ disease can be treated with reduced-dose chemoradiation given its excellent prognosis — evolving area. "
      "Cetuximab or checkpoint inhibitors for selected advanced or recurrent/metastatic cases. "
      "(5) Prevention and survivorship. "
      "HPV vaccination (Gardasil 9) prevents the HPV types causing most HPV-associated head and neck cancers — recommended universally at ages 11-12 (can start at 9), catch-up through 26, and shared decision through 45. "
      "Tobacco and alcohol cessation. "
      "Surveillance after treatment: clinical exam every 1-3 months year 1, then decreasing frequency; imaging based on symptoms and initial stage; dental and swallowing care; long-term effects (xerostomia, dysphagia, trismus, hypothyroidism after neck radiation). "
      "Classic pitfalls: (a) treating unilateral tonsillar enlargement as recurrent tonsillitis without biopsy. "
      "(b) Missing HPV testing on biopsy — changes staging, prognosis, and treatment decisions. "
      "(c) Not looking for cervical lymph nodes as the first clue in HPV+ disease — primary can be tiny. "
      "(d) Delaying workup of unexplained cervical lymphadenopathy in adults. "
      "(e) Forgetting HPV vaccination recommendations — PCPs and GYN providers should proactively offer."
    )
  },

  "torsion-of-appendix-testis": {
    "diagnosis": "Torsion of the Appendix Testis",
    "coachFinal": (
      "Diagnosis: torsion of the appendix testis — a self-limited cause of acute scrotum that mimics testicular torsion. "
      "Key learning: "
      "(1) The appendix testis is a small embryologic remnant of the Mullerian duct, attached to the upper pole of the testis. "
      "Torsion of this appendage is a common cause of acute scrotum in boys aged 7-14 (peak around puberty — androgen stimulation may enlarge the appendix and make it susceptible to torsion). "
      "It is MORE common than true testicular torsion in this age group. "
      "The key clinical challenge is distinguishing it from true testicular torsion, which requires emergent surgery. "
      "(2) Presentation. "
      "Acute scrotal pain, usually more localized to the upper pole of the testis and gradual in onset over hours. "
      "Less severe systemic symptoms (nausea/vomiting) than testicular torsion. "
      "PHYSICAL EXAM KEY FINDING: the 'blue dot sign' — bluish discoloration visible through thin scrotal skin over the upper pole, corresponding to the infarcted appendage. Present in only 10-20% but highly specific. "
      "Focal tenderness at the upper pole of the testis rather than diffusely over the entire testis. "
      "Normal cremasteric reflex, normal testicular position and lie, no fever, usually no dysuria. "
      "(3) Differential — the acute scrotum must always rule out testicular torsion first. "
      "Testicular torsion: sudden severe pain, high-riding testicle with transverse lie, absent cremasteric reflex, negative Prehn sign, nausea/vomiting. Window for salvage is ~6 hours. "
      "Epididymitis: more gradual onset, dysuria, fever, Prehn sign positive, pyuria, sexually active adolescents or older men. "
      "Incarcerated inguinal hernia, idiopathic scrotal edema, Henoch-Schonlein purpura, testicular tumor, Fournier gangrene — considered in appropriate contexts. "
      "(4) Diagnosis. "
      "Scrotal ultrasound with Doppler: normal testicular flow and parenchyma; may show enlarged, hyperechoic or hypoechoic paratesticular structure at the upper pole with absent internal flow (the torsed appendix). "
      "Normal testicular flow EXCLUDES testicular torsion, the main concern. "
      "Surgical exploration is reserved for cases where testicular torsion cannot be confidently excluded. "
      "(5) Management. "
      "Torsion of the appendix testis is SELF-LIMITED — no surgical intervention required if testicular torsion is confidently excluded. "
      "Conservative: NSAIDs, scrotal support, activity restriction, warm compresses or ice per preference. Symptoms typically resolve over 1-2 weeks as the appendix autoinfarcts and involutes. "
      "Surgical excision of the torsed appendix is occasionally performed for refractory pain or diagnostic uncertainty. "
      "Follow-up ultrasound is reasonable if clinical diagnosis was uncertain. "
      "Classic pitfalls: (a) missing testicular torsion in a boy with acute scrotum — always evaluate with Doppler ultrasound before concluding appendix testis torsion. "
      "(b) Over-operating on suspected appendix testis torsion. "
      "(c) Missing epididymitis in sexually active adolescents — treatment, partner notification, and STI screening. "
      "(d) Not counseling about recurrence — the contralateral appendix testis can torse. "
      "(e) Overlooking incarcerated inguinal hernia as another cause of acute scrotum in pediatric patients."
    )
  },

  "toxic-ingestion": {
    "diagnosis": "Acute Acetaminophen Overdose",
    "coachFinal": (
      "Diagnosis: acute acetaminophen overdose — a common but potentially fatal toxic ingestion. "
      "Key learning: "
      "(1) Acetaminophen (paracetamol) is the most common medication overdose in the US and a leading cause of acute liver failure in developed countries. "
      "Toxic dose: >150 mg/kg or >7.5 g in adults; chronic toxicity can occur at lower doses in malnourished patients, alcohol use disorder, CYP-inducing medications (phenytoin, carbamazepine, rifampin, INH), and fasting states. "
      "Mechanism: acetaminophen is mostly conjugated to safe glucuronide/sulfate; a small fraction (~5%) is oxidized by CYP2E1 to NAPQI, which is detoxified by glutathione. In overdose, glutathione is depleted, and NAPQI causes centrilobular hepatic necrosis. "
      "(2) Four clinical stages of acetaminophen toxicity. "
      "Stage 1 (0-24 hours) — mild nausea, vomiting, malaise, or asymptomatic. Deceptively benign. "
      "Stage 2 (24-72 hours) — RUQ pain, hepatomegaly, rising AST/ALT and INR as hepatotoxicity manifests. "
      "Stage 3 (72-96 hours) — peak hepatotoxicity; acute liver failure (coagulopathy, encephalopathy, hypoglycemia, metabolic acidosis); possible death. "
      "Stage 4 (4 days-2 weeks) — recovery (most patients) or death. "
      "(3) Assessment and Rumack-Matthew nomogram. "
      "Timing of ingestion is critical — the nomogram is valid only for a single acute ingestion with known timing (4-24 hours post-ingestion). "
      "Draw acetaminophen level at 4 hours post-ingestion (or immediately if later). "
      "Plot level on nomogram; above the treatment line = treat with NAC. "
      "Special situations requiring empiric NAC (nomogram does not apply or is unreliable): "
      "- Unknown time of ingestion. "
      "- Massive ingestion (>24-30 g). "
      "- Staggered ingestion (multiple times). "
      "- Extended-release formulation (delayed peak). "
      "- Signs of hepatotoxicity (elevated AST/ALT). "
      "- Chronic therapeutic supratherapeutic dosing. "
      "- Pregnancy (transplacental toxicity). "
      "Check at baseline: acetaminophen level, AST/ALT, INR, BMP, glucose, ABG, lactate, salicylate level (common co-ingestant), ethanol, and urine pregnancy test. "
      "(4) Treatment — N-ACETYLCYSTEINE (NAC) is the antidote. "
      "NAC replenishes glutathione, directly binds NAPQI, and has other hepatoprotective effects. "
      "Most effective within 8-10 hours of ingestion, but still beneficial at any time including established liver injury. "
      "IV 21-hour protocol: 150 mg/kg over 1 hour, then 50 mg/kg over 4 hours, then 100 mg/kg over 16 hours. "
      "Oral 72-hour protocol: 140 mg/kg loading, then 70 mg/kg q4h x 17 doses. "
      "EXTEND NAC BEYOND 21 HOURS if: elevated transaminases, abnormal INR (>1.3), persistent acetaminophen detectable, or encephalopathy. "
      "Adverse effects of IV NAC: anaphylactoid reactions (usually mild; slow infusion, antihistamines; rarely stop NAC). "
      "(5) Supportive care and liver failure management. "
      "Monitor: LFTs, INR, glucose, BMP, lactate every 6-12 hours initially. "
      "Consider transfer to liver transplant center for: King's College criteria met (pH <7.3 after resuscitation; OR PT >100 sec + creatinine >3.4 + grade III/IV encephalopathy), or rapidly worsening hepatic function. "
      "Avoid acidosis, hypoglycemia, hypothermia; consider ICU admission. "
      "Charcoal 50 g PO within 1-2 hours of acute ingestion if patient can protect airway. "
      "Psychiatric evaluation for any intentional overdose, safety planning, means restriction, and disposition coordination. "
      "Classic pitfalls: (a) stopping NAC at 21 hours in a patient with rising LFTs or coagulation abnormalities. "
      "(b) Missing delayed toxicity in staggered ingestion — nomogram does not apply; treat based on history and LFT trend. "
      "(c) Not checking salicylate and acetaminophen levels in every overdose. "
      "(d) Forgetting the psychiatric, safety planning, and social follow-up components. "
      "(e) Over-reliance on nomogram in non-qualifying cases — low threshold for empiric NAC."
    )
  },

  "type-2-mi": {
    "diagnosis": "Type 2 Myocardial Infarction (Demand Ischemia — Severe Anemia with AFib/RVR)",
    "coachFinal": (
      "Diagnosis: Type 2 myocardial infarction from demand ischemia, precipitated by severe anemia with atrial fibrillation with rapid ventricular response. "
      "Key learning: "
      "(1) The Universal Definition of Myocardial Infarction (4th UDMI, 2018) classifies MI into five types by mechanism: "
      "(a) Type 1 — plaque rupture or erosion with thrombosis (the 'classic' ACS). "
      "(b) Type 2 — supply-demand mismatch (increased demand or decreased supply) in the absence of acute plaque event: sepsis, tachyarrhythmia, severe anemia, hypotension, hypoxemia, severe hypertension, coronary artery spasm. "
      "(c) Type 3 — sudden cardiac death before troponin rise. "
      "(d) Type 4a — PCI-related (troponin >5x URL). "
      "(e) Type 4b — stent thrombosis. "
      "(f) Type 5 — CABG-related (troponin >10x URL). "
      "Type 2 MI is more common than Type 1 in older hospitalized patients but is clinically under-recognized. "
      "(2) Diagnosis requires: myocardial necrosis (troponin rise and fall) with clinical evidence of myocardial ischemia (symptoms, ECG changes, imaging abnormalities) AND an identified supply-demand imbalance rather than acute plaque event. "
      "Troponin alone, without ischemic context, is 'myocardial injury' not MI — both CKD patients and septic patients can have elevated troponin without MI. "
      "(3) Common triggers of Type 2 MI. "
      "Increased demand: tachyarrhythmia (AF with RVR, SVT, VT), severe hypertension, hyperthermia, thyrotoxicosis. "
      "Decreased supply: severe anemia, hypotension/shock, hypoxemia (PE, pneumonia, severe COPD), severe aortic stenosis, coronary spasm (cocaine, methamphetamine). "
      "Combined: sepsis (all three — hypoperfusion, tachycardia, metabolic stress). "
      "Underlying fixed coronary stenosis often predisposes; purely normal coronaries can develop Type 2 MI with severe enough mismatch. "
      "(4) Management. "
      "The fundamental principle: TREAT THE UNDERLYING CAUSE, not primarily the MI. "
      "Type 2 MI management emphasizes: "
      "(a) Correct supply-demand imbalance: rate control AF, transfuse for anemia, treat sepsis, correct hypoxia, treat hypertension/hypotension, address arrhythmia. "
      "(b) Anti-ischemic therapy (beta-blocker, nitrates) when appropriate and no contraindication. "
      "(c) Antiplatelet (aspirin) and statin for secondary prevention of atherosclerotic disease if present. "
      "(d) DO NOT reflexively give DAPT (dual antiplatelet therapy) and proceed to cath as in Type 1 — unnecessary and increases bleeding risk. "
      "(e) Echocardiogram to assess LV function and structural disease. "
      "(f) Consider coronary imaging (coronary CT, invasive angiography) when suspicion for underlying CAD is high or when symptoms persist after correcting the trigger. "
      "(5) Prognosis and long-term. "
      "Type 2 MI has high 1-year mortality (up to 30%) because it occurs in sick patients with multiple comorbidities. "
      "Mortality is often from the precipitating illness, not the MI itself. "
      "Long-term management: address underlying vascular disease (statin, BP, DM, smoking), optimize heart failure if LV dysfunction present, treat any provoking arrhythmia definitively (rate or rhythm control, anticoagulation as appropriate for AF), and routine cardiovascular risk factor optimization. "
      "Classic pitfalls: (a) not distinguishing Type 1 from Type 2 and reflexively activating cath lab — unnecessary and risky if mechanism is actually demand. "
      "(b) Missing important Type 1 ACS because anemia or other trigger is also present. "
      "(c) Not treating the underlying trigger (AF rate control, anemia transfusion). "
      "(d) Labeling troponin rise in CKD, sepsis, tachycardia as 'just a troponin bump' — if ischemic symptoms or ECG changes, it's MI. "
      "(e) Forgetting to evaluate for bleeding as cause of anemia (GI bleed, occult malignancy, menorrhagia)."
    )
  },

  "type2-diabetes-outpatient": {
    "diagnosis": "Type 2 Diabetes — Outpatient Optimization and GLP-1 Initiation",
    "coachFinal": (
      "Diagnosis: suboptimally controlled type 2 diabetes mellitus requiring outpatient management optimization with GLP-1 receptor agonist initiation. "
      "Key learning: "
      "(1) Type 2 diabetes management has transformed in the past decade — the goal is no longer just glycemic control but cardiovascular and renal risk reduction using agents with proven outcomes benefit. "
      "Target A1c individualized: ~7% for most, tighter (6.5%) for young/healthy, looser (8%) for elderly, multiple comorbidities, limited life expectancy, or high hypoglycemia risk. "
      "(2) First-line therapy remains metformin for most patients (unless contraindicated — eGFR <30, decompensated heart failure, active alcohol use disorder with liver disease). "
      "Metformin offers: A1c reduction 1-2%, weight neutrality, no hypoglycemia alone, CV safety, low cost. "
      "Side effects: GI (lower with extended-release), rare lactic acidosis, vitamin B12 deficiency over time (check B12 annually). "
      "(3) Second-line agent selection is now heavily driven by comorbidities (ADA/EASD 2024 consensus): "
      "(a) Established ASCVD, heart failure, or CKD with albuminuria: add SGLT2 inhibitor (empagliflozin, dapagliflozin, canagliflozin) OR GLP-1 receptor agonist (semaglutide, dulaglutide, liraglutide, tirzepatide) — both classes reduce CV events and mortality; SGLT2i especially for HF and CKD. "
      "(b) Weight loss goal prominent: GLP-1 RA (semaglutide — oral or injectable; liraglutide; tirzepatide as dual GIP/GLP-1 agonist — most potent). Weight loss 5-15% achievable. "
      "(c) Cost constraint: sulfonylureas or basal insulin (effective but cause weight gain and hypoglycemia). "
      "(d) Avoid hypoglycemia priority: DPP-4 inhibitors, SGLT2i, GLP-1 RA, thiazolidinediones. "
      "(4) GLP-1 receptor agonists — detail. "
      "Mechanism: incretin mimetic — increases glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, reduces appetite centrally. "
      "A1c reduction: 1-2%. "
      "Weight loss: 5-15%. "
      "CV outcomes: reduction in MACE in patients with established CV disease (LEADER, SUSTAIN-6, REWIND). "
      "Renal benefit: reduced albuminuria, slower CKD progression. "
      "Side effects: GI (nausea, vomiting, diarrhea — often transient; start low and titrate slowly), rare pancreatitis, contraindicated in personal or family history of medullary thyroid cancer or MEN 2. "
      "Administration: weekly SQ (semaglutide, dulaglutide) or daily (liraglutide, oral semaglutide) or weekly (tirzepatide). "
      "Cost and coverage highly variable — prior authorization often required. "
      "Avoid GLP-1 with DPP-4 inhibitor (no additive benefit, same pathway). "
      "(5) Comprehensive diabetes management beyond glycemic control. "
      "Cardiovascular: BP control (<130/80), statin for all patients 40-75 with diabetes (moderate intensity; high intensity for ASCVD), aspirin for established CVD, smoking cessation. "
      "Renal: ACE-I/ARB for albuminuria or hypertension; finerenone for CKD with albuminuria; SGLT2i. "
      "Retinal: annual eye exam. "
      "Foot: annual comprehensive exam; education on foot care. "
      "Neuropathic: screening; duloxetine, pregabalin, gabapentin for painful neuropathy. "
      "Mental health: depression screening annually. "
      "Vaccinations: annual influenza, pneumococcal, HBV, zoster, COVID. "
      "Dietary: Mediterranean or DASH diet pattern; dietitian referral when available. "
      "Physical activity: >=150 min moderate or >=75 min vigorous aerobic plus 2-3 sessions of resistance training. "
      "Diabetes self-management education and support (DSMES) — underutilized but high-yield. "
      "Classic pitfalls: (a) treating A1c in isolation without addressing CV and renal risk. "
      "(b) Continuing sulfonylureas and basal insulin as 'second-line' when newer agents reduce CV events and cause weight loss instead of gain. "
      "(c) Not screening for diabetic complications annually. "
      "(d) Over-restricting diet and unrealistic goals — diabetes fatigue is real. "
      "(e) Forgetting to coordinate with endocrinology, cardiology, nephrology, ophthalmology."
    )
  },

  "unstable-angina": {
    "diagnosis": "Unstable Angina (Non-ST-Elevation Acute Coronary Syndrome)",
    "coachFinal": (
      "Diagnosis: unstable angina — a non-ST-elevation acute coronary syndrome without troponin elevation. "
      "Key learning: "
      "(1) Acute coronary syndrome (ACS) spans a spectrum based on ECG and biomarkers: "
      "(a) STEMI — ST elevation on ECG, transmural infarction, emergent reperfusion. "
      "(b) NSTEMI — no ST elevation but troponin elevation (myocardial necrosis). "
      "(c) Unstable angina — anginal symptoms at rest or crescendo pattern but no troponin elevation. "
      "The distinction between UA and NSTEMI has narrowed with high-sensitivity troponin assays, and most patients previously classified as UA would now have some troponin elevation. "
      "(2) Clinical features. "
      "Classic: substernal chest pressure/pain radiating to left arm, neck, or jaw, associated with diaphoresis, nausea, dyspnea. "
      "Atypical (common in women, elderly, diabetics): dyspnea, fatigue, epigastric pain, indigestion, jaw pain, atypical chest pain quality. "
      "Unstable features: new-onset angina (within 2 months) with significant intensity, crescendo angina (worsening frequency, duration, severity, or threshold), angina at rest. "
      "(3) Initial workup. "
      "(a) Serial ECGs (baseline and every 15-30 minutes during chest pain) — look for dynamic ST depression, T-wave inversion; compare to prior. "
      "(b) High-sensitivity troponin at presentation and at 1-3 hours (0/1h or 0/2h algorithms rule in or out MI efficiently). "
      "(c) Bedside echocardiography for LV function and wall motion. "
      "(d) CXR for heart failure, alternate diagnoses. "
      "(e) CBC, BMP, lipid panel, PT/PTT, type and screen. "
      "(f) Risk scoring: HEART score (ED), TIMI score, GRACE score. "
      "(4) Management. "
      "Antiplatelet therapy: "
      "- Aspirin 325 mg chewed loading, then 81 mg daily indefinitely. "
      "- P2Y12 inhibitor — ticagrelor or prasugrel preferred over clopidogrel in ACS. "
      "Anticoagulation: unfractionated heparin OR enoxaparin OR bivalirudin (during PCI for selected patients). "
      "Anti-ischemic: nitrates (caution with RV infarct, PDE-5 use, hypotension), beta-blocker (unless contraindicated), calcium channel blocker (for symptom control when beta-blocker contraindicated). "
      "High-intensity statin (atorvastatin 80 mg or rosuvastatin 40 mg). "
      "ACE-I or ARB for LV dysfunction, hypertension, diabetes, CKD — reduces remodeling. "
      "Invasive strategy timing: "
      "- Very high-risk (hemodynamic instability, refractory angina, life-threatening arrhythmia, mechanical complication): immediate angiography (<2 hours). "
      "- High-risk (rising troponin, dynamic ST changes, elevated GRACE): early (<24 hours). "
      "- Intermediate: <72 hours. "
      "- Low-risk: ischemia-guided (stress testing or outpatient evaluation). "
      "(5) Discharge and long-term. "
      "Dual antiplatelet therapy (aspirin + P2Y12 inhibitor) for 12 months after PCI with stent (shorter in high bleeding risk; longer in recurrent events). "
      "Cardiac rehabilitation referral reduces mortality, hospitalization, and depression — highly underutilized. "
      "Address modifiable risk factors: tobacco, BP, LDL (target <55-70 in established CVD), diabetes, obesity, activity, mental health. "
      "Return precautions and symptom recognition. "
      "Follow-up within 1-2 weeks for medication adherence, side effects, and functional status. "
      "Classic pitfalls: (a) missing ACS in women, elderly, diabetics with atypical symptoms — low threshold for ECG and troponin. "
      "(b) Failing to perform serial ECGs — dynamic changes may be missed on a single snapshot. "
      "(c) Stopping DAPT prematurely after stenting — stent thrombosis often fatal. "
      "(d) Not using high-intensity statin in ACS regardless of baseline LDL — major mortality benefit. "
      "(e) Underutilizing cardiac rehab and smoking cessation counseling."
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
