// Virtual EMR Case: Severe Accidental Hypothermia
// Variant: severe-hypothermia | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Henry Mitchell",
    "dob": "07/22/1948",
    "age": 77,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicare",
    "pcp": "Dr. Thomas Kelly, MD",
    "pharmacy": "Walgreens \u2014 Pompano Beach, FL",
    "language": "English",
    "race": "White",
    "address": "Unknown \u2014 undomiciled",
    "phone": "None",
    "email": "",
    "emergencyContact": {
      "name": "None identified",
      "phone": ""
    },
    "mrn": "NSU-2025-29728"
  },
  "problems": [
    {
      "problem": "Alcohol Use Disorder \u2014 Severe",
      "icd": "F10.20",
      "onset": "",
      "status": "Active",
      "notes": "Long-standing; homeless x 5+ years"
    },
    {
      "problem": "Chronic Malnutrition",
      "icd": "E46",
      "onset": "",
      "status": "Active",
      "notes": "BMI 17; appears cachectic"
    },
    {
      "problem": "Suspected Hypothyroidism",
      "icd": "E03.9",
      "onset": "",
      "status": "Active",
      "notes": "No prior records available; clinically suspected given hypothermia and appearance"
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
      "bp": "78/48",
      "hr": 38,
      "rr": 8,
      "temp": "84.2\u00b0F (rectal) / 29\u00b0C",
      "spo2": "88%",
      "wt": "132 lbs",
      "ht": "5'10\"",
      "bmi": 18.9,
      "setting": "ED \u2014 Resus"
    },
    {
      "date": "02/26/2026",
      "bp": "92/58",
      "hr": 52,
      "rr": 12,
      "temp": "90.1\u00b0F / 32.3\u00b0C",
      "spo2": "94%",
      "wt": "132 lbs",
      "ht": "5'10\"",
      "bmi": 18.9,
      "setting": "ED \u2014 Post-Rewarming 2hr"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. Mitchell",
      "cc": "Found unresponsive outdoors, core temp 29\u00b0C (84.2\u00b0F)",
      "hpi": "77M found by police unresponsive on park bench during cold snap (ambient 42\u00b0F). No ID. Empty alcohol bottles nearby. GCS 7 (E1V2M4). Rectal temp 29\u00b0C/84.2\u00b0F \u2014 severe hypothermia. EMS: passive rewarming started, careful transport (avoid jostling \u2014 risk of VF). No visible trauma. Unknown down time.",
      "exam": "Unresponsive to voice, minimal response to pain. Cold to touch throughout. Pupils sluggish but equal. Bradycardic, irregular (Osborn J-waves on monitor). Breath sounds diminished bilaterally. Abdomen scaphoid. Skin: No trauma, frostbite on fingers and toes (1st-2nd degree). Cachectic.",
      "assessment": "1. SEVERE HYPOTHERMIA \u2014 core 29\u00b0C (Class III). At risk for VF\n2. Alcohol-related exposure\n3. Rule out other causes of AMS: hypoglycemia, head trauma, sepsis\n4. 'Not dead until warm and dead' \u2014 aggressive rewarming",
      "plan": "1. Active external rewarming: Bair Hugger, warm blankets\n2. Active internal rewarming: warm IV NS (40\u00b0C), warm humidified O2\n3. If VF occurs: single defib attempt, hold ACLS meds until core >30\u00b0C\n4. Avoid rough handling (cardiac irritability)\n5. Warm bladder lavage via Foley\n6. Labs: CBC, CMP, coags, lactate, TSH, cortisol, EtOH level, tox screen\n7. CT head to rule out trauma\n8. Continuous core temp monitoring\n9. Target rewarming rate 1-2\u00b0C/hr\n10. ICU admission"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "06:00",
      "orderedBy": "Dr. Mitchell",
      "collected": "02/26/2026 06:05",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260370",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "3.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "L"
            },
            {
              "test": "Hemoglobin",
              "value": "10.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "88",
              "unit": "K/uL",
              "range": "150-400",
              "flag": "L"
            },
            {
              "test": "MCV",
              "value": "108",
              "unit": "fL",
              "range": "80-100",
              "flag": "H"
            }
          ]
        },
        {
          "name": "METABOLIC",
          "results": [
            {
              "test": "Glucose",
              "value": "48",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "L"
            },
            {
              "test": "Sodium",
              "value": "128",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "3.0",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": "L"
            },
            {
              "test": "Creatinine",
              "value": "2.4",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Magnesium",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "1.7-2.2",
              "flag": "L"
            }
          ]
        },
        {
          "name": "TOXICOLOGY/OTHER",
          "results": [
            {
              "test": "EtOH Level",
              "value": "282",
              "unit": "mg/dL",
              "range": "0",
              "flag": "H"
            },
            {
              "test": "TSH",
              "value": "18.4",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "5.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "PT",
              "value": "18.8",
              "unit": "sec",
              "range": "11.0-13.5",
              "flag": "H"
            },
            {
              "test": "INR",
              "value": "1.6",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "Cortisol",
              "value": "22",
              "unit": "mcg/dL",
              "range": "6-23",
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
      "accession": "ECG-2026-260370",
      "status": "FINAL",
      "orderedBy": "Dr. Mitchell",
      "readBy": "Dr. Mitchell, MD",
      "facility": "NSU Memorial \u2014 ED",
      "priority": "STAT",
      "clinical": "Severe hypothermia \u2014 cardiac monitoring",
      "technique": "12-lead ECG.",
      "findings": "Sinus bradycardia at 38 bpm. Osborn (J) waves present in inferior and lateral leads \u2014 pathognomonic for hypothermia. Prolonged QTc (520 ms). First-degree AV block (PR 240 ms). Shivering artifact.",
      "impression": "1. Osborn J-waves \u2014 consistent with severe hypothermia.\n2. Prolonged QTc \u2014 hypothermia-related; risk of torsades.\n3. Sinus bradycardia with 1st degree AV block.\n4. Repeat ECG during rewarming.",
      "dictated": "02/26/2026 06:15",
      "verified": "02/26/2026 06:20"
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
    "Unknown \u2014 patient unable to provide history; no records in system"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Unknown \u2014 undomiciled"
    ],
    [
      "Marital",
      "Unknown"
    ],
    [
      "Tobacco",
      "Cigarette butts in pockets"
    ],
    [
      "Alcohol",
      "Empty liquor bottles at scene; EtOH 282"
    ],
    [
      "Drugs",
      "Tox screen pending"
    ],
    [
      "Housing",
      "Homeless \u2014 found on park bench"
    ],
    [
      "Advance Directive",
      "None; no surrogate identified \u2014 2-physician consent for emergent treatment"
    ]
  ],
  "meta": {
    "caseId": "severe-hypothermia",
    "diagnosis": "Severe Accidental Hypothermia",
    "acuity": 1,
    "presentation": "Environmental Emergency",
    "category": "environmental"
  }
};
