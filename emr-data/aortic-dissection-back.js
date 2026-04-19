/* emr-data/aortic-dissection-back.js — Auto-generated EMR case data for Aortic Dissection */
window.EMR_DATA = {
  "patient": {
    "name": "Raymond Foster",
    "patientHPI": "I was just sitting at home watching TV when suddenly I felt this horrible sharp pain in my chest that shot straight through to my back. I've never experienced anything like this before and I knew something was terribly wrong.",
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
    "chiefComplaint": "Abrupt onset chest pain",
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
      "hpi": "Raymond Foster is a 67-year-old male presenting with abrupt onset chest pain. Past medical history includes Hypertension (poorly controlled), Marfan habitus, Bicuspid aortic valve. See chart for full details.",
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
  "guided": {
    "supported": true,
    "patientPersona": "Raymond appears visibly distressed and diaphoretic, clutching his chest and speaking in short sentences due to pain. He is cooperative and forthcoming about his symptoms but becomes somewhat evasive when discussing his recent cocaine use. His anxiety is palpable as he repeatedly states this is the worst pain he's ever experienced.",
    "interviewQuestions": [
      "Can you describe exactly what the pain feels like?",
      "When did this pain start and what were you doing?",
      "Does the pain move anywhere else in your body?",
      "On a scale of 1-10, how severe is your pain?",
      "Have you ever had chest pain like this before?",
      "Does anything make the pain better or worse?",
      "Are you having any shortness of breath, nausea, or sweating?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Has anyone in your family had heart problems or blood vessel issues?",
      "Do you smoke or use any recreational drugs?",
      "How well controlled is your blood pressure usually?",
      "Have you been told you have any heart valve problems?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this terrible pain. Could you repeat that?",
      "onset": "It started about 2 hours ago completely out of nowhere while I was watching TV. One second I was fine, the next second it was like someone stabbed me in the chest.",
      "character": "It's a sharp, tearing pain - like someone is ripping something apart inside my chest. It's absolutely excruciating.",
      "location": "The pain is right in the center of my chest and shoots straight through to my back between my shoulder blades. It feels like it goes all the way through my body.",
      "severity": "This is easily a 10 out of 10. I've never felt pain like this in my life. I can barely think straight.",
      "aggravating": "Moving makes it worse, and I feel like I can't take a deep breath. Even talking makes it hurt more.",
      "relieving": "Nothing helps. I tried changing positions, but nothing makes any difference. The pain is constant.",
      "associated": "I'm sweating a lot and feel short of breath. I feel nauseous and dizzy. My heart feels like it's racing.",
      "denies": "No crushing feeling, no arm pain, no indigestion feeling. This doesn't feel like what I think a heart attack would feel like.",
      "history": "Never. I've had some chest discomfort with my blood pressure before, but nothing even close to this.",
      "medications": "Hydrochlorothiazide",
      "allergies": "ACE Inhibitors",
      "family": "My father had to have surgery on his aorta - some kind of aneurysm repair when he was in his 70s. My mother has high blood pressure like me.",
      "social": "I'm unemployed right now. I smoke about a pack a day, have for 30 years. I... I used some crack cocaine last night. I know I shouldn't have, but I did."
    },
    "examManeuvers": [
      "Blood pressure in both arms",
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Abdominal palpation for pulsatile mass",
      "Peripheral pulse examination",
      "Neurological assessment",
      "Assessment for aortic regurgitation murmur",
      "Inspection for Marfanoid features",
      "Fundoscopic examination",
      "Assessment for pulse deficits"
    ],
    "examFindings": {
      "Blood pressure in both arms": "Right arm 198/110, Left arm 170/95 - significant differential of 28 mmHg systolic",
      "Cardiac auscultation": "Tachycardic irregular rhythm, diastolic murmur heard best at left sternal border consistent with aortic regurgitation",
      "Pulmonary auscultation": "Clear bilaterally, no rales or wheezes",
      "Abdominal palpation for pulsatile mass": "Soft, non-tender, no pulsatile masses appreciated",
      "Peripheral pulse examination": "Diminished left radial and brachial pulses compared to right",
      "Neurological assessment": "Alert and oriented, no focal deficits, pupils equal and reactive",
      "Assessment for aortic regurgitation murmur": "Grade 3/6 diastolic murmur at left sternal border, new compared to prior documented bicuspid valve murmur",
      "Inspection for Marfanoid features": "Tall, thin build with long extremities, high-arched palate, arm span greater than height",
      "Fundoscopic examination": "Grade 3 hypertensive retinopathy changes",
      "Assessment for pulse deficits": "Weak left upper extremity pulses, asymmetric blood pressures"
    },
    "ddxTargets": [
      "Aortic dissection (correct diagnosis)",
      "ST-elevation myocardial infarction",
      "Pulmonary embolism",
      "Hypertensive emergency",
      "Cocaine-induced coronary artery spasm",
      "Musculoskeletal chest pain",
      "Gastroesophageal reflux disease"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on cocaine use and assuming cocaine-induced MI or coronary spasm, missing the aortic dissection despite classic presentation",
      "prematureClosure": "Risk of stopping workup after identifying hypertensive emergency and cocaine use without considering structural causes of chest pain",
      "availabilityBias": "Recent cases of MI or cocaine-related cardiac events may overshadow consideration of less common but more lethal aortic dissection"
    },
    "coachPrompts": {
      "phase2": "This 67-year-old presents with acute chest pain. Before you interview him, consider his risk factors: Marfan habitus, bicuspid aortic valve, and poorly controlled hypertension. What life-threatening conditions should be at the top of your differential? How might his physical habitus and valve disease influence your thinking?",
      "phase5": "You've identified some concerning findings - the blood pressure differential between arms and the new diastolic murmur are particularly significant. In a patient with Marfan habitus and bicuspid aortic valve, what do these asymmetric findings suggest? How does this change your leading diagnosis from your initial differential?",
      "finalDebrief": "This case demonstrates how risk factors can guide diagnosis. Raymond's Marfan habitus, bicuspid aortic valve, and severe hypertension created the perfect storm for aortic dissection. The cocaine use was a red herring that could have led to anchoring bias. The key diagnostic clues were the blood pressure differential and new aortic regurgitation murmur. How will you remember to look for these findings in future cases with similar risk factors?"
    }
  }
};
