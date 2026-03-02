/* emr-data/cardiac-syncope.js — Auto-generated EMR case data for Cardiac Syncope */
window.EMR_DATA = {
  "patient": {
    "name": "Arthur Livingston",
    "dob": "02/11/1948",
    "age": "78",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-397551",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(212) 913-3982",
    "email": "arthur.livingston@email.com",
    "address": "7020 Cedar Blvd, Davie, FL 33347",
    "insurance": "Tricare Standard",
    "pcp": "Dr. David Kim, MD",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Keisha Livingston",
      "phone": "(626) 508-4989",
      "relationship": "Partner"
    },
    "chiefComplaint": "Witnessed syncope while walking — no prodrome",
    "diagnosis": "Cardiac Syncope"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Aortic stenosis (moderate, followed by cardiology)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Prior CABG",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Atorvastatin",
      "dose": "80mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    },
    {
      "id": "med-2",
      "name": "Aspirin",
      "dose": "81mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-3",
      "name": "Metoprolol Succinate",
      "dose": "25mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
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
      "bp": "108/62",
      "hr": "42",
      "rr": "16",
      "temp": "36.8°C",
      "spo2": "97%",
      "pain": "0/10",
      "bmi": "36",
      "weight": "55 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Witnessed syncope while walking — no prodrome",
      "hpi": "Arthur Livingston is a 78-year-old male presenting with witnessed syncope while walking — no prodrome. Past medical history includes Aortic stenosis (moderate, followed by cardiology), Hypertension, Prior CABG. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Cardiac Syncope — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-792989",
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
              "test": "Troponin",
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "Bnp",
              "value": "450",
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
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-115535",
      "clinical": "Witnessed syncope while walking — no prodrome",
      "technique": "Standard protocol",
      "findings": "Third-degree AV block with ventricular escape rhythm at 38 bpm. No ST changes.",
      "impression": "Complete heart block. Pacemaker evaluation.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/01/2026",
      "study": "Echocardiogram",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-704608",
      "clinical": "Witnessed syncope while walking — no prodrome",
      "technique": "Standard protocol",
      "findings": "Moderate aortic stenosis with AVA 1.1cm². LVEF 50%. Mild LVH.",
      "impression": "Moderate AS with preserved EF. Consider contribution to syncope.",
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
    "Father: pacemaker at 72"
  ],
  "socialHistory": [
    [
      "Prior surgery",
      "CABG x3 five years ago"
    ],
    [
      "Activity",
      "Was walking in grocery store when collapsed"
    ]
  ]
};
