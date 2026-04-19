
window.EMR_DATA = {
  "patient": {
    "name": "Tyler Reeves",
    "dob": "09/14/2001",
    "age": 23,
    "sex": "Male",
    "mrn": "RDX-2025-58214",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL \u2014 PPO",
    "pcp": "Dr. Samantha Greene, MD",
    "pharmacy": "CVS Pharmacy \u2014 4890 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "3211 College Ave, Fort Lauderdale, FL 33314",
    "phone": "(954) 555-2184",
    "email": "t.reeves01@email.com",
    "emergencyContact": {
      "name": "Karen Reeves (Mother)",
      "phone": "(954) 555-2190"
    }
  },
  "problems": [
    {
      "problem": "Marfanoid Habitus",
      "icd": "Q87.40",
      "onset": "2015",
      "status": "Active",
      "notes": "Evaluated by genetics \u2014 no formal Marfan syndrome diagnosis; tall, thin body habitus with mild pectus excavatum"
    },
    {
      "problem": "Nicotine Vaping Use",
      "icd": "F17.290",
      "onset": "2019",
      "status": "Active",
      "notes": "Daily vaping since age 18"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2020",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Sertraline 50mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Greene",
      "start": "09/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Albuterol 90mcg MDI PRN",
      "sig": "Inhale 2 puffs by mouth as needed for shortness of breath",
      "prescriber": "Dr. Greene",
      "start": "03/2024",
      "refills": 2,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "08/12/2024",
      "bp": "118/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "154 lbs",
      "ht": "6'3\"",
      "bmi": 19.2,
      "setting": "PCP Office"
    },
    {
      "date": "02/20/2024",
      "bp": "112/68",
      "hr": 72,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "152 lbs",
      "ht": "6'3\"",
      "bmi": 19.0,
      "setting": "PCP Office"
    },
    {
      "date": "09/05/2023",
      "bp": "110/66",
      "hr": 66,
      "rr": 12,
      "temp": "98.2\u00b0F",
      "spo2": "100%",
      "wt": "150 lbs",
      "ht": "6'3\"",
      "bmi": 18.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Samantha Greene, MD",
      "cc": "Anxiety follow-up, vaping cessation counseling",
      "hpi": "Mr. Reeves presents for anxiety follow-up. Reports sertraline is helpful, sleeping better. Continues daily vaping (nicotine 5%). Interested in quitting but has not set a quit date. Occasional mild chest tightness attributed to anxiety. No dyspnea, palpitations, or syncope.",
      "exam": "Tall, thin male in no distress. BMI 19.2. Mild pectus excavatum. Lungs: CTA bilaterally. CV: RRR, no murmurs. No Marfan stigmata beyond habitus (no lens subluxation, normal arm span).",
      "assessment": "1. GAD \u2014 well controlled on sertraline\n2. Nicotine vaping use \u2014 ongoing\n3. Marfanoid habitus \u2014 stable, genetics cleared for Marfan syndrome",
      "plan": "1. Continue sertraline 50mg daily\n2. Vaping cessation counseling \u2014 motivational interviewing, offered NRT\n3. Return in 6 months or PRN"
    },
    {
      "id": "V002",
      "date": "03/10/2024",
      "type": "Urgent Care",
      "provider": "Dr. Lisa Chen, MD",
      "cc": "Chest tightness and mild dyspnea",
      "hpi": "23-year-old male presents with 2 days of intermittent chest tightness, worse with deep breathing. No fever, cough, or trauma. Uses nicotine vape daily. History of anxiety. States episodes last 10-15 minutes and resolve with rest.",
      "exam": "Appears anxious but in no respiratory distress. RR 16, SpO2 99%. Lungs: CTA bilaterally. CV: RRR, no murmurs. Chest wall non-tender.",
      "assessment": "1. Chest tightness \u2014 likely anxiety-related vs. vaping-associated irritation",
      "plan": "1. Reassurance and breathing exercises\n2. Albuterol MDI PRN prescribed as trial for possible bronchospasm\n3. Strongly advised to stop vaping\n4. Follow up with PCP if recurrent"
    }
  ],
  "labs": [
    {
      "date": "08/12/2024",
      "time": "10:00 AM",
      "orderedBy": "Dr. Greene",
      "collected": "08/12/2024 10:15 AM",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-058214",
      "status": "Final",
      "specimenType": "Serum/Plasma",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {"test": "Glucose", "value": "92", "unit": "mg/dL", "range": "70-100", "flag": ""},
            {"test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": ""},
            {"test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.7-1.3", "flag": ""},
            {"test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": ""},
            {"test": "Potassium", "value": "4.1", "unit": "mEq/L", "range": "3.5-5.0", "flag": ""},
            {"test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": ""},
            {"test": "CO2", "value": "25", "unit": "mEq/L", "range": "21-31", "flag": ""},
            {"test": "Calcium", "value": "9.6", "unit": "mg/dL", "range": "8.5-10.5", "flag": ""}
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "COVID-19 (Pfizer-BioNTech, Updated 2024-2025)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "GW9283",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "09/05/2023",
      "site": "Right deltoid IM",
      "lot": "AC22B401AB",
      "mfr": "GSK"
    },
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/01/2024",
      "site": "Right deltoid IM",
      "lot": "FL8374",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9, Dose 3 of 3)",
      "date": "04/15/2018",
      "site": "Left deltoid IM",
      "lot": "G9V034",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Father: Marfan syndrome suspected but never diagnosed, tall (6'5\"), mild mitral valve prolapse, age 52, alive",
    "Mother: Anxiety disorder, migraines, age 50, alive",
    "Brother: Healthy, age 20",
    "No family history of sudden cardiac death, aortic dissection, or DVT/PE"
  ],
  "socialHistory": [
    ["Occupation", "College student (senior) at State University, studying exercise science"],
    ["Marital", "Single, lives with roommate in off-campus apartment"],
    ["Tobacco", "No cigarette smoking. Daily nicotine vaping (5% pods) since age 18. Approximately 1 pod per day."],
    ["Alcohol", "Social \u2014 weekends, 4-6 drinks"],
    ["Drugs", "Occasional marijuana (edibles, 1-2x/month)"],
    ["Exercise", "Active \u2014 plays intramural basketball, lifts weights 3x/week"],
    ["Housing", "Second-floor apartment, Fort Lauderdale"],
    ["Safety", "Wears seatbelt. No firearms."],
    ["Advance Directive", "None on file. Mother listed as emergency contact."]
  ],
  "meta": {
    "caseId": "pneumothorax",
    "diagnosis": "Primary Spontaneous Pneumothorax",
    "acuity": 2,
    "presentation": "Shortness of Breath",
    "category": "pulmonary"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Tyler Reeves is visibly uncomfortable and anxious, cooperative but pauses due to discomfort.",
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
        "onset": "'Suddenly \u2014 over the past day or two.'",
        "character": "'The shortness of breath has been significant and affecting my ability to function.'",
        "location": "'The main problem is in the expected area for my condition.'",
        "severity": "'Eight or nine out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
        "associated": "'Some associated symptoms consistent with Primary Spontaneous Pneumothorax.'",
        "denies": "'No fever, chills, or unexplained weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Sertraline 50mg daily; Albuterol 90mcg MDI PRN.'",
        "allergies": "'My allergies: NKDA.'",
        "family": "Father: Marfan syndrome suspected but never diagnosed, tall (6'5\"), mild mitral valve prolapse, age 52, alive  Mother: Anxiety disorder, migraines, age 50, alive  Brother: Healthy, age 20",
        "social": "Occupation: College student (senior) at State University, studying exercise science  Marital: Single, lives with roommate in off-campus apartment  Tobacco: No cigarette smoking. Daily nicotine vaping (5% pods) since age 18. Approximately 1 pod per day.  Alcohol: Social \u2014 weekends, 4-6 drinks  Drugs: Occasional marijuana (edibles, 1-2x/month)"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs and oximetry",
        "Pulmonary auscultation",
        "Percussion",
        "Accessory muscles",
        "Cardiovascular auscultation",
        "DVT check",
        "Trachea"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with Primary Spontaneous Pneumothorax.",
        "Vital signs and oximetry": "Finding consistent with Primary Spontaneous Pneumothorax.",
        "Pulmonary auscultation": "Finding consistent with Primary Spontaneous Pneumothorax.",
        "Percussion": "Finding consistent with Primary Spontaneous Pneumothorax.",
        "Accessory muscles": "Finding consistent with Primary Spontaneous Pneumothorax.",
        "Cardiovascular auscultation": "Finding consistent with Primary Spontaneous Pneumothorax.",
        "DVT check": "Finding consistent with Primary Spontaneous Pneumothorax.",
        "Trachea": "Finding consistent with Primary Spontaneous Pneumothorax."
    },
    "ddxTargets": [
        "Primary Spontaneous Pneumothorax (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for Primary Spontaneous Pneumothorax.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Tyler Reeves: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is Primary Spontaneous Pneumothorax. How did your reasoning evolve?"
    }
}
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['pneumothorax'] = {
  id: 'pneumothorax', name: 'Tyler Reeves',
  chiefComplaint: 'Spontaneous Pneumothorax — Primary vs Secondary Management',
  diagnosis: 'Spontaneous Pneumothorax — Primary vs Secondary Management',
  orders: {
    correct: [{ id: 'aspiration-or-tube', name: 'Needle aspiration (primary PTX, small) OR chest tube (secondary or large PTX)', rationale: 'Primary spontaneous PTX (no lung disease, <3cm apex-to-cupula distance): simple aspiration (16g angiocatheter, mid-clavicular 2nd ICS) is equivalent to chest tube. Success rate ~60-80%. Secondary PTX (COPD, CF, asthma): ALWAYS chest tube (less likely to resolve with aspiration, more dangerous). Large PTX (>3cm) or tension: chest tube.' },{ id: 'recurrence-prevention', name: 'VATS pleurodesis — prevent recurrence after second ipsilateral PTX', rationale: 'First PTX: observation (small, asymptomatic) or aspiration/tube. Second ipsilateral PTX: VATS pleurodesis (gold standard). High-risk occupations after first PTX (pilots, divers): VATS pleurodesis after first episode. Chemical pleurodesis (bleomycin, doxycycline) alternative if VATS not available.' }],
    incorrect: [{ id: 'high-flow-o2', name: 'High-flow oxygen — for shortness of breath', rationale: 'While high-flow O2 is given for hypoxemia, it does NOT treat the pneumothorax itself. However: supplemental O2 increases reabsorption rate of the pneumothorax by ~4-fold (nitrogen washout). Small, asymptomatic primary PTX can be observed + supplemental O2 in hospitalized patients.' },{ id: 'bilateral-tubes', name: 'Bilateral chest tubes — may have bilateral PTX', rationale: 'Treat clinical findings. Bilateral spontaneous PTX is very uncommon (5-7% of cases). Standard approach: treat the symptomatic/large side first. Bilateral tubes only if bilateral clinical or radiographic evidence of significant PTX.' }]
  },
  teachingPoints: {
    keyLearning: ['Primary vs secondary PTX: primary = young, tall, thin male, no underlying lung disease, apical blebs. Secondary = underlying lung disease (COPD most common — bullae rupture; CF, TB, PCP, Marfan). Secondary PTX is more dangerous — patients have less reserve. Always treat with chest tube.','Tension PTX: air enters pleural space but cannot exit → progressive pressure → contralateral mediastinal shift → impaired venous return → obstructive shock → cardiac arrest. Clinical diagnosis (no imaging). Needle decompression immediately.','Pneumothorax size: BTS (British): >2cm rim from lung edge to chest wall. ACCP: >3cm apex to cupula on upright CXR. Size determines management approach.'],
    boardPearls: ['Catamenial PTX: occurs with menses (within 72h of onset), usually right-sided, associated with thoracic endometriosis. Recurrent PTX in women of childbearing age → workup for thoracic endometriosis. Treatment: hormonal therapy + VATS pleurodesis.','Iatrogenic PTX: central line placement (subclavian > internal jugular > femoral), thoracentesis, biopsy, positive pressure ventilation. All patients post-subclavian central line: CXR to confirm no PTX before use.','Reexpansion pulmonary edema: rapid reexpansion of a chronically collapsed lung (>24-72h) can cause ipsilateral pulmonary edema from capillary disruption. Slow, controlled tube drainage for large, chronic PTX.']
  },
  "guided": {
    "supported": true,
    "patientPersona": "Tyler Reeves is cooperative and provides a clear history. He is appropriately concerned about their symptoms.",
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
        "character": "'It feels like primary spontaneous pneumothorax \u2014 fairly significant.'",
        "location": "'The problem is primarily in the affected area.'",
        "severity": "'About a seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat.'",
        "associated": "'I have some associated symptoms consistent with my condition.'",
        "denies": "'No fever, chills, or weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Sertraline 50mg daily; Albuterol 90mcg MDI PRN.'",
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
        "General appearance": "Patient appears consistent with Primary Spontaneous Pneumothorax.",
        "Vital signs": "Vital signs appropriate to the acuity of presentation.",
        "Cardiovascular auscultation": "Cardiovascular exam as appropriate.",
        "Pulmonary auscultation": "Pulmonary exam as appropriate.",
        "Abdominal examination": "Abdomen as appropriate.",
        "Extremity assessment": "Extremities as appropriate.",
        "Skin examination": "Skin as appropriate.",
        "Targeted examination": "Targeted findings consistent with Primary Spontaneous Pneumothorax."
    },
    "ddxTargets": [
        "Primary Spontaneous Pneumothorax (correct)",
        "Alternative diagnosis 1",
        "Alternative diagnosis 2",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for Primary Spontaneous Pneumothorax.",
        "prematureClosure": "Complete your workup even after forming a hypothesis.",
        "availabilityBias": "Apply systematic reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Tyler Reeves \u2014 what are your top 3 diagnoses from chart review?",
        "phase5": "How has your differential changed after history and exam?",
        "finalDebrief": "The diagnosis is Primary Spontaneous Pneumothorax. How did your reasoning evolve?"
    }
}
};
