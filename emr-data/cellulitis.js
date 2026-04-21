
window.EMR_DATA = {
  "patient": {
    "name": "James Crawford",
    "patientHPI": "I'm here for my regular check-up for my diabetes and blood pressure. My feet have been getting numb and burning lately, especially at night. I know my blood sugar hasn't been great - I've been struggling to stick to my diet and haven't been exercising much.",
    "dob": "01/30/1970",
    "age": 55,
    "sex": "Male",
    "mrn": "RDX-2025-42318",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL HMO",
    "pcp": "Dr. David Rosenberg, MD",
    "pharmacy": "CVS Pharmacy \u2014 4700 N Pine Island Rd, Sunrise, FL",
    "language": "English",
    "race": "White",
    "address": "8842 Larkspur Ln, Denver, CO 80211",
    "phone": "(954) 555-1127",
    "email": "j.crawford70@email.com",
    "emergencyContact": {
      "name": "Carol Crawford (Wife)",
      "phone": "(954) 555-1140"
    }
  },
  "problems": [
    {
      "problem": "Scrotal erythema and swelling \u2014 Fournier gangrene must be excluded",
      "icd": "L03.818",
      "onset": "2024",
      "status": "Active",
      "notes": "James Taylor, 58M \u2014 diabetic, 3 days scrotal pain, erythema, and swelling. Fever 38.8\u00b0C. Question: is this simple cellulitis or Fournier gangrene (necrotizing fasciitis of perineum)?"
    },
    {
      "problem": "Diabetes mellitus \u2014 major risk factor for Fournier gangrene",
      "icd": "E11.9",
      "onset": "2015",
      "status": "Active",
      "notes": "DM is the most common predisposing condition for Fournier gangrene. Impaired immune function and vascular disease allow rapidly progressive infection."
    },
    {
      "problem": "Risk stratification \u2014 Laboratory Risk Indicator for Necrotizing Fasciitis (LRINEC) score",
      "icd": "M72.6",
      "onset": "2024",
      "status": "Active",
      "notes": "LRINEC \u22656 = high risk for necrotizing fasciitis. Parameters: CRP, WBC, hemoglobin, sodium, creatinine, glucose."
    }
  ],
  "medications": [
    {
      "name": "Urgent surgical consultation \u2014 if Fournier features present",
      "sig": "Fournier gangrene requires emergent surgical debridement within hours of diagnosis. Mortality 20-40% even with treatment. If any suspicion: OR NOW, not after 'watching.'",
      "prescriber": "Surgery/Urology",
      "start": "2024",
      "refills": 0,
      "status": "Consulted"
    },
    {
      "name": "Cefazolin 1g IV q8h \u2014 if simple cellulitis confirmed",
      "sig": "For non-necrotizing cellulitis: anti-staph/strep coverage. Upgrade to broad-spectrum if progression or Fournier features emerge.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Pending surgical assessment"
    },
    {
      "name": "Broad-spectrum antibiotics if Fournier suspected",
      "sig": "Vancomycin + piperacillin-tazobactam + metronidazole \u2014 polymicrobial coverage for Fournier. IV antibiotics are adjunct to surgery, NOT primary treatment.",
      "prescriber": "Surgery/Infectious Disease",
      "start": "2024",
      "refills": 0,
      "status": "Ready \u2014 if FG suspected"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Urticaria and throat tightness",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/06/2025",
      "bp": "144/88",
      "hr": 82,
      "rr": 16,
      "temp": "98.8\u00b0F",
      "spo2": "97%",
      "wt": "260 lbs",
      "ht": "5'10\"",
      "bmi": 37.3,
      "setting": "PCP Office"
    },
    {
      "date": "07/08/2024",
      "bp": "148/92",
      "hr": 78,
      "rr": 16,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "258 lbs",
      "ht": "5'10\"",
      "bmi": 37,
      "setting": "PCP Office"
    },
    {
      "date": "01/12/2024",
      "bp": "150/94",
      "hr": 80,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "96%",
      "wt": "262 lbs",
      "ht": "5'10\"",
      "bmi": 37.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/06/2025",
      "type": "Primary Care",
      "provider": "Dr. David Rosenberg, MD",
      "cc": "Follow-up: T2DM, HTN, recurrent skin infections",
      "hpi": "55-year-old male with poorly controlled T2DM, HTN, and history of recurrent MRSA skin infections presenting for routine follow-up. A1c today 8.8% (up from 8.2%). Reports occasional numbness and burning in feet. Skin \u2014 no active infections currently. Admits to poor dietary compliance and minimal exercise. BPH symptoms stable on tamsulosin.",
      "exam": "General: Obese male in NAD. HEENT: PERRL. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Obese, soft, NT/ND. Skin: Healed scar left thigh from prior I&D. No active lesions. Extremities: Bilateral lower extremity pitting edema 1+. Neuro: Decreased sensation bilateral feet to mid-shin (monofilament testing).",
      "assessment": "1. T2DM \u2014 worsening control, A1c 8.8%\n2. HTN \u2014 above goal\n3. Diabetic peripheral neuropathy \u2014 stable symptoms\n4. Recurrent MRSA skin infections \u2014 no active infection; decolonization ongoing\n5. BPH \u2014 stable on tamsulosin",
      "plan": "1. Add Semaglutide 0.25mg SQ weekly; titrate per protocol\n2. Add HCTZ 12.5mg daily to HTN regimen\n3. Continue gabapentin; podiatry referral for diabetic foot exam\n4. Continue MRSA decolonization protocol\n5. Diabetic educator referral\n6. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "10/22/2024",
      "type": "Urgent Care",
      "provider": "Dr. Alan Brooks, MD",
      "cc": "Painful boil right groin x 3 days",
      "hpi": "55-year-old diabetic male with history of recurrent MRSA infections presenting with a painful, swollen area in the right inguinal fold x 3 days. Reports warmth, redness, and purulent drainage since this morning. Low-grade fever at home. No urinary symptoms.",
      "exam": "General: Mild distress from pain. Skin: Right inguinal fold \u2014 4x3 cm fluctuant, erythematous abscess with surrounding cellulitis. Purulent drainage expressed. No crepitus.",
      "assessment": "1. Right inguinal abscess \u2014 likely MRSA given history",
      "plan": "1. I&D performed; wound culture sent\n2. Trimethoprim-sulfamethoxazole DS 1 tab BID x 10 days (penicillin allergy)\n3. Wound packing; follow-up 48 hours for repack\n4. Return precautions: worsening redness, fever >101\u00b0F, spreading cellulitis"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Fournier/Cellulitis Risk Assessment",
      "results": [
        {
          "test": "WBC",
          "value": "16.8",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "142",
          "unit": "mg/L",
          "ref": "<10",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.8",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "132",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "LRINEC score",
          "value": "7 (high risk \u2014 >6 = necrotizing fasciitis likely)",
          "unit": "",
          "ref": "<6 = low risk",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Pelvis with Contrast",
      "findings": "Scrotal wall thickening and edema. Small amount of gas tracking along fascial planes of perineum and scrotum \u2014 pathognomonic for necrotizing fasciitis. No abscess. No free perforation.",
      "impression": "Gas in fascial planes consistent with Fournier gangrene (necrotizing fasciitis). Emergent surgical debridement indicated."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/15/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-295",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-889",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "05/2024",
      "site": "Left deltoid IM",
      "lot": "SX24-220",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "07/2024",
      "site": "Left deltoid IM",
      "lot": "SX24-388",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: T2DM, MI at age 64 (deceased at 72)",
    "Mother: HTN, osteoarthritis, alive at 80",
    "Brother: T2DM, age 52",
    "Sister: Prediabetes, age 50"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Office administrator"
    ],
    [
      "Marital",
      "Married"
    ],
    [
      "Tobacco",
      "Former \u2014 10 pack-years; quit 2010"
    ],
    [
      "Alcohol",
      "1-2 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal \u2014 sedentary lifestyle"
    ],
    [
      "Housing",
      "Lives with wife in single-family home"
    ],
    [
      "Safety",
      "Denies IPV; wears seatbelt"
    ],
    [
      "Advance Directive",
      "None \u2014 discussed"
    ]
  ],
  "meta": {
    "caseId": "cellulitis",
    "diagnosis": "Scrotal Cellulitis vs Fournier Gangrene \u2014 Necrotizing Fasciitis Screen",
    "acuity": 3,
    "presentation": "Urologic Emergency",
    "category": "urologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Mr. Crawford appears anxious and uncomfortable, frequently shifting position and grimacing when discussing his scrotal pain. He is cooperative but somewhat embarrassed about his symptoms, requiring gentle encouragement to provide details about his genital examination findings. His distress level is moderate, with visible concern about the severity of his condition.",
    "interviewQuestions": [
      "Can you describe the pain or discomfort you're experiencing in your scrotal area?",
      "When did you first notice these symptoms in your scrotum?",
      "Have you noticed any redness, swelling, or warmth in the scrotal area?",
      "Have you had any fever, chills, or feeling unwell recently?",
      "Have you noticed any discharge or unusual odor?",
      "Have you had any recent injuries or trauma to the genital area?",
      "Have you had any urinary symptoms like burning, frequency, or difficulty urinating?",
      "Have you had any nausea or vomiting with this pain?",
      "How has your diabetes control been lately?",
      "Have you had any similar skin infections in the past?",
      "Are you sexually active, and if so, any new partners recently?",
      "Have you been doing any activities that might cause chafing or irritation?",
      "On a scale of 1-10, how would you rate your pain right now?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Could you ask me more specifically about my scrotal pain or symptoms?",
      "onset": "I first noticed some tenderness and redness in my scrotum about 3 days ago. It started as just mild irritation but has gotten progressively worse and more painful.",
      "character": "It's a constant, throbbing, burning pain that feels hot and tender to touch. The skin feels tight and stretched.",
      "location": "The pain is mainly on the left side of my scrotum, but it's starting to spread to the right side too. It doesn't really radiate anywhere else.",
      "severity": "Right now it's about a 7 out of 10. It's really interfering with my ability to walk normally or sit comfortably. I can barely touch the area.",
      "aggravating": "Any movement, walking, or touching the area makes it much worse. Even having clothing rub against it is very uncomfortable.",
      "relieving": "I've been trying to keep the area clean and dry, and ibuprofen helps a little bit, but nothing really makes it feel better.",
      "associated": "I've felt a bit warm and tired the past day or so, maybe slightly feverish. I haven't had any nausea or vomiting though.",
      "denies": "No testicular pain deep inside, no severe nausea or vomiting, no urinary burning or frequency, no penile discharge.",
      "history": "I've had some skin infections before, especially on my legs and feet, probably related to my diabetes. But I've never had anything like this in the genital area.",
      "medications": "Metformin 1000mg BID; Glipizide 10mg BID; Lisinopril 40mg daily; Amlodipine 5mg daily; Gabapentin 300mg TID; Tamsulosin 0.4mg QHS; Mupirocin 2% ointment",
      "allergies": "Penicillin",
      "family": "My dad and brother both have diabetes like me, and my dad had heart problems. My mom has high blood pressure and arthritis.",
      "social": "I work as an office administrator, so I sit a lot. I'm married. I quit smoking about 14 years ago after smoking for 10 pack-years. I have 1-2 beers on weekends and don't use any drugs."
    },
    "examManeuvers": [
      "Visual inspection of scrotum",
      "Palpation of scrotal skin and contents",
      "Assessment for lymphadenopathy in inguinal regions",
      "Testicular examination and cremasteric reflex",
      "Abdominal examination",
      "Assessment of vital signs including temperature",
      "Inspection for other areas of skin infection",
      "Urethral meatus examination",
      "Assessment of scrotal elevation (negative Prehn's sign)",
      "Transillumination test"
    ],
    "examFindings": {
      "Visual inspection of scrotum": "Significant erythema, edema, and induration of the left scrotal skin extending to the right side. Skin appears hot, red, and inflamed with some areas of scaling.",
      "Palpation of scrotal skin and contents": "Scrotal skin is markedly tender, warm, and thickened. Testes are palpable and non-tender. No fluctuance or crepitus noted.",
      "Assessment for lymphadenopathy in inguinal regions": "Mild bilateral inguinal lymphadenopathy with small, tender lymph nodes palpable.",
      "Testicular examination and cremasteric reflex": "Both testes are normal in size, shape, and position. Cremasteric reflex is intact bilaterally. No testicular tenderness.",
      "Abdominal examination": "Soft, non-tender, non-distended. No masses or organomegaly. Normal bowel sounds.",
      "Assessment of vital signs including temperature": "Temperature 98.8\u00b0F, BP 144/88, HR 82, SpO2 97%. Patient appears mildly uncomfortable but not toxic.",
      "Inspection for other areas of skin infection": "No other obvious areas of active skin infection. Some evidence of prior diabetic skin changes on lower extremities.",
      "Urethral meatus examination": "Normal appearance, no discharge, no erythema or swelling.",
      "Assessment of scrotal elevation (negative Prehn's sign)": "Elevating the scrotum does not provide significant pain relief, helping to rule out epididymitis.",
      "Transillumination test": "No transillumination of scrotal contents, ruling out hydrocele or other fluid collections."
    },
    "ddxTargets": [
      "Fournier gangrene \u2014 necrotizing fasciitis (correct \u2014 gas on CT clinches it)",
      "Simple scrotal cellulitis \u2014 no gas on CT; LRINEC <6; no fascial plane involvement",
      "Epididymo-orchitis \u2014 testicular tenderness; scrotal Doppler increased flow; systemic toxicity less",
      "Scrotal abscess \u2014 fluctuant; loculated on ultrasound; I&D sufficient",
      "Incarcerated inguinal hernia \u2014 bowel palpable; no fever; different examination"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on diabetes routine visit and missing the acute urologic emergency, or focusing only on diabetic complications rather than the presenting scrotal symptoms",
      "prematureClosure": "May stop at simple cellulitis without considering more serious conditions like Fournier's gangrene, especially given patient's diabetes and immunocompromised state",
      "availabilityBias": "Recent cases of epididymitis or testicular torsion may lead to premature focus on these diagnoses rather than considering skin and soft tissue infection"
    },
    "coachPrompts": {
      "phase2": "This 55-year-old diabetic male presents with scrotal pain and erythema. What are your thoughts about the most concerning diagnoses you need to rule out first, particularly given his diabetes and immunocompromised state? How will your history help you differentiate between testicular pathology versus skin and soft tissue infection?",
      "phase5": "Based on your history and physical examination findings, how do the physical exam findings help you narrow your differential diagnosis? What specific features help you distinguish cellulitis from more serious conditions like Fournier's gangrene or testicular pathology? What additional risk factors does this patient have?",
      "finalDebrief": "This case demonstrates scrotal cellulitis in a diabetic patient. Notice how the key differentiating features were the superficial skin involvement, absence of deep testicular tenderness, negative Prehn's sign, and lack of systemic toxicity. The patient's diabetes puts him at higher risk for skin and soft tissue infections and potentially more serious complications like necrotizing fasciitis, making prompt recognition and treatment crucial.",
      "final": "Diagnosis: Fournier gangrene (necrotizing fasciitis of perineum). Key learning: (1) Fournier gangrene is necrotizing fasciitis of the perineum and external genitalia \u2014 polymicrobial (aerobic + anaerobic synergy), rapidly progressive, requires emergent surgical debridement. Risk factors: DM (most common), alcoholism, immunocompromised, trauma, perineal surgery. (2) Gas in fascial planes on CT is pathognomonic: CT pelvis with contrast is the study of choice to detect gas tracking along fascial planes. Absence of gas does NOT exclude early Fournier \u2014 do not be falsely reassured. (3) LRINEC score: CRP >150 (4pts) + WBC >15 (1pt) + Hgb <13.5 (1pt) + sodium <135 (2pts) + Cr >1.6 (2pts) + glucose >180 (1pt). Score \u22656 = high risk for necrotizing fasciitis. Useful but not definitive \u2014 clinical judgment predominates. (4) The 'surgical look' rule: if Fournier is suspected and CT is equivocal, take to OR for examination under anesthesia. The finger test \u2014 blunt dissection with finger, no resistance of tissues = necrotizing fasciitis. A negative look (simple cellulitis) costs 30 minutes of OR time. A missed Fournier costs a life. (5) Treatment: aggressive surgical debridement \u00b1 diverting colostomy + broad-spectrum antibiotics + hyperbaric oxygen (adjunct, not primary). Mortality 20-40%; wounds often require multiple debridements."
    }
  }
};
