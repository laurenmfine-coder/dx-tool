/* emr-data/severe-hypothermia.js — EMR case data for Severe Accidental Hypothermia */
window.EMR_DATA = {
  "patient": {
    "name": "Jasmine Thompson",
  "patientHPI": "I don't really remember what happened - someone said they found me outside and I was really cold. I feel confused and everything seems foggy, and I can't stop shivering even though they've been warming me up.",
    "dob": "06/06/1964",
    "age": "62",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-361889",
    "language": "English",
    "race": "Black/African American",
    "phone": "(312) 555-6890",
    "email": "jasmine.thompson@email.com",
    "address": "9829 Walnut Dr, Baltimore, MD 21206",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Karen Liu, DO",
    "pharmacy": "Walmart Pharmacy — Pines Blvd",
    "emergencyContact": {
      "name": "Thomas Hill",
      "phone": "(713) 555-9796",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
    "diagnosis": "Severe Accidental Hypothermia"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Unknown — patient unidentified. Track marks on bilateral arms suggest IV drug use history. Appears malnourished. Possible chronic alcohol use.",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Unknown",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Unknown",
      "reaction": "Unknown",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "07:31",
      "bp": "78/50 (difficult to obtain — vasoconstriction)",
      "hr": "34 (bradycardia)",
      "rr": "8 (slow, shallow)",
      "temp": "82.4°F (28°C) rectal — core temp by esophageal probe preferred",
      "spo2": "Unable to obtain (vasoconstriction — pulse ox unreliable in hypothermia)",
      "pain": "/10",
      "bmi": "27",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "hpi": "Jasmine Thompson is a 62-year-old female presenting with ems report: 'found unresponsive in alley, ambient temp 18°f. appears homeless. slow pulse.' no specific pain reported — global obtundation. Past medical history includes Unknown — patient unidentified. Track marks on bilateral arms suggest IV drug use history. Appears malnourished. Possible chronic alcohol use.. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Severe Accidental Hypothermia — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-142513",
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
              "value": "9",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.6",
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
              "value": "300",
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
              "value": "5.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
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
              "value": "15",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.1",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "58",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
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
              "test": "Core Temperature",
              "value": "82.4°F (28°C)",
              "unit": "",
              "range": "97-99°F",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.22",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "4.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Ethanol Level",
              "value": "186",
              "unit": "mg/dL",
              "range": "0",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "1,200",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Amylase",
              "value": "180",
              "unit": "U/L",
              "range": "30-110",
              "flag": "H"
            },
            {
              "test": "Urine Drug Screen",
              "value": "Positive: opioids, benzodiazepines",
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
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-252798",
      "clinical": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "technique": "Standard protocol",
      "findings": "No acute intracranial pathology. No hemorrhage. Mild generalized atrophy.",
      "impression": "Normal — AMS from hypothermia and intoxication, not structural",
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
      "accession": "IMG-190213",
      "clinical": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "technique": "Standard protocol",
      "findings": "Low lung volumes. No focal consolidation. No aspiration pattern currently.",
      "impression": "Low volumes from shallow breathing. Monitor for aspiration pneumonia.",
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
      "accession": "IMG-707385",
      "clinical": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "technique": "Standard 12-lead",
      "findings": "Marked bradycardia at 34 bpm. OSBORN (J) WAVES — pathognomonic for hypothermia (positive deflection at J-point, most prominent in inferior and lateral leads). Prolonged PR, QRS, and QT intervals. Atrial fibrillation (slow ventricular response). Baseline artifact from shivering/tremor",
      "impression": "Osborn waves with slow AFib — classic hypothermic ECG. Cardiac rhythm is unstable — handle patient GENTLY (even minimal stimulation can trigger ventricular fibrillation in severe hypothermia).",
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
    "Unknown"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Unknown — nicotine-stained fingers"
    ],
    [
      "Alcohol",
      "Possible — alcohol odor on breath (alcohol causes peripheral vasodilation → faster heat loss)"
    ],
    [
      "Drugs",
      "Track marks suggest IV drug use (possible heroin/fentanyl — opioids impair thermoregulation)"
    ],
    [
      "Occupation",
      "Unknown — appears homeless"
    ],
    [
      "Living",
      "Likely unhoused"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Jasmine Thompson appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did ems report: 'found unresponsive in alley, ambient temp 18\u00b0f. appears homeless. slow pulse.' no specific pain reported \u2014 global obtundation start?",
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
        "onset": "'The symptoms started I don't really remember what happened - someone said they found me outside and I.'",
        "character": "'It's ems report: 'found unresponsive in alley, ambient temp 18\u00b0f. appears homeless. slow pulse.' no specific pain reported \u2014 global obtundation \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Unknown.'",
        "allergies": "'My allergies are Unknown.'",
        "family": "Unknown",
        "social": "Tobacco: Unknown \u2014 nicotine-stained fingers  Alcohol: Possible \u2014 alcohol odor on breath (alcohol causes peripheral vasodilation \u2192 faster heat loss)  Drugs: Track marks suggest IV drug use (possible heroin/fentanyl \u2014 opioids impair thermoregulation)  Occupation: Unknown \u2014 appears homeless  Living: Likely unhoused"
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
        "phase2": "You've reviewed Jasmine Thompson's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
