/* emr-data/complete-heart-block.js — EMR case data for Complete (Third-Degree) Heart Block */
window.EMR_DATA = {
  "patient": {
    "name": "Raymond Brooks",
  "patientHPI": "I keep feeling like I'm about to pass out and I'm just so weak and lightheaded all the time, though I don't have any chest pain or anything like that.",
    "dob": "06/15/1952",
    "age": "74",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-530586",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(505) 555-8191",
    "email": "raymond.brooks@email.com",
    "address": "3659 Elm St, Milwaukee, WI 53210",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "CVS Pharmacy \u2014 University Dr",
    "emergencyContact": {
      "name": "Gloria Stewart",
      "phone": "(414) 555-9843",
      "relationship": "Parent"
    },
    "chiefComplaint": "I keep nearly passing out No specific chest pain \u2014 generalized weakness and lightheadedness",
    "diagnosis": "Complete (Third-Degree) Heart Block"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Calcific aortic stenosis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Lyme disease",
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
      "name": "Metoprolol",
      "dose": "100mg BID (rate-controlling agent \u2014 potential contributor)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-2",
      "name": "Diltiazem",
      "dose": "180mg ER daily (calcium channel blocker \u2014 potential contributor)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-3",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-4",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "reaction": "Rash",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "10:06",
      "bp": "96/64",
      "hr": "34 (SEVERE BRADYCARDIA)",
      "rr": "18",
      "temp": "36.9\u00b0C",
      "spo2": "94%",
      "pain": "3/10",
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
      "cc": "I keep nearly passing out No specific chest pain \u2014 generalized weakness and lightheadedness",
      "hpi": "Raymond Brooks is a 74-year-old male presenting with i keep nearly passing out no specific chest pain \u2014 generalized weakness and lightheadedness. Past medical history includes Hypertension, Calcific aortic stenosis, Lyme disease, Type 2 Diabetes. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Complete (Third-Degree) Heart Block \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-302357",
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
              "value": "10.2",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.1",
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
              "value": "286",
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
              "value": "5.1",
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
              "value": "26",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "11",
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
              "value": "80",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "10",
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
              "test": "Troponin I",
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "BNP",
              "value": "480",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "TSH",
              "value": "2.8",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
            },
            {
              "test": "Digoxin Level",
              "value": "Not on digoxin",
              "unit": "",
              "range": "0.5-2.0",
              "flag": ""
            },
            {
              "test": "Lyme Antibody",
              "value": "Positive IgG (prior infection \u2014 treated 15 years ago)",
              "unit": "",
              "range": "Negative",
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
      "study": "POCUS \u2013 Cardiac",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-268064",
      "clinical": "I keep nearly passing out No specific chest pain \u2014 generalized weakness and lightheadedness",
      "technique": "Standard protocol",
      "findings": "Moderate LV hypertrophy (from aortic stenosis). Calcified aortic valve with restricted opening. LV function appears preserved but heart rate is severely low (34 bpm). No pericardial effusion. IVC mildly dilated.",
      "impression": "Aortic stenosis with preserved LV function. Severe bradycardia limits cardiac output. No tamponade.",
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
      "accession": "IMG-121509",
      "clinical": "I keep nearly passing out No specific chest pain \u2014 generalized weakness and lightheadedness",
      "technique": "Standard protocol",
      "findings": "Mild cardiomegaly. Mild pulmonary vascular congestion. No focal consolidation. No pleural effusion.",
      "impression": "Mild heart failure from low-output state",
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
      "accession": "IMG-174780",
      "clinical": "I keep nearly passing out No specific chest pain \u2014 generalized weakness and lightheadedness",
      "technique": "Standard 12-lead",
      "findings": "COMPLETE (THIRD-DEGREE) AV BLOCK \u2014 P waves at regular rate (~80/min) with NO relationship to QRS complexes. Ventricular escape rhythm at 34 bpm with WIDE QRS (0.14sec) \u2014 infranodal (His-Purkinje) escape. P waves 'march through' QRS complexes independently. No conducted beats.. PR interval: not applicable (no consistent PR). QRS width: 0.14 sec (wide \u2014 suggests His-Purkinje disease, not junctional)",
      "impression": "COMPLETE HEART BLOCK with wide-complex ventricular escape at 34 bpm. Infranodal block (wide QRS) has high risk of asystole. EMERGENT MANAGEMENT REQUIRED \u2014 transcutaneous pacing, atropine (may not work for infranodal block), and transvenous pacing.",
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
    "Father: pacemaker placement at age 70",
    "No sudden cardiac death history"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit 20 years ago"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired postal worker"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Raymond Brooks appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did i keep nearly passing out no specific chest pain \u2014 generalized weakness and lightheadedness start?",
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
        "onset": "'The symptoms started I keep feeling like I'm about to pass out and I'm just so weak and lightheaded a.'",
        "character": "'It's i keep nearly passing out no specific chest pain \u2014 generalized weakness and lightheadedness \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Metoprolol; Diltiazem; Lisinopril; Metformin.'",
        "allergies": "'My allergies are Sulfa drugs.'",
        "family": "Father: pacemaker placement at age 70  No sudden cardiac death history",
        "social": "Tobacco: Quit 20 years ago  Alcohol: Rare  Drugs: Denies  Occupation: Retired postal worker  Living: Lives with wife"
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
        "phase2": "You've reviewed Raymond Brooks's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
