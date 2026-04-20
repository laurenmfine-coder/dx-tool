
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "04/22/1953",
    "age": 72,
    "sex": "Non-binary",
    "mrn": "RDX-2025-47909",
    "pronouns": "They/Them",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Dorothy Williams",
    "race": "Multiracial",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-4259",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Kevin Osei (Family)",
      "phone": "(954) 555-9022"
    }
  },
  "problems": [
    {
      "problem": "HFrEF decompensation \u2014 EF 30%, acute volume overload",
      "icd": "I50.20",
      "onset": "2020",
      "status": "Active",
      "notes": "Richard Chen, 62M \u2014 8 lb weight gain over 5 days, worsening dyspnea. Third hospitalization."
    },
    {
      "problem": "GDMT optimization \u2014 not on sacubitril-valsartan or MRA",
      "icd": "I50.20",
      "onset": "2020",
      "status": "Active",
      "notes": "Currently on carvedilol + enalapril + furosemide. Transition to Entresto + spironolactone indicated."
    },
    {
      "problem": "Atrial fibrillation \u2014 persistent, rate-controlled",
      "icd": "I48.19",
      "onset": "2022",
      "status": "Active",
      "notes": "CHA2DS2-VASc 4 \u2014 anticoagulated on apixaban. Ventricular rate 82 bpm."
    },
    {
      "problem": "CKD stage 3a \u2014 eGFR 48",
      "icd": "N18.3",
      "onset": "2021",
      "status": "Active",
      "notes": "Baseline creatinine 1.6. Monitor closely with diuresis \u2014 goal euvolemia without overcorrection."
    }
  ],
  "medications": [
    {
      "name": "Furosemide 80mg IV BID \u2014 decongestion",
      "sig": "IV bolus twice daily. Goal: net negative 1-2L/day. Monitor creatinine, K+ q12h.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 inpatient"
    },
    {
      "name": "Carvedilol 25mg BID \u2014 continue (do not hold in decompensation)",
      "sig": "Continue beta-blocker through decompensation unless cardiogenic shock or HR <60. Stopping worsens outcomes.",
      "prescriber": "Cardiology",
      "start": "2020",
      "refills": 5,
      "status": "Active \u2014 continue"
    },
    {
      "name": "Sacubitril-valsartan 24/26mg BID \u2014 transition from enalapril",
      "sig": "Stop enalapril 36h BEFORE starting Entresto \u2014 wash-out required (angioedema risk). Titrate q2-4 weeks.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 new, transition"
    },
    {
      "name": "Spironolactone 25mg daily \u2014 add MRA",
      "sig": "Aldosterone antagonist \u2014 mortality benefit in HFrEF EF <35%. Monitor K+ and creatinine in 1 week.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 new"
    },
    {
      "name": "Apixaban 5mg BID \u2014 continue for AFib",
      "sig": "CHA2DS2-VASc 4 \u2014 anticoagulation indicated. Dose adjust if 2 of 3: age >80, wt <60kg, Cr >1.5.",
      "prescriber": "Cardiology",
      "start": "2022",
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
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "87 lbs",
      "ht": "5'10\"",
      "bmi": 12.5,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "87 lbs",
      "ht": "5'10\"",
      "bmi": 12.5,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "87 lbs",
      "ht": "5'10\"",
      "bmi": 12.5,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Dorothy Williams",
      "assessment": "Working diagnosis: Dorothy Williams",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "HF Decompensation Panel",
      "results": [
        {
          "test": "BNP",
          "value": "2840",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.8",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "3.7",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        },
        {
          "test": "Sodium",
          "value": "133",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Hemoglobin",
          "value": "11.2",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": "L"
        },
        {
          "test": "TSH",
          "value": "1.8",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "Chest X-ray PA/Lateral",
      "indication": "Dyspnea, known HF",
      "findings": "Cardiomegaly. Bilateral interstitial edema. Small bilateral pleural effusions. Vascular cephalization.",
      "impression": "Acute decompensated heart failure \u2014 pulmonary edema pattern."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1094K",
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
    "smoking": "Never smoker",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "arc-hf-medicine",
    "diagnosis": "HFrEF \u2014 EF 30%, Decompensated, IV Diuresis and Guideline-Directed Medical Therapy Optimization",
    "acuity": 2,
    "presentation": "Dorothy Williams",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with dorothy williams. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "HFrEF decompensation \u2014 volume overload, GDMT optimization needed (correct)",
      "Cardiac tamponade \u2014 no equalization of pressures, no pulsus paradoxus",
      "ARDS \u2014 cardiogenic edema pattern, BNP markedly elevated",
      "Pulmonary embolism \u2014 bilateral edema not typical, BNP reflects HF",
      "Hypertensive emergency \u2014 BP not critically elevated here",
      "New ACS precipitating decompensation \u2014 troponin needed to exclude"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Dorothy Williams. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: HFrEF decompensation, GDMT optimization opportunity. Key learning: (1) The four pillars of GDMT for HFrEF (EF <40%): (a) ACEi/ARB or ARNI (Entresto) \u2014 Entresto reduces mortality 20% vs ACEi. (b) Beta-blocker (carvedilol, metoprolol succinate, bisoprolol). (c) MRA (spironolactone or eplerenone \u2014 EF <35%). (d) SGLT-2 inhibitor (dapagliflozin or empagliflozin). Each pillar has mortality benefit. This patient is missing ARNI and MRA. (2) ACEi \u2192 Entresto transition: mandatory 36-hour washout to prevent angioedema \u2014 the N in ARNI (neprilysin inhibitor) potentiates bradykinin. (3) Beta-blocker in decompensation: do NOT stop carvedilol unless cardiogenic shock or HR <55-60. Stopping worsen outcomes. If in cardiogenic shock, reduce dose rather than stop. (4) Diuresis goal: net negative 1-2L/day. Reassess daily \u2014 too aggressive causes pre-renal azotemia; inadequate \u2192 persistent congestion and readmission. BNP trending down is the target. (5) Hyponatremia (Na 133) in HF: dilutional \u2014 from ADH activation and low cardiac output. Treat the HF, not the sodium directly. Fluid restriction if Na <130."
    }
  }
};
