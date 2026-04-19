// Virtual EMR Case: Testicular Trauma with Rupture
// Variant: testicular-traumarupture | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Dylan Oconnor",
  "patientHPI": "I was playing lacrosse during practice yesterday when I took a really hard hit from another player's stick right between my legs, and now I'm having severe pain and swelling down there. The pain is getting worse instead of better, and I'm worried something might be seriously wrong because it doesn't feel like a normal sports injury.",
    "dob": "10/28/2001",
    "age": 23,
    "sex": "Male",
    "mrn": "RDX-2025-75491",
    "pronouns": "He/Him",
    "insurance": "Aetna (Parent Plan)",
    "pcp": "Dr. Steven Walsh, MD",
    "pharmacy": "CVS Pharmacy — 3100 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "2596 S Halsted St, Baltimore, MD 21218",
    "phone": "(954) 555-4156",
    "email": "d.oconnor01@email.com",
    "emergencyContact": {
      "name": "Brian Oconnor (Father)",
      "phone": "(954) 555-4170"
    }
  },
  "problems": [
    {
      "problem": "Exercise-Induced Asthma",
      "icd": "J45.990",
      "onset": "2012",
      "status": "Active",
      "notes": "Uses albuterol pre-exercise; well controlled"
    },
    {
      "problem": "ACL Reconstruction, Left Knee",
      "icd": "Z87.39",
      "onset": "2020",
      "status": "Resolved",
      "notes": "Full recovery; returned to sport"
    }
  ],
  "medications": [
    {
      "name": "Albuterol MDI 90mcg 2 puffs PRN",
      "sig": "Inhale 2 puffs 15-30 minutes before exercise or as needed for wheezing",
      "prescriber": "Dr. Walsh",
      "start": "01/2016",
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
      "date": "08/15/2024",
      "bp": "118/72",
      "hr": 62,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "180 lbs",
      "ht": "6'0\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "02/10/2024",
      "bp": "116/70",
      "hr": 60,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "178 lbs",
      "ht": "6'0\"",
      "bmi": 24.1,
      "setting": "PCP Office"
    },
    {
      "date": "08/20/2023",
      "bp": "114/68",
      "hr": 58,
      "rr": 12,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "176 lbs",
      "ht": "6'0\"",
      "bmi": 23.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Steven Walsh, MD",
      "cc": "Pre-season sports physical",
      "hpi": "23-year-old male college athlete (lacrosse) presenting for pre-season sports physical. No current complaints. Exercise-induced asthma well controlled with pre-exercise albuterol. Left knee — ACL reconstruction 2020 with full recovery; no instability or swelling. Reports regular training: weight room 5x/week and team practices daily. No chest pain, syncope, or family history of sudden cardiac death. No concussion history.",
      "exam": "General: Well-appearing, athletic male in NAD. HEENT: PERRL, EOMI. CV: RRR, no murmurs, normal S1/S2. Lungs: CTAB. Abdomen: Soft, NT/ND. MSK: Full ROM bilateral knees; left knee — healed surgical scars, stable to varus/valgus and Lachman, no effusion. Neuro: A&O x3, cranial nerves intact.",
      "assessment": "1. Pre-participation sports physical — cleared for full activity\n2. Exercise-induced asthma — well controlled\n3. S/P left ACL reconstruction — fully healed",
      "plan": "1. Cleared for lacrosse\n2. Continue pre-exercise albuterol\n3. RTC 1 year or PRN"
    },
    {
      "id": "V002",
      "date": "02/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Steven Walsh, MD",
      "cc": "Annual wellness",
      "hpi": "23-year-old male for annual checkup. No complaints. Active and healthy. Denies tobacco, minimal alcohol use on weekends.",
      "exam": "General: NAD. Vitals: WNL. CV: RRR. Lungs: CTAB. GU: Deferred. Neuro: Intact.",
      "assessment": "1. Annual wellness — healthy young male",
      "plan": "1. Age-appropriate screening current\n2. RTC 1 year"
    }
  ],
  "labs": [
    {
      "date": "08/15/2024",
      "time": "10:00",
      "orderedBy": "Dr. Steven Walsh, MD",
      "collected": "08/15/2024 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-081540",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.0", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "16.0", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "47.2", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "238", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/2020",
      "study": "MRI LEFT KNEE WITHOUT CONTRAST",
      "accession": "IMG-2020-06152",
      "status": "FINAL",
      "orderedBy": "Dr. Michael Torres, MD (Orthopedics)",
      "readBy": "Dr. Samuel Ortiz, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "19M left knee injury during lacrosse game. Suspected ACL tear.",
      "technique": "Multiplanar MRI left knee without contrast.",
      "findings": "ACL: Complete tear with retraction of the tibial stump.\\n\\nMenisci: Small peripheral tear medial meniscus posterior horn.\\n\\nMCL/LCL: Intact.\\n\\nBone: Bone bruising lateral femoral condyle and posterolateral tibial plateau (pivot shift pattern).\\n\\nCartilage: Intact articular cartilage surfaces.\\n\\nEffusion: Moderate joint effusion.",
      "impression": "1. Complete ACL rupture.\\n2. Small peripheral tear medial meniscus posterior horn.\\n3. Bone contusions consistent with pivot shift mechanism.\\n4. Moderate joint effusion.",
      "dictated": "06/15/2020 18:00",
      "verified": "06/16/2020 08:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "09/28/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-260",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "09/28/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-838",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2015",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal ACWY (Menactra)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Hypertension, alive at 52",
    "Mother: Healthy, alive at 50",
    "Brother: Healthy, age 20",
    "No family history of sudden cardiac death or cardiomyopathy"
  ],
  "socialHistory": [
    ["Occupation", "College student (Senior) / NCAA lacrosse player"],
    ["Marital", "Single"],
    ["Tobacco", "Never"],
    ["Alcohol", "Social — weekends, 3-4 drinks"],
    ["Drugs", "Denies"],
    ["Exercise", "NCAA Division II lacrosse; weight training 5x/week"],
    ["Housing", "Off-campus apartment with teammates"],
    ["Safety", "Wears protective equipment (lacrosse); seatbelt; no helmet for cycling"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "testicular-traumarupture",
    "diagnosis": "Testicular Trauma with Rupture",
    "acuity": 2,
    "presentation": "Urologic Emergency",
    "category": "urologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Dylan Oconnor is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did urologic emergency start?",
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
        "onset": "'The symptoms started I was playing lacrosse during practice yesterday when I took a really hard hit f.'",
        "character": "'It's urologic emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Testicular Trauma with Rupture.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Albuterol MDI 90mcg 2 puffs PRN.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Father: Hypertension, alive at 52  Mother: Healthy, alive at 50  Brother: Healthy, age 20",
        "social": "Occupation: College student (Senior) / NCAA lacrosse player  Marital: Single  Tobacco: Never  Alcohol: Social \u2014 weekends, 3-4 drinks  Drugs: Denies"
    },
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with Testicular Trauma with Rupture. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Testicular Trauma with Rupture. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Testicular Trauma with Rupture. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Testicular Trauma with Rupture. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Testicular Trauma with Rupture. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Testicular Trauma with Rupture. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Testicular Trauma with Rupture. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Testicular Trauma with Rupture. Document specifically what you observe."
    },
    "ddxTargets": [
        "Testicular Trauma with Rupture (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Testicular Trauma with Rupture, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Testicular Trauma with Rupture, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Testicular Trauma with Rupture based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Dylan Oconnor's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Testicular Trauma with Rupture. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
