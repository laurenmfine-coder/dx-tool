
window.EMR_DATA = {
  "patient": {
    "name": "Marcus Johnson",
    "dob": "07/15/1971",
    "age": 54,
    "sex": "Male",
    "mrn": "RDX-2025-52871",
    "pronouns": "He/Him",
    "insurance": "Tricare",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "COPD GOLD III",
    "race": "Middle Eastern",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-2868",
    "email": "marcusjo@email.com",
    "emergencyContact": {
      "name": "Sam Patel (Family)",
      "phone": "(954) 555-1015"
    }
  },
  "problems": [
    {
      "problem": "COPD GOLD III \u2014 pulmonary rehab referral",
      "icd": "J44.1",
      "onset": "2016",
      "status": "Active",
      "notes": "FEV1 38% predicted, 6MWT 230m (55% predicted). PR = evidence-based standard of care."
    },
    {
      "problem": "Exercise-induced desaturation \u2014 SpO2 drops to 84%",
      "icd": "R09.02",
      "onset": "2024",
      "status": "Active",
      "notes": "SpO2 84% at peak exercise \u2014 supplemental O2 required during PR exercise sessions"
    },
    {
      "problem": "Dyspnea catastrophizing \u2014 modified MRC grade 4",
      "icd": "R06.00",
      "onset": "2024",
      "status": "Active",
      "notes": "Avoids activity that causes breathlessness \u2014 fear-avoidance pattern worsens deconditioning"
    }
  ],
  "medications": [
    {
      "name": "Tiotropium 18mcg inhaled daily",
      "sig": "1 capsule inhaled via HandiHaler daily",
      "prescriber": "Pulmonology",
      "start": "2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Formoterol-Budesonide 160/4.5mcg inhaled BID",
      "sig": "2 puffs twice daily \u2014 LABA/ICS combination",
      "prescriber": "Pulmonology",
      "start": "2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Albuterol 90mcg MDI 2-4 puffs PRN",
      "sig": "2-4 puffs every 4-6 hours as needed for rescue",
      "prescriber": "Pulmonology",
      "start": "2016",
      "refills": 3,
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
      "wt": "61 lbs",
      "ht": "5'1\"",
      "bmi": 11.5,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "61 lbs",
      "ht": "5'1\"",
      "bmi": 11.5,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "61 lbs",
      "ht": "5'1\"",
      "bmi": 11.5,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for COPD GOLD III",
      "assessment": "Working diagnosis: COPD GOLD III",
      "plan": "Referral to pt. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "10/15/2024",
      "panel": "COPD Pre-Rehab Assessment",
      "results": [
        {
          "test": "FEV1 (% predicted)",
          "value": "38",
          "unit": "%",
          "ref": ">80% normal",
          "flag": "L"
        },
        {
          "test": "FEV1/FVC ratio",
          "value": "0.52",
          "unit": "",
          "ref": ">0.70",
          "flag": "L"
        },
        {
          "test": "6-Minute Walk Test",
          "value": "230",
          "unit": "meters",
          "ref": ">450m normal",
          "flag": "L"
        },
        {
          "test": "Borg dyspnea at peak 6MWT",
          "value": "8/10",
          "unit": "",
          "ref": "<5 normal",
          "flag": "H"
        },
        {
          "test": "SpO2 nadir during 6MWT",
          "value": "84",
          "unit": "%",
          "ref": ">92",
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
      "lot": "V6914K",
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
    "caseId": "copd-pulm-rehab-pt",
    "diagnosis": "COPD GOLD III \u2014 Pulmonary Rehabilitation: 6MWT 230m, Dyspnea-Limited Exercise Capacity",
    "acuity": 3,
    "presentation": "COPD GOLD III",
    "category": "pulmonary"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with copd gold iii. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this pulmonary presentation.",
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
      "COPD GOLD III \u2014 PR with O2 supplementation during exercise (correct)",
      "Exercise-induced asthma \u2014 COPD with fixed obstruction, different pathophysiology",
      "Deconditioning only \u2014 significant airflow limitation beyond deconditioning",
      "Pulmonary hypertension limiting exercise \u2014 possible complication but PR still indicated",
      "Cardiac limitation \u2014 dyspnea from COPD not cardiac dysfunction",
      "Full exertion contraindicated \u2014 PR IS the treatment, not contraindication"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pt case with chief complaint: COPD GOLD III. What are the most important questions for a pt to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pt perspective, what is the most critical finding that narrows this differential? What is the pt-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pt's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: COPD GOLD III \u2014 pulmonary rehabilitation. Key PT learning: (1) Pulmonary rehab is the highest-level evidence intervention in COPD (Level A): reduces dyspnea, improves exercise tolerance and quality of life, reduces hospitalizations. More effective than any bronchodilator for functional outcomes. Yet it is under-prescribed and under-utilized. (2) Exercise during desaturation: SpO2 drops to 84% with exercise. Protocol: prescribe supplemental O2 at 2-4 L/min during exercise sessions targeting SpO2 >90%. This is an O2 prescription \u2014 PT can write the exercise O2 order or call the pulmonologist. Do NOT exclude the patient from exercise because of desaturation. (3) Interval training vs continuous: COPD patients with severe dyspnea often tolerate interval training better than continuous (30s exercise, 30s rest). Lower ventilatory demand per bout, same total work. Progress toward continuous as tolerance improves. (4) Pursed-lip breathing: PT teaches this as standard \u2014 slows respiratory rate, increases positive end-expiratory pressure, prevents airway collapse, reduces dyspnea perception. Teach with every exercise session. (5) Dyspnea education: the fear-avoidance component. 'Breathlessness during exercise is safe \u2014 it will not harm your lungs. Your breathing will recover. The discomfort is expected and decreases as you get fitter.' Exposure and desensitization to exercise dyspnea is a PR goal."
    }
  }
};
