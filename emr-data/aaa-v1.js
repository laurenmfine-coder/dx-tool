
window.EMR_DATA = {
  "patient": {
    "name": "Harold Jensen",
    "patientHPI": "I was just sitting at home when this awful pain hit me right in my belly and went straight through to my back \u2014 I've never felt anything like it, it's incredibly sharp and I can barely stand it.",
    "dob": "06/15/1954",
    "age": "72",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-957460",
    "language": "English",
    "race": "White",
    "phone": "(513) 555-3529",
    "email": "harold.jensen@email.com",
    "address": "4442 Iris Blvd, Memphis, TN 38111",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Walgreens \u2014 Federal Hwy",
    "emergencyContact": {
      "name": "Gloria Perez",
      "phone": "(313) 555-8692",
      "relationship": "Parent"
    },
    "chiefComplaint": "Sudden severe abdominal pain",
    "diagnosis": "Ruptured Abdominal Aortic Aneurysm"
  },
  "problems": [
    {
      "problem": "Ruptured AAA \u2014 posterior retroperitoneal hematoma",
      "icd": "I71.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Sudden back pain + hypotension in 72yo male smoker \u2014 ruptured AAA until proven otherwise"
    },
    {
      "problem": "Hemorrhagic shock \u2014 BP 82/54",
      "icd": "R57.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Class III shock \u2014 permissive hypotension target MAP 50-65 until surgical control"
    },
    {
      "problem": "Aortoiliac occlusive disease \u2014 bilateral absent femoral pulses",
      "icd": "I74.09",
      "onset": "2024",
      "status": "Active",
      "notes": "Weak bilateral femoral pulses \u2014 distal ischemia from hypoperfusion"
    }
  ],
  "medications": [
    {
      "name": "2 large-bore IVs + massive transfusion protocol activated",
      "sig": "MTP: 1:1:1 pRBC:FFP:platelets \u2014 permissive hypotension, avoid crystalloid dilution",
      "prescriber": "ED/Trauma",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Permissive hypotension \u2014 NO aggressive fluid resuscitation",
      "sig": "Target MAP 50-65 \u2014 over-resuscitation worsens bleeding by disrupting clot",
      "prescriber": "Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Protocol"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "reaction": "Hives",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "09:08",
      "bp": "88/54",
      "hr": "124",
      "rr": "28",
      "temp": "36.6\u00b0C",
      "spo2": "95%",
      "pain": "10/10",
      "bmi": "23",
      "weight": "77 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Tearing Belly and back, feels like it goes straight through",
      "hpi": "Harold Jensen is a 72-year-old male presenting with sudden severe abdominal pain. Past medical history includes Hypertension, Known 4.5cm AAA, Hyperlipidemia, COPD. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ruptured Abdominal Aortic Aneurysm \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Emergent Ruptured AAA Labs",
      "results": [
        {
          "test": "Hemoglobin",
          "value": "8.2",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": "L"
        },
        {
          "test": "Hematocrit",
          "value": "24",
          "unit": "%",
          "ref": "41-53",
          "flag": "L"
        },
        {
          "test": "Platelets",
          "value": "88",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": "L"
        },
        {
          "test": "INR",
          "value": "1.8",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "6.2",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Type & Cross",
          "value": "6 units pRBC ordered",
          "unit": "",
          "ref": "",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Bedside POCUS Aorta + CT Abdomen (if hemodynamically tolerated)",
      "indication": "Sudden severe back pain, hypotension, pulsatile abdominal mass",
      "findings": "POCUS: Infrarenal aorta diameter 7.8cm. Periaortic hematoma visible. Free fluid in pelvis. CT abdomen DEFERRED \u2014 patient not stable for scanner.",
      "impression": "POCUS confirms large AAA with periaortic hematoma \u2014 ruptured AAA. Emergent vascular surgery consultation. Immediate OR activation."
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
    "Father died of ruptured aneurysm at 68",
    "Brother had AAA repair at 70"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit 5 years ago, 40 pack-year history"
    ],
    [
      "Alcohol",
      "1-2 beers daily"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired mechanic"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Harold appears extremely anxious and in severe distress, clutching his abdomen and unable to find a comfortable position. He is very forthcoming with information as he is desperate for help, speaking in short bursts between waves of pain. His fear is palpable given his known AAA and family history of aneurysm rupture.",
    "interviewQuestions": [
      "When exactly did this pain start and what were you doing?",
      "Can you describe the quality of the pain - is it sharp, tearing, crushing?",
      "Where exactly is the pain located and does it go anywhere else?",
      "On a scale of 1-10, how severe is this pain?",
      "Does anything make the pain better or worse?",
      "Have you had any nausea, vomiting, or dizziness?",
      "Have you noticed any changes in your legs - numbness, weakness, or color changes?",
      "When was your AAA last checked and what size was it?",
      "Have you had any similar episodes of severe abdominal pain before?",
      "Are you having any difficulty breathing or chest pain?",
      "Have you had any changes in urination or bowel movements?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing - this pain is just overwhelming. Can you repeat that?",
      "onset": "It started about 2 hours ago, completely out of nowhere. I was just sitting in my recliner watching TV when it hit me like a lightning bolt.",
      "character": "It's like someone is tearing me apart from the inside - sharp, ripping pain that just won't let up.",
      "location": "Right here in my belly, around my navel, and it shoots straight through to my back like a knife.",
      "severity": "This is easily a 10 out of 10 - I've never experienced anything this excruciating, not even when I broke my leg.",
      "aggravating": "Any movement makes it worse - I can't find any position that helps. Even breathing deeply makes it more intense.",
      "relieving": "Nothing helps at all. I've tried changing positions, holding my breath, nothing touches this pain.",
      "associated": "I feel really dizzy and lightheaded, and I've been sweating a lot. I feel like I might pass out.",
      "denies": "No chest pain, no trouble breathing besides the pain. No leg pain or numbness that I can tell.",
      "history": "Never anything like this before. I've had some back aches, but nothing even close to this severity.",
      "medications": "Amlodipine; Lisinopril; Atorvastatin",
      "allergies": "Sulfa drugs",
      "family": "My dad died when his aneurysm burst when he was 68, and my brother had to have his AAA fixed when he was 70.",
      "social": "I'm retired from being a mechanic. I quit smoking 5 years ago but smoked for 40 years. I have a couple beers most nights."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Abdominal inspection",
      "Abdominal palpation",
      "Auscultation for abdominal bruits",
      "Assessment for pulsatile abdominal mass",
      "Peripheral pulse examination",
      "Cardiovascular examination",
      "Back and flank examination",
      "Neurological assessment of lower extremities",
      "General appearance and mental status"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 88/54, HR 124, afebrile, SpO2 95% - hypotensive and tachycardic",
      "Abdominal inspection": "Mild distention, no visible pulsations, patient guarding and unable to lie flat",
      "Abdominal palpation": "Exquisite tenderness in periumbilical area, rigid abdomen, pulsatile mass palpable",
      "Auscultation for abdominal bruits": "Diminished bowel sounds, no clear bruits audible due to patient discomfort",
      "Assessment for pulsatile abdominal mass": "Prominent pulsatile mass in epigastrium extending to umbilicus, larger than previous 4.5cm",
      "Peripheral pulse examination": "Weak but present femoral pulses bilaterally, diminished distal pulses",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, weak peripheral pulses",
      "Back and flank examination": "Severe tenderness in lumbar region, no CVA tenderness",
      "Neurological assessment of lower extremities": "Normal motor and sensation, no signs of acute ischemia",
      "General appearance and mental status": "Appears ill, diaphoretic, anxious, alert but in severe distress"
    },
    "ddxTargets": [
      "Ruptured abdominal aortic aneurysm (correct)",
      "Aortic dissection extending to abdomen",
      "Mesenteric ischemia",
      "Renal colic \u2014 cannot explain hemodynamic instability",
      "Peptic ulcer perforation \u2014 anterior pain, peritonitis pattern",
      "Inferior MI \u2014 back pain, but hemodynamics + pulsatile mass clinch AAA"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on less urgent diagnoses like renal colic or back pain due to pain location and radiation pattern",
      "prematureClosure": "Risk of stopping evaluation after finding any abdominal pathology without considering the vascular emergency given known AAA",
      "availabilityBias": "May focus on more common causes of abdominal pain rather than the life-threatening AAA rupture despite clear risk factors"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, I want you to think about this patient's specific risk factors and vital signs. What does the combination of his known 4.5cm AAA, family history, and presenting vital signs suggest? How should this influence your interview priorities?",
      "phase5": "Now that you've completed your history and physical exam, let's discuss what you found. The patient has hypotension, tachycardia, severe abdominal pain, and you palpated what feels like an enlarged pulsatile mass. Given his known AAA, what is your leading diagnosis and what's your next immediate step?",
      "finalDebrief": "This case illustrates the classic presentation of AAA rupture - the triad of abdominal pain, hypotension, and pulsatile abdominal mass in a patient with known AAA and strong family history. Notice how the differential evolved from considering common abdominal pain causes to recognizing this vascular emergency. What clinical clues early in the presentation should have immediately raised your suspicion for AAA rupture?",
      "final": "Diagnosis: ruptured AAA. Key learning: (1) Classic triad: sudden severe back/abdominal pain + hypotension + pulsatile abdominal mass. Sensitivity of triad only 50% \u2014 any two in a male >65 with smoking history = ruptured AAA until proven otherwise. (2) POCUS is the fastest diagnostic tool: probe over the aorta above the umbilicus. Diameter >3cm = aneurysm. Retroperitoneal free fluid confirms rupture. Do NOT send to CT if unstable. (3) Permissive hypotension: target MAP 50-65. Over-aggressive fluids dilute clotting factors (coagulopathy) and raise pressure, disrupting the retroperitoneal tamponade that is temporarily controlling the bleed. (4) Open vs EVAR: hemodynamically unstable patients with ruptured AAA may need open surgery. EVAR (endovascular) is faster and lower mortality in stable patients \u2014 30-day mortality: open ~40%, EVAR ~25%. (5) Mortality: untreated ruptured AAA = 80% mortality. With emergent repair: 40-50%. Every minute from diagnosis to OR correlates with survival."
    }
  },
  "meta": {
    "diagnosis": "Ruptured Abdominal Aortic Aneurysm \u2014 Hemodynamically Unstable, Emergent OR",
    "caseId": "aaa-v1"
  }
};
