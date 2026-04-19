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
    },
    "chiefComplaint": "Fever and cough for 3 days"
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
            {
              "test": "WBC",
              "value": "7.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "39.4",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "210",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "118",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "24",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "52",
              "unit": "mL/min/1.73m²",
              "range": ">60",
              "flag": "L"
            }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            {
              "test": "HbA1c",
              "value": "7.2",
              "unit": "%",
              "range": "<5.7 normal",
              "flag": "H"
            }
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
    [
      "Occupation",
      "Retired electrician (IBEW)"
    ],
    [
      "Marital",
      "Married, 3 adult children"
    ],
    [
      "Tobacco",
      "Former smoker — 40 pack-years; quit 2015"
    ],
    [
      "Alcohol",
      "1-2 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 15-20 min daily; limited by dyspnea"
    ],
    [
      "Housing",
      "Lives with wife in single-story home"
    ],
    [
      "Safety",
      "No firearms; home O2 not currently needed"
    ],
    [
      "Advance Directive",
      "Living will on file; HCP: wife Diane Higgins; DNR/DNI discussed but NOT elected — Full code"
    ]
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
    "patientPersona": "Walter appears fatigued and mildly anxious but cooperative. He's breathing somewhat laboriously and seems genuinely concerned about feeling worse than usual. He's forthcoming with information but occasionally needs prompting for details.",
    "interviewQuestions": [
      "When did you first start feeling unwell, and how have your symptoms progressed?",
      "Can you describe your breathing difficulties - how are they different from your usual COPD symptoms?",
      "Have you had any fever, chills, or night sweats recently?",
      "Are you producing any sputum or phlegm? If so, what color and consistency?",
      "Have you experienced any chest pain or discomfort?",
      "How has your energy level been lately? Any unusual fatigue or weakness?",
      "Have you had any nausea, vomiting, or changes in appetite?",
      "Any confusion or changes in your mental clarity?",
      "Have you been taking all your regular medications as prescribed?",
      "Any recent travel, sick contacts, or hospitalizations?",
      "How well have you been able to perform your usual daily activities?",
      "Any changes in urination or other symptoms?",
      "Have you used your rescue inhaler more than usual lately?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Could you ask it a different way?",
      "onset": "I started feeling run down about 4 days ago. At first I thought it was just my usual breathing acting up, but yesterday I started feeling feverish and really weak. This morning I could barely get out of bed.",
      "character": "My breathing feels different than usual - it's harder work and I feel like I can't get enough air even when I'm just sitting. I've also been having some aching in my chest when I cough.",
      "location": "The chest discomfort is mostly on my right side, kind of deep inside. It's not like the heart pain I had before my surgery.",
      "severity": "The breathing trouble is probably a 7 out of 10 - much worse than my usual 3 or 4. The fatigue is really bad, maybe an 8. I can barely make it to the bathroom without getting winded.",
      "aggravating": "Any movement makes the breathing worse. Lying flat makes it harder to breathe. Coughing really brings on the chest pain.",
      "relieving": "My rescue inhaler helps a little bit but not like it usually does. Sitting up helps some with the breathing.",
      "associated": "I've had chills and felt feverish, been coughing up thick yellowish-green mucus, and I'm so tired I can barely function. My appetite is gone and I've been a bit confused about what day it is.",
      "denies": "No chest pain like my heart problems, no leg swelling, no blood in the sputum, and no severe headache.",
      "history": "I've had COPD flares before, but this feels different. I've never felt this sick and weak with my breathing problems. Had pneumonia once about 10 years ago but it wasn't this bad.",
      "medications": "Fluticasone-Salmeterol (Advair Diskus) 250/50 BID; Tiotropium (Spiriva HandiHaler) 18mcg daily; Albuterol HFA 90mcg PRN; Metoprolol Succinate 50mg daily; Lisinopril 20mg daily; Aspirin 81mg daily; Atorvastatin 40mg QHS; Metformin 1000mg BID",
      "allergies": "Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
      "family": "My mother had COPD and lung problems, and my father and brother both had heart disease. My mother died of breathing and heart problems.",
      "social": "I'm a retired electrician, been married 45 years with three kids. I smoked for 40 years but quit about 8 years ago. I have a couple beers on weekends but nothing heavy. No illegal drugs."
    },
    "examManeuvers": [
      "General appearance and mental status",
      "Vital signs including orthostatics",
      "Pulmonary examination including percussion",
      "Cardiac examination",
      "Lymph node examination",
      "Abdominal examination",
      "Extremity examination for edema and perfusion",
      "Neurological assessment",
      "Skin examination"
    ],
    "examFindings": {
      "General appearance and mental status": "Ill-appearing elderly male in mild respiratory distress, alert but appears fatigued and mildly confused about date",
      "Vital signs including orthostatics": "BP 102/58 (orthostatic drop), HR 98, RR 24, Temp 101.8°F, SpO2 88% on room air",
      "Pulmonary examination including percussion": "Dullness to percussion over right lower lobe, decreased breath sounds and bronchial breathing right base, inspiratory crackles right lower lobe",
      "Cardiac examination": "Tachycardic regular rhythm, no murmurs, rubs, or gallops, normal S1/S2",
      "Lymph node examination": "No palpable lymphadenopathy",
      "Abdominal examination": "Soft, non-tender, no organomegaly, normal bowel sounds",
      "Extremity examination for edema and perfusion": "No peripheral edema, capillary refill 3 seconds, pulses present but weak",
      "Neurological assessment": "Alert, oriented to person and place but not time, no focal neurological deficits",
      "Skin examination": "Warm and dry, no rashes or lesions, mild pallor"
    },
    "ddxTargets": [
      "Community-Acquired Pneumonia with Sepsis (Streptococcus pneumoniae, CURB-65 Score 3) (correct diagnosis)",
      "COPD Exacerbation with bacterial superinfection",
      "Healthcare-associated pneumonia",
      "Pulmonary embolism with pneumonia",
      "Acute myocardial infarction",
      "Sepsis from urinary tract infection",
      "Congestive heart failure exacerbation"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on COPD exacerbation given patient's history, missing signs of pneumonia and sepsis",
      "prematureClosure": "May stop at COPD flare without considering infectious etiology and systemic illness severity",
      "availabilityBias": "Recent COPD cases may overshadow recognition of pneumonia with septic presentation"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given this patient's presentation, what specific historical elements would help you distinguish between a COPD exacerbation and pneumonia? How might his multiple comorbidities affect your assessment?",
      "phase5": "Now that you've gathered your history and exam findings, let's think about the clinical picture. What combination of findings suggests this goes beyond a simple COPD exacerbation? Consider his vital signs, mental status, and physical findings - what scoring system might help you assess severity?",
      "finalDebrief": "This case demonstrates how pneumonia in elderly patients with COPD can present with sepsis. The CURB-65 score of 3 indicated high risk requiring hospitalization. Notice how the initial presentation could easily be mistaken for COPD exacerbation, but the fever, purulent sputum, focal exam findings, and septic physiology pointed to bacterial pneumonia. What would have happened if we anchored on COPD alone?"
    }
  }
};
