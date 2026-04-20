
window.EMR_DATA = {
  "patient": {
    "name": "Jordan Lee",
    "dob": "07/06/1986",
    "age": 39,
    "sex": "Non-binary",
    "mrn": "RDX-2025-27079",
    "pronouns": "They/Them",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Anaphylaxis",
    "race": "Black or African American",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-6364",
    "email": "jordanle@email.com",
    "emergencyContact": {
      "name": "Yasmine Bouchard (Family)",
      "phone": "(954) 555-4338"
    }
  },
  "problems": [
    {
      "problem": "Anaphylaxis \u2014 bee venom, IgE-mediated",
      "icd": "T63.441A",
      "onset": "2024",
      "status": "Active",
      "notes": "Previous bee sting sensitization \u2192 IgE formed \u2192 current sting cross-links IgE on mast cells \u2192 degranulation"
    },
    {
      "problem": "Cardiovascular collapse \u2014 histamine-mediated vasodilation",
      "icd": "R57.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Histamine H1/H2 receptor activation \u2192 peripheral vasodilation \u2192 distributive shock"
    },
    {
      "problem": "Bronchospasm \u2014 leukotriene C4/D4",
      "icd": "J98.01",
      "onset": "2024",
      "status": "Active",
      "notes": "Mast cell-derived leukotrienes cause bronchospasm \u2014 slower onset than histamine"
    }
  ],
  "medications": [
    {
      "name": "Epinephrine 0.3mg IM (EpiPen auto-injector)",
      "sig": "IM lateral thigh immediately \u2014 reverses vasodilation (alpha), bronchospasm (beta-2), inhibits mast cell degranulation (beta-2)",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Given STAT"
    },
    {
      "name": "Diphenhydramine 50mg IV",
      "sig": "H1 blockade \u2014 adjunct only, treats urticaria/pruritus",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ranitidine 50mg IV (H2 blocker)",
      "sig": "H2 blockade \u2014 synergistic with H1 blockade for histamine-mediated symptoms",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Methylprednisolone 125mg IV",
      "sig": "Delays late-phase reaction \u2014 does NOT treat acute anaphylaxis",
      "prescriber": "ED",
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
      "wt": "131 lbs",
      "ht": "5'5\"",
      "bmi": 21.8,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "131 lbs",
      "ht": "5'5\"",
      "bmi": 21.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "131 lbs",
      "ht": "5'5\"",
      "bmi": 21.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Anaphylaxis",
      "assessment": "Working diagnosis: Anaphylaxis",
      "plan": "Referral to mbs. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Anaphylaxis Panel",
      "results": [
        {
          "test": "Serum tryptase (drawn 30 min post-event)",
          "value": "28",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": "H"
        },
        {
          "test": "Histamine (drawn immediately)",
          "value": "Elevated \u2014 fades rapidly, may be normal by 30min",
          "unit": "",
          "ref": "<1.0 nmol/L",
          "flag": "H"
        },
        {
          "test": "Total IgE",
          "value": "380",
          "unit": "IU/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "Bee venom specific IgE (ImmunoCAP)",
          "value": "Ordered \u2014 confirms sensitization",
          "unit": "",
          "ref": "<0.35 kIU/L",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4582K",
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
    "caseId": "mbs-anaphylaxis-cascade",
    "diagnosis": "Anaphylaxis \u2014 IgE/Fc\u03b5RI/Mast Cell Cascade from Bee Sting, Molecular Mechanism",
    "acuity": 2,
    "presentation": "Anaphylaxis",
    "category": "immunologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with anaphylaxis. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Describe the biochemical pathway involved.",
      "What enzyme or receptor is implicated?",
      "How does this molecular change produce the clinical findings?",
      "What would you expect to find on laboratory testing?",
      "How does treatment address the underlying mechanism?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this immunologic presentation.",
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
      "IgE-mediated anaphylaxis \u2014 mast cell cascade (correct)",
      "Non-IgE anaphylactoid reaction \u2014 direct mast cell activation (aspirin, radiocontrast, opioids)",
      "Hereditary angioedema \u2014 complement-mediated, no urticaria, bradykinin not histamine",
      "Vasovagal syncope \u2014 no urticaria, no bronchospasm, bradycardia not tachycardia",
      "Carcinoid syndrome \u2014 flushing but different mediator profile",
      "Scombroid fish poisoning \u2014 mimics anaphylaxis, different mechanism"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a mbs case with chief complaint: Anaphylaxis. What are the most important questions for a mbs to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a mbs perspective, what is the most critical finding that narrows this differential? What is the mbs-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the mbs's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: IgE-mediated anaphylaxis. Key MBS learning: (1) Sensitization phase: first sting \u2192 bee venom antigens processed by APCs \u2192 Th2 response \u2192 B cell class switch to IgE production \u2192 IgE binds Fc\u03b5RI receptors on mast cells/basophils. Patient is now sensitized \u2014 no symptoms yet. (2) Challenge phase: second sting \u2192 bee venom antigen cross-links adjacent IgE molecules on mast cell surface \u2192 Fc\u03b5RI clustering \u2192 signal transduction \u2192 degranulation. Granule contents: histamine, tryptase, heparin, proteases. New synthesis: prostaglandins (COX), leukotrienes (LOX), platelet activating factor. (3) Mediator effects: Histamine \u2192 urticaria, vasodilation, bronchoconstriction (H1), gastric secretion (H2). Leukotrienes C4/D4/E4 \u2192 prolonged bronchospasm (slow-reacting substances of anaphylaxis \u2014 SRS-A). Tryptase \u2192 marker of mast cell activation, used to confirm anaphylaxis diagnosis retrospectively. (4) Why epinephrine is the ONLY first-line treatment: acts on alpha receptors (vasoconstriction \u2192 reverses hypotension), beta-2 receptors (bronchodilation), AND beta-2 on mast cells (inhibits further degranulation). Antihistamines arrive too late in the cascade to reverse circulatory collapse. (5) Tryptase half-life: peaks at 60-90 min post-event, half-life ~2 hours. Draw at presentation and 3 hours for highest diagnostic yield. Elevated tryptase = mast cell degranulation = confirms anaphylaxis vs. vasovagal or panic."
    }
  }
};
