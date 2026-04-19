/* emr-data/heat-stroke.js — EMR case data for Exertional Heat Stroke */
window.EMR_DATA = {
  "patient": {
    "name": "Dylan Morales",
    "patientHPI": "My friend brought me here - he says I collapsed during the marathon today and I'm not thinking clearly, but I don't really remember what happened.",
    "dob": "06/15/2004",
    "age": "22",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-350390",
    "language": "English",
    "race": "Asian",
    "phone": "(312) 555-8575",
    "email": "dylan.morales@email.com",
    "address": "456 Maple St, Indianapolis, IN 46222",
    "insurance": "Tricare",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Walmart Pharmacy — Broward Blvd",
    "emergencyContact": {
      "name": "David Carter",
      "phone": "(704) 555-6049",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain — global altered mental status",
    "diagnosis": "Exertional Heat Stroke"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None — previously healthy and fit athlete",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Prior marathon completions",
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
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-2",
      "name": "Ibuprofen",
      "dose": "600mg taken before race (impairs renal prostaglandins)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-3",
      "name": "Caffeine pills",
      "dose": "200mg x2 taken during race (thermogenic)",
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
      "time": "06:31",
      "bp": "92/58",
      "hr": "142",
      "rr": "32",
      "temp": "107.2°F (41.8°C) rectal",
      "spo2": "93%",
      "pain": "/10",
      "bmi": "32",
      "weight": "68 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain — global altered mental status",
      "hpi": "Dylan Morales is a 22-year-old male presenting with friend: 'he collapsed during the marathon and won't wake up properly' no specific pain — global altered mental status. Past medical history includes None — previously healthy and fit athlete, Prior marathon completions. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Exertional Heat Stroke — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-570502",
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
              "value": "7.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
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
              "value": "39",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "157",
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
              "value": "148",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "H"
            },
            {
              "test": "Potassium",
              "value": "5.6",
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
              "value": "25",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "10",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "2.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "90",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.2",
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
              "value": "107.2°F (41.8°C)",
              "unit": "",
              "range": "97-99°F",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "32,000",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "AST",
              "value": "680",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "420",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "PT/INR",
              "value": "1.6",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "8.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.18",
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
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-895220",
      "clinical": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain — global altered mental status",
      "technique": "Standard protocol",
      "findings": "No acute intracranial pathology. No hemorrhage. No edema.",
      "impression": "Normal — AMS from thermal injury to CNS, not structural cause",
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
      "accession": "IMG-971682",
      "clinical": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain — global altered mental status",
      "technique": "Standard protocol",
      "findings": "Clear lungs. Normal cardiac silhouette.",
      "impression": "No acute pulmonary pathology",
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
      "accession": "IMG-218126",
      "clinical": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain — global altered mental status",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 142 bpm. Diffuse ST depression (demand ischemia). QTc prolonged at 490ms",
      "impression": "Sinus tachycardia with demand ischemia. Prolonged QTc from hyperthermia — arrhythmia risk.",
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
    "No malignant hyperthermia history",
    "No cardiac history"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social — had beers at pre-race dinner last night"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Software developer, recreational athlete"
    ],
    [
      "Living",
      "Fit 32-year-old male, well-trained"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Dylan appears confused and disoriented, struggling to focus on questions and frequently losing his train of thought. He seems cooperative but frustrated by his inability to remember clearly what happened, with a flat affect and delayed responses suggesting significant cognitive impairment.",
    "interviewQuestions": [
      "Can you tell me what you remember about today's marathon?",
      "How long were you running before you collapsed?",
      "What was the weather like during the race?",
      "How much water or sports drinks did you consume during the race?",
      "Did you feel dizzy, nauseous, or have a headache before collapsing?",
      "Have you been sweating normally today?",
      "What did you eat and drink in the past 24 hours?",
      "How many hours did you sleep last night?",
      "Have you been taking any medications or supplements recently?",
      "Do you have any medical conditions or take any regular medications?",
      "Have you ever collapsed or had heat-related illness before?",
      "Are you currently experiencing any chest pain, shortness of breath, or palpitations?",
      "Do you have any headache, neck stiffness, or vision changes right now?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble thinking clearly right now. Can you repeat that?",
      "onset": "My friend says I collapsed around mile 20, but I don't really remember. I think I was feeling weird for maybe the last few miles before that.",
      "character": "I don't have pain anywhere specific. I just feel really confused and like my head is in a fog. Everything feels slow.",
      "location": "It's not really pain - more like my whole body feels off and my head feels cloudy.",
      "severity": "I can't really rate it because it's not pain. But I feel really out of it, like maybe 8 out of 10 confused.",
      "aggravating": "Trying to think hard makes me feel worse. The lights in here are bothering me too.",
      "relieving": "Nothing really. I've been trying to drink water but I still feel terrible.",
      "associated": "I feel really hot and my heart is racing. I think I might have thrown up but I'm not sure.",
      "denies": "No chest pain, no trouble breathing really. No headache exactly, just foggy.",
      "history": "No, I've never had anything like this. I've run three marathons before with no problems.",
      "medications": "None routine; Ibuprofen; Caffeine pills",
      "allergies": "NKDA",
      "family": "No one in my family has had problems with anesthesia or anything like that. No heart problems either.",
      "social": "I'm a software developer but I train seriously. I don't smoke, had a couple beers last night at the pre-race dinner. No drugs."
    },
    "examManeuvers": [
      "Core body temperature measurement",
      "Neurological assessment including mental status",
      "Skin examination for sweating and moisture",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Assessment of mucous membranes and skin turgor",
      "Orthostatic vital signs",
      "Fundoscopic examination",
      "Assessment for neck stiffness",
      "Muscle tone and reflexes"
    ],
    "examFindings": {
      "Core body temperature measurement": "Rectal temperature 107.2°F (41.8°C) - critically elevated",
      "Neurological assessment including mental status": "Altered mental status with confusion, disorientation, slow response to commands, Glasgow Coma Scale 13",
      "Skin examination for sweating and moisture": "Hot, dry skin with absent sweating - anhidrosis present",
      "Cardiovascular examination": "Tachycardic at 142 bpm, hypotensive 92/58, weak pulses",
      "Pulmonary examination": "Tachypneic, clear lungs bilaterally, no distress",
      "Assessment of mucous membranes and skin turgor": "Dry mucous membranes, delayed skin turgor suggesting dehydration",
      "Orthostatic vital signs": "Unable to assess due to altered mental status and collapse",
      "Fundoscopic examination": "Difficult to assess due to patient cooperation, no obvious papilledema",
      "Assessment for neck stiffness": "No nuchal rigidity, neck supple",
      "Muscle tone and reflexes": "Normal muscle tone, reflexes intact but delayed"
    },
    "ddxTargets": [
      "Heat stroke (correct diagnosis)",
      "Heat exhaustion",
      "Exercise-associated hyponatremia",
      "Cardiac arrhythmia with collapse",
      "Sepsis with hyperthermia",
      "Drug intoxication or withdrawal",
      "Hypoglycemia with altered mental status"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'marathon collapse' and immediately think cardiac without considering hyperthermia given the critical temperature elevation",
      "prematureClosure": "Risk of stopping at heat exhaustion given the athletic context without recognizing the severity indicated by anhidrosis and altered mental status",
      "availabilityBias": "May overweight recent cases of cardiac arrest in athletes or underweight heat stroke if not commonly seen in practice"
    },
    "coachPrompts": {
      "phase2": "You're thinking about a young athlete who collapsed during a marathon. What environmental factors should you be considering? How might the body's thermoregulatory system respond to prolonged exercise in different conditions?",
      "phase5": "You've identified critical hyperthermia with altered mental status and anhidrosis in a collapsed marathoner. What's the pathophysiology that distinguishes heat exhaustion from heat stroke? What does the absence of sweating tell you about this patient's condition?",
      "finalDebrief": "Heat stroke is a medical emergency characterized by hyperthermia >104°F with CNS dysfunction. The key differentiator from heat exhaustion is the altered mental status and often anhidrosis, indicating failure of thermoregulatory mechanisms. How did the patient's presentation and vital signs guide you from your initial differential toward this life-threatening diagnosis?"
    }
  }
};
