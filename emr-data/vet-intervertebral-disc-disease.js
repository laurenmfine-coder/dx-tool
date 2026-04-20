
window.EMR_DATA = {
  "patient": {
    "name": "Daisy",
    "dob": "10/25/2017",
    "age": 8,
    "sex": "Female (spayed)",
    "species": "Dachshund",
    "mrn": "RDX-2025-74301",
    "pronouns": "They/Them",
    "insurance": "Owner Pay \u2014 No Insurance",
    "pcp": "Dr. Maria Santos, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Back Pain",
    "race": "Species: Dachshund",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025 (Owner: Carlos Rivera)",
    "phone": "(954) 555-8606",
    "email": "daisyowner@email.com",
    "emergencyContact": {
      "name": "Carlos Rivera (Owner)",
      "phone": "(954) 555-3912"
    }
  },
  "problems": [
    {
      "problem": "Primary: Acute Paraplegia",
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
      "bp": "145/95",
      "hr": 148,
      "rr": 38,
      "temp": "103.8\u00b0F",
      "spo2": "96%",
      "wt": "28 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Hospital"
    },
    {
      "date": "08/20/2024",
      "bp": "128/80",
      "hr": 92,
      "rr": 22,
      "temp": "101.5\u00b0F",
      "spo2": "99%",
      "wt": "29.5 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Clinic"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Acute Paraplegia",
      "assessment": "Working diagnosis: Acute Paraplegia",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V9974K",
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
    "caseId": "vet-intervertebral-disc-disease",
    "diagnosis": "See diagnosis \u2014 Acute Paraplegia",
    "acuity": 1,
    "presentation": "Acute Paraplegia",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with acute paraplegia. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this neurologic presentation.",
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
      "Dachshund \u2014 primary diagnosis (correct)",
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
      "phase2": "The student is reviewing a vet case with chief complaint: Acute Paraplegia. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for vet. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) vet assessment revealed the key discriminating features. (3) Hansen type I vs II IVDD, deep pain perception, Frankel grading \u2014 at what neurological grade does the surgical window close and what determines prognosis? (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
