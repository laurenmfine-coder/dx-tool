// Virtual EMR Case: Eclampsia
// Variant: eclampsia | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Maria Santos-Reyes",
    "dob": "01/20/2000",
    "age": 26,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Medicaid",
    "pcp": "OB \u2014 Dr. Angela Kim, MD",
    "pharmacy": "CVS \u2014 Hollywood, FL",
    "language": "Spanish/English",
    "race": "Hispanic",
    "address": "2480 Johnson St, Hollywood, FL",
    "phone": "(954) 555-6680",
    "email": "m.santos00@email.com",
    "emergencyContact": {
      "name": "Carlos Reyes (Partner)",
      "phone": "(954) 555-6696"
    },
    "mrn": "RDX-2025-30966"
  },
  "problems": [
    {
      "problem": "Preeclampsia with Severe Features",
      "icd": "O14.10",
      "onset": "02/2026",
      "status": "Active",
      "notes": "Diagnosed at 35 weeks; BP 168/108; proteinuria; on labetalol/magnesium"
    },
    {
      "problem": "G1P0 at 36 weeks",
      "icd": "Z3A.36",
      "onset": "2025",
      "status": "Active",
      "notes": "Uncomplicated until 35 weeks"
    }
  ],
  "medications": [
    {
      "name": "Labetalol 200mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Kim",
      "start": "02/2026",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Prenatal vitamins",
      "sig": "PO daily",
      "prescriber": "Dr. Kim",
      "start": "06/2025",
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
      "bp": "192/118",
      "hr": 108,
      "rr": 22,
      "temp": "99.0\u00b0F",
      "spo2": "96%",
      "wt": "168 lbs",
      "ht": "5'3\"",
      "bmi": 29.8,
      "setting": "L&D"
    },
    {
      "date": "02/26/2026",
      "bp": "172/102",
      "hr": 98,
      "rr": 18,
      "temp": "98.8\u00b0F",
      "spo2": "98%",
      "wt": "168 lbs",
      "ht": "5'3\"",
      "bmi": 29.8,
      "setting": "Post-Seizure 20min"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "L&D \u2014 Eclampsia Alert",
      "provider": "Dr. Angela Kim, MD (OB)",
      "cc": "Seizure at 36 weeks gestation, found by partner",
      "hpi": "26F G1P0 at 36 weeks with preeclampsia on labetalol presents after witnessed GTC seizure at home x 2 min. Partner found her seizing on kitchen floor. Postictal on arrival. Known preeclampsia diagnosed 1 week ago with BP 168/108, 3+ proteinuria. Headache and visual changes (seeing spots) for 2 days. RUQ pain today.",
      "exam": "Postictal, gradually becoming responsive. BP 192/118. Fundal height appropriate for 36 weeks. FHR 148 with moderate variability. RUQ tender. Bilateral 3+ edema. Hyperreflexia with clonus (4 beats).",
      "assessment": "1. ECLAMPSIA \u2014 seizure in setting of severe preeclampsia\n2. HELLP syndrome must be ruled out (RUQ pain, elevated LFTs pending)\n3. Fetal reassessment needed",
      "plan": "1. MgSO4 6g IV loading dose \u2192 2g/hr maintenance\n2. Labetalol 20mg IV push for acute BP control\n3. STAT labs: CBC, CMP, LDH, uric acid, fibrinogen, peripheral smear\n4. Continuous fetal monitoring\n5. Prepare for emergent cesarean delivery\n6. Betamethasone (already received at 35wk)\n7. NICU standby\n8. Seizure precautions \u2014 padded rails, suction at bedside"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "16:00",
      "orderedBy": "Dr. Kim",
      "collected": "02/26/2026 16:00",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-02261600",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "ECLAMPSIA LABS",
          "results": [
            {
              "test": "Platelets",
              "value": "88",
              "unit": "K/uL",
              "range": "150-400",
              "flag": "L"
            },
            {
              "test": "AST",
              "value": "248",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "312",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "LDH",
              "value": "842",
              "unit": "U/L",
              "range": "140-280",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": "H"
            },
            {
              "test": "Uric Acid",
              "value": "8.8",
              "unit": "mg/dL",
              "range": "2.4-6.0",
              "flag": "H"
            },
            {
              "test": "Fibrinogen",
              "value": "182",
              "unit": "mg/dL",
              "range": "200-400",
              "flag": "L"
            },
            {
              "test": "Haptoglobin",
              "value": "<10",
              "unit": "mg/dL",
              "range": "30-200",
              "flag": "L"
            },
            {
              "test": "Protein/Creatinine Ratio",
              "value": "4.8",
              "unit": "",
              "range": "<0.3",
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
    }
  ],
  "familyHistory": [
    "Mother: Healthy",
    "Father: Healthy"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Unknown"
    ],
    [
      "Tobacco",
      "Denies"
    ]
  ],
  "meta": {
    "caseId": "eclampsia",
    "diagnosis": "Eclampsia",
    "acuity": 1,
    "presentation": "Obstetric Emergency",
    "category": "obstetric"
  }
};
