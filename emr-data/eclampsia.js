/* emr-data/eclampsia.js — EMR case data for Eclampsia */
window.EMR_DATA = {
  "patient": {
    "name": "Catalina Reyes",
    "patientHPI": "I suddenly got hit with the most terrible headache of my life - it's pounding on both sides of my head and nothing like any headache I've ever had before. I'm 34 weeks pregnant and this pain is so severe I can barely think straight.",
    "dob": "06/15/1998",
    "age": "28",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-945506",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(502) 555-5397",
    "email": "catalina.reyes@email.com",
    "address": "1136 Mulberry St, Pittsburgh, PA 15205",
    "insurance": "Medicare",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Rite Aid — Sunrise Blvd",
    "emergencyContact": {
      "name": "Linda Carter",
      "phone": "(615) 555-3390",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Severe headache in third trimester",
    "diagnosis": "Eclampsia"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "First pregnancyat 34 weeks",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "BMI 36",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "No prior hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "No seizure history",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Prenatal care: blood pressure was elevated at last visit5 days ago — told to 'monitor at home'",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Prenatal vitamin",
      "dose": "Daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-2",
      "name": "Iron supplement",
      "dose": "325mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "07:27",
      "bp": "194/118",
      "hr": "108",
      "rr": "20",
      "temp": "37.2°C",
      "spo2": "96%",
      "pain": "10/10",
      "bmi": "28",
      "weight": "100 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "What happened Severe headache — bilateral, throbbing, 'worst headache'",
      "hpi": "Catalina Reyes is a 28-year-old female presenting with what happened severe headache — bilateral, throbbing, 'worst headache'. Past medical history includes First pregnancyat 34 weeks, BMI 36, No prior hypertension, No seizure history, Prenatal care: blood pressure was elevated at last visit5 days ago — told to 'monitor at home'. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Eclampsia — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-408172",
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
              "value": "9.7",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "10.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "41",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "82",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "145",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.5",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "103",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "25",
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
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "94",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.5",
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
              "test": "AST",
              "value": "248",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "196",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "LDH",
              "value": "680",
              "unit": "U/L",
              "range": "140-280",
              "flag": "H"
            },
            {
              "test": "Uric Acid",
              "value": "8.2",
              "unit": "mg/dL",
              "range": "2.5-5.5",
              "flag": "H"
            },
            {
              "test": "PT/INR",
              "value": "1.2",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "Fibrinogen",
              "value": "180",
              "unit": "mg/dL",
              "range": "200-400 (elevated in pregnancy, usually 400-600)",
              "flag": "H"
            },
            {
              "test": "Urinalysis",
              "value": "3+ protein, no infection",
              "unit": "",
              "range": "Trace protein",
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
      "accession": "IMG-394338",
      "clinical": "What happened Severe headache — bilateral, throbbing, 'worst headache'",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "POCUS – FAST Exam",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-756181",
      "clinical": "What happened Severe headache — bilateral, throbbing, 'worst headache'",
      "technique": "Standard protocol",
      "findings": "No free intraperitoneal fluid. Normal-appearing liver parenchyma. Fetal heart rate 145 bpm, appropriate for gestational age. Normal amniotic fluid volume.",
      "impression": "No abruption-related free fluid. Fetus currently viable.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-123462",
      "clinical": "What happened Severe headache — bilateral, throbbing, 'worst headache'",
      "technique": "Standard protocol",
      "findings": "No intracranial hemorrhage. Mild diffuse cerebral edema. No mass lesion. No midline shift.",
      "impression": "No hemorrhage — cerebral edema consistent with eclampsia/posterior reversible encephalopathy syndrome (PRES)",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-789414",
      "clinical": "What happened Severe headache — bilateral, throbbing, 'worst headache'",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 108 bpm. No ST changes. Normal intervals",
      "impression": "Sinus tachycardia — stress and hypertensive crisis",
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
    "Mother: preeclampsia with first pregnancy",
    "Sister: gestational hypertension"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "None during pregnancy"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Elementary school teacher — on leave since 32 weeks"
    ],
    [
      "Living",
      "Lives with husband, first pregnancy"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Catalina appears anxious and is holding her head, speaking in a strained voice due to severe pain. She is very forthcoming about her symptoms, clearly distressed, and keeps emphasizing this headache is unlike anything she's experienced. Her concern for her baby's wellbeing is evident as she frequently asks if the baby will be okay.",
    "interviewQuestions": [
      "When did this headache start and how quickly did it come on?",
      "Can you describe the quality of the headache pain?",
      "Where exactly is the pain located?",
      "On a scale of 1-10, how severe is this headache?",
      "Have you had any visual changes or blurred vision?",
      "Are you experiencing any nausea or vomiting?",
      "Have you noticed any swelling in your hands, face, or feet?",
      "Any abdominal pain, especially upper right side?",
      "Have you felt the baby moving normally?",
      "What was your blood pressure at your last prenatal visit?",
      "Have you had headaches like this before in your pregnancy?",
      "Are you taking any medications besides prenatal vitamins?",
      "Does your family have any history of pregnancy complications?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this terrible headache. Could you repeat that?",
      "onset": "It started about 2 hours ago very suddenly - I was just sitting on the couch and it hit me like a freight train",
      "character": "It's a severe pounding, throbbing pain that feels like my head is in a vice being squeezed",
      "location": "It's on both sides of my head, mainly in the front and temples, and goes down into my neck",
      "severity": "This is easily a 9 out of 10 - I've never had pain like this. I can barely function",
      "aggravating": "Light makes it much worse, and any movement or noise seems to make the pounding more intense",
      "relieving": "I tried lying down in a dark room and took Tylenol about an hour ago but nothing is helping",
      "associated": "I feel nauseous and my vision seems a bit blurry. I've been more swollen lately, especially my hands and face",
      "denies": "No seizures, no loss of consciousness, no fever or chills, no neck stiffness",
      "history": "I've had some mild headaches during pregnancy but nothing even close to this severity",
      "medications": "Prenatal vitamin; Iron supplement",
      "allergies": "NKDA",
      "family": "My mom had preeclampsia with her first pregnancy and my sister had high blood pressure when she was pregnant",
      "social": "I'm an elementary school teacher but went on leave at 32 weeks. I've never smoked and stopped drinking completely when I got pregnant"
    },
    "examManeuvers": [
      "Blood pressure measurement",
      "Neurological exam including reflexes",
      "Fundoscopic examination",
      "Assessment for edema",
      "Abdominal examination",
      "Fetal heart rate assessment",
      "Urine dipstick for proteinuria",
      "Assessment of mental status",
      "Examination for right upper quadrant tenderness",
      "Assessment of facial and extremity swelling"
    ],
    "examFindings": {
      "Blood pressure measurement": "194/118 mmHg, confirmed on repeat measurement",
      "Neurological exam including reflexes": "Hyperreflexia 3+ throughout, sustained clonus at ankles",
      "Fundoscopic examination": "Arteriovenous nicking and flame-shaped hemorrhages consistent with hypertensive retinopathy",
      "Assessment for edema": "3+ pitting edema in lower extremities, 2+ edema in hands and face",
      "Abdominal examination": "Gravid uterus appropriate for gestational age, mild epigastric tenderness",
      "Fetal heart rate assessment": "Fetal heart rate 145 bpm, reactive with good variability",
      "Urine dipstick for proteinuria": "3+ proteinuria on dipstick",
      "Assessment of mental status": "Alert and oriented but appears uncomfortable, photophobic",
      "Examination for right upper quadrant tenderness": "Mild right upper quadrant tenderness on deep palpation",
      "Assessment of facial and extremity swelling": "Notable facial puffiness and hand swelling that patient reports as new"
    },
    "ddxTargets": [
      "Severe preeclampsia with features (correct diagnosis)",
      "Gestational hypertension",
      "Chronic hypertension with superimposed preeclampsia",
      "Eclampsia",
      "HELLP syndrome",
      "Primary headache disorder (migraine/tension)",
      "Secondary headache (intracranial pathology)"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'headache' and missing the hypertensive emergency context in pregnancy, or focusing solely on neurological causes",
      "prematureClosure": "May quickly assume this is just a pregnancy headache or migraine without fully evaluating for preeclampsia features",
      "availabilityBias": "Common headaches are frequent, but severe headache in third trimester with hypertension should trigger immediate preeclampsia evaluation"
    },
    "coachPrompts": {
      "phase2": "You've identified headache as the chief complaint in a third-trimester patient. What specific pregnancy-related conditions should be at the top of your differential? Think about what additional history would help you distinguish between benign pregnancy headaches and more serious complications.",
      "phase5": "Now that you have the history and physical findings, let's think systematically. You have a third-trimester patient with severe headache, significantly elevated blood pressure, proteinuria, hyperreflexia, and edema. How do these findings fit together? What does this constellation of symptoms suggest?",
      "finalDebrief": "This case demonstrates the importance of considering preeclampsia in any pregnant patient presenting with headache after 20 weeks gestation. The combination of severe headache, hypertension, proteinuria, and hyperreflexia indicates severe preeclampsia with features. The family history was a key risk factor. How did your thinking evolve from initial presentation to final diagnosis?"
    }
  }
};
