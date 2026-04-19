/* emr-data/hip-fracture-anticoag.js — EMR case data for Hip Fracture on Anticoagulation */
window.EMR_DATA = {
  "patient": {
    "name": "Margaret Sullivan",
    "patientHPI": "I fell down at home this morning and now I can't get up because my right hip and groin area hurt so badly. I was just walking to the kitchen when I lost my balance, and now every time I try to move that leg the pain shoots through me.",
    "dob": "06/15/1944",
    "age": "82",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-628815",
    "language": "English",
    "race": "Black/African American",
    "phone": "(317) 555-2789",
    "email": "margaret.sullivan@email.com",
    "address": "4072 Magnolia Blvd, Kansas City, MO 64101",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Walmart Pharmacy — Pines Blvd",
    "emergencyContact": {
      "name": "Henry Sanchez",
      "phone": "(630) 555-4920",
      "relationship": "Partner"
    },
    "chiefComplaint": "I fell and I can't get up Right hip and groin",
    "diagnosis": "Hip Fracture on Anticoagulation"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Atrial fibrillation",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Osteoporosis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Mild dementia",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Chronic kidney disease stage 3",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Warfarin",
      "dose": "4mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    },
    {
      "id": "med-2",
      "name": "Alendronate",
      "dose": "70mg weekly",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-3",
      "name": "Donepezil",
      "dose": "10mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-4",
      "name": "Amlodipine",
      "dose": "5mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-5",
      "name": "Metoprolol",
      "dose": "25mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "reaction": "Nausea",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "10:05",
      "bp": "108/62",
      "hr": "92",
      "rr": "18",
      "temp": "36.2°C",
      "spo2": "94%",
      "pain": "/10",
      "bmi": "25",
      "weight": "100 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I fell and I can't get up Right hip and groin",
      "hpi": "Margaret Sullivan is a 82-year-old female presenting with i fell and i can't get up right hip and groin. Past medical history includes Atrial fibrillation, Osteoporosis, Mild dementia, Hypertension, Chronic kidney disease stage 3. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Hip Fracture on Anticoagulation — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-474026",
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
              "value": "7",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "10.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "43",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "272",
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
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "5.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "100",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "28",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "10",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.1",
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
              "test": "INR",
              "value": "3.2",
              "unit": "",
              "range": "2.0-3.0",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "2,400",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "2.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Troponin I",
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "Urinalysis",
              "value": "Dark amber, specific gravity 1.035, trace blood, trace protein",
              "unit": "",
              "range": "Normal",
              "flag": "H"
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
      "accession": "IMG-312683",
      "clinical": "I fell and I can't get up Right hip and groin",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "X-ray Hip",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-757447",
      "clinical": "I fell and I can't get up Right hip and groin",
      "technique": "Standard protocol",
      "findings": "DISPLACED LEFT FEMORAL NECK FRACTURE (Garden type III/IV). Femoral head displaced posteriorly with significant angulation. No pathologic bone lesion. Severe osteopenia. Degenerative changes in hip joint.",
      "impression": "Displaced femoral neck fracture — orthopedic surgery consultation for surgical repair (likely hemiarthroplasty or total hip arthroplasty given displacement and patient age).",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-542904",
      "clinical": "I fell and I can't get up Right hip and groin",
      "technique": "Standard protocol",
      "findings": "No acute intracranial hemorrhage. Mild chronic small vessel ischemic changes. Generalized volume loss consistent with age and known dementia. No skull fracture.",
      "impression": "No acute intracranial pathology — delirium is from pain, dehydration, and immobility, not head injury",
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
      "accession": "IMG-983839",
      "clinical": "I fell and I can't get up Right hip and groin",
      "technique": "Standard 12-lead",
      "findings": "Atrial fibrillation at 92 bpm. No ST changes. Normal intervals",
      "impression": "Chronic AFib — need to manage anticoagulation perioperatively",
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
    "Mother: hip fracture at 80",
    "Sister: osteoporosis"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Glass of wine with dinner occasionally"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired school principal"
    ],
    [
      "Living",
      "Lives alone with home aide 4 hours daily. Independent with ADLs at baseline. No fall in past year."
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Margaret appears anxious and in significant discomfort, frequently wincing when attempting to shift position. She is cooperative and forthcoming with information, though occasionally needs questions repeated due to her mild dementia. She expresses frustration about losing her independence and worry about being a burden.",
    "interviewQuestions": [
      "Can you tell me exactly how you fell this morning?",
      "What were you doing just before you lost your balance?",
      "Did you feel dizzy, lightheaded, or have any other symptoms before falling?",
      "Can you describe the pain in your hip and groin?",
      "On a scale of 1-10, how would you rate your pain?",
      "Does the pain get worse when you try to move your leg or bear weight?",
      "Have you been able to walk at all since the fall?",
      "Did you hit your head or lose consciousness when you fell?",
      "Have you had any falls in the past year?",
      "Have you noticed any changes in your balance or walking recently?",
      "Are you having any numbness or tingling in your leg?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble concentrating with all this pain.",
      "onset": "It happened this morning around 8 AM. I was walking from my bedroom to the kitchen for breakfast when I just lost my balance and went down hard on my right side.",
      "character": "It's a sharp, shooting pain that goes right through my hip and down into my groin. It feels like something is really wrong in there.",
      "location": "The pain is mainly in my right hip area and groin, but it also hurts in my upper thigh.",
      "severity": "It's easily a 9 out of 10 when I try to move. Even lying still it's about a 6 or 7. I've never had pain this bad.",
      "aggravating": "Any movement makes it much worse, especially trying to lift my leg or roll over. Even the slightest movement sends shooting pain through me.",
      "relieving": "Nothing really helps. I've been trying to stay as still as possible, but it still throbs constantly.",
      "associated": "I feel a bit nauseous from the pain, and I'm worried I might have hurt something else when I fell.",
      "denies": "I didn't hit my head or black out. No chest pain, no shortness of breath other than from the pain.",
      "history": "I haven't fallen in over a year. I've been pretty steady on my feet until this morning.",
      "medications": "Warfarin; Alendronate; Donepezil; Amlodipine; Metoprolol",
      "allergies": "Codeine",
      "family": "My mother broke her hip when she was about my age, and my sister has osteoporosis too. It runs in our family.",
      "social": "I'm a retired school principal. I live alone but have a home aide who comes for 4 hours daily. I don't smoke, never have. I have a glass of wine with dinner sometimes but that's all."
    },
    "examManeuvers": [
      "Inspection of right hip and leg positioning",
      "Palpation of right hip and greater trochanter",
      "Assessment of right leg length",
      "Evaluation of external rotation of right leg",
      "Passive range of motion of right hip",
      "Log roll test of right hip",
      "Neurovascular assessment of right lower extremity",
      "Palpation of femoral pulse",
      "Assessment of ability to bear weight"
    ],
    "examFindings": {
      "Inspection of right hip and leg positioning": "Right leg appears shortened and externally rotated compared to left leg",
      "Palpation of right hip and greater trochanter": "Severe tenderness over right greater trochanter and lateral hip",
      "Assessment of right leg length": "Right leg appears 2-3 cm shorter than left leg",
      "Evaluation of external rotation of right leg": "Right leg held in external rotation at approximately 45 degrees",
      "Passive range of motion of right hip": "Unable to perform due to severe pain with minimal movement",
      "Log roll test of right hip": "Severe pain with gentle log rolling of right hip",
      "Neurovascular assessment of right lower extremity": "Sensation intact, dorsalis pedis and posterior tibial pulses present",
      "Palpation of femoral pulse": "Strong femoral pulse palpable bilaterally",
      "Assessment of ability to bear weight": "Unable to bear weight on right leg due to severe pain"
    },
    "ddxTargets": [
      "Hip fracture (femoral neck or intertrochanteric) (correct diagnosis)",
      "Greater trochanteric fracture",
      "Pelvic fracture",
      "Hip dislocation",
      "Femoral shaft fracture",
      "Severe hip contusion",
      "Lumbar compression fracture with radicular pain"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'typical' elderly fall presentation and missing other causes of altered mental status or medication effects that contributed to fall",
      "prematureClosure": "Risk of assuming hip fracture without considering pelvic fractures, hip dislocation, or pathologic fractures given her multiple comorbidities",
      "availabilityBias": "Recent cases of hip fractures in elderly patients may bias toward this diagnosis without proper systematic evaluation"
    },
    "coachPrompts": {
      "phase2": "You've identified an elderly patient with a fall and hip pain. Before you interview her, what key historical elements would help you differentiate between the various causes of hip pain after trauma? Consider her age, medications, and risk factors.",
      "phase5": "Your history and physical findings strongly suggest a hip fracture. What specific examination findings support this diagnosis? How do her risk factors and medications influence your management considerations, particularly regarding anticoagulation?",
      "finalDebrief": "This case demonstrates the classic presentation of hip fracture in an elderly patient with osteoporosis. The shortened, externally rotated leg with inability to bear weight after a mechanical fall is pathognomonic. How did her warfarin therapy and renal disease influence your diagnostic and treatment approach?"
    }
  }
};
