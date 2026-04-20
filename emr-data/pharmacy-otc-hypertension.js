
window.EMR_DATA = {
  "patient": {
    "name": "Yasmine Bouchard",
    "dob": "08/28/1967",
    "age": 58,
    "sex": "Female",
    "mrn": "RDX-2025-37899",
    "pronouns": "She/Her",
    "insurance": "Medicare",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "OTC Cold Medicine Request",
    "race": "Middle Eastern",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-6086",
    "email": "yasmineb@email.com",
    "emergencyContact": {
      "name": "Raj Sharma (Family)",
      "phone": "(954) 555-9210"
    }
  },
  "problems": [
    {
      "problem": "Primary: OTC Cold Medicine Request",
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
      "prescriber": "Dr. Robert Chen, MD",
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
      "wt": "110 lbs",
      "ht": "5'8\"",
      "bmi": 16.7,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "110 lbs",
      "ht": "5'8\"",
      "bmi": 16.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "110 lbs",
      "ht": "5'8\"",
      "bmi": 16.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for OTC Cold Medicine Request",
      "assessment": "Working diagnosis: OTC Cold Medicine Request",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3715K",
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
    "caseId": "pharmacy-otc-hypertension",
    "diagnosis": "See diagnosis \u2014 OTC Cold Medicine Request",
    "acuity": 3,
    "presentation": "OTC Cold Medicine Request",
    "category": "pharmacologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with otc cold medicine request. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What medications are you currently taking, including OTC?",
      "Have you had any new medications started recently?",
      "Are you taking everything as prescribed?",
      "Have you noticed any side effects?",
      "Is cost or access a barrier to any medication?",
      "Do you have any allergies to medications?",
      "Are you taking any supplements or herbal products?",
      "Do you have any kidney or liver problems?",
      "Are you pregnant or breastfeeding?"
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
      "Medication reconciliation",
      "Drug interaction screening",
      "Renal/hepatic dosing review",
      "Allergy cross-reactivity assessment",
      "Patient counseling readiness",
      "Adherence assessment",
      "Cost barrier identification"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "OTC Cold Medicine Request \u2014 primary diagnosis (correct)",
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
      "phase2": "The student is reviewing a pharmacy case with chief complaint: OTC Cold Medicine Request. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for pharmacy. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) pharmacy assessment revealed the key discriminating features. (3) Walk through the ingredient-by-ingredient safety analysis \u2014 and counsel him on his safest options. (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
