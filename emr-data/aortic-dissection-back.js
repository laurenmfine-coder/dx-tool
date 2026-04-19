/* emr-data/aortic-dissection-back.js — Auto-generated EMR case data for Aortic Dissection */
window.EMR_DATA = {
  "patient": {
    "name": "Raymond Foster",
    "patientHPI": "I was just sitting at home watching TV when suddenly I felt this horrible sharp pain in my chest that shot straight through to my back. I've never experienced anything like this before and I knew something was terribly wrong.",
    "dob": "02/18/1959",
    "age": "67",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-575883",
    "language": "English",
    "race": "White",
    "phone": "(615) 555-1919",
    "email": "raymond.foster@email.com",
    "address": "2907 Lavender St, New Orleans, LA 70124",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Rite Aid — Palm Ave",
    "emergencyContact": {
      "name": "Rachel Foster",
      "phone": "(702) 555-1154",
      "relationship": "Parent"
    },
    "chiefComplaint": "Abrupt onset chest pain",
    "diagnosis": "Aortic Dissection"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Hypertension (poorly controlled)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Marfan habitus",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Bicuspid aortic valve",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Hydrochlorothiazide",
      "dose": "25mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE Inhibitors",
      "reaction": "Angioedema",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "198/110",
      "hr": "110",
      "rr": "24",
      "temp": "36.6°C",
      "spo2": "95%",
      "pain": "10/10",
      "bmi": "37",
      "weight": "68 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Sudden tearing chest pain radiating to back",
      "hpi": "Raymond Foster is a 67-year-old male presenting with abrupt onset chest pain. Past medical history includes Hypertension (poorly controlled), Marfan habitus, Bicuspid aortic valve. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Aortic Dissection — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-316263",
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
              "value": "1.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
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
              "test": "Lactate",
              "value": "3.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
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
      "study": "CTA Chest/Abdomen/Pelvis",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-216397",
      "clinical": "Sudden tearing chest pain radiating to back",
      "technique": "Standard protocol",
      "findings": "Stanford Type A dissection with intimal flap originating at the aortic root, extending through the ascending aorta, arch, and into the descending aorta to the level of the renal arteries. Moderate pericardial effusion. No frank aortic rupture.",
      "impression": "Acute Stanford Type A aortic dissection. Emergent surgical consultation.",
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
    "Father: aortic aneurysm repair",
    "Mother: hypertension"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 30 pack-years"
    ],
    [
      "Cocaine",
      "Admits to crack cocaine use last night"
    ],
    [
      "Occupation",
      "Unemployed"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Raymond Foster is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
      "When did your symptoms start and how?",
      "Describe the main symptom — location, character, severity.",
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
      "onset": "'Gradually — over the past several days.'",
      "character": "'The symptom has been significant and affecting my ability to function.'",
      "location": "'The main problem is in the expected area for my condition.'",
      "severity": "'Six or seven out of ten.'",
      "aggravating": "'Activity and movement worsen it.'",
      "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
      "associated": "'Some associated symptoms consistent with this condition.'",
      "denies": "'No fever, chills, or unexplained weight loss.'",
      "history": "'I have not had exactly this before.'",
      "medications": "'I take Hydrochlorothiazide.'",
      "allergies": "'My allergies: ACE Inhibitors.'",
      "family": "Father: aortic aneurysm repair  Mother: hypertension",
      "social": "Tobacco: Current, 30 pack-years  Cocaine: Admits to crack cocaine use last night  Occupation: Unemployed"
    },
    "examManeuvers": [
      "General appearance",
      "Vital signs",
      "Cardiovascular",
      "Pulmonary",
      "Abdominal",
      "Extremities",
      "Skin",
      "Targeted exam"
    ],
    "examFindings": {
      "General appearance": "Finding consistent with this condition.",
      "Vital signs": "Finding consistent with this condition.",
      "Cardiovascular": "Finding consistent with this condition.",
      "Pulmonary": "Finding consistent with this condition.",
      "Abdominal": "Finding consistent with this condition.",
      "Extremities": "Finding consistent with this condition.",
      "Skin": "Finding consistent with this condition.",
      "Targeted exam": "Finding consistent with this condition."
    },
    "ddxTargets": [
      "this condition (correct)",
      "Most likely alternative",
      "Third differential",
      "Must-not-miss 1",
      "Must-not-miss 2",
      "Common mimic 1",
      "Common mimic 2"
    ],
    "biasFlags": {
      "anchoring": "Consider the full differential for this condition.",
      "prematureClosure": "Complete your workup before narrowing focus.",
      "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
      "phase2": "Before interviewing Raymond Foster: what does the chart suggest? Top 3 diagnoses?",
      "phase5": "After history and exam: how has your differential changed?",
      "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
  }
};
