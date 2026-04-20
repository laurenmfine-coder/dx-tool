
window.EMR_DATA = {
  "patient": {
    "name": "Jordan Lee",
    "dob": "12/05/1970",
    "age": 55,
    "sex": "Non-binary",
    "mrn": "RDX-2025-43412",
    "pronouns": "They/Them",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Post-ACL Reconstruction",
    "race": "White",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-9376",
    "email": "jordanle@email.com",
    "emergencyContact": {
      "name": "Hiroshi Tanaka (Family)",
      "phone": "(954) 555-3839"
    }
  },
  "problems": [
    {
      "problem": "Status post right ACL reconstruction with patellar tendon autograft",
      "icd": "M23.611",
      "onset": "2024",
      "status": "Active",
      "notes": "8 months post-op, return-to-sport evaluation"
    },
    {
      "problem": "Quadriceps weakness \u2014 right limb",
      "icd": "M62.81",
      "onset": "2024",
      "status": "Active",
      "notes": "LSI 78% on isokinetic testing \u2014 criterion <90% not met"
    }
  ],
  "medications": [
    {
      "name": "Ibuprofen 400mg PRN post-exercise",
      "sig": "Take 1 tablet as needed after PT sessions if soreness",
      "prescriber": "Dr. Ortho",
      "start": "08/2024",
      "refills": 0,
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
      "wt": "77 lbs",
      "ht": "5'11\"",
      "bmi": 10.7,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "77 lbs",
      "ht": "5'11\"",
      "bmi": 10.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "77 lbs",
      "ht": "5'11\"",
      "bmi": 10.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Post-ACL Reconstruction",
      "assessment": "Working diagnosis: Post-ACL Reconstruction",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "03/15/2024",
      "study": "MRI Right Knee \u2014 Pre-Op",
      "indication": "ACL tear after soccer injury",
      "findings": "Complete tear ACL at femoral attachment. Medial tibial and lateral femoral bone bruising consistent with pivot-shift mechanism. Intact PCL, MCL, LCL. No meniscal tear.",
      "impression": "Complete ACL tear. Surgical candidate confirmed."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1471K",
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
    "caseId": "acl-return-to-sport-pt",
    "diagnosis": "ACL Reconstruction Rehabilitation \u2014 Return-to-Sport Evaluation (LSI 78%, Not Yet Cleared)",
    "acuity": 3,
    "presentation": "Post-ACL Reconstruction",
    "category": "musculoskeletal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with post-acl reconstruction. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Tell me about what's been limiting you.",
      "When did this problem start?",
      "What makes it better or worse?",
      "Rate your pain 0-10 now and at worst.",
      "What activities are you unable to do?",
      "Have you had this problem before?",
      "What treatments have you tried?",
      "What are your goals for PT?",
      "What does your daily activity look like?",
      "Any weakness, numbness, or tingling?",
      "Do you have pain at rest? At night?",
      "Any prior surgery or injury to this area?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this musculoskeletal presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Posture assessment",
      "Active ROM bilateral comparison",
      "Passive ROM",
      "Muscle strength testing (MMT)",
      "Special orthopedic tests",
      "Neurological screen",
      "Palpation",
      "Functional movement assessment",
      "Pain behavior observation",
      "Gait analysis if applicable"
    ],
    "examFindings": {
      "Posture": "Abnormality noted per case presentation",
      "ROM": "Limited in direction relevant to diagnosis",
      "Strength": "Reduced in muscles affected by condition",
      "Special Tests": "Positive tests consistent with diagnosis",
      "Neurological": "Screen negative for radiculopathy unless case-specific"
    },
    "ddxTargets": [
      "ACL reconstruction rehab \u2014 not yet return-to-sport ready (correct)",
      "Return-to-sport cleared \u2014 LSI criteria met",
      "Re-rupture of ACL graft",
      "Contralateral ACL injury risk",
      "Patellofemoral pain syndrome \u2014 concomitant issue",
      "Graft laxity \u2014 early failure"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: Post-ACL Reconstruction. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-ACL reconstruction, return-to-sport evaluation \u2014 NOT yet cleared. LSI 78%, below 90% threshold. Key PT learning points: (1) Return-to-sport criteria: quad LSI \u226590% on isokinetic testing, hop test LSI \u226590% (single leg, triple hop, crossover hop), and psychological readiness (ACL-RSI \u226565). This patient fails on LSI. (2) Re-injury risk: an LSI of 78% carries 4x higher re-injury risk vs 90%+. The PT's role is to communicate this clearly \u2014 premature return is the leading cause of graft failure. (3) Testing battery: isokinetic testing at 60\u00b0/s and 180\u00b0/s, 4-hop test series, Y-balance test, 5-10-5 agility. (4) Time is not the criterion: 8 months is a guideline, not a clearance. Athletes can be 12 months post-op and still fail criteria. (5) The coach/athlete/parent pressure to return is real \u2014 the PT must hold the line on objective criteria."
    }
  }
};
