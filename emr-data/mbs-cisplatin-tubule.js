
window.EMR_DATA = {
  "patient": {
    "name": "James Park",
    "dob": "08/21/1955",
    "age": 70,
    "sex": "Male",
    "mrn": "RDX-2025-14625",
    "pronouns": "He/Him",
    "insurance": "Tricare",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Cisplatin Nephrotoxicity",
    "race": "Middle Eastern",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-9428",
    "email": "jamespar@email.com",
    "emergencyContact": {
      "name": "David Kim (Family)",
      "phone": "(954) 555-2618"
    }
  },
  "problems": [
    {
      "problem": "Cisplatin nephrotoxicity \u2014 proximal tubule injury",
      "icd": "N14.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Creatinine 2.1 from baseline 0.9 after cisplatin cycle 2. Electrolyte wasting."
    },
    {
      "problem": "Hypomagnesemia \u2014 renal tubular wasting",
      "icd": "E83.42",
      "onset": "2024",
      "status": "Active",
      "notes": "Mg 1.1 \u2014 cisplatin damages Mg reabsorption in thick ascending limb. Symptomatic tetany risk."
    },
    {
      "problem": "Cervical cancer \u2014 on cisplatin chemoradiation",
      "icd": "C53.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Cisplatin 40mg/m\u00b2 weekly concurrent with radiation. Cannot switch \u2014 cisplatin is standard of care."
    }
  ],
  "medications": [
    {
      "name": "Pre-hydration: NS 1-2L IV before cisplatin",
      "sig": "IV bolus BEFORE each cisplatin dose \u2014 forced diuresis reduces tubule concentration",
      "prescriber": "Oncology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active protocol"
    },
    {
      "name": "Amifostine 910mg/m\u00b2 IV before cisplatin (if used)",
      "sig": "IV 30 min before cisplatin \u2014 free radical scavenger, nephroprotective",
      "prescriber": "Oncology",
      "start": "11/2024",
      "refills": 0,
      "status": "Consider \u2014 evidence moderate"
    },
    {
      "name": "Magnesium sulfate 2g IV over 1h \u2014 replacement",
      "sig": "IV over 1 hour \u2014 renal wasting requires repeated replacement",
      "prescriber": "Oncology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Oral magnesium oxide 400mg BID \u2014 maintenance",
      "sig": "Take twice daily \u2014 ongoing replacement for renal wasting",
      "prescriber": "Oncology",
      "start": "11/2024",
      "refills": 4,
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
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "133 lbs",
      "ht": "5'2\"",
      "bmi": 24.3,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "133 lbs",
      "ht": "5'2\"",
      "bmi": 24.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "133 lbs",
      "ht": "5'2\"",
      "bmi": 24.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Cisplatin Nephrotoxicity",
      "assessment": "Working diagnosis: Cisplatin Nephrotoxicity",
      "plan": "Referral to mbs. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Cisplatin Nephrotoxicity Panel",
      "results": [
        {
          "test": "Creatinine",
          "value": "2.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "eGFR",
          "value": "32",
          "unit": "mL/min",
          "ref": ">60",
          "flag": "L"
        },
        {
          "test": "Magnesium",
          "value": "1.1",
          "unit": "mg/dL",
          "ref": "1.7-2.4",
          "flag": "L"
        },
        {
          "test": "Potassium",
          "value": "3.0",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "Phosphate",
          "value": "1.8",
          "unit": "mg/dL",
          "ref": "2.5-4.5",
          "flag": "L"
        },
        {
          "test": "Urine Mg (fractional excretion)",
          "value": "Elevated \u2014 inappropriate renal wasting",
          "unit": "",
          "ref": "Should be <2%",
          "flag": "H"
        },
        {
          "test": "Urine NAG (tubular injury marker)",
          "value": "Elevated",
          "unit": "U/L",
          "ref": "Elevated = tubular injury",
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
      "lot": "V7217K",
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
    "smoking": "Never smoker",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "mbs-cisplatin-tubule",
    "diagnosis": "Cisplatin Nephrotoxicity \u2014 Proximal Tubule Mitochondrial Injury, Hypomagnesemia, Rising Creatinine",
    "acuity": 3,
    "presentation": "Cisplatin Nephrotoxicity",
    "category": "renal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with cisplatin nephrotoxicity. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Describe the biochemical pathway involved.",
      "What enzyme or receptor is implicated?",
      "How does this molecular change produce the clinical findings?",
      "What would you expect to find on laboratory testing?",
      "How does treatment address the underlying mechanism?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this renal presentation.",
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
      "Cisplatin nephrotoxicity \u2014 proximal tubule injury (correct)",
      "Pre-renal AKI \u2014 forced hydration protocol should prevent; FENa distinguishes",
      "Radiation nephropathy \u2014 later onset, different imaging pattern",
      "Contrast nephropathy \u2014 if contrast CT used concurrently",
      "ATN from another cause \u2014 cisplatin is the clear temporal relationship",
      "Fanconi syndrome from cisplatin \u2014 aminoaciduria/glycosuria would confirm full proximal dysfunction"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a mbs case with chief complaint: Cisplatin Nephrotoxicity. What are the most important questions for a mbs to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a mbs perspective, what is the most critical finding that narrows this differential? What is the mbs-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the mbs's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: cisplatin nephrotoxicity \u2014 proximal tubule + thick ascending limb injury. Key MBS learning: (1) Cisplatin mechanism of nephrotoxicity: cisplatin accumulates in proximal tubular cells (via OCT2 transporter, high expression in PT) \u2192 intracellular aquation \u2192 platinum-DNA adducts \u2192 mitochondrial dysfunction \u2192 ROS generation \u2192 tubular cell apoptosis. Also damages thick ascending limb \u2192 Mg and Ca wasting. (2) Electrolyte wasting pattern: cisplatin damages the Mg-reabsorbing transporter (TRPM6) in the thick ascending limb \u2192 renal Mg wasting \u2192 hypomagnesemia persists despite replacement. Also damages NaPi-IIa in proximal tubule \u2192 phosphate wasting \u2192 hypophosphatemia. (3) Prevention: forced diuresis with 1-2L saline pre-hydration and mannitol reduces tubular concentration of cisplatin. Amifostine (free radical scavenger) can reduce nephrotoxicity but is not universally used. (4) OCT2 transporter relevance: cisplatin selectivity for kidney is because OCT2 (organic cation transporter 2) is expressed highly in proximal tubule and not heart/nerve \u2192 explains why nephrotoxicity > cardiotoxicity at standard doses. Cimetidine inhibits OCT2 and has been studied as a protective strategy. (5) Management of established nephrotoxicity: cannot reverse tubular injury. Support: aggressive magnesium replacement (IV + oral), electrolyte replacement, hold cisplatin if creatinine >1.5x baseline \u2014 oncology decision. Most nephrotoxicity is reversible over weeks to months."
    }
  }
};
