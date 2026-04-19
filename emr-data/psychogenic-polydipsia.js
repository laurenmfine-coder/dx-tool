// Virtual EMR Case: Psychogenic Polydipsia
// Variant: psychogenic-polydipsia | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Travis Dunn",
    "patientHPI": "I've been really thirsty lately and can't stop drinking water - I mean like all day long, probably way more than I should. The staff at my group home keeps telling me to slow down but I just feel like I need it constantly, so sometimes I sneak extra from the bathroom sink when they're not looking.",
    "dob": "10/30/1988",
    "age": 36,
    "sex": "Male",
    "mrn": "RDX-2025-90218",
    "pronouns": "He/Him",
    "insurance": "Medicaid (Florida)",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "Walgreens — 4100 Broward Blvd, Riverside, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "7449 Walnut Dr, Chicago, IL 60623",
    "phone": "(954) 555-4821",
    "email": "t.dunn88@email.com",
    "emergencyContact": {
      "name": "Karen Dunn (Mother)",
      "phone": "(954) 555-4825"
    },
    "chiefComplaint": "Seizure after drinking a lot of water"
  },
  "problems": [
    {
      "problem": "Schizophrenia — Chronic, Undifferentiated",
      "icd": "F20.3",
      "onset": "2010",
      "status": "Active",
      "notes": "Multiple hospitalizations; partial medication adherence; on clozapine; group home resident"
    },
    {
      "problem": "Psychogenic Polydipsia",
      "icd": "F63.89",
      "onset": "2018",
      "status": "Active",
      "notes": "Compulsive water drinking; 3 prior admissions for symptomatic hyponatremia; group home staff monitors fluid intake but patient sneaks water; prior seizure from hyponatremia (2021)"
    },
    {
      "problem": "Obesity",
      "icd": "E66.01",
      "onset": "2016",
      "status": "Active",
      "notes": "BMI 36; clozapine-related metabolic effects"
    },
    {
      "problem": "Pre-Diabetes",
      "icd": "R73.03",
      "onset": "2023",
      "status": "Active",
      "notes": "A1c 6.2%; clozapine metabolic monitoring; no medication started"
    }
  ],
  "medications": [
    {
      "name": "Clozapine 300mg QHS",
      "sig": "Take 300 mg by mouth at bedtime (REMS program — ANC monitored monthly)",
      "prescriber": "Dr. Ramirez (Psychiatry)",
      "start": "01/2019",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Clozapine 100mg QAM",
      "sig": "Take 100 mg by mouth in the morning",
      "prescriber": "Dr. Ramirez (Psychiatry)",
      "start": "01/2019",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Benztropine 1mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Ramirez",
      "start": "01/2019",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Docusate Sodium 100mg BID",
      "sig": "Take 1 capsule by mouth twice daily",
      "prescriber": "Dr. Whitfield",
      "start": "03/2020",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Risperidone",
      "type": "Drug",
      "reaction": "Gynecomastia and galactorrhea (hyperprolactinemia)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2025",
      "bp": "108/68",
      "hr": 98,
      "rr": 18,
      "temp": "97.6°F",
      "spo2": "98%",
      "wt": "248 lbs",
      "ht": "5'10\"",
      "bmi": 35.6,
      "setting": "ED"
    },
    {
      "date": "01/15/2025",
      "bp": "124/78",
      "hr": 82,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "242 lbs",
      "ht": "5'10\"",
      "bmi": 34.7,
      "setting": "PCP Office"
    },
    {
      "date": "10/08/2024",
      "bp": "128/82",
      "hr": 78,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "238 lbs",
      "ht": "5'10\"",
      "bmi": 34.1,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/15/2025",
      "type": "Primary Care",
      "provider": "Dr. James Whitfield, MD",
      "cc": "Follow-up: metabolic monitoring for clozapine, weight management",
      "hpi": "36-year-old male with schizophrenia on clozapine presenting for metabolic monitoring. Group home staff accompanies patient. Reports patient has been drinking excessive water again — measured intake estimated at 8-10 liters/day. Staff restricts access but patient fills water bottles from bathroom sink. No seizures. Weight up 4 lbs. Last fasting glucose was 112. ANC adequate per REMS protocol.",
      "exam": "General: Obese male, pleasant, tangential speech. HEENT: Moist mucous membranes. CV: RRR, no murmur. Lungs: CTA. Abdomen: Obese, soft, NT. Extremities: No edema. Psych: Cooperative, thought process tangential but redirectable, no active psychosis, no SI.",
      "assessment": "1. Psychogenic polydipsia — persistent; HIGH RISK for recurrent hyponatremia\n2. Schizophrenia — stable on clozapine\n3. Obesity — worsening\n4. Pre-diabetes — A1c 6.2%",
      "plan": "1. Fluid restriction reinforced with group home: MAX 2 liters/day\n2. Daily AM weights — if >3 lbs gain from AM weight, restrict further and check Na\n3. Fasting glucose, A1c, lipid panel, ANC, CMP ordered\n4. Discussed case with Dr. Ramirez (psychiatry)\n5. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "10/08/2024",
      "type": "Specialist",
      "provider": "Dr. Carmen Ramirez, MD (Psychiatry)",
      "cc": "Clozapine management, psychogenic polydipsia",
      "hpi": "36-year-old with chronic schizophrenia on clozapine 400mg/day total for quarterly medication management. Positive symptoms well-controlled — no AH/VH. Residual negative symptoms (flat affect, avolition). Polydipsia ongoing but group home managing with restriction. No seizures since 2021 episode. ANC 4,200 — adequate.",
      "exam": "Psych: Flat affect, poor eye contact. Speech: slow, monotone. Thought process: linear with prompting. No delusions elicited. No SI/HI. Motor: mild bilateral hand tremor.",
      "assessment": "1. Schizophrenia — positive symptoms controlled on clozapine\n2. Psychogenic polydipsia — chronic, high recurrence risk\n3. Clozapine REMS — ANC adequate",
      "plan": "1. Continue clozapine 400mg/day (300mg QHS + 100mg QAM)\n2. ANC monitoring per REMS schedule\n3. Polydipsia: water restriction protocols reinforced with group home\n4. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "02/26/2025",
      "time": "16:18",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "collected": "02/26/2025 16:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-109412",
      "status": "Final",
      "specimenType": "Serum, Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "118",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "6",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "L"
            },
            {
              "test": "Creatinine",
              "value": "0.6",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "L"
            },
            {
              "test": "Sodium",
              "value": "114",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "3.0",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "L"
            },
            {
              "test": "Chloride",
              "value": "84",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "L"
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "24",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            }
          ]
        },
        {
          "name": "SERUM AND URINE OSMOLALITY",
          "results": [
            {
              "test": "Serum Osmolality",
              "value": "238",
              "unit": "mOsm/kg",
              "range": "275-295",
              "flag": "L"
            },
            {
              "test": "Urine Osmolality",
              "value": "48",
              "unit": "mOsm/kg",
              "range": "300-900",
              "flag": "L"
            },
            {
              "test": "Urine Sodium",
              "value": "8",
              "unit": "mEq/L",
              "range": "20-200",
              "flag": "L"
            },
            {
              "test": "Urine Specific Gravity",
              "value": "1.002",
              "unit": "",
              "range": "1.005-1.030",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "ANC",
              "value": "3,800",
              "unit": "/µL",
              "range": ">1500",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "228",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-10892",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "36-year-old with confusion, Na 114, history of psychogenic polydipsia — r/o cerebral edema, seizure-related changes",
      "technique": "Non-contrast axial CT head.",
      "findings": "BRAIN: Mild diffuse cerebral edema — effacement of sulci more prominent than expected for age. No focal hemorrhage, mass, or infarction. No uncal herniation.\n\nVENTRICLES: Mildly compressed — slit-like ventricles consistent with cerebral edema.\n\nOTHER: No fracture.",
      "impression": "1. Mild diffuse cerebral edema — consistent with acute hyponatremia\n2. No hemorrhage or infarction\n3. Close monitoring for clinical deterioration recommended",
      "dictated": "02/26/2025 16:40",
      "verified": "02/26/2025 16:48"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL899K",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Moderna, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV902T",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "TA228R",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Mother (age 64): Major depressive disorder, hypertension",
    "Father (age 67): Alcohol use disorder — in recovery; T2DM",
    "Brother (age 33): Schizoaffective disorder",
    "Strong family history of psychotic spectrum illness"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Disabled — SSI; unable to work due to chronic mental illness"
    ],
    [
      "Marital",
      "Single; never married; lives in supervised group home (6 residents)"
    ],
    [
      "Tobacco",
      "1 PPD x 12 years"
    ],
    [
      "Alcohol",
      "Denies current use"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walks within group home and to nearby park with staff supervision"
    ],
    [
      "Housing",
      "Licensed assisted living facility / group home; 24-hour staff supervision"
    ],
    [
      "Safety",
      "No firearms; supervised environment; water access monitored but not fully restricted"
    ],
    [
      "Advance Directive",
      "Healthcare proxy: Karen Dunn (mother)"
    ]
  ],
  "meta": {
    "caseId": "psychogenic-polydipsia",
    "diagnosis": "Psychogenic Polydipsia with Severe Hyponatremia (Na 114) and Cerebral Edema — Schizophrenia-Associated Compulsive Water Drinking",
    "acuity": 2,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "psychiatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Travis Dunn is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did renal / electrolyte emergency start?",
      "Can you describe exactly how it started — sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history — any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle — work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "He pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started I've been really thirsty lately and can't stop drinking water - I mean like all .'",
      "character": "'It's renal / electrolyte emergency — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Psychogenic Polydipsia with Severe Hyponatremia.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Clozapine 300mg QHS; Clozapine 100mg QAM; Benztropine 1mg BID; Docusate Sodium 100mg BID.'",
      "allergies": "'My allergies are Risperidone.'",
      "family": "Mother (age 64): Major depressive disorder, hypertension  Father (age 67): Alcohol use disorder — in recovery; T2DM  Brother (age 33): Schizoaffective disorder",
      "social": "Occupation: Disabled — SSI; unable to work due to chronic mental illness  Marital: Single; never married; lives in supervised group home (6 residents)  Tobacco: 1 PPD x 12 years  Alcohol: Denies current use  Drugs: Denies"
    },
    "examManeuvers": [
      "General appearance and level of distress",
      "Vital signs review",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Extremity assessment",
      "Skin examination",
      "Targeted system examination"
    ],
    "examFindings": {
      "General appearance and level of distress": "Clinical finding consistent with Psychogenic Polydipsia with Severe Hyponatremia. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Psychogenic Polydipsia with Severe Hyponatremia. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Psychogenic Polydipsia with Severe Hyponatremia. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Psychogenic Polydipsia with Severe Hyponatremia. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Psychogenic Polydipsia with Severe Hyponatremia. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Psychogenic Polydipsia with Severe Hyponatremia. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Psychogenic Polydipsia with Severe Hyponatremia. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Psychogenic Polydipsia with Severe Hyponatremia. Document specifically what you observe."
    },
    "ddxTargets": [
      "Psychogenic Polydipsia with Severe Hyponatremia (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Psychogenic Polydipsia with Severe Hyponatremia, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Psychogenic Polydipsia with Severe Hyponatremia, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Psychogenic Polydipsia with Severe Hyponatremia based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Travis Dunn's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Psychogenic Polydipsia with Severe Hyponatremia (Na 114) and Cerebral Edema — Schizophrenia-Associated Compulsive Water Drinking. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
