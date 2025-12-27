/**
 * ReasonDx Weekly Case System
 * Integrated curriculum with Pre-Work, Just-in-Time, and SP Cases
 * 
 * Features:
 * - Three connected cases per week (same chief complaint, different diagnoses)
 * - Pre-class worksheet questions integrated into cases
 * - Facilitator guide (in-app and printable) with enhanced features
 * - Research data tracking across all three case types
 * - Case locking system - cases released by Course Director
 */

(function() {
    'use strict';

    // ================================================
    // CASE RELEASE / LOCKING SYSTEM
    // ================================================
    
    // Default: all cases locked until released
    const DIRECTOR_PIN = '2025'; // Change this to your preferred PIN
    
    window.caseReleaseState = JSON.parse(localStorage.getItem('reasondx_case_releases') || '{}');
    
    // Check if a specific case is released
    window.isCaseReleased = function(weekKey, caseType) {
        const key = `${weekKey}_${caseType}`;
        return caseReleaseState[key] === true;
    };
    
    // Release a case (Course Director only)
    window.releaseCase = function(weekKey, caseType) {
        const key = `${weekKey}_${caseType}`;
        caseReleaseState[key] = true;
        caseReleaseState[key + '_releasedAt'] = new Date().toISOString();
        localStorage.setItem('reasondx_case_releases', JSON.stringify(caseReleaseState));
    };
    
    // Lock a case (Course Director only)
    window.lockCase = function(weekKey, caseType) {
        const key = `${weekKey}_${caseType}`;
        caseReleaseState[key] = false;
        delete caseReleaseState[key + '_releasedAt'];
        localStorage.setItem('reasondx_case_releases', JSON.stringify(caseReleaseState));
    };
    
    // Get release status for display
    window.getCaseReleaseStatus = function(weekKey, caseType) {
        const key = `${weekKey}_${caseType}`;
        if (caseReleaseState[key]) {
            const releasedAt = caseReleaseState[key + '_releasedAt'];
            return {
                released: true,
                releasedAt: releasedAt ? new Date(releasedAt) : null
            };
        }
        return { released: false };
    };

    // ================================================
    // COURSE DIRECTOR CASE MANAGEMENT
    // ================================================
    
    window.renderCaseReleaseManager = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const weeks = Object.keys(weeklyCases);
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                <div class="max-w-4xl mx-auto px-6 py-12">
                    
                    <button onclick="goToScreen('weekly-case-menu')" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 flex items-center gap-2">
                        ← Back
                    </button>
                    
                    <div class="flex items-center justify-between mb-8">
                        <div>
                            <h1 class="text-2xl font-bold">🔐 Case Release Manager</h1>
                            <p class="text-zinc-500">Control which cases students can access</p>
                        </div>
                    </div>
                    
                    <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8">
                        <p class="text-amber-800 dark:text-amber-200 text-sm">
                            <strong>🔒 Cases are locked by default.</strong> Release cases when you're ready for students to access them.
                            Pre-Work, Just-in-Time, and SP cases can be released independently.
                        </p>
                    </div>
                    
                    ${weeks.map(weekKey => {
                        const week = weeklyCases[weekKey];
                        return `
                            <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 mb-6">
                                <h2 class="text-xl font-bold mb-4">Week ${week.weekNumber}: ${week.topic}</h2>
                                
                                <div class="grid md:grid-cols-3 gap-4">
                                    ${renderCaseReleaseCard(weekKey, 'prework', 'Pre-Work Case', week.preWorkCase.diagnosis, 'blue')}
                                    ${renderCaseReleaseCard(weekKey, 'jit', 'Just-in-Time Case', week.justInTimeCase.diagnosis, 'amber')}
                                    ${renderCaseReleaseCard(weekKey, 'sp', 'SP Case', week.spCase.diagnosis, 'green')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                    
                    <div class="mt-8 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                        <h3 class="font-semibold mb-2">Quick Actions</h3>
                        <div class="flex gap-3">
                            <button onclick="window.releaseAllPrework()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                                Release All Pre-Work
                            </button>
                            <button onclick="window.lockAllCases()" class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                                Lock All Cases
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `;
    };
    
    function renderCaseReleaseCard(weekKey, caseType, title, diagnosis, color) {
        const status = getCaseReleaseStatus(weekKey, caseType);
        const released = status.released;
        
        return `
            <div class="p-4 border-2 rounded-xl ${released 
                ? `border-${color}-400 bg-${color}-50 dark:bg-${color}-900/20` 
                : 'border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900'}">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-2xl">${released ? '🔓' : '🔒'}</span>
                    <span class="text-xs px-2 py-1 rounded-full ${released 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                        : 'bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'}">
                        ${released ? 'RELEASED' : 'LOCKED'}
                    </span>
                </div>
                <h3 class="font-semibold">${title}</h3>
                <p class="text-sm text-zinc-500 mb-3">Dx: ${diagnosis}</p>
                ${status.releasedAt ? `<p class="text-xs text-zinc-400 mb-3">Released: ${new Date(status.releasedAt).toLocaleString()}</p>` : ''}
                <button onclick="window.toggleCaseRelease('${weekKey}', '${caseType}')" 
                    class="w-full py-2 rounded-lg text-sm font-medium ${released 
                        ? 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/50 dark:text-red-300' 
                        : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300'}">
                    ${released ? '🔒 Lock Case' : '🔓 Release Case'}
                </button>
            </div>
        `;
    }
    
    window.toggleCaseRelease = function(weekKey, caseType) {
        const pin = prompt('Enter Course Director PIN:');
        if (pin !== DIRECTOR_PIN) {
            alert('Invalid PIN');
            return;
        }
        
        if (isCaseReleased(weekKey, caseType)) {
            lockCase(weekKey, caseType);
        } else {
            releaseCase(weekKey, caseType);
        }
        render();
    };
    
    window.releaseAllPrework = function() {
        const pin = prompt('Enter Course Director PIN to release all Pre-Work cases:');
        if (pin !== DIRECTOR_PIN) {
            alert('Invalid PIN');
            return;
        }
        
        Object.keys(weeklyCases).forEach(weekKey => {
            releaseCase(weekKey, 'prework');
        });
        alert('All Pre-Work cases released!');
        render();
    };
    
    window.lockAllCases = function() {
        const pin = prompt('Enter Course Director PIN to lock ALL cases:');
        if (pin !== DIRECTOR_PIN) {
            alert('Invalid PIN');
            return;
        }
        
        if (!confirm('This will lock ALL cases. Students will not be able to access any cases. Continue?')) {
            return;
        }
        
        caseReleaseState = {};
        localStorage.setItem('reasondx_case_releases', JSON.stringify(caseReleaseState));
        alert('All cases locked!');
        render();
    };

    // ================================================
    // WEEKLY CASE DATA STRUCTURE
    // ================================================
    
    window.weeklyCases = {
        // Week 2: Epigastric Pain
        week2: {
            weekNumber: 2,
            topic: "Epigastric Pain",
            chiefComplaint: "I have pain in the upper middle part of my belly.",
            
            // Learning Objectives
            objectives: [
                "Generate, prioritize and justify a differential diagnosis based on epigastric pain",
                "Demonstrate a hypothesis-driven approach to history taking",
                "Demonstrate a hypothesis-driven approach to physical examination",
                "Perform a physical exam respecting patient autonomy and privacy",
                "Demonstrate patient-centered verbal and nonverbal communication",
                "Determine a final differential supported by history and exam findings",
                "Demonstrate concise oral presentation and documentation",
                "Execute effective closure using a patient-centered approach"
            ],
            
            // Shared differential for all three cases
            sharedDifferential: {
                common: [
                    { name: "Gastritis", mechanism: "Inflammation of gastric lining stimulates visceral afferents causing pain" },
                    { name: "GERD", mechanism: "Acid reflux irritates esophageal mucosa, perceived as epigastric discomfort" },
                    { name: "Peptic Ulcer Disease", mechanism: "Ulceration exposes nerve endings and causes localized pain" }
                ],
                cannotMiss: [
                    { name: "Myocardial Infarction", mechanism: "Ischemia activates visceral afferents overlapping with epigastric region" },
                    { name: "Pancreatitis", mechanism: "Inflammation radiates pain to epigastrium and back via retroperitoneal nerves" },
                    { name: "Aortic Aneurysm Rupture", mechanism: "Expansion or rupture causes severe referred pain to epigastrium" }
                ],
                additional: [
                    { name: "Gallbladder Disease", mechanism: "Inflammation or obstruction irritates diaphragm causing referred epigastric pain" }
                ]
            },
            
            // Worksheet questions integrated throughout
            worksheetQuestions: {
                differentialCategorization: {
                    prompt: "For each diagnosis, label as 'Common', 'Cannot Miss', or 'Both'. Then identify the anatomy affected and explain how it produces epigastric pain.",
                    integration: "initial-ddx"
                },
                examFindingsToMechanism: {
                    prompt: "For each exam finding, indicate which diagnosis it suggests and explain the mechanism.",
                    findings: [
                        { finding: "Epigastric tenderness", diagnoses: ["Gastritis", "Peptic Ulcer Disease"], mechanism: "Inflamed or ulcerated mucosa causes localized tenderness" },
                        { finding: "Murphy's sign", diagnoses: ["Gallbladder Disease"], mechanism: "Pain with inspiration during RUQ palpation due to diaphragmatic irritation" },
                        { finding: "Rebound tenderness", diagnoses: ["Pancreatitis", "Perforated Ulcer"], mechanism: "Peritoneal irritation from inflammation or perforation" },
                        { finding: "Hypotension/tachycardia", diagnoses: ["Aortic Aneurysm Rupture", "MI"], mechanism: "Hemodynamic instability from bleeding or cardiac dysfunction" },
                        { finding: "Chest wall non-tenderness", diagnoses: ["MI"], mechanism: "Pain not reproducible by palpation suggests visceral origin" }
                    ],
                    integration: "plan-exam"
                },
                patientExplanation: {
                    prompt: "Write a 100-word max patient-friendly explanation of what's happening, why they have symptoms, and what to expect next.",
                    integration: "patient-counseling"
                }
            },
            
            // ============================================
            // CASE 1: PRE-WORK (Self-paced, Monday night)
            // Diagnosis: GERD
            // ============================================
            preWorkCase: {
                id: "week2-prework-gerd",
                title: "Epigastric Pain - Pre-Work Case",
                caseType: "prework",
                diagnosis: "GERD",
                
                patient: {
                    name: "Maria Santos",
                    age: 45,
                    gender: "female",
                    demographics: "45-year-old female presenting to primary care"
                },
                
                doorNote: {
                    location: "Outpatient Primary Care Clinic",
                    chiefComplaint: "I have pain in the upper middle part of my belly.",
                    vitals: {
                        BP: "124/78 mmHg",
                        HR: 76,
                        RR: 16,
                        Temp: "98.4°F",
                        SpO2: "99% RA"
                    }
                },
                
                hpiNarrative: `Maria Santos is a 45-year-old woman presenting with epigastric pain that has been occurring intermittently for the past 3 weeks. The pain is described as a burning sensation in the upper abdomen, rated 4/10, typically occurring after meals and when lying down at night. She reports associated heartburn and occasional regurgitation of sour-tasting fluid. The symptoms are worse after eating spicy or fatty foods. She has tried over-the-counter antacids with partial relief. She denies chest pain with exertion, shortness of breath, nausea, vomiting, or changes in bowel habits. No weight loss or blood in stool. She is concerned because her mother had stomach problems.`,
                
                hpiStructured: {
                    onset: "3 weeks, intermittent",
                    location: "Epigastric/upper abdomen",
                    duration: "Episodes last 30-60 minutes",
                    character: "Burning sensation",
                    aggravating: "After meals, lying down, spicy/fatty foods",
                    relieving: "Antacids provide partial relief, sitting upright",
                    severity: "4/10",
                    associated: "Heartburn, regurgitation of sour fluid",
                    pertinentNegatives: "No chest pain with exertion, no SOB, no nausea/vomiting, no melena, no weight loss"
                },
                
                historyQuestions: [
                    {
                        id: "onset",
                        question: "When did this pain start? How often does it happen?",
                        answer: "It's been about 3 weeks now. It comes and goes - maybe 3-4 times a week, usually in the evenings.",
                        tier: "essential",
                        linkedDx: ["GERD", "Gastritis", "Peptic Ulcer Disease"],
                        reasoning: "Chronic intermittent pattern suggests acid-related disease rather than acute process"
                    },
                    {
                        id: "character",
                        question: "Can you describe what the pain feels like?",
                        answer: "It's like a burning feeling, right here in my upper stomach. Sometimes it goes up into my chest.",
                        tier: "essential",
                        linkedDx: ["GERD", "Gastritis"],
                        reasoning: "Burning quality with radiation to chest classic for acid reflux"
                    },
                    {
                        id: "meal_relation",
                        question: "Does eating affect the pain?",
                        answer: "Yes, it's definitely worse after I eat, especially if I have something spicy or greasy. It's also bad if I lie down after eating.",
                        tier: "essential",
                        linkedDx: ["GERD", "Gastritis", "Peptic Ulcer Disease"],
                        reasoning: "Post-prandial worsening and positional component suggest reflux"
                    },
                    {
                        id: "regurgitation",
                        question: "Do you ever have food or liquid come back up?",
                        answer: "Sometimes I get this sour taste in my mouth, like acid coming up. It's worse at night.",
                        tier: "essential",
                        linkedDx: ["GERD"],
                        reasoning: "Regurgitation is highly specific for GERD"
                    },
                    {
                        id: "relief",
                        question: "What makes it better?",
                        answer: "Those Tums help a little bit. Sitting up straight helps too. Drinking milk seems to help temporarily.",
                        tier: "essential",
                        linkedDx: ["GERD", "Gastritis", "Peptic Ulcer Disease"],
                        reasoning: "Response to antacids suggests acid-related etiology"
                    },
                    {
                        id: "cardiac_symptoms",
                        question: "Any chest pain with activity, shortness of breath, or pain in your arm or jaw?",
                        answer: "No, nothing like that. The burning is just in my stomach area, not when I'm exercising or anything.",
                        tier: "essential",
                        linkedDx: ["Myocardial Infarction"],
                        reasoning: "Important to rule out cardiac cause of epigastric pain"
                    },
                    {
                        id: "gi_bleeding",
                        question: "Any blood in your vomit or black tarry stools?",
                        answer: "No, nothing like that. My bowel movements have been normal.",
                        tier: "essential",
                        linkedDx: ["Peptic Ulcer Disease", "Gastritis"],
                        reasoning: "Absence of bleeding signs makes complicated ulcer less likely"
                    },
                    {
                        id: "nsaid_use",
                        question: "Do you take any pain medications like ibuprofen or aspirin?",
                        answer: "Just occasional Tylenol for headaches. I don't take ibuprofen.",
                        tier: "important",
                        linkedDx: ["Gastritis", "Peptic Ulcer Disease"],
                        reasoning: "NSAID use is major risk factor for gastritis/ulcer"
                    },
                    {
                        id: "alcohol_tobacco",
                        question: "Do you drink alcohol or smoke?",
                        answer: "I have maybe a glass of wine on weekends. Never smoked.",
                        tier: "important",
                        linkedDx: ["Gastritis", "GERD"],
                        reasoning: "Alcohol and tobacco can exacerbate acid-related disease"
                    },
                    {
                        id: "weight_changes",
                        question: "Any recent weight loss?",
                        answer: "No, my weight has been stable.",
                        tier: "important",
                        linkedDx: ["Malignancy"],
                        reasoning: "Unintentional weight loss would raise concern for malignancy"
                    },
                    {
                        id: "family_history",
                        question: "Any family history of stomach problems or cancer?",
                        answer: "My mother had acid reflux and took medication for it. No cancers that I know of.",
                        tier: "supportive",
                        linkedDx: ["GERD"],
                        reasoning: "Family history of GERD increases likelihood"
                    },
                    {
                        id: "stress",
                        question: "Have you been under any unusual stress lately?",
                        answer: "Work has been stressful, but nothing out of the ordinary.",
                        tier: "supportive",
                        linkedDx: ["Gastritis", "GERD"],
                        reasoning: "Stress can exacerbate acid-related symptoms"
                    }
                ],
                
                physicalExam: {
                    general: "Well-appearing, comfortable, in no acute distress",
                    vitals: "BP 124/78, HR 76, RR 16, Temp 98.4°F, SpO2 99%",
                    abdomen: {
                        inspection: "Flat, no distension, no visible masses",
                        auscultation: "Normoactive bowel sounds in all quadrants",
                        palpation: "Mild tenderness in epigastrium to deep palpation. No rebound, no guarding. No hepatosplenomegaly. Murphy's sign negative. No masses.",
                        percussion: "Tympanic throughout, no shifting dullness"
                    },
                    cardiac: "Regular rate and rhythm, S1/S2 normal, no murmurs. Chest wall non-tender.",
                    respiratory: "Clear to auscultation bilaterally"
                },
                
                labsImaging: {
                    cbc: "WBC 7.2, Hgb 13.8, Plt 245 - all within normal limits",
                    cmp: "All within normal limits",
                    lipase: "45 U/L (normal)",
                    hPylori: "Negative (if tested)",
                    ekgIfOrdered: "Normal sinus rhythm, no ST changes"
                },
                
                correctDiagnosis: "GERD",
                teachingPoints: [
                    "Classic GERD presents with burning epigastric pain worse after meals and when supine",
                    "Regurgitation of sour/acidic material is highly specific for GERD",
                    "Response to antacids supports acid-related diagnosis",
                    "Always rule out cardiac causes of epigastric pain, especially in older patients or those with risk factors",
                    "Lifestyle modifications (elevate head of bed, avoid late meals, reduce trigger foods) are first-line"
                ]
            },
            
            // ============================================
            // CASE 2: JUST-IN-TIME (30 min, Classroom Mode)
            // Diagnosis: Pancreatitis
            // ============================================
            justInTimeCase: {
                id: "week2-jit-pancreatitis",
                title: "Epigastric Pain - Just-in-Time Case",
                caseType: "just-in-time",
                diagnosis: "Acute Pancreatitis",
                
                patient: {
                    name: "James Mitchell",
                    age: 52,
                    gender: "male",
                    demographics: "52-year-old male presenting to the Emergency Department"
                },
                
                doorNote: {
                    location: "Emergency Department",
                    chiefComplaint: "I have pain in the upper middle part of my belly.",
                    vitals: {
                        BP: "142/88 mmHg",
                        HR: 108,
                        RR: 22,
                        Temp: "100.8°F",
                        SpO2: "96% RA"
                    }
                },
                
                hpiNarrative: `James Mitchell is a 52-year-old man presenting to the ED with severe epigastric pain that started suddenly 8 hours ago. The pain is constant, rated 9/10, and radiates straight through to his back. He has vomited 4 times since the pain started. He reports the pain is worse when lying flat and slightly better when leaning forward. He went out for his birthday dinner last night and had "a few drinks." He denies any chest pain, shortness of breath, or fever at home. He has a history of gallstones found incidentally 2 years ago but never had symptoms from them.`,
                
                hpiStructured: {
                    onset: "8 hours ago, sudden onset",
                    location: "Epigastric, radiates to back",
                    duration: "Constant since onset",
                    character: "Severe, boring pain",
                    aggravating: "Lying flat, eating",
                    relieving: "Leaning forward slightly",
                    severity: "9/10",
                    associated: "Vomiting x4, nausea",
                    pertinentNegatives: "No chest pain, no SOB, no diarrhea, no blood in vomit"
                },
                
                historyQuestions: [
                    {
                        id: "onset",
                        question: "When did this pain start?",
                        answer: "About 8 hours ago. It came on pretty suddenly while I was sleeping. Woke me right up.",
                        tier: "essential",
                        linkedDx: ["Pancreatitis", "Aortic Aneurysm", "Peptic Ulcer Disease"],
                        reasoning: "Sudden severe onset suggests acute process"
                    },
                    {
                        id: "radiation",
                        question: "Does the pain go anywhere else?",
                        answer: "Yes, it goes straight through to my back. It's like someone is stabbing me front and back at the same time.",
                        tier: "essential",
                        linkedDx: ["Pancreatitis", "Aortic Aneurysm"],
                        reasoning: "Radiation to back is classic for pancreatitis and AAA"
                    },
                    {
                        id: "position",
                        question: "Does position affect the pain?",
                        answer: "Lying down makes it worse. I've been hunched over trying to get comfortable. That helps a little.",
                        tier: "essential",
                        linkedDx: ["Pancreatitis"],
                        reasoning: "Pain relief with leaning forward is classic for pancreatitis"
                    },
                    {
                        id: "vomiting",
                        question: "Any nausea or vomiting?",
                        answer: "I've thrown up 4 times. Nothing makes the nausea go away. Even water comes back up.",
                        tier: "essential",
                        linkedDx: ["Pancreatitis", "Gastritis", "Peptic Ulcer Disease"],
                        reasoning: "Persistent vomiting common in pancreatitis"
                    },
                    {
                        id: "alcohol",
                        question: "Do you drink alcohol? When did you last drink?",
                        answer: "I drink socially. Last night was my birthday - I probably had 6-7 drinks. More than usual.",
                        tier: "essential",
                        linkedDx: ["Pancreatitis", "Gastritis"],
                        reasoning: "Recent heavy alcohol intake is major trigger for acute pancreatitis"
                    },
                    {
                        id: "gallstones",
                        question: "Any history of gallstones or gallbladder problems?",
                        answer: "Actually yes - they found gallstones on a scan a couple years ago, but the doctor said they weren't causing problems so we left them alone.",
                        tier: "essential",
                        linkedDx: ["Pancreatitis", "Gallbladder Disease"],
                        reasoning: "Gallstones and alcohol are the two most common causes of pancreatitis"
                    },
                    {
                        id: "cardiac",
                        question: "Any chest pain, pressure, or shortness of breath?",
                        answer: "No chest pain. Just this horrible belly and back pain.",
                        tier: "essential",
                        linkedDx: ["Myocardial Infarction"],
                        reasoning: "Must rule out cardiac cause"
                    },
                    {
                        id: "gi_bleeding",
                        question: "Any blood in your vomit or black stools?",
                        answer: "No blood. The vomit is just whatever I ate plus bile.",
                        tier: "essential",
                        linkedDx: ["Peptic Ulcer Disease"],
                        reasoning: "Absence of GI bleeding"
                    },
                    {
                        id: "prior_episodes",
                        question: "Have you ever had pain like this before?",
                        answer: "Never this bad. Sometimes I get heartburn but nothing like this.",
                        tier: "important",
                        linkedDx: ["Pancreatitis"],
                        reasoning: "First episode vs recurrent pancreatitis"
                    },
                    {
                        id: "medications",
                        question: "What medications do you take?",
                        answer: "Just blood pressure medicine - lisinopril. And I take ibuprofen sometimes for my back.",
                        tier: "important",
                        linkedDx: ["Gastritis", "Peptic Ulcer Disease"],
                        reasoning: "Medication review for potential contributors"
                    }
                ],
                
                physicalExam: {
                    general: "Appears uncomfortable, diaphoretic, lying still, slightly leaning forward",
                    vitals: "BP 142/88, HR 108, RR 22, Temp 100.8°F, SpO2 96%",
                    abdomen: {
                        inspection: "Flat, no distension",
                        auscultation: "Hypoactive bowel sounds",
                        palpation: "Significant epigastric tenderness with voluntary guarding. No rebound. No rigidity. No pulsatile mass. Murphy's sign equivocal. Tender in RUQ as well.",
                        percussion: "Tympanic, no shifting dullness"
                    },
                    cardiac: "Tachycardic but regular, S1/S2 normal, no murmurs",
                    respiratory: "Decreased breath sounds at left base",
                    skin: "Diaphoretic, no jaundice, no flank ecchymosis (Grey Turner sign negative), no periumbilical ecchymosis (Cullen sign negative)"
                },
                
                labsImaging: {
                    cbc: "WBC 14.2 (elevated), Hgb 15.1, Plt 198",
                    cmp: "Glucose 156 (elevated), Ca 8.8, others normal",
                    lipase: "892 U/L (markedly elevated, normal <60)",
                    ast: "125 U/L (elevated)",
                    alt: "98 U/L (elevated)",
                    tbili: "1.8 mg/dL (mildly elevated)",
                    triglycerides: "180 mg/dL (normal)",
                    lactate: "2.1 mmol/L (mildly elevated)",
                    ctAbdomen: "Edematous pancreas with peripancreatic fat stranding consistent with acute pancreatitis. No necrosis. Cholelithiasis present."
                },
                
                correctDiagnosis: "Acute Pancreatitis (likely gallstone-induced with alcohol as precipitant)",
                teachingPoints: [
                    "Pancreatitis presents with severe epigastric pain radiating to back, worse supine, better leaning forward",
                    "Lipase >3x upper limit of normal is diagnostic when combined with typical symptoms",
                    "Most common causes: Gallstones and Alcohol (remember 'I GET SMASHED' mnemonic)",
                    "Elevated liver enzymes suggest gallstone pancreatitis",
                    "Ranson's criteria or BISAP score help predict severity",
                    "Management: NPO, IV fluids, pain control, treat underlying cause"
                ]
            },
            
            // ============================================
            // CASE 3: SP CASE (Small groups with facilitator)
            // Diagnosis: Gastritis
            // ============================================
            spCase: {
                id: "week2-sp-gastritis",
                title: "Epigastric Pain - SP Case",
                caseType: "sp-case",
                diagnosis: "Gastritis",
                
                patient: {
                    name: "Robert Hayes / Alexandra Price",
                    age: 62,
                    gender: "flexible",
                    demographics: "62-year-old presenting to outpatient primary care"
                },
                
                spInstructions: {
                    demographics: "Preferred age 60-65, gender flexible, body type/ethnicity flexible",
                    clothing: "Patient gown, no moulage required",
                    behavior: "Cooperative, mildly anxious about pain, worried about ulcer or heart problem. Volunteer info only if asked.",
                    supplies: "Stethoscope only"
                },
                
                doorNote: {
                    location: "Outpatient Primary Care Clinic",
                    chiefComplaint: "I have pain in the upper middle part of my belly.",
                    vitals: {
                        BP: "138/82 mmHg",
                        HR: 88,
                        RR: 18,
                        Temp: "98.6°F",
                        SpO2: "98% RA",
                        height: "5'10\"",
                        weight: "190 lbs",
                        bmi: 27.3
                    }
                },
                
                hpiNarrative: `Robert Hayes is a 62-year-old man presenting with epigastric pain that began two days ago. The pain is described as a dull ache with occasional burning, located in the upper middle abdomen without radiation. It is rated 6/10 and has been fairly constant, though worse after meals. He reports mild nausea but no vomiting. He denies chest pain, shortness of breath, or diaphoresis. He has noticed occasional heartburn at night over the past few months but has not taken medication for that. For this pain he tried Zantac 1 tab twice a day since it began - helped a little (pain down to 3/10 for a few hours, then returns). He uses ibuprofen several times a week for knee pain. He denies melena, red/bloody stool or hematemesis. He is worried it could be an ulcer or something with his heart because his father had heart problems.`,
                
                hpiStructured: {
                    onset: "2 days ago",
                    location: "Epigastric region",
                    duration: "Constant for 48 hours",
                    character: "Dull ache, occasional burning",
                    aggravating: "Worse after meals",
                    relieving: "Zantac helped partially (6/10 → 3/10 for a few hours)",
                    severity: "6/10",
                    associated: "Mild nausea, occasional heartburn",
                    pertinentNegatives: "No vomiting, no melena, no hematemesis, no bloody stool, no chest pain, no SOB"
                },
                
                historyQuestions: [
                    {
                        id: "onset",
                        question: "When did this pain start?",
                        answer: "About 2 days ago. It's been pretty constant since then.",
                        tier: "essential",
                        linkedDx: ["Gastritis", "Peptic Ulcer Disease"],
                        reasoning: "Subacute onset suggests inflammatory process"
                    },
                    {
                        id: "character",
                        question: "What does the pain feel like?",
                        answer: "It's mostly a dull ache, but sometimes it burns. Right here in the middle of my upper belly.",
                        tier: "essential",
                        linkedDx: ["Gastritis", "GERD", "Peptic Ulcer Disease"],
                        reasoning: "Dull ache with burning quality suggests mucosal irritation"
                    },
                    {
                        id: "meals",
                        question: "Does eating affect the pain?",
                        answer: "Yes, it seems worse after I eat.",
                        tier: "essential",
                        linkedDx: ["Gastritis", "Peptic Ulcer Disease"],
                        reasoning: "Post-prandial worsening classic for gastritis"
                    },
                    {
                        id: "relief",
                        question: "Have you tried anything for the pain? Did it help?",
                        answer: "I tried Zantac - one tablet twice a day since it started. It helped a little, brought the pain down to maybe a 3 for a few hours, but then it comes back.",
                        tier: "essential",
                        linkedDx: ["Gastritis", "GERD", "Peptic Ulcer Disease"],
                        reasoning: "Partial response to H2 blocker supports acid-related etiology"
                    },
                    {
                        id: "nsaids",
                        question: "Do you take any pain medications like ibuprofen or aspirin?",
                        answer: "I take ibuprofen for knee pain a few times a week. My knee has been bothering me for about 2 weeks since I started walking more to get back in shape.",
                        tier: "essential",
                        linkedDx: ["Gastritis", "Peptic Ulcer Disease"],
                        reasoning: "NSAID use is major cause of gastritis - this is likely the etiology"
                    },
                    {
                        id: "heartburn",
                        question: "Any heartburn?",
                        answer: "Sometimes at night, but not every day. It's been going on a few months but I never took anything for it.",
                        tier: "essential",
                        linkedDx: ["GERD", "Gastritis"],
                        reasoning: "Chronic heartburn suggests underlying acid-related disease"
                    },
                    {
                        id: "nausea_vomiting",
                        question: "Any nausea or vomiting?",
                        answer: "A little nauseous, but I haven't thrown up.",
                        tier: "essential",
                        linkedDx: ["Gastritis", "Peptic Ulcer Disease", "Pancreatitis"],
                        reasoning: "Mild nausea without vomiting consistent with gastritis"
                    },
                    {
                        id: "gi_bleeding",
                        question: "Any blood in your vomit or black tarry stools?",
                        answer: "No, nothing like that. My bowel movements look normal.",
                        tier: "essential",
                        linkedDx: ["Peptic Ulcer Disease", "Gastritis"],
                        reasoning: "Absence of GI bleeding - no complicated ulcer"
                    },
                    {
                        id: "cardiac",
                        question: "Any chest pain, shortness of breath, or sweating?",
                        answer: "No chest pain, no trouble breathing, no sweating. I'm just worried because my father had heart problems.",
                        tier: "essential",
                        linkedDx: ["Myocardial Infarction"],
                        reasoning: "Important to rule out cardiac cause - patient has appropriate concern"
                    },
                    {
                        id: "family_history",
                        question: "Tell me about your family history - you mentioned your father?",
                        answer: "My dad had a heart attack at 70. My mom has GERD. My grandmother on my mom's side had an ulcer. My grandpa on dad's side died of heart disease at 68.",
                        tier: "important",
                        linkedDx: ["Myocardial Infarction", "GERD", "Peptic Ulcer Disease"],
                        reasoning: "Family history informs risk stratification"
                    },
                    {
                        id: "pmh",
                        question: "What other medical problems do you have?",
                        answer: "Just high blood pressure, diagnosed about 5 years ago. It's been controlled. And this knee pain for about 2 weeks.",
                        tier: "essential",
                        linkedDx: ["Myocardial Infarction"],
                        reasoning: "Hypertension is cardiac risk factor"
                    },
                    {
                        id: "medications",
                        question: "What medications do you take?",
                        answer: "Lisinopril 10 mg daily for blood pressure, and ibuprofen as needed for my knee.",
                        tier: "essential",
                        linkedDx: ["Gastritis"],
                        reasoning: "Confirms NSAID use as likely cause"
                    },
                    {
                        id: "allergies",
                        question: "Any allergies?",
                        answer: "No known drug allergies.",
                        tier: "essential",
                        linkedDx: [],
                        reasoning: "Important for treatment planning"
                    },
                    {
                        id: "social",
                        question: "Tell me about yourself - work, living situation, habits?",
                        answer: "I'm retired - was an accountant. Live with my wife. I enjoy gardening and reading. I don't smoke. Maybe 1-2 drinks a week socially. No drugs.",
                        tier: "supportive",
                        linkedDx: ["Gastritis"],
                        reasoning: "Low alcohol use, no smoking - not major contributors"
                    }
                ],
                
                physicalExam: {
                    general: "Comfortable at rest, appears stated age, in no acute distress",
                    vitals: "BP 138/82, HR 88, RR 18, Temp 98.6°F, SpO2 98%",
                    abdomen: {
                        inspection: "Flat, no distension, no visible masses or pulsations",
                        auscultation: "Normoactive bowel sounds in all quadrants",
                        palpation: "Mild epigastric tenderness to palpation. No rebound tenderness. No guarding. No RUQ tenderness specifically. Murphy's sign negative. No hepatosplenomegaly. No masses.",
                        percussion: "Tympanic throughout"
                    },
                    cardiac: "Regular rate and rhythm. Normal S1/S2. No murmurs, rubs, or gallops. Chest wall non-tender to palpation.",
                    skin: "No jaundice. No pallor.",
                    respiratory: "Clear to auscultation bilaterally"
                },
                
                labsImaging: {
                    cbc: "Mild normocytic anemia - Hgb 12.8 g/dL (slightly low). WBC and platelets normal.",
                    cmp: "All within normal limits",
                    lipase: "Normal",
                    troponin: "Normal",
                    hPylori: "Pending or negative",
                    ekg: "Normal sinus rhythm, no ST changes",
                    endoscopyIfOrdered: "Mild erythema of gastric mucosa. No ulcer seen. Consistent with gastritis."
                },
                
                correctDiagnosis: "Gastritis (NSAID-induced)",
                
                emotionalTone: "Mildly anxious about ulcer or heart problem; reassured by clear explanations",
                
                spPrompts: [
                    { trigger: "If asked about relation to meals", response: "Yes, it seems worse after I eat." },
                    { trigger: "If asked about heartburn", response: "Sometimes at night, but not every day." },
                    { trigger: "If asked about NSAID use", response: "I take ibuprofen for knee pain a few times a week." },
                    { trigger: "If asked about family history", response: "My dad had heart problems and my grandmother had an ulcer." },
                    { trigger: "If asked about concerns/worries", response: "I'm worried it could be an ulcer or something with my heart." }
                ],
                
                teachingPoints: [
                    "NSAID use is a common and preventable cause of gastritis",
                    "Always ask about OTC medications - patients may not mention them",
                    "Epigastric tenderness without rebound/guarding suggests mucosal disease, not surgical abdomen",
                    "Mild anemia can be early sign of chronic GI blood loss",
                    "Patient concerns about cardiac disease should be addressed directly",
                    "Management: Stop NSAIDs, PPI therapy, consider H. pylori testing"
                ]
            },
            
            // ============================================
            // FACILITATOR GUIDE
            // ============================================
            facilitatorGuide: {
                title: "Facilitator Guide - Week 2: Epigastric Pain",
                
                openingPrompt: "What's your preliminary differential for a patient with epigastric abdominal pain?",
                
                keyDifferential: {
                    common: ["Gastritis", "GERD", "Peptic Ulcer Disease"],
                    mustNotMiss: ["Myocardial Infarction", "Pancreatitis", "Aortic Aneurysm Rupture"],
                    additional: ["Gallbladder Disease"]
                },
                
                keyHistory: [
                    "Onset, location, duration, character of pain",
                    "Relation to meals, NSAID use",
                    "Associated symptoms: nausea, vomiting, heartburn",
                    "Cardiac symptoms: chest pain, SOB",
                    "GI bleeding: melena, hematemesis",
                    "Family history of ulcers or cardiac disease"
                ],
                
                hypothesisDrivenPrompts: [
                    { pattern: "Pain worse after meals + NSAID use", suggests: "Gastritis" },
                    { pattern: "Epigastric pain with radiation + cardiac risk factors", suggests: "Myocardial Infarction" },
                    { pattern: "Epigastric pain with nausea + elevated lipase", suggests: "Pancreatitis" },
                    { pattern: "Sudden severe pain + hypotension", suggests: "Aortic Aneurysm Rupture" },
                    { pattern: "RUQ tenderness + fatty meals", suggests: "Gallbladder Disease" }
                ],
                
                keyExamManeuvers: [
                    { maneuver: "Vital signs", lookFor: "HR, BP, RR, Temp" },
                    { maneuver: "General appearance", lookFor: "Distress level, pallor, diaphoresis" },
                    { maneuver: "Abdominal exam", lookFor: "Tenderness location, rebound, guarding" },
                    { maneuver: "Murphy's sign", lookFor: "RUQ pain with inspiration" },
                    { maneuver: "Cardiac exam", lookFor: "Heart sounds, chest wall tenderness" }
                ],
                
                examFindingsInterpretation: [
                    { finding: "Epigastric tenderness", suggests: "Gastritis, Peptic Ulcer Disease" },
                    { finding: "RUQ tenderness + Murphy's sign positive", suggests: "Gallbladder Disease" },
                    { finding: "Chest wall tenderness + normal heart sounds", suggests: "Less likely cardiac (more likely MSK)" },
                    { finding: "No rebound or guarding", suggests: "Less likely surgical abdomen" }
                ],
                
                anatomyPathophysiologyTips: [
                    "NSAID use damages gastric mucosa by inhibiting prostaglandin synthesis, leading to gastritis or ulcers",
                    "Epigastric pain can be referred from cardiac ischemia due to shared visceral innervation (T5-T9)",
                    "Pancreatitis presents with epigastric pain radiating to back due to retroperitoneal location + elevated lipase",
                    "Gallbladder disease may present with RUQ pain + positive Murphy's sign",
                    "Aortic aneurysm rupture presents with sudden severe pain + hemodynamic instability"
                ],
                
                clinicalReasoningPause: {
                    prompt: "Based on history and exam, please re-rank your top 3 likely diagnoses.",
                    expectedAnswer: "Most likely = Gastritis; Must-not-miss = MI, Pancreatitis"
                },
                
                teachingPearls: [
                    "Always consider cardiac causes for epigastric pain in older adults",
                    "NSAID use is a common cause of gastritis and ulcers - always ask about OTC meds",
                    "Pancreatitis should be considered with epigastric pain and nausea",
                    "Gallbladder disease may mimic gastritis but has distinct exam findings",
                    "Reassess the differential as new findings emerge - clinical reasoning is iterative"
                ],
                
                closureChecklist: [
                    "Summarize key findings for the patient",
                    "Explain likely diagnosis in patient-friendly terms",
                    "Discuss next steps (tests, treatment)",
                    "Address patient's concerns (cardiac worry)",
                    "Provide safety-net advice (when to return)"
                ],
                
                // ========== ENHANCED FACILITATOR FEATURES ==========
                
                pacingGuide: {
                    totalTime: "45 minutes recommended",
                    stages: [
                        { stage: "Initial DDx", time: "5 min", notes: "Get all ideas on the table before moving on" },
                        { stage: "History Taking", time: "15 min", notes: "Guide students to ask hypothesis-driven questions" },
                        { stage: "Physical Exam", time: "10 min", notes: "Ensure proper technique demonstration" },
                        { stage: "Revised DDx & Reasoning", time: "10 min", notes: "This is where the learning happens - don't rush" },
                        { stage: "Closure & Debrief", time: "5 min", notes: "Summarize key teaching points" }
                    ]
                },
                
                commonStudentErrors: [
                    { error: "Forgetting to ask about OTC medications", redirect: "What about medications you buy without a prescription?" },
                    { error: "Not connecting NSAID use to epigastric pain", redirect: "How might ibuprofen affect the stomach lining?" },
                    { error: "Jumping to cardiac workup without history", redirect: "What symptoms would make you more worried about the heart?" },
                    { error: "Missing the family history connection", redirect: "The patient seems worried - why might that be?" },
                    { error: "Not asking about alarm symptoms (bleeding, weight loss)", redirect: "What findings would change your management urgently?" }
                ],
                
                redirectPrompts: [
                    { situation: "Students stuck on differential", prompt: "What are the structures in the epigastric region that could cause pain?" },
                    { situation: "Students not prioritizing", prompt: "If you could only ask 3 questions, which would give you the most information?" },
                    { situation: "Students missing key history", prompt: "What medications might affect the GI tract?" },
                    { situation: "Students jumping to tests", prompt: "What would the history and exam need to show before ordering that test?" },
                    { situation: "Students forgetting cardiac", prompt: "This patient is 62 with hypertension - what else should we consider?" }
                ],
                
                redFlagAlerts: [
                    { flag: "Ordering CT for everyone", teaching: "Discuss appropriate test ordering and stewardship - what's the pre-test probability?" },
                    { flag: "Missing cardiac evaluation", teaching: "Epigastric pain in older adults with risk factors must include cardiac workup" },
                    { flag: "Not stopping NSAIDs", teaching: "If NSAIDs are the cause, continuing them defeats the treatment" },
                    { flag: "Jumping to endoscopy", teaching: "Discuss when endoscopy is indicated vs empiric treatment" }
                ],
                
                debriefQuestions: [
                    "What was the key piece of history that pointed to the diagnosis?",
                    "How did your differential change from initial to final?",
                    "What would have been different if this patient had chest pain with exertion?",
                    "What's the pathophysiology connecting NSAIDs to gastritis?",
                    "How would you explain this to the patient in plain language?",
                    "What are the next steps in management?"
                ],
                
                pathophysiologyHandoff: {
                    title: "Handoff Points for Pathophysiology Faculty",
                    topics: [
                        {
                            topic: "Prostaglandin-mediated gastric protection",
                            connection: "Why NSAIDs cause gastric mucosal damage",
                            suggestedDepth: "COX-1 vs COX-2, prostaglandin synthesis pathway"
                        },
                        {
                            topic: "Visceral afferent pathways",
                            connection: "Why cardiac pain can present as epigastric pain",
                            suggestedDepth: "T5-T9 dermatomal overlap, referred pain mechanisms"
                        },
                        {
                            topic: "Acid secretion regulation",
                            connection: "Why H2 blockers and PPIs work",
                            suggestedDepth: "Parietal cell physiology, histamine/gastrin/ACh pathways"
                        }
                    ]
                },
                
                discussionTriggers: [
                    { moment: "After initial DDx", question: "What makes epigastric pain tricky compared to other locations?" },
                    { moment: "When NSAID use is revealed", question: "How do NSAIDs damage the stomach - what's the mechanism?" },
                    { moment: "During cardiac discussion", question: "Why might a heart attack present with belly pain?" },
                    { moment: "After exam findings", question: "Why is there NO rebound tenderness in gastritis?" },
                    { moment: "At diagnosis reveal", question: "What's the first thing we need to do for treatment?" }
                ],
                
                timeCheckpoints: [
                    { time: "5 min", shouldBe: "Initial DDx complete, starting history" },
                    { time: "15 min", shouldBe: "Key history obtained, moving to exam" },
                    { time: "25 min", shouldBe: "Exam complete, discussing revised DDx" },
                    { time: "35 min", shouldBe: "Final diagnosis, discussing management" },
                    { time: "45 min", shouldBe: "Debrief and closure complete" }
                ],
                
                pollQuestions: [
                    { question: "What's your #1 diagnosis after hearing the chief complaint?", type: "open" },
                    { question: "Rate your confidence in your initial DDx (1-5)", type: "scale" },
                    { question: "Which single history question was most helpful?", type: "multiple-choice", options: ["NSAID use", "Meal relation", "Cardiac symptoms", "Family history"] },
                    { question: "How confident are you now after history and exam?", type: "scale" },
                    { question: "Would you order an EKG for this patient?", type: "yes-no" }
                ]
            }
        }
    };

    // ================================================
    // RENDER FUNCTIONS
    // ================================================
    
    // Weekly Case Selection Menu
    window.renderWeeklyCaseMenu = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const weeks = Object.keys(weeklyCases);
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-zinc-900 dark:to-zinc-800 text-zinc-900 dark:text-zinc-100">
                <div class="max-w-4xl mx-auto px-6 py-12">
                    
                    <button onclick="goToScreen('menu')" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 flex items-center gap-2">
                        ← Back to Menu
                    </button>
                    
                    <div class="text-center mb-10">
                        <span class="text-5xl mb-4 block">📚</span>
                        <h1 class="text-3xl font-bold mb-2">Weekly Clinical Skills Cases</h1>
                        <p class="text-zinc-600 dark:text-zinc-400">Pre-Work → Just-in-Time → SP Case</p>
                    </div>
                    
                    <!-- Course Director Access -->
                    <div class="mb-8 flex justify-end">
                        <button onclick="window.accessCourseDirector()" class="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 flex items-center gap-2">
                            🔐 Course Director
                        </button>
                    </div>
                    
                    <div class="space-y-6">
                        ${weeks.map(weekKey => {
                            const week = weeklyCases[weekKey];
                            const preworkReleased = isCaseReleased(weekKey, 'prework');
                            const jitReleased = isCaseReleased(weekKey, 'jit');
                            const spReleased = isCaseReleased(weekKey, 'sp');
                            
                            return `
                                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <h2 class="text-xl font-bold">Week ${week.weekNumber}: ${week.topic}</h2>
                                            <p class="text-sm text-zinc-500">Chief Complaint: "${week.chiefComplaint}"</p>
                                        </div>
                                        <span class="text-4xl">🩺</span>
                                    </div>
                                    
                                    <div class="grid md:grid-cols-3 gap-4">
                                        ${renderCaseButton(weekKey, 'prework', preworkReleased, 'Pre-Work Case', week.preWorkCase.diagnosis, 'blue')}
                                        ${renderCaseButton(weekKey, 'jit', jitReleased, 'Just-in-Time', week.justInTimeCase.diagnosis, 'amber')}
                                        ${renderCaseButton(weekKey, 'sp', spReleased, 'SP Case', week.spCase.diagnosis, 'green')}
                                    </div>
                                    
                                    <div class="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 flex gap-3">
                                        <button onclick="window.viewFacilitatorGuide('${weekKey}')" 
                                            class="text-sm text-purple-600 hover:text-purple-800 flex items-center gap-1">
                                            📋 Facilitator Guide
                                        </button>
                                        <button onclick="window.printFacilitatorGuide('${weekKey}')" 
                                            class="text-sm text-zinc-500 hover:text-zinc-700 flex items-center gap-1">
                                            🖨️ Print Guide
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
            </div>
        `;
    };
    
    function renderCaseButton(weekKey, caseType, released, title, diagnosis, color) {
        if (!released) {
            return `
                <div class="p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl opacity-60 cursor-not-allowed">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="text-lg">🔒</span>
                        <p class="font-semibold text-zinc-500">${title}</p>
                    </div>
                    <p class="text-sm text-zinc-400">Not yet available</p>
                </div>
            `;
        }
        
        const bgColor = color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:border-blue-400' :
                        color === 'amber' ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 hover:border-amber-400' :
                        'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:border-green-400';
        
        const textColor = color === 'blue' ? 'text-blue-800 dark:text-blue-200' :
                          color === 'amber' ? 'text-amber-800 dark:text-amber-200' :
                          'text-green-800 dark:text-green-200';
        
        const subTextColor = color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                             color === 'amber' ? 'text-amber-600 dark:text-amber-400' :
                             'text-green-600 dark:text-green-400';
        
        return `
            <button onclick="window.startWeeklyCase('${weekKey}', '${caseType}')" 
                class="p-4 ${bgColor} border rounded-xl transition text-left">
                <p class="font-semibold ${textColor}">${caseType === 'prework' ? '📝' : caseType === 'jit' ? '⚡' : '🩺'} ${title}</p>
                <p class="text-sm ${subTextColor}">${diagnosis}</p>
            </button>
        `;
    }
    
    window.accessCourseDirector = function() {
        const pin = prompt('Enter Course Director PIN:');
        if (pin === '2025') {  // Match the DIRECTOR_PIN constant
            goToScreen('case-release-manager');
        } else if (pin) {
            alert('Invalid PIN');
        }
    };
    
    // Start a weekly case
    window.startWeeklyCase = function(weekKey, caseType) {
        const week = weeklyCases[weekKey];
        if (!week) { alert('Week not found'); return; }
        
        // Check if case is released
        if (!isCaseReleased(weekKey, caseType)) {
            alert('This case is not yet available. Please check back later.');
            return;
        }
        
        let caseData;
        switch(caseType) {
            case 'prework':
                caseData = week.preWorkCase;
                window.currentWeeklyCase = { week: weekKey, type: 'prework', data: caseData, weekData: week };
                // Initialize prework state
                window.preworkState = loadPreworkState(weekKey) || {
                    weekKey: weekKey,
                    currentStage: 0,
                    responses: {},
                    startedAt: new Date().toISOString(),
                    completed: false
                };
                goToScreen('weekly-case-prework');
                break;
            case 'jit':
                caseData = week.justInTimeCase;
                window.currentWeeklyCase = { week: weekKey, type: 'jit', data: caseData, weekData: week };
                goToScreen('classroom-setup');
                break;
            case 'sp':
                caseData = week.spCase;
                window.currentWeeklyCase = { week: weekKey, type: 'sp', data: caseData, weekData: week };
                goToScreen('sp-assessment-setup');
                break;
        }
    };
    
    // Load/save prework progress
    function loadPreworkState(weekKey) {
        const saved = localStorage.getItem('prework_' + weekKey);
        return saved ? JSON.parse(saved) : null;
    }
    
    function savePreworkState() {
        if (window.preworkState) {
            localStorage.setItem('prework_' + window.preworkState.weekKey, JSON.stringify(window.preworkState));
        }
    }
    
    // ================================================
    // PRE-WORK CASE INTERFACE
    // ================================================
    
    // Pre-work stages (simplified 13-stage flow for self-paced learning)
    const preworkStages = [
        { id: 'initial-ddx', name: 'Initial Differential', icon: '🎯', hasWorksheet: true },
        { id: 'plan-history', name: 'Plan History Questions', icon: '📝', hasWorksheet: true },
        { id: 'take-history', name: 'Take History', icon: '💬', hasWorksheet: false },
        { id: 'post-history-ddx', name: 'Revised Differential', icon: '🔄', hasWorksheet: true },
        { id: 'plan-exam', name: 'Plan Physical Exam', icon: '🩺', hasWorksheet: true },
        { id: 'perform-exam', name: 'Physical Exam Results', icon: '📋', hasWorksheet: false },
        { id: 'post-exam-ddx', name: 'Post-Exam Differential', icon: '🎯', hasWorksheet: false },
        { id: 'order-workup', name: 'Order Workup', icon: '🔬', hasWorksheet: false },
        { id: 'workup-results', name: 'Workup Results', icon: '📊', hasWorksheet: false },
        { id: 'final-diagnosis', name: 'Final Diagnosis', icon: '✅', hasWorksheet: false },
        { id: 'patient-counseling', name: 'Patient Counseling', icon: '💬', hasWorksheet: true },
        { id: 'summary', name: 'Case Summary', icon: '📚', hasWorksheet: false }
    ];
    
    window.renderWeeklyCasePrework = function() {
        if (!window.currentWeeklyCase || !window.preworkState) {
            return '<div class="p-8 text-center">No case loaded. <button onclick="goToScreen(\'weekly-case-menu\')" class="text-blue-600 underline">Go back</button></div>';
        }
        
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const caseData = window.currentWeeklyCase.data;
        const weekData = window.currentWeeklyCase.weekData;
        const stage = preworkStages[window.preworkState.currentStage];
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                
                <!-- Header -->
                <header class="bg-blue-600 text-white py-4">
                    <div class="max-w-4xl mx-auto px-6">
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-blue-200 text-xs uppercase tracking-wide">Pre-Work Case</p>
                                <h1 class="text-xl font-bold">${caseData.title}</h1>
                            </div>
                            <button onclick="goToScreen('weekly-case-menu')" class="text-blue-200 hover:text-white">✕ Exit</button>
                        </div>
                    </div>
                </header>
                
                <!-- Progress Bar -->
                <div class="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 py-3">
                    <div class="max-w-4xl mx-auto px-6">
                        <div class="flex gap-1">
                            ${preworkStages.map((s, i) => `
                                <div class="flex-1 h-2 rounded-full ${i < window.preworkState.currentStage ? 'bg-green-500' : i === window.preworkState.currentStage ? 'bg-blue-500' : 'bg-zinc-200 dark:bg-zinc-700'}"></div>
                            `).join('')}
                        </div>
                        <p class="text-xs text-zinc-500 mt-2">Stage ${window.preworkState.currentStage + 1} of ${preworkStages.length}: ${stage.name}</p>
                    </div>
                </div>
                
                <!-- Main Content -->
                <main class="max-w-4xl mx-auto px-6 py-8">
                    ${renderPreworkStage(stage, caseData, weekData)}
                </main>
            </div>
            </div>
        `;
    };
    
    function renderPreworkStage(stage, caseData, weekData) {
        const response = window.preworkState.responses[stage.id] || {};
        
        switch(stage.id) {
            case 'initial-ddx':
                return renderInitialDdxStage(caseData, weekData, response);
            case 'plan-history':
                return renderPlanHistoryStage(caseData, weekData, response);
            case 'take-history':
                return renderTakeHistoryStage(caseData, response);
            case 'post-history-ddx':
                return renderPostHistoryDdxStage(caseData, weekData, response);
            case 'plan-exam':
                return renderPlanExamStage(caseData, weekData, response);
            case 'perform-exam':
                return renderPerformExamStage(caseData, response);
            case 'post-exam-ddx':
                return renderPostExamDdxStage(caseData, response);
            case 'order-workup':
                return renderOrderWorkupStage(caseData, response);
            case 'workup-results':
                return renderWorkupResultsStage(caseData, response);
            case 'final-diagnosis':
                return renderFinalDiagnosisStage(caseData, response);
            case 'patient-counseling':
                return renderPatientCounselingStage(caseData, weekData, response);
            case 'summary':
                return renderSummaryStage(caseData, weekData);
            default:
                return '<p>Stage not found</p>';
        }
    }
    
    // Stage 1: Initial Differential with Worksheet Integration
    function renderInitialDdxStage(caseData, weekData, response) {
        const sharedDdx = weekData.sharedDifferential;
        
        return `
            <div class="space-y-6">
                <!-- Door Note -->
                <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
                    <h2 class="font-bold text-amber-800 dark:text-amber-200 mb-3">📋 Door Note</h2>
                    <div class="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p><strong>Location:</strong> ${caseData.doorNote.location}</p>
                            <p><strong>Patient:</strong> ${caseData.patient.age}-year-old ${caseData.patient.gender}</p>
                        </div>
                        <div>
                            <p><strong>Chief Complaint:</strong></p>
                            <p class="italic">"${caseData.doorNote.chiefComplaint}"</p>
                        </div>
                    </div>
                    <div class="mt-4 pt-4 border-t border-amber-200 dark:border-amber-700">
                        <p class="text-xs text-amber-600 dark:text-amber-400 font-medium">Vital Signs</p>
                        <p class="text-sm">BP ${caseData.doorNote.vitals.BP} | HR ${caseData.doorNote.vitals.HR} | RR ${caseData.doorNote.vitals.RR} | Temp ${caseData.doorNote.vitals.Temp} | SpO₂ ${caseData.doorNote.vitals.SpO2}</p>
                    </div>
                </div>
                
                <!-- Worksheet Question -->
                <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                    <h3 class="font-bold text-purple-800 dark:text-purple-200 mb-2">📝 Worksheet Integration</h3>
                    <p class="text-sm text-purple-700 dark:text-purple-300">${weekData.worksheetQuestions.differentialCategorization.prompt}</p>
                </div>
                
                <!-- Differential Entry -->
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-4">🎯 Your Initial Differential Diagnosis</h2>
                    <p class="text-zinc-600 dark:text-zinc-400 mb-4">Based on the chief complaint and vital signs, list your differential diagnoses. For each, indicate if it's Common, Cannot Miss, or Both.</p>
                    
                    <div class="space-y-4">
                        ${[1,2,3,4,5].map(n => `
                            <div class="grid grid-cols-12 gap-3 items-center">
                                <span class="col-span-1 text-lg font-bold text-zinc-400">${n}.</span>
                                <input type="text" id="ddx${n}" placeholder="Diagnosis ${n}" 
                                    class="col-span-6 px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900"
                                    value="${response['ddx' + n] || ''}">
                                <select id="ddxCat${n}" class="col-span-4 px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900">
                                    <option value="">Category...</option>
                                    <option value="common" ${response['ddxCat' + n] === 'common' ? 'selected' : ''}>Common</option>
                                    <option value="cannot-miss" ${response['ddxCat' + n] === 'cannot-miss' ? 'selected' : ''}>Cannot Miss</option>
                                    <option value="both" ${response['ddxCat' + n] === 'both' ? 'selected' : ''}>Both</option>
                                </select>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="mt-6">
                        <label class="block text-sm font-medium mb-2">Confidence in your #1 diagnosis (1-5)</label>
                        <div class="flex gap-2">
                            ${[1,2,3,4,5].map(n => `
                                <button type="button" onclick="window.selectPreworkConfidence(${n})"
                                    class="flex-1 py-3 rounded-lg border-2 font-semibold transition ${response.confidence == n ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700' : 'border-zinc-200 dark:border-zinc-700 hover:border-blue-300'}"
                                    id="pwConf${n}">
                                    ${n}
                                </button>
                            `).join('')}
                        </div>
                        <div class="flex justify-between text-xs text-zinc-500 mt-1">
                            <span>Guessing</span>
                            <span>Very Confident</span>
                        </div>
                    </div>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-end">
                    <button onclick="window.saveAndNextPrework('initial-ddx')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Save & Continue →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 2: Plan History Questions
    function renderPlanHistoryStage(caseData, weekData, response) {
        const sharedDdx = weekData.sharedDifferential;
        const allDx = [...sharedDdx.common, ...sharedDdx.cannotMiss, ...sharedDdx.additional];
        
        return `
            <div class="space-y-6">
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-4">📝 Plan Your History Questions</h2>
                    <p class="text-zinc-600 dark:text-zinc-400 mb-4">What questions would you ask to help differentiate between your diagnoses? For each question, note which diagnosis it helps evaluate.</p>
                    
                    <div class="space-y-4">
                        ${[1,2,3,4,5,6].map(n => `
                            <div class="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                                <div class="flex gap-3 items-start">
                                    <span class="text-lg font-bold text-zinc-400">${n}.</span>
                                    <div class="flex-1 space-y-2">
                                        <input type="text" id="histQ${n}" placeholder="Question to ask..." 
                                            class="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800"
                                            value="${response['histQ' + n] || ''}">
                                        <div class="flex gap-2 items-center">
                                            <span class="text-sm text-zinc-500">Helps evaluate:</span>
                                            <input type="text" id="histQDx${n}" placeholder="Which diagnosis(es)?" 
                                                class="flex-1 px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-sm"
                                                value="${response['histQDx' + n] || ''}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Reference: Your DDx -->
                <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                    <p class="text-sm text-blue-700 dark:text-blue-300"><strong>Your differential:</strong> 
                        ${[1,2,3,4,5].map(n => window.preworkState.responses['initial-ddx']?.['ddx' + n]).filter(d => d).join(', ') || 'Not yet entered'}
                    </p>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-between">
                    <button onclick="window.prevPreworkStage()" class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        ← Back
                    </button>
                    <button onclick="window.saveAndNextPrework('plan-history')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Save & Continue →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 3: Take History (Interactive)
    function renderTakeHistoryStage(caseData, response) {
        const questions = caseData.historyQuestions || [];
        const askedQuestions = response.askedQuestions || [];
        
        return `
            <div class="space-y-6">
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-2">💬 Take the History</h2>
                    <p class="text-zinc-600 dark:text-zinc-400 mb-4">Click on questions to "ask" the patient. Their answers will appear below.</p>
                    
                    <div class="grid md:grid-cols-2 gap-3 mb-6">
                        ${questions.map((q, i) => `
                            <button onclick="window.askHistoryQuestion(${i})" 
                                class="text-left p-3 rounded-lg border-2 transition ${askedQuestions.includes(i) 
                                    ? 'border-green-400 bg-green-50 dark:bg-green-900/20' 
                                    : 'border-zinc-200 dark:border-zinc-700 hover:border-blue-400'}">
                                <p class="text-sm font-medium">${q.question}</p>
                                ${askedQuestions.includes(i) ? '<span class="text-xs text-green-600">✓ Asked</span>' : ''}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Patient Responses -->
                ${askedQuestions.length > 0 ? `
                    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                        <h3 class="font-bold text-green-800 dark:text-green-200 mb-4">🗣️ Patient Responses</h3>
                        <div class="space-y-4">
                            ${askedQuestions.map(i => {
                                const q = questions[i];
                                return `
                                    <div class="p-3 bg-white dark:bg-zinc-800 rounded-lg">
                                        <p class="text-sm font-medium text-zinc-500">${q.question}</p>
                                        <p class="mt-1 italic">"${q.answer}"</p>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Navigation -->
                <div class="flex justify-between">
                    <button onclick="window.prevPreworkStage()" class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        ← Back
                    </button>
                    <button onclick="window.saveAndNextPrework('take-history')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold"
                        ${askedQuestions.length < 3 ? 'disabled' : ''}>
                        ${askedQuestions.length < 3 ? `Ask at least ${3 - askedQuestions.length} more questions` : 'Save & Continue →'}
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 4: Post-History DDx
    function renderPostHistoryDdxStage(caseData, weekData, response) {
        const initialDdx = window.preworkState.responses['initial-ddx'] || {};
        
        return `
            <div class="space-y-6">
                <!-- Initial vs Revised -->
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4">
                        <h3 class="font-bold mb-2 text-zinc-600 dark:text-zinc-400">Your Initial DDx</h3>
                        <ol class="text-sm space-y-1">
                            ${[1,2,3,4,5].map(n => initialDdx['ddx' + n] ? `<li>${n}. ${initialDdx['ddx' + n]}</li>` : '').join('')}
                        </ol>
                    </div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                        <h3 class="font-bold mb-2 text-blue-800 dark:text-blue-200">Update Based on History</h3>
                        <p class="text-sm text-blue-700 dark:text-blue-300">How has the history changed your thinking?</p>
                    </div>
                </div>
                
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-4">🔄 Revised Differential</h2>
                    
                    <div class="space-y-4">
                        ${[1,2,3,4,5].map(n => `
                            <div class="grid grid-cols-12 gap-3 items-center">
                                <span class="col-span-1 text-lg font-bold text-zinc-400">${n}.</span>
                                <input type="text" id="revisedDdx${n}" placeholder="Diagnosis ${n}" 
                                    class="col-span-7 px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900"
                                    value="${response['revisedDdx' + n] || initialDdx['ddx' + n] || ''}">
                                <select id="revisedDir${n}" class="col-span-3 px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-sm">
                                    <option value="">Movement</option>
                                    <option value="up" ${response['revisedDir' + n] === 'up' ? 'selected' : ''}>↑ More likely</option>
                                    <option value="same" ${response['revisedDir' + n] === 'same' ? 'selected' : ''}>→ Same</option>
                                    <option value="down" ${response['revisedDir' + n] === 'down' ? 'selected' : ''}>↓ Less likely</option>
                                    <option value="new" ${response['revisedDir' + n] === 'new' ? 'selected' : ''}>★ New addition</option>
                                </select>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="mt-6">
                        <label class="block text-sm font-medium mb-2">Why did your differential change? (Include pathophysiology)</label>
                        <textarea id="ddxReasoning" rows="4" 
                            class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900"
                            placeholder="The history of NSAID use moves gastritis up because...">${response.reasoning || ''}</textarea>
                    </div>
                    
                    <div class="mt-6">
                        <label class="block text-sm font-medium mb-2">New confidence in #1 diagnosis</label>
                        <div class="flex gap-2">
                            ${[1,2,3,4,5].map(n => `
                                <button type="button" onclick="window.selectPreworkConfidence(${n}, 'revised')"
                                    class="flex-1 py-3 rounded-lg border-2 font-semibold transition ${response.revisedConfidence == n ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700' : 'border-zinc-200 dark:border-zinc-700 hover:border-green-300'}"
                                    id="pwRevConf${n}">
                                    ${n}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-between">
                    <button onclick="window.prevPreworkStage()" class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        ← Back
                    </button>
                    <button onclick="window.saveAndNextPrework('post-history-ddx')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Save & Continue →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 5: Plan Exam
    function renderPlanExamStage(caseData, weekData, response) {
        return `
            <div class="space-y-6">
                <!-- Worksheet Integration -->
                <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                    <h3 class="font-bold text-purple-800 dark:text-purple-200 mb-2">📝 Worksheet Integration</h3>
                    <p class="text-sm text-purple-700 dark:text-purple-300">${weekData.worksheetQuestions.examFindingsToMechanism.prompt}</p>
                </div>
                
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-4">🩺 Plan Your Physical Exam</h2>
                    <p class="text-zinc-600 dark:text-zinc-400 mb-4">What exam maneuvers would you perform? For each, note what finding would support which diagnosis.</p>
                    
                    <div class="space-y-4">
                        ${[1,2,3,4,5].map(n => `
                            <div class="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                                <div class="grid md:grid-cols-3 gap-3">
                                    <input type="text" id="examMan${n}" placeholder="Exam maneuver..." 
                                        class="px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800"
                                        value="${response['examMan' + n] || ''}">
                                    <input type="text" id="examFind${n}" placeholder="Finding you're looking for..." 
                                        class="px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800"
                                        value="${response['examFind' + n] || ''}">
                                    <input type="text" id="examDx${n}" placeholder="Supports which Dx..." 
                                        class="px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800"
                                        value="${response['examDx' + n] || ''}">
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-between">
                    <button onclick="window.prevPreworkStage()" class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        ← Back
                    </button>
                    <button onclick="window.saveAndNextPrework('plan-exam')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Save & Continue →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 6: Perform Exam (Show Results)
    function renderPerformExamStage(caseData, response) {
        const exam = caseData.physicalExam;
        
        return `
            <div class="space-y-6">
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-4">📋 Physical Exam Results</h2>
                    
                    <div class="space-y-4">
                        <div class="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                            <p class="font-semibold text-zinc-700 dark:text-zinc-300">General</p>
                            <p class="text-sm">${exam.general}</p>
                        </div>
                        <div class="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                            <p class="font-semibold text-zinc-700 dark:text-zinc-300">Vitals</p>
                            <p class="text-sm">${exam.vitals}</p>
                        </div>
                        <div class="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                            <p class="font-semibold text-zinc-700 dark:text-zinc-300">Abdomen</p>
                            <ul class="text-sm space-y-1 mt-2">
                                <li><strong>Inspection:</strong> ${exam.abdomen.inspection}</li>
                                <li><strong>Auscultation:</strong> ${exam.abdomen.auscultation}</li>
                                <li><strong>Palpation:</strong> ${exam.abdomen.palpation}</li>
                                <li><strong>Percussion:</strong> ${exam.abdomen.percussion}</li>
                            </ul>
                        </div>
                        <div class="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                            <p class="font-semibold text-zinc-700 dark:text-zinc-300">Cardiac</p>
                            <p class="text-sm">${exam.cardiac}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-between">
                    <button onclick="window.prevPreworkStage()" class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        ← Back
                    </button>
                    <button onclick="window.saveAndNextPrework('perform-exam')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Continue →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 7: Post-Exam DDx
    function renderPostExamDdxStage(caseData, response) {
        const prevDdx = window.preworkState.responses['post-history-ddx'] || window.preworkState.responses['initial-ddx'] || {};
        
        return `
            <div class="space-y-6">
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-4">🎯 Post-Exam Differential</h2>
                    <p class="text-zinc-600 dark:text-zinc-400 mb-4">How has the physical exam refined your thinking?</p>
                    
                    <div class="space-y-4">
                        ${[1,2,3].map(n => `
                            <div class="grid grid-cols-12 gap-3 items-center">
                                <span class="col-span-1 text-lg font-bold text-zinc-400">${n}.</span>
                                <input type="text" id="postExamDdx${n}" placeholder="Diagnosis ${n}" 
                                    class="col-span-8 px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900"
                                    value="${response['postExamDdx' + n] || prevDdx['revisedDdx' + n] || ''}">
                                <span class="col-span-2 text-sm text-zinc-500">
                                    ${n === 1 ? 'Most Likely' : n === 2 ? 'Second' : 'Third'}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="mt-6">
                        <label class="block text-sm font-medium mb-2">How did the exam findings change your differential?</label>
                        <textarea id="examReasoning" rows="3" 
                            class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900"
                            placeholder="The epigastric tenderness without rebound suggests...">${response.examReasoning || ''}</textarea>
                    </div>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-between">
                    <button onclick="window.prevPreworkStage()" class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        ← Back
                    </button>
                    <button onclick="window.saveAndNextPrework('post-exam-ddx')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Save & Continue →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 8: Order Workup
    function renderOrderWorkupStage(caseData, response) {
        return `
            <div class="space-y-6">
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-4">🔬 Order Workup</h2>
                    <p class="text-zinc-600 dark:text-zinc-400 mb-4">What diagnostic tests would you order? For each, note what you're looking for.</p>
                    
                    <div class="space-y-3">
                        ${['CBC', 'CMP', 'Lipase', 'EKG', 'Troponin', 'H. pylori', 'Other'].map(test => `
                            <label class="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800">
                                <input type="checkbox" id="test_${test.replace(/[^a-zA-Z]/g, '')}" 
                                    class="w-5 h-5 rounded"
                                    ${response['test_' + test.replace(/[^a-zA-Z]/g, '')] ? 'checked' : ''}>
                                <span class="font-medium">${test}</span>
                            </label>
                        `).join('')}
                    </div>
                    
                    <div class="mt-6">
                        <label class="block text-sm font-medium mb-2">Why are you ordering these tests?</label>
                        <textarea id="workupReasoning" rows="3" 
                            class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900"
                            placeholder="I'm ordering lipase to rule out pancreatitis because...">${response.workupReasoning || ''}</textarea>
                    </div>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-between">
                    <button onclick="window.prevPreworkStage()" class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        ← Back
                    </button>
                    <button onclick="window.saveAndNextPrework('order-workup')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        See Results →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 9: Workup Results
    function renderWorkupResultsStage(caseData, response) {
        const labs = caseData.labsImaging;
        
        return `
            <div class="space-y-6">
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-4">📊 Workup Results</h2>
                    
                    <div class="space-y-3">
                        ${Object.entries(labs).map(([key, value]) => `
                            <div class="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                                <p class="font-semibold text-zinc-700 dark:text-zinc-300 capitalize">${key.replace(/([A-Z])/g, ' $1')}</p>
                                <p class="text-sm">${value}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-between">
                    <button onclick="window.prevPreworkStage()" class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        ← Back
                    </button>
                    <button onclick="window.saveAndNextPrework('workup-results')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Continue →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 10: Final Diagnosis
    function renderFinalDiagnosisStage(caseData, response) {
        return `
            <div class="space-y-6">
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-4">✅ Final Diagnosis</h2>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Your final diagnosis:</label>
                            <input type="text" id="finalDx" 
                                class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-lg"
                                placeholder="Enter your final diagnosis..."
                                value="${response.finalDx || ''}">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium mb-2">Key supporting evidence:</label>
                            <textarea id="finalEvidence" rows="4" 
                                class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900"
                                placeholder="1. History finding that supports this...&#10;2. Exam finding that supports this...&#10;3. Lab finding that supports this...">${response.finalEvidence || ''}</textarea>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium mb-2">Final confidence (1-5)</label>
                            <div class="flex gap-2">
                                ${[1,2,3,4,5].map(n => `
                                    <button type="button" onclick="window.selectPreworkConfidence(${n}, 'final')"
                                        class="flex-1 py-3 rounded-lg border-2 font-semibold transition ${response.finalConfidence == n ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700' : 'border-zinc-200 dark:border-zinc-700 hover:border-green-300'}"
                                        id="pwFinalConf${n}">
                                        ${n}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-between">
                    <button onclick="window.prevPreworkStage()" class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        ← Back
                    </button>
                    <button onclick="window.saveAndNextPrework('final-diagnosis')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Save & Continue →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 11: Patient Counseling
    function renderPatientCounselingStage(caseData, weekData, response) {
        return `
            <div class="space-y-6">
                <!-- Worksheet Integration -->
                <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                    <h3 class="font-bold text-purple-800 dark:text-purple-200 mb-2">📝 Worksheet Integration</h3>
                    <p class="text-sm text-purple-700 dark:text-purple-300">${weekData.worksheetQuestions.patientExplanation.prompt}</p>
                </div>
                
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h2 class="text-xl font-bold mb-4">💬 Patient Counseling</h2>
                    <p class="text-zinc-600 dark:text-zinc-400 mb-4">Write a patient-friendly explanation (6th grade reading level, max 100 words) covering:</p>
                    <ul class="text-sm text-zinc-500 mb-4 list-disc list-inside">
                        <li>What is happening in their body</li>
                        <li>Why they have these symptoms</li>
                        <li>What to expect next (tests, treatment)</li>
                    </ul>
                    
                    <textarea id="patientCounseling" rows="6" 
                        class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900"
                        placeholder="Your stomach lining is irritated, which is causing the pain you feel...">${response.counseling || ''}</textarea>
                    
                    <p class="text-xs text-zinc-400 mt-2">Word count: <span id="wordCount">0</span>/100</p>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-between">
                    <button onclick="window.prevPreworkStage()" class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        ← Back
                    </button>
                    <button onclick="window.saveAndNextPrework('patient-counseling')" 
                        class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                        Save & Continue →
                    </button>
                </div>
            </div>
        `;
    }
    
    // Stage 12: Summary
    function renderSummaryStage(caseData, weekData) {
        const responses = window.preworkState.responses;
        
        return `
            <div class="space-y-6">
                <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
                    <span class="text-5xl mb-4 block">🎉</span>
                    <h2 class="text-2xl font-bold text-green-800 dark:text-green-200">Pre-Work Complete!</h2>
                    <p class="text-green-700 dark:text-green-300">You're ready for the in-class session.</p>
                </div>
                
                <!-- Correct Diagnosis Reveal -->
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h3 class="font-bold mb-4">📋 Case Summary</h3>
                    
                    <div class="space-y-4">
                        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <p class="text-sm text-blue-600 dark:text-blue-400">Correct Diagnosis</p>
                            <p class="text-xl font-bold text-blue-800 dark:text-blue-200">${caseData.correctDiagnosis}</p>
                        </div>
                        
                        <div class="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                            <p class="text-sm text-zinc-500 mb-2">Your final diagnosis</p>
                            <p class="font-medium">${responses['final-diagnosis']?.finalDx || 'Not entered'}</p>
                        </div>
                        
                        <div>
                            <p class="text-sm font-medium mb-2">Key Teaching Points:</p>
                            <ul class="space-y-2">
                                ${caseData.teachingPoints.map(tp => `
                                    <li class="flex gap-2 text-sm"><span>💡</span> ${tp}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!-- Confidence Journey -->
                <div class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
                    <h3 class="font-bold mb-4">📈 Your Confidence Journey</h3>
                    <div class="flex items-center justify-between">
                        <div class="text-center">
                            <p class="text-3xl font-bold">${responses['initial-ddx']?.confidence || '-'}</p>
                            <p class="text-xs text-zinc-500">Initial</p>
                        </div>
                        <span class="text-zinc-400">→</span>
                        <div class="text-center">
                            <p class="text-3xl font-bold">${responses['post-history-ddx']?.revisedConfidence || '-'}</p>
                            <p class="text-xs text-zinc-500">Post-History</p>
                        </div>
                        <span class="text-zinc-400">→</span>
                        <div class="text-center">
                            <p class="text-3xl font-bold">${responses['final-diagnosis']?.finalConfidence || '-'}</p>
                            <p class="text-xs text-zinc-500">Final</p>
                        </div>
                    </div>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-center">
                    <button onclick="goToScreen('weekly-case-menu')" 
                        class="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold">
                        ✓ Done - Return to Cases
                    </button>
                </div>
            </div>
        `;
    }
    
    // ================================================
    // PREWORK NAVIGATION FUNCTIONS
    // ================================================
    
    window.selectPreworkConfidence = function(level, type) {
        const stageId = preworkStages[window.preworkState.currentStage].id;
        if (!window.preworkState.responses[stageId]) {
            window.preworkState.responses[stageId] = {};
        }
        
        if (type === 'revised') {
            window.preworkState.responses[stageId].revisedConfidence = level;
        } else if (type === 'final') {
            window.preworkState.responses[stageId].finalConfidence = level;
        } else {
            window.preworkState.responses[stageId].confidence = level;
        }
        
        savePreworkState();
        render();
    };
    
    window.askHistoryQuestion = function(index) {
        const stageId = 'take-history';
        if (!window.preworkState.responses[stageId]) {
            window.preworkState.responses[stageId] = { askedQuestions: [] };
        }
        if (!window.preworkState.responses[stageId].askedQuestions) {
            window.preworkState.responses[stageId].askedQuestions = [];
        }
        
        if (!window.preworkState.responses[stageId].askedQuestions.includes(index)) {
            window.preworkState.responses[stageId].askedQuestions.push(index);
        }
        
        savePreworkState();
        render();
    };
    
    window.saveAndNextPrework = function(stageId) {
        // Collect form data based on stage
        const response = window.preworkState.responses[stageId] || {};
        
        // Collect inputs based on stage
        if (stageId === 'initial-ddx') {
            [1,2,3,4,5].forEach(n => {
                response['ddx' + n] = document.getElementById('ddx' + n)?.value || '';
                response['ddxCat' + n] = document.getElementById('ddxCat' + n)?.value || '';
            });
        } else if (stageId === 'plan-history') {
            [1,2,3,4,5,6].forEach(n => {
                response['histQ' + n] = document.getElementById('histQ' + n)?.value || '';
                response['histQDx' + n] = document.getElementById('histQDx' + n)?.value || '';
            });
        } else if (stageId === 'post-history-ddx') {
            [1,2,3,4,5].forEach(n => {
                response['revisedDdx' + n] = document.getElementById('revisedDdx' + n)?.value || '';
                response['revisedDir' + n] = document.getElementById('revisedDir' + n)?.value || '';
            });
            response.reasoning = document.getElementById('ddxReasoning')?.value || '';
        } else if (stageId === 'plan-exam') {
            [1,2,3,4,5].forEach(n => {
                response['examMan' + n] = document.getElementById('examMan' + n)?.value || '';
                response['examFind' + n] = document.getElementById('examFind' + n)?.value || '';
                response['examDx' + n] = document.getElementById('examDx' + n)?.value || '';
            });
        } else if (stageId === 'post-exam-ddx') {
            [1,2,3].forEach(n => {
                response['postExamDdx' + n] = document.getElementById('postExamDdx' + n)?.value || '';
            });
            response.examReasoning = document.getElementById('examReasoning')?.value || '';
        } else if (stageId === 'order-workup') {
            ['CBC', 'CMP', 'Lipase', 'EKG', 'Troponin', 'Hpylori', 'Other'].forEach(test => {
                response['test_' + test] = document.getElementById('test_' + test)?.checked || false;
            });
            response.workupReasoning = document.getElementById('workupReasoning')?.value || '';
        } else if (stageId === 'final-diagnosis') {
            response.finalDx = document.getElementById('finalDx')?.value || '';
            response.finalEvidence = document.getElementById('finalEvidence')?.value || '';
        } else if (stageId === 'patient-counseling') {
            response.counseling = document.getElementById('patientCounseling')?.value || '';
        }
        
        window.preworkState.responses[stageId] = response;
        
        // Move to next stage
        if (window.preworkState.currentStage < preworkStages.length - 1) {
            window.preworkState.currentStage++;
        }
        
        savePreworkState();
        render();
    };
    
    window.prevPreworkStage = function() {
        if (window.preworkState.currentStage > 0) {
            window.preworkState.currentStage--;
            savePreworkState();
            render();
        }
    };
    
    // View Facilitator Guide (in-app)
    window.viewFacilitatorGuide = function(weekKey) {
        window.currentFacilitatorGuide = weekKey;
        goToScreen('facilitator-guide-view');
    };
    
    // Render Facilitator Guide
    window.renderFacilitatorGuideView = function() {
        const darkClass = (typeof playerData !== 'undefined' && playerData.darkMode) ? 'dark' : '';
        const weekKey = window.currentFacilitatorGuide;
        const week = weeklyCases[weekKey];
        if (!week) return '<div class="p-8">Guide not found</div>';
        
        const guide = week.facilitatorGuide;
        const spCase = week.spCase;
        
        return `
            <div class="${darkClass}">
            <div class="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                <div class="max-w-4xl mx-auto px-6 py-8">
                    
                    <div class="flex justify-between items-center mb-8">
                        <button onclick="goToScreen('weekly-case-menu')" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-2">
                            ← Back
                        </button>
                        <button onclick="window.printFacilitatorGuide('${weekKey}')" class="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 flex items-center gap-2">
                            🖨️ Print Version
                        </button>
                    </div>
                    
                    <header class="mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-700">
                        <h1 class="text-3xl font-bold mb-2">${guide.title}</h1>
                        <p class="text-zinc-500">Chief Complaint: "${week.chiefComplaint}"</p>
                        <p class="text-zinc-500">Actual Diagnosis: <strong class="text-green-600">${spCase.diagnosis}</strong></p>
                    </header>
                    
                    <!-- Objectives -->
                    <section class="mb-8">
                        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">🎯 Learning Objectives</h2>
                        <ul class="space-y-2">
                            ${week.objectives.map(obj => `<li class="flex gap-2"><span class="text-green-500">✓</span> ${obj}</li>`).join('')}
                        </ul>
                    </section>
                    
                    <!-- Opening Prompt -->
                    <section class="mb-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                        <h2 class="text-xl font-bold mb-2 text-blue-800 dark:text-blue-200">💬 Opening Prompt</h2>
                        <p class="text-lg italic">"${guide.openingPrompt}"</p>
                    </section>
                    
                    <!-- Key Differential -->
                    <section class="mb-8">
                        <h2 class="text-xl font-bold mb-4">📋 Key Differential Diagnoses</h2>
                        <div class="grid md:grid-cols-3 gap-4">
                            <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                                <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">Common</h3>
                                <ul class="space-y-1 text-sm">${guide.keyDifferential.common.map(d => `<li>• ${d}</li>`).join('')}</ul>
                            </div>
                            <div class="bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                                <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2">Must-Not-Miss</h3>
                                <ul class="space-y-1 text-sm">${guide.keyDifferential.mustNotMiss.map(d => `<li>• ${d}</li>`).join('')}</ul>
                            </div>
                            <div class="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4">
                                <h3 class="font-semibold mb-2">Additional</h3>
                                <ul class="space-y-1 text-sm">${guide.keyDifferential.additional.map(d => `<li>• ${d}</li>`).join('')}</ul>
                            </div>
                        </div>
                    </section>
                    
                    <!-- Key History -->
                    <section class="mb-8">
                        <h2 class="text-xl font-bold mb-4">📝 Key History to Obtain</h2>
                        <ul class="grid md:grid-cols-2 gap-2">
                            ${guide.keyHistory.map(h => `<li class="flex gap-2"><span>•</span> ${h}</li>`).join('')}
                        </ul>
                    </section>
                    
                    <!-- Hypothesis-Driven Prompts -->
                    <section class="mb-8">
                        <h2 class="text-xl font-bold mb-4">🔗 Hypothesis-Driven History Prompts</h2>
                        <div class="space-y-2">
                            ${guide.hypothesisDrivenPrompts.map(p => `
                                <div class="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                                    <span class="text-zinc-500">If:</span>
                                    <span class="flex-1">${p.pattern}</span>
                                    <span class="text-zinc-500">→</span>
                                    <span class="font-semibold text-blue-600">${p.suggests}</span>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    
                    <!-- Key Exam Maneuvers -->
                    <section class="mb-8">
                        <h2 class="text-xl font-bold mb-4">🩺 Key Physical Exam Maneuvers</h2>
                        <div class="grid md:grid-cols-2 gap-3">
                            ${guide.keyExamManeuvers.map(m => `
                                <div class="p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                                    <p class="font-semibold">${m.maneuver}</p>
                                    <p class="text-sm text-zinc-500">Look for: ${m.lookFor}</p>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    
                    <!-- Exam Findings Interpretation -->
                    <section class="mb-8">
                        <h2 class="text-xl font-bold mb-4">🔍 Exam Findings → Diagnosis</h2>
                        <div class="space-y-2">
                            ${guide.examFindingsInterpretation.map(f => `
                                <div class="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                                    <span class="font-medium">${f.finding}</span>
                                    <span class="text-zinc-400">→</span>
                                    <span class="text-green-600">${f.suggests}</span>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    
                    <!-- Anatomy & Pathophysiology Tips -->
                    <section class="mb-8 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                        <h2 class="text-xl font-bold mb-4 text-purple-800 dark:text-purple-200">🧬 Anatomy & Pathophysiology Tips</h2>
                        <ul class="space-y-3">
                            ${guide.anatomyPathophysiologyTips.map(tip => `<li class="flex gap-2"><span>💡</span> ${tip}</li>`).join('')}
                        </ul>
                    </section>
                    
                    <!-- Clinical Reasoning Pause -->
                    <section class="mb-8 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6">
                        <h2 class="text-xl font-bold mb-2 text-amber-800 dark:text-amber-200">⏸️ Clinical Reasoning Pause</h2>
                        <p class="text-lg italic mb-3">"${guide.clinicalReasoningPause.prompt}"</p>
                        <p class="text-sm text-amber-700 dark:text-amber-300"><strong>Expected:</strong> ${guide.clinicalReasoningPause.expectedAnswer}</p>
                    </section>
                    
                    <!-- Teaching Pearls -->
                    <section class="mb-8">
                        <h2 class="text-xl font-bold mb-4">💎 Teaching Pearls</h2>
                        <div class="grid md:grid-cols-2 gap-3">
                            ${guide.teachingPearls.map(pearl => `
                                <div class="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                    <p class="text-sm">${pearl}</p>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    
                    <!-- Closure Checklist -->
                    <section class="mb-8">
                        <h2 class="text-xl font-bold mb-4">✅ Closure Checklist</h2>
                        <ul class="space-y-2">
                            ${guide.closureChecklist.map(item => `
                                <li class="flex items-center gap-3 p-2">
                                    <input type="checkbox" class="w-5 h-5 rounded">
                                    <span>${item}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </section>
                    
                    <!-- ========== ENHANCED FACILITATOR FEATURES ========== -->
                    
                    <div class="border-t-4 border-purple-500 pt-8 mt-8">
                        <h2 class="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-200">🎓 Enhanced Facilitator Tools</h2>
                    </div>
                    
                    <!-- Pacing Guide -->
                    ${guide.pacingGuide ? `
                        <section class="mb-8">
                            <h2 class="text-xl font-bold mb-4">⏱️ Pacing Guide</h2>
                            <p class="text-sm text-zinc-500 mb-4">Total recommended time: ${guide.pacingGuide.totalTime}</p>
                            <div class="space-y-2">
                                ${guide.pacingGuide.stages.map(s => `
                                    <div class="flex items-center gap-4 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                                        <span class="w-16 text-center font-bold text-blue-600">${s.time}</span>
                                        <div class="flex-1">
                                            <p class="font-medium">${s.stage}</p>
                                            <p class="text-sm text-zinc-500">${s.notes}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}
                    
                    <!-- Time Checkpoints -->
                    ${guide.timeCheckpoints ? `
                        <section class="mb-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                            <h2 class="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">📍 Time Checkpoints</h2>
                            <div class="grid grid-cols-5 gap-2">
                                ${guide.timeCheckpoints.map(c => `
                                    <div class="text-center p-2 bg-white dark:bg-zinc-800 rounded-lg">
                                        <p class="font-bold text-blue-600">${c.time}</p>
                                        <p class="text-xs text-zinc-500">${c.shouldBe}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}
                    
                    <!-- Common Student Errors -->
                    ${guide.commonStudentErrors ? `
                        <section class="mb-8">
                            <h2 class="text-xl font-bold mb-4">⚠️ Common Student Errors & Redirects</h2>
                            <div class="space-y-3">
                                ${guide.commonStudentErrors.map(e => `
                                    <div class="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/20">
                                        <p class="font-medium text-red-800 dark:text-red-200">❌ ${e.error}</p>
                                        <p class="text-sm text-green-700 dark:text-green-300 mt-2">✅ Redirect: "${e.redirect}"</p>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}
                    
                    <!-- Redirect Prompts -->
                    ${guide.redirectPrompts ? `
                        <section class="mb-8">
                            <h2 class="text-xl font-bold mb-4">💡 Redirect Prompts (When Students Get Stuck)</h2>
                            <div class="space-y-2">
                                ${guide.redirectPrompts.map(r => `
                                    <div class="flex gap-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                        <span class="text-amber-600 font-medium whitespace-nowrap">If:</span>
                                        <span class="text-zinc-600 dark:text-zinc-400">${r.situation}</span>
                                        <span class="text-amber-600">→</span>
                                        <span class="font-medium italic">"${r.prompt}"</span>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}
                    
                    <!-- Red Flag Alerts -->
                    ${guide.redFlagAlerts ? `
                        <section class="mb-8 bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                            <h2 class="text-xl font-bold mb-4 text-red-800 dark:text-red-200">🚨 Red Flag Alerts</h2>
                            <p class="text-sm text-red-600 dark:text-red-400 mb-4">Watch for these - they indicate teachable moments</p>
                            <div class="space-y-3">
                                ${guide.redFlagAlerts.map(r => `
                                    <div class="p-3 bg-white dark:bg-zinc-800 rounded-lg border-l-4 border-red-500">
                                        <p class="font-medium">🚩 ${r.flag}</p>
                                        <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Teaching point: ${r.teaching}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}
                    
                    <!-- Discussion Triggers -->
                    ${guide.discussionTriggers ? `
                        <section class="mb-8">
                            <h2 class="text-xl font-bold mb-4">💬 Discussion Triggers</h2>
                            <div class="space-y-2">
                                ${guide.discussionTriggers.map(d => `
                                    <div class="flex items-start gap-4 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                                        <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs font-medium whitespace-nowrap">${d.moment}</span>
                                        <p class="italic">"${d.question}"</p>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}
                    
                    <!-- Debrief Questions -->
                    ${guide.debriefQuestions ? `
                        <section class="mb-8 bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                            <h2 class="text-xl font-bold mb-4 text-green-800 dark:text-green-200">🎤 Debrief Questions</h2>
                            <ol class="space-y-2 list-decimal list-inside">
                                ${guide.debriefQuestions.map(q => `<li class="text-green-700 dark:text-green-300">${q}</li>`).join('')}
                            </ol>
                        </section>
                    ` : ''}
                    
                    <!-- Poll Questions -->
                    ${guide.pollQuestions ? `
                        <section class="mb-8">
                            <h2 class="text-xl font-bold mb-4">📊 Poll Questions (for Engagement)</h2>
                            <div class="space-y-3">
                                ${guide.pollQuestions.map((p, i) => `
                                    <div class="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                                        <div class="flex items-center gap-2 mb-2">
                                            <span class="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">${i + 1}</span>
                                            <span class="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded">${p.type}</span>
                                        </div>
                                        <p class="font-medium">${p.question}</p>
                                        ${p.options ? `<p class="text-sm text-zinc-500 mt-1">Options: ${p.options.join(', ')}</p>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}
                    
                    <!-- Pathophysiology Handoff -->
                    ${guide.pathophysiologyHandoff ? `
                        <section class="mb-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
                            <h2 class="text-xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">🔬 ${guide.pathophysiologyHandoff.title}</h2>
                            <p class="text-sm text-indigo-600 dark:text-indigo-400 mb-4">For Thursday sessions or handoff to pathophysiology faculty</p>
                            <div class="space-y-4">
                                ${guide.pathophysiologyHandoff.topics.map(t => `
                                    <div class="p-4 bg-white dark:bg-zinc-800 rounded-lg">
                                        <h3 class="font-semibold text-indigo-700 dark:text-indigo-300">${t.topic}</h3>
                                        <p class="text-sm mt-1"><strong>Connection:</strong> ${t.connection}</p>
                                        <p class="text-sm text-zinc-500"><strong>Suggested depth:</strong> ${t.suggestedDepth}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}
                    
                </div>
            </div>
            </div>
        `;
    };
    
    // Print Facilitator Guide
    window.printFacilitatorGuide = function(weekKey) {
        const week = weeklyCases[weekKey];
        if (!week) return;
        
        const guide = week.facilitatorGuide;
        const spCase = week.spCase;
        
        const printContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${guide.title}</title>
                <style>
                    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; font-size: 11pt; }
                    h1 { font-size: 18pt; border-bottom: 2px solid #333; padding-bottom: 10px; }
                    h2 { font-size: 14pt; margin-top: 20px; background: #f0f0f0; padding: 8px; }
                    h3 { font-size: 12pt; margin-top: 15px; }
                    ul { margin: 10px 0; padding-left: 25px; }
                    li { margin: 5px 0; }
                    .two-col { display: flex; gap: 20px; }
                    .two-col > div { flex: 1; }
                    .highlight { background: #fffde7; padding: 10px; border-left: 4px solid #ffc107; margin: 10px 0; }
                    .box { border: 1px solid #ddd; padding: 10px; margin: 10px 0; }
                    table { width: 100%; border-collapse: collapse; margin: 10px 0; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background: #f5f5f5; }
                    @media print { body { padding: 0; } }
                </style>
            </head>
            <body>
                <h1>${guide.title}</h1>
                <p><strong>Chief Complaint:</strong> "${week.chiefComplaint}"</p>
                <p><strong>Actual Diagnosis:</strong> ${spCase.diagnosis}</p>
                
                <h2>Learning Objectives</h2>
                <ul>${week.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
                
                <h2>Opening Prompt</h2>
                <div class="highlight">"${guide.openingPrompt}"</div>
                
                <h2>Key Differential Diagnoses</h2>
                <div class="two-col">
                    <div class="box">
                        <h3>Common</h3>
                        <ul>${guide.keyDifferential.common.map(d => `<li>${d}</li>`).join('')}</ul>
                    </div>
                    <div class="box">
                        <h3>Must-Not-Miss</h3>
                        <ul>${guide.keyDifferential.mustNotMiss.map(d => `<li>${d}</li>`).join('')}</ul>
                    </div>
                </div>
                
                <h2>Key History to Obtain</h2>
                <ul>${guide.keyHistory.map(h => `<li>${h}</li>`).join('')}</ul>
                
                <h2>Hypothesis-Driven Prompts</h2>
                <table>
                    <tr><th>If you find...</th><th>Think...</th></tr>
                    ${guide.hypothesisDrivenPrompts.map(p => `<tr><td>${p.pattern}</td><td>${p.suggests}</td></tr>`).join('')}
                </table>
                
                <h2>Key Physical Exam</h2>
                <table>
                    <tr><th>Maneuver</th><th>Look For</th></tr>
                    ${guide.keyExamManeuvers.map(m => `<tr><td>${m.maneuver}</td><td>${m.lookFor}</td></tr>`).join('')}
                </table>
                
                <h2>Exam Findings Interpretation</h2>
                <table>
                    <tr><th>Finding</th><th>Suggests</th></tr>
                    ${guide.examFindingsInterpretation.map(f => `<tr><td>${f.finding}</td><td>${f.suggests}</td></tr>`).join('')}
                </table>
                
                <h2>Anatomy & Pathophysiology Tips</h2>
                <ul>${guide.anatomyPathophysiologyTips.map(t => `<li>${t}</li>`).join('')}</ul>
                
                <h2>Clinical Reasoning Pause</h2>
                <div class="highlight">
                    <strong>Prompt:</strong> "${guide.clinicalReasoningPause.prompt}"<br>
                    <strong>Expected:</strong> ${guide.clinicalReasoningPause.expectedAnswer}
                </div>
                
                <h2>Teaching Pearls</h2>
                <ul>${guide.teachingPearls.map(p => `<li>${p}</li>`).join('')}</ul>
                
                <h2>Closure Checklist</h2>
                <ul>${guide.closureChecklist.map(c => `<li>☐ ${c}</li>`).join('')}</ul>
            </body>
            </html>
        `;
        
        const printWindow = window.open('', '_blank');
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
    };

    // ================================================
    // INITIALIZATION
    // ================================================
    
    console.log('✅ ReasonDx Weekly Cases System loaded');
    console.log('   - Week 2: Epigastric Pain (GERD, Pancreatitis, Gastritis)');
    console.log('   - Pre-Work, Just-in-Time, SP Case variations');
    console.log('   - Facilitator Guide (in-app + printable)');
    
})();
