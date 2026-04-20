
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "02/10/1965",
    "age": 60,
    "sex": "Non-binary",
    "mrn": "RDX-2025-87336",
    "pronouns": "They/Them",
    "insurance": "Tricare",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Night Float Handoff",
    "race": "Black or African American",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-6219",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Mei Lin (Family)",
      "phone": "(954) 555-8534"
    }
  },
  "problems": [
    {
      "problem": "PE diagnosed late \u2014 critical D-dimer missed in handoff",
      "icd": "I26.99",
      "onset": "2024",
      "status": "Active",
      "notes": "D-dimer 3,400 resulted at 0300 \u2014 not communicated in morning handoff. Diagnosis delayed 6 hours."
    },
    {
      "problem": "Night float handoff omission \u2014 'stable patient' framing",
      "icd": "Y83.8",
      "onset": "2024",
      "status": "Active",
      "notes": "Night nurse verbal: 'Stable, nothing new.' Pending critical result was not mentioned."
    },
    {
      "problem": "DVT \u2014 source for PE",
      "icd": "I82.401",
      "onset": "2024",
      "status": "Active",
      "notes": "Post-surgical patient, Day 3 \u2014 DVT prophylaxis documented but subtherapeutic"
    }
  ],
  "medications": [
    {
      "name": "Heparin 80 units/kg IV bolus THEN 18 units/kg/hr infusion",
      "sig": "Initiated after PE confirmed on CT \u2014 anti-factor Xa target 0.3-0.7",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Enoxaparin 40mg SQ daily \u2014 had been ordered for prophylaxis",
      "sig": "DVT prophylaxis \u2014 was being given but PE occurred",
      "prescriber": "Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 inadequate for treatment now"
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
      "wt": "91 lbs",
      "ht": "5'6\"",
      "bmi": 14.7,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "91 lbs",
      "ht": "5'6\"",
      "bmi": 14.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "91 lbs",
      "ht": "5'6\"",
      "bmi": 14.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Night Float Handoff",
      "assessment": "Working diagnosis: Night Float Handoff",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "PE Workup",
      "results": [
        {
          "test": "D-dimer (resulted 0300)",
          "value": "3,400",
          "unit": "ng/mL",
          "ref": "<500",
          "flag": "H"
        },
        {
          "test": "Troponin I",
          "value": "0.12",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "BNP",
          "value": "312",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "ABG \u2014 pO2",
          "value": "68",
          "unit": "mmHg",
          "ref": "75-100",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Pulmonary Angiography",
      "indication": "Elevated D-dimer + tachycardia + hypoxia \u2014 delayed by handoff omission",
      "findings": "Bilateral pulmonary emboli \u2014 right main pulmonary artery and right lower lobe segmental arteries. Right ventricular enlargement suggesting RV strain.",
      "impression": "Bilateral PE with RV strain. Anticoagulation initiated. Consider catheter-directed thrombolysis consultation if hemodynamic deterioration."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V6023K",
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
    "caseId": "layer2-nursing-handoff-omission",
    "diagnosis": "Handoff Safety Failure \u2014 Critical Lab Value Missed in Night-to-Day Transition, PE Diagnosed Late",
    "acuity": 2,
    "presentation": "Night Float Handoff",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with night float handoff. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this other presentation.",
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
      "PE \u2014 handoff failure delayed diagnosis (correct)",
      "Normal D-dimer \u2014 clearly elevated, diagnosis delayed not missed",
      "Atelectasis \u2014 D-dimer + CT-PE positive",
      "Post-op inflammation causing D-dimer elevation \u2014 magnitude 3,400 too high for non-clot",
      "Sepsis causing RV strain \u2014 CT-PE confirms PE",
      "DVT only without PE \u2014 CT confirms PE"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Night Float Handoff. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: PE with diagnostic delay from handoff omission \u2014 critical patient safety case. Key nursing learning: (1) SBAR handoff requires: Situation + Background + Assessment + Recommendation. 'Stable' is not a handoff. For each patient: (a) Any new results overnight? (b) Any pending critical results? (c) Any medication changes? (d) What needs to happen in the next 4 hours? Pending results are explicit handoff items, not assumed to be seen. (2) Critical value follow-up: D-dimer 3,400 resulted at 0300. Night nurse received the result. Night nurse's responsibility: notify physician at 0300 (critical value = physician notification required), document call, document physician response or lack of. This is not optional at any hour. (3) The 'stable patient' cognitive shortcut: when a patient is 'expected' to be stable, nurses sometimes mentally filter abnormal data as likely irrelevant. This is availability bias + anchoring on prior assessment. New data requires fresh assessment, not contextual filtering. (4) Incident report: delay in PE diagnosis from handoff failure = reportable adverse event. This is a system failure, not individual blame. The incident report asks: What was the contributing system factor? Answer: no standardized written handoff with pending results field. (5) ISBAR-R (Introduce, Situation, Background, Assessment, Recommendation, Read-back): effective written + verbal handoff reduces handoff omissions by 30% in RCT evidence."
    }
  }
};
