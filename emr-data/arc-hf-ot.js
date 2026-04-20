
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "10/08/1972",
    "age": 53,
    "sex": "Non-binary",
    "mrn": "RDX-2025-11552",
    "pronouns": "They/Them",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Dorothy Williams",
    "race": "Middle Eastern",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-4451",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Elena Rodriguez (Family)",
      "phone": "(954) 555-2275"
    }
  },
  "problems": [
    {
      "problem": "HFrEF \u2014 EF 28%, NYHA Class III, ADL limitation",
      "icd": "I50.20",
      "onset": "2021",
      "status": "Active",
      "notes": "Dorothy Williams. Cannot complete self-care without dyspnea. OT for energy conservation and adaptive strategies."
    },
    {
      "problem": "Dyspnea with minimal exertion \u2014 ADL barrier",
      "icd": "R06.00",
      "onset": "2024",
      "status": "Active",
      "notes": "Dyspnea on brushing teeth, dressing \u2014 2 METs activities. 6MWT 188 meters."
    },
    {
      "problem": "Depression \u2014 HF-related, affecting OT participation",
      "icd": "F32.0",
      "onset": "2023",
      "status": "Active",
      "notes": "PHQ-9 11 \u2014 helplessness narrative around inability to do previous activities"
    }
  ],
  "medications": [
    {
      "name": "Carvedilol 6.25mg BID",
      "sig": "Take twice daily",
      "prescriber": "Cardiology",
      "start": "2021",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Sacubitril-valsartan 24/26mg BID",
      "sig": "Take twice daily \u2014 do not take with ACEi",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Furosemide 80mg daily",
      "sig": "Take 1 tablet daily \u2014 monitor daily weights",
      "prescriber": "Cardiology",
      "start": "2021",
      "refills": 4,
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
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "93 lbs",
      "ht": "5'0\"",
      "bmi": 18.2,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "93 lbs",
      "ht": "5'0\"",
      "bmi": 18.2,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "93 lbs",
      "ht": "5'0\"",
      "bmi": 18.2,
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
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "Pre-Discharge",
      "results": [
        {
          "test": "BNP",
          "value": "612",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "Na",
          "value": "133",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "6MWT distance",
          "value": "188",
          "unit": "meters",
          "ref": "400-600 normal",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4468K",
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
    "caseId": "arc-hf-ot",
    "diagnosis": "HFrEF EF 28% \u2014 OT: Energy Conservation, Activity Modification, Dyspnea Management in ADL",
    "acuity": 3,
    "presentation": "Dorothy Williams",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with dorothy williams. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this cardiovascular presentation.",
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
      "HFrEF \u2014 OT energy conservation and ADL adaptation (correct)",
      "PT handles dyspnea management \u2014 OT specifically addresses ADL occupation and energy conservation",
      "No OT role in heart failure \u2014 INCORRECT, OT is evidence-based in cardiac rehab",
      "Full independence possible immediately \u2014 graded activity with cardiac precautions required",
      "Restrict all activity \u2014 deconditioning worsens HF outcomes, graded activity improves them",
      "Depression is separate from OT \u2014 depression affecting occupational performance is within OT scope"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a ot case with chief complaint: Dorothy Williams. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: HFrEF \u2014 OT energy conservation and ADL. Key OT learning: (1) Energy conservation techniques \u2014 the core OT intervention in HF: Pacing (rest before, during, and after ADL tasks), Prioritizing (identify 3 most valued activities for the day), Positioning (sit to shower/dress rather than stand), Planning (prepare everything before starting task to avoid repeated trips). The 4 P's. (2) METs and ADL: showering = 2-3 METs, dressing = 2 METs, sexual activity = 3-4 METs. For NYHA III patients, OT grades activity around the 2-3 MET threshold. Teach the patient to recognize dyspnea early (Borg scale) and rest before it becomes severe. (3) Adaptive equipment for bathing: shower chair, handheld showerhead, long-handled brush \u2014 reduce energy expenditure 30-40% compared to standing shower. (4) Depression and occupation: loss of valued roles (gardening, cooking for family, driving) drives depression in HF patients. OT addresses loss of occupational identity: 'Tell me what you did before that you can't do now \u2014 let's problem-solve which ones are possible with modifications.' (5) OT communicates to cardiologist: '6MWT 188 meters and dyspnea at 2 METs. Patient cannot complete basic self-care independently at current functional status. Energy conservation training provided, adaptive equipment prescribed. Consider cardiac rehab when clinically stable.'"
    }
  }
};
