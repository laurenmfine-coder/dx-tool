/* emr-data/epiglottitis.js — EMR case data for Acute Epiglottitis */
window.EMR_DATA = {
  "patient": {
    "name": "Mason Williams",
  "patientHPI": "My little boy can't breathe right and keeps making scary sounds when he tries to swallow. He's been drooling a lot because it hurts too much to swallow, and he has a fever that started this morning. He won't lie down and just wants to sit up leaning forward.",
    "dob": "06/15/2022",
    "age": "4",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-339415",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(720) 555-8749",
    "email": "mason.williams@email.com",
    "address": "6425 Willow Way, Denver, CO 80201",
    "insurance": "Cigna",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "Walmart Pharmacy \u2014 Broward Blvd",
    "emergencyContact": {
      "name": "Kenneth Parker",
      "phone": "(713) 555-7246",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "My child can't breathe right Throat/neck",
    "diagnosis": "Acute Epiglottitis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Up to date on vaccinations",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "No prior hospitalizations",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "No immune deficiency",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Acetaminophen",
      "dose": "Given at home for fever",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
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
      "time": "06:08",
      "bp": "90/60",
      "hr": "156",
      "rr": "32",
      "temp": "40.1\u00b0C",
      "spo2": "92%",
      "pain": "/10",
      "bmi": "32",
      "weight": "58 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "My child can't breathe right Throat/neck",
      "hpi": "Mason Williams is a 4-year-old male presenting with my child can't breathe right throat/neck. Past medical history includes Up to date on vaccinations, No prior hospitalizations, No immune deficiency. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Epiglottitis \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-952482",
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
              "value": "22.4",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "12.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "34",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "314",
              "unit": "x10\u00b3/\u00b5L",
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
              "value": "141",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.9",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "100",
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
              "value": "9",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.9",
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
              "test": "CRP",
              "value": "14.8",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending",
              "unit": "",
              "range": "No growth",
              "flag": ""
            },
            {
              "test": "Lactate",
              "value": "2.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
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
      "date": "03/03/2026",
      "study": "Cervical Spine X-ray",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-964734",
      "clinical": "My child can't breathe right Throat/neck",
      "technique": "Standard protocol",
      "findings": "THUMBPRINT SIGN \u2014 enlarged, rounded epiglottis visible on lateral soft tissue neck view. Thickened aryepiglottic folds. Narrowed vallecular space. Subglottic region normal (not croup).",
      "impression": "EPIGLOTTITIS \u2014 thumbprint sign confirms swollen epiglottis. Prepare for emergent airway management.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-595216",
      "clinical": "My child can't breathe right Throat/neck",
      "technique": "Standard protocol",
      "findings": "Clear lung fields. No focal consolidation. No foreign body.",
      "impression": "No pulmonary complication",
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
      "accession": "IMG-508373",
      "clinical": "My child can't breathe right Throat/neck",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 156 bpm. Normal pediatric morphology. No arrhythmia",
      "impression": "Sinus tachycardia \u2014 age-appropriate for fever and distress",
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
    "No immune deficiency",
    "No recurrent infections"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "N/A \u2014 no household smokers"
    ],
    [
      "Alcohol",
      "N/A"
    ],
    [
      "Drugs",
      "N/A"
    ],
    [
      "Occupation",
      "N/A \u2014 preschool student"
    ],
    [
      "Living",
      "Lives with both parents and older sibling. Attends daycare."
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Mason Williams appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did my child can't breathe right throat/neck start?",
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
        "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started My little boy can't breathe right and keeps making scary sounds when he tries to.'",
        "character": "'It's my child can't breathe right throat/neck \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Acetaminophen.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "No immune deficiency  No recurrent infections",
        "social": "Tobacco: N/A \u2014 no household smokers  Alcohol: N/A  Drugs: N/A  Occupation: N/A \u2014 preschool student  Living: Lives with both parents and older sibling. Attends daycare."
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
        "phase2": "You've reviewed Mason Williams's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
