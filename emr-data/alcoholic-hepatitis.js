
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
    "pharmacy": "Walgreens \u2014 1620 S Federal Hwy, Fort Lauderdale, FL",
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
      "problem": "Severe alcoholic hepatitis \u2014 MDF 52",
      "icd": "K70.10",
      "onset": "2024",
      "status": "Active",
      "notes": "James O'Brien, 48M \u2014 20-year heavy alcohol use, drinking until 2 weeks ago. Jaundice, hepatic encephalopathy grade II, tender hepatomegaly. MDF 52 (>32 = severe, 30-day mortality >50% without treatment)."
    },
    {
      "problem": "Hepatic encephalopathy \u2014 grade II",
      "icd": "K72.00",
      "onset": "2024",
      "status": "Active",
      "notes": "Asterixis present. Oriented to person and place but not time. Ammonia 94. Precipitated by GI bleed? Infection? Constipation?"
    },
    {
      "problem": "Infection risk \u2014 spontaneous bacterial peritonitis, pneumonia",
      "icd": "K70.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Alcoholic hepatitis \u2192 immunosuppression. Screen for SBP (diagnostic paracentesis if ascites), UTI, pneumonia before starting steroids."
    }
  ],
  "medications": [
    {
      "name": "Prednisolone 40mg daily x 28 days \u2014 if no contraindications",
      "sig": "Steroids improve 28-day survival in severe AH (MDF >32). Contraindications: active infection, GI bleeding, HBV/HCV coinfection (reactivation risk), renal failure. Lille score at day 7 predicts response.",
      "prescriber": "Hepatology/GI",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 after infection ruled out"
    },
    {
      "name": "Pentoxifylline 400mg TID \u2014 if steroids contraindicated",
      "sig": "Anti-TNF mechanism. Reduces hepatorenal syndrome risk. Used when steroids contraindicated. Less evidence than steroids but safer profile.",
      "prescriber": "Hepatology/GI",
      "start": "2024",
      "refills": 1,
      "status": "Alternative"
    },
    {
      "name": "Lactulose 30mL TID \u2014 hepatic encephalopathy",
      "sig": "Reduces ammonia production. Titrate to 2-3 soft stools per day. Rifaximin 550mg BID can be added for refractory encephalopathy.",
      "prescriber": "Hepatology",
      "start": "2024",
      "refills": 1,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Disulfiram",
      "type": "Drug",
      "reaction": "Severe hepatotoxicity \u2014 ALT/AST >500 during prior trial (2018)",
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
      "temp": "100.8\u00b0F",
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
      "temp": "98.6\u00b0F",
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
      "temp": "98.4\u00b0F",
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
      "hpi": "56M with severe AUD, alcohol-related liver disease (F2-F3 fibrosis), chronic pancreatitis presents for follow-up. Admits continued heavy drinking \u2014 'about a pint and some beers a day.' Reports increased epigastric pain, poor appetite, eating only 1 meal daily. Weight down 4 lbs. Missed hepatology appointment again. Depression worsening \u2014 feels hopeless. Denies suicidal ideation. Notes darkening of urine over past 2 weeks and reports 'looking yellow' per brother.",
      "exam": "Cachectic, icteric male. Skin: Scleral icterus present. Mild jaundice of skin. Spider angiomata x3 on anterior chest. Palmar erythema bilateral. Abdomen: Firm, tender RUQ and epigastrium. Liver palpable 4 cm below costal margin, firm. No ascites (no shifting dullness). Ext: Trace pretibial edema. Neuro: Mild asterixis \u2014 questionable.",
      "assessment": "1. Alcohol-related liver disease \u2014 worsening; jaundice new; concern for progression to cirrhosis\n2. Severe AUD \u2014 ongoing heavy use despite counseling\n3. Chronic pancreatitis \u2014 chronic pain; malabsorption\n4. Malnutrition \u2014 ongoing weight loss, poor intake\n5. Depression \u2014 worsening",
      "plan": "1. STAT labs: Hepatic panel, CBC, INR, albumin, GGT\n2. Re-refer hepatology \u2014 URGENT\n3. Discussed rehab again \u2014 patient ambivalent\n4. Increase nutritional supplementation\n5. Sertraline continues; therapy re-referral\n6. Return 2 weeks; ED if worsening jaundice, confusion, or GI bleeding"
    },
    {
      "id": "V002",
      "date": "05/22/2025",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "Routine follow-up, medication refills",
      "hpi": "55M presents for routine follow-up. Reports cutting back on drinking 'a little bit' \u2014 now 'about a fifth every 2 days and some beers.' Chronic epigastric pain managed with pancrelipase. No jaundice. Appetite poor. Depression stable on sertraline.",
      "exam": "Thin male. No jaundice. Abdomen: Mild epigastric tenderness. Liver edge palpable 3 cm below costal margin.",
      "assessment": "1. AUD \u2014 reports minor reduction but still heavy\n2. Liver disease \u2014 stable\n3. Chronic pancreatitis \u2014 stable",
      "plan": "1. Continue medications\n2. Motivational interviewing re: alcohol cessation\n3. Labs in 3 months\n4. Hepatology f/u reminder"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Severe Alcoholic Hepatitis",
      "results": [
        {
          "test": "Maddrey Discriminant Function",
          "value": "52",
          "unit": "",
          "ref": "<32 = mild/moderate; >32 = severe",
          "flag": "H"
        },
        {
          "test": "AST:ALT ratio",
          "value": "2.8:1",
          "unit": "",
          "ref": ">2:1 = alcoholic hepatitis",
          "flag": "H"
        },
        {
          "test": "Total bilirubin",
          "value": "18.4",
          "unit": "mg/dL",
          "ref": "0.2-1.2",
          "flag": "H"
        },
        {
          "test": "PT/INR",
          "value": "2.1",
          "unit": "",
          "ref": "<1.2",
          "flag": "H"
        },
        {
          "test": "Ammonia",
          "value": "94",
          "unit": "\u03bcmol/L",
          "ref": "<35",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Right Upper Quadrant Ultrasound",
      "findings": "Hepatomegaly with increased echogenicity consistent with fatty infiltration. Moderate ascites. No focal lesions. Normal bile ducts.",
      "impression": "Hepatomegaly with ascites. Pattern consistent with alcoholic liver disease."
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
      "vaccine": "Hepatitis A+B (Twinrix) \u2014 Series Complete",
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
      "Current \u2014 1 PPD x 30 years (30 pack-years)"
    ],
    [
      "Alcohol",
      "Active heavy use \u2014 approximately 1 pint vodka + 6-8 beers daily x 15+ years"
    ],
    [
      "Drugs",
      "Denies current use; remote cocaine use in 20s"
    ],
    [
      "Exercise",
      "None \u2014 deconditioned"
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
      "None \u2014 not discussed; brother is informal next of kin"
    ]
  ],
  "meta": {
    "caseId": "alcoholic-hepatitis",
    "diagnosis": "Severe Alcoholic Hepatitis (Maddrey Discriminant Function >32)",
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
      "Severe alcoholic hepatitis \u2014 MDF 52 (correct)",
      "Autoimmune hepatitis \u2014 ANA, ASMA; responds to steroids but different patient profile and lab pattern",
      "Acute hepatitis B \u2014 HBsAg; important to rule out before steroids (reactivation risk)",
      "Acute-on-chronic liver failure \u2014 can coexist; alcoholic hepatitis is a common precipitant",
      "Drug-induced liver injury \u2014 medication history; AST:ALT pattern can be similar"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on chronic alcohol use and missing acute decompensation requiring immediate intervention, or focusing only on addiction rather than severe hepatitis",
      "prematureClosure": "Risk of stopping at 'chronic alcoholic liver disease' without recognizing this as severe alcoholic hepatitis requiring specific scoring and potential steroid therapy",
      "availabilityBias": "May focus on more common presentations of alcohol withdrawal or chronic liver disease rather than recognizing acute severe alcoholic hepatitis with high mortality risk"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. This patient has multiple concerning features - what specific aspects of his presentation worry you most about acute decompensation? What key historical points will help you distinguish between chronic stable disease versus acute severe alcoholic hepatitis?",
      "phase5": "You've identified significant findings consistent with acute liver dysfunction. Given his Maddrey discriminant function calculation and clinical presentation, what specific scoring systems should you consider? How will your management differ if this is severe alcoholic hepatitis versus decompensated cirrhosis?",
      "finalDebrief": "This case highlights severe alcoholic hepatitis with Maddrey DF >32, requiring consideration of corticosteroid therapy. Notice how the AST:ALT ratio >2:1, leukocytosis, and coagulopathy with jaundice created the classic constellation. The key was recognizing this as an acute process requiring immediate scoring and potential intervention, not just chronic liver disease.",
      "final": "Diagnosis: severe alcoholic hepatitis. Key learning: (1) Maddrey Discriminant Function (MDF) = 4.6 \u00d7 (PT - control PT) + total bilirubin. MDF >32 = severe, 30-day mortality 30-50% without treatment. MELD >20 is an alternative severity marker. (2) AST:ALT ratio >2:1 is characteristic of alcoholic hepatitis \u2014 alcohol injures mitochondria \u2192 preferential AST release. ALT rarely exceeds 300 in alcoholic hepatitis. (3) Steroids in severe AH: prednisolone 40mg/day \u00d7 28 days improves 28-day survival. Must rule out: active infection (SBP, UTI, pneumonia), GI bleeding, renal failure, HBV coinfection. Lille score at day 7: if bilirubin not decreasing \u2192 non-responder \u2192 stop steroids. (4) Hepatic encephalopathy management: identify and treat precipitants (infection, GI bleed, constipation, medications). Lactulose + rifaximin. Avoid benzodiazepines and sedatives. (5) Prognosis: 90-day mortality for severe AH is 30-50%. Transplant evaluation controversial in acute AH \u2014 most centers require 6 months sobriety."
    }
  }
};
