
window.EMR_DATA = {
  "patient": {
    "name": "Antoine Dubois",
    "dob": "03/22/1978",
    "age": 47,
    "sex": "Male",
    "mrn": "RDX-2025-14614",
    "pronouns": "He/Him",
    "insurance": "Aetna HMO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Annual Wellness",
    "race": "Middle Eastern",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-4023",
    "email": "antoined@email.com",
    "emergencyContact": {
      "name": "Claire Nguyen (Family)",
      "phone": "(954) 555-9590"
    }
  },
  "problems": [
    {
      "problem": "Type 2 diabetes \u2014 A1c 7.4%, near target",
      "icd": "E11.9",
      "onset": "2019",
      "status": "Active",
      "notes": "A1c improved from 8.9% with GLP-1 agonist \u2014 continue and optimize"
    },
    {
      "problem": "Hypertension \u2014 BP 128/76 at goal",
      "icd": "I10",
      "onset": "2017",
      "status": "Active",
      "notes": "At target on current regimen \u2014 continue"
    },
    {
      "problem": "Hyperlipidemia \u2014 LDL 72 at target",
      "icd": "E78.5",
      "onset": "2019",
      "status": "Active",
      "notes": "On statin \u2014 at guideline goal for diabetic"
    },
    {
      "problem": "Depression \u2014 PHQ-9 score 6, mild",
      "icd": "F32.0",
      "onset": "2024",
      "status": "Active",
      "notes": "New finding on screening \u2014 counseling recommended, no medication yet"
    }
  ],
  "medications": [
    {
      "name": "Metformin 1000mg BID",
      "sig": "Twice daily with meals",
      "prescriber": "Dr. Kim",
      "start": "2019",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Semaglutide 1mg SQ weekly (Ozempic)",
      "sig": "Subcutaneous weekly \u2014 GLP-1 agonist",
      "prescriber": "Dr. Kim",
      "start": "2023",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take daily",
      "prescriber": "Dr. Kim",
      "start": "2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "Take at bedtime",
      "prescriber": "Dr. Kim",
      "start": "2019",
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
      "wt": "119 lbs",
      "ht": "5'9\"",
      "bmi": 17.6,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "119 lbs",
      "ht": "5'9\"",
      "bmi": 17.6,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "119 lbs",
      "ht": "5'9\"",
      "bmi": 17.6,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Annual Wellness",
      "assessment": "Working diagnosis: Annual Wellness",
      "plan": "Referral to pa. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/01/2024",
      "panel": "Annual Wellness Labs",
      "results": [
        {
          "test": "HbA1c",
          "value": "7.4",
          "unit": "%",
          "ref": "<7.0 (near target)",
          "flag": "H"
        },
        {
          "test": "LDL",
          "value": "72",
          "unit": "mg/dL",
          "ref": "<70 diabetic",
          "flag": "H"
        },
        {
          "test": "BP",
          "value": "128/76",
          "unit": "mmHg",
          "ref": "<130/80 diabetic target",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "1.0",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        },
        {
          "test": "Urine albumin:creatinine",
          "value": "18",
          "unit": "mg/g",
          "ref": "<30",
          "flag": ""
        },
        {
          "test": "PHQ-9 screen",
          "value": "6",
          "unit": "",
          "ref": "0-4 minimal",
          "flag": "H"
        },
        {
          "test": "Colorectal cancer screen",
          "value": "FIT test due \u2014 age 52",
          "unit": "",
          "ref": "",
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
      "lot": "V9254K",
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
    "caseId": "pa-annual-wellness",
    "diagnosis": "Annual Wellness Visit \u2014 Multi-Condition Chronic Disease Management, PA Preventive Care Priorities",
    "acuity": 3,
    "presentation": "Annual Wellness",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with annual wellness. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this other presentation.",
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
      "Annual wellness \u2014 multi-condition optimization, depression newly identified (correct)",
      "Diabetes inadequately controlled \u2014 A1c 7.4% is near target, not uncontrolled",
      "Statin intensification needed \u2014 LDL 72 is at target",
      "Hypertension uncontrolled \u2014 BP at goal",
      "Add antidepressant now \u2014 PHQ-9 6 = mild, counseling first-line",
      "Ignore PHQ-9 finding \u2014 under-recognition of depression is the most common error"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: Annual Wellness. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: annual wellness, near-target chronic conditions, new mild depression. Key PA learning: (1) PHQ-9 action thresholds: 0-4 = minimal (monitor), 5-9 = mild (counseling, return in 4-6 weeks), 10-14 = moderate (counseling + consider medication), 15-19 = moderately severe (medication indicated), 20-27 = severe (medication + urgent referral). This patient's score 6 = counseling + 4-6 week reassessment. Prescribing antidepressants for PHQ-9 of 6 is over-treatment. (2) Preventive care checklist at age 52: colorectal cancer screening (FIT annually or colonoscopy q10yr \u2014 due), mammogram (45-75 annually), BP check (done), diabetes complications surveillance (feet, eyes, urine albumin \u2014 all documented). (3) GLP-1 agonist + depression: semaglutide is associated with improved mood in some patients (indirect \u2014 weight loss, glucose control). Do not attribute PHQ-9 change to medication yet. (4) A1c 7.4%: near-target but not at goal. PA options: optimize semaglutide dose (can go to 2mg weekly), add SGLT2i (also has cardiovascular benefit), or wait and recheck in 3 months. Document shared decision-making. (5) PA scope: this full annual wellness visit including depression screening, preventive care, and chronic disease management is squarely within PA independent practice in Florida."
    }
  }
};
