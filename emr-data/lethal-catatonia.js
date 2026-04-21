// Virtual EMR Case: Lethal Catatonia
// Variant: lethal-catatonia | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Thibodeaux",
    "patientHPI": "I've been pretty good about taking my medications, though I'll admit I sometimes forget my mood pills on the weekends when my routine gets messed up. I'm here for my regular check-up and everything seems fine - sleeping okay, eating well, my blood sugars have been running a bit high but not terrible.",
    "dob": "01/20/1990",
    "age": 35,
    "sex": "Male",
    "mrn": "RDX-2025-73918",
    "pronouns": "He/Him",
    "insurance": "Medicaid (Florida)",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "Walgreens — 3450 W Broward Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "4018 S Halsted St, Indianapolis, IN 46208",
    "phone": "(954) 555-6142",
    "email": "m.thibodeaux@email.com",
    "emergencyContact": {
      "name": "Denise Thibodeaux (Sister)",
      "phone": "(954) 555-6148"
    },
    "chiefComplaint": "Fever and rigid muscles"
  },
  "problems": [
    {
      "problem": "Bipolar I Disorder — Most Recent Episode Manic with Psychotic Features",
      "icd": "F31.2",
      "onset": "2012",
      "status": "Active",
      "notes": "Onset age 22; multiple manic episodes with psychotic features; 4 psychiatric hospitalizations; last hospitalization 6 months ago; history of catatonic features during severe episodes"
    },
    {
      "problem": "Catatonia — Recurrent",
      "icd": "F06.1",
      "onset": "2019",
      "status": "Active",
      "notes": "2 prior catatonic episodes requiring lorazepam challenge; one episode progressed to malignant catatonia with autonomic instability in 2022"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2021",
      "status": "Active",
      "notes": "Developed on second-generation antipsychotics; A1c 7.8%; on metformin"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2020",
      "status": "Active",
      "notes": "On lisinopril; partially controlled"
    }
  ],
  "medications": [
    {
      "name": "Lithium 600mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Ramirez (Psychiatry)",
      "start": "09/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Quetiapine 400mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Ramirez (Psychiatry)",
      "start": "09/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Whitfield",
      "start": "03/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "06/2021",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Carbamazepine",
      "type": "Drug",
      "reaction": "Stevens-Johnson Syndrome (confirmed HLA-B*1502 positive)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/23/2025",
      "bp": "182/108",
      "hr": 138,
      "rr": 28,
      "temp": "104.6°F",
      "spo2": "94%",
      "wt": "210 lbs",
      "ht": "5'10\"",
      "bmi": 30.1,
      "setting": "ED"
    },
    {
      "date": "12/04/2024",
      "bp": "142/88",
      "hr": 82,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "208 lbs",
      "ht": "5'10\"",
      "bmi": 29.8,
      "setting": "PCP Office"
    },
    {
      "date": "09/10/2024",
      "bp": "148/92",
      "hr": 78,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "212 lbs",
      "ht": "5'10\"",
      "bmi": 30.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/04/2024",
      "type": "Primary Care",
      "provider": "Dr. James Whitfield, MD",
      "cc": "Follow-up: diabetes, hypertension, medication check",
      "hpi": "35-year-old male with Bipolar I and T2DM presenting for routine follow-up. Reports medication adherence 'most days' but admits missing lithium doses on weekends when his schedule is disrupted. Denies manic symptoms currently. Sleep fair at 6-7 hours. Appetite good. Blood sugars running 140-180 per home monitoring. No polyuria or polydipsia. Denies chest pain, SOB.",
      "exam": "General: Obese male, euthymic, cooperative. HEENT: WNL. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, obese, NT. Extremities: No edema. Neuro: A&O x3, normal gait. Psych: Euthymic, linear thought process, no psychomotor abnormality.",
      "assessment": "1. Type 2 Diabetes — suboptimally controlled (A1c 7.8%)\n2. Hypertension — partially controlled on lisinopril 20mg\n3. Bipolar I Disorder — stable on lithium + quetiapine\n4. Obesity — BMI 29.8",
      "plan": "1. Continue metformin 1000mg BID; consider adding second agent if A1c not improved at next check\n2. Continue lisinopril 20mg; recheck BP in 1 month\n3. Lithium level due — ordered\n4. Reinforced medication adherence, especially lithium\n5. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "09/10/2024",
      "type": "Specialist",
      "provider": "Dr. Carmen Ramirez, MD (Psychiatry)",
      "cc": "Post-hospitalization follow-up — Bipolar I, manic episode with catatonic features",
      "hpi": "35-year-old male seen 2 weeks post-discharge from psychiatric unit. Admitted for manic episode with psychotic features and emerging catatonic symptoms (mutism, posturing, waxy flexibility). Treated with lorazepam challenge (positive response) + dose adjustment of lithium and quetiapine. Discharged on lithium 600mg BID + quetiapine 400mg QHS. Currently stable. Sister present, reports he has been taking medications, eating, sleeping, and engaging in conversation.",
      "exam": "Psych: Well-groomed, cooperative. Speech: normal rate/volume. Mood: 'better.' Affect: somewhat restricted but reactive. No catatonic signs (no immobility, negativism, posturing, or waxy flexibility). Thought process: linear. No psychotic symptoms. No SI/HI. Motor: no rigidity, no tremor.",
      "assessment": "1. Bipolar I Disorder — post-manic episode with catatonic features, now remitting\n2. Catatonia — resolved with lorazepam; no residual signs\n3. Medication regimen stable",
      "plan": "1. Continue lithium 600mg BID — therapeutic level confirmed at 0.8 mEq/L\n2. Continue quetiapine 400mg QHS\n3. Lithium level, TSH, renal function in 3 months\n4. If catatonic features re-emerge → lorazepam 2mg IM/IV and call ED\n5. RTC 4 weeks"
    }
  ],
  "labs": [
    {
      "date": "02/23/2025",
      "time": "15:28",
      "orderedBy": "Dr. Amanda Liu, MD (ED)",
      "collected": "02/23/2025 15:10",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-099182",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "218",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "38",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "2.1",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "152",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "H"
            },
            {
              "test": "Potassium",
              "value": "5.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "112",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "H"
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "18",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": "L"
            },
            {
              "test": "Calcium",
              "value": "10.8",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "H"
            },
            {
              "test": "AST (SGOT)",
              "value": "284",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT (SGPT)",
              "value": "162",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC) WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "18.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "16.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "50.4",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": "H"
            },
            {
              "test": "Platelets",
              "value": "142",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            },
            {
              "test": "Neutrophils",
              "value": "84",
              "unit": "%",
              "range": "40-70",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CREATINE KINASE",
          "results": [
            {
              "test": "CK Total",
              "value": "12,840",
              "unit": "U/L",
              "range": "30-200",
              "flag": "H"
            },
            {
              "test": "CK-MB",
              "value": "18",
              "unit": "ng/mL",
              "range": "0-5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "LITHIUM LEVEL",
          "results": [
            {
              "test": "Lithium",
              "value": "1.8",
              "unit": "mEq/L",
              "range": "0.6-1.2",
              "flag": "H"
            }
          ]
        },
        {
          "name": "LACTIC ACID",
          "results": [
            {
              "test": "Lactate",
              "value": "5.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            {
              "test": "Serum Iron",
              "value": "18",
              "unit": "µg/dL",
              "range": "60-170",
              "flag": "L"
            },
            {
              "test": "Ferritin",
              "value": "1,842",
              "unit": "ng/mL",
              "range": "20-250",
              "flag": "H"
            }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            {
              "test": "Color",
              "value": "Dark amber",
              "unit": "",
              "range": "Yellow",
              "flag": ""
            },
            {
              "test": "Specific Gravity",
              "value": "1.034",
              "unit": "",
              "range": "1.005-1.030",
              "flag": "H"
            },
            {
              "test": "Myoglobin",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Blood (dipstick)",
              "value": "3+",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "RBC",
              "value": "0-2",
              "unit": "/HPF",
              "range": "0-3",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/23/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-09814",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Liu, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "35-year-old with acute rigidity, hyperthermia, autonomic instability, altered mental status — r/o intracranial process",
      "technique": "Non-contrast axial CT images of the head.",
      "findings": "BRAIN PARENCHYMA: No acute hemorrhage, mass, or infarction. Normal gray-white differentiation.\n\nVENTRICLES: Normal size and configuration.\n\nEXTRA-AXIAL: No subdural or epidural collection.\n\nBONY STRUCTURES: No fracture.",
      "impression": "1. No acute intracranial pathology\n2. Clinical presentation (rigidity, hyperthermia, autonomic instability, elevated CK) — consider lethal catatonia, NMS, or serotonin syndrome based on medication history",
      "dictated": "02/23/2025 16:00",
      "verified": "02/23/2025 16:08"
    },
    {
      "date": "02/23/2025",
      "study": "CHEST X-RAY — PA AND LATERAL",
      "accession": "IMG-2025-09816",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Liu, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "Tachycardia, fever, rule out aspiration pneumonia",
      "technique": "PA and lateral chest radiographs.",
      "findings": "LUNGS: No focal consolidation or effusion. No aspiration pattern.\n\nHEART: Normal cardiomediastinal silhouette.\n\nOTHER: No pneumothorax.",
      "impression": "1. No acute cardiopulmonary process\n2. No evidence of aspiration pneumonia",
      "dictated": "02/23/2025 16:05",
      "verified": "02/23/2025 16:12"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL891R",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Moderna, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV884P",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "01/2022",
      "site": "Left deltoid IM",
      "lot": "TA219K",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Mother (age 60): Bipolar II Disorder, hypertension, obesity",
    "Father (age 63): Deceased — MI at age 58; hx of T2DM, HTN, hyperlipidemia",
    "Sister (age 32): Anxiety disorder — on sertraline",
    "Maternal uncle: Schizophrenia — institutionalized",
    "Strong family history of mood disorders and psychotic spectrum illness"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Disability — SSI; unable to work consistently due to psychiatric illness"
    ],
    [
      "Marital",
      "Single; lives with sister who serves as informal caregiver"
    ],
    [
      "Tobacco",
      "Former — quit 2 years ago; previously 1 PPD x 8 years"
    ],
    [
      "Alcohol",
      "Denies current use; hx of heavy use during manic episodes"
    ],
    [
      "Drugs",
      "Denies current use; hx of cocaine use during manic episodes (last use 2022)"
    ],
    [
      "Exercise",
      "Walks in neighborhood occasionally; mostly sedentary"
    ],
    [
      "Housing",
      "Lives with sister in apartment"
    ],
    [
      "Safety",
      "No firearms; sister monitors medications; has psychiatric advance directive naming sister as healthcare proxy"
    ],
    [
      "Advance Directive",
      "Psychiatric advance directive on file — sister (Denise) is designated decision-maker"
    ]
  ],
  "meta": {
    "caseId": "lethal-catatonia",
    "diagnosis": "Lethal (Malignant) Catatonia with Autonomic Instability and Rhabdomyolysis",
    "acuity": 1,
    "presentation": "Psychiatric Emergency",
    "category": "psychiatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus appears acutely ill and confused, with minimal verbal responsiveness and periods of stupor alternating with agitation. He demonstrates waxy flexibility and seems disconnected from his surroundings, requiring prompting to answer basic questions. His distress is evident through his rigid posturing and autonomic instability, though he may not be fully aware of the severity of his condition.",
    "interviewQuestions": [
      "When did you first notice feeling unwell or different from your usual self?",
      "Have you been taking all your medications as prescribed recently?",
      "Tell me about any recent changes in your mood, sleep, or behavior",
      "Have you had any nausea, vomiting, or changes in urination?",
      "When did the muscle stiffness and fever begin?",
      "Have you been eating and drinking normally over the past few days?",
      "Has anyone noticed you being less responsive or moving differently?",
      "Have you had any recent medication changes or dose adjustments?",
      "Tell me about any recent infections, illnesses, or stressors",
      "Have you experienced episodes like this before?",
      "Are you having any difficulty swallowing or speaking?",
      "Have you noticed any tremor or involuntary movements?",
      "What medications are you currently taking and what are you allergic to?"
    ],
    "patientResponses": {
      "default": "I... I'm not sure what you mean. Everything feels foggy right now.",
      "onset": "My sister says I started acting strange about 3-4 days ago... getting stiffer, not talking much. The fever started yesterday I think.",
      "character": "My muscles feel like concrete... can't move them right. Everything hurts when I try to move.",
      "location": "All over... my arms, legs, neck, back. Everything is tight and painful.",
      "severity": "Maybe 8 out of 10... it's hard to think or move. I feel really sick.",
      "aggravating": "Any movement makes it worse. Noise and light bother me too.",
      "relieving": "Nothing really helps. Just want to stay still but even that hurts.",
      "associated": "Been sweating a lot, heart racing, nauseous. Haven't been able to eat much or use the bathroom normally.",
      "denies": "No headache, no chest pain, no shortness of breath that I can tell.",
      "history": "I had something similar maybe 2 years ago during a bad episode, but not this severe.",
      "medications": "Lithium 600mg BID; Quetiapine 400mg QHS; Metformin 1000mg BID; Lisinopril 20mg daily",
      "allergies": "Carbamazepine",
      "family": "My mom has bipolar disorder too. My dad died of a heart attack. My sister has anxiety.",
      "social": "I'm on disability for my bipolar disorder. Live with my sister. I quit smoking 2 years ago. Don't drink anymore but used to during manic episodes."
    },
    "examManeuvers": [
      "Mental status examination and responsiveness",
      "Assessment for catatonic signs (waxy flexibility, posturing, stupor)",
      "Muscle rigidity assessment (lead pipe vs cogwheel)",
      "Neurological examination including reflexes",
      "Cardiovascular examination",
      "Assessment for tremor and involuntary movements",
      "Skin examination for diaphoresis and hyperthermia",
      "Assessment of speech and swallowing",
      "Pulmonary examination",
      "Assessment of hydration status"
    ],
    "examFindings": {
      "Mental status examination and responsiveness": "Stuporous with periods of mutism, delayed responses to commands, appears disconnected from environment",
      "Assessment for catatonic signs (waxy flexibility, posturing, stupor)": "Marked waxy flexibility, catalepsy, occasional posturing, periods of stupor alternating with agitation",
      "Muscle rigidity assessment (lead pipe vs cogwheel)": "Severe generalized lead-pipe rigidity throughout all extremities and axial muscles",
      "Neurological examination including reflexes": "Hyperreflexia, sustained clonus at ankles, no focal neurological deficits",
      "Cardiovascular examination": "Tachycardic irregular rhythm, elevated blood pressure, strong pulses, no murmurs",
      "Assessment for tremor and involuntary movements": "Coarse tremor in upper extremities, occasional myoclonic jerks",
      "Skin examination for diaphoresis and hyperthermia": "Profuse diaphoresis, skin hot and flushed, poor skin turgor suggesting dehydration",
      "Assessment of speech and swallowing": "Minimal verbal output, difficulty with swallowing, excessive drooling",
      "Pulmonary examination": "Tachypneic, clear lung fields bilaterally, no adventitious sounds",
      "Assessment of hydration status": "Signs of dehydration with poor skin turgor, dry mucous membranes, concentrated urine"
    },
    "ddxTargets": [
      "Lethal (Malignant) Catatonia with Autonomic Instability, Rhabdomyolysis, and Concurrent Lithium Toxicity",
      "Neuroleptic Malignant Syndrome",
      "Serotonin Syndrome",
      "Bacterial Meningitis or Encephalitis",
      "Status Epilepticus (non-convulsive)",
      "Severe Dehydration with Heat Stroke",
      "Acute Psychotic Episode with Catatonic Features"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on psychiatric history and assuming this is 'just' a psychiatric episode rather than recognizing the medical emergency of malignant catatonia",
      "prematureClosure": "May diagnose simple catatonia or medication non-compliance without recognizing the life-threatening autonomic instability and rhabdomyolysis",
      "availabilityBias": "NMS may come to mind first due to antipsychotic use, potentially missing concurrent lithium toxicity and the primary catatonic process"
    },
    "coachPrompts": {
      "phase2": "Before you interview Marcus, consider what distinguishes malignant catatonia from other movement disorders or psychiatric emergencies. What key autonomic signs would you look for, and how might his medication regimen contribute to his current presentation?",
      "phase5": "You've identified significant autonomic instability with hyperthermia, tachycardia, and severe rigidity in a patient with catatonic features. How do you differentiate between malignant catatonia, NMS, and lithium toxicity? What laboratory studies would help clarify the diagnosis and guide immediate management?",
      "finalDebrief": "This case demonstrates how malignant catatonia can present as a true psychiatric emergency requiring immediate medical intervention. The combination of severe rigidity, hyperthermia, autonomic instability, and altered mental status in a patient with bipolar disorder created a complex picture complicated by potential lithium toxicity. Early recognition and aggressive treatment with benzodiazepines, cooling measures, and possibly ECT are crucial for preventing fatal outcomes.",
      "final": "Diagnosis: lethal (malignant) catatonia with autonomic instability, rhabdomyolysis, and concurrent lithium toxicity. Key learning: (1) Catatonia is a syndrome of motor, behavioral, and autonomic disturbances that can complicate psychiatric illness (schizophrenia, mood disorders), general medical conditions (encephalitis including anti-NMDA receptor encephalitis, metabolic derangements, neuroleptic exposure), or occur idiopathically. Core features (DSM-5, at least 3 required): catalepsy, waxy flexibility, stupor, agitation, mutism, negativism, posturing, mannerisms, stereotypies, grimacing, echolalia, echopraxia. Lethal or malignant catatonia adds autonomic instability (fever, labile BP and HR, diaphoresis), rigidity, altered consciousness, and has mortality up to 20% without treatment. (2) The differential between malignant catatonia and NMS is notoriously difficult because they are clinically nearly identical — fever, rigidity, autonomic instability, altered mental status, and CK elevation. Historical clues: NMS has temporal association with recent neuroleptic (typical or atypical) or dopamine blocker exposure; malignant catatonia may arise from underlying psychiatric illness without neuroleptic trigger, and often begins with pure catatonic signs before progressing to autonomic instability. Some experts argue these are a single spectrum and that NMS is essentially drug-induced malignant catatonia. The distinction matters less than recognition — both require ICU-level care. (3) Treatment of catatonia starts with benzodiazepines — IV lorazepam 1-2 mg with response typically within minutes to hours; responsiveness to lorazepam is so characteristic that it is sometimes used as a diagnostic test. ECT (electroconvulsive therapy) is highly effective and is the treatment of choice for lorazepam-nonresponders and for malignant catatonia — can be life-saving within days. Stop any offending dopamine blockers (antipsychotics, antiemetics like metoclopramide). Supportive care: aggressive cooling for hyperthermia, IV fluids for rhabdomyolysis (target urine output 200-300 mL/hr), VTE prophylaxis (immobile patients), electrolyte correction, nutritional support (often NG tube), and airway protection. (4) Lithium toxicity is the additional complication here. Lithium levels over 1.5 mEq/L are usually toxic; above 2.5 mEq/L is severe. Toxicity presents with tremor, ataxia, confusion, hyperreflexia, seizures, and in severe cases cardiovascular collapse. Dehydration, NSAIDs, ACE-I/ARB, thiazides, and renal dysfunction can all precipitate lithium toxicity. Treatment: hold lithium, aggressive IV normal saline hydration, hemodialysis for severe toxicity (level over 4, level over 2.5 with neurologic symptoms or renal failure), and ongoing symptom monitoring. (5) Classic pitfalls: (a) treating catatonia with antipsychotics — they make it worse and can precipitate malignant catatonia or NMS. (b) Missing catatonia in a 'non-cooperative' patient, interpreting mutism and immobility as willful refusal. (c) Failing to consider anti-NMDA receptor encephalitis in a young patient (especially female) with new catatonia, psychiatric symptoms, autonomic instability, seizures, or movement disorder — workup with CSF NMDA receptor antibodies, MRI, EEG, and ovarian teratoma screen. (d) Delaying ECT when indicated — in malignant catatonia, every day of untreated illness increases mortality."
    }
  }
};
