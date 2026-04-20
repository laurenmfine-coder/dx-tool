
window.EMR_DATA = {
  "patient": {
    "name": "Antoine Dubois",
    "dob": "11/13/2015",
    "age": 10,
    "sex": "Male",
    "mrn": "RDX-2025-74174",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Spastic Diplegia Cerebral Palsy Age 8",
    "race": "American Indian or Alaska Native",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-6476",
    "email": "antoined@email.com",
    "emergencyContact": {
      "name": "Lisa Chen (Family)",
      "phone": "(954) 555-9443"
    }
  },
  "problems": [
    {
      "problem": "Spastic diplegia CP \u2014 GMFCS Level II, scissor gait",
      "icd": "G80.1",
      "onset": "Birth",
      "status": "Active",
      "notes": "Marcus Johnson, 7M \u2014 premature 28 weeks, IVH. Ambulates with forearm crutches. GMFCS II."
    },
    {
      "problem": "Hip subluxation risk \u2014 migration percentage 28%",
      "icd": "M24.351",
      "onset": "2024",
      "status": "Active",
      "notes": "6-month re-imaging and orthopaedics follow-up required. >25% = increased monitoring."
    },
    {
      "problem": "Ankle equinus \u2014 gastrocnemius spasticity, -5\u00b0 dorsiflexion",
      "icd": "M21.371",
      "onset": "2022",
      "status": "Active",
      "notes": "Botox to gastrocnemius q6 months. PT must begin within 2 weeks of injection for maximum benefit."
    }
  ],
  "medications": [
    {
      "name": "Botulinum toxin A \u2014 gastrocnemius, q6 months",
      "sig": "PT must begin WITHIN 2 WEEKS of injection \u2014 the therapeutic window where muscle is relaxed and ROM gains are possible.",
      "prescriber": "Developmental Peds/PM&R",
      "start": "2022",
      "refills": 0,
      "status": "Active \u2014 q6 months"
    },
    {
      "name": "Hinged AFO \u2014 5\u00b0 dorsiflexion stop",
      "sig": "Allows dorsiflexion during stance, blocks plantarflexion. Provides push-off energy return. Worn during all ambulation.",
      "prescriber": "PT/Orthotics",
      "start": "2022",
      "refills": 1,
      "status": "Active \u2014 replace annually"
    },
    {
      "name": "PT gait training \u2014 2x/week",
      "sig": "Treadmill training, stair negotiation, obstacle courses. Repetitive stepping activates central pattern generators.",
      "prescriber": "PT",
      "start": "2021",
      "refills": 0,
      "status": "Active ongoing"
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
      "wt": "88 lbs",
      "ht": "5'10\"",
      "bmi": 12.6,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "88 lbs",
      "ht": "5'10\"",
      "bmi": 12.6,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "88 lbs",
      "ht": "5'10\"",
      "bmi": 12.6,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Spastic Diplegia Cerebral Palsy Age 8",
      "assessment": "Working diagnosis: Spastic Diplegia Cerebral Palsy Age 8",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "CP Functional Assessment",
      "results": [
        {
          "test": "GMFCS Level",
          "value": "II",
          "unit": "",
          "ref": "I = walks without limitations",
          "flag": ""
        },
        {
          "test": "6MWT",
          "value": "320",
          "unit": "meters",
          "ref": "450-600m age-matched",
          "flag": "L"
        },
        {
          "test": "Hip migration percentage right",
          "value": "28",
          "unit": "%",
          "ref": "<25%",
          "flag": "H"
        },
        {
          "test": "Ankle dorsiflexion passive right",
          "value": "-5",
          "unit": "degrees",
          "ref": "10-20\u00b0",
          "flag": "L"
        },
        {
          "test": "PEDI-CAT mobility",
          "value": "45th percentile for CP",
          "unit": "",
          "ref": "Age-matched",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V8509K",
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
    "caseId": "pt-pediatric-cp",
    "diagnosis": "Spastic Diplegia Cerebral Palsy \u2014 GMFCS Level II, Botulinum Toxin + PT, Hip Surveillance",
    "acuity": 3,
    "presentation": "Spastic Diplegia Cerebral Palsy Age 8",
    "category": "pediatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with spastic diplegia cerebral palsy age 8. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this pediatric presentation.",
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
      "Spastic diplegia CP \u2014 GMFCS II, Botox + PT protocol (correct)",
      "Spastic quadriplegia \u2014 all 4 limbs; diplegia predominantly lower extremity",
      "Hereditary spastic paraplegia \u2014 genetic, progressive; CP is static after insult",
      "Dystonic CP \u2014 movement disorder component; primarily spastic here",
      "Myelomeningocele \u2014 sensory loss, bowel/bladder; CP has normal sensation",
      "Muscular dystrophy \u2014 progressive weakness, not spastic; different course"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: Spastic Diplegia Cerebral Palsy Age 8. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: spastic diplegia CP, GMFCS Level II. Key learning: (1) Botox + PT timing: PT must begin within 2 weeks of Botox injection \u2014 the window of reduced spasticity enables ROM and motor control gains. Botox without PT wastes the injection. (2) GMFCS is relatively stable \u2014 predicts long-term ambulatory potential. Level II = walks with limitations on uneven surfaces and long distances. (3) Hip surveillance: spastic CP causes hip subluxation from muscle imbalance. Migration percentage >25% = increased monitoring; >40% = surgical consultation. Annual radiographs in children <8 years. (4) Treadmill training in CP: body-weight-supported treadmill training improves gait speed and endurance. Repetitive stepping activates spinal central pattern generators. (5) AFO selection: hinged AFOs preserve push-off energy return. Solid AFOs for more severe equinus. PT and orthotist collaborate."
    }
  }
};
