
window.EMR_DATA = {
  "patient": {
    "name": "Robert Chen",
    "dob": "09/09/1965",
    "age": 60,
    "sex": "Male",
    "mrn": "RDX-2025-45110",
    "pronouns": "He/Him",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Cardiology Recommends Cath",
    "race": "American Indian or Alaska Native",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-2055",
    "email": "robertch@email.com",
    "emergencyContact": {
      "name": "Lisa Chen (Family)",
      "phone": "(954) 555-6872"
    }
  },
  "problems": [
    {
      "problem": "Coronary artery disease \u2014 cardiology recommends cath",
      "icd": "I25.10",
      "onset": "2024",
      "status": "Active",
      "notes": "PA explaining cath recommendation to patient. Patient confused about why invasive test needed."
    },
    {
      "problem": "Stable angina \u2014 positive stress test",
      "icd": "I20.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Positive nuclear stress test (reversible inferior perfusion defect) \u2014 cardiology recommends diagnostic cath"
    },
    {
      "problem": "Decision capacity intact \u2014 patient asking questions",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Patient has right to know risks, benefits, alternatives before agreeing to procedure"
    }
  ],
  "medications": [
    {
      "name": "Aspirin 325mg daily (pre-procedure)",
      "sig": "Take daily \u2014 antiplatelet before possible intervention",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metoprolol succinate 50mg daily",
      "sig": "Take daily \u2014 rate control, anti-anginal",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "Take at bedtime",
      "prescriber": "Cardiology",
      "start": "11/2024",
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
      "wt": "106 lbs",
      "ht": "5'10\"",
      "bmi": 15.2,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "106 lbs",
      "ht": "5'10\"",
      "bmi": 15.2,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "106 lbs",
      "ht": "5'10\"",
      "bmi": 15.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Cardiology Recommends Cath",
      "assessment": "Working diagnosis: Cardiology Recommends Cath",
      "plan": "Referral to pa. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Pre-Cath Labs",
      "results": [
        {
          "test": "Creatinine",
          "value": "1.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        },
        {
          "test": "Hemoglobin",
          "value": "13.2",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": "L"
        },
        {
          "test": "Platelets",
          "value": "192",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": ""
        },
        {
          "test": "INR",
          "value": "1.0",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": ""
        },
        {
          "test": "LDL",
          "value": "98",
          "unit": "mg/dL",
          "ref": "<70 for CAD",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/15/2024",
      "study": "Nuclear Stress Test (Adenosine MIBI)",
      "indication": "Stable angina, positive ETT \u2014 evaluate for ischemia",
      "findings": "Rest: Normal perfusion. Stress: Reversible inferior wall perfusion defect, moderate in size. Ejection fraction 52% rest, 48% stress.",
      "impression": "Positive for inducible inferior wall ischemia \u2014 moderate-sized reversible defect. Findings suggest RCA territory ischemia. Diagnostic cardiac catheterization recommended for anatomical definition and revascularization planning."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3233K",
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
    "caseId": "pa-consult-interpretation",
    "diagnosis": "Cardiology Consultation \u2014 PA Translating Catheterization Recommendation to Patient, Informed Consent Education",
    "acuity": 2,
    "presentation": "Cardiology Recommends Cath",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with cardiology recommends cath. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "PA explaining cath recommendation \u2014 informed consent education (correct)",
      "Proceed without patient education \u2014 informed consent without comprehension is not consent",
      "Disagree with cardiologist recommendation \u2014 PA does not have sufficient data to override",
      "Reassure patient the test is simple \u2014 minimizes legitimate procedural risks",
      "Refer to cardiologist to explain themselves \u2014 appropriate to involve but PA still educates",
      "Medical management alone \u2014 option patient can choose, but PA presents it accurately"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: Cardiology Recommends Cath. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: PA consultation interpretation and patient education role. Key PA learning: (1) Explaining the stress test: 'Your stress test showed that part of your heart muscle isn't getting enough blood when you exercise. The catheterization is like a road map \u2014 it lets the cardiologist see exactly which artery is narrowed and by how much. You might need a stent to open it, or medication might be enough \u2014 but we can't know until we see inside.' (2) Informed consent elements: (a) What is the procedure and why, (b) Expected benefits, (c) Significant risks (contrast allergy, 0.1% mortality for diagnostic cath, stroke, bleeding at access site), (d) Alternatives (medical management \u2014 PA presents this as a real option), (e) Patient can refuse. Document this conversation. (3) PA scope in consult interpretation: this is EXACTLY the PA's role \u2014 translating specialty recommendations into patient-understandable language, answering questions, documenting decision, and coordinating follow-through. The PA does NOT need to defer everything to the cardiologist. (4) Medical management alternative: for stable angina with positive stress test, medical therapy (aspirin + statin + beta-blocker + ACEi) is a legitimate alternative to cath. COURAGE trial showed PCI not superior to medical therapy for mortality in stable angina. Presenting this option is ethically required. (5) Documentation: 'Patient counseled on nuclear stress test results, rationale for catheterization, risks/benefits/alternatives including medical management. Patient understands and agrees to proceed. Informed consent documented by cardiology prior to procedure.'"
    }
  }
};
