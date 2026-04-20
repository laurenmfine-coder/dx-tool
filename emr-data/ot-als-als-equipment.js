
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "03/02/1974",
    "age": 51,
    "sex": "Non-binary",
    "mrn": "RDX-2025-57323",
    "pronouns": "They/Them",
    "insurance": "Tricare",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "ALS Diagnosis",
    "race": "Middle Eastern",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-2086",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Ahmed Hassan (Family)",
      "phone": "(954) 555-4336"
    }
  },
  "problems": [
    {
      "problem": "ALS \u2014 progressive functional decline trajectory",
      "icd": "G12.21",
      "onset": "2023",
      "status": "Active",
      "notes": "Diagnosed 14 months ago. Bilateral UE weakness grade 3/5 proximal, 4/5 distal. Speech slowing (dysarthria)."
    },
    {
      "problem": "Dysarthria \u2014 early, AAC planning needed now",
      "icd": "R47.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Speech intelligibility declining \u2014 AAC evaluation BEFORE speech unintelligible is critical for voice banking"
    },
    {
      "problem": "Anticipatory care planning \u2014 advance directives needed",
      "icd": "Z66",
      "onset": "2024",
      "status": "Active",
      "notes": "ALS = terminal diagnosis. Advance directives, ventilation decision, feeding tube timing should be discussed proactively"
    }
  ],
  "medications": [
    {
      "name": "Riluzole 50mg BID",
      "sig": "Take twice daily \u2014 only disease-modifying medication. Extends survival ~3 months on average.",
      "prescriber": "Neurology",
      "start": "2023",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Edaravone 60mg IV 10 days/month (if covered)",
      "sig": "Monthly IV infusion \u2014 antioxidant, may slow functional decline",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Baclofen 20mg TID \u2014 spasticity",
      "sig": "Take three times daily",
      "prescriber": "Neurology",
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
      "wt": "117 lbs",
      "ht": "5'1\"",
      "bmi": 22.1,
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
      "ht": "5'1\"",
      "bmi": 22.1,
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
      "ht": "5'1\"",
      "bmi": 22.1,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for ALS Diagnosis",
      "assessment": "Working diagnosis: ALS Diagnosis",
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V8206K",
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
    "caseId": "ot-als-als-equipment",
    "diagnosis": "ALS \u2014 OT Progressive Equipment Planning: AAC, ADL Adaptation, Anticipatory Care Planning",
    "acuity": 3,
    "presentation": "ALS Diagnosis",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with als diagnosis. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Tell me about a typical day for you.",
      "What activities are most important to you?",
      "What are you having trouble doing now?",
      "What did you do before this problem?",
      "Tell me about your home setup.",
      "Who helps you at home?",
      "What are your goals for therapy?",
      "What does success look like to you?",
      "Are you having any cognitive difficulties?",
      "Tell me about your work and leisure activities."
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
      "Occupational profile interview",
      "ADL observation",
      "Cognitive screen (MMSE or MoCA)",
      "Upper extremity function",
      "Fine motor assessment",
      "Home safety evaluation",
      "Assistive device assessment",
      "Goals setting interview"
    ],
    "examFindings": {
      "Occupational Profile": "ADL limitations identified relevant to diagnosis",
      "Cognitive Screen": "Results per case presentation",
      "Upper Extremity": "Findings consistent with functional limitation",
      "Home Safety": "Risk factors identified per case context"
    },
    "ddxTargets": [
      "ALS \u2014 progressive equipment and anticipatory planning (correct)",
      "Myasthenia gravis \u2014 fatigable weakness, different from UMN+LMN pattern of ALS",
      "Multifocal motor neuropathy \u2014 pure LMN, treatable with IVIG",
      "Kennedy disease \u2014 X-linked bulbospinal, slower progression",
      "Cervical myelopathy \u2014 imaging distinguishes",
      "Primary lateral sclerosis \u2014 pure UMN, much slower progression than ALS"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a ot case with chief complaint: ALS Diagnosis. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: ALS \u2014 OT anticipatory equipment planning. Key OT learning: (1) Anticipatory equipment planning is ALS OT's core competency \u2014 do NOT wait until the patient cannot use equipment to order it. Order ahead of functional decline. AAC (augmentative and alternative communication) MUST be evaluated when speech is still 80%+ intelligible for voice banking (recording patient's natural voice for future synthetic speech). (2) OT ALS equipment trajectory: now (dysarthria beginning) \u2192 AAC evaluation + low-tech communication boards. As hand strength declines \u2192 adapted feeding utensils, button hooks, dressing aids, environmental control units. As ambulation declines \u2192 power wheelchair with head/chin controls (evaluate 2+ months before needed). Respiratory decline \u2192 positioning for ventilatory support. (3) Voice banking: apps like ModelTalker, Acapela MyOwnVoice allow patient to record phrases while voice intact. Creates a personalized synthetic voice. This opportunity disappears when dysarthria is severe \u2014 OT must refer now. (4) Advance directive conversation: OT is often the team member with the most patient time. Creating an environment for this discussion is appropriate. Key decisions: (a) PEG feeding tube timing (FVC >50% = better surgical tolerance), (b) Non-invasive ventilation (BiPAP), (c) Invasive ventilation (tracheostomy). Patient chooses, OT documents and supports. (5) Caregiver training: ALS caregiver burden is extreme. OT assesses caregiver capacity, teaches proper transfer techniques early, identifies respite resources."
    }
  }
};
