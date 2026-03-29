/**
 * ReasonDx Radiology Study — Case FEVER-001
 * Fever with Undiagnosed HIV → Pneumocystis Pneumonia (PCP)
 * Tests: HIV risk factor history, sexual history, immunosuppression screening
 */

const CASE_FEVER001 = {
  caseId: "FEVER-001",
  title: "Fever with Progressive Dyspnea",
  targetDiagnosis: "Pneumocystis Pneumonia (PCP) in Undiagnosed HIV",

  presentation: {
    patientName: "James Rivera",
    age: 35,
    sex: "Male",
    ethnicity: "Hispanic",
    occupation: "Graphic designer, freelance",
    chiefComplaint: "Fever and worsening shortness of breath for 3 weeks",
    vitals: { temp: "101.4\u00B0F", hr: 105, bp: "110/68", rr: 26, spo2: "88%" },
    triageNote: "35-year-old male with 3 weeks of progressive dyspnea, now at rest. Dry cough. Fevers to 102 at home. Reports 20-pound weight loss over 3 months. Has not seen a doctor in several years."
  },

  patientScript: {
    identity: "James Rivera, 35-year-old freelance graphic designer. Lives alone in a studio apartment. Has not seen a doctor in about 4 years. Originally from San Antonio, has lived in current city for 6 years.",
    hpiOnset: "It started about 3 weeks ago with just feeling tired and having a low fever. Then the breathing got harder and harder. Now I can barely walk across the room.",
    hpiProgression: "Gradually getting worse. The first week was just fatigue and a mild cough. Second week I started getting fevers every day and the breathing got bad. This week I can't do anything without getting winded.",
    hpiCough: "Dry cough. Nothing comes up really. Not as bad as the breathing — the breathing is what's killing me.",
    hpiAssociatedSymptoms: "I've lost about 20 pounds in the last 3 months. I thought it was stress. Fevers every day, usually in the afternoon. Night sweats — drenching. Terrible fatigue. My mouth has been sore — I noticed some white patches on my tongue a few weeks ago. No chest pain. No leg swelling.",
    hpiLocationPattern: "Symptoms constant regardless of location.",
    pmh: "No known medical conditions. Last saw a doctor about 4 years ago for a routine checkup — 'everything was fine then.' No surgeries. No hospitalizations.",
    medications: "Nothing. No prescriptions, no supplements.",
    allergies: "No known allergies.",
    familyHistory: "Mother has diabetes. Father had a heart attack at 58. No family history of lung disease or cancer.",

    socialSmokingAlcohol: "Doesn't smoke. Occasional glass of wine, maybe once a week. No recreational drugs.",

    // ── CRITICAL: HIV risk factors — only if specifically asked ──
    socialSexual: "If asked about sexual history: 'I'm gay. I've had a few partners over the past couple years. I... haven't always been great about using condoms.' If asked about last HIV test: 'I've actually never been tested. I know I should have but I just kept putting it off.' If asked about PrEP: 'No, I never got around to that either.'",
    socialSexualGeneral: "If asked 'are you sexually active' without more probing: 'Yes, I have a partner.' Does NOT volunteer that he is MSM or that condom use is inconsistent unless sexual history is explored in depth.",

    socialOccupation: "Freelance graphic designer. Works from home. No occupational exposures.",
    socialTravel: "No recent travel. Visited family in San Antonio 6 months ago.",
    socialLiving: "Lives alone. No pets. No mold or environmental concerns.",
    socialContacts: "No known sick contacts.",

    // ── Oral thrush clue ──
    oralFindings: "If asked to describe the mouth soreness: 'There are these white patches on my tongue and the inside of my cheeks. They've been there for a couple weeks. They're a little painful.' This is oral candidiasis (thrush) — a major clue for immunosuppression.",

    ros: "General: severe fatigue, 20-lb weight loss, fevers, night sweats, poor appetite. HEENT: oral white patches (thrush), sore mouth. CV: no chest pain, palpitations. Respiratory: progressive dyspnea now at rest, dry cough. GI: mild nausea, decreased appetite, no diarrhea. MSK: generalized weakness. Neuro: no headaches. Skin: no rash (if examined closely: mildly diffuse seborrheic dermatitis on face). Psych: anxious, knows something is wrong."
  },

  physicalExam: {
    general: "Thin, ill-appearing male in moderate respiratory distress. Tachypneic at rest. Speaking in short phrases. Appears cachectic.",
    heent: "White plaques on tongue and buccal mucosa bilaterally — consistent with oral candidiasis (thrush). Mild seborrheic dermatitis around nasolabial folds. No lymphadenopathy (notably absent despite the clinical picture).",
    cardiovascular: "Tachycardic, regular rhythm. No murmurs. No JVD. No peripheral edema.",
    respiratory: "Bilateral fine crackles, diffuse, worse at bases. No wheezing. Tachypneic. Prominent desaturation with minimal exertion (SpO2 drops to 78% with ambulation to bathroom).",
    abdomen: "Soft, nontender. No hepatosplenomegaly.",
    extremities: "No clubbing. No cyanosis at rest but perioral cyanosis with exertion. No edema. Significant muscle wasting.",
    skin: "No rash. No Kaposi lesions. Seborrheic dermatitis on face. No track marks."
  },

  labResults: {
    "CBC": "WBC 4.2 (low-normal, lymphocytes 8% — severely lymphopenic), Hgb 11.2 (mild anemia), Plt 165",
    "CMP": "Albumin 2.4 (low), LDH 485 (markedly elevated — characteristic of PCP), remainder normal",
    "ESR": "92 mm/hr (markedly elevated)",
    "CRP": "8.6 mg/dL (elevated)",
    "Procalcitonin": "0.18 ng/mL (low — argues against typical bacterial pneumonia)",
    "ABG": "pH 7.47, pCO2 28, pO2 52 on room air (severe hypoxemia with respiratory alkalosis)",
    "LDH": "485 U/L (markedly elevated — highly suggestive of PCP when combined with clinical picture)",
    "HIV antibody/antigen (4th gen)": "Positive",
    "HIV viral load": "340,000 copies/mL (very high)",
    "CD4 count": "38 cells/\u00B5L (severely depleted — AIDS-defining, PCP typically occurs <200)",
    "Beta-D-glucan": "If ordered: >500 pg/mL (positive — supports PCP diagnosis)",
    "Sputum induced for PCP": "If ordered: Positive for Pneumocystis jirovecii on silver stain",
    "Blood cultures": "Negative",
    "Respiratory viral panel": "Negative",
    "Urine Legionella antigen": "If ordered: Negative",
    "Urine histoplasma antigen": "If ordered: Negative"
  },

  radiologyReports: {
    imageUrl: "https://radiopaedia.org/cases/pneumocystis-jiroveci-pneumonia",

    standard: "EXAMINATION: CT Chest without contrast, high-resolution protocol\n\nCLINICAL INDICATION: 35-year-old male with 3 weeks of progressive dyspnea, fever, weight loss. Evaluate for pulmonary pathology.\n\nTECHNIQUE: Helical acquisition through the thorax. 1.25 mm axial reconstructions.\n\nCOMPARISON: None available.\n\nFINDINGS:\n\nLungs and Airways: Diffuse bilateral ground-glass opacities in a perihilar and symmetric distribution, with relative peripheral sparing. The opacities are most confluent in the upper lobes and perihilar regions. Scattered areas of geographic ground-glass with sharp demarcation against normal lung ('crazy-paving' pattern) are seen in the mid and lower zones. No cavitation. No discrete nodules or masses. No pleural effusions. A few thin-walled cystic lucencies (pneumatoceles) are identified in the upper lobes bilaterally, measuring 8-15mm.\n\nMediastinum: No lymphadenopathy. Heart is normal in size. No pericardial effusion.\n\nIMPRESSION:\n1. Diffuse bilateral symmetric ground-glass opacities with perihilar predominance, geographic crazy-paving pattern, and upper-lobe pneumatoceles.\n2. In the appropriate clinical context, this pattern is highly suggestive of Pneumocystis jirovecii pneumonia (PCP). The differential also includes atypical viral pneumonia (CMV, influenza), drug-induced pneumonitis, pulmonary alveolar proteinosis, and diffuse alveolar hemorrhage. Correlation with immune status, exposure history, and microbiologic studies is essential.\n3. Pneumatoceles are a recognized complication of PCP and increase the risk of spontaneous pneumothorax.\n\nDictated by: Dr. Amanda Chu, M.D. | Thoracic Radiology",

    simplified: "EXAMINATION: CT scan of the chest (detailed)\n\nWHY THIS TEST WAS DONE: To evaluate the lungs of a 35-year-old man with 3 weeks of worsening shortness of breath, fever, and significant weight loss.\n\nWHAT WE FOUND:\n\nLungs: Both lungs show widespread hazy, cloudy areas that are heaviest in the central parts of the lungs (near the heart) and lighter toward the edges. In some areas, the cloudiness has a 'crazy-paving' look — like irregular paving stones. There are also a few small air-filled bubbles (cysts) in the tops of both lungs, measuring about 1-1.5 cm. No solid masses. No fluid around the lungs.\n\nCenter of Chest: Normal. Heart is normal size. No enlarged lymph nodes.\n\nWHAT THIS MEANS:\n1. Both lungs are heavily inflamed with a very specific pattern — cloudy in the center, clearer at the edges, with small air bubbles in the upper lungs.\n2. This particular pattern is most commonly seen in a lung infection called Pneumocystis pneumonia (PCP), which occurs almost exclusively in people whose immune systems are severely weakened — most commonly from untreated HIV/AIDS, but also from chemotherapy, organ transplant medications, or long-term steroid use. Other possible causes include certain viral infections, a reaction to medication, or a rare condition where protein fills the lungs. Knowing the patient's immune status is the single most important piece of information for interpreting this scan.\n3. The small air bubbles (pneumatoceles) are a known complication of this type of infection and can sometimes pop, causing a collapsed lung.\n\nDictated by: Dr. Amanda Chu, M.D. | Thoracic Radiology\n[Note: This is a plain-language version of the radiology report.]"
  },

  scoringCriteria: {
    criticalHistoryElements: ["sexual history", "HIV risk factors", "condom use", "HIV testing history", "oral thrush recognition", "weight loss significance"],
    highScoreDiagnoses: ["PCP", "Pneumocystis pneumonia", "PCP pneumonia", "HIV/AIDS with PCP"],
    reasonableDiagnoses: ["atypical pneumonia", "viral pneumonia", "tuberculosis", "lymphoma"],
    lowValueDiagnoses: ["community-acquired pneumonia", "asthma", "COPD"],
    expectedEvolution: {
      phase1: "Pneumonia, TB, malignancy reasonable. PCP unlikely without HIV risk factor history.",
      phase4: "If sexual history/HIV risk elicited: PCP should rise to top. If thrush noticed on exam: immunosuppression clue.",
      phase6: "Bilateral GGO + LDH elevated + lymphopenia + HIV positive = PCP confirmed. Student needs to connect the dots.",
      phase7: "Simplified report directly mentions HIV/AIDS as most common cause of this pattern."
    }
  },

  signals: {
    criticalHistory: ["sexual history", "HIV risk factors", "number of partners", "condom use", "HIV testing history", "PrEP history", "oral symptoms"],
    criticalExam: ["oral exam for thrush", "lung auscultation", "ambulatory desaturation", "cachexia assessment", "skin exam for KS"],
    criticalTests: ["HIV test", "CD4 count", "LDH", "beta-D-glucan", "induced sputum for PCP", "ABG"],
    cannotMiss: ["severe hypoxemia SpO2 88%", "oral thrush as immunosuppression clue", "lymphopenia on CBC"],
    biasTraps: [
      "radiology report anchoring",
      "avoiding sexual history (discomfort, perceived irrelevance)",
      "premature closure on community-acquired pneumonia",
      "attribution bias — 35-year-old 'too young for serious illness'"
    ],
    patientCues: [
      { trigger: "white patches on my tongue", followUp: "oral exam", turnWindow: 2, significance: "Oral candidiasis in a young adult without steroids or antibiotics = immunosuppression until proven otherwise" },
      { trigger: "haven't seen a doctor in 4 years", followUp: "preventive care gaps", turnWindow: 3, significance: "No healthcare engagement = no screening, no HIV testing, no preventive care. Should prompt broader social/sexual history." },
      { trigger: "I have a partner", followUp: "sexual history depth", turnWindow: 3, significance: "Vague answer to sexual activity. Student must probe further for risk factors." }
    ],
    simulatedBiases: [
      { type: "attribution", description: "35-year-old freelancer — doesn't fit the student's mental model of 'someone with AIDS'", mechanism: "Students may not associate a professional young man with HIV risk if they hold stereotypes about who gets HIV" },
      { type: "anchoring", description: "Fever + cough + infiltrates = pneumonia, stop thinking", mechanism: "Standard pneumonia framing prevents consideration of opportunistic infection" },
      { type: "framing", description: "Patient says 'I have a partner' which sounds stable/low-risk", mechanism: "Singular partner framing may lead student to skip detailed sexual history" }
    ]
  },

  keywordMap: {
    "sexual history": ["sexual", "partner", "sex", "intimate", "relationship", "sexually active"],
    "HIV risk factors": ["hiv", "aids", "risk", "condom", "protection", "safe sex", "prep", "test"],
    "number of partners": ["how many", "partner", "partners", "monogamous"],
    "condom use": ["condom", "protection", "safe sex", "barrier", "unprotected"],
    "HIV testing history": ["hiv test", "tested", "last test", "screen"],
    "PrEP history": ["prep", "truvada", "descovy", "prophylax"],
    "oral symptoms": ["mouth", "tongue", "oral", "throat", "thrush", "white patch"],
    "oral exam for thrush": ["mouth", "oral", "tongue", "throat", "look.*mouth", "open.*mouth"],
    "lung auscultation": ["listen", "auscultate", "breath sounds"],
    "ambulatory desaturation": ["walk", "ambulate", "exertion"],
    "HIV test": ["hiv", "aids test", "4th gen", "antibody"],
    "CD4 count": ["cd4", "t cell", "immune cells", "lymphocyte count"],
    "LDH": ["ldh", "lactate dehydrogenase"],
    "beta-D-glucan": ["beta-d-glucan", "glucan", "fungal marker"],
    "induced sputum for PCP": ["induced sputum", "pcp stain", "silver stain", "pneumocystis"]
  },

  management: {
    criticalActions: ["TMP-SMX (first-line for PCP) plus prednisone (PaO2 <70 or A-a gradient >35)", "Start ART (antiretrovirals) — but not immediately, wait 2 weeks to avoid IRIS", "Prophylaxis for other opportunistic infections (MAC if CD4 <50)", "Social work referral", "Partner notification and testing", "Adherence counseling — this is a lifelong treatment", "Thrush treatment (fluconazole)"],
    dangerousActions: ["Standard community-acquired pneumonia antibiotics alone without PCP coverage", "Starting ART immediately (risk of immune reconstitution inflammatory syndrome — IRIS)", "Discharge without confirming PCP treatment and HIV care linkage", "Not treating the thrush (it's an AIDS-defining illness marker)"],
    dispositionCorrect: "Admit for IV TMP-SMX plus steroids given severity of hypoxemia. HIV specialist consult. Do not discharge until stable on oral medications and outpatient HIV care is arranged.",
    patientEducation: ["Explain HIV diagnosis with sensitivity and care", "Explain that treatment is highly effective — undetectable = untransmittable", "Explain PCP and why it happened (immune suppression)", "Discuss long-term prognosis with treatment (near-normal life expectancy)", "Partner notification"]
  },
  patientPushback: [{ trigger: "hiv.*positive|hiv.*result|diagnos.*hiv|test.*positive", patientResponse: "HIV? No... that can't be right. Are you sure? Can you run the test again? I... I don't know what to say.", teachingPoint: "Delivering life-changing diagnoses requires compassion, patience, and silence. Let the patient process. Do not rush to the treatment plan. Acknowledge the shock. Offer to answer questions when they're ready. This is one of the most important communication moments in medicine.", evaluationCriteria: "Did the student pause? Did they acknowledge the emotional impact? Did they avoid rushing to the medical plan?" },
  { trigger: "partner|boyfriend|tell.*someone|notify", patientResponse: "Please, you can't tell my partner. I don't even know how to tell him myself. What if he leaves me?", teachingPoint: "Partner notification is a legal requirement in most states, but it can be done through the health department anonymously. Reassure that the student won't personally contact the partner. Offer resources for disclosure. This is a moment of extreme vulnerability.", evaluationCriteria: "Handled with sensitivity? Explained health department notification? Offered disclosure resources?" }],
  radiologistReread: [{ requiredHistory: ["sexual history", "HIV risk factors"], response: "With the history suggesting HIV risk factors, the bilateral perihilar ground-glass pattern with upper-lobe pneumatoceles is essentially diagnostic of PCP in the right clinical context. I am upgrading PCP to the leading diagnosis. CD4 count and HIV testing should be prioritized." },
  { requiredHistory: ["oral symptoms"], response: "If the patient has oral thrush, this suggests immunosuppression. Combined with the imaging pattern, PCP becomes the leading diagnosis. HIV testing is strongly recommended." }],
  caseDepth: { v2: { title: "FEVER-001 v2: Hospital Day 3", scenario: "On IV TMP-SMX and steroids. SpO2 improving to 93%. CD4 confirmed at 38. Viral load 340,000. Genotype pending. Student must plan ART initiation timing and OI prophylaxis.", testsFocus: "ART timing (avoid IRIS), MAC prophylaxis, adherence planning" }, v3: { title: "FEVER-001 v3: 3-Month Follow-Up", scenario: "On ART x10 weeks. Viral load dropped to 450 copies. CD4 up to 120. PCP resolved. Student must manage immune reconstitution and long-term HIV care.", testsFocus: "Viral suppression monitoring, OI prophylaxis discontinuation criteria, long-term care" } },
  returnVisit: { recommendedInterval: "1 week", preStudyTopics: ["HIV/AIDS pathophysiology", "PCP diagnosis and treatment", "Sexual history taking", "Opportunistic infection prophylaxis"], postStudyCase: "COUGH-001", measurementFocus: "Does student take a thorough sexual history and consider immunosuppression in next case?" },

  nearMisses: [
    {
      id: "THRUSH_IGNORED",
      category: "Physical Exam — Near Miss",
      triggers: ["oral", "mouth", "thrush", "candid"],
      whatStudentDid: "Noted oral thrush on exam but did not connect it to immunosuppression",
      whatWasMissed: "Oral candidiasis in a 35-year-old without steroids, inhaled corticosteroids, recent antibiotics, or dentures is a sentinel sign of immunosuppression — most commonly HIV/AIDS.",
      teachingPoint: "When you find thrush in a young adult without an obvious cause, immediately think: why is this person immunosuppressed? The three big categories are HIV, iatrogenic (steroids, chemo), and hematologic malignancy."
    },
    {
      id: "PARTNER_NOT_PROBED",
      category: "History — Near Miss",
      triggers: ["partner", "relationship", "sexually active"],
      whatStudentDid: "Confirmed sexually active but did not explore risk factors (gender of partners, condom use, number of partners, HIV testing)",
      whatWasMissed: "A complete sexual history that would reveal MSM status and inconsistent condom use — the key HIV risk factors in this case.",
      teachingPoint: "Asking 'are you sexually active?' is the beginning, not the end, of sexual history. Always follow up: 'Do you have sex with men, women, or both? How many partners in the last year? Do you use condoms consistently? When were you last tested for STIs and HIV?'"
    }
  ]
};

if (typeof module !== 'undefined') module.exports = { CASE_FEVER001 };
