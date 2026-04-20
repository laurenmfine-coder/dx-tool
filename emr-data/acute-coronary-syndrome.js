
window.EMR_DATA = {
  "patient": {
    "name": "Harold Desmond",
    "dob": "03/22/1958",
    "age": 67,
    "sex": "Male",
    "mrn": "RDX-2025-40217",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B",
    "pcp": "Dr. Renee Augustin, MD",
    "pharmacy": "Walgreens \u2014 2701 Stirling Rd, Hollywood, FL",
    "language": "English, Haitian Creole",
    "race": "Black (Haitian American)",
    "address": "1488 N 56th Ave, Hollywood, FL 33021",
    "phone": "(954) 555-3017",
    "email": "h.desmond58@email.com",
    "emergencyContact": {
      "name": "Marie-Claire Desmond (Wife)",
      "phone": "(954) 555-3024"
    },
    "chiefComplaint": "Shortness of breath on exertion"
  },
  "problems": [
    {
      "problem": "NSTEMI \u2014 dyspnea-predominant, anginal equivalent",
      "icd": "I21.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Dorothy Williams, 67F \u2014 T2DM, hypertension, smoker. Dyspnea at rest x3 hours, no chest pain. Diaphoretic. ECG: ST depression V4-V6. Troponin rising."
    },
    {
      "problem": "T2DM \u2014 predisposes to silent/atypical MI presentation",
      "icd": "E11.9",
      "onset": "2015",
      "status": "Active",
      "notes": "Diabetic neuropathy reduces pain signal \u2192 dyspnea, fatigue, nausea as ACS equivalents. High-risk feature."
    },
    {
      "problem": "Prior PCI \u2014 stent thrombosis risk if antiplatelet stopped",
      "icd": "Z95.5",
      "onset": "2022",
      "status": "Active",
      "notes": "LAD drug-eluting stent placed 2022. Dual antiplatelet continued. In-stent restenosis on differential."
    }
  ],
  "medications": [
    {
      "name": "Aspirin 325mg loading then 81mg daily",
      "sig": "Dual antiplatelet loading. COX-1 inhibition prevents thromboxane-mediated platelet aggregation.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 loading"
    },
    {
      "name": "Ticagrelor 180mg loading then 90mg BID",
      "sig": "P2Y12 inhibitor \u2014 preferred over clopidogrel for NSTEMI (faster onset, reversible binding, superior outcomes in PLATO trial).",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 1,
      "status": "Active \u2014 loading"
    },
    {
      "name": "Heparin UFH 60 units/kg bolus + infusion",
      "sig": "Anticoagulation prevents further clot propagation. aPTT target 60-100 seconds. Bridge to PCI.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 infusion"
    },
    {
      "name": "Early invasive strategy \u2014 cath within 24 hours",
      "sig": "NSTEMI with high TIMI risk score \u2192 early PCI within 24 hours (not delayed >72h). TIMI score: age >65, prior CAD, ST deviation, positive troponin, 3+ risk factors.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Scheduled"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfonamides",
      "type": "Drug",
      "reaction": "Diffuse maculopapular rash",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Shellfish",
      "type": "Food",
      "reaction": "Lip swelling, urticaria",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/15/2026",
      "bp": "168/94",
      "hr": 98,
      "rr": 22,
      "temp": "98.4\u00b0F",
      "spo2": "93%",
      "wt": "232 lbs",
      "ht": "5'10\"",
      "bmi": 33.3,
      "setting": "ED"
    },
    {
      "date": "12/10/2025",
      "bp": "158/92",
      "hr": 78,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "96%",
      "wt": "230 lbs",
      "ht": "5'10\"",
      "bmi": 33,
      "setting": "PCP Office"
    },
    {
      "date": "09/08/2025",
      "bp": "162/96",
      "hr": 82,
      "rr": 18,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "228 lbs",
      "ht": "5'10\"",
      "bmi": 32.7,
      "setting": "PCP Office"
    },
    {
      "date": "06/05/2025",
      "bp": "154/88",
      "hr": 76,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "226 lbs",
      "ht": "5'10\"",
      "bmi": 32.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Renee Augustin, MD",
      "cc": "Routine follow-up, diabetes management",
      "hpi": "67M with T2DM, HTN, CKD 3a presents for quarterly check. Reports increasing fatigue over past 2 months. Notes occasional exertional dyspnea when climbing stairs, which he attributes to deconditioning and weight. Denies chest pain. A1c up to 8.9 from 7.8 six months ago. Reports poor dietary adherence over holidays.",
      "exam": "NAD, obese habitus. CV: RRR, no m/r/g. Lungs: CTAB. Ext: 1+ pedal edema bilat, diminished DP pulses bilat. Neuro: decreased monofilament sensation bilateral feet.",
      "assessment": "1. T2DM \u2014 worsening control, A1c 8.9\n2. HTN \u2014 suboptimally controlled\n3. CKD 3a \u2014 stable\n4. Exertional dyspnea \u2014 likely deconditioning vs cardiac; warrants workup",
      "plan": "1. Add glipizide 10mg BID; reinforce dietary counseling; refer to diabetes educator\n2. Continue current antihypertensives; recheck in 4 weeks\n3. Order stress test given new exertional dyspnea + multiple cardiac risk factors\n4. Labs: CMP, CBC, HbA1c, lipid panel, BNP"
    },
    {
      "id": "V002",
      "date": "09/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Renee Augustin, MD",
      "cc": "Follow-up HTN, diabetes",
      "hpi": "67M presents for routine follow-up. A1c improved to 7.8 from 8.2. BP remains elevated at 162/96. Reports good medication adherence but sedentary lifestyle since retiring. Denies chest pain, dyspnea, or edema at this visit.",
      "exam": "NAD. CV: RRR, no m/r/g. Lungs: CTAB. Ext: trace edema bilat. ABI 0.78 bilat.",
      "assessment": "1. T2DM \u2014 improving\n2. HTN \u2014 uncontrolled on triple therapy\n3. PAD \u2014 stable, ABI unchanged",
      "plan": "1. Continue current DM regimen\n2. Uptitrate atorvastatin to 80mg for LDL 142\n3. Reinforce exercise counseling\n4. Return 3 months"
    },
    {
      "id": "V003",
      "date": "03/15/2025",
      "type": "Urgent Care",
      "provider": "Dr. Kevin Park, DO",
      "cc": "Left calf pain with walking",
      "hpi": "66M presents with 3-week history of left calf cramping with walking 2 blocks, relieved by rest. No rest pain. No skin changes. Known diabetic with HTN. Smoker until 5 years ago.",
      "exam": "Left calf non-tender, no erythema/swelling. DP pulse diminished bilat, more on left. ABI ordered.",
      "assessment": "1. Intermittent claudication \u2014 likely PAD given risk factor profile",
      "plan": "1. ABI ordered \u2014 results: 0.78 bilat\n2. Refer back to PCP for PAD management\n3. Encourage walking program\n4. Smoking cessation confirmed"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "ACS Workup",
      "results": [
        {
          "test": "Troponin I (high-sensitivity) \u2014 first",
          "value": "0.42",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "Troponin I \u2014 3 hours later",
          "value": "2.8",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "ECG",
          "value": "ST depression 1.5mm V4-V6, T-wave inversions",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "BNP",
          "value": "380",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "LDL",
          "value": "142",
          "unit": "mg/dL",
          "ref": "<70 for CAD",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Chest X-Ray",
      "findings": "Mild pulmonary vascular congestion. No frank pulmonary edema. No pneumothorax. Cardiomegaly.",
      "impression": "Pulmonary vascular congestion consistent with elevated LV filling pressures."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8804",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Moderna)",
      "date": "10/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-1120",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap",
      "date": "03/2022",
      "site": "Left deltoid IM",
      "lot": "TD22-440",
      "mfr": "GSK"
    },
    {
      "vaccine": "Pneumovax 23",
      "date": "11/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-661",
      "mfr": "Merck"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "05/2024",
      "site": "Right deltoid IM",
      "lot": "SX24-218",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "07/2024",
      "site": "Right deltoid IM",
      "lot": "SX24-390",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: MI at age 62 (deceased at 64 from second MI)",
    "Mother: T2DM, HTN, CVA at age 74, alive at 88",
    "Brother: T2DM, coronary stenting at age 59, alive at 64",
    "Sister: Hyperlipidemia, alive at 70"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired postal worker (37 years); sedentary since retirement 2023"
    ],
    [
      "Marital",
      "Married 40 years"
    ],
    [
      "Tobacco",
      "Former smoker \u2014 20 pack-years; quit 2019"
    ],
    [
      "Alcohol",
      "Occasional \u2014 1-2 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal \u2014 walks to mailbox; limited by claudication and fatigue"
    ],
    [
      "Housing",
      "Lives with wife in single-family home; one-story"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; no firearms in home"
    ],
    [
      "Advance Directive",
      "DPOA designated (wife) \u2014 no formal living will"
    ]
  ],
  "meta": {
    "caseId": "acute-coronary-syndrome",
    "diagnosis": "Non-ST-Elevation ACS (NSTEMI \u2014 Dyspnea-Predominant, Diabetic Anginal Equivalent)",
    "acuity": 2,
    "presentation": "Shortness of Breath",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Harold appears mildly anxious but cooperative, initially minimizing his symptoms and attributing them to being \"out of shape\" since retirement. He becomes more engaged when asked specific questions about his activities, though he seems hesitant to admit the extent of his limitations.",
    "interviewQuestions": [
      "Can you describe exactly when you first noticed the shortness of breath?",
      "What specific activities trigger your breathing difficulty?",
      "Do you experience any chest discomfort, pressure, or pain with the shortness of breath?",
      "Have you noticed any arm, jaw, or back discomfort during these episodes?",
      "Do you get short of breath at rest or only with activity?",
      "Have you experienced any nausea, sweating, or dizziness with these episodes?",
      "How many stairs can you climb before becoming short of breath?",
      "Have you had any swelling in your legs or feet recently?",
      "Are you sleeping well, or do you wake up short of breath at night?",
      "Have you had any recent weight gain?",
      "When was your last blood sugar check and what were the results?",
      "Have you been taking all your medications as prescribed?",
      "Have you ever had symptoms like this before?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Can you be more specific?",
      "onset": "I first noticed it about 2 months ago, maybe a little longer. It started gradually - I thought I was just getting winded because I haven't been as active since I retired last year.",
      "character": "It's hard to catch my breath, like I can't get enough air in. Sometimes I feel like I need to take deeper breaths but can't quite fill my lungs completely.",
      "location": "It's mainly just the breathing difficulty. Sometimes I feel a little tightness across my chest, but nothing sharp or stabbing.",
      "severity": "I'd say it's about a 4 or 5 out of 10 when it happens. It's not terrible, but it definitely stops me from doing what I want to do.",
      "aggravating": "Definitely when I go up stairs - I can barely make it halfway up our staircase now. Also when I'm doing yard work or walking uphill.",
      "relieving": "If I sit down and rest for a few minutes, it gets better. I haven't really tried anything else.",
      "associated": "I've been more tired than usual, especially in the afternoons. Sometimes I feel a little sweaty when I get short of breath, but I figured that was just from the exertion.",
      "denies": "No sharp chest pain, no palpitations or racing heart that I've noticed. No leg swelling or waking up at night gasping for air.",
      "history": "Nothing exactly like this before. I've always been able to handle stairs and walking fine until recently.",
      "medications": "Metformin 1000mg BID; Glipizide 10mg BID; Lisinopril 40mg daily; Amlodipine 10mg daily; Hydrochlorothiazide 25mg daily; Atorvastatin 80mg QHS; Aspirin 81mg daily; Gabapentin 300mg TID",
      "allergies": "Sulfonamides, Shellfish",
      "family": "My father had two heart attacks - the first one when he was 62, and the second one killed him at 64. My brother had to get stents in his heart when he was 59. My mother had a stroke but she's still alive.",
      "social": "I worked for the postal service for 37 years, just retired in 2023. I'm married 40 years. I used to smoke about a pack a day for 20 years but quit in 2019. I have a couple beers on weekends, nothing heavy."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Assessment for jugular venous distension",
      "Examination for peripheral edema",
      "Carotid pulse assessment",
      "Assessment of peripheral pulses",
      "Abdominal examination for hepatomegaly",
      "Skin examination for diaphoresis or cyanosis",
      "Neurological assessment including diabetic neuropathy evaluation"
    ],
    "examFindings": {
      "Cardiac auscultation": "Regular rate and rhythm, no murmurs, rubs, or gallops appreciated. S1 and S2 normal.",
      "Pulmonary auscultation": "Bilateral breath sounds clear to auscultation, no rales, wheezes, or rhonchi. No increased work of breathing at rest.",
      "Assessment for jugular venous distension": "JVD not elevated, estimated at 6 cm H2O.",
      "Examination for peripheral edema": "No lower extremity edema present bilaterally. No sacral edema.",
      "Carotid pulse assessment": "Carotid upstrokes normal bilaterally, no bruits appreciated.",
      "Assessment of peripheral pulses": "Dorsalis pedis and posterior tibial pulses diminished bilaterally, consistent with known PAD.",
      "Abdominal examination for hepatomegaly": "Abdomen soft, non-tender, no hepatosplenomegaly or masses palpated.",
      "Skin examination for diaphoresis or cyanosis": "Skin warm and dry, no cyanosis or pallor. No acute distress.",
      "Neurological assessment including diabetic neuropathy evaluation": "Decreased sensation to monofilament testing in stocking distribution bilaterally, consistent with known diabetic neuropathy."
    },
    "ddxTargets": [
      "NSTEMI \u2014 dyspnea-predominant presentation (correct)",
      "Acute decompensated heart failure \u2014 BNP elevated and some congestion, but troponin rise and ECG changes = ACS as the driver",
      "Type 2 MI from demand ischemia \u2014 no clear precipitant here; Type 1 from plaque rupture more likely",
      "Pulmonary embolism \u2014 may have ST changes; troponin pattern + ECG changes here more consistent with ACS",
      "Unstable angina \u2014 no troponin rise; troponin rising = NSTEMI not UA",
      "Esophageal spasm \u2014 can mimic angina; no ECG changes or troponin rise expected"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on deconditioning given recent retirement and patient's own attribution, missing the atypical anginal equivalent presentation in a diabetic patient",
      "prematureClosure": "May stop workup after normal lung exam and attribute symptoms to deconditioning without considering cardiac causes in high-risk diabetic patient",
      "availabilityBias": "Recent cases of simple deconditioning or respiratory causes may overshadow consideration of ACS presenting as dyspnea in diabetic patients"
    },
    "coachPrompts": {
      "phase2": "This patient has multiple cardiovascular risk factors and is presenting with exertional dyspnea. What are you thinking about the significance of his diabetes in how cardiac conditions might present? What key historical points will help you differentiate between your top differentials?",
      "phase5": "Your exam doesn't reveal obvious heart failure signs, but this patient has classic risk factors for coronary disease. How does diabetic neuropathy potentially alter the presentation of acute coronary syndromes? What's your next step in evaluation given his risk profile and symptoms?",
      "finalDebrief": "This case illustrates how ACS can present as an 'anginal equivalent' in diabetic patients, where dyspnea replaces typical chest pain due to cardiac neuropathy. Notice how the gradual onset and attribution to deconditioning could easily lead to anchoring bias. The key was recognizing the high pretest probability for coronary disease in this patient with diabetes, family history, and multiple risk factors.",
      "final": "Diagnosis: NSTEMI \u2014 dyspnea-predominant. Key learning: (1) Diabetic anginal equivalents: up to 40% of MIs in diabetic patients present without chest pain. Dyspnea, diaphoresis, fatigue, nausea/vomiting, or syncope are classic anginal equivalents. A high index of suspicion is mandatory for all diabetic patients with acute cardiorespiratory symptoms. (2) NSTEMI vs UA: both have ECG changes without ST elevation. Troponin rise distinguishes NSTEMI (positive) from UA (negative). (3) TIMI Risk Score (0-7): 7 variables (age \u226565, \u22653 CAD risk factors, prior coronary stenosis, ST deviation, \u22652 anginal events in 24h, aspirin use in past 7 days, elevated cardiac markers). Score \u22653 \u2192 early invasive strategy. (4) P2Y12 inhibitor choice: ticagrelor > clopidogrel for NSTEMI based on PLATO trial (reduced MACE, no increase in bleeding). Prasugrel used if PCI is definitive. (5) Timing of invasive strategy: immediate (<2h) for very high-risk features (ongoing ischemia, hemodynamic instability, sustained VT). Early (<24h) for high TIMI score. Delayed (<72h) for low-risk."
    }
  }
};
