/* emr-data/compartment-syndrome.js — EMR case data for Acute Compartment Syndrome (Tibial Fracture) */
window.EMR_DATA = {
  "patient": {
    "name": "Mateo Fernandez",
  "patientHPI": "The pain in the front of my right shin is absolutely unbearable - it feels like someone is crushing my leg and it's getting worse by the hour.",
    "dob": "06/15/2002",
    "age": "24",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-917689",
    "language": "English",
    "race": "Pacific Islander",
    "phone": "(317) 555-8564",
    "email": "mateo.fernandez@email.com",
    "address": "4362 Ash St, Minneapolis, MN 55407",
    "insurance": "Medicare",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "CVS Pharmacy \u2014 Federal Hwy",
    "emergencyContact": {
      "name": "Diana Bailey",
      "phone": "(404) 555-1823",
      "relationship": "Parent"
    },
    "chiefComplaint": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
    "diagnosis": "Acute Compartment Syndrome (Tibial Fracture)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None \u2014 healthy 26-year-old",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "None",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
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
      "time": "07:54",
      "bp": "158/92 (pain-induced hypertension)",
      "hr": "118",
      "rr": "22",
      "temp": "37.0\u00b0C",
      "spo2": "99%",
      "pain": "10/10",
      "bmi": "29",
      "weight": "70 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
      "hpi": "Mateo Fernandez is a 24-year-old male presenting with the pain in my shin is unbearable right leg \u2014 anterior compartment (anterior shin). Past medical history includes None \u2014 healthy 26-year-old. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Compartment Syndrome (Tibial Fracture) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-653401",
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
              "value": "9.1",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.9",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "38",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "190",
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
              "value": "145",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "98",
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
              "value": "89",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.6",
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
              "test": "CK Total",
              "value": "2,800",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Myoglobin (Urine)",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "2.2",
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
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-874022",
      "clinical": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "X-ray Tibia/Fibula",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-492295",
      "clinical": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
      "technique": "Standard protocol",
      "findings": "Transverse fracture of the right tibial shaft at the junction of the middle and distal thirds. Minimally displaced. Associated distal fibula fracture. No intra-articular extension. Adequate alignment in splint.",
      "impression": "Right tibial shaft fracture with distal fibula fracture. No gross malalignment. Clinical concern for compartment syndrome \u2014 measurement of compartment pressures recommended.",
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
      "accession": "IMG-339048",
      "clinical": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 118 bpm. Normal intervals",
      "impression": "Sinus tachycardia \u2014 pain",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Social smoker"
    ],
    [
      "Alcohol",
      "Social, was not intoxicated at time of accident"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Firefighter"
    ],
    [
      "Living",
      "Lives with partner"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Mateo Fernandez appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did the pain in my shin is unbearable right leg \u2014 anterior compartment (anterior shin) start?",
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
        "onset": "'The symptoms started The pain in the front of my right shin is absolutely unbearable - it feels like .'",
        "character": "'It's the pain in my shin is unbearable right leg \u2014 anterior compartment (anterior shin) \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take None.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Non-contributory",
        "social": "Tobacco: Social smoker  Alcohol: Social, was not intoxicated at time of accident  Drugs: Denies  Occupation: Firefighter  Living: Lives with partner"
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
        "phase2": "You've reviewed Mateo Fernandez's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
