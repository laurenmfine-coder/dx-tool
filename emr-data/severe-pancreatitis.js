/* emr-data/severe-pancreatitis.js — EMR case data for Acute Necrotizing Pancreatitis (Gallstone-Induced) */
window.EMR_DATA = {
  "patient": {
    "name": "Sergio Moreno",
  "patientHPI": "This pain in my stomach is the worst thing I've ever felt - it's like someone is stabbing me right through to my back and I can't find any position that makes it better. I've been throwing up and I'm scared something is really wrong.",
    "dob": "06/20/1966",
    "age": "60",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-822543",
    "language": "English",
    "race": "Black/African American",
    "phone": "(415) 555-6023",
    "email": "sergio.moreno@email.com",
    "address": "2077 Larkspur Ln, Baltimore, MD 21216",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Walgreens — Pines Blvd",
    "emergencyContact": {
      "name": "Brenda Stewart",
      "phone": "(415) 555-4777",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Worst stomach pain of my life Epigastric — boring through to the back",
    "diagnosis": "Acute Necrotizing Pancreatitis (Gallstone-Induced)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Gallstones",
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
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-2",
      "name": "Amlodipine",
      "dose": "10mg daily",
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
      "time": "06:40",
      "bp": "142/88",
      "hr": "112",
      "rr": "22",
      "temp": "38.0°C",
      "spo2": "94%",
      "pain": "10/10",
      "bmi": "25",
      "weight": "95 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worst stomach pain of my life Epigastric — boring through to the back",
      "hpi": "Sergio Moreno is a 60-year-old male presenting with worst stomach pain of my life epigastric — boring through to the back. Past medical history includes Gallstones, Obesity, Hypertension, Type 2 Diabetes. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Necrotizing Pancreatitis (Gallstone-Induced) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-145167",
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
              "value": "16.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
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
              "value": "34",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "165",
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
              "value": "136",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.6",
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
              "value": "28",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "28",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
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
              "value": "71",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "10.4",
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
              "test": "Lipase",
              "value": "4,200",
              "unit": "U/L",
              "range": "10-140",
              "flag": "H"
            },
            {
              "test": "Amylase",
              "value": "1,800",
              "unit": "U/L",
              "range": "30-110",
              "flag": "H"
            },
            {
              "test": "Total Bilirubin",
              "value": "4.8",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": "H"
            },
            {
              "test": "Direct Bilirubin",
              "value": "3.6",
              "unit": "mg/dL",
              "range": "0.0-0.3",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "320",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "AST",
              "value": "280",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "Alkaline Phosphatase",
              "value": "348",
              "unit": "U/L",
              "range": "44-147",
              "flag": "H"
            },
            {
              "test": "Triglycerides",
              "value": "180",
              "unit": "mg/dL",
              "range": "<150",
              "flag": "H"
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
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-262954",
      "clinical": "Worst stomach pain of my life Epigastric — boring through to the back",
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
      "accession": "IMG-419827",
      "clinical": "Worst stomach pain of my life Epigastric — boring through to the back",
      "technique": "Standard protocol",
      "findings": "ACUTE PANCREATITIS with extensive PERIPANCREATIC FAT STRANDING and FLUID COLLECTIONS. Pancreatic body and tail show AREAS OF NON-ENHANCEMENT consistent with NECROSIS (>30% of gland — necrotizing pancreatitis). Gallbladder distended with multiple gallstones. Common bile duct dilated to 12mm (normal <6mm) with possible distal CBD stone. Left pleural effusion (small). No pseudocyst. No portal vein thrombosis.",
      "impression": "ACUTE NECROTIZING GALLSTONE PANCREATITIS with >30% glandular necrosis. CBD dilation with probable choledocholithiasis. GI/surgical consultation for ERCP to relieve biliary obstruction. ICU admission recommended given necrotizing disease.",
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
      "accession": "IMG-895191",
      "clinical": "Worst stomach pain of my life Epigastric — boring through to the back",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 112 bpm. No ST changes",
      "impression": "Sinus tachycardia — pain and volume depletion",
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
    "Mother: gallstones and cholecystectomy",
    "Father: pancreatitis (alcohol-related)"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social — 1-2 drinks per week (not a heavy drinker)"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Bank teller"
    ],
    [
      "Living",
      "Lives with family"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Sergio Moreno appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did worst stomach pain of my life epigastric \u2014 boring through to the back start?",
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
        "onset": "'The symptoms started This pain in my stomach is the worst thing I've ever felt - it's like someone is.'",
        "character": "'It's worst stomach pain of my life epigastric \u2014 boring through to the back \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Metformin; Amlodipine.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Mother: gallstones and cholecystectomy  Father: pancreatitis (alcohol-related)",
        "social": "Tobacco: Never  Alcohol: Social \u2014 1-2 drinks per week (not a heavy drinker)  Drugs: Denies  Occupation: Bank teller  Living: Lives with family"
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
        "phase2": "You've reviewed Sergio Moreno's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
