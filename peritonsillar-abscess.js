/* emr-data/peritonsillar-abscess.js — EMR case data for Peritonsillar Abscess (Quinsy) */
window.EMR_DATA = {
  "patient": {
    "name": "Jameson Ortiz",
  "patientHPI": "This is hands down the worst sore throat I've ever had in my life - it's all concentrated on the left side and the pain is absolutely unbearable. I've had throat problems before, but nothing like this intense burning and stabbing pain that makes it hard to even swallow my own spit.",
    "dob": "02/09/1976",
    "age": "50",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-505748",
    "language": "English",
    "race": "American Indian",
    "phone": "(713) 555-4350",
    "email": "jameson.ortiz@email.com",
    "address": "9145 Peachtree Rd, Cleveland, OH 44109",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Karen Liu, DO",
    "pharmacy": "Rite Aid — Sunrise Blvd",
    "emergencyContact": {
      "name": "Charles Roberts",
      "phone": "(505) 555-4921",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Worst sore throat of my life — all on the left side Left-sided throat/pharyngeal pain — unilateral",
    "diagnosis": "Peritonsillar Abscess (Quinsy)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Recurrent tonsillitis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Tobacco use",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Amoxicillin",
      "dose": "500mg TID (started 4 days ago — failing treatment)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-2",
      "name": "Ibuprofen",
      "dose": "600mg TID PRN",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    }
  ],
  "allergies": [
    {
      "allergen": "Clindamycin",
      "reaction": "C. difficile colitis",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "07:26",
      "bp": "138/82",
      "hr": "102",
      "rr": "18",
      "temp": "38.8°C",
      "spo2": "97%",
      "pain": "9/10",
      "bmi": "29",
      "weight": "88 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worst sore throat of my life — all on the left side Left-sided throat/pharyngeal pain — unilateral",
      "hpi": "Jameson Ortiz is a 50-year-old male presenting with worst sore throat of my life — all on the left side left-sided throat/pharyngeal pain — unilateral. Past medical history includes Recurrent tonsillitis, Tobacco use. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Peritonsillar Abscess (Quinsy) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-870443",
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
              "value": "16.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "14.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "48",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "235",
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
              "value": "138",
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
              "value": "104",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "23",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "18",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "81",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "10.1",
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
              "value": "1.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
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
      "accession": "IMG-915664",
      "clinical": "Worst sore throat of my life — all on the left side Left-sided throat/pharyngeal pain — unilateral",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Neck with Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-835629",
      "clinical": "Worst sore throat of my life — all on the left side Left-sided throat/pharyngeal pain — unilateral",
      "technique": "Standard protocol",
      "findings": "LEFT PERITONSILLAR ABSCESS — rim-enhancing fluid collection measuring 3.2 x 2.8cm in the left peritonsillar space. Left tonsil displaced medially. Mild left parapharyngeal fat stranding. No retropharyngeal extension. No vascular involvement (internal jugular vein patent — no Lemierre syndrome). Airway patent but mildly narrowed at oropharyngeal level. RIGHT side: normal.",
      "impression": "LEFT PERITONSILLAR ABSCESS, 3.2cm. No deep space extension. No vascular thrombosis. Requires drainage.",
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
      "accession": "IMG-988181",
      "clinical": "Worst sore throat of my life — all on the left side Left-sided throat/pharyngeal pain — unilateral",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 102 bpm. Normal intervals",
      "impression": "Sinus tachycardia — infection and pain",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 10 pack-years"
    ],
    [
      "Alcohol",
      "Social, 3-4 drinks weekends"
    ],
    [
      "Drugs",
      "Marijuana occasionally"
    ],
    [
      "Occupation",
      "Bartender"
    ],
    [
      "Living",
      "Lives with roommate"
    ]
  ]
};
