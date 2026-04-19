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
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Harold Jennings's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Harold appears anxious and distressed, frequently looking down at his pale right leg with obvious concern. He is very forthcoming about his symptoms and eager to describe the sudden onset, speaking quickly due to fear that something serious is happening to his leg.",
    "interviewQuestions": [
        "Can you describe exactly when and how your leg symptoms started?",
        "What does the pain in your leg feel like?",
        "Where exactly is the pain and does it go anywhere else?",
        "On a scale of 1-10, how severe is the pain?",
        "Is there anything that makes the pain better or worse?",
        "Have you noticed any other symptoms besides the pain and coldness?",
        "Have you ever had anything like this happen before?",
        "Can you tell me about your current medications?",
        "Do you have any drug allergies?",
        "What medical problems do you have?",
        "Has anyone in your family had problems with their blood vessels or circulation?",
        "Can you tell me about your smoking history?",
        "Have you been taking your blood thinner as prescribed?"
    ],
    "patientResponses": {
        "default": "I'm sorry, I'm not sure what you mean. I'm just really worried about my leg - it's never been this cold and painful before.",
        "onset": "I was just sitting in my recliner watching the evening news about an hour ago when it hit me like a lightning bolt. One second I was fine, the next second my leg went ice cold and the pain started.",
        "character": "It's a deep, severe aching pain, like someone is squeezing my leg in a vise. The coldness is the strangest part - it feels like my leg is made of ice.",
        "location": "The pain and coldness starts in my right calf and goes all the way down to my toes. My foot feels completely numb now.",
        "severity": "The pain is easily an 8 out of 10. I can barely stand to put any weight on it, and I'm terrified something terrible is happening.",
        "aggravating": "Any movement makes it worse, and when I try to walk on it the pain shoots up. Even just touching my leg hurts.",
        "relieving": "Nothing helps. I tried elevating it, rubbing it, nothing. The pain just won't go away and my leg stays cold as ice.",
        "associated": "My leg looks really pale, almost white, and I can't feel my toes at all. I feel a bit short of breath from the pain and worry.",
        "denies": "No chest pain, no back pain, no recent injuries or falls. The other leg feels completely normal.",
        "history": "Never had anything like this before. My leg circulation has always been fine, though I know my heart rhythm is irregular.",
        "medications": "Warfarin; Metoprolol; Furosemide; Lisinopril; Metformin",
        "allergies": "Heparin",
        "family": "My father had bad circulation problems in his legs when he got older, and my brother had a heart attack at 62.",
        "social": "I'm a retired long-haul truck driver. I smoked for many years but quit 10 years ago - about 2 packs a day for 20 years. I hardly drink alcohol and live with my wife."
    },
    "examManeuvers": [
        "Palpation of right dorsalis pedis pulse",
        "Palpation of right posterior tibial pulse",
        "Palpation of right popliteal pulse",
        "Palpation of right femoral pulse",
        "Assessment of right lower extremity color and temperature",
        "Assessment of right lower extremity sensation",
        "Assessment of right lower extremity motor function",
        "Capillary refill time in right foot",
        "Cardiac auscultation for rhythm and murmurs",
        "Comparison of bilateral lower extremity pulses and appearance"
    ],
    "examFindings": {
        "Palpation of right dorsalis pedis pulse": "Absent",
        "Palpation of right posterior tibial pulse": "Absent",
        "Palpation of right popliteal pulse": "Absent",
        "Palpation of right femoral pulse": "Present but diminished",
        "Assessment of right lower extremity color and temperature": "Pale, mottled, and markedly cool to touch from mid-calf distally",
        "Assessment of right lower extremity sensation": "Decreased sensation to light touch and pinprick in foot and distal calf",
        "Assessment of right lower extremity motor function": "Weakness with dorsiflexion and plantarflexion of foot",
        "Capillary refill time in right foot": "Greater than 5 seconds",
        "Cardiac auscultation for rhythm and murmurs": "Irregularly irregular rhythm consistent with atrial fibrillation, no murmurs",
        "Comparison of bilateral lower extremity pulses and appearance": "Left lower extremity has palpable pulses and normal color/temperature, stark contrast to right"
    },
    "ddxTargets": [
        "Acute arterial embolism (correct diagnosis)",
        "Acute arterial thrombosis",
        "Acute deep vein thrombosis",
        "Compartment syndrome",
        "Aortic dissection with limb ischemia",
        "Severe peripheral artery disease exacerbation",
        "Neurologic cause (stroke affecting limb)"
    ],
    "biasFlags": {
        "anchoring": "May anchor on the patient's diabetes and assume diabetic complications rather than considering acute vascular emergency requiring immediate intervention",
        "prematureClosure": "May jump to chronic PAD given smoking history and age without recognizing the acute nature requiring emergent revascularization",
        "availabilityBias": "May focus on more common conditions like DVT rather than the acute arterial emergency suggested by the absent pulses and pale, cold extremity"
    },
    "coachPrompts": {
        "phase2": "Given this patient's atrial fibrillation and sudden onset of unilateral leg symptoms, what vascular emergencies should be at the top of your differential? How might his cardiac rhythm relate to potential embolic phenomena?",
        "phase5": "You found absent distal pulses with a pale, cold extremity in a patient with atrial fibrillation. What does this constellation of findings suggest about the underlying pathophysiology? How does this change your diagnostic priorities?",
        "finalDebrief": "This case demonstrates acute arterial embolism, likely cardioembolic from atrial fibrillation despite anticoagulation. The key was recognizing the sudden onset, absent pulses, and classic '5 P's' of acute limb ischemia. How did your differential evolve from considering chronic conditions to recognizing this vascular emergency requiring immediate intervention?"
    }
}
};
