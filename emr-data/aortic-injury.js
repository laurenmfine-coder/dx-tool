// Virtual EMR Case: Blunt Traumatic Aortic Injury
// Variant: aortic-injury | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Rivera",
    "patientHPI": "I'm here for my yearly check-up and feeling great overall. I've been keeping up with my cycling and weight training routine, and I haven't had any health issues or injuries lately. No complaints at all - just want to make sure everything looks good.",
    "dob": "03/22/1991",
    "age": 33,
    "sex": "Male",
    "mrn": "RDX-2025-61438",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Angela Morales, MD",
    "pharmacy": "CVS Pharmacy — 2201 S University Dr, Riverside, FL",
    "language": "English",
    "race": "Hispanic",
    "address": "1781 Birch Ln, Richmond, VA 23220",
    "phone": "(954) 555-6193",
    "email": "m.rivera91@email.com",
    "emergencyContact": {
      "name": "Sofia Rivera (Wife)",
      "phone": "(954) 555-6207"
    }
  },
  "problems": [
    {
      "problem": "No significant past medical history",
      "icd": "Z03.89",
      "onset": "2025",
      "status": "Active",
      "notes": "Healthy prior to trauma"
    },
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2015",
      "status": "Active",
      "notes": "Spring pollen"
    },
    {
      "problem": "Vitamin D Deficiency",
      "icd": "E55.9",
      "onset": "2023",
      "status": "Resolved",
      "notes": "Completed supplementation course"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet by mouth daily as needed for allergies",
      "prescriber": "Dr. Morales",
      "start": "03/2022",
      "refills": 5,
      "status": "PRN"
    },
    {
      "name": "Ibuprofen 400mg PRN",
      "sig": "Take 1 tablet by mouth every 6-8 hours as needed for pain",
      "prescriber": "Dr. Morales",
      "start": "01/2024",
      "refills": 2,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/10/2025",
      "bp": "124/78",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "185 lbs",
      "ht": "5'11\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    },
    {
      "date": "07/18/2024",
      "bp": "120/76",
      "hr": 68,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "183 lbs",
      "ht": "5'11\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    },
    {
      "date": "01/22/2024",
      "bp": "118/74",
      "hr": 70,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "98%",
      "wt": "180 lbs",
      "ht": "5'11\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Angela Morales, MD",
      "cc": "Annual physical exam",
      "hpi": "33-year-old male presenting for routine annual wellness exam. No active complaints. Reports regular exercise including cycling and weight training. Denies chest pain, shortness of breath, or recent illness.",
      "exam": "General: Well-appearing male in NAD. HEENT: PERRL, EOMI, oropharynx clear. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT/ND. Extremities: No edema. Neuro: A&O x3, cranial nerves intact.",
      "assessment": "1. Annual wellness exam — healthy male, no acute issues",
      "plan": "1. Age-appropriate screening current\n2. Continue exercise regimen\n3. RTC 1 year or PRN"
    },
    {
      "id": "V002",
      "date": "07/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Angela Morales, MD",
      "cc": "Follow-up: Vitamin D deficiency",
      "hpi": "33-year-old male follow-up after 12-week vitamin D supplementation course. Reports compliance with 50,000 IU weekly regimen. No musculoskeletal complaints. Feeling well overall.",
      "exam": "General: NAD. Vitals: WNL. MSK: Full ROM all extremities, no tenderness.",
      "assessment": "1. Vitamin D deficiency — resolved, levels normalized",
      "plan": "1. Discontinue high-dose supplementation\n2. OTC vitamin D3 2,000 IU daily for maintenance\n3. Recheck level at next annual"
    }
  ],
  "labs": [
    {
      "date": "01/10/2025",
      "time": "09:15",
      "orderedBy": "Dr. Angela Morales, MD",
      "collected": "01/10/2025 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-041289",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (12 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "88",
              "unit": "mg/dL",
              "range": "70-100",
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
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.1",
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
              "test": "CO2 (Bicarbonate)",
              "value": "25",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.6",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "ALT (SGPT)",
              "value": "22",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST (SGOT)",
              "value": "20",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "6.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "15.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "45.1",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            {
              "test": "Total Cholesterol",
              "value": "188",
              "unit": "mg/dL",
              "range": "<200",
              "flag": ""
            },
            {
              "test": "LDL-C",
              "value": "110",
              "unit": "mg/dL",
              "range": "<130",
              "flag": ""
            },
            {
              "test": "HDL-C",
              "value": "52",
              "unit": "mg/dL",
              "range": ">40",
              "flag": ""
            },
            {
              "test": "Triglycerides",
              "value": "130",
              "unit": "mg/dL",
              "range": "<150",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/10/2025",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2025-01038",
      "status": "FINAL",
      "orderedBy": "Dr. Angela Morales, MD",
      "readBy": "Dr. Lisa Tran, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "33M annual physical. No acute complaints.",
      "technique": "PA and lateral views, upright, full inspiration.",
      "findings": "Heart: Normal size and silhouette.\\n\\nMediastinum: Normal width. No mediastinal widening.\\n\\nLungs: Clear bilaterally. No focal consolidation, pleural effusion, or pneumothorax.\\n\\nBones: No acute osseous abnormality.",
      "impression": "1. Normal chest radiograph.\\n2. No acute cardiopulmonary process.",
      "dictated": "01/10/2025 11:30",
      "verified": "01/10/2025 14:05"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-312",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/05/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-887",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "01/2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B (Recombivax)",
      "date": "2009",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Father: Hypertension, alive at 62",
    "Mother: Hyperlipidemia, alive at 58",
    "Paternal grandfather: MI at age 70 (deceased)",
    "Brother: No significant medical history, age 30"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Construction project manager"
    ],
    [
      "Marital",
      "Married"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social — 2-3 beers/week"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Cycling and weight training 4x/week"
    ],
    [
      "Housing",
      "Lives with wife and 2 children"
    ],
    [
      "Safety",
      "Denies IPV; wears seatbelt; wears helmet cycling"
    ],
    [
      "Advance Directive",
      "None — not discussed"
    ]
  ],
  "meta": {
    "caseId": "aortic-injury",
    "diagnosis": "Blunt Traumatic Aortic Injury",
    "acuity": 1,
    "presentation": "Trauma",
    "category": "trauma"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus appears anxious and uncomfortable, frequently shifting position and grimacing. Despite trying to downplay his symptoms initially, he becomes more forthcoming when pressed about details, clearly in significant distress from chest and back pain following his motor vehicle accident.",
    "interviewQuestions": [
      "Can you tell me exactly what happened in the accident?",
      "Where specifically is your pain located?",
      "How would you rate your pain on a scale of 1-10?",
      "Can you describe the quality of your chest pain?",
      "Does the pain radiate anywhere else?",
      "What makes the pain better or worse?",
      "Are you having any trouble breathing or shortness of breath?",
      "Have you noticed any numbness or weakness in your legs?",
      "Are you experiencing any nausea, vomiting, or dizziness?",
      "Have you had any similar chest pain before this accident?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Have you lost consciousness at any point today?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble focusing because of this pain in my chest and back.",
      "onset": "The pain started immediately after my truck was rear-ended by a semi at high speed about 2 hours ago. I was thrown forward against my seatbelt pretty hard.",
      "character": "It's a sharp, tearing pain in my chest that feels like something is ripping inside. The back pain is more of a constant ache between my shoulder blades.",
      "location": "The worst pain is in the center of my chest, and I have significant pain between my shoulder blades in my back. Sometimes I feel it in my left arm too.",
      "severity": "The chest pain is easily a 8 out of 10, and it's making it hard for me to take deep breaths. The back pain is about a 6 or 7.",
      "aggravating": "Any movement makes it worse, especially trying to sit up or take a deep breath. Even talking makes the chest pain sharper.",
      "relieving": "Nothing really helps. I tried changing positions but that just made it worse. Even staying completely still, the pain is still there.",
      "associated": "I feel short of breath and a little dizzy when I try to stand. My heart feels like it's racing, and I'm sweating more than usual.",
      "denies": "I haven't passed out, no nausea or vomiting, no numbness in my legs, and I haven't coughed up any blood.",
      "history": "Never had chest pain like this before. I'm usually very healthy and active with no heart problems or injuries.",
      "medications": "Cetirizine 10mg daily; Ibuprofen 400mg PRN",
      "allergies": "NKDA",
      "family": "My dad has high blood pressure and my grandfather had a heart attack, but I've never had any heart problems myself.",
      "social": "I work in construction management, so I'm usually pretty physical. I'm married, don't smoke, and only drink 2-3 beers a week socially. No drugs."
    },
    "examManeuvers": [
      "Blood pressure in both arms",
      "Pulse quality in upper and lower extremities",
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Chest wall inspection and palpation",
      "Back inspection for external trauma",
      "Neurological assessment of lower extremities",
      "Abdominal examination",
      "Assessment for pulse deficits",
      "Evaluation for signs of shock"
    ],
    "examFindings": {
      "Blood pressure in both arms": "Right arm 95/60, Left arm 110/70 - significant differential between arms",
      "Pulse quality in upper and lower extremities": "Weak radial pulses bilaterally, diminished femoral pulses, delayed capillary refill",
      "Cardiac auscultation": "Tachycardic at 110 bpm, new harsh systolic murmur heard best at left sternal border",
      "Pulmonary auscultation": "Decreased breath sounds at left base, otherwise clear bilaterally",
      "Chest wall inspection and palpation": "Seat belt sign across chest, no obvious deformity, tenderness over sternum",
      "Back inspection for external trauma": "Bruising and tenderness over thoracic spine region, no obvious deformity",
      "Neurological assessment of lower extremities": "Normal sensation and motor function in both legs",
      "Abdominal examination": "Soft, non-tender, no masses or organomegaly",
      "Assessment for pulse deficits": "Pulse deficit between upper and lower extremities noted",
      "Evaluation for signs of shock": "Mild tachycardia, cool extremities, delayed capillary refill suggesting early shock"
    },
    "ddxTargets": [
      "Blunt Traumatic Aortic Injury (correct diagnosis)",
      "Myocardial contusion",
      "Hemothorax/pneumothorax",
      "Aortic dissection",
      "Cardiac tamponade",
      "Pulmonary contusion",
      "Rib fractures with pneumothorax"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on more common chest pain causes like myocardial contusion or rib fractures, missing the subtle signs of aortic injury such as pulse differentials",
      "prematureClosure": "May quickly diagnose musculoskeletal chest pain from seatbelt trauma without recognizing the constellation of findings suggesting major vascular injury",
      "availabilityBias": "Tendency to think of more commonly seen trauma presentations rather than considering rare but life-threatening aortic injury which requires immediate surgical intervention"
    },
    "coachPrompts": {
      "phase2": "This is a trauma patient with chest pain - what are your immediate priorities in assessment? Think about the mechanism of injury and what life-threatening conditions you need to rule out first. What specific physical exam findings would help you differentiate between the various causes of traumatic chest pain?",
      "phase5": "You've identified some concerning findings including pulse differentials and a new murmur in a trauma patient. How do these findings fit together? What does the blood pressure difference between arms tell you, and what imaging would you want next? Consider the mechanism of high-speed deceleration injury.",
      "finalDebrief": "Blunt traumatic aortic injury is a classic result of rapid deceleration trauma. The key clues were the mechanism, pulse differentials between arms, new murmur, and early shock signs. This case highlights why systematic evaluation of pulses and blood pressures in both arms is crucial in major trauma. What made this challenging was the initial presentation could mimic more common conditions, but the constellation of vascular findings pointed to this life-threatening diagnosis requiring immediate surgical consultation."
    }
  }
};
