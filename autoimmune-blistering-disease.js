// Virtual EMR Case: Autoimmune Blistering Disease (Bullous Pemphigoid)
// Variant: autoimmune-blistering-disease | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Eloise Beaumont",
    "dob": "12/08/1943",
    "age": 82,
    "sex": "Female",
    "mrn": "NSU-2025-41012",
    "pronouns": "She/Her",
    "insurance": "Medicare Part B with Medigap Plan G",
    "pcp": "Dr. Amanda Liu, MD",
    "pharmacy": "Publix Pharmacy — 2200 S University Dr, Davie, FL",
    "language": "English",
    "race": "White (French Canadian descent)",
    "address": "2840 NE 30th St, Fort Lauderdale, FL 33306",
    "phone": "(954) 555-1248",
    "email": "e.beaumont43@email.com",
    "emergencyContact": {
      "name": "Claire Beaumont-Harris (Daughter)",
      "phone": "(954) 555-1260"
    }
  },
  "problems": [
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2001",
      "status": "Active",
      "notes": "On amlodipine and lisinopril; well controlled"
    },
    {
      "problem": "Osteoarthritis — Generalized",
      "icd": "M15.0",
      "onset": "2010",
      "status": "Active",
      "notes": "Bilateral knees, hands, lumbar spine; on acetaminophen; uses walker"
    },
    {
      "problem": "Hypothyroidism",
      "icd": "E03.9",
      "onset": "2008",
      "status": "Active",
      "notes": "On levothyroxine; TSH at goal"
    },
    {
      "problem": "Atrial Fibrillation — Paroxysmal",
      "icd": "I48.0",
      "onset": "2020",
      "status": "Active",
      "notes": "Rate-controlled with metoprolol; on apixaban; CHA2DS2-VASc 5"
    },
    {
      "problem": "Chronic Pruritus — Under Investigation",
      "icd": "L29.9",
      "onset": "2025",
      "status": "Active",
      "notes": "Generalized itching x 3 months preceding blister onset; initially treated as eczema with topical steroids — incomplete response; now recognized as prodromal phase of bullous pemphigoid"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Liu",
      "start": "06/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Liu",
      "start": "03/2002",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metoprolol Succinate 50mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Liu",
      "start": "09/2020",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Apixaban 5mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Liu",
      "start": "10/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Levothyroxine 75mcg daily",
      "sig": "Take 1 tablet by mouth once daily on empty stomach, 30 min before breakfast",
      "prescriber": "Dr. Liu",
      "start": "04/2009",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Liu",
      "start": "01/2012",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Triamcinolone 0.1% cream — topical BID",
      "sig": "Apply thin layer to itchy areas twice daily",
      "prescriber": "Dr. Liu",
      "start": "11/2025",
      "refills": 1,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfonamides",
      "type": "Drug",
      "reaction": "Diffuse maculopapular rash",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Severe constipation and confusion",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2026",
      "bp": "148/82",
      "hr": 88,
      "rr": 18,
      "temp": "99.4°F",
      "spo2": "96%",
      "wt": "142 lbs",
      "ht": "5'3\"",
      "bmi": 25.2,
      "setting": "ED"
    },
    {
      "date": "11/18/2025",
      "bp": "138/78",
      "hr": 72,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "97%",
      "wt": "144 lbs",
      "ht": "5'3\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    },
    {
      "date": "08/04/2025",
      "bp": "134/76",
      "hr": 68,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "146 lbs",
      "ht": "5'3\"",
      "bmi": 25.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Generalized itching, new rash",
      "hpi": "82F with HTN, hypothyroidism, paroxysmal AFib presents with 3-month history of worsening generalized pruritus. Reports intense itching on trunk, arms, and thighs that keeps her awake at night. Over past 2 weeks, has developed erythematous patches and a few small blisters on forearms and abdomen. No new medications, detergents, or exposures. Topical triamcinolone provides partial relief. No oral mucosal involvement. No fevers.",
      "exam": "NAD but uncomfortable from itching. Skin: Erythematous urticarial plaques on trunk, bilateral forearms, anterior thighs. Scattered intact tense blisters (0.5-2 cm) on left forearm and lower abdomen — clear fluid, no hemorrhage. Nikolsky sign negative. Oral mucosa: Clear, no erosions. No lymphadenopathy.",
      "assessment": "1. Pruritic eruption with tense bullae — differential includes bullous pemphigoid, linear IgA, drug reaction; pemphigoid most likely given age and presentation\n2. Chronic pruritus — likely prodromal BP",
      "plan": "1. Urgent dermatology referral for punch biopsy + DIF\n2. Continue triamcinolone cream\n3. Add hydroxyzine 25mg QHS for itch/sleep\n4. CBC with diff, CMP, ESR\n5. Hold on systemic steroids pending dermatology evaluation\n6. Return 2 weeks or sooner if rapid blister spread"
    },
    {
      "id": "V002",
      "date": "08/04/2025",
      "type": "Primary Care",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Routine follow-up, HTN, hypothyroidism",
      "hpi": "81F presents for routine 6-month follow-up. Reports mild generalized itching x 1 month — attributes to dry skin. No rash. HTN well-controlled. TSH at goal. AFib — no palpitations, rate-controlled. Using walker for ambulation — stable.",
      "exam": "NAD. CV: Irregularly irregular, rate 72. Lungs: CTAB. Skin: Dry skin diffusely; no rashes, lesions, or blisters. Ext: Trace edema bilat.",
      "assessment": "1. HTN — controlled\n2. Hypothyroidism — stable\n3. Paroxysmal AFib — rate controlled\n4. Pruritus — dry skin; recommend emollients",
      "plan": "1. Continue current medications\n2. Emollient cream BID for dry skin\n3. Labs: TSH, CMP\n4. Return 6 months"
    }
  ],
  "labs": [
    {
      "date": "11/18/2025",
      "time": "10:30",
      "orderedBy": "Dr. Liu",
      "collected": "11/18/2025 10:45",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2025-881822",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "8.2", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "12.6", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "38.4", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelets", "value": "232", "unit": "K/uL", "range": "150-400", "flag": "" },
            { "test": "Eosinophils (Absolute)", "value": "0.8", "unit": "K/uL", "range": "0.0-0.5", "flag": "H" },
            { "test": "Eosinophils (%)", "value": "9.8", "unit": "%", "range": "0-5", "flag": "H" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "96", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "20", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "Albumin", "value": "3.6", "unit": "g/dL", "range": "3.5-5.5", "flag": "" }
          ]
        },
        {
          "name": "INFLAMMATORY MARKERS",
          "results": [
            { "test": "ESR", "value": "42", "unit": "mm/hr", "range": "0-30", "flag": "H" },
            { "test": "CRP", "value": "1.2", "unit": "mg/dL", "range": "<0.5", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "09/2024",
      "study": "CHEST X-RAY PA AND LATERAL",
      "accession": "IMG-2024-90418",
      "status": "FINAL",
      "orderedBy": "Dr. Liu",
      "readBy": "Dr. Patricia Gomez, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "Routine",
      "clinical": "Annual wellness, AFib, cough evaluation",
      "technique": "PA and lateral views of the chest obtained.",
      "findings": "Heart: Mildly enlarged cardiac silhouette.\n\nLungs: Clear bilaterally. No consolidation, effusion, or pneumothorax.\n\nMediastinum: Unremarkable.\n\nBony structures: Thoracic kyphosis. Degenerative changes.",
      "impression": "1. Mild cardiomegaly.\n2. No acute pulmonary disease.",
      "dictated": "09/12/2024 11:00",
      "verified": "09/12/2024 13:30"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9210", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Moderna)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-2310", "mfr": "Moderna" },
    { "vaccine": "Prevnar 20", "date": "05/2023", "site": "Left deltoid IM", "lot": "PV20-540", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (1/2)", "date": "01/2022", "site": "Right deltoid IM", "lot": "SX22-044", "mfr": "GSK" },
    { "vaccine": "Shingrix (2/2)", "date": "03/2022", "site": "Right deltoid IM", "lot": "SX22-198", "mfr": "GSK" },
    { "vaccine": "Tdap", "date": "07/2020", "site": "Left deltoid IM", "lot": "TD20-402", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Mother: Rheumatoid arthritis, deceased at 90 (natural causes)",
    "Father: Hypertension, stroke at 78, deceased at 80",
    "Sister: Hypothyroidism, psoriasis, alive at 79",
    "Brother: Deceased at 74 (pancreatic cancer)"
  ],
  "socialHistory": [
    ["Occupation", "Retired elementary school librarian; retired 2008"],
    ["Marital", "Widowed (husband deceased 2019 — cardiac arrest); lives alone"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Rare — occasional sherry at holidays"],
    ["Drugs", "Denies"],
    ["Exercise", "Chair exercises 3x/week at senior center; uses walker for mobility"],
    ["Housing", "Second-floor condo with elevator; daughter visits daily; considering assisted living"],
    ["Safety", "Fall risk — uses walker; grab bars installed; wears medical alert pendant; no firearms"],
    ["Advance Directive", "Living will signed; DNR; DPOA designated (daughter Claire)"]
  ],
  "meta": {
    "caseId": "autoimmune-blistering-disease",
    "diagnosis": "Bullous Pemphigoid (Generalized Tense Bullae with Prodromal Pruritus and Peripheral Eosinophilia in Elderly Female on Anticoagulation)",
    "acuity": 3,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "dermatologic"
  }
};
