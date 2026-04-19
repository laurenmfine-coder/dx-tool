/* emr-data/ectopic-pregnancy.js — EMR case data for Ruptured Ectopic Pregnancy */
window.EMR_DATA = {
  "patient": {
    "name": "Aisha Mohammed",
    "patientHPI": "I suddenly got this sharp, stabbing pain in my lower right belly that came out of nowhere and won't go away. It's getting worse and I feel dizzy and nauseous - something is definitely not right.",
    "dob": "06/15/1997",
    "age": "29",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-155904",
    "language": "English",
    "race": "American Indian",
    "phone": "(720) 555-3419",
    "email": "aisha.mohammed@email.com",
    "address": "2499 Hickory Rd, Albuquerque, NM 87103",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Walmart Pharmacy — University Dr",
    "emergencyContact": {
      "name": "William Hill",
      "phone": "(414) 555-2684",
      "relationship": "Parent"
    },
    "chiefComplaint": "Really bad pain in my lower belly Right lower abdomen and pelvis — sudden onset",
    "diagnosis": "Ruptured Ectopic Pregnancy"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Chlamydia infection",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "No prior pregnancies",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Endometriosis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Norethindrone",
      "dose": "0.35mg daily (progestin-only pill — started 4 months ago)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
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
      "time": "09:56",
      "bp": "92/58",
      "hr": "124",
      "rr": "22",
      "temp": "36.8°C",
      "spo2": "98%",
      "pain": "9/10",
      "bmi": "33",
      "weight": "70 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Really bad pain in my lower belly Right lower abdomen and pelvis — sudden onset",
      "hpi": "Aisha Mohammed is a 29-year-old female presenting with really bad pain in my lower belly right lower abdomen and pelvis — sudden onset. Past medical history includes Chlamydia infection, No prior pregnancies, Endometriosis. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ruptured Ectopic Pregnancy — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-632165",
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
              "value": "13.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "8.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "48",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "198",
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
              "value": "136",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.5",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "101",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "27",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "13",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.7",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "85",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "8.9",
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
              "test": "β-hCG",
              "value": "4,200",
              "unit": "mIU/mL",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Type and Crossmatch",
              "value": "O negative, 2 units pRBC crossmatched",
              "unit": "",
              "range": "",
              "flag": ""
            },
            {
              "test": "Lactate",
              "value": "4.1",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "PT/INR",
              "value": "1.0",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
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
      "accession": "IMG-728537",
      "clinical": "Really bad pain in my lower belly Right lower abdomen and pelvis — sudden onset",
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
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-926737",
      "clinical": "Really bad pain in my lower belly Right lower abdomen and pelvis — sudden onset",
      "technique": "Standard protocol",
      "findings": "POSITIVE FREE FLUID in Morrison pouch and pelvis. Moderate amount of free fluid in pelvis (cul-de-sac). No intrauterine pregnancy visible in uterus. EMPTY UTERUS with endometrial stripe.",
      "impression": "FREE INTRAPERITONEAL FLUID + positive β-hCG + empty uterus = RUPTURED ECTOPIC PREGNANCY. OB/GYN to OR emergently.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "POCUS – Cardiac",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-148980",
      "clinical": "Really bad pain in my lower belly Right lower abdomen and pelvis — sudden onset",
      "technique": "Standard protocol",
      "findings": "Hyperdynamic LV function. Small, underfilled chambers (hypovolemia). No pericardial effusion.",
      "impression": "Hyperdynamic and volume-depleted — consistent with hemorrhagic shock",
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
      "accession": "IMG-317314",
      "clinical": "Really bad pain in my lower belly Right lower abdomen and pelvis — sudden onset",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 124 bpm. No ST changes",
      "impression": "Sinus tachycardia — hemorrhagic shock",
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
    "Mother: ectopic pregnancy (age 26)",
    "No other relevant history"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Social smoker, 2-3 cigarettes/day"
    ],
    [
      "Alcohol",
      "Social"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Restaurant server"
    ],
    [
      "Living",
      "Lives with partner, sexually active, not using barrier contraception"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Aisha appears anxious and distressed, clutching her abdomen and speaking in short sentences due to pain. She is forthcoming with information but becomes increasingly worried as she describes her worsening symptoms and dizziness.",
    "interviewQuestions": [
      "When exactly did this pain start and what were you doing when it began?",
      "Can you describe the quality of the pain - is it sharp, cramping, constant?",
      "Where exactly is the pain located and does it radiate anywhere?",
      "On a scale of 1-10, how severe is your pain right now?",
      "What makes the pain worse or better?",
      "Are you experiencing any nausea, vomiting, or dizziness?",
      "When was your last menstrual period?",
      "Have you had any vaginal bleeding or spotting recently?",
      "Is there any chance you could be pregnant?",
      "Have you had any fever, chills, or urinary symptoms?",
      "Have you ever had pain like this before?",
      "Are you currently taking any medications?",
      "Do you have any known allergies to medications?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this pain - can you ask that differently?",
      "onset": "It started about 4 hours ago while I was at work. I was carrying a tray and suddenly felt this sharp pain that made me double over - it came out of nowhere.",
      "character": "It's a sharp, stabbing pain that's constant. Sometimes it gets even more intense and takes my breath away.",
      "location": "It's mainly in my lower right belly, but now it's spreading to my pelvis and I feel it in my shoulder too, which is weird.",
      "severity": "Right now it's about an 8 out of 10. I can barely stand up straight and it's getting worse.",
      "aggravating": "Any movement makes it worse - walking, coughing, even breathing deeply. I have to stay very still.",
      "relieving": "Nothing helps. I tried sitting, lying down, even took some ibuprofen but nothing touches it.",
      "associated": "I feel really dizzy and nauseous. I haven't thrown up yet but I feel like I might. I also feel weak and lightheaded when I stand.",
      "denies": "No fever, no burning when I pee, no diarrhea. I haven't been vomiting.",
      "history": "I've never had pain exactly like this before. I get bad period cramps because of my endometriosis, but this is completely different.",
      "medications": "Norethindrone",
      "allergies": "NKDA",
      "family": "My mom had an ectopic pregnancy when she was young, around 26. That's actually why I'm worried - she told me to watch out for sudden belly pain.",
      "social": "I work as a server at a restaurant. I smoke a few cigarettes a day and drink socially. I live with my boyfriend and we're sexually active."
    },
    "examManeuvers": [
      "General appearance and vital signs assessment",
      "Abdominal inspection",
      "Auscultation of bowel sounds",
      "Light palpation of abdomen",
      "Deep palpation of right lower quadrant",
      "McBurney's point tenderness",
      "Rebound tenderness assessment",
      "Pelvic examination",
      "Cervical motion tenderness",
      "Adnexal mass assessment"
    ],
    "examFindings": {
      "General appearance and vital signs assessment": "Patient appears pale, diaphoretic, and in acute distress. Tachycardic at 124 bpm, hypotensive at 92/58 mmHg.",
      "Abdominal inspection": "Abdomen appears flat, no obvious distension or masses visible. Patient guards abdomen with hands.",
      "Auscultation of bowel sounds": "Bowel sounds present but diminished in all quadrants.",
      "Light palpation of abdomen": "Marked tenderness in right lower quadrant and suprapubic region. Patient winces and guards with minimal pressure.",
      "Deep palpation of right lower quadrant": "Severe tenderness with guarding and rigidity. Patient unable to tolerate deep palpation.",
      "McBurney's point tenderness": "Positive tenderness at McBurney's point, but pain is more diffuse than typical appendicitis.",
      "Rebound tenderness assessment": "Positive rebound tenderness in right lower quadrant and pelvis.",
      "Pelvic examination": "Small amount of dark blood in vaginal vault. Cervix appears closed.",
      "Cervical motion tenderness": "Severe cervical motion tenderness present.",
      "Adnexal mass assessment": "Possible right adnexal fullness and tenderness, difficult to assess due to patient discomfort."
    },
    "ddxTargets": [
      "Ruptured ectopic pregnancy (correct diagnosis)",
      "Ovarian torsion",
      "Ruptured ovarian cyst",
      "Appendicitis (must-not-miss diagnosis 1)",
      "Septic abortion (must-not-miss diagnosis 2)",
      "Pelvic inflammatory disease (common mimic 1)",
      "Endometriosis flare (common mimic 2)"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on appendicitis due to right lower quadrant pain and McBurney's point tenderness, potentially missing gynecologic causes",
      "prematureClosure": "May stop considering other diagnoses after finding abdominal tenderness without fully exploring menstrual history and pregnancy possibility",
      "availabilityBias": "Common conditions like appendicitis or ovarian cysts may overshadow consideration of ectopic pregnancy despite family history"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you're considering both GI and GYN causes - that's appropriate for this presentation. What key historical elements will help you differentiate between these diagnoses? Think about what additional information might be most crucial given her demographics and presentation.",
      "phase5": "Excellent work gathering the history and physical findings. Let's synthesize what you've learned - you have a young woman with acute pelvic pain, hemodynamic instability, and some key examination findings. How do her vital signs and physical exam findings help narrow your differential? What's the most likely diagnosis given the constellation of findings?",
      "finalDebrief": "This case highlights the importance of considering ectopic pregnancy in any woman of reproductive age with abdominal pain, especially with risk factors like endometriosis, prior chlamydia, and family history. The combination of acute onset pain, hemodynamic instability, shoulder pain, and cervical motion tenderness should raise immediate concern for rupture. How did the patient's presentation and your examination findings guide you toward the correct diagnosis?"
    }
  }
};
