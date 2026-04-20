
window.EMR_DATA = {
  "patient": {
    "name": "David Kim",
    "dob": "11/25/1991",
    "age": 34,
    "sex": "Male",
    "mrn": "RDX-2025-47893",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Kevin Torres",
    "race": "Middle Eastern",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-4111",
    "email": "davidkim@email.com",
    "emergencyContact": {
      "name": "James Park (Family)",
      "phone": "(954) 555-4588"
    }
  },
  "problems": [
    {
      "problem": "Chronic pain \u2014 opioid-tolerant patient, admitted for unrelated reason",
      "icd": "G89.29",
      "onset": "2022",
      "status": "Active",
      "notes": "Kevin Torres, oxycodone 30mg/day at home \u2014 hospital formulary dose equivalent required"
    },
    {
      "problem": "Opioid tolerance \u2014 home dose must be continued to prevent withdrawal",
      "icd": "F11.20",
      "onset": "2022",
      "status": "Active",
      "notes": "Tolerance is NOT addiction \u2014 must maintain home dose or prescribe equivalent"
    },
    {
      "problem": "Undertreated pain \u2014 nursing failure to reassess after analgesic",
      "icd": "G89.29",
      "onset": "2024",
      "status": "Active",
      "notes": "Pain 8/10 after morphine 2mg IV \u2014 inadequate dose for opioid-tolerant patient"
    }
  ],
  "medications": [
    {
      "name": "Morphine 4mg IV q4h scheduled (equianalgesic to home oxycodone)",
      "sig": "Oxycodone 30mg/day = ~45mg oral morphine/day = ~15mg IV morphine/day. 4mg q4h = 24mg/day.",
      "prescriber": "Pain Management",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 equianalgesic calculation"
    },
    {
      "name": "Oxycodone 15mg PO q4h PRN breakthrough (preferred oral)",
      "sig": "When able to take PO \u2014 continue home opioid class",
      "prescriber": "Pain Management",
      "start": "11/2024",
      "refills": 0,
      "status": "Active PRN"
    },
    {
      "name": "Non-opioid multimodal \u2014 acetaminophen 650mg q6h scheduled",
      "sig": "Scheduled \u2014 opioid-sparing adjunct",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
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
      "wt": "82 lbs",
      "ht": "5'6\"",
      "bmi": 13.2,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "82 lbs",
      "ht": "5'6\"",
      "bmi": 13.2,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "82 lbs",
      "ht": "5'6\"",
      "bmi": 13.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Kevin Torres",
      "assessment": "Working diagnosis: Kevin Torres",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Pain/Opioid Safety Panel",
      "results": [
        {
          "test": "Urine drug screen",
          "value": "Oxycodone positive \u2014 consistent with prescription",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "1.2",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        },
        {
          "test": "Hepatic function panel",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
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
      "lot": "V9450K",
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
    "caseId": "arc-pain-nursing",
    "diagnosis": "Chronic Pain Patient Admitted for Unrelated Illness \u2014 Nursing: Opioid Safety, Pain Assessment, Pseudoaddiction vs Tolerance",
    "acuity": 3,
    "presentation": "Kevin Torres",
    "category": "musculoskeletal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with kevin torres. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this musculoskeletal presentation.",
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
      "Opioid-tolerant patient \u2014 home dose continuation required (correct)",
      "Opioid-seeking behavior \u2014 tolerance \u2260 addiction, reassess with equianalgesic calculation",
      "Opioid overdose risk at home doses \u2014 tolerance protects against respiratory depression",
      "Underprescribing \u2014 most common nursing error in opioid-tolerant patients",
      "Pain as drug-seeking behavior \u2014 stigmatizing misclassification",
      "Opioid rotation needed \u2014 no evidence of tolerance failure"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Kevin Torres. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: opioid-tolerant patient with undertreated pain. Key nursing learning: (1) Opioid tolerance is not addiction. Tolerance = physiologic adaptation requiring higher doses for same effect. Addiction = compulsive use despite harm. A patient on chronic opioids for legitimate pain requiring their home dose in the hospital is demonstrating tolerance \u2014 not drug-seeking. (2) Equianalgesic dosing: the pharmacist is the resource. For this patient: oral oxycodone 30mg/day \u00f7 1.5 (IV:oral opioid ratio) = 20mg IV morphine equivalent/day. Nurses must advocate for adequate equivalent dosing. (3) Pain reassessment: document pain score 30-60 minutes after any analgesic intervention. Pain still 7/10 after morphine 2mg IV = INADEQUATE \u2014 escalate to prescriber. Do not wait for next scheduled dose. (4) Pseudoaddiction: undertreated pain creates behaviors that LOOK like addiction (clock-watching, demanding pain meds) but resolve when pain is adequately treated. The solution is better pain management, not labeling. (5) Naloxone at bedside: for ANY patient on scheduled opioids in the hospital \u2014 have naloxone on the floor unit regardless of tolerance status."
    }
  }
};
