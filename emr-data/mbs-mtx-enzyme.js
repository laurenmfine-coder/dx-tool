
window.EMR_DATA = {
  "patient": {
    "name": "Antoine Dubois",
    "dob": "01/04/1993",
    "age": 32,
    "sex": "Male",
    "mrn": "RDX-2025-37464",
    "pronouns": "He/Him",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Methotrexate Toxicity",
    "race": "Hispanic or Latino",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-6936",
    "email": "antoined@email.com",
    "emergencyContact": {
      "name": "Mei Lin (Family)",
      "phone": "(954) 555-6816"
    }
  },
  "problems": [
    {
      "problem": "Methotrexate toxicity \u2014 oral ulcers, pancytopenia",
      "icd": "T45.1X5A",
      "onset": "2024",
      "status": "Active",
      "notes": "Weekly low-dose MTX for RA. Took daily instead of weekly \u2014 7x dose error."
    },
    {
      "problem": "Pancytopenia \u2014 folate-dependent cell death",
      "icd": "D61.818",
      "onset": "2024",
      "status": "Active",
      "notes": "WBC 1.8, Hgb 7.8, Plt 28 \u2014 all marrow lineages affected"
    },
    {
      "problem": "Mucositis \u2014 oral and GI",
      "icd": "K12.31",
      "onset": "2024",
      "status": "Active",
      "notes": "Cannot eat or drink \u2014 folate-deficient mucosa breaks down first"
    }
  ],
  "medications": [
    {
      "name": "HOLD methotrexate immediately",
      "sig": "Stop all MTX \u2014 causative agent",
      "prescriber": "Medicine/Rheum",
      "start": "11/2024",
      "refills": 0,
      "status": "HELD"
    },
    {
      "name": "Leucovorin (folinic acid) 10-25mg IV q6h \u2014 rescue therapy",
      "sig": "Bypasses DHFR blockade by providing pre-reduced folate. Give within 24-48h of toxicity recognition.",
      "prescriber": "Medicine/Toxicology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Granulocyte colony-stimulating factor (G-CSF/Filgrastim) 5mcg/kg SQ daily",
      "sig": "Accelerate neutrophil recovery",
      "prescriber": "Hematology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Nystatin swish-and-swallow 5mL QID",
      "sig": "Antifungal for mucositis",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 1,
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
      "wt": "85 lbs",
      "ht": "5'7\"",
      "bmi": 13.3,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "85 lbs",
      "ht": "5'7\"",
      "bmi": 13.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "85 lbs",
      "ht": "5'7\"",
      "bmi": 13.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Methotrexate Toxicity",
      "assessment": "Working diagnosis: Methotrexate Toxicity",
      "plan": "Referral to mbs. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "MTX Toxicity Panel",
      "results": [
        {
          "test": "WBC",
          "value": "1.8",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "L"
        },
        {
          "test": "ANC",
          "value": "420",
          "unit": "cells/\u03bcL",
          "ref": ">1500",
          "flag": "L"
        },
        {
          "test": "Hemoglobin",
          "value": "7.8",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "Platelets",
          "value": "28",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": "L"
        },
        {
          "test": "Methotrexate level",
          "value": "0.8",
          "unit": "\u03bcmol/L",
          "ref": "<0.05 after 72h standard dosing",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Homocysteine",
          "value": "42",
          "unit": "\u03bcmol/L",
          "ref": "<15",
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
      "lot": "V5705K",
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
    "caseId": "mbs-mtx-enzyme",
    "diagnosis": "Methotrexate Toxicity \u2014 Dihydrofolate Reductase Inhibition, Rescue with Leucovorin",
    "acuity": 3,
    "presentation": "Methotrexate Toxicity",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with methotrexate toxicity. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "MTX toxicity \u2014 DHFR inhibition, leucovorin rescue (correct)",
      "Aplastic anemia \u2014 no prior exposure, MTX timing confirms etiology",
      "Leukemia \u2014 acute onset post-MTX error, not de novo leukemia",
      "Sepsis-induced pancytopenia \u2014 MTX level elevated, drug toxicity primary",
      "Autoimmune hemolysis \u2014 pancytopenia with drug context",
      "B12/folate deficiency \u2014 MTX mechanism is DHFR inhibition, not nutritional deficiency"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a mbs case with chief complaint: Methotrexate Toxicity. What are the most important questions for a mbs to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a mbs perspective, what is the most critical finding that narrows this differential? What is the mbs-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the mbs's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: MTX toxicity, DHFR inhibition. Key MBS learning: (1) DHFR pathway: folic acid \u2192 DHFR reduces to dihydrofolate \u2192 DHFR reduces again to tetrahydrofolate (THF). THF is the cofactor for thymidylate synthase (DNA synthesis) and other one-carbon transfer reactions. MTX competitively inhibits DHFR \u2192 blocks THF production \u2192 no nucleotide synthesis \u2192 rapidly dividing cells die first (mucosa, marrow, tumor). (2) Leucovorin (folinic acid) mechanism: leucovorin = pre-reduced 5-formyltetrahydrofolate. It enters the folate cycle DOWNSTREAM of DHFR \u2192 bypasses the block \u2192 cells can resume THF-dependent reactions. This is why leucovorin rescues normal cells from MTX toxicity. (3) MTX polyglutamation: inside cells, MTX is converted to polyglutamate forms by folypolyglutamate synthase \u2192 retained intracellularly \u2192 prolonged DHFR inhibition even after plasma levels fall. This is why toxicity persists even when the MTX level appears to be declining. (4) Selective toxicity concept: why does MTX kill cancer cells more than normal cells? Cancer cells overexpress DHFR (to overcome inhibition) but also have higher polyglutamation capacity \u2192 accumulate MTX polyglutamates \u2192 more sensitive. Also: rapidly dividing cells are more dependent on de novo nucleotide synthesis. (5) Drug interaction: NSAIDs and PCN reduce renal MTX clearance \u2192 elevation of MTX levels \u2192 increased toxicity risk. This patient's renal function declining (Cr 1.4) may also slow clearance. Avoid NSAIDs in MTX patients."
    }
  }
};
