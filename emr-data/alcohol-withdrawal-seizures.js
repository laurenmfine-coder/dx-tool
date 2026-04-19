// Virtual EMR Case: Alcohol Withdrawal Seizures
// Variant: alcohol-withdrawal-seizures | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Michael Brennan",
    "patientHPI": "I've been drinking about 12 to 18 beers every day and I haven't been taking those vitamins you recommended in months. I know I need to stop but it's been really hard since my last attempt at getting sober a couple years ago.",
    "dob": "01/22/1978",
    "age": 47,
    "sex": "Male",
    "mrn": "RDX-2025-51284",
    "pronouns": "He/Him",
    "insurance": "Medicaid (Florida)",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "CVS Pharmacy — 2901 Broward Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "7621 Magnolia Blvd, Richmond, VA 23220",
    "phone": "(954) 555-7291",
    "email": "m.brennan78@email.com",
    "emergencyContact": {
      "name": "Sean Brennan (Brother)",
      "phone": "(954) 555-7294"
    },
    "chiefComplaint": "Seizure after stopping drinking"
  },
  "problems": [
    {
      "problem": "Alcohol Use Disorder — Severe",
      "icd": "F10.20",
      "onset": "2010",
      "status": "Active",
      "notes": "Drinks 12-18 beers daily; multiple attempts at sobriety; 3 prior medically supervised detoxes; 2 prior alcohol withdrawal seizures (2019, 2022); 1 episode of DTs (2022)"
    },
    {
      "problem": "Alcohol Withdrawal Seizures — History",
      "icd": "F10.231",
      "onset": "2019",
      "status": "Active",
      "notes": "2 prior episodes (2019, 2022); both GTC; last seizure led to ICU admission for DTs"
    },
    {
      "problem": "Alcoholic Liver Disease",
      "icd": "K70.10",
      "onset": "2020",
      "status": "Active",
      "notes": "Biopsy-confirmed steatohepatitis 2020; no cirrhosis yet; AST/ALT chronically elevated"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2017",
      "status": "Active",
      "notes": "On lisinopril; BP fluctuates with drinking patterns"
    },
    {
      "problem": "Gastroesophageal Reflux Disease",
      "icd": "K21.0",
      "onset": "2018",
      "status": "Active",
      "notes": "On omeprazole; exacerbated by alcohol use"
    },
    {
      "problem": "Thiamine Deficiency — History",
      "icd": "E51.9",
      "onset": "2022",
      "status": "Active",
      "notes": "Received IV thiamine during prior DTs admission; prescribed oral thiamine but non-adherent"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "04/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily before breakfast",
      "prescriber": "Dr. Whitfield",
      "start": "06/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Thiamine 100mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "11/2022",
      "refills": 5,
      "status": "Active — PATIENT NON-ADHERENT"
    },
    {
      "name": "Folic Acid 1mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "11/2022",
      "refills": 5,
      "status": "Active — PATIENT NON-ADHERENT"
    },
    {
      "name": "Multivitamin daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "01/2023",
      "refills": 0,
      "status": "Active — PATIENT NON-ADHERENT"
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
      "date": "02/24/2025",
      "bp": "172/108",
      "hr": 118,
      "rr": 22,
      "temp": "100.8°F",
      "spo2": "96%",
      "wt": "172 lbs",
      "ht": "5'10\"",
      "bmi": 24.7,
      "setting": "ED"
    },
    {
      "date": "09/18/2024",
      "bp": "148/92",
      "hr": 86,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "178 lbs",
      "ht": "5'10\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    },
    {
      "date": "03/12/2024",
      "bp": "138/88",
      "hr": 82,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "176 lbs",
      "ht": "5'10\"",
      "bmi": 25.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/18/2024",
      "type": "Primary Care",
      "provider": "Dr. James Whitfield, MD",
      "cc": "Follow-up: alcohol use disorder, hypertension, liver disease",
      "hpi": "47-year-old male with severe AUD presenting for follow-up. Admits to continued drinking — 12-18 beers daily. Has not taken thiamine, folic acid, or multivitamin 'in months.' Denies any period of sobriety since last detox (2022). Denies recent seizures, tremor, or hallucinations. Reports intermittent abdominal pain and poor appetite. Brother brought him today — concerned about worsening drinking pattern.",
      "exam": "General: Thin male, mild diaphoresis, slight hand tremor at rest. HEENT: Mild scleral icterus. CV: Tachycardic, regular. Lungs: CTA. Abdomen: Mild RUQ tenderness, no rebound, liver palpable 2 cm below costal margin. Extremities: Mild bilateral LE edema. Neuro: A&O x3 but tangential speech. Fine bilateral hand tremor. No asterixis. Gait: Mildly unsteady.",
      "assessment": "1. Severe alcohol use disorder — active, heavy daily drinking\n2. Alcoholic liver disease — possible progression; mild icterus, tender hepatomegaly\n3. Hypertension — suboptimally controlled\n4. Non-adherent to thiamine/folic acid supplementation",
      "plan": "1. Labs: CBC, CMP, LFTs, GGT, coagulation studies, lipase\n2. STRONGLY counseled on detox — patient 'not ready yet'\n3. Restarted thiamine 100mg, folic acid 1mg — emphasized importance given seizure history\n4. Provided brother with addiction treatment resources and crisis numbers\n5. CIWA protocol reviewed with patient should he present to ED\n6. RTC 1 month; sooner if willing to enter treatment"
    },
    {
      "id": "V002",
      "date": "11/15/2022",
      "type": "ED",
      "provider": "Dr. Marcus Johnson, MD",
      "cc": "Seizure, confusion, tremor — brought by EMS after roommate called 911",
      "hpi": "45-year-old male (at time of visit) with known severe AUD brought to ED after witnessed GTC seizure at home. Last drink approximately 72 hours ago — ran out of money for alcohol. Roommate reports progressive tremor, agitation, and confusion over past 24 hours. Prior to seizure, patient reportedly was 'seeing bugs on the walls' and talking to people who were not present. Seizure lasted approximately 2 minutes, self-resolved. On EMS arrival: GCS 12 (E3V4M5), diaphoretic, tremulous, tachycardic.",
      "exam": "General: Agitated, confused, diaphoretic. HEENT: Pupils 5mm bilaterally, reactive. CV: Tachycardic 124. Lungs: CTA. Abdomen: Soft, mild tenderness diffusely. Neuro: GCS 14 (improved post-lorazepam). Coarse tremor. Visual hallucinations reported. CIWA score: 24 (severe).",
      "assessment": "1. Alcohol withdrawal seizure — GTC; second lifetime event\n2. Delirium tremens — visual hallucinations, autonomic instability, CIWA 24\n3. Severe AUD",
      "plan": "1. IV lorazepam per CIWA protocol\n2. IV thiamine 500mg x 3 days (Wernicke prophylaxis)\n3. IV fluids — NS with MVI + folate\n4. ICU admission for DTs monitoring\n5. Social work and addiction psychiatry consulted"
    }
  ],
  "labs": [
    {
      "date": "02/24/2025",
      "time": "05:42",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "collected": "02/24/2025 05:28",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-103218",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "68",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "L"
            },
            {
              "test": "BUN",
              "value": "8",
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
              "value": "134",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "3.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "L"
            },
            {
              "test": "Chloride",
              "value": "96",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "L"
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "20",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": "L"
            },
            {
              "test": "Calcium",
              "value": "8.2",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "L"
            },
            {
              "test": "Magnesium",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "1.7-2.2",
              "flag": "L"
            },
            {
              "test": "Phosphorus",
              "value": "2.0",
              "unit": "mg/dL",
              "range": "2.5-4.5",
              "flag": "L"
            },
            {
              "test": "AST (SGOT)",
              "value": "128",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT (SGPT)",
              "value": "62",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "Total Bilirubin",
              "value": "3.2",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": "H"
            },
            {
              "test": "Albumin",
              "value": "2.8",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "12.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "11.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "33.8",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": "L"
            },
            {
              "test": "MCV",
              "value": "108",
              "unit": "fL",
              "range": "80-100",
              "flag": "H"
            },
            {
              "test": "Platelets",
              "value": "98",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COAGULATION STUDIES",
          "results": [
            {
              "test": "PT",
              "value": "16.8",
              "unit": "sec",
              "range": "11.0-14.0",
              "flag": "H"
            },
            {
              "test": "INR",
              "value": "1.4",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "PTT",
              "value": "34",
              "unit": "sec",
              "range": "25-35",
              "flag": ""
            }
          ]
        },
        {
          "name": "ETHANOL AND TOXICOLOGY",
          "results": [
            {
              "test": "Blood Alcohol Level",
              "value": "28",
              "unit": "mg/dL",
              "range": "0",
              "flag": "H"
            },
            {
              "test": "GGT",
              "value": "412",
              "unit": "U/L",
              "range": "0-65",
              "flag": "H"
            }
          ]
        },
        {
          "name": "LACTIC ACID",
          "results": [
            {
              "test": "Lactate",
              "value": "4.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/24/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-10291",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "47-year-old with witnessed GTC seizure in setting of alcohol withdrawal — r/o intracranial hemorrhage",
      "technique": "Non-contrast axial CT images of the head obtained.",
      "findings": "BRAIN PARENCHYMA: No acute intracranial hemorrhage, mass, or midline shift. Mild generalized cortical atrophy — disproportionate for age, likely related to chronic alcohol use. No acute infarction.\n\nVENTRICLES: Normal size.\n\nEXTRA-AXIAL: No subdural or epidural collection.\n\nBONY STRUCTURES: No fracture. Small scalp hematoma overlying right parietal bone (likely from fall during seizure).",
      "impression": "1. No acute intracranial hemorrhage or structural lesion\n2. Mild generalized cortical atrophy — premature for age, consistent with chronic alcohol use\n3. Small right parietal scalp hematoma (soft tissue only)\n4. Seizure most likely related to alcohol withdrawal — correlate clinically",
      "dictated": "02/24/2025 06:10",
      "verified": "02/24/2025 06:18"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "11/2024",
      "site": "Left deltoid IM",
      "lot": "FL842T",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "TA218R",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "Hepatitis A (Havrix) — 1st dose",
      "date": "03/2021",
      "site": "Right deltoid IM",
      "lot": "HA281P",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother (age 72): Hypertension, anxiety disorder",
    "Father: Deceased at age 58 — alcohol-related cirrhosis, variceal hemorrhage",
    "Brother (age 50): History of alcohol use disorder — in recovery x 5 years",
    "Paternal uncle: Deceased — alcohol-related liver failure",
    "Strong family history of alcohol use disorder (paternal lineage)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Unemployed — formerly worked in landscaping; lost job due to drinking"
    ],
    [
      "Marital",
      "Divorced x 6 years; lives alone in efficiency apartment; brother nearby"
    ],
    [
      "Tobacco",
      "1 PPD x 25 years"
    ],
    [
      "Alcohol",
      "12-18 beers daily x 15 years; last drink approximately 48 hours ago (stopped when he ran out)"
    ],
    [
      "Drugs",
      "Denies current illicit drug use; remote history of cocaine use (stopped 2015)"
    ],
    [
      "Exercise",
      "None"
    ],
    [
      "Housing",
      "Efficiency apartment — no air conditioning"
    ],
    [
      "Safety",
      "History of falls when intoxicated; no firearms"
    ],
    [
      "Advance Directive",
      "None"
    ]
  ],
  "meta": {
    "caseId": "alcohol-withdrawal-seizures",
    "diagnosis": "Alcohol Withdrawal Seizure (GTC) — 48 Hours Post-Cessation with High Risk for Delirium Tremens (Prior DTs History, Kindling)",
    "acuity": 2,
    "presentation": "Seizure",
    "category": "toxicologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Michael appears anxious and restless, with visible tremor in his hands and mild diaphoresis. He is cooperative but shows some embarrassment about his drinking history, though he's candid about needing help after experiencing the seizure.",
    "interviewQuestions": [
      "Can you describe exactly what happened during the seizure episode?",
      "When was your last alcoholic drink, and how much were you drinking daily?",
      "Have you had seizures before, especially when stopping drinking?",
      "Have you ever experienced delirium tremens or severe withdrawal symptoms?",
      "Are you experiencing any tremors, sweating, or anxiety right now?",
      "Have you seen or heard things that others couldn't see or hear?",
      "Are you having any nausea, vomiting, or stomach pain?",
      "Have you been taking your prescribed vitamins regularly?",
      "Have you tried to quit drinking before? What happened?",
      "Are you experiencing any chest pain or palpitations?",
      "Have you had any head trauma recently?",
      "Do you have any medical conditions or take any medications?",
      "Tell me about your family history, especially regarding alcohol use"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm feeling pretty shaky and anxious right now. Could you repeat that question?",
      "onset": "It happened this morning around 6 AM. I woke up on the floor of my apartment. My neighbor heard a loud thump and found me seizing. It lasted maybe 2-3 minutes according to him.",
      "character": "I don't remember the seizure itself, but I woke up confused with a bitten tongue and my whole body aching. I've been feeling shaky and sweaty since then.",
      "location": "The seizure seemed to affect my whole body. My neighbor said I was jerking all over. Now I have a headache and my muscles are sore everywhere.",
      "severity": "The anxiety and shakiness right now is about a 7 out of 10. I feel like I need a drink badly, but I know I shouldn't.",
      "aggravating": "The shaking and anxiety get worse when I think about drinking or when there's loud noises. Bright lights bother me too.",
      "relieving": "Nothing really helps the shaking. I've been trying to drink water and rest, but I can't sit still.",
      "associated": "I'm sweating a lot, my heart feels like it's racing, I'm nauseous, and I keep feeling like I see things moving in my peripheral vision.",
      "denies": "No chest pain, no shortness of breath, no recent head injury, no fever or chills before this morning.",
      "history": "Yes, I've had seizures twice before when I tried to quit cold turkey. About 2 years ago I had the DTs - saw bugs crawling everywhere and was in the ICU for 4 days.",
      "medications": "Lisinopril 20mg daily; Omeprazole 20mg daily; Thiamine 100mg daily; Folic Acid 1mg daily; Multivitamin daily",
      "allergies": "NKDA",
      "family": "My father died from complications of alcoholism - cirrhosis and bleeding. My mother has anxiety and high blood pressure. My brother also struggled with alcohol but has been sober for 5 years now.",
      "social": "I'm unemployed since losing my landscaping job due to drinking. Divorced 6 years ago. I smoke a pack a day and was drinking 12-18 beers daily until I ran out 2 days ago. No drugs since cocaine years ago."
    },
    "examManeuvers": [
      "Neurological assessment including mental status",
      "Assessment for tremor and autonomic hyperactivity",
      "Cardiovascular examination",
      "CIWA-Ar withdrawal assessment scale",
      "Tongue and oral cavity examination",
      "Fundoscopic examination",
      "Assessment for asterixis",
      "Skin examination for signs of chronic liver disease",
      "Abdominal examination",
      "Assessment for nystagmus"
    ],
    "examFindings": {
      "Neurological assessment including mental status": "Alert and oriented x3 but anxious and restless. No focal neurological deficits. Mild confusion with concentration difficulties.",
      "Assessment for tremor and autonomic hyperactivity": "Coarse tremor of hands at rest and with intention. Diaphoresis present. Hypervigilant and startles easily.",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs. Elevated blood pressure consistent with autonomic hyperactivity.",
      "CIWA-Ar withdrawal assessment scale": "Score of 18: tremor (3), anxiety (3), sweating (2), agitation (2), tactile disturbances (2), auditory disturbances (2), visual disturbances (2), headache (2).",
      "Tongue and oral cavity examination": "Lateral tongue bite marks consistent with recent seizure activity. Poor dentition.",
      "Fundoscopic examination": "Normal optic discs, no papilledema or hemorrhages.",
      "Assessment for asterixis": "No asterixis present at this time.",
      "Skin examination for signs of chronic liver disease": "Mild spider angiomata on chest. No jaundice or palmar erythema currently visible.",
      "Abdominal examination": "Soft, mild epigastric tenderness. Liver edge palpable 2cm below costal margin.",
      "Assessment for nystagmus": "No nystagmus present."
    },
    "ddxTargets": [
      "Alcohol Withdrawal Seizure (GTC) — 48 Hours Post-Cessation with High Risk for Delirium Tremens (Prior DTs History, Kindling) (correct diagnosis)",
      "Alcohol Withdrawal Syndrome without seizure",
      "Metabolic encephalopathy (hyponatremia, hypoglycemia, hepatic)",
      "Intracranial hemorrhage or mass lesion",
      "Meningitis or encephalitis",
      "Primary seizure disorder (epilepsy)",
      "Drug intoxication or withdrawal (benzodiazepines)"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on alcohol history and missing other causes of seizure such as intracranial pathology, especially given his age and hypertension",
      "prematureClosure": "Risk of stopping evaluation after confirming alcohol withdrawal without assessing severity and DT risk factors that require intensive monitoring",
      "availabilityBias": "May focus on common withdrawal presentations while missing the high-risk features (prior DTs, kindling effect) that predict severe complications"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, let's think about seizures in the context of alcohol use. What are the key historical features that would help you distinguish between different causes of seizures in someone with alcohol use disorder? What timeline factors are particularly important?",
      "phase5": "Now that you've gathered your history and physical exam findings, let's discuss risk stratification. This patient has had withdrawal seizures before and a history of delirium tremens. How does this 'kindling' phenomenon affect your management approach and monitoring plan?",
      "finalDebrief": "This case highlights the importance of recognizing high-risk alcohol withdrawal. The combination of withdrawal seizure, prior DTs, and current CIWA score puts this patient at significant risk for life-threatening complications. How did your differential diagnosis evolve as you gathered more information about his withdrawal history and timeline?"
    }
  }
};
