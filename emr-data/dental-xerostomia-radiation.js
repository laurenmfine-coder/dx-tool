
window.EMR_DATA = {
  "patient": {
    "name": "Sarah Kim",
    "dob": "06/18/1971",
    "age": 54,
    "sex": "Female",
    "mrn": "RDX-2025-68654",
    "pronouns": "She/Her",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Head and Neck Cancer Patient",
    "race": "Multiracial",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-1762",
    "email": "sarahkim@email.com",
    "emergencyContact": {
      "name": "Ben Tran (Family)",
      "phone": "(954) 555-2382"
    }
  },
  "problems": [
    {
      "problem": "Severe xerostomia \u2014 post-XRT salivary gland damage",
      "icd": "K11.7",
      "onset": "2024",
      "status": "Active",
      "notes": "Margaret Liu, 65F \u2014 completed radiation for parotid tumor 8 months ago. Bilateral parotid in XRT field. Mouth dry 24/7."
    },
    {
      "problem": "Radiation caries \u2014 rapidly progressive cervical decay",
      "icd": "K02.9",
      "onset": "2024",
      "status": "Active",
      "notes": "4 new cervical caries lesions in 8 months \u2014 all at gingival margin. Pattern classic for radiation caries."
    },
    {
      "problem": "Oral candidiasis \u2014 xerostomia-associated",
      "icd": "B37.0",
      "onset": "2024",
      "status": "Active",
      "notes": "White plaques on tongue and palate \u2014 Candida overgrowth from loss of salivary antimicrobial proteins."
    }
  ],
  "medications": [
    {
      "name": "Fluconazole 100mg PO daily x14 days \u2014 oral candidiasis treatment",
      "sig": "Systemic antifungal \u2014 more effective than nystatin swish/swallow for xerostomia-associated candidiasis.",
      "prescriber": "Dentistry/Oncology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "1.1% NaF custom tray application \u2014 daily",
      "sig": "Prescription fluoride gel in custom-fitted trays, 5-10 min daily. Superior caries protection vs brushing alone in xerostomia patients.",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Pilocarpine 5mg PO TID \u2014 sialogue",
      "sig": "Stimulates residual salivary tissue. Effective if ANY salivary tissue remains functional. Side effects: sweating, rhinorrhea.",
      "prescriber": "Oncology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Biot\u00e8ne gel/spray \u2014 salivary substitute PRN",
      "sig": "Artificial saliva substitute \u2014 use as needed throughout day and at bedtime. Lubricates without stimulating salivary tissue.",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 symptomatic"
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
      "wt": "100 lbs",
      "ht": "5'8\"",
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
      "wt": "100 lbs",
      "ht": "5'8\"",
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
      "wt": "100 lbs",
      "ht": "5'8\"",
      "bmi": 15.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Head and Neck Cancer Patient",
      "assessment": "Working diagnosis: Head and Neck Cancer Patient",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Post-XRT Dental Monitoring",
      "results": [
        {
          "test": "Unstimulated salivary flow rate",
          "value": "0.05",
          "unit": "mL/min",
          "ref": ">0.1 mL/min",
          "flag": "L"
        },
        {
          "test": "Stimulated salivary flow rate",
          "value": "0.3",
          "unit": "mL/min",
          "ref": ">0.7 mL/min",
          "flag": "L"
        },
        {
          "test": "Oral pH",
          "value": "5.8",
          "unit": "",
          "ref": ">6.7",
          "flag": "L"
        },
        {
          "test": "New caries lesions (6-month recall)",
          "value": "4",
          "unit": "cavitated lesions",
          "ref": "0",
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
      "lot": "V5991K",
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
    "caseId": "dental-xerostomia-radiation",
    "diagnosis": "Post-Radiation Xerostomia \u2014 Severe Salivary Gland Damage, Caries Prevention and Salivary Substitutes",
    "acuity": 3,
    "presentation": "Head and Neck Cancer Patient",
    "category": "oncologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with head and neck cancer patient. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this oncologic presentation.",
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
      "Post-XRT xerostomia \u2014 radiation caries pattern (correct)",
      "Sj\u00f6gren syndrome-related xerostomia \u2014 autoimmune, different history, anti-Ro/La antibodies",
      "Medication-induced xerostomia \u2014 anticholinergics, antihistamines; post-XRT here",
      "Dehydration \u2014 systemic, not XRT-specific pattern",
      "Salivary gland obstruction \u2014 stone or stricture, usually unilateral",
      "Diabetes-associated xerostomia \u2014 hyperglycemia-related; glucose management"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Head and Neck Cancer Patient. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-radiation xerostomia with radiation caries. Key learning: (1) Radiation-induced xerostomia mechanism: XRT doses >26 Gy to salivary glands cause acinar cell apoptosis \u2192 permanent salivary dysfunction. Parotid glands most sensitive (serous acini). Parotid-sparing IMRT (intensity-modulated radiation therapy) reduces xerostomia risk. (2) Radiation caries pattern: cervical location (at the gingival margin), rapid progression (months not years), smooth surfaces. Driven by: absence of salivary buffering \u2192 low oral pH \u2192 demineralization. This is distinct from typical caries pattern. (3) Custom fluoride tray protocol: prescription 1.1% NaF gel in custom trays worn 5-10 minutes daily. This is the standard of care for post-XRT patients. OTC fluoride toothpaste alone is insufficient for this caries risk level. (4) Caries activity monitoring: patients with post-XRT xerostomia require 3-month recall intervals (vs 6-12 months for low-risk patients). Caries can cavitate within weeks in severe xerostomia. (5) Salivary substitutes vs sialogues: pilocarpine works only if functional salivary tissue remains \u2014 ineffective if glands are completely destroyed. Biot\u00e8ne and other salivary substitutes provide symptomatic lubrication regardless of residual gland function \u2014 always useful."
    }
  }
};
