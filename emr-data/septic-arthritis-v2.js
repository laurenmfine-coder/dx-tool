// Virtual EMR Case: Septic Arthritis (v2)
// Variant: septic-arthritis-v2 | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Claudette Jean-Pierre",
    "dob": "05/30/1958",
    "age": 66,
    "sex": "Female",
    "mrn": "RDX-2025-81423",
    "pronouns": "She/Her",
    "insurance": "Medicare Part B",
    "pcp": "Dr. William Rogers, MD",
    "pharmacy": "Publix Pharmacy — 3000 NW 9th Ave, Fort Lauderdale, FL",
    "language": "English, Haitian Creole",
    "race": "Black/African American",
    "address": "2740 NW 15th St, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-2194",
    "email": "c.jeanpierre58@email.com",
    "emergencyContact": {
      "name": "Jean-Marc Jean-Pierre (Son)",
      "phone": "(954) 555-2210"
    }
  },
  "problems": [
    {
      "problem": "Rheumatoid Arthritis — Seropositive",
      "icd": "M05.79",
      "onset": "2012",
      "status": "Active",
      "notes": "RF positive, anti-CCP positive; on methotrexate and hydroxychloroquine; disease well-controlled (DAS28 2.8); annual eye exams for HCQ toxicity screening"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.9",
      "onset": "2016",
      "status": "Active",
      "notes": "A1c 7.0%; on metformin"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2010",
      "status": "Active",
      "notes": "On lisinopril"
    },
    {
      "problem": "Osteoporosis — Steroid-Induced (History)",
      "icd": "M81.0",
      "onset": "2018",
      "status": "Active",
      "notes": "History of chronic prednisone use for RA (2012-2018); now off steroids; DEXA T-score -2.3 femoral neck; on alendronate"
    },
    {
      "problem": "Left Knee Total Arthroplasty",
      "icd": "Z96.652",
      "onset": "2020",
      "status": "Active",
      "notes": "Left TKA for RA-related erosive arthropathy; uneventful recovery; functioning well; annual ortho follow-up"
    }
  ],
  "medications": [
    {
      "name": "Methotrexate 15mg PO weekly (Mondays)",
      "sig": "Take 15mg by mouth once weekly on Monday; take folic acid on non-MTX days",
      "prescriber": "Dr. Patel (Rheumatology)",
      "start": "06/2014",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Folic Acid 1mg daily (except Mondays)",
      "sig": "Take 1 tablet by mouth daily except on methotrexate day",
      "prescriber": "Dr. Patel (Rheumatology)",
      "start": "06/2014",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Hydroxychloroquine 200mg BID",
      "sig": "Take 1 tablet by mouth twice daily with food",
      "prescriber": "Dr. Patel (Rheumatology)",
      "start": "06/2013",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Rogers",
      "start": "03/2017",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Rogers",
      "start": "06/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Alendronate 70mg weekly (Fridays)",
      "sig": "Take 1 tablet by mouth weekly on Friday; first thing in morning with full glass of water; remain upright 30 minutes",
      "prescriber": "Dr. Rogers",
      "start": "06/2019",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Anaphylaxis — throat swelling, hypotension, urticaria (2005)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/14/2024",
      "bp": "130/78",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "165 lbs",
      "ht": "5'4\"",
      "bmi": 28.3,
      "setting": "Rheumatology"
    },
    {
      "date": "05/22/2024",
      "bp": "128/76",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "163 lbs",
      "ht": "5'4\"",
      "bmi": 28.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/14/2024",
      "type": "Rheumatology",
      "provider": "Dr. Raj Patel, MD (Rheumatology)",
      "cc": "RA follow-up; medication monitoring",
      "hpi": "66-year-old female with seropositive RA on methotrexate/HCQ for follow-up. Disease well-controlled — DAS28 2.8 (low disease activity). No joint flares. Left TKA functioning well — no pain, full ROM. Reports occasional right wrist stiffness in mornings (~15 min duration). A recent dental procedure (root canal, 3 weeks ago) went well — no complications. Immunosuppression risk counseled at each visit.",
      "exam": "General: NAD. MSK: Hands — mild MCP synovitis right 2nd/3rd (chronic, stable); no new swelling. Wrists — mild right wrist tenderness on palpation; no effusion. Left knee (TKA) — well-aligned, stable, no warmth. Right knee — trace effusion, no warmth. Feet — no synovitis.",
      "assessment": "1. RA — low disease activity on MTX/HCQ; stable\n2. Left TKA — functioning well\n3. Right wrist stiffness — chronic, stable\n4. Monitoring: MTX hepatotoxicity screening, HCQ retinal screening",
      "plan": "1. Continue MTX 15mg weekly, folic acid, HCQ 200mg BID\n2. Labs: CBC, CMP, LFTs — MTX monitoring\n3. Annual ophthalmology for HCQ retinal screening (due 03/2025)\n4. IF NEW ACUTE HOT SWOLLEN JOINT: ED immediately — must rule out septic arthritis (immunosuppressed, prosthetic joint)\n5. Flu and COVID vaccines given today\n6. RTC 4 months"
    }
  ],
  "labs": [
    {
      "date": "11/14/2024",
      "time": "09:30",
      "orderedBy": "Dr. Raj Patel, MD (Rheumatology)",
      "collected": "11/14/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-111415",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "5.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "12.4", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "37.0", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "218", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "HEPATIC / METABOLIC",
          "results": [
            { "test": "ALT (SGPT)", "value": "24", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "22", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "ESR", "value": "18", "unit": "mm/hr", "range": "0-30", "flag": "" },
            { "test": "CRP", "value": "0.4", "unit": "mg/dL", "range": "<0.5", "flag": "" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            { "test": "HbA1c", "value": "7.0", "unit": "%", "range": "<5.7 normal", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/2023",
      "study": "X-RAY LEFT KNEE — AP AND LATERAL (POST-TKA)",
      "accession": "IMG-2023-03121",
      "status": "FINAL",
      "orderedBy": "Dr. Grant (Orthopedics)",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "65F post-TKA (2020) — routine surveillance.",
      "technique": "AP and lateral standing views, left knee.",
      "findings": "Total knee arthroplasty in situ. Components well-positioned. No periprosthetic lucency. No component loosening. Femoral and tibial components well-fixed. Patellar resurfacing intact.\\n\\nNo periprosthetic fracture. Soft tissues unremarkable.",
      "impression": "1. Well-positioned left TKA.\\n2. No evidence of loosening, fracture, or hardware complication.\\n3. Routine follow-up recommended.",
      "dictated": "03/12/2023 10:00",
      "verified": "03/12/2023 12:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "11/14/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD118",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/14/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-712",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-180",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-335",
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
    "Mother: RA, HTN, deceased at 80",
    "Father: T2DM, stroke, deceased at 72",
    "Sister: Lupus (SLE), alive at 63",
    "Family history significant for autoimmune disease"
  ],
  "socialHistory": [
    ["Occupation", "Retired home health aide"],
    ["Marital", "Widowed (husband deceased 2019); lives alone; son nearby"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Denies"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 20 min daily; chair yoga"],
    ["Housing", "Single-story duplex; lives alone"],
    ["Safety", "Denies IPV; no firearms; medic alert bracelet (penicillin allergy)"],
    ["Advance Directive", "Health care proxy: son Jean-Marc Jean-Pierre; Full code"]
  ],
  "meta": {
    "caseId": "septic-arthritis-v2",
    "diagnosis": "Prosthetic Joint Infection — Left Knee TKA (Staphylococcus aureus, Hematogenous Seeding Post-Dental Procedure in Immunosuppressed Host)",
    "acuity": 2,
    "presentation": "Musculoskeletal Emergency",
    "category": "infectious"
  }
};
