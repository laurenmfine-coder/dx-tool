
window.EMR_DATA = {
  "patient": {
    "name": "Claire Nguyen",
    "dob": "09/13/1952",
    "age": 73,
    "sex": "Female",
    "mrn": "RDX-2025-82130",
    "pronouns": "She/Her",
    "insurance": "Medicaid",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Margaret Chen",
    "race": "Black or African American",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-3570",
    "email": "claireng@email.com",
    "emergencyContact": {
      "name": "Raj Sharma (Family)",
      "phone": "(954) 555-6282"
    }
  },
  "problems": [
    {
      "problem": "Post-ORIF hip fracture \u2014 OT Day 3, discharge tomorrow",
      "icd": "S72.001A",
      "onset": "2024",
      "status": "Active",
      "notes": "Margaret Chen, 78F. Lives alone in single-story home. Daughter available for 2 weeks post-discharge."
    },
    {
      "problem": "Hip precautions \u2014 restricting ADL independence",
      "icd": "Z74.3",
      "onset": "2024",
      "status": "Active",
      "notes": "No hip flexion >90\u00b0, no internal rotation, no crossing legs \u2014 impacts toileting, dressing, bathing"
    },
    {
      "problem": "Fear of falling \u2014 limiting engagement in therapy",
      "icd": "R41.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Prior fall history \u2014 heightened fall fear now post-surgery"
    }
  ],
  "medications": [
    {
      "name": "Acetaminophen 650mg q6h scheduled",
      "sig": "Opioid-sparing \u2014 give before OT session",
      "prescriber": "Ortho",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Oxycodone 5mg PRN (give 30-45 min before session)",
      "sig": "PRN for OT participation",
      "prescriber": "Ortho",
      "start": "11/2024",
      "refills": 0,
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
      "wt": "107 lbs",
      "ht": "5'10\"",
      "bmi": 15.4,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "107 lbs",
      "ht": "5'10\"",
      "bmi": 15.4,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "107 lbs",
      "ht": "5'10\"",
      "bmi": 15.4,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Margaret Chen",
      "assessment": "Working diagnosis: Margaret Chen",
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V8577K",
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
    "caseId": "arc-hip-fracture-ot",
    "diagnosis": "Post-ORIF Hip Day 3 \u2014 OT: Home Safety, ADL Retraining, Caregiver Training for Discharge",
    "acuity": 3,
    "presentation": "Margaret Chen",
    "category": "geriatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with margaret chen. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this geriatric presentation.",
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
      "Post-ORIF hip \u2014 OT discharge planning, home modification, caregiver training (correct)",
      "Clear for independent home discharge \u2014 cannot discharge patient who lives alone without adaptive equipment and trained caregiver",
      "SNF placement \u2014 premature without OT assessment; daughter available as caregiver",
      "PT responsibility only \u2014 OT manages ADL and home safety, PT manages mobility",
      "Hip precautions unnecessary \u2014 surgeon's precautions must be followed by OT",
      "Occupational profile deferred \u2014 profile is the foundation of OT intervention planning"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a ot case with chief complaint: Margaret Chen. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-ORIF hip \u2014 OT discharge preparation. Key OT learning: (1) Three non-negotiable OT outputs before discharge: (a) Adaptive equipment prescribed and trialed: raised toilet seat + grab bars (hip precautions make standard toilet dangerous), reacher/grabber (no bending past 90\u00b0), long-handled sponge for bathing, sock aid for dressing. (b) ADL task training with adapted techniques: demonstrate donning/doffing socks and shoes with sock aid and long-handled shoehorn while maintaining hip precautions. (c) Caregiver training \u2014 daughter must demonstrate safe assist technique for: toilet transfer, shower/bath entry, bed mobility, and recognizing hip precaution violations. (2) Home safety checklist: bathroom grab bars, non-slip bath mat, clear pathways (rugs removed), bed height appropriate (knee at hip level), chair with armrests for rising. (3) Fear of falling: validate fear, explain that the surgery has fixed the structural problem, grade activity exposure. Fear of falling \u2192 avoidance \u2192 deconditioning \u2192 MORE fall risk. (4) Equipment follow-through: OT writes DME prescription (raised toilet seat, walker, grab bars for home installation). Without this documentation, insurance won't cover equipment. (5) OT communicates to discharge team: 'Patient requires raised toilet seat and grab bars before discharge, and daughter trained. Patient is ready for home with these in place and 2 weeks of caregiver support.'"
    }
  }
};
