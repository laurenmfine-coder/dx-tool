
window.EMR_DATA = {
  "patient": {
    "name": "Rosa Hernandez",
    "dob": "08/26/1972",
    "age": 53,
    "sex": "Female",
    "mrn": "RDX-2025-39232",
    "pronouns": "She/Her",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "PA Urgent Care",
    "race": "Multiracial",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-1452",
    "email": "rosahern@email.com",
    "emergencyContact": {
      "name": "Claire Nguyen (Family)",
      "phone": "(954) 555-6783"
    }
  },
  "problems": [
    {
      "problem": "Unstable angina \u2014 possible NSTEMI",
      "icd": "I20.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Chest pressure 20 min, ECG ST changes, PA solo coverage \u2014 attending needed immediately"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2018",
      "status": "Active",
      "notes": "On amlodipine"
    },
    {
      "problem": "Type 2 diabetes",
      "icd": "E11.9",
      "onset": "2020",
      "status": "Active",
      "notes": "A1c 7.8% on metformin"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Kim",
      "start": "2021",
      "refills": 6,
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
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "82 lbs",
      "ht": "5'10\"",
      "bmi": 11.8,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "82 lbs",
      "ht": "5'10\"",
      "bmi": 11.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "82 lbs",
      "ht": "5'10\"",
      "bmi": 11.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for PA Urgent Care",
      "assessment": "Working diagnosis: PA Urgent Care",
      "plan": "Referral to pa. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Urgent Cardiac Workup",
      "results": [
        {
          "test": "Troponin I (high-sensitivity)",
          "value": "0.04",
          "unit": "ng/mL",
          "ref": "<0.02",
          "flag": "H"
        },
        {
          "test": "BNP",
          "value": "88",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": ""
        },
        {
          "test": "Basic metabolic panel \u2014 K+",
          "value": "4.1",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "12-Lead ECG",
      "indication": "Chest pressure 20 minutes, tachycardia",
      "findings": "Sinus tachycardia at 106 bpm. 1mm ST depression in V4-V6, leads II, aVF. No ST elevation. No pathological Q waves. Normal QTc 418ms.",
      "impression": "Nonspecific ST changes \u2014 cannot exclude ischemia. Cardiac biomarkers and cardiology consultation required."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V8963K",
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
    "caseId": "pa-chest-pain-scope",
    "diagnosis": "Acute Coronary Syndrome \u2014 Unstable Angina: PA Scope of Practice Threshold Reached",
    "acuity": 2,
    "presentation": "PA Urgent Care",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with pa urgent care. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Complete history and physical",
      "Vital signs and trending",
      "Focused systems exam",
      "Scope of practice determination",
      "Escalation criteria assessment",
      "Documentation review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Acute coronary syndrome \u2014 unstable angina/NSTEMI (correct)",
      "Musculoskeletal chest wall pain",
      "GERD / esophageal spasm",
      "Pulmonary embolism",
      "Pericarditis",
      "Anxiety / hyperventilation"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: PA Urgent Care. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: ACS (unstable angina vs early NSTEMI). PA scope of practice threshold clearly exceeded. Key PA learning points: (1) The PA's immediate action was correct: recognize the situation exceeds solo management, call attending IMMEDIATELY, do not delay while trying to work it up alone. This is not a failure \u2014 this is appropriate scope awareness. (2) PA-appropriate actions while attending arrives: 12-lead ECG \u2713, IV access, aspirin 325mg chew, oxygen if SpO2 <94%, serial troponins, vitals q5-15min, prepare for potential transfer or cath lab activation. (3) HEART score: History (highly suspicious = 2) + ECG (nonspecific = 1) + Age (>65 = 2) + Risk factors (DM+HTN = 1) + Troponin (slight elevation = 2) = 8. High risk \u2014 early invasive strategy. (4) What the PA documents: 'Physician notified at [time], at bedside at [time], case transferred to physician management at [time].' Documentation protects the PA. (5) The PA's role post-attending arrival: logistics, family communication, coordination \u2014 not standing by feeling useless. The PA adds value."
    }
  }
};
