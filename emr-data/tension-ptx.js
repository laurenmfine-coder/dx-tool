/* emr-data/tension-ptx.js — EMR case data for Tension Pneumothorax */
window.EMR_DATA = {
  "patient": {
    "name": "Ryan O'Brien",
    "patientHPI": "I was just sitting in class when I suddenly couldn't catch my breath and got this sharp, stabbing pain on the left side of my chest that shoots around to my back. It feels like someone is squeezing my chest really tight, and the pain gets much worse when I try to take a deep breath.",
    "dob": "06/15/1998",
    "age": "28",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-778413",
    "language": "English",
    "race": "American Indian",
    "phone": "(412) 555-6325",
    "email": "ryan.o'brien@email.com",
    "address": "8709 Hickory Rd, Minneapolis, MN 55410",
    "insurance": "Medicaid",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Walmart Pharmacy — Federal Hwy",
    "emergencyContact": {
      "name": "Charles Nelson",
      "phone": "(704) 555-8837",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Can't breathe Left chest and back, worse on the left side",
    "diagnosis": "Tension Pneumothorax"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None significant",
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
      "time": "06:47",
      "bp": "82/58",
      "hr": "132",
      "rr": "34",
      "temp": "36.6°C",
      "spo2": "84%",
      "pain": "10/10",
      "bmi": "26",
      "weight": "100 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Can't breathe Left chest and back, worse on the left side",
      "hpi": "Ryan O'Brien is a 28-year-old male presenting with can't breathe left chest and back, worse on the left side. Past medical history includes None significant. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Tension Pneumothorax — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-229236",
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
              "value": "15.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "43",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
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
              "value": "4.8",
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
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "95",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "10.1",
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
              "value": "4.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.28",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "ABG pCO2",
              "value": "52",
              "unit": "mmHg",
              "range": "35-45",
              "flag": "H"
            },
            {
              "test": "Type and Screen",
              "value": "O positive, antibody negative",
              "unit": "",
              "range": "",
              "flag": ""
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
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-416455",
      "clinical": "Can't breathe Left chest and back, worse on the left side",
      "technique": "Standard protocol",
      "findings": "Large left-sided pneumothorax with complete lung collapse. Mediastinal shift to the right. Flattening of the left hemidiaphragm. Multiple left rib fractures (ribs 4-7).",
      "impression": "TENSION PNEUMOTHORAX — emergent needle decompression / chest tube required",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "POCUS – Lung",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-203817",
      "clinical": "Can't breathe Left chest and back, worse on the left side",
      "technique": "Standard protocol",
      "findings": "Absent lung sliding on left. Barcode sign (stratosphere sign) on M-mode. No lung point identified. Right lung normal sliding present.",
      "impression": "Left pneumothorax confirmed on bedside ultrasound",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "POCUS – FAST Exam",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-105804",
      "clinical": "Can't breathe Left chest and back, worse on the left side",
      "technique": "Standard protocol",
      "findings": "No free fluid in Morrison pouch, splenorenal recess, or pelvis. No pericardial effusion.",
      "impression": "Negative FAST — no hemoperitoneum",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-4",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-882834",
      "clinical": "Can't breathe Left chest and back, worse on the left side",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 132 bpm. Low voltage in limb leads. Right axis deviation. No ST changes",
      "impression": "Sinus tachycardia with low voltage — consistent with tension pneumothorax",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Social smoker, a few cigarettes a week"
    ],
    [
      "Alcohol",
      "3-4 beers on weekends"
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
    "patientPersona": "Ryan appears anxious and mildly distressed, sitting upright and favoring his left side. He is cooperative and forthcoming with information, speaking in short sentences due to mild shortness of breath. His distress level is moderate - clearly uncomfortable but not in severe distress.",
    "interviewQuestions": [
      "When exactly did your symptoms start and what were you doing?",
      "Can you describe the chest pain - is it sharp, dull, crushing, or stabbing?",
      "Where exactly is the pain and does it move anywhere else?",
      "On a scale of 1-10, how severe is your pain and breathing difficulty?",
      "What makes your symptoms worse or better?",
      "Have you had any similar episodes before?",
      "Do you have any other symptoms like lightheadedness, nausea, or sweating?",
      "Have you had any recent trauma, surgery, or long periods of immobility?",
      "Do you have any ongoing medical conditions or take any medications?",
      "Any family history of heart or lung problems?",
      "Tell me about your smoking history - how much and for how long?",
      "Have you used any drugs, particularly cocaine or stimulants?",
      "Any recent travel or flights?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this chest pain and breathing trouble. Can you ask that again?",
      "onset": "It started suddenly about 30 minutes ago while I was sitting in my construction safety class. I wasn't doing anything physical, just sitting there listening.",
      "character": "It's a really sharp, stabbing pain that feels like someone is sticking a knife in my chest. It's definitely not dull or crushing.",
      "location": "The pain is on the left side of my chest, kind of toward the outside, and it wraps around to my left shoulder blade in the back.",
      "severity": "The pain is probably a 7 out of 10, and my breathing difficulty is maybe a 6. I can't take deep breaths without the pain getting much worse.",
      "aggravating": "Taking deep breaths makes it way worse. Moving around or changing positions doesn't seem to help or hurt much.",
      "relieving": "Nothing really helps. I tried sitting up straight, leaning forward, but nothing makes it better.",
      "associated": "I feel a little dizzy and lightheaded, probably because I can't catch my breath. No nausea or sweating really.",
      "denies": "No, I haven't had any chest pounding or racing heart that I noticed. No arm pain or jaw pain. No coughing up blood.",
      "history": "Never had anything like this before. I've never had chest pain or breathing problems.",
      "medications": "no medications",
      "allergies": "NKDA",
      "family": "No family history of heart attacks or lung problems that I know of. My parents are both healthy.",
      "social": "I work construction, so I'm pretty active. I smoke maybe 3-4 cigarettes a week socially, have been doing that for about 5 years. I drink a few beers on weekends. No drugs at all."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "General appearance and respiratory effort",
      "Chest inspection and symmetry",
      "Chest percussion",
      "Pulmonary auscultation",
      "Cardiac auscultation",
      "Neck vein assessment",
      "Peripheral pulse examination",
      "Chest wall palpation",
      "Abdominal examination"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 82/58, HR 132, RR 24, SpO2 84% on room air, afebrile at 36.6°C",
      "General appearance and respiratory effort": "Alert, anxious-appearing male in mild respiratory distress, sitting upright, speaking in short sentences",
      "Chest inspection and symmetry": "Decreased chest wall movement on the left side, chest appears slightly asymmetric",
      "Chest percussion": "Hyperresonant to percussion over the left chest, normal resonance on the right",
      "Pulmonary auscultation": "Markedly diminished breath sounds on the left side, clear breath sounds on the right",
      "Cardiac auscultation": "Tachycardic regular rhythm, no murmurs, gallops, or rubs appreciated",
      "Neck vein assessment": "Jugular veins not distended, no tracheal deviation appreciated",
      "Peripheral pulse examination": "Weak but palpable radial pulses bilaterally, no pulse paradox",
      "Chest wall palpation": "No chest wall tenderness, no crepitus, no point tenderness over ribs",
      "Abdominal examination": "Soft, non-tender, no organomegaly, normal bowel sounds"
    },
    "ddxTargets": [
      "Primary spontaneous pneumothorax (correct diagnosis)",
      "Pulmonary embolism",
      "Pleuritis/pleurisy",
      "Tension pneumothorax",
      "Myocardial infarction",
      "Musculoskeletal chest pain",
      "Panic attack/anxiety"
    ],
    "biasFlags": {
      "anchoring": "Young healthy male presenting with chest pain may anchor on anxiety/panic attack or musculoskeletal causes, missing the respiratory etiology",
      "prematureClosure": "The classic presentation and smoking history may lead to quick diagnosis without considering more serious complications like tension pneumothorax",
      "availabilityBias": "Recent exposure to MI cases in training may bias toward cardiac causes in young patients with chest pain"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you're thinking about both cardiac and pulmonary causes. Given this patient's age and presentation, what key historical elements would help you differentiate between these? What would you specifically want to know about the onset and character of his symptoms?",
      "phase5": "Excellent work on your history and physical. Your exam findings are quite revealing - you found diminished breath sounds and hyperresonance on the left. How do these findings, combined with his sudden onset and risk factors, help narrow your differential? What's the most likely diagnosis now?",
      "finalDebrief": "This case demonstrates how primary spontaneous pneumothorax classically presents in young, tall, thin males who smoke. Notice how your differential appropriately evolved from the broad 'chest pain in a young male' to focus on the respiratory findings. The key teaching points are recognizing the classic demographics, the sudden onset pleuritic chest pain, and the physical exam findings of diminished breath sounds with hyperresonance."
    }
  }
};
