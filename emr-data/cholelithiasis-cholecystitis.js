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
            { "test": "ALT", "value": "28", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST", "value": "24", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "ALP", "value": "82", "unit": "U/L", "range": "44-147", "flag": "" },
            { "test": "Total Bilirubin", "value": "0.8", "unit": "mg/dL", "range": "0.1-1.2", "flag": "" },
            { "test": "Direct Bilirubin", "value": "0.2", "unit": "mg/dL", "range": "0.0-0.3", "flag": "" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "7.8", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "12.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "38.4", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelets", "value": "264", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIPASE",
          "results": [
            { "test": "Lipase", "value": "42", "unit": "U/L", "range": "10-140", "flag": "" }
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
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9612", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Pfizer)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-2614", "mfr": "Pfizer" },
    { "vaccine": "Tdap", "date": "08/2023", "site": "Left deltoid IM", "lot": "TD23-518", "mfr": "GSK" },
    { "vaccine": "Hepatitis B Series", "date": "2005", "site": "Right deltoid IM", "lot": "HB05-402", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Mother: Gallstones — cholecystectomy at age 40; HTN; alive at 68",
    "Father: Sickle cell trait; T2DM; alive at 72",
    "Sister: Gallstones; sickle cell trait; alive at 40",
    "Brother: Sickle cell disease (SS); alive at 38 (frequent crises)"
  ],
  "socialHistory": [
    ["Occupation", "Administrative assistant at law firm; full-time, sedentary work"],
    ["Marital", "Married 16 years; 2 children (ages 8 and 11)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Rare — occasional wine at holidays"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 2x/week; limited by knee pain (weight-related)"],
    ["Housing", "Townhouse with husband and children"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "cholelithiasis-cholecystitis",
    "diagnosis": "Acute Calculous Cholecystitis with Choledocholithiasis (CBD Stone with Obstructive Jaundice — Patient Who Deferred Elective Cholecystectomy, Sickle Cell Trait with Pigmented Stones)",
    "acuity": 2,
    "presentation": "Toxicologic Emergency",
    "category": "gastrointestinal"
  },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Abdominal inspection",
        "Abdominal auscultation",
        "Abdominal palpation light and deep",
        "Rebound and guarding assessment",
        "Rectal examination if indicated",
        "Skin for jaundice or stigmata"
    ],
    "examFindings": {
        "General appearance": "Clinical finding consistent with Acute Calculous Cholecystitis with Choledocholithiasis. Document specifically what you observe.",
        "Vital signs": "Clinical finding consistent with Acute Calculous Cholecystitis with Choledocholithiasis. Document specifically what you observe.",
        "Abdominal inspection": "Clinical finding consistent with Acute Calculous Cholecystitis with Choledocholithiasis. Document specifically what you observe.",
        "Abdominal auscultation": "Clinical finding consistent with Acute Calculous Cholecystitis with Choledocholithiasis. Document specifically what you observe.",
        "Abdominal palpation light and deep": "Clinical finding consistent with Acute Calculous Cholecystitis with Choledocholithiasis. Document specifically what you observe.",
        "Rebound and guarding assessment": "Clinical finding consistent with Acute Calculous Cholecystitis with Choledocholithiasis. Document specifically what you observe.",
        "Rectal examination if indicated": "Clinical finding consistent with Acute Calculous Cholecystitis with Choledocholithiasis. Document specifically what you observe.",
        "Skin for jaundice or stigmata": "Clinical finding consistent with Acute Calculous Cholecystitis with Choledocholithiasis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Acute Calculous Cholecystitis with Choledocholithiasis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Calculous Cholecystitis with Choledocholithiasis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Acute Calculous Cholecystitis with Choledocholithiasis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Acute Calculous Cholecystitis with Choledocholithiasis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Natasha Pierre-Louis's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Acute Calculous Cholecystitis with Choledocholithiasis (CBD Stone with Obstructive Jaundice \u2014 Patient Who Deferred Elective Cholecystectomy, Sickle Cell Trait with Pigmented Stones). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Natasha appears anxious and uncomfortable, frequently shifting position and placing her hand over her right upper abdomen. She is forthcoming about her symptoms but admits she's been avoiding surgery despite previous recommendations, expressing fear about the procedure and concern about missing work.",
    "interviewQuestions": [
        "Can you describe exactly when this current episode of pain started?",
        "How would you characterize the quality of your pain - sharp, dull, cramping?",
        "Where exactly is the pain located and does it radiate anywhere?",
        "On a scale of 1-10, how severe is your pain right now?",
        "What seems to trigger these episodes of pain?",
        "Have you noticed any changes in your urine or bowel movements?",
        "Have you experienced any nausea, vomiting, or fever with this episode?",
        "You mentioned this has happened before - can you tell me about those previous episodes?",
        "Have you ever been told you have gallstones or been recommended for surgery?",
        "What medications are you currently taking?",
        "Do you have any known allergies to medications?",
        "Is there any family history of gallbladder problems?",
        "Have you noticed any yellowing of your eyes or skin recently?"
    ],
    "patientResponses": {
        "default": "I'm not sure I understand what you're asking. Could you explain that differently?",
        "onset": "This current episode started yesterday evening after dinner, but it's been much worse than my previous episodes and hasn't gone away like they usually do.",
        "character": "It's a sharp, stabbing pain that comes in waves, but now it's become more constant and achy. It's definitely the worst I've ever felt it.",
        "location": "It's right here under my right ribs, and it shoots straight through to my back between my shoulder blades. Sometimes I feel it in my right shoulder too.",
        "severity": "Right now it's about an 8 out of 10. The previous episodes were maybe a 6, but this is much worse and it's not going away.",
        "aggravating": "Eating anything fatty or greasy definitely triggers it. Even thinking about food makes me nauseous right now. Moving around or taking deep breaths makes it worse too.",
        "relieving": "Usually these episodes would go away after an hour or so if I didn't eat, but this time nothing is helping. I tried acetaminophen but it barely touched it.",
        "associated": "I've been very nauseous and threw up twice yesterday. I feel feverish and weak. I think my urine might be darker than usual, and I'm not sure but my husband said my eyes look a little yellow.",
        "denies": "I haven't had any chest pain, difficulty breathing, or diarrhea. No blood in my vomit or stool.",
        "history": "I've had three similar episodes in the past few months, but they were milder and went away on their own. About two years ago, my doctor found gallstones on an ultrasound and recommended surgery, but I kept putting it off because I was scared and couldn't afford to miss work.",
        "medications": "Amlodipine 5mg daily; Acetaminophen 500mg PRN; Omeprazole 20mg daily",
        "allergies": "Erythromycin",
        "family": "My mother had her gallbladder removed when she was 40, and my sister has gallstones too. Both my father and I have sickle cell trait, and my sister does as well.",
        "social": "I work full-time as an administrative assistant at a law firm - it's mostly desk work. I'm married with two kids. I don't smoke, and I only drink wine occasionally during holidays. I don't use any recreational drugs."
    },
    "examManeuvers": [
        "Murphy's sign",
        "Inspection for jaundice (scleral icterus)",
        "Right upper quadrant palpation",
        "Percussion of liver span",
        "Assessment for Charcot's triad",
        "Vital signs review",
        "Abdominal inspection for distension",
        "Auscultation of bowel sounds",
        "Assessment for rebound tenderness",
        "Evaluation for hepatomegaly"
    ],
    "examFindings": {
        "Murphy's sign": "Positive - patient demonstrates inspiratory arrest and severe pain when palpating under right costal margin during deep inspiration",
        "Inspection for jaundice (scleral icterus)": "Mild scleral icterus present bilaterally, subtle yellowing of skin noted",
        "Right upper quadrant palpation": "Marked tenderness in RUQ with voluntary guarding, possible palpable gallbladder (Courvoisier's sign negative as gallbladder is not enlarged)",
        "Percussion of liver span": "Liver span approximately 12 cm at midclavicular line, upper border of dullness elevated suggesting hepatomegaly",
        "Assessment for Charcot's triad": "Two of three components present: RUQ pain and jaundice; fever of 102.4°F completes the triad",
        "Vital signs review": "Tachycardic at 104 bpm, hypertensive at 148/92, febrile at 102.4°F, oxygen saturation normal at 97%",
        "Abdominal inspection for distension": "Mild abdominal distension, patient splinting and favoring right side",
        "Auscultation of bowel sounds": "Hypoactive bowel sounds throughout all quadrants",
        "Assessment for rebound tenderness": "Mild rebound tenderness in RUQ, patient exhibits significant discomfort",
        "Evaluation for hepatomegaly": "Liver edge palpable 2-3 cm below right costal margin, smooth and tender"
    },
    "ddxTargets": [
        "Acute Calculous Cholecystitis with Choledocholithiasis (CBD Stone with Obstructive Jaundice — Patient Who Deferred Elective Cholecystitis, Sickle Cell Trait with Pigmented Stones) (correct diagnosis)",
        "Acute cholangitis",
        "Acute pancreatitis",
        "Acute myocardial infarction",
        "Hepatic abscess",
        "Peptic ulcer disease with perforation",
        "Right-sided pneumonia with pleuritis"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on the patient's known gallstone history and missing the CBD stone component or underestimating severity of current presentation",
        "prematureClosure": "May stop investigation after confirming cholecystitis without recognizing concurrent choledocholithiasis and need for emergent intervention",
        "availabilityBias": "Common presentation may lead to routine disposition without recognizing Charcot's triad and potential for ascending cholangitis"
    },
    "coachPrompts": {
        "phase2": "This patient has a known history of gallstones but has presented with what seems to be a more severe episode. What specific historical elements and associated symptoms would help you differentiate between simple biliary colic, acute cholecystitis, and more serious complications like choledocholithiasis or cholangitis?",
        "phase5": "You've identified key findings including fever, RUQ tenderness, and jaundice. How do these findings fit together, and what does this constellation of symptoms suggest about the anatomy and pathophysiology involved? Consider the patient's sickle cell trait and its relationship to gallstone composition.",
        "finalDebrief": "This case demonstrates the progression from simple cholelithiasis to acute cholecystitis with CBD stone obstruction. The patient's sickle cell trait predisposed her to pigmented stone formation. Discuss how Charcot's triad guided your diagnosis and why early recognition of choledocholithiasis is crucial for preventing progression to life-threatening cholangitis. Consider how patient factors like fear of surgery can delay necessary treatment."
    }
}
};
