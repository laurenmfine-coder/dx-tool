// Virtual EMR Case: Acute Necrotizing Pancreatitis (Gallstone-Induced)
// Variant: severe-pancreatitis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Louise Anderson",
    "dob": "01/22/1968",
    "age": 58,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Michael Torres, MD",
    "pharmacy": "Walgreens \u2014 Coral Springs, FL",
    "language": "English",
    "race": "White",
    "address": "3840 NW 84th Ave, Coral Springs, FL",
    "phone": "(954) 555-6644",
    "email": "l.anderson68@email.com",
    "emergencyContact": {
      "name": "Brian Anderson (Husband)",
      "phone": "(954) 555-6660"
    },
    "mrn": "NSU-2025-66258"
  },
  "problems": [
    {
      "problem": "Cholelithiasis \u2014 Known",
      "icd": "K80.20",
      "onset": "2024",
      "status": "Active",
      "notes": "Multiple gallstones on US 2024; declined elective cholecystectomy"
    },
    {
      "problem": "Obesity",
      "icd": "E66.01",
      "onset": "2010",
      "status": "Active",
      "notes": "BMI 38"
    },
    {
      "problem": "Type 2 Diabetes",
      "icd": "E11.9",
      "onset": "2015",
      "status": "Active",
      "notes": "A1C 8.0; on metformin + empagliflozin"
    },
    {
      "problem": "Hypertriglyceridemia",
      "icd": "E78.1",
      "onset": "2018",
      "status": "Active",
      "notes": "TG 280 last check; on fenofibrate"
    }
  ],
  "medications": [
    {
      "name": "Metformin 1000mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Torres",
      "start": "06/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Empagliflozin 25mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Torres",
      "start": "01/2023",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Fenofibrate 160mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Torres",
      "start": "06/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Torres",
      "start": "06/2016",
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
      "bp": "98/62",
      "hr": 112,
      "rr": 24,
      "temp": "101.4\u00b0F",
      "spo2": "93%",
      "wt": "240 lbs",
      "ht": "5'6\"",
      "bmi": 38.7,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "88/54",
      "hr": 118,
      "rr": 26,
      "temp": "101.8\u00b0F",
      "spo2": "91%",
      "wt": "240 lbs",
      "ht": "5'6\"",
      "bmi": 38.7,
      "setting": "ED \u2014 4hr"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Severe epigastric pain radiating to back x 12 hours",
      "hpi": "58F with known gallstones (declined surgery) presents with 12 hours of severe epigastric pain radiating straight to back, 10/10, constant. Onset after fatty meal last evening. Persistent nausea with bilious vomiting x 6 episodes. Unable to find comfortable position. Progressive dyspnea over past 4 hours. Prior episode of 'gallbladder attack' resolved spontaneously; this is much worse. BISAP score: 3 (BUN >25, impaired mentation, SIRS present) \u2014 predicted severe pancreatitis.",
      "exam": "Ill-appearing, diaphoretic, tachypneic. Abdomen: Severe epigastric tenderness with guarding. Distended. Diminished bowel sounds. Cullen sign absent. Grey Turner sign absent (early). Lungs: Decreased breath sounds at bilateral bases (worse left) with dullness to percussion (pleural effusions). Moderate respiratory distress requiring supplemental O2.",
      "assessment": "1. Acute necrotizing pancreatitis \u2014 gallstone-induced. BISAP 3 (severe)\n2. Respiratory failure developing \u2014 bilateral pleural effusions, likely third-spacing\n3. Organ dysfunction: renal (Cr rising), respiratory (hypoxia), hemodynamic (hypotension)\n4. Ranson criteria at admission: 4 (age >55, WBC >16K, glucose >200, LDH >350)",
      "plan": "1. AGGRESSIVE IV fluid resuscitation: LR 250-500 mL/hr (goal UOP >0.5 mL/kg/hr)\n2. NPO; NGT if intractable vomiting\n3. Pain: hydromorphone 0.5mg IV q3h PRN (superior to morphine in pancreatitis)\n4. STAT labs: lipase, CBC, CMP, calcium, LDH, triglycerides, lactate, ABG\n5. CT abdomen with IV contrast \u2014 staging\n6. If gallstone impacted: ERCP consult\n7. ICU admission \u2014 risk of organ failure\n8. Surgical consult for cholecystectomy after recovery\n9. Monitor for complications: infected necrosis, pseudocyst, ARDS"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "07:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 07:10",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260421",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "PANCREATIC",
          "results": [
            {
              "test": "Lipase",
              "value": "4,820",
              "unit": "U/L",
              "range": "0-160",
              "flag": "H"
            },
            {
              "test": "Amylase",
              "value": "1,242",
              "unit": "U/L",
              "range": "30-110",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "18.8",
              "unit": "K/uL",
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
              "value": "48.2",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "H"
            },
            {
              "test": "Platelets",
              "value": "188",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "METABOLIC",
          "results": [
            {
              "test": "Glucose",
              "value": "242",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "34",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.8",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "7.2",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "L"
            },
            {
              "test": "LDH",
              "value": "488",
              "unit": "U/L",
              "range": "140-280",
              "flag": "H"
            },
            {
              "test": "Triglycerides",
              "value": "312",
              "unit": "mg/dL",
              "range": "<150",
              "flag": "H"
            },
            {
              "test": "AST",
              "value": "188",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "224",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "Alk Phos",
              "value": "268",
              "unit": "U/L",
              "range": "44-147",
              "flag": "H"
            },
            {
              "test": "Total Bilirubin",
              "value": "3.8",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "3.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
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
      "study": "CT ABDOMEN AND PELVIS WITH IV CONTRAST",
      "accession": "IMG-2026-260421",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Severe pancreatitis \u2014 staging, complications",
      "technique": "CT abdomen/pelvis with IV contrast.",
      "findings": "Pancreas: Diffusely enlarged and edematous. Areas of non-enhancement involving >30% of pancreatic body and tail \u2014 consistent with necrosis (CT Severity Index: 8/10). Extensive peripancreatic fat stranding and fluid collections tracking along bilateral paracolic gutters. No gas within collections (no infected necrosis currently).\n\nGallbladder: Distended with multiple gallstones. CBD dilated to 10 mm with possible distal CBD stone. Bilateral moderate pleural effusions (L > R).",
      "impression": "1. Acute necrotizing pancreatitis \u2014 >30% necrosis (CTSI 8/10).\n2. CBD dilation with possible impacted stone \u2014 ERCP consideration.\n3. Bilateral pleural effusions.\n4. High risk for complications \u2014 ICU recommended.",
      "dictated": "02/26/2026 08:00",
      "verified": "02/26/2026 08:20"
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
    }
  ],
  "familyHistory": [
    "Father: Gallstones, pancreatitis at 62; alive at 84",
    "Mother: T2DM, alive at 82",
    "Sister: Cholelithiasis, s/p cholecystectomy; alive at 55"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Office manager"
    ],
    [
      "Marital",
      "Married 30 years"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social \u2014 1-2 glasses wine/week"
    ],
    [
      "Exercise",
      "Limited by obesity"
    ],
    [
      "Advance Directive",
      "Full code; DPOA husband Brian"
    ]
  ],
  "meta": {
    "caseId": "severe-pancreatitis",
    "diagnosis": "Acute Necrotizing Pancreatitis (Gallstone-Induced)",
    "acuity": 2,
    "presentation": "GI Emergency",
    "category": "gastrointestinal"
  }
};
