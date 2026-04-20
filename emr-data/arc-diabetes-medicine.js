
window.EMR_DATA = {
  "patient": {
    "name": "Alex Morgan",
    "dob": "08/28/1969",
    "age": 56,
    "sex": "Non-binary",
    "mrn": "RDX-2025-70489",
    "pronouns": "They/Them",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Robert Diaz",
    "race": "Multiracial",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-7904",
    "email": "alexmorg@email.com",
    "emergencyContact": {
      "name": "Taylor Kim (Family)",
      "phone": "(954) 555-7271"
    }
  },
  "problems": [
    {
      "problem": "Type 2 diabetes \u2014 suboptimal control, A1c 9.2%",
      "icd": "E11.65",
      "onset": "2019",
      "status": "Active",
      "notes": "On metformin 1000mg BID \u2014 maximum tolerated dose. GLP-1 agonist addition indicated."
    },
    {
      "problem": "Obesity \u2014 BMI 34, contributing to insulin resistance",
      "icd": "E66.01",
      "onset": "2016",
      "status": "Active",
      "notes": "GLP-1 agonist addresses both glycemia AND weight \u2014 dual benefit in this patient."
    },
    {
      "problem": "Hypertension \u2014 on lisinopril, BP 138/88",
      "icd": "I10",
      "onset": "2020",
      "status": "Active",
      "notes": "ACEi preferred in T2DM for nephroprotection. BP slightly above target <130/80."
    },
    {
      "problem": "Microalbuminuria \u2014 early diabetic nephropathy",
      "icd": "E11.65",
      "onset": "2023",
      "status": "Active",
      "notes": "UACR 45 mg/g \u2014 above normal (<30). Nephroprotective therapy optimization needed."
    }
  ],
  "medications": [
    {
      "name": "Metformin 1000mg PO BID \u2014 continue",
      "sig": "Take with meals \u2014 reduces GI side effects. Maximum effective dose.",
      "prescriber": "PCP/Endocrinology",
      "start": "2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Semaglutide (Ozempic) 0.25mg SQ weekly \u2014 initiate",
      "sig": "Inject weekly, same day. Titrate to 0.5mg at 4 weeks, then 1mg. GLP-1 agonist \u2014 reduces A1c and weight.",
      "prescriber": "Endocrinology",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 new"
    },
    {
      "name": "Lisinopril 10mg PO daily \u2014 increase to 20mg",
      "sig": "ACEi \u2014 nephroprotective in diabetic nephropathy. Uptitrate for BP <130/80.",
      "prescriber": "PCP",
      "start": "2020",
      "refills": 5,
      "status": "Active \u2014 dose increased"
    },
    {
      "name": "Atorvastatin 40mg PO daily",
      "sig": "Statin \u2014 T2DM with CV risk factors. LDL target <70 mg/dL.",
      "prescriber": "PCP",
      "start": "2020",
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
      "wt": "74 lbs",
      "ht": "5'5\"",
      "bmi": 12.3,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "74 lbs",
      "ht": "5'5\"",
      "bmi": 12.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "74 lbs",
      "ht": "5'5\"",
      "bmi": 12.3,
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
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Diabetes Management Panel",
      "results": [
        {
          "test": "HbA1c",
          "value": "9.2",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "Fasting glucose",
          "value": "214",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "UACR",
          "value": "45",
          "unit": "mg/g",
          "ref": "<30",
          "flag": "H"
        },
        {
          "test": "eGFR",
          "value": "72",
          "unit": "mL/min/1.73m\u00b2",
          "ref": ">60",
          "flag": ""
        },
        {
          "test": "LDL",
          "value": "98",
          "unit": "mg/dL",
          "ref": "<70 for T2DM+risk",
          "flag": "H"
        },
        {
          "test": "TSH",
          "value": "2.1",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
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
      "lot": "V3003K",
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
    "caseId": "arc-diabetes-medicine",
    "diagnosis": "Type 2 Diabetes \u2014 Suboptimal A1c 9.2% on Metformin Monotherapy, GLP-1 Agonist Initiation and Lifestyle Intensification",
    "acuity": 3,
    "presentation": "Robert Diaz",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with robert diaz. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this endocrine presentation.",
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
      "T2DM \u2014 suboptimal on metformin monotherapy, GLP-1 addition indicated (correct)",
      "Type 1 DM \u2014 age of onset, obesity, family history, C-peptide argue against",
      "MODY (maturity-onset diabetes of the young) \u2014 family history and age pattern atypical",
      "Secondary diabetes \u2014 no pancreatic disease, no steroid use",
      "Inadequate metformin dose \u2014 already at maximum tolerated dose",
      "Insulin initiation needed now \u2014 GLP-1 trial appropriate before insulin in this phenotype"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Robert Diaz. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: T2DM suboptimally controlled, GLP-1 agonist initiation. Key learning: (1) ADA algorithm for T2DM intensification: after maximizing metformin, next agent choice depends on comorbidities. Obesity + high CV risk + nephropathy \u2192 GLP-1 agonist (semaglutide) or SGLT-2 inhibitor (empagliflozin). Both have cardiovascular and renal outcome data. (2) GLP-1 mechanism: incretin effect \u2192 glucose-dependent insulin secretion \u2192 suppresses glucagon \u2192 delays gastric emptying \u2192 central appetite suppression. A1c reduction ~1.5-2%, weight loss ~4-6 kg. (3) SGLT-2 inhibitors (empagliflozin, dapagliflozin) are preferred when eGFR >25 and albuminuria present \u2014 superior renal and heart failure outcomes vs GLP-1 in established nephropathy. Consider adding SGLT-2 here. (4) Microalbuminuria management: ACEi or ARB is first-line nephroprotection in T2DM. UACR 45 mg/g is early nephropathy \u2014 optimize ACEi dose AND add SGLT-2 inhibitor for additive renoprotection. (5) LDL target <70 mg/dL in T2DM with additional CV risk factors \u2014 this patient's LDL 98 requires statin uptitration."
    }
  }
};
