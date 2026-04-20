
window.EMR_DATA = {
  "patient": {
    "name": "Michael Chang",
    "patientHPI": "I don't remember what happened, but my wife says I had a seizure that went on for several minutes and I'm still feeling really confused and out of it. I know I haven't been great about taking my seizure medicine lately, which was probably stupid of me.",
    "dob": "11/22/1993",
    "age": "33",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-135247",
    "language": "English",
    "race": "White",
    "phone": "(415) 555-2341",
    "email": "michael.chang@email.com",
    "address": "8937 Daisy Ave, Kansas City, MO 64108",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Rite Aid \u2014 Palm Ave",
    "emergencyContact": {
      "name": "Emily Chang",
      "phone": "(615) 555-1317",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Witnessed generalized seizure for >5 minutes, not returning to baseline",
    "diagnosis": "Status Epilepticus"
  },
  "problems": [
    {
      "problem": "Refractory status epilepticus \u2014 GTC ongoing",
      "icd": "G41.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Seizure 15+ min, lorazepam 4mg given without response"
    },
    {
      "problem": "Remote TBI \u2014 epileptogenic scar, probable etiology",
      "icd": "S09.90",
      "onset": "2021",
      "status": "Resolved",
      "notes": "Right frontal encephalomalacia on imaging"
    },
    {
      "problem": "Aspiration risk \u2014 ongoing seizure",
      "icd": "J69.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Lateral positioning, suction available"
    }
  ],
  "medications": [
    {
      "name": "Lorazepam 4mg IV x2 (given \u2014 no response)",
      "sig": "First-line given \u2014 no clinical response",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Levetiracetam 3000mg IV over 10 min",
      "sig": "ESETT trial second-line \u2014 infuse over 10 minutes",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Propofol infusion (third-line if LEV fails)",
      "sig": "Requires intubation \u2014 anesthesia on standby",
      "prescriber": "ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "Standby"
    }
  ],
  "allergies": [
    {
      "allergen": "Phenytoin",
      "reaction": "Stevens-Johnson Syndrome",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "168/102",
      "hr": "128",
      "rr": "8",
      "temp": "38.6\u00b0C",
      "spo2": "88%",
      "pain": "N/A",
      "bmi": "36",
      "weight": "91 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Witnessed generalized seizure for >5 minutes, not returning to baseline",
      "hpi": "Michael Chang is a 33-year-old male presenting with witnessed generalized seizure for >5 minutes, not returning to baseline. Past medical history includes Epilepsy (poorly controlled), History of non-adherence. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Status Epilepticus \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "SE Workup",
      "results": [
        {
          "test": "Glucose (POC)",
          "value": "82",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": ""
        },
        {
          "test": "Sodium",
          "value": "136",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": ""
        },
        {
          "test": "pH (ABG)",
          "value": "7.22",
          "unit": "",
          "ref": "7.35-7.45",
          "flag": "L"
        },
        {
          "test": "Lactate",
          "value": "6.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Temperature",
          "value": "38.8",
          "unit": "\u00b0C",
          "ref": "<38.0",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Head Without Contrast",
      "indication": "New-onset SE \u2014 rule out structural cause",
      "findings": "Right frontal encephalomalacia consistent with prior TBI. No acute hemorrhage or mass effect.",
      "impression": "Prior TBI scar \u2014 probable epileptogenic focus. No acute structural cause."
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Brother: epilepsy"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current smoker"
    ],
    [
      "Alcohol",
      "6-pack beer daily"
    ],
    [
      "Medication adherence",
      "Stopped taking seizure meds 2 weeks ago \u2014 felt fine"
    ],
    [
      "Occupation",
      "Construction worker"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Michael appears confused and disoriented, frequently rubbing his temples and squinting as if experiencing a headache. He seems genuinely remorseful about stopping his medications and is cooperative but has difficulty concentrating on questions, often asking for clarification or pausing mid-sentence.",
    "interviewQuestions": [
      "Can you tell me what you remember about what happened today?",
      "How long has it been since your last seizure before today?",
      "When did you stop taking your seizure medications and why?",
      "Have you been feeling unwell or feverish recently?",
      "Are you experiencing any headache, confusion, or difficulty thinking right now?",
      "Have you had any recent head injuries or trauma?",
      "How much alcohol do you typically drink, and when was your last drink?",
      "Have you been getting adequate sleep recently?",
      "Are you taking any other medications or substances?",
      "Have you had any recent illnesses or infections?",
      "How well controlled were your seizures when you were taking medication?",
      "Have you ever had seizures that lasted this long before?",
      "Are you experiencing any weakness, numbness, or vision changes?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm still feeling pretty foggy. Can you repeat that or ask it differently?",
      "onset": "My wife said it started about an hour ago while I was watching TV. I don't remember any of it happening.",
      "character": "I don't remember the seizure itself, but right now I feel really confused and have a pounding headache.",
      "location": "The headache is all over my head, and I just feel generally awful and confused.",
      "severity": "The confusion and headache are probably a 7 out of 10. I can barely think straight right now.",
      "aggravating": "Bright lights and loud noises are making my headache worse. Trying to think hard makes me feel more confused.",
      "relieving": "Nothing really helps. I just want to close my eyes and rest.",
      "associated": "I have a terrible headache, I feel hot and sweaty, and everything seems foggy. My whole body aches.",
      "denies": "No chest pain, no trouble breathing normally, no numbness or weakness that I can tell, no vision problems.",
      "history": "I've had epilepsy for about 10 years, but my seizures usually only last a minute or two and I bounce back pretty quickly.",
      "medications": "Levetiracetam; Lacosamide",
      "allergies": "Phenytoin",
      "family": "My older brother has epilepsy too, but his seems better controlled than mine.",
      "social": "I work construction, smoke about a pack a day, and drink a 6-pack of beer most nights. I stopped taking my seizure meds about two weeks ago because I was feeling fine and thought maybe I didn't need them anymore."
    },
    "examManeuvers": [
      "Mental status examination and Glasgow Coma Scale",
      "Cranial nerve examination",
      "Motor strength and tone assessment",
      "Deep tendon reflexes",
      "Plantar reflexes (Babinski sign)",
      "Coordination testing (finger-to-nose, heel-to-shin)",
      "Gait assessment",
      "Neck stiffness/meningeal signs",
      "Fundoscopic examination",
      "Skin examination for trauma or tongue biting"
    ],
    "examFindings": {
      "Mental status examination and Glasgow Coma Scale": "GCS 14 (E4 V4 M6), confused and disoriented to time, oriented to person and place, difficulty with attention and concentration",
      "Cranial nerve examination": "Pupils equal, round, reactive to light, extraocular movements intact, facial sensation and strength symmetric, hearing intact",
      "Motor strength and tone assessment": "Mild generalized weakness 4/5 throughout, normal muscle tone, no focal deficits",
      "Deep tendon reflexes": "Hyperreflexia 3+ bilaterally at biceps, triceps, patellar, and Achilles",
      "Plantar reflexes (Babinski sign)": "Equivocal plantar responses bilaterally",
      "Coordination testing (finger-to-nose, heel-to-shin)": "Mildly impaired coordination bilaterally, consistent with postictal state",
      "Gait assessment": "Unsteady, broad-based gait with assistance required",
      "Neck stiffness/meningeal signs": "No nuchal rigidity, negative Kernig and Brudzinski signs",
      "Fundoscopic examination": "No papilledema, normal optic discs and vessels",
      "Skin examination for trauma or tongue biting": "Lateral tongue laceration present, minor abrasions on forehead, no other trauma"
    },
    "ddxTargets": [
      "Refractory GCSE \u2014 second-line treatment required (correct)",
      "Non-convulsive SE after motor cessation \u2014 need cEEG",
      "Psychogenic non-epileptic spell \u2014 not during true SE",
      "Metabolic encephalopathy with myoclonus \u2014 labs normal",
      "Encephalitis \u2014 CSF pending",
      "Eclampsia \u2014 not pregnant"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known epilepsy history and missing secondary causes like infection or metabolic disorders that could precipitate status epilepticus",
      "prematureClosure": "Risk of assuming this is simple medication non-compliance without investigating fever and altered mental status that suggest possible underlying precipitant",
      "availabilityBias": "Risk of focusing on obvious medication non-compliance while missing signs of infection or other acute medical conditions that require immediate treatment"
    },
    "coachPrompts": {
      "phase2": "You've identified some key possibilities in your differential. This patient has a seizure lasting over 5 minutes with persistent altered mental status. What specific historical elements would help you distinguish between simple medication non-compliance versus an acute precipitating factor? Consider his vital signs - what might the fever and altered mental status suggest?",
      "phase5": "Now that you've completed your assessment, let's think through this systematically. You found evidence of a prolonged seizure with persistent confusion, fever, and hyperreflexia. How does this clinical picture help narrow your differential? What's the most concerning diagnosis you need to rule out immediately, and what would be your next steps in management?",
      "finalDebrief": "This case illustrates status epilepticus precipitated by medication non-adherence but complicated by possible infection. Your DDx likely evolved from simple seizure to considering status epilepticus, then incorporating the fever and altered mental status. The key learning points are recognizing status epilepticus criteria, identifying potential precipitants beyond just medication non-compliance, and understanding that fever in this context requires immediate investigation for CNS infection. How might you counsel this patient about medication adherence going forward?",
      "final": "Diagnosis: refractory GCSE. Key nursing learning: (1) Airway first \u2014 lateral position, suction, O2, anesthesia on standby. (2) Time benchmarks: benzos by 5 min, second-line by 20 min, third-line by 40 min. Each delay worsens neuronal injury. (3) ESETT trial: LEV 4500mg, fosphenytoin 20mg PE/kg, valproate 40mg/kg \u2014 all equivalent (~47% efficacy). LEV preferred: no cardiac monitoring required vs. fosphenytoin. (4) After motor stops: non-convulsive SE is common. Do NOT assume patient is post-ictal without cEEG. (5) Third-line = propofol/ketamine infusion \u2192 intubation + ICU. Nursing prepares RSI equipment, monitors continuous vitals."
    }
  },
  "meta": {
    "diagnosis": "Refractory Generalized Convulsive Status Epilepticus \u2014 Second-Line Agent Required",
    "caseId": "status-epilepticus"
  }
};
