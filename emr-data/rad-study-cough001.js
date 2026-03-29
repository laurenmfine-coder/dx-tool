/**
 * ReasonDx Radiology Study — Case COUGH-001
 * Chronic Cough with Immigration History → Pulmonary Tuberculosis
 * Tests: Travel/immigration history, social history depth
 */

const CASE_COUGH001 = {
  caseId: "COUGH-001",
  title: "Chronic Cough with Weight Loss",
  targetDiagnosis: "Pulmonary Tuberculosis",

  presentation: {
    patientName: "David Okonkwo",
    age: 34,
    sex: "Male",
    ethnicity: "Nigerian-American",
    occupation: "Rideshare driver",
    chiefComplaint: "Persistent cough for 3 months with weight loss",
    vitals: { temp: "100.2\u00B0F", hr: 92, bp: "126/78", rr: 18, spo2: "96%" },
    triageNote: "34-year-old male with 3-month productive cough, 15-pound unintentional weight loss, night sweats. Reports occasional blood-tinged sputum over the past 2 weeks."
  },

  patientScript: {
    identity: "David Okonkwo, 34-year-old man. Born in Lagos, Nigeria. Immigrated to the US 18 months ago. Lives in a shared apartment with 4 other men in a crowded part of town. Works as a rideshare driver. Speaks English fluently.",
    hpiOnset: "The cough started about 3 months ago. At first I thought it was just a cold that wouldn't go away. But it's getting worse, not better.",
    hpiProgression: "It started as a dry cough, then started bringing up some phlegm — yellowish-green. About 2 weeks ago I noticed a little blood mixed in. That scared me enough to come in.",
    hpiCough: "Productive cough, yellow-green sputum. Blood-streaked about 3-4 times in the past 2 weeks. Worse in the morning and at night.",
    hpiAssociatedSymptoms: "I've lost maybe 15 pounds without trying. My appetite is terrible. I get drenching night sweats — have to change my shirt sometimes. Feeling very tired and weak. Occasional low-grade fevers, especially in the afternoon/evening. Some mild chest pain with deep breathing or coughing. No leg swelling.",
    hpiLocationPattern: "Symptoms are constant regardless of location.",
    pmh: "No known medical conditions. Has not seen a doctor since arriving in the US. No surgeries.",
    medications: "No medications. Has been taking cough syrup from the store but it doesn't help.",
    allergies: "No known allergies.",
    familyHistory: "Father died at age 55 — 'some kind of lung problem, I'm not sure exactly what.' Mother alive, has diabetes. Two brothers, healthy. If pressed about father's cause: 'He had a cough for a long time before he died. They said it was in his lungs. He never really got proper treatment.'",

    socialSmokingAlcohol: "Does not smoke cigarettes. Never has. Occasional beer — maybe once a week. No recreational drugs.",

    // ── CRITICAL: Immigration and living situation ──
    socialImmigration: "If asked about where he's from or immigration: 'I was born in Lagos, Nigeria. I came to the US about a year and a half ago. Before that I spent about 6 months in a detention center when I first arrived — the processing took a long time.' If asked about conditions at detention: 'It was very crowded. Lots of people in a small space. Some people were sick. I don't think I was tested for anything there.'",
    socialLiving: "If asked about living situation: 'I share an apartment with 4 other guys. It's a two-bedroom — pretty tight. We all work different hours so it's manageable. A couple of them are also from West Africa.'",
    socialContacts: "If asked about sick contacts: 'One of my roommates had a bad cough about 4-5 months ago. He went to a clinic and they gave him antibiotics. I don't know what it was. He got better eventually.'",
    socialOccupation: "Rideshare driver. Spends 8-10 hours a day in his car with passengers. No industrial exposures.",
    socialTravel: "Has not traveled since arriving in the US. No trips back to Nigeria.",

    // ── BCG and TB screening ──
    tbScreening: "If asked about TB testing or BCG: 'I think I got a vaccine as a baby — everyone does back home. I was never tested for TB here. At the detention center they did a chest X-ray when I arrived but nobody told me the results.'",

    ros: "General: fatigue, weight loss 15 lbs, night sweats, poor appetite, low-grade fevers. HEENT: no sore throat, no sinus symptoms. CV: no chest pain at rest, no palpitations. Respiratory: productive cough with hemoptysis, mild pleuritic chest pain. GI: decreased appetite, no abdominal pain, no diarrhea. MSK: general body aches. Neuro: no headaches, no focal weakness. Skin: no rash. Psych: worried about his health, anxious about missing work."
  },

  physicalExam: {
    general: "Thin male who appears mildly wasted. Alert, cooperative. In no acute distress at rest but coughs frequently during the exam.",
    heent: "Oral mucosa moist. No pharyngeal lesions. Mild cervical and supraclavicular lymphadenopathy bilaterally — small, firm, nontender nodes.",
    cardiovascular: "Regular rate and rhythm. No murmurs. No JVD. No peripheral edema.",
    respiratory: "Decreased breath sounds over the right upper lobe. Scattered crackles in the right upper and mid lung zones. Occasional rhonchi that partially clear with coughing. Left lung relatively clear. No wheezing. Dullness to percussion at right apex.",
    abdomen: "Soft, nontender. No hepatosplenomegaly.",
    extremities: "No clubbing (early). No cyanosis. No edema. Mild temporal wasting.",
    skin: "No rash. No erythema nodosum."
  },

  labResults: {
    "CBC": "WBC 11.2 (normal differential, no eosinophilia), Hgb 11.4 (mild anemia), Plt 410 (reactive thrombocytosis)",
    "CMP": "Albumin 2.9 (low), Na 133 (mildly low), remainder normal",
    "ESR": "72 mm/hr (elevated)",
    "CRP": "5.8 mg/dL (elevated)",
    "HIV": "Negative",
    "QuantiFERON-TB Gold": "Positive",
    "Sputum AFB smear": "Positive for acid-fast bacilli (3+)",
    "Sputum culture": "Pending — ultimately grows Mycobacterium tuberculosis",
    "Sputum GeneXpert": "MTB detected, rifampin resistance not detected",
    "Procalcitonin": "0.22 ng/mL (mildly elevated)",
    "Hepatitis B": "If ordered: HBsAg negative, anti-HBs positive (prior vaccination or natural immunity)",
    "LDH": "If ordered: 280 U/L (mildly elevated)"
  },

  radiologyReports: {
    imageUrl: "https://radiopaedia.org/cases/pulmonary-tuberculosis-active-2",

    standard: "EXAMINATION: CT Chest without contrast, high-resolution protocol\n\nCLINICAL INDICATION: 34-year-old male with 3-month productive cough, hemoptysis, weight loss, and night sweats.\n\nTECHNIQUE: Helical acquisition through the thorax. 1.25 mm axial reconstructions.\n\nCOMPARISON: None available.\n\nFINDINGS:\n\nLungs and Airways: There is a thick-walled cavitary lesion in the right upper lobe measuring approximately 3.2 x 2.8 cm with an irregular inner wall and surrounding consolidation. Multiple small centrilobular nodules with a 'tree-in-bud' pattern are identified in the right upper and middle lobes, consistent with endobronchial spread. Patchy ground-glass opacity surrounds the cavitary lesion. Additional smaller areas of consolidation are noted in the right lower lobe. The left lung shows scattered tree-in-bud nodularity in the lingula and left lower lobe. The airways are patent without endobronchial obstruction.\n\nPleura: Mild right-sided pleural thickening. No significant effusion.\n\nMediastinum and Hila: Right paratracheal and subcarinal lymphadenopathy, largest node measuring 1.8 cm. No hilar mass.\n\nIMPRESSION:\n1. Thick-walled cavitary lesion in the right upper lobe with surrounding consolidation and extensive tree-in-bud nodularity bilaterally.\n2. The combination of upper lobe cavitation with tree-in-bud nodules is concerning for active pulmonary tuberculosis with endobronchial dissemination. However, the differential diagnosis also includes fungal infection (histoplasmosis, coccidioidomycosis), lung abscess, cavitary pneumonia, and cavitating neoplasm (squamous cell carcinoma, lymphoma). Clinical correlation with exposure history, endemic risk factors, and microbiologic studies is essential.\n3. Mediastinal lymphadenopathy may be reactive or related to the primary process.\n\nDictated by: Dr. Amanda Chu, M.D. | Thoracic Radiology",

    simplified: "EXAMINATION: CT scan of the chest (detailed)\n\nWHY THIS TEST WAS DONE: To evaluate the lungs of a 34-year-old man with a cough lasting 3 months, coughing up blood, weight loss, and night sweats.\n\nWHAT WE FOUND:\n\nLungs: There is a hole (cavity) in the upper part of the right lung, about 3 cm across, with thick, irregular walls and infected-looking tissue around it. Throughout both lungs, there are many tiny spots in a branching pattern (called 'tree-in-bud') — this pattern means something is spreading through the small airways. Additional patches of infection are seen in the right lower lung and left lung.\n\nLining Around Lungs: Mild thickening on the right side. No significant fluid.\n\nCenter of Chest: Some enlarged lymph nodes in the middle of the chest.\n\nWHAT THIS MEANS:\n1. There is a hole in the right upper lung with signs of infection spreading through both lungs via the airways.\n2. This pattern is most concerning for an active lung infection that is spreading. The most important possibility to consider is tuberculosis, especially if the patient has risk factors such as living in or traveling from a country where TB is common, time in crowded group settings (shelters, prisons, detention), or close contact with someone who had a prolonged cough. Other possible causes include a fungal lung infection (from certain geographic areas), a lung abscess, or rarely a lung cancer that has broken down in the center. The patient's background, travel history, and exposure history are essential for determining the cause.\n3. The enlarged lymph nodes may be part of the same infection.\n\nDictated by: Dr. Amanda Chu, M.D. | Thoracic Radiology\n[Note: This is a plain-language version of the radiology report.]"
  },

  scoringCriteria: {
    criticalHistoryElements: ["immigration history", "country of origin", "detention/incarceration", "crowded living", "sick contacts", "TB exposure", "father's illness"],
    highScoreDiagnoses: ["tuberculosis", "TB", "pulmonary TB", "active TB"],
    reasonableDiagnoses: ["lung cancer", "fungal infection", "lung abscess", "pneumonia", "lymphoma"],
    lowValueDiagnoses: ["COPD", "bronchitis", "asthma"],
    expectedEvolution: {
      phase1: "Pneumonia, lung cancer, TB, fungal infection reasonable. Without history, TB should not dominate.",
      phase4: "If immigration/detention/contacts elicited: TB rises to top. Father's cause of death is another major clue.",
      phase6: "Cavitary lesion + tree-in-bud pattern strongly suggests TB when paired with the right history.",
      phase7: "Simplified report explicitly mentions TB risk factors — may prompt student to reconsider immigration history."
    }
  },

  signals: {
    criticalHistory: ["immigration history", "country of origin", "detention history", "crowded living", "sick contacts", "BCG vaccination", "TB screening", "father cause of death"],
    criticalExam: ["lymphadenopathy", "lung auscultation upper lobes", "percussion dullness", "temporal wasting"],
    criticalTests: ["QuantiFERON-TB Gold", "sputum AFB", "sputum culture", "CT chest", "HIV test"],
    cannotMiss: ["airborne precautions consideration", "hemoptysis workup", "contact tracing implications"],
    biasTraps: [
      "radiology report anchoring",
      "premature closure on community-acquired pneumonia",
      "attribution bias — may not ask about immigration if uncomfortable with the topic",
      "availability bias — 'TB is rare in the US' assumption"
    ],
    patientCues: [
      { trigger: "some kind of lung problem", followUp: "father cause of death", turnWindow: 2, significance: "Father likely died of TB — if pursued, this is a major risk factor" },
      { trigger: "bad cough about 4-5 months ago", followUp: "sick contacts TB", turnWindow: 3, significance: "Roommate's cough may represent a TB source case" }
    ],
    simulatedBiases: [
      { type: "availability", description: "TB is uncommon in typical US medical training experience", mechanism: "Student may not include TB on initial differential because they haven't seen it" },
      { type: "attribution", description: "Student may feel uncomfortable asking about immigration/detention", mechanism: "Cultural sensitivity may paradoxically prevent obtaining critical history" },
      { type: "framing", description: "Chief complaint framed as 'persistent cough' which sounds chronic/benign", mechanism: "May not recognize the alarm symptoms (hemoptysis, weight loss, night sweats) as forming a TB pattern" }
    ]
  },

  keywordMap: {
    "immigration history": ["immigrat", "country", "born", "where from", "homeland", "origin", "moved from", "came from", "arrived"],
    "country of origin": ["nigeria", "africa", "where.*from", "born", "home country"],
    "detention history": ["detention", "jail", "prison", "incarcerat", "shelter", "facility", "camp"],
    "crowded living": ["roommate", "living situation", "how many people", "crowded", "shared", "apartment"],
    "sick contacts": ["sick contact", "anyone.*sick", "roommate.*cough", "exposed", "contact.*cough", "family.*sick"],
    "BCG vaccination": ["bcg", "tb test", "tb vaccine", "tuberculin", "ppd", "quantiferon"],
    "TB screening": ["tb test", "tuberculosis test", "screened", "tested for tb"],
    "father cause of death": ["father", "dad", "parent.*died", "family.*lung"],
    "lymphadenopathy": ["lymph node", "neck", "supraclavicular", "swollen gland"],
    "lung auscultation upper lobes": ["listen", "auscultate", "upper lobe", "apex"],
    "QuantiFERON-TB Gold": ["quantiferon", "igra", "tb blood test", "gamma interferon"],
    "sputum AFB": ["afb", "acid fast", "sputum", "smear"],
    "sputum culture": ["sputum culture", "mycobacter", "tb culture"],
    "CT chest": ["ct", "chest ct", "imaging", "scan"],
    "HIV test": ["hiv", "aids", "human immunodeficiency"]
  },

  management: {
    criticalActions: ["Airborne isolation precautions immediately", "Sputum AFB x3 (induced if necessary)", "Notify infection control", "Start 4-drug RIFE therapy after specimens collected", "HIV test", "Contact investigation referral to public health", "Hepatitis B check before starting rifampin"],
    dangerousActions: ["Standard antibiotics without TB coverage", "No airborne precautions in a patient with cavitary disease and hemoptysis", "Discharge before isolation and culture results", "Starting treatment without collecting sputum specimens first"],
    dispositionCorrect: "Admit to airborne isolation room. Do not discharge until sputum AFB smear-negative on treatment or public health approves outpatient DOT.",
    patientEducation: ["Explain TB diagnosis and treatment duration (6-9 months)", "Directly Observed Therapy", "Contact tracing — roommates need screening", "Medication adherence critical to prevent resistance"]
  },
  patientPushback: [{ trigger: "isolat|separate room|quarantine|alone", patientResponse: "You want me to stay in a room by myself? For how long? I can't miss work — I'm a rideshare driver, I need the income. Who's going to pay my rent?", teachingPoint: "Isolation creates real financial hardship. Address social determinants: social work referral, disability paperwork, public health support for housing. Patient compliance depends on addressing these barriers.", evaluationCriteria: "Acknowledged financial concern? Offered social work? Addressed return-to-work timeline?" },
  { trigger: "roommate|contact|screening|notify", patientResponse: "My roommates are going to be so angry. They'll blame me. Can we not tell them?", teachingPoint: "Legal obligation: TB is reportable. Public health will conduct contact investigation. Reassure patient that this is standard, confidential, and protects his roommates. He is not at fault.", evaluationCriteria: "Explained legal obligation? Addressed shame/stigma? Reassured about confidentiality?" }],
  radiologistReread: [{ requiredHistory: ["immigration history", "detention history"], response: "With the history of immigration from Nigeria and time in a detention facility, this cavitary lesion with tree-in-bud pattern is highly suspicious for active pulmonary tuberculosis with endobronchial dissemination. I would prioritize TB over fungal infection or malignancy. Airborne precautions should be in place." },
  { requiredHistory: ["sick contacts"], response: "If there was a close contact with prolonged cough, this raises the pre-test probability for TB significantly. The imaging pattern — upper lobe cavity with bilateral tree-in-bud — is classic for post-primary TB." }],
  caseDepth: { v2: { title: "COUGH-001 v2: Day 5 — Culture Results", scenario: "Sputum GeneXpert positive for MTB, rifampin sensitive. AFB smear 3+. Student must manage ongoing isolation, medication monitoring, and contact investigation.", testsFocus: "Drug regimen management, hepatotoxicity monitoring, DOT setup" }, v3: { title: "COUGH-001 v3: 2-Month Follow-Up", scenario: "On RIFE x2 months. Sputum now AFB-negative. Liver enzymes stable. Student must plan continuation phase and assess treatment response.", testsFocus: "Step-down to continuation phase, repeat imaging, return to work plan" } },
  returnVisit: { recommendedInterval: "1 week", preStudyTopics: ["TB pathophysiology and transmission", "Immigration-related health screening", "Airborne precautions"], postStudyCase: "FEVER-001", measurementFocus: "Does student ask about immigration and social determinants in next case?" },

  nearMisses: [
    {
      id: "CANCER_NOT_TB",
      category: "Clinical Reasoning — Near Miss",
      triggers: ["cancer", "malignancy", "neoplasm", "squamous"],
      whatStudentDid: "Prioritized lung cancer for the cavitary lesion without considering TB",
      whatWasMissed: "While cavitary lung cancer is on the differential, the combination of young age, constitutional symptoms, and tree-in-bud pattern strongly favors an infectious etiology. Immigration and exposure history would have helped distinguish.",
      teachingPoint: "In a young patient with constitutional symptoms and a cavitary lesion, infectious etiologies (TB, fungal) should be higher on the list than malignancy. Always ask about risk factors for TB: birthplace, travel, incarceration, close contacts."
    },
    {
      id: "SOCIAL_SURFACE_ONLY",
      category: "History — Near Miss",
      triggers: ["rideshare", "driver", "work", "job"],
      whatStudentDid: "Asked about occupation but not about living situation, immigration, or social circumstances",
      whatWasMissed: "The job title tells you very little. The critical social history is the immigration from a TB-endemic country, time in a detention facility, and crowded living conditions with a sick roommate.",
      teachingPoint: "Social history goes far beyond 'what do you do for work.' For infectious diseases especially, explore: where were you born, where have you lived, have you been in any group living settings, and who do you live with now."
    }
  ]
};

if (typeof module !== 'undefined') module.exports = { CASE_COUGH001 };
