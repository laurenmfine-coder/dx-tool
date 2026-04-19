/* emr-data/serotonin-syndrome.js — Auto-generated EMR case data for Serotonin Syndrome */
window.EMR_DATA = {
  "patient": {
    "name": "Andrew Chen",
    "patientHPI": "I started this new medication for my depression about a week ago, and now I'm feeling really jittery and sweaty with muscle twitches, and I can't seem to sit still.",
    "dob": "08/10/1986",
    "age": "40",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-776119",
    "language": "English",
    "race": "Asian",
    "phone": "(720) 555-8055",
    "email": "andrew.chen@email.com",
    "address": "6329 Magnolia Blvd, Phoenix, AZ 85013",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Mei Chen",
      "phone": "(404) 555-3116",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Agitation, diaphoresis, tremor, clonus — recently started new antidepressant",
    "diagnosis": "Serotonin Syndrome"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Depression",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Started MAOI (phenelzine) 1 week ago while still on sertraline",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Sertraline",
      "dose": "200mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    },
    {
      "id": "med-2",
      "name": "Phenelzine",
      "dose": "15mg",
      "route": "PO",
      "frequency": "TID (started 7 days ago)",
      "status": "Active",
      "prescriber": "Dr. Raj Patel, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "168/102",
      "hr": "128",
      "rr": "24",
      "temp": "39.8°C",
      "spo2": "96%",
      "pain": "5/10",
      "bmi": "25",
      "weight": "102 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Agitation, diaphoresis, tremor, clonus — recently started new antidepressant",
      "hpi": "Andrew Chen is a 40-year-old male presenting with agitation, diaphoresis, tremor, clonus — recently started new antidepressant. Past medical history includes Depression, Started MAOI (phenelzine) 1 week ago while still on sertraline. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Serotonin Syndrome — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-759360",
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
              "value": "12.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
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
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
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
              "test": "Ck",
              "value": "1800",
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
      "accession": "IMG-307093",
      "clinical": "Agitation, diaphoresis, tremor, clonus — recently started new antidepressant",
      "technique": "Standard protocol",
      "findings": "No acute intracranial abnormality.",
      "impression": "Normal.",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Medication error",
      "New psychiatrist started MAOI without washout from SSRI"
    ],
    [
      "Tobacco",
      "Never"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Andrew appears anxious and restless, unable to sit still during the interview with visible tremor and diaphoresis. He is cooperative and forthcoming but seems confused about why he's feeling so unwell, expressing concern that his new medication might be causing problems. His distress level is moderate to high as he's experiencing uncomfortable physical symptoms that are interfering with his daily activities.",
    "interviewQuestions": [
      "Can you describe exactly when these symptoms started?",
      "What medications are you currently taking for your depression?",
      "When did you start the new antidepressant and did you stop the old one?",
      "How would you rate the severity of your symptoms on a scale of 1-10?",
      "Are you experiencing any muscle stiffness or jaw clenching?",
      "Have you had any changes in your mental status or confusion?",
      "Are you having any nausea, vomiting, or diarrhea?",
      "Have you noticed any changes in your reflexes or muscle jerking?",
      "Are you experiencing any headaches or visual changes?",
      "Have you taken any other medications or supplements recently?",
      "Do you have any drug allergies?",
      "Have you ever had a reaction like this before to any medications?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. I'm just really shaky and can't seem to calm down.",
      "onset": "The symptoms started about 3-4 days ago, maybe Tuesday, and they've been getting progressively worse. It started with just feeling jittery but now I'm sweating constantly and can't stop shaking.",
      "character": "It's like I can't control my muscles - they're twitching and jerking on their own. I feel like I'm revved up inside, like I've had way too much caffeine, but much worse.",
      "location": "The muscle twitching is mainly in my arms and legs, and my jaw feels tight. The sweating is all over my body.",
      "severity": "I'd say it's about an 8 out of 10. I can barely function at work and I'm not sleeping because of all the twitching and sweating.",
      "aggravating": "Moving around seems to make the muscle jerking worse, and any loud noises or bright lights make me feel more agitated.",
      "relieving": "Nothing really helps. I tried taking some ibuprofen thinking I was getting sick, but it didn't do anything. Sitting still is impossible.",
      "associated": "I've been having some nausea and my heart feels like it's racing. I also have this pounding headache and feel really hot all the time.",
      "denies": "I haven't had any chest pain, shortness of breath, or fainting. No vomiting, just nausea. I'm not confused, just really agitated.",
      "history": "No, I've never experienced anything like this before. I've been on antidepressants for a few years without any major problems.",
      "medications": "Sertraline; Phenelzine",
      "allergies": "NKDA",
      "family": "No family history of medication reactions or psychiatric conditions that I know of. My parents are generally healthy.",
      "social": "I work as an accountant, pretty sedentary job. I don't smoke and only drink occasionally on weekends. No recreational drugs. This all started after I saw a new psychiatrist who wanted to try a different medication approach."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Mental status examination",
      "Deep tendon reflexes",
      "Ankle clonus testing",
      "Muscle rigidity assessment",
      "Tremor observation",
      "Diaphoresis assessment",
      "Ocular clonus testing",
      "Skin temperature and moisture",
      "Cardiovascular examination"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 168/102, HR 128, Temp 39.8°C, RR 22, SpO2 96% on room air",
      "Mental status examination": "Alert and oriented but restless, anxious affect, no confusion or altered consciousness",
      "Deep tendon reflexes": "Hyperreflexia 3+ throughout, most pronounced in lower extremities",
      "Ankle clonus testing": "Sustained clonus present bilaterally, more than 5 beats",
      "Muscle rigidity assessment": "Mild muscle rigidity in extremities, lead-pipe quality",
      "Tremor observation": "Fine tremor of hands at rest, worsens with movement",
      "Diaphoresis assessment": "Profuse diaphoresis, clothing visibly damp",
      "Ocular clonus testing": "Intermittent ocular clonus present",
      "Skin temperature and moisture": "Skin hot and diaphoretic to touch",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, elevated blood pressure"
    },
    "ddxTargets": [
      "Serotonin syndrome (correct diagnosis)",
      "Neuroleptic malignant syndrome",
      "Anticholinergic toxicity",
      "Malignant hyperthermia",
      "Thyrotoxicosis",
      "Sympathomimetic intoxication",
      "Withdrawal syndrome"
    ],
    "biasFlags": {
      "anchoring": "May anchor on psychiatric history and assume this is anxiety or panic disorder, missing the medication interaction",
      "prematureClosure": "Might stop at 'medication side effect' without recognizing the specific dangerous interaction between MAOI and SSRI",
      "availabilityBias": "May think of more common antidepressant side effects rather than the rare but serious serotonin syndrome"
    },
    "coachPrompts": {
      "phase2": "This patient has concerning vital signs and neurologic symptoms after starting a new psychiatric medication. Before you interview him, think about what specific medication interactions might cause this constellation of findings. What questions would help you identify a potentially dangerous drug combination?",
      "phase5": "You've identified hyperreflexia, clonus, hyperthermia, and autonomic instability in a patient on multiple psychiatric medications. This triad of findings should make you think of a specific toxidrome. How do the physical findings help narrow your differential diagnosis, and what's the most likely explanation for this patient's presentation?",
      "finalDebrief": "This case demonstrates classic serotonin syndrome from concurrent MAOI and SSRI use. The key teaching points are recognizing the triad of altered mental status, neuromuscular abnormalities (clonus, hyperreflexia), and autonomic instability. This highlights the critical importance of medication reconciliation and proper washout periods when switching between antidepressant classes. How did your thinking evolve as you gathered more history about the medication timing and physical exam findings?"
    }
  }
};
