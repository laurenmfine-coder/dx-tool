
window.EMR_DATA = {
  "patient": {
    "name": "Robert Nguyen",
    "patientHPI": "I stopped taking my gout medication about four months ago because I was feeling great and didn't think I needed it anymore, but since then I've had two really painful flare-ups in my toe and ankle, and I've been drinking more beer and eating rich foods lately.",
    "dob": "02/18/1972",
    "age": 52,
    "sex": "Male",
    "mrn": "RDX-2025-27614",
    "pronouns": "He/Him",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Maria Santos, MD",
    "pharmacy": "CVS Pharmacy \u2014 5200 S University Dr, Riverside, FL",
    "language": "English, Vietnamese",
    "race": "Asian (Vietnamese)",
    "address": "1969 Sycamore Dr, Birmingham, AL 35207",
    "phone": "(954) 555-8472",
    "email": "r.nguyen72@email.com",
    "emergencyContact": {
      "name": "Linh Nguyen (Wife)",
      "phone": "(954) 555-8490"
    }
  },
  "problems": [
    {
      "problem": "Acute gout flare \u2014 first MTP (podagra)",
      "icd": "M10.071",
      "onset": "2024",
      "status": "Active",
      "notes": "Harold Kim, 58M \u2014 sudden onset severe right first MTP joint pain, redness, swelling overnight. Cannot bear weight. Serum uric acid 9.8. Known gout, non-adherent to allopurinol."
    },
    {
      "problem": "Non-adherence to urate-lowering therapy \u2014 target uric acid <6",
      "icd": "M10.071",
      "onset": "2024",
      "status": "Active",
      "notes": "On allopurinol 100mg daily but takes it only sometimes. Uric acid 9.8 (target <6.0 for most patients; <5.0 for tophaceous gout). Non-adherence driving recurrent flares and tophi formation."
    },
    {
      "problem": "Tophi \u2014 urate crystal deposits in soft tissue",
      "icd": "M10.071",
      "onset": "2024",
      "status": "Active",
      "notes": "Chalky white deposits over right olecranon. Tophi = chronic urate crystal deposition = indication for more aggressive ULT and target uric acid <5.0."
    }
  ],
  "medications": [
    {
      "name": "Colchicine 1.2mg then 0.6mg 1h later \u2014 acute attack",
      "sig": "Most effective when started within 12-24h of symptom onset. Anti-inflammatory via microtubule inhibition \u2192 inhibits neutrophil migration. Dose-dependent GI toxicity (diarrhea). Reduce dose in CKD and strong CYP3A4 inhibitors.",
      "prescriber": "Rheumatology/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 acute treatment"
    },
    {
      "name": "Naproxen 500mg BID OR indomethacin 50mg TID \u2014 if colchicine fails",
      "sig": "NSAIDs as alternative for acute gout if no renal impairment or GI contraindication. Indomethacin is traditional but all NSAIDs equally effective.",
      "prescriber": "Rheumatology/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Alternative PRN"
    },
    {
      "name": "Allopurinol \u2014 escalate to 300mg daily, do NOT start/stop during flare",
      "sig": "Do NOT start or stop allopurinol during an acute flare \u2014 changes in uric acid level can prolong flare. Continue if already on it. Escalate dose after flare resolves. Target uric acid <6.0 (or <5.0 for tophaceous gout).",
      "prescriber": "Rheumatology",
      "start": "2024",
      "refills": 3,
      "status": "Continue at current dose \u2014 escalate after flare"
    }
  ],
  "allergies": [
    {
      "allergen": "NSAIDs (Indomethacin)",
      "type": "Drug",
      "reaction": "GI bleeding \u2014 melena",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "10/30/2024",
      "bp": "142/90",
      "hr": 76,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "198 lbs",
      "ht": "5'8\"",
      "bmi": 30.1,
      "setting": "PCP Office"
    },
    {
      "date": "04/18/2024",
      "bp": "138/86",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "195 lbs",
      "ht": "5'8\"",
      "bmi": 29.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/30/2024",
      "type": "Primary Care",
      "provider": "Dr. Maria Santos, MD",
      "cc": "Follow-up: gout, HTN, CKD",
      "hpi": "52-year-old male for follow-up. Reports he stopped allopurinol 4 months ago \u2014 'felt fine, didn't think I needed it.' Has had 2 gout flares since stopping (right 1st MTP in July, left ankle in September). Used colchicine at home \u2014 partial relief. Reports recent dietary indiscretions: increased beer consumption and seafood at family gatherings. HTN borderline on HCTZ. CKD 2 stable. Discussed HCTZ contributing to hyperuricemia \u2014 patient again declined switching diuretic.",
      "exam": "General: Obese male, NAD. CV: RRR. Extremities: No acute joint swelling or erythema today. Right 1st MTP: mild bony enlargement (chronic). Left ankle: full ROM, no effusion. Feet: No tophi. Kidneys: Non-tender.",
      "assessment": "1. Gout \u2014 recurrent, poorly controlled; non-adherent to allopurinol\n2. Hyperuricemia \u2014 worsened off allopurinol; HCTZ contributing\n3. HTN \u2014 borderline controlled\n4. CKD 2 \u2014 stable\n5. Hyperlipidemia \u2014 stable",
      "plan": "1. RESTART allopurinol 100mg daily \u2014 MUST TAKE DAILY even without flares; this is prevention\n2. Colchicine 0.6mg daily x 6 months for flare prophylaxis during allopurinol titration\n3. Target uric acid <6; recheck in 4 weeks; titrate allopurinol up if needed\n4. Dietary counseling: limit beer (especially), organ meats, shellfish, high-fructose drinks\n5. Strongly recommend switching HCTZ to losartan (uricosuric effect) \u2014 patient to consider\n6. Labs: uric acid, BMP, CBC\n7. RTC 4 weeks"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Gout Assessment",
      "results": [
        {
          "test": "Serum uric acid",
          "value": "9.8",
          "unit": "mg/dL",
          "ref": "Target <6.0 (normal <7.0 in men)",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.3",
          "unit": "mg/dL",
          "ref": "0.7-1.3 (borderline \u2014 adjust allopurinol)",
          "flag": ""
        },
        {
          "test": "Synovial fluid \u2014 MSU crystals",
          "value": "Negatively birefringent needle-shaped crystals \u2014 monosodium urate confirmed",
          "unit": "",
          "ref": "No crystals",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "12.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11 (mild inflammation)",
          "flag": "H"
        },
        {
          "test": "ESR",
          "value": "68",
          "unit": "mm/hr",
          "ref": "<20",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Right Foot X-Ray",
      "findings": "Soft tissue swelling first MTP. Punched-out erosions with overhanging edges at first MTP \u2014 chronic gouty erosions. Tophi calcification right olecranon.",
      "impression": "Gout with chronic erosive changes. Tophaceous gout."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-262",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-688",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "04/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-128",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Gout, HTN, alive at 78",
    "Father: T2DM, CKD (dialysis), deceased at 72",
    "Brother: Gout, alive at 49",
    "No family history of rheumatoid arthritis or autoimmune disease"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Restaurant owner \u2014 Vietnamese cuisine"
    ],
    [
      "Marital",
      "Married, 2 children (ages 18, 15)"
    ],
    [
      "Tobacco",
      "Former smoker \u2014 10 pack-years; quit 2018"
    ],
    [
      "Alcohol",
      "Beer 3-5/week; increased at family gatherings; counseled on gout risk"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking; on feet at restaurant 10+ hours/day"
    ],
    [
      "Housing",
      "Single-family home with wife and children"
    ],
    [
      "Safety",
      "No firearms; seatbelt"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "gout-flare",
    "diagnosis": "Acute Gouty Arthritis \u2014 Right First MTP (Podagra), Non-Adherent to Allopurinol",
    "acuity": 4,
    "presentation": "Musculoskeletal Emergency",
    "category": "rheumatologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Mr. Nguyen appears frustrated and somewhat embarrassed about his medication non-adherence, frequently grimacing when he moves his foot. He's forthcoming about his symptoms but defensive when discussing why he stopped his medications, showing moderate distress from pain but trying to downplay the severity.",
    "interviewQuestions": [
      "When did this current episode of toe pain begin?",
      "Can you describe the quality of the pain in your toe?",
      "On a scale of 1-10, how severe is the pain right now?",
      "What makes the pain worse or better?",
      "Have you had similar episodes before?",
      "When did you last take your gout medications?",
      "What prompted you to stop taking your allopurinol?",
      "Have you noticed any swelling or redness in the toe?",
      "Any fever, chills, or feeling unwell?",
      "What have you been eating and drinking lately?",
      "Have you tried anything to relieve the pain?",
      "Any other joints affected besides your big toe?",
      "How is this affecting your ability to work at your restaurant?"
    ],
    "patientResponses": {
      "default": "I'm sorry, can you ask that differently? I'm having trouble concentrating because of this pain in my toe.",
      "onset": "The pain started suddenly yesterday evening around 8 PM while I was working at the restaurant. I went to bed fine, but woke up at 3 AM with excruciating pain in my right big toe.",
      "character": "It's like someone is crushing my toe in a vice and stabbing it with a hot knife at the same time. The pain is throbbing and constant, and even the bedsheet touching it is unbearable.",
      "location": "It's right at the base of my big toe on my right foot, where it connects to my foot. The pain doesn't really go anywhere else, it's just concentrated right there.",
      "severity": "Right now it's about an 8 out of 10. I can barely walk, and I had to call in sick to work today, which I never do. Even sitting here hurts.",
      "aggravating": "Any movement makes it worse, even the slightest touch. Walking is almost impossible. Wearing shoes is out of the question.",
      "relieving": "I tried ice at first but that made it worse. Heat doesn't help either. I took some of my wife's Tylenol but it barely touched the pain. Nothing really helps much.",
      "associated": "The toe is really swollen and red, almost purple. I don't have fever or chills, but the area feels hot to touch.",
      "denies": "No fever, no other joints hurt right now, no rash anywhere else, no back pain, no numbness or tingling in my feet.",
      "history": "Yes, I've had this exact same thing happen before, probably six or seven times over the past 10 years. Usually in this same toe, but twice it was in my ankle. This feels just like those times.",
      "medications": "Hydrochlorothiazide 25mg daily; Atorvastatin 20mg QHS; Allopurinol 100mg daily; Colchicine 0.6mg PRN (flare)",
      "allergies": "NSAIDs (Indomethacin)",
      "family": "Both my mother and younger brother have gout. My mother still gets flares occasionally even though she's 78. My brother started getting attacks when he was in his early 40s.",
      "social": "I own a Vietnamese restaurant with my wife. We work long hours, and I admit I've been drinking more beer lately, especially during our busy season. I used to smoke but quit in 2018. I don't use any drugs."
    },
    "examManeuvers": [
      "Inspection of right first MTP joint",
      "Palpation of right first MTP joint",
      "Range of motion testing of right first MTP joint",
      "Assessment of warmth over right first MTP joint",
      "Examination of other joints for involvement",
      "Palpation for tophi on ears and joints",
      "Assessment of pedal pulses",
      "Lymph node examination of inguinal region"
    ],
    "examFindings": {
      "Inspection of right first MTP joint": "Marked erythema, swelling, and shiny appearance of skin overlying the right first MTP joint with mild purple discoloration",
      "Palpation of right first MTP joint": "Exquisite tenderness to light touch, patient withdraws foot immediately, firm swelling palpable around joint",
      "Range of motion testing of right first MTP joint": "Severely limited active and passive range of motion due to pain, patient unable to dorsiflex or plantarflex toe",
      "Assessment of warmth over right first MTP joint": "Significantly increased warmth over the joint compared to contralateral side and surrounding tissue",
      "Examination of other joints for involvement": "No other joints show signs of acute inflammation, left first MTP joint normal",
      "Palpation for tophi on ears and joints": "Small, firm nodules palpable on bilateral ear helices consistent with tophi, no palpable tophi on other joints",
      "Assessment of pedal pulses": "Dorsalis pedis and posterior tibial pulses 2+ bilaterally, no signs of vascular compromise",
      "Lymph node examination of inguinal region": "No palpable lymphadenopathy in bilateral inguinal regions"
    },
    "ddxTargets": [
      "Acute gout \u2014 podagra (correct)",
      "Pseudogout (CPPD) \u2014 calcium pyrophosphate crystals (positively birefringent); knee more common; chondrocalcinosis",
      "Septic arthritis \u2014 WBC >50,000; Gram stain/culture; no crystals; treat as septic until excluded",
      "Reactive arthritis \u2014 post-infection; asymmetric oligoarthritis; Reiter syndrome triad",
      "Cellulitis \u2014 skin infection; no joint involvement; no crystals"
    ],
    "biasFlags": {
      "anchoring": "The classic presentation of podagra in a patient with known gout history may cause immediate anchoring on gout without considering infectious causes that require urgent treatment",
      "prematureClosure": "The obvious gout history and typical presentation may lead to premature closure without adequately ruling out septic arthritis, especially given his diabetes risk factors",
      "availabilityBias": "Recent cases of gout or common exposure to gout patients may make this diagnosis seem more likely than serious infectious complications"
    },
    "coachPrompts": {
      "phase2": "You're thinking about gout given his history, which makes sense. But before you interview him, what other serious conditions can present with acute monoarticular arthritis that you absolutely cannot miss? How will you differentiate between crystal arthropathy and infection during your history?",
      "phase5": "The clinical picture is quite suggestive of gout, especially with his medication non-adherence. However, what additional testing might you consider to definitively confirm your diagnosis and rule out your must-not-miss differentials? How does his CKD affect your treatment options?",
      "finalDebrief": "This case highlights the importance of medication adherence in gout management. Notice how the classic podagra presentation with known gout history made the diagnosis likely, but you still needed to systematically exclude septic arthritis. How did the presence of tophi and his non-adherence history strengthen your diagnostic confidence? What does this teach you about the challenges of chronic disease management?",
      "final": "Diagnosis: acute gouty arthritis (podagra), tophaceous gout. Key learning: (1) Acute gout treatment: colchicine 1.2mg then 0.6mg 1h later (START WITHIN 24h \u2014 dramatically more effective early), NSAIDs, or short course steroids. All three are equally effective if started early. Low-dose colchicine (as above) has same efficacy as high-dose with fewer GI side effects. (2) Crystal identification on arthrocentesis: MSU (gout) = negatively birefringent, needle-shaped crystals (yellow when parallel to polarizer axis). CPP (pseudogout) = positively birefringent, rhomboid-shaped crystals (blue when parallel to polarizer). (3) Do NOT start/stop allopurinol during acute flare: mobilization of urate from deposits causes paradoxical flare. If patient already taking allopurinol \u2192 continue. If starting ULT \u2192 wait until flare completely resolved (usually 2-4 weeks). (4) Urate-lowering therapy targets: most patients = uric acid <6.0 mg/dL. Tophaceous gout (as here) = <5.0 mg/dL. Allopurinol dose: start 100mg, increase monthly by 100mg to target. Max 800mg. Adjust for CKD. (5) Foods to avoid: red meat, organ meats, shellfish, high-fructose corn syrup, alcohol (especially beer). Increase water, dairy, coffee, cherries (anti-inflammatory). Weight loss reduces uric acid."
    }
  }
};
