#!/usr/bin/env python3
"""
gen_raddx_pages.py — Generate RadDx body system pages from radiopaedia-map.json
Each page follows the 4-step reasoning framework with MCQ interactions.
"""
import json, os, html as htmlmod

ROOT = '/home/claude/reasondx'
MAP = json.load(open(os.path.join(ROOT, 'data', 'radiopaedia-map.json')))

SYSTEMS = {
    'cardiac': {'title': 'Cardiac Imaging', 'icon': '❤️', 'key': 'cardiac'},
    'abdominal': {'title': 'Abdominal Imaging', 'icon': '🩻', 'key': 'abdominal'},
    'neuro': {'title': 'Neuroimaging', 'icon': '🧠', 'key': 'neuro'},
    'msk': {'title': 'Musculoskeletal Imaging', 'icon': '🦴', 'key': 'musculoskeletal'},
    'renal-gu': {'title': 'Renal & GU Imaging', 'icon': '🫘', 'key': 'renal_gu'},
    'peds': {'title': 'Pediatric Imaging', 'icon': '👶', 'key': 'pediatric'},
    'obstetric': {'title': 'Obstetric Imaging', 'icon': '🤰', 'key': 'obstetric'},
}

# Clinical vignettes per scenario (custom-written for teaching value)
VIGNETTES = {
    # CARDIAC
    'acs': 'A 58-year-old man with hypertension and diabetes presents with 45 minutes of crushing substernal chest pressure radiating to his left arm, with diaphoresis and nausea. Vitals: BP 160/95, HR 105, SpO₂ 96%.',
    'heart failure': 'A 72-year-old man with known HFrEF (EF 25%) presents with 2 weeks of progressive dyspnea, orthopnea, and bilateral leg swelling. He ran out of furosemide 10 days ago. JVP to the ear, bibasilar crackles, 3+ pitting edema.',
    'aortic dissection': 'A 65-year-old man with poorly controlled hypertension presents with sudden-onset "tearing" chest pain radiating to the back. BP is 185/110 in the right arm, 140/80 in the left. A new diastolic murmur is noted.',
    'cardiac tamponade': 'A 48-year-old woman with metastatic breast cancer presents with progressive dyspnea, muffled heart sounds, and JVD. BP 88/72 with pulsus paradoxus of 22 mmHg. HR 112. Lung fields are clear.',
    'valvular heart disease': 'A 68-year-old man presents with exertional syncope and a crescendo-decrescendo systolic murmur at the right upper sternal border radiating to the carotids. He reports progressive dyspnea on exertion over 6 months.',
    'endocarditis': 'A 32-year-old man with a history of IV drug use presents with 3 weeks of fever, fatigue, and a new holosystolic murmur at the left sternal border. He has splinter hemorrhages and Janeway lesions. Blood cultures × 2 grow MSSA.',
    # ABDOMINAL
    'appendicitis': 'A 24-year-old woman presents with 18 hours of periumbilical pain that has migrated to the right lower quadrant. Fever 38.4°C. She has rebound tenderness at McBurney\'s point. WBC 14,200. She is not pregnant (negative hCG).',
    'cholecystitis': 'A 52-year-old obese woman presents after dinner with sudden-onset severe RUQ pain radiating to the right shoulder. She is febrile (38.6°C) and has a positive Murphy\'s sign. WBC 13,500. Lipase is normal.',
    'pancreatitis': 'A 45-year-old man with heavy alcohol use presents with severe epigastric pain radiating to the back, worse after eating. He is vomiting and appears dehydrated. Lipase is 1,850 U/L (normal <60). This is his third episode.',
    'small bowel obstruction': 'A 67-year-old woman with a history of prior appendectomy and hysterectomy presents with 24 hours of crampy abdominal pain, vomiting (now bilious), abdominal distension, and no flatus. Last bowel movement was 2 days ago.',
    'gi bleed': 'A 58-year-old man on aspirin and warfarin presents with 2 episodes of large-volume hematemesis and melena. HR 118, BP 92/58. Hemoglobin dropped from baseline 13 to 8.2 g/dL. INR 3.8.',
    'acute abdomen': 'A 73-year-old man with atrial fibrillation (not on anticoagulation) presents with sudden severe diffuse abdominal pain that is "out of proportion to exam." Minimal tenderness on palpation. Lactate 6.2 mmol/L.',
    'cirrhosis': 'A 55-year-old man with known alcohol-related cirrhosis presents for routine follow-up. He has new-onset ascites and a palpable liver edge. AFP is elevated at 85 ng/mL (previously normal). Last US was 8 months ago.',
    'hepatitis': 'A 28-year-old woman recently returned from travel presents with jaundice, dark urine, and RUQ pain. AST 1,240, ALT 1,580, total bilirubin 8.2, alkaline phosphatase mildly elevated. Hepatitis panel pending.',
    # NEURO
    'stroke': 'A 71-year-old man with atrial fibrillation (stopped warfarin for dental procedure) develops sudden left-sided weakness and slurred speech. Exam: left face droop, left arm drift, dysarthria. NIHSS 14. Last known normal 90 minutes ago.',
    'subarachnoid hemorrhage': 'A 42-year-old woman presents with sudden-onset "worst headache of my life" while exercising. She had a brief loss of consciousness. Now awake but photophobic with nuchal rigidity. No focal deficits. BP 175/100.',
    'meningitis': 'A 19-year-old college student presents with fever (39.8°C), severe headache, photophobia, and neck stiffness over 12 hours. He has a petechial rash on his trunk. He appears confused and is now somnolent (GCS 13).',
    'seizure': 'A 35-year-old previously healthy woman is brought in after a witnessed generalized tonic-clonic seizure lasting 3 minutes. She is now post-ictal with right arm weakness that is improving. No history of seizures, no medications.',
    'headache': 'A 32-year-old obese woman presents with 4 weeks of progressive daily headache, worse in the morning and with Valsalva. She notes transient visual obscurations. Fundoscopic exam shows bilateral papilledema.',
    'hydrocephalus': 'A 78-year-old man is brought by family for progressive gait difficulty ("magnetic gait"), urinary incontinence, and cognitive decline over 4 months. His neurologic exam shows wide-based shuffling gait with preserved arm swing.',
    # MSK
    'fracture': 'A 82-year-old woman with osteoporosis presents after a ground-level fall, unable to bear weight on her right leg. The right leg appears shortened and externally rotated. She has groin tenderness.',
    'osteomyelitis': 'A 58-year-old man with poorly controlled diabetes presents with a non-healing foot ulcer over 6 weeks. The wound probes to bone. He has erythema, warmth, and purulent drainage. WBC 11,500, ESR 88, CRP 6.2.',
    'compartment syndrome': 'A 28-year-old man presents 6 hours after a tibial shaft fracture. He reports escalating pain not relieved by IV morphine. Pain with passive toe extension, tense anterior compartment, and developing paresthesias in the first web space.',
    # RENAL/GU
    'nephrolithiasis': 'A 38-year-old man presents with sudden-onset severe left flank pain radiating to the groin. He is writhing on the gurney and unable to find a comfortable position. UA shows 50+ RBCs, no WBCs, no bacteria.',
    'hematuria': 'A 62-year-old man with 40-pack-year smoking history presents with painless gross hematuria × 3 episodes over 2 weeks. No dysuria. UA shows large blood, few WBCs. Creatinine and PSA are normal.',
    'pyelonephritis': 'A 30-year-old woman presents with 3 days of dysuria and frequency followed by sudden high fever (39.5°C), rigors, and left flank pain. She has CVA tenderness. UA shows pyuria and bacteriuria. She was started on ciprofloxacin but is not improving at 72 hours.',
    'testicular': 'A 16-year-old boy presents with sudden-onset severe left testicular pain while playing soccer 4 hours ago. He has nausea and one episode of vomiting. The left testis is high-riding with an absent cremasteric reflex.',
    # PEDS
    'intussusception': 'An 8-month-old presents with intermittent episodes of severe crying, drawing legs up, followed by periods of calm. He has passed a "currant jelly" stool. A sausage-shaped mass is palpated in the RUQ.',
    'pyloric stenosis': 'A 4-week-old firstborn male presents with projectile, non-bilious vomiting after every feed for the past 5 days. He appears hungry immediately after vomiting. He has lost weight. An "olive-shaped" mass is felt in the epigastrium.',
    'hirschsprung': 'A 2-day-old full-term neonate has not passed meconium. He has progressive abdominal distension and bilious vomiting. Rectal exam produces an explosive gush of stool and gas.',
    'neonatal respiratory': 'A premature infant (30 weeks) develops progressive respiratory distress within hours of birth — tachypnea, grunting, nasal flaring, and subcostal retractions. SpO₂ 85% on room air.',
    'diaphragmatic hernia': 'A newborn develops severe respiratory distress immediately after delivery. Breath sounds are absent on the left. The abdomen appears scaphoid. Heart sounds are shifted to the right.',
    # OBSTETRIC
    'ectopic pregnancy': 'A 29-year-old woman with a history of PID presents with 6 weeks of amenorrhea, unilateral pelvic pain, and vaginal spotting. Beta-hCG is 2,800 mIU/mL. She is hemodynamically stable.',
    'placental abruption': 'A 32-year-old woman at 34 weeks gestation presents after a motor vehicle accident with painful vaginal bleeding and a rigid, tender uterus. Fetal heart tracing shows recurrent late decelerations. BP 140/95.',
}

