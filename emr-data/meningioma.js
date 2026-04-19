// Virtual EMR Case: Meningioma
// Variant: meningioma | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Linda Vasquez-Torres",
    "patientHPI": "My headaches have been different lately - I still get my usual ones, but now I have this constant pain on the left side of my head that won't go away no matter what I take. It's been getting worse in the mornings over the past few months.",
    "dob": "04/16/1968",
    "age": 56,
    "sex": "Female",
    "mrn": "RDX-2025-55892",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Sandra Delgado, MD",
    "pharmacy": "Publix Pharmacy — 5800 S University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino (Puerto Rican)",
    "address": "7810 Maple St, Baltimore, MD 21213",
    "phone": "(954) 555-6724",
    "email": "l.vasqueztorres@email.com",
    "emergencyContact": {
      "name": "Roberto Torres (Husband)",
      "phone": "(954) 555-6727"
    },
    "chiefComplaint": "First-ever seizure"
  },
  "problems": [
    {
      "problem": "Meningioma — Left Parasagittal (New Diagnosis)",
      "icd": "D32.0",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — first seizure; CT/MRI shows extra-axial dural-based mass consistent with meningioma"
    },
    {
      "problem": "Chronic Migraine with Aura",
      "icd": "G43.101",
      "onset": "2002",
      "status": "Active",
      "notes": "8-12 migraines/month; visual aura; on topiramate and sumatriptan PRN; headache character recently changed — 'different from usual migraines' per patient"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2015",
      "status": "Active",
      "notes": "On amlodipine; well-controlled"
    },
    {
      "problem": "Obesity",
      "icd": "E66.01",
      "onset": "2018",
      "status": "Active",
      "notes": "BMI 33; counseled on weight loss; postmenopausal weight gain"
    },
    {
      "problem": "Hormone Replacement Therapy (Past Use)",
      "icd": "Z79.890",
      "onset": "2016",
      "status": "Resolved",
      "notes": "Combined estrogen-progesterone HRT for menopausal symptoms from 2016-2022; discontinued due to breast cancer screening concern"
    }
  ],
  "medications": [
    {
      "name": "Topiramate 50mg BID",
      "sig": "Take 1 tablet by mouth twice daily for migraine prevention",
      "prescriber": "Dr. Patel (Neurology)",
      "start": "08/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Sumatriptan 50mg PRN",
      "sig": "Take 1 tablet at onset of migraine; may repeat x 1 in 2 hours (max 200mg/day)",
      "prescriber": "Dr. Patel (Neurology)",
      "start": "04/2010",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Delgado",
      "start": "03/2016",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Metoclopramide",
      "type": "Drug",
      "reaction": "Akathisia (severe restlessness)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/25/2025",
      "bp": "152/88",
      "hr": 92,
      "rr": 18,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "198 lbs",
      "ht": "5'4\"",
      "bmi": 34,
      "setting": "ED"
    },
    {
      "date": "10/22/2024",
      "bp": "132/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "196 lbs",
      "ht": "5'4\"",
      "bmi": 33.6,
      "setting": "PCP Office"
    },
    {
      "date": "04/16/2024",
      "bp": "128/76",
      "hr": 72,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "194 lbs",
      "ht": "5'4\"",
      "bmi": 33.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/22/2024",
      "type": "Primary Care",
      "provider": "Dr. Sandra Delgado, MD",
      "cc": "Routine follow-up; headache pattern change",
      "hpi": "56-year-old female with chronic migraines presenting for routine follow-up. Reports that while migraine frequency is unchanged (8-12/month), the character has shifted over the past 2-3 months — new persistent left-sided headache that does not respond to sumatriptan as well. Headaches now worse in the morning. Occasional left arm 'tingling' (new). Denies vision changes, weakness, speech problems, or seizures. Attributes symptoms to stress at work.",
      "exam": "General: Well-appearing, obese. HEENT: PERRL, EOMI. CV: RRR. Lungs: CTA. Neuro: A&O x3. Cranial nerves intact. Motor: 5/5 all extremities. Sensory: Intact. Gait: Normal. No pronator drift.",
      "assessment": "1. Migraine — pattern change; new persistent unilateral headache not responding to usual therapy; morning predominance\n2. Left arm paresthesias — new; needs evaluation\n3. HTN — controlled\n4. Obesity",
      "plan": "1. Neurology follow-up moved up — Dr. Patel's office contacted\n2. Consider MRI brain if headache pattern does not improve in 2-4 weeks\n3. Continue topiramate and sumatriptan\n4. Continue amlodipine\n5. Return precautions: weakness, speech changes, seizure → ED"
    },
    {
      "id": "V002",
      "date": "01/15/2025",
      "type": "Specialist",
      "provider": "Dr. Anita Patel, MD (Neurology)",
      "cc": "Headache pattern change, left arm paresthesias",
      "hpi": "56-year-old female with chronic migraine referred for headache pattern change. Reports 3-4 months of new persistent left-sided headache, morning-dominant, poorly responsive to sumatriptan. Intermittent left arm tingling, 2-3 episodes per week lasting minutes. No motor weakness. No seizures. No visual changes. Exam today shows subtle left pronator drift (new). MRI brain ordered — scheduled for 02/05/2025.",
      "exam": "Neuro: A&O x3. Cranial nerves: Intact, PERRL, visual fields full. Motor: Subtle left pronator drift; 5-/5 left grip (4+/5). Sensory: Diminished light touch left hand. Reflexes: 3+ left UE (2+ elsewhere). Gait: Normal. Coordination: Mild dysmetria left finger-to-nose.",
      "assessment": "1. New focal neurologic findings (left pronator drift, hyperreflexia, dysmetria) in setting of headache pattern change — concerning for right-hemisphere structural lesion\n2. MRI brain urgent — ordered STAT",
      "plan": "1. MRI brain with and without contrast — STAT\n2. If mass lesion → neurosurgery referral\n3. Start levetiracetam 500mg BID if seizure occurs before MRI\n4. Patient and husband counseled on seizure precautions and when to go to ED\n5. NOTE: Patient had appointment for MRI on 02/05 but did not attend due to work conflict — rescheduled for 03/01"
    }
  ],
  "labs": [
    {
      "date": "02/25/2025",
      "time": "21:15",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "collected": "02/25/2025 21:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-105891",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "108",
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
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.0",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
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
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "268",
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
      "date": "02/25/2025",
      "study": "MRI BRAIN WITH AND WITHOUT CONTRAST",
      "accession": "IMG-2025-10521",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "readBy": "Dr. Robert Nash, MD (Neuroradiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "56-year-old with new-onset GTC seizure, progressive headache, left arm paresthesias, left pronator drift — concern for intracranial mass",
      "technique": "Multiplanar MRI of the brain with and without gadolinium. Sequences: T1, T2, FLAIR, DWI, post-contrast T1.",
      "findings": "RIGHT PARASAGITTAL FRONTAL REGION: A well-circumscribed, extra-axial, dural-based mass in the right parasagittal frontal region measuring 4.8 x 4.0 x 3.6 cm. The mass is isointense on T1, slightly hyperintense on T2, and demonstrates avid homogeneous enhancement with a dural tail sign. It is attached to the falx cerebri and compresses the underlying right frontal cortex with 8 mm leftward midline shift.\n\nEDEMA: Moderate perilesional vasogenic edema in the right frontal white matter.\n\nVENTRICLES: Compression of the right frontal horn. No hydrocephalus.\n\nSUPERIOR SAGITTAL SINUS: Patent. No invasion of the sinus.\n\nOTHER: No additional lesions. No restricted diffusion within the mass.",
      "impression": "1. LARGE RIGHT PARASAGITTAL MENINGIOMA (4.8 cm) with classic imaging features: extra-axial, dural-based, homogeneous enhancement, dural tail sign\n2. Significant mass effect with 8 mm leftward midline shift — explains contralateral (left-sided) symptoms\n3. Superior sagittal sinus patent — favorable for surgical planning\n4. Moderate surrounding edema\n5. WHO grade I meningioma most likely based on imaging characteristics (no restricted diffusion, no necrosis)\n6. Neurosurgery consultation for resection recommended",
      "dictated": "02/25/2025 22:00",
      "verified": "02/25/2025 22:12"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL814K",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Moderna, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV788T",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Shingrix (1st dose)",
      "date": "05/2022",
      "site": "Right deltoid IM",
      "lot": "SH318K",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2nd dose)",
      "date": "07/2022",
      "site": "Right deltoid IM",
      "lot": "SH324K",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "08/2020",
      "site": "Left deltoid IM",
      "lot": "TA192R",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Mother (age 80): Hypertension, Type 2 Diabetes, breast cancer (age 72, treated)",
    "Father: Deceased at age 68 — MI",
    "Sister (age 53): Obesity, prediabetes",
    "Brother (age 60): Healthy",
    "No family history of brain tumors or seizure disorder"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Administrative supervisor at local school district — full-time"
    ],
    [
      "Marital",
      "Married x 30 years; lives with husband"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social — 1-2 glasses wine on weekends"
    ],
    [
      "Drugs",
      "None"
    ],
    [
      "Exercise",
      "Zumba class 2x/week; walks 3x/week"
    ],
    [
      "Housing",
      "Single-family home"
    ],
    [
      "Safety",
      "No concerns"
    ],
    [
      "Advance Directive",
      "None — will establish per neurosurgery recommendation"
    ]
  ],
  "meta": {
    "caseId": "meningioma",
    "diagnosis": "Right Parasagittal Meningioma (4.8 cm) with New-Onset Seizure, Contralateral Focal Deficits, and 8 mm Midline Shift",
    "acuity": 3,
    "presentation": "Seizure",
    "category": "oncologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Linda appears anxious and somewhat frightened, as this is her first seizure episode which has shaken her confidence. She is cooperative and detailed in describing her symptoms, particularly concerned about the change in her usual migraine pattern. She maintains composure but shows underlying worry about what this means for her ability to work and care for her family.",
    "interviewQuestions": [
      "Can you describe exactly what happened during the seizure episode?",
      "How have your headaches changed from your usual migraines?",
      "Have you noticed any weakness or numbness in your arms or legs?",
      "Any changes in your vision, speech, or coordination?",
      "Have you had any nausea, vomiting, or changes in appetite?",
      "Any memory problems or confusion lately?",
      "Have you noticed any personality or mood changes?",
      "Any recent changes in your hormone replacement therapy or other medications?",
      "Have you had any recent head trauma or injuries?",
      "Any family history of seizures, brain tumors, or neurological conditions?",
      "Have you experienced any recent weight changes or unusual fatigue?",
      "Any changes in your menstrual cycle or menopausal symptoms?",
      "Have you noticed the headaches getting worse with coughing, bending, or lying down?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - could you explain that differently? I'm still pretty shaken up from what happened.",
      "onset": "The seizure happened this morning around 7 AM while I was getting ready for work. But these new headaches started about 3-4 months ago, gradually getting worse. They're completely different from my regular migraines.",
      "character": "The seizure felt like I lost control completely - my husband said I went rigid and then started shaking. The headaches are a constant, deep aching pain that's different from my usual throbbing migraines.",
      "location": "The constant headache is mainly on the left side of my head, deep inside. During the seizure, my husband said my right arm and leg were jerking more than my left side.",
      "severity": "The headache is about a 6-7 out of 10 most days, but it never completely goes away like my migraines used to. The seizure was terrifying - I've never experienced anything like that.",
      "aggravating": "The headaches are definitely worse in the mornings when I first wake up, and they seem worse when I bend over or cough. Stress at work makes them more noticeable too.",
      "relieving": "My usual migraine medications aren't helping these new headaches at all. Even strong over-the-counter pain relievers barely touch them. Nothing seems to make them go away completely.",
      "associated": "I've been more clumsy lately, especially with my right hand - dropping things at work. Sometimes I feel a bit off-balance, and I've had some nausea in the mornings along with the headaches.",
      "denies": "No fever, no neck stiffness, no changes in vision or speech that I've noticed. No recent head injuries or trauma. I haven't had any confusion or memory problems that I'm aware of.",
      "history": "I've never had a seizure before in my life. My regular migraines I've had for years, but these new headaches are completely different - they don't respond to my usual treatments and they're constant.",
      "medications": "Topiramate 50mg BID; Sumatriptan 50mg PRN; Amlodipine 5mg daily",
      "allergies": "Metoclopramide",
      "family": "My mother had breast cancer at 72 but no seizures or brain problems. My father died of a heart attack. No family history of seizures or brain tumors that I know of.",
      "social": "I work full-time as an administrative supervisor at the school district - very busy job. I'm married 30 years, never smoked, just have a glass or two of wine on weekends. I used to take hormone replacement therapy but stopped a few years ago."
    },
    "examManeuvers": [
      "Neurological screening exam",
      "Motor strength testing bilateral upper and lower extremities",
      "Deep tendon reflexes",
      "Coordination testing (finger-to-nose, heel-to-shin)",
      "Gait assessment",
      "Fundoscopic examination",
      "Cranial nerve examination",
      "Sensory examination",
      "Cerebellar function testing",
      "Signs of increased intracranial pressure"
    ],
    "examFindings": {
      "Neurological screening exam": "Alert and oriented x3, appropriate affect, mild right-sided motor deficits noted",
      "Motor strength testing bilateral upper and lower extremities": "Left side 5/5 throughout, right side 4/5 in upper extremity and 4+/5 in lower extremity",
      "Deep tendon reflexes": "Hyperreflexia on right side (3+ biceps, triceps, patellar, Achilles), normal 2+ on left side",
      "Coordination testing (finger-to-nose, heel-to-shin)": "Mild dysmetria on right side, left side normal",
      "Gait assessment": "Slight right-sided weakness with mild circumduction of right leg",
      "Fundoscopic examination": "Mild papilledema bilaterally suggestive of increased intracranial pressure",
      "Cranial nerve examination": "Cranial nerves II-XII intact, no focal deficits",
      "Sensory examination": "Intact to light touch, vibration, and position sense bilaterally",
      "Cerebellar function testing": "Mild right-sided ataxia, rapid alternating movements slower on right",
      "Signs of increased intracranial pressure": "Morning headaches, papilledema present, no obvious altered mental status"
    },
    "ddxTargets": [
      "Right Parasagittal Meningioma (4.8 cm) with New-Onset Seizure, Contralateral Focal Deficits, and 8 mm Midline Shift (correct diagnosis)",
      "Primary brain tumor (glioblastoma or other high-grade glioma)",
      "Brain metastases from unknown primary",
      "Cerebral venous sinus thrombosis",
      "Large acute ischemic stroke",
      "Complex migraine with status migrainosus",
      "Medication overuse headache with breakthrough seizure"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on chronic migraine history and dismissing new headache pattern as migraine variant, missing the space-occupying lesion",
      "prematureClosure": "May stop at 'breakthrough seizure in migraine patient' without considering structural causes given the focal neurological deficits",
      "availabilityBias": "Recent cases of migraine or medication changes might overshadow consideration of intracranial mass lesion"
    },
    "coachPrompts": {
      "phase2": "You've identified some important differentials. Before interviewing the patient, consider: What specific historical features would help you differentiate between a primary seizure disorder, migraine-related seizure, and a structural brain lesion? What questions about the headache pattern evolution will be most revealing?",
      "phase5": "Excellent work gathering the history and exam findings. The combination of new-onset seizure, contralateral motor deficits, morning headaches, and papilledema is quite telling. How do these findings fit together pathophysiologically? What's the most likely anatomical location and what imaging would you prioritize?",
      "finalDebrief": "This case demonstrates how a patient's established diagnosis (chronic migraine) can create anchoring bias. The key red flags were the change in headache pattern, morning predominance, focal neurological signs, and papilledema. The parasagittal location explains the contralateral motor findings and seizure pattern. How might you counsel this patient about the likely need for surgical intervention?"
    }
  }
};
