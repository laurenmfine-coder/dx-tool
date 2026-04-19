// Virtual EMR Case: Metabolic (Hypoglycemia/Hyponatremia)
// Variant: metabolic | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Dorothy Mae Sinclair",
    "patientHPI": "I've been having some dizzy spells and my son says I seem more confused lately, especially since my blood sugar numbers have been getting better. I had to go to the emergency room twice recently because I felt really weak and shaky.",
    "dob": "07/14/1943",
    "age": 81,
    "sex": "Female",
    "mrn": "RDX-2025-34918",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + Humana Supplement",
    "pcp": "Dr. Michael Torres, MD",
    "pharmacy": "Walgreens — 2200 E Commercial Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "2543 Foxglove Dr, Memphis, TN 38122",
    "phone": "(954) 555-2148",
    "email": "d.sinclair.family@email.com",
    "emergencyContact": {
      "name": "James Sinclair Jr. (Son)",
      "phone": "(954) 555-2152"
    },
    "chiefComplaint": "Seizure found down at home"
  },
  "problems": [
    {
      "problem": "Type 2 Diabetes Mellitus — Insulin-Dependent",
      "icd": "E11.65",
      "onset": "2002",
      "status": "Active",
      "notes": "On glipizide + insulin glargine; recent A1c 6.2 — may be overtreated given age; recurrent hypoglycemic episodes"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3b",
      "icd": "N18.32",
      "onset": "2019",
      "status": "Active",
      "notes": "eGFR 38; diabetic and hypertensive nephropathy; impaired renal clearance of insulin and sulfonylureas"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "1998",
      "status": "Active",
      "notes": "On amlodipine and hydrochlorothiazide"
    },
    {
      "problem": "Heart Failure with Preserved EF (HFpEF)",
      "icd": "I50.32",
      "onset": "2021",
      "status": "Active",
      "notes": "EF 55%; diastolic dysfunction grade II; on low-dose furosemide"
    },
    {
      "problem": "Recurrent Hypoglycemia",
      "icd": "E16.2",
      "onset": "2024",
      "status": "Active",
      "notes": "3 ED visits in past 12 months for BG <50; attributed to glipizide + insulin + CKD reducing clearance; dose reduction discussed but patient declined change"
    },
    {
      "problem": "Mild Cognitive Impairment",
      "icd": "G31.84",
      "onset": "2023",
      "status": "Active",
      "notes": "MoCA 22/30; son manages medications but patient lives alone"
    }
  ],
  "medications": [
    {
      "name": "Insulin Glargine 18 units QHS",
      "sig": "Inject 18 units subcutaneously at bedtime",
      "prescriber": "Dr. Torres",
      "start": "09/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Glipizide 10mg BID",
      "sig": "Take 1 tablet by mouth twice daily before meals",
      "prescriber": "Dr. Torres",
      "start": "04/2010",
      "refills": 3,
      "status": "Active — CONTRIBUTING TO HYPOGLYCEMIA (dose reduction recommended but patient resistant)"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Torres",
      "start": "06/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Hydrochlorothiazide 25mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Torres",
      "start": "06/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Furosemide 20mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Torres",
      "start": "04/2021",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Torres",
      "start": "2010",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Metformin",
      "type": "Drug",
      "reaction": "Severe diarrhea (intolerable GI side effects on multiple attempts including XR formulation)",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "ACE Inhibitors (Lisinopril)",
      "type": "Drug",
      "reaction": "Chronic cough",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2025",
      "bp": "108/62",
      "hr": 98,
      "rr": 20,
      "temp": "97.6°F",
      "spo2": "96%",
      "wt": "152 lbs",
      "ht": "5'2\"",
      "bmi": 27.8,
      "setting": "ED"
    },
    {
      "date": "12/04/2024",
      "bp": "142/78",
      "hr": 72,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "97%",
      "wt": "156 lbs",
      "ht": "5'2\"",
      "bmi": 28.5,
      "setting": "PCP Office"
    },
    {
      "date": "06/12/2024",
      "bp": "138/76",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "158 lbs",
      "ht": "5'2\"",
      "bmi": 28.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/04/2024",
      "type": "Primary Care",
      "provider": "Dr. Michael Torres, MD",
      "cc": "Follow-up: diabetes, CKD, recurrent hypoglycemia",
      "hpi": "81-year-old female with T2DM, CKD stage 3b, and MCI presenting for follow-up. Son accompanied. A1c dropped to 6.2 — below target for her age and comorbidities (ADA recommends <8.0 for complex older adults). Has had 2 hypoglycemic episodes requiring ED visits since last appointment (BG 38 and 42). Both times found confused by son. She takes glipizide and insulin as prescribed but admits to sometimes skipping meals. CKD progression (eGFR declined from 42 to 38) is further reducing drug clearance.",
      "exam": "General: Thin elderly female, pleasant, mild cognitive slowing. CV: RRR, mild S4. Lungs: CTA. Abdomen: Soft, NT. Extremities: Trace bilateral LE edema. Neuro: A&O x3 (slow). Mild short-term memory impairment. No focal deficits.",
      "assessment": "1. Recurrent hypoglycemia — overtreatment in context of CKD3b (reduced glipizide/insulin clearance) and MCI (meal inconsistency)\n2. A1c 6.2 — too low for patient profile; target 7.5-8.0\n3. CKD 3b — progressive; eGFR 38\n4. HFpEF — stable, trace edema",
      "plan": "1. REDUCE glipizide to 5mg BID (from 10mg BID) — patient reluctant but son agrees\n2. REDUCE insulin glargine to 14 units (from 18) — PATIENT DECLINED; worried about 'sugars going up'\n3. Glucometer check: fasting and before dinner; son to review logs weekly\n4. CGM discussed — declined due to cost\n5. Medication pill box organized by son\n6. Labs: BMP, A1c in 3 months\n7. COUNSELED: low blood sugar is MORE DANGEROUS than mildly high blood sugar at her age"
    },
    {
      "id": "V002",
      "date": "09/14/2024",
      "type": "ED",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Found confused at home by son — BG 38 on EMS glucometer",
      "hpi": "81-year-old female found by son sitting in chair, confused, diaphoretic, unable to answer questions. EMS found BG 38. IV dextrose administered in field with improvement to BG 142. Patient reports she took her medications (glipizide 10mg + insulin 18 units last night) but 'forgot to eat dinner.' No seizure witnessed. No fall or injury.",
      "exam": "General: Elderly female, post-D50 correction, now alert but confused about events. Neuro: A&O x2 (not oriented to date). No focal deficits. No tongue bite or incontinence.",
      "assessment": "1. Hypoglycemia (BG 38) — medication-induced in setting of missed meal and CKD\n2. No seizure witnessed, no postictal features\n3. Resolved with IV dextrose",
      "plan": "1. Observation 4 hours — BG remained >100\n2. Discharge to son's care\n3. PCP follow-up for medication adjustment within 1 week\n4. Son educated on hypoglycemia signs and glucagon kit provided"
    }
  ],
  "labs": [
    {
      "date": "02/27/2025",
      "time": "07:48",
      "orderedBy": "Dr. Marcus Johnson, MD (ED)",
      "collected": "02/27/2025 07:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-111284",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "POINT-OF-CARE GLUCOSE (ON ARRIVAL)",
          "results": [
            {
              "test": "Glucose (POC)",
              "value": "28",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose (Serum — post D50)",
              "value": "148",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "38",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.8",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "28",
              "unit": "mL/min",
              "range": ">60",
              "flag": "L"
            },
            {
              "test": "Sodium",
              "value": "124",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "5.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "90",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "L"
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "18",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": "L"
            },
            {
              "test": "Calcium",
              "value": "8.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "L"
            },
            {
              "test": "Magnesium",
              "value": "1.6",
              "unit": "mg/dL",
              "range": "1.7-2.2",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "8.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "10.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "32.4",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "212",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "SERUM OSMOLALITY",
          "results": [
            {
              "test": "Serum Osmolality",
              "value": "258",
              "unit": "mOsm/kg",
              "range": "275-295",
              "flag": "L"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/27/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-11112",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Johnson, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "81-year-old with GTC seizure in setting of BG 28 and Na 124 — r/o intracranial pathology",
      "technique": "Non-contrast axial CT of the head.",
      "findings": "BRAIN PARENCHYMA: No acute intracranial hemorrhage, mass, or infarction. Generalized cortical atrophy, moderate for age. Moderate periventricular and subcortical white matter hypodensity consistent with chronic microvascular ischemic changes.\n\nVENTRICLES: Mild symmetric ventriculomegaly — likely ex vacuo.\n\nEXTRA-AXIAL: No subdural or epidural collection.\n\nBONY STRUCTURES: Intact.",
      "impression": "1. No acute intracranial pathology — no hemorrhage, mass, or acute infarction\n2. Age-appropriate atrophy and chronic microvascular disease\n3. Seizure likely metabolic in etiology — correlate with BG 28 and Na 124",
      "dictated": "02/27/2025 08:10",
      "verified": "02/27/2025 08:18"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose — Fluzone)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FH818R",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV712T",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "PV782K",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1st dose)",
      "date": "01/2020",
      "site": "Right deltoid IM",
      "lot": "SH262P",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2nd dose)",
      "date": "03/2020",
      "site": "Right deltoid IM",
      "lot": "SH268P",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Deceased at age 76 — stroke, T2DM",
    "Father: Deceased at age 72 — CHF, hypertension",
    "Sister (age 78): T2DM, CKD on dialysis",
    "Son (age 56): Hypertension, prediabetes",
    "Strong family history of diabetes and cardiovascular disease"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired — former postal worker"
    ],
    [
      "Marital",
      "Widowed x 12 years; lives alone; son lives 15 min away and checks daily"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "None"
    ],
    [
      "Drugs",
      "None"
    ],
    [
      "Exercise",
      "Minimal — walks to mailbox; limited by fatigue and mild dyspnea"
    ],
    [
      "Housing",
      "Ground-floor apartment; Life Alert pendant worn"
    ],
    [
      "Safety",
      "Son manages pill boxes; meals-on-wheels delivers lunch M-F; often skips dinner"
    ],
    [
      "Advance Directive",
      "Yes — DNR/comfort care if terminal; son is healthcare proxy"
    ]
  ],
  "meta": {
    "caseId": "metabolic",
    "diagnosis": "Metabolic Seizure — Dual Etiology: Severe Hypoglycemia (BG 28, Glipizide/Insulin + CKD) and Hyponatremia (Na 124, HCTZ + CKD)",
    "acuity": 2,
    "presentation": "Seizure",
    "category": "metabolic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Dorothy Mae Sinclair is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did seizure start?",
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
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started I've been having some dizzy spells and my son says I seem more confused lately, .'",
      "character": "'It's seizure — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Metabolic Seizure — Dual Etiology: Severe Hypoglycemia.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Insulin Glargine 18 units QHS; Glipizide 10mg BID; Amlodipine 10mg daily; Hydrochlorothiazide 25mg daily; Furosemide 20mg daily; Aspirin 81mg daily.'",
      "allergies": "'My allergies are Metformin, ACE Inhibitors (Lisinopril).'",
      "family": "Mother: Deceased at age 76 — stroke, T2DM  Father: Deceased at age 72 — CHF, hypertension  Sister (age 78): T2DM, CKD on dialysis",
      "social": "Occupation: Retired — former postal worker  Marital: Widowed x 12 years; lives alone; son lives 15 min away and checks daily  Tobacco: Never  Alcohol: None  Drugs: None"
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
      "General appearance and level of distress": "Clinical finding consistent with Metabolic Seizure — Dual Etiology: Severe Hypoglycemia. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Metabolic Seizure — Dual Etiology: Severe Hypoglycemia. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Metabolic Seizure — Dual Etiology: Severe Hypoglycemia. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Metabolic Seizure — Dual Etiology: Severe Hypoglycemia. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Metabolic Seizure — Dual Etiology: Severe Hypoglycemia. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Metabolic Seizure — Dual Etiology: Severe Hypoglycemia. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Metabolic Seizure — Dual Etiology: Severe Hypoglycemia. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Metabolic Seizure — Dual Etiology: Severe Hypoglycemia. Document specifically what you observe."
    },
    "ddxTargets": [
      "Metabolic Seizure — Dual Etiology: Severe Hypoglycemia (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Metabolic Seizure — Dual Etiology: Severe Hypoglycemia, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Metabolic Seizure — Dual Etiology: Severe Hypoglycemia, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Metabolic Seizure — Dual Etiology: Severe Hypoglycemia based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Dorothy Mae Sinclair's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Metabolic Seizure — Dual Etiology: Severe Hypoglycemia (BG 28, Glipizide/Insulin + CKD) and Hyponatremia (Na 124, HCTZ + CKD). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
