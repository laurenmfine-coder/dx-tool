
window.EMR_DATA = {
  "patient": {
    "name": "Diego Reyes",
    "dob": "01/28/1976",
    "age": 49,
    "sex": "Male",
    "mrn": "RDX-2025-16152",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Gerald Park",
    "race": "Middle Eastern",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-3271",
    "email": "diegorey@email.com",
    "emergencyContact": {
      "name": "Maria Santos (Family)",
      "phone": "(954) 555-4785"
    }
  },
  "problems": [
    {
      "problem": "Post-sepsis ICU-acquired weakness \u2014 ICUAW",
      "icd": "G72.81",
      "onset": "2024",
      "status": "Active",
      "notes": "Gerald Park, off vent 24h. Bilateral diffuse weakness grade 2-3/5. ICUAW diagnosis."
    },
    {
      "problem": "Critical illness polyneuromyopathy \u2014 probable",
      "icd": "G72.89",
      "onset": "2024",
      "status": "Active",
      "notes": "EMG pending \u2014 bilateral symmetric limb weakness + ICU course consistent with CIPM"
    },
    {
      "problem": "Post-extubation deconditioning \u2014 12 ICU days",
      "icd": "Z99.11",
      "onset": "2024",
      "status": "Active",
      "notes": "Intubated 12 days \u2014 3% muscle mass loss per day of bedrest"
    }
  ],
  "medications": [
    {
      "name": "Insulin infusion \u2014 being transitioned to SQ insulin",
      "sig": "Glucose target 140-180 in ICU",
      "prescriber": "ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "Transitioning"
    },
    {
      "name": "Piperacillin-tazobactam 3.375g IV q8h \u2014 completing course",
      "sig": "IV q8h \u2014 14-day total course",
      "prescriber": "ID",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Furosemide 40mg IV PRN fluid overload",
      "sig": "For diuresis if fluid balance positive",
      "prescriber": "ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN"
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
      "wt": "109 lbs",
      "ht": "5'11\"",
      "bmi": 15.2,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "109 lbs",
      "ht": "5'11\"",
      "bmi": 15.2,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "109 lbs",
      "ht": "5'11\"",
      "bmi": 15.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Gerald Park",
      "assessment": "Working diagnosis: Gerald Park",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "Post-Sepsis Day 4",
      "results": [
        {
          "test": "WBC",
          "value": "11.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.6",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Albumin",
          "value": "2.1",
          "unit": "g/dL",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "Lactate",
          "value": "1.4",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": ""
        },
        {
          "test": "CRP",
          "value": "8.4",
          "unit": "mg/dL",
          "ref": "<1.0",
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
      "lot": "V7081K",
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
    "caseId": "arc-sepsis-pt",
    "diagnosis": "Post-Sepsis Syndrome \u2014 ICU-Acquired Weakness, PT Early Mobility Protocol",
    "acuity": 3,
    "presentation": "Gerald Park",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with gerald park. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
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
      "ICUAW \u2014 critical illness polyneuromyopathy (correct)",
      "Stroke \u2014 imaging negative, bilateral symmetric pattern",
      "Peripheral neuropathy \u2014 new onset ICU-associated",
      "Guillain-Barr\u00e9 \u2014 must distinguish from CIPM (EMG differentiates)",
      "Hyperglycemia-associated neuropathy \u2014 contributing factor",
      "Residual sedation effect \u2014 not after 24h off vent"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: Gerald Park. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: ICU-acquired weakness, probable CIPM. Key PT learning: (1) ICUAW definition: new-onset bilateral symmetric weakness in a critically ill patient with no other explanation. Affects up to 50% of patients with septic shock or ARDS intubated >7 days. Corticosteroids, aminoglycosides, neuromuscular blockade, hyperglycemia, and immobility are risk factors. (2) Early mobility is the intervention: Awakening and Breathing Coordination (ABC) protocol \u2014 daily spontaneous awakening trials + spontaneous breathing trials + early PT/OT significantly reduces ICUAW and ICU length of stay. PT should start within 24h of intubation if feasible. (3) Four-level mobility hierarchy: Level 1 = passive ROM in bed. Level 2 = sit at edge of bed. Level 3 = stand and weight shift. Level 4 = ambulate. Progress based on strength, hemodynamics, oxygen requirements. (4) Albumin 2.1: severe malnutrition impairs recovery. PT communicates urgency for nutritional consultation \u2014 can't build muscle without substrate. (5) Prognosis for ICUAW: 50% recover functional independence by 1 year. Predictors of poor outcome: >14 days intubated, severe APACHE score, persistent hyperglycemia. This patient (12 days) has reasonable prognosis with aggressive early PT."
    }
  }
};
