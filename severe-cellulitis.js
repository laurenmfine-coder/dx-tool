// Virtual EMR Case: Severe Cellulitis (Complicated — MRSA Risk with Abscess Formation)
// Variant: severe-cellulitis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Darnell Washington",
  "patientHPI": "I've been doing really well with my medications and keeping up with all my appointments, but yesterday I noticed this red, swollen area on my leg that's getting bigger and more painful. It feels hot to the touch and I'm starting to feel feverish and tired.",
    "dob": "11/08/1985",
    "age": 40,
    "sex": "Male",
    "mrn": "RDX-2025-41796",
    "pronouns": "He/Him",
    "insurance": "Medicaid (Florida)",
    "pcp": "Dr. Sandra Ellis, MD",
    "pharmacy": "Walgreens — 3100 Broward Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black (African American)",
    "address": "8104 Elm St, Memphis, TN 38112",
    "phone": "(954) 555-2044",
    "email": "d.washington85@email.com",
    "emergencyContact": {
      "name": "Monique Washington (Sister)",
      "phone": "(954) 555-2060"
    }
  },
  "problems": [
    {
      "problem": "HIV Infection — Well Controlled",
      "icd": "B20",
      "onset": "2015",
      "status": "Active",
      "notes": "On bictegravir/emtricitabine/tenofovir alafenamide (Biktarvy); CD4 620; viral load undetectable x 3 years; excellent adherence"
    },
    {
      "problem": "Prior MRSA Skin/Soft Tissue Infection — Left Forearm",
      "icd": "A49.02",
      "onset": "2024",
      "status": "Resolved",
      "notes": "Abscess requiring I&D and oral TMP-SMX (04/2024); wound culture: MRSA (community-acquired strain)"
    },
    {
      "problem": "Chronic Hepatitis B — On Treatment",
      "icd": "B18.1",
      "onset": "2015",
      "status": "Active",
      "notes": "Co-infection with HIV; on tenofovir (component of Biktarvy); HBV DNA undetectable; HBeAg negative"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2022",
      "status": "Active",
      "notes": "On lisinopril; controlled"
    }
  ],
  "medications": [
    {
      "name": "Bictegravir/Emtricitabine/Tenofovir Alafenamide (Biktarvy) 1 tab daily",
      "sig": "Take 1 tablet by mouth once daily with or without food",
      "prescriber": "Dr. Thompson (ID)",
      "start": "06/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Ellis",
      "start": "04/2022",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Multivitamin daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Ellis",
      "start": "01/2020",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Abacavir",
      "type": "Drug",
      "reaction": "Hypersensitivity reaction — fever, rash, GI symptoms (HLA-B*5701 positive)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/21/2026",
      "bp": "138/86",
      "hr": 98,
      "rr": 18,
      "temp": "101.4°F",
      "spo2": "98%",
      "wt": "186 lbs",
      "ht": "6'0\"",
      "bmi": 25.2,
      "setting": "ED"
    },
    {
      "date": "11/04/2025",
      "bp": "128/78",
      "hr": 72,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "188 lbs",
      "ht": "6'0\"",
      "bmi": 25.5,
      "setting": "ID Clinic"
    },
    {
      "date": "05/08/2025",
      "bp": "124/76",
      "hr": 68,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "190 lbs",
      "ht": "6'0\"",
      "bmi": 25.8,
      "setting": "ID Clinic"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/04/2025",
      "type": "Specialist",
      "provider": "Dr. Karen Thompson, MD (Infectious Disease)",
      "cc": "HIV follow-up, routine labs",
      "hpi": "40M with HIV (diagnosed 2015), chronic HBV co-infection presents for routine 6-month follow-up. On Biktarvy with excellent adherence. Feels well. No opportunistic infections. CD4 stable >500. Viral load undetectable. HBV DNA undetectable. No skin infections since MRSA abscess 04/2024. Denies fevers, weight loss, night sweats.",
      "exam": "NAD. CV: RRR. Lungs: CTAB. Skin: No lesions, rashes, or abscesses. Left forearm: Well-healed scar from prior I&D. No lymphadenopathy.",
      "assessment": "1. HIV — well controlled on Biktarvy; undetectable VL\n2. Chronic HBV — suppressed on tenofovir component\n3. History of MRSA SSTI — resolved, decolonization completed",
      "plan": "1. Continue Biktarvy\n2. Labs: CD4/VL, CMP, CBC, lipid panel, HBV DNA\n3. Age-appropriate cancer screening — up to date\n4. Return 6 months"
    },
    {
      "id": "V002",
      "date": "04/12/2024",
      "type": "ED",
      "provider": "Dr. Michael Torres, MD (Emergency Medicine)",
      "cc": "Left forearm abscess — painful swelling x 4 days",
      "hpi": "38M with HIV (well controlled) presents with 4-day painful, enlarging swelling on left forearm. Reports mild trauma (scraped arm on fence at work) 1 week ago. Area became red, warm, and progressively more swollen. Now fluctuant. Low-grade fever 100.2°F. Denies IV drug use.",
      "exam": "Left forearm: 4 x 3 cm erythematous, fluctuant, tender mass with surrounding cellulitis (~5 cm margin). No lymphangitis. No crepitus. Axillary lymphadenopathy left 1.5 cm, tender.",
      "assessment": "1. Left forearm abscess with surrounding cellulitis — likely MRSA given community prevalence",
      "plan": "1. I&D performed in ED — 15 mL purulent material expressed; wound packed\n2. Wound culture sent\n3. TMP-SMX DS 1 tab BID x 10 days\n4. Wound care instructions given\n5. Return 48 hrs for repacking\n6. Culture resulted: MRSA — susceptible to TMP-SMX, clindamycin, doxycycline"
    }
  ],
  "labs": [
    {
      "date": "11/04/2025",
      "time": "09:00",
      "orderedBy": "Dr. Thompson",
      "collected": "11/04/2025 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-851108",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "HIV MONITORING",
          "results": [
            { "test": "CD4 Count", "value": "620", "unit": "cells/uL", "range": "500-1500", "flag": "" },
            { "test": "CD4 %", "value": "34", "unit": "%", "range": "30-60", "flag": "" },
            { "test": "HIV-1 RNA (Viral Load)", "value": "<20", "unit": "copies/mL", "range": "<20", "flag": "" }
          ]
        },
        {
          "name": "HEPATITIS B PANEL",
          "results": [
            { "test": "HBV DNA", "value": "<10", "unit": "IU/mL", "range": "<10", "flag": "" },
            { "test": "HBeAg", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Anti-HBe", "value": "Positive", "unit": "", "range": "", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "90", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "ALT", "value": "28", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST", "value": "22", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "6.4", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "14.6", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "43.8", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelets", "value": "218", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-8334", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Moderna)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-1678", "mfr": "Moderna" },
    { "vaccine": "Tdap", "date": "09/2021", "site": "Left deltoid IM", "lot": "TD21-580", "mfr": "GSK" },
    { "vaccine": "Hepatitis A (Series Complete)", "date": "2016", "site": "Right deltoid IM", "lot": "HA16-220", "mfr": "Merck" },
    { "vaccine": "Pneumovax 23", "date": "06/2023", "site": "Left deltoid IM", "lot": "PV23-504", "mfr": "Merck" },
    { "vaccine": "Prevnar 20", "date": "03/2023", "site": "Left deltoid IM", "lot": "PV20-484", "mfr": "Pfizer" }
  ],
  "familyHistory": [
    "Mother: T2DM, HTN, alive at 62",
    "Father: HTN, prostate cancer at 60, alive at 66",
    "Sister: Healthy, alive at 42",
    "Brother: Sickle cell trait, alive at 38"
  ],
  "socialHistory": [
    ["Occupation", "Landscape maintenance worker — outdoor labor; frequent minor cuts and scrapes"],
    ["Marital", "Single; in committed relationship"],
    ["Tobacco", "Former — 5 pack-years; quit 2018"],
    ["Alcohol", "Social — 2-3 drinks on weekends"],
    ["Drugs", "Denies current use; remote marijuana use"],
    ["Exercise", "Physical job provides exercise; plays basketball recreationally"],
    ["Housing", "Apartment; lives alone; girlfriend visits frequently"],
    ["Safety", "Denies IPV; seatbelt; no firearms; wears work gloves inconsistently"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "severe-cellulitis",
    "diagnosis": "Severe Cellulitis with Abscess Formation (Right Lower Extremity — Suspected MRSA, Post-Occupational Skin Trauma in HIV-Positive Patient with Prior MRSA SSTI History)",
    "acuity": 3,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "infectious"
  }
};
