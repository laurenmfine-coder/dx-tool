/* emr-data/dka-v1.js — Auto-generated EMR case data for Diabetic Ketoacidosis */
window.EMR_DATA = {
  "patient": {
    "name": "Alejandro Gutierrez",
  "patientHPI": "My family found me really confused and throwing up this morning, and I honestly don't remember much about what happened. I've been feeling more tired than usual lately and haven't been great about taking my insulin like I should.",
    "dob": "08/01/1998",
    "age": "28",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-909133",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(630) 555-9984",
    "email": "alejandro.gutierrez@email.com",
    "address": "6341 Peachtree Rd, Minneapolis, MN 55410",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Cynthia Gutierrez",
      "phone": "(713) 555-6327",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Found confused and vomiting by family",
    "diagnosis": "Diabetic Ketoacidosis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Type 1 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Depression",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Non-adherence to insulin",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Insulin Glargine",
      "dose": "22 units",
      "route": "SC",
      "frequency": "Nightly",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-2",
      "name": "Insulin Lispro",
      "dose": "Sliding scale",
      "route": "SC",
      "frequency": "AC",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    },
    {
      "id": "med-3",
      "name": "Sertraline",
      "dose": "100mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
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
      "bp": "98/62",
      "hr": "128",
      "rr": "32",
      "temp": "36.4°C",
      "spo2": "99%",
      "pain": "6/10",
      "bmi": "29",
      "weight": "60 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Found confused and vomiting by family",
      "hpi": "Alejandro Gutierrez is a 28-year-old male presenting with found confused and vomiting by family. Past medical history includes Type 1 Diabetes, Depression, Non-adherence to insulin. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Diabetic Ketoacidosis — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-315101",
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
              "value": "5.8",
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
              "value": "8",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": "L"
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
              "value": "542",
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
            },
            {
              "test": "Anion Gap",
              "value": "28",
              "unit": "mEq/L",
              "range": "8-12",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Beta Hydroxybutyrate",
              "value": "6.8",
              "unit": "mmol/L",
              "range": "<0.6",
              "flag": "H"
            },
            {
              "test": "Ph",
              "value": "7.12",
              "unit": "",
              "range": "7.35-7.45",
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
      "study": "Chest X-Ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-619080",
      "clinical": "Found confused and vomiting by family",
      "technique": "Standard protocol",
      "findings": "Clear lungs. Normal heart size.",
      "impression": "No acute cardiopulmonary process.",
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
    "Mother: Type 2 Diabetes",
    "Father: Hypertension"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Binge drinking on weekends"
    ],
    [
      "Insulin",
      "Admits to not taking insulin for 4 days — ran out and couldn't afford refill"
    ],
    [
      "Occupation",
      "Works two part-time jobs, no insurance"
    ]
  ]
};
