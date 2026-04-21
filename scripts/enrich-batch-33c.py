#!/usr/bin/env python3
"""Batch 33 — Part C (FINAL): 10 cases. Completes the enrichment.

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
      "Diagnosis: upper gastrointestinal bleed — a common emergency with distinct management pathways based on etiology and severity. "
      "Key learning: "
      "(1) Upper GI bleeding (UGIB) originates proximal to the ligament of Treitz. "
      "Common causes: peptic ulcer disease (most common, 30-50% — H. pylori and NSAIDs), esophageal varices (10-20% — cirrhotic portal hypertension), Mallory-Weiss tears (5-15% — after vomiting), erosive gastritis/esophagitis, Dieulafoy lesions, aortoenteric fistula (rare but catastrophic in patients with prior aortic surgery), and malignancy. "
      "Presentation: hematemesis (fresh blood or 'coffee grounds'), melena (tarry black stools — upper or slow lower GI source), hematochezia (bright red blood — massive UGIB can present this way), and features of hemodynamic compromise. "
      "(2) Initial assessment and resuscitation. "
      "ABCs first — intubate for altered mental status or massive hematemesis risking aspiration. "
      "Two large-bore IVs (18-gauge or larger), IV crystalloid resuscitation for hypotension, type and crossmatch, activate massive transfusion protocol for hemodynamic instability. "
      "Transfusion threshold: restrictive strategy (Hb 7 g/dL in most, 8 in cardiac disease, 9 in active ischemia) per Villanueva and subsequent trials — over-transfusion increases portal pressure in varices and is associated with worse outcomes. "
      "Correct coagulopathy (FFP for INR >2, platelets for <50,000, reverse anticoagulants appropriately — vitamin K, PCC for warfarin, andexanet or PCC for DOACs, protamine for heparin). "
      "NG lavage is not required but can help localize source and assess ongoing bleeding when uncertain. "
      "(3) Risk stratification tools. "
      "Glasgow-Blatchford Score (GBS) — pre-endoscopy; identifies very low-risk patients (score 0-1) who can be managed as outpatients. "
      "Rockall Score — includes endoscopic findings; predicts rebleeding and mortality. "
      "AIMS65 — another validated pre-endoscopy tool. "
      "(4) Management by cause. "
      "(a) Non-variceal UGIB (ulcer, gastritis): "
      "- IV PPI (pantoprazole 80 mg bolus then 8 mg/hr infusion, OR twice daily high-dose bolus) — PRIOR TO endoscopy reduces high-risk stigmata and need for intervention. "
      "- Upper endoscopy within 24 hours (6-12 hours for unstable patients). "
      "- Endoscopic therapy for high-risk stigmata (active bleeding, visible vessel, adherent clot): epinephrine injection PLUS a second modality (thermal coagulation, clips, or hemospray). "
      "- Interventional radiology (embolization) or surgery for failure of endoscopic therapy. "
      "- H. pylori testing and eradication; stop NSAIDs; oral PPI long-term based on indication. "
      "(b) Variceal UGIB (cirrhosis): "
      "- IV octreotide (splanchnic vasoconstriction) 50 mcg bolus then 50 mcg/hr infusion x 3-5 days. "
      "- Ceftriaxone 1 g IV daily prophylaxis (reduces mortality and rebleeding in cirrhotic UGIB — SBP prevention). "
      "- Urgent endoscopy within 12 hours with band ligation (preferred over sclerotherapy). "
      "- TIPS (transjugular intrahepatic portosystemic shunt) for failure of endoscopic control or recurrent bleeding. "
      "- Balloon tamponade (Sengstaken-Blakemore or Minnesota tube) as bridge to definitive therapy. "
      "- Non-selective beta-blocker (propranolol, carvedilol) secondary prophylaxis with repeat banding at intervals. "
      "(5) Complications and discharge. "
      "Aspiration pneumonia, rebleeding, ischemic complications from hypotension, transfusion reactions. "
      "In cirrhotic patients: SBP, hepatorenal syndrome, encephalopathy. "
      "Discharge: appropriate PPI (duration based on cause), H. pylori eradication verification, NSAID counseling, endoscopic follow-up per protocol, varices banding schedule and beta-blocker for cirrhotic. "
      "Classic pitfalls: (a) missing aortoenteric fistula in a patient with prior aortic graft who develops UGIB — 'herald bleed' precedes catastrophic exsanguination; endoscopy and CT angio urgently. "
      "(b) Over-transfusing in variceal bleeding — increases portal pressure, worsens bleeding. "
      "(c) Missing concurrent lower GI source when no clear upper source found — push enteroscopy, capsule endoscopy, or colonoscopy. "
      "(d) Discharging UGIB without PPI plan and H. pylori follow-through — recurrence rates high without proper prevention. "
      "(e) Not involving GI early — endoscopy timing and techniques affect outcome substantially."
    )
  },

  "uremic-encephalopathy": {
    "diagnosis": "Uremic Encephalopathy from Missed Dialysis (ESRD)",
    "coachFinal": (
      "Diagnosis: uremic encephalopathy in a patient with ESRD who missed multiple dialysis sessions, with BUN >120, hyperkalemia, metabolic acidosis, volume overload, and uremic pericarditis. "
      "Key learning: "
      "(1) Uremic encephalopathy is a manifestation of severely elevated uremic toxins affecting the central nervous system. "
      "It occurs in advanced CKD/ESRD, especially in missed dialysis, underdialysis, or acute decompensation. "
      "Symptoms span a spectrum: fatigue, apathy, insomnia, cognitive slowing (early), then confusion, disorientation, asterixis, myoclonus, hallucinations, obtundation, seizures, and coma (late). "
      "Correlated with BUN level (typically >100) but severity is not linearly related to any single solute. "
      "(2) Indications for dialysis in acute/subacute kidney failure — AEIOU mnemonic: "
      "(a) Acidosis — refractory metabolic acidosis (pH <7.1-7.2) not responding to medical therapy. "
      "(b) Electrolytes — life-threatening hyperkalemia refractory to medical management, severe hypercalcemia, severe hypermagnesemia. "
      "(c) Ingestions — salicylate, methanol, ethylene glycol, lithium, metformin-associated lactic acidosis. "
      "(d) Overload — fluid overload with pulmonary edema refractory to diuretics. "
      "(e) Uremia — uremic encephalopathy, uremic pericarditis, uremic bleeding (platelet dysfunction), severe uremic symptoms. "
      "(3) Uremic complications beyond encephalopathy. "
      "Uremic pericarditis — pericardial inflammation from uremic toxins; friction rub, chest pain (often pleuritic, positional), risk of effusion and tamponade; requires urgent dialysis and monitoring for tamponade (echocardiography, pulsus paradoxus). "
      "Uremic bleeding — platelet dysfunction (uremic toxins impair platelet adhesion and aggregation); manifests as mucocutaneous bleeding, prolonged bleeding time; treatments: DDAVP (releases endothelial vWF), cryoprecipitate, conjugated estrogens (slower onset), transfused platelets (transient benefit — platelets dysfunction soon after). "
      "Uremic neuropathy — sensorimotor peripheral neuropathy, restless legs; improves with adequate dialysis. "
      "Calciphylaxis — painful necrotic skin lesions from vascular calcification; morbidity high, challenging to treat. "
      "Renal osteodystrophy — bone disease from CKD-mineral bone disorder (CKD-MBD). "
      "(4) Management. "
      "Emergent hemodialysis — definitive treatment; plan within hours. "
      "For initial dialysis after prolonged uremia, use 'reduced intensity' (shorter duration, lower blood flow, smaller dialyzer) to avoid dialysis disequilibrium syndrome — rapid solute removal can cause cerebral edema (BUN drops faster in serum than intracranial CSF, driving water into brain). "
      "Concurrent management: correct hyperkalemia (calcium, insulin, albuterol, bicarbonate — see ESRD hyperkalemia case), treat volume overload (low-K dialysate, ultrafiltration), treat pericarditis (dialysis is the primary therapy; avoid NSAIDs), correct acidosis via dialysis (bicarbonate in dialysate). "
      "Avoid nephrotoxins (NSAIDs, contrast, aminoglycosides) in ESRD. "
      "(5) Discharge and long-term. "
      "Identify why dialysis was missed: transportation (arrange Medicaid transport, family support, nursing facility care if needed), depression/substance use screening, home vs in-center dialysis reconsideration, patient education. "
      "Social work involvement — many missed dialysis cases have remediable social determinants. "
      "Consider kidney transplant evaluation if candidate. "
      "Palliative care — for patients considering withdrawal of dialysis or with poor functional status. "
      "Classic pitfalls: (a) dialyzing too aggressively after prolonged uremia — dialysis disequilibrium with cerebral edema; mitigate with reduced intensity. "
      "(b) Missing uremic pericarditis with tamponade physiology — echo early. "
      "(c) Attributing encephalopathy to 'dementia' or 'delirium' without checking renal function and uremic toxin levels. "
      "(d) Not addressing why dialysis was missed — same problem will recur. "
      "(e) Forgetting hidden dietary potassium sources — salt substitutes, leafy greens, nuts, chocolate, star fruit (neurotoxic in ESRD)."
    )
  },

  "ureterolithiasis": {
    "diagnosis": "Ureterolithiasis (Obstructing Ureteral Stone)",
    "coachFinal": (
      "Diagnosis: obstructing ureteral stone causing renal colic. "
      "Key learning: "
      "(1) Ureteral stones are the common cause of renal colic — sudden severe unilateral flank pain radiating to the groin, often with nausea/vomiting, hematuria, and restlessness. "
      "Stone locations along the ureter: ureteropelvic junction (UPJ), crossing the iliac vessels, and ureterovesical junction (UVJ) are the three anatomic narrowings where stones tend to lodge. "
      "Pain pattern corresponds to location: proximal stones cause flank pain; mid-ureteral stones cause iliac fossa pain; UVJ stones cause suprapubic pain with lower urinary tract symptoms (frequency, urgency, dysuria). "
      "(2) Diagnosis. "
      "Non-contrast CT of the abdomen and pelvis (low-dose renal stone protocol) is the gold standard: identifies stone number, location, size; assesses for hydronephrosis; rules out alternative diagnoses. "
      "Ultrasound is a reasonable first-line option, especially in pregnancy, children, and to reduce radiation — identifies hydronephrosis and moderate-sized stones but misses small ureteral stones. "
      "KUB (X-ray) shows radiopaque stones (about 80% — calcium-containing) but misses radiolucent uric acid stones and soft tissue detail. "
      "Urinalysis — hematuria (80-90% — but absence does not exclude), leukocytes/nitrites suggest concurrent infection, crystals (uric acid, cystine). "
      "Labs: CBC (leukocytosis suggests infection), CMP (renal function, calcium), uric acid, PTH if recurrent. "
      "Stone analysis when stone recovered — drives prevention. "
      "(3) Acute management. "
      "Pain control: NSAIDs (ketorolac IV, ibuprofen PO — first-line, more effective than opioids and work on the renal physiology of colic); IV acetaminophen adjunct; opioids for refractory pain (morphine, hydromorphone). "
      "IV hydration to maintain urine output — but excessive fluid forcing does NOT speed stone passage. "
      "Antiemetics for nausea. "
      "Medical expulsive therapy (MET): alpha-blocker tamsulosin 0.4 mg daily for distal ureteral stones 5-10 mm — modest benefit (improves spontaneous passage rate about 10-15%); not beneficial for smaller stones. "
      "(4) Size and passage probability. "
      "Stones <5 mm: ~90% pass spontaneously — outpatient management with pain control and straining urine. "
      "Stones 5-10 mm: ~50% pass; tamsulosin helpful. "
      "Stones >10 mm: low spontaneous passage — plan urologic intervention. "
      "(5) Urgent urologic intervention indications. "
      "(a) Urosepsis with obstructing stone — MEDICAL EMERGENCY. Fever + flank pain + hydronephrosis = infected obstructed system (pyonephrosis) until proven otherwise; needs IV broad-spectrum antibiotics AND emergent decompression (ureteral stent or percutaneous nephrostomy) within 6-12 hours. Delay causes septic shock and high mortality. "
      "(b) Acute kidney injury from bilateral obstruction or obstruction in a solitary kidney. "
      "(c) Intractable pain or vomiting despite analgesia. "
      "(d) Large stone unlikely to pass. "
      "Definitive treatment (when stable): extracorporeal shock wave lithotripsy (ESWL), ureteroscopy with laser lithotripsy (URS — most common for ureteral stones now), or percutaneous nephrolithotomy (PCNL) for large renal stones. "
      "Long-term prevention (see renal colic case): 24-hour urine metabolic workup for recurrent stones, hydration >2-2.5 L urine/day, dietary counseling (normal calcium, reduced sodium and animal protein), pharmacologic (thiazide for hypercalciuria, potassium citrate for hypocitraturia and uric acid stones, allopurinol for hyperuricosuric calcium stones, urinary alkalinization for uric acid/cystine). "
      "Classic pitfalls: (a) missing infected obstruction — the most dangerous combination in stone disease. "
      "(b) Attributing flank pain to 'just a stone' without imaging in older men — AAA rupture can mimic renal colic. "
      "(c) Over-hydrating — does not speed passage, can worsen pain. "
      "(d) Forgetting to send stone for analysis — crucial for prevention strategy. "
      "(e) Not providing metabolic workup for recurrent stone formers — missed opportunity for targeted prevention."
    )
  },

  "vascular-injury-with-limb-ischemia": {
    "diagnosis": "Popliteal Artery Injury with Acute Limb Ischemia (Post-Trauma)",
    "coachFinal": (
      "Diagnosis: popliteal artery injury with acute limb ischemia following supracondylar femur fracture from high-speed MVC. "
      "Key learning: "
      "(1) Acute limb ischemia (ALI) is a surgical emergency defined by sudden decrease in limb perfusion threatening viability. "
      "Etiologies: embolic (cardiac — AF, LV thrombus, endocarditis; arterial proximal plaque), thrombotic (atherosclerotic plaque rupture, bypass graft thrombosis, hypercoagulable), traumatic (penetrating or blunt with vascular injury), iatrogenic (line, procedure), dissection, or compartment syndrome with secondary vascular compromise. "
      "(2) The popliteal artery is particularly vulnerable in supracondylar femur fractures and knee dislocations. "
      "Knee dislocation has up to 30% incidence of popliteal artery injury — may spontaneously reduce before evaluation. "
      "Any patient with knee dislocation (or reduced knee dislocation), supracondylar femur fracture, or penetrating knee trauma must have vascular assessment including pulse exam AND ankle-brachial index (ABI). "
      "ABI <0.9 or asymmetry mandates vascular imaging (CT angiography or formal angiography). "
      "(3) The six 'P's of acute limb ischemia — historical classic: "
      "Pain (initial, severe, out of proportion). "
      "Pallor (pale, waxy, mottled — later blue/cyanotic). "
      "Pulselessness (distal to occlusion). "
      "Paresthesias (progressive sensory loss). "
      "Paralysis (motor loss — LATE and ominous finding). "
      "Poikilothermia (cold). "
      "Rutherford classification stratifies severity: "
      "- Class I (viable) — not immediately threatened; mild sensory or motor deficit. "
      "- Class IIa (marginally threatened) — salvageable if promptly treated; sensory loss (toes) and muscle weakness absent or mild. "
      "- Class IIb (immediately threatened) — salvageable with urgent revascularization; sensory loss beyond toes, mild to moderate muscle weakness. "
      "- Class III (irreversible) — major tissue loss or permanent nerve damage inevitable; amputation. "
      "(4) Workup and management. "
      "(a) Immediate vascular surgery consultation. "
      "(b) Resuscitation, IV access, labs (CBC, CMP, lactate, CPK, coagulation, type and crossmatch), pain control. "
      "(c) Imaging: CT angiography is rapid and accurate for localization and planning; direct angiography in the OR/hybrid suite allows diagnosis and intervention simultaneously. "
      "(d) IV heparin (80 units/kg bolus then infusion) to prevent propagation of thrombus — unless contraindicated. "
      "(e) Revascularization within 6 hours (the classic 'golden window' — muscle begins to necrose after this; beyond 6 hours, risk of compartment syndrome, rhabdomyolysis, and irreversible damage increases). "
      "Options: surgical exploration with vascular repair (interposition graft, bypass, primary repair), endovascular therapy (thrombectomy, thrombolysis, stenting — selected for appropriate anatomy and patient), or amputation for Class III disease. "
      "(f) Orthopedic stabilization of the fracture — coordinate with vascular surgery; external fixation often used for damage control. "
      "(g) Fasciotomy prophylactically when ischemia >4-6 hours or obvious compartment syndrome to prevent reperfusion injury muscle death. "
      "(h) Post-revascularization monitoring: pulses, compartment pressures, CPK, renal function (rhabdomyolysis and AKI), cardiac monitoring (reperfusion hyperkalemia). "
      "(5) Long-term. "
      "Vascular repair patency monitoring; anticoagulation or antiplatelet therapy; physical therapy for limb function; address underlying CV risk factors. "
      "Patients with cardioembolic source require anticoagulation and source evaluation (echocardiography, rhythm monitoring). "
      "Classic pitfalls: (a) missing vascular injury in a reduced knee dislocation — always document pulses, ABI, and have low threshold for CTA even with 'normal' pulses. "
      "(b) Delaying revascularization for orthopedic stabilization — muscle viability window is hours; vascular repair should not wait. "
      "(c) Missing compartment syndrome (pain with passive stretch, firm compartments, sensory changes, pulses may still be present early) — compartment pressures or clinical exam mandate fasciotomy. "
      "(d) Not anticipating reperfusion syndrome — massive potassium/lactic acid/myoglobin release after restoring flow; monitor labs, prepare for hyperkalemia, CPK, renal failure. "
      "(e) Forgetting long-term CV workup in non-traumatic ALI — atherosclerosis, AF, and hypercoagulability evaluation essential."
    )
  },

  "vasovagal-syncope": {
    "diagnosis": "Vasovagal (Neurocardiogenic) Syncope",
    "coachFinal": (
      "Diagnosis: vasovagal (neurocardiogenic) syncope — the most common cause of syncope. "
      "Key learning: "
      "(1) Syncope is transient loss of consciousness due to global cerebral hypoperfusion, characterized by rapid onset, short duration, and spontaneous complete recovery. "
      "Causes are classified: "
      "(a) Reflex (neurally mediated) — vasovagal (most common), situational (cough, micturition, defecation, swallowing, phlebotomy, emotional), carotid sinus. "
      "(b) Orthostatic — volume depletion, autonomic failure, medications. "
      "(c) Cardiac — arrhythmia (bradycardia/AV block, tachyarrhythmia), structural (aortic stenosis, HCM, pulmonary embolism, atrial myxoma, pericardial tamponade). "
      "(d) Cerebrovascular (rare — vertebrobasilar TIA, subclavian steal). "
      "(2) Vasovagal syncope pathophysiology. "
      "Triggered by specific precipitants (prolonged standing, heat, fear, pain, sight of blood, phlebotomy, urination) or by the Bezold-Jarisch reflex. "
      "Mechanism: vagal activation causing bradycardia and peripheral vasodilation, leading to hypotension and cerebral hypoperfusion. "
      "Classic features — a CLASSIC PRODROME: warmth, nausea, diaphoresis, visual changes ('grayout' or tunnel vision), lightheadedness, feeling faint; lasts seconds to a minute before loss of consciousness. "
      "Loss of consciousness typically brief (seconds to 1-2 minutes), with rapid recovery and potentially some fatigue afterward. "
      "Absence of post-ictal confusion, focal deficits, or tongue biting — helps distinguish from seizure. "
      "Myoclonic jerks during syncope are common and can mimic seizure — 'convulsive syncope'. "
      "(3) Workup. "
      "History is the most important — characterize the episode, triggers, prodrome, recovery, and witnessed description. "
      "Physical exam including orthostatic vitals, cardiac exam, neurologic exam, and carotid auscultation. "
      "ECG is mandatory for all syncope — look for arrhythmia, conduction abnormalities (long QT, Brugada, WPW, AV block), ventricular hypertrophy, Q waves, right heart strain, prior MI. "
      "Additional testing based on suspicion: echocardiogram (if cardiac cause suspected), Holter or event monitor for suspected arrhythmia, tilt-table test for recurrent unexplained syncope, stress testing, MRI brain and EEG if seizure suspected. "
      "Lab: BMP, CBC, sometimes troponin, BNP, D-dimer, pregnancy test — as appropriate. "
      "(4) Risk stratification. "
      "Low-risk vasovagal syncope with clear prodrome, typical trigger, normal ECG, no structural heart disease, no family history of sudden death — outpatient management. "
      "High-risk features requiring admission or intensive workup: syncope during exertion, supine syncope, syncope with palpitations, abnormal ECG, structural heart disease, family history of sudden cardiac death, age >60, lack of prodrome, injury from syncope. "
      "Validated scores: San Francisco Syncope Rule, EGSYS, OESIL, Canadian Syncope Risk Score. "
      "(5) Management of vasovagal syncope. "
      "Education — understanding triggers and prodrome is the cornerstone; patients can often abort episodes with physical counter-pressure maneuvers (leg crossing, handgrip, arm tensing) during prodrome. "
      "Lifestyle: adequate hydration (2+ L/day), liberal salt (8-10 g/day), avoiding triggers (prolonged standing, heat, dehydration), regular exercise, tilt training. "
      "Pharmacologic options for refractory cases: fludrocortisone (expands volume), midodrine (alpha agonist — most evidence), SSRI (paroxetine), beta-blocker (evidence mixed; may help specific subsets). "
      "Pacemaker for selected patients with documented cardioinhibitory type (sinus arrest or AV block during syncope). "
      "Driving restrictions — vary by jurisdiction; most recommend 1-6 months abstinence after unexplained syncope. "
      "Classic pitfalls: (a) mislabeling cardiac syncope (with brief dizziness) as 'just vasovagal' — high-risk features warrant thorough cardiac workup. "
      "(b) Missing pulmonary embolism, aortic dissection, SAH, or ACS in a patient with 'syncope' — broader differential when features don't fit vasovagal. "
      "(c) Confusing convulsive syncope with seizure — leads to unnecessary AEDs. "
      "(d) Not counseling about physical counter-pressure maneuvers and lifestyle — dramatically reduces episodes. "
      "(e) Forgetting to address driving restrictions — medicolegal requirement."
    )
  },

  "viral-meningitis": {
    "diagnosis": "Viral (Enteroviral) Meningitis",
    "coachFinal": (
      "Diagnosis: viral (enteroviral) meningitis — a common, typically self-limited CNS infection. "
      "Key learning: "
      "(1) Meningitis is inflammation of the meninges, with three broad categories: bacterial (life-threatening, requires immediate antibiotics), viral/aseptic (usually benign and self-limited), and other (fungal, tuberculous, parasitic, noninfectious — autoimmune, drug-induced, malignancy). "
      "Viral meningitis accounts for about 75% of 'aseptic meningitis' cases in adults. "
      "Common causes: enteroviruses (coxsackievirus, echovirus — 85-90% of viral meningitis; peak summer/fall), HSV-2 (recurrent; some cases), HSV-1 (more commonly encephalitis), VZV (can cause both), mumps (rare post-vaccination), HIV (acute seroconversion), arboviruses (West Nile, Eastern/Western equine, La Crosse — seasonal, geographic). "
      "(2) Presentation. "
      "Classic triad: fever, headache, neck stiffness (meningismus). "
      "Additional features: photophobia, nausea/vomiting, malaise. "
      "Mental status is TYPICALLY PRESERVED in viral meningitis (helpful distinguishing feature from encephalitis, which involves parenchymal inflammation and alters mental status). "
      "Brudzinski sign (neck flexion causes hip/knee flexion) and Kernig sign (pain/resistance to knee extension with hip flexed) — specific but insensitive for meningeal irritation. "
      "(3) Lumbar puncture. "
      "Indicated for suspected meningitis; CT first if focal deficits, altered consciousness, papilledema, immunocompromise, recent seizure, coagulopathy (relative contraindication), or space-occupying symptoms to avoid herniation. "
      "CSF analysis: "
      "- Viral: lymphocytic pleocytosis (10-500 cells, PMN can predominate early), normal glucose, mildly elevated protein (<200 typically), negative Gram stain, negative routine culture. "
      "- Bacterial: marked PMN pleocytosis (often >1,000), LOW glucose (<40 or CSF:serum <0.4), HIGH protein (>200), positive Gram stain and culture. "
      "- TB/fungal: lymphocytic pleocytosis, very low glucose, very high protein, negative bacterial studies. "
      "PCR testing: HSV, enterovirus, VZV PCR on CSF for specific etiology identification. "
      "(4) Differential and management. "
      "If bacterial meningitis cannot be excluded clinically — give empiric IV antibiotics (ceftriaxone + vancomycin; add ampicillin for Listeria risk in elderly, neonates, immunocompromised) AND dexamethasone (reduces mortality and hearing loss in pneumococcal meningitis) IMMEDIATELY, before LP if needed. "
      "Do not delay antibiotics for imaging or LP in clinically concerning patient. "
      "Once CSF confirms viral pattern (with PCR if available): supportive care (hydration, analgesics, antipyretics, antiemetics). "
      "Acyclovir for HSV or VZV meningitis. "
      "No specific therapy for enteroviral meningitis (most common) — symptomatic treatment only. "
      "Observation to exclude encephalitis (altered mental status, seizures, focal deficits, behavioral changes) — would warrant empiric acyclovir pending HSV PCR. "
      "(5) Prognosis and prevention. "
      "Viral meningitis is typically self-limited — resolution within 7-14 days with full recovery. "
      "Monitor for complications: rare permanent neurologic deficits, seizures, hearing loss. "
      "Vaccination prevents some causes: MMR (mumps), varicella, HPV (some cervical cancers), COVID-19, influenza (rare meningitis complication). "
      "Hygiene for enteroviral prevention (hand washing, avoiding sharing personal items). "
      "Classic pitfalls: (a) treating as viral and discharging when bacterial cannot be excluded — the cost of missed bacterial meningitis is catastrophic; start empiric antibiotics and dexamethasone for any possibility. "
      "(b) Missing HSV encephalitis — altered mental status, focal temporal lobe signs, seizures; empiric acyclovir until PCR returns. "
      "(c) Missing acute HIV seroconversion syndrome — aseptic meningitis in a young adult; check HIV viral load (antibody may still be negative). "
      "(d) Not testing for Listeria in elderly/immunocompromised — ampicillin must be part of empiric regimen. "
      "(e) Forgetting noninfectious aseptic meningitis causes: drug-induced (NSAIDs, TMP-SMX, IVIG), autoimmune (Behcet, SLE, sarcoid), malignancy (carcinomatous meningitis)."
    )
  },

  "vitreous-hemorrhage": {
    "diagnosis": "Vitreous Hemorrhage from Proliferative Diabetic Retinopathy",
    "coachFinal": (
      "Diagnosis: vitreous hemorrhage secondary to untreated proliferative diabetic retinopathy (PDR). "
      "Key learning: "
      "(1) Vitreous hemorrhage is bleeding into the vitreous cavity — causing sudden painless visual impairment ranging from floaters to profound vision loss depending on amount and location. "
      "Common causes: "
      "(a) Proliferative diabetic retinopathy — neovascularization with fragile vessels rupture (most common cause). "
      "(b) Retinal tear and detachment — blood from torn retinal vessels. "
      "(c) Posterior vitreous detachment (PVD) — separating vitreous pulls on retinal vessels. "
      "(d) Retinal vein occlusion — especially with neovascularization. "
      "(e) Age-related macular degeneration (wet) — subretinal and sometimes vitreous hemorrhage. "
      "(f) Trauma. "
      "(g) Sickle cell retinopathy (especially hemoglobin SC). "
      "(h) Retinal artery macroaneurysm. "
      "(i) Terson syndrome (vitreous hemorrhage with intracranial hemorrhage). "
      "(2) Diabetic retinopathy progression. "
      "(a) Background (non-proliferative) DR (NPDR) — microaneurysms, dot/blot hemorrhages, hard exudates, cotton wool spots. "
      "(b) Severe NPDR — more extensive changes with IRMA (intraretinal microvascular abnormalities) and venous beading. "
      "(c) Proliferative DR (PDR) — NEOVASCULARIZATION (new vessel growth), which is fragile and bleeds. Can cause vitreous hemorrhage, traction retinal detachment, neovascular glaucoma (if vessels extend onto iris). "
      "(d) Diabetic macular edema (DME) — can occur at any stage, leading cause of vision loss in diabetes. "
      "Annual eye exam is standard for diabetic patients (type 1 starting 5 years after diagnosis; type 2 at diagnosis; more frequently with retinopathy). "
      "(3) Presentation and examination. "
      "Sudden painless visual changes: floaters (cobwebs, spots), decreased vision ranging from blurred to hand motion only, sometimes 'shower' of floaters. "
      "No pain or redness (helps distinguish from acute angle closure, uveitis, or endophthalmitis). "
      "Ophthalmologic examination: dilated fundus exam often limited by hemorrhage; B-scan ultrasound when view is poor — characterizes hemorrhage extent, identifies underlying retinal tear or detachment. "
      "IOP check (neovascular glaucoma is a serious complication). "
      "(4) Management. "
      "Urgent ophthalmology consultation/referral — ideally within 24 hours. "
      "Initial management: "
      "(a) Elevate head of bed (allows hemorrhage to settle inferiorly, improving superior visualization over time). "
      "(b) Avoid activities increasing intraocular pressure (Valsalva, heavy lifting, straining). "
      "(c) Avoid aspirin and anticoagulants if clinically feasible to reduce recurrent bleeding (discuss with prescriber; cardiac indications often outweigh eye concerns). "
      "(d) Mydriatic drops for fundus examination as directed by ophthalmology. "
      "Treatment of underlying cause: "
      "- Diabetic retinopathy: panretinal photocoagulation (PRP laser — causes regression of neovascularization) is the standard for PDR; intravitreal anti-VEGF injections (aflibercept, bevacizumab, ranibizumab) are increasingly first-line for macular edema and DR complications. "
      "- Retinal tears/detachment: laser barrier or cryotherapy; surgical repair if detachment. "
      "- Non-clearing vitreous hemorrhage (>1-3 months) or when view is needed for treatment: pars plana vitrectomy. "
      "Glycemic control, blood pressure control, and lipid management — modifiable risk factors that substantially reduce DR progression. "
      "(5) Prevention and long-term. "
      "Annual dilated eye exams (baseline at diagnosis for T2DM, 5 years after diagnosis for T1DM, more frequently with established retinopathy). "
      "Glycemic control (A1c target generally <7%; individualize for hypoglycemia risk, pregnancy, etc.). "
      "BP and lipid management. "
      "Smoking cessation. "
      "Pregnancy: retinopathy can progress during pregnancy — more frequent monitoring recommended. "
      "Classic pitfalls: (a) delaying ophthalmology evaluation — any sudden vision change warrants same-day or next-day evaluation. "
      "(b) Missing retinal detachment underlying the hemorrhage — B-scan ultrasound identifies; untreated detachment causes permanent vision loss. "
      "(c) Stopping cardiac aspirin/anticoagulation unnecessarily — individualize, discuss with prescriber. "
      "(d) Not addressing diabetic control and education during the acute episode — teachable moment. "
      "(e) Forgetting that neovascular glaucoma is a sight-threatening complication — IOP check and anti-VEGF/PRP urgent."
    )
  },

  "vocal-cord-dysfunction": {
    "diagnosis": "Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion)",
    "coachFinal": (
      "Diagnosis: vocal cord dysfunction (VCD, paradoxical vocal fold motion) — a respiratory condition that frequently mimics asthma. "
      "Key learning: "
      "(1) VCD is paradoxical adduction of the vocal cords during inspiration (and sometimes expiration), causing upper airway obstruction, dyspnea, stridor, and apparent respiratory distress. "
      "The condition is functional (not structural) and the larynx is anatomically normal between episodes. "
      "It commonly coexists with asthma (and is often misdiagnosed as refractory or severe asthma), anxiety, GERD, and postnasal drip. "
      "Triggers: exercise, strong odors, emotional stress, cold air, exposure to irritants. "
      "(2) Clinical features that distinguish VCD from asthma. "
      "(a) INSPIRATORY stridor/wheezing (asthma typically causes expiratory wheezing; VCD is predominantly inspiratory but can be biphasic). "
      "(b) Localized sensation — patients often point to their throat or neck as the site of 'tightness' rather than chest. "
      "(c) RAPID onset and offset — episodes start and end abruptly (asthma is more gradual). "
      "(d) Minimal response or no response to bronchodilators (key distinguishing feature — asthma typically responds). "
      "(e) Normal oxygenation even during severe-looking episodes (asthma usually has some hypoxia in severe attacks). "
      "(f) Voice changes — hoarseness, strained voice during or after episodes. "
      "(g) Frequent ED visits with 'severe asthma' but no consistent peak flow drops or clear response to standard therapy. "
      "(h) Often unremarkable PFTs between episodes; flow-volume loop during an episode shows TRUNCATED INSPIRATORY limb (extrathoracic obstruction pattern — normal expiratory limb, flattened inspiratory). "
      "(3) Diagnosis. "
      "Gold standard: LARYNGOSCOPY during symptomatic episode — shows paradoxical vocal cord adduction during inspiration. "
      "Provoking testing (e.g., exercise challenge with scope, methacholine challenge) may be needed because between episodes the larynx appears normal. "
      "PFT flow-volume loop may show truncation. "
      "Rule out structural lesions, anaphylaxis (especially with exercise), and true asthma (bronchodilator response, spirometry reversibility, FeNO). "
      "(4) Management. "
      "SPEECH-LANGUAGE PATHOLOGY (SLP) laryngeal control therapy is the cornerstone of treatment — rescue breathing techniques (pursed-lip breathing, sniffing, panting through the nose), posture, relaxation, and trigger management. "
      "Highly effective — most patients have dramatic reduction in episodes. "
      "Concurrent management: "
      "(a) Treat coexisting asthma, GERD, allergic rhinitis — often partially responsible for triggers. "
      "(b) Anxiety management (CBT, relaxation). "
      "(c) Botulinum toxin injection to vocal cords for refractory disease (rare). "
      "(d) Education — distinguishing VCD from asthma prevents over-medication (inhaled corticosteroids, systemic steroids, hospitalizations). "
      "For acute episodes: reassurance and breathing techniques. "
      "Heliox (helium-oxygen) can temporarily reduce inspiratory work in severe episodes. "
      "Avoid intubation when possible — often not needed despite dramatic appearance, and intubation can traumatize the larynx. "
      "(5) Classic pitfalls: (a) misdiagnosing VCD as 'severe asthma' — leads to inappropriate steroid use, excessive ED visits, and inhaler overreliance. "
      "(b) Intubating for an episode without recognizing VCD — can be difficult and can perpetuate the condition. "
      "(c) Not coordinating with SLP — specific laryngeal therapy is the highest-yield intervention. "
      "(d) Missing coexisting asthma — can occur concurrently; treat both. "
      "(e) Missing concurrent anxiety or panic disorder — often contributes to triggers; psychiatric care improves VCD. "
      "(f) Failing to educate the patient about the functional nature of the condition — many patients (and providers) find the diagnosis confusing or dismissive; clear explanation and connection to treatable nature is key."
    )
  },

  "wpw-syndrome": {
    "diagnosis": "Wolff-Parkinson-White (WPW) Syndrome with Pre-Excited SVT",
    "coachFinal": (
      "Diagnosis: Wolff-Parkinson-White syndrome with pre-excited SVT causing exertional syncope, left-sided accessory pathway. "
      "Key learning: "
      "(1) WPW syndrome is a congenital cardiac condition with an accessory pathway (bundle of Kent) connecting atria and ventricles, bypassing the AV node. "
      "Prevalence ~0.1-0.3% of the general population; most are asymptomatic. "
      "The accessory pathway allows early ventricular depolarization (pre-excitation), seen on ECG as: "
      "(a) Short PR interval (<120 ms). "
      "(b) Delta wave (slurred upstroke to QRS). "
      "(c) Wide QRS (>120 ms). "
      "(d) Secondary ST-T changes. "
      "Concealed pathways (conduct only retrograde) — no resting ECG findings but predispose to AV reentry tachycardia. "
      "(2) Arrhythmias in WPW. "
      "(a) Orthodromic AVRT (most common, 90-95% of arrhythmias) — atrial impulse conducts anterograde down AV node, retrograde up accessory pathway. Narrow complex regular tachycardia (QRS not pre-excited during AVRT). "
      "(b) Antidromic AVRT (less common) — anterograde down accessory pathway, retrograde up AV node. Wide complex regular tachycardia (fully pre-excited). "
      "(c) ATRIAL FIBRILLATION with pre-excitation — the most dangerous. Atrial impulses conduct rapidly down the accessory pathway without AV node slowing; very fast ventricular rates (sometimes >250-300 bpm) can degenerate to VF and sudden cardiac death. Characteristic ECG: IRREGULARLY IRREGULAR, wide QRS, rates >200, variable QRS width (different degrees of pre-excitation from beat to beat). "
      "(3) Acute management. "
      "Orthodromic AVRT (narrow complex, regular): "
      "- Vagal maneuvers (Valsalva, modified Valsalva with leg raise, carotid massage). "
      "- Adenosine 6 mg IV rapid push (may repeat with 12 mg) — usually terminates. "
      "- Second-line: IV beta-blocker or calcium channel blocker (diltiazem, verapamil) if stable. "
      "- Synchronized cardioversion if unstable. "
      "Antidromic AVRT or WPW with AFib: "
      "- AVOID AV nodal blocking agents (adenosine, diltiazem, verapamil, beta-blockers, digoxin) — blocking the AV node allows all impulses to go down the accessory pathway and can precipitate VF. "
      "- Use procainamide or ibutilide (sodium channel blocking antiarrhythmics) which slow the accessory pathway. "
      "- Synchronized cardioversion for hemodynamic instability (first-line for any WPW-AFib in many algorithms). "
      "(4) Long-term management. "
      "Catheter ablation of the accessory pathway is the definitive treatment — success rate 90-95% for most pathways, low complication rate. "
      "Indications for ablation: symptomatic arrhythmia, documented AFib with pre-excitation, high-risk occupations (pilots, drivers, divers), athletes, and patient preference. "
      "Asymptomatic patients with WPW ECG — risk stratification with electrophysiology study (looks at shortest pre-excited RR interval during AFib — <220-250 ms = high risk); ablation recommended for high-risk features. "
      "Medical therapy alone (when ablation not done): for orthodromic AVRT, beta-blocker or calcium channel blocker as prophylaxis; flecainide or propafenone for those without structural heart disease; avoid AV-nodal blocking agents alone in patients with documented AFib. "
      "(5) Sports and activity counseling. "
      "WPW is a recognized cause of sudden cardiac death in young athletes. "
      "Pre-participation screening and evaluation of any athlete with suspicious symptoms (palpitations, syncope, pre-syncope with exertion). "
      "Post-ablation — most patients can return to full activity after confirmation of success. "
      "Classic pitfalls: (a) giving adenosine to WPW with AFib — can precipitate VF. "
      "(b) Missing AFib with pre-excitation by calling it VT — the irregular rhythm and variable QRS morphology are clues; hemodynamic instability warrants cardioversion regardless of precise mechanism. "
      "(c) Not offering ablation to symptomatic patients — definitive cure is usually available. "
      "(d) Missing asymptomatic WPW on routine ECG — incidental finding in young patients warrants risk stratification. "
      "(e) Forgetting to counsel about sudden death risk, driving restrictions after syncope, and restricted competitive athletics until evaluation complete."
    )
  },

  "xla-brutons": {
    "diagnosis": "X-Linked Agammaglobulinemia (XLA, Bruton's Agammaglobulinemia)",
    "coachFinal": (
      "Diagnosis: X-linked agammaglobulinemia (XLA, Bruton's agammaglobulinemia) — a primary immunodeficiency affecting B-cell development. "
      "Key learning: "
      "(1) XLA is caused by mutations in BTK (Bruton tyrosine kinase), an enzyme essential for B-cell development. "
      "Inheritance: X-linked recessive — affects males almost exclusively (females are carriers); occurs in approximately 1 in 200,000 males. "
      "Pathophysiology: B-cell maturation arrests at the pro-B to pre-B cell stage; affected patients have absent or profoundly reduced mature B cells, essentially absent plasma cells, and markedly reduced immunoglobulin levels across all classes (IgG, IgA, IgM, IgE). "
      "T-cell and innate immunity are intact. "
      "(2) Clinical presentation. "
      "Typically presents at 6-12 months of age — symptoms emerge as maternal antibodies (transferred transplacentally) wane. "
      "Recurrent severe bacterial infections, especially of sino-pulmonary tract, skin, and bone — encapsulated organisms (Streptococcus pneumoniae, Haemophilus influenzae, Pseudomonas, Staphylococcus aureus). "
      "Gastrointestinal: chronic enteroviral infection, giardiasis, Campylobacter — can cause chronic diarrhea. "
      "ENT: recurrent otitis media, sinusitis, leading to bronchiectasis if untreated. "
      "Neurologic: chronic enteroviral encephalitis (historically devastating — now reduced with improved therapy). "
      "Joint: septic arthritis and sterile arthritis (especially after infections). "
      "Absent tonsils and small/absent lymph nodes on exam — characteristic. "
      "(3) Diagnosis. "
      "Laboratory: "
      "- Quantitative immunoglobulins — profoundly reduced IgG (<200 mg/dL), IgA, IgM (all very low). "
      "- Flow cytometry — absent or <1-2% mature B cells (CD19, CD20). "
      "- Vaccine response testing — inadequate response to vaccines. "
      "- Genetic testing — BTK gene sequencing confirms diagnosis and identifies family members at risk. "
      "Screen siblings and at-risk male relatives. "
      "Newborn screening (TREC assay) does NOT detect XLA — XLA has normal T cells; requires B-cell screening (KREC — kappa-deleting recombination excision circles) which is available in some programs. "
      "(4) Treatment. "
      "Immunoglobulin replacement therapy — LIFELONG: "
      "- IVIG (IV immunoglobulin) every 3-4 weeks, typical dose 400-600 mg/kg; OR "
      "- SCIG (subcutaneous immunoglobulin) weekly or more frequently — increasingly preferred for convenience and steadier levels. "
      "Target trough IgG level >=700-800 mg/dL; higher targets (>=1000) for patients with bronchiectasis or recurrent infections. "
      "Aggressive treatment of acute infections with broad-spectrum antibiotics, often longer courses. "
      "Prophylactic antibiotics in selected patients with recurrent infections despite IVIG. "
      "Avoid LIVE VACCINES (MMR, varicella, rotavirus, BCG, yellow fever) — absolute contraindication. "
      "Do NOT use oral polio vaccine (OPV) — risk of vaccine-associated paralytic polio; only inactivated polio vaccine (IPV) is acceptable. "
      "(5) Long-term management and complications. "
      "Pulmonary: monitor for bronchiectasis with pulmonary function tests and imaging; airway clearance, vaccination, prompt treatment of exacerbations. "
      "GI: chronic enteroviral infection can affect CNS; aggressive treatment of GI symptoms. "
      "Autoimmune disease, malignancy (lymphoma) — increased risk with XLA long-term; surveillance. "
      "Genetic counseling and family screening — carrier testing for mothers and sisters; prenatal/preimplantation options for future pregnancies. "
      "With appropriate IVIG/SCIG therapy, life expectancy approaches normal; without treatment, historically childhood mortality from infection. "
      "Classic pitfalls: (a) delayed diagnosis — any child with recurrent severe bacterial infections, especially sinopulmonary, warrants immunoglobulin measurement; absent tonsils and lymph nodes on exam are a clue. "
      "(b) Administering live vaccines — BCG at birth (outside US), OPV, rotavirus — can cause disseminated infection; universal B-cell screening would identify early. "
      "(c) Under-dosing IVIG/SCIG — target trough guides dosing; bronchiectasis patients need higher levels. "
      "(d) Not screening family — X-linked pattern means maternal relatives can be affected or carriers. "
      "(e) Forgetting that lymphoma and autoimmune disease risk persist; surveillance is part of long-term care. "
      "(f) Confusing XLA with common variable immunodeficiency (CVID) — CVID usually presents later (2nd-4th decade), affects both sexes, has variable Ig pattern, and B cells are present; pathophysiology differs."
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
    print(f'\nBatch 33C: {done}/{len(ENRICHMENTS)} enriched')
