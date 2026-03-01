// Virtual EMR Case: Thyroid Storm
// Variant: thyroid-storm | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Jasmine Williams",
    "dob": "03/08/1990",
    "age": 35,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Rebecca Stone, MD",
    "pharmacy": "CVS \u2014 Plantation, FL",
    "language": "English",
    "race": "Black",
    "address": "801 NW 72nd Ave, Plantation, FL",
    "phone": "(954) 555-5544",
    "email": "j.williams90@email.com",
    "emergencyContact": {
      "name": "Anthony Williams (Husband)",
      "phone": "(954) 555-5560"
    },
    "mrn": "NSU-2025-94420"
  },
  "problems": [
    {
      "problem": "Graves Disease",
      "icd": "E05.00",
      "onset": "2022",
      "status": "Active",
      "notes": "Diagnosed 2022; on methimazole but self-discontinued 2 months ago because 'felt fine'"
    },
    {
      "problem": "Graves Ophthalmopathy \u2014 Mild",
      "icd": "H06.21",
      "onset": "2022",
      "status": "Active",
      "notes": "Mild proptosis; on lubricant drops"
    }
  ],
  "medications": [
    {
      "name": "Methimazole 20mg daily",
      "sig": "PO daily",
      "prescriber": "Endocrinology",
      "start": "06/2022",
      "refills": 3,
      "status": "DISCONTINUED by patient 2 months ago"
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
      "bp": "168/62",
      "hr": 158,
      "rr": 26,
      "temp": "104.2\u00b0F",
      "spo2": "98%",
      "wt": "118 lbs",
      "ht": "5'6\"",
      "bmi": 19.0,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "152/58",
      "hr": 132,
      "rr": 22,
      "temp": "102.8\u00b0F",
      "spo2": "99%",
      "wt": "118 lbs",
      "ht": "5'6\"",
      "bmi": 19.0,
      "setting": "ED \u2014 2hr post-treatment"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Palpitations, fever, agitation, tremors",
      "hpi": "35F with Graves disease (off methimazole x 2 months) presents with 2 days of palpitations, tremors, diarrhea (6 episodes today), and progressive agitation. Husband reports she has been 'manic' \u2014 not sleeping, talking rapidly, increasingly confused today. Temp 104.2\u00b0F at home. Recent URI may have triggered decompensation. Burch-Wartofsky Score: >45 (highly suggestive of thyroid storm).",
      "exam": "Agitated, diaphoretic, tremulous. Exophthalmos bilateral. Lid lag present. Thyroid diffusely enlarged, non-tender, no nodules. CV: Tachycardic, irregularly irregular (new AFib). Widened pulse pressure. Hyperactive DTRs throughout. Fine tremor in outstretched hands. Skin warm and moist.",
      "assessment": "1. THYROID STORM \u2014 Burch-Wartofsky >45. Graves off treatment + precipitant (URI)\n2. New atrial fibrillation with rapid ventricular response\n3. Dehydration from diarrhea and insensible losses",
      "plan": "1. PTU 200mg PO/PR (blocks synthesis AND peripheral conversion)\n2. Wait 1 hour then \u2192 SSKI 5 drops PO q6h (Wolff-Chaikoff)\n3. Propranolol 60mg PO q6h (beta-blockade + blocks T4\u2192T3)\n4. Hydrocortisone 100mg IV q8h (blocks T4\u2192T3, prevents adrenal crisis)\n5. Acetaminophen for fever (NO aspirin \u2014 displaces T4 from TBG)\n6. External cooling\n7. IV NS 1L bolus then 200 mL/hr\n8. Endocrinology and Cardiology consult\n9. ICU admission"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "11:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 11:10",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260340",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "THYROID",
          "results": [
            {
              "test": "TSH",
              "value": "<0.01",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": "L"
            },
            {
              "test": "Free T4",
              "value": "7.8",
              "unit": "ng/dL",
              "range": "0.9-1.7",
              "flag": "H"
            },
            {
              "test": "Free T3",
              "value": "18.4",
              "unit": "pg/mL",
              "range": "2.0-4.4",
              "flag": "H"
            },
            {
              "test": "TSI",
              "value": "4.8",
              "unit": "IU/L",
              "range": "<1.3",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CBC/METABOLIC",
          "results": [
            {
              "test": "WBC",
              "value": "12.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "188",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "11.2",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "H"
            },
            {
              "test": "AST",
              "value": "88",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "72",
              "unit": "U/L",
              "range": "7-56",
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
    "Mother: Graves disease, alive at 62",
    "Aunt: Hashimoto thyroiditis",
    "Father: HTN, alive at 65"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Marketing manager"
    ],
    [
      "Marital",
      "Married 5 years"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social \u2014 1-2/week"
    ],
    [
      "Exercise",
      "Previously ran; too fatigued recently"
    ]
  ],
  "meta": {
    "caseId": "thyroid-storm",
    "diagnosis": "Thyroid Storm",
    "acuity": 1,
    "presentation": "Endocrine Emergency",
    "category": "endocrine"
  }
};
