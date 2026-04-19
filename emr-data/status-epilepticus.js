/* emr-data/status-epilepticus.js — Auto-generated EMR case data for Status Epilepticus */
window.EMR_DATA = {
  "patient": {
    "name": "Michael Chang",
  "patientHPI": "I don't remember what happened, but my wife says I had a seizure that went on for several minutes and I'm still feeling really confused and out of it. I know I haven't been great about taking my seizure medicine lately, which was probably stupid of me.",
    "dob": "11/22/1993",
    "age": "33",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-135247",
    "language": "English",
    "race": "White",
    "phone": "(415) 555-2341",
    "email": "michael.chang@email.com",
    "address": "8937 Daisy Ave, Kansas City, MO 64108",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Rite Aid — Palm Ave",
    "emergencyContact": {
      "name": "Emily Chang",
      "phone": "(615) 555-1317",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Witnessed generalized seizure for >5 minutes, not returning to baseline",
    "diagnosis": "Status Epilepticus"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Epilepsy (poorly controlled)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "History of non-adherence",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Levetiracetam",
      "dose": "1000mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-2",
      "name": "Lacosamide",
      "dose": "200mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Phenytoin",
      "reaction": "Stevens-Johnson Syndrome",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "168/102",
      "hr": "128",
      "rr": "8",
      "temp": "38.6°C",
      "spo2": "88%",
      "pain": "N/A",
      "bmi": "36",
      "weight": "91 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Witnessed generalized seizure for >5 minutes, not returning to baseline",
      "hpi": "Michael Chang is a 33-year-old male presenting with witnessed generalized seizure for >5 minutes, not returning to baseline. Past medical history includes Epilepsy (poorly controlled), History of non-adherence. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Status Epilepticus — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-987761",
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
              "value": "42",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "L"
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Lactate",
              "value": "6.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Ck",
              "value": "2400",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
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
      "accession": "IMG-509113",
      "clinical": "Witnessed generalized seizure for >5 minutes, not returning to baseline",
      "technique": "Standard protocol",
      "findings": "No acute hemorrhage or mass. No midline shift.",
      "impression": "No acute structural etiology for seizures.",
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
    "Brother: epilepsy"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current smoker"
    ],
    [
      "Alcohol",
      "6-pack beer daily"
    ],
    [
      "Medication adherence",
      "Stopped taking seizure meds 2 weeks ago — felt fine"
    ],
    [
      "Occupation",
      "Construction worker"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Michael Chang is alert and cooperative, clearly concerned but provides a clear history.",
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
        "medications": "'I take Levetiracetam; Lacosamide.'",
        "allergies": "'My allergies: Phenytoin.'",
        "family": "Brother: epilepsy",
        "social": "Tobacco: Current smoker  Alcohol: 6-pack beer daily  Medication adherence: Stopped taking seizure meds 2 weeks ago \u2014 felt fine  Occupation: Construction worker"
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
        "phase2": "Before interviewing Michael Chang: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['status-epilepticus'] = {
  id: 'status-epilepticus', name: 'Michael Chang',
  chiefComplaint: 'Status Epilepticus — Benzodiazepine → Levetiracetam → Intubation',
  diagnosis: 'Status Epilepticus — Benzodiazepine → Levetiracetam → Intubation',
  orders: {
    correct: [{ id: 'benzo-first', name: 'Lorazepam 0.1mg/kg IV (max 4mg) or diazepam 0.15mg/kg IV — first-line IMMEDIATELY', rationale: 'Benzodiazepines are the proven first-line treatment for status epilepticus. If no IV access: midazolam 10mg IM (RAMPART trial — superior to IV lorazepam in prehospital setting). Diazepam 20mg rectal (Diastat) for home use. Act within minutes — each minute of seizure increases brain injury.' },{ id: '2nd-line-ase', name: 'Levetiracetam 60mg/kg IV (max 4500mg) OR valproate 40mg/kg IV — if benzodiazepines fail', rationale: 'ESETT trial: levetiracetam, fosphenytoin, and valproate are equally effective as second-line agents. Levetiracetam preferred (no cardiac monitoring required, no CYP450 interactions, pregnancy safe). Fosphenytoin: load 20 PE/kg IV — requires cardiac monitoring (hypotension, arrhythmia risk).' }],
    incorrect: [{ id: 'phenytoin-oral', name: 'Oral phenytoin — titrate up over days for status epilepticus', rationale: 'Oral medications have NO role in treating active status epilepticus — therapeutic levels cannot be achieved fast enough. IV fosphenytoin (phenytoin prodrug) is the parenteral option if phenytoin is selected for second-line treatment.' },{ id: 'wait-spontaneous', name: 'Watch and wait — most seizures self-terminate within 5 minutes', rationale: 'Refractory seizures lasting >5 minutes are unlikely to stop spontaneously and MUST be treated. CONVSE status epilepticus (convulsive) lasting >30 minutes causes progressive neuronal death. Status epilepticus is defined as >5 minutes duration OR 2+ seizures without return to baseline.' }]
  },
  teachingPoints: {
    keyLearning: ['SE treatment timeline: 0-5 min (airway, IV access, glucose check) → 5 min (lorazepam/midazolam/diazepam) → 10-20 min (if not stopped, repeat benzo once) → 20-30 min (2nd-line: levetiracetam or valproate or fosphenytoin) → 30-40 min (refractory SE — intubation + midazolam or propofol infusion).','Refractory status epilepticus (RSE): fails 2 agents. Super-refractory SE: fails propofol/midazolam × 24h. RSE treatment: midazolam infusion (0.05-0.2 mg/kg/hr), propofol infusion, ketamine, pentobarbital coma. Continuous EEG monitoring required for RSE.','Identify and treat underlying cause simultaneously: hypoglycemia (always check glucose first!), electrolyte abnormalities (hyponatremia — do NOT correct too rapidly), CNS infection (empirical antibiotics if any suspicion of meningitis), stroke, toxins (isoniazid → pyridoxine 5g IV), medication non-compliance, AED toxicity.'],
    boardPearls: ['Non-convulsive status epilepticus (NCSE): altered consciousness without motor activity — diagnosed by EEG only. Must consider in any unexplained altered consciousness. Treat as convulsive SE once confirmed on EEG.','Pyridoxine (B6) for status epilepticus: give empirically if isoniazid toxicity suspected (SLUD toxidrome absent, refractory to benzos). Dose 5g IV or equal to estimated INH ingestion.','Ketamine for RSE: 0.5-1 mg/kg IV bolus → 0.3-0.5 mg/kg/hr infusion. Dissociative anesthetic with NMDA receptor antagonism — anticonvulsant mechanism different from GABA-ergic agents. May be effective when benzodiazepines/propofol/barbiturates fail. Does not increase ICP when used in mechanically ventilated patients.']
  },
  "guided": {
    "supported": true,
    "patientPersona": "Michael Chang is cooperative and provides a clear history. He is appropriately concerned about their symptoms.",
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
        "medications": "'I take Levetiracetam; Lacosamide.'",
        "allergies": "'My allergies: Phenytoin.'",
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
        "phase2": "Before interviewing Michael Chang \u2014 what are your top 3 diagnoses from chart review?",
        "phase5": "How has your differential changed after history and exam?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
