
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "06/11/1997",
    "age": 28,
    "sex": "Non-binary",
    "mrn": "RDX-2025-69462",
    "pronouns": "They/Them",
    "insurance": "Medicaid",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Postpartum Day 1",
    "race": "Multiracial",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-3113",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Nicole Okafor (Family)",
      "phone": "(954) 555-9787"
    }
  },
  "problems": [
    {
      "problem": "Postpartum preeclampsia with severe features",
      "icd": "O14.15",
      "onset": "2024",
      "status": "Active",
      "notes": "BP 158/102, headache, RUQ pain, oliguria \u2014 postpartum day 1"
    },
    {
      "problem": "Recent vaginal delivery \u2014 39 weeks",
      "icd": "Z37.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Uncomplicated delivery, normotensive throughout labor"
    }
  ],
  "medications": [
    {
      "name": "Magnesium sulfate 4g IV loading dose THEN 2g/hr infusion",
      "sig": "Loading dose 4g IV over 20 minutes, then continuous infusion 2g/hr",
      "prescriber": "OB team",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 seizure prophylaxis"
    },
    {
      "name": "Labetalol 20mg IV q20min PRN",
      "sig": "IV push for BP >160/110 \u2014 give 20mg, may repeat x2",
      "prescriber": "OB team",
      "start": "11/2024",
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
      "bp": "88/58",
      "hr": 118,
      "rr": 24,
      "temp": "99.8\u00b0F",
      "spo2": "94%",
      "wt": "81 lbs",
      "ht": "5'0\"",
      "bmi": 15.8,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "81 lbs",
      "ht": "5'0\"",
      "bmi": 15.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "81 lbs",
      "ht": "5'0\"",
      "bmi": 15.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Postpartum Day 1",
      "assessment": "Working diagnosis: Postpartum Day 1",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "Preeclampsia Labs STAT",
      "results": [
        {
          "test": "Platelet count",
          "value": "98",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": "L"
        },
        {
          "test": "LDH",
          "value": "892",
          "unit": "U/L",
          "ref": "122-222",
          "flag": "H"
        },
        {
          "test": "AST",
          "value": "124",
          "unit": "U/L",
          "ref": "10-40",
          "flag": "H"
        },
        {
          "test": "ALT",
          "value": "98",
          "unit": "U/L",
          "ref": "7-56",
          "flag": "H"
        },
        {
          "test": "Urine protein",
          "value": "3+",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.2",
          "unit": "mg/dL",
          "ref": "0.5-1.1",
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
      "lot": "V8511K",
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
    "caseId": "nursing-postpartum-emergency",
    "diagnosis": "Postpartum Preeclampsia with Severe Features \u2014 Day 1 Post-Delivery",
    "acuity": 1,
    "presentation": "Postpartum Day 1",
    "category": "obstetric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with postpartum day 1. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this obstetric presentation.",
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
      "Postpartum preeclampsia with severe features (correct)",
      "Migraine \u2014 known history, dismissed too quickly",
      "HELLP syndrome \u2014 platelets and LFTs elevated",
      "Postpartum cardiomyopathy",
      "Hypertensive urgency \u2014 non-pregnancy related",
      "Eclampsia \u2014 seizures not yet occurred but risk present"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Postpartum Day 1. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: postpartum preeclampsia with severe features. Key nursing learning points: (1) Preeclampsia does NOT end with delivery \u2014 25-40% of eclampsia cases occur postpartum, most within 48 hours. BP must be monitored closely postpartum even after uncomplicated normotensive delivery. (2) Severe features: BP \u2265160/110 (yes), headache unresponsive to medication (yes), RUQ/epigastric pain (yes), oliguria (yes). Any ONE severe feature requires magnesium seizure prophylaxis. (3) Migraine history does NOT change the clinical picture here \u2014 the constellation of BP + headache + RUQ pain + oliguria in a postpartum patient is preeclampsia until proven otherwise. Anchoring on 'she gets migraines' is a classic nursing error. (4) Magnesium toxicity signs the RN monitors: loss of patellar reflex (first sign), respiratory depression, then cardiac arrest. Antidote: calcium gluconate 1g IV. (5) SBAR to OB: 'I need you at bedside immediately \u2014 BP 158/102 with headache and RUQ pain, platelets 98K and LDH 892, magnesium running, patient is at risk for eclampsia.'"
    }
  }
};
