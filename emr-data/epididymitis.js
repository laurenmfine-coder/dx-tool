
window.EMR_DATA = {
  "patient": {
    "name": "Kevin Morales",
    "patientHPI": "I'm here for my yearly checkup and feeling fine overall. I've been seeing someone new for a few months and we don't always use protection, but I haven't noticed any problems or anything unusual down there.",
    "dob": "09/18/1995",
    "age": 29,
    "sex": "Male",
    "mrn": "RDX-2025-28574",
    "pronouns": "He/Him",
    "insurance": "United Healthcare EPO",
    "pcp": "Dr. Sandra Gutierrez, MD",
    "pharmacy": "Walgreens \u2014 2101 N University Dr, Coral Springs, FL",
    "language": "English, Spanish",
    "race": "Hispanic",
    "address": "2581 Ash St, Pittsburgh, PA 15210",
    "phone": "(954) 555-6371",
    "email": "k.morales95@email.com",
    "emergencyContact": {
      "name": "Elena Morales (Mother)",
      "phone": "(954) 555-6390"
    }
  },
  "problems": [
    {
      "problem": "Acute epididymitis \u2014 STI-related",
      "icd": "N45.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Marcus Davis, 24M \u2014 3-day progressive right scrotal pain and swelling, fever 38.1\u00b0C, urethral discharge. Positive Prehn sign (scrotal elevation relieves pain). Doppler ultrasound: increased right epididymal blood flow."
    },
    {
      "problem": "STI exposure \u2014 Chlamydia/Gonorrhea workup",
      "icd": "A74.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Sexually active, new partner last month. In men <35, STIs (Chlamydia trachomatis, Neisseria gonorrhoeae) are the most common cause of epididymitis. Partner notification required."
    },
    {
      "problem": "Testicular torsion exclusion \u2014 critical",
      "icd": "N45.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Testicular torsion presents similarly but requires immediate surgical detorsion. Positive Prehn sign (pain relief with elevation) suggests epididymitis. Doppler shows increased flow (epididymitis) vs absent flow (torsion). Torsion = absent flow = OR immediately."
    }
  ],
  "medications": [
    {
      "name": "Ceftriaxone 500mg IM x1 + doxycycline 100mg BID x 10 days",
      "sig": "CDC-recommended dual therapy for epididymitis likely due to STI (gonorrhea + chlamydia coverage). Ceftriaxone for gonorrhea (escalating resistance \u2014 dose increased to 500mg). Doxycycline for chlamydia.",
      "prescriber": "Emergency/Urology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "NSAIDs \u2014 scrotal support and analgesia",
      "sig": "Ibuprofen 600mg TID for pain and inflammation. Athletic supporter or snug underwear for scrotal elevation and support.",
      "prescriber": "Emergency",
      "start": "2024",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Partner notification \u2014 STI treatment",
      "sig": "Sexual partner(s) within 60 days require STI evaluation and treatment. Public health notification for gonorrhea.",
      "prescriber": "Public Health",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 partner referral"
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
      "date": "09/20/2024",
      "bp": "120/76",
      "hr": 70,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "175 lbs",
      "ht": "5'9\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    },
    {
      "date": "03/15/2024",
      "bp": "118/74",
      "hr": 68,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "172 lbs",
      "ht": "5'9\"",
      "bmi": 25.4,
      "setting": "PCP Office"
    },
    {
      "date": "09/12/2023",
      "bp": "116/72",
      "hr": 72,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "170 lbs",
      "ht": "5'9\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Sandra Gutierrez, MD",
      "cc": "Annual wellness visit",
      "hpi": "29-year-old male presenting for routine annual exam. No active complaints. Sexually active with new partner; inconsistent condom use. Denies dysuria, discharge, or genital lesions. Low back pain from 2023 resolved after physical therapy course. Reports good general health.",
      "exam": "General: Well-appearing male in NAD. HEENT: PERRL, EOMI. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT/ND. GU: Deferred per patient preference. MSK: Full ROM lumbar spine, no tenderness. Neuro: A&O x3.",
      "assessment": "1. Annual wellness \u2014 healthy young male\n2. STI risk \u2014 counseled on safe sex practices\n3. Prior chlamydia \u2014 resolved",
      "plan": "1. STI screening panel ordered (per patient's request)\n2. Safe sex counseling; condom provision\n3. RTC 1 year or PRN"
    },
    {
      "id": "V002",
      "date": "06/05/2022",
      "type": "Urgent Care",
      "provider": "Dr. Michelle Park, MD",
      "cc": "Urethral discharge x 3 days",
      "hpi": "29-year-old sexually active male presenting with clear-to-whitish urethral discharge and mild dysuria x 3 days. New sexual partner 2 weeks ago; no condom used. Denies testicular pain, fever, or rash.",
      "exam": "General: NAD. GU: Mucopurulent urethral discharge expressed. No inguinal lymphadenopathy. Testes nontender bilaterally, no scrotal swelling.",
      "assessment": "1. Urethritis \u2014 presumptive chlamydia/gonorrhea",
      "plan": "1. NAAT for chlamydia/gonorrhea \u2014 sent\n2. Ceftriaxone 500mg IM x 1 + Azithromycin 1g PO x 1 (empiric)\n3. Abstain from sex x 7 days; treat partner(s)\n4. Test of cure in 4 weeks"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Epididymitis Workup",
      "results": [
        {
          "test": "NAAT (urine) \u2014 GC/Chlamydia",
          "value": "Positive \u2014 Chlamydia trachomatis",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Prehn sign",
          "value": "Positive \u2014 pain improves with elevation",
          "unit": "",
          "ref": "Positive = epididymitis (not torsion)",
          "flag": ""
        },
        {
          "test": "Scrotal Doppler \u2014 right epididymis",
          "value": "Increased blood flow right epididymis",
          "unit": "",
          "ref": "Symmetric flow = normal",
          "flag": "H"
        },
        {
          "test": "Urinalysis",
          "value": "WBC 18, bacteria present",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "Temperature",
          "value": "38.1",
          "unit": "\u00b0C",
          "ref": "<38",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Scrotal Doppler Ultrasound",
      "findings": "Enlarged right epididymis with increased color flow on Doppler. Right testis: normal size, normal echogenicity, normal blood flow. No abscess. No hydrocele.",
      "impression": "Acute epididymitis. Testicular torsion excluded (normal testicular blood flow). No abscess."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/02/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-271",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/02/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-848",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "HPV (Gardasil 9) \u2014 series complete",
      "date": "2013",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Merck"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: HTN, hyperlipidemia, alive at 58",
    "Mother: T2DM, alive at 55",
    "Brother: No significant medical history, age 26",
    "Maternal grandmother: Breast cancer at age 62, alive"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Personal trainer"
    ],
    [
      "Marital",
      "Single, sexually active"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social \u2014 4-6 drinks/week"
    ],
    [
      "Drugs",
      "Occasional marijuana"
    ],
    [
      "Exercise",
      "Daily \u2014 weight training and cardio"
    ],
    [
      "Housing",
      "Apartment with roommate"
    ],
    [
      "Safety",
      "Denies IPV; wears seatbelt"
    ],
    [
      "Advance Directive",
      "None \u2014 not discussed"
    ]
  ],
  "meta": {
    "caseId": "epididymitis",
    "diagnosis": "Acute Epididymitis \u2014 Sexually Transmitted (Chlamydia/Gonorrhea)",
    "acuity": 3,
    "presentation": "Urologic Emergency",
    "category": "urologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Kevin appears somewhat embarrassed and hesitant to discuss intimate details, particularly about his sexual history and symptoms. He maintains a calm demeanor but shows mild discomfort when discussing genital pain, occasionally shifting in his chair and speaking in a lower tone when addressing sensitive topics.",
    "interviewQuestions": [
      "Can you describe the pain you're experiencing in more detail?",
      "When did this pain first start?",
      "Where exactly is the pain located?",
      "On a scale of 1-10, how severe is the pain?",
      "What makes the pain worse or better?",
      "Have you noticed any swelling in the area?",
      "Do you have any burning with urination or urethral discharge?",
      "Have you had any fever, chills, or nausea?",
      "When was your last sexual encounter and do you use protection consistently?",
      "Have you or your partner been tested for STIs recently?",
      "Have you had any similar episodes before?",
      "Are you taking any medications currently?",
      "Do you have any known allergies?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "The pain started about 2 days ago, kind of gradually. It wasn't terrible at first but it's gotten worse since yesterday.",
      "character": "It's a deep, aching pain that sometimes feels like a throbbing. It's pretty constant now.",
      "location": "It's mainly on the left side of my scrotum, kind of behind and below my left testicle. Sometimes it feels like it goes up toward my groin.",
      "severity": "Right now it's about a 6 out of 10. Walking makes it worse, so does lifting weights. I had to skip my leg workout yesterday.",
      "aggravating": "Walking, especially going up stairs, makes it much worse. Any kind of jarring movement. Even coughing hurts.",
      "relieving": "Sitting still helps some. I tried ibuprofen yesterday and that took the edge off a little bit.",
      "associated": "I think there might be some swelling on that side. No fever that I've noticed. Urination seems normal, no burning or anything weird.",
      "denies": "No discharge from my penis, no blood in my urine, no nausea or vomiting. No back pain beyond my usual stuff.",
      "history": "No, I've never had anything like this before. Never had any problems down there.",
      "medications": "Loratadine 10mg daily",
      "allergies": "NKDA",
      "family": "Nothing that would be related to this. My dad has blood pressure issues and my mom has diabetes, but nothing like this runs in the family.",
      "social": "I'm a personal trainer so I'm pretty active. I'm single, seeing someone new for a few months. We don't always use condoms. I don't smoke, drink socially on weekends, and use marijuana occasionally."
    },
    "examManeuvers": [
      "Inspection of external genitalia",
      "Palpation of testes bilaterally",
      "Palpation of epididymis bilaterally",
      "Assessment of cremasteric reflex",
      "Evaluation for inguinal lymphadenopathy",
      "Abdominal examination",
      "Assessment of Prehn's sign",
      "Evaluation for testicular masses or nodules",
      "Assessment of scrotal skin and swelling",
      "Urethral meatus inspection"
    ],
    "examFindings": {
      "Inspection of external genitalia": "Left hemiscrotum appears moderately swollen and erythematous compared to right side. No obvious lesions or discharge visible.",
      "Palpation of testes bilaterally": "Right testis normal size, smooth, non-tender. Left testis normal size and consistency but mildly tender to palpation.",
      "Palpation of epididymis bilaterally": "Right epididymis normal. Left epididymis markedly swollen, firm, and exquisitely tender, especially at the tail.",
      "Assessment of cremasteric reflex": "Present bilaterally, normal response",
      "Evaluation for inguinal lymphadenopathy": "No palpable inguinal lymphadenopathy bilaterally",
      "Abdominal examination": "Soft, non-tender, no masses or organomegaly",
      "Assessment of Prehn's sign": "Elevation of left hemiscrotum provides partial pain relief",
      "Evaluation for testicular masses or nodules": "No discrete masses palpable in either testis",
      "Assessment of scrotal skin and swelling": "Left scrotal skin mildly erythematous and warm to touch, moderate swelling confined to posterior aspect",
      "Urethral meatus inspection": "Normal appearing urethral meatus, no discharge or erythema"
    },
    "ddxTargets": [
      "Acute epididymitis \u2014 STI-related (correct)",
      "Testicular torsion \u2014 absent Doppler flow; negative Prehn sign; surgical emergency; bell-clapper deformity",
      "Orchitis alone \u2014 isolated testicular inflammation; epididymis spared; often mumps-related",
      "Inguinal hernia \u2014 bowel palpable; no fever; reducible; different exam",
      "Epididymo-orchitis \u2014 both structures involved; more severe; same treatment principle"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the patient's young age and sexual activity, immediately assuming STI-related epididymitis without considering other causes or conducting thorough examination",
      "prematureClosure": "After finding tender epididymis, students might stop examining and miss important features like normal cremasteric reflex and positive Prehn's sign that help differentiate from testicular torsion",
      "availabilityBias": "Recent exposure to testicular torsion cases might cause students to over-emphasize this diagnosis, or conversely, having seen many UTI cases might make them minimize the scrotal pathology"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, I see you're considering several causes of acute scrotal pain. What key historical features would help you distinguish between testicular torsion and epididymitis? What questions about the onset and character of pain would be most important here?",
      "phase5": "Now that you've completed your history and physical exam, let's think through what you found. The patient has a positive Prehn's sign and normal cremasteric reflex - how do these findings help narrow your differential? Given his sexual history and age, what would be your next steps in workup?",
      "finalDebrief": "This case nicely illustrates how acute epididymitis can present in a sexually active young male. Notice how the gradual onset, positive Prehn's sign, and preserved cremasteric reflex helped distinguish this from testicular torsion. His sexual history and previous chlamydia infection were key risk factors. What red flags would have made you more concerned about torsion and required emergent urology consultation?",
      "final": "Diagnosis: acute epididymitis, STI-related. Key learning: (1) Testicular torsion vs epididymitis clinical distinction: TORSION = sudden onset severe pain, nausea/vomiting, absent cremasteric reflex, high-riding testicle (bell-clapper), Prehn sign NEGATIVE (elevation doesn't help), Doppler ABSENT flow. EPIDIDYMITIS = gradual onset, fever, urethral discharge, Prehn sign POSITIVE, Doppler INCREASED flow. Any doubt \u2192 scrotal ultrasound immediately, and if still uncertain \u2192 OR. (2) Epididymitis by age: <35 years = STI (chlamydia, gonorrhea). >35 years = enteric organisms (E. coli, Klebsiella) from BPH, UTI, instrumentation. Treatment differs. (3) CDC dual therapy for STI epididymitis: ceftriaxone 500mg IM (gonorrhea) + doxycycline 100mg BID x 10 days (chlamydia). Increasing gonorrhea resistance has pushed ceftriaxone dose from 250mg to 500mg. (4) Complications without treatment: epididymo-orchitis, epididymal abscess, infarction, infertility. (5) Partner notification: notifiable STI \u2014 gonorrhea must be reported. All partners within 60 days require evaluation and treatment. Abstain from sex until both patient and partner complete treatment and symptoms resolve."
    }
  }
};
