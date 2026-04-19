/* emr-data/ludwigs-angina.js — EMR case data for Ludwig Angina (Submandibular Space Infection) */
window.EMR_DATA = {
  "patient": {
    "name": "Omar Hassan",
    "patientHPI": "I can barely breathe or swallow - the whole area under my jaw and the floor of my mouth is swollen up really bad, and it's spreading down into my neck. I know my teeth aren't in good shape and I haven't been taking care of my diabetes like I should, but this swelling came on fast and it's getting scary.",
    "dob": "03/26/1970",
    "age": "56",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-190325",
    "language": "English",
    "race": "White",
    "phone": "(414) 555-5876",
    "email": "omar.hassan@email.com",
    "address": "3497 E Roosevelt Rd, New Orleans, LA 70119",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Rite Aid — Federal Hwy",
    "emergencyContact": {
      "name": "Susan Garcia",
      "phone": "(803) 555-5735",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Neck swelling and dyspnea",
    "diagnosis": "Ludwig Angina (Submandibular Space Infection)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Poorly controlled Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Dental neglect",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "IV drug use history",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Hepatitis C",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Methadone",
      "dose": "80mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-2",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-3",
      "name": "Glipizide",
      "dose": "10mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Anaphylaxis (documented — CANNOT use any penicillin or ampicillin-based antibiotics)",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "06:57",
      "bp": "158/92",
      "hr": "124",
      "rr": "28",
      "temp": "39.6°C",
      "spo2": "89% on room air → 93% on 15L NRB",
      "pain": "/10",
      "bmi": "26",
      "weight": "71 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "hpi": "Omar Hassan is a 56-year-old male presenting with can barely breathe bilateral submandibular/sublingual — floor of mouth and anterior neck. Past medical history includes Poorly controlled Type 2 Diabetes, Dental neglect, IV drug use history, Hepatitis C. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ludwig Angina (Submandibular Space Infection) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-949361",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "24.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.1",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "35",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "178",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "100",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "27",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "8",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "342",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Lactate",
              "value": "3.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending — drawn before antibiotics",
              "unit": "",
              "range": "No growth",
              "flag": ""
            },
            {
              "test": "ABG pH",
              "value": "7.32",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-658128",
      "clinical": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Neck with Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-306306",
      "clinical": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "technique": "Standard protocol",
      "findings": "BILATERAL SUBMANDIBULAR AND SUBLINGUAL SPACE CELLULITIS with diffuse soft tissue swelling and edema. Floor of mouth markedly thickened and elevated. Tongue base displaced superiorly and posteriorly, significantly narrowing the oropharyngeal airway (residual lumen <5mm). Airway patent but CRITICALLY NARROWED. Left lower molar periapical abscess (odontogenic source). Fat stranding throughout bilateral submandibular spaces. Small bilateral submandibular fluid collections (early abscess formation). No gas. No retropharyngeal extension. No mediastinal involvement (yet).",
      "impression": "LUDWIG ANGINA — bilateral submandibular/sublingual cellulitis with CRITICAL AIRWAY NARROWING (<5mm). Odontogenic source (left lower molar). EMERGENT AIRWAY MANAGEMENT REQUIRED. ENT/oral surgery for source control.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-159526",
      "clinical": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 124 bpm. No ST changes",
      "impression": "Sinus tachycardia — sepsis and respiratory distress",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Diabetes in family"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 20 pack-years"
    ],
    [
      "Alcohol",
      "None currently"
    ],
    [
      "Drugs",
      "Prior IV heroin, now on methadone maintenance (2 years clean)"
    ],
    [
      "Occupation",
      "Warehouse worker"
    ],
    [
      "Living",
      "Lives alone in apartment"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Omar appears anxious and distressed, frequently touching his swollen neck and speaking in a muffled voice due to difficulty swallowing. He is forthcoming about his medical history including past drug use, clearly frightened by the rapid progression of symptoms, and cooperative despite obvious discomfort.",
    "interviewQuestions": [
      "When did the neck swelling first begin?",
      "How quickly has the swelling progressed?",
      "Are you having difficulty swallowing or breathing?",
      "Have you had any recent dental problems or tooth pain?",
      "Do you have fever or chills?",
      "Can you describe the pain in your neck and jaw?",
      "Have you had any recent dental work or mouth injuries?",
      "Are you drooling or unable to swallow your saliva?",
      "Has your voice changed?",
      "Have you had nausea or vomiting?",
      "How has your diabetes control been recently?",
      "Have you ever had anything like this before?",
      "Are you having chest pain or difficulty lying flat?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing - this swelling is really scaring me and it's hard to talk.",
      "onset": "It started about 2-3 days ago as just some tooth pain, but the swelling under my jaw began yesterday morning and has gotten much worse since then.",
      "character": "The whole floor of my mouth feels like it's filled with concrete - it's hard and swollen, and my tongue feels thick and pushed up.",
      "location": "It's mainly under my jaw and tongue, but now it's spreading down into my neck on both sides. My throat feels like it's closing up.",
      "severity": "The pain is about a 7 out of 10, but I'm more scared about not being able to breathe - that's a 9 out of 10.",
      "aggravating": "Trying to swallow makes it much worse, and lying flat makes me feel like I can't breathe at all.",
      "relieving": "Nothing really helps - even sitting up straight doesn't make the breathing much better anymore.",
      "associated": "I have a fever, chills, and I can barely swallow my own spit. My voice sounds different and I feel really weak.",
      "denies": "No chest pain, no rash, no ear pain, and I haven't been vomiting.",
      "history": "Never had anything like this before. I've had bad teeth for years but never anything this serious.",
      "medications": "Methadone; Metformin; Glipizide",
      "allergies": "Penicillin",
      "family": "My mom and brother both have diabetes, but nobody's had anything like this infection stuff.",
      "social": "I work in a warehouse, been clean from heroin for 2 years on methadone. I smoke about a pack a day, don't drink anymore. Live alone and honestly haven't been great about taking care of myself."
    },
    "examManeuvers": [
      "Inspect oropharynx and floor of mouth",
      "Palpate submandibular and submental regions",
      "Assess airway patency and stridor",
      "Palpate cervical lymph nodes",
      "Assess ability to swallow",
      "Examine dentition",
      "Assess for trismus",
      "Inspect for drooling",
      "Neck inspection for erythema and edema",
      "Assess voice quality and speech"
    ],
    "examFindings": {
      "Inspect oropharynx and floor of mouth": "Markedly elevated and indurated floor of mouth with bilateral sublingual swelling, erythematous oral mucosa",
      "Palpate submandibular and submental regions": "Firm, tender, woody induration of bilateral submandibular and submental spaces without fluctuance",
      "Assess airway patency and stridor": "No audible stridor at rest but patient has obvious respiratory distress with mouth breathing",
      "Palpate cervical lymph nodes": "Bilateral tender cervical lymphadenopathy, difficult to distinguish from cellulitis",
      "Assess ability to swallow": "Patient unable to swallow saliva, drooling profusely",
      "Examine dentition": "Poor dentition with multiple carious teeth, particularly lower molars with visible decay",
      "Assess for trismus": "Limited mouth opening due to pain and swelling, approximately 2 finger breadths",
      "Inspect for drooling": "Profuse drooling with inability to manage secretions",
      "Neck inspection for erythema and edema": "Bilateral neck swelling with erythema extending from mandible to upper chest",
      "Assess voice quality and speech": "Muffled 'hot potato' voice with difficulty articulating clearly"
    },
    "ddxTargets": [
      "Ludwig's Angina (correct diagnosis)",
      "Peritonsillar abscess",
      "Parapharyngeal abscess",
      "Epiglottitis",
      "Angioedema",
      "Cellulitis of neck",
      "Retropharyngeal abscess"
    ],
    "biasFlags": {
      "anchoring": "May anchor on patient's drug use history and assume this is related to injection site infection rather than odontogenic source",
      "prematureClosure": "The obvious dental neglect and rapid progression might lead to quick assumption of simple dental abscess without considering the life-threatening nature of Ludwig's angina",
      "availabilityBias": "Recent cases of allergic reactions or more common throat infections might overshadow the classic presentation of deep neck space infection"
    },
    "coachPrompts": {
      "phase2": "You're seeing a patient with neck swelling and breathing difficulty. Before you interview him, what are the most concerning diagnoses you need to rule out, and what would make this an airway emergency? Think about the anatomical spaces involved.",
      "phase5": "Based on your history and physical exam, you've identified bilateral submandibular and sublingual space involvement with systemic toxicity. How does this pattern of infection help narrow your diagnosis? What's your biggest concern for this patient right now?",
      "finalDebrief": "Ludwig's angina is a rapidly progressive cellulitis of the floor of the mouth involving bilateral submandibular spaces. Unlike other deep neck infections, it typically doesn't form an abscess but creates a woody induration that can compromise the airway. How did the patient's risk factors - diabetes, poor dentition, and immunocompromise - contribute to this presentation?"
    }
  }
};
