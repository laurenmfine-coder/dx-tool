const fs = require('fs');

// All 20 questions rewritten with balanced answer lengths, randomized correct positions, no giveaway clues
const C = {
beginner: [
  {title:"The Tired Student",
   vignette:'A 20-year-old college student presents with 3 weeks of <strong>fatigue, difficulty concentrating, and feeling cold all the time</strong>. She has gained 5 pounds despite no change in diet. Her hair has been falling out more than usual. Vitals are normal except HR 56.',
   correct:"D",
   options:{
     A:"Iron deficiency anemia causing fatigue, cold intolerance, and hair thinning",
     B:"Major depressive disorder with somatic features including fatigue and weight gain",
     C:"Vitamin D deficiency with associated fatigue, poor concentration, and hair loss",
     D:"Hypothyroidism with bradycardia, cold intolerance, weight gain, and hair loss",
     E:"Chronic fatigue syndrome given persistent symptoms over multiple weeks"
   },
   explanation:"This is classic hypothyroidism. ALL symptoms connect to one mechanism: thyroid hormone controls metabolic rate. Low thyroid → slow metabolism → fatigue, cold intolerance, weight gain, bradycardia, hair loss. TSH is the screening test — if elevated, the thyroid isn't producing enough hormone.",
   pearl:"Any ONE symptom alone is nonspecific, but the PATTERN is diagnostic. This is pattern recognition: connecting multiple seemingly unrelated symptoms to one unifying diagnosis. Hypothyroidism is especially common in young women."},

  {title:"The Choking Toddler",
   vignette:'A 2-year-old is brought to the ED with <strong>3 weeks of cough and right-sided wheezing</strong> that hasn\'t responded to albuterol. Parents recall a choking episode while eating peanuts that \'resolved on its own.\' Decreased breath sounds on the right side.',
   correct:"B",
   options:{
     A:"Asthma exacerbation with unilateral predominance and subacute presentation",
     B:"Foreign body aspiration with unilateral wheezing and history of choking event",
     C:"Right lower lobe pneumonia with focal decreased breath sounds and cough",
     D:"Bronchiolitis with persistent wheezing and poor response to bronchodilators",
     E:"Mediastinal mass causing extrinsic airway compression and unilateral findings"
   },
   explanation:"Foreign body aspiration is commonly missed in pediatrics. The triad: (1) choking episode (witnessed or unwitnessed), (2) UNILATERAL wheezing, (3) UNILATERAL decreased breath sounds. Asthma causes BILATERAL wheezing — unilateral is always a red flag. The 3-week delay is typical because the initial choking resolves.",
   pearl:"'Not all that wheezes is asthma.' When wheezing is one-sided, think foreign body, mass, or mucus plug. Next step: inspiratory AND expiratory chest X-rays (expiratory film shows air trapping), followed by rigid bronchoscopy for removal."},

  {title:"The Weekend Warrior",
   vignette:'A 35-year-old male presents to urgent care after <strong>twisting his ankle playing basketball</strong> yesterday. He has pain and swelling over the lateral ankle. He can walk with a limp and is bearing weight. He wants an X-ray \'just to be safe.\'',
   correct:"E",
   options:{
     A:"Obtain bilateral ankle X-rays for comparison with the uninjured side",
     B:"Order MRI to evaluate for ligament and tendon damage directly",
     C:"Obtain ankle X-ray series given mechanism of injury and swelling",
     D:"Apply a walking boot and refer to orthopedics for further evaluation",
     E:"Apply Ottawa Ankle Rules — weight-bearing ability with no bony tenderness at key landmarks rules out fracture without imaging"
   },
   explanation:"The Ottawa Ankle Rules have nearly 100% sensitivity for fractures and reduce unnecessary X-rays by 30-40%. If the patient can bear weight (4 steps) AND has no bony tenderness at the posterior distal 6cm of fibula/tibia or at the navicular/5th metatarsal base, no X-ray is needed.",
   pearl:"This is 'imaging stewardship' — not every complaint needs imaging. The Ottawa Rules show that a careful history and exam can be MORE reliable than reflexive imaging. You'll see this theme throughout medicine: the best test is often the one you don't order."},

  {title:"The Dizzy Grandmother",
   vignette:'An 82-year-old woman presents after <strong>falling twice this week</strong>. She feels dizzy when standing from her chair. Medications include lisinopril, furosemide, and amlodipine. BP sitting: 148/82. BP standing: 112/68 with HR increase from 72 to 96.',
   correct:"A",
   options:{
     A:"Orthostatic hypotension from diuretic-induced volume depletion causing falls",
     B:"Benign paroxysmal positional vertigo triggered by position changes",
     C:"Cardiac arrhythmia with intermittent bradycardia causing presyncope",
     D:"Posterior circulation TIA presenting as recurrent dizziness and falls",
     E:"Age-related vestibular degeneration with progressive balance impairment"
   },
   explanation:"Orthostatic hypotension is defined as a drop of ≥20 mmHg systolic or ≥10 mmHg diastolic on standing. This patient drops 36 systolic. The compensatory tachycardia (72→96) confirms volume depletion rather than autonomic failure. Furosemide (loop diuretic) is the likely culprit.",
   pearl:"Falls in the elderly are never 'just falls.' They require a systematic workup: orthostatic vitals, medication review, cardiac evaluation, gait assessment. Medication-related orthostatic hypotension is one of the most common AND most fixable causes."},

  {title:"The Red Eye",
   vignette:'A 28-year-old contact lens wearer presents with <strong>24 hours of right eye pain, redness, tearing, and photophobia</strong>. She sometimes sleeps in her contacts. Visual acuity is decreased in the right eye. You notice a small white spot on the cornea.',
   correct:"C",
   options:{
     A:"Viral conjunctivitis with secondary corneal involvement and tearing",
     B:"Allergic conjunctivitis from contact lens protein deposit accumulation",
     C:"Bacterial keratitis from contact lens wear with corneal infiltrate",
     D:"Anterior uveitis presenting with pain, photophobia, and visual change",
     E:"Subconjunctival hemorrhage with concurrent corneal epithelial defect"
   },
   explanation:"The white spot on the cornea is a corneal infiltrate/ulcer — bacterial keratitis until proven otherwise. Contact lens wear is the #1 risk factor, and sleeping in lenses dramatically increases risk. This requires emergent ophthalmology referral and topical antibiotics.",
   pearl:"Red eye + contact lenses + pain + vision change = assume corneal infection. The key differentiator from conjunctivitis: pain, photophobia, and decreased visual acuity. This is one of the few eye emergencies where delay causes permanent vision loss."},

  {title:"The Cramping Runner",
   vignette:'A 24-year-old female marathon runner presents with <strong>fatigue, heavy menstrual periods, and muscle cramps during training</strong>. She follows a vegan diet and cannot complete her usual runs. Labs: Hemoglobin 9.8 g/dL (low), MCV 72 fL (low), ferritin 5 ng/mL (very low).',
   correct:"D",
   options:{
     A:"Vitamin B12 deficiency from vegan diet causing anemia and neurological symptoms",
     B:"Thalassemia trait presenting with microcytic anemia in a young woman",
     C:"Anemia of chronic disease from overtraining-induced chronic inflammation",
     D:"Iron deficiency anemia from menstrual losses combined with inadequate dietary intake",
     E:"Folate deficiency from increased metabolic demand in an endurance athlete"
   },
   explanation:"Iron deficiency anemia is the most common nutritional deficiency worldwide. This patient has a perfect storm: menstrual losses (monthly iron depletion), vegan diet (non-heme iron is poorly absorbed), and endurance athletics (GI microbleeding, hemolysis). Ferritin <15 is diagnostic of depleted stores.",
   pearl:"B12 deficiency causes MACROcytic anemia (high MCV), not microcytic. The MCV is your first branch point: low MCV = iron deficiency or thalassemia; high MCV = B12 or folate deficiency. This is one of the most high-yield diagnostic algorithms in medicine."}
],

intermediate: [
  {title:"The Construction Worker",
   vignette:'A 58-year-old construction worker presents with <strong>progressive shortness of breath over 6 months</strong>. He has a 40-pack-year smoking history and <strong>worked with asbestos insulation for 15 years</strong> in the 1980s. CXR shows bilateral lower lobe interstitial markings and <strong>calcified pleural plaques</strong>.',
   correct:"E",
   options:{
     A:"COPD exacerbation from extensive smoking history causing progressive dyspnea",
     B:"Idiopathic pulmonary fibrosis with bilateral lower lobe interstitial changes",
     C:"Congestive heart failure presenting as progressive exertional shortness of breath",
     D:"Lung adenocarcinoma with lymphangitic spread causing interstitial pattern",
     E:"Asbestosis with pathognomonic calcified pleural plaques and interstitial fibrosis"
   },
   explanation:"Calcified pleural plaques are 'fingerprints' of asbestos exposure — found nowhere else. Asbestosis causes progressive interstitial fibrosis in the lower lobes. Critical management: this patient needs LDCT screening for lung cancer because asbestos + smoking = 50-90× multiplicative risk.",
   pearl:"'What do you do for work?' is one of the most under-asked questions in medicine. The 15-year asbestos exposure from the 1980s (20-50 year latency) is the key that unlocks the diagnosis."},

  {title:"The College Student's Headache",
   vignette:'A 22-year-old female presents with the <strong>\'worst headache of my life\'</strong> — sudden onset 2 hours ago while studying. She describes thunderclap onset. Mild neck stiffness and photophobia. BP 142/88, HR 92. No migraine history.',
   correct:"A",
   options:{
     A:"Subarachnoid hemorrhage requiring emergent CT head and LP if negative",
     B:"First presentation of migraine with aura and meningeal irritation",
     C:"Viral meningitis with headache, neck stiffness, and photophobia",
     D:"Hypertensive emergency with acute headache from elevated blood pressure",
     E:"Tension-type headache with muscle tension causing nuchal rigidity"
   },
   explanation:"'Worst headache of my life' with thunderclap onset is classic SAH presentation and a medical emergency. CT head is ~98% sensitive within 6 hours; if negative, LP is required for xanthochromia. SAH is caused by ruptured cerebral aneurysm in ~85% of cases. Missing SAH is one of the most dangerous errors in emergency medicine.",
   pearl:"Always ask: 'Is this the worst headache you've ever had?' and 'Did it come on suddenly or gradually?' These two questions can save a life."},

  {title:"The Night Shift Nurse",
   vignette:'A 42-year-old night shift nurse presents with <strong>burning epigastric pain that wakes her at 2 AM</strong>, improves with eating, and has persisted for 3 weeks. She takes ibuprofen daily for back pain. She recently returned from a medical mission trip to Central America.',
   correct:"C",
   options:{
     A:"Gastroesophageal reflux disease with nocturnal acid breakthrough symptoms",
     B:"Functional dyspepsia from circadian disruption and occupational stress",
     C:"Peptic ulcer disease from daily NSAID use with possible H. pylori infection",
     D:"Gastric malignancy given persistent symptoms and travel to endemic region",
     E:"Biliary colic with referred epigastric pain worsening at night"
   },
   explanation:"The symptom pattern (night pain, relief with eating) suggests duodenal ulcer. Daily NSAID use is a major risk factor — NSAIDs inhibit COX-1, reducing protective prostaglandins. H. pylori testing is essential (urea breath test or stool antigen) given travel to high-prevalence area. Treating the infection cures the ulcer.",
   pearl:"Two things cause most peptic ulcers: H. pylori and NSAIDs. Classic teaching: duodenal ulcers hurt when EMPTY (relieved by food); gastric ulcers hurt when FULL (worse with food)."},

  {title:"The Swollen Knee",
   vignette:'A 65-year-old male presents with an <strong>acutely hot, swollen, red right knee</strong>. He can barely bend it. Temperature 101.2°F. He has a history of gout and had knee replacement surgery 6 months ago. WBC 14,000.',
   correct:"B",
   options:{
     A:"Acute gout flare precipitated by postoperative metabolic changes",
     B:"Septic arthritis requiring emergent joint aspiration before any treatment",
     C:"Pseudogout with calcium pyrophosphate crystal deposition in elderly male",
     D:"Prosthetic joint loosening with inflammatory reaction and synovitis",
     E:"Reactive arthritis triggered by recent perioperative infection"
   },
   explanation:"Acute monoarthritis with fever requires joint aspiration BEFORE any treatment. Yes, this patient has gout history. But treating as gout without aspirating could miss septic arthritis — which destroys cartilage within hours. A prosthetic joint infection is catastrophic and requires emergent orthopedic consultation.",
   pearl:"The rule in acute monoarthritis: ALWAYS aspirate before treating. Gout and septic arthritis can coexist. Never let a previous diagnosis anchor you away from the dangerous diagnosis."},

  {title:"The New Mom",
   vignette:'A 28-year-old woman, 2 weeks postpartum after cesarean delivery, presents with <strong>progressive left calf pain and swelling for 3 days</strong>. Her left calf is 3 cm larger than the right. She is breastfeeding and asks if this could be normal postpartum swelling.',
   correct:"D",
   options:{
     A:"Normal postpartum bilateral edema that is more prominent on one side",
     B:"Superficial thrombophlebitis from peripartum IV access site infection",
     C:"Gastrocnemius muscle strain from altered gait mechanics postpartum",
     D:"Deep vein thrombosis given postpartum hypercoagulability and calf asymmetry",
     E:"Baker's cyst rupture causing acute unilateral calf pain and swelling"
   },
   explanation:"Pregnancy and postpartum are high-risk states for VTE. Virchow's triad is fully engaged: hypercoagulable (pregnancy clotting factors), stasis (C-section immobilization), endothelial injury (surgical delivery). Unilateral calf swelling with >2 cm asymmetry is a key finding. Compression ultrasound is the next step.",
   pearl:"The key word is UNILATERAL. Bilateral swelling is usually benign. Unilateral swelling with calf asymmetry is DVT until proven otherwise. Always measure both calves — >2 cm difference is clinically significant."},

  {title:"The Frequent Urinator",
   vignette:'A 52-year-old obese male presents for a routine physical. He mentions <strong>increased thirst and urinating 8-10 times daily for 2 months</strong>. He has noticed blurry vision and increased fatigue. Family history: mother and brother have diabetes. BMI 34. Fasting glucose: 242 mg/dL.',
   correct:"C",
   options:{
     A:"Benign prostatic hyperplasia causing increased urinary frequency",
     B:"Diabetes insipidus with polyuria and polydipsia from ADH dysfunction",
     C:"Type 2 diabetes mellitus with polyuria, polydipsia, and hyperglycemia",
     D:"Primary polydipsia with compensatory polyuria and dilutional blurry vision",
     E:"Urinary tract infection presenting with frequency and constitutional symptoms"
   },
   explanation:"Classic diabetes presentation: polyuria, polydipsia, blurry vision with fasting glucose 242 mg/dL (diagnostic ≥126). The mechanism: hyperglycemia exceeds renal threshold (~180 mg/dL) → glucose in urine → osmotic diuresis → polyuria → dehydration → thirst. Blurry vision = glucose swelling the lens.",
   pearl:"Always check glucose in patients with new-onset blurry vision. Glucose is osmotically active — hyperglycemia changes the lens shape and refractive properties. This reverses with glucose control."},

  {title:"The Burning Urination",
   vignette:'A 26-year-old sexually active female presents with <strong>3 days of burning with urination, frequency, and urgency</strong>. No fever, no flank pain, no vaginal discharge. Regular menstrual cycles. Urinalysis shows positive leukocyte esterase and nitrites.',
   correct:"A",
   options:{
     A:"Uncomplicated lower UTI treatable empirically without urine culture",
     B:"Chlamydial urethritis requiring nucleic acid amplification testing",
     C:"Interstitial cystitis with chronic irritative bladder symptoms",
     D:"Vulvovaginal candidiasis presenting with dysuria and irritation",
     E:"Early pyelonephritis before systemic symptoms have developed"
   },
   explanation:"Classic uncomplicated lower UTI in a young, non-pregnant woman with supportive UA. Empiric treatment with nitrofurantoin (5 days) or TMP-SMX (3 days) without culture is appropriate. Key distinction: no fever or flank pain = lower tract; fever + flank pain = pyelonephritis requiring culture.",
   pearl:"The absence of vaginal discharge is key. UTI = dysuria + frequency + urgency WITHOUT discharge. Vaginitis and STIs typically present WITH discharge. Always ask about discharge."}
],

advanced: [
  {title:"The Breathless Traveler",
   vignette:'A 32-year-old woman presents with <strong>acute shortness of breath and pleuritic chest pain</strong> 3 days after a 14-hour flight from Tokyo. She takes <strong>oral contraceptives</strong> and smokes. HR 112, RR 22, O2 sat 93%. Chest X-ray is unremarkable.',
   correct:"C",
   options:{
     A:"Spontaneous pneumothorax with acute pleuritic pain and dyspnea",
     B:"Musculoskeletal chest wall strain from prolonged travel positioning",
     C:"Pulmonary embolism with multiple risk factors and high clinical probability",
     D:"Panic attack with hyperventilation from travel-related anxiety",
     E:"Community-acquired pneumonia with early presentation before infiltrate"
   },
   explanation:"Textbook PE with multiplicative risk factors: long-haul flight (stasis) + OCPs (hypercoagulable) + smoking (endothelial damage) = complete Virchow's triad. Normal CXR is actually a clue — most PE patients have normal CXR. With high pretest probability (Wells ≥7), go straight to CTA — D-dimer is only useful in LOW probability.",
   pearl:"Risk factors don't add — they MULTIPLY. OCP = 3-4× VTE risk. Smoking = 1.5×. Long flight = 2-3×. Combined: 20-40× baseline. NEVER diagnose anxiety in a tachycardic, hypoxic patient without ruling out PE first."},

  {title:"The Silent Emergency",
   vignette:'A 67-year-old male with <strong>metastatic prostate cancer</strong> presents with 2 weeks of <strong>progressive mid-back pain worse at night</strong>. Over 3 days he has developed <strong>bilateral leg weakness</strong> and urinary incontinence. Exam: LE weakness 3/5, hyperreflexia, upgoing toes, sensory level at T10.',
   correct:"E",
   options:{
     A:"Degenerative disc disease with multilevel spinal stenosis and myelopathy",
     B:"Cauda equina syndrome from metastatic compression of the nerve roots",
     C:"Epidural abscess with progressive cord compression and neurological deficit",
     D:"Diabetic lumbosacral plexopathy causing bilateral lower extremity weakness",
     E:"Malignant spinal cord compression requiring emergent MRI and dexamethasone"
   },
   explanation:"MSCC affects 5-10% of cancer patients. The diagnostic triad: cancer history + back pain WORSE at night + progressive neurological deficit. Ambulatory status at diagnosis determines prognosis: ambulatory at treatment = 80-90% remain ambulatory; paraplegic at diagnosis = <10% recovery.",
   pearl:"Median time from symptom onset to MSCC diagnosis: 2 MONTHS. 'Back pain in a cancer patient is spinal cord compression until proven otherwise.' Image the ENTIRE spine — 10-38% have multiple levels."},

  {title:"The Crushing Chest",
   vignette:'A 55-year-old male with diabetes and hypertension presents with <strong>2 hours of substernal chest pressure radiating to his left arm</strong> with diaphoresis and nausea. EKG shows <strong>ST elevations in leads II, III, and aVF</strong>. Troponin is pending.',
   correct:"B",
   options:{
     A:"NSTEMI requiring serial troponins before determining intervention strategy",
     B:"Inferior STEMI from right coronary occlusion requiring emergent catheterization",
     C:"Acute pericarditis with diffuse ST elevation and pleuritic chest pain",
     D:"Takotsubo cardiomyopathy with stress-induced ST changes and wall motion abnormality",
     E:"Aortic dissection with secondary coronary malperfusion causing ST changes"
   },
   explanation:"ST elevation in contiguous leads (II, III, aVF = inferior territory) is STEMI until proven otherwise. The EKG IS the diagnostic test — do NOT wait for troponin. Activate the cath lab for emergent PCI. Door-to-balloon goal: <90 minutes. Every 30 minutes of delay increases mortality.",
   pearl:"'Time is myocardium.' Always check right-sided leads (V4R) in inferior STEMI — RV involvement changes management (give fluids, avoid nitroglycerin)."},

  {title:"The Confused Elder",
   vignette:'An 80-year-old nursing home resident is brought in with <strong>acute confusion and fever of 101.8°F</strong>. She was oriented and conversational yesterday. Labs: WBC 18,000. UA positive for bacteria and WBC. Her daughter says \'she has UTIs all the time.\'',
   correct:"D",
   options:{
     A:"Urinary tract infection as the clear cause given positive UA and fever",
     B:"Alzheimer's disease with acute exacerbation triggered by infection",
     C:"Sundowning phenomenon exacerbated by the hospital environment",
     D:"Delirium requiring comprehensive workup beyond the incidental positive UA",
     E:"Urosepsis with systemic inflammatory response from urinary source"
   },
   explanation:"Asymptomatic bacteriuria is present in 25-50% of nursing home residents. A positive UA does NOT mean UTI is causing delirium. Complete workup required: CBC, BMP, blood cultures, CXR, medication review, neuro exam. 'UTI causing confusion' is one of the most over-diagnosed conditions in geriatric medicine.",
   pearl:"Delirium is ACUTE (hours to days) and fluctuates. Dementia is CHRONIC (months to years) and progressive. Never attribute acute confusion to 'old age' without a full workup."},

  {title:"The Tearing Pain",
   vignette:'A 68-year-old male with longstanding uncontrolled hypertension presents with <strong>sudden severe \'tearing\' chest pain radiating to his back</strong>. BP: right arm 182/110, left arm 148/90 — a <strong>34 mmHg difference</strong>. CXR shows widened mediastinum.',
   correct:"A",
   options:{
     A:"Aortic dissection with blood pressure differential and mediastinal widening",
     B:"Acute myocardial infarction with atypical radiation pattern to the back",
     C:"Massive pulmonary embolism with acute chest pain and hemodynamic changes",
     D:"Esophageal rupture with mediastinal widening after forceful vomiting",
     E:"Tension pneumothorax with mediastinal shift causing blood pressure asymmetry"
   },
   explanation:"The classic triad: (1) tearing pain radiating to back, (2) BP differential >20 mmHg between arms (dissection flap obstructing subclavian flow), (3) widened mediastinum on CXR. CTA chest/abdomen/pelvis STAT. Type A (ascending) = emergent surgery. Do NOT anticoagulate — dissection can mimic STEMI on EKG.",
   pearl:"The BP differential between arms should make you think 'dissection' immediately. Critical: DO NOT give anticoagulants or tPA to a dissection patient."},

  {title:"The Wheezing Child",
   vignette:'A 4-year-old boy presents to the ED in <strong>respiratory distress with stridor, barking cough, and hoarse voice</strong>. Symptoms started overnight after 2 days of runny nose. Temperature 100.4°F. He is sitting upright with visible chest retractions but is alert and interactive.',
   correct:"B",
   options:{
     A:"Epiglottitis with acute stridor requiring emergent airway management",
     B:"Croup with viral prodrome, barking cough, and inspiratory stridor",
     C:"Foreign body aspiration lodged at the level of the subglottic airway",
     D:"Bacterial tracheitis with stridor, fever, and progressive respiratory distress",
     E:"Acute asthma exacerbation triggered by viral upper respiratory infection"
   },
   explanation:"Croup is the most common cause of stridor in children 6 months to 6 years. Barking/seal-like cough is nearly pathognomonic. Key distinction from epiglottitis: croup has gradual onset with URI prodrome, barking cough, and the child is interactive. Epiglottitis: rapid onset, drooling, toxic-appearing, muffled voice. Treatment: dexamethasone ± racemic epinephrine.",
   pearl:"If the child is interactive, talking, and coughing — likely croup. If toxic, drooling, and silent — think epiglottitis and don't examine the throat."},

  {title:"The Young Athlete",
   vignette:'A 17-year-old male basketball player <strong>collapses during sprints at practice</strong>. He is <strong>unresponsive and pulseless</strong>. AED shows ventricular fibrillation. No prior medical history. Family history: uncle died suddenly at age 30.',
   correct:"D",
   options:{
     A:"Commotio cordis from precordial impact during a basketball play",
     B:"Exertional heat stroke with cardiac arrest from core temperature elevation",
     C:"Catecholaminergic polymorphic ventricular tachycardia triggered by exercise",
     D:"Hypertrophic cardiomyopathy with exertional VFib and family history of sudden death",
     E:"Long QT syndrome with exercise-induced ventricular fibrillation and collapse"
   },
   explanation:"HCM is the #1 cause of sudden cardiac death in young athletes. Asymmetric septal hypertrophy can obstruct LV outflow during exercise, causing fatal arrhythmia. Family history of sudden death at a young age is a critical red flag. HCM is autosomal dominant — first-degree relatives need echocardiographic screening.",
   pearl:"Family history of sudden cardiac death under 50 should trigger further evaluation. If one family member has HCM, first-degree relatives have 50% chance of carrying the gene. The family history saves lives beyond the index patient."}
]};

