
window.EMR_DATA = {
  "patient": {
    "name": "Taylor Kim",
    "dob": "03/14/1978",
    "age": 47,
    "sex": "Non-binary",
    "mrn": "RDX-2025-63653",
    "pronouns": "They/Them",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Post-Stroke Driver Evaluation",
    "race": "White",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-3676",
    "email": "taylorki@email.com",
    "emergencyContact": {
      "name": "Carlos Rivera (Family)",
      "phone": "(954) 555-1270"
    }
  },
  "problems": [
    {
      "problem": "Post-stroke driver rehabilitation evaluation",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "58yo post-left MCA stroke, wants to return to driving. OT driving evaluation requested."
    },
    {
      "problem": "Right homonymous hemianopsia \u2014 driving disqualification",
      "icd": "H53.461",
      "onset": "2024",
      "status": "Active",
      "notes": "Right visual field loss in both eyes \u2014 Florida requires 130\u00b0 binocular field. Not met."
    },
    {
      "problem": "Executive function deficits \u2014 cognitive screen positive",
      "icd": "F07.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Trail Making Test B 148 sec (>78 sec = elevated risk). Impulsivity noted on MoCA subtests."
    }
  ],
  "medications": [
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take daily",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS",
      "sig": "Take at bedtime",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 5,
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
      "wt": "92 lbs",
      "ht": "5'1\"",
      "bmi": 17.4,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "92 lbs",
      "ht": "5'1\"",
      "bmi": 17.4,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "92 lbs",
      "ht": "5'1\"",
      "bmi": 17.4,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Post-Stroke Driver Evaluation",
      "assessment": "Working diagnosis: Post-Stroke Driver Evaluation",
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "09/10/2024",
      "study": "Humphrey Visual Field 24-2 OU",
      "indication": "Driving evaluation \u2014 post-stroke field assessment",
      "findings": "Right eye and left eye: Dense right homonymous hemianopsia. Approximately 90\u00b0 of binocular horizontal visual field remaining. Florida minimum: 130\u00b0.",
      "impression": "Visual field loss does not meet Florida driving requirements. Clear disqualification on this criterion alone."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1038K",
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
    "caseId": "ot-driver-rehabilitation",
    "diagnosis": "Post-Stroke Driver Rehabilitation Evaluation \u2014 Right Homonymous Hemianopsia, Cognitive Screen Positive",
    "acuity": 3,
    "presentation": "Post-Stroke Driver Evaluation",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with post-stroke driver evaluation. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Post-stroke driver evaluation \u2014 visual field disqualifies driving (correct)",
      "Cleared for driving \u2014 visual field and cognitive screen both abnormal",
      "Conditional clearance \u2014 one failed criterion is sufficient for disqualification",
      "Re-evaluate after more recovery \u2014 appropriate if patient requests",
      "Adaptive driving with bioptic telescope \u2014 not for hemianopsia (designed for low acuity)",
      "Family override \u2014 patient has right to be evaluated, family cannot override"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a ot case with chief complaint: Post-Stroke Driver Evaluation. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-stroke driver evaluation \u2014 not cleared (visual field + cognitive deficits). Key OT driving rehabilitation learning: (1) OT driver rehabilitation specialist (DRS) role: evaluate visual, cognitive, and physical capacity for driving. Not a DMV function \u2014 OT provides clinical recommendation, DMV issues or revokes license. (2) Florida driving visual requirements: visual acuity \u226520/70 best corrected, binocular horizontal visual field \u2265130\u00b0. This patient has 90\u00b0 remaining = does NOT meet field requirement regardless of acuity. (3) Cognitive screening for driving: Trail Making Test B >78 sec = elevated crash risk (neuropsychological literature). MoCA <26 with executive deficits = concern. Both are present here. Even if vision were adequate, cognitive deficits would require further evaluation. (4) The difficult conversation: 'Based on my evaluation, I cannot recommend return to driving at this time. You have two findings \u2014 visual field and cognitive \u2014 that create significant safety risk. This is a medical finding, not a judgment. I will document this in my report.' Offer alternatives: ride services, family transportation, public transit. (5) Mandatory reporting: Florida: physicians MAY report, no mandatory statute for OTs specifically. However, if patient indicates they WILL continue driving despite the recommendation, discuss with physician (who has permissive reporting authority). Document all conversations."
    }
  }
};
