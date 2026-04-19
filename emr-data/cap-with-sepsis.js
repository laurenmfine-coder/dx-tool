// Virtual EMR Case: Community-Acquired Pneumonia with Sepsis
// Variant: cap-with-sepsis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Walter Higgins",
  "patientHPI": "I've been managing my breathing problems and other health issues pretty well lately. I can still get short of breath when I climb stairs, but that's been normal for me. My blood sugar seems stable, and I haven't had any chest pain or heart racing.",
    "dob": "11/03/1950",
    "age": 74,
    "sex": "Male",
    "mrn": "RDX-2025-19837",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B with AARP Supplemental",
    "pcp": "Dr. Elena Vasquez, MD",
    "pharmacy": "Publix Pharmacy — 1500 N University Dr, Coral Springs, FL",
    "language": "English",
    "race": "White",
    "address": "502 Peachtree Rd, Pittsburgh, PA 15202",
    "phone": "(954) 555-3271",
    "email": "w.higgins50@email.com",
    "emergencyContact": {
      "name": "Diane Higgins (Wife)",
      "phone": "(954) 555-3290"
    }
  },
  "problems": [
    {
      "problem": "COPD — GOLD Stage II (Moderate)",
      "icd": "J44.1",
      "onset": "2015",
      "status": "Active",
      "notes": "FEV1 58% predicted; on LABA/ICS inhaler; 1 exacerbation requiring hospitalization 2023"
    },
    {
      "problem": "Coronary Artery Disease — Post-CABG",
      "icd": "I25.10",
      "onset": "2017",
      "status": "Active",
      "notes": "3-vessel CABG 2017; on aspirin, statin, metoprolol; EF 50% on last echo"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.9",
      "onset": "2008",
      "status": "Active",
      "notes": "A1c 7.2%; on metformin and glipizide"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2002",
      "status": "Active",
      "notes": "On lisinopril and metoprolol"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3a",
      "icd": "N18.31",
      "onset": "2020",
      "status": "Active",
      "notes": "eGFR 52; multifactorial — DM, HTN"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone-Salmeterol (Advair Diskus) 250/50 BID",
      "sig": "Inhale 1 puff twice daily; rinse mouth after use",
      "prescriber": "Dr. Vasquez",
      "start": "06/2016",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Tiotropium (Spiriva HandiHaler) 18mcg daily",
      "sig": "Inhale 1 capsule via HandiHaler daily",
      "prescriber": "Dr. Vasquez",
      "start": "06/2016",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Albuterol HFA 90mcg PRN",
      "sig": "Inhale 2 puffs every 4-6 hours as needed for shortness of breath",
      "prescriber": "Dr. Vasquez",
      "start": "01/2016",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Metoprolol Succinate 50mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Vasquez",
      "start": "06/2017",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Vasquez",
      "start": "03/2008",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Vasquez",
      "start": "06/2017",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Vasquez",
      "start": "06/2017",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Vasquez",
      "start": "04/2009",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Glipizide 5mg BID",
      "sig": "Take 1 tablet by mouth twice daily before meals",
      "prescriber": "Dr. Vasquez",
      "start": "01/2020",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
      "type": "Drug",
      "reaction": "Rash — maculopapular, diffuse",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/15/2024",
      "bp": "128/74",
      "hr": 68,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "94%",
      "wt": "178 lbs",
      "ht": "5'11\"",
      "bmi": 24.8,
      "setting": "PCP Office"
    },
    {
      "date": "05/08/2024",
      "bp": "132/78",
      "hr": 70,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "93%",
      "wt": "180 lbs",
      "ht": "5'11\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Elena Vasquez, MD",
      "cc": "Follow-up: COPD, DM2, CKD, post-CABG",
      "hpi": "74-year-old male with COPD GOLD II, post-CABG, DM2, CKD 3a for follow-up. COPD stable — using inhalers as directed. No exacerbations since hospitalization 2023. A1c 7.2% — stable. Kidney function stable. Quit smoking 2015. Reports mild dyspnea on exertion with stair climbing. No chest pain, palpitations, or edema.",
      "exam": "General: Thin, NAD. Lungs: Diminished breath sounds bilateral bases, mild expiratory wheezing. CV: RRR, median sternotomy scar well-healed. Abdomen: Soft, NT. Extremities: No edema.",
      "assessment": "1. COPD — stable on current regimen\n2. CAD post-CABG — stable\n3. T2DM — at goal\n4. CKD 3a — stable\n5. HTN — controlled",
      "plan": "1. Continue all medications\n2. Pulmonary rehab — patient declined again\n3. Flu and COVID vaccines given today\n4. Annual PFTs scheduled\n5. RTC 6 months or PRN for exacerbation"
    }
  ],
  "labs": [
    {
      "date": "11/15/2024",
      "time": "09:00",
      "orderedBy": "Dr. Elena Vasquez, MD",
      "collected": "11/15/2024 08:20",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-111515",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "39.4", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "210", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "118", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "24", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.4", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "eGFR", "value": "52", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            { "test": "HbA1c", "value": "7.2", "unit": "%", "range": "<5.7 normal", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "05/08/2024",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2024-05081",
      "status": "FINAL",
      "orderedBy": "Dr. Elena Vasquez, MD",
      "readBy": "Dr. Lisa Moreno, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "74M COPD, post-CABG — annual screening.",
      "technique": "PA and lateral views, upright.",
      "findings": "Heart: Enlarged cardiac silhouette (cardiothoracic ratio 0.56). Median sternotomy wires intact.\\n\\nLungs: Hyperinflated. Bilateral apical blebs. No consolidation, effusion, or pneumothorax. Flattened diaphragms.\\n\\nMediastinum: Aortic calcifications.",
      "impression": "1. COPD — hyperinflation with bilateral apical blebs.\\n2. Cardiomegaly — stable.\\n3. No acute process.",
      "dictated": "05/08/2024 13:20",
      "verified": "05/08/2024 15:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "11/15/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD125",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-725",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "04/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-112",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-305",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: CHF, COPD, deceased at 78",
    "Father: MI at 62, T2DM, deceased at 70",
    "Brother: COPD, CAD, alive at 71",
    "Sister: T2DM, alive at 68"
  ],
  "socialHistory": [
    ["Occupation", "Retired electrician (IBEW)"],
    ["Marital", "Married, 3 adult children"],
    ["Tobacco", "Former smoker — 40 pack-years; quit 2015"],
    ["Alcohol", "1-2 beers on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 15-20 min daily; limited by dyspnea"],
    ["Housing", "Lives with wife in single-story home"],
    ["Safety", "No firearms; home O2 not currently needed"],
    ["Advance Directive", "Living will on file; HCP: wife Diane Higgins; DNR/DNI discussed but NOT elected — Full code"]
  ],
  "meta": {
    "caseId": "cap-with-sepsis",
    "diagnosis": "Community-Acquired Pneumonia with Sepsis (Streptococcus pneumoniae, CURB-65 Score 3)",
    "acuity": 2,
    "presentation": "Fever/Sepsis",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Walter Higgins is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did fever/sepsis start?",
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
        "onset": "'The symptoms started I've been managing my breathing problems and other health issues pretty well lat.'",
        "character": "'It's fever/sepsis \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Community-Acquired Pneumonia with Sepsis.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Fluticasone-Salmeterol (Advair Diskus) 250/50 BID; Tiotropium (Spiriva HandiHaler) 18mcg daily; Albuterol HFA 90mcg PRN; Metoprolol Succinate 50mg daily; Lisinopril 20mg daily; Aspirin 81mg daily; Atorvastatin 40mg QHS; Metformin 1000mg BID.'",
        "allergies": "'My allergies are Sulfa drugs (Trimethoprim-Sulfamethoxazole).'",
        "family": "Mother: CHF, COPD, deceased at 78  Father: MI at 62, T2DM, deceased at 70  Brother: COPD, CAD, alive at 71",
        "social": "Occupation: Retired electrician (IBEW)  Marital: Married, 3 adult children  Tobacco: Former smoker \u2014 40 pack-years; quit 2015  Alcohol: 1-2 beers on weekends  Drugs: Denies"
    },
    "examManeuvers": [
        "General appearance and toxicity",
        "Vital signs with temperature",
        "Skin for rash, lesions, or signs of infection",
        "Lymph node palpation",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Source-specific examination"
    ],
    "examFindings": {
        "General appearance and toxicity": "Clinical finding consistent with Community-Acquired Pneumonia with Sepsis. Document specifically what you observe.",
        "Vital signs with temperature": "Clinical finding consistent with Community-Acquired Pneumonia with Sepsis. Document specifically what you observe.",
        "Skin for rash, lesions, or signs of infection": "Clinical finding consistent with Community-Acquired Pneumonia with Sepsis. Document specifically what you observe.",
        "Lymph node palpation": "Clinical finding consistent with Community-Acquired Pneumonia with Sepsis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Community-Acquired Pneumonia with Sepsis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Community-Acquired Pneumonia with Sepsis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Community-Acquired Pneumonia with Sepsis. Document specifically what you observe.",
        "Source-specific examination": "Clinical finding consistent with Community-Acquired Pneumonia with Sepsis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Community-Acquired Pneumonia with Sepsis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Community-Acquired Pneumonia with Sepsis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Community-Acquired Pneumonia with Sepsis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Community-Acquired Pneumonia with Sepsis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Walter Higgins's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Community-Acquired Pneumonia with Sepsis (Streptococcus pneumoniae, CURB-65 Score 3). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
