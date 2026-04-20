
window.EMR_DATA = {
  "patient": {
    "name": "Mei Lin",
    "dob": "02/07/1965",
    "age": 60,
    "sex": "Female",
    "mrn": "RDX-2025-44787",
    "pronouns": "She/Her",
    "insurance": "Medicare",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Beta-Blocker Overdose",
    "race": "Hispanic or Latino",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-6067",
    "email": "meilin@email.com",
    "emergencyContact": {
      "name": "Carlos Rivera (Family)",
      "phone": "(954) 555-8947"
    }
  },
  "problems": [
    {
      "problem": "Beta-blocker overdose \u2014 atenolol ingestion",
      "icd": "T44.7X1A",
      "onset": "2024",
      "status": "Active",
      "notes": "HR 32, BP 78/48, glucose 42 \u2014 competitive beta-adrenergic blockade"
    },
    {
      "problem": "Cardiogenic shock \u2014 loss of beta-1 inotropic support",
      "icd": "R57.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Beta-1 blockade \u2192 reduced HR, reduced contractility \u2192 cardiogenic shock"
    },
    {
      "problem": "Hypoglycemia \u2014 glucagon secretion beta-2-mediated",
      "icd": "E16.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Beta-2 blockade inhibits glucagon release and glycogenolysis \u2192 hypoglycemia"
    }
  ],
  "medications": [
    {
      "name": "High-dose insulin euglycemia therapy (HIET) \u2014 1 unit/kg bolus then 0.5 unit/kg/hr CRI",
      "sig": "Insulin at suprapharmacologic doses increases cardiac glucose uptake \u2014 high-dose insulin improves cardiac output in beta-blocker OD",
      "prescriber": "Toxicology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 HIET protocol"
    },
    {
      "name": "D50W 50mL IV with insulin + dextrose infusion to maintain glucose 100-200",
      "sig": "Prevent hypoglycemia from HIET \u2014 pair insulin with dextrose infusion",
      "prescriber": "Toxicology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Glucagon 5mg IV (historical \u2014 limited evidence)",
      "sig": "Overcomes beta-blockade via non-beta cAMP pathway \u2014 limited evidence for true benefit",
      "prescriber": "Toxicology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 adjunct"
    },
    {
      "name": "Calcium chloride 1g IV (if co-ingestion with CCB suspected)",
      "sig": "If concurrent calcium channel blocker overdose \u2014 calcium overrides CCB",
      "prescriber": "Toxicology",
      "start": "11/2024",
      "refills": 0,
      "status": "Conditional"
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
      "wt": "72 lbs",
      "ht": "5'5\"",
      "bmi": 12.0,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "72 lbs",
      "ht": "5'5\"",
      "bmi": 12.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "72 lbs",
      "ht": "5'5\"",
      "bmi": 12.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Beta-Blocker Overdose",
      "assessment": "Working diagnosis: Beta-Blocker Overdose",
      "plan": "Referral to mbs. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Beta-Blocker OD Panel",
      "results": [
        {
          "test": "Blood glucose",
          "value": "42",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "L"
        },
        {
          "test": "HR (monitor)",
          "value": "32",
          "unit": "bpm",
          "ref": "60-100",
          "flag": "L"
        },
        {
          "test": "Lactate",
          "value": "4.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "5.2",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "H"
        },
        {
          "test": "EKG",
          "value": "Sinus bradycardia, PR prolongation 280ms, QRS 110ms",
          "unit": "",
          "ref": "",
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
      "lot": "V8567K",
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
    "caseId": "mbs-bb-receptor",
    "diagnosis": "Beta-Blocker Overdose \u2014 Competitive Antagonism at Beta-Adrenergic Receptors, High-Dose Insulin Therapy",
    "acuity": 2,
    "presentation": "Beta-Blocker Overdose",
    "category": "toxicologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with beta-blocker overdose. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Describe the biochemical pathway involved.",
      "What enzyme or receptor is implicated?",
      "How does this molecular change produce the clinical findings?",
      "What would you expect to find on laboratory testing?",
      "How does treatment address the underlying mechanism?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this toxicologic presentation.",
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
      "Beta-blocker overdose \u2014 HIET treatment (correct)",
      "Calcium channel blocker overdose \u2014 similar presentation, calcium is first-line (check co-ingestion)",
      "Digoxin toxicity \u2014 bradycardia + hyperkalemia but different ECG pattern",
      "Complete heart block \u2014 medication-induced vs structural",
      "Hypothyroidism \u2014 bradycardia but different timeline",
      "Vagally mediated bradycardia \u2014 acute toxidrome excludes this"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a mbs case with chief complaint: Beta-Blocker Overdose. What are the most important questions for a mbs to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a mbs perspective, what is the most critical finding that narrows this differential? What is the mbs-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the mbs's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: beta-blocker overdose. Key MBS learning: (1) Beta-1 receptor pharmacology: normally, catecholamines bind beta-1 \u2192 adenylyl cyclase activation \u2192 cAMP \u2192 PKA activation \u2192 phosphorylation of L-type Ca++ channels and RyR2 \u2192 increased contractility (positive inotrope) and HR (positive chronotrope). Beta-blocker competitive antagonism \u2192 none of this signaling \u2192 bradycardia + hypotension. (2) Beta-2 blockade metabolic effects: normally beta-2 stimulates glucagon secretion and glycogenolysis. Blockade \u2192 hypoglycemia + blunted catecholamine response. Glucose 42 = beta-2-mediated metabolic effect. (3) High-dose insulin euglycemia therapy (HIET): suprapharmacologic insulin doses (10-20x normal) dramatically increase cardiac glucose uptake \u2192 cardiomyocytes switch from fatty acid to glucose metabolism \u2192 improved contractility without adrenergic signaling. This is why insulin outperforms glucagon in beta-blocker/CCB OD. (4) Glucagon mechanism: activates Gs-coupled glucagon receptor \u2192 bypass beta receptor \u2192 still elevates cAMP \u2192 some inotropic/chronotropic effect. Evidence modest in clinical practice. (5) ECG in beta-blocker OD: sinus bradycardia + PR prolongation (AV node beta-1 dependent) + possible QRS widening (sodium channel effects at high doses). Distinguish from CCB: CCB causes peripheral vasodilation with reflex tachycardia early; beta-blocker causes bradycardia from start."
    }
  }
};
