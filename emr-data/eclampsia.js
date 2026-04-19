/* emr-data/eclampsia.js — EMR case data for Eclampsia */
window.EMR_DATA = {
  "patient": {
    "name": "Catalina Reyes",
  "patientHPI": "I suddenly got hit with the most terrible headache of my life - it's pounding on both sides of my head and nothing like any headache I've ever had before. I'm 34 weeks pregnant and this pain is so severe I can barely think straight.",
    "dob": "06/15/1998",
    "age": "28",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-945506",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(502) 555-5397",
    "email": "catalina.reyes@email.com",
    "address": "1136 Mulberry St, Pittsburgh, PA 15205",
    "insurance": "Medicare",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Rite Aid \u2014 Sunrise Blvd",
    "emergencyContact": {
      "name": "Linda Carter",
      "phone": "(615) 555-3390",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "What happened Severe headache \u2014 bilateral, throbbing, 'worst headache'",
    "diagnosis": "Eclampsia"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "First pregnancyat 34 weeks",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "BMI 36",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "No prior hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "No seizure history",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Prenatal care: blood pressure was elevated at last visit5 days ago \u2014 told to 'monitor at home'",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Prenatal vitamin",
      "dose": "Daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-2",
      "name": "Iron supplement",
      "dose": "325mg daily",
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
      "time": "07:27",
      "bp": "194/118",
      "hr": "108",
      "rr": "20",
      "temp": "37.2\u00b0C",
      "spo2": "96%",
      "pain": "10/10",
      "bmi": "28",
      "weight": "100 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "What happened Severe headache \u2014 bilateral, throbbing, 'worst headache'",
      "hpi": "Catalina Reyes is a 28-year-old female presenting with what happened severe headache \u2014 bilateral, throbbing, 'worst headache'. Past medical history includes First pregnancyat 34 weeks, BMI 36, No prior hypertension, No seizure history, Prenatal care: blood pressure was elevated at last visit5 days ago \u2014 told to 'monitor at home'. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Eclampsia \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-408172",
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
              "value": "9.7",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
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
              "value": "41",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "82",
              "unit": "x10\u00b3/\u00b5L",
              "range": "150-400",
              "flag": "L"
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
              "value": "3.5",
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
              "value": "25",
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
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "94",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.5",
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
              "test": "AST",
              "value": "248",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "196",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "LDH",
              "value": "680",
              "unit": "U/L",
              "range": "140-280",
              "flag": "H"
            },
            {
              "test": "Uric Acid",
              "value": "8.2",
              "unit": "mg/dL",
              "range": "2.5-5.5",
              "flag": "H"
            },
            {
              "test": "PT/INR",
              "value": "1.2",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "Fibrinogen",
              "value": "180",
              "unit": "mg/dL",
              "range": "200-400 (elevated in pregnancy, usually 400-600)",
              "flag": "H"
            },
            {
              "test": "Urinalysis",
              "value": "3+ protein, no infection",
              "unit": "",
              "range": "Trace protein",
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
      "accession": "IMG-394338",
      "clinical": "What happened Severe headache \u2014 bilateral, throbbing, 'worst headache'",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "POCUS \u2013 FAST Exam",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-756181",
      "clinical": "What happened Severe headache \u2014 bilateral, throbbing, 'worst headache'",
      "technique": "Standard protocol",
      "findings": "No free intraperitoneal fluid. Normal-appearing liver parenchyma. Fetal heart rate 145 bpm, appropriate for gestational age. Normal amniotic fluid volume.",
      "impression": "No abruption-related free fluid. Fetus currently viable.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-123462",
      "clinical": "What happened Severe headache \u2014 bilateral, throbbing, 'worst headache'",
      "technique": "Standard protocol",
      "findings": "No intracranial hemorrhage. Mild diffuse cerebral edema. No mass lesion. No midline shift.",
      "impression": "No hemorrhage \u2014 cerebral edema consistent with eclampsia/posterior reversible encephalopathy syndrome (PRES)",
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
      "accession": "IMG-789414",
      "clinical": "What happened Severe headache \u2014 bilateral, throbbing, 'worst headache'",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 108 bpm. No ST changes. Normal intervals",
      "impression": "Sinus tachycardia \u2014 stress and hypertensive crisis",
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
    "Mother: preeclampsia with first pregnancy",
    "Sister: gestational hypertension"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "None during pregnancy"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Elementary school teacher \u2014 on leave since 32 weeks"
    ],
    [
      "Living",
      "Lives with husband, first pregnancy"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Catalina Reyes appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did what happened severe headache \u2014 bilateral, throbbing, 'worst headache' start?",
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
        "onset": "'The symptoms started I suddenly got hit with the most terrible headache of my life - it's pounding on.'",
        "character": "'It's what happened severe headache \u2014 bilateral, throbbing, 'worst headache' \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Prenatal vitamin; Iron supplement.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Mother: preeclampsia with first pregnancy  Sister: gestational hypertension",
        "social": "Tobacco: Never  Alcohol: None during pregnancy  Drugs: Denies  Occupation: Elementary school teacher \u2014 on leave since 32 weeks  Living: Lives with husband, first pregnancy"
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
        "phase2": "You've reviewed Catalina Reyes's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
