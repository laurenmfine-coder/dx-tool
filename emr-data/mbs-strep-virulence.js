
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "05/15/1970",
    "age": 55,
    "sex": "Non-binary",
    "mrn": "RDX-2025-12108",
    "pronouns": "They/Them",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Strep Pharyngitis",
    "race": "White",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-9064",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Aisha Johnson (Family)",
      "phone": "(954) 555-9065"
    }
  },
  "problems": [
    {
      "problem": "GAS pharyngitis \u2014 M protein virulence factor",
      "icd": "J02.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Positive RADT. Exudative tonsils, anterior cervical lymphadenopathy, fever 38.8\u00b0C. Centor score 4."
    },
    {
      "problem": "Acute rheumatic fever risk \u2014 molecular mimicry",
      "icd": "Z86.89",
      "onset": "2024",
      "status": "Active",
      "notes": "M protein epitopes mimic cardiac myosin \u2014 untreated GAS \u2192 ARF \u2192 rheumatic heart disease"
    },
    {
      "problem": "Penicillin-sensitive organism \u2014 antibiotics indicated",
      "icd": "B95.0",
      "onset": "2024",
      "status": "Active",
      "notes": "GAS universally penicillin-sensitive \u2014 PCN never resists (no penicillinase gene in GAS)"
    }
  ],
  "medications": [
    {
      "name": "Amoxicillin 500mg PO BID x10 days",
      "sig": "Take twice daily for 10 days \u2014 10-day course prevents ARF (shorter courses don't)",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 400mg TID PRN \u2014 pain and fever",
      "sig": "With food as needed",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Benzathine penicillin G 1.2M units IM x1 (alternative for compliance concern)",
      "sig": "Single IM injection \u2014 guarantees full course compliance. Useful if patient unreliable with oral antibiotics.",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "Alternative"
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
      "wt": "102 lbs",
      "ht": "5'9\"",
      "bmi": 15.1,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "102 lbs",
      "ht": "5'9\"",
      "bmi": 15.1,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "102 lbs",
      "ht": "5'9\"",
      "bmi": 15.1,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Strep Pharyngitis",
      "assessment": "Working diagnosis: Strep Pharyngitis",
      "plan": "Referral to mbs. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "GAS Pharyngitis Panel",
      "results": [
        {
          "test": "Rapid antigen detection test (RADT) \u2014 GAS",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Throat culture (backup \u2014 sent)",
          "value": "Pending",
          "unit": "",
          "ref": "No growth",
          "flag": ""
        },
        {
          "test": "WBC",
          "value": "14.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Monospot test",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Temperature",
          "value": "38.8",
          "unit": "\u00b0C",
          "ref": "<38.0",
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
      "lot": "V2294K",
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
    "caseId": "mbs-strep-virulence",
    "diagnosis": "Group A Streptococcus Pharyngitis \u2014 M Protein Virulence, Molecular Mimicry, ARF Risk",
    "acuity": 3,
    "presentation": "Strep Pharyngitis",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with strep pharyngitis. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "GAS pharyngitis \u2014 10-day antibiotics to prevent ARF (correct)",
      "Viral pharyngitis \u2014 RADT positive, antibiotics indicated",
      "Infectious mononucleosis \u2014 monospot negative, RADT positive",
      "5-day antibiotic course sufficient \u2014 10 days required for ARF prevention",
      "No treatment needed \u2014 untreated GAS risks ARF and suppurative complications",
      "Amoxicillin-clavulanate \u2014 unnecessary, GAS universally PCN-sensitive"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a mbs case with chief complaint: Strep Pharyngitis. What are the most important questions for a mbs to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a mbs perspective, what is the most critical finding that narrows this differential? What is the mbs-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the mbs's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: GAS pharyngitis \u2014 M protein virulence and ARF prevention. Key MBS learning: (1) M protein structure: M protein is the major GAS virulence factor \u2014 a fibrous surface protein that: (a) resists phagocytosis by inhibiting complement opsonization (binds Factor H, inhibits C3b deposition), (b) is antiphagocytic against neutrophils. Different M protein serotypes (M1, M3 being most virulent) mediate different disease patterns \u2014 invasive disease, toxic shock. (2) Molecular mimicry and ARF: M protein serotype epitopes (particularly M5, M18) share structural similarity with human cardiac myosin. GAS immune response generates M protein antibodies \u2192 cross-react with cardiac myosin \u2192 autoimmune myocarditis/valvulitis \u2192 acute rheumatic fever. This is the mechanism of rheumatic heart disease \u2014 a preventable autoimmune disease. (3) Why 10 days: the antibody response that cross-reacts with cardiac tissue takes 2-3 weeks to develop. Eradicating GAS within 10 days of symptom onset prevents the immune response from reaching cardiac-damaging levels. Shorter courses (5 days) have higher recurrence and do not reliably prevent ARF. (4) Universal penicillin sensitivity: GAS has never acquired penicillinase \u2014 the 'horror vacui' of antibiotic resistance. This is because the M protein immune evasion is so effective that GAS does not need beta-lactam resistance for survival. This makes amoxicillin/PCN ideal \u2014 always works, never needs to escalate. (5) Suppurative complications of untreated GAS: peritonsillar abscess, retropharyngeal abscess, otitis media, sinusitis, mastoiditis. Non-suppurative: ARF, post-streptococcal glomerulonephritis (PSGN \u2014 different M types from ARF, NOT prevented by antibiotics)."
    }
  }
};
