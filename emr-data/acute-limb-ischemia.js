/* emr-data/acute-limb-ischemia.js — EMR case data for Acute Limb Ischemia (Embolic) */
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
    "pharmacy": "Publix Pharmacy — Pines Blvd",
    "emergencyContact": {
      "name": "Sarah Bailey",
      "phone": "(803) 555-1845",
      "relationship": "Sibling"
    },
    "chiefComplaint": "My right leg went cold and painful suddenly Right lower leg and foot — sudden onset",
    "diagnosis": "Acute Limb Ischemia (Embolic)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Atrial fibrillation",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Congestive heart failure",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Prior stroke",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Warfarin",
      "dose": "5mg daily (INR has been subtherapeutic — last check 1.6 two weeks ago)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-2",
      "name": "Metoprolol",
      "dose": "50mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    },
    {
      "id": "med-3",
      "name": "Furosemide",
      "dose": "40mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-4",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-5",
      "name": "Metformin",
      "dose": "500mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Heparin",
      "reaction": "Thrombocytopenia (HIT) — CRITICAL: cannot use unfractionated heparin",
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
      "temp": "36.8°C",
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
      "cc": "My right leg went cold and painful suddenly Right lower leg and foot — sudden onset",
      "hpi": "Harold Jennings is a 75-year-old male presenting with my right leg went cold and painful suddenly right lower leg and foot — sudden onset. Past medical history includes Atrial fibrillation, Congestive heart failure, Prior stroke, Hypertension, Type 2 Diabetes. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Limb Ischemia (Embolic) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-411339",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "8.9",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "H"
            },
            {
              "test": "Hematocrit",
              "value": "45",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "168",
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
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.8",
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
              "value": "15",
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
              "value": "73",
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
              "test": "INR",
              "value": "1.4",
              "unit": "",
              "range": "2.0-3.0 (therapeutic for AFib)",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "3.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "480",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-417544",
      "clinical": "My right leg went cold and painful suddenly Right lower leg and foot — sudden onset",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CTA Lower Extremity",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-961178",
      "clinical": "My right leg went cold and painful suddenly Right lower leg and foot — sudden onset",
      "technique": "Standard protocol",
      "findings": "COMPLETE OCCLUSION of the right popliteal artery at the level of the knee joint. Abrupt cutoff with 'meniscus sign' (convex proximal thrombus margin — classic for embolism). No significant atherosclerotic disease proximal to occlusion. Reconstitution of flow distally via collaterals with poor opacification of anterior tibial, posterior tibial, and peroneal arteries. Left lower extremity: patent vasculature with mild atherosclerotic changes.",
      "impression": "ACUTE EMBOLIC OCCLUSION of right popliteal artery — Rutherford class IIa (marginally threatened limb with sensory loss, no motor deficit initially, now developing). EMERGENT vascular surgery consultation for thrombectomy or catheter-directed thrombolysis.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-209998",
      "clinical": "My right leg went cold and painful suddenly Right lower leg and foot — sudden onset",
      "technique": "Standard 12-lead",
      "findings": "Atrial fibrillation at 82 bpm. Old Q waves in V1-V3 (prior anterior wall infarct). No acute ST changes",
      "impression": "Chronic atrial fibrillation — embolic source. Prior anterior MI noted.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
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
      "Acute arterial embolism (correct diagnosis)",
      "Acute arterial thrombosis",
      "Acute deep vein thrombosis",
      "Aortic dissection with limb ischemia",
      "Compartment syndrome",
      "Severe peripheral arterial disease exacerbation",
      "Acute limb compartment syndrome"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's known PAD family history and assuming chronic rather than acute arterial insufficiency",
      "prematureClosure": "Risk of stopping at DVT given leg pain and not considering arterial causes, especially with warfarin use",
      "availabilityBias": "May focus on more common diagnoses like DVT rather than considering acute arterial embolism from known atrial fibrillation"
    },
    "coachPrompts": {
      "phase2": "This patient has several cardiovascular risk factors and comorbidities. What specific aspects of his past medical history might be most relevant to acute leg ischemia? How might his current medications factor into your diagnostic thinking?",
      "phase5": "Now that you've completed your history and physical, what do the absent pulses and the '6 P's' findings tell you about the vascular status? How does the acuity and his atrial fibrillation history inform your leading diagnosis?",
      "finalDebrief": "This case illustrates how acute arterial embolism from atrial fibrillation can present dramatically. How did your differential evolve from considering venous vs arterial pathology? What key historical and physical exam features distinguished embolic from thrombotic arterial occlusion?"
    }
  }
};
