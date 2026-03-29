/**
 * ReasonDx Radiology Study — Case DYS-002
 * Dyspnea with Vaping → E-cigarette/Vaping-Associated Lung Injury (EVALI)
 * Tests: Substance use history (vaping specifically)
 */

const CASE_DYS002 = {
  caseId: "DYS-002",
  title: "Acute Dyspnea in a Young Adult",
  targetDiagnosis: "EVALI (E-cigarette/Vaping-Associated Lung Injury)",

  presentation: {
    patientName: "Tyler Brooks",
    age: 22,
    sex: "Male",
    ethnicity: "Caucasian",
    occupation: "College senior, part-time barista",
    chiefComplaint: "Worsening shortness of breath and cough for 10 days",
    vitals: { temp: "100.8\u00B0F", hr: 110, bp: "118/72", rr: 24, spo2: "89%" },
    triageNote: "22-year-old male with 10 days of progressive dyspnea, productive cough, and subjective fevers. Reports feeling 'terrible' for the past week. No improvement with OTC medications."
  },

  patientScript: {
    identity: "Tyler Brooks, 22-year-old college senior at a local university. Works part-time at a coffee shop. Lives in a shared apartment with two roommates. Active, plays intramural basketball.",
    hpiOnset: "Started about 10 days ago. At first thought it was just a cold — runny nose, scratchy throat. But the cough got worse, and now I can barely walk to the bathroom without getting winded.",
    hpiProgression: "Getting worse every day. The cough started dry but now sometimes I bring up a little bit of whitish stuff. I've had fevers on and off — I've been taking Tylenol but it keeps coming back.",
    hpiCough: "Cough is pretty constant. Sometimes I cough so hard I feel like I'm going to throw up. It's worse when I lie down.",
    hpiAssociatedSymptoms: "Really short of breath with any activity. Chest feels tight. Had some nausea and threw up twice yesterday. Lost about 5 pounds this week because I have no appetite. Night sweats the last few nights — I've been soaking my sheets. No hemoptysis. Some diarrhea the last 2 days.",
    hpiLocationPattern: "Symptoms are constant regardless of location.",
    pmh: "No significant medical history. Had his appendix out at age 14. No chronic conditions.",
    medications: "Just ibuprofen and Tylenol for the fevers. No prescriptions.",
    allergies: "No known allergies.",
    familyHistory: "Mom has asthma. Dad is healthy. No family history of lung disease or cancer.",
    socialSmokingAlcohol: "If asked about smoking: 'No, I don't smoke cigarettes.' If asked about alcohol: 'Yeah, I drink on weekends — probably 4-5 beers on a Saturday night.'",

    // ── CRITICAL: ONLY REVEALED IF SPECIFICALLY ASKED ──
    substanceVaping: "If asked specifically about vaping or e-cigarettes: 'Oh, yeah — I vape. I've been vaping nicotine for about 2 years, but a buddy of mine started getting THC cartridges from a guy he knows. I've been using those for about 3 months. They're way cheaper than the dispensary ones.' If asked about the cartridges specifically: 'I don't really know the brand. My friend gets them from someone — they come in these little gold and black packages. I use them pretty much every day.' If asked about temporal relationship: 'I mean, I've been using them for a while now without problems. But I did switch to a new batch maybe 2-3 weeks ago.'",
    substanceDrugs: "If asked about recreational drugs generally (not vaping specifically): 'I smoke weed sometimes.' Does NOT volunteer the vaping/THC cartridge info unless e-cigarettes, vaping, or cartridges are specifically mentioned.",
    substanceIVDrugs: "No IV drug use. No cocaine. No heroin.",

    socialOccupation: "College senior. Works part-time at a coffee shop. No chemical or dust exposures at work.",
    socialTravel: "No recent travel. Spring break was 2 months ago — went to Miami but that was before any of this.",
    socialLiving: "Lives in an apartment with two roommates. No pets. No mold issues that he knows of.",
    socialSexual: "If asked: In a relationship, one partner. No STIs.",

    ros: "General: fatigue, weight loss 5 lbs, night sweats, poor appetite. HEENT: mild sore throat initially, resolved. CV: no chest pain, palpitations, or edema. Respiratory: dyspnea on exertion progressing to rest, productive cough, no hemoptysis. GI: nausea, vomiting x2, some diarrhea. MSK: body aches. Neuro: no headaches. Skin: no rash. Psych: anxious, worried this isn't getting better."
  },

  physicalExam: {
    general: "Ill-appearing young male, sitting upright, mildly tachypneic, speaking in short phrases. Appears fatigued.",
    heent: "Dry mucous membranes. No pharyngeal erythema. No lymphadenopathy.",
    cardiovascular: "Tachycardic, regular rhythm. No murmurs. No JVD. No peripheral edema.",
    respiratory: "Diffuse bilateral crackles, more prominent at bases. No wheezing. Decreased breath sounds bilaterally. Tachypneic at rest. Using accessory muscles.",
    abdomen: "Soft, mildly tender diffusely, no rebound or guarding. Normal bowel sounds.",
    extremities: "No clubbing. No cyanosis at rest but desaturates to 84% with ambulation.",
    skin: "No rash. Warm and dry."
  },

  labResults: {
    "CBC": "WBC 14.8 with left shift (85% neutrophils), Hgb 15.2, Plt 190",
    "CMP": "Na 131 (low), K 3.8, BUN 22, Cr 1.1, AST 52 (mildly elevated), ALT 48 (mildly elevated), albumin 3.2 (low)",
    "ESR": "68 mm/hr (elevated)",
    "CRP": "12.4 mg/dL (markedly elevated)",
    "Procalcitonin": "0.15 ng/mL (low-normal — argues against bacterial pneumonia)",
    "D-dimer": "0.8 mg/L (mildly elevated)",
    "ABG": "pH 7.46, pCO2 30, pO2 58, HCO3 22 (significant hypoxemia with respiratory alkalosis)",
    "Blood cultures": "Pending — ultimately negative at 48 hours",
    "Respiratory viral panel": "Negative (no influenza, RSV, COVID, adenovirus)",
    "HIV": "Negative",
    "Urine drug screen": "Positive for THC",
    "Lipid-laden macrophages in BAL": "If ordered: Present — highly suggestive of EVALI"
  },

  radiologyReports: {
    imageUrl: "https://radiopaedia.org/cases/e-cigarette-or-vaping-product-use-associated-lung-injury-evali-1",

    standard: "EXAMINATION: CT Chest without contrast, high-resolution protocol\n\nCLINICAL INDICATION: 22-year-old male with 10-day history of progressive dyspnea, cough, and fever. Evaluate for pneumonia vs other infiltrative process.\n\nTECHNIQUE: Helical acquisition through the thorax without IV contrast. 1.25 mm axial reconstructions.\n\nCOMPARISON: None available.\n\nFINDINGS:\n\nLungs and Airways: Diffuse bilateral ground-glass opacities predominantly in the lower lobes with relative subpleural sparing. Scattered areas of consolidation are noted in the dependent portions of both lower lobes. No cavitation. No discrete nodules or masses. The airways are patent. There is mild peribronchial thickening suggesting an inflammatory component.\n\nPleura: Small bilateral pleural effusions.\n\nMediastinum and Hila: No mediastinal or hilar lymphadenopathy. Heart is normal in size.\n\nIMPRESSION:\n1. Diffuse bilateral ground-glass opacities with lower-lobe predominance and subpleural sparing, with dependent consolidation and small bilateral effusions.\n2. The differential diagnosis includes organizing pneumonia, acute eosinophilic pneumonia, diffuse alveolar damage, hypersensitivity pneumonitis, and atypical infection (including PCP in an immunocompromised host). Clinical correlation with exposure history and immune status is recommended.\n3. If clinical suspicion warrants, bronchoscopy with BAL may be considered.\n\nDictated by: Dr. Amanda Chu, M.D. | Thoracic Radiology",

    simplified: "EXAMINATION: CT scan of the chest (detailed)\n\nWHY THIS TEST WAS DONE: To look at the lungs of a 22-year-old man with worsening shortness of breath, cough, and fever for 10 days.\n\nHOW IT WAS DONE: A detailed CT scan was done without contrast dye.\n\nWHAT WE FOUND:\n\nLungs: Both lungs show widespread hazy, cloudy areas (ground-glass pattern), mostly in the lower parts of the lungs. The edges of the lungs near the chest wall are relatively spared. Some areas in the lower lungs show denser patches where the lung tissue is more solidly filled in. No holes or cavities in the lungs. The breathing tubes show some thickening from inflammation.\n\nLining Around the Lungs: Small amounts of fluid around both lungs.\n\nCenter of Chest: Normal. Heart is normal size. No enlarged lymph nodes.\n\nWHAT THIS MEANS:\n1. Both lungs are inflamed with a pattern that could have several causes. The pattern of cloudiness with sparing at the lung edges and fluid around the lungs suggests an acute inflammatory or toxic process.\n2. Possible causes include: an unusual type of pneumonia (organizing pneumonia), an allergic-type lung reaction (eosinophilic pneumonia), lung damage from an inhaled toxic substance, a reaction to something breathed in (hypersensitivity pneumonitis), or an infection in someone with a weakened immune system. The patient's history of what they have been exposed to or inhaled is critical for determining the cause.\n3. A procedure called bronchoscopy (putting a small camera into the airways to collect samples) may help determine the cause.\n\nDictated by: Dr. Amanda Chu, M.D. | Thoracic Radiology\n[Note: This is a plain-language version of the radiology report.]"
  },

  scoringCriteria: {
    criticalHistoryElements: ["vaping", "THC cartridges", "e-cigarette", "substance use details", "black market cartridges"],
    highScoreDiagnoses: ["EVALI", "vaping lung injury", "e-cigarette lung injury"],
    reasonableDiagnoses: ["pneumonia", "atypical pneumonia", "eosinophilic pneumonia", "organizing pneumonia", "PCP"],
    lowValueDiagnoses: ["COPD", "asthma exacerbation", "heart failure"],
    expectedEvolution: {
      phase1: "Pneumonia, PE, and atypical infection reasonable. EVALI should be absent unless student asks about vaping early.",
      phase4: "If vaping/THC elicited: EVALI should appear prominently. If student only got 'smokes weed sometimes': may not connect to lung injury.",
      phase6: "CT pattern + negative procalcitonin + negative viral panel should push away from simple infection. EVALI requires the vaping history.",
      phase7: "Simplified report mentions 'inhaled toxic substance' which may prompt vaping inquiry."
    }
  },

  signals: {
    criticalHistory: ["vaping", "e-cigarette use", "THC cartridges", "substance use details", "black market products", "recreational drugs"],
    criticalExam: ["lung auscultation", "accessory muscle use", "ambulatory desaturation"],
    criticalTests: ["CT chest", "procalcitonin", "respiratory viral panel", "urine drug screen", "BAL"],
    cannotMiss: ["SpO2 89% interpretation", "accessory muscle use", "ambulatory desaturation significance"],
    biasTraps: [
      "radiology report anchoring",
      "premature closure on community-acquired pneumonia",
      "attribution bias — young healthy male, 'probably just a bad cold'",
      "satisfaction of search — UDS positive for THC but student doesn't probe further"
    ],
    patientCues: [
      { trigger: "I smoke weed sometimes", followUp: "vaping", turnWindow: 3, significance: "Patient admits to marijuana but does not volunteer the vaping/cartridge route. Student must specifically ask about delivery method." },
      { trigger: "soaking my sheets", followUp: "night sweats significance", turnWindow: 2, significance: "Night sweats + weight loss + respiratory symptoms in a young person — should broaden differential beyond simple infection." }
    ],
    simulatedBiases: [
      { type: "attribution", description: "22-year-old male, 'probably just pneumonia'", mechanism: "Student may not pursue thorough substance history in a young healthy-appearing male" },
      { type: "satisfactionOfSearch", description: "UDS positive for THC — student may stop there", mechanism: "Finding THC on drug screen may satisfy the student without probing HOW the THC is consumed (smoking vs vaping vs edibles)" },
      { type: "framing", description: "Chief complaint sounds like pneumonia", mechanism: "10-day cough with fever frames as infectious — student may not consider toxic/inhalational cause" }
    ]
  },

  keywordMap: {
    "vaping": ["vape", "vaping", "e-cig", "juul", "pod", "e-cigarette", "electronic cigarette"],
    "e-cigarette use": ["vape", "vaping", "e-cig", "juul", "pod", "cart", "cartridge"],
    "THC cartridges": ["thc", "cart", "cartridge", "concentrate", "dab", "wax", "oil"],
    "substance use details": ["drug", "substance", "recreational", "marijuana", "weed", "cannabis"],
    "black market products": ["black market", "street", "not from dispensary", "friend", "dealer", "cheap"],
    "recreational drugs": ["drug", "recreational", "party", "substance"],
    "lung auscultation": ["listen", "auscultate", "breath sounds", "lung exam"],
    "accessory muscle use": ["accessory", "retractions", "work of breathing"],
    "ambulatory desaturation": ["walk", "ambulate", "exertion", "desaturate"],
    "CT chest": ["ct", "chest ct", "cat scan", "imaging"],
    "procalcitonin": ["procalcitonin", "procal"],
    "respiratory viral panel": ["viral panel", "respiratory panel", "flu test", "covid"],
    "urine drug screen": ["uds", "drug screen", "tox screen", "urine drug"],
    "BAL": ["bal", "bronchoscopy", "bronchoalveolar", "lavage"]
  },

  nearMisses: [
    {
      id: "WEED_NOT_VAPE",
      category: "History — Near Miss",
      triggers: ["weed", "marijuana", "cannabis", "smok.*weed"],
      whatStudentDid: "Asked about marijuana use but not about the delivery method (vaping vs smoking vs edibles)",
      whatWasMissed: "The critical distinction is not WHAT substance but HOW it is consumed. THC from black-market vape cartridges causes EVALI; smoked marijuana does not typically cause this pattern.",
      teachingPoint: "When a patient reports substance use, always ask about the route and source. Vaping THC from unregulated cartridges carries specific pulmonary risks (EVALI) that differ entirely from smoking marijuana."
    },
    {
      id: "INFECTION_WORKUP_ONLY",
      category: "Clinical Reasoning — Near Miss",
      triggers: ["pneumonia", "antibiotic", "azithromycin", "levofloxacin"],
      whatStudentDid: "Jumped to empiric antibiotics for presumed pneumonia without considering non-infectious causes",
      whatWasMissed: "The low procalcitonin, negative respiratory viral panel, and bilateral ground-glass pattern with subpleural sparing should prompt consideration of non-infectious etiologies.",
      teachingPoint: "Not all bilateral infiltrates are pneumonia. When the infectious workup is negative but the patient is sick, expand your thinking to toxic, inflammatory, and immunologic causes."
    }
  ]
};

if (typeof module !== 'undefined') module.exports = { CASE_DYS002 };
