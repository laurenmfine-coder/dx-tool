
window.EMR_DATA = {
  "patient": {
    "name": "Sarah Kim",
    "dob": "07/05/1956",
    "age": 69,
    "sex": "Female",
    "mrn": "RDX-2025-19545",
    "pronouns": "She/Her",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Parkinson Disease",
    "race": "White",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-1645",
    "email": "sarahkim@email.com",
    "emergencyContact": {
      "name": "Marcus Johnson (Family)",
      "phone": "(954) 555-7421"
    }
  },
  "problems": [
    {
      "problem": "Parkinson disease \u2014 Stage III Hoehn & Yahr",
      "icd": "G20",
      "onset": "2018",
      "status": "Active",
      "notes": "Third fall this month, festination, freezing at doorways"
    },
    {
      "problem": "Orthostatic hypotension",
      "icd": "I95.1",
      "onset": "2022",
      "status": "Active",
      "notes": "BP drop >20 systolic on standing \u2014 contributes to falls"
    }
  ],
  "medications": [
    {
      "name": "Carbidopa-levodopa 25-100mg TID",
      "sig": "Take 1 tablet by mouth three times daily \u2014 30 min before meals",
      "prescriber": "Dr. Neurology",
      "start": "2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Pramipexole 0.5mg TID",
      "sig": "Take 1 tablet by mouth three times daily",
      "prescriber": "Dr. Neurology",
      "start": "2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Midodrine 5mg TID",
      "sig": "Take 1 tablet three times daily, not after 6pm",
      "prescriber": "Dr. Neurology",
      "start": "2023",
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
      "wt": "94 lbs",
      "ht": "5'1\"",
      "bmi": 17.8,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "94 lbs",
      "ht": "5'1\"",
      "bmi": 17.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "94 lbs",
      "ht": "5'1\"",
      "bmi": 17.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Parkinson Disease",
      "assessment": "Working diagnosis: Parkinson Disease",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1625K",
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
    "caseId": "parkinson-falls-pt",
    "diagnosis": "Parkinson Disease with Postural Instability and Gait Disorder (PIGD) \u2014 High Fall Risk",
    "acuity": 3,
    "presentation": "Parkinson Disease",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with parkinson disease. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this neurologic presentation.",
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
      "Parkinson disease with PIGD \u2014 fall risk (correct)",
      "Progressive supranuclear palsy \u2014 early parkinsonism",
      "Multiple system atrophy \u2014 autonomic dominant",
      "Medication-induced parkinsonism",
      "Normal pressure hydrocephalus \u2014 gait disorder",
      "Vascular parkinsonism \u2014 step-wise pattern"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: Parkinson Disease. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: PD with PIGD, Hoehn & Yahr Stage III, high fall risk. Key PT learning points: (1) Evidence-based PT for PD: LSVT BIG (amplitude-focused motor training) has strongest RCT support for motor function. Tango dancing also has strong evidence. Standard PT is less effective than cueing strategies. (2) Balance assessment: Berg Balance Scale <45 = high fall risk; MiniBESTest is more sensitive for PD. (3) Freezing of gait (FOG) strategies: auditory cues (metronome), visual cues (laser pointer, floor lines), attentional strategies, counting steps, turning technique. (4) Orthostatic hypotension: PT exercises supine/sitting first, check BP standing, compression garments, avoid hot environments, tilt-table training if severe. (5) Dual-task training is essential in PD \u2014 the loss of automaticity means patients must consciously control gait, but cannot simultaneously talk. This is why freezing occurs at doorways (cognitive demand increases)."
    }
  }
};
