
window.EMR_DATA = {
  "patient": {
    "name": "Marcus Johnson",
    "dob": "03/03/1973",
    "age": 52,
    "sex": "Male",
    "mrn": "RDX-2025-52191",
    "pronouns": "He/Him",
    "insurance": "Tricare",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "BCVA 20/60 Right Eye",
    "race": "White",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-3780",
    "email": "marcusjo@email.com",
    "emergencyContact": {
      "name": "Emmanuel Obi (Family)",
      "phone": "(954) 555-4154"
    }
  },
  "problems": [
    {
      "problem": "Anisometropic amblyopia, right eye",
      "icd": "H53.001",
      "onset": "2024",
      "status": "Active",
      "notes": "BCVA 20/60 right eye, 20/20 left eye \u2014 significant anisometropia"
    },
    {
      "problem": "Hyperopia, high right eye",
      "icd": "H52.01",
      "onset": "2024",
      "status": "Active",
      "notes": "+4.75 DS OD vs +1.00 DS OS"
    }
  ],
  "medications": [
    {
      "name": "Spectacle correction \u2014 full cycloplegic refraction",
      "sig": "Wear glasses full-time starting immediately",
      "prescriber": "Dr. Chen",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 new prescription"
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
      "wt": "105 lbs",
      "ht": "5'6\"",
      "bmi": 16.9,
      "setting": "Eye Clinic"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "105 lbs",
      "ht": "5'6\"",
      "bmi": 16.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "105 lbs",
      "ht": "5'6\"",
      "bmi": 16.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for BCVA 20/60 Right Eye",
      "assessment": "Working diagnosis: BCVA 20/60 Right Eye",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5624K",
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
    "caseId": "pediatric-amblyopia-od",
    "diagnosis": "Anisometropic Amblyopia, Right Eye \u2014 Moderate Severity",
    "acuity": 3,
    "presentation": "BCVA 20/60 Right Eye",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with bcva 20/60 right eye. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Anisometropic amblyopia from high hyperopia right eye (correct)",
      "Strabismic amblyopia \u2014 right esotropia",
      "Deprivation amblyopia \u2014 congenital cataract",
      "Organic vision loss \u2014 optic nerve hypoplasia",
      "Normal visual variation \u2014 bilateral",
      "Refractive amblyopia \u2014 bilateral high refractive error"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: BCVA 20/60 Right Eye. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: anisometropic amblyopia OD from uncorrected high hyperopia. Key OD learning points: (1) Critical period for amblyopia treatment: birth to ~7 years (sensitive period), with diminishing plasticity. Age 6: good prognosis with treatment. (2) Evidence-based sequence: (a) Full spectacle correction FIRST \u2014 wait 12-18 weeks; many children gain 1-3 lines with glasses alone ('spectacle correction trial'). (b) Add patching/atropine penalization ONLY if glasses are insufficient. (3) Patching prescription: PEDIG data supports 2 hours/day near-vision patching as effective as 6 hours for moderate amblyopia. (4) Anisometropia threshold for amblyopia risk: \u22651.00 D myopia, \u22651.50 D hyperopia, \u22651.00 D astigmatism. This child has 3.75 D difference. (5) The parent's key question: 'Will my child have normal vision?' Answer: excellent prognosis if treated promptly \u2014 compliance with glasses and patching is the rate-limiting factor."
    }
  }
};
