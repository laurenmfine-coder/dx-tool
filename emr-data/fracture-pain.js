// Virtual EMR Case: Fracture Pain
// Variant: fracture-pain | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Evelyn Chambers",
    "dob": "07/30/1952",
    "age": 72,
    "sex": "Female",
    "mrn": "RDX-2025-58316",
    "pronouns": "She/Her",
    "insurance": "Medicare Part B with Medigap Plan F",
    "pcp": "Dr. David Park, MD",
    "pharmacy": "Publix Pharmacy — 4900 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "2840 SW 73rd Way, Riverside, FL 33100",
    "phone": "(954) 555-7248",
    "email": "e.chambers52@email.com",
    "emergencyContact": {
      "name": "Katherine Chambers (Daughter)",
      "phone": "(954) 555-7265"
    }
  },
  "problems": [
    {
      "problem": "Osteoporosis — Post-menopausal",
      "icd": "M81.0",
      "onset": "2016",
      "status": "Active",
      "notes": "DEXA T-score -2.8 lumbar spine, -2.5 femoral neck; on alendronate; prior vertebral compression fracture T12 (2020)"
    },
    {
      "problem": "Prior Vertebral Compression Fracture — T12",
      "icd": "M80.08XA",
      "onset": "2020",
      "status": "Resolved",
      "notes": "Osteoporotic compression fracture T12; managed conservatively with brace and pain management; healed"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2008",
      "status": "Active",
      "notes": "On amlodipine"
    },
    {
      "problem": "Gastroesophageal Reflux Disease",
      "icd": "K21.0",
      "onset": "2012",
      "status": "Active",
      "notes": "On omeprazole"
    },
    {
      "problem": "Vitamin D Deficiency — Treated",
      "icd": "E55.9",
      "onset": "2016",
      "status": "Active",
      "notes": "On cholecalciferol 2000 IU daily; last level 36 ng/mL"
    }
  ],
  "medications": [
    {
      "name": "Alendronate 70mg weekly",
      "sig": "Take 1 tablet by mouth weekly on the same day, first thing in morning with full glass of water; remain upright 30 minutes",
      "prescriber": "Dr. Park",
      "start": "06/2017",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Park",
      "start": "03/2010",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily 30 minutes before breakfast",
      "prescriber": "Dr. Park",
      "start": "06/2013",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Calcium Carbonate 600mg with Vitamin D 400 IU BID",
      "sig": "Take 1 tablet by mouth twice daily with meals; separate from alendronate by 2 hours",
      "prescriber": "Dr. Park",
      "start": "06/2017",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Cholecalciferol 2000 IU daily",
      "sig": "Take 1 capsule by mouth daily",
      "prescriber": "Dr. Park",
      "start": "01/2017",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Severe nausea and vomiting",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "10/16/2024",
      "bp": "132/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "128 lbs",
      "ht": "5'3\"",
      "bmi": 22.7,
      "setting": "PCP Office"
    },
    {
      "date": "04/10/2024",
      "bp": "130/74",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "130 lbs",
      "ht": "5'3\"",
      "bmi": 23.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/16/2024",
      "type": "Primary Care",
      "provider": "Dr. David Park, MD",
      "cc": "Follow-up: osteoporosis, HTN",
      "hpi": "72-year-old female with osteoporosis and prior T12 compression fracture for follow-up. On alendronate x 7 years — discussed drug holiday vs continuation; elected to continue given prior fragility fracture. Reports occasional mid-back pain at T12 level, improved from prior. Vitamin D level normalized. Has been walking regularly but reports unsteadiness on uneven surfaces. Fall risk screening: Timed Up and Go 14 seconds (borderline). Two near-falls in past 3 months — tripped on rug, caught herself on furniture.",
      "exam": "General: Thin elderly female, NAD, mild thoracic kyphosis. Spine: Tenderness over T12 spinous process mild. No new step-off. MSK: Gait mildly unsteady — narrow base, slight sway. Romberg borderline positive. Extremities: No edema.",
      "assessment": "1. Osteoporosis — on alendronate; discussing drug holiday at next visit\n2. Prior T12 compression fracture — stable\n3. Fall risk — increasing; near-falls reported\n4. HTN — controlled\n5. GERD — stable",
      "plan": "1. Continue alendronate — plan DEXA in 6 months\n2. Fall prevention: remove throw rugs, grab bars in bathroom, nightlights, wear supportive shoes\n3. Physical therapy referral for balance and strengthening\n4. Calcium/Vitamin D — continue\n5. IF FALL WITH HIP/WRIST/BACK PAIN: ED immediately — high fracture risk\n6. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "10/16/2024",
      "time": "08:30",
      "orderedBy": "Dr. David Park, MD",
      "collected": "10/16/2024 08:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-101615",
      "status": "Final",
      "specimenType": "Serum",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "METABOLIC",
          "results": [
            { "test": "Calcium", "value": "9.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "Phosphorus", "value": "3.6", "unit": "mg/dL", "range": "2.5-4.5", "flag": "" },
            { "test": "Vitamin D, 25-OH", "value": "36", "unit": "ng/mL", "range": "30-100", "flag": "" },
            { "test": "Alk Phos", "value": "82", "unit": "U/L", "range": "44-147", "flag": "" },
            { "test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2020",
      "study": "X-RAY THORACIC SPINE — AP AND LATERAL",
      "accession": "IMG-2020-04121",
      "status": "FINAL",
      "orderedBy": "Dr. David Park, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "68F back pain, known osteoporosis — evaluate for compression fracture.",
      "technique": "AP and lateral views, thoracic spine.",
      "findings": "T12: Anterior wedge compression fracture with approximately 30% loss of anterior vertebral body height. No retropulsed fragment. No canal compromise on lateral view.\\n\\nT11, L1: Mild anterior height loss suggesting early compression deformity.\\n\\nDiffuse osteopenia. Multilevel degenerative changes.",
      "impression": "1. T12 anterior wedge compression fracture — likely osteoporotic.\\n2. Mild compression deformities T11 and L1.\\n3. Diffuse osteopenia.\\n4. Recommend DEXA and osteoporosis management.",
      "dictated": "04/12/2020 11:00",
      "verified": "04/12/2020 13:00"
    },
    {
      "date": "06/2022",
      "study": "DEXA BONE DENSITY SCAN",
      "accession": "IMG-2022-06181",
      "status": "FINAL",
      "orderedBy": "Dr. David Park, MD",
      "readBy": "Dr. Amanda Foster, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "70F osteoporosis on alendronate — surveillance DEXA.",
      "technique": "Dual-energy X-ray absorptiometry — lumbar spine (L1-L4) and bilateral proximal femora.",
      "findings": "Lumbar spine (L1-L4): BMD 0.792 g/cm². T-score -2.6.\\n\\nLeft femoral neck: BMD 0.658 g/cm². T-score -2.5.\\n\\nRight femoral neck: BMD 0.670 g/cm². T-score -2.4.\\n\\nNote: T12 excluded from lumbar analysis due to compression fracture artifact.",
      "impression": "1. Osteoporosis — lumbar spine T-score -2.6, femoral neck -2.5.\\n2. Minimal change from prior DEXA 2019 (T-score was -2.8 spine, -2.5 hip).\\n3. Continue bisphosphonate therapy; consider drug holiday evaluation after 10 years of treatment.",
      "dictated": "06/18/2022 14:00",
      "verified": "06/18/2022 15:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/02/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD092",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/16/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-680",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "01/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-042",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-310",
      "mfr": "GSK"
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
    "Mother: Osteoporosis, hip fracture at 78, deceased at 84",
    "Father: CAD, deceased at 70",
    "Sister: Osteopenia, alive at 68",
    "No family history of osteomalacia or metabolic bone disease"
  ],
  "socialHistory": [
    ["Occupation", "Retired librarian"],
    ["Marital", "Widowed (husband deceased 2018); lives alone"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Occasional glass of wine with dinner"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 20 min daily; tai chi 2x/week"],
    ["Housing", "Single-story condominium; lives alone; daughter visits weekly"],
    ["Safety", "Throw rugs removed; grab bars in bathroom; wears medic alert pendant"],
    ["Advance Directive", "Living will on file; HCP: daughter Katherine Chambers; Full code"]
  ],
  "meta": {
    "caseId": "fracture-pain",
    "diagnosis": "Distal Radius Fracture (Colles' Fracture) — Osteoporotic Fragility Fracture After Fall",
    "acuity": 3,
    "presentation": "Musculoskeletal Emergency",
    "category": "orthopedic"
  }
};
