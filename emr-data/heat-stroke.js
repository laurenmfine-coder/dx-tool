
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
    "pharmacy": "Walmart Pharmacy \u2014 Broward Blvd",
    "emergencyContact": {
      "name": "David Carter",
      "phone": "(704) 555-6049",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
    "diagnosis": "Exertional Heat Stroke"
  },
  "problems": [
    {
      "problem": "Exertional heat stroke \u2014 core temp 41.8\u00b0C",
      "icd": "T67.01XA",
      "onset": "2024",
      "status": "Active",
      "notes": "Marcus Taylor, 19M \u2014 football player collapsed post-practice, 95\u00b0F outside. Confused, not sweating. Rectal temp 41.8\u00b0C."
    },
    {
      "problem": "CNS dysfunction \u2014 altered mental status defining feature",
      "icd": "T67.01XA",
      "onset": "2024",
      "status": "Active",
      "notes": "GCS 11. CNS dysfunction + hyperthermia = heat stroke (vs heat exhaustion where CNS is intact)."
    },
    {
      "problem": "Rhabdomyolysis \u2014 exertional, heat-induced",
      "icd": "M62.82",
      "onset": "2024",
      "status": "Active",
      "notes": "CK 18,000 \u2014 exertional rhabdomyolysis. Aggressive IV fluids. Monitor for AKI and compartment syndrome."
    }
  ],
  "medications": [
    {
      "name": "Cold water immersion (CWI) \u2014 primary cooling method",
      "sig": "Immerse in cold water (1-15\u00b0C) while monitoring continuously. Goal core temp <39\u00b0C within 30 minutes. Most effective cooling modality for exertional heat stroke.",
      "prescriber": "Medicine/Sports Med",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 immediate"
    },
    {
      "name": "Normal saline 1-2L IV bolus \u2014 volume resuscitation",
      "sig": "Aggressive IV fluids for rhabdomyolysis \u2014 maintain urine output >1-2 mL/kg/h. Prevents myoglobin-induced AKI.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Lorazepam 2mg IV PRN \u2014 seizure prophylaxis/treatment",
      "sig": "Heat stroke patients are at high risk for seizure during cooling. Have benzodiazepine available.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "PRN"
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
      "temp": "107.2\u00b0F (41.8\u00b0C) rectal",
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
      "cc": "Friend: 'He collapsed during the marathon and won't wake up properly' No specific pain \u2014 global altered mental status",
      "hpi": "Dylan Morales is a 22-year-old male presenting with friend: 'he collapsed during the marathon and won't wake up properly' no specific pain \u2014 global altered mental status. Past medical history includes None \u2014 previously healthy and fit athlete, Prior marathon completions. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Exertional Heat Stroke \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Heat Stroke Panel",
      "results": [
        {
          "test": "Rectal temperature",
          "value": "41.8",
          "unit": "\u00b0C",
          "ref": "36.1-37.2",
          "flag": "H"
        },
        {
          "test": "CK",
          "value": "18,000",
          "unit": "U/L",
          "ref": "22-198",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.8",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "136",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": ""
        },
        {
          "test": "Potassium",
          "value": "5.2",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "H"
        },
        {
          "test": "Urine \u2014 myoglobinuria",
          "value": "Dark brown, myoglobin positive",
          "unit": "",
          "ref": "Clear, negative",
          "flag": "H"
        },
        {
          "test": "PT/INR",
          "value": "1.4",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
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
      "Social \u2014 had beers at pre-race dinner last night"
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
      "Core body temperature measurement": "Rectal temperature 107.2\u00b0F (41.8\u00b0C) - critically elevated",
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
      "Exertional heat stroke \u2014 CWI required, CNS dysfunction (correct)",
      "Heat exhaustion \u2014 intact CNS; confusion distinguishes heat stroke",
      "Hyponatremia (water intoxication in athlete) \u2014 Na normal; different CNS mechanism",
      "Drug intoxication \u2014 stimulants can cause hyperthermia; history negative",
      "Neuroleptic malignant syndrome \u2014 no antipsychotic exposure, different context",
      "Meningitis \u2014 no meningismus, acute exertional context, rectal temp is the key finding"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'marathon collapse' and immediately think cardiac without considering hyperthermia given the critical temperature elevation",
      "prematureClosure": "Risk of stopping at heat exhaustion given the athletic context without recognizing the severity indicated by anhidrosis and altered mental status",
      "availabilityBias": "May overweight recent cases of cardiac arrest in athletes or underweight heat stroke if not commonly seen in practice"
    },
    "coachPrompts": {
      "phase2": "You're thinking about a young athlete who collapsed during a marathon. What environmental factors should you be considering? How might the body's thermoregulatory system respond to prolonged exercise in different conditions?",
      "phase5": "You've identified critical hyperthermia with altered mental status and anhidrosis in a collapsed marathoner. What's the pathophysiology that distinguishes heat exhaustion from heat stroke? What does the absence of sweating tell you about this patient's condition?",
      "finalDebrief": "Heat stroke is a medical emergency characterized by hyperthermia >104\u00b0F with CNS dysfunction. The key differentiator from heat exhaustion is the altered mental status and often anhidrosis, indicating failure of thermoregulatory mechanisms. How did the patient's presentation and vital signs guide you from your initial differential toward this life-threatening diagnosis?",
      "final": "Diagnosis: exertional heat stroke. Key learning: (1) Heat stroke vs heat exhaustion: BOTH have hyperthermia, but heat stroke = CNS dysfunction (confusion, seizure, coma). Heat exhaustion = hyperthermia + weakness/nausea/dizziness with INTACT mental status. The presence of CNS dysfunction mandates heat stroke management regardless of exact temperature. (2) Cold water immersion (CWI): the most effective cooling modality for exertional heat stroke. Target core temp <39\u00b0C within 30 minutes. Death and permanent neurologic injury correlate with duration of hyperthermia. Delay in cooling = worse outcome. Cool first, transport second ('cool and transport, not scoop and run'). (3) Rhabdomyolysis management: IV normal saline to achieve urine output >1-2 mL/kg/h. Once urine output established, can add sodium bicarbonate to alkalinize urine (reduces myoglobin tubular precipitation). Monitor CK, creatinine, potassium. (4) Coagulopathy: elevated PT/INR from heat-induced hepatic injury and direct coagulation factor deactivation. Monitor for DIC in severe cases. (5) Return-to-play after heat stroke: athlete MUST be evaluated by sports medicine/cardiology before returning. Typically 4-6 weeks minimum. Heat tolerance testing before clearance. Prior heat stroke increases future risk."
    }
  },
  "meta": {
    "diagnosis": "Exertional Heat Stroke \u2014 Athlete, Core Temperature 41.8\u00b0C, Cold Water Immersion Immediate Cooling",
    "caseId": "heat-stroke"
  }
};
