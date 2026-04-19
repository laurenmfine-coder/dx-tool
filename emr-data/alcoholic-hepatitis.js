// Virtual EMR Case: Alcoholic Hepatitis (Severe — Maddrey DF >32)
// Variant: alcoholic-hepatitis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Dennis O'Brien",
    "patientHPI": "I'm still drinking about a pint of liquor and some beers daily, and lately my stomach pain has been getting worse, especially right here under my ribs. I've lost my appetite and I'm only eating once a day - lost about four pounds recently.",
    "dob": "12/02/1969",
    "age": 56,
    "sex": "Male",
    "mrn": "RDX-2025-43228",
    "pronouns": "He/Him",
    "insurance": "Medicaid (Florida)",
    "pcp": "Dr. Catherine Brennan, MD",
    "pharmacy": "Walgreens — 1620 S Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "White (Irish American)",
    "address": "7824 Larkspur Ln, Albuquerque, NM 87104",
    "phone": "(954) 555-1908",
    "email": "d.obrien69@email.com",
    "emergencyContact": {
      "name": "Patrick O'Brien (Brother)",
      "phone": "(954) 555-1922"
    }
  },
  "problems": [
    {
      "problem": "Alcohol Use Disorder — Severe",
      "icd": "F10.20",
      "onset": "2008",
      "status": "Active",
      "notes": "Drinking 1 pint vodka + 6-8 beers daily x 15+ years; 2 prior attempts at rehab (2018, 2021) — relapsed within weeks; CAGE 4/4; AUDIT-C 12; liver biopsy 2023 showed steatohepatitis with early fibrosis (F2)"
    },
    {
      "problem": "Alcohol-Related Liver Disease — Steatohepatitis with Fibrosis",
      "icd": "K70.10",
      "onset": "2020",
      "status": "Active",
      "notes": "Elevated GGT chronically (300-500+); AST:ALT ratio consistently >2; FibroScan 2023: 12.8 kPa (F3); liver biopsy confirmed F2-F3 fibrosis with active steatohepatitis; referred to hepatology — missed 2 appointments"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2014",
      "status": "Active",
      "notes": "On lisinopril; poorly controlled when drinking heavily"
    },
    {
      "problem": "Chronic Pancreatitis",
      "icd": "K86.1",
      "onset": "2022",
      "status": "Active",
      "notes": "Alcohol-related; 2 prior episodes of acute pancreatitis (2019, 2022); on pancrelipase; reports chronic epigastric pain"
    },
    {
      "problem": "Major Depressive Disorder — Recurrent",
      "icd": "F33.1",
      "onset": "2016",
      "status": "Active",
      "notes": "On sertraline; comorbid with AUD; non-adherent with therapy"
    },
    {
      "problem": "Malnutrition — Moderate",
      "icd": "E44.0",
      "onset": "2025",
      "status": "Active",
      "notes": "BMI 19.8; poor oral intake; calories from alcohol; low albumin (2.8-3.0)"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "06/2015",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Sertraline 100mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "09/2017",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Pancrelipase (Creon) 36,000 units TID",
      "sig": "Take 1 capsule by mouth with each meal",
      "prescriber": "Dr. Brennan",
      "start": "08/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Thiamine 100mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "01/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Folic Acid 1mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "01/2020",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Disulfiram",
      "type": "Drug",
      "reaction": "Severe hepatotoxicity — ALT/AST >500 during prior trial (2018)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/20/2026",
      "bp": "102/62",
      "hr": 108,
      "rr": 20,
      "temp": "100.8°F",
      "spo2": "96%",
      "wt": "148 lbs",
      "ht": "5'11\"",
      "bmi": 20.6,
      "setting": "ED"
    },
    {
      "date": "10/08/2025",
      "bp": "138/88",
      "hr": 92,
      "rr": 18,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "154 lbs",
      "ht": "5'11\"",
      "bmi": 21.5,
      "setting": "PCP Office"
    },
    {
      "date": "05/22/2025",
      "bp": "142/90",
      "hr": 86,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "158 lbs",
      "ht": "5'11\"",
      "bmi": 22,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "Follow-up liver disease, depression, alcohol use",
      "hpi": "56M with severe AUD, alcohol-related liver disease (F2-F3 fibrosis), chronic pancreatitis presents for follow-up. Admits continued heavy drinking — 'about a pint and some beers a day.' Reports increased epigastric pain, poor appetite, eating only 1 meal daily. Weight down 4 lbs. Missed hepatology appointment again. Depression worsening — feels hopeless. Denies suicidal ideation. Notes darkening of urine over past 2 weeks and reports 'looking yellow' per brother.",
      "exam": "Cachectic, icteric male. Skin: Scleral icterus present. Mild jaundice of skin. Spider angiomata x3 on anterior chest. Palmar erythema bilateral. Abdomen: Firm, tender RUQ and epigastrium. Liver palpable 4 cm below costal margin, firm. No ascites (no shifting dullness). Ext: Trace pretibial edema. Neuro: Mild asterixis — questionable.",
      "assessment": "1. Alcohol-related liver disease — worsening; jaundice new; concern for progression to cirrhosis\n2. Severe AUD — ongoing heavy use despite counseling\n3. Chronic pancreatitis — chronic pain; malabsorption\n4. Malnutrition — ongoing weight loss, poor intake\n5. Depression — worsening",
      "plan": "1. STAT labs: Hepatic panel, CBC, INR, albumin, GGT\n2. Re-refer hepatology — URGENT\n3. Discussed rehab again — patient ambivalent\n4. Increase nutritional supplementation\n5. Sertraline continues; therapy re-referral\n6. Return 2 weeks; ED if worsening jaundice, confusion, or GI bleeding"
    },
    {
      "id": "V002",
      "date": "05/22/2025",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "Routine follow-up, medication refills",
      "hpi": "55M presents for routine follow-up. Reports cutting back on drinking 'a little bit' — now 'about a fifth every 2 days and some beers.' Chronic epigastric pain managed with pancrelipase. No jaundice. Appetite poor. Depression stable on sertraline.",
      "exam": "Thin male. No jaundice. Abdomen: Mild epigastric tenderness. Liver edge palpable 3 cm below costal margin.",
      "assessment": "1. AUD — reports minor reduction but still heavy\n2. Liver disease — stable\n3. Chronic pancreatitis — stable",
      "plan": "1. Continue medications\n2. Motivational interviewing re: alcohol cessation\n3. Labs in 3 months\n4. Hepatology f/u reminder"
    }
  ],
  "labs": [
    {
      "date": "10/08/2025",
      "time": "10:00",
      "orderedBy": "Dr. Brennan",
      "collected": "10/08/2025 10:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-851008",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "HEPATIC PANEL",
          "results": [
            {
              "test": "AST",
              "value": "186",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "68",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "ALP",
              "value": "210",
              "unit": "U/L",
              "range": "44-147",
              "flag": "H"
            },
            {
              "test": "GGT",
              "value": "528",
              "unit": "U/L",
              "range": "9-48",
              "flag": "H"
            },
            {
              "test": "Total Bilirubin",
              "value": "6.8",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": "H"
            },
            {
              "test": "Direct Bilirubin",
              "value": "4.2",
              "unit": "mg/dL",
              "range": "0.0-0.3",
              "flag": "H"
            },
            {
              "test": "Albumin",
              "value": "2.8",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            {
              "test": "INR",
              "value": "1.8",
              "unit": "",
              "range": "0.8-1.1",
              "flag": "H"
            },
            {
              "test": "PT",
              "value": "21.2",
              "unit": "sec",
              "range": "11.0-13.5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "14.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "10.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "MCV",
              "value": "108",
              "unit": "fL",
              "range": "80-100",
              "flag": "H"
            },
            {
              "test": "Platelets",
              "value": "98",
              "unit": "K/uL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "10/2025",
      "study": "ULTRASOUND ABDOMEN — RIGHT UPPER QUADRANT",
      "accession": "IMG-2025-101222",
      "status": "FINAL",
      "orderedBy": "Dr. Brennan",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "Worsening jaundice, elevated bilirubin — evaluate for biliary obstruction vs hepatocellular",
      "technique": "Real-time ultrasound of the right upper quadrant and liver.",
      "findings": "Liver: Coarsened echotexture with increased echogenicity suggesting steatosis and/or fibrosis. Liver measures 18.4 cm (hepatomegaly). No focal hepatic lesions. No intrahepatic biliary dilation.\n\nGallbladder: Normal wall thickness. No cholelithiasis. No pericholecystic fluid.\n\nCommon bile duct: 5 mm (normal). No extrahepatic biliary obstruction.\n\nPortal vein: Patent, 13 mm (upper limit normal). Flow hepatopetal.\n\nSpleen: 14.2 cm (borderline splenomegaly).\n\nAscites: Small amount of free fluid in Morison pouch and pelvis.",
      "impression": "1. Hepatomegaly (18.4 cm) with coarsened echotexture — consistent with chronic liver disease.\n2. No biliary obstruction — jaundice is hepatocellular in etiology.\n3. Small-volume ascites.\n4. Borderline splenomegaly — early portal hypertension.\n5. No focal hepatic lesion.",
      "dictated": "10/12/2025 11:00",
      "verified": "10/12/2025 13:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "11/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-9518",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Moderna)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2508",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Hepatitis A+B (Twinrix) — Series Complete",
      "date": "2020",
      "site": "Right deltoid IM",
      "lot": "TW20-310",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap",
      "date": "04/2020",
      "site": "Left deltoid IM",
      "lot": "TD20-268",
      "mfr": "GSK"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "04/2025",
      "site": "Left deltoid IM",
      "lot": "PV20-908",
      "mfr": "Pfizer"
    }
  ],
  "familyHistory": [
    "Father: Alcoholism, cirrhosis, deceased at 62 (variceal hemorrhage)",
    "Mother: HTN, alive at 80",
    "Brother: Recovering alcoholic (sober 10 years), alive at 58",
    "Sister: Healthy, alive at 52"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Unemployed; formerly worked in construction; unable to work due to chronic pain and alcohol use"
    ],
    [
      "Marital",
      "Divorced (2019); lives alone"
    ],
    [
      "Tobacco",
      "Current — 1 PPD x 30 years (30 pack-years)"
    ],
    [
      "Alcohol",
      "Active heavy use — approximately 1 pint vodka + 6-8 beers daily x 15+ years"
    ],
    [
      "Drugs",
      "Denies current use; remote cocaine use in 20s"
    ],
    [
      "Exercise",
      "None — deconditioned"
    ],
    [
      "Housing",
      "Efficiency apartment; brother checks on him weekly"
    ],
    [
      "Safety",
      "Fall risk (unsteady gait when drinking); denies IPV; no firearms; no seatbelt use reported"
    ],
    [
      "Advance Directive",
      "None — not discussed; brother is informal next of kin"
    ]
  ],
  "meta": {
    "caseId": "alcoholic-hepatitis",
    "diagnosis": "Severe Alcoholic Hepatitis (Maddrey Discriminant Function >32, AST:ALT >2:1, Leukocytosis, Coagulopathy, Jaundice — Prednisolone Candidate Pending LILLE Score)",
    "acuity": 2,
    "presentation": "Toxicologic Emergency",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Dennis appears visibly ill and jaundiced, speaking in a tired, monotone voice with periods of confusion. He is cooperative but somewhat defensive about his drinking, alternating between minimizing his alcohol use and expressing genuine concern about feeling 'really sick this time.'",
    "interviewQuestions": [
      "Can you describe the abdominal pain you're experiencing?",
      "When did you first notice the pain getting worse?",
      "Have you noticed any changes in your skin color or the whites of your eyes?",
      "Tell me about your current alcohol use - how much and how often?",
      "When was your last drink?",
      "Have you had any nausea, vomiting, or changes in your bowel movements?",
      "Have you noticed any swelling in your legs or abdomen?",
      "Are you taking all your prescribed medications regularly?",
      "Have you had any recent infections or felt feverish?",
      "How has your appetite and weight been recently?",
      "Have you had episodes like this before?",
      "Are you experiencing any confusion or mental cloudiness?",
      "Have you noticed any unusual bleeding or bruising?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating right now. Could you ask that a different way?",
      "onset": "The pain has been getting much worse over the past 2-3 weeks. I've always had some discomfort from my liver problems, but this is different - much more intense.",
      "character": "It's a deep, constant aching pain that sometimes feels like burning. It's not sharp, just this heavy, gnawing feeling that won't go away.",
      "location": "Right here under my right ribs, and it spreads across my upper belly. Sometimes I feel it in my back too.",
      "severity": "It's about a 7 out of 10 most days, but when it flares up it can be an 8 or 9. I can barely eat when it's bad, and I can't sleep on my right side anymore.",
      "aggravating": "Eating makes it worse, especially anything greasy. Even thinking about food sometimes makes me nauseous. The pain seems worse when I try to cut back on drinking.",
      "relieving": "Honestly, alcohol used to help dull the pain, but lately even that doesn't help much. Heat pads provide a little relief, but nothing really makes it go away.",
      "associated": "I've been feeling nauseous a lot, especially in the mornings. I've lost my appetite completely and I'm only forcing myself to eat once a day. I feel weak and tired all the time.",
      "denies": "No vomiting blood, no black stools, no severe confusion yet. I haven't had any chest pain or shortness of breath, and no recent falls or injuries.",
      "history": "I've had flare-ups before, but nothing this severe or lasting this long. Usually I could manage with rest and... well, drinking less for a few days.",
      "medications": "Lisinopril 20mg daily; Sertraline 100mg daily; Pancrelipase (Creon) 36,000 units TID; Thiamine 100mg daily; Folic Acid 1mg daily",
      "allergies": "Disulfiram",
      "family": "My dad died from liver problems when he was 62 - he had varices that bled. He was a heavy drinker like me. My mom's still alive but has high blood pressure.",
      "social": "I used to work construction but can't work anymore because of my health and drinking. I'm divorced, live alone. I smoke a pack a day and drink about a pint of vodka plus 6-8 beers daily for the past 15 years or so."
    },
    "examManeuvers": [
      "Abdominal inspection",
      "Right upper quadrant palpation",
      "Liver edge palpation",
      "Spleen palpation",
      "Assessment for ascites (shifting dullness/fluid wave)",
      "Scleral icterus examination",
      "Skin examination for jaundice",
      "Examination for spider angiomata",
      "Assessment for asterixis",
      "Lower extremity edema assessment"
    ],
    "examFindings": {
      "Abdominal inspection": "Distended abdomen with visible jaundice of the skin, no visible collateral circulation",
      "Right upper quadrant palpation": "Tender to palpation with voluntary guarding, no rebound tenderness",
      "Liver edge palpation": "Hepatomegaly with liver edge palpable 4cm below right costal margin, firm and tender",
      "Spleen palpation": "Spleen tip just palpable below left costal margin",
      "Assessment for ascites (shifting dullness/fluid wave)": "Mild ascites present with shifting dullness positive",
      "Scleral icterus examination": "Pronounced scleral icterus bilaterally",
      "Skin examination for jaundice": "Obvious jaundice of skin and mucous membranes",
      "Examination for spider angiomata": "Multiple spider angiomata on chest and upper arms",
      "Assessment for asterixis": "Mild asterixis present bilaterally",
      "Lower extremity edema assessment": "1+ pitting edema bilateral lower extremities to mid-shin"
    },
    "ddxTargets": [
      "Severe Alcoholic Hepatitis (Maddrey Discriminant Function >32, AST:ALT >2:1, Leukocytosis, Coagulopathy, Jaundice — Prednisolone Candidate Pending LILLE Score) (correct diagnosis)",
      "Acute on chronic liver failure with decompensated cirrhosis",
      "Drug-induced liver injury with acute hepatitis",
      "Acute cholangitis with biliary obstruction",
      "Hepatic encephalopathy with metabolic decompensation",
      "Acute pancreatitis with secondary hepatitis",
      "Viral hepatitis superimposed on chronic liver disease"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on chronic alcohol use and missing acute decompensation requiring immediate intervention, or focusing only on addiction rather than severe hepatitis",
      "prematureClosure": "Risk of stopping at 'chronic alcoholic liver disease' without recognizing this as severe alcoholic hepatitis requiring specific scoring and potential steroid therapy",
      "availabilityBias": "May focus on more common presentations of alcohol withdrawal or chronic liver disease rather than recognizing acute severe alcoholic hepatitis with high mortality risk"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. This patient has multiple concerning features - what specific aspects of his presentation worry you most about acute decompensation? What key historical points will help you distinguish between chronic stable disease versus acute severe alcoholic hepatitis?",
      "phase5": "You've identified significant findings consistent with acute liver dysfunction. Given his Maddrey discriminant function calculation and clinical presentation, what specific scoring systems should you consider? How will your management differ if this is severe alcoholic hepatitis versus decompensated cirrhosis?",
      "finalDebrief": "This case highlights severe alcoholic hepatitis with Maddrey DF >32, requiring consideration of corticosteroid therapy. Notice how the AST:ALT ratio >2:1, leukocytosis, and coagulopathy with jaundice created the classic constellation. The key was recognizing this as an acute process requiring immediate scoring and potential intervention, not just chronic liver disease."
    }
  }
};
