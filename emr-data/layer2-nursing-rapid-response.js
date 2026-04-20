
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "12/17/1957",
    "age": 68,
    "sex": "Non-binary",
    "mrn": "RDX-2025-51264",
    "pronouns": "They/Them",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Surgical Floor",
    "race": "American Indian or Alaska Native",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-7849",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Lisa Chen (Family)",
      "phone": "(954) 555-4748"
    }
  },
  "problems": [
    {
      "problem": "Acute respiratory deterioration \u2014 post-op day 2 colectomy",
      "icd": "J96.00",
      "onset": "2024",
      "status": "Active",
      "notes": "RR 28, SpO2 88% on 4L, HR 118 \u2014 Rapid Response activated by nurse"
    },
    {
      "problem": "Pulmonary embolism \u2014 suspected",
      "icd": "I26.99",
      "onset": "2024",
      "status": "Active",
      "notes": "Post-op, immobile, tachycardia + hypoxia \u2014 Wells score 5 (high probability)"
    },
    {
      "problem": "Handoff omission \u2014 DVT prophylaxis missed day 1",
      "icd": "Y83.8",
      "onset": "2024",
      "status": "Active",
      "notes": "Review shows enoxaparin not given post-op day 1 \u2014 documentation gap"
    }
  ],
  "medications": [
    {
      "name": "Oxygen 10L non-rebreather mask STAT",
      "sig": "Immediate \u2014 maintain SpO2 >92%",
      "prescriber": "RRT",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Heparin 80 units/kg IV bolus (pending CT-PE result)",
      "sig": "Anticoagulation for high-probability PE \u2014 give if CT confirms or if hemodynamically unstable",
      "prescriber": "RRT/Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Pending CT result"
    },
    {
      "name": "Enoxaparin 40mg SQ daily \u2014 RESTART (was missed day 1)",
      "sig": "DVT prophylaxis \u2014 document missed dose, restart immediately",
      "prescriber": "Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 missed dose documented"
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
      "wt": "124 lbs",
      "ht": "5'8\"",
      "bmi": 18.9,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "124 lbs",
      "ht": "5'8\"",
      "bmi": 18.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "124 lbs",
      "ht": "5'8\"",
      "bmi": 18.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Surgical Floor",
      "assessment": "Working diagnosis: Surgical Floor",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "Rapid Response Workup",
      "results": [
        {
          "test": "D-dimer",
          "value": "4,800",
          "unit": "ng/mL",
          "ref": "<500",
          "flag": "H"
        },
        {
          "test": "Troponin I",
          "value": "0.18",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "BNP",
          "value": "388",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "ABG \u2014 pO2",
          "value": "62",
          "unit": "mmHg",
          "ref": "75-100",
          "flag": "L"
        },
        {
          "test": "ABG \u2014 pCO2",
          "value": "32",
          "unit": "mmHg",
          "ref": "35-45",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "1.2",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/20/2024",
      "study": "CT Pulmonary Angiography (ordered STAT)",
      "indication": "High-probability PE \u2014 tachycardia, hypoxia, elevated D-dimer post-op",
      "findings": "PENDING \u2014 patient en route to CT scanner",
      "impression": "CT-PE ordered STAT. If patient deteriorates hemodynamically (SBP <90) before imaging, treat empirically for massive PE \u2014 consider thrombolytics vs embolectomy."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3910K",
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
    "caseId": "layer2-nursing-rapid-response",
    "diagnosis": "Surgical Floor Deterioration \u2014 Rapid Response Activation, Pending Diagnosis of Pulmonary Embolism",
    "acuity": 2,
    "presentation": "Surgical Floor",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with surgical floor. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
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
      "Pulmonary embolism \u2014 post-op, missed DVT prophylaxis (correct)",
      "Pneumonia \u2014 no consolidation but cannot exclude",
      "Pulmonary edema \u2014 heart failure less likely, troponin may indicate RV strain from PE",
      "Atelectasis \u2014 cannot explain this degree of hypoxia",
      "Pneumothorax \u2014 no breath sounds asymmetry noted",
      "ARDS from surgical insult \u2014 less acute onset typically"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Surgical Floor. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: probable PE \u2014 rapid response correctly activated by nurse. Key nursing learning: (1) The nurse's decision to call Rapid Response saved this patient. Trust clinical gestalt: 'looking wrong' + worsening vitals + not improving = escalate. Do not wait for formal scoring to trigger when instinct says something is wrong. (2) SBAR at Rapid Response: Situation: 'I'm calling from 5 North, patient James, post-op day 2 colectomy, SpO2 88% on 4L, RR 28, HR 118 \u2014 he was 96% on 2L two hours ago.' Background: 'Post-op day 2, immobile, getting 4L oxygen, vitals declining over 2 hours.' Assessment: 'I'm concerned about PE \u2014 missed his enoxaparin yesterday.' Recommendation: 'I need you at bedside now, and I think we need CT-PE and anticoagulation.' (3) Missed medication documentation: document the omission factually in the nursing note and incident report. Do NOT cover it up. Transparency enables system learning. The nurse who discovers the omission is not the one who made it \u2014 document what you found. (4) DVT prophylaxis checklist: nursing owns this. Post-op patients on a surgical floor should have prophylaxis documented on every shift. If order missing \u2192 call physician, get order, document call. (5) Hemodynamic instability = massive PE: if BP drops before CT, treat empirically. Thrombolysis threshold: SBP <90 for >15 min or shock. This is a life-threatening emergency requiring rapid ICU escalation."
    }
  }
};
