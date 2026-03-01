// Virtual EMR Case: Diabetic Ketoacidosis (DKA)
// Variant: dka-v1 | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Rivera",
    "dob": "09/10/1996",
    "age": 29,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "None \u2014 uses urgent care",
    "pharmacy": "CVS \u2014 Hollywood, FL",
    "language": "English/Spanish",
    "race": "Hispanic",
    "address": "3120 Johnson St, Hollywood, FL",
    "phone": "(954) 555-8844",
    "email": "m.rivera96@email.com",
    "emergencyContact": {
      "name": "Elena Rivera (Mother)",
      "phone": "(954) 555-8860"
    },
    "mrn": "NSU-2025-31919"
  },
  "problems": [
    {
      "problem": "Type 1 Diabetes Mellitus",
      "icd": "E10.10",
      "onset": "2010",
      "status": "Active",
      "notes": "Poorly controlled; A1C 11.2; multiple DKA admissions; insulin non-adherence; no endocrinologist"
    },
    {
      "problem": "Depression",
      "icd": "F32.9",
      "onset": "2022",
      "status": "Active",
      "notes": "Untreated; declined medication"
    }
  ],
  "medications": [
    {
      "name": "Insulin Glargine 28 units QHS",
      "sig": "SubQ at bedtime",
      "prescriber": "Urgent Care MD",
      "start": "06/2024",
      "refills": 0,
      "status": "Active \u2014 often runs out"
    },
    {
      "name": "Insulin Lispro sliding scale",
      "sig": "SubQ before meals",
      "prescriber": "Urgent Care MD",
      "start": "06/2024",
      "refills": 0,
      "status": "Active \u2014 uses inconsistently"
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
      "bp": "102/64",
      "hr": 118,
      "rr": 32,
      "temp": "99.8\u00b0F",
      "spo2": "99%",
      "wt": "155 lbs",
      "ht": "5'9\"",
      "bmi": 22.9,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "108/68",
      "hr": 108,
      "rr": 28,
      "temp": "99.2\u00b0F",
      "spo2": "99%",
      "wt": "155 lbs",
      "ht": "5'9\"",
      "bmi": 22.9,
      "setting": "ED \u2014 2hr"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Nausea, vomiting, abdominal pain, confusion",
      "hpi": "29M T1DM with poor compliance. Ran out of insulin 3 days ago (couldn't afford refill). Progressive polyuria, polydipsia, then nausea, vomiting x 12 hours, diffuse abdominal pain. Roommate found him confused and lethargic this AM, called 911. Fruity breath noted by EMS. BG per EMS: 'HIGH' (>500). Kussmaul respirations.",
      "exam": "Lethargic but arousable, oriented to self only. Dehydrated \u2014 dry mucous membranes, poor skin turgor, sunken eyes. Fruity breath odor. Kussmaul breathing. Abdomen diffusely tender but soft, no rebound. Tachycardic.",
      "assessment": "1. DKA \u2014 insulin non-adherence, glucose >500, Kussmaul respirations, fruity breath\n2. Severe dehydration\n3. AMS \u2014 likely from acidosis and dehydration\n4. Social work referral for insulin access",
      "plan": "1. IV NS 1L bolus x 2 then 250-500 mL/hr\n2. Insulin drip: 0.1 units/kg/hr after K+ confirmed >3.3\n3. Q1h BMP and BG monitoring\n4. KCl 20-40 mEq in each liter (K+ will drop with insulin)\n5. Transition to subQ insulin when gap closes and tolerating PO\n6. Social work for medication assistance programs\n7. Endocrinology consult for chronic management\n8. A1C level"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "08:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 08:00",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-02260800",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "528",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "38",
              "unit": "mg/dL",
              "range": "7-20",
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
              "test": "Sodium",
              "value": "132",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "5.4",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "96",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "L"
            },
            {
              "test": "CO2",
              "value": "12",
              "unit": "mEq/L",
              "range": "22-29",
              "flag": "L"
            },
            {
              "test": "Anion Gap",
              "value": "28",
              "unit": "mEq/L",
              "range": "8-12",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "8.2",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "14.2",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "16.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "50.4",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "288",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "DKA LABS",
          "results": [
            {
              "test": "pH (VBG)",
              "value": "7.12",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "L"
            },
            {
              "test": "pCO2",
              "value": "18",
              "unit": "mmHg",
              "range": "35-45",
              "flag": "L"
            },
            {
              "test": "HCO3",
              "value": "8",
              "unit": "mEq/L",
              "range": "22-26",
              "flag": "L"
            },
            {
              "test": "Beta-Hydroxybutyrate",
              "value": "8.4",
              "unit": "mmol/L",
              "range": "<0.6",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "2.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "A1C",
              "value": "11.2",
              "unit": "%",
              "range": "<5.7",
              "flag": "H"
            },
            {
              "test": "Phosphorus",
              "value": "1.8",
              "unit": "mg/dL",
              "range": "2.5-4.5",
              "flag": "L"
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
    }
  ],
  "familyHistory": [
    "Mother: T2DM, alive at 54",
    "Father: Unknown \u2014 no contact",
    "Grandmother: T2DM, deceased at 68"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Delivery driver \u2014 gig work"
    ],
    [
      "Marital",
      "Single; lives with roommate"
    ],
    [
      "Tobacco",
      "1/2 PPD x 5 years"
    ],
    [
      "Alcohol",
      "Occasional"
    ],
    [
      "Drugs",
      "Marijuana \u2014 weekly"
    ],
    [
      "Insurance",
      "Medicaid; difficulty affording insulin copays"
    ],
    [
      "Advance Directive",
      "None"
    ]
  ],
  "meta": {
    "caseId": "dka-v1",
    "diagnosis": "Diabetic Ketoacidosis (DKA)",
    "acuity": 2,
    "presentation": "Altered Mental Status",
    "category": "neurologic"
  }
};
