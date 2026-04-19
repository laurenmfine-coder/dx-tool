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
  "guided": {
    "supported": true,
    "patientPersona": "Dolores appears distressed and anxious, holding her right eye and speaking in a pained voice. She is cooperative but clearly suffering, frequently mentioning the severity of her pain and nausea. She seems eager for relief and is forthcoming about her symptoms.",
    "interviewQuestions": [
      "When did this eye pain start?",
      "Can you describe the quality of the pain?",
      "Is the pain constant or does it come and go?",
      "On a scale of 1-10, how severe is your pain?",
      "Are you experiencing any nausea or vomiting?",
      "How is your vision in the affected eye?",
      "Do you see halos around lights?",
      "Have you had any recent eye trauma or procedures?",
      "Have you ever had episodes like this before?",
      "What medications are you currently taking?",
      "Do you have any known allergies?",
      "Does anyone in your family have eye problems?",
      "Have you been using any eye drops or medications?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating because of this terrible pain in my eye.",
      "onset": "It started about 3 hours ago, very suddenly while I was watching TV. One minute I was fine, the next minute I had this excruciating pain.",
      "character": "It's a deep, boring pain, like someone is pushing a hot poker into my eye. It's not on the surface, it's deep inside.",
      "location": "It's in my right eye, deep inside, and the pain goes back into my head on that side.",
      "severity": "This is easily a 9 out of 10. I can barely function. I've never had pain like this before.",
      "aggravating": "Any light makes it worse, even dim light. Moving my eye or touching around it makes the pain unbearable.",
      "relieving": "Nothing helps. I tried closing my eyes, putting a cold cloth on it, even took some Tylenol, but nothing touches this pain.",
      "associated": "I feel very nauseous and actually vomited once on the way here. Everything looks blurry and I'm seeing rainbow halos around lights.",
      "denies": "No discharge from my eye, no recent injury, no headache anywhere else, no fever.",
      "history": "Never had anything like this before. I've had some minor eye irritation but nothing even close to this severe.",
      "medications": "Amlodipine; Omeprazole; Diphenhydramine",
      "allergies": "NKDA",
      "family": "My sister has glaucoma, though I'm not sure what type, and my mother had cataracts.",
      "social": "I'm a retired secretary, live with my husband. I don't smoke, drink socially, and don't use drugs."
    },
    "examManeuvers": [
      "Visual acuity testing",
      "Pupillary light reflex",
      "Intraocular pressure measurement",
      "Slit lamp examination",
      "Fundoscopic examination",
      "Corneal examination",
      "Anterior chamber depth assessment",
      "Conjunctival examination",
      "Extraocular movements",
      "Visual field assessment by confrontation"
    ],
    "examFindings": {
      "Visual acuity testing": "Right eye 20/80, left eye 20/30 (baseline with hyperopia)",
      "Pupillary light reflex": "Right pupil mid-dilated (5mm), poorly reactive to light; left pupil normal and reactive",
      "Intraocular pressure measurement": "Right eye 45 mmHg, left eye 14 mmHg",
      "Slit lamp examination": "Right eye shows corneal edema and shallow anterior chamber; left eye normal",
      "Fundoscopic examination": "Difficult to visualize right fundus due to corneal edema; left disc appears normal",
      "Corneal examination": "Right cornea appears hazy and edematous; left cornea clear",
      "Anterior chamber depth assessment": "Right anterior chamber markedly shallow; left anterior chamber normal depth",
      "Conjunctival examination": "Right eye shows mild conjunctival injection; left eye normal",
      "Extraocular movements": "Full but patient reports increased pain with movement of right eye",
      "Visual field assessment by confrontation": "Difficult to assess accurately due to pain and visual disturbance"
    },
    "ddxTargets": [
      "Acute angle-closure glaucoma (correct diagnosis)",
      "Acute iritis/anterior uveitis",
      "Corneal abrasion or ulcer",
      "Optic neuritis",
      "Temporal arteritis",
      "Migraine with visual aura",
      "Cluster headache"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'eye pain' as simple conjunctivitis or dry eyes, missing the acute nature and systemic symptoms that suggest angle-closure glaucoma",
      "prematureClosure": "Risk of stopping evaluation after noting eye pain and redness without measuring intraocular pressure or assessing for acute angle closure",
      "availabilityBias": "May focus on more common causes of eye pain like conjunctivitis or dry eyes rather than considering sight-threatening acute angle-closure glaucoma"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. You've identified several causes of acute eye pain. Given this patient's age, family history, and the sudden onset with systemic symptoms like nausea, what sight-threatening condition should you be most concerned about? How will your history questions help distinguish between these possibilities?",
      "phase5": "Excellent work gathering the history and physical findings. You found elevated intraocular pressure, a shallow anterior chamber, and corneal edema in a patient with acute severe eye pain and nausea. How do these findings help narrow your differential? What's the most likely diagnosis and what's your next step?",
      "finalDebrief": "This case demonstrates classic acute angle-closure glaucoma - the triad of sudden severe eye pain, nausea/vomiting, and visual disturbances in a hyperopic patient with family history of glaucoma. The key was recognizing that not all 'eye pain' is benign and that the systemic symptoms were crucial clues. The elevated IOP and shallow anterior chamber confirmed the diagnosis. This is an ophthalmologic emergency requiring immediate treatment to prevent permanent vision loss."
    }
  }
};
