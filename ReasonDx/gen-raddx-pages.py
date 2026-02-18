#!/usr/bin/env python3
"""
gen-raddx-pages.py — Generate RadDx body system pages from radiopaedia-map.json
Produces interactive imaging reasoning scenarios with the 4-step framework.
"""
import json, os, textwrap

ROOT = '/home/claude/reasondx'

# Load Radiopaedia mapping
with open(os.path.join(ROOT, 'data', 'radiopaedia-map.json')) as f:
    rmap = json.load(f)

# ============================================================
# SCENARIO CONTENT — each body system gets full clinical vignettes
# ============================================================
SCENARIOS = {
    "cardiac": [
        {
            "num": 1, "modality": "ECG + Coronary Angiography", "title": "Acute Coronary Syndrome",
            "vignette": 'A <strong>62-year-old male</strong> with HTN, DM2, and smoking presents with crushing substernal chest pressure radiating to the left arm for 45 minutes. Diaphoretic and nauseous. Vitals: HR 96, BP 148/90, SpO₂ 97%. <strong>Troponin pending.</strong>',
            "steps": [
                {
                    "type": "order", "question": "What must be obtained within 10 minutes of arrival?",
                    "choices": ["12-lead ECG", "Troponin, then decide on imaging", "CT coronary angiography", "Chest X-ray"],
                    "correct": 0,
                    "explanation": "<h4>ECG Within 10 Minutes — AHA/ACC Mandate</h4><p><strong>A 12-lead ECG must be obtained within 10 minutes</strong> of first medical contact in suspected ACS. This is the single most time-critical diagnostic in cardiology. ST elevation in contiguous leads = STEMI → cath lab activation. Don't wait for troponin to decide on ECG — troponin takes hours to rise while the ECG is immediate. CT coronary angiography is used for stable chest pain workup, not acute ACS.</p>",
                    "reveal_type": "danger"
                },
                {
                    "type": "interpret", "question": "ECG shows 3mm ST elevation in leads II, III, aVF with reciprocal depression in I and aVL. What coronary territory is involved?",
                    "choices": ["LAD — anterior wall", "RCA — inferior wall", "Circumflex — lateral wall", "Left main — diffuse changes"],
                    "correct": 1,
                    "explanation": "<h4>ECG Territory Mapping</h4><p><strong>Leads II, III, aVF = inferior wall = Right Coronary Artery (RCA)</strong> in 85% of patients (left circumflex in 15%). Reciprocal changes in I/aVL confirm this. Key next step: get a <strong>right-sided ECG (V4R)</strong> — ST elevation there indicates RV infarct, which means avoid nitroglycerin and aggressive fluids (RV is preload-dependent). Territory mapping: <strong>V1-V4 = LAD (anterior)</strong>, <strong>I, aVL, V5-V6 = LCx (lateral)</strong>, <strong>V1-V4 with tall R waves/ST depression = posterior MI</strong> (get posterior leads V7-V9).</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "integrate", "question": "STEMI confirmed. Door-to-balloon time goal is?",
                    "choices": ["90 minutes or less from first medical contact", "120 minutes", "Start thrombolytics first, then cath", "24 hours"],
                    "correct": 0,
                    "explanation": "<h4>Time = Myocardium</h4><p><strong>Door-to-balloon time < 90 minutes</strong> is the AHA/ACC standard. Every minute of delay increases myocardial necrosis. If PCI-capable hospital, activate cath lab immediately. If NOT PCI-capable and transfer will take >120 minutes, give thrombolytics (fibrinolysis) within 30 minutes and then transfer. The ECG finding triggered the entire cascade — from cath lab activation to PCI — making it the single most impactful imaging study in acute cardiology.</p>",
                    "reveal_type": "danger"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/acute-coronary-syndrome"
        },
        {
            "num": 2, "modality": "CXR + Echocardiogram", "title": "Heart Failure",
            "vignette": 'A <strong>70-year-old female</strong> with known HFrEF (EF 30%) presents with worsening orthopnea, PND, and 10-lb weight gain over 2 weeks. She ran out of furosemide. Vitals: HR 104, BP 162/98, SpO₂ 90%. Exam: <strong>bibasilar crackles, JVP to 14 cm, S3 gallop, 3+ bilateral pitting edema</strong>.',
            "steps": [
                {
                    "type": "expect", "question": "What CXR findings do you expect?",
                    "choices": ["Normal CXR", "Cardiomegaly, cephalization, bilateral effusions, Kerley B lines", "Focal RUL consolidation", "Bilateral apical cavitary lesions"],
                    "correct": 1,
                    "explanation": "<h4>CXR of Decompensated Heart Failure</h4><p>The CXR findings of CHF follow a <strong>predictable progression of severity</strong>: (1) <strong>Cephalization</strong> (redistribution of blood flow to upper lobes — normally lower lobes are more perfused), (2) <strong>Kerley B lines</strong> (interstitial edema — short horizontal lines at lung periphery), (3) <strong>Peribronchial cuffing</strong> and <strong>perihilar bat-wing edema</strong> (alveolar edema), (4) <strong>Bilateral pleural effusions</strong> (right often > left). Cardiomegaly (CTR >0.5) is the baseline finding in chronic HF.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "integrate", "question": "CXR shows new bilateral airspace opacities not present on prior CXR 3 months ago. Echo shows EF now 15% (was 30%). What does this imaging change suggest?",
                    "choices": ["Expected progression — increase diuretics only", "New acute insult (ischemia, arrhythmia, infection) — investigate underlying cause", "Artifact from fluid overload only", "Switch to hospice discussion"],
                    "correct": 1,
                    "explanation": "<h4>When Imaging Shows Unexpected Deterioration</h4><p>A drop from EF 30% → 15% is NOT typical chronic progression. This acute decline should trigger investigation for a <strong>reversible cause</strong>: new ischemia (troponin, ECG), new arrhythmia (telemetry — new atrial fibrillation?), myocarditis, or medication non-compliance beyond just the diuretic. The echo finding directly changed management from \"just diurese\" to \"find and fix the underlying trigger.\" This is how serial imaging changes clinical reasoning — the trend matters as much as the absolute value.</p>",
                    "reveal_type": "pearl"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/congestive-cardiac-failure"
        },
        {
            "num": 3, "modality": "CT Angiography", "title": "Aortic Dissection",
            "vignette": 'A <strong>58-year-old male</strong> with poorly controlled HTN presents with sudden-onset \"tearing\" chest pain radiating to the back. He is writhing on the stretcher. Vitals: HR 110, BP 190/110 in right arm, <strong>148/82 in left arm</strong>. Exam: aortic regurgitation murmur heard.',
            "steps": [
                {
                    "type": "order", "question": "What imaging confirms the diagnosis?",
                    "choices": ["Transthoracic echocardiogram", "CT angiography of chest/abdomen/pelvis", "MRI aorta", "Chest X-ray — look for widened mediastinum"],
                    "correct": 1,
                    "explanation": "<h4>CTA is the Gold Standard</h4><p><strong>CT angiography with ECG gating</strong> is the first-line diagnostic study — sensitivity >95%, available quickly, and shows the entire aorta with branch vessels. CXR may show a widened mediastinum but is neither sensitive (~60-90%) nor specific. TEE is an alternative in unstable patients who can't go to CT. MRI is excellent but too slow for emergencies. Key point: the <strong>blood pressure differential >20 mmHg between arms</strong> is a classic finding that should immediately raise suspicion for dissection and expedite imaging.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "interpret", "question": "CTA shows an intimal flap starting at the aortic root extending to the descending aorta. What Stanford classification is this?",
                    "choices": ["Stanford Type A — involves ascending aorta", "Stanford Type B — descending only", "DeBakey Type III", "Cannot classify without surgical exploration"],
                    "correct": 0,
                    "explanation": "<h4>Stanford Classification Drives Management</h4><p><strong>Stanford Type A = ANY involvement of the ascending aorta → SURGICAL EMERGENCY</strong>. Stanford Type B = descending aorta only (distal to left subclavian) → medical management (BP control with IV labetalol or esmolol) unless complicated (malperfusion, rupture, refractory pain). This dissection involves the root AND descending = Type A. The CTA finding of root involvement also explains the new <strong>aortic regurgitation murmur</strong> — the flap is disrupting valve coaptation. This patient needs emergent cardiothoracic surgery.</p>",
                    "reveal_type": "danger"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/aortic-dissection"
        },
        {
            "num": 4, "modality": "Echocardiogram", "title": "Cardiac Tamponade",
            "vignette": 'A <strong>48-year-old female</strong> with metastatic breast cancer presents with progressive dyspnea and lightheadedness over 4 days. Vitals: HR 122, BP 88/70, <strong>pulsus paradoxus of 18 mmHg</strong>. Exam: muffled heart sounds, JVD that does NOT decrease with inspiration (Kussmaul sign), clear lungs.',
            "steps": [
                {
                    "type": "order", "question": "What imaging study do you order FIRST?",
                    "choices": ["CXR", "Bedside echocardiogram — stat", "CT chest with contrast", "Cardiac MRI"],
                    "correct": 1,
                    "explanation": "<h4>Bedside Echo in Hemodynamic Compromise</h4><p><strong>Bedside echocardiogram is the immediate study</strong> — it can be performed in minutes at the bedside and diagnoses tamponade by showing pericardial effusion with hemodynamic compromise. CXR may show an enlarged cardiac silhouette (\"water-bottle heart\") but can't assess hemodynamic significance. The clinical triad (<strong>Beck's triad</strong>: hypotension, muffled heart sounds, JVD) combined with pulsus paradoxus >10 mmHg strongly suggests tamponade, but echo confirms it AND guides pericardiocentesis.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "interpret", "question": "Echo shows a large circumferential pericardial effusion with RV diastolic collapse and respiratory variation in mitral inflow >25%. What is the definitive next step?",
                    "choices": ["IV fluid bolus and vasopressors", "Emergency pericardiocentesis — ideally echo-guided", "Start chemotherapy for malignant effusion", "Serial echocardiograms every 6 hours"],
                    "correct": 1,
                    "explanation": "<h4>Echo Findings → Immediate Intervention</h4><p><strong>RV diastolic collapse</strong> is the hallmark echo finding of tamponade physiology — the effusion pressure exceeds RV filling pressure during diastole, causing the free wall to \"collapse\" inward. Combined with respiratory variation >25% in mitral inflow (exaggerated ventricular interdependence), this confirms hemodynamically significant tamponade requiring <strong>emergency pericardiocentesis</strong>. IV fluids are a temporizing bridge but NOT definitive. The echo guided both the diagnosis AND the procedure — the needle is advanced under real-time visualization to the largest fluid pocket.</p>",
                    "reveal_type": "danger"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/cardiac-tamponade"
        }
    ],
    "neuro": [
        {
            "num": 1, "modality": "CT Head → CTA → CT Perfusion", "title": "Acute Ischemic Stroke",
            "vignette": 'A <strong>73-year-old male</strong> with atrial fibrillation (not on anticoagulation) presents with acute-onset right-sided weakness and expressive aphasia. Symptom onset was <strong>2 hours ago</strong>. NIHSS score: 14. Vitals: HR 92 (irregular), BP 178/96.',
            "steps": [
                {
                    "type": "order", "question": "What is the FIRST imaging study?",
                    "choices": ["MRI brain with DWI", "CT head without contrast", "CT angiography head and neck", "Carotid ultrasound"],
                    "correct": 1,
                    "explanation": "<h4>Non-Contrast CT First — Always</h4><p>The first step is <strong>non-contrast CT head to EXCLUDE hemorrhage</strong>. You cannot give tPA to a patient with intracranial bleeding. CT takes minutes; MRI takes 30+ minutes and is often not available emergently. The CT will likely be NORMAL in the first 6 hours of ischemic stroke — and that's okay. A normal CT in this context RULES OUT hemorrhage, which is all you need to make the tPA decision. CTA follows immediately to look for large vessel occlusion (LVO) amenable to thrombectomy.</p>",
                    "reveal_type": "danger"
                },
                {
                    "type": "interpret", "question": "CT head is normal (no hemorrhage). CTA shows occlusion of the left M1 segment of the middle cerebral artery. What do these findings mean for treatment?",
                    "choices": ["tPA only — no further intervention needed", "tPA + endovascular thrombectomy (dual therapy for LVO)", "Aspirin and observation", "Surgical evacuation"],
                    "correct": 1,
                    "explanation": "<h4>LVO on CTA = Thrombectomy Candidate</h4><p>This patient gets <strong>both IV tPA (within 4.5-hour window) AND endovascular thrombectomy</strong>. The CTA finding of M1 occlusion is the key — large vessel occlusions respond poorly to tPA alone (~10% recanalization for M1) but have >70% recanalization rates with mechanical thrombectomy. Without CTA, you'd give tPA and hope for the best. <strong>The CTA directly changed management</strong> by identifying a lesion amenable to intervention. This is why stroke imaging is now CT + CTA as a single protocol, not sequential decision-making.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "integrate", "question": "The patient arrived at a facility WITHOUT interventional neurology. What time-critical imaging-based decision must be made?",
                    "choices": ["Get MRI to confirm infarct before transferring", "Transfer immediately to a comprehensive stroke center — 'drip and ship'", "Observe for 24 hours, then transfer if no improvement", "No transfer needed if tPA was given"],
                    "correct": 1,
                    "explanation": "<h4>Drip and Ship — CTA Drives Transfer Decisions</h4><p>The CTA finding of LVO at a non-thrombectomy-capable center triggers the <strong>\"drip and ship\" protocol</strong>: start tPA at the community hospital, then immediately transfer for thrombectomy. Do NOT delay for MRI. The thrombectomy window extends to 24 hours if perfusion imaging shows salvageable tissue (mismatch between core infarct and penumbra). This is why CTA capability at the initial hospital is so important — without it, the LVO goes undetected and the thrombectomy opportunity is missed.</p>",
                    "reveal_type": "danger"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/ischaemic-stroke"
        },
        {
            "num": 2, "modality": "CT Head → CTA", "title": "Subarachnoid Hemorrhage",
            "vignette": 'A <strong>42-year-old female</strong> presents with sudden-onset \"worst headache of my life\" that started while exercising. She had a brief syncopal episode. Vitals: HR 68, BP 172/94. Exam: <strong>photophobia, nuchal rigidity</strong>, GCS 14 (confused). No focal deficits.',
            "steps": [
                {
                    "type": "order", "question": "What imaging do you order first?",
                    "choices": ["MRI brain", "CT head without contrast — immediately", "Lumbar puncture", "CT angiography"],
                    "correct": 1,
                    "explanation": "<h4>CT First for Thunderclap Headache</h4><p><strong>Non-contrast CT head is >95% sensitive for SAH within the first 6 hours.</strong> \"Worst headache of my life\" with acute onset = thunderclap headache = SAH until proven otherwise. CT detects hyperdense (bright white) blood in the subarachnoid space. LP is reserved for cases where CT is NEGATIVE but clinical suspicion remains high (look for xanthochromia and elevated RBCs that don't clear). CTA is the next step IF CT shows SAH, to locate the aneurysm. Never go straight to LP without CT first — you need to rule out mass effect.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "interpret", "question": "CT shows diffuse hyperdense blood in the basal cisterns and sylvian fissures. CTA reveals a 7mm aneurysm at the anterior communicating artery. What is the Fisher Grade and why does it matter?",
                    "choices": ["Fisher 1 — low risk of vasospasm", "Fisher 3 — thick subarachnoid clot, HIGH risk of vasospasm", "Fisher grade is only for trauma", "Fisher grade determines surgical approach"],
                    "correct": 1,
                    "explanation": "<h4>Fisher Grade Predicts Vasospasm</h4><p>Diffuse thick SAH in basal cisterns = <strong>Fisher Grade 3 (modified Fisher 3-4)</strong>, which carries the highest risk of delayed cerebral vasospasm (peak days 4-14). This imaging finding directly impacts management: start <strong>nimodipine</strong> (calcium channel blocker that reduces vasospasm-related poor outcomes), plan for daily transcranial Dopplers (TCD) to monitor velocities, and maintain euvolemia. The anterior communicating artery is the most common aneurysm location (~30% of all intracranial aneurysms). The aneurysm will be secured via surgical clipping or endovascular coiling within 24-72 hours.</p>",
                    "reveal_type": "teaching"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/subarachnoid-haemorrhage"
        },
        {
            "num": 3, "modality": "CT Head (pre-LP) → MRI", "title": "Meningitis",
            "vignette": 'A <strong>28-year-old college student</strong> presents with severe headache, fever of 39.5°C, neck stiffness, and photophobia over 18 hours. His roommate had similar symptoms last week. Vitals: HR 108, BP 130/78. Exam: <strong>positive Kernig and Brudzinski signs, petechial rash on trunk, no focal neurologic deficits, GCS 15</strong>.',
            "steps": [
                {
                    "type": "order", "question": "This patient needs an LP. Does he need CT head first?",
                    "choices": ["Yes — everyone needs CT before LP", "No — he has NO indications for CT before LP. Start antibiotics and proceed to LP.", "MRI first, then LP", "LP is not indicated, treat empirically"],
                    "correct": 1,
                    "explanation": "<h4>CT Before LP — Know the Indications</h4><p>CT before LP is needed ONLY for: <strong>altered mental status, immunocompromised, papilledema, focal neurologic deficits, new-onset seizures, or age >60</strong>. This patient has NONE of these — GCS 15, no focal deficits, young, immunocompetent. Proceeding directly to LP saves critical time. <strong>Most importantly: do NOT delay antibiotics waiting for imaging or LP.</strong> If you're going to image first, give empiric ceftriaxone + vancomycin + dexamethasone BEFORE the CT. The petechial rash strongly suggests <em>N. meningitidis</em>.</p>",
                    "reveal_type": "danger"
                },
                {
                    "type": "integrate", "question": "LP shows: WBC 2,400 (95% PMNs), protein 280, glucose 22 (serum glucose 110), gram stain shows gram-negative diplococci. CSF results combined with the clinical picture and rash — what is the diagnosis and public health implication?",
                    "choices": ["Viral meningitis — supportive care only", "Bacterial meningitis (N. meningitidis) — treat AND chemoprophylaxis for close contacts", "TB meningitis — start RIPE therapy", "Autoimmune encephalitis"],
                    "correct": 1,
                    "explanation": "<h4>LP Results Changed Everything</h4><p>The LP confirmed <strong>bacterial meningitis</strong>: elevated WBC with PMN predominance, high protein, LOW glucose (ratio <0.4), and gram-negative diplococci = <em>N. meningitidis</em>. The imaging decision (skipping CT) saved time, and the LP results confirmed the etiology. Management integration: continue ceftriaxone + dexamethasone, AND provide <strong>chemoprophylaxis (rifampin, ciprofloxacin, or ceftriaxone) to close contacts</strong> including the roommate and healthcare workers with exposure to respiratory secretions. The rash + LP together drove both treatment and public health action.</p>",
                    "reveal_type": "pearl"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/meningitis"
        },
        {
            "num": 4, "modality": "CT Head → MRI Epilepsy Protocol", "title": "Seizure Disorders",
            "vignette": 'A <strong>32-year-old female</strong> presents to the ED after a witnessed generalized tonic-clonic seizure lasting 3 minutes with post-ictal confusion. This is her FIRST seizure. No prior history of epilepsy, head trauma, or substance use. Now post-ictal but improving. Vitals stable, <strong>exam reveals no focal neurologic deficits after recovery</strong>.',
            "steps": [
                {
                    "type": "order", "question": "What imaging is appropriate for a first-time seizure?",
                    "choices": ["No imaging needed if exam is normal", "CT head without contrast in the ED, then outpatient MRI brain (epilepsy protocol)", "MRI brain emergently tonight", "EEG only, no imaging"],
                    "correct": 1,
                    "explanation": "<h4>First Seizure Imaging Protocol</h4><p>A first-time seizure requires <strong>CT head in the ED</strong> to rule out acute pathology (hemorrhage, mass, abscess) followed by <strong>outpatient MRI brain with epilepsy protocol</strong> for detailed structural evaluation. MRI epilepsy protocol includes thin-cut coronal T2/FLAIR through the temporal lobes (hippocampal sclerosis), 3D T1 volumetric (cortical dysplasia), and FLAIR (tumors, gliosis). CT misses many epileptogenic lesions but is fast and appropriate emergently. EEG is also indicated but doesn't replace imaging — a structural lesion changes management significantly.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "integrate", "question": "CT head is normal. Outpatient MRI shows left mesial temporal sclerosis with hippocampal atrophy. How does this finding change the management plan?",
                    "choices": ["No change — start antiepileptic medication regardless", "Start medication AND refer to epilepsy surgery center — mesial temporal sclerosis has excellent surgical outcomes if medication fails", "Repeat MRI in 6 months", "This is an incidental finding with no clinical significance"],
                    "correct": 1,
                    "explanation": "<h4>MRI Finding Predicts Treatment Response</h4><p><strong>Mesial temporal sclerosis (MTS)</strong> is the most common structural cause of temporal lobe epilepsy and has a well-defined surgical treatment pathway. While you start antiepileptic medication first (levetiracetam or lamotrigine are common first-line), the MRI finding is crucial because: (1) it identifies the seizure focus, (2) patients with MTS who fail 2 medications have >60-70% seizure-free rates with anterior temporal lobectomy, (3) it changes the prognosis discussion — medication-refractory temporal lobe epilepsy with MTS is one of the most surgically treatable forms of epilepsy. <strong>The MRI transformed this from \"start a med\" to \"start a med AND have an early surgical conversation.\"</strong></p>",
                    "reveal_type": "pearl"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/seizure"
        }
    ],
    "abdominal": [
        {
            "num": 1, "modality": "CT Abdomen/Pelvis (or US in peds)", "title": "Acute Appendicitis",
            "vignette": 'A <strong>28-year-old male</strong> presents with 18 hours of periumbilical pain that has migrated to the right lower quadrant. He has anorexia, one episode of vomiting, and low-grade fever (38.2°C). <strong>McBurney point tenderness, positive Rovsing sign, positive psoas sign.</strong> WBC 14,200.',
            "steps": [
                {
                    "type": "order", "question": "What imaging confirms the diagnosis?",
                    "choices": ["Abdominal X-ray (KUB)", "CT abdomen/pelvis with IV contrast", "Diagnostic laparoscopy", "MRI abdomen"],
                    "correct": 1,
                    "explanation": "<h4>CT is Gold Standard in Adults</h4><p><strong>CT abdomen/pelvis with IV contrast</strong> has >95% sensitivity and specificity for appendicitis in adults. Oral contrast is NOT needed and delays care. KUB has almost no role in appendicitis diagnosis (may show a fecalith <5% of the time). MRI is reserved for <strong>pregnant patients</strong> (no radiation). In <strong>pediatric patients</strong>, ultrasound is first-line to avoid radiation — non-visualization of appendix on US in a child with typical presentation may warrant CT or surgical consultation. Alvarado score >7 with classic presentation in some centers may warrant surgical consultation without imaging.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "interpret", "question": "CT shows a dilated appendix (12mm), periappendiceal fat stranding, and a 6mm appendicolith, but NO free fluid or abscess. What does this mean?",
                    "choices": ["Perforated appendicitis — needs drainage before surgery", "Uncomplicated appendicitis — appendectomy within 24 hours", "Normal variant — discharge home", "Need MRI for further characterization"],
                    "correct": 1,
                    "explanation": "<h4>CT Findings Guide Surgical Timing</h4><p>Key CT findings: <strong>appendix >6mm diameter</strong> (this is 12mm = clearly dilated), <strong>fat stranding</strong> (inflammation extending beyond the appendix), <strong>appendicolith</strong> (calcified stone within appendix — increases perforation risk). The ABSENCE of free fluid, abscess, or extraluminal air means this is <strong>uncomplicated appendicitis</strong>. Management: appendectomy within 24 hours (laparoscopic preferred). If CT had shown a contained abscess >3cm, the approach might shift to percutaneous drainage + antibiotics → interval appendectomy 6-8 weeks later.</p>",
                    "reveal_type": "teaching"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/acute-appendicitis"
        },
        {
            "num": 2, "modality": "RUQ Ultrasound", "title": "Acute Cholecystitis",
            "vignette": 'A <strong>45-year-old obese female</strong> presents with 6 hours of severe RUQ pain after a fatty meal, radiating to the right scapula. Nausea and vomiting, fever 38.4°C. Exam: <strong>RUQ tenderness with positive Murphy sign</strong>. Labs: WBC 15,000, AST/ALT mildly elevated, total bilirubin 1.8.',
            "steps": [
                {
                    "type": "order", "question": "What imaging study do you order first?",
                    "choices": ["CT abdomen with contrast", "Right upper quadrant ultrasound", "HIDA scan", "MRCP"],
                    "correct": 1,
                    "explanation": "<h4>RUQ Ultrasound is First-Line</h4><p><strong>Ultrasound is the initial study for suspected biliary disease</strong> — it's fast (~15 min), radiation-free, available at bedside, and directly visualizes gallstones, wall thickening, and pericholecystic fluid. Positive sonographic Murphy sign (tenderness directly over the gallbladder with transducer pressure) is highly specific. CT is less sensitive for gallstones (misses non-calcified stones). HIDA scan is reserved for when US is equivocal — it assesses cystic duct patency (non-visualization of GB after 4 hours = obstruction). MRCP is for evaluating the common bile duct if choledocholithiasis is suspected.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "integrate", "question": "US shows gallstones, GB wall thickening (6mm), pericholecystic fluid, AND a dilated common bile duct (10mm) with a possible stone at the distal CBD. How does this change your plan?",
                    "choices": ["Cholecystectomy alone", "ERCP for CBD stone first, then cholecystectomy", "MRCP to confirm CBD stone, then decide", "Antibiotics only — no surgery needed"],
                    "correct": 1,
                    "explanation": "<h4>US Findings Changed the Surgical Plan</h4><p>You expected cholecystitis (gallstones + wall thickening + pericholecystic fluid = classic), but the US also revealed a <strong>dilated CBD (>6mm is abnormal, >10mm with GB in situ is significant) with distal stone</strong>. This changes management from \"cholecystectomy alone\" to <strong>ERCP with sphincterotomy + stone extraction FIRST</strong>, followed by cholecystectomy (usually same hospitalization). The slightly elevated bilirubin (1.8) corroborates CBD involvement. Without US detecting the CBD dilation, the CBD stone might have been missed until post-operative jaundice or pancreatitis.</p>",
                    "reveal_type": "pearl"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/acute-cholecystitis"
        },
        {
            "num": 3, "modality": "CT Abdomen with Contrast", "title": "Small Bowel Obstruction",
            "vignette": 'A <strong>65-year-old female</strong> with prior hysterectomy (10 years ago) presents with 2 days of crampy diffuse abdominal pain, obstipation (no flatus or stool), and bilious vomiting. Exam: <strong>distended abdomen with high-pitched tinkling bowel sounds, diffuse tenderness without peritoneal signs</strong>. XR shows dilated loops of small bowel.',
            "steps": [
                {
                    "type": "order", "question": "AXR already shows dilated bowel. Why do you need CT?",
                    "choices": ["CT is not needed — AXR is sufficient for SBO", "CT identifies the transition point, cause, and complications (strangulation) that AXR cannot", "CT is only for surgical planning", "CT is only if AXR is equivocal"],
                    "correct": 1,
                    "explanation": "<h4>CT Adds Three Critical Pieces AXR Cannot</h4><p>AXR can suggest SBO (dilated loops, air-fluid levels, paucity of distal gas) but CT provides: (1) <strong>Transition point</strong> — where dilated proximal loops meet decompressed distal bowel, (2) <strong>Cause</strong> — adhesive band, hernia, mass, stricture, (3) <strong>Complications</strong> — mesenteric edema, reduced enhancement (ischemia), pneumatosis (necrosis), closed-loop (surgical emergency). This patient's surgical history strongly suggests adhesive SBO, but CT confirms it and rules out strangulation. IV contrast is used; oral contrast is NOT needed and delays the study.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "interpret", "question": "CT shows a transition point in the pelvis with an adhesive band, dilated proximal loops to 4.5cm, but also shows C-shaped dilated loop with mesenteric swirling ('whirl sign') and decreased wall enhancement. What does this mean?",
                    "choices": ["Simple partial SBO — continue NGT decompression", "Closed-loop obstruction with possible strangulation — emergent surgical consultation", "Ileus — conservative management", "Normal postoperative changes"],
                    "correct": 1,
                    "explanation": "<h4>CT Signs of Strangulation = Surgical Emergency</h4><p>The <strong>whirl sign</strong> (mesenteric vessels spiraling around a fixed point) indicates a <strong>closed-loop obstruction</strong> — the bowel is twisted, creating two points of obstruction, and decompression with NGT is impossible. Combined with <strong>decreased wall enhancement</strong> (indicating compromised blood supply), this is a <strong>strangulated SBO — a surgical emergency</strong>. Without CT, you'd continue conservative management (NGT, NPO) while the bowel necroses. Other CT danger signs: pneumatosis (air in bowel wall), portal venous gas, free fluid, mesenteric hematoma. This is perhaps the best example of how CT directly converts a medical management plan into an urgent surgical one.</p>",
                    "reveal_type": "danger"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/small-bowel-obstruction"
        }
    ],
    "peds": [
        {
            "num": 1, "modality": "Ultrasound", "title": "Intussusception",
            "vignette": 'A <strong>9-month-old male</strong> presents with episodic inconsolable crying with legs drawn up, occurring every 15-20 minutes. Between episodes he is lethargic. He passed one episode of <strong>\"currant jelly\" stool</strong>. Exam: sausage-shaped mass palpable in the RUQ. Previously healthy, well-nourished.',
            "steps": [
                {
                    "type": "order", "question": "What imaging do you order?",
                    "choices": ["Abdominal X-ray", "Abdominal ultrasound", "CT abdomen", "Barium enema immediately"],
                    "correct": 1,
                    "explanation": "<h4>US is First-Line in Pediatric Intussusception</h4><p><strong>Ultrasound is the gold standard</strong> for diagnosing intussusception in children — sensitivity >97%, no radiation. The classic finding is the <strong>\"target\" or \"doughnut\" sign</strong> on transverse view (concentric rings of bowel within bowel) and <strong>\"pseudokidney\" sign</strong> on longitudinal view. AXR may show a soft tissue mass or absence of gas in the RLQ but is much less sensitive. Air/contrast enema is both diagnostic AND therapeutic but US should confirm diagnosis first. CT is unnecessary in typical pediatric presentation and adds radiation.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "integrate", "question": "US confirms ileocolic intussusception with trapped mesenteric fat, no free fluid. Child is hemodynamically stable. What is the next step?",
                    "choices": ["Surgical consultation for operative reduction", "Air enema reduction under fluoroscopy (85-90% success rate)", "Observation — it may reduce spontaneously", "CT to better characterize before treatment"],
                    "correct": 1,
                    "explanation": "<h4>US Diagnosis → Therapeutic Enema</h4><p><strong>Air enema reduction</strong> (or hydrostatic saline reduction under US guidance) is the treatment of choice when: (1) no signs of perforation (free air), (2) hemodynamically stable, (3) no peritonitis. Success rate is <strong>85-90% for first attempt</strong>. The US findings of no free fluid and stable vitals support non-operative reduction. If the enema fails (2-3 attempts) or if there are signs of perforation, peritonitis, or hemodynamic instability, then surgical reduction/resection is indicated. A <strong>pathologic lead point</strong> (Meckel's, polyp, lymphoma) should be suspected if age &lt;3 months or &gt;5 years, or with recurrent intussusception.</p>",
                    "reveal_type": "teaching"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/intussusception"
        },
        {
            "num": 2, "modality": "Ultrasound", "title": "Pyloric Stenosis",
            "vignette": 'A <strong>4-week-old firstborn male</strong> presents with progressive, non-bilious, projectile vomiting after feeds for 1 week. He is hungry immediately after vomiting. Weight loss of 200g from birth weight. Exam: <strong>\"olive-shaped\" mass palpable in the epigastrium</strong>. Labs: pH 7.52, Cl 88, K 2.9, HCO₃ 34.',
            "steps": [
                {
                    "type": "order", "question": "What imaging confirms the diagnosis?",
                    "choices": ["Upper GI series", "Abdominal ultrasound", "CT abdomen", "AXR"],
                    "correct": 1,
                    "explanation": "<h4>Pyloric US is Definitive</h4><p><strong>Abdominal ultrasound</strong> is the diagnostic study of choice — it directly visualizes and measures the pyloric muscle. Diagnostic criteria: <strong>pyloric muscle thickness >3mm</strong> and <strong>pyloric channel length >15mm</strong>. The \"target sign\" on transverse view shows the thickened muscle ring. Upper GI series (showing the \"string sign\" — thin stream of barium through the narrowed channel) is an older approach and reserved for equivocal US. Note the classic metabolic profile: <strong>hypochloremic, hypokalemic metabolic alkalosis</strong> from vomiting gastric acid (HCl loss).</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "integrate", "question": "US confirms pyloric stenosis (muscle thickness 5mm, length 18mm). What MUST be corrected before surgery?",
                    "choices": ["Nothing — go directly to OR", "Correct the metabolic alkalosis and electrolytes FIRST, then pyloromyotomy", "Start IV antibiotics pre-operatively", "Trial of atropine before considering surgery"],
                    "correct": 1,
                    "explanation": "<h4>Imaging Confirms → But Metabolic Correction Comes First</h4><p>Even though US confirmed the surgical diagnosis, <strong>pyloric stenosis is NOT a surgical emergency</strong>. The <strong>metabolic derangement MUST be corrected first</strong> — hypokalemic hypochloremic metabolic alkalosis increases anesthesia risks (arrhythmia from hypokalemia, respiratory depression from alkalosis). Resuscitate with NS + KCl until Cl >100 and K >3.5, then proceed to <strong>Ramstedt pyloromyotomy</strong> (laparoscopic preferred). The imaging confirmed the diagnosis but the labs determined the surgical timing — this is a beautiful example of integrating imaging with the full clinical picture.</p>",
                    "reveal_type": "pearl"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/infantile-hypertrophic-pyloric-stenosis"
        },
        {
            "num": 3, "modality": "CXR", "title": "Neonatal Respiratory Distress",
            "vignette": 'A <strong>premature male neonate</strong> (32 weeks gestational age) develops progressive tachypnea, grunting, nasal flaring, and intercostal retractions within 2 hours of birth. SpO₂ is 85% on room air. Mother did NOT receive antenatal corticosteroids.',
            "steps": [
                {
                    "type": "expect", "question": "What CXR pattern do you expect?",
                    "choices": ["Normal CXR", "Diffuse bilateral ground-glass opacities with air bronchograms (RDS)", "Patchy bilateral infiltrates with hyperinflation (MAS)", "Bowel loops in the left hemithorax (CDH)"],
                    "correct": 1,
                    "explanation": "<h4>Premature + No Steroids = Surfactant Deficiency</h4><p>This premature neonate without antenatal corticosteroids is at high risk for <strong>Respiratory Distress Syndrome (RDS)</strong> = surfactant deficiency. Expected CXR: <strong>bilateral diffuse ground-glass opacification</strong> (\"white-out\" in severe cases) with <strong>air bronchograms</strong> (air-filled bronchi visible against opacified, collapsed alveoli) and <strong>low lung volumes</strong>. This differs from: TTN (perihilar streaking, fluid in fissures, resolves in 24-48h), MAS (hyperinflation, patchy infiltrates — seen in post-term), and CDH (bowel in chest — absent stomach bubble in abdomen). The CXR pattern directly determines which treatment pathway to follow.</p>",
                    "reveal_type": "teaching"
                },
                {
                    "type": "integrate", "question": "CXR shows bilateral ground-glass with air bronchograms as expected. What is the treatment triggered by this imaging pattern?",
                    "choices": ["Antibiotics only", "Exogenous surfactant administration via endotracheal tube", "Immediate surgical consultation", "ECMO"],
                    "correct": 1,
                    "explanation": "<h4>CXR Pattern Drives Specific Treatment</h4><p>The CXR pattern of RDS triggers <strong>exogenous surfactant replacement therapy</strong> — administered via endotracheal tube (INSURE technique: Intubate, Surfactant, Extubate to CPAP; or LISA: Less Invasive Surfactant Administration). This is one of the clearest examples in medicine where a specific imaging pattern directly dictates a specific treatment. Without the CXR, you might give empiric antibiotics for suspected sepsis/pneumonia alone. The CXR confirmation of RDS adds surfactant to the treatment plan, which dramatically improves oxygenation and reduces mortality.</p>",
                    "reveal_type": "teaching"
                }
            ],
            "radiopaedia_url": "https://radiopaedia.org/articles/neonatal-respiratory-distress"
        }
    ]
}

# ============================================================
# PAGE GENERATOR
# ============================================================

SYSTEM_META = {
    "cardiac": {"icon": "❤️", "name": "Cardiac Imaging", "badge": "CARDIOLOGY",
                "nav_links": [("raddx-hub.html", "← RadDx Hub"), ("raddx-chest.html", "Chest Imaging"), ("raddx-abdominal.html", "Abdominal Imaging"), ("raddx-neuro.html", "Neuroimaging")]},
    "neuro":   {"icon": "🧠", "name": "Neuroimaging", "badge": "NEUROLOGY",
                "nav_links": [("raddx-hub.html", "← RadDx Hub"), ("raddx-chest.html", "Chest Imaging"), ("raddx-cardiac.html", "Cardiac Imaging"), ("raddx-abdominal.html", "Abdominal Imaging")]},
    "abdominal": {"icon": "🩻", "name": "Abdominal Imaging", "badge": "GI / SURGERY",
                "nav_links": [("raddx-hub.html", "← RadDx Hub"), ("raddx-chest.html", "Chest Imaging"), ("raddx-cardiac.html", "Cardiac Imaging"), ("raddx-neuro.html", "Neuroimaging")]},
    "peds":    {"icon": "👶", "name": "Pediatric Imaging", "badge": "PEDIATRICS",
                "nav_links": [("raddx-hub.html", "← RadDx Hub"), ("raddx-chest.html", "Chest Imaging"), ("raddx-abdominal.html", "Abdominal Imaging"), ("raddx-neuro.html", "Neuroimaging")]},
}

BADGE_CLASS = {"order": "order", "expect": "expect", "interpret": "interpret", "integrate": "integrate"}
LETTERS = "ABCD"

def generate_page(system_key, scenarios):
    meta = SYSTEM_META[system_key]
    
    # Build scenario HTML
    scenarios_html = ""
    for sc in scenarios:
        steps_html = ""
        for step in sc["steps"]:
            choices_html = ""
            for i, ch in enumerate(step["choices"]):
                choices_html += f'        <div class="choice" data-val="{LETTERS[i]}"><span class="choice-letter">{LETTERS[i]}.</span><span>{ch}</span></div>\n'
            
            reveal_type = step.get("reveal_type", "teaching")
            
            steps_html += f"""    <div class="reasoning-step">
      <div class="step-label"><span class="step-badge {step['type']}">{step['type'].upper()}</span><span class="step-question">{step['question']}</span></div>
      <div class="choices" data-correct="{LETTERS[step['correct']]}">
{choices_html}      </div>
      <div class="reveal {reveal_type}" data-for="{LETTERS[step['correct']]}">
        {step['explanation']}
      </div>
    </div>
"""
        
        scenarios_html += f"""<div class="scenario">
  <div class="scenario-header">
    <div class="scenario-num">{sc['num']}</div>
    <div>
      <div class="scenario-modality">{sc['modality']}</div>
      <div class="scenario-title">{sc['title']}</div>
    </div>
  </div>
  <div class="scenario-body">
    <div class="vignette">{sc['vignette']}</div>
{steps_html}
    <a href="{sc['radiopaedia_url']}" target="_blank" rel="noopener" class="radiopaedia-link">📖 Explore {sc['title']} Cases on Radiopaedia →</a>
  </div>
</div>

"""
    
    # Build cross-links
    cross_links = ""
    for url, label in meta["nav_links"]:
        cross_links += f'  <a href="{url}" class="cross-link">{label}</a>\n'
    
    # Read the chest page as template for CSS
    # (Same styles, just different content)
    page = f"""<!DOCTYPE html>
<html data-theme="light" lang="en">
<head>
<script>(function(){{var K="reasondx-user";function g(){{var d=(location.pathname.match(/\\//g)||[]).length-1,p="";for(var i=0;i<d;i++)p+="../";return p+"auth/login.html"}}function a(){{try{{var u=localStorage.getItem(K);if(u){{var j=JSON.parse(u);return j&&j.email&&j.name}}}}catch(e){{}}return false}}if(!a()){{sessionStorage.setItem("reasondx-redirect",location.href);location.replace(g())}}}})();</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RadDx: {meta['name']} | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>
body{{font-family:'DM Sans',sans-serif;background:var(--rdx-bg);color:var(--rdx-text);line-height:1.7}}
.header{{background:linear-gradient(135deg,#0f766e,#0d9488);padding:12px 20px;position:sticky;top:56px;z-index:100}}
.header-row{{display:flex;justify-content:space-between;align-items:center;max-width:900px;margin:0 auto;flex-wrap:wrap;gap:8px}}
.header-title{{font-size:1.1rem;font-weight:600;color:#fff}}
.badge{{background:rgba(255,255,255,.2);padding:3px 10px;border-radius:4px;font-size:.7rem;margin-left:10px;color:#fff}}
.nav-back{{color:rgba(255,255,255,.8);text-decoration:none;font-size:.85rem}}
.nav-back:hover{{color:#fff}}
.main{{max-width:900px;margin:0 auto;padding:24px}}
.scenario{{background:var(--rdx-bg-card);border:1px solid var(--rdx-border);border-radius:16px;margin-bottom:24px;overflow:hidden}}
.scenario-header{{padding:20px 24px;border-bottom:1px solid var(--rdx-border);display:flex;align-items:center;gap:12px}}
.scenario-num{{width:32px;height:32px;background:var(--rdx-teal);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0}}
.scenario-title{{font-size:1.1rem;font-weight:700;color:var(--rdx-text)}}
.scenario-modality{{font-size:.75rem;color:var(--rdx-teal);font-weight:600;text-transform:uppercase;letter-spacing:.5px}}
.scenario-body{{padding:24px}}
.vignette{{background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:12px;padding:16px 20px;margin-bottom:20px;font-size:.95rem;line-height:1.7}}
.vignette strong{{color:var(--rdx-teal-dark)}}
.reasoning-step{{margin-bottom:20px}}
.step-label{{display:flex;align-items:center;gap:8px;margin-bottom:10px}}
.step-badge{{padding:3px 10px;border-radius:4px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff}}
.step-badge.order{{background:#7c3aed}}.step-badge.expect{{background:#2563eb}}.step-badge.interpret{{background:#0d9488}}.step-badge.integrate{{background:#dc2626}}
.step-question{{font-weight:600;font-size:.95rem;color:var(--rdx-text)}}
.choices{{display:grid;gap:10px;margin-top:12px}}
.choice{{background:var(--rdx-bg-card);border:2px solid var(--rdx-border);padding:12px 16px;border-radius:10px;cursor:pointer;display:flex;align-items:flex-start;gap:10px;transition:all .2s;font-size:.9rem}}
.choice:hover{{border-color:var(--rdx-teal);transform:translateX(3px)}}
.choice.correct{{border-color:var(--rdx-success);background:var(--rdx-success-bg,rgba(22,163,74,.08));pointer-events:none}}
.choice.wrong{{border-color:var(--rdx-danger);background:var(--rdx-danger-bg,rgba(220,38,38,.08));pointer-events:none}}
.choice-letter{{font-weight:700;min-width:20px;color:var(--rdx-teal)}}
.reveal{{display:none;margin-top:12px;padding:16px;border-radius:10px;font-size:.9rem;line-height:1.6}}
.reveal.shown{{display:block}}
.reveal.teaching{{background:linear-gradient(135deg,rgba(13,148,136,.08),rgba(20,184,166,.08));border-left:4px solid var(--rdx-teal)}}
.reveal.danger{{background:linear-gradient(135deg,rgba(220,38,38,.08),rgba(239,68,68,.08));border-left:4px solid var(--rdx-danger)}}
.reveal.pearl{{background:linear-gradient(135deg,rgba(124,58,237,.08),rgba(168,85,247,.08));border-left:4px solid #7c3aed}}
.reveal h4{{font-size:.85rem;color:var(--rdx-teal-dark);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px}}
.radiopaedia-link{{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:var(--rdx-teal-50);border:1px solid var(--rdx-teal);border-radius:8px;color:var(--rdx-teal-dark);text-decoration:none;font-size:.85rem;font-weight:600;margin-top:12px;transition:all .2s}}
.radiopaedia-link:hover{{background:var(--rdx-teal);color:#fff}}
.cross-links{{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:32px}}
.cross-link{{padding:12px 16px;background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:10px;text-decoration:none;color:var(--rdx-text);font-size:.9rem;font-weight:600;transition:all .15s}}
.cross-link:hover{{border-color:var(--rdx-teal)}}
@media(max-width:640px){{.main{{padding:16px}}.scenario-body{{padding:16px}}.vignette{{padding:12px 14px}}}}
</style>
</head>
<body>

<div class="header">
  <div class="header-row">
    <div class="header-title">{meta['icon']} RadDx: {meta['name']}<span class="badge">{meta['badge']}</span></div>
    <a href="raddx-hub.html" class="nav-back">← Back to RadDx Hub</a>
  </div>
</div>

<div class="main">
{scenarios_html}
<div class="cross-links">
{cross_links}</div>
</div>

<script>
document.querySelectorAll('.choices').forEach(group => {{
  const correct = group.dataset.correct;
  group.querySelectorAll('.choice').forEach(choice => {{
    choice.addEventListener('click', () => {{
      if (group.classList.contains('answered')) return;
      group.classList.add('answered');
      const val = choice.dataset.val;
      if (val === correct) {{
        choice.classList.add('correct');
      }} else {{
        choice.classList.add('wrong');
        group.querySelector(`[data-val="${{correct}}"]`).classList.add('correct');
      }}
      const reveal = group.parentElement.querySelector(`.reveal[data-for="${{correct}}"]`);
      if (reveal) reveal.classList.add('shown');
    }});
  }});
}});
</script>

<script src="../js/rdx-nav.js" defer></script>
</body>
</html>"""
    return page

# Generate all pages
for system_key, scenarios in SCENARIOS.items():
    filename = f"raddx-{system_key}.html"
    filepath = os.path.join(ROOT, 'modules', filename)
    page_html = generate_page(system_key, scenarios)
    with open(filepath, 'w') as f:
        f.write(page_html)
    print(f"Generated: {filename} ({len(scenarios)} scenarios)")

print(f"\nTotal pages generated: {len(SCENARIOS)}")
print("Total scenarios across all pages:", sum(len(s) for s in SCENARIOS.values()))
