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
    "diagnosis": "Metabolic Seizure — Dual Etiology Hypoglycemia and Hyponatremia in Polypharmacy/CKD",
    "acuity": 2,
    "presentation": "Seizure",
    "category": "metabolic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Dorothy appears mildly confused and somewhat anxious, frequently looking to her son for reassurance. She's cooperative but admits to memory gaps around the seizure episode and seems worried about being a burden on her family.",
    "interviewQuestions": [
      "Can you tell me what you remember about what happened when your son found you?",
      "Have you been having any dizzy spells or feeling weak lately?",
      "How has your blood sugar been running recently?",
      "Have you been taking your diabetes medications as prescribed?",
      "When did you last eat before this episode?",
      "Have you been drinking enough fluids, or have you been trying to cut back?",
      "Have you had any nausea, vomiting, or changes in appetite?",
      "Have you noticed any swelling in your legs or shortness of breath?",
      "Have you had seizures or similar episodes before?",
      "How has your kidney function been at your recent doctor visits?",
      "Have there been any recent changes to your medications?",
      "Have you been more confused or forgetful than usual?",
      "Any recent illness, fever, or infections?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble remembering things clearly right now. Could you ask my son? He knows more about what's been happening.",
      "onset": "My son found me on the kitchen floor this morning around 8 AM. I don't remember much, but he said I was shaking and not responding to him at first.",
      "character": "I've been having these dizzy, weak spells where I feel shaky and sweaty. Sometimes I feel confused and can't think straight.",
      "location": "The weakness is all over, but I get this strange feeling in my head, like everything is foggy.",
      "severity": "The weakness is about a 7 out of 10 when it happens. I can't do anything - I have to sit down or I might fall.",
      "aggravating": "It seems worse when I haven't eaten in a while, or if I've been up and moving around too much.",
      "relieving": "Usually eating something sweet helps, but lately even that doesn't seem to work as well.",
      "associated": "I've been more confused lately, and my son says I repeat myself. Sometimes I feel nauseous and just don't want to eat.",
      "denies": "No chest pain, no trouble breathing at rest, no fever. I haven't been vomiting.",
      "history": "I've had low blood sugar episodes before and went to the ER twice in the past month for weakness and shakiness.",
      "medications": "Insulin Glargine 18 units QHS; Glipizide 10mg BID; Amlodipine 10mg daily; Hydrochlorothiazide 25mg daily; Furosemide 20mg daily; Aspirin 81mg daily",
      "allergies": "Metformin, ACE Inhibitors (Lisinopril)",
      "family": "My mother had diabetes and died from a stroke. My father had heart failure. My sister has diabetes and kidney problems - she's on dialysis now.",
      "social": "I'm a retired postal worker, been widowed for 12 years. I live alone but my son checks on me every day. I've never smoked or drank alcohol."
    },
    "examManeuvers": [
      "Neurologic assessment including mental status",
      "Cardiovascular examination",
      "Assessment for dehydration and volume status",
      "Skin assessment for hypoglycemic signs",
      "Deep tendon reflexes",
      "Gait and balance assessment",
      "Assessment for peripheral edema",
      "Blood pressure lying and sitting",
      "Pulmonary examination",
      "Assessment of mucous membranes and skin turgor"
    ],
    "examFindings": {
      "Neurologic assessment including mental status": "Mild confusion with MMSE 24/30. Alert but disoriented to date. No focal neurologic deficits. Speech clear but occasional word-finding difficulty.",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs. S3 gallop present. JVP mildly elevated at 8 cm.",
      "Assessment for dehydration and volume status": "Mild dehydration evident - skin tenting present, mucous membranes slightly dry.",
      "Skin assessment for hypoglycemic signs": "Skin cool and slightly diaphoretic. No current tremor but patient reports recent shakiness.",
      "Deep tendon reflexes": "Diminished throughout, 1+ bilaterally, consistent with diabetic neuropathy.",
      "Gait and balance assessment": "Unsteady gait with wide base. Positive Romberg test.",
      "Assessment for peripheral edema": "Trace bilateral lower extremity edema, chronic appearing.",
      "Blood pressure lying and sitting": "Lying 108/62, sitting 95/58 - mild orthostatic hypotension present.",
      "Pulmonary examination": "Clear to auscultation bilaterally, no rales or rhonchi.",
      "Assessment of mucous membranes and skin turgor": "Mucous membranes tacky, skin turgor delayed - suggests mild volume depletion."
    },
    "ddxTargets": [
      "Metabolic Seizure — Dual Etiology: Severe Hypoglycemia (BG 28, Glipizide/Insulin + CKD) and Hyponatremia (Na 124, HCTZ + CKD) (correct diagnosis)",
      "Hypoglycemic seizure secondary to medication-induced hypoglycemia",
      "Hyponatremic seizure from SIADH or diuretic use",
      "Stroke or transient ischemic attack",
      "Cardiac arrhythmia with syncope",
      "Uremic encephalopathy from worsening kidney disease",
      "Medication toxicity or polypharmacy effects"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on diabetes and assuming purely hypoglycemic cause while missing concurrent hyponatremia from diuretic use in setting of CKD",
      "prematureClosure": "May stop investigation after finding hypoglycemia and miss the dual metabolic etiology requiring different management approaches",
      "availabilityBias": "Recent exposure to diabetic emergencies may lead to overemphasis on hyperglycemic causes rather than hypoglycemic seizures in elderly patients"
    },
    "coachPrompts": {
      "phase2": "You're considering seizure in an 81-year-old diabetic patient. What metabolic derangements are most likely to cause seizures in elderly patients with multiple comorbidities? How might her medications and kidney disease interact to create metabolic disturbances?",
      "phase5": "Your history and physical suggest metabolic causes for her seizure. Given her medication regimen and kidney disease, what specific lab abnormalities would you expect? Could there be more than one metabolic disturbance contributing to her presentation?",
      "finalDebrief": "This case illustrates how multiple metabolic derangements can coexist in elderly patients with multiple comorbidities. The severe hypoglycemia from her diabetes medications combined with CKD-induced decreased clearance, plus hyponatremia from diuretic use in the setting of reduced kidney function, created a perfect storm for seizure activity. How does this change your approach to medication management in elderly patients with CKD?",
      "final": "Diagnosis: metabolic seizure with dual etiology — severe hypoglycemia (BG 28) from glipizide and insulin plus hyponatremia (Na 124) from HCTZ, compounded by CKD. Key learning: (1) New-onset seizure in an older adult with comorbidities is rarely 'just epilepsy' — the differential is broad and includes metabolic, structural, infectious, vascular, and toxicologic causes. The mnemonic VITAMINS: Vascular (stroke, hemorrhage), Infectious (meningitis, encephalitis, abscess), Trauma, Autoimmune (paraneoplastic, autoimmune encephalitis), Metabolic (glucose, sodium, calcium, magnesium, uremia, hepatic), Iatrogenic (medications, withdrawal), Neoplastic, Structural/congenital. Every new seizure in an adult should get CBC, comprehensive metabolic panel, magnesium, phosphorus, calcium, glucose, lactate (often elevated postictally — trend to be sure), tox screen, ECG, and head CT emergently; MRI and EEG in stable patients after workup. (2) Hypoglycemia as a seizure cause is a critical miss — always check a glucose immediately in any seizing patient. Severe hypoglycemia (under 54 mg/dL) causes neuroglycopenia: confusion, focal deficits, seizure, coma. Sulfonylureas (glipizide, glyburide, glimepiride) are notoriously prone to prolonged hypoglycemia, especially in CKD (reduced clearance), elderly, malnourished, or when combined with insulin. Treatment: IV dextrose (D50W 25 g), then sustained infusion (D5 or D10) often required for 24-72 hours because sulfonylurea effect persists. Octreotide 50-100 mcg SQ q6-8h blocks pancreatic insulin release and is the specific antidote for sulfonylurea overdose — reduces recurrent hypoglycemia and dextrose requirements. (3) Hyponatremia-related seizures occur at rapid drops or at very low levels (often under 120). Thiazides (HCTZ) are a classic cause — they impair free-water excretion in the distal tubule and cause hyponatremia particularly in elderly women. Symptomatic or severe hyponatremia with seizures requires 3% hypertonic saline 100-150 mL IV bolus, repeat to resolve symptoms, then carefully controlled correction — aim for 4-6 mEq/L rise in the first few hours to stop seizures, then no more than 8-10 mEq/L in the first 24 hours to avoid osmotic demyelination. Check sodium every 2 hours. (4) Dual etiology is not an either/or — both must be corrected concurrently, and each exacerbates neurologic vulnerability. Additional considerations in this case: review the full medication list for other contributors (SSRIs, carbamazepine, opioids can cause hyponatremia; beta-blockers mask hypoglycemic awareness), identify and treat the precipitating event (infection, missed meal, dose change), and plan durable changes (switch HCTZ to calcium channel blocker or ACE-I for hypertension, adjust diabetes regimen to avoid sulfonylureas in CKD, education on sick-day rules). (5) Classic pitfalls: (a) giving empiric levetiracetam for a seizure and discharging without identifying reversible metabolic causes — patients return within days with recurrent seizures and worse outcomes. (b) Undertreating the hypoglycemia with a single ampule of D50 and missing the prolonged effect of sulfonylureas — requires sustained infusion and octreotide. (c) Correcting the hyponatremia too fast, causing osmotic demyelination syndrome. (d) Forgetting the 'stop the insulin and sulfonylurea' step — both should be held during admission and reviewed with the outpatient prescriber before resuming. (e) Missing the social/functional root cause — is the patient mixing up medications at home, unable to eat regularly, or confused about sliding-scale insulin? A home visit or pharmacy review can be high-impact."
    }
  }
};
