/* emr-data/vt-syncope.js — EMR case data for Ventricular Tachycardia with Syncope */
window.EMR_DATA = {
  "patient": {
    "name": "Dennis Crawford",
  "patientHPI": "I was just sitting at home when I felt my heart racing really fast and then I blacked out completely - when I came to my family was standing over me asking if I was okay.",
    "dob": "06/15/1964",
    "age": "62",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-384673",
    "language": "English",
    "race": "Asian",
    "phone": "(404) 555-2402",
    "email": "dennis.crawford@email.com",
    "address": "1209 N Western Ave, Phoenix, AZ 85013",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Rite Aid \u2014 Pines Blvd",
    "emergencyContact": {
      "name": "Gloria Carter",
      "phone": "(617) 555-6908",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Passed out No specific pain location \u2014 felt palpitations in chest before passing out",
    "diagnosis": "Ventricular Tachycardia with Syncope"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Myocardial infarction 3 years ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Heart failure",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Hyperlipidemia",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Carvedilol",
      "dose": "25mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-2",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-3",
      "name": "Furosemide",
      "dose": "40mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-4",
      "name": "Atorvastatin",
      "dose": "80mg QHS",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-5",
      "name": "Aspirin",
      "dose": "81mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-6",
      "name": "Clopidogrel",
      "dose": "75mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
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
      "time": "07:25",
      "bp": "108/72",
      "hr": "78",
      "rr": "16",
      "temp": "36.9\u00b0C",
      "spo2": "96%",
      "pain": "/10",
      "bmi": "33",
      "weight": "65 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Passed out No specific pain location \u2014 felt palpitations in chest before passing out",
      "hpi": "Dennis Crawford is a 62-year-old male presenting with passed out no specific pain location \u2014 felt palpitations in chest before passing out. Past medical history includes Myocardial infarction 3 years ago, Heart failure, Hypertension, Hyperlipidemia. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ventricular Tachycardia with Syncope \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-497596",
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
              "value": "8.8",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "267",
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
              "value": "3.3",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "L"
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
              "value": "12",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "108",
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
              "test": "Troponin I",
              "value": "0.03",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": ""
            },
            {
              "test": "BNP",
              "value": "680",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Magnesium",
              "value": "1.5",
              "unit": "mg/dL",
              "range": "1.7-2.2",
              "flag": "H"
            },
            {
              "test": "TSH",
              "value": "2.4",
              "unit": "mIU/L",
              "range": "0.4-4.0",
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
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-263501",
      "clinical": "Passed out No specific pain location \u2014 felt palpitations in chest before passing out",
      "technique": "Standard protocol",
      "findings": "Cardiomegaly. Mild bilateral pleural effusions. Cephalization of pulmonary vasculature. No focal consolidation.",
      "impression": "Cardiomegaly with mild CHF changes",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "POCUS \u2013 Cardiac",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-605713",
      "clinical": "Passed out No specific pain location \u2014 felt palpitations in chest before passing out",
      "technique": "Standard protocol",
      "findings": "Severely reduced LV systolic function. Dilated LV. Anterior wall akinesis. Mild pericardial effusion. No RV dilation.",
      "impression": "Severe LV dysfunction consistent with known cardiomyopathy",
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
      "accession": "IMG-981448",
      "clinical": "Passed out No specific pain location \u2014 felt palpitations in chest before passing out",
      "technique": "Standard 12-lead",
      "findings": "Normal sinus rhythm at 78 bpm currently. Old Q waves in V1-V4 (prior anterior MI). Prolonged QTc at 510ms. Frequent PVCs (3 seen on rhythm strip). Non-sustained VT run captured: 8-beat wide complex tachycardia at 180 bpm",
      "impression": "NSR with prior anterior MI changes, prolonged QTc, frequent PVCs with NSVT \u2014 HIGH RISK for sustained VT/cardiac arrest",
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
    "Father: sudden cardiac death at age 52",
    "Brother: heart failure"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit after MI (20 pack-year history)"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired bus driver"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ]
};
