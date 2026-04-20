
window.EMR_DATA = {
  "patient": {
    "name": "Deshawn Lewis",
    "patientHPI": "This pain in my right leg is absolutely killing me - I can't even describe how bad it hurts. It started a few days ago when I got a small cut on my shin, but now my whole calf is involved and it's spreading up past my knee. The skin looks really angry and red, and it feels hot to touch.",
    "dob": "08/01/1963",
    "age": "63",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-565984",
    "language": "English",
    "race": "Pacific Islander",
    "phone": "(803) 555-2234",
    "email": "deshawn.lewis@email.com",
    "address": "7701 W Haddon Ave, Memphis, TN 38127",
    "insurance": "Cigna",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Publix Pharmacy \u2014 Sunrise Blvd",
    "emergencyContact": {
      "name": "Christopher Carter",
      "phone": "(404) 555-9095",
      "relationship": "Sibling"
    },
    "chiefComplaint": "My leg pain is unbearable Right lower leg \u2014 started at small shin laceration, now involves entire calf and extending above knee",
    "diagnosis": "Necrotizing Fasciitis (Group A Streptococcus \u2014 Extremity)"
  },
  "problems": [
    {
      "problem": "Necrotizing fasciitis \u2014 type I polymicrobial, lower extremity",
      "icd": "M72.6",
      "onset": "2024",
      "status": "Active",
      "notes": "Roberto Diaz, 58M \u2014 T2DM poorly controlled, A1c 11.2%. Right thigh cellulitis x3 days, now woody induration, crepitus on palpation, fever 39.6\u00b0C."
    },
    {
      "problem": "Rapidly progressing \u2014 pain out of proportion, skin necrosis developing",
      "icd": "M72.6",
      "onset": "2024",
      "status": "Active",
      "notes": "'Pain out of proportion to skin findings' is the classic NF warning. Skin appears relatively benign early \u2014 deep fascia necrosis is occult."
    },
    {
      "problem": "Septic shock \u2014 from fascial plane infection and bacteremia",
      "icd": "R65.21",
      "onset": "2024",
      "status": "Active",
      "notes": "BP 88/54, MAP 62. Lactate 4.8. Resuscitation ongoing. Surgery being activated simultaneously."
    }
  ],
  "medications": [
    {
      "name": "Vancomycin + piperacillin-tazobactam + clindamycin \u2014 empiric triple therapy",
      "sig": "Vancomycin covers MRSA. Pip-tazo covers gram-negative and anaerobes. Clindamycin inhibits toxin production (anti-toxin effect beyond bactericidal).",
      "prescriber": "Surgery/ID",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Norepinephrine \u2014 vasopressor for septic shock",
      "sig": "MAP target >65. Concurrent with surgical preparation.",
      "prescriber": "ICU",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Emergency surgical debridement \u2014 within 6 hours of recognition",
      "sig": "Surgery is the ONLY treatment for NF. Antibiotics alone will not cure NF \u2014 debridement removes the necrotic tissue driving the infection. Every 1h delay increases mortality ~9%.",
      "prescriber": "Surgery",
      "start": "2024",
      "refills": 0,
      "status": "EMERGENT \u2014 OR activated"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "10:35",
      "bp": "96/62",
      "hr": "122",
      "rr": "24",
      "temp": "40.0\u00b0C",
      "spo2": "95%",
      "pain": "10/10",
      "bmi": "34",
      "weight": "81 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "My leg pain is unbearable Right lower leg \u2014 started at small shin laceration, now involves entire calf and extending above knee",
      "hpi": "Deshawn Lewis is a 63-year-old male presenting with my leg pain is unbearable right lower leg \u2014 started at small shin laceration, now involves entire calf and extending above knee. Past medical history includes Type 2 Diabetes, Peripheral neuropathy, Obesity. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Necrotizing Fasciitis (Group A Streptococcus \u2014 Extremity) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "NF Workup",
      "results": [
        {
          "test": "WBC",
          "value": "32.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "380",
          "unit": "mg/L",
          "ref": "<10",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "128",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "2.4",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "4.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "LRINEC score",
          "value": "11",
          "unit": "/13",
          "ref": "\u22656 = high risk",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Right Thigh With Contrast",
      "indication": "Severe cellulitis, crepitus, systemic toxicity",
      "findings": "Gas in fascial planes of right thigh, extending from proximal thigh to knee. Fascial plane thickening and enhancement. No abscess \u2014 diffuse fascial involvement.",
      "impression": "Necrotizing fasciitis \u2014 gas in fascial planes confirmed. Emergent surgical debridement required."
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Diabetes in multiple family members"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 15 pack-years"
    ],
    [
      "Alcohol",
      "Occasional"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Landscaper"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Mr. Lewis appears anxious and in significant distress, frequently grimacing and shifting his position due to severe pain. He is very forthcoming about his symptoms and eager for help, expressing genuine fear about the rapid progression of his leg condition. His affect is worried but cooperative, and he provides detailed responses when asked about his pain.",
    "interviewQuestions": [
      "Can you describe exactly when and how this leg pain started?",
      "What does the pain feel like - is it sharp, throbbing, burning, or aching?",
      "On a scale of 1-10, how would you rate your current pain level?",
      "Have you noticed any changes in the appearance of your leg or the skin?",
      "Have you had any fever, chills, or feeling unwell overall?",
      "What makes the pain worse or better?",
      "Have you had any nausea, vomiting, or changes in appetite?",
      "How has your blood sugar control been lately?",
      "Have you noticed any swelling, warmth, or redness in the leg?",
      "Are you able to walk or bear weight on that leg?",
      "Have you had any similar episodes before?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this terrible pain in my leg. Could you ask that again?",
      "onset": "It started about 3-4 days ago when I got a small cut on my shin while working in someone's garden. At first it was just a little scrape, but then it got worse and worse each day.",
      "character": "It's this deep, throbbing, burning pain that just doesn't stop. Sometimes it feels like my leg is on fire from the inside out.",
      "location": "It started right here on my shin where the cut was, but now it covers my whole calf and it's creeping up above my knee. The worst part is still the calf area.",
      "severity": "This is easily a 9 out of 10 - I've never felt pain like this before. I can barely think straight and I couldn't sleep at all last night.",
      "aggravating": "Any movement makes it worse, even just touching the skin lightly is excruciating. Walking is almost impossible.",
      "relieving": "Nothing helps - I tried ibuprofen, ice, heat, elevating it. Nothing even touches this pain.",
      "associated": "I've been feeling really sick overall - weak, nauseous, and I think I have a fever. I've been sweating a lot and just feel awful.",
      "denies": "No chest pain, no shortness of breath, no urinary symptoms. The pain isn't cramping or like a Charlie horse - it's different.",
      "history": "No, I've never had anything like this before. I've had some minor cuts and scrapes from work, but nothing that ever got infected or caused problems like this.",
      "medications": "Metformin; Gabapentin; Lisinopril",
      "allergies": "NKDA",
      "family": "My mom, dad, and two brothers all have diabetes. My dad had some problems with infections on his feet, but nothing like this.",
      "social": "I work as a landscaper so I'm outside all day. I smoke about half a pack a day, have for about 30 years. I have a beer or two on weekends. I live with my wife and she's the one who made me come in today."
    },
    "examManeuvers": [
      "Inspection of right lower extremity",
      "Palpation of right lower extremity",
      "Assessment of skin temperature",
      "Evaluation of pedal pulses",
      "Assessment of capillary refill",
      "Examination of the original wound site",
      "Assessment of lymph nodes",
      "Neurological assessment of lower extremity",
      "Assessment of compartments for firmness",
      "Measurement of calf circumference"
    ],
    "examFindings": {
      "Inspection of right lower extremity": "Extensive erythema extending from mid-shin to above the knee with ill-defined, advancing borders. Skin appears tense and glossy with areas of dusky discoloration.",
      "Palpation of right lower extremity": "Severe tenderness throughout the affected area. Skin feels woody and indurated with crepitus noted over the anterior shin area.",
      "Assessment of skin temperature": "Affected area is markedly warm to touch compared to contralateral leg and surrounding unaffected skin.",
      "Evaluation of pedal pulses": "Dorsalis pedis and posterior tibial pulses are diminished but palpable bilaterally.",
      "Assessment of capillary refill": "Capillary refill delayed at 4-5 seconds in affected toes, normal (2 seconds) in contralateral foot.",
      "Examination of the original wound site": "Small punctate wound on anterior shin with surrounding necrotic tissue and purulent drainage.",
      "Assessment of lymph nodes": "Tender, enlarged inguinal lymph nodes palpable on the right side.",
      "Neurological assessment of lower extremity": "Decreased sensation to light touch and vibration in right foot consistent with known diabetic neuropathy.",
      "Assessment of compartments for firmness": "Anterior and lateral compartments feel firm and tense to palpation.",
      "Measurement of calf circumference": "Right calf measures 3cm larger than left calf at the point of maximal swelling."
    },
    "ddxTargets": [
      "Necrotizing fasciitis \u2014 crepitus, gas on CT, LRINEC \u22656, septic shock (correct)",
      "Severe cellulitis \u2014 no fascial gas on CT; no crepitus; less toxic",
      "Gas gangrene (Clostridium myonecrosis) \u2014 rapidly progressive, severe pain, crepitus; type II NF variant",
      "Fournier's gangrene \u2014 perineal NF specifically; same management",
      "Pyomyositis \u2014 muscle involvement on CT, tropical infection; different compartment",
      "Compartment syndrome \u2014 elevated compartment pressures, no infection/gas"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'diabetic with leg infection' and assuming simple cellulitis without recognizing the severity and rapid progression characteristic of necrotizing fasciitis.",
      "prematureClosure": "The combination of diabetes and a leg wound may lead to premature closure on diabetic foot infection, missing the systemic toxicity and tissue necrosis indicating necrotizing fasciitis.",
      "availabilityBias": "Cellulitis is much more commonly seen than necrotizing fasciitis, which may bias toward the more familiar diagnosis despite the severe presentation."
    },
    "coachPrompts": {
      "phase2": "Looking at your initial differential, I notice you're considering several infectious processes. As you interview Mr. Lewis, pay particular attention to the timeline of symptom progression and any systemic symptoms. What specific features would help you distinguish between a simple soft tissue infection versus something more serious that requires emergency intervention?",
      "phase5": "Now that you've completed your history and physical exam, let's think about what you've found. Mr. Lewis has rapid progression over days, severe systemic toxicity, and some concerning physical exam findings including crepitus and woody induration. How does this clinical picture fit with each diagnosis in your differential? What's the most critical next step in management?",
      "finalDebrief": "This case highlights the importance of recognizing necrotizing fasciitis early - the 'flesh-eating disease.' The key differentiating features from cellulitis include: rapid progression, severe systemic toxicity, pain out of proportion to appearance, crepitus, and woody induration. The LRINEC score can help risk-stratify, but clinical suspicion should drive immediate surgical consultation. Remember that diabetic patients are at higher risk, and delay in diagnosis significantly increases mortality. How will you remember to consider necrotizing fasciitis in future cases of severe soft tissue infections?",
      "final": "Diagnosis: necrotizing fasciitis. Key learning: (1) NF diagnostic triad: pain out of proportion to skin appearance + rapid progression + systemic toxicity. The skin often LOOKS like cellulitis early \u2014 the necrosis is in the deep fascia and muscle fascia, not the skin. Crepitus (gas in tissues) and 'woody' induration are late signs that confirm NF but should not be waited for. (2) LRINEC score (Laboratory Risk Indicator for Necrotizing Fasciitis): CRP >150 (+4), WBC >25 (+2), hemoglobin <11 (+2), sodium <135 (+2), creatinine >1.6 (+2), glucose >180 (+1). Score \u22656 = high risk for NF. Score 11 here = very high risk. Useful but not definitive \u2014 clinical suspicion overrides. (3) The finger test: surgeons insert a finger at the edge of suspicious skin \u2192 if fascia separates without resistance ('finger test positive') \u2014 NF confirmed. Simple bedside test that should accompany CT in uncertain cases. (4) Surgical debridement timing: every hour of delay after recognition increases mortality by ~9%. Mortality rises from ~15% with early surgery to >30-50% with delayed debridement. No antibiotic regimen substitutes for surgery. Multiple return trips to OR for reassessment of tissue viability are standard. (5) Antibiotic rationale: clindamycin's role is anti-toxin (inhibits ribosomal translation \u2192 reduces production of streptococcal/staphylococcal exotoxins that drive toxic shock). It is added alongside bactericidal agents specifically for toxin suppression."
    }
  },
  "meta": {
    "diagnosis": "Necrotizing Fasciitis \u2014 Type I Polymicrobial, Finger Test Positive, Emergency Surgical Debridement",
    "caseId": "nec-fasciitis"
  }
};
