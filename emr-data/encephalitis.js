// Virtual EMR Case: Encephalitis
// Variant: encephalitis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Trevor Washington",
  "patientHPI": "I went camping last weekend and started feeling really tired and achy about four days ago, like I was getting the flu. Then two days ago I got this terrible headache that just keeps getting worse no matter what I take for it, and I've been running a high fever. My mom says I've been acting confused and not making sense when I talk, which really scared her into bringing me here.",
    "dob": "02/28/1992",
    "age": 32,
    "sex": "Male",
    "mrn": "RDX-2025-61738",
    "pronouns": "He/Him",
    "insurance": "United Healthcare EPO",
    "pcp": "Dr. Raymond Alvarez, MD",
    "pharmacy": "Publix Pharmacy — 801 S University Dr, Plantation, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "2169 Clover St, Baltimore, MD 21214",
    "phone": "(954) 555-8463",
    "email": "t.washington92@email.com",
    "emergencyContact": {
      "name": "Angela Washington (Mother)",
      "phone": "(954) 555-8490"
    }
  },
  "problems": [
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2012",
      "status": "Chronic",
      "notes": "Managed with OTC cetirizine"
    },
    {
      "problem": "Recent Travel to Rural Central Florida",
      "icd": "Z77.29",
      "onset": "2025",
      "status": "Active",
      "notes": "Camping trip to Ocala area 2 weeks prior; extensive mosquito exposure reported"
    },
    {
      "problem": "Tension-Type Headache",
      "icd": "G44.209",
      "onset": "2018",
      "status": "Active",
      "notes": "Episodic, stress-related; acetaminophen PRN"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet by mouth daily as needed for allergies",
      "prescriber": "Dr. Alvarez",
      "start": "03/2015",
      "refills": 5,
      "status": "PRN"
    },
    {
      "name": "Acetaminophen 500mg PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for headache; max 3000mg/day",
      "prescriber": "Dr. Alvarez",
      "start": "01/2019",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
        "date": "10/08/2024",
        "bp": "120/76",
        "hr": 72,
        "rr": 14,
        "temp": "98.6\u00b0F",
        "spo2": "99%",
        "wt": "185 lbs",
        "ht": "6'1\"",
        "bmi": 24.4,
        "setting": "PCP Office"
    },
    {
        "date": "04/15/2024",
        "bp": "118/74",
        "hr": 68,
        "rr": 14,
        "temp": "98.4\u00b0F",
        "spo2": "99%",
        "wt": "182 lbs",
        "ht": "6'1\"",
        "bmi": 24.0,
        "setting": "PCP Office"
    },
    {
        "date": "10/02/2023",
        "bp": "122/78",
        "hr": 70,
        "rr": 16,
        "temp": "98.6\u00b0F",
        "spo2": "98%",
        "wt": "180 lbs",
        "ht": "6'1\"",
        "bmi": 23.7,
        "setting": "PCP Office"
    }
],
  "visits": [
    {
      "id": "V001",
      "date": "02/03/2025",
      "type": "Urgent Care",
      "provider": "Dr. Sandra Chen, MD",
      "cc": "Fever, headache, and confusion x 2 days",
      "hpi": "32-year-old previously healthy male presents with 2 days of worsening headache, fever to 103°F at home, and new confusion noticed by his mother. Reports myalgias and fatigue starting 4 days ago, initially attributed to post-camping trip. Progressive headache not relieved by acetaminophen. Mother reports patient has been 'saying things that don't make sense' since this morning. Reports camping trip to Ocala area 2 weeks ago with significant mosquito exposure. Denies rash, neck stiffness (though examiner notes stiffness on exam), vision changes, or recent sick contacts.",
      "exam": "General: Ill-appearing male, intermittently confused, oriented to person only. HEENT: PERRL but sluggish bilaterally, photophobia present. Neck: Nuchal rigidity noted. CV: Tachycardic, RRR, no murmurs. Lungs: CTAB. Neuro: GCS 13 (E3V4M6), disoriented to time and place, speech intermittently tangential. CN intact. Strength grossly intact but decreased cooperation. DTRs 3+ throughout. No rash. Kernig sign equivocal, Brudzinski negative.",
      "assessment": "1. Acute encephalopathy with fever — high concern for CNS infection (meningitis vs. encephalitis)\n2. Significant mosquito exposure history — arboviral encephalitis (EEE, WNV) on differential\n3. Requires emergent transfer to ED for LP, imaging, and empiric treatment",
      "plan": "1. Emergent transfer to Memorial Regional ED via EMS\n2. IV access established, NS bolus initiated\n3. Recommend CT head → LP, blood cultures x2, empiric acyclovir + ceftriaxone + vancomycin\n4. Notify receiving ED of incoming transfer"
    },
    {
      "id": "V002",
      "date": "10/08/2024",
      "type": "Primary Care",
      "provider": "Dr. Raymond Alvarez, MD",
      "cc": "Annual wellness exam",
      "hpi": "32-year-old male for annual exam. No active complaints. Exercises regularly — runs 3-4x/week, plays recreational basketball. Headaches infrequent, controlled with acetaminophen. Seasonal allergies managed with cetirizine. No hospitalizations or surgeries.",
      "exam": "General: NAD, athletic build. HEENT: WNL. Neck: Supple, no LAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT/ND. MSK: Full ROM all joints. Neuro: A&O x3, CN II-XII intact. Skin: No rashes or lesions.",
      "assessment": "1. Annual wellness exam — healthy male\n2. Allergic rhinitis — stable\n3. Episodic tension headache — stable",
      "plan": "1. Continue cetirizine PRN\n2. Age-appropriate screening current\n3. RTC 1 year or PRN"
    }
  ],
  "labs": [
    {
      "date": "10/08/2024",
      "time": "09:00",
      "orderedBy": "Dr. Raymond Alvarez, MD",
      "collected": "10/08/2024 08:20",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-100812",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "15", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "102", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.5", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "22", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "24", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.4", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.8", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "210", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "10/02/2023",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2023-10021",
      "status": "FINAL",
      "orderedBy": "Dr. Raymond Alvarez, MD",
      "readBy": "Dr. Patricia Ramos, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "32M pre-employment physical; no symptoms.",
      "technique": "PA and lateral views, upright, full inspiration.",
      "findings": "Heart: Normal size and silhouette.\\n\\nMediastinum: Normal contours, no widening.\\n\\nLungs: Clear bilaterally. No consolidation, effusion, or pneumothorax.\\n\\nBones: No acute osseous abnormality.",
      "impression": "1. Normal chest radiograph.",
      "dictated": "10/02/2023 10:15",
      "verified": "10/02/2023 13:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-295",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/01/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-663",
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
      "date": "2010",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Hepatitis B (3/3)",
      "date": "1992",
      "site": "Right vastus lateralis IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: HTN, T2DM, alive at 58",
    "Father: Hyperlipidemia, alive at 60",
    "Brother: Asthma, age 28",
    "Paternal grandfather: Stroke at age 72, deceased"
  ],
  "socialHistory": [
    ["Occupation", "Software engineer — remote work"],
    ["Marital", "Single"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 2-3 drinks on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Running 3-4x/week, recreational basketball 1x/week"],
    ["Housing", "Lives alone in apartment; mother nearby"],
    ["Safety", "Denies firearms; seatbelt"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "encephalitis",
    "diagnosis": "Arboviral Encephalitis (Suspected Eastern Equine Encephalitis)",
    "acuity": 2,
    "presentation": "Headache",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Trevor Washington is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did headache start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started I went camping last weekend and started feeling really tired and achy about four.'",
        "character": "'It's headache \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Arboviral Encephalitis.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Cetirizine 10mg daily; Acetaminophen 500mg PRN.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Mother: HTN, T2DM, alive at 58  Father: Hyperlipidemia, alive at 60  Brother: Asthma, age 28",
        "social": "Occupation: Software engineer \u2014 remote work  Marital: Single  Tobacco: Never smoker  Alcohol: Social, 2-3 drinks on weekends  Drugs: Denies"
    },
    "examManeuvers": [
        "Level of consciousness and GCS",
        "Cranial nerve examination",
        "Motor strength testing",
        "Sensory testing",
        "Coordination and cerebellar testing",
        "Gait assessment if applicable",
        "Meningeal signs",
        "Vital signs"
    ],
    "examFindings": {
        "Level of consciousness and GCS": "Clinical finding consistent with Arboviral Encephalitis. Document specifically what you observe.",
        "Cranial nerve examination": "Clinical finding consistent with Arboviral Encephalitis. Document specifically what you observe.",
        "Motor strength testing": "Clinical finding consistent with Arboviral Encephalitis. Document specifically what you observe.",
        "Sensory testing": "Clinical finding consistent with Arboviral Encephalitis. Document specifically what you observe.",
        "Coordination and cerebellar testing": "Clinical finding consistent with Arboviral Encephalitis. Document specifically what you observe.",
        "Gait assessment if applicable": "Clinical finding consistent with Arboviral Encephalitis. Document specifically what you observe.",
        "Meningeal signs": "Clinical finding consistent with Arboviral Encephalitis. Document specifically what you observe.",
        "Vital signs": "Clinical finding consistent with Arboviral Encephalitis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Arboviral Encephalitis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Arboviral Encephalitis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Arboviral Encephalitis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Arboviral Encephalitis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Trevor Washington's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Arboviral Encephalitis (Suspected Eastern Equine Encephalitis). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
