
window.EMR_DATA = {
  "patient": {
    "name": "Taylor Kim",
    "dob": "07/21/1969",
    "age": 56,
    "sex": "Non-binary",
    "mrn": "RDX-2025-62957",
    "pronouns": "They/Them",
    "insurance": "Tricare",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Moderate Alzheimers Disease",
    "race": "Black or African American",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-6367",
    "email": "taylorki@email.com",
    "emergencyContact": {
      "name": "Yasmine Bouchard (Family)",
      "phone": "(954) 555-7380"
    }
  },
  "problems": [
    {
      "problem": "Alzheimer's disease \u2014 moderate severity",
      "icd": "G30.9",
      "onset": "2020",
      "status": "Active",
      "notes": "MMSE 14/30 \u2014 moderate. Sundowning 4-8pm daily: agitation, pacing, attempts to leave"
    },
    {
      "problem": "Sundowning syndrome \u2014 circadian rhythm disruption",
      "icd": "F05",
      "onset": "2023",
      "status": "Active",
      "notes": "Worsened after move from family home to memory care \u2014 environmental unfamiliarity"
    },
    {
      "problem": "Caregiver burden \u2014 daughter at burnout threshold",
      "icd": "Z63.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Daughter is primary caregiver, exhausted \u2014 caregiver training and respite planning required"
    }
  ],
  "medications": [
    {
      "name": "Donepezil 10mg QHS",
      "sig": "Take at bedtime",
      "prescriber": "Neurology",
      "start": "2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Melatonin 3mg QHS",
      "sig": "Take 30 minutes before bedtime \u2014 circadian rhythm support",
      "prescriber": "Neurology",
      "start": "2023",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Quetiapine 12.5mg QHS PRN (low-dose, for severe agitation only)",
      "sig": "PRN \u2014 use non-pharmacological approaches first",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 2,
      "status": "Active PRN \u2014 last resort"
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
      "wt": "98 lbs",
      "ht": "5'8\"",
      "bmi": 14.9,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "98 lbs",
      "ht": "5'8\"",
      "bmi": 14.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "98 lbs",
      "ht": "5'8\"",
      "bmi": 14.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Moderate Alzheimers Disease",
      "assessment": "Working diagnosis: Moderate Alzheimers Disease",
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V2332K",
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
    "caseId": "dementia-sundowning-ot",
    "diagnosis": "Moderate Alzheimer's Disease \u2014 Severe Sundowning, OT Environmental Modification and Caregiver Training",
    "acuity": 3,
    "presentation": "Moderate Alzheimers Disease",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with moderate alzheimers disease. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Moderate AD \u2014 sundowning, OT environmental and caregiver intervention (correct)",
      "Delirium superimposed on dementia \u2014 sundowning is chronic/predictable pattern, not fluctuating",
      "Pain as sundowning trigger \u2014 should be assessed and treated",
      "UTI precipitating behavioral change \u2014 check UA if acute change",
      "Medication side effect \u2014 quetiapine can worsen cognition in AD",
      "Undertreated depression \u2014 overlap but sundowning is time-specific"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a ot case with chief complaint: Moderate Alzheimers Disease. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: moderate AD with sundowning \u2014 OT primary intervention. Key OT learning: (1) Sundowning mechanism: degeneration of suprachiasmatic nucleus (circadian pacemaker) in AD \u2192 loss of internal circadian signals. Environmental cues (light, activity, meals, social engagement) become the primary zeitgebers \u2014 OT modifies these. (2) OT environmental strategies: increase MORNING light exposure (outdoor walk or light box 10,000 lux, 30 min AM), structured meaningful activity 3-5pm (sundowning window \u2014 keep hands busy), reduce environmental stimulation at 4pm (dim lights, turn off TV), consistent evening routine at same time daily. (3) Activity-based intervention: individualized meaningful activities (prior interests \u2014 gardening, music, cooking, folding laundry). Engagement in purposeful activity reduces agitation 60% better than PRN medication. (4) Caregiver training is the multiplier: daughter needs to understand: (a) sundowning is neurological, not 'difficult behavior,' (b) do not argue or redirect with logic \u2014 use validation therapy, distraction, redirect to activity, (c) respite care is not abandonment \u2014 it is self-preservation. OT connects daughter with adult day programs. (5) Documentation for memory care staff: OT writes individual care plan: 'Engage in folding activity at 3:30pm, outdoor light walk if weather permits, dimmed lights by 5pm, no TV during 4-7pm.'"
    }
  }
};
