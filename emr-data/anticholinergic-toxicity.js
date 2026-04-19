// Virtual EMR Case: Anticholinergic Toxicity
// Variant: anticholinergic-toxicity | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Derek Hanson",
  "patientHPI": "I haven't been able to have a bowel movement in four days even though I'm taking the stool softeners, and I've been taking a lot of those pink sleep pills at night because I can't sleep - maybe three of them most nights.",
    "dob": "05/14/1998",
    "age": 26,
    "sex": "Male",
    "mrn": "RDX-2025-71842",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL — HMO",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "CVS Pharmacy — 3100 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "5881 Peachtree Rd, Denver, CO 80212",
    "phone": "(954) 555-9281",
    "email": "d.hanson98@email.com",
    "emergencyContact": {
      "name": "Patricia Hanson (Mother)",
      "phone": "(954) 555-9284"
    }
  },
  "problems": [
    {
      "problem": "Schizophrenia — Paranoid Type",
      "icd": "F20.0",
      "onset": "2020",
      "status": "Active",
      "notes": "Diagnosed at age 22; multiple medication trials; currently on olanzapine + benztropine; partially adherent; 2 prior psychiatric hospitalizations"
    },
    {
      "problem": "Insomnia",
      "icd": "G47.00",
      "onset": "2021",
      "status": "Active",
      "notes": "Uses OTC diphenhydramine frequently; has been counseled to limit use"
    },
    {
      "problem": "Obesity",
      "icd": "E66.01",
      "onset": "2022",
      "status": "Active",
      "notes": "BMI 34; weight gain attributed to olanzapine; diet/exercise counseling given"
    },
    {
      "problem": "Constipation — Chronic",
      "icd": "K59.00",
      "onset": "2023",
      "status": "Active",
      "notes": "Likely medication-related (olanzapine, benztropine, diphenhydramine); on docusate/senna"
    }
  ],
  "medications": [
    {
      "name": "Olanzapine 20mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Patel (Psychiatry)",
      "start": "06/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Benztropine 2mg BID",
      "sig": "Take 1 tablet by mouth twice daily for EPS prevention",
      "prescriber": "Dr. Patel (Psychiatry)",
      "start": "07/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Diphenhydramine 50mg QHS PRN",
      "sig": "Take 1-2 capsules by mouth at bedtime as needed for insomnia",
      "prescriber": "OTC — self-prescribed",
      "start": "2022",
      "refills": 0,
      "status": "Active — patient taking 100-150mg nightly (exceeding recommended dose)"
    },
    {
      "name": "Docusate Sodium 100mg BID",
      "sig": "Take 1 capsule by mouth twice daily",
      "prescriber": "Dr. Whitfield",
      "start": "01/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Senna 8.6mg QHS PRN",
      "sig": "Take 1-2 tablets by mouth at bedtime as needed for constipation",
      "prescriber": "Dr. Whitfield",
      "start": "01/2024",
      "refills": 2,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Haloperidol",
      "type": "Drug",
      "reaction": "Severe akathisia and dystonic reaction (oculogyric crisis)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/21/2025",
      "bp": "148/92",
      "hr": 128,
      "rr": 20,
      "temp": "101.4°F",
      "spo2": "97%",
      "wt": "242 lbs",
      "ht": "5'11\"",
      "bmi": 33.7,
      "setting": "ED"
    },
    {
      "date": "11/12/2024",
      "bp": "132/84",
      "hr": 82,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "238 lbs",
      "ht": "5'11\"",
      "bmi": 33.2,
      "setting": "PCP Office"
    },
    {
      "date": "05/08/2024",
      "bp": "128/80",
      "hr": 78,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "230 lbs",
      "ht": "5'11\"",
      "bmi": 32.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/12/2024",
      "type": "Primary Care",
      "provider": "Dr. James Whitfield, MD",
      "cc": "Follow-up: chronic constipation, weight management, medication check",
      "hpi": "26-year-old male with schizophrenia presenting for routine follow-up. Reports worsening constipation — no BM in 4 days despite docusate and senna. Continues taking diphenhydramine 'a lot' for sleep — admits to 3 capsules (150mg) most nights. Has not seen psychiatrist in 2 months. States he takes olanzapine and benztropine 'most of the time.' No auditory hallucinations currently. Sleep poor despite diphenhydramine. Weight up 8 lbs since last visit.",
      "exam": "General: Overweight male, flat affect, poor eye contact but cooperative. HEENT: Pupils 5mm, sluggish reaction (likely anticholinergic effect). CV: RRR, no murmur. Lungs: CTA. Abdomen: Mildly distended, decreased bowel sounds, nontender. Skin: Dry. Psych: Alert, oriented, linear thought process, no overt psychosis, flat affect.",
      "assessment": "1. Chronic constipation — worsening; likely multifactorial (olanzapine + benztropine + diphenhydramine — cumulative anticholinergic burden)\n2. Excessive OTC diphenhydramine use — 100-150mg nightly\n3. Schizophrenia — stable on current regimen, needs psychiatry follow-up\n4. Obesity — progressive weight gain on olanzapine",
      "plan": "1. Added MiraLAX 17g daily for constipation\n2. STRONGLY counseled to reduce diphenhydramine — maximum 50mg/night; discussed trazodone alternative with psychiatry\n3. Contacted Dr. Patel's office to schedule follow-up\n4. Metabolic screening: fasting glucose, lipid panel ordered\n5. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "08/20/2024",
      "type": "Specialist",
      "provider": "Dr. Anita Patel, MD (Psychiatry)",
      "cc": "Medication management — schizophrenia",
      "hpi": "26-year-old male with paranoid schizophrenia established on olanzapine 20mg QHS + benztropine 2mg BID. Reports improved positive symptoms — no auditory hallucinations or paranoid ideation in 2 months. Sleep still poor — using diphenhydramine. Denies suicidal or homicidal ideation. Living independently in apartment. Working part-time at warehouse.",
      "exam": "Psych: Casually dressed, hygiene adequate. Speech: normal rate and volume. Mood: 'okay.' Affect: blunted. Thought process: linear, goal-directed. No AH/VH. No paranoid ideation. No suicidal/homicidal ideation. Insight: fair. Judgment: fair.",
      "assessment": "1. Schizophrenia — paranoid type; positive symptoms well-controlled on olanzapine 20mg\n2. Insomnia — persistent; diphenhydramine use concerning for anticholinergic load\n3. EPS prophylaxis with benztropine — no current EPS noted; could consider tapering",
      "plan": "1. Continue olanzapine 20mg QHS\n2. Continue benztropine 2mg BID — discussed taper trial at next visit\n3. Consider trazodone 50mg QHS for insomnia to replace diphenhydramine\n4. Patient declined trazodone change at this time\n5. Metabolic monitoring per APA guidelines\n6. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "02/21/2025",
      "time": "19:12",
      "orderedBy": "Dr. Kevin Tran, MD (ED)",
      "collected": "02/21/2025 18:55",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-096218",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "142", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "28", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.4", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "Sodium", "value": "146", "unit": "mEq/L", "range": "136-145", "flag": "H" },
            { "test": "Potassium", "value": "3.8", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "108", "unit": "mEq/L", "range": "98-106", "flag": "H" },
            { "test": "CO2 (Bicarbonate)", "value": "24", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.6", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "AST (SGOT)", "value": "38", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "ALT (SGPT)", "value": "42", "unit": "U/L", "range": "7-56", "flag": "" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "11.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "15.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "46.8", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelets", "value": "224", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "CREATINE KINASE",
          "results": [
            { "test": "CK Total", "value": "280", "unit": "U/L", "range": "30-200", "flag": "H" }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            { "test": "Specific Gravity", "value": "1.028", "unit": "", "range": "1.005-1.030", "flag": "" },
            { "test": "pH", "value": "5.5", "unit": "", "range": "5.0-8.0", "flag": "" },
            { "test": "Ketones", "value": "Trace", "unit": "", "range": "Negative", "flag": "" },
            { "test": "WBC", "value": "0-2", "unit": "/HPF", "range": "0-5", "flag": "" },
            { "test": "Bacteria", "value": "None", "unit": "", "range": "None", "flag": "" }
          ]
        },
        {
          "name": "URINE DRUG SCREEN",
          "results": [
            { "test": "Amphetamines", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Benzodiazepines", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Cocaine", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Opiates", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "THC", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "PCP", "value": "Negative", "unit": "", "range": "Negative", "flag": "" }
          ]
        }
      ]
    },
    {
      "date": "11/18/2024",
      "time": "09:00",
      "orderedBy": "Dr. James Whitfield, MD",
      "collected": "11/18/2024 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-187412",
      "status": "Final",
      "specimenType": "Serum",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "METABOLIC SCREENING (FASTING)",
          "results": [
            { "test": "Fasting Glucose", "value": "108", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "HbA1c", "value": "5.9", "unit": "%", "range": "4.0-5.6", "flag": "H" },
            { "test": "Total Cholesterol", "value": "224", "unit": "mg/dL", "range": "<200", "flag": "H" },
            { "test": "LDL", "value": "142", "unit": "mg/dL", "range": "<100", "flag": "H" },
            { "test": "HDL", "value": "36", "unit": "mg/dL", "range": ">40", "flag": "L" },
            { "test": "Triglycerides", "value": "230", "unit": "mg/dL", "range": "<150", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/21/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-09482",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "26-year-old male with acute confusion, agitation, tachycardia, mydriasis — r/o intracranial pathology",
      "technique": "Non-contrast axial CT images of the head obtained.",
      "findings": "BRAIN PARENCHYMA: No acute intracranial hemorrhage, mass, or midline shift. Normal gray-white matter differentiation. No acute territorial infarction.\n\nVENTRICLES: Normal size and configuration. No hydrocephalus.\n\nEXTRA-AXIAL SPACES: No subdural or epidural collection.\n\nBONY STRUCTURES: No fracture.",
      "impression": "1. No acute intracranial pathology\n2. Clinical presentation (mydriasis, tachycardia, agitation, dry skin, urinary retention) more consistent with anticholinergic toxidrome — correlate clinically",
      "dictated": "02/21/2025 19:30",
      "verified": "02/21/2025 19:38"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL841K", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Moderna, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "CV892T", "mfr": "Moderna" },
    { "vaccine": "Tdap (Adacel)", "date": "05/2023", "site": "Left deltoid IM", "lot": "TA281R", "mfr": "Sanofi" }
  ],
  "familyHistory": [
    "Mother (age 54): Major depressive disorder, hypothyroidism",
    "Father (age 56): Alcohol use disorder — in recovery x 10 years; hypertension",
    "Maternal aunt (age 48): Bipolar disorder type I",
    "Paternal grandfather (age 82): Dementia, CAD",
    "Brother (age 29): No psychiatric history; healthy"
  ],
  "socialHistory": [
    ["Occupation", "Part-time warehouse associate; works 20 hrs/week"],
    ["Marital", "Single; lives alone in apartment"],
    ["Tobacco", "Cigarettes — 0.5 PPD x 4 years"],
    ["Alcohol", "Occasional — 2-3 beers on weekends"],
    ["Drugs", "Cannabis — 3-4x/week for sleep; denies other substances"],
    ["Exercise", "Minimal — sedentary lifestyle"],
    ["Housing", "Apartment; subsidized housing program"],
    ["Safety", "No firearms; occasional SI in past (2021) but denies current; safety plan in place"],
    ["Advance Directive", "None"]
  ],
  "meta": {
    "caseId": "anticholinergic-toxicity",
    "diagnosis": "Anticholinergic Toxidrome — Cumulative Anticholinergic Burden (Benztropine + Diphenhydramine Excess + Olanzapine)",
    "acuity": 2,
    "presentation": "Psychiatric Emergency",
    "category": "toxicologic"
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
        "General appearance and level of distress": "Clinical finding consistent with Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden. Document specifically what you observe."
    },
    "ddxTargets": [
        "Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Derek Hanson's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Anticholinergic Toxidrome \u2014 Cumulative Anticholinergic Burden (Benztropine + Diphenhydramine Excess + Olanzapine). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Derek appears confused, agitated, and restless with visible dry mouth and flushed skin. He seems disoriented to time and has difficulty focusing on questions, often giving rambling or tangential responses. While cooperative, his altered mental status makes him an unreliable historian who may not fully comprehend the severity of his condition.",
    "interviewQuestions": [
        "Can you tell me exactly how many diphenhydramine tablets you've been taking each night?",
        "When did you first notice feeling confused or having trouble thinking clearly?",
        "Have you been experiencing dry mouth, blurred vision, or difficulty urinating?",
        "When was your last bowel movement and have you increased any medications for constipation?",
        "Are you seeing or hearing things that others don't see or hear?",
        "Have you been taking your psychiatric medications as prescribed?",
        "Do you feel hot or have you been sweating less than usual?",
        "Have you had any falls, accidents, or injuries recently due to confusion?",
        "Who brought you to the hospital today and were they concerned about your behavior?",
        "Have you taken any over-the-counter medications or changed doses recently?",
        "Are you having trouble remembering things from today or yesterday?",
        "Have you been picking at your skin or clothes, or feeling restless?",
        "Do you know what day it is and where you are right now?"
    ],
    "patientResponses": {
        "default": "I'm sorry, what was the question again? My mind feels kind of foggy right now and it's hard to focus.",
        "onset": "I think it started maybe two or three days ago... or was it yesterday? Time feels weird. I just started feeling really confused and hot, and my mouth got really dry.",
        "character": "It's like my brain is wrapped in cotton - everything feels fuzzy and far away. My thoughts keep jumping around and I can't concentrate on anything.",
        "location": "It's mostly in my head - like confusion and feeling disconnected. But my whole body feels hot and uncomfortable too.",
        "severity": "Maybe a 7 or 8 out of 10? It's really scary not being able to think straight, and I feel like something bad might happen to me.",
        "aggravating": "Being in bright lights makes it worse, and when people talk fast I get more confused. Moving around makes me feel dizzy.",
        "relieving": "Nothing really helps. I tried to sleep but I keep having weird dreams and waking up more confused.",
        "associated": "Yeah, my mouth is really dry no matter how much water I drink, and my vision is blurry. I can't pee very well either, and I feel really hot.",
        "denies": "No chest pain, no shortness of breath, no nausea or vomiting. I'm not hearing voices from my schizophrenia right now.",
        "history": "I've never felt like this before. Even when my schizophrenia was bad, this is different - more physical and confused.",
        "medications": "Olanzapine 20mg QHS; Benztropine 2mg BID; Diphenhydramine 50mg QHS PRN; Docusate Sodium 100mg BID; Senna 8.6mg QHS PRN",
        "allergies": "Haloperidol",
        "family": "My mom has depression and my aunt has bipolar disorder, but nobody in my family has had anything like this confusion thing.",
        "social": "I work part-time at a warehouse, about 20 hours a week. I smoke about half a pack a day and drink a few beers on weekends. I use cannabis a few times a week to help me sleep."
    },
    "examManeuvers": [
        "Mental status examination and orientation assessment",
        "Pupillary examination and light reflex testing",
        "Skin examination for temperature, moisture, and flushing",
        "Mucous membrane examination for dryness",
        "Cardiac examination and rhythm assessment",
        "Neurological examination including reflexes and tone",
        "Abdominal examination for bowel sounds and distension",
        "Assessment for psychomotor agitation and restlessness",
        "Speech pattern and thought process evaluation",
        "Bladder palpation and urinary retention assessment"
    ],
    "examFindings": {
        "Mental status examination and orientation assessment": "Disoriented to time and place, knows his name but unsure of date. MMSE significantly impaired with attention and memory deficits. Confused and easily distractible.",
        "Pupillary examination and light reflex testing": "Pupils are dilated (6mm bilaterally) and sluggishly reactive to light. No accommodation present.",
        "Skin examination for temperature, moisture, and flushing": "Skin is hot, dry, and flushed throughout. No diaphoresis present despite elevated temperature.",
        "Mucous membrane examination for dryness": "Severe dry mouth with sticky saliva, dry conjunctivae. Mucous membranes appear dehydrated.",
        "Cardiac examination and rhythm assessment": "Tachycardic at 128 bpm, regular rhythm. No murmurs appreciated. Elevated blood pressure at 148/92.",
        "Neurological examination including reflexes and tone": "Hyperreflexia present. Mild tremor in hands. Muscle tone slightly increased. No focal neurological deficits.",
        "Abdominal examination for bowel sounds and distension": "Hypoactive bowel sounds, mild abdominal distension. No masses or tenderness. Consistent with constipation.",
        "Assessment for psychomotor agitation and restlessness": "Restless, fidgety, picking at bedsheets and clothing. Unable to remain still during examination.",
        "Speech pattern and thought process evaluation": "Speech is rapid and pressured. Thought process is tangential and disorganized. Difficulty maintaining coherent conversation.",
        "Bladder palpation and urinary retention assessment": "Palpable bladder, patient reports difficulty initiating urination and decreased urine output."
    },
    "ddxTargets": [
        "Anticholinergic Toxidrome — Cumulative Anticholinergic Burden (Benztropine + Diphenhydramine Excess + Olanzapine) (correct diagnosis)",
        "Neuroleptic Malignant Syndrome",
        "Serotonin Syndrome",
        "Bacterial Meningitis",
        "Sepsis with Encephalopathy",
        "Acute Psychotic Episode",
        "Substance Intoxication (Stimulants)"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on psychiatric history and dismissing physical symptoms as purely psychiatric, missing the toxicologic cause of altered mental status",
        "prematureClosure": "May prematurely diagnose psychiatric exacerbation without considering medication interactions and cumulative anticholinergic effects from multiple agents",
        "availabilityBias": "Recent cases of psychiatric emergencies might overshadow consideration of toxidromes, especially when patient has known psychiatric illness"
    },
    "coachPrompts": {
        "phase2": "Before you interview Derek, consider his medication regimen carefully. What do you notice about the anticholinergic properties of his medications? How might his recent increased use of diphenhydramine interact with his existing psychiatric medications?",
        "phase5": "You've gathered excellent history and physical findings. Let's think systematically about toxidromes - what classic constellation of findings are you seeing? How does the 'hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter' mnemonic apply here?",
        "finalDebrief": "This case beautifully illustrates cumulative anticholinergic toxicity. Derek's baseline anticholinergic load from olanzapine and benztropine, combined with excessive diphenhydramine use, created a perfect storm. How will this change your approach to patients with psychiatric conditions who present with altered mental status?"
    }
}
};
