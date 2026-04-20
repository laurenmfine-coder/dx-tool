
window.EMR_DATA = {
  "patient": {
    "name": "Taylor Kim",
    "dob": "02/11/1983",
    "age": 42,
    "sex": "Non-binary",
    "mrn": "RDX-2025-86748",
    "pronouns": "They/Them",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Patient on Warfarin for Mechanical Heart Valve",
    "race": "American Indian or Alaska Native",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-8454",
    "email": "taylorki@email.com",
    "emergencyContact": {
      "name": "Alex Morgan (Family)",
      "phone": "(954) 555-5989"
    }
  },
  "problems": [
    {
      "problem": "Dental extraction needed \u2014 patient on warfarin for AFib",
      "icd": "I48.91",
      "onset": "2024",
      "status": "Active",
      "notes": "Thomas Park, 72M \u2014 CHA2DS2-VASc 5, warfarin INR 2.4. Symptomatic #30 needing extraction. Anticoagulation management required."
    },
    {
      "problem": "Bridging therapy decision \u2014 INR management for extraction",
      "icd": "Z79.01",
      "onset": "2024",
      "status": "Active",
      "notes": "Evidence: for simple extractions, continue warfarin WITHOUT bridging if INR \u22643.5. Local hemostasis measures are sufficient."
    },
    {
      "problem": "Post-extraction hemostasis \u2014 oxidized cellulose and suture",
      "icd": "Z79.01",
      "onset": "2024",
      "status": "Active",
      "notes": "Surgicel (oxidized cellulose) + primary closure with resorbable suture + tranexamic acid mouthwash protocol."
    }
  ],
  "medications": [
    {
      "name": "Warfarin \u2014 CONTINUE at current dose (do NOT hold)",
      "sig": "Evidence-based: simple dental extraction safe with INR up to 3.5 without holding warfarin. Stopping warfarin \u2192 thromboembolic risk (stroke in AFib). Local hemostasis is sufficient.",
      "prescriber": "Dentistry/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "CONTINUE \u2014 do not hold"
    },
    {
      "name": "Tranexamic acid 4.8% mouthwash \u2014 post-extraction",
      "sig": "Antifibrinolytic rinse \u2014 swish for 2 min, spit, every 6h x2 days. Reduces post-extraction bleeding without systemic anticoagulation reversal.",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 post-extraction"
    },
    {
      "name": "Surgicel (oxidized cellulose) \u2014 pack socket",
      "sig": "Hemostatic agent packed into extraction socket. Absorbed over 7-14 days.",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 intraoperative"
    },
    {
      "name": "Resorbable sutures \u2014 primary closure",
      "sig": "Close extraction site primarily \u2014 reduces clot displacement risk.",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 intraoperative"
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
      "bp": "88/58",
      "hr": 118,
      "rr": 24,
      "temp": "99.8\u00b0F",
      "spo2": "94%",
      "wt": "125 lbs",
      "ht": "5'5\"",
      "bmi": 20.8,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "125 lbs",
      "ht": "5'5\"",
      "bmi": 20.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "125 lbs",
      "ht": "5'5\"",
      "bmi": 20.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Patient on Warfarin for Mechanical Heart Valve",
      "assessment": "Working diagnosis: Patient on Warfarin for Mechanical Heart Valve",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Pre-Extraction Assessment",
      "results": [
        {
          "test": "INR (day of extraction)",
          "value": "2.4",
          "unit": "",
          "ref": "2.0-3.0 therapeutic for AFib",
          "flag": ""
        },
        {
          "test": "CHA2DS2-VASc score",
          "value": "5",
          "unit": "",
          "ref": "Score 0-1 = low risk",
          "flag": "H"
        },
        {
          "test": "HAS-BLED score",
          "value": "2",
          "unit": "",
          "ref": "Score <3 = low bleeding risk",
          "flag": ""
        },
        {
          "test": "Platelet count",
          "value": "188",
          "unit": "K/\u03bcL",
          "ref": "150-400",
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
      "lot": "V1472K",
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
    "caseId": "layer2-dental-anticoag-dilemma",
    "diagnosis": "Dental Extraction in Anticoagulated Patient \u2014 Warfarin Management, Bridging Therapy Decision, Local Hemostasis Protocol",
    "acuity": 1,
    "presentation": "Patient on Warfarin for Mechanical Heart Valve",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with patient on warfarin for mechanical heart valve. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Continue warfarin, use local hemostasis \u2014 evidence-based approach (correct)",
      "Hold warfarin for extraction \u2014 increases thromboembolic stroke risk; not evidence-based for simple extraction",
      "Heparin bridge \u2014 increases bleeding without reducing stroke risk; not recommended for dental procedures",
      "Reverse warfarin with vitamin K \u2014 inappropriate for elective dental procedure in therapeutic range",
      "Refuse treatment \u2014 inappropriate; procedure is safe with proper protocol",
      "Refer to oral surgeon for all anticoagulated patients \u2014 simple extractions can be done in general practice with proper protocol"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Patient on Warfarin for Mechanical Heart Valve. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: warfarin management for dental extraction. Key learning: (1) Current evidence consensus: for routine dental extractions (1-3 teeth), continue warfarin WITHOUT interruption if INR \u22643.5. Local hemostatic measures are sufficient. Interrupting warfarin to prevent dental bleeding causes MORE thromboembolic events (stroke) than it prevents bleeding complications. The risk-benefit calculation overwhelmingly favors continuation. (2) Local hemostasis protocol: oxidized cellulose (Surgicel) or gelatin sponge (Gelfoam) in socket + primary suture closure + pressure for 30-60 minutes + tranexamic acid mouthwash. This combination manages bleeding effectively at any therapeutic INR. (3) Bridging therapy: NEVER appropriate for routine dental procedures. Bridging with heparin increases bleeding complications without reducing thromboembolic risk. Reserved for major surgeries where anticoagulation must be interrupted. (4) DOAC patients: rivaroxaban, apixaban, dabigatran \u2014 timing around dental extraction: skip the morning dose on the day of extraction for standard procedures. Resume evening dose same day. No bridging needed. (5) Communication with prescribing physician: always inform the prescribing physician (cardiologist, PCP) of planned procedure. Confirm current INR day of procedure. Document the decision-making and INR value in the dental record."
    }
  }
};
