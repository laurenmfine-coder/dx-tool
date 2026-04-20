
window.EMR_DATA = {
  "patient": {
    "name": "Ahmed Hassan",
    "dob": "02/27/1962",
    "age": 63,
    "sex": "Male",
    "mrn": "RDX-2025-53407",
    "pronouns": "He/Him",
    "insurance": "Medicare",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Kevin Torres",
    "race": "American Indian or Alaska Native",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-4257",
    "email": "ahmedhas@email.com",
    "emergencyContact": {
      "name": "Raj Sharma (Family)",
      "phone": "(954) 555-3202"
    }
  },
  "problems": [
    {
      "problem": "Chronic LBP \u2014 opioid-dependent, PT involvement",
      "icd": "M54.5",
      "onset": "2022",
      "status": "Active",
      "notes": "Kevin Torres, oxycodone 30mg/day. Pain management weaning. PT for functional restoration."
    },
    {
      "problem": "Opioid-induced hyperalgesia \u2014 possible",
      "icd": "G89.29",
      "onset": "2024",
      "status": "Active",
      "notes": "Paradoxically worsening pain despite opioid escalation \u2014 OIH suspected"
    },
    {
      "problem": "Deconditioning \u2014 14 months off work",
      "icd": "Z73.6",
      "onset": "2023",
      "status": "Active",
      "notes": "Previous construction worker \u2014 core strength grade 2/5, endurance severely reduced"
    }
  ],
  "medications": [
    {
      "name": "Oxycodone \u2014 weaning per pain management",
      "sig": "Tapering schedule \u2014 PT should communicate exercise tolerance to pain team",
      "prescriber": "Pain Management",
      "start": "2022",
      "refills": 2,
      "status": "Active \u2014 tapering"
    },
    {
      "name": "Duloxetine 60mg daily \u2014 chronic pain",
      "sig": "Take daily",
      "prescriber": "PCP",
      "start": "2024",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Cyclobenzaprine 5mg QHS PRN muscle spasm",
      "sig": "At bedtime as needed",
      "prescriber": "PCP",
      "start": "2024",
      "refills": 2,
      "status": "Active PRN"
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
      "wt": "60 lbs",
      "ht": "5'11\"",
      "bmi": 8.4,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "60 lbs",
      "ht": "5'11\"",
      "bmi": 8.4,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "60 lbs",
      "ht": "5'11\"",
      "bmi": 8.4,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Kevin Torres",
      "assessment": "Working diagnosis: Kevin Torres",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "06/15/2024",
      "study": "MRI Lumbar Spine",
      "indication": "Chronic LBP",
      "findings": "L4-L5 Grade 1 anterolisthesis, moderate disc desiccation, mild foraminal narrowing. L5-S1 disc bulge, no root compression.",
      "impression": "Mild degenerative changes \u2014 do not correlate with degree of disability. Age-appropriate findings."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V8403K",
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
    "caseId": "arc-pain-pt",
    "diagnosis": "Chronic LBP \u2014 PT Treating Fear-Avoidance with Graded Exercise, Opioid Weaning Support",
    "acuity": 3,
    "presentation": "Kevin Torres",
    "category": "musculoskeletal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with kevin torres. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Chronic LBP \u2014 functional restoration PT with opioid weaning (correct)",
      "Surgical candidate \u2014 Grade 1 anterolisthesis is not surgical",
      "Opioid dose increase needed \u2014 paradoxical worsening = possible OIH, not undertreated pain",
      "Passive modalities only \u2014 evidence shows worse outcomes vs active exercise",
      "Pain is structural \u2014 MRI findings are mild and non-correlating",
      "Disability permanent \u2014 functional restoration is evidence-based treatment"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: Kevin Torres. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: chronic LBP \u2014 PT functional restoration with opioid weaning. Key PT learning: (1) Opioid-induced hyperalgesia (OIH): long-term opioids activate NMDA receptors and sensitize pain pathways \u2014 paradoxically increasing pain sensitivity. If pain is WORSENING despite dose increases, suspect OIH. PT communicates this pattern to the pain team. (2) Functional restoration approach: goal is not 'zero pain' but functional capacity. Quota-based progression: start at 50% of maximal effort, increase 10% per session regardless of pain. This breaks the pain-contingent exercise barrier. (3) PT scope in opioid weaning: PT provides the 'competing input' for the pain system \u2014 active exercise reduces central sensitization. PT communicates to pain team: 'Patient tolerating X minutes of graded exercise \u2014 opioid reduction may be supported by current functional progress.' (4) Core rehabilitation: construction worker with 2/5 core strength. Priority: stabilization exercises (McGill Big 3: curl-up, bird dog, side plank) before loading. (5) Return-to-work: functional capacity evaluation at 8-12 weeks \u2014 determines whether construction work is feasible or vocational retraining needed."
    }
  }
};
