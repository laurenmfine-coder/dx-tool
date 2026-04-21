
window.EMR_DATA = {
  "patient": {
    "name": "Hyun-Soo Kim",
    "patientHPI": "I'm here for my regular visit to check on my blood pressure and diabetes - I know my pressure readings at home have been really high even though I'm on three medications, but I'll be honest, I skip my afternoon water pill a lot because it makes me have to go to the bathroom too much at work.",
    "dob": "09/08/1960",
    "age": 65,
    "sex": "Male",
    "mrn": "RDX-2025-43928",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B with United Healthcare Supplement",
    "pcp": "Dr. David Tanaka, MD",
    "pharmacy": "CVS Pharmacy \u2014 901 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English, Korean",
    "race": "Asian",
    "address": "8229 Foxglove Dr, Phoenix, AZ 85007",
    "phone": "(954) 555-3756",
    "email": "hskim60@email.com",
    "emergencyContact": {
      "name": "Minji Kim (Wife)",
      "phone": "(954) 555-3770"
    },
    "chiefComplaint": "Sudden severe headache and confusion"
  },
  "problems": [
    {
      "problem": "Hypertensive ICH \u2014 right basal ganglia",
      "icd": "I61.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Harold Thompson, 62M \u2014 sudden severe headache, left hemiplegia, vomiting, BP 218/124 on arrival. CT: 3.8cm right basal ganglia hemorrhage with IVH extension. Hypertension history, not on treatment for years."
    },
    {
      "problem": "Intraventricular hemorrhage \u2014 IVH extension",
      "icd": "I61.5",
      "onset": "2024",
      "status": "Active",
      "notes": "Blood in ventricles on CT = IVH extension. Increases mortality, risk of hydrocephalus, vasospasm. May require EVD (external ventricular drain) placement for hydrocephalus."
    },
    {
      "problem": "BP management \u2014 acute phase target SBP 140-180",
      "icd": "I61.0",
      "onset": "2024",
      "status": "Active",
      "notes": "AHA guidelines: SBP >220 = lower BP. Target SBP 140-180 in acute ICH (INTERACT2 trial). Avoid excessive BP reduction \u2014 cerebral autoregulation impaired around hematoma."
    }
  ],
  "medications": [
    {
      "name": "Nicardipine IV infusion \u2014 BP target SBP 140-160",
      "sig": "Continuous IV nicardipine titrated to SBP 140-160 mmHg. Smooth BP control. Avoid labetolol if heart block concern. Target achieved within 1 hour.",
      "prescriber": "Neurosurgery/Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 titrating"
    },
    {
      "name": "Reverse anticoagulation if present \u2014 urgent (N/A here)",
      "sig": "Any anticoagulation must be reversed immediately in ICH. Warfarin: PCC 4F + vitamin K IV. DOACs: specific reversal agents. Aspirin/clopidogrel: platelet transfusion controversial but consider if neurosurgery planned.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "N/A \u2014 not anticoagulated"
    },
    {
      "name": "Neurosurgery consultation \u2014 evacuation criteria",
      "sig": "Surgical evacuation: cerebellar ICH >3cm (lower threshold), lobar ICH with clinical deterioration, life-threatening IVH with hydrocephalus. Basal ganglia ICH: STICH trial showed no benefit of early surgery over medical management.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Consulted \u2014 conservative management"
    }
  ],
  "allergies": [
    {
      "allergen": "Clonidine",
      "type": "Drug",
      "reaction": "Severe rebound hypertension with missed doses",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/14/2026",
      "bp": "192/108",
      "hr": 84,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "178 lbs",
      "ht": "5'8\"",
      "bmi": 27.1,
      "setting": "PCP Office"
    },
    {
      "date": "07/22/2025",
      "bp": "182/102",
      "hr": 80,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "176 lbs",
      "ht": "5'8\"",
      "bmi": 26.8,
      "setting": "PCP Office"
    },
    {
      "date": "01/10/2025",
      "bp": "178/98",
      "hr": 78,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "180 lbs",
      "ht": "5'8\"",
      "bmi": 27.4,
      "setting": "PCP Office"
    },
    {
      "date": "07/08/2024",
      "bp": "186/104",
      "hr": 82,
      "rr": 16,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "182 lbs",
      "ht": "5'8\"",
      "bmi": 27.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/14/2026",
      "type": "Primary Care",
      "provider": "Dr. David Tanaka, MD",
      "cc": "Follow-up: uncontrolled hypertension, DM, CKD",
      "hpi": "65-year-old male presenting for chronic disease follow-up. Home BP log shows persistent readings >170/95 despite triple therapy. Admits to frequently skipping afternoon HCTZ dose because of urinary frequency at work. Wife reports he has also been skipping doses on weekends. HbA1c 7.6% \u2014 stable. Mild bilateral ankle swelling. Reports occasional occipital headaches in the morning. Denies chest pain, visual changes, or weakness. No exercise routine.",
      "exam": "General: Well-nourished male, NAD. CV: RRR, prominent S4 gallop, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. Extremities: 1+ bilateral pitting edema. Neuro: A&O x3, no focal deficits. Fundoscopic: Grade II hypertensive retinopathy (AV nicking, copper wiring).",
      "assessment": "1. Hypertension \u2014 severely uncontrolled; medication nonadherence; end-organ damage (LVH, retinopathy, CKD)\n2. T2DM \u2014 stable\n3. CKD Stage 3a \u2014 stable\n4. Morning headaches \u2014 likely hypertension-related; concerning given severity of HTN",
      "plan": "1. Extensive counseling on stroke and cardiac risk from uncontrolled HTN\n2. Switch HCTZ to chlorthalidone 25mg daily (longer acting); consider adding spironolactone\n3. Home BP monitoring twice daily \u2014 return log in 2 weeks\n4. BMP, urine albumin/creatinine ratio\n5. Ophthalmology referral for hypertensive retinopathy\n6. RTC 2 weeks \u2014 if BP not improved, urgent cardiology referral"
    },
    {
      "id": "V002",
      "date": "07/22/2025",
      "type": "Primary Care",
      "provider": "Dr. David Tanaka, MD",
      "cc": "Chronic disease follow-up",
      "hpi": "65-year-old male for routine follow-up. BP remains above goal. Reports compliance with medications but home log shows inconsistent readings. DM managed with metformin. CKD stable. No new complaints. Denies headache, chest pain, visual changes.",
      "exam": "General: NAD. CV: RRR, S4 present. Lungs: CTAB. Abdomen: Soft, NT. Extremities: Trace edema. Neuro: Grossly intact.",
      "assessment": "1. HTN \u2014 above goal despite therapy; suspected nonadherence\n2. T2DM \u2014 HbA1c 7.4%\n3. CKD 3a \u2014 stable",
      "plan": "1. Continue triple therapy; reinforce compliance\n2. Continue metformin\n3. Labs in 6 months\n4. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Hemorrhagic Stroke Assessment",
      "results": [
        {
          "test": "BP on arrival",
          "value": "218/124",
          "unit": "mmHg",
          "ref": "Target SBP 140-160 in ICH",
          "flag": "H"
        },
        {
          "test": "INR",
          "value": "1.1",
          "unit": "",
          "ref": "<1.2 \u2014 not anticoagulated",
          "flag": ""
        },
        {
          "test": "Platelet count",
          "value": "214",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": ""
        },
        {
          "test": "Glucose",
          "value": "196",
          "unit": "mg/dL",
          "ref": "Target 140-180 in ICH",
          "flag": "H"
        },
        {
          "test": "GCS",
          "value": "10 (E3V2M5)",
          "unit": "",
          "ref": "15 normal",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Head Non-Contrast",
      "findings": "3.8cm hyperdense hematoma right basal ganglia. Intraventricular blood (IVH) in right lateral ventricle. Mild midline shift 5mm. No herniation. No SAH pattern.",
      "impression": "Right basal ganglia hemorrhage with IVH. Hypertensive etiology most likely. Neurosurgery consultation."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/28/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-HD278",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/18/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-768",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "01/2024",
      "site": "Left deltoid IM",
      "lot": "PV24-045",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "04/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-278",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-401",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Father: Hemorrhagic stroke at age 68 (deceased), Hypertension",
    "Mother: Hypertension, T2DM, alive at 88",
    "Brother: Hypertension, alive at 62",
    "Sister: Healthy, alive at 58"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Dry cleaning business owner; works 60+ hrs/week"
    ],
    [
      "Marital",
      "Married 38 years; wife Minji, age 63"
    ],
    [
      "Tobacco",
      "Former smoker \u2014 quit 2005; 15 pack-year history"
    ],
    [
      "Alcohol",
      "Social, 2-3 drinks/week; occasional soju"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal \u2014 reports no time due to work schedule"
    ],
    [
      "Housing",
      "Single-family home with wife; adult children nearby"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt always"
    ],
    [
      "Advance Directive",
      "None on file \u2014 discussed, patient defers"
    ]
  ],
  "meta": {
    "caseId": "hemorrhagic-stroke",
    "diagnosis": "Hypertensive Intracerebral Hemorrhage \u2014 Basal Ganglia",
    "acuity": 1,
    "presentation": "Altered Mental Status",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Mr. Kim appears acutely distressed and confused, with periods of agitation alternating with lethargy. He is only partially responsive to questions and may give inconsistent or fragmented answers due to his altered mental status.",
    "interviewQuestions": [
      "When did this headache start and how did it come on?",
      "Can you describe what this headache feels like?",
      "Where exactly is the pain located?",
      "On a scale of 1-10, how severe is this headache?",
      "Have you ever had a headache this severe before?",
      "Are you experiencing any nausea, vomiting, or vision changes?",
      "Have you noticed any weakness or numbness in your arms or legs?",
      "Are you having any difficulty speaking or understanding?",
      "When did your family first notice the confusion?",
      "Have you been taking your blood pressure medications as prescribed?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Does anyone in your family have a history of stroke?"
    ],
    "patientResponses": {
      "default": "I'm... I'm not sure... my head hurts so much, can you repeat that?",
      "onset": "It started suddenly this morning around 7 AM when I was getting ready for work - felt like something exploded in my head",
      "character": "It's the worst headache of my life - like someone is hammering inside my skull, throbbing and pounding",
      "location": "Right here on the left side of my head, behind my eye, and it goes down my neck",
      "severity": "This is definitely a 10 out of 10 - I've never felt pain like this, I can barely think straight",
      "aggravating": "Any light makes it worse, and when I try to move my head or when people talk loudly",
      "relieving": "Nothing helps - I tried some Tylenol but it didn't touch it at all",
      "associated": "I've been throwing up twice, and Minji says I'm not making sense when I talk... everything seems blurry",
      "denies": "No chest pain, no recent injuries to my head, no fever or chills that I know of",
      "history": "Never had anything like this before - I get headaches sometimes when my pressure is up, but nothing like this",
      "medications": "Amlodipine 10mg daily; Lisinopril 40mg daily; Hydrochlorothiazide 25mg daily; Metformin 1000mg BID; Atorvastatin 40mg QHS; Aspirin 81mg daily",
      "allergies": "Clonidine",
      "family": "My father died from a brain hemorrhage when he was 68, and both my parents had high blood pressure problems",
      "social": "I own a dry cleaning business, work long hours, used to smoke but quit in 2005, just drink socially on weekends"
    },
    "examManeuvers": [
      "Neurological assessment - Glasgow Coma Scale",
      "Cranial nerve examination",
      "Motor strength testing",
      "Deep tendon reflexes",
      "Cerebellar testing (coordination)",
      "Speech and language assessment",
      "Fundoscopic examination",
      "Neck stiffness/meningeal signs",
      "Blood pressure measurement",
      "Cardiovascular examination"
    ],
    "examFindings": {
      "Neurological assessment - Glasgow Coma Scale": "GCS 13 (E4, V4, M5) - confused and disoriented to time and situation",
      "Cranial nerve examination": "Left facial droop, dysarthria, right homonymous hemianopsia",
      "Motor strength testing": "Right-sided hemiparesis - right arm 2/5 strength, right leg 3/5 strength",
      "Deep tendon reflexes": "Hyperreflexive on the right side, positive Babinski sign on right",
      "Cerebellar testing (coordination)": "Unable to perform finger-to-nose testing on right side due to weakness",
      "Speech and language assessment": "Slurred speech, difficulty with word finding, follows simple commands inconsistently",
      "Fundoscopic examination": "Papilledema present, arterial narrowing, AV nicking consistent with hypertensive retinopathy",
      "Neck stiffness/meningeal signs": "Mild neck stiffness, negative Kernig and Brudzinski signs",
      "Blood pressure measurement": "192/108 mmHg, confirmed on repeat measurement",
      "Cardiovascular examination": "Regular rate and rhythm, S4 gallop present, no murmurs"
    },
    "ddxTargets": [
      "Hypertensive ICH \u2014 basal ganglia (correct)",
      "Ischemic stroke with hemorrhagic transformation \u2014 typically cortical; lower BP; embolic pattern",
      "Subarachnoid hemorrhage \u2014 CT shows cistern blood; thunderclap headache; CTA for aneurysm",
      "AVM rupture \u2014 younger patient; CT angiography shows malformation; lobar more common",
      "Coagulopathic ICH \u2014 anticoagulation history; INR elevated; typically lobar; reverse coagulation"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on hypertension as simply needing medication adjustment rather than recognizing acute stroke presentation",
      "prematureClosure": "May focus on migraine or hypertensive crisis without considering intracranial hemorrhage given the focal neurological deficits",
      "availabilityBias": "Recent cases of medication non-compliance might lead to attributing symptoms to uncontrolled hypertension alone"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, I notice you're considering several possibilities. Given this patient's presentation of sudden severe headache with confusion, what key historical elements and physical exam findings would help you distinguish between your top differentials? What would be the most concerning diagnosis you absolutely cannot miss?",
      "phase5": "Excellent work gathering the history and physical exam. You've identified focal neurological deficits in the setting of sudden-onset severe headache and significantly elevated blood pressure. How does the combination of right-sided weakness, speech difficulties, and this patient's risk factors help narrow your differential? What imaging study would be most appropriate as your next step?",
      "finalDebrief": "This case demonstrates the importance of recognizing hemorrhagic stroke in patients with poorly controlled hypertension. The combination of sudden-onset severe headache, focal neurological deficits, and markedly elevated blood pressure in a patient with multiple vascular risk factors should immediately raise suspicion for intracranial hemorrhage. How did your differential diagnosis evolve as you gathered more information, and what key features ultimately pointed you toward the correct diagnosis?",
      "final": "Diagnosis: hypertensive intracerebral hemorrhage, basal ganglia. Key learning: (1) Location predicts etiology: hypertensive ICH = deep structures (basal ganglia 35%, thalamus 25%, pons 10%, cerebellum 10%). Lobar/cortical ICH = amyloid angiopathy (elderly, cortical, recurrent), AVM, coagulopathy. Basal ganglia in a hypertensive patient = hypertensive ICH until proven otherwise. (2) BP management in ICH: SBP >220 = lower aggressively. SBP 150-220 = target 140-160 (INTERACT2 trial). Avoid hypotension \u2014 impairs perfusion in the ischemic penumbra around the hematoma. Continuous IV nicardipine or labetalol for smooth BP control. (3) Reversal of anticoagulation is urgent: warfarin \u2192 PCC 4F (fastest, repletes all factors) + vitamin K IV. Dabigatran \u2192 idarucizumab. Factor Xa inhibitors \u2192 andexanet alfa. Heparin \u2192 protamine. Every minute of ongoing anticoagulation = hematoma expansion. (4) Hematoma expansion: 30-40% of ICH hematomas expand in the first 24 hours. CTA spot sign (extravasation of contrast = active bleeding) predicts expansion. Factor VIIa reduces expansion but no mortality benefit. (5) Surgical indications: cerebellar ICH >3cm = surgery (brainstem compression risk). Cerebellar ICH requires lower threshold than other locations. Basal ganglia: STICH trial showed no benefit of early surgery over medical management in most cases."
    }
  }
};
