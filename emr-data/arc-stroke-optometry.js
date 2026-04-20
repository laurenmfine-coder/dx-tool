
window.EMR_DATA = {
  "patient": {
    "name": "Maria Santos",
    "dob": "07/27/1960",
    "age": 65,
    "sex": "Female",
    "mrn": "RDX-2025-87108",
    "pronouns": "She/Her",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "James Okoye",
    "race": "Black or African American",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-1873",
    "email": "mariasan@email.com",
    "emergencyContact": {
      "name": "Carmen Rivera (Family)",
      "phone": "(954) 555-2051"
    }
  },
  "problems": [
    {
      "problem": "Right homonymous hemianopia \u2014 post-left MCA stroke",
      "icd": "H53.461",
      "onset": "2024",
      "status": "Active",
      "notes": "James Okoye. Stroke 2 months ago. Now noticing missing right visual field. Bumping into objects right side."
    },
    {
      "problem": "Driving unsafe \u2014 right visual field loss",
      "icd": "Z87.39",
      "onset": "2024",
      "status": "Active",
      "notes": "Cannot legally drive with <120\u00b0 visual field. Must be counseled and documented."
    },
    {
      "problem": "Reading difficulty \u2014 right field loss disrupts saccades",
      "icd": "H53.12",
      "onset": "2024",
      "status": "Active",
      "notes": "Loses place when reading \u2014 right field loss disrupts rightward saccades needed for reading"
    }
  ],
  "medications": [
    {
      "name": "Aspirin 81mg daily",
      "sig": "Antiplatelet for secondary stroke prevention",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS",
      "sig": "Take at bedtime",
      "prescriber": "Neurology",
      "start": "2024",
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
      "bp": "136/84",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "96 lbs",
      "ht": "5'4\"",
      "bmi": 16.5,
      "setting": "Eye Clinic"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "96 lbs",
      "ht": "5'4\"",
      "bmi": 16.5,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "96 lbs",
      "ht": "5'4\"",
      "bmi": 16.5,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for James Okoye",
      "assessment": "Working diagnosis: James Okoye",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "09/05/2024",
      "study": "MRI Brain (acute stroke)",
      "indication": "Left MCA stroke",
      "findings": "Left MCA territory infarct including posterior parietal and occipital involvement \u2014 explains right visual field loss.",
      "impression": "Left MCA infarct with optic radiation involvement causing right homonymous hemianopia."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4988K",
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
    "caseId": "arc-stroke-optometry",
    "diagnosis": "Post-Stroke Month 2 \u2014 Right Homonymous Hemianopia, OD Assessment and Adaptive Strategies",
    "acuity": 3,
    "presentation": "James Okoye",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with james okoye. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did you first notice the vision change?",
      "Is it one eye or both?",
      "Does it affect near or distance vision more?",
      "Any pain, redness, or discharge?",
      "Are you seeing floaters or flashing lights?",
      "Any recent head trauma?",
      "When was your last eye exam?",
      "Do you wear glasses or contacts?",
      "Any family history of eye disease?",
      "Do you have diabetes, hypertension, or autoimmune disease?",
      "Any headaches?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this ophthalmic presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Visual acuity (distance and near)",
      "Slit lamp examination",
      "Fundoscopy / dilated exam",
      "Intraocular pressure (tonometry)",
      "Visual field testing",
      "Pupillary reflex assessment",
      "Extraocular motility",
      "Cover-uncover test"
    ],
    "examFindings": {
      "Visual Acuity": "Right eye: reduced, Left eye: varies by case",
      "Slit Lamp": "Finding consistent with diagnosis",
      "Fundoscopy": "Key pathological finding visible on dilated exam",
      "IOP": "Measured bilaterally, results per clinical presentation",
      "Visual Fields": "Assessed by confrontation and automated perimetry"
    },
    "ddxTargets": [
      "Right homonymous hemianopia post-left MCA stroke \u2014 OD management (correct)",
      "Bitemporal hemianopia \u2014 would indicate chiasmal lesion, not hemispheric",
      "Right monocular field loss \u2014 homonymous means BOTH eyes have the same field loss (right side both eyes)",
      "Normal visual fields \u2014 HVF automated perimetry objectively confirms field loss",
      "Glaucoma causing field loss \u2014 pattern is arcuate/nasal step, not hemianopic",
      "Retinal detachment \u2014 different presentation, different exam findings"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: James Okoye. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: right homonymous hemianopia from left MCA stroke. Key OD learning: (1) Homonymous hemianopia anatomy: left MCA stroke damages left optic radiation (Meyer's loop and posterior optic radiation) \u2192 loss of RIGHT visual field in BOTH eyes. 'Homonymous' = same-sided field loss in both eyes. This is the most common visual complication of stroke. (2) The OD's unique role: measure and document the visual field loss formally (Humphrey VF 24-2), assess driving safety, prescribe adaptive strategies. Neurologist and physiatrist may not assess visual fields formally. (3) Driving \u2014 non-negotiable conversation: legal requirement for binocular field >120\u00b0. Patient with right homonymous hemianopia typically has <120\u00b0 binocular field. Document the counseling: 'Patient counseled that current visual field loss disqualifies them from driving per state DMV standards. Patient verbalized understanding.' Do not avoid this conversation. (4) Reading rehabilitation: right field loss disrupts rightward saccades essential for reading (from end of one line to start of next, and tracking within a line). Strategies: ruler or finger tracking, text-to-speech technology, larger font, rotating paper. Neuro-vision rehabilitation referral if available. (5) Prism glasses for hemianopia: sector prisms on the right lens expand effective visual field for navigation. 40% of patients find them useful. Worth trialing. Visual field restoration therapy (Novavis) has limited but emerging evidence."
    }
  }
};
