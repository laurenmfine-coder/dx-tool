
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
    "pharmacy": "Publix Pharmacy \u2014 1800 N Pine Island Rd, Plantation, FL",
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
      "problem": "Acute proximal DVT \u2014 left femoral vein, unprovoked",
      "icd": "I82.4Y1",
      "onset": "2024",
      "status": "Active",
      "notes": "Maria Chen, 38F \u2014 2-week left leg swelling, pain, erythema. No recent travel, surgery, or immobilization. Wells score 3 (high). Duplex ultrasound: left femoral vein DVT extending to popliteal. Unprovoked = requires 3-6 months anticoagulation minimum."
    },
    {
      "problem": "Unprovoked DVT \u2014 malignancy and thrombophilia workup",
      "icd": "I82.4Y1",
      "onset": "2024",
      "status": "Active",
      "notes": "Unprovoked DVT in a patient <50 warrants age-appropriate cancer screening (breast, colorectal, cervical) and consideration of thrombophilia testing. Factor V Leiden most common inherited thrombophilia."
    },
    {
      "problem": "PE risk \u2014 proximal DVT has 50% PE rate without treatment",
      "icd": "I82.4Y1",
      "onset": "2024",
      "status": "Active",
      "notes": "Proximal DVT (above popliteal) has 50% risk of PE without anticoagulation. Isolated distal DVT (calf) has lower PE risk \u2014 anticoagulate based on symptoms and extension risk."
    }
  ],
  "medications": [
    {
      "name": "Apixaban 10mg BID x 7 days then 5mg BID x 3-6 months",
      "sig": "DOAC is first-line for VTE treatment (AMPLIFY trial). No need for bridging heparin. Reduces stroke, PE, and VTE recurrence. Preferred over warfarin (no INR monitoring, fewer interactions).",
      "prescriber": "Medicine/Hematology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Compression stockings \u2014 left leg",
      "sig": "Graduated compression stockings reduce post-thrombotic syndrome (PTS) risk. Wear for at least 2 years after proximal DVT.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Thrombophilia workup \u2014 defer until off anticoagulation",
      "sig": "Test after completing anticoagulation (results affected by active anticoagulation). Factor V Leiden, prothrombin G20210A, protein C/S, antithrombin III, antiphospholipid antibodies.",
      "prescriber": "Hematology",
      "start": "2024",
      "refills": 0,
      "status": "Deferred 3-6 months"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "type": "Drug",
      "reaction": "Hives \u2014 diffuse urticaria",
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
      "temp": "98.4\u00b0F",
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
      "temp": "98.6\u00b0F",
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
      "hpi": "44-year-old female for follow-up. Reports feeling well. HTN controlled. On combined OCP (Sprintec) for menorrhagia control and contraception. VTE risk re-discussed given BMI 36 and age \u2014 patient wishes to continue OCPs; understands risks. Denies leg swelling, chest pain, or SOB. Planning a trip to Jamaica next month \u2014 4-hour flight. Weight stable.",
      "exam": "General: Obese, NAD. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT. Extremities: No edema, no calf tenderness, negative Homan sign. Skin: No rashes.",
      "assessment": "1. HTN \u2014 controlled\n2. OCP use \u2014 continued; VTE risk discussed (obesity + estrogen + age approaching 45)\n3. Obesity \u2014 stable; nutritional counseling offered\n4. Upcoming travel \u2014 DVT prevention counseled",
      "plan": "1. Continue lisinopril and Sprintec\n2. Travel DVT prevention: compression stockings, hydration, walk every 1-2 hours on flight, ankle pumps\n3. Weight management: referred to nutritionist\n4. If calf swelling, pain, or redness: seek urgent evaluation\n5. RTC 6 months; consider transitioning to progestin-only method at age 45"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "DVT/PE Workup",
      "results": [
        {
          "test": "D-dimer",
          "value": "4.8",
          "unit": "\u03bcg/mL",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 platelet count",
          "value": "228",
          "unit": "K/\u03bcL",
          "ref": "150-400 (baseline for anticoagulation)",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "0.9",
          "unit": "mg/dL",
          "ref": "0.5-1.1 (renal function for DOAC dosing)",
          "flag": ""
        },
        {
          "test": "Beta-hCG",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Wells DVT Score",
          "value": "3 \u2014 high probability",
          "unit": "",
          "ref": "\u22653 = high probability",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Lower Extremity Venous Duplex Ultrasound",
      "findings": "Non-compressible left femoral vein extending to popliteal vein. No flow on Doppler. Right lower extremity normal. No Baker cyst.",
      "impression": "Acute left femoral-popliteal DVT. Anticoagulation indicated."
    }
  ],
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
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) \u2014 series complete",
      "date": "2008",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: DVT at age 50 (provoked \u2014 post-surgical), HTN, alive at 70",
    "Father: T2DM, CAD, alive at 72",
    "Sister: Factor V Leiden heterozygous (diagnosed during pregnancy), alive at 41",
    "No family history of PE or unprovoked clots"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Office manager \u2014 sedentary desk job; 8+ hours sitting daily"
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
    "diagnosis": "Acute Proximal DVT \u2014 Left Femoral Vein, Unprovoked",
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
      "Proximal DVT \u2014 unprovoked (correct)",
      "Cellulitis \u2014 unilateral erythema but no clot on ultrasound; non-compressibility distinguishes",
      "Ruptured Baker cyst \u2014 posterior knee pain; ultrasound shows cyst rupture; mimic DVT",
      "Superficial thrombophlebitis \u2014 palpable cord; superficial vein; limited PE risk; NSAIDs",
      "Lymphedema \u2014 bilateral; pitting; no D-dimer elevation; chronic onset"
    ],
    "biasFlags": {
      "anchoring": "May anchor on musculoskeletal injury given chief complaint category rather than considering vascular emergency given multiple thrombotic risk factors",
      "prematureClosure": "May stop at superficial thrombophlebitis or cellulitis without considering proximal DVT requiring immediate anticoagulation",
      "availabilityBias": "May be influenced by recent cases of muscle strains or cellulitis rather than recognizing classic DVT presentation in high-risk patient"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Before you interview the patient, what specific risk factors for venous thromboembolism should you be thinking about given what you know about this 44-year-old woman? How might her medications and recent activities influence your questioning?",
      "phase5": "Now that you've completed your history and physical, let's think about risk stratification. What scoring system could help you here, and what are the key clinical features you've identified that point toward your leading diagnosis? What would be your next immediate step?",
      "finalDebrief": "This case highlights the importance of recognizing provoked DVT in patients with multiple risk factors. How did the combination of oral contraceptives, obesity, prolonged travel, and family history influence the clinical presentation? What does this teach us about managing patients on estrogen-containing contraceptives?",
      "final": "Diagnosis: acute proximal DVT, unprovoked. Key learning: (1) Wells DVT score: each criterion = 1 point (+2 for active cancer; +1 for paralysis, recent plaster/cast; +1 for recently bedridden >3 days or surgery within 12 weeks; +1 for localized tenderness; +1 for entire leg swollen; +1 for calf swelling >3cm vs contralateral; +1 for pitting edema; +1 for collateral superficial veins; -2 for alternative diagnosis at least as likely). \u22653 = high probability. (2) D-dimer: highly sensitive but non-specific. Negative D-dimer in low-pretest probability = excludes DVT (NPV >99%). Elevated D-dimer with high probability = confirm with ultrasound, not add more tests. (3) DOAC vs warfarin for DVT: DOACs (apixaban, rivaroxaban) are preferred \u2014 noninferior, no INR monitoring, fewer interactions, lower bleeding risk. Warfarin still used in antiphospholipid syndrome (target INR 2-3 or 3-4 depending on risk). (4) Duration of anticoagulation: provoked (surgery, trauma, immobilization) = 3 months. Unprovoked = minimum 3-6 months, consider indefinite if high recurrence risk (male, proximal, no reversible risk factor). (5) Post-thrombotic syndrome: complication of DVT from venous hypertension \u2192 chronic leg pain, edema, skin changes, ulceration. Compression stockings for \u22652 years after proximal DVT reduce PTS risk."
    }
  }
};
