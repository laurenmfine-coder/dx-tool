/* emr-data/compartment-syndrome.js — EMR case data for Acute Compartment Syndrome (Tibial Fracture) */
window.EMR_DATA = {
  "patient": {
    "name": "Mateo Fernandez",
    "patientHPI": "The pain in the front of my right shin is severe and getting worse by the hour — it feels like intense pressure building up inside my leg, and nothing I do makes it better.",
    "dob": "06/15/2002",
    "age": "24",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-917689",
    "language": "English",
    "race": "Pacific Islander",
    "phone": "(317) 555-8564",
    "email": "mateo.fernandez@email.com",
    "address": "4362 Ash St, Minneapolis, MN 55407",
    "insurance": "Medicare",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "CVS Pharmacy — Federal Hwy",
    "emergencyContact": {
      "name": "Diana Bailey",
      "phone": "(404) 555-1823",
      "relationship": "Parent"
    },
    "chiefComplaint": "Severe shin pain",
    "diagnosis": "Acute Compartment Syndrome (Tibial Fracture)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None — healthy 26-year-old",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "None",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
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
      "time": "07:54",
      "bp": "158/92 (pain-induced hypertension)",
      "hr": "118",
      "rr": "22",
      "temp": "37.0°C",
      "spo2": "99%",
      "pain": "10/10",
      "bmi": "29",
      "weight": "70 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "The pain in my shin is unbearable Right leg — anterior compartment (anterior shin)",
      "hpi": "Mateo Fernandez is a 24-year-old male presenting with severe right shin pain. Past medical history includes None — healthy 26-year-old. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Compartment Syndrome (Tibial Fracture) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-653401",
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
              "value": "9.1",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.9",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "38",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "190",
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
              "value": "145",
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
              "value": "98",
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
              "value": "8",
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
              "value": "89",
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
              "test": "CK Total",
              "value": "2,800",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Myoglobin (Urine)",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "2.2",
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
      "accession": "IMG-874022",
      "clinical": "The pain in my shin is unbearable Right leg — anterior compartment (anterior shin)",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "X-ray Tibia/Fibula",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-492295",
      "clinical": "The pain in my shin is unbearable Right leg — anterior compartment (anterior shin)",
      "technique": "Standard protocol",
      "findings": "Transverse fracture of the right tibial shaft at the junction of the middle and distal thirds. Minimally displaced. Associated distal fibula fracture. No intra-articular extension. Adequate alignment in splint.",
      "impression": "Right tibial shaft fracture with distal fibula fracture. No gross malalignment. Clinical concern for compartment syndrome — measurement of compartment pressures recommended.",
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
      "accession": "IMG-339048",
      "clinical": "The pain in my shin is unbearable Right leg — anterior compartment (anterior shin)",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 118 bpm. Normal intervals",
      "impression": "Sinus tachycardia — pain",
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
      "Social smoker"
    ],
    [
      "Alcohol",
      "Social, was not intoxicated at time of accident"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Firefighter"
    ],
    [
      "Living",
      "Lives with partner"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Mateo appears anxious and in significant distress, frequently shifting position and grimacing. He's very forthcoming about his symptoms and eager for relief, describing the pain as unbearable and expressing concern that something is seriously wrong with his leg.",
    "interviewQuestions": [
      "When did this pain start and what were you doing at the time?",
      "Can you describe exactly what the pain feels like?",
      "Where specifically is the pain located and does it go anywhere else?",
      "On a scale of 1-10, how severe is your pain right now?",
      "What makes the pain worse?",
      "Have you tried anything to make it better?",
      "Are you having any other symptoms besides the pain?",
      "Have you had any numbness, tingling, or weakness in your foot?",
      "Any nausea, vomiting, or feeling faint?",
      "Have you ever had anything like this before?",
      "What medications do you take regularly?",
      "Do you have any known allergies?",
      "Tell me about your work as a firefighter - any recent injuries or activities?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this pain - can you ask that again?",
      "onset": "It started about 6 hours ago after I fell during a training exercise at the fire station. I landed hard on my right shin, but the pain has gotten much worse since then.",
      "character": "It feels like there's tremendous pressure building up inside my leg, like it's going to burst. It's a deep, intense aching that's constant and throbbing.",
      "location": "It's right here on the front of my right shin, in the muscle area. It doesn't really shoot anywhere else, just stays right there.",
      "severity": "Right now it's a 9 out of 10. I can barely think about anything else. I can't put any weight on it without excruciating pain.",
      "aggravating": "Any movement makes it worse, especially trying to walk or flex my foot up. Even just touching the area is unbearable.",
      "relieving": "Nothing helps. I've tried ice, elevation, ibuprofen - nothing even touches it. The pain just keeps getting worse.",
      "associated": "My foot feels a little tingly and numb, especially my toes. I also feel nauseous, but that might be from the pain.",
      "denies": "No chest pain, no shortness of breath, no back pain. No fever or chills. No problems with my other leg.",
      "history": "Never had anything like this before. I've had regular bumps and bruises from work, but nothing that felt like this.",
      "medications": "None",
      "allergies": "NKDA",
      "family": "Nothing really runs in my family that I know of - parents are healthy.",
      "social": "I'm a firefighter, so I'm usually pretty active and in good shape. I smoke occasionally when I'm out with friends, maybe a few drinks on weekends but I wasn't drinking when this happened."
    },
    "examManeuvers": [
      "Inspection of right lower leg",
      "Palpation of anterior compartment",
      "Passive dorsiflexion of foot",
      "Active dorsiflexion strength testing",
      "Dorsalis pedis pulse palpation",
      "Posterior tibial pulse palpation",
      "Two-point discrimination on foot",
      "Capillary refill in toes",
      "Compartment pressure assessment (if available)",
      "Deep peroneal nerve sensation testing"
    ],
    "examFindings": {
      "Inspection of right lower leg": "Mild swelling and erythema over anterior compartment, skin appears taut and shiny",
      "Palpation of anterior compartment": "Compartment feels firm and tense, patient has severe pain with light palpation",
      "Passive dorsiflexion of foot": "Severe pain with passive stretching of anterior compartment muscles",
      "Active dorsiflexion strength testing": "Markedly weak and painful dorsiflexion, patient unable to lift foot against gravity",
      "Dorsalis pedis pulse palpation": "Diminished compared to left foot",
      "Posterior tibial pulse palpation": "Present but weaker than left side",
      "Two-point discrimination on foot": "Impaired sensation in first web space between great and second toe",
      "Capillary refill in toes": "Delayed at 3-4 seconds",
      "Compartment pressure assessment (if available)": "Elevated pressure >30 mmHg in anterior compartment",
      "Deep peroneal nerve sensation testing": "Decreased sensation in deep peroneal nerve distribution"
    },
    "ddxTargets": [
      "Acute anterior compartment syndrome (correct diagnosis)",
      "Tibial stress fracture",
      "Shin splints (medial tibial stress syndrome)",
      "Deep vein thrombosis",
      "Necrotizing fasciitis",
      "Tibial fracture",
      "Severe contusion with hematoma"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'shin splints' or simple contusion given patient's athletic background and mechanism of injury during training",
      "prematureClosure": "May stop workup too early after finding trauma history and conclude it's just a bad bruise without recognizing compartment syndrome features",
      "availabilityBias": "Common sports injuries like shin splints may come to mind first, overshadowing the more serious compartment syndrome"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Compartment syndrome can be limb-threatening - what key historical features would help you identify this emergency? Think about the timeline and character of pain that might distinguish it from more common injuries.",
      "phase5": "Your exam findings are concerning. You noted tense compartments, pain with passive stretch, and neurovascular changes. How do these findings fit together, and what does this constellation suggest about the urgency of the situation?",
      "finalDebrief": "This case highlights how compartment syndrome can evolve from seemingly minor trauma. The key was recognizing the progressive nature of severe pain, the classic 'pressure' sensation, pain with passive stretch, and early neurovascular compromise. Time is muscle in compartment syndrome - delays can lead to permanent disability."
    }
  }
};
