// Virtual EMR Case: Septic Arthritis
// Variant: septic-arthritis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Charles Baptiste",
    "dob": "05/10/1956",
    "age": 68,
    "sex": "Male",
    "mrn": "RDX-2025-48193",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B with Humana Supplemental",
    "pcp": "Dr. Jennifer Owens, MD",
    "pharmacy": "CVS Pharmacy — 4250 N State Rd 7, Lauderdale Lakes, FL",
    "language": "English, Haitian Creole",
    "race": "Black/African American",
    "address": "3215 NW 36th Ave, Lauderdale Lakes, FL 33311",
    "phone": "(954) 555-5827",
    "email": "c.baptiste56@email.com",
    "emergencyContact": {
      "name": "Marie Baptiste (Wife)",
      "phone": "(954) 555-5840"
    }
  },
  "problems": [
    {
      "problem": "Gout — Chronic Tophaceous",
      "icd": "M1A.9",
      "onset": "2010",
      "status": "Active",
      "notes": "Chronic tophaceous gout; tophi bilateral hands and left ear; target uric acid <6 on allopurinol; recurrent flares 2-3x/year; colchicine prophylaxis"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3b",
      "icd": "N18.32",
      "onset": "2019",
      "status": "Active",
      "notes": "eGFR 42; multifactorial (HTN, gout nephropathy); nephrology following"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2004",
      "status": "Active",
      "notes": "On losartan and amlodipine; avoid HCTZ due to gout"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.9",
      "onset": "2014",
      "status": "Active",
      "notes": "A1c 7.4%; on metformin (dose-reduced for CKD)"
    },
    {
      "problem": "Left Knee Total Arthroplasty — History",
      "icd": "Z96.652",
      "onset": "2021",
      "status": "Resolved",
      "notes": "Left TKA for OA 2021; uncomplicated recovery; prosthetist — no current issues at last ortho visit 2023"
    },
    {
      "problem": "Right Knee Osteoarthritis — Moderate-Severe",
      "icd": "M17.11",
      "onset": "2015",
      "status": "Active",
      "notes": "Moderate-severe; considering TKA right side; last intra-articular corticosteroid injection 09/2024 with temporary relief"
    }
  ],
  "medications": [
    {
      "name": "Allopurinol 200mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Owens",
      "start": "06/2015",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Colchicine 0.6mg daily",
      "sig": "Take 1 tablet by mouth daily for gout flare prophylaxis",
      "prescriber": "Dr. Owens",
      "start": "06/2015",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Losartan 50mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Owens",
      "start": "01/2008",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Owens",
      "start": "06/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals (dose-reduced for CKD)",
      "prescriber": "Dr. Owens",
      "start": "06/2015",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg TID PRN",
      "sig": "Take 1-2 tablets by mouth three times daily as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Owens",
      "start": "01/2016",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NSAIDs (Indomethacin, Naproxen)",
      "type": "Drug",
      "reaction": "Acute kidney injury — Cr rose to 2.4 on indomethacin in 2018",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "10/28/2024",
      "bp": "138/84",
      "hr": 74,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "205 lbs",
      "ht": "5'8\"",
      "bmi": 31.2,
      "setting": "PCP Office"
    },
    {
      "date": "09/10/2024",
      "bp": "142/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "207 lbs",
      "ht": "5'8\"",
      "bmi": 31.5,
      "setting": "Orthopedics"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/28/2024",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Owens, MD",
      "cc": "Follow-up: gout, DM2, CKD, right knee pain",
      "hpi": "68-year-old male with chronic tophaceous gout, CKD 3b, DM2, and OA for follow-up. Reports right knee injection in 09/2024 — improved for 3 weeks then pain returned. Has had 1 gout flare since last visit (first MTP joint bilateral, treated with colchicine intensification and prednisone burst). Uric acid 5.8 — at goal. CKD stable. A1c 7.4%. Left TKA — no issues. Considering right TKA — ortho appointment pending.",
      "exam": "General: Obese male, NAD. Hands: Tophi visible bilateral 2nd and 3rd DIP joints. Left ear: Small tophus helix. CV: RRR. Lungs: CTAB. MSK: Left knee — TKA, well-aligned, no effusion. Right knee — moderate effusion, crepitus, limited flexion to 100°, mild warmth. Feet: No acute inflammation of MTP joints.",
      "assessment": "1. Gout — tophaceous; uric acid at goal on allopurinol\n2. Right knee OA — worsening; right knee effusion; considering TKA\n3. CKD 3b — stable\n4. DM2 — stable\n5. HTN — borderline controlled",
      "plan": "1. Continue allopurinol and colchicine\n2. Right knee: orthopedic follow-up for TKA discussion\n3. Labs: uric acid, CMP, CBC, A1c\n4. If right knee develops acute hot swollen joint with fever: ED IMMEDIATELY — septic arthritis must be ruled out (native joint with effusion, immunocompromised with DM/CKD, prior steroid injection)\n5. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "09/10/2024",
      "type": "Orthopedics",
      "provider": "Dr. Thomas Grant, MD (Orthopedics)",
      "cc": "Right knee pain — OA management, injection",
      "hpi": "68-year-old male with right knee OA, chronic tophaceous gout. Pain worsening despite acetaminophen. Unable to use NSAIDs (CKD). Prior left TKA 2021. Considering right TKA. Today for corticosteroid injection.",
      "exam": "Right knee: Moderate varus, moderate effusion, crepitus, flexion 105°. Left TKA — stable.",
      "assessment": "1. Right knee OA — moderate-severe; candidate for TKA",
      "plan": "1. Right knee intra-articular injection: triamcinolone 40mg with lidocaine — performed\n2. Pre-operative planning if injection fails\n3. Follow-up 6 weeks"
    }
  ],
  "labs": [
    {
      "date": "10/28/2024",
      "time": "09:00",
      "orderedBy": "Dr. Jennifer Owens, MD",
      "collected": "10/28/2024 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-102815",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "12.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "38.2", "unit": "%", "range": "38.3-48.6", "flag": "L" },
            { "test": "Platelet Count", "value": "252", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "METABOLIC AND RENAL",
          "results": [
            { "test": "Glucose", "value": "122", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "28", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.6", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "eGFR", "value": "42", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Uric Acid", "value": "5.8", "unit": "mg/dL", "range": "3.0-7.0", "flag": "" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            { "test": "HbA1c", "value": "7.4", "unit": "%", "range": "<5.7 normal", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "09/10/2024",
      "study": "X-RAY RIGHT KNEE — STANDING AP, LATERAL, SUNRISE",
      "accession": "IMG-2024-09101",
      "status": "FINAL",
      "orderedBy": "Dr. Thomas Grant, MD (Orthopedics)",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "68M right knee OA, chronic gout — pre-injection imaging.",
      "technique": "Standing AP, lateral, and sunrise views.",
      "findings": "Right knee: Moderate-severe medial compartment joint space narrowing with subchondral sclerosis and osteophyte formation. Moderate varus alignment. Lateral compartment — mild narrowing. Patellofemoral — moderate narrowing with osteophytes. Periarticular soft tissue density consistent with tophaceous deposits at medial joint line. Moderate suprapatellar effusion.\\n\\nNo fracture or destructive lesion.",
      "impression": "1. Moderate-severe tricompartmental osteoarthritis, right knee — medial compartment predominant.\\n2. Periarticular tophaceous deposits.\\n3. Suprapatellar effusion.",
      "dictated": "09/10/2024 11:00",
      "verified": "09/10/2024 13:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/12/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD106",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/28/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-702",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "PV22-210",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-340",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: HTN, gout, alive at 90",
    "Father: T2DM, CKD (on dialysis), deceased at 72",
    "Brother: Gout, HTN, alive at 65",
    "Sister: T2DM, alive at 62"
  ],
  "socialHistory": [
    ["Occupation", "Retired bus driver (Broward County Transit)"],
    ["Marital", "Married, 2 adult children"],
    ["Tobacco", "Former smoker — 5 pack-years; quit 2000"],
    ["Alcohol", "Social, 1-2 beers on weekends; reduces during gout flares"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking daily when pain allows; limited by knee OA"],
    ["Housing", "Lives with wife in single-family home"],
    ["Safety", "No firearms; handrails on stairs"],
    ["Advance Directive", "Health care proxy: wife Marie Baptiste; Full code"]
  ],
  "meta": {
    "caseId": "septic-arthritis",
    "diagnosis": "Septic Arthritis — Right Knee (Staphylococcus aureus, Post-Steroid Injection in Immunocompromised Host)",
    "acuity": 2,
    "presentation": "Fever/Sepsis",
    "category": "infectious"
  }
};
