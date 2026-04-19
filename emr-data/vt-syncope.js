/* emr-data/vt-syncope.js — EMR case data for Ventricular Tachycardia with Syncope */
window.EMR_DATA = {
  "patient": {
    "name": "Dennis Crawford",
    "patientHPI": "I was just sitting at home when I felt my heart racing really fast and then I blacked out completely - when I came to my family was standing over me asking if I was okay.",
    "dob": "06/15/1964",
    "age": "62",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-384673",
    "language": "English",
    "race": "Asian",
    "phone": "(404) 555-2402",
    "email": "dennis.crawford@email.com",
    "address": "1209 N Western Ave, Phoenix, AZ 85013",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Rite Aid — Pines Blvd",
    "emergencyContact": {
      "name": "Gloria Carter",
      "phone": "(617) 555-6908",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Passed out No specific pain location — felt palpitations in chest before passing out",
    "diagnosis": "Ventricular Tachycardia with Syncope"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Myocardial infarction 3 years ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Heart failure",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Hyperlipidemia",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Carvedilol",
      "dose": "25mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-2",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-3",
      "name": "Furosemide",
      "dose": "40mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-4",
      "name": "Atorvastatin",
      "dose": "80mg QHS",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-5",
      "name": "Aspirin",
      "dose": "81mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-6",
      "name": "Clopidogrel",
      "dose": "75mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
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
      "time": "07:25",
      "bp": "108/72",
      "hr": "78",
      "rr": "16",
      "temp": "36.9°C",
      "spo2": "96%",
      "pain": "/10",
      "bmi": "33",
      "weight": "65 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Passed out No specific pain location — felt palpitations in chest before passing out",
      "hpi": "Dennis Crawford is a 62-year-old male presenting with passed out no specific pain location — felt palpitations in chest before passing out. Past medical history includes Myocardial infarction 3 years ago, Heart failure, Hypertension, Hyperlipidemia. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ventricular Tachycardia with Syncope — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-497596",
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
              "value": "8.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "267",
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
              "value": "3.3",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "L"
            },
            {
              "test": "Chloride",
              "value": "100",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "28",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "12",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "108",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.2",
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
              "test": "Troponin I",
              "value": "0.03",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": ""
            },
            {
              "test": "BNP",
              "value": "680",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Magnesium",
              "value": "1.5",
              "unit": "mg/dL",
              "range": "1.7-2.2",
              "flag": "H"
            },
            {
              "test": "TSH",
              "value": "2.4",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
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
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-263501",
      "clinical": "Passed out No specific pain location — felt palpitations in chest before passing out",
      "technique": "Standard protocol",
      "findings": "Cardiomegaly. Mild bilateral pleural effusions. Cephalization of pulmonary vasculature. No focal consolidation.",
      "impression": "Cardiomegaly with mild CHF changes",
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
      "accession": "IMG-605713",
      "clinical": "Passed out No specific pain location — felt palpitations in chest before passing out",
      "technique": "Standard protocol",
      "findings": "Severely reduced LV systolic function. Dilated LV. Anterior wall akinesis. Mild pericardial effusion. No RV dilation.",
      "impression": "Severe LV dysfunction consistent with known cardiomyopathy",
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
      "accession": "IMG-981448",
      "clinical": "Passed out No specific pain location — felt palpitations in chest before passing out",
      "technique": "Standard 12-lead",
      "findings": "Normal sinus rhythm at 78 bpm currently. Old Q waves in V1-V4 (prior anterior MI). Prolonged QTc at 510ms. Frequent PVCs (3 seen on rhythm strip). Non-sustained VT run captured: 8-beat wide complex tachycardia at 180 bpm",
      "impression": "NSR with prior anterior MI changes, prolonged QTc, frequent PVCs with NSVT — HIGH RISK for sustained VT/cardiac arrest",
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
    "Father: sudden cardiac death at age 52",
    "Brother: heart failure"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit after MI (20 pack-year history)"
    ],
    [
      "Alcohol",
      "Rare"
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
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Dennis appears anxious and somewhat shaken by the syncopal episode, frequently touching his chest while speaking. He's cooperative and forthcoming with information but shows visible concern about his heart given his cardiac history. His affect is appropriate but worried, and he keeps asking if this means his heart is getting worse.",
    "interviewQuestions": [
      "Can you describe exactly what you felt in your chest before you passed out?",
      "How long did the palpitations last before you lost consciousness?",
      "Do you remember feeling dizzy or lightheaded before passing out?",
      "How long were you unconscious according to your family?",
      "Have you had any chest pain, shortness of breath, or nausea recently?",
      "Have you experienced similar episodes of palpitations or passing out before?",
      "Have you been taking all your heart medications as prescribed?",
      "Have you had any recent changes in your weight or swelling in your legs?",
      "Have you been more tired or short of breath with normal activities lately?",
      "Do you recall if you jerked or shook while you were unconscious?",
      "Did you bite your tongue or lose control of your bladder during the episode?",
      "Have you had any recent illness, fever, or medication changes?",
      "How has your heart failure been controlled recently?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - can you explain that differently? I'm still pretty shaken up by what happened.",
      "onset": "I was just sitting in my recliner watching TV around 2 PM when suddenly my heart started racing really fast, then within maybe 30 seconds I was out cold.",
      "character": "It felt like my heart was beating so fast and hard that it might pound right out of my chest - not like the normal irregular beats I sometimes get.",
      "location": "The racing feeling was right here in the center of my chest, didn't go anywhere else, just felt like my whole chest was vibrating.",
      "severity": "The palpitations were really intense, maybe an 8 out of 10, but I don't have any pain now - I'm just worried about my heart.",
      "aggravating": "I wasn't doing anything when it started - just sitting there relaxed. I haven't noticed anything that makes it worse.",
      "relieving": "Well, I passed out so I don't know what stopped it, but when I woke up my heart felt normal again.",
      "associated": "Right before I passed out I felt really dizzy and kind of nauseous, but no chest pain or trouble breathing.",
      "denies": "No chest pain, no shortness of breath, no sweating or arm pain. I didn't bite my tongue or wet myself, and my family said I didn't shake or jerk around.",
      "history": "I've had some irregular heartbeats since my heart attack, but nothing like this racing feeling and I've never passed out before.",
      "medications": "Carvedilol; Lisinopril; Furosemide; Atorvastatin; Aspirin; Clopidogrel",
      "allergies": "NKDA",
      "family": "My dad dropped dead suddenly at 52 - they said it was his heart. My brother has heart failure like me. That's why this really scares me.",
      "social": "I'm retired from driving buses, quit smoking after my heart attack three years ago - used to smoke a pack a day for 20 years. I hardly drink and don't use drugs."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Jugular venous pressure assessment",
      "Peripheral pulse examination",
      "Lower extremity edema assessment",
      "Orthostatic vital signs",
      "Neurologic examination",
      "Carotid pulse and bruit assessment",
      "Pulmonary auscultation",
      "Abdominal examination"
    ],
    "examFindings": {
      "Cardiac auscultation": "Regular rate and rhythm, normal S1 and S2, no murmurs, rubs, or gallops currently present",
      "Jugular venous pressure assessment": "JVP elevated to 8 cm H2O, consistent with mild volume overload",
      "Peripheral pulse examination": "Radial and dorsalis pedis pulses 2+ bilaterally, regular rhythm",
      "Lower extremity edema assessment": "Trace bilateral pedal edema, chronic venous stasis changes present",
      "Orthostatic vital signs": "No orthostatic changes - BP and HR stable from supine to standing",
      "Neurologic examination": "Alert and oriented x3, no focal neurologic deficits, normal gait and coordination",
      "Carotid pulse and bruit assessment": "Carotid upstrokes normal, no bruits appreciated bilaterally",
      "Pulmonary auscultation": "Clear to auscultation bilaterally, no crackles or wheezes",
      "Abdominal examination": "Soft, non-tender, no hepatomegaly or ascites"
    },
    "ddxTargets": [
      "Ventricular tachycardia (correct diagnosis)",
      "Atrial fibrillation with rapid ventricular response",
      "Supraventricular tachycardia",
      "Myocardial infarction",
      "Sudden cardiac death/ventricular fibrillation",
      "Vasovagal syncope",
      "Medication-induced arrhythmia"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on heart failure history and assuming this is simply worsening CHF rather than considering life-threatening arrhythmias",
      "prematureClosure": "May stop diagnostic workup after noting stable vitals and normal current exam, missing the need for cardiac monitoring and ECG",
      "availabilityBias": "Recent cases of vasovagal syncope might lead to underestimating arrhythmic causes in a patient with structural heart disease"
    },
    "coachPrompts": {
      "phase2": "You've identified several possible causes of syncope. Given this patient's history of MI and current heart failure, which arrhythmic causes should be highest on your differential? What specific questions about the palpitations and witnessed events will help you distinguish between these?",
      "phase5": "Your exam shows a stable patient now, but the history describes a very concerning episode. How does the combination of structural heart disease, palpitations followed by syncope, and family history of sudden cardiac death narrow your differential? What's the most urgent diagnostic test needed?",
      "finalDebrief": "This case illustrates how patients with structural heart disease are at high risk for ventricular arrhythmias. The key clinical clues were the rapid palpitations immediately preceding syncope in someone with prior MI. How did the normal current exam potentially create diagnostic challenges, and why is continuous cardiac monitoring essential even when the patient appears stable?"
    }
  }
};