# MCQ data per scenario
MCQS = {
    # CARDIAC
    'acs': {
        'order': {'q': ['A. 12-lead ECG immediately', 'B. CT coronary angiography', 'C. Cardiac MRI', 'D. Chest X-ray first'], 'ans': 'A',
                  'exp': 'ECG within 10 minutes of first medical contact. ST elevation → cath lab for PCI (<90 min door-to-balloon). NSTEMI → risk stratify. CXR is obtained but should never delay ECG.'},
        'expect': {'q': ['A. Normal sinus rhythm', 'B. ST elevation in leads II, III, aVF with reciprocal ST depression in I, aVL', 'C. Diffuse ST elevation in all leads', 'D. Low voltage QRS with electrical alternans'], 'ans': 'B',
                   'exp': 'The presentation suggests acute inferior MI. Inferior leads (II, III, aVF) correspond to the right coronary artery territory. Reciprocal changes in lateral leads increase specificity. Always check right-sided leads (V4R) for RV involvement.'},
    },
    'heart failure': {
        'order': {'q': ['A. PA/lateral CXR + echocardiogram', 'B. Cardiac MRI', 'C. Right heart catheterization', 'D. Nuclear stress test'], 'ans': 'A',
                  'exp': 'CXR assesses pulmonary congestion, cardiomegaly, and pleural effusions. Echo provides EF (determines HFrEF vs HFpEF), wall motion, valvular function. Together they guide GDMT.'},
        'expect': {'q': ['A. Normal cardiac silhouette', 'B. Cardiomegaly with cephalization, Kerley B lines, bilateral effusions', 'C. Widened mediastinum', 'D. Hyperinflated lungs'], 'ans': 'B',
                   'exp': 'Classic CXR progression of heart failure: cephalization (upper lobe pulmonary venous distension) → interstitial edema (Kerley B lines, peribronchial cuffing) → alveolar edema (bat-wing pattern) → pleural effusions (usually bilateral, right > left).'},
    },
    'aortic dissection': {
        'order': {'q': ['A. Chest X-ray', 'B. CT angiography of chest/abdomen/pelvis', 'C. Echocardiogram', 'D. MRA'], 'ans': 'B',
                  'exp': 'CTA is the gold-standard for aortic dissection — fast, widely available, shows intimal flap, extent of dissection, branch vessel involvement, and complications. CXR may show widened mediastinum (only 60-70% sensitive). TEE is an alternative in unstable patients who cannot go to CT scanner.'},
        'expect': {'q': ['A. Normal aorta', 'B. Intimal flap with true and false lumen, extending from ascending aorta', 'C. Aortic aneurysm without flap', 'D. Pericardial effusion only'], 'ans': 'B',
                   'exp': 'Stanford Type A = involves ascending aorta (surgical emergency). Stanford Type B = descending aorta only (medical management unless complicated). The intimal flap is the key finding — true lumen is typically smaller and enhances first.'},
    },
    'cardiac tamponade': {
        'order': {'q': ['A. CT chest', 'B. Chest X-ray', 'C. Bedside echocardiogram', 'D. Cardiac MRI'], 'ans': 'C',
                  'exp': 'Bedside echo is immediate, portable, and diagnostic. In the unstable patient, this is done simultaneously with resuscitation. CXR may show enlarged cardiac silhouette ("water bottle heart") but cannot confirm tamponade physiology. CT/MRI are too time-consuming in acute tamponade.'},
        'expect': {'q': ['A. Pericardial effusion with RV diastolic collapse and IVC plethora', 'B. Dilated LV with reduced EF', 'C. Aortic root dilation', 'D. Normal echocardiogram'], 'ans': 'A',
                   'exp': 'Key echo findings: pericardial effusion (often circumferential), RV diastolic collapse (most specific), RA systolic collapse, IVC plethora (>2.1cm, <50% collapse with inspiration), respiratory variation in mitral inflow velocities. "Swinging heart" = large effusion.'},
    },
    'valvular heart disease': {
        'order': {'q': ['A. Chest X-ray only', 'B. Transthoracic echocardiogram', 'C. Cardiac catheterization', 'D. CT calcium scoring'], 'ans': 'B',
                  'exp': 'TTE is the first-line study for all suspected valvular disease. It provides valve morphology, gradient/area measurements (stenosis severity), regurgitant volume/fraction, chamber dimensions, and LV function. Cath is reserved if echo-clinical discordance.'},
        'expect': {'q': ['A. Dilated aortic root', 'B. Heavily calcified aortic valve with high gradients and reduced area', 'C. Mitral valve prolapse', 'D. Normal valve function'], 'ans': 'B',
                   'exp': 'Severe aortic stenosis criteria: aortic valve area <1.0 cm², mean gradient >40 mmHg, peak velocity >4 m/s. Symptoms (syncope, angina, HF) + severe AS = surgical indication (SAVR or TAVR based on risk profile).'},
    },
    'endocarditis': {
        'order': {'q': ['A. CT chest', 'B. TTE, then TEE if negative', 'C. PET-CT', 'D. Cardiac MRI'], 'ans': 'B',
                  'exp': 'Modified Duke criteria require echocardiographic evidence. TTE first (sensitivity ~70%); if negative but clinical suspicion remains high → TEE (sensitivity >95%). TEE superior for prosthetic valves, paravalvular abscess, and posterior structures.'},
        'expect': {'q': ['A. Normal valves', 'B. Pericardial effusion', 'C. Oscillating vegetation on tricuspid valve', 'D. Aortic dissection flap'], 'ans': 'C',
                   'exp': 'IV drug use predominantly affects right-sided valves (tricuspid). Vegetations appear as oscillating, echogenic masses attached to the valve. Size >10mm increases embolic risk. Right-sided IE → septic pulmonary emboli (get CXR for lung nodules/cavitations).'},
    },
    # ABDOMINAL
    'appendicitis': {
        'order': {'q': ['A. CT abdomen/pelvis with IV contrast', 'B. Abdominal X-ray', 'C. MRI abdomen', 'D. Ultrasound only'], 'ans': 'A',
                  'exp': 'CT A/P with IV contrast is gold standard in adults (sensitivity >98%). In children and pregnant patients, US is first-line (graded compression technique). MRI is an alternative in pregnancy if US is equivocal. Abdominal XR has no role in appendicitis workup.'},
        'expect': {'q': ['A. Normal appendix', 'B. Dilated appendix >6mm with periappendiceal fat stranding ± appendicolith', 'C. Free intraperitoneal air', 'D. Small bowel dilation'], 'ans': 'B',
                   'exp': 'Key findings: appendiceal diameter >6mm (>7mm highly specific), wall enhancement, periappendiceal fat stranding, appendicolith (present in ~25%, increases perforation risk). If perforated: extraluminal air, abscess, phlegmon.'},
    },
    'cholecystitis': {
        'order': {'q': ['A. CT abdomen', 'B. RUQ ultrasound', 'C. HIDA scan', 'D. MRCP'], 'ans': 'B',
                  'exp': 'RUQ US is the first-line study — fast, no radiation, highly sensitive for gallstones (>95%). If US is equivocal for acute cholecystitis (stones but no wall thickening/pericholecystic fluid), HIDA scan can confirm cystic duct obstruction. MRCP is for suspected CBD stones/cholangitis.'},
        'expect': {'q': ['A. Normal gallbladder', 'B. Gallstones + wall thickening >3mm + pericholecystic fluid + sonographic Murphy sign', 'C. Dilated CBD only', 'D. Liver mass'], 'ans': 'B',
                   'exp': 'US criteria for acute cholecystitis: gallstones + wall thickening >3mm + pericholecystic fluid + positive sonographic Murphy sign (maximal tenderness when probe presses over gallbladder). CBD >6mm raises concern for choledocholithiasis.'},
    },
    'pancreatitis': {
        'order': {'q': ['A. CT abdomen with contrast immediately', 'B. No imaging needed — clinical + lipase is sufficient for diagnosis', 'C. MRCP', 'D. Abdominal X-ray'], 'ans': 'B',
                  'exp': 'Acute pancreatitis is a CLINICAL diagnosis (2 of 3: characteristic pain, lipase >3× normal, imaging findings). CT is NOT needed for diagnosis and should be reserved for 72-96 hours if not improving (to assess necrosis). Early CT may underestimate necrosis. Exception: diagnostic uncertainty.'},
        'expect': {'q': ['A. Normal pancreas (imaging not needed)', 'B. Calcified pancreas', 'C. Pancreatic mass', 'D. Free air'], 'ans': 'A',
                   'exp': 'Correct! Imaging is not needed for diagnosis when clinical picture is clear. When CT IS obtained later (not improving): pancreatic enlargement, peripancreatic stranding, fluid collections, and the critical finding — non-enhancing areas indicating necrosis (Balthazar grade).'},
    },
    'small bowel obstruction': {
        'order': {'q': ['A. CT abdomen/pelvis with IV contrast', 'B. Abdominal X-ray series', 'C. Upper GI series with oral contrast', 'D. Ultrasound'], 'ans': 'A',
                  'exp': 'CT with IV contrast (oral NOT needed) is the study of choice. It identifies the transition point, cause (adhesion, hernia, mass), and complications (closed-loop, strangulation, ischemia). AXR shows air-fluid levels and dilated loops but cannot localize the transition point or assess ischemia.'},
        'expect': {'q': ['A. Normal bowel gas pattern', 'B. Dilated proximal loops >3cm with transition point and decompressed distal bowel', 'C. Free intraperitoneal air', 'D. Colonic dilation'], 'ans': 'B',
                   'exp': 'Classic CT: dilated small bowel >3cm proximal to transition point, decompressed bowel distally. "Small bowel feces sign" near transition. Closed-loop = surgical emergency. Strangulation signs: mesenteric haziness, bowel wall thickening/non-enhancement, portal venous gas.'},
    },
    'gi bleed': {
        'order': {'q': ['A. CT angiography of abdomen', 'B. Colonoscopy', 'C. EGD (upper endoscopy) within 24 hours', 'D. Tagged RBC scan'], 'ans': 'C',
                  'exp': 'Hematemesis = upper GI source → EGD within 24 hours (within 12h if high-risk). Resuscitate first (IV access, type & screen, reverse anticoagulation). CTA if massively bleeding and unstable (localize for IR embolization). Colonoscopy is for lower GI bleeding.'},
        'expect': {'q': ['A. Gastric ulcer with visible vessel', 'B. Esophageal varices', 'C. Colonic diverticula', 'D. Cannot predict without endoscopy'], 'ans': 'A',
                   'exp': 'On aspirin + warfarin (supratherapeutic INR), peptic ulcer is most likely. Visible vessel or active bleeding on EGD = high-risk stigmata (Forrest classification) → endoscopic therapy (epinephrine + clip or thermal). PPI drip post-intervention.'},
    },
    'acute abdomen': {
        'order': {'q': ['A. Abdominal X-ray', 'B. CT abdomen/pelvis with IV contrast', 'C. Ultrasound', 'D. Diagnostic peritoneal lavage'], 'ans': 'B',
                  'exp': 'Pain "out of proportion to exam" + atrial fibrillation + elevated lactate = acute mesenteric ischemia until proven otherwise. CT angiography of the abdomen is essential — identifies arterial or venous occlusion, bowel wall changes, and extent of ischemia. This is a surgical emergency.'},
        'expect': {'q': ['A. Normal CT', 'B. SMA thrombus/embolus with bowel wall thickening and pneumatosis', 'C. Free air under diaphragm', 'D. Appendicitis'], 'ans': 'B',
                   'exp': 'SMA embolism from atrial fibrillation. CT findings: filling defect in SMA, bowel wall thickening/non-enhancement, mesenteric stranding, pneumatosis (gas in bowel wall = ischemia), portal venous gas (late, ominous). Absence of peritoneal signs despite severe pain is the clinical clue.'},
    },
    'cirrhosis': {
        'order': {'q': ['A. CT with contrast', 'B. Abdominal ultrasound with Doppler', 'C. MRI with gadolinium', 'D. PET scan'], 'ans': 'B',
                  'exp': 'US with Doppler is recommended for HCC surveillance in cirrhosis (every 6 months). Elevated AFP + new finding on US → triple-phase CT or MRI with contrast for LI-RADS characterization. This patient is overdue for surveillance.'},
        'expect': {'q': ['A. Normal liver', 'B. Hepatic mass with arterial enhancement and washout pattern', 'C. Simple hepatic cyst', 'D. Gallstones only'], 'ans': 'B',
                   'exp': 'Elevated AFP + cirrhosis = high concern for HCC. Classic imaging: arterial phase hyperenhancement with portal venous or delayed phase washout = LI-RADS 5 (definite HCC). No biopsy needed if imaging is characteristic.'},
    },
    'hepatitis': {
        'order': {'q': ['A. CT abdomen', 'B. RUQ ultrasound with Doppler', 'C. MRCP', 'D. Liver biopsy immediately'], 'ans': 'B',
                  'exp': 'US rules out biliary obstruction (which would indicate a different workup — MRCP, ERCP). In acute hepatitis, US may show hepatomegaly, periportal edema ("starry sky"), and gallbladder wall thickening. Doppler assesses hepatic and portal venous flow (Budd-Chiari).'},
        'expect': {'q': ['A. Dilated bile ducts', 'B. Normal liver or hepatomegaly with periportal edema', 'C. Liver mass', 'D. Cirrhotic nodularity'], 'ans': 'B',
                   'exp': 'Acute hepatitis: hepatomegaly, starry sky pattern (periportal brightness from edema), gallbladder wall edema (non-specific), NO biliary dilation. Normal ducts + markedly elevated transaminases (ALT>AST, both >1000) = hepatocellular, not obstructive.'},
    },
    # NEURO
    'stroke': {
        'order': {'q': ['A. MRI brain with diffusion', 'B. Non-contrast CT head → CTA head/neck → CT perfusion', 'C. Carotid duplex ultrasound', 'D. Lumbar puncture'], 'ans': 'B',
                  'exp': 'NCCT first to EXCLUDE hemorrhage (within minutes). Then CTA to identify large vessel occlusion (LVO). CT perfusion shows ischemic penumbra (salvageable tissue). MRI is more sensitive for early ischemia but takes longer — time is brain.'},
        'expect': {'q': ['A. Hyperdense lesion in right hemisphere', 'B. Normal CT (too early) but CTA showing left MCA occlusion', 'C. Hydrocephalus', 'D. Subarachnoid hemorrhage'], 'ans': 'B',
                   'exp': 'At 90 minutes, NCCT is often normal (ischemic changes take 6-12h to appear). Early signs: hyperdense MCA sign (clot), insular ribbon sign, loss of grey-white differentiation. CTA localizes occlusion for thrombectomy decision.'},
    },
    'subarachnoid hemorrhage': {
        'order': {'q': ['A. MRI brain', 'B. Non-contrast CT head', 'C. CT angiography', 'D. Lumbar puncture first'], 'ans': 'B',
                  'exp': 'NCCT is >95% sensitive for SAH within 6 hours. If CT is negative but clinical suspicion remains high → LP (looking for xanthochromia and elevated RBCs that don\'t clear). If SAH confirmed → CTA to identify aneurysm.'},
        'expect': {'q': ['A. Normal CT', 'B. Hyperdense blood in basal cisterns and sylvian fissures', 'C. Epidural hematoma', 'D. Bilateral subdural hematomas'], 'ans': 'B',
                   'exp': 'SAH appears as hyperdense (white) blood layering in cisterns and sulci. Fisher grade predicts vasospasm risk. Blood distribution helps localize aneurysm — anterior communicating artery = interhemispheric fissure; MCA = sylvian fissure.'},
    },
    'meningitis': {
        'order': {'q': ['A. CT head before LP', 'B. LP without CT first — don\'t delay antibiotics', 'C. MRI brain with contrast', 'D. CT head, wait for results, then LP'], 'ans': 'A',
                  'exp': 'This patient has altered mental status (confused, somnolent, GCS 13) — CT before LP is indicated. BUT: give empiric antibiotics + dexamethasone BEFORE CT, do not delay treatment for imaging. CT indications before LP: altered mental status, focal deficits, papilledema, immunocompromised, seizure.'},
        'expect': {'q': ['A. Large mass lesion with midline shift', 'B. CT is likely NORMAL in uncomplicated bacterial meningitis', 'C. Subarachnoid hemorrhage', 'D. Hydrocephalus'], 'ans': 'B',
                   'exp': 'CT is usually normal in meningitis. Its purpose is to rule out mass/herniation risk before LP — not to diagnose meningitis. A normal CT clears for LP. MRI (if obtained later) shows leptomeningeal enhancement. Complications: abscess, subdural empyema, ventriculitis.'},
    },
    'seizure': {
        'order': {'q': ['A. EEG only', 'B. Non-contrast CT head (acute) → MRI brain (outpatient)', 'C. PET scan', 'D. No imaging needed for first seizure'], 'ans': 'B',
                  'exp': 'First seizure with focal features (right arm weakness = Todd\'s paralysis) → CT now to rule out hemorrhage/mass, then MRI epilepsy protocol outpatient for structural lesion (cortical dysplasia, hippocampal sclerosis, tumor). EEG is also indicated but imaging is priority.'},
        'expect': {'q': ['A. Hemorrhagic stroke', 'B. Most likely normal CT; MRI may show structural lesion', 'C. Large meningioma', 'D. Hydrocephalus'], 'ans': 'B',
                   'exp': 'CT is often normal in new-onset epilepsy (~75% of cases). Its role is acute exclusion of hemorrhage or mass. MRI epilepsy protocol (thin cuts through temporal lobes, FLAIR, T2) is far more sensitive for cortical dysplasia, hippocampal sclerosis, and small tumors.'},
    },
    'headache': {
        'order': {'q': ['A. CT head without contrast', 'B. MRI brain with MRV', 'C. Lumbar puncture first', 'D. No imaging — migraine management'], 'ans': 'B',
                  'exp': 'Progressive headache + bilateral papilledema + obese woman = idiopathic intracranial hypertension (pseudotumor cerebri). MRI with MRV to: (1) rule out mass/venous sinus thrombosis, (2) look for IIH signs (empty sella, optic nerve sheath distension, transverse sinus stenosis). Then LP for opening pressure (>25 cm H₂O diagnostic).'},
        'expect': {'q': ['A. Large brain tumor', 'B. Empty sella, optic nerve sheath distension, flattened posterior globes', 'C. Normal MRI', 'D. Cerebral venous thrombosis'], 'ans': 'B',
                   'exp': 'IIH MRI signs: empty or partially empty sella (CSF pressure compresses pituitary), distended optic nerve sheaths, posterior globe flattening, transverse sinus stenosis. MRV is critical to exclude cerebral venous thrombosis (which mimics IIH and requires anticoagulation, not acetazolamide).'},
    },
    'hydrocephalus': {
        'order': {'q': ['A. CT head', 'B. MRI brain', 'C. Lumbar puncture (large-volume tap)', 'D. All three in sequence'], 'ans': 'D',
                  'exp': 'NPH workup: CT/MRI shows ventriculomegaly out of proportion to sulcal atrophy (Evans index >0.3). Large-volume LP (30-50 mL) is both diagnostic and therapeutic — if gait/cognition improve after tap, the patient is likely a shunt responder.'},
        'expect': {'q': ['A. Normal-sized ventricles', 'B. Dilated ventricles with periventricular edema but effaced sulci', 'C. Ventricular dilation with proportionate sulcal enlargement', 'D. Focal mass lesion'], 'ans': 'B',
                   'exp': 'NPH: ventricles dilated (Evans index >0.3), sulci relatively effaced (distinguishes from ex vacuo hydrocephalus where sulci enlarge proportionally). Periventricular signal change on FLAIR suggests transependymal CSF flow. Aqueductal flow void on MRI may show hyperdynamic flow.'},
    },
    # MSK
    'fracture': {
        'order': {'q': ['A. AP pelvis and lateral hip X-ray', 'B. CT hip', 'C. MRI hip', 'D. Bone scan'], 'ans': 'A',
                  'exp': 'AP pelvis + lateral hip XR is the first-line study. If XR is negative but high clinical suspicion (shortened/externally rotated leg, unable to weight-bear) → MRI to detect occult fracture. CT if MRI unavailable or contraindicated. Bone scan requires 48-72h delay.'},
        'expect': {'q': ['A. Normal hip X-ray', 'B. Femoral neck fracture with disrupted Shenton\'s line', 'C. Pelvic ring fracture', 'D. Pathologic fracture through lytic lesion'], 'ans': 'B',
                   'exp': 'Elderly + fall + shortened/rotated leg = hip fracture. Femoral neck (intracapsular) vs intertrochanteric (extracapsular) matters for surgical approach. Garden classification for femoral neck fractures determines fixation vs arthroplasty.'},
    },
    'osteomyelitis': {
        'order': {'q': ['A. X-ray', 'B. MRI', 'C. CT', 'D. Bone scan'], 'ans': 'B',
                  'exp': 'MRI is the most sensitive and specific imaging for osteomyelitis. XR changes take 10-14 days to appear. MRI shows bone marrow edema, periosteal reaction, and soft tissue abscess immediately. Critical for surgical planning and biopsy guidance.'},
        'expect': {'q': ['A. Normal bone and soft tissue', 'B. Bone marrow edema (T1 low, T2/STIR high) with periosteal reaction and soft tissue collection', 'C. Stress fracture', 'D. Bone tumor'], 'ans': 'B',
                   'exp': 'MRI findings: T1 low signal (edema replacing fatty marrow), T2/STIR high signal, post-contrast enhancement, periosteal reaction, sequestrum (dead bone), involucrum (new bone shell), and sinus tracts. Soft tissue abscess may require drainage. Probe-to-bone positive → 89% PPV for osteomyelitis.'},
    },
    'compartment syndrome': {
        'order': {'q': ['A. X-ray of the tibia', 'B. MRI of the leg', 'C. CT angiography', 'D. No imaging — clinical diagnosis, measure compartment pressures'], 'ans': 'D',
                  'exp': 'Compartment syndrome is a CLINICAL and PRESSURE-BASED diagnosis. Do NOT wait for imaging. Classic 6 P\'s (Pain out of proportion, Pain with passive stretch, Pressure, Paresthesias, Pallor, Pulselessness — last two are LATE). Compartment pressure >30 mmHg or within 30 of diastolic = fasciotomy.'},
        'expect': {'q': ['A. Fracture line on X-ray', 'B. Imaging is not the priority — fasciotomy within 6 hours', 'C. DVT on ultrasound', 'D. Muscle tear on MRI'], 'ans': 'B',
                   'exp': 'The fracture XR may already be done. But compartment syndrome treatment cannot wait for ANY additional imaging. Delay beyond 6 hours = irreversible muscle necrosis → Volkmann\'s contracture, rhabdomyolysis, renal failure, potential limb loss. Fasciotomy is the treatment.'},
    },
    # RENAL/GU
    'nephrolithiasis': {
        'order': {'q': ['A. Non-contrast CT abdomen/pelvis', 'B. KUB X-ray', 'C. Renal ultrasound', 'D. CT with IV contrast'], 'ans': 'A',
                  'exp': 'Non-contrast CT ("stone protocol") is gold standard — sensitivity >97%. Shows stone location, size, hydronephrosis, and stranding. US is first-line in pregnancy and pediatrics. KUB only for follow-up of known radiopaque stones. IV contrast obscures stones.'},
        'expect': {'q': ['A. Renal mass', 'B. Hyperdense stone in left ureter with hydronephrosis and perinephric stranding', 'C. Normal kidneys', 'D. Staghorn calculus'], 'ans': 'B',
                   'exp': 'Classic CT: high-density calcification in ureter, upstream hydronephrosis, perinephric/periureteral stranding (tissue edema from obstruction). Stone size determines management: <5mm → 90% pass spontaneously; 5-10mm → may need intervention; >10mm → typically requires procedure.'},
    },
    'hematuria': {
        'order': {'q': ['A. CT urogram (triple-phase)', 'B. Renal ultrasound only', 'C. Cystoscopy only', 'D. CT urogram + cystoscopy'], 'ans': 'D',
                  'exp': 'Painless gross hematuria in a >50yo smoker = bladder cancer until proven otherwise. Complete workup requires BOTH: CT urogram (upper tract — kidneys/ureters) AND cystoscopy (lower tract — bladder). Missing either leaves a blind spot.'},
        'expect': {'q': ['A. Kidney stone', 'B. Bladder wall mass or urothelial thickening', 'C. Normal study', 'D. Renal cyst'], 'ans': 'B',
                   'exp': 'Bladder cancer is the most common cause of painless hematuria in this demographic. CT urogram may show: bladder wall mass/thickening, hydronephrosis (ureteral involvement), or renal pelvis mass. Cystoscopy directly visualizes and allows biopsy.'},
    },
    'pyelonephritis': {
        'order': {'q': ['A. No imaging needed — continue antibiotics', 'B. CT abdomen/pelvis with IV contrast', 'C. Renal ultrasound', 'D. MRI'], 'ans': 'B',
                  'exp': 'Not improving at 72h on appropriate antibiotics → CT to assess for: perinephric/renal abscess, obstructing stone with infected hydronephrosis (UROLOGIC EMERGENCY), anatomic abnormality. US can miss small abscesses and is less sensitive.'},
        'expect': {'q': ['A. Normal kidneys', 'B. Renal enlargement with wedge-shaped hypoperfusion ± abscess formation', 'C. Kidney stone only', 'D. Renal mass'], 'ans': 'B',
                   'exp': 'CT findings: renal enlargement, striated nephrogram (alternating enhancing/non-enhancing wedges), perinephric fat stranding, abscess (non-enhancing fluid collection), or obstructing stone. Abscess >3cm → drainage. Infected hydronephrosis → emergent ureteral stent or nephrostomy tube.'},
    },
    'testicular': {
        'order': {'q': ['A. CT abdomen', 'B. Testicular ultrasound with Doppler', 'C. MRI pelvis', 'D. No imaging — take directly to OR'], 'ans': 'B',
                  'exp': 'US with color Doppler is first-line — can be done in minutes. BUT: if clinical suspicion is HIGH and urology is available → do NOT delay surgery for US. This patient has a classic presentation (acute pain, high-riding testis, absent cremasteric reflex). Many surgeons would take this to OR without imaging.'},
        'expect': {'q': ['A. Epididymal enlargement with hypervascularity', 'B. Absent or decreased blood flow to the left testis', 'C. Intratesticular mass', 'D. Hydrocele only'], 'ans': 'B',
                   'exp': 'Absent/decreased blood flow on color Doppler = torsion. Testicular salvage is time-dependent: <6h → ~100% salvage rate; 12-24h → <20%. Epididymitis shows INCREASED flow (key distinguishing feature). Testicular mass without torsion → tumor workup (NOT biopsy — radical inguinal orchiectomy).'},
    },
    # PEDS
    'intussusception': {
        'order': {'q': ['A. Abdominal X-ray', 'B. Abdominal ultrasound', 'C. CT abdomen', 'D. Barium enema'], 'ans': 'B',
                  'exp': 'US is first-line in pediatric intussusception — no radiation, highly sensitive (>97%). Shows target/doughnut sign. If confirmed → air enema (diagnostic AND therapeutic). CT is rarely needed and delivers unnecessary radiation.'},
        'expect': {'q': ['A. Normal bowel', 'B. Target sign on transverse and pseudokidney sign on longitudinal view', 'C. Free air', 'D. Appendiceal inflammation'], 'ans': 'B',
                   'exp': 'Classic US: target/doughnut sign (transverse) = concentric rings of bowel within bowel. Pseudokidney sign (longitudinal) = kidney-shaped mass. Trapped mesenteric fat and lymph nodes visible within the intussusceptum. Color Doppler assesses blood flow to trapped bowel.'},
    },
    'pyloric stenosis': {
        'order': {'q': ['A. Upper GI series', 'B. Abdominal ultrasound', 'C. Abdominal X-ray', 'D. CT abdomen'], 'ans': 'B',
                  'exp': 'US is definitive — no radiation, performed at bedside. Diagnostic criteria: muscle thickness >3mm, channel length >15mm, pyloric diameter >13mm. Correct metabolic derangements (hypochloremic hypokalemic metabolic alkalosis) BEFORE surgery.'},
        'expect': {'q': ['A. Normal pylorus', 'B. Elongated, thickened pyloric muscle that does not open with real-time imaging', 'C. Malrotation', 'D. Duodenal atresia'], 'ans': 'B',
                   'exp': 'US shows thickened pyloric muscle (>3mm) and elongated channel (>15mm). Target sign on transverse. Real-time imaging shows failure of pylorus to open despite gastric contractions. Pyloromyotomy is curative (Ramstedt procedure).'},
    },
    'hirschsprung': {
        'order': {'q': ['A. Abdominal X-ray + contrast enema', 'B. Abdominal ultrasound', 'C. CT abdomen', 'D. Rectal biopsy only'], 'ans': 'A',
                  'exp': 'AXR shows distal bowel obstruction pattern. Contrast enema identifies the transition zone (narrow aganglionic segment → dilated normal bowel). Gold standard confirmation is rectal suction biopsy (absent ganglion cells, hypertrophied nerve fibers). Do NOT prep the bowel before contrast enema — it eliminates the transition zone.'},
        'expect': {'q': ['A. Normal bowel gas', 'B. Transition zone with narrow rectum and dilated proximal colon', 'C. Intussusception', 'D. Free air'], 'ans': 'B',
                   'exp': 'Key findings: rectosigmoid index <1 (rectum narrower than sigmoid = reversed), visible transition zone, 24-hour delayed film showing retained contrast (failure to evacuate). Short-segment disease (most common) involves rectosigmoid. Total colonic aganglionosis is rare but more severe.'},
    },
    'neonatal respiratory': {
        'order': {'q': ['A. CT chest', 'B. Chest X-ray', 'C. Echocardiogram', 'D. Lung ultrasound only'], 'ans': 'B',
                  'exp': 'CXR is the primary tool for neonatal respiratory distress. It distinguishes surgical causes (CDH → bowel in chest, TEF → coiled NGT) from medical causes (RDS, TTN, MAS, pneumothorax). Essential for immediate management decisions.'},
        'expect': {'q': ['A. Normal CXR', 'B. Diffuse ground-glass opacities with air bronchograms (RDS)', 'C. Hyperinflated lungs with patchy infiltrates (MAS)', 'D. Could be B or C — depends on clinical context'], 'ans': 'B',
                   'exp': 'At 30 weeks prematurity → RDS is most likely (surfactant deficiency). CXR: bilateral diffuse ground-glass/reticulogranular pattern with air bronchograms, low lung volumes. Treatment: surfactant replacement. TTN (term babies, C-section): fluid in fissures, perihilar streaking. MAS: hyperinflation + patchy opacities.'},
    },
    'diaphragmatic hernia': {
        'order': {'q': ['A. CT chest', 'B. Chest X-ray', 'C. Upper GI series', 'D. No imaging — immediate intubation'], 'ans': 'B',
                  'exp': 'Usually diagnosed prenatally on US. Postnatal CXR confirms: bowel in hemithorax, mediastinal shift. Critical: intubate (do NOT bag-mask ventilate — air enters stomach/bowel, worsens compression), NGT for gastric decompression, then surgical repair after stabilization.'},
        'expect': {'q': ['A. Bilateral pneumothorax', 'B. Gas-filled bowel loops in left hemithorax with mediastinal shift to the right', 'C. Large pleural effusion', 'D. Normal CXR'], 'ans': 'B',
                   'exp': 'Left-sided CDH (~85%): bowel loops in left chest, heart/mediastinum shifted right, left lung hypoplastic, scaphoid abdomen correlates. Right-sided CDH (~15%): liver herniates up, harder to diagnose. Ipsilateral lung hypoplasia determines severity and prognosis.'},
    },
    # OBSTETRIC
    'ectopic pregnancy': {
        'order': {'q': ['A. Transabdominal ultrasound', 'B. Transvaginal ultrasound', 'C. CT abdomen/pelvis', 'D. MRI pelvis'], 'ans': 'B',
                  'exp': 'TVUS is the study of choice when beta-hCG is above the discriminatory zone (1,500-2,000 mIU/mL). TVUS should identify an intrauterine pregnancy at this level — if uterus is empty = ectopic until proven otherwise. CT delivers unnecessary radiation to reproductive organs.'},
        'expect': {'q': ['A. Normal intrauterine pregnancy', 'B. Empty uterus with adnexal mass ± free fluid in cul-de-sac', 'C. Molar pregnancy', 'D. Ovarian cyst only'], 'ans': 'B',
                   'exp': 'Empty uterus + hCG above discriminatory zone = ectopic pregnancy. May see: adnexal mass, "tubal ring" or "ring of fire" on Doppler, free fluid (hemoperitoneum if ruptured). An intrauterine pseudosac (decidual reaction) can mimic early IUP — look for yolk sac/fetal pole to confirm true IUP.'},
    },
    'placental abruption': {
        'order': {'q': ['A. CT abdomen', 'B. Transabdominal ultrasound', 'C. MRI pelvis', 'D. Clinical diagnosis — imaging should not delay delivery if fetal distress'], 'ans': 'D',
                  'exp': 'Abruption is primarily a CLINICAL diagnosis (painful bleeding + rigid uterus + fetal distress). US has LIMITED sensitivity (~25-50%) — a NORMAL US does NOT rule out abruption. With late decelerations and uterine rigidity at 34 weeks post-trauma → emergent delivery, not more imaging.'},
        'expect': {'q': ['A. Retroplacental hematoma clearly visible', 'B. US may be normal — negative US does NOT exclude abruption', 'C. Placenta previa', 'D. Uterine rupture'], 'ans': 'B',
                   'exp': 'Critical teaching point: US sensitivity for abruption is only 25-50%. Fresh blood is isoechoic to placenta (same echogenicity = invisible). A "normal" US in the setting of painful bleeding + uterine rigidity + fetal distress does NOT change management. This is one of the most important "don\'t-trust-normal-imaging" scenarios in medicine.'},
    },
}

