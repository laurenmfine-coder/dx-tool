// Virtual EMR Case: Ruptured Abdominal Aortic Aneurysm
// Variant: aaa-v1 | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Harold Jenkins",
    "dob": "11/05/1951",
    "age": 74,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicare",
    "pcp": "Dr. Robert Kim, MD",
    "pharmacy": "Publix \u2014 Plantation, FL",
    "language": "English",
    "race": "White",
    "address": "4822 NW 2nd Ct, Plantation, FL",
    "phone": "(954) 555-7801",
    "email": "h.jenkins51@email.com",
    "emergencyContact": {
      "name": "Carol Jenkins (Wife)",
      "phone": "(954) 555-7815"
    },
    "mrn": "NSU-2025-86272"
  },
  "problems": [
    {
      "problem": "Known AAA \u2014 5.2 cm",
      "icd": "I71.4",
      "onset": "2023",
      "status": "Active",
      "notes": "Infrarenal; surveillance every 6 months; threshold for repair 5.5 cm"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2001",
      "status": "Active",
      "notes": "On lisinopril/amlodipine"
    },
    {
      "problem": "PAD",
      "icd": "I73.9",
      "onset": "2019",
      "status": "Active",
      "notes": "ABI 0.68; on cilostazol"
    },
    {
      "problem": "CAD s/p PCI",
      "icd": "I25.10",
      "onset": "2010",
      "status": "Active",
      "notes": "LAD DES 2010; on DAPT"
    },
    {
      "problem": "Former smoker \u2014 40 pack-year",
      "icd": "Z87.891",
      "onset": "1970",
      "status": "Active",
      "notes": "Quit 2010"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 20mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Kim",
      "start": "03/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metoprolol Succinate 50mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Kim",
      "start": "01/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS",
      "sig": "PO at bedtime",
      "prescriber": "Dr. Kim",
      "start": "08/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Kim",
      "start": "01/2010",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Clopidogrel 75mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Kim",
      "start": "05/2010",
      "refills": 5,
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
      "bp": "88/52",
      "hr": 118,
      "rr": 24,
      "temp": "97.2\u00b0F",
      "spo2": "96%",
      "wt": "185 lbs",
      "ht": "5'11\"",
      "bmi": 25.8,
      "setting": "ED Trauma Bay"
    },
    {
      "date": "02/26/2026",
      "bp": "76/44",
      "hr": 128,
      "rr": 28,
      "temp": "96.8\u00b0F",
      "spo2": "94%",
      "wt": "185 lbs",
      "ht": "5'11\"",
      "bmi": 25.8,
      "setting": "ED \u2014 20min"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED \u2014 Trauma Activation",
      "provider": "Dr. Sarah Mitchell, MD",
      "cc": "Sudden severe abdominal/back pain, near-syncope",
      "hpi": "74M with known 5.2cm AAA presents via EMS with sudden tearing abdominal/back pain x 45min while at rest. Near-syncope. EMS: GCS 14, BP 82/48, HR 122, diaphoretic. 1L NS bolus en route with minimal improvement. Wife brought med list.",
      "exam": "Diaphoretic, pale, confused. Abdomen distended, pulsatile mass palpable. Involuntary guarding. Cold/mottled extremities below knees. Femoral pulses weak. Pedal pulses absent. Left flank ecchymosis developing.",
      "assessment": "1. RUPTURED AAA \u2014 known aneurysm with acute expansion, hemodynamic instability, pulsatile mass\n2. Hemorrhagic shock Class III-IV\n3. Permissive hypotension initiated",
      "plan": "1. EMERGENT vascular surgery \u2014 OR notification\n2. Massive transfusion protocol: 4U pRBC, 2U FFP, 1 plt pack\n3. Two 16G IVs wide open\n4. T&S, CBC, CMP, coags, lactate\n5. Target SBP 80-90 until OR\n6. Foley for UOP monitoring"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "15:00",
      "orderedBy": "Dr. Mitchell",
      "collected": "02/26/2026 15:00",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-02261500",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "18.2",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "9.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "27.8",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "142",
              "unit": "K/uL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            {
              "test": "PT",
              "value": "14.8",
              "unit": "sec",
              "range": "11.0-13.5",
              "flag": "H"
            },
            {
              "test": "INR",
              "value": "1.3",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "PTT",
              "value": "38",
              "unit": "sec",
              "range": "25-35",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CRITICAL LABS",
          "results": [
            {
              "test": "Lactate",
              "value": "6.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.8",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "BEDSIDE ULTRASOUND \u2014 eFAST",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. Mitchell",
      "readBy": "Dr. Mitchell, MD",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Known AAA, hypotension, suspected rupture",
      "technique": "Bedside eFAST with aortic views.",
      "findings": "Infrarenal AAA ~6.8 cm (prior 5.2 cm). Irregular contour suggesting contained rupture. Large left retroperitoneal hypoechoic collection. Trace free fluid in Morison pouch.",
      "impression": "1. Ruptured AAA ~6.8 cm with retroperitoneal hematoma.\n2. EMERGENT surgical intervention required.",
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
    "Father: AAA (died from rupture at 68)",
    "Mother: Stroke at 82",
    "Brother: AAA 5.0 cm under surveillance"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired plumber"
    ],
    [
      "Tobacco",
      "Former \u2014 1 PPD x 40 yrs, quit 2010"
    ],
    [
      "Alcohol",
      "1-2 beers/week"
    ],
    [
      "Advance Directive",
      "Full code; DPOA wife Carol"
    ]
  ],
  "meta": {
    "caseId": "aaa-v1",
    "diagnosis": "Ruptured Abdominal Aortic Aneurysm",
    "acuity": 1,
    "presentation": "Abdominal Pain",
    "category": "gastrointestinal"
  }
};
