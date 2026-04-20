
window.EMR_DATA = {
  "patient": {
    "name": "Kevin Osei",
    "dob": "02/08/1981",
    "age": 44,
    "sex": "Male",
    "mrn": "RDX-2025-17923",
    "pronouns": "He/Him",
    "insurance": "Tricare",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Gerald Park",
    "race": "Middle Eastern",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-9522",
    "email": "kevinose@email.com",
    "emergencyContact": {
      "name": "Antoine Dubois (Family)",
      "phone": "(954) 555-5123"
    }
  },
  "problems": [
    {
      "problem": "Sepsis \u2014 urinary source, qSOFA 2",
      "icd": "A41.51",
      "onset": "2024",
      "status": "Active",
      "notes": "Sandra Kim, 67F \u2014 fever 38.9\u00b0C, BP 88/52, HR 118, dysuria. Foley removed 3 days ago. eGFR declining."
    },
    {
      "problem": "Septic shock \u2014 MAP <65 despite 30mL/kg IVF",
      "icd": "R65.21",
      "onset": "2024",
      "status": "Active",
      "notes": "MAP 54 after 2L crystalloid. Norepinephrine started via peripheral IV \u2014 central line being placed."
    },
    {
      "problem": "Acute kidney injury \u2014 sepsis-related",
      "icd": "N17.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Creatinine 2.1 from baseline 0.9. Urinary catheter placed to monitor UO. Target UO >0.5 mL/kg/h."
    }
  ],
  "medications": [
    {
      "name": "Norepinephrine 0.1-0.3 mcg/kg/min IV \u2014 vasopressor",
      "sig": "First-line vasopressor for septic shock. Titrate to MAP >65 mmHg. Convert to central line ASAP.",
      "prescriber": "ICU/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 titrating"
    },
    {
      "name": "Ceftriaxone 2g IV q24h \u2014 empiric urosepsis",
      "sig": "Empiric gram-negative coverage for urosepsis. Broaden if resistant organism suspected.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Normal saline 30mL/kg IV bolus \u2014 completed",
      "sig": "2.1L given. Reassess fluid responsiveness before additional boluses \u2014 avoid fluid overload.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Completed \u2014 reassess"
    },
    {
      "name": "Hydrocortisone 200mg IV continuous OR 50mg q6h \u2014 consider",
      "sig": "If norepinephrine >0.25 mcg/kg/min despite adequate resuscitation \u2014 refractory shock. ACTH stim not required.",
      "prescriber": "ICU",
      "start": "2024",
      "refills": 0,
      "status": "Hold \u2014 consider if refractory"
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
      "wt": "99 lbs",
      "ht": "5'4\"",
      "bmi": 17.0,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "99 lbs",
      "ht": "5'4\"",
      "bmi": 17.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "99 lbs",
      "ht": "5'4\"",
      "bmi": 17.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Gerald Park",
      "assessment": "Working diagnosis: Gerald Park",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Sepsis Bundle Labs",
      "results": [
        {
          "test": "Lactate (initial)",
          "value": "4.2",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Lactate (2h repeat)",
          "value": "2.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "22.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Procalcitonin",
          "value": "28",
          "unit": "ng/mL",
          "ref": "<0.25",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "2.1",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Blood cultures x2",
          "value": "Pending \u2014 drawn before antibiotics",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "UA",
          "value": "Positive \u2014 >100 WBC, nitrites, bacteria",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CXR Portable",
      "indication": "Sepsis \u2014 exclude pulmonary source",
      "findings": "No consolidation. Mild vascular congestion \u2014 IVF.",
      "impression": "No pneumonia. Lungs clear. Consistent with urinary source of sepsis."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V2740K",
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
    "caseId": "arc-sepsis-medicine",
    "diagnosis": "Sepsis \u2014 Urinary Source, Fluid Resuscitation, Vasopressor Initiation, Hour-1 Bundle Compliance",
    "acuity": 2,
    "presentation": "Gerald Park",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with gerald park. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
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
      "Septic shock \u2014 urosepsis (correct)",
      "Hypovolemic shock \u2014 infection source and fever distinguish from pure volume loss",
      "Cardiogenic shock \u2014 warm extremities, elevated lactate, no pulmonary edema",
      "Adrenal crisis \u2014 possible contributor if refractory, cortisol check reasonable",
      "Gram-negative bacteremia from another source \u2014 blood cultures will clarify",
      "Obstructive shock (PE) \u2014 no respiratory distress, no right heart strain"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Gerald Park. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: septic shock \u2014 urosepsis. Key medicine learning: (1) Surviving Sepsis Campaign Hour-1 Bundle: (a) measure lactate, (b) blood cultures before antibiotics, (c) broad-spectrum antibiotics, (d) 30mL/kg crystalloid if hypotension or lactate \u22654, (e) vasopressors if MAP <65 after IVF. Each hour of delay in antibiotics increases mortality ~7%. (2) Norepinephrine is first-line vasopressor \u2014 \u03b11 predominant, increases SVR, minimal tachycardia. Dopamine is second-line (more arrhythmia risk). Vasopressin 0.03 units/min can be added as a steroid-sparing norepinephrine adjunct. (3) Fluid responsiveness assessment: after initial 30mL/kg, do not reflexively give more fluid. Use passive leg raise (PLR) test \u2014 increase in cardiac output confirms fluid responsiveness. Blind fluid boluses cause pulmonary edema without hemodynamic benefit in non-responders. (4) Lactate clearance: target >10% reduction per 2 hours. Persistent lactate elevation despite resuscitation = occult hypoperfusion or distributive physiology. Lactate 4.2 \u2192 2.8 = partial clearance \u2014 continue goal-directed resuscitation. (5) Hydrocortisone: evidence supports use if norepinephrine dose exceeds 0.25 mcg/kg/min \u2014 reduces vasopressor requirement, shortens shock duration. Does not improve mortality but improves hemodynamic rescue."
    }
  }
};
