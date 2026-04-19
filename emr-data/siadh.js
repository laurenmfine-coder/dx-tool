// Virtual EMR Case: SIADH (Drug-Induced — Sertraline + HCTZ)
// Variant: siadh | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Beverly Coleman",
  "patientHPI": "Ever since I retired a few months ago, I just can't shake this overwhelming sadness and I don't enjoy anything anymore. I barely want to leave my house or see anyone, and my daughter is worried because I'm not eating much and can't sleep through the night.",
    "dob": "11/03/1957",
    "age": 67,
    "sex": "Female",
    "mrn": "RDX-2025-92184",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + BlueCross Supplement",
    "pcp": "Dr. Jennifer Adams, MD",
    "pharmacy": "CVS Pharmacy — 4501 S University Dr, Riverside, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "1269 Juniper Dr, Albuquerque, NM 87111",
    "phone": "(954) 555-7842",
    "email": "b.coleman57@email.com",
    "emergencyContact": {
      "name": "Denise Coleman (Daughter)",
      "phone": "(954) 555-7848"
    }
  },
  "problems": [
    {
      "problem": "Major Depressive Disorder — Recurrent",
      "icd": "F33.1",
      "onset": "2018",
      "status": "Active",
      "notes": "On sertraline 150mg; dose increased from 100mg 6 weeks ago due to worsening symptoms after retirement"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "On HCTZ 25mg + lisinopril 20mg"
    },
    {
      "problem": "Osteoporosis",
      "icd": "M81.0",
      "onset": "2019",
      "status": "Active",
      "notes": "On alendronate"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 150mg daily",
      "sig": "Take 1 tablet by mouth daily (INCREASED from 100mg to 150mg 6 weeks ago)",
      "prescriber": "Dr. Adams",
      "start": "01/2025 (dose increase)",
      "refills": 3,
      "status": "Active — RECENTLY INCREASED"
    },
    {
      "name": "Hydrochlorothiazide 25mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Adams",
      "start": "03/2010",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Adams",
      "start": "06/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Alendronate 70mg weekly",
      "sig": "Take 1 tablet by mouth once weekly on empty stomach",
      "prescriber": "Dr. Adams",
      "start": "08/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Calcium 600mg + Vitamin D 800 IU daily",
      "sig": "Take 1 tablet by mouth daily with food",
      "prescriber": "Dr. Adams",
      "start": "08/2019",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Fluoxetine",
      "type": "Drug",
      "reaction": "Severe agitation and insomnia",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2025",
      "bp": "118/72",
      "hr": 78,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "98%",
      "wt": "148 lbs",
      "ht": "5'4\"",
      "bmi": 25.4,
      "setting": "ED"
    },
    {
      "date": "01/08/2025",
      "bp": "134/82",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "146 lbs",
      "ht": "5'4\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Adams, MD",
      "cc": "Worsening depression since retirement, medication adjustment",
      "hpi": "67-year-old female with MDD presenting with worsening depressive symptoms since retiring 3 months ago. Low mood, anhedonia, poor sleep, decreased appetite, social withdrawal. Daughter reports she 'barely leaves the house.' Current sertraline 100mg not providing adequate relief. No suicidal ideation. No psychotic features.",
      "exam": "General: Appears fatigued, tearful at times. CV: RRR. Lungs: CTA. Neuro: A&O x3, psychomotor slowing noted. Psych: Depressed mood, restricted affect, no SI/HI.",
      "assessment": "1. MDD — worsening, partial response to sertraline 100mg\n2. Hypertension — controlled\n3. NOTE: Patient on SSRI + HCTZ — both associated with hyponatremia risk; Na should be checked after dose increase",
      "plan": "1. Increase sertraline from 100mg to 150mg daily\n2. CMP with sodium in 2-4 weeks after dose change — ORDER PLACED\n3. Therapy referral\n4. Safety planning — daughter involved\n5. RTC 4 weeks — PATIENT DID NOT GET LABS OR RETURN"
    }
  ],
  "labs": [
    {
      "date": "02/27/2025",
      "time": "11:42",
      "orderedBy": "Dr. Kevin Tran, MD (ED)",
      "collected": "02/27/2025 11:25",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-112218",
      "status": "Final",
      "specimenType": "Serum, Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "92", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "8", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.7", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Sodium", "value": "121", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "3.6", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "90", "unit": "mEq/L", "range": "98-106", "flag": "L" },
            { "test": "CO2 (Bicarbonate)", "value": "24", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Uric Acid", "value": "2.8", "unit": "mg/dL", "range": "2.5-7.0", "flag": "" }
          ]
        },
        {
          "name": "SERUM AND URINE OSMOLALITY",
          "results": [
            { "test": "Serum Osmolality", "value": "254", "unit": "mOsm/kg", "range": "275-295", "flag": "L" },
            { "test": "Urine Osmolality", "value": "520", "unit": "mOsm/kg", "range": "300-900", "flag": "" },
            { "test": "Urine Sodium", "value": "82", "unit": "mEq/L", "range": "20-200", "flag": "" }
          ]
        },
        {
          "name": "THYROID AND CORTISOL",
          "results": [
            { "test": "TSH", "value": "2.4", "unit": "mIU/L", "range": "0.5-4.5", "flag": "" },
            { "test": "AM Cortisol", "value": "12.8", "unit": "µg/dL", "range": "6.0-18.0", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/27/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-11182",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "67-year-old with confusion, gait instability, Na 121",
      "technique": "Non-contrast axial CT head.",
      "findings": "BRAIN: No acute hemorrhage, mass, or infarction. Age-appropriate volume loss. No cerebral edema.\n\nVENTRICLES: Normal.\n\nOTHER: No fracture.",
      "impression": "1. No acute intracranial pathology",
      "dictated": "02/27/2025 12:00",
      "verified": "02/27/2025 12:08"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL921P", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Pfizer, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "PF522K", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (2nd dose)", "date": "03/2022", "site": "Left deltoid IM", "lot": "SH208R", "mfr": "GSK" },
    { "vaccine": "Pneumococcal (PCV20)", "date": "11/2023", "site": "Left deltoid IM", "lot": "PV312T", "mfr": "Pfizer" }
  ],
  "familyHistory": [
    "Mother: Deceased at 82 — stroke, hypertension",
    "Father: Deceased at 75 — prostate cancer",
    "Sister (age 64): Depression, hypertension",
    "Daughter (age 42): Healthy"
  ],
  "socialHistory": [
    ["Occupation", "Recently retired — former school counselor (32 years); struggling with transition"],
    ["Marital", "Divorced x 15 years; lives alone; daughter visits weekly"],
    ["Tobacco", "Never"],
    ["Alcohol", "Rare — occasional wine"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 20 min/day — decreased since depression worsened"],
    ["Housing", "Condo; lives alone; daughter has key"],
    ["Safety", "No firearms; no SI currently; daughter checks on her regularly"],
    ["Advance Directive", "Healthcare proxy: Denise Coleman (daughter)"]
  ],
  "meta": {
    "caseId": "siadh",
    "diagnosis": "SIADH — Drug-Induced (Sertraline Dose Increase + HCTZ Synergy) with Symptomatic Hyponatremia (Na 121)",
    "acuity": 3,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Beverly Coleman appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
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
        "onset": "'The symptoms started Ever since I retired a few months ago, I just can't shake this overwhelming sadn.'",
        "character": "'It's renal / electrolyte emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with SIADH \u2014 Drug-Induced.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Sertraline 150mg daily; Hydrochlorothiazide 25mg daily; Lisinopril 20mg daily; Alendronate 70mg weekly; Calcium 600mg + Vitamin D 800 IU daily.'",
        "allergies": "'My allergies are Fluoxetine.'",
        "family": "Mother: Deceased at 82 \u2014 stroke, hypertension  Father: Deceased at 75 \u2014 prostate cancer  Sister (age 64): Depression, hypertension",
        "social": "Occupation: Recently retired \u2014 former school counselor (32 years); struggling with transition  Marital: Divorced x 15 years; lives alone; daughter visits weekly  Tobacco: Never  Alcohol: Rare \u2014 occasional wine  Drugs: Denies"
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
        "General appearance and level of distress": "Clinical finding consistent with SIADH \u2014 Drug-Induced. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with SIADH \u2014 Drug-Induced. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with SIADH \u2014 Drug-Induced. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with SIADH \u2014 Drug-Induced. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with SIADH \u2014 Drug-Induced. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with SIADH \u2014 Drug-Induced. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with SIADH \u2014 Drug-Induced. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with SIADH \u2014 Drug-Induced. Document specifically what you observe."
    },
    "ddxTargets": [
        "SIADH \u2014 Drug-Induced (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For SIADH \u2014 Drug-Induced, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying SIADH \u2014 Drug-Induced, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight SIADH \u2014 Drug-Induced based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Beverly Coleman's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is SIADH \u2014 Drug-Induced (Sertraline Dose Increase + HCTZ Synergy) with Symptomatic Hyponatremia (Na 121). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
