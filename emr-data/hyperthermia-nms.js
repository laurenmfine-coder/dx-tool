// Virtual EMR Case: Hyperthermia — Neuroleptic Malignant Syndrome
// Variant: hyperthermia-nms | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Andres Villareal",
    "patientHPI": "I got my monthly shot at the psychiatry clinic two weeks ago, and they increased the dose because I was hearing voices again, but now I'm feeling really strange and different than usual.",
    "dob": "04/06/1988",
    "age": 36,
    "sex": "Male",
    "mrn": "RDX-2025-70549",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Kenneth Shaw, MD",
    "pharmacy": "Walgreens — 2400 N State Rd 7, Margate, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "2526 Cedar Blvd, Richmond, VA 23224",
    "phone": "(954) 555-4918",
    "email": "a.villareal88@email.com",
    "emergencyContact": {
      "name": "Rosa Villareal (Mother)",
      "phone": "(954) 555-4960"
    }
  },
  "problems": [
    {
      "problem": "Schizophrenia, Paranoid Type",
      "icd": "F20.0",
      "onset": "2012",
      "status": "Active",
      "notes": "Multiple hospitalizations; on depot antipsychotic; last decompensation 2023"
    },
    {
      "problem": "Tobacco Use Disorder",
      "icd": "F17.210",
      "onset": "2008",
      "status": "Active",
      "notes": "1 PPD x 16 years"
    },
    {
      "problem": "Metabolic Syndrome",
      "icd": "E88.81",
      "onset": "2022",
      "status": "Active",
      "notes": "Antipsychotic-related weight gain; elevated fasting glucose"
    },
    {
      "problem": "Obesity, Class II",
      "icd": "E66.01",
      "onset": "2020",
      "status": "Active",
      "notes": "BMI 37"
    },
    {
      "problem": "Dyslipidemia",
      "icd": "E78.5",
      "onset": "2022",
      "status": "Active",
      "notes": "Elevated TG, low HDL"
    }
  ],
  "medications": [
    {
      "name": "Haloperidol decanoate 200mg IM monthly",
      "sig": "200mg intramuscular injection every 4 weeks at clinic",
      "prescriber": "Dr. Maria Santos, MD (Psychiatry)",
      "start": "06/2023",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Benztropine 1mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Santos",
      "start": "06/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Shaw",
      "start": "03/2023",
      "refills": 2,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Olanzapine",
      "type": "Drug",
      "reaction": "Excessive weight gain (40 lbs in 6 months), glucose >200",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/06/2025",
      "bp": "128/82",
      "hr": 84,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "248 lbs",
      "ht": "5'10\"",
      "bmi": 35.6,
      "setting": "PCP Office"
    },
    {
      "date": "07/22/2024",
      "bp": "134/86",
      "hr": 80,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "244 lbs",
      "ht": "5'10\"",
      "bmi": 35,
      "setting": "PCP Office"
    },
    {
      "date": "01/15/2024",
      "bp": "130/84",
      "hr": 78,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "240 lbs",
      "ht": "5'10\"",
      "bmi": 34.4,
      "setting": "Psych Clinic"
    },
    {
      "date": "07/10/2023",
      "bp": "126/80",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "236 lbs",
      "ht": "5'10\"",
      "bmi": 33.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/06/2025",
      "type": "Primary Care",
      "provider": "Dr. Kenneth Shaw, MD",
      "cc": "Follow-up: metabolic monitoring on antipsychotic; weight management",
      "hpi": "36-year-old male with paranoid schizophrenia on haloperidol decanoate for routine metabolic monitoring. Received most recent depot injection 2 weeks ago at psychiatry clinic; dose was recently increased from 150mg to 200mg monthly due to breakthrough auditory hallucinations. Currently denies hallucinations but reports new onset of muscle stiffness, particularly in neck and shoulders, since the dose increase. Also reports mild difficulty swallowing and feeling 'slower.' Weight up 4 lbs since last visit. Mother who accompanied him notes he seems more rigid when walking.",
      "exam": "General: Overweight male, flat affect, psychomotor slowing. HEENT: WNL. Neck: Increased tone, mild cogwheel rigidity on passive ROM. CV: RRR, tachycardic for baseline (HR 84). Lungs: CTAB. Abdomen: Obese, soft, NT. Neuro: A&O x3; increased muscle tone bilateral upper and lower extremities; cogwheel rigidity at wrists; no tremor at rest; gait mildly shuffling. Skin: Dry, no diaphoresis currently.",
      "assessment": "1. Extrapyramidal symptoms — new onset after haloperidol dose increase; mild rigidity, cogwheel, psychomotor slowing; need to monitor closely for NMS given recent dose increase\n2. Schizophrenia — auditory hallucinations improved on higher dose\n3. Metabolic syndrome — weight gain progressive; glucose borderline\n4. Dysphagia — new; may be EPS-related",
      "plan": "1. Increase benztropine 1mg → 2mg BID for EPS\n2. HIGH ALERT: Educate patient and mother on NMS warning signs — fever >101°F, severe rigidity, altered mental status, diaphoresis, autonomic instability → ED IMMEDIATELY\n3. Contact psychiatry (Dr. Santos) regarding EPS; may need dose reduction or switch\n4. Fasting glucose and lipid panel ordered\n5. Swallowing assessment if dysphagia persists\n6. RTC 2 weeks for EPS recheck; sooner if any NMS red flags"
    },
    {
      "id": "V002",
      "date": "07/22/2024",
      "type": "Primary Care",
      "provider": "Dr. Kenneth Shaw, MD",
      "cc": "Annual metabolic screening on antipsychotic",
      "hpi": "36-year-old male for annual metabolic monitoring per antipsychotic guidelines. On haloperidol decanoate 150mg monthly — stable. No EPS. Weight up 4 lbs over 6 months. Fasting glucose 112 (previously 106). TG elevated. No chest pain, dyspnea, or abdominal symptoms.",
      "exam": "General: Obese male, NAD. CV: RRR. Abdomen: Obese, NT. Ext: No edema.",
      "assessment": "1. Metabolic syndrome — worsening; weight gain, prediabetic glucose, elevated TG\n2. Schizophrenia — stable on haloperidol decanoate",
      "plan": "1. Continue metformin 500mg BID\n2. Dietary counseling; exercise encouraged\n3. Consider statin if LDL elevated\n4. RTC 6 months with metabolic labs"
    },
    {
      "id": "V003",
      "date": "01/15/2024",
      "type": "Specialist",
      "provider": "Dr. Maria Santos, MD (Psychiatry)",
      "cc": "Psychiatric follow-up: schizophrenia maintenance",
      "hpi": "35-year-old male with paranoid schizophrenia. Stable on haloperidol decanoate 150mg monthly x 7 months. No psychotic symptoms. Adherent to depot injections. No EPS. Denies SI/HI. Mother reports he is attending day program and managing ADLs well.",
      "exam": "Psych: Appearance — casually dressed, groomed. Behavior — cooperative, flat affect. Speech — low volume, normal rate. Thought process — linear, goal-directed. Thought content — no delusions, no SI/HI. Perception — denies AH/VH. Cognition — A&O x3. Insight/judgment — fair.",
      "assessment": "1. Schizophrenia, paranoid type — stable on current regimen\n2. No EPS",
      "plan": "1. Continue haloperidol decanoate 150mg IM q4 weeks\n2. Continue benztropine 1mg BID prophylactically\n3. RTC monthly for injection"
    }
  ],
  "labs": [
    {
      "date": "01/06/2025",
      "time": "09:00",
      "orderedBy": "Dr. Kenneth Shaw, MD",
      "collected": "01/06/2025 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-070549",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "116",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "18",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.1",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "103",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "25",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "ALT (SGPT)",
              "value": "34",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST (SGOT)",
              "value": "30",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            {
              "test": "Total Cholesterol",
              "value": "218",
              "unit": "mg/dL",
              "range": "<200",
              "flag": "H"
            },
            {
              "test": "LDL Cholesterol",
              "value": "128",
              "unit": "mg/dL",
              "range": "<130",
              "flag": ""
            },
            {
              "test": "HDL Cholesterol",
              "value": "32",
              "unit": "mg/dL",
              "range": ">40",
              "flag": "L"
            },
            {
              "test": "Triglycerides",
              "value": "288",
              "unit": "mg/dL",
              "range": "<150",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "8.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "14.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "44.6",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "252",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/2023",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2023-70549",
      "status": "FINAL",
      "orderedBy": "Dr. Maria Santos, MD (Psychiatry)",
      "readBy": "Dr. Robert Anderson, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "35M with schizophrenia. Baseline imaging prior to starting depot antipsychotic.",
      "technique": "Non-contrast CT head, axial.",
      "findings": "Brain parenchyma: No mass, hemorrhage, or acute infarct. Normal gray-white differentiation.\\n\\nVentricles: Normal size and configuration. No hydrocephalus.\\n\\nExtra-axial spaces: Normal.\\n\\nBone: No fracture. Sinuses clear.",
      "impression": "1. Normal CT head without contrast.",
      "dictated": "06/15/2023 10:00",
      "verified": "06/15/2023 12:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/22/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-358",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2024-25)",
      "date": "11/05/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-738",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Hepatitis B — Series complete",
      "date": "2004",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: T2DM, hypertension, alive at 60",
    "Father: Schizophrenia (untreated), alcohol use disorder, deceased at 52 (liver cirrhosis)",
    "Brother: Bipolar disorder, alive at 33",
    "Maternal grandmother: T2DM, deceased at 70"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Unemployed; attends community mental health day program"
    ],
    [
      "Marital",
      "Single"
    ],
    [
      "Tobacco",
      "Current smoker — 1 PPD x 16 years (16 pack-years)"
    ],
    [
      "Alcohol",
      "Denies current use; history of binge drinking in early 20s"
    ],
    [
      "Drugs",
      "Denies current; remote cannabis use"
    ],
    [
      "Exercise",
      "Sedentary; walks to day program (10 min)"
    ],
    [
      "Housing",
      "Lives with mother in apartment"
    ],
    [
      "Safety",
      "Denies SI/HI; no weapons access; mother supervises medications"
    ],
    [
      "Advance Directive",
      "None; mother is informal decision-maker"
    ]
  ],
  "meta": {
    "caseId": "hyperthermia-nms",
    "diagnosis": "Neuroleptic Malignant Syndrome (NMS)",
    "acuity": 1,
    "presentation": "Environmental Emergency",
    "category": "toxicologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Andres appears anxious and confused, with a flat affect and somewhat rigid posture. He is cooperative but speaks slowly and seems to have difficulty organizing his thoughts, appearing genuinely distressed by his worsening symptoms. He provides information willingly but sometimes needs questions repeated or clarified.",
    "interviewQuestions": [
      "Can you describe exactly what you mean by feeling 'strange and different'?",
      "Have you noticed any muscle stiffness or rigidity in your body?",
      "Are you experiencing any tremors or involuntary movements?",
      "Have you had any fever or felt overheated recently?",
      "How has your sweating been - more than usual?",
      "Have you noticed any changes in your mental clarity or confusion?",
      "Are you having trouble swallowing or speaking clearly?",
      "Have you experienced any nausea, vomiting, or changes in appetite?",
      "When exactly did you receive your last haloperidol injection and at what dose?",
      "Have you been taking your benztropine as prescribed?",
      "Have you missed any doses of your regular medications recently?",
      "Have you been exposed to hot weather or done any strenuous activity?",
      "Have you ever experienced symptoms like this before after medication changes?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble thinking clearly right now. Could you ask that again?",
      "onset": "It started about 3-4 days ago, maybe Tuesday or Wednesday. At first I just felt tired and achy, but it's gotten worse each day.",
      "character": "My whole body feels stiff and heavy, like I'm moving through thick mud. My muscles feel tight and I can't seem to relax them.",
      "location": "It's mostly in my arms and legs, but my neck and jaw feel tight too. Sometimes my whole body just feels locked up.",
      "severity": "Maybe a 7 out of 10. I can barely do simple things like getting dressed or making food. I feel like I'm trapped in my own body.",
      "aggravating": "Moving around seems to make the stiffness worse, and I feel worse when I try to do things quickly or when I'm stressed.",
      "relieving": "Nothing really helps much. Even when I try to rest or stretch, the muscles stay tight. The benztropine doesn't seem to be working like it usually does.",
      "associated": "I've been sweating a lot even when it's not hot, and I feel confused and foggy. Sometimes I feel nauseous and my heart feels like it's racing.",
      "denies": "I haven't had any chest pain or trouble breathing. No headache or vision problems. I'm not hearing voices right now like I was before the shot.",
      "history": "No, I've never felt anything like this before. I've had some side effects from medications in the past, but nothing this severe or scary.",
      "medications": "Haloperidol decanoate 200mg IM monthly; Benztropine 1mg BID; Metformin 500mg BID",
      "allergies": "Olanzapine",
      "family": "My father had schizophrenia but never got proper treatment. My mother has diabetes and high blood pressure. My brother has bipolar disorder.",
      "social": "I'm unemployed but go to a day program for people with mental health issues. I smoke about a pack a day. I don't drink alcohol anymore, used to have problems with it when I was younger."
    },
    "examManeuvers": [
      "General appearance and mental status assessment",
      "Temperature measurement and assessment for hyperthermia",
      "Assessment of muscle rigidity (lead pipe rigidity)",
      "Evaluation for tremor and extrapyramidal symptoms",
      "Assessment of diaphoresis and autonomic instability",
      "Cardiovascular examination including heart rate and rhythm",
      "Neurological examination including reflexes and clonus",
      "Assessment of speech and swallowing function",
      "Evaluation of level of consciousness and cognitive function"
    ],
    "examFindings": {
      "General appearance and mental status assessment": "Patient appears acutely ill with altered mental status, diaphoretic, and demonstrates psychomotor slowing with delayed responses",
      "Temperature measurement and assessment for hyperthermia": "Temperature elevated to 101.8°F (38.8°C), patient reports feeling hot and is visibly diaphoretic",
      "Assessment of muscle rigidity (lead pipe rigidity)": "Severe generalized muscle rigidity present, consistent with lead pipe rigidity in all extremities, particularly pronounced in neck and trunk",
      "Evaluation for tremor and extrapyramidal symptoms": "Coarse tremor present in upper extremities, cogwheel rigidity noted, bradykinesia evident in voluntary movements",
      "Assessment of diaphoresis and autonomic instability": "Profuse diaphoresis present, skin flushed and warm, blood pressure elevated to 148/94 mmHg",
      "Cardiovascular examination including heart rate and rhythm": "Tachycardia present with heart rate of 112 bpm, regular rhythm, no murmurs appreciated",
      "Neurological examination including reflexes and clonus": "Hyperreflexia present bilaterally, sustained clonus elicited at ankles, muscle tone markedly increased throughout",
      "Assessment of speech and swallowing function": "Speech is slow and hypophonic with mild dysarthria, patient reports some difficulty swallowing",
      "Evaluation of level of consciousness and cognitive function": "Alert but confused and disoriented to time, difficulty with attention and concentration, responds appropriately to commands but with delay"
    },
    "ddxTargets": [
      "Neuroleptic Malignant Syndrome (correct diagnosis)",
      "Serotonin Syndrome",
      "Malignant Hyperthermia",
      "Meningitis/Encephalitis",
      "Sepsis with altered mental status",
      "Acute dystonic reaction",
      "Heat stroke"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on psychiatric history and attributing symptoms to worsening psychosis or typical antipsychotic side effects rather than recognizing life-threatening NMS",
      "prematureClosure": "May jump to simple extrapyramidal side effects given recent dose increase without fully evaluating the constellation of fever, rigidity, and altered mental status that defines NMS",
      "availabilityBias": "Common extrapyramidal side effects from antipsychotics may overshadow recognition of rare but serious NMS, especially if clinician has recently seen typical medication side effects"
    },
    "coachPrompts": {
      "phase2": "This patient recently had an increase in his haloperidol dose and is now experiencing concerning symptoms. What specific constellation of findings would help you differentiate between common antipsychotic side effects and more serious complications? Think about the timeline and severity of his presentation.",
      "phase5": "You've identified key findings of hyperthermia, severe rigidity, altered mental status, and autonomic instability in a patient on high-dose haloperidol. How do these findings fit together, and what does this suggest about the urgency of this presentation? What laboratory studies might help confirm your suspicions?",
      "finalDebrief": "NMS is a rare but life-threatening complication of antipsychotic medications, particularly with high-potency agents like haloperidol and especially after dose increases. The classic tetrad of hyperthermia, muscle rigidity, altered mental status, and autonomic dysfunction distinguishes it from common extrapyramidal side effects. Early recognition is crucial as mortality can be 10-20% without prompt treatment including discontinuation of the offending agent and supportive care.",
      "final": "Diagnosis: neuroleptic malignant syndrome (NMS) in a patient on an antipsychotic. Key learning: (1) NMS is an idiosyncratic reaction to dopamine D2 receptor blockade, classically from typical antipsychotics (haloperidol, fluphenazine) but also from atypicals (risperidone, olanzapine) and abrupt dopaminergic withdrawal in Parkinson disease. The tetrad is fever, rigidity (lead-pipe, generalized), autonomic instability (labile BP, tachycardia, diaphoresis), and altered mental status. Onset is typically over hours to days after initiation or dose increase. Labs show markedly elevated CK (often over 1000, sometimes over 10,000), leukocytosis, and metabolic acidosis; complications include rhabdomyolysis, AKI, aspiration pneumonia, DIC, and cardiovascular collapse. (2) The critical differential is serotonin syndrome, which presents similarly but has key distinguishing features: NMS has 'lead-pipe' rigidity (sustained, generalized) while serotonin syndrome has hyperreflexia, clonus (especially lower extremity), and tremor. Serotonin syndrome onset is faster (within 24 hours of serotonergic agent initiation or interaction) and often involves GI symptoms (diarrhea, nausea). Other mimics: malignant hyperthermia (triggered by volatile anesthetics or succinylcholine, treated with dantrolene), anticholinergic toxicity (dry, hot skin without rigidity), sympathomimetic toxicity (cocaine, amphetamines), and heat stroke (exertional or environmental, core over 40 C, altered mental status — but no rigidity or drug trigger). (3) Management is supportive and specific. STOP the offending antipsychotic immediately. Aggressive cooling (evaporative, cold IV fluids, ice packs to groin/axillae), airway protection if obtunded, and ICU admission. IV fluids are essential — patients are often profoundly dehydrated and at risk for pigment nephropathy from rhabdomyolysis (target urine output 200-300 mL/hr with bicarbonate-containing fluids if CK is very high). Specific therapies: dantrolene 1-2.5 mg/kg IV (direct muscle relaxant) for severe rigidity and hyperthermia; bromocriptine 2.5 mg PO/NG q8h (dopamine agonist); amantadine as alternative dopaminergic. Benzodiazepines for agitation and for mild cases. (4) Rechallenge. After recovery (usually 7-14 days), antipsychotics can often be cautiously restarted if clinically essential, preferring a lower-potency atypical agent, starting at low dose, and monitoring closely. Wait at least 2 weeks after full recovery, discuss risks with the patient, and document the plan. Recurrence risk is real but not inevitable — about 30% recur on rechallenge. (5) Classic pitfalls: (a) attributing fever and altered mental status to infection and missing the medication history — always review every medication in a febrile, encephalopathic patient, especially antipsychotics, antiemetics (metoclopramide, prochlorperazine), and serotonergic drugs. (b) Using typical antipsychotics to treat the agitation of presumed delirium without recognizing that they can cause NMS. (c) Not stopping all dopamine blockers — including antiemetics like metoclopramide and promethazine. (d) Missing the Parkinson disease patient who has abruptly discontinued levodopa — this is 'dopaminergic withdrawal NMS' and requires urgent restoration of their dopaminergic regimen."
    }
  }
};
