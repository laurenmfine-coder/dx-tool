// Virtual EMR Case: Acute Cholecystitis with Choledocholithiasis
// Variant: cholelithiasis-cholecystitis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Natasha Pierre-Louis",
    "patientHPI": "I keep getting these awful pains in my upper right side, especially after I eat anything greasy or fatty. It usually lasts about an hour and shoots around to my back, and I feel really nauseous when it happens. This has happened three times in the past few months.",
    "dob": "08/06/1982",
    "age": 43,
    "sex": "Female",
    "mrn": "RDX-2025-43344",
    "pronouns": "She/Her",
    "insurance": "BlueCross BlueShield HMO",
    "pcp": "Dr. Renee Augustin, MD",
    "pharmacy": "Publix Pharmacy — 2200 S University Dr, Riverside, FL",
    "language": "English, Haitian Creole",
    "race": "Black (Haitian American)",
    "address": "689 Dogwood Ln, Richmond, VA 23222",
    "phone": "(954) 555-8214",
    "email": "n.pierrelouis82@email.com",
    "emergencyContact": {
      "name": "Jean-Pierre Louis (Husband)",
      "phone": "(954) 555-8228"
    }
  },
  "problems": [
    {
      "problem": "Cholelithiasis — Known",
      "icd": "K80.20",
      "onset": "2024",
      "status": "Active",
      "notes": "Incidental finding on RUQ US (08/2024) for RUQ discomfort; multiple gallstones without cholecystitis at that time; elective cholecystectomy discussed — patient deferred surgery"
    },
    {
      "problem": "Obesity, BMI 36.8",
      "icd": "E66.01",
      "onset": "2014",
      "status": "Active",
      "notes": "Class II obesity; weight gain since second pregnancy"
    },
    {
      "problem": "Sickle Cell Trait",
      "icd": "D57.3",
      "onset": "Birth",
      "status": "Active",
      "notes": "Hemoglobin AS; contributes to pigmented gallstone risk; otherwise asymptomatic"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2020",
      "status": "Active",
      "notes": "On amlodipine; controlled"
    },
    {
      "problem": "Prior Episodes of Biliary Colic",
      "icd": "K80.20",
      "onset": "2024",
      "status": "Active",
      "notes": "3 episodes of postprandial RUQ pain in past year — lasted 30-60 min, self-resolved; no fever or jaundice with prior episodes; increasingly frequent"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Augustin",
      "start": "06/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Augustin",
      "start": "08/2024",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth once daily before breakfast",
      "prescriber": "Dr. Augustin",
      "start": "09/2024",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Erythromycin",
      "type": "Drug",
      "reaction": "Severe abdominal cramping, nausea, vomiting",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2026",
      "bp": "148/92",
      "hr": 104,
      "rr": 20,
      "temp": "102.4°F",
      "spo2": "97%",
      "wt": "214 lbs",
      "ht": "5'5\"",
      "bmi": 35.6,
      "setting": "ED"
    },
    {
      "date": "08/18/2024",
      "bp": "132/84",
      "hr": 78,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "218 lbs",
      "ht": "5'5\"",
      "bmi": 36.3,
      "setting": "PCP Office"
    },
    {
      "date": "03/10/2024",
      "bp": "128/82",
      "hr": 74,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "220 lbs",
      "ht": "5'5\"",
      "bmi": 36.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Renee Augustin, MD",
      "cc": "RUQ pain — recurrent; ultrasound results review",
      "hpi": "42F with obesity presents for recurrent RUQ pain. Has had 3 episodes of postprandial RUQ pain over past 4 months — each after fatty meals, lasting 30-60 minutes, radiating to right scapula, associated with nausea. Self-resolves. No fever, no jaundice. US (08/2024) shows multiple gallstones. Surgery consult placed. Sickle cell trait — contributes to pigmented stone risk.",
      "exam": "Obese female, NAD. Abdomen: Soft, mild RUQ tenderness to deep palpation; no rebound or guarding; negative Murphy sign. No jaundice.",
      "assessment": "1. Symptomatic cholelithiasis — recurrent biliary colic\n2. Sickle cell trait — pigmented stone predisposition\n3. Elective cholecystectomy indicated",
      "plan": "1. General surgery referral for elective laparoscopic cholecystectomy\n2. Low-fat diet counseling\n3. Omeprazole 20mg daily for concomitant dyspepsia\n4. Acetaminophen PRN for pain (avoid NSAIDs — surgical planning)\n5. Return if fevers, persistent pain >6 hours, jaundice, or vomiting"
    },
    {
      "id": "V002",
      "date": "03/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Renee Augustin, MD",
      "cc": "RUQ discomfort — new",
      "hpi": "42F with obesity presents with 2-week history of intermittent RUQ discomfort after meals, especially after fried food. Describes 'crampy' feeling that lasts 20-30 minutes. No fevers, no jaundice. No change in stool color. First episode like this.",
      "exam": "Obese female, NAD. Abdomen: Soft, nontender today. No Murphy sign.",
      "assessment": "1. Dyspepsia vs early biliary colic\n2. Sickle cell trait — gallstone risk factor",
      "plan": "1. RUQ ultrasound ordered\n2. Low-fat diet trial\n3. Return after US results"
    }
  ],
  "labs": [
    {
      "date": "08/18/2024",
      "time": "10:00",
      "orderedBy": "Dr. Augustin",
      "collected": "08/18/2024 10:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-800818",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "HEPATIC PANEL",
          "results": [
            {
              "test": "ALT",
              "value": "28",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST",
              "value": "24",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            },
            {
              "test": "ALP",
              "value": "82",
              "unit": "U/L",
              "range": "44-147",
              "flag": ""
            },
            {
              "test": "Total Bilirubin",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": ""
            },
            {
              "test": "Direct Bilirubin",
              "value": "0.2",
              "unit": "mg/dL",
              "range": "0.0-0.3",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "7.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "38.4",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "264",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "LIPASE",
          "results": [
            {
              "test": "Lipase",
              "value": "42",
              "unit": "U/L",
              "range": "10-140",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "08/2024",
      "study": "ULTRASOUND ABDOMEN — RIGHT UPPER QUADRANT",
      "accession": "IMG-2024-80814",
      "status": "FINAL",
      "orderedBy": "Dr. Augustin",
      "readBy": "Dr. Patricia Gomez, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Recurrent RUQ pain — evaluate for cholelithiasis",
      "technique": "Real-time ultrasound of the right upper quadrant.",
      "findings": "Gallbladder: Multiple echogenic foci with posterior acoustic shadowing consistent with cholelithiasis — largest stone measures 1.8 cm. Gallbladder wall thickness 2 mm (normal). No pericholecystic fluid. Negative sonographic Murphy sign.\n\nCommon bile duct: 4 mm (normal).\n\nLiver: Normal echogenicity. No focal lesions.\n\nRight kidney: Normal.",
      "impression": "1. Cholelithiasis — multiple gallstones; largest 1.8 cm.\n2. No sonographic evidence of acute cholecystitis.\n3. Normal caliber common bile duct.",
      "dictated": "08/14/2024 11:00",
      "verified": "08/14/2024 13:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-9612",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "10/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2614",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "08/2023",
      "site": "Left deltoid IM",
      "lot": "TD23-518",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B Series",
      "date": "2005",
      "site": "Right deltoid IM",
      "lot": "HB05-402",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Gallstones — cholecystectomy at age 40; HTN; alive at 68",
    "Father: Sickle cell trait; T2DM; alive at 72",
    "Sister: Gallstones; sickle cell trait; alive at 40",
    "Brother: Sickle cell disease (SS); alive at 38 (frequent crises)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Administrative assistant at law firm; full-time, sedentary work"
    ],
    [
      "Marital",
      "Married 16 years; 2 children (ages 8 and 11)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Rare — occasional wine at holidays"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 2x/week; limited by knee pain (weight-related)"
    ],
    [
      "Housing",
      "Townhouse with husband and children"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; no firearms"
    ],
    [
      "Advance Directive",
      "None — not discussed"
    ]
  ],
  "meta": {
    "caseId": "cholelithiasis-cholecystitis",
    "diagnosis": "Acute Calculous Cholecystitis with Choledocholithiasis (CBD Stone with Obstructive Jaundice — Patient Who Deferred Elective Cholecystectomy, Sickle Cell Trait with Pigmented Stones)",
    "acuity": 2,
    "presentation": "Toxicologic Emergency",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Natasha appears anxious and uncomfortable, frequently shifting in her chair and holding her right upper abdomen. She is cooperative and articulate but clearly distressed, speaking in a slightly strained voice and occasionally pausing to grimace when pain flares. She seems frustrated that these episodes keep recurring despite knowing about her gallstones.",
    "interviewQuestions": [
      "Can you describe the pain you're experiencing right now?",
      "When did this current episode of pain begin?",
      "Have you noticed any yellowing of your skin or eyes recently?",
      "What color has your urine been lately?",
      "Have you had any fever, chills, or night sweats?",
      "Tell me about your bowel movements - any changes in color or consistency?",
      "Have you experienced any nausea or vomiting with this episode?",
      "You mentioned previous episodes - how does this compare to those?",
      "I see you have a history of gallstones - have you been recommended for surgery?",
      "Are you taking any medications regularly?",
      "Do you have any medication allergies?",
      "Tell me about your family history, particularly regarding gallbladder problems",
      "Have you eaten anything specific that might have triggered this episode?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble focusing because of this pain.",
      "onset": "This pain started yesterday evening around 8 PM, about two hours after I had fried chicken for dinner. It's been constant since then, not like my usual episodes that come and go.",
      "character": "It's a sharp, cramping pain that feels like someone is squeezing my right side with a vice. It's much more intense and constant than my previous episodes.",
      "location": "The pain is right here under my right ribs and shoots straight through to my back, right between my shoulder blades. Sometimes I feel it up in my right shoulder too.",
      "severity": "Right now it's about an 8 out of 10. My previous episodes were maybe a 6, but this is much worse and it won't go away. I can barely concentrate at work.",
      "aggravating": "Any fatty or greasy food makes it worse. Even thinking about food makes me nauseous. Moving around or taking deep breaths makes the pain sharper.",
      "relieving": "Nothing seems to help this time. Usually acetaminophen would take the edge off my previous episodes, but I've taken it twice and it's not touching this pain.",
      "associated": "I've been feeling really nauseous and threw up twice yesterday. I've also noticed my urine is much darker than usual, almost like tea. I've had chills and feel feverish.",
      "denies": "I haven't had any chest pain, shortness of breath, or diarrhea. No blood in my vomit or stool.",
      "history": "I've had three similar episodes in the past six months, but they were milder and went away after a few hours. My doctor found gallstones on an ultrasound three months ago and recommended surgery, but I kept putting it off because of work and the kids.",
      "medications": "Amlodipine 5mg daily; Acetaminophen 500mg PRN; Omeprazole 20mg daily",
      "allergies": "Erythromycin",
      "family": "My mother had her gallbladder removed when she was 40 because of gallstones. My sister also has gallstones and has the sickle cell trait like me. My father has the sickle cell trait too.",
      "social": "I work as an administrative assistant at a law firm - mostly desk work. I'm married with two kids. I don't smoke, and I only drink wine occasionally during holidays. No drugs."
    },
    "examManeuvers": [
      "Murphy's sign",
      "Abdominal inspection",
      "Right upper quadrant palpation",
      "Scleral and skin examination for jaundice",
      "Courvoisier's sign assessment",
      "Rovsing's sign",
      "Psoas sign",
      "Bowel sounds auscultation",
      "Vital signs assessment",
      "Charcot's triad evaluation"
    ],
    "examFindings": {
      "Murphy's sign": "Positive - patient experiences severe pain and inspiratory arrest when palpating right subcostal area during deep inspiration",
      "Abdominal inspection": "Mild distention, patient guards right upper quadrant, no visible masses or hernias",
      "Right upper quadrant palpation": "Severe tenderness with guarding and rigidity in right subcostal area, no palpable gallbladder",
      "Scleral and skin examination for jaundice": "Pronounced scleral icterus and mild jaundice of skin, particularly noticeable in natural light",
      "Courvoisier's sign assessment": "Negative - no palpable gallbladder despite jaundice",
      "Rovsing's sign": "Negative - no right lower quadrant pain with left lower quadrant palpation",
      "Psoas sign": "Negative - no pain with hip flexion against resistance",
      "Bowel sounds auscultation": "Hypoactive bowel sounds throughout all quadrants",
      "Vital signs assessment": "BP 148/92, HR 104 (tachycardic), Temp 102.4°F (febrile), SpO2 97%",
      "Charcot's triad evaluation": "Present - fever, jaundice, and right upper quadrant pain consistent with ascending cholangitis"
    },
    "ddxTargets": [
      "Acute Calculous Cholecystitis with Choledocholithiasis (CBD Stone with Obstructive Jaundice — Patient Who Deferred Elective Cholecystectomy, Sickle Cell Trait with Pigmented Stones) (correct diagnosis)",
      "Ascending cholangitis",
      "Acute pancreatitis",
      "Hepatitis (viral or drug-induced)",
      "Perforated peptic ulcer",
      "Right lower lobe pneumonia",
      "Acute appendicitis (retrocecal)"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known gallstones and missing the CBD stone component and developing cholangitis, or focusing only on cholecystitis without recognizing biliary obstruction",
      "prematureClosure": "May stop at simple cholecystitis diagnosis without recognizing the more serious choledocholithiasis and obstructive jaundice requiring urgent intervention",
      "availabilityBias": "Recent cases of simple biliary colic might lead to underestimating severity, or unfamiliarity with sickle cell trait predisposition to pigmented stones"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider what additional information would help you differentiate between uncomplicated cholecystitis and more serious biliary complications. What specific questions about the character and evolution of her symptoms might be most revealing given her known gallstone history?",
      "phase5": "Now that you've completed your history and physical, let's think through what you've found. You have a patient with known gallstones who presents with Charcot's triad. How does this change your assessment of urgency, and what does the presence of jaundice tell you about the location of the problem?",
      "finalDebrief": "This case illustrates the progression from asymptomatic cholelithiasis to acute cholecystitis with choledocholithiasis. Notice how the patient's sickle cell trait predisposed her to pigmented stones, and her decision to defer elective surgery led to this emergency presentation. The presence of Charcot's triad indicated ascending cholangitis requiring urgent decompression. What clues in the history and physical examination helped distinguish this from uncomplicated cholecystitis?"
    }
  }
};
