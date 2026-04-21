
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
    "pharmacy": "CVS Pharmacy \u2014 3050 University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "8271 E Roosevelt Rd, Chicago, IL 60607",
    "phone": "(954) 555-6148",
    "email": "a.delgado04@email.com",
    "emergencyContact": {
      "name": "Maria Delgado (Mother)",
      "phone": "(954) 555-6160"
    },
    "chiefComplaint": "Fever and severe headache"
  },
  "problems": [
    {
      "problem": "Acute bacterial meningitis \u2014 presumed N. meningitidis",
      "icd": "G00.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Tyler Brooks, 19M \u2014 college dormitory resident, sudden onset headache, fever 40.1\u00b0C, neck stiffness, photophobia, non-blanching petechial rash. Classic meningococcal presentation."
    },
    {
      "problem": "Petechial/purpuric rash \u2014 meningococcemia",
      "icd": "A39.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Non-blanching petechiae and purpura = meningococcal bacteremia with DIC. Indicates systemic Neisseria meningitidis septicemia. Rapidly progressive \u2014 can develop in hours."
    },
    {
      "problem": "Rapidly progressive \u2014 DIC and septic shock risk",
      "icd": "A39.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Meningococcal disease can progress from well to death in <24 hours. The rash spreading + hypotension = Waterhouse-Friderichsen syndrome risk (bilateral adrenal hemorrhage)."
    }
  ],
  "medications": [
    {
      "name": "Ceftriaxone 2g IV \u2014 IMMEDIATE, DO NOT DELAY FOR LP",
      "sig": "Do not delay antibiotics for LP if the patient is deteriorating or has contraindications to LP (elevated ICP, focal neuro deficits, coagulopathy). Give antibiotics immediately, then LP if safe.",
      "prescriber": "Emergency/Infectious Disease",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "Dexamethasone 0.15mg/kg IV \u2014 BEFORE or WITH first antibiotic dose",
      "sig": "Reduces neuroinflammation, decreases hearing loss (particularly in S. pneumoniae). Give before or with first dose of antibiotics \u2014 no benefit if given after. Continue 4 days.",
      "prescriber": "Emergency/Infectious Disease",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "Public health notification \u2014 contact prophylaxis",
      "sig": "N. meningitidis is notifiable. Close contacts (household, dormitory, healthcare workers with face exposure) require ciprofloxacin 500mg x1 or rifampin prophylaxis within 24 hours of exposure.",
      "prescriber": "Public Health",
      "start": "2024",
      "refills": 0,
      "status": "Initiated \u2014 PH notification"
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
      "temp": "98.4\u00b0F",
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
      "temp": "98.6\u00b0F",
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
      "cc": "URI symptoms \u2014 sore throat, congestion x 4 days",
      "hpi": "20-year-old male college student presents with 4 days of sore throat, nasal congestion, and mild cough. Low-grade temp 99.5\u00b0F at home. Rapid strep negative. No rash, stiff neck, or headache. Roommate had similar symptoms.",
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
      "hpi": "20-year-old male for intramural sports clearance. No complaints. Healthy. Lives in dormitory. Immunizations up to date including meningococcal ACWY (2022). No meningococcal B vaccine received \u2014 discussed and declined by patient at that time.",
      "exam": "General: Athletic male, NAD. CV: RRR, no murmurs. Lungs: CTAB. MSK: Full ROM. Neuro: A&O x3, intact.",
      "assessment": "1. Sports clearance \u2014 healthy\n2. Meningococcal B vaccine \u2014 discussed again; patient deferred",
      "plan": "1. Cleared for sports\n2. Strongly recommended MenB vaccine \u2014 dormitory living is a risk factor\n3. RTC PRN"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Bacterial Meningitis Workup",
      "results": [
        {
          "test": "CSF WBC",
          "value": "4800",
          "unit": "cells/\u03bcL (PMN predominant 92%)",
          "ref": "0-5",
          "flag": "H"
        },
        {
          "test": "CSF glucose",
          "value": "18",
          "unit": "mg/dL",
          "ref": "40-70; CSF:serum ratio <0.4 = bacterial",
          "flag": "L"
        },
        {
          "test": "CSF protein",
          "value": "380",
          "unit": "mg/dL",
          "ref": "15-45",
          "flag": "H"
        },
        {
          "test": "CSF Gram stain",
          "value": "Gram-negative diplococci",
          "unit": "",
          "ref": "No organisms",
          "flag": "H"
        },
        {
          "test": "Blood cultures",
          "value": "Pending \u2014 drawn before antibiotics",
          "unit": "",
          "ref": "No growth",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Head Non-Contrast (pre-LP)",
      "findings": "No midline shift. No herniation. No mass. Normal ventricles.",
      "impression": "No contraindication to lumbar puncture. Proceed with LP."
    }
  ],
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
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) \u2014 series complete",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Merck"
    },
    {
      "vaccine": "MMR (2/2)",
      "date": "2009",
      "site": "Left deltoid IM",
      "lot": "\u2014",
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
      "College student (junior) \u2014 lives in dormitory"
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
      "Marijuana \u2014 occasional"
    ],
    [
      "Exercise",
      "Intramural soccer and basketball; gym 4x/week"
    ],
    [
      "Housing",
      "University dormitory \u2014 shared room with 1 roommate"
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
    "diagnosis": "Acute Bacterial Meningitis \u2014 Neisseria meningitidis",
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
      "Temperature and vital signs assessment": "Current temperature 102.8\u00b0F, tachycardic at 110 bpm, blood pressure 108/65",
      "Lymph node palpation": "Mild cervical lymphadenopathy, tender to palpation"
    },
    "ddxTargets": [
      "Acute bacterial meningitis \u2014 N. meningitidis (correct)",
      "Viral meningitis \u2014 lymphocytic pleocytosis; normal glucose; less toxic; gram stain negative; enterovirus most common",
      "Subarachnoid hemorrhage \u2014 thunderclap headache; bloody CSF; xanthochromia; CT may show blood",
      "Herpes encephalitis \u2014 temporal lobe involvement on MRI; temporal CSF pleocytosis; treat with acyclovir empirically",
      "Meningococcal meningitis vs meningococcemia \u2014 distinction: meningitis = CSF infected; meningococcemia = bloodstream; can coexist"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on initial viral URI presentation and missing progression to bacterial meningitis, especially given patient's initial attribution to roommate's illness",
      "prematureClosure": "May stop at viral illness diagnosis without recognizing meningeal signs and petechial rash indicating serious bacterial infection",
      "availabilityBias": "Common viral illnesses in college students may overshadow recognition of life-threatening meningococcal disease"
    },
    "coachPrompts": {
      "phase2": "You've identified several possibilities for this young man's presentation. Before interviewing him, consider: What specific historical elements would help you differentiate between viral and bacterial causes? What questions about his living situation and symptom progression will be most crucial?",
      "phase5": "Now that you've completed your history and physical, let's think through your findings systematically. What do the positive meningeal signs tell you? How does the petechial rash change your differential diagnosis? What is the most concerning diagnosis you need to rule out immediately?",
      "finalDebrief": "This case demonstrates how bacterial meningitis can initially present like a common viral illness, particularly in college students. The key turning points were recognizing the severity of headache, positive meningeal signs, and especially the petechial rash. How might your approach change if you saw this patient on day 1 versus day 4 of illness?",
      "final": "Diagnosis: acute bacterial meningitis, meningococcal. Key learning: (1) Classic triad: fever + headache + neck stiffness. Only 44% have all three. Add photophobia, phonophobia, altered consciousness, petechiae. Non-blanching petechial rash in a febrile patient = meningococcemia until proven otherwise \u2014 give ceftriaxone immediately even before any workup. (2) Do NOT delay antibiotics for LP: if CT is required first (focal deficits, immunocompromised, papilledema, GCS <13, new seizure, age >60), draw blood cultures and give antibiotics IMMEDIATELY, then get CT, then LP. Each 1-hour delay in antibiotics increases mortality significantly. (3) CSF pattern: bacterial = low glucose (<40mg/dL or CSF:serum <0.4), elevated protein (>100mg/dL), polymorphonuclear pleocytosis (>1000 WBC, PMN dominant), positive Gram stain (60-90% sensitivity). (4) Dexamethasone: reduces neuroinflammation and hearing loss, particularly for S. pneumoniae. Give before or with first antibiotic dose \u2014 benefit lost if given afterward. If not pneumococcal, can stop after 4 days. (5) Contact prophylaxis: ciprofloxacin 500mg \u00d7 1 dose or rifampin for household and close contacts within 24 hours of exposure. Healthcare workers only if direct mucosal exposure (resuscitation, intubation without mask)."
    }
  }
};
