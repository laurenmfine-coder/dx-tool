// Virtual EMR Case: Gonococcal Arthritis
// Variant: gonococcal-arthritis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Jasmine Williams",
    "patientHPI": "I'm here for my yearly checkup and to get tested - I've been with a new partner for a few months and we haven't always been careful, but I feel totally fine with no burning, discharge, or anything unusual down there.",
    "dob": "11/08/1999",
    "age": 25,
    "sex": "Female",
    "mrn": "RDX-2025-69215",
    "pronouns": "She/Her",
    "insurance": "United Healthcare Bronze",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Walgreens — 3800 Hollywood Blvd, Hollywood, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "2985 Mulberry St, Albuquerque, NM 87110",
    "phone": "(954) 555-4328",
    "email": "j.williams99@email.com",
    "emergencyContact": {
      "name": "Denise Williams (Mother)",
      "phone": "(954) 555-4345"
    }
  },
  "problems": [
    {
      "problem": "Chlamydia — Treated",
      "icd": "A74.9",
      "onset": "2023",
      "status": "Resolved",
      "notes": "Treated with azithromycin 1g single dose; partner treated; test of cure negative"
    },
    {
      "problem": "Anxiety Disorder — Generalized",
      "icd": "F41.1",
      "onset": "2020",
      "status": "Active",
      "notes": "On sertraline; in counseling"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 50mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Chang",
      "start": "06/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Levonorgestrel IUD (Mirena) — in situ",
      "sig": "Intrauterine device placed; effective through 2030",
      "prescriber": "Dr. Chang",
      "start": "03/2023",
      "refills": 0,
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
      "date": "09/12/2024",
      "bp": "112/70",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "140 lbs",
      "ht": "5'6\"",
      "bmi": 22.6,
      "setting": "PCP Office"
    },
    {
      "date": "03/20/2024",
      "bp": "110/68",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'6\"",
      "bmi": 22.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Lisa Chang, MD",
      "cc": "Annual wellness; STI screening",
      "hpi": "25-year-old female for annual wellness exam and STI screening. Reports new sexual partner in past 3 months — inconsistent condom use. No dysuria, vaginal discharge, pelvic pain, or abnormal bleeding. Mirena IUD in place and functioning well. GAD stable on sertraline. Prior history of chlamydia (2023, treated). Requests full STI panel.",
      "exam": "General: NAD, healthy-appearing. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT. GU: External genitalia normal. IUD strings visualized. No cervical motion tenderness. No adnexal tenderness. No discharge. Skin: No rashes, lesions, or joint swelling. MSK: Full ROM all joints.",
      "assessment": "1. Annual wellness — healthy\n2. STI screening — ordered (GC/CT NAAT, RPR, HIV, HBV/HCV)\n3. GAD — stable on sertraline\n4. Mirena IUD — in place",
      "plan": "1. STI panel — results pending\n2. Counseled on consistent condom use for STI prevention (IUD provides contraception only)\n3. Continue sertraline\n4. Pap smear — up to date (done 2023)\n5. RTC PRN or if results abnormal; called with results"
    },
    {
      "id": "V002",
      "date": "09/20/2024",
      "type": "Primary Care — Phone Follow-up",
      "provider": "Dr. Lisa Chang, MD",
      "cc": "STI results review",
      "hpi": "Phone call to review STI screening results from 09/12/2024. All results negative: GC/CT NAAT negative, RPR non-reactive, HIV-1/2 Ag/Ab non-reactive, HBsAg negative, HCV Ab negative. Patient informed; counseled to rescreen in 3 months given ongoing risk factors and new partner.",
      "exam": "N/A — phone visit",
      "assessment": "1. STI screening — all negative",
      "plan": "1. Results shared with patient\n2. Repeat screening in 3 months recommended\n3. Consistent condom use reinforced\n4. RTC PRN"
    }
  ],
  "labs": [
    {
      "date": "09/12/2024",
      "time": "10:15",
      "orderedBy": "Dr. Lisa Chang, MD",
      "collected": "09/12/2024 09:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-091215",
      "status": "Final",
      "specimenType": "Serum, Cervical Swab, Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "STI SCREENING PANEL",
          "results": [
            {
              "test": "Neisseria gonorrhoeae NAAT (Cervical)",
              "value": "Not Detected",
              "unit": "—",
              "range": "Not Detected",
              "flag": ""
            },
            {
              "test": "Chlamydia trachomatis NAAT (Cervical)",
              "value": "Not Detected",
              "unit": "—",
              "range": "Not Detected",
              "flag": ""
            },
            {
              "test": "RPR (Syphilis Screen)",
              "value": "Non-reactive",
              "unit": "—",
              "range": "Non-reactive",
              "flag": ""
            },
            {
              "test": "HIV-1/2 Ag/Ab Combo",
              "value": "Non-reactive",
              "unit": "—",
              "range": "Non-reactive",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "6.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "39.4",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "240",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-254",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-676",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2015",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Meningococcal ACWY (Menactra)",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: HTN, T2DM, alive at 52",
    "Father: Unknown — not involved",
    "Sister: Healthy, age 22",
    "No family history of autoimmune or rheumatologic disease"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retail sales associate"
    ],
    [
      "Marital",
      "Single; sexually active with new partner (3 months)"
    ],
    [
      "Tobacco",
      "Denies"
    ],
    [
      "Alcohol",
      "Social, 2-3 drinks on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Yoga 3x/week; walking"
    ],
    [
      "Housing",
      "Apartment with roommate"
    ],
    [
      "Safety",
      "Denies IPV; no firearms"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "gonococcal-arthritis",
    "diagnosis": "Disseminated Gonococcal Infection with Septic Arthritis — Right Knee (Neisseria gonorrhoeae)",
    "acuity": 3,
    "presentation": "Musculoskeletal Emergency",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Jasmine appears calm and matter-of-fact, presenting for what she believes is a routine sexual health screening. She is forthcoming about her sexual history but seems surprised by any focus on joint symptoms, as she came in feeling well and expecting a simple STI panel.",
    "interviewQuestions": [
      "Can you tell me more about what brought you in today?",
      "When did you last have unprotected sexual contact?",
      "Have you had any joint pain, stiffness, or swelling recently?",
      "Any fevers, chills, or feeling unwell in the past few weeks?",
      "Have you noticed any skin rashes or unusual spots anywhere on your body?",
      "Any vaginal discharge, bleeding, or pelvic pain?",
      "Have you had any burning with urination or urinary symptoms?",
      "Any nausea, vomiting, or abdominal pain?",
      "When was your last STI screening and what were the results?",
      "Has your partner been tested recently or had any symptoms?",
      "Any recent travel or new exposures?",
      "Have you been taking any medications or had any recent illnesses?",
      "Any family history of autoimmune conditions or joint problems?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that - I really just came in for my routine screening since I have a new partner.",
      "onset": "Well, now that you mention it, my right knee has been a little achy for maybe the past week or so, but I thought it was from working retail and being on my feet all day.",
      "character": "It's kind of a deep, throbbing ache in my knee, and it feels warm and a bit swollen when I touch it.",
      "location": "It's mainly in my right knee, deep inside the joint. It doesn't really go anywhere else.",
      "severity": "Maybe a 4 out of 10? It's noticeable but not terrible. It's starting to make it harder to walk around at work though.",
      "aggravating": "It definitely hurts more when I try to bend it fully or when I've been standing for a long time at work.",
      "relieving": "Sitting down helps, and I took some ibuprofen yesterday which helped a little bit.",
      "associated": "Actually, I did have a few spots on my hands and arms last week that looked like little red bumps, but they went away. And I've been more tired than usual.",
      "denies": "No burning when I pee, no unusual discharge, no pelvic pain, no fever that I noticed.",
      "history": "No, I've never had joint problems before. I got treated for chlamydia about two years ago but that's it.",
      "medications": "Sertraline 50mg daily; Levonorgestrel IUD (Mirena) — in situ",
      "allergies": "NKDA",
      "family": "My mom has diabetes and high blood pressure, but no one in my family has joint problems or anything like that.",
      "social": "I work retail, so I'm on my feet a lot. I'm single but seeing someone new for about three months. I don't smoke, drink socially on weekends, no drugs."
    },
    "examManeuvers": [
      "Right knee inspection",
      "Right knee palpation",
      "Right knee range of motion",
      "Right knee joint effusion assessment",
      "Skin examination",
      "Pelvic examination",
      "Cervical examination and swab",
      "Tenosynovitis assessment (hands/wrists)",
      "Lymph node examination",
      "Temperature assessment"
    ],
    "examFindings": {
      "Right knee inspection": "Moderate swelling and erythema of the right knee with visible effusion",
      "Right knee palpation": "Warmth, tenderness, and boggy swelling consistent with joint effusion",
      "Right knee range of motion": "Limited flexion to 90 degrees due to pain and swelling, painful throughout range",
      "Right knee joint effusion assessment": "Positive ballottement test indicating significant joint effusion",
      "Skin examination": "Resolving papular rash on bilateral hands and forearms, some lesions with central necrosis",
      "Pelvic examination": "Normal external genitalia, no visible discharge or lesions",
      "Cervical examination and swab": "Cervix appears normal, minimal discharge, samples obtained for testing",
      "Tenosynovitis assessment (hands/wrists)": "Mild tenderness over flexor tendon sheaths of bilateral hands",
      "Lymph node examination": "No significant lymphadenopathy",
      "Temperature assessment": "Afebrile at 98.6°F"
    },
    "ddxTargets": [
      "Disseminated Gonococcal Infection with Septic Arthritis — Right Knee (Neisseria gonorrhoeae) (correct diagnosis)",
      "Reactive arthritis (Reiter's syndrome)",
      "Septic arthritis from other bacterial causes",
      "Endocarditis with septic emboli",
      "Acute rheumatic fever",
      "Crystalline arthropathy (gout/pseudogout)",
      "Traumatic arthritis from occupational stress"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'routine STI screening' request and missing the systemic manifestations of disseminated gonococcal infection, especially when patient downplays joint symptoms",
      "prematureClosure": "May stop at simple gonorrhea/chlamydia screening without recognizing the constellation of joint pain, rash, and tenosynovitis that suggests dissemination",
      "availabilityBias": "Young, sexually active female may trigger focus on common STIs rather than considering serious complications like disseminated gonococcal infection with septic arthritis"
    },
    "coachPrompts": {
      "phase2": "This patient came in requesting STI screening but mentioned some joint discomfort when pressed. What questions would help you determine if this is simple gonorrhea/chlamydia or something more systemic? Think about the classic triad of disseminated gonococcal infection.",
      "phase5": "You've found monoarticular arthritis of the knee, resolving skin lesions, and mild tenosynovitis in a sexually active patient. How do these findings fit together? What's the most likely unifying diagnosis, and what would be your next diagnostic steps?",
      "finalDebrief": "This case illustrates how disseminated gonococcal infection can present subtly, with patients seeking routine care while harboring serious complications. The classic triad includes arthritis, dermatitis, and tenosynovitis. What clues in the history and physical exam should have pointed you toward DGI rather than simple urogenital gonorrhea?"
    }
  }
};
