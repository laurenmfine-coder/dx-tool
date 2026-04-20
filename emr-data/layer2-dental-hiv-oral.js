
window.EMR_DATA = {
  "patient": {
    "name": "James Park",
    "dob": "07/16/1957",
    "age": 68,
    "sex": "Male",
    "mrn": "RDX-2025-26734",
    "pronouns": "He/Him",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "HIV-Positive Patient",
    "race": "Asian",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-3911",
    "email": "jamespar@email.com",
    "emergencyContact": {
      "name": "Priya Patel (Family)",
      "phone": "(954) 555-8170"
    }
  },
  "problems": [
    {
      "problem": "Oral candidiasis \u2014 HIV-associated, CD4 220",
      "icd": "B37.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Marcus Brown, 38M \u2014 HIV on ART, CD4 220. White plaques on tongue (thrush) and angular cheilitis."
    },
    {
      "problem": "Linear gingival erythema \u2014 HIV-associated periodontal disease",
      "icd": "K05.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Red band along free gingival margin \u2014 disproportionate to plaque level. HIV-associated LGE."
    },
    {
      "problem": "Dental treatment planning \u2014 CD4-guided modifications",
      "icd": "B20",
      "onset": "2024",
      "status": "Active",
      "notes": "CD4 >200 = treat like immunocompetent with standard infection precautions. CD4 <200 = consult with HIV provider, consider antibiotic prophylaxis for invasive procedures."
    }
  ],
  "medications": [
    {
      "name": "Fluconazole 100-200mg PO daily x7-14 days \u2014 oral candidiasis",
      "sig": "Systemic azole \u2014 more effective than nystatin for moderate-severe candidiasis. Interaction: many azoles inhibit CYP3A4 \u2014 check HIV medication interactions.",
      "prescriber": "Dentistry/ID",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Chlorhexidine 0.12% oral rinse BID \u2014 LGE and periodontal disease",
      "sig": "Antimicrobial rinse \u2014 adjunct to scaling for HIV-associated periodontal disease. 1-min rinse before scaling procedures.",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Nystatin oral suspension 400,000 units swish/swallow QID \u2014 angular cheilitis",
      "sig": "Topical treatment for angular cheilitis component \u2014 nystatin ointment to lip corners BID",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 1,
      "status": "Active \u2014 corners of mouth"
    },
    {
      "name": "Antiretroviral therapy \u2014 continue, verify adherence",
      "sig": "Optimal ART adherence improves CD4 and reduces oral manifestations. Confirm patient is taking medications as prescribed.",
      "prescriber": "ID (HIV provider)",
      "start": "2022",
      "refills": 5,
      "status": "Continue \u2014 not modified by dental"
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
      "wt": "66 lbs",
      "ht": "5'4\"",
      "bmi": 11.3,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "66 lbs",
      "ht": "5'4\"",
      "bmi": 11.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "66 lbs",
      "ht": "5'4\"",
      "bmi": 11.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for HIV-Positive Patient",
      "assessment": "Working diagnosis: HIV-Positive Patient",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "HIV Status for Dental Planning",
      "results": [
        {
          "test": "CD4 count",
          "value": "220",
          "unit": "cells/\u03bcL",
          "ref": ">500 normal",
          "flag": "L"
        },
        {
          "test": "HIV viral load",
          "value": "850",
          "unit": "copies/mL",
          "ref": "<20 undetectable",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 absolute neutrophil count",
          "value": "1800",
          "unit": "cells/\u03bcL",
          "ref": ">1500 \u2014 adequate for dental surgery",
          "flag": ""
        },
        {
          "test": "Platelet count",
          "value": "142",
          "unit": "K/\u03bcL",
          "ref": "150-400",
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
      "lot": "V8600K",
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
    "caseId": "layer2-dental-hiv-oral",
    "diagnosis": "HIV-Positive Patient \u2014 Oral Manifestations, CD4-Guided Treatment Modifications, Universal Precautions",
    "acuity": 2,
    "presentation": "HIV-Positive Patient",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with hiv-positive patient. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did the pain start?",
      "What makes it better or worse?",
      "Is it sensitive to cold? Hot? Sweet?",
      "How long does the pain last after a trigger?",
      "Does it wake you from sleep?",
      "Is there any swelling?",
      "Have you had any recent dental work?",
      "When was your last exam and cleaning?",
      "Have you had any trauma to this area?",
      "Do you grind your teeth?"
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
      "Extraoral exam \u2014 lymph nodes, TMJ",
      "Intraoral soft tissue exam",
      "Dental charting \u2014 caries, existing restorations",
      "Periodontal probing",
      "Cold/heat testing",
      "Percussion testing",
      "Palpation \u2014 periapical area",
      "Radiographic review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "HIV-associated oral candidiasis and LGE \u2014 CD4 220 (correct)",
      "Hairy leukoplakia \u2014 EBV-associated, lateral tongue, white corrugated, cannot be wiped off; this is removable candida",
      "Oral SCC in HIV \u2014 increased risk; any non-healing lesion requires biopsy",
      "Necrotizing ulcerative gingivitis \u2014 more severe, fetid odor, necrotic papillae; LGE is milder",
      "Drug-induced gingival overgrowth \u2014 calcium channel blockers, phenytoin; different morphology",
      "Acute leukemia \u2014 thrombocytopenia + gingival changes; CBC shows malignant cells"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: HIV-Positive Patient. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: HIV-associated oral candidiasis + LGE. Key learning: (1) CD4 thresholds for dental treatment: CD4 >500 = treat routinely. CD4 200-500 = standard treatment, reinforce oral hygiene, monitor closely. CD4 <200 = consult HIV provider before elective invasive procedures; consider antibiotic prophylaxis for surgery; avoid elective treatment when viral load is high and CD4 is actively declining. (2) Universal precautions: ALL patients should be treated with the same infection control standards \u2014 HIV status does not change the standard of care for PPE, sterilization, or instrument handling. It is unethical to refuse treatment based on HIV status. (3) HIV oral manifestations: oral candidiasis (most common), hairy leukoplakia (EBV, lateral tongue), linear gingival erythema, necrotizing periodontal disease, KS (Kaposi sarcoma \u2014 purple lesions), lymphoma. Oral candidiasis or hairy leukoplakia may be the first sign of HIV \u2014 the dental provider may be the first to identify HIV. (4) Drug interactions: azole antifungals + many HIV PIs (ritonavir, lopinavir) \u2014 significant CYP3A4 interactions. Check HIV medication list before prescribing antifungals. (5) Dry mouth in HIV: many ART medications cause xerostomia, which increases caries risk. Fluoride supplementation and salivary management are important in HIV-positive dental patients."
    }
  }
};
