
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
      "problem": "Extraction needed \u2014 tooth #14, non-restorable",
      "icd": "K08.409",
      "onset": "2024",
      "status": "Active",
      "notes": "Fractured below gumline, non-restorable. Extraction required."
    },
    {
      "problem": "Atrial fibrillation \u2014 on warfarin",
      "icd": "I48.0",
      "onset": "2021",
      "status": "Active",
      "notes": "INR 2.4 \u2014 within therapeutic range 2.0-3.0. Do NOT stop warfarin."
    },
    {
      "problem": "Stroke risk if anticoagulation interrupted",
      "icd": "I63.9",
      "onset": "2021",
      "status": "Active",
      "notes": "CHA2DS2-VASc score 4 \u2014 stopping warfarin perioperatively carries meaningful stroke risk"
    }
  ],
  "medications": [
    {
      "name": "Warfarin \u2014 CONTINUE through extraction",
      "sig": "Do NOT stop. Local hemostatic measures are adequate for dental extraction at INR 2.4.",
      "prescriber": "Cardiology",
      "start": "2021",
      "refills": 11,
      "status": "Active \u2014 continue"
    },
    {
      "name": "Tranexamic acid mouthwash 5% \u2014 post-extraction",
      "sig": "Rinse with 10mL for 2 minutes, spit, q6h x2 days \u2014 local antifibrinolytic",
      "prescriber": "Dr. Voss DDS",
      "start": "11/2024",
      "refills": 0,
      "status": "Active post-extraction"
    },
    {
      "name": "Oxidized cellulose (Surgicel) \u2014 socket packing",
      "sig": "Apply to socket at time of extraction \u2014 local hemostatic agent",
      "prescriber": "Dr. Voss DDS",
      "start": "11/2024",
      "refills": 0,
      "status": "Used intraoperatively"
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
      "date": "11/16/2024",
      "panel": "Pre-Extraction INR",
      "results": [
        {
          "test": "INR",
          "value": "2.4",
          "unit": "",
          "ref": "2.0-3.0 therapeutic for AFib",
          "flag": ""
        },
        {
          "test": "PT",
          "value": "28.4",
          "unit": "sec",
          "ref": "11-13.5 normal; 24-34 typical therapeutic",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Periapical X-ray \u2014 Tooth #14",
      "indication": "Non-restorable fracture \u2014 extraction planning",
      "findings": "Tooth #14: vertical root fracture with periapical radiolucency. Bone loss 40% mesial. Non-restorable.",
      "impression": "Vertical root fracture \u2014 extraction is the only treatment option. Pre-extraction INR acceptable for minor oral surgery with local measures."
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
    "diagnosis": "Dental Extraction \u2014 Patient on Warfarin INR 2.4, Procedure Management Decision",
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
      "Continue warfarin \u2014 local hemostasis for simple extraction (correct)",
      "Stop warfarin 3-5 days pre-extraction \u2014 INCORRECT, outdated, increases stroke risk",
      "Bridge with heparin \u2014 appropriate only for mechanical heart valves, not AFib",
      "Refuse extraction \u2014 inadequate; tooth needs removal",
      "Request INR <1.5 before proceeding \u2014 overly conservative, not evidence-based",
      "Vitamin K to reverse \u2014 only for INR >3.5 or emergency bleeding"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Extraction Needed. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: extraction with therapeutic anticoagulation \u2014 local measures are the answer. Key dentistry learning: (1) Evidence-based consensus: simple dental extractions can be performed safely at INR \u22643.5 with local hemostatic measures. Stopping warfarin perioperatively increases stroke risk WITHOUT meaningfully reducing bleeding risk with local measures. (2) Local hemostatic measures: primary closure (sutures), oxidized cellulose packing (Surgicel), collagen plug, tranexamic acid mouthwash, pressure biting on gauze x60 min. These control socket bleeding effectively. (3) The historic 'stop warfarin' advice was given before evidence showed: (a) bleeding from socket is controllable locally; (b) stroke risk from anticoagulation interruption in AFib with CHA2DS2-VASc \u22652 is clinically meaningful. (4) When to actually hold anticoagulation: INR >3.5 (reschedule, contact prescriber), complex surgical extractions involving multiple teeth and flap reflection, patient with poorly controlled anticoagulation instability. (5) Postoperative instructions: no rinsing for 24h, no alcohol, avoid hot food, bite on gauze 60 min. If bleeding restarts: bite on gauze for 30 min, apply tea bag (tannic acid hemostatic). Call if bleeding continues >1 hour."
    }
  }
};
