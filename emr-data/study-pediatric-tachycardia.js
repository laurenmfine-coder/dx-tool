
window.EMR_DATA = {
  "patient": {
    "name": "Priya Patel",
    "dob": "07/16/2010",
    "age": 15,
    "sex": "Female",
    "mrn": "RDX-2025-33848",
    "pronouns": "She/Her",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Asthma Admission",
    "race": "American Indian or Alaska Native",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-1647",
    "email": "priyapat@email.com",
    "emergencyContact": {
      "name": "Aisha Johnson (Family)",
      "phone": "(954) 555-3920"
    }
  },
  "problems": [
    {
      "problem": "SVT \u2014 infant, HR 240 bpm, narrow complex, hemodynamically stable",
      "icd": "I47.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Tyler Brown, 6M \u2014 sudden onset pallor, HR 240 bpm, narrow complex on monitor. BP 82/52, capillary refill 2s. Hemodynamically stable."
    },
    {
      "problem": "Vagal maneuver \u2014 ice bag to face (diving reflex) in infant",
      "icd": "I47.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Ice bag to face for 15-30 seconds. Triggers mammalian diving reflex \u2192 vagal tone \u2192 may terminate SVT. First-line before adenosine."
    },
    {
      "problem": "Adenosine administration \u2014 nursing rapid push protocol",
      "icd": "I47.1",
      "onset": "2024",
      "status": "Active",
      "notes": "0.1mg/kg rapid IV push with immediate NS flush. Half-life <10 seconds \u2014 technique is everything. Physician at bedside. Run ECG during administration."
    }
  ],
  "medications": [
    {
      "name": "Ice bag to face \u2014 vagal maneuver (infant)",
      "sig": "Ice water bag to face 15-30 seconds. Triggers diving reflex \u2192 vagal tone \u2192 may terminate SVT. Do NOT use carotid massage in infants.",
      "prescriber": "ED/Nursing protocol",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 first step"
    },
    {
      "name": "Adenosine 0.1mg/kg IV rapid push (max 6mg first dose)",
      "sig": "RAPID push followed IMMEDIATELY by 20mL NS flush. Most proximal IV. Second dose: 0.2mg/kg (max 12mg). Run ECG throughout.",
      "prescriber": "Pediatric ED",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 if vagal fails"
    },
    {
      "name": "Continuous cardiac monitoring \u2014 12-lead ECG during adenosine",
      "sig": "Run ECG printout during adenosine. Transient AV block reveals underlying rhythm. Diagnostically critical.",
      "prescriber": "Nursing/ED",
      "start": "2024",
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
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "122 lbs",
      "ht": "5'0\"",
      "bmi": 23.8,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "122 lbs",
      "ht": "5'0\"",
      "bmi": 23.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "122 lbs",
      "ht": "5'0\"",
      "bmi": 23.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Asthma Admission",
      "assessment": "Working diagnosis: Asthma Admission",
      "plan": "Referral to nursing. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "SVT Assessment",
      "results": [
        {
          "test": "HR on monitor",
          "value": "240",
          "unit": "bpm",
          "ref": "100-160 age 6 months",
          "flag": "H"
        },
        {
          "test": "Rhythm",
          "value": "Narrow complex, regular, P waves absent",
          "unit": "",
          "ref": "Normal sinus",
          "flag": "H"
        },
        {
          "test": "BP",
          "value": "82/52",
          "unit": "mmHg",
          "ref": "70-100/40-65 age 6 months",
          "flag": ""
        },
        {
          "test": "SpO2",
          "value": "97",
          "unit": "%",
          "ref": "\u226595%",
          "flag": ""
        },
        {
          "test": "Capillary refill",
          "value": "2",
          "unit": "seconds",
          "ref": "<2 seconds",
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
      "lot": "V4275K",
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
    "caseId": "study-pediatric-tachycardia",
    "diagnosis": "Pediatric SVT \u2014 HR 240 bpm, Vagal Maneuver (Ice to Face), Adenosine Rapid IV Push Protocol",
    "acuity": 2,
    "presentation": "Asthma Admission",
    "category": "pediatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with asthma admission. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "SVT \u2014 infant, narrow complex HR 240, vagal then adenosine (correct)",
      "Sinus tachycardia \u2014 P waves precede each QRS; P waves absent here = SVT",
      "VT \u2014 wide complex; this is narrow complex tachycardia",
      "Atrial flutter 2:1 \u2014 flutter waves at 480 bpm; look carefully at baseline",
      "Fever-driven sinus tachycardia \u2014 no fever; HR 240 in infant without fever = SVT",
      "WPW \u2014 check delta waves in sinus rhythm post-conversion"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a nursing case with chief complaint: Asthma Admission. What are the most important questions for a nursing to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a nursing perspective, what is the most critical finding that narrows this differential? What is the nursing-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the nursing's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: pediatric SVT \u2014 vagal then adenosine. Key learning: (1) SVT in infants: HR >220 with abrupt onset + narrow complex = SVT until proven otherwise. P waves absent or buried in T wave. (2) Pediatric vagal maneuver: infants = ice bag to face (diving reflex). Older children = Valsalva, blow through straw, or modified Valsalva (supine + legs elevated). NOT carotid massage in infants. (3) Adenosine technique: half-life <10 seconds \u2014 MUST be given as a rapid IV push followed IMMEDIATELY by a fast saline flush. Most proximal IV access. Delay in the line = drug degrades before reaching the heart. (4) ECG during adenosine: run continuous printout throughout \u2014 transient AV block reveals underlying rhythm (atrial flutter, sinus tachycardia, true SVT). This strip is diagnostically critical. (5) Post-conversion: 12-lead ECG for WPW (delta waves = short PR + slurred upstroke). WPW predicts recurrence \u2014 EP referral consideration."
    }
  }
};
