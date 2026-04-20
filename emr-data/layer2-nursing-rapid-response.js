
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "12/17/1957",
    "age": 68,
    "sex": "Non-binary",
    "mrn": "RDX-2025-51264",
    "pronouns": "They/Them",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Surgical Floor",
    "race": "American Indian or Alaska Native",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-7849",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Lisa Chen (Family)",
      "phone": "(954) 555-4748"
    }
  },
  "problems": [
    {
      "problem": "Primary: Surgical Floor",
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
      "prescriber": "Dr. Priya Sharma, MD",
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
      "wt": "124 lbs",
      "ht": "5'8\"",
      "bmi": 18.9,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "124 lbs",
      "ht": "5'8\"",
      "bmi": 18.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "124 lbs",
      "ht": "5'8\"",
      "bmi": 18.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Surgical Floor",
      "assessment": "Working diagnosis: Surgical Floor",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3910K",
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
    "caseId": "layer2-nursing-rapid-response",
    "diagnosis": "See diagnosis \u2014 Surgical Floor",
    "acuity": 2,
    "presentation": "Surgical Floor",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with surgical floor. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Surgical Floor \u2014 primary diagnosis (correct)",
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
      "phase2": "The student is reviewing a nursing case with chief complaint: Surgical Floor. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for nursing. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) nursing assessment revealed the key discriminating features. (3) The rapid response team arrives. The RN says 'I don't know what's wrong, he just looks different from this morning.' Vitals: HR 124, BP 102/68, RR 24, O2 93%. Two hours ago vitals were normal. What does 'looks wrong' tell you that the numbers do not \u2014 and what do you do first? (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
