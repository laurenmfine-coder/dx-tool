/* emr-data/aortic-dissection-back.js — Auto-generated EMR case data for Aortic Dissection */
window.EMR_DATA = {
  "patient": {
    "name": "Raymond Foster",
  "patientHPI": "I was just sitting at home watching TV when suddenly I felt this horrible ripping pain in my chest that shot straight through to my back. It was the worst pain I've ever felt in my life - like someone was tearing me apart from the inside. I've never experienced anything like this before and I knew something was terribly wrong.",
    "dob": "02/18/1959",
    "age": "67",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-575883",
    "language": "English",
    "race": "White",
    "phone": "(615) 555-1919",
    "email": "raymond.foster@email.com",
    "address": "2907 Lavender St, New Orleans, LA 70124",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Rite Aid — Palm Ave",
    "emergencyContact": {
      "name": "Rachel Foster",
      "phone": "(702) 555-1154",
      "relationship": "Parent"
    },
    "chiefComplaint": "Sudden tearing chest pain radiating to back",
    "diagnosis": "Aortic Dissection"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Hypertension (poorly controlled)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Marfan habitus",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Bicuspid aortic valve",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Hydrochlorothiazide",
      "dose": "25mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE Inhibitors",
      "reaction": "Angioedema",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "198/110",
      "hr": "110",
      "rr": "24",
      "temp": "36.6°C",
      "spo2": "95%",
      "pain": "10/10",
      "bmi": "37",
      "weight": "68 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Sudden tearing chest pain radiating to back",
      "hpi": "Raymond Foster is a 67-year-old male presenting with sudden tearing chest pain radiating to back. Past medical history includes Hypertension (poorly controlled), Marfan habitus, Bicuspid aortic valve. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Aortic Dissection — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-316263",
      "collected": "03/01/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
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
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
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
              "value": "3.2",
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
      "id": "img-1",
      "date": "03/01/2026",
      "study": "CTA Chest/Abdomen/Pelvis",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-216397",
      "clinical": "Sudden tearing chest pain radiating to back",
      "technique": "Standard protocol",
      "findings": "Stanford Type A dissection with intimal flap originating at the aortic root, extending through the ascending aorta, arch, and into the descending aorta to the level of the renal arteries. Moderate pericardial effusion. No frank aortic rupture.",
      "impression": "Acute Stanford Type A aortic dissection. Emergent surgical consultation.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
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
    "Father: aortic aneurysm repair",
    "Mother: hypertension"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 30 pack-years"
    ],
    [
      "Cocaine",
      "Admits to crack cocaine use last night"
    ],
    [
      "Occupation",
      "Unemployed"
    ]
  ],
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular",
        "Pulmonary",
        "Abdominal",
        "Extremities",
        "Skin",
        "Targeted exam"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with this condition.",
        "Vital signs": "Finding consistent with this condition.",
        "Cardiovascular": "Finding consistent with this condition.",
        "Pulmonary": "Finding consistent with this condition.",
        "Abdominal": "Finding consistent with this condition.",
        "Extremities": "Finding consistent with this condition.",
        "Skin": "Finding consistent with this condition.",
        "Targeted exam": "Finding consistent with this condition."
    },
    "ddxTargets": [
        "this condition (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for this condition.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Raymond Foster: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['aortic-dissection-back'] = {
  id: 'aortic-dissection-back', name: 'Raymond Foster',
  chiefComplaint: 'Aortic Dissection — Back/Flank Pain Presentation',
  diagnosis: 'Aortic Dissection — Back/Flank Pain Presentation',
  orders: {
    correct: [{ id: 'cta-chest-abd', name: 'CTA chest/abdomen/pelvis with contrast — imaging of choice for dissection', rationale: 'CTA with contrast: 90-100% sensitivity for aortic dissection. Identify: entry tear location (Type A vs B), extent, branch vessel involvement, pericardial effusion, malperfusion. TEE is alternative if contrast contraindicated.' },{ id: 'bp-control', name: 'IV labetalol or esmolol — target SBP <120, HR <60', rationale: 'Anti-impulse therapy: reduce HR first (reduces shear force), then SBP. Labetalol 20mg IV bolus → infusion. Esmolol 500 mcg/kg load → 50-200 mcg/kg/min. Target SBP 100-120, HR <60.' }],
    incorrect: [{ id: 'thrombolytics', name: 'tPA — treat as PE or MI', rationale: 'CONTRAINDICATED. Thrombolytics in aortic dissection cause catastrophic hemorrhage. The tearing pain radiating to back + BP differential between arms = dissection, not MI. CTA before any intervention.' },{ id: 'anticoagulation-ad', name: 'Heparin infusion — anticoagulate for suspected clot', rationale: 'Anticoagulation is generally CONTRAINDICATED in aortic dissection — increases hemorrhagic risk into the false lumen. Only used selectively for malperfusion syndromes under cardiovascular surgical guidance.' }]
  },
  teachingPoints: {
    keyLearning: ['Type A (ascending aorta) dissection: surgical emergency — emergency repair regardless of other factors. Type B (descending only): medical management with anti-impulse therapy; intervention for malperfusion or refractory pain.','Stanford classification: Type A (involves ascending aorta regardless of entry tear location) = surgery. Type B (descending only, distal to subclavian) = medical management first. Mortality: Type A 1-2%/hour without surgery.','Back/flank pain presentation: Type B dissection often presents with back or flank pain mimicking renal colic or musculoskeletal pain. Key clue: tearing quality, hypertension history, pulse deficit.'],
    boardPearls: ['DeBakey vs Stanford: DeBakey I (ascending + descending), II (ascending only), III (descending only). Stanford A = DeBakey I+II. Stanford B = DeBakey III.','Marfan syndrome: annual aortic root surveillance. Prophylactic repair when ascending aorta >4.5-5.0cm. Beta-blockers and losartan reduce progression rate.','Intramural hematoma (IMH): variant of dissection without intimal tear — blood in the aortic wall. Managed like dissection by location (A=surgery, B=medical). May progress to classic dissection or resolve.']
  },
  "guided": {
    "supported": true,
    "patientPersona": "Raymond Foster is cooperative and provides a clear history. He is appropriately concerned about their symptoms.",
    "interviewQuestions": [
        "When did your symptoms start?",
        "Describe the main symptom.",
        "How severe is it?",
        "What makes it worse or better?",
        "Any other symptoms?",
        "Any prior episodes?",
        "What medications do you take?",
        "Any allergies?"
    ],
    "patientResponses": {
        "default": "He thinks for a moment. 'Can you clarify what you mean?'",
        "onset": "'My symptoms started recently, getting worse over the past day or two.'",
        "character": "'It feels like working diagnosis \u2014 fairly significant.'",
        "location": "'The problem is primarily in the affected area.'",
        "severity": "'About a seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat.'",
        "associated": "'I have some associated symptoms consistent with my condition.'",
        "denies": "'No fever, chills, or weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Hydrochlorothiazide.'",
        "allergies": "'My allergies: ACE Inhibitors.'",
        "family": "'No significant family history relevant to this presentation.'",
        "social": "'I am a working adult. Non-smoker. Social drinker.'"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted examination"
    ],
    "examFindings": {
        "General appearance": "Patient appears consistent with working diagnosis.",
        "Vital signs": "Vital signs appropriate to the acuity of presentation.",
        "Cardiovascular auscultation": "Cardiovascular exam as appropriate.",
        "Pulmonary auscultation": "Pulmonary exam as appropriate.",
        "Abdominal examination": "Abdomen as appropriate.",
        "Extremity assessment": "Extremities as appropriate.",
        "Skin examination": "Skin as appropriate.",
        "Targeted examination": "Targeted findings consistent with working diagnosis."
    },
    "ddxTargets": [
        "working diagnosis (correct)",
        "Alternative diagnosis 1",
        "Alternative diagnosis 2",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for working diagnosis.",
        "prematureClosure": "Complete your workup even after forming a hypothesis.",
        "availabilityBias": "Apply systematic reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Raymond Foster \u2014 what are your top 3 diagnoses from chart review?",
        "phase5": "How has your differential changed after history and exam?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Raymond is visibly distressed and anxious, clutching his chest and appearing pale and diaphoretic. He is highly forthcoming about his symptoms due to the severity of pain, speaking rapidly and urgently. He shows some embarrassment about his cocaine use but readily admits it when directly asked.",
    "interviewQuestions": [
        "Can you describe exactly when this pain started?",
        "How would you characterize the quality of this pain?",
        "Where exactly do you feel the pain and does it go anywhere else?",
        "On a scale of 1-10, how severe is this pain?",
        "Does anything make the pain better or worse?",
        "Are you experiencing any shortness of breath, nausea, or sweating?",
        "Have you ever had chest pain like this before?",
        "What medications are you currently taking?",
        "Do you have any known drug allergies?",
        "Tell me about your family history of heart or blood vessel problems",
        "Do you use tobacco, alcohol, or any recreational drugs?",
        "How well controlled has your blood pressure been lately?",
        "Have you noticed any changes in your voice or difficulty swallowing?"
    ],
    "patientResponses": {
        "default": "I'm sorry, I'm having trouble focusing because of this terrible pain in my chest. Can you repeat that?",
        "onset": "It started about 2 hours ago, completely out of nowhere. I was just sitting on my couch watching TV when it hit me like a lightning bolt.",
        "character": "It's a sharp, tearing, ripping sensation - like someone is literally tearing my chest apart from the inside. I've never felt anything like it.",
        "location": "It started right in the center of my chest and immediately shot straight through to my back between my shoulder blades. The pain goes all the way through me.",
        "severity": "This is easily a 10 out of 10 - the worst pain I've ever experienced in my life. I can barely think straight because of it.",
        "aggravating": "Moving around seems to make it worse, and taking deep breaths is really difficult. Nothing I do seems to help it.",
        "relieving": "Nothing helps at all. I've tried changing positions, but the pain is constant and unrelenting.",
        "associated": "I'm sweating profusely and feel short of breath. I also feel nauseous and like I might pass out. My heart is racing.",
        "denies": "I'm not having any numbness or tingling in my arms. No crushing sensation, just this tearing pain. No fever or chills.",
        "history": "Never anything like this before. I've had some chest discomfort with exertion before, but nothing even close to this severity.",
        "medications": "Hydrochlorothiazide",
        "allergies": "ACE Inhibitors",
        "family": "My father had to have his aorta repaired when he was in his 70s - some kind of aneurysm. My mother has high blood pressure too.",
        "social": "I'm unemployed right now. I smoke about a pack a day for 30 years. I'll be honest with you - I used crack cocaine last night. I know I shouldn't have, but I did."
    },
    "examManeuvers": [
        "Blood pressure in both arms",
        "Cardiac auscultation",
        "Pulmonary auscultation",
        "Abdominal palpation for pulsatile masses",
        "Peripheral pulse examination",
        "Neurological assessment of extremities",
        "Inspection for Marfanoid features",
        "Aortic regurgitation murmur assessment",
        "Assessment for pulse deficits",
        "Evaluation for signs of shock"
    ],
    "examFindings": {
        "Blood pressure in both arms": "Right arm 198/110, Left arm 170/95 - significant difference of 28 mmHg systolic",
        "Cardiac auscultation": "Tachycardic at 110 bpm, new harsh diastolic murmur heard best at left sternal border consistent with aortic regurgitation",
        "Pulmonary auscultation": "Clear to auscultation bilaterally, no rales or evidence of pulmonary edema",
        "Abdominal palpation for pulsatile masses": "No palpable abdominal aortic aneurysm, abdomen soft and non-tender",
        "Peripheral pulse examination": "Diminished left radial and brachial pulses compared to right, femoral pulses present bilaterally",
        "Neurological assessment of extremities": "No focal neurological deficits, sensation and motor function intact in all extremities",
        "Inspection for Marfanoid features": "Tall, thin build with long extremities, arachnodactyly present, high-arched palate",
        "Aortic regurgitation murmur assessment": "Grade 3/6 diastolic murmur at left sternal border, new compared to prior exams",
        "Assessment for pulse deficits": "Pulse deficit noted in left upper extremity with weaker pulses compared to right side",
        "Evaluation for signs of shock": "Diaphoretic and anxious appearing but mentating well, skin cool and clammy"
    },
    "ddxTargets": [
        "Acute aortic dissection (correct diagnosis)",
        "ST-elevation myocardial infarction",
        "Pulmonary embolism",
        "Aortic aneurysm rupture",
        "Tension pneumothorax",
        "Esophageal rupture",
        "Cocaine-induced coronary vasospasm"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on cocaine use and assuming cocaine-induced MI rather than considering structural aortic pathology given family history and Marfanoid habitus",
        "prematureClosure": "Risk of stopping evaluation at chest pain workup without considering the tearing quality, back pain radiation, and pulse differentials that suggest aortic dissection",
        "availabilityBias": "Recent exposure to cocaine cases or MI presentations may overshadow the classic presentation of aortic dissection with its distinctive tearing pain and pulse deficits"
    },
    "coachPrompts": {
        "phase2": "Before you interview the patient, consider what historical features would help differentiate between your differential diagnoses. What specific characteristics of chest pain would point toward each condition? How might this patient's risk factors influence your questioning approach?",
        "phase5": "Now that you've completed your history and physical exam, what key findings stand out? Pay particular attention to the blood pressure differences between arms and the new murmur. How do these findings, combined with the patient's description of pain, help narrow your differential diagnosis?",
        "finalDebrief": "This case illustrates how aortic dissection can present with classic features - tearing chest pain radiating to the back, pulse deficits, and blood pressure differentials between arms. The patient's Marfanoid habitus, family history, poorly controlled hypertension, and cocaine use were all significant risk factors. How did your differential diagnosis evolve as you gathered more information? What findings were most crucial in reaching the correct diagnosis?"
    }
}
};
