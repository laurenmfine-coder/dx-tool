/* emr-data/septic-shock-urosepsis.js — EMR case data for Septic Shock Secondary to Urosepsis */
window.EMR_DATA = {
  "patient": {
    "name": "Edna Fitzgerald",
  "patientHPI": "My daughter found me this morning shaking and confused - I've been having this terrible burning pain in my lower back and belly that's been getting worse over the past couple days.",
    "dob": "02/01/1947",
    "age": "79",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-105988",
    "language": "English",
    "race": "Black/African American",
    "phone": "(503) 555-5967",
    "email": "edna.fitzgerald@email.com",
    "address": "3213 Birch Ln, Denver, CO 80205",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "CVS Pharmacy — University Dr",
    "emergencyContact": {
      "name": "Linda Williams",
      "phone": "(212) 555-4470",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Daughter called EMS: 'found her confused and shaking' Low belly and back pain — flanks",
    "diagnosis": "Septic Shock Secondary to Urosepsis"
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
      "description": "Recurrent UTIs",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Benign prostatic hyperplasia — wait, female. Let me fix: Urinary incontinence",
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
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Michael Torres, DO"
    },
    {
      "id": "med-2",
      "name": "Glipizide",
      "dose": "5mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-3",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    },
    {
      "id": "med-4",
      "name": "Nitrofurantoin",
      "dose": "100mg BID (completed 5-day course 2 weeks ago for UTI)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "reaction": "Rash",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "08:41",
      "bp": "78/48 (MAP 58)",
      "hr": "118",
      "rr": "24",
      "temp": "39.9°C",
      "spo2": "94%",
      "pain": "/10",
      "bmi": "27",
      "weight": "91 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Daughter called EMS: 'found her confused and shaking' Low belly and back pain — flanks",
      "hpi": "Edna Fitzgerald is a 79-year-old female presenting with daughter called ems: 'found her confused and shaking' low belly and back pain — flanks. Past medical history includes Type 2 Diabetes, Recurrent UTIs, Benign prostatic hyperplasia — wait, female. Let me fix: Urinary incontinence, Hypertension, Chronic kidney disease stage 3. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Septic Shock Secondary to Urosepsis — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-535409",
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
              "value": "22.6",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "11.8",
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
              "value": "98",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "137",
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
              "value": "14",
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
              "value": "248",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
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
              "value": "5.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Procalcitonin",
              "value": "18.4",
              "unit": "ng/mL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Urinalysis",
              "value": "Positive: WBC >100, nitrite+, leukocyte esterase 3+, bacteria many, RBC 10-25",
              "unit": "",
              "range": "Normal",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending — DRAW BEFORE ANTIBIOTICS",
              "unit": "",
              "range": "No growth",
              "flag": ""
            },
            {
              "test": "Urine Culture",
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
      "id": "img-1",
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-719324",
      "clinical": "Daughter called EMS: 'found her confused and shaking' Low belly and back pain — flanks",
      "technique": "Standard protocol",
      "findings": "Clear lungs. No infiltrate. No pleural effusion.",
      "impression": "No pulmonary source of infection",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Renal Ultrasound",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-170914",
      "clinical": "Daughter called EMS: 'found her confused and shaking' Low belly and back pain — flanks",
      "technique": "Standard protocol",
      "findings": "Right kidney: moderate hydronephrosis. 8mm stone at right ureterovesical junction. Perinephric stranding. Left kidney: normal. Bladder: thickened wall, debris.",
      "impression": "RIGHT OBSTRUCTIVE UROPATHY with hydronephrosis and UVJ stone — obstructed infected system requires emergent urology consultation for decompression",
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
      "accession": "IMG-904528",
      "clinical": "Daughter called EMS: 'found her confused and shaking' Low belly and back pain — flanks",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 118 bpm. No ST changes. Normal intervals",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
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
      "Retired librarian"
    ],
    [
      "Living",
      "Lives alone, daughter visits twice weekly"
    ]
  ]
};
