/* emr-data/epidural-hematoma.js — EMR case data for Epidural Hematoma */
window.EMR_DATA = {
  "patient": {
    "name": "Tyler Reeves",
    "patientHPI": "I fell and hit the left side of my head pretty hard. It happened earlier today and now I'm starting to feel really drowsy and confused, which is getting worse. My head is pounding and I feel like I might throw up.",
    "dob": "06/15/2004",
    "age": "22",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-748899",
    "language": "English",
    "race": "Black/African American",
    "phone": "(317) 555-9751",
    "email": "tyler.reeves@email.com",
    "address": "9797 Oak Ave, Memphis, TN 38112",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Sarah Mitchell, MD",
    "pharmacy": "Walmart Pharmacy — Federal Hwy",
    "emergencyContact": {
      "name": "Michael Walker",
      "phone": "(212) 555-7455",
      "relationship": "Partner"
    },
    "chiefComplaint": "Fell and hit my head Left side of my head where I hit it",
    "diagnosis": "Epidural Hematoma"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None significant",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "reaction": "Hives",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "08:49",
      "bp": "162/88",
      "hr": "56",
      "rr": "14",
      "temp": "36.8°C",
      "spo2": "98%",
      "pain": "4/10",
      "bmi": "34",
      "weight": "59 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Fell and hit my head Left side of my head where I hit it",
      "hpi": "Tyler Reeves is a 22-year-old male presenting with fell and hit my head left side of my head where i hit it. Past medical history includes None significant. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Epidural Hematoma — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-275449",
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
              "value": "12.1",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "14.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "37",
              "unit": "%",
              "range": "36-46",
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
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "140",
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
              "value": "104",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "25",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "18",
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
              "value": "142",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "10",
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
              "test": "PT/INR",
              "value": "1.0",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            },
            {
              "test": "Ethanol",
              "value": "<10",
              "unit": "mg/dL",
              "range": "<10",
              "flag": ""
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
      "accession": "IMG-884181",
      "clinical": "Fell and hit my head Left side of my head where I hit it",
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
      "accession": "IMG-662400",
      "clinical": "Fell and hit my head Left side of my head where I hit it",
      "technique": "Standard protocol",
      "findings": "Large BICONVEX (lens-shaped) hyperdense collection in the left temporal-parietal region measuring approximately 15mm in maximal thickness. Mass effect with 8mm leftward-to-rightward midline shift. Effacement of the left lateral ventricle. Left temporal bone fracture crossing the middle meningeal artery groove. No underlying parenchymal contusion.",
      "impression": "ACUTE EPIDURAL HEMATOMA — left temporal-parietal, 15mm thick, 8mm midline shift. NEUROSURGICAL EMERGENCY — requires emergent craniotomy.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "CT Cervical Spine",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-621401",
      "clinical": "Fell and hit my head Left side of my head where I hit it",
      "technique": "Standard protocol",
      "findings": "No fracture or subluxation. Normal alignment. No prevertebral soft tissue swelling.",
      "impression": "No acute cervical spine injury — clear c-spine",
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
      "accession": "IMG-495873",
      "clinical": "Fell and hit my head Left side of my head where I hit it",
      "technique": "Standard 12-lead",
      "findings": "Sinus bradycardia at 56 bpm. Normal intervals. No ST changes",
      "impression": "Sinus bradycardia — Cushing response (bradycardia + hypertension = increased ICP)",
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
    "Father: hypertension",
    "No bleeding disorders"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "1-2 beers occasionally"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Electrician"
    ],
    [
      "Living",
      "Lives with wife and two children"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Tyler appears increasingly confused and drowsy during the interview, with a flat affect and slow responses. He seems concerned but his mental status is clearly declining, making him less reliable as a historian. His wife may need to provide additional history as his confusion worsens.",
    "interviewQuestions": [
      "Can you tell me exactly what happened when you fell?",
      "What time did the fall occur and when did your symptoms start?",
      "Did you lose consciousness at any time?",
      "How has your confusion and drowsiness changed since the injury?",
      "Can you describe your headache - where is it and what does it feel like?",
      "Have you vomited or just felt nauseous?",
      "Any vision changes, dizziness, or weakness?",
      "Were you drinking alcohol or using any substances today?",
      "Have you ever had a head injury before?",
      "Any bleeding problems in your family?",
      "Are you taking any medications or blood thinners?",
      "How high was the fall and what did you hit your head on?",
      "Any numbness, tingling, or weakness in your arms or legs?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating... can you repeat that? My head really hurts.",
      "onset": "I fell this morning around 10 AM off a ladder at work, hit the left side of my head on concrete. The drowsiness started maybe 2 hours ago and keeps getting worse.",
      "character": "It's a severe, constant throbbing pain on the left side of my head, like someone's hitting me with a hammer.",
      "location": "Left side of my head where I hit it, doesn't really go anywhere else.",
      "severity": "The pain is about an 8 out of 10, and I can barely think straight. I couldn't finish work today.",
      "aggravating": "Moving my head makes it worse, bright lights bother me a lot.",
      "relieving": "Nothing really helps. I tried lying down but I just feel more confused.",
      "associated": "I feel really nauseous like I might throw up, and I'm so drowsy I can barely keep my eyes open. Everything seems foggy.",
      "denies": "No vision changes, no weakness in my arms or legs, no seizures.",
      "history": "Never had a head injury like this before, maybe minor bumps but nothing serious.",
      "medications": "no medications",
      "allergies": "Sulfa drugs",
      "family": "My dad has high blood pressure but no bleeding problems or anything like that in the family.",
      "social": "I'm an electrician, fell off a 6-foot ladder. I never smoke, maybe have 1-2 beers on weekends but none today. No drugs."
    },
    "examManeuvers": [
      "Glasgow Coma Scale assessment",
      "Pupillary examination",
      "Fundoscopic examination",
      "Cranial nerve examination",
      "Motor strength testing",
      "Deep tendon reflexes",
      "Coordination testing",
      "Inspection and palpation of head/scalp",
      "Neck examination for meningeal signs",
      "Vital signs assessment"
    ],
    "examFindings": {
      "Glasgow Coma Scale assessment": "GCS 13 (Eyes 4, Verbal 4, Motor 5) - patient is drowsy but arousable, slightly confused",
      "Pupillary examination": "Left pupil 4mm and sluggishly reactive, right pupil 2mm and briskly reactive",
      "Fundoscopic examination": "Difficult to visualize due to patient cooperation, no obvious papilledema seen",
      "Cranial nerve examination": "CN II-XII grossly intact, though patient has difficulty with complex commands",
      "Motor strength testing": "5/5 strength in all extremities, no focal weakness",
      "Deep tendon reflexes": "2+ and symmetric throughout",
      "Coordination testing": "Finger-to-nose intact bilaterally, though patient moves slowly",
      "Inspection and palpation of head/scalp": "Large hematoma and tenderness over left temporal region, no obvious skull depression",
      "Neck examination for meningeal signs": "No neck stiffness, negative Kernig and Brudzinski signs",
      "Vital signs assessment": "Hypertensive at 162/88, bradycardic at 56 - concerning for Cushing's triad"
    },
    "ddxTargets": [
      "Epidural hematoma (correct diagnosis)",
      "Subdural hematoma",
      "Traumatic brain injury with cerebral contusion",
      "Intracranial hemorrhage",
      "Skull fracture with brain injury",
      "Concussion with post-concussive syndrome",
      "Intoxication or substance use"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'simple concussion' in a young, healthy patient and missing the lucid interval and evolving epidural hematoma",
      "prematureClosure": "May stop evaluation after normal initial mental status, missing the classic 'talk and die' progression of epidural hematoma",
      "availabilityBias": "Concussion is much more common than epidural hematoma, may not consider the more serious diagnosis despite classic presentation"
    },
    "coachPrompts": {
      "phase2": "You've identified head trauma as the key issue. This patient is showing neurological decline hours after injury. What specific complications of head trauma should you be most concerned about in someone with this timeline? Think about the classic patterns of intracranial bleeding.",
      "phase5": "You've found anisocoria, declining mental status, and hypertension with bradycardia hours after temporal impact. This constellation of findings should make you think of a specific neurosurgical emergency. What's the most likely anatomical location and type of bleeding?",
      "finalDebrief": "This case illustrates the classic 'lucid interval' of epidural hematoma - initial relatively normal function followed by rapid deterioration. The temporal impact, anisocoria, Cushing's triad, and timeline all point to arterial bleeding requiring emergent neurosurgical intervention. How did your differential diagnosis evolve as you gathered more data?"
    }
  }
};
