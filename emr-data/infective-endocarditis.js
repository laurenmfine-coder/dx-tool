/* emr-data/infective-endocarditis.js — Auto-generated EMR case data for Infective Endocarditis */
window.EMR_DATA = {
  "patient": {
    "name": "Ryan Kowalski",
    "dob": "09/05/1981",
    "age": "45",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-179740",
    "language": "English",
    "race": "Asian",
    "phone": "(783) 490-8128",
    "email": "ryan.kowalski@email.com",
    "address": "9852 Willow Dr, Davie, FL 33338",
    "insurance": "Medicaid",
    "pcp": "Dr. Michelle Foster, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Susan Kowalski",
      "phone": "(642) 906-5736",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Persistent fever for 3 weeks despite oral antibiotics, new murmur",
    "diagnosis": "Infective Endocarditis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "IV drug use",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Prior endocarditis 2 years ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Hepatitis C",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
  "allergies": [
    {
      "allergen": "Vancomycin",
      "reaction": "Red man syndrome",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "112/58",
      "hr": "108",
      "rr": "20",
      "temp": "39.2°C",
      "spo2": "94%",
      "pain": "5/10",
      "bmi": "24",
      "weight": "91 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Persistent fever for 3 weeks despite oral antibiotics, new murmur",
      "hpi": "Ryan Kowalski is a 45-year-old male presenting with persistent fever for 3 weeks despite oral antibiotics, new murmur. Past medical history includes IV drug use, Prior endocarditis 2 years ago, Hepatitis C. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Infective Endocarditis — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-124482",
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
              "value": "18.2",
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
              "test": "Esr",
              "value": "85",
              "unit": "mm/hr",
              "range": "0-20",
              "flag": "H"
            },
            {
              "test": "Crp",
              "value": "12.4",
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
      "study": "Transthoracic Echocardiogram",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-910236",
      "clinical": "Persistent fever for 3 weeks despite oral antibiotics, new murmur",
      "technique": "Standard protocol",
      "findings": "1.5cm mobile vegetation on tricuspid valve with moderate tricuspid regurgitation. LVEF 55%.",
      "impression": "Tricuspid valve endocarditis with large vegetation. Blood cultures pending.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/01/2026",
      "study": "Chest X-Ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-480996",
      "clinical": "Persistent fever for 3 weeks despite oral antibiotics, new murmur",
      "technique": "Standard protocol",
      "findings": "Multiple bilateral peripheral nodular opacities — several with cavitation.",
      "impression": "Septic pulmonary emboli from right-sided endocarditis.",
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
      "IV drug use",
      "Active — heroin and fentanyl, daily use"
    ],
    [
      "Housing",
      "Homeless"
    ],
    [
      "Prior endocarditis",
      "Treated 2 years ago — same valve"
    ]
  ]
};
