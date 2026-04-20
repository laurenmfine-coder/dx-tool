
window.EMR_DATA = {
  "patient": {
    "name": "Elena Rodriguez",
    "dob": "07/12/1988",
    "age": 37,
    "sex": "Female",
    "mrn": "RDX-2025-49047",
    "pronouns": "She/Her",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Polytrauma Patient",
    "race": "White",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-1290",
    "email": "elenarod@email.com",
    "emergencyContact": {
      "name": "Kevin Osei (Family)",
      "phone": "(954) 555-6439"
    }
  },
  "problems": [
    {
      "problem": "Primary: Polytrauma Patient",
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
      "prescriber": "Dr. Ana Torres, MD",
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
      "wt": "105 lbs",
      "ht": "5'4\"",
      "bmi": 18.0,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "105 lbs",
      "ht": "5'4\"",
      "bmi": 18.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "105 lbs",
      "ht": "5'4\"",
      "bmi": 18.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Polytrauma Patient",
      "assessment": "Working diagnosis: Polytrauma Patient",
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5503K",
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
    "caseId": "ot-polytrauma-tbi",
    "diagnosis": "See diagnosis \u2014 Polytrauma Patient",
    "acuity": 3,
    "presentation": "Polytrauma Patient",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with polytrauma patient. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Polytrauma Patient \u2014 primary diagnosis (correct)",
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
      "phase2": "The student is reviewing a ot case with chief complaint: Polytrauma Patient. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for ot. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) ot assessment revealed the key discriminating features. (3) This patient has co-occurring moderate TBI and PTSD. How does PTSD change your OT assessment approach \u2014 and what occupation-based interventions address both diagnoses simultaneously? (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
