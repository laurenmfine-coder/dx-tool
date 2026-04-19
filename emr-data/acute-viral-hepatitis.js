// Virtual EMR Case: Acute Viral Hepatitis (Hepatitis A — Foodborne Outbreak)
// Variant: acute-viral-hepatitis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Rafael Guzmán",
  "patientHPI": "I'm here for my regular checkup - I've been working hard on eating better and getting to the gym more often, and I'm down four pounds since my last visit. The medication you gave me for my blood sugar isn't bothering my stomach anymore, which is great.",
    "dob": "04/18/1990",
    "age": 35,
    "sex": "Male",
    "mrn": "RDX-2025-43112",
    "pronouns": "He/Him",
    "insurance": "Aetna PPO (employer)",
    "pcp": "Dr. Patricia Morales, MD",
    "pharmacy": "CVS Pharmacy — 3201 N University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Mexican American)",
    "address": "7951 N Western Ave, Pittsburgh, PA 15210",
    "phone": "(954) 555-3318",
    "email": "r.guzman90@email.com",
    "emergencyContact": {
      "name": "Maria Guzmán (Wife)",
      "phone": "(954) 555-3334"
    }
  },
  "problems": [
    {
      "problem": "Obesity, BMI 32.4",
      "icd": "E66.01",
      "onset": "2018",
      "status": "Active",
      "notes": "Class I obesity"
    },
    {
      "problem": "Nonalcoholic Fatty Liver Disease (NAFLD)",
      "icd": "K76.0",
      "onset": "2023",
      "status": "Active",
      "notes": "Hepatic steatosis on US (2023); mildly elevated ALT baseline 48-55; advised weight loss and dietary changes"
    },
    {
      "problem": "Prediabetes",
      "icd": "R73.03",
      "onset": "2024",
      "status": "Active",
      "notes": "A1c 6.0; on metformin 500mg BID for insulin resistance and NAFLD benefit"
    }
  ],
  "medications": [
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Morales",
      "start": "03/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Vitamin D3 2000 IU daily",
      "sig": "Take 1 capsule by mouth once daily",
      "prescriber": "Dr. Morales",
      "start": "06/2023",
      "refills": 11,
      "status": "Active"
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
      "date": "02/22/2026",
      "bp": "118/74",
      "hr": 88,
      "rr": 18,
      "temp": "101.2°F",
      "spo2": "98%",
      "wt": "208 lbs",
      "ht": "5'9\"",
      "bmi": 30.7,
      "setting": "ED"
    },
    {
      "date": "08/14/2025",
      "bp": "126/82",
      "hr": 74,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "216 lbs",
      "ht": "5'9\"",
      "bmi": 31.9,
      "setting": "PCP Office"
    },
    {
      "date": "03/10/2025",
      "bp": "128/80",
      "hr": 72,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "220 lbs",
      "ht": "5'9\"",
      "bmi": 32.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/14/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Morales, MD",
      "cc": "Follow-up NAFLD, prediabetes, weight management",
      "hpi": "35M with NAFLD and prediabetes presents for 6-month follow-up. Weight down 4 lbs (220 to 216). A1c 6.0 — stable. ALT 52 (baseline elevated). Metformin tolerated without GI side effects. Reports trying to exercise more and reduce refined carbohydrates. No abdominal pain, jaundice, or GI symptoms.",
      "exam": "Obese male, NAD. Abdomen: Soft, obese, no hepatomegaly on exam, NT. Skin: No jaundice, no spider angiomata.",
      "assessment": "1. NAFLD — stable; ALT mildly elevated at baseline\n2. Prediabetes — A1c 6.0, stable on metformin\n3. Obesity — slight improvement, continue lifestyle modifications",
      "plan": "1. Continue metformin 500mg BID\n2. Repeat hepatic panel in 6 months\n3. FibroScan if ALT trends up\n4. Nutritional counseling referral\n5. Hepatitis A vaccination discussed — patient will schedule (NOT yet received)\n6. Return 6 months"
    },
    {
      "id": "V002",
      "date": "03/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Morales, MD",
      "cc": "Routine follow-up, labs review",
      "hpi": "34M presents for routine follow-up. Labs from 02/2025: A1c 6.1, ALT 55, AST 38, lipid panel with TG 198. Weight 220. No complaints.",
      "exam": "Obese male. Abdomen: Soft, NT. Skin: No jaundice.",
      "assessment": "1. NAFLD — ALT stable at baseline elevation\n2. Prediabetes — A1c 6.1\n3. Hypertriglyceridemia",
      "plan": "1. Continue metformin\n2. Dietary counseling for TG reduction\n3. Return 6 months"
    }
  ],
  "labs": [
    {
      "date": "08/14/2025",
      "time": "09:00",
      "orderedBy": "Dr. Morales",
      "collected": "08/14/2025 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-800814",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "HEPATIC PANEL",
          "results": [
            { "test": "ALT", "value": "52", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST", "value": "36", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "ALP", "value": "78", "unit": "U/L", "range": "44-147", "flag": "" },
            { "test": "Total Bilirubin", "value": "0.8", "unit": "mg/dL", "range": "0.1-1.2", "flag": "" },
            { "test": "Direct Bilirubin", "value": "0.2", "unit": "mg/dL", "range": "0.0-0.3", "flag": "" },
            { "test": "Albumin", "value": "4.2", "unit": "g/dL", "range": "3.5-5.5", "flag": "" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            { "test": "HbA1c", "value": "6.0", "unit": "%", "range": "<5.7", "flag": "H" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "210", "unit": "mg/dL", "range": "<200", "flag": "H" },
            { "test": "LDL", "value": "128", "unit": "mg/dL", "range": "<100", "flag": "H" },
            { "test": "HDL", "value": "38", "unit": "mg/dL", "range": ">40", "flag": "L" },
            { "test": "Triglycerides", "value": "188", "unit": "mg/dL", "range": "<150", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2023",
      "study": "ULTRASOUND ABDOMEN — RIGHT UPPER QUADRANT",
      "accession": "IMG-2023-40418",
      "status": "FINAL",
      "orderedBy": "Dr. Morales",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Elevated ALT — evaluate liver",
      "technique": "Real-time ultrasound of the right upper quadrant and liver.",
      "findings": "Liver: Diffusely hyperechoic parenchyma consistent with hepatic steatosis (moderate). Smooth hepatic contour. No focal hepatic lesions. Liver size: 17.2 cm (mildly enlarged).\n\nGallbladder: Normal wall thickness. No gallstones. No pericholecystic fluid. Murphy sign not assessed (not in acute setting).\n\nCommon bile duct: 4 mm (normal).\n\nPortal vein: Patent with normal hepatopetal flow.\n\nRight kidney: Normal.",
      "impression": "1. Moderate hepatic steatosis consistent with NAFLD.\n2. Mild hepatomegaly (17.2 cm).\n3. No focal hepatic lesion.\n4. Normal gallbladder.",
      "dictated": "04/18/2023 14:00",
      "verified": "04/18/2023 16:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9408", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Moderna)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV25-2410", "mfr": "Moderna" },
    { "vaccine": "Tdap", "date": "08/2022", "site": "Left deltoid IM", "lot": "TD22-522", "mfr": "GSK" },
    { "vaccine": "Hepatitis B Series", "date": "2008", "site": "Right deltoid IM", "lot": "HB08-220", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Father: T2DM, NAFLD → NASH cirrhosis (diagnosed age 58), alive at 66",
    "Mother: Obesity, HTN, alive at 64",
    "Brother: Healthy, alive at 32",
    "Sister: PCOS, obesity, alive at 30"
  ],
  "socialHistory": [
    ["Occupation", "Restaurant line cook at seafood restaurant in Hollywood; handles raw shellfish regularly"],
    ["Marital", "Married 8 years; 2 children (ages 4 and 6)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "2-3 beers on weekends; stopped for weight loss attempt"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 30 min 3x/week; recently started"],
    ["Housing", "Apartment with wife and children"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "acute-viral-hepatitis",
    "diagnosis": "Acute Hepatitis A (Foodborne — Occupational Shellfish Exposure in Unvaccinated Patient with Baseline NAFLD, Presenting with Jaundice, Transaminitis >2000, and Coagulopathy)",
    "acuity": 3,
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
        "General appearance": "Clinical finding consistent with Acute Hepatitis A. Document specifically what you observe.",
        "Vital signs": "Clinical finding consistent with Acute Hepatitis A. Document specifically what you observe.",
        "Abdominal inspection": "Clinical finding consistent with Acute Hepatitis A. Document specifically what you observe.",
        "Abdominal auscultation": "Clinical finding consistent with Acute Hepatitis A. Document specifically what you observe.",
        "Abdominal palpation light and deep": "Clinical finding consistent with Acute Hepatitis A. Document specifically what you observe.",
        "Rebound and guarding assessment": "Clinical finding consistent with Acute Hepatitis A. Document specifically what you observe.",
        "Rectal examination if indicated": "Clinical finding consistent with Acute Hepatitis A. Document specifically what you observe.",
        "Skin for jaundice or stigmata": "Clinical finding consistent with Acute Hepatitis A. Document specifically what you observe."
    },
    "ddxTargets": [
        "Acute Hepatitis A (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Hepatitis A, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Acute Hepatitis A, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Acute Hepatitis A based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Rafael Guzm\u00e1n's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Acute Hepatitis A (Foodborne \u2014 Occupational Shellfish Exposure in Unvaccinated Patient with Baseline NAFLD, Presenting with Jaundice, Transaminitis >2000, and Coagulopathy). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Rafael appears mildly confused and uncomfortable, with slight yellow tinting to his sclera and skin that he seems unaware of. He maintains a cooperative demeanor but shows mild fatigue and keeps mentioning feeling 'off' lately, attributing it to work stress rather than recognizing the severity of his symptoms.",
    "interviewQuestions": [
        "Can you tell me about any abdominal pain or discomfort you've been having?",
        "Have you noticed any changes in the color of your skin or eyes recently?",
        "What about your urine - has it been darker than usual?",
        "Have you had any nausea, vomiting, or changes in appetite?",
        "Tell me about your work - what exactly do you do with the shellfish?",
        "When did you last eat raw or undercooked shellfish, either at work or elsewhere?",
        "Have you been vaccinated against Hepatitis A?",
        "Has anyone else at work or in your family been sick recently?",
        "Have you had any fever, chills, or feeling generally unwell?",
        "Any changes in your bowel movements or stool color?",
        "Have you been taking any new medications or supplements?",
        "Any recent travel or exposure to contaminated water?",
        "Tell me about your alcohol use - has it changed recently?"
    ],
    "patientResponses": {
        "default": "I'm not sure what you mean by that. I've just been feeling a bit tired and off lately, but I thought it was from working extra shifts.",
        "onset": "I started feeling really tired and nauseous about 5-6 days ago. The stomach pain started maybe 3 days ago, right here under my ribs on the right side.",
        "character": "It's this constant, dull ache in my upper belly, kind of like a deep bruise. Sometimes it gets sharper when I move around or cough.",
        "location": "Right here, under my right ribs. Sometimes it seems to go toward my back, especially when it gets worse.",
        "severity": "Maybe a 6 out of 10 most of the time, but it can spike to an 8 when it's really bad. It's definitely affecting my work - I had to leave early yesterday.",
        "aggravating": "It gets worse when I eat anything greasy or when I'm moving around a lot in the kitchen. Even just taking deep breaths makes it ache more.",
        "relieving": "I tried some Tylenol but it didn't really help. Sitting still and not eating seems to be the only thing that helps a little.",
        "associated": "I've been really nauseous, especially in the mornings. Lost my appetite completely - even the smell of food at work makes me want to throw up. I've been exhausted, more than usual.",
        "denies": "No, I haven't been vomiting, no diarrhea, no chest pain. I don't think I've had a fever, but I've been feeling kind of chilly.",
        "history": "Nothing like this before. I mean, I've had some stomach issues with my weight and blood sugar problems, but never pain like this or feeling this sick.",
        "medications": "Metformin 500mg BID; Vitamin D3 2000 IU daily",
        "allergies": "NKDA",
        "family": "My dad has liver problems - started with fatty liver like mine but got worse, turned into cirrhosis. He also has diabetes. My mom's pretty healthy except for high blood pressure.",
        "social": "I work as a line cook at a seafood place in Hollywood. I'm handling raw oysters and clams all day, shucking them, cleaning them. I've been there about 3 years now. I'm married with two kids. I used to drink a few beers on weekends but stopped recently to lose weight. Never smoked, no drugs."
    },
    "examManeuvers": [
        "Inspection of sclera and skin for jaundice",
        "Abdominal inspection for distension or discoloration",
        "Right upper quadrant palpation",
        "Murphy's sign assessment",
        "Hepatomegaly assessment via percussion and palpation",
        "Splenomegaly assessment",
        "Lymphadenopathy examination (cervical, axillary)",
        "Assessment for ascites (shifting dullness, fluid wave)",
        "Vital signs including temperature",
        "Assessment for asterixis (hepatic flap)"
    ],
    "examFindings": {
        "Inspection of sclera and skin for jaundice": "Obvious icterus of sclera bilaterally, mild jaundice of skin most apparent in natural light",
        "Abdominal inspection for distension or discoloration": "Mild abdominal distension, no obvious discoloration or visible masses",
        "Right upper quadrant palpation": "Marked tenderness in RUQ with guarding, palpable liver edge 4cm below costal margin",
        "Murphy's sign assessment": "Negative Murphy's sign - no inspiratory arrest with RUQ palpation",
        "Hepatomegaly assessment via percussion and palpation": "Hepatomegaly confirmed, liver span 16cm in mid-clavicular line, smooth and tender",
        "Splenomegaly assessment": "Mild splenomegaly, spleen tip just palpable below left costal margin",
        "Lymphadenopathy examination (cervical, axillary)": "No significant lymphadenopathy detected",
        "Assessment for ascites (shifting dullness, fluid wave)": "No evidence of ascites on examination",
        "Vital signs including temperature": "BP 118/74, HR 88, Temperature 101.2°F, SpO2 98% on room air",
        "Assessment for asterixis (hepatic flap)": "Mild asterixis present with sustained wrist extension"
    },
    "ddxTargets": [
        "Acute Hepatitis A (Foodborne — Occupational Shellfish Exposure in Unvaccinated Patient with Baseline NAFLD, Presenting with Jaundice, Transaminitis >2000, and Coagulopathy) (correct diagnosis)",
        "Acute cholangitis with biliary obstruction",
        "Acute hepatitis B or C infection",
        "Drug-induced liver injury (DILI) from acetaminophen or other hepatotoxins",
        "Acute fatty liver of pregnancy (if female) or acute fatty liver decompensation",
        "Acute cholecystitis with Mirizzi syndrome",
        "Viral hepatitis (EBV, CMV) or autoimmune hepatitis"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on patient's known NAFLD and dismissing acute presentation as chronic disease progression, or focusing solely on gallbladder pathology due to RUQ pain",
        "prematureClosure": "May stop investigation after finding hepatomegaly and jaundice without exploring occupational exposure history and vaccination status thoroughly",
        "availabilityBias": "Recent cases of cholecystitis or drug-induced liver injury might overshadow consideration of foodborne hepatitis A in unvaccinated food service worker"
    },
    "coachPrompts": {
        "phase2": "Looking at this 35-year-old male with RUQ pain and what appears to be jaundice, what key historical elements would help you differentiate between the various causes of acute hepatitis? Think about his occupation and what exposures that might entail.",
        "phase5": "Now you have a clearer picture - acute hepatitis with significant transaminitis in a food service worker with shellfish exposure. How does his occupational history and vaccination status change your differential diagnosis? What specific type of hepatitis should you be most concerned about?",
        "finalDebrief": "This case highlights the importance of detailed occupational history in food service workers. Hepatitis A is highly endemic in shellfish, especially bivalves like oysters and clams that filter-feed in contaminated waters. The combination of occupational exposure, lack of vaccination, and the clinical presentation of acute hepatitis with significant transaminitis should have pointed toward HAV. How might his underlying NAFLD have complicated both the presentation and clinical course?"
    }
}
};
