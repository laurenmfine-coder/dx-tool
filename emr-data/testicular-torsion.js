/* emr-data/testicular-torsion.js — EMR case data for Testicular Torsion */
window.EMR_DATA = {
  "patient": {
    "name": "Justin Mercer",
  "patientHPI": "I woke up this morning with the worst pain I've ever felt down there on my left side - it came on suddenly and it's so bad I feel sick to my stomach. The pain is sharp and constant, and I can barely walk because any movement makes it worse.",
    "dob": "06/15/2010",
    "age": "16",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-615645",
    "language": "English",
    "race": "Black/African American",
    "phone": "(415) 555-1939",
    "email": "justin.mercer@email.com",
    "address": "6053 Poplar Ave, Chicago, IL 60612",
    "insurance": "Cigna",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "CVS Pharmacy \u2014 Broward Blvd",
    "emergencyContact": {
      "name": "Dorothy Mitchell",
      "phone": "(313) 555-7655",
      "relationship": "Partner"
    },
    "chiefComplaint": "My... down there hurts really bad Left testicle \u2014 sudden onset",
    "diagnosis": "Testicular Torsion"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None \u2014 previously healthy teenager",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
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
      "time": "08:11",
      "bp": "138/86",
      "hr": "112",
      "rr": "20",
      "temp": "37.0\u00b0C",
      "spo2": "99%",
      "pain": "10/10",
      "bmi": "28",
      "weight": "55 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "My... down there hurts really bad Left testicle \u2014 sudden onset",
      "hpi": "Justin Mercer is a 16-year-old male presenting with my... down there hurts really bad left testicle \u2014 sudden onset. Past medical history includes None \u2014 previously healthy teenager. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Testicular Torsion \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-719310",
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
              "value": "11.2",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.5",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "36",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "169",
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
              "value": "139",
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
              "value": "106",
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
              "value": "8",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "100",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.6",
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
              "test": "Urinalysis",
              "value": "Normal \u2014 no WBC, no bacteria, no blood",
              "unit": "",
              "range": "Normal",
              "flag": ""
            },
            {
              "test": "\u03b2-hCG",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
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
      "accession": "IMG-478638",
      "clinical": "My... down there hurts really bad Left testicle \u2014 sudden onset",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "POCUS \u2013 FAST Exam",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-470698",
      "clinical": "My... down there hurts really bad Left testicle \u2014 sudden onset",
      "technique": "Standard protocol",
      "findings": "LEFT TESTICLE: ABSENT INTRATESTICULAR BLOOD FLOW on color Doppler. Testicle appears enlarged and hypoechoic (edematous). Reactive hydrocele present. Spermatic cord appears twisted with 'whirlpool sign.' RIGHT TESTICLE: normal size, normal blood flow on Doppler.",
      "impression": "LEFT TESTICULAR TORSION \u2014 absent blood flow. UROLOGY TO OR IMMEDIATELY \u2014 do not delay for formal ultrasound.",
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
      "accession": "IMG-462124",
      "clinical": "My... down there hurts really bad Left testicle \u2014 sudden onset",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 112 bpm. Normal intervals",
      "impression": "Sinus tachycardia \u2014 pain response",
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
    "No urologic conditions"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Never"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "High school student"
    ],
    [
      "Living",
      "Lives with both parents"
    ]
  ]
};
