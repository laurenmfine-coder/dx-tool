// Virtual EMR Case: Cauda Equina Syndrome
// Variant: cauda-equina | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "James Morrison",
    "dob": "08/30/1972",
    "age": 53,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Steven Walsh, DO",
    "pharmacy": "CVS \u2014 Weston, FL",
    "language": "English",
    "race": "White",
    "address": "1680 Bonaventure Blvd, Weston, FL",
    "phone": "(954) 555-9012",
    "email": "j.morrison72@email.com",
    "emergencyContact": {
      "name": "Karen Morrison (Wife)",
      "phone": "(954) 555-9028"
    },
    "mrn": "NSU-2025-51727"
  },
  "problems": [
    {
      "problem": "Lumbar Disc Herniation L4-L5",
      "icd": "M51.16",
      "onset": "2024",
      "status": "Active",
      "notes": "MRI 06/2024 showed moderate L4-5 disc herniation; managed conservatively with PT"
    },
    {
      "problem": "Chronic Low Back Pain",
      "icd": "M54.5",
      "onset": "2019",
      "status": "Active",
      "notes": "Intermittent; worse with heavy lifting; managed with PT and occasional NSAIDs"
    }
  ],
  "medications": [
    {
      "name": "Naproxen 500mg BID PRN",
      "sig": "PO BID as needed for pain",
      "prescriber": "Dr. Walsh",
      "start": "06/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Cyclobenzaprine 10mg QHS PRN",
      "sig": "PO at bedtime as needed",
      "prescriber": "Dr. Walsh",
      "start": "06/2024",
      "refills": 2,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "148/88",
      "hr": 92,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "210 lbs",
      "ht": "6'0\"",
      "bmi": 28.5,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Severe back pain, leg weakness, urinary retention x 12 hours",
      "hpi": "53M with known L4-5 herniation presents with acute worsening of back pain since yesterday after lifting heavy box. Pain radiates bilaterally down both legs (worse on left). Over past 12 hours developed bilateral leg weakness (difficulty walking, legs 'buckling'), saddle-area numbness, and inability to urinate despite urge. Has not had a BM in 24 hours. Tried naproxen and cyclobenzaprine without relief. Denies fever, trauma beyond the lift, IV drug use, cancer history.",
      "exam": "In significant distress. Spine: Tenderness L4-S1. Neuro: Bilateral lower extremity weakness \u2014 hip flexion 3/5 bilaterally, knee extension 4/5, ankle dorsiflexion 2/5 L > R. Diminished sensation in S2-S5 dermatomes (saddle distribution). Diminished rectal tone. Absent bilateral ankle reflexes. SLR positive bilaterally at 30 degrees. Bladder scan: 850 mL post-void residual.",
      "assessment": "1. CAUDA EQUINA SYNDROME \u2014 saddle anesthesia, bilateral leg weakness, urinary retention, decreased rectal tone\n2. Likely massive disc herniation at L4-5 with acute progression\n3. SURGICAL EMERGENCY \u2014 decompression within 24-48 hours for best outcomes",
      "plan": "1. STAT MRI lumbar spine without contrast\n2. EMERGENT neurosurgery/spine surgery consult\n3. Foley catheter (PVR 850 mL)\n4. Dexamethasone 10mg IV\n5. Morphine 4mg IV for pain\n6. Strict log-roll precautions\n7. NPO for likely emergent surgery"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "12:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 12:00",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-02261200",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "8.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "15.0",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "44.8",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
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
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "141",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "INFLAMMATORY",
          "results": [
            {
              "test": "ESR",
              "value": "12",
              "unit": "mm/hr",
              "range": "0-20",
              "flag": ""
            },
            {
              "test": "CRP",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "<1.0",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "MRI LUMBAR SPINE WITHOUT CONTRAST",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Thomas Lee, MD (Neuroradiology)",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Acute bilateral leg weakness, saddle anesthesia, urinary retention \u2014 r/o cauda equina",
      "technique": "MRI lumbar spine without contrast, sagittal and axial sequences.",
      "findings": "Large central disc extrusion at L4-L5, measuring approximately 18 mm AP x 22 mm transverse. Severe central canal stenosis with near-complete effacement of the thecal sac. Compression of the cauda equina nerve roots. Additional moderate disc bulging at L5-S1.\n\nConus medullaris terminates normally at L1-L2. No enhancing lesion. No epidural collection.",
      "impression": "1. Large central L4-L5 disc extrusion with cauda equina compression \u2014 SURGICAL EMERGENCY.\n2. Near-complete thecal sac effacement.\n3. Emergent surgical decompression recommended.",
      "dictated": "02/26/2026 15:00",
      "verified": "02/26/2026 15:20"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8001",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2101",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-502",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (complete)",
      "date": "2023",
      "site": "Left deltoid IM",
      "lot": "SX23-412",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Degenerative disc disease, alive at 82",
    "Mother: Osteoporosis, alive at 80"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Warehouse manager"
    ],
    [
      "Marital",
      "Married 25 years"
    ],
    [
      "Tobacco",
      "Former \u2014 quit 2018"
    ],
    [
      "Alcohol",
      "2-3 beers/week"
    ],
    [
      "Exercise",
      "Previously active; limited by back pain x 2 years"
    ]
  ],
  "meta": {
    "caseId": "cauda-equina",
    "diagnosis": "Cauda Equina Syndrome",
    "acuity": 2,
    "presentation": "Back Pain",
    "category": "musculoskeletal"
  }
};
