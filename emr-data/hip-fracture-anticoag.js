/* emr-data/hip-fracture-anticoag.js — EMR case data for Hip Fracture on Anticoagulation */
window.EMR_DATA = {
  "patient": {
    "name": "Margaret Sullivan",
    "dob": "06/15/1944",
    "age": "82",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-628815",
    "language": "English",
    "race": "Black/African American",
    "phone": "(649) 609-3584",
    "email": "margaret.sullivan@email.com",
    "address": "864 Oak St, Boca Raton, FL 33431",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Walmart Pharmacy \u2014 Pines Blvd",
    "emergencyContact": {
      "name": "Henry Sanchez",
      "phone": "(548) 940-6605",
      "relationship": "Partner"
    },
    "chiefComplaint": "I fell and I can't get up Right hip and groin",
    "diagnosis": "Hip Fracture on Anticoagulation"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Atrial fibrillation",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Osteoporosis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Mild dementia",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Chronic kidney disease stage 3",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Warfarin",
      "dose": "4mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    },
    {
      "id": "med-2",
      "name": "Alendronate",
      "dose": "70mg weekly",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-3",
      "name": "Donepezil",
      "dose": "10mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-4",
      "name": "Amlodipine",
      "dose": "5mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-5",
      "name": "Metoprolol",
      "dose": "25mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
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
      "time": "10:05",
      "bp": "108/62",
      "hr": "92",
      "rr": "18",
      "temp": "36.2\u00b0C",
      "spo2": "94%",
      "pain": "/10",
      "bmi": "25",
      "weight": "100 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I fell and I can't get up Right hip and groin",
      "hpi": "Margaret Sullivan is a 82-year-old female presenting with i fell and i can't get up right hip and groin. Past medical history includes Atrial fibrillation, Osteoporosis, Mild dementia, Hypertension, Chronic kidney disease stage 3. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Hip Fracture on Anticoagulation \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-474026",
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
              "value": "7",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "10.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "43",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "272",
              "unit": "x10\u00b3/\u00b5L",
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
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "5.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "100",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "28",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "10",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.1",
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
              "test": "INR",
              "value": "3.2",
              "unit": "",
              "range": "2.0-3.0",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "2,400",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "2.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Troponin I",
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "Urinalysis",
              "value": "Dark amber, specific gravity 1.035, trace blood, trace protein",
              "unit": "",
              "range": "Normal",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-312683",
      "clinical": "I fell and I can't get up Right hip and groin",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "X-ray Hip",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-757447",
      "clinical": "I fell and I can't get up Right hip and groin",
      "technique": "Standard protocol",
      "findings": "DISPLACED LEFT FEMORAL NECK FRACTURE (Garden type III/IV). Femoral head displaced posteriorly with significant angulation. No pathologic bone lesion. Severe osteopenia. Degenerative changes in hip joint.",
      "impression": "Displaced femoral neck fracture \u2014 orthopedic surgery consultation for surgical repair (likely hemiarthroplasty or total hip arthroplasty given displacement and patient age).",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-542904",
      "clinical": "I fell and I can't get up Right hip and groin",
      "technique": "Standard protocol",
      "findings": "No acute intracranial hemorrhage. Mild chronic small vessel ischemic changes. Generalized volume loss consistent with age and known dementia. No skull fracture.",
      "impression": "No acute intracranial pathology \u2014 delirium is from pain, dehydration, and immobility, not head injury",
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
      "accession": "IMG-983839",
      "clinical": "I fell and I can't get up Right hip and groin",
      "technique": "Standard 12-lead",
      "findings": "Atrial fibrillation at 92 bpm. No ST changes. Normal intervals",
      "impression": "Chronic AFib \u2014 need to manage anticoagulation perioperatively",
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
    "Mother: hip fracture at 80",
    "Sister: osteoporosis"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Glass of wine with dinner occasionally"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired school principal"
    ],
    [
      "Living",
      "Lives alone with home aide 4 hours daily. Independent with ADLs at baseline. No fall in past year."
    ]
  ]
};
