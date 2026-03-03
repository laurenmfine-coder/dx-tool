/* emr-data/gi-bleed-syncope.js — EMR case data for Upper GI Hemorrhage with Syncope */
window.EMR_DATA = {
  "patient": {
    "name": "Dorothy Hansen",
    "dob": "09/27/1960",
    "age": "66",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-362425",
    "language": "English",
    "race": "American Indian",
    "phone": "(341) 152-3763",
    "email": "dorothy.hansen@email.com",
    "address": "5294 Cedar Ln, Boca Raton, FL 33431",
    "insurance": "Medicaid",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Publix Pharmacy — University Dr",
    "emergencyContact": {
      "name": "Edward Murphy",
      "phone": "(857) 468-6928",
      "relationship": "Parent"
    },
    "chiefComplaint": "Passed out in the bathroom No pain location — main issue is dizziness and passing out",
    "diagnosis": "Upper GI Hemorrhage with Syncope"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Osteoarthritis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Chronic back pain",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Peptic ulcer disease",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Ibuprofen",
      "dose": "600mg TID (self-medicating for 3 months)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Michael Torres, DO"
    },
    {
      "id": "med-2",
      "name": "Aspirin",
      "dose": "81mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-3",
      "name": "Omeprazole",
      "dose": "20mg daily (not taking regularly)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "reaction": "Nausea",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "06:45",
      "bp": "94/62 (supine) → 72/48 (sitting)",
      "hr": "118 (supine) → 136 (sitting)",
      "rr": "20",
      "temp": "36.4°C",
      "spo2": "97%",
      "pain": "/10",
      "bmi": "24",
      "weight": "80 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Passed out in the bathroom No pain location — main issue is dizziness and passing out",
      "hpi": "Dorothy Hansen is a 66-year-old female presenting with passed out in the bathroom no pain location — main issue is dizziness and passing out. Past medical history includes Osteoarthritis, Chronic back pain, Peptic ulcer disease. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Upper GI Hemorrhage with Syncope — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-925654",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "10.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "6.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "37",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "188",
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
              "value": "144",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.9",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "103",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "27",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "48",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.3",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "83",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "8.6",
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
              "value": "3.6",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "PT/INR",
              "value": "1.1",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            },
            {
              "test": "Type and Crossmatch",
              "value": "A positive, crossmatch 2 units pRBC",
              "unit": "",
              "range": "",
              "flag": ""
            },
            {
              "test": "Hepatic Function Panel",
              "value": "AST 42, ALT 38, Alk Phos 98, Albumin 3.0",
              "unit": "",
              "range": "",
              "flag": "H"
            },
            {
              "test": "Troponin I",
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
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
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-929060",
      "clinical": "Passed out in the bathroom No pain location — main issue is dizziness and passing out",
      "technique": "Standard protocol",
      "findings": "No acute cardiopulmonary process. Normal cardiac silhouette.",
      "impression": "No acute findings",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Abdominal X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-863673",
      "clinical": "Passed out in the bathroom No pain location — main issue is dizziness and passing out",
      "technique": "Standard protocol",
      "findings": "Nonspecific bowel gas pattern. No free air. No obstruction.",
      "impression": "Non-contributory",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-325652",
      "clinical": "Passed out in the bathroom No pain location — main issue is dizziness and passing out",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 118 bpm. No ST elevations or depressions. No arrhythmia",
      "impression": "Sinus tachycardia — appropriate for hypovolemia/hemorrhagic shock",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
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
    "Father: colon cancer at 68",
    "Mother: stroke"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "20 pack-years, current smoker"
    ],
    [
      "Alcohol",
      "2-3 whiskeys daily for 30+ years"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired factory worker"
    ],
    [
      "Living",
      "Lives alone"
    ]
  ]
};
