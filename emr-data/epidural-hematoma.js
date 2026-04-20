
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
    "pharmacy": "Walmart Pharmacy \u2014 Federal Hwy",
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
      "problem": "Epidural hematoma \u2014 right temporal, middle meningeal artery",
      "icd": "S06.4X0A",
      "onset": "2024",
      "status": "Active",
      "notes": "Lucid interval x4h, now deteriorating \u2014 classic EDH presentation. Temporal bone fracture."
    },
    {
      "problem": "Herniation risk \u2014 transtentorial",
      "icd": "G93.5",
      "onset": "2024",
      "status": "Active",
      "notes": "Left pupil dilation developing \u2014 ipsilateral CN III compression from uncal herniation. Emergency craniotomy."
    },
    {
      "problem": "GCS 12 and falling \u2014 herniation syndrome",
      "icd": "S09.90XA",
      "onset": "2024",
      "status": "Active",
      "notes": "GCS dropped from 15 (lucid interval) to 12 over 2 hours \u2014 neurological deterioration"
    }
  ],
  "medications": [
    {
      "name": "Mannitol 1g/kg IV over 20 min \u2014 herniation treatment",
      "sig": "IV bolus \u2014 osmotic diuresis reduces intracranial pressure as bridge to surgery",
      "prescriber": "Neurosurgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "HOB 30\u00b0 elevation",
      "sig": "Head of bed 30 degrees \u2014 reduces ICP without compromising CPP",
      "prescriber": "Neurosurgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Emergency craniotomy \u2014 within 1-2 hours",
      "sig": "Definitive treatment \u2014 evacuation of epidural hematoma",
      "prescriber": "Neurosurgery",
      "start": "11/2024",
      "refills": 0,
      "status": "EMERGENT OR"
    }
  ],
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
      "temp": "36.8\u00b0C",
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
      "assessment": "Epidural Hematoma \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "EDH Workup",
      "results": [
        {
          "test": "GCS at arrival (lucid interval)",
          "value": "15",
          "unit": "",
          "ref": "15",
          "flag": ""
        },
        {
          "test": "GCS at 2 hours",
          "value": "12",
          "unit": "",
          "ref": "15",
          "flag": "L"
        },
        {
          "test": "Left pupil",
          "value": "5mm, sluggish",
          "unit": "",
          "ref": "Equal, brisk",
          "flag": "H"
        },
        {
          "test": "Right pupil",
          "value": "3mm, brisk",
          "unit": "",
          "ref": "Equal, brisk",
          "flag": ""
        },
        {
          "test": "INR",
          "value": "1.0",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": ""
        },
        {
          "test": "Hemoglobin",
          "value": "13.8",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Head Non-Contrast \u2014 Emergency",
      "indication": "Head trauma, lucid interval, now deteriorating",
      "findings": "Right temporal epidural hematoma \u2014 biconvex (lenticular) hyperdense collection 4.5cm, 45mL volume. Midline shift 7mm left. Right temporal bone fracture through middle meningeal artery groove. Ipsilateral sulcal effacement. No contrecoup injury. No subdural hematoma.",
      "impression": "Classic epidural hematoma from middle meningeal artery. Significant midline shift \u2014 herniation risk. Emergency neurosurgical evacuation required."
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
      "Epidural hematoma \u2014 emergency craniotomy (correct)",
      "Subdural hematoma \u2014 crescent-shaped, crosses suture lines, venous (different shape and mechanism)",
      "Subarachnoid hemorrhage \u2014 blood in cisterns/sulci, thunderclap headache",
      "Diffuse axonal injury \u2014 no focal collection, scattered white matter changes",
      "Intracerebral hemorrhage \u2014 intraparenchymal, different location",
      "Cerebral contusion \u2014 no biconvex collection, in brain parenchyma"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'simple concussion' in a young, healthy patient and missing the lucid interval and evolving epidural hematoma",
      "prematureClosure": "May stop evaluation after normal initial mental status, missing the classic 'talk and die' progression of epidural hematoma",
      "availabilityBias": "Concussion is much more common than epidural hematoma, may not consider the more serious diagnosis despite classic presentation"
    },
    "coachPrompts": {
      "phase2": "You've identified head trauma as the key issue. This patient is showing neurological decline hours after injury. What specific complications of head trauma should you be most concerned about in someone with this timeline? Think about the classic patterns of intracranial bleeding.",
      "phase5": "You've found anisocoria, declining mental status, and hypertension with bradycardia hours after temporal impact. This constellation of findings should make you think of a specific neurosurgical emergency. What's the most likely anatomical location and type of bleeding?",
      "finalDebrief": "This case illustrates the classic 'lucid interval' of epidural hematoma - initial relatively normal function followed by rapid deterioration. The temporal impact, anisocoria, Cushing's triad, and timeline all point to arterial bleeding requiring emergent neurosurgical intervention. How did your differential diagnosis evolve as you gathered more data?",
      "final": "Diagnosis: epidural hematoma \u2014 lucid interval pathognomonic. Key learning: (1) Lucid interval mechanism: injury \u2192 brief LOC (concussive) \u2192 regains consciousness (lucid interval) \u2192 arterial hematoma expands \u2192 herniation. Lucid interval occurs because EDH is arterial (fast bleeding but tolerated briefly by compensatory mechanisms) whereas SDH is venous (slower). Duration of lucid interval: minutes to hours. (2) CT appearance: biconvex (lenticular) hyperdense collection that does NOT cross suture lines (periosteal dura is firmly attached at suture lines, confining the epidural space). Compare to SDH: crescent-shaped, crosses sutures freely. (3) Middle meningeal artery: runs in groove on inner temporal bone. Temporal bone fracture + middle meningeal artery laceration = classic EDH. (4) CN III compression: uncus (medial temporal lobe) herniates over tentorium \u2192 compresses ipsilateral CN III \u2192 ipsilateral pupil dilation (blown pupil). This is a herniation emergency \u2014 craniotomy within 30-60 minutes or death. (5) Surgery threshold: EDH >30mL OR thickness >15mm OR midline shift >5mm OR clinical herniation = immediate surgery. This patient meets multiple criteria. Outcome after evacuation of acute EDH: 90%+ good neurological recovery IF operated before herniation becomes complete."
    }
  },
  "meta": {
    "diagnosis": "Epidural Hematoma \u2014 Classic 'Lucid Interval', Middle Meningeal Artery, Emergency Craniotomy",
    "caseId": "epidural-hematoma"
  }
};
