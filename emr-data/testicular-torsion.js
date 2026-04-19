/* emr-data/testicular-torsion.js — EMR case data for Testicular Torsion */
window.EMR_DATA = {
  "patient": {
    "name": "Justin Mercer",
    "patientHPI": "I woke up this morning with really severe pain down there on my left side — it came on suddenly and it's so bad I feel sick to my stomach. The pain is sharp and constant, and I can barely walk because any movement makes it worse.",
    "dob": "06/15/2010",
    "age": "16",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-615645",
    "language": "English",
    "race": "Black/African American",
    "phone": "(415) 555-1939",
    "email": "justin.mercer@email.com",
    "address": "6053 Poplar Ave, Chicago, IL 60612",
    "insurance": "Cigna",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "CVS Pharmacy — Broward Blvd",
    "emergencyContact": {
      "name": "Dorothy Mitchell",
      "phone": "(313) 555-7655",
      "relationship": "Partner"
    },
    "chiefComplaint": "My... down there hurts really bad Left testicle — sudden onset",
    "diagnosis": "Testicular Torsion"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None — previously healthy teenager",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
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
      "time": "08:11",
      "bp": "138/86",
      "hr": "112",
      "rr": "20",
      "temp": "37.0°C",
      "spo2": "99%",
      "pain": "10/10",
      "bmi": "28",
      "weight": "55 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "My... down there hurts really bad Left testicle — sudden onset",
      "hpi": "Justin Mercer is a 16-year-old male presenting with sudden severe scrotal pain — left side. Past medical history includes None — previously healthy teenager. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Testicular Torsion — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-719310",
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
              "value": "11.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.5",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "36",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "169",
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
              "value": "3.9",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "106",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "23",
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
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "100",
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
              "test": "Urinalysis",
              "value": "Normal — no WBC, no bacteria, no blood",
              "unit": "",
              "range": "Normal",
              "flag": ""
            },
            {
              "test": "β-hCG",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
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
      "accession": "IMG-478638",
      "clinical": "My... down there hurts really bad Left testicle — sudden onset",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "POCUS – FAST Exam",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-470698",
      "clinical": "My... down there hurts really bad Left testicle — sudden onset",
      "technique": "Standard protocol",
      "findings": "LEFT TESTICLE: ABSENT INTRATESTICULAR BLOOD FLOW on color Doppler. Testicle appears enlarged and hypoechoic (edematous). Reactive hydrocele present. Spermatic cord appears twisted with 'whirlpool sign.' RIGHT TESTICLE: normal size, normal blood flow on Doppler.",
      "impression": "LEFT TESTICULAR TORSION — absent blood flow. UROLOGY TO OR IMMEDIATELY — do not delay for formal ultrasound.",
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
      "accession": "IMG-462124",
      "clinical": "My... down there hurts really bad Left testicle — sudden onset",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 112 bpm. Normal intervals",
      "impression": "Sinus tachycardia — pain response",
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
    "No urologic conditions"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Never"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "High school student"
    ],
    [
      "Living",
      "Lives with both parents"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Justin Mercer appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did my... down there hurts really bad left testicle — sudden onset start?",
      "Can you describe exactly how it started — sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history — any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle — work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "He pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "I woke up with it this morning. It was already bad when I opened my eyes.",
      "character": "Sharp, constant pain on the left side down there. Any movement makes it worse.",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "Nine or ten out of ten — I can barely walk.",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take no medications.'",
      "allergies": "'My allergies are NKDA.'",
      "family": "No urologic conditions",
      "social": "Tobacco: Never  Alcohol: Never  Drugs: Denies  Occupation: High school student  Living: Lives with both parents"
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
      "phase2": "You've reviewed Justin Mercer's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
