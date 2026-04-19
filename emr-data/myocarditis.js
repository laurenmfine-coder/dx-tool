// Virtual EMR Case: Acute Myocarditis
// Variant: myocarditis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Jean-Baptiste",
    "patientHPI": "I've had this cold for about five days now - stuffy nose, scratchy throat, and this annoying dry cough that won't go away. I had a fever at home that got up to 100 degrees, and my whole body has been aching. I'm training for a half-marathon so I've been pushing through and still going on my runs, but I'm feeling pretty wiped out.",
    "dob": "11/04/1999",
    "age": 25,
    "sex": "Male",
    "mrn": "RDX-2025-58264",
    "pronouns": "He/Him",
    "insurance": "Cigna HMO",
    "pcp": "Dr. Patricia Gomez, MD",
    "pharmacy": "Walgreens — 3100 Broward Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black/Haitian American",
    "address": "7529 Jasmine Way, Minneapolis, MN 55411",
    "phone": "(954) 555-3918",
    "email": "m.jeanbaptiste99@email.com",
    "emergencyContact": {
      "name": "Marie Jean-Baptiste (Mother)",
      "phone": "(954) 555-3044"
    },
    "chiefComplaint": "Chest pain and fatigue"
  },
  "problems": [
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2015",
      "status": "Active",
      "notes": "Spring and fall exacerbations"
    },
    {
      "problem": "Recent Upper Respiratory Infection",
      "icd": "J06.9",
      "onset": "2025",
      "status": "Resolved",
      "notes": "Viral URI two weeks prior to current presentation"
    },
    {
      "problem": "Exercise-Induced Asthma",
      "icd": "J45.990",
      "onset": "2012",
      "status": "Active",
      "notes": "Uses albuterol PRN before exercise"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Gomez",
      "start": "03/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Albuterol 90mcg MDI PRN",
      "sig": "Inhale 2 puffs by mouth 15 minutes before exercise as needed",
      "prescriber": "Dr. Gomez",
      "start": "09/2018",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Fluticasone nasal spray 50mcg",
      "sig": "2 sprays each nostril once daily during allergy season",
      "prescriber": "Dr. Gomez",
      "start": "04/2022",
      "refills": 2,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/10/2025",
      "bp": "112/68",
      "hr": 62,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "185 lbs",
      "ht": "6'1\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "08/15/2024",
      "bp": "118/72",
      "hr": 58,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "183 lbs",
      "ht": "6'1\"",
      "bmi": 24.1,
      "setting": "PCP Office"
    },
    {
      "date": "02/20/2024",
      "bp": "116/70",
      "hr": 60,
      "rr": 12,
      "temp": "98.2°F",
      "spo2": "100%",
      "wt": "181 lbs",
      "ht": "6'1\"",
      "bmi": 23.9,
      "setting": "PCP Office"
    },
    {
      "date": "08/10/2023",
      "bp": "114/68",
      "hr": 56,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "180 lbs",
      "ht": "6'1\"",
      "bmi": 23.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Gomez, MD",
      "cc": "Cough and congestion x 5 days",
      "hpi": "25-year-old male presenting with 5 days of nasal congestion, sore throat, nonproductive cough, low-grade fever (100.2°F at home), and myalgias. No chest pain, shortness of breath, or rash. Currently afebrile in clinic. Denies sick contacts. Training for half-marathon and has continued running through symptoms.",
      "exam": "General: NAD. HEENT: Mild pharyngeal erythema, no exudates, no tonsillar enlargement. TMs clear. Neck: Supple, no LAD. Lungs: CTAB. CV: RRR, no murmurs. Abdomen: Soft, NT.",
      "assessment": "1. Acute upper respiratory infection — likely viral\n2. Exercise-induced asthma — stable",
      "plan": "1. Supportive care: rest, fluids, acetaminophen PRN for fever/myalgias\n2. Advised to reduce exercise intensity until symptoms resolve\n3. RTC if symptoms worsen or develop chest pain, SOB, or high fever"
    },
    {
      "id": "V002",
      "date": "08/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Patricia Gomez, MD",
      "cc": "Annual physical — sports clearance",
      "hpi": "25-year-old healthy male presenting for annual exam and sports physical clearance. Active runner training for multiple races. No complaints. Good exercise tolerance. Denies syncope, chest pain, palpitations, or dyspnea with exertion.",
      "exam": "General: Fit-appearing male, NAD. CV: RRR, no murmurs, S1/S2 normal, no S3/S4. Lungs: CTAB. MSK: Full ROM all extremities. Neuro: A&O x3, CN II-XII intact.",
      "assessment": "1. Annual wellness exam — healthy\n2. Sports clearance — approved",
      "plan": "1. Continue current medications\n2. Routine labs obtained\n3. RTC 1 year or PRN"
    },
    {
      "id": "V003",
      "date": "02/20/2024",
      "type": "Urgent Care",
      "provider": "Dr. Michael Tran, MD",
      "cc": "Ankle sprain — right",
      "hpi": "24-year-old male who twisted right ankle while trail running. Immediate swelling and difficulty bearing weight. No pop or snap. No prior ankle injuries.",
      "exam": "MSK: Right ankle with mild lateral swelling, TTP over ATFL. Negative Ottawa rules. Negative squeeze test. Full ROM with discomfort on inversion.",
      "assessment": "1. Right ankle sprain — Grade I lateral",
      "plan": "1. RICE protocol, ACE wrap, ibuprofen 400mg q6h PRN x 5 days; limit running x 2 weeks; RTC if not improving"
    }
  ],
  "labs": [
    {
      "date": "08/15/2024",
      "time": "09:00",
      "orderedBy": "Dr. Patricia Gomez, MD",
      "collected": "08/15/2024 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-582640",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (12 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "82",
              "unit": "mg/dL",
              "range": "70-100",
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
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "141",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.3",
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
              "test": "CO2 (Bicarbonate)",
              "value": "26",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.6",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "ALT (SGPT)",
              "value": "24",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST (SGOT)",
              "value": "28",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "6.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "15.4",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "45.2",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "228",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            {
              "test": "Total Cholesterol",
              "value": "168",
              "unit": "mg/dL",
              "range": "<200",
              "flag": ""
            },
            {
              "test": "LDL Cholesterol",
              "value": "95",
              "unit": "mg/dL",
              "range": "<100",
              "flag": ""
            },
            {
              "test": "HDL Cholesterol",
              "value": "58",
              "unit": "mg/dL",
              "range": ">40",
              "flag": ""
            },
            {
              "test": "Triglycerides",
              "value": "76",
              "unit": "mg/dL",
              "range": "<150",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/10/2025",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2025-05826",
      "status": "FINAL",
      "orderedBy": "Dr. Patricia Gomez, MD",
      "readBy": "Dr. Lisa Moreno, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "25M with URI symptoms, cough. R/O pneumonia.",
      "technique": "PA and lateral views, upright, full inspiration.",
      "findings": "Heart: Normal size and configuration.\\n\\nMediastinum: Normal contours.\\n\\nLungs: Clear bilaterally. No focal consolidation, effusion, or pneumothorax.\\n\\nBones: No acute osseous abnormality.",
      "impression": "1. Normal chest radiograph.\\n2. No acute cardiopulmonary process.",
      "dictated": "01/10/2025 11:15",
      "verified": "01/10/2025 14:02"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "09/20/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-195",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2024-25)",
      "date": "10/05/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-762",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "HPV (Gardasil 9) — Series complete",
      "date": "2015",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal (Menactra)",
      "date": "2017",
      "site": "Right deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: Hypertension, T2DM, alive at 52",
    "Father: Healthy, alive at 55",
    "Brother: Asthma, age 22",
    "Paternal uncle: Sudden cardiac death at age 42 (cause unknown)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "IT support technician"
    ],
    [
      "Marital",
      "Single"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Occasional, 2-3 drinks/week socially"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Competitive recreational runner; trains 5-6x/week; half-marathon training"
    ],
    [
      "Housing",
      "Lives alone in apartment"
    ],
    [
      "Safety",
      "Denies concerns; wears seatbelt"
    ],
    [
      "Advance Directive",
      "None"
    ]
  ],
  "meta": {
    "caseId": "myocarditis",
    "diagnosis": "Acute Myocarditis",
    "acuity": 3,
    "presentation": "Chest Pain",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus appears mildly concerned but somewhat dismissive of his symptoms, attributing them to 'just a cold' and his training regimen. He's cooperative but tends to downplay the chest pain, focusing more on how it's affecting his running performance.",
    "interviewQuestions": [
      "Can you describe the chest pain in more detail?",
      "When did the chest pain first start?",
      "Does the chest pain radiate anywhere?",
      "What makes the chest pain better or worse?",
      "Have you had any shortness of breath?",
      "Tell me more about the fatigue you're experiencing",
      "Have you had any palpitations or irregular heartbeats?",
      "Any nausea, vomiting, or lightheadedness?",
      "How has this affected your exercise routine?",
      "Have you taken anything for these symptoms?",
      "Any family history of heart problems?",
      "Have you had any recent infections or illnesses?",
      "Any recent vaccinations or travel?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Can you ask it differently?",
      "onset": "The chest pain started about three days ago, right in the middle of this cold I've been fighting. At first I thought it was just from all the coughing.",
      "character": "It's like a sharp, stabbing pain right in the center of my chest. Sometimes it feels like pressure too, like someone's sitting on my chest.",
      "location": "Right here in the middle of my chest, behind my breastbone. Sometimes it seems to spread to my left shoulder a little.",
      "severity": "I'd say it's about a 6 out of 10 when it's bad. It's definitely affecting my runs - I had to stop twice yesterday because of it.",
      "aggravating": "It definitely gets worse when I exercise or even just walk up stairs. Deep breathing makes it worse too, and lying flat seems to bother it.",
      "relieving": "Sitting up and leaning forward seems to help a little. I tried some ibuprofen but it didn't do much.",
      "associated": "I've been really tired lately, more than usual even with my training. Had some body aches and this dry cough that won't quit. Oh, and I've felt a little dizzy a couple times.",
      "denies": "No, I haven't had any chest pain like this before. No sweating or nausea. Haven't noticed my heart racing or skipping beats.",
      "history": "Never had chest pain before. I've always been pretty healthy except for my asthma and allergies.",
      "medications": "Cetirizine 10mg daily; Albuterol 90mcg MDI PRN; Fluticasone nasal spray 50mcg",
      "allergies": "NKDA",
      "family": "My mom has high blood pressure and diabetes, but no heart attacks or anything like that in the family. My brother has asthma like me.",
      "social": "I work in IT support, so pretty sedentary job. I'm single, never smoked. I have maybe 2-3 drinks a week when I'm out with friends. No drugs. I run about 30 miles a week training for this half-marathon."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Assessment for JVD",
      "Assessment for peripheral edema",
      "Palpation of PMI",
      "Assessment of heart sounds with position changes",
      "Pericardial friction rub assessment",
      "Blood pressure in both arms",
      "Assessment for hepatomegaly",
      "Evaluation of extremity perfusion"
    ],
    "examFindings": {
      "Cardiac auscultation": "S1 and S2 present, S3 gallop noted, no murmurs appreciated",
      "Pulmonary auscultation": "Clear bilaterally, no rales or rhonchi",
      "Assessment for JVD": "Jugular veins not distended",
      "Assessment for peripheral edema": "No pedal edema present",
      "Palpation of PMI": "PMI displaced laterally to anterior axillary line, diffuse",
      "Assessment of heart sounds with position changes": "No significant change with position",
      "Pericardial friction rub assessment": "No friction rub appreciated",
      "Blood pressure in both arms": "BP equal bilaterally, 112/68",
      "Assessment for hepatomegaly": "Liver not palpable, no hepatomegaly",
      "Evaluation of extremity perfusion": "Extremities warm, pulses 2+ bilaterally"
    },
    "ddxTargets": [
      "Acute Myocarditis (correct diagnosis)",
      "Pericarditis",
      "Viral pleuritis",
      "Acute coronary syndrome",
      "Pulmonary embolism",
      "Costochondritis",
      "Exercise-induced asthma exacerbation"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'young athlete with recent URI' and dismissing cardiac causes, or focusing solely on respiratory symptoms from his known asthma",
      "prematureClosure": "May stop at costochondritis or exercise-induced asthma given his age and activity level without considering inflammatory cardiac conditions",
      "availabilityBias": "Recent cases of musculoskeletal chest pain in young patients may overshadow consideration of post-viral myocarditis"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities. Given that this is a 25-year-old athlete with recent URI and chest pain, what key historical features would help you differentiate between inflammatory conditions affecting the heart versus the chest wall? What questions might reveal the functional impact?",
      "phase5": "Interesting findings - you've noted an S3 gallop and displaced PMI in a young athlete with recent viral illness. How do these physical exam findings fit with your differential diagnosis? What does the absence of a friction rub tell you?",
      "finalDebrief": "This case highlights post-viral myocarditis, where recent URI in a young person leads to cardiac inflammation. The key was recognizing that chest pain plus fatigue in an athlete, especially with an S3 and displaced PMI, suggests more than just musculoskeletal pain. How did the physical findings help differentiate this from pericarditis or costochondritis?"
    }
  }
};
