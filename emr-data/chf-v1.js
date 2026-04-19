/* emr-data/chf-v1.js — EMR case data for Acute Decompensated Heart Failure */
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
    "pharmacy": "CVS Pharmacy — Federal Hwy",
    "emergencyContact": {
      "name": "Michael Cook",
      "phone": "(713) 555-4694",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Can't breathe when I lay down No specific spot — just can't breathe",
    "diagnosis": "Acute Decompensated Heart Failure"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Heart failure with reduced EF",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Atrial fibrillation",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Prior MI 5 years ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Furosemide",
      "dose": "40mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Michael Torres, DO"
    },
    {
      "id": "med-2",
      "name": "Lisinopril",
      "dose": "10mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    },
    {
      "id": "med-3",
      "name": "Carvedilol",
      "dose": "12.5mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-4",
      "name": "Apixaban",
      "dose": "5mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-5",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE inhibitors",
      "reaction": "Angioedema — switched from enalapril to lisinopril without issue but reports this",
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
      "temp": "36.8°C",
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
      "cc": "Can't breathe when I lay down No specific spot — just can't breathe",
      "hpi": "William Turner is a 68-year-old male presenting with can't breathe when i lay down no specific spot — just can't breathe. Past medical history includes Heart failure with reduced EF, Atrial fibrillation, Type 2 Diabetes, Hypertension, Prior MI 5 years ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Decompensated Heart Failure — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-703715",
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
              "value": "7.1",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "11.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
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
              "value": "229",
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
              "value": "131",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "4.8",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
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
              "value": "22",
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
              "value": "1.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "89",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "8.7",
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
              "test": "BNP",
              "value": "2,840",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Troponin I",
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "TSH",
              "value": "2.1",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
            },
            {
              "test": "Hepatic Panel ALT",
              "value": "68",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-186165",
      "clinical": "Can't breathe when I lay down No specific spot — just can't breathe",
      "technique": "Standard protocol",
      "findings": "Cardiomegaly. Bilateral pleural effusions (right > left). Cephalization of pulmonary vasculature. Kerley B lines. Bilateral alveolar infiltrates in butterfly pattern.",
      "impression": "Pulmonary edema with bilateral pleural effusions — acute decompensated heart failure",
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
      "accession": "IMG-978996",
      "clinical": "Can't breathe when I lay down No specific spot — just can't breathe",
      "technique": "Standard protocol",
      "findings": "Severely reduced LV systolic function (EF ~20%). Dilated LV. Moderate mitral regurgitation. Small pericardial effusion. Dilated IVC without respiratory variation.",
      "impression": "Severely reduced EF with volume overload",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "POCUS – Lung",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-750659",
      "clinical": "Can't breathe when I lay down No specific spot — just can't breathe",
      "technique": "Standard protocol",
      "findings": "Bilateral B-lines in >3 lung zones (>3 B-lines per intercostal space). Small bilateral pleural effusions.",
      "impression": "Pulmonary edema confirmed by lung ultrasound",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-4",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-163338",
      "clinical": "Can't breathe when I lay down No specific spot — just can't breathe",
      "technique": "Standard 12-lead",
      "findings": "Atrial fibrillation with rapid ventricular response at 110 bpm. Left ventricular hypertrophy. Old Q waves in V1-V3 (prior anterior MI). No acute ST changes",
      "impression": "AFib with RVR, LVH, old anterior MI — no new acute ischemia",
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
      "Acute decompensated heart failure (correct diagnosis)",
      "Pulmonary edema",
      "Atrial fibrillation with rapid ventricular response",
      "Acute coronary syndrome",
      "Pulmonary embolism",
      "Pneumonia",
      "COPD exacerbation"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on heart failure history and missing acute coronary syndrome or new arrhythmias that could be precipitating the decompensation",
      "prematureClosure": "May assume it's just medication non-compliance without investigating precipitating factors like dietary indiscretion, medication changes, or new cardiac events",
      "availabilityBias": "Recent exposure to heart failure cases might make you overconfident in the diagnosis without considering pulmonary embolism or pneumonia in this high-risk patient"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given this patient's known heart failure history, what specific questions will help you determine if this is decompensated heart failure versus a new acute process? Think about precipitating factors and the timeline of symptom progression.",
      "phase5": "Excellent history and physical. You've identified clear signs of volume overload. Now consider: what might have precipitated this decompensation in a patient who was previously stable? How does the irregular heart rhythm factor into your assessment and management priorities?",
      "finalDebrief": "This case demonstrates classic acute decompensated heart failure with the triad of orthopnea, volume overload, and known reduced EF. Notice how the patient's known heart failure history could have led to premature closure - it was important to consider precipitating factors like atrial fibrillation with RVR, medication non-adherence, or dietary indiscretion. The physical exam findings of elevated JVP, S3 gallop, and bilateral edema clinched the diagnosis."
    }
  }
};
