/**
 * ReasonDx Radiology Study — Case CHEST-001
 * Chest Pain with Cocaine Use → Coronary Vasospasm
 * Tests: Substance use history (cocaine specifically), sexual/social hx
 */

const CASE_CHEST001 = {
  caseId: "CHEST-001",
  title: "Acute Chest Pain in a Young Man",
  targetDiagnosis: "Cocaine-Induced Coronary Vasospasm",

  presentation: {
    patientName: "Marcus Johnson",
    age: 28,
    sex: "Male",
    ethnicity: "African American",
    occupation: "Construction worker",
    chiefComplaint: "Sudden severe chest pain for 2 hours",
    vitals: { temp: "98.9\u00B0F", hr: 118, bp: "168/102", rr: 22, spo2: "97%" },
    triageNote: "28-year-old male with acute onset severe substernal chest pain radiating to left arm. Diaphoretic in triage. ECG shows ST elevation in leads V1-V4."
  },

  patientScript: {
    identity: "Marcus Johnson, 28-year-old construction worker. Lives alone in an apartment. Single. Came to the ED by ambulance after chest pain started at a friend's house around 1 AM.",
    hpiOnset: "It hit me like a ton of bricks about 2 hours ago. I was at my buddy's place hanging out and suddenly got this crushing pain right in the middle of my chest. Worst pain I've ever felt.",
    hpiProgression: "It came on suddenly — went from zero to terrible in like a minute. It hasn't gotten better. It radiates down my left arm and up into my jaw a little.",
    hpiAssociatedSymptoms: "I'm sweating a lot. Felt nauseous, threw up once. Heart is racing. I feel like something really bad is happening. No shortness of breath really — it's the pain that's the problem.",
    hpiPrior: "Nothing like this has ever happened before. I've never had heart problems.",
    pmh: "No medical problems. Never been hospitalized except for a broken arm when I was a kid.",
    medications: "Nothing. No prescriptions.",
    allergies: "No allergies.",
    familyHistory: "Mom has high blood pressure. Dad left when I was young — don't know his medical history. Grandmother had diabetes.",

    socialSmokingAlcohol: "I smoke cigarettes — about half a pack a day for the last 5 years. I drink on weekends, maybe 4-6 beers.",

    // ── CRITICAL: Cocaine use — only if specifically asked ──
    substanceCocaine: "If asked specifically about cocaine, stimulants, or 'party drugs': 'Yeah... I did some coke tonight. At my friend's place. Maybe about an hour before the pain started. I don't do it all the time — maybe once or twice a month when I'm hanging out.' If asked about route: 'Snorted it.' If asked about amount: 'A few lines — I don't know exactly, maybe half a gram between us.'",
    substanceGeneral: "If asked 'do you use any drugs' or 'any recreational substances' without naming cocaine specifically: 'I smoke some weed here and there.' Does NOT volunteer cocaine unless cocaine, stimulants, uppers, or party drugs are specifically mentioned.",
    substanceIV: "No IV drug use ever.",

    socialOccupation: "Construction worker. Heavy lifting. No recent injuries. No chemical exposures beyond normal construction stuff.",
    socialTravel: "No recent travel.",
    socialContext: "If asked what he was doing when it started: 'Just hanging out at my friend's place. We were watching the game and... you know, just partying a little.' He's vague about activities unless directly asked about substances.",

    ros: "General: diaphoresis, anxious. CV: chest pain as described, palpitations. Respiratory: no dyspnea. GI: nausea, vomited once. Neuro: no headache, no focal symptoms. Psych: very anxious, scared."
  },

  physicalExam: {
    general: "Young male in significant distress, clutching his chest, diaphoretic, anxious-appearing.",
    heent: "Pupils mildly dilated bilaterally. Nasal mucosa mildly erythematous (if examiner checks). No pharyngeal lesion.",
    cardiovascular: "Tachycardic, regular rhythm. S4 gallop present. No murmurs. No JVD. No peripheral edema. Peripheral pulses 2+ and equal bilaterally.",
    respiratory: "Clear to auscultation bilaterally. No crackles. No wheezing. Normal respiratory effort.",
    abdomen: "Soft, nontender.",
    extremities: "No edema. No cyanosis. Diaphoretic skin.",
    skin: "Diaphoretic. No track marks. No rash."
  },

  labResults: {
    "CBC": "WBC 12.4, Hgb 15.8, Plt 220",
    "CMP": "Normal except glucose 142 (stress hyperglycemia)",
    "Troponin I (initial)": "0.18 ng/mL (mildly elevated — abnormal, concerning for myocardial injury)",
    "Troponin I (repeat 3h)": "1.24 ng/mL (rising — confirms myocardial injury)",
    "BNP": "45 pg/mL (normal)",
    "ECG": "Sinus tachycardia at 118 bpm. ST elevation V1-V4 (1.5-2mm). Reciprocal ST depression in II, III, aVF.",
    "Urine drug screen": "Positive for cocaine metabolites (benzoylecgonine), positive for THC",
    "D-dimer": "0.4 mg/L (normal)",
    "Coagulation": "PT/INR normal, PTT normal",
    "Lipid panel": "If ordered: Total cholesterol 198, LDL 128, HDL 38 (low), triglycerides 160"
  },

  radiologyReports: {
    imageUrl: "https://radiopaedia.org/cases/anterior-stemi-1",

    standard: "EXAMINATION: CT Coronary Angiography\n\nCLINICAL INDICATION: 28-year-old male with acute chest pain and ST elevation on ECG. Evaluate coronary arteries.\n\nTECHNIQUE: ECG-gated CTA of the coronary arteries with IV contrast.\n\nFINDINGS:\n\nCoronary Arteries: The left main coronary artery is normal in caliber. The left anterior descending artery (LAD) shows a focal segment of significant narrowing in the mid-vessel with an estimated 70-80% stenosis. No calcified plaque is identified. The vessel wall appears smooth without evidence of atherosclerotic disease proximal or distal to the stenotic segment. The left circumflex and right coronary arteries are normal in caliber without stenosis or plaque.\n\nCardiac Chambers: Normal cardiac chamber sizes. No pericardial effusion.\n\nAorta: Normal caliber aorta. No dissection.\n\nIMPRESSION:\n1. Focal high-grade stenosis of the mid-LAD without evidence of atherosclerotic plaque, calcification, or dissection. In the absence of atherosclerotic disease, the appearance is most consistent with coronary vasospasm.\n2. The differential includes coronary vasospasm (consider toxic/pharmacologic etiology), spontaneous coronary artery dissection (SCAD), coronary embolism, and myocardial bridging. Clinical correlation with substance use history and provocative testing may be helpful.\n3. No evidence of aortic dissection.\n\nDictated by: Dr. James Rivera, M.D. | Cardiovascular Imaging",

    simplified: "EXAMINATION: CT scan of the heart arteries\n\nWHY THIS TEST WAS DONE: To look at the heart arteries of a 28-year-old man with sudden severe chest pain and ECG changes suggesting a heart attack.\n\nWHAT WE FOUND:\n\nHeart Arteries: One of the main arteries that feeds the front of the heart (called the LAD) has a tight narrowing in the middle section. However, this narrowing does NOT look like typical heart disease — there is no cholite buildup (plaque) or calcium in the artery walls. The artery looks smooth and healthy everywhere else. The other heart arteries are completely normal.\n\nHeart and Aorta: Normal heart size. No fluid around the heart. The large artery leaving the heart (aorta) is normal — no tear or dissection.\n\nWHAT THIS MEANS:\n1. There is a tight narrowing in one heart artery, but it does not appear to be caused by the usual buildup of cholesterol and plaque that causes most heart attacks.\n2. When a young person has a heart artery spasm without plaque disease, the most common cause is the artery squeezing shut temporarily (vasospasm). This can be triggered by certain substances — including cocaine, amphetamines, and some medications. Other less common possibilities include a small tear inside the artery wall, a blood clot that traveled to the artery, or a structural variant where the artery dips into the heart muscle. It is very important to know whether the patient has used any stimulant drugs or substances that could cause the artery to spasm.\n3. No evidence of a tear in the aorta.\n\nDictated by: Dr. James Rivera, M.D. | Cardiovascular Imaging\n[Note: This is a plain-language version of the radiology report.]"
  },

  scoringCriteria: {
    criticalHistoryElements: ["cocaine use", "stimulant use", "timing of substance use relative to symptoms", "context of onset"],
    highScoreDiagnoses: ["cocaine-induced vasospasm", "coronary vasospasm", "cocaine MI"],
    reasonableDiagnoses: ["STEMI", "ACS", "myocarditis", "SCAD", "aortic dissection"],
    lowValueDiagnoses: ["GERD", "costochondritis", "anxiety"],
    expectedEvolution: {
      phase1: "ACS/STEMI, PE, aortic dissection reasonable. Vasospasm unlikely without history.",
      phase4: "If cocaine elicited: vasospasm rises dramatically. If only got 'smokes weed': stays as standard ACS.",
      phase6: "CTA showing focal stenosis WITHOUT plaque + UDS positive for cocaine = vasospasm. Student needs both pieces.",
      phase7: "Simplified report explicitly mentions cocaine as a cause of vasospasm."
    }
  },

  signals: {
    criticalHistory: ["cocaine use", "stimulant drugs", "context of onset", "what doing when started", "pupil dilation noticed"],
    criticalExam: ["pupil exam", "nasal exam", "cardiac auscultation S4", "blood pressure both arms"],
    criticalTests: ["ECG", "troponin serial", "urine drug screen", "CT coronary angiography"],
    cannotMiss: ["STEMI recognition on ECG", "aortic dissection rule-out", "substance use screening"],
    biasTraps: [
      "premature closure on standard STEMI without considering etiology",
      "attribution bias — 28-year-old 'too young for a heart attack'",
      "framing by ECG — ST elevation anchors on ACS protocol without asking WHY"
    ],
    patientCues: [
      { trigger: "at my friend's place", followUp: "what doing at friend's place", turnWindow: 3, significance: "Vague context at 1 AM = possible substance use" },
      { trigger: "just partying a little", followUp: "substance details", turnWindow: 2, significance: "'Partying' is a cue for substance use that requires follow-up" }
    ],
    simulatedBiases: [
      { type: "framing", description: "ECG showing STEMI activates a protocol-driven response", mechanism: "Student may jump to cath lab activation without considering the underlying etiology. In cocaine vasospasm, cath lab approach differs." },
      { type: "attribution", description: "28-year-old with no cardiac history", mechanism: "Student may not take the presentation seriously enough or may attribute it to anxiety in a young person" },
      { type: "prematureClosure", description: "STEMI on ECG = ACS, done thinking", mechanism: "Correct that it IS a STEMI, but the question is WHY. Cocaine vasospasm changes the management (benzodiazepines, NOT beta-blockers)." }
    ]
  },

  keywordMap: {
    "cocaine use": ["cocaine", "coke", "crack", "blow", "snow", "stimulant", "upper"],
    "stimulant drugs": ["stimulant", "amphetamine", "meth", "adderall", "speed", "upper"],
    "context of onset": ["what were you doing", "what happened before", "how did it start", "at friend"],
    "what doing when started": ["doing when", "where were you", "what happened", "tell me about when"],
    "pupil exam": ["pupil", "eyes", "dilat"],
    "nasal exam": ["nose", "nasal", "nares", "septum", "nostril"],
    "cardiac auscultation S4": ["heart sounds", "auscultate", "gallop", "S4", "listen.*heart"],
    "ECG": ["ecg", "ekg", "electrocardiogram", "rhythm strip"],
    "troponin serial": ["troponin", "serial troponin", "repeat troponin", "trop"],
    "urine drug screen": ["uds", "drug screen", "tox screen", "drug test", "urine drug"],
    "CT coronary angiography": ["cta", "coronary ct", "ct angio", "heart ct"]
  },

  management: {
    criticalActions: ["Benzodiazepines (first-line for cocaine vasospasm)", "Nitroglycerin for ongoing chest pain", "Aspirin", "Serial troponins", "Cardiology consult", "Substance use counseling referral", "Avoid beta-blockers (can worsen vasospasm via unopposed alpha)"],
    dangerousActions: ["Beta-blockers (metoprolol, atenolol) — CONTRAINDICATED in cocaine-induced vasospasm, can cause unopposed alpha-stimulation and worsen coronary spasm and hypertension", "Discharge without addressing cocaine use", "Standard STEMI pathway (cath lab activation) without considering vasospasm etiology — PCI approach differs"],
    dispositionCorrect: "Admit to telemetry/CCU. Cardiology consult. If troponin rising and ST changes persist despite benzodiazepines and nitrates, consider cath.",
    patientEducation: ["Explain that cocaine caused the heart event", "Any future cocaine use could cause another or fatal event", "Substance use treatment referral", "Cardiac follow-up"]
  },
  patientPushback: [{ trigger: "cocaine.*stop|quit.*coke|never.*again|substance.*counsel", patientResponse: "I only do it once in a while at parties. It's not like I'm addicted. This was just bad luck, right?", teachingPoint: "Motivational interviewing: the patient minimizes use and externalizes causation. Explain the dose-response isn't linear — vasospasm can happen with any use. Avoid judgment while being direct about the risk.", evaluationCriteria: "Non-judgmental? Addressed minimization? Explained that even occasional use carries cardiac risk?" },
  { trigger: "tell.*family|contact.*someone|who.*know", patientResponse: "Please don't tell my mom about the cocaine. She doesn't know I use. She'll lose it.", teachingPoint: "Confidentiality: student should reassure that medical information is confidential. However, if the patient asks for help connecting with family, facilitate. This is a teachable moment about patient autonomy and disclosure.", evaluationCriteria: "Reassured about confidentiality? Respected autonomy?" }],
  radiologistReread: [{ requiredHistory: ["cocaine use"], response: "With the history of recent cocaine use, the focal LAD stenosis without atherosclerotic plaque is most consistent with coronary vasospasm. This is a well-described complication of cocaine. Standard PCI may not be indicated — medical management with benzodiazepines and nitrates is first-line. Importantly, beta-blockers are contraindicated." }],
  caseDepth: { v2: { title: "CHEST-001 v2: 6 Hours — Troponin Peak", scenario: "Troponin peaked at 8.4. ST changes resolved after benzodiazepines and nitrates. Echo shows anterior wall hypokinesis. Student must manage post-MI care in a cocaine user.", testsFocus: "Post-MI management without beta-blockers, substance use counseling, follow-up plan" }, v3: { title: "CHEST-001 v3: Outpatient Follow-Up", scenario: "2 weeks later. Marcus reports he hasn't used cocaine since. Echo shows improved wall motion. Student must address secondary prevention in a young patient.", testsFocus: "Secondary prevention, ongoing cessation, cardiac rehab referral" } },
  returnVisit: { recommendedInterval: "1 week", preStudyTopics: ["Cocaine cardiovascular effects", "Beta-blocker contraindication in stimulant use", "Vasospasm vs atherosclerotic ACS"], postStudyCase: "DYS-002", measurementFocus: "Does student ask about stimulant use in next substance-related case?" },

  nearMisses: [
    {
      id: "WEED_NOT_COCAINE",
      category: "History — Near Miss",
      triggers: ["weed", "marijuana", "cannabis"],
      whatStudentDid: "Asked about drug use but accepted 'I smoke weed' without probing for stimulants",
      whatWasMissed: "Cocaine use — the specific substance causing the vasospasm. The patient volunteers marijuana but withholds cocaine unless specifically asked.",
      teachingPoint: "When a young patient presents with chest pain after 'partying,' always ask specifically about stimulants: cocaine, amphetamines, energy drinks, pre-workout supplements. Patients frequently minimize or omit stimulant use unless directly asked."
    },
    {
      id: "STEMI_NO_ETIOLOGY",
      category: "Clinical Reasoning — Near Miss",
      triggers: ["stemi", "cath lab", "pci", "catheter", "angioplasty"],
      whatStudentDid: "Correctly identified STEMI but jumped to standard ACS management without considering the etiology",
      whatWasMissed: "In a 28-year-old without cardiac risk factors, STEMI has a different differential than in a 65-year-old. Coronary vasospasm from cocaine requires different management — benzodiazepines and nitrates, NOT beta-blockers (which can worsen vasospasm).",
      teachingPoint: "STEMI in a young patient without traditional risk factors should always prompt the question: why is this happening? Cocaine vasospasm, SCAD, myocarditis, and anomalous coronary anatomy are all on the differential and each has different management."
    }
  ]
};

if (typeof module !== 'undefined') module.exports = { CASE_CHEST001 };
