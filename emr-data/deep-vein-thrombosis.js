// Virtual EMR Case: Deep Vein Thrombosis
// Variant: deep-vein-thrombosis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Patricia Duval",
  "patientHPI": "I've been feeling fine and my blood pressure is under control, but I'm a bit nervous about this upcoming trip to Jamaica. I'm still on my birth control pills because they really help with my heavy periods, and even though my doctor mentioned some risks because of my weight, I want to keep taking them since they work so well for me.",
    "dob": "03/22/1980",
    "age": 44,
    "sex": "Female",
    "mrn": "RDX-2025-42918",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Robert Kim, MD",
    "pharmacy": "Publix Pharmacy — 1800 N Pine Island Rd, Plantation, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "4683 Birch Ln, Milwaukee, WI 53203",
    "phone": "(954) 555-9142",
    "email": "p.duval80@email.com",
    "emergencyContact": {
      "name": "James Duval (Husband)",
      "phone": "(954) 555-9160"
    }
  },
  "problems": [
    {
      "problem": "Obesity, Class II",
      "icd": "E66.01",
      "onset": "2012",
      "status": "Active",
      "notes": "BMI 37.2; counseled on weight management; declined bariatric referral"
    },
    {
      "problem": "Combined Oral Contraceptive Use",
      "icd": "Z79.3",
      "onset": "2019",
      "status": "Active",
      "notes": "Ethinyl estradiol/norgestimate (Sprintec); counseled on VTE risk given BMI and age"
    },
    {
      "problem": "Hypertension — Mild",
      "icd": "I10",
      "onset": "2021",
      "status": "Active",
      "notes": "On lisinopril; controlled"
    },
    {
      "problem": "Iron Deficiency Anemia — History",
      "icd": "D50.9",
      "onset": "2022",
      "status": "Resolved",
      "notes": "Menorrhagia-related; resolved after iron supplementation and OCP regulation of menses"
    }
  ],
  "medications": [
    {
      "name": "Ethinyl Estradiol/Norgestimate (Sprintec) daily",
      "sig": "Take 1 tablet by mouth daily at the same time each day",
      "prescriber": "Dr. Kim",
      "start": "03/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "06/2021",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Vitamin D3 2000 IU daily",
      "sig": "Take 1 capsule by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "01/2023",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "type": "Drug",
      "reaction": "Hives — diffuse urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/20/2024",
      "bp": "128/80",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "218 lbs",
      "ht": "5'5\"",
      "bmi": 36.3,
      "setting": "PCP Office"
    },
    {
      "date": "05/15/2024",
      "bp": "130/82",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "222 lbs",
      "ht": "5'5\"",
      "bmi": 36.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Kim, MD",
      "cc": "Follow-up: HTN, OCP refill, weight management",
      "hpi": "44-year-old female for follow-up. Reports feeling well. HTN controlled. On combined OCP (Sprintec) for menorrhagia control and contraception. VTE risk re-discussed given BMI 36 and age — patient wishes to continue OCPs; understands risks. Denies leg swelling, chest pain, or SOB. Planning a trip to Jamaica next month — 4-hour flight. Weight stable.",
      "exam": "General: Obese, NAD. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT. Extremities: No edema, no calf tenderness, negative Homan sign. Skin: No rashes.",
      "assessment": "1. HTN — controlled\n2. OCP use — continued; VTE risk discussed (obesity + estrogen + age approaching 45)\n3. Obesity — stable; nutritional counseling offered\n4. Upcoming travel — DVT prevention counseled",
      "plan": "1. Continue lisinopril and Sprintec\n2. Travel DVT prevention: compression stockings, hydration, walk every 1-2 hours on flight, ankle pumps\n3. Weight management: referred to nutritionist\n4. If calf swelling, pain, or redness: seek urgent evaluation\n5. RTC 6 months; consider transitioning to progestin-only method at age 45"
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "time": "09:30",
      "orderedBy": "Dr. Robert Kim, MD",
      "collected": "11/20/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-112015",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.0", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "38.8", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "275", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "218", "unit": "mg/dL", "range": "<200", "flag": "H" },
            { "test": "LDL Cholesterol", "value": "138", "unit": "mg/dL", "range": "<100 optimal", "flag": "H" },
            { "test": "HDL Cholesterol", "value": "48", "unit": "mg/dL", "range": ">50", "flag": "L" },
            { "test": "Triglycerides", "value": "160", "unit": "mg/dL", "range": "<150", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-268",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/22/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-695",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2008",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: DVT at age 50 (provoked — post-surgical), HTN, alive at 70",
    "Father: T2DM, CAD, alive at 72",
    "Sister: Factor V Leiden heterozygous (diagnosed during pregnancy), alive at 41",
    "No family history of PE or unprovoked clots"
  ],
  "socialHistory": [
    ["Occupation", "Office manager — sedentary desk job; 8+ hours sitting daily"],
    ["Marital", "Married, 2 children (ages 10, 7)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 1-2 glasses of wine on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 2-3x/week; limited by schedule"],
    ["Housing", "Single-family home with husband and children"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "deep-vein-thrombosis",
    "diagnosis": "Acute Proximal Deep Vein Thrombosis — Left Femoral Vein (Provoked by OCP + Obesity + Prolonged Travel)",
    "acuity": 3,
    "presentation": "Musculoskeletal Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patricia Duval is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
        "When did your symptoms start and how?",
        "Describe the main symptom \u2014 location, character, severity.",
        "What makes it worse? What makes it better?",
        "Any other symptoms you've noticed?",
        "Any prior similar episodes?",
        "Tell me about your medical history.",
        "What medications are you currently taking?",
        "Any medication allergies?",
        "Relevant family history?",
        "Tell me about your lifestyle."
    ],
    "patientResponses": {
        "default": "He pauses. 'Can you clarify what you mean?'",
        "onset": "'Gradually \u2014 over the past several days.'",
        "character": "'The musculoskeletal emergency has been significant and affecting my ability to function.'",
        "location": "'The main problem is in the expected area for my condition.'",
        "severity": "'Six or seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
        "associated": "'Some associated symptoms consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.'",
        "denies": "'No fever, chills, or unexplained weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Ethinyl Estradiol/Norgestimate (Sprintec) daily; Lisinopril 10mg daily; Vitamin D3 2000 IU daily.'",
        "allergies": "'My allergies: Sulfa drugs.'",
        "family": "Mother: DVT at age 50 (provoked \u2014 post-surgical), HTN, alive at 70  Father: T2DM, CAD, alive at 72  Sister: Factor V Leiden heterozygous (diagnosed during pregnancy), alive at 41",
        "social": "Occupation: Office manager \u2014 sedentary desk job; 8+ hours sitting daily  Marital: Married, 2 children (ages 10, 7)  Tobacco: Never smoker  Alcohol: Social, 1-2 glasses of wine on weekends  Drugs: Denies"
    },
    "examManeuvers": [
        "General appearance",
        "Bilateral arm BP",
        "Peripheral pulses",
        "Cardiovascular",
        "Abdominal auscultation",
        "Extremity perfusion",
        "Skin",
        "Neurological screen"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.",
        "Bilateral arm BP": "Finding consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.",
        "Peripheral pulses": "Finding consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.",
        "Cardiovascular": "Finding consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.",
        "Abdominal auscultation": "Finding consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.",
        "Extremity perfusion": "Finding consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.",
        "Skin": "Finding consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.",
        "Neurological screen": "Finding consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein."
    },
    "ddxTargets": [
        "Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Patricia Duval: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein (Provoked by OCP + Obesity + Prolonged Travel). How did your reasoning evolve?"
    }
}
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['deep-vein-thrombosis'] = {
  id: 'deep-vein-thrombosis', name: 'Patricia Duval',
  chiefComplaint: 'DVT — Wells Score and DOAC Therapy',
  diagnosis: 'DVT — Wells Score and DOAC Therapy',
  orders: {
    correct: [{ id: 'duplex-ultrasound', name: 'Compression duplex ultrasound — first-line imaging for suspected DVT', rationale: 'Lower extremity duplex ultrasound: sensitivity >95% for proximal DVT (popliteal and above). Compress the vein — if compressible = no clot. Non-compressible = DVT. Less sensitive for distal DVT (calf veins). If negative with high pretest probability: repeat in 5-7 days or advance to venography.' },{ id: 'anticoagulation-dvt', name: 'Anticoagulate — DOACs (rivaroxaban or apixaban) preferred for DVT', rationale: 'DOACs (rivaroxaban, apixaban, edoxaban) are first-line for DVT (EINSTEIN, AMPLIFY trials): comparable efficacy to LMWH/warfarin with lower bleeding risk. Rivaroxaban: 15mg BID × 21 days → 20mg daily. Apixaban: 10mg BID × 7 days → 5mg BID. Duration: provoked (3 months), unprovoked (indefinite, individualize).' }],
    incorrect: [{ id: 'empirical-anticoag', name: 'Anticoagulate based on clinical suspicion alone without imaging', rationale: 'Imaging is required to confirm DVT before initiating anticoagulation — DVT must be confirmed radiographically. Use Wells score to pre-test stratify: low score + negative D-dimer = no DVT, no imaging needed. Moderate-high score: proceed to duplex ultrasound regardless of D-dimer.' },{ id: 'compression-only', name: 'Compression stockings only — DVT does not need anticoagulation', rationale: 'Anticoagulation is required for DVT to prevent PE and extension. Compression stockings alone are used for PTS prevention AFTER anticoagulation is established. The SOX trial showed elastic compression stockings do NOT prevent PTS — routine use for PTS prevention is no longer standard.' }]
  },
  teachingPoints: {
    keyLearning: ['Wells DVT score: active cancer (1), paralysis/plaster cast (1), recently bedridden >3 days or surgery <12 weeks (1), localized tenderness along deep venous system (1), entire leg swollen (1), calf swelling >3cm compared to other leg (1), pitting edema (1), collateral superficial veins (1), previously documented DVT (1), alternative diagnosis at least as likely (-2). Score ≥2 = high probability.','D-dimer: highly sensitive but non-specific. A negative D-dimer (<500 ng/mL) with LOW pre-test probability (Wells score <2) essentially rules out DVT (negative predictive value >99%). Elevated in pregnancy, cancer, infection, post-surgery — cannot rule out DVT with positive D-dimer alone.','Duration of anticoagulation: first provoked DVT (transient risk factor like surgery, trauma, immobility) = 3 months. First unprovoked DVT = 3-6 months minimum, then indefinite if low bleeding risk. Recurrent unprovoked DVT = indefinite. Cancer-associated DVT = LMWH or DOAC (edoxaban/rivaroxaban per CARAVAGGIO, Hokusai-VTE Cancer).'],
    boardPearls: ['Post-thrombotic syndrome (PTS): occurs in 20-50% of proximal DVT. Chronic pain, swelling, skin changes, ulceration. Risk reduced by: adequate anticoagulation, graduated compression stockings (for symptom relief, not prevention per SOX trial). Iliac/femoral DVT highest PTS risk.','Phlegmasia cerulea dolens: massive iliofemoral DVT causing venous gangrene. Extreme swelling, cyanosis, arterial compromise from compartment syndrome. Emergency CDT or surgical thrombectomy.','Superficial thrombophlebitis: inflammation of superficial vein with clot. If <5cm from saphenofemoral junction: treat as DVT (risk of propagation to deep system). Otherwise: NSAIDs, warmth, compression.']
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patricia Duval is cooperative and provides a clear history. He is appropriately concerned about their symptoms.",
    "interviewQuestions": [
        "When did your symptoms start?",
        "Describe the main symptom.",
        "How severe is it?",
        "What makes it worse or better?",
        "Any other symptoms?",
        "Any prior episodes?",
        "What medications do you take?",
        "Any allergies?"
    ],
    "patientResponses": {
        "default": "He thinks for a moment. 'Can you clarify what you mean?'",
        "onset": "'My symptoms started recently, getting worse over the past day or two.'",
        "character": "'It feels like acute proximal deep vein thrombosis \u2014 left femoral vein \u2014 fairly significant.'",
        "location": "'The problem is primarily in the affected area.'",
        "severity": "'About a seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat.'",
        "associated": "'I have some associated symptoms consistent with my condition.'",
        "denies": "'No fever, chills, or weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Ethinyl Estradiol/Norgestimate (Sprintec) daily; Lisinopril 10mg daily; Vitamin D3 2000 IU daily.'",
        "allergies": "'My allergies: Sulfa drugs.'",
        "family": "'No significant family history relevant to this presentation.'",
        "social": "'I am a working adult. Non-smoker. Social drinker.'"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted examination"
    ],
    "examFindings": {
        "General appearance": "Patient appears consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.",
        "Vital signs": "Vital signs appropriate to the acuity of presentation.",
        "Cardiovascular auscultation": "Cardiovascular exam as appropriate.",
        "Pulmonary auscultation": "Pulmonary exam as appropriate.",
        "Abdominal examination": "Abdomen as appropriate.",
        "Extremity assessment": "Extremities as appropriate.",
        "Skin examination": "Skin as appropriate.",
        "Targeted examination": "Targeted findings consistent with Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein."
    },
    "ddxTargets": [
        "Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein (correct)",
        "Alternative diagnosis 1",
        "Alternative diagnosis 2",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein.",
        "prematureClosure": "Complete your workup even after forming a hypothesis.",
        "availabilityBias": "Apply systematic reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Patricia Duval \u2014 what are your top 3 diagnoses from chart review?",
        "phase5": "How has your differential changed after history and exam?",
        "finalDebrief": "The diagnosis is Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein (Provoked by OCP + Obesity + Prolonged Travel). How did your reasoning evolve?"
    }
}
};
