
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
    "pharmacy": "Rite Aid \u2014 Federal Hwy",
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
      "problem": "Ludwig's angina \u2014 bilateral deep space neck infection",
      "icd": "K12.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Antonio Rivera, 48M \u2014 jaw swelling, trismus, fever 39.1\u00b0C for 3 days. Bilateral submandibular induration. Submandibular space gas on CT."
    },
    {
      "problem": "Airway compromise \u2014 imminent risk, anesthesia standby",
      "icd": "J38.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Stridor developing. Muffled 'hot potato' voice. Anesthesia and ENT at bedside \u2014 awake fiberoptic intubation prepared."
    },
    {
      "problem": "Diabetic immunocompromise \u2014 accelerated infection spread",
      "icd": "E11.9",
      "onset": "2018",
      "status": "Active",
      "notes": "T2DM poorly controlled, A1c 10.8% \u2014 hyperglycemia impairs neutrophil function, accelerates deep space infection spread."
    }
  ],
  "medications": [
    {
      "name": "Ampicillin-sulbactam 3g IV q6h \u2014 polymicrobial coverage",
      "sig": "First-line coverage for mixed oral flora \u2014 Streptococcus, Staphylococcus, anaerobes. IV mandatory.",
      "prescriber": "ENT/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Metronidazole 500mg IV q8h \u2014 anaerobic augmentation",
      "sig": "Deep space neck infections are polymicrobial with high anaerobic burden (Fusobacterium, Bacteroides).",
      "prescriber": "ENT",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Dexamethasone 10mg IV q6h \u2014 airway edema reduction",
      "sig": "Corticosteroid reduces cellulitis edema \u2014 buys time while antibiotics work. NOT a substitute for airway management.",
      "prescriber": "ENT/Anesthesia",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Awake fiberoptic intubation \u2014 airway secured",
      "sig": "Standard of care for Ludwig's with stridor \u2014 do NOT use direct laryngoscopy (rapid swelling can obscure view). Awake FOI before complete loss.",
      "prescriber": "Anesthesia",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Anaphylaxis (documented \u2014 CANNOT use any penicillin or ampicillin-based antibiotics)",
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
      "temp": "39.6\u00b0C",
      "spo2": "89% on room air \u2192 93% on 15L NRB",
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
      "cc": "Can barely breathe Bilateral submandibular/sublingual \u2014 floor of mouth and anterior neck",
      "hpi": "Omar Hassan is a 56-year-old male presenting with can barely breathe bilateral submandibular/sublingual \u2014 floor of mouth and anterior neck. Past medical history includes Poorly controlled Type 2 Diabetes, Dental neglect, IV drug use history, Hepatitis C. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ludwig Angina (Submandibular Space Infection) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Ludwig's Angina Panel",
      "results": [
        {
          "test": "WBC",
          "value": "28.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Glucose",
          "value": "318",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "HbA1c",
          "value": "10.8",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "246",
          "unit": "mg/L",
          "ref": "<10",
          "flag": "H"
        },
        {
          "test": "Blood cultures",
          "value": "Streptococcus anginosus growing",
          "unit": "",
          "ref": "No growth",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Neck With Contrast",
      "indication": "Jaw swelling, trismus, fever \u2014 Ludwig's angina?",
      "findings": "Bilateral submandibular and submental space involvement. Gas in right sublingual space. Airway: 4mm at base of tongue \u2014 significantly narrowed. No drainable abscess \u2014 phlegmon. Right mandibular second molar periapical lucency \u2014 source tooth.",
      "impression": "Ludwig's angina with bilateral deep space involvement and airway narrowing. Airway urgency \u2014 anesthesia immediately. Source tooth identified."
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
      "Ludwig's angina \u2014 bilateral deep space, airway narrowing, dental source (correct)",
      "Peritonsillar abscess \u2014 unilateral, uvular deviation; does not cause submandibular induration bilaterally",
      "Parapharyngeal abscess \u2014 unilateral, less submandibular involvement",
      "Masticator space abscess \u2014 unilateral, trismus prominent, different space",
      "Angioedema \u2014 no infection source, no gas on CT, responds to antihistamines/epinephrine",
      "Epiglottitis \u2014 supraglottic involvement on CT, different presentation"
    ],
    "biasFlags": {
      "anchoring": "May anchor on patient's drug use history and assume this is related to injection site infection rather than odontogenic source",
      "prematureClosure": "The obvious dental neglect and rapid progression might lead to quick assumption of simple dental abscess without considering the life-threatening nature of Ludwig's angina",
      "availabilityBias": "Recent cases of allergic reactions or more common throat infections might overshadow the classic presentation of deep neck space infection"
    },
    "coachPrompts": {
      "phase2": "You're seeing a patient with neck swelling and breathing difficulty. Before you interview him, what are the most concerning diagnoses you need to rule out, and what would make this an airway emergency? Think about the anatomical spaces involved.",
      "phase5": "Based on your history and physical exam, you've identified bilateral submandibular and sublingual space involvement with systemic toxicity. How does this pattern of infection help narrow your diagnosis? What's your biggest concern for this patient right now?",
      "finalDebrief": "Ludwig's angina is a rapidly progressive cellulitis of the floor of the mouth involving bilateral submandibular spaces. Unlike other deep neck infections, it typically doesn't form an abscess but creates a woody induration that can compromise the airway. How did the patient's risk factors - diabetes, poor dentition, and immunocompromise - contribute to this presentation?",
      "final": "Diagnosis: Ludwig's angina \u2014 airway emergency. Key learning: (1) Ludwig's angina = bilateral infection of submandibular, sublingual, AND submental spaces simultaneously. True surgical and airway emergency \u2014 mortality historically 50%, now <5% with early airway management and antibiotics. (2) Airway management is paramount: 'cool and calculate second, airway FIRST.' Signs of impending closure: muffled voice, drooling, stridor, inability to swallow, neck extension posturing. Awake fiberoptic intubation is gold standard \u2014 allows patient to maintain airway patency until tube secured. Crash intubation in Ludwig's can be fatal. (3) Gas on CT: indicates gas-producing organisms (polymicrobial anaerobic infection). Radiologic evidence of gas = surgical emergency \u2014 even without discrete abscess, gas suggests necrotizing fasciitis risk. (4) Diabetes as amplifier: hyperglycemia impairs neutrophil chemotaxis and killing \u2014 deep space infections spread faster and respond more slowly to antibiotics. Aggressive glucose control accelerates response. (5) Surgical drainage: if CT shows discrete abscess (not just phlegmon), ENT performs intraoral or transcervical I&D. Mandibular source tooth extracted after medical stabilization (not during acute crisis when airway is at risk)."
    }
  },
  "meta": {
    "diagnosis": "Ludwig's Angina \u2014 Bilateral Submandibular Space Infection, Airway Emergency, Dental Source",
    "caseId": "ludwigs-angina"
  }
};
