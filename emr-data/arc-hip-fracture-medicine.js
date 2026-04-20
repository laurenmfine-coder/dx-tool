
window.EMR_DATA = {
  "patient": {
    "name": "Carlos Rivera",
    "dob": "08/01/1952",
    "age": 73,
    "sex": "Male",
    "mrn": "RDX-2025-34406",
    "pronouns": "He/Him",
    "insurance": "Tricare",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Margaret Chen",
    "race": "Hispanic or Latino",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-3423",
    "email": "carlosri@email.com",
    "emergencyContact": {
      "name": "Carlos Rivera (Family)",
      "phone": "(954) 555-5336"
    }
  },
  "problems": [
    {
      "problem": "Post-ORIF hip fracture \u2014 hospital day 2",
      "icd": "S72.001A",
      "onset": "2024",
      "status": "Active",
      "notes": "Walter Osei, 81M \u2014 ORIF yesterday. New confusion this morning. CAM positive."
    },
    {
      "problem": "Acute delirium \u2014 post-operative, hyperactive subtype",
      "icd": "F05",
      "onset": "2024",
      "status": "Active",
      "notes": "Acute onset + inattention + disorganized thinking. Multifactorial: pain, opioids, sleep disruption, infection."
    },
    {
      "problem": "VTE prophylaxis decision \u2014 timing after ORIF",
      "icd": "Z79.01",
      "onset": "2024",
      "status": "Active",
      "notes": "Chemical prophylaxis delayed 12h post-op. Enoxaparin started \u2014 monitor for HIT if prolonged."
    },
    {
      "problem": "Pain management \u2014 opioid minimization in elderly",
      "icd": "M16.11",
      "onset": "2024",
      "status": "Active",
      "notes": "Scheduled acetaminophen + regional nerve block preferred. Minimize opioids \u2014 delirium risk."
    }
  ],
  "medications": [
    {
      "name": "Acetaminophen 1000mg PO q8h scheduled \u2014 primary analgesic",
      "sig": "Scheduled around the clock \u2014 opioid-sparing. Maximum 3g/day in elderly with normal hepatic function.",
      "prescriber": "Hospitalist",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Oxycodone 2.5mg PO q6h PRN \u2014 minimize",
      "sig": "Low-dose PRN only \u2014 use acetaminophen first. Opioids cause delirium, fall risk, constipation.",
      "prescriber": "Hospitalist",
      "start": "2024",
      "refills": 0,
      "status": "Active PRN \u2014 minimize"
    },
    {
      "name": "Enoxaparin 30mg SQ daily \u2014 DVT prophylaxis (renally adjusted)",
      "sig": "Renal dose adjustment for eGFR 42. Standard dose 40mg daily would over-anticoagulate.",
      "prescriber": "Hospitalist",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Quetiapine 12.5mg PO QHS PRN \u2014 delirium agitation",
      "sig": "Ultra-low dose for hyperactive delirium with safety risk only. Not routine.",
      "prescriber": "Hospitalist/Geriatrics",
      "start": "2024",
      "refills": 0,
      "status": "Active PRN \u2014 last resort"
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
      "wt": "128 lbs",
      "ht": "5'0\"",
      "bmi": 25.0,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "128 lbs",
      "ht": "5'0\"",
      "bmi": 25.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "128 lbs",
      "ht": "5'0\"",
      "bmi": 25.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Margaret Chen",
      "assessment": "Working diagnosis: Margaret Chen",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Post-Op Delirium Workup",
      "results": [
        {
          "test": "Hemoglobin",
          "value": "9.4",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": "L"
        },
        {
          "test": "Sodium",
          "value": "131",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "1.5",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "eGFR",
          "value": "42",
          "unit": "mL/min/1.73m\u00b2",
          "ref": ">60",
          "flag": "L"
        },
        {
          "test": "UA",
          "value": "Positive nitrites, >50 WBC/hpf",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "TSH",
          "value": "3.2",
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
      "study": "Hip X-ray Post-Op",
      "indication": "ORIF verification",
      "findings": "Hardware in good position. Femoral neck fracture reduced. No hardware complication.",
      "impression": "Satisfactory ORIF result."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5585K",
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
    "caseId": "arc-hip-fracture-medicine",
    "diagnosis": "Post-ORIF Hip Fracture \u2014 Hospitalist Management: Delirium Workup, DVT Prophylaxis, Geriatric Optimization",
    "acuity": 2,
    "presentation": "Margaret Chen",
    "category": "geriatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with margaret chen. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this geriatric presentation.",
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
      "Post-op delirium \u2014 multifactorial (CAUTI + hyponatremia + anemia + opioids) (correct)",
      "Stroke \u2014 new focal deficit absent; neurological exam non-focal",
      "Subdural hematoma \u2014 no head trauma, no progressive neuro deficit",
      "Sepsis encephalopathy \u2014 culture pending, hemodynamics stable",
      "Dementia exacerbation \u2014 acute onset argues for delirium, not baseline",
      "Metabolic encephalopathy \u2014 hyponatremia contributing but not sole cause"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Margaret Chen. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-op delirium \u2014 multifactorial. Key medicine learning: (1) THINK mnemonic for delirium causes: Toxic (medications \u2014 opioids, benzos, anticholinergics), Hypoxia, Infection/Immobility, Nutritional/metabolic (hyponatremia Na 131, anemia Hgb 9.4), K+ and electrolytes. Address ALL contributors simultaneously. (2) Non-pharmacological delirium management is first line: reorient q2h (clock, date, whiteboard), mobilize out of bed with PT by post-op day 1, maintain sensory aids (glasses, hearing aids), sleep hygiene (noise reduction, lights off at night), minimize nighttime vitals if stable. (3) Enoxaparin dosing in CKD: eGFR <30 requires dose adjustment to 30mg SQ daily or anti-Xa monitoring. eGFR 42 in this elderly patient \u2014 reduce to 30mg and monitor. (4) Opioid minimization in elderly: scheduled acetaminophen, regional anesthesia (femoral nerve block), NSAIDs avoided due to renal function and GI risk. Each opioid dose increases delirium risk by ~20% in elderly hip fracture patients. (5) Quetiapine for delirium: only for agitation creating safety risk (removing lines, climbing out of bed). Use lowest effective dose, short duration. Not for quiet/hypoactive delirium."
    }
  }
};
