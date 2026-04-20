
window.EMR_DATA = {
  "patient": {
    "name": "Gloria Menendez",
    "patientHPI": "Doctor, I woke up this morning and my right leg felt completely different - it's ice cold and the pain is unbearable. I can barely feel my toes and the leg looks almost white compared to my other one. I've had leg pain before when I walk, but this came on suddenly while I was sleeping.",
    "dob": "09/14/1952",
    "age": 72,
    "sex": "Female",
    "mrn": "RDX-2025-46712",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + Humana Medicare Advantage",
    "pcp": "Dr. Eduardo Reyes, MD",
    "pharmacy": "CVS Pharmacy \u2014 3200 Broward Blvd, Fort Lauderdale, FL",
    "language": "English, Spanish",
    "race": "Hispanic",
    "address": "1170 Pine Ave, Memphis, TN 38103",
    "phone": "(954) 555-8165",
    "email": "g.menendez52@email.com",
    "emergencyContact": {
      "name": "Carlos Menendez (Son)",
      "phone": "(954) 555-8180"
    },
    "chiefComplaint": "Sudden severe leg pain"
  },
  "problems": [
    {
      "problem": "Acute limb ischemia \u2014 left lower extremity, Rutherford IIb",
      "icd": "I74.3",
      "onset": "2024",
      "status": "Active",
      "notes": "George Martinez, 72M \u2014 known AFib, sudden onset cold pulseless left leg 3 hours ago. Pain, pallor, paresthesias, paralysis. Embolus from AF most likely source."
    },
    {
      "problem": "Atrial fibrillation \u2014 source of embolus, not anticoagulated",
      "icd": "I48.0",
      "onset": "2021",
      "status": "Active",
      "notes": "CHA2DS2-VASc 4. On aspirin only \u2014 subtherapeutic. Had refused warfarin due to fall risk concern."
    },
    {
      "problem": "Paralysis onset \u2014 indicates advanced ischemia",
      "icd": "I74.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Motor deficit indicates muscle ischemia progressing. Rutherford IIb = threatened, requires revascularization within 4-6 hours."
    }
  ],
  "medications": [
    {
      "name": "Heparin UFH 100 units/kg IV bolus \u2014 IMMEDIATE",
      "sig": "Prevents propagation of thrombus and distal embolization. Start before imaging if clinical diagnosis is clear.",
      "prescriber": "Vascular Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 STAT"
    },
    {
      "name": "Catheter-directed thrombolysis OR surgical embolectomy",
      "sig": "Rutherford IIb with 3-hour window \u2014 surgical embolectomy preferred for embolic ALI (faster than CDT). CDT for thrombotic ALI without motor deficit. Time is muscle.",
      "prescriber": "Vascular Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Emergent \u2014 OR"
    },
    {
      "name": "Fasciotomy \u2014 anticipate",
      "sig": "Reperfusion injury after revascularization \u2192 compartment syndrome in >30% of ALI cases. Prophylactic fasciotomy at time of revascularization often indicated.",
      "prescriber": "Vascular Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Anticipate"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE Inhibitors (Enalapril)",
      "type": "Drug",
      "reaction": "Angioedema \u2014 lip and tongue swelling",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Aspirin",
      "type": "Drug",
      "reaction": "GI bleeding (documented upper GI bleed 2017)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/20/2025",
      "bp": "134/76",
      "hr": 78,
      "rr": 18,
      "temp": "98.4\u00b0F",
      "spo2": "95%",
      "wt": "152 lbs",
      "ht": "5'3\"",
      "bmi": 26.9,
      "setting": "PCP Office"
    },
    {
      "date": "07/22/2024",
      "bp": "140/82",
      "hr": 82,
      "rr": 16,
      "temp": "98.6\u00b0F",
      "spo2": "95%",
      "wt": "156 lbs",
      "ht": "5'3\"",
      "bmi": 27.6,
      "setting": "PCP Office"
    },
    {
      "date": "01/15/2024",
      "bp": "132/78",
      "hr": 76,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "96%",
      "wt": "154 lbs",
      "ht": "5'3\"",
      "bmi": 27.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Eduardo Reyes, MD",
      "cc": "Chronic disease management: AFib, HFrEF, T2DM, PAD",
      "hpi": "72-year-old female with extensive cardiovascular history presenting for routine follow-up. Reports stable dyspnea on exertion \u2014 NYHA Class II-III; can walk approximately 1 block before SOB. Weight stable. Claudication bilateral calves at 1-2 blocks, improved with rest. INR today 1.4 \u2014 admits to missing warfarin doses due to confusion about dosing schedule. Denies rest pain or foot ulcers. A1c stable at 7.6%. Reports dizziness with standing which she has not mentioned before.",
      "exam": "General: Elderly female, thin habitus, in NAD. CV: Irregularly irregular, rate 78; S3 gallop noted; no murmurs. JVP estimated 8 cm. Lungs: Bibasilar fine crackles. Abdomen: Soft, NT/ND. Extremities: Cool bilateral lower extremities distal to knees; diminished dorsalis pedis pulses bilaterally; trace bilateral ankle edema. Skin: No ulcers or gangrene. Neuro: A&O x3.",
      "assessment": "1. AFib \u2014 rate controlled but subtherapeutic INR (1.4); high stroke/embolic risk\n2. HFrEF \u2014 NYHA II-III; mild volume overload\n3. PAD \u2014 stable claudication; no critical limb ischemia\n4. T2DM \u2014 A1c 7.6%, acceptable\n5. Orthostatic hypotension \u2014 new symptom",
      "plan": "1. Increase warfarin to 6mg daily; recheck INR in 5 days; goal 2.0-3.0\n2. Increase furosemide to 40mg BID for 5 days then reassess; daily weights\n3. Continue PAD management: cilostazol, walking program\n4. Continue metformin and atorvastatin\n5. Orthostatic vitals ordered; consider adjusting carvedilol dose\n6. RTC 2 weeks for INR and volume status"
    },
    {
      "id": "V002",
      "date": "07/22/2024",
      "type": "Specialist",
      "provider": "Dr. Neha Shah, MD (Vascular Surgery)",
      "cc": "PAD follow-up, claudication management",
      "hpi": "72-year-old female with known PAD and bilateral intermittent claudication. ABI 0.72 bilaterally on recent testing. Walking distance approximately 2 blocks. Cilostazol started 2023 with modest improvement. No rest pain. Warm feet. No ulcers.",
      "exam": "Vascular: Bilateral femoral pulses 2+, popliteal 1+, dorsalis pedis and posterior tibial absent bilaterally (Doppler signals present). No bruits. Skin: Shiny, hairless bilateral lower legs. No ulcers.",
      "assessment": "1. PAD, bilateral \u2014 Fontaine stage IIa; stable on medical management",
      "plan": "1. Continue cilostazol 100mg BID\n2. Supervised exercise program\n3. Aggressive cardiovascular risk reduction\n4. Repeat ABI in 1 year\n5. Return sooner for rest pain, non-healing wound, or acute limb symptoms"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "ALI Assessment",
      "results": [
        {
          "test": "ABI (left)",
          "value": "Not measurable \u2014 no Doppler signal",
          "unit": "",
          "ref": "0.9-1.3",
          "flag": "H"
        },
        {
          "test": "Doppler \u2014 left dorsalis pedis",
          "value": "Absent",
          "unit": "",
          "ref": "Present",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "3.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "CK",
          "value": "2400",
          "unit": "U/L",
          "ref": "<200",
          "flag": "H"
        },
        {
          "test": "INR",
          "value": "1.1",
          "unit": "",
          "ref": "Not anticoagulated",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Angiogram \u2014 Lower Extremity",
      "findings": "Abrupt cutoff of left superficial femoral artery at mid-thigh level. No significant atherosclerotic disease in runoff vessels. Embolus-in-transit pattern.",
      "impression": "Acute embolic occlusion left SFA. No significant underlying peripheral arterial disease. Consistent with cardiac source embolism."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD196",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-908",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Prevnar 20 (PCV20)",
      "date": "03/2022",
      "site": "Left deltoid IM",
      "lot": "PV20-098",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "06/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-310",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-467",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: MI at age 60 (deceased at 65)",
    "Mother: Stroke at age 75, T2DM (deceased at 82)",
    "Brother: CAD, CABG at age 64, alive",
    "Sister: T2DM, HTN, alive at 68"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired elementary school teacher"
    ],
    [
      "Marital",
      "Widowed (husband deceased 2019)"
    ],
    [
      "Tobacco",
      "Former \u2014 15 pack-years; quit 2004"
    ],
    [
      "Alcohol",
      "Rare \u2014 occasional glass of wine with family"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 10-15 min daily; limited by claudication and dyspnea"
    ],
    [
      "Housing",
      "Lives alone in condo; son visits daily"
    ],
    [
      "Safety",
      "Denies IPV; fall risk \u2014 uses walker for longer distances"
    ],
    [
      "Advance Directive",
      "Living will on file \u2014 DNR/DNI; HCP designated \u2014 son Carlos"
    ]
  ],
  "meta": {
    "caseId": "acute-embolic-limb-ischemia",
    "diagnosis": "Acute Embolic Limb Ischemia (Rutherford IIb \u2014 Immediately Threatened)",
    "acuity": 2,
    "presentation": "Vascular Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Gloria appears anxious and distressed, frequently shifting position due to severe leg pain. She is cooperative and forthcoming with information, clearly worried about losing her leg. Her distress is evident as she describes the sudden onset and severity of symptoms.",
    "interviewQuestions": [
      "When exactly did you first notice the pain and coldness in your right leg?",
      "Can you describe the quality of the pain you're experiencing?",
      "Where exactly is the pain located and does it travel anywhere?",
      "On a scale of 1-10, how would you rate your pain right now?",
      "What makes the pain worse or better?",
      "Have you noticed any changes in sensation or ability to move your leg?",
      "Have you had any similar episodes before?",
      "Are you experiencing any chest pain, shortness of breath, or palpitations?",
      "Have you missed any doses of your medications recently?",
      "When was your last INR check?",
      "Have you had any recent procedures or prolonged immobility?",
      "Are you experiencing any weakness or numbness elsewhere?",
      "Have you noticed any color changes in your leg?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble focusing because of this terrible pain in my leg.",
      "onset": "I woke up around 6 AM with this excruciating pain. It came on suddenly while I was sleeping - went to bed fine last night and woke up to this nightmare.",
      "character": "It's like someone is crushing my leg in a vice - constant, severe cramping pain that just won't let up. It's different from my usual walking pain.",
      "location": "The pain starts in my right calf and goes all the way down to my toes. My whole lower leg feels like it's being squeezed.",
      "severity": "This is easily a 9 out of 10. I can barely think straight. I can't put any weight on it and even lying still is agony.",
      "aggravating": "Any movement makes it worse, even trying to wiggle my toes. The pain is constant but gets worse when I try to move.",
      "relieving": "Nothing helps. I tried elevating it, tried putting it down, took some Tylenol - nothing touches this pain.",
      "associated": "My leg feels ice cold and numb, almost like it's not part of my body. I can barely feel my toes and they look almost blue-white.",
      "denies": "No chest pain right now, no shortness of breath more than usual. No fever or chills. The other leg feels normal.",
      "history": "I get leg pain when I walk sometimes from my circulation problems, but nothing like this. This came out of nowhere and is much, much worse.",
      "medications": "Warfarin 5mg daily; Carvedilol 25mg BID; Sacubitril/Valsartan 49/51mg BID; Spironolactone 25mg daily; Furosemide 40mg daily; Metformin 1000mg BID; Atorvastatin 80mg QHS; Cilostazol 100mg BID",
      "allergies": "ACE Inhibitors (Enalapril), Aspirin",
      "family": "My father had a heart attack at 60 and my mother had a stroke. My brother has had heart surgery. There's a lot of heart and circulation problems in my family.",
      "social": "I'm a retired teacher, widowed since 2019. I used to smoke but quit almost 20 years ago. I rarely drink, maybe wine at family gatherings."
    },
    "examManeuvers": [
      "Inspection of bilateral lower extremities",
      "Palpation of bilateral dorsalis pedis pulses",
      "Palpation of bilateral posterior tibial pulses",
      "Palpation of bilateral popliteal pulses",
      "Assessment of capillary refill in toes",
      "Temperature comparison between legs",
      "Sensory examination of affected limb",
      "Motor function assessment of affected limb",
      "Cardiac auscultation",
      "Assessment for signs of heart failure"
    ],
    "examFindings": {
      "Inspection of bilateral lower extremities": "Right lower extremity appears pale and mottled compared to left. Right foot and toes have bluish-white discoloration.",
      "Palpation of bilateral dorsalis pedis pulses": "Left dorsalis pedis pulse 2+, right dorsalis pedis pulse absent",
      "Palpation of bilateral posterior tibial pulses": "Left posterior tibial pulse 1+, right posterior tibial pulse absent",
      "Palpation of bilateral popliteal pulses": "Left popliteal pulse 1+, right popliteal pulse weak/barely palpable",
      "Assessment of capillary refill in toes": "Left foot capillary refill 3 seconds, right foot capillary refill >5 seconds",
      "Temperature comparison between legs": "Right lower extremity notably cooler to touch compared to left leg",
      "Sensory examination of affected limb": "Decreased sensation to light touch and pinprick in right foot and lower leg",
      "Motor function assessment of affected limb": "Weakness in right foot dorsiflexion and plantarflexion, patient unable to wiggle toes effectively",
      "Cardiac auscultation": "Irregularly irregular rhythm consistent with atrial fibrillation, no new murmurs",
      "Assessment for signs of heart failure": "Mild bilateral lower extremity edema, no acute distress at rest"
    },
    "ddxTargets": [
      "Acute embolic limb ischemia \u2014 Rutherford IIb (correct)",
      "Acute thrombosis on PAD \u2014 underlying atherosclerosis would show on CTA; absence suggests embolism",
      "DVT \u2014 venous, not arterial; no Homan sign; ABI not affected",
      "Aortic dissection with limb involvement \u2014 would show on CTA; usually bilateral",
      "Phlegmasia cerulea dolens \u2014 massive DVT with arterial compromise; venous pattern",
      "Ergotamine toxicity \u2014 bilateral, diffuse; medication history distinguishes"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's known PAD history and attributing symptoms to chronic disease progression rather than recognizing acute embolic event",
      "prematureClosure": "May stop at PAD exacerbation without considering acute embolic source given patient's atrial fibrillation and anticoagulation status",
      "availabilityBias": "Recent cases of DVT or chronic PAD may overshadow recognition of acute arterial emergency requiring immediate intervention"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable differentials. Given this patient's significant cardiac history and the acute nature of presentation, what specific historical details about her cardiac conditions might be most relevant? What would you want to know about her anticoagulation management?",
      "phase5": "Your physical exam reveals absent pulses and the classic '5 P's' of acute limb ischemia. Given her atrial fibrillation history and exam findings, how does this change your differential diagnosis? What is the most likely source of an acute arterial occlusion in this patient?",
      "finalDebrief": "This case highlights acute embolic limb ischemia in a patient with atrial fibrillation. The key was recognizing the acute presentation with the 5 P's (Pain, Pallor, Pulselessness, Paresthesias, Paralysis) rather than attributing symptoms to her chronic PAD. Her irregular anticoagulation likely contributed to embolic risk. How did your thinking evolve from chronic to acute pathology?",
      "final": "Diagnosis: acute embolic limb ischemia, Rutherford IIb. Key learning: (1) The 6 P's of ALI: Pain, Pallor, Pulselessness, Paresthesias, Paralysis, Poikilothermia (cold). Paresthesias = sensory ischemia (less urgent). Paralysis = motor ischemia = Rutherford IIb (immediately threatened). (2) Rutherford classification guides urgency: I (viable, non-urgent) \u2192 CDT or watchful waiting. IIa (marginally threatened) \u2192 urgent CDT or surgery. IIb (immediately threatened) \u2192 EMERGENT surgery/CDT. III (irreversible) \u2192 amputation. (3) Embolic vs thrombotic ALI: embolic = acute onset, no prior claudication, no PAD on CTA, cardiac source (AF, recent MI, endocarditis) \u2192 surgical embolectomy preferred. Thrombotic = gradual, history of claudication, PAD on CTA \u2192 CDT more appropriate. (4) Heparin immediately: prevents propagation and embolization without waiting for imaging if clinical diagnosis is clear. (5) Reperfusion injury: after revascularization, myoglobin and potassium released from ischemic muscle \u2192 AKI, hyperkalemia, compartment syndrome. Watch CK, creatinine; prophylactic fasciotomy often performed at time of revascularization."
    }
  }
};
