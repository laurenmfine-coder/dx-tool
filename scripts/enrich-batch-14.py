#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"tb-immigration": {
  "diagnosis": "Active Pulmonary Tuberculosis — Recent Immigrant, Positive IGRA, Smear-Positive, RIPE Therapy Initiated",
  "problems": [
    {"problem":"Active pulmonary TB — smear-positive, cavitary disease","icd":"A15.0","onset":"2024","status":"Active","notes":"Amara Diallo, 31F — immigrant from West Africa 4 months ago. 6-week productive cough, night sweats, 15 lb weight loss. AFB smear 3+."},
    {"problem":"Airborne isolation — public health reporting mandatory","icd":"A15.0","onset":"2024","status":"Active","notes":"Negative pressure room required. N95 for all entering. State health department notified within 24h."},
    {"problem":"Contact investigation — household and close contacts","icd":"Z03.89","onset":"2024","status":"Active","notes":"Public health will conduct contact tracing — household members, coworkers require IGRA testing."}
  ],
  "medications": [
    {"name":"Isoniazid 300mg PO daily (INH) — RIPE regimen","sig":"Take on empty stomach or with food if GI upset. Pyridoxine 50mg daily co-administered to prevent peripheral neuropathy.","prescriber":"ID/Pulmonology","start":"2024","refills":2,"status":"Active"},
    {"name":"Rifampin 600mg PO daily (RIF)","sig":"Take on empty stomach. Turns urine/sweat/tears orange — warn patient. Significant drug interactions (CYP3A4 inducer).","prescriber":"ID","start":"2024","refills":2,"status":"Active"},
    {"name":"Pyrazinamide 1500mg PO daily (PZA) — first 2 months","sig":"First 2 months only. Monitor uric acid and LFTs.","prescriber":"ID","start":"2024","refills":1,"status":"Active — 2 months"},
    {"name":"Ethambutol 1200mg PO daily (EMB) — first 2 months","sig":"Until susceptibility results. Monitor visual acuity and color vision monthly — optic neuritis risk.","prescriber":"ID","start":"2024","refills":1,"status":"Active — 2 months"},
    {"name":"Pyridoxine (B6) 50mg PO daily — INH neuropathy prevention","sig":"Always co-administer with isoniazid.","prescriber":"ID","start":"2024","refills":2,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"TB Workup","results":[
    {"test":"AFB smear (sputum x3)","value":"3+ positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"IGRA (QuantiFERON-TB Gold)","value":"Positive — 8.2 IU/mL","unit":"","ref":"<0.35 negative","flag":"H"},
    {"test":"HIV antibody","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"ALT/AST","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"Uric acid","value":"5.8","unit":"mg/dL","ref":"2.4-7.0","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"CXR PA/Lateral","indication":"Chronic cough, night sweats, weight loss","findings":"Right upper lobe cavitary lesion. Ipsilateral hilar adenopathy. Miliary pattern absent.","impression":"Classic active pulmonary TB pattern — upper lobe cavitation with hilar adenopathy. Smear result confirms."}],
  "ddxTargets": ["Active pulmonary TB — immigrant, cavitary disease, smear 3+ (correct)","Lung cancer with superinfection — cavitary mass; age and AFB smear argue against","Aspergillosis — immunocompromised, cavitary; HIV negative here","NTM (non-tuberculous mycobacteria) — culture will distinguish; treatment differs","Lung abscess — anaerobic, aspiration history; upper lobe cavitation atypical","Histoplasmosis — geographic exposure (Ohio/Mississippi valley); different endemic region"],
  "coachFinal": "Diagnosis: active pulmonary TB. Key learning: (1) RIPE regimen: Rifampin + Isoniazid + Pyrazinamide + Ethambutol for 2 months (intensive phase), then RIF + INH for 4 more months (continuation phase) = 6 months total for drug-sensitive TB. DOT (directly observed therapy) is standard — public health supervises each dose. (2) Airborne precautions: TB is spread via airborne droplet nuclei (<5 μm) — negative pressure room, N95 respirators (not surgical masks). Isolation continues until 3 consecutive negative AFB smears and clinical improvement. (3) Drug interactions with rifampin: rifampin is a potent CYP3A4 inducer — lowers levels of protease inhibitors (HIV), oral contraceptives, warfarin, methadone, many others. Review ALL medications. (4) INH hepatotoxicity: monitor LFTs monthly. Stop if ALT >3-5x ULN with symptoms or >5x ULN asymptomatic. Pyridoxine 50mg daily prevents peripheral neuropathy (INH inhibits B6 metabolism). (5) Reporting: TB is a mandatory reportable disease in all US states. State health department must be notified within 24h of suspected active TB. Contact investigation for household contacts and close contacts is the health department's responsibility."
},
"tension-ptx": {
  "diagnosis": "Tension Pneumothorax — Immediate Needle Decompression, Chest Tube to Follow",
  "problems": [
    {"problem":"Tension pneumothorax — hemodynamic compromise","icd":"J93.0","onset":"2024","status":"Active","notes":"Ryan Torres, 24M — MVC, intubated in field. Sudden deterioration: SpO2 75%, BP 68/40, HR 138, tracheal deviation left."},
    {"problem":"Traumatic pneumothorax — rib fractures, lung laceration","icd":"S27.0XXA","onset":"2024","status":"Active","notes":"Bilateral rib fractures 4-7 on right. Tension physiology from check-valve mechanism."},
    {"problem":"Hypotensive shock — obstructive etiology","icd":"R57.9","onset":"2024","status":"Active","notes":"BP 68/40 from tension physiology — mediastinal shift compromising venous return. Immediate decompression lifesaving."}
  ],
  "medications": [
    {"name":"Needle decompression — 14g angiocath, 2nd ICS midclavicular line","sig":"IMMEDIATE — do not wait for CXR. Insert 14g angiocath 2nd intercostal space, midclavicular line. Rush of air confirms diagnosis.","prescriber":"Trauma/ED","start":"2024","refills":0,"status":"DONE — immediate"},
    {"name":"Chest tube — 28-32Fr, 4th/5th ICS anterior axillary line","sig":"Definitive treatment after needle decompression. Right side for right-sided tension PTX.","prescriber":"Trauma/Surgery","start":"2024","refills":0,"status":"Active — placed"},
    {"name":"Normal saline 1L IV — resuscitation after decompression","sig":"IV fluid resuscitation after tension physiology relieved. BP should respond rapidly.","prescriber":"Trauma","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Trauma Panel","results":[
    {"test":"ABG — SpO2","value":"75","unit":"%","ref":">95","flag":"L"},
    {"test":"BP","value":"68/40","unit":"mmHg","ref":"Systolic >90","flag":"L"},
    {"test":"HR","value":"138","unit":"bpm","ref":"60-100","flag":"H"},
    {"test":"Hemoglobin (FAST)","value":"13.2","unit":"g/dL","ref":"13.5-17.5","flag":""},
    {"test":"Tracheal position","value":"Deviated left","unit":"","ref":"Midline","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CXR — POST decompression","indication":"Verify chest tube position","findings":"Right-sided chest tube in good position. Right lung re-expanding. Trachea midline. Bilateral rib fractures 4-7 right.","impression":"Tension pneumothorax resolved. Tube in good position. Continued re-expansion expected."}],
  "ddxTargets": ["Tension pneumothorax — tracheal deviation + shock + decreased breath sounds (correct)","Massive hemothorax — decreased breath sounds but dull percussion; trachea deviates away from side differently","Cardiac tamponade — Beck's triad (JVD + hypotension + muffled heart sounds); no tracheal deviation","Obstructive shock — PE causes obstructive shock but not tracheal deviation","Right mainstem intubation — SpO2 drop after intubation, but hemodynamics less severely affected","ARDS — bilateral, not unilateral; no tracheal deviation"],
  "coachFinal": "Diagnosis: tension pneumothorax. Key learning: (1) Tension PTX is a CLINICAL diagnosis — do NOT wait for CXR. Classic triad: absent/decreased breath sounds unilaterally + tracheal deviation AWAY from affected side + hypotension. In intubated patients: rising peak airway pressures + sudden deterioration = tension PTX until proven otherwise. (2) Needle decompression: 14g angiocath, 2nd ICS, midclavicular line, just above the rib (avoid neurovascular bundle below rib). Rush of air = confirms diagnosis + partial treatment. Must follow with chest tube — needle is temporizing only. Alternatively: 4th/5th ICS, anterior axillary line (finger decompression in some protocols). (3) Chest tube placement: 4th/5th ICS, anterior axillary line for trauma. 2nd ICS midclavicular for elective pneumothorax (cosmetically better). Insert over top of rib. Confirm with CXR and water seal chamber. (4) Tension vs simple PTX: simple PTX = air in pleural space without mediastinal shift. Tension = check-valve mechanism → progressive air accumulation → mediastinal shift → kinking of SVC/IVC → obstructive shock → cardiac arrest. (5) Bilateral rib fractures ≥3 consecutive ribs = flail chest risk. This patient has 4 rib fractures — monitor for paradoxical breathing, respiratory fatigue, need for intubation (already intubated)."
},
"testicular-torsion": {
  "diagnosis": "Testicular Torsion — Acute Onset Scrotal Pain, Emergent Surgical Exploration, Time-Critical",
  "problems": [
    {"problem":"Testicular torsion — right side, 4 hours since onset","icd":"N44.01","onset":"2024","status":"Active","notes":"Ethan Kim, 16M — sudden right testicular pain waking from sleep, nausea, vomiting. No cremasteric reflex. High-riding testis."},
    {"problem":"Surgical emergency — testicular viability depends on time","icd":"N44.01","onset":"2024","status":"Active","notes":"Salvage rate: >90% if detorsion within 6h, ~50% at 12h, <10% at 24h. Do not delay surgery for imaging if clinical diagnosis is clear."},
    {"problem":"Bell-clapper deformity — bilateral anatomic predisposition","icd":"N44.09","onset":"2024","status":"Active","notes":"Underlying anatomy predisposes both testes. Contralateral orchiopexy performed at same surgery."}
  ],
  "medications": [
    {"name":"Manual detorsion — attempt in ED while awaiting OR","sig":"Rotate testis outward (lateral to medial, like opening a book) — relieves torsion in ~2/3 of cases. Does NOT replace surgery. Pain relief confirms success.","prescriber":"Urology/ED","start":"2024","refills":0,"status":"Attempted — partial relief"},
    {"name":"Morphine 0.1mg/kg IV — pain management","sig":"Adequate analgesia while preparing for OR. Does not mask peritoneal signs in testicular torsion.","prescriber":"ED","start":"2024","refills":0,"status":"Active"},
    {"name":"NPO — surgical prep","sig":"Nothing by mouth — immediate surgical preparation. OR team activated.","prescriber":"Surgery","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Scrotal Pain Workup","results":[
    {"test":"Scrotal Doppler ultrasound","value":"Absent flow right testis","unit":"","ref":"Normal flow","flag":"H"},
    {"test":"Urinalysis","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"CBC","value":"WBC 11.2 — mild elevation","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"hCG/AFP (testicular tumor markers)","value":"Normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"Scrotal Doppler Ultrasound","indication":"Acute testicular pain — torsion vs epididymo-orchitis","findings":"Right testis: absent vascularity on color Doppler. Left testis: normal flow. Heterogeneous right testicular parenchyma — early ischemia.","impression":"Findings consistent with right testicular torsion. EMERGENT UROLOGY CONSULTATION REQUIRED."}],
  "ddxTargets": ["Testicular torsion — absent Doppler flow, 4h onset, absent cremasteric reflex (correct)","Epididymo-orchitis — gradual onset, fever, pyuria, preserved/increased Doppler flow","Inguinal hernia — inguinal mass tracking into scrotum, reducible","Appendix testis torsion — blue dot sign, gradual onset, less severe pain, Doppler flow present","Trauma-related hematocele — history of trauma, different Doppler pattern","Testicular tumor — painless, progressive; not acute onset with absent Doppler"],
  "coachFinal": "Diagnosis: testicular torsion. Key learning: (1) The cremasteric reflex is the most important clinical finding: absent cremasteric reflex in acute scrotal pain = testicular torsion until proven otherwise. Sensitivity ~99%. The reflex is elicited by stroking the inner thigh — normal = ipsilateral testicular elevation. Absent = torsion. (2) Time is testicle: salvage rates drop precipitously with time. <6 hours = >90% salvage; 6-12 hours = 50-90%; 12-24 hours = ~50%; >24 hours = <10%. Do NOT delay surgery for ultrasound if clinical presentation is clear. Doppler ultrasound is used when diagnosis is uncertain. (3) Manual detorsion in ED: rotate the testis outward (medial to lateral — open-book technique). Pain relief = successful detorsion. Partial relief is common. Still requires surgery for orchiopexy. (4) Bell-clapper deformity: abnormal tunica vaginalis attaches high on spermatic cord, allowing testis to swing freely. BILATERAL predisposition — contralateral orchiopexy is always performed at the same surgery even if the other side is asymptomatic. (5) Age peaks: bimodal — neonates (extravaginal) and adolescents 12-18 years (intravaginal, Bell-clapper). Classic history: adolescent male with sudden testicular pain waking from sleep."
},
"thyroid-eye-disease-od": {
  "diagnosis": "Thyroid Eye Disease — Graves' Ophthalmopathy, Proptosis and Diplopia, Orbital Decompression Candidacy",
  "problems": [
    {"problem":"Thyroid eye disease (TED) — moderate-severe, active phase","icd":"H06.21","onset":"2023","status":"Active","notes":"Diane Wu, 44F — known Graves' disease, euthyroid on methimazole. Progressive proptosis, diplopia, and periorbital edema x8 months. CAS 5/7."},
    {"problem":"Compressive optic neuropathy — vision threatening","icd":"H47.019","onset":"2024","status":"Active","notes":"Color desaturation right eye, RAPD present. Urgent ophthalmology — optic nerve compression risk from orbital fat and EOM enlargement."},
    {"problem":"Diplopia — inferior rectus restriction","icd":"H51.09","onset":"2023","status":"Active","notes":"Inferior and medial rectus enlargement on MRI orbit. Restricted upward gaze. Prism glasses as temporary measure."}
  ],
  "medications": [
    {"name":"Teprotumumab (Tepezza) 10mg/kg IV q3 weeks x8 doses — biologic for TED","sig":"IGF-1R inhibitor — FDA approved for active TED. Reduces proptosis, diplopia, and CAS. Infusion every 3 weeks.","prescriber":"Endocrinology/Ophthalmology","start":"2024","refills":0,"status":"Active — infusion series"},
    {"name":"Methylprednisolone 500mg IV weekly x6 weeks — pulsed steroid","sig":"IV pulse steroids for active, moderate-severe TED. Concurrent with teprotumumab consideration.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active — pulsed"},
    {"name":"Selenium 200mcg PO daily — for mild/moderate TED supplementation","sig":"Antioxidant — reduces disease activity in mild-moderate TED (EUGOGO trial). Continue even with escalated therapy.","prescriber":"Endocrinology","start":"2023","refills":5,"status":"Active"},
    {"name":"Methimazole 10mg PO BID — maintain euthyroidism","sig":"Critical: hyperthyroidism and hypothyroidism BOTH worsen TED. Target strict euthyroid state throughout treatment.","prescriber":"Endocrinology","start":"2022","refills":5,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"TED Monitoring","results":[
    {"test":"TSH","value":"1.2","unit":"mIU/L","ref":"0.4-4.0","flag":""},
    {"test":"Free T4","value":"1.1","unit":"ng/dL","ref":"0.8-1.8","flag":""},
    {"test":"TRAb (TSH receptor antibody)","value":"12.4","unit":"IU/L","ref":"<1.75","flag":"H"},
    {"test":"CAS (clinical activity score)","value":"5/7","unit":"","ref":"<3 inactive","flag":"H"},
    {"test":"Proptosis — Hertel exophthalmometer","value":"25mm right, 23mm left","unit":"","ref":"<18mm","flag":"H"}
  ]}],
  "imaging": [{"date":"11/2024","study":"MRI Orbits With Contrast","indication":"Proptosis, diplopia, optic neuropathy concern","findings":"Bilateral inferior and medial rectus enlargement (muscle belly, not tendon — distinguishes TED from orbital myositis). Crowded orbital apex. Fat prolapse. No discrete mass.","impression":"Thyroid eye disease — bilateral EOM enlargement at orbital apex. Optic nerve compression risk. Orbital decompression candidacy to be assessed."}],
  "ddxTargets": ["Thyroid eye disease — Graves' ophthalmopathy, TRAb elevated (correct)","Orbital pseudotumor (idiopathic orbital inflammation) — pain, tendon involvement on MRI; TRAb negative","Orbital lymphoma — older, progressive, different MRI enhancement pattern","Cavernous sinus thrombosis — fever, headache, multiple cranial nerve palsies","IgG4-related orbital disease — TRAb negative, IgG4 elevated, responds to steroids","Orbital cellulitis — fever, skin erythema, acute onset"],
  "coachFinal": "Diagnosis: thyroid eye disease (TED), moderate-severe. Key learning: (1) TED activity vs severity: CAS (Clinical Activity Score) measures ACTIVITY (inflammation — pain, redness, swelling, chemosis, lid edema); EUGOGO severity grades measure structural damage (proptosis, diplopia, corneal exposure, optic neuropathy). Active disease responds to immunotherapy; inactive disease may need surgery (decompression, strabismus, lid). (2) Teprotumumab: IGF-1R monoclonal antibody — FDA-approved 2020 for active TED. Dramatically reduces proptosis (mean 2-3mm) and diplopia. Side effects: hyperglycemia, hearing loss, muscle cramps, IBD exacerbation. (3) Thyroid control and TED: RAI (radioactive iodine) worsens TED — avoid in moderate-severe TED or pretreat with steroids. Hyperthyroidism AND hypothyroidism both worsen TED. Strict euthyroid state throughout is essential. (4) MRI orbit TED pattern: muscle BELLY enlargement (tendon spared) — inferior > medial > superior > lateral recti (mnemonic: I'M SLow). Orbital myositis = tendon and belly both enlarged. This distinction is diagnostic. (5) Optic neuropathy in TED: a true ophthalmologic emergency — apical crowding from enlarged muscles compresses optic nerve. Signs: color desaturation, RAPD, visual field defect. Treat with IV pulse steroids ± urgent orbital decompression."
},
"ttp": {
  "diagnosis": "Thrombotic Thrombocytopenic Purpura — ADAMTS13 Deficiency, Plasma Exchange Emergency, PLASMIC Score High",
  "problems": [
    {"problem":"TTP — ADAMTS13 severely deficient","icd":"M31.19","onset":"2024","status":"Active","notes":"Grace Park, 38F — thrombocytopenia + microangiopathic hemolytic anemia + neurological symptoms (confusion). PLASMIC score 7."},
    {"problem":"Microangiopathic hemolytic anemia — schistocytes on smear","icd":"D59.4","onset":"2024","status":"Active","notes":"Hgb 7.2, LDH 1840, schistocytes >2/hpf. Direct Coombs negative — confirms microangiopathic, not immune-mediated."},
    {"problem":"Neurological involvement — confusion and headache","icd":"G93.89","onset":"2024","status":"Active","notes":"Confusion and headache from cerebral microvascular occlusion. Resolves with successful PEX."}
  ],
  "medications": [
    {"name":"Plasma exchange (PEX) — 1-1.5 plasma volumes daily","sig":"EMERGENCY — start within hours of diagnosis. Use FFP as replacement fluid. Continue daily until platelet count >150K x2 days.","prescriber":"Hematology","start":"2024","refills":0,"status":"EMERGENT — active"},
    {"name":"Prednisone 1mg/kg PO daily — immunosuppression","sig":"Adjunct immunosuppression — TTP is autoimmune (anti-ADAMTS13 antibody). Steroids reduce antibody production.","prescriber":"Hematology","start":"2024","refills":0,"status":"Active"},
    {"name":"Caplacizumab (Cablivi) 11mg SQ daily — anti-VWF nanobody","sig":"Blocks VWF-platelet interaction — rapidly reduces microvascular thrombosis. Start with PEX, continue 30 days after last PEX.","prescriber":"Hematology","start":"2024","refills":0,"status":"Active — adjunct"},
    {"name":"NO PLATELET TRANSFUSION — contraindicated in TTP","sig":"Platelet transfusion in TTP = 'pouring gasoline on fire' — provides substrate for further microvascular thrombosis. Contraindicated unless life-threatening hemorrhage.","prescriber":"Hematology — DO NOT GIVE","start":"AVOID","refills":0,"status":"CONTRAINDICATED"}
  ],
  "labs": [{"date":"11/2024","panel":"TTP Workup","results":[
    {"test":"Platelets","value":"18","unit":"K/μL","ref":"150-400","flag":"L"},
    {"test":"Hemoglobin","value":"7.2","unit":"g/dL","ref":"12-16","flag":"L"},
    {"test":"LDH","value":"1840","unit":"U/L","ref":"135-225","flag":"H"},
    {"test":"Schistocytes on smear","value":"3+ (>2/hpf)","unit":"","ref":"Absent","flag":"H"},
    {"test":"Direct Coombs (DAT)","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Creatinine","value":"1.2","unit":"mg/dL","ref":"0.7-1.3","flag":""},
    {"test":"ADAMTS13 activity (send-out)","value":"<5% activity — severely deficient","unit":"","ref":">67%","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["TTP — PLASMIC 7, ADAMTS13 <5%, microangiopathic hemolysis (correct)","HUS (hemolytic uremic syndrome) — prominent AKI, diarrhea prodrome (STEC), different ADAMTS13","DIC — PT/PTT prolonged, fibrinogen low; TTP has normal coagulation","Evans syndrome — immune-mediated: Coombs positive; TTP Coombs negative","HELLP syndrome — pregnancy-associated; patient not pregnant","Thrombocytopenia from sepsis — no schistocytes or MAHA pattern"],
  "coachFinal": "Diagnosis: TTP. Key learning: (1) PLASMIC score (clinical TTP prediction before ADAMTS13 results): Platelet <30K, hemoLysis markers (LDH >2x ULN), no Active cancer, no Stem cell transplant, MCV <90, INR <1.5, Creatinine <2. Score 6-7 = high probability TTP → start PEX immediately without waiting for ADAMTS13 result. (2) TTP mechanism: ADAMTS13 (a VWF-cleaving protease) is severely deficient due to autoantibody → ultra-large VWF multimers accumulate → spontaneous platelet aggregation → microthrombi → MAHA + thrombocytopenia + end-organ ischemia. (3) PEX removes the anti-ADAMTS13 antibody and replenishes ADAMTS13. This is why PEX works — it is both therapeutic (removes antibody) and replacement (restores enzyme). Must use FFP as replacement — albumin does NOT work. (4) Platelet transfusion in TTP: absolutely contraindicated except for life-threatening hemorrhage — provides substrate for further microvascular thrombosis, worsening ischemia. Classic teaching: 'fuel to the fire.' (5) Caplacizumab: anti-VWF nanobody that prevents VWF-platelet interaction. Dramatically speeds platelet count recovery and reduces refractory/relapsing TTP. Started alongside PEX."
},
"venom-immunotherapy-reaction-v2": {
  "diagnosis": "Venom Immunotherapy Systemic Reaction — Dose Modification, Pre-Medication Protocol, Treatment Continuation Decision",
  "problems": [
    {"problem":"Venom immunotherapy (VIT) systemic reaction — yellow jacket updosing","icd":"T63.461A","onset":"2024","status":"Active","notes":"Carlos Rivera, 45M — on yellow jacket VIT, updosing phase. 30 min post-injection: urticaria + throat tightness. Epinephrine given."},
    {"problem":"VIT reaction management — dose reduction and pre-medication protocol","icd":"T63.461A","onset":"2024","status":"Active","notes":"Systemic reaction during VIT requires dose reduction, not discontinuation. Risk-benefit strongly favors continuing VIT."},
    {"problem":"Mast cell disorder workup — elevated baseline tryptase found","icd":"D47.09","onset":"2024","status":"Active","notes":"Baseline tryptase 18 — above normal. Mastocytosis workup indicated. Associated with increased VIT reaction risk."}
  ],
  "medications": [
    {"name":"Epinephrine 0.3mg IM — administered at time of reaction","sig":"Systemic reaction to VIT = epinephrine first line. Given immediately.","prescriber":"Allergy","start":"2024","refills":0,"status":"Given"},
    {"name":"VIT dose reduction — return to last tolerated dose","sig":"After systemic reaction: reduce to last tolerated dose, advance more slowly. Do NOT discontinue VIT — loss of protection.","prescriber":"Allergy","start":"2024","refills":0,"status":"Active — protocol modified"},
    {"name":"Pre-medication protocol — antihistamine before injections","sig":"Cetirizine 10mg PO 1 hour before each VIT injection — reduces local and mild systemic reaction frequency.","prescriber":"Allergy","start":"2024","refills":5,"status":"Active — add pre-med"},
    {"name":"Omalizumab (Xolair) 300mg SQ monthly — consider if reactions persist","sig":"Anti-IgE therapy — reduces VIT reaction rate in high-risk patients (elevated tryptase, mastocytosis). Consider if continued systemic reactions despite protocol modification.","prescriber":"Allergy","start":"2024","refills":0,"status":"Consider — pending mastocytosis workup"}
  ],
  "labs": [{"date":"11/2024","panel":"VIT Reaction Assessment","results":[
    {"test":"Tryptase (acute, 1h post-reaction)","value":"32","unit":"ng/mL","ref":"<11.4","flag":"H"},
    {"test":"Baseline tryptase (24h post)","value":"18","unit":"ng/mL","ref":"<11.4","flag":"H"},
    {"test":"Yellow jacket venom IgE","value":"6.4","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"CBC","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"Bone marrow biopsy — ordered (KIT D816V mutation screen)","value":"Pending","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["VIT systemic reaction — mastocytosis background increasing risk (correct)","Anaphylaxis to stinging insect re-exposure — VIT injection is the controlled exposure","Vasovagal reaction to injection — no urticaria, pallor/bradycardia","Local reaction progressing to systemic — local reactions are common; systemic reaction defined by distant site involvement","Mast cell activation syndrome — elevated baseline tryptase; mastocytosis workup pending","Allergic reaction to VIT excipient — rare; venom is the antigen"],
  "coachFinal": "Diagnosis: VIT systemic reaction with elevated baseline tryptase — mastocytosis workup indicated. Key learning: (1) VIT indication: systemic anaphylaxis to stinging insects (bee, yellow jacket, wasp, hornet, fire ant) in adults. VIT reduces future anaphylaxis risk from ~60% to ~5%. VIT is also indicated for children with systemic reactions beyond urticaria. (2) Elevated baseline tryptase in VIT patients: baseline tryptase ≥11.4 ng/mL suggests systemic mastocytosis or monoclonal MCAS. These patients have: higher VIT reaction rates, more severe reactions, may require lifelong VIT (vs 5-year standard course). KIT D816V mutation on bone marrow biopsy confirms systemic mastocytosis. (3) Systemic VIT reaction management: do NOT stop VIT — the protection it provides is critical. Reduce to last well-tolerated dose, advance more slowly, add antihistamine pre-medication. Consider omalizumab pre-treatment if reactions persist. (4) Omalizumab + VIT: in patients with mastocytosis or elevated tryptase experiencing VIT reactions, pre-treatment with omalizumab dramatically reduces VIT reaction rate — allows successful completion of immunotherapy. (5) Duration of VIT: standard course is 5 years for bee/yellow jacket. After 5 years, most patients have persistent protection. Patients with mastocytosis, severe prior anaphylaxis, or continued systemic reactions on VIT should continue indefinitely."
},
"venom-immunotherapy-reaction": {
  "diagnosis": "Venom Anaphylaxis — Bee Sting, VIT Candidacy Assessment, Initial Evaluation and Workup",
  "problems": [
    {"problem":"Bee venom anaphylaxis — first systemic reaction","icd":"T63.441A","onset":"2024","status":"Active","notes":"Jennifer Osei, 52F — bee sting in garden, anaphylaxis: urticaria + throat swelling + hypotension. Epinephrine by EMS."},
    {"problem":"VIT candidacy — high-risk adult with systemic anaphylaxis","icd":"T63.441A","onset":"2024","status":"Active","notes":"Adult with systemic anaphylaxis = VIT indicated regardless of venom IgE level. Allergy referral within 1-2 weeks."},
    {"problem":"EpiPen prescription — bridge until VIT established","icd":"T63.441A","onset":"2024","status":"Active","notes":"Two EpiPens prescribed. Carry at all times — especially outdoors. Wear medical alert bracelet."}
  ],
  "medications": [
    {"name":"EpiPen 0.3mg x2 — prescribe at discharge","sig":"Inject lateral thigh at first sign of systemic reaction. Call 911. Second dose at 5-10 min if no improvement.","prescriber":"ED/Allergy","start":"2024","refills":1,"status":"Active — bridge to VIT"},
    {"name":"Loratadine 10mg PO daily — scheduled antihistamine","sig":"Daily antihistamine does NOT protect against anaphylaxis but reduces urticaria risk and minor reactions.","prescriber":"Allergy","start":"2024","refills":5,"status":"Active"},
    {"name":"Allergy referral — urgent (1-2 weeks)","sig":"Venom skin testing + VIT initiation after complete recovery from acute reaction (typically 4-6 weeks post-sting).","prescriber":"ED","start":"2024","refills":0,"status":"Active — referral"}
  ],
  "labs": [{"date":"11/2024","panel":"Venom Allergy Workup","results":[
    {"test":"Tryptase (1h post-anaphylaxis)","value":"28","unit":"ng/mL","ref":"<11.4","flag":"H"},
    {"test":"Baseline tryptase (24h post)","value":"5.2","unit":"ng/mL","ref":"<11.4","flag":""},
    {"test":"Honeybee venom IgE (RAST)","value":"4.8","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"CBC","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"BP on discharge","value":"122/76","unit":"mmHg","ref":"Normal","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Bee venom anaphylaxis — systemic reaction, epinephrine required (correct)","Yellow jacket anaphylaxis — double sting venom sensitivity; skin testing will differentiate","Vasovagal reaction — pallor + bradycardia without urticaria/angioedema","Panic attack — no urticaria, objective findings absent","MAST cell activation syndrome — baseline tryptase normal here","Drug reaction — no new medications; sting timing is diagnostic"],
  "coachFinal": "Diagnosis: bee venom anaphylaxis, VIT candidate. Key learning: (1) VIT indication in adults: any systemic reaction beyond urticaria (i.e., includes cardiovascular, respiratory, or GI involvement). Adults with urticaria-only reactions have only ~10-15% recurrence risk and VIT is not routinely indicated. Children with urticaria-only reactions also generally do not require VIT (lower recurrence risk). (2) Venom skin testing timing: wait 4-6 weeks after the sting before performing skin testing — refractory period makes testing unreliable immediately after anaphylaxis. (3) Which venoms to test: honeybee, yellow jacket, yellow-faced hornet, white-faced hornet, wasp — all five Hymenoptera venoms tested because patients often cannot identify which insect stung them, and cross-reactivity exists (yellow jacket/hornet/wasp cross-react; honeybee does not). (4) VIT efficacy: reduces future anaphylaxis risk from ~60% down to ~3-5%. Five-year standard course for most patients — protection persists for many years after stopping. (5) Baseline tryptase 5.2 (normal) in this patient — reassuring. Elevated baseline tryptase (>11.4) suggests mastocytosis and warrants workup and possibly lifelong VIT."
},
"vt-syncope": {
  "diagnosis": "Ventricular Tachycardia Causing Syncope — Structural Heart Disease, ICD Implantation Indicated",
  "problems": [
    {"problem":"Ventricular tachycardia — sustained, causing syncope","icd":"I47.2","onset":"2024","status":"Active","notes":"Harold Washington, 64M — prior MI 3 years ago, EF 30%. Witnessed syncope at home. EMS: sustained monomorphic VT 180 bpm."},
    {"problem":"HFrEF — EF 30%, prior anterior MI substrate for VT","icd":"I50.20","onset":"2021","status":"Active","notes":"Scar from prior LAD territory MI provides re-entrant circuit for monomorphic VT. Substrate ablation or ICD needed."},
    {"problem":"ICD implantation — secondary prevention indication","icd":"Z45.018","onset":"2024","status":"Active","notes":"Sustained VT causing syncope in structural heart disease = Class I ICD indication. EP consultation active."}
  ],
  "medications": [
    {"name":"Amiodarone 150mg IV over 10 min, then 1mg/min infusion — acute VT","sig":"Acute VT cardioversion preferred if hemodynamically unstable. Amiodarone for stable or recurrent VT.","prescriber":"Cardiology/EP","start":"2024","refills":0,"status":"Given — acute"},
    {"name":"Metoprolol succinate 25mg PO daily — beta-blocker","sig":"Continue beta-blocker — GDMT for HFrEF AND reduces VT burden. Increase dose as tolerated.","prescriber":"Cardiology","start":"2021","refills":5,"status":"Active"},
    {"name":"Amiodarone 200mg PO daily — bridge and adjunct to ICD","sig":"Oral amiodarone reduces VT burden and appropriate ICD shocks. Monitor thyroid, pulmonary, hepatic, and ocular annually.","prescriber":"EP","start":"2024","refills":5,"status":"Active — post-ICD adjunct"},
    {"name":"ICD implantation — EP procedure scheduled","sig":"Secondary prevention ICD — sustained VT causing syncope in structural heart disease. Single-chamber vs biventricular ICD (CRT-D) based on QRS duration.","prescriber":"EP","start":"2024","refills":0,"status":"Scheduled"}
  ],
  "labs": [{"date":"11/2024","panel":"VT Workup","results":[
    {"test":"Troponin I","value":"0.06","unit":"ng/mL","ref":"<0.04","flag":"H"},
    {"test":"Potassium","value":"3.3","unit":"mEq/L","ref":"3.5-5.0","flag":"L"},
    {"test":"Magnesium","value":"1.6","unit":"mg/dL","ref":"1.7-2.2","flag":"L"},
    {"test":"TSH","value":"2.2","unit":"mIU/L","ref":"0.4-4.0","flag":""},
    {"test":"QTc (ECG)","value":"448","unit":"ms","ref":"<450ms","flag":""},
    {"test":"EF (echo)","value":"30","unit":"%","ref":">55%","flag":"L"}
  ]}],
  "imaging": [{"date":"11/2024","study":"Echocardiogram","indication":"VT, prior MI, assess EF and wall motion","findings":"EF 30%. Anterior wall motion abnormality. LV dilation. No pericardial effusion. Moderate MR.","impression":"Ischemic cardiomyopathy — substrate for re-entrant VT. ICD and EP evaluation indicated."}],
  "ddxTargets": ["Sustained VT — ischemic cardiomyopathy substrate, ICD indicated (correct)","SVT with aberrancy — narrow QRS baseline, but VT vs SVT: if structural heart disease + wide complex tachycardia = VT until proven otherwise","Torsades de pointes — QTc mildly prolonged but monomorphic morphology; TdP is polymorphic with twisting axis","Brugada syndrome — different ECG pattern, no structural heart disease","AVNRT — young, no structural disease, responds to adenosine; not this presentation","Cardiogenic syncope from bradycardia — heart block pattern, not tachyarrhythmia"],
  "coachFinal": "Diagnosis: sustained VT causing syncope, ischemic cardiomyopathy. Key learning: (1) Brugada rule for wide complex tachycardia: any wide complex tachycardia (WCT) in a patient with structural heart disease = VT until proven otherwise. Even if they appear hemodynamically stable. Treat as VT. SVT with aberrancy in structural heart disease is uncommon; VT is common. (2) ICD indications — secondary prevention: sustained VT/VF causing syncope or hemodynamic instability in patients who survive. Primary prevention: EF ≤35% on optimal GDMT x3 months despite no prior sustained VT (EF criteria met here — double indication). (3) Electrolytes and VT: hypokalemia and hypomagnesemia are highly arrhythmogenic. Every VT patient needs K+ and Mg2+ checked and repleted to K+ ≥4.0 and Mg2+ ≥2.0. (4) Amiodarone monitoring: annual TSH (hypo/hyperthyroidism), PFTs (pulmonary toxicity), LFTs (hepatotoxicity), slit-lamp eye exam (corneal microdeposits, optic neuropathy — rare). Half-life of 40-55 days — side effects can persist long after stopping. (5) VT ablation: catheter ablation of the reentrant VT circuit is an alternative or adjunct to amiodarone. Reduces appropriate ICD shocks in structural heart disease VT. EP evaluation for ablation candidacy alongside ICD implantation."
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
