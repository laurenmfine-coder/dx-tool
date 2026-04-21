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
      "final": "Diagnosis: viral meningitis, most commonly enteroviral. Key learning: (1) Meningitis is inflammation of the meninges, with bacterial, viral, fungal, parasitic, and non-infectious causes. Viral (aseptic) meningitis is the most common form overall, generally much less severe than bacterial, and most patients recover fully with supportive care. Enteroviruses (coxsackievirus, echovirus, enterovirus 71, polio historically) account for 80-90% of viral meningitis. Other causes: HSV (particularly HSV-2 recurrent meningitis, Mollaret meningitis; HSV-1 meningoencephalitis more serious), mumps, VZV, EBV, HIV (seroconversion), West Nile virus, and arboviruses. (2) Clinical presentation overlaps with bacterial meningitis. Classic triad (fever, neck stiffness, altered mental status) present in only 50-60% of cases. Other features: severe headache, photophobia, phonophobia, nausea/vomiting, Kernig and Brudzinski signs (limited sensitivity), and in enteroviral meningitis, often prodromal GI or respiratory symptoms and summer/fall seasonality. In contrast, bacterial meningitis tends to have more rapid progression, more profound alteration of consciousness, petechial rash (meningococcemia), and systemic toxicity. The clinical distinction can be difficult — LP is required. (3) Lumbar puncture findings (compared with bacterial). Viral: WBC typically 10-1,000 (often 50-300), LYMPHOCYTE-predominant (can be neutrophil-predominant very early — repeat LP in 6-12 hours may show shift), elevated protein (usually <100-200), normal glucose (usually >50% of serum glucose), negative Gram stain. Bacterial: WBC often >1,000 (often 1,000-10,000), NEUTROPHIL-predominant, protein often >200, glucose often <40 or <50% of serum, positive Gram stain in ~60-90%. Fungal/mycobacterial: lymphocyte-predominant, elevated protein, low glucose. (4) Workup. History (travel, exposures, vaccines, immunocompromise). Imaging: CT head before LP if focal neurologic deficits, new seizures, altered mental status, papilledema, immunocompromise, or >60 years old (per IDSA) — not in all patients. LP with opening pressure, cell count and differential, protein, glucose (simultaneous serum glucose), Gram stain and bacterial culture, viral PCR panel (enterovirus, HSV, VZV, West Nile as appropriate), cryptococcal antigen and fungal workup in immunocompromised. Blood cultures. (5) Management. (a) EMPIRIC BACTERIAL MENINGITIS TREATMENT until ruled out — DO NOT withhold antibiotics pending LP or PCR in a clinically ill patient. Ceftriaxone 2 g IV q12h PLUS vancomycin (S. pneumoniae coverage); add ampicillin in >50 years old or immunocompromised (Listeria). Add acyclovir if HSV encephalitis suspected. (b) Dexamethasone 10 mg IV q6h initiated with or just before first antibiotic dose (in suspected bacterial meningitis, especially pneumococcal — reduces mortality and neurologic complications). (c) Once viral meningitis is confirmed (negative Gram stain, lymphocyte-predominant CSF, appropriate PCR positive): supportive care with analgesia, hydration, antiemetics, rest; discontinue empirical antibiotics. Most enteroviral meningitis resolves within 7-10 days. (d) Specific antiviral therapy: acyclovir for HSV, VZV; CMV agents for CMV; no proven therapy for most enteroviruses (pleconaril withdrawn from development). (e) Follow-up — most patients recover fully without sequelae. Rare complications: hearing loss, focal deficits, seizures. Classic pitfalls: (a) delaying antibiotics for LP or imaging — give empiric antibiotics immediately if bacterial meningitis suspected; LP can be done promptly or after imaging per protocol. (b) Missing HSV encephalitis (distinct from HSV meningitis) — altered mental status, focal deficits, seizures, temporal lobe involvement on MRI; acyclovir empirically because mortality is high if untreated. (c) Misinterpreting early neutrophilic pleocytosis as bacterial — repeat LP in 6-12 hours often shows lymphocytic shift in viral. (d) Missing meningitis in elderly patients or immunocompromised with atypical presentation (confusion without classic signs). (e) Forgetting post-exposure prophylaxis for close contacts of bacterial meningitis (meningococcus — ciprofloxacin, rifampin, ceftriaxone for household and close contacts)."
    }
  }
};
