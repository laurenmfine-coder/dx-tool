// Virtual EMR Case: Spinal Epidural Abscess
// Variant: epidural-abscess | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Derek Simmons",
  "patientHPI": "I'm back for another steroid injection in my spine because my back pain came back. The first shot I got a few months ago worked great for about three months, but now that shooting pain down my right leg is back just as bad as before.",
    "dob": "01/25/1983",
    "age": 43,
    "sex": "Male",
    "mrn": "RDX-2025-72058",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Anthony Reyes, MD",
    "pharmacy": "Walgreens — 1300 S Andrews Ave, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "1900 W Haddon Ave, New Orleans, LA 70118",
    "phone": "(954) 555-2693",
    "email": "d.simmons83@email.com",
    "emergencyContact": {
      "name": "Linda Simmons (Mother)",
      "phone": "(954) 555-2707"
    }
  },
  "problems": [
    {
      "problem": "Opioid Use Disorder, in Remission on MAT",
      "icd": "F11.21",
      "onset": "2010",
      "status": "Active",
      "notes": "History of IV heroin use (2010-2022); on buprenorphine/naloxone since 2022; compliant with MAT"
    },
    {
      "problem": "Hepatitis C, Chronic, Treated",
      "icd": "B18.2",
      "onset": "2015",
      "status": "Resolved",
      "notes": "SVR achieved 2021 after DAA therapy; genotype 1a"
    },
    {
      "problem": "Lumbar Disc Herniation, L4-L5",
      "icd": "M51.16",
      "onset": "2020",
      "status": "Active",
      "notes": "Right-sided; managed conservatively; ESI x2 (most recent 12/2025)"
    },
    {
      "problem": "Chronic Low Back Pain",
      "icd": "M54.5",
      "onset": "2018",
      "status": "Active",
      "notes": "History of construction work; multifactorial"
    },
    {
      "problem": "Major Depressive Disorder",
      "icd": "F33.0",
      "onset": "2014",
      "status": "Active",
      "notes": "Stable on escitalopram"
    }
  ],
  "medications": [
    {
      "name": "Buprenorphine/Naloxone 8/2mg SL BID",
      "sig": "Place 1 film under tongue twice daily; allow to dissolve",
      "prescriber": "Dr. Reyes",
      "start": "08/2022",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Escitalopram 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Reyes",
      "start": "03/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Cyclobenzaprine 10mg TID PRN",
      "sig": "Take 1 tablet by mouth three times daily as needed for muscle spasm",
      "prescriber": "Dr. Reyes",
      "start": "06/2020",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Naproxen 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with food",
      "prescriber": "Dr. Reyes",
      "start": "06/2020",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Rash and facial swelling",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/16/2026",
      "bp": "136/84",
      "hr": 104,
      "rr": 18,
      "temp": "101.8°F",
      "spo2": "97%",
      "wt": "168 lbs",
      "ht": "5'11\"",
      "bmi": 23.4,
      "setting": "ED"
    },
    {
      "date": "12/02/2025",
      "bp": "124/78",
      "hr": 76,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "170 lbs",
      "ht": "5'11\"",
      "bmi": 23.7,
      "setting": "Specialist"
    },
    {
      "date": "08/20/2025",
      "bp": "122/74",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "172 lbs",
      "ht": "5'11\"",
      "bmi": 24.0,
      "setting": "PCP Office"
    },
    {
      "date": "02/10/2025",
      "bp": "120/76",
      "hr": 74,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "174 lbs",
      "ht": "5'11\"",
      "bmi": 24.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/02/2025",
      "type": "Specialist",
      "provider": "Dr. Michael Torres, MD (Pain Management)",
      "cc": "Lumbar ESI; chronic low back pain",
      "hpi": "43-year-old male with chronic LBP and L4-L5 disc herniation presenting for second epidural steroid injection. First ESI (06/2025) provided 3 months of relief. Right-sided radicular pain returned — 7/10 radiating to right buttock and posterior thigh. MRI (09/2025) shows stable L4-L5 right paracentral herniation. Non-opioid management due to OUD history. Currently managed with naproxen, cyclobenzaprine, and physical therapy.",
      "exam": "General: NAD. Spine: Tenderness L4-L5 midline and right paraspinal. SLR: Positive right at 50°. Motor: 5/5 all. Sensation: Diminished right L5 dermatome.",
      "assessment": "1. Lumbar radiculopathy L5 — recurrent; proceeding with ESI #2\n2. Chronic LBP\n3. OUD — compliant with buprenorphine; no opioid prescriptions",
      "plan": "1. Right L4-L5 interlaminar ESI performed — triamcinolone 80mg/lidocaine 1%\n2. Sterile technique; no complications\n3. Continue naproxen, cyclobenzaprine\n4. Continue PT\n5. RTC 6 weeks for reassessment"
    },
    {
      "id": "V002",
      "date": "08/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Anthony Reyes, MD",
      "cc": "Follow-up: OUD, depression, back pain",
      "hpi": "43-year-old male for routine follow-up. OUD — compliant with buprenorphine x 3 years; attending weekly NA meetings. Depression stable on escitalopram. Back pain managed with NSAIDs and PT — improved after ESI in 06/2025. Working part-time at auto parts store. Denies any substance use. UDS consistent with buprenorphine only.",
      "exam": "General: NAD. Psych: Euthymic, good rapport. Spine: Mild tenderness. Neuro: Grossly intact. Arms: No track marks; old scars bilateral antecubital fossae.",
      "assessment": "1. OUD — in remission on MAT; compliant\n2. MDD — stable\n3. Chronic LBP — improved post-ESI\n4. HCV — SVR sustained",
      "plan": "1. Continue buprenorphine/naloxone\n2. Continue escitalopram\n3. UDS quarterly\n4. Pain management follow-up for possible repeat ESI\n5. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "02/16/2026",
      "time": "16:20",
      "orderedBy": "Dr. Karen Moy, MD (ED)",
      "collected": "02/16/2026 15:50",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-021648",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "18.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Neutrophils", "value": "86", "unit": "%", "range": "40-70", "flag": "H" },
            { "test": "Bands", "value": "8", "unit": "%", "range": "0-5", "flag": "H" },
            { "test": "Hemoglobin", "value": "13.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "39.6", "unit": "%", "range": "38.0-50.0", "flag": "" },
            { "test": "Platelet Count", "value": "342", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "INFLAMMATORY MARKERS",
          "results": [
            { "test": "ESR", "value": "82", "unit": "mm/hr", "range": "0-22", "flag": "H" },
            { "test": "CRP", "value": "14.8", "unit": "mg/dL", "range": "<0.5", "flag": "H" },
            { "test": "Procalcitonin", "value": "2.4", "unit": "ng/mL", "range": "<0.1", "flag": "H" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "118", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "Sodium", "value": "137", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "BUN", "value": "18", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" }
          ]
        },
        {
          "name": "BLOOD CULTURES",
          "results": [
            { "test": "Blood Culture x2", "value": "Pending", "unit": "", "range": "No growth", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "09/15/2025",
      "study": "MRI LUMBAR SPINE WITHOUT CONTRAST",
      "accession": "IMG-2025-09153",
      "status": "FINAL",
      "orderedBy": "Dr. Michael Torres, MD",
      "readBy": "Dr. David Rosenberg, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "43M with chronic LBP, L4-L5 disc herniation. Reevaluation prior to repeat ESI.",
      "technique": "MRI lumbar spine without contrast. Sagittal T1, T2, STIR; Axial T2.",
      "findings": "L4-L5: Right paracentral disc herniation, stable in size. Mild right foraminal stenosis with right L5 nerve root contact. No central stenosis.\\n\\nOther levels: Mild degenerative changes L3-L4 and L5-S1. No herniation.\\n\\nConus: Normal, terminating at L1.\\n\\nCauda equina: No compression.\\n\\nNo epidural collection or abnormal enhancement (non-contrast study).\\n\\nVertebral bodies: Normal marrow signal. No compression fracture.",
      "impression": "1. Stable right paracentral L4-L5 disc herniation with right L5 nerve root contact.\\n2. Mild multilevel degenerative changes.\\n3. No spinal canal stenosis or cauda equina compression.",
      "dictated": "09/15/2025 14:50",
      "verified": "09/15/2025 17:10"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-316",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2025-26)",
      "date": "10/30/2025",
      "site": "Right deltoid IM",
      "lot": "CM2025-668",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Hepatitis A (Havrix) (2/2)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B (Engerix-B) (3/3)",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Unknown medical history (estranged)",
    "Mother: Depression, T2DM, alive at 65",
    "Brother: Substance use disorder (alcohol), alive at 45",
    "No known family history of autoimmune, cancer, or neurologic disease"
  ],
  "socialHistory": [
    ["Occupation", "Part-time auto parts store clerk; formerly construction laborer"],
    ["Marital", "Single; never married; lives alone"],
    ["Tobacco", "Current smoker — 1/2 PPD x 20 years (10 pack-year)"],
    ["Alcohol", "Sober 3 years; prior heavy use"],
    ["Drugs", "History IV heroin use (2010-2022); in remission on buprenorphine/naloxone; last use >3 years ago"],
    ["Exercise", "Walks daily; gym 2x/week when pain allows"],
    ["Housing", "Studio apartment; lives alone"],
    ["Safety", "Denies IPV; safe injection education provided historically; no current use"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "epidural-abscess",
    "diagnosis": "Spinal Epidural Abscess (Post-ESI, MSSA)",
    "acuity": 2,
    "presentation": "Back Pain",
    "category": "infectious"
  }
};
