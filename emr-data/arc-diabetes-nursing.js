
window.EMR_DATA = {
  "patient": {
    "name": "Lisa Chen",
    "dob": "04/07/1958",
    "age": 67,
    "sex": "Female",
    "mrn": "RDX-2025-89322",
    "pronouns": "She/Her",
    "insurance": "Tricare",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Robert Diaz",
    "race": "White",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-3965",
    "email": "lisachen@email.com",
    "emergencyContact": {
      "name": "Mei Lin (Family)",
      "phone": "(954) 555-7444"
    }
  },
  "problems": [
    {
      "problem": "Type 2 diabetes \u2014 insulin-requiring, admitted for pneumonia",
      "icd": "E11.9",
      "onset": "2018",
      "status": "Active",
      "notes": "Robert Diaz, A1c 9.8%. Glucose trending 280-380 in-hospital. Insulin management suboptimal."
    },
    {
      "problem": "Community-acquired pneumonia",
      "icd": "J18.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Primary admission diagnosis \u2014 hyperglycemia worsens pneumonia outcomes"
    },
    {
      "problem": "Hypoglycemia risk \u2014 insulin sliding scale + inconsistent PO intake",
      "icd": "E16.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Patient eating <50% of meals \u2014 nursing must adjust insulin accordingly"
    }
  ],
  "medications": [
    {
      "name": "Ceftriaxone 1g IV daily \u2014 CAP treatment",
      "sig": "IV once daily",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Azithromycin 500mg PO daily \u2014 atypical coverage",
      "sig": "Take orally once daily",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Glargine (Lantus) 20 units SQ at bedtime",
      "sig": "Subcutaneous injection at bedtime \u2014 basal insulin",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Lispro (Humalog) per sliding scale with meals",
      "sig": "Per hospital sliding scale \u2014 check glucose before each meal AND at bedtime",
      "prescriber": "Medicine",
      "start": "11/2024",
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
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "110 lbs",
      "ht": "5'11\"",
      "bmi": 15.3,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "110 lbs",
      "ht": "5'11\"",
      "bmi": 15.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "110 lbs",
      "ht": "5'11\"",
      "bmi": 15.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Robert Diaz",
      "assessment": "Working diagnosis: Robert Diaz",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "Inpatient Glucose Monitoring",
      "results": [
        {
          "test": "Fasting glucose",
          "value": "318",
          "unit": "mg/dL",
          "ref": "70-140 inpatient target",
          "flag": "H"
        },
        {
          "test": "Pre-lunch glucose",
          "value": "285",
          "unit": "mg/dL",
          "ref": "70-140",
          "flag": "H"
        },
        {
          "test": "HbA1c",
          "value": "9.8",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.0",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        },
        {
          "test": "Potassium",
          "value": "3.6",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V6107K",
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
    "caseId": "arc-diabetes-nursing",
    "diagnosis": "Insulin-Requiring T2DM Admitted for Pneumonia \u2014 Nursing: Glucose Surveillance, Sliding Scale Safety",
    "acuity": 3,
    "presentation": "Robert Diaz",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with robert diaz. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this endocrine presentation.",
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
      "Inpatient T2DM \u2014 suboptimal glucose control (correct)",
      "DKA \u2014 no acidosis, not T1DM",
      "Medication-induced hyperglycemia \u2014 steroids not prescribed here",
      "Hypoglycemia risk \u2014 insulin given without confirming PO intake",
      "New T1DM \u2014 established T2DM, not new diagnosis",
      "Osmotic diuresis masking dehydration"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Robert Diaz. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: inpatient T2DM with suboptimal control. Key nursing learning: (1) Meal intake documentation is critical before insulin administration. If patient eats <50% of tray, notify physician before giving prandial insulin \u2014 hypoglycemia risk. Do not give full sliding scale dose for a meal that wasn't eaten. (2) Hypoglycemia protocol: glucose <70 \u2192 give 15g rapid carbohydrate (juice, glucose tabs), recheck in 15 min, notify physician. Glucose <50 \u2192 25g dextrose IV STAT. Document and report. (3) Glucose trending: sustained in-hospital hyperglycemia (>180) worsens pneumonia outcomes, delays wound healing, and prolongs LOS. Advocate to prescriber for basal insulin increase if fasting glucose consistently >180. (4) Insulin types: glargine (long-acting, 20-24h) is basal \u2014 do not hold for one meal. Lispro (rapid-acting) is prandial \u2014 DO hold if patient not eating. Never confuse the two. (5) Time-critical: insulin should be given within 15 minutes before or after meal delivery. Not 2 hours before, not 1 hour after."
    }
  }
};
