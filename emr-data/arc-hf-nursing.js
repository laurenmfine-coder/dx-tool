
window.EMR_DATA = {
  "patient": {
    "name": "Jordan Lee",
    "dob": "10/11/1977",
    "age": 48,
    "sex": "Non-binary",
    "mrn": "RDX-2025-97528",
    "pronouns": "They/Them",
    "insurance": "Medicare",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Dorothy Williams",
    "race": "Asian",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-4426",
    "email": "jordanle@email.com",
    "emergencyContact": {
      "name": "Mei Lin (Family)",
      "phone": "(954) 555-9174"
    }
  },
  "problems": [
    {
      "problem": "HFrEF \u2014 EF 28%, discharge today",
      "icd": "I50.20",
      "onset": "2021",
      "status": "Active",
      "notes": "Dorothy Williams, 3rd HF hospitalization \u2014 30-day readmission prevention is the nursing goal"
    },
    {
      "problem": "Medication reconciliation \u2014 3 new medications added this admission",
      "icd": "Z79.899",
      "onset": "2024",
      "status": "Active",
      "notes": "Sacubitril-valsartan new, metoprolol dose changed, spironolactone added \u2014 teach-back required"
    },
    {
      "problem": "Readmission risk \u2014 prior non-compliance with daily weights",
      "icd": "Z87.891",
      "onset": "2024",
      "status": "Active",
      "notes": "Gained 8 lbs before this admission without presenting to clinic \u2014 education gap"
    }
  ],
  "medications": [
    {
      "name": "Sacubitril-valsartan (Entresto) 24/26mg BID \u2014 NEW",
      "sig": "Take twice daily \u2014 replace prior lisinopril. DO NOT take with lisinopril.",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 2,
      "status": "Active \u2014 NEW"
    },
    {
      "name": "Metoprolol succinate 100mg daily (increased from 50mg)",
      "sig": "Take 1 tablet daily \u2014 do not stop suddenly",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 5,
      "status": "Active \u2014 dose changed"
    },
    {
      "name": "Spironolactone 25mg daily \u2014 NEW",
      "sig": "Take 1 tablet daily \u2014 monitor for hyperkalemia",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 2,
      "status": "Active \u2014 NEW"
    },
    {
      "name": "Furosemide 40mg daily \u2014 continued",
      "sig": "Take 1 tablet daily. If weight up >2 lbs \u2192 take 80mg and call clinic.",
      "prescriber": "Cardiology",
      "start": "2021",
      "refills": 5,
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
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "61 lbs",
      "ht": "5'9\"",
      "bmi": 9.0,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "61 lbs",
      "ht": "5'9\"",
      "bmi": 9.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "61 lbs",
      "ht": "5'9\"",
      "bmi": 9.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Dorothy Williams",
      "assessment": "Working diagnosis: Dorothy Williams",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "Pre-Discharge Labs",
      "results": [
        {
          "test": "BNP",
          "value": "486",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "4.2",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "0.6-1.1",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "134",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V9310K",
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
    "caseId": "arc-hf-nursing",
    "diagnosis": "HFrEF Discharge Day \u2014 Nursing Priority: Teach-Back Education, Daily Weights, Medication Reconciliation",
    "acuity": 3,
    "presentation": "Dorothy Williams",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with dorothy williams. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "How are you feeling right now compared to earlier?",
      "Tell me about your pain \u2014 location, quality, rating.",
      "Are you having any difficulty breathing?",
      "Have you taken all your medications today?",
      "Do you have any allergies I should know about?",
      "Do you feel safe to get up?",
      "Do you have any questions about your care?",
      "Is there anything making you anxious?",
      "When did you last eat or drink?",
      "Have you had any nausea or vomiting?"
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
      "Vital signs trend review",
      "Pain assessment",
      "Skin integrity assessment",
      "IV access and infusion review",
      "Medication reconciliation",
      "Fall risk assessment (Morse)",
      "Neurological checks",
      "Patient education readiness assessment",
      "SBAR preparation"
    ],
    "examFindings": {
      "Vital Signs": "Trends consistent with clinical presentation",
      "Pain Assessment": "Rating documented with PQRST characteristics",
      "Skin Integrity": "Assessment per case-relevant findings",
      "Neurological": "Level of consciousness and orientation documented",
      "Fall Risk": "Morse Fall Scale calculated per case"
    },
    "ddxTargets": [
      "HFrEF discharge \u2014 nursing readmission prevention priority (correct)",
      "Premature discharge \u2014 BNP still elevated but clinical decongestion adequate",
      "Volume overload persisting \u2014 clinical exam guides, not BNP alone",
      "Medication error risk \u2014 3 medication changes at discharge",
      "30-day readmission \u2014 primary preventable nursing outcome",
      "Patient non-compliance \u2014 reframe as health literacy gap, not willful non-compliance"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Dorothy Williams. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: HFrEF discharge \u2014 primary nursing outcome is preventing 30-day readmission. Key nursing learning: (1) Teach-back is non-negotiable: ask 'Can you tell me in your own words what you should do if you gain more than 2 pounds overnight?' Not 'Do you understand?' The patient must demonstrate understanding. Document teach-back was performed. (2) Daily weight protocol: same time, same scale, same clothes, before eating, after voiding. >2 lb overnight = extra furosemide AND call clinic. This patient didn't do this before admission \u2014 the education gap is the re-admission cause. (3) Entresto (sacubitril-valsartan) critical teaching: do NOT take with lisinopril (ACEi) \u2014 36-hour washout required. Do NOT take if pregnant. (4) Spironolactone education: check potassium in 1 week, avoid salt substitutes (high potassium), call if muscle weakness or cramps (hyperkalemia symptoms). (5) Red flags that mean 'go to ED now': sudden weight gain >5 lbs, can't walk across room without breathlessness, swelling above knee, confusion."
    }
  }
};
