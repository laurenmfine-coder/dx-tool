
window.EMR_DATA = {
  "patient": {
    "name": "Jordan Lee",
    "dob": "04/04/1984",
    "age": 41,
    "sex": "Non-binary",
    "mrn": "RDX-2025-29063",
    "pronouns": "They/Them",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Robert Diaz",
    "race": "Asian",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-6108",
    "email": "jordanle@email.com",
    "emergencyContact": {
      "name": "Hiroshi Tanaka (Family)",
      "phone": "(954) 555-9625"
    }
  },
  "problems": [
    {
      "problem": "DPN \u2014 loss of protective sensation, bilateral feet",
      "icd": "E11.40",
      "onset": "2022",
      "status": "Active",
      "notes": "Eduardo Reyes, 56M \u2014 10g monofilament: unable to feel bilateral feet. PT referral for balance training and fall prevention."
    },
    {
      "problem": "Fall risk \u2014 TUG 15s, Berg Balance Scale 42/56",
      "icd": "Z91.81",
      "onset": "2024",
      "status": "Active",
      "notes": "Romberg positive. Tandem gait impaired. Proprioceptive deficit from DPN drives fall risk."
    },
    {
      "problem": "Foot at risk \u2014 callus, absent ankle reflexes",
      "icd": "E11.621",
      "onset": "2024",
      "status": "Active",
      "notes": "Cannot feel plantar pressure. Any friction \u2192 ulceration without sensation warning."
    }
  ],
  "medications": [
    {
      "name": "Proprioceptive training \u2014 firm to foam progression",
      "sig": "Single-leg balance: firm \u2192 foam \u2192 eyes closed. Sensory substitution \u2014 visual and vestibular compensation for lost proprioception. 3x/week.",
      "prescriber": "PT",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Therapeutic footwear \u2014 extra-depth shoes",
      "sig": "Custom insoles redistribute plantar pressure. Medicare therapeutic footwear benefit for qualifying diabetic patients.",
      "prescriber": "PT/Podiatry",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Daily foot inspection protocol",
      "sig": "Mirror inspection of plantar surface daily. Check for redness, blisters, abrasions. Cannot rely on pain signal.",
      "prescriber": "PT/Podiatry",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 education"
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
      "wt": "67 lbs",
      "ht": "5'6\"",
      "bmi": 10.8,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "67 lbs",
      "ht": "5'6\"",
      "bmi": 10.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "67 lbs",
      "ht": "5'6\"",
      "bmi": 10.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Robert Diaz",
      "assessment": "Working diagnosis: Robert Diaz",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "PT Functional Assessment",
      "results": [
        {
          "test": "TUG",
          "value": "15",
          "unit": "seconds",
          "ref": "<12 normal; >13.5 high fall risk",
          "flag": "H"
        },
        {
          "test": "10g monofilament",
          "value": "Unable to feel \u2014 bilateral",
          "unit": "",
          "ref": "Protective sensation present",
          "flag": "H"
        },
        {
          "test": "Berg Balance Scale",
          "value": "42/56",
          "unit": "",
          "ref": "<45 = increased fall risk",
          "flag": "L"
        },
        {
          "test": "Ankle dorsiflexion ROM",
          "value": "8\u00b0",
          "unit": "",
          "ref": "10-20\u00b0",
          "flag": "L"
        },
        {
          "test": "Ankle reflex",
          "value": "Absent bilaterally",
          "unit": "",
          "ref": "Present",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V2542K",
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
    "caseId": "arc-diabetes-pt",
    "diagnosis": "Type 2 Diabetes \u2014 PT: Peripheral Neuropathy Balance Training, LOPS Management, Fall Prevention",
    "acuity": 3,
    "presentation": "Robert Diaz",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with robert diaz. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this endocrine presentation.",
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
      "DPN \u2014 balance impairment, proprioceptive deficit, PT fall prevention (correct)",
      "Vestibular dysfunction \u2014 Dix-Hallpike negative; neuropathy pattern on exam",
      "Cerebellar ataxia \u2014 no intention tremor or dysmetria; stocking-glove distribution",
      "Spinal stenosis \u2014 neurogenic claudication; different distribution and provocation",
      "B12 deficiency neuropathy \u2014 check B12 (metformin depletes); may coexist with DPN",
      "Peripheral vascular disease \u2014 absent pulses would suggest; ABI normal here"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: Robert Diaz. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: DPN-related fall risk, PT management. Key learning: (1) Sensory substitution strategy: DPN eliminates joint position sense \u2192 PT trains patients to rely on visual and vestibular inputs. Exercises progress firm \u2192 foam \u2192 eyes closed \u2192 narrow base. (2) TUG test: >13.5 seconds = high fall risk. This patient at 15 seconds requires urgent PT. (3) Foot inspection: patients with LOPS cannot feel ulcers developing \u2014 daily mirror inspection is a core PT education intervention. Any finding triggers podiatry contact. (4) Therapeutic footwear: extra-depth shoes with custom insoles redistribute plantar pressure and prevent callus/ulceration. PT/podiatry collaboration for footwear prescription. (5) Ankle dorsiflexion: reduced ROM from DPN and equinus increases plantar pressure and fall risk. Heel cord stretching is a component of the PT program."
    }
  }
};
