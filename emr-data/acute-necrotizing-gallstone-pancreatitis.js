
window.EMR_DATA = {
  "patient": {
    "name": "Claudette Pierre",
    "patientHPI": "I've been having some stomach trouble after I eat - it feels full and bloated up here under my ribs, especially when I have bigger meals. It's just uncomfortable indigestion, nothing too severe, but it's been happening more often lately.",
    "dob": "11/04/1962",
    "age": 62,
    "sex": "Female",
    "mrn": "RDX-2025-53947",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. William Archer, MD",
    "pharmacy": "Walgreens \u2014 3100 N State Rd 7, Lauderdale Lakes, FL",
    "language": "English, Haitian Creole",
    "race": "Black/Caribbean American",
    "address": "6875 Elm St, San Antonio, TX 78212",
    "phone": "(954) 555-7293",
    "email": "c.pierre62@email.com",
    "emergencyContact": {
      "name": "Jean-Marc Pierre (Son)",
      "phone": "(954) 555-7340"
    }
  },
  "problems": [
    {
      "problem": "Necrotizing pancreatitis \u2014 pancreatic/peripancreatic necrosis",
      "icd": "K85.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Patricia Williams, 56F \u2014 gallstone pancreatitis, CTSI 7 (severe). CT: 50% pancreatic necrosis + peripancreatic fluid collection. Revised Atlanta: moderately severe (no persistent organ failure yet)."
    },
    {
      "problem": "Choledocholithiasis \u2014 CBD stone on MRCP",
      "icd": "K80.51",
      "onset": "2024",
      "status": "Active",
      "notes": "MRCP: CBD stone causing biliary obstruction. ERCP indicated within 24 hours if cholangitis present (no cholangitis here \u2014 defer ERCP)."
    },
    {
      "problem": "Infection risk \u2014 necrotizing pancreatitis",
      "icd": "K85.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Infected necrosis (walled-off necrosis + fever + rising WBC at day 7-10) carries >30% mortality. FNA/CT-guided drainage when infected necrosis suspected."
    }
  ],
  "medications": [
    {
      "name": "Aggressive early IV fluid resuscitation \u2014 LR preferred",
      "sig": "Lactated Ringer's superior to normal saline (reduces SIRS, acidosis). Goal-directed: 250-500mL/hr first 12-24h, targeting BUN decrease, urine output 0.5-1mL/kg/hr. Avoid over-resuscitation (abdominal compartment syndrome).",
      "prescriber": "Surgery/GI",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 LR at 300mL/hr"
    },
    {
      "name": "Early enteral nutrition (NOT parenteral) \u2014 within 24-48h",
      "sig": "Nasojejunal feeds if patient cannot tolerate oral. Early EN maintains gut barrier, reduces bacterial translocation, reduces infected necrosis risk. Avoid NPO + TPN unless EN truly impossible.",
      "prescriber": "Surgery/GI/Nutrition",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 NJ feeds"
    },
    {
      "name": "Antibiotics only if infected necrosis confirmed \u2014 NOT prophylactic",
      "sig": "Do NOT give prophylactic antibiotics for necrotizing pancreatitis. Only when infected necrosis proven (FNA positive or gas in necrosis on CT). Prophylactic antibiotics do not prevent infection.",
      "prescriber": "Surgery/GI",
      "start": "2024",
      "refills": 0,
      "status": "Hold \u2014 no infection yet"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Nausea, severe vomiting",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Shellfish",
      "type": "Food",
      "reaction": "Urticaria",
      "severity": "Mild",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "12/18/2024",
      "bp": "142/88",
      "hr": 82,
      "rr": 16,
      "temp": "98.6\u00b0F",
      "spo2": "96%",
      "wt": "218 lbs",
      "ht": "5'4\"",
      "bmi": 37.4,
      "setting": "PCP Office"
    },
    {
      "date": "06/20/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "216 lbs",
      "ht": "5'4\"",
      "bmi": 37.1,
      "setting": "PCP Office"
    },
    {
      "date": "12/12/2023",
      "bp": "140/84",
      "hr": 76,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "214 lbs",
      "ht": "5'4\"",
      "bmi": 36.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/18/2024",
      "type": "Primary Care",
      "provider": "Dr. William Archer, MD",
      "cc": "Diabetes follow-up; refills; discuss gallstone management",
      "hpi": "62-year-old female with known gallstones, DM2, HTN, CAD, and hypertriglyceridemia for routine follow-up. A1c worsened to 7.8% from 7.2%. Triglycerides remain elevated at 320 despite fenofibrate. Reports occasional 'indigestion' after meals \u2014 described as epigastric fullness and bloating, worse with fatty foods. No acute RUQ pain, no fever, no jaundice. Discussed gallstone management \u2014 patient concerned about surgical risk given cardiac history. Counseled that hypertriglyceridemia AND gallstones create dual risk for pancreatitis.",
      "exam": "General: Obese female, NAD. CV: RRR, no murmurs. Abdomen: Obese, soft, mild epigastric tenderness, no rebound, no guarding. Extremities: Trace bilateral pedal edema.",
      "assessment": "1. T2DM \u2014 suboptimally controlled, A1c 7.8%\n2. Cholelithiasis \u2014 symptomatic dyspepsia; declining surgery\n3. Hypertriglyceridemia \u2014 persistent elevation despite fenofibrate; PANCREATITIS RISK\n4. CAD \u2014 stable post-PCI\n5. HTN \u2014 adequately controlled",
      "plan": "1. Add sitagliptin 100mg daily for DM; continue metformin/glipizide\n2. Reinforce strict low-fat, low-sugar diet\n3. HIGH RISK COUNSELING: With gallstones AND TG >300, patient at significant risk for acute pancreatitis. Strongly recommend cholecystectomy. If severe epigastric pain \u2192 ED IMMEDIATELY\n4. Repeat lipid panel, A1c in 3 months\n5. General surgery re-referral placed"
    },
    {
      "id": "V002",
      "date": "06/20/2024",
      "type": "Specialist",
      "provider": "Dr. David Chen, MD (Cardiology)",
      "cc": "Annual cardiology follow-up post-PCI",
      "hpi": "62-year-old female with CAD s/p PCI with DES to LAD (2019) for annual follow-up. On DAPT. No chest pain, no dyspnea on exertion, no palpitations. Exercise tolerance limited by obesity and deconditioning. Echo EF 55%. Stress test not indicated at this time.",
      "exam": "CV: RRR, no murmurs, no S3/S4. JVP not elevated. Lungs: CTAB. Ext: Trace edema.",
      "assessment": "1. CAD \u2014 stable post-PCI; EF preserved\n2. Continue DAPT (aspirin + clopidogrel); may consider aspirin monotherapy after 5+ years",
      "plan": "1. Continue current cardiac medications\n2. Echo in 1 year\n3. Aggressive risk factor modification: weight loss, diabetic control, lipid management\n4. RTC 1 year"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Necrotizing Pancreatitis Severity",
      "results": [
        {
          "test": "Lipase",
          "value": "4800",
          "unit": "U/L",
          "ref": "10-140",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "280",
          "unit": "mg/L",
          "ref": "<10 (peak at 48-72h)",
          "flag": "H"
        },
        {
          "test": "BUN",
          "value": "28",
          "unit": "mg/dL",
          "ref": "7-20",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.6",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Ca2+",
          "value": "7.8",
          "unit": "mg/dL",
          "ref": "8.5-10.5 (saponification)",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Abdomen/Pelvis with Contrast (CTSI)",
      "findings": "Pancreatic necrosis involving 50% of pancreatic body/tail with peripancreatic fluid. CTSI score 7 (severe). No gas in necrosis. No organized walled-off collection yet (day 3).",
      "impression": "Necrotizing pancreatitis \u2014 moderately severe (Revised Atlanta). No infected necrosis. CTSI 7."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose Quadrivalent)",
      "date": "10/10/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD310",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2024-25)",
      "date": "10/28/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-742",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Pneumococcal (PCV20 \u2014 Prevnar 20)",
      "date": "2023",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "2022",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: T2DM, stroke at age 68, deceased at 72",
    "Father: Hypertension, gallstones, alive at 88",
    "Sister: T2DM, cholelithiasis, alive at 64",
    "Brother: MI at age 55, alive at 60",
    "Daughter: Healthy, age 38"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired home health aide"
    ],
    [
      "Marital",
      "Widowed \u2014 husband deceased 2018"
    ],
    [
      "Tobacco",
      "Former smoker \u2014 10 pack-years; quit 2015"
    ],
    [
      "Alcohol",
      "Denies current use"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Limited \u2014 walks around block occasionally; limited by knee arthritis"
    ],
    [
      "Housing",
      "Lives alone in apartment; son visits weekly"
    ],
    [
      "Safety",
      "Wears seatbelt; no fall history; grab bars installed in bathroom"
    ],
    [
      "Advance Directive",
      "Yes \u2014 healthcare proxy: son Jean-Marc Pierre"
    ]
  ],
  "meta": {
    "caseId": "acute-necrotizing-gallstone-pancreatitis",
    "diagnosis": "Acute Necrotizing Gallstone Pancreatitis (Revised Atlanta Classification \u2014 Moderately Severe)",
    "acuity": 2,
    "presentation": "GI Emergency",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Claudette is initially stoic and minimizing her symptoms, describing what is severe pancreatitis pain as just 'uncomfortable indigestion.' She becomes increasingly distressed as questioning reveals the true severity of her condition, shifting from dismissive to worried as she realizes this may be more serious than she thought.",
    "interviewQuestions": [
      "Can you describe exactly what this stomach discomfort feels like?",
      "When did these symptoms first begin?",
      "On a scale of 1-10, how would you rate your pain right now?",
      "Does the pain go anywhere else - your back, shoulder, or chest?",
      "What makes the pain better or worse?",
      "Have you had any nausea or vomiting?",
      "Any fever, chills, or feeling sick overall?",
      "Have you noticed any changes in your bowel movements or urine?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications or foods?",
      "Tell me about your family history, especially stomach or gallbladder problems",
      "Have you had episodes like this before?",
      "Any recent changes in your diet or eating habits?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Can you ask it differently?",
      "onset": "It's been building up over the past few weeks, getting worse after meals. But today it's been constant since I woke up, even without eating anything.",
      "character": "It's a deep, gnawing pain that feels like something is eating away at me from the inside. It's not sharp like a knife, more like a constant burning and pressure.",
      "location": "It's right here under my ribs in the middle, but now it's shooting straight through to my back like someone's pressing a hot iron against my spine.",
      "severity": "I said it was just uncomfortable before, but honestly, it's probably a 7 or 8 now. I can barely sit still and nothing I do makes it better.",
      "aggravating": "Eating anything makes it much worse, especially fatty foods. Even thinking about food makes me feel sick. Lying flat is impossible.",
      "relieving": "Nothing really helps. I tried antacids, sitting forward, walking around. The only thing that helps a little is leaning forward and holding my stomach.",
      "associated": "I've been nauseated all morning and threw up twice. I feel clammy and weak, and I think I might have had some chills earlier.",
      "denies": "No chest pain, no shortness of breath, no diarrhea. I haven't had a fever that I know of, but I've been feeling hot and cold.",
      "history": "I've had some gallbladder attacks before - that's how they found my gallstones a couple years ago. But this feels different, much worse and it won't go away.",
      "medications": "Metformin 1000mg BID; Glipizide 10mg BID; Lisinopril 20mg daily; Amlodipine 10mg daily; Aspirin 81mg daily; Clopidogrel 75mg daily; Atorvastatin 80mg daily; Fenofibrate 145mg daily",
      "allergies": "Codeine, Shellfish",
      "family": "My father had gallstones and my sister does too. My family seems prone to stomach and digestive problems. My mother had diabetes like me.",
      "social": "I'm a retired home health aide, been widowed since 2018. I used to smoke but quit about 8 years ago. I don't drink alcohol or use any drugs."
    },
    "examManeuvers": [
      "Abdominal inspection",
      "Abdominal palpation of epigastrium",
      "Murphy's sign",
      "Abdominal tenderness assessment",
      "Bowel sounds auscultation",
      "Back examination for CVA tenderness",
      "Assessment for abdominal distension",
      "Rebound tenderness testing",
      "Vital signs assessment"
    ],
    "examFindings": {
      "Abdominal inspection": "Mild distension, patient appears uncomfortable and guarding, sitting forward in tripod position",
      "Abdominal palpation of epigastrium": "Severe tenderness in epigastrium with involuntary guarding, patient winces and pulls away",
      "Murphy's sign": "Positive Murphy's sign with inspiratory arrest during RUQ palpation",
      "Abdominal tenderness assessment": "Marked tenderness extending from RUQ to epigastrium, patient reports 8/10 pain with palpation",
      "Bowel sounds auscultation": "Hypoactive bowel sounds throughout all quadrants",
      "Back examination for CVA tenderness": "Mild tenderness to percussion over lower thoracic spine, consistent with referred pain",
      "Assessment for abdominal distension": "Moderate distension with tympany on percussion",
      "Rebound tenderness testing": "Positive rebound tenderness in epigastrium and RUQ",
      "Vital signs assessment": "BP 142/88 elevated from baseline, HR 82 regular, low-grade temperature, SpO2 96% on room air"
    },
    "ddxTargets": [
      "Acute necrotizing gallstone pancreatitis (correct)",
      "Interstitial edematous pancreatitis \u2014 no necrosis on CT; different severity and management",
      "Perforated peptic ulcer \u2014 amylase/lipase can be mildly elevated; CT shows free air, not pancreatic necrosis",
      "Mesenteric ischemia \u2014 lactic acidosis, pain out of proportion; CT shows bowel wall ischemia",
      "Acute cholecystitis \u2014 RUQ pain + gallstones, but lipase normal and no pancreatic necrosis",
      "Ruptured AAA \u2014 pulsatile mass, hemodynamics; CT shows aortic pathology"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's initial description of 'just indigestion' and missing the severity of acute pancreatitis, especially given her stoic presentation",
      "prematureClosure": "May settle on simple cholecystitis given known gallstones without recognizing progression to necrotizing pancreatitis",
      "availabilityBias": "Recent cases of GERD or routine gallbladder pain may overshadow recognition of this surgical emergency"
    },
    "coachPrompts": {
      "phase2": "This patient is describing her symptoms as 'just indigestion,' but look at her risk factors and presentation. What conditions should you be most concerned about in a diabetic patient with known gallstones presenting with epigastric pain? What questions will help you differentiate between the possibilities?",
      "phase5": "Your physical exam reveals significant findings beyond simple indigestion. The combination of her known gallstones, diabetes, severe epigastric tenderness, and constitutional symptoms should raise your concern. What's the most serious condition on your differential that fits this presentation?",
      "finalDebrief": "This case illustrates how patients may minimize serious symptoms and how anchoring on their initial description can be dangerous. The combination of gallstones, diabetes, severe epigastric pain radiating to the back, and systemic symptoms should have pointed toward pancreatitis. What clinical clues differentiated this from simple cholecystitis or GERD?",
      "final": "Diagnosis: necrotizing gallstone pancreatitis. Key learning: (1) Revised Atlanta Classification: mild (no organ failure, no local complications), moderately severe (transient organ failure <48h or local complications), severe (persistent organ failure >48h). The key prognostic factor is persistent organ failure, not necrosis alone. (2) Fluid resuscitation: LR is superior to normal saline \u2014 reduces SIRS and acidosis in AP (WATERFALL trial). Goal-directed fluid therapy (target BUN normalization + adequate urine output) is better than fixed-rate infusions. Avoid over-resuscitation \u2192 abdominal compartment syndrome. (3) Early enteral nutrition: nasojejunal tube feeds within 24-48h reduce infected necrosis risk by maintaining gut barrier. Early EN vs NPO+TPN: EN associated with lower mortality and organ failure. (4) Antibiotic rule: prophylactic antibiotics do NOT prevent infected necrosis (three RCTs showed no benefit). Only use when infected necrosis is confirmed by FNA or CT showing gas in necrosis. (5) Infected necrosis management: walled-off necrosis typically forms after 4 weeks. Drainage strategy: step-up approach (percutaneous drain \u2192 video-assisted retroperitoneal debridement/endoscopic transgastric drainage) preferred over open surgery \u2014 reduces morbidity (TENSION trial)."
    }
  }
};
