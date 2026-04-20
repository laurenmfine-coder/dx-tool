
window.EMR_DATA = {
  "patient": {
    "name": "Alex Morgan",
    "dob": "12/23/1976",
    "age": 49,
    "sex": "Non-binary",
    "mrn": "RDX-2025-92504",
    "pronouns": "They/Them",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Left Jaw Ache AND Mild Substernal Tightness 2 Days",
    "race": "American Indian or Alaska Native",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-1340",
    "email": "alexmorg@email.com",
    "emergencyContact": {
      "name": "Fatima Al-Hassan (Family)",
      "phone": "(954) 555-2450"
    }
  },
  "problems": [
    {
      "problem": "Jaw and left-sided chest discomfort \u2014 unstable angina vs STEMI equivalent",
      "icd": "I20.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Charles Ito, 62M \u2014 45-min jaw tightness radiating to left chest and arm. Diaphoresis. EKG: ST depressions V4-V6."
    },
    {
      "problem": "Acute coronary syndrome \u2014 high HEART score (8)",
      "icd": "I21.9",
      "onset": "2024",
      "status": "Active",
      "notes": "HEART score 8 = high risk. Troponin pending. Cardiology activated. ACS until proven otherwise."
    },
    {
      "problem": "Hypertension + T2DM \u2014 silent ischemia risk factors",
      "icd": "I10",
      "onset": "2014",
      "status": "Active",
      "notes": "Diabetics frequently present with atypical symptoms \u2014 jaw pain, epigastric pain, fatigue instead of chest pain."
    }
  ],
  "medications": [
    {
      "name": "Aspirin 324mg PO \u2014 loading dose",
      "sig": "Non-enteric coated, chew and swallow. Antiplatelet loading for ACS.",
      "prescriber": "ED",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Nitroglycerin 0.4mg SL q5min x3 \u2014 angina trial",
      "sig": "SL nitroglycerin \u2014 if jaw/chest pain is angina, should improve. Hold if systolic <90 or right ventricular MI suspected.",
      "prescriber": "ED",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 trial"
    },
    {
      "name": "Heparin UFH 60 units/kg IV bolus, then 12 units/kg/h infusion",
      "sig": "Anticoagulation \u2014 NSTEMI/UA management. Titrate to aPTT 60-100 seconds.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 pending troponin"
    },
    {
      "name": "Ticagrelor 180mg PO loading dose \u2014 DAPT",
      "sig": "P2Y12 inhibitor \u2014 dual antiplatelet therapy with aspirin for ACS. Do NOT use ticagrelor if CABG planned (hold 5 days pre-op).",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "No known drug allergies",
      "type": "Drug",
      "reaction": "None",
      "severity": "N/A",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/18/2024",
      "bp": "88/58",
      "hr": 118,
      "rr": 24,
      "temp": "99.8\u00b0F",
      "spo2": "94%",
      "wt": "124 lbs",
      "ht": "5'7\"",
      "bmi": 19.4,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "124 lbs",
      "ht": "5'7\"",
      "bmi": 19.4,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "124 lbs",
      "ht": "5'7\"",
      "bmi": 19.4,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Left Jaw Ache AND Mild Substernal Tightness 2 Days",
      "assessment": "Working diagnosis: Left Jaw Ache AND Mild Substernal Tightness 2 Days",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "ACS Workup",
      "results": [
        {
          "test": "Troponin I (hsTnI) \u2014 initial",
          "value": "0.08",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "Troponin I \u2014 3h repeat",
          "value": "0.48",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "ECG interpretation",
          "value": "ST depressions V4-V6, 1-2mm \u2014 posterior ischemia pattern",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "Glucose",
          "value": "218",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "BMP",
          "value": "Na 138, K 4.1, Cr 1.0 \u2014 normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "Portable ECG",
      "indication": "Jaw pain + chest pain \u2014 ACS workup",
      "findings": "Normal sinus rhythm. ST depressions 1-2mm V4-V6. No ST elevation. No Q waves.",
      "impression": "NSTEMI pattern \u2014 posterior ischemia. Cardiology activated."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4075K",
      "site": "Left deltoid"
    }
  ],
  "familyHistory": [
    {
      "relation": "Father",
      "condition": "Hypertension",
      "age": "58"
    },
    {
      "relation": "Mother",
      "condition": "Type 2 diabetes",
      "age": "55"
    }
  ],
  "socialHistory": {
    "smoking": "Former smoker, quit 2020",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "cross-jaw-chest",
    "diagnosis": "Jaw Pain Radiating to Chest \u2014 Referred Cardiac Pain vs Dental Pain, STEMI Workup Required",
    "acuity": 1,
    "presentation": "Left Jaw Ache AND Mild Substernal Tightness 2 Days",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with left jaw ache and mild substernal tightness 2 days. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did this start?",
      "Has it been getting better, worse, or the same?",
      "What makes it better or worse?",
      "Rate the severity 0-10.",
      "Any associated symptoms?",
      "Any prior episodes?",
      "What medications are you taking?",
      "Any allergies?",
      "Any relevant family history?",
      "Any recent travel or sick contacts?",
      "Any prior surgeries or hospitalizations?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this cardiovascular presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "General appearance",
      "Vital signs",
      "Cardiovascular exam",
      "Pulmonary exam",
      "Abdominal exam",
      "Neurological exam",
      "Skin exam",
      "Musculoskeletal exam"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "NSTEMI \u2014 jaw + chest pain, rising troponin, ST depressions (correct)",
      "Dental pain with anxiety-driven chest symptoms \u2014 dental pain does NOT cause troponin rise or ECG changes",
      "GERD \u2014 no temporal relationship to meals, diaphoresis not explained",
      "Aortic dissection \u2014 tearing, back pain, BP differential; this presentation is more ACS",
      "Musculoskeletal chest pain \u2014 reproducible on palpation; this is not",
      "Inferior STEMI \u2014 right-sided leads needed; consider posterior leads (V7-V9)"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Left Jaw Ache AND Mild Substernal Tightness 2 Days. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: NSTEMI presenting as jaw pain. Key learning: (1) Atypical ACS presentations: jaw pain, epigastric pain, left arm/shoulder pain, back pain, fatigue, dyspnea \u2014 ALL can be the sole or primary presentation of MI. Women, elderly, and diabetics are most likely to present atypically. Never dismiss jaw pain without an ECG and troponin in patients with cardiac risk factors. (2) The HEART score: History (suspicious vs typical vs non-suspicious), ECG (LBBB/LVH/ischemia), Age, Risk factors, Troponin. Score 0-3 = low risk, 4-6 = moderate, 7-10 = high. Score 8 here = high risk \u2192 mandatory cardiology, heparin, DAPT, early cath. (3) Posterior MI: ST depressions in V4-V6 may represent a posterior STEMI (mirror image). Apply posterior leads V7-V9 \u2014 ST elevation >0.5mm in posterior leads = posterior STEMI = cath lab activation, not NSTEMI management. (4) DAPT in ACS: aspirin + P2Y12 inhibitor (ticagrelor preferred over clopidogrel per PLATO trial \u2014 faster onset, more consistent platelet inhibition). Prasugrel is alternative. Hold P2Y12 if CABG planned: ticagrelor 5 days, prasugrel 7 days, clopidogrel 5 days. (5) Dental referral AFTER cardiac clearance: this patient has concurrent dental disease but the acute priority is ACS workup. Never let dental pain diagnosis delay cardiac evaluation in a patient with risk factors and atypical symptoms."
    }
  }
};
