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
    }
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
            { "test": "Glucose", "value": "78", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Sodium", "value": "119", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "88", "unit": "mEq/L", "range": "98-106", "flag": "L" },
            { "test": "CO2 (Bicarbonate)", "value": "24", "unit": "mEq/L", "range": "23-29", "flag": "" }
          ]
        },
        {
          "name": "THYROID FUNCTION",
          "results": [
            { "test": "TSH", "value": "68.4", "unit": "mIU/L", "range": "0.5-4.5", "flag": "H" },
            { "test": "Free T4", "value": "0.2", "unit": "ng/dL", "range": "0.8-1.8", "flag": "L" },
            { "test": "Free T3", "value": "0.8", "unit": "pg/mL", "range": "2.3-4.2", "flag": "L" }
          ]
        },
        {
          "name": "SERUM AND URINE OSMOLALITY",
          "results": [
            { "test": "Serum Osmolality", "value": "252", "unit": "mOsm/kg", "range": "275-295", "flag": "L" },
            { "test": "Urine Osmolality", "value": "380", "unit": "mOsm/kg", "range": "300-900", "flag": "" },
            { "test": "Urine Sodium", "value": "42", "unit": "mEq/L", "range": "<20 (hypovolemic)", "flag": "" }
          ]
        },
        {
          "name": "CORTISOL",
          "results": [
            { "test": "AM Cortisol", "value": "14.2", "unit": "µg/dL", "range": "6.0-18.0", "flag": "" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "5.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "10.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "MCV", "value": "104", "unit": "fL", "range": "80-100", "flag": "H" },
            { "test": "Platelets", "value": "182", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "312", "unit": "mg/dL", "range": "<200", "flag": "H" },
            { "test": "LDL", "value": "218", "unit": "mg/dL", "range": "<100", "flag": "H" },
            { "test": "HDL", "value": "42", "unit": "mg/dL", "range": ">50", "flag": "L" },
            { "test": "Triglycerides", "value": "260", "unit": "mg/dL", "range": "<150", "flag": "H" }
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
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL881K", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Pfizer, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "PF492R", "mfr": "Pfizer" },
    { "vaccine": "Pneumococcal (PCV20)", "date": "03/2023", "site": "Left deltoid IM", "lot": "PV302T", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (2nd dose)", "date": "01/2022", "site": "Left deltoid IM", "lot": "SH192P", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Mother: Deceased at 84 — hypothyroidism, dementia",
    "Father: Deceased at 78 — MI, hypertension",
    "Sister (age 70): Hashimoto thyroiditis, osteoporosis",
    "Daughter (age 48): Healthy"
  ],
  "socialHistory": [
    ["Occupation", "Retired — former librarian (30 years)"],
    ["Marital", "Widowed x 4 years; husband died of lung cancer in 2020; lives alone"],
    ["Tobacco", "Never"],
    ["Alcohol", "Rare — occasional wine with daughter at dinner"],
    ["Drugs", "Denies"],
    ["Exercise", "Minimal — limited by knee pain and fatigue; previously walked daily"],
    ["Housing", "Lives alone in condo; daughter visits 2-3x/week but lives 30 min away"],
    ["Safety", "No firearms; fall risk assessment needed; limited social support network"],
    ["Advance Directive", "Healthcare proxy: Susan Finley-Parks (daughter)"]
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
    "patientPersona": "Margaret Finley appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did renal / electrolyte emergency start?",
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
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started I've been feeling really down and tired lately, sleeping way more than usual, an.'",
        "character": "'It's renal / electrolyte emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Severe Hypothyroidism.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Levothyroxine 75mcg daily; Amlodipine 5mg daily; Sertraline 100mg daily; Acetaminophen 500mg Q6h PRN.'",
        "allergies": "'My allergies are NSAIDs (Ibuprofen, Naproxen).'",
        "family": "Mother: Deceased at 84 \u2014 hypothyroidism, dementia  Father: Deceased at 78 \u2014 MI, hypertension  Sister (age 70): Hashimoto thyroiditis, osteoporosis",
        "social": "Occupation: Retired \u2014 former librarian (30 years)  Marital: Widowed x 4 years; husband died of lung cancer in 2020; lives alone  Tobacco: Never  Alcohol: Rare \u2014 occasional wine with daughter at dinner  Drugs: Denies"
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
        "General appearance and level of distress": "Clinical finding consistent with Severe Hypothyroidism. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Severe Hypothyroidism. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Severe Hypothyroidism. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Severe Hypothyroidism. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Severe Hypothyroidism. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Severe Hypothyroidism. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Severe Hypothyroidism. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Severe Hypothyroidism. Document specifically what you observe."
    },
    "ddxTargets": [
        "Severe Hypothyroidism (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Severe Hypothyroidism, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Severe Hypothyroidism, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Severe Hypothyroidism based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Margaret Finley's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Severe Hypothyroidism (TSH 68) with Symptomatic Hyponatremia (Na 119) \u2014 Secondary to Medication Non-Adherence with Contributing Sertraline Use. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
