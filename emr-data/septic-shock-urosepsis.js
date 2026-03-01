// Virtual EMR Case: Septic Shock Secondary to Urosepsis
// Variant: septic-shock-urosepsis | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Gertrude Palmer",
    "dob": "04/10/1940",
    "age": 85,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Medicare + Medicaid",
    "pcp": "Dr. Sharon Lee, MD",
    "pharmacy": "CVS \u2014 Deerfield Beach, FL",
    "language": "English",
    "race": "White",
    "address": "Sunrise Senior Living, 450 NE 2nd Ave, Deerfield Beach, FL",
    "phone": "(954) 555-3388",
    "email": "",
    "emergencyContact": {
      "name": "Nursing Facility \u2014 Charge Nurse",
      "phone": "(954) 555-3400"
    },
    "mrn": "RDX-2025-79788"
  },
  "problems": [
    {
      "problem": "Recurrent UTIs",
      "icd": "N39.0",
      "onset": "2023",
      "status": "Active",
      "notes": "3 UTIs in past year; E. coli predominant; prior resistance to fluoroquinolones"
    },
    {
      "problem": "Indwelling Foley Catheter",
      "icd": "Z96.0",
      "onset": "2025",
      "status": "Active",
      "notes": "Placed 01/2025 for urinary retention secondary to neurogenic bladder"
    },
    {
      "problem": "Dementia \u2014 Moderate (Alzheimer type)",
      "icd": "G30.1",
      "onset": "2020",
      "status": "Active",
      "notes": "MMSE 16/30; dependent in ADLs; resides in memory care unit"
    },
    {
      "problem": "Type 2 Diabetes",
      "icd": "E11.9",
      "onset": "2005",
      "status": "Active",
      "notes": "A1C 7.8; on glipizide"
    },
    {
      "problem": "CKD Stage 3b",
      "icd": "N18.32",
      "onset": "2021",
      "status": "Active",
      "notes": "eGFR 36; baseline Cr 1.4"
    }
  ],
  "medications": [
    {
      "name": "Glipizide 5mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Lee",
      "start": "06/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Donepezil 10mg QHS",
      "sig": "PO at bedtime",
      "prescriber": "Dr. Lee",
      "start": "03/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Lee",
      "start": "06/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Lee",
      "start": "01/2018",
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
      "bp": "74/42",
      "hr": 118,
      "rr": 26,
      "temp": "102.8\u00b0F",
      "spo2": "92%",
      "wt": "125 lbs",
      "ht": "5'2\"",
      "bmi": 22.9,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "82/52",
      "hr": 108,
      "rr": 22,
      "temp": "101.4\u00b0F",
      "spo2": "94%",
      "wt": "125 lbs",
      "ht": "5'2\"",
      "bmi": 22.9,
      "setting": "ED \u2014 Post-Fluids 1hr"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Found altered, febrile, hypotensive at nursing facility",
      "hpi": "85F with indwelling Foley and recurrent UTIs sent from nursing facility after found more confused than baseline, febrile to 103\u00b0F, and hypotensive. Nurse reports she was less interactive since yesterday and refused meals. Foley draining cloudy, foul-smelling urine. No cough or respiratory symptoms. No diarrhea. Last UTI 6 weeks ago treated with nitrofurantoin.",
      "exam": "Lethargic, oriented to name only (baseline: oriented to name and place). Febrile, tachycardic, hypotensive. Skin warm and flushed (warm shock). Lungs CTAB. Abdomen: Mild suprapubic tenderness. Foley in place \u2014 cloudy, dark urine with sediment. CVA tenderness bilateral (subtle). Skin: No cellulitis, no pressure ulcers.",
      "assessment": "1. SEPTIC SHOCK \u2014 urosepsis. qSOFA 3/3, lactate elevated, refractory hypotension\n2. Source: catheter-associated UTI with likely bacteremia\n3. SEP-1 bundle: antibiotics within 1 hour, 30 mL/kg crystalloid, lactate, blood cultures",
      "plan": "1. Blood cultures x 2 sets BEFORE antibiotics\n2. Meropenem 1g IV (prior FQ-resistant E. coli; adjust per cultures)\n3. IV NS 30 mL/kg bolus (30 mL/kg = ~1.7L)\n4. If MAP <65 after fluids \u2192 norepinephrine drip\n5. Lactate q4h until normalizing\n6. Remove Foley \u2192 new catheter with specimen for UA/culture\n7. CBC, CMP, coags, procalcitonin\n8. ICU admission for vasopressors\n9. Contact family/POA for goals of care discussion\n10. Renal dose adjustments for CKD"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "08:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 08:05",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-260401",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "22.4",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "10.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "98",
              "unit": "K/uL",
              "range": "150-400",
              "flag": "L"
            },
            {
              "test": "Bands",
              "value": "18",
              "unit": "%",
              "range": "0-5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "METABOLIC",
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
              "value": "2.8",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "52",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
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
            }
          ]
        },
        {
          "name": "UA",
          "results": [
            {
              "test": "WBC",
              "value": ">100",
              "unit": "/hpf",
              "range": "0-5",
              "flag": "H"
            },
            {
              "test": "Bacteria",
              "value": "Many",
              "unit": "",
              "range": "None",
              "flag": "H"
            },
            {
              "test": "Nitrite",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Leuk Esterase",
              "value": "3+",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
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
    "Daughter reports: Mother had HTN and DM; father had CAD"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired seamstress"
    ],
    [
      "Marital",
      "Widowed; husband died 2019"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "None"
    ],
    [
      "Residence",
      "Memory care unit at Sunrise Senior Living since 2023"
    ],
    [
      "Advance Directive",
      "DNR/DNI per daughter (POA); comfort-focused if arrest \u2014 but treat reversible conditions; daughter is healthcare proxy"
    ]
  ],
  "meta": {
    "caseId": "septic-shock-urosepsis",
    "diagnosis": "Septic Shock Secondary to Urosepsis",
    "acuity": 1,
    "presentation": "Fever / Sepsis",
    "category": "infectious"
  }
};
