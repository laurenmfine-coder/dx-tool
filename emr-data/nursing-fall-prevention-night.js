
window.EMR_DATA = {
  "patient": {
    "name": "Maria Santos",
    "dob": "08/18/1946",
    "age": 79,
    "sex": "Female",
    "mrn": "RDX-2025-94167",
    "pronouns": "She/Her",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Dementia",
    "race": "Black or African American",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-3020",
    "email": "mariasan@email.com",
    "emergencyContact": {
      "name": "Miguel Santos (Family)",
      "phone": "(954) 555-5523"
    }
  },
  "problems": [
    {
      "problem": "High fall risk \u2014 Morse Fall Score 65, dementia",
      "icd": "Z91.81",
      "onset": "2024",
      "status": "Active",
      "notes": "82yo with Alzheimer's dementia, confused at 0200 attempting to get out of bed unassisted"
    },
    {
      "problem": "Nighttime delirium superimposed on dementia",
      "icd": "F05",
      "onset": "2024",
      "status": "Active",
      "notes": "Hospital delirium worsens sundowning \u2014 orientation interventions, minimize sedative medications"
    },
    {
      "problem": "Hip fracture risk \u2014 osteoporosis + fall-prone",
      "icd": "M81.0",
      "onset": "2022",
      "status": "Active",
      "notes": "Prior fall with rib fracture 2021. Current admission for pneumonia. Fall would be catastrophic."
    }
  ],
  "medications": [
    {
      "name": "Melatonin 3mg PO QHS \u2014 sleep support",
      "sig": "Take at bedtime \u2014 promotes circadian rhythm, minimal side effects",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Haloperidol 0.5mg PO PRN (LAST RESORT for safety only)",
      "sig": "PRN \u2014 Beers Criteria in elderly, use ONLY if imminent safety risk. Not routine.",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN \u2014 last resort"
    },
    {
      "name": "Diphenhydramine \u2014 AVOID (was self-medicating at home)",
      "sig": "HOLD \u2014 anticholinergic, causes paradoxical agitation in elderly, increases fall risk",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "HELD"
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
      "wt": "104 lbs",
      "ht": "5'9\"",
      "bmi": 15.4,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "104 lbs",
      "ht": "5'9\"",
      "bmi": 15.4,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "104 lbs",
      "ht": "5'9\"",
      "bmi": 15.4,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Dementia",
      "assessment": "Working diagnosis: Dementia",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Fall Risk Evaluation",
      "results": [
        {
          "test": "Sodium",
          "value": "132",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Glucose",
          "value": "94",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": ""
        },
        {
          "test": "UA \u2014 WBC",
          "value": "8",
          "unit": "cells/HPF",
          "ref": "<5",
          "flag": "H"
        },
        {
          "test": "TSH",
          "value": "2.8",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
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
      "lot": "V5840K",
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
    "caseId": "nursing-fall-prevention-night",
    "diagnosis": "Nighttime Fall Risk \u2014 82yo Dementia, Morse Fall Score 65, 0200 Delirium Episode",
    "acuity": 2,
    "presentation": "Dementia",
    "category": "geriatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with dementia. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this geriatric presentation.",
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
      "Nighttime fall risk \u2014 delirium + dementia + hyponatremia (correct)",
      "Use bed alarm only \u2014 inadequate for Morse 65 with delirium",
      "Restraints to prevent fall \u2014 physical restraints worsen delirium and cause injury",
      "Chemical restraint as first-line \u2014 Beers Criteria, never first-line",
      "No special precautions needed \u2014 Morse 65 requires institutional fall protocol",
      "Family at bedside 24/7 \u2014 unrealistic, system-level interventions required"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Dementia. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: high nighttime fall risk \u2014 multi-factorial, nursing prevention protocol. Key nursing learning: (1) Morse Fall Scale \u226545 = high risk. Required nursing actions: fall prevention protocol documented in care plan, bed in lowest position + wheels locked + call light within reach, non-skid socks on, hourly rounding at night, fall risk armband and door sign. (2) This patient's contributing factors: dementia baseline + hyponatremia (Na 132 \u2014 contributes to confusion) + hospital environment unfamiliarity. Address the correctable: Na replacement order, reorientation interventions, limit nighttime interruptions. (3) Delirium prevention at 0200: when patient is found confused: (a) Turn on nighttime light (not overhead \u2014 dim), (b) Calm reassuring voice, call patient by name, (c) Reorient: 'You're in the hospital, it's the middle of the night, you're safe,' (d) Offer water or warm blanket, (e) Keep patient in bed \u2014 do NOT leave unattended. (4) Diphenhydramine: commonly used at home as sleep aid. STOP in hospital. Causes paradoxical agitation in elderly, severe anticholinergic effects, increases fall risk. Document hold prominently. (5) Bed alarm vs sitter: bed alarm alerts AFTER patient is getting up \u2014 inadequate for high fall risk with delirium. 1:1 sitter may be needed if q1h rounds are insufficient. Nursing supervisor escalation for sitter order."
    }
  }
};
