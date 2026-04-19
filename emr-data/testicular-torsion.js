/* emr-data/testicular-torsion.js — EMR case data for Testicular Torsion */
window.EMR_DATA = {
  "patient": {
    "name": "Justin Mercer",
    "patientHPI": "I woke up this morning with really severe pain down there on my left side — it came on suddenly and it's so bad I feel sick to my stomach. The pain is sharp and constant, and I can barely walk because any movement makes it worse.",
    "dob": "06/15/2010",
    "age": "16",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-615645",
    "language": "English",
    "race": "Black/African American",
    "phone": "(415) 555-1939",
    "email": "justin.mercer@email.com",
    "address": "6053 Poplar Ave, Chicago, IL 60612",
    "insurance": "Cigna",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "CVS Pharmacy — Broward Blvd",
    "emergencyContact": {
      "name": "Dorothy Mitchell",
      "phone": "(313) 555-7655",
      "relationship": "Partner"
    },
    "chiefComplaint": "My... down there hurts really bad Left testicle — sudden onset",
    "diagnosis": "Testicular Torsion"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None — previously healthy teenager",
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
      "time": "08:11",
      "bp": "138/86",
      "hr": "112",
      "rr": "20",
      "temp": "37.0°C",
      "spo2": "99%",
      "pain": "10/10",
      "bmi": "28",
      "weight": "55 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "My... down there hurts really bad Left testicle — sudden onset",
      "hpi": "Justin Mercer is a 16-year-old male presenting with sudden severe scrotal pain — left side. Past medical history includes None — previously healthy teenager. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Testicular Torsion — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-719310",
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
              "value": "11.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.5",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "36",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "169",
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
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.9",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "106",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "23",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "8",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "100",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.6",
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
              "test": "Urinalysis",
              "value": "Normal — no WBC, no bacteria, no blood",
              "unit": "",
              "range": "Normal",
              "flag": ""
            },
            {
              "test": "β-hCG",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
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
      "accession": "IMG-478638",
      "clinical": "My... down there hurts really bad Left testicle — sudden onset",
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
      "accession": "IMG-470698",
      "clinical": "My... down there hurts really bad Left testicle — sudden onset",
      "technique": "Standard protocol",
      "findings": "LEFT TESTICLE: ABSENT INTRATESTICULAR BLOOD FLOW on color Doppler. Testicle appears enlarged and hypoechoic (edematous). Reactive hydrocele present. Spermatic cord appears twisted with 'whirlpool sign.' RIGHT TESTICLE: normal size, normal blood flow on Doppler.",
      "impression": "LEFT TESTICULAR TORSION — absent blood flow. UROLOGY TO OR IMMEDIATELY — do not delay for formal ultrasound.",
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
      "accession": "IMG-462124",
      "clinical": "My... down there hurts really bad Left testicle — sudden onset",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 112 bpm. Normal intervals",
      "impression": "Sinus tachycardia — pain response",
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
    "No urologic conditions"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Never"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "High school student"
    ],
    [
      "Living",
      "Lives with both parents"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Justin appears visibly distressed and anxious, holding his left groin area and shifting uncomfortably. He's embarrassed discussing his genital symptoms but cooperative due to severe pain. He frequently grimaces and appears nauseous, speaking in short sentences between waves of discomfort.",
    "interviewQuestions": [
      "When exactly did the pain start and how quickly did it come on?",
      "Can you describe what the pain feels like?",
      "Where exactly is the pain located and does it go anywhere else?",
      "On a scale of 1-10, how would you rate the pain?",
      "What makes the pain worse or better?",
      "Have you had any nausea or vomiting?",
      "Have you noticed any swelling or changes in appearance?",
      "Any fever, chills, or feeling unwell?",
      "Any problems with urination or discharge?",
      "Have you had any recent trauma or injury to the area?",
      "Have you ever had pain like this before?",
      "Are you sexually active?",
      "Any recent physical activity or sports?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I don't understand... I just know it hurts really bad down there",
      "onset": "I woke up around 6 AM with this pain - it was sudden, like it just hit me all at once when I got out of bed",
      "character": "It's like a sharp, crushing pain that just won't stop - it's constant and really intense",
      "location": "It's my left testicle mainly, but the pain goes up into my lower belly and groin area too",
      "severity": "It's definitely a 9 out of 10 - I can barely function, I feel like I'm going to throw up from the pain",
      "aggravating": "Any movement makes it worse, even walking or sitting down hurts more",
      "relieving": "Nothing helps - I tried lying down different ways but nothing makes it better",
      "associated": "Yeah, I feel really nauseous and actually threw up once about an hour ago",
      "denies": "No fever, no burning when I pee, no discharge or anything like that",
      "history": "No, I've never had anything like this before - I've always been healthy",
      "medications": "no medications",
      "allergies": "NKDA",
      "family": "No, no one in my family has had any problems like this that I know of",
      "social": "I'm a junior in high school, I don't smoke or drink, and I'm not sexually active"
    },
    "examManeuvers": [
      "Inspection of external genitalia",
      "Palpation of left testicle",
      "Palpation of right testicle",
      "Assessment of cremasteric reflex",
      "Evaluation of testicular lie/orientation",
      "Palpation of epididymis",
      "Assessment of scrotal swelling",
      "Abdominal examination",
      "Inguinal lymph node palpation",
      "Prehn's sign (elevation test)"
    ],
    "examFindings": {
      "Inspection of external genitalia": "Left hemiscrotum appears swollen and erythematous, left testicle rides higher than right",
      "Palpation of left testicle": "Extremely tender, firm, swollen left testicle with patient grimacing and pulling away",
      "Palpation of right testicle": "Normal size, consistency, and non-tender right testicle",
      "Assessment of cremasteric reflex": "Absent cremasteric reflex on the left side, normal on right",
      "Evaluation of testicular lie/orientation": "Left testicle has abnormal horizontal lie, right testicle normal vertical orientation",
      "Palpation of epididymis": "Difficult to distinguish epididymis from testicle on left due to swelling and tenderness",
      "Assessment of scrotal swelling": "Moderate scrotal edema on left side, no fluctuance or transillumination",
      "Abdominal examination": "Mild lower abdominal tenderness, no masses or organomegaly",
      "Inguinal lymph node palpation": "No lymphadenopathy palpated bilaterally",
      "Prehn's sign (elevation test)": "Elevation of left testicle does not relieve pain, may worsen it slightly"
    },
    "ddxTargets": [
      "Testicular torsion (correct diagnosis)",
      "Epididymitis",
      "Torsion of testicular appendix",
      "Incarcerated inguinal hernia",
      "Trauma with testicular rupture",
      "Acute hydrocele",
      "Varicocele with acute thrombosis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on epididymitis due to testicular pain and nausea, missing the acute surgical emergency of torsion",
      "prematureClosure": "May stop gathering information after hearing 'testicular pain' without fully assessing the acute onset and physical findings",
      "availabilityBias": "May think of more common epididymitis or STI-related causes rather than the less common but time-critical torsion"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given Justin's age and acute presentation, what time-sensitive conditions should be at the top of your list? What specific historical details will help you distinguish between your top differentials?",
      "phase5": "Excellent history and physical examination. The combination of sudden onset, severe pain, nausea, absent cremasteric reflex, abnormal testicular lie, and negative Prehn's sign are classic findings. What does this constellation of findings suggest, and what is your next immediate step?",
      "finalDebrief": "This case highlights the importance of recognizing testicular torsion as a urological emergency. The key differentiating features from epididymitis include sudden onset, younger age, absent cremasteric reflex, horizontal testicular lie, and negative Prehn's sign. Time to surgery is critical - ideally within 6 hours for testicular salvage. How did your thinking evolve from your initial differential?"
    }
  }
};
