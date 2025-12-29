// ============================================================
// ReasonDx POM 2 Teaching & Facilitator Module
// Course Director and Facilitator Resources
// ============================================================

(function() {
    'use strict';
    
    // Teaching access levels
    const TEACHING_ROLES = {
        COURSE_DIRECTOR: 'course_director',
        FACILITATOR: 'facilitator',
        STUDENT: 'student'
    };
    
    // Passcodes for teaching access
    const TEACHING_PASSCODES = {
        courseDirector: 'CD-LFINE-2025',
        facilitator: 'FACIL-POM2-2025',
        largeGroup: 'LARGEGRP-2025',
        smallGroup: 'SMALLGRP-2025'
    };
    
    // Current teaching role (stored in session)
    let currentTeachingRole = TEACHING_ROLES.STUDENT;
    let teachingModeUnlocked = false;
    
    // ============================================================
    // FACILITATOR GUIDES DATA
    // ============================================================
    
    const FACILITATOR_GUIDES = {
        // ==================== WEEK 2: EPIGASTRIC PAIN ====================
        'week-2': {
            title: "Week 2: Epigastric Pain",
            topic: "Epigastric Abdominal Pain",
            
            objectives: [
                "Generate, prioritize and justify a differential diagnosis based on a chief complaint of epigastric pain (CLO3)",
                "Demonstrate a hypothesis-driven approach to taking a history from a patient with epigastric pain (CLO1, CLO2)",
                "Demonstrate a hypothesis-driven approach to the physical examination by noting what findings would be expected for each item on the differential (CLO2)",
                "Perform a physical exam that demonstrates respect and support of patient autonomy and privacy (CLO2)",
                "Determine a final differential diagnosis supported by history and examination findings (CLO3)",
                "Demonstrate a concise but ordered and chronological oral presentation (CLO13, CLO14)",
                "Execute an effective closure of the encounter using a patient centered approach (CLO13, CLO14)"
            ],
            
            openingPrompt: "What's your preliminary differential for a patient with epigastric abdominal pain?",
            
            differentialDiagnoses: {
                common: ["Gastritis", "GERD", "Peptic ulcer disease"],
                mustNotMiss: ["Myocardial infarction", "Pancreatitis", "Aortic aneurysm rupture"],
                additional: ["Gallbladder disease", "Esophageal spasm"]
            },
            
            keyHistoryPoints: [
                { item: "Onset, location, duration, character of pain", linkedDx: "All" },
                { item: "Relation to meals, NSAID use", linkedDx: "Gastritis, PUD" },
                { item: "Associated: nausea, vomiting, heartburn", linkedDx: "GERD, Gastritis" },
                { item: "Cardiac symptoms: chest pain, SOB, diaphoresis", linkedDx: "MI" },
                { item: "GI bleeding: melena, hematemesis", linkedDx: "PUD, variceal bleed" },
                { item: "Family history of ulcers or cardiac disease", linkedDx: "Risk stratification" }
            ],
            
            hypothesisDrivenPrompts: [
                { finding: "Pain worse after meals + NSAID use", suggests: "Gastritis/PUD", action: "Ask about OTC NSAID use - patients often don't mention this!" },
                { finding: "Epigastric pain with radiation + cardiac risk factors", suggests: "MI", action: "Get ECG immediately, don't be fooled by 'burning' quality" },
                { finding: "Epigastric pain with nausea + elevated lipase", suggests: "Pancreatitis", action: "Ask about alcohol, gallstones, recent ERCP" },
                { finding: "Sudden severe pain + hypotension", suggests: "AAA rupture", action: "This is a surgical emergency - check for pulsatile mass" },
                { finding: "RUQ component + fatty meal trigger", suggests: "Biliary disease", action: "Perform Murphy's sign" }
            ],
            
            keyPhysicalExam: [
                { maneuver: "Vitals", technique: "HR, BP, RR, Temp", significance: "Tachycardia/hypotension = concerning" },
                { maneuver: "General appearance", technique: "Observe distress level, pallor, diaphoresis", significance: "Diaphoresis = consider cardiac" },
                { maneuver: "Abdominal inspection", technique: "Scars, distension, pulsatile masses", significance: "Visible pulsation = AAA" },
                { maneuver: "Epigastric palpation", technique: "Light then deep palpation", significance: "Tenderness localizes pathology" },
                { maneuver: "Murphy's sign", technique: "RUQ palpation with inspiration arrest", significance: "Positive = cholecystitis" },
                { maneuver: "Aortic palpation", technique: "Deep palpation above umbilicus", significance: "Widened, pulsatile = AAA" },
                { maneuver: "Cardiac exam", technique: "Auscultation, chest wall palpation", significance: "Reproducible tenderness = less likely cardiac (but doesn't rule out!)" }
            ],
            
            examTechniqueTips: [
                "NSAID use can damage gastric mucosa leading to gastritis or ulcers - always ask about OTC medications",
                "Epigastric pain can be referred from cardiac ischemia due to shared innervation (T5-T9 dermatomes)",
                "In diabetics, elderly, and women, MI often presents atypically - maintain high suspicion",
                "Pancreatitis classically radiates to the back and is relieved by leaning forward",
                "AAA rupture: the classic triad is pain, hypotension, and pulsatile mass (but all three present in <50%)"
            ],
            
            clinicalReasoningPause: {
                prompt: "Based on history and exam, please re-rank your top 3 likely diagnoses.",
                expectedAnswer: "Most likely = Gastritis (NSAID use, meal-related, no red flags); Must-not-miss = MI, Pancreatitis, AAA"
            },
            
            teachingPearls: [
                "🔑 ALWAYS consider cardiac causes for epigastric pain in patients >40 with risk factors",
                "🔑 NSAID use is the #1 cause of PUD in the developed world (more than H. pylori now)",
                "🔑 'Burning' quality does NOT rule out cardiac - diabetics especially have atypical presentations",
                "🔑 If patient has dark stools, this is melena until proven otherwise - indicates UGIB",
                "🔑 Murphy's sign: sensitivity ~65% for cholecystitis - negative doesn't rule it out",
                "🔑 Reassess differential as new findings emerge - the diagnosis should evolve with data"
            ],
            
            commonStudentMistakes: [
                "Accepting 'just heartburn' without considering cardiac causes",
                "Not asking about OTC medications (NSAIDs, aspirin)",
                "Forgetting to check for orthostatic vitals if concerned about bleeding",
                "Missing the pulsatile abdominal mass on exam",
                "Over-relying on chest wall tenderness to rule out ACS"
            ],
            
            debriefQuestions: [
                "What features in this case pointed away from cardiac causes?",
                "How would your approach change if the patient had diabetes?",
                "What would make you send this patient to the ED vs. manage outpatient?",
                "What is the role of empiric PPI therapy in this scenario?"
            ]
        },
        
        // ==================== WEEK 3: NAUSEA/VOMITING ====================
        'week-3': {
            title: "Week 3: Nausea and Vomiting",
            topic: "Persistent Nausea and Vomiting",
            
            objectives: [
                "Generate differential diagnosis for nausea/vomiting considering common, dangerous, and GYN causes",
                "Identify red flag symptoms suggesting surgical emergency (SBO) or metabolic emergency (DKA)",
                "Recognize the importance of pregnancy testing in ALL reproductive-age women",
                "Perform targeted physical exam for hydration status and abdominal pathology"
            ],
            
            openingPrompt: "What's your preliminary differential for persistent nausea and vomiting in a reproductive-age woman?",
            
            differentialDiagnoses: {
                common: ["Viral gastroenteritis", "Gastritis", "Medication side effect", "Early pregnancy"],
                mustNotMiss: ["Small bowel obstruction", "Increased intracranial pressure", "Diabetic ketoacidosis"],
                additional: ["Pancreatitis", "Hepatitis", "Hyperemesis gravidarum"]
            },
            
            criticalTeachingPoint: {
                title: "⚠️ CARDINAL RULE",
                content: "PREGNANCY TEST IS MANDATORY in any reproductive-age woman with nausea, vomiting, abdominal pain, or altered mental status. Many women don't recognize early pregnancy symptoms. Never rely on patient's self-assessment of pregnancy status."
            },
            
            keyHistoryPoints: [
                { item: "Onset, duration, frequency of vomiting", linkedDx: "All" },
                { item: "Content of emesis (bilious = obstruction)", linkedDx: "SBO" },
                { item: "LMP and pregnancy possibility", linkedDx: "Pregnancy/Hyperemesis" },
                { item: "Headache, vision changes", linkedDx: "Increased ICP" },
                { item: "Polyuria, polydipsia, diabetes history", linkedDx: "DKA" },
                { item: "Abdominal pain, distension, obstipation", linkedDx: "SBO" }
            ],
            
            hypothesisDrivenPrompts: [
                { finding: "Missed period + sexually active", suggests: "Pregnancy", action: "Pregnancy test BEFORE any other workup" },
                { finding: "Bilious vomiting + obstipation + distension", suggests: "SBO", action: "Surgical consultation, NPO, NG tube" },
                { finding: "Headache + visual changes + vomiting", suggests: "Increased ICP", action: "Fundoscopic exam, CT head" },
                { finding: "Known diabetic + polyuria + fruity breath", suggests: "DKA", action: "Check glucose, ketones, ABG" },
                { finding: "Morning nausea for weeks + irregular periods", suggests: "Hyperemesis", action: "This is classic 'morning sickness'" }
            ],
            
            keyPhysicalExam: [
                { maneuver: "Hydration assessment", technique: "Mucous membranes, skin turgor, cap refill", significance: "Guides fluid resuscitation" },
                { maneuver: "Vital signs", technique: "Include orthostatics", significance: "Tachycardia = dehydration or sepsis" },
                { maneuver: "Abdominal exam", technique: "Distension, bowel sounds, tenderness", significance: "High-pitched BS = obstruction" },
                { maneuver: "Fundoscopic exam", technique: "Check for papilledema", significance: "Papilledema = increased ICP" },
                { maneuver: "Breath odor", technique: "Check for fruity/acetone smell", significance: "Fruity = DKA" }
            ],
            
            teachingPearls: [
                "🔑 GET A PREGNANCY TEST - this cannot be overemphasized",
                "🔑 In malnourished/chronically vomiting patients: give THIAMINE BEFORE DEXTROSE (prevent Wernicke)",
                "🔑 Hyperemesis causes metabolic ALKALOSIS (losing H+), not acidosis",
                "🔑 Bilious (green) vomiting = obstruction distal to ampulla of Vater",
                "🔑 Morning nausea that's been present for weeks = think pregnancy, not viral",
                "🔑 Patients often don't volunteer pregnancy as a possibility - you must ask directly"
            ],
            
            commonStudentMistakes: [
                "NOT GETTING A PREGNANCY TEST - the #1 error",
                "Assuming 'irregular periods' means pregnancy is unlikely",
                "Giving dextrose before thiamine in malnourished patient",
                "Missing the distended abdomen of SBO",
                "Not checking for papilledema when headache is present"
            ]
        },
        
        // ==================== WEEK 4: RLQ PAIN ====================
        'week-4': {
            title: "Week 4: RLQ Pain",
            topic: "Right Lower Quadrant Abdominal Pain",
            
            objectives: [
                "Generate differential including surgical, GYN, and medical causes of RLQ pain",
                "Recognize classic appendicitis presentation (pain migration)",
                "Identify GYN emergencies: ectopic pregnancy, ovarian torsion",
                "Perform and interpret special RLQ exam maneuvers"
            ],
            
            openingPrompt: "What's your preliminary differential for RLQ pain in a young woman?",
            
            differentialDiagnoses: {
                common: ["Appendicitis", "Gastroenteritis", "Ovarian cyst rupture"],
                mustNotMiss: ["Ectopic pregnancy", "Ovarian torsion", "Perforated viscus"],
                additional: ["Crohn's disease", "Mesenteric adenitis"]
            },
            
            criticalTeachingPoint: {
                title: "⚠️ THE MIGRATION STORY",
                content: "Classic appendicitis: pain starts periumbilical (visceral, poorly localized) then MIGRATES to RLQ over 12-24 hours (parietal, localized). This migration pattern is highly specific for appendicitis. If pain started in RLQ from the beginning, consider other diagnoses."
            },
            
            keyHistoryPoints: [
                { item: "Pain migration (periumbilical → RLQ)", linkedDx: "Appendicitis (classic)" },
                { item: "Fever, anorexia, nausea/vomiting", linkedDx: "Appendicitis, infection" },
                { item: "LMP, pregnancy possibility", linkedDx: "Ectopic pregnancy" },
                { item: "Sudden severe unilateral pain + vomiting", linkedDx: "Ovarian torsion" },
                { item: "Vaginal bleeding/discharge, PID history", linkedDx: "Ectopic, GYN causes" },
                { item: "Diarrhea, bloody stools, chronic episodes", linkedDx: "Crohn's disease" }
            ],
            
            hypothesisDrivenPrompts: [
                { finding: "Pain migration from periumbilical to RLQ", suggests: "Appendicitis", action: "Check special signs: McBurney's, Rovsing's, Psoas, Obturator" },
                { finding: "Missed period + vaginal bleeding + unilateral pain", suggests: "Ectopic pregnancy", action: "STAT pregnancy test, prepare for possible rupture" },
                { finding: "Sudden severe pain + vomiting + adnexal mass", suggests: "Ovarian torsion", action: "Time-sensitive! Needs urgent US and possible surgery" },
                { finding: "Diarrhea + sick contacts + no peritoneal signs", suggests: "Gastroenteritis", action: "Supportive care, but follow closely" },
                { finding: "Sudden diffuse pain + rigidity", suggests: "Perforation", action: "Surgical emergency, NPO, resuscitation" }
            ],
            
            keyPhysicalExam: [
                { maneuver: "McBurney's point", technique: "Palpate 1/3 distance from ASIS to umbilicus", significance: "Point tenderness = appendicitis" },
                { maneuver: "Rovsing's sign", technique: "Pain in RLQ when palpating LLQ", significance: "Positive = peritoneal irritation from appendicitis" },
                { maneuver: "Psoas sign", technique: "Pain with right hip extension (patient lying on left)", significance: "Positive = retrocecal appendix" },
                { maneuver: "Obturator sign", technique: "Pain with internal rotation of flexed right hip", significance: "Positive = pelvic appendix" },
                { maneuver: "Rebound tenderness", technique: "Pain worse with release than pressure", significance: "Indicates peritonitis - surgical" },
                { maneuver: "Pelvic exam", technique: "CMT, adnexal tenderness/masses", significance: "CMT = PID/ectopic; Mass = torsion/ectopic" }
            ],
            
            examTechniqueTips: [
                "McBurney's point: Located 1/3 the distance from ASIS to umbilicus - localized peritoneal irritation",
                "Rovsing's sign: Pain in RLQ when pressing LLQ due to peritoneal stretch",
                "Psoas sign: Inflamed retrocecal appendix irritates iliopsoas muscle",
                "Obturator sign: Pelvic appendix contacts obturator internus during rotation",
                "Guarding = involuntary muscle contraction = peritonitis = surgery likely"
            ],
            
            teachingPearls: [
                "🔑 MIGRATION OF PAIN = appendicitis until proven otherwise",
                "🔑 MISSED PERIOD = ectopic until proven otherwise",
                "🔑 Acute severe unilateral pain + vomiting = torsion (time-sensitive!)",
                "🔑 Rigidity + peritonitis = perforation (surgical emergency)",
                "🔑 Always check vitals first: instability = surgical/GYN emergency",
                "🔑 Pregnancy test before CT scan (radiation exposure)",
                "🔑 Torsion: ovary can die in 6-8 hours - don't delay imaging"
            ],
            
            commonStudentMistakes: [
                "Not asking about pain migration pattern",
                "Forgetting pregnancy test in reproductive-age woman",
                "Missing the special RLQ exam maneuvers",
                "Not recognizing torsion as time-sensitive",
                "Assuming gastroenteritis without ruling out surgical causes"
            ]
        },
        
        // ==================== WEEK 5: RUQ PAIN ====================
        'week-5': {
            title: "Week 5: RUQ Pain - Hepatobiliary",
            topic: "Right Upper Quadrant Pain",
            
            objectives: [
                "Distinguish biliary colic from acute cholecystitis from ascending cholangitis",
                "Recognize the risk factors for biliary disease (4 F's and beyond)",
                "Perform Murphy's sign and interpret its significance",
                "Identify when biliary disease becomes life-threatening"
            ],
            
            openingPrompt: "What's your differential for RUQ pain that started after a fatty meal?",
            
            differentialDiagnoses: {
                common: ["Acute cholecystitis", "Biliary colic", "Hepatitis"],
                mustNotMiss: ["Ascending cholangitis", "Liver abscess", "AAA", "RLL pneumonia"],
                additional: ["Hepatic congestion from CHF", "Peptic ulcer disease"]
            },
            
            criticalTeachingPoint: {
                title: "⚠️ THE BILIARY SPECTRUM",
                content: "Biliary Colic → Cholecystitis → Cholangitis. Biliary colic: pain <6 hours, no fever. Cholecystitis: pain >6 hours, fever, Murphy's positive. Cholangitis: Charcot's triad (RUQ pain + fever + jaundice). Cholangitis is SEPSIS - needs emergent ERCP."
            },
            
            keyHistoryPoints: [
                { item: "Timing and duration of pain (>6 hrs = cholecystitis)", linkedDx: "Cholecystitis" },
                { item: "Relation to fatty meals", linkedDx: "Biliary disease" },
                { item: "Fever, chills, rigors", linkedDx: "Cholecystitis, Cholangitis" },
                { item: "Jaundice (yellow skin/eyes, dark urine)", linkedDx: "Cholangitis, Hepatitis" },
                { item: "Alcohol, medication, hepatitis risk factors", linkedDx: "Hepatitis" },
                { item: "Risk factors: 4 F's", linkedDx: "Cholelithiasis" }
            ],
            
            hypothesisDrivenPrompts: [
                { finding: "Post-prandial RUQ pain <6 hours, resolves", suggests: "Biliary colic", action: "Elective cholecystectomy consideration" },
                { finding: "RUQ pain >6 hours + fever + Murphy's positive", suggests: "Cholecystitis", action: "Admission, antibiotics, surgery consult" },
                { finding: "RUQ pain + fever + jaundice (Charcot's triad)", suggests: "Cholangitis", action: "EMERGENCY - needs ERCP, this is sepsis!" },
                { finding: "RUQ pain + confusion + hypotension (Reynolds' pentad)", suggests: "Severe cholangitis", action: "ICU, emergent ERCP, high mortality" },
                { finding: "RUQ pain + cough + fever", suggests: "RLL pneumonia", action: "Check lung bases on exam, CXR" }
            ],
            
            keyPhysicalExam: [
                { maneuver: "Murphy's sign", technique: "Palpate RUQ during inspiration - arrest = positive", significance: "Sensitivity ~65% for cholecystitis" },
                { maneuver: "Liver span percussion", technique: "Percuss from resonance to dullness (MCL)", significance: "Normal 6-12 cm; enlarged = hepatomegaly" },
                { maneuver: "Jaundice assessment", technique: "Scleral icterus (best in natural light)", significance: "Icterus = elevated bilirubin >2.5" },
                { maneuver: "Lung bases", technique: "Auscultate posterior lung bases", significance: "RLL pneumonia can cause RUQ pain" },
                { maneuver: "Ascites assessment", technique: "Shifting dullness, fluid wave", significance: "Suggests liver disease/CHF" }
            ],
            
            teachingPearls: [
                "🔑 4 F's: Female, Forty, Fertile, Fat - but anyone can get gallstones!",
                "🔑 Biliary colic: <6 hours. Cholecystitis: >6 hours + fever + Murphy's",
                "🔑 CHARCOT'S TRIAD (cholangitis): RUQ pain + Fever + Jaundice",
                "🔑 REYNOLDS' PENTAD (severe cholangitis): Charcot's + Confusion + Hypotension = ICU",
                "🔑 Murphy's sign sensitivity only ~65% - negative doesn't rule out",
                "🔑 RLL pneumonia can present as RUQ pain - always listen to lung bases",
                "🔑 Tokyo Guidelines 2018: Gold standard for cholangitis severity grading"
            ],
            
            commonStudentMistakes: [
                "Not distinguishing biliary colic from cholecystitis by duration",
                "Missing jaundice (check sclerae in natural light)",
                "Not listening to lung bases (missing RLL pneumonia)",
                "Underestimating severity of cholangitis (this is sepsis!)",
                "Over-relying on Murphy's sign (only 65% sensitive)"
            ]
        },
        
        // ==================== WEEK 6: GI BLEEDING ====================
        'week-6': {
            title: "Week 6: GI Bleeding",
            topic: "Upper and Lower GI Bleeding",
            
            objectives: [
                "Distinguish upper from lower GI bleed by clinical features",
                "Recognize hemodynamic instability and need for resuscitation",
                "Understand the differential for UGIB vs LGIB",
                "Perform focused exam for GI bleeding including DRE"
            ],
            
            openingPrompt: "What's your approach to a patient with blood in their stool?",
            
            differentialDiagnoses: {
                lgib: ["Diverticulosis", "Hemorrhoids", "Colorectal cancer", "Angiodysplasia", "Inflammatory bowel disease", "Ischemic colitis"],
                ugib: ["Peptic ulcer disease", "Esophageal varices", "Mallory-Weiss tear", "Gastritis", "Esophagitis"],
                mustNotMiss: ["Massive hemorrhage/shock", "Aortoenteric fistula", "Malignancy"]
            },
            
            criticalTeachingPoint: {
                title: "⚠️ UGIB vs LGIB",
                content: "UGIB: Hematemesis (vomiting blood), coffee-ground emesis, MELENA (black tarry stool). LGIB: Hematochezia (bright red blood per rectum). BUT: Massive UGIB can present with BRBPR (blood moves fast). If hemodynamically unstable with BRBPR, consider UGIB first!"
            },
            
            keyHistoryPoints: [
                { item: "Color of blood (bright red vs dark/tarry)", linkedDx: "LGIB vs UGIB" },
                { item: "Hematemesis or coffee-ground emesis", linkedDx: "UGIB" },
                { item: "NSAID, aspirin, anticoagulant use", linkedDx: "PUD, bleeding risk" },
                { item: "Alcohol use, liver disease history", linkedDx: "Varices" },
                { item: "Weight loss, change in bowel habits", linkedDx: "Malignancy" },
                { item: "Prior episodes, hemorrhoid history", linkedDx: "Hemorrhoids, diverticulosis" }
            ],
            
            keyPhysicalExam: [
                { maneuver: "Vital signs + orthostatics", technique: "Supine then standing BP/HR", significance: "Drop >20 systolic or rise >20 HR = significant volume loss" },
                { maneuver: "Conjunctival pallor", technique: "Evert lower lid, assess color", significance: "Pallor = anemia" },
                { maneuver: "Liver stigmata", technique: "Spider angiomata, palmar erythema, caput medusae, gynecomastia", significance: "Suggests cirrhosis → variceal bleed" },
                { maneuver: "Abdominal exam", technique: "Tenderness, masses, hepatosplenomegaly", significance: "Mass = malignancy; splenomegaly = portal HTN" },
                { maneuver: "Digital rectal exam", technique: "Assess stool color, masses, hemorrhoids", significance: "Melena = UGIB; mass = colorectal cancer" }
            ],
            
            teachingPearls: [
                "🔑 MELENA = black, tarry, sticky, foul-smelling stool = UGIB (need only 50mL blood)",
                "🔑 HEMATOCHEZIA with hemodynamic instability = consider UGIB first!",
                "🔑 Age >50 with new GI bleed = cancer until proven otherwise → needs colonoscopy",
                "🔑 Diverticulosis = #1 cause of LGIB in elderly (painless, massive)",
                "🔑 Hemorrhoids = most common cause of BRBPR (usually small amounts, with BM)",
                "🔑 Aortoenteric fistula: history of aortic graft + GI bleed = surgical emergency",
                "🔑 Don't forget: iron supplements, bismuth, and some foods can cause dark stools"
            ],
            
            commonStudentMistakes: [
                "Assuming BRBPR is always lower GI (massive UGIB can present this way)",
                "Not checking orthostatic vitals",
                "Missing liver stigmata (suggests variceal bleed)",
                "Forgetting to ask about NSAIDs/anticoagulants",
                "Not recommending colonoscopy for new GI bleed in patient >50"
            ]
        },
        
        // ==================== WEEK 7: DIABETES ====================
        'week-7': {
            title: "Week 7: Diabetes Management",
            topic: "Diabetic Follow-Up and Complications",
            
            objectives: [
                "Perform comprehensive diabetic foot exam",
                "Screen for microvascular complications (neuropathy, retinopathy, nephropathy)",
                "Understand A1c goals and monitoring frequency",
                "Counsel patients on diabetes self-management"
            ],
            
            openingPrompt: "What are the key components of a routine diabetes follow-up visit?",
            
            keyExamComponents: [
                { component: "Foot exam", frequency: "Every visit", elements: ["Inspection for ulcers, calluses", "Monofilament (5.07/10g)", "Vibration (128Hz tuning fork)", "DP/PT pulses", "Ankle reflexes"] },
                { component: "Eye exam", frequency: "Annual dilated exam", elements: ["Fundoscopy for retinopathy", "Visual acuity"] },
                { component: "Kidney screening", frequency: "Annual", elements: ["Spot urine albumin/creatinine ratio", "eGFR/creatinine"] },
                { component: "Cardiovascular", frequency: "Every visit", elements: ["BP measurement", "Lipid panel annually", "Review CV risk factors"] }
            ],
            
            footExamTechnique: [
                { test: "Visual inspection", technique: "Check between toes, plantar surfaces for ulcers, calluses, fungus, deformities", significance: "Ulcers are major cause of amputation" },
                { test: "10g monofilament", technique: "Apply perpendicular to skin until filament bends, 4 sites per foot (1st, 3rd, 5th metatarsal heads, plantar hallux)", significance: "Loss of sensation = high ulcer risk" },
                { test: "Vibration sense", technique: "128Hz tuning fork on bony prominences (great toe)", significance: "Decreased = large fiber neuropathy" },
                { test: "Ankle reflexes", technique: "Tap Achilles tendon with knee flexed", significance: "Absent = peripheral neuropathy" },
                { test: "Pulses", technique: "Palpate DP and PT bilaterally", significance: "Absent = peripheral arterial disease" }
            ],
            
            teachingPearls: [
                "🔑 Monofilament test: patient should feel at least 4/8 sites to be considered protective",
                "🔑 Diabetic neuropathy: 'stocking-glove' distribution, often burning/tingling",
                "🔑 A1c goal for most adults: <7%, but individualize (higher for elderly, comorbidities)",
                "🔑 Refer to ophthalmology annually even if no symptoms - retinopathy is asymptomatic early",
                "🔑 ACE inhibitor/ARB: first-line for diabetic nephropathy even without HTN",
                "🔑 SGLT2 inhibitors: CV and renal protection beyond glucose lowering"
            ],
            
            commonStudentMistakes: [
                "Skipping the foot exam (most commonly omitted)",
                "Not checking between the toes",
                "Using wrong monofilament technique (must bend the filament)",
                "Not asking about erectile dysfunction (neuropathy marker)",
                "Forgetting to assess for depression (common comorbidity)"
            ]
        },
        
        // Add more weeks as needed...
        'week-9': {
            title: "Week 9: Reproductive Endocrinology",
            topic: "Amenorrhea and Galactorrhea",
            
            objectives: [
                "Differentiate primary from secondary amenorrhea",
                "Recognize signs/symptoms of pituitary tumor",
                "Perform visual field confrontation testing",
                "Understand the hyperprolactinemia workup"
            ],
            
            openingPrompt: "What's your approach to a young woman with amenorrhea and nipple discharge?",
            
            differentialDiagnoses: {
                common: ["Pregnancy", "PCOS", "Hypothalamic amenorrhea", "Hyperprolactinemia"],
                mustNotMiss: ["Pituitary tumor (prolactinoma)", "Other pituitary tumors", "Pregnancy"],
                additional: ["Hypothyroidism", "Primary ovarian insufficiency"]
            },
            
            criticalTeachingPoint: {
                title: "⚠️ PITUITARY TUMOR RED FLAGS",
                content: "Galactorrhea + Amenorrhea + Headaches + Visual field defects = PITUITARY TUMOR until proven otherwise. Prolactinoma compresses optic chiasm → bitemporal hemianopsia. Get MRI pituitary!"
            },
            
            keyPhysicalExam: [
                { maneuver: "Visual field testing", technique: "Confrontation - wiggle fingers in temporal fields", significance: "Bitemporal hemianopsia = chiasm compression" },
                { maneuver: "Breast exam", technique: "Attempt to express galactorrhea", significance: "Milky discharge confirms galactorrhea" },
                { maneuver: "Thyroid exam", technique: "Palpate for enlargement, nodules", significance: "Hypothyroidism can cause amenorrhea" },
                { maneuver: "Pelvic exam", technique: "Assess for normal anatomy, masses", significance: "Rule out anatomic causes" }
            ],
            
            teachingPearls: [
                "🔑 First step in ANY reproductive-age woman with amenorrhea: PREGNANCY TEST",
                "🔑 Galactorrhea + amenorrhea = prolactinoma until proven otherwise",
                "🔑 Hypothyroidism causes elevated prolactin (TRH stimulates prolactin release)",
                "🔑 Medications that raise prolactin: antipsychotics, metoclopramide, OCPs",
                "🔑 Prolactinomas usually respond to dopamine agonists (cabergoline) - surgery rarely needed",
                "🔑 Bitemporal hemianopsia: 'can't see cars sneaking up on you in peripheral vision'"
            ]
        },
        
        'week-12': {
            title: "Week 12: Chest Pain",
            topic: "Chest Pain in a Diabetic Patient",
            
            objectives: [
                "Recognize atypical MI presentations in diabetics, women, and elderly",
                "Apply HEART score for risk stratification",
                "Identify the 5 deadly causes of chest pain",
                "Perform and interpret cardiac exam"
            ],
            
            openingPrompt: "What are the 5 diagnoses you must not miss in chest pain?",
            
            differentialDiagnoses: {
                common: ["Stable angina", "GERD", "Musculoskeletal"],
                mustNotMiss: ["Acute coronary syndrome", "Aortic dissection", "Pulmonary embolism", "Tension pneumothorax", "Esophageal rupture"],
                additional: ["Pericarditis", "Costochondritis"]
            },
            
            criticalTeachingPoint: {
                title: "⚠️ ATYPICAL MI PRESENTATIONS",
                content: "Diabetics, women, and elderly often present WITHOUT classic chest pain. May have: dyspnea, fatigue, nausea, 'indigestion,' diaphoresis, shoulder/jaw pain. High index of suspicion! Get ECG early."
            },
            
            teachingPearls: [
                "🔑 5 DEADLY CAUSES: ACS, Aortic dissection, PE, Tension PTX, Esophageal rupture",
                "🔑 'Burning' or 'indigestion' quality does NOT rule out ACS",
                "🔑 Chest wall tenderness does NOT rule out ACS (can coexist)",
                "🔑 HEART score: History, ECG, Age, Risk factors, Troponin",
                "🔑 Dissection: tearing pain radiating to back, pulse/BP differential",
                "🔑 PE: sudden dyspnea, pleuritic pain, risk factors (immobility, malignancy, OCP)"
            ]
        },
        
        'week-13': {
            title: "Week 13: Syncope",
            topic: "Syncope Evaluation",
            
            objectives: [
                "Distinguish cardiac from vasovagal syncope",
                "Identify high-risk features requiring admission",
                "Recognize aortic stenosis murmur and its significance",
                "Perform orthostatic vital signs correctly"
            ],
            
            openingPrompt: "What features distinguish dangerous cardiac syncope from benign vasovagal syncope?",
            
            differentialDiagnoses: {
                common: ["Vasovagal syncope", "Orthostatic hypotension"],
                mustNotMiss: ["Arrhythmia", "Aortic stenosis", "PE", "MI", "Subarachnoid hemorrhage"],
                additional: ["Hypertrophic cardiomyopathy", "Carotid sinus hypersensitivity"]
            },
            
            criticalTeachingPoint: {
                title: "⚠️ HIGH-RISK (CARDIAC) SYNCOPE",
                content: "RED FLAGS: Exertional syncope, syncope without prodrome, syncope while supine, family history of sudden cardiac death, known heart disease, abnormal ECG. These patients need admission and cardiac workup."
            },
            
            keyPhysicalExam: [
                { maneuver: "Orthostatic vitals", technique: "Supine 5 min, then stand - check at 1 and 3 min", significance: "Drop >20 systolic or rise >20 HR = orthostatic hypotension" },
                { maneuver: "Cardiac auscultation", technique: "All 4 areas + carotids", significance: "Crescendo-decrescendo at RUSB radiating to carotids = AS" },
                { maneuver: "Carotid pulses", technique: "Palpate amplitude and character", significance: "Parvus et tardus (weak, delayed) = severe AS" },
                { maneuver: "Dynamic auscultation", technique: "Squat to stand, Valsalva", significance: "AS: louder with squatting; HCM: louder with Valsalva/standing" }
            ],
            
            teachingPearls: [
                "🔑 EXERTIONAL SYNCOPE = structural heart disease (AS, HCM) until proven otherwise",
                "🔑 NO PRODROME = arrhythmia (sudden loss of cardiac output)",
                "🔑 Classic vasovagal: prodrome (warmth, nausea, tunnel vision), trigger (standing, heat, pain)",
                "🔑 AS murmur: crescendo-decrescendo systolic at RUSB, radiates to carotids",
                "🔑 Parvus et tardus: weak (parvus) and delayed (tardus) carotid upstroke in severe AS",
                "🔑 Family history of sudden death <50yo = high risk, think HCM, long QT, Brugada"
            ]
        }
    };
    
    // ============================================================
    // LARGE GROUP DISCUSSION GUIDES (Course Director View)
    // ============================================================
    
    const LARGE_GROUP_GUIDES = {
        'week-2': {
            title: "Large Group: Epigastric Pain",
            duration: "1 hour",
            
            discussionFlow: [
                { time: "0-10 min", activity: "Case presentation", prompt: "Read door note, generate initial differential" },
                { time: "10-25 min", activity: "History discussion", prompt: "What questions would you ask? What's the reasoning behind each?" },
                { time: "25-40 min", activity: "Physical exam reasoning", prompt: "What exam findings would you look for? Why? What do they mean?" },
                { time: "40-50 min", activity: "Differential refinement", prompt: "Based on findings, how does your differential change?" },
                { time: "50-60 min", activity: "Synthesis and pearls", prompt: "Key teaching points and summary" }
            ],
            
            pollQuestions: [
                { question: "If this patient has diabetes, does that change your suspicion for ACS?", options: ["Higher suspicion", "Lower suspicion", "No change"], correct: 0, explanation: "Diabetics have atypical presentations - maintain HIGH suspicion for ACS" },
                { question: "The patient has reproducible chest wall tenderness. Does this rule out ACS?", options: ["Yes, rules it out", "No, can coexist", "Only if severe"], correct: 1, explanation: "Chest wall tenderness and ACS can coexist - don't be falsely reassured" }
            ],
            
            interactiveElements: [
                { type: "think-pair-share", prompt: "Turn to your neighbor - what's ONE question you would never skip in epigastric pain?" },
                { type: "case-pivot", prompt: "What if this patient was 32 years old and female? How does differential change?" }
            ]
        },
        
        'week-4': {
            title: "Large Group: RLQ Pain",
            duration: "1 hour",
            
            discussionFlow: [
                { time: "0-10 min", activity: "Differential generation", prompt: "RLQ pain in a young woman - what's on your list?" },
                { time: "10-20 min", activity: "Gender comparison", prompt: "How would your differential differ for a young man?" },
                { time: "20-35 min", activity: "Special exam maneuvers", prompt: "Let's go through each RLQ maneuver - what's the anatomy and pathophysiology?" },
                { time: "35-50 min", activity: "Case variations", prompt: "What if vitals showed tachycardia and hypotension? What if positive pregnancy test?" },
                { time: "50-60 min", activity: "Decision making", prompt: "When do you go to surgery vs. observe vs. image?" }
            ],
            
            anatomyCorrelation: [
                { structure: "McBurney's point", location: "1/3 from ASIS to umbilicus", rationale: "Appendix base location" },
                { structure: "Psoas muscle", location: "Retroperitoneal, along spine", rationale: "Retrocecal appendix irritates it" },
                { structure: "Obturator internus", location: "Lateral pelvic wall", rationale: "Pelvic appendix contacts it with rotation" }
            ]
        }
    };
    
    // ============================================================
    // RENDER FUNCTIONS
    // ============================================================
    
    function renderTeachingModeToggle() {
        if (!teachingModeUnlocked) {
            return '<button onclick="unlockTeachingMode()" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm flex items-center gap-2">' +
                '<span>🔐</span> Faculty Access</button>';
        }
        
        var roleLabel = currentTeachingRole === TEACHING_ROLES.COURSE_DIRECTOR ? 'Course Director' :
                       currentTeachingRole === TEACHING_ROLES.FACILITATOR ? 'Facilitator' : 'Student';
        var roleIcon = currentTeachingRole === TEACHING_ROLES.COURSE_DIRECTOR ? '👩‍🏫' :
                      currentTeachingRole === TEACHING_ROLES.FACILITATOR ? '👨‍⚕️' : '🎓';
        
        return '<div class="flex items-center gap-2">' +
            '<span class="text-lg">' + roleIcon + '</span>' +
            '<span class="text-sm font-medium text-green-600">' + roleLabel + '</span>' +
            '<button onclick="switchTeachingRole()" class="text-xs px-2 py-1 bg-gray-200 rounded">Switch</button>' +
            '<button onclick="lockTeachingMode()" class="text-xs px-2 py-1 bg-red-100 text-red-600 rounded">Lock</button>' +
        '</div>';
    }
    
    function renderFacilitatorGuidePanel(weekKey) {
        var guide = FACILITATOR_GUIDES[weekKey];
        if (!guide) return '<div class="p-4 text-gray-500">No facilitator guide available for this week.</div>';
        
        return '<div class="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400 rounded-xl p-6">' +
            '<div class="flex items-center gap-2 mb-4">' +
                '<span class="text-2xl">📋</span>' +
                '<h3 class="text-xl font-bold text-yellow-800 dark:text-yellow-200">Facilitator Guide</h3>' +
            '</div>' +
            
            // Opening Prompt
            '<div class="bg-white dark:bg-zinc-800 rounded-lg p-4 mb-4">' +
                '<h4 class="font-semibold text-green-700 mb-2">🎯 Opening Prompt</h4>' +
                '<p class="text-lg italic">"' + guide.openingPrompt + '"</p>' +
            '</div>' +
            
            // Key Differential
            '<div class="bg-white dark:bg-zinc-800 rounded-lg p-4 mb-4">' +
                '<h4 class="font-semibold text-blue-700 mb-2">📊 Key Differential</h4>' +
                '<div class="grid md:grid-cols-3 gap-2 text-sm">' +
                    '<div class="bg-green-100 p-2 rounded"><strong>Common:</strong><br>' + guide.differentialDiagnoses.common.join(', ') + '</div>' +
                    '<div class="bg-red-100 p-2 rounded"><strong>Must Not Miss:</strong><br>' + guide.differentialDiagnoses.mustNotMiss.join(', ') + '</div>' +
                    '<div class="bg-gray-100 p-2 rounded"><strong>Additional:</strong><br>' + (guide.differentialDiagnoses.additional || []).join(', ') + '</div>' +
                '</div>' +
            '</div>' +
            
            // Critical Teaching Point
            (guide.criticalTeachingPoint ? 
                '<div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 mb-4 border-l-4 border-red-500">' +
                    '<h4 class="font-bold text-red-700">' + guide.criticalTeachingPoint.title + '</h4>' +
                    '<p class="text-red-800">' + guide.criticalTeachingPoint.content + '</p>' +
                '</div>' : '') +
            
            // Hypothesis-Driven Prompts
            '<div class="bg-white dark:bg-zinc-800 rounded-lg p-4 mb-4">' +
                '<h4 class="font-semibold text-purple-700 mb-2">🔍 Hypothesis-Driven Prompts</h4>' +
                '<div class="space-y-2">' +
                    guide.hypothesisDrivenPrompts.map(function(p) {
                        return '<div class="text-sm border-l-2 border-purple-400 pl-3">' +
                            '<strong>If:</strong> ' + p.finding + '<br>' +
                            '<strong>Think:</strong> ' + p.suggests + '<br>' +
                            '<em class="text-purple-600">Action: ' + p.action + '</em></div>';
                    }).join('') +
                '</div>' +
            '</div>' +
            
            // Teaching Pearls
            '<div class="bg-white dark:bg-zinc-800 rounded-lg p-4 mb-4">' +
                '<h4 class="font-semibold text-amber-700 mb-2">💡 Teaching Pearls</h4>' +
                '<ul class="space-y-1">' +
                    guide.teachingPearls.map(function(pearl) {
                        return '<li class="text-sm">' + pearl + '</li>';
                    }).join('') +
                '</ul>' +
            '</div>' +
            
            // Common Student Mistakes
            '<div class="bg-white dark:bg-zinc-800 rounded-lg p-4">' +
                '<h4 class="font-semibold text-red-700 mb-2">⚠️ Common Student Mistakes</h4>' +
                '<ul class="list-disc list-inside text-sm text-red-800">' +
                    guide.commonStudentMistakes.map(function(mistake) {
                        return '<li>' + mistake + '</li>';
                    }).join('') +
                '</ul>' +
            '</div>' +
        '</div>';
    }
    
    function renderLargeGroupGuidePanel(weekKey) {
        var guide = LARGE_GROUP_GUIDES[weekKey];
        if (!guide) return '<div class="p-4 text-gray-500">No large group guide available for this week.</div>';
        
        return '<div class="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 rounded-xl p-6">' +
            '<div class="flex items-center gap-2 mb-4">' +
                '<span class="text-2xl">🎓</span>' +
                '<h3 class="text-xl font-bold text-blue-800 dark:text-blue-200">Large Group Discussion Guide</h3>' +
                '<span class="text-sm text-blue-600">(' + guide.duration + ')</span>' +
            '</div>' +
            
            // Discussion Flow
            '<div class="bg-white dark:bg-zinc-800 rounded-lg p-4 mb-4">' +
                '<h4 class="font-semibold text-blue-700 mb-2">⏱️ Discussion Flow</h4>' +
                '<div class="space-y-2">' +
                    guide.discussionFlow.map(function(item) {
                        return '<div class="flex gap-3 text-sm border-l-2 border-blue-400 pl-3">' +
                            '<span class="font-mono text-blue-600 whitespace-nowrap">' + item.time + '</span>' +
                            '<div><strong>' + item.activity + '</strong><br><em>"' + item.prompt + '"</em></div></div>';
                    }).join('') +
                '</div>' +
            '</div>' +
            
            // Poll Questions
            (guide.pollQuestions ?
                '<div class="bg-white dark:bg-zinc-800 rounded-lg p-4 mb-4">' +
                    '<h4 class="font-semibold text-green-700 mb-2">📊 Poll Questions</h4>' +
                    guide.pollQuestions.map(function(poll) {
                        return '<div class="border-l-2 border-green-400 pl-3 mb-3">' +
                            '<p class="font-medium">' + poll.question + '</p>' +
                            '<p class="text-sm text-green-600">Correct: ' + poll.options[poll.correct] + '</p>' +
                            '<p class="text-xs text-gray-600 italic">' + poll.explanation + '</p></div>';
                    }).join('') +
                '</div>' : '') +
        '</div>';
    }
    
    // ============================================================
    // TEACHING MODE FUNCTIONS
    // ============================================================
    
    function unlockTeachingMode() {
        var passcode = prompt('Enter faculty passcode:');
        if (!passcode) return;
        
        if (passcode === TEACHING_PASSCODES.courseDirector) {
            currentTeachingRole = TEACHING_ROLES.COURSE_DIRECTOR;
            teachingModeUnlocked = true;
            if (typeof showToast === 'function') showToast('Course Director mode activated!', 'success');
        } else if (passcode === TEACHING_PASSCODES.facilitator) {
            currentTeachingRole = TEACHING_ROLES.FACILITATOR;
            teachingModeUnlocked = true;
            if (typeof showToast === 'function') showToast('Facilitator mode activated!', 'success');
        } else {
            if (typeof showToast === 'function') showToast('Invalid passcode', 'error');
            return;
        }
        
        if (typeof render === 'function') render();
    }
    
    function switchTeachingRole() {
        if (currentTeachingRole === TEACHING_ROLES.COURSE_DIRECTOR) {
            currentTeachingRole = TEACHING_ROLES.FACILITATOR;
        } else if (currentTeachingRole === TEACHING_ROLES.FACILITATOR) {
            currentTeachingRole = TEACHING_ROLES.COURSE_DIRECTOR;
        }
        if (typeof render === 'function') render();
    }
    
    function lockTeachingMode() {
        teachingModeUnlocked = false;
        currentTeachingRole = TEACHING_ROLES.STUDENT;
        if (typeof showToast === 'function') showToast('Teaching mode locked', 'info');
        if (typeof render === 'function') render();
    }
    
    function isTeachingModeActive() {
        return teachingModeUnlocked && currentTeachingRole !== TEACHING_ROLES.STUDENT;
    }
    
    function isCourseDirector() {
        return currentTeachingRole === TEACHING_ROLES.COURSE_DIRECTOR;
    }
    
    // ============================================================
    // EXPOSE TO GLOBAL SCOPE
    // ============================================================
    
    window.FACILITATOR_GUIDES = FACILITATOR_GUIDES;
    window.LARGE_GROUP_GUIDES = LARGE_GROUP_GUIDES;
    window.TEACHING_PASSCODES = TEACHING_PASSCODES;
    window.renderTeachingModeToggle = renderTeachingModeToggle;
    window.renderFacilitatorGuidePanel = renderFacilitatorGuidePanel;
    window.renderLargeGroupGuidePanel = renderLargeGroupGuidePanel;
    window.unlockTeachingMode = unlockTeachingMode;
    window.switchTeachingRole = switchTeachingRole;
    window.lockTeachingMode = lockTeachingMode;
    window.isTeachingModeActive = isTeachingModeActive;
    window.isCourseDirector = isCourseDirector;
    
    console.log('✓ POM 2 Teaching Module loaded');
})();
