// Virtual EMR Case: Gout Flare
// Variant: gout-flare | Acuity: ESI-4
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Robert Nguyen",
    "patientHPI": "I stopped taking my gout medication about four months ago because I was feeling great and didn't think I needed it anymore, but since then I've had two really painful flare-ups in my toe and ankle, and I've been drinking more beer and eating rich foods lately.",
    "dob": "02/18/1972",
    "age": 52,
    "sex": "Male",
    "mrn": "RDX-2025-27614",
    "pronouns": "He/Him",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Maria Santos, MD",
    "pharmacy": "CVS Pharmacy — 5200 S University Dr, Riverside, FL",
    "language": "English, Vietnamese",
    "race": "Asian (Vietnamese)",
    "address": "1969 Sycamore Dr, Birmingham, AL 35207",
    "phone": "(954) 555-8472",
    "email": "r.nguyen72@email.com",
    "emergencyContact": {
      "name": "Linh Nguyen (Wife)",
      "phone": "(954) 555-8490"
    }
  },
  "problems": [
    {
      "problem": "Gout — Recurrent",
      "icd": "M10.9",
      "onset": "2018",
      "status": "Active",
      "notes": "Recurrent monoarticular flares; first MTP joint predominant; 3-4 flares/year; uric acid 8.6; allopurinol started 2023 — patient non-adherent (stopped taking 'because no pain')"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2014",
      "status": "Active",
      "notes": "On hydrochlorothiazide — CONTRIBUTING to hyperuricemia; discussed switching but patient declined"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2016",
      "status": "Active",
      "notes": "On atorvastatin"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 2",
      "icd": "N18.2",
      "onset": "2022",
      "status": "Active",
      "notes": "eGFR 72; likely related to HTN and gout nephropathy"
    }
  ],
  "medications": [
    {
      "name": "Hydrochlorothiazide 25mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Santos",
      "start": "06/2015",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 20mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Santos",
      "start": "06/2017",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Allopurinol 100mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Santos",
      "start": "03/2023",
      "refills": 3,
      "status": "Active — PATIENT NON-ADHERENT (self-discontinued)"
    },
    {
      "name": "Colchicine 0.6mg PRN (flare)",
      "sig": "Take 2 tablets at first sign of flare, then 1 tablet 1 hour later; max 3 tablets in 1 hour",
      "prescriber": "Dr. Santos",
      "start": "01/2019",
      "refills": 2,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NSAIDs (Indomethacin)",
      "type": "Drug",
      "reaction": "GI bleeding — melena",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "10/30/2024",
      "bp": "142/90",
      "hr": 76,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "198 lbs",
      "ht": "5'8\"",
      "bmi": 30.1,
      "setting": "PCP Office"
    },
    {
      "date": "04/18/2024",
      "bp": "138/86",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "195 lbs",
      "ht": "5'8\"",
      "bmi": 29.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/30/2024",
      "type": "Primary Care",
      "provider": "Dr. Maria Santos, MD",
      "cc": "Follow-up: gout, HTN, CKD",
      "hpi": "52-year-old male for follow-up. Reports he stopped allopurinol 4 months ago — 'felt fine, didn't think I needed it.' Has had 2 gout flares since stopping (right 1st MTP in July, left ankle in September). Used colchicine at home — partial relief. Reports recent dietary indiscretions: increased beer consumption and seafood at family gatherings. HTN borderline on HCTZ. CKD 2 stable. Discussed HCTZ contributing to hyperuricemia — patient again declined switching diuretic.",
      "exam": "General: Obese male, NAD. CV: RRR. Extremities: No acute joint swelling or erythema today. Right 1st MTP: mild bony enlargement (chronic). Left ankle: full ROM, no effusion. Feet: No tophi. Kidneys: Non-tender.",
      "assessment": "1. Gout — recurrent, poorly controlled; non-adherent to allopurinol\n2. Hyperuricemia — worsened off allopurinol; HCTZ contributing\n3. HTN — borderline controlled\n4. CKD 2 — stable\n5. Hyperlipidemia — stable",
      "plan": "1. RESTART allopurinol 100mg daily — MUST TAKE DAILY even without flares; this is prevention\n2. Colchicine 0.6mg daily x 6 months for flare prophylaxis during allopurinol titration\n3. Target uric acid <6; recheck in 4 weeks; titrate allopurinol up if needed\n4. Dietary counseling: limit beer (especially), organ meats, shellfish, high-fructose drinks\n5. Strongly recommend switching HCTZ to losartan (uricosuric effect) — patient to consider\n6. Labs: uric acid, BMP, CBC\n7. RTC 4 weeks"
    }
  ],
  "labs": [
    {
      "date": "10/30/2024",
      "time": "09:00",
      "orderedBy": "Dr. Maria Santos, MD",
      "collected": "10/30/2024 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-103015",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "METABOLIC AND RENAL",
          "results": [
            {
              "test": "Glucose",
              "value": "102",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "20",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "eGFR",
              "value": "72",
              "unit": "mL/min/1.73m²",
              "range": ">60",
              "flag": ""
            },
            {
              "test": "Uric Acid",
              "value": "8.6",
              "unit": "mg/dL",
              "range": "3.0-7.0",
              "flag": "H"
            },
            {
              "test": "Potassium",
              "value": "3.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "14.6",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "228",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-262",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-688",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "04/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-128",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Gout, HTN, alive at 78",
    "Father: T2DM, CKD (dialysis), deceased at 72",
    "Brother: Gout, alive at 49",
    "No family history of rheumatoid arthritis or autoimmune disease"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Restaurant owner — Vietnamese cuisine"
    ],
    [
      "Marital",
      "Married, 2 children (ages 18, 15)"
    ],
    [
      "Tobacco",
      "Former smoker — 10 pack-years; quit 2018"
    ],
    [
      "Alcohol",
      "Beer 3-5/week; increased at family gatherings; counseled on gout risk"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking; on feet at restaurant 10+ hours/day"
    ],
    [
      "Housing",
      "Single-family home with wife and children"
    ],
    [
      "Safety",
      "No firearms; seatbelt"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "gout-flare",
    "diagnosis": "Acute Gouty Arthritis — Right First MTP (Podagra), Non-Adherent to Urate-Lowering Therapy",
    "acuity": 4,
    "presentation": "Musculoskeletal Emergency",
    "category": "rheumatologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Mr. Nguyen appears frustrated and somewhat embarrassed about his medication non-adherence, frequently grimacing when he moves his foot. He's forthcoming about his symptoms but defensive when discussing why he stopped his medications, showing moderate distress from pain but trying to downplay the severity.",
    "interviewQuestions": [
      "When did this current episode of toe pain begin?",
      "Can you describe the quality of the pain in your toe?",
      "On a scale of 1-10, how severe is the pain right now?",
      "What makes the pain worse or better?",
      "Have you had similar episodes before?",
      "When did you last take your gout medications?",
      "What prompted you to stop taking your allopurinol?",
      "Have you noticed any swelling or redness in the toe?",
      "Any fever, chills, or feeling unwell?",
      "What have you been eating and drinking lately?",
      "Have you tried anything to relieve the pain?",
      "Any other joints affected besides your big toe?",
      "How is this affecting your ability to work at your restaurant?"
    ],
    "patientResponses": {
      "default": "I'm sorry, can you ask that differently? I'm having trouble concentrating because of this pain in my toe.",
      "onset": "The pain started suddenly yesterday evening around 8 PM while I was working at the restaurant. I went to bed fine, but woke up at 3 AM with excruciating pain in my right big toe.",
      "character": "It's like someone is crushing my toe in a vice and stabbing it with a hot knife at the same time. The pain is throbbing and constant, and even the bedsheet touching it is unbearable.",
      "location": "It's right at the base of my big toe on my right foot, where it connects to my foot. The pain doesn't really go anywhere else, it's just concentrated right there.",
      "severity": "Right now it's about an 8 out of 10. I can barely walk, and I had to call in sick to work today, which I never do. Even sitting here hurts.",
      "aggravating": "Any movement makes it worse, even the slightest touch. Walking is almost impossible. Wearing shoes is out of the question.",
      "relieving": "I tried ice at first but that made it worse. Heat doesn't help either. I took some of my wife's Tylenol but it barely touched the pain. Nothing really helps much.",
      "associated": "The toe is really swollen and red, almost purple. I don't have fever or chills, but the area feels hot to touch.",
      "denies": "No fever, no other joints hurt right now, no rash anywhere else, no back pain, no numbness or tingling in my feet.",
      "history": "Yes, I've had this exact same thing happen before, probably six or seven times over the past 10 years. Usually in this same toe, but twice it was in my ankle. This feels just like those times.",
      "medications": "Hydrochlorothiazide 25mg daily; Atorvastatin 20mg QHS; Allopurinol 100mg daily; Colchicine 0.6mg PRN (flare)",
      "allergies": "NSAIDs (Indomethacin)",
      "family": "Both my mother and younger brother have gout. My mother still gets flares occasionally even though she's 78. My brother started getting attacks when he was in his early 40s.",
      "social": "I own a Vietnamese restaurant with my wife. We work long hours, and I admit I've been drinking more beer lately, especially during our busy season. I used to smoke but quit in 2018. I don't use any drugs."
    },
    "examManeuvers": [
      "Inspection of right first MTP joint",
      "Palpation of right first MTP joint",
      "Range of motion testing of right first MTP joint",
      "Assessment of warmth over right first MTP joint",
      "Examination of other joints for involvement",
      "Palpation for tophi on ears and joints",
      "Assessment of pedal pulses",
      "Lymph node examination of inguinal region"
    ],
    "examFindings": {
      "Inspection of right first MTP joint": "Marked erythema, swelling, and shiny appearance of skin overlying the right first MTP joint with mild purple discoloration",
      "Palpation of right first MTP joint": "Exquisite tenderness to light touch, patient withdraws foot immediately, firm swelling palpable around joint",
      "Range of motion testing of right first MTP joint": "Severely limited active and passive range of motion due to pain, patient unable to dorsiflex or plantarflex toe",
      "Assessment of warmth over right first MTP joint": "Significantly increased warmth over the joint compared to contralateral side and surrounding tissue",
      "Examination of other joints for involvement": "No other joints show signs of acute inflammation, left first MTP joint normal",
      "Palpation for tophi on ears and joints": "Small, firm nodules palpable on bilateral ear helices consistent with tophi, no palpable tophi on other joints",
      "Assessment of pedal pulses": "Dorsalis pedis and posterior tibial pulses 2+ bilaterally, no signs of vascular compromise",
      "Lymph node examination of inguinal region": "No palpable lymphadenopathy in bilateral inguinal regions"
    },
    "ddxTargets": [
      "Acute Gouty Arthritis — Right First MTP (Podagra), Non-Adherent to Urate-Lowering Therapy (correct diagnosis)",
      "Septic Arthritis of First MTP Joint",
      "Acute Pseudogout (CPPD Crystal Arthropathy)",
      "Osteomyelitis of First Metatarsal Head",
      "Necrotizing Soft Tissue Infection",
      "Cellulitis with Secondary Arthritis",
      "Acute Rheumatoid Arthritis Flare"
    ],
    "biasFlags": {
      "anchoring": "The classic presentation of podagra in a patient with known gout history may cause immediate anchoring on gout without considering infectious causes that require urgent treatment",
      "prematureClosure": "The obvious gout history and typical presentation may lead to premature closure without adequately ruling out septic arthritis, especially given his diabetes risk factors",
      "availabilityBias": "Recent cases of gout or common exposure to gout patients may make this diagnosis seem more likely than serious infectious complications"
    },
    "coachPrompts": {
      "phase2": "You're thinking about gout given his history, which makes sense. But before you interview him, what other serious conditions can present with acute monoarticular arthritis that you absolutely cannot miss? How will you differentiate between crystal arthropathy and infection during your history?",
      "phase5": "The clinical picture is quite suggestive of gout, especially with his medication non-adherence. However, what additional testing might you consider to definitively confirm your diagnosis and rule out your must-not-miss differentials? How does his CKD affect your treatment options?",
      "finalDebrief": "This case highlights the importance of medication adherence in gout management. Notice how the classic podagra presentation with known gout history made the diagnosis likely, but you still needed to systematically exclude septic arthritis. How did the presence of tophi and his non-adherence history strengthen your diagnostic confidence? What does this teach you about the challenges of chronic disease management?"
    }
  }
};
