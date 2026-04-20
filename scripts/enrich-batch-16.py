#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"severe-allergic-reaction-v2": {
  "diagnosis": "Anaphylaxis — Exercise-Induced Food-Dependent (FDEIA), Wheat Cofactor, Epinephrine and Avoidance Education",
  "problems": [
    {"problem":"Food-dependent exercise-induced anaphylaxis — wheat + exercise","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"Jason Kim, 28M — urticaria, wheeze, hypotension while jogging 2h after pasta dinner. Prior episodes identified retrospectively."},
    {"problem":"Cofactor-driven anaphylaxis — neither food NOR exercise alone triggers reaction","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"Neither pasta alone nor exercise alone causes reaction. The COMBINATION is the trigger — a unique anaphylaxis mechanism."},
    {"problem":"Wheat omega-5 gliadin IgE — diagnostic biomarker for FDEIA","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"Omega-5 gliadin-specific IgE is the diagnostic test of choice for wheat-FDEIA. RAST to whole wheat may be negative."}
  ],
  "medications": [
    {"name":"Epinephrine 0.3mg IM — given in ED","sig":"First-line — anaphylaxis treatment.","prescriber":"ED","start":"2024","refills":0,"status":"Given"},
    {"name":"EpiPen 0.3mg x2 — discharge prescription","sig":"Carry at all times — especially during and after meals before any physical activity.","prescriber":"Allergy","start":"2024","refills":1,"status":"Active"},
    {"name":"Avoidance — no exercise within 4-6 hours of wheat ingestion","sig":"Primary prevention: do not exercise within 4-6h of eating wheat. Alternatively: strict wheat avoidance if exercise is planned.","prescriber":"Allergy","start":"2024","refills":0,"status":"Active — dietary/activity restriction"}
  ],
  "labs": [{"date":"11/2024","panel":"FDEIA Workup","results":[
    {"test":"Omega-5 gliadin IgE (Tri a 19)","value":"8.4","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Wheat IgE (whole)","value":"1.2","unit":"kU/L","ref":"<0.35","flag":"H"},
    {"test":"Tryptase (post-reaction)","value":"26.4","unit":"ng/mL","ref":"<11.4","flag":"H"},
    {"test":"Aspirin/NSAID use","value":"Ibuprofen taken for muscle soreness before run","unit":"","ref":"","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["FDEIA — wheat + exercise cofactor, omega-5 gliadin IgE positive (correct)","Exercise-induced anaphylaxis (no food) — no food cofactor required; different management","IgE-mediated wheat allergy — would react to wheat alone; exercise independence","Cholinergic urticaria — small wheals with exercise, heat; not anaphylaxis","Cardiac arrhythmia during exercise — ECG during episode; tryptase rise confirms allergic","NSAID + exercise cofactor — NSAIDs are a common cofactor (ibuprofen identified here — educate patient)"],
  "coachFinal": "Diagnosis: wheat-dependent exercise-induced anaphylaxis (WDEIA/FDEIA). Key learning: (1) FDEIA mechanism: exercise after food ingestion → increased gut permeability + mast cell sensitization + augmented allergen absorption → threshold exceeded for mast cell degranulation. Neither the food nor exercise alone triggers reaction. (2) Omega-5 gliadin (Tri a 19): the specific wheat protein responsible for WDEIA. Standard wheat IgE testing may be negative or low — order OMEGA-5 GLIADIN IgE specifically in suspected WDEIA. High sensitivity and specificity for this condition. (3) Cofactors that lower threshold: exercise, NSAIDs (ibuprofen, aspirin), alcohol, menstruation, sleep deprivation. This patient had BOTH exercise AND ibuprofen — double cofactor. NSAIDs are a major trigger and must be on the avoidance list. (4) Management: primary prevention = avoid wheat within 4-6 hours of exercise OR avoid exercise within 4-6h of wheat meals. Some patients choose strict wheat elimination if physically active. EpiPen mandatory. (5) Non-wheat FDEIA triggers: other foods (shrimp, celery, peach, others depending on population). The mechanism is the same — food + cofactor = reaction. Pattern recognition is key — detailed history of timing and concurrent activities often reveals the diagnosis that would otherwise be missed."
},
"severe-allergic-reaction-v3": {
  "diagnosis": "Anaphylaxis — Idiopathic, Mastocytosis Excluded, Omalizumab Initiated for Prevention",
  "problems": [
    {"problem":"Idiopathic anaphylaxis — no trigger identified after full workup","icd":"T78.2XXA","onset":"2023","status":"Active","notes":"Rachel Torres, 35F — 5 episodes of anaphylaxis over 18 months, no identifiable trigger. Extensive workup negative."},
    {"problem":"Mastocytosis excluded — baseline tryptase normal, bone marrow negative","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"Baseline tryptase 5.8 ng/mL (normal). Bone marrow biopsy: no mast cell aggregates. KIT D816V negative. Mastocytosis excluded."},
    {"problem":"Omalizumab initiated — prevention of recurrent idiopathic anaphylaxis","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"Omalizumab 300mg q4 weeks — anti-IgE reduces anaphylaxis frequency and severity in idiopathic anaphylaxis."}
  ],
  "medications": [
    {"name":"Omalizumab 300mg SQ q4 weeks — prevention","sig":"Anti-IgE — reduces free IgE available for mast cell/basophil sensitization. Significantly reduces recurrence frequency and severity.","prescriber":"Allergy","start":"2024","refills":11,"status":"Active"},
    {"name":"Cetirizine 10mg BID + famotidine 40mg BID — daily maintenance","sig":"Daily H1/H2 antihistamine — reduces baseline mast cell mediator effects and may reduce severity of breakthrough reactions.","prescriber":"Allergy","start":"2024","refills":5,"status":"Active"},
    {"name":"EpiPen 0.3mg x2 — always carry","sig":"Mandatory — idiopathic anaphylaxis can recur without warning. Two auto-injectors at all times.","prescriber":"Allergy","start":"2023","refills":1,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Idiopathic Anaphylaxis Workup","results":[
    {"test":"Baseline tryptase","value":"5.8","unit":"ng/mL","ref":"<11.4","flag":""},
    {"test":"KIT D816V mutation","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Bone marrow biopsy","value":"No mast cell aggregates — mastocytosis excluded","unit":"","ref":"Normal","flag":""},
    {"test":"C4, C1-INH","value":"Normal","unit":"","ref":"Normal","flag":""},
    {"test":"Comprehensive allergen panel","value":"No relevant sensitization","unit":"","ref":"Negative","flag":""},
    {"test":"24h urine histamine","value":"Normal","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Idiopathic anaphylaxis — extensive workup negative, omalizumab indicated (correct)","Systemic mastocytosis — excluded by bone marrow biopsy and normal tryptase","Mast cell activation syndrome (MCAS) — normal tryptase and triggers; MCAS is controversial and diagnosis of exclusion","Hereditary alpha-tryptasemia — elevated tryptase from extra gene copies; normal tryptase here","Occult food allergy — possible but comprehensive allergen testing negative; FDEIA possible if exercise-related","HAE type III — recurrent angioedema in women, estrogen-related; no angioedema predominance here"],
  "coachFinal": "Diagnosis: idiopathic anaphylaxis — omalizumab treatment. Key learning: (1) Idiopathic anaphylaxis workup: after confirming anaphylaxis criteria, exclude: (a) food allergen (comprehensive IgE panel, supervised oral challenges for suspected foods), (b) Hymenoptera venom, (c) medications, (d) latex, (e) mastocytosis (baseline tryptase + bone marrow if tryptase >20), (f) HAE (complement panel), (g) MCAS (24h urine histamine/prostaglandin D2), (h) exercise and cofactors. If ALL excluded: idiopathic anaphylaxis. (2) Idiopathic anaphylaxis management: EpiPen mandatory + daily antihistamines + consider omalizumab. Historical practice included systemic steroids and antihistamines as daily prophylaxis — omalizumab has largely replaced this for frequent recurrences. (3) Omalizumab mechanism in anaphylaxis: binds free IgE → reduces IgE available to crosslink FcεRI on mast cells and basophils → reduces mast cell sensitivity. Reduces frequency AND severity of idiopathic anaphylaxis reactions. (4) MCAS controversy: mast cell activation syndrome is a controversial diagnosis — requires documentation of symptoms consistent with mast cell degranulation + elevated mast cell mediators during a symptomatic episode + response to mast cell-directed therapy. Normal baseline tryptase does not exclude MCAS, but a negative 24h urine histamine during symptoms makes it less likely. (5) Prognosis: idiopathic anaphylaxis tends to remit over time (50% remission within 5 years). Continue omalizumab until 1 year free of episodes, then taper."
},
"severe-allergic-reaction": {
  "diagnosis": "Anaphylaxis — Perioperative, Neuromuscular Blocking Agent (Succinylcholine), Most Common OR Anaphylaxis Trigger",
  "problems": [
    {"problem":"Perioperative anaphylaxis — intraoperative cardiovascular collapse","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"Karen Williams, 52F — BP dropped to 60/30, diffuse urticaria, bronchospasm during induction. Succinylcholine given 2 min before collapse."},
    {"problem":"Succinylcholine allergy — neuromuscular blocking agent, most common perioperative allergen","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"NMBAs (neuromuscular blocking agents) are the most common cause of perioperative anaphylaxis — 50-70% of OR anaphylaxis cases."},
    {"problem":"Allergy workup deferred to post-operative allergy referral","icd":"T78.2XXA","onset":"2024","status":"Active","notes":"Skin testing for all perioperative drugs given in 24h prior to reaction — identifies causative agent and safe alternatives for future surgery."}
  ],
  "medications": [
    {"name":"Epinephrine 0.3mg IM (then infusion) — anaphylaxis treatment","sig":"IV access present in OR — epinephrine 0.1-1mg IV bolus for perioperative anaphylaxis, then infusion if needed.","prescriber":"Anesthesia","start":"2024","refills":0,"status":"Given"},
    {"name":"Diphenhydramine 50mg IV + ranitidine 50mg IV — adjunct","sig":"H1 + H2 blockade after epinephrine stabilizes patient.","prescriber":"Anesthesia","start":"2024","refills":0,"status":"Given"},
    {"name":"Allergy/immunology referral — 4-6 weeks post-reaction","sig":"Skin test all agents given perioperatively. Identify causative agent. Document safe alternatives for future anesthesia.","prescriber":"Allergy","start":"After discharge","refills":0,"status":"Referral placed"}
  ],
  "labs": [{"date":"11/2024","panel":"Perioperative Anaphylaxis Panel","results":[
    {"test":"Tryptase (drawn during reaction)","value":"38.4","unit":"ng/mL","ref":"<11.4","flag":"H"},
    {"test":"Tryptase at 24h (baseline)","value":"4.6","unit":"ng/mL","ref":"<11.4","flag":""},
    {"test":"Histamine (plasma — drawn immediately)","value":"Markedly elevated","unit":"","ref":"Normal","flag":"H"},
    {"test":"CBC — eosinophils","value":"1.2","unit":"K/μL","ref":"<0.5","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Perioperative anaphylaxis — succinylcholine, classic timing (correct)","Anaphylactoid reaction (non-IgE) — drugs like vancomycin, morphine can cause non-IgE histamine release; tryptase rise less dramatic","Vasovagal reaction during induction — no urticaria or bronchospasm","Laryngospasm from intubation — respiratory without cardiovascular collapse + urticaria","Transfusion reaction — blood products given? Not in this case","Tension pneumothorax — cardiovascular collapse but no urticaria or bronchospasm"],
  "coachFinal": "Diagnosis: perioperative anaphylaxis — succinylcholine. Key learning: (1) Perioperative anaphylaxis timing: occurs within minutes of drug administration during induction. Triad: hypotension + bronchospasm + urticaria/flush. Urticaria may be absent in 15-20% of cases (esp. under drapes) — cardiovascular collapse + bronchospasm alone = anaphylaxis until proven otherwise in the OR. (2) Most common causative agents in OR anaphylaxis: NMBAs (50-70% — succinylcholine, rocuronium), antibiotics (cefazolin most common), latex (~12%), blue dyes (isosulfan blue for sentinel node), colloids, opioids. (3) Tryptase timing in OR: draw during reaction + at 1h + at 24h (baseline). Acute tryptase markedly elevated + normal baseline = mast cell-mediated (IgE or anaphylactoid). Normal acute tryptase does NOT exclude anaphylaxis — early drawing may miss the peak. (4) Allergy workup timing: refer to allergy 4-6 weeks post-reaction (acute phase masks testing results). Skin prick and intradermal testing to all drugs given perioperatively — identifies specific causative agent. Cross-reactive NMBAs should be tested. Safe alternatives documented in chart. (5) Rocuronium (NMBA) allergy: most common individual NMBA cause. Sugammadex can reverse rocuronium — some centers prefer rocuronium over succinylcholine for RSI given immediate reversal option. However, sugammadex itself can rarely cause anaphylaxis."
},
"severe-hypothermia": {
  "diagnosis": "Severe Hypothermia — Core Temperature 28°C, Active Rewarming, ECMO if Cardiac Arrest",
  "problems": [
    {"problem":"Severe hypothermia — core temperature 28°C, altered consciousness","icd":"T68.XXXA","onset":"2024","status":"Active","notes":"David Chen, 38M — found outdoors in winter, estimated exposure 6h. GCS 9. Temperature 28°C rectal. HR 38, AF on ECG."},
    {"problem":"Hypothermic cardiac arrhythmia — atrial fibrillation with slow rate","icd":"I48.19","onset":"2024","status":"Active","notes":"AF is expected at <30°C — do not cardiovert or give antiarrhythmics for hypothermic AF. Rewarm first."},
    {"problem":"Do not diagnose death until warm and dead — core principle","icd":"T68.XXXA","onset":"2024","status":"Active","notes":"ECMO-mediated rewarming can save patients with cardiac arrest from hypothermia with potassium <12 mmol/L."}
  ],
  "medications": [
    {"name":"Active external rewarming — warming blankets, warm IV fluids (42°C)","sig":"Warm IV fluids, warming blankets, warming mattress. Target: raise core temp 1-2°C/hour. Avoid sudden warming of extremities before core (afterdrop).","prescriber":"ED/ICU","start":"2024","refills":0,"status":"Active"},
    {"name":"Warm humidified oxygen — inhaled rewarming adjunct","sig":"Inhaled heated humidified oxygen (42-46°C) — provides direct core rewarming via airway. Used for moderate-severe hypothermia.","prescriber":"Respiratory/Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"ECMO preparation — if cardiac arrest or refractory","sig":"Extracorporeal membrane oxygenation — the definitive rewarming method for hypothermic cardiac arrest. Potassium <12 mEq/L = ECMO candidate.","prescriber":"ICU/Cardiothoracic","start":"2024","refills":0,"status":"Standby — activate if arrest"},
    {"name":"NO antiarrhythmics, NO cardioversion for hypothermic AF","sig":"Hypothermic AF is expected and will spontaneously convert with rewarming. Antiarrhythmics are ineffective and proarrhythmic at <30°C.","prescriber":"ICU","start":"DO NOT GIVE","refills":0,"status":"HOLD — rewarm first"}
  ],
  "labs": [{"date":"11/2024","panel":"Hypothermia Panel","results":[
    {"test":"Core temperature (rectal)","value":"28","unit":"°C","ref":"36.1-37.2","flag":"L"},
    {"test":"Potassium","value":"4.8","unit":"mEq/L","ref":"3.5-5.0","flag":""},
    {"test":"ABG — pH (temperature-corrected)","value":"7.31","unit":"","ref":"7.35-7.45","flag":"L"},
    {"test":"Glucose","value":"188","unit":"mg/dL","ref":"70-100","flag":"H"},
    {"test":"ABG — PaO2","value":"72","unit":"mmHg","ref":"80-100","flag":"L"},
    {"test":"Coagulation — PT/INR","value":"1.6","unit":"","ref":"0.9-1.1","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Severe hypothermia — core temp 28°C, altered consciousness, hypothermic AF (correct)","Stroke mimicking hypothermia — altered consciousness, but rectal temperature is definitive","Sepsis with hypothermia — temperature paradox; consider sepsis workup but treat hypothermia simultaneously","Drug toxicity (opioid, alcohol) — intoxication lowers temperature; toxicology screen ordered","Hypothyroidism (myxedema coma) — extreme hypothyroidism causes hypothermia; TSH + thyroid panel ordered","Addisonian crisis — electrolyte and cortisol workup concurrently"],
  "coachFinal": "Diagnosis: severe hypothermia — active rewarming. Key learning: (1) Hypothermia classification: mild 32-35°C (shivering, confusion), moderate 28-32°C (shivering stops, decreased consciousness, AF, J-waves on ECG), severe <28°C (loss of consciousness, ventricular fibrillation risk, apparent death). (2) Osborn (J) wave: positive deflection at the J-point (junction of QRS and ST segment) — pathognomonic for hypothermia. More pronounced with lower temperatures. (3) 'Not dead until warm and dead': the critical principle. Patients with hypothermic cardiac arrest may be fully resuscitable. The threshold: potassium <12 mEq/L = ECMO candidate (hyperkalemia from cell death indicates irreversible injury; K+ >12 = not survivable with rewarming). Successful resuscitations after >45 min of cardiac arrest from hypothermia are well-documented. (4) Rewarming strategy by severity: mild = passive rewarming (blankets, warm room). Moderate = active external rewarming (warming blankets, warm fluids). Severe = active internal rewarming (warm IV fluids, warm humidified O2, bladder/pleural irrigation). Cardiac arrest = ECMO rewarming. (5) Afterdrop: cold blood from extremities returning to core after external rewarming causes further drop in core temperature. Prioritize core rewarming over peripheral warming. Warm IV fluids and warm humidified oxygen target the core directly."
},
"severe-pancreatitis": {
  "diagnosis": "Severe Acute Pancreatitis — Gallstone Etiology, BISAP Score 4, ICU-Level Management",
  "problems": [
    {"problem":"Severe acute pancreatitis — BISAP score 4, organ failure","icd":"K85.10","onset":"2024","status":"Active","notes":"Carmen Lopez, 48F — epigastric pain radiating to back, nausea x2 days. Lipase 4800. SIRS x2 criteria. Creatinine rising."},
    {"problem":"Gallstone pancreatitis — cholelithiasis on ultrasound","icd":"K85.12","onset":"2024","status":"Active","notes":"Gallstones on US + elevated bilirubin + elevated AST — gallstone migration through common bile duct is the trigger."},
    {"problem":"Acute kidney injury — prerenal from third-spacing and SIRS","icd":"N17.9","onset":"2024","status":"Active","notes":"Creatinine 2.4 from baseline 0.9. Aggressive IVF resuscitation. Monitor urine output hourly."}
  ],
  "medications": [
    {"name":"Lactated Ringer's 250-500mL/h — aggressive IVF","sig":"LR preferred over NS in pancreatitis — reduces acidosis and may reduce SIRS severity. Target urine output >0.5 mL/kg/h.","prescriber":"GI/Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Morphine 2-4mg IV q4h PRN — pain control","sig":"IV opioid for pain. Myth: morphine worsens pancreatitis via Sphincter of Oddi — not supported by evidence. Use appropriate analgesia.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Early enteral nutrition — start NG feeds within 24-48h if unable to eat","sig":"Enteral nutrition maintains gut barrier, reduces bacterial translocation, improves outcomes over TPN in severe pancreatitis. Do NOT make patient NPO for days.","prescriber":"GI/Nutrition","start":"2024","refills":0,"status":"Active — NG feeds"},
    {"name":"ERCP — if choledocholithiasis confirmed or cholangitis develops","sig":"Urgent ERCP within 24-48h if concurrent cholangitis (Charcot's triad) or biliary obstruction. Not indicated for predicted severe pancreatitis alone.","prescriber":"GI","start":"2024","refills":0,"status":"Hold — pending MRCP/clinical assessment"}
  ],
  "labs": [{"date":"11/2024","panel":"Severe Pancreatitis Panel","results":[
    {"test":"Lipase","value":"4800","unit":"U/L","ref":"<60","flag":"H"},
    {"test":"ALT","value":"280","unit":"U/L","ref":"7-56","flag":"H"},
    {"test":"Total bilirubin","value":"3.4","unit":"mg/dL","ref":"0.1-1.2","flag":"H"},
    {"test":"Creatinine","value":"2.4","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Hematocrit","value":"48","unit":"%","ref":"36-48","flag":""},
    {"test":"WBC","value":"18.2","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Calcium","value":"7.4","unit":"mg/dL","ref":"8.5-10.5","flag":"L"}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Abdomen/Pelvis With Contrast — CECT","indication":"Severe pancreatitis — necrosis assessment","findings":"Pancreatic edema and peripancreatic fat stranding. 30% pancreatic necrosis. No abscess. Gallstones in gallbladder. Common bile duct 7mm — mild dilation.","impression":"Moderate-severe necrotizing pancreatitis from gallstones. CTSI (CT Severity Index) 6/10. CBD dilation — MRCP to assess for choledocholithiasis."}],
  "ddxTargets": ["Gallstone pancreatitis — lipase 4800, elevated AST/bilirubin, gallstones on US (correct)","Alcoholic pancreatitis — no alcohol history; AST/bilirubin pattern more consistent with biliary","Hypertriglyceridemia pancreatitis — triglycerides normal","Peptic ulcer perforation — lipase can rise, but free air; this is pancreatitis pattern","Mesenteric ischemia — lactate normal; different pain pattern; lipase distinguishes","ERCP-induced pancreatitis — no prior ERCP"],
  "coachFinal": "Diagnosis: severe gallstone pancreatitis. Key learning: (1) BISAP score (Bedside Index of Severity in Acute Pancreatitis): BUN >25 (+1), Impaired mental status (+1), SIRS criteria ≥2 (+1), Age >60 (+1), Pleural effusion (+1). Score 3-5 = high mortality risk (>15%). This patient: BISAP 4 = severe. (2) Etiology distinction: gallstone = elevated liver enzymes (ALT >3x normal is 95% PPV for gallstones), elevated bilirubin, gallstones on imaging, no alcohol history. ALT >150 IU/L in pancreatitis → gallstones until proven otherwise. (3) Aggressive fluid resuscitation: 250-500mL/h of LR for first 24h — reduces pancreatic microcirculation ischemia and systemic SIRS. LR preferred over NS (reduces acidosis). Reassess q4-6h for response. Stop if signs of fluid overload. (4) Enteral nutrition myth: patients with pancreatitis should NOT be kept strictly NPO for days. Early enteral feeding (within 24-48h via NG if unable to eat) reduces complications, maintains gut barrier, reduces infectious complications, and improves outcomes compared to TPN. (5) Antibiotics: NOT indicated for sterile pancreatic necrosis prophylactically. Reserve antibiotics for infected necrosis (fever + CT findings + FNA-positive culture) or concurrent cholangitis. Prophylactic antibiotics do not reduce mortality in pancreatitis."
},
"sjs-ten-v2": {
  "diagnosis": "Stevens-Johnson Syndrome / TEN — Lamotrigine-Induced, Epidermal Detachment 18%, ICU Burn Unit Transfer",
  "problems": [
    {"problem":"SJS/TEN overlap — 18% BSA epidermal detachment, lamotrigine","icd":"L51.2","onset":"2024","status":"Active","notes":"Fatima Hassan, 29F — lamotrigine started 3 weeks ago for epilepsy. Fever, atypical targets, mucosal erosions, skin sloughing 18% BSA."},
    {"problem":"Mucosal involvement — oral, conjunctival, genital erosions","icd":"L51.2","onset":"2024","status":"Active","notes":"Oral hemorrhagic crusting, bilateral conjunctival erosions, urogenital mucosal involvement. All 3 mucosal sites affected."},
    {"problem":"Sepsis risk — loss of skin barrier, secondary bacteremia","icd":"L51.2","onset":"2024","status":"Active","notes":"Skin barrier disruption = open wound — similar to burns. ICU burn unit setting provides wound care expertise, infection monitoring, and nutritional support."}
  ],
  "medications": [
    {"name":"STOP lamotrigine — causative drug","sig":"Immediate discontinuation mandatory. Document allergy. Cross-reactivity with aromatic anticonvulsants possible.","prescriber":"Neurology/Dermatology","start":"DISCONTINUE","refills":0,"status":"DISCONTINUED"},
    {"name":"IVIG 1g/kg/day x3 days — adjunct immunomodulation","sig":"High-dose IVIG — blocks Fas-FasL pathway (apoptosis mechanism in TEN). Evidence supports use in SJS/TEN ≥10% BSA.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active"},
    {"name":"Cyclosporine 3-5mg/kg/day — immunosuppression","sig":"Cyclosporine inhibits T-cell activation driving keratinocyte apoptosis. Some evidence supports superior outcomes vs IVIG in TEN.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active — with ophthalmology monitoring"},
    {"name":"Wound care — non-adherent dressings, no debridement","sig":"Denuded skin treated like partial-thickness burns. Non-adherent silicone dressings. Do NOT debride viable skin. Daily wound assessment.","prescriber":"Burn Unit","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"TEN Assessment","results":[
    {"test":"SCORTEN score","value":"3","unit":"/7 points","ref":"Score 3 = ~35% mortality","flag":"H"},
    {"test":"Glucose","value":"168","unit":"mg/dL","ref":"70-100","flag":"H"},
    {"test":"Creatinine","value":"1.4","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"Albumin","value":"2.8","unit":"g/dL","ref":"3.5-5.0","flag":"L"},
    {"test":"BSA detachment","value":"18","unit":"%","ref":"<10% SJS","flag":"H"},
    {"test":"WBC","value":"3.2","unit":"K/μL","ref":"4.5-11","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["SJS/TEN overlap — 18% BSA, mucosal erosions, lamotrigine (correct)","EM major — <10% BSA, true target lesions, HSV-triggered; atypical targets and detachment indicate SJS/TEN","SSSS (staphylococcal scalded skin) — children, no mucosal involvement, Nikolsky positive but superficial cleavage","Pemphigus vulgaris — acantholysis on biopsy, no drug history, chronic onset","Linear IgA bullous dermatosis — linear IgA on DIF; drug-induced variant possible","Bullous pemphigoid — elderly, tense blisters, eosinophilia, different DIF pattern"],
  "coachFinal": "Diagnosis: SJS/TEN overlap (18% BSA). Key learning: (1) SJS/TEN classification by BSA detachment: SJS = <10%, SJS/TEN overlap = 10-30%, TEN = >30%. More BSA = higher mortality. All involve ATYPICAL target lesions (flat, 2-zone, dusky center + surrounding erythema — NOT the classic 3-zone EM target) and mucosal involvement (oral, ocular, genital). (2) SCORTEN prognostic score: Age >40, malignancy, HR >120, initial BSA >10%, BUN >28, serum glucose >252, bicarbonate <20. Each point = increasing mortality. Score 3 = ~35% mortality. Score ≥5 = >90%. Used to guide ICU triage. (3) Ophthalmologic emergency: conjunctival erosions in SJS/TEN cause symblepharon (adhesion of conjunctiva to lid) and corneal scarring → blindness. Ophthalmology consult DAILY from day 1. Amniotic membrane grafts if severe. This is the most preventable long-term complication. (4) IVIG vs cyclosporine: meta-analyses suggest cyclosporine (3-5 mg/kg/day) may have superior outcomes vs IVIG in TEN. Many centers now use cyclosporine first-line. TNF-alpha inhibitors (etanercept, thalidomide) — some evidence but not standard of care. Steroids are controversial. (5) Lamotrigine SJS/TEN: lamotrigine is one of the most common causes of SJS/TEN among anticonvulsants. Risk is highest in the first 8 weeks, with rapid titration, and in patients also on valproate (inhibits lamotrigine metabolism → higher drug levels → higher risk). Slow titration protocols exist precisely to reduce this risk."
},
"sjsten-overlap-v2": {
  "diagnosis": "SJS/TEN — Sulfonamide-Induced, Ophthalmologic Emergency, Burn Unit Protocol",
  "problems": [
    {"problem":"SJS/TEN — sulfamethoxazole, 15% BSA detachment","icd":"L51.2","onset":"2024","status":"Active","notes":"Michael Torres, 44M — TMP-SMX started 2 weeks ago. Atypical targets, mucosal erosions, 15% epidermal detachment."},
    {"problem":"Conjunctival involvement — bilateral pseudomembrane formation","icd":"H10.219","onset":"2024","status":"Active","notes":"Bilateral pseudomembranes forming on bulbar conjunctiva. Emergency ophthalmology — symblepharon lysis and amniotic membrane required."},
    {"problem":"Nutritional support — hypermetabolic from skin loss and infection stress","icd":"E46","onset":"2024","status":"Active","notes":"Denuded skin = major caloric loss. Enteral nutrition via NG tube immediately — caloric needs 35-40 kcal/kg/day in TEN."}
  ],
  "medications": [
    {"name":"STOP TMP-SMX — causative drug","sig":"Immediate discontinuation. Alternative infection treatment required.","prescriber":"Medicine/Dermatology","start":"DISCONTINUE","refills":0,"status":"DISCONTINUED"},
    {"name":"Cyclosporine 3mg/kg/day — T-cell inhibition","sig":"Inhibits keratinocyte apoptosis pathway — may halt disease progression if started early.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active"},
    {"name":"Amniotic membrane transplantation — bilateral eyes","sig":"Applied by ophthalmology — provides anti-inflammatory substrate, reduces symblepharon, preserves cornea.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active — procedure"},
    {"name":"NG tube enteral nutrition — 35-40 kcal/kg/day","sig":"High-calorie, high-protein formula. Start within 24h of ICU admission.","prescriber":"Nutrition/Burn Unit","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"SJS/TEN Assessment","results":[
    {"test":"SCORTEN","value":"2","unit":"/7","ref":"Score 2 = ~12% mortality","flag":""},
    {"test":"BSA detachment","value":"15","unit":"%","ref":"10-30% = overlap","flag":"H"},
    {"test":"Albumin","value":"2.6","unit":"g/dL","ref":"3.5-5.0","flag":"L"},
    {"test":"Creatinine","value":"1.2","unit":"mg/dL","ref":"0.7-1.3","flag":""},
    {"test":"CRP","value":"168","unit":"mg/L","ref":"<10","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["SJS/TEN overlap — TMP-SMX, mucosal + skin detachment (correct)","EM major — true 3-zone targets, <10% BSA; this has atypical targets and >10% detachment","Staphylococcal scalded skin — children, no mucosal involvement, superficial cleavage plane","Drug hypersensitivity exanthem without detachment — no Nikolsky sign, BSA not detaching","DRESS — eosinophilia, lymphadenopathy, systemic organs; no epidermal detachment","Fixed drug eruption — localized, recurrent at same site; not generalized"],
  "coachFinal": "Diagnosis: SJS/TEN — sulfonamide (TMP-SMX). Key learning: (1) Sulfonamides are among the most common causes of SJS/TEN worldwide — TMP-SMX, sulfasalazine, sulfadiazine. Other major culprits: allopurinol (#1 worldwide), aromatic anticonvulsants (carbamazepine, phenytoin, lamotrigine), NSAIDs (oxicam class), nevirapine. (2) Nikolsky sign in TEN: gentle lateral pressure on skin causes epidermal separation. Positive in TEN and SSSS but NOT in EM or drug rash without detachment. Demonstrates fragile dermo-epidermal junction. (3) Wound care principles: treat as partial-thickness burn — non-adherent dressings (Mepitel, Mepilex), daily gentle wound assessment, no forceful debridement of viable but detached skin. Temperature regulation (patient easily loses heat through denuded skin — warm room, warm IV fluids). (4) Infection monitoring: the primary cause of mortality in TEN after the acute phase is sepsis from loss of skin barrier. Daily blood cultures, wound cultures, low threshold for empiric antibiotics with clinical deterioration. (5) Long-term sequelae: ocular (vision loss, dry eye, photophobia), oral (xerostomia, mucosal scarring), genital (stenosis), pulmonary (bronchiectasis from bronchial mucosal involvement), skin (post-inflammatory dyspigmentation, nail loss). Long-term multidisciplinary follow-up required."
},
"sjsten-overlap": {
  "diagnosis": "SJS — Carbamazepine, Mucosal Involvement, Hospital Management and Allergy Evaluation",
  "problems": [
    {"problem":"Stevens-Johnson syndrome — carbamazepine, <10% BSA","icd":"L51.1","onset":"2024","status":"Active","notes":"David Wong, 31M — carbamazepine started 5 weeks ago. Oral and conjunctival erosions, atypical targets, 7% BSA detachment."},
    {"problem":"Carbamazepine — high-risk aromatic anticonvulsant for SJS/TEN","icd":"L51.1","onset":"2024","status":"Active","notes":"Carbamazepine and HLA-B*15:02 (Southeast Asian populations) — very strong association with SJS/TEN. Genetic screening now recommended before use."},
    {"problem":"Alternative anticonvulsant needed — non-aromatic ring compound","icd":"G40.909","onset":"2024","status":"Active","notes":"Carbamazepine, phenytoin, phenobarbital, oxcarbazepine (aromatic ring, cross-reactive) — ALL must be avoided. Levetiracetam or valproate as alternatives."}
  ],
  "medications": [
    {"name":"STOP carbamazepine — permanent discontinuation","sig":"Document allergy. Aromatic anticonvulsant cross-reactivity — avoid carbamazepine, phenytoin, phenobarbital, oxcarbazepine.","prescriber":"Neurology/Dermatology","start":"DISCONTINUE","refills":0,"status":"DISCONTINUED"},
    {"name":"Levetiracetam 500mg BID — replace carbamazepine","sig":"Non-aromatic anticonvulsant — safe alternative. No cross-reactivity with carbamazepine-induced SJS.","prescriber":"Neurology","start":"2024","refills":3,"status":"Active — replacement"},
    {"name":"Cyclosporine 3mg/kg/day — adjunct for SJS","sig":"T-cell inhibitor — adjunct for mucosal SJS. Monitor renal function and blood pressure.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active"},
    {"name":"Ophthalmology — urgent conjunctival assessment","sig":"Pseudomembrane removal, lubricating drops, amniotic membrane if severe.","prescriber":"Ophthalmology","start":"2024","refills":0,"status":"Active — urgent consult"}
  ],
  "labs": [{"date":"11/2024","panel":"SJS Workup","results":[
    {"test":"BSA detachment","value":"7","unit":"%","ref":"<10% = SJS","flag":"H"},
    {"test":"WBC","value":"4.8","unit":"K/μL","ref":"4.5-11","flag":""},
    {"test":"Eosinophils","value":"0.6","unit":"K/μL","ref":"<0.5","flag":"H"},
    {"test":"HLA-B*15:02 testing","value":"Positive","unit":"","ref":"Negative in European populations","flag":"H"},
    {"test":"Albumin","value":"3.2","unit":"g/dL","ref":"3.5-5.0","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["SJS — carbamazepine, HLA-B*15:02, mucosal involvement (correct)","TEN — BSA 7% is SJS range (<10%); monitor for progression","EM major — true 3-zone target lesions; SJS has flat atypical targets","DRESS — eosinophilia present but no multiorgan failure; look for overlap; skin detachment distinguishes","Fixed drug eruption — localized, recurrent; not generalized with mucosal involvement","Viral exanthem — no mucosal erosions, no detachment, no atypical targets"],
  "coachFinal": "Diagnosis: SJS — carbamazepine, HLA-B*15:02. Key learning: (1) HLA-B*15:02 and carbamazepine: HLA-B*15:02 allele is present in ~5-10% of Southeast and East Asian populations (Han Chinese, Thai, Malaysian, Filipino, Vietnamese). Carriers have >10x risk of SJS/TEN with carbamazepine. The FDA mandates HLA-B*15:02 testing before carbamazepine in patients of Asian ancestry. Negative test does not eliminate risk but significantly reduces it. (2) HLA-B*58:01: also relevant for allopurinol SJS/TEN in Asian populations. Two actionable pharmacogenomic tests in dermatology. (3) BSA monitoring: SJS patients require daily BSA assessment — progression from <10% to >30% can occur rapidly. Monitor for Nikolsky sign spread. ICU transfer if BSA expanding or systemic deterioration. (4) Aromatic anticonvulsant cross-reactivity: the aromatic ring structure (benzene ring in carbamazepine, phenytoin, phenobarbital) is the immunogenic epitope. Cross-reactivity among these three drugs is 40-80%. Oxcarbazepine has a similar structure — also typically avoided. Safe non-aromatic alternatives: levetiracetam, valproate, lamotrigine (paradoxically can cause SJS but different mechanism — slower titration reduces risk), gabapentin. (5) Oral and ocular care: oral: rinse with saline, topical anesthetic mouthwash, avoid trauma. Ocular: pseudomembrane removal with glass rod by ophthalmology, lubricating drops q1-2h, amniotic membrane if corneal involvement. Preventing ocular scarring is a major management priority."
},
"stroke-v1": {
  "diagnosis": "Acute Ischemic Stroke — Large Vessel Occlusion, Mechanical Thrombectomy Within 24 Hours",
  "problems": [
    {"problem":"Large vessel occlusion stroke — right MCA, NIHSS 20","icd":"I63.512","onset":"2024","status":"Active","notes":"James Wilson, 74M — sudden left hemiplegia + gaze deviation + aphasia. NIHSS 20. CT perfusion: large mismatch. LVO on CTA."},
    {"problem":"Thrombectomy candidate — NIHSS 20, ASPECTS 8, LKW 8 hours ago","icd":"I63.512","onset":"2024","status":"Active","notes":"Extended window (up to 24h) if CT perfusion shows penumbra > core mismatch. DAWN/DEFUSE-3 trial criteria."},
    {"problem":"tPA not given — anticoagulated on apixaban (last dose 14h ago)","icd":"I63.512","onset":"2024","status":"Active","notes":"On apixaban — tPA contraindicated within 48h of DOAC. Proceed directly to thrombectomy."}
  ],
  "medications": [
    {"name":"Mechanical thrombectomy — activate neurointerventional radiology immediately","sig":"LVO + salvageable penumbra on CT perfusion = thrombectomy. No tPA required or indicated here. Time to groin puncture is the key metric.","prescriber":"Neurology/Neuroradiology","start":"2024","refills":0,"status":"EMERGENT — IR activated"},
    {"name":"Aspirin 325mg via NG tube — after thrombectomy (not before)","sig":"Antiplatelet started after procedure — not before thrombectomy (bleeding risk during procedure).","prescriber":"Neurology","start":"2024","refills":0,"status":"After thrombectomy"},
    {"name":"Atorvastatin 80mg via NG tube QHS — start immediately","sig":"High-intensity statin regardless of baseline LDL — reduces recurrent stroke.","prescriber":"Neurology","start":"2024","refills":5,"status":"Active"},
    {"name":"BP management — permissive hypertension after thrombectomy","sig":"Allow BP up to 180/105 before thrombectomy (maintains penumbral perfusion). After thrombectomy with reperfusion: target <180/105 to prevent hyperperfusion hemorrhage.","prescriber":"Neurology","start":"2024","refills":0,"status":"Active — post-procedure protocol"}
  ],
  "labs": [{"date":"11/2024","panel":"Acute Stroke Panel","results":[
    {"test":"NIHSS","value":"20","unit":"points","ref":"0 = normal","flag":"H"},
    {"test":"Glucose","value":"138","unit":"mg/dL","ref":"70-140","flag":""},
    {"test":"INR","value":"1.0","unit":"","ref":"0.9-1.1","flag":""},
    {"test":"Platelet count","value":"198","unit":"K/μL","ref":"150-400","flag":""},
    {"test":"LDL","value":"112","unit":"mg/dL","ref":"<70 for stroke","flag":"H"},
    {"test":"ASPECTS score (CT)","value":"8","unit":"/10","ref":"≥6 = good territory","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Head/CTA/CT Perfusion Multimodal","indication":"Acute LVO stroke","findings":"CTA: right MCA M1 occlusion. CT perfusion: core infarct 18mL, penumbra 118mL — mismatch ratio 6.5x. ASPECTS 8. No hemorrhage.","impression":"Right MCA LVO with favorable penumbra-to-core mismatch. Thrombectomy candidate in extended window (LKW 8h). Activate IR immediately."}],
  "ddxTargets": ["LVO stroke — thrombectomy candidate, extended window (correct)","Lacunar infarct — small vessel, no LVO on CTA; NIHSS 20 is too high for lacunar","TIA — symptoms persisting; NIHSS 20 is not TIA","Hypoglycemic hemiplegia — glucose 138, not hypoglycemic","Hemiplegic migraine — no prior history, NIHSS 20 severity, LVO on CTA","Brain mass with Todd's paralysis — no prior seizure, CT perfusion pattern"]  ,
  "coachFinal": "Diagnosis: LVO stroke — thrombectomy. Key learning: (1) LVO definition: occlusion of a proximal intracranial artery (ICA, MCA M1, basilar) causing a large-territory stroke. Requires CTA or MRA for detection. NIHSS ≥6 in the right clinical context should prompt CTA. (2) Thrombectomy window extension: DAWN trial (2018) and DEFUSE-3 trial (2018) extended thrombectomy to 16-24h using CT perfusion to identify salvageable penumbra. Key criterion: mismatch (penumbra significantly larger than core infarct). This revolutionized stroke care — patients presenting late with LVO and favorable mismatch can still be treated. (3) tPA + thrombectomy: when tPA is NOT contraindicated, give tPA AND proceed to thrombectomy ('drip and ship' or 'mothership' approach). tPA while catheter is being prepared does not reduce thrombectomy efficacy and may improve partial reperfusion. (4) ASPECTS score: Alberta Stroke Program Early CT Score — 10 points for right MCA territory. Subtract 1 point for each region with early ischemic change. ASPECTS ≥6 = favorable anatomy for thrombectomy. ASPECTS <6 = large core infarct, lower thrombectomy benefit. (5) Hyperperfusion hemorrhage: after successful recanalization, the ischemic territory suddenly receives high blood flow — BP management critical. Target SBP <180/105 after reperfusion. Headache + seizure post-thrombectomy = hyperperfusion — emergency head CT."
},
"subdural-hematoma": {
  "diagnosis": "Chronic Subdural Hematoma — Elderly on Anticoagulation, Minor Trauma, Burr Hole Drainage",
  "problems": [
    {"problem":"Chronic subdural hematoma — bilateral, anticoagulation-related","icd":"S06.5X9A","onset":"2024","status":"Active","notes":"Eleanor Walsh, 78F — on apixaban for AFib. Fell 3 weeks ago, now progressive confusion and gait instability. CT: bilateral crescent-shaped hypodense collections."},
    {"problem":"Anticoagulation management — apixaban reversal decision","icd":"S06.5X9A","onset":"2024","status":"Active","notes":"Andexanet alfa (Andexxa) — FDA-approved reversal for apixaban and rivaroxaban. Required before neurosurgical drainage."},
    {"problem":"Anticoagulation restart timing — high stroke risk (AFib) vs rebleed risk","icd":"I48.19","onset":"2020","status":"Active","notes":"CHA2DS2-VASc 6 — very high stroke risk. Restart anticoagulation at 7-14 days post-drainage after neurosurgery clears."}
  ],
  "medications": [
    {"name":"Andexanet alfa (Andexxa) — apixaban reversal","sig":"FDA-approved factor Xa inhibitor reversal agent. Given before neurosurgical procedure. Dose depends on timing of last apixaban dose.","prescriber":"Neurosurgery/Hematology","start":"2024","refills":0,"status":"Active"},
    {"name":"Burr hole craniotomy — neurosurgical drainage","sig":"Bilateral burr holes with irrigation for chronic SDH. Reduces mass effect and improves symptoms. Recurrence rate 10-30%.","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Active — procedure"},
    {"name":"Dexamethasone 4mg q6h — cerebral edema","sig":"Reduces pericollection edema and may reduce SDH recurrence (used adjunctively).","prescriber":"Neurosurgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Apixaban — restart 7-14 days post-procedure","sig":"Discuss timing with neurosurgery. High CHA2DS2-VASc = restart early if surgical hemostasis adequate.","prescriber":"Cardiology/Neurosurgery","start":"Hold","refills":5,"status":"Hold — restart 7-14 days post-op"}
  ],
  "labs": [{"date":"11/2024","panel":"SDH Assessment","results":[
    {"test":"INR","value":"1.0","unit":"","ref":"0.9-1.1","flag":""},
    {"test":"Anti-Xa level (apixaban)","value":"0.38","unit":"IU/mL","ref":"0 = no drug present","flag":"H"},
    {"test":"Hemoglobin","value":"11.4","unit":"g/dL","ref":"12-16","flag":"L"},
    {"test":"Platelets","value":"168","unit":"K/μL","ref":"150-400","flag":""},
    {"test":"Creatinine","value":"1.2","unit":"mg/dL","ref":"0.7-1.3","flag":""}
  ]}],
  "imaging": [{"date":"11/2024","study":"CT Head Non-Contrast","indication":"Progressive confusion 3 weeks after fall","findings":"Bilateral subdural hypodense (chronic) collections, right > left. Right 15mm maximal thickness, midline shift 5mm rightward. Left 8mm. Mixed density on right suggests chronic with acute-on-chronic component.","impression":"Bilateral chronic subdural hematomas with mass effect. Neurosurgical evaluation for drainage. Reversal of anticoagulation required pre-operatively."}],
  "ddxTargets": ["Chronic SDH — anticoagulated elderly, minor trauma, 3-week delay (correct)","Acute SDH — high-density (bright) on CT; this is chronic (hypodense, isodense)","Epidural hematoma — lens-shaped, arterial, acute; young patients, skull fracture","Brain tumor — ring enhancement with contrast, different time course","Normal pressure hydrocephalus — triad of dementia/gait/incontinence, ventricular not extraaxial","Dementia — SDH must be excluded before attributing confusion to dementia"],
  "coachFinal": "Diagnosis: chronic SDH — anticoagulated elderly. Key learning: (1) Chronic SDH in elderly anticoagulated patients: the combination of cerebral atrophy (larger subdural space), anticoagulation, and minor trauma creates ideal conditions for chronic SDH. The bridging veins tear with minimal force, bleeding is slow (venous, not arterial), and the hematoma liquefies over weeks. CT shows HYPODENSE (dark) collection — older blood and protein-rich fluid. (2) Density timeline on CT: acute SDH = hyperdense (bright, fresh blood). Subacute (1-3 weeks) = isodense (hard to see). Chronic (>3 weeks) = hypodense (dark). Mixed density = acute-on-chronic rebleed. (3) DOAC reversal: apixaban and rivaroxaban (Xa inhibitors) → andexanet alfa (Andexxa). Dabigatran → idarucizumab (Praxbind). Neither responds to FFP or vitamin K. (4) Chronic SDH drainage: burr hole craniotomy is standard — less invasive than craniotomy, adequate for chronic liquid collections. Recurrence ~10-30% — repeat CT at 2 weeks post-op, then reassess. Recurrence risk factors: anticoagulation, bilateral SDH, post-op collections. (5) Anticoagulation restart after intracranial surgery: for AFib, restart at 7-14 days if neurosurgical hemostasis adequate and no active bleeding. Early restart (by 7 days) acceptable for high CHA2DS2-VASc (≥5) with low rebleed risk on repeat imaging. Shared decision with patient, neurosurgery, and cardiology."
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
print(f"\nBatch 16: {done}/{len(ENRICHMENTS)} enriched")
