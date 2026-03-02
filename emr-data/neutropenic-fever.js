/* emr-data/neutropenic-fever.js — Auto-generated EMR case data for Neutropenic Fever */
window.EMR_DATA = {
  "patient": {
    "name": "Linda Chen-Nakamura",
    "dob": "09/27/1970",
    "age": "56",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-221028",
    "language": "English",
    "race": "White",
    "phone": "(632) 566-8403",
    "email": "linda.chen-nakamura@email.com",
    "address": "7801 Elm Ave, Plantation, FL 33365",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Alejandro Chen-Nakamura",
      "phone": "(806) 456-1300",
      "relationship": "Partner"
    },
    "chiefComplaint": "Fever and chills — currently on chemotherapy for AML",
    "diagnosis": "Neutropenic Fever"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "AML (induction chemotherapy completed 10 days ago)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Central line (PICC) in place",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Acyclovir",
      "dose": "400mg",
      "route": "PO",
      "frequency": "BID (prophylaxis)",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-2",
      "name": "Fluconazole",
      "dose": "400mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-3",
      "name": "Ondansetron",
      "dose": "8mg",
      "route": "PO",
      "frequency": "Q8H PRN",
      "status": "Active",
      "prescriber": "Dr. Raj Patel, MD"
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
      "bp": "98/58",
      "hr": "112",
      "rr": "22",
      "temp": "39.4°C",
      "spo2": "96%",
      "pain": "4/10",
      "bmi": "29",
      "weight": "95 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Fever and chills — currently on chemotherapy for AML",
      "hpi": "Linda Chen-Nakamura is a 56-year-old female presenting with fever and chills — currently on chemotherapy for aml. Past medical history includes AML (induction chemotherapy completed 10 days ago), Central line (PICC) in place. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Neutropenic Fever — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-962148",
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
              "value": "0.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "L"
            },
            {
              "test": "Hemoglobin",
              "value": "7.2",
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
              "value": "18",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            },
            {
              "test": "ANC",
              "value": "80",
              "unit": "cells/µL",
              "range": ">1500",
              "flag": "L"
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
      "accession": "IMG-797539",
      "clinical": "Fever and chills — currently on chemotherapy for AML",
      "technique": "Standard protocol",
      "findings": "No focal consolidation. PICC line tip at cavoatrial junction.",
      "impression": "No acute pulmonary infiltrate. PICC position satisfactory.",
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
      "Chemotherapy",
      "Completed 7+3 induction 10 days ago"
    ],
    [
      "Tobacco",
      "Never"
    ]
  ]
};
