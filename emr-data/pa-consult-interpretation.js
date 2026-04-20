
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
      "problem": "Primary: Cardiology Recommends Cath",
      "icd": "Z00.00",
      "onset": "2024",
      "status": "Active",
      "notes": "See HPI"
    }
  ],
  "medications": [
    {
      "name": "See medication list",
      "sig": "As prescribed",
      "prescriber": "Dr. Robert Chen, MD",
      "start": "01/2024",
      "refills": 3,
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
  "labs": [],
  "imaging": [],
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
    "diagnosis": "See diagnosis \u2014 Cardiology Recommends Cath",
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
      "Cardiology Recommends Cath \u2014 primary diagnosis (correct)",
      "Alternative diagnosis 1 \u2014 shares key features",
      "Alternative diagnosis 2 \u2014 different mechanism",
      "Alternative diagnosis 3 \u2014 benign mimic",
      "Alternative diagnosis 4 \u2014 important not to miss",
      "Alternative diagnosis 5 \u2014 common diagnostic error"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: Cardiology Recommends Cath. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for pa. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) pa assessment revealed the key discriminating features. (3) How do you explain the recommendation, ensure the patient understands, and document this as the PA? (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
