
window.EMR_DATA = {
  "patient": {
    "name": "Alex Morgan",
    "dob": "03/16/1957",
    "age": 68,
    "sex": "Non-binary",
    "mrn": "RDX-2025-62197",
    "pronouns": "They/Them",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Chronic LBP",
    "race": "American Indian or Alaska Native",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-8559",
    "email": "alexmorg@email.com",
    "emergencyContact": {
      "name": "Fatima Al-Hassan (Family)",
      "phone": "(954) 555-3214"
    }
  },
  "problems": [
    {
      "problem": "Chronic non-specific LBP \u2014 fear-avoidance dominant",
      "icd": "M54.5",
      "onset": "2023",
      "status": "Active",
      "notes": "Tampa Scale 46, refuses exercise, disability claim \u2014 biopsychosocial model required"
    },
    {
      "problem": "Kinesiophobia \u2014 movement catastrophizing",
      "icd": "F40.298",
      "onset": "2023",
      "status": "Active",
      "notes": "Believes movement causes damage \u2014 pain beliefs drive disability, not structural pathology"
    },
    {
      "problem": "Deconditioning \u2014 8 months inactivity",
      "icd": "Z73.6",
      "onset": "2024",
      "status": "Active",
      "notes": "Secondary to fear avoidance \u2014 now a physical contributor"
    }
  ],
  "medications": [
    {
      "name": "Oxycodone 10mg BID \u2014 wean plan in progress",
      "sig": "Wean per pain management",
      "prescriber": "Pain Mgmt",
      "start": "2023",
      "refills": 2,
      "status": "Active \u2014 weaning"
    },
    {
      "name": "Duloxetine 60mg daily",
      "sig": "Take daily \u2014 chronic pain + depression component",
      "prescriber": "PCP",
      "start": "2024",
      "refills": 4,
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
      "wt": "86 lbs",
      "ht": "5'11\"",
      "bmi": 12.0,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "86 lbs",
      "ht": "5'11\"",
      "bmi": 12.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "86 lbs",
      "ht": "5'11\"",
      "bmi": 12.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Chronic LBP",
      "assessment": "Working diagnosis: Chronic LBP",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "06/15/2024",
      "study": "MRI Lumbar Spine",
      "indication": "Chronic LBP \u2014 structural evaluation",
      "findings": "L4-L5 Grade 1 anterolisthesis, moderate disc desiccation, mild foraminal narrowing. L5-S1 disc bulge without root compression.",
      "impression": "Mild degenerative changes \u2014 age-appropriate, common in asymptomatic adults. Structural findings do NOT correlate with this degree of disability."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V2697K",
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
    "caseId": "fear-avoidance-lbp-pt",
    "diagnosis": "Chronic LBP \u2014 Fear-Avoidance Model, Tampa Scale 46, Kinesiophobia-Driven Disability",
    "acuity": 3,
    "presentation": "Chronic LBP",
    "category": "musculoskeletal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with chronic lbp. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Chronic LBP \u2014 fear-avoidance model, kinesiophobia-driven disability (correct)",
      "Structural pathology causing disability \u2014 MRI findings are minimal",
      "Malingering \u2014 fear-avoidance is real, measurable, evidence-based",
      "Radiculopathy \u2014 no dermatomal symptoms",
      "Spondylolisthesis requiring surgery \u2014 Grade 1, not surgical",
      "Depression as primary \u2014 contributing but distinct from fear-avoidance"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: Chronic LBP. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: chronic LBP \u2014 fear-avoidance model dominant. Key PT learning: (1) Tampa Scale: score \u226537 = clinically significant kinesiophobia. Score 46 = high. Better predictor of PT dropout and poor outcomes than structural imaging. (2) Fear-avoidance cycle: pain \u2192 catastrophizing \u2192 movement fear \u2192 avoidance \u2192 deconditioning + hypervigilance \u2192 more pain. Breaking this cycle requires graded exposure \u2014 NOT validation of avoidance. (3) Session 1 strategy: build therapeutic alliance FIRST. Do NOT load the patient physically. Validate pain experience without validating avoidance beliefs. Explain pain neuroscience (pain \u2260 damage). (4) Pain neuroscience education (PNE): explaining pain as a protective nervous system output \u2014 not a tissue damage signal \u2014 reduces catastrophizing and improves willingness to move. 15-min PNE before exercise improves outcomes over exercise alone. (5) Graded exposure: hierarchy of feared activities, start with least feared, demonstrate safety through controlled experience. 'You bent forward without damage \u2014 this shows your back can move safely.'"
    }
  }
};
