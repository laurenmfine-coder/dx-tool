// Virtual EMR Case: Exertional Heat Stroke
// Variant: heat-stroke | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "DeShawn Harris",
    "dob": "08/02/2003",
    "age": 22,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "University health plan",
    "pcp": "Student Health Center",
    "pharmacy": "CVS \u2014 Riverside, FL",
    "language": "English",
    "race": "Black",
    "address": "University Student Housing, 3200 College Ave, Riverside, FL",
    "phone": "(954) 555-4412",
    "email": "d.harris03@email.com",
    "emergencyContact": {
      "name": "Angela Harris (Mother)",
      "phone": "(404) 555-8822"
    },
    "mrn": "RDX-2025-95737"
  },
  "problems": [
    {
      "problem": "No Prior Medical History",
      "icd": "Z87.89",
      "onset": "",
      "status": "Active",
      "notes": "Healthy college athlete; cleared for sports"
    }
  ],
  "medications": [
    {
      "name": "None",
      "sig": "",
      "prescriber": "",
      "start": "",
      "refills": 0,
      "status": ""
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
      "bp": "92/58",
      "hr": 142,
      "rr": 28,
      "temp": "106.8\u00b0F (rectal)",
      "spo2": "96%",
      "wt": "205 lbs",
      "ht": "6'1\"",
      "bmi": 27.1,
      "setting": "ED \u2014 Resus"
    },
    {
      "date": "02/26/2026",
      "bp": "108/68",
      "hr": 112,
      "rr": 20,
      "temp": "102.4\u00b0F (rectal)",
      "spo2": "98%",
      "wt": "205 lbs",
      "ht": "6'1\"",
      "bmi": 27.1,
      "setting": "ED \u2014 Post-Cooling 30min"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. Sarah Mitchell, MD",
      "cc": "Collapse during outdoor football practice, altered mental status, T 106.8\u00b0F",
      "hpi": "22M college football player collapsed during outdoor conditioning drill in South Florida heat (heat index 105\u00b0F). Teammates noted he was stumbling and confused before collapsing. ATC on scene: GCS 10 (E2V3M5), rectal temp 106.8\u00b0F. Cold water immersion initiated on field. EMS called. No seizure activity witnessed. Was wearing full pads. Had been drinking water but may not have been adequate. No performance-enhancing drug use per teammates.",
      "exam": "Obtunded, GCS 12 (improved from 10). Hot, dry skin (anhidrosis \u2014 severe sign). Flushed. Tachycardic, hypotensive. Pupils equal and reactive. No nuchal rigidity. No focal neurologic deficits. Muscle tone slightly increased. No rhabdomyolysis-dark urine yet.",
      "assessment": "1. EXERTIONAL HEAT STROKE \u2014 core temp >104\u00b0F with AMS during exertion\n2. Hemodynamic instability \u2014 likely distributive shock from vasodilation\n3. Risk of rhabdomyolysis, DIC, hepatic failure, renal failure\n4. Goal: core temp <102\u00b0F within 30 minutes",
      "plan": "1. AGGRESSIVE COOLING: cold water immersion continued \u2192 ice packs to axillae/groin/neck \u2192 cold IV NS\n2. Rectal temperature monitoring continuous\n3. IV NS 2L bolus then 500 mL/hr\n4. Labs: CBC, CMP, CPK, coags, LFTs, lactate, UA\n5. Foley \u2014 monitor UOP (target >0.5 mL/kg/hr)\n6. Watch for rhabdomyolysis (CPK), DIC (coags), hepatic failure (LFTs)\n7. ICU admission\n8. NO antipyretics (acetaminophen/NSAIDs ineffective in heat stroke)\n9. Benzodiazepines if shivering impedes cooling"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "14:00",
      "orderedBy": "Dr. Mitchell",
      "collected": "02/26/2026 14:05",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-260360",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
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
              "value": "16.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "128",
              "unit": "K/uL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "METABOLIC",
          "results": [
            {
              "test": "Sodium",
              "value": "148",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "H"
            },
            {
              "test": "Potassium",
              "value": "5.4",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "2.2",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "62",
              "unit": "mg/dL",
              "range": "70-100",
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
              "value": "182",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CRITICAL",
          "results": [
            {
              "test": "CPK",
              "value": "12,400",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "8.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "PT",
              "value": "16.2",
              "unit": "sec",
              "range": "11.0-13.5",
              "flag": "H"
            },
            {
              "test": "INR",
              "value": "1.4",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "Fibrinogen",
              "value": "148",
              "unit": "mg/dL",
              "range": "200-400",
              "flag": "L"
            },
            {
              "test": "UA \u2014 Myoglobin",
              "value": "Positive",
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
    }
  ],
  "familyHistory": [
    "Father: HTN, alive at 50",
    "Mother: Healthy, alive at 48",
    "No family history of malignant hyperthermia or exertional illness"
  ],
  "socialHistory": [
    [
      "Occupation",
      "College senior \u2014 pre-med; scholarship football player (defensive end)"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social on weekends during off-season"
    ],
    [
      "Drugs",
      "Denies PEDs; denies stimulants"
    ],
    [
      "Supplements",
      "Creatine, protein powder, pre-workout (contains caffeine)"
    ],
    [
      "Exercise",
      "Football practice 5-6 days/week + conditioning"
    ]
  ],
  "meta": {
    "caseId": "heat-stroke",
    "diagnosis": "Exertional Heat Stroke",
    "acuity": 1,
    "presentation": "Environmental Emergency",
    "category": "environmental"
  }
};
