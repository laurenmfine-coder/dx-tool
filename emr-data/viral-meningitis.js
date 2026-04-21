// Virtual EMR Case: Viral Meningitis
// Variant: viral-meningitis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Aiden Kowalski",
    "patientHPI": "I'm here for my regular check-up before the fall semester starts - I've been doing really well in school and my ADHD medication is working great with no problems or side effects.",
    "dob": "08/15/2003",
    "age": 21,
    "sex": "Male",
    "mrn": "RDX-2025-84305",
    "pronouns": "He/Him",
    "insurance": "Humana (parent plan)",
    "pcp": "Dr. Sarah Kim, MD",
    "pharmacy": "Publix Pharmacy — 2001 N University Dr, Sunrise, FL",
    "language": "English",
    "race": "White",
    "address": "1135 N Kedzie Blvd, Richmond, VA 23225",
    "phone": "(954) 555-1294",
    "email": "a.kowalski03@email.com",
    "emergencyContact": {
      "name": "Karen Kowalski (Mother)",
      "phone": "(954) 555-1310"
    },
    "chiefComplaint": "Headache, fever, and neck stiffness"
  },
  "problems": [
    {
      "problem": "Attention Deficit Hyperactivity Disorder — Inattentive Type",
      "icd": "F90.0",
      "onset": "2014",
      "status": "Active",
      "notes": "Diagnosed in childhood; managed with stimulant medication"
    },
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2016",
      "status": "Chronic",
      "notes": "Managed with loratadine PRN"
    }
  ],
  "medications": [
    {
      "name": "Lisdexamfetamine (Vyvanse) 40mg daily",
      "sig": "Take 1 capsule by mouth daily in the morning",
      "prescriber": "Dr. Kim",
      "start": "08/2020",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Loratadine 10mg daily",
      "sig": "Take 1 tablet by mouth daily as needed for allergies",
      "prescriber": "Dr. Kim",
      "start": "03/2018",
      "refills": 5,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Amoxicillin",
      "type": "Drug",
      "reaction": "Diffuse morbilliform rash at age 8",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "09/18/2024",
      "bp": "118/72",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "165 lbs",
      "ht": "5'11\"",
      "bmi": 23,
      "setting": "PCP Office"
    },
    {
      "date": "03/12/2024",
      "bp": "116/70",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "162 lbs",
      "ht": "5'11\"",
      "bmi": 22.6,
      "setting": "PCP Office"
    },
    {
      "date": "09/06/2023",
      "bp": "114/68",
      "hr": 68,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "160 lbs",
      "ht": "5'11\"",
      "bmi": 22.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Sarah Kim, MD",
      "cc": "ADHD medication refill, pre-semester check-in",
      "hpi": "21-year-old college junior for routine visit before fall semester. ADHD stable on Vyvanse 40mg; good academic performance. No side effects. Denies chest pain, palpitations, weight loss, or sleep disturbance. Lives in university dorm. Up to date on meningococcal vaccine (MenACWY booster given at 16). Notes recent cold that resolved. Sexually active with one partner; uses condoms.",
      "exam": "General: NAD, well-appearing young male. HEENT: WNL. Neck: Supple, no LAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. Neuro: A&O x3, normal mood and affect. Skin: No rashes.",
      "assessment": "1. ADHD — stable on current medication\n2. Annual wellness — healthy college student\n3. Immunizations reviewed — up to date",
      "plan": "1. Continue Vyvanse 40mg; 90-day Rx\n2. STI screening offered; patient deferred\n3. RTC 6 months or PRN"
    },
    {
      "id": "V002",
      "date": "03/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Sarah Kim, MD",
      "cc": "Sore throat and fatigue x 5 days",
      "hpi": "21-year-old male presents with sore throat, low-grade fever, and fatigue x 5 days. Several dormmates have had similar symptoms. Rapid strep negative. No rash, joint pain, or adenopathy. Symptoms improving.",
      "exam": "General: NAD, mildly fatigued. HEENT: Oropharynx mildly erythematous, no exudate, no tonsillar enlargement. Neck: Small bilateral anterior cervical nodes, non-tender. Lungs: CTAB.",
      "assessment": "1. Viral pharyngitis — likely enteroviral or adenoviral given dorm setting\n2. Rapid strep negative",
      "plan": "1. Supportive care: hydration, rest, acetaminophen PRN\n2. Return if worsening, high fever, rash, or difficulty swallowing"
    }
  ],
  "labs": [
    {
      "date": "09/18/2024",
      "time": "10:00",
      "orderedBy": "Dr. Sarah Kim, MD",
      "collected": "09/18/2024 09:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-091820",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "15.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "45.0",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "225",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "90",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
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
              "value": "4.3",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-305",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-801",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Meningococcal ACWY (Menactra) — booster",
      "date": "08/2019",
      "site": "Left deltoid IM",
      "lot": "MN19-442",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Meningococcal B (Bexsero) — 2/2",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "MB21-108",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Migraine, anxiety disorder, alive at 50",
    "Father: HTN, ADHD, alive at 52",
    "Sister: ADHD, age 18",
    "Paternal grandfather: T2DM, deceased at 74"
  ],
  "socialHistory": [
    [
      "Occupation",
      "College student (junior, biology major)"
    ],
    [
      "Marital",
      "Single; in relationship"
    ],
    [
      "Tobacco",
      "Never smoker; occasional vaping (social)"
    ],
    [
      "Alcohol",
      "Social, 3-5 drinks on weekends"
    ],
    [
      "Drugs",
      "Denies illicit use; no marijuana"
    ],
    [
      "Exercise",
      "Intramural soccer 2x/week; gym 3x/week"
    ],
    [
      "Housing",
      "University dormitory; shared room"
    ],
    [
      "Safety",
      "Denies firearms; seatbelt; helmet for cycling"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "viral-meningitis",
    "diagnosis": "Viral (Enteroviral) Meningitis",
    "acuity": 3,
    "presentation": "Headache",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Initially appears calm and cooperative but shows subtle signs of discomfort with mild photophobia and occasional wincing during conversation. Becomes increasingly forthcoming about symptom severity as trust builds, initially downplaying symptoms due to concern about missing school.",
    "interviewQuestions": [
      "Can you tell me more about your headache - when did it start and how has it progressed?",
      "Describe the quality and location of your headache pain",
      "On a scale of 1-10, how severe is your headache right now?",
      "Have you had any fever or chills recently?",
      "Are you experiencing any neck pain or stiffness?",
      "Have you noticed any sensitivity to light or sound?",
      "Any nausea or vomiting?",
      "Have you had any skin rashes or changes?",
      "Any recent illness or sick contacts?",
      "Have you traveled anywhere recently?",
      "Are you up to date on vaccinations?",
      "Any recent head trauma or injury?",
      "Have you been taking your usual medications?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? This headache is making it hard to concentrate on what you're asking.",
      "onset": "The headache started about 2 days ago, pretty suddenly while I was studying. At first I thought it was just stress from upcoming exams, but it's gotten much worse and now I have this neck stiffness too.",
      "character": "It's a really intense, throbbing pain all over my head, but especially in the back. It's different from any headache I've ever had - much more severe and constant.",
      "location": "The pain is mainly in the back of my head and neck area, but it feels like my whole head is pounding. The neck stiffness makes it worse when I try to look down.",
      "severity": "Right now it's about an 8 out of 10. I can barely concentrate on my studies and had to leave my part-time job early yesterday. I've never had a headache this bad.",
      "aggravating": "Bright lights make it much worse - I've been keeping my room dark. Moving my head or neck, especially looking down, makes the pain shoot up. Loud noises are also really bothersome.",
      "relieving": "I've tried ibuprofen and acetaminophen but they barely touch it. Lying still in a dark room helps a little, but the pain never really goes away.",
      "associated": "I've had a low-grade fever on and off, some chills, and I feel generally weak and tired. I've also been nauseous but haven't actually vomited. No rash that I've noticed.",
      "denies": "No recent head injury, no vision changes or double vision, no confusion or memory problems, no seizures, no difficulty speaking or weakness in my arms or legs.",
      "history": "I get occasional headaches from my ADHD medication sometimes, but nothing like this. My mom has migraines, but she says this sounds different from what she experiences.",
      "medications": "Lisdexamfetamine (Vyvanse) 40mg daily; Loratadine 10mg daily",
      "allergies": "Amoxicillin",
      "family": "My mom gets migraines pretty regularly, but she says mine sounds different. No family history of meningitis or serious brain infections that I know of.",
      "social": "I'm a junior biology major at the university. I live in the dorms and have been around other students who've had some kind of bug going around. I don't smoke cigarettes but occasionally vape socially. I drink socially on weekends, maybe 3-5 drinks, but haven't had any alcohol since this started."
    },
    "examManeuvers": [
      "Nuchal rigidity assessment",
      "Kernig's sign",
      "Brudzinski's sign",
      "Fundoscopic examination",
      "Mental status examination",
      "Cranial nerve assessment",
      "Motor and sensory examination",
      "Deep tendon reflexes",
      "Skin examination for rash",
      "Assessment for photophobia"
    ],
    "examFindings": {
      "Nuchal rigidity assessment": "Positive for neck stiffness with resistance and pain on passive neck flexion",
      "Kernig's sign": "Positive - pain and resistance when extending knee with hip flexed at 90 degrees",
      "Brudzinski's sign": "Positive - involuntary flexion of knees and hips when neck is passively flexed",
      "Fundoscopic examination": "Normal optic discs, no papilledema or hemorrhages",
      "Mental status examination": "Alert and oriented x3, somewhat irritable but no confusion or altered mental status",
      "Cranial nerve assessment": "Cranial nerves II-XII grossly intact",
      "Motor and sensory examination": "Normal motor strength 5/5 throughout, sensation intact to light touch and pinprick",
      "Deep tendon reflexes": "Brisk but symmetric reflexes throughout, no pathologic reflexes",
      "Skin examination for rash": "No petechial or purpuric rash noted",
      "Assessment for photophobia": "Positive - patient squints and experiences increased headache with bright light exposure"
    },
    "ddxTargets": [
      "Viral (Enteroviral) Meningitis (correct diagnosis)",
      "Bacterial meningitis",
      "Tension-type headache",
      "Bacterial meningitis",
      "Subarachnoid hemorrhage",
      "Migraine headache",
      "Sinusitis with referred pain"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'college student routine check-up' and missing the severity of meningeal symptoms, or anchoring on family history of migraine",
      "prematureClosure": "May prematurely close on migraine or tension headache given patient's age and stress from school, without fully evaluating meningeal signs",
      "availabilityBias": "Recent cases of simple headaches in college students might bias against considering serious CNS infection"
    },
    "coachPrompts": {
      "phase2": "You've identified headache as the chief complaint. In a young, previously healthy college student, what are your thoughts about the differential diagnosis? What key historical elements and red flags would you want to explore to differentiate between benign and serious causes of headache?",
      "phase5": "You've found classic signs of meningeal irritation in this college student. How do your physical exam findings change your differential diagnosis? What's your assessment of the urgency of this presentation, and what would be your next steps in evaluation and management?",
      "finalDebrief": "This case illustrates how initial presentations can be misleading - the patient came for a 'routine check-up' but had serious CNS infection. The combination of headache, neck stiffness, photophobia, and positive meningeal signs pointed to meningitis. How did your differential evolve as you gathered more information, and what clinical pearls will help you recognize meningitis in the future?",
      "final": "Diagnosis: viral (enteroviral) meningitis — a common, typically self-limited CNS infection. Key learning: (1) Meningitis is inflammation of the meninges, with three broad categories: bacterial (life-threatening, requires immediate antibiotics), viral/aseptic (usually benign and self-limited), and other (fungal, tuberculous, parasitic, noninfectious — autoimmune, drug-induced, malignancy). Viral meningitis accounts for about 75% of 'aseptic meningitis' cases in adults. Common causes: enteroviruses (coxsackievirus, echovirus — 85-90% of viral meningitis; peak summer/fall), HSV-2 (recurrent; some cases), HSV-1 (more commonly encephalitis), VZV (can cause both), mumps (rare post-vaccination), HIV (acute seroconversion), arboviruses (West Nile, Eastern/Western equine, La Crosse — seasonal, geographic). (2) Presentation. Classic triad: fever, headache, neck stiffness (meningismus). Additional features: photophobia, nausea/vomiting, malaise. Mental status is TYPICALLY PRESERVED in viral meningitis (helpful distinguishing feature from encephalitis, which involves parenchymal inflammation and alters mental status). Brudzinski sign (neck flexion causes hip/knee flexion) and Kernig sign (pain/resistance to knee extension with hip flexed) — specific but insensitive for meningeal irritation. (3) Lumbar puncture. Indicated for suspected meningitis; CT first if focal deficits, altered consciousness, papilledema, immunocompromise, recent seizure, coagulopathy (relative contraindication), or space-occupying symptoms to avoid herniation. CSF analysis: - Viral: lymphocytic pleocytosis (10-500 cells, PMN can predominate early), normal glucose, mildly elevated protein (<200 typically), negative Gram stain, negative routine culture. - Bacterial: marked PMN pleocytosis (often >1,000), LOW glucose (<40 or CSF:serum <0.4), HIGH protein (>200), positive Gram stain and culture. - TB/fungal: lymphocytic pleocytosis, very low glucose, very high protein, negative bacterial studies. PCR testing: HSV, enterovirus, VZV PCR on CSF for specific etiology identification. (4) Differential and management. If bacterial meningitis cannot be excluded clinically — give empiric IV antibiotics (ceftriaxone + vancomycin; add ampicillin for Listeria risk in elderly, neonates, immunocompromised) AND dexamethasone (reduces mortality and hearing loss in pneumococcal meningitis) IMMEDIATELY, before LP if needed. Do not delay antibiotics for imaging or LP in clinically concerning patient. Once CSF confirms viral pattern (with PCR if available): supportive care (hydration, analgesics, antipyretics, antiemetics). Acyclovir for HSV or VZV meningitis. No specific therapy for enteroviral meningitis (most common) — symptomatic treatment only. Observation to exclude encephalitis (altered mental status, seizures, focal deficits, behavioral changes) — would warrant empiric acyclovir pending HSV PCR. (5) Prognosis and prevention. Viral meningitis is typically self-limited — resolution within 7-14 days with full recovery. Monitor for complications: rare permanent neurologic deficits, seizures, hearing loss. Vaccination prevents some causes: MMR (mumps), varicella, HPV (some cervical cancers), COVID-19, influenza (rare meningitis complication). Hygiene for enteroviral prevention (hand washing, avoiding sharing personal items). Classic pitfalls: (a) treating as viral and discharging when bacterial cannot be excluded — the cost of missed bacterial meningitis is catastrophic; start empiric antibiotics and dexamethasone for any possibility. (b) Missing HSV encephalitis — altered mental status, focal temporal lobe signs, seizures; empiric acyclovir until PCR returns. (c) Missing acute HIV seroconversion syndrome — aseptic meningitis in a young adult; check HIV viral load (antibody may still be negative). (d) Not testing for Listeria in elderly/immunocompromised — ampicillin must be part of empiric regimen. (e) Forgetting noninfectious aseptic meningitis causes: drug-induced (NSAIDs, TMP-SMX, IVIG), autoimmune (Behcet, SLE, sarcoid), malignancy (carcinomatous meningitis)."
    }
  }
};
