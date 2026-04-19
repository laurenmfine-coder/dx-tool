/* emr-data/heat-stroke.js — EMR case data for Exertional Heat Stroke */
window.EMR_DATA = {
  "patient": {
    "name": "Dylan Morales",
  "patientHPI": "My friend brought me here - he says I collapsed during the marathon today and I'm not thinking clearly, but I don't really remember what happened.",
    "dob": "06/15/2004",
    "age": "22",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-350390",
    "language": "English",
    "race": "Asian",
    "phone": "(312) 555-8575",
    "email": "dylan.morales@email.com",
    "address": "456 Maple St, Indianapolis, IN 46222",
    "insurance": "Tricare",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Walmart Pharmacy \u2014 Broward Blvd",
    "emergencyContact": {
      "name": "David Carter",
      "phone": "(704) 555-6049",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
    "diagnosis": "Exertional Heat Stroke"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None \u2014 previously healthy and fit athlete",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Prior marathon completions",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "None routine",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-2",
      "name": "Ibuprofen",
      "dose": "600mg taken before race (impairs renal prostaglandins)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-3",
      "name": "Caffeine pills",
      "dose": "200mg x2 taken during race (thermogenic)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
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
      "time": "06:31",
      "bp": "92/58",
      "hr": "142",
      "rr": "32",
      "temp": "107.2\u00b0F (41.8\u00b0C) rectal",
      "spo2": "93%",
      "pain": "/10",
      "bmi": "32",
      "weight": "68 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
      "hpi": "Dylan Morales is a 22-year-old male presenting with friend: 'he collapsed during the marathon and won't wake up properly' no specific pain \u2014 global altered mental status. Past medical history includes None \u2014 previously healthy and fit athlete, Prior marathon completions. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Exertional Heat Stroke \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-570502",
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
              "value": "7.4",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "15",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "39",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "157",
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
              "value": "148",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "H"
            },
            {
              "test": "Potassium",
              "value": "5.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "101",
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
              "value": "10",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "2.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "90",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
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
              "test": "Core Temperature",
              "value": "107.2\u00b0F (41.8\u00b0C)",
              "unit": "",
              "range": "97-99\u00b0F",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "32,000",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "AST",
              "value": "680",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "420",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "PT/INR",
              "value": "1.6",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "8.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.18",
              "unit": "",
              "range": "7.35-7.45",
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
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-895220",
      "clinical": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
      "technique": "Standard protocol",
      "findings": "No acute intracranial pathology. No hemorrhage. No edema.",
      "impression": "Normal \u2014 AMS from thermal injury to CNS, not structural cause",
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
      "accession": "IMG-971682",
      "clinical": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
      "technique": "Standard protocol",
      "findings": "Clear lungs. Normal cardiac silhouette.",
      "impression": "No acute pulmonary pathology",
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
      "accession": "IMG-218126",
      "clinical": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 142 bpm. Diffuse ST depression (demand ischemia). QTc prolonged at 490ms",
      "impression": "Sinus tachycardia with demand ischemia. Prolonged QTc from hyperthermia \u2014 arrhythmia risk.",
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
    "No malignant hyperthermia history",
    "No cardiac history"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social \u2014 had beers at pre-race dinner last night"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Software developer, recreational athlete"
    ],
    [
      "Living",
      "Fit 32-year-old male, well-trained"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Dylan Morales appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did friend: 'he collapsed during the marathon and won't wake up properly' no specific pain \u2014 global altered mental status start?",
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
        "onset": "'The symptoms started My friend brought me here - he says I collapsed during the marathon today and I'.'",
        "character": "'It's friend: 'he collapsed during the marathon and won't wake up properly' no specific pain \u2014 global altered mental status \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take None routine; Ibuprofen; Caffeine pills.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "No malignant hyperthermia history  No cardiac history",
        "social": "Tobacco: Never  Alcohol: Social \u2014 had beers at pre-race dinner last night  Drugs: Denies  Occupation: Software developer, recreational athlete  Living: Fit 32-year-old male, well-trained"
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
        "phase2": "You've reviewed Dylan Morales's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
