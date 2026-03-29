/**
 * ReasonDx Radiology Study — Case DYS-001
 * Dyspnea with Bird Exposure → Hypersensitivity Pneumonitis
 * 
 * This case data is loaded by the orchestrator. The student never sees it.
 */

const CASE_DYS001 = {
  caseId: "DYS-001",
  title: "Progressive Dyspnea",
  targetDiagnosis: "Hypersensitivity Pneumonitis",

  presentation: {
    patientName: "Maria Reyes",
    age: 42,
    sex: "Female",
    ethnicity: "Hispanic",
    occupation: "Elementary school librarian",
    chiefComplaint: "Progressive shortness of breath for 6 weeks",
    vitals: {
      temp: "99.1\u00B0F", hr: 88, bp: "122/78", rr: 20, spo2: "94%"
    },
    triageNote: "Patient reports worsening dyspnea over 6 weeks, now occurring with mild exertion. Denies chest pain. Has a dry cough."
  },

  // ── PATIENT SCRIPT ──
  // Keyed by topic. The orchestrator injects this into the system prompt
  // ONLY during Phase 3 (history-taking).
  patientScript: {
    identity: "Maria Reyes, 42-year-old Hispanic woman. Elementary school librarian. Lives in a single-family home with husband and two children (ages 10 and 14). Originally from Texas, lived in current city 12 years.",

    hpiOnset: "Shortness of breath started about 6 weeks ago, maybe a little more. Gradually getting worse. At first just climbing stairs, now walking across a room.",
    hpiProgression: "Steadily worse over time. Pretty constant whenever up and moving. Better when sitting still.",
    hpiCough: "Dry cough, nothing comes up. Persistent, especially at night. Really annoying.",
    hpiAssociatedSymptoms: "No chest pain. No wheezing. No blood in cough. No leg swelling. Mild fatigue. Sometimes feels flushed in the evenings but would not call it a real fever. No chills. No night sweats. No weight loss.",
    hpiLocationPattern: "If asked whether symptoms are better or worse in certain places: 'You know, I think I do feel a little better when I am at work or out running errands, but I just figured it is because I am distracted.'",

    pmh: "No significant medical history. No prior lung disease. No asthma as a child. No surgeries. No hospitalizations.",
    medications: "Occasional ibuprofen for headaches. Multivitamin. No prescription medications.",
    allergies: "No known drug allergies.",
    familyHistory: "Mother has type 2 diabetes. Father had a heart problem, stent placed at age 62. No family history of lung disease or cancer.",

    socialSmokingAlcohol: "Never smoker. No vaping. No recreational drugs. Glass of wine once or twice a week.",
    socialOccupation: "Elementary school librarian. Has been doing it for years, enjoys it.",
    socialTravel: "No recent travel.",

    // ── CRITICAL: ONLY REVEALED IF SPECIFICALLY ASKED ──
    environmentalBirds: "If asked about pets: 'Yes! I have birds \u2014 cockatiels and parakeets. I love them. I have a little aviary set up in our sunroom. I have had them for a few years, and I just got four new cockatiels about two months ago.' If asked about temporal relationship: 'Hmm... now that you mention it, the breathing trouble started maybe a couple weeks after I got the new birds. I had not really connected those things.'",
    environmentalHome: "If asked about home generally (not pets): 'We have a nice house, three bedrooms. I spend a lot of time in the living room and sunroom in the evenings.' Do NOT mention birds unless pets specifically asked about.",
    environmentalHobbies: "If asked about hobbies: 'I like reading, and I take care of my birds \u2014 that is my relaxation time.'",
    environmentalMoldDust: "If asked about mold, chemicals, dust at home: 'No, nothing like that. Our house is pretty clean and well-maintained.'",
    environmentalRecentChanges: "If asked about recent changes at home: 'Well, I did set up a bigger aviary in the sunroom about two months ago when I got the new birds. Other than that, nothing has changed.'",

    ros: "General: mild fatigue, occasional low-grade fever. HEENT: no sinus congestion, no sore throat. CV: no chest pain, no palpitations, no edema. Respiratory: dyspnea on exertion, dry cough, no wheezing, no hemoptysis. GI: normal. MSK: no joint pain. Neuro: no headaches, no dizziness. Skin: no rash. Psych: anxious about symptoms, sleep occasionally disrupted by coughing."
  },

  // ── PHYSICAL EXAM ──
  physicalExam: {
    general: "Alert, mildly anxious, in no acute distress. Speaking in full sentences but pauses to catch her breath after long responses.",
    heent: "Normal. No lymphadenopathy. No JVD.",
    cardiovascular: "Regular rate and rhythm. No murmurs. No gallops. No peripheral edema.",
    respiratory: "Bilateral inspiratory crackles, most prominent at the mid-lung zones and bases. No wheezing. Slightly decreased breath sounds at bases bilaterally. No dullness to percussion. Symmetric chest expansion.",
    abdomen: "Soft, nontender, no organomegaly.",
    extremities: "No clubbing. No cyanosis. No edema.",
    skin: "No rash."
  },

  // ── LAB RESULTS (only provided if ordered) ──
  labResults: {
    "CBC": "WBC 9.2 (normal differential, eosinophils 2%), Hgb 13.8, Plt 245",
    "CMP": "All within normal limits",
    "ESR": "38 mm/hr (mildly elevated)",
    "CRP": "2.4 mg/dL (mildly elevated)",
    "BNP": "45 pg/mL (normal)",
    "D-dimer": "0.3 mg/L (normal)",
    "ABG": "pH 7.43, pCO2 36, pO2 72, HCO3 24 (mild hypoxemia)",
    "Procalcitonin": "0.08 ng/mL (normal)",
    "ANA": "Negative",
    "RF": "Negative",
    "Serum precipitins/IgG to avian antigens": "Strongly positive",
    "Serum IgE": "165 kU/L (mildly elevated)",
    "PFTs": "FVC 72% predicted, FEV1 74% predicted, FEV1/FVC ratio normal, DLCO 58% predicted (restrictive pattern with reduced diffusion capacity)"
  },

  // ── RADIOLOGY ──
  radiologyReports: {
    imageUrl: "https://radiopaedia.org/cases/hypersensitivity-pneumonitis",

    standard: `EXAMINATION: CT Chest without contrast, high-resolution protocol

CLINICAL INDICATION: 42-year-old female with 6-week history of progressive dyspnea and dry cough. Evaluate for interstitial lung disease.

TECHNIQUE: Helical acquisition through the thorax without intravenous contrast. 1.25 mm axial reconstructions using a high-spatial-frequency (bone) algorithm. Prone and expiratory phase images were obtained.

COMPARISON: None available.

FINDINGS:

Lungs and Airways: There are diffuse, bilateral, poorly defined centrilobular ground-glass opacities with relative sparing of the subpleural regions. The findings are most prominent in the mid and upper lung zones, though scattered involvement of the lower lobes is also present. Patchy areas of mosaic attenuation are identified, suggesting a combination of infiltrative process and small airway disease. Expiratory phase images demonstrate multifocal lobular air trapping predominantly in the lower lobes bilaterally. No discrete pulmonary nodules or masses are identified. No consolidation. No honeycombing. No traction bronchiectasis. The airways are patent without endobronchial lesion.

Pleura: No pleural effusion or pneumothorax. No pleural thickening.

Mediastinum and Hila: No mediastinal or hilar lymphadenopathy. The heart is normal in size. The thoracic aorta and great vessels are unremarkable. No pericardial effusion.

Chest Wall and Osseous Structures: No aggressive osseous lesion. No chest wall abnormality.

Upper Abdomen (limited): No abnormality identified in the visualized upper abdomen.

IMPRESSION:
1. Diffuse bilateral centrilobular ground-glass opacities with subpleural sparing and mosaic attenuation, in combination with lobular air trapping on expiratory imaging. The pattern and distribution are suggestive of a peribronchovascular infiltrative process with associated small airway disease.
2. The differential diagnosis for this constellation of findings includes hypersensitivity pneumonitis, respiratory bronchiolitis-associated interstitial lung disease (RB-ILD), sarcoidosis, and atypical infection. Clinical correlation with exposure history is recommended.
3. No evidence of pulmonary embolism, pleural disease, or lymphadenopathy.

Dictated by: Dr. Amanda Chu, M.D. | Thoracic Radiology`,

    simplified: `EXAMINATION: CT scan of the chest (detailed/high-resolution)

WHY THIS TEST WAS DONE: To look at the lungs more closely in a 42-year-old woman who has had worsening shortness of breath and a dry cough for 6 weeks.

HOW IT WAS DONE: A detailed CT scan of the chest was done without contrast dye. Special thin-slice images were taken, including images with the patient lying face-down and images taken during breathing out, to get the best look at the lung tissue and small airways.

COMPARISON: No prior imaging available.

WHAT WE FOUND:

Lungs and Breathing Tubes: Both lungs show widespread hazy, cloudy areas that are centered around the small airways (not at the edges of the lungs). These cloudy patches are most noticeable in the middle and upper parts of the lungs but are present throughout. In some areas, patches of normal-looking lung sit right next to these cloudy areas, creating a patchwork appearance. When the patient breathed out, several areas of lung did not deflate properly \u2014 this means air is getting trapped in parts of the small airways. No solid lumps, masses, or areas of scarring were seen. The main breathing tubes look normal.

Lining Around the Lungs: No fluid or air around the lungs. No thickening of the lung lining.

Center of the Chest: No enlarged lymph nodes. The heart is normal size. The major blood vessels look normal. No fluid around the heart.

Chest Wall and Bones: Normal.

WHAT THIS MEANS:
1. Both lungs show a pattern of cloudiness centered around the small airways, with some areas of trapped air. This pattern can be caused by several things, and doctors will need to consider the patient's full medical history and any exposures (at home or work) to figure out the most likely cause.
2. Possible causes for this pattern include: an allergic reaction in the lungs to something breathed in (such as mold, chemicals, or animal proteins), a smoking-related lung condition, an immune-system condition called sarcoidosis, or an unusual type of lung infection. The patient's history of what they have been exposed to is very important for narrowing this down.
3. No signs of blood clots in the lungs, fluid around the lungs, or enlarged lymph nodes.

Dictated by: Dr. Amanda Chu, M.D. | Thoracic Radiology
[Note: This is a plain-language version of the radiology report intended to improve understanding. The original technical report is also available.]`
  },

  // ── SCORING CRITERIA ──
  scoringCriteria: {
    criticalHistoryElements: ["pets", "birds", "home environment", "hobbies", "occupational exposures", "symptom location pattern"],
    highScoreDiagnoses: ["hypersensitivity pneumonitis", "HP"],
    reasonableDiagnoses: ["sarcoidosis", "atypical pneumonia", "ILD", "interstitial lung disease", "asthma", "PE"],
    lowValueDiagnoses: ["COPD", "heart failure", "anemia"],
    expectedEvolution: {
      phase1: "Broad differential: asthma, pneumonia, PE, CHF, COPD are all reasonable. HP should be absent.",
      phase4: "If bird exposure elicited: HP should appear. If not: differential remains broad, sarcoidosis may appear.",
      phase6: "After imaging: HP should rise to top if exposure known. If exposure missed: sarcoidosis or atypical infection likely top.",
      phase7: "Simplified report may trigger awareness of exposure categories even if missed in history."
    }
  },

  // ── UNIVERSAL SIGNAL SCHEMA ──
  // Read by RdxAgent.SignalExtractor — defines WHAT to track for this case
  signals: {
    criticalHistory: [
      "pets", "home environment", "hobbies", "occupational exposures",
      "symptom location pattern", "recent home changes",
      "smoking", "medications", "family history lung disease"
    ],
    criticalExam: [
      "lung auscultation", "cardiac exam", "extremities clubbing", "JVD"
    ],
    criticalTests: [
      "HRCT chest", "serum precipitins", "PFTs", "CBC", "ESR or CRP"
    ],
    cannotMiss: [
      "SpO2 interpretation", "exposure history integration", "bilateral crackles significance"
    ],
    biasTraps: [
      "radiology report anchoring",
      "premature closure on asthma",
      "framing by chief complaint (dyspnea = pulmonary only)",
      "availability bias toward common diagnoses"
    ],
    patientCues: [
      {
        trigger: "better when I'm at work or out running errands",
        followUp: "symptom location pattern",
        turnWindow: 3,
        significance: "Location-dependent symptoms suggest environmental trigger at home"
      },
      {
        trigger: "flushed in the evenings",
        followUp: "fever pattern",
        turnWindow: 2,
        significance: "Evening flushing may indicate antigenic exposure during daytime with delayed response"
      }
    ],
    simulatedBiases: [
      {
        type: "framing",
        description: "Chief complaint is 'progressive shortness of breath' — primes pulmonary-only thinking",
        mechanism: "Student may not consider cardiac, hematologic, or environmental causes"
      },
      {
        type: "attribution",
        description: "42-year-old healthy woman with no PMH — may lead to anchoring on benign diagnoses",
        mechanism: "Student may dismiss the severity because the patient 'looks healthy'"
      },
      {
        type: "representativeness",
        description: "HP is uncommon and not a textbook presentation most students have memorized",
        mechanism: "Student expects common diseases to present commonly — may not consider HP even with exposure history"
      }
    ]
  },

  // ── KEYWORD MAP ──
  // Maps signal names to regex-matchable keywords for the fast extraction layer
  keywordMap: {
    "pets": ["pet", "pets", "animal", "animals", "dog", "cat", "bird", "parrot", "cockatiel", "parakeet"],
    "home environment": ["home", "house", "living", "room", "apartment", "where do you live"],
    "hobbies": ["hobby", "hobbies", "free time", "leisure", "fun", "relax", "spare time", "activities"],
    "occupational exposures": ["exposure", "exposed", "mold", "dust", "chemical", "fume", "inhale", "breathe in", "work environment"],
    "symptom location pattern": ["better", "worse", "certain place", "location", "at home", "at work", "when you leave"],
    "recent home changes": ["change", "new", "recent", "different", "renovation", "moved"],
    "smoking": ["smoke", "smoking", "cigarette", "vape", "vaping", "tobacco"],
    "medications": ["medication", "medicine", "pill", "prescription", "drug", "supplement"],
    "family history lung disease": ["family", "relative", "parent", "lung disease", "asthma in family"],
    "lung auscultation": ["listen", "auscultate", "lung exam", "breath sounds", "stethoscope"],
    "cardiac exam": ["heart", "cardiac", "murmur", "gallop", "JVD"],
    "extremities clubbing": ["clubbing", "fingers", "nails", "extremities"],
    "JVD": ["JVD", "jugular", "neck veins"],
    "HRCT chest": ["ct", "hrct", "chest ct", "cat scan", "imaging", "scan"],
    "serum precipitins": ["precipitin", "avian antibod", "IgG to avian", "bird antibod"],
    "PFTs": ["pft", "pulmonary function", "spirometry", "diffusion capacity", "DLCO"],
    "CBC": ["cbc", "blood count", "white count", "hemoglobin"],
    "ESR or CRP": ["esr", "sed rate", "crp", "inflammatory markers"]
  },

  // ── NEAR-MISS PATTERNS ──
  nearMisses: [
    {
      id: "ALLERGEN_NOT_BIRDS",
      category: "History — Near Miss",
      triggers: ["allerg", "dust", "mold", "chemical"],
      whatStudentDid: "Asked about allergens or environmental irritants but not specifically about pets or animals",
      whatWasMissed: "Bird exposure — the specific antigen source. Asking about 'mold' or 'dust' gets a negative answer. The student was thinking environmentally but not broadly enough.",
      teachingPoint: "When screening for environmental triggers, ask about ALL living things in the home — not just chemicals and irritants. Pets, especially birds, are a common and underrecognized cause of hypersensitivity pneumonitis."
    },
    {
      id: "ILD_NO_EXPOSURE",
      category: "Clinical Reasoning — Near Miss",
      triggers: ["interstitial", "ild", "pulmonary fibrosis", "ground.glass"],
      whatStudentDid: "Recognized the ILD pattern from imaging but did not connect it to exposure history",
      whatWasMissed: "The critical step of correlating the imaging pattern with a specific environmental exposure. Naming ILD as a category without exploring causation leaves the differential incomplete.",
      teachingPoint: "When you identify an ILD pattern, your next question should always be: what is the cause? The major ILD categories — exposure-related, autoimmune, idiopathic, smoking-related — each have different histories to pursue."
    },
    {
      id: "TEMPORAL_MISSED",
      category: "History — Near Miss",
      triggers: ["when did", "how long", "timeline", "started", "gradual"],
      whatStudentDid: "Asked about symptom onset and progression but did not correlate timing with any environmental change",
      whatWasMissed: "The temporal relationship between getting new birds (~8 weeks ago) and symptom onset (~6 weeks ago). Establishing temporal correlations between environmental changes and symptom onset is a fundamental epidemiologic reasoning skill.",
      teachingPoint: "When symptoms have a clear onset, always ask: what changed around that time? New medications, new exposures, new environment, travel, illness in contacts. The temporal correlation is often the strongest diagnostic clue."
    }
  ]
};

if (typeof module !== 'undefined') module.exports = { CASE_DYS001 };
