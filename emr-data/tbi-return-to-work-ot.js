
window.EMR_DATA = {
  "patient": {
    "name": "Rosa Hernandez",
    "dob": "09/27/1967",
    "age": 58,
    "sex": "Female",
    "mrn": "RDX-2025-93513",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Moderate TBI Ago",
    "race": "Asian",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-8684",
    "email": "rosahern@email.com",
    "emergencyContact": {
      "name": "Claire Nguyen (Family)",
      "phone": "(954) 555-9227"
    }
  },
  "problems": [
    {
      "problem": "Moderate TBI \u2014 dysexecutive syndrome",
      "icd": "S06.2X4A",
      "onset": "2024",
      "status": "Active",
      "notes": "Normal MoCA in clinic; failing at work \u2014 ecological validity gap"
    },
    {
      "problem": "Cognitive fatigue \u2014 post-TBI",
      "icd": "G93.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Functional collapse after 3-4 hours \u2014 energy envelope exceeded"
    },
    {
      "problem": "Return-to-work failure \u2014 work demands exceed capacity",
      "icd": "Z56.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Employer considering termination \u2014 OT RTW assessment needed urgently"
    }
  ],
  "medications": [
    {
      "name": "Amantadine 100mg BID",
      "sig": "Take twice daily",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Melatonin 5mg QHS",
      "sig": "Take at bedtime",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 6,
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
      "ht": "5'0\"",
      "bmi": 25.2,
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
      "ht": "5'0\"",
      "bmi": 25.2,
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
      "ht": "5'0\"",
      "bmi": 25.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Moderate TBI Ago",
      "assessment": "Working diagnosis: Moderate TBI Ago",
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "04/10/2024",
      "study": "MRI Brain (3mo post-TBI)",
      "indication": "Moderate TBI surveillance",
      "findings": "Bilateral frontal microhemorrhages on SWI. Right frontal contusion evolving. White matter changes frontal projections.",
      "impression": "Frontal lobe injury pattern explaining dysexecutive syndrome."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V9603K",
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
    "caseId": "tbi-return-to-work-ot",
    "diagnosis": "Moderate TBI 7 Months Post \u2014 Dysexecutive Syndrome Causing Work Failure Despite Normal Clinic Testing",
    "acuity": 3,
    "presentation": "Moderate TBI Ago",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with moderate tbi ago. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Moderate TBI \u2014 dysexecutive syndrome, ecologically valid assessment needed (correct)",
      "Malingering \u2014 fear of secondary gain (OT assessment objectively characterizes impairment)",
      "Major depression \u2014 cognitive symptoms overlap, co-evaluate",
      "ADHD \u2014 pre-existing or unmasked",
      "Medication side effect \u2014 amantadine",
      "Full recovery \u2014 normal clinic test is falsely reassuring"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a ot case with chief complaint: Moderate TBI Ago. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: moderate TBI, dysexecutive syndrome \u2014 normal clinic testing misses real-world failure. Key OT learning: (1) Ecological validity gap: clinic testing is quiet, one-on-one, no distractions, short duration. Work = noise, competing priorities, interruptions, sustained 8 hours. This patient FAILS under load, not in controlled settings. (2) Use ecologically valid assessments: Multiple Errands Test (real shopping environment), kitchen task observation, simulated work tasks. These capture breakdown under cognitive load. (3) Energy envelope: post-TBI fatigue is neurological \u2014 not depression, not motivation. Limited daily cognitive budget. Once exceeded, performance deteriorates for hours to days. Teach pacing: structured breaks q90min, priority tasks in AM, written external memory aids. (4) RTW recommendations for employer: phased return (start 4h/day), quiet workspace, written daily task list, no >2-3 simultaneous priorities, flexible scheduling. (5) OT report language: 'This employee has documented cognitive limitations consistent with TBI. Reasonable accommodations under ADA include X, Y, Z. Phased return over 8-12 weeks is medically supported.'"
    }
  }
};
