/* emr-data/new-seizure-mass.js — EMR case data for New-Onset Seizure Secondary to Brain Mass (Glioblastoma) */
window.EMR_DATA = {
  "patient": {
    "name": "Nina Patel",
  "patientHPI": "I woke up this morning with the worst headache of my life on the left side - it's pounding and throbbing, and I don't understand what happened because I've never had headaches like this before. My roommate says I was acting strange before I went to bed, but I don't really remember much from last night.",
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
    "patientPersona": "Nina Patel appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did i don't know what happened headache is left-sided, throbbing start?",
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
        "onset": "'The symptoms started I woke up this morning with the worst headache of my life on the left side - it'.'",
        "character": "'It's i don't know what happened headache is left-sided, throbbing \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Amlodipine.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "No brain tumors  Mother: breast cancer at 62",
        "social": "Tobacco: Former smoker, quit 5 years ago, 15 pack-year history  Alcohol: Social only  Drugs: Denies  Occupation: High school history teacher  Living: Lives with wife"
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
        "phase2": "You've reviewed Nina Patel's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
