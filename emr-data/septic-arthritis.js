/* emr-data/septic-arthritis.js
   Septic Arthritis — Must-Not-Miss in Acute Joint Pain
   Category: musculoskeletal | Acuity: ESI-2
   Settings: ED, Floor
   Priority 2 gap fill — musculoskeletal (currently 2 cases, need 3 more)
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Carlos Mendoza",
      "patientHPI": "My right knee is killing me — it blew up overnight and it's hot and red and I can't bend it at all. I have gout and I thought this was another attack but this feels different. I also have a fever.",
      "dob": "05/11/1962",
      "age": "63",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-445512",
      "language": "English/Spanish",
      "race": "Hispanic/Latino",
      "phone": "(210) 555-5512",
      "email": "c.mendoza@email.com",
      "address": "4421 Fredericksburg Rd, San Antonio, TX 78201",
      "insurance": "Medicaid",
      "pcp": "Dr. Maria Gonzalez, MD",
      "pharmacy": "HEB Pharmacy — Fredericksburg",
      "emergencyContact": {
        "name": "Rosa Mendoza",
        "phone": "(210) 555-7893",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      { "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }
    ],
    "immunizations": [
      { "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }
    ],
    "familyHistory": [
      "Father: gout, hypertension",
      "Mother: Type 2 Diabetes"
    ],
    "socialHistory": [
      ["Living", "Lives with spouse"],
      ["Alcohol", "Heavy — 8-12 beers per day (major gout risk factor and immunosuppressant)"],
      ["Smoking", "Current — 30 pack-year history"],
      ["Work", "Retired — former construction worker"],
      ["Recent procedure", "Right knee cortisone injection 10 days ago at pain clinic"],
      ["Skin", "Psoriasis plaques bilateral elbows and knees — possible portal of entry for bacteria"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "63M with gout, DM2, psoriasis — acute monoarticular right knee swelling, fever 38.8°C, WBC 22k — h/o corticosteroid injection 10 days ago — must rule out septic arthritis",
        "diagnosis": "Septic Arthritis — Right Knee (Staphylococcus aureus)"
      },
      "problems": [
        { "id": "prob-1", "description": "Septic arthritis right knee — WBC joint fluid 92,000 with 94% PMNs, GPC clusters on Gram stain. Risk factors: cortisone injection 10 days ago, DM2, alcohol use, psoriatic skin lesions.", "status": "Active", "onset": "Acute", "icd10": "M00.861" },
        { "id": "prob-2", "description": "Fever 38.8°C with systemic inflammatory response — may progress to sepsis", "status": "Active", "onset": "Acute", "icd10": "R50.9" },
        { "id": "prob-3", "description": "Gout — known h/o, taking allopurinol. Crystal arthropathy is in differential but joint fluid Gram stain positive — BOTH can coexist", "status": "Chronic", "onset": "Chronic", "icd10": "M10.062" },
        { "id": "prob-4", "description": "Type 2 Diabetes — HbA1c 9.2% (poorly controlled) — immunosuppression predisposes to infection", "status": "Chronic", "onset": "Chronic", "icd10": "E11.9" },
        { "id": "prob-5", "description": "Psoriasis — plaques bilateral elbows/knees — potential bacterial portal of entry", "status": "Chronic", "onset": "Chronic", "icd10": "L40.0" }
      ],
      "medications": [
        { "id": "med-1", "name": "Allopurinol", "dose": "300mg", "route": "PO", "frequency": "Daily", "status": "Active", "prescriber": "Dr. Maria Gonzalez, MD" },
        { "id": "med-2", "name": "Metformin", "dose": "1000mg", "route": "PO", "frequency": "BID", "status": "Active", "prescriber": "Dr. Maria Gonzalez, MD" },
        { "id": "med-3", "name": "Lisinopril", "dose": "10mg", "route": "PO", "frequency": "Daily", "status": "Active", "prescriber": "Dr. Maria Gonzalez, MD" },
        { "id": "med-4", "name": "Triamcinolone acetonide", "dose": "40mg", "route": "Intra-articular", "frequency": "Given 10 days ago — one-time injection", "status": "Completed — RISK FACTOR for septic arthritis", "prescriber": "Pain Clinic" }
      ],
      "vitals": [
        { "date": "03/15/2026", "time": "13:00", "bp": "148/92", "hr": "108", "rr": "20", "temp": "38.8°C", "spo2": "97%", "pain": "9/10" }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Acute right knee monoarthritis with fever — must rule out septic arthritis",
          "hpi": "63-year-old male with Type 2 Diabetes, gout, and psoriasis presents with 24-hour history of progressively worsening right knee pain, swelling, warmth, and erythema with inability to bear weight. He had a corticosteroid injection in the right knee 10 days ago at a pain clinic. He has had multiple prior gout flares but states this feels different — the fever and severity concern him.\n\nKEY DIAGNOSTIC QUESTION: Gout vs. Septic Arthritis vs. Both?\n\nPOINTS FAVORING SEPTIC ARTHRITIS:\n✓ Fever 38.8°C (rare in gout without infection)\n✓ Recent intra-articular injection (major risk factor — introduces bacteria)\n✓ Poorly controlled DM2 (immunosuppression)\n✓ Psoriasis plaques as potential bacterial portal\n✓ Systemic toxicity (WBC 22k, tachycardia)\n✓ Rate of progression (24h) and severity\n\nPOINTS FAVORING GOUT:\n✓ Known gout history\n✓ Prior knee involvement\n✓ Elevated uric acid (9.8)\n\nCONCLUSION: Gout and septic arthritis can COEXIST. You cannot diagnose gout flare when septic arthritis is possible — JOINT ASPIRATION IS MANDATORY.\n\nNEVER give corticosteroids empirically when septic arthritis is on the differential — this will make a joint infection dramatically worse.",
          "assessment": "Cannot distinguish gout from septic arthritis clinically — joint aspiration mandatory. Sending for cell count, crystal analysis (polarized microscopy), Gram stain, culture. Given positive Gram stain (GPC clusters = S. aureus), starting empiric antibiotics. Orthopedics for emergent joint washout if confirmed septic arthritis — joint destruction occurs within 24-48 hours without treatment.",
          "plan": "JOINT ASPIRATION (already performed — results below). Blood cultures x2. Start vancomycin empirically (covers MRSA) pending cultures. Orthopedics consult — emergent arthroscopic washout for confirmed bacterial septic arthritis. HOLD NSAIDs and colchicine — if this is septic arthritis, they will mask fever and delay diagnosis. NO STEROIDS — will worsen infection. Hold allopurinol if acute flare component. Admit to orthopedics/medicine. Strict I&Os (DM management during sepsis). ID consult for antibiotic stewardship."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "13:30",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-445512",
          "collected": "03/15/2026 13:25",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood and Synovial Fluid",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                { "test": "WBC", "value": "22.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
                { "test": "Neutrophils", "value": "91", "unit": "%", "range": "45-75", "flag": "H" },
                { "test": "Bands", "value": "8", "unit": "%", "range": "0-6", "flag": "H" },
                { "test": "Hemoglobin", "value": "12.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" }
              ]
            },
            {
              "name": "INFLAMMATORY MARKERS",
              "results": [
                { "test": "CRP", "value": "218", "unit": "mg/L", "range": "<10", "flag": "H" },
                { "test": "ESR", "value": "88", "unit": "mm/hr", "range": "<20", "flag": "H" },
                { "test": "Procalcitonin", "value": "2.1", "unit": "ng/mL", "range": "<0.25", "flag": "H" },
                { "test": "Uric Acid", "value": "9.8", "unit": "mg/dL", "range": "3.5-7.2", "flag": "H" }
              ]
            },
            {
              "name": "SYNOVIAL FLUID ANALYSIS — RIGHT KNEE",
              "results": [
                { "test": "Appearance", "value": "Turbid, yellow", "unit": "", "range": "Clear, straw", "flag": "H" },
                { "test": "WBC (synovial)", "value": "92,000", "unit": "cells/µL", "range": "<200 normal; >50,000 → septic until proven otherwise", "flag": "H" },
                { "test": "PMN differential", "value": "94%", "unit": "", "range": "<25%", "flag": "H" },
                { "test": "Gram Stain", "value": "Gram-positive cocci in clusters — consistent with Staphylococcus", "unit": "", "range": "No organisms", "flag": "H" },
                { "test": "Culture", "value": "Pending 24-48h", "unit": "", "range": "No growth", "flag": "" },
                { "test": "Monosodium Urate Crystals", "value": "Present — STRONGLY NEGATIVE birefringent needles", "unit": "", "range": "Absent", "flag": "H" },
                { "test": "Crystal Interpretation", "value": "Gout crystals PRESENT but does NOT exclude septic arthritis — both can coexist", "unit": "", "range": "", "flag": "H" }
              ]
            },
            {
              "name": "METABOLIC",
              "results": [
                { "test": "Glucose", "value": "224", "unit": "mg/dL", "range": "70-100", "flag": "H" },
                { "test": "HbA1c", "value": "9.2", "unit": "%", "range": "<5.7", "flag": "H" },
                { "test": "Creatinine", "value": "1.1", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "type": "Right Knee X-Ray AP and Lateral",
          "date": "03/15/2026",
          "time": "13:15",
          "orderedBy": "Dr. Attending",
          "findings": "Joint space preserved — no bony erosion (early infection; osteomyelitis not yet evident). Significant soft tissue swelling. No chondrocalcinosis (argues against pseudogout as sole diagnosis). No fracture. Periarticular osteopenia.",
          "impression": "No bony destruction yet — early septic arthritis. Absence of chondrocalcinosis makes pseudogout less likely. Soft tissue swelling consistent with septic arthritis or gout.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 2 — S. aureus septic arthritis confirmed, post-arthroscopic washout, IV vancomycin",
        "diagnosis": "Septic Arthritis Right Knee — S. aureus (MSSA) — Post-Arthroscopic Washout"
      },
      "problems": [
        { "id": "prob-1", "description": "Septic arthritis right knee — S. aureus (MSSA) confirmed on culture. Post-arthroscopic washout yesterday. Transitioning to nafcillin (MSSA confirmed — vancomycin inferior to beta-lactam for MSSA).", "status": "Active", "onset": "Acute", "icd10": "M00.861" },
        { "id": "prob-2", "description": "Concurrent gout flare — crystals confirmed on synovial fluid. Both conditions present. Managing gout AFTER infection controlled.", "status": "Active", "onset": "Acute", "icd10": "M10.062" },
        { "id": "prob-3", "description": "DM2 — hyperglycemia worsening with infection. Insulin sliding scale started.", "status": "Active", "onset": "Chronic", "icd10": "E11.9" }
      ],
      "medications": [
        { "id": "med-1", "name": "Nafcillin", "dose": "2g IV", "route": "IV", "frequency": "Q4H — MSSA confirmed, superior to vancomycin", "status": "Active — switched from vancomycin", "prescriber": "Dr. ID Attending" },
        { "id": "med-2", "name": "Insulin Lispro", "dose": "Per sliding scale", "route": "SQ", "frequency": "With meals + Q6H correction", "status": "Active", "prescriber": "Dr. Medicine Attending" },
        { "id": "med-3", "name": "Colchicine", "dose": "0.6mg", "route": "PO", "frequency": "BID — started after infection controlled, for gout component", "status": "Active — started day 2", "prescriber": "Dr. Medicine Attending" }
      ],
      "vitals": [
        { "date": "03/16/2026", "time": "06:00", "bp": "138/86", "hr": "88", "rr": "16", "temp": "37.6°C", "spo2": "98%", "pain": "5/10" }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Orthopedics + ID Progress Note",
          "date": "03/16/2026",
          "provider": "Dr. Orthopedics + Dr. ID Attending",
          "cc": "Post-op day 1 arthroscopic washout — S. aureus (MSSA) septic arthritis",
          "hpi": "Patient underwent arthroscopic joint washout and debridement yesterday evening. OR cultures confirm S. aureus — full sensitivities pending, methicillin-susceptible (MSSA) by beta-lactamase testing. Transitioning from vancomycin to nafcillin — nafcillin is SUPERIOR to vancomycin for MSSA (better tissue penetration, lower MIC, lower relapse rate).\n\nKEY TEACHING: ALWAYS de-escalate to nafcillin/oxacillin when MSSA is confirmed — vancomycin is an inferior drug for MSSA and should NOT be continued simply because it was started empirically.\n\nPlanned antibiotic duration: 4-6 weeks total (2 weeks IV then oral if tolerated — debate ongoing, some guidelines support oral step-down with highly bioavailable agents).\n\nJoint prognosis: Excellent if treated promptly (< 72h). Delay in treatment leads to cartilage destruction and permanent joint damage.",
          "assessment": "S. aureus septic arthritis post-arthroscopic washout, day 2. Fever improving. CRP trending down. Will need 4-6 weeks antibiotics total. ID to determine oral step-down options (trimethoprim-sulfamethoxazole or clindamycin if susceptible).",
          "plan": "Continue nafcillin. Repeat joint aspiration if fever continues or WBC not trending down. Physical therapy to preserve joint function. ID follow-up at 2 weeks. Total 4-6 weeks antibiotics. Gout management after infection resolved — optimize allopurinol, dietary counseling, urate-lowering therapy. DM optimization — refer endocrinology for insulin regimen."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. ID Attending",
          "accession": "LAB-445513",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL — TREND",
              "results": [
                { "test": "WBC", "value": "18.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
                { "test": "Neutrophils", "value": "82", "unit": "%", "range": "45-75", "flag": "H" }
              ]
            },
            {
              "name": "SYNOVIAL FLUID CULTURE — FINAL",
              "results": [
                { "test": "Culture Result", "value": "Staphylococcus aureus — MSSA (methicillin-susceptible)", "unit": "", "range": "No growth", "flag": "H" },
                { "test": "Susceptibilities", "value": "Susceptible: nafcillin, clindamycin, TMP-SMX, doxycycline. Resistant: None.", "unit": "", "range": "", "flag": "" }
              ]
            },
            {
              "name": "INFLAMMATORY MARKERS — TREND",
              "results": [
                { "test": "CRP", "value": "148", "unit": "mg/L", "range": "<10", "flag": "H" },
                { "test": "ESR", "value": "72", "unit": "mm/hr", "range": "<20", "flag": "H" }
              ]
            }
          ]
        }
      ],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "StatPearls-SepticArthritis",
      "title": "Septic Arthritis",
      "authors": "Horowitz DL, Katzap E, Horowitz S, Bhargava M, Barber M",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK470202/",
      "openAccess": true,
      "validates": ["Diagnostic criteria", "Synovial fluid interpretation (WBC >50,000)", "Coexistence with crystal arthropathy", "Antibiotic selection (nafcillin for MSSA)", "Surgical washout indications"]
    },
    {
      "id": "StatPearls-Gout",
      "title": "Gout",
      "authors": "Fenando A, Rednam M, Gujarathi R, Widrich J",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK546606/",
      "openAccess": true,
      "validates": ["Gout vs septic arthritis differentiation", "Crystal arthropathy coexistence with infection", "Management of gout flare during active infection"]
    }
  ]
};
