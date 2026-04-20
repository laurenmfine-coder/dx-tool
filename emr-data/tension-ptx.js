
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
    "pharmacy": "Walmart Pharmacy \u2014 Federal Hwy",
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
      "problem": "Tension pneumothorax \u2014 hemodynamic compromise",
      "icd": "J93.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Ryan Torres, 24M \u2014 MVC, intubated in field. Sudden deterioration: SpO2 75%, BP 68/40, HR 138, tracheal deviation left."
    },
    {
      "problem": "Traumatic pneumothorax \u2014 rib fractures, lung laceration",
      "icd": "S27.0XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Bilateral rib fractures 4-7 on right. Tension physiology from check-valve mechanism."
    },
    {
      "problem": "Hypotensive shock \u2014 obstructive etiology",
      "icd": "R57.9",
      "onset": "2024",
      "status": "Active",
      "notes": "BP 68/40 from tension physiology \u2014 mediastinal shift compromising venous return. Immediate decompression lifesaving."
    }
  ],
  "medications": [
    {
      "name": "Needle decompression \u2014 14g angiocath, 2nd ICS midclavicular line",
      "sig": "IMMEDIATE \u2014 do not wait for CXR. Insert 14g angiocath 2nd intercostal space, midclavicular line. Rush of air confirms diagnosis.",
      "prescriber": "Trauma/ED",
      "start": "2024",
      "refills": 0,
      "status": "DONE \u2014 immediate"
    },
    {
      "name": "Chest tube \u2014 28-32Fr, 4th/5th ICS anterior axillary line",
      "sig": "Definitive treatment after needle decompression. Right side for right-sided tension PTX.",
      "prescriber": "Trauma/Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 placed"
    },
    {
      "name": "Normal saline 1L IV \u2014 resuscitation after decompression",
      "sig": "IV fluid resuscitation after tension physiology relieved. BP should respond rapidly.",
      "prescriber": "Trauma",
      "start": "2024",
      "refills": 0,
      "status": "Active"
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
      "time": "06:47",
      "bp": "82/58",
      "hr": "132",
      "rr": "34",
      "temp": "36.6\u00b0C",
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
      "assessment": "Tension Pneumothorax \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Trauma Panel",
      "results": [
        {
          "test": "ABG \u2014 SpO2",
          "value": "75",
          "unit": "%",
          "ref": ">95",
          "flag": "L"
        },
        {
          "test": "BP",
          "value": "68/40",
          "unit": "mmHg",
          "ref": "Systolic >90",
          "flag": "L"
        },
        {
          "test": "HR",
          "value": "138",
          "unit": "bpm",
          "ref": "60-100",
          "flag": "H"
        },
        {
          "test": "Hemoglobin (FAST)",
          "value": "13.2",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": ""
        },
        {
          "test": "Tracheal position",
          "value": "Deviated left",
          "unit": "",
          "ref": "Midline",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CXR \u2014 POST decompression",
      "indication": "Verify chest tube position",
      "findings": "Right-sided chest tube in good position. Right lung re-expanding. Trachea midline. Bilateral rib fractures 4-7 right.",
      "impression": "Tension pneumothorax resolved. Tube in good position. Continued re-expansion expected."
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
      "Vital signs assessment": "BP 82/58, HR 132, RR 24, SpO2 84% on room air, afebrile at 36.6\u00b0C",
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
      "Tension pneumothorax \u2014 tracheal deviation + shock + decreased breath sounds (correct)",
      "Massive hemothorax \u2014 decreased breath sounds but dull percussion; trachea deviates away from side differently",
      "Cardiac tamponade \u2014 Beck's triad (JVD + hypotension + muffled heart sounds); no tracheal deviation",
      "Obstructive shock \u2014 PE causes obstructive shock but not tracheal deviation",
      "Right mainstem intubation \u2014 SpO2 drop after intubation, but hemodynamics less severely affected",
      "ARDS \u2014 bilateral, not unilateral; no tracheal deviation"
    ],
    "biasFlags": {
      "anchoring": "Young healthy male presenting with chest pain may anchor on anxiety/panic attack or musculoskeletal causes, missing the respiratory etiology",
      "prematureClosure": "The classic presentation and smoking history may lead to quick diagnosis without considering more serious complications like tension pneumothorax",
      "availabilityBias": "Recent exposure to MI cases in training may bias toward cardiac causes in young patients with chest pain"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you're thinking about both cardiac and pulmonary causes. Given this patient's age and presentation, what key historical elements would help you differentiate between these? What would you specifically want to know about the onset and character of his symptoms?",
      "phase5": "Excellent work on your history and physical. Your exam findings are quite revealing - you found diminished breath sounds and hyperresonance on the left. How do these findings, combined with his sudden onset and risk factors, help narrow your differential? What's the most likely diagnosis now?",
      "finalDebrief": "This case demonstrates how primary spontaneous pneumothorax classically presents in young, tall, thin males who smoke. Notice how your differential appropriately evolved from the broad 'chest pain in a young male' to focus on the respiratory findings. The key teaching points are recognizing the classic demographics, the sudden onset pleuritic chest pain, and the physical exam findings of diminished breath sounds with hyperresonance.",
      "final": "Diagnosis: tension pneumothorax. Key learning: (1) Tension PTX is a CLINICAL diagnosis \u2014 do NOT wait for CXR. Classic triad: absent/decreased breath sounds unilaterally + tracheal deviation AWAY from affected side + hypotension. In intubated patients: rising peak airway pressures + sudden deterioration = tension PTX until proven otherwise. (2) Needle decompression: 14g angiocath, 2nd ICS, midclavicular line, just above the rib (avoid neurovascular bundle below rib). Rush of air = confirms diagnosis + partial treatment. Must follow with chest tube \u2014 needle is temporizing only. Alternatively: 4th/5th ICS, anterior axillary line (finger decompression in some protocols). (3) Chest tube placement: 4th/5th ICS, anterior axillary line for trauma. 2nd ICS midclavicular for elective pneumothorax (cosmetically better). Insert over top of rib. Confirm with CXR and water seal chamber. (4) Tension vs simple PTX: simple PTX = air in pleural space without mediastinal shift. Tension = check-valve mechanism \u2192 progressive air accumulation \u2192 mediastinal shift \u2192 kinking of SVC/IVC \u2192 obstructive shock \u2192 cardiac arrest. (5) Bilateral rib fractures \u22653 consecutive ribs = flail chest risk. This patient has 4 rib fractures \u2014 monitor for paradoxical breathing, respiratory fatigue, need for intubation (already intubated)."
    }
  },
  "meta": {
    "diagnosis": "Tension Pneumothorax \u2014 Immediate Needle Decompression, Chest Tube to Follow",
    "caseId": "tension-ptx"
  }
};
