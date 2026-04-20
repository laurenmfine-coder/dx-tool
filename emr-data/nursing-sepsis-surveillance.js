
window.EMR_DATA = {
  "patient": {
    "name": "Diego Reyes",
    "dob": "07/05/1994",
    "age": 31,
    "sex": "Male",
    "mrn": "RDX-2025-28519",
    "pronouns": "He/Him",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Post-Op Colectomy Day 2",
    "race": "Asian",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-2770",
    "email": "diegorey@email.com",
    "emergencyContact": {
      "name": "Ben Tran (Family)",
      "phone": "(954) 555-9338"
    }
  },
  "problems": [
    {
      "problem": "Sigmoid colon resection for diverticular disease \u2014 post-op day 2",
      "icd": "K57.30",
      "onset": "2024",
      "status": "Active",
      "notes": "Laparoscopic sigmoid colectomy \u2014 now febrile, confused"
    },
    {
      "problem": "Developing sepsis \u2014 anastomotic leak suspected",
      "icd": "A41.9",
      "onset": "2024",
      "status": "Active",
      "notes": "NEWS2 score 7 \u2014 escalation criteria met"
    }
  ],
  "medications": [
    {
      "name": "Cefazolin 1g IV q8h (surgical prophylaxis)",
      "sig": "IV infusion every 8 hours",
      "prescriber": "Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Heparin 5000 units SQ BID",
      "sig": "Subcutaneous injection twice daily",
      "prescriber": "Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ketorolac 15mg IV q6h PRN pain",
      "sig": "IV push every 6 hours as needed for pain",
      "prescriber": "Surgery",
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
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "62 lbs",
      "ht": "5'11\"",
      "bmi": 8.6,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "62 lbs",
      "ht": "5'11\"",
      "bmi": 8.6,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "62 lbs",
      "ht": "5'11\"",
      "bmi": 8.6,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Post-Op Colectomy Day 2",
      "assessment": "Working diagnosis: Post-Op Colectomy Day 2",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "Post-Op Day 2 Labs",
      "results": [
        {
          "test": "WBC",
          "value": "18.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Bands",
          "value": "24",
          "unit": "%",
          "ref": "0-10",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "2.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.8",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Procalcitonin",
          "value": "4.2",
          "unit": "ng/mL",
          "ref": "<0.5",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/20/2024",
      "study": "CT Abdomen/Pelvis with Contrast (ordered STAT)",
      "indication": "Post-op day 2, fever, confusion, worsening abdominal pain",
      "findings": "PENDING \u2014 ordered by surgical team",
      "impression": "CT ordered urgently \u2014 patient deteriorating, anastomotic leak cannot be excluded."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1799K",
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
    "caseId": "nursing-sepsis-surveillance",
    "diagnosis": "Post-Operative Sepsis \u2014 Anastomotic Leak after Colectomy",
    "acuity": 2,
    "presentation": "Post-Op Colectomy Day 2",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with post-op colectomy day 2. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
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
      "Post-operative sepsis from anastomotic leak (correct)",
      "Expected post-operative inflammation \u2014 not sepsis",
      "Pneumonia \u2014 post-op atelectasis",
      "Urinary tract infection \u2014 Foley catheter",
      "Pulmonary embolism \u2014 post-op patient",
      "Clostridium difficile colitis \u2014 post-antibiotics"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Post-Op Colectomy Day 2. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-op sepsis, likely anastomotic leak. Key nursing learning points: (1) NEWS2 calculation: RR 24 (+2), SpO2 93% (+2), temperature 38.9\u00b0C (+1), systolic BP 94 (+2) = NEWS2 score 7. Score \u22657 = immediate escalation required, physician must be present at bedside. (2) The RN is the surveillance system: 'looking wrong' + trending vitals are legitimate clinical findings. RN gestalt has been shown to predict deterioration before formal scoring triggers. (3) SBAR structure: Situation \u2014 'Mr. Chen, post-op day 2 colectomy, new confusion and fever'; Background \u2014 'HR trending up, now 118, temperature 38.9, BP falling to 94/62, RR 24, SpO2 93%'; Assessment \u2014 'I'm concerned he's septic, possibly from anastomotic leak'; Recommendation \u2014 'I need you at bedside now, lactate, blood cultures, CT abdomen STAT.' (4) Do NOT wait for a score to escalate when clinical gestalt says something is wrong. (5) The '3pm vital sign vs 5pm vital sign' pattern: nursing is uniquely positioned to recognize trends that individual snapshots miss."
    }
  }
};
