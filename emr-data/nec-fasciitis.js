/* emr-data/nec-fasciitis.js — EMR case data for Necrotizing Fasciitis (Group A Streptococcus — Extremity) */
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
    "pharmacy": "Publix Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Christopher Carter",
      "phone": "(404) 555-9095",
      "relationship": "Sibling"
    },
    "chiefComplaint": "My leg pain is unbearable Right lower leg — started at small shin laceration, now involves entire calf and extending above knee",
    "diagnosis": "Necrotizing Fasciitis (Group A Streptococcus — Extremity)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Peripheral neuropathy",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Obesity",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-2",
      "name": "Gabapentin",
      "dose": "300mg TID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Michael Torres, DO"
    },
    {
      "id": "med-3",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
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
      "temp": "40.0°C",
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
      "cc": "My leg pain is unbearable Right lower leg — started at small shin laceration, now involves entire calf and extending above knee",
      "hpi": "Deshawn Lewis is a 63-year-old male presenting with my leg pain is unbearable right lower leg — started at small shin laceration, now involves entire calf and extending above knee. Past medical history includes Type 2 Diabetes, Peripheral neuropathy, Obesity. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Necrotizing Fasciitis (Group A Streptococcus — Extremity) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-464426",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "28.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "11.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "42",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "194",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "131",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "4.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "105",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "28",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "10",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "2.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "312",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "10.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "CRP",
              "value": "28.6",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "5.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "1,840",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending",
              "unit": "",
              "range": "No growth",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-617523",
      "clinical": "My leg pain is unbearable Right lower leg — started at small shin laceration, now involves entire calf and extending above knee",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Abdomen/Pelvis with Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-451396",
      "clinical": "My leg pain is unbearable Right lower leg — started at small shin laceration, now involves entire calf and extending above knee",
      "technique": "Standard protocol",
      "findings": "Right lower extremity: extensive subcutaneous edema and fascial thickening from mid-tibia to distal thigh. Fat stranding. Small pockets of fluid tracking along fascial planes. No discrete abscess. No subcutaneous gas. Muscle compartments enhancing but edematous.",
      "impression": "Findings consistent with necrotizing soft tissue infection of right lower extremity — EMERGENT SURGICAL EXPLORATION AND DEBRIDEMENT.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-995470",
      "clinical": "My leg pain is unbearable Right lower leg — started at small shin laceration, now involves entire calf and extending above knee",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 122 bpm. No ST changes",
      "impression": "Sinus tachycardia — sepsis",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
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
      "Necrotizing fasciitis (correct diagnosis)",
      "Cellulitis",
      "Diabetic foot infection with ascending lymphangitis",
      "Gas gangrene",
      "Compartment syndrome",
      "Deep vein thrombosis with secondary cellulitis",
      "Severe allergic reaction or contact dermatitis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'diabetic with leg infection' and assuming simple cellulitis without recognizing the severity and rapid progression characteristic of necrotizing fasciitis.",
      "prematureClosure": "The combination of diabetes and a leg wound may lead to premature closure on diabetic foot infection, missing the systemic toxicity and tissue necrosis indicating necrotizing fasciitis.",
      "availabilityBias": "Cellulitis is much more commonly seen than necrotizing fasciitis, which may bias toward the more familiar diagnosis despite the severe presentation."
    },
    "coachPrompts": {
      "phase2": "Looking at your initial differential, I notice you're considering several infectious processes. As you interview Mr. Lewis, pay particular attention to the timeline of symptom progression and any systemic symptoms. What specific features would help you distinguish between a simple soft tissue infection versus something more serious that requires emergency intervention?",
      "phase5": "Now that you've completed your history and physical exam, let's think about what you've found. Mr. Lewis has rapid progression over days, severe systemic toxicity, and some concerning physical exam findings including crepitus and woody induration. How does this clinical picture fit with each diagnosis in your differential? What's the most critical next step in management?",
      "finalDebrief": "This case highlights the importance of recognizing necrotizing fasciitis early - the 'flesh-eating disease.' The key differentiating features from cellulitis include: rapid progression, severe systemic toxicity, pain out of proportion to appearance, crepitus, and woody induration. The LRINEC score can help risk-stratify, but clinical suspicion should drive immediate surgical consultation. Remember that diabetic patients are at higher risk, and delay in diagnosis significantly increases mortality. How will you remember to consider necrotizing fasciitis in future cases of severe soft tissue infections?"
    }
  }
};
