/* emr-data/dic-massive-transfusion.js — EMR case data for Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage */
window.EMR_DATA = {
  "patient": {
    "name": "Esperanza Ruiz",
  "patientHPI": "I just had surgery a few days ago, and now I'm bleeding from everywhere - my incision won't stop oozing, blood keeps coming from where they put my IV in, and even my catheter has blood in it. The nurses keep changing my bandages but nothing seems to be clotting like it should, and I'm really scared because this isn't normal.",
    "dob": "11/16/1966",
    "age": "60",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-531656",
    "language": "English",
    "race": "White",
    "phone": "(314) 555-3321",
    "email": "esperanza.ruiz@email.com",
    "address": "5720 Ash St, Phoenix, AZ 85012",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Walmart Pharmacy — Federal Hwy",
    "emergencyContact": {
      "name": "Richard Walker",
      "phone": "(504) 555-6110",
      "relationship": "Partner"
    },
    "chiefComplaint": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
    "diagnosis": "Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Delayed splenic rupture",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Otherwise healthy 38-year-old",
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
      "time": "08:48",
      "bp": "72/48",
      "hr": "138",
      "rr": "28",
      "temp": "35.3°C",
      "spo2": "91%",
      "pain": "2500/10",
      "bmi": "22",
      "weight": "81 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "hpi": "Esperanza Ruiz is a 60-year-old female presenting with surgical team: 'patient is oozing from everywhere — wound, iv sites, ng tube. blood isn't clotting.' diffuse — bleeding from surgical wound, peripheral iv insertion sites, nasogastric tube, foley catheter (hematuria). Past medical history includes Delayed splenic rupture, Otherwise healthy 38-year-old. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-296007",
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
              "value": "10.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "5.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "42",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "28",
              "unit": "x10³/µL",
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
              "value": "140",
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
              "value": "104",
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
              "value": "20",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "77",
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
              "test": "PT/INR",
              "value": "2.8",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "PTT",
              "value": "68",
              "unit": "sec",
              "range": "25-35",
              "flag": "H"
            },
            {
              "test": "Fibrinogen",
              "value": "62",
              "unit": "mg/dL",
              "range": "200-400",
              "flag": "H"
            },
            {
              "test": "D-dimer",
              "value": ">20",
              "unit": "mcg/mL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Peripheral Smear",
              "value": "Schistocytes present (fewer than in TTP). Decreased platelets on smear.",
              "unit": "",
              "range": "Normal",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "9.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.12",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "Ionized Calcium",
              "value": "0.82",
              "unit": "mmol/L",
              "range": "1.12-1.32",
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
      "accession": "IMG-153647",
      "clinical": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
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
      "accession": "IMG-215395",
      "clinical": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "technique": "Standard protocol",
      "findings": "Small amount of free fluid in Morrison pouch and pelvis (post-surgical). IVC flat (collapsing completely — severe hypovolemia). No pericardial effusion.",
      "impression": "Hypovolemic — aggressive resuscitation needed. Post-operative fluid expected but monitor for expanding hemoperitoneum.",
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
      "accession": "IMG-192951",
      "clinical": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 138 bpm. Low voltage (hypovolemia). No ST elevation",
      "impression": "Sinus tachycardia — hemorrhagic shock",
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
    "No bleeding disorders",
    "No clotting disorders"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Social"
    ],
    [
      "Alcohol",
      "Occasional"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Construction worker"
    ],
    [
      "Living",
      "Lives with girlfriend"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Esperanza Ruiz appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did surgical team: 'patient is oozing from everywhere \u2014 wound, iv sites, ng tube. blood isn't clotting.' diffuse \u2014 bleeding from surgical wound, peripheral iv insertion sites, nasogastric tube, foley catheter (hematuria) start?",
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
        "onset": "'The symptoms started I just had surgery a few days ago, and now I'm bleeding from everywhere - my inc.'",
        "character": "'It's surgical team: 'patient is oozing from everywhere \u2014 wound, iv sites, ng tube. blood isn't clotting.' diffuse \u2014 bleeding from surgical wound, peripheral iv insertion sites, nasogastric tube, foley catheter (hematuria) \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take None routine.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "No bleeding disorders  No clotting disorders",
        "social": "Tobacco: Social  Alcohol: Occasional  Drugs: Denies  Occupation: Construction worker  Living: Lives with girlfriend"
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
        "phase2": "You've reviewed Esperanza Ruiz's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
