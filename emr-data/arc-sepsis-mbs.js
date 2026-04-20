
window.EMR_DATA = {
  "patient": {
    "name": "Kevin Osei",
    "dob": "10/08/1976",
    "age": 49,
    "sex": "Male",
    "mrn": "RDX-2025-37070",
    "pronouns": "He/Him",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Gerald Park",
    "race": "Multiracial",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-9320",
    "email": "kevinose@email.com",
    "emergencyContact": {
      "name": "David Kim (Family)",
      "phone": "(954) 555-1346"
    }
  },
  "problems": [
    {
      "problem": "Urosepsis \u2014 E. coli bacteremia",
      "icd": "A41.51",
      "onset": "2024",
      "status": "Active",
      "notes": "Gerald Park, E. coli pan-sensitive. MBS focus: molecular mechanism from LPS to SIRS to organ failure."
    },
    {
      "problem": "Gram-negative sepsis pathophysiology \u2014 LPS-TLR4 cascade",
      "icd": "A41.51",
      "onset": "2024",
      "status": "Active",
      "notes": "Key MBS teaching: LPS \u2192 TLR4 \u2192 NF-\u03baB \u2192 cytokines (IL-1, IL-6, TNF-\u03b1) \u2192 endothelial dysfunction \u2192 DIC"
    },
    {
      "problem": "Multi-organ dysfunction \u2014 sepsis-induced",
      "icd": "R65.20",
      "onset": "2024",
      "status": "Active",
      "notes": "AKI + hemodynamic instability + coagulopathy \u2014 all explainable by molecular cascade"
    }
  ],
  "medications": [
    {
      "name": "Piperacillin-tazobactam 4.5g IV q8h",
      "sig": "IV extended infusion over 4h \u2014 maximize time above MIC for E. coli",
      "prescriber": "ID",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Norepinephrine infusion \u2014 vasopressor for distributive shock",
      "sig": "Alpha-1 agonist \u2014 counteracts vasodilation from eNOS activation",
      "prescriber": "ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Dexamethasone 6mg IV daily x10 days",
      "sig": "Corticosteroid \u2014 inhibits NF-\u03baB, reduces cytokine storm",
      "prescriber": "ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "No known drug allergies",
      "type": "Drug",
      "reaction": "None",
      "severity": "N/A",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/18/2024",
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "99 lbs",
      "ht": "5'4\"",
      "bmi": 17.0,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "99 lbs",
      "ht": "5'4\"",
      "bmi": 17.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "99 lbs",
      "ht": "5'4\"",
      "bmi": 17.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Gerald Park",
      "assessment": "Working diagnosis: Gerald Park",
      "plan": "Referral to mbs. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Sepsis Molecular Markers",
      "results": [
        {
          "test": "Lactate",
          "value": "4.2",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Procalcitonin",
          "value": "42",
          "unit": "ng/mL",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "IL-6 (research)",
          "value": "Elevated \u2014 not quantified clinically",
          "unit": "",
          "ref": "",
          "flag": "H"
        },
        {
          "test": "Fibrinogen",
          "value": "680",
          "unit": "mg/dL",
          "ref": "200-400",
          "flag": "H"
        },
        {
          "test": "D-dimer",
          "value": "8,400",
          "unit": "ng/mL",
          "ref": "<500",
          "flag": "H"
        },
        {
          "test": "PT",
          "value": "18",
          "unit": "sec",
          "ref": "11-13.5",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "22.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Bands",
          "value": "28",
          "unit": "%",
          "ref": "0-10",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V8250K",
      "site": "Left deltoid"
    }
  ],
  "familyHistory": [
    {
      "relation": "Father",
      "condition": "Hypertension",
      "age": "58"
    },
    {
      "relation": "Mother",
      "condition": "Type 2 diabetes",
      "age": "55"
    }
  ],
  "socialHistory": {
    "smoking": "Former smoker, quit 2020",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "arc-sepsis-mbs",
    "diagnosis": "E. coli Urosepsis \u2014 Pathophysiology: LPS-TLR4 Cascade to Cytokine Storm and Organ Failure",
    "acuity": 2,
    "presentation": "Gerald Park",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with gerald park. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Describe the biochemical pathway involved.",
      "What enzyme or receptor is implicated?",
      "How does this molecular change produce the clinical findings?",
      "What would you expect to find on laboratory testing?",
      "How does treatment address the underlying mechanism?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Biochemical pathway tracing",
      "Enzyme kinetics review",
      "Receptor-ligand analysis",
      "Molecular mechanism correlation",
      "Laboratory value interpretation",
      "Genetic inheritance pattern analysis"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "E. coli urosepsis \u2014 LPS-TLR4 molecular cascade (correct)",
      "Gram-positive sepsis \u2014 no LPS, different pattern receptor (TLR2/NOD)",
      "Viral sepsis \u2014 no PAMPs, different innate immune activation",
      "Fungal sepsis \u2014 beta-glucan receptor, different PRR",
      "Sterile SIRS \u2014 no PAMPs, DAMP-mediated only",
      "DIC as primary \u2014 DIC is consequence of sepsis, not primary diagnosis"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a mbs case with chief complaint: Gerald Park. What are the most important questions for a mbs to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a mbs perspective, what is the most critical finding that narrows this differential? What is the mbs-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the mbs's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: E. coli urosepsis \u2014 MBS focus on molecular mechanism. Key MBS learning: (1) LPS (lipopolysaccharide) \u2192 Toll-Like Receptor 4 (TLR4) on macrophages/endothelium \u2192 MyD88 adaptor \u2192 NF-\u03baB activation \u2192 transcription of pro-inflammatory cytokines: TNF-\u03b1 (early, amplifier), IL-1\u03b2 (fever, endothelial activation), IL-6 (acute phase proteins, fever). This is the 'cytokine storm.' (2) Endothelial activation: TNF-\u03b1 + IL-1\u03b2 \u2192 upregulate ICAM-1, VCAM-1 \u2192 neutrophil adhesion and transmigration \u2192 tissue inflammation. Also activate eNOS \u2192 NO production \u2192 vasodilation \u2192 distributive shock (why norepinephrine works \u2014 alpha-1 agonist restores vasoconstriction). (3) Coagulopathy mechanism: LPS \u2192 tissue factor expression on endothelium + monocytes \u2192 extrinsic clotting cascade activation \u2192 fibrin formation \u2192 microthrombi \u2192 organ ischemia. Simultaneously, antithrombin and protein C depleted \u2192 DIC. (4) Lactate: reflects anaerobic metabolism from tissue hypoperfusion. Lactate 4.2 = cellular oxygen debt. Lactate clearance is the treatment response metric \u2014 target >10% reduction per hour with resuscitation. (5) Procalcitonin: produced by non-thyroidal cells (liver, lung, kidney) in response to bacterial infection (not viral). Rises within 6-12h, peaks 24h. Use for antibiotic de-escalation: procalcitonin <0.25 \u2192 consider stopping antibiotics at day 5-7."
    }
  }
};
