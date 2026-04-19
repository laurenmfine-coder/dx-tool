// Virtual EMR Case: Brain Metastasis
// Variant: brain-metastasis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Patricia Lawson",
    "patientHPI": "I've been coming in regularly for my cancer treatments and generally feeling pretty good. I still have that cough from my lung condition, but it's nothing new. My appetite could be better, but my weight has stayed the same, and I'm not having any trouble breathing or pain anywhere.",
    "dob": "09/08/1962",
    "age": 62,
    "sex": "Female",
    "mrn": "RDX-2025-62418",
    "pronouns": "She/Her",
    "insurance": "Aetna PPO",
    "pcp": "Dr. Michael Torres, MD",
    "pharmacy": "Walgreens — 2700 E Oakland Park Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "4047 Walnut Dr, Memphis, TN 38114",
    "phone": "(954) 555-4817",
    "email": "p.lawson62@email.com",
    "emergencyContact": {
      "name": "David Lawson (Husband)",
      "phone": "(954) 555-4820"
    }
  },
  "problems": [
    {
      "problem": "Non-Small Cell Lung Cancer — Stage IIIA (Adenocarcinoma)",
      "icd": "C34.11",
      "onset": "2023",
      "status": "Active",
      "notes": "Diagnosed 09/2023; RUL mass 3.8 cm with mediastinal LN involvement; EGFR negative, ALK negative, PD-L1 60%; treated with concurrent chemo-radiation (carboplatin/pemetrexed + RT) followed by durvalumab maintenance; partial response on last scan (08/2024)"
    },
    {
      "problem": "Brain Metastasis — New Diagnosis",
      "icd": "C79.31",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — new-onset seizure; CT shows brain lesions"
    },
    {
      "problem": "COPD — Moderate",
      "icd": "J44.1",
      "onset": "2018",
      "status": "Active",
      "notes": "FEV1 58% predicted; 35 pack-year smoking history; on tiotropium and albuterol PRN; quit smoking at diagnosis"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2010",
      "status": "Active",
      "notes": "On lisinopril; well-controlled"
    },
    {
      "problem": "Osteoporosis",
      "icd": "M81.0",
      "onset": "2020",
      "status": "Active",
      "notes": "T-score -2.6; on denosumab"
    }
  ],
  "medications": [
    {
      "name": "Durvalumab 10mg/kg IV q2 weeks",
      "sig": "Administered IV every 2 weeks at infusion center (maintenance immunotherapy)",
      "prescriber": "Dr. Singh (Oncology)",
      "start": "02/2024",
      "refills": 0,
      "status": "Active — last infusion 02/10/2025"
    },
    {
      "name": "Tiotropium (Spiriva) 18mcg inhaled daily",
      "sig": "Inhale 1 capsule daily via HandiHaler device",
      "prescriber": "Dr. Torres",
      "start": "05/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Albuterol MDI 90mcg 2 puffs Q4-6h PRN",
      "sig": "Inhale 2 puffs every 4-6 hours as needed for shortness of breath",
      "prescriber": "Dr. Torres",
      "start": "05/2019",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Torres",
      "start": "03/2011",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Denosumab (Prolia) 60mg SC q6 months",
      "sig": "Inject 60mg subcutaneously every 6 months",
      "prescriber": "Dr. Torres",
      "start": "06/2020",
      "refills": 0,
      "status": "Active — last dose 12/2024"
    },
    {
      "name": "Ondansetron 4mg Q8h PRN",
      "sig": "Take 1 tablet by mouth every 8 hours as needed for nausea",
      "prescriber": "Dr. Singh (Oncology)",
      "start": "10/2023",
      "refills": 2,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Anaphylaxis (age 20 — throat swelling, hypotension)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Shellfish",
      "type": "Food",
      "reaction": "Hives, lip swelling",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2025",
      "bp": "168/98",
      "hr": 102,
      "rr": 20,
      "temp": "98.8°F",
      "spo2": "94%",
      "wt": "132 lbs",
      "ht": "5'6\"",
      "bmi": 21.3,
      "setting": "ED"
    },
    {
      "date": "02/10/2025",
      "bp": "128/78",
      "hr": 76,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "95%",
      "wt": "134 lbs",
      "ht": "5'6\"",
      "bmi": 21.6,
      "setting": "Oncology Infusion Center"
    },
    {
      "date": "08/14/2024",
      "bp": "124/74",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "138 lbs",
      "ht": "5'6\"",
      "bmi": 22.3,
      "setting": "Oncology Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/10/2025",
      "type": "Specialist",
      "provider": "Dr. Amrit Singh, MD (Oncology)",
      "cc": "Durvalumab infusion #24; routine surveillance",
      "hpi": "62-year-old female with NSCLC stage IIIA on durvalumab maintenance presenting for scheduled infusion. Reports feeling generally well. Mild persistent cough but unchanged from baseline COPD. Denies hemoptysis, dyspnea at rest, bone pain, neurologic symptoms. Weight stable. Appetite fair. No infusion reactions. Recent CT chest (01/2025) shows continued partial response — primary tumor decreased to 2.1 cm from initial 3.8 cm. No new lesions on chest imaging.",
      "exam": "General: Well-appearing, thin female. Lungs: Diminished breath sounds at right base (baseline post-radiation). CV: RRR. Abdomen: Soft, NT. Neuro: A&O x3, cranial nerves intact, no focal deficits. ECOG PS: 1.",
      "assessment": "1. NSCLC stage IIIA — continued partial response on durvalumab\n2. COPD — stable\n3. No adverse immune-related events",
      "plan": "1. Durvalumab infusion administered\n2. Next CT chest/abd/pelvis due 04/2025\n3. Brain MRI due 04/2025 (routine q6-month surveillance)\n4. Continue current regimen\n5. RTC 2 weeks for next infusion"
    },
    {
      "id": "V002",
      "date": "08/14/2024",
      "type": "Specialist",
      "provider": "Dr. Amrit Singh, MD (Oncology)",
      "cc": "Restaging CT review — partial response",
      "hpi": "62-year-old with NSCLC presenting for restaging review. CT chest (08/2024): RUL mass decreased to 2.4 cm (from 3.8 cm at diagnosis). No new pulmonary lesions. Mediastinal LN stable to decreased. Brain MRI (08/2024): No intracranial metastases. Liver, adrenals: No metastases. Patient feeling well. Working part-time. Minimal treatment side effects.",
      "exam": "General: Well-appearing. Lungs: Diminished at R base. Neuro: Intact. ECOG: 1.",
      "assessment": "1. NSCLC — partial response per RECIST criteria\n2. Brain MRI negative for metastases (08/2024)\n3. Tolerating durvalumab well",
      "plan": "1. Continue durvalumab maintenance\n2. Repeat imaging in 3 months\n3. Continue surveillance schedule"
    }
  ],
  "labs": [
    {
      "date": "02/22/2025",
      "time": "16:20",
      "orderedBy": "Dr. Kevin Tran, MD (ED)",
      "collected": "02/22/2025 16:05",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-098714",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "118",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "132",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "4.0",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "100",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "24",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.8",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "AST (SGOT)",
              "value": "24",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            },
            {
              "test": "ALT (SGPT)",
              "value": "20",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "6.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "11.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "34.2",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "212",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "COAGULATION STUDIES",
          "results": [
            {
              "test": "PT",
              "value": "12.2",
              "unit": "sec",
              "range": "11.0-14.0",
              "flag": ""
            },
            {
              "test": "INR",
              "value": "1.0",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/22/2025",
      "study": "CT HEAD WITH AND WITHOUT CONTRAST",
      "accession": "IMG-2025-09891",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "62-year-old with known NSCLC, new-onset GTC seizure — concern for brain metastases",
      "technique": "Axial CT images obtained without and with IV contrast.",
      "findings": "LEFT FRONTAL LOBE: A ring-enhancing lesion measuring 2.8 x 2.4 cm is present in the left frontal lobe with surrounding vasogenic edema. Mass effect causes 4 mm rightward midline shift. The lesion has irregular enhancing rim with central hypodensity.\n\nRIGHT PARIETAL LOBE: A second smaller enhancing lesion measuring 1.2 x 1.0 cm is identified in the right parietal convexity with minimal surrounding edema.\n\nLEFT CEREBELLAR HEMISPHERE: A third enhancing lesion measuring 0.8 cm is noted in the left cerebellar hemisphere.\n\nVENTRICLES: Mild compression of the left lateral ventricle from frontal mass. No hydrocephalus.\n\nOTHER: No hemorrhage. No herniation.",
      "impression": "1. THREE BRAIN METASTASES: dominant left frontal (2.8 cm) with significant edema and 4 mm midline shift, right parietal (1.2 cm), and left cerebellar (0.8 cm)\n2. New findings since brain MRI 08/2024 (which was negative)\n3. Known NSCLC — likely source\n4. MRI brain with contrast recommended for surgical/radiation planning\n5. Dexamethasone for cerebral edema and neurosurgery/radiation oncology consultation recommended",
      "dictated": "02/22/2025 17:00",
      "verified": "02/22/2025 17:08"
    },
    {
      "date": "01/15/2025",
      "study": "CT CHEST WITH CONTRAST — SURVEILLANCE",
      "accession": "IMG-2025-07218",
      "status": "FINAL",
      "orderedBy": "Dr. Amrit Singh, MD",
      "readBy": "Dr. Robert Nash, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "NSCLC on durvalumab maintenance — routine surveillance",
      "technique": "CT of the chest with IV contrast.",
      "findings": "RIGHT UPPER LOBE: The known primary mass has decreased further, now measuring 2.1 x 1.8 cm (previously 2.4 x 2.2 cm in 08/2024). Mild post-radiation fibrotic changes in the RUL.\n\nMEDIASTINUM: Previously enlarged subcarinal lymph node now measures 1.0 cm (previously 1.4 cm). No new lymphadenopathy.\n\nLUNGS: No new pulmonary nodules. Mild bilateral emphysematous changes. Small right pleural effusion (unchanged).\n\nADRENALS: Normal bilaterally.\n\nBONES: No suspicious osseous lesions.",
      "impression": "1. Continued partial response — primary RUL mass decreased\n2. Decreased mediastinal lymphadenopathy\n3. No evidence of thoracic progression\n4. Stable small right pleural effusion",
      "dictated": "01/15/2025 14:20",
      "verified": "01/15/2025 14:32"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose — Fluzone)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FH828R",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV792T",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "01/2024",
      "site": "Left deltoid IM",
      "lot": "PV841K",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1st dose)",
      "date": "09/2022",
      "site": "Right deltoid IM",
      "lot": "SH382P",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2nd dose)",
      "date": "11/2022",
      "site": "Right deltoid IM",
      "lot": "SH388P",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother (age 86): Hypertension, osteoarthritis — alive and well",
    "Father: Deceased at age 71 — lung cancer (small cell), 50 pack-year smoker",
    "Sister (age 58): Breast cancer — stage I, treated with lumpectomy/radiation 2021, NED",
    "Brother (age 65): COPD, hypertension",
    "Strong family history of tobacco-related malignancy"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Part-time office manager; reduced hours since diagnosis"
    ],
    [
      "Marital",
      "Married x 38 years; lives with husband"
    ],
    [
      "Tobacco",
      "Former smoker — 35 pack-years (1 PPD x 35 years); quit 09/2023 at diagnosis"
    ],
    [
      "Alcohol",
      "Social — 1-2 glasses wine per week"
    ],
    [
      "Drugs",
      "None"
    ],
    [
      "Exercise",
      "Walks daily; limited by mild dyspnea on exertion"
    ],
    [
      "Housing",
      "Single-family home"
    ],
    [
      "Safety",
      "No concerns; husband is primary support; daughter visits weekly"
    ],
    [
      "Advance Directive",
      "Yes — full code; healthcare proxy: husband (David Lawson)"
    ]
  ],
  "meta": {
    "caseId": "brain-metastasis",
    "diagnosis": "Brain Metastases (3 Lesions) from NSCLC with New-Onset Seizure — Left Frontal Dominant Lesion with Midline Shift",
    "acuity": 2,
    "presentation": "Seizure",
    "category": "oncologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patricia appears anxious but cooperative, clearly shaken by this new symptom. She's forthcoming with information but seems worried about what this seizure means for her cancer prognosis. Her distress level is moderate - she's maintaining composure but you can sense her underlying fear.",
    "interviewQuestions": [
      "Can you describe exactly what happened during the seizure?",
      "How long did the seizure last?",
      "Did you lose consciousness or have any memory loss?",
      "Have you had any headaches recently?",
      "Any vision changes or visual disturbances?",
      "Have you noticed any weakness or numbness in your arms or legs?",
      "Any confusion, difficulty speaking, or trouble finding words?",
      "Have you had any nausea or vomiting?",
      "Any changes in your balance or coordination?",
      "Have you been taking all your cancer medications as prescribed?",
      "Any recent changes in your cancer treatment?",
      "Have you had any recent imaging studies of your brain?",
      "Any family history of seizures or brain tumors?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "It happened about 2 hours ago while I was sitting at the kitchen table having breakfast. My husband said I just started shaking all over and my eyes rolled back.",
      "character": "My husband described it as my whole body shaking and jerking. I was making some kind of grunting sounds. It was terrifying for him to watch.",
      "location": "The shaking was all over my body, but my husband said it seemed to start on the right side of my face and then spread.",
      "severity": "I don't remember the seizure itself, but the aftermath has been awful - about an 8 out of 10. I'm exhausted, confused, and have a terrible headache.",
      "aggravating": "The headache gets worse when I move my head quickly or when the lights are bright.",
      "relieving": "Nothing really helps the headache. I tried some Tylenol but it didn't touch it.",
      "associated": "I've had this nagging headache for about a week now, and I've been feeling a bit more confused lately. Sometimes I have trouble finding the right words.",
      "denies": "No fever, no chest pain, no shortness of breath beyond my usual COPD symptoms. No recent falls or head injuries.",
      "history": "Never had anything like this before in my life. No seizures, no fainting spells, nothing.",
      "medications": "Durvalumab 10mg/kg IV q2 weeks; Tiotropium (Spiriva) 18mcg inhaled daily; Albuterol MDI 90mcg 2 puffs Q4-6h PRN; Lisinopril 10mg daily; Denosumab (Prolia) 60mg SC q6 months; Ondansetron 4mg Q8h PRN",
      "allergies": "Penicillin, Shellfish",
      "family": "My father died from lung cancer, but no one in my family has ever had seizures or brain problems that I know of.",
      "social": "I work part-time as an office manager but had to reduce my hours since my cancer diagnosis. I'm married and live with my husband. I quit smoking when I was diagnosed in September 2023 - I smoked a pack a day for 35 years. I only drink socially, maybe 1-2 glasses of wine per week."
    },
    "examManeuvers": [
      "Mental status examination",
      "Cranial nerve examination",
      "Motor strength testing",
      "Deep tendon reflexes",
      "Coordination testing",
      "Gait assessment",
      "Fundoscopic examination",
      "Sensory examination",
      "Babinski reflex",
      "Speech and language assessment"
    ],
    "examFindings": {
      "Mental status examination": "Alert but mildly confused, oriented to person and place but unsure of date. Difficulty with attention and short-term memory. Mild word-finding difficulty.",
      "Cranial nerve examination": "Subtle right facial droop, mild right homonymous hemianopsia on visual field testing. Other cranial nerves intact.",
      "Motor strength testing": "Mild right-sided weakness - right arm 4/5, right leg 4+/5. Left side strength 5/5 throughout.",
      "Deep tendon reflexes": "Hyperreflexic on the right (3+), normal on the left (2+). Right ankle clonus present.",
      "Coordination testing": "Mild dysmetria on right finger-to-nose testing. Left side coordination normal.",
      "Gait assessment": "Unsteady with mild right leg weakness, favoring left side. Requires minimal assistance.",
      "Fundoscopic examination": "Mild papilledema bilaterally consistent with increased intracranial pressure.",
      "Sensory examination": "Decreased light touch and pinprick sensation on right side compared to left.",
      "Babinski reflex": "Upgoing on the right, downgoing on the left.",
      "Speech and language assessment": "Mild expressive aphasia with word-finding difficulties. Comprehension intact."
    },
    "ddxTargets": [
      "Brain Metastases (3 Lesions) from NSCLC with New-Onset Seizure — Left Frontal Dominant Lesion with Midline Shift",
      "Primary brain tumor (glioblastoma)",
      "Stroke (ischemic or hemorrhagic)",
      "Meningitis or encephalitis",
      "Hypoglycemia or other metabolic encephalopathy",
      "Drug toxicity or withdrawal seizure",
      "Hypertensive encephalopathy"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known cancer diagnosis and missing other acute causes of seizure like stroke or infection",
      "prematureClosure": "Risk of immediately assuming brain metastases without considering other intracranial processes or systemic causes",
      "availabilityBias": "Recent cases of simple seizure disorders might lead to underestimating the significance of focal neurological findings"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given that this is a new-onset seizure in a 62-year-old with known lung cancer, what specific features in your history and physical exam will help you distinguish between metastatic disease and other serious intracranial processes?",
      "phase5": "Now that you've identified focal neurological deficits and signs of increased intracranial pressure, how does this change your differential? What's the most likely explanation for a new seizure with these findings in a patient with known NSCLC?",
      "finalDebrief": "This case demonstrates how new neurological symptoms in cancer patients require urgent evaluation. The combination of new-onset seizure, focal deficits, and signs of increased ICP in a patient with NSCLC strongly suggests brain metastases. Notice how the initial presentation could have been attributed to various causes, but the focal findings and known primary malignancy guided us to the correct diagnosis."
    }
  }
};
