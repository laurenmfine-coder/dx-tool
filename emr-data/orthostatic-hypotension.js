// Virtual EMR Case: Orthostatic Hypotension (Medication-Induced Polypharmacy)
// Variant: orthostatic-hypotension | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Reginald Holloway",
    "patientHPI": "I was sitting in my recliner watching TV when the doorbell rang, so I got up to answer it and suddenly felt really dizzy and lightheaded. Next thing I knew, I was on the floor - thankfully it was just carpet so I didn't get hurt. This has happened a couple times before when I stand up too fast, and it's starting to worry me.",
    "dob": "01/24/1940",
    "age": 86,
    "sex": "Male",
    "mrn": "RDX-2025-43014",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B with Medigap Plan F",
    "pcp": "Dr. Amanda Liu, MD",
    "pharmacy": "CVS Pharmacy — 1500 E Hallandale Beach Blvd, Hallandale Beach, FL",
    "language": "English",
    "race": "Black (African American)",
    "address": "619 Hollyhock Rd, Cleveland, OH 44110",
    "phone": "(954) 555-6128",
    "email": "r.holloway40@email.com",
    "emergencyContact": {
      "name": "Barbara Holloway (Wife)",
      "phone": "(954) 555-6142"
    },
    "chiefComplaint": "Passed out standing up"
  },
  "problems": [
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "1988",
      "status": "Active",
      "notes": "On 3-drug regimen: amlodipine, lisinopril, and doxazosin; currently over-treated with SBPs running 110-118 at home"
    },
    {
      "problem": "Benign Prostatic Hyperplasia",
      "icd": "N40.0",
      "onset": "2010",
      "status": "Active",
      "notes": "On doxazosin 4mg (dual benefit for HTN/BPH); nocturia 3-4x/night"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2002",
      "status": "Active",
      "notes": "On glipizide and metformin; A1c 6.4 — may be overtreated given age; recurrent mild hypoglycemia"
    },
    {
      "problem": "Parkinson Disease — Early Stage",
      "icd": "G20.A1",
      "onset": "2024",
      "status": "Active",
      "notes": "Mild resting tremor right hand; started on carbidopa-levodopa 08/2024; levodopa contributes to orthostatic hypotension"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3a",
      "icd": "N18.31",
      "onset": "2019",
      "status": "Active",
      "notes": "eGFR 52; hypertensive and diabetic nephropathy"
    },
    {
      "problem": "Depression — Late-Life Onset",
      "icd": "F32.1",
      "onset": "2023",
      "status": "Active",
      "notes": "Started after Parkinson diagnosis; on mirtazapine 15mg QHS (also for appetite and sleep)"
    },
    {
      "problem": "Recurrent Falls",
      "icd": "R29.6",
      "onset": "2025",
      "status": "Active",
      "notes": "3 falls in past 6 months; no fractures; multifactorial — orthostatic hypotension, Parkinson gait, polypharmacy"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Liu",
      "start": "04/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Liu",
      "start": "06/1995",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Doxazosin 4mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Liu",
      "start": "08/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Liu",
      "start": "06/2004",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Glipizide 5mg BID",
      "sig": "Take 1 tablet by mouth twice daily before meals",
      "prescriber": "Dr. Liu",
      "start": "01/2010",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Carbidopa-Levodopa 25/100mg TID",
      "sig": "Take 1 tablet by mouth three times daily",
      "prescriber": "Dr. Patel (Neurology)",
      "start": "08/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Mirtazapine 15mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Liu",
      "start": "04/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Liu",
      "start": "01/2006",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 20mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Liu",
      "start": "03/2008",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Hydrochlorothiazide",
      "type": "Drug",
      "reaction": "Severe hyponatremia (Na 118) requiring hospitalization",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2026",
      "bp": "148/82 (supine) → 98/54 (standing at 1 min)",
      "hr": "62 (supine) → 68 (standing)",
      "rr": 16,
      "temp": "97.6°F",
      "spo2": "97%",
      "wt": "168 lbs",
      "ht": "5'9\"",
      "bmi": 24.8,
      "setting": "ED"
    },
    {
      "date": "12/08/2025",
      "bp": "118/68",
      "hr": 66,
      "rr": 16,
      "temp": "98.0°F",
      "spo2": "97%",
      "wt": "170 lbs",
      "ht": "5'9\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    },
    {
      "date": "08/18/2025",
      "bp": "112/64",
      "hr": 62,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "97%",
      "wt": "172 lbs",
      "ht": "5'9\"",
      "bmi": 25.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Follow-up HTN, DM, Parkinson, recent fall",
      "hpi": "86M with extensive medical history presents for routine follow-up. Reports another fall 2 weeks ago — was getting up from recliner to answer the door, felt lightheaded, fell onto carpet. No LOC, no head strike, no injuries. This is 3rd fall in 6 months — all associated with positional changes. BP at home runs 110-118/60-68. A1c 6.4 — reports 2 episodes of 'shakiness' before meals that resolve with orange juice. Wife present — concerned about 'too many pills' and that he is 'overmedicated.' Parkinson symptoms stable — mild tremor, slightly shuffling gait.",
      "exam": "Thin elderly male with mild resting tremor right hand. CV: RRR, S4 present, no murmurs. Lungs: CTAB. Neuro: Mild cogwheel rigidity RUE; shuffling gait with small steps; retropulsion on pull test. Orthostatics not formally checked at this visit.",
      "assessment": "1. Recurrent falls — likely multifactorial: orthostatic hypotension (polypharmacy), Parkinson gait instability, possible hypoglycemia\n2. HTN — possibly overtreated given home BPs 110-118\n3. T2DM — A1c 6.4 with hypoglycemia episodes; overtreated for age\n4. Parkinson — stable on carbidopa-levodopa\n5. Polypharmacy — 9 medications; deprescribing warranted",
      "plan": "1. Formal orthostatic vitals at next visit\n2. Consider reducing amlodipine and/or discontinuing doxazosin\n3. Consider reducing or discontinuing glipizide given A1c 6.4 with hypoglycemia\n4. PT referral for gait/balance training and fall prevention\n5. Home safety assessment ordered\n6. Return 4 weeks to reassess after medication adjustments"
    },
    {
      "id": "V002",
      "date": "08/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Routine follow-up, first fall reported",
      "hpi": "85M presents for routine follow-up. Reports 1 fall last month — got dizzy standing up from bed in the morning, landed on carpet. No injuries. BP at home 110-120/60-70. Reports sleeping better on mirtazapine. Appetite improved. Parkinson tremor stable.",
      "exam": "NAD. CV: RRR, S4. Neuro: Mild tremor RUE; gait mildly shuffling.",
      "assessment": "1. First reported fall — positional, likely orthostatic\n2. Home BP on lower side — watch for overtreatment\n3. Parkinson — stable",
      "plan": "1. Fall precautions counseled\n2. Monitor home BPs\n3. Labs: CMP, A1c, CBC\n4. Return 4 months"
    }
  ],
  "labs": [
    {
      "date": "12/08/2025",
      "time": "09:00",
      "orderedBy": "Dr. Liu",
      "collected": "12/08/2025 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-891208",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "78",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "26",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.5",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "52",
              "unit": "mL/min/1.73m²",
              "range": ">60",
              "flag": "L"
            },
            {
              "test": "Sodium",
              "value": "136",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.8",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            {
              "test": "HbA1c",
              "value": "6.4",
              "unit": "%",
              "range": "<5.7",
              "flag": "H"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "6.2",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.4",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "37.8",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "198",
              "unit": "K/uL",
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
      "date": "12/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-121222",
      "status": "FINAL",
      "orderedBy": "Dr. Liu",
      "readBy": "Dr. Patricia Gomez, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Recurrent falls in elderly male — rule out chronic subdural hematoma",
      "technique": "Non-contrast CT of the head.",
      "findings": "No acute intracranial hemorrhage. No subdural or epidural collections. Moderate cerebral atrophy with prominence of sulci and ventricles — age-appropriate. Small vessel ischemic changes in periventricular white matter. No midline shift. No mass.",
      "impression": "1. No acute intracranial pathology.\n2. Age-appropriate cerebral atrophy.\n3. Chronic small vessel ischemic disease.",
      "dictated": "12/12/2025 14:00",
      "verified": "12/12/2025 16:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose, 2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-HD904",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Moderna)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2210",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "03/2024",
      "site": "Left deltoid IM",
      "lot": "PV20-740",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "01/2021",
      "site": "Right deltoid IM",
      "lot": "SX21-020",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "03/2021",
      "site": "Right deltoid IM",
      "lot": "SX21-168",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap",
      "date": "06/2020",
      "site": "Left deltoid IM",
      "lot": "TD20-380",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: HTN, stroke at 72, deceased at 74",
    "Mother: T2DM, Alzheimer disease, deceased at 88",
    "Brother: Deceased at 80 (prostate cancer)",
    "Sister: HTN, alive at 83"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired postal worker (USPS) — retired 2005"
    ],
    [
      "Marital",
      "Married 60 years; wife Barbara is primary caregiver"
    ],
    [
      "Tobacco",
      "Former — 15 pack-years; quit 1985"
    ],
    [
      "Alcohol",
      "Denies current use"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Very limited — walks with rolling walker indoors; wife assists with transfers"
    ],
    [
      "Housing",
      "Condo (ground floor) with wife; grab bars installed; no stairs; medical alert system"
    ],
    [
      "Safety",
      "High fall risk; rolling walker; grab bars; medical alert pendant; no rugs; no firearms"
    ],
    [
      "Advance Directive",
      "Living will and DPOA completed; DNR per patient and family discussion; DPOA (wife Barbara)"
    ]
  ],
  "meta": {
    "caseId": "orthostatic-hypotension",
    "diagnosis": "Orthostatic Syncope from Polypharmacy-Induced Orthostatic Hypotension",
    "acuity": 3,
    "presentation": "Syncope",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Reginald Holloway appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did syncope start?",
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
      "default": "He pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started I was sitting in my recliner watching TV when the doorbell rang, so I got up to .'",
      "character": "'It's syncope — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Orthostatic Syncope.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Amlodipine 10mg daily; Lisinopril 20mg daily; Doxazosin 4mg QHS; Metformin 500mg BID; Glipizide 5mg BID; Carbidopa-Levodopa 25/100mg TID; Mirtazapine 15mg QHS; Aspirin 81mg daily.'",
      "allergies": "'My allergies are Hydrochlorothiazide.'",
      "family": "Father: HTN, stroke at 72, deceased at 74  Mother: T2DM, Alzheimer disease, deceased at 88  Brother: Deceased at 80 (prostate cancer)",
      "social": "Occupation: Retired postal worker (USPS) — retired 2005  Marital: Married 60 years; wife Barbara is primary caregiver  Tobacco: Former — 15 pack-years; quit 1985  Alcohol: Denies current use  Drugs: Denies"
    },
    "examManeuvers": [
      "General appearance and hemodynamic assessment",
      "Vital signs review",
      "Jugular venous pressure",
      "Cardiovascular auscultation",
      "Peripheral pulses and perfusion",
      "Pulmonary auscultation",
      "Lower extremity edema",
      "Skin perfusion and temperature"
    ],
    "examFindings": {
      "General appearance and hemodynamic assessment": "Clinical finding consistent with Orthostatic Syncope. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Orthostatic Syncope. Document specifically what you observe.",
      "Jugular venous pressure": "Clinical finding consistent with Orthostatic Syncope. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Orthostatic Syncope. Document specifically what you observe.",
      "Peripheral pulses and perfusion": "Clinical finding consistent with Orthostatic Syncope. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Orthostatic Syncope. Document specifically what you observe.",
      "Lower extremity edema": "Clinical finding consistent with Orthostatic Syncope. Document specifically what you observe.",
      "Skin perfusion and temperature": "Clinical finding consistent with Orthostatic Syncope. Document specifically what you observe."
    },
    "ddxTargets": [
      "Orthostatic Syncope (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Orthostatic Syncope, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Orthostatic Syncope, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Orthostatic Syncope based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Reginald Holloway's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Orthostatic Syncope (Polypharmacy-Induced Orthostatic Hypotension — Doxazosin + Amlodipine + Lisinopril + Carbidopa-Levodopa + Mirtazapine in Elderly Parkinson Patient with Recurrent Falls). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: orthostatic syncope from polypharmacy-induced orthostatic hypotension in a patient on doxazosin, amlodipine, lisinopril, carbidopa-levodopa, and mirtazapine. Key learning: (1) Orthostatic hypotension (OH) is defined by a sustained reduction in systolic BP of at least 20 mm Hg or diastolic BP of at least 10 mm Hg within 3 minutes of standing, or when the head-up tilt is ≥60 degrees. Initial OH (overshoot within 30 seconds) is transient and physiologic. Classic OH (within 3 minutes) is the definition. Delayed OH (after 3 minutes) is often missed — requires prolonged standing or tilt-table testing. Neurogenic OH (failure of HR compensation on standing) suggests autonomic failure (Parkinson, MSA, Lewy body, diabetic neuropathy, amyloid). Non-neurogenic OH (appropriate HR increase) suggests volume or medication cause. (2) Drug-induced OH is extremely common and often cumulative. Major classes: alpha-blockers (doxazosin, tamsulosin, prazosin), nitrates, PDE-5 inhibitors, centrally acting antihypertensives (clonidine, methyldopa), diuretics (volume depletion), tricyclic antidepressants, SSRIs (less but possible), trazodone, mirtazapine, antipsychotics (especially low-potency and atypicals), levodopa and dopamine agonists, and opioids. The risk multiplies when combinations are used — a patient on three or more BP-lowering or autonomic-affecting drugs has exponentially increased OH risk. (3) Presentation ranges from asymptomatic to lightheadedness, blurred vision, dizziness, syncope, and falls. Postprandial hypotension (drop within 60-90 min of eating, especially breakfast, from splanchnic blood pooling) is a distinct and underrecognized variant. Consequences: falls, fractures (especially hip), cognitive impairment from chronic hypoperfusion, and increased cardiovascular mortality. (4) Workup. Measurement: supine BP/HR after 5 minutes, then standing BP/HR at 1 minute and 3 minutes (and 5-10 minutes if suspicion of delayed OH). History: medications (prescription, OTC, herbals), fluid and salt intake, diabetes, Parkinson, amyloid features. Labs: CBC (anemia), BMP (electrolytes, renal function), B12, HbA1c, TSH, cortisol if suspected adrenal insufficiency. ECG (arrhythmia, conduction), echocardiogram in selected patients. Tilt-table testing for atypical or unclear cases. (5) Management. (a) DEPRESCRIBE — review the full medication list and remove or reduce the most offending and least necessary drugs. Alpha-blockers are often the single highest-yield target. (b) Lifestyle: adequate hydration (2-2.5 L daily), liberal salt intake (8-10 g/day if no contraindication), compression stockings (thigh-high, abdominal binders), raising head of bed 10-30 degrees at night, physical counter-maneuvers (leg crossing, squatting, calf pumping before standing), avoiding prolonged standing, and eating smaller frequent meals with reduced carbohydrates (for postprandial hypotension). (c) Pharmacologic: fludrocortisone (expands plasma volume — watch for supine hypertension, hypokalemia, edema), midodrine (alpha-1 agonist, shorter-acting — dose 30 min before arising, last dose at least 4 hr before bed), droxidopa (norepinephrine precursor, FDA-approved for neurogenic OH), pyridostigmine (cholinesterase inhibitor, modest effect mainly during standing). (d) Fall prevention program, home safety evaluation, PT for balance and gait. Classic pitfalls: (a) attributing falls in an elderly patient to 'age' without measuring orthostatic vitals — OH is common, modifiable, and a major fall risk factor. (b) Starting a new antihypertensive without removing another when BP is 'still high' on office measurement — supine hypertension with standing hypotension (classic in autonomic failure) is the classic trap. (c) Not measuring delayed OH — 3-minute measurement can miss it. (d) Over-aggressive BP targets in elderly with OH — individualize, and consider tolerating slightly higher supine BP to avoid symptomatic orthostasis and falls."
    }
  }
};
