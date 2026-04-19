/* emr-data/copd-v1.js — Auto-generated EMR case data for COPD Exacerbation */
window.EMR_DATA = {
  "patient": {
    "name": "Bernard Collins",
    "patientHPI": "My breathing has been getting worse over the past three days, and my cough is bringing up more junk than usual. I know I have lung problems from smoking, but this feels different - I'm more short of breath than normal even when I'm just sitting around the house.",
    "dob": "02/26/1955",
    "age": "71",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-121842",
    "language": "English",
    "race": "White",
    "phone": "(513) 555-3230",
    "email": "bernard.collins@email.com",
    "address": "3390 Hickory Rd, Cleveland, OH 44107",
    "insurance": "Cigna PPO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Christina Collins",
      "phone": "(502) 555-6253",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Worsening cough and dyspnea for 3 days",
    "diagnosis": "COPD Exacerbation"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "COPD (GOLD Stage 3)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Current smoker",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Osteoporosis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Tiotropium",
      "dose": "18mcg",
      "route": "INH",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    },
    {
      "id": "med-2",
      "name": "Fluticasone/Salmeterol",
      "dose": "250/50",
      "route": "INH",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-3",
      "name": "Albuterol",
      "dose": "90mcg",
      "route": "INH",
      "frequency": "PRN",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-4",
      "name": "Amlodipine",
      "dose": "5mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    },
    {
      "id": "med-5",
      "name": "Prednisone",
      "dose": "5mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Michelle Foster, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "reaction": "Nausea/vomiting",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "142/86",
      "hr": "102",
      "rr": "28",
      "temp": "38.0°C",
      "spo2": "86%",
      "pain": "4/10",
      "bmi": "29",
      "weight": "80 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worsening cough and dyspnea for 3 days",
      "hpi": "Bernard Collins is a 71-year-old male presenting with worsening cough and dyspnea for 3 days. Past medical history includes COPD (GOLD Stage 3), Current smoker, Hypertension, Osteoporosis. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "COPD Exacerbation — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-456247",
      "collected": "03/01/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "14.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Ph",
              "value": "7.32",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "L"
            },
            {
              "test": "Pco2",
              "value": "58",
              "unit": "mmHg",
              "range": "35-45",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/01/2026",
      "study": "Chest X-Ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-643229",
      "clinical": "Worsening cough and dyspnea for 3 days",
      "technique": "Standard protocol",
      "findings": "Hyperinflated lungs. Flattened diaphragms. Increased AP diameter. No consolidation. No pneumothorax.",
      "impression": "Chronic emphysematous changes without acute infiltrate.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 45 pack-years"
    ],
    [
      "Oxygen",
      "Home O2 2L NC at night"
    ],
    [
      "Occupation",
      "Retired mechanic"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Mr. Collins appears anxious and mildly distressed, sitting forward slightly to ease his breathing. He is cooperative and forthcoming about his symptoms but occasionally pauses mid-sentence to catch his breath. He acknowledges his long smoking history with some defensiveness but expresses genuine concern that this episode feels different from his usual COPD flares.",
    "interviewQuestions": [
      "Can you describe when these symptoms started and how they've progressed?",
      "What does your cough sound like and what are you bringing up?",
      "How does this compare to your usual COPD symptoms?",
      "Have you had any fever, chills, or night sweats?",
      "Are you having any chest pain or chest tightness?",
      "How much can you walk before getting short of breath now compared to usual?",
      "Have you been using your rescue inhaler more than normal?",
      "Any recent changes in your medications or missed doses?",
      "Have you been around anyone who's been sick recently?",
      "Any leg swelling, weight gain, or changes in appetite?",
      "How has your sleep been affected?",
      "Any nausea, vomiting, or changes in bowel movements?",
      "Have you traveled anywhere recently or been exposed to unusual dust or fumes?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - could you explain that differently?",
      "onset": "It started about three days ago and has been getting progressively worse each day. At first I thought it was just my usual lung problems acting up, but it's definitely gotten worse than my normal bad days.",
      "character": "The cough is deeper and more frequent than usual, and I'm bringing up thick yellow-green mucus that's definitely more than normal. My breathing feels tight and labored even when I'm sitting still.",
      "location": "The breathing difficulty is all through my chest, and I have this tight feeling across my whole chest area. No specific pain shooting anywhere else.",
      "severity": "I'd say the breathing is about a 7 out of 10 - it's definitely worse than my usual 4 or 5. I can barely walk to the bathroom without getting winded, and normally I can at least get around the house okay.",
      "aggravating": "Any movement makes it worse, even just getting up from a chair. Lying flat is really hard - I've been sleeping in my recliner for two nights now.",
      "relieving": "My albuterol inhaler helps a little bit but not nearly as much as it usually does. The oxygen at night helps some, but I've been needing it during the day too.",
      "associated": "I've had some low-grade fever and chills, feel more tired than usual, and my appetite has been poor. I've also noticed my heart seems to be beating faster.",
      "denies": "No chest pain like a heart attack, no leg swelling, no blood in what I'm coughing up, and no sudden onset - it's been gradual over three days.",
      "history": "I have flare-ups of my COPD maybe 2-3 times a year, but this feels worse and different. Usually my inhaler works better and I don't get the fever and colored sputum like this.",
      "medications": "Tiotropium; Fluticasone/Salmeterol; Albuterol; Amlodipine; Prednisone",
      "allergies": "Codeine",
      "family": "Nothing really runs in my family that would relate to this - my parents both lived to their 80s without major lung problems.",
      "social": "I'm a retired mechanic, been smoking about a pack and a half daily for over 30 years. I know I should quit but it's hard. I use oxygen at home at night, 2 liters through a nasal cannula. No recent travel or unusual exposures."
    },
    "examManeuvers": [
      "General appearance and respiratory distress assessment",
      "Pulmonary auscultation",
      "Percussion of chest",
      "Assessment of accessory muscle use",
      "Cardiac auscultation",
      "Lower extremity edema assessment",
      "Jugular venous pressure assessment",
      "Lymph node examination",
      "Abdominal examination",
      "Neurologic assessment including mental status"
    ],
    "examFindings": {
      "General appearance and respiratory distress assessment": "Appears mildly distressed, sitting upright, using pursed-lip breathing, speaking in short phrases due to dyspnea",
      "Pulmonary auscultation": "Decreased breath sounds bilaterally with expiratory wheeze and scattered rhonchi throughout, particularly in bilateral lower lobes",
      "Percussion of chest": "Hyperresonant to percussion consistent with underlying emphysema, no dullness to suggest consolidation",
      "Assessment of accessory muscle use": "Mild use of accessory muscles of respiration, intercostal retractions present",
      "Cardiac auscultation": "Tachycardic regular rhythm, no murmurs, rubs, or gallops appreciated",
      "Lower extremity edema assessment": "No peripheral edema, pulses intact bilaterally",
      "Jugular venous pressure assessment": "JVP not elevated, no signs of right heart failure",
      "Lymph node examination": "No cervical, supraclavicular, or axillary lymphadenopathy",
      "Abdominal examination": "Soft, non-tender, no organomegaly or masses",
      "Neurologic assessment including mental status": "Alert and oriented, no focal neurologic deficits, appropriate affect"
    },
    "ddxTargets": [
      "COPD exacerbation with bacterial superinfection (correct diagnosis)",
      "Pneumonia",
      "Congestive heart failure exacerbation",
      "Pulmonary embolism",
      "Pneumothorax",
      "Acute bronchitis",
      "Lung cancer with post-obstructive pneumonia"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known COPD diagnosis and missing bacterial superinfection or other serious causes of acute decompensation in this high-risk patient",
      "prematureClosure": "May stop at 'COPD flare' without considering infectious etiology given fever, purulent sputum, and poor response to usual bronchodilator therapy",
      "availabilityBias": "Recent experience with simple COPD exacerbations may lead to under-recognition of the infectious component requiring antibiotic therapy"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given that this is a 71-year-old with severe COPD presenting with acute worsening, what key historical features would help you distinguish between a simple exacerbation versus one requiring additional intervention? What red flags might suggest a more serious process?",
      "phase5": "Nice work gathering the history and exam. You found fever, purulent sputum production, and poor response to his usual bronchodilator. How does this clinical picture help refine your differential diagnosis? What does the combination of his underlying COPD with these acute infectious signs suggest for management?",
      "finalDebrief": "This case illustrates a classic COPD exacerbation with bacterial superinfection. The key distinguishing features from a simple exacerbation were the fever, change in sputum character to purulent, and inadequate response to bronchodilators. This combination in a severe COPD patient indicates need for both bronchodilator optimization and antibiotic therapy. How might you approach antibiotic selection and what other supportive measures would you consider?"
    }
  }
};
