/* emr-data/angle-closure-glaucoma.js — EMR case data for Acute Angle-Closure Glaucoma */
window.EMR_DATA = {
  "patient": {
    "name": "Dolores Eriksen",
  "patientHPI": "My right eye is killing me with this deep, terrible pain that just came on suddenly, and I feel sick to my stomach and everything looks blurry.",
    "dob": "09/22/1974",
    "age": "52",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-651241",
    "language": "English",
    "race": "Asian",
    "phone": "(212) 555-3587",
    "email": "dolores.eriksen@email.com",
    "address": "7923 Peachtree Rd, New Orleans, LA 70116",
    "insurance": "Cigna",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Rite Aid — Federal Hwy",
    "emergencyContact": {
      "name": "Daniel Scott",
      "phone": "(513) 555-8793",
      "relationship": "Sibling"
    },
    "chiefComplaint": "My right eye is killing me Right eye — deep, severe pain",
    "diagnosis": "Acute Angle-Closure Glaucoma"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Hyperopia",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "GERD",
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
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-2",
      "name": "Omeprazole",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-3",
      "name": "Diphenhydramine",
      "dose": "25mg PRN sleep (anticholinergic — could have contributed to attack)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
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
      "time": "09:24",
      "bp": "162/94",
      "hr": "88",
      "rr": "16",
      "temp": "36.9°C",
      "spo2": "99%",
      "pain": "9/10",
      "bmi": "22",
      "weight": "88 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "My right eye is killing me Right eye — deep, severe pain",
      "hpi": "Dolores Eriksen is a 52-year-old female presenting with my right eye is killing me right eye — deep, severe pain. Past medical history includes Hyperopia, Hypertension, GERD. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Angle-Closure Glaucoma — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-718497",
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
              "value": "5.3",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.3",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "152",
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
              "value": "4.0",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "103",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "26",
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
              "value": "10.3",
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
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-980547",
      "clinical": "My right eye is killing me Right eye — deep, severe pain",
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
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-413131",
      "clinical": "My right eye is killing me Right eye — deep, severe pain",
      "technique": "Standard protocol",
      "findings": "No acute intracranial pathology. No mass, no hemorrhage. Orbits normal on bone windows.",
      "impression": "Normal — headache and eye pain not from intracranial cause",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-829206",
      "clinical": "My right eye is killing me Right eye — deep, severe pain",
      "technique": "Standard 12-lead",
      "findings": "Normal sinus rhythm at 88 bpm. Normal intervals",
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
    "Sister: glaucoma (type unknown)",
    "Mother: cataracts"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired secretary"
    ],
    [
      "Living",
      "Lives with husband"
    ]
  ],
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Dolores Eriksen's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Dolores is visibly distressed and holding her right eye, appearing nauseous and uncomfortable. She is very forthcoming about her severe pain and eager for relief, frequently mentioning how unbearable the pain is. Her anxiety is palpable as she describes feeling like something is terribly wrong with her eye.",
    "interviewQuestions": [
        "When did this eye pain start and how quickly did it come on?",
        "Can you describe the quality of the pain in your right eye?",
        "On a scale of 1-10, how severe is your eye pain right now?",
        "Are you experiencing any nausea or vomiting along with the eye pain?",
        "Have you noticed any changes in your vision, such as blurriness or halos around lights?",
        "Is your vision worse in dim lighting or bright lighting?",
        "Have you had any recent eye trauma or injury?",
        "Do you have any headache along with the eye pain?",
        "Have you ever had episodes like this before?",
        "Have you started any new medications or eye drops recently?",
        "Do you have any family history of eye problems?",
        "Are you experiencing any discharge or tearing from the affected eye?",
        "Does the eye pain worsen when you move your eye or touch around it?"
    ],
    "patientResponses": {
        "default": "I'm sorry, I'm having trouble focusing because of this terrible pain in my eye. Can you repeat that?",
        "onset": "It started about 2 hours ago very suddenly while I was watching TV. One minute I was fine, then this excruciating pain just hit my right eye out of nowhere.",
        "character": "It's a deep, throbbing, intense pain - like someone is pushing on my eyeball from behind. It's the worst pain I've ever felt in my eye.",
        "location": "It's definitely my right eye, deep inside, and the pain seems to go back into my head on that side.",
        "severity": "It's easily a 9 out of 10. I can barely function with this pain. I've never felt anything like it.",
        "aggravating": "Any light makes it much worse. Even this room light is bothering me. Moving around also seems to make the nausea worse.",
        "relieving": "Nothing helps. I tried closing my eyes, putting a cold compress on it, even took some Tylenol, but nothing touches this pain.",
        "associated": "I feel very nauseous and almost threw up in the car on the way here. My vision is blurry and I'm seeing rainbow halos around lights, which is really strange.",
        "denies": "No discharge from my eye, no recent injury or trauma, no headache separate from the eye pain, no fever.",
        "history": "I've never had anything like this before. I've had some minor eye irritation with my contacts, but nothing even close to this severe.",
        "medications": "Amlodipine; Omeprazole; Diphenhydramine",
        "allergies": "NKDA",
        "family": "My sister has glaucoma, though I don't know what type, and my mother had cataracts. I've been worried about eye problems because of that.",
        "social": "I'm a retired secretary, live with my husband. I don't smoke, drink socially on weekends, and don't use any drugs."
    },
    "examManeuvers": [
        "Visual acuity testing",
        "Pupillary light reflex and RAPD testing",
        "Intraocular pressure measurement (tonometry)",
        "Slit lamp examination of anterior chamber",
        "Fundoscopic examination",
        "Corneal examination for clarity and edema",
        "Conjunctival examination",
        "Extraocular movement testing",
        "Visual field testing by confrontation",
        "Gonioscopy assessment of anterior chamber angle"
    ],
    "examFindings": {
        "Visual acuity testing": "Right eye 20/60, Left eye 20/30 (baseline with hyperopia)",
        "Pupillary light reflex and RAPD testing": "Right pupil mid-dilated (5mm), poorly reactive to light, no RAPD present",
        "Intraocular pressure measurement (tonometry)": "Right eye IOP 45 mmHg, Left eye IOP 16 mmHg",
        "Slit lamp examination of anterior chamber": "Right eye shows shallow anterior chamber with mild chamber reaction",
        "Fundoscopic examination": "Right optic disc appears cupped with possible early glaucomatous changes",
        "Corneal examination for clarity and edema": "Right corneal edema present with loss of corneal clarity",
        "Conjunctival examination": "Right conjunctiva shows mild injection and chemosis",
        "Extraocular movement testing": "Full range of motion bilaterally, no restriction",
        "Visual field testing by confrontation": "Subtle peripheral visual field defect in right eye",
        "Gonioscopy assessment of anterior chamber angle": "Narrow to closed anterior chamber angles in right eye"
    },
    "ddxTargets": [
        "Acute angle-closure glaucoma (correct diagnosis)",
        "Acute anterior uveitis",
        "Corneal abrasion or ulcer",
        "Optic neuritis",
        "Retinal detachment",
        "Migraine with visual aura",
        "Cluster headache"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on 'eye pain' and considering only common causes like conjunctivitis or dry eyes, missing the acute nature and severity suggesting angle-closure glaucoma",
        "prematureClosure": "Risk of stopping at 'eye strain' or 'migraine' given the patient's age and hyperopia history, without considering the constellation of nausea, halos, and acute severe pain",
        "availabilityBias": "Risk of being influenced by more commonly seen conditions like conjunctivitis or dry eyes, rather than considering the less common but sight-threatening acute angle-closure glaucoma"
    },
    "coachPrompts": {
        "phase2": "Before you interview the patient, consider what key historical features would help you differentiate between the various causes of acute severe eye pain. What associated symptoms would be most concerning for sight-threatening conditions?",
        "phase5": "Now that you have your history and physical findings, let's think about how the combination of acute severe eye pain, nausea, visual halos, elevated IOP, and shallow anterior chamber fit together. What does this constellation of findings suggest?",
        "finalDebrief": "This case demonstrates how acute angle-closure glaucoma can present dramatically with the classic triad of severe eye pain, nausea/vomiting, and visual disturbances. Notice how the family history of glaucoma, hyperopia, and sudden onset in dim lighting all fit the typical risk profile. What key examination findings confirmed your diagnosis and why is this considered an ophthalmologic emergency?"
    }
}
};
