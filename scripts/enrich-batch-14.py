#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"hip-fracture-anticoag": {
  "diagnosis": "Hip Fracture on Anticoagulation — Warfarin Reversal, Surgical Timing, Bridging Decision",
  "problems": [
    {"problem":"Hip fracture — on warfarin for AFib, INR 3.2","icd":"S72.001A","onset":"2024","status":"Active","notes":"Gloria Chen, 79F — fell on right hip, INR 3.2. OR team wants INR <1.5 before ORIF."},
    {"problem":"Warfarin reversal — 4-factor PCC vs vitamin K","icd":"Z79.01","onset":"2024","status":"Active","notes":"4-factor PCC reverses warfarin in minutes. Vitamin K acts over 12-24h. Urgent surgery needs PCC."},
    {"problem":"AFib — CHA2DS2-VASc 5, anticoagulation restart timing","icd":"I48.19","onset":"2020","status":"Active","notes":"High stroke risk — restart anticoagulation 24-72h post-op depending on surgical bleeding risk."}
  ],
  "medications": [
    {"name":"4-factor PCC (Kcentra) 25 units/kg IV — urgent warfarin reversal","sig":"Reverses INR to <1.5 within 30 min. Give with vitamin K 10mg IV to sustain reversal.","prescriber":"Hematology/Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Vitamin K 10mg IV slow infusion — sustained reversal","sig":"Given alongside PCC — prevents INR re-elevation when PCC wears off (6-8h). IV preferred for faster onset than PO.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Enoxaparin 40mg SQ daily — restart 24-72h post-op","sig":"Bridge back to warfarin after ORIF. Timing based on surgical hemostasis — discuss with surgeon.","prescriber":"Medicine/Hematology","start":"2024","refills":0,"status":"Hold — restart post-op"},
    {"name":"Warfarin — resume 5mg daily at post-op day 1-2","sig":"Resume prior dose. INR check at 3 days. Goal INR 2-3 for AFib.","prescriber":"Medicine","start":"2020","refills":5,"status":"Hold — resume post-op"}
  ],
  "labs": [{"date":"11/2024","panel":"Pre-Op Reversal Panel","results":[
    {"test":"INR","value":"3.2","unit":"","ref":"0.9-1.1","flag":"H"},
    {"test":"PT","value":"34","unit":"seconds","ref":"11-13.5","flag":"H"},
    {"test":"Hemoglobin","value":"10.2","unit":"g/dL","ref":"12-16","flag":"L"},
    {"test":"Creatinine","value":"1.2","unit":"mg/dL","ref":"0.7-1.3","flag":""},
    {"test":"Platelets","value":"188","unit":"K/μL","ref":"150-400","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"Hip X-ray Right","indication":"Fall, hip pain","findings":"Right femoral neck fracture — displaced, Garden type III.","impression":"Displaced femoral neck fracture. Requires ORIF or hemiarthroplasty. Warfarin reversal required pre-operatively."}],
  "ddxTargets": ["Hip fracture on warfarin — PCC reversal required (correct)","Hip contusion — X-ray rules out","Pathologic fracture from metastasis — no prior malignancy history","Trochanteric bursitis — X-ray positive for fracture","Avascular necrosis — acute onset after fall; prior AVN possible but fracture is primary issue","Periprosthetic fracture — no prior hip prosthesis"],
  "coachFinal": "Diagnosis: hip fracture requiring urgent warfarin reversal. Key learning: (1) INR reversal hierarchy for urgent surgery: 4-factor PCC (Kcentra) is preferred — reverses INR to ≤1.5 in ~30 minutes by replacing factors II, VII, IX, X. FFP requires large volumes (4+ units = 1L) and takes 1-2h. PCC is faster, smaller volume, lower infectious risk. ALWAYS give with vitamin K to sustain reversal after PCC wears off at ~6-8h. (2) Surgical timing for hip fracture: mortality increases with delay >48h, but operating with INR >1.5 increases bleeding and transfusion. PCC gets to OR faster than FFP — target INR <1.5 pre-op. (3) Post-op anticoagulation restart: AFib with CHA2DS2-VASc 5 has high stroke risk — restart anticoagulation as soon as surgically safe. Standard: 24h for high stroke risk patients with low bleeding risk, 48-72h if higher bleeding concern. Discuss with surgeon. (4) DOAC reversal: dabigatran → idarucizumab (Praxbind). Factor Xa inhibitors (apixaban, rivaroxaban) → andexanet alfa (Andexxa) or 4-factor PCC as alternative. (5) Bridging decision: AFib + warfarin: CHA2DS2-VASc ≥5 = high stroke risk, short interruption (hip fracture → restart within 24-72h) does NOT require bridging per current evidence — bridging increases bleeding without stroke benefit in most AFib patients."
},
"idiopathic-angioedema-v2": {
  "diagnosis": "Idiopathic Histaminergic Angioedema — Recurrent, No Identifiable Trigger, Daily Antihistamine Suppression",
  "problems": [
    {"problem":"Idiopathic histaminergic angioedema — recurrent, no trigger found","icd":"T78.3XXA","onset":"2022","status":"Active","notes":"Rebecca Kim, 38F — monthly episodes of lip and periorbital swelling, with urticaria. Responds to antihistamines."},
    {"problem":"Diagnostic workup negative — complement, C1-INH, allergen testing","icd":"T78.3XXA","onset":"2024","status":"Active","notes":"C4, C1-INH level/function, HAE gene panel, comprehensive allergen panel — all normal. Histaminergic mechanism confirmed by antihistamine response."},
    {"problem":"Daily antihistamine therapy — suppressive regimen needed","icd":"T78.3XXA","onset":"2024","status":"Active","notes":"Episodic antihistamines not enough. Daily high-dose antihistamine regimen or omalizumab step-up needed."}
  ],
  "medications": [
    {"name":"Cetirizine 20mg PO daily (double dose) — step-up","sig":"Double-dosing non-sedating antihistamine is safe and more effective for recurrent angioedema. Take daily, not PRN.","prescriber":"Allergy","start":"2024","refills":5,"status":"Active"},
    {"name":"Ranitidine (or famotidine 40mg) PO daily — H2 adjunct","sig":"H2 antihistamine adds modest benefit to H1 in refractory urticaria/angioedema. Combine with H1.","prescriber":"Allergy","start":"2024","refills":5,"status":"Active"},
    {"name":"Omalizumab 300mg SQ q4 weeks — if antihistamine fails","sig":"Anti-IgE — dramatically effective for chronic spontaneous urticaria/angioedema refractory to antihistamines. Step up if monthly antihistamines fail.","prescriber":"Allergy","start":"2024","refills":0,"status":"Step up if antihistamines fail"}
  ],
  "labs": [{"date":"11/2024","panel":"Angioedema Workup","results":[
    {"test":"C4 complement","value":"22","unit":"mg/dL","ref":"16-47","flag":""},
    {"test":"C1 esterase inhibitor level","value":"26","unit":"mg/dL","ref":"21-39","flag":""},
    {"test":"C1 esterase inhibitor function","value":"92","unit":"%","ref":">68%","flag":""},
    {"test":"Tryptase (baseline)","value":"5.2","unit":"ng/mL","ref":"<11.4","flag":""},
    {"test":"ANA","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Thyroid peroxidase antibody","value":"Negative","unit":"","ref":"Negative","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Idiopathic histaminergic angioedema — responds to antihistamines, normal complement (correct)","Hereditary angioedema — normal C4 and C1-INH excludes","ACE inhibitor angioedema — not on ACEi","Allergic angioedema — no consistent trigger identified after extensive workup","Acquired C1-INH deficiency — normal C4, C1q excludes","Mast cell activation syndrome — borderline — normal baseline tryptase argues against"],
  "coachFinal": "Diagnosis: idiopathic histaminergic angioedema. Key learning: (1) Angioedema classification by mechanism: histaminergic (responds to antihistamines, has urticaria, mast cell/IgE-driven) vs bradykinin-mediated (does NOT respond to antihistamines, no urticaria, normal complement or low in HAE). This patient's antihistamine responsiveness and urticaria = histaminergic. (2) Workup when no trigger found: C4 (screens for HAE), C1-INH level and function (confirms or excludes HAE), C1q (acquired C1-INH deficiency), tryptase (mast cell/systemic mastocytosis), thyroid antibodies (autoimmune urticaria/angioedema association), ANA. If all normal: idiopathic. (3) Antihistamine step-up: up to 4x the licensed dose of second-generation H1 antihistamines is safe and guideline-recommended for refractory disease. Adding H2 antihistamine provides modest additional benefit. (4) Omalizumab (Xolair): anti-IgE monoclonal antibody — 300mg SQ monthly is FDA-approved for chronic spontaneous urticaria (and by extension recurrent idiopathic angioedema). Works in ~70% of antihistamine-refractory cases, often within 1-4 weeks. (5) Prognosis: idiopathic histaminergic angioedema often resolves spontaneously within 1-5 years; 50% remission at 5 years. Long-term antihistamine or omalizumab suppression is appropriate while active."
},
"idiopathic-angioedema": {
  "diagnosis": "Angioedema — Diagnostic Workup to Distinguish Histaminergic vs Bradykinin-Mediated, Initial Evaluation",
  "problems": [
    {"problem":"Recurrent angioedema — first allergy evaluation, etiology unknown","icd":"T78.3XXA","onset":"2023","status":"Active","notes":"James Walker, 45M — 4 episodes of periorbital and lip swelling over 8 months. No urticaria. No ACEi. Spontaneous."},
    {"problem":"No urticaria — bradykinin mechanism more likely than histaminergic","icd":"T78.3XXA","onset":"2023","status":"Active","notes":"Absence of urticaria strongly suggests bradykinin-mediated etiology. HAE must be excluded even with normal C4 between attacks."},
    {"problem":"Family history — mother had similar swelling episodes","icd":"D84.1","onset":"2023","status":"Active","notes":"Family history of angioedema raises HAE probability significantly. Type II HAE can have normal C1-INH level but abnormal function."}
  ],
  "medications": [
    {"name":"Cetirizine 10mg PO daily trial — diagnostic/empiric","sig":"If antihistamines suppress attacks — histaminergic mechanism likely. If no response after 4 weeks on daily antihistamine — bradykinin mechanism more likely.","prescriber":"Allergy","start":"2024","refills":1,"status":"Active — diagnostic trial"},
    {"name":"EpiPen 0.3mg x2 — precautionary for laryngeal edema risk","sig":"For any episode involving tongue or throat swelling — epinephrine for airway protection while awaiting definitive therapy.","prescriber":"Allergy","start":"2024","refills":1,"status":"Active — precautionary"}
  ],
  "labs": [{"date":"11/2024","panel":"Angioedema Diagnostic Panel","results":[
    {"test":"C4 complement (between attacks)","value":"18","unit":"mg/dL","ref":"16-47","flag":""},
    {"test":"C1 esterase inhibitor level","value":"22","unit":"mg/dL","ref":"21-39","flag":""},
    {"test":"C1 esterase inhibitor function","value":"42","unit":"%","ref":">68%","flag":"L"},
    {"test":"C1q","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"HAE gene panel (SERPING1)","value":"Pending","unit":"","ref":"Normal","flag":""},
    {"test":"Tryptase (baseline)","value":"6.1","unit":"ng/mL","ref":"<11.4","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["HAE type II — normal C1-INH level, LOW function (correct)","Idiopathic histaminergic angioedema — no urticaria, antihistamine response unlikely to be full answer","ACE inhibitor angioedema — no ACEi use","Acquired C1-INH deficiency — C1q normal excludes; acquired = low C1q","Allergic angioedema — no trigger, no urticaria","Mast cell activation syndrome — tryptase normal baseline"],
  "coachFinal": "Diagnosis: HAE type II — normal level, low function. Key learning: (1) HAE type II pitfall: C4 may be NORMAL between attacks in ~50% of HAE patients. C4 is more reliably low DURING attacks. Between attacks, the most sensitive screen is C1-INH FUNCTION — this patient's function is 42% (below the 68% cutoff) despite a normal level. Always check BOTH level AND function in suspected HAE. (2) HAE type II: normal or elevated C1-INH level + low function (dysfunctional protein). The quantitative assay looks normal; the functional assay reveals the defect. (3) Family history: ~75% of HAE is familial (autosomal dominant). A parent with angioedema episodes should dramatically raise the prior probability. (4) Antihistamine trial as diagnostic tool: histaminergic angioedema responds to antihistamines; bradykinin-mediated angioedema does NOT. A patient with recurrent angioedema + no response to 4 weeks of daily antihistamines strongly suggests bradykinin mechanism → repeat HAE workup, consider gene testing. (5) Acute management for unknown etiology: while workup is pending, EpiPen for throat involvement, avoid ACE inhibitors and estrogen-containing medications (OCP, HRT) — both can precipitate bradykinin angioedema. Refer allergy urgently for definitive diagnosis and on-demand therapy prescription."
},
"intussusception": {
  "diagnosis": "Intussusception — Ileocolic, Classic Triad Incomplete, Air Enema Reduction Successful",
  "problems": [
    {"problem":"Intussusception — ileocolic, ultrasound confirmed","icd":"K56.1","onset":"2024","status":"Active","notes":"Oliver Park, 14M — episodic inconsolable crying, knees to chest, vomiting. 'Currant jelly' stool passed once. Target sign on US."},
    {"problem":"Classic triad often incomplete — don't wait for all three","icd":"K56.1","onset":"2024","status":"Active","notes":"Triad: colicky pain + vomiting + currant jelly stool. Only 20-40% present with all three. High suspicion warranted."},
    {"problem":"Air enema reduction — primary treatment if no perforation","icd":"K56.1","onset":"2024","status":"Active","notes":"Air enema under fluoroscopy: 75-90% success rate. Surgery for failed reduction or perforation."}
  ],
  "medications": [
    {"name":"IV access + normal saline 20mL/kg bolus — resuscitation before reduction","sig":"Dehydrated from vomiting and pain. Volume resuscitation before procedural sedation for air enema.","prescriber":"Pediatric ED","start":"2024","refills":0,"status":"Active"},
    {"name":"Morphine 0.1mg/kg IV PRN — pain management","sig":"Adequate analgesia before and during radiologic reduction. Child in significant distress.","prescriber":"Pediatric ED","start":"2024","refills":0,"status":"Active"},
    {"name":"NPO — preparation for air enema or possible surgery","sig":"NPO in case reduction fails and surgery required. Standard pre-procedural precaution.","prescriber":"Surgery/Radiology","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Intussusception Workup","results":[
    {"test":"WBC","value":"14.2","unit":"K/μL","ref":"5-15 for age","flag":""},
    {"test":"Sodium","value":"136","unit":"mEq/L","ref":"136-145","flag":""},
    {"test":"Hemoglobin","value":"12.4","unit":"g/dL","ref":"11-15","flag":""},
    {"test":"CRP","value":"22","unit":"mg/L","ref":"<10","flag":"H"},
    {"test":"BMP","value":"Normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"Abdominal Ultrasound","indication":"Episodic pain, vomiting, bloody stool in infant","findings":"Target sign (concentric rings) in right lower quadrant — ileocolic intussusception confirmed. Outer diameter 3.8cm. No free fluid. No lymph nodes >2cm.","impression":"Ileocolic intussusception confirmed on ultrasound. No perforation signs. Air enema reduction appropriate."}],
  "ddxTargets": ["Intussusception — target sign on US, episodic colicky pain (correct)","Volvulus — malrotation-associated; bile-stained vomiting, different age peak, X-ray findings","Appendicitis — older children typically; RLQ pain with peritoneal signs, different US findings","Meckel's diverticulum — painless rectal bleeding; intussusception can be the lead point","Incarcerated inguinal hernia — inguinal bulge on exam; check groin in any infant with pain/vomiting","Hirschsprung disease — chronic constipation, older age, not episodic acute pain"],
  "coachFinal": "Diagnosis: ileocolic intussusception. Key learning: (1) Classic presentation: 6 months–3 years (peak 9-12 months), episodic colicky pain (child intermittently draws up legs, screams, then appears well between episodes), vomiting, and currant jelly stool (blood + mucus = late sign of mucosal ischemia). ONLY 20-40% have the full triad — do not wait. (2) Ultrasound is the diagnostic modality of choice: target sign (concentric rings) on transverse view, pseudokidney sign on longitudinal view. Sensitivity ~98-100% in experienced hands. No radiation. (3) Air enema: performed by radiology under fluoroscopy or ultrasound guidance. Air insufflated into rectum → pushes intussusceptum retrograde. Success rate 75-90%. Complications: perforation (~1%). Contraindications: peritonitis, free air, hemodynamic instability. (4) Lead points: most pediatric intussusceptions are idiopathic (enlarged Peyer's patches following viral illness). In children >5 years or adults, consider lead point: Meckel's diverticulum, lymphoma, polyp, duplication cyst. (5) Recurrence: ~10% recurrence after enema reduction, typically within 24-48h. Most recurrences are also reducible by enema. Three or more recurrences → surgical evaluation for lead point."
},
"ludwigs-angina": {
  "diagnosis": "Ludwig's Angina — Bilateral Submandibular Space Infection, Airway Emergency, Dental Source",
  "problems": [
    {"problem":"Ludwig's angina — bilateral deep space neck infection","icd":"K12.2","onset":"2024","status":"Active","notes":"Antonio Rivera, 48M — jaw swelling, trismus, fever 39.1°C for 3 days. Bilateral submandibular induration. Submandibular space gas on CT."},
    {"problem":"Airway compromise — imminent risk, anesthesia standby","icd":"J38.4","onset":"2024","status":"Active","notes":"Stridor developing. Muffled 'hot potato' voice. Anesthesia and ENT at bedside — awake fiberoptic intubation prepared."},
    {"problem":"Diabetic immunocompromise — accelerated infection spread","icd":"E11.9","onset":"2018","status":"Active","notes":"T2DM poorly controlled, A1c 10.8% — hyperglycemia impairs neutrophil function, accelerates deep space infection spread."}
  ],
  "medications": [
    {"name":"Ampicillin-sulbactam 3g IV q6h — polymicrobial coverage","sig":"First-line coverage for mixed oral flora — Streptococcus, Staphylococcus, anaerobes. IV mandatory.","prescriber":"ENT/Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Metronidazole 500mg IV q8h — anaerobic augmentation","sig":"Deep space neck infections are polymicrobial with high anaerobic burden (Fusobacterium, Bacteroides).","prescriber":"ENT","start":"2024","refills":0,"status":"Active"},
    {"name":"Dexamethasone 10mg IV q6h — airway edema reduction","sig":"Corticosteroid reduces cellulitis edema — buys time while antibiotics work. NOT a substitute for airway management.","prescriber":"ENT/Anesthesia","start":"2024","refills":0,"status":"Active"},
    {"name":"Awake fiberoptic intubation — airway secured","sig":"Standard of care for Ludwig's with stridor — do NOT use direct laryngoscopy (rapid swelling can obscure view). Awake FOI before complete loss.","prescriber":"Anesthesia","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Ludwig's Angina Panel","results":[
    {"test":"WBC","value":"28.4","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Glucose","value":"318","unit":"mg/dL","ref":"70-100","flag":"H"},
    {"test":"HbA1c","value":"10.8","unit":"%","ref":"<7.0","flag":"H"},
    {"test":"Creatinine","value":"1.4","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"CRP","value":"246","unit":"mg/L","ref":"<10","flag":"H"},
    {"test":"Blood cultures","value":"Streptococcus anginosus growing","unit":"","ref":"No growth","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Neck With Contrast","indication":"Jaw swelling, trismus, fever — Ludwig's angina?","findings":"Bilateral submandibular and submental space involvement. Gas in right sublingual space. Airway: 4mm at base of tongue — significantly narrowed. No drainable abscess — phlegmon. Right mandibular second molar periapical lucency — source tooth.","impression":"Ludwig's angina with bilateral deep space involvement and airway narrowing. Airway urgency — anesthesia immediately. Source tooth identified."}],
  "ddxTargets": ["Ludwig's angina — bilateral deep space, airway narrowing, dental source (correct)","Peritonsillar abscess — unilateral, uvular deviation; does not cause submandibular induration bilaterally","Parapharyngeal abscess — unilateral, less submandibular involvement","Masticator space abscess — unilateral, trismus prominent, different space","Angioedema — no infection source, no gas on CT, responds to antihistamines/epinephrine","Epiglottitis — supraglottic involvement on CT, different presentation"],
  "coachFinal": "Diagnosis: Ludwig's angina — airway emergency. Key learning: (1) Ludwig's angina = bilateral infection of submandibular, sublingual, AND submental spaces simultaneously. True surgical and airway emergency — mortality historically 50%, now <5% with early airway management and antibiotics. (2) Airway management is paramount: 'cool and calculate second, airway FIRST.' Signs of impending closure: muffled voice, drooling, stridor, inability to swallow, neck extension posturing. Awake fiberoptic intubation is gold standard — allows patient to maintain airway patency until tube secured. Crash intubation in Ludwig's can be fatal. (3) Gas on CT: indicates gas-producing organisms (polymicrobial anaerobic infection). Radiologic evidence of gas = surgical emergency — even without discrete abscess, gas suggests necrotizing fasciitis risk. (4) Diabetes as amplifier: hyperglycemia impairs neutrophil chemotaxis and killing — deep space infections spread faster and respond more slowly to antibiotics. Aggressive glucose control accelerates response. (5) Surgical drainage: if CT shows discrete abscess (not just phlegmon), ENT performs intraoral or transcervical I&D. Mandibular source tooth extracted after medical stabilization (not during acute crisis when airway is at risk)."
},
"maria-santos": {
  "diagnosis": "Hypertensive Emergency with Target Organ Damage — Hypertensive Encephalopathy, IV Antihypertensive Titration",
  "problems": [
    {"problem":"Hypertensive emergency — BP 218/128, confusion","icd":"I16.1","onset":"2024","status":"Active","notes":"Maria Santos, 54F — BP 218/128, confusion, visual blurring, headache. End-organ damage present: encephalopathy + retinal changes."},
    {"problem":"Hypertensive encephalopathy — confusion and visual symptoms","icd":"I67.4","onset":"2024","status":"Active","notes":"Posterior reversible encephalopathy syndrome (PRES) on MRI — T2 hyperintensities in posterior parietal-occipital regions."},
    {"problem":"Medication non-adherence — ran out of lisinopril 2 weeks ago","icd":"I10","onset":"2015","status":"Active","notes":"Known hypertensive, off antihypertensives for 2 weeks. Rebound hypertension from clonidine also possible if that was the agent."}
  ],
  "medications": [
    {"name":"Nicardipine 5mg/h IV infusion — titrate to target BP","sig":"Calcium channel blocker infusion — titratable. Target: reduce MAP by 25% in first hour, not more. Then gradual reduction over 24-48h.","prescriber":"Medicine/ICU","start":"2024","refills":0,"status":"Active — titrating"},
    {"name":"Labetalol 20mg IV bolus q10min PRN — alternative/adjunct","sig":"Alpha and beta blocker — bolus dosing for more rapid correction if nicardipine insufficient. Avoid if bronchospasm or acute decompensated HF.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active PRN"},
    {"name":"Lisinopril 10mg PO — restart home medication after IV stabilization","sig":"Resume oral antihypertensive once stable and tolerating PO. Transition to oral after ICU phase.","prescriber":"Medicine","start":"2015","refills":5,"status":"Restart after IV stabilization"}
  ],
  "labs": [{"date":"11/2024","panel":"Hypertensive Emergency Panel","results":[
    {"test":"BMP — Creatinine","value":"2.1","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"BMP — BUN","value":"34","unit":"mg/dL","ref":"7-20","flag":"H"},
    {"test":"UA — protein","value":"3+","unit":"","ref":"Negative","flag":"H"},
    {"test":"UA — RBC casts","value":"Present","unit":"","ref":"Absent","flag":"H"},
    {"test":"LDH","value":"480","unit":"U/L","ref":"135-225","flag":"H"},
    {"test":"Troponin I","value":"0.06","unit":"ng/mL","ref":"<0.04","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"MRI Brain FLAIR","indication":"Confusion, visual changes, severe hypertension","findings":"Bilateral posterior parietal-occipital T2/FLAIR hyperintensities — cortical and subcortical. No restricted diffusion (not ischemic infarct). No hemorrhage.","impression":"Posterior reversible encephalopathy syndrome (PRES) — hypertensive. Reversible with BP control."}],
  "ddxTargets": ["Hypertensive emergency with PRES — target organ damage (correct)","Hypertensive urgency — urgency has no target organ damage; this has encephalopathy + AKI","Ischemic stroke — MRI no DWI restriction; PRES is posterior and diffusion-negative","Eclampsia — not pregnant; but consider in reproductive-age women with PRES + HTN","Posterior circulation TIA — PRES is reversible and bilateral; TIA lesions are DWI bright","Hypertensive nephropathy — contributing but subacute; acute hypertensive nephrosclerosis here"],
  "coachFinal": "Diagnosis: hypertensive emergency — PRES. Key learning: (1) Hypertensive emergency definition: severely elevated BP + acute target organ damage. Organs: brain (encephalopathy, PRES, stroke), heart (ACS, acute HF), kidney (acute hypertensive nephropathy — hematuria, proteinuria, AKI), aorta (dissection), retina (flame hemorrhages, papilledema). Hypertensive urgency = severe BP WITHOUT target organ damage. (2) BP reduction rate: reduce MAP by 25% in the FIRST HOUR only. More rapid reduction risks watershed ischemia — the brain has auto-regulated to a higher set point. Over 24-48h, reduce further toward 160/100. Complete normalization occurs over days to weeks, not hours. (3) PRES: posterior reversible encephalopathy syndrome — bilateral posterior cortical/subcortical edema from failure of cerebrovascular autoregulation. T2/FLAIR bright, no DWI restriction (not infarct). Reversible with BP control. Causes: hypertension, eclampsia, immunosuppressants (calcineurin inhibitors), TTP. (4) IV agents: nicardipine (smooth, titratable) and labetalol (IV bolus or infusion) are first-line. Clevidipine (ultrashort CCB) for cardiac surgery/ICU. Sodium nitroprusside for most refractory (cyanide toxicity risk with prolonged use). AVOID oral antihypertensives acutely — uncontrolled drop. (5) Cause: non-adherence is the most common trigger for hypertensive emergency. Medication access barriers, cost, side effects — always explore."
},
"mastocytosis-v2": {
  "diagnosis": "Systemic Mastocytosis — Urticaria Pigmentosa, Elevated Baseline Tryptase, Bone Marrow Biopsy Required",
  "problems": [
    {"problem":"Systemic mastocytosis — suspected, workup initiated","icd":"C96.21","onset":"2024","status":"Active","notes":"Elena Vargas, 42F — brown-yellow skin lesions (Darier sign positive), recurrent flushing, anaphylaxis x2. Baseline tryptase 42 ng/mL."},
    {"problem":"Elevated baseline tryptase — 42 ng/mL, >20 is red flag","icd":"C96.21","onset":"2024","status":"Active","notes":"Baseline tryptase >20 ng/mL warrants bone marrow biopsy — differentiates cutaneous from systemic mastocytosis."},
    {"problem":"Recurrent anaphylaxis — Hymenoptera venom and exercise triggers","icd":"T78.2XXA","onset":"2023","status":"Active","notes":"Two anaphylaxis episodes — one after bee sting, one exercise-triggered. Mastocytosis amplifies anaphylaxis severity."}
  ],
  "medications": [
    {"name":"Cetirizine 10mg BID + famotidine 40mg BID — H1/H2 mast cell mediator suppression","sig":"Dual antihistamine — H1 and H2 blockade reduces histamine-mediated symptoms (flushing, pruritus, GI cramps).","prescriber":"Allergy/Hematology","start":"2024","refills":5,"status":"Active"},
    {"name":"Cromolyn sodium 200mg PO QID — mast cell stabilizer","sig":"Oral mast cell stabilizer — reduces GI mast cell mediator release (diarrhea, cramping). Take 15-30 min before meals.","prescriber":"Allergy","start":"2024","refills":3,"status":"Active"},
    {"name":"EpiPen 0.3mg x2 — mandatory for mastocytosis with anaphylaxis history","sig":"Mastocytosis increases anaphylaxis severity — any systemic reaction is potentially life-threatening. EpiPen mandatory at all times.","prescriber":"Allergy","start":"2024","refills":1,"status":"Active"},
    {"name":"Venom immunotherapy (VIT) — bee venom","sig":"VIT is strongly recommended in mastocytosis with Hymenoptera-triggered anaphylaxis — reduces fatal anaphylaxis risk. Lifetime VIT often recommended.","prescriber":"Allergy","start":"2024","refills":0,"status":"Active — starting"}
  ],
  "labs": [{"date":"11/2024","panel":"Mastocytosis Workup","results":[
    {"test":"Baseline serum tryptase","value":"42","unit":"ng/mL","ref":"<11.4","flag":"H"},
    {"test":"24h urine histamine metabolites","value":"Elevated","unit":"","ref":"Normal","flag":"H"},
    {"test":"KIT D816V mutation (peripheral blood)","value":"Detected","unit":"","ref":"Not detected","flag":"H"},
    {"test":"CBC — WBC","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"ALP","value":"142","unit":"U/L","ref":"44-147","flag":""},
    {"test":"Bone marrow biopsy","value":"Pending — scheduled","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"Bone Scan","indication":"Systemic mastocytosis workup — bone involvement","findings":"No lytic lesions. Mildly increased uptake diffusely — mild osteoporosis pattern.","impression":"No destructive bone lesions. Osteoporosis pattern consistent with mastocytosis-associated bone disease."}],
  "ddxTargets": ["Systemic mastocytosis — elevated tryptase, Darier sign, KIT D816V (correct)","Cutaneous mastocytosis only — bone marrow biopsy will differentiate; tryptase >20 suggests systemic","Carcinoid tumor — flushing, diarrhea, but tryptase not elevated; urine 5-HIAA distinguishes","Pheochromocytoma — episodic hypertension, sweating, headache triad; different lab pattern","Mast cell activation syndrome (MCAS) — normal or mildly elevated tryptase; no skin lesions; KIT neg","Hereditary alpha-tryptasemia — elevated tryptase from extra TPSAB1 copies; no mast cell infiltration"],
  "coachFinal": "Diagnosis: systemic mastocytosis — workup in progress. Key learning: (1) Mastocytosis diagnosis: skin biopsy of urticaria pigmentosa lesions shows mast cell infiltration. Darier sign (stroking a lesion → urticaria/whealing from mechanical mast cell degranulation) is pathognomonic. Systemic mastocytosis requires bone marrow biopsy — criteria include dense mast cell aggregates (>15 cells/aggregate) on biopsy AND KIT D816V mutation + other minor criteria. (2) Baseline tryptase significance: tryptase >20 ng/mL (outside of an acute allergic reaction) indicates increased mast cell burden. This is the key flag for systemic mastocytosis. During acute anaphylaxis, tryptase rises acutely — baseline (drawn 24h+ after reaction) reflects constitutive mast cell load. (3) Mastocytosis + anaphylaxis: mastocytosis patients have dramatically amplified anaphylaxis — even minor triggers cause severe systemic reactions. Hymenoptera venom is the most dangerous trigger. Venom immunotherapy is recommended lifelong in systemic mastocytosis with venom-triggered anaphylaxis. (4) KIT D816V mutation: present in >90% of systemic mastocytosis — targetable with avapritinib (Blueprint Medicines — FDA approved for ISM with symptom management). (5) Osteoporosis: mast cells produce heparin and histamine which activate osteoclasts → bone loss. DEXA scan at diagnosis. Bisphosphonates if osteoporosis confirmed."
},
"meningitis-v1": {
  "diagnosis": "Bacterial Meningitis — Streptococcus pneumoniae, Empiric Antibiotics Before LP, Dexamethasone Adjunct",
  "problems": [
    {"problem":"Bacterial meningitis — clinical diagnosis, treatment before LP","icd":"G00.1","onset":"2024","status":"Active","notes":"Samuel Park, 22M — fever 39.8°C, severe headache, neck stiffness, photophobia. Kernig and Brudzinski signs positive."},
    {"problem":"LP delay — CT head ordered before LP","icd":"G00.1","onset":"2024","status":"Active","notes":"Focal neuro exam → CT first to exclude herniation. Do NOT delay antibiotics for CT — treat empirically first."},
    {"problem":"Dexamethasone — adjunct reduces hearing loss and mortality in pneumococcal meningitis","icd":"G00.1","onset":"2024","status":"Active","notes":"Give dexamethasone 15-20 min BEFORE first antibiotic dose to reduce inflammatory cascade at time of bacterial lysis."}
  ],
  "medications": [
    {"name":"Ceftriaxone 2g IV q12h — empiric S. pneumoniae / N. meningitidis","sig":"Empiric treatment — DO NOT wait for LP or CT results. Give immediately after blood cultures drawn.","prescriber":"ED/Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Vancomycin 25-30mg/kg IV q8-12h — add for resistant pneumococcus","sig":"Empiric coverage for penicillin-resistant S. pneumoniae until sensitivities available. Target AUC 400-600.","prescriber":"Medicine/ID","start":"2024","refills":0,"status":"Active"},
    {"name":"Dexamethasone 0.15mg/kg IV q6h x4 days — BEFORE antibiotics","sig":"Give 15-20 min before ceftriaxone. Reduces TNF-α surge from bacterial lysis → less hearing loss and mortality in pneumococcal meningitis.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Ampicillin 2g IV q4h — add if Listeria suspected (age >50 or immunocompromised)","sig":"This 22-year-old does not require Listeria coverage. Add for immunocompromised, elderly, or neonates.","prescriber":"Medicine","start":"NOT given","refills":0,"status":"Not given — age 22, immunocompetent"}
  ],
  "labs": [{"date":"11/2024","panel":"Meningitis Workup","results":[
    {"test":"CSF — WBC","value":"4200","unit":"cells/μL","ref":"<5","flag":"H"},
    {"test":"CSF — protein","value":"280","unit":"mg/dL","ref":"15-45","flag":"H"},
    {"test":"CSF — glucose","value":"22","unit":"mg/dL","ref":"50-80","flag":"L"},
    {"test":"CSF — Gram stain","value":"Gram-positive diplococci — S. pneumoniae morphology","unit":"","ref":"No organisms","flag":"H"},
    {"test":"Blood cultures x2","value":"Pending — drawn before antibiotics","unit":"","ref":"No growth","flag":""},
    {"test":"Serum glucose","value":"108","unit":"mg/dL","ref":"70-100","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Head Non-Contrast","indication":"Focal neuro exam before LP — herniation risk assessment","findings":"No mass lesion. No midline shift. No cerebral edema. Cisterns patent.","impression":"No contraindication to lumbar puncture. Proceed with LP."}],
  "ddxTargets": ["Bacterial meningitis — S. pneumoniae, classic CSF profile (correct)","Viral meningitis — lymphocytic pleocytosis, normal glucose, lower protein; clinical overlap early","Subarachnoid hemorrhage — thunderclap headache, xanthochromia on LP, no fever typically","Herpes simplex encephalitis — temporal lobe involvement, seizures, CSF PCR HSV positive","Cryptococcal meningitis — immunocompromised, indolent course, India ink positive","Brain abscess — focal neuro signs, ring-enhancing lesion on CT, do NOT LP if mass present"],
  "coachFinal": "Diagnosis: bacterial meningitis — S. pneumoniae. Key learning: (1) Never delay antibiotics for imaging or LP in suspected bacterial meningitis. The rule: draw blood cultures → give dexamethasone + antibiotics → then CT → then LP. Each hour of antibiotic delay increases mortality. A 30-minute delay to get a CT is acceptable only if there are focal neuro signs (papilledema, focal deficit, new seizure, immunocompromise, GCS <10). (2) CSF profile: bacterial = PMN pleocytosis (hundreds to thousands), low glucose (<40 or CSF:serum ratio <0.4), elevated protein (>100-200), positive Gram stain in ~60-80%. Viral = lymphocytic, normal glucose, mildly elevated protein, negative Gram stain. (3) Dexamethasone timing: benefit is specifically from reducing the inflammatory response triggered by antibiotic-induced bacterial lysis. Must be given BEFORE or WITH the first antibiotic dose — no benefit if given after. Reduces hearing loss and mortality specifically in S. pneumoniae meningitis. (4) Empiric antibiotic selection by age: neonates = ampicillin + gentamicin or cefotaxime. Infants–50yo = ceftriaxone + vancomycin. >50yo or immunocompromised = ceftriaxone + vancomycin + ampicillin (Listeria coverage). (5) Meningococcal meningitis (N. meningitidis): petechial or purpuric rash is pathognomonic — activate contact precautions immediately, notify public health for close contact prophylaxis (rifampin, ciprofloxacin, or ceftriaxone single dose)."
},
"mesenteric-ischemia": {
  "diagnosis": "Acute Mesenteric Ischemia — AFib Embolus, Mesenteric CTA, Emergency Surgical/IR Intervention",
  "problems": [
    {"problem":"Acute mesenteric ischemia — embolic, AFib source","icd":"K55.059","onset":"2024","status":"Active","notes":"Henrietta Osei, 72F — sudden severe periumbilical pain 'out of proportion to exam', AFib on ECG, not anticoagulated. Mesenteric CTA: SMA embolus."},
    {"problem":"AFib without anticoagulation — thromboembolic source confirmed","icd":"I48.19","onset":"2020","status":"Active","notes":"CHA2DS2-VASc 5 — should have been anticoagulated. SMA embolism is a direct complication of untreated AFib."},
    {"problem":"Time-critical — bowel viability window 6-8 hours from ischemia onset","icd":"K55.059","onset":"2024","status":"Active","notes":"Symptoms for 4 hours. Peritoneal signs not yet present. Intervention within 2 hours can salvage bowel."}
  ],
  "medications": [
    {"name":"Heparin UFH 80 units/kg IV bolus — immediate anticoagulation","sig":"Prevents clot propagation. Do NOT wait for IR suite to start heparin. Begin in ED.","prescriber":"Vascular Surgery/Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"IV access x2 large bore — resuscitation","sig":"Mesenteric ischemia patients develop rapid third-spacing and sepsis from bowel necrosis. Aggressive IV access.","prescriber":"Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Broad-spectrum antibiotics — cefepime + metronidazole","sig":"Prophylactic coverage for bacterial translocation during ischemic bowel reperfusion. Give before any intervention.","prescriber":"Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Papaverine — intra-arterial vasodilator (IR)","sig":"Infused directly into SMA via IR catheter — relieves mesenteric vasospasm during and after thrombus removal.","prescriber":"Interventional Radiology","start":"2024","refills":0,"status":"Active — IR suite"}
  ],
  "labs": [{"date":"11/2024","panel":"Mesenteric Ischemia Panel","results":[
    {"test":"Lactate","value":"5.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"WBC","value":"21.4","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Lipase","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"D-dimer","value":">10","unit":"mg/L","ref":"<0.5","flag":"H"},
    {"test":"Creatinine","value":"1.4","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"ABG — pH","value":"7.26","unit":"","ref":"7.35-7.45","flag":"L"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Angiography — Abdomen/Pelvis With IV Contrast","indication":"Severe abdominal pain out of proportion to exam, AFib","findings":"Filling defect in proximal SMA — embolus. Bowel wall thickening and pneumatosis intestinalis beginning in mid-jejunum. No free air.","impression":"Acute SMA embolism with early bowel ischemia — no perforation yet. Emergent intervention required within 2 hours to prevent irreversible infarction."}],
  "ddxTargets": ["Acute mesenteric ischemia — SMA embolus, AFib source (correct)","Aortic dissection — tearing back pain, BP differential; mesenteric involvement possible but CT clarifies","Bowel obstruction — different CT finding; no embolus","Acute pancreatitis — lipase normal, pain epigastric not periumbilical, no vascular occlusion","Ischemic colitis — colonic distribution, less dramatic, no SMA embolus","Peptic ulcer perforation — free air on CT, different history"],
  "coachFinal": "Diagnosis: acute mesenteric ischemia — SMA embolus. Key learning: (1) Classic presentation: 'pain out of proportion to exam' — severe colicky periumbilical pain, but abdomen soft and non-tender early. This is because ischemia initially affects the visceral peritoneum (referred pain, non-localizing) before transmural necrosis produces peritoneal signs. When peritoneal signs appear → bowel infarction has occurred. Intervene BEFORE peritoneal signs. (2) Etiology types: embolic (~50%, from AFib or cardiac thrombus), thrombotic (~25%, atherosclerotic SMA plaque), non-occlusive (~25%, low-flow state — sepsis, shock, vasopressors), mesenteric venous thrombosis (hypercoagulable states). (3) Time is bowel: viable window is approximately 6-8 hours from occlusion to irreversible infarction. Mesenteric CTA is the diagnostic modality — fast and diagnostic. Treat immediately after CT, not after labs or consulting rounds. (4) Management: heparin immediately, then IR for catheter-directed thrombolysis or surgical embolectomy. Laparotomy for bowel assessment — non-viable bowel resected. Second-look laparotomy at 24-48h to reassess marginal bowel. (5) AFib and mesenteric ischemia: prevent, not just treat. This patient was not anticoagulated with a CHA2DS2-VASc of 5 — direct consequence. Every AFib patient with score ≥2 (male) or ≥3 (female) should be anticoagulated unless absolute contraindication."
},
"milk-allergy-infant-v2": {
  "diagnosis": "Cow's Milk Protein Allergy — Non-IgE-Mediated Proctocolitis, Breastfed Infant, Maternal Elimination Diet",
  "problems": [
    {"problem":"Cow's milk protein allergy — non-IgE proctocolitis, breastfed","icd":"K52.29","onset":"2024","status":"Active","notes":"Amara Johnson, 6W — bloody mucoid stools x10 days. Exclusively breastfed. Otherwise thriving (weight 75th %ile)."},
    {"problem":"Rectal bleeding — eosinophilic proctocolitis from maternal dairy antigens","icd":"K92.1","onset":"2024","status":"Active","notes":"Cow's milk protein antigens pass through breast milk → eosinophilic infiltration of infant rectum/colon → mucosal bleeding."},
    {"problem":"Thriving infant — CMPA proctocolitis does NOT cause weight loss","icd":"K52.29","onset":"2024","status":"Active","notes":"Key distinction: proctocolitis = bloody stool but well, growing infant. FPIES = vomiting, poor growth. Enteropathy = diarrhea, poor growth."}
  ],
  "medications": [
    {"name":"Maternal dairy elimination — all cow's milk products","sig":"Strict elimination of all dairy (milk, cheese, yogurt, butter, casein, whey in ingredient lists). Improvement in 2-4 weeks.","prescriber":"Allergy/Pediatrics","start":"2024","refills":0,"status":"Active"},
    {"name":"Maternal calcium 1000mg + vitamin D 600 IU daily — supplementation","sig":"Replace calcium lost from dairy elimination.","prescriber":"Pediatrics/OB","start":"2024","refills":2,"status":"Active"},
    {"name":"Continue breastfeeding — preferred over formula switch","sig":"Breastfeeding continues during maternal elimination — significant immunologic benefits. Only switch to amino acid formula if maternal elimination fails after 4 weeks strict adherence.","prescriber":"Pediatrics","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Infant CMPA Workup","results":[
    {"test":"Stool occult blood","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"Stool eosinophils","value":"Present — abundant","unit":"","ref":"Absent","flag":"H"},
    {"test":"Cow's milk IgE (infant)","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Total IgE (infant)","value":"2","unit":"IU/mL","ref":"<10","flag":""},
    {"test":"Weight","value":"75th percentile — well above average","unit":"","ref":"Following curve","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Cow's milk proctocolitis — breastfed, maternal dairy antigen, thriving infant (correct)","Infectious colitis — stool cultures negative; dairy timing is key","Necrotizing enterocolitis — preterm infant; this is term, exclusively breastfed","Anal fissure — localized bright blood without systemic inflammation or eosinophils","Intussusception — episodic pain, currant jelly; this is chronic mucoid blood","Meckel's diverticulum — painless, significant blood loss; not mucoid"],
  "coachFinal": "Diagnosis: cow's milk protein allergy proctocolitis — breastfed infant. Key learning: (1) CMPA proctocolitis presentation: healthy, thriving, exclusively breastfed infant with bloody or mucoid bloody stools — typically appears around 2-8 weeks of age. Weight gain normal. No vomiting. No irritability with feeds. This distinguishes proctocolitis from FPIES (vomiting, lethargy) and protein-losing enteropathy (poor weight gain, diarrhea). (2) Non-IgE-mediated mechanism: IgE testing (RAST, skin prick) is NEGATIVE — this is a T-cell/eosinophil-mediated reaction, not IgE. Do not use negative IgE testing to rule out CMPA proctocolitis. (3) Maternal elimination is first-line: strict dairy elimination by mother allows breastfeeding to continue. Improvement within 2-4 weeks. If no improvement after 4 weeks of strict elimination, also eliminate soy (10-15% of cow's milk CMPA also react to soy). (4) Resolution: most CMPA proctocolitis resolves by 12-18 months. Reintroduction under guidance at that time. (5) Formula-fed alternative: if maternal elimination fails or mother cannot eliminate dairy, switch to extensively hydrolyzed formula (Alimentum, Nutramigen) — ~90% tolerated. Amino acid formula (Neocate) for the ~10% who react to extensively hydrolyzed. Do NOT use soy formula in CMPA (cross-reactive in ~40% of non-IgE CMPA)."
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
print(f"\nBatch 14: {done}/{len(ENRICHMENTS)} enriched")
