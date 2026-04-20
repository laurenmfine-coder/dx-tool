
window.EMR_DATA = {
  "patient": {
    "name": "Diane Park",
    "dob": "01/15/1996",
    "age": 29,
    "sex": "Female",
    "mrn": "RDX-2025-25216",
    "pronouns": "She/Her",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Patient Reports Nurse Gave Wrong Medication",
    "race": "American Indian or Alaska Native",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-9186",
    "email": "dianepar@email.com",
    "emergencyContact": {
      "name": "Carlos Rivera (Family)",
      "phone": "(954) 555-9189"
    }
  },
  "problems": [
    {
      "problem": "Cultural safety \u2014 belief-based refusal without interpreter",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Pao Vang, 65F \u2014 Hmong elder, declining wound care citing spirit disturbance. No interpreter used. Nursing intervention needed."
    },
    {
      "problem": "Interpreter not used \u2014 informed refusal invalid",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Active",
      "notes": "No professional interpreter = informed refusal cannot be documented. Must use interpreter before ANY clinical discussion."
    },
    {
      "problem": "Cultural mediation \u2014 bridge traditional and biomedical beliefs",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Hmong patients may involve txiv neeb (shaman). Cultural liaison can bridge frameworks without invalidating either."
    }
  ],
  "medications": [
    {
      "name": "Professional medical interpreter \u2014 IMMEDIATE",
      "sig": "In-person, phone, or video interpreter before any clinical discussion. Family members are NOT appropriate medical interpreters.",
      "prescriber": "Nursing/Hospital policy",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "Cultural mediator / patient advocate referral",
      "sig": "Cultural liaison bridges traditional Hmong healing (txiv neeb) and biomedical care. Explores what IS acceptable rather than simply enforcing protocol.",
      "prescriber": "Nursing/Social Work",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 referral"
    },
    {
      "name": "Wound care adapted \u2014 explore patient-acceptable options",
      "sig": "With interpreter: explain procedure, consequences of refusal, explore alternatives. Can ceremony occur alongside care? Can family be present?",
      "prescriber": "Nursing/MD",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 negotiation"
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
      "wt": "64 lbs",
      "ht": "5'2\"",
      "bmi": 11.7,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "64 lbs",
      "ht": "5'2\"",
      "bmi": 11.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "64 lbs",
      "ht": "5'2\"",
      "bmi": 11.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Patient Reports Nurse Gave Wrong Medication",
      "assessment": "Working diagnosis: Patient Reports Nurse Gave Wrong Medication",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Cultural Safety Assessment",
      "results": [
        {
          "test": "Primary language",
          "value": "Hmong \u2014 White Mong dialect",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Decision-making capacity",
          "value": "Intact when interpreter available",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Health literacy",
          "value": "Limited formal education \u2014 verbal preferred",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Family preference",
          "value": "Eldest son present \u2014 family involvement desired",
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
      "lot": "V8052K",
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
    "caseId": "layer2-nursing-culture-safety",
    "diagnosis": "Cultural Safety \u2014 Hmong Patient, Spirit Beliefs, Professional Interpreter Required Before Any Clinical Discussion",
    "acuity": 2,
    "presentation": "Patient Reports Nurse Gave Wrong Medication",
    "category": "pharmacologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with patient reports nurse gave wrong medication. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this pharmacologic presentation.",
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
      "Cultural safety \u2014 interpreter needed, spirit-based refusal (correct)",
      "Patient lacks capacity \u2014 interpreter-assessed capacity is intact; different conclusion",
      "Family can interpret \u2014 NOT appropriate for medical decisions; trained interpreter only",
      "Force procedure \u2014 patient has capacity and right to refuse; ethics consultation pathway",
      "Document refusal without interpreter \u2014 invalid documentation",
      "Ignore cultural beliefs and proceed \u2014 violates cultural safety and patient rights"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Patient Reports Nurse Gave Wrong Medication. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: cultural safety \u2014 Hmong patient. Key learning: (1) Professional interpreter is mandatory: family members filter information based on their own beliefs. Only trained medical interpreters are appropriate for consent/refusal discussions \u2014 this is a patient safety and legal requirement. (2) Hmong health beliefs: traditional healing involves txiv neeb and belief that spirits can be disturbed by certain procedures. Nursing bridges, not dismisses, these beliefs. (3) Informed refusal requires informed communication: if the patient doesn't understand the procedure (no interpreter), the refusal cannot be documented as informed. (4) Cultural safety vs competence: cultural competence = knowing facts about a culture. Cultural safety = creating an environment where patients feel safe to participate in their own care without judgment. (5) Ethics consultation: when cultural beliefs conflict with medical recommendations and patient has capacity \u2014 the appropriate pathway is ethics consultation, not override."
    }
  }
};
