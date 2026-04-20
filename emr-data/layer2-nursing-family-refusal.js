
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "01/20/1966",
    "age": 59,
    "sex": "Non-binary",
    "mrn": "RDX-2025-14905",
    "pronouns": "They/Them",
    "insurance": "Tricare",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Family Refusing Recommended Treatment",
    "race": "Hispanic or Latino",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-7014",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Nicole Okafor (Family)",
      "phone": "(954) 555-9256"
    }
  },
  "problems": [
    {
      "problem": "Surrogate refusing NG tube against patient's documented prior wishes",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Helen Foster, 84F \u2014 severe dementia. Son refusing NG tube. PCP notes document patient's wish: 'no tubes if I can't care for myself.'"
    },
    {
      "problem": "Substituted judgment standard \u2014 prior wishes override surrogate preference",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Surrogate must act on patient's known wishes (substituted judgment), not personal preference. Prior statement is legally and ethically significant."
    },
    {
      "problem": "Nursing advocacy \u2014 document conflict, escalate, request ethics consultation",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Nurses are ethically obligated to advocate for documented patient wishes, even when that means challenging the surrogate."
    }
  ],
  "medications": [
    {
      "name": "Social work consultation \u2014 family conflict, goals of care",
      "sig": "Social work mediates family conflict, clarifies what patient would have wanted based on values and prior conversations.",
      "prescriber": "Nursing/MD",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 urgent"
    },
    {
      "name": "Palliative care \u2014 goals of care and comfort alternatives",
      "sig": "Palliative care explores comfort feeding (assisted oral feeding) as an alternative aligned with patient's prior wishes.",
      "prescriber": "MD/Nursing",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ethics committee consultation \u2014 surrogate vs documented wishes",
      "sig": "Nursing can initiate ethics consultation independently. Ethics committees advise on the ethical and legal framework \u2014 do not make decisions.",
      "prescriber": "Nursing/MD",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 refer"
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
      "wt": "121 lbs",
      "ht": "5'11\"",
      "bmi": 16.9,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "121 lbs",
      "ht": "5'11\"",
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
      "wt": "121 lbs",
      "ht": "5'11\"",
      "bmi": 16.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Family Refusing Recommended Treatment",
      "assessment": "Working diagnosis: Family Refusing Recommended Treatment",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Nursing Advocacy Assessment",
      "results": [
        {
          "test": "PCP documentation 2021",
          "value": "'Patient stated: no tubes or machines if I can't care for myself'",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Formal advance directive",
          "value": "None on file",
          "unit": "",
          "ref": "AD present",
          "flag": "L"
        },
        {
          "test": "Surrogate",
          "value": "Son \u2014 legal healthcare surrogate (verbal)",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Current status",
          "value": "Unable to take PO safely \u2014 aspiration risk",
          "unit": "",
          "ref": "",
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
      "lot": "V3755K",
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
    "caseId": "layer2-nursing-family-refusal",
    "diagnosis": "Family Refusal of Treatment \u2014 Surrogate Conflicts With Documented Patient Wishes, Nursing Advocacy and Ethics Consultation",
    "acuity": 2,
    "presentation": "Family Refusing Recommended Treatment",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with family refusing recommended treatment. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "How are you feeling right now compared to earlier?",
      "Tell me about your pain \u2014 location, quality, rating.",
      "Are you having any difficulty breathing?",
      "Have you taken all your medications today?",
      "Do you have any allergies I should know about?",
      "Do you feel safe to get up?",
      "Do you have any questions about your care?",
      "Is there anything making you anxious?",
      "When did you last eat or drink?",
      "Have you had any nausea or vomiting?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this other presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Vital signs trend review",
      "Pain assessment",
      "Skin integrity assessment",
      "IV access and infusion review",
      "Medication reconciliation",
      "Fall risk assessment (Morse)",
      "Neurological checks",
      "Patient education readiness assessment",
      "SBAR preparation"
    ],
    "examFindings": {
      "Vital Signs": "Trends consistent with clinical presentation",
      "Pain Assessment": "Rating documented with PQRST characteristics",
      "Skin Integrity": "Assessment per case-relevant findings",
      "Neurological": "Level of consciousness and orientation documented",
      "Fall Risk": "Morse Fall Scale calculated per case"
    },
    "ddxTargets": [
      "Surrogate refusal \u2014 nursing advocacy for documented prior wishes (correct)",
      "Surrogate has absolute authority \u2014 must act on patient's known wishes, not personal preferences",
      "Ignore prior documented wishes \u2014 prior statements legally and ethically significant",
      "Proceed with NG tube over family objection \u2014 requires ethics/legal process first",
      "Document and do nothing \u2014 nursing must actively advocate",
      "Discharge \u2014 abandonment; ethics consultation is the appropriate pathway"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Family Refusing Recommended Treatment. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: surrogate refusal conflict, nursing advocacy. Key learning: (1) Substituted judgment: surrogate must decide what the patient WOULD have chosen based on known values and prior wishes \u2014 not what the surrogate wants. Prior documented statement ('no tubes') is the strongest guide. (2) Nursing advocacy: ANA Code of Ethics obligates nurses to advocate for patient's rights and prior wishes \u2014 not defer automatically to surrogates who conflict with documented patient wishes. (3) Ethics consultation: nursing can and should initiate independently when surrogate conflicts with prior documented wishes. (4) Alternatives to NG tube: comfort feeding, hospice care, oral care and comfort measures. Palliative care helps families understand these can be compassionate choices aligned with patient wishes. (5) Documentation: document all family conversations, the patient's prior expressed wishes, consultations ordered, and nursing assessment of the conflict."
    }
  }
};
