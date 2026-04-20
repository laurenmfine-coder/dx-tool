
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "03/07/1957",
    "age": 68,
    "sex": "Non-binary",
    "mrn": "RDX-2025-33841",
    "pronouns": "They/Them",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Painful Eye",
    "race": "Black or African American",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-9895",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Raj Sharma (Family)",
      "phone": "(954) 555-9767"
    }
  },
  "problems": [
    {
      "problem": "Optic neuritis, right eye",
      "icd": "H46.01",
      "onset": "2024",
      "status": "Active",
      "notes": "Acute presentation, 5 days"
    },
    {
      "problem": "Possible multiple sclerosis \u2014 high-risk features",
      "icd": "G35",
      "onset": "2024",
      "status": "Active",
      "notes": "MRI brain ordered \u2014 await results"
    }
  ],
  "medications": [
    {
      "name": "No current ocular medications",
      "sig": "N/A",
      "prescriber": "N/A",
      "start": "N/A",
      "refills": 0,
      "status": "N/A"
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
      "wt": "63 lbs",
      "ht": "5'9\"",
      "bmi": 9.3,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "63 lbs",
      "ht": "5'9\"",
      "bmi": 9.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "63 lbs",
      "ht": "5'9\"",
      "bmi": 9.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Painful Eye",
      "assessment": "Working diagnosis: Painful Eye",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "MRI Brain with and without gadolinium (ordered)",
      "indication": "Acute optic neuritis \u2014 evaluate for demyelinating lesions",
      "findings": "PENDING \u2014 ordered today",
      "impression": "Pending. Patient advised results within 24-48 hours. Neurology referral placed."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3609K",
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
    "caseId": "ms-optic-neuritis-od",
    "diagnosis": "Acute Demyelinating Optic Neuritis, Right Eye \u2014 High Risk for Multiple Sclerosis",
    "acuity": 2,
    "presentation": "Painful Eye",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with painful eye. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Acute demyelinating optic neuritis (correct)",
      "Ischemic optic neuropathy (AION)",
      "Leber hereditary optic neuropathy",
      "Compressive optic neuropathy from orbital mass",
      "Neuromyelitis optica (NMO/AQP4+)",
      "Infectious optic neuritis"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: Painful Eye. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: acute demyelinating optic neuritis, right eye, high MS risk. Key OD learning points: (1) Classic triad: painful vision loss + pain on eye movement + RAPD. (2) VEP shows prolonged P100 latency \u2014 confirms optic nerve demyelination. (3) MRI brain: >2 T2 white matter lesions = high MS risk; McDonald criteria 2017 may establish MS diagnosis on first attack. (4) Treat with IV methylprednisolone 1g/day x3 days \u2014 accelerates recovery but does NOT improve final visual outcome. (5) NMO/MOG antibodies must be checked \u2014 NMOSD is treated differently and IV steroids are insufficient."
    }
  }
};
