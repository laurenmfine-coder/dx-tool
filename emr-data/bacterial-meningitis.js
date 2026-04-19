// Virtual EMR Case: Bacterial Meningitis
// Variant: bacterial-meningitis | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Anthony Delgado",
  "patientHPI": "I've had a sore throat and stuffy nose for about four days now, along with a mild cough and a low fever around 99 degrees. My roommate had something similar recently, so I figured I caught whatever he had.",
    "dob": "08/22/2004",
    "age": 20,
    "sex": "Male",
    "mrn": "RDX-2025-84512",
    "pronouns": "He/Him",
    "insurance": "Cigna PPO (parent plan)",
    "pcp": "Dr. Samuel Rivera, MD",
    "pharmacy": "CVS Pharmacy — 3050 University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "8271 E Roosevelt Rd, Chicago, IL 60607",
    "phone": "(954) 555-6148",
    "email": "a.delgado04@email.com",
    "emergencyContact": {
      "name": "Maria Delgado (Mother)",
      "phone": "(954) 555-6160"
    }
  },
  "problems": [
    {
      "problem": "Allergic Rhinitis — Perennial",
      "icd": "J30.89",
      "onset": "2010",
      "status": "Active",
      "notes": "Managed with intranasal fluticasone PRN"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone Propionate 50mcg nasal spray BID PRN",
      "sig": "Spray 2 sprays in each nostril once or twice daily as needed for nasal congestion",
      "prescriber": "Dr. Rivera",
      "start": "09/2022",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "08/12/2024",
      "bp": "118/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "170 lbs",
      "ht": "5'10\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "01/10/2024",
      "bp": "116/70",
      "hr": 66,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "168 lbs",
      "ht": "5'10\"",
      "bmi": 24.1,
      "setting": "Student Health"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/10/2024",
      "type": "Student Health",
      "provider": "Dr. Karen Mills, MD",
      "cc": "URI symptoms — sore throat, congestion x 4 days",
      "hpi": "20-year-old male college student presents with 4 days of sore throat, nasal congestion, and mild cough. Low-grade temp 99.5°F at home. Rapid strep negative. No rash, stiff neck, or headache. Roommate had similar symptoms.",
      "exam": "General: NAD. HEENT: Mild pharyngeal erythema without exudate, TMs clear, nasal mucosa edematous. Neck: Supple, no LAD. Lungs: CTAB.",
      "assessment": "1. Viral URI",
      "plan": "1. Supportive care: rest, fluids, acetaminophen PRN\n2. Return if worsening or not improving in 7-10 days"
    },
    {
      "id": "V002",
      "date": "08/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Samuel Rivera, MD",
      "cc": "Pre-semester sports physical",
      "hpi": "20-year-old male for intramural sports clearance. No complaints. Healthy. Lives in dormitory. Immunizations up to date including meningococcal ACWY (2022). No meningococcal B vaccine received — discussed and declined by patient at that time.",
      "exam": "General: Athletic male, NAD. CV: RRR, no murmurs. Lungs: CTAB. MSK: Full ROM. Neuro: A&O x3, intact.",
      "assessment": "1. Sports clearance — healthy\n2. Meningococcal B vaccine — discussed again; patient deferred",
      "plan": "1. Cleared for sports\n2. Strongly recommended MenB vaccine — dormitory living is a risk factor\n3. RTC PRN"
    }
  ],
  "labs": [
    {
      "date": "08/12/2024",
      "time": "10:00",
      "orderedBy": "Dr. Samuel Rivera, MD",
      "collected": "08/12/2024 09:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-081218",
      "status": "Final",
      "specimenType": "Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.4", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.2", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "248", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Meningococcal ACWY (Menactra)",
      "date": "09/2022",
      "site": "Left deltoid IM",
      "lot": "MN22-412",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/02/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-255",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/18/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-680",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
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
    },
    {
      "vaccine": "MMR (2/2)",
      "date": "2009",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Asthma, alive at 48",
    "Father: HTN, T2DM, alive at 52",
    "Sister: Healthy, age 16",
    "No family history of immunodeficiency"
  ],
  "socialHistory": [
    ["Occupation", "College student (junior) — lives in dormitory"],
    ["Marital", "Single"],
    ["Tobacco", "Denies"],
    ["Alcohol", "Social, weekends; binge drinking occasionally at parties"],
    ["Drugs", "Marijuana — occasional"],
    ["Exercise", "Intramural soccer and basketball; gym 4x/week"],
    ["Housing", "University dormitory — shared room with 1 roommate"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "bacterial-meningitis",
    "diagnosis": "Acute Bacterial Meningitis (Neisseria meningitidis Serogroup B)",
    "acuity": 1,
    "presentation": "Fever/Sepsis",
    "category": "infectious"
  },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Skin/lymph nodes",
        "Cardiovascular",
        "Pulmonary",
        "Abdominal",
        "Source-specific",
        "Neurological screen"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with Acute Bacterial Meningitis.",
        "Vital signs": "Finding consistent with Acute Bacterial Meningitis.",
        "Skin/lymph nodes": "Finding consistent with Acute Bacterial Meningitis.",
        "Cardiovascular": "Finding consistent with Acute Bacterial Meningitis.",
        "Pulmonary": "Finding consistent with Acute Bacterial Meningitis.",
        "Abdominal": "Finding consistent with Acute Bacterial Meningitis.",
        "Source-specific": "Finding consistent with Acute Bacterial Meningitis.",
        "Neurological screen": "Finding consistent with Acute Bacterial Meningitis."
    },
    "ddxTargets": [
        "Acute Bacterial Meningitis (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for Acute Bacterial Meningitis.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Anthony Delgado: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is Acute Bacterial Meningitis (Neisseria meningitidis Serogroup B). How did your reasoning evolve?"
    }
}
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['bacterial-meningitis'] = {
  id: 'bacterial-meningitis', name: 'Anthony Delgado',
  chiefComplaint: 'Bacterial Meningitis — LP and Empirical Antibiotics Without Delay',
  diagnosis: 'Bacterial Meningitis — LP and Empirical Antibiotics Without Delay',
  orders: {
    correct: [{ id: 'abx-first-lp', name: 'Empirical antibiotics IMMEDIATELY — do not delay for LP if signs of raised ICP', rationale: 'If signs of raised ICP (papilledema, focal deficits, seizures, GCS <13): blood cultures → CT head → LP → antibiotics. If NO signs of raised ICP: blood cultures → LP (ideally within 30 min) → antibiotics. Do NOT delay antibiotics for CT or LP in a critically ill patient — each hour of delay worsens outcomes.' },{ id: 'lp-interpretation', name: 'LP interpretation: CSF bacterial meningitis pattern', rationale: 'CSF bacterial meningitis: WBC >1000 (PMN predominance), protein >100 mg/dL, glucose <45 (CSF:serum glucose ratio <0.4), positive gram stain (50-80%), positive culture (70-85%). Viral meningitis: WBC 100-500 (lymphocyte predominance), normal protein, normal glucose, negative culture.' }],
    incorrect: [{ id: 'delay-abx-ct', name: 'Wait for CT before antibiotics — need to rule out contraindications to LP', rationale: 'WRONG PRIORITY. CT is needed before LP only if signs of raised ICP (papilledema, focal deficits, altered consciousness). For ALL patients: get blood cultures and start antibiotics while CT is pending. Delay in antibiotics of even 1-3 hours worsens mortality in bacterial meningitis.' },{ id: 'dexamethasone-after', name: 'Give dexamethasone after confirming organism sensitivity', rationale: 'Dexamethasone should be given BEFORE or WITH the first dose of antibiotics — it reduces the inflammatory cascade triggered by bacterial cell lysis. Give 0.15 mg/kg IV q6h × 4 days. Most benefit seen in pneumococcal meningitis (reduces mortality and neurological sequelae). Less clear benefit in meningococcal meningitis.' }]
  },
  teachingPoints: {
    keyLearning: ['Empirical regimen: vancomycin + ceftriaxone (covers S. pneumoniae including PCN-resistant strains, N. meningitidis). Add ampicillin if immunocompromised, age >50, or alcoholism (covers Listeria). Add dexamethasone before or with first antibiotic dose.','Kernig sign: knee extension limited/painful with hip flexed at 90°. Brudzinski sign: passive neck flexion causes involuntary hip/knee flexion. Both have low sensitivity (~50%) but high specificity. Jolt accentuation: worsening headache with rapid horizontal head rotation — higher sensitivity (97%) but lower specificity for meningismus.','Antibiotic dosing for meningitis: HIGH DOSE — ceftriaxone 2g IV q12h (CNS penetration requires high serum levels). Vancomycin 15-20 mg/kg IV q8-12h (target AUC/MIC, not trough). Goal: CSF drug concentrations exceed MIC.'],
    boardPearls: ['N. meningitidis: petechiae/purpura (meningococcemia — sepsis without meningitis) can occur. NOTIFY public health immediately. Post-exposure prophylaxis for close contacts: rifampin × 2 days, or single-dose ciprofloxacin, or single-dose ceftriaxone IM.','S. pneumoniae meningitis: most common bacterial meningitis in adults. PCN-resistant strains prevalent — use vancomycin + ceftriaxone empirically, adjust based on sensitivities. Dexamethasone most beneficial for this organism.','Listeria meningitis: elderly, immunocompromised, pregnant. NOT covered by cephalosporins — requires ampicillin. MRI: rhombencephalitis pattern (brainstem involvement). CSF: mixed PMN/lymphocyte pleocytosis.']
  },
  "guided": {
    "supported": true,
    "patientPersona": "Anthony Delgado is cooperative and provides a clear history. He is appropriately concerned about their symptoms.",
    "interviewQuestions": [
        "When did your symptoms start?",
        "Describe the main symptom.",
        "How severe is it?",
        "What makes it worse or better?",
        "Any other symptoms?",
        "Any prior episodes?",
        "What medications do you take?",
        "Any allergies?"
    ],
    "patientResponses": {
        "default": "He thinks for a moment. 'Can you clarify what you mean?'",
        "onset": "'My symptoms started recently, getting worse over the past day or two.'",
        "character": "'It feels like acute bacterial meningitis \u2014 fairly significant.'",
        "location": "'The problem is primarily in the affected area.'",
        "severity": "'About a seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat.'",
        "associated": "'I have some associated symptoms consistent with my condition.'",
        "denies": "'No fever, chills, or weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Fluticasone Propionate 50mcg nasal spray BID PRN.'",
        "allergies": "'My allergies: NKDA.'",
        "family": "'No significant family history relevant to this presentation.'",
        "social": "'I am a working adult. Non-smoker. Social drinker.'"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted examination"
    ],
    "examFindings": {
        "General appearance": "Patient appears consistent with Acute Bacterial Meningitis.",
        "Vital signs": "Vital signs appropriate to the acuity of presentation.",
        "Cardiovascular auscultation": "Cardiovascular exam as appropriate.",
        "Pulmonary auscultation": "Pulmonary exam as appropriate.",
        "Abdominal examination": "Abdomen as appropriate.",
        "Extremity assessment": "Extremities as appropriate.",
        "Skin examination": "Skin as appropriate.",
        "Targeted examination": "Targeted findings consistent with Acute Bacterial Meningitis."
    },
    "ddxTargets": [
        "Acute Bacterial Meningitis (correct)",
        "Alternative diagnosis 1",
        "Alternative diagnosis 2",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for Acute Bacterial Meningitis.",
        "prematureClosure": "Complete your workup even after forming a hypothesis.",
        "availabilityBias": "Apply systematic reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Anthony Delgado \u2014 what are your top 3 diagnoses from chart review?",
        "phase5": "How has your differential changed after history and exam?",
        "finalDebrief": "The diagnosis is Acute Bacterial Meningitis (Neisseria meningitidis Serogroup B). How did your reasoning evolve?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Anthony appears mildly uncomfortable but cooperative, initially dismissive of his symptoms as \"just a cold\" like his roommate had. He becomes more concerned as questioning reveals the severity of his condition, showing appropriate worry but remaining forthcoming with information.",
    "interviewQuestions": [
        "Can you describe when your symptoms first started and how they've progressed?",
        "Have you had any headaches, and if so, how severe are they?",
        "Have you experienced any neck stiffness or pain with moving your neck?",
        "Any nausea, vomiting, or sensitivity to bright lights?",
        "Have you had any rash or skin changes anywhere on your body?",
        "Any confusion, difficulty concentrating, or changes in your thinking?",
        "Have you been around anyone else who's been sick recently?",
        "What's your living situation - do you live in a dorm or shared housing?",
        "Have you taken any medications or done anything to try to feel better?",
        "Any known drug allergies or reactions?",
        "Do you have any ongoing medical conditions?",
        "Has anyone in your family had serious infections or immune problems?",
        "Do you use tobacco, alcohol, or any recreational drugs?"
    ],
    "patientResponses": {
        "default": "I'm not sure I understand what you're asking - can you explain that differently?",
        "onset": "It started about four days ago with just a sore throat and runny nose, but over the past day or two I've been getting worse headaches and feeling more run down",
        "character": "The headache is really intense, like a pounding sensation, and my neck feels really stiff and sore when I try to move it",
        "location": "The headache is all over my head, but especially bad in the back, and the neck stiffness is mainly at the base of my skull",
        "severity": "The headache is probably an 8 out of 10 now, and it's making it hard to concentrate on anything or even watch TV",
        "aggravating": "Bright lights make the headache much worse, and trying to bend my neck forward is really painful",
        "relieving": "I tried ibuprofen and acetaminophen but they barely helped, and lying in a dark room helps a little with the light sensitivity",
        "associated": "I've been feeling nauseous since yesterday and threw up this morning, and I'm feeling pretty confused and foggy",
        "denies": "No rash that I've noticed, no ear pain, no shortness of breath, no chest pain, no abdominal pain",
        "history": "I've never had anything like this before - usually when I get sick it's just a regular cold that goes away in a few days",
        "medications": "Fluticasone Propionate 50mcg nasal spray BID PRN",
        "allergies": "NKDA",
        "family": "No one in my family has had serious infections like this, though my mom has asthma and my dad has high blood pressure and diabetes",
        "social": "I'm a college junior living in the dorms, single, don't smoke, drink socially on weekends and sometimes binge drink at parties, smoke marijuana occasionally"
    },
    "examManeuvers": [
        "General appearance and mental status",
        "Vital signs including temperature",
        "Nuchal rigidity assessment",
        "Kernig's sign",
        "Brudzinski's sign",
        "Fundoscopic examination",
        "Complete skin examination for petechiae/purpura",
        "Neurologic examination including cranial nerves",
        "Assessment for photophobia",
        "Lymph node examination"
    ],
    "examFindings": {
        "General appearance and mental status": "Ill-appearing young man, mildly lethargic but arousable and oriented, appears uncomfortable",
        "Vital signs including temperature": "BP 118/72, HR 68, Temp 98.4°F (currently), SpO2 99% - patient reports fever to 101.5°F at home",
        "Nuchal rigidity assessment": "Positive nuchal rigidity with resistance and pain on passive neck flexion",
        "Kernig's sign": "Positive - pain and resistance when extending knee with hip flexed at 90 degrees",
        "Brudzinski's sign": "Positive - involuntary hip flexion when neck is passively flexed",
        "Fundoscopic examination": "No papilledema, discs appear normal",
        "Complete skin examination for petechiae/purpura": "Few scattered petechiae noted on lower extremities and trunk",
        "Neurologic examination including cranial nerves": "Cranial nerves II-XII intact, no focal neurologic deficits, reflexes symmetric",
        "Assessment for photophobia": "Marked photophobia present - patient squints and turns away from bright lights",
        "Lymph node examination": "Mild cervical lymphadenopathy, nodes mobile and tender"
    },
    "ddxTargets": [
        "Acute Bacterial Meningitis (Neisseria meningitidis Serogroup B) (correct diagnosis)",
        "Viral meningitis",
        "Bacterial meningitis (other organisms - S. pneumoniae, H. influenzae)",
        "Subarachnoid hemorrhage",
        "Brain abscess",
        "Viral upper respiratory infection with tension headache",
        "Migraine headache with viral illness"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on 'viral URI' given the initial presentation of sore throat, runny nose, and roommate with similar illness, missing the evolution to meningitis",
        "prematureClosure": "Risk of stopping at viral illness diagnosis without fully exploring the headache, neck stiffness, and neurologic symptoms that suggest meningitis",
        "availabilityBias": "Common cold symptoms may seem more likely in a college student, potentially delaying recognition of the serious bacterial infection"
    },
    "coachPrompts": {
        "phase2": "This college student initially presented with URI symptoms but now has headache and neck stiffness. What specific historical elements would help you differentiate between viral illness and more serious causes of his presentation? Consider his living situation and symptom progression.",
        "phase5": "Your examination reveals classic meningeal signs. How do the positive Kernig's and Brudzinski's signs, along with the petechiae, change your differential diagnosis? What's the most concerning diagnosis you need to rule out immediately, and what's your next step?",
        "finalDebrief": "This case demonstrates how bacterial meningitis can initially present like a viral URI, making early recognition challenging. The key was recognizing the evolution of symptoms - particularly the severe headache, neck stiffness, and meningeal signs. The college dormitory setting increases risk for Neisseria meningitidis. How might anchoring on the initial 'viral' presentation have delayed diagnosis, and what systems can help prevent missing this time-sensitive diagnosis?"
    }
}
};
