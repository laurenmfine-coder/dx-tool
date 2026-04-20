
window.EMR_DATA = {
  "patient": {
    "name": "Samuel Adeyemi",
    "dob": "08/14/1941",
    "age": 84,
    "sex": "Male",
    "mrn": "RDX-2025-20319",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Dementia",
    "race": "Multiracial",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-2688",
    "email": "samuelad@email.com",
    "emergencyContact": {
      "name": "Lisa Chen (Family)",
      "phone": "(954) 555-3644"
    }
  },
  "problems": [
    {
      "problem": "Recurrent falls \u2014 3 in past 6 months, polypharmacy contributor",
      "icd": "Z91.81",
      "onset": "2024",
      "status": "Active",
      "notes": "Dorothy Walsh, 82F \u2014 on 11 medications, 4 on Beers Criteria list. TUG test abnormal at 18 seconds."
    },
    {
      "problem": "Polypharmacy \u2014 11 medications, Beer's Criteria violations",
      "icd": "Z79.899",
      "onset": "2019",
      "status": "Active",
      "notes": "Diphenhydramine, lorazepam, nifedipine IR, cyclobenzaprine \u2014 all potentially inappropriate in elderly."
    },
    {
      "problem": "Orthostatic hypotension \u2014 systolic drop 24 mmHg on standing",
      "icd": "I95.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Supine 142/84 \u2192 standing 118/76. Medication-induced \u2014 multiple offenders."
    },
    {
      "problem": "Cognitive impairment \u2014 MoCA 22 (mild)",
      "icd": "G31.84",
      "onset": "2023",
      "status": "Active",
      "notes": "Mild cognitive impairment \u2014 increases fall risk and medication adherence problems."
    }
  ],
  "medications": [
    {
      "name": "DISCONTINUE diphenhydramine (Benadryl) \u2014 Beer's Criteria",
      "sig": "Highly anticholinergic in elderly \u2014 sedation, confusion, urinary retention, fall risk. Replace sleep complaints with melatonin or CBT-I.",
      "prescriber": "Geriatrics",
      "start": "DISCONTINUE",
      "refills": 0,
      "status": "DISCONTINUE"
    },
    {
      "name": "TAPER and DISCONTINUE lorazepam \u2014 Beer's Criteria",
      "sig": "Benzodiazepine in elderly \u2014 increases fall risk 2-3x, cognitive impairment, respiratory depression. Taper over 4-8 weeks to prevent withdrawal seizure.",
      "prescriber": "Geriatrics/PCP",
      "start": "TAPER",
      "refills": 0,
      "status": "TAPER to DISCONTINUE"
    },
    {
      "name": "SWITCH nifedipine IR to amlodipine 5mg daily \u2014 Beer's Criteria",
      "sig": "Short-acting nifedipine causes reflex tachycardia and BP swings contributing to orthostasis. Long-acting CCB is safer.",
      "prescriber": "Geriatrics",
      "start": "SWITCH",
      "refills": 5,
      "status": "SWITCH to amlodipine"
    },
    {
      "name": "Melatonin 5mg at bedtime \u2014 replace diphenhydramine for sleep",
      "sig": "Safer sleep aid for elderly \u2014 no anticholinergic side effects, no fall risk",
      "prescriber": "Geriatrics",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 replace Benadryl"
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
      "wt": "119 lbs",
      "ht": "5'6\"",
      "bmi": 19.2,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "119 lbs",
      "ht": "5'6\"",
      "bmi": 19.2,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "119 lbs",
      "ht": "5'6\"",
      "bmi": 19.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Dementia",
      "assessment": "Working diagnosis: Dementia",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Fall Risk Assessment",
      "results": [
        {
          "test": "TUG test (Timed Up and Go)",
          "value": "18",
          "unit": "seconds",
          "ref": "<12 normal, >13.5 high fall risk",
          "flag": "H"
        },
        {
          "test": "MoCA cognitive screen",
          "value": "22",
          "unit": "/30",
          "ref": "\u226526 normal",
          "flag": "L"
        },
        {
          "test": "Orthostatic BP \u2014 supine",
          "value": "142/84",
          "unit": "mmHg",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Orthostatic BP \u2014 standing 1 min",
          "value": "118/76",
          "unit": "mmHg",
          "ref": "Drop <20 systolic",
          "flag": "H"
        },
        {
          "test": "Vitamin D (25-OH)",
          "value": "18",
          "unit": "ng/mL",
          "ref": "\u226530",
          "flag": "L"
        },
        {
          "test": "TSH",
          "value": "2.8",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
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
      "lot": "V5425K",
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
    "caseId": "cross-falls-polypharmacy",
    "diagnosis": "Recurrent Falls \u2014 Polypharmacy-Induced, Beer's Criteria Medications, Comprehensive Medication Reconciliation",
    "acuity": 2,
    "presentation": "Dementia",
    "category": "geriatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with dementia. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this geriatric presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "General appearance",
      "Vital signs",
      "Cardiovascular exam",
      "Pulmonary exam",
      "Abdominal exam",
      "Neurological exam",
      "Skin exam",
      "Musculoskeletal exam"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Polypharmacy-induced falls \u2014 Beer's Criteria medications, orthostasis (correct)",
      "Parkinson's disease \u2014 no rigidity, bradykinesia, or resting tremor",
      "Cerebellar ataxia \u2014 TUG abnormal but gait not grossly ataxic",
      "Vertebrobasilar insufficiency \u2014 episodic vertigo not the primary complaint",
      "Cardiac syncope \u2014 no witnessed LOC, no palpitations preceding fall",
      "Osteoporosis complicating falls \u2014 relevant for injury prevention but not the fall cause"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Dementia. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: polypharmacy-induced recurrent falls. Key learning: (1) Beers Criteria 2023 (American Geriatrics Society): medications potentially inappropriate in adults \u226565: anticholinergics (diphenhydramine, oxybutynin, TCAs), benzodiazepines, non-BZD hypnotics (zolpidem), short-acting nifedipine, muscle relaxants, first-generation antihistamines. These increase fall and cognitive impairment risk. (2) Orthostatic hypotension definition: systolic drop \u226520 mmHg or diastolic drop \u226510 mmHg within 3 minutes of standing. Medication causes: alpha-blockers, diuretics, short-acting CCBs, beta-blockers, antidepressants. Remove offending agents before adding midodrine or fludrocortisone. (3) Benzodiazepine deprescription: MUST taper \u2014 abrupt discontinuation after long-term use risks seizure. Reduce by 10-25% every 1-2 weeks. CIWA monitoring if heavy use. (4) Fall risk multifactorial: address medications, vision (cataracts, glasses prescription), footwear (non-slip), home safety (grab bars, bath mat), vitamin D deficiency, PT/OT evaluation. (5) Vitamin D deficiency (18 ng/mL) increases fall risk \u2014 supplement with vitamin D3 800-2000 IU daily. Combined calcium + vitamin D reduces fall and fracture risk in elderly."
    }
  }
};
