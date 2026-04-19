// Virtual EMR Case: Encephalitis
// Variant: encephalitis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Trevor Washington",
    "patientHPI": "I went camping last weekend and started feeling really tired and achy about four days ago, like I was getting the flu. Then two days ago I got this terrible headache that just keeps getting worse no matter what I take for it, and I've been running a high fever. My mom says I've been acting confused and not making sense when I talk, which really scared her into bringing me here.",
    "dob": "02/28/1992",
    "age": 32,
    "sex": "Male",
    "mrn": "RDX-2025-61738",
    "pronouns": "He/Him",
    "insurance": "United Healthcare EPO",
    "pcp": "Dr. Raymond Alvarez, MD",
    "pharmacy": "Publix Pharmacy — 801 S University Dr, Plantation, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "2169 Clover St, Baltimore, MD 21214",
    "phone": "(954) 555-8463",
    "email": "t.washington92@email.com",
    "emergencyContact": {
      "name": "Angela Washington (Mother)",
      "phone": "(954) 555-8490"
    },
    "chiefComplaint": "Headache and fever"
  },
  "problems": [
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2012",
      "status": "Chronic",
      "notes": "Managed with OTC cetirizine"
    },
    {
      "problem": "Recent Travel to Rural Central Florida",
      "icd": "Z77.29",
      "onset": "2025",
      "status": "Active",
      "notes": "Camping trip to Ocala area 2 weeks prior; extensive mosquito exposure reported"
    },
    {
      "problem": "Tension-Type Headache",
      "icd": "G44.209",
      "onset": "2018",
      "status": "Active",
      "notes": "Episodic, stress-related; acetaminophen PRN"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet by mouth daily as needed for allergies",
      "prescriber": "Dr. Alvarez",
      "start": "03/2015",
      "refills": 5,
      "status": "PRN"
    },
    {
      "name": "Acetaminophen 500mg PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for headache; max 3000mg/day",
      "prescriber": "Dr. Alvarez",
      "start": "01/2019",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "10/08/2024",
      "bp": "120/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "185 lbs",
      "ht": "6'1\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "04/15/2024",
      "bp": "118/74",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "182 lbs",
      "ht": "6'1\"",
      "bmi": 24,
      "setting": "PCP Office"
    },
    {
      "date": "10/02/2023",
      "bp": "122/78",
      "hr": 70,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "180 lbs",
      "ht": "6'1\"",
      "bmi": 23.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/03/2025",
      "type": "Urgent Care",
      "provider": "Dr. Sandra Chen, MD",
      "cc": "Fever, headache, and confusion x 2 days",
      "hpi": "32-year-old previously healthy male presents with 2 days of worsening headache, fever to 103°F at home, and new confusion noticed by his mother. Reports myalgias and fatigue starting 4 days ago, initially attributed to post-camping trip. Progressive headache not relieved by acetaminophen. Mother reports patient has been 'saying things that don't make sense' since this morning. Reports camping trip to Ocala area 2 weeks ago with significant mosquito exposure. Denies rash, neck stiffness (though examiner notes stiffness on exam), vision changes, or recent sick contacts.",
      "exam": "General: Ill-appearing male, intermittently confused, oriented to person only. HEENT: PERRL but sluggish bilaterally, photophobia present. Neck: Nuchal rigidity noted. CV: Tachycardic, RRR, no murmurs. Lungs: CTAB. Neuro: GCS 13 (E3V4M6), disoriented to time and place, speech intermittently tangential. CN intact. Strength grossly intact but decreased cooperation. DTRs 3+ throughout. No rash. Kernig sign equivocal, Brudzinski negative.",
      "assessment": "1. Acute encephalopathy with fever — high concern for CNS infection (meningitis vs. encephalitis)\n2. Significant mosquito exposure history — arboviral encephalitis (EEE, WNV) on differential\n3. Requires emergent transfer to ED for LP, imaging, and empiric treatment",
      "plan": "1. Emergent transfer to Memorial Regional ED via EMS\n2. IV access established, NS bolus initiated\n3. Recommend CT head → LP, blood cultures x2, empiric acyclovir + ceftriaxone + vancomycin\n4. Notify receiving ED of incoming transfer"
    },
    {
      "id": "V002",
      "date": "10/08/2024",
      "type": "Primary Care",
      "provider": "Dr. Raymond Alvarez, MD",
      "cc": "Annual wellness exam",
      "hpi": "32-year-old male for annual exam. No active complaints. Exercises regularly — runs 3-4x/week, plays recreational basketball. Headaches infrequent, controlled with acetaminophen. Seasonal allergies managed with cetirizine. No hospitalizations or surgeries.",
      "exam": "General: NAD, athletic build. HEENT: WNL. Neck: Supple, no LAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT/ND. MSK: Full ROM all joints. Neuro: A&O x3, CN II-XII intact. Skin: No rashes or lesions.",
      "assessment": "1. Annual wellness exam — healthy male\n2. Allergic rhinitis — stable\n3. Episodic tension headache — stable",
      "plan": "1. Continue cetirizine PRN\n2. Age-appropriate screening current\n3. RTC 1 year or PRN"
    }
  ],
  "labs": [
    {
      "date": "10/08/2024",
      "time": "09:00",
      "orderedBy": "Dr. Raymond Alvarez, MD",
      "collected": "10/08/2024 08:20",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-100812",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "88",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "15",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "25",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.5",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "ALT (SGPT)",
              "value": "22",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST (SGOT)",
              "value": "24",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "6.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "15.4",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "45.8",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "210",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "10/02/2023",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2023-10021",
      "status": "FINAL",
      "orderedBy": "Dr. Raymond Alvarez, MD",
      "readBy": "Dr. Patricia Ramos, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "32M pre-employment physical; no symptoms.",
      "technique": "PA and lateral views, upright, full inspiration.",
      "findings": "Heart: Normal size and silhouette.\\n\\nMediastinum: Normal contours, no widening.\\n\\nLungs: Clear bilaterally. No consolidation, effusion, or pneumothorax.\\n\\nBones: No acute osseous abnormality.",
      "impression": "1. Normal chest radiograph.",
      "dictated": "10/02/2023 10:15",
      "verified": "10/02/2023 13:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-295",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/01/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-663",
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
      "date": "2010",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Hepatitis B (3/3)",
      "date": "1992",
      "site": "Right vastus lateralis IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: HTN, T2DM, alive at 58",
    "Father: Hyperlipidemia, alive at 60",
    "Brother: Asthma, age 28",
    "Paternal grandfather: Stroke at age 72, deceased"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Software engineer — remote work"
    ],
    [
      "Marital",
      "Single"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social, 2-3 drinks on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Running 3-4x/week, recreational basketball 1x/week"
    ],
    [
      "Housing",
      "Lives alone in apartment; mother nearby"
    ],
    [
      "Safety",
      "Denies firearms; seatbelt"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "encephalitis",
    "diagnosis": "Arboviral Encephalitis (Suspected Eastern Equine Encephalitis)",
    "acuity": 2,
    "presentation": "Headache",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Trevor appears anxious and somewhat disoriented, frequently pausing mid-sentence and looking confused. He's cooperative but seems to have difficulty concentrating and occasionally asks you to repeat questions, showing visible distress about his worsening symptoms.",
    "interviewQuestions": [
      "Can you tell me more about when your headache started and how it has changed?",
      "What was the highest fever you've measured, and when did it start?",
      "You mentioned camping - where exactly did you go and what activities did you do?",
      "Have you noticed any confusion or memory problems, or has anyone else commented on this?",
      "Are you experiencing any nausea, vomiting, or sensitivity to light?",
      "Have you had any neck stiffness or pain when moving your neck?",
      "Any muscle weakness, numbness, or difficulty with coordination?",
      "Have you noticed any rash or skin changes since returning from camping?",
      "Any recent mosquito or tick bites that you noticed?",
      "Have you had any seizures or episodes where you lost consciousness?",
      "What medications have you tried for your symptoms and how well did they work?",
      "Have you been around horses or other animals recently during your camping trip?",
      "Any recent travel outside of Florida or exposure to standing water?"
    ],
    "patientResponses": {
      "default": "Sorry, could you repeat that? I'm having trouble focusing right now and my head is really pounding.",
      "onset": "The headache started about two days ago and has been getting progressively worse. It started as a dull ache but now it's this intense, throbbing pain that won't go away.",
      "character": "It's this deep, pounding headache - different from my usual tension headaches. It feels like pressure building up inside my head and it's constant.",
      "location": "It's all over my head, but seems worst in the front and sides. Sometimes it feels like it's behind my eyes too.",
      "severity": "Right now it's probably an 8 or 9 out of 10. I can barely function - I had to call out of work yesterday and today because I can't even look at my computer screen.",
      "aggravating": "Any light makes it much worse, and moving around or bending over is terrible. Even normal sounds seem too loud and make the pain spike.",
      "relieving": "I've been taking acetaminophen and ibuprofen but they're barely touching it. Lying in a dark, quiet room helps a little bit.",
      "associated": "I've had a high fever - got up to 103.2°F yesterday. I'm exhausted, my whole body aches, and I feel nauseous. My mom says I've been saying things that don't make sense.",
      "denies": "No rash that I've noticed, no neck stiffness really, and no seizures or blackouts that I'm aware of.",
      "history": "I get tension headaches sometimes from work stress, but nothing like this. This is completely different and much worse than anything I've had before.",
      "medications": "Cetirizine 10mg daily; Acetaminophen 500mg PRN",
      "allergies": "NKDA",
      "family": "No one in my family has had anything like this. My mom has diabetes and high blood pressure, my dad has cholesterol issues, and my brother has asthma.",
      "social": "I'm a software engineer working remotely. I went camping in the Everglades area last weekend - lots of hiking and fishing. I don't smoke, just drink socially on weekends, no drugs."
    },
    "examManeuvers": [
      "Mental status examination and cognitive assessment",
      "Nuchal rigidity testing (Kernig's and Brudzinski's signs)",
      "Fundoscopic examination",
      "Cranial nerve examination",
      "Motor strength and coordination testing",
      "Deep tendon reflexes",
      "Skin examination for rashes or bite marks",
      "Lymph node palpation",
      "Temperature assessment and general appearance"
    ],
    "examFindings": {
      "Mental status examination and cognitive assessment": "Patient is oriented to person and place but uncertain about date. Demonstrates mild confusion with delayed responses to complex questions. Short-term memory appears impaired.",
      "Nuchal rigidity testing (Kernig's and Brudzinski's signs)": "Mild neck stiffness present. Kernig's sign negative, Brudzinski's sign questionably positive with slight hip flexion.",
      "Fundoscopic examination": "Mild papilledema noted bilaterally with slightly blurred disc margins, suggesting increased intracranial pressure.",
      "Cranial nerve examination": "Cranial nerves II-XII grossly intact. Mild photophobia noted during pupillary examination.",
      "Motor strength and coordination testing": "Motor strength 5/5 throughout but patient exhibits mild tremor in hands. Finger-to-nose testing shows slight dysmetria.",
      "Deep tendon reflexes": "Reflexes 2+ and symmetric throughout. Plantar reflexes downgoing bilaterally.",
      "Skin examination for rashes or bite marks": "Multiple small mosquito bite marks noted on arms and legs. No obvious rash or tick attachment sites visible.",
      "Lymph node palpation": "No significant lymphadenopathy in cervical, axillary, or inguinal regions.",
      "Temperature assessment and general appearance": "Patient appears ill and lethargic. Current temperature 102.4°F. Mild diaphoresis present."
    },
    "ddxTargets": [
      "Arboviral Encephalitis (Suspected Eastern Equine Encephalitis) (correct diagnosis)",
      "West Nile Virus Encephalitis",
      "Bacterial Meningitis",
      "Herpes Simplex Encephalitis",
      "Brain Abscess",
      "Viral Meningitis",
      "Migraine with Status Migrainosus"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'camping headache' as simple dehydration or tension headache, missing the severity and neurologic involvement that suggests encephalitis.",
      "prematureClosure": "May stop at viral syndrome or migraine without fully exploring the altered mental status and recent travel to EEE-endemic area.",
      "availabilityBias": "More common causes like migraine or viral illness may overshadow consideration of rare but serious arboviral encephalitis despite geographic risk factors."
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. You mentioned several possibilities - now think about what key historical elements would help you distinguish between infectious causes versus primary headache disorders. What specific questions about his camping trip and symptom timeline will be most revealing?",
      "phase5": "You've gathered important information about his recent travel to Florida and outdoor exposure, plus noted some concerning neurologic findings. How does the combination of fever, altered mental status, and his geographic exposure pattern help narrow your differential? What's the most concerning diagnosis you need to rule out?",
      "finalDebrief": "This case illustrates how geographic and seasonal factors can be crucial diagnostic clues. Eastern Equine Encephalitis, while rare, has a very high case-fatality rate and requires rapid recognition. Notice how the patient's recent travel to rural Florida during mosquito season, combined with fever and neurologic symptoms, should raise suspicion for arboviral disease even though it's uncommon."
    }
  }
};
