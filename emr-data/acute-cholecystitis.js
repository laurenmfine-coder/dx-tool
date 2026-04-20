
window.EMR_DATA = {
  "patient": {
    "name": "Maria Elena Gutierrez",
    "dob": "03/22/1980",
    "age": 44,
    "sex": "Female",
    "mrn": "RDX-2025-24618",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Rosa Delgado, MD",
    "pharmacy": "CVS Pharmacy \u2014 2200 S University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "3920 SW 52nd Ave, Riverside, FL 33100",
    "phone": "(954) 555-3184",
    "email": "m.gutierrez80@email.com",
    "emergencyContact": {
      "name": "Roberto Gutierrez (Husband)",
      "phone": "(954) 555-3200"
    }
  },
  "problems": [
    {
      "problem": "Acute cholecystitis \u2014 Tokyo Grade II (moderate)",
      "icd": "K81.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Susan Park, 52F \u2014 RUQ pain 12 hours, Murphy sign positive, fever 38.6\u00b0C, WBC 14.2. Ultrasound: gallstones, wall thickening, pericholecystic fluid."
    },
    {
      "problem": "Cholelithiasis \u2014 multiple stones",
      "icd": "K80.20",
      "onset": "2022",
      "status": "Active",
      "notes": "Known gallstones. Classic 'fat, female, forty, fertile, fair' but applies to less than half of cases."
    },
    {
      "problem": "Mild transaminase elevation \u2014 possible CBD stone",
      "icd": "K80.50",
      "onset": "2024",
      "status": "Active",
      "notes": "ALT 68, AST 72 \u2014 biliary pattern. Check direct bilirubin and consider MRCP to rule out choledocholithiasis."
    }
  ],
  "medications": [
    {
      "name": "Piperacillin-tazobactam 3.375g IV q6h",
      "sig": "Empiric coverage for gram-negative biliary pathogens (E. coli, Klebsiella). Tokyo guidelines recommend antibiotics for Grade II and III.",
      "prescriber": "Surgery/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 IV"
    },
    {
      "name": "IV hydration \u2014 LR 125mL/hr",
      "sig": "NPO for potential surgery. Fluid resuscitation.",
      "prescriber": "Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Laparoscopic cholecystectomy \u2014 within 24-72 hours",
      "sig": "Tokyo Grade II: early laparoscopic cholecystectomy preferred over interval. 72-hour window associated with lowest conversion-to-open rate.",
      "prescriber": "Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Scheduled \u2014 24h"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "type": "Drug",
      "reaction": "Hives",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/10/2025",
      "bp": "132/84",
      "hr": 88,
      "rr": 16,
      "temp": "99.2\u00b0F",
      "spo2": "98%",
      "wt": "186 lbs",
      "ht": "5'5\"",
      "bmi": 30.9,
      "setting": "PCP Office"
    },
    {
      "date": "07/18/2024",
      "bp": "126/80",
      "hr": 76,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "184 lbs",
      "ht": "5'5\"",
      "bmi": 30.6,
      "setting": "PCP Office"
    },
    {
      "date": "01/22/2024",
      "bp": "124/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "182 lbs",
      "ht": "5'5\"",
      "bmi": 30.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Rosa Delgado, MD",
      "cc": "Follow-up biliary colic; third episode in 6 months",
      "hpi": "44-year-old female with known cholelithiasis presenting after third episode of postprandial RUQ pain in 6 months. Most recent episode 3 days ago \u2014 severe crampy pain after eating fried food, lasted 4 hours, associated with nausea and one episode of vomiting. Pain radiated to right scapula. Resolved spontaneously. Previous episodes similarly self-limited. Initially declined surgery due to work schedule concerns but now willing to consider.",
      "exam": "General: NAD currently. Abdomen: Soft, mild RUQ tenderness on deep palpation, no rebound, no guarding. Positive Murphy sign on deep inspiration. No jaundice. No palpable masses.",
      "assessment": "1. Recurrent biliary colic \u2014 increasing frequency; positive Murphy sign; high risk for progression to acute cholecystitis\n2. Cholelithiasis \u2014 symptomatic\n3. Obesity \u2014 risk factor",
      "plan": "1. URGENT surgical referral for elective laparoscopic cholecystectomy\n2. Dietary modification: low-fat diet strictly until surgery\n3. ED precautions: fever >101\u00b0F, persistent pain >6 hours, jaundice \u2192 ED immediately\n4. CBC, CMP, lipase ordered to establish baseline\n5. Patient agrees to surgical consultation \u2014 appointment pending"
    },
    {
      "id": "V002",
      "date": "07/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Rosa Delgado, MD",
      "cc": "RUQ pain episodes; medication refills",
      "hpi": "44-year-old female with known asymptomatic cholelithiasis now reporting 2 episodes of postprandial RUQ pain in past 2 months. Each lasted 2-3 hours and resolved. Triggered by fatty meals. No fever, no jaundice. Discussed surgical options \u2014 patient prefers conservative management at this time.",
      "exam": "Abdomen: Soft, NT currently, no guarding. No jaundice.",
      "assessment": "1. Biliary colic \u2014 new onset symptomatic cholelithiasis\n2. Dyslipidemia \u2014 stable",
      "plan": "1. Low-fat dietary counseling\n2. Surgical referral offered \u2014 patient declines at this time\n3. Return precautions for cholecystitis/cholangitis reviewed\n4. Continue atorvastatin"
    },
    {
      "id": "V003",
      "date": "09/12/2023",
      "type": "Primary Care",
      "provider": "Dr. Rosa Delgado, MD",
      "cc": "Annual physical; ultrasound results review",
      "hpi": "43-year-old female for annual exam. Incidental finding of cholelithiasis on RUQ ultrasound ordered for mild dyspepsia. No biliary symptoms at that time. Multiple gallstones identified. Asymptomatic.",
      "exam": "General: NAD. Abdomen: Soft, NT, no organomegaly.",
      "assessment": "1. Incidental cholelithiasis \u2014 asymptomatic\n2. Obesity \u2014 stable\n3. Dyslipidemia \u2014 controlled on statin",
      "plan": "1. Watchful waiting for asymptomatic gallstones\n2. Low-fat diet recommended\n3. Elective cholecystectomy discussed as option \u2014 patient declines\n4. Continue atorvastatin"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Cholecystitis Workup",
      "results": [
        {
          "test": "WBC",
          "value": "14.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Total bilirubin",
          "value": "1.8",
          "unit": "mg/dL",
          "ref": "0.2-1.2",
          "flag": "H"
        },
        {
          "test": "Direct bilirubin",
          "value": "0.9",
          "unit": "mg/dL",
          "ref": "0-0.3",
          "flag": "H"
        },
        {
          "test": "ALT",
          "value": "68",
          "unit": "U/L",
          "ref": "7-56",
          "flag": "H"
        },
        {
          "test": "Lipase",
          "value": "42",
          "unit": "U/L",
          "ref": "10-140",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Right Upper Quadrant Ultrasound",
      "findings": "Multiple echogenic gallstones with posterior shadowing. Gallbladder wall thickening 6mm. Pericholecystic fluid. Sonographic Murphy sign positive.",
      "impression": "Acute calculous cholecystitis. No common bile duct dilation on ultrasound."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-302",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-812",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Hepatitis B \u2014 Series complete",
      "date": "1998",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Cholelithiasis (cholecystectomy age 48), T2DM, alive at 68",
    "Father: Hypertension, hyperlipidemia, alive at 70",
    "Sister: Gallstones (cholecystectomy age 40), alive at 46",
    "Maternal grandmother: Gallbladder cancer, deceased at 72"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Office manager at law firm"
    ],
    [
      "Marital",
      "Married \u2014 18 years"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social \u2014 1-2 glasses wine on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walks 2-3x/week; trying to lose weight"
    ],
    [
      "Housing",
      "Lives with husband and 2 teenage children in single-family home"
    ],
    [
      "Safety",
      "Wears seatbelt; no IPV concerns"
    ],
    [
      "Advance Directive",
      "None"
    ]
  ],
  "meta": {
    "caseId": "acute-cholecystitis",
    "diagnosis": "Acute Calculous Cholecystitis (Tokyo Grade II \u2014 Moderate)",
    "acuity": 3,
    "presentation": "GI Emergency",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Maria appears moderately distressed and anxious, describing her symptoms with concern but in detail. She is forthcoming about her symptoms and history, though visibly uncomfortable with intermittent grimacing from persistent RUQ discomfort.",
    "interviewQuestions": [
      "Can you describe when your current pain started?",
      "What does the pain feel like - sharp, dull, cramping?",
      "Where exactly is the pain located?",
      "Does the pain move or radiate anywhere?",
      "On a scale of 1-10, how severe is your pain?",
      "What makes the pain worse or better?",
      "Have you had fever, chills, or sweats?",
      "Any nausea, vomiting, or changes in appetite?",
      "Have you noticed any changes in your urine or stool color?",
      "Tell me about your previous episodes of similar pain",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Any family history of gallbladder problems?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "The pain started suddenly 3 days ago after I ate fried chicken at dinner, around 8 PM. It's been constant since then, not coming and going like my previous episodes.",
      "character": "It's a deep, constant aching pain, different from my usual crampy gallbladder attacks. It feels like a steady, dull pressure that won't go away.",
      "location": "It's right here under my right ribcage, in my upper abdomen. Sometimes I feel it in my right shoulder blade too.",
      "severity": "Right now it's about a 6 out of 10, but when it first started it was easily an 8. It's affecting my sleep and I can't focus at work.",
      "aggravating": "Any food makes it worse, especially fatty foods. Even moving around or taking deep breaths increases the pain.",
      "relieving": "The ibuprofen helps a little bit, maybe brings it from a 6 to a 4. Heat pads don't help like they used to with my previous attacks.",
      "associated": "I've had some nausea and threw up twice yesterday. I've also had chills and feel feverish. My appetite is completely gone.",
      "denies": "No yellowing of my skin or eyes, no dark urine, no severe vomiting, no chest pain or shortness of breath.",
      "history": "I've had two similar episodes in the past 6 months, but they only lasted a few hours and went away on their own. This time it's not going away and feels much worse.",
      "medications": "Atorvastatin 20mg daily; Norgestimate-Ethinyl Estradiol 0.25mg/35mcg daily; Ibuprofen 600mg PRN",
      "allergies": "Sulfa drugs",
      "family": "My mother had her gallbladder removed when she was 48, and my younger sister just had hers out 4 years ago when she was 40. Both had gallstones.",
      "social": "I work as an office manager at a law firm. I'm married with two kids. I don't smoke, and I only have a glass or two of wine on weekends. No drugs."
    },
    "examManeuvers": [
      "Murphy's sign",
      "RUQ palpation",
      "Abdominal inspection",
      "Bowel sounds auscultation",
      "Percussion of RUQ",
      "Assessment for rebound tenderness",
      "Evaluation for jaundice (sclera and skin)",
      "Vital sign assessment",
      "CVA tenderness",
      "Rovsing's sign"
    ],
    "examFindings": {
      "Murphy's sign": "Positive - patient stops inspiration abruptly due to pain when palpating RUQ during deep inspiration",
      "RUQ palpation": "Tender to palpation with voluntary guarding in RUQ, no palpable mass",
      "Abdominal inspection": "No visible distension, no surgical scars, patient guards RUQ area",
      "Bowel sounds auscultation": "Hypoactive bowel sounds throughout all quadrants",
      "Percussion of RUQ": "Tenderness to percussion over RUQ, normal elsewhere",
      "Assessment for rebound tenderness": "Mild rebound tenderness in RUQ, negative in other quadrants",
      "Evaluation for jaundice (sclera and skin)": "No scleral icterus, no skin yellowing noted",
      "Vital sign assessment": "Low-grade fever 99.2\u00b0F, mild tachycardia HR 88, BP 132/84",
      "CVA tenderness": "Negative bilaterally",
      "Rovsing's sign": "Negative - no RUQ pain with LLQ palpation"
    },
    "ddxTargets": [
      "Acute cholecystitis \u2014 Tokyo Grade II (correct)",
      "Choledocholithiasis \u2014 elevated direct bilirubin warrants MRCP; can coexist",
      "Acute pancreatitis \u2014 lipase normal, pain epigastric not RUQ; different",
      "Peptic ulcer disease \u2014 no stones, different pain location and character",
      "Hepatic abscess \u2014 different fever pattern, no Murphy sign; CT distinguishes",
      "Fitz-Hugh-Curtis syndrome \u2014 young women, right shoulder tip, sexual history"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's known cholelithiasis history and assuming this is just another episode of biliary colic, potentially missing the progression to acute cholecystitis",
      "prematureClosure": "May stop at biliary colic diagnosis without recognizing persistent symptoms, fever, and positive Murphy's sign indicating inflammatory progression",
      "availabilityBias": "Recent cases of simple biliary colic might lead to underestimating this presentation's severity and missing acute cholecystitis"
    },
    "coachPrompts": {
      "phase2": "Consider Maria's presenting symptoms carefully. While she has a history of gallstones, how might her current presentation differ from simple biliary colic? What key features in her history should guide your interview?",
      "phase5": "You've gathered good history and physical exam data. How do Maria's current symptoms and findings compare to her previous gallstone episodes? What does the presence of fever, persistent pain, and positive Murphy's sign suggest about disease progression?",
      "finalDebrief": "Let's trace your diagnostic evolution. Initially, Maria's known gallstone history suggested biliary colic, but several red flags pointed toward acute cholecystitis: persistent pain beyond typical colic duration, fever, positive Murphy's sign, and failure of symptoms to resolve. How did recognizing these inflammatory signs help differentiate between uncomplicated biliary colic and acute cholecystitis?",
      "final": "Diagnosis: acute cholecystitis \u2014 Tokyo Grade II. Key learning: (1) Tokyo Guidelines grading: Grade I (mild) = no organ dysfunction, responds to medical therapy. Grade II (moderate) = WBC >18, duration >72h, significant local inflammation. Grade III (severe) = organ dysfunction (hypotension, renal failure, jaundice). Grade determines urgency of surgery. (2) Murphy sign: inspiratory arrest on deep palpation of RUQ \u2014 high specificity for cholecystitis. Sonographic Murphy sign on ultrasound has similar value. (3) Early vs interval cholecystectomy: for Grade I/II, early laparoscopic cholecystectomy within 72 hours is preferred \u2014 lower conversion rate than delayed (>72h) and shorter hospital stay. The 'best timing window' is <24 hours from symptom onset. (4) CBD stone evaluation: elevated direct bilirubin + transaminases warrants MRCP before cholecystectomy. Preoperative ERCP if CBD stone confirmed. (5) Acalculous cholecystitis: occurs in critically ill ICU patients (sepsis, trauma, burns, TPN). Higher morbidity \u2014 often gangrenous."
    }
  }
};
