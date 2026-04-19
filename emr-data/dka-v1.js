/* emr-data/dka-v1.js — Auto-generated EMR case data for Diabetic Ketoacidosis */
window.EMR_DATA = {
  "patient": {
    "name": "Alejandro Gutierrez",
  "patientHPI": "My family found me really confused and throwing up this morning, and I honestly don't remember much about what happened. I've been feeling more tired than usual lately and haven't been great about taking my insulin like I should.",
    "dob": "08/01/1998",
    "age": "28",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-909133",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(630) 555-9984",
    "email": "alejandro.gutierrez@email.com",
    "address": "6341 Peachtree Rd, Minneapolis, MN 55410",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Cynthia Gutierrez",
      "phone": "(713) 555-6327",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Found confused and vomiting by family",
    "diagnosis": "Diabetic Ketoacidosis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Type 1 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Depression",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Non-adherence to insulin",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Insulin Glargine",
      "dose": "22 units",
      "route": "SC",
      "frequency": "Nightly",
      "status": "Active",
      "prescriber": "Dr. Robert Hughes, DO"
    },
    {
      "id": "med-2",
      "name": "Insulin Lispro",
      "dose": "Sliding scale",
      "route": "SC",
      "frequency": "AC",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    },
    {
      "id": "med-3",
      "name": "Sertraline",
      "dose": "100mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "98/62",
      "hr": "128",
      "rr": "32",
      "temp": "36.4°C",
      "spo2": "99%",
      "pain": "6/10",
      "bmi": "29",
      "weight": "60 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Found confused and vomiting by family",
      "hpi": "Alejandro Gutierrez is a 28-year-old male presenting with found confused and vomiting by family. Past medical history includes Type 1 Diabetes, Depression, Non-adherence to insulin. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Diabetic Ketoacidosis — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-315101",
      "collected": "03/01/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "5.8",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "8",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": "L"
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "542",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "Anion Gap",
              "value": "28",
              "unit": "mEq/L",
              "range": "8-12",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Beta Hydroxybutyrate",
              "value": "6.8",
              "unit": "mmol/L",
              "range": "<0.6",
              "flag": "H"
            },
            {
              "test": "Ph",
              "value": "7.12",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "L"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/01/2026",
      "study": "Chest X-Ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-619080",
      "clinical": "Found confused and vomiting by family",
      "technique": "Standard protocol",
      "findings": "Clear lungs. Normal heart size.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Mother: Type 2 Diabetes",
    "Father: Hypertension"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Binge drinking on weekends"
    ],
    [
      "Insulin",
      "Admits to not taking insulin for 4 days — ran out and couldn't afford refill"
    ],
    [
      "Occupation",
      "Works two part-time jobs, no insurance"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Alejandro Gutierrez is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
        "When did your symptoms start and how?",
        "Describe the main symptom \u2014 location, character, severity.",
        "What makes it worse? What makes it better?",
        "Any other symptoms you've noticed?",
        "Any prior similar episodes?",
        "Tell me about your medical history.",
        "What medications are you currently taking?",
        "Any medication allergies?",
        "Relevant family history?",
        "Tell me about your lifestyle."
    ],
    "patientResponses": {
        "default": "He pauses. 'Can you clarify what you mean?'",
        "onset": "'Gradually \u2014 over the past several days.'",
        "character": "'The symptom has been significant and affecting my ability to function.'",
        "location": "'The main problem is in the expected area for my condition.'",
        "severity": "'Six or seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
        "associated": "'Some associated symptoms consistent with this condition.'",
        "denies": "'No fever, chills, or unexplained weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Insulin Glargine; Insulin Lispro; Sertraline.'",
        "allergies": "'My allergies: NKDA.'",
        "family": "Mother: Type 2 Diabetes  Father: Hypertension",
        "social": "Tobacco: Never  Alcohol: Binge drinking on weekends  Insulin: Admits to not taking insulin for 4 days \u2014 ran out and couldn't afford refill  Occupation: Works two part-time jobs, no insurance"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular",
        "Pulmonary",
        "Abdominal",
        "Extremities",
        "Skin",
        "Targeted exam"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with this condition.",
        "Vital signs": "Finding consistent with this condition.",
        "Cardiovascular": "Finding consistent with this condition.",
        "Pulmonary": "Finding consistent with this condition.",
        "Abdominal": "Finding consistent with this condition.",
        "Extremities": "Finding consistent with this condition.",
        "Skin": "Finding consistent with this condition.",
        "Targeted exam": "Finding consistent with this condition."
    },
    "ddxTargets": [
        "this condition (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for this condition.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Alejandro Gutierrez: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['dka-v1'] = {
  id: 'dka-v1', name: 'Alejandro Gutierrez',
  chiefComplaint: 'DKA — Fluid + Insulin Protocol and Monitoring',
  diagnosis: 'DKA — Fluid + Insulin Protocol and Monitoring',
  orders: {
    correct: [{ id: 'ivf-protocol', name: 'IV fluids — 0.9% NS 1L bolus, then 250-500 mL/hr based on sodium', rationale: '1L 0.9% NS over 30-60 min for initial resuscitation. Then: if corrected Na is normal → continue 0.9% NS. If corrected Na rising → switch to 0.45% NaCl. Add D5 when glucose reaches 200-250 mg/dL. Total fluid deficit 3-6L typically.' },{ id: 'insulin-drip', name: 'Insulin drip 0.1 u/kg/hr — after K ≥3.5', rationale: 'Do NOT start insulin if K <3.5 — risk of fatal hypokalemia as insulin drives K into cells. Replete potassium first. Insulin 0.1 u/kg/hr regular insulin infusion. Goal: glucose falls 50-100 mg/dL/hr. Switch to SQ insulin + overlap with drip for at least 2h before stopping drip to prevent rebound ketosis.' }],
    incorrect: [{ id: 'insulin-bolus', name: 'Insulin bolus 10 units IV push — rapid correction of hyperglycemia', rationale: 'IV insulin boluses are NOT used in DKA management. Continuous infusion provides controlled glucose reduction (target 50-100 mg/dL/hr). Rapid correction risks cerebral edema (especially in children) and profound hypokalemia.' },{ id: 'bicarb-acidosis', name: 'Sodium bicarbonate for pH <7.3', rationale: 'Bicarbonate is NOT routinely recommended for DKA unless pH <6.9. In children: avoid bicarb entirely — increases cerebral edema risk. Bicarbonate may worsen CNS acidosis (paradoxical CSF acidosis from CO2 diffusion), worsens hypokalemia, and delays ketone clearance. Insulin and fluids correct the acidosis.' }]
  },
  teachingPoints: {
    keyLearning: ['DKA diagnostic criteria: glucose >250 mg/dL + pH <7.3 or HCO3 <18 + positive ketones (serum or urine). Mild: pH 7.25-7.3. Moderate: pH 7.1-7.24. Severe: pH <7.1.','Potassium in DKA: despite total body depletion, serum K is often normal or HIGH initially (acidosis drives K out of cells). As insulin is given and pH corrects, K falls rapidly. Replace K aggressively: if K 3.5-5: 20-40 mEq/hr. If K <3.5: replace before starting insulin. If K >5.5: monitor closely.','Resolution criteria (not glucose): glucose <200 + bicarbonate ≥15 + pH >7.3 + anion gap closed. THEN transition to SQ insulin. Do NOT stop drip without subcutaneous overlap.'],
    boardPearls: ['Anion gap in DKA: Na - (Cl + HCO3). Normal 8-12 mEq/L. DKA causes elevated AG metabolic acidosis from ketones. As DKA resolves, AG normalizes before pH does (hyperchloremic non-AG acidosis from NS-heavy resuscitation is common during DKA resolution).','HHS (hyperosmolar hyperglycemic state): hyperglycemia >600 + osmolality >320 + NO significant ketosis (pH >7.3, bicarbonate >15) + profound dehydration (average 8-10L deficit). Treat: aggressive fluids (0.9% NS then 0.45% NS), gentle insulin (lower rate than DKA), correct Na and osmolality slowly.','Identify DKA precipitant: infection (30-40%), new-onset DM (20-25%), insulin omission (15-20%), medications (corticosteroids, SGLT2 inhibitors — euglycemic DKA). Treat the precipitant, not just the DKA.']
  },
  "guided": {
    "supported": true,
    "patientPersona": "Alejandro Gutierrez is cooperative and provides a clear history. He is appropriately concerned about their symptoms.",
    "interviewQuestions": [
        "When did your symptoms start?",
        "Describe the main symptom.",
        "How severe is it?",
        "What makes it worse or better?",
        "Any other symptoms?",
        "Any prior episodes?",
        "What medications do you take?",
        "Any allergies?"
    ],
    "patientResponses": {
        "default": "He thinks for a moment. 'Can you clarify what you mean?'",
        "onset": "'My symptoms started recently, getting worse over the past day or two.'",
        "character": "'It feels like working diagnosis \u2014 fairly significant.'",
        "location": "'The problem is primarily in the affected area.'",
        "severity": "'About a seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat.'",
        "associated": "'I have some associated symptoms consistent with my condition.'",
        "denies": "'No fever, chills, or weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Insulin Glargine; Insulin Lispro; Sertraline.'",
        "allergies": "'My allergies: NKDA.'",
        "family": "'No significant family history relevant to this presentation.'",
        "social": "'I am a working adult. Non-smoker. Social drinker.'"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted examination"
    ],
    "examFindings": {
        "General appearance": "Patient appears consistent with working diagnosis.",
        "Vital signs": "Vital signs appropriate to the acuity of presentation.",
        "Cardiovascular auscultation": "Cardiovascular exam as appropriate.",
        "Pulmonary auscultation": "Pulmonary exam as appropriate.",
        "Abdominal examination": "Abdomen as appropriate.",
        "Extremity assessment": "Extremities as appropriate.",
        "Skin examination": "Skin as appropriate.",
        "Targeted examination": "Targeted findings consistent with working diagnosis."
    },
    "ddxTargets": [
        "working diagnosis (correct)",
        "Alternative diagnosis 1",
        "Alternative diagnosis 2",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for working diagnosis.",
        "prematureClosure": "Complete your workup even after forming a hypothesis.",
        "availabilityBias": "Apply systematic reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Alejandro Gutierrez \u2014 what are your top 3 diagnoses from chart review?",
        "phase5": "How has your differential changed after history and exam?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
