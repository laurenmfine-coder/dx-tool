/* emr-data/epidural-hematoma.js — EMR case data for Epidural Hematoma */
window.EMR_DATA = {
  "patient": {
    "name": "Tyler Reeves",
    "dob": "06/15/2004",
    "age": "22",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-748899",
    "language": "English",
    "race": "Black/African American",
    "phone": "(484) 954-9063",
    "email": "tyler.reeves@email.com",
    "address": "3191 Maple Ave, Davie, FL 33314",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Sarah Mitchell, MD",
    "pharmacy": "Walmart Pharmacy \u2014 Federal Hwy",
    "emergencyContact": {
      "name": "Michael Walker",
      "phone": "(879) 628-5692",
      "relationship": "Partner"
    },
    "chiefComplaint": "Fell and hit my head Left side of my head where I hit it",
    "diagnosis": "Epidural Hematoma"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None significant",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
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
      "time": "08:49",
      "bp": "162/88",
      "hr": "56",
      "rr": "14",
      "temp": "36.8\u00b0C",
      "spo2": "98%",
      "pain": "4/10",
      "bmi": "34",
      "weight": "59 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Fell and hit my head Left side of my head where I hit it",
      "hpi": "Tyler Reeves is a 22-year-old male presenting with fell and hit my head left side of my head where i hit it. Past medical history includes None significant. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Epidural Hematoma \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-275449",
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
              "value": "12.1",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "14.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "37",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "268",
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
              "value": "140",
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
              "value": "104",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "25",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "18",
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
              "value": "142",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "10",
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
              "test": "PT/INR",
              "value": "1.0",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            },
            {
              "test": "Ethanol",
              "value": "<10",
              "unit": "mg/dL",
              "range": "<10",
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
      "accession": "IMG-884181",
      "clinical": "Fell and hit my head Left side of my head where I hit it",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-662400",
      "clinical": "Fell and hit my head Left side of my head where I hit it",
      "technique": "Standard protocol",
      "findings": "Large BICONVEX (lens-shaped) hyperdense collection in the left temporal-parietal region measuring approximately 15mm in maximal thickness. Mass effect with 8mm leftward-to-rightward midline shift. Effacement of the left lateral ventricle. Left temporal bone fracture crossing the middle meningeal artery groove. No underlying parenchymal contusion.",
      "impression": "ACUTE EPIDURAL HEMATOMA \u2014 left temporal-parietal, 15mm thick, 8mm midline shift. NEUROSURGICAL EMERGENCY \u2014 requires emergent craniotomy.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "CT Cervical Spine",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-621401",
      "clinical": "Fell and hit my head Left side of my head where I hit it",
      "technique": "Standard protocol",
      "findings": "No fracture or subluxation. Normal alignment. No prevertebral soft tissue swelling.",
      "impression": "No acute cervical spine injury \u2014 clear c-spine",
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
      "accession": "IMG-495873",
      "clinical": "Fell and hit my head Left side of my head where I hit it",
      "technique": "Standard 12-lead",
      "findings": "Sinus bradycardia at 56 bpm. Normal intervals. No ST changes",
      "impression": "Sinus bradycardia \u2014 Cushing response (bradycardia + hypertension = increased ICP)",
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
    "Father: hypertension",
    "No bleeding disorders"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "1-2 beers occasionally"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Electrician"
    ],
    [
      "Living",
      "Lives with wife and two children"
    ]
  ]
};
