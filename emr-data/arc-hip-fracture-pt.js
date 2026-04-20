
window.EMR_DATA = {
  "patient": {
    "name": "Jordan Lee",
    "dob": "05/19/1974",
    "age": 51,
    "sex": "Non-binary",
    "mrn": "RDX-2025-98535",
    "pronouns": "They/Them",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Margaret Chen",
    "race": "Multiracial",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-9590",
    "email": "jordanle@email.com",
    "emergencyContact": {
      "name": "Samuel Adeyemi (Family)",
      "phone": "(954) 555-6020"
    }
  },
  "problems": [
    {
      "problem": "Post-ORIF hip fracture \u2014 PT Day 3",
      "icd": "S72.001A",
      "onset": "2024",
      "status": "Active",
      "notes": "Margaret Chen, 78F \u2014 WBAT right hip per surgeon. PT evaluating mobility for discharge planning."
    },
    {
      "problem": "Pre-existing sarcopenia \u2014 fall risk factor",
      "icd": "M62.84",
      "onset": "2022",
      "status": "Active",
      "notes": "Grip strength 14kg (low). Baseline TUG 22 seconds pre-injury."
    },
    {
      "problem": "Delirium \u2014 resolving, impacts PT participation",
      "icd": "F05",
      "onset": "2024",
      "status": "Active",
      "notes": "CAM positive yesterday, now negative \u2014 cognitive fluctuation affects therapy engagement"
    }
  ],
  "medications": [
    {
      "name": "Oxycodone 5mg PO q4h PRN \u2014 pain management",
      "sig": "PRN for PT participation \u2014 give 30-45 min before session",
      "prescriber": "Ortho",
      "start": "11/2024",
      "refills": 0,
      "status": "Active PRN"
    },
    {
      "name": "Enoxaparin 40mg SQ daily",
      "sig": "DVT prophylaxis",
      "prescriber": "Ortho",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 650mg q6h scheduled",
      "sig": "Scheduled opioid-sparing",
      "prescriber": "Ortho",
      "start": "11/2024",
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
      "wt": "117 lbs",
      "ht": "5'7\"",
      "bmi": 18.3,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "117 lbs",
      "ht": "5'7\"",
      "bmi": 18.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "117 lbs",
      "ht": "5'7\"",
      "bmi": 18.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Margaret Chen",
      "assessment": "Working diagnosis: Margaret Chen",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/17/2024",
      "study": "Post-Op Hip X-ray AP/Lateral",
      "indication": "Post-ORIF Day 2 check",
      "findings": "Right hip: Cephalomedullary nail in good position. Fracture lines aligned. No hardware failure. Acetabulum intact.",
      "impression": "Stable fixation. WBAT as tolerated per surgeon."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V8564K",
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
    "caseId": "arc-hip-fracture-pt",
    "diagnosis": "Post-ORIF Hip Day 3 \u2014 PT: Weight-Bearing Progression, Fall Prevention, Discharge Mobility Criteria",
    "acuity": 3,
    "presentation": "Margaret Chen",
    "category": "orthopedic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with margaret chen. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this orthopedic presentation.",
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
      "Post-ORIF hip \u2014 PT discharge mobility criterion not yet met (correct)",
      "Cleared for discharge \u2014 functional mobility not yet assessed",
      "Require SNF \u2014 premature without PT functional assessment",
      "Non-weight bearing required \u2014 surgeon has cleared WBAT",
      "Delirium contraindication to PT \u2014 resolving delirium is not a PT contraindication",
      "Hardware failure \u2014 x-ray confirms stable fixation"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: Margaret Chen. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-ORIF hip, PT Day 3 \u2014 discharge planning. Key PT learning: (1) Discharge mobility criteria for home: ambulate 150+ feet with appropriate assistive device, safely negotiate stairs if home has them, independent or supervised bed-to-chair transfer, toilet transfer with supervision. If not met \u2192 SNF or extended acute rehab. (2) Weight-bearing prescription: WBAT means the patient sets their comfort limit. PT teaches proper gait pattern with walker: step-to or step-through depending on strength. Do NOT equate WBAT with full weight bearing \u2014 patient demonstrates tolerance. (3) Delirium and PT: resolving delirium is NOT a contraindication to PT \u2014 in fact, mobilization is the most powerful delirium treatment. Reorient at start of each session, use simple one-step commands, keep sessions shorter (15-20 min) and more frequent. (4) Pain timing: coordinate with nursing so oxycodone is given 30-45 min before PT session. Pain-free movement = better motor learning, better compliance, less fear-avoidance developing. (5) Fall risk documentation: Morse Fall Score \u226545 = high risk. PT's role: recommend assistive device for discharge, initiate hip precaution education, assess home safety and recommend modifications."
    }
  }
};
