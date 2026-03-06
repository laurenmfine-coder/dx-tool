/* emr-data/chf-v1.js — EMR case data for Acute Decompensated Heart Failure */
window.EMR_DATA = {
  "patient": {
    "name": "William Turner",
  "patientHPI": "I just can't breathe when I try to lay down flat anymore - it's not pain anywhere specific, I just feel like I'm suffocating. I have to prop myself up with a bunch of pillows just to get any rest at all.",
    "dob": "06/15/1958",
    "age": "68",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-763589",
    "language": "English",
    "race": "Asian",
    "phone": "(404) 555-6286",
    "email": "william.turner@email.com",
    "address": "5769 Peachtree Rd, Memphis, TN 38108",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "CVS Pharmacy \u2014 Federal Hwy",
    "emergencyContact": {
      "name": "Michael Cook",
      "phone": "(713) 555-4694",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
    "diagnosis": "Acute Decompensated Heart Failure"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Heart failure with reduced EF",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Atrial fibrillation",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Type 2 Diabetes",
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
      "description": "Prior MI 5 years ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Furosemide",
      "dose": "40mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Michael Torres, DO"
    },
    {
      "id": "med-2",
      "name": "Lisinopril",
      "dose": "10mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    },
    {
      "id": "med-3",
      "name": "Carvedilol",
      "dose": "12.5mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-4",
      "name": "Apixaban",
      "dose": "5mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-5",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE inhibitors",
      "reaction": "Angioedema \u2014 switched from enalapril to lisinopril without issue but reports this",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "08:26",
      "bp": "168/98",
      "hr": "110 (irregularly irregular)",
      "rr": "28",
      "temp": "36.8\u00b0C",
      "spo2": "88%",
      "pain": "9/10",
      "bmi": "32",
      "weight": "79 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
      "hpi": "William Turner is a 68-year-old male presenting with can't breathe when i lay down no specific spot \u2014 just can't breathe. Past medical history includes Heart failure with reduced EF, Atrial fibrillation, Type 2 Diabetes, Hypertension, Prior MI 5 years ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Decompensated Heart Failure \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-703715",
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
              "value": "7.1",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
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
              "value": "36",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "229",
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
              "value": "131",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "4.8",
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
              "value": "22",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "13",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "89",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "8.7",
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
              "test": "BNP",
              "value": "2,840",
              "unit": "pg/mL",
              "range": "<100",
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
              "test": "TSH",
              "value": "2.1",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
            },
            {
              "test": "Hepatic Panel ALT",
              "value": "68",
              "unit": "U/L",
              "range": "7-56",
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
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-186165",
      "clinical": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
      "technique": "Standard protocol",
      "findings": "Cardiomegaly. Bilateral pleural effusions (right > left). Cephalization of pulmonary vasculature. Kerley B lines. Bilateral alveolar infiltrates in butterfly pattern.",
      "impression": "Pulmonary edema with bilateral pleural effusions \u2014 acute decompensated heart failure",
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
      "accession": "IMG-978996",
      "clinical": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
      "technique": "Standard protocol",
      "findings": "Severely reduced LV systolic function (EF ~20%). Dilated LV. Moderate mitral regurgitation. Small pericardial effusion. Dilated IVC without respiratory variation.",
      "impression": "Severely reduced EF with volume overload",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "POCUS \u2013 Lung",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-750659",
      "clinical": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
      "technique": "Standard protocol",
      "findings": "Bilateral B-lines in >3 lung zones (>3 B-lines per intercostal space). Small bilateral pleural effusions.",
      "impression": "Pulmonary edema confirmed by lung ultrasound",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-4",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-163338",
      "clinical": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
      "technique": "Standard 12-lead",
      "findings": "Atrial fibrillation with rapid ventricular response at 110 bpm. Left ventricular hypertrophy. Old Q waves in V1-V3 (prior anterior MI). No acute ST changes",
      "impression": "AFib with RVR, LVH, old anterior MI \u2014 no new acute ischemia",
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
    "Mother died of heart failure at 72",
    "Father had MI at 60"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit 5 years ago, 20 pack-years"
    ],
    [
      "Alcohol",
      "Stopped drinking 3 years ago at diagnosis"
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
      "Lives with adult daughter"
    ]
  ]
};
