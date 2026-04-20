
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "09/21/1987",
    "age": 38,
    "sex": "Non-binary",
    "mrn": "RDX-2025-50925",
    "pronouns": "They/Them",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Generalized 5-7mm Pocketing",
    "race": "Multiracial",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-8555",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Priya Patel (Family)",
      "phone": "(954) 555-3712"
    }
  },
  "problems": [
    {
      "problem": "Generalized Stage III Grade C periodontitis",
      "icd": "K05.311",
      "onset": "2024",
      "status": "Active",
      "notes": "5-7mm pocketing generalized, bone loss 30-50%"
    },
    {
      "problem": "Type 2 diabetes mellitus \u2014 poorly controlled",
      "icd": "E11.9",
      "onset": "2018",
      "status": "Active",
      "notes": "A1c 10.2% \u2014 periodontal inflammation drives insulin resistance"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2019",
      "status": "Active",
      "notes": "On lisinopril, BP 148/92 today"
    }
  ],
  "medications": [
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Castillo",
      "start": "2019",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Glipizide 5mg daily",
      "sig": "Take 1 tablet daily",
      "prescriber": "Dr. Castillo",
      "start": "2021",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet daily",
      "prescriber": "Dr. Castillo",
      "start": "2019",
      "refills": 5,
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
      "wt": "95 lbs",
      "ht": "5'4\"",
      "bmi": 16.3,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "95 lbs",
      "ht": "5'4\"",
      "bmi": 16.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "95 lbs",
      "ht": "5'4\"",
      "bmi": 16.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Generalized 5-7mm Pocketing",
      "assessment": "Working diagnosis: Generalized 5-7mm Pocketing",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "10/20/2024",
      "panel": "Diabetes Control",
      "results": [
        {
          "test": "HbA1c",
          "value": "10.2",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "Fasting glucose",
          "value": "248",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "LDL",
          "value": "142",
          "unit": "mg/dL",
          "ref": "<100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Full Mouth Periapical and Bitewing Radiographs",
      "indication": "Periodontal evaluation, generalized pocketing",
      "findings": "Generalized horizontal bone loss averaging 30-35% at posterior teeth. Vertical bone loss 4-6mm at molars #2, #3, #14, #15, #18, #19. Furcation involvement Class II at upper molars bilaterally. Crestal bone loss at anterior teeth 2-3mm. No periapical pathology.",
      "impression": "Generalized moderate-severe periodontitis with furcation involvement. Correlates with clinical probing depths 5-7mm. Treatment planning: full mouth scaling and root planing, periodontal reassessment at 6-8 weeks."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3624K",
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
    "caseId": "dental-perio-diabetes",
    "diagnosis": "Generalized Stage III Grade C Periodontitis \u2014 Bidirectional Relationship with Uncontrolled T2DM",
    "acuity": 3,
    "presentation": "Generalized 5-7mm Pocketing",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with generalized 5-7mm pocketing. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Stage III Grade C generalized periodontitis \u2014 diabetes bidirectional (correct)",
      "Stage II periodontitis \u2014 insufficient severity for this bone loss",
      "Localized aggressive periodontitis",
      "ANUG/ANUP \u2014 necrotizing",
      "Gingival enlargement from medications (lisinopril/calcium channel blockers)",
      "Leukemia \u2014 gingival infiltrate"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Generalized 5-7mm Pocketing. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: Stage III Grade C periodontitis with uncontrolled T2DM \u2014 bidirectional relationship. Key dentistry learning points: (1) Bidirectional relationship: periodontal inflammation worsens insulin resistance (pro-inflammatory cytokines IL-6, TNF-\u03b1 impair insulin signaling). Treating periodontitis reduces A1c by approximately 0.4% \u2014 similar to adding a second oral antidiabetic agent. (2) Staging (AAP 2017): Stage I-IV based on severity (probing depths, bone loss, tooth loss); Grading A/B/C based on rate of progression and risk factors. Grade C = rapid progression, evidence of glycemic risk factor. (3) Treatment modification for uncontrolled DM: prophylactic antibiotics NOT routinely needed, but infection risk is higher. Healing is impaired \u2014 the patient should be counseled that outcomes are better if A1c is improved. (4) Communication with endocrinologist: 'Your patient has Stage III periodontitis which is contributing to their difficulty achieving glycemic control. Following periodontal treatment, we expect a reduction in A1c.' (5) Monitoring schedule: diabetic patients require quarterly periodontal maintenance (3-month intervals) rather than standard 6-month recall."
    }
  }
};
