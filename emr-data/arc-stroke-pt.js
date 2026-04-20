
window.EMR_DATA = {
  "patient": {
    "name": "Marcus Johnson",
    "dob": "03/11/1971",
    "age": 54,
    "sex": "Male",
    "mrn": "RDX-2025-11248",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "James Okoye",
    "race": "Hispanic or Latino",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-7267",
    "email": "marcusjo@email.com",
    "emergencyContact": {
      "name": "Ben Tran (Family)",
      "phone": "(954) 555-4992"
    }
  },
  "problems": [
    {
      "problem": "Left MCA stroke \u2014 PT day 5",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "James Okoye, 58M \u2014 right hemiplegia, Brunnstrom Stage II LE. PT twice daily."
    },
    {
      "problem": "Spasticity developing \u2014 right lower extremity",
      "icd": "G83.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Clasp-knife spasticity right quad and hamstring beginning day 5 \u2014 early intervention window"
    },
    {
      "problem": "Foot drop \u2014 right",
      "icd": "G57.30",
      "onset": "2024",
      "status": "Active",
      "notes": "No active dorsiflexion right \u2014 gait training requires AFO"
    }
  ],
  "medications": [
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take daily \u2014 antiplatelet",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS",
      "sig": "Take at bedtime",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Baclofen 5mg TID (starting for spasticity)",
      "sig": "Take three times daily \u2014 antispastic",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 3,
      "status": "Active \u2014 new"
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
      "wt": "112 lbs",
      "ht": "5'11\"",
      "bmi": 15.6,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "112 lbs",
      "ht": "5'11\"",
      "bmi": 15.6,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "112 lbs",
      "ht": "5'11\"",
      "bmi": 15.6,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for James Okoye",
      "assessment": "Working diagnosis: James Okoye",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/05/2024",
      "study": "MRI Brain DWI",
      "indication": "Acute stroke",
      "findings": "Left MCA territory infarct, corona radiata predominant.",
      "impression": "Left MCA stroke \u2014 corticospinal tract involvement explains LE weakness."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V7999K",
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
    "caseId": "arc-stroke-pt",
    "diagnosis": "Post-Stroke Day 5 \u2014 PT: Lower Extremity Motor Return, Gait Training, Brunnstrom Staging",
    "acuity": 3,
    "presentation": "James Okoye",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with james okoye. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this neurologic presentation.",
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
      "Left MCA stroke \u2014 PT Brunnstrom Stage II lower extremity (correct)",
      "Complete paralysis \u2014 Brunnstrom Stage I (flaccid \u2014 spasticity developing rules this out)",
      "Peripheral nerve injury \u2014 central vs peripheral pattern",
      "MS relapse \u2014 different MRI pattern",
      "Guillain-Barr\u00e9 \u2014 ascending, not hemispheric",
      "Spinal cord injury \u2014 no cord involvement on MRI"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: James Okoye. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-stroke LE hemiplegia, Brunnstrom Stage II \u2014 PT priority. Key PT learning: (1) Brunnstrom staging LE: I=flaccid. II=spasticity develops, mass flexion synergy (hip flex/knee flex/ankle dorsiflexion in synergy \u2014 or mass extension). III=voluntary synergy movement. IV=early movement outside synergy. V=individual joint movements. VI=near-normal. Stage II \u2192 III transition is the most critical PT intervention window. (2) Neuroplasticity: task-specific training, repetition, and intensity drive cortical reorganization. CIMT principle applied to LE: force use of the affected limb, mass practice. Minimum 1 hour of active practice daily shown in RCTs to improve outcomes. (3) AFO prescription: foot drop with no active dorsiflexion \u2192 solid AFO for gait training. Without AFO, patient compensates with hip hiking (Trendelenburg) and circumduction \u2014 these compensatory patterns become habitual and harder to unlearn. (4) Spasticity management: baclofen reduces spasticity but can also reduce motor drive \u2014 balance carefully. PT uses prolonged low-load stretch, serial casting if severe, positioning programs. (5) Gait training goal at this stage: parallel bars weight shift, supported standing balance, facilitated step practice. Community ambulation is a long-term goal \u2014 current priority is safe household mobility."
    }
  }
};
