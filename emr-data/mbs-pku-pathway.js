
window.EMR_DATA = {
  "patient": {
    "name": "Taylor Kim",
    "dob": "04/27/1983",
    "age": 42,
    "sex": "Non-binary",
    "mrn": "RDX-2025-15067",
    "pronouns": "They/Them",
    "insurance": "Tricare",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "PKU Newborn Screen Positive",
    "race": "Multiracial",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-8334",
    "email": "taylorki@email.com",
    "emergencyContact": {
      "name": "David Kim (Family)",
      "phone": "(954) 555-3959"
    }
  },
  "problems": [
    {
      "problem": "Classic PKU \u2014 PAH deficiency confirmed",
      "icd": "E70.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Newborn screen positive. Phenylalanine 24 mg/dL (normal <2). Metabolic team engaged."
    },
    {
      "problem": "Neurotoxicity risk \u2014 brain development window",
      "icd": "E70.0",
      "onset": "2024",
      "status": "Active",
      "notes": "High Phe disrupts large neutral amino acid transport \u2014 myelin synthesis impaired if untreated"
    },
    {
      "problem": "Dietary phenylalanine restriction \u2014 initiated",
      "icd": "Z71.3",
      "onset": "2024",
      "status": "Active",
      "notes": "PKU formula started. Natural protein severely restricted. Tyrosine supplementation required."
    }
  ],
  "medications": [
    {
      "name": "Phe-free amino acid formula (Phenex-1) \u2014 initiated",
      "sig": "Replace all natural protein intake with formula \u2014 sole source of amino acids except Phe",
      "prescriber": "Metabolic dietitian",
      "start": "11/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Tyrosine supplementation \u2014 from formula",
      "sig": "Tyrosine is conditionally essential in PKU \u2014 PAH deficiency blocks tyrosine synthesis from Phe",
      "prescriber": "Metabolic dietitian",
      "start": "11/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Sapropterin (BH4) 10mg/kg/day \u2014 for BH4-responsive PKU (testing required)",
      "sig": "Cofactor for PAH \u2014 some mutations respond. BH4 loading test required first.",
      "prescriber": "Metabolic genetics",
      "start": "11/2024",
      "refills": 0,
      "status": "Pending BH4 loading test"
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
      "wt": "94 lbs",
      "ht": "5'6\"",
      "bmi": 15.2,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "94 lbs",
      "ht": "5'6\"",
      "bmi": 15.2,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "94 lbs",
      "ht": "5'6\"",
      "bmi": 15.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for PKU Newborn Screen Positive",
      "assessment": "Working diagnosis: PKU Newborn Screen Positive",
      "plan": "Referral to mbs. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "PKU Newborn Screen Confirmation",
      "results": [
        {
          "test": "Plasma phenylalanine",
          "value": "24",
          "unit": "mg/dL",
          "ref": "<2 normal; >6 treatment threshold",
          "flag": "H"
        },
        {
          "test": "Plasma tyrosine",
          "value": "0.6",
          "unit": "mg/dL",
          "ref": "1.3-4.5",
          "flag": "L"
        },
        {
          "test": "Phe:Tyr ratio",
          "value": "40:1",
          "unit": "",
          "ref": "<3:1 normal",
          "flag": "H"
        },
        {
          "test": "BH4 (tetrahydrobiopterin) level",
          "value": "Normal \u2014 not a cofactor deficiency",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "PAH gene sequencing",
          "value": "Homozygous c.1222C>T (p.R408W) \u2014 classic PKU",
          "unit": "",
          "ref": "No pathogenic variant",
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
      "lot": "V6010K",
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
    "caseId": "mbs-pku-pathway",
    "diagnosis": "Phenylketonuria (PKU) \u2014 PAH Deficiency, Phenylalanine Accumulation, Neurotoxicity Mechanism",
    "acuity": 3,
    "presentation": "PKU Newborn Screen Positive",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with pku newborn screen positive. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Describe the biochemical pathway involved.",
      "What enzyme or receptor is implicated?",
      "How does this molecular change produce the clinical findings?",
      "What would you expect to find on laboratory testing?",
      "How does treatment address the underlying mechanism?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this other presentation.",
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
      "Classic PKU \u2014 PAH deficiency (correct)",
      "BH4 deficiency (DHPR or GTPCH deficiency) \u2014 rare, different enzyme, BH4 test normal",
      "Hyperphenylalaninemia mild \u2014 Phe 24 is severe (>2 is elevated, >6 requires treatment)",
      "Tyrosinemia \u2014 elevated tyrosine (here tyrosine is LOW, not elevated)",
      "MSUD (maple syrup urine disease) \u2014 branched-chain amino acids elevated, different enzyme",
      "Transient neonatal hyperphenylalaninemia \u2014 self-limited, but Phe 24 requires treatment"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a mbs case with chief complaint: PKU Newborn Screen Positive. What are the most important questions for a mbs to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a mbs perspective, what is the most critical finding that narrows this differential? What is the mbs-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the mbs's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: classic PKU, PAH deficiency. Key MBS learning: (1) PAH enzyme: phenylalanine hydroxylase (PAH) converts phenylalanine \u2192 tyrosine. Requires tetrahydrobiopterin (BH4) as cofactor. Classic PKU = PAH gene mutation \u2192 enzyme absent/deficient \u2192 Phe accumulates. (2) Why Phe causes brain damage: Phe and tyrosine/tryptophan are LNAA (large neutral amino acids) that share the same transporter across the blood-brain barrier (LAT1). High plasma Phe competitively inhibits transport of other LNAA (tryptophan \u2192 serotonin, tyrosine \u2192 dopamine). Result: low dopamine, serotonin, and myelin (which requires LNAA). Untreated PKU = intellectual disability, seizures, white matter loss. (3) Tyrosine is conditionally essential in PKU: normally made from Phe by PAH. PAH absent \u2192 tyrosine cannot be synthesized \u2192 becomes essential nutrient. Must supplement. (4) Sapropterin (BH4/Kuvan): some PAH mutations respond to excess BH4 \u2014 the mutation allows some residual enzyme activity that is BH4-dependent. BH4 loading test: give 20mg/kg, measure Phe at 0, 4, 8, 24h. >30% Phe reduction = BH4-responsive \u2192 can use sapropterin instead of or in addition to diet. Only works for about 30-50% of PKU patients. (5) Treatment goal: maintain plasma Phe 2-6 mg/dL throughout childhood (brain development) \u2014 lifelong dietary management. Maternal PKU: high Phe in pregnancy causes fetal brain damage even if fetus is heterozygous."
    }
  }
};
