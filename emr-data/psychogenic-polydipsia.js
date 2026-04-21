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
    "diagnosis": "Psychogenic Polydipsia with Severe Hyponatremia and Cerebral Edema",
    "acuity": 2,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "psychiatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Travis appears confused and mildly agitated, with flat affect but becomes more animated when discussing his water drinking compulsion. He is generally forthcoming about his symptoms but has limited insight into the severity of his condition and tends to minimize the extent of his water consumption.",
    "interviewQuestions": [
      "How much water have you been drinking each day?",
      "When did this excessive thirst and water drinking start?",
      "Can you describe what happened right before your seizure?",
      "Have you had any headaches, nausea, or confusion lately?",
      "Do you feel like you have control over your water drinking?",
      "Have you noticed any changes in your urination?",
      "Are you taking your psychiatric medications as prescribed?",
      "Have you had any recent medication changes?",
      "Do you remember having the seizure or what happened during it?",
      "Have you been hearing voices or having thoughts that might be related to drinking water?",
      "Have you had seizures before?",
      "Are you experiencing any weakness, muscle cramps, or twitching?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean... can you ask that differently? My head feels kind of foggy right now.",
      "onset": "It's been getting worse over the past few weeks, maybe a month. I've always been thirsty because of my medications, but lately it's like I can't stop thinking about water.",
      "character": "It's not really thirst like when you're hot or exercising. It's more like... I just feel compelled to drink water constantly. Like my brain tells me I need it even when I'm not thirsty.",
      "location": "The thirst feeling is everywhere - my mouth, my throat, but also just in my head like a craving.",
      "severity": "Maybe 8 out of 10? It's really hard to resist. I've been drinking probably 6-8 liters a day, maybe more. The group home staff had to start monitoring me.",
      "aggravating": "Stress makes it worse, and when I try not to drink water I get really anxious and can't focus on anything else.",
      "relieving": "Only drinking more water helps temporarily, but then the feeling comes right back. Nothing else really helps.",
      "associated": "I've had headaches for the past few days, feeling confused and foggy, and I've been really nauseous. I've been urinating constantly too.",
      "denies": "No fever, no chest pain, no shortness of breath. I haven't been hearing voices telling me to drink water specifically.",
      "history": "I've never had a seizure before. I've had episodes of drinking too much water in the past but never this bad, and it never caused a seizure.",
      "medications": "Clozapine 300mg QHS; Clozapine 100mg QAM; Benztropine 1mg BID; Docusate Sodium 100mg BID",
      "allergies": "Risperidone",
      "family": "My mom has depression and high blood pressure. My dad is a recovering alcoholic with diabetes. My brother has schizoaffective disorder - he actually had something similar happen with water drinking a few years ago.",
      "social": "I'm on disability and live in a supervised group home. I smoke about a pack a day. I don't drink alcohol or use drugs. I can't work because of my schizophrenia."
    },
    "examManeuvers": [
      "Mental status examination",
      "Neurological examination including reflexes",
      "Assessment for signs of cerebral edema",
      "Evaluation for muscle weakness or fasciculations",
      "Skin turgor and mucous membrane assessment",
      "Cardiovascular examination",
      "Assessment of gait and coordination",
      "Fundoscopic examination",
      "Assessment for orthostatic changes",
      "Abdominal examination"
    ],
    "examFindings": {
      "Mental status examination": "Alert but mildly confused with flat affect, poor insight, concrete thinking, and mild disorientation to time",
      "Neurological examination including reflexes": "Hyperreflexia, positive Babinski sign bilaterally, mild tremor in hands",
      "Assessment for signs of cerebral edema": "Mild papilledema on fundoscopy, subtle signs of increased intracranial pressure",
      "Evaluation for muscle weakness or fasciculations": "Generalized muscle weakness, occasional fasciculations in extremities",
      "Skin turgor and mucous membrane assessment": "Paradoxically moist mucous membranes, normal skin turgor despite fluid overload",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, no signs of volume overload",
      "Assessment of gait and coordination": "Unsteady gait, mild ataxia, impaired finger-to-nose testing",
      "Fundoscopic examination": "Mild papilledema consistent with increased intracranial pressure",
      "Assessment for orthostatic changes": "No significant orthostatic changes",
      "Abdominal examination": "Soft, non-tender, no organomegaly, normal bowel sounds"
    },
    "ddxTargets": [
      "Psychogenic Polydipsia with Severe Hyponatremia (Na 114) and Cerebral Edema — Schizophrenia-Associated Compulsive Water Drinking (correct diagnosis)",
      "SIADH secondary to psychiatric medications",
      "Central diabetes insipidus",
      "Bacterial meningitis with seizure",
      "Intracranial mass lesion with seizure",
      "Primary epilepsy with postictal confusion",
      "Nephrogenic diabetes insipidus"
    ],
    "biasFlags": {
      "anchoring": "May anchor on psychiatric history and dismiss medical causes of seizure, or conversely anchor on seizure and miss the underlying metabolic cause",
      "prematureClosure": "May stop at 'psychiatric patient had seizure' without investigating the water intoxication or may assume simple medication non-compliance",
      "availabilityBias": "Recent cases of epilepsy or drug-seeking behavior may bias toward more common seizure causes rather than considering medication-induced polydipsia"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, think about this: What's the relationship between his psychiatric condition, his medications, and this acute presentation? What specific questions would help you understand the connection between his excessive water drinking and the seizure?",
      "phase5": "Now that you've gathered your history and physical findings, consider the constellation of symptoms: compulsive water drinking, seizure, neurological signs, and his psychiatric medications. What laboratory abnormality would tie all of these findings together? How might his schizophrenia and medications contribute to this presentation?",
      "finalDebrief": "This case illustrates how psychiatric patients can develop serious medical complications from medication side effects and behavioral symptoms. The clozapine-induced polydipsia led to severe hyponatremia and cerebral edema. How did your differential diagnosis evolve as you gathered more information? What red flags should prompt you to consider water intoxication in psychiatric patients?",
      "final": "Diagnosis: psychogenic polydipsia with severe hyponatremia (Na 114) and cerebral edema in a patient with schizophrenia. Key learning: (1) Psychogenic (primary) polydipsia is compulsive excessive water drinking, most common in patients with chronic psychiatric illness (schizophrenia, bipolar disorder) and often iatrogenically worsened by dry mouth from antipsychotics and anticholinergics. Up to 20% of chronic inpatient psychiatric populations have polydipsia; a subset have life-threatening water intoxication with hyponatremia. (2) Differential diagnosis of polyuria-polydipsia: (a) Psychogenic polydipsia (primary excess intake) — urine osmolality inappropriately low, serum sodium may be low-normal or hyponatremic. (b) Central diabetes insipidus — ADH deficiency (head trauma, surgery, tumors, autoimmune), urine dilute even when serum is hypertonic, responds to DDAVP. (c) Nephrogenic DI — renal resistance to ADH (lithium, hypercalcemia, hypokalemia, genetic). (d) Osmotic diuresis — uncontrolled diabetes, mannitol. Water deprivation test distinguishes: psychogenic polydipsia → urine concentrates with dehydration. DI → urine stays dilute until DDAVP (central DI responds to DDAVP; nephrogenic does not). (3) Pathophysiology of water intoxication. Normal kidneys can excrete 15-20 L/day of free water with intact ADH suppression, but intake exceeding this causes dilutional hyponatremia. In schizophrenia, concurrent SIADH-like phenomena (from antipsychotics, stress, nausea) further impair water excretion. Acute hyponatremia causes cerebral edema because water shifts into brain cells — manifests as headache, nausea, altered mental status, seizures, coma, and brainstem herniation. Serum sodium under 125 with acute onset (over hours) is a medical emergency. (4) Management of severe symptomatic hyponatremia. (a) HYPERTONIC SALINE — 3% NaCl 100-150 mL IV bolus, repeat up to 3 times, targeting a rise of 4-6 mEq/L in the first 4-6 hours to stop seizures and reverse symptoms. (b) After initial correction, slow to no more than 8-10 mEq/L over 24 hours (6-8 in high-risk patients for ODS) to avoid osmotic demyelination syndrome. (c) Recheck sodium every 1-2 hours during active correction; if overcorrection occurs, give free water (D5W) or DDAVP to slow or reverse. (d) FLUID RESTRICTION (usually under 1 L/day) as maintenance management after initial resuscitation. (e) Treat underlying psychiatric illness; consider clozapine (reduces polydipsia in some schizophrenia patients), behavior modification, staff observation of fluid access, and structured water allowances. (5) Classic pitfalls: (a) correcting hyponatremia too rapidly and causing osmotic demyelination syndrome — a devastating, often irreversible neurologic injury manifesting 2-7 days later with quadriparesis, dysphagia, dysarthria, and locked-in syndrome. (b) Giving isotonic saline thinking it will 'fix' the hyponatremia — in SIADH-physiology, saline can paradoxically worsen hyponatremia because the sodium is excreted but the water is retained. (c) Not recognizing the chronic water abuse pattern in psychiatric patients — ask about thirst, fluid intake, polydipsia, and urine frequency; weigh patients to track fluid shifts. (d) Forgetting that some antipsychotics (carbamazepine, SSRIs, haloperidol, clozapine) cause SIADH — reconcile medications in any hyponatremic psychiatric patient."
    }
  }
};
