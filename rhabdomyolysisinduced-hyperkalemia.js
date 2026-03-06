// Virtual EMR Case: Rhabdomyolysis-Induced Hyperkalemia
// Variant: rhabdomyolysisinduced-hyperkalemia | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Jordan Mitchell",
  "patientHPI": "I'm here for my regular checkup - I feel great and stay really active with CrossFit and running. Yesterday after my workout I felt more sore than usual, and this morning my urine looked really dark, almost like cola, which freaked me out a bit.",
    "dob": "04/19/1995",
    "age": 29,
    "sex": "Male",
    "mrn": "RDX-2025-91472",
    "pronouns": "He/Him",
    "insurance": "United Healthcare — PPO",
    "pcp": "Dr. Michael Torres, MD",
    "pharmacy": "CVS Pharmacy — 3601 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "8067 Spruce St, Milwaukee, WI 53203",
    "phone": "(954) 555-5412",
    "email": "j.mitchell95@email.com",
    "emergencyContact": {
      "name": "Angela Mitchell (Mother)",
      "phone": "(954) 555-5418"
    }
  },
  "problems": [
    {
      "problem": "Exertional Rhabdomyolysis",
      "icd": "M62.82",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — CrossFit workout in heat after 2-month deconditioning period"
    },
    {
      "problem": "Sickle Cell Trait",
      "icd": "D57.3",
      "onset": "1995",
      "status": "Active",
      "notes": "Heterozygous HbAS; generally asymptomatic; counseled about exertional risk and dehydration"
    }
  ],
  "medications": [
    {
      "name": "Whey Protein Supplement",
      "sig": "1 scoop daily (self-directed)",
      "prescriber": "OTC",
      "start": "2022",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Creatine Monohydrate 5g daily",
      "sig": "Mix 5 grams in water daily (self-directed)",
      "prescriber": "OTC",
      "start": "2023",
      "refills": 0,
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
      "date": "02/25/2025",
      "bp": "102/58",
      "hr": 118,
      "rr": 22,
      "temp": "100.8°F",
      "spo2": "97%",
      "wt": "198 lbs",
      "ht": "6'1\"",
      "bmi": 26.1,
      "setting": "ED"
    },
    {
      "date": "08/12/2024",
      "bp": "122/74",
      "hr": 62,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "195 lbs",
      "ht": "6'1\"",
      "bmi": 25.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Michael Torres, MD",
      "cc": "Annual physical",
      "hpi": "29-year-old healthy male for routine annual exam. Active — CrossFit 5x/week, runs, lifts weights. Takes creatine and whey protein. No concerns. Aware of sickle cell trait status. No history of exertional events. No medications.",
      "exam": "General: Muscular, well-appearing male. CV: RRR, athletic bradycardia (HR 62). Lungs: CTA. Abdomen: Soft, muscular. MSK: Full ROM, excellent muscle tone. Neuro: Intact.",
      "assessment": "1. Healthy male — annual wellness\n2. Sickle cell trait — counseled about exertional risk, hydration, and altitude precautions\n3. Supplement use — creatine generally safe but counseled about adequate hydration",
      "plan": "1. Continue exercise program\n2. Hydration: emphasized importance especially during outdoor workouts in FL heat\n3. Avoid extreme exertion after deconditioning periods\n4. RTC annually"
    }
  ],
  "labs": [
    {
      "date": "02/25/2025",
      "time": "18:22",
      "orderedBy": "Dr. Marcus Johnson, MD (ED)",
      "collected": "02/25/2025 18:05",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-106218",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "108", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "34", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "2.4", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "6.8", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
            { "test": "Chloride", "value": "104", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "16", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "Calcium", "value": "7.8", "unit": "mg/dL", "range": "8.5-10.5", "flag": "L" },
            { "test": "Phosphate", "value": "6.8", "unit": "mg/dL", "range": "2.5-4.5", "flag": "H" },
            { "test": "Uric Acid", "value": "12.4", "unit": "mg/dL", "range": "3.5-7.2", "flag": "H" },
            { "test": "AST (SGOT)", "value": "1,842", "unit": "U/L", "range": "10-40", "flag": "H" },
            { "test": "ALT (SGPT)", "value": "482", "unit": "U/L", "range": "7-56", "flag": "H" },
            { "test": "LDH", "value": "2,180", "unit": "U/L", "range": "120-246", "flag": "H" }
          ]
        },
        {
          "name": "CREATINE KINASE",
          "results": [
            { "test": "CK Total", "value": "84,200", "unit": "U/L", "range": "30-200", "flag": "H" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "14.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "16.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "49.8", "unit": "%", "range": "38.3-48.6", "flag": "H" },
            { "test": "Platelets", "value": "168", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            { "test": "Color", "value": "Dark brown (tea-colored)", "unit": "", "range": "Yellow", "flag": "" },
            { "test": "Myoglobin", "value": "Positive (>3000)", "unit": "ng/mL", "range": "Negative", "flag": "H" },
            { "test": "Blood (dipstick)", "value": "3+", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "RBC", "value": "0-2", "unit": "/HPF", "range": "0-3", "flag": "" },
            { "test": "Specific Gravity", "value": "1.030", "unit": "", "range": "1.005-1.030", "flag": "H" }
          ]
        },
        {
          "name": "HEMOGLOBIN ELECTROPHORESIS (ON FILE)",
          "results": [
            { "test": "Hgb A", "value": "58", "unit": "%", "range": "95-98", "flag": "L" },
            { "test": "Hgb S", "value": "39", "unit": "%", "range": "0", "flag": "H" },
            { "test": "Interpretation", "value": "Sickle Cell Trait (HbAS)", "unit": "", "range": "", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/25/2025",
      "study": "RENAL ULTRASOUND",
      "accession": "IMG-2025-10518",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Johnson, MD",
      "readBy": "Dr. Sarah Mitchell, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "29-year-old with rhabdomyolysis, AKI, hyperkalemia — evaluate kidneys",
      "technique": "Real-time sonographic evaluation of both kidneys and bladder.",
      "findings": "RIGHT KIDNEY: 12.1 cm, normal cortical echogenicity, no hydronephrosis, no stones.\n\nLEFT KIDNEY: 11.8 cm, normal cortical echogenicity, no hydronephrosis, no stones.\n\nBLADDER: Small volume (Foley catheter in place).\n\nOTHER: No perinephric collection.",
      "impression": "1. Normal bilateral kidneys without obstruction\n2. AKI is non-obstructive — consistent with pigment nephropathy from rhabdomyolysis",
      "dictated": "02/25/2025 19:00",
      "verified": "02/25/2025 19:08"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL912K", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Pfizer, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "PF512T", "mfr": "Pfizer" },
    { "vaccine": "Tdap (Adacel)", "date": "08/2020", "site": "Left deltoid IM", "lot": "TA188R", "mfr": "Sanofi" }
  ],
  "familyHistory": [
    "Mother (age 58): Sickle cell trait, hypertension",
    "Father (age 61): Type 2 Diabetes, CAD — stent at age 55",
    "Brother (age 26): Sickle cell disease (HbSS) — managed with hydroxyurea",
    "No family history of malignant hyperthermia or myopathies"
  ],
  "socialHistory": [
    ["Occupation", "Personal trainer at local gym"],
    ["Marital", "Single; lives with roommate"],
    ["Tobacco", "Never"],
    ["Alcohol", "Social — 2-3 drinks on weekends; reports drinking 'a lot' with friends at cookout before workout"],
    ["Drugs", "Denies anabolic steroids; uses creatine and protein supplements"],
    ["Exercise", "CrossFit 5x/week usually; DECONDITONED past 2 months due to knee injury; returned to full-intensity outdoor workout today in 92°F heat"],
    ["Housing", "Apartment with roommate"],
    ["Safety", "No firearms"],
    ["Advance Directive", "None"]
  ],
  "meta": {
    "caseId": "rhabdomyolysisinduced-hyperkalemia",
    "diagnosis": "Severe Exertional Rhabdomyolysis (CK 84,200) with Hyperkalemia (6.8), Pigment Nephropathy/AKI, and Contributing Sickle Cell Trait in Heat + Deconditioning",
    "acuity": 2,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "renal"
  }
};
