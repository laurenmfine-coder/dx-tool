// Virtual EMR Case: Necrotizing Fasciitis (Type I — Polymicrobial)
// Variant: necrotizing-fasciitis | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Angela Simmons",
    "dob": "02/16/1970",
    "age": 55,
    "sex": "Female",
    "mrn": "RDX-2025-41572",
    "pronouns": "She/Her",
    "insurance": "Medicaid (Florida)",
    "pcp": "Dr. Lourdes Figueroa, MD",
    "pharmacy": "CVS Pharmacy — 4401 Sheridan St, Hollywood, FL",
    "language": "English",
    "race": "Black (African American)",
    "address": "3218 N 29th Ave, Hollywood, FL 33020",
    "phone": "(954) 555-7134",
    "email": "a.simmons70@email.com",
    "emergencyContact": {
      "name": "Tyrone Simmons (Son)",
      "phone": "(954) 555-7148"
    }
  },
  "problems": [
    {
      "problem": "Type 2 Diabetes Mellitus — Poorly Controlled",
      "icd": "E11.65",
      "onset": "2012",
      "status": "Active",
      "notes": "A1c 10.2; non-adherent to insulin regimen; recurrent hyperglycemia; lost to follow-up 06/2025 to 01/2026"
    },
    {
      "problem": "Obesity, BMI 42.1",
      "icd": "E66.01",
      "onset": "2005",
      "status": "Active",
      "notes": "Class III obesity; declined bariatric surgery referral"
    },
    {
      "problem": "Chronic Venous Insufficiency — Bilateral",
      "icd": "I87.2",
      "onset": "2018",
      "status": "Active",
      "notes": "Bilateral lower extremity edema; stasis dermatitis; compression stockings prescribed but not worn consistently"
    },
    {
      "problem": "Lymphedema — Left Lower Extremity",
      "icd": "I89.0",
      "onset": "2020",
      "status": "Active",
      "notes": "Secondary to chronic venous insufficiency and obesity; recurrent cellulitis episodes (3 in past 2 years)"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2010",
      "status": "Active",
      "notes": "On amlodipine; poorly controlled when non-adherent"
    },
    {
      "problem": "Depression — Moderate, Recurrent",
      "icd": "F33.1",
      "onset": "2017",
      "status": "Active",
      "notes": "On sertraline; contributing to self-care neglect"
    }
  ],
  "medications": [
    {
      "name": "Insulin Glargine 30 units QHS",
      "sig": "Inject 30 units subcutaneously at bedtime",
      "prescriber": "Dr. Figueroa",
      "start": "08/2020",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Figueroa",
      "start": "04/2013",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Figueroa",
      "start": "06/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Sertraline 100mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Figueroa",
      "start": "09/2017",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Cephalexin 500mg QID",
      "sig": "Take 1 capsule by mouth four times daily for 10 days",
      "prescriber": "Dr. Park (Urgent Care)",
      "start": "02/2026",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
      "type": "Drug",
      "reaction": "Anaphylaxis — hives, lip swelling, wheezing",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/23/2026",
      "bp": "82/48",
      "hr": 132,
      "rr": 28,
      "temp": "104.2°F",
      "spo2": "92%",
      "wt": "268 lbs",
      "ht": "5'5\"",
      "bmi": 44.6,
      "setting": "ED"
    },
    {
      "date": "02/16/2026",
      "bp": "142/88",
      "hr": 96,
      "rr": 18,
      "temp": "100.4°F",
      "spo2": "96%",
      "wt": "264 lbs",
      "ht": "5'5\"",
      "bmi": 43.9,
      "setting": "Urgent Care"
    },
    {
      "date": "06/10/2025",
      "bp": "158/94",
      "hr": 84,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "260 lbs",
      "ht": "5'5\"",
      "bmi": 43.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/16/2026",
      "type": "Urgent Care",
      "provider": "Dr. Kevin Park, DO",
      "cc": "Left leg redness, swelling, pain x 3 days",
      "hpi": "55F with history of recurrent cellulitis, lymphedema, and poorly controlled DM presents with 3-day history of increasing left leg redness, swelling, and pain. Reports scratching a mosquito bite 5 days ago on the medial left calf. Area became red and swollen. Low-grade fever at home (100.2°F). Denies tracking redness at this time. Reports moderate pain. Non-weight-bearing on left leg due to pain.",
      "exam": "Obese female, uncomfortable. Temp 100.4°F. Left lower extremity: Diffuse erythema from ankle to mid-calf, warm, tender, edematous. 3+ pitting edema (chronic baseline 2+). No blistering, no crepitus, no skin necrosis. Margins marked with pen. Right leg: Chronic venous stasis changes, no acute findings.",
      "assessment": "1. Left lower extremity cellulitis — recurrent, on background of lymphedema and chronic venous insufficiency\n2. T2DM — poorly controlled, infection risk",
      "plan": "1. Cephalexin 500mg QID x 10 days (sulfa allergy — cannot use TMP-SMX)\n2. Elevation, compression when tolerated\n3. Mark cellulitis borders — return to ED if spreading beyond marks, fevers >101, blistering, or worsening pain\n4. Follow-up PCP in 3-5 days\n5. Needs to resume diabetes management — labs and PCP follow-up"
    },
    {
      "id": "V002",
      "date": "06/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Lourdes Figueroa, MD",
      "cc": "Diabetes management, depression follow-up",
      "hpi": "55F with T2DM, depression, obesity presents. A1c 10.2 — worsened from 9.0. Admits not taking insulin regularly ('I forget' and 'the needles are hard to reach my belly'). Depression — reports low motivation, poor self-care. Sertraline helping somewhat. Reports bilateral leg swelling worsening.",
      "exam": "Obese. CV: RRR. Lungs: CTAB. Ext: Bilateral LE 2+ pitting edema, stasis dermatitis bilat, left > right. Skin: Hemosiderin staining bilateral medial ankles. No ulcers today.",
      "assessment": "1. T2DM — significantly uncontrolled, A1c 10.2\n2. Depression — undertreated, contributing to non-adherence\n3. CVI with lymphedema — worsening",
      "plan": "1. Insulin education and pen device (easier for patient to self-inject)\n2. Sertraline increase to 150mg discussed — patient declined\n3. Compression stockings re-ordered\n4. Social work referral for support services\n5. Return 2 months"
    }
  ],
  "labs": [
    {
      "date": "06/10/2025",
      "time": "09:30",
      "orderedBy": "Dr. Figueroa",
      "collected": "06/10/2025 09:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-601044",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            { "test": "HbA1c", "value": "10.2", "unit": "%", "range": "<5.7", "flag": "H" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "242", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "18", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Sodium", "value": "136", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.4", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "Albumin", "value": "3.2", "unit": "g/dL", "range": "3.5-5.5", "flag": "L" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "8.8", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "11.4", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "34.8", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "Platelets", "value": "288", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "08/2024",
      "study": "VENOUS DUPLEX ULTRASOUND — BILATERAL LOWER EXTREMITY",
      "accession": "IMG-2024-80822",
      "status": "FINAL",
      "orderedBy": "Dr. Figueroa",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Bilateral LE edema — evaluate for DVT vs venous insufficiency",
      "technique": "Compression and Doppler ultrasound of bilateral lower extremity deep and superficial venous systems.",
      "findings": "Deep veins: Patent and compressible bilaterally. No DVT identified.\n\nSuperficial veins: Bilateral great saphenous vein incompetence with reflux >1 second on Valsalva. Left > right.\n\nPerforator veins: Incompetent perforator veins at left mid-calf level.",
      "impression": "1. No DVT bilaterally.\n2. Bilateral superficial venous insufficiency with significant reflux, left > right.\n3. Incompetent perforators left leg.",
      "dictated": "08/14/2024 11:30",
      "verified": "08/14/2024 13:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "11/2025", "site": "Left deltoid IM", "lot": "FL25-8928", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Pfizer)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-1834", "mfr": "Pfizer" },
    { "vaccine": "Tdap", "date": "04/2021", "site": "Left deltoid IM", "lot": "TD21-290", "mfr": "GSK" },
    { "vaccine": "Hepatitis B Series", "date": "2002", "site": "Right deltoid IM", "lot": "HB02-180", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Mother: T2DM, HTN, CHF, deceased at 68 (cardiac arrest)",
    "Father: Unknown — estranged",
    "Sister: T2DM, obesity, alive at 58",
    "Brother: Deceased at 42 (gun violence)"
  ],
  "socialHistory": [
    ["Occupation", "Former home health aide; on disability since 2022 (mobility limitations from obesity and lymphedema)"],
    ["Marital", "Divorced; lives alone"],
    ["Tobacco", "Former — 10 pack-years; quit 2015"],
    ["Alcohol", "Denies current use"],
    ["Drugs", "Denies"],
    ["Exercise", "Minimal — limited by leg edema, pain, and deconditioning"],
    ["Housing", "Ground-floor apartment; accessible but poorly maintained; no A/C in bedroom (uses fans)"],
    ["Safety", "Fall risk; uses cane; no firearms; neighborhood safety concerns (low-income area)"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "necrotizing-fasciitis",
    "diagnosis": "Necrotizing Fasciitis Type I (Polymicrobial — Left Lower Extremity, Rapidly Progressing from Cellulitis in Immunocompromised Diabetic Patient with Lymphedema)",
    "acuity": 1,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "infectious"
  }
};
