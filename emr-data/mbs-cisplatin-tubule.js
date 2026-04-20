
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
      "problem": "Cisplatin nephrotoxicity \u2014 AKI rising creatinine",
      "icd": "T45.1X5A",
      "onset": "2024",
      "status": "Active",
      "notes": "Cycle 3 cisplatin. Creatinine 2.1 (baseline 0.9). Despite pre-hydration \u2014 tubular damage occurring."
    },
    {
      "problem": "Hypomagnesemia \u2014 cisplatin-induced tubular wasting",
      "icd": "E83.42",
      "onset": "2024",
      "status": "Active",
      "notes": "Mg 1.1 \u2014 cisplatin damages proximal tubule transporters including TRPM6 \u2192 magnesium wasting"
    },
    {
      "problem": "Hypokalemia \u2014 secondary to hypomagnesemia",
      "icd": "E87.6",
      "onset": "2024",
      "status": "Active",
      "notes": "K+ 3.0 \u2014 magnesium required for renal potassium retention (ROMK channel). Treat Mg first."
    }
  ],
  "medications": [
    {
      "name": "NS 250 mL/hr IV pre-cisplatin and 6h post \u2014 hydration protocol",
      "sig": "Aggressive pre/post-hydration \u2014 dilutes cisplatin in tubular lumen, reduces concentration",
      "prescriber": "Oncology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Magnesium sulfate 2g IV over 2h \u2014 acute replacement",
      "sig": "IV magnesium \u2014 replace before potassium (hypokalemia won't correct without magnesium)",
      "prescriber": "Oncology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "KCl 40mEq in IV fluids \u2014 potassium replacement",
      "sig": "After magnesium replacement \u2014 K+ won't stay up without adequate Mg",
      "prescriber": "Oncology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Amifostine 910 mg/m\u00b2 IV (if next cycle given)",
      "sig": "Cytoprotective \u2014 free radical scavenger, reduces cisplatin nephrotoxicity. Selectively protects normal tissue.",
      "prescriber": "Oncology",
      "start": "11/2024",
      "refills": 0,
      "status": "Planned next cycle"
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
      "panel": "Cisplatin Toxicity Panel",
      "results": [
        {
          "test": "Creatinine",
          "value": "2.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
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
          "test": "Urine magnesium (24h)",
          "value": "Elevated \u2014 inappropriate magnesuria",
          "unit": "",
          "ref": "Should be low with serum Mg deficiency",
          "flag": "H"
        },
        {
          "test": "BUN",
          "value": "36",
          "unit": "mg/dL",
          "ref": "7-20",
          "flag": "H"
        },
        {
          "test": "Urine cast \u2014 granular casts",
          "value": "Present",
          "unit": "",
          "ref": "None",
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
    "diagnosis": "Cisplatin Nephrotoxicity \u2014 Proximal Tubule Oxidative Injury, Magnesium Wasting, AKI Prevention",
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
      "Cisplatin nephrotoxicity \u2014 tubular oxidative injury (correct)",
      "Pre-renal AKI \u2014 granular casts and tubular wasting pattern indicate intrinsic injury, not pre-renal",
      "Contrast nephropathy \u2014 no contrast given, cisplatin is the nephrotoxin",
      "Aminoglycoside nephrotoxicity \u2014 not on aminoglycosides",
      "Glomerulonephritis \u2014 tubular cast pattern, not nephritic",
      "Tumor lysis syndrome \u2014 electrolytes wrong pattern (hyperkalemia/hyperphosphatemia in TLS)"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a mbs case with chief complaint: Cisplatin Nephrotoxicity. What are the most important questions for a mbs to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a mbs perspective, what is the most critical finding that narrows this differential? What is the mbs-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the mbs's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: cisplatin nephrotoxicity. Key MBS learning: (1) Cisplatin mechanism of nephrotoxicity: cisplatin is concentrated 5x in proximal tubule cells \u2192 enters via organic cation transporters (OCT2) \u2192 reacts with cellular DNA and proteins \u2192 mitochondrial dysfunction \u2192 reactive oxygen species (ROS) generation \u2192 oxidative damage to tubule cell membranes \u2192 tubular cell apoptosis/necrosis \u2192 AKI. Granular casts = shed tubule cells confirming tubular injury. (2) Magnesium wasting mechanism: TRPM6 is the magnesium transporter in proximal and distal tubule. Cisplatin damages tubule cells \u2192 TRPM6 function lost \u2192 inability to reabsorb filtered magnesium \u2192 hypomagnesuria becomes inappropriate magnesuria. Chronic cisplatin causes irreversible TRPM6 damage \u2014 40-100% of patients develop lasting hypomagnesemia. (3) Hypokalemia from hypomagnesemia: ROMK channels (renal outer medullary potassium channels) in collecting duct require intracellular Mg++ to close and retain potassium. Without Mg: ROMK channels stay open \u2192 potassium wasted in urine. Classic presentation: hypokalemia resistant to potassium replacement until magnesium is corrected. ALWAYS replace magnesium first. (4) Hydration protocol: NS 250 mL/hr pre and post-cisplatin dilutes tubular cisplatin concentration and maintains high urine flow. Reduces nephrotoxicity 40%. Mannitol historically added \u2014 evidence less clear. (5) Amifostine (WR-2721): prodrug activated preferentially by alkaline phosphatase in normal tissues (vs lower phosphatase in tumors) \u2192 free radical scavenger. Selectively cytoprotective for kidneys, salivary glands, neurotoxicity \u2014 not tumor cells. FDA-approved for cisplatin nephrotoxicity prevention."
    }
  }
};
