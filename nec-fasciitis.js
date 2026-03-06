/* emr-data/nec-fasciitis.js — EMR case data for Necrotizing Fasciitis (Group A Streptococcus — Extremity) */
window.EMR_DATA = {
  "patient": {
    "name": "Deshawn Lewis",
  "patientHPI": "This pain in my right leg is absolutely killing me - I can't even describe how bad it hurts. It started a few days ago when I got a small cut on my shin, but now my whole calf is involved and it's spreading up past my knee. The skin looks really angry and red, and it feels hot to touch.",
    "dob": "08/01/1963",
    "age": "63",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-565984",
    "language": "English",
    "race": "Pacific Islander",
    "phone": "(803) 555-2234",
    "email": "deshawn.lewis@email.com",
    "address": "7701 W Haddon Ave, Memphis, TN 38127",
    "insurance": "Cigna",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Publix Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Christopher Carter",
      "phone": "(404) 555-9095",
      "relationship": "Sibling"
    },
    "chiefComplaint": "My leg pain is unbearable Right lower leg — started at small shin laceration, now involves entire calf and extending above knee",
    "diagnosis": "Necrotizing Fasciitis (Group A Streptococcus — Extremity)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Peripheral neuropathy",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Obesity",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-2",
      "name": "Gabapentin",
      "dose": "300mg TID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Michael Torres, DO"
    },
    {
      "id": "med-3",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
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
      "time": "10:35",
      "bp": "96/62",
      "hr": "122",
      "rr": "24",
      "temp": "40.0°C",
      "spo2": "95%",
      "pain": "10/10",
      "bmi": "34",
      "weight": "81 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "My leg pain is unbearable Right lower leg — started at small shin laceration, now involves entire calf and extending above knee",
      "hpi": "Deshawn Lewis is a 63-year-old male presenting with my leg pain is unbearable right lower leg — started at small shin laceration, now involves entire calf and extending above knee. Past medical history includes Type 2 Diabetes, Peripheral neuropathy, Obesity. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Necrotizing Fasciitis (Group A Streptococcus — Extremity) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-464426",
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
              "value": "28.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "11.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "42",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "194",
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
              "value": "131",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "4.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "105",
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
              "value": "2.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "312",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "10.4",
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
              "test": "CRP",
              "value": "28.6",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "5.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "1,840",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending",
              "unit": "",
              "range": "No growth",
              "flag": ""
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
      "accession": "IMG-617523",
      "clinical": "My leg pain is unbearable Right lower leg — started at small shin laceration, now involves entire calf and extending above knee",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Abdomen/Pelvis with Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-451396",
      "clinical": "My leg pain is unbearable Right lower leg — started at small shin laceration, now involves entire calf and extending above knee",
      "technique": "Standard protocol",
      "findings": "Right lower extremity: extensive subcutaneous edema and fascial thickening from mid-tibia to distal thigh. Fat stranding. Small pockets of fluid tracking along fascial planes. No discrete abscess. No subcutaneous gas. Muscle compartments enhancing but edematous.",
      "impression": "Findings consistent with necrotizing soft tissue infection of right lower extremity — EMERGENT SURGICAL EXPLORATION AND DEBRIDEMENT.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-995470",
      "clinical": "My leg pain is unbearable Right lower leg — started at small shin laceration, now involves entire calf and extending above knee",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 122 bpm. No ST changes",
      "impression": "Sinus tachycardia — sepsis",
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
    "Diabetes in multiple family members"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 15 pack-years"
    ],
    [
      "Alcohol",
      "Occasional"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Landscaper"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ]
};
