// Virtual EMR Case: Gas Gangrene (Clostridial Myonecrosis)
// Variant: gas-gangrene | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Howard Prescott",
    "dob": "10/30/1956",
    "age": 69,
    "sex": "Male",
    "mrn": "NSU-2025-41460",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B",
    "pcp": "Dr. Catherine Brennan, MD",
    "pharmacy": "Walgreens — 1620 S Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "812 SE 3rd Ave, Fort Lauderdale, FL 33316",
    "phone": "(954) 555-2847",
    "email": "h.prescott56@email.com",
    "emergencyContact": {
      "name": "Linda Prescott (Wife)",
      "phone": "(954) 555-2860"
    }
  },
  "problems": [
    {
      "problem": "Type 2 Diabetes Mellitus with Peripheral Neuropathy",
      "icd": "E11.42",
      "onset": "2004",
      "status": "Active",
      "notes": "Poorly controlled; A1c 9.8; bilateral distal symmetric neuropathy — cannot feel feet; last podiatry visit overdue by 8 months"
    },
    {
      "problem": "Peripheral Arterial Disease",
      "icd": "I73.9",
      "onset": "2020",
      "status": "Active",
      "notes": "ABI 0.62 right, 0.58 left; claudication at 1 block; vascular surgery consulted — not a surgical candidate due to diffuse disease"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3b",
      "icd": "N18.32",
      "onset": "2021",
      "status": "Active",
      "notes": "eGFR 36; diabetic nephropathy"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2002",
      "status": "Active",
      "notes": "On amlodipine + losartan"
    },
    {
      "problem": "Diabetic Foot Ulcer — Right Plantar (Chronic, Non-Healing)",
      "icd": "L97.519",
      "onset": "2025",
      "status": "Active",
      "notes": "Present x 4 months; Wagner Grade 2; treated with wound care and offloading; poor adherence to wound clinic visits; last debrided 01/2026"
    },
    {
      "problem": "Obesity, BMI 34.8",
      "icd": "E66.01",
      "onset": "2008",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Insulin Glargine 40 units QHS",
      "sig": "Inject 40 units subcutaneously at bedtime",
      "prescriber": "Dr. Brennan",
      "start": "06/2016",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Insulin Lispro sliding scale with meals",
      "sig": "Inject per sliding scale before meals",
      "prescriber": "Dr. Brennan",
      "start": "01/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Losartan 100mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "04/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "09/2014",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Brennan",
      "start": "02/2008",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Gabapentin 600mg TID",
      "sig": "Take 1 tablet by mouth three times daily",
      "prescriber": "Dr. Brennan",
      "start": "11/2019",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Cilostazol 100mg BID",
      "sig": "Take 1 tablet by mouth twice daily, 30 minutes before or 2 hours after meals",
      "prescriber": "Dr. Lee (Vascular Surgery)",
      "start": "08/2020",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Anaphylaxis as child — hives, throat swelling, ER visit",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/25/2026",
      "bp": "88/52",
      "hr": 128,
      "rr": 28,
      "temp": "103.8°F",
      "spo2": "91%",
      "wt": "240 lbs",
      "ht": "5'10\"",
      "bmi": 34.4,
      "setting": "ED"
    },
    {
      "date": "01/14/2026",
      "bp": "148/88",
      "hr": 86,
      "rr": 18,
      "temp": "99.2°F",
      "spo2": "96%",
      "wt": "242 lbs",
      "ht": "5'10\"",
      "bmi": 34.7,
      "setting": "Wound Clinic"
    },
    {
      "date": "10/22/2025",
      "bp": "152/92",
      "hr": 82,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "244 lbs",
      "ht": "5'10\"",
      "bmi": 35.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/14/2026",
      "type": "Specialist",
      "provider": "Dr. Maria Santos, DPM (Podiatric Wound Care)",
      "cc": "Diabetic foot ulcer — follow-up, debridement",
      "hpi": "69M with T2DM (A1c 9.8), PAD, neuropathy presents for wound care follow-up. Right plantar ulcer first noted 09/2025, Wagner Grade 2. Has missed last 2 wound clinic appointments. Ulcer has enlarged despite offloading boot (admits not wearing consistently). No fever, but notes increasing drainage — now malodorous. Wound probes to bone not performed today. Reports no pain in the foot (neuropathy).",
      "exam": "Right foot: 3.2 x 2.8 cm ulcer plantar surface beneath 2nd-3rd metatarsal heads. Fibrinous base with perilesional erythema extending 1.5 cm. Malodorous purulent drainage. No crepitus. Dorsalis pedis pulse barely palpable. Posterior tibial pulse absent. Monofilament testing: absent bilat feet.",
      "assessment": "1. Diabetic foot ulcer — worsening, now appears infected (Grade 2 → 3)\n2. PAD — contributing to poor healing\n3. Non-adherence with offloading and wound care visits",
      "plan": "1. Sharp debridement performed in clinic\n2. Wound culture obtained\n3. Started empiric oral antibiotics: clindamycin 300mg TID + ciprofloxacin 500mg BID (penicillin allergy)\n4. X-ray right foot to evaluate for osteomyelitis\n5. Strict non-weight-bearing with total contact cast\n6. Follow-up 1 week — warned to go to ED if fevers, spreading redness, or worsening"
    },
    {
      "id": "V002",
      "date": "10/22/2025",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "Diabetes follow-up, foot ulcer, medication refills",
      "hpi": "69M with poorly controlled T2DM, PAD, CKD presents for follow-up. A1c 9.8 (up from 8.6). Admits poor dietary adherence and inconsistent insulin use. Reports new ulcer on right foot sole x 3 weeks — small, painless. Not using offloading device. Podiatry referral placed.",
      "exam": "Obese male. CV: RRR. Lungs: CTAB. Ext: Right plantar ulcer ~1.5 cm, shallow, clean base. DP pulse faint bilat. No erythema or drainage at this time.",
      "assessment": "1. T2DM — worsening, A1c 9.8\n2. New diabetic foot ulcer — Wagner Grade 1-2\n3. PAD — stable, limiting healing\n4. CKD 3b — stable",
      "plan": "1. Increase insulin glargine from 36 to 40 units\n2. Add mealtime sliding scale lispro\n3. STAT podiatry referral for wound management\n4. Reinforce foot care education\n5. Return 6 weeks"
    }
  ],
  "labs": [
    {
      "date": "01/14/2026",
      "time": "11:00",
      "orderedBy": "Dr. Santos (Wound Clinic)",
      "collected": "01/14/2026 11:15",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2026-011442",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "12.4", "unit": "K/uL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "11.6", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "35.2", "unit": "%", "range": "38.3-48.6", "flag": "L" },
            { "test": "Platelets", "value": "348", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "268", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "38", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "2.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "eGFR", "value": "36", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Sodium", "value": "136", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.8", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            { "test": "HbA1c", "value": "9.8", "unit": "%", "range": "<5.7", "flag": "H" }
          ]
        },
        {
          "name": "INFLAMMATORY MARKERS",
          "results": [
            { "test": "ESR", "value": "62", "unit": "mm/hr", "range": "0-20", "flag": "H" },
            { "test": "CRP", "value": "4.2", "unit": "mg/dL", "range": "<0.5", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/14/2026",
      "study": "X-RAY RIGHT FOOT 3-VIEW",
      "accession": "IMG-2026-011448",
      "status": "FINAL",
      "orderedBy": "Dr. Santos (Wound Clinic)",
      "readBy": "Dr. Patricia Gomez, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "STAT",
      "clinical": "Diabetic foot ulcer, worsening — evaluate for osteomyelitis and gas",
      "technique": "AP, oblique, and lateral views of the right foot obtained.",
      "findings": "Soft tissues: Moderate soft tissue swelling plantar midfoot. No definite subcutaneous gas on plain film (CT recommended if clinical concern persists).\n\nBones: Periosteal reaction along 2nd and 3rd metatarsal shafts — suspicious for early osteomyelitis. No fractures. Charcot changes not identified.\n\nJoints: Mild 1st MTP degenerative changes. No joint effusions.",
      "impression": "1. Periosteal reaction 2nd-3rd metatarsals — concerning for early osteomyelitis in setting of diabetic foot ulcer.\n2. Soft tissue swelling without definite gas on plain film.\n3. If clinical concern for deep infection, recommend MRI or CT for further evaluation.",
      "dictated": "01/14/2026 14:00",
      "verified": "01/14/2026 15:30"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-8514", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Moderna)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-1422", "mfr": "Moderna" },
    { "vaccine": "Tdap", "date": "03/2022", "site": "Left deltoid IM", "lot": "TD22-180", "mfr": "GSK" },
    { "vaccine": "Prevnar 20", "date": "06/2024", "site": "Left deltoid IM", "lot": "PV20-890", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (1/2)", "date": "08/2024", "site": "Right deltoid IM", "lot": "SX24-404", "mfr": "GSK" },
    { "vaccine": "Shingrix (2/2)", "date": "10/2024", "site": "Right deltoid IM", "lot": "SX24-562", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Father: T2DM, bilateral BKA at age 72, deceased at 76 (MI)",
    "Mother: Hypertension, alive at 90",
    "Brother: T2DM, alive at 72",
    "Sister: Healthy, alive at 66"
  ],
  "socialHistory": [
    ["Occupation", "Retired electrician; on disability (PAD, neuropathy, unable to stand/walk for prolonged periods)"],
    ["Marital", "Married 42 years"],
    ["Tobacco", "Former — 25 pack-years; quit 2010"],
    ["Alcohol", "2-3 beers daily (wife reports possibly more)"],
    ["Drugs", "Denies"],
    ["Exercise", "Minimal — wheelchair for distances; limited ambulation at home"],
    ["Housing", "Single-story home with wife; ramp installed at entrance"],
    ["Safety", "Fall risk; uses walker at home; grab bars in bathroom; no firearms"],
    ["Advance Directive", "Full code; DPOA designated (wife Linda); discussed but deferred palliative care"]
  ],
  "meta": {
    "caseId": "gas-gangrene",
    "diagnosis": "Gas Gangrene (Clostridial Myonecrosis — Right Lower Extremity, Originating from Diabetic Foot Ulcer in Setting of PAD and Poorly Controlled Diabetes)",
    "acuity": 1,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "infectious"
  }
};
