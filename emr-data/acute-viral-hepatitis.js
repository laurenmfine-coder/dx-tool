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
            {
              "test": "ALT",
              "value": "52",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST",
              "value": "36",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            },
            {
              "test": "ALP",
              "value": "78",
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
            },
            {
              "test": "Albumin",
              "value": "4.2",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            {
              "test": "HbA1c",
              "value": "6.0",
              "unit": "%",
              "range": "<5.7",
              "flag": "H"
            }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            {
              "test": "Total Cholesterol",
              "value": "210",
              "unit": "mg/dL",
              "range": "<200",
              "flag": "H"
            },
            {
              "test": "LDL",
              "value": "128",
              "unit": "mg/dL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "HDL",
              "value": "38",
              "unit": "mg/dL",
              "range": ">40",
              "flag": "L"
            },
            {
              "test": "Triglycerides",
              "value": "188",
              "unit": "mg/dL",
              "range": "<150",
              "flag": "H"
            }
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
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-9408",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Moderna)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2410",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap",
      "date": "08/2022",
      "site": "Left deltoid IM",
      "lot": "TD22-522",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B Series",
      "date": "2008",
      "site": "Right deltoid IM",
      "lot": "HB08-220",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Father: T2DM, NAFLD → NASH cirrhosis (diagnosed age 58), alive at 66",
    "Mother: Obesity, HTN, alive at 64",
    "Brother: Healthy, alive at 32",
    "Sister: PCOS, obesity, alive at 30"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Restaurant line cook at seafood restaurant in Hollywood; handles raw shellfish regularly"
    ],
    [
      "Marital",
      "Married 8 years; 2 children (ages 4 and 6)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "2-3 beers on weekends; stopped for weight loss attempt"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 30 min 3x/week; recently started"
    ],
    [
      "Housing",
      "Apartment with wife and children"
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
    "caseId": "acute-viral-hepatitis",
    "diagnosis": "Acute Hepatitis A (Foodborne — Occupational Shellfish Exposure in Unvaccinated Patient with Baseline NAFLD, Presenting with Jaundice, Transaminitis >2000, and Coagulopathy)",
    "acuity": 3,
    "presentation": "Toxicologic Emergency",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Rafael initially appears calm and cooperative, believing he's here for routine follow-up about his weight loss progress. He becomes increasingly concerned and anxious as questioning reveals his worsening symptoms, particularly when realizing the severity of his jaundice and fatigue.",
    "interviewQuestions": [
      "Can you describe any changes in your skin color or the color of your eyes recently?",
      "Have you noticed any changes in your urine color or bowel movements?",
      "Tell me about any nausea, vomiting, or abdominal pain you've been experiencing",
      "How has your energy level been over the past week or two?",
      "Have you had any fever, chills, or feeling unwell recently?",
      "At work, do you handle raw seafood or shellfish? Have you eaten any recently?",
      "Have you received vaccination for hepatitis A or hepatitis B?",
      "Has anyone else at work or in your family been sick with similar symptoms?",
      "Have you noticed any unusual bruising or bleeding recently?",
      "Tell me about your alcohol intake - has it changed recently?",
      "Have you taken any new medications, supplements, or herbal remedies?",
      "Have you traveled anywhere recently or eaten at any new restaurants?",
      "Rate your abdominal pain on a scale of 1-10 and show me where it hurts"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - can you explain that differently?",
      "onset": "Now that you mention it, I started feeling tired and a bit nauseous about 10 days ago. My wife said my eyes looked yellow 3-4 days ago, but I thought it was just the lighting at home.",
      "character": "It's this deep, aching tiredness that's different from just being tired from work. The nausea comes and goes, and I have this dull ache in my upper belly.",
      "location": "The pain is here, under my right ribs, and sometimes it feels like it goes to my back. It's not sharp, just a constant ache.",
      "severity": "The fatigue is probably a 7 out of 10 - I can barely get through my shifts. The belly pain is maybe a 4, but it's always there now.",
      "aggravating": "The nausea gets worse when I smell food cooking at work, especially seafood. The fatigue is worse in the mornings.",
      "relieving": "Nothing really helps the tiredness. I tried taking Tums for my stomach but it didn't help much.",
      "associated": "I've been having dark urine for about a week, and my stools have been really pale, almost clay-colored. I've had some low-grade fever and chills too.",
      "denies": "No chest pain, no shortness of breath, no rash. I haven't been vomiting blood or having black stools.",
      "history": "I've never had anything like this before. My liver tests were a bit high at my last visit because of my weight, but nothing like this.",
      "medications": "Metformin 500mg BID; Vitamin D3 2000 IU daily",
      "allergies": "NKDA",
      "family": "My dad has diabetes and fatty liver disease that progressed to cirrhosis - he was diagnosed at 58. My mom has high blood pressure and weight issues too.",
      "social": "I work as a line cook at a seafood restaurant in Hollywood - I handle raw oysters, clams, and mussels every day. I'm married with two young kids. I don't smoke, and I cut back on drinking to just 2-3 beers on weekends to help with weight loss."
    },
    "examManeuvers": [
      "General appearance and mental status",
      "Skin and scleral examination for jaundice",
      "Abdominal palpation for hepatomegaly",
      "Right upper quadrant percussion and palpation",
      "Murphy's sign assessment",
      "Lymph node examination (cervical, axillary, inguinal)",
      "Skin examination for spider angiomata and palmar erythema",
      "Assessment for ascites (shifting dullness, fluid wave)",
      "Examination for peripheral edema",
      "Neurological assessment for asterixis or confusion"
    ],
    "examFindings": {
      "General appearance and mental status": "Alert and oriented, appears fatigued and mildly uncomfortable, obvious icteric appearance",
      "Skin and scleral examination for jaundice": "Marked scleral icterus bilaterally, diffuse jaundice of skin most prominent in face and trunk",
      "Abdominal palpation for hepatomegaly": "Hepatomegaly with liver edge palpable 4cm below right costal margin, firm and tender",
      "Right upper quadrant percussion and palpation": "Tenderness to palpation in RUQ, hepatic dullness extends to 6cm below costal margin",
      "Murphy's sign assessment": "Negative Murphy's sign",
      "Lymph node examination (cervical, axillary, inguinal)": "No significant lymphadenopathy detected",
      "Skin examination for spider angiomata and palmar erythema": "No spider angiomata, mild palmar erythema present",
      "Assessment for ascites (shifting dullness, fluid wave)": "No ascites detected",
      "Examination for peripheral edema": "Trace bilateral lower extremity edema",
      "Neurological assessment for asterixis or confusion": "No asterixis, alert and oriented x3"
    },
    "ddxTargets": [
      "Acute Hepatitis A (Foodborne — Occupational Shellfish Exposure in Unvaccinated Patient with Baseline NAFLD, Presenting with Jaundice, Transaminitis >2000, and Coagulopathy) (correct diagnosis)",
      "Acute Hepatitis B infection",
      "Drug-induced liver injury (DILI)",
      "Acute Hepatitis E infection",
      "Acetaminophen toxicity",
      "Acute cholangitis",
      "Autoimmune hepatitis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's known NAFLD and dismissing acute symptoms as progression of chronic disease rather than recognizing acute viral hepatitis superimposed on baseline liver disease",
      "prematureClosure": "May prematurely diagnose alcoholic hepatitis given social history or drug-induced hepatitis from metformin without fully exploring occupational exposure history",
      "availabilityBias": "Recent cases of drug-induced liver injury may overshadow consideration of foodborne viral hepatitis despite clear occupational risk factors"
    },
    "coachPrompts": {
      "phase2": "This patient presents with jaundice and constitutional symptoms. Given his occupational exposure and the pattern of presentation, what specific exposures and risk factors should you explore? Consider both infectious and toxic etiologies in someone with baseline liver disease.",
      "phase5": "You've identified significant hepatomegaly, jaundice, and RUQ tenderness in a restaurant worker with shellfish exposure. How does his occupational history and vaccination status influence your differential? What laboratory studies would help distinguish between viral hepatitides?",
      "finalDebrief": "This case demonstrates how occupational exposures can lead to serious infectious diseases, especially in unvaccinated individuals. The key was recognizing that acute symptoms in someone with chronic liver disease warranted investigation for acute causes rather than attributing everything to NAFLD progression. How did the patient's work environment and the specific pattern of illness guide your diagnostic thinking?"
    }
  }
};
