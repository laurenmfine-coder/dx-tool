
window.EMR_DATA = {
  "patient": {
    "name": "Aisha Johnson",
    "dob": "11/13/1943",
    "age": 82,
    "sex": "Female",
    "mrn": "RDX-2025-70660",
    "pronouns": "She/Her",
    "insurance": "Tricare",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Margaret Chen",
    "race": "Hispanic or Latino",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-7048",
    "email": "aishajoh@email.com",
    "emergencyContact": {
      "name": "Samuel Adeyemi (Family)",
      "phone": "(954) 555-2638"
    }
  },
  "problems": [
    {
      "problem": "Post-ORIF hip fracture \u2014 PA managing floor coverage",
      "icd": "S72.001A",
      "onset": "2024",
      "status": "Active",
      "notes": "Margaret Chen, 78F. PA covering during attending rounds absence. Pain 7/10, confusion."
    },
    {
      "problem": "Undertreated pain \u2014 contributing to delirium",
      "icd": "R52",
      "onset": "2024",
      "status": "Active",
      "notes": "Inadequate pain control in elderly post-op patients drives delirium. Optimize analgesia."
    },
    {
      "problem": "Delirium assessment \u2014 PA responsibility",
      "icd": "F05",
      "onset": "2024",
      "status": "Active",
      "notes": "CAM being assessed. PA must recognize delirium, initiate workup, and involve attending."
    }
  ],
  "medications": [
    {
      "name": "Acetaminophen 650mg q6h scheduled (optimize \u2014 was PRN only)",
      "sig": "Change to scheduled \u2014 consistent analgesia reduces delirium risk vs PRN pattern",
      "prescriber": "PA/Ortho",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 changed to scheduled"
    },
    {
      "name": "Oxycodone 2.5mg PO q4h PRN (reduced from 5mg \u2014 renal clearance)",
      "sig": "Reduce opioid dose \u2014 CKD, elderly, delirium risk",
      "prescriber": "PA/Ortho",
      "start": "11/2024",
      "refills": 0,
      "status": "Active PRN"
    },
    {
      "name": "Enoxaparin 30mg SQ daily (renal dose-adjusted)",
      "sig": "DVT prophylaxis \u2014 dose reduced per CrCl 42",
      "prescriber": "PA/Pharmacy",
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
      "wt": "120 lbs",
      "ht": "5'7\"",
      "bmi": 18.8,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "120 lbs",
      "ht": "5'7\"",
      "bmi": 18.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "120 lbs",
      "ht": "5'7\"",
      "bmi": 18.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Margaret Chen",
      "assessment": "Working diagnosis: Margaret Chen",
      "plan": "Referral to pa. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "PA Assessment Labs",
      "results": [
        {
          "test": "Creatinine",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "132",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Hemoglobin",
          "value": "9.8",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "CAM score",
          "value": "Positive \u2014 acute onset, inattention, disorganized thinking",
          "unit": "",
          "ref": "Negative",
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
      "lot": "V7568K",
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
    "caseId": "arc-hip-fracture-pa",
    "diagnosis": "Post-ORIF Hip Day 3 \u2014 PA Managing Attending Absence, Pain Optimization, Disposition Planning",
    "acuity": 3,
    "presentation": "Margaret Chen",
    "category": "geriatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with margaret chen. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did this start?",
      "Has it been getting better, worse, or the same?",
      "What makes it better or worse?",
      "Rate the severity 0-10.",
      "Any associated symptoms?",
      "Any prior episodes?",
      "What medications are you taking?",
      "Any allergies?",
      "Any relevant family history?",
      "Any recent travel or sick contacts?",
      "Any prior surgeries or hospitalizations?"
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
      "Complete history and physical",
      "Vital signs and trending",
      "Focused systems exam",
      "Scope of practice determination",
      "Escalation criteria assessment",
      "Documentation review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Post-ORIF hip \u2014 PA pain optimization + delirium workup (correct)",
      "Ignore confusion \u2014 PA must escalate all new delirium, not wait for attending",
      "Increase opioids for pain \u2014 opioids are a delirium contributor, minimize in elderly",
      "Discharge today \u2014 confusion is a contraindication to discharge",
      "Restraints for confusion \u2014 pharmacologic and non-pharmacologic delirium management first",
      "UTI as only delirium cause \u2014 workup is multifactorial"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: Margaret Chen. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-op delirium, pain undertreated. Key PA learning: (1) PA autonomy and escalation: managing a floor patient independently is within PA scope. Optimizing pain, adjusting doses, and ordering delirium workup are all appropriate PA actions. When to escalate: new delirium on exam, hemodynamic instability, or CAM positive \u2014 call attending, document the conversation and plan. (2) Non-opioid pain optimization in elderly: scheduled acetaminophen 650mg q6h is evidence-based for post-op pain and significantly reduces opioid requirements. PRN-only acetaminophen results in gaps in analgesia \u2192 pain spikes \u2192 rescue opioids \u2192 delirium. Change PRN to scheduled. (3) Delirium workup initiated by PA: UA/urine culture (UTI), BMP (electrolytes \u2014 Na 132 noted), CBC, medication review (opioids, anticholinergics, benzodiazepines), pain assessment, sleep hygiene. (4) Opioid dose reduction in elderly with CKD: active metabolites of oxycodone accumulate with CrCl <60. Reduce dose + extend interval. 2.5mg q6h safer than 5mg q4h in 78yo with CrCl 42. (5) Documentation: 'Patient assessed at 1400. CAM positive. Attending notified at 1415. Orders placed for delirium workup per protocol. Continue to monitor.'"
    }
  }
};
