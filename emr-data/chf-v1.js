
window.EMR_DATA = {
  "patient": {
    "name": "William Turner",
    "patientHPI": "I just can't breathe when I try to lay down flat anymore - it's not pain anywhere specific, I just feel like I'm suffocating. I have to prop myself up with a bunch of pillows just to get any rest at all.",
    "dob": "06/15/1958",
    "age": "68",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-763589",
    "language": "English",
    "race": "Asian",
    "phone": "(404) 555-6286",
    "email": "william.turner@email.com",
    "address": "5769 Peachtree Rd, Memphis, TN 38108",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "CVS Pharmacy \u2014 Federal Hwy",
    "emergencyContact": {
      "name": "Michael Cook",
      "phone": "(713) 555-4694",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
    "diagnosis": "Acute Decompensated Heart Failure"
  },
  "problems": [
    {
      "problem": "Acute decompensated HF \u2014 HFpEF (EF 60%)",
      "icd": "I50.30",
      "onset": "2024",
      "status": "Active",
      "notes": "Elena Vasquez, 74F \u2014 sudden onset dyspnea, flash pulmonary edema. BP 192/108 on arrival. EF preserved."
    },
    {
      "problem": "Hypertensive urgency \u2014 precipitant of flash pulmonary edema",
      "icd": "I10",
      "onset": "2018",
      "status": "Active",
      "notes": "Hypertension is the primary driver \u2014 afterload reduction is key treatment."
    },
    {
      "problem": "Diastolic dysfunction grade 3 \u2014 impaired relaxation + elevated filling pressures",
      "icd": "I50.30",
      "onset": "2022",
      "status": "Active",
      "notes": "Echo: LVH, E/e' ratio 18, LA enlargement. Poor diastolic compliance with acute load."
    }
  ],
  "medications": [
    {
      "name": "Furosemide 40mg IV \u2014 diuresis",
      "sig": "IV bolus \u2014 acute decongestion. Monitor urine output, electrolytes q4h.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Nitroglycerin 10-200 mcg/min IV infusion \u2014 venodilator",
      "sig": "Reduces preload rapidly in flash pulmonary edema. Titrate to BP and dyspnea relief.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 titrating"
    },
    {
      "name": "CPAP or BiPAP \u2014 respiratory support",
      "sig": "Non-invasive positive pressure ventilation \u2014 reduces work of breathing, improves oxygenation, decreases preload.",
      "prescriber": "Medicine/Pulm",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg PO daily \u2014 add for chronic BP control",
      "sig": "Calcium channel blocker \u2014 effective in HFpEF for BP. Add after acute stabilization.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 5,
      "status": "Active \u2014 add outpatient"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE inhibitors",
      "reaction": "Angioedema \u2014 switched from enalapril to lisinopril without issue but reports this",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "08:26",
      "bp": "168/98",
      "hr": "110 (irregularly irregular)",
      "rr": "28",
      "temp": "36.8\u00b0C",
      "spo2": "88%",
      "pain": "9/10",
      "bmi": "32",
      "weight": "79 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
      "hpi": "William Turner is a 68-year-old male presenting with can't breathe when i lay down no specific spot \u2014 just can't breathe. Past medical history includes Heart failure with reduced EF, Atrial fibrillation, Type 2 Diabetes, Hypertension, Prior MI 5 years ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Decompensated Heart Failure \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Acute HF Panel",
      "results": [
        {
          "test": "BNP",
          "value": "1840",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.1",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": ""
        },
        {
          "test": "Troponin I",
          "value": "0.06",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "138",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": ""
        },
        {
          "test": "Potassium",
          "value": "3.9",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        },
        {
          "test": "BNP",
          "value": "1840",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "Echo \u2014 Transthoracic",
      "indication": "Acute HF \u2014 EF assessment and etiology",
      "findings": "EF 60%. LVH. Grade 3 diastolic dysfunction. E/e' ratio 18. LA enlargement. No wall motion abnormality. Mild mitral regurgitation.",
      "impression": "HFpEF \u2014 preserved EF with significantly elevated filling pressures. LVH consistent with chronic hypertension."
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
    "Mother died of heart failure at 72",
    "Father had MI at 60"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit 5 years ago, 20 pack-years"
    ],
    [
      "Alcohol",
      "Stopped drinking 3 years ago at diagnosis"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired bus driver"
    ],
    [
      "Living",
      "Lives with adult daughter"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "William appears visibly anxious and slightly short of breath even while sitting upright. He's cooperative and forthcoming with information but shows clear distress when describing his inability to lie flat, frequently adjusting his position during the interview.",
    "interviewQuestions": [
      "When did you first notice you couldn't breathe when lying down?",
      "How many pillows do you need to sleep comfortably now?",
      "Have you noticed any swelling in your legs, ankles, or feet?",
      "Are you having any chest pain or pressure?",
      "Have you been more tired than usual lately?",
      "Are you waking up at night gasping for air?",
      "Have you gained any weight recently?",
      "Are you taking your heart medications as prescribed?",
      "Have you been urinating more or less than usual?",
      "Do you get short of breath with walking or climbing stairs?",
      "Have you had any recent changes to your medications?",
      "Are you following a low-salt diet?",
      "Have you had any recent illnesses or infections?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that - could you ask it a different way?",
      "onset": "This has been getting worse over the past 2-3 weeks, but I really noticed it badly about a week ago when I couldn't sleep at all lying flat",
      "character": "It's not pain - it's like I'm drowning or suffocating when I try to lay back. I just can't get enough air in my lungs",
      "location": "It's not in any particular spot - it's just my whole chest and breathing that feels wrong when I'm flat",
      "severity": "When I try to lie flat it's probably an 8 out of 10 - I feel like I'm going to die. Sitting up it's maybe a 4 or 5",
      "aggravating": "Lying flat makes it terrible. Even slight activity like walking to the bathroom makes me more winded than it used to",
      "relieving": "Sitting up helps a lot. I'm sleeping in my recliner now with it pretty much upright",
      "associated": "My legs have been more swollen lately, and I'm more tired than usual. I think I've gained some weight but I don't weigh myself regularly",
      "denies": "No chest pain, no fever, no cough really - maybe a little dry cough at night",
      "history": "I've had some breathing trouble before with my heart condition, but never this bad where I couldn't lie down at all",
      "medications": "Furosemide; Lisinopril; Carvedilol; Apixaban; Metformin",
      "allergies": "ACE inhibitors",
      "family": "My mother died of heart failure when she was 72, and my father had a heart attack at 60",
      "social": "I'm retired from driving buses. I quit smoking 5 years ago after my heart attack - I smoked about a pack a day for 20 years. I stopped drinking 3 years ago when they diagnosed my heart failure. I live with my daughter now"
    },
    "examManeuvers": [
      "Jugular venous pressure assessment",
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Lower extremity edema assessment",
      "Hepatojugular reflux test",
      "Point of maximal impulse palpation",
      "Abdominal examination for hepatomegaly",
      "Assessment for S3 gallop",
      "Peripheral pulse examination",
      "Weight measurement if available"
    ],
    "examFindings": {
      "Jugular venous pressure assessment": "JVP elevated to 12 cm H2O with visible jugular venous distention",
      "Cardiac auscultation": "Irregularly irregular rhythm, tachycardic, S3 gallop present, no murmurs",
      "Pulmonary auscultation": "Fine bilateral crackles at both lung bases extending up to mid-lung fields",
      "Lower extremity edema assessment": "3+ pitting edema bilaterally to mid-shins",
      "Hepatojugular reflux test": "Positive hepatojugular reflux",
      "Point of maximal impulse palpation": "PMI displaced laterally to anterior axillary line, sustained and diffuse",
      "Abdominal examination for hepatomegaly": "Liver edge palpable 3 cm below right costal margin",
      "Assessment for S3 gallop": "S3 gallop clearly audible at cardiac apex",
      "Peripheral pulse examination": "Peripheral pulses intact but weak",
      "Weight measurement if available": "Patient reports 8-10 pound weight gain over past 3 weeks"
    },
    "ddxTargets": [
      "HFpEF \u2014 hypertensive flash pulmonary edema (correct)",
      "HFrEF \u2014 EF preserved on echo excludes",
      "ARDS \u2014 cardiogenic edema pattern; BNP and response to diuresis distinguish",
      "Pulmonary embolism \u2014 no right heart strain on echo, no pleuritic pain",
      "Hypertensive emergency with target organ damage \u2014 BP 192, now with pulmonary edema = emergency",
      "Aortic stenosis precipitating HF \u2014 no gradient on echo"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on heart failure history and missing acute coronary syndrome or new arrhythmias that could be precipitating the decompensation",
      "prematureClosure": "May assume it's just medication non-compliance without investigating precipitating factors like dietary indiscretion, medication changes, or new cardiac events",
      "availabilityBias": "Recent exposure to heart failure cases might make you overconfident in the diagnosis without considering pulmonary embolism or pneumonia in this high-risk patient"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given this patient's known heart failure history, what specific questions will help you determine if this is decompensated heart failure versus a new acute process? Think about precipitating factors and the timeline of symptom progression.",
      "phase5": "Excellent history and physical. You've identified clear signs of volume overload. Now consider: what might have precipitated this decompensation in a patient who was previously stable? How does the irregular heart rhythm factor into your assessment and management priorities?",
      "finalDebrief": "This case demonstrates classic acute decompensated heart failure with the triad of orthopnea, volume overload, and known reduced EF. Notice how the patient's known heart failure history could have led to premature closure - it was important to consider precipitating factors like atrial fibrillation with RVR, medication non-adherence, or dietary indiscretion. The physical exam findings of elevated JVP, S3 gallop, and bilateral edema clinched the diagnosis.",
      "final": "Diagnosis: HFpEF flash pulmonary edema, hypertensive exacerbation. Key learning: (1) HFpEF vs HFrEF: HFrEF = EF <40%, systolic dysfunction, responds to GDMT (ARNIs, beta-blockers, MRAs, SGLT-2i). HFpEF = EF \u226550%, diastolic dysfunction, GDMT is less effective except SGLT-2i (proven benefit) and spironolactone (modest). Treatment of HFpEF is primarily symptomatic and risk factor modification. (2) Flash pulmonary edema mechanism: acute hypertension \u2192 massive afterload increase \u2192 left ventricle cannot empty effectively \u2192 back pressure \u2192 acute pulmonary congestion. EF is preserved because this is a load-dependent phenomenon, not intrinsic contractile failure. (3) Treatment of flash pulmonary edema: rapid afterload reduction (IV nitroglycerin, nitroprusside), diuresis, non-invasive ventilation. Response is faster than in HFrEF decompensation. (4) Troponin elevation in HFpEF decompensation: demand ischemia from markedly elevated wall stress and tachycardia. Not always ACS \u2014 but ACS must be excluded, especially in patients with risk factors. (5) HFpEF management pillars: BP control (<130/80), rate control for AFib, diuresis for congestion, SGLT-2 inhibitors (empagliflozin, dapagliflozin \u2014 Class IIa/IIb for HFpEF), weight loss."
    }
  },
  "meta": {
    "diagnosis": "Acute Decompensated Heart Failure \u2014 HFpEF, Hypertensive Exacerbation, Diastolic Dysfunction",
    "caseId": "chf-v1"
  }
};
