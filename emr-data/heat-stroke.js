/* emr-data/heat-stroke.js — EMR case data for Exertional Heat Stroke */
window.EMR_DATA = {
  "patient": {
    "name": "Dylan Morales",
    "dob": "06/15/2004",
    "age": "22",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-350390",
    "language": "English",
    "race": "Asian",
    "phone": "(791) 259-7032",
    "email": "dylan.morales@email.com",
    "address": "3791 Oak St, Fort Lauderdale, FL 33301",
    "insurance": "Tricare",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Walmart Pharmacy \u2014 Broward Blvd",
    "emergencyContact": {
      "name": "David Carter",
      "phone": "(765) 353-2668",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
    "diagnosis": "Exertional Heat Stroke"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None \u2014 previously healthy and fit athlete",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Prior marathon completions",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "None routine",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-2",
      "name": "Ibuprofen",
      "dose": "600mg taken before race (impairs renal prostaglandins)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-3",
      "name": "Caffeine pills",
      "dose": "200mg x2 taken during race (thermogenic)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "06:31",
      "bp": "92/58",
      "hr": "142",
      "rr": "32",
      "temp": "107.2\u00b0F (41.8\u00b0C) rectal",
      "spo2": "93%",
      "pain": "/10",
      "bmi": "32",
      "weight": "68 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
      "hpi": "Dylan Morales is a 22-year-old male presenting with friend: 'he collapsed during the marathon and won't wake up properly' no specific pain \u2014 global altered mental status. Past medical history includes None \u2014 previously healthy and fit athlete, Prior marathon completions. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Exertional Heat Stroke \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-570502",
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
              "value": "7.4",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "15",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "39",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "157",
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
              "value": "148",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "H"
            },
            {
              "test": "Potassium",
              "value": "5.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "101",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "25",
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
              "value": "2.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "90",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.2",
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
              "test": "Core Temperature",
              "value": "107.2\u00b0F (41.8\u00b0C)",
              "unit": "",
              "range": "97-99\u00b0F",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "32,000",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "AST",
              "value": "680",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "420",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "PT/INR",
              "value": "1.6",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "8.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.18",
              "unit": "",
              "range": "7.35-7.45",
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
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-895220",
      "clinical": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
      "technique": "Standard protocol",
      "findings": "No acute intracranial pathology. No hemorrhage. No edema.",
      "impression": "Normal \u2014 AMS from thermal injury to CNS, not structural cause",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-971682",
      "clinical": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
      "technique": "Standard protocol",
      "findings": "Clear lungs. Normal cardiac silhouette.",
      "impression": "No acute pulmonary pathology",
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
      "accession": "IMG-218126",
      "clinical": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 142 bpm. Diffuse ST depression (demand ischemia). QTc prolonged at 490ms",
      "impression": "Sinus tachycardia with demand ischemia. Prolonged QTc from hyperthermia \u2014 arrhythmia risk.",
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
    "No malignant hyperthermia history",
    "No cardiac history"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social \u2014 had beers at pre-race dinner last night"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Software developer, recreational athlete"
    ],
    [
      "Living",
      "Fit 32-year-old male, well-trained"
    ]
  ]
};
