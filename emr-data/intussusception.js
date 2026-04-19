/* emr-data/intussusception.js — EMR case data for Ileocolic Intussusception */
window.EMR_DATA = {
  "patient": {
    "name": "Baby Liam Chen",
  "patientHPI": "My baby has been having these terrible crying spells where he screams and pulls his little knees up to his belly - it comes in waves and he seems to be in so much pain. He was getting over a cold recently, but now he won't eat much and just seems miserable, especially during these episodes where he grabs at his tummy.",
    "dob": "06/15/2025",
    "age": "1",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-915392",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(713) 555-8054",
    "email": "baby.liam.chen@email.com",
    "address": "1853 Willow Way, Kansas City, MO 64110",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Rite Aid \u2014 University Dr",
    "emergencyContact": {
      "name": "Jennifer Morgan",
      "phone": "(804) 555-3937",
      "relationship": "Partner"
    },
    "chiefComplaint": "Screaming and drawing knees up to chest Belly \u2014 child grabs at stomach and pulls knees up during episodes",
    "diagnosis": "Ileocolic Intussusception"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Recent viral URI",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "No prior surgeries",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Up to date on vaccinations",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "History of rotavirus gastroenteritis",
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
      "time": "08:15",
      "bp": "88/56",
      "hr": "148",
      "rr": "30",
      "temp": "37.4\u00b0C",
      "spo2": "99%",
      "pain": "/10",
      "bmi": "27",
      "weight": "56 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Screaming and drawing knees up to chest Belly \u2014 child grabs at stomach and pulls knees up during episodes",
      "hpi": "Baby Liam Chen is a 1-year-old male presenting with screaming and drawing knees up to chest belly \u2014 child grabs at stomach and pulls knees up during episodes. Past medical history includes Recent viral URI, No prior surgeries, Up to date on vaccinations, History of rotavirus gastroenteritis. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ileocolic Intussusception \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-920390",
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
              "value": "14.6",
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
              "value": "35",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "298",
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
              "value": "136",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "L"
            },
            {
              "test": "Chloride",
              "value": "104",
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
              "value": "22",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "0.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "72",
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
              "test": "Lactate",
              "value": "3.1",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "3.2",
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
      "accession": "IMG-984156",
      "clinical": "Screaming and drawing knees up to chest Belly \u2014 child grabs at stomach and pulls knees up during episodes",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "Abdominal X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-342460",
      "clinical": "Screaming and drawing knees up to chest Belly \u2014 child grabs at stomach and pulls knees up during episodes",
      "technique": "Standard protocol",
      "findings": "Paucity of gas in the right lower quadrant. Soft tissue density in the right upper quadrant. Mild small bowel dilation. No free air.",
      "impression": "Findings suggestive of intussusception \u2014 recommend confirmatory ultrasound",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "POCUS \u2013 FAST Exam",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-708294",
      "clinical": "Screaming and drawing knees up to chest Belly \u2014 child grabs at stomach and pulls knees up during episodes",
      "technique": "Standard protocol",
      "findings": "TARGET SIGN (donut sign) visualized in the right upper quadrant \u2014 concentric rings of bowel wall representing telescoped bowel within bowel. Approximately 3.5cm diameter. Small amount of trapped fluid within intussusceptum. No free peritoneal fluid.",
      "impression": "ILEOCOLIC INTUSSUSCEPTION confirmed \u2014 target/donut sign. Pediatric surgery consult for air-contrast enema reduction vs operative intervention.",
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
      "accession": "IMG-604068",
      "clinical": "Screaming and drawing knees up to chest Belly \u2014 child grabs at stomach and pulls knees up during episodes",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 148 bpm. Normal pediatric morphology",
      "impression": "Sinus tachycardia \u2014 pain and dehydration",
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
    "No GI diseases",
    "No prior intussusception in family"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "N/A"
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
      "N/A \u2014 toddler"
    ],
    [
      "Living",
      "Lives with parents. Attends daycare."
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Baby Liam Chen appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did screaming and drawing knees up to chest belly \u2014 child grabs at stomach and pulls knees up during episodes start?",
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
        "onset": "'The symptoms started My baby has been having these terrible crying spells where he screams and pulls .'",
        "character": "'It's screaming and drawing knees up to chest belly \u2014 child grabs at stomach and pulls knees up during episodes \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take no medications.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "No GI diseases  No prior intussusception in family",
        "social": "Tobacco: N/A  Alcohol: N/A  Drugs: N/A  Occupation: N/A \u2014 toddler  Living: Lives with parents. Attends daycare."
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
        "phase2": "You've reviewed Baby Liam Chen's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
