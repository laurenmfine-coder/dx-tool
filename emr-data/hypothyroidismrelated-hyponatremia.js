// Virtual EMR Case: Hypothyroidism-Related Hyponatremia
// Variant: hypothyroidismrelated-hyponatremia | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Margaret Finley",
    "patientHPI": "I've been feeling really down and tired lately, sleeping way more than usual, and I've gained about 4 pounds. My hair seems thinner and I'm more constipated than normal - oh, and I ran out of my thyroid medication a few weeks ago and haven't gotten it refilled yet.",
    "dob": "02/14/1952",
    "age": 73,
    "sex": "Female",
    "mrn": "RDX-2025-88219",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + Cigna Supplement",
    "pcp": "Dr. Jennifer Adams, MD",
    "pharmacy": "CVS Pharmacy — 7201 Taft St, Pembroke Pines, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "1233 Spruce St, Milwaukee, WI 53209",
    "phone": "(954) 555-8142",
    "email": "m.finley52@email.com",
    "emergencyContact": {
      "name": "Susan Finley-Parks (Daughter)",
      "phone": "(954) 555-8146"
    },
    "chiefComplaint": "Fatigue and confusion for weeks"
  },
  "problems": [
    {
      "problem": "Hypothyroidism — Severe (Undiagnosed/Untreated)",
      "icd": "E03.9",
      "onset": "2024",
      "status": "Active",
      "notes": "TSH 68; patient stopped levothyroxine 8 months ago when prescription expired and did not follow up; now presenting with symptomatic hyponatremia"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2008",
      "status": "Active",
      "notes": "On amlodipine"
    },
    {
      "problem": "Osteoarthritis — Bilateral Knees",
      "icd": "M17.0",
      "onset": "2016",
      "status": "Active",
      "notes": "Uses acetaminophen PRN; declined TKR"
    },
    {
      "problem": "Depression",
      "icd": "F33.1",
      "onset": "2020",
      "status": "Active",
      "notes": "Onset after husband's death; on sertraline; worsening — missed therapy appointments; contributing to medication non-adherence"
    }
  ],
  "medications": [
    {
      "name": "Levothyroxine 75mcg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach (DISCONTINUED BY PATIENT 8 months ago — Rx expired, not refilled)",
      "prescriber": "Dr. Adams",
      "start": "2015",
      "refills": 0,
      "status": "DISCONTINUED — patient self-discontinued"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Adams",
      "start": "06/2010",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Sertraline 100mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Adams",
      "start": "03/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg Q6h PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3g/day",
      "prescriber": "Dr. Adams",
      "start": "01/2020",
      "refills": 0,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NSAIDs (Ibuprofen, Naproxen)",
      "type": "Drug",
      "reaction": "GI bleeding — prior upper GI bleed on NSAIDs",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2025",
      "bp": "102/62",
      "hr": 54,
      "rr": 14,
      "temp": "96.4°F",
      "spo2": "95%",
      "wt": "168 lbs",
      "ht": "5'4\"",
      "bmi": 28.8,
      "setting": "ED"
    },
    {
      "date": "06/18/2024",
      "bp": "128/78",
      "hr": 68,
      "rr": 14,
      "temp": "98.0°F",
      "spo2": "98%",
      "wt": "152 lbs",
      "ht": "5'4\"",
      "bmi": 26.1,
      "setting": "PCP Office"
    },
    {
      "date": "01/10/2024",
      "bp": "132/80",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "148 lbs",
      "ht": "5'4\"",
      "bmi": 25.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "06/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Adams, MD",
      "cc": "Follow-up: depression, hypertension, knee pain",
      "hpi": "72-year-old female presenting for follow-up. Reports low mood persisting despite sertraline — missing therapy appointments. Energy is low, 'sleeping a lot.' Weight gain of 4 lbs. Constipation worsening. Hair seems thinner. Knee pain stable. Asked about levothyroxine — patient states 'I ran out a few months ago and forgot to refill it.' No cold intolerance noted by patient, though daughter reports she wears sweaters in warm weather.",
      "exam": "General: Appears fatigued, slow to answer questions, periorbital puffiness. HEENT: Dry skin around face, thinning eyebrows laterally. CV: Bradycardic at 68, regular. Lungs: CTA. Abdomen: Soft, decreased bowel sounds. Extremities: Non-pitting pretibial edema (myxedema). Skin: Dry, coarse. Neuro: Delayed DTRs (relaxation phase prolonged).",
      "assessment": "1. Hypothyroidism — UNTREATED x ~4 months; clinical signs of myxedema developing\n2. Depression — worsening, may be partially hypothyroid-related\n3. Hypertension — stable\n4. Medication non-adherence — patient needs support",
      "plan": "1. RESTART levothyroxine 75mcg daily — prescription sent to pharmacy\n2. TSH and free T4 ordered — STAT\n3. Strongly counseled on importance of thyroid medication\n4. Daughter involved in medication management plan\n5. Re-engage with therapy\n6. RTC 6 weeks for TSH recheck — patient DID NOT RETURN"
    },
    {
      "id": "V002",
      "date": "01/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Adams, MD",
      "cc": "Annual wellness visit",
      "hpi": "72-year-old with hypothyroidism, HTN, depression for annual wellness. Reports doing 'okay' on sertraline. Sleep and appetite normal. Taking all medications including levothyroxine. Knee pain managed with acetaminophen.",
      "exam": "General: Well-appearing. CV: RRR, HR 72. Lungs: CTA. Thyroid: No goiter. Skin: Normal. Neuro: Intact.",
      "assessment": "1. Annual wellness — stable\n2. Hypothyroidism — TSH 3.2 (well-controlled on levothyroxine 75mcg)\n3. Depression — stable on sertraline\n4. HTN — controlled",
      "plan": "1. Continue all current medications\n2. Refills provided for 12 months\n3. Mammogram, colonoscopy screening current\n4. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "02/26/2025",
      "time": "10:28",
      "orderedBy": "Dr. Kevin Tran, MD (ED)",
      "collected": "02/26/2025 10:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-108912",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "78",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "119",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "4.0",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "88",
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
          "name": "THYROID FUNCTION",
          "results": [
            {
              "test": "TSH",
              "value": "68.4",
              "unit": "mIU/L",
              "range": "0.5-4.5",
              "flag": "H"
            },
            {
              "test": "Free T4",
              "value": "0.2",
              "unit": "ng/dL",
              "range": "0.8-1.8",
              "flag": "L"
            },
            {
              "test": "Free T3",
              "value": "0.8",
              "unit": "pg/mL",
              "range": "2.3-4.2",
              "flag": "L"
            }
          ]
        },
        {
          "name": "SERUM AND URINE OSMOLALITY",
          "results": [
            {
              "test": "Serum Osmolality",
              "value": "252",
              "unit": "mOsm/kg",
              "range": "275-295",
              "flag": "L"
            },
            {
              "test": "Urine Osmolality",
              "value": "380",
              "unit": "mOsm/kg",
              "range": "300-900",
              "flag": ""
            },
            {
              "test": "Urine Sodium",
              "value": "42",
              "unit": "mEq/L",
              "range": "<20 (hypovolemic)",
              "flag": ""
            }
          ]
        },
        {
          "name": "CORTISOL",
          "results": [
            {
              "test": "AM Cortisol",
              "value": "14.2",
              "unit": "µg/dL",
              "range": "6.0-18.0",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "5.2",
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
              "test": "MCV",
              "value": "104",
              "unit": "fL",
              "range": "80-100",
              "flag": "H"
            },
            {
              "test": "Platelets",
              "value": "182",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            {
              "test": "Total Cholesterol",
              "value": "312",
              "unit": "mg/dL",
              "range": "<200",
              "flag": "H"
            },
            {
              "test": "LDL",
              "value": "218",
              "unit": "mg/dL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "HDL",
              "value": "42",
              "unit": "mg/dL",
              "range": ">50",
              "flag": "L"
            },
            {
              "test": "Triglycerides",
              "value": "260",
              "unit": "mg/dL",
              "range": "<150",
              "flag": "H"
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
      "accession": "IMG-2025-10812",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "73-year-old with confusion, lethargy, sodium 119 — r/o intracranial process",
      "technique": "Non-contrast axial CT images of the head.",
      "findings": "BRAIN: Age-appropriate cerebral volume loss. No acute hemorrhage, mass, or infarction. No cerebral edema.\n\nVENTRICLES: Mild symmetric ventriculomegaly — likely ex vacuo.\n\nOTHER: No fracture.",
      "impression": "1. No acute intracranial pathology\n2. Age-appropriate involutional changes",
      "dictated": "02/26/2025 10:50",
      "verified": "02/26/2025 10:58"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL881K",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "PF492R",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20)",
      "date": "03/2023",
      "site": "Left deltoid IM",
      "lot": "PV302T",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2nd dose)",
      "date": "01/2022",
      "site": "Left deltoid IM",
      "lot": "SH192P",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Deceased at 84 — hypothyroidism, dementia",
    "Father: Deceased at 78 — MI, hypertension",
    "Sister (age 70): Hashimoto thyroiditis, osteoporosis",
    "Daughter (age 48): Healthy"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired — former librarian (30 years)"
    ],
    [
      "Marital",
      "Widowed x 4 years; husband died of lung cancer in 2020; lives alone"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare — occasional wine with daughter at dinner"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal — limited by knee pain and fatigue; previously walked daily"
    ],
    [
      "Housing",
      "Lives alone in condo; daughter visits 2-3x/week but lives 30 min away"
    ],
    [
      "Safety",
      "No firearms; fall risk assessment needed; limited social support network"
    ],
    [
      "Advance Directive",
      "Healthcare proxy: Susan Finley-Parks (daughter)"
    ]
  ],
  "meta": {
    "caseId": "hypothyroidismrelated-hyponatremia",
    "diagnosis": "Severe Hypothyroidism (TSH 68) with Symptomatic Hyponatremia (Na 119) — Secondary to Medication Non-Adherence with Contributing Sertraline Use",
    "acuity": 3,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Margaret appears tired and somewhat slow to respond, with a flat affect consistent with both depression and hypothyroidism. She is generally forthcoming but seems mildly confused at times and may need questions repeated or clarified. Her distress level is moderate - she's concerned about her symptoms but attributes much of it to grief and aging.",
    "interviewQuestions": [
      "Can you tell me more about when this fatigue and confusion started?",
      "You mentioned running out of your thyroid medication - how long has it been since you last took it?",
      "Have you been taking all your other medications regularly?",
      "Have you noticed any changes in your thinking or memory recently?",
      "Tell me about the weight gain - how much and over what time period?",
      "Have you had any changes in your bowel habits?",
      "Have you noticed feeling colder than usual?",
      "Any changes in your skin or hair?",
      "Have you had any chest pain, shortness of breath, or heart palpitations?",
      "Any nausea, vomiting, or changes in appetite?",
      "How has your mood been, especially since your husband passed?",
      "Have you had any falls or episodes of dizziness?",
      "Any headaches or visual changes?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble concentrating today.",
      "onset": "The fatigue has been getting worse over the past month or so, but looking back, I think I've been slowing down for a few months. The confusion is newer - maybe the last two weeks.",
      "character": "The fatigue is like a heavy blanket - I just feel so sluggish and tired all the time, even after sleeping 10-12 hours. The confusion is hard to describe - I feel foggy, like I can't think clearly.",
      "location": "The fatigue is all over - my whole body feels heavy and weak.",
      "severity": "The fatigue is about an 8 out of 10 - it's really affecting my daily activities. I've been staying in bed most days and barely cooking for myself.",
      "aggravating": "Cold weather seems to make me feel worse, and any activity, even light housework, completely exhausts me.",
      "relieving": "Sleep helps a little with the fatigue, but I wake up still feeling tired. Nothing really helps the mental fog.",
      "associated": "I've been more constipated than usual, gained about 4 pounds, my hair seems thinner, and I feel cold all the time even with the heat up.",
      "denies": "No chest pain, no shortness of breath at rest, no palpitations, no headaches, no vision changes, no recent falls.",
      "history": "I've never felt this tired before, even when I was first diagnosed with hypothyroidism years ago.",
      "medications": "Levothyroxine 75mcg daily; Amlodipine 5mg daily; Sertraline 100mg daily; Acetaminophen 500mg Q6h PRN",
      "allergies": "NSAIDs (Ibuprofen, Naproxen)",
      "family": "My mother had thyroid problems too and developed dementia later in life. My sister has Hashimoto's thyroiditis. Both parents had heart problems.",
      "social": "I'm a retired librarian, widowed four years ago. I live alone and don't smoke or drink much - just occasional wine with my daughter. No drugs."
    },
    "examManeuvers": [
      "Thyroid palpation",
      "Assessment of reflexes (ankle jerk with delayed relaxation phase)",
      "Skin examination (texture, temperature, dryness)",
      "Hair and eyebrow assessment",
      "Cardiovascular examination (heart rate, rhythm, murmurs)",
      "Mental status examination",
      "Assessment for peripheral edema",
      "Abdominal examination",
      "Neurological assessment (cranial nerves, motor strength)"
    ],
    "examFindings": {
      "Thyroid palpation": "Thyroid gland is diffusely enlarged, firm, and non-tender without discrete nodules",
      "Assessment of reflexes (ankle jerk with delayed relaxation phase)": "Ankle reflexes present but with markedly delayed relaxation phase bilaterally, classic for hypothyroidism",
      "Skin examination (texture, temperature, dryness)": "Skin is cool, dry, and rough with a slightly yellowish tint; non-pitting edema noted",
      "Hair and eyebrow assessment": "Hair appears thin and brittle; outer third of eyebrows are notably sparse bilaterally",
      "Cardiovascular examination (heart rate, rhythm, murmurs)": "Bradycardic at 54 bpm, regular rhythm, no murmurs, distant heart sounds",
      "Mental status examination": "Alert but appears slowed; mild difficulty with attention and concentration; MMSE 26/30 with points lost on attention/calculation",
      "Assessment for peripheral edema": "Mild non-pitting edema in lower extremities bilaterally",
      "Abdominal examination": "Soft, non-tender, hypoactive bowel sounds consistent with constipation",
      "Neurological assessment (cranial nerves, motor strength)": "Cranial nerves intact, muscle strength 4+/5 throughout with generally slowed movements"
    },
    "ddxTargets": [
      "Severe Hypothyroidism (TSH 68) with Symptomatic Hyponatremia (Na 119) — Secondary to Medication Non-Adherence with Contributing Sertraline Use (correct diagnosis)",
      "Major Depressive Episode with psychomotor retardation",
      "Early dementia or mild cognitive impairment",
      "Syndrome of Inappropriate ADH (SIADH) from sertraline",
      "Adrenal insufficiency (Addison's disease)",
      "Medication-induced encephalopathy",
      "Chronic kidney disease with uremic symptoms"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on depression given her recent widowhood and sertraline use, potentially overlooking the severe hypothyroidism from medication non-adherence",
      "prematureClosure": "May stop at depression diagnosis without investigating the medication non-adherence and thyroid function given obvious psychosocial stressor",
      "availabilityBias": "Recent cases of depression in elderly patients may overshadow consideration of endocrine causes of fatigue and cognitive changes"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, I see you're considering both psychiatric and medical causes. What specific historical details would help you distinguish between depression and an organic cause? Also, think about how medication adherence might factor into this presentation.",
      "phase5": "Excellent work on the history and physical. You found some classic findings - the delayed reflexes, skin changes, and hair loss are particularly telling. How do these physical findings help you rank your differential diagnosis? What's your next step in workup?",
      "finalDebrief": "This case highlights how medication non-adherence can lead to life-threatening complications in hypothyroidism. The combination of severe hypothyroidism and hyponatremia created a perfect storm of symptoms that could easily be mistaken for depression or dementia. The key learning points are recognizing myxedema-related findings on exam and always checking medication adherence in chronic conditions."
    }
  }
};
