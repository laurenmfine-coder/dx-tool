
window.EMR_DATA = {
  "patient": {
    "name": "Mei Lin",
    "dob": "10/12/1987",
    "age": 38,
    "sex": "Female",
    "mrn": "RDX-2025-45050",
    "pronouns": "She/Her",
    "insurance": "Medicare",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Neck Pain + Bilateral Hand Numbness + Gait Disturbance",
    "race": "Multiracial",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-4276",
    "email": "meilin@email.com",
    "emergencyContact": {
      "name": "Tamika Williams (Family)",
      "phone": "(954) 555-9503"
    }
  },
  "problems": [
    {
      "problem": "Cervical spondylotic myelopathy \u2014 suspected",
      "icd": "G99.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Bilateral hand numbness + gait disturbance + hyperreflexia \u2014 UMN signs"
    },
    {
      "problem": "Cervical spondylosis \u2014 multilevel",
      "icd": "M47.12",
      "onset": "2024",
      "status": "Active",
      "notes": "MRI ordered \u2014 clinical presentation sufficient for urgent referral"
    },
    {
      "problem": "Fall risk \u2014 spastic gait",
      "icd": "R26.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Wide-based gait, tandem walk impaired \u2014 myelopathic pattern"
    }
  ],
  "medications": [
    {
      "name": "Naproxen 500mg BID PRN",
      "sig": "For cervical pain as needed",
      "prescriber": "PCP",
      "start": "2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Gabapentin 300mg BID",
      "sig": "Take twice daily \u2014 neuropathic paresthesias",
      "prescriber": "PCP",
      "start": "2024",
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
      "wt": "112 lbs",
      "ht": "5'7\"",
      "bmi": 17.5,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "112 lbs",
      "ht": "5'7\"",
      "bmi": 17.5,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "112 lbs",
      "ht": "5'7\"",
      "bmi": 17.5,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Neck Pain + Bilateral Hand Numbness + Gait Disturbance",
      "assessment": "Working diagnosis: Neck Pain + Bilateral Hand Numbness + Gait Disturbance",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Cervical Spine X-ray + MRI Ordered Urgently",
      "indication": "UMN signs \u2014 myelopathy screen",
      "findings": "X-ray: C5-C6 and C6-C7 disc space narrowing, osteophytes. MRI PENDING \u2014 ordered urgently.",
      "impression": "Multilevel cervical spondylosis on plain film. MRI required before any cervical PT intervention."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4099K",
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
    "caseId": "cervical-myelopathy-screen-pt",
    "diagnosis": "Cervical Spondylotic Myelopathy \u2014 UMN Signs on Screen, Urgent Neurosurgical Referral Required",
    "acuity": 2,
    "presentation": "Neck Pain + Bilateral Hand Numbness + Gait Disturbance",
    "category": "musculoskeletal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with neck pain + bilateral hand numbness + gait disturbance. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Cervical spondylotic myelopathy \u2014 neurosurgical referral (correct, NOT a PT case yet)",
      "Cervical radiculopathy \u2014 LMN signs, different clinical picture",
      "Multiple sclerosis \u2014 cervical compression must be excluded first",
      "ALS \u2014 workup needed but myelopathy priority",
      "Peripheral neuropathy \u2014 cannot explain UMN signs",
      "Normal pressure hydrocephalus \u2014 different gait pattern"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: Neck Pain + Bilateral Hand Numbness + Gait Disturbance. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: cervical spondylotic myelopathy \u2014 NOT safe for cervical PT until neurosurgical clearance. Key PT learning: (1) UMN screening is the most important cervical PT skill. Red flags: Hoffman's sign, Babinski, hyperreflexia (biceps/triceps/brachioradialis), ankle clonus, inverted supinator, Lhermitte's sign. ANY positive = stop, refer, do not treat. (2) Immediate action: call referring physician (not a fax), communicate 'I found UMN signs \u2014 needs urgent neurosurgical evaluation before cervical PT.' Document time of call. (3) Why urgent: cord compression from spondylosis is progressive. Manual therapy, traction, or aggressive AROM on a myelopathic spine risks cord injury. Minor fall = catastrophic cord event. (4) What PT CAN do now: cervical precaution education, advise against contact sports/heavy lifting/high-risk yoga, refer for fall safety assessment. (5) Documentation: 'Cervical PT deferred pending neurosurgical clearance \u2014 UMN signs identified. Referring provider notified [time].'"
    }
  }
};
