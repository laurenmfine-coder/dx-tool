
window.EMR_DATA = {
  "patient": {
    "name": "Mateo Fernandez",
    "patientHPI": "The pain in the front of my right shin is severe and getting worse by the hour \u2014 it feels like intense pressure building up inside my leg, and nothing I do makes it better.",
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
    "pharmacy": "CVS Pharmacy \u2014 Federal Hwy",
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
      "problem": "Acute compartment syndrome \u2014 right lower leg",
      "icd": "M79.A11",
      "onset": "2024",
      "status": "Active",
      "notes": "Tibial fracture 6h ago, compartment pressure 44 mmHg, 5 Ps \u2014 emergency fasciotomy"
    },
    {
      "problem": "Tibial shaft fracture \u2014 mechanism",
      "icd": "S82.201A",
      "onset": "2024",
      "status": "Active",
      "notes": "MVC mechanism. ORIF planned \u2014 fasciotomy required first to prevent muscle necrosis."
    },
    {
      "problem": "Pain out of proportion \u2014 cardinal symptom",
      "icd": "M79.A11",
      "onset": "2024",
      "status": "Active",
      "notes": "Pain with passive stretch of toes \u2014 most sensitive early finding. Paresthesias developing."
    }
  ],
  "medications": [
    {
      "name": "HOLD elevation above heart level \u2014 CONTRAINDICATED in compartment syndrome",
      "sig": "Do NOT elevate limb \u2014 reduces perfusion pressure. Keep at heart level.",
      "prescriber": "Orthopedics",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 important order"
    },
    {
      "name": "Morphine 4mg IV PRN \u2014 adequate analgesia",
      "sig": "IV PRN \u2014 pain control while preparing for emergency fasciotomy",
      "prescriber": "Ortho",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Emergency fasciotomy \u2014 bedside or OR",
      "sig": "Definitive treatment \u2014 four-compartment fasciotomy right lower leg",
      "prescriber": "Orthopedics",
      "start": "11/2024",
      "refills": 0,
      "status": "EMERGENT \u2014 within 1 hour"
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
      "temp": "37.0\u00b0C",
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
      "cc": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
      "hpi": "Mateo Fernandez is a 24-year-old male presenting with severe right shin pain. Past medical history includes None \u2014 healthy 26-year-old. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Compartment Syndrome (Tibial Fracture) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Compartment Syndrome Workup",
      "results": [
        {
          "test": "Compartment pressure (Stryker)",
          "value": "44",
          "unit": "mmHg",
          "ref": "<30 (threshold for fasciotomy)",
          "flag": "H"
        },
        {
          "test": "CK",
          "value": "8,800",
          "unit": "U/L",
          "ref": "22-198",
          "flag": "H"
        },
        {
          "test": "Myoglobin (urine)",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "2.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "5.2",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Right Tibial X-ray AP/Lateral",
      "indication": "MVC lower leg injury",
      "findings": "Comminuted mid-shaft tibial fracture. Fibula fracture at same level. Soft tissue swelling significant. No vascular injury identified on imaging but clinical compartment syndrome supersedes imaging.",
      "impression": "Comminuted tibial shaft fracture. Clinical diagnosis of acute compartment syndrome \u2014 emergency fasciotomy indicated before ORIF."
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
      "Acute compartment syndrome \u2014 emergency fasciotomy (correct)",
      "Deep vein thrombosis \u2014 different pathophysiology, soft tender cord, positive duplex",
      "Peripheral artery occlusion \u2014 absent pulses (present here early)",
      "Fracture pain alone \u2014 pressure measurement confirms compartment syndrome",
      "Rhabdomyolysis without compartment syndrome \u2014 CK elevated from muscle injury but pressure confirms",
      "Neuropraxia from fracture \u2014 sensory changes, but pressure measurement is diagnostic"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'shin splints' or simple contusion given patient's athletic background and mechanism of injury during training",
      "prematureClosure": "May stop workup too early after finding trauma history and conclude it's just a bad bruise without recognizing compartment syndrome features",
      "availabilityBias": "Common sports injuries like shin splints may come to mind first, overshadowing the more serious compartment syndrome"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Compartment syndrome can be limb-threatening - what key historical features would help you identify this emergency? Think about the timeline and character of pain that might distinguish it from more common injuries.",
      "phase5": "Your exam findings are concerning. You noted tense compartments, pain with passive stretch, and neurovascular changes. How do these findings fit together, and what does this constellation suggest about the urgency of the situation?",
      "finalDebrief": "This case highlights how compartment syndrome can evolve from seemingly minor trauma. The key was recognizing the progressive nature of severe pain, the classic 'pressure' sensation, pain with passive stretch, and early neurovascular compromise. Time is muscle in compartment syndrome - delays can lead to permanent disability.",
      "final": "Diagnosis: acute compartment syndrome \u2014 emergency fasciotomy. Key learning: (1) 6 Ps: Pain (out of proportion), Pressure (tense compartment on palpation), Paresthesias (tingling), Paralysis (late), Pallor (late), Pulselessness (late). LATE signs (pallor, pulselessness) = irreversible damage already occurring. Pain with passive stretch of toes is the EARLIEST sign. Trust pain out of proportion. (2) Fasciotomy threshold: delta pressure (diastolic BP - compartment pressure) \u226430 mmHg = fasciotomy. OR compartment pressure alone >40-45 mmHg. Compartment pressure 44 mmHg with diastolic 70 = delta 26 = fasciotomy clearly indicated. (3) NEVER elevate the limb \u2014 conventional wisdom from swelling management is WRONG in compartment syndrome. Elevation reduces perfusion pressure (which = MAP - compartment pressure). Heart level or below. (4) Rhabdomyolysis: CK 8,800 and rising. Concurrent aggressive hydration to prevent AKI from myoglobin. After fasciotomy, reperfusion increases CK further \u2014 monitor and hydrate. (5) Time to fasciotomy: irreversible muscle necrosis begins at 6 hours of elevated compartment pressure. Nerve damage at 4 hours. This patient is at 6 hours \u2014 fasciotomy now saves function. After fasciotomy, ORIF of tibial fracture can proceed."
    }
  },
  "meta": {
    "diagnosis": "Acute Compartment Syndrome \u2014 Anterior Tibial Compartment, Pressure >40 mmHg, Emergency Fasciotomy",
    "caseId": "compartment-syndrome"
  }
};
