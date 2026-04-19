/* emr-data/serotonin-syndrome.js — Auto-generated EMR case data for Serotonin Syndrome */
window.EMR_DATA = {
  "patient": {
    "name": "Andrew Chen",
  "patientHPI": "I started this new medication for my depression about a week ago, and now I'm feeling really jittery and sweaty with muscle twitches, and I can't seem to sit still.",
    "dob": "08/10/1986",
    "age": "40",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-776119",
    "language": "English",
    "race": "Asian",
    "phone": "(720) 555-8055",
    "email": "andrew.chen@email.com",
    "address": "6329 Magnolia Blvd, Phoenix, AZ 85013",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Mei Chen",
      "phone": "(404) 555-3116",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Agitation, diaphoresis, tremor, clonus — recently started new antidepressant",
    "diagnosis": "Serotonin Syndrome"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Depression",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Started MAOI (phenelzine) 1 week ago while still on sertraline",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Sertraline",
      "dose": "200mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    },
    {
      "id": "med-2",
      "name": "Phenelzine",
      "dose": "15mg",
      "route": "PO",
      "frequency": "TID (started 7 days ago)",
      "status": "Active",
      "prescriber": "Dr. Raj Patel, MD"
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
      "bp": "168/102",
      "hr": "128",
      "rr": "24",
      "temp": "39.8°C",
      "spo2": "96%",
      "pain": "5/10",
      "bmi": "25",
      "weight": "102 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Agitation, diaphoresis, tremor, clonus — recently started new antidepressant",
      "hpi": "Andrew Chen is a 40-year-old male presenting with agitation, diaphoresis, tremor, clonus — recently started new antidepressant. Past medical history includes Depression, Started MAOI (phenelzine) 1 week ago while still on sertraline. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Serotonin Syndrome — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-759360",
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
              "value": "12.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
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
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
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
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Ck",
              "value": "1800",
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
      "accession": "IMG-307093",
      "clinical": "Agitation, diaphoresis, tremor, clonus — recently started new antidepressant",
      "technique": "Standard protocol",
      "findings": "No acute intracranial abnormality.",
      "impression": "Normal.",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Medication error",
      "New psychiatrist started MAOI without washout from SSRI"
    ],
    [
      "Tobacco",
      "Never"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Andrew Chen is alert and cooperative, clearly concerned but provides a clear history.",
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
        "medications": "'I take Sertraline; Phenelzine.'",
        "allergies": "'My allergies: NKDA.'",
        "family": "Non-contributory",
        "social": "Medication error: New psychiatrist started MAOI without washout from SSRI  Tobacco: Never"
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
        "phase2": "Before interviewing Andrew Chen: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['serotonin-syndrome'] = {
  id: 'serotonin-syndrome', name: 'Andrew Chen',
  chiefComplaint: 'Serotonin Syndrome — Hunter Criteria and Cyproheptadine',
  diagnosis: 'Serotonin Syndrome — Hunter Criteria and Cyproheptadine',
  orders: {
    correct: [{ id: 'cyproheptadine', name: 'Cyproheptadine 12mg PO/NGT — serotonin antagonist, first-line specific treatment', rationale: 'Cyproheptadine is a histamine H1/serotonin 5-HT2A antagonist. It is the only specific antidote for serotonin syndrome. Give 12mg immediately, then 2mg every 2h until symptoms resolve (max 32mg/24h). Also supportive: benzodiazepines for agitation, cooling for hyperthermia, IV fluids.' },{ id: 'discontinue-serotonergic', name: 'Identify and discontinue ALL serotonergic agents immediately', rationale: 'Serotonin syndrome requires stopping all causative agents: SSRIs, SNRIs, MAOIs, TCAs, tramadol, fentanyl (weak serotonergic), linezolid (MAOI activity), methylene blue (MAOI activity), triptans, dextromethorphan, ondansetron (at high doses), St. John Wort, MDMA.' }],
    incorrect: [{ id: 'dopamine-blockers', name: 'Haloperidol — antipsychotic for agitation in NMS/serotonin syndrome', rationale: 'Do NOT give typical antipsychotics (haloperidol) for serotonin syndrome — they worsen hyperthermia and may cause NMS on top of SS. SS is treated with serotonin antagonists and benzos. Distinguish SS from NMS: SS = fast onset (hours), hyperreflexia, clonus. NMS = slow onset (days), rigidity, hyporeflexia.' },{ id: 'fluids-only', name: 'IV fluids and monitoring — will resolve spontaneously', rationale: 'Mild serotonin syndrome may resolve with drug discontinuation and supportive care, but moderate-severe SS requires cyproheptadine. Life-threatening SS (hyperthermia >41.1°C, severe rigidity, cardiovascular instability): intubation + paralysis (rocuronium — avoid succinylcholine due to rhabdomyolysis/hyperkalemia risk).' }]
  },
  teachingPoints: {
    keyLearning: ['Hunter Criteria for serotonin syndrome (high specificity): patient has taken serotonergic agent AND has ANY of: spontaneous clonus, inducible clonus + agitation or diaphoresis, ocular clonus + agitation or diaphoresis, tremor + hyperreflexia, or hypertonia + temperature >38°C + ocular or inducible clonus.','Serotonin syndrome vs NMS: SS onset hours, neuromuscular hyperactivity (clonus, hyperreflexia, mydriasis), hyperthermia. NMS onset days-weeks, muscle rigidity (lead-pipe), hyporeflexia, bradykinesia, encephalopathy, CK very elevated. Both can cause hyperthermia and rhabdomyolysis.','Linezolid and methylene blue: both have MAOI activity — do NOT combine with serotonergic drugs. Metaxalone (muscle relaxant) has weak serotonergic activity. Ondansetron at standard doses is safe (5-HT3 antagonist actually may reduce SS risk) but can trigger SS in overdose.'],
    boardPearls: ['Serotonin toxicity spectrum: mild (tremor, tachycardia, diaphoresis), moderate (agitation, hyperreflexia, hyperthermia <40°C, clonus), severe (rigidity, hyperthermia >41°C, rhabdomyolysis, renal failure, DIC).','Temperature >41°C in SS: immediately cool with ice packs, cooling blankets, IV fluids. Life-threatening — associated with seizures, rhabdomyolysis, DIC, death. Intubate and paralyze if severe rigidity.','MAOI + SSRI or any serotonergic: potentially fatal combination. Washout period: fluoxetine (long half-life Prozac) requires 5 weeks before starting MAOI. All other SSRIs: 2 weeks. MAOIs: 2 weeks before starting SSRIs.']
  },
  "guided": {
    "supported": true,
    "patientPersona": "Andrew Chen is cooperative and provides a clear history. He is appropriately concerned about their symptoms.",
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
        "medications": "'I take Sertraline; Phenelzine.'",
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
        "phase2": "Before interviewing Andrew Chen \u2014 what are your top 3 diagnoses from chart review?",
        "phase5": "How has your differential changed after history and exam?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
