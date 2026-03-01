// Virtual EMR Case: Adrenal Insufficiency (Hyperkalemia Component)
// Variant: adrenal-insufficiency | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Diane Charpentier",
    "dob": "03/28/1968",
    "age": 56,
    "sex": "Female",
    "mrn": "NSU-2025-84192",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Jennifer Adams, MD",
    "pharmacy": "CVS Pharmacy — 2801 S University Dr, Davie, FL",
    "language": "English, French",
    "race": "White/Caucasian (French-Canadian descent)",
    "address": "5841 SW 16th Ct, Plantation, FL 33317",
    "phone": "(954) 555-2418",
    "email": "d.charpentier@email.com",
    "emergencyContact": {
      "name": "Philippe Charpentier (Husband)",
      "phone": "(954) 555-2420"
    }
  },
  "problems": [
    {
      "problem": "Primary Adrenal Insufficiency (Addison Disease)",
      "icd": "E27.1",
      "onset": "2019",
      "status": "Active",
      "notes": "Autoimmune etiology; positive 21-hydroxylase antibodies; on hydrocortisone + fludrocortisone; MISSED MEDICATIONS x 3 days during GI illness"
    },
    {
      "problem": "Hashimoto Thyroiditis",
      "icd": "E06.3",
      "onset": "2016",
      "status": "Active",
      "notes": "Polyautoimmune syndrome — autoimmune thyroiditis + Addison disease; on levothyroxine"
    },
    {
      "problem": "Vitiligo",
      "icd": "L80",
      "onset": "2014",
      "status": "Active",
      "notes": "Patches on hands, periorbital; part of autoimmune cluster"
    }
  ],
  "medications": [
    {
      "name": "Hydrocortisone 15mg AM / 5mg PM",
      "sig": "Take 15 mg by mouth in the morning and 5 mg in the afternoon (MISSED x 3 DAYS — vomiting, unable to keep pills down)",
      "prescriber": "Dr. Martinez (Endocrinology)",
      "start": "04/2019",
      "refills": 3,
      "status": "Active — MISSED DUE TO VOMITING"
    },
    {
      "name": "Fludrocortisone 0.1mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Martinez (Endocrinology)",
      "start": "04/2019",
      "refills": 3,
      "status": "Active — MISSED x 3 DAYS"
    },
    {
      "name": "Levothyroxine 88mcg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach, 30 min before food",
      "prescriber": "Dr. Adams",
      "start": "09/2016",
      "refills": 4,
      "status": "Active — MISSED x 3 DAYS"
    },
    {
      "name": "Solu-Cortef (Hydrocortisone Sodium Succinate) 100mg IM — Emergency Kit",
      "sig": "Inject 100 mg intramuscularly in emergency if unable to take oral hydrocortisone and symptomatic — DID NOT SELF-ADMINISTER (kit expired)",
      "prescriber": "Dr. Martinez (Endocrinology)",
      "start": "04/2019",
      "refills": 1,
      "status": "Active — EMERGENCY KIT EXPIRED"
    }
  ],
  "allergies": [
    {
      "allergen": "Prednisone",
      "type": "Drug",
      "reaction": "Severe insomnia and psychomotor agitation (prefers hydrocortisone)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2025",
      "bp": "78/48",
      "hr": 112,
      "rr": 22,
      "temp": "97.2°F",
      "spo2": "96%",
      "wt": "128 lbs",
      "ht": "5'5\"",
      "bmi": 21.3,
      "setting": "ED"
    },
    {
      "date": "11/05/2024",
      "bp": "108/68",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "134 lbs",
      "ht": "5'5\"",
      "bmi": 22.3,
      "setting": "PCP Office"
    },
    {
      "date": "05/14/2024",
      "bp": "112/72",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "136 lbs",
      "ht": "5'5\"",
      "bmi": 22.6,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/05/2024",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Adams, MD",
      "cc": "Follow-up: Addison disease, Hashimoto thyroiditis, vitiligo",
      "hpi": "56-year-old female with polyautoimmune syndrome presenting for routine follow-up. Reports stable on hydrocortisone/fludrocortisone regimen. No adrenal crises since last visit. Energy level adequate. TSH stable on levothyroxine 88mcg. Vitiligo stable. Reports she has NOT renewed her emergency Solu-Cortef injection kit — it expired 3 months ago. Has medical alert bracelet but does not always wear it.",
      "exam": "General: Thin female, well-appearing. HEENT: Depigmented patches periorbital. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, NT. Skin: Vitiligo patches on dorsal hands, periorbital areas; hyperpigmentation of palmar creases and buccal mucosa (Addison). Neuro: A&O x3.",
      "assessment": "1. Primary adrenal insufficiency — stable; EMERGENCY KIT EXPIRED\n2. Hashimoto thyroiditis — stable on levothyroxine\n3. Vitiligo — stable",
      "plan": "1. Continue hydrocortisone 15/5mg and fludrocortisone 0.1mg\n2. RENEW Solu-Cortef emergency injection kit — prescription sent\n3. Stress-dose education reviewed again: double hydrocortisone for fever/illness; IM injection if vomiting\n4. Labs: AM cortisol, ACTH, renin, electrolytes, TSH\n5. STRONGLY advised to wear medical alert bracelet consistently\n6. RTC 6 months"
    },
    {
      "id": "V002",
      "date": "05/14/2024",
      "type": "Specialist",
      "provider": "Dr. Luis Martinez, MD (Endocrinology)",
      "cc": "Annual Addison disease management",
      "hpi": "56-year-old female with Addison disease and Hashimoto thyroiditis for annual endocrine follow-up. Stable on replacement doses. No adrenal crises this year. Tolerating hydrocortisone well. Fludrocortisone dose appears adequate — no orthostatic symptoms, no salt craving. Husband aware of sick-day rules and emergency injection technique.",
      "exam": "General: Thin but well. HEENT: Vitiligo periorbital. CV: RRR, no orthostatic changes today. Abdomen: Soft. Skin: Buccal and palmar hyperpigmentation stable. No edema.",
      "assessment": "1. Primary adrenal insufficiency — well-controlled on current doses\n2. Hashimoto thyroiditis — euthyroid\n3. Autoimmune polyglandular syndrome type 2",
      "plan": "1. Continue current doses\n2. Annual screening: fasting glucose (screen for autoimmune DM), anti-parietal cell antibodies (pernicious anemia screen)\n3. Emergency kit reviewed with patient and husband\n4. RTC 12 months"
    }
  ],
  "labs": [
    {
      "date": "02/24/2025",
      "time": "06:42",
      "orderedBy": "Dr. Kevin Tran, MD (ED)",
      "collected": "02/24/2025 06:25",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2025-103218",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "52", "unit": "mg/dL", "range": "70-100", "flag": "L" },
            { "test": "BUN", "value": "32", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.6", "unit": "mg/dL", "range": "0.6-1.1", "flag": "H" },
            { "test": "Sodium", "value": "124", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "6.4", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
            { "test": "Chloride", "value": "92", "unit": "mEq/L", "range": "98-106", "flag": "L" },
            { "test": "CO2 (Bicarbonate)", "value": "18", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "Calcium", "value": "10.8", "unit": "mg/dL", "range": "8.5-10.5", "flag": "H" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "3.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "L" },
            { "test": "Hemoglobin", "value": "14.2", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "43.8", "unit": "%", "range": "36-46", "flag": "" },
            { "test": "Platelets", "value": "198", "unit": "x10³/µL", "range": "150-400", "flag": "" },
            { "test": "Eosinophils", "value": "12", "unit": "%", "range": "1-4", "flag": "H" }
          ]
        },
        {
          "name": "CORTISOL AND ACTH",
          "results": [
            { "test": "Random Cortisol", "value": "1.2", "unit": "µg/dL", "range": "6.0-18.0 (AM)", "flag": "L" },
            { "test": "ACTH", "value": "892", "unit": "pg/mL", "range": "7-63", "flag": "H" }
          ]
        },
        {
          "name": "THYROID FUNCTION",
          "results": [
            { "test": "TSH", "value": "8.4", "unit": "mIU/L", "range": "0.5-4.5", "flag": "H" },
            { "test": "Free T4", "value": "0.6", "unit": "ng/dL", "range": "0.8-1.8", "flag": "L" }
          ]
        },
        {
          "name": "LACTIC ACID",
          "results": [
            { "test": "Lactate", "value": "3.8", "unit": "mmol/L", "range": "0.5-2.0", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/24/2025",
      "study": "CHEST X-RAY — PA AND LATERAL",
      "accession": "IMG-2025-10281",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "STAT",
      "clinical": "56-year-old with hypotension, tachycardia, known Addison disease — r/o infection precipitant",
      "technique": "PA and lateral chest radiographs.",
      "findings": "LUNGS: Clear bilaterally. No consolidation or effusion.\n\nHEART: Small cardiac silhouette (microcardia) — may be related to volume depletion and/or chronic adrenal insufficiency.\n\nOTHER: No pneumothorax.",
      "impression": "1. Small cardiac silhouette — correlate with volume status\n2. No acute cardiopulmonary process",
      "dictated": "02/24/2025 07:00",
      "verified": "02/24/2025 07:08"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL852K", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Pfizer, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "PF472R", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (2nd dose)", "date": "06/2023", "site": "Left deltoid IM", "lot": "SH221P", "mfr": "GSK" },
    { "vaccine": "Tdap (Adacel)", "date": "03/2022", "site": "Left deltoid IM", "lot": "TA212K", "mfr": "Sanofi" }
  ],
  "familyHistory": [
    "Mother (age 82): Hashimoto thyroiditis, pernicious anemia",
    "Father (age 84): Type 2 Diabetes, CAD",
    "Sister (age 53): Graves disease, vitiligo",
    "Strong family history of autoimmune disorders — polyautoimmune clustering"
  ],
  "socialHistory": [
    ["Occupation", "Freelance translator (French/English) — works from home"],
    ["Marital", "Married x 28 years; husband Philippe is aware of sick-day rules and emergency injection"],
    ["Tobacco", "Never"],
    ["Alcohol", "Rare — occasional glass of wine"],
    ["Drugs", "Denies"],
    ["Exercise", "Walks 30 min daily; yoga 2x/week"],
    ["Housing", "Single-family home with husband"],
    ["Safety", "Medical alert bracelet (does not always wear); emergency Solu-Cortef kit (EXPIRED); husband trained on IM injection"],
    ["Advance Directive", "Healthcare proxy: Philippe Charpentier (husband)"]
  ],
  "meta": {
    "caseId": "adrenal-insufficiency",
    "diagnosis": "Acute Adrenal Crisis (Addisonian Crisis) with Life-Threatening Hyperkalemia, Hyponatremia, and Hypoglycemia — Precipitated by GI Illness and Missed Glucocorticoid/Mineralocorticoid Replacement",
    "acuity": 2,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "endocrine"
  }
};
