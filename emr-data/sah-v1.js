/* emr-data/sah-v1.js — Auto-generated EMR case data for Subarachnoid Hemorrhage */
window.EMR_DATA = {
  "patient": {
    "name": "Jennifer Wu",
  "patientHPI": "I was just sitting at my desk when suddenly I got hit with the most excruciating headache of my entire life - it felt like someone struck me with a baseball bat. It came on instantly and I've never experienced anything like this before, I'm terrified.",
    "dob": "09/16/1984",
    "age": "42",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-510850",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(502) 555-2657",
    "email": "jennifer.wu@email.com",
    "address": "8726 Clover St, Albuquerque, NM 87103",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Michelle Foster, MD",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Joseph Wu",
      "phone": "(617) 555-9843",
      "relationship": "Parent"
    },
    "chiefComplaint": "Worst headache of my life — sudden onset thunderclap",
    "diagnosis": "Subarachnoid Hemorrhage"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Smoker",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Family history of aneurysms",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Lisinopril",
      "dose": "20mg",
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
      "bp": "192/108",
      "hr": "68",
      "rr": "16",
      "temp": "37.2°C",
      "spo2": "98%",
      "pain": "10/10",
      "bmi": "37",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worst headache of my life — sudden onset thunderclap",
      "hpi": "Jennifer Wu is a 42-year-old female presenting with worst headache of my life — sudden onset thunderclap. Past medical history includes Hypertension, Smoker, Family history of aneurysms. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Subarachnoid Hemorrhage — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-230499",
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
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
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
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
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
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
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
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-805265",
      "clinical": "Worst headache of my life — sudden onset thunderclap",
      "technique": "Standard protocol",
      "findings": "Diffuse subarachnoid hemorrhage in the basal cisterns, Sylvian fissures, and interhemispheric fissure. Modified Fisher Grade 3. No hydrocephalus.",
      "impression": "Acute subarachnoid hemorrhage. CTA recommended to identify aneurysm.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/01/2026",
      "study": "CTA Head",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-175224",
      "clinical": "Worst headache of my life — sudden onset thunderclap",
      "technique": "Standard protocol",
      "findings": "7mm saccular aneurysm at the anterior communicating artery bifurcation. No other aneurysms.",
      "impression": "AComm aneurysm — likely source of SAH. Neurosurgery consultation.",
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
    "Mother: ruptured aneurysm at age 48"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 25 pack-years"
    ],
    [
      "Cocaine",
      "Denies"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Jennifer Wu is alert and cooperative, clearly concerned but provides a clear history.",
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
        "medications": "'I take Lisinopril.'",
        "allergies": "'My allergies: NKDA.'",
        "family": "Mother: ruptured aneurysm at age 48",
        "social": "Tobacco: Current, 25 pack-years  Cocaine: Denies"
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
        "phase2": "Before interviewing Jennifer Wu: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['sah-v1'] = {
  id: 'sah-v1', name: 'Jennifer Wu',
  chiefComplaint: 'Subarachnoid Hemorrhage — Thunderclap Headache and Nimodipine',
  diagnosis: 'Subarachnoid Hemorrhage — Thunderclap Headache and Nimodipine',
  orders: {
    correct: [{ id: 'cta-head', name: 'CT head + LP if CT negative — thunderclap headache workup', rationale: 'CT head (non-contrast): 98% sensitive for SAH if done within 6 hours of onset (100% if high-quality scanner). LP if CT negative: xanthochromia (yellow CSF from RBC breakdown) appears 2-6h after onset, persists 2 weeks. CT angiography for aneurysm identification.' },{ id: 'nimodipine', name: 'Nimodipine 60mg PO q4h × 21 days — reduces vasospasm and improves outcomes', rationale: 'Nimodipine is a calcium channel blocker that specifically reduces cerebral vasospasm and improves neurological outcomes after SAH (BRITISH ANEURYSM NIMODIPINE TRIAL). Give PO (NOT IV nimodipine — different formulation, causes hypotension). Start immediately and continue for 21 days regardless of blood pressure.' }],
    incorrect: [{ id: 'tpa-sah', name: 'tPA — treat thunderclap headache as ischemic stroke', rationale: 'CONTRAINDICATED. SAH is a hemorrhagic event. tPA would cause catastrophic expansion of the hemorrhage. Thunderclap headache with SAH on CT requires vascular imaging (CTA) to identify the aneurysm, THEN neurosurgical or interventional radiology treatment (coiling or clipping).' },{ id: 'no-lp', name: 'No LP needed — CT shows no blood, patient is fine', rationale: 'CT sensitivity for SAH decreases rapidly after 6 hours: ~98% at 6h, ~93% at 24h, ~80% at 72h. In a patient with thunderclap headache and negative CT, LP is MANDATORY to check for xanthochromia. A negative CT alone does not exclude SAH with sufficient certainty.' }]
  },
  teachingPoints: {
    keyLearning: ['Thunderclap headache: maximal intensity at onset ("worst headache of my life"). SAH is the diagnosis-not-to-miss — 30-40% mortality. Other causes: cerebral venous thrombosis, hypertensive emergency, RCVS (reversible cerebral vasoconstriction syndrome), meningitis, pituitary apoplexy.','Ottawa SAH rule (for alert patients with peak headache): CT + LP if ANY of: age ≥40, neck stiffness/pain, witnessed loss of consciousness, onset during exertion, or thunderclap description. High sensitivity approach.','Hunt and Hess grade: I (mild headache, alert) → II (severe headache, CN palsy) → III (confused, focal deficit) → IV (stuporous, severe deficit) → V (comatose, posturing). Higher grade = worse prognosis.'],
    boardPearls: ['Aneurysm treatment: endovascular coiling vs surgical clipping. ISAT trial: coiling superior for suitable aneurysms (lower mortality, disability). Clipping preferred for MCA aneurysms, young patients with long life expectancy, or incomplete coiling.','SAH complications: vasospasm (peak 5-14 days, occurs in 70%, symptomatic in 30%), rebleeding (highest risk in first 24h, 20-30% mortality), hydrocephalus (acute 20%, chronic 10-20%), SIADH/cerebral salt wasting, neurogenic pulmonary edema, cardiac dysfunction.','Nimodipine mechanism: orally bioavailable dihydropyridine CCB with preferential cerebral vessel selectivity. Reduces symptomatic vasospasm, improves neurological outcomes. DOES NOT reduce radiographic vasospasm — improves outcomes through other mechanisms (neuroprotection, microcirculation).']
  },
  "guided": {
    "supported": true,
    "patientPersona": "Jennifer Wu is cooperative and provides a clear history. He is appropriately concerned about their symptoms.",
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
        "medications": "'I take Lisinopril.'",
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
        "phase2": "Before interviewing Jennifer Wu \u2014 what are your top 3 diagnoses from chart review?",
        "phase5": "How has your differential changed after history and exam?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
