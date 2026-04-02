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
  }
};
