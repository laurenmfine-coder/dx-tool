
window.EMR_DATA = {
  "patient": {
    "name": "Ben Tran",
    "dob": "02/28/1958",
    "age": 67,
    "sex": "Male",
    "mrn": "RDX-2025-71298",
    "pronouns": "He/Him",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Dorothy Williams",
    "race": "Asian",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-6708",
    "email": "bentran@email.com",
    "emergencyContact": {
      "name": "Alex Morgan (Family)",
      "phone": "(954) 555-2308"
    }
  },
  "problems": [
    {
      "problem": "HFrEF EF 30% \u2014 cardiac rehab referral",
      "icd": "I50.20",
      "onset": "2020",
      "status": "Active",
      "notes": "Richard Chen, 62M \u2014 6MWT 280m (severely reduced). NYHA Class III. Phase II cardiac rehab initiated."
    },
    {
      "problem": "Severely reduced exercise tolerance \u2014 deconditioning on top of HF",
      "icd": "R53.81",
      "onset": "2024",
      "status": "Active",
      "notes": "6MWT 280m vs predicted >500m. Combined HF physiology and deconditioning."
    },
    {
      "problem": "Depression \u2014 PHQ-9 12, bidirectional with HF",
      "icd": "F32.9",
      "onset": "2023",
      "status": "Active",
      "notes": "Moderate depression. Exercise in cardiac rehab is evidence-based treatment for HF-related depression."
    }
  ],
  "medications": [
    {
      "name": "Supervised aerobic exercise \u2014 3x/week, 20-40 min",
      "sig": "Target 40-70% VO2max, Borg RPE 12-14. Start 10-20 min, add 5 min/week. Monitor HR, BP, SpO2 during each session.",
      "prescriber": "PT/Cardiologist",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 Phase II"
    },
    {
      "name": "Resistance training \u2014 2x/week, 40-60% 1RM",
      "sig": "Skeletal muscle myopathy is a core HF pathophysiology \u2014 resistance training improves peripheral muscle function independently of cardiac output.",
      "prescriber": "PT",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Stop session criteria \u2014 SpO2 <88%, angina, SBP >200 or <90",
      "sig": "Safety monitoring thresholds. Terminate exercise and notify cardiologist if criteria met.",
      "prescriber": "PT protocol",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 safety"
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
      "ht": "5'0\"",
      "bmi": 17.2,
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
      "ht": "5'0\"",
      "bmi": 17.2,
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
      "ht": "5'0\"",
      "bmi": 17.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Dorothy Williams",
      "assessment": "Working diagnosis: Dorothy Williams",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Cardiac Rehab Baseline",
      "results": [
        {
          "test": "6MWT",
          "value": "280",
          "unit": "meters",
          "ref": "400-600m predicted",
          "flag": "L"
        },
        {
          "test": "Resting HR",
          "value": "68",
          "unit": "bpm",
          "ref": "60-100",
          "flag": ""
        },
        {
          "test": "Resting BP",
          "value": "112/70",
          "unit": "mmHg",
          "ref": "<130/80",
          "flag": ""
        },
        {
          "test": "SpO2 peak exercise",
          "value": "91",
          "unit": "%",
          "ref": "\u226590%",
          "flag": ""
        },
        {
          "test": "PHQ-9",
          "value": "12",
          "unit": "/27",
          "ref": "0-4 minimal",
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
      "lot": "V9866K",
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
    "caseId": "arc-hf-pt",
    "diagnosis": "HFrEF \u2014 PT Cardiac Rehabilitation, Exercise Prescription, Functional Capacity Improvement",
    "acuity": 3,
    "presentation": "Dorothy Williams",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with dorothy williams. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this cardiovascular presentation.",
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
      "HFrEF \u2014 cardiac rehab PT, exercise prescription (correct)",
      "Exercise contraindicated in HFrEF \u2014 INCORRECT; HF-ACTION trial shows mortality benefit",
      "Decompensated HF \u2014 euvolemic on exam; rehab appropriate now",
      "6MWT normal \u2014 280m is severely reduced for age-matched peers",
      "Cardiac rehab only for EF >40% \u2014 INCORRECT; HFrEF benefits from supervised exercise",
      "Resistance training contraindicated in HF \u2014 INCORRECT; improves skeletal muscle myopathy"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: Dorothy Williams. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: HFrEF cardiac rehabilitation. Key learning: (1) HF-ACTION trial: structured aerobic exercise in HFrEF reduced all-cause mortality/hospitalization 11% \u2014 exercise training is now Class I recommendation for stable HFrEF. (2) Exercise prescription: 40-70% VO2max, Borg RPE 12-14, 3-5x/week, 20-45 min. Start conservatively and progress. (3) 6MWT tracking: 280m = severe impairment. Target 50-100m improvement over 12-week program. (4) Skeletal muscle myopathy: atrophy and fiber-type shift is core HF pathophysiology \u2014 resistance training improves peripheral muscle function independently of cardiac output. (5) Exercise and depression: cardiac rehab participation reduces depressive symptoms comparably to antidepressants in cardiac disease. PHQ-9 reassessment at 6 and 12 weeks."
    }
  }
};
