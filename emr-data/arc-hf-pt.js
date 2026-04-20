
window.EMR_DATA = {
  "patient": {
    "name": "Ben Tran",
    "dob": "02/28/1958",
    "age": 67,
    "sex": "Male",
    "mrn": "RDX-2025-71298",
    "pronouns": "He/Him",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Dorothy Williams",
    "race": "Asian",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-6708",
    "email": "bentran@email.com",
    "emergencyContact": {
      "name": "Alex Morgan (Family)",
      "phone": "(954) 555-2308"
    }
  },
  "problems": [
    {
      "problem": "Primary: Dorothy Williams",
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
      "prescriber": "Dr. James Castillo, MD",
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
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "88 lbs",
      "ht": "5'0\"",
      "bmi": 17.2,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "88 lbs",
      "ht": "5'0\"",
      "bmi": 17.2,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "88 lbs",
      "ht": "5'0\"",
      "bmi": 17.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Dorothy Williams",
      "assessment": "Working diagnosis: Dorothy Williams",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V9866K",
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
    "caseId": "arc-hf-pt",
    "diagnosis": "See diagnosis \u2014 Dorothy Williams",
    "acuity": 3,
    "presentation": "Dorothy Williams",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with dorothy williams. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Tell me about what's been limiting you.",
      "When did this problem start?",
      "What makes it better or worse?",
      "Rate your pain 0-10 now and at worst.",
      "What activities are you unable to do?",
      "Have you had this problem before?",
      "What treatments have you tried?",
      "What are your goals for PT?",
      "What does your daily activity look like?",
      "Any weakness, numbness, or tingling?",
      "Do you have pain at rest? At night?",
      "Any prior surgery or injury to this area?"
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
      "Posture assessment",
      "Active ROM bilateral comparison",
      "Passive ROM",
      "Muscle strength testing (MMT)",
      "Special orthopedic tests",
      "Neurological screen",
      "Palpation",
      "Functional movement assessment",
      "Pain behavior observation",
      "Gait analysis if applicable"
    ],
    "examFindings": {
      "Posture": "Abnormality noted per case presentation",
      "ROM": "Limited in direction relevant to diagnosis",
      "Strength": "Reduced in muscles affected by condition",
      "Special Tests": "Positive tests consistent with diagnosis",
      "Neurological": "Screen negative for radiculopathy unless case-specific"
    },
    "ddxTargets": [
      "Dorothy Williams \u2014 primary diagnosis (correct)",
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
      "phase2": "The student is reviewing a pt case with chief complaint: Dorothy Williams. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for pt. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) pt assessment revealed the key discriminating features. (3) Dorothy's 6-minute walk test is 198m (predicted for her age/sex: 490m). Her NYHA class is III. She is referred to cardiac rehab. What does her 6MWT tell you about her functional capacity, what is the MCID for 6MWT in HF, and how do you structure her exercise prescription around her ventilatory limitation and EF \u2014 including the signs that mean you stop the session? (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
