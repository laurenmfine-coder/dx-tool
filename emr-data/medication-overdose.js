// Virtual EMR Case: Medication Overdose (ACE-I/Spironolactone)
// Variant: medication-overdose | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Patricia Langston",
    "patientHPI": "My legs have been so swollen lately and I'm having trouble catching my breath when I walk upstairs. I've gained three pounds even though I'm taking my water pill every day like I'm supposed to.",
    "dob": "06/22/1950",
    "age": 74,
    "sex": "Female",
    "mrn": "RDX-2025-89142",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + Humana Supplement",
    "pcp": "Dr. Jennifer Adams, MD",
    "pharmacy": "Publix Pharmacy — 5200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "6543 Dogwood Ln, Indianapolis, IN 46222",
    "phone": "(954) 555-3291",
    "email": "p.langston50@email.com",
    "emergencyContact": {
      "name": "Robert Langston (Husband)",
      "phone": "(954) 555-3294"
    },
    "chiefComplaint": "Weakness after medication changes"
  },
  "problems": [
    {
      "problem": "Heart Failure with Preserved Ejection Fraction",
      "icd": "I50.32",
      "onset": "2021",
      "status": "Active",
      "notes": "EF 55%; diastolic dysfunction grade II; on spironolactone, lisinopril, furosemide"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3b",
      "icd": "N18.32",
      "onset": "2022",
      "status": "Active",
      "notes": "eGFR 38; hypertensive nephrosclerosis; baseline Cr 1.6"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "1998",
      "status": "Active",
      "notes": "On lisinopril 40mg + amlodipine 10mg + furosemide"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2010",
      "status": "Active",
      "notes": "On glipizide; A1c 7.4%"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 40mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Adams",
      "start": "01/2015",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Spironolactone 50mg daily",
      "sig": "Take 1 tablet by mouth daily (DOSE RECENTLY DOUBLED from 25mg by cardiology 3 weeks ago)",
      "prescriber": "Dr. Patel (Cardiology)",
      "start": "02/2025 (dose increase)",
      "refills": 2,
      "status": "Active — RECENTLY DOUBLED"
    },
    {
      "name": "Furosemide 40mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Adams",
      "start": "06/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Adams",
      "start": "03/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Glipizide 10mg BID",
      "sig": "Take 1 tablet by mouth twice daily before meals",
      "prescriber": "Dr. Adams",
      "start": "01/2016",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Potassium Chloride 20mEq daily",
      "sig": "Take 1 tablet by mouth daily (NOTE: should have been DISCONTINUED when spironolactone was increased — NOT caught at pharmacy or follow-up)",
      "prescriber": "Dr. Adams",
      "start": "08/2021",
      "refills": 3,
      "status": "Active — SHOULD HAVE BEEN DISCONTINUED"
    }
  ],
  "allergies": [
    {
      "allergen": "Metformin",
      "type": "Drug",
      "reaction": "Severe diarrhea and lactic acidosis (hospitalized)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2025",
      "bp": "88/52",
      "hr": 42,
      "rr": 18,
      "temp": "97.4°F",
      "spo2": "94%",
      "wt": "158 lbs",
      "ht": "5'3\"",
      "bmi": 28,
      "setting": "ED"
    },
    {
      "date": "02/04/2025",
      "bp": "138/82",
      "hr": 68,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "97%",
      "wt": "156 lbs",
      "ht": "5'3\"",
      "bmi": 27.6,
      "setting": "Specialist"
    },
    {
      "date": "11/20/2024",
      "bp": "142/86",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "154 lbs",
      "ht": "5'3\"",
      "bmi": 27.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/04/2025",
      "type": "Specialist",
      "provider": "Dr. Nina Patel, MD (Cardiology)",
      "cc": "HFpEF management — persistent fluid retention",
      "hpi": "74-year-old female with HFpEF (EF 55%) and CKD 3b presenting with persistent lower extremity edema despite furosemide 40mg daily. Weight up 3 lbs. Mild dyspnea with exertion. Currently on spironolactone 25mg. Echo last month showed stable EF 55% with grade II diastolic dysfunction.",
      "exam": "CV: RRR, no murmur, JVP 10 cm. Lungs: Bibasilar crackles. Extremities: 2+ pitting edema bilateral LE. Abdomen: Soft, no ascites.",
      "assessment": "1. HFpEF — persistent volume overload\n2. CKD 3b — limits diuretic options",
      "plan": "1. INCREASE spironolactone from 25mg to 50mg daily (NOTE: patient also on lisinopril 40mg AND potassium supplement — high risk for hyperkalemia)\n2. POTASSIUM AND RENAL FUNCTION CHECK IN 1 WEEK — order placed\n3. Continue furosemide 40mg daily\n4. Patient instructed to get labs within 5-7 days — PATIENT DID NOT GET LABS\n5. RTC 4 weeks"
    },
    {
      "id": "V002",
      "date": "11/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Adams, MD",
      "cc": "Follow-up: CKD, DM, HTN, HFpEF",
      "hpi": "74-year-old with multiple comorbidities for routine follow-up. CKD stable — Cr 1.6, eGFR 38. DM managed on glipizide — A1c 7.4%. Mild persistent LE edema. Potassium 4.8 on last check.",
      "exam": "General: Well-appearing elderly female. CV: RRR, HR 72. Lungs: Trace bibasilar crackles. Extremities: 1+ bilateral LE edema.",
      "assessment": "1. CKD 3b — stable\n2. HFpEF — mild volume overload\n3. DM — adequate control\n4. HTN — borderline controlled\n5. Potassium 4.8 — upper limit on ACE-I + spironolactone + K supplement",
      "plan": "1. Continue current regimen\n2. Consider discontinuing KCl supplement given spironolactone and CKD risk — discussed but deferred to cardiology\n3. Labs in 3 months\n4. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "02/27/2025",
      "time": "07:42",
      "orderedBy": "Dr. Amanda Liu, MD (ED)",
      "collected": "02/27/2025 07:25",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-111418",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "54",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "L"
            },
            {
              "test": "BUN",
              "value": "52",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "3.2",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "130",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "7.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "96",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "L"
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "16",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": "L"
            },
            {
              "test": "Calcium",
              "value": "8.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
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
              "value": "10.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "31.8",
              "unit": "%",
              "range": "36-46",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "198",
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
      "date": "02/27/2025",
      "study": "CHEST X-RAY — PA AND LATERAL",
      "accession": "IMG-2025-11102",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Liu, MD",
      "readBy": "Dr. Sarah Mitchell, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "74-year-old with bradycardia, hypotension, HFpEF, hyperkalemia",
      "technique": "PA and lateral chest radiographs.",
      "findings": "HEART: Mildly enlarged cardiac silhouette.\n\nLUNGS: Small bilateral pleural effusions. Mild pulmonary vascular congestion. No consolidation.\n\nOTHER: Mild degenerative changes in the thoracic spine.",
      "impression": "1. Mild cardiomegaly with bilateral pleural effusions and pulmonary congestion\n2. No acute infiltrate",
      "dictated": "02/27/2025 08:00",
      "verified": "02/27/2025 08:08"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL891T",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "PF501K",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "PV308R",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2nd dose)",
      "date": "05/2021",
      "site": "Left deltoid IM",
      "lot": "SH182T",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Deceased at 88 — CHF, CKD",
    "Father: Deceased at 76 — MI",
    "Sister (age 71): Hypertension, Type 2 Diabetes",
    "No family history of sudden cardiac death"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired — former elementary school teacher"
    ],
    [
      "Marital",
      "Married x 50 years; husband Robert assists with medications and appointments"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 15 min/day; limited by dyspnea and knee pain"
    ],
    [
      "Housing",
      "Single-story home with husband"
    ],
    [
      "Safety",
      "No firearms; uses pill organizer; husband helps manage medications but missed the medication interaction"
    ],
    [
      "Advance Directive",
      "Healthcare proxy: Robert Langston (husband); DNR/DNI NOT currently in place"
    ]
  ],
  "meta": {
    "caseId": "medication-overdose",
    "diagnosis": "Iatrogenic Hyperkalemia from ACE-I + Spironolactone + KCl Supplementation in CKD 3b",
    "acuity": 2,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "iatrogenic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Mrs. Langston appears tired and speaks slowly, occasionally pausing to catch her breath. She's cooperative but seems confused about her medications, frequently looking to her husband for confirmation. She expresses frustration about feeling worse despite taking all her prescribed medications.",
    "interviewQuestions": [
      "When did you first notice the weakness and trouble breathing?",
      "Can you describe the weakness - is it in your arms, legs, or all over?",
      "Have you had any chest pain, palpitations, or irregular heartbeat?",
      "Tell me about your recent medication changes - has anything been adjusted?",
      "How is your appetite and have you noticed any nausea or vomiting?",
      "Have you been taking all your medications as prescribed, including supplements?",
      "Any recent changes in urination or kidney function tests?",
      "Have you had any falls or near-fainting episodes?",
      "When was your last cardiology or nephrology visit?",
      "Any recent blood work or laboratory tests done?",
      "Have you been following a low-sodium diet or taking extra potassium?",
      "Any muscle cramps, tingling, or numbness?",
      "How has your daily activity level changed recently?"
    ],
    "patientResponses": {
      "default": "I'm not sure about that... could you ask my husband Robert? He usually keeps track of those things for me.",
      "onset": "The weakness started about a week ago, maybe a bit longer. It's gotten worse over the past few days. The breathing trouble has been going on for maybe two weeks now.",
      "character": "It's like my whole body feels heavy and tired. My muscles feel weak, especially when I try to get up from a chair or climb stairs. Sometimes I feel like my heart is beating strangely.",
      "location": "The weakness is all over, but my legs feel the worst. My arms feel heavy too when I try to reach for things or carry groceries.",
      "severity": "I'd say the weakness is about a 7 out of 10. I can barely make it up our stairs without stopping twice, and I used to do that easily.",
      "aggravating": "Moving around makes the weakness worse, and I get more short of breath. Even light housework exhausts me now.",
      "relieving": "Sitting down and resting helps a little with the weakness, but I still feel tired even when I'm resting.",
      "associated": "I've been feeling nauseous on and off, and my appetite isn't great. Sometimes I feel dizzy when I stand up, and my heart feels like it's skipping beats.",
      "denies": "No chest pain, no fever, no cough with blood, no leg pain or swelling in my calves. I haven't fallen, but I've felt unsteady a few times.",
      "history": "I've never felt weakness like this before. I've had my usual heart failure symptoms, but this is different and much worse.",
      "medications": "Lisinopril 40mg daily; Spironolactone 50mg daily; Furosemide 40mg daily; Amlodipine 10mg daily; Glipizide 10mg BID; Potassium Chloride 20mEq daily",
      "allergies": "Metformin",
      "family": "My mother had heart failure and kidney problems like me before she passed. My father had a heart attack. My sister has high blood pressure and diabetes too.",
      "social": "I'm a retired elementary school teacher. I've been married to Robert for 50 years and he helps me with my medications. I've never smoked and rarely drink alcohol."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Assessment of jugular venous pressure",
      "Lower extremity edema assessment",
      "Neurological assessment of muscle strength",
      "Assessment of deep tendon reflexes",
      "Orthostatic vital signs",
      "Abdominal examination",
      "Skin assessment for signs of uremia",
      "Mental status examination"
    ],
    "examFindings": {
      "Cardiac auscultation": "Bradycardic irregular rhythm at 42 bpm, S3 gallop present, no murmurs audible",
      "Pulmonary auscultation": "Bilateral fine crackles in lower lung fields, no wheeze or rhonchi",
      "Assessment of jugular venous pressure": "JVP elevated to 12 cm H2O with patient at 45 degrees",
      "Lower extremity edema assessment": "2+ pitting edema bilateral lower extremities to mid-shins",
      "Neurological assessment of muscle strength": "Generalized weakness, 4/5 strength in proximal muscle groups, normal distal strength",
      "Assessment of deep tendon reflexes": "Diminished reflexes throughout, particularly notable hypoactive patellar and Achilles reflexes",
      "Orthostatic vital signs": "Sitting BP 95/58, standing BP 82/48 with pulse increase from 42 to 48, patient reports dizziness",
      "Abdominal examination": "Soft, non-tender, no organomegaly, normal bowel sounds",
      "Skin assessment for signs of uremia": "Mild pallor, no uremic frost or asterixis, skin warm and dry",
      "Mental status examination": "Alert and oriented, mildly confused about medication timing, no acute distress but appears fatigued"
    },
    "ddxTargets": [
      "Iatrogenic Hyperkalemia (7.4 mEq/L) from ACE-Inhibitor + Spironolactone Dose Increase + Continued KCl Supplementation in CKD 3b — Medication Safety Error (correct diagnosis)",
      "Acute on chronic heart failure exacerbation",
      "Acute kidney injury with electrolyte disturbance",
      "Hyperkalemic cardiac arrhythmia with hemodynamic compromise",
      "Medication-induced bradycardia (beta-blocker toxicity)",
      "Dehydration with orthostatic hypotension",
      "Uremic syndrome with progressive kidney disease"
    ],
    "biasFlags": {
      "anchoring": "The obvious heart failure symptoms (edema, dyspnea, S3 gallop) may cause anchoring on CHF exacerbation, missing the critical medication-induced hyperkalemia causing the bradycardia and weakness",
      "prematureClosure": "After identifying heart failure signs, may immediately attribute all symptoms to CHF without considering medication safety issues or checking electrolytes in a patient on multiple potassium-affecting drugs",
      "availabilityBias": "Heart failure exacerbation is common in elderly patients, potentially overshadowing the less obvious but more dangerous iatrogenic hyperkalemia from polypharmacy interactions"
    },
    "coachPrompts": {
      "phase2": "You've identified some concerning possibilities in your differential. Before you interview Mrs. Langston, consider this: she's on multiple medications that affect potassium homeostasis in the setting of kidney disease. What specific medication interactions might you want to explore? How might polypharmacy contribute to her presentation?",
      "phase5": "Excellent work gathering the history and exam. You've found bradycardia, weakness, and signs of volume overload. Here's a key question: in a patient with CKD taking an ACE inhibitor, aldosterone antagonist, AND potassium supplementation, what laboratory abnormality could explain both the cardiac rhythm changes and the generalized weakness? What's your most concerning diagnosis right now?",
      "finalDebrief": "This case highlights a critical medication safety issue. Mrs. Langston developed life-threatening hyperkalemia from the combination of lisinopril, spironolactone, and continued potassium supplementation in the setting of CKD 3b. Notice how the presentation could easily be mistaken for heart failure exacerbation - the key was recognizing that her bradycardia and weakness pattern, combined with her medication regimen, pointed to hyperkalemia. This emphasizes the importance of medication reconciliation and understanding drug interactions in patients with multiple comorbidities. How has this case changed your approach to evaluating weakness in elderly patients on complex medication regimens?",
      "final": "Diagnosis: iatrogenic hyperkalemia (K 7.4) from an ACE-inhibitor plus spironolactone plus continued potassium chloride supplementation in CKD stage 3b — a medication safety error. Key learning: (1) This case is a textbook medication reconciliation failure. Three drugs with additive potassium-retaining effects were continued simultaneously in a patient with reduced kidney function. The key principle: whenever any single change is made — dose increase of an ACE-I/ARB/MRA, addition of a new potassium-retaining drug, worsening GFR, dehydration, or concurrent NSAIDs or trimethoprim — the potassium level must be rechecked and other potassium-raising agents should be reviewed. Classic culprits: ACE-I, ARBs, aldosterone antagonists (spironolactone, eplerenone), direct renin inhibitors, potassium-sparing diuretics (amiloride, triamterene), potassium supplements, trimethoprim/sulfamethoxazole (blocks distal sodium channels like amiloride), NSAIDs (impair renal prostaglandins and potassium excretion), heparin (inhibits aldosterone synthesis), tacrolimus, and beta-blockers (impair cellular uptake). (2) Emergency management follows the usual hyperkalemia algorithm: IV calcium gluconate 1-2 g for membrane stabilization if there are ECG changes; insulin 10 units IV with dextrose 25 g and albuterol 10-20 mg nebulized for intracellular shift; loop diuretic if volume allows; potassium binders (patiromer or sodium zirconium cyclosilicate preferred over sodium polystyrene sulfonate due to safety and speed) or hemodialysis for severe or refractory cases. Recheck potassium frequently; these interventions are temporizing, and elimination requires diuresis, binders, or dialysis. (3) Root cause analysis and system improvements. Was the potassium supplement continued by inertia after the spironolactone was added? Was the GFR trend missed? Was the patient using an OTC potassium-containing salt substitute or other hidden source? System-level safeguards: pharmacy-driven medication reconciliation at every transition of care, EHR alerts for concurrent potassium-retaining drugs, mandatory BMP check 1-2 weeks after ACE-I/ARB/MRA initiation or dose change, and CKD-specific dashboards. (4) Long-term plan for this patient. Reduce or discontinue the KCl supplement; consider whether spironolactone is essential for the indication or if another agent suffices; continue the ACE-I/ARB at reduced dose if proteinuric or heart-failure indication (with monitoring and dietary counseling) because discontinuation often worsens outcomes in patients who truly need renin-angiotensin blockade. Patiromer or sodium zirconium cyclosilicate chronically can enable continuation of RAAS inhibition in CKD, a strategy supported by recent trials. Dietary potassium counseling and medication list review at each visit are essential. (5) Classic pitfalls: (a) stopping the ACE-I permanently after a single hyperkalemia episode in a patient with heart failure or proteinuric CKD — loses cardiorenal protection. (b) Attributing the hyperkalemia to 'just CKD' without identifying the avoidable medication contributors. (c) Giving sodium polystyrene sulfonate (Kayexalate) to a postop or ileus patient — it is associated with rare but serious colonic necrosis, and newer binders are safer and faster. (d) Forgetting the patient education piece: low-potassium diet counseling, avoiding OTC salt substitutes, explaining sick-day rules (hold ACE-I/ARB/diuretic if vomiting or volume-depleted), and knowing signs of hyperkalemia (weakness, palpitations)."
    }
  }
};
