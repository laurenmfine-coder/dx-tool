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
    "patientPersona": "Megan Sullivan is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did altered mental status start?",
      "Can you describe exactly how it started — sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history — any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle — work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started I've been struggling a lot over the past few months with feeling really down and.'",
      "character": "'It's altered mental status — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Toxic Ingestion.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Sertraline 150mg daily; Buspirone 10mg TID; Rizatriptan 10mg PRN; Dicyclomine 20mg QID PRN; Oral Contraceptive (Ethinyl Estradiol/Norgestimate).'",
      "allergies": "'My allergies are Codeine, Latex.'",
      "family": "Mother: Major depression, Anxiety disorder, alive at 55  Father: Alcohol use disorder (in recovery), alive at 58  Brother: ADHD, alive at 25",
      "social": "Occupation: Marketing coordinator at tech startup; high stress  Marital: Single; recently ended 3-year relationship (11/2025)  Tobacco: Never smoker  Alcohol: Social, 2-4 drinks/week; increased since breakup  Drugs: Denies illicit drugs"
    },
    "examManeuvers": [
      "General appearance and level of distress",
      "Vital signs review",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Extremity assessment",
      "Skin examination",
      "Targeted system examination"
    ],
    "examFindings": {
      "General appearance and level of distress": "Clinical finding consistent with Toxic Ingestion. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Toxic Ingestion. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Toxic Ingestion. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Toxic Ingestion. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Toxic Ingestion. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Toxic Ingestion. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Toxic Ingestion. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Toxic Ingestion. Document specifically what you observe."
    },
    "ddxTargets": [
      "Toxic Ingestion (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Toxic Ingestion, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Toxic Ingestion, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Toxic Ingestion based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Megan Sullivan's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Toxic Ingestion (Acute Acetaminophen Overdose). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
