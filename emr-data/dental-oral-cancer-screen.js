
window.EMR_DATA = {
  "patient": {
    "name": "Robert Chen",
    "dob": "05/27/1971",
    "age": 54,
    "sex": "Male",
    "mrn": "RDX-2025-58884",
    "pronouns": "He/Him",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "1.5cm White Patch Lateral Tongue",
    "race": "Black or African American",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-8606",
    "email": "robertch@email.com",
    "emergencyContact": {
      "name": "Samuel Adeyemi (Family)",
      "phone": "(954) 555-2272"
    }
  },
  "problems": [
    {
      "problem": "Primary: 1.5cm White Patch Lateral Tongue",
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
      "wt": "82 lbs",
      "ht": "5'9\"",
      "bmi": 12.1,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "82 lbs",
      "ht": "5'9\"",
      "bmi": 12.1,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "82 lbs",
      "ht": "5'9\"",
      "bmi": 12.1,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for 1.5cm White Patch Lateral Tongue",
      "assessment": "Working diagnosis: 1.5cm White Patch Lateral Tongue",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V7970K",
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
    "caseId": "dental-oral-cancer-screen",
    "diagnosis": "See diagnosis \u2014 1.5cm White Patch Lateral Tongue",
    "acuity": 2,
    "presentation": "1.5cm White Patch Lateral Tongue",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with 1.5cm white patch lateral tongue. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "1.5cm White Patch Lateral Tongue \u2014 primary diagnosis (correct)",
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
      "phase2": "The student is reviewing a dentistry case with chief complaint: 1.5cm White Patch Lateral Tongue. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for dentistry. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) dentistry assessment revealed the key discriminating features. (3) Risk stratify this lesion \u2014 is this biopsy today, referral this week, or watch and see? (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
