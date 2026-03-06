/* emr-data/stemi-v1.js — Auto-generated EMR case data for ST-Elevation MI */
window.EMR_DATA = {
  "patient": {
    "name": "James Davis",
    "dob": "12/08/1956",
    "age": "70",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-737935",
    "language": "English",
    "race": "Black/African American",
    "phone": "(312) 555-0174",
    "email": "james.davis.fam@fakeemail.invalid",
    "address": "4807 W Haddon Ave, Chicago, IL 60651",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Marcus Webb, MD",
    "pharmacy": "Walgreens Pharmacy — Chicago Ave",
    "emergencyContact": {
      "name": "Teresa Davis",
      "phone": "(312) 555-0291",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Chest pain and pressure",
    "patientHPI": "I have been having this bad pressure in my chest — started about an hour ago while I was sitting down. It came on suddenly. My chest feels really heavy, like something is sitting on it. I have been sweating a lot and I feel kind of sick to my stomach. My left arm also feels funny — kind of achy. I have never felt anything like this before.",
    "diagnosis": "ST-Elevation MI"
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
      "description": "Type 2 Diabetes",
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
      "description": "Obesity",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Lisinopril",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    },
    {
      "id": "med-2",
      "name": "Metformin",
      "dose": "1000mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-3",
      "name": "Atorvastatin",
      "dose": "40mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-4",
      "name": "Aspirin",
      "dose": "81mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa",
      "reaction": "Rash",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "162/94",
      "hr": "98",
      "rr": "22",
      "temp": "37.1°C",
      "spo2": "96%",
      "pain": "9/10",
      "bmi": "28",
      "weight": "77 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Chest pain and pressure",
      "hpi": "James Davis is a 70-year-old male presenting with crushing chest pain radiating to left arm. Past medical history includes Hypertension, Type 2 Diabetes, Hyperlipidemia, Obesity. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "ST-Elevation MI — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-633733",
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
              "value": "186",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
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
              "value": "2.4",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "Bnp",
              "value": "580",
              "unit": "pg/mL",
              "range": "<100",
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
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-501337",
      "clinical": "Chest pain and pressure",
      "technique": "Standard protocol",
      "findings": "Mild pulmonary congestion. No consolidation, pneumothorax, or effusion. Heart size upper limits of normal.",
      "impression": "Mild pulmonary edema consistent with acute cardiac decompensation.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/01/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-855675",
      "clinical": "Chest pain and pressure",
      "technique": "Standard protocol",
      "findings": "Sinus tachycardia. ST elevation in V1-V4 with reciprocal depression in II, III, aVF. No prior ECG for comparison.",
      "impression": "STEMI — anterior wall. Activate cath lab.",
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
    "Father: MI at age 52, deceased",
    "Mother: Hypertension, Type 2 Diabetes",
    "Brother: CABG at age 58"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Former smoker, 20 pack-year hx, quit 5 yrs ago"
    ],
    [
      "Alcohol",
      "Social, 2-3 beers/week"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Construction foreman"
    ],
    [
      "Exercise",
      "Sedentary"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ]
};
