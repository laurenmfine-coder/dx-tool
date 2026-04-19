/* emr-data/aaa-v1.js — EMR case data for Ruptured Abdominal Aortic Aneurysm */
window.EMR_DATA = {
  "patient": {
    "name": "Harold Jensen",
  "patientHPI": "I was just sitting at home when this horrible tearing pain hit me right in my belly and shot straight through to my back - I've never felt anything like it, it's like someone is ripping me apart from the inside and I can barely stand it.",
    "dob": "06/15/1954",
    "age": "72",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-957460",
    "language": "English",
    "race": "White",
    "phone": "(513) 555-3529",
    "email": "harold.jensen@email.com",
    "address": "4442 Iris Blvd, Memphis, TN 38111",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Walgreens \u2014 Federal Hwy",
    "emergencyContact": {
      "name": "Gloria Perez",
      "phone": "(313) 555-8692",
      "relationship": "Parent"
    },
    "chiefComplaint": "Tearing Belly and back, feels like it goes straight through",
    "diagnosis": "Ruptured Abdominal Aortic Aneurysm"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Known 4.5cm AAA",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Hyperlipidemia",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "COPD",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Amlodipine",
      "dose": "10mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-2",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-3",
      "name": "Atorvastatin",
      "dose": "80mg QHS",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "reaction": "Hives",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "09:08",
      "bp": "88/54",
      "hr": "124",
      "rr": "28",
      "temp": "36.6\u00b0C",
      "spo2": "95%",
      "pain": "10/10",
      "bmi": "23",
      "weight": "77 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Tearing Belly and back, feels like it goes straight through",
      "hpi": "Harold Jensen is a 72-year-old male presenting with tearing belly and back, feels like it goes straight through. Past medical history includes Hypertension, Known 4.5cm AAA, Hyperlipidemia, COPD. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ruptured Abdominal Aortic Aneurysm \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-291208",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "5.4",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "8.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "40",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "240",
              "unit": "x10\u00b3/\u00b5L",
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
              "value": "141",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.9",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "101",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "22",
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
              "value": "1.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "86",
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
              "test": "Lactate",
              "value": "5.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "PT/INR",
              "value": "1.1",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            },
            {
              "test": "Type and Screen",
              "value": "O Positive",
              "unit": "",
              "range": "\u2014",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-646742",
      "clinical": "Tearing Belly and back, feels like it goes straight through",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "POCUS \u2013 FAST Exam",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-524270",
      "clinical": "Tearing Belly and back, feels like it goes straight through",
      "technique": "Standard protocol",
      "findings": "Free fluid in Morrison pouch and pelvis. Aorta >6cm.",
      "impression": "Positive FAST with large AAA \u2014 suspect rupture",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "POCUS \u2013 Aorta",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-516142",
      "clinical": "Tearing Belly and back, feels like it goes straight through",
      "technique": "Standard protocol",
      "findings": "Infrarenal aorta 6.8cm, irregular wall, possible contained rupture.",
      "impression": "Large AAA, likely rupture",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-160393",
      "clinical": "Tearing Belly and back, feels like it goes straight through",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 124 bpm. Low voltage",
      "impression": "Sinus tach \u2014 hemodynamic compromise",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
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
    "Father died of ruptured aneurysm at 68",
    "Brother had AAA repair at 70"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit 5 years ago, 40 pack-year history"
    ],
    [
      "Alcohol",
      "1-2 beers daily"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired mechanic"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
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
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Harold Jensen's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Harold is visibly distressed and diaphoretic, clutching his abdomen and appearing restless due to severe pain. He is cooperative but struggles to speak in full sentences, frequently grimacing and describing the pain as the worst he's ever experienced. Given his known AAA history, he seems anxious and worried this might be \"the big one.\"",
    "interviewQuestions": [
        "Can you describe exactly when this pain started?",
        "On a scale of 1-10, how would you rate your pain?",
        "Can you show me exactly where the pain is located?",
        "Does the pain move or radiate anywhere?",
        "What does the pain feel like - sharp, dull, tearing, cramping?",
        "Is there anything that makes the pain better or worse?",
        "Have you had any nausea, vomiting, or changes in bowel movements?",
        "Have you noticed any weakness, dizziness, or feeling faint?",
        "Have you had any similar episodes of pain before?",
        "When was your last CT scan or ultrasound for your aneurysm?",
        "Are you taking all your regular medications?",
        "Have you had any recent trauma or heavy lifting?",
        "Do you have any allergies to medications?"
    ],
    "patientResponses": {
        "default": "I'm sorry, I'm having trouble focusing with this pain - can you ask that again?",
        "onset": "It started about an hour ago, just suddenly while I was sitting in my chair watching TV - came out of nowhere like a lightning bolt",
        "character": "It's this horrible tearing sensation, like someone is ripping me apart from the inside - I've never felt anything like it",
        "location": "Right here in my belly button area and it goes straight through to my back, like it's going right through me",
        "severity": "This is easily a 10 out of 10 - it's the worst pain I've ever had and I can barely think straight",
        "aggravating": "Any movement makes it worse, even trying to shift positions - I just want to curl up but that doesn't help either",
        "relieving": "Nothing helps - I tried changing positions, nothing touches this pain",
        "associated": "I feel really lightheaded and dizzy, and I think I might have thrown up once when it first started",
        "denies": "No chest pain, no trouble breathing more than usual, no leg pain or numbness",
        "history": "Never had pain like this before - I've had some back pain but nothing even close to this severity",
        "medications": "Amlodipine; Lisinopril; Atorvastatin",
        "allergies": "Sulfa drugs",
        "family": "My father died from a ruptured aneurysm when he was 68, and my brother had to have his aneurysm repaired when he was 70",
        "social": "I'm a retired mechanic, quit smoking 5 years ago but smoked for 40 years, I have a couple beers most nights, no drugs"
    },
    "examManeuvers": [
        "Vital signs assessment",
        "Abdominal inspection",
        "Abdominal palpation",
        "Pulsatile abdominal mass assessment",
        "Peripheral pulse examination",
        "Cardiovascular examination",
        "Back examination",
        "Neurological assessment of lower extremities",
        "Skin examination for mottling",
        "Orthostatic vital signs"
    ],
    "examFindings": {
        "Vital signs assessment": "BP 88/54, HR 124, irregular and thready pulse, RR 22, temp 36.6°C, SpO2 95% on room air",
        "Abdominal inspection": "Abdomen appears distended with visible pulsation in epigastric region, patient guarding and appears uncomfortable",
        "Abdominal palpation": "Tender to palpation in epigastric and periumbilical regions, patient cannot tolerate deep palpation due to pain",
        "Pulsatile abdominal mass assessment": "Palpable pulsatile mass in epigastric region, approximately 6-7cm, tender to touch",
        "Peripheral pulse examination": "Femoral pulses present but diminished bilaterally, dorsalis pedis and posterior tibial pulses weak",
        "Cardiovascular examination": "Tachycardic, irregular rhythm, no murmurs appreciated, JVP difficult to assess due to patient position",
        "Back examination": "Tenderness to palpation over lumbar spine region, no obvious deformity",
        "Neurological assessment of lower extremities": "Sensation intact, motor strength difficult to assess due to patient discomfort, reflexes present",
        "Skin examination for mottling": "Skin pale and diaphoretic, no obvious mottling of extremities at this time",
        "Orthostatic vital signs": "Patient unable to stand due to severe pain and dizziness"
    },
    "ddxTargets": [
        "Ruptured abdominal aortic aneurysm (correct diagnosis)",
        "Acute myocardial infarction",
        "Pulmonary embolism",
        "Aortic dissection",
        "Mesenteric ischemia",
        "Nephrolithiasis",
        "Acute pancreatitis"
    ],
    "biasFlags": {
        "anchoring": "May anchor on known AAA history and immediately assume rupture without considering other acute causes of abdominal pain",
        "prematureClosure": "The classic presentation might lead to premature closure without considering other vascular emergencies like aortic dissection",
        "availabilityBias": "Recent cases of back pain or renal stones might inappropriately influence thinking despite the hemodynamic instability"
    },
    "coachPrompts": {
        "phase2": "You've identified several serious conditions in your differential. Given this patient's known AAA and current presentation, what key historical elements and risk factors should you specifically explore? What findings would help you differentiate between your top differentials?",
        "phase5": "Now you have your history and physical findings. Walk me through how the combination of his hemodynamic instability, known AAA history, pain character, and physical exam findings help narrow your differential. What's the most likely diagnosis and what's your next step?",
        "finalDebrief": "This case illustrates the classic triad of ruptured AAA: abdominal/back pain, hypotension, and pulsatile abdominal mass. Notice how the patient's known AAA history, family history, and risk factors all supported this diagnosis. What clinical pearls will you remember about recognizing and managing this surgical emergency?"
    }
}
};
