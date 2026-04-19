// Virtual EMR Case: Toxic Ingestion (Acetaminophen Overdose)
// Variant: toxic-ingestion | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Megan Sullivan",
    "patientHPI": "I've been struggling a lot over the past few months with feeling really down and unmotivated. I'm having trouble focusing at work, I wake up way too early and can't get back to sleep, and I've lost my appetite - I've actually lost about 5 pounds without trying. I used to enjoy going out with friends but lately I just want to stay home and isolate myself, which isn't like me at all.",
    "dob": "07/22/1998",
    "age": 27,
    "sex": "Female",
    "mrn": "RDX-2025-91475",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Sandra Morales, MD",
    "pharmacy": "Walgreens — 4900 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "4828 N Western Ave, Minneapolis, MN 55410",
    "phone": "(954) 555-8934",
    "email": "m.sullivan98@email.com",
    "emergencyContact": {
      "name": "Kathleen Sullivan (Mother)",
      "phone": "(954) 555-8948"
    },
    "chiefComplaint": "Found unresponsive next to empty pill bottle"
  },
  "problems": [
    {
      "problem": "Major Depressive Disorder, Recurrent, Moderate",
      "icd": "F33.1",
      "onset": "2018",
      "status": "Active",
      "notes": "2 prior depressive episodes; current episode x 4 months; dose increase planned at last visit"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2016",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "History of Self-Harm (Non-Suicidal)",
      "icd": "Z91.52",
      "onset": "2018",
      "status": "Resolved",
      "notes": "Cutting behavior in 2018-2019; resolved with DBT"
    },
    {
      "problem": "Chronic Migraine",
      "icd": "G43.709",
      "onset": "2020",
      "status": "Active",
      "notes": "Frequent OTC analgesic use; risk factor for medication overuse headache"
    },
    {
      "problem": "Irritable Bowel Syndrome",
      "icd": "K58.0",
      "onset": "2022",
      "status": "Active",
      "notes": "Diarrhea-predominant; stress-exacerbated"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 150mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Morales",
      "start": "09/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Buspirone 10mg TID",
      "sig": "Take 1 tablet by mouth three times daily",
      "prescriber": "Dr. Morales",
      "start": "02/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Rizatriptan 10mg PRN",
      "sig": "Take 1 tablet by mouth at onset of migraine; may repeat once after 2 hours; max 2 doses/day",
      "prescriber": "Dr. Morales",
      "start": "05/2021",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Dicyclomine 20mg QID PRN",
      "sig": "Take 1 capsule by mouth four times daily as needed for abdominal cramping",
      "prescriber": "Dr. Morales",
      "start": "08/2022",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Oral Contraceptive (Ethinyl Estradiol/Norgestimate)",
      "sig": "Take 1 tablet by mouth daily at the same time",
      "prescriber": "Dr. Morales",
      "start": "01/2020",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Severe nausea, vomiting",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Latex",
      "type": "Environmental",
      "reaction": "Contact dermatitis",
      "severity": "Mild",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2026",
      "bp": "104/62",
      "hr": 98,
      "rr": 18,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "142 lbs",
      "ht": "5'6\"",
      "bmi": 22.9,
      "setting": "ED"
    },
    {
      "date": "12/10/2025",
      "bp": "112/72",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "140 lbs",
      "ht": "5'6\"",
      "bmi": 22.6,
      "setting": "PCP Office"
    },
    {
      "date": "06/18/2025",
      "bp": "110/68",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "142 lbs",
      "ht": "5'6\"",
      "bmi": 22.9,
      "setting": "PCP Office"
    },
    {
      "date": "12/08/2024",
      "bp": "108/66",
      "hr": 70,
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
      "date": "12/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Sandra Morales, MD",
      "cc": "Follow-up: worsening depression, anxiety, medication management",
      "hpi": "27-year-old female presenting for follow-up of worsening depression over the past 4 months. Reports decreased motivation, difficulty concentrating at work, disrupted sleep (early morning awakening), decreased appetite with 5 lb weight loss, and withdrawal from social activities. PHQ-9 score: 18 (moderately severe). Denies current suicidal ideation or self-harm urges. Reports increased anxiety with rumination. Takes sertraline consistently. Buspirone compliance inconsistent — reports forgetting afternoon dose. Migraines occurring 3-4x/month — using OTC acetaminophen and ibuprofen frequently in addition to rizatriptan. IBS exacerbated by stress.",
      "exam": "General: Appears tired, flat affect. HEENT: WNL. CV: RRR. Lungs: CTAB. Abdomen: Mild diffuse tenderness, hyperactive BS. Neuro: A&O x3. Psych: Dysphoric mood, constricted affect, denies SI/HI, future-oriented.",
      "assessment": "1. MDD, recurrent — worsening; PHQ-9 18\n2. GAD — not well-controlled; buspirone compliance issues\n3. Chronic migraine — medication overuse concern\n4. IBS — stress-exacerbated",
      "plan": "1. Increase sertraline to 200mg daily; monitor for side effects\n2. Reinforce buspirone compliance — discuss switch to once-daily medication if nonadherent\n3. Safety plan reviewed and updated\n4. Therapy referral — CBT and possible DBT refresher\n5. Discussed limiting OTC analgesic use; headache diary\n6. RTC 4 weeks; sooner if worsening"
    },
    {
      "id": "V002",
      "date": "06/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Sandra Morales, MD",
      "cc": "Annual wellness; mental health check-in",
      "hpi": "27-year-old female for annual exam. Depression reasonably controlled on sertraline 150mg — PHQ-9 score 10 (moderate). No suicidal ideation. Anxiety managed with buspirone. Reports stable mood overall but some work stress. Migraines 2-3x/month managed with rizatriptan. IBS stable. No other complaints.",
      "exam": "General: NAD, pleasant. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT/ND. Psych: Euthymic, appropriate affect.",
      "assessment": "1. Annual wellness\n2. MDD — moderate but stable\n3. GAD — managed\n4. Chronic migraine — stable\n5. IBS — stable",
      "plan": "1. Continue current medications\n2. Continue therapy\n3. Screenings up to date\n4. RTC 6 months"
    },
    {
      "id": "V003",
      "date": "12/08/2024",
      "type": "Primary Care",
      "provider": "Dr. Sandra Morales, MD",
      "cc": "Follow-up: depression, medication management",
      "hpi": "27-year-old female for depression follow-up. Reports improved mood on sertraline 150mg — PHQ-9 score 8 (mild). Good medication compliance. Engaged in CBT biweekly. Anxiety manageable. Reports no self-harm urges since 2019. Migraines manageable. Working full-time with supportive supervisor.",
      "exam": "General: NAD. Psych: Euthymic, good eye contact, future-oriented statements.",
      "assessment": "1. MDD — improved, PHQ-9 8\n2. GAD — stable\n3. History NSSI — in sustained remission",
      "plan": "1. Continue sertraline 150mg, buspirone 10mg TID\n2. Continue CBT\n3. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "02/24/2026",
      "time": "03:45",
      "orderedBy": "Dr. James Park, MD (ED)",
      "collected": "02/24/2026 03:20",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-022442",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "ACETAMINOPHEN LEVEL",
          "results": [
            {
              "test": "Acetaminophen (APAP)",
              "value": "180",
              "unit": "µg/mL",
              "range": "10-20 therapeutic",
              "flag": "H"
            }
          ]
        },
        {
          "name": "HEPATIC FUNCTION",
          "results": [
            {
              "test": "ALT (SGPT)",
              "value": "42",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST (SGOT)",
              "value": "38",
              "unit": "U/L",
              "range": "10-40",
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
              "test": "Alkaline Phosphatase",
              "value": "62",
              "unit": "U/L",
              "range": "44-147",
              "flag": ""
            },
            {
              "test": "Albumin",
              "value": "3.8",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": ""
            },
            {
              "test": "INR",
              "value": "1.1",
              "unit": "",
              "range": "0.8-1.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.8",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "104",
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
              "test": "BUN",
              "value": "12",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "8.6",
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
              "value": "39.6",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "268",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "TOXICOLOGY",
          "results": [
            {
              "test": "Salicylate Level",
              "value": "<2.0",
              "unit": "mg/dL",
              "range": "<2.0 negative",
              "flag": ""
            },
            {
              "test": "Ethanol Level",
              "value": "82",
              "unit": "mg/dL",
              "range": "<10 negative",
              "flag": "H"
            },
            {
              "test": "Urine Drug Screen",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "Urine hCG",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/18/2025",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2025-06185",
      "status": "FINAL",
      "orderedBy": "Dr. Sandra Morales, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "27F annual wellness. Baseline imaging.",
      "technique": "PA and lateral views, upright, full inspiration.",
      "findings": "Heart: Normal size. No pericardial effusion.\\n\\nLungs: Clear bilaterally. No consolidation, mass, or pleural effusion. No pneumothorax.\\n\\nBones: No acute fracture.",
      "impression": "1. Normal chest radiograph.\\n2. No acute cardiopulmonary process.",
      "dictated": "06/18/2025 10:15",
      "verified": "06/18/2025 12:40"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-302",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/20/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-774",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) (3/3)",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Major depression, Anxiety disorder, alive at 55",
    "Father: Alcohol use disorder (in recovery), alive at 58",
    "Brother: ADHD, alive at 25",
    "Maternal aunt: Bipolar I disorder, alive at 52",
    "Maternal grandmother: Completed suicide at age 48"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Marketing coordinator at tech startup; high stress"
    ],
    [
      "Marital",
      "Single; recently ended 3-year relationship (11/2025)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social, 2-4 drinks/week; increased since breakup"
    ],
    [
      "Drugs",
      "Denies illicit drugs"
    ],
    [
      "Exercise",
      "Running 2-3x/week; has declined recently"
    ],
    [
      "Housing",
      "Apartment, lives alone since breakup (partner moved out)"
    ],
    [
      "Safety",
      "Denies IPV; safety plan on file since 2018; lethal means counseling performed"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "toxic-ingestion",
    "diagnosis": "Toxic Ingestion (Acute Acetaminophen Overdose)",
    "acuity": 2,
    "presentation": "Altered Mental Status",
    "category": "toxicologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Megan appears drowsy and slightly confused, with flat affect and minimal eye contact. She is cooperative but speaks slowly and seems emotionally detached, showing signs of both acute intoxication and underlying depression.",
    "interviewQuestions": [
      "Can you tell me what happened before you were found unresponsive?",
      "What kind of pills were in the bottle that was found next to you?",
      "How many pills did you take and when did you take them?",
      "Was this intentional or accidental?",
      "Have you been having thoughts of hurting yourself or ending your life?",
      "How has your mood been lately, especially since your relationship ended?",
      "Have you been drinking alcohol recently, and if so, how much?",
      "Are you experiencing any nausea, vomiting, or abdominal pain right now?",
      "Have you noticed any yellowing of your skin or eyes?",
      "When did you last eat something?",
      "Have you taken any other medications or substances today?",
      "Do you have any history of previous overdoses or suicide attempts?",
      "How has your sleep and appetite been over the past few weeks?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating right now. Could you repeat that?",
      "onset": "I took the pills around 2 AM last night. I'd been lying awake for hours feeling terrible about everything, and I just wanted the emotional pain to stop.",
      "character": "I feel really drowsy and foggy right now. My stomach feels a little queasy but not terrible yet.",
      "location": "I have some mild discomfort in my upper abdomen, kind of a dull ache.",
      "severity": "The emotional pain has been about an 8 out of 10 lately. Physically right now I'd say maybe a 3 or 4 - just tired and slightly nauseous.",
      "aggravating": "The depression got so much worse after my breakup last month. Work stress and not sleeping well have made everything harder.",
      "relieving": "Nothing has been helping the depression lately. Even my usual medications don't seem to be working as well.",
      "associated": "I've been waking up at 3 or 4 AM every night, I have no appetite, and I've lost about 5 pounds. I just feel empty and hopeless most days.",
      "denies": "I haven't had any chest pain, difficulty breathing, or severe abdominal pain. No yellowing of my skin that I've noticed.",
      "history": "I've had episodes of depression before, but this feels worse. I've had thoughts of self-harm in the past but never actually took an overdose before.",
      "medications": "Sertraline 150mg daily; Buspirone 10mg TID; Rizatriptan 10mg PRN; Dicyclomine 20mg QID PRN; Oral Contraceptive (Ethinyl Estradiol/Norgestimate)",
      "allergies": "Codeine, Latex",
      "family": "My mom has struggled with depression and anxiety her whole life. My dad had alcohol problems but he's been sober for 10 years now.",
      "social": "I work as a marketing coordinator at a tech startup - it's been really stressful lately. I'm single now after my 3-year relationship ended last month. I don't smoke, and I usually drink socially but I've been drinking more since the breakup, maybe 4-5 drinks a few times a week."
    },
    "examManeuvers": [
      "Mental status examination",
      "Abdominal palpation",
      "Assessment for jaundice (scleral icterus, skin)",
      "Neurological assessment (Glasgow Coma Scale)",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Assessment of hydration status",
      "Examination for signs of hepatomegaly",
      "Pupillary examination",
      "Assessment for asterixis"
    ],
    "examFindings": {
      "Mental status examination": "Patient is oriented to person and place but slightly confused about time. Flat affect, psychomotor retardation, speaks slowly with delayed responses.",
      "Abdominal palpation": "Mild tenderness in right upper quadrant, soft abdomen, no guarding or rebound tenderness.",
      "Assessment for jaundice (scleral icterus, skin)": "No obvious jaundice present at this time, normal skin color and sclera.",
      "Neurological assessment (Glasgow Coma Scale)": "GCS 14 (E4, V4, M6) - opens eyes spontaneously, confused verbal response, follows commands.",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, normal heart sounds, peripheral pulses intact.",
      "Pulmonary examination": "Clear to auscultation bilaterally, normal respiratory effort.",
      "Assessment of hydration status": "Mucous membranes slightly dry, skin turgor normal, appears mildly dehydrated.",
      "Examination for signs of hepatomegaly": "Liver edge not clearly palpable, no obvious hepatomegaly on examination.",
      "Pupillary examination": "Pupils equal, round, reactive to light, approximately 4mm bilaterally.",
      "Assessment for asterixis": "No asterixis present at this time."
    },
    "ddxTargets": [
      "Toxic Ingestion (Acute Acetaminophen Overdose) (correct diagnosis)",
      "Major Depressive Episode with Suicidal Ideation",
      "Mixed Drug and Alcohol Intoxication",
      "Acute Hepatic Failure",
      "Salicylate Poisoning",
      "Sedative-Hypnotic Overdose",
      "Tricyclic Antidepressant Overdose"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the psychiatric history and treating this primarily as a mental health crisis while missing the toxicologic emergency requiring immediate antidotal therapy.",
      "prematureClosure": "Risk of assuming this is just depression/suicidal ideation without obtaining critical details about the specific substance ingested and timing for appropriate treatment.",
      "availabilityBias": "May focus on more dramatic overdose presentations while acetaminophen toxicity can appear deceptively mild in early stages before severe hepatotoxicity develops."
    },
    "coachPrompts": {
      "phase2": "You've identified some key possibilities in your differential. Before you interview the patient, think about what specific information will be most critical to obtain. What details about the ingestion itself will determine your immediate management priorities?",
      "phase5": "Now that you've gathered your history and physical findings, consider the timeline of acetaminophen toxicity. What phase of poisoning might this patient be in, and how does that affect your diagnostic approach and urgency of treatment?",
      "finalDebrief": "This case highlights the importance of detailed ingestion history in suspected overdoses. Early acetaminophen toxicity can appear deceptively mild, but the window for effective antidotal therapy is time-critical. How did your differential diagnosis evolve as you gathered more information about the specific substance and timing?"
    }
  }
};
