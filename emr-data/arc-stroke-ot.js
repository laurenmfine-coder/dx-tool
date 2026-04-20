
window.EMR_DATA = {
  "patient": {
    "name": "Maria Santos",
    "dob": "11/01/1970",
    "age": 55,
    "sex": "Female",
    "mrn": "RDX-2025-45347",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "James Okoye",
    "race": "Middle Eastern",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-5118",
    "email": "mariasan@email.com",
    "emergencyContact": {
      "name": "Sam Patel (Family)",
      "phone": "(954) 555-5598"
    }
  },
  "problems": [
    {
      "problem": "Left MCA stroke \u2014 right hemiplegia, possible right neglect",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "James Okoye. Bumping into doorframes on right. May have contralateral neglect \u2014 needs formal assessment."
    },
    {
      "problem": "Upper extremity hemiplegia \u2014 Brunnstrom Stage II right UE",
      "icd": "G83.20",
      "onset": "2024",
      "status": "Active",
      "notes": "Right UE flaccid with emerging spasticity \u2014 feeding currently not independent"
    },
    {
      "problem": "Dysphagia \u2014 modified texture diet",
      "icd": "R13.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Pureed diet + nectar-thick liquids per SLP \u2014 OT addresses positioning and adaptive utensils"
    }
  ],
  "medications": [
    {
      "name": "Aspirin 81mg daily",
      "sig": "Daily \u2014 antiplatelet",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Baclofen 5mg TID",
      "sig": "Antispastic \u2014 starting for UE spasticity",
      "prescriber": "Neurology",
      "start": "11/2024",
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
      "wt": "100 lbs",
      "ht": "5'3\"",
      "bmi": 17.7,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "100 lbs",
      "ht": "5'3\"",
      "bmi": 17.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "100 lbs",
      "ht": "5'3\"",
      "bmi": 17.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for James Okoye",
      "assessment": "Working diagnosis: James Okoye",
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/05/2024",
      "study": "MRI Brain",
      "indication": "Acute stroke",
      "findings": "Left MCA infarct, frontal and anterior parietal.",
      "impression": "Left MCA stroke \u2014 contralateral (right) UMN signs and possible neglect from non-dominant hemisphere involvement if right-handed."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3053K",
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
    "caseId": "arc-stroke-ot",
    "diagnosis": "Left MCA Stroke Day 5 \u2014 OT: Unilateral Neglect Assessment, Feeding Independence, ADL Neuroplasticity",
    "acuity": 3,
    "presentation": "James Okoye",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with james okoye. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Left MCA stroke \u2014 unilateral neglect assessment, ADL neuroplasticity (correct)",
      "Hemianopia only \u2014 visual field cut is different from neglect",
      "Right MCA stroke \u2014 left MCA causes right-sided deficits (correctly identified)",
      "No neglect \u2014 bumping into right doorframes requires formal assessment",
      "OT not needed for motor deficits \u2014 OT addresses ADL function and occupation",
      "PT is the ADL specialist \u2014 OT specifically manages ADL, PT manages mobility/gait"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a ot case with chief complaint: James Okoye. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: left MCA stroke \u2014 OT right unilateral neglect and ADL training. Key OT learning: (1) Unilateral neglect vs hemianopia: hemianopia = visual field loss (intact awareness, just can't see on one side). Neglect = failure to attend to contralesional space even when vision is intact (patient can see right side but doesn't orient to it). Formally assess with: line bisection test, star cancellation test, copying tasks. If neglect present: modify environment (approach from aware side), cue to scan right, anchor activities on right side. (2) Left MCA involvement and neglect: LEFT MCA stroke affects the RIGHT hemisphere body (hemiplegia right side). Neglect is classically associated with RIGHT MCA stroke causing left neglect \u2014 however, any large MCA stroke can cause contralateral inattention. The doorframe bumping pattern warrants formal assessment. (3) Feeding as priority ADL: OT addresses adaptive utensils (weighted spoon if tremor/weakness, plate guard, dycem mat), one-handed cutting technique, positioning. Feeding independence has high patient value and is feasible even with Stage II UE with left hand. (4) Neuroplasticity: even with right UE at Brunnstrom Stage II, task-specific practice with weight-bearing through the affected arm (arm in extended position during sitting activities) promotes cortical reorganization. Don't ignore the affected arm. (5) Communication with aphasia: use closed questions, picture boards, thumbs up/down. Establish a reliable 'yes/no' communication system at the start of every OT session."
    }
  }
};
