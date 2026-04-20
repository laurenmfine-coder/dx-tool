
window.EMR_DATA = {
  "patient": {
    "name": "Nina Patel",
    "patientHPI": "I woke up this morning with a pounding headache on the left side \u2014 it's more severe than any headache I've had before, and I've never had headaches like this. My roommate says I was acting strange before I went to bed, but I don't really remember much from last night.",
    "dob": "07/15/2000",
    "age": "26",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-509012",
    "language": "English",
    "race": "Pacific Islander",
    "phone": "(713) 555-4519",
    "email": "nina.patel@email.com",
    "address": "1125 Hickory Rd, Birmingham, AL 35207",
    "insurance": "Tricare",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Rite Aid \u2014 Federal Hwy",
    "emergencyContact": {
      "name": "Christopher Morgan",
      "phone": "(412) 555-5560",
      "relationship": "Partner"
    },
    "chiefComplaint": "I don't know what happened Headache is left-sided, throbbing",
    "diagnosis": "New-Onset Seizure Secondary to Brain Mass (Glioblastoma)"
  },
  "problems": [
    {
      "problem": "New-onset seizure \u2014 focal with secondary generalization, brain mass on MRI",
      "icd": "G40.109",
      "onset": "2024",
      "status": "Active",
      "notes": "Patricia O'Brien, 62F \u2014 first-ever seizure during dinner. Postictal confusion. MRI: ring-enhancing mass right temporal lobe."
    },
    {
      "problem": "Ring-enhancing lesion \u2014 GBM vs brain metastasis vs abscess differential",
      "icd": "C71.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Ring-enhancing mass with surrounding edema. Age 62, no known primary cancer, no fever \u2014 GBM most likely."
    },
    {
      "problem": "Elevated ICP \u2014 edema surrounding mass causing midline shift 4mm",
      "icd": "G93.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Mass effect with 4mm midline shift \u2014 dexamethasone for edema, anti-epileptic for seizure prophylaxis."
    }
  ],
  "medications": [
    {
      "name": "Dexamethasone 10mg IV loading, then 4mg q6h \u2014 cerebral edema",
      "sig": "Reduces vasogenic edema from tumor. Significant symptom relief within 24-48h.",
      "prescriber": "Neurology/Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Levetiracetam 1000mg IV BID \u2014 seizure prophylaxis",
      "sig": "Anti-epileptic for tumor-associated seizure. Does not interact with chemotherapy. First-line for tumor seizures.",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Mannitol 1g/kg IV \u2014 if acute herniation signs",
      "sig": "Osmotic diuresis for herniation threat \u2014 hold unless acute deterioration.",
      "prescriber": "Neurosurgery/ICU",
      "start": "2024",
      "refills": 0,
      "status": "Hold \u2014 PRN herniation"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "10:08",
      "bp": "148/88",
      "hr": "92",
      "rr": "16",
      "temp": "37.0\u00b0C",
      "spo2": "98%",
      "pain": "7/10",
      "bmi": "33",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I don't know what happened Headache is left-sided, throbbing",
      "hpi": "Nina Patel is a 26-year-old female presenting with i don't know what happened headache is left-sided, throbbing. Past medical history includes Hypertension, No prior neurologic history. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "New-Onset Seizure Secondary to Brain Mass (Glioblastoma) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Brain Mass Workup",
      "results": [
        {
          "test": "CBC \u2014 normal",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "CRP",
          "value": "8",
          "unit": "mg/L",
          "ref": "<10",
          "flag": ""
        },
        {
          "test": "CEA",
          "value": "2.4",
          "unit": "ng/mL",
          "ref": "<3.0",
          "flag": ""
        },
        {
          "test": "CA 19-9",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "CT chest/abdomen/pelvis",
          "value": "No primary malignancy identified",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "HIV",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "MRI Brain With and Without Contrast",
      "indication": "New-onset seizure",
      "findings": "4.2cm ring-enhancing mass right temporal lobe with surrounding vasogenic edema. 4mm rightward midline shift. No satellite lesions. No leptomeningeal enhancement. Single lesion.",
      "impression": "Single ring-enhancing mass \u2014 GBM most likely given age, single lesion, no known primary. Metastasis, lymphoma, abscess in differential. Neurosurgical biopsy required for definitive diagnosis."
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
    "No brain tumors",
    "Mother: breast cancer at 62"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Former smoker, quit 5 years ago, 15 pack-year history"
    ],
    [
      "Alcohol",
      "Social only"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "High school history teacher"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Nina appears anxious and somewhat disoriented, frequently touching her left temple and squinting slightly. She's cooperative but seems confused about recent events, speaking slowly and occasionally pausing mid-sentence as if trying to remember details. Her distress level is moderate to high, particularly when discussing her memory gaps from the previous evening.",
    "interviewQuestions": [
      "Can you describe exactly when this headache started?",
      "What does the headache feel like - throbbing, sharp, pressing?",
      "On a scale of 1-10, how severe is your pain right now?",
      "Have you had any nausea, vomiting, or vision changes?",
      "You mentioned your roommate said you were acting strange - can you tell me more about that?",
      "Do you remember what you were doing yesterday evening?",
      "Have you had any seizures, weakness, or numbness anywhere?",
      "Any recent head trauma or falls?",
      "Have you ever had headaches like this before?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Any family history of migraines, strokes, or brain problems?",
      "Tell me about your alcohol and drug use"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble thinking clearly right now. Can you ask that differently?",
      "onset": "I woke up around 7 AM with this terrible headache already there. I don't remember having it when I went to bed, but honestly, I don't remember much about last night.",
      "character": "It's this intense throbbing pain, like someone's hitting the left side of my head with a hammer. It pulses with my heartbeat.",
      "location": "It's completely on the left side of my head, mainly around my temple and behind my left eye. It doesn't go anywhere else.",
      "severity": "This is easily a 9 out of 10. I've never had a headache this bad. I can barely function - even the lights in here are making it worse.",
      "aggravating": "Light makes it much worse, and any loud sounds. Moving my head or bending over makes the throbbing more intense.",
      "relieving": "I tried some ibuprofen this morning but it didn't touch it. Nothing seems to help.",
      "associated": "I feel nauseous and threw up once this morning. My roommate says I seemed confused last night, but I don't really remember. I feel dizzy when I stand up.",
      "denies": "No vision changes that I've noticed, no weakness or numbness in my arms or legs, no fever or chills.",
      "history": "No, I've never had headaches like this. I occasionally get mild headaches from stress at work, but nothing even close to this severe.",
      "medications": "Amlodipine",
      "allergies": "NKDA",
      "family": "No family history of migraines or brain problems that I know of. My mother had breast cancer but that's about it.",
      "social": "I'm a high school history teacher. I quit smoking about 5 years ago after smoking for about 15 years. I only drink socially, maybe a glass of wine with dinner. No illegal drugs."
    },
    "examManeuvers": [
      "Blood pressure measurement",
      "Neurological screening exam",
      "Cranial nerve examination",
      "Motor strength testing",
      "Deep tendon reflexes",
      "Cerebellar function testing",
      "Fundoscopic examination",
      "Neck stiffness assessment",
      "Mental status examination",
      "Gait assessment"
    ],
    "examFindings": {
      "Blood pressure measurement": "BP 148/88 mmHg, consistent with hypertensive episode",
      "Neurological screening exam": "Alert but appears uncomfortable, slow to respond to complex questions",
      "Cranial nerve examination": "Pupils equal and reactive, no focal cranial nerve deficits detected",
      "Motor strength testing": "5/5 strength in all extremities, no focal motor deficits",
      "Deep tendon reflexes": "2+ and symmetric throughout, no pathologic reflexes",
      "Cerebellar function testing": "Finger-to-nose and heel-to-shin intact bilaterally",
      "Fundoscopic examination": "Mild arteriovenous nicking consistent with hypertensive changes, no papilledema",
      "Neck stiffness assessment": "No nuchal rigidity, negative Kernig and Brudzinski signs",
      "Mental status examination": "Oriented to person and place, unsure of exact date, mild difficulty with short-term memory",
      "Gait assessment": "Steady gait, no ataxia or focal abnormalities"
    },
    "ddxTargets": [
      "Glioblastoma multiforme \u2014 single ring-enhancing mass, age 62, no primary (correct)",
      "Brain metastasis \u2014 single lesion possible but no primary found on staging CT",
      "CNS lymphoma \u2014 usually multiple lesions or periventricular, immunocompromised (HIV negative)",
      "Brain abscess \u2014 CRP normal, no fever, no immunocompromise; ring-enhancing but DWI may differentiate",
      "Tumefactive MS \u2014 younger patients, different lesion characteristics on MRI",
      "High-grade astrocytoma WHO grade 3 \u2014 differentiated by MGMT/IDH mutation status on biopsy"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the dramatic presentation and memory loss, leading to premature focus on intracranial pathology while overlooking the elevated blood pressure as a primary cause",
      "prematureClosure": "The severe headache and confusion may lead to immediate assumption of serious intracranial pathology without fully considering hypertensive causes, especially given her known hypertension history",
      "availabilityBias": "Recent cases of subarachnoid hemorrhage or meningitis may come to mind given the severity and acute onset, potentially overshadowing the more common hypertensive etiology"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I see you're considering both primary headache disorders and secondary causes. Given this patient's age and the severity of presentation, what key historical elements will help you differentiate between these possibilities? What red flags should you specifically explore?",
      "phase5": "You've gathered comprehensive information. Let's think through this systematically - you have a 26-year-old with known hypertension presenting with severe unilateral headache and elevated BP. How do the patient's vital signs fit with your differential diagnosis? What's the relationship between her current symptoms and her past medical history?",
      "finalDebrief": "This case illustrates how hypertensive headaches can present dramatically and mimic more serious pathology. Notice how the elevated blood pressure, known hypertension history, and absence of focal neurologic deficits pointed toward hypertensive urgency. The key learning point is recognizing when elevated blood pressure itself can be the primary cause of severe headache, rather than just a secondary response to pain or intracranial pathology.",
      "final": "Diagnosis: new-onset seizure from brain mass, GBM most likely. Key learning: (1) New-onset seizure in adults >40 warrants brain imaging \u2014 MRI with contrast preferred. Structural cause (tumor, abscess, vascular malformation) must be excluded before diagnosing new epilepsy. (2) Ring-enhancing lesion differential: MAGIC mnemonic \u2014 Metastasis, Abscess, Glioblastoma, Infarct (subacute), Contusion. In immunocompetent adult >50 with single lesion and no known primary: GBM first. Multiple lesions \u2192 metastases. In immunocompromised (HIV CD4 <200): Toxoplasma vs CNS lymphoma (Toxoplasma responds to empiric treatment in 2 weeks \u2014 if no response, biopsy for PCNSL). (3) GBM characteristics: IDH wild-type, high mitotic index, necrosis histologically, MGMT promoter methylation status (predicts temozolomide response). Median survival 14-16 months with Stupp protocol (surgery + RT + temozolomide). (4) Dexamethasone for brain tumor edema: works within 24-48h \u2014 reduces vasogenic edema from blood-brain barrier disruption. Does NOT treat the tumor. Beware: hyperglycemia, GI bleeding (add PPI), behavioral changes, adrenal suppression with prolonged use. (5) Levetiracetam for tumor-associated seizure: preferred over phenytoin/carbamazepine \u2014 fewer drug interactions with chemotherapy and immunosuppressants, no enzyme induction. Not recommended prophylactically in patients with brain tumor who have NOT yet seized."
    }
  },
  "meta": {
    "diagnosis": "New-Onset Seizure \u2014 Brain Mass, Glioblastoma Multiforme vs Metastasis, Neurosurgery and Oncology Evaluation",
    "caseId": "new-seizure-mass"
  }
};
