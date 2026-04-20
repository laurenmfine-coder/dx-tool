
window.EMR_DATA = {
  "patient": {
    "name": "Taylor Kim",
    "dob": "02/11/1983",
    "age": 42,
    "sex": "Non-binary",
    "mrn": "RDX-2025-86748",
    "pronouns": "They/Them",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Patient on Warfarin for Mechanical Heart Valve",
    "race": "American Indian or Alaska Native",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-8454",
    "email": "taylorki@email.com",
    "emergencyContact": {
      "name": "Alex Morgan (Family)",
      "phone": "(954) 555-5989"
    }
  },
  "problems": [
    {
      "problem": "Primary: Patient on Warfarin for Mechanical Heart Valve",
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
      "bp": "88/58",
      "hr": 118,
      "rr": 24,
      "temp": "99.8\u00b0F",
      "spo2": "94%",
      "wt": "125 lbs",
      "ht": "5'5\"",
      "bmi": 20.8,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "125 lbs",
      "ht": "5'5\"",
      "bmi": 20.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "125 lbs",
      "ht": "5'5\"",
      "bmi": 20.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Patient on Warfarin for Mechanical Heart Valve",
      "assessment": "Working diagnosis: Patient on Warfarin for Mechanical Heart Valve",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1472K",
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
    "caseId": "layer2-dental-anticoag-dilemma",
    "diagnosis": "See diagnosis \u2014 Patient on Warfarin for Mechanical Heart Valve",
    "acuity": 1,
    "presentation": "Patient on Warfarin for Mechanical Heart Valve",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with patient on warfarin for mechanical heart valve. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did the pain start?",
      "What makes it better or worse?",
      "Is it sensitive to cold? Hot? Sweet?",
      "How long does the pain last after a trigger?",
      "Does it wake you from sleep?",
      "Is there any swelling?",
      "Have you had any recent dental work?",
      "When was your last exam and cleaning?",
      "Have you had any trauma to this area?",
      "Do you grind your teeth?"
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
      "Extraoral exam \u2014 lymph nodes, TMJ",
      "Intraoral soft tissue exam",
      "Dental charting \u2014 caries, existing restorations",
      "Periodontal probing",
      "Cold/heat testing",
      "Percussion testing",
      "Palpation \u2014 periapical area",
      "Radiographic review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Patient on Warfarin for Mechanical Heart Valve \u2014 primary diagnosis (correct)",
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
      "phase2": "The student is reviewing a dentistry case with chief complaint: Patient on Warfarin for Mechanical Heart Valve. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for dentistry. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) dentistry assessment revealed the key discriminating features. (3) A patient with a mechanical mitral valve replacement requires emergency extraction of an abscessed tooth. INR is 3.8. His cardiologist cannot be reached. He has trismus and cannot tolerate the abscess pain. What is your decision about the extraction \u2014 and what does the INR level and valve type tell you about the risk of holding anticoagulation even briefly? (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
