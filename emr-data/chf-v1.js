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
              "unit": "x10\u00b3/\u00b5L",
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
              "unit": "x10\u00b3/\u00b5L",
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
      "clinical": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
      "technique": "Standard protocol",
      "findings": "Cardiomegaly. Bilateral pleural effusions (right > left). Cephalization of pulmonary vasculature. Kerley B lines. Bilateral alveolar infiltrates in butterfly pattern.",
      "impression": "Pulmonary edema with bilateral pleural effusions \u2014 acute decompensated heart failure",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "POCUS \u2013 Cardiac",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-978996",
      "clinical": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
      "technique": "Standard protocol",
      "findings": "Severely reduced LV systolic function (EF ~20%). Dilated LV. Moderate mitral regurgitation. Small pericardial effusion. Dilated IVC without respiratory variation.",
      "impression": "Severely reduced EF with volume overload",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "POCUS \u2013 Lung",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-750659",
      "clinical": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
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
      "clinical": "Can't breathe when I lay down No specific spot \u2014 just can't breathe",
      "technique": "Standard 12-lead",
      "findings": "Atrial fibrillation with rapid ventricular response at 110 bpm. Left ventricular hypertrophy. Old Q waves in V1-V3 (prior anterior MI). No acute ST changes",
      "impression": "AFib with RVR, LVH, old anterior MI \u2014 no new acute ischemia",
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
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed William Turner's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "William appears anxious and fatigued, sitting upright and leaning forward slightly. He's cooperative and forthcoming with information but shows visible distress when discussing his breathing difficulties. His concern is evident as he frequently mentions how the symptoms are affecting his sleep and daily activities.",
    "interviewQuestions": [
        "When did you first notice you couldn't breathe when lying down?",
        "How many pillows do you need to sleep comfortably now?",
        "Have you noticed any swelling in your legs, ankles, or feet?",
        "Do you wake up at night gasping for air or short of breath?",
        "Have you had any chest pain or pressure?",
        "How far can you walk before getting short of breath?",
        "Have you gained any weight recently?",
        "Are you taking all your medications as prescribed?",
        "Have you had any recent changes to your medications?",
        "Do you have a persistent cough, especially at night?",
        "Have you noticed your belly getting bigger or feeling bloated?",
        "Have you been to the hospital for breathing problems before?",
        "Are you following a low-salt diet as recommended?"
    ],
    "patientResponses": {
        "default": "I'm sorry, could you explain that differently? I'm mainly worried about not being able to breathe when I lie down.",
        "onset": "This has been getting worse over the past 3 weeks. At first I just needed an extra pillow, but now I need to sleep almost sitting up.",
        "character": "It's not really pain, more like I just can't get enough air. Like I'm suffocating or drowning when I try to lay flat.",
        "location": "It's not in any specific spot - it's just my whole chest and breathing that feels wrong when I lie down.",
        "severity": "I'd say it's about a 7 out of 10 when I try to lie flat. I haven't had a good night's sleep in weeks.",
        "aggravating": "Lying flat makes it much worse. Even slight activity like walking to the mailbox makes me short of breath now.",
        "relieving": "Sitting up helps a lot. I've been sleeping in my recliner chair most nights.",
        "associated": "My legs have been more swollen lately, and I've been coughing more at night. I think I've gained some weight too.",
        "denies": "No chest pain, no fever, no nausea. The cough doesn't bring up blood or anything like that.",
        "history": "I was in the hospital about 8 months ago for similar breathing problems, but not this bad.",
        "medications": "Furosemide; Lisinopril; Carvedilol; Apixaban; Metformin",
        "allergies": "ACE inhibitors",
        "family": "My mother died from heart failure when she was 72, and my father had a heart attack at 60.",
        "social": "I'm a retired bus driver. I quit smoking 5 years ago after my heart attack - smoked about a pack a day for 20 years. Stopped drinking 3 years ago when they diagnosed my heart failure. I live with my daughter who helps take care of me."
    },
    "examManeuvers": [
        "Inspect for peripheral edema",
        "Assess jugular venous distention",
        "Auscultate heart sounds",
        "Auscultate lung sounds",
        "Palpate for hepatomegaly",
        "Check for ascites",
        "Assess capillary refill",
        "Palpate pedal pulses",
        "Measure weight if possible",
        "Assess respiratory effort and positioning"
    ],
    "examFindings": {
        "Inspect for peripheral edema": "3+ pitting edema bilateral lower extremities to mid-calf",
        "Assess jugular venous distention": "JVD elevated to 12 cm at 45 degrees",
        "Auscultate heart sounds": "Irregularly irregular rhythm, S3 gallop present, no murmurs",
        "Auscultate lung sounds": "Bilateral fine crackles at lung bases, extending halfway up posterior chest",
        "Palpate for hepatomegaly": "Liver edge palpable 2 cm below costal margin, tender",
        "Check for ascites": "Mild abdominal distention, possible fluid wave",
        "Assess capillary refill": "Capillary refill 3 seconds",
        "Palpate pedal pulses": "Weak but palpable bilateral dorsalis pedis and posterior tibial pulses",
        "Measure weight if possible": "Patient reports 8-pound weight gain over past month",
        "Assess respiratory effort and positioning": "Patient prefers sitting upright, mild accessory muscle use"
    },
    "ddxTargets": [
        "Acute decompensated heart failure (correct diagnosis)",
        "Pneumonia",
        "Pulmonary embolism",
        "Acute coronary syndrome",
        "Pneumothorax",
        "COPD exacerbation",
        "Medication noncompliance"
    ],
    "biasFlags": {
        "anchoring": "Don't anchor solely on the orthopnea - consider other causes of dyspnea even with clear heart failure history",
        "prematureClosure": "Avoid assuming it's just medication noncompliance without exploring other precipitating factors for decompensation",
        "availabilityBias": "Recent cases of pneumonia or PE might make you overlook the classic presentation of heart failure exacerbation"
    },
    "coachPrompts": {
        "phase2": "Looking at this 68-year-old with orthopnea and his cardiac history, what key historical elements will help you differentiate between heart failure decompensation and other serious causes of dyspnea? Consider both precipitating factors and associated symptoms that would support your leading diagnosis.",
        "phase5": "Now that you have his history and physical findings, how do the exam findings of JVD, S3 gallop, bilateral crackles, and peripheral edema fit with your differential diagnosis? What might have precipitated this decompensation in a patient with known heart failure?",
        "finalDebrief": "This case demonstrates classic acute decompensated heart failure with orthopnea as the presenting complaint. Notice how the history of progressive orthopnea, weight gain, and physical findings of volume overload all supported this diagnosis. What precipitating factors should we investigate, and how might his medication regimen need adjustment?"
    }
}
};
