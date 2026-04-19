/* emr-data/sah-v1.js — Auto-generated EMR case data for Subarachnoid Hemorrhage */
window.EMR_DATA = {
  "patient": {
    "name": "Jennifer Wu",
    "patientHPI": "I was just sitting at my desk when suddenly I got hit with an incredibly severe headache — it came on in seconds. I've never experienced anything like this before, I'm terrified.",
    "dob": "09/16/1984",
    "age": "42",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-510850",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(502) 555-2657",
    "email": "jennifer.wu@email.com",
    "address": "8726 Clover St, Albuquerque, NM 87103",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Michelle Foster, MD",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Joseph Wu",
      "phone": "(617) 555-9843",
      "relationship": "Parent"
    },
    "chiefComplaint": "Sudden severe headache",
    "diagnosis": "Subarachnoid Hemorrhage"
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
      "description": "Smoker",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Family history of aneurysms",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Lisinopril",
      "dose": "20mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
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
      "bp": "192/108",
      "hr": "68",
      "rr": "16",
      "temp": "37.2°C",
      "spo2": "98%",
      "pain": "10/10",
      "bmi": "37",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worst headache of my life — sudden onset thunderclap",
      "hpi": "Jennifer Wu is a 42-year-old female presenting with sudden severe headache. Past medical history includes Hypertension, Smoker, Family history of aneurysms. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Subarachnoid Hemorrhage — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-230499",
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
      "accession": "IMG-805265",
      "clinical": "Worst headache of my life — sudden onset thunderclap",
      "technique": "Standard protocol",
      "findings": "Diffuse subarachnoid hemorrhage in the basal cisterns, Sylvian fissures, and interhemispheric fissure. Modified Fisher Grade 3. No hydrocephalus.",
      "impression": "Acute subarachnoid hemorrhage. CTA recommended to identify aneurysm.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/01/2026",
      "study": "CTA Head",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-175224",
      "clinical": "Worst headache of my life — sudden onset thunderclap",
      "technique": "Standard protocol",
      "findings": "7mm saccular aneurysm at the anterior communicating artery bifurcation. No other aneurysms.",
      "impression": "AComm aneurysm — likely source of SAH. Neurosurgery consultation.",
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
    "Mother: ruptured aneurysm at age 48"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 25 pack-years"
    ],
    [
      "Cocaine",
      "Denies"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Jennifer is visibly distressed and frightened, describing her pain with urgency and fear in her voice. She is very forthcoming about her symptoms because she's terrified this might be like what happened to her mother. Her anxiety is palpable as she repeatedly emphasizes this is the worst headache of her life.",
    "interviewQuestions": [
      "Can you describe exactly how this headache started?",
      "On a scale of 1-10, how would you rate this headache?",
      "Where exactly is the pain located?",
      "Have you ever had a headache like this before?",
      "Are you experiencing any nausea, vomiting, or vision changes?",
      "Do you have any neck stiffness or pain when you bend your neck forward?",
      "Have you had any weakness, numbness, or difficulty speaking?",
      "Have you lost consciousness or had any confusion?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Tell me about your family history, especially regarding headaches or brain problems",
      "Do you use tobacco, alcohol, or any recreational drugs?",
      "Have you had any recent head trauma or unusual physical exertion?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this terrible pain - can you repeat that?",
      "onset": "It hit me like a thunderclap while I was just sitting at my computer - went from zero to the worst pain imaginable in literally seconds",
      "character": "It's like someone took a baseball bat to the back of my head - sharp, explosive, nothing like any headache I've ever had",
      "location": "It started at the back of my head and feels like it's spreading everywhere, but the worst part is definitely the back and base of my skull",
      "severity": "This is easily a 10 out of 10 - I can barely think straight and I'm terrified something is seriously wrong",
      "aggravating": "Any movement makes it worse, even turning my head slightly, and bright lights are really bothering me",
      "relieving": "Nothing helps - I tried holding my head but nothing touches this pain",
      "associated": "I feel really nauseous and the light in here is bothering me, but no vomiting yet",
      "denies": "No weakness in my arms or legs, no trouble speaking, I didn't pass out, and no recent injuries to my head",
      "history": "Never, ever had anything even close to this - I get occasional tension headaches but this is completely different",
      "medications": "Lisinopril",
      "allergies": "NKDA",
      "family": "My mother had a brain aneurysm that ruptured when she was 48 - that's exactly what I'm terrified this might be",
      "social": "I work in accounting, pretty sedentary job. I smoke about a pack a day, have for years. I have maybe a glass of wine with dinner, no illegal drugs"
    },
    "examManeuvers": [
      "General appearance and vital signs",
      "Neurological assessment - mental status and orientation",
      "Cranial nerve examination",
      "Motor strength testing",
      "Deep tendon reflexes",
      "Neck stiffness assessment (nuchal rigidity)",
      "Fundoscopic examination",
      "Coordination testing",
      "Gait assessment",
      "Kernig's and Brudzinski's signs"
    ],
    "examFindings": {
      "General appearance and vital signs": "Patient appears acutely distressed, holding head, photophobic; BP 192/108, HR 68, afebrile",
      "Neurological assessment - mental status and orientation": "Alert and oriented x3, but appears anxious and in significant distress",
      "Cranial nerve examination": "Cranial nerves II-XII grossly intact, pupils equal and reactive",
      "Motor strength testing": "5/5 strength in all extremities",
      "Deep tendon reflexes": "2+ and symmetric throughout",
      "Neck stiffness assessment (nuchal rigidity)": "Mild nuchal rigidity present, patient resists passive neck flexion",
      "Fundoscopic examination": "Difficult to assess due to photophobia, but no obvious papilledema visualized",
      "Coordination testing": "Finger-to-nose intact bilaterally, though patient has difficulty with testing due to head pain",
      "Gait assessment": "Steady gait but moves cautiously, holding head",
      "Kernig's and Brudzinski's signs": "Brudzinski's sign negative, Kernig's sign equivocal due to patient guarding"
    },
    "ddxTargets": [
      "Subarachnoid hemorrhage (correct diagnosis)",
      "Intracerebral hemorrhage",
      "Meningitis",
      "Cerebral aneurysm rupture",
      "Hypertensive emergency",
      "Migraine with aura",
      "Tension headache"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on family history of aneurysm and immediately assuming SAH without considering other causes of thunderclap headache",
      "prematureClosure": "Risk of stopping evaluation after noting hypertension and attributing headache to hypertensive crisis without recognizing thunderclap onset",
      "availabilityBias": "May focus on more common headache causes (migraine, tension) rather than considering the specific thunderclap presentation suggesting SAH"
    },
    "coachPrompts": {
      "phase2": "You've identified several concerning differentials. Given this patient's presentation of sudden-onset severe headache, what specific historical features will help you distinguish between these diagnoses? Think about the timeline and character of symptom onset.",
      "phase5": "Now that you've completed your evaluation, let's think through your findings systematically. You have a patient with thunderclap headache onset, family history of aneurysm, hypertension, and some nuchal rigidity. How do these findings help narrow your differential diagnosis?",
      "finalDebrief": "This case highlights the classic presentation of subarachnoid hemorrhage - thunderclap headache onset, family history, and nuchal rigidity were key clues. Notice how the dramatic symptom onset and patient's description of 'worst headache of life' should immediately raise concern for SAH, despite the temptation to attribute symptoms to her known hypertension."
    }
  }
};
