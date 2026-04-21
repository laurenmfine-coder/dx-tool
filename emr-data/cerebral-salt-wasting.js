
window.EMR_DATA = {
  "patient": {
    "name": "Victor Ram\u00edrez",
    "patientHPI": "I was working out at the gym when suddenly I got hit with a severe headache \u2014 it came on in seconds. I threw up right there and my wife said I passed out for a few seconds. The light hurts my eyes and my neck feels really stiff.",
    "dob": "09/15/1972",
    "age": 52,
    "sex": "Male",
    "mrn": "RDX-2025-85714",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL \u2014 PPO",
    "pcp": "Dr. Michael Torres, MD",
    "pharmacy": "Publix Pharmacy \u2014 3200 Broward Blvd, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino (Dominican)",
    "address": "7203 N Kedzie Blvd, Milwaukee, WI 53208",
    "phone": "(954) 555-7291",
    "email": "v.ramirez72@email.com",
    "emergencyContact": {
      "name": "Elena Ram\u00edrez (Wife)",
      "phone": "(954) 555-7294"
    },
    "chiefComplaint": "Weakness and confusion during hospital recovery"
  },
  "problems": [
    {
      "problem": "Cerebral salt wasting \u2014 post-SAH day 10, severe hyponatremia",
      "icd": "E87.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Elena Rodriguez, 54F \u2014 SAH from ruptured ICA aneurysm, coiled 10 days ago. Now Na 118, volume-depleted clinically. CSW vs SIADH distinction critical \u2014 treatment is opposite."
    },
    {
      "problem": "Volume depletion \u2014 distinguishes CSW from SIADH",
      "icd": "E87.1",
      "onset": "2024",
      "status": "Active",
      "notes": "CSW: volume depleted (elevated BUN, tachycardia, orthostasis, negative fluid balance). SIADH: euvolemic or mildly hypervolemic. Clinical assessment of volume status is the key diagnostic step."
    },
    {
      "problem": "Vasospasm risk \u2014 hyponatremia and volume depletion worsen cerebral perfusion",
      "icd": "I60.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Post-SAH vasospasm peaks days 5-14. Volume depletion reduces cerebral perfusion pressure. Hyponatremia + vasospasm = high risk for delayed cerebral ischemia."
    }
  ],
  "medications": [
    {
      "name": "IV normal saline or hypertonic saline \u2014 volume replacement",
      "sig": "CSW treatment: replace sodium AND volume with NS or 3% NaCl. Correct sodium no faster than 10-12mEq/L in 24 hours (avoid osmotic demyelination syndrome). Use 3% NaCl if severe or symptomatic.",
      "prescriber": "Neurosurgery/Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 3% NaCl at 20mL/hr"
    },
    {
      "name": "Fludrocortisone 0.1mg BID \u2014 reduces natriuresis",
      "sig": "Mineralocorticoid reduces renal sodium wasting in CSW. Adjunct to fluid replacement. Can reduce the volume of IV fluid needed.",
      "prescriber": "Neurosurgery/Endocrinology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Fluid restriction is CONTRAINDICATED in CSW",
      "sig": "Fluid restriction treats SIADH (euvolemic hyponatremia). Fluid restriction in CSW worsens volume depletion \u2192 worsens cerebral perfusion \u2192 triggers vasospasm \u2192 delayed cerebral ischemia. Do NOT restrict fluids.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 contraindicated"
    }
  ],
  "allergies": [
    {
      "allergen": "Phenytoin",
      "type": "Drug",
      "reaction": "Severe rash (possible drug hypersensitivity)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2025",
      "bp": "98/62",
      "hr": 104,
      "rr": 18,
      "temp": "98.8\u00b0F",
      "spo2": "97%",
      "wt": "172 lbs",
      "ht": "5'8\"",
      "bmi": 26.1,
      "setting": "ED"
    },
    {
      "date": "02/19/2025",
      "bp": "128/78",
      "hr": 76,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "178 lbs",
      "ht": "5'8\"",
      "bmi": 27.1,
      "setting": "Rehab Facility"
    },
    {
      "date": "02/14/2025",
      "bp": "192/108",
      "hr": 88,
      "rr": 20,
      "temp": "99.0\u00b0F",
      "spo2": "98%",
      "wt": "182 lbs",
      "ht": "5'8\"",
      "bmi": 27.7,
      "setting": "ED (initial SAH presentation)"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/14/2025",
      "type": "ED",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Worst headache of my life \u2014 sudden onset, thunderclap",
      "hpi": "52-year-old male with HTN presenting with sudden-onset severe headache (10/10) that began during exercise. Associated nausea, vomiting, brief LOC witnessed by wife. Photophobia. Neck stiffness. No focal neurological deficits on arrival. GCS 14 (E3V5M6).",
      "exam": "General: Distressed, photophobic. Neuro: GCS 14, pupils equal and reactive, no focal motor/sensory deficit, nuchal rigidity, positive Kernig sign. CV: HTN 192/108, RRR. Lungs: CTA.",
      "assessment": "1. Subarachnoid hemorrhage \u2014 Hunt & Hess Grade III, Fisher Grade 3\n2. Ruptured anterior communicating artery aneurysm on CTA",
      "plan": "1. Neurosurgery emergent consult \u2192 clipping performed day 1\n2. Nimodipine for vasospasm prophylaxis\n3. Levetiracetam for seizure prophylaxis\n4. ICU admission, EVD placed for hydrocephalus\n5. Strict BP management"
    },
    {
      "id": "V002",
      "date": "01/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Michael Torres, MD",
      "cc": "Follow-up: HTN, DM, lipids",
      "hpi": "52-year-old male for routine chronic disease management. BP running 140s-150s on amlodipine 10mg \u2014 discussed adding second agent. A1c 7.2% \u2014 improved from 7.8%. Compliant with medications. No headaches, vision changes, or new symptoms.",
      "exam": "General: Well-appearing. CV: RRR, no murmur. BP 148/88. Lungs: CTA. Neuro: A&O x3, no focal deficits. Fundoscopic: No papilledema, mild arteriolar narrowing.",
      "assessment": "1. Hypertension \u2014 suboptimal control, BP 148/88\n2. Type 2 DM \u2014 improving, A1c 7.2%\n3. Hyperlipidemia \u2014 on statin",
      "plan": "1. Add lisinopril 10mg daily for BP\n2. Continue metformin, atorvastatin, amlodipine\n3. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "CSW vs SIADH Differentiation",
      "results": [
        {
          "test": "Serum sodium",
          "value": "118",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Urine sodium",
          "value": "180",
          "unit": "mEq/L",
          "ref": "<20 = sodium conserving; >20 = sodium wasting",
          "flag": "H"
        },
        {
          "test": "Urine osmolality",
          "value": "620",
          "unit": "mOsm/kg",
          "ref": "Concentrated \u2014 both CSW and SIADH",
          "flag": "H"
        },
        {
          "test": "BUN",
          "value": "28",
          "unit": "mg/dL",
          "ref": "7-20 (elevated = volume depleted)",
          "flag": "H"
        },
        {
          "test": "Clinical volume status",
          "value": "Tachycardia 108, orthostasis +20mmHg drop, mucous membranes dry \u2014 VOLUME DEPLETED",
          "unit": "",
          "ref": "Euvolemic = SIADH",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL862T",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Moderna, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV891K",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "TA194R",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "Shingrix (1st dose)",
      "date": "11/2023",
      "site": "Left deltoid IM",
      "lot": "SH198P",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother (age 78): Hypertension, stroke at age 72 (recovered)",
    "Father: Deceased at 65 \u2014 ruptured cerebral aneurysm",
    "Brother (age 49): Hypertension, pre-diabetes",
    "Family history SIGNIFICANT for cerebral aneurysms (father died of rupture)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Electrician \u2014 union member; currently on medical leave"
    ],
    [
      "Marital",
      "Married x 25 years; wife Elena is primary support"
    ],
    [
      "Tobacco",
      "Former \u2014 quit 5 years ago; previously 1 PPD x 20 years"
    ],
    [
      "Alcohol",
      "Social \u2014 3-4 beers/week; abstaining since hospitalization"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Previously active \u2014 gym 3x/week; currently in rehab"
    ],
    [
      "Housing",
      "Single-family home with wife and teenage daughter"
    ],
    [
      "Safety",
      "No firearms"
    ],
    [
      "Advance Directive",
      "Healthcare proxy: Elena Ram\u00edrez (wife)"
    ]
  ],
  "meta": {
    "caseId": "cerebral-salt-wasting",
    "diagnosis": "Cerebral Salt Wasting Syndrome \u2014 Post-SAH Hyponatremia",
    "acuity": 2,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Victor appears fatigued and mildly confused, frequently asking to repeat questions and seeming disoriented about recent events. He's cooperative but shows some anxiety about his ongoing symptoms, often looking to his wife Elena for reassurance and clarification of his medical timeline.",
    "interviewQuestions": [
      "Can you tell me about your current symptoms and how you're feeling today?",
      "Have you noticed any changes in your urination - frequency, amount, or color?",
      "How has your appetite been, and have you been able to keep food and fluids down?",
      "Are you experiencing any nausea, vomiting, or stomach upset?",
      "Have you noticed any weakness, muscle cramps, or twitching?",
      "Any headaches, dizziness, or changes in your vision?",
      "How has your energy level been compared to before your surgery?",
      "Have you been following your fluid restrictions as instructed?",
      "Any confusion, memory problems, or difficulty concentrating?",
      "Are you having any chest pain, shortness of breath, or heart palpitations?",
      "Tell me about your current medications and how you've been taking them",
      "Have you noticed any swelling in your legs, feet, or anywhere else?",
      "Any recent changes in your weight that you've noticed?"
    ],
    "patientResponses": {
      "default": "I'm sorry, can you repeat that? I'm having trouble concentrating and Elena usually helps me with the medical stuff.",
      "onset": "I've been feeling really weak and tired for the past few days since my surgery. Elena says I've been more confused and not eating much.",
      "character": "I feel completely drained, like I have no energy at all. Everything feels foggy and I can't think straight.",
      "location": "The weakness is all over my body, but especially in my arms and legs. My head still aches but not like the thunderclap I had initially.",
      "severity": "The weakness is about a 7 out of 10 - I can barely get out of bed without help. It's much worse than right after my surgery.",
      "aggravating": "Standing up makes me feel really dizzy and weak. Even trying to eat makes me feel nauseous.",
      "relieving": "Lying down helps a little with the dizziness, but nothing really makes the weakness go away.",
      "associated": "I've been very nauseous, not wanting to eat much, and Elena says I've been urinating a lot more than usual. Sometimes I feel muscle twitches.",
      "denies": "No chest pain, no shortness of breath, no seizures since the surgery. No fever or chills.",
      "history": "Never had anything like this before the brain hemorrhage. I was pretty healthy except for my blood pressure and diabetes.",
      "medications": "Amlodipine 10mg daily; Nimodipine 60mg Q4h; Levetiracetam 500mg BID; Atorvastatin 40mg QHS; Metformin 1000mg BID",
      "allergies": "Phenytoin",
      "family": "My father died from a brain aneurysm rupture when he was 65. My mother had a stroke but recovered. My brother has high blood pressure.",
      "social": "I'm an electrician with the union, been doing that for 25 years. I'm on medical leave now. Elena, my wife, has been taking care of everything. I quit smoking 5 years ago after smoking a pack a day for 20 years. I usually have a few beers a week but haven't had any since this happened."
    },
    "examManeuvers": [
      "General appearance and mental status assessment",
      "Orthostatic vital signs",
      "Neurological examination including cranial nerves",
      "Assessment of muscle strength and reflexes",
      "Examination for signs of volume depletion",
      "Cardiac examination",
      "Pulmonary examination",
      "Assessment of skin turgor and mucous membranes",
      "Examination for peripheral edema",
      "Assessment for Chvostek's and Trousseau's signs"
    ],
    "examFindings": {
      "General appearance and mental status assessment": "Patient appears tired and mildly confused, oriented x2 (person and place but uncertain about date), slow to respond to questions",
      "Orthostatic vital signs": "Lying: BP 98/62, HR 104; Sitting: BP 88/58, HR 118; Standing: BP 82/54, HR 128 with dizziness",
      "Neurological examination including cranial nerves": "Cranial nerves II-XII intact, no focal deficits, mild confusion but no asterixis",
      "Assessment of muscle strength and reflexes": "Generalized weakness 4/5 throughout, reflexes 2+ and symmetric, no pathological reflexes",
      "Examination for signs of volume depletion": "Dry mucous membranes, decreased skin turgor, sunken eyes",
      "Cardiac examination": "Tachycardic but regular rhythm, no murmurs, gallops, or rubs",
      "Pulmonary examination": "Clear to auscultation bilaterally, no rales or rhonchi",
      "Assessment of skin turgor and mucous membranes": "Poor skin turgor with slow recoil, dry sticky mucous membranes",
      "Examination for peripheral edema": "No peripheral edema, no JVD, flat neck veins",
      "Assessment for Chvostek's and Trousseau's signs": "Negative Chvostek's and Trousseau's signs"
    },
    "ddxTargets": [
      "Cerebral salt wasting (correct \u2014 volume depleted)",
      "SIADH \u2014 euvolemic or hypervolemic; low urine output; restrict fluids; opposite treatment to CSW",
      "Adrenal insufficiency \u2014 hyponatremia + hyperkalemia; low cortisol; cortisol stimulation test",
      "Hypothyroidism \u2014 thyroid-related hyponatremia; TSH elevated; thyroid replacement",
      "Diuretic-induced hyponatremia \u2014 thiazide use; volume depleted but urine sodium <20 early; history"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on SIADH as the most common cause of post-SAH hyponatremia, missing the key volume depletion that distinguishes cerebral salt wasting",
      "prematureClosure": "May stop investigation after finding hyponatremia without fully assessing volume status and urine sodium losses",
      "availabilityBias": "SIADH is more commonly discussed than cerebral salt wasting, leading to availability bias toward the more familiar diagnosis"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you're thinking about post-SAH complications. What key clinical features would help you distinguish between the most common causes of hyponatremia in this setting? Think about what your physical exam should focus on.",
      "phase5": "Excellent work gathering the history and exam findings. Now you have a patient with severe hyponatremia and clear volume depletion 10 days post-SAH. How does the volume status help you narrow your differential between the major causes of post-neurosurgical hyponatremia?",
      "finalDebrief": "This case highlights the critical importance of volume assessment in post-SAH hyponatremia. While SIADH is more commonly discussed, cerebral salt wasting actually occurs frequently after brain injury and requires very different management - volume repletion rather than restriction. The key distinguishing features are volume depletion, orthostatic changes, and high urine sodium losses. How would your treatment approach differ between these two diagnoses?",
      "final": "Diagnosis: cerebral salt wasting (CSW). Key learning: (1) CSW vs SIADH \u2014 the most important distinction in post-SAH hyponatremia: CSW = volume DEPLETED (tachycardia, orthostasis, elevated BUN, high urine sodium due to renal salt wasting). SIADH = euvolemic or slightly hypervolemic (urine sodium high but volume normal). Both have high urine sodium and osmolality \u2014 volume status is the KEY differentiator. (2) Treatment is OPPOSITE: CSW \u2192 replace salt and volume. SIADH \u2192 restrict fluids. Treating CSW with fluid restriction (as for SIADH) causes severe volume depletion, worsens cerebral perfusion, and triggers delayed cerebral ischemia. This error is potentially fatal in post-SAH patients. (3) Mechanism of CSW: brain injury \u2192 release of brain natriuretic peptide (BNP) and atrial natriuretic peptide (ANP) \u2192 renal sodium and water wasting \u2192 volume depletion \u2192 dilutional hyponatremia. (4) Correction rate: maximum 10-12mEq/L per 24 hours to prevent osmotic demyelination syndrome (ODS), formerly called central pontine myelinolysis. Use 3% NaCl for severe symptomatic hyponatremia. (5) Post-SAH vasospasm window: days 4-14 after ictus. Volume depletion during this window dramatically increases risk of delayed cerebral ischemia. Triple-H therapy (hypertension, hypervolemia, hemodilution) \u2014 now controversial but maintaining euvolemia/normovolemia is still critical."
    }
  }
};
