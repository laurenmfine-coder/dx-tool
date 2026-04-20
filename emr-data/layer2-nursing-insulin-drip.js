
window.EMR_DATA = {
  "patient": {
    "name": "Maria Santos",
    "dob": "01/15/1957",
    "age": 68,
    "sex": "Female",
    "mrn": "RDX-2025-76674",
    "pronouns": "She/Her",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "ICU Patient",
    "race": "White",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-8486",
    "email": "mariasan@email.com",
    "emergencyContact": {
      "name": "Carmen Rivera (Family)",
      "phone": "(954) 555-3300"
    }
  },
  "problems": [
    {
      "problem": "Hypoglycemia \u2014 glucose 48 on insulin drip",
      "icd": "E16.0",
      "onset": "2024",
      "status": "Active",
      "notes": "ICU patient on insulin drip for stress hyperglycemia \u2014 glucose fell to 48. Symptomatic."
    },
    {
      "problem": "Insulin infusion protocol deviation \u2014 rate not adjusted for feeding change",
      "icd": "Y63.6",
      "onset": "2024",
      "status": "Active",
      "notes": "Patient's tube feeds held for procedure but insulin drip not reduced \u2014 system failure"
    },
    {
      "problem": "ICU stress hyperglycemia \u2014 target 140-180",
      "icd": "R73.09",
      "onset": "2024",
      "status": "Active",
      "notes": "Post-cardiac surgery patient \u2014 glucose control matters but hypoglycemia is more dangerous than hyperglycemia"
    }
  ],
  "medications": [
    {
      "name": "Dextrose 50% 25mL IV push STAT \u2014 hypoglycemia treatment",
      "sig": "IV push immediately \u2014 repeat glucose in 15 min",
      "prescriber": "ICU nurse (standing order)",
      "start": "11/2024",
      "refills": 0,
      "status": "STAT given"
    },
    {
      "name": "Insulin drip \u2014 HOLD immediately",
      "sig": "STOP infusion until glucose >100, then restart at 50% rate",
      "prescriber": "ICU attending",
      "start": "11/2024",
      "refills": 0,
      "status": "HELD \u2014 pending glucose recheck"
    },
    {
      "name": "D10W infusion at 50 mL/hr \u2014 glucose maintenance",
      "sig": "Continue until oral/enteral nutrition resumed",
      "prescriber": "ICU attending",
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
      "bp": "88/58",
      "hr": 118,
      "rr": 24,
      "temp": "99.8\u00b0F",
      "spo2": "94%",
      "wt": "63 lbs",
      "ht": "5'1\"",
      "bmi": 11.9,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "63 lbs",
      "ht": "5'1\"",
      "bmi": 11.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "63 lbs",
      "ht": "5'1\"",
      "bmi": 11.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for ICU Patient",
      "assessment": "Working diagnosis: ICU Patient",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Glucose Monitoring",
      "results": [
        {
          "test": "Glucose (POC) \u2014 current",
          "value": "48",
          "unit": "mg/dL",
          "ref": "140-180 target",
          "flag": "L"
        },
        {
          "test": "Glucose 15 min post-D50",
          "value": "92",
          "unit": "mg/dL",
          "ref": "140-180",
          "flag": "L"
        },
        {
          "test": "Glucose 30 min post-D50",
          "value": "138",
          "unit": "mg/dL",
          "ref": "140-180",
          "flag": ""
        },
        {
          "test": "Potassium",
          "value": "3.2",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5076K",
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
    "caseId": "layer2-nursing-insulin-drip",
    "diagnosis": "Insulin Drip Hypoglycemia Crisis \u2014 Glucose 48 in ICU Patient, Nursing Error Prevention",
    "acuity": 1,
    "presentation": "ICU Patient",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with icu patient. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this endocrine presentation.",
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
      "Insulin drip hypoglycemia \u2014 tube feeds held without rate adjustment (correct)",
      "Sepsis causing hypoglycemia \u2014 insulin drip is clear cause",
      "Adrenal insufficiency \u2014 acute hypoglycemia unrelated to insulin",
      "Wrong insulin type infusing \u2014 verify drip solution label",
      "Insulin stack \u2014 multiple doses given by error",
      "Spontaneous hypoglycemia \u2014 insulin drip is present and causative"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: ICU Patient. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: insulin drip hypoglycemia from failure to reduce rate when tube feeds held. Key nursing learning: (1) Insulin drips require REAL-TIME titration to nutritional intake. When tube feeds are held, insulin rate must be reduced immediately \u2014 protocol-based adjustment (typically 50% reduction or hold depending on glucose). Nursing cannot wait for a physician order if there is a standing order protocol. (2) Glucose 48 = symptomatic hypoglycemia emergency. Nursing actions: (a) D50W 25mL IV push immediately (standing order), (b) HOLD insulin drip, (c) Notify physician, (d) Recheck glucose q15min, (e) If glucose <40 \u2192 repeat D50, continuous dextrose infusion. Document all times. (3) ICU glucose target: 140-180 mg/dL (NICE-SUGAR trial). Tight control (<110) increases mortality from hypoglycemia. Post-cardiac surgery: hyperglycemia increases infection risk, hypoglycemia increases neurological injury risk \u2014 both ends are dangerous. (4) Incident report: this is a near-miss/adverse event. Even though patient recovered, the system failure (tube feeds held without insulin adjustment) must be reported. Incident reporting is learning infrastructure, not blame. Nursing documents factually, not defensively. (5) SBAR to physician: 'Mr. Park's glucose just came back 48. His tube feeds were held for the procedure at 1400 and the insulin drip wasn't adjusted \u2014 I gave D50 per protocol and held the drip. He's now 92 at 15 minutes. I need an order to restart at what rate.'"
    }
  }
};
