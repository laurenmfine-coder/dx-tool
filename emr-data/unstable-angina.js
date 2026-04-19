// Virtual EMR Case: Unstable Angina
// Variant: unstable-angina | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Anthony Rizzo",
    "patientHPI": "Over the past week, I've had this heavy pressure in my chest a few times when I was working in my garden or going up the stairs. It feels like someone's sitting on my chest, and it goes down into my left arm. It's scary, but when I sit down and rest for about five or ten minutes, it goes away completely.",
    "dob": "12/03/1958",
    "age": 66,
    "sex": "Male",
    "mrn": "RDX-2025-60438",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Karen Hoffman, MD",
    "pharmacy": "CVS Pharmacy — 2700 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "5185 Cedar Blvd, Detroit, MI 48210",
    "phone": "(954) 555-5193",
    "email": "a.rizzo58@email.com",
    "emergencyContact": {
      "name": "Donna Rizzo (Wife)",
      "phone": "(954) 555-5240"
    },
    "chiefComplaint": "Chest pain"
  },
  "problems": [
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2006",
      "status": "Active",
      "notes": "Inconsistent medication compliance"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2010",
      "status": "Active",
      "notes": "Statin intolerant — tried atorvastatin and rosuvastatin with myalgias"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2018",
      "status": "Active",
      "notes": "Last A1c 7.6%"
    },
    {
      "problem": "Tobacco Use Disorder",
      "icd": "F17.210",
      "onset": "1976",
      "status": "Active",
      "notes": "Current smoker — 1 PPD x 48 years"
    },
    {
      "problem": "Obesity, Class I",
      "icd": "E66.01",
      "onset": "2015",
      "status": "Active",
      "notes": "BMI 32"
    },
    {
      "problem": "Erectile Dysfunction",
      "icd": "N52.9",
      "onset": "2022",
      "status": "Active",
      "notes": "On PDE5 inhibitor; likely vascular etiology"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Hoffman",
      "start": "03/2010",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Hoffman",
      "start": "06/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Ezetimibe 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Hoffman",
      "start": "02/2023",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Hoffman",
      "start": "11/2015",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Sildenafil 50mg PRN",
      "sig": "Take 1 tablet by mouth 1 hour before sexual activity as needed; max 1 dose/day",
      "prescriber": "Dr. Hoffman",
      "start": "04/2022",
      "refills": 1,
      "status": "PRN"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Hoffman",
      "start": "01/2020",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Atorvastatin",
      "type": "Drug",
      "reaction": "Severe myalgias, elevated CK",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Rosuvastatin",
      "type": "Drug",
      "reaction": "Myalgias",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/13/2025",
      "bp": "156/94",
      "hr": 84,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "224 lbs",
      "ht": "5'11\"",
      "bmi": 31.2,
      "setting": "PCP Office"
    },
    {
      "date": "07/22/2024",
      "bp": "150/90",
      "hr": 80,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "220 lbs",
      "ht": "5'11\"",
      "bmi": 30.7,
      "setting": "PCP Office"
    },
    {
      "date": "01/18/2024",
      "bp": "148/88",
      "hr": 78,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "218 lbs",
      "ht": "5'11\"",
      "bmi": 30.4,
      "setting": "PCP Office"
    },
    {
      "date": "07/10/2023",
      "bp": "144/86",
      "hr": 76,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "97%",
      "wt": "215 lbs",
      "ht": "5'11\"",
      "bmi": 30,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/13/2025",
      "type": "Primary Care",
      "provider": "Dr. Karen Hoffman, MD",
      "cc": "Follow-up: HTN, DM2; new complaint of chest pressure with exertion",
      "hpi": "66-year-old male presenting for routine chronic disease follow-up. Reports new onset of substernal chest pressure occurring 2-3 times in the past week during yard work and stair climbing. Pressure radiates to left arm and resolves within 5-10 minutes of rest. No rest pain yet. Also reports being more winded than usual. Admits to continued smoking (1 PPD), inconsistent lisinopril compliance ('runs out and waits a few days'), and sedentary lifestyle. BP above goal. Has gained 4 lbs since last visit.",
      "exam": "General: Obese male, NAD. CV: RRR, no murmurs or gallops, PMI non-displaced. Lungs: CTAB bilaterally. Abdomen: Obese, soft, NT. Ext: No edema, pulses 2+ bilateral DP/PT. Neuro: A&O x3.",
      "assessment": "1. New exertional angina — high-risk features given multiple CAD risk factors (DM, HTN, active smoking, hyperlipidemia, family history, obesity); urgent cardiology referral\n2. HTN — uncontrolled; medication non-compliance contributing\n3. T2DM — A1c 7.6%, suboptimal\n4. Active tobacco use — 48 pack-years; counseling on cessation",
      "plan": "1. URGENT cardiology referral; if chest pain at rest or worsening → ED immediately; start ASA 81mg daily (already on); discussed risk\n2. Refill lisinopril, add HCTZ 12.5mg if not improved at f/u; medication adherence counseling\n3. Increase metformin to 1000mg BID at next visit; dietary counseling\n4. Smoking cessation counseling; offered NRT, varenicline — patient declined ('not ready')"
    },
    {
      "id": "V002",
      "date": "07/22/2024",
      "type": "Primary Care",
      "provider": "Dr. Karen Hoffman, MD",
      "cc": "Routine follow-up: DM2, HTN",
      "hpi": "65-year-old male for chronic disease management. Admits to intermittent medication compliance. No chest pain, dyspnea, or edema. A1c improved to 7.6% from 8.0%. Still smoking 1 PPD. No exercise. Reports fatigue.",
      "exam": "General: Obese, NAD. CV: RRR. Lungs: CTAB. Ext: No edema.",
      "assessment": "1. T2DM — A1c improved slightly\n2. HTN — above goal\n3. Statin intolerance — on ezetimibe; LDL still elevated at 142\n4. Tobacco use — continued",
      "plan": "1. Continue metformin 500mg BID; reinforce diet/exercise\n2. Reinforce medication adherence for antihypertensives\n3. Consider PCSK9 inhibitor referral given statin intolerance and high-risk profile\n4. Smoking cessation counseling repeated"
    },
    {
      "id": "V003",
      "date": "01/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Karen Hoffman, MD",
      "cc": "Erectile dysfunction follow-up; routine labs",
      "hpi": "65-year-old male reporting adequate response to sildenafil 50mg. No priapism, visual changes, or headaches. Reminded to avoid use with nitrates. Discussed vascular risk factors as contributing to ED.",
      "exam": "General: NAD. GU: Deferred today. CV: RRR. Ext: No edema.",
      "assessment": "1. ED — improved on sildenafil; likely vasculogenic\n2. Multiple vascular risk factors — counseled on global vascular health",
      "plan": "1. Continue sildenafil 50mg PRN\n2. Routine labs ordered\n3. Reinforced cardiovascular risk reduction — smoking, weight, BP, glucose"
    }
  ],
  "labs": [
    {
      "date": "01/13/2025",
      "time": "08:30",
      "orderedBy": "Dr. Karen Hoffman, MD",
      "collected": "01/13/2025 07:50",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-060438",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "148",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "19",
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
              "value": "140",
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
              "value": "103",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "24",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.3",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "ALT (SGPT)",
              "value": "32",
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
          "name": "HEMOGLOBIN A1c",
          "results": [
            {
              "test": "HbA1c",
              "value": "7.6",
              "unit": "%",
              "range": "<5.7 normal; 5.7-6.4 prediabetes",
              "flag": "H"
            },
            {
              "test": "Est. Avg Glucose (eAG)",
              "value": "171",
              "unit": "mg/dL",
              "range": "—",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "8.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "15.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "47.0",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "232",
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
              "value": "248",
              "unit": "mg/dL",
              "range": "<200",
              "flag": "H"
            },
            {
              "test": "LDL Cholesterol",
              "value": "156",
              "unit": "mg/dL",
              "range": "<130",
              "flag": "H"
            },
            {
              "test": "HDL Cholesterol",
              "value": "34",
              "unit": "mg/dL",
              "range": ">40",
              "flag": "L"
            },
            {
              "test": "Triglycerides",
              "value": "290",
              "unit": "mg/dL",
              "range": "<150",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/13/2025",
      "study": "ECG — 12-LEAD",
      "accession": "IMG-2025-06044",
      "status": "FINAL",
      "orderedBy": "Dr. Karen Hoffman, MD",
      "readBy": "Dr. Karen Hoffman, MD",
      "facility": "ReasonDx Medical Center",
      "priority": "Routine",
      "clinical": "66M with new exertional chest pressure. R/O ischemia.",
      "technique": "Standard 12-lead electrocardiogram.",
      "findings": "Rate: 84 bpm. Rhythm: Normal sinus rhythm. Axis: Left axis deviation.\\n\\nPR interval: 180ms. QRS: 98ms. QTc: 420ms.\\n\\nST segments: No acute ST elevation or depression. Nonspecific T-wave flattening in leads V5-V6.\\n\\nLVH criteria: SV1 + RV5 = 38mm (borderline Sokolow-Lyon).",
      "impression": "1. Normal sinus rhythm with left axis deviation.\\n2. Nonspecific T-wave flattening V5-V6 — clinical correlation recommended.\\n3. Borderline voltage criteria for LVH.",
      "dictated": "01/13/2025 09:00",
      "verified": "01/13/2025 09:05"
    },
    {
      "date": "07/10/2023",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2023-06044",
      "status": "FINAL",
      "orderedBy": "Dr. Karen Hoffman, MD",
      "readBy": "Dr. Kenneth Patel, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "65M smoker with fatigue. R/O pulmonary pathology.",
      "technique": "PA and lateral views, upright.",
      "findings": "Heart: Upper limits of normal size.\\n\\nLungs: Clear bilaterally. No masses, consolidation, or effusion.\\n\\nMediastinum: Mildly unfolded aorta.\\n\\nBones: Degenerative changes thoracic spine.",
      "impression": "1. No acute cardiopulmonary abnormality.\\n2. Mildly unfolded aorta — atherosclerotic changes.",
      "dictated": "07/10/2023 11:20",
      "verified": "07/10/2023 14:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD355",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/05/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-901",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "07/2023",
      "site": "Left deltoid IM",
      "lot": "PN23-488",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "09/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-715",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "11/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-891",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: MI at age 52, CABG at 60, deceased at 71 (CHF)",
    "Mother: Hypertension, T2DM, alive at 88",
    "Brother: MI at age 55, alive at 68 with CAD",
    "Sister: Hyperlipidemia, alive at 63",
    "Son: Healthy, age 38"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Restaurant owner — high-stress, long hours, poor diet"
    ],
    [
      "Marital",
      "Married — 40 years"
    ],
    [
      "Tobacco",
      "Current smoker — 1 PPD x 48 years (48 pack-years); multiple failed quit attempts"
    ],
    [
      "Alcohol",
      "2-3 beers nightly"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Sedentary; no regular exercise program"
    ],
    [
      "Housing",
      "Lives with wife in single-family home"
    ],
    [
      "Safety",
      "Denies IPV; wears seatbelt"
    ],
    [
      "Advance Directive",
      "None — discussed, patient declined"
    ]
  ],
  "meta": {
    "caseId": "unstable-angina",
    "diagnosis": "Unstable Angina",
    "acuity": 2,
    "presentation": "Chest Pain",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Anthony appears anxious and concerned about his symptoms, frequently rubbing his chest as he speaks. He's cooperative and forthcoming with information but shows visible worry about having a heart attack like his father and brother.",
    "interviewQuestions": [
      "Can you describe exactly what the chest pain feels like?",
      "When did these episodes first start occurring?",
      "What activities trigger the chest pain?",
      "How long does each episode typically last?",
      "On a scale of 1-10, how would you rate the pain intensity?",
      "Does the pain radiate anywhere else in your body?",
      "What helps relieve the chest pain?",
      "Have you had any shortness of breath, nausea, or sweating with these episodes?",
      "Have you ever experienced chest pain like this before?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Tell me about your family history of heart problems",
      "How much do you currently smoke and for how long?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Can you ask me differently? I'm really worried this might be my heart.",
      "onset": "It started about a week ago. The first time was when I was digging in my garden, and then it happened again going up the stairs at my restaurant.",
      "character": "It feels like a heavy pressure, like someone's sitting on my chest. It's this dull, crushing sensation that builds up gradually.",
      "location": "Right here in the center of my chest, and it goes down my left arm to about my elbow. Sometimes I feel it in my jaw too.",
      "severity": "I'd say it's about a 7 out of 10 when it's happening. It's definitely enough to make me stop what I'm doing completely.",
      "aggravating": "Physical activity brings it on - working in the garden, climbing stairs, carrying heavy things at the restaurant. Stress seems to make it worse too.",
      "relieving": "When I sit down and rest for about 5 to 10 minutes, it goes away completely. I haven't tried any medications for it yet.",
      "associated": "I do get a little short of breath when it happens, and I've noticed some sweating. No nausea or dizziness though.",
      "denies": "No chest pain at rest, no pain that's sharp or stabbing, no palpitations, no fainting episodes, no leg swelling.",
      "history": "Nothing exactly like this before. I've had some occasional indigestion, but this is definitely different and more concerning.",
      "medications": "Lisinopril 20mg daily; Metformin 500mg BID; Ezetimibe 10mg daily; Amlodipine 10mg daily; Sildenafil 50mg PRN; Aspirin 81mg daily",
      "allergies": "Atorvastatin, Rosuvastatin",
      "family": "My father had a heart attack at 52, needed bypass surgery at 60, and died at 71 from heart failure. My brother had a heart attack at 55 and still has heart disease. My mother has high blood pressure and diabetes.",
      "social": "I own a restaurant, so it's very stressful with long hours and I eat poorly. I've been smoking a pack a day for 48 years - I know I need to quit. I drink 2-3 beers every night to unwind."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Lung auscultation",
      "Carotid pulse examination",
      "Jugular venous pressure assessment",
      "Lower extremity edema check",
      "Abdominal examination",
      "Peripheral pulse examination",
      "Blood pressure measurement in both arms",
      "Heart rate and rhythm assessment",
      "Chest wall palpation for tenderness"
    ],
    "examFindings": {
      "Cardiac auscultation": "Regular rate and rhythm, normal S1 and S2, no murmurs, rubs, or gallops appreciated",
      "Lung auscultation": "Clear to auscultation bilaterally, no crackles, wheezes, or rhonchi",
      "Carotid pulse examination": "Carotid pulses 2+ bilaterally without bruits",
      "Jugular venous pressure assessment": "JVP normal at 6 cm H2O, no jugular venous distension",
      "Lower extremity edema check": "No peripheral edema in lower extremities",
      "Abdominal examination": "Soft, non-tender, no masses or organomegaly, normal bowel sounds",
      "Peripheral pulse examination": "Dorsalis pedis and posterior tibial pulses 2+ bilaterally",
      "Blood pressure measurement in both arms": "Right arm 156/94, left arm 152/92",
      "Heart rate and rhythm assessment": "Regular rhythm at 84 bpm, no irregular beats palpated",
      "Chest wall palpation for tenderness": "No chest wall tenderness or reproducible pain with palpation"
    },
    "ddxTargets": [
      "Unstable Angina (correct diagnosis)",
      "NSTEMI",
      "Stable Angina",
      "STEMI",
      "Aortic Dissection",
      "Gastroesophageal Reflux Disease",
      "Musculoskeletal Chest Pain"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the patient's diabetic history and assuming atypical presentation, or focusing solely on hypertension as cause of symptoms",
      "prematureClosure": "Risk of dismissing cardiac cause due to normal resting exam and assuming GERD given patient's lifestyle and alcohol use",
      "availabilityBias": "Strong family history may lead to overemphasis on CAD while missing other acute causes, or recent GERD cases may influence toward GI etiology"
    },
    "coachPrompts": {
      "phase2": "Before you interview Mr. Rizzo, consider his risk factors and family history. What key historical features will help you differentiate between cardiac and non-cardiac causes of chest pain? Think about the pattern that would be most concerning.",
      "phase5": "You've gathered significant information about Mr. Rizzo's exertional chest pain pattern. His normal resting exam doesn't rule out coronary artery disease. What does the constellation of his symptoms, risk factors, and family history suggest? How does this change your diagnostic priorities?",
      "finalDebrief": "This case highlights classic unstable angina in a high-risk patient. Notice how the new-onset exertional pattern with multiple risk factors trumped the normal resting exam. The key was recognizing that normal findings between episodes don't exclude unstable coronary syndromes, and this patient's risk profile demanded urgent evaluation."
    }
  }
};
