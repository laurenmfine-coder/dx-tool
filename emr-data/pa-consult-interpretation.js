
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
      "problem": "Intermediate-risk chest pain \u2014 cardiology recommending cath",
      "icd": "I20.0",
      "onset": "2024",
      "status": "Active",
      "notes": "HEART score 6. Stress test equivocal. Cardiology recommends coronary angiography."
    },
    {
      "problem": "Patient hesitancy \u2014 doesn't understand recommendation",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Patient asking 'why do I need this test? Can't we just watch and wait?'"
    },
    {
      "problem": "PA role \u2014 translate specialist recommendation, document shared decision-making",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Cardiologist wrote: 'proceed to cath' in note without patient discussion. PA is the communicator."
    }
  ],
  "medications": [
    {
      "name": "Aspirin 325mg loading dose",
      "sig": "Take 4 regular aspirin once \u2014 antiplatelet loading",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Metoprolol 25mg daily",
      "sig": "Take 1 tablet daily \u2014 beta-blocker for chest pain management",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "Take at bedtime \u2014 cardiovascular risk reduction",
      "prescriber": "PA",
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
      "panel": "Pre-Cath Assessment",
      "results": [
        {
          "test": "Troponin I x2",
          "value": "Negative x2 at 0h and 3h",
          "unit": "",
          "ref": "<0.04",
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
          "test": "INR",
          "value": "1.0",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": ""
        },
        {
          "test": "Potassium",
          "value": "4.1",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/17/2024",
      "study": "Exercise Stress Test",
      "indication": "Intermediate chest pain probability",
      "findings": "Achieved 85% max HR. 1mm ST depression V4-V5 at peak exercise, resolved at 3 min recovery. No chest pain during test. Normal wall motion by echo.",
      "impression": "Equivocal stress test \u2014 non-diagnostic ST changes. Intermediate-risk patient. Cardiology recommends coronary angiography for definitive evaluation."
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
    "diagnosis": "Cardiology Recommends Cardiac Catheterization \u2014 PA Translating Specialist Recommendation to Patient",
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
      "Intermediate-risk ACS \u2014 cath recommended, PA explains plan to patient (correct)",
      "Discharge home with aspirin \u2014 HEART score 6 is too high for discharge without further evaluation",
      "Order CT coronary angiography instead \u2014 reasonable alternative but cardiologist has recommended invasive cath",
      "PA can independently decide against cath recommendation \u2014 no, PA communicates and documents, escalates if patient declines",
      "Patient refusal ends the conversation \u2014 patient refusal must be documented with full information given",
      "Equivocal stress test = no disease \u2014 equivocal \u2260 normal; intermediate risk persists"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: Cardiology Recommends Cath. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: intermediate-risk chest pain \u2014 PA role in consult interpretation. Key PA learning: (1) Translating specialist recommendations is a core PA skill: 'The cardiologist is recommending a heart catheterization. Here's what that means: a thin tube is placed in your groin or wrist, contrast dye is injected into your heart arteries, and we can see if any blockages are there. The procedure takes about 30-45 minutes. The risk of serious complications is about 1 in 500.' Use plain language. (2) HEART score 6 interpretation: History (2) + ECG (1) + Age (1) + Risk factors (1) + Troponin (1) = 6. High risk. 30-day MACE rate ~12% without further evaluation. The PA communicates this risk clearly. (3) Shared decision-making documentation: 'I explained the cardiology recommendation, risks and benefits of cath vs observation, and the patient's risk stratification. Patient understood and agreed/declined/requested time.' This protects both patient and PA. (4) If patient declines: document fully, involve attending, ensure patient understands they are declining against medical advice. Do not simply accept refusal without documentation. (5) PA scope here: PA can explain, obtain informed consent for procedures, and document SDM. PA cannot independently override cardiologist recommendation without attending involvement."
    }
  }
};
