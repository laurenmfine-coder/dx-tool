/* emr-data/ttp.js — Auto-generated EMR case data for TTP */
window.EMR_DATA = {
  "patient": {
    "name": "Amanda Lewis",
    "dob": "01/09/1993",
    "age": "33",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-574996",
    "language": "English",
    "race": "Black/African American",
    "phone": "(424) 238-5217",
    "email": "amanda.lewis@email.com",
    "address": "6563 Palm Dr, Weston, FL 33338",
    "insurance": "Cigna PPO",
    "pcp": "Dr. David Kim, MD",
    "pharmacy": "Rite Aid — Palm Ave",
    "emergencyContact": {
      "name": "Nathan Lewis",
      "phone": "(298) 924-8586",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Confusion, petechiae, fever, dark urine — found to have severe thrombocytopenia",
    "diagnosis": "TTP"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Previously healthy",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Combined OCP",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
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
      "bp": "128/82",
      "hr": "108",
      "rr": "20",
      "temp": "38.6°C",
      "spo2": "98%",
      "pain": "4/10",
      "bmi": "21",
      "weight": "93 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Confusion, petechiae, fever, dark urine — found to have severe thrombocytopenia",
      "hpi": "Amanda Lewis is a 33-year-old female presenting with confusion, petechiae, fever, dark urine — found to have severe thrombocytopenia. Past medical history includes Previously healthy. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "TTP — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-213658",
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
              "value": "7.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
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
              "value": "12",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            },
            {
              "test": "Reticulocyte Count",
              "value": "8.2",
              "unit": "%",
              "range": "0.5-2.5",
              "flag": "H"
            },
            {
              "test": "Schistocytes",
              "value": "4+",
              "unit": "per HPF",
              "range": "<1",
              "flag": "H"
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
              "value": "1.8",
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
              "test": "Total Bili",
              "value": "4.2",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": "H"
            },
            {
              "test": "Ldh",
              "value": "1450",
              "unit": "U/L",
              "range": "120-246",
              "flag": "H"
            },
            {
              "test": "Haptoglobin",
              "value": "<10",
              "unit": "mg/dL",
              "range": "30-200",
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
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-396445",
      "clinical": "Confusion, petechiae, fever, dark urine — found to have severe thrombocytopenia",
      "technique": "Standard protocol",
      "findings": "No acute intracranial abnormality.",
      "impression": "Normal.",
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
      "Recent illness",
      "Had a viral URI 2 weeks ago"
    ]
  ]
};
