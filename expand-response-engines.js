// This script generates an updated premed-encounter.html with 20 deep response engines
const fs = require('fs');

const RESPONSE_DB = {
  "chest pain": {
    happening: "The physician was likely running through a mental differential: Is this cardiac (ACS, PE, aortic dissection), pulmonary (pneumothorax, pneumonia), GI (GERD, esophageal spasm), or musculoskeletal? The order of the workup \u2014 EKG first, troponin, chest X-ray \u2014 reflects the need to rule out life-threatening causes before considering benign ones.",
    prereqs: ["Cardiac physiology (bio): How the heart generates electrical signals \u2192 why EKG is the first test", "Biochemistry: Troponin as a biomarker of myocardial injury \u2014 enzyme kinetics in real life", "Anatomy: Coronary artery distribution \u2192 why different arteries cause different symptoms"],
    questions: ["What made you decide to order an EKG first vs. a chest X-ray?", "How do you differentiate cardiac chest pain from GI chest pain on history alone?", "What\u2019s the one question you always ask chest pain patients?"],
    watchFor: ["Notice the physician\u2019s body language \u2014 do they seem more urgent with some chest pain patients than others? That\u2019s clinical gestalt.", "Watch what happens when the EKG comes back \u2014 does the physician\u2019s demeanor change?", "Pay attention to risk factor assessment: age, smoking, diabetes, family history \u2014 this is Framingham in action."],
    modules: ["Cardiology CRT cases", "MechanismDx: Cardiac Physiology", "RadDx: Cardiac Imaging"]
  },
  "abdominal pain": {
    happening: "Abdominal pain has one of the broadest differentials in medicine. The physician was localizing (which quadrant?), characterizing (sharp vs dull, constant vs colicky), and considering organ systems by location. RLQ in a young person \u2192 appendicitis until proven otherwise. Epigastric \u2192 gastric/pancreatic. RUQ \u2192 gallbladder/liver.",
    prereqs: ["Anatomy: Abdominal quadrant mapping \u2014 which organs live where", "Physiology: Visceral vs somatic pain pathways \u2014 why early appendicitis hurts at the umbilicus before migrating to RLQ", "Biochemistry: Lipase and amylase as markers of pancreatic inflammation"],
    questions: ["How did you narrow the differential based on the location of pain?", "When do you decide a patient needs imaging vs. a trial of treatment?", "What\u2019s the most commonly missed abdominal emergency?"],
    watchFor: ["Watch the physical exam closely \u2014 palpation order matters (they start AWAY from the pain)", "Notice if they check for rebound tenderness and Murphy\u2019s sign \u2014 these are named exam maneuvers with specific diagnostic value", "Pay attention to whether they order labs before or after the exam"],
    modules: ["GI CRT cases", "MechanismDx: GI Physiology", "RadDx: Abdominal Imaging"]
  },
  "headache": {
    happening: "The physician was screening for \u2018red flags\u2019 that indicate a dangerous secondary headache (SAH, meningitis, mass, temporal arteritis) vs a primary headache (migraine, tension, cluster). The key question: \u2018Is this the worst headache of your life?\u2019 screens for subarachnoid hemorrhage.",
    prereqs: ["Neuroanatomy: Meningeal layers and why subarachnoid bleeding causes the \u2018worst headache of my life\u2019", "Physiology: Intracranial pressure dynamics \u2014 why headaches worse in the morning suggest elevated ICP", "Pharmacology: Triptans for migraines \u2014 serotonin receptor agonists (5-HT1B/1D)"],
    questions: ["What are the \u2018red flags\u2019 that make you worry a headache is dangerous?", "How do you decide between ordering a CT scan vs treating and sending home?", "What\u2019s the difference between how you approach a first-time headache vs a chronic headache patient?"],
    watchFor: ["Notice if the physician does a neurological exam (pupil check, strength testing, coordination)", "Listen for the temporal artery question in older patients", "Watch how they assess neck stiffness \u2014 this is meningismus testing"],
    modules: ["Neuro CRT cases", "MechanismDx: Neurophysiology", "RadDx: Neuroimaging"]
  },
  "shortness of breath": {
    happening: "Dyspnea has a broad differential spanning cardiac (heart failure, ACS), pulmonary (PE, pneumonia, asthma, COPD, pneumothorax), and other systems (anemia, anxiety, metabolic acidosis). The physician was using history to narrow: acute vs chronic, positional (orthopnea \u2192 HF), associated symptoms, and risk factors.",
    prereqs: ["Physiology: Gas exchange mechanics \u2014 why V/Q mismatch causes hypoxemia", "Biochemistry: Oxygen-hemoglobin dissociation curve \u2014 why some patients tolerate low O2 better than others", "Physics: Boyle\u2019s law and respiratory mechanics \u2014 negative pressure ventilation"],
    questions: ["What\u2019s your approach when a patient says \u2018I can\u2019t breathe\u2019?", "How do you differentiate cardiac from pulmonary causes of dyspnea?", "When do you decide someone needs admission vs can go home?"],
    watchFor: ["Watch pulse oximetry \u2014 does the physician check it immediately?", "Notice if they listen to lungs AND heart \u2014 both systems cause dyspnea", "Pay attention to legs (edema \u2192 HF) and neck veins (JVP \u2192 fluid overload)"],
    modules: ["Pulmonary CRT cases", "MechanismDx: Respiratory Physiology", "RadDx: Chest Imaging"]
  },
  "back pain": {
    happening: "The physician was risk-stratifying: is this mechanical (>95% of cases) or is there a red flag? Red flags: cancer history, fever (infection), trauma, neurological deficits (weakness, numbness, bowel/bladder dysfunction \u2192 cauda equina or cord compression), IV drug use, recent procedure. Mechanical back pain gets conservative treatment. Red flags get imaging.",
    prereqs: ["Anatomy: Spinal column structure \u2014 vertebral bodies, discs, nerve roots, spinal cord", "Physiology: Dermatome mapping \u2014 which nerve root causes which pattern of numbness", "Pathophysiology: Disc herniation mechanics \u2014 why flexion loads stress the posterior annulus"],
    questions: ["What red flags do you screen for with every back pain patient?", "How do you decide who needs imaging vs conservative treatment?", "What would make you worried about cauda equina syndrome?"],
    watchFor: ["Watch for the straight leg raise test \u2014 positive = nerve root irritation", "Notice if they check strength, sensation, and reflexes in the legs \u2014 this maps to specific nerve roots", "Pay attention to whether they ask about bowel and bladder function \u2014 this screens for cauda equina"],
    modules: ["MSK CRT cases", "RadDx: MSK Imaging", "RadDx: Neuroimaging (spinal cord compression)"]
  },
  "fever": {
    happening: "Fever triggers a systematic search for the source: respiratory (pneumonia), urinary (UTI/pyelonephritis), abdominal (appendicitis, cholecystitis, abscess), skin/soft tissue (cellulitis), CNS (meningitis), bloodstream (bacteremia/sepsis). The physician was asking organ-system-specific questions to localize the infection, then deciding if this is simple outpatient treatment or sepsis requiring emergent intervention.",
    prereqs: ["Physiology: Thermoregulation \u2014 how pyrogens reset the hypothalamic set point", "Microbiology: Bacterial vs viral vs fungal patterns \u2014 which infections cause which fever patterns", "Immunology: The inflammatory cascade \u2014 IL-1, IL-6, TNF-alpha and their role in fever generation"],
    questions: ["How do you decide if a fever is viral vs bacterial?", "What makes you worried about sepsis vs a simple infection?", "When do you start antibiotics empirically vs waiting for culture results?"],
    watchFor: ["Watch whether they order blood cultures before starting antibiotics \u2014 this sequence matters", "Notice the sepsis screening: HR, BP, respiratory rate, mental status, lactate", "Pay attention to whether they perform a complete exam looking for a source \u2014 the source isn\u2019t always obvious"],
    modules: ["Infectious Disease CRT cases", "MechanismDx: Immune Response"]
  },
  "rash": {
    happening: "Dermatology reasoning is uniquely visual: the physician was describing the morphology (macule, papule, vesicle, plaque), distribution (central vs peripheral, dermatomal, sun-exposed), and pattern (acute vs chronic, spreading vs stable). Then matching to a pattern: is this allergic, infectious, autoimmune, or malignant?",
    prereqs: ["Anatomy: Skin structure \u2014 epidermis, dermis, subcutaneous tissue", "Immunology: Type I-IV hypersensitivity reactions \u2014 urticaria (Type I) vs contact dermatitis (Type IV)", "Microbiology: Viral exanthems \u2014 measles, varicella, hand-foot-mouth patterns"],
    questions: ["How do you describe this rash using dermatology terminology?", "What\u2019s your approach to an unknown rash \u2014 where do you start?", "When does a rash make you worried about a systemic disease?"],
    watchFor: ["Watch the physician describe the rash out loud \u2014 they\u2019re using a specific vocabulary (morphology + distribution + pattern)", "Notice if they press on the rash (blanching vs non-blanching \u2014 non-blanching = petechiae = possible emergency)", "Pay attention to whether they ask about medications \u2014 drug rashes are extremely common"],
    modules: ["Dermatology modules", "MechanismDx: Immune Hypersensitivity"]
  },
  "joint pain": {
    happening: "Joint pain reasoning starts with: monoarticular (one joint) vs polyarticular (many joints), acute vs chronic, inflammatory (warm, swollen, morning stiffness >30min) vs mechanical (worse with use, better with rest). Acute monoarticular = must rule out septic arthritis (a joint emergency). The physician was risk-stratifying for this worst-case first.",
    prereqs: ["Anatomy: Synovial joint structure \u2014 cartilage, synovium, synovial fluid", "Immunology: Autoimmune joint disease \u2014 rheumatoid arthritis (Type III hypersensitivity)", "Biochemistry: Uric acid metabolism \u2014 why gout is a disease of purine catabolism"],
    questions: ["How do you differentiate inflammatory from mechanical joint pain?", "What makes you worried about septic arthritis?", "How do you decide between X-ray, MRI, and joint aspiration?"],
    watchFor: ["Watch if they aspirate the joint \u2014 synovial fluid analysis is the gold standard for acute monoarthritis", "Notice the pattern: which joints are involved tells you the diagnosis (DIP = OA, MCP/PIP = RA, 1st MTP = gout)", "Pay attention to morning stiffness duration \u2014 >30 min = inflammatory, <30 min = mechanical"],
    modules: ["MSK CRT cases", "MechanismDx: Musculoskeletal", "RadDx: MSK Imaging"]
  },
  "cough": {
    happening: "Cough reasoning is timeline-driven: acute (<3 weeks) vs subacute (3-8 weeks) vs chronic (>8 weeks). Acute = usually infectious (viral URI, pneumonia) or concerning (PE, HF). Chronic = the big three are upper airway cough syndrome (post-nasal drip), asthma, and GERD. The physician was asking about duration, productivity (dry vs wet), associated symptoms, and red flags (hemoptysis, weight loss).",
    prereqs: ["Physiology: Cough reflex arc \u2014 vagal afferents, medullary cough center, efferent muscles", "Anatomy: Airway anatomy \u2014 where receptors are concentrated explains why different conditions cause cough", "Pharmacology: ACE inhibitors cause cough in 5-20% of patients via bradykinin accumulation"],
    questions: ["How does the duration of a cough change your differential?", "When does a cough warrant a chest X-ray?", "What\u2019s the most common cause of chronic cough that patients don\u2019t expect?"],
    watchFor: ["Listen for whether they ask about ACE inhibitor use \u2014 it\u2019s one of the most common medication causes of chronic cough", "Notice if they ask about GERD symptoms \u2014 acid reflux causes cough even without heartburn", "Watch whether they order a chest X-ray or treat empirically \u2014 this reveals their risk assessment"],
    modules: ["Pulmonary CRT cases", "RadDx: Chest Imaging"]
  },
  "dizziness": {
    happening: "Dizziness is one of the most diagnostically challenging complaints because the word means different things to different patients. The physician was clarifying: vertigo (room spinning = vestibular), presyncope (feeling like going to faint = cardiovascular), disequilibrium (unsteadiness = neurological), or lightheadedness (vague = multifactorial). Each has a completely different workup.",
    prereqs: ["Neuroanatomy: Vestibular system \u2014 semicircular canals, otolith organs, vestibular nerve", "Physiology: Baroreceptor reflex \u2014 why standing up too fast causes presyncope", "Pharmacology: Vestibular suppressants \u2014 meclizine, benzodiazepines and their mechanisms"],
    questions: ["How do you get patients to describe their dizziness more specifically?", "What exam maneuvers help you differentiate central from peripheral vertigo?", "When does dizziness make you worried about a stroke?"],
    watchFor: ["Watch for the Dix-Hallpike maneuver \u2014 the diagnostic test for BPPV (the most common cause of vertigo)", "Notice if they check orthostatic vitals (lying \u2192 sitting \u2192 standing) \u2014 this tests for presyncope", "Pay attention to the HINTS exam if done (Head Impulse, Nystagmus, Test of Skew) \u2014 this differentiates peripheral from central vertigo"],
    modules: ["Neuro CRT cases", "MechanismDx: Neurophysiology"]
  },
  "palpitations": {
    happening: "The physician was determining: is this benign (PVCs, anxiety, caffeine) or dangerous (SVT, AFib, VT)? History is key: duration (seconds vs hours), regularity, associated symptoms (syncope or near-syncope = dangerous), triggers (caffeine, alcohol, stress, exercise). An EKG during symptoms is the gold standard but symptoms are often intermittent.",
    prereqs: ["Physiology: Cardiac conduction system \u2014 SA node, AV node, His-Purkinje and what happens when each misfires", "Biochemistry: Ion channels \u2014 Na+, K+, Ca2+ channels and how they create action potentials", "Pharmacology: Beta-blockers and calcium channel blockers \u2014 how they control heart rate"],
    questions: ["What features of palpitations worry you most?", "How do you decide between an EKG, Holter monitor, or event monitor?", "When do palpitations need urgent evaluation vs reassurance?"],
    watchFor: ["Watch if they order an EKG \u2014 capturing the rhythm during symptoms is diagnostic gold", "Notice if they ask about caffeine, alcohol, stimulant medications, and supplements", "Pay attention to whether they feel the pulse \u2014 regular vs irregular tells you a lot"],
    modules: ["Cardiology CRT cases", "MechanismDx: Cardiac Physiology"]
  },
  "anxiety": {
    happening: "The physician was doing two things simultaneously: (1) assessing the mental health complaint (severity, duration, functional impairment, safety screening for suicidal ideation), and (2) ruling out medical mimics \u2014 hyperthyroidism, cardiac arrhythmia, pheochromocytoma, substance use, and medication side effects can all present as anxiety. This dual approach is critical.",
    prereqs: ["Neuroscience: Amygdala and fear circuitry \u2014 the neurobiology of anxiety", "Physiology: Sympathetic nervous system activation \u2014 the fight-or-flight response", "Pharmacology: SSRIs, SNRIs, benzodiazepines \u2014 different mechanisms for treating anxiety"],
    questions: ["How do you screen for medical causes of anxiety before diagnosing a primary anxiety disorder?", "What\u2019s your approach to safety screening (suicidal ideation)?", "How do you decide between therapy, medication, or both?"],
    watchFor: ["Notice if they order thyroid labs (TSH) \u2014 hyperthyroidism mimics anxiety almost perfectly", "Watch the safety screening \u2014 asking about suicidal ideation directly is standard of care and does NOT increase risk", "Pay attention to the treatment discussion \u2014 CBT has equal efficacy to SSRIs for many anxiety disorders"],
    modules: ["Psychiatry modules", "MechanismDx: Neurophysiology"]
  },
  "uti": {
    happening: "The physician was distinguishing uncomplicated UTI (lower tract: dysuria, frequency, urgency in a young non-pregnant woman) from complicated UTI (upper tract/pyelonephritis: fever, flank pain) and from conditions that mimic UTI (STIs, vaginitis, interstitial cystitis). Uncomplicated UTI in young women may be treated empirically without urine culture.",
    prereqs: ["Microbiology: E. coli as the #1 uropathogen (80%) \u2014 virulence factors (fimbriae, adhesins)", "Anatomy: Female vs male urethral anatomy \u2014 why UTIs are 30x more common in women", "Pharmacology: Antibiotic stewardship \u2014 nitrofurantoin and TMP-SMX as first-line vs fluoroquinolones"],
    questions: ["How do you differentiate UTI from pyelonephritis clinically?", "When do you send a urine culture vs treat empirically?", "Why are fluoroquinolones no longer first-line for uncomplicated UTI?"],
    watchFor: ["Notice if they do a pelvic exam \u2014 STIs and vaginitis cause similar symptoms", "Watch if they order a urine culture or just a urinalysis \u2014 this depends on whether it\u2019s complicated or uncomplicated", "Pay attention to antibiotic choice \u2014 this reflects stewardship principles and local resistance patterns"],
    modules: ["Renal/GU CRT cases", "MechanismDx: Renal Physiology"]
  },
  "diabetes": {
    happening: "Diabetes follow-up is a masterclass in chronic disease management. The physician was reviewing: glycemic control (A1c trends), medication adherence and side effects, screening for complications (retinopathy, nephropathy, neuropathy, cardiovascular risk), lifestyle factors (diet, exercise, weight), and preventive care (flu vaccine, foot exams). This is population health at the individual level.",
    prereqs: ["Biochemistry: Insulin signaling and glucose metabolism \u2014 why Type 1 vs Type 2 have different mechanisms", "Physiology: Gluconeogenesis, glycogenolysis, and how the body maintains glucose homeostasis", "Pharmacology: Metformin, sulfonylureas, SGLT2 inhibitors, GLP-1 agonists \u2014 each works differently"],
    questions: ["How do you set A1c goals for different patients?", "What\u2019s your approach when a patient isn\u2019t meeting their A1c target?", "How do you screen for diabetic complications and how often?"],
    watchFor: ["Watch the foot exam \u2014 monofilament testing screens for neuropathy (diabetic foot ulcers are the #1 cause of non-traumatic amputation)", "Notice if they review the medication list for kidney protection (ACE inhibitors) and cardiovascular benefit (SGLT2i, GLP-1 agonists)", "Pay attention to the lifestyle conversation \u2014 how does the physician motivate behavior change?"],
    modules: ["Endocrine CRT cases", "MechanismDx: Endocrine Physiology"]
  },
  "pediatric fever": {
    happening: "Pediatric fever reasoning is age-stratified: neonates (<28 days) get a full sepsis workup regardless of how well they look (blood, urine, CSF). Infants 29-90 days use risk-stratification tools (Rochester criteria, Step-by-Step). Older infants and children are assessed clinically. The younger the child, the more aggressive the workup \u2014 because neonates can\u2019t tell you what hurts.",
    prereqs: ["Microbiology: Age-based pathogens \u2014 GBS and E. coli in neonates, Strep pneumo and Haemophilus in infants", "Immunology: Neonatal immune immaturity \u2014 why newborns are vulnerable to overwhelming sepsis", "Physiology: Thermoregulation in neonates \u2014 why temperature instability (hypo OR hyperthermia) is a red flag"],
    questions: ["How does the patient\u2019s age change your approach to fever?", "What makes you do a full sepsis workup vs treating conservatively?", "What\u2019s the most important thing parents should know about fever in their newborn?"],
    watchFor: ["Watch if the physician checks the child\u2019s activity level, feeding, and consolability \u2014 these are more important than the number on the thermometer", "Notice age-based decision-making: a 2-week-old with 100.4\u00b0F gets a lumbar puncture; a 3-year-old does not", "Pay attention to whether they reassure vs worry the parents \u2014 communication in pediatrics is a unique skill"],
    modules: ["Pediatric CRT cases", "RadDx: Pediatric Imaging"]
  },
  "ear pain": {
    happening: "Ear pain (otalgia) can be primary (otitis media, otitis externa, TM perforation) or referred (TMJ, dental, pharyngeal, cervical spine). The physician was using the otoscope to visualize the tympanic membrane \u2014 a bulging, erythematous TM with effusion = acute otitis media. A normal TM with ear pain = look elsewhere (referred pain).",
    prereqs: ["Anatomy: Middle ear anatomy \u2014 TM, ossicles, Eustachian tube, and why children get more ear infections (shorter, more horizontal tube)", "Microbiology: Strep pneumo, H. influenzae, Moraxella \u2014 the triad of AOM pathogens", "Pharmacology: Watchful waiting vs antibiotics in AOM \u2014 AAP guidelines by age and severity"],
    questions: ["How do you decide between watchful waiting and antibiotics for an ear infection?", "What does a normal vs abnormal tympanic membrane look like?", "When do ear infections need ENT referral?"],
    watchFor: ["Watch the otoscope exam technique \u2014 pulling the pinna up and back (adults) or down and back (children) straightens the canal", "Notice the pneumatic otoscopy \u2014 squeezing the bulb tests TM mobility (immobile = effusion)", "Pay attention to whether they check for mastoid tenderness \u2014 this screens for the dangerous complication of mastoiditis"],
    modules: ["ENT modules", "RadDx: Head & Neck Imaging"]
  },
  "pelvic pain": {
    happening: "Pelvic pain in a reproductive-age female requires ruling out: ectopic pregnancy (life-threatening \u2014 pregnancy test is ALWAYS first), ovarian torsion (surgical emergency), ruptured ovarian cyst, PID/tubo-ovarian abscess, appendicitis, and endometriosis. The physician was taking a menstrual and sexual history and ordering a pregnancy test before anything else.",
    prereqs: ["Anatomy: Female reproductive anatomy \u2014 ovaries, fallopian tubes, uterus and their anatomic relationships", "Physiology: Menstrual cycle physiology \u2014 how hormonal fluctuations cause cyclic vs non-cyclic pelvic pain", "Embryology: Ectopic pregnancy pathophysiology \u2014 why the fallopian tube can\u2019t sustain a pregnancy"],
    questions: ["Why is a pregnancy test the first thing you order for ANY reproductive-age woman with pelvic pain?", "How do you differentiate ovarian torsion from a ruptured cyst clinically?", "What makes you worried about PID and why does it matter for future fertility?"],
    watchFor: ["Watch whether the pregnancy test is ordered BEFORE imaging \u2014 this changes the entire differential and workup", "Notice the pelvic exam technique and what they\u2019re assessing (cervical motion tenderness = PID or ectopic)", "Pay attention to the ultrasound order \u2014 transvaginal is more sensitive than transabdominal for pelvic pathology"],
    modules: ["OB/GYN CRT cases", "RadDx: OB/GYN Imaging"]
  },
  "fatigue": {
    happening: "Fatigue is one of the most common and most challenging complaints. The physician was screening for medical causes: anemia (CBC), thyroid disease (TSH), diabetes (glucose/A1c), depression (PHQ-9), sleep disorders (sleep apnea screen), and medication side effects. Fatigue is often multifactorial \u2014 rarely does one test explain everything.",
    prereqs: ["Physiology: Energy metabolism \u2014 ATP production, mitochondrial function", "Endocrinology: Thyroid hormone and metabolic rate \u2014 why hypothyroidism causes fatigue", "Hematology: Oxygen delivery \u2014 why anemia causes fatigue (reduced O2 carrying capacity)"],
    questions: ["What\u2019s your standard workup for unexplained fatigue?", "How do you screen for depression when a patient presents with physical symptoms?", "When do you worry that fatigue is a sign of something serious like cancer?"],
    watchFor: ["Watch the screening questions \u2014 sleep quality, mood, stress, diet, exercise all matter", "Notice if they use a standardized depression screening tool (PHQ-2 or PHQ-9)", "Pay attention to the lab panel \u2014 CBC, TSH, BMP, and glucose cover most medical causes"],
    modules: ["Endocrine CRT cases", "MechanismDx: Endocrine Physiology"]
  },
  "wound": {
    happening: "Wound management reasoning includes: mechanism (laceration, puncture, crush, bite), contamination risk (dirty vs clean, time since injury), tetanus status, need for imaging (foreign body, fracture underneath), repair technique (sutures, staples, glue, secondary intention), and infection risk. The physician was deciding the optimal closure method and antibiotic need.",
    prereqs: ["Anatomy: Skin layers and wound healing biology \u2014 inflammatory, proliferative, and remodeling phases", "Microbiology: Wound infection pathogens \u2014 Staph aureus, Strep, anaerobes, Pasteurella (animal bites)", "Immunology: Tetanus pathophysiology and why boosters are needed every 10 years"],
    questions: ["How do you decide between sutures, staples, and glue?", "What\u2019s your approach to tetanus prophylaxis \u2014 when does a wound need it?", "When does a wound need antibiotics vs just good wound care?"],
    watchFor: ["Watch the wound exploration \u2014 the physician checks for tendon/nerve/vessel injury before closing", "Notice the irrigation technique \u2014 high-pressure irrigation with saline reduces infection more than any antibiotic", "Pay attention to the tetanus question \u2014 this is a real-time vaccine decision"],
    modules: ["Emergency Medicine modules", "Wound care references"]
  },
  "syncope": {
    happening: "Syncope (fainting) requires risk stratification: benign (vasovagal, orthostatic, situational) vs dangerous (cardiac arrhythmia, structural heart disease, PE, aortic dissection). The physician was asking about prodrome (lightheadedness, nausea, tunnel vision = vasovagal), position (standing = orthostatic), exertional (= cardiac until proven otherwise), and whether there was true loss of consciousness vs near-syncope.",
    prereqs: ["Physiology: Cerebral perfusion and autoregulation \u2014 why the brain faints when blood pressure drops", "Cardiology: Arrhythmia mechanisms \u2014 long QT, WPW, complete heart block", "Pharmacology: Medications that cause orthostatic hypotension \u2014 antihypertensives, diuretics, alpha-blockers"],
    questions: ["What features of syncope make you worried about a cardiac cause?", "How do you differentiate syncope from a seizure?", "What\u2019s your approach to the EKG in a syncope patient \u2014 what are you looking for?"],
    watchFor: ["Watch if they order an EKG \u2014 this is standard for ALL syncope to screen for arrhythmia", "Notice if they check orthostatic vitals (lying \u2192 standing) \u2014 a drop in BP = orthostatic cause", "Pay attention to whether exertion was involved \u2014 exertional syncope is ALWAYS cardiac until proven otherwise (hypertrophic cardiomyopathy in young athletes)"],
    modules: ["Cardiology CRT cases", "MechanismDx: Cardiac Physiology"]
  }
};

// Read existing file and replace the RESPONSE_DB
let html = fs.readFileSync('/home/claude/reasondx/modules/premed-encounter.html', 'utf8');

// Replace the entire RESPONSE_DB block
const dbStart = html.indexOf('const RESPONSE_DB = {');
const dbEnd = html.indexOf('// Default response for complaints');
const newDB = 'const RESPONSE_DB = ' + JSON.stringify(RESPONSE_DB, null, 2) + ';\n\n';
html = html.slice(0, dbStart) + newDB + html.slice(dbEnd);

fs.writeFileSync('/home/claude/reasondx/modules/premed-encounter.html', html);
console.log('Updated encounter companion: ' + html.length + ' bytes, ' + Object.keys(RESPONSE_DB).length + ' deep response engines');
