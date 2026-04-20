
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "05/06/1987",
    "age": 38,
    "sex": "Non-binary",
    "mrn": "RDX-2025-29751",
    "pronouns": "They/Them",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Kevin Torres",
    "race": "Asian",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-9112",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Nicole Okafor (Family)",
      "phone": "(954) 555-5369"
    }
  },
  "problems": [
    {
      "problem": "Chronic LBP \u2014 construction worker off work 14 months, OT referral",
      "icd": "M54.5",
      "onset": "2022",
      "status": "Active",
      "notes": "Kevin Torres. Construction impossible currently. OT for work hardening and occupational role re-engagement."
    },
    {
      "problem": "Occupational role loss \u2014 construction no longer feasible",
      "icd": "Z56.9",
      "onset": "2023",
      "status": "Active",
      "notes": "14 months off work. Identity tied to being a provider. Meaning and purpose severely compromised."
    },
    {
      "problem": "Pain catastrophizing \u2014 Tampa Scale 48",
      "icd": "F40.298",
      "onset": "2023",
      "status": "Active",
      "notes": "Catastrophizing is preventing engagement in meaningful occupation, not just exercise"
    }
  ],
  "medications": [
    {
      "name": "Oxycodone \u2014 tapering per pain management",
      "sig": "Wean schedule ongoing",
      "prescriber": "Pain Mgmt",
      "start": "2022",
      "refills": 1,
      "status": "Active \u2014 tapering"
    },
    {
      "name": "Duloxetine 60mg daily",
      "sig": "Take daily",
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
      "wt": "139 lbs",
      "ht": "5'10\"",
      "bmi": 19.9,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "139 lbs",
      "ht": "5'10\"",
      "bmi": 19.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "139 lbs",
      "ht": "5'10\"",
      "bmi": 19.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Kevin Torres",
      "assessment": "Working diagnosis: Kevin Torres",
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "06/15/2024",
      "study": "MRI Lumbar Spine",
      "indication": "Chronic LBP",
      "findings": "L4-L5 Grade 1 anterolisthesis, moderate disc desiccation. L5-S1 disc bulge, no root compression.",
      "impression": "Mild degenerative changes \u2014 non-correlating with disability level."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5448K",
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
    "caseId": "arc-pain-ot",
    "diagnosis": "Chronic LBP \u2014 OT Role: Return to Meaningful Occupation, Pain Self-Management, Work Hardening",
    "acuity": 3,
    "presentation": "Kevin Torres",
    "category": "musculoskeletal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with kevin torres. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this musculoskeletal presentation.",
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
      "Chronic LBP \u2014 OT occupational role restoration and work hardening (correct)",
      "PT handles all LBP \u2014 PT addresses movement/strength; OT addresses occupational performance",
      "OT role limited to ADL \u2014 OT addresses ALL occupations including work and leisure",
      "Construction return impossible \u2014 OT work hardening assesses actual capacity",
      "Pain must reach 0 before return to work \u2014 not evidence-based, functional capacity is the goal",
      "Disability permanent \u2014 OT functional capacity evaluation determines realistic prognosis"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a ot case with chief complaint: Kevin Torres. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: chronic LBP \u2014 OT occupational identity and work hardening. Key OT learning: (1) OT scope in chronic pain: beyond ADL, OT addresses WORK (vocational rehabilitation, work hardening, FCE), LEISURE (re-engagement with meaningful activities pain doesn't preclude), and REST/SLEEP (sleep hygiene, pain interrupting sleep). This patient's occupational deprivation is the central issue. (2) Work hardening vs work conditioning: work conditioning = physical reconditioning (strength, endurance). Work hardening = simulation of specific job tasks. For a construction worker: lifting, carrying, overhead work, kneeling. Start at 30% capacity, progress over 8-12 weeks. (3) Functional Capacity Evaluation (FCE): standardized assessment of material handling capacity (lifting, pushing, pulling), positional tolerance, and reliability of effort. Results guide: return to original work, modified duty, or vocational retraining. (4) Occupational identity restoration: 'Who are you when you're not able to work?' Kevin's identity as provider is central. OT explores: what aspects of construction did he value (skill, physicality, problem-solving)? Can those be met in modified or alternative roles? (5) OT communicates to team: 'Kevin's functional capacity on FCE: lift 30 lbs floor-to-waist, carry 20 lbs 50 feet. Cannot sustain overhead work >5 min. Recommend modified duty (no lifting >30 lbs, no prolonged overhead) or vocational retraining assessment.'"
    }
  }
};
