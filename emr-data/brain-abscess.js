
window.EMR_DATA = {
  "patient": {
    "name": "Ricardo Jimenez",
    "patientHPI": "I started having this really bad headache about 10 days ago, right across my forehead and around my cheeks, and it just keeps getting worse. My doctor thought it was another sinus infection and gave me antibiotics 5 days ago, but honestly I don't feel any better. Now I'm getting nauseous and feel feverish, and I'm having trouble focusing at work - it's like my brain is in a fog.",
    "dob": "11/04/1978",
    "age": 46,
    "sex": "Male",
    "mrn": "RDX-2025-47821",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Ana Castillo, MD",
    "pharmacy": "Walgreens \u2014 5001 S University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "1393 Hollyhock Rd, Albuquerque, NM 87104",
    "phone": "(954) 555-7312",
    "email": "r.jimenez78@email.com",
    "emergencyContact": {
      "name": "Sofia Jimenez (Wife)",
      "phone": "(954) 555-7340"
    },
    "chiefComplaint": "Headache and fever for a week"
  },
  "problems": [
    {
      "problem": "Frontal lobe brain abscess \u2014 sinusitis origin",
      "icd": "G06.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Christopher Lee, 24M \u2014 2-week history severe frontal headache, fever, frontal sinusitis treated with antibiotics. Now new focal seizure and left-sided weakness. CT: ring-enhancing lesion right frontal lobe with surrounding edema."
    },
    {
      "problem": "Focal neurological deficit \u2014 left arm weakness",
      "icd": "G06.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Left arm weakness from right frontal lobe involvement (motor cortex or premotor area). Localizing deficit guiding surgical approach."
    },
    {
      "problem": "Seizure \u2014 from cortical irritation",
      "icd": "G40.909",
      "onset": "2024",
      "status": "Active",
      "notes": "Focal seizure from cortical irritation adjacent to abscess. Antiepileptic prophylaxis required."
    }
  ],
  "medications": [
    {
      "name": "Ceftriaxone 2g IV q12h + metronidazole 500mg IV q8h",
      "sig": "Empiric coverage for sinogenic brain abscess: streptococci (microaerophilic), anaerobes, gram-negatives. Metronidazole penetrates BBB well and covers anaerobes. Duration 6-8 weeks total.",
      "prescriber": "Neurosurgery/Infectious Disease",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 IV"
    },
    {
      "name": "Dexamethasone 4mg IV q6h \u2014 for cerebral edema",
      "sig": "Reduces vasogenic edema from abscess. Controversial \u2014 may reduce antibiotic penetration. Use for significant mass effect or herniation risk. Taper as edema resolves.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Stereotactic aspiration or craniotomy \u2014 surgical drainage",
      "sig": "Abscesses >2.5cm or with neurological deficits \u2192 surgical drainage. Stereotactic aspiration (CT-guided) preferred. Craniotomy for multiloculated or posterior fossa abscesses. Sends culture to guide antibiotics.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Scheduled"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfonamides",
      "type": "Drug",
      "reaction": "Diffuse maculopapular rash",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/20/2025",
      "bp": "142/88",
      "hr": 92,
      "rr": 16,
      "temp": "100.8\u00b0F",
      "spo2": "97%",
      "wt": "248 lbs",
      "ht": "5'10\"",
      "bmi": 35.6,
      "setting": "Urgent Care"
    },
    {
      "date": "11/05/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "245 lbs",
      "ht": "5'10\"",
      "bmi": 35.1,
      "setting": "PCP Office"
    },
    {
      "date": "07/15/2024",
      "bp": "144/90",
      "hr": 82,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "242 lbs",
      "ht": "5'10\"",
      "bmi": 34.7,
      "setting": "PCP Office"
    },
    {
      "date": "01/22/2024",
      "bp": "136/84",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "238 lbs",
      "ht": "5'10\"",
      "bmi": 34.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/20/2025",
      "type": "Urgent Care",
      "provider": "Dr. Kevin Pham, MD",
      "cc": "Headache and facial pressure x 10 days, worsening",
      "hpi": "46-year-old male presents with 10 days of progressive bifrontal headache and maxillary facial pressure. Initially thought to be recurrent sinusitis; started Augmentin 5 days ago by PCP without improvement. Now reports nausea, subjective fevers, and new difficulty concentrating. Denies trauma, vision changes, or neck stiffness.",
      "exam": "General: Ill-appearing male, mildly diaphoretic. HEENT: TTP over bilateral maxillary sinuses; purulent drainage from left naris. Neck: Supple, no meningismus. CV: RRR, no murmurs. Lungs: CTAB. Neuro: A&O x3, CN II-XII intact, no focal deficits on screening exam. Mild difficulty with serial 7s.",
      "assessment": "1. Persistent sinusitis with worsening headache \u2014 incomplete response to antibiotics\n2. Concern for intracranial complication given immunocompromised state (DM) and worsening symptoms on antibiotics",
      "plan": "1. CT sinuses ordered; recommend CT head with contrast or MRI brain if symptoms do not improve within 48 hours\n2. Continue Augmentin; add pseudoephedrine PRN\n3. Return precautions: fever >101, vision changes, weakness, confusion, seizure \u2192 ED immediately"
    },
    {
      "id": "V002",
      "date": "11/05/2024",
      "type": "Primary Care",
      "provider": "Dr. Ana Castillo, MD",
      "cc": "Follow-up: diabetes, hypertension, sinusitis",
      "hpi": "46-year-old male for routine follow-up. Diabetes control suboptimal with A1c 8.1%. Reports 2 episodes of sinusitis in past 6 months requiring antibiotics. BP elevated today. Weight stable. Denies chest pain, SOB, polyuria.",
      "exam": "General: NAD, obese male. HEENT: Mild bilateral maxillary TTP, no purulence currently. Neck: Supple. CV: RRR. Lungs: CTAB. Abdomen: Soft, obese, NT. Extremities: No edema. Feet exam: intact sensation, no ulcers.",
      "assessment": "1. T2DM \u2014 A1c 8.1%, above goal\n2. HTN \u2014 suboptimally controlled\n3. Recurrent sinusitis \u2014 recommend ENT referral\n4. Obesity \u2014 dietary counseling",
      "plan": "1. Increase Metformin to 1000mg BID; recheck A1c in 3 months\n2. Continue Lisinopril 20mg; consider adding amlodipine if BP not at goal\n3. ENT referral placed for chronic sinusitis evaluation\n4. Dietary counseling; exercise 150 min/week goal\n5. RTC 3 months"
    },
    {
      "id": "V003",
      "date": "07/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Ana Castillo, MD",
      "cc": "Acute sinusitis",
      "hpi": "46-year-old male presents with 7 days of facial pressure, nasal congestion, purulent rhinorrhea, and low-grade fever. Third episode this year. Denies dental pain currently. History of periapical abscess treated with extraction in 08/2024 (upcoming at time of visit \u2014 rescheduled from earlier).",
      "exam": "General: NAD. HEENT: Bilateral maxillary TTP, purulent drainage R naris, oropharynx mildly erythematous. Neck: No LAD. Lungs: CTAB.",
      "assessment": "1. Acute bacterial sinusitis \u2014 recurrent\n2. Recommend dental clearance and ENT evaluation",
      "plan": "1. Amoxicillin-Clavulanate 875mg BID x 10 days\n2. Nasal saline irrigation\n3. Continue fluticasone nasal spray\n4. Dental follow-up for molar extraction\n5. ENT referral if recurrence"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Brain Abscess Assessment",
      "results": [
        {
          "test": "WBC",
          "value": "18.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "ESR",
          "value": "84",
          "unit": "mm/hr",
          "ref": "<20",
          "flag": "H"
        },
        {
          "test": "Blood cultures x2",
          "value": "Pending \u2014 before antibiotics",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "HIV test",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "MRI spectroscopy",
          "value": "Lactate and amino acid peaks \u2014 consistent with pyogenic abscess",
          "unit": "",
          "ref": "",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "MRI Brain with and without Contrast",
      "findings": "2.8cm ring-enhancing lesion right frontal lobe with surrounding vasogenic edema and mild midline shift (4mm). Restricted diffusion on DWI \u2014 consistent with pyogenic abscess. Adjacent frontal sinus mucosal thickening.",
      "impression": "Right frontal lobe brain abscess, likely sinogenic origin. Neurosurgical consultation for drainage."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-331",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-882",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B (3/3)",
      "date": "1998",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: T2DM, HTN, alive at 72",
    "Father: Stroke at age 64, deceased at 68",
    "Brother: T2DM, age 50",
    "Maternal grandmother: Brain tumor (type unknown), deceased at 60"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Construction foreman"
    ],
    [
      "Marital",
      "Married, 2 children"
    ],
    [
      "Tobacco",
      "Former smoker \u2014 10 pack-years; quit 2017"
    ],
    [
      "Alcohol",
      "Social, 3-4 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal; physically active at work"
    ],
    [
      "Housing",
      "Lives with wife and children in single-family home"
    ],
    [
      "Safety",
      "Denies IPV; wears hard hat at work"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "brain-abscess",
    "diagnosis": "Brain Abscess \u2014 Sinusitis with Contiguous Spread (Frontal Lobe)",
    "acuity": 2,
    "presentation": "Headache",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Ricardo appears visibly uncomfortable and holds his head frequently, showing moderate distress from his worsening headache. He's cooperative but seems somewhat confused and sluggish in his responses, occasionally needing questions repeated. He expresses frustration that the antibiotics haven't helped and is increasingly worried about his deteriorating condition.",
    "interviewQuestions": [
      "Can you describe exactly when your headache started and how it has changed?",
      "Where specifically is the pain located and does it radiate anywhere?",
      "On a scale of 1-10, how severe is your headache now compared to when it started?",
      "Have you had any fever, chills, or night sweats?",
      "Are you experiencing any nausea, vomiting, or changes in vision?",
      "Have you noticed any weakness, numbness, or difficulty speaking?",
      "How long have you been dealing with sinus problems?",
      "Tell me about the antibiotics you're taking - when did you start them?",
      "Have you had any recent dental problems or procedures?",
      "Are you having any neck stiffness or pain with bright lights?",
      "Have you noticed any changes in your thinking or memory?",
      "What medications are you currently taking?",
      "Do you have any drug allergies I should know about?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating with this headache. Could you repeat that?",
      "onset": "It started about 10 days ago as what I thought was just another sinus headache, but it's gotten much worse over the past 3-4 days. Now it's constant and throbbing.",
      "character": "It's a deep, throbbing pain that feels like pressure building up inside my head. It's different from my usual sinus headaches - much more intense.",
      "location": "It's mainly across my forehead and around my right eye and cheek area, but now it feels like it's spreading to the whole right side of my head.",
      "severity": "When it started, maybe a 4 or 5, but now it's easily an 8 or 9. I can barely function at work, and I had to come home early yesterday.",
      "aggravating": "Bending over or coughing makes it much worse. Bright lights bother me too, and any jarring movement sends shooting pain through my head.",
      "relieving": "Nothing really helps anymore. I've tried ibuprofen, acetaminophen, even lying in a dark room, but the pain just keeps getting worse.",
      "associated": "I've been nauseous for the past few days and threw up twice yesterday. I feel feverish and just generally awful, like I have the flu.",
      "denies": "I haven't had any seizures or passed out, but I do feel more confused than usual and my wife says I seem 'off' lately.",
      "history": "I've had sinus infections before with my chronic sinusitis, but nothing like this. Usually the antibiotics clear it up in a few days.",
      "medications": "Metformin 1000mg BID; Lisinopril 20mg daily; Fluticasone 50mcg nasal spray BID; Amoxicillin-Clavulanate 875mg/125mg BID; Atorvastatin 20mg QHS",
      "allergies": "Sulfonamides",
      "family": "My mom has diabetes and high blood pressure, and my dad had a stroke when he was 64. My brother also has diabetes.",
      "social": "I work as a construction foreman, so I'm around dust and debris a lot. I'm married with two kids. I quit smoking about 6 years ago after 10 pack-years, and I have a few beers on weekends."
    },
    "examManeuvers": [
      "Neurological assessment including mental status",
      "Fundoscopic examination",
      "Assessment for nuchal rigidity and meningeal signs",
      "Cranial nerve examination",
      "Motor strength and reflexes testing",
      "Coordination and gait assessment",
      "Sinus percussion and palpation",
      "Temperature and vital signs assessment",
      "Assessment for focal neurological deficits",
      "Examination for papilledema"
    ],
    "examFindings": {
      "Neurological assessment including mental status": "Patient appears mildly confused and has delayed responses; oriented to person and place but uncertain of date",
      "Fundoscopic examination": "Mild papilledema present bilaterally, suggesting increased intracranial pressure",
      "Assessment for nuchal rigidity and meningeal signs": "Mild neck stiffness present; Kernig's and Brudzinski's signs are negative",
      "Cranial nerve examination": "Cranial nerves II-XII intact, though patient reports some decreased smell on right side",
      "Motor strength and reflexes testing": "Motor strength 5/5 throughout; reflexes 2+ and symmetric",
      "Coordination and gait assessment": "Mild unsteadiness noted; finger-to-nose testing shows slight intention tremor on right",
      "Sinus percussion and palpation": "Marked tenderness over right frontal and maxillary sinuses with dullness to percussion",
      "Temperature and vital signs assessment": "Temperature 100.8\u00b0F, BP 142/88, HR 92, appears mildly diaphoretic",
      "Assessment for focal neurological deficits": "No obvious focal motor or sensory deficits identified",
      "Examination for papilledema": "Optic disc margins appear blurred bilaterally consistent with mild papilledema"
    },
    "ddxTargets": [
      "Brain abscess \u2014 sinusitis origin (correct)",
      "Glioblastoma (GBM) \u2014 ring-enhancing; older patient; no fever; spectroscopy: choline peak (not lactate/amino acids)",
      "Brain metastasis \u2014 known primary cancer; multiple lesions more common; DWI restricted diffusion less typical",
      "CNS toxoplasmosis \u2014 HIV positive; multiple ring-enhancing lesions; CD4 <200; treat empirically with pyrimethamine/sulfadiazine",
      "Primary CNS lymphoma \u2014 HIV or immunocompromised; periventricular; DWI different; responds to steroids dramatically",
      "Tumefactive MS \u2014 young patient; incomplete ring enhancement; CSF oligoclonal bands"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'just another sinus infection' given patient's chronic sinusitis history and recent antibiotic treatment, potentially missing the intracranial complication",
      "prematureClosure": "May stop at complicated sinusitis diagnosis without considering intracranial spread, especially given patient's ongoing antibiotic treatment",
      "availabilityBias": "Common presentation of headache and sinus symptoms may lead to considering only routine diagnoses rather than life-threatening intracranial complications"
    },
    "coachPrompts": {
      "phase2": "This patient has chronic sinusitis and is on antibiotics, but his headache is worsening. What red flags in his presentation should make you concerned about complications beyond simple sinusitis? Consider what intracranial complications can arise from untreated or inadequately treated sinus infections.",
      "phase5": "You've identified concerning neurological signs including papilledema and altered mental status in a patient with chronic sinusitis. How do these findings change your differential diagnosis? What is the most likely mechanism by which his sinus infection could cause these neurological symptoms?",
      "finalDebrief": "This case demonstrates how chronic sinusitis can lead to serious intracranial complications through contiguous spread. The key learning points include recognizing red flags like altered mental status, papilledema, and neurological symptoms in the setting of refractory sinusitis. Early recognition is crucial as brain abscesses require immediate neurosurgical consultation and prolonged antibiotic therapy.",
      "final": "Diagnosis: brain abscess from sinogenic spread. Key learning: (1) Brain abscess sources and typical organisms: sinusitis/otitis (streptococci, anaerobes, gram-negatives), dental (streptococci, anaerobes), post-neurosurgical/trauma (S. aureus, gram-negatives), hematogenous spread (dependent on source). Empiric coverage: ceftriaxone + metronidazole covers most community-acquired abscesses. Add vancomycin for post-surgical or trauma. (2) DWI on MRI is key: pyogenic abscess = restricted diffusion (bright on DWI) from viscous pus. Brain tumor = variable, often no restriction. This distinguishes abscess from necrotic tumor \u2014 critical decision point. MR spectroscopy: lactate + amino acids (succinate, acetate) = abscess. Choline peak = tumor. (3) Surgical indication: abscesses >2.5cm, mass effect, neurological deficits, or failure to respond to antibiotics \u2192 surgical drainage. Aspiration preferred over excision. Culture guides antibiotics. (4) LP is contraindicated in brain abscess with mass effect \u2014 risk of herniation. CT/MRI first always. LP may be done if no mass effect and no herniation risk. (5) Duration: IV antibiotics 6-8 weeks, serial MRI to confirm resolution. Seizure prophylaxis (levetiracetam) for cortical location."
    }
  }
};