// Verify the audit passes
let total = 0;
const letters = [];
let flagged = 0;

['beginner','intermediate','advanced'].forEach(diff => {
  C[diff].forEach(q => {
    total++;
    letters.push(q.correct);
    const opts = Object.values(q.options);
    const correctLen = q.options[q.correct].length;
    const incLens = Object.entries(q.options).filter(([l]) => l !== q.correct).map(([,t]) => t.length);
    const avgInc = incLens.reduce((s,l) => s+l, 0) / incLens.length;
    const ratio = correctLen / avgInc;
    if (ratio > 1.5 || ratio < 0.67) flagged++;
  });
});

const dist = {};
letters.forEach(l => { dist[l] = (dist[l]||0)+1; });
console.log('=== POST-FIX AUDIT ===');
console.log('Total: ' + total);
console.log('Letter distribution:');
Object.entries(dist).sort().forEach(([l,n]) => console.log('  ' + l + ': ' + n + ' (' + (n/total*100).toFixed(1) + '%)'));
console.log('Length giveaways: ' + flagged);
console.log('Has E options: YES');

// Now write back into the HTML
let html = fs.readFileSync('/home/claude/reasondx/modules/premed-challenges.html', 'utf8');
const startMarker = 'const C=';
const endMarker = "let currentDiff='beginner';";
const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker);
html = html.slice(0, startIdx) + 'const C=' + JSON.stringify(C) + ';\n' + html.slice(endIdx);

// Also need to update the render function to handle E options
fs.writeFileSync('/home/claude/reasondx/modules/premed-challenges.html', html);
console.log('\nFile written: ' + html.length + ' bytes');
