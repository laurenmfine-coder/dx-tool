
window.EMR_DATA = {
  "patient": {
    "name": "Robert Chen",
    "dob": "01/21/1979",
    "age": 46,
    "sex": "Male",
    "mrn": "RDX-2025-92135",
    "pronouns": "He/Him",
    "insurance": "Medicare",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Robert Diaz",
    "race": "Multiracial",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-1461",
    "email": "robertch@email.com",
    "emergencyContact": {
      "name": "Nicole Okafor (Family)",
      "phone": "(954) 555-4188"
    }
  },
  "problems": [
    {
      "problem": "T2DM uncontrolled \u2014 A1c 9.8%",
      "icd": "E11.65",
      "onset": "2016",
      "status": "Active",
      "notes": "Robert Diaz \u2014 intensification needed. eGFR 42 limits drug choices."
    },
    {
      "problem": "CKD Stage 3 \u2014 eGFR 42",
      "icd": "N18.3",
      "onset": "2022",
      "status": "Active",
      "notes": "Limits SGLT2i (empagliflozin/dapagliflozin contraindicated below eGFR 45), affects metformin dosing"
    },
    {
      "problem": "Microalbuminuria \u2014 ACR 110 mg/g",
      "icd": "E11.65",
      "onset": "2022",
      "status": "Active",
      "notes": "GLP-1 agonist or SGLT2i preferred for nephroprotection \u2014 eGFR limits SGLT2i here"
    }
  ],
  "medications": [
    {
      "name": "Metformin 500mg BID (REDUCED from 1000mg BID for CKD)",
      "sig": "Take twice daily \u2014 hold if eGFR falls below 30",
      "prescriber": "Dr. Kim",
      "start": "2017",
      "refills": 5,
      "status": "Active \u2014 dose reduced for eGFR 42"
    },
    {
      "name": "Semaglutide 0.5mg SQ weekly (Ozempic) \u2014 NEW",
      "sig": "Subcutaneous weekly \u2014 titrate to 1mg at 4 weeks if tolerated",
      "prescriber": "Dr. Kim",
      "start": "11/2024",
      "refills": 2,
      "status": "Active \u2014 new (safe in CKD, no dose adjustment needed)"
    },
    {
      "name": "Glipizide 5mg daily \u2014 CONTINUE but monitor for hypoglycemia",
      "sig": "Take daily \u2014 sulfonylurea, hypoglycemia risk in CKD (reduced clearance)",
      "prescriber": "Dr. Kim",
      "start": "2021",
      "refills": 4,
      "status": "Active \u2014 hypoglycemia monitoring required"
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
      "wt": "92 lbs",
      "ht": "5'5\"",
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
      "wt": "92 lbs",
      "ht": "5'5\"",
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
      "wt": "92 lbs",
      "ht": "5'5\"",
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
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/01/2024",
      "panel": "Diabetes and Renal Panel",
      "results": [
        {
          "test": "HbA1c",
          "value": "9.8",
          "unit": "%",
          "ref": "<7.0",
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
          "test": "Creatinine",
          "value": "1.6",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Urine ACR",
          "value": "110",
          "unit": "mg/g",
          "ref": "<30",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "4.9",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        },
        {
          "test": "Fasting glucose",
          "value": "264",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V9557K",
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
    "caseId": "arc-diabetes-pharmacy",
    "diagnosis": "T2DM + CKD Stage 3 + A1c 9.8% \u2014 Pharmacy: SGLT2i Contraindicated, GLP-1 Dosing, Metformin Safety",
    "acuity": 3,
    "presentation": "Robert Diaz",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with robert diaz. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What medications are you currently taking, including OTC?",
      "Have you had any new medications started recently?",
      "Are you taking everything as prescribed?",
      "Have you noticed any side effects?",
      "Is cost or access a barrier to any medication?",
      "Do you have any allergies to medications?",
      "Are you taking any supplements or herbal products?",
      "Do you have any kidney or liver problems?",
      "Are you pregnant or breastfeeding?"
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
      "Medication reconciliation",
      "Drug interaction screening",
      "Renal/hepatic dosing review",
      "Allergy cross-reactivity assessment",
      "Patient counseling readiness",
      "Adherence assessment",
      "Cost barrier identification"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "GLP-1 agonist as intensification \u2014 safe in CKD, nephroprotective (correct)",
      "Empagliflozin (SGLT2i) \u2014 CONTRAINDICATED at eGFR 42 for glycemic benefit",
      "Insulin initiation now \u2014 reasonable but GLP-1 preferred given obesity and A1c",
      "Increase metformin to 1000mg BID \u2014 contraindicated at eGFR 42",
      "Sulfonylurea dose increase \u2014 hypoglycemia risk in CKD, avoid",
      "ACEi needed \u2014 not a pharmacy intensification issue"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: Robert Diaz. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: T2DM intensification with CKD \u2014 key pharmacy drug selection. Key pharmacy learning: (1) SGLT2i eGFR thresholds: empagliflozin (Jardiance) \u2014 approved for cardiovascular/renal benefit down to eGFR 20 but for glycemic benefit requires eGFR \u226545. Dapagliflozin (Farxiga) \u2014 for glycemic benefit eGFR \u226545, for heart failure/CKD progression benefit eGFR \u226525. At eGFR 42, SGLT2i glycemic benefit is reduced \u2014 GLP-1 is preferred. (2) GLP-1 in CKD: semaglutide does NOT require dose adjustment for renal impairment (it is largely degraded by ubiquitous peptidases, not renally cleared). Safe in all stages of CKD. GLP-1s also have nephroprotective effects \u2014 FLOW trial (semaglutide) showed 24% reduction in CKD progression. (3) Metformin in CKD: safe to eGFR 30, use with caution 30-45 (reduce dose), HOLD if eGFR <30. Risk: lactic acidosis from accumulation (rare but serious). This patient at eGFR 42 \u2192 reduce dose to 500mg BID, acceptable. (4) Sulfonylurea (glipizide) in CKD: accumulation of active metabolites \u2192 prolonged hypoglycemia. If eGFR falls further, consider discontinuing. Monitor glucose more frequently. (5) Potassium monitoring: CKD + ACEi + possible new SGLT2i later \u2192 hyperkalemia risk. Recheck potassium 4-6 weeks after any renal-affecting drug change."
    }
  }
};
