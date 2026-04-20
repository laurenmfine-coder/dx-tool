
window.EMR_DATA = {
  "patient": {
    "name": "Antoine Dubois",
    "dob": "01/04/1993",
    "age": 32,
    "sex": "Male",
    "mrn": "RDX-2025-37464",
    "pronouns": "He/Him",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Methotrexate Toxicity",
    "race": "Hispanic or Latino",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-6936",
    "email": "antoined@email.com",
    "emergencyContact": {
      "name": "Mei Lin (Family)",
      "phone": "(954) 555-6816"
    }
  },
  "problems": [
    {
      "problem": "Primary: Methotrexate Toxicity",
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
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "85 lbs",
      "ht": "5'7\"",
      "bmi": 13.3,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "85 lbs",
      "ht": "5'7\"",
      "bmi": 13.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "85 lbs",
      "ht": "5'7\"",
      "bmi": 13.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Methotrexate Toxicity",
      "assessment": "Working diagnosis: Methotrexate Toxicity",
      "plan": "Referral to mbs. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5705K",
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
    "caseId": "mbs-mtx-enzyme",
    "diagnosis": "See diagnosis \u2014 Methotrexate Toxicity",
    "acuity": 3,
    "presentation": "Methotrexate Toxicity",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with methotrexate toxicity. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Describe the biochemical pathway involved.",
      "What enzyme or receptor is implicated?",
      "How does this molecular change produce the clinical findings?",
      "What would you expect to find on laboratory testing?",
      "How does treatment address the underlying mechanism?"
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
      "Biochemical pathway tracing",
      "Enzyme kinetics review",
      "Receptor-ligand analysis",
      "Molecular mechanism correlation",
      "Laboratory value interpretation",
      "Genetic inheritance pattern analysis"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Methotrexate Toxicity \u2014 primary diagnosis (correct)",
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
      "phase2": "The student is reviewing a mbs case with chief complaint: Methotrexate Toxicity. What are the most important questions for a mbs to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a mbs perspective, what is the most critical finding that narrows this differential? What is the mbs-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the mbs's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for mbs. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) mbs assessment revealed the key discriminating features. (3) Why does MTX cause these specific toxicities \u2014 and what does competitive inhibition predict about dose-response? (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
