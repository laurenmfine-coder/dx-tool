
window.EMR_DATA = {
  "patient": {
    "name": "Taylor Kim",
    "dob": "06/08/1962",
    "age": 63,
    "sex": "Non-binary",
    "mrn": "RDX-2025-36426",
    "pronouns": "They/Them",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Left Jaw Pressure",
    "race": "Middle Eastern",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-3254",
    "email": "taylorki@email.com",
    "emergencyContact": {
      "name": "Sarah Kim (Family)",
      "phone": "(954) 555-3752"
    }
  },
  "problems": [
    {
      "problem": "Referred cardiac pain to mandible \u2014 unstable angina",
      "icd": "I20.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Frank Davis, 61M \u2014 jaw pain and 'toothache' for 2 days, worse with exertion. No dental cause found on exam. Diaphoretic."
    },
    {
      "problem": "Unstable angina \u2014 HEART score 7, troponin pending",
      "icd": "I20.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Exertional jaw pain + diaphoresis + cardiac risk factors (T2DM, HTN, smoker) = ACS until proven otherwise. Referred to ED."
    },
    {
      "problem": "Dental exam \u2014 normal, no odontogenic cause",
      "icd": "Z01.20",
      "onset": "2024",
      "status": "Active",
      "notes": "Full mouth exam and periapical radiographs \u2014 no periapical pathology, no caries, no cracked teeth, negative percussion/palpation. Pain is non-odontogenic."
    }
  ],
  "medications": [
    {
      "name": "IMMEDIATE ED REFERRAL \u2014 do not treat dentally",
      "sig": "Do not administer local anesthetic or perform any dental procedure. Call 911 or direct to ED immediately.",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 0,
      "status": "REFER TO ED"
    },
    {
      "name": "Aspirin 324mg PO \u2014 give before ED transfer if available",
      "sig": "Non-enteric coated aspirin \u2014 chew and swallow. Anti-platelet loading if ACS suspected.",
      "prescriber": "Dentistry/ED",
      "start": "2024",
      "refills": 0,
      "status": "Given \u2014 pre-transfer"
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
      "wt": "90 lbs",
      "ht": "5'2\"",
      "bmi": 16.5,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "90 lbs",
      "ht": "5'2\"",
      "bmi": 16.5,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "90 lbs",
      "ht": "5'2\"",
      "bmi": 16.5,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Left Jaw Pressure",
      "assessment": "Working diagnosis: Left Jaw Pressure",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "In-office Dental Assessment",
      "results": [
        {
          "test": "Percussion test all teeth",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Pulp vitality test",
          "value": "Normal response all teeth",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "Periapical radiographs",
          "value": "No periapical pathology",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "Soft tissue exam",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "BP (taken in office)",
          "value": "168/98",
          "unit": "mmHg",
          "ref": "<130/80",
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
      "lot": "V1339K",
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
    "caseId": "dental-referred-cardiac-pain",
    "diagnosis": "Cardiac Pain Referred to Jaw \u2014 Unstable Angina Presenting as Toothache, Dental Cause Excluded",
    "acuity": 2,
    "presentation": "Left Jaw Pressure",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with left jaw pressure. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did the pain start?",
      "What makes it better or worse?",
      "Is it sensitive to cold? Hot? Sweet?",
      "How long does the pain last after a trigger?",
      "Does it wake you from sleep?",
      "Is there any swelling?",
      "Have you had any recent dental work?",
      "When was your last exam and cleaning?",
      "Have you had any trauma to this area?",
      "Do you grind your teeth?"
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
      "Extraoral exam \u2014 lymph nodes, TMJ",
      "Intraoral soft tissue exam",
      "Dental charting \u2014 caries, existing restorations",
      "Periodontal probing",
      "Cold/heat testing",
      "Percussion testing",
      "Palpation \u2014 periapical area",
      "Radiographic review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Referred cardiac pain to jaw \u2014 ACS with atypical presentation (correct)",
      "Pulpitis \u2014 percussion sensitive, thermal sensitivity, identifiable tooth; all negative here",
      "Periapical abscess \u2014 swelling, percussion sensitivity, radiographic lesion; absent",
      "Cracked tooth syndrome \u2014 bite test positive; negative here",
      "Trigeminal neuralgia \u2014 electric shock quality, trigger zone; different character",
      "Temporomandibular joint pain \u2014 jaw joint tenderness, clicking, limited opening"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Left Jaw Pressure. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: referred cardiac pain to mandible \u2014 ACS. Key learning: (1) Cardiac-dental referral pattern: the mandible receives its sensory innervation from the inferior alveolar nerve (V3 branch of trigeminal). Ischemic myocardial pain can refer via convergent pathways to the mandible, presenting as toothache, jaw tightness, or dental pain. Diabetics, elderly, and women are most likely to present with atypical cardiac symptoms. (2) Red flags for non-odontogenic jaw pain: pain reproduces with exertion (not with chewing alone), diaphoresis, pain that does not localize to a single tooth, normal dental exam, systemic symptoms (nausea, dyspnea). Any one of these in a patient with cardiac risk factors = cardiac workup before any dental treatment. (3) Dental provider role: perform thorough dental exam to exclude odontogenic cause. If dental exam is normal AND systemic symptoms are present \u2192 DO NOT provide dental treatment. Refer immediately to ED or call 911. Do not administer local anesthetic (epinephrine in LA can precipitate arrhythmia in active ACS). (4) Give aspirin before transfer: 325mg non-enteric coated aspirin chewed is appropriate dental office management before ED transfer if ACS is suspected \u2014 evidence-based bridge. (5) Documentation: document the exam findings, exclusion of dental cause, systemic findings (BP, diaphoresis), the referral decision, and that the patient was directed to the ED."
    }
  }
};
