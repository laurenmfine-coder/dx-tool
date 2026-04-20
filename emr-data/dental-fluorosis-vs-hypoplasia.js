
window.EMR_DATA = {
  "patient": {
    "name": "Aisha Johnson",
    "dob": "10/15/1984",
    "age": 41,
    "sex": "Female",
    "mrn": "RDX-2025-46022",
    "pronouns": "She/Her",
    "insurance": "Tricare",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "White and Brown Spots on Multiple Permanent Teeth",
    "race": "American Indian or Alaska Native",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-9298",
    "email": "aishajoh@email.com",
    "emergencyContact": {
      "name": "Tamika Williams (Family)",
      "phone": "(954) 555-8551"
    }
  },
  "problems": [
    {
      "problem": "White spot lesions \u2014 bilateral symmetric pattern on permanent teeth",
      "icd": "K00.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Jayden Williams, 10M \u2014 parents concerned about white chalky spots on upper front teeth. Symmetric distribution. No pain."
    },
    {
      "problem": "Fluoride exposure history \u2014 well water area",
      "icd": "K00.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Family on private well water. Fluoride level not tested. Early childhood exposure unknown."
    },
    {
      "problem": "Differential \u2014 fluorosis vs hypoplasia vs white spot from early decay",
      "icd": "K00.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Symmetric bilateral = fluorosis. Asymmetric focal = hypoplasia or early caries. Location and distribution are diagnostic."
    }
  ],
  "medications": [
    {
      "name": "Microabrasion \u2014 cosmetic treatment for mild fluorosis",
      "sig": "Hydrochloric acid + pumice abrasive \u2014 removes superficial enamel with fluorosis staining. Effective for white/brown surface fluorosis.",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 0,
      "status": "Consider \u2014 cosmetic"
    },
    {
      "name": "Topical fluoride \u2014 resin infiltration for white spots",
      "sig": "Icon resin infiltrant \u2014 fills enamel pores, camouflages white spot lesions. Effective for subsurface fluorosis and early caries lesions.",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 0,
      "status": "Consider \u2014 cosmetic"
    },
    {
      "name": "No systemic fluoride supplementation \u2014 well water testing first",
      "sig": "Do not prescribe fluoride supplements until well water fluoride level is measured. Excess fluoride causes further fluorosis.",
      "prescriber": "Dentistry",
      "start": "Defer",
      "refills": 0,
      "status": "Defer pending water test"
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
      "ht": "5'1\"",
      "bmi": 19.3,
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
      "ht": "5'1\"",
      "bmi": 19.3,
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
      "ht": "5'1\"",
      "bmi": 19.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for White and Brown Spots on Multiple Permanent Teeth",
      "assessment": "Working diagnosis: White and Brown Spots on Multiple Permanent Teeth",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Dental Assessment",
      "results": [
        {
          "test": "Well water fluoride level \u2014 sent",
          "value": "Pending",
          "unit": "ppm",
          "ref": "0.7 ppm optimal",
          "flag": ""
        },
        {
          "test": "Dean's fluorosis index",
          "value": "2 \u2014 moderate (white opaque >25% surface)",
          "unit": "",
          "ref": "0 = normal",
          "flag": "H"
        },
        {
          "test": "DMFT score",
          "value": "0 \u2014 caries-free",
          "unit": "",
          "ref": "0 = caries-free",
          "flag": ""
        },
        {
          "test": "Distribution pattern",
          "value": "Bilateral, symmetric, all permanent incisors",
          "unit": "",
          "ref": "Symmetric = fluorosis",
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
      "lot": "V4792K",
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
    "caseId": "dental-fluorosis-vs-hypoplasia",
    "diagnosis": "Dental Fluorosis vs Enamel Hypoplasia \u2014 Differential Diagnosis of White Spot Lesions in Child",
    "acuity": 3,
    "presentation": "White and Brown Spots on Multiple Permanent Teeth",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with white and brown spots on multiple permanent teeth. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this other presentation.",
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
      "Dental fluorosis \u2014 bilateral symmetric white opacities, well water area (correct)",
      "Enamel hypoplasia \u2014 asymmetric, focal, often single tooth; associated with local trauma or systemic illness during crown formation",
      "White spot lesions from early caries \u2014 adjacent to gingival margin, associated with plaque retention",
      "Amelogenesis imperfecta \u2014 genetic, entire dentition affected, family history",
      "Turner's tooth \u2014 single tooth, associated with primary tooth infection or trauma",
      "Tetracycline staining \u2014 intrinsic gray-brown discoloration, entire crown, band pattern"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: White and Brown Spots on Multiple Permanent Teeth. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: dental fluorosis \u2014 bilateral symmetric pattern. Key learning: (1) Fluorosis pattern recognition: bilateral, symmetric involvement of homologous teeth = fluorosis (systemic cause during crown development). Single tooth or asymmetric = local cause (hypoplasia, Turner's tooth, early caries). (2) Fluorosis mechanism: excess fluoride during amelogenesis \u2192 hypomineralization of enamel \u2192 white opaque to pitted to brown staining depending on severity. The critical window: 0-8 years when permanent crowns are forming. (3) Dean's fluorosis index: 0 (normal) \u2192 1 (questionable) \u2192 2 (very mild/mild) \u2192 3 (moderate) \u2192 4 (severe, pitting). Treatment indication increases with severity. (4) Enamel hypoplasia distinction: caused by local insult (primary tooth abscess \u2192 Turner's tooth), systemic illness (high fever), nutritional deficiency during crown formation. Typically asymmetric and involves single or few teeth. (5) Treatment options: mild fluorosis \u2192 microabrasion \u00b1 resin infiltration (Icon) for cosmetics. Moderate \u2192 composite bonding. Severe with pitting \u2192 veneer or crown. Primary concern is cosmetic \u2014 fluorosis enamel is actually more caries-resistant due to higher fluoride content."
    }
  }
};
