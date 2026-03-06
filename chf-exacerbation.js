/* emr-data/chf-exacerbation.js — Auto-generated EMR case data for CHF Exacerbation */
window.EMR_DATA = {
  "patient": {
    "name": "Winston Carmichael",
  "patientHPI": "Over the past five days, I've been getting more and more winded just walking around the house, and my legs have been swelling up something terrible. I can barely get my shoes on anymore because my feet and ankles are so puffy.",
    "dob": "02/27/1947",
    "age": "79",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-732479",
    "language": "English",
    "race": "Black/African American",
    "phone": "(617) 555-2288",
    "email": "winston.carmichael@email.com",
    "address": "5662 Poplar Ave, Memphis, TN 38116",
    "insurance": "Tricare Standard",
    "pcp": "Dr. David Kim, MD",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Rosa Carmichael",
      "phone": "(505) 555-6083",
      "relationship": "Parent"
    },
    "chiefComplaint": "Progressive dyspnea and leg swelling over 5 days",
    "diagnosis": "CHF Exacerbation"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Heart Failure with reduced EF (30%)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Atrial Fibrillation",
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
      "description": "Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "CKD Stage 3",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Furosemide",
      "dose": "40mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-2",
      "name": "Carvedilol",
      "dose": "12.5mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Michelle Foster, MD"
    },
    {
      "id": "med-3",
      "name": "Lisinopril",
      "dose": "20mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-4",
      "name": "Apixaban",
      "dose": "5mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Michelle Foster, MD"
    },
    {
      "id": "med-5",
      "name": "Metformin",
      "dose": "500mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa",
      "reaction": "Hives",
      "severity": "Mild",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "168/98",
      "hr": "112",
      "rr": "28",
      "temp": "36.9°C",
      "spo2": "88%",
      "pain": "3/10",
      "bmi": "34",
      "weight": "75 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Progressive dyspnea and leg swelling over 5 days",
      "hpi": "Winston Carmichael is a 79-year-old male presenting with progressive dyspnea and leg swelling over 5 days. Past medical history includes Heart Failure with reduced EF (30%), Atrial Fibrillation, Hypertension, Type 2 Diabetes, CKD Stage 3. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "CHF Exacerbation — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-572820",
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
              "value": "132",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
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
              "value": "2.1",
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
              "test": "Bnp",
              "value": "1850",
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
      "study": "Chest X-Ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-763693",
      "clinical": "Progressive dyspnea and leg swelling over 5 days",
      "technique": "Standard protocol",
      "findings": "Cardiomegaly. Bilateral pleural effusions, right greater than left. Cephalization of pulmonary vasculature. Bilateral airspace opacities.",
      "impression": "Acute decompensated heart failure with pulmonary edema and bilateral effusions.",
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
    "Father: CHF, deceased age 68"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Former, quit 10 years ago"
    ],
    [
      "Diet",
      "Admits to high sodium diet this week — ate out 4 times"
    ],
    [
      "Medication adherence",
      "Ran out of furosemide 4 days ago"
    ]
  ]
};
