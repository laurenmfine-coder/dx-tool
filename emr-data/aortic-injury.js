
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
    "pharmacy": "CVS Pharmacy \u2014 2201 S University Dr, Riverside, FL",
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
      "problem": "Blunt traumatic aortic injury \u2014 Grade II intimal tear",
      "icd": "S35.00XA",
      "onset": "2024",
      "status": "Active",
      "notes": "Kevin Park, 34M \u2014 high-speed MVA, unrestrained. CXR: widened mediastinum, left apical cap. CT angiography: intimal tear at aortic isthmus (ligamentum arteriosum). Hemodynamically stable."
    },
    {
      "problem": "Associated injuries \u2014 polytrauma screen required",
      "icd": "S35.00XA",
      "onset": "2024",
      "status": "Active",
      "notes": "Blunt aortic injury rarely occurs in isolation. Concomitant injuries: rib fractures, pulmonary contusion, pneumothorax, cardiac contusion (ECG, troponin). 90% of blunt aortic injuries occur at the isthmus."
    },
    {
      "problem": "Hemodynamic stability \u2014 grade determines urgency",
      "icd": "S35.00XA",
      "onset": "2024",
      "status": "Active",
      "notes": "Grade I = intimal tear (medical management). Grade II = intimal tear with hematoma. Grade III = partial tear (pseudoaneurysm). Grade IV = rupture (emergent)."
    }
  ],
  "medications": [
    {
      "name": "Esmolol IV \u2014 HR <60, SBP <120",
      "sig": "Anti-impulse therapy reduces dP/dt and wall stress to prevent propagation. Same principle as aortic dissection. Strict HR and BP targets until definitive repair or observation confirms stability.",
      "prescriber": "Trauma Surgery/Vascular",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 ICU"
    },
    {
      "name": "TEVAR \u2014 thoracic endovascular aortic repair (planned)",
      "sig": "Grade II-III injuries that are stable can be repaired semi-urgently (within 24-72h). TEVAR has replaced open repair for most blunt aortic injuries.",
      "prescriber": "Vascular Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Scheduled \u2014 24h"
    },
    {
      "name": "Pain management + ICU monitoring",
      "sig": "ICU admission with arterial line for continuous BP monitoring. Serial CT angiography if conservative management chosen for Grade I.",
      "prescriber": "Trauma Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 ICU"
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
      "temp": "98.4\u00b0F",
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
      "temp": "98.6\u00b0F",
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
      "temp": "98.2\u00b0F",
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
      "assessment": "1. Annual wellness exam \u2014 healthy male, no acute issues",
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
      "assessment": "1. Vitamin D deficiency \u2014 resolved, levels normalized",
      "plan": "1. Discontinue high-dose supplementation\n2. OTC vitamin D3 2,000 IU daily for maintenance\n3. Recheck level at next annual"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Blunt Aortic Injury",
      "results": [
        {
          "test": "Hemoglobin",
          "value": "11.2",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": "L"
        },
        {
          "test": "Troponin I",
          "value": "0.18",
          "unit": "ng/mL",
          "ref": "<0.04 (cardiac contusion)",
          "flag": "H"
        },
        {
          "test": "CXR findings",
          "value": "Widened mediastinum >8cm, left apical pleural cap",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "BP right arm",
          "value": "138/82",
          "unit": "mmHg",
          "ref": "",
          "flag": ""
        },
        {
          "test": "BP left arm",
          "value": "104/68",
          "unit": "mmHg",
          "ref": "Differential >20mmHg = aortic injury",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Angiogram Chest",
      "findings": "Intimal tear at aortic isthmus (distal to left subclavian artery). Small periaortic hematoma. No free extravasation. Mediastinal hematoma. No other aortic injury. Left pulmonary contusion.",
      "impression": "Grade II blunt traumatic aortic injury at aortic isthmus. Anti-impulse therapy and semi-urgent TEVAR."
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
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B (Recombivax)",
      "date": "2009",
      "site": "Left deltoid IM",
      "lot": "\u2014",
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
      "Social \u2014 2-3 beers/week"
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
      "None \u2014 not discussed"
    ]
  ],
  "meta": {
    "caseId": "aortic-injury",
    "diagnosis": "Blunt Traumatic Aortic Injury (Grade II \u2014 Intimal Tear)",
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
      "Blunt traumatic aortic injury \u2014 Grade II (correct)",
      "Traumatic aortic rupture (Grade IV) \u2014 free extravasation on CT; hemodynamically unstable; emergent repair",
      "Mediastinal hematoma without aortic injury \u2014 CXR widening from venous bleeding; CT distinguishes",
      "Cardiac contusion \u2014 troponin elevation here is from cardiac contusion; coexists with aortic injury",
      "Aortic dissection (spontaneous) \u2014 mechanism; age; CT distinguishes intimal tear vs dissection flap"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on more common chest pain causes like myocardial contusion or rib fractures, missing the subtle signs of aortic injury such as pulse differentials",
      "prematureClosure": "May quickly diagnose musculoskeletal chest pain from seatbelt trauma without recognizing the constellation of findings suggesting major vascular injury",
      "availabilityBias": "Tendency to think of more commonly seen trauma presentations rather than considering rare but life-threatening aortic injury which requires immediate surgical intervention"
    },
    "coachPrompts": {
      "phase2": "This is a trauma patient with chest pain - what are your immediate priorities in assessment? Think about the mechanism of injury and what life-threatening conditions you need to rule out first. What specific physical exam findings would help you differentiate between the various causes of traumatic chest pain?",
      "phase5": "You've identified some concerning findings including pulse differentials and a new murmur in a trauma patient. How do these findings fit together? What does the blood pressure difference between arms tell you, and what imaging would you want next? Consider the mechanism of high-speed deceleration injury.",
      "finalDebrief": "Blunt traumatic aortic injury is a classic result of rapid deceleration trauma. The key clues were the mechanism, pulse differentials between arms, new murmur, and early shock signs. This case highlights why systematic evaluation of pulses and blood pressures in both arms is crucial in major trauma. What made this challenging was the initial presentation could mimic more common conditions, but the constellation of vascular findings pointed to this life-threatening diagnosis requiring immediate surgical consultation.",
      "final": "Diagnosis: blunt traumatic aortic injury. Key learning: (1) Mechanism: rapid deceleration injury causes shear stress at fixed aortic points \u2014 the isthmus (ligamentum arteriosum, 90% of cases), the aortic root, or the diaphragmatic hiatus. Classic scenario: high-speed MVA, unrestrained driver. (2) CXR signs: widened mediastinum (>8cm at aortic knob) is the most sensitive finding. Others: left apical pleural cap, obliteration of aortic knob, tracheal deviation to right, left hemothorax. A normal CXR does NOT exclude blunt aortic injury in a high-mechanism trauma. (3) BP differential: upper extremity differential >20mmHg (right > left) in blunt chest trauma = aortic injury until proven otherwise. The isthmus injury can partially occlude the left subclavian outflow. (4) Grading and management: Grade I (intimal tear) = anti-impulse therapy \u00b1 observation. Grade II (intimal + hematoma) = semi-urgent TEVAR. Grade III (pseudoaneurysm) = urgent TEVAR. Grade IV (free rupture) = emergent repair. (5) Anti-impulse therapy (esmolol): same as aortic dissection \u2014 reduce HR <60 and SBP <120 to minimize wall stress until definitive repair."
    }
  }
};
