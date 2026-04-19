/* emr-data/fournier-gangrene.js — EMR case data for Fournier Gangrene (Necrotizing Perineal Fasciitis) */
window.EMR_DATA = {
  "patient": {
    "name": "Marcus Jefferson",
  "patientHPI": "I've been having this terrible pain down there in my private area that started a few days ago and it's getting so much worse - it's spreading up to my belly and into my groin on both sides, and I'm really scared because it feels like it's burning and the pain is just unbearable.",
    "dob": "06/15/1968",
    "age": "58",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-543859",
    "language": "English",
    "race": "Pacific Islander",
    "phone": "(312) 555-6138",
    "email": "marcus.jefferson@email.com",
    "address": "9671 Poplar Ave, Detroit, MI 48219",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "Walgreens \u2014 University Dr",
    "emergencyContact": {
      "name": "Gerald Phillips",
      "phone": "(312) 555-1821",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Pain down there that's getting worse fast Perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall",
    "diagnosis": "Fournier Gangrene (Necrotizing Perineal Fasciitis)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Obesity",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Recurrent perianal abscesses",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Peripheral vascular disease",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Insulin glargine",
      "dose": "40 units QHS (often misses doses)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-2",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-3",
      "name": "Aspirin",
      "dose": "81mg daily",
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
      "time": "10:10",
      "bp": "92/58",
      "hr": "128",
      "rr": "26",
      "temp": "39.7\u00b0C",
      "spo2": "93%",
      "pain": "10/10",
      "bmi": "30",
      "weight": "61 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Pain down there that's getting worse fast Perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall",
      "hpi": "Marcus Jefferson is a 58-year-old male presenting with pain down there that's getting worse fast perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall. Past medical history includes Type 2 Diabetes, Obesity, Recurrent perianal abscesses, Peripheral vascular disease. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Fournier Gangrene (Necrotizing Perineal Fasciitis) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-171016",
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
              "value": "26.4",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "10.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "47",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "182",
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
              "value": "130",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "4.7",
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
              "value": "27",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "2.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "386",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "10.3",
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
              "test": "Lactate",
              "value": "6.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "32.4",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending \u2014 drawn before antibiotics",
              "unit": "",
              "range": "No growth",
              "flag": ""
            },
            {
              "test": "ABG pH",
              "value": "7.26",
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
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-511415",
      "clinical": "Pain down there that's getting worse fast Perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Abdomen/Pelvis with Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-468243",
      "clinical": "Pain down there that's getting worse fast Perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall",
      "technique": "Standard protocol",
      "findings": "Extensive soft tissue gas tracking through the perineum, bilateral inguinal regions, and lower anterior abdominal wall. Fat stranding and fluid collection in the perineum. Left inguinal abscess with gas. Fascial plane thickening. No intra-abdominal abscess. Testes appear normal.",
      "impression": "FOURNIER GANGRENE \u2014 extensive necrotizing fasciitis of perineum with gas gangrene. EMERGENT SURGICAL DEBRIDEMENT REQUIRED.",
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
      "accession": "IMG-512252",
      "clinical": "Pain down there that's getting worse fast Perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 128 bpm. No ST changes",
      "impression": "Sinus tachycardia \u2014 sepsis and pain",
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
    "Diabetes runs in family"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current smoker, 25 pack-years"
    ],
    [
      "Alcohol",
      "6-8 beers daily"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Disabled \u2014 not working"
    ],
    [
      "Living",
      "Lives alone in apartment"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Marcus Jefferson appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did pain down there that's getting worse fast perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall start?",
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
        "onset": "'The symptoms started I've been having this terrible pain down there in my private area that started a.'",
        "character": "'It's pain down there that's getting worse fast perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Insulin glargine; Metformin; Aspirin.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Diabetes runs in family",
        "social": "Tobacco: Current smoker, 25 pack-years  Alcohol: 6-8 beers daily  Drugs: Denies  Occupation: Disabled \u2014 not working  Living: Lives alone in apartment"
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
        "phase2": "You've reviewed Marcus Jefferson's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