def build_scenario_html(key, case_data, mcq):
    """Build a single scenario with the 4-step framework"""
    modality = case_data['modality']
    title = key.replace('_', ' ').title()
    for k, v in [('Acs','ACS'), ('Gi ','GI '), ('Sbo','SBO'), ('Nph','NPH'), ('Ards','ARDS'), ('Pe','PE'), ('Tb','TB')]:
        title = title.replace(k, v)
    
    vignette = VIGNETTES.get(key, 'Clinical scenario presented for imaging reasoning.')
    url = case_data.get('radiopaedia_url', '')
    teaching = case_data.get('teaching_focus', '')
    mgmt = case_data.get('management_impact', '')
    
    html = f'''<div class="scenario"><div class="scenario-header"><span class="scenario-modality">{htmlmod.escape(modality)}</span><span class="scenario-title">{htmlmod.escape(title)}</span></div>
<div class="scenario-body">
<div class="vignette"><div class="vignette-label">Clinical Vignette</div>{htmlmod.escape(vignette)}</div>
<div class="reasoning-steps">
'''
    
    # Step 1: Order
    if 'order' in mcq:
        ans = mcq['order']['ans']
        html += f'''<div class="reasoning-step step-1"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">1</span><span>What imaging would you order?</span><span class="step-arrow">▾</span></button>
<div class="step-content">
<div class="choices" data-correct="{ans}">'''
        for opt in mcq['order']['q']:
            letter = opt[0]
            html += f'<div class="choice" onclick="selectChoice(this,\'{letter}\')"><span class="choice-letter">{letter}.</span> {htmlmod.escape(opt[3:])}</div>'
        html += f'</div><div class="explanation"><h5>Modality Reasoning</h5><p>{mcq["order"]["exp"]}</p></div></div></div>\n'
    
    # Step 2: Expect
    if 'expect' in mcq:
        ans = mcq['expect']['ans']
        html += f'''<div class="reasoning-step step-2"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">2</span><span>What findings do you expect?</span><span class="step-arrow">▾</span></button>
<div class="step-content">
<div class="choices" data-correct="{ans}">'''
        for opt in mcq['expect']['q']:
            letter = opt[0]
            html += f'<div class="choice" onclick="selectChoice(this,\'{letter}\')"><span class="choice-letter">{letter}.</span> {htmlmod.escape(opt[3:])}</div>'
        html += f'</div><div class="explanation"><h5>Expected Findings</h5><p>{mcq["expect"]["exp"]}</p>'
        if teaching:
            html += f'<div class="pearl"><strong>Teaching Focus:</strong> {htmlmod.escape(teaching)}</div>'
        html += '</div></div></div>\n'
    
    # Step 3: Interpret (with Radiopaedia link)
    if url:
        html += f'''<div class="reasoning-step step-3"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">3</span><span>Systematic Interpretation & Resources</span><span class="step-arrow">▾</span></button>
<div class="step-content">
<div class="pearl"><strong>Key Findings to Identify:</strong> {htmlmod.escape(teaching)}</div>
<a href="{url}" target="_blank" rel="noopener" class="radiopaedia-link">📚 Radiopaedia: {htmlmod.escape(title)} Cases →</a>
</div></div>\n'''
    
    # Step 4: Management Impact
    if mgmt:
        html += f'''<div class="reasoning-step step-4"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">4</span><span>How do findings change management?</span><span class="step-arrow">▾</span></button>
<div class="step-content">
<div class="management-impact"><h5>Management Integration</h5><p>{htmlmod.escape(mgmt)}</p></div>
</div></div>\n'''
    
    html += '</div></div></div>\n'
    return html

