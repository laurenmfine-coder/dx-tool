/* emr-data/intussusception.js — EMR case data for Ileocolic Intussusception */
window.EMR_DATA = {
  "patient": {
    "name": "Baby Liam Chen",
    "patientHPI": "My baby has been having these terrible crying spells where he screams and pulls his little knees up to his belly - it comes in waves and he seems to be in so much pain. He was getting over a cold recently, but now he won't eat much and just seems miserable, especially during these episodes where he grabs at his tummy.",
    "dob": "06/15/2025",
    "age": "1",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-915392",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(713) 555-8054",
    "email": "baby.liam.chen@email.com",
    "address": "1853 Willow Way, Kansas City, MO 64110",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Rite Aid — University Dr",
    "emergencyContact": {
      "name": "Jennifer Morgan",
      "phone": "(804) 555-3937",
      "relationship": "Partner"
    },
    "chiefComplaint": "Screaming and drawing knees up to chest Belly — child grabs at stomach and pulls knees up during episodes",
    "diagnosis": "Ileocolic Intussusception"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Recent viral URI",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "No prior surgeries",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Up to date on vaccinations",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "History of rotavirus gastroenteritis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
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
      "time": "08:15",
      "bp": "88/56",
      "hr": "148",
      "rr": "30",
      "temp": "37.4°C",
      "spo2": "99%",
      "pain": "/10",
      "bmi": "27",
      "weight": "56 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Screaming and drawing knees up to chest Belly — child grabs at stomach and pulls knees up during episodes",
      "hpi": "Baby Liam Chen is a 1-year-old male presenting with screaming and drawing knees up to chest belly — child grabs at stomach and pulls knees up during episodes. Past medical history includes Recent viral URI, No prior surgeries, Up to date on vaccinations, History of rotavirus gastroenteritis. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ileocolic Intussusception — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-920390",
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
              "value": "14.6",
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
              "value": "35",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "298",
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
              "value": "3.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "L"
            },
            {
              "test": "Chloride",
              "value": "104",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "26",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "22",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "0.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "72",
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
              "test": "Lactate",
              "value": "3.1",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "3.2",
              "unit": "mg/dL",
              "range": "<0.5",
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
      "accession": "IMG-984156",
      "clinical": "Screaming and drawing knees up to chest Belly — child grabs at stomach and pulls knees up during episodes",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "Abdominal X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-342460",
      "clinical": "Screaming and drawing knees up to chest Belly — child grabs at stomach and pulls knees up during episodes",
      "technique": "Standard protocol",
      "findings": "Paucity of gas in the right lower quadrant. Soft tissue density in the right upper quadrant. Mild small bowel dilation. No free air.",
      "impression": "Findings suggestive of intussusception — recommend confirmatory ultrasound",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "POCUS – FAST Exam",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-708294",
      "clinical": "Screaming and drawing knees up to chest Belly — child grabs at stomach and pulls knees up during episodes",
      "technique": "Standard protocol",
      "findings": "TARGET SIGN (donut sign) visualized in the right upper quadrant — concentric rings of bowel wall representing telescoped bowel within bowel. Approximately 3.5cm diameter. Small amount of trapped fluid within intussusceptum. No free peritoneal fluid.",
      "impression": "ILEOCOLIC INTUSSUSCEPTION confirmed — target/donut sign. Pediatric surgery consult for air-contrast enema reduction vs operative intervention.",
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
      "accession": "IMG-604068",
      "clinical": "Screaming and drawing knees up to chest Belly — child grabs at stomach and pulls knees up during episodes",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 148 bpm. Normal pediatric morphology",
      "impression": "Sinus tachycardia — pain and dehydration",
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
    "No GI diseases",
    "No prior intussusception in family"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "N/A"
    ],
    [
      "Alcohol",
      "N/A"
    ],
    [
      "Drugs",
      "N/A"
    ],
    [
      "Occupation",
      "N/A — toddler"
    ],
    [
      "Living",
      "Lives with parents. Attends daycare."
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Parent is extremely anxious and distressed, speaking rapidly about their child's pain episodes. Highly forthcoming with details but emotional and seeking immediate reassurance that their baby will be okay.",
    "interviewQuestions": [
      "Can you describe exactly what happens during these crying episodes?",
      "How long do the episodes last and how often do they occur?",
      "Is there anything that seems to trigger these episodes?",
      "Has your baby had any vomiting or changes in bowel movements?",
      "When did your baby last have a normal bowel movement?",
      "Has your baby been eating and drinking normally?",
      "Have you noticed any blood in the stool or diaper?",
      "Does your baby seem completely normal between these episodes?",
      "Has your baby had a fever during these episodes?",
      "Have you tried anything to comfort your baby during these spells?",
      "Has your baby had any recent illnesses or infections?",
      "Are there any other symptoms you've noticed?",
      "Has anyone in your family ever had bowel problems as a child?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm just so worried about my baby - can you explain what you mean?",
      "onset": "It started yesterday evening, maybe around 6 PM. He was fine earlier in the day, then suddenly started these horrible screaming fits.",
      "character": "He screams like he's in terrible pain and pulls his knees up tight to his chest. His whole body gets rigid and he turns red from crying so hard.",
      "location": "He seems to be grabbing at his belly area, around his stomach. The pain seems to be in his abdomen.",
      "severity": "I'd say it's a 10 when it happens - I've never seen him cry like this. Between episodes he's fussy and clingy but not screaming.",
      "aggravating": "The episodes seem to come in waves every 15-20 minutes. Moving him or trying to feed him seems to make it worse.",
      "relieving": "Nothing really helps. I've tried holding him, rocking him, giving him a pacifier - nothing stops the crying until the episode passes.",
      "associated": "He's been vomiting a few times and doesn't want to eat. He seems very tired and pale between the episodes.",
      "denies": "No fever during the episodes, no coughing, no rash. He's not pulling at his ears or anything like that.",
      "history": "No, he's never had anything like this before. He had some stomach upset with that stomach bug a few months ago but nothing this severe.",
      "medications": "no medications",
      "allergies": "NKDA",
      "family": "No one in our family has had bowel problems as children. No history of any serious stomach issues.",
      "social": "He goes to daycare three days a week. No one smokes around him. He's been meeting all his developmental milestones normally."
    },
    "examManeuvers": [
      "General appearance and behavior",
      "Abdominal inspection",
      "Abdominal palpation",
      "Bowel sounds",
      "Rectal examination",
      "Assessment for abdominal masses",
      "Vital signs assessment",
      "Hydration status",
      "Assessment during pain episode",
      "Inguinal examination"
    ],
    "examFindings": {
      "General appearance and behavior": "Intermittently inconsolable with episodes of drawing knees to chest, appears pale and lethargic between episodes",
      "Abdominal inspection": "Abdomen appears distended, no visible masses or abnormal movements",
      "Abdominal palpation": "Soft between episodes, sausage-shaped mass palpable in right upper quadrant, tenderness in right lower quadrant",
      "Bowel sounds": "High-pitched, hyperactive bowel sounds during episodes, hypoactive between episodes",
      "Rectal examination": "Currant jelly-like stool with blood and mucus on examining finger",
      "Assessment for abdominal masses": "Palpable sausage-shaped mass in right upper quadrant consistent with intussuscepted bowel",
      "Vital signs assessment": "Tachycardia appropriate for age and distress, mild hypotension, low-grade fever",
      "Hydration status": "Mild dehydration with slightly dry mucous membranes and decreased skin turgor",
      "Assessment during pain episode": "Child becomes rigid, inconsolable, draws knees to chest, episode lasts 2-3 minutes",
      "Inguinal examination": "No hernias palpated, no masses in inguinal regions"
    },
    "ddxTargets": [
      "Intussusception (correct diagnosis)",
      "Viral gastroenteritis",
      "Constipation with fecal impaction",
      "Volvulus",
      "Incarcerated hernia",
      "Infantile colic",
      "Appendicitis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on recent viral URI and assuming continued gastroenteritis rather than considering mechanical obstruction",
      "prematureClosure": "Risk of stopping evaluation at colic or gastroenteritis given the intermittent nature and age group",
      "availabilityBias": "Common conditions like colic or viral illness may overshadow the classic but less common presentation of intussusception"
    },
    "coachPrompts": {
      "phase2": "You've identified several important differentials for an infant with intermittent abdominal pain. What specific historical details would help you distinguish between mechanical causes versus functional disorders? Consider the pattern and timing of symptoms.",
      "phase5": "Your physical exam revealed some key findings - particularly the palpable mass and the nature of the stool. How do these findings help narrow your differential? What is the most likely anatomical process occurring?",
      "finalDebrief": "This case demonstrates the classic triad of intussusception: intermittent colicky pain, palpable abdominal mass, and bloody stool. How did the intermittent nature initially broaden your differential, and which examination findings were most crucial in reaching the correct diagnosis?"
    }
  }
};
