/* emr-data/septic-arthritis.js — EMR case data for Septic Arthritis (Knee) */
window.EMR_DATA = {
  "patient": {
    "name": "Natasha Volkov",
  "patientHPI": "My right knee started getting really hot and puffy yesterday out of nowhere - it's so swollen I can barely bend it and it feels like it's on fire when I touch it.",
    "dob": "10/10/1956",
    "age": "70",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-461025",
    "language": "English",
    "race": "Black/African American",
    "phone": "(412) 555-9786",
    "email": "natasha.volkov@email.com",
    "address": "7012 N Kedzie Blvd, Kansas City, MO 64108",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Walmart Pharmacy — Federal Hwy",
    "emergencyContact": {
      "name": "Sarah Williams",
      "phone": "(614) 555-3296",
      "relationship": "Partner"
    },
    "chiefComplaint": "My knee is hot and swollen Right knee — acute monoarticular",
    "diagnosis": "Septic Arthritis (Knee)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Gout",
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
      "description": "Skin abscess right shin",
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
      "description": "Obesity",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Allopurinol",
      "dose": "300mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-2",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    },
    {
      "id": "med-3",
      "name": "Losartan",
      "dose": "50mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-4",
      "name": "Colchicine",
      "dose": "0.6mg PRN (tried for this episode — no improvement)",
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
      "time": "07:29",
      "bp": "146/88",
      "hr": "98",
      "rr": "16",
      "temp": "38.7°C",
      "spo2": "98%",
      "pain": "8/10",
      "bmi": "22",
      "weight": "97 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "My knee is hot and swollen Right knee — acute monoarticular",
      "hpi": "Natasha Volkov is a 70-year-old female presenting with my knee is hot and swollen right knee — acute monoarticular. Past medical history includes Gout, Type 2 Diabetes, Skin abscess right shin, Hypertension, Obesity. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Septic Arthritis (Knee) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-374011",
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
              "value": "15.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "47",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "258",
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
              "value": "4.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
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
              "value": "26",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.1",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "268",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "10.5",
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
              "test": "ESR",
              "value": "78",
              "unit": "mm/hr",
              "range": "<20",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "14.2",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Uric Acid",
              "value": "7.8",
              "unit": "mg/dL",
              "range": "3.5-7.2",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending — 2 sets drawn",
              "unit": "",
              "range": "No growth",
              "flag": ""
            },
            {
              "test": "SYNOVIAL FLUID ANALYSIS",
              "value": "WBC 84,000/mm³ (>90% PMNs). Gram stain: Gram-positive cocci in clusters. Crystal analysis: NO crystals seen. Culture: pending.",
              "unit": "",
              "range": "Normal: <200 WBC, no organisms",
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
      "accession": "IMG-821477",
      "clinical": "My knee is hot and swollen Right knee — acute monoarticular",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "X-ray Knee",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-284815",
      "clinical": "My knee is hot and swollen Right knee — acute monoarticular",
      "technique": "Standard protocol",
      "findings": "Large joint effusion with displacement of fat pads. No fracture. Mild degenerative changes. No chondrocalcinite (pseudogout). No osteomyelitis changes (early infection won't show bone changes for 10-14 days).",
      "impression": "Large effusion — nonspecific. No bony destruction yet (would take 10-14 days to appear on X-ray).",
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
      "accession": "IMG-101989",
      "clinical": "My knee is hot and swollen Right knee — acute monoarticular",
      "technique": "Standard 12-lead",
      "findings": "Sinus rhythm at 98 bpm. Normal intervals",
      "impression": "Normal",
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
    "Father: gout",
    "No autoimmune disease"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Former, quit 5 years ago"
    ],
    [
      "Alcohol",
      "2-3 beers daily"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Long-haul truck driver (sedentary, limited healthcare access)"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ]
};
