/* emr-data/status-epilepticus.js — Auto-generated EMR case data for Status Epilepticus */
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
    "pharmacy": "Rite Aid — Palm Ave",
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
      "id": "prob-1",
      "description": "Epilepsy (poorly controlled)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "History of non-adherence",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Levetiracetam",
      "dose": "1000mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-2",
      "name": "Lacosamide",
      "dose": "200mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
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
      "temp": "38.6°C",
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
      "assessment": "Status Epilepticus — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-987761",
      "collected": "03/01/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
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
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "42",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "L"
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Lactate",
              "value": "6.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Ck",
              "value": "2400",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/01/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-509113",
      "clinical": "Witnessed generalized seizure for >5 minutes, not returning to baseline",
      "technique": "Standard protocol",
      "findings": "No acute hemorrhage or mass. No midline shift.",
      "impression": "No acute structural etiology for seizures.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
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
      "Stopped taking seizure meds 2 weeks ago — felt fine"
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
      "Status epilepticus (correct diagnosis)",
      "Prolonged postictal state",
      "Intracranial infection (meningitis/encephalitis)",
      "Intracranial hemorrhage",
      "Hypoglycemia or metabolic encephalopathy",
      "Alcohol withdrawal seizures",
      "Drug intoxication or withdrawal"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known epilepsy history and missing secondary causes like infection or metabolic disorders that could precipitate status epilepticus",
      "prematureClosure": "Risk of assuming this is simple medication non-compliance without investigating fever and altered mental status that suggest possible underlying precipitant",
      "availabilityBias": "Risk of focusing on obvious medication non-compliance while missing signs of infection or other acute medical conditions that require immediate treatment"
    },
    "coachPrompts": {
      "phase2": "You've identified some key possibilities in your differential. This patient has a seizure lasting over 5 minutes with persistent altered mental status. What specific historical elements would help you distinguish between simple medication non-compliance versus an acute precipitating factor? Consider his vital signs - what might the fever and altered mental status suggest?",
      "phase5": "Now that you've completed your assessment, let's think through this systematically. You found evidence of a prolonged seizure with persistent confusion, fever, and hyperreflexia. How does this clinical picture help narrow your differential? What's the most concerning diagnosis you need to rule out immediately, and what would be your next steps in management?",
      "finalDebrief": "This case illustrates status epilepticus precipitated by medication non-adherence but complicated by possible infection. Your DDx likely evolved from simple seizure to considering status epilepticus, then incorporating the fever and altered mental status. The key learning points are recognizing status epilepticus criteria, identifying potential precipitants beyond just medication non-compliance, and understanding that fever in this context requires immediate investigation for CNS infection. How might you counsel this patient about medication adherence going forward?"
    }
  }
};
