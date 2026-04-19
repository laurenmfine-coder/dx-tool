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
            { "test": "Neisseria gonorrhoeae NAAT (Cervical)", "value": "Not Detected", "unit": "—", "range": "Not Detected", "flag": "" },
            { "test": "Chlamydia trachomatis NAAT (Cervical)", "value": "Not Detected", "unit": "—", "range": "Not Detected", "flag": "" },
            { "test": "RPR (Syphilis Screen)", "value": "Non-reactive", "unit": "—", "range": "Non-reactive", "flag": "" },
            { "test": "HIV-1/2 Ag/Ab Combo", "value": "Non-reactive", "unit": "—", "range": "Non-reactive", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.2", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "39.4", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "240", "unit": "x10³/µL", "range": "150-400", "flag": "" }
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
    ["Occupation", "Retail sales associate"],
    ["Marital", "Single; sexually active with new partner (3 months)"],
    ["Tobacco", "Denies"],
    ["Alcohol", "Social, 2-3 drinks on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Yoga 3x/week; walking"],
    ["Housing", "Apartment with roommate"],
    ["Safety", "Denies IPV; no firearms"],
    ["Advance Directive", "None on file"]
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
    "patientPersona": "Jasmine Williams is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
        "When did your symptoms start and how?",
        "Describe the main symptom \u2014 location, character, severity.",
        "What makes it worse? What makes it better?",
        "Any other symptoms you've noticed?",
        "Any prior similar episodes?",
        "Tell me about your medical history.",
        "What medications are you currently taking?",
        "Any medication allergies?",
        "Relevant family history?",
        "Tell me about your lifestyle."
    ],
    "patientResponses": {
        "default": "He pauses. 'Can you clarify what you mean?'",
        "onset": "'Gradually \u2014 over the past several days.'",
        "character": "'The musculoskeletal emergency has been significant and affecting my ability to function.'",
        "location": "'The main problem is in the expected area for my condition.'",
        "severity": "'Six or seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
        "associated": "'Some associated symptoms consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.'",
        "denies": "'No fever, chills, or unexplained weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Sertraline 50mg daily; Levonorgestrel IUD (Mirena) \u2014 in situ.'",
        "allergies": "'My allergies: NKDA.'",
        "family": "Mother: HTN, T2DM, alive at 52  Father: Unknown \u2014 not involved  Sister: Healthy, age 22",
        "social": "Occupation: Retail sales associate  Marital: Single; sexually active with new partner (3 months)  Tobacco: Denies  Alcohol: Social, 2-3 drinks on weekends  Drugs: Denies"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Skin/lymph nodes",
        "Cardiovascular",
        "Pulmonary",
        "Abdominal",
        "Source-specific",
        "Neurological screen"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.",
        "Vital signs": "Finding consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.",
        "Skin/lymph nodes": "Finding consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.",
        "Cardiovascular": "Finding consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.",
        "Pulmonary": "Finding consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.",
        "Abdominal": "Finding consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.",
        "Source-specific": "Finding consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.",
        "Neurological screen": "Finding consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee."
    },
    "ddxTargets": [
        "Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Jasmine Williams: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee (Neisseria gonorrhoeae). How did your reasoning evolve?"
    }
}
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['gonococcal-arthritis'] = {
  id: 'gonococcal-arthritis', name: 'Jasmine Williams',
  chiefComplaint: 'Disseminated Gonococcal Infection — Ceftriaxone and Partner Treatment',
  diagnosis: 'Disseminated Gonococcal Infection — Ceftriaxone and Partner Treatment',
  orders: {
    correct: [{ id: 'ceftriaxone-gca', name: 'Ceftriaxone 1g IV/IM daily — treat empirically for DGI', rationale: 'Empirical ceftriaxone for suspected DGI before culture results. Continue 24-48h after clinical improvement, then step down to oral cefixime (400mg BID) or azithromycin (1g × 1) to complete 7-day course. ALWAYS co-treat for Chlamydia (azithromycin 1g or doxycycline 7 days) — co-infection in up to 40%.' },{ id: 'partner-notification', name: 'Partner notification and treatment — STI contact tracing', rationale: 'All sexual partners within 60 days must be notified, tested, and treated. Gonorrhea is a reportable STI — notify local health department. Expedited Partner Therapy (EPT): prescribe treatment for partner without prior examination where legally permitted.' }],
    incorrect: [{ id: 'arthroscopy', name: 'Arthroscopic washout — septic joint requires drainage', rationale: 'DGI with septic arthritis rarely requires arthroscopic drainage — unlike non-gonococcal septic arthritis (S. aureus). DGI responds well to antibiotics alone. True gonococcal septic arthritis (large effusion, WBC >50k in joint fluid, culture positive): consider drainage if not responding to antibiotics at 24-48h.' },{ id: 'nsaids-only', name: 'NSAIDs — joint inflammation treated with anti-inflammatories', rationale: 'DGI is a BACTERIAL infection — it requires antibiotics, not just anti-inflammatory treatment. NSAIDs may be used adjunctively for pain, but the primary treatment is bactericidal antibiotics. DGI is one of the most treatable causes of acute bacterial arthritis.' }]
  },
  teachingPoints: {
    keyLearning: ['DGI (disseminated gonococcal infection): two clinical syndromes. (1) Triad: migratory polyarthralgia → tenosynovitis (tendons — not joints) + dermatitis (pustular skin lesions) + bacteremia. Positive blood cultures. (2) Septic arthritis: large joint monoarthritis (knee most common), purulent effusion, positive synovial fluid culture. Most common cause of acute bacterial arthritis in sexually active young adults.','N. gonorrhoeae arthritis features: young sexually active adult, migratory joint pain (progresses from one joint to another), tenosynovitis (tendon sheath inflammation — pathognomonic for DGI), skin lesions (few, pustular, on distal extremities), recent STI exposure or vaginal/urethral symptoms.','Culture tips: highest yield in DGI is from urogenital sites (70-90%), not blood (<50%) or joint fluid (<25%). Culture ALL sites: urethra/cervix, rectum, pharynx. Thayer-Martin medium (chocolate agar + antibiotics). Transport immediately — N. gonorrhoeae dies rapidly.'],
    boardPearls: ['Gonococcal resistance: resistance to fluoroquinolones is now widespread (do not use ciprofloxacin empirically). Emerging ceftriaxone resistance — monitor local resistance patterns. Ceftriaxone + azithromycin is current standard.','Neisseria gonorrhoeae in LGBTQ patients: pharyngeal gonorrhea is the most common site and most difficult to treat. Pharyngeal cultures needed in patients with oral sex history. Anorectal gonorrhea often asymptomatic.','Septic arthritis differential in young adults: DGI (most common), reactive arthritis (Reiter), Lyme arthritis (knee, migratory, endemic areas), rheumatoid arthritis (bilateral symmetric), crystalline arthropathy (gout, pseudogout).']
  },
  "guided": {
    "supported": true,
    "patientPersona": "Jasmine Williams is cooperative and provides a clear history. He is appropriately concerned about their symptoms.",
    "interviewQuestions": [
        "When did your symptoms start?",
        "Describe the main symptom.",
        "How severe is it?",
        "What makes it worse or better?",
        "Any other symptoms?",
        "Any prior episodes?",
        "What medications do you take?",
        "Any allergies?"
    ],
    "patientResponses": {
        "default": "He thinks for a moment. 'Can you clarify what you mean?'",
        "onset": "'My symptoms started recently, getting worse over the past day or two.'",
        "character": "'It feels like disseminated gonococcal infection with septic arthritis \u2014 right knee \u2014 fairly significant.'",
        "location": "'The problem is primarily in the affected area.'",
        "severity": "'About a seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat.'",
        "associated": "'I have some associated symptoms consistent with my condition.'",
        "denies": "'No fever, chills, or weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Sertraline 50mg daily; Levonorgestrel IUD (Mirena) \u2014 in situ.'",
        "allergies": "'My allergies: NKDA.'",
        "family": "'No significant family history relevant to this presentation.'",
        "social": "'I am a working adult. Non-smoker. Social drinker.'"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted examination"
    ],
    "examFindings": {
        "General appearance": "Patient appears consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.",
        "Vital signs": "Vital signs appropriate to the acuity of presentation.",
        "Cardiovascular auscultation": "Cardiovascular exam as appropriate.",
        "Pulmonary auscultation": "Pulmonary exam as appropriate.",
        "Abdominal examination": "Abdomen as appropriate.",
        "Extremity assessment": "Extremities as appropriate.",
        "Skin examination": "Skin as appropriate.",
        "Targeted examination": "Targeted findings consistent with Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee."
    },
    "ddxTargets": [
        "Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee (correct)",
        "Alternative diagnosis 1",
        "Alternative diagnosis 2",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee.",
        "prematureClosure": "Complete your workup even after forming a hypothesis.",
        "availabilityBias": "Apply systematic reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Jasmine Williams \u2014 what are your top 3 diagnoses from chart review?",
        "phase5": "How has your differential changed after history and exam?",
        "finalDebrief": "The diagnosis is Disseminated Gonococcal Infection with Septic Arthritis \u2014 Right Knee (Neisseria gonorrhoeae). How did your reasoning evolve?"
    }
}
};
