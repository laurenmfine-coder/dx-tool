
window.EMR_DATA = {
  "patient": {
    "name": "Ben Tran",
    "dob": "07/22/1993",
    "age": 32,
    "sex": "Male",
    "mrn": "RDX-2025-66395",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Extraction Needed",
    "race": "White",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-7658",
    "email": "bentran@email.com",
    "emergencyContact": {
      "name": "Alex Morgan (Family)",
      "phone": "(954) 555-9308"
    }
  },
  "problems": [
    {
      "problem": "Dental extraction needed \u2014 tooth #14 fractured",
      "icd": "K08.419",
      "onset": "2024",
      "status": "Active",
      "notes": "Unrestorable fracture \u2014 extraction required. Patient on warfarin for mechanical heart valve."
    },
    {
      "problem": "Mechanical mitral valve \u2014 on warfarin",
      "icd": "Z95.2",
      "onset": "2018",
      "status": "Active",
      "notes": "INR 2.4 \u2014 therapeutic range 2.5-3.5 for mechanical valve. Do NOT stop warfarin."
    },
    {
      "problem": "Extraction anticoagulation dilemma \u2014 do NOT bridge or stop",
      "icd": "Z79.01",
      "onset": "2018",
      "status": "Active",
      "notes": "Evidence: warfarin continuation safer than stopping/bridging for dental procedures"
    }
  ],
  "medications": [
    {
      "name": "Warfarin \u2014 CONTINUE at current dose",
      "sig": "Do NOT stop for dental extraction. Consult with cardiologist confirms continuation.",
      "prescriber": "Cardiology",
      "start": "2018",
      "refills": 11,
      "status": "Active \u2014 DO NOT STOP"
    },
    {
      "name": "Tranexamic acid 4.8% mouthwash (post-extraction hemostasis)",
      "sig": "Rinse with 10mL for 2 minutes, 4 times daily x2 days post-extraction \u2014 antifibrinolytic",
      "prescriber": "Dr. Voss DDS",
      "start": "11/2024",
      "refills": 0,
      "status": "Active post-procedure"
    },
    {
      "name": "Gelfoam + Surgicel local hemostatic packing",
      "sig": "Applied to socket at time of extraction",
      "prescriber": "Dr. Voss DDS",
      "start": "11/2024",
      "refills": 0,
      "status": "Applied"
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
      "wt": "105 lbs",
      "ht": "5'10\"",
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
      "wt": "105 lbs",
      "ht": "5'10\"",
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
      "wt": "105 lbs",
      "ht": "5'10\"",
      "bmi": 15.1,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Extraction Needed",
      "assessment": "Working diagnosis: Extraction Needed",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Pre-Extraction Labs",
      "results": [
        {
          "test": "INR",
          "value": "2.4",
          "unit": "",
          "ref": "2.5-3.5 target for mechanical valve",
          "flag": "L"
        },
        {
          "test": "PT",
          "value": "26.8",
          "unit": "sec",
          "ref": "11-13.5 (normal)",
          "flag": "H"
        },
        {
          "test": "Platelets",
          "value": "188",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Periapical X-ray \u2014 Tooth #14",
      "indication": "Pre-extraction planning",
      "findings": "Tooth #14: vertical root fracture, necrotic pulp, periapical lucency. Not restorable. Simple single-rooted extraction anticipated.",
      "impression": "Tooth #14 requiring extraction. Simple extraction \u2014 limited surgical trauma minimizes bleeding risk."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3690K",
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
    "caseId": "dental-extraction-anticoag",
    "diagnosis": "Dental Extraction in Anticoagulated Patient \u2014 INR 2.4, Proceed with Local Hemostatic Measures",
    "acuity": 3,
    "presentation": "Extraction Needed",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with extraction needed. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Continue warfarin, use local hemostatic measures (correct)",
      "Stop warfarin 3-5 days before extraction \u2014 INCORRECT, thrombosis risk",
      "Bridge with LMWH \u2014 INCORRECT for dental procedures, increases bleeding",
      "Transfuse FFP to normalize INR \u2014 INCORRECT, inappropriate over-treatment",
      "Reduce warfarin dose \u2014 INCORRECT, risks subtherapeutic anticoagulation of mechanical valve",
      "Refer to hospital for extraction under hematology supervision \u2014 only for complex surgical cases"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Extraction Needed. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: anticoagulated patient requiring extraction \u2014 continue warfarin with local hemostasis. Key dentistry learning: (1) Evidence base: Multiple RCTs show continuing warfarin with local hemostatic measures is SAFER than stopping. Stopping warfarin for dental procedures creates embolic risk (mechanical valve thrombosis = 1-4% risk per month unprotected) that far outweighs bleeding risk from simple extraction. (2) INR threshold for dental procedures: simple extractions safe with INR <3.5-4.0. This patient INR 2.4 = proceed. Complex surgical procedures (impacted molars, bone surgery) \u2192 consider INR <3.0 and consult hematology/cardiology. (3) Local hemostatic protocol: resorbable sutures, oxidized cellulose (Surgicel), collagen plug, tranexamic acid rinse, sustained pressure. These measures make warfarin continuation safe for single simple extractions. (4) Tranexamic acid mouthwash: inhibits fibrinolysis locally. Strong evidence reduces post-extraction bleeding in anticoagulated patients. (5) Consult before proceeding: cardiologist communication recommended ('patient has mechanical valve on warfarin, need extraction, plan to continue anticoagulation with local hemostasis') \u2014 document the conversation and approval."
    }
  }
};
