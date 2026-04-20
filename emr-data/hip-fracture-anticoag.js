
window.EMR_DATA = {
  "patient": {
    "name": "Margaret Sullivan",
    "patientHPI": "I fell down at home this morning and now I can't get up because my right hip and groin area hurt so badly. I was just walking to the kitchen when I lost my balance, and now every time I try to move that leg the pain shoots through me.",
    "dob": "06/15/1944",
    "age": "82",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-628815",
    "language": "English",
    "race": "Black/African American",
    "phone": "(317) 555-2789",
    "email": "margaret.sullivan@email.com",
    "address": "4072 Magnolia Blvd, Kansas City, MO 64101",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Walmart Pharmacy \u2014 Pines Blvd",
    "emergencyContact": {
      "name": "Henry Sanchez",
      "phone": "(630) 555-4920",
      "relationship": "Partner"
    },
    "chiefComplaint": "I fell and I can't get up Right hip and groin",
    "diagnosis": "Hip Fracture on Anticoagulation"
  },
  "problems": [
    {
      "problem": "Hip fracture \u2014 on warfarin for AFib, INR 3.2",
      "icd": "S72.001A",
      "onset": "2024",
      "status": "Active",
      "notes": "Gloria Chen, 79F \u2014 fell on right hip, INR 3.2. OR team wants INR <1.5 before ORIF."
    },
    {
      "problem": "Warfarin reversal \u2014 4-factor PCC vs vitamin K",
      "icd": "Z79.01",
      "onset": "2024",
      "status": "Active",
      "notes": "4-factor PCC reverses warfarin in minutes. Vitamin K acts over 12-24h. Urgent surgery needs PCC."
    },
    {
      "problem": "AFib \u2014 CHA2DS2-VASc 5, anticoagulation restart timing",
      "icd": "I48.19",
      "onset": "2020",
      "status": "Active",
      "notes": "High stroke risk \u2014 restart anticoagulation 24-72h post-op depending on surgical bleeding risk."
    }
  ],
  "medications": [
    {
      "name": "4-factor PCC (Kcentra) 25 units/kg IV \u2014 urgent warfarin reversal",
      "sig": "Reverses INR to <1.5 within 30 min. Give with vitamin K 10mg IV to sustain reversal.",
      "prescriber": "Hematology/Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Vitamin K 10mg IV slow infusion \u2014 sustained reversal",
      "sig": "Given alongside PCC \u2014 prevents INR re-elevation when PCC wears off (6-8h). IV preferred for faster onset than PO.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Enoxaparin 40mg SQ daily \u2014 restart 24-72h post-op",
      "sig": "Bridge back to warfarin after ORIF. Timing based on surgical hemostasis \u2014 discuss with surgeon.",
      "prescriber": "Medicine/Hematology",
      "start": "2024",
      "refills": 0,
      "status": "Hold \u2014 restart post-op"
    },
    {
      "name": "Warfarin \u2014 resume 5mg daily at post-op day 1-2",
      "sig": "Resume prior dose. INR check at 3 days. Goal INR 2-3 for AFib.",
      "prescriber": "Medicine",
      "start": "2020",
      "refills": 5,
      "status": "Hold \u2014 resume post-op"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "reaction": "Nausea",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "10:05",
      "bp": "108/62",
      "hr": "92",
      "rr": "18",
      "temp": "36.2\u00b0C",
      "spo2": "94%",
      "pain": "/10",
      "bmi": "25",
      "weight": "100 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I fell and I can't get up Right hip and groin",
      "hpi": "Margaret Sullivan is a 82-year-old female presenting with i fell and i can't get up right hip and groin. Past medical history includes Atrial fibrillation, Osteoporosis, Mild dementia, Hypertension, Chronic kidney disease stage 3. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Hip Fracture on Anticoagulation \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Pre-Op Reversal Panel",
      "results": [
        {
          "test": "INR",
          "value": "3.2",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": "H"
        },
        {
          "test": "PT",
          "value": "34",
          "unit": "seconds",
          "ref": "11-13.5",
          "flag": "H"
        },
        {
          "test": "Hemoglobin",
          "value": "10.2",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "1.2",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": ""
        },
        {
          "test": "Platelets",
          "value": "188",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "Hip X-ray Right",
      "indication": "Fall, hip pain",
      "findings": "Right femoral neck fracture \u2014 displaced, Garden type III.",
      "impression": "Displaced femoral neck fracture. Requires ORIF or hemiarthroplasty. Warfarin reversal required pre-operatively."
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
    "Mother: hip fracture at 80",
    "Sister: osteoporosis"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Glass of wine with dinner occasionally"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired school principal"
    ],
    [
      "Living",
      "Lives alone with home aide 4 hours daily. Independent with ADLs at baseline. No fall in past year."
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Margaret appears anxious and in significant discomfort, frequently wincing when attempting to shift position. She is cooperative and forthcoming with information, though occasionally needs questions repeated due to her mild dementia. She expresses frustration about losing her independence and worry about being a burden.",
    "interviewQuestions": [
      "Can you tell me exactly how you fell this morning?",
      "What were you doing just before you lost your balance?",
      "Did you feel dizzy, lightheaded, or have any other symptoms before falling?",
      "Can you describe the pain in your hip and groin?",
      "On a scale of 1-10, how would you rate your pain?",
      "Does the pain get worse when you try to move your leg or bear weight?",
      "Have you been able to walk at all since the fall?",
      "Did you hit your head or lose consciousness when you fell?",
      "Have you had any falls in the past year?",
      "Have you noticed any changes in your balance or walking recently?",
      "Are you having any numbness or tingling in your leg?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble concentrating with all this pain.",
      "onset": "It happened this morning around 8 AM. I was walking from my bedroom to the kitchen for breakfast when I just lost my balance and went down hard on my right side.",
      "character": "It's a sharp, shooting pain that goes right through my hip and down into my groin. It feels like something is really wrong in there.",
      "location": "The pain is mainly in my right hip area and groin, but it also hurts in my upper thigh.",
      "severity": "It's easily a 9 out of 10 when I try to move. Even lying still it's about a 6 or 7. I've never had pain this bad.",
      "aggravating": "Any movement makes it much worse, especially trying to lift my leg or roll over. Even the slightest movement sends shooting pain through me.",
      "relieving": "Nothing really helps. I've been trying to stay as still as possible, but it still throbs constantly.",
      "associated": "I feel a bit nauseous from the pain, and I'm worried I might have hurt something else when I fell.",
      "denies": "I didn't hit my head or black out. No chest pain, no shortness of breath other than from the pain.",
      "history": "I haven't fallen in over a year. I've been pretty steady on my feet until this morning.",
      "medications": "Warfarin; Alendronate; Donepezil; Amlodipine; Metoprolol",
      "allergies": "Codeine",
      "family": "My mother broke her hip when she was about my age, and my sister has osteoporosis too. It runs in our family.",
      "social": "I'm a retired school principal. I live alone but have a home aide who comes for 4 hours daily. I don't smoke, never have. I have a glass of wine with dinner sometimes but that's all."
    },
    "examManeuvers": [
      "Inspection of right hip and leg positioning",
      "Palpation of right hip and greater trochanter",
      "Assessment of right leg length",
      "Evaluation of external rotation of right leg",
      "Passive range of motion of right hip",
      "Log roll test of right hip",
      "Neurovascular assessment of right lower extremity",
      "Palpation of femoral pulse",
      "Assessment of ability to bear weight"
    ],
    "examFindings": {
      "Inspection of right hip and leg positioning": "Right leg appears shortened and externally rotated compared to left leg",
      "Palpation of right hip and greater trochanter": "Severe tenderness over right greater trochanter and lateral hip",
      "Assessment of right leg length": "Right leg appears 2-3 cm shorter than left leg",
      "Evaluation of external rotation of right leg": "Right leg held in external rotation at approximately 45 degrees",
      "Passive range of motion of right hip": "Unable to perform due to severe pain with minimal movement",
      "Log roll test of right hip": "Severe pain with gentle log rolling of right hip",
      "Neurovascular assessment of right lower extremity": "Sensation intact, dorsalis pedis and posterior tibial pulses present",
      "Palpation of femoral pulse": "Strong femoral pulse palpable bilaterally",
      "Assessment of ability to bear weight": "Unable to bear weight on right leg due to severe pain"
    },
    "ddxTargets": [
      "Hip fracture on warfarin \u2014 PCC reversal required (correct)",
      "Hip contusion \u2014 X-ray rules out",
      "Pathologic fracture from metastasis \u2014 no prior malignancy history",
      "Trochanteric bursitis \u2014 X-ray positive for fracture",
      "Avascular necrosis \u2014 acute onset after fall; prior AVN possible but fracture is primary issue",
      "Periprosthetic fracture \u2014 no prior hip prosthesis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'typical' elderly fall presentation and missing other causes of altered mental status or medication effects that contributed to fall",
      "prematureClosure": "Risk of assuming hip fracture without considering pelvic fractures, hip dislocation, or pathologic fractures given her multiple comorbidities",
      "availabilityBias": "Recent cases of hip fractures in elderly patients may bias toward this diagnosis without proper systematic evaluation"
    },
    "coachPrompts": {
      "phase2": "You've identified an elderly patient with a fall and hip pain. Before you interview her, what key historical elements would help you differentiate between the various causes of hip pain after trauma? Consider her age, medications, and risk factors.",
      "phase5": "Your history and physical findings strongly suggest a hip fracture. What specific examination findings support this diagnosis? How do her risk factors and medications influence your management considerations, particularly regarding anticoagulation?",
      "finalDebrief": "This case demonstrates the classic presentation of hip fracture in an elderly patient with osteoporosis. The shortened, externally rotated leg with inability to bear weight after a mechanical fall is pathognomonic. How did her warfarin therapy and renal disease influence your diagnostic and treatment approach?",
      "final": "Diagnosis: hip fracture requiring urgent warfarin reversal. Key learning: (1) INR reversal hierarchy for urgent surgery: 4-factor PCC (Kcentra) is preferred \u2014 reverses INR to \u22641.5 in ~30 minutes by replacing factors II, VII, IX, X. FFP requires large volumes (4+ units = 1L) and takes 1-2h. PCC is faster, smaller volume, lower infectious risk. ALWAYS give with vitamin K to sustain reversal after PCC wears off at ~6-8h. (2) Surgical timing for hip fracture: mortality increases with delay >48h, but operating with INR >1.5 increases bleeding and transfusion. PCC gets to OR faster than FFP \u2014 target INR <1.5 pre-op. (3) Post-op anticoagulation restart: AFib with CHA2DS2-VASc 5 has high stroke risk \u2014 restart anticoagulation as soon as surgically safe. Standard: 24h for high stroke risk patients with low bleeding risk, 48-72h if higher bleeding concern. Discuss with surgeon. (4) DOAC reversal: dabigatran \u2192 idarucizumab (Praxbind). Factor Xa inhibitors (apixaban, rivaroxaban) \u2192 andexanet alfa (Andexxa) or 4-factor PCC as alternative. (5) Bridging decision: AFib + warfarin: CHA2DS2-VASc \u22655 = high stroke risk, short interruption (hip fracture \u2192 restart within 24-72h) does NOT require bridging per current evidence \u2014 bridging increases bleeding without stroke benefit in most AFib patients."
    }
  },
  "meta": {
    "diagnosis": "Hip Fracture on Anticoagulation \u2014 Warfarin Reversal, Surgical Timing, Bridging Decision",
    "caseId": "hip-fracture-anticoag"
  }
};
