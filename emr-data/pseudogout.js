// Virtual EMR Case: Pseudogout (CPPD)
// Variant: pseudogout | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Harold Steinberg",
    "patientHPI": "My right knee arthritis has been acting up more lately and it's keeping me off the golf course, plus I've had a couple episodes this year where my knee got all hot, red, and swollen up like a balloon - really painful when that happens.",
    "dob": "01/12/1947",
    "age": 77,
    "sex": "Male",
    "mrn": "RDX-2025-15738",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B with AARP Supplemental",
    "pcp": "Dr. Catherine Wright, MD",
    "pharmacy": "CVS Pharmacy — 7800 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "race": "White",
    "address": "1797 Spruce St, Louisville, KY 40203",
    "phone": "(954) 555-3518",
    "email": "h.steinberg47@email.com",
    "emergencyContact": {
      "name": "Ruth Steinberg (Wife)",
      "phone": "(954) 555-3530"
    }
  },
  "problems": [
    {
      "problem": "Osteoarthritis — Bilateral Knees",
      "icd": "M17.0",
      "onset": "2012",
      "status": "Active",
      "notes": "Moderate bilateral; right > left; manages with acetaminophen; declined TKA; chondrocalcinosis noted on prior knee XR"
    },
    {
      "problem": "Hypothyroidism",
      "icd": "E03.9",
      "onset": "2008",
      "status": "Active",
      "notes": "On levothyroxine; TSH at goal"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "On lisinopril and amlodipine"
    },
    {
      "problem": "Benign Prostatic Hyperplasia",
      "icd": "N40.0",
      "onset": "2016",
      "status": "Active",
      "notes": "On tamsulosin; IPSS 14; urology monitoring"
    },
    {
      "problem": "Primary Hyperparathyroidism — Mild",
      "icd": "E21.0",
      "onset": "2021",
      "status": "Active",
      "notes": "Calcium 10.6, PTH 78; no nephrolithiasis or osteoporosis; monitored conservatively per endocrinology; contributes to CPPD risk"
    }
  ],
  "medications": [
    {
      "name": "Levothyroxine 88mcg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach 30-60 minutes before breakfast",
      "prescriber": "Dr. Wright",
      "start": "06/2009",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Wright",
      "start": "06/2008",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Wright",
      "start": "01/2015",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Tamsulosin 0.4mg QHS",
      "sig": "Take 1 capsule by mouth at bedtime 30 minutes after eating",
      "prescriber": "Dr. Wright",
      "start": "06/2017",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg TID PRN",
      "sig": "Take 1-2 tablets by mouth three times daily as needed for joint pain; max 3000mg/day",
      "prescriber": "Dr. Wright",
      "start": "06/2013",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Ibuprofen",
      "type": "Drug",
      "reaction": "GI upset — epigastric pain and nausea",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Shellfish",
      "type": "Food",
      "reaction": "Hives",
      "severity": "Mild",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "11/06/2024",
      "bp": "134/78",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "186 lbs",
      "ht": "5'10\"",
      "bmi": 26.7,
      "setting": "PCP Office"
    },
    {
      "date": "05/08/2024",
      "bp": "138/80",
      "hr": 74,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "188 lbs",
      "ht": "5'10\"",
      "bmi": 27,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/06/2024",
      "type": "Primary Care",
      "provider": "Dr. Catherine Wright, MD",
      "cc": "Follow-up: OA, hyperparathyroidism, HTN",
      "hpi": "77-year-old male for follow-up. Right knee OA pain worsened — now limiting golf. Prior knee XR showed chondrocalcinosis (calcification of meniscal cartilage) consistent with CPPD. Hyperparathyroidism stable — calcium 10.6 on last check. Reports 2 episodes this year of acute knee swelling ('hot, red, terrible pain') that resolved over 5-7 days each — consistent with pseudogout flares. Managed at home with acetaminophen and ice. Unable to take NSAIDs (GI intolerance). Never had joint aspiration during a flare.",
      "exam": "General: NAD, pleasant. CV: RRR. Lungs: CTAB. MSK: Right knee — mild effusion, crepitus, ROM 0-115°, no warmth or erythema today. Left knee — crepitus, no effusion. Hands: Heberden nodes bilateral, no acute swelling.",
      "assessment": "1. OA bilateral knees with chondrocalcinosis (CPPD) — likely pseudogout flares\n2. Primary hyperparathyroidism — calcium stable, contributing to CPPD risk\n3. HTN — controlled\n4. Hypothyroidism — stable\n5. BPH — stable",
      "plan": "1. NEXT FLARE: present URGENTLY for arthrocentesis — need synovial fluid analysis (crystal analysis, cell count, gram stain, culture) to confirm CPPD and rule out septic arthritis\n2. Colchicine 0.6mg BID for acute flare treatment (cannot use NSAIDs); may also use short prednisone burst\n3. Endocrinology f/u for hyperparathyroidism — recheck calcium, PTH\n4. Continue current meds\n5. Knee XR ordered — update chondrocalcinosis assessment\n6. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "11/06/2024",
      "time": "09:00",
      "orderedBy": "Dr. Catherine Wright, MD",
      "collected": "11/06/2024 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-110615",
      "status": "Final",
      "specimenType": "Serum",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "METABOLIC PANEL",
          "results": [
            {
              "test": "Calcium",
              "value": "10.6",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "H"
            },
            {
              "test": "Phosphorus",
              "value": "2.4",
              "unit": "mg/dL",
              "range": "2.5-4.5",
              "flag": "L"
            },
            {
              "test": "Magnesium",
              "value": "1.8",
              "unit": "mg/dL",
              "range": "1.7-2.2",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.1",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Uric Acid",
              "value": "5.2",
              "unit": "mg/dL",
              "range": "3.0-7.0",
              "flag": ""
            }
          ]
        },
        {
          "name": "ENDOCRINE",
          "results": [
            {
              "test": "PTH, Intact",
              "value": "78",
              "unit": "pg/mL",
              "range": "15-65",
              "flag": "H"
            },
            {
              "test": "TSH",
              "value": "2.4",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/2022",
      "study": "X-RAY BILATERAL KNEES — STANDING AP, LATERAL",
      "accession": "IMG-2022-03181",
      "status": "FINAL",
      "orderedBy": "Dr. Catherine Wright, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "75M bilateral knee OA — evaluate progression.",
      "technique": "Standing AP and lateral views, bilateral knees.",
      "findings": "Right knee: Moderate medial compartment joint space narrowing. Subchondral sclerosis. Marginal osteophytes. Linear calcification of the medial and lateral menisci (chondrocalcinosis). Small suprapatellar effusion.\\n\\nLeft knee: Mild-moderate medial narrowing. Osteophytes. Chondrocalcinosis of lateral meniscus.\\n\\nNo fracture. No loose bodies.",
      "impression": "1. Moderate OA bilateral knees, right > left.\\n2. Chondrocalcinosis bilateral — consistent with CPPD disease.\\n3. Small right knee effusion.",
      "dictated": "03/18/2022 10:30",
      "verified": "03/18/2022 12:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD088",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/18/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-684",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-175",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "01/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-015",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: OA, hypothyroidism, deceased at 88",
    "Father: CAD, deceased at 74",
    "Brother: BPH, gout, alive at 74",
    "No family history of hyperparathyroidism or MEN syndromes"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired accountant"
    ],
    [
      "Marital",
      "Married, 3 adult children"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "1 glass of wine with dinner daily"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Golf 2x/week (cart); daily walking"
    ],
    [
      "Housing",
      "Lives with wife in single-family home"
    ],
    [
      "Safety",
      "No firearms; handrails installed"
    ],
    [
      "Advance Directive",
      "Living will on file; HCP: wife Ruth Steinberg; Full code"
    ]
  ],
  "meta": {
    "caseId": "pseudogout",
    "diagnosis": "Acute CPPD Crystal Arthropathy (Pseudogout) — Right Knee, Associated with Primary Hyperparathyroidism",
    "acuity": 3,
    "presentation": "Musculoskeletal Emergency",
    "category": "rheumatologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Harold appears mildly frustrated and concerned about his worsening knee pain interfering with his golf activities. He's generally cooperative and forthcoming but somewhat dismissive of his symptoms, attributing them to 'just getting older' and his known arthritis.",
    "interviewQuestions": [
      "Can you describe when these knee episodes started and how often they occur?",
      "What does the pain feel like during these flare-ups?",
      "How long do these episodes of swelling and redness typically last?",
      "On a scale of 1-10, how severe is the pain during these episodes?",
      "What makes the knee pain and swelling worse?",
      "What helps relieve the pain during these episodes?",
      "Have you noticed any fever, chills, or feeling unwell during these episodes?",
      "Any recent injuries or trauma to the knee?",
      "How is your baseline knee pain between these acute episodes?",
      "Any similar episodes in other joints?",
      "Have you had any kidney stones or bone problems?",
      "Any family history of gout or joint problems?",
      "What medications are you currently taking?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Can you be more specific about my knee?",
      "onset": "The really bad episodes started about 6 months ago. I've had maybe 3 or 4 of them since then. My regular knee arthritis has been bothering me for years, but these flare-ups are different - much worse.",
      "character": "During the bad episodes, it's like a deep, throbbing, burning pain. Much worse than my usual arthritis ache. The knee gets so swollen I can barely bend it.",
      "location": "It's my right knee, mainly on the inside and front. The whole knee gets swollen and hot to touch. No shooting pain anywhere else.",
      "severity": "My usual arthritis is maybe a 3 or 4, but during these flare-ups it's easily an 8 or 9. I can barely walk and definitely can't play golf.",
      "aggravating": "Any movement makes it worse during the bad episodes. Even just walking to the bathroom is agony. Weight-bearing is terrible.",
      "relieving": "The Tylenol barely touches it during the flares. Rest and ice help a little. The episodes seem to get better on their own after a few days.",
      "associated": "During the bad episodes, the knee is hot and red, really swollen. No fever that I've noticed. Sometimes I feel a bit tired when it's acting up.",
      "denies": "No fever or chills. No other joints involved. No recent injuries. No rash or skin changes elsewhere.",
      "history": "Like I said, about 3 or 4 episodes in the past 6 months. Each one lasts about 3-5 days then gradually gets better. Between episodes, just my usual arthritis pain.",
      "medications": "Levothyroxine 88mcg daily; Lisinopril 20mg daily; Amlodipine 5mg daily; Tamsulosin 0.4mg QHS; Acetaminophen 500mg TID PRN",
      "allergies": "Ibuprofen, Shellfish",
      "family": "My brother has gout, actually. My mother had bad arthritis in her knees too. My father had heart problems.",
      "social": "I'm a retired accountant, married with three kids. I try to play golf twice a week when my knee allows. Never smoked. I have one glass of wine with dinner most nights. No drugs."
    },
    "examManeuvers": [
      "Inspection of right knee",
      "Palpation of right knee joint line and surrounding structures",
      "Range of motion assessment - active and passive",
      "Knee stability testing (McMurray, drawer tests)",
      "Assessment of joint effusion (ballottement test)",
      "Temperature assessment of affected joint",
      "Examination of other major joints",
      "Lymph node examination",
      "Assessment for tophi or other crystal deposits"
    ],
    "examFindings": {
      "Inspection of right knee": "Moderate swelling and erythema of right knee with visible joint effusion. No obvious deformity or skin lesions.",
      "Palpation of right knee joint line and surrounding structures": "Warmth noted over entire joint. Moderate tenderness along medial and lateral joint lines. Palpable effusion present.",
      "Range of motion assessment - active and passive": "Limited active flexion to 90 degrees due to pain and swelling. Passive range of motion 0-95 degrees with pain at extremes.",
      "Knee stability testing (McMurray, drawer tests)": "Difficult to assess due to pain and effusion, but no gross instability noted. McMurray test negative.",
      "Assessment of joint effusion (ballottement test)": "Positive ballottement test indicating moderate joint effusion.",
      "Temperature assessment of affected joint": "Right knee noticeably warmer than left knee and surrounding tissue.",
      "Examination of other major joints": "Left knee shows mild crepitus consistent with osteoarthritis but no acute inflammation. Other joints unremarkable.",
      "Lymph node examination": "No lymphadenopathy in inguinal or popliteal regions.",
      "Assessment for tophi or other crystal deposits": "No visible tophi on ears, fingers, or elbows. No subcutaneous nodules noted."
    },
    "ddxTargets": [
      "Acute CPPD Crystal Arthropathy (Pseudogout) — Right Knee, Associated with Primary Hyperparathyroidism",
      "Gouty arthritis (acute gout attack)",
      "Osteoarthritis flare with inflammatory component",
      "Septic arthritis",
      "Cellulitis with reactive joint effusion",
      "Crystalline arthropathy (uric acid vs CPPD unclear)",
      "Rheumatoid arthritis (late-onset monoarticular presentation)"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'arthritis' from patient's known OA history and missing the acute crystalline component, or assuming this is just OA progression",
      "prematureClosure": "Risk of stopping at 'gout' given family history and acute monoarticular presentation without considering CPPD, especially with underlying hyperparathyroidism",
      "availabilityBias": "Gout is more commonly discussed than pseudogout; may not consider CPPD crystal arthropathy despite the metabolic predisposition"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you're considering both infectious and crystalline causes - that's important for an acute monoarticular arthritis. What specific historical features would help you differentiate between gout, pseudogout, and septic arthritis? Also, consider what this patient's metabolic history might contribute to crystal formation.",
      "phase5": "You've identified an acute inflammatory monoarthritis with effusion. The lack of fever and systemic symptoms, along with the episodic pattern, points away from infection. Given the patient's family history and your exam findings, what's your leading crystalline arthropathy? How might his known hyperparathyroidism factor into crystal deposition diseases?",
      "finalDebrief": "This case highlights the importance of considering CPPD crystal arthropathy (pseudogout), especially in elderly patients with metabolic conditions like hyperparathyroidism. While gout was reasonable given the family history, the patient's calcium metabolism disorder predisposes to calcium pyrophosphate dihydrate crystal formation. The episodic acute inflammatory pattern with complete resolution between attacks is classic for crystalline arthropathies. Joint aspiration with polarized microscopy and imaging for chondrocalcinosis would confirm the diagnosis."
    }
  }
};
