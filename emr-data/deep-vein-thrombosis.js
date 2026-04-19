// Virtual EMR Case: Deep Vein Thrombosis
// Variant: deep-vein-thrombosis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Patricia Duval",
    "patientHPI": "I've been feeling fine and my blood pressure is under control, but I'm a bit nervous about this upcoming trip to Jamaica. I'm still on my birth control pills because they really help with my heavy periods, and even though my doctor mentioned some risks because of my weight, I want to keep taking them since they work so well for me.",
    "dob": "03/22/1980",
    "age": 44,
    "sex": "Female",
    "mrn": "RDX-2025-42918",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Robert Kim, MD",
    "pharmacy": "Publix Pharmacy — 1800 N Pine Island Rd, Plantation, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "4683 Birch Ln, Milwaukee, WI 53203",
    "phone": "(954) 555-9142",
    "email": "p.duval80@email.com",
    "emergencyContact": {
      "name": "James Duval (Husband)",
      "phone": "(954) 555-9160"
    }
  },
  "problems": [
    {
      "problem": "Obesity, Class II",
      "icd": "E66.01",
      "onset": "2012",
      "status": "Active",
      "notes": "BMI 37.2; counseled on weight management; declined bariatric referral"
    },
    {
      "problem": "Combined Oral Contraceptive Use",
      "icd": "Z79.3",
      "onset": "2019",
      "status": "Active",
      "notes": "Ethinyl estradiol/norgestimate (Sprintec); counseled on VTE risk given BMI and age"
    },
    {
      "problem": "Hypertension — Mild",
      "icd": "I10",
      "onset": "2021",
      "status": "Active",
      "notes": "On lisinopril; controlled"
    },
    {
      "problem": "Iron Deficiency Anemia — History",
      "icd": "D50.9",
      "onset": "2022",
      "status": "Resolved",
      "notes": "Menorrhagia-related; resolved after iron supplementation and OCP regulation of menses"
    }
  ],
  "medications": [
    {
      "name": "Ethinyl Estradiol/Norgestimate (Sprintec) daily",
      "sig": "Take 1 tablet by mouth daily at the same time each day",
      "prescriber": "Dr. Kim",
      "start": "03/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "06/2021",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Vitamin D3 2000 IU daily",
      "sig": "Take 1 capsule by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "01/2023",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "type": "Drug",
      "reaction": "Hives — diffuse urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/20/2024",
      "bp": "128/80",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "218 lbs",
      "ht": "5'5\"",
      "bmi": 36.3,
      "setting": "PCP Office"
    },
    {
      "date": "05/15/2024",
      "bp": "130/82",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "222 lbs",
      "ht": "5'5\"",
      "bmi": 36.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Kim, MD",
      "cc": "Follow-up: HTN, OCP refill, weight management",
      "hpi": "44-year-old female for follow-up. Reports feeling well. HTN controlled. On combined OCP (Sprintec) for menorrhagia control and contraception. VTE risk re-discussed given BMI 36 and age — patient wishes to continue OCPs; understands risks. Denies leg swelling, chest pain, or SOB. Planning a trip to Jamaica next month — 4-hour flight. Weight stable.",
      "exam": "General: Obese, NAD. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT. Extremities: No edema, no calf tenderness, negative Homan sign. Skin: No rashes.",
      "assessment": "1. HTN — controlled\n2. OCP use — continued; VTE risk discussed (obesity + estrogen + age approaching 45)\n3. Obesity — stable; nutritional counseling offered\n4. Upcoming travel — DVT prevention counseled",
      "plan": "1. Continue lisinopril and Sprintec\n2. Travel DVT prevention: compression stockings, hydration, walk every 1-2 hours on flight, ankle pumps\n3. Weight management: referred to nutritionist\n4. If calf swelling, pain, or redness: seek urgent evaluation\n5. RTC 6 months; consider transitioning to progestin-only method at age 45"
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "time": "09:30",
      "orderedBy": "Dr. Robert Kim, MD",
      "collected": "11/20/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-112015",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.0",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "38.8",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "275",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            {
              "test": "Total Cholesterol",
              "value": "218",
              "unit": "mg/dL",
              "range": "<200",
              "flag": "H"
            },
            {
              "test": "LDL Cholesterol",
              "value": "138",
              "unit": "mg/dL",
              "range": "<100 optimal",
              "flag": "H"
            },
            {
              "test": "HDL Cholesterol",
              "value": "48",
              "unit": "mg/dL",
              "range": ">50",
              "flag": "L"
            },
            {
              "test": "Triglycerides",
              "value": "160",
              "unit": "mg/dL",
              "range": "<150",
              "flag": "H"
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
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-268",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/22/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-695",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2008",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: DVT at age 50 (provoked — post-surgical), HTN, alive at 70",
    "Father: T2DM, CAD, alive at 72",
    "Sister: Factor V Leiden heterozygous (diagnosed during pregnancy), alive at 41",
    "No family history of PE or unprovoked clots"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Office manager — sedentary desk job; 8+ hours sitting daily"
    ],
    [
      "Marital",
      "Married, 2 children (ages 10, 7)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social, 1-2 glasses of wine on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 2-3x/week; limited by schedule"
    ],
    [
      "Housing",
      "Single-family home with husband and children"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; no firearms"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "deep-vein-thrombosis",
    "diagnosis": "Acute Proximal Deep Vein Thrombosis — Left Femoral Vein (Provoked by OCP + Obesity + Prolonged Travel)",
    "acuity": 3,
    "presentation": "Musculoskeletal Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patricia appears mildly anxious and concerned about her leg symptoms but is cooperative and forthcoming with information. She seems particularly worried about whether this might affect her upcoming travel plans and appears relieved to finally have someone take her leg pain seriously.",
    "interviewQuestions": [
      "When did you first notice the leg pain and swelling?",
      "Can you describe what the pain feels like?",
      "Which leg is affected and where exactly does it hurt?",
      "On a scale of 1-10, how severe is the pain?",
      "What makes the pain worse?",
      "Have you found anything that helps relieve the pain?",
      "Have you noticed any other symptoms like shortness of breath or chest pain?",
      "Have you had any recent long trips or periods of immobility?",
      "Have you ever had blood clots before?",
      "Are you currently taking any medications, especially birth control?",
      "Do you have any drug allergies?",
      "Does anyone in your family have a history of blood clots?",
      "Tell me about your work and daily activity level"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Can you rephrase that?",
      "onset": "I first noticed my left leg feeling heavy and achy about 3 days ago, the day after I got back from a 6-hour flight from Seattle for work. It's gotten progressively worse and more swollen since then.",
      "character": "It's a deep, constant aching pain, almost like a charley horse that won't go away. The whole leg feels heavy and tight.",
      "location": "It's my entire left leg, but the worst pain is in my thigh and behind my knee. The pain doesn't really shoot anywhere else.",
      "severity": "I'd say it's about a 6 out of 10 right now. It's making it hard to walk normally and I'm limping. I couldn't sleep well last night because of it.",
      "aggravating": "Walking makes it worse, especially going up stairs. Standing for long periods is really uncomfortable. Touching or pressing on my thigh is quite tender.",
      "relieving": "Elevating my leg helps a little bit, and I tried some ibuprofen which took the edge off but didn't make it go away.",
      "associated": "I haven't had any chest pain or trouble breathing. No fever or anything like that. Just the leg pain and swelling.",
      "denies": "No chest pain, no shortness of breath, no coughing up blood, no fever or chills. My other leg is completely fine.",
      "history": "I've never had anything like this before. My legs sometimes get a bit swollen at the end of long work days, but nothing like this.",
      "medications": "Ethinyl Estradiol/Norgestimate (Sprintec) daily; Lisinopril 10mg daily; Vitamin D3 2000 IU daily",
      "allergies": "Sulfa drugs",
      "family": "My mother had a blood clot in her leg after surgery when she was about 50, and my sister was told she has some kind of clotting disorder - Factor V something - when she was pregnant.",
      "social": "I work as an office manager so I sit at a desk most of the day, probably 8-9 hours. I'm married with two kids. I don't smoke and just have a glass or two of wine on weekends. No drugs."
    },
    "examManeuvers": [
      "Inspection of bilateral lower extremities",
      "Palpation of left leg for warmth and tenderness",
      "Measurement of bilateral calf and thigh circumference",
      "Assessment of bilateral lower extremity pulses",
      "Homan's sign",
      "Wells score assessment",
      "Examination for pitting edema",
      "Assessment of skin color and temperature",
      "Palpation of inguinal lymph nodes",
      "Basic cardiopulmonary examination"
    ],
    "examFindings": {
      "Inspection of bilateral lower extremities": "Left leg notably swollen compared to right, particularly in thigh and calf. No visible varicosities or skin changes.",
      "Palpation of left leg for warmth and tenderness": "Left thigh markedly tender to palpation, especially along medial aspect. Left leg warmer than right.",
      "Measurement of bilateral calf and thigh circumference": "Left calf 2.5 cm larger than right at largest point. Left thigh 3 cm larger than right at 15 cm above knee.",
      "Assessment of bilateral lower extremity pulses": "Dorsalis pedis and posterior tibial pulses 2+ and equal bilaterally. No pulse deficits noted.",
      "Homan's sign": "Positive on left - dorsiflexion of left foot elicits posterior calf pain",
      "Wells score assessment": "Clinical features suggest DVT likely - swelling, tenderness, pitting edema, alternative diagnosis less likely",
      "Examination for pitting edema": "2+ pitting edema of left lower extremity from foot to mid-thigh. Right leg without edema.",
      "Assessment of skin color and temperature": "Left leg appears slightly erythematous and is warm to touch compared to right leg",
      "Palpation of inguinal lymph nodes": "No palpable lymphadenopathy bilaterally",
      "Basic cardiopulmonary examination": "Heart rate regular, lungs clear to auscultation bilaterally, no signs of pulmonary embolism"
    },
    "ddxTargets": [
      "Acute Proximal Deep Vein Thrombosis — Left Femoral Vein (Provoked by OCP + Obesity + Prolonged Travel) (correct diagnosis)",
      "Superficial thrombophlebitis",
      "Cellulitis of left lower extremity",
      "Pulmonary embolism with associated DVT",
      "Acute arterial occlusion",
      "Muscle strain or hematoma",
      "Chronic venous insufficiency exacerbation"
    ],
    "biasFlags": {
      "anchoring": "May anchor on musculoskeletal injury given chief complaint category rather than considering vascular emergency given multiple thrombotic risk factors",
      "prematureClosure": "May stop at superficial thrombophlebitis or cellulitis without considering proximal DVT requiring immediate anticoagulation",
      "availabilityBias": "May be influenced by recent cases of muscle strains or cellulitis rather than recognizing classic DVT presentation in high-risk patient"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Before you interview the patient, what specific risk factors for venous thromboembolism should you be thinking about given what you know about this 44-year-old woman? How might her medications and recent activities influence your questioning?",
      "phase5": "Now that you've completed your history and physical, let's think about risk stratification. What scoring system could help you here, and what are the key clinical features you've identified that point toward your leading diagnosis? What would be your next immediate step?",
      "finalDebrief": "This case highlights the importance of recognizing provoked DVT in patients with multiple risk factors. How did the combination of oral contraceptives, obesity, prolonged travel, and family history influence the clinical presentation? What does this teach us about managing patients on estrogen-containing contraceptives?"
    }
  }
};
