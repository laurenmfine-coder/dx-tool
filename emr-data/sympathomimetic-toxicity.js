// Virtual EMR Case: Sympathomimetic Toxicity
// Variant: sympathomimetic-toxicity | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Brianna Townsend",
    "patientHPI": "I've been taking extra of my ADHD medication because one pill wasn't lasting through my long study days, but now I can't sleep at all and my heart feels like it's racing constantly. I've been jittery and anxious, and I think I might have taken too much today because I feel really shaky and keep having chest tightness.",
    "dob": "07/11/2001",
    "age": 23,
    "sex": "Female",
    "mrn": "RDX-2025-76914",
    "pronouns": "She/Her",
    "insurance": "United Healthcare — Student Plan",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Walgreens — 4100 SW 64th Ave, Riverside, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "1741 S Halsted St, Baltimore, MD 21205",
    "phone": "(954) 555-4712",
    "email": "b.townsend01@email.com",
    "emergencyContact": {
      "name": "Sharon Townsend (Mother)",
      "phone": "(954) 555-4718"
    },
    "chiefComplaint": "Agitation and racing heart"
  },
  "problems": [
    {
      "problem": "ADHD — Combined Type",
      "icd": "F90.2",
      "onset": "2015",
      "status": "Active",
      "notes": "Diagnosed at 14; on mixed amphetamine salts (Adderall XR) since age 16; dose recently increased"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2020",
      "status": "Active",
      "notes": "Started in college; on escitalopram; therapy 2x/month"
    },
    {
      "problem": "Migraine without Aura",
      "icd": "G43.009",
      "onset": "2018",
      "status": "Active",
      "notes": "1-2 per month; uses sumatriptan PRN; no daily prophylaxis"
    }
  ],
  "medications": [
    {
      "name": "Mixed Amphetamine Salts (Adderall XR) 30mg QAM",
      "sig": "Take 1 capsule by mouth every morning (INCREASED from 20mg 3 weeks ago)",
      "prescriber": "Dr. Patel (Psychiatry)",
      "start": "02/2025 (dose increase)",
      "refills": 0,
      "status": "Active — RECENTLY INCREASED"
    },
    {
      "name": "Escitalopram 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Patel (Psychiatry)",
      "start": "09/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Sumatriptan 50mg PRN",
      "sig": "Take 1 tablet by mouth at onset of migraine; may repeat x1 after 2 hours if needed; max 200mg/24hr",
      "prescriber": "Dr. Sharma",
      "start": "01/2021",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Oral Contraceptive (Lo Loestrin Fe)",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Sharma",
      "start": "08/2019",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Severe nausea and vomiting",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2025",
      "bp": "172/104",
      "hr": 142,
      "rr": 24,
      "temp": "102.1°F",
      "spo2": "97%",
      "wt": "134 lbs",
      "ht": "5'5\"",
      "bmi": 22.3,
      "setting": "ED"
    },
    {
      "date": "02/03/2025",
      "bp": "124/78",
      "hr": 82,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "136 lbs",
      "ht": "5'5\"",
      "bmi": 22.6,
      "setting": "Specialist"
    },
    {
      "date": "09/18/2024",
      "bp": "118/72",
      "hr": 76,
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
      "date": "02/03/2025",
      "type": "Specialist",
      "provider": "Dr. Anita Patel, MD (Psychiatry)",
      "cc": "ADHD medication management — insufficient efficacy",
      "hpi": "23-year-old female graduate student with ADHD-combined type presenting for medication adjustment. Reports Adderall XR 20mg is 'wearing off by noon' and she cannot focus on dissertation work in the afternoons. Final exams and dissertation defense upcoming. Has been taking extra pills on some days to get through study sessions (using 2 capsules instead of 1). Requests dose increase. Denies cardiac symptoms. Sleep reduced to 4-5 hours due to study schedule. Increased caffeine intake (4-5 cups of coffee/day plus energy drinks).",
      "exam": "Psych: Well-groomed, anxious, speaks rapidly. Mood: 'stressed.' Affect: anxious, congruent. Thought process: linear but tangential at times. No psychosis. No SI/HI. Vital signs: BP 124/78, HR 82.",
      "assessment": "1. ADHD — suboptimal control on Adderall XR 20mg; concern about dose self-escalation\n2. Generalized anxiety — exacerbated by academic stress\n3. High stimulant burden (prescribed + excessive caffeine + self-dose-escalation)",
      "plan": "1. Increase Adderall XR to 30mg QAM — STRICT instructions: take ONLY 1 capsule daily, no extras\n2. REDUCE caffeine — max 2 cups coffee/day, NO energy drinks\n3. Continue escitalopram 10mg\n4. Sleep hygiene counseling — aim for 7 hours minimum\n5. WARNED about combining stimulants + caffeine + sleep deprivation — cardiac risk\n6. RTC 4 weeks; sooner if palpitations, chest pain, or worsening anxiety\n7. Pill count at next visit"
    },
    {
      "id": "V002",
      "date": "09/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Priya Sharma, MD",
      "cc": "Annual wellness + migraine follow-up",
      "hpi": "23-year-old female for annual exam. Migraines occurring 1-2x/month, respond to sumatriptan. ADHD stable on Adderall XR 20mg. Anxiety managed with escitalopram. Menses regular on OCP. No new concerns.",
      "exam": "General: Well-appearing young woman. HEENT: WNL. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, NT. Neuro: Grossly intact. Skin: No rash.",
      "assessment": "1. Wellness exam — healthy\n2. Migraine — stable, 1-2/month\n3. ADHD — controlled on current regimen\n4. GAD — stable",
      "plan": "1. Continue current medications\n2. Routine labs\n3. RTC annually or PRN"
    }
  ],
  "labs": [
    {
      "date": "02/27/2025",
      "time": "23:18",
      "orderedBy": "Dr. Marcus Johnson, MD (ED)",
      "collected": "02/27/2025 23:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-112847",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "168",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "24",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "141",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "L"
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "20",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": "L"
            },
            {
              "test": "AST (SGOT)",
              "value": "52",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT (SGPT)",
              "value": "38",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "14.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.4",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "268",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "TROPONIN",
          "results": [
            {
              "test": "Troponin I (High Sensitivity)",
              "value": "0.08",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CREATINE KINASE",
          "results": [
            {
              "test": "CK Total",
              "value": "620",
              "unit": "U/L",
              "range": "30-135",
              "flag": "H"
            }
          ]
        },
        {
          "name": "LACTIC ACID",
          "results": [
            {
              "test": "Lactate",
              "value": "3.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        },
        {
          "name": "URINE DRUG SCREEN",
          "results": [
            {
              "test": "Amphetamines",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Benzodiazepines",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "Cocaine",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "Opiates",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "THC",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            }
          ]
        },
        {
          "name": "URINE PREGNANCY TEST",
          "results": [
            {
              "test": "hCG (Urine)",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/27/2025",
      "study": "CHEST X-RAY — PA AND LATERAL",
      "accession": "IMG-2025-11218",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Johnson, MD",
      "readBy": "Dr. Sarah Mitchell, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "23-year-old with tachycardia 142, hypertension, chest tightness — r/o acute cardiopulmonary process",
      "technique": "PA and lateral chest radiographs.",
      "findings": "LUNGS: Clear bilaterally. No focal consolidation, effusion, or pneumothorax.\n\nHEART: Normal cardiomediastinal silhouette. No cardiomegaly.\n\nOTHER: No bony abnormality.",
      "impression": "1. No acute cardiopulmonary process",
      "dictated": "02/27/2025 23:35",
      "verified": "02/27/2025 23:42"
    },
    {
      "date": "02/27/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-11220",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Johnson, MD",
      "readBy": "Dr. Sarah Mitchell, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "23-year-old with severe headache, hypertension, agitation — r/o intracranial hemorrhage",
      "technique": "Non-contrast axial CT images of the head.",
      "findings": "BRAIN PARENCHYMA: No acute hemorrhage, mass, or infarction. Normal gray-white differentiation.\n\nVENTRICLES: Normal size and configuration.\n\nEXTRA-AXIAL: No collection.\n\nBONY STRUCTURES: Normal.",
      "impression": "1. No acute intracranial pathology",
      "dictated": "02/27/2025 23:40",
      "verified": "02/27/2025 23:48"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL882P",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "PF498K",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "08/2019",
      "site": "Left deltoid IM",
      "lot": "TA172R",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "07/2017",
      "site": "Left deltoid IM",
      "lot": "HP141T",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal B (Bexsero) — 2nd dose",
      "date": "09/2019",
      "site": "Right deltoid IM",
      "lot": "MB218K",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother (age 48): Hypertension, anxiety disorder",
    "Father (age 50): ADHD (diagnosed as adult), hypertension, hyperlipidemia",
    "Maternal grandmother (age 72): Type 2 Diabetes, stroke at age 68",
    "Sibling (sister, age 20): ADHD — on methylphenidate",
    "No family history of sudden cardiac death, cardiomyopathy, or arrhythmias"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Graduate student — PhD program in biomedical sciences"
    ],
    [
      "Marital",
      "Single; lives in apartment near campus with roommate"
    ],
    [
      "Tobacco",
      "Occasional social vaping (nicotine) — 1-2x/week at social events"
    ],
    [
      "Alcohol",
      "Social — 3-4 drinks on weekends"
    ],
    [
      "Drugs",
      "Denies illicit drugs; ADMITS to taking extra Adderall (2 capsules = 60mg today) + multiple energy drinks for study marathon"
    ],
    [
      "Exercise",
      "Runs 3x/week; recently reduced due to academic workload"
    ],
    [
      "Housing",
      "Apartment near university campus"
    ],
    [
      "Safety",
      "No firearms; no SI/HI"
    ],
    [
      "Advance Directive",
      "None"
    ]
  ],
  "meta": {
    "caseId": "sympathomimetic-toxicity",
    "diagnosis": "Sympathomimetic Toxidrome — Amphetamine Excess with Caffeine and Demand Ischemia",
    "acuity": 2,
    "presentation": "Psychiatric Emergency",
    "category": "toxicologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Anxious and visibly agitated graduate student who is hypervigilant and speaking rapidly, initially somewhat evasive about medication misuse but becomes more forthcoming when approached non-judgmentally. Demonstrates significant distress with tremulous hands and appears uncomfortable due to palpitations and overheating.",
    "interviewQuestions": [
      "Can you tell me exactly what medications you took today and in what amounts?",
      "How many energy drinks or caffeinated beverages have you consumed in the last 24 hours?",
      "When did you first notice your heart racing and these symptoms start?",
      "Have you been experiencing any chest pain or pressure?",
      "Are you having any muscle pain, weakness, or dark-colored urine?",
      "How long have you been taking extra doses of your Adderall?",
      "Have you had any nausea, vomiting, or changes in appetite?",
      "Are you experiencing any confusion, hallucinations, or unusual thoughts?",
      "Have you been able to sleep at all in the past 24-48 hours?",
      "Do you have any shortness of breath or difficulty breathing?",
      "Have you had any seizures or felt like you might pass out?",
      "Are you experiencing headaches or vision changes?",
      "Have you used any other stimulants, diet pills, or substances?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing right now. My mind is racing and I feel really jittery. Can you repeat that?",
      "onset": "It started gradually over the past few days as I've been taking extra pills, but today it got really bad about 4-5 hours ago after I took two Adderall and had my third energy drink.",
      "character": "My heart feels like it's pounding out of my chest, and I can't stop shaking. I feel like I'm buzzing with energy but also really anxious and scared.",
      "location": "The racing feeling is in my chest, and I have this tight feeling across my chest. The shakiness is all over, especially my hands.",
      "severity": "The heart racing is about an 8 out of 10 - it's really frightening. The anxiety and jitteriness are probably a 7. I can't concentrate on anything except how awful I feel.",
      "aggravating": "Any movement makes my heart race even more, and being in bright lights or loud places makes me feel more agitated. Even thinking about it makes it worse.",
      "relieving": "Nothing really helps. I tried lying down but I can't stay still. Cold water on my face helped a tiny bit, but not much.",
      "associated": "I'm sweating a lot, feel really hot, have a pounding headache, feel nauseous, and my muscles in my legs and arms are starting to ache. I haven't slept in over 30 hours.",
      "denies": "No chest pain exactly, no trouble breathing, no fainting, no seizures, no hallucinations. I haven't vomited but feel like I might.",
      "history": "I've felt jittery before when I've taken extra Adderall, but never this bad. Usually it just helps me focus better for longer periods.",
      "medications": "Mixed Amphetamine Salts (Adderall XR) 30mg QAM; Escitalopram 10mg daily; Sumatriptan 50mg PRN; Oral Contraceptive (Lo Loestrin Fe)",
      "allergies": "Codeine",
      "family": "My dad has ADHD too and takes medication for it. Both my parents have high blood pressure. My grandmother had a stroke, and my mom has anxiety like me.",
      "social": "I'm a PhD student in biomedical sciences, so I'm under a lot of pressure with my dissertation. I live near campus with a roommate. I vape occasionally at parties and drink socially on weekends. I don't use illegal drugs, but I have been taking extra Adderall and drinking a lot of energy drinks to get through these long study sessions."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Cardiac examination including heart rate and rhythm",
      "Neurologic assessment including tremor and reflexes",
      "Skin examination for diaphoresis and temperature",
      "Pupil examination",
      "Mental status examination",
      "Extremity examination for muscle tenderness",
      "Pulmonary examination",
      "Abdominal examination"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 172/104, HR 142 regular but tachycardic, Temperature 102.1°F, SpO2 97%, RR 24",
      "Cardiac examination including heart rate and rhythm": "Tachycardic but regular rhythm, no murmurs, gallops, or rubs. PMI not displaced. Strong peripheral pulses.",
      "Neurologic assessment including tremor and reflexes": "Fine tremor of hands bilaterally, hyperreflexia, alert and oriented but agitated and restless. Normal strength.",
      "Skin examination for diaphoresis and temperature": "Diaphoretic, warm, flushed skin. No rash or lesions.",
      "Pupil examination": "Pupils dilated (approximately 6mm) but reactive to light bilaterally",
      "Mental status examination": "Alert, oriented x3, agitated, pressured speech, hypervigilant, no hallucinations or delusions",
      "Extremity examination for muscle tenderness": "Mild tenderness in bilateral calf and thigh muscles, no obvious swelling or deformity",
      "Pulmonary examination": "Clear to auscultation bilaterally, mildly tachypneic but no distress",
      "Abdominal examination": "Soft, non-tender, non-distended, normal bowel sounds, no organomegaly"
    },
    "ddxTargets": [
      "Sympathomimetic Toxidrome — Prescription Amphetamine Excess (60mg) + Excessive Caffeine with Demand Ischemia and Mild Rhabdomyolysis (correct diagnosis)",
      "Anxiety disorder exacerbation with panic attack",
      "Hyperthyroidism/thyrotoxicosis",
      "Acute coronary syndrome",
      "Cocaine or methamphetamine intoxication",
      "Serotonin syndrome",
      "Pheochromocytoma crisis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on anxiety disorder given patient's psychiatric history and initial presentation of agitation, missing the toxicologic cause",
      "prematureClosure": "May prematurely diagnose panic attack in young female with known anxiety without fully exploring medication history and stimulant excess",
      "availabilityBias": "Recent cases of anxiety or panic disorder may overshadow consideration of prescription drug misuse and sympathomimetic toxicity"
    },
    "coachPrompts": {
      "phase2": "Before you interview this patient, consider the broad categories that can cause tachycardia, hyperthension, and agitation in a young person. What questions will help you differentiate between psychiatric, cardiac, endocrine, and toxicologic causes?",
      "phase5": "Now you have the full clinical picture of sympathomimetic excess. What specific complications should you be monitoring for with this presentation? How do the vital signs, physical findings, and exposure history support your suspected diagnosis?",
      "finalDebrief": "This case highlights how prescription drug misuse can present as a medical emergency. The combination of amphetamines and caffeine created a sympathomimetic toxidrome with end-organ effects including demand ischemia and rhabdomyolysis. How did the patient's academic stress and medication history guide your diagnostic thinking? What red flags in the history and exam helped distinguish this from primary psychiatric or cardiac causes?",
      "final": "Diagnosis: sympathomimetic toxidrome from prescription amphetamine excess (60 mg) combined with excessive caffeine, causing demand ischemia and mild rhabdomyolysis. Key learning: (1) The sympathomimetic toxidrome results from excess alpha and beta adrenergic stimulation, classically from cocaine, amphetamines, MDMA (ecstasy), bath salts (synthetic cathinones), methamphetamine, pseudoephedrine, and combinations with caffeine or stimulant energy products. Findings: tachycardia, hypertension, hyperthermia, diaphoresis, mydriasis (distinguishes from opioid pinpoint pupils), agitation, psychosis, seizures, chest pain/ischemia, rhabdomyolysis, and potentially fatal arrhythmia and multi-organ failure. (2) The 'toxidrome matrix' helps differentiate: Sympathomimetic: tachycardia, hypertension, mydriasis, DIAPHORESIS, agitation, hyperthermia. Anticholinergic: tachycardia, hypertension, mydriasis, DRY skin, hyperthermia, confusion, urinary retention. Serotonin syndrome: tachycardia, hypertension, HYPERREFLEXIA and CLONUS (especially lower extremity), tremor, diaphoresis, diarrhea, recent serotonergic agent. Cholinergic: bradycardia (or tachycardia), bronchorrhea/bronchospasm, diaphoresis, SLUDGE symptoms. Opioid: bradypnea, miosis (pinpoint), sedation. Overlap occurs, and co-ingestions are common. (3) Cardiovascular complications. Sympathomimetic-induced chest pain deserves careful evaluation: coronary vasospasm, platelet activation, accelerated atherosclerosis with plaque rupture, and direct myocardial toxicity. Sympathomimetic MI management differs from typical MI: (a) FIRST-LINE: benzodiazepines — calm the patient, reduce sympathetic drive, reduce oxygen demand, and often resolve tachycardia and hypertension. (b) Nitroglycerin and calcium channel blockers for coronary vasospasm and hypertension. (c) Aspirin for platelet inhibition. (d) Phentolamine for refractory hypertension (alpha-blockade). (e) AVOID beta-blockers alone — can cause unopposed alpha stimulation with paradoxical worsening of hypertension and coronary vasospasm. Combined alpha-beta blocker (labetalol) is controversial; phentolamine preferred. (f) Cath lab for ongoing ischemia/STEMI as usual. (4) Supportive management. (a) Rapid cooling for hyperthermia — active cooling (evaporative, ice packs, cool IV fluids) with target temp <39 C; external cooling plus aggressive sedation. (b) IV benzodiazepines (lorazepam, diazepam, midazolam) for agitation, hypertension, tachycardia, hyperthermia, seizures, and sympathetic drive reduction — often high and repeated doses required. (c) Seizure management — benzodiazepines first-line; second-line barbiturate or propofol. (d) Rhabdomyolysis — aggressive IV crystalloid, monitor CK and renal function, treat hyperkalemia. (e) Airway protection and sedation for severe agitation. (f) Treat comorbid conditions: hyperthermia, acidosis, electrolytes. (g) Psychiatric evaluation once medically stable — for substance use treatment and/or psychosis management. (5) Long-term management and counseling. Address underlying substance use disorder — motivational interviewing, referral to substance treatment, behavioral therapy, medications for specific substance use disorders (naltrexone, contingency management for stimulant use). Review prescribed stimulants in ADHD or narcolepsy — adherence, dosing, potential misuse, and assessment for cardiovascular risk. Educate on interaction of prescribed amphetamines with OTC energy products, caffeine, and decongestants. Cardiovascular risk modification if atherosclerotic disease identified. Classic pitfalls: (a) beta-blocker monotherapy in sympathomimetic toxicity — 'unopposed alpha' can cause severe hypertension and coronary vasospasm. (b) Under-sedating agitated patients — inadequate benzodiazepine dosing fails to control sympathetic drive. (c) Missing serotonin syndrome in patient on SSRI who also takes amphetamine or MDMA — presents similarly but has hyperreflexia/clonus. (d) Neuroleptic use for agitation — antipsychotics can lower seizure threshold and add to hyperthermia; benzodiazepines are preferred. (e) Forgetting to screen for substance use and connect with treatment — medical stabilization is incomplete without addressing the underlying issue."
    }
  }
};
