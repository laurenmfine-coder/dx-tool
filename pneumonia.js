/* emr-data/pneumonia.js — Auto-generated EMR case data for Community-Acquired Pneumonia */
window.EMR_DATA = {
  "patient": {
    "name": "Genevieve Toussaint",
  "patientHPI": "I've been coughing up thick yellow stuff for five days now and running a fever, plus I get this sharp pain in my side when I breathe in or cough. It's really been wearing me down and I just don't feel right.",
    "dob": "06/26/1971",
    "age": "55",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-251601",
    "language": "English",
    "race": "Asian",
    "phone": "(313) 555-7937",
    "email": "genevieve.toussaint@email.com",
    "address": "398 Hickory Rd, Indianapolis, IN 46208",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. David Kim, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "William Toussaint",
      "phone": "(617) 555-6928",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "5 days productive cough, fever, pleuritic pain",
    "diagnosis": "Community-Acquired Pneumonia"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "COPD",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Former smoker",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Metformin",
      "dose": "1000mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Tiotropium",
      "dose": "18mcg",
      "route": "INH",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-3",
      "name": "Albuterol",
      "dose": "90mcg",
      "route": "INH",
      "frequency": "PRN",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Erythromycin",
      "reaction": "GI upset",
      "severity": "Mild",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "118/72",
      "hr": "102",
      "rr": "24",
      "temp": "39.3°C",
      "spo2": "89%",
      "pain": "5/10",
      "bmi": "34",
      "weight": "58 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "5 days productive cough, fever, pleuritic pain",
      "hpi": "Genevieve Toussaint is a 55-year-old female presenting with 5 days productive cough, fever, pleuritic pain. Past medical history includes COPD, Type 2 Diabetes, Former smoker. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Community-Acquired Pneumonia — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-258574",
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
              "value": "16.8",
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
              "test": "Lactate",
              "value": "2.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Procalcitonin",
              "value": "3.8",
              "unit": "ng/mL",
              "range": "<0.1",
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
      "accession": "IMG-381193",
      "clinical": "5 days productive cough, fever, pleuritic pain",
      "technique": "Standard protocol",
      "findings": "Right lower lobe consolidation with air bronchograms. Small right pleural effusion. No pneumothorax.",
      "impression": "Right lower lobe pneumonia. CURB-65 score = 2.",
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
      "Former, 25 pack-years"
    ],
    [
      "Alcohol",
      "None"
    ],
    [
      "Occupation",
      "Retired school secretary"
    ],
    [
      "Living",
      "Lives with daughter"
    ]
  ]
};
