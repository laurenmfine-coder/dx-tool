/* emr-data/sbo-strangulation.js — Auto-generated EMR case data for SBO with Strangulation */
window.EMR_DATA = {
  "patient": {
    "name": "Richard Kowalski",
  "patientHPI": "I've been having terrible cramping belly pain that comes in waves, and I haven't been able to have a bowel movement for two days now. My stomach feels bloated and tight, and I keep throwing up everything I try to eat or drink.",
    "dob": "07/13/1948",
    "age": "78",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-478097",
    "language": "English",
    "race": "Multiracial",
    "phone": "(803) 555-4033",
    "email": "richard.kowalski@email.com",
    "address": "8033 Peachtree Rd, Baltimore, MD 21206",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Maria Kowalski",
      "phone": "(412) 555-4545",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Colicky abdominal pain, distension, vomiting, no BM for 2 days",
    "diagnosis": "SBO with Strangulation"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Prior abdominal surgery (appendectomy, cholecystectomy)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Incisional hernia (known)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Lisinopril",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    },
    {
      "id": "med-2",
      "name": "Aspirin",
      "dose": "81mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
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
      "hr": "118",
      "rr": "24",
      "temp": "38.4°C",
      "spo2": "96%",
      "pain": "10/10",
      "bmi": "35",
      "weight": "93 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Colicky abdominal pain, distension, vomiting, no BM for 2 days",
      "hpi": "Richard Kowalski is a 78-year-old male presenting with colicky abdominal pain, distension, vomiting, no bm for 2 days. Past medical history includes Prior abdominal surgery (appendectomy, cholecystectomy), Incisional hernia (known). See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "SBO with Strangulation — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-913306",
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
              "value": "18.4",
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
              "value": "18",
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
              "test": "Lactate",
              "value": "4.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
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
      "study": "CT Abdomen/Pelvis with Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-853040",
      "clinical": "Colicky abdominal pain, distension, vomiting, no BM for 2 days",
      "technique": "Standard protocol",
      "findings": "Dilated small bowel loops up to 4.5cm with decompressed distal bowel (transition point in RLQ). Closed-loop configuration with mesenteric swirl sign. Decreased bowel wall enhancement concerning for ischemia. Moderate free fluid.",
      "impression": "Small bowel obstruction with closed-loop configuration and signs of strangulation. Emergent surgical consultation.",
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
      "Surgical history",
      "Appendectomy age 25, cholecystectomy age 52"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Richard Kowalski is alert and cooperative, clearly concerned but provides a clear history.",
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
        "medications": "'I take Lisinopril; Aspirin.'",
        "allergies": "'My allergies: NKDA.'",
        "family": "Non-contributory",
        "social": "Surgical history: Appendectomy age 25, cholecystectomy age 52"
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
        "phase2": "Before interviewing Richard Kowalski: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['sbo-strangulation'] = {
  id: 'sbo-strangulation', name: 'Richard Kowalski',
  chiefComplaint: 'Small Bowel Obstruction with Strangulation — Emergent Surgery',
  diagnosis: 'Small Bowel Obstruction with Strangulation — Emergent Surgery',
  orders: {
    correct: [{ id: 'emergency-or', name: 'Emergent surgery — strangulation means ischemic bowel', rationale: 'Strangulated SBO (closed-loop obstruction + vascular compromise): emergent surgery is the ONLY treatment. Signs of strangulation: fever, peritoneal signs, free air, pneumatosis intestinalis, portal venous gas on CT, lactate elevation, WBC >15k, pain out of proportion to exam. Bowel ischemia is irreversible — every hour of delay = more bowel loss.' },{ id: 'ngt-ivf-sbo', name: 'NGT decompression + IV fluids while preparing OR', rationale: 'Immediate gastric decompression (NGT) reduces aspiration risk and abdominal distension. Aggressive IV fluid resuscitation for third-spacing and sepsis from translocation. Broad-spectrum antibiotics (piperacillin-tazobactam) for peritonitis. These are concurrent with OR preparation, not alternatives to surgery.' }],
    incorrect: [{ id: 'conservative-management', name: 'NGT + NPO — trial of non-operative management', rationale: 'Non-operative management is ONLY appropriate for SIMPLE (non-strangulated) partial SBO. Strangulation signs (fever, peritonitis, ischemia on CT, lactate elevation) = EMERGENT SURGERY. No trial of conservative management when strangulation is suspected. Death from bowel gangrene/perforation results from delay.' },{ id: 'water-soluble-contrast', name: 'Gastrografin (water-soluble contrast) — diagnostic and therapeutic for SBO', rationale: 'Gastrografin is therapeutic only for SIMPLE (non-strangulated, adhesive, partial) SBO — works by osmotically drawing fluid into the bowel lumen, facilitating resolution. Do NOT give contrast in strangulated SBO — the bowel cannot handle the osmotic load and perforation risk is increased. CT showing strangulation → OR, not more contrast studies.' }]
  },
  teachingPoints: {
    keyLearning: ['SBO causes: adhesions (60-70%), hernias (10-15%), neoplasms (10-15%), intussusception, volvulus, Meckel diverticulum, IBD. History of abdominal surgery = adhesions until proven otherwise.','Strangulation signs (any = emergent surgery): fever, peritoneal signs (rebound, guarding), WBC >15k, lactate elevation, free air (perforated), portal venous gas (advanced ischemia), pneumatosis intestinalis, mesenteric edema on CT, closed-loop configuration.','Non-operative SBO management (simple, partial): NGT decompression + NPO + IV fluids + serial exams. If no improvement at 24-48h or any deterioration → surgery. Gastrografin water-soluble contrast: therapeutic (osmotic effect) AND diagnostic (if contrast reaches colon within 4-6h = high chance of resolution).'],
    boardPearls: ['Closed-loop SBO: both proximal and distal points of obstruction (e.g., internal hernia, volvulus) = highest strangulation risk. CT shows C-shaped or U-shaped dilated loop, whirl sign (mesenteric twisting), beak sign.','Adhesion prevention: no effective pharmacologic prevention. Hyaluronate/carboxymethylcellulose (Seprafilm) placed during surgery reduces adhesion formation. Laparoscopic approach reduces de novo adhesion formation.','Richter hernia: lateral wall of bowel herniated (not full circumference) — may not cause complete obstruction but strangulation of the herniated wall can occur silently. Often missed until perforation.']
  },
  "guided": {
    "supported": true,
    "patientPersona": "Richard Kowalski is cooperative and provides a clear history. He is appropriately concerned about their symptoms.",
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
        "medications": "'I take Lisinopril; Aspirin.'",
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
        "phase2": "Before interviewing Richard Kowalski \u2014 what are your top 3 diagnoses from chart review?",
        "phase5": "How has your differential changed after history and exam?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
