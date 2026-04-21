
window.EMR_DATA = {
  "patient": {
    "name": "Patricia Lawson",
    "patientHPI": "I've been coming in regularly for my cancer treatments and generally feeling pretty good. I still have that cough from my lung condition, but it's nothing new. My appetite could be better, but my weight has stayed the same, and I'm not having any trouble breathing or pain anywhere.",
    "dob": "09/08/1962",
    "age": 62,
    "sex": "Female",
    "mrn": "RDX-2025-62418",
    "pronouns": "She/Her",
    "insurance": "Aetna PPO",
    "pcp": "Dr. Michael Torres, MD",
    "pharmacy": "Walgreens \u2014 2700 E Oakland Park Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "4047 Walnut Dr, Memphis, TN 38114",
    "phone": "(954) 555-4817",
    "email": "p.lawson62@email.com",
    "emergencyContact": {
      "name": "David Lawson (Husband)",
      "phone": "(954) 555-4820"
    },
    "chiefComplaint": "First-ever seizure at home"
  },
  "problems": [
    {
      "problem": "Multiple brain metastases \u2014 NSCLC origin, 3 lesions",
      "icd": "C79.31",
      "onset": "2024",
      "status": "Active",
      "notes": "Richard Thompson, 66M \u2014 heavy smoker, newly diagnosed NSCLC stage IV (2 months ago). New generalized tonic-clonic seizure. MRI: 3 enhancing lesions \u2014 right frontal (2.1cm), left cerebellar (1.4cm), right temporal (0.9cm)."
    },
    {
      "problem": "New-onset seizure \u2014 from right frontal metastasis",
      "icd": "G40.119",
      "onset": "2024",
      "status": "Active",
      "notes": "Focal onset (right frontal lobe irritation) with secondary generalization. Post-ictal confusion on presentation. Load antiepileptic."
    },
    {
      "problem": "NSCLC \u2014 EGFR/ALK/ROS1 mutation status critical",
      "icd": "C34.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Molecular profiling determines systemic treatment. EGFR-mutated NSCLC: osimertinib crosses BBB and treats both systemic and brain disease. ALK-rearranged: alectinib has excellent CNS penetration."
    }
  ],
  "medications": [
    {
      "name": "Levetiracetam 1g IV loading \u2192 500mg BID maintenance",
      "sig": "Antiepileptic for seizure from brain metastasis. Levetiracetam preferred \u2014 no CYP450 drug interactions with chemotherapy or targeted agents.",
      "prescriber": "Neurology/Oncology",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 loaded"
    },
    {
      "name": "Dexamethasone 10mg IV then 4mg q6h",
      "sig": "Reduces vasogenic edema around multiple lesions. Symptom relief within 24-48h.",
      "prescriber": "Neurology/Oncology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Whole brain radiation therapy vs SRS \u2014 multidisciplinary decision",
      "sig": "3 lesions: SRS preferred if lesions accessible and PS good. WBRT for extensive disease or leptomeningeal involvement. If EGFR+: osimertinib as systemic treatment also has intracranial activity.",
      "prescriber": "Radiation/Medical Oncology",
      "start": "2024",
      "refills": 0,
      "status": "Planning \u2014 MDT"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Anaphylaxis (age 20 \u2014 throat swelling, hypotension)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Shellfish",
      "type": "Food",
      "reaction": "Hives, lip swelling",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2025",
      "bp": "168/98",
      "hr": 102,
      "rr": 20,
      "temp": "98.8\u00b0F",
      "spo2": "94%",
      "wt": "132 lbs",
      "ht": "5'6\"",
      "bmi": 21.3,
      "setting": "ED"
    },
    {
      "date": "02/10/2025",
      "bp": "128/78",
      "hr": 76,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "95%",
      "wt": "134 lbs",
      "ht": "5'6\"",
      "bmi": 21.6,
      "setting": "Oncology Infusion Center"
    },
    {
      "date": "08/14/2024",
      "bp": "124/74",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "96%",
      "wt": "138 lbs",
      "ht": "5'6\"",
      "bmi": 22.3,
      "setting": "Oncology Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/10/2025",
      "type": "Specialist",
      "provider": "Dr. Amrit Singh, MD (Oncology)",
      "cc": "Durvalumab infusion #24; routine surveillance",
      "hpi": "62-year-old female with NSCLC stage IIIA on durvalumab maintenance presenting for scheduled infusion. Reports feeling generally well. Mild persistent cough but unchanged from baseline COPD. Denies hemoptysis, dyspnea at rest, bone pain, neurologic symptoms. Weight stable. Appetite fair. No infusion reactions. Recent CT chest (01/2025) shows continued partial response \u2014 primary tumor decreased to 2.1 cm from initial 3.8 cm. No new lesions on chest imaging.",
      "exam": "General: Well-appearing, thin female. Lungs: Diminished breath sounds at right base (baseline post-radiation). CV: RRR. Abdomen: Soft, NT. Neuro: A&O x3, cranial nerves intact, no focal deficits. ECOG PS: 1.",
      "assessment": "1. NSCLC stage IIIA \u2014 continued partial response on durvalumab\n2. COPD \u2014 stable\n3. No adverse immune-related events",
      "plan": "1. Durvalumab infusion administered\n2. Next CT chest/abd/pelvis due 04/2025\n3. Brain MRI due 04/2025 (routine q6-month surveillance)\n4. Continue current regimen\n5. RTC 2 weeks for next infusion"
    },
    {
      "id": "V002",
      "date": "08/14/2024",
      "type": "Specialist",
      "provider": "Dr. Amrit Singh, MD (Oncology)",
      "cc": "Restaging CT review \u2014 partial response",
      "hpi": "62-year-old with NSCLC presenting for restaging review. CT chest (08/2024): RUL mass decreased to 2.4 cm (from 3.8 cm at diagnosis). No new pulmonary lesions. Mediastinal LN stable to decreased. Brain MRI (08/2024): No intracranial metastases. Liver, adrenals: No metastases. Patient feeling well. Working part-time. Minimal treatment side effects.",
      "exam": "General: Well-appearing. Lungs: Diminished at R base. Neuro: Intact. ECOG: 1.",
      "assessment": "1. NSCLC \u2014 partial response per RECIST criteria\n2. Brain MRI negative for metastases (08/2024)\n3. Tolerating durvalumab well",
      "plan": "1. Continue durvalumab maintenance\n2. Repeat imaging in 3 months\n3. Continue surveillance schedule"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Brain Metastasis/NSCLC Workup",
      "results": [
        {
          "test": "EGFR mutation status",
          "value": "Exon 19 deletion \u2014 POSITIVE",
          "unit": "",
          "ref": "Wild-type",
          "flag": "H"
        },
        {
          "test": "ALK rearrangement",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "PD-L1 expression",
          "value": "30%",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Performance status (ECOG)",
          "value": "1",
          "unit": "",
          "ref": "0 = fully active",
          "flag": ""
        },
        {
          "test": "Post-ictal glucose",
          "value": "Normal",
          "unit": "",
          "ref": "Rule out hypoglycemia",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "MRI Brain with Gadolinium",
      "findings": "Three enhancing lesions: right frontal 2.1cm (with surrounding edema), left cerebellar 1.4cm, right temporal 0.9cm. No leptomeningeal enhancement. Midline shift 5mm from right frontal lesion.",
      "impression": "Multiple brain metastases, pattern consistent with hematogenous spread. Primary unknown by imaging \u2014 NSCLC consistent with clinical context."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose \u2014 Fluzone)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FH828R",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV792T",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 \u2014 Prevnar 20)",
      "date": "01/2024",
      "site": "Left deltoid IM",
      "lot": "PV841K",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1st dose)",
      "date": "09/2022",
      "site": "Right deltoid IM",
      "lot": "SH382P",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2nd dose)",
      "date": "11/2022",
      "site": "Right deltoid IM",
      "lot": "SH388P",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother (age 86): Hypertension, osteoarthritis \u2014 alive and well",
    "Father: Deceased at age 71 \u2014 lung cancer (small cell), 50 pack-year smoker",
    "Sister (age 58): Breast cancer \u2014 stage I, treated with lumpectomy/radiation 2021, NED",
    "Brother (age 65): COPD, hypertension",
    "Strong family history of tobacco-related malignancy"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Part-time office manager; reduced hours since diagnosis"
    ],
    [
      "Marital",
      "Married x 38 years; lives with husband"
    ],
    [
      "Tobacco",
      "Former smoker \u2014 35 pack-years (1 PPD x 35 years); quit 09/2023 at diagnosis"
    ],
    [
      "Alcohol",
      "Social \u2014 1-2 glasses wine per week"
    ],
    [
      "Drugs",
      "None"
    ],
    [
      "Exercise",
      "Walks daily; limited by mild dyspnea on exertion"
    ],
    [
      "Housing",
      "Single-family home"
    ],
    [
      "Safety",
      "No concerns; husband is primary support; daughter visits weekly"
    ],
    [
      "Advance Directive",
      "Yes \u2014 full code; healthcare proxy: husband (David Lawson)"
    ]
  ],
  "meta": {
    "caseId": "brain-metastasis",
    "diagnosis": "Brain Metastases \u2014 Multiple Lesions from NSCLC with New-Onset Seizure",
    "acuity": 2,
    "presentation": "Seizure",
    "category": "oncologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patricia appears anxious but cooperative, clearly shaken by this new symptom. She's forthcoming with information but seems worried about what this seizure means for her cancer prognosis. Her distress level is moderate - she's maintaining composure but you can sense her underlying fear.",
    "interviewQuestions": [
      "Can you describe exactly what happened during the seizure?",
      "How long did the seizure last?",
      "Did you lose consciousness or have any memory loss?",
      "Have you had any headaches recently?",
      "Any vision changes or visual disturbances?",
      "Have you noticed any weakness or numbness in your arms or legs?",
      "Any confusion, difficulty speaking, or trouble finding words?",
      "Have you had any nausea or vomiting?",
      "Any changes in your balance or coordination?",
      "Have you been taking all your cancer medications as prescribed?",
      "Any recent changes in your cancer treatment?",
      "Have you had any recent imaging studies of your brain?",
      "Any family history of seizures or brain tumors?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "It happened about 2 hours ago while I was sitting at the kitchen table having breakfast. My husband said I just started shaking all over and my eyes rolled back.",
      "character": "My husband described it as my whole body shaking and jerking. I was making some kind of grunting sounds. It was terrifying for him to watch.",
      "location": "The shaking was all over my body, but my husband said it seemed to start on the right side of my face and then spread.",
      "severity": "I don't remember the seizure itself, but the aftermath has been awful - about an 8 out of 10. I'm exhausted, confused, and have a terrible headache.",
      "aggravating": "The headache gets worse when I move my head quickly or when the lights are bright.",
      "relieving": "Nothing really helps the headache. I tried some Tylenol but it didn't touch it.",
      "associated": "I've had this nagging headache for about a week now, and I've been feeling a bit more confused lately. Sometimes I have trouble finding the right words.",
      "denies": "No fever, no chest pain, no shortness of breath beyond my usual COPD symptoms. No recent falls or head injuries.",
      "history": "Never had anything like this before in my life. No seizures, no fainting spells, nothing.",
      "medications": "Durvalumab 10mg/kg IV q2 weeks; Tiotropium (Spiriva) 18mcg inhaled daily; Albuterol MDI 90mcg 2 puffs Q4-6h PRN; Lisinopril 10mg daily; Denosumab (Prolia) 60mg SC q6 months; Ondansetron 4mg Q8h PRN",
      "allergies": "Penicillin, Shellfish",
      "family": "My father died from lung cancer, but no one in my family has ever had seizures or brain problems that I know of.",
      "social": "I work part-time as an office manager but had to reduce my hours since my cancer diagnosis. I'm married and live with my husband. I quit smoking when I was diagnosed in September 2023 - I smoked a pack a day for 35 years. I only drink socially, maybe 1-2 glasses of wine per week."
    },
    "examManeuvers": [
      "Mental status examination",
      "Cranial nerve examination",
      "Motor strength testing",
      "Deep tendon reflexes",
      "Coordination testing",
      "Gait assessment",
      "Fundoscopic examination",
      "Sensory examination",
      "Babinski reflex",
      "Speech and language assessment"
    ],
    "examFindings": {
      "Mental status examination": "Alert but mildly confused, oriented to person and place but unsure of date. Difficulty with attention and short-term memory. Mild word-finding difficulty.",
      "Cranial nerve examination": "Subtle right facial droop, mild right homonymous hemianopsia on visual field testing. Other cranial nerves intact.",
      "Motor strength testing": "Mild right-sided weakness - right arm 4/5, right leg 4+/5. Left side strength 5/5 throughout.",
      "Deep tendon reflexes": "Hyperreflexic on the right (3+), normal on the left (2+). Right ankle clonus present.",
      "Coordination testing": "Mild dysmetria on right finger-to-nose testing. Left side coordination normal.",
      "Gait assessment": "Unsteady with mild right leg weakness, favoring left side. Requires minimal assistance.",
      "Fundoscopic examination": "Mild papilledema bilaterally consistent with increased intracranial pressure.",
      "Sensory examination": "Decreased light touch and pinprick sensation on right side compared to left.",
      "Babinski reflex": "Upgoing on the right, downgoing on the left.",
      "Speech and language assessment": "Mild expressive aphasia with word-finding difficulties. Comprehension intact."
    },
    "ddxTargets": [
      "Multiple brain metastases \u2014 NSCLC (correct)",
      "Primary CNS lymphoma \u2014 periventricular; immunocompromised; single lesion more common; responds dramatically to steroids",
      "GBM with satellite lesions \u2014 irregular enhancement; mass effect dominant; no known primary",
      "Brain abscesses (multiple) \u2014 fever; restricted DWI; source of infection",
      "Demyelinating disease (MS) \u2014 younger patient; periventricular; Dawson fingers on MRI; no enhancement pattern like met",
      "Toxoplasmosis \u2014 HIV; CD4 <200; ring-enhancing; responds to pyrimethamine/sulfadiazine empirically"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known cancer diagnosis and missing other acute causes of seizure like stroke or infection",
      "prematureClosure": "Risk of immediately assuming brain metastases without considering other intracranial processes or systemic causes",
      "availabilityBias": "Recent cases of simple seizure disorders might lead to underestimating the significance of focal neurological findings"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given that this is a new-onset seizure in a 62-year-old with known lung cancer, what specific features in your history and physical exam will help you distinguish between metastatic disease and other serious intracranial processes?",
      "phase5": "Now that you've identified focal neurological deficits and signs of increased intracranial pressure, how does this change your differential? What's the most likely explanation for a new seizure with these findings in a patient with known NSCLC?",
      "finalDebrief": "This case demonstrates how new neurological symptoms in cancer patients require urgent evaluation. The combination of new-onset seizure, focal deficits, and signs of increased ICP in a patient with NSCLC strongly suggests brain metastases. Notice how the initial presentation could have been attributed to various causes, but the focal findings and known primary malignancy guided us to the correct diagnosis.",
      "final": "Diagnosis: multiple brain metastases from NSCLC (EGFR-mutated). Key learning: (1) EGFR-mutated NSCLC and osimertinib: this is the most important molecular finding here. Osimertinib (3rd-generation EGFR TKI) penetrates the BBB and has demonstrated intracranial response rates >80%. For EGFR+ NSCLC with brain metastases, osimertinib is preferred first-line systemic therapy AND treats the brain disease simultaneously \u2014 may allow deferral of radiation. (2) New-onset seizure workup: always obtain glucose immediately. Post-ictal confusion is normal and temporary. Load antiepileptic. Get MRI (not CT) for suspected brain metastasis \u2014 superior sensitivity. (3) Multiple brain metastases treatment: \u22644 discrete lesions, good PS \u2192 SRS to all lesions (avoids WBRT cognitive toxicity). >4 lesions or leptomeningeal \u2192 WBRT. WBRT causes cognitive decline \u2014 the QUARTZ trial showed no survival benefit of WBRT over supportive care in poor-PS NSCLC. (4) Molecular profiling in NSCLC stage IV: EGFR exon 19/21 (osimertinib), ALK rearrangement (alectinib, brigatinib), ROS1, BRAF V600E, MET exon 14, RET, KRAS G12C \u2014 each has a targeted therapy. Reflexive next-generation sequencing at diagnosis. (5) Antiepileptic choice: levetiracetam preferred over phenytoin/valproate in oncology patients \u2014 no CYP450 interactions with chemotherapy."
    }
  }
};
