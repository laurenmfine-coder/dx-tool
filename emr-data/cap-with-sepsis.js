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
},
  "guided": {
    "supported": true,
    "patientPersona": "Walter appears mildly anxious and concerned about his worsening symptoms, speaking in measured sentences but breathing somewhat laboriously. He is cooperative and forthcoming with information, though downplaying the severity of his illness due to chronic respiratory issues. Despite visible distress, he maintains composure and describes symptoms matter-of-factly, having learned to adapt to chronic breathing problems.",
    "interviewQuestions": [
        "When did you first notice your breathing getting worse than usual?",
        "Have you had any fever or chills recently?",
        "Are you coughing more than normal, and if so, what does it look like?",
        "Have you had any chest pain or tightness?",
        "How would you rate your shortness of breath on a scale of 1-10?",
        "What makes your breathing worse or better right now?",
        "Have you had any nausea, vomiting, or changes in appetite?",
        "Any confusion, dizziness, or feeling lightheaded?",
        "Have you been taking your inhalers as prescribed?",
        "Any recent travel, sick contacts, or hospitalizations?",
        "How has your energy level been lately?",
        "Any urinary symptoms or changes in urination?",
        "Have you had pneumonia or similar infections before?"
    ],
    "patientResponses": {
        "default": "I'm not sure I understand what you're asking. Could you be more specific about my breathing or how I'm feeling?",
        "onset": "I started feeling worse about 3 days ago. At first I thought it was just my usual COPD acting up, but then I got the chills and fever yesterday.",
        "character": "My breathing feels much heavier than usual, like I'm working harder to get air in. It's different from my normal shortness of breath - more like drowning.",
        "location": "The breathing trouble is all over my chest. I have some aching on my right side when I take deep breaths or cough.",
        "severity": "I'd say my breathing is about a 7 out of 10 right now. I can barely walk to the bathroom without getting winded, which is much worse than my usual.",
        "aggravating": "Any movement makes it worse. Even sitting up straight is hard work. The coughing really wipes me out.",
        "relieving": "My rescue inhaler isn't helping much this time. Sitting still helps a little, but not like it usually does.",
        "associated": "I've had fever and chills since yesterday, been coughing up thick yellow-green stuff, and I feel completely exhausted. Lost my appetite too.",
        "denies": "No chest pain like my heart problems before. No nausea or vomiting. Haven't been confused, though I feel pretty weak.",
        "history": "I had pneumonia about 8 years ago and it felt similar to this, but not quite as bad as I feel now.",
        "medications": "Fluticasone-Salmeterol (Advair Diskus) 250/50 BID; Tiotropium (Spiriva HandiHaler) 18mcg daily; Albuterol HFA 90mcg PRN; Metoprolol Succinate 50mg daily; Lisinopril 20mg daily; Aspirin 81mg daily; Atorvastatin 40mg QHS; Metformin 1000mg BID",
        "allergies": "Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
        "family": "My mother had COPD and died from breathing problems. My father had heart attacks and diabetes like me.",
        "social": "I'm a retired electrician, been married 45 years. Smoked for 30 years but quit about 9 years ago. I have a couple beers on weekends but nothing more."
    },
    "examManeuvers": [
        "General appearance and mental status",
        "Vital signs including oxygen saturation",
        "Pulmonary auscultation",
        "Percussion of chest",
        "Tactile fremitus",
        "Cardiac examination",
        "Assessment for jugular venous distension",
        "Peripheral perfusion and capillary refill",
        "Lower extremity edema assessment"
    ],
    "examFindings": {
        "General appearance and mental status": "Ill-appearing elderly male in mild respiratory distress, alert and oriented, using accessory muscles, speaking in short phrases",
        "Vital signs including oxygen saturation": "BP 128/74, HR 68, Temp 98.4°F, RR 24, SpO2 94% on room air",
        "Pulmonary auscultation": "Diminished breath sounds at right base with inspiratory crackles, scattered expiratory wheezes bilaterally consistent with underlying COPD",
        "Percussion of chest": "Dullness to percussion over right lower lobe, hyperresonance elsewhere consistent with COPD",
        "Tactile fremitus": "Increased tactile fremitus over right lower lobe consolidation",
        "Cardiac examination": "Regular rate and rhythm, no murmurs, rubs, or gallops, well-healed sternotomy scar present",
        "Assessment for jugular venous distension": "JVP not elevated, no signs of right heart failure",
        "Peripheral perfusion and capillary refill": "Capillary refill <3 seconds, pulses present, no cyanosis of extremities",
        "Lower extremity edema assessment": "Trace bilateral lower extremity edema, unchanged from baseline per patient"
    },
    "ddxTargets": [
        "Community-Acquired Pneumonia with Sepsis (Streptococcus pneumoniae, CURB-65 Score 3) (correct diagnosis)",
        "COPD exacerbation with bacterial superinfection",
        "Congestive heart failure exacerbation",
        "Pulmonary embolism",
        "Myocardial infarction with pulmonary edema",
        "Viral pneumonia or bronchitis",
        "Pneumothorax"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on COPD exacerbation given patient's extensive pulmonary history, potentially missing signs of pneumonia and sepsis requiring urgent antibiotic therapy",
        "prematureClosure": "May stop investigation after identifying respiratory symptoms in COPD patient without fully assessing for pneumonia consolidation and systemic signs of infection",
        "availabilityBias": "Recent experience with COPD exacerbations may lead to underestimating this as pneumonia with sepsis, missing the higher acuity and need for aggressive treatment"
    },
    "coachPrompts": {
        "phase2": "Good start on your differential. I see you're thinking about this 74-year-old with COPD and worsening dyspnea. As you interview him, pay particular attention to what might differentiate a simple COPD exacerbation from something more serious. What specific questions will help you assess for infection versus other causes of his decompensation?",
        "phase5": "You've gathered good history and exam findings. His CURB-65 criteria put him at higher risk - he's over 65, has confusion or altered mental status, and meets other clinical criteria. The consolidation on exam with systemic symptoms suggests this isn't just a COPD flare. What does this clinical picture tell you about the urgency of treatment?",
        "finalDebrief": "This case illustrates how chronic conditions like COPD can mask acute infections. Walter had community-acquired pneumonia with sepsis, not just a COPD exacerbation. The key differentiators were the consolidation findings, purulent sputum, systemic symptoms, and CURB-65 score of 3 indicating high mortality risk. How did your thinking evolve from initial presentation to final diagnosis?"
    }
}
};
