// Virtual EMR Case: Cerebral Salt Wasting
// Variant: cerebral-salt-wasting | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Victor Ramírez",
    "patientHPI": "I was working out at the gym when suddenly I got hit with a severe headache — it came on in seconds. I threw up right there and my wife said I passed out for a few seconds. The light hurts my eyes and my neck feels really stiff.",
    "dob": "09/15/1972",
    "age": 52,
    "sex": "Male",
    "mrn": "RDX-2025-85714",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL — PPO",
    "pcp": "Dr. Michael Torres, MD",
    "pharmacy": "Publix Pharmacy — 3200 Broward Blvd, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino (Dominican)",
    "address": "7203 N Kedzie Blvd, Milwaukee, WI 53208",
    "phone": "(954) 555-7291",
    "email": "v.ramirez72@email.com",
    "emergencyContact": {
      "name": "Elena Ramírez (Wife)",
      "phone": "(954) 555-7294"
    }
  },
  "problems": [
    {
      "problem": "Subarachnoid Hemorrhage — Post-Clipping (10 days ago)",
      "icd": "I60.9",
      "onset": "2025",
      "status": "Active",
      "notes": "Grade III SAH from ruptured anterior communicating artery aneurysm; clipped on day 1; uncomplicated post-op course; transferred to rehab 5 days ago; now re-presenting with confusion and lethargy"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2015",
      "status": "Active",
      "notes": "On amlodipine; currently being held during vasospasm window"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2018",
      "status": "Active",
      "notes": "On atorvastatin"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2020",
      "status": "Active",
      "notes": "On metformin; A1c 7.2%"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily (CURRENTLY HELD — vasospasm window post-SAH)",
      "prescriber": "Dr. Torres",
      "start": "01/2016",
      "refills": 4,
      "status": "Active — HELD"
    },
    {
      "name": "Nimodipine 60mg Q4h",
      "sig": "Take 60 mg by mouth every 4 hours for 21 days (vasospasm prophylaxis post-SAH)",
      "prescriber": "Neurosurgery",
      "start": "02/14/2025",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Levetiracetam 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily (seizure prophylaxis post-SAH)",
      "prescriber": "Neurosurgery",
      "start": "02/14/2025",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Torres",
      "start": "06/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Torres",
      "start": "01/2021",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Phenytoin",
      "type": "Drug",
      "reaction": "Severe rash (possible drug hypersensitivity)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2025",
      "bp": "98/62",
      "hr": 104,
      "rr": 18,
      "temp": "98.8°F",
      "spo2": "97%",
      "wt": "172 lbs",
      "ht": "5'8\"",
      "bmi": 26.1,
      "setting": "ED"
    },
    {
      "date": "02/19/2025",
      "bp": "128/78",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "178 lbs",
      "ht": "5'8\"",
      "bmi": 27.1,
      "setting": "Rehab Facility"
    },
    {
      "date": "02/14/2025",
      "bp": "192/108",
      "hr": 88,
      "rr": 20,
      "temp": "99.0°F",
      "spo2": "98%",
      "wt": "182 lbs",
      "ht": "5'8\"",
      "bmi": 27.7,
      "setting": "ED (initial SAH presentation)"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/14/2025",
      "type": "ED",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Worst headache of my life — sudden onset, thunderclap",
      "hpi": "52-year-old male with HTN presenting with sudden-onset severe headache (10/10) that began during exercise. Associated nausea, vomiting, brief LOC witnessed by wife. Photophobia. Neck stiffness. No focal neurological deficits on arrival. GCS 14 (E3V5M6).",
      "exam": "General: Distressed, photophobic. Neuro: GCS 14, pupils equal and reactive, no focal motor/sensory deficit, nuchal rigidity, positive Kernig sign. CV: HTN 192/108, RRR. Lungs: CTA.",
      "assessment": "1. Subarachnoid hemorrhage — Hunt & Hess Grade III, Fisher Grade 3\n2. Ruptured anterior communicating artery aneurysm on CTA",
      "plan": "1. Neurosurgery emergent consult → clipping performed day 1\n2. Nimodipine for vasospasm prophylaxis\n3. Levetiracetam for seizure prophylaxis\n4. ICU admission, EVD placed for hydrocephalus\n5. Strict BP management"
    },
    {
      "id": "V002",
      "date": "01/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Michael Torres, MD",
      "cc": "Follow-up: HTN, DM, lipids",
      "hpi": "52-year-old male for routine chronic disease management. BP running 140s-150s on amlodipine 10mg — discussed adding second agent. A1c 7.2% — improved from 7.8%. Compliant with medications. No headaches, vision changes, or new symptoms.",
      "exam": "General: Well-appearing. CV: RRR, no murmur. BP 148/88. Lungs: CTA. Neuro: A&O x3, no focal deficits. Fundoscopic: No papilledema, mild arteriolar narrowing.",
      "assessment": "1. Hypertension — suboptimal control, BP 148/88\n2. Type 2 DM — improving, A1c 7.2%\n3. Hyperlipidemia — on statin",
      "plan": "1. Add lisinopril 10mg daily for BP\n2. Continue metformin, atorvastatin, amlodipine\n3. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "02/24/2025",
      "time": "14:18",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "collected": "02/24/2025 14:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-103914",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "128",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "28",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "118",
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
              "value": "86",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "L"
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "22",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": "L"
            },
            {
              "test": "Uric Acid",
              "value": "2.1",
              "unit": "mg/dL",
              "range": "3.5-7.2",
              "flag": "L"
            }
          ]
        },
        {
          "name": "SERUM OSMOLALITY",
          "results": [
            {
              "test": "Serum Osmolality",
              "value": "248",
              "unit": "mOsm/kg",
              "range": "275-295",
              "flag": "L"
            }
          ]
        },
        {
          "name": "URINE STUDIES",
          "results": [
            {
              "test": "Urine Sodium",
              "value": "148",
              "unit": "mEq/L",
              "range": "<20 (hypovolemic)",
              "flag": "H"
            },
            {
              "test": "Urine Osmolality",
              "value": "420",
              "unit": "mOsm/kg",
              "range": "300-900",
              "flag": ""
            },
            {
              "test": "Urine Output (24h estimate)",
              "value": "4.2",
              "unit": "L/day",
              "range": "0.8-2.0",
              "flag": "H"
            },
            {
              "test": "Urine Specific Gravity",
              "value": "1.018",
              "unit": "",
              "range": "1.005-1.030",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "9.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "14.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "46.2",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "212",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
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
      "accession": "IMG-2025-10312",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "readBy": "Dr. Robert Nash, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "52-year-old 10 days post-SAH clipping, now with confusion and lethargy — r/o rebleed, vasospasm, hydrocephalus",
      "technique": "Non-contrast axial CT images of the head.",
      "findings": "POST-SURGICAL: Status post craniotomy with aneurysm clip artifact in the region of the anterior communicating artery. Expected post-operative changes.\n\nHEMORRHAGE: No new acute hemorrhage. Residual blood products in the basal cisterns and Sylvian fissures — decreased compared to prior.\n\nVENTRICLES: Mild ventriculomegaly — similar to prior discharge CT. No acute hydrocephalus.\n\nINFARCTION: No new territorial infarction to suggest vasospasm.\n\nOTHER: No new mass effect or midline shift.",
      "impression": "1. No new hemorrhage, hydrocephalus, or infarction\n2. Resolving SAH — improved from prior\n3. Clinical deterioration likely metabolic — correlate with serum sodium and volume status",
      "dictated": "02/24/2025 14:40",
      "verified": "02/24/2025 14:48"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL862T",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Moderna, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV891K",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "TA194R",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "Shingrix (1st dose)",
      "date": "11/2023",
      "site": "Left deltoid IM",
      "lot": "SH198P",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother (age 78): Hypertension, stroke at age 72 (recovered)",
    "Father: Deceased at 65 — ruptured cerebral aneurysm",
    "Brother (age 49): Hypertension, pre-diabetes",
    "Family history SIGNIFICANT for cerebral aneurysms (father died of rupture)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Electrician — union member; currently on medical leave"
    ],
    [
      "Marital",
      "Married x 25 years; wife Elena is primary support"
    ],
    [
      "Tobacco",
      "Former — quit 5 years ago; previously 1 PPD x 20 years"
    ],
    [
      "Alcohol",
      "Social — 3-4 beers/week; abstaining since hospitalization"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Previously active — gym 3x/week; currently in rehab"
    ],
    [
      "Housing",
      "Single-family home with wife and teenage daughter"
    ],
    [
      "Safety",
      "No firearms"
    ],
    [
      "Advance Directive",
      "Healthcare proxy: Elena Ramírez (wife)"
    ]
  ],
  "meta": {
    "caseId": "cerebral-salt-wasting",
    "diagnosis": "Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia (118 mEq/L) with Volume Depletion and Excessive Renal Sodium Loss",
    "acuity": 2,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Victor Ramírez is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did renal / electrolyte emergency start?",
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
      "default": "He pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "About ten days ago I had a sudden severe headache at the gym — I was admitted and they found bleeding. Now I'm back in the hospital because I've been getting weaker and more confused.",
      "character": "'It's renal / electrolyte emergency — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Amlodipine 10mg daily; Nimodipine 60mg Q4h; Levetiracetam 500mg BID; Atorvastatin 40mg QHS; Metformin 1000mg BID.'",
      "allergies": "'My allergies are Phenytoin.'",
      "family": "Mother (age 78): Hypertension, stroke at age 72 (recovered)  Father: Deceased at 65 — ruptured cerebral aneurysm  Brother (age 49): Hypertension, pre-diabetes",
      "social": "Occupation: Electrician — union member; currently on medical leave  Marital: Married x 25 years; wife Elena is primary support  Tobacco: Former — quit 5 years ago; previously 1 PPD x 20 years  Alcohol: Social — 3-4 beers/week; abstaining since hospitalization  Drugs: Denies"
    },
    "examManeuvers": [
      "Level of consciousness and GCS",
      "Cranial nerve examination",
      "Motor strength testing",
      "Sensory testing",
      "Coordination and cerebellar testing",
      "Gait assessment if applicable",
      "Meningeal signs",
      "Vital signs"
    ],
    "examFindings": {
      "Level of consciousness and GCS": "Clinical finding consistent with Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia. Document specifically what you observe.",
      "Cranial nerve examination": "Clinical finding consistent with Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia. Document specifically what you observe.",
      "Motor strength testing": "Clinical finding consistent with Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia. Document specifically what you observe.",
      "Sensory testing": "Clinical finding consistent with Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia. Document specifically what you observe.",
      "Coordination and cerebellar testing": "Clinical finding consistent with Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia. Document specifically what you observe.",
      "Gait assessment if applicable": "Clinical finding consistent with Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia. Document specifically what you observe.",
      "Meningeal signs": "Clinical finding consistent with Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia. Document specifically what you observe.",
      "Vital signs": "Clinical finding consistent with Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia. Document specifically what you observe."
    },
    "ddxTargets": [
      "Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Victor Ramírez's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Cerebral Salt Wasting Syndrome — Post-SAH Day 10, Severe Hyponatremia (118 mEq/L) with Volume Depletion and Excessive Renal Sodium Loss. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
