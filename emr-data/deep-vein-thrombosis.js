
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
      "problem": "Proximal DVT \u2014 left femoral and popliteal veins",
      "icd": "I82.402",
      "onset": "2024",
      "status": "Active",
      "notes": "Sandra Williams, 58F \u2014 recent 14-hour flight, left leg swelling, pain, and erythema for 3 days. Duplex ultrasound: non-compressible left femoral and popliteal veins with echogenic thrombus. Wells score 3 = high probability."
    },
    {
      "problem": "Provoked DVT \u2014 prolonged immobility (flight)",
      "icd": "I82.402",
      "onset": "2024",
      "status": "Active",
      "notes": "Clear provokable risk factor (travel immobility). Provoked DVT has lower recurrence risk than unprovoked \u2014 anticoagulation duration typically 3 months."
    },
    {
      "problem": "PE risk \u2014 proximal DVT carries significant PE risk",
      "icd": "I82.402",
      "onset": "2024",
      "status": "Active",
      "notes": "Proximal DVT (above popliteal fossa) carries ~50% risk of symptomatic PE if untreated. Anticoagulation prevents further embolization."
    }
  ],
  "medications": [
    {
      "name": "Rivaroxaban 15mg BID x21 days then 20mg daily",
      "sig": "DOAC first-line for DVT treatment. Rivaroxaban: fixed-dose oral, no monitoring, non-inferior to LMWH/warfarin (EINSTEIN trial). 3-month total duration for provoked DVT.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Compression stockings 30-40mmHg \u2014 graduated",
      "sig": "Reduces post-thrombotic syndrome (PTS) risk. Improves symptoms. Start after acute phase. Wear for minimum 2 years.",
      "prescriber": "Medicine/Vascular",
      "start": "2024",
      "refills": 0,
      "status": "Prescribed"
    },
    {
      "name": "Ambulation \u2014 encouraged immediately",
      "sig": "Early ambulation with anticoagulation is SAFE and reduces pain and swelling. Bed rest does NOT prevent PE in anticoagulated patients and worsens outcomes.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 ambulate"
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
      "panel": "DVT Assessment",
      "results": [
        {
          "test": "D-dimer",
          "value": "3.8",
          "unit": "mg/L",
          "ref": "<0.5 (elevated \u2014 supports DVT)",
          "flag": "H"
        },
        {
          "test": "Wells Score",
          "value": "3 (high probability)",
          "unit": "",
          "ref": "0-1 = low; 2 = moderate; \u22653 = high",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 platelet count",
          "value": "224",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "0.9",
          "unit": "mg/dL",
          "ref": "0.5-1.1 (for DOAC dosing)",
          "flag": ""
        },
        {
          "test": "Provokable risk factor screen",
          "value": "14-hour flight 3 days before symptom onset",
          "unit": "",
          "ref": "",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Lower Extremity Duplex Ultrasound",
      "findings": "Non-compressible left common femoral and popliteal veins. Echogenic thrombus visible. No flow on Doppler in involved segments. Right leg normal.",
      "impression": "Acute proximal left DVT involving femoral and popliteal veins."
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
    "diagnosis": "Acute Proximal Deep Vein Thrombosis \u2014 Left Femoral Vein (Provoked by Immobility)",
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
      "Proximal DVT \u2014 left femoral vein (correct)",
      "Cellulitis \u2014 erythema + warmth; no DVT on duplex; no travel history",
      "Baker's cyst rupture \u2014 posterior knee swelling; ultrasound shows cyst rupture; no venous thrombosis",
      "Superficial thrombophlebitis \u2014 palpable cord along vein; duplex shows superficial vein; different management",
      "Muscle strain/hematoma \u2014 trauma history; ultrasound shows muscle not vein"
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
      "final": "Diagnosis: acute proximal DVT, provoked. Key learning: (1) Wells DVT score: active cancer (1), paralysis/immobilization (1), bedridden >3 days or major surgery <12 weeks (1), localized tenderness along deep veins (1), entire leg swollen (1), calf swelling >3cm (1), pitting edema (1), collateral superficial veins (1), prior DVT (1), alternative diagnosis as likely as DVT (-2). Score \u22652 = duplex ultrasound. Score <2 + negative D-dimer = DVT excluded. (2) Proximal vs distal DVT: proximal (popliteal and above) = treat with anticoagulation. Isolated distal (calf) = can observe with serial ultrasound OR treat \u2014 depends on symptoms and risk factors. (3) DOAC advantages: fixed oral dosing, no monitoring, similar efficacy to LMWH/warfarin (EINSTEIN, AMPLIFY trials). Avoid DOACs in severe renal failure (eGFR <15-30) and antiphospholipid syndrome (use warfarin). (4) Duration: provoked (reversible risk factor like immobility, surgery, estrogen) \u2192 3 months. Unprovoked \u2192 3-6 months minimum, consider indefinite based on bleeding risk. Recurrent unprovoked \u2192 indefinite anticoagulation. (5) Post-thrombotic syndrome (PTS): chronic leg pain, swelling, skin changes after DVT from valve damage. Compression stockings for \u22652 years reduce PTS incidence."
    }
  }
};
