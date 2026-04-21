// Virtual EMR Case: Structural Lesion
// Variant: structural-lesion | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Rachel Dominguez",
    "patientHPI": "About three weeks ago I had the strangest experience - I suddenly felt like I'd lived that exact moment before, and then I smelled something like burning rubber that wasn't really there. It only lasted about 30 seconds but it was really weird and unlike anything I've ever experienced.",
    "dob": "11/20/1989",
    "age": 35,
    "sex": "Female",
    "mrn": "RDX-2025-44218",
    "pronouns": "She/Her",
    "insurance": "Aetna — PPO",
    "pcp": "Dr. Sandra Delgado, MD",
    "pharmacy": "CVS Pharmacy — 3260 S University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino (Cuban-American)",
    "address": "3853 Larkspur Ln, Cleveland, OH 44106",
    "phone": "(954) 555-4812",
    "email": "r.dominguez89@email.com",
    "emergencyContact": {
      "name": "Carlos Dominguez (Husband)",
      "phone": "(954) 555-4815"
    },
    "chiefComplaint": "Sudden seizure"
  },
  "problems": [
    {
      "problem": "Cerebral Cavernous Malformation — Left Temporal Lobe",
      "icd": "Q28.3",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — new-onset focal seizure with secondary generalization; MRI reveals cavernous malformation with acute hemorrhage"
    },
    {
      "problem": "Anxiety Disorder — Generalized",
      "icd": "F41.1",
      "onset": "2017",
      "status": "Active",
      "notes": "On sertraline; well-controlled; occasional therapy sessions"
    },
    {
      "problem": "Migraines without Aura",
      "icd": "G43.009",
      "onset": "2014",
      "status": "Active",
      "notes": "2-3 per month; managed with ibuprofen and rest; declines prophylaxis"
    },
    {
      "problem": "Iron Deficiency Anemia — Recurrent",
      "icd": "D50.9",
      "onset": "2022",
      "status": "Active",
      "notes": "Related to heavy menstruation; on oral iron supplementation; Hgb 11.2 at last check"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 100mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Delgado",
      "start": "08/2017",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Ferrous Sulfate 325mg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach with vitamin C",
      "prescriber": "Dr. Delgado",
      "start": "03/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 400mg Q6h PRN",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for migraine (max 1600mg/day)",
      "prescriber": "Dr. Delgado",
      "start": "2015",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Combined Oral Contraceptive (Levonorgestrel/EE)",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Delgado",
      "start": "01/2020",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Latex",
      "type": "Environmental",
      "reaction": "Contact dermatitis, urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/23/2025",
      "bp": "138/84",
      "hr": 96,
      "rr": 18,
      "temp": "98.8°F",
      "spo2": "99%",
      "wt": "142 lbs",
      "ht": "5'5\"",
      "bmi": 23.6,
      "setting": "ED"
    },
    {
      "date": "09/18/2024",
      "bp": "118/72",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "140 lbs",
      "ht": "5'5\"",
      "bmi": 23.3,
      "setting": "PCP Office"
    },
    {
      "date": "03/12/2024",
      "bp": "116/70",
      "hr": 68,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'5\"",
      "bmi": 23,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Sandra Delgado, MD",
      "cc": "Annual exam; migraine follow-up; anemia recheck",
      "hpi": "35-year-old female for annual exam. Migraines occurring 2-3x/month, managed with ibuprofen. Anxiety well-controlled on sertraline. Menstrual periods heavy but regular. Reports one episode of 'déjà vu' lasting about 30 seconds followed by strange smell (like burning rubber) 3 weeks ago — 'really weird but it went away.' No headache associated. Husband did not witness any abnormal movements. Attributes to stress.",
      "exam": "General: Well-appearing, healthy female. HEENT: PERRL, EOMI. CV: RRR. Lungs: CTA. Abdomen: Soft, NT. Neuro: A&O x3, nonfocal. Gait: Normal.",
      "assessment": "1. Annual exam — overall healthy\n2. Episode of déjà vu + olfactory hallucination — likely benign but could represent temporal lobe seizure; monitor\n3. Migraines — stable\n4. Anxiety — well-controlled\n5. Iron deficiency anemia — improving on iron",
      "plan": "1. Labs: CBC, iron panel, ferritin\n2. If déjà vu/olfactory episodes recur → neurology referral for EEG\n3. Continue sertraline, iron, OCP\n4. Mammogram: not yet due\n5. RTC 12 months or sooner if episodes recur"
    },
    {
      "id": "V002",
      "date": "01/22/2025",
      "type": "Primary Care",
      "provider": "Dr. Sandra Delgado, MD",
      "cc": "Recurring déjà vu episodes — 4 more since September, increasing frequency",
      "hpi": "35-year-old female returns regarding recurrent episodes. Reports 4 additional episodes since September, most recent 3 days ago. Pattern: sudden intense déjà vu, followed by burning/metallic smell, then 30-60 seconds of 'zoning out' where she cannot respond. Husband witnessed the last episode — reports patient stared blankly, made lip-smacking movements, and was confused for 2-3 minutes afterward. No loss of consciousness. No tonic-clonic activity. No tongue biting or incontinence. Episodes are now occurring every 2-3 weeks.",
      "exam": "General: Well-appearing, anxious about symptoms. Neuro: A&O x3. All cranial nerves intact. Motor 5/5. Sensory intact. Gait: Normal. No postictal features currently.",
      "assessment": "1. Recurrent stereotyped episodes with déjà vu, olfactory aura, behavioral arrest, and oral automatisms — CLASSIC temporal lobe seizures (focal aware → focal impaired awareness)\n2. Needs urgent neurology evaluation, MRI, and EEG",
      "plan": "1. URGENT neurology referral — Dr. Patel\n2. STAT MRI brain with contrast\n3. EEG ordered\n4. Start levetiracetam 500mg BID (seizure prophylaxis pending workup)\n5. DO NOT DRIVE until cleared by neurology\n6. Return precautions: GTC seizure, prolonged confusion, new weakness → ED"
    }
  ],
  "labs": [
    {
      "date": "02/23/2025",
      "time": "15:42",
      "orderedBy": "Dr. Amanda Liu, MD (ED)",
      "collected": "02/23/2025 15:28",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-100814",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "94",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "12",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.7",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.0",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.2",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "Magnesium",
              "value": "1.9",
              "unit": "mg/dL",
              "range": "1.7-2.2",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "7.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "11.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "34.2",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "MCV",
              "value": "78",
              "unit": "fL",
              "range": "80-100",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "248",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Ferritin",
              "value": "14",
              "unit": "ng/mL",
              "range": "12-150",
              "flag": ""
            },
            {
              "test": "Iron",
              "value": "42",
              "unit": "µg/dL",
              "range": "60-170",
              "flag": "L"
            }
          ]
        },
        {
          "name": "ANTIEPILEPTIC DRUG LEVEL",
          "results": [
            {
              "test": "Levetiracetam Level",
              "value": "8.2",
              "unit": "µg/mL",
              "range": "12-46 (therapeutic)",
              "flag": "L"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/23/2025",
      "study": "MRI BRAIN WITH AND WITHOUT CONTRAST",
      "accession": "IMG-2025-10042",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Liu, MD (ED)",
      "readBy": "Dr. Robert Nash, MD (Neuroradiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "35-year-old with focal temporal lobe seizures progressing to GTC; on levetiracetam (subtherapeutic level); known temporal lobe aura pattern",
      "technique": "Multiplanar MRI of the brain without and with gadolinium contrast. Sequences: T1, T2, FLAIR, DWI, SWI, post-contrast T1.",
      "findings": "LEFT MESIAL TEMPORAL LOBE: A well-circumscribed, lobulated lesion in the left mesial temporal lobe (amygdala/hippocampus region) measuring 2.2 x 1.8 x 2.0 cm. The lesion demonstrates the characteristic 'popcorn' or 'mulberry' appearance with mixed signal intensities on T1 and T2 — bright center (methemoglobin from subacute hemorrhage) surrounded by a dark hemosiderin rim on SWI and T2.\n\nHEMORRHAGE: Evidence of recent hemorrhage within the lesion — bright T1 signal centrally with surrounding blooming artifact on SWI, indicating acute-on-chronic bleeding. The hemorrhagic component extends slightly beyond the prior hemosiderin rim, measuring approximately 3 mm beyond the lesion margin.\n\nSURROUNDING BRAIN: Mild T2/FLAIR signal change in the left mesial temporal structures surrounding the lesion — likely a combination of edema from recent hemorrhage and gliosis from chronic irritation.\n\nDEVELOPMENTAL VENOUS ANOMALY: A small developmental venous anomaly (DVA) is noted in the left temporal white matter adjacent to the cavernous malformation — common associated finding.\n\nNO ENHANCEMENT: No abnormal contrast enhancement. No surrounding mass effect. No midline shift.\n\nOTHER: No additional lesions on SWI (solitary cavernous malformation). No hydrocephalus.",
      "impression": "1. LEFT MESIAL TEMPORAL CAVERNOUS MALFORMATION (2.2 cm) with evidence of acute hemorrhage — classic 'popcorn' appearance with hemosiderin rim and acute T1-bright hemorrhage\n2. Location in mesial temporal lobe (amygdala/hippocampus) explains temporal lobe seizure semiology (déjà vu, olfactory aura, oral automatisms)\n3. Associated DVA — typical\n4. Solitary lesion — no familial pattern (multiple cavernomas)\n5. Neurosurgery consultation recommended given symptomatic hemorrhage and medically refractory seizures",
      "dictated": "02/23/2025 16:30",
      "verified": "02/23/2025 16:42"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL818K",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Moderna, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV762T",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "TA242R",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2012",
      "site": "Left deltoid IM",
      "lot": "HP412K",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother (age 62): Hypertension, anxiety disorder",
    "Father (age 64): Type 2 Diabetes, hyperlipidemia",
    "Sister (age 32): Healthy",
    "Maternal grandmother (age 84): Stroke at age 78; hypertension",
    "No family history of seizure disorder, brain tumors, or multiple cavernous malformations"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Elementary school teacher — full-time; on medical leave since seizure"
    ],
    [
      "Marital",
      "Married x 8 years; lives with husband; trying to conceive (planning to stop OCP)"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social — 1-2 glasses wine per week (stopped since seizure diagnosis)"
    ],
    [
      "Drugs",
      "None"
    ],
    [
      "Exercise",
      "Yoga 3x/week, running 2x/week"
    ],
    [
      "Housing",
      "Townhouse"
    ],
    [
      "Safety",
      "Not driving per neurology instruction; husband provides transportation"
    ],
    [
      "Advance Directive",
      "None"
    ]
  ],
  "meta": {
    "caseId": "structural-lesion",
    "diagnosis": "Cerebral Cavernous Malformation with Acute Hemorrhage and Focal-to-Bilateral Tonic-Clonic Seizure",
    "acuity": 3,
    "presentation": "Seizure",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Rachel Dominguez appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did seizure start?",
      "Can you describe exactly how it started — sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history — any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle — work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started About three weeks ago I had the strangest experience - I suddenly felt like I'd .'",
      "character": "'It's seizure — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Cerebral Cavernous Malformation.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Sertraline 100mg daily; Ferrous Sulfate 325mg daily; Ibuprofen 400mg Q6h PRN; Combined Oral Contraceptive (Levonorgestrel/EE).'",
      "allergies": "'My allergies are Latex.'",
      "family": "Mother (age 62): Hypertension, anxiety disorder  Father (age 64): Type 2 Diabetes, hyperlipidemia  Sister (age 32): Healthy",
      "social": "Occupation: Elementary school teacher — full-time; on medical leave since seizure  Marital: Married x 8 years; lives with husband; trying to conceive (planning to stop OCP)  Tobacco: Never  Alcohol: Social — 1-2 glasses wine per week (stopped since seizure diagnosis)  Drugs: None"
    },
    "examManeuvers": [
      "General appearance and level of distress",
      "Vital signs review",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Extremity assessment",
      "Skin examination",
      "Targeted system examination"
    ],
    "examFindings": {
      "General appearance and level of distress": "Clinical finding consistent with Cerebral Cavernous Malformation. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Cerebral Cavernous Malformation. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Cerebral Cavernous Malformation. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Cerebral Cavernous Malformation. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Cerebral Cavernous Malformation. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Cerebral Cavernous Malformation. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Cerebral Cavernous Malformation. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Cerebral Cavernous Malformation. Document specifically what you observe."
    },
    "ddxTargets": [
      "Cerebral Cavernous Malformation (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Cerebral Cavernous Malformation, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Cerebral Cavernous Malformation, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Cerebral Cavernous Malformation based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Rachel Dominguez's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Cerebral Cavernous Malformation (Left Mesial Temporal) with Acute Hemorrhage and Focal-to-Bilateral Tonic-Clonic Seizure. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: cerebral cavernous malformation (cavernoma) in the left mesial temporal lobe with acute hemorrhage presenting as focal seizure with bilateral tonic-clonic evolution. Key learning: (1) Cerebral cavernous malformations (CCMs) are clusters of enlarged, thin-walled vascular channels without intervening neural tissue, accounting for ~10-15% of all cerebral vascular malformations. Characteristic 'mulberry' or 'popcorn' appearance on MRI (T2-weighted with dark hemosiderin rim from prior microbleeds, heterogeneous internal signal). Two forms: sporadic (usually single, ~80%) and familial (multiple lesions, KRIT1/CCM1, CCM2, PDCD10/CCM3 mutations, autosomal dominant with variable penetrance, particularly common in Hispanic populations). (2) Clinical presentations of CCM: (a) Seizures (most common, up to 50%) — especially with cortical or mesial temporal location. (b) Focal neurologic deficits from hemorrhage or mass effect. (c) Headache. (d) Incidental finding on imaging for other indications. Annual hemorrhage risk: ~0.25-2% per lesion per year (higher with prior hemorrhage, brainstem location, and familial forms). (3) Diagnosis. MRI is the gold standard — T2-weighted and especially SWI (susceptibility-weighted imaging) or GRE (gradient echo) sequences best demonstrate CCMs and associated hemosiderin. CT may show acute hemorrhage but misses small or non-hemorrhagic CCMs. Catheter angiography is typically NORMAL in CCM (unlike AVMs) — 'angiographically occult vascular malformation' — because flow is low and vessels don't opacify. Genetic testing for familial forms (multiple lesions, family history) — implications for siblings and offspring. (4) Management. (a) Acute hemorrhage: supportive care (head elevation, BP control, euvolemia), reverse coagulopathy, neurosurgical consultation. Typically small to moderate hemorrhages are managed non-operatively; large hemorrhages with mass effect may need surgical evacuation. (b) Seizure management: anti-seizure medication — levetiracetam preferred (fewer interactions, good tolerability); follow with EEG, clinical course. (c) Surgical resection: considered for symptomatic CCMs with recurrent seizures (especially drug-resistant), recurrent hemorrhage, or progressive deficits. Accessible supratentorial lesions: good surgical outcomes. Brainstem or deep/eloquent lesions: higher surgical risk; often observed unless hemorrhage is recurrent or progressive. (d) Stereotactic radiosurgery — role controversial; reserved for inoperable CCMs with recurrent hemorrhage. (e) Pharmacotherapy trials exploring statins, propranolol, and other agents are ongoing. (5) Long-term and familial considerations. Serial MRI surveillance (usually annually or with symptom change). Genetic counseling for familial CCM — siblings and offspring may benefit from screening MRI. Avoid anticoagulation when possible — individualize based on CCM burden, location, bleeding history, and anticoagulation indication (not absolutely contraindicated but decisions are nuanced). Pregnancy counseling — no strong evidence of increased hemorrhage risk but individual risk assessment appropriate. Seizure precautions: driving restrictions per local law, water safety, heights, dangerous machinery. Classic pitfalls: (a) missing CCM on CT — MRI is essential for diagnosis. (b) Confusing a CCM with other vascular malformations (AVM, DVA, capillary telangiectasia) — has different management implications. (c) Avoiding all anticoagulation when clearly indicated (e.g., for mechanical valve or high-risk AF) — requires risk-benefit analysis with neurology and hematology. (d) Not offering genetic testing and family screening in patients with multiple CCMs. (e) Aggressive surgical resection of all CCMs — many are safely observed; intervention should be driven by symptoms and feasibility."
    }
  }
};
