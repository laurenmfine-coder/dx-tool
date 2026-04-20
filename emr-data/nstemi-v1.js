
window.EMR_DATA = {
  "patient": {
    "name": "Giovanna DeLuca",
    "patientHPI": "I've been having this pressure in my chest on and off for about six hours now - it comes and goes but it's really bothering me and I've never felt anything quite like this before.",
    "dob": "03/06/1963",
    "age": "63",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-370242",
    "language": "English",
    "race": "Black/African American",
    "phone": "(314) 555-9653",
    "email": "giovanna.deluca@email.com",
    "address": "3563 S Halsted St, Louisville, KY 40202",
    "insurance": "Medicaid",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Kevin DeLuca",
      "phone": "(312) 555-4764",
      "relationship": "Partner"
    },
    "chiefComplaint": "Intermittent chest pressure for 6 hours",
    "diagnosis": "NSTEMI"
  },
  "problems": [
    {
      "problem": "NSTEMI \u2014 anterior distribution",
      "icd": "I21.19",
      "onset": "2024",
      "status": "Active",
      "notes": "Troponin 2.8 (rising), dynamic ST depression V2-V4, GRACE score 142 \u2014 early invasive strategy indicated"
    },
    {
      "problem": "Hypertension + hyperlipidemia + diabetes \u2014 risk factor burden",
      "icd": "I10",
      "onset": "2017",
      "status": "Active",
      "notes": "Three major modifiable CV risk factors \u2014 secondary prevention intensification required"
    },
    {
      "problem": "TIMI risk score 4 \u2014 intermediate-high",
      "icd": "I21.19",
      "onset": "2024",
      "status": "Active",
      "notes": "Age >65, ST deviation, positive cardiac markers, aspirin use x7 days = TIMI 4"
    }
  ],
  "medications": [
    {
      "name": "Aspirin 325mg loading THEN 81mg daily",
      "sig": "325mg chew immediately, then 81mg daily indefinitely",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Ticagrelor 180mg loading THEN 90mg BID (dual antiplatelet)",
      "sig": "180mg loading dose, then 90mg twice daily \u2014 PLATO trial: superior to clopidogrel",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Heparin infusion \u2014 weight-based protocol",
      "sig": "IV infusion \u2014 anticoagulation bridging to cath",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS (high-intensity)",
      "sig": "Take at bedtime \u2014 high-intensity statin for ACS",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metoprolol tartrate 25mg BID",
      "sig": "Take twice daily \u2014 beta-blockade post-ACS",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 4,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Anaphylaxis",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "148/88",
      "hr": "86",
      "rr": "18",
      "temp": "36.8\u00b0C",
      "spo2": "97%",
      "pain": "6/10",
      "bmi": "36",
      "weight": "72 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Intermittent chest pressure for 6 hours",
      "hpi": "Giovanna DeLuca is a 63-year-old female presenting with intermittent chest pressure for 6 hours. Past medical history includes Hypertension, Chronic Kidney Disease Stage 3, Type 2 Diabetes, Prior TIA. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "NSTEMI \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "NSTEMI Workup",
      "results": [
        {
          "test": "Troponin I (high-sensitivity) \u2014 0h",
          "value": "0.8",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "Troponin I (high-sensitivity) \u2014 3h",
          "value": "2.8",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "BNP",
          "value": "188",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        },
        {
          "test": "HbA1c",
          "value": "8.4",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "LDL",
          "value": "138",
          "unit": "mg/dL",
          "ref": "<70 for ACS",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "12-Lead ECG + Echocardiogram",
      "indication": "Chest pain, rising troponin \u2014 evaluate ischemia",
      "findings": "ECG: Sinus tachycardia 96 bpm. Dynamic ST depression 1.5mm V2-V4, leads I and aVL. No ST elevation. No pathological Q waves. Echo: EF 48% (reduced from prior 62%). Anterior wall hypokinesis. No significant valvular disease.",
      "impression": "NSTEMI with dynamic anterior ST changes. Reduced EF from prior study \u2014 anterior territory in jeopardy. GRACE score 142 \u2014 high risk, early invasive strategy (cath within 24h) indicated."
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
    "Mother: MI at age 65",
    "Father: Stroke at age 70"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Occupation",
      "Retired teacher"
    ],
    [
      "Living",
      "Lives alone, independent ADLs"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Ms. DeLuca appears anxious and concerned about her symptoms, frequently touching her chest while speaking. She is forthcoming with information but seems worried this might be related to her mother's heart attack, though she tries to downplay the severity of her discomfort.",
    "interviewQuestions": [
      "Can you describe exactly what this chest pressure feels like?",
      "Where specifically do you feel the pressure, and does it go anywhere else?",
      "On a scale of 1-10, how would you rate the discomfort?",
      "What were you doing when this first started?",
      "Does anything make the pressure better or worse?",
      "Have you noticed any shortness of breath, nausea, or sweating?",
      "How long does each episode last when it comes on?",
      "Have you ever experienced anything like this before?",
      "Are you having any arm pain, jaw pain, or back pain?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Has anyone in your family had heart problems?",
      "Have you been more stressed or active than usual lately?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - could you explain that differently?",
      "onset": "It started around 2 PM today while I was doing some light cleaning around the house. It just came on gradually at first.",
      "character": "It feels like someone is pressing down on my chest, like a heavy weight or tight band across it. Not really sharp, just this constant pressure.",
      "location": "Right here in the center of my chest, and sometimes I feel it going up toward my left shoulder and down my left arm a little.",
      "severity": "I'd say it's about a 6 out of 10 when it's at its worst. It's uncomfortable enough that I had to sit down and it made me worry.",
      "aggravating": "It seems to get worse when I try to do anything physical, even just walking up my stairs makes it more noticeable.",
      "relieving": "Resting seems to help a little bit, and I tried some antacids thinking it might be heartburn, but that didn't really do much.",
      "associated": "I have been feeling a little short of breath, especially when the pressure is worse, and I've been sweating more than usual even though I'm not hot.",
      "denies": "No sharp stabbing pain, no fever, no vomiting, and the pain doesn't change when I breathe deeply or move around.",
      "history": "I've never had chest pain like this before. Sometimes I get heartburn, but this feels completely different from that.",
      "medications": "Amlodipine; Metoprolol Succinate; Clopidogrel; Insulin Glargine",
      "allergies": "Penicillin",
      "family": "My mother had a heart attack when she was 65, and my father had a stroke at 70. That's actually part of why I'm so worried about this.",
      "social": "I'm a retired teacher, I've never smoked, and I rarely drink alcohol. I live alone but I'm pretty independent with everything I need to do."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Lung auscultation",
      "Blood pressure both arms",
      "Peripheral pulse examination",
      "Jugular venous distension assessment",
      "Lower extremity edema check",
      "Abdominal examination",
      "Chest wall palpation",
      "Carotid pulse assessment",
      "General appearance and distress level"
    ],
    "examFindings": {
      "Cardiac auscultation": "Regular rate and rhythm, normal S1 and S2, no murmurs, rubs, or gallops",
      "Lung auscultation": "Clear to auscultation bilaterally, no crackles, wheezes, or rhonchi",
      "Blood pressure both arms": "Right arm 148/88, Left arm 145/86",
      "Peripheral pulse examination": "Distal pulses intact bilaterally, no peripheral edema",
      "Jugular venous distension assessment": "JVP normal, no distension at 45 degrees",
      "Lower extremity edema check": "No pedal edema, no calf tenderness",
      "Abdominal examination": "Soft, non-tender, no masses or organomegaly",
      "Chest wall palpation": "No chest wall tenderness, no reproducible pain with palpation",
      "Carotid pulse assessment": "Carotid upstrokes normal bilaterally, no bruits",
      "General appearance and distress level": "Appears mildly anxious but in no acute distress, alert and oriented"
    },
    "ddxTargets": [
      "NSTEMI \u2014 GRACE high risk, early invasive strategy (correct)",
      "STEMI \u2014 no ST elevation, no cath lab activation required immediately",
      "Unstable angina \u2014 troponin is positive, making this NSTEMI",
      "Myopericarditis \u2014 ST depression not elevation, no friction rub",
      "Type 2 MI (supply-demand mismatch) \u2014 no precipitating illness; spontaneous type 1",
      "Takotsubo cardiomyopathy \u2014 apical ballooning pattern, typically post-stress"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on GERD given patient's trial of antacids and atypical presentation in older diabetic female",
      "prematureClosure": "May stop investigating after normal physical exam despite high-risk patient profile with multiple cardiac risk factors",
      "availabilityBias": "Tendency to consider more common diagnoses like GERD or anxiety rather than ACS in patients with atypical presentations"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, I see you're considering several possibilities. Given this patient's risk factors - diabetes, hypertension, CKD, prior TIA, and strong family history - which conditions would you want to rule out first? What specific questions might help you distinguish between cardiac and non-cardiac causes?",
      "phase5": "Your history and physical exam findings are thorough. The patient has intermittent chest pressure with radiation, associated dyspnea, and multiple cardiac risk factors, but a relatively normal physical exam. How does this constellation of findings influence your differential? What would be your next steps in evaluation?",
      "finalDebrief": "This case highlights the challenge of diagnosing unstable angina, particularly in high-risk patients like Ms. DeLuca with diabetes and multiple cardiovascular risk factors. Her presentation with exertional chest pressure, radiation to the arm, and associated dyspnea was classic despite her normal physical exam. How did your thinking evolve as you gathered more information, and what key features ultimately pointed you toward the cardiac diagnosis?",
      "final": "Diagnosis: NSTEMI, high-risk, early invasive strategy. Key learning: (1) NSTEMI vs Unstable Angina: NSTEMI = positive troponin + ischemic symptoms \u00b1 ST changes. UA = same but troponin negative. Management is identical but NSTEMI is higher risk. (2) GRACE score: calculates risk of in-hospital death + MI. Score >140 = high risk \u2192 cardiac catheterization within 24 hours. Score 109-140 = intermediate \u2192 within 72 hours. Score <109 = low risk \u2192 non-invasive testing first acceptable. (3) Dual antiplatelet: aspirin + P2Y12 inhibitor (ticagrelor > clopidogrel per PLATO trial, NNT 46 to prevent death/MI/stroke). Ticagrelor: no CYP2C19 metabolism (unlike clopidogrel), more consistent platelet inhibition. Hold if CABG likely. (4) Post-ACS secondary prevention: high-intensity statin (atorvastatin 80mg) for ALL patients regardless of baseline LDL. Beta-blocker: reduces mortality in reduced EF. ACEi/ARB: if EF <40% or diabetes or hypertension. (5) EF 48%: previously 62% \u2014 new wall motion abnormality. This patient has sustained ischemic injury. Cardiac rehab referral at discharge is Class I recommendation."
    }
  },
  "meta": {
    "diagnosis": "NSTEMI \u2014 Type 1 (Spontaneous), Anterior Distribution, GRACE Score High Risk",
    "caseId": "nstemi-v1"
  }
};
