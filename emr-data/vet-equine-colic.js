
window.EMR_DATA = {
  "patient": {
    "name": "Lightning",
    "dob": "05/26/2014",
    "age": 11,
    "sex": "Gelding",
    "species": "Thoroughbred Horse",
    "mrn": "RDX-2025-29815",
    "pronouns": "They/Them",
    "insurance": "Trupanion Pet Insurance",
    "pcp": "Dr. Maria Santos, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Reduced Gut Sounds",
    "race": "Species: Thoroughbred Horse",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021 (Owner: Rosa Hernandez)",
    "phone": "(954) 555-1717",
    "email": "lightningowner@email.com",
    "emergencyContact": {
      "name": "Rosa Hernandez (Owner)",
      "phone": "(954) 555-4792"
    }
  },
  "problems": [
    {
      "problem": "Primary: Pawing, Rolling",
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
      "bp": "N/A",
      "hr": 52,
      "rr": 8,
      "temp": "101.8\u00b0F",
      "spo2": "N/A",
      "wt": "520 kg",
      "ht": "163 cm",
      "bmi": null,
      "setting": "Farm/Barn"
    },
    {
      "date": "06/15/2024",
      "bp": "N/A",
      "hr": 36,
      "rr": 12,
      "temp": "100.4\u00b0F",
      "spo2": "N/A",
      "wt": "530 kg",
      "ht": "163 cm",
      "bmi": null,
      "setting": "Farm/Barn"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Pawing, Rolling",
      "assessment": "Working diagnosis: Pawing, Rolling",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3723K",
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
    "caseId": "vet-equine-colic",
    "diagnosis": "See diagnosis \u2014 Pawing, Rolling",
    "acuity": 1,
    "presentation": "Pawing, Rolling",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with pawing, rolling. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this gastrointestinal presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Species-appropriate physical exam",
      "Vital signs (species-normal ranges)",
      "Weight and body condition scoring",
      "Auscultation (heart, lungs, GI for ruminants)",
      "Abdominal palpation",
      "Mucous membrane color and CRT",
      "Neurological assessment",
      "Pain scoring (species-appropriate scale)"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Horse \u2014 primary diagnosis (correct)",
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
      "phase2": "The student is reviewing a vet case with chief complaint: Pawing, Rolling. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for vet. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) vet assessment revealed the key discriminating features. (3) Medical versus surgical colic: what clinical and nasogastric tube findings determine referral for surgery \u2014 and what makes equine small intestinal obstruction so time-critical? (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
