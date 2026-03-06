/* emr-data/pe-v1.js — Auto-generated EMR case data for Pulmonary Embolism */
window.EMR_DATA = {
  "patient": {
    "name": "Christina Park",
  "patientHPI": "I was just sitting at work when suddenly I got this sharp, stabbing pain in my chest that got worse when I took deep breaths. I also felt short of breath and couldn't seem to get enough air, which really scared me since I just got back from a long flight overseas.",
    "dob": "08/19/1984",
    "age": "42",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-965042",
    "language": "English",
    "race": "Asian",
    "phone": "(630) 555-9625",
    "email": "christina.park@email.com",
    "address": "4479 Walnut Dr, Birmingham, AL 35208",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Rite Aid — Palm Ave",
    "emergencyContact": {
      "name": "Brian Park",
      "phone": "(415) 555-6807",
      "relationship": "Parent"
    },
    "chiefComplaint": "Sudden-onset pleuritic chest pain and dyspnea",
    "diagnosis": "Pulmonary Embolism"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Oral contraceptive use",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Recent long-haul flight (12 hours)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "BMI 32",
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
      "prescriber": "Dr. David Kim, MD"
    },
    {
      "id": "med-2",
      "name": "Ibuprofen",
      "dose": "400mg",
      "route": "PO",
      "frequency": "PRN",
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
      "bp": "118/72",
      "hr": "118",
      "rr": "24",
      "temp": "37.4°C",
      "spo2": "91%",
      "pain": "7/10",
      "bmi": "34",
      "weight": "91 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Sudden-onset pleuritic chest pain and dyspnea",
      "hpi": "Christina Park is a 42-year-old female presenting with sudden-onset pleuritic chest pain and dyspnea. Past medical history includes Oral contraceptive use, Recent long-haul flight (12 hours), BMI 32. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Pulmonary Embolism — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-721557",
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
              "value": "0.12",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "Bnp",
              "value": "340",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Ddimer",
              "value": "4200",
              "unit": "ng/mL",
              "range": "<500",
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
      "study": "CTA Chest (PE Protocol)",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-412712",
      "clinical": "Sudden-onset pleuritic chest pain and dyspnea",
      "technique": "Standard protocol",
      "findings": "Large saddle embolus at the bifurcation of the main pulmonary artery extending into bilateral lobar arteries. Right ventricle dilated with RV/LV ratio >1.0. No pleural effusion.",
      "impression": "Submassive pulmonary embolism with right heart strain.",
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
      "accession": "IMG-186747",
      "clinical": "Sudden-onset pleuritic chest pain and dyspnea",
      "technique": "Standard protocol",
      "findings": "Hampton's hump in right lower lobe. No pneumothorax.",
      "impression": "Findings suggestive of pulmonary infarction.",
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
    "Mother: DVT at age 42",
    "No known thrombophilia"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social"
    ],
    [
      "Occupation",
      "Marketing executive"
    ],
    [
      "Travel",
      "Returned from London 3 days ago"
    ]
  ]
};
