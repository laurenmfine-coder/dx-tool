
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "03/07/1957",
    "age": 68,
    "sex": "Non-binary",
    "mrn": "RDX-2025-33841",
    "pronouns": "They/Them",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Painful Eye",
    "race": "Black or African American",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-9895",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Raj Sharma (Family)",
      "phone": "(954) 555-9767"
    }
  },
  "problems": [
    {
      "problem": "Primary: Painful Eye",
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
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "63 lbs",
      "ht": "5'9\"",
      "bmi": 9.3,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "63 lbs",
      "ht": "5'9\"",
      "bmi": 9.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "63 lbs",
      "ht": "5'9\"",
      "bmi": 9.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Painful Eye",
      "assessment": "Working diagnosis: Painful Eye",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3609K",
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
    "caseId": "ms-optic-neuritis-od",
    "diagnosis": "See diagnosis \u2014 Painful Eye",
    "acuity": 2,
    "presentation": "Painful Eye",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with painful eye. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did you first notice the vision change?",
      "Is it one eye or both?",
      "Does it affect near or distance vision more?",
      "Any pain, redness, or discharge?",
      "Are you seeing floaters or flashing lights?",
      "Any recent head trauma?",
      "When was your last eye exam?",
      "Do you wear glasses or contacts?",
      "Any family history of eye disease?",
      "Do you have diabetes, hypertension, or autoimmune disease?",
      "Any headaches?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this ophthalmic presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Visual acuity (distance and near)",
      "Slit lamp examination",
      "Fundoscopy / dilated exam",
      "Intraocular pressure (tonometry)",
      "Visual field testing",
      "Pupillary reflex assessment",
      "Extraocular motility",
      "Cover-uncover test"
    ],
    "examFindings": {
      "Visual Acuity": "Right eye: reduced, Left eye: varies by case",
      "Slit Lamp": "Finding consistent with diagnosis",
      "Fundoscopy": "Key pathological finding visible on dilated exam",
      "IOP": "Measured bilaterally, results per clinical presentation",
      "Visual Fields": "Assessed by confrontation and automated perimetry"
    },
    "ddxTargets": [
      "Painful Eye \u2014 primary diagnosis (correct)",
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
      "phase2": "The student is reviewing a optometry case with chief complaint: Painful Eye. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Case debrief for optometry. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) optometry assessment revealed the key discriminating features. (3) Painful eye with vision loss on eye movement in a 28-year-old. How do you distinguish optic neuritis from other acute vision loss causes \u2014 and what systemic referral does a first episode mandate? (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
    }
  }
};
