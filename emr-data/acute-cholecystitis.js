
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
    "pharmacy": "CVS Pharmacy — 2200 S University Dr, Riverside, FL",
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
      "problem": "Cholelithiasis",
      "icd": "K80.20",
      "onset": "2023",
      "status": "Active",
      "notes": "Multiple gallstones on US; asymptomatic initially; declined elective cholecystectomy"
    },
    {
      "problem": "Obesity, Class I",
      "icd": "E66.01",
      "onset": "2018",
      "status": "Active",
      "notes": "BMI 32; dietary counseling"
    },
    {
      "problem": "Dyslipidemia",
      "icd": "E78.5",
      "onset": "2020",
      "status": "Active",
      "notes": "Elevated LDL; on statin"
    },
    {
      "problem": "Oral Contraceptive Use",
      "icd": "Z79.3",
      "onset": "2016",
      "status": "Active",
      "notes": "Combined OCP; risk factor for gallstones"
    },
    {
      "problem": "Biliary Colic, Recurrent",
      "icd": "K80.20",
      "onset": "2024",
      "status": "Active",
      "notes": "3 episodes postprandial RUQ pain in past 6 months; self-limited; surgery again recommended"
    }
  ],
  "medications": [
    {
      "name": "Atorvastatin 20mg daily",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Delgado",
      "start": "06/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Norgestimate-Ethinyl Estradiol 0.25mg/35mcg daily",
      "sig": "Take 1 tablet by mouth daily at same time each day",
      "prescriber": "Dr. Delgado",
      "start": "01/2016",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 600mg PRN",
      "sig": "Take 1 tablet by mouth every 6-8 hours as needed for pain with food",
      "prescriber": "Dr. Delgado",
      "start": "09/2024",
      "refills": 1,
      "status": "PRN"
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
      "temp": "99.2°F",
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
      "temp": "98.6°F",
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
      "temp": "98.4°F",
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
      "hpi": "44-year-old female with known cholelithiasis presenting after third episode of postprandial RUQ pain in 6 months. Most recent episode 3 days ago — severe crampy pain after eating fried food, lasted 4 hours, associated with nausea and one episode of vomiting. Pain radiated to right scapula. Resolved spontaneously. Previous episodes similarly self-limited. Initially declined surgery due to work schedule concerns but now willing to consider.",
      "exam": "General: NAD currently. Abdomen: Soft, mild RUQ tenderness on deep palpation, no rebound, no guarding. Positive Murphy sign on deep inspiration. No jaundice. No palpable masses.",
      "assessment": "1. Recurrent biliary colic — increasing frequency; positive Murphy sign; high risk for progression to acute cholecystitis\n2. Cholelithiasis — symptomatic\n3. Obesity — risk factor",
      "plan": "1. URGENT surgical referral for elective laparoscopic cholecystectomy\n2. Dietary modification: low-fat diet strictly until surgery\n3. ED precautions: fever >101°F, persistent pain >6 hours, jaundice → ED immediately\n4. CBC, CMP, lipase ordered to establish baseline\n5. Patient agrees to surgical consultation — appointment pending"
    },
    {
      "id": "V002",
      "date": "07/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Rosa Delgado, MD",
      "cc": "RUQ pain episodes; medication refills",
      "hpi": "44-year-old female with known asymptomatic cholelithiasis now reporting 2 episodes of postprandial RUQ pain in past 2 months. Each lasted 2-3 hours and resolved. Triggered by fatty meals. No fever, no jaundice. Discussed surgical options — patient prefers conservative management at this time.",
      "exam": "Abdomen: Soft, NT currently, no guarding. No jaundice.",
      "assessment": "1. Biliary colic — new onset symptomatic cholelithiasis\n2. Dyslipidemia — stable",
      "plan": "1. Low-fat dietary counseling\n2. Surgical referral offered — patient declines at this time\n3. Return precautions for cholecystitis/cholangitis reviewed\n4. Continue atorvastatin"
    },
    {
      "id": "V003",
      "date": "09/12/2023",
      "type": "Primary Care",
      "provider": "Dr. Rosa Delgado, MD",
      "cc": "Annual physical; ultrasound results review",
      "hpi": "43-year-old female for annual exam. Incidental finding of cholelithiasis on RUQ ultrasound ordered for mild dyspepsia. No biliary symptoms at that time. Multiple gallstones identified. Asymptomatic.",
      "exam": "General: NAD. Abdomen: Soft, NT, no organomegaly.",
      "assessment": "1. Incidental cholelithiasis — asymptomatic\n2. Obesity — stable\n3. Dyslipidemia — controlled on statin",
      "plan": "1. Watchful waiting for asymptomatic gallstones\n2. Low-fat diet recommended\n3. Elective cholecystectomy discussed as option — patient declines\n4. Continue atorvastatin"
    }
  ],
  "labs": [
    {
      "date": "01/10/2025",
      "time": "10:00",
      "orderedBy": "Dr. Rosa Delgado, MD",
      "collected": "01/10/2025 09:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-246180",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "94", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.6-1.2", "flag": "" },
            { "test": "Sodium", "value": "139", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "Total Bilirubin", "value": "0.8", "unit": "mg/dL", "range": "0.1-1.2", "flag": "" },
            { "test": "ALT (SGPT)", "value": "28", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "24", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "Alkaline Phosphatase", "value": "72", "unit": "U/L", "range": "44-147", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.4", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "40.2", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "268", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIPASE",
          "results": [
            { "test": "Lipase", "value": "32", "unit": "U/L", "range": "0-160", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "08/28/2023",
      "study": "ULTRASOUND RIGHT UPPER QUADRANT",
      "accession": "IMG-2023-24618",
      "status": "FINAL",
      "orderedBy": "Dr. Rosa Delgado, MD",
      "readBy": "Dr. Lisa Nakamura, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "43F with dyspepsia. R/O gallbladder pathology.",
      "technique": "Real-time grayscale and color Doppler sonography of the right upper quadrant.",
      "findings": "Gallbladder: Multiple echogenic foci with posterior acoustic shadowing consistent with cholelithiasis. Largest stone measures approximately 1.2 cm. No gallbladder wall thickening (wall measures 2 mm). No pericholecystic fluid. No sonographic Murphy sign.\\n\\nCommon bile duct: 4 mm — normal caliber. No intrahepatic biliary ductal dilatation.\\n\\nLiver: Normal echogenicity and size. No focal lesions.\\n\\nRight kidney: Normal.",
      "impression": "1. Cholelithiasis — multiple gallstones, largest 1.2 cm.\\n2. No signs of acute cholecystitis (no wall thickening, no pericholecystic fluid, negative sonographic Murphy sign).\\n3. Normal common bile duct caliber.",
      "dictated": "08/28/2023 14:00",
      "verified": "08/28/2023 16:30"
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
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Hepatitis B — Series complete",
      "date": "1998",
      "site": "Left deltoid IM",
      "lot": "—",
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
    ["Occupation", "Office manager at law firm"],
    ["Marital", "Married — 18 years"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 1-2 glasses wine on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Walks 2-3x/week; trying to lose weight"],
    ["Housing", "Lives with husband and 2 teenage children in single-family home"],
    ["Safety", "Wears seatbelt; no IPV concerns"],
    ["Advance Directive", "None"]
  ],
  "meta": {
    "caseId": "acute-cholecystitis",
    "diagnosis": "Acute Cholecystitis",
    "acuity": 3,
    "presentation": "GI Emergency",
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
        "General appearance": "Clinical finding consistent with Acute Cholecystitis. Document specifically what you observe.",
        "Vital signs": "Clinical finding consistent with Acute Cholecystitis. Document specifically what you observe.",
        "Abdominal inspection": "Clinical finding consistent with Acute Cholecystitis. Document specifically what you observe.",
        "Abdominal auscultation": "Clinical finding consistent with Acute Cholecystitis. Document specifically what you observe.",
        "Abdominal palpation light and deep": "Clinical finding consistent with Acute Cholecystitis. Document specifically what you observe.",
        "Rebound and guarding assessment": "Clinical finding consistent with Acute Cholecystitis. Document specifically what you observe.",
        "Rectal examination if indicated": "Clinical finding consistent with Acute Cholecystitis. Document specifically what you observe.",
        "Skin for jaundice or stigmata": "Clinical finding consistent with Acute Cholecystitis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Acute Cholecystitis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Cholecystitis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Acute Cholecystitis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Acute Cholecystitis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Maria Elena Gutierrez's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Acute Cholecystitis. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Maria appears uncomfortable and slightly anxious, holding her right side intermittently. She's cooperative and detailed in her responses, clearly frustrated that the pain episodes are becoming more frequent and severe. She seems worried about missing work and the impact on her family.",
    "interviewQuestions": [
        "Can you tell me about the pain you're experiencing?",
        "When did this current episode of pain begin?",
        "How would you describe the quality of the pain?",
        "Where exactly is the pain located and does it go anywhere else?",
        "On a scale of 1-10, how severe is the pain?",
        "What makes the pain worse or better?",
        "Have you noticed any nausea, vomiting, or fever?",
        "Have you had episodes like this before?",
        "What were you doing or eating when the pain started?",
        "Have you noticed any changes in your bowel movements or urine?",
        "What medications are you currently taking?",
        "Do you have any known allergies to medications?"
    ],
    "patientResponses": {
        "default": "I'm sorry, could you rephrase that? I'm having trouble concentrating with this pain.",
        "onset": "This episode started about 6 hours ago, maybe around 2 PM, about an hour after I had lunch. But I've been having similar attacks for the past 6 months, and they're getting worse.",
        "character": "It's a sharp, crampy pain that comes in waves. Sometimes it feels like someone is squeezing my ribs really tight, and other times it's more of a constant ache.",
        "location": "The pain is mainly in my right upper belly, just below my ribs. Sometimes it shoots around to my back and up to my right shoulder blade.",
        "severity": "Right now it's about a 7 out of 10. During the worst part earlier, it was definitely a 9. I couldn't even stand up straight. It's much worse than my previous episodes.",
        "aggravating": "Fatty or fried foods definitely trigger it. Deep breathing makes it worse, and any movement or pressure on my right side is terrible. Even wearing a bra is uncomfortable.",
        "relieving": "I've been taking ibuprofen which helps a little, but not much. Sitting hunched forward seems to help somewhat. Heat doesn't really do anything.",
        "associated": "I've been feeling nauseous since the pain started, and I vomited once about an hour ago. I feel a bit feverish and have chills. I'm also feeling really tired.",
        "denies": "No diarrhea, no blood in vomit or stool, no burning when I urinate, no chest pain or shortness of breath. The pain isn't related to my menstrual cycle.",
        "history": "Yes, I've had two other episodes in the past 6 months. The first was mild and lasted about 2 hours. The second was worse and lasted about 4 hours. This one is definitely the worst and longest.",
        "medications": "Atorvastatin 20mg daily; Norgestimate-Ethinyl Estradiol 0.25mg/35mcg daily; Ibuprofen 600mg PRN",
        "allergies": "Sulfa drugs",
        "family": "My mother had gallstones and had her gallbladder removed when she was 48. My sister also had gallstones and surgery at 40. My mother also has diabetes.",
        "social": "I work as an office manager at a law firm, so I sit a lot. I'm married for 18 years with two kids. I never smoked, and I only drink a glass or two of wine on weekends. No drugs."
    },
    "examManeuvers": [
        "Murphy's sign",
        "Right upper quadrant palpation",
        "Rovsing's sign",
        "Psoas sign",
        "Obturator sign",
        "Rebound tenderness assessment",
        "Bowel sounds auscultation",
        "Costovertebral angle tenderness",
        "Jaundice assessment (sclera and skin)",
        "Abdominal inspection"
    ],
    "examFindings": {
        "Murphy's sign": "Positive - patient experiences severe pain and inspiratory arrest when palpating RUQ during deep inspiration",
        "Right upper quadrant palpation": "Moderate to severe tenderness with voluntary guarding, possible palpable gallbladder fullness",
        "Rovsing's sign": "Negative - no RUQ pain with LLQ palpation",
        "Psoas sign": "Negative - no increased pain with right hip flexion against resistance",
        "Obturator sign": "Negative - no pain with internal rotation of flexed right hip",
        "Rebound tenderness assessment": "Mild rebound tenderness in RUQ, less pronounced than with appendicitis",
        "Bowel sounds auscultation": "Hypoactive bowel sounds, consistent with ileus from inflammation",
        "Costovertebral angle tenderness": "Negative bilaterally - no flank tenderness",
        "Jaundice assessment (sclera and skin)": "No jaundice noted in sclera or skin",
        "Abdominal inspection": "Slight distension, patient guards RUQ, no visible masses or surgical scars"
    },
    "ddxTargets": [
        "Acute Cholecystitis (correct diagnosis)",
        "Biliary Colic/Choledocholithiasis",
        "Acute Pancreatitis",
        "Myocardial Infarction",
        "Pulmonary Embolism",
        "Peptic Ulcer Disease",
        "Acute Appendicitis"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on known cholelithiasis history and assuming this is just another episode of biliary colic rather than recognizing progression to acute cholecystitis",
        "prematureClosure": "May stop evaluation after confirming gallbladder pathology without considering complications like choledocholithiasis or ruling out cardiac causes in this demographic",
        "availabilityBias": "Recent cases of appendicitis or gastritis might influence thinking away from biliary pathology, or conversely, obvious gallbladder history might prevent consideration of other serious causes"
    },
    "coachPrompts": {
        "phase2": "Given this patient's presentation of RUQ pain, what key features in the history would help you differentiate between biliary colic and acute cholecystitis? What red flags should you specifically ask about given her demographics and risk factors?",
        "phase5": "Your physical exam reveals a positive Murphy's sign with RUQ tenderness. How does this change your differential diagnosis? What additional findings would suggest complications of gallbladder disease, and what must-not-miss diagnoses should still be considered in a 44-year-old woman with chest/upper abdominal pain?",
        "finalDebrief": "This case demonstrates the natural progression from biliary colic to acute cholecystitis. Notice how the patient's symptoms evolved from intermittent postprandial pain to persistent pain with fever and positive Murphy's sign. What clinical features helped distinguish this from simple biliary colic, and how did the family history and risk factors support your diagnosis?"
    }
}
};