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
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "15.4",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "45.2",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "248",
              "unit": "x10³/µL",
              "range": "150-400",
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
    [
      "Occupation",
      "College student (junior) — lives in dormitory"
    ],
    [
      "Marital",
      "Single"
    ],
    [
      "Tobacco",
      "Denies"
    ],
    [
      "Alcohol",
      "Social, weekends; binge drinking occasionally at parties"
    ],
    [
      "Drugs",
      "Marijuana — occasional"
    ],
    [
      "Exercise",
      "Intramural soccer and basketball; gym 4x/week"
    ],
    [
      "Housing",
      "University dormitory — shared room with 1 roommate"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; no firearms"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "bacterial-meningitis",
    "diagnosis": "Acute Bacterial Meningitis (Neisseria meningitidis Serogroup B)",
    "acuity": 1,
    "presentation": "Fever/Sepsis",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Anthony appears somewhat anxious and is becoming increasingly agitated as symptoms worsen. He is cooperative but downplays the severity initially, attributing symptoms to a common cold. As questioning progresses, he becomes more concerned when realizing his symptoms are more serious than expected.",
    "interviewQuestions": [
      "When did your symptoms first start and how have they progressed?",
      "Can you describe the quality and severity of your headache?",
      "Have you experienced any neck stiffness or pain with neck movement?",
      "Any nausea, vomiting, or sensitivity to light?",
      "Have you had any skin rash or unusual spots on your body?",
      "Any confusion, difficulty concentrating, or changes in mental status?",
      "Have you been around anyone else who has been sick recently?",
      "What is your living situation at college?",
      "Have you taken any medications or done anything to try to feel better?",
      "Any recent travel or exposure to unusual environments?",
      "Have you had any seizures or loss of consciousness?",
      "On a scale of 1-10, how severe is your headache right now?",
      "Any family history of serious infections or immune system problems?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean... can you ask that differently? I'm having trouble concentrating right now.",
      "onset": "It started about 4 days ago with just a sore throat and stuffy nose, but yesterday the headache got really bad, and this morning I started feeling nauseous and really awful.",
      "character": "The headache is like a severe pounding, worse than anything I've ever had. It's constant and throbbing, especially in the front and back of my head.",
      "location": "The headache is all over but worst in my forehead and the back of my neck. My neck feels really stiff and sore.",
      "severity": "The headache is easily a 9 out of 10 right now. I can barely function - I couldn't even go to class today and just lying in bed hurts.",
      "aggravating": "Any bright light makes the headache much worse, and moving my head or neck is excruciating. Even loud noises bother me.",
      "relieving": "I tried ibuprofen and acetaminophen but nothing is helping at all. Lying in a dark room helps a tiny bit.",
      "associated": "I've been throwing up since this morning, I feel feverish and sweaty, and I noticed some small red spots on my chest and arms today.",
      "denies": "I haven't had any seizures or passed out, but I do feel confused and it's hard to think clearly. No recent injuries or surgeries.",
      "history": "I've never had anything like this before. I get occasional headaches from stress or hangovers, but this is completely different.",
      "medications": "Fluticasone Propionate 50mcg nasal spray BID PRN",
      "allergies": "NKDA",
      "family": "My mom has asthma and my dad has high blood pressure and diabetes, but no one in my family has had serious infections or immune problems that I know of.",
      "social": "I'm a college junior living in the dorms with a roommate. I drink socially on weekends, sometimes heavily at parties, and smoke marijuana occasionally. I don't smoke cigarettes."
    },
    "examManeuvers": [
      "Nuchal rigidity assessment",
      "Kernig's sign",
      "Brudzinski's sign",
      "Fundoscopic examination",
      "Skin examination for petechial rash",
      "Mental status examination",
      "Cranial nerve examination",
      "Deep tendon reflexes",
      "Temperature and vital signs assessment",
      "Lymph node palpation"
    ],
    "examFindings": {
      "Nuchal rigidity assessment": "Positive nuchal rigidity with significant resistance and pain on passive neck flexion",
      "Kernig's sign": "Positive - patient experiences severe pain and resistance when attempting to extend knee with hip flexed at 90 degrees",
      "Brudzinski's sign": "Positive - passive neck flexion causes involuntary flexion of hips and knees",
      "Fundoscopic examination": "Mild papilledema noted bilaterally, suggesting increased intracranial pressure",
      "Skin examination for petechial rash": "Multiple small petechial lesions on trunk and extremities, non-blanching purpuric rash",
      "Mental status examination": "Alert but confused, difficulty with concentration and orientation to time, follows commands but appears lethargic",
      "Cranial nerve examination": "Cranial nerves II-XII grossly intact, mild photophobia noted",
      "Deep tendon reflexes": "Hyperreflexia noted in bilateral upper and lower extremities",
      "Temperature and vital signs assessment": "Current temperature 102.8°F, tachycardic at 110 bpm, blood pressure 108/65",
      "Lymph node palpation": "Mild cervical lymphadenopathy, tender to palpation"
    },
    "ddxTargets": [
      "Acute Bacterial Meningitis (Neisseria meningitidis Serogroup B) (correct diagnosis)",
      "Viral meningitis",
      "Subarachnoid hemorrhage",
      "Bacterial endocarditis with septic emboli",
      "Meningococcemia with shock",
      "Viral upper respiratory infection with severe headache",
      "Migraine with associated viral illness"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on initial viral URI presentation and missing progression to bacterial meningitis, especially given patient's initial attribution to roommate's illness",
      "prematureClosure": "May stop at viral illness diagnosis without recognizing meningeal signs and petechial rash indicating serious bacterial infection",
      "availabilityBias": "Common viral illnesses in college students may overshadow recognition of life-threatening meningococcal disease"
    },
    "coachPrompts": {
      "phase2": "You've identified several possibilities for this young man's presentation. Before interviewing him, consider: What specific historical elements would help you differentiate between viral and bacterial causes? What questions about his living situation and symptom progression will be most crucial?",
      "phase5": "Now that you've completed your history and physical, let's think through your findings systematically. What do the positive meningeal signs tell you? How does the petechial rash change your differential diagnosis? What is the most concerning diagnosis you need to rule out immediately?",
      "finalDebrief": "This case demonstrates how bacterial meningitis can initially present like a common viral illness, particularly in college students. The key turning points were recognizing the severity of headache, positive meningeal signs, and especially the petechial rash. How might your approach change if you saw this patient on day 1 versus day 4 of illness?"
    }
  }
};
