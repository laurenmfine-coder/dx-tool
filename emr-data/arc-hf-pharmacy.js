
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "04/07/1955",
    "age": 70,
    "sex": "Non-binary",
    "mrn": "RDX-2025-45915",
    "pronouns": "They/Them",
    "insurance": "Medicaid",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Dorothy Williams",
    "race": "Black or African American",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-1943",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Diane Park (Family)",
      "phone": "(954) 555-2200"
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
      "wt": "129 lbs",
      "ht": "5'9\"",
      "bmi": 19.0,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "129 lbs",
      "ht": "5'9\"",
      "bmi": 19.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "129 lbs",
      "ht": "5'9\"",
      "bmi": 19.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Dorothy Williams",
      "assessment": "Working diagnosis: Dorothy Williams",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V9545K",
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
    "caseId": "arc-hf-pharmacy",
    "diagnosis": "See diagnosis \u2014 Dorothy Williams",
    "acuity": 3,
    "presentation": "Dorothy Williams",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with dorothy williams. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this cardiovascular presentation.",
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
      "phase2": "The student is reviewing a pharmacy case with chief complaint: Dorothy Williams. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for pharmacy. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) pharmacy assessment revealed the key discriminating features. (3) The cardiologist wants to switch Dorothy from lisinopril to sacubitril-valsartan (Entresto). She is currently on lisinopril 5mg. Her Cr is 1.6. Walk through: the 36-hour ACEi washout requirement and why angioedema risk demands it, the starting dose given her CKD, what electrolytes require monitoring within 1-2 weeks, and what she will notice differently. (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