def build_page(system_key, system_info):
    """Build a complete RadDx body system page"""
    cases = MAP['imaging_cases'].get(system_info['key'], [])
    if not cases:
        return
    
    title = system_info['title']
    icon = system_info['icon']
    
    scenarios_html = ''
    for case in cases:
        kws = case.get('topic_keywords', [])
        key = ''
        mcq = {}
        for kw in kws:
            if kw in MCQS:
                key = kw
                mcq = MCQS[kw]
                break
        if not mcq and kws:
            key = kws[0]
        if mcq:
            scenarios_html += build_scenario_html(key, case, mcq)
    
    # Cross-links to other systems
    other_systems = {k: v for k, v in SYSTEMS.items() if k != system_key}
    crosslinks = ''
    for sk, sv in list(other_systems.items())[:3]:
        crosslinks += f'<a href="raddx-{sk}.html" class="cross-link"><div class="cross-link-title">{sv["icon"]} {sv["title"]}</div></a>\n'
    crosslinks += '<a href="raddx-hub.html" class="cross-link"><div class="cross-link-title">← RadDx Hub</div></a>\n'
    
    page = f'''<!DOCTYPE html>
<html data-theme="light" lang="en">
<head>
<script>(function(){{var K="reasondx-user";function g(){{var d=(location.pathname.match(/\\//g)||[]).length-1,p="";for(var i=0;i<d;i++)p+="../";return p+"auth/login.html"}}function a(){{try{{var u=localStorage.getItem(K);if(u){{var j=JSON.parse(u);return j&&j.email&&j.name}}}}catch(e){{}}return false}}if(!a()){{sessionStorage.setItem("reasondx-redirect",location.href);location.replace(g())}}}})();</script>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>RadDx: {title} | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>
body{{font-family:'DM Sans',sans-serif;background:var(--rdx-bg);color:var(--rdx-text);line-height:1.7}}
.header{{background:linear-gradient(135deg,#0f766e,#0d9488);padding:12px 20px;position:sticky;top:56px;z-index:100}}
.header-row{{display:flex;justify-content:space-between;align-items:center;max-width:900px;margin:0 auto}}
.header-title{{font-size:1.1rem;font-weight:600;color:#fff}}
.badge{{background:rgba(255,255,255,.2);padding:3px 10px;border-radius:4px;font-size:.7rem;margin-left:10px;color:#fff}}
.main{{max-width:900px;margin:0 auto;padding:24px}}
.scenario{{background:var(--rdx-bg-card);border:1px solid var(--rdx-border);border-radius:16px;margin-bottom:28px;overflow:hidden}}
.scenario-header{{padding:20px 24px;border-bottom:1px solid var(--rdx-border);display:flex;align-items:center;gap:12px}}
.scenario-modality{{background:var(--rdx-teal-50);color:var(--rdx-teal-dark);font-size:.75rem;font-weight:700;padding:4px 10px;border-radius:6px;text-transform:uppercase;letter-spacing:.5px}}
.scenario-title{{font-size:1.2rem;font-weight:700}}
.scenario-body{{padding:24px}}
.vignette{{background:var(--rdx-bg-hover);border-left:4px solid var(--rdx-teal);padding:16px 20px;border-radius:0 12px 12px 0;margin-bottom:20px;font-size:.95rem}}
.vignette-label{{font-size:.75rem;font-weight:700;color:var(--rdx-teal);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}}
.reasoning-steps{{display:flex;flex-direction:column;gap:16px}}
.reasoning-step{{border:1px solid var(--rdx-border);border-radius:12px;overflow:hidden}}
.step-trigger{{width:100%;display:flex;align-items:center;gap:12px;padding:14px 20px;background:var(--rdx-bg-card);border:none;cursor:pointer;font-family:inherit;font-size:.95rem;font-weight:600;color:var(--rdx-text);text-align:left;transition:background .15s}}
.step-trigger:hover{{background:var(--rdx-teal-50)}}
.step-num-badge{{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;color:#fff;flex-shrink:0}}
.step-1 .step-num-badge{{background:#0d9488}}.step-2 .step-num-badge{{background:#0891b2}}.step-3 .step-num-badge{{background:#7c3aed}}.step-4 .step-num-badge{{background:#dc2626}}
.step-arrow{{margin-left:auto;font-size:1.2rem;color:var(--rdx-text-muted);transition:transform .2s}}
.step-trigger[aria-expanded="true"] .step-arrow{{transform:rotate(180deg)}}
.step-content{{padding:0 20px 20px;display:none}}.step-content.open{{display:block}}
.choices{{display:grid;gap:10px;margin:12px 0}}
.choice{{background:var(--rdx-bg-card);border:2px solid var(--rdx-border);padding:12px 16px;border-radius:10px;cursor:pointer;display:flex;align-items:flex-start;gap:10px;transition:all .2s;font-size:.9rem}}
.choice:hover{{border-color:var(--rdx-teal);transform:translateX(3px)}}
.choice.correct{{border-color:var(--rdx-success);background:rgba(34,197,94,.08);pointer-events:none}}
.choice.wrong{{border-color:var(--rdx-danger);background:rgba(239,68,68,.08);pointer-events:none}}
.choice-letter{{font-weight:700;min-width:20px;color:var(--rdx-teal)}}
.explanation{{background:var(--rdx-teal-50);border:1px solid var(--rdx-teal);border-radius:10px;padding:16px;margin-top:12px;font-size:.9rem;display:none}}.explanation.show{{display:block}}
.explanation h5{{color:var(--rdx-teal-dark);margin-bottom:6px;font-size:.85rem;text-transform:uppercase;letter-spacing:.5px}}
.pearl{{background:linear-gradient(135deg,rgba(13,148,136,.1),rgba(20,184,166,.1));border-left:4px solid var(--rdx-teal);padding:14px 16px;border-radius:0 10px 10px 0;margin:12px 0;font-size:.9rem}}
.pearl strong{{color:var(--rdx-teal-dark)}}
.danger-box{{background:linear-gradient(135deg,rgba(220,38,38,.08),rgba(239,68,68,.08));border-left:4px solid var(--rdx-danger);padding:14px 16px;border-radius:0 10px 10px 0;margin:12px 0;font-size:.9rem}}
.management-impact{{background:var(--rdx-bg-hover);border-radius:10px;padding:16px;margin-top:12px}}
.management-impact h5{{font-size:.85rem;font-weight:700;margin-bottom:8px}}
.management-impact ul{{padding-left:18px;font-size:.9rem}}.management-impact li{{margin-bottom:4px}}
.radiopaedia-link{{display:inline-flex;align-items:center;gap:8px;background:var(--rdx-bg-hover);border:1px solid var(--rdx-border);border-radius:8px;padding:10px 16px;margin-top:16px;text-decoration:none;color:var(--rdx-teal);font-size:.85rem;font-weight:600;transition:all .15s}}
.radiopaedia-link:hover{{border-color:var(--rdx-teal);background:var(--rdx-teal-50)}}
.cross-links{{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:24px}}
.cross-link{{padding:14px;background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:10px;text-decoration:none;color:var(--rdx-text);transition:all .15s}}
.cross-link:hover{{border-color:var(--rdx-teal)}}
.cross-link-title{{font-weight:600;font-size:.9rem}}
</style>
</head>
<body>
<div class="header"><div class="header-row"><div class="header-title">{icon} RadDx: {title}<span class="badge">RADIOLOGY</span></div></div></div>
<div class="main">
{scenarios_html}
<div style="margin-top:32px"><h3 style="font-size:1rem;color:var(--rdx-teal);margin-bottom:12px">Related RadDx Modules</h3>
<div class="cross-links">{crosslinks}</div></div>
</div>
<script>
function toggleStep(btn){{const e=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',!e);btn.nextElementSibling.classList.toggle('open')}}
function selectChoice(el,letter){{const c=el.closest('.choices'),correct=c.dataset.correct;c.querySelectorAll('.choice').forEach(ch=>{{ch.style.pointerEvents='none';const l=ch.querySelector('.choice-letter').textContent.trim().replace('.','');if(l===correct)ch.classList.add('correct');else if(ch===el&&l!==correct)ch.classList.add('wrong')}});const ex=c.nextElementSibling;if(ex&&ex.classList.contains('explanation'))ex.classList.add('show')}}
</script>
<script src="../js/rdx-nav.js" defer></script>
</body></html>'''
    
    filepath = os.path.join(ROOT, 'modules', f'raddx-{system_key}.html')
    with open(filepath, 'w') as f:
        f.write(page)
    
    scenario_count = page.count('class="scenario"')
    print(f"  raddx-{system_key}.html: {scenario_count} scenarios ({len(page)} bytes)")

def main():
    print("Generating RadDx body system pages...")
    for key, info in SYSTEMS.items():
        build_page(key, info)
    print("Done!")

if __name__ == '__main__':
    main()
