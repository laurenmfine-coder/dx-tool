
window.EMR_DATA = {
  "patient": {
    "name": "Jordan Lee",
    "dob": "01/06/1964",
    "age": 61,
    "sex": "Non-binary",
    "mrn": "RDX-2025-36347",
    "pronouns": "They/Them",
    "insurance": "Medicare",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Trismus 15mm",
    "race": "American Indian or Alaska Native",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-3891",
    "email": "jordanle@email.com",
    "emergencyContact": {
      "name": "Fatima Al-Hassan (Family)",
      "phone": "(954) 555-5986"
    }
  },
  "problems": [
    {
      "problem": "Ludwig's angina \u2014 bilateral floor of mouth and submandibular space infection",
      "icd": "K12.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Airway emergency \u2014 bilateral elevation of floor of mouth, tongue displacement"
    },
    {
      "problem": "Source: mandibular molar infection, tooth #18",
      "icd": "K04.7",
      "onset": "2024",
      "status": "Active",
      "notes": "Necrotic tooth #18, periapical abscess as source"
    }
  ],
  "medications": [
    {
      "name": "Ampicillin-sulbactam 3g IV q6h (STAT)",
      "sig": "IV infusion every 6 hours \u2014 started in ED",
      "prescriber": "ED/Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Metronidazole 500mg IV q8h",
      "sig": "IV infusion every 8 hours \u2014 anaerobic coverage",
      "prescriber": "ED/Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Dexamethasone 8mg IV x1 (airway edema)",
      "sig": "IV push once \u2014 reduce airway edema while preparing for intubation",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 given once"
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
      "wt": "116 lbs",
      "ht": "5'0\"",
      "bmi": 22.7,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "116 lbs",
      "ht": "5'0\"",
      "bmi": 22.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "116 lbs",
      "ht": "5'0\"",
      "bmi": 22.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Trismus 15mm",
      "assessment": "Working diagnosis: Trismus 15mm",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Infection and Metabolic",
      "results": [
        {
          "test": "WBC",
          "value": "22.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Bands",
          "value": "31",
          "unit": "%",
          "ref": "0-10",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "28.4",
          "unit": "mg/dL",
          "ref": "<1.0",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "2.1",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Glucose",
          "value": "194",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Neck with Contrast",
      "indication": "Bilateral floor of mouth swelling, trismus, fever \u2014 evaluate extent of infection and airway",
      "findings": "Bilateral submandibular and sublingual space phlegmon with gas formation. Bilateral sublingual spaces elevated compressing floor of mouth and displacing tongue superiorly and posteriorly. Airway narrowing at oropharyngeal level \u2014 estimated 40% narrowing. No discrete drainable abscess on current imaging (phlegmon phase). No descending mediastinitis on current cuts \u2014 chest CT pending.",
      "impression": "Ludwig's angina with imminent airway compromise. Immediate surgical and anesthesia consultation required. Airway management before any surgical drainage."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V6716K",
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
    "caseId": "dental-ludwigs-angina",
    "diagnosis": "Ludwig's Angina \u2014 Descending Neck Infection, Airway Emergency",
    "acuity": 1,
    "presentation": "Trismus 15mm",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with trismus 15mm. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
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
      "Ludwig's angina \u2014 bilateral submandibular space infection (correct)",
      "Unilateral submandibular abscess (not bilateral)",
      "Peritonsillar abscess \u2014 different location",
      "Epiglottitis \u2014 different anatomy",
      "Angioedema \u2014 no infection, rapid onset",
      "Sublingual hematoma"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Trismus 15mm. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: Ludwig's angina \u2014 airway emergency. Key dentistry learning points: (1) Ludwig's definition: BILATERAL submandibular + sublingual + submental space involvement. NOT an abscess (usually no fluctuance on CT initially \u2014 phlegmon phase). (2) Immediate actions in first 5 minutes: airway assessment (can they still open mouth? stridor? accessory muscle use?), call anesthesia NOW for awake fiberoptic intubation if indicated, IV access and antibiotics, call oral surgery/ENT. (3) Airway first \u2014 BEFORE anything else: trismus 15mm means conventional laryngoscopy is impossible. Awake fiberoptic or surgical airway (tracheotomy) may be required. (4) Antibiotic coverage: polymicrobial (gram-positive cocci + oral anaerobes) \u2014 ampicillin-sulbactam OR penicillin + metronidazole. Add clindamycin if penicillin allergy. (5) Dental prevention: Ludwig's typically originates from lower molar periapical abscess (tooth #17-18 most common). Early endodontic treatment or extraction of necrotic teeth prevents this catastrophic spread."
    }
  }
};
