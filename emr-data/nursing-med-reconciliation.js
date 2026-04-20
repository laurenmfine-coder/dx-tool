
window.EMR_DATA = {
  "patient": {
    "name": "Emmanuel Obi",
    "dob": "11/07/1959",
    "age": 66,
    "sex": "Male",
    "mrn": "RDX-2025-73047",
    "pronouns": "He/Him",
    "insurance": "Aetna HMO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Discharge HF Patient",
    "race": "Hispanic or Latino",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-6400",
    "email": "emmanuel@email.com",
    "emergencyContact": {
      "name": "Alex Morgan (Family)",
      "phone": "(954) 555-8404"
    }
  },
  "problems": [
    {
      "problem": "Duplicate metoprolol \u2014 succinate (home) + tartrate (admission orders)",
      "icd": "Z79.899",
      "onset": "2024",
      "status": "Active",
      "notes": "Charles Kim, 72M \u2014 home: metoprolol succinate 50mg daily. Admission orders: metoprolol tartrate 25mg BID also written. Total dose doubled."
    },
    {
      "problem": "Formulation confusion \u2014 succinate vs tartrate are same drug",
      "icd": "T44.7X5A",
      "onset": "2024",
      "status": "Active",
      "notes": "Succinate = extended-release once daily. Tartrate = immediate-release BID-TID. Both ordered simultaneously = double dosing."
    },
    {
      "problem": "Nursing interception \u2014 held before administration, prescriber notified",
      "icd": "Z79.899",
      "onset": "2024",
      "status": "Active",
      "notes": "Nurse identified discrepancy, held tartrate dose, notified prescriber. Classic near-miss \u2014 caught before patient harm."
    }
  ],
  "medications": [
    {
      "name": "Metoprolol succinate 50mg daily \u2014 continue HOME dose ONLY",
      "sig": "One metoprolol product at home dose equivalent. Prescriber notified, tartrate order discontinued.",
      "prescriber": "Medicine (corrected)",
      "start": "2024",
      "refills": 5,
      "status": "Active \u2014 corrected"
    },
    {
      "name": "HOLD metoprolol tartrate 25mg BID \u2014 duplicate",
      "sig": "Duplicate identified and held by nursing pending prescriber correction.",
      "prescriber": "Nursing \u2014 HELD",
      "start": "HELD",
      "refills": 0,
      "status": "HELD \u2014 duplicate"
    },
    {
      "name": "Incident report \u2014 near-miss filed",
      "sig": "Document near-miss in hospital reporting system. No patient harm. System vulnerability identified for quality improvement.",
      "prescriber": "Nursing",
      "start": "2024",
      "refills": 0,
      "status": "Filed"
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
      "wt": "74 lbs",
      "ht": "5'4\"",
      "bmi": 12.7,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "74 lbs",
      "ht": "5'4\"",
      "bmi": 12.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "74 lbs",
      "ht": "5'4\"",
      "bmi": 12.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Discharge HF Patient",
      "assessment": "Working diagnosis: Discharge HF Patient",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Medication Reconciliation",
      "results": [
        {
          "test": "Home medication verified",
          "value": "Metoprolol succinate 50mg daily \u2014 confirmed with pharmacy and PCP",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Admission order reviewed",
          "value": "Metoprolol tartrate 25mg BID also ordered \u2014 duplicate identified",
          "unit": "",
          "ref": "",
          "flag": "H"
        },
        {
          "test": "Resting HR",
          "value": "62",
          "unit": "bpm",
          "ref": "60-100",
          "flag": ""
        },
        {
          "test": "BP",
          "value": "122/74",
          "unit": "mmHg",
          "ref": "<130/80",
          "flag": ""
        },
        {
          "test": "Double dose consequence",
          "value": "Symptomatic bradycardia risk if both given",
          "unit": "",
          "ref": "",
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
      "lot": "V7238K",
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
    "caseId": "nursing-med-reconciliation",
    "diagnosis": "Medication Reconciliation Near-Miss \u2014 Duplicate Metoprolol, Nursing Interception, Incident Report",
    "acuity": 3,
    "presentation": "Discharge HF Patient",
    "category": "pharmacologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with discharge hf patient. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this pharmacologic presentation.",
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
      "Duplicate metoprolol \u2014 nursing reconciliation interception (correct)",
      "Intentional dose increase \u2014 communication failure; verify before giving",
      "Give both as ordered \u2014 nurses have duty to hold potentially unsafe orders and verify",
      "Therapeutic interchange \u2014 succinate and tartrate are same drug; duplicate if both given",
      "Metoprolol toxicity \u2014 bradycardia not yet present; caught before administration",
      "Document and administer \u2014 never administer a medication appearing to be an error without verification"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Discharge HF Patient. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: medication reconciliation near-miss \u2014 duplicate metoprolol. Key learning: (1) Medication reconciliation: comparing home medication list to admission orders to identify discrepancies \u2014 omissions, duplications, dose differences, wrong formulations. Required at every care transition (Joint Commission). (2) Metoprolol succinate vs tartrate: succinate = extended-release once daily; tartrate = immediate-release BID-TID. Different formulations, same drug \u2014 both ordered simultaneously = double dosing. Common error at care transitions. (3) Nursing right to hold: nurses have professional and legal obligation NOT to administer medications they identify as potentially unsafe. Prescriber must be notified, order clarified, and documentation completed. 'Following orders' is not a defense. (4) Near-miss reporting: always report near-misses \u2014 they identify system vulnerabilities before they cause patient harm. Near-miss reporting is a patient safety culture responsibility, not a punitive measure. (5) High-alert medications: beta-blockers are on ISMP high-alert lists \u2014 errors cause significant cardiac consequences. Extra verification steps at every transition."
    }
  }
};
