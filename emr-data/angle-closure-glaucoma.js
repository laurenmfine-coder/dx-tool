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
    "patientPersona": "Dolores Eriksen appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did my right eye is killing me right eye \u2014 deep, severe pain start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started My right eye is killing me with this deep, terrible pain that just came on sudde.'",
        "character": "'It's my right eye is killing me right eye \u2014 deep, severe pain \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Amlodipine; Omeprazole; Diphenhydramine.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Sister: glaucoma (type unknown)  Mother: cataracts",
        "social": "Tobacco: Never  Alcohol: Social  Drugs: Denies  Occupation: Retired secretary  Living: Lives with husband"
    },
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
}
};
