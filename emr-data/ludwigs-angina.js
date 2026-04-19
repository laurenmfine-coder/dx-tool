/* emr-data/ludwigs-angina.js — EMR case data for Ludwig Angina (Submandibular Space Infection) */
window.EMR_DATA = {
  "patient": {
    "name": "Omar Hassan",
    "patientHPI": "I can barely breathe or swallow - the whole area under my jaw and the floor of my mouth is swollen up really bad, and it's spreading down into my neck. I know my teeth aren't in good shape and I haven't been taking care of my diabetes like I should, but this swelling came on fast and it's getting scary.",
    "dob": "03/26/1970",
    "age": "56",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-190325",
    "language": "English",
    "race": "White",
    "phone": "(414) 555-5876",
    "email": "omar.hassan@email.com",
    "address": "3497 E Roosevelt Rd, New Orleans, LA 70119",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Rite Aid — Federal Hwy",
    "emergencyContact": {
      "name": "Susan Garcia",
      "phone": "(803) 555-5735",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Neck swelling and dyspnea",
    "diagnosis": "Ludwig Angina (Submandibular Space Infection)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Poorly controlled Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Dental neglect",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "IV drug use history",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Hepatitis C",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Methadone",
      "dose": "80mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-2",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-3",
      "name": "Glipizide",
      "dose": "10mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Anaphylaxis (documented — CANNOT use any penicillin or ampicillin-based antibiotics)",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "06:57",
      "bp": "158/92",
      "hr": "124",
      "rr": "28",
      "temp": "39.6°C",
      "spo2": "89% on room air → 93% on 15L NRB",
      "pain": "/10",
      "bmi": "26",
      "weight": "71 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "hpi": "Omar Hassan is a 56-year-old male presenting with can barely breathe bilateral submandibular/sublingual — floor of mouth and anterior neck. Past medical history includes Poorly controlled Type 2 Diabetes, Dental neglect, IV drug use history, Hepatitis C. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ludwig Angina (Submandibular Space Infection) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-949361",
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
              "value": "24.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.1",
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
              "value": "178",
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
              "value": "4.4",
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
              "value": "27",
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
              "value": "1.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "342",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "9.4",
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
              "value": "3.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending — drawn before antibiotics",
              "unit": "",
              "range": "No growth",
              "flag": ""
            },
            {
              "test": "ABG pH",
              "value": "7.32",
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
      "accession": "IMG-658128",
      "clinical": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Neck with Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-306306",
      "clinical": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "technique": "Standard protocol",
      "findings": "BILATERAL SUBMANDIBULAR AND SUBLINGUAL SPACE CELLULITIS with diffuse soft tissue swelling and edema. Floor of mouth markedly thickened and elevated. Tongue base displaced superiorly and posteriorly, significantly narrowing the oropharyngeal airway (residual lumen <5mm). Airway patent but CRITICALLY NARROWED. Left lower molar periapical abscess (odontogenic source). Fat stranding throughout bilateral submandibular spaces. Small bilateral submandibular fluid collections (early abscess formation). No gas. No retropharyngeal extension. No mediastinal involvement (yet).",
      "impression": "LUDWIG ANGINA — bilateral submandibular/sublingual cellulitis with CRITICAL AIRWAY NARROWING (<5mm). Odontogenic source (left lower molar). EMERGENT AIRWAY MANAGEMENT REQUIRED. ENT/oral surgery for source control.",
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
      "accession": "IMG-159526",
      "clinical": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 124 bpm. No ST changes",
      "impression": "Sinus tachycardia — sepsis and respiratory distress",
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
    "Diabetes in family"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 20 pack-years"
    ],
    [
      "Alcohol",
      "None currently"
    ],
    [
      "Drugs",
      "Prior IV heroin, now on methadone maintenance (2 years clean)"
    ],
    [
      "Occupation",
      "Warehouse worker"
    ],
    [
      "Living",
      "Lives alone in apartment"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Omar Hassan appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did can barely breathe bilateral submandibular/sublingual — floor of mouth and anterior neck start?",
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
      "onset": "'The symptoms started I can barely breathe or swallow - the whole area under my jaw and the floor of m.'",
      "character": "'It's can barely breathe bilateral submandibular/sublingual — floor of mouth and anterior neck — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Methadone; Metformin; Glipizide.'",
      "allergies": "'My allergies are Penicillin.'",
      "family": "Diabetes in family",
      "social": "Tobacco: Current, 20 pack-years  Alcohol: None currently  Drugs: Prior IV heroin, now on methadone maintenance (2 years clean)  Occupation: Warehouse worker  Living: Lives alone in apartment"
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
      "phase2": "You've reviewed Omar Hassan's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
