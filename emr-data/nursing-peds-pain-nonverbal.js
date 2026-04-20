
window.EMR_DATA = {
  "patient": {
    "name": "Jordan Lee",
    "dob": "03/08/2018",
    "age": 7,
    "sex": "Non-binary",
    "mrn": "RDX-2025-24375",
    "pronouns": "They/Them",
    "insurance": "Medicaid",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Post-Tonsillectomy",
    "race": "White",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-5821",
    "email": "jordanle@email.com",
    "emergencyContact": {
      "name": "David Kim (Family)",
      "phone": "(954) 555-6775"
    }
  },
  "problems": [
    {
      "problem": "Post-op pain \u2014 nonverbal 4-year-old, FLACC 7",
      "icd": "R52",
      "onset": "2024",
      "status": "Active",
      "notes": "Lily Chen, 4F \u2014 post-appendectomy. Grimacing, guarding, crying. FLACC 7 (moderate-severe). Last analgesic 5 hours ago."
    },
    {
      "problem": "Inadequate pain control \u2014 reactive rather than proactive",
      "icd": "R52",
      "onset": "2024",
      "status": "Active",
      "notes": "Pain allowed to peak before treatment. Scheduled ATC analgesics prevent pain peaks better than reactive PRN dosing."
    },
    {
      "problem": "Parent education \u2014 behavioral pain cues",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Parents believe crying is fear not pain. Nursing education on FLACC indicators and behavioral pain recognition."
    }
  ],
  "medications": [
    {
      "name": "Acetaminophen 15mg/kg PO/PR q6h \u2014 scheduled ATC",
      "sig": "Around-the-clock \u2014 proactive pain management prevents peaks. Do NOT wait for FLACC to escalate before treating.",
      "prescriber": "Pediatric Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 scheduled"
    },
    {
      "name": "Ibuprofen 10mg/kg PO q6-8h \u2014 alternate with acetaminophen",
      "sig": "Multimodal \u2014 alternating with acetaminophen provides synergistic analgesia and reduces opioid requirements. Age >6 months, no bleeding risk.",
      "prescriber": "Pediatric Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 multimodal"
    },
    {
      "name": "Morphine 0.05-0.1mg/kg IV PRN \u2014 breakthrough FLACC \u22657",
      "sig": "Opioid for breakthrough pain unresponsive to oral analgesics. Reassess pain 30 min after administration.",
      "prescriber": "Pediatric Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active PRN"
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
      "wt": "83 lbs",
      "ht": "5'2\"",
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
      "wt": "83 lbs",
      "ht": "5'2\"",
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
      "wt": "83 lbs",
      "ht": "5'2\"",
      "bmi": 15.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Post-Tonsillectomy",
      "assessment": "Working diagnosis: Post-Tonsillectomy",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Pediatric Pain Assessment",
      "results": [
        {
          "test": "FLACC score",
          "value": "7/10",
          "unit": "",
          "ref": "0-2 relaxed; 7-10 severe",
          "flag": "H"
        },
        {
          "test": "HR",
          "value": "138",
          "unit": "bpm",
          "ref": "80-130 age 4",
          "flag": "H"
        },
        {
          "test": "RR",
          "value": "28",
          "unit": "breaths/min",
          "ref": "22-34 age 4",
          "flag": ""
        },
        {
          "test": "SpO2",
          "value": "98",
          "unit": "%",
          "ref": "\u226595%",
          "flag": ""
        },
        {
          "test": "Last analgesic",
          "value": "5 hours ago",
          "unit": "",
          "ref": "Q6h scheduled",
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
      "lot": "V2856K",
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
    "caseId": "nursing-peds-pain-nonverbal",
    "diagnosis": "Pediatric Pain \u2014 Nonverbal Child, FLACC Score 7, Inadequate Analgesia, Multimodal Protocol",
    "acuity": 3,
    "presentation": "Post-Tonsillectomy",
    "category": "pediatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with post-tonsillectomy. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "How are you feeling right now compared to earlier?",
      "Tell me about your pain \u2014 location, quality, rating.",
      "Are you having any difficulty breathing?",
      "Have you taken all your medications today?",
      "Do you have any allergies I should know about?",
      "Do you feel safe to get up?",
      "Do you have any questions about your care?",
      "Is there anything making you anxious?",
      "When did you last eat or drink?",
      "Have you had any nausea or vomiting?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this pediatric presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Vital signs trend review",
      "Pain assessment",
      "Skin integrity assessment",
      "IV access and infusion review",
      "Medication reconciliation",
      "Fall risk assessment (Morse)",
      "Neurological checks",
      "Patient education readiness assessment",
      "SBAR preparation"
    ],
    "examFindings": {
      "Vital Signs": "Trends consistent with clinical presentation",
      "Pain Assessment": "Rating documented with PQRST characteristics",
      "Skin Integrity": "Assessment per case-relevant findings",
      "Neurological": "Level of consciousness and orientation documented",
      "Fall Risk": "Morse Fall Scale calculated per case"
    },
    "ddxTargets": [
      "Post-op pain \u2014 FLACC 7, inadequate analgesia (correct)",
      "Fear/anxiety only \u2014 FLACC 7 and tachycardia support pain, not anxiety alone",
      "Wait for child to verbalize \u2014 nonverbal children cannot self-report; FLACC is the validated tool",
      "Surgical complication \u2014 FLACC helps distinguish; post-op day 1 pain is expected",
      "Opioid for all pediatric pain \u2014 multimodal (acetaminophen + ibuprofen) is first line; opioids for breakthrough only",
      "Delay assessment \u2014 active pain requires immediate assessment and intervention"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Post-Tonsillectomy. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: inadequate pediatric pain \u2014 FLACC 7. Key learning: (1) FLACC scale: Face (0-2), Legs (0-2), Activity (0-2), Cry (0-2), Consolability (0-2). Total 0-10. Score 7 = severe \u2014 immediate intervention required. Validated for ages 2 months\u20137 years. (2) Proactive vs reactive: scheduled ATC analgesics (acetaminophen \u00b1 ibuprofen) prevent pain peaks. Not waiting for FLACC to escalate is the standard of care in pediatric post-op pain. (3) Multimodal analgesia: alternating acetaminophen + ibuprofen provides synergistic analgesia and reduces opioid requirements \u2014 standard pediatric post-op practice. (4) Tachycardia as pain indicator: HR 138 above expected range for age \u2192 pain activates sympathetic response. HR normalization with analgesic confirms pain was the cause. (5) Parent education: teach behavioral pain cues (grimacing, guarding, furrowed brow) vs fear (crying that stops with distraction). Parents are key partners in pediatric pain assessment."
    }
  }
};
