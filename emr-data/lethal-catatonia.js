// Virtual EMR Case: Lethal Catatonia
// Variant: lethal-catatonia | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Thibodeaux",
  "patientHPI": "I've been pretty good about taking my medications, though I'll admit I sometimes forget my mood pills on the weekends when my routine gets messed up. I'm here for my regular check-up and everything seems fine - sleeping okay, eating well, my blood sugars have been running a bit high but not terrible.",
    "dob": "01/20/1990",
    "age": 35,
    "sex": "Male",
    "mrn": "RDX-2025-73918",
    "pronouns": "He/Him",
    "insurance": "Medicaid (Florida)",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "Walgreens — 3450 W Broward Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "4018 S Halsted St, Indianapolis, IN 46208",
    "phone": "(954) 555-6142",
    "email": "m.thibodeaux@email.com",
    "emergencyContact": {
      "name": "Denise Thibodeaux (Sister)",
      "phone": "(954) 555-6148"
    }
  },
  "problems": [
    {
      "problem": "Bipolar I Disorder — Most Recent Episode Manic with Psychotic Features",
      "icd": "F31.2",
      "onset": "2012",
      "status": "Active",
      "notes": "Onset age 22; multiple manic episodes with psychotic features; 4 psychiatric hospitalizations; last hospitalization 6 months ago; history of catatonic features during severe episodes"
    },
    {
      "problem": "Catatonia — Recurrent",
      "icd": "F06.1",
      "onset": "2019",
      "status": "Active",
      "notes": "2 prior catatonic episodes requiring lorazepam challenge; one episode progressed to malignant catatonia with autonomic instability in 2022"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2021",
      "status": "Active",
      "notes": "Developed on second-generation antipsychotics; A1c 7.8%; on metformin"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2020",
      "status": "Active",
      "notes": "On lisinopril; partially controlled"
    }
  ],
  "medications": [
    {
      "name": "Lithium 600mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Ramirez (Psychiatry)",
      "start": "09/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Quetiapine 400mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Ramirez (Psychiatry)",
      "start": "09/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Whitfield",
      "start": "03/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "06/2021",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Carbamazepine",
      "type": "Drug",
      "reaction": "Stevens-Johnson Syndrome (confirmed HLA-B*1502 positive)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/23/2025",
      "bp": "182/108",
      "hr": 138,
      "rr": 28,
      "temp": "104.6°F",
      "spo2": "94%",
      "wt": "210 lbs",
      "ht": "5'10\"",
      "bmi": 30.1,
      "setting": "ED"
    },
    {
      "date": "12/04/2024",
      "bp": "142/88",
      "hr": 82,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "208 lbs",
      "ht": "5'10\"",
      "bmi": 29.8,
      "setting": "PCP Office"
    },
    {
      "date": "09/10/2024",
      "bp": "148/92",
      "hr": 78,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "212 lbs",
      "ht": "5'10\"",
      "bmi": 30.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/04/2024",
      "type": "Primary Care",
      "provider": "Dr. James Whitfield, MD",
      "cc": "Follow-up: diabetes, hypertension, medication check",
      "hpi": "35-year-old male with Bipolar I and T2DM presenting for routine follow-up. Reports medication adherence 'most days' but admits missing lithium doses on weekends when his schedule is disrupted. Denies manic symptoms currently. Sleep fair at 6-7 hours. Appetite good. Blood sugars running 140-180 per home monitoring. No polyuria or polydipsia. Denies chest pain, SOB.",
      "exam": "General: Obese male, euthymic, cooperative. HEENT: WNL. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, obese, NT. Extremities: No edema. Neuro: A&O x3, normal gait. Psych: Euthymic, linear thought process, no psychomotor abnormality.",
      "assessment": "1. Type 2 Diabetes — suboptimally controlled (A1c 7.8%)\n2. Hypertension — partially controlled on lisinopril 20mg\n3. Bipolar I Disorder — stable on lithium + quetiapine\n4. Obesity — BMI 29.8",
      "plan": "1. Continue metformin 1000mg BID; consider adding second agent if A1c not improved at next check\n2. Continue lisinopril 20mg; recheck BP in 1 month\n3. Lithium level due — ordered\n4. Reinforced medication adherence, especially lithium\n5. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "09/10/2024",
      "type": "Specialist",
      "provider": "Dr. Carmen Ramirez, MD (Psychiatry)",
      "cc": "Post-hospitalization follow-up — Bipolar I, manic episode with catatonic features",
      "hpi": "35-year-old male seen 2 weeks post-discharge from psychiatric unit. Admitted for manic episode with psychotic features and emerging catatonic symptoms (mutism, posturing, waxy flexibility). Treated with lorazepam challenge (positive response) + dose adjustment of lithium and quetiapine. Discharged on lithium 600mg BID + quetiapine 400mg QHS. Currently stable. Sister present, reports he has been taking medications, eating, sleeping, and engaging in conversation.",
      "exam": "Psych: Well-groomed, cooperative. Speech: normal rate/volume. Mood: 'better.' Affect: somewhat restricted but reactive. No catatonic signs (no immobility, negativism, posturing, or waxy flexibility). Thought process: linear. No psychotic symptoms. No SI/HI. Motor: no rigidity, no tremor.",
      "assessment": "1. Bipolar I Disorder — post-manic episode with catatonic features, now remitting\n2. Catatonia — resolved with lorazepam; no residual signs\n3. Medication regimen stable",
      "plan": "1. Continue lithium 600mg BID — therapeutic level confirmed at 0.8 mEq/L\n2. Continue quetiapine 400mg QHS\n3. Lithium level, TSH, renal function in 3 months\n4. If catatonic features re-emerge → lorazepam 2mg IM/IV and call ED\n5. RTC 4 weeks"
    }
  ],
  "labs": [
    {
      "date": "02/23/2025",
      "time": "15:28",
      "orderedBy": "Dr. Amanda Liu, MD (ED)",
      "collected": "02/23/2025 15:10",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-099182",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "218", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "38", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "2.1", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "Sodium", "value": "152", "unit": "mEq/L", "range": "136-145", "flag": "H" },
            { "test": "Potassium", "value": "5.6", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
            { "test": "Chloride", "value": "112", "unit": "mEq/L", "range": "98-106", "flag": "H" },
            { "test": "CO2 (Bicarbonate)", "value": "18", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "Calcium", "value": "10.8", "unit": "mg/dL", "range": "8.5-10.5", "flag": "H" },
            { "test": "AST (SGOT)", "value": "284", "unit": "U/L", "range": "10-40", "flag": "H" },
            { "test": "ALT (SGPT)", "value": "162", "unit": "U/L", "range": "7-56", "flag": "H" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC) WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "18.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "16.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "50.4", "unit": "%", "range": "38.3-48.6", "flag": "H" },
            { "test": "Platelets", "value": "142", "unit": "x10³/µL", "range": "150-400", "flag": "L" },
            { "test": "Neutrophils", "value": "84", "unit": "%", "range": "40-70", "flag": "H" }
          ]
        },
        {
          "name": "CREATINE KINASE",
          "results": [
            { "test": "CK Total", "value": "12,840", "unit": "U/L", "range": "30-200", "flag": "H" },
            { "test": "CK-MB", "value": "18", "unit": "ng/mL", "range": "0-5", "flag": "H" }
          ]
        },
        {
          "name": "LITHIUM LEVEL",
          "results": [
            { "test": "Lithium", "value": "1.8", "unit": "mEq/L", "range": "0.6-1.2", "flag": "H" }
          ]
        },
        {
          "name": "LACTIC ACID",
          "results": [
            { "test": "Lactate", "value": "5.4", "unit": "mmol/L", "range": "0.5-2.0", "flag": "H" }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            { "test": "Serum Iron", "value": "18", "unit": "µg/dL", "range": "60-170", "flag": "L" },
            { "test": "Ferritin", "value": "1,842", "unit": "ng/mL", "range": "20-250", "flag": "H" }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            { "test": "Color", "value": "Dark amber", "unit": "", "range": "Yellow", "flag": "" },
            { "test": "Specific Gravity", "value": "1.034", "unit": "", "range": "1.005-1.030", "flag": "H" },
            { "test": "Myoglobin", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Blood (dipstick)", "value": "3+", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "RBC", "value": "0-2", "unit": "/HPF", "range": "0-3", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/23/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-09814",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Liu, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "35-year-old with acute rigidity, hyperthermia, autonomic instability, altered mental status — r/o intracranial process",
      "technique": "Non-contrast axial CT images of the head.",
      "findings": "BRAIN PARENCHYMA: No acute hemorrhage, mass, or infarction. Normal gray-white differentiation.\n\nVENTRICLES: Normal size and configuration.\n\nEXTRA-AXIAL: No subdural or epidural collection.\n\nBONY STRUCTURES: No fracture.",
      "impression": "1. No acute intracranial pathology\n2. Clinical presentation (rigidity, hyperthermia, autonomic instability, elevated CK) — consider lethal catatonia, NMS, or serotonin syndrome based on medication history",
      "dictated": "02/23/2025 16:00",
      "verified": "02/23/2025 16:08"
    },
    {
      "date": "02/23/2025",
      "study": "CHEST X-RAY — PA AND LATERAL",
      "accession": "IMG-2025-09816",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Liu, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "Tachycardia, fever, rule out aspiration pneumonia",
      "technique": "PA and lateral chest radiographs.",
      "findings": "LUNGS: No focal consolidation or effusion. No aspiration pattern.\n\nHEART: Normal cardiomediastinal silhouette.\n\nOTHER: No pneumothorax.",
      "impression": "1. No acute cardiopulmonary process\n2. No evidence of aspiration pneumonia",
      "dictated": "02/23/2025 16:05",
      "verified": "02/23/2025 16:12"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL891R", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Moderna, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "CV884P", "mfr": "Moderna" },
    { "vaccine": "Tdap (Adacel)", "date": "01/2022", "site": "Left deltoid IM", "lot": "TA219K", "mfr": "Sanofi" }
  ],
  "familyHistory": [
    "Mother (age 60): Bipolar II Disorder, hypertension, obesity",
    "Father (age 63): Deceased — MI at age 58; hx of T2DM, HTN, hyperlipidemia",
    "Sister (age 32): Anxiety disorder — on sertraline",
    "Maternal uncle: Schizophrenia — institutionalized",
    "Strong family history of mood disorders and psychotic spectrum illness"
  ],
  "socialHistory": [
    ["Occupation", "Disability — SSI; unable to work consistently due to psychiatric illness"],
    ["Marital", "Single; lives with sister who serves as informal caregiver"],
    ["Tobacco", "Former — quit 2 years ago; previously 1 PPD x 8 years"],
    ["Alcohol", "Denies current use; hx of heavy use during manic episodes"],
    ["Drugs", "Denies current use; hx of cocaine use during manic episodes (last use 2022)"],
    ["Exercise", "Walks in neighborhood occasionally; mostly sedentary"],
    ["Housing", "Lives with sister in apartment"],
    ["Safety", "No firearms; sister monitors medications; has psychiatric advance directive naming sister as healthcare proxy"],
    ["Advance Directive", "Psychiatric advance directive on file — sister (Denise) is designated decision-maker"]
  ],
  "meta": {
    "caseId": "lethal-catatonia",
    "diagnosis": "Lethal (Malignant) Catatonia with Autonomic Instability, Rhabdomyolysis, and Concurrent Lithium Toxicity",
    "acuity": 1,
    "presentation": "Psychiatric Emergency",
    "category": "psychiatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus Thibodeaux appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did psychiatric emergency start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started I've been pretty good about taking my medications, though I'll admit I sometimes.'",
        "character": "'It's psychiatric emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Lethal.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Lithium 600mg BID; Quetiapine 400mg QHS; Metformin 1000mg BID; Lisinopril 20mg daily.'",
        "allergies": "'My allergies are Carbamazepine.'",
        "family": "Mother (age 60): Bipolar II Disorder, hypertension, obesity  Father (age 63): Deceased \u2014 MI at age 58; hx of T2DM, HTN, hyperlipidemia  Sister (age 32): Anxiety disorder \u2014 on sertraline",
        "social": "Occupation: Disability \u2014 SSI; unable to work consistently due to psychiatric illness  Marital: Single; lives with sister who serves as informal caregiver  Tobacco: Former \u2014 quit 2 years ago; previously 1 PPD x 8 years  Alcohol: Denies current use; hx of heavy use during manic episodes  Drugs: Denies current use; hx of cocaine use during manic episodes (last use 2022)"
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
        "General appearance and level of distress": "Clinical finding consistent with Lethal. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Lethal. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Lethal. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Lethal. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Lethal. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Lethal. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Lethal. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Lethal. Document specifically what you observe."
    },
    "ddxTargets": [
        "Lethal (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Lethal, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Lethal, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Lethal based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Marcus Thibodeaux's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Lethal (Malignant) Catatonia with Autonomic Instability, Rhabdomyolysis, and Concurrent Lithium Toxicity. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
