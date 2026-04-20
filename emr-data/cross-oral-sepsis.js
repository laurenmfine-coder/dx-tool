
window.EMR_DATA = {
  "patient": {
    "name": "Carmen Rivera",
    "dob": "08/19/1989",
    "age": 36,
    "sex": "Female",
    "mrn": "RDX-2025-67948",
    "pronouns": "She/Her",
    "insurance": "Medicare",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Post-Dental Extraction Day 5",
    "race": "American Indian or Alaska Native",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-1074",
    "email": "carmenri@email.com",
    "emergencyContact": {
      "name": "Lisa Chen (Family)",
      "phone": "(954) 555-7632"
    }
  },
  "problems": [
    {
      "problem": "Sepsis \u2014 oral/dental source, Ludwig's angina risk",
      "icd": "A41.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Tom\u00e1s Guerrero, 44M \u2014 febrile, swollen right jaw, trismus, elevated WBC. Blood cultures pending. CT neck ordered."
    },
    {
      "problem": "Periapical abscess \u2014 mandibular molar, spreading cellulitis",
      "icd": "K04.7",
      "onset": "2024",
      "status": "Active",
      "notes": "Unable to open mouth >1cm. Medial pterygoid space involved. Ludwig's angina must be excluded urgently."
    },
    {
      "problem": "Airway at risk \u2014 sublingual/submandibular space involvement",
      "icd": "J38.4",
      "onset": "2024",
      "status": "Active",
      "notes": "CT neck: bilateral submandibular involvement beginning. Anesthesia and ENT on standby."
    }
  ],
  "medications": [
    {
      "name": "Ampicillin-sulbactam 3g IV q6h \u2014 empiric oral flora",
      "sig": "Covers Streptococcus, anaerobes, oral gram-negatives. Backbone of Ludwig's angina treatment.",
      "prescriber": "ENT/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Metronidazole 500mg IV q8h \u2014 add anaerobic coverage",
      "sig": "Adjunct for deep space neck infection \u2014 polymicrobial including Fusobacterium, Bacteroides",
      "prescriber": "ENT/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Dexamethasone 10mg IV q6h \u2014 reduce airway edema",
      "sig": "Steroids reduce cellulitis and airway edema in Ludwig's angina \u2014 given WITH antibiotics, not alone",
      "prescriber": "ENT",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Serial airway assessments \u2014 anesthesia standby",
      "sig": "If stridor, drooling, inability to swallow, posturing \u2192 intubate EARLY. Awake fiberoptic preferred before complete closure.",
      "prescriber": "Anesthesia/ENT",
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
      "bp": "88/58",
      "hr": 118,
      "rr": 24,
      "temp": "99.8\u00b0F",
      "spo2": "94%",
      "wt": "87 lbs",
      "ht": "5'7\"",
      "bmi": 13.6,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "87 lbs",
      "ht": "5'7\"",
      "bmi": 13.6,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "87 lbs",
      "ht": "5'7\"",
      "bmi": 13.6,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Post-Dental Extraction Day 5",
      "assessment": "Working diagnosis: Post-Dental Extraction Day 5",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Sepsis/Neck Infection Panel",
      "results": [
        {
          "test": "WBC",
          "value": "24.6",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "184",
          "unit": "mg/L",
          "ref": "<10",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.3",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "2.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Blood cultures x2",
          "value": "Pending",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Glucose",
          "value": "224",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Neck With Contrast",
      "indication": "Jaw swelling, trismus, fever \u2014 deep space infection?",
      "findings": "Bilateral submandibular and submental space involvement. Early sublingual space gas. No drainable abscess identified \u2014 phlegmon. Airway midline but narrowed at base of tongue.",
      "impression": "Ludwig's angina \u2014 bilateral deep space neck infection. Airway compromise risk HIGH. No discrete abscess for I&D \u2014 IV antibiotics + airway monitoring."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V8983K",
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
    "caseId": "cross-oral-sepsis",
    "diagnosis": "Oral Source of Sepsis \u2014 Periapical Abscess with Bacteremia, Dental Extraction Needed After Medical Stabilization",
    "acuity": 1,
    "presentation": "Post-Dental Extraction Day 5",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with post-dental extraction day 5. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "General appearance",
      "Vital signs",
      "Cardiovascular exam",
      "Pulmonary exam",
      "Abdominal exam",
      "Neurological exam",
      "Skin exam",
      "Musculoskeletal exam"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Ludwig's angina \u2014 dental source sepsis, bilateral deep space neck infection (correct)",
      "Peritonsillar abscess \u2014 unilateral, uvular deviation, different age group",
      "Parapharyngeal space abscess \u2014 different CT location, usually unilateral",
      "Submandibular lymphadenitis \u2014 does not cause gas or bilateral space involvement",
      "Angioedema \u2014 no skin erythema/heat, no dental source, different history",
      "Epiglottitis \u2014 epiglottis normal on CT; different presentation"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Post-Dental Extraction Day 5. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: Ludwig's angina \u2014 deep space neck infection from dental source. Key learning: (1) Ludwig's angina is a bilateral submandibular/sublingual/submental space infection \u2014 a true surgical emergency. Most common source: mandibular second or third molar periapical abscess. Organisms: mixed oral flora (Streptococcus, Staphylococcus, anaerobes). (2) Airway is the first priority \u2014 can progress from open airway to complete closure in hours. Warning signs: stridor, drooling, muffled voice, anterior neck edema, inability to swallow. Awake fiberoptic intubation before airway closes is far safer than crash intubation. (3) Gas on CT: pathognomonic for deep space infection with gas-producing organisms (polymicrobial, anaerobic). Urgent surgical and ENT evaluation. (4) I&D: if no discrete abscess on CT (phlegmon), antibiotics alone may suffice. If abscess present \u2192 surgical drainage. Dental extraction of source tooth after medical stabilization. (5) Interdisciplinary key learning: dental providers should recognize that a painful, swollen tooth presenting with fever, trismus, and dysphagia requires ED referral, not just antibiotic prescription and discharge."
    }
  }
};
