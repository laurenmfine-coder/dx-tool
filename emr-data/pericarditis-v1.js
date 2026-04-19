/* emr-data/pericarditis-v1.js — Auto-generated EMR case data for Pericarditis */
window.EMR_DATA = {
  "patient": {
    "name": "Daniel Okafor",
    "patientHPI": "I started getting this sharp, stabbing pain in my chest yesterday that gets much worse when I take a deep breath or when I lie down flat. I had a really bad cold about two weeks ago, and now this chest pain is making me worry something's seriously wrong.",
    "dob": "08/02/2000",
    "age": "26",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-460047",
    "language": "English",
    "race": "Black/African American",
    "phone": "(619) 555-6886",
    "email": "daniel.okafor@email.com",
    "address": "5993 E Roosevelt Rd, Minneapolis, MN 55403",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Rite Aid — Palm Ave",
    "emergencyContact": {
      "name": "Teresa Okafor",
      "phone": "(502) 555-5285",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Sharp chest pain worse with inspiration and lying flat",
    "diagnosis": "Pericarditis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Recent URI 2 weeks ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "122/76",
      "hr": "92",
      "rr": "18",
      "temp": "38.2°C",
      "spo2": "99%",
      "pain": "7/10",
      "bmi": "27",
      "weight": "88 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Sharp chest pain worse with inspiration and lying flat",
      "hpi": "Daniel Okafor is a 26-year-old male presenting with sharp chest pain worse with inspiration and lying flat. Past medical history includes Recent URI 2 weeks ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Pericarditis — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-743302",
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
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
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
              "test": "Troponin",
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "Esr",
              "value": "48",
              "unit": "mm/hr",
              "range": "0-20",
              "flag": "H"
            },
            {
              "test": "Crp",
              "value": "8.2",
              "unit": "mg/dL",
              "range": "<0.5",
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
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-884363",
      "clinical": "Sharp chest pain worse with inspiration and lying flat",
      "technique": "Standard protocol",
      "findings": "Diffuse ST elevation with PR depression in leads II, III, aVF, V3-V6. PR elevation in aVR.",
      "impression": "Classic ECG findings of acute pericarditis.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/01/2026",
      "study": "Echocardiogram",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-916629",
      "clinical": "Sharp chest pain worse with inspiration and lying flat",
      "technique": "Standard protocol",
      "findings": "Small circumferential pericardial effusion. Normal LV/RV function. No tamponade physiology.",
      "impression": "Small pericardial effusion consistent with pericarditis.",
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
      "Never"
    ],
    [
      "Alcohol",
      "Social"
    ],
    [
      "Occupation",
      "Graduate student"
    ],
    [
      "Exercise",
      "Runs 3-4x/week"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Daniel appears anxious and concerned, frequently shifting position to find comfort and avoiding lying flat during the interview. He's articulate and forthcoming about his symptoms, clearly worried this could be something serious like a heart attack despite his young age.",
    "interviewQuestions": [
      "Can you describe exactly when this chest pain started?",
      "What does the pain feel like - sharp, crushing, burning?",
      "Can you point to where the pain is located?",
      "Does the pain move or spread anywhere else?",
      "On a scale of 1-10, how severe is the pain?",
      "What makes the pain worse?",
      "What makes the pain better, if anything?",
      "Have you noticed any other symptoms like shortness of breath, fever, or palpitations?",
      "Have you had any chest pain like this before?",
      "Tell me about the cold you had two weeks ago",
      "Are you taking any medications currently?",
      "Do you have any known allergies?",
      "Any family history of heart problems or sudden death?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Could you ask it differently?",
      "onset": "The pain started yesterday morning when I woke up. It came on gradually at first but got much sharper throughout the day.",
      "character": "It's a really sharp, stabbing pain - like someone is sticking a knife right into my chest.",
      "location": "It's right here in the center of my chest, maybe slightly to the left side. Sometimes I feel it in my left shoulder too.",
      "severity": "Right now it's about a 7 out of 10, but when I take a deep breath or try to lie down it becomes a 9. It's really hard to sleep.",
      "aggravating": "Deep breathing makes it much worse, and lying flat is almost impossible. Coughing or sneezing is excruciating.",
      "relieving": "Sitting up and leaning forward helps some. Ibuprofen took the edge off a little bit.",
      "associated": "I've had a low-grade fever and feel pretty tired. No real shortness of breath unless the pain is really bad.",
      "denies": "No nausea, no arm pain, no sweating or dizziness. My breathing is fine when the pain isn't bad.",
      "history": "Never had chest pain like this before. I'm young and healthy, I run regularly.",
      "medications": "no medications",
      "allergies": "NKDA",
      "family": "No family history of heart problems or anything like that. Everyone's pretty healthy.",
      "social": "I'm a graduate student in engineering. I run 3-4 times a week, never smoked, just drink socially on weekends."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Cardiac auscultation",
      "Lung auscultation",
      "Chest wall palpation",
      "Pericardial friction rub assessment",
      "JVD evaluation",
      "Lower extremity edema check",
      "Hepatojugular reflux test",
      "Pulsus paradoxus measurement",
      "ECG interpretation"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 122/76, HR 92, RR 18, Temp 38.2°C, O2 sat 99% on room air",
      "Cardiac auscultation": "Three-component pericardial friction rub best heard at left sternal border with patient leaning forward",
      "Lung auscultation": "Clear breath sounds bilaterally, no rales or wheezes",
      "Chest wall palpation": "No chest wall tenderness, no crepitus",
      "Pericardial friction rub assessment": "High-pitched scratching sound present during inspiration, expiration, and ventricular systole",
      "JVD evaluation": "No jugular venous distention at 45 degrees",
      "Lower extremity edema check": "No peripheral edema present",
      "Hepatojugular reflux test": "Negative",
      "Pulsus paradoxus measurement": "8 mmHg (normal)",
      "ECG interpretation": "Diffuse ST elevation in leads I, II, aVF, V2-V6 with PR depression"
    },
    "ddxTargets": [
      "Acute pericarditis (correct diagnosis)",
      "Viral myocarditis",
      "Pleuritis/pleurisy",
      "Acute myocardial infarction",
      "Pulmonary embolism",
      "Costochondritis",
      "GERD with chest pain"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on recent URI and dismissing cardiac causes, or conversely anchoring on chest pain and over-investigating for MI in young patient",
      "prematureClosure": "May stop at costochondritis or viral syndrome without recognizing the classic pericarditis triad of chest pain, fever, and friction rub",
      "availabilityBias": "Recent emphasis on MI protocols may lead to over-focus on acute coronary syndrome despite atypical presentation for age group"
    },
    "coachPrompts": {
      "phase2": "You've identified some good differentials for chest pain in a young adult. Given his recent viral illness, what post-viral complications should you specifically explore? What key historical features will help you distinguish between inflammatory and ischemic causes?",
      "phase5": "Excellent work identifying the friction rub and positional chest pain. How do the ECG changes and clinical presentation fit together? What's your assessment of this patient's hemodynamic stability, and what would make you concerned about complications?",
      "finalDebrief": "This case demonstrates classic acute pericarditis following viral URI. Notice how the combination of pleuritic chest pain, fever, friction rub, and diffuse ST elevation with PR depression clinched the diagnosis. What red flags would prompt you to worry about cardiac tamponade in pericarditis patients?"
    }
  }
};
