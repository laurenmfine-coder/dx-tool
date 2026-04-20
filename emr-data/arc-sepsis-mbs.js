
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
      "notes": "Gerald Park. E. coli from urinary source. MBS focus: molecular mechanism from LPS to organ dysfunction."
    },
    {
      "problem": "Systemic inflammatory response \u2014 cytokine storm",
      "icd": "A41.51",
      "onset": "2024",
      "status": "Active",
      "notes": "IL-6 2400 pg/mL, TNF-\u03b1 elevated \u2014 downstream of TLR4 activation"
    },
    {
      "problem": "Endothelial dysfunction \u2014 NO-mediated vasodilation",
      "icd": "R57.2",
      "onset": "2024",
      "status": "Active",
      "notes": "iNOS induction by LPS \u2192 massive NO synthesis \u2192 refractory vasodilation \u2192 vasopressor requirement"
    }
  ],
  "medications": [
    {
      "name": "Piperacillin-tazobactam 3.375g IV q8h",
      "sig": "Beta-lactam/beta-lactamase inhibitor combination \u2014 empiric gram-negative coverage",
      "prescriber": "ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Norepinephrine 0.1 mcg/kg/min (titrating)",
      "sig": "Alpha-1 agonist \u2014 vasoconstriction to restore MAP \u226565. First-line vasopressor in septic shock.",
      "prescriber": "ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Hydrocortisone 200mg/day infusion (vasopressor-refractory)",
      "sig": "Relative adrenal insufficiency \u2014 improves vasopressor response. Add if norepinephrine >0.25 mcg/kg/min.",
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
          "test": "IL-6",
          "value": "2400",
          "unit": "pg/mL",
          "ref": "<7",
          "flag": "H"
        },
        {
          "test": "Procalcitonin",
          "value": "42",
          "unit": "ng/mL",
          "ref": "<0.25",
          "flag": "H"
        },
        {
          "test": "TNF-\u03b1",
          "value": "Elevated",
          "unit": "pg/mL",
          "ref": "<8.1",
          "flag": "H"
        },
        {
          "test": "D-dimer",
          "value": "12.4",
          "unit": "\u03bcg/mL",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "4.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Fibrinogen",
          "value": "88",
          "unit": "mg/dL",
          "ref": "200-400",
          "flag": "L"
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
    "diagnosis": "Urosepsis \u2014 E. coli LPS-TLR4 Pathway, Cytokine Storm, Complement Cascade MBS Focus",
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
      "E. coli urosepsis \u2014 LPS/TLR4/cytokine cascade (correct)",
      "Gram-positive sepsis \u2014 LTA/peptidoglycan pathway, different PRR",
      "SIRS from non-infectious cause \u2014 procalcitonin 42 and blood cultures confirm infectious etiology",
      "Viral sepsis \u2014 different innate immune activation pathway",
      "Fungal sepsis \u2014 beta-glucan/dectin-1 pathway",
      "Sterile inflammatory syndrome \u2014 cultures growing gram-negative rods rule this out"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a mbs case with chief complaint: Gerald Park. What are the most important questions for a mbs to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a mbs perspective, what is the most critical finding that narrows this differential? What is the mbs-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the mbs's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: E. coli urosepsis \u2014 molecular mechanism. Key MBS learning: (1) LPS \u2192 TLR4 pathway: E. coli outer membrane lipopolysaccharide (LPS/endotoxin) binds LPS-binding protein in plasma \u2192 transfers to CD14 on macrophage surface \u2192 CD14 presents to TLR4/MD-2 complex \u2192 MyD88 adaptor protein recruited \u2192 NF-\u03baB activation \u2192 transcription of TNF-\u03b1, IL-1\u03b2, IL-6, IL-12 \u2192 cytokine storm. (2) iNOS induction: LPS + TNF-\u03b1 + IL-1\u03b2 \u2192 iNOS (inducible nitric oxide synthase) gene transcription in endothelial cells, macrophages, smooth muscle \u2192 massive NO synthesis \u2192 soluble guanylyl cyclase \u2192 cGMP \u2192 vascular smooth muscle relaxation \u2192 profound vasodilation \u2192 refractory hypotension. Norepinephrine overcomes iNOS-mediated vasodilation via alpha-1 receptor. (3) Complement cascade in sepsis: LPS activates complement via the alternative pathway \u2192 C3a and C5a are anaphylatoxins \u2192 mast cell degranulation \u2192 more histamine/vasodilation \u2192 C5a also acts as opsonin but at high levels induces immunosuppression ('late sepsis immunoparalysis'). (4) Procalcitonin biology: normally calcitonin precursor made in thyroid C cells. In sepsis: LPS + cytokines induce ubiquitous procalcitonin expression in ALL tissues, dramatically elevating serum levels. PCT is a direct reporter of innate immune activation severity. Half-life 24h \u2192 useful for de-escalation decisions. (5) The DIC connection: fibrinogen 88 = consumption in microthrombi. Tissue factor released by endothelial damage \u2192 extrinsic pathway \u2192 thrombin \u2192 fibrin mesh \u2192 platelet consumption. Simultaneously, tPA released \u2192 fibrinolysis \u2192 D-dimer elevation. Classic DIC from sepsis = simultaneous clotting + lysis."
    }
  }
};
