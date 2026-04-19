/* emr-data/aaa-v1.js — EMR case data for Ruptured Abdominal Aortic Aneurysm */
window.EMR_DATA = {
  "patient": {
    "name": "Harold Jensen",
    "patientHPI": "I was just sitting at home when this awful pain hit me right in my belly and went straight through to my back — I've never felt anything like it, it's incredibly sharp and I can barely stand it.",
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
    "pharmacy": "Walgreens — Federal Hwy",
    "emergencyContact": {
      "name": "Gloria Perez",
      "phone": "(313) 555-8692",
      "relationship": "Parent"
    },
    "chiefComplaint": "Sudden severe abdominal pain",
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
      "temp": "36.6°C",
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
      "hpi": "Harold Jensen is a 72-year-old male presenting with sudden severe abdominal pain. Past medical history includes Hypertension, Known 4.5cm AAA, Hyperlipidemia, COPD. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ruptured Abdominal Aortic Aneurysm — clinical presentation and workup consistent with diagnosis.",
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
              "unit": "x10³/µL",
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
              "range": "—",
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
      "study": "POCUS – FAST Exam",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-524270",
      "clinical": "Tearing Belly and back, feels like it goes straight through",
      "technique": "Standard protocol",
      "findings": "Free fluid in Morrison pouch and pelvis. Aorta >6cm.",
      "impression": "Positive FAST with large AAA — suspect rupture",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "POCUS – Aorta",
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
      "impression": "Sinus tach — hemodynamic compromise",
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
  "guided": {
    "supported": true,
    "patientPersona": "Harold appears extremely anxious and in severe distress, clutching his abdomen and unable to find a comfortable position. He is very forthcoming with information as he is desperate for help, speaking in short bursts between waves of pain. His fear is palpable given his known AAA and family history of aneurysm rupture.",
    "interviewQuestions": [
      "When exactly did this pain start and what were you doing?",
      "Can you describe the quality of the pain - is it sharp, tearing, crushing?",
      "Where exactly is the pain located and does it go anywhere else?",
      "On a scale of 1-10, how severe is this pain?",
      "Does anything make the pain better or worse?",
      "Have you had any nausea, vomiting, or dizziness?",
      "Have you noticed any changes in your legs - numbness, weakness, or color changes?",
      "When was your AAA last checked and what size was it?",
      "Have you had any similar episodes of severe abdominal pain before?",
      "Are you having any difficulty breathing or chest pain?",
      "Have you had any changes in urination or bowel movements?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing - this pain is just overwhelming. Can you repeat that?",
      "onset": "It started about 2 hours ago, completely out of nowhere. I was just sitting in my recliner watching TV when it hit me like a lightning bolt.",
      "character": "It's like someone is tearing me apart from the inside - sharp, ripping pain that just won't let up.",
      "location": "Right here in my belly, around my navel, and it shoots straight through to my back like a knife.",
      "severity": "This is easily a 10 out of 10 - I've never experienced anything this excruciating, not even when I broke my leg.",
      "aggravating": "Any movement makes it worse - I can't find any position that helps. Even breathing deeply makes it more intense.",
      "relieving": "Nothing helps at all. I've tried changing positions, holding my breath, nothing touches this pain.",
      "associated": "I feel really dizzy and lightheaded, and I've been sweating a lot. I feel like I might pass out.",
      "denies": "No chest pain, no trouble breathing besides the pain. No leg pain or numbness that I can tell.",
      "history": "Never anything like this before. I've had some back aches, but nothing even close to this severity.",
      "medications": "Amlodipine; Lisinopril; Atorvastatin",
      "allergies": "Sulfa drugs",
      "family": "My dad died when his aneurysm burst when he was 68, and my brother had to have his AAA fixed when he was 70.",
      "social": "I'm retired from being a mechanic. I quit smoking 5 years ago but smoked for 40 years. I have a couple beers most nights."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Abdominal inspection",
      "Abdominal palpation",
      "Auscultation for abdominal bruits",
      "Assessment for pulsatile abdominal mass",
      "Peripheral pulse examination",
      "Cardiovascular examination",
      "Back and flank examination",
      "Neurological assessment of lower extremities",
      "General appearance and mental status"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 88/54, HR 124, afebrile, SpO2 95% - hypotensive and tachycardic",
      "Abdominal inspection": "Mild distention, no visible pulsations, patient guarding and unable to lie flat",
      "Abdominal palpation": "Exquisite tenderness in periumbilical area, rigid abdomen, pulsatile mass palpable",
      "Auscultation for abdominal bruits": "Diminished bowel sounds, no clear bruits audible due to patient discomfort",
      "Assessment for pulsatile abdominal mass": "Prominent pulsatile mass in epigastrium extending to umbilicus, larger than previous 4.5cm",
      "Peripheral pulse examination": "Weak but present femoral pulses bilaterally, diminished distal pulses",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, weak peripheral pulses",
      "Back and flank examination": "Severe tenderness in lumbar region, no CVA tenderness",
      "Neurological assessment of lower extremities": "Normal motor and sensation, no signs of acute ischemia",
      "General appearance and mental status": "Appears ill, diaphoretic, anxious, alert but in severe distress"
    },
    "ddxTargets": [
      "Ruptured abdominal aortic aneurysm (correct diagnosis)",
      "Symptomatic expanding AAA",
      "Acute mesenteric ischemia",
      "Aortic dissection",
      "Acute myocardial infarction",
      "Renal colic",
      "Acute pancreatitis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on less urgent diagnoses like renal colic or back pain due to pain location and radiation pattern",
      "prematureClosure": "Risk of stopping evaluation after finding any abdominal pathology without considering the vascular emergency given known AAA",
      "availabilityBias": "May focus on more common causes of abdominal pain rather than the life-threatening AAA rupture despite clear risk factors"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, I want you to think about this patient's specific risk factors and vital signs. What does the combination of his known 4.5cm AAA, family history, and presenting vital signs suggest? How should this influence your interview priorities?",
      "phase5": "Now that you've completed your history and physical exam, let's discuss what you found. The patient has hypotension, tachycardia, severe abdominal pain, and you palpated what feels like an enlarged pulsatile mass. Given his known AAA, what is your leading diagnosis and what's your next immediate step?",
      "finalDebrief": "This case illustrates the classic presentation of AAA rupture - the triad of abdominal pain, hypotension, and pulsatile abdominal mass in a patient with known AAA and strong family history. Notice how the differential evolved from considering common abdominal pain causes to recognizing this vascular emergency. What clinical clues early in the presentation should have immediately raised your suspicion for AAA rupture?"
    }
  }
};
