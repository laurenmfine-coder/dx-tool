// Virtual EMR Case: Community-Acquired Pneumonia
// Variant: pneumonia | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Williams",
    "patientHPI": "I'm here for my regular diabetes check-up and everything's been going pretty well with my medications. I do get up a couple times at night to use the bathroom, and I know I should quit smoking but it's been tough - still going through about a pack a day.",
    "dob": "03/22/1958",
    "age": 67,
    "sex": "Male",
    "mrn": "RDX-2025-41837",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B",
    "pcp": "Dr. Patricia Navarro, MD",
    "pharmacy": "Publix Pharmacy — 2501 University Dr, Riverside, FL",
    "language": "English",
    "race": "Black or African American",
    "address": "7687 Jasmine Way, Pittsburgh, PA 15210",
    "phone": "(954) 555-7293",
    "email": "m.williams58@email.com",
    "emergencyContact": {
      "name": "Denise Williams (Wife)",
      "phone": "(954) 555-7301"
    },
    "chiefComplaint": "Shortness of breath and cough"
  },
  "problems": [
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2012",
      "status": "Active",
      "notes": "A1c 7.8% at last check"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2008",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3a",
      "icd": "N18.31",
      "onset": "2020",
      "status": "Active",
      "notes": "Baseline Cr 1.4-1.6"
    },
    {
      "problem": "Tobacco Use Disorder",
      "icd": "F17.210",
      "onset": "1978",
      "status": "Active",
      "notes": "40 pack-year history, current smoker"
    },
    {
      "problem": "Benign Prostatic Hyperplasia",
      "icd": "N40.0",
      "onset": "2019",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Navarro",
      "start": "03/2013",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Navarro",
      "start": "06/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Navarro",
      "start": "01/2022",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Tamsulosin 0.4mg QHS",
      "sig": "Take 1 capsule by mouth at bedtime",
      "prescriber": "Dr. Navarro",
      "start": "08/2019",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Navarro",
      "start": "02/2015",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa Drugs",
      "type": "Drug",
      "reaction": "Hives, facial swelling",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/20/2025",
      "bp": "142/88",
      "hr": 82,
      "rr": 18,
      "temp": "98.4°F",
      "spo2": "95%",
      "wt": "214 lbs",
      "ht": "5'11\"",
      "bmi": 29.8,
      "setting": "PCP Office"
    },
    {
      "date": "10/08/2024",
      "bp": "148/92",
      "hr": 78,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "96%",
      "wt": "218 lbs",
      "ht": "5'11\"",
      "bmi": 30.4,
      "setting": "PCP Office"
    },
    {
      "date": "07/15/2024",
      "bp": "138/84",
      "hr": 76,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "96%",
      "wt": "220 lbs",
      "ht": "5'11\"",
      "bmi": 30.7,
      "setting": "PCP Office"
    },
    {
      "date": "04/03/2024",
      "bp": "150/94",
      "hr": 80,
      "rr": 18,
      "temp": "98.8°F",
      "spo2": "95%",
      "wt": "222 lbs",
      "ht": "5'11\"",
      "bmi": 31,
      "setting": "Urgent Care"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Navarro, MD",
      "cc": "Diabetes follow-up",
      "hpi": "Mr. Williams presents for routine diabetes follow-up. Reports good medication compliance. Occasional nocturia x2-3 per night. Continues smoking approximately 1 pack per day despite counseling. Denies chest pain, dyspnea at rest.",
      "exam": "Alert, obese male. Lungs: scattered rhonchi bilaterally, clear with cough. CV: RRR, no murmurs. Ext: no edema. Feet: intact sensation, no ulcers.",
      "assessment": "1. T2DM — A1c 7.8%, above goal\n2. HTN — suboptimally controlled\n3. CKD 3a — stable\n4. Tobacco use disorder — active\n5. BPH — stable symptoms",
      "plan": "1. Increase metformin to 1000mg BID, recheck A1c in 3 months\n2. Continue current antihypertensives, dietary counseling\n3. Repeat BMP in 3 months for renal function\n4. Smoking cessation counseling — patient declines NRT at this time\n5. Continue tamsulosin"
    },
    {
      "id": "V002",
      "date": "04/03/2024",
      "type": "Urgent Care",
      "provider": "Dr. James Park, MD",
      "cc": "Upper respiratory infection",
      "hpi": "Patient presents with 5 days of nasal congestion, sore throat, and productive cough with yellow sputum. Low-grade fever to 100.2°F at home. No dyspnea, chest pain, or hemoptysis. History of smoking.",
      "exam": "Mildly ill-appearing. Oropharynx: mild erythema without exudate. TMs clear. Lungs: scattered rhonchi bilaterally, no wheezing or crackles. No respiratory distress.",
      "assessment": "1. Acute upper respiratory infection, likely viral",
      "plan": "1. Supportive care — fluids, rest\n2. Guaifenesin PRN for congestion\n3. Return if worsening dyspnea, high fever, or symptoms >10 days"
    },
    {
      "id": "V003",
      "date": "07/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Patricia Navarro, MD",
      "cc": "Routine follow-up",
      "hpi": "Returns for routine follow-up. Reports increased morning cough productive of white-gray sputum over the past several months, attributed to smoking. No weight loss, night sweats, or hemoptysis. Denies exertional dyspnea beyond his baseline.",
      "exam": "Lungs: diminished breath sounds at bases bilaterally, scattered rhonchi. CV: RRR. Ext: trace pedal edema bilaterally.",
      "assessment": "1. Chronic cough — likely smoking-related, consider spirometry\n2. T2DM — improving\n3. Mild peripheral edema — new finding, monitor",
      "plan": "1. Order spirometry to assess for COPD\n2. Continue smoking cessation counseling\n3. Recheck in 3 months, repeat labs"
    }
  ],
  "labs": [
    {
      "date": "01/20/2025",
      "time": "09:15 AM",
      "orderedBy": "Dr. Navarro",
      "collected": "01/20/2025 09:30 AM",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-041837",
      "status": "Final",
      "specimenType": "Serum/Plasma",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "162",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "28",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.5",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "48",
              "unit": "mL/min/1.73m2",
              "range": ">60",
              "flag": "L"
            },
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.6",
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
              "test": "CO2",
              "value": "24",
              "unit": "mEq/L",
              "range": "21-31",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.2",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "Total Protein",
              "value": "7.1",
              "unit": "g/dL",
              "range": "6.0-8.3",
              "flag": ""
            },
            {
              "test": "Albumin",
              "value": "3.8",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": ""
            },
            {
              "test": "AST",
              "value": "24",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            },
            {
              "test": "ALT",
              "value": "28",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "Alk Phos",
              "value": "78",
              "unit": "U/L",
              "range": "44-147",
              "flag": ""
            },
            {
              "test": "Total Bilirubin",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": ""
            }
          ]
        },
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            {
              "test": "Hemoglobin A1c",
              "value": "7.8",
              "unit": "%",
              "range": "<5.7",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/03/2024",
      "study": "CHEST X-RAY PA AND LATERAL",
      "accession": "IMG-2024-19274",
      "status": "FINAL",
      "orderedBy": "Dr. James Park, MD",
      "readBy": "Dr. Anita Sharma, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Cough, smoker, rule out infiltrate",
      "technique": "PA and lateral chest radiographs obtained.",
      "findings": "Heart size is at the upper limits of normal. Mediastinal contours are unremarkable. Lungs demonstrate mild hyperinflation with flattening of the diaphragms. No focal consolidation, effusion, or pneumothorax. Scattered calcified granulomas in the right upper lobe, likely sequelae of prior granulomatous disease. Mild degenerative changes of the thoracic spine.",
      "impression": "1. No acute cardiopulmonary disease.\n2. Mild hyperinflation suggesting chronic obstructive airway disease.\n3. Calcified granulomas, right upper lobe — benign, stable appearance.",
      "dictated": "04/03/2024 02:15 PM",
      "verified": "04/03/2024 04:30 PM"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluad Quadrivalent, 65+)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL9821A",
      "mfr": "Seqirus"
    },
    {
      "vaccine": "COVID-19 (Pfizer-BioNTech, Updated 2024-2025)",
      "date": "10/08/2024",
      "site": "Right deltoid IM",
      "lot": "GW1842",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "03/15/2022",
      "site": "Left deltoid IM",
      "lot": "AC14B108AB",
      "mfr": "GSK"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "01/20/2025",
      "site": "Right deltoid IM",
      "lot": "PV2025A",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (Dose 2 of 2)",
      "date": "06/10/2023",
      "site": "Left deltoid IM",
      "lot": "7SHXR01",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Lung cancer (diagnosed age 68, deceased age 71), COPD, HTN",
    "Mother: Type 2 diabetes, hypertension, alive age 88",
    "Brother: COPD, current smoker, age 70",
    "Sister: Healthy, age 62",
    "No family history of DVT/PE or bleeding disorders"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired warehouse supervisor (35 years). Occupational dust exposure."
    ],
    [
      "Marital",
      "Married, lives with wife"
    ],
    [
      "Tobacco",
      "Active smoker — 1 PPD x 40 years (40 pack-years). Multiple quit attempts, returns to smoking."
    ],
    [
      "Alcohol",
      "Social — 2-3 beers on weekends"
    ],
    [
      "Drugs",
      "Denies illicit drug use"
    ],
    [
      "Exercise",
      "Sedentary. Walks to mailbox. Limited by dyspnea on exertion."
    ],
    [
      "Housing",
      "Single-story home, Riverside, FL. Central A/C. No stairs."
    ],
    [
      "Safety",
      "Wears seatbelt. No firearms in home."
    ],
    [
      "Advance Directive",
      "Full code. No advance directive on file. Wife is healthcare proxy."
    ]
  ],
  "meta": {
    "caseId": "pneumonia",
    "diagnosis": "Community-Acquired Pneumonia",
    "acuity": 3,
    "presentation": "Shortness of Breath",
    "category": "pulmonary"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus appears tired and mildly anxious about his worsening symptoms over the past few days. He's cooperative but somewhat defensive about his smoking habit, showing mild distress when breathing deeply during conversation.",
    "interviewQuestions": [
      "When did your shortness of breath and cough first start?",
      "Can you describe what your cough sounds like and if you're bringing anything up?",
      "What makes your shortness of breath worse or better?",
      "On a scale of 1-10, how would you rate your breathing difficulty?",
      "Have you had any fever, chills, or night sweats?",
      "Any chest pain with breathing or coughing?",
      "Have you noticed any changes in your sputum color or amount?",
      "Any recent weight loss or decreased appetite?",
      "Have you been around anyone who's been sick recently?",
      "How has this affected your daily activities?",
      "Any leg swelling or difficulty lying flat at night?",
      "Have you had pneumonia or similar lung infections before?",
      "Any recent travel or hospitalization?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you explain that differently?",
      "onset": "The cough started about 4-5 days ago, just a little dry cough at first. The shortness of breath really picked up yesterday, especially when I try to do anything around the house.",
      "character": "The cough is getting pretty nasty - started dry but now I'm bringing up thick, yellowish-green stuff. Sometimes it's got streaks that look rusty colored.",
      "location": "The shortness of breath is just general - feels like I can't get enough air. Sometimes I get a sharp pain on my right side when I cough hard.",
      "severity": "I'd say the breathing is about a 6 or 7 out of 10. I can't even walk to the mailbox without getting winded, and that's never been a problem before.",
      "aggravating": "Any activity makes it worse - walking, going up stairs, even just getting dressed this morning was tough. The cough gets worse when I lie down flat.",
      "relieving": "Sitting upright helps a little with the breathing. I tried some over-the-counter cough medicine but it's not doing much. Rest helps some.",
      "associated": "I've been feeling pretty run down and achy. Had some chills yesterday evening and felt feverish, though I didn't take my temperature. My appetite's been off too.",
      "denies": "No chest pain except when I cough really hard. No leg swelling. Haven't had any problems with my blood sugar that I've noticed.",
      "history": "I had bronchitis a couple years back, but nothing like this. With all my smoking, I usually have some cough in the mornings, but this is definitely different.",
      "medications": "Metformin 1000mg BID; Lisinopril 20mg daily; Amlodipine 5mg daily; Tamsulosin 0.4mg QHS; Aspirin 81mg daily",
      "allergies": "Sulfa Drugs",
      "family": "My dad had lung problems - COPD and eventually lung cancer. My brother's got COPD too and he's still smoking like me. That's part of why I keep trying to quit.",
      "social": "I worked in warehouses for 35 years, lots of dust exposure. I'm still smoking about a pack a day - I know I should quit. I have a couple beers on weekends but nothing heavy. My wife's been after me to see the doctor about this cough."
    },
    "examManeuvers": [
      "General appearance and respiratory distress assessment",
      "Vital signs including oxygen saturation",
      "Pulmonary inspection for accessory muscle use",
      "Chest percussion",
      "Pulmonary auscultation",
      "Cardiac auscultation",
      "Assessment for jugular venous distension",
      "Lower extremity edema examination",
      "Lymph node palpation",
      "Abdominal examination for hepatomegaly"
    ],
    "examFindings": {
      "General appearance and respiratory distress assessment": "Appears mildly ill and fatigued, sitting upright, occasional productive cough during exam, no acute distress at rest",
      "Vital signs including oxygen saturation": "BP 142/88, HR 82, RR 22, Temp 100.2°F (rechecked), SpO2 95% on room air",
      "Pulmonary inspection for accessory muscle use": "Increased respiratory rate, mild use of accessory muscles with deep inspiration, no cyanosis",
      "Chest percussion": "Dullness to percussion over right lower lobe posteriorly",
      "Pulmonary auscultation": "Decreased breath sounds right lower lobe with inspiratory crackles, scattered rhonchi bilaterally, no wheezing",
      "Cardiac auscultation": "Regular rate and rhythm, no murmurs, rubs, or gallops",
      "Assessment for jugular venous distension": "JVP not elevated, no jugular venous distension",
      "Lower extremity edema examination": "No peripheral edema, distal pulses intact",
      "Lymph node palpation": "No palpable cervical, supraclavicular, or axillary lymphadenopathy",
      "Abdominal examination for hepatomegaly": "Soft, non-tender, no hepatosplenomegaly"
    },
    "ddxTargets": [
      "Community-Acquired Pneumonia (correct diagnosis)",
      "Acute exacerbation of COPD",
      "Lung cancer with post-obstructive pneumonia",
      "Pulmonary embolism",
      "Acute myocardial infarction",
      "Viral upper respiratory infection",
      "Congestive heart failure exacerbation"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on diabetes follow-up visit and missing acute respiratory symptoms, or focusing solely on smoking history and assuming COPD",
      "prematureClosure": "May stop at simple bronchitis diagnosis given smoking history without fully evaluating for pneumonia with fever and focal findings",
      "availabilityBias": "Recent cases of COPD exacerbation or viral respiratory infections might overshadow bacterial pneumonia consideration"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities for dyspnea and cough in a smoker. As you interview the patient, pay particular attention to the timeline of symptom development, associated symptoms like fever, and any focal symptoms that might help you distinguish between these diagnoses. What specific questions will help you differentiate between infectious and non-infectious causes?",
      "phase5": "Your history reveals an acute presentation with productive cough and systemic symptoms, while your exam shows focal findings. How do these findings help you prioritize your differential diagnosis? What's the significance of the percussion and auscultation findings in the context of his presenting symptoms?",
      "finalDebrief": "This case illustrates how community-acquired pneumonia can present in a patient with multiple comorbidities. The key differentiating features were the acute onset, fever, productive cough with purulent sputum, and focal consolidation on exam. How did the patient's smoking history and multiple comorbidities influence your diagnostic reasoning? What red flags helped distinguish this from a simple viral illness or COPD exacerbation?"
    }
  }
};
