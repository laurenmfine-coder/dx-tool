// Virtual EMR Case: Acute Epididymitis
// Variant: epididymitis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Kevin Morales",
  "patientHPI": "I'm here for my yearly checkup and feeling fine overall. I've been seeing someone new for a few months and we don't always use protection, but I haven't noticed any problems or anything unusual down there.",
    "dob": "09/18/1995",
    "age": 29,
    "sex": "Male",
    "mrn": "RDX-2025-28574",
    "pronouns": "He/Him",
    "insurance": "United Healthcare EPO",
    "pcp": "Dr. Sandra Gutierrez, MD",
    "pharmacy": "Walgreens — 2101 N University Dr, Coral Springs, FL",
    "language": "English, Spanish",
    "race": "Hispanic",
    "address": "2581 Ash St, Pittsburgh, PA 15210",
    "phone": "(954) 555-6371",
    "email": "k.morales95@email.com",
    "emergencyContact": {
      "name": "Elena Morales (Mother)",
      "phone": "(954) 555-6390"
    }
  },
  "problems": [
    {
      "problem": "Chlamydia Infection, treated",
      "icd": "A56.2",
      "onset": "2022",
      "status": "Resolved",
      "notes": "Treated with azithromycin; TOC negative"
    },
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2014",
      "status": "Active",
      "notes": "Spring/fall"
    },
    {
      "problem": "Low Back Pain, Mechanical",
      "icd": "M54.5",
      "onset": "2023",
      "status": "Resolved",
      "notes": "Resolved with PT"
    }
  ],
  "medications": [
    {
      "name": "Loratadine 10mg daily",
      "sig": "Take 1 tablet by mouth daily as needed during allergy season",
      "prescriber": "Dr. Gutierrez",
      "start": "03/2020",
      "refills": 5,
      "status": "PRN"
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
      "date": "09/20/2024",
      "bp": "120/76",
      "hr": 70,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "175 lbs",
      "ht": "5'9\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    },
    {
      "date": "03/15/2024",
      "bp": "118/74",
      "hr": 68,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "172 lbs",
      "ht": "5'9\"",
      "bmi": 25.4,
      "setting": "PCP Office"
    },
    {
      "date": "09/12/2023",
      "bp": "116/72",
      "hr": 72,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "170 lbs",
      "ht": "5'9\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Sandra Gutierrez, MD",
      "cc": "Annual wellness visit",
      "hpi": "29-year-old male presenting for routine annual exam. No active complaints. Sexually active with new partner; inconsistent condom use. Denies dysuria, discharge, or genital lesions. Low back pain from 2023 resolved after physical therapy course. Reports good general health.",
      "exam": "General: Well-appearing male in NAD. HEENT: PERRL, EOMI. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT/ND. GU: Deferred per patient preference. MSK: Full ROM lumbar spine, no tenderness. Neuro: A&O x3.",
      "assessment": "1. Annual wellness — healthy young male\n2. STI risk — counseled on safe sex practices\n3. Prior chlamydia — resolved",
      "plan": "1. STI screening panel ordered (per patient's request)\n2. Safe sex counseling; condom provision\n3. RTC 1 year or PRN"
    },
    {
      "id": "V002",
      "date": "06/05/2022",
      "type": "Urgent Care",
      "provider": "Dr. Michelle Park, MD",
      "cc": "Urethral discharge x 3 days",
      "hpi": "29-year-old sexually active male presenting with clear-to-whitish urethral discharge and mild dysuria x 3 days. New sexual partner 2 weeks ago; no condom used. Denies testicular pain, fever, or rash.",
      "exam": "General: NAD. GU: Mucopurulent urethral discharge expressed. No inguinal lymphadenopathy. Testes nontender bilaterally, no scrotal swelling.",
      "assessment": "1. Urethritis — presumptive chlamydia/gonorrhea",
      "plan": "1. NAAT for chlamydia/gonorrhea — sent\n2. Ceftriaxone 500mg IM x 1 + Azithromycin 1g PO x 1 (empiric)\n3. Abstain from sex x 7 days; treat partner(s)\n4. Test of cure in 4 weeks"
    }
  ],
  "labs": [
    {
      "date": "09/20/2024",
      "time": "10:30",
      "orderedBy": "Dr. Sandra Gutierrez, MD",
      "collected": "09/20/2024 10:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-092045",
      "status": "Final",
      "specimenType": "Urine, Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "STI SCREENING PANEL",
          "results": [
            { "test": "Chlamydia NAAT (Urine)", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Gonorrhea NAAT (Urine)", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "HIV 1/2 Ag/Ab Combo", "value": "Non-reactive", "unit": "", "range": "Non-reactive", "flag": "" },
            { "test": "RPR (Syphilis)", "value": "Non-reactive", "unit": "", "range": "Non-reactive", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "86", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "141", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "104", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.6", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/02/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-271",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/02/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-848",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2013",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: HTN, hyperlipidemia, alive at 58",
    "Mother: T2DM, alive at 55",
    "Brother: No significant medical history, age 26",
    "Maternal grandmother: Breast cancer at age 62, alive"
  ],
  "socialHistory": [
    ["Occupation", "Personal trainer"],
    ["Marital", "Single, sexually active"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 4-6 drinks/week"],
    ["Drugs", "Occasional marijuana"],
    ["Exercise", "Daily — weight training and cardio"],
    ["Housing", "Apartment with roommate"],
    ["Safety", "Denies IPV; wears seatbelt"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "epididymitis",
    "diagnosis": "Acute Epididymitis",
    "acuity": 3,
    "presentation": "Urologic Emergency",
    "category": "urologic"
  }
};
