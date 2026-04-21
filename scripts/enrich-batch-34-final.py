#!/usr/bin/env python3
"""Batch 34 — FINAL BATCH (10 cases): completes all 134 originally-remaining legacy cases.

Cases: upper-gi-bleed, uremic-encephalopathy, ureterolithiasis,
       vascular-injury-with-limb-ischemia, vasovagal-syncope, viral-meningitis,
       vitreous-hemorrhage, vocal-cord-dysfunction, wpw-syndrome, xla-brutons
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {

  "upper-gi-bleed": {
    "diagnosis": "Upper GI Bleed — Risk Stratification and Management",
    "coachFinal": (
      "Diagnosis: upper gastrointestinal (GI) bleed requiring structured risk stratification and management. "
      "Key learning: "
      "(1) Upper GI bleeding (UGIB) is defined as bleeding proximal to the ligament of Treitz and presents with hematemesis (bright red blood or coffee-ground emesis), melena (black tarry stools), or occasionally hematochezia in massive bleeds. "
      "Etiologies: peptic ulcer disease (most common, ~40-50% — H. pylori, NSAIDs, stress ulceration), esophageal or gastric varices (portal hypertension — distinct management), Mallory-Weiss tear (after retching/vomiting), esophagitis, Dieulafoy lesion, gastric or esophageal cancer, AV malformation (including angiodysplasia), aortoenteric fistula (in patients with AAA repair), and medication-related (anticoagulants, NSAIDs, steroids). "
      "(2) Risk stratification. "
      "Glasgow-Blatchford score (GBS) at presentation: BUN, Hgb, SBP, HR, melena, syncope, liver disease, heart failure. "
      "Score 0-1 identifies very low-risk patients who may be managed outpatient (outside the US, commonly used). "
      "Rockall score (pre- and post-endoscopic) predicts mortality. "
      "Clinical severity: hemodynamic instability, active ongoing bleeding, advanced age, comorbidities, and coagulopathy define higher-risk patients needing urgent intervention. "
      "(3) Initial management. "
      "(a) Resuscitation: two large-bore IVs, crystalloid resuscitation, blood products (pRBCs for hemodynamic instability or Hgb <7 — <8 for cardiac ischemia; restrictive thresholds improve outcomes in UGIB per Villanueva et al.). "
      "(b) Airway protection for severe hematemesis or altered mental status. "
      "(c) NPO. "
      "(d) IV proton pump inhibitor (pantoprazole 80 mg bolus then 8 mg/hr infusion, or 40 mg BID) — reduces rebleed and surgery in ulcer bleeding. "
      "(e) Prokinetic (erythromycin or metoclopramide IV) before endoscopy — improves mucosal visualization by clearing gastric contents. "
      "(f) Correct coagulopathy and reverse anticoagulants (see elsewhere). "
      "(g) Hold antiplatelets and anticoagulants; decision about restarting made individually based on indication and rebleed risk. "
      "(h) Consultation with GI for urgent endoscopy (within 24 hours for most UGIB; within 12 hours for suspected variceal bleed). "
      "(4) Specific management by cause. "
      "Peptic ulcer bleeding: endoscopic hemostasis (epinephrine injection, thermal coagulation, clips, powder spray) for active bleeding (Forrest Ia/Ib) or visible vessel (Forrest IIa); continue PPI infusion; H. pylori testing and eradication; discontinue NSAIDs. "
      "Variceal bleeding: octreotide 50 mcg bolus then 50 mcg/hr infusion (reduces portal pressure); ceftriaxone or norfloxacin for prophylaxis against SBP in cirrhotics; endoscopic band ligation or sclerotherapy; TIPS for refractory; balloon tamponade (Blakemore, Minnesota) as last-resort bridge. "
      "Mallory-Weiss tear: usually self-limited; endoscopic clips for active bleeding. "
      "Massive rebleeding or failure of endoscopic therapy: interventional radiology embolization, surgery as last resort. "
      "Aortoenteric fistula: extremely lethal; emergent vascular/surgery consultation, massive transfusion, OR. "
      "(5) Post-bleed. "
      "Secondary prevention: PPI for ulcer history, variceal prevention with non-selective beta-blocker (propranolol, nadolol) and repeat banding, smoking cessation, alcohol cessation, NSAID avoidance, H. pylori eradication confirmation. "
      "Discuss restarting antiplatelets/anticoagulants — resume as soon as bleeding risk acceptable, typically within days to weeks depending on indication. "
      "Classic pitfalls: (a) under-resuscitating or transfusing too liberally — target Hgb 7 in most cases, 8 for cardiac. "
      "(b) Missing variceal bleeding as etiology in cirrhotic patients — treatment is different (octreotide, antibiotic prophylaxis, early endoscopy). "
      "(c) Holding PPI while awaiting endoscopy — start early. "
      "(d) Not searching for aortoenteric fistula in a patient with prior AAA repair presenting with GI bleed — mortality >90% if missed; emergent CTA. "
      "(e) Discharging without follow-up plan: H. pylori test, PPI duration, medication reconciliation, endoscopic surveillance for Barrett's or ulcer healing in appropriate cases."
    )
  },

  "uremic-encephalopathy": {
    "diagnosis": "Uremic Encephalopathy from Missed Dialysis (ESRD)",
    "coachFinal": (
      "Diagnosis: uremic encephalopathy from missed dialysis (×4 sessions) in ESRD, with BUN >120, hyperkalemia, metabolic acidosis, volume overload, uremic pericarditis, and altered mental status with asterixis. "
      "Key learning: "
      "(1) Uremic encephalopathy is a neurologic manifestation of advanced renal failure, caused by accumulation of uremic toxins (urea, guanidinosuccinic acid, middle molecules, parathyroid hormone, and others) that affect synaptic function, neurotransmission, and cerebral metabolism. "
      "Develops subacutely over days as BUN rises, typically at BUN >100 but highly variable between patients — some tolerate higher levels while rapid rises cause symptoms at lower numbers. "
      "(2) Clinical presentation is a continuum. "
      "Early: fatigue, anorexia, nausea, difficulty concentrating, sleep disturbance, mild cognitive impairment. "
      "Intermediate: ASTERIXIS ('liver flap' — non-rhythmic flapping of outstretched hands, also seen in hepatic encephalopathy and CO2 retention), mild confusion, slurred speech, tremor, myoclonus. "
      "Late: obtundation, coma, seizures (generalized tonic-clonic), muscle twitching, and death. "
      "Other uremic manifestations: pericarditis (friction rub, chest pain, hemorrhagic effusion, tamponade), uremic bleeding diathesis (platelet dysfunction), bleeding ulcers, peripheral neuropathy, and uremic frost (rare). "
      "(3) Workup — the diagnosis is clinical once other causes are excluded. "
      "Labs: BUN, creatinine (markedly elevated from baseline), electrolytes (hyperkalemia, hyperphosphatemia, hypocalcemia, acidosis), calcium, magnesium, glucose, ammonia (to rule out hepatic encephalopathy), LFTs, CBC. "
      "Rule out other causes of altered mental status: medications (especially renally cleared drugs accumulating — opioids, gabapentin, baclofen, beta-blockers), infections, electrolyte derangements, hypoxia, hypoglycemia, intracranial pathology (CT head when in doubt), drug overdose or withdrawal. "
      "ECG for hyperkalemia changes, pericarditis (diffuse PR depression, ST elevation). "
      "(4) Management. "
      "(a) EMERGENT HEMODIALYSIS is the definitive treatment — rapidly clears uremic toxins, corrects hyperkalemia, acidosis, and volume overload. "
      "Use caution with rate of dialysis to avoid dialysis disequilibrium syndrome (DDS) — cerebral edema from osmotic shifts when dialysis is done too aggressively; use short, frequent sessions initially in severe uremia. "
      "(b) Treat hyperkalemia per standard algorithm (calcium for membrane stabilization if ECG changes, insulin/dextrose, albuterol, bicarbonate, binders, ultimately dialysis). "
      "(c) Volume management — usually volume overloaded; dialysis removes fluid. "
      "(d) Uremic pericarditis — an indication for intensification of dialysis; large pericardial effusion with tamponade requires pericardiocentesis. Heparin should be avoided during dialysis in uremic pericarditis (hemorrhagic transformation risk). "
      "(e) Identify and address cause of missed dialysis: transportation, psychosocial, financial, depression, substance use. "
      "(f) Address comorbid conditions: medication reconciliation (renal dose adjustments), infection screen, nutritional optimization. "
      "(5) Long-term. "
      "Patient education and support for dialysis adherence — social work, case management, transportation resources. "
      "Home dialysis alternatives (peritoneal dialysis, home hemodialysis) may improve adherence and outcomes. "
      "Transplant evaluation for appropriate candidates. "
      "Advance care planning in patients with multiple complications, poor quality of life, or expressed preferences. "
      "Classic pitfalls: (a) dialyzing too quickly in severe uremia and causing dialysis disequilibrium syndrome — use shorter, more frequent sessions initially. "
      "(b) Missing another cause of altered mental status in an ESRD patient — ESRD patients have higher rates of stroke, subdural hematoma (from uremic bleeding and falls), and medication toxicity. "
      "(c) Attributing mental status changes to uremia in a patient with BUN of only 60 — likely another cause. "
      "(d) Giving renally cleared drugs at full dose — gabapentin, opioids (especially morphine), metformin, and many others accumulate in renal failure. "
      "(e) Forgetting uremic pericarditis — requires intensification of dialysis, not just standard management; anticoagulation during dialysis is often avoided or reduced."
    )
  },

  "ureterolithiasis": {
    "diagnosis": "Ureterolithiasis with Obstruction",
    "coachFinal": (
      "Diagnosis: ureterolithiasis (ureteral stone) with urinary obstruction. "
      "Key learning: "
      "(1) Most urinary stones that cause acute colic are ureteral — passed from the renal pelvis and lodging at one of three natural narrowings: ureteropelvic junction, where ureter crosses the iliac vessels, or ureterovesical junction (the most common site for obstruction, ~60-70% of lodged stones). "
      "Stone composition: calcium oxalate (70-80%), calcium phosphate, uric acid (radiolucent, acidic urine, hyperuricemia, gout), struvite (infection-related staghorn calculi with urease-producing bacteria), and cystine (rare, genetic). "
      "Lifetime prevalence 10-15% in men, 6-8% in women; recurrence rate ~50% within 10 years without prevention. "
      "(2) Clinical presentation: sudden severe unilateral flank pain radiating to the groin, labial/testicular referred pain, restlessness (writhing — contrast with peritonitis where patients lie still), nausea, vomiting, dysuria, frequency, urgency, and gross or microscopic hematuria. "
      "Fever suggests concurrent infection (pyelonephritis, urosepsis) — a critical finding. "
      "(3) Workup. "
      "Imaging: non-contrast CT abdomen/pelvis (low-dose protocol when possible) is the gold standard — identifies stone, location, size, hydronephrosis, and alternative diagnoses (AAA, appendicitis). "
      "Ultrasound (first-line in pregnancy or pediatrics): identifies hydronephrosis and proximal stones but less sensitive for ureteral stones, particularly mid-ureter. "
      "Labs: urinalysis (hematuria, leukocytes suggest infection), urine culture, CBC, BMP, calcium, uric acid. "
      "(4) Management. "
      "(a) Pain control: NSAIDs (ketorolac 15-30 mg IV or ibuprofen PO) are first-line and more effective than opioids for colic when renal function allows; opioids (morphine, hydromorphone) for refractory pain. "
      "IV acetaminophen alternative. "
      "(b) Antiemetics, hydration (oral or modest IV — aggressive fluid forcing does NOT help passage). "
      "(c) Medical expulsive therapy (MET) with alpha-blocker (tamsulosin 0.4 mg daily) for distal ureteral stones 5-10 mm — modest benefit, not recommended for smaller stones. "
      "(d) Strain urine to capture passed stone for analysis. "
      "(5) Size and intervention. "
      "Stones <5 mm: ~90% pass spontaneously — outpatient management with pain control, hydration, strain urine, and close follow-up. "
      "Stones 5-10 mm: ~50% pass; tamsulosin helpful; prolonged observation reasonable if uncomplicated. "
      "Stones >10 mm: unlikely to pass — plan urologic intervention (ureteroscopy with laser lithotripsy most common; shock wave lithotripsy for selected; percutaneous nephrolithotomy for large renal stones). "
      "URGENT UROLOGIC DECOMPRESSION for: "
      "- Urosepsis with obstruction (pyonephrosis — medical emergency with high mortality). "
      "- Solitary kidney with obstruction. "
      "- Bilateral obstruction with AKI. "
      "- Intractable pain or vomiting. "
      "- Obstruction persisting >4 weeks (risk of permanent renal damage). "
      "Decompression: ureteral stent (cystoscopic placement) or percutaneous nephrostomy. "
      "Long-term prevention: 24-hour urine metabolic workup in recurrent stone formers; hydration (target urine output >2-2.5 L/day); dietary modification (normal calcium intake — do NOT restrict; reduce sodium and animal protein; reduce oxalate if hyperoxaluric); pharmacologic (thiazide for hypercalciuria, potassium citrate for hypocitraturia/uric acid stones, allopurinol for hyperuricosuric, urinary alkalinization for uric acid/cystine). "
      "Classic pitfalls: (a) missing urosepsis with obstruction ('infected obstructed stone') — fever + flank pain + hydronephrosis requires IV antibiotics AND emergent decompression; delay can cause septic shock. "
      "(b) Attributing flank pain in an older man to 'stone' without imaging — miss ruptured AAA, pyelonephritis, or other serious cause. "
      "(c) Over-hydrating with IV fluids — does not speed passage. "
      "(d) Missing metabolic workup in recurrent stone formers — lost opportunity for prevention. "
      "(e) Discharging without stone analysis and metabolic evaluation after second episode — 50% recurrence rate is reducible."
    )
  },

  "vascular-injury-with-limb-ischemia": {
    "diagnosis": "Popliteal Artery Injury with Acute Limb Ischemia (Post-Supracondylar Femur Fracture)",
    "coachFinal": (
      "Diagnosis: popliteal artery injury with acute limb ischemia from displaced supracondylar femur fracture after high-speed MVC. "
      "Key learning: "
      "(1) Vascular injury is a critical complication of lower-extremity trauma, particularly at anatomic 'tethering points' where arteries are relatively fixed: popliteal artery in posterior knee (supracondylar femur fracture, knee dislocation — up to 20-30% with popliteal injury, the highest of any joint dislocation), common femoral artery in groin, brachial artery in elbow, and axillary artery in shoulder dislocation. "
      "Acute limb ischemia from vascular injury is a time-critical emergency — warm ischemia time of 6 hours is the classic threshold before irreversible tissue injury, though skin and subcutaneous tissue tolerate longer than muscle and nerve. "
      "(2) Classic 'hard signs' of vascular injury (any one warrants emergent operative intervention): "
      "(a) Active pulsatile bleeding. "
      "(b) Absent distal pulses. "
      "(c) Expanding or pulsatile hematoma. "
      "(d) Audible bruit or palpable thrill. "
      "(e) Distal ischemia (5 Ps: pain, pallor, paresthesias, pulselessness, poikilothermia). "
      "'Soft signs' (stable hematoma, proximity of wound to vessel, minor isolated distal pulse deficit with normal ABI, history of significant bleeding at scene, injury at anatomic hazard point) warrant workup but not immediate OR. "
      "(3) Workup. "
      "Ankle-brachial index (ABI) or Injured Extremity Index (comparing injured to uninjured limb): <0.9 is abnormal in adults and suggests vascular injury; 100% sensitivity and >95% specificity when combined with clinical exam. "
      "CT angiography: definitive imaging — identifies arterial injury, level, extent, and guides operative planning. "
      "Conventional angiography historically the gold standard, now reserved for intraoperative assessment or interventional repair. "
      "Duplex ultrasound: operator-dependent, less sensitive for small injuries. "
      "(4) Management. "
      "(a) Airway, breathing, circulation (polytrauma workup) — vascular injury does not take precedence over airway or massive central bleeding. "
      "(b) Reduce and immobilize fractures and dislocations — can restore perfusion if vascular compromise is from mechanical compression; reassess pulses after reduction. "
      "(c) Emergent vascular surgery consultation for revascularization — options include primary repair, vein interposition graft (reversed saphenous vein most common), prosthetic graft (less preferred due to infection risk), endovascular stent (for selected injuries). "
      "(d) Concurrent orthopedic stabilization — often damage control with external fixation first, definitive ORIF after vascular repair. "
      "(e) Prophylactic FASCIOTOMY of all four compartments of the leg at time of repair — prolonged ischemia with reperfusion risks compartment syndrome from reperfusion edema. "
      "(f) Anticoagulation during and after repair (heparin intraop, then antiplatelet post-op) to maintain graft patency. "
      "(g) IV antibiotics for open injury and surgical prophylaxis. "
      "Reperfusion monitoring: compartment pressures, creatine kinase (rhabdomyolysis), potassium (reperfusion hyperkalemia), acid-base (reperfusion acidosis). "
      "(5) Prognosis and complications. "
      "Amputation rate for popliteal injury: 10-25% overall, with higher rates if ischemia >6 hours, concurrent severe nerve injury (tibial or peroneal nerve), severe soft tissue loss, or infection. "
      "Outcomes improve substantially with organized trauma system approach, rapid diagnosis, and prompt revascularization. "
      "Long-term: graft patency surveillance with duplex ultrasound, rehabilitation for motor and sensory deficits, management of possible chronic pain. "
      "Classic pitfalls: (a) accepting 'palpable pulse' or 'normal Doppler' as sole evidence of vascular integrity — always check ABI and have low threshold for CTA in knee dislocation, supracondylar femur fractures, and any soft-sign injuries. "
      "(b) Delaying revascularization for full orthopedic fixation — vascular takes priority in limb-threatening ischemia; use damage control orthopedics. "
      "(c) Omitting fasciotomy — compartment syndrome after revascularization can cost the limb. "
      "(d) Missing concurrent nerve injury (peroneal, tibial) — poor functional outcome even with patent vascular repair. "
      "(e) Forgetting that 'spontaneous reduction' of a knee dislocation doesn't exclude vascular injury — any suspected knee dislocation should have ABI and vascular imaging even if the knee has reduced before arrival."
    )
  },

  "vasovagal-syncope": {
    "diagnosis": "Vasovagal Syncope (Situational, Post-Phlebotomy)",
    "coachFinal": (
      "Diagnosis: vasovagal syncope (neurally mediated syncope / neurocardiogenic syncope) triggered by phlebotomy, with classic prodrome and compounded by mild iron deficiency anemia. "
      "Key learning: "
      "(1) Syncope — transient loss of consciousness with spontaneous rapid recovery — has a critical differential: "
      "(a) Reflex (neurally mediated) syncope: vasovagal (most common; emotional, orthostatic, post-prandial, situational — micturition, defecation, cough, phlebotomy, pain), carotid sinus hypersensitivity. "
      "(b) Orthostatic syncope: volume depletion, autonomic failure, medications (see orthostatic case). "
      "(c) Cardiac syncope: arrhythmia (VT, VF, SVT, high-grade AV block, sinus pauses, long QT, Brugada, ARVC, WPW), structural heart disease (aortic stenosis, HCM, pulmonary embolism, aortic dissection, cardiac tamponade), or ischemia. "
      "(d) Non-syncope mimics: seizure, hypoglycemia, stroke/TIA, psychogenic pseudosyncope. "
      "Distinguishing cardiac syncope is critical because it has the highest mortality risk. "
      "(2) Vasovagal syncope features. "
      "Triggers: orthostatic stress, pain, emotional distress, medical procedures (phlebotomy, dental, injections), prolonged standing, heat, crowded places. "
      "Classic prodrome (can last seconds to minutes): lightheadedness, nausea, diaphoresis, pallor, tunnel vision, 'graying out', warmth, and feeling of impending loss of consciousness. "
      "Post-syncope: brief symptoms usually resolve within seconds to minutes; transient muscle jerking may occur (can be mistaken for seizure but lacks postictal confusion). "
      "(3) Red flags for cardiac syncope: syncope without prodrome (sudden, unpredictable), syncope during exercise (dangerous — aortic stenosis, HCM, long QT, CPVT), palpitations preceding syncope, family history of sudden cardiac death, known structural heart disease, abnormal ECG, injuries from fall. "
      "Any of these warrant cardiology evaluation, echocardiogram, and often event monitoring or electrophysiology study. "
      "(4) Workup. "
      "History and witness account are the most important diagnostic tools. "
      "ECG in all patients — look for arrhythmia, conduction disease, long QT (QTc >450 in men, >460 in women), Brugada pattern, WPW, hypertrophy. "
      "Labs: CBC (anemia), BMP, glucose, beta-hCG, troponin if ischemia suspected, D-dimer if PE suspected. "
      "Orthostatic vitals, bedside cardiac monitoring. "
      "Further workup for suspected cardiac: echocardiogram, event monitor or implantable loop recorder, stress testing, tilt-table testing (useful in recurrent reflex syncope when diagnosis is unclear), electrophysiology study. "
      "(5) Management. "
      "Vasovagal syncope: reassurance and education are the cornerstone — this is usually a benign condition. "
      "(a) Avoid triggers when possible. "
      "(b) Prodromal counter-maneuvers: lying down, leg crossing, handgrip, squatting — abort impending episode. "
      "(c) Adequate salt and fluid intake (unless hypertensive). "
      "(d) Compression stockings and abdominal binders. "
      "(e) Gradual rising, avoid prolonged standing. "
      "(f) Pharmacologic options for recurrent/severe cases: fludrocortisone, midodrine, SSRIs, beta-blockers (controversial — conflicting evidence). "
      "(g) Dual-chamber pacemakers for select patients with severe cardioinhibitory type (prolonged asystole) unresponsive to other measures. "
      "Address comorbidities: treat iron deficiency anemia, ensure hydration, review medications. "
      "Driving and occupation counseling based on severity and cause. "
      "Classic pitfalls: (a) attributing all syncope to vasovagal without checking ECG or considering cardiac causes — missed long QT, Brugada, or high-grade block can be fatal. "
      "(b) Missing exertional syncope — always serious; aortic stenosis, HCM, cardiac channelopathy. "
      "(c) Confusing convulsive syncope (brief myoclonic jerks during loss of consciousness) with seizure — no postictal state, no tongue biting, rapid recovery. "
      "(d) Not addressing reversible contributors — anemia, dehydration, medications. "
      "(e) Forgetting the 'first syncope rule' for older adults or those with cardiac risk — admission for monitoring and workup is often warranted."
    )
  },

  "viral-meningitis": {
    "diagnosis": "Viral (Enteroviral) Meningitis",
    "coachFinal": (
      "Diagnosis: viral meningitis, most commonly enteroviral. "
      "Key learning: "
      "(1) Meningitis is inflammation of the meninges, with bacterial, viral, fungal, parasitic, and non-infectious causes. "
      "Viral (aseptic) meningitis is the most common form overall, generally much less severe than bacterial, and most patients recover fully with supportive care. "
      "Enteroviruses (coxsackievirus, echovirus, enterovirus 71, polio historically) account for 80-90% of viral meningitis. "
      "Other causes: HSV (particularly HSV-2 recurrent meningitis, Mollaret meningitis; HSV-1 meningoencephalitis more serious), mumps, VZV, EBV, HIV (seroconversion), West Nile virus, and arboviruses. "
      "(2) Clinical presentation overlaps with bacterial meningitis. "
      "Classic triad (fever, neck stiffness, altered mental status) present in only 50-60% of cases. "
      "Other features: severe headache, photophobia, phonophobia, nausea/vomiting, Kernig and Brudzinski signs (limited sensitivity), and in enteroviral meningitis, often prodromal GI or respiratory symptoms and summer/fall seasonality. "
      "In contrast, bacterial meningitis tends to have more rapid progression, more profound alteration of consciousness, petechial rash (meningococcemia), and systemic toxicity. "
      "The clinical distinction can be difficult — LP is required. "
      "(3) Lumbar puncture findings (compared with bacterial). "
      "Viral: WBC typically 10-1,000 (often 50-300), LYMPHOCYTE-predominant (can be neutrophil-predominant very early — repeat LP in 6-12 hours may show shift), elevated protein (usually <100-200), normal glucose (usually >50% of serum glucose), negative Gram stain. "
      "Bacterial: WBC often >1,000 (often 1,000-10,000), NEUTROPHIL-predominant, protein often >200, glucose often <40 or <50% of serum, positive Gram stain in ~60-90%. "
      "Fungal/mycobacterial: lymphocyte-predominant, elevated protein, low glucose. "
      "(4) Workup. "
      "History (travel, exposures, vaccines, immunocompromise). "
      "Imaging: CT head before LP if focal neurologic deficits, new seizures, altered mental status, papilledema, immunocompromise, or >60 years old (per IDSA) — not in all patients. "
      "LP with opening pressure, cell count and differential, protein, glucose (simultaneous serum glucose), Gram stain and bacterial culture, viral PCR panel (enterovirus, HSV, VZV, West Nile as appropriate), cryptococcal antigen and fungal workup in immunocompromised. "
      "Blood cultures. "
      "(5) Management. "
      "(a) EMPIRIC BACTERIAL MENINGITIS TREATMENT until ruled out — DO NOT withhold antibiotics pending LP or PCR in a clinically ill patient. Ceftriaxone 2 g IV q12h PLUS vancomycin (S. pneumoniae coverage); add ampicillin in >50 years old or immunocompromised (Listeria). Add acyclovir if HSV encephalitis suspected. "
      "(b) Dexamethasone 10 mg IV q6h initiated with or just before first antibiotic dose (in suspected bacterial meningitis, especially pneumococcal — reduces mortality and neurologic complications). "
      "(c) Once viral meningitis is confirmed (negative Gram stain, lymphocyte-predominant CSF, appropriate PCR positive): supportive care with analgesia, hydration, antiemetics, rest; discontinue empirical antibiotics. "
      "Most enteroviral meningitis resolves within 7-10 days. "
      "(d) Specific antiviral therapy: acyclovir for HSV, VZV; CMV agents for CMV; no proven therapy for most enteroviruses (pleconaril withdrawn from development). "
      "(e) Follow-up — most patients recover fully without sequelae. Rare complications: hearing loss, focal deficits, seizures. "
      "Classic pitfalls: (a) delaying antibiotics for LP or imaging — give empiric antibiotics immediately if bacterial meningitis suspected; LP can be done promptly or after imaging per protocol. "
      "(b) Missing HSV encephalitis (distinct from HSV meningitis) — altered mental status, focal deficits, seizures, temporal lobe involvement on MRI; acyclovir empirically because mortality is high if untreated. "
      "(c) Misinterpreting early neutrophilic pleocytosis as bacterial — repeat LP in 6-12 hours often shows lymphocytic shift in viral. "
      "(d) Missing meningitis in elderly patients or immunocompromised with atypical presentation (confusion without classic signs). "
      "(e) Forgetting post-exposure prophylaxis for close contacts of bacterial meningitis (meningococcus — ciprofloxacin, rifampin, ceftriaxone for household and close contacts)."
    )
  },

  "vitreous-hemorrhage": {
    "diagnosis": "Vitreous Hemorrhage from Proliferative Diabetic Retinopathy",
    "coachFinal": (
      "Diagnosis: vitreous hemorrhage secondary to untreated proliferative diabetic retinopathy. "
      "Key learning: "
      "(1) Vitreous hemorrhage is blood in the normally clear vitreous cavity, causing sudden visual disturbance ranging from floaters ('cobwebs', 'spots') to complete vision loss depending on severity. "
      "Etiologies: "
      "(a) Proliferative diabetic retinopathy (most common — abnormal fragile neovessels bleed into vitreous). "
      "(b) Posterior vitreous detachment (PVD) with retinal tear (common — as vitreous detaches, retinal vessels can tear). "
      "(c) Retinal vein occlusion (especially branch retinal vein occlusion). "
      "(d) Trauma. "
      "(e) Retinal macroaneurysm. "
      "(f) Sickle cell retinopathy. "
      "(g) Terson syndrome (vitreous hemorrhage associated with subarachnoid hemorrhage — increased ICP rupturing peripapillary vessels). "
      "(h) Anticoagulation — exacerbates bleeding but rarely causes it alone. "
      "(2) Proliferative diabetic retinopathy (PDR) pathophysiology. "
      "Chronic hyperglycemia damages retinal microvasculature → capillary non-perfusion and ischemia → VEGF-driven neovascularization at the optic disc and elsewhere. "
      "New vessels are fragile, leak, and bleed into the vitreous. "
      "Fibrovascular proliferation contracts, causing tractional retinal detachment — a sight-threatening complication. "
      "Screening: annual dilated fundus exam in all diabetic patients (sooner after diagnosis for T2DM given possible pre-existing disease; within 5 years for T1DM). "
      "(3) Presentation. "
      "Sudden onset floaters, blurring, vision loss, or a 'curtain' or 'rain' of dots — patients often describe a sudden 'cloud' obscuring vision. "
      "Pain is usually absent (distinguishes from angle-closure glaucoma, endophthalmitis). "
      "Visual acuity varies from near-normal (small hemorrhage) to light perception only (dense hemorrhage). "
      "Red reflex may be absent or diminished on penlight exam. "
      "Fundus exam obscured by blood — dilated exam by ophthalmologist is diagnostic. "
      "(4) Workup and evaluation. "
      "Ophthalmologic examination: visual acuity, slit-lamp, intraocular pressure, dilated fundus exam. "
      "B-scan ultrasound when view is obscured — identifies retinal detachment, tumor, or underlying pathology. "
      "Bloodwork: A1c (essential for diabetic patients), CBC, coagulation, BP. "
      "Fluorescein angiography and OCT once hemorrhage clears. "
      "(5) Management. "
      "(a) Urgent ophthalmology consultation — within 24 hours for any sudden vision loss. "
      "(b) Elevate head of bed, limit physical activity (to allow blood to settle and clear), avoid anticoagulants and antiplatelets when not medically necessary. "
      "(c) Address modifiable risk factors — BP control, glycemic control, anticoagulation review (in patients with cardiac indications, usually continued with close monitoring — not stopped without clear benefit). "
      "(d) Specific treatment of PDR: "
      "- Anti-VEGF intravitreal injections (aflibercept, ranibizumab, bevacizumab) — reduce neovascularization, accelerate clearance of vitreous hemorrhage. "
      "- Panretinal photocoagulation (PRP) — laser treatment to reduce ischemic drive; historical standard, still important. "
      "- Pars plana vitrectomy — for non-clearing vitreous hemorrhage, tractional retinal detachment, or when underlying pathology can't be assessed after 1-3 months. "
      "(e) Address concurrent diabetic macular edema — anti-VEGF injections, focal laser. "
      "(f) Underlying diabetes management: intensive glycemic control (target A1c <7% when safe), BP control, lipid management, regular follow-up. "
      "Classic pitfalls: (a) attributing sudden vision loss in a diabetic to 'just floaters' without urgent ophthalmology referral — delayed diagnosis of underlying PDR or retinal detachment loses vision. "
      "(b) Not screening diabetic patients regularly — many present with vision-threatening PDR having never had dilated eye exam. "
      "(c) Missing Terson syndrome — vitreous hemorrhage plus altered mental status or severe headache should prompt evaluation for SAH. "
      "(d) Stopping anticoagulation reflexively — decisions should balance bleeding in the eye against thromboembolic risk. "
      "(e) Forgetting the systemic vasculopathy — patients with PDR have high rates of concurrent cardiovascular, cerebrovascular, and renal disease; address comprehensively."
    )
  },

  "vocal-cord-dysfunction": {
    "diagnosis": "Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion)",
    "coachFinal": (
      "Diagnosis: vocal cord dysfunction (VCD), also called paradoxical vocal fold motion (PVFM) — an asthma mimic. "
      "Key learning: "
      "(1) VCD is an upper airway disorder characterized by paradoxical vocal cord adduction during inspiration, causing inspiratory or biphasic stridor, dyspnea, cough, throat tightness, and voice changes — often misdiagnosed and treated as asthma for years. "
      "Patient demographics: classically affects young women, athletes, and individuals with anxiety or vocal strain; can coexist with asthma in up to 40%. "
      "Triggers: exercise, strong odors and irritants (perfume, cleaning chemicals), stress, postnasal drip, GERD, upper respiratory infection, and occasionally cold air. "
      "(2) Distinguishing VCD from asthma. "
      "Features favoring VCD: inspiratory symptoms more than expiratory (asthma is predominantly expiratory), upper airway tightness (throat, neck), stridor rather than wheeze, acute onset and rapid resolution, poor response to bronchodilators, normal SpO2 during episodes, absence of nocturnal symptoms, absence of atopic triad. "
      "Flow-volume loop shows flattening of the INSPIRATORY limb (extrathoracic variable obstruction pattern) in contrast to asthma's expiratory flattening. "
      "Laryngoscopy during an episode is diagnostic — shows adduction of the vocal cords during inspiration with a posterior 'diamond-shaped' glottic chink. "
      "Asthma and VCD can coexist — don't exclude asthma based on VCD diagnosis. "
      "(3) Workup. "
      "Pulmonary function testing with flow-volume loops: flattened inspiratory limb (variable extrathoracic obstruction) in VCD; asthma shows expiratory abnormalities (concave down-sloping expiratory limb, reversible with bronchodilator). "
      "Methacholine challenge — typically negative in pure VCD, positive in asthma. "
      "Laryngoscopy — direct visualization at rest and during provocation is the gold standard; flexible fiberoptic nasendoscopy in the clinic. "
      "Exercise challenge or mannitol/methacholine provocation can reproduce symptoms. "
      "Workup for comorbid triggers: GERD evaluation, rhinitis/postnasal drip assessment, allergy testing, psychiatric evaluation. "
      "(4) Treatment. "
      "(a) ACUTE EPISODE management: reassurance (anxiety worsens VCD), distraction, pursed-lip breathing, panting breaths, 'sniffing' breaths through the nose, heliox (helium-oxygen mixture — reduces airway resistance and work of breathing in severe episodes). "
      "AVOID reflexive administration of nebulized albuterol and systemic steroids (no benefit in pure VCD, and can reinforce 'asthma' misdiagnosis). "
      "(b) LONG-TERM management: "
      "- Speech therapy with a speech-language pathologist specialized in VCD (laryngeal control techniques, relaxed-throat breathing, diaphragmatic breathing) — MAINSTAY of treatment, highly effective. "
      "- Trigger identification and avoidance. "
      "- Treatment of concurrent GERD (PPI if indicated), rhinitis (nasal corticosteroid, saline), and anxiety/depression if present (CBT, SSRIs as appropriate). "
      "- Botulinum toxin injection into thyroarytenoid muscle — second-line for refractory cases. "
      "- Avoid chronic systemic steroids and excessive asthma medications (common iatrogenic harm in misdiagnosed VCD). "
      "(5) Classic pitfalls: (a) persistent misdiagnosis as 'asthma' — patients often have years of escalating asthma therapy with inadequate response before VCD is recognized; think of VCD in 'treatment-resistant asthma' and in stridulous episodes. "
      "(b) Sedating or intubating a patient with acute VCD exacerbation — many episodes resolve with reassurance and breathing techniques; intubation is rarely necessary. "
      "(c) Not evaluating for concurrent asthma — coexistence is common, and both conditions need addressing. "
      "(d) Missing GERD and laryngopharyngeal reflux as chronic irritants and triggers — treat aggressively. "
      "(e) Forgetting the psychological component and speech therapy referral — these are the most effective interventions and are often underutilized."
    )
  },

  "wpw-syndrome": {
    "diagnosis": "Wolff-Parkinson-White Syndrome with Pre-Excited SVT and Exercise-Induced Syncope",
    "coachFinal": (
      "Diagnosis: Wolff-Parkinson-White (WPW) syndrome with pre-excited SVT causing exercise-induced syncope, left-sided accessory pathway, documented orthodromic AVRT. "
      "Key learning: "
      "(1) WPW syndrome is congenital pre-excitation from an accessory atrioventricular pathway (AP) — a muscular bridge (most commonly left lateral, then posteroseptal, then right free wall) that conducts impulses from atrium to ventricle bypassing the AV node. "
      "'WPW pattern' is the asymptomatic ECG finding; 'WPW syndrome' is pre-excitation with clinical arrhythmia. "
      "Prevalence ~1-3 per 1000; most patients are asymptomatic, but a subset have tachyarrhythmias and a small but real sudden cardiac death risk. "
      "(2) Classic ECG triad: short PR interval (<120 ms), delta wave (slurred upstroke of QRS from early ventricular pre-excitation), and wide QRS (>120 ms from fusion of early and normal activation). "
      "Localizing the AP based on delta wave axis and morphology: left-sided APs have negative delta in lead I and aVL; right-sided APs have positive delta in lead I; posteroseptal in inferior leads. "
      "(3) Arrhythmias in WPW. "
      "(a) ORTHODROMIC AVRT (most common, ~80% of WPW tachyarrhythmias) — narrow-complex SVT; impulse goes down AV node and up the accessory pathway. Treat as SVT: vagal maneuvers, adenosine, beta-blocker, calcium channel blocker. "
      "(b) ANTIDROMIC AVRT (~5-10%) — wide-complex tachycardia; impulse goes down the accessory pathway and up the AV node. Can mimic VT. "
      "(c) PRE-EXCITED ATRIAL FIBRILLATION (dangerous, ~25-50% lifetime incidence in WPW) — chaotic atrial impulses conducted rapidly through the accessory pathway, which can produce irregular wide-complex tachycardia with rates >300 bpm and risk of VF. "
      "CRITICAL: avoid AV nodal blockers (adenosine, beta-blockers, calcium channel blockers, digoxin, amiodarone IV) in pre-excited AF — blocking the AV node drives more impulses through the accessory pathway and can precipitate VF. "
      "Treatment: electrical cardioversion for unstable; procainamide or ibutilide for stable. "
      "(4) Sudden cardiac death risk. "
      "WPW-related sudden death is rare (~0.1% per year) but a real concern, especially in young patients. "
      "Risk stratification: symptomatic patients (especially syncope, particularly exercise-induced), short refractory period of accessory pathway (<250 ms during AF — assessed at EP study), multiple accessory pathways, Ebstein anomaly. "
      "Exercise-induced syncope in WPW is a red flag. "
      "(5) Management. "
      "(a) Asymptomatic WPW pattern — observation is reasonable; risk stratification with EP study is increasingly recommended, especially for young patients, athletes, and those in certain occupations (aviation, commercial drivers) because ablation prevents the rare sudden death. "
      "(b) Symptomatic WPW — EP study and RADIOFREQUENCY CATHETER ABLATION of accessory pathway is CURATIVE with >95% success rate and low complication rate in experienced hands. "
      "First-line therapy for most symptomatic WPW. "
      "(c) Medical therapy (when ablation not available or declined): flecainide or propafenone suppress AP conduction; avoid AV nodal blockers in pre-excited AF. "
      "(d) Counsel patients about avoiding AV nodal blockers until ablation. "
      "(e) Activity restrictions during evaluation — avoid competitive sports with unevaluated WPW and exertional syncope. "
      "Classic pitfalls: (a) giving adenosine or beta-blocker to a patient in pre-excited AF — drives ventricular response higher and can precipitate VF. "
      "(b) Missing WPW in ECG by not looking for delta wave — short PR without delta wave is LGL syndrome (not WPW). "
      "(c) Missing antidromic AVRT or pre-excited AF as the cause of wide-complex tachycardia in a young patient — treat as VT if uncertain (cardioversion, procainamide). "
      "(d) Not offering ablation to symptomatic WPW patient — curative, low-risk, widely available in experienced centers. "
      "(e) Forgetting that WPW can be lost to follow-up (as in this case) and patients can present acutely — any young patient with documented WPW and syncope warrants expedited EP evaluation."
    )
  },

  "xla-brutons": {
    "diagnosis": "X-Linked Agammaglobulinemia (XLA / Bruton's Agammaglobulinemia)",
    "coachFinal": (
      "Diagnosis: X-linked agammaglobulinemia (XLA), also called Bruton's agammaglobulinemia — a primary immunodeficiency. "
      "Key learning: "
      "(1) XLA is caused by mutations in Bruton tyrosine kinase (BTK), a signaling molecule essential for B-cell maturation beyond the pro-B cell stage. "
      "Result: near-absence of mature B cells in circulation, severely reduced or absent immunoglobulins (IgG, IgA, IgM), and recurrent bacterial infections. "
      "X-linked inheritance — affects almost exclusively males; female carriers typically asymptomatic. "
      "Incidence about 1 in 200,000 live male births. "
      "(2) Presentation. "
      "Typical onset: 6-9 months of age as maternal IgG wanes. "
      "Recurrent bacterial infections with encapsulated organisms: Streptococcus pneumoniae (sinusitis, otitis, pneumonia, meningitis), Haemophilus influenzae, Streptococcus pyogenes, Staphylococcus aureus. "
      "Gastrointestinal: Giardia lamblia, enteroviruses (persistent and difficult to eradicate), chronic diarrhea. "
      "Respiratory: chronic sinusitis, recurrent otitis media, bronchiectasis (late complication from recurrent pneumonia). "
      "Skin: pyoderma, ecthyma. "
      "Unique vulnerabilities: live viral vaccines (poliovirus vaccine historically caused vaccine-associated paralytic polio in XLA patients), enteroviral meningoencephalitis (difficult to eradicate), and chronic lung disease from recurrent infections. "
      "Physical exam: ABSENT or markedly hypoplastic tonsils, adenoids, and peripheral lymph nodes (hallmark finding) — absence of visible tonsils in a boy with recurrent infections should trigger workup. "
      "(3) Diagnostic workup. "
      "Immunoglobulin levels: IgG, IgA, IgM all markedly reduced or undetectable (IgG <200 typically). "
      "Flow cytometry of peripheral blood: <2% B cells (CD19+), T cells typically normal. "
      "BTK gene sequencing confirms diagnosis and identifies specific mutation. "
      "Protein analysis: absent BTK protein expression in monocytes by flow cytometry. "
      "Specific antibody response to vaccines (pneumococcal, tetanus, diphtheria): absent. "
      "Genetic counseling for family — female carriers can be identified with targeted mutation testing. "
      "(4) Treatment. "
      "(a) IMMUNOGLOBULIN REPLACEMENT is the mainstay — IVIG every 3-4 weeks OR subcutaneous immunoglobulin (weekly or more frequent) at doses 400-600 mg/kg monthly (adjusted to maintain trough IgG >500 mg/dL or higher based on infection frequency). "
      "Immunoglobulin therapy dramatically reduces infection rate and morbidity. "
      "(b) Prompt, aggressive treatment of infections — bacterial infections can be severe; low threshold for cultures, imaging, and broad-spectrum antibiotics. "
      "(c) PROPHYLACTIC antibiotics in selected patients with breakthrough infections — TMP-SMX, azithromycin. "
      "(d) NO LIVE VACCINES — oral polio vaccine, yellow fever, MMR, varicella, BCG, rotavirus are CONTRAINDICATED (household members should also avoid oral polio vaccine, now uncommon; MMR and varicella in household members are acceptable). "
      "Inactivated vaccines (inactivated polio — IPV, inactivated influenza, pneumococcal, meningococcal) are safe but often ineffective due to antibody deficiency; they can be given but don't substitute for immunoglobulin replacement. "
      "(e) Long-term lung disease management: aggressive treatment of pulmonary infections, chest physiotherapy, bronchodilators, HRCT surveillance for bronchiectasis, and pulmonary rehabilitation. "
      "(f) Surveillance for lymphoreticular malignancy (lymphoma, leukemia have modestly increased risk). "
      "(g) Hematopoietic stem cell transplant is rarely indicated — considered in severe cases with bronchiectasis progression or persistent enteroviral infection. "
      "BTK-targeted gene therapy is in clinical trials. "
      "(5) Long-term outcomes. "
      "With early diagnosis, immunoglobulin replacement, and prompt infection treatment, most patients have near-normal life expectancy with good quality of life. "
      "Complications: bronchiectasis (leading cause of long-term morbidity), chronic sinusitis, GI infections, psychological and social impact of chronic illness and regular infusions. "
      "Genetic counseling for family planning in affected men (all daughters obligate carriers; no sons affected) and for carrier women (50% of sons affected, 50% of daughters carriers). "
      "Classic pitfalls: (a) delayed diagnosis in a boy with recurrent ENT and pulmonary infections — check immunoglobulin levels and lymph node/tonsil size; absent tonsils is a key clue. "
      "(b) Giving live vaccines — can cause disseminated vaccine-strain disease. "
      "(c) Attributing chronic sinopulmonary disease to 'just asthma' or 'allergies' without considering immunodeficiency — recurrent otitis media beyond age 4-6, recurrent sinusitis, or recurrent pneumonia warrants immunologic evaluation. "
      "(d) Not escalating immunoglobulin dose in patients with breakthrough infections — target trough IgG levels, not minimum replacement. "
      "(e) Forgetting household contact considerations — counsel about vaccines, hygiene, and early evaluation for infections."
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
    print(f'\nBatch 34 FINAL: {done}/{len(ENRICHMENTS)} enriched')
