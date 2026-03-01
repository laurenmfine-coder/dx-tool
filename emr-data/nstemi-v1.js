// Virtual EMR Case: Non-ST Elevation Myocardial Infarction (NSTEMI)
// Variant: nstemi-v1 | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Frank DeLuca",
    "dob": "06/08/1958",
    "age": 67,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B + Medigap",
    "pcp": "Dr. Andrew Park, MD",
    "pharmacy": "Publix \u2014 Fort Lauderdale, FL",
    "language": "English",
    "race": "White (Italian)",
    "address": "4815 NE 22nd Ave, Fort Lauderdale, FL",
    "phone": "(954) 555-3388",
    "email": "f.deluca58@email.com",
    "emergencyContact": {
      "name": "Maria DeLuca (Wife)",
      "phone": "(954) 555-3404"
    },
    "mrn": "NSU-2025-91926"
  },
  "problems": [
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2002",
      "status": "Active",
      "notes": "On metoprolol, lisinopril"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2005",
      "status": "Active",
      "notes": "On atorvastatin; LDL last 118"
    },
    {
      "problem": "Type 2 Diabetes",
      "icd": "E11.9",
      "onset": "2012",
      "status": "Active",
      "notes": "A1C 8.2; on metformin/glipizide"
    },
    {
      "problem": "Obesity",
      "icd": "E66.01",
      "onset": "2008",
      "status": "Active",
      "notes": "BMI 33"
    },
    {
      "problem": "Former Smoker",
      "icd": "Z87.891",
      "onset": "1975",
      "status": "Active",
      "notes": "20 pack-year; quit 2010"
    }
  ],
  "medications": [
    {
      "name": "Metoprolol Succinate 100mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Park",
      "start": "03/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Park",
      "start": "06/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "PO at bedtime",
      "prescriber": "Dr. Park",
      "start": "01/2006",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Park",
      "start": "04/2012",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Park",
      "start": "01/2010",
      "refills": 11,
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
      "bp": "162/94",
      "hr": 88,
      "rr": 18,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "228 lbs",
      "ht": "5'10\"",
      "bmi": 32.7,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "148/86",
      "hr": 78,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "228 lbs",
      "ht": "5'10\"",
      "bmi": 32.7,
      "setting": "ED \u2014 Post-NTG/Heparin"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Substernal chest pressure x 3 hours",
      "hpi": "67M with multiple cardiac risk factors presents with 3 hours of substernal chest pressure radiating to left arm and jaw. Began at rest while watching TV. Describes as 'elephant sitting on chest,' 7/10 intensity. Associated with diaphoresis and mild nausea. Took 3 baby aspirin at home. Pain partially relieved by sublingual NTG in ED (6/10 \u2192 3/10). No prior cardiac catheterization. No recent cocaine use.",
      "exam": "Diaphoretic, anxious. CV: RRR, no murmurs, no S3/S4. JVP normal. Lungs: CTAB. Abdomen benign. Extremities: Warm, no edema. Peripheral pulses intact.",
      "assessment": "1. NSTEMI \u2014 chest pain with dynamic ECG changes and rising troponin\n2. TIMI Score 5 (age >65, >3 CAD risk factors, known CAD risk, ST deviation, elevated troponin) \u2014 intermediate-high risk\n3. Plan for urgent cardiac catheterization",
      "plan": "1. Aspirin 325mg (already took 243mg), clopidogrel 600mg loading\n2. Heparin drip per ACS protocol\n3. Atorvastatin increased to 80mg\n4. Continue metoprolol (hold if hypotensive)\n5. NTG drip titrate to pain\n6. Serial troponins q3h\n7. Cardiology consult for catheterization within 24h\n8. Telemetry; CCU admission\n9. Strict I/O, NPO for cath"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "14:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 14:10",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260310",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "10.2",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "14.0",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "228",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "CARDIAC MARKERS \u2014 SERIAL",
          "results": [
            {
              "test": "Troponin I (Initial)",
              "value": "0.42",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "Troponin I (3hr)",
              "value": "2.18",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "BNP",
              "value": "342",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "CK-MB",
              "value": "18.4",
              "unit": "ng/mL",
              "range": "<5.0",
              "flag": "H"
            }
          ]
        },
        {
          "name": "BMP",
          "results": [
            {
              "test": "Glucose",
              "value": "218",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.4",
              "unit": "mEq/L",
              "range": "3.5-5.1",
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
      "study": "12-LEAD ECG",
      "accession": "ECG-2026-260310",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. James Carter, MD",
      "facility": "NSU Memorial \u2014 ED",
      "priority": "STAT",
      "clinical": "Chest pressure, diaphoresis \u2014 ACS evaluation",
      "technique": "Standard 12-lead ECG.",
      "findings": "NSR at 88 bpm. ST depression 1.5mm in leads V3-V6 and II, aVF. T-wave inversion in V4-V6. No ST elevation. Normal intervals. No pathologic Q waves.",
      "impression": "1. ST depression and T-wave inversions in lateral leads \u2014 ischemic changes consistent with NSTEMI.\n2. No STEMI criteria.",
      "dictated": "02/26/2026 14:15",
      "verified": "02/26/2026 14:20"
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
      "vaccine": "COVID-19 Booster",
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
    },
    {
      "vaccine": "Prevnar 20",
      "date": "03/2024",
      "site": "Left deltoid IM",
      "lot": "PV20-900",
      "mfr": "Pfizer"
    }
  ],
  "familyHistory": [
    "Father: MI at 52, deceased at 68",
    "Mother: HTN, T2DM, alive at 88",
    "Brother: CABG at 62, alive at 70"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired restaurant owner"
    ],
    [
      "Marital",
      "Married 40 years"
    ],
    [
      "Tobacco",
      "Former \u2014 1 PPD x 20 yrs, quit 2010"
    ],
    [
      "Alcohol",
      "1-2 glasses wine with dinner"
    ],
    [
      "Exercise",
      "Sedentary \u2014 limited by knee OA and obesity"
    ],
    [
      "Advance Directive",
      "Full code; DPOA wife Maria"
    ]
  ],
  "meta": {
    "caseId": "nstemi-v1",
    "diagnosis": "Non-ST Elevation Myocardial Infarction (NSTEMI)",
    "acuity": 2,
    "presentation": "Chest Pain",
    "category": "cardiovascular"
  }
};
