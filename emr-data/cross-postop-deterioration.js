
window.EMR_DATA = {
  "patient": {
    "name": "Kevin Osei",
    "dob": "04/13/1976",
    "age": 49,
    "sex": "Male",
    "mrn": "RDX-2025-18520",
    "pronouns": "He/Him",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Post-Hip-Replacement Day 1",
    "race": "White",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-5528",
    "email": "kevinose@email.com",
    "emergencyContact": {
      "name": "Priya Patel (Family)",
      "phone": "(954) 555-7709"
    }
  },
  "problems": [
    {
      "problem": "Pulmonary embolism \u2014 post-operative day 3, bilateral",
      "icd": "I26.99",
      "onset": "2024",
      "status": "Active",
      "notes": "Nadia Okonkwo, 52F \u2014 sudden dyspnea and pleuritic pain after right knee replacement. SpO2 dropped to 88%."
    },
    {
      "problem": "DVT prophylaxis missed \u2014 2 doses enoxaparin held without indication",
      "icd": "Z79.01",
      "onset": "2024",
      "status": "Active",
      "notes": "Nursing notes show 2 doses held 'for bleeding precaution' \u2014 no documentation of surgical team order to hold."
    },
    {
      "problem": "Hemodynamically stable PE \u2014 submassive risk stratification",
      "icd": "I26.99",
      "onset": "2024",
      "status": "Active",
      "notes": "BP 108/68, HR 118. RV strain on echo. Troponin elevated. Risk-stratify for systemic thrombolysis vs anticoagulation."
    }
  ],
  "medications": [
    {
      "name": "Heparin UFH IV infusion \u2014 therapeutic anticoagulation",
      "sig": "Weight-based heparin protocol. aPTT target 60-100 seconds. Bridge to rivaroxaban at discharge.",
      "prescriber": "Medicine/Hematology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Rivaroxaban 15mg BID x21 days, then 20mg daily \u2014 transition",
      "sig": "DOACs are first-line for PE. Rivaroxaban approved for acute PE without bridging if stable.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 1,
      "status": "Active \u2014 discharge"
    },
    {
      "name": "Supplemental O2 \u2014 titrate to SpO2 >94%",
      "sig": "High-flow O2 via face mask. Target SpO2 \u226594%.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Hold systemic thrombolysis \u2014 hemodynamically stable",
      "sig": "Systemic tPA reserved for massive PE (sustained BP <90). Submassive PE = anticoagulate, monitor closely.",
      "prescriber": "Medicine/Pulm",
      "start": "2024",
      "refills": 0,
      "status": "Hold \u2014 monitoring"
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
      "wt": "134 lbs",
      "ht": "5'11\"",
      "bmi": 18.7,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "134 lbs",
      "ht": "5'11\"",
      "bmi": 18.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "134 lbs",
      "ht": "5'11\"",
      "bmi": 18.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Post-Hip-Replacement Day 1",
      "assessment": "Working diagnosis: Post-Hip-Replacement Day 1",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "PE Risk Stratification Panel",
      "results": [
        {
          "test": "Troponin I",
          "value": "0.22",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "BNP",
          "value": "680",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "D-dimer",
          "value": ">20",
          "unit": "mg/L",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "ABG \u2014 PaO2",
          "value": "61",
          "unit": "mmHg",
          "ref": "80-100",
          "flag": "L"
        },
        {
          "test": "ABG \u2014 PaCO2",
          "value": "32",
          "unit": "mmHg",
          "ref": "35-45",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "1.0",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Pulmonary Angiography",
      "indication": "Acute dyspnea, pleuritic pain, post-op day 3",
      "findings": "Bilateral pulmonary emboli \u2014 right main and left lower lobe branches. Right ventricular dilation. No saddle embolus.",
      "impression": "Bilateral submassive PE with RV strain. No saddle embolus. Hemodynamically stable at time of scan."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5480K",
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
    "caseId": "cross-postop-deterioration",
    "diagnosis": "Post-Operative Deterioration \u2014 Pulmonary Embolism Day 3 Post-Op, Missed DVT Prophylaxis",
    "acuity": 1,
    "presentation": "Post-Hip-Replacement Day 1",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with post-hip-replacement day 1. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Pulmonary embolism \u2014 post-op, missed DVT prophylaxis (correct)",
      "Pneumonia \u2014 no infiltrate, acute onset, pleuritic pattern",
      "Pleural effusion causing dyspnea \u2014 small effusion only, not explanatory",
      "MI with respiratory symptoms \u2014 troponin elevated but CTPA confirms PE",
      "Atelectasis \u2014 common post-op but does not cause SpO2 88% pleuritic pain",
      "Pneumothorax \u2014 excluded on CTPA"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Post-Hip-Replacement Day 1. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: submassive PE \u2014 post-op, missed prophylaxis. Key learning: (1) VTE prophylaxis is a patient safety imperative \u2014 holding without documented indication is a medication error. DVT prophylaxis should only be held with explicit surgical team order and documented reason. Knee replacement is a VERY high VTE risk \u2014 enoxaparin is mandatory. (2) PE severity classification: massive = sustained SBP <90 for >15 min (systemic thrombolysis indicated). Submassive = hemodynamically stable + RV dysfunction on echo or elevated troponin/BNP (anticoagulate, consider catheter-directed thrombolysis). Low-risk = none of the above (anticoagulate, early discharge). (3) RV strain markers: RV/LV ratio >0.9 on CTPA or echo, elevated troponin, elevated BNP, S1Q3T3 on ECG. These define submassive PE and warrant ICU-level monitoring. (4) DOAC selection for PE: rivaroxaban (acute dosing 15mg BID x21d then 20mg daily) and apixaban (10mg BID x7d then 5mg BID) can be started without heparin bridging in stable PE. Not for hemodynamically unstable or severe renal impairment. (5) Systemic thrombolysis: reserved for massive PE or submassive PE deteriorating on anticoagulation. Bleeding risk is 1-3% intracranial hemorrhage. Catheter-directed thrombolysis (lower systemic dose via catheter into clot) is an intermediate option for submassive PE with deterioration."
    }
  }
};
