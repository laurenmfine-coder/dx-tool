// Virtual EMR Case: Complete Heart Block
// Variant: complete-heart-block-v2 | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Edith Marchetti",
    "patientHPI": "I'm getting so winded just getting dressed or taking a shower now, and twice in the past couple months I've felt like I was going to faint when I stood up - everything went gray for a moment but then I was okay.",
    "dob": "04/22/1941",
    "age": 84,
    "sex": "Female",
    "mrn": "RDX-2025-16739",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B with Humana Supplement",
    "pcp": "Dr. Maria Fernandez, MD",
    "pharmacy": "Publix Pharmacy — 1601 N Hiatus Rd, Pembroke Pines, FL",
    "language": "English",
    "race": "White",
    "address": "5902 Cedar Blvd, Pittsburgh, PA 15201",
    "phone": "(954) 555-7423",
    "email": "e.marchetti41@email.com",
    "emergencyContact": {
      "name": "Anthony Marchetti (Son)",
      "phone": "(954) 555-7437"
    },
    "chiefComplaint": "Fatigue and near-fainting episodes"
  },
  "problems": [
    {
      "problem": "Aortic Stenosis, Severe",
      "icd": "I35.0",
      "onset": "2022",
      "status": "Active",
      "notes": "Calcific degenerative; AVA 0.8 cm²; mean gradient 42 mmHg; symptomatic — dyspnea and presyncope; TAVR evaluation initiated"
    },
    {
      "problem": "Sick Sinus Syndrome",
      "icd": "I49.5",
      "onset": "2023",
      "status": "Active",
      "notes": "Holter showing sinus bradycardia with pauses up to 3.2 sec; tachybrady syndrome"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "1990",
      "status": "Active",
      "notes": "Controlled"
    },
    {
      "problem": "Osteoporosis with Compression Fractures",
      "icd": "M80.08XA",
      "onset": "2010",
      "status": "Active",
      "notes": "T12 and L2 compression fractures (2018, 2021)"
    },
    {
      "problem": "Hypothyroidism",
      "icd": "E03.9",
      "onset": "2005",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3b",
      "icd": "N18.32",
      "onset": "2020",
      "status": "Active",
      "notes": "eGFR 38"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Fernandez",
      "start": "03/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Losartan 50mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Fernandez",
      "start": "06/2008",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Levothyroxine 50mcg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach",
      "prescriber": "Dr. Fernandez",
      "start": "08/2006",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Denosumab 60mg SubQ q6months",
      "sig": "Inject subcutaneously every 6 months for osteoporosis",
      "prescriber": "Dr. Fernandez",
      "start": "01/2019",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Calcium/Vitamin D 600mg/400IU BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Fernandez",
      "start": "06/2011",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg q6h PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Fernandez",
      "start": "08/2018",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Beta-Blockers (Metoprolol)",
      "type": "Drug",
      "reaction": "Symptomatic bradycardia (HR 38, near-syncope) — held given sick sinus syndrome",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "NSAIDs",
      "type": "Drug",
      "reaction": "Acute kidney injury (creatinine 2.4 from 1.5 baseline after ibuprofen use, 2021)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/10/2026",
      "bp": "108/62",
      "hr": 34,
      "rr": 20,
      "temp": "98.0°F",
      "spo2": "94%",
      "wt": "118 lbs",
      "ht": "5'2\"",
      "bmi": 21.6,
      "setting": "ED"
    },
    {
      "date": "11/05/2025",
      "bp": "128/72",
      "hr": 52,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "120 lbs",
      "ht": "5'2\"",
      "bmi": 21.9,
      "setting": "Specialist"
    },
    {
      "date": "05/14/2025",
      "bp": "132/74",
      "hr": 54,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "96%",
      "wt": "122 lbs",
      "ht": "5'2\"",
      "bmi": 22.3,
      "setting": "PCP Office"
    },
    {
      "date": "11/08/2024",
      "bp": "130/76",
      "hr": 56,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "124 lbs",
      "ht": "5'2\"",
      "bmi": 22.7,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/05/2025",
      "type": "Specialist",
      "provider": "Dr. Rajiv Singh, MD (Cardiology)",
      "cc": "Aortic stenosis follow-up; TAVR evaluation; syncope risk",
      "hpi": "84-year-old female with severe calcific aortic stenosis (AVA 0.8 cm²) and sick sinus syndrome presenting for TAVR evaluation. Reports increasing dyspnea on exertion — now occurring with ADLs (dressing, bathing). Two near-syncopal episodes in past 2 months — lightheadedness upon standing, resolved with sitting. No frank syncope. Baseline HR in low 50s. Cannot tolerate beta-blockers. ECG today: sinus bradycardia HR 52, first-degree AV block (PR 280ms), LBBB (QRS 140ms). Echo (10/2025): severe AS with AVA 0.8 cm², mean gradient 42 mmHg, EF 45%.",
      "exam": "General: Frail elderly female. CV: Bradycardic (HR 52), regular, harsh crescendo-decrescendo systolic murmur at RUSB radiating to carotids, diminished S2. Lungs: Bibasilar crackles. Extremities: Trace edema bilaterally. Neuro: A&O x3; unsteady gait.",
      "assessment": "1. Severe aortic stenosis — symptomatic; TAVR candidate\n2. Sick sinus syndrome with first-degree AV block and LBBB — high risk for complete heart block, especially with TAVR\n3. Near-syncope — likely multifactorial (AS + conduction disease)\n4. EF declining (45% from 50% last year)",
      "plan": "1. TAVR Heart Team review — likely combined TAVR + permanent pacemaker\n2. Pre-TAVR workup: CT angio aorta, coronary angiogram, carotid duplex, PFTs\n3. Hold on any rate-lowering medications\n4. If syncope occurs → ED immediately\n5. Monitor for progression to complete heart block\n6. RTC 4 weeks for Heart Team decision"
    },
    {
      "id": "V002",
      "date": "05/14/2025",
      "type": "Primary Care",
      "provider": "Dr. Maria Fernandez, MD",
      "cc": "Chronic disease follow-up; medication management",
      "hpi": "84-year-old female for routine follow-up. Mild dyspnea with moderate exertion. BP controlled. Thyroid stable. CKD stable (eGFR 38). Reports occasional dizziness when standing quickly. Falls risk concern — using walker for longer distances.",
      "exam": "General: Frail, alert. CV: Bradycardic, systolic murmur (known AS). Lungs: Clear. Extremities: No edema.",
      "assessment": "1. Severe AS — under cardiology care\n2. CKD 3b — stable\n3. Hypothyroidism — stable\n4. Falls risk — high",
      "plan": "1. Continue current medications\n2. Labs: TSH, BMP\n3. PT evaluation for balance/fall prevention\n4. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "02/10/2026",
      "time": "06:30",
      "orderedBy": "Dr. Karen Moy, MD (ED)",
      "collected": "02/10/2026 06:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-021042",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "106",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "34",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "28",
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
              "value": "5.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "9.6",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CARDIAC MARKERS",
          "results": [
            {
              "test": "Troponin I",
              "value": "0.04",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": ""
            },
            {
              "test": "BNP",
              "value": "680",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "6.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "10.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "32.4",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "Platelet Count",
              "value": "196",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "THYROID",
          "results": [
            {
              "test": "TSH",
              "value": "3.8",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "10/28/2025",
      "study": "TRANSTHORACIC ECHOCARDIOGRAM",
      "accession": "IMG-2025-10285",
      "status": "FINAL",
      "orderedBy": "Dr. Rajiv Singh, MD",
      "readBy": "Dr. Rajiv Singh, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "84F with known severe aortic stenosis. TAVR evaluation.",
      "technique": "2D and Doppler transthoracic echocardiography with color flow mapping.",
      "findings": "Aortic valve: Severely calcified, trileaflet (but heavily calcified with restricted mobility). Peak velocity 4.3 m/s. Mean gradient 42 mmHg. Calculated AVA 0.8 cm² by continuity equation.\\n\\nLeft ventricle: Concentric LVH. EF estimated 45% (decreased from 50% in 2024). Mild global hypokinesis.\\n\\nLeft atrium: Mildly dilated (42 mm).\\n\\nMitral valve: Mild mitral regurgitation, mild annular calcification.\\n\\nRight heart: Normal RV size and function. RVSP estimated 38 mmHg.\\n\\nNo pericardial effusion.",
      "impression": "1. Severe calcific aortic stenosis — AVA 0.8 cm², mean gradient 42 mmHg.\\n2. Declining LVEF 45% (previously 50%) — early AS cardiomyopathy.\\n3. Concentric LVH.\\n4. Mild mitral regurgitation.\\n5. TAVR evaluation recommended.",
      "dictated": "10/28/2025 15:00",
      "verified": "10/28/2025 17:20"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/15/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-HD255",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2025-26)",
      "date": "10/05/2025",
      "site": "Right deltoid IM",
      "lot": "CM2025-630",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "03/2022",
      "site": "Left deltoid IM",
      "lot": "PV22-198",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Aortic stenosis (valve replacement age 78), deceased at 82",
    "Mother: HTN, Osteoporosis, deceased at 88",
    "Sister: Pacemaker at age 80, alive at 86",
    "No family history of sudden cardiac death"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired school librarian; retired 2001"
    ],
    [
      "Marital",
      "Widowed (2019); husband deceased of heart failure"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "None"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Very limited — short walks with walker; chair exercises"
    ],
    [
      "Housing",
      "Assisted living facility — independent room with daily check-ins"
    ],
    [
      "Safety",
      "Fall risk — uses walker; wears personal emergency response device; 2 falls in past year (no fracture)"
    ],
    [
      "Advance Directive",
      "POLST on file — Full Code; HCP: son Anthony Marchetti"
    ]
  ],
  "meta": {
    "caseId": "complete-heart-block-v2",
    "diagnosis": "Complete Heart Block (Degenerative Conduction Disease with Severe Aortic Stenosis)",
    "acuity": 1,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Mrs. Marchetti appears anxious but cooperative, speaking in short sentences due to mild dyspnea. She's forthcoming about her symptoms and expresses concern about becoming like her late husband who died of heart failure. She demonstrates moderate distress, frequently pausing to catch her breath.",
    "interviewQuestions": [
      "Can you describe exactly what happens when you feel short of breath?",
      "Tell me more about these episodes where you felt faint - what were you doing when they occurred?",
      "Have you noticed your heart beating irregularly or skipping beats?",
      "Do you get chest pain or pressure with the shortness of breath?",
      "How far can you walk now compared to a few months ago?",
      "Have you had any swelling in your legs or feet?",
      "Do you get short of breath when lying flat or wake up gasping for air?",
      "Have you noticed feeling more tired or fatigued lately?",
      "Any dizziness or lightheadedness besides those two episodes?",
      "Have you had any recent changes to your medications?",
      "Any recent infections, fevers, or illnesses?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble concentrating with feeling so winded.",
      "onset": "The shortness of breath has been getting worse over the past 3-4 months, but really noticeable the last 6 weeks. The near-fainting spells happened about 2 months ago and then again 3 weeks ago.",
      "character": "It's like I just can't catch my breath, even with simple things like getting dressed. My heart feels like it's beating so slowly and irregularly.",
      "location": "The shortness of breath is just everywhere - my whole chest feels tight. No pain really, just can't get enough air.",
      "severity": "The shortness of breath is about a 7 out of 10 now. I can barely walk from my bedroom to the kitchen without stopping to rest. I used to be able to walk around the block.",
      "aggravating": "Any activity makes it worse - even just talking for too long like this. Standing up quickly definitely makes the dizziness worse.",
      "relieving": "Sitting down and resting helps a little, but not like it used to. Nothing really makes it go away completely anymore.",
      "associated": "I've been so tired lately, and my ankles have been a bit swollen. Sometimes I feel dizzy when I stand up, and I've noticed my heart beating very slowly.",
      "denies": "No chest pain, no palpitations or racing heart, no fever, no cough, no nausea or vomiting. I haven't fainted completely, just felt like I might.",
      "history": "I've had heart problems before - they told me I have severe narrowing of my heart valve and some rhythm problems. My sister got a pacemaker when she was 80.",
      "medications": "Amlodipine 5mg daily; Losartan 50mg daily; Levothyroxine 50mcg daily; Denosumab 60mg SubQ q6months; Calcium/Vitamin D 600mg/400IU BID; Acetaminophen 500mg q6h PRN",
      "allergies": "Beta-Blockers (Metoprolol), NSAIDs",
      "family": "My father had severe aortic stenosis and needed valve replacement at 78. My sister has a pacemaker and she's doing well at 86. My husband died of heart failure in 2019.",
      "social": "I'm a retired school librarian, been widowed since 2019. I've never smoked and don't drink alcohol. I live alone but my daughter checks on me daily."
    },
    "examManeuvers": [
      "Heart rate and rhythm assessment",
      "Cardiac auscultation",
      "Jugular venous pressure",
      "Carotid pulse character",
      "Peripheral edema assessment",
      "Lung auscultation",
      "Blood pressure in both arms",
      "Orthostatic vital signs",
      "Assessment of peripheral perfusion",
      "Abdominal examination for hepatomegaly"
    ],
    "examFindings": {
      "Heart rate and rhythm assessment": "Heart rate 34 bpm, regular but very slow rhythm, no extra beats or irregularity",
      "Cardiac auscultation": "Loud harsh systolic murmur 4/6 heard best at right sternal border radiating to carotids, S4 gallop present, no S3",
      "Jugular venous pressure": "Elevated JVP to 8 cm with prominent 'a' waves",
      "Carotid pulse character": "Weak, delayed upstroke with diminished amplitude bilaterally, murmur audible over both carotid arteries",
      "Peripheral edema assessment": "1+ pitting edema bilateral lower extremities to mid-shin level",
      "Lung auscultation": "Bibasilar fine crackles, no wheeze or rhonchi",
      "Blood pressure in both arms": "Right arm 108/62, left arm 106/64, narrow pulse pressure",
      "Orthostatic vital signs": "Lying: 108/62 HR 34, Standing: 98/58 HR 36 with mild dizziness",
      "Assessment of peripheral perfusion": "Cool extremities, capillary refill 3 seconds, weak peripheral pulses",
      "Abdominal examination for hepatomegaly": "Liver edge palpable 2 cm below costal margin, no ascites or splenomegaly"
    },
    "ddxTargets": [
      "Complete Heart Block (Degenerative Conduction Disease with Severe Aortic Stenosis) (correct diagnosis)",
      "Severe Aortic Stenosis with Heart Failure",
      "Sick Sinus Syndrome with Bradycardia",
      "Acute Myocardial Infarction with Heart Block",
      "Hyperkalemia or Drug-Induced Bradycardia",
      "Decompensated Heart Failure with Bradycardia",
      "Medication-Induced Bradycardia"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the obvious bradycardia and missing the underlying complete heart block, or focusing solely on aortic stenosis without recognizing the conduction disease component requiring urgent intervention",
      "prematureClosure": "May stop at 'heart failure from aortic stenosis' without recognizing the complete heart block that requires immediate pacemaker placement before any other interventions",
      "availabilityBias": "Recent cases of simple bradycardia or heart failure may lead to missing the complete heart block, or assuming all elderly patients with murmurs just need medical management"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I see you're thinking about cardiac causes for her presentation. Given her age, known cardiac history, and the combination of symptoms, what specific aspects of the cardiac conduction system might you want to explore? How might her severe aortic stenosis interact with potential rhythm disorders?",
      "phase5": "Excellent work gathering the history and physical findings. You've identified bradycardia, signs of heart failure, and severe aortic stenosis. Now, looking at that heart rate of 34 with her symptoms - what does this constellation tell you about her conduction system? How does this change your management priorities?",
      "finalDebrief": "This case illustrates the importance of recognizing complete heart block in elderly patients with structural heart disease. Notice how the combination of severe aortic stenosis with degenerative conduction disease created a perfect storm - the stenosis limited cardiac output while the heart block prevented compensatory tachycardia. The family history of both aortic stenosis and pacemaker placement was a crucial clue. This patient needs urgent pacemaker placement before any consideration of valve intervention."
    }
  }
};
