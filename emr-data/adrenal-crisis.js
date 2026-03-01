// Virtual EMR Case: Adrenal Crisis (Acute Adrenal Insufficiency)
// Variant: adrenal-crisis | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Margaret Chen",
    "dob": "10/14/1965",
    "age": 60,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "United Healthcare",
    "pcp": "Dr. Daniel Ross, MD",
    "pharmacy": "CVS \u2014 Weston, FL",
    "language": "English",
    "race": "Asian (Taiwanese)",
    "address": "2680 Indian Trace, Weston, FL",
    "phone": "(954) 555-2288",
    "email": "m.chen65@email.com",
    "emergencyContact": {
      "name": "Richard Chen (Husband)",
      "phone": "(954) 555-2304"
    },
    "mrn": "NSU-2025-88058"
  },
  "problems": [
    {
      "problem": "Primary Adrenal Insufficiency (Addison Disease)",
      "icd": "E27.1",
      "onset": "2018",
      "status": "Active",
      "notes": "Autoimmune; on hydrocortisone and fludrocortisone replacement; medical alert bracelet"
    },
    {
      "problem": "Autoimmune Hypothyroidism (Hashimoto)",
      "icd": "E06.3",
      "onset": "2015",
      "status": "Active",
      "notes": "On levothyroxine; well-controlled"
    },
    {
      "problem": "Pernicious Anemia",
      "icd": "D51.0",
      "onset": "2020",
      "status": "Active",
      "notes": "On B12 injections monthly; autoimmune polyendocrine syndrome type 2"
    }
  ],
  "medications": [
    {
      "name": "Hydrocortisone 15mg AM / 5mg PM",
      "sig": "PO split dosing",
      "prescriber": "Endocrinology",
      "start": "06/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Fludrocortisone 0.1mg daily",
      "sig": "PO daily",
      "prescriber": "Endocrinology",
      "start": "06/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Levothyroxine 88mcg daily",
      "sig": "PO daily on empty stomach",
      "prescriber": "Dr. Ross",
      "start": "03/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Cyanocobalamin 1000mcg IM monthly",
      "sig": "IM injection monthly",
      "prescriber": "Dr. Ross",
      "start": "02/2020",
      "refills": 12,
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
      "bp": "72/44",
      "hr": 118,
      "rr": 22,
      "temp": "97.0\u00b0F",
      "spo2": "96%",
      "wt": "128 lbs",
      "ht": "5'3\"",
      "bmi": 22.7,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "98/62",
      "hr": 96,
      "rr": 18,
      "temp": "97.8\u00b0F",
      "spo2": "98%",
      "wt": "128 lbs",
      "ht": "5'3\"",
      "bmi": 22.7,
      "setting": "ED \u2014 Post-Stress-Dose Steroids 1hr"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Severe weakness, nausea, vomiting, near-collapse",
      "hpi": "60F with Addison disease presents via EMS after near-collapse at home. Has had gastroenteritis x 2 days with vomiting and diarrhea \u2014 unable to keep oral hydrocortisone down. Husband reports she doubled her hydrocortisone dose yesterday per sick-day rules but vomited it back. Now profoundly weak, confused, abdominal pain. Medical alert bracelet notes adrenal insufficiency. Hyperpigmented skin creases noted.",
      "exam": "Lethargic, oriented to person only. Hyperpigmented palmar creases, buccal mucosa, and nipple areolae. Dehydrated \u2014 dry mucous membranes, poor turgor. Hypotensive despite 1L NS by EMS. Abdomen: Diffuse tenderness, no peritoneal signs. No fever (hypothermic if anything).",
      "assessment": "1. ADRENAL CRISIS \u2014 known Addison disease + intercurrent illness + inability to take oral replacement\n2. Shock \u2014 likely adrenal + hypovolemic from GI losses\n3. Hypoglycemia risk \u2014 check STAT glucose\n4. Electrolyte derangement expected (hyperK, hypoNa)",
      "plan": "1. Hydrocortisone 100mg IV STAT then 50mg IV q8h (stress dosing)\n2. IV NS with D5 \u2014 bolus 2L then 200 mL/hr\n3. STAT glucose, BMP, cortisol level (draw BEFORE giving steroids if possible)\n4. Monitor K+ closely \u2014 hyperkalemia expected\n5. Do NOT give fludrocortisone until PO intake restored\n6. Endocrinology consult\n7. Treat underlying gastroenteritis\n8. ICU admission for hemodynamic monitoring\n9. Medic-Alert reinforcement on discharge"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "09:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 09:05",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260350",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "BMP",
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
              "value": "126",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "6.2",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "92",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "L"
            },
            {
              "test": "CO2",
              "value": "18",
              "unit": "mEq/L",
              "range": "22-29",
              "flag": "L"
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
              "value": "10.8",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "ADRENAL/OTHER",
          "results": [
            {
              "test": "Cortisol (Random)",
              "value": "1.2",
              "unit": "mcg/dL",
              "range": "6-23",
              "flag": "L"
            },
            {
              "test": "ACTH",
              "value": "482",
              "unit": "pg/mL",
              "range": "10-60",
              "flag": "H"
            },
            {
              "test": "TSH",
              "value": "3.2",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "5.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "11.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Eosinophils",
              "value": "8",
              "unit": "%",
              "range": "1-4",
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
    }
  ],
  "familyHistory": [
    "Mother: Hypothyroidism, T1DM, alive at 86",
    "Father: Healthy, deceased at 78 (accident)",
    "Sister: Vitiligo, alive at 57"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired pharmacist"
    ],
    [
      "Marital",
      "Married 35 years"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Exercise",
      "Yoga 3x/week usually"
    ],
    [
      "Advance Directive",
      "Full code; DPOA husband Richard"
    ]
  ],
  "meta": {
    "caseId": "adrenal-crisis",
    "diagnosis": "Adrenal Crisis (Acute Adrenal Insufficiency)",
    "acuity": 1,
    "presentation": "Endocrine Emergency",
    "category": "endocrine"
  }
};
