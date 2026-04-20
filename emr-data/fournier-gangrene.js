
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
    "pharmacy": "Walgreens \u2014 University Dr",
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
      "problem": "Fournier's gangrene \u2014 perineal necrotizing fasciitis",
      "icd": "N49.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Perineal pain, crepitus, erythema spreading to scrotum/perineum \u2014 polymicrobial synergistic infection"
    },
    {
      "problem": "Type 2 diabetes mellitus \u2014 primary risk factor",
      "icd": "E11.9",
      "onset": "2017",
      "status": "Active",
      "notes": "A1c 11.2% \u2014 poor glycemic control is the dominant risk factor for Fournier's"
    },
    {
      "problem": "Sepsis \u2014 from anaerobic/synergistic necrotizing infection",
      "icd": "A41.9",
      "onset": "2024",
      "status": "Active",
      "notes": "HR 118, BP 96/68, temp 39.4\u00b0C \u2014 septic from polymicrobial gas-forming infection"
    }
  ],
  "medications": [
    {
      "name": "Piperacillin-tazobactam 4.5g IV q8h + metronidazole 500mg IV q8h + vancomycin",
      "sig": "Triple antibiotic therapy \u2014 gram-positive (vanco) + gram-negative/anaerobic (pip-tazo + metro)",
      "prescriber": "Surgery/ID",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "NS 30 mL/kg IV bolus \u2014 sepsis resuscitation",
      "sig": "IV bolus \u2014 target MAP >65",
      "prescriber": "Surgery/ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Emergency surgical debridement \u2014 radical excision of necrotic tissue",
      "sig": "Radical debridement of all necrotic tissue \u2014 antibiotics alone are INSUFFICIENT",
      "prescriber": "Urology/Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "EMERGENT OR within 6h"
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
      "temp": "39.7\u00b0C",
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
      "assessment": "Fournier Gangrene (Necrotizing Perineal Fasciitis) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Fournier's Workup",
      "results": [
        {
          "test": "WBC",
          "value": "24.8",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Bands",
          "value": "38",
          "unit": "%",
          "ref": "0-10",
          "flag": "H"
        },
        {
          "test": "Glucose",
          "value": "382",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "HbA1c",
          "value": "11.2",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "2.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "4.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "28.4",
          "unit": "mg/dL",
          "ref": "<1.0",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Pelvis/Perineum with Contrast",
      "indication": "Perineal swelling, crepitus, sepsis \u2014 evaluate extent of necrotizing infection",
      "findings": "Subcutaneous gas within perineal soft tissues, extending along fascial planes to scrotum, perineal body, and medial thighs bilaterally. Fascial plane thickening and fat stranding consistent with necrotizing fasciitis. No abscess requiring separate drainage \u2014 diffuse process. Rectum and bladder intact.",
      "impression": "Fournier's gangrene confirmed \u2014 subcutaneous gas tracking along fascial planes. Emergency surgical debridement required \u2014 extent is larger than clinical exam suggests."
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
      "Disabled \u2014 not working"
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
      "Fournier's gangrene \u2014 emergency debridement (correct)",
      "Scrotal abscess \u2014 localized, no fascial plane gas",
      "Epididymo-orchitis \u2014 no crepitus, no systemic sepsis of this severity",
      "Perineal cellulitis \u2014 no gas on CT, less severe",
      "Strangulated hernia \u2014 inguinal anatomy, different location",
      "Ecthyma gangrenosum \u2014 Pseudomonas, immunocompromised, different appearance"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's history of recurrent perianal abscesses and assuming this is just another abscess rather than recognizing the necrotizing process",
      "prematureClosure": "Risk of stopping at cellulitis diagnosis without recognizing the necrotizing component and gas formation that indicates Fournier's gangrene",
      "availabilityBias": "May think of more common conditions like simple abscess or cellulitis rather than the less common but life-threatening Fournier's gangrene"
    },
    "coachPrompts": {
      "phase2": "Looking at this 58-year-old diabetic man with severe perineal pain, what aspects of his presentation and risk factors should guide your history-taking? Consider what red flags you'd want to specifically ask about given his comorbidities.",
      "phase5": "Now that you've examined Marcus and found crepitus, necrosis, and systemic toxicity, how does this change your assessment? What does the combination of his diabetes, the rapid progression, and these physical findings tell you about the urgency and nature of this condition?",
      "finalDebrief": "Fournier's gangrene is a urological emergency requiring immediate surgical debridement. Let's discuss how the key features - diabetic patient, rapid progression, crepitus, necrosis, and systemic toxicity - distinguish this from simple cellulitis or abscess. What made this diagnosis challenging to recognize early, and how might we avoid delays in similar cases?",
      "final": "Diagnosis: Fournier's gangrene \u2014 perineal necrotizing fasciitis. Key learning: (1) Fournier's = necrotizing fasciitis of the perineum/scrotum. Polymicrobial synergism: aerobic organisms consume oxygen \u2192 create anaerobic microenvironment \u2192 anaerobes proliferate \u2192 gas production (crepitus). Synergy between aerobic and anaerobic organisms makes this MORE virulent than either alone. (2) Risk factors: diabetes (A1c 11.2% here \u2014 dominant risk), immunosuppression, obesity, alcohol. Diabetes impairs neutrophil function, microvascular perfusion, and wound healing \u2014 perfect environment for necrotizing infection. (3) LRINEC score: Laboratory Risk Indicator for Necrotizing Fasciitis: CRP + WBC + Hgb + sodium + creatinine + glucose. Score \u22656 = high probability. This patient: very high score. CT with gas in fascial planes = radiographic confirmation. (4) Antibiotics are NOT enough: fascial planes are avascular once necrotic \u2014 antibiotics cannot penetrate. Only surgical debridement removes infected tissue. Radical excision with 2-3cm margins of healthy tissue. Multiple re-look operations every 24-48h are standard. (5) Mortality: 20-40% despite treatment. Correlates with extent of disease, delay to surgery, APACHE II score. Each hour of delay in debridement increases mortality."
    }
  },
  "meta": {
    "diagnosis": "Fournier's Gangrene \u2014 Necrotizing Fasciitis of Perineum, Polymicrobial, Emergency Debridement",
    "caseId": "fournier-gangrene"
  }
};
