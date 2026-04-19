/* emr-data/new-seizure-mass.js — EMR case data for New-Onset Seizure Secondary to Brain Mass (Glioblastoma) */
window.EMR_DATA = {
  "patient": {
    "name": "Nina Patel",
    "patientHPI": "I woke up this morning with a pounding headache on the left side — it's more severe than any headache I've had before, and I've never had headaches like this. My roommate says I was acting strange before I went to bed, but I don't really remember much from last night.",
    "dob": "07/15/2000",
    "age": "26",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-509012",
    "language": "English",
    "race": "Pacific Islander",
    "phone": "(713) 555-4519",
    "email": "nina.patel@email.com",
    "address": "1125 Hickory Rd, Birmingham, AL 35207",
    "insurance": "Tricare",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Rite Aid — Federal Hwy",
    "emergencyContact": {
      "name": "Christopher Morgan",
      "phone": "(412) 555-5560",
      "relationship": "Partner"
    },
    "chiefComplaint": "I don't know what happened Headache is left-sided, throbbing",
    "diagnosis": "New-Onset Seizure Secondary to Brain Mass (Glioblastoma)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "No prior neurologic history",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Amlodipine",
      "dose": "5mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "10:08",
      "bp": "148/88",
      "hr": "92",
      "rr": "16",
      "temp": "37.0°C",
      "spo2": "98%",
      "pain": "7/10",
      "bmi": "33",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I don't know what happened Headache is left-sided, throbbing",
      "hpi": "Nina Patel is a 26-year-old female presenting with i don't know what happened headache is left-sided, throbbing. Past medical history includes Hypertension, No prior neurologic history. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "New-Onset Seizure Secondary to Brain Mass (Glioblastoma) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-428000",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "9.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "35",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "322",
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
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.9",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "105",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "28",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "8",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "112",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "9.2",
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
              "test": "Prolactin",
              "value": "42",
              "unit": "ng/mL",
              "range": "4-15",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-804513",
      "clinical": "I don't know what happened Headache is left-sided, throbbing",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-699788",
      "clinical": "I don't know what happened Headache is left-sided, throbbing",
      "technique": "Standard protocol",
      "findings": "Large heterogeneous mass in the left frontal-parietal region measuring approximately 4.5 x 3.8 cm. Surrounding vasogenic edema with effacement of the left lateral ventricle. 6mm rightward midline shift. No acute hemorrhage within the mass. Mild uncal herniation.",
      "impression": "LEFT FRONTAL-PARIETAL MASS with significant edema and mass effect — highly suspicious for high-grade glioma. MRI recommended. Neurosurgery consult STAT.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "MRI Brain",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-739659",
      "clinical": "I don't know what happened Headache is left-sided, throbbing",
      "technique": "Standard protocol",
      "findings": "4.5 x 3.8 x 4.0 cm heterogeneously enhancing mass in the left frontal-parietal region with central necrosis. Irregular ring enhancement. Extensive surrounding T2/FLAIR edema. Mass effect with 6mm midline shift. Involvement of the left motor cortex. No additional lesions identified.",
      "impression": "Findings highly consistent with glioblastoma (WHO Grade IV). Neurosurgery consultation for biopsy/resection planning.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-141414",
      "clinical": "I don't know what happened Headache is left-sided, throbbing",
      "technique": "Standard 12-lead",
      "findings": "Normal sinus rhythm at 92 bpm. No ST changes. Normal intervals",
      "impression": "Normal ECG",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
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
    "No brain tumors",
    "Mother: breast cancer at 62"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Former smoker, quit 5 years ago, 15 pack-year history"
    ],
    [
      "Alcohol",
      "Social only"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "High school history teacher"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Nina appears anxious and somewhat disoriented, frequently touching her left temple and squinting slightly. She's cooperative but seems confused about recent events, speaking slowly and occasionally pausing mid-sentence as if trying to remember details. Her distress level is moderate to high, particularly when discussing her memory gaps from the previous evening.",
    "interviewQuestions": [
      "Can you describe exactly when this headache started?",
      "What does the headache feel like - throbbing, sharp, pressing?",
      "On a scale of 1-10, how severe is your pain right now?",
      "Have you had any nausea, vomiting, or vision changes?",
      "You mentioned your roommate said you were acting strange - can you tell me more about that?",
      "Do you remember what you were doing yesterday evening?",
      "Have you had any seizures, weakness, or numbness anywhere?",
      "Any recent head trauma or falls?",
      "Have you ever had headaches like this before?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Any family history of migraines, strokes, or brain problems?",
      "Tell me about your alcohol and drug use"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble thinking clearly right now. Can you ask that differently?",
      "onset": "I woke up around 7 AM with this terrible headache already there. I don't remember having it when I went to bed, but honestly, I don't remember much about last night.",
      "character": "It's this intense throbbing pain, like someone's hitting the left side of my head with a hammer. It pulses with my heartbeat.",
      "location": "It's completely on the left side of my head, mainly around my temple and behind my left eye. It doesn't go anywhere else.",
      "severity": "This is easily a 9 out of 10. I've never had a headache this bad. I can barely function - even the lights in here are making it worse.",
      "aggravating": "Light makes it much worse, and any loud sounds. Moving my head or bending over makes the throbbing more intense.",
      "relieving": "I tried some ibuprofen this morning but it didn't touch it. Nothing seems to help.",
      "associated": "I feel nauseous and threw up once this morning. My roommate says I seemed confused last night, but I don't really remember. I feel dizzy when I stand up.",
      "denies": "No vision changes that I've noticed, no weakness or numbness in my arms or legs, no fever or chills.",
      "history": "No, I've never had headaches like this. I occasionally get mild headaches from stress at work, but nothing even close to this severe.",
      "medications": "Amlodipine",
      "allergies": "NKDA",
      "family": "No family history of migraines or brain problems that I know of. My mother had breast cancer but that's about it.",
      "social": "I'm a high school history teacher. I quit smoking about 5 years ago after smoking for about 15 years. I only drink socially, maybe a glass of wine with dinner. No illegal drugs."
    },
    "examManeuvers": [
      "Blood pressure measurement",
      "Neurological screening exam",
      "Cranial nerve examination",
      "Motor strength testing",
      "Deep tendon reflexes",
      "Cerebellar function testing",
      "Fundoscopic examination",
      "Neck stiffness assessment",
      "Mental status examination",
      "Gait assessment"
    ],
    "examFindings": {
      "Blood pressure measurement": "BP 148/88 mmHg, consistent with hypertensive episode",
      "Neurological screening exam": "Alert but appears uncomfortable, slow to respond to complex questions",
      "Cranial nerve examination": "Pupils equal and reactive, no focal cranial nerve deficits detected",
      "Motor strength testing": "5/5 strength in all extremities, no focal motor deficits",
      "Deep tendon reflexes": "2+ and symmetric throughout, no pathologic reflexes",
      "Cerebellar function testing": "Finger-to-nose and heel-to-shin intact bilaterally",
      "Fundoscopic examination": "Mild arteriovenous nicking consistent with hypertensive changes, no papilledema",
      "Neck stiffness assessment": "No nuchal rigidity, negative Kernig and Brudzinski signs",
      "Mental status examination": "Oriented to person and place, unsure of exact date, mild difficulty with short-term memory",
      "Gait assessment": "Steady gait, no ataxia or focal abnormalities"
    },
    "ddxTargets": [
      "Hypertensive headache/hypertensive urgency (correct diagnosis)",
      "Migraine headache",
      "Tension-type headache",
      "Intracranial hemorrhage (must-not-miss)",
      "Meningitis (must-not-miss)",
      "Cluster headache",
      "Medication overuse headache"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the dramatic presentation and memory loss, leading to premature focus on intracranial pathology while overlooking the elevated blood pressure as a primary cause",
      "prematureClosure": "The severe headache and confusion may lead to immediate assumption of serious intracranial pathology without fully considering hypertensive causes, especially given her known hypertension history",
      "availabilityBias": "Recent cases of subarachnoid hemorrhage or meningitis may come to mind given the severity and acute onset, potentially overshadowing the more common hypertensive etiology"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I see you're considering both primary headache disorders and secondary causes. Given this patient's age and the severity of presentation, what key historical elements will help you differentiate between these possibilities? What red flags should you specifically explore?",
      "phase5": "You've gathered comprehensive information. Let's think through this systematically - you have a 26-year-old with known hypertension presenting with severe unilateral headache and elevated BP. How do the patient's vital signs fit with your differential diagnosis? What's the relationship between her current symptoms and her past medical history?",
      "finalDebrief": "This case illustrates how hypertensive headaches can present dramatically and mimic more serious pathology. Notice how the elevated blood pressure, known hypertension history, and absence of focal neurologic deficits pointed toward hypertensive urgency. The key learning point is recognizing when elevated blood pressure itself can be the primary cause of severe headache, rather than just a secondary response to pain or intracranial pathology."
    }
  }
};
