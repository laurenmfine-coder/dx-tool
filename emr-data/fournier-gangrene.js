/* emr-data/fournier-gangrene.js — EMR case data for Fournier Gangrene (Necrotizing Perineal Fasciitis) */
window.EMR_DATA = {
  "patient": {
    "name": "Marcus Jefferson",
    "patientHPI": "I've been having this terrible pain down there in my private area that started a few days ago and it's getting so much worse - it's spreading up to my belly and into my groin on both sides, and I'm really scared because it feels like it's burning and the pain is just unbearable.",
    "dob": "06/15/1968",
    "age": "58",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-543859",
    "language": "English",
    "race": "Pacific Islander",
    "phone": "(312) 555-6138",
    "email": "marcus.jefferson@email.com",
    "address": "9671 Poplar Ave, Detroit, MI 48219",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "Walgreens — University Dr",
    "emergencyContact": {
      "name": "Gerald Phillips",
      "phone": "(312) 555-1821",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Pain down there that's getting worse fast Perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall",
    "diagnosis": "Fournier Gangrene (Necrotizing Perineal Fasciitis)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Type 2 Diabetes",
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
      "description": "Recurrent perianal abscesses",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Peripheral vascular disease",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Insulin glargine",
      "dose": "40 units QHS (often misses doses)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-2",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-3",
      "name": "Aspirin",
      "dose": "81mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
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
      "time": "10:10",
      "bp": "92/58",
      "hr": "128",
      "rr": "26",
      "temp": "39.7°C",
      "spo2": "93%",
      "pain": "10/10",
      "bmi": "30",
      "weight": "61 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Pain down there that's getting worse fast Perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall",
      "hpi": "Marcus Jefferson is a 58-year-old male presenting with pain down there that's getting worse fast perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall. Past medical history includes Type 2 Diabetes, Obesity, Recurrent perianal abscesses, Peripheral vascular disease. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Fournier Gangrene (Necrotizing Perineal Fasciitis) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-171016",
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
              "value": "26.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
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
              "value": "47",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "182",
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
              "value": "130",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "4.7",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "105",
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
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "2.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "386",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "10.3",
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
              "value": "6.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "32.4",
              "unit": "mg/dL",
              "range": "<0.5",
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
              "value": "7.26",
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
      "accession": "IMG-511415",
      "clinical": "Pain down there that's getting worse fast Perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall",
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
      "accession": "IMG-468243",
      "clinical": "Pain down there that's getting worse fast Perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall",
      "technique": "Standard protocol",
      "findings": "Extensive soft tissue gas tracking through the perineum, bilateral inguinal regions, and lower anterior abdominal wall. Fat stranding and fluid collection in the perineum. Left inguinal abscess with gas. Fascial plane thickening. No intra-abdominal abscess. Testes appear normal.",
      "impression": "FOURNIER GANGRENE — extensive necrotizing fasciitis of perineum with gas gangrene. EMERGENT SURGICAL DEBRIDEMENT REQUIRED.",
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
      "accession": "IMG-512252",
      "clinical": "Pain down there that's getting worse fast Perineum, scrotum, extending to bilateral inguinal creases and lower abdominal wall",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 128 bpm. No ST changes",
      "impression": "Sinus tachycardia — sepsis and pain",
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
    "Diabetes runs in family"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current smoker, 25 pack-years"
    ],
    [
      "Alcohol",
      "6-8 beers daily"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Disabled — not working"
    ],
    [
      "Living",
      "Lives alone in apartment"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Marcus appears acutely ill and anxious, frequently shifting position trying to find comfort. He is forthcoming about his symptoms and clearly distressed by the severe pain, speaking with urgency about how rapidly his condition has deteriorated. His affect shows both fear and desperation as he seeks relief from what he describes as unbearable burning pain.",
    "interviewQuestions": [
      "When did this pain first start and how has it progressed?",
      "Can you describe what the pain feels like?",
      "Show me exactly where the pain is located and where it spreads",
      "On a scale of 1-10, how severe is your pain right now?",
      "What makes the pain worse or better?",
      "Have you noticed any changes in the skin in that area?",
      "Are you having any fever, chills, or feeling unwell overall?",
      "Have you had any nausea, vomiting, or changes in urination?",
      "Have you had similar problems in this area before?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Tell me about your alcohol and tobacco use",
      "How has your diabetes been controlled lately?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this pain - can you ask that again?",
      "onset": "It started about 3 days ago as just some soreness, but yesterday it got much worse and today it's spreading fast - I'm really scared",
      "character": "It's like a burning, tearing pain that throbs constantly - I've never felt anything like this before",
      "location": "It started right here between my scrotum and rectum, but now it's spreading up into my groin on both sides and up toward my belly",
      "severity": "Right now it's a 9 out of 10 - I can barely sit still and nothing I do helps the pain",
      "aggravating": "Any movement makes it worse, and even touching the area lightly is excruciating",
      "relieving": "Nothing helps - I've tried ibuprofen, sitting, lying down, ice, heat - nothing gives me any relief",
      "associated": "I've been having chills and sweats, and I feel really weak and nauseated - I think I have a fever",
      "denies": "No problems urinating, no discharge, no blood that I've seen",
      "history": "I've had some abscesses around my rectum before that needed to be drained, but nothing like this",
      "medications": "Insulin glargine; Metformin; Aspirin",
      "allergies": "NKDA",
      "family": "My dad and brother both have diabetes, that's about all I know",
      "social": "I'm on disability so I'm not working, I smoke about a pack and a half a day and drink probably 6-8 beers daily - I live alone in my apartment"
    },
    "examManeuvers": [
      "General appearance and vital signs assessment",
      "Inspection of perineum and scrotum",
      "Palpation of affected skin areas",
      "Assessment for crepitus",
      "Evaluation of skin color and texture changes",
      "Lymph node examination",
      "Abdominal examination",
      "Assessment of peripheral pulses",
      "Neurological assessment of perineal sensation",
      "Digital rectal examination"
    ],
    "examFindings": {
      "General appearance and vital signs assessment": "Toxic-appearing male in severe distress, diaphoretic, tachycardic, hypotensive, febrile",
      "Inspection of perineum and scrotum": "Extensive erythema, edema, and areas of dusky discoloration with skin necrosis in perineal region extending to scrotum and inguinal areas",
      "Palpation of affected skin areas": "Exquisite tenderness, areas of fluctuance, and loss of normal tissue resistance",
      "Assessment for crepitus": "Subcutaneous crepitus present throughout affected areas indicating gas in tissues",
      "Evaluation of skin color and texture changes": "Patches of black necrotic tissue with surrounding purple-gray discoloration and bullae formation",
      "Lymph node examination": "Bilateral inguinal lymphadenopathy, nodes tender and enlarged",
      "Abdominal examination": "Soft but tender in lower abdomen, no rebound or guarding",
      "Assessment of peripheral pulses": "Diminished peripheral pulses consistent with known PVD",
      "Neurological assessment of perineal sensation": "Decreased sensation in areas of severe tissue involvement",
      "Digital rectal examination": "Deferred due to patient's severe pain and clinical picture"
    },
    "ddxTargets": [
      "Fournier's gangrene (correct diagnosis)",
      "Severe cellulitis",
      "Perianal abscess",
      "Necrotizing soft tissue infection",
      "Gas gangrene",
      "Scrotal abscess",
      "Parinaud's gangrene variant"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's history of recurrent perianal abscesses and assuming this is just another abscess rather than recognizing the necrotizing process",
      "prematureClosure": "Risk of stopping at cellulitis diagnosis without recognizing the necrotizing component and gas formation that indicates Fournier's gangrene",
      "availabilityBias": "May think of more common conditions like simple abscess or cellulitis rather than the less common but life-threatening Fournier's gangrene"
    },
    "coachPrompts": {
      "phase2": "Looking at this 58-year-old diabetic man with severe perineal pain, what aspects of his presentation and risk factors should guide your history-taking? Consider what red flags you'd want to specifically ask about given his comorbidities.",
      "phase5": "Now that you've examined Marcus and found crepitus, necrosis, and systemic toxicity, how does this change your assessment? What does the combination of his diabetes, the rapid progression, and these physical findings tell you about the urgency and nature of this condition?",
      "finalDebrief": "Fournier's gangrene is a urological emergency requiring immediate surgical debridement. Let's discuss how the key features - diabetic patient, rapid progression, crepitus, necrosis, and systemic toxicity - distinguish this from simple cellulitis or abscess. What made this diagnosis challenging to recognize early, and how might we avoid delays in similar cases?"
    }
  }
};
