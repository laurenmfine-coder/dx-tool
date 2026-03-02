/* emr-data/adrenal-crisis.js — Auto-generated EMR case data for Adrenal Crisis */
window.EMR_DATA = {
  "patient": {
    "name": "Margaret Chen",
    "dob": "02/18/1972",
    "age": "54",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-564292",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(431) 697-2060",
    "email": "margaret.chen@email.com",
    "address": "949 Elm St, Sunrise, FL 33305",
    "insurance": "Oscar Health",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Alejandro Chen",
      "phone": "(927) 658-7431",
      "relationship": "Partner"
    },
    "chiefComplaint": "Hypotension, nausea, abdominal pain — recently stopped prednisone abruptly",
    "diagnosis": "Adrenal Crisis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Polymyalgia rheumatica (on chronic prednisone)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Stopped prednisone 5 days ago without taper",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Prednisone",
      "dose": "20mg",
      "route": "PO",
      "frequency": "Daily (discontinued 5 days ago)",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    }
  ],
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
      "bp": "78/48",
      "hr": "112",
      "rr": "20",
      "temp": "36.2°C",
      "spo2": "97%",
      "pain": "7/10",
      "bmi": "35",
      "weight": "96 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Hypotension, nausea, abdominal pain — recently stopped prednisone abruptly",
      "hpi": "Margaret Chen is a 54-year-old female presenting with hypotension, nausea, abdominal pain — recently stopped prednisone abruptly. Past medical history includes Polymyalgia rheumatica (on chronic prednisone), Stopped prednisone 5 days ago without taper. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Adrenal Crisis — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-876084",
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
            },
            {
              "test": "Eosinophils",
              "value": "12",
              "unit": "%",
              "range": "1-4",
              "flag": "H"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "128",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "5.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
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
              "value": "52",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "L"
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
              "test": "Cortisol",
              "value": "1.2",
              "unit": "mcg/dL",
              "range": "6-23 (AM)",
              "flag": "L"
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
      "study": "CT Abdomen",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-637800",
      "clinical": "Hypotension, nausea, abdominal pain — recently stopped prednisone abruptly",
      "technique": "Standard protocol",
      "findings": "Bilateral adrenal glands appear normal. No hemorrhage.",
      "impression": "Normal adrenals. Clinical correlation for adrenal insufficiency.",
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
      "Steroid use",
      "On prednisone 20mg daily for 8 months — stopped abruptly 5 days ago on her own"
    ],
    [
      "Primary MD",
      "Did not consult rheumatologist before stopping"
    ]
  ]
};
