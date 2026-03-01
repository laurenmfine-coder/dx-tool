// Virtual EMR Case: Ludwig Angina (Submandibular Space Infection)
// Variant: ludwigs-angina | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Carlos Gutierrez",
    "dob": "09/25/1978",
    "age": 47,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "None",
    "pharmacy": "Walgreens \u2014 Hollywood, FL",
    "language": "Spanish (interpreter needed)",
    "race": "Hispanic",
    "address": "1920 N 56th Ave, Hollywood, FL",
    "phone": "(954) 555-8812",
    "email": "",
    "emergencyContact": {
      "name": "Rosa Gutierrez (Wife)",
      "phone": "(954) 555-8828"
    },
    "mrn": "NSU-2025-36031"
  },
  "problems": [
    {
      "problem": "Type 2 Diabetes \u2014 Uncontrolled",
      "icd": "E11.65",
      "onset": "2018",
      "status": "Active",
      "notes": "A1C 10.8; non-compliant with meds; no regular care"
    },
    {
      "problem": "Dental Caries \u2014 Multiple",
      "icd": "K02.9",
      "onset": "",
      "status": "Active",
      "notes": "Poor dentition; multiple decayed teeth; no dental care x 5+ years"
    },
    {
      "problem": "Alcohol Use Disorder",
      "icd": "F10.20",
      "onset": "2015",
      "status": "Active",
      "notes": "6-8 beers daily; no prior treatment"
    }
  ],
  "medications": [
    {
      "name": "Metformin 500mg BID",
      "sig": "PO BID",
      "prescriber": "Urgent Care",
      "start": "08/2024",
      "refills": 0,
      "status": "Active \u2014 non-adherent"
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
      "bp": "138/82",
      "hr": 112,
      "rr": 24,
      "temp": "103.2\u00b0F",
      "spo2": "93%",
      "wt": "195 lbs",
      "ht": "5'8\"",
      "bmi": 29.7,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. Sarah Mitchell, MD",
      "cc": "Severe neck swelling, difficulty breathing, drooling",
      "hpi": "47M with uncontrolled DM and poor dentition presents via EMS with 3 days of progressive bilateral submandibular swelling following 1 week of left lower molar pain. Swelling now involves entire floor of mouth. Tongue pushed upward and posteriorly. Unable to swallow \u2014 drooling. Voice muffled. Mild stridor at rest. Sitting upright, refusing to lie down ('can't breathe flat'). Via interpreter: worsening over past 12 hours with fevers, rigors, and inability to eat.",
      "exam": "Toxic-appearing, sitting upright, drooling, stridor at rest. Bilateral submandibular swelling \u2014 brawny, indurated, exquisitely tender, board-like. Floor of mouth elevated. Tongue protrudes and pushed posteriorly. Neck: 'Bull neck' appearance, no discrete fluctuance (phlegmon). Crepitus palpable in left submandibular region (concerning for gas-forming infection). Airway compromised \u2014 stridor, tripod positioning.",
      "assessment": "1. LUDWIG ANGINA \u2014 bilateral submandibular space infection with airway compromise\n2. Likely odontogenic source (decayed L lower molar)\n3. Gas-forming infection (crepitus) \u2014 consider mixed flora including anaerobes\n4. AIRWAY EMERGENCY \u2014 prepare for surgical airway",
      "plan": "1. ANESTHESIA + ENT to bedside immediately for airway management\n2. Awake fiberoptic intubation vs surgical airway (cricothyrotomy kit at bedside)\n3. Ampicillin-sulbactam 3g IV + metronidazole 500mg IV\n4. Dexamethasone 10mg IV\n5. CT neck with contrast ONLY if airway is secured\n6. OMFS consult for dental source control\n7. Blood cultures, CBC, CMP, lactate\n8. ICU admission post-intubation\n9. NPO, IV fluids\n10. Check A1C, start insulin drip for glycemic control"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "13:00",
      "orderedBy": "Dr. Mitchell",
      "collected": "02/26/2026 13:10",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260330",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "24.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "388",
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
              "value": "382",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.6",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "28",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "A1C",
              "value": "10.8",
              "unit": "%",
              "range": "<5.7",
              "flag": "H"
            }
          ]
        },
        {
          "name": "INFECTION/CRITICAL",
          "results": [
            {
              "test": "Lactate",
              "value": "4.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "28.4",
              "unit": "mg/dL",
              "range": "<1.0",
              "flag": "H"
            },
            {
              "test": "Procalcitonin",
              "value": "8.2",
              "unit": "ng/mL",
              "range": "<0.5",
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
      "study": "CT NECK WITH IV CONTRAST",
      "accession": "IMG-2026-260330",
      "status": "FINAL",
      "orderedBy": "Dr. Mitchell",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Ludwig angina \u2014 extent of infection, airway patency",
      "technique": "CT neck with IV contrast (performed post-intubation).",
      "findings": "Diffuse cellulitis and phlegmonous change involving bilateral submandibular, sublingual, and submental spaces. No discrete drainable abscess. Gas foci within left submandibular space. Floor of mouth markedly elevated with posterior tongue displacement. Airway secured (ETT in situ). Periapical lucency at left second and third mandibular molars \u2014 odontogenic source. No extension to parapharyngeal or retropharyngeal spaces. No mediastinal extension.",
      "impression": "1. Ludwig angina with gas-forming infection \u2014 bilateral submandibular/sublingual/submental involvement.\n2. Odontogenic source: left lower molars.\n3. No discrete abscess \u2014 phlegmon.\n4. No deep space or mediastinal extension currently.",
      "dictated": "02/26/2026 14:00",
      "verified": "02/26/2026 14:15"
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
    }
  ],
  "familyHistory": [
    "Limited history available \u2014 patient reports parents both had diabetes"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Day laborer \u2014 construction"
    ],
    [
      "Marital",
      "Married; 3 children"
    ],
    [
      "Tobacco",
      "1 PPD x 20 years"
    ],
    [
      "Alcohol",
      "6-8 beers daily"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Insurance",
      "Medicaid; no dental coverage"
    ],
    [
      "Language",
      "Spanish primary; requires interpreter"
    ]
  ],
  "meta": {
    "caseId": "ludwigs-angina",
    "diagnosis": "Ludwig Angina (Submandibular Space Infection)",
    "acuity": 1,
    "presentation": "ENT / Airway Emergency",
    "category": "ent"
  }
};
