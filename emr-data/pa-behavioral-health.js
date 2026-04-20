
window.EMR_DATA = {
  "patient": {
    "name": "Fatima Al-Hassan",
    "dob": "01/15/1968",
    "age": 57,
    "sex": "Female",
    "mrn": "RDX-2025-91563",
    "pronouns": "She/Her",
    "insurance": "Tricare",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "PHQ-9 14",
    "race": "Hispanic or Latino",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-4310",
    "email": "fatimaal@email.com",
    "emergencyContact": {
      "name": "Emmanuel Obi (Family)",
      "phone": "(954) 555-4794"
    }
  },
  "problems": [
    {
      "problem": "Major depressive disorder \u2014 moderate severity",
      "icd": "F32.1",
      "onset": "2024",
      "status": "Active",
      "notes": "PHQ-9 14 + somatic complaints + functional impairment \u2014 SSRI initiation appropriate"
    },
    {
      "problem": "Somatic symptom disorder \u2014 complicating picture",
      "icd": "F45.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Multiple body pain complaints, fatigue, GI symptoms \u2014 partially mediated by depression"
    },
    {
      "problem": "Hypothyroidism ruled out \u2014 TSH normal",
      "icd": "Z03.89",
      "onset": "2024",
      "status": "Active",
      "notes": "TSH 2.8 \u2014 organic cause excluded before SSRI initiation"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 50mg daily \u2014 first-line SSRI",
      "sig": "Take 1 tablet daily in the morning with food. Increase to 100mg at 4 weeks if tolerated.",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 1,
      "status": "Active \u2014 new"
    },
    {
      "name": "Lorazepam 0.5mg PRN anxiety (short-term bridge only)",
      "sig": "PRN anxiety \u2014 maximum 2 weeks, do NOT refill without reassessment",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 limited"
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
      "wt": "113 lbs",
      "ht": "5'9\"",
      "bmi": 16.7,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "113 lbs",
      "ht": "5'9\"",
      "bmi": 16.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "113 lbs",
      "ht": "5'9\"",
      "bmi": 16.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for PHQ-9 14",
      "assessment": "Working diagnosis: PHQ-9 14",
      "plan": "Referral to pa. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Depression Workup",
      "results": [
        {
          "test": "TSH",
          "value": "2.8",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
          "flag": ""
        },
        {
          "test": "CBC \u2014 hemoglobin",
          "value": "13.2",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": ""
        },
        {
          "test": "Comprehensive metabolic panel",
          "value": "All normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "Vitamin B12",
          "value": "388",
          "unit": "pg/mL",
          "ref": "200-900",
          "flag": ""
        },
        {
          "test": "PHQ-9",
          "value": "14",
          "unit": "",
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
      "lot": "V1023K",
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
    "caseId": "pa-behavioral-health",
    "diagnosis": "Major Depressive Disorder, Moderate \u2014 PHQ-9 14, First Antidepressant Selection",
    "acuity": 3,
    "presentation": "PHQ-9 14",
    "category": "psychiatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with phq-9 14. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did this start?",
      "Has it been getting better, worse, or the same?",
      "What makes it better or worse?",
      "Rate the severity 0-10.",
      "Any associated symptoms?",
      "Any prior episodes?",
      "What medications are you taking?",
      "Any allergies?",
      "Any relevant family history?",
      "Any recent travel or sick contacts?",
      "Any prior surgeries or hospitalizations?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this psychiatric presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Complete history and physical",
      "Vital signs and trending",
      "Focused systems exam",
      "Scope of practice determination",
      "Escalation criteria assessment",
      "Documentation review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "MDD moderate \u2014 SSRI initiation appropriate (correct)",
      "Hypothyroidism \u2014 TSH normal, excluded",
      "Adjustment disorder \u2014 functional impairment and 14 PHQ-9 meets MDD threshold",
      "Bipolar disorder \u2014 must screen (MDQ negative)",
      "Somatic symptom disorder without depression \u2014 both present",
      "Substance-induced mood disorder \u2014 no substance use"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: PHQ-9 14. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: MDD moderate, first SSRI initiation. Key PA learning: (1) PHQ-9 action: score 14 = moderate depression \u2192 SSRI + counseling (both). First-line SSRIs are equivalent in efficacy \u2014 choice based on side effect profile, drug interactions, cost. Sertraline: FDA-approved for depression, anxiety, PTSD, OCD, well-tolerated. (2) SSRI counseling: onset 2-4 weeks for mood benefit. Side effects peak first 1-2 weeks (nausea, insomnia). Critically: 'The medication might make you feel more anxious briefly before it helps depression \u2014 this is normal, do NOT stop.' Discontinuation syndrome if stopped abruptly \u2014 taper. (3) Bipolar screening before SSRI: MDQ (Mood Disorder Questionnaire) in clinical practice. SSRI monotherapy in bipolar can trigger mania. Screen with 'Have you ever had a period of unusually elevated mood, decreased need for sleep, increased energy that lasted days to weeks?' (4) Benzos in depression: acceptable for short-term anxiety co-treatment (2 weeks maximum) while SSRI titrates. Document limited refill plan upfront. Do NOT continue benzos chronically in depression. (5) Follow-up: 2-week phone check for side effects and safety, 4-week office visit for PHQ-9 reassessment and dose titration if needed. Safety plan if any suicidal ideation."
    }
  }
};
