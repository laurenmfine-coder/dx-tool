
window.EMR_DATA = {
  "patient": {
    "name": "Harold Jennings",
    "patientHPI": "I was sitting in my chair watching TV when suddenly my right leg went ice cold and started hurting something fierce. It happened so fast - one minute I was fine, the next minute I couldn't feel my toes and my leg looked white as a sheet.",
    "dob": "12/18/1951",
    "age": "75",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-811307",
    "language": "English",
    "race": "American Indian",
    "phone": "(702) 555-8242",
    "email": "harold.jennings@email.com",
    "address": "3435 Spruce St, Richmond, VA 23226",
    "insurance": "Cigna",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Publix Pharmacy \u2014 Pines Blvd",
    "emergencyContact": {
      "name": "Sarah Bailey",
      "phone": "(803) 555-1845",
      "relationship": "Sibling"
    },
    "chiefComplaint": "My right leg went cold and painful suddenly Right lower leg and foot \u2014 sudden onset",
    "diagnosis": "Acute Limb Ischemia (Embolic)"
  },
  "problems": [
    {
      "problem": "Acute limb ischemia \u2014 right lower extremity",
      "icd": "I74.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Sudden pain, pallor, paresthesias, pulselessness right foot \u2014 3 hours duration, surgical window open"
    },
    {
      "problem": "Atrial fibrillation \u2014 source of embolus",
      "icd": "I48.0",
      "onset": "2022",
      "status": "Active",
      "notes": "Known AFib \u2014 not on anticoagulation (patient non-compliant). Cardioembolism likely source."
    },
    {
      "problem": "Compartment syndrome risk \u2014 reperfusion injury",
      "icd": "M79.A01",
      "onset": "2024",
      "status": "Active",
      "notes": "Post-revascularization: compartment pressures must be monitored \u2014 fasciotomy may be required"
    }
  ],
  "medications": [
    {
      "name": "Heparin 5000 units IV bolus THEN infusion",
      "sig": "Anticoagulation to prevent propagation \u2014 immediate",
      "prescriber": "Vascular Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Pain management \u2014 morphine 4mg IV PRN",
      "sig": "IV PRN \u2014 ischemic pain is severe",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Heparin",
      "reaction": "Thrombocytopenia (HIT) \u2014 CRITICAL: cannot use unfractionated heparin",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "08:30",
      "bp": "148/88",
      "hr": "82 (irregularly irregular)",
      "rr": "16",
      "temp": "36.8\u00b0C",
      "spo2": "97%",
      "pain": "8/10",
      "bmi": "28",
      "weight": "84 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "My right leg went cold and painful suddenly Right lower leg and foot \u2014 sudden onset",
      "hpi": "Harold Jennings is a 75-year-old male presenting with my right leg went cold and painful suddenly right lower leg and foot \u2014 sudden onset. Past medical history includes Atrial fibrillation, Congestive heart failure, Prior stroke, Hypertension, Type 2 Diabetes. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Limb Ischemia (Embolic) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "ALI Workup",
      "results": [
        {
          "test": "Hemoglobin",
          "value": "13.2",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "1.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        },
        {
          "test": "Potassium",
          "value": "4.8",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        },
        {
          "test": "CK",
          "value": "2,200",
          "unit": "U/L",
          "ref": "22-198",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "3.4",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "INR",
          "value": "1.1",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Angiography Lower Extremity + Duplex Ultrasound",
      "indication": "Acute limb ischemia \u2014 localize occlusion, assess outflow",
      "findings": "CTA: Abrupt occlusion at distal popliteal artery. No calcified plaque at occlusion site (consistent with embolus, not thrombosis). Tibial arteries reconstitute below with poor signal. Left popliteal and tibials: patent.",
      "impression": "Acute right popliteal embolism \u2014 Rutherford Class IIb (threatened, immediately threatened). Emergent thromboembolectomy or catheter-directed thrombolysis required. Surgical window open at 3 hours."
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
    "Father: peripheral artery disease",
    "Brother: MI at 62"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "40 pack-years, quit 10 years ago"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired truck driver"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Harold appears anxious and distressed, frequently looking down at his affected leg with concern. He is very forthcoming with information and eager to communicate the severity of his symptoms, speaking with urgency about the sudden nature of his leg pain and color change.",
    "interviewQuestions": [
      "When exactly did the leg pain and coldness start?",
      "Can you describe what the pain feels like?",
      "Has the appearance of your leg changed since this started?",
      "On a scale of 1-10, how would you rate your pain?",
      "Can you move your toes and ankle normally?",
      "Do you have any numbness or tingling in the leg?",
      "Have you had any chest pain or shortness of breath?",
      "Have you experienced anything like this before?",
      "Are you taking your blood thinner as prescribed?",
      "When was your last INR check?",
      "Have you had any recent procedures or hospitalizations?",
      "Do you have any family history of blood clots or heart problems?",
      "Tell me about your smoking history"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble concentrating with this pain in my leg.",
      "onset": "It happened suddenly about 3 hours ago while I was sitting watching TV. One minute I was fine, the next my leg felt like ice and started hurting terribly.",
      "character": "It's a severe, constant aching pain, like someone is squeezing my leg in a vise. The coldness is unlike anything I've felt before.",
      "location": "The pain is in my entire right lower leg from below the knee down to my toes. My foot is the worst part.",
      "severity": "This is easily a 9 out of 10. I can barely think about anything else, and I'm afraid to move because it might make it worse.",
      "aggravating": "Any movement makes it worse, even trying to wiggle my toes. The pain gets worse when I try to stand.",
      "relieving": "Nothing helps. I tried elevating it, rubbing it gently, but nothing makes any difference.",
      "associated": "My leg looks pale and white, almost like a corpse. I can barely feel my toes, and they're getting harder to move.",
      "denies": "No chest pain, no shortness of breath, no back pain, no recent trauma to the leg.",
      "history": "Never had anything like this before. My legs have been fine, though I know I have some circulation problems.",
      "medications": "Warfarin; Metoprolol; Furosemide; Lisinopril; Metformin",
      "allergies": "Heparin",
      "family": "My father had bad circulation problems in his legs, and my brother had a heart attack when he was 62.",
      "social": "I'm a retired truck driver, smoked for many years but quit 10 years ago - probably 40 pack-years total. I rarely drink alcohol and live with my wife."
    },
    "examManeuvers": [
      "Inspect leg color and appearance",
      "Palpate dorsalis pedis pulse",
      "Palpate posterior tibial pulse",
      "Assess capillary refill in toes",
      "Test sensation in foot and lower leg",
      "Assess motor function of foot and ankle",
      "Compare temperature between legs",
      "Auscultate heart rhythm",
      "Examine contralateral leg pulses",
      "Assess leg hair distribution and skin changes"
    ],
    "examFindings": {
      "Inspect leg color and appearance": "Right lower leg and foot are markedly pale and mottled compared to left leg",
      "Palpate dorsalis pedis pulse": "Absent dorsalis pedis pulse on right foot",
      "Palpate posterior tibial pulse": "Absent posterior tibial pulse on right foot",
      "Assess capillary refill in toes": "Capillary refill >5 seconds in right toes",
      "Test sensation in foot and lower leg": "Decreased sensation to light touch and pinprick in right foot",
      "Assess motor function of foot and ankle": "Weakened dorsiflexion and plantarflexion of right foot",
      "Compare temperature between legs": "Right leg noticeably cooler than left leg to palpation",
      "Auscultate heart rhythm": "Irregularly irregular rhythm consistent with atrial fibrillation",
      "Examine contralateral leg pulses": "Left dorsalis pedis and posterior tibial pulses present but diminished",
      "Assess leg hair distribution and skin changes": "Bilateral lower leg hair loss and shiny, atrophic skin changes"
    },
    "ddxTargets": [
      "Acute limb ischemia \u2014 popliteal embolism, thromboembolectomy (correct)",
      "Acute DVT \u2014 venous occlusion causes swelling/pain, not pallor and pulselessness",
      "Leriche syndrome \u2014 chronic, bilateral, different onset",
      "Peripheral artery disease exacerbation \u2014 no acute occlusion history",
      "Compartment syndrome \u2014 post-injury, not spontaneous with absent pulse",
      "Raynaud's phenomenon \u2014 bilateral, vasospastic, warm rewarming"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's known PAD family history and assuming chronic rather than acute arterial insufficiency",
      "prematureClosure": "Risk of stopping at DVT given leg pain and not considering arterial causes, especially with warfarin use",
      "availabilityBias": "May focus on more common diagnoses like DVT rather than considering acute arterial embolism from known atrial fibrillation"
    },
    "coachPrompts": {
      "phase2": "This patient has several cardiovascular risk factors and comorbidities. What specific aspects of his past medical history might be most relevant to acute leg ischemia? How might his current medications factor into your diagnostic thinking?",
      "phase5": "Now that you've completed your history and physical, what do the absent pulses and the '6 P's' findings tell you about the vascular status? How does the acuity and his atrial fibrillation history inform your leading diagnosis?",
      "finalDebrief": "This case illustrates how acute arterial embolism from atrial fibrillation can present dramatically. How did your differential evolve from considering venous vs arterial pathology? What key historical and physical exam features distinguished embolic from thrombotic arterial occlusion?",
      "final": "Diagnosis: acute limb ischemia \u2014 popliteal embolism. Key learning: (1) 6 Ps: Pain, Pallor, Pulselessness, Paresthesias, Paralysis, Poikilothermia (cold). Paralysis = late finding indicating motor nerve ischemia \u2014 imminent irreversible damage. Paresthesias alone = urgent, hours remain. (2) Rutherford classification: Class I = viable (no sensory loss). Class IIa = marginally threatened (paresthesias, no paralysis). Class IIb = immediately threatened (sensory + weakness). Class III = irreversible (fixed mottling, muscle rigidity). Class IIb here = emergent intervention. (3) Embolism vs thrombosis: embolism = sudden onset, no prior claudication, contralateral pulses normal, often AFib source. Thrombosis = prior PAD symptoms, bilateral disease, gradual onset. Different: thrombosis may need bypass; embolism treated by Fogarty catheter thromboembolectomy. (4) Heparin immediately: prevents propagation while preparing OR. Does not lyse existing clot. (5) Reperfusion syndrome: after 4-6h ischemia, revascularization releases myoglobin, K+, lactate \u2192 rhabdomyolysis, hyperkalemia, acidosis. Post-op: aggressive hydration, monitor K+, consider prophylactic fasciotomy if ischemia >6h."
    }
  },
  "meta": {
    "diagnosis": "Acute Limb Ischemia \u2014 6 Ps, Embolism to Popliteal Artery, 4-Hour Window",
    "caseId": "acute-limb-ischemia"
  }
};
