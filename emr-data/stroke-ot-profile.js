
window.EMR_DATA = {
  "patient": {
    "name": "David Kim",
    "dob": "10/17/1957",
    "age": 68,
    "sex": "Male",
    "mrn": "RDX-2025-27846",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Left MCA Stroke Day 10",
    "race": "White",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-4392",
    "email": "davidkim@email.com",
    "emergencyContact": {
      "name": "Miguel Santos (Family)",
      "phone": "(954) 555-6096"
    }
  },
  "problems": [
    {
      "problem": "Left MCA ischemic stroke \u2014 post-acute day 10",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "Right hemiplegia, expressive aphasia \u2014 OT occupational profile and ADL eval"
    },
    {
      "problem": "Expressive aphasia \u2014 Broca's type",
      "icd": "R47.01",
      "onset": "2024",
      "status": "Active",
      "notes": "Understands instructions, cannot produce speech \u2014 AAC strategies required for OT"
    },
    {
      "problem": "Moderate ADL dependence \u2014 max assist",
      "icd": "Z74.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Feeding independent, dressing max assist, toilet transfers moderate assist"
    }
  ],
  "medications": [
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet daily",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS",
      "sig": "Take at bedtime",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet daily",
      "prescriber": "Neurology",
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
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "102 lbs",
      "ht": "5'6\"",
      "bmi": 16.5,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "102 lbs",
      "ht": "5'6\"",
      "bmi": 16.5,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "102 lbs",
      "ht": "5'6\"",
      "bmi": 16.5,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Left MCA Stroke Day 10",
      "assessment": "Working diagnosis: Left MCA Stroke Day 10",
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/05/2024",
      "study": "MRI Brain DWI/FLAIR",
      "indication": "Acute stroke",
      "findings": "Left MCA territory infarct \u2014 frontal, anterior parietal, corona radiata. Broca area involvement.",
      "impression": "Left MCA infarct explaining right hemiplegia and expressive aphasia."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1294K",
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
    "caseId": "stroke-ot-profile",
    "diagnosis": "Left MCA Stroke Day 10 \u2014 OT Occupational Profile: Expressive Aphasia, Moderate ADL Dependence",
    "acuity": 3,
    "presentation": "Left MCA Stroke Day 10",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with left mca stroke day 10. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Tell me about a typical day for you.",
      "What activities are most important to you?",
      "What are you having trouble doing now?",
      "What did you do before this problem?",
      "Tell me about your home setup.",
      "Who helps you at home?",
      "What are your goals for therapy?",
      "What does success look like to you?",
      "Are you having any cognitive difficulties?",
      "Tell me about your work and leisure activities."
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this neurologic presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Occupational profile interview",
      "ADL observation",
      "Cognitive screen (MMSE or MoCA)",
      "Upper extremity function",
      "Fine motor assessment",
      "Home safety evaluation",
      "Assistive device assessment",
      "Goals setting interview"
    ],
    "examFindings": {
      "Occupational Profile": "ADL limitations identified relevant to diagnosis",
      "Cognitive Screen": "Results per case presentation",
      "Upper Extremity": "Findings consistent with functional limitation",
      "Home Safety": "Risk factors identified per case context"
    },
    "ddxTargets": [
      "Left MCA stroke \u2014 OT occupational profile (correct)",
      "Right MCA stroke \u2014 contralateral deficits",
      "Hemorrhagic stroke \u2014 different rehab trajectory",
      "Brain tumor \u2014 slower onset",
      "MS relapse \u2014 different MRI pattern",
      "Todd's paralysis \u2014 transient, resolves quickly"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a ot case with chief complaint: Left MCA Stroke Day 10. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: left MCA stroke \u2014 OT focus. Key OT learning: (1) Expressive aphasia changes every assessment \u2014 use yes/no questions, picture boards, written choices, gestures. Comprehension is intact. Never assume cognitive impairment from inability to speak. (2) Occupational profile priority questions: What mattered most to this person before? (construction foreman, coaches kids' soccer) What is the hardest thing now? What does success look like for discharge? (3) Three must-achieve before discharge: (a) Safe toilet transfer, (b) Supervised oral feeding, (c) Caregiver training for wife on 2-person transfer technique. (4) Neuroplasticity window: Week 2 post-stroke is still early-critical period. High-intensity, task-specific training NOW has disproportionate long-term benefit. OT should be 2-3 sessions/day. (5) Team communication: 'He points to pictures reliably to communicate preferences. He prioritizes independence with self-feeding and toilet transfers over upper extremity recovery. Wife needs hands-on training before home discharge.'"
    }
  }
};
