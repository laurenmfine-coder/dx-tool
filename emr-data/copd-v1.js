/* emr-data/copd-v1.js — Auto-generated EMR case data for COPD Exacerbation */
window.EMR_DATA = {
  "patient": {
    "name": "Bernard Collins",
  "patientHPI": "My breathing has been getting worse over the past three days, and my cough is bringing up more junk than usual. I know I have lung problems from smoking, but this feels different - I'm more short of breath than normal even when I'm just sitting around the house.",
    "dob": "02/26/1955",
    "age": "71",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-121842",
    "language": "English",
    "race": "White",
    "phone": "(513) 555-3230",
    "email": "bernard.collins@email.com",
    "address": "3390 Hickory Rd, Cleveland, OH 44107",
    "insurance": "Cigna PPO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Christina Collins",
      "phone": "(502) 555-6253",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Worsening cough and dyspnea for 3 days",
    "diagnosis": "COPD Exacerbation"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "COPD (GOLD Stage 3)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Current smoker",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Osteoporosis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Tiotropium",
      "dose": "18mcg",
      "route": "INH",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    },
    {
      "id": "med-2",
      "name": "Fluticasone/Salmeterol",
      "dose": "250/50",
      "route": "INH",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-3",
      "name": "Albuterol",
      "dose": "90mcg",
      "route": "INH",
      "frequency": "PRN",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-4",
      "name": "Amlodipine",
      "dose": "5mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    },
    {
      "id": "med-5",
      "name": "Prednisone",
      "dose": "5mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Michelle Foster, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "reaction": "Nausea/vomiting",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "142/86",
      "hr": "102",
      "rr": "28",
      "temp": "38.0°C",
      "spo2": "86%",
      "pain": "4/10",
      "bmi": "29",
      "weight": "80 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worsening cough and dyspnea for 3 days",
      "hpi": "Bernard Collins is a 71-year-old male presenting with worsening cough and dyspnea for 3 days. Past medical history includes COPD (GOLD Stage 3), Current smoker, Hypertension, Osteoporosis. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "COPD Exacerbation — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-456247",
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
              "value": "14.2",
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
              "test": "Ph",
              "value": "7.32",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "L"
            },
            {
              "test": "Pco2",
              "value": "58",
              "unit": "mmHg",
              "range": "35-45",
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
      "accession": "IMG-643229",
      "clinical": "Worsening cough and dyspnea for 3 days",
      "technique": "Standard protocol",
      "findings": "Hyperinflated lungs. Flattened diaphragms. Increased AP diameter. No consolidation. No pneumothorax.",
      "impression": "Chronic emphysematous changes without acute infiltrate.",
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
      "Current, 45 pack-years"
    ],
    [
      "Oxygen",
      "Home O2 2L NC at night"
    ],
    [
      "Occupation",
      "Retired mechanic"
    ]
  ]
};
