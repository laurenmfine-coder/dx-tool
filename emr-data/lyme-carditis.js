// Virtual EMR Case: Lyme Carditis
// Variant: lyme-carditis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Connor Walsh",
    "dob": "04/08/1997",
    "age": 28,
    "sex": "Male",
    "mrn": "RDX-2025-62917",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Anthony Reyes, MD",
    "pharmacy": "Walgreens — 4850 S Pine Island Rd, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "3580 SW 62nd Ave, Riverside, FL 33100",
    "phone": "(954) 555-7428",
    "email": "c.walsh97@email.com",
    "emergencyContact": {
      "name": "Brendan Walsh (Father)",
      "phone": "(954) 555-7442"
    }
  },
  "problems": [
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2010",
      "status": "Active",
      "notes": "Managed with OTC antihistamines"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily PRN",
      "sig": "Take 1 tablet by mouth daily as needed for allergy symptoms",
      "prescriber": "Dr. Reyes",
      "start": "03/2020",
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
      "date": "02/22/2026",
      "bp": "108/64",
      "hr": 42,
      "rr": 16,
      "temp": "100.4°F",
      "spo2": "98%",
      "wt": "180 lbs",
      "ht": "6'0\"",
      "bmi": 24.4,
      "setting": "ED"
    },
    {
      "date": "02/15/2026",
      "bp": "112/68",
      "hr": 52,
      "rr": 14,
      "temp": "99.8°F",
      "spo2": "99%",
      "wt": "180 lbs",
      "ht": "6'0\"",
      "bmi": 24.4,
      "setting": "Urgent Care"
    },
    {
      "date": "08/20/2025",
      "bp": "118/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "178 lbs",
      "ht": "6'0\"",
      "bmi": 24.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/15/2026",
      "type": "Urgent Care",
      "provider": "Dr. Kevin Wright, MD (Urgent Care)",
      "cc": "Fatigue, lightheadedness, rash x 1 week",
      "hpi": "28-year-old previously healthy male presenting with 1 week of progressive fatigue, lightheadedness, and a large expanding rash on his right thigh. Reports returning 3 weeks ago from a 2-week hiking trip in Connecticut (Appalachian Trail section). Noticed a 'bug bite' on right posterior thigh approximately 10 days ago that has expanded to a large ring-shaped lesion ~12 cm. Also reports myalgias, headache, and low-grade fevers (99-100°F). Lightheadedness worse with exertion — nearly passed out climbing stairs yesterday. No chest pain. No dyspnea at rest. No joint swelling. No facial palsy. No history of cardiac disease.",
      "exam": "General: Athletic male, appears fatigued. Skin: 12 cm annular erythematous lesion right posterior thigh with central clearing — classic erythema migrans. No secondary lesions. CV: Bradycardia at 52 bpm, regular, no murmurs. Lungs: CTAB. Neuro: CN II-XII intact, no facial asymmetry, no meningismus. MSK: No joint effusions.",
      "assessment": "1. Erythema migrans — clinical Lyme disease; recent tick exposure in endemic area\n2. Symptomatic bradycardia — concerning for Lyme carditis\n3. Constitutional symptoms — myalgias, fever, headache",
      "plan": "1. ECG — sinus bradycardia at 52 bpm, PR interval 280 ms (first-degree AV block)\n2. Start doxycycline 100mg BID x 21 days\n3. Labs: CBC, CMP, Lyme serologies (ELISA + Western blot)\n4. Referred to ED for further cardiac evaluation given symptomatic bradycardia\n5. Avoid strenuous activity"
    },
    {
      "id": "V002",
      "date": "08/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Anthony Reyes, MD",
      "cc": "Annual wellness visit",
      "hpi": "28-year-old healthy male for annual exam. No complaints. Active lifestyle — runs 5x/week (training for marathon), rock climbing weekends. No medications other than seasonal allergy PRN cetirizine. Resting HR 62 bpm — athletic bradycardia. No history of syncope or palpitations.",
      "exam": "General: NAD, athletic build. CV: RRR at 62, no murmurs. Lungs: CTAB. All systems WNL.",
      "assessment": "1. Annual wellness — healthy young male\n2. Allergic rhinitis — controlled",
      "plan": "1. Continue PRN cetirizine\n2. Screenings up to date\n3. RTC annually or PRN"
    }
  ],
  "labs": [
    {
      "date": "02/22/2026",
      "time": "21:15",
      "orderedBy": "Dr. James Park, MD (ED)",
      "collected": "02/22/2026 20:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-022252",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "9.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.6", "unit": "%", "range": "38.0-50.0", "flag": "" },
            { "test": "Platelet Count", "value": "224", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "INFLAMMATORY MARKERS",
          "results": [
            { "test": "ESR", "value": "42", "unit": "mm/hr", "range": "0-22", "flag": "H" },
            { "test": "CRP", "value": "3.8", "unit": "mg/dL", "range": "<0.5", "flag": "H" }
          ]
        },
        {
          "name": "CARDIAC MARKERS",
          "results": [
            { "test": "Troponin I (hs)", "value": "0.06", "unit": "ng/mL", "range": "<0.04", "flag": "H" },
            { "test": "BNP", "value": "142", "unit": "pg/mL", "range": "<100", "flag": "H" }
          ]
        },
        {
          "name": "LYME SEROLOGIES",
          "results": [
            { "test": "Lyme ELISA (IgM/IgG)", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Lyme Western Blot IgM", "value": "Positive (3/3 bands: 23, 39, 41 kDa)", "unit": "", "range": "Positive ≥2/3 bands", "flag": "H" },
            { "test": "Lyme Western Blot IgG", "value": "Negative (1/10 bands)", "unit": "", "range": "Positive ≥5/10 bands", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/22/2026",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2026-02225",
      "status": "FINAL",
      "orderedBy": "Dr. James Park, MD (ED)",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "28M with Lyme disease, symptomatic bradycardia. Evaluate heart size.",
      "technique": "PA and lateral views, upright.",
      "findings": "Heart: Normal size. No pericardial effusion.\\n\\nLungs: Clear bilaterally. No consolidation, effusion, or pneumothorax.\\n\\nMediastinum: Normal.\\n\\nBones: No acute findings.",
      "impression": "1. Normal chest radiograph.\\n2. No cardiomegaly or pulmonary edema.",
      "dictated": "02/22/2026 21:40",
      "verified": "02/22/2026 22:15"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/10/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-320",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/30/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-784",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2021",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) (3/3)",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Father: HTN, alive at 58",
    "Mother: Healthy, alive at 56",
    "Brother: Healthy, alive at 25",
    "No family history of cardiac disease, sudden death, or arrhythmia"
  ],
  "socialHistory": [
    ["Occupation", "Software developer; remote work"],
    ["Marital", "Single; lives with roommate"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 3-4 drinks/week"],
    ["Drugs", "Occasional marijuana; denies others"],
    ["Exercise", "Avid runner — 40 miles/week (marathon training); rock climbing weekends; frequent hiking in Northeast"],
    ["Housing", "Apartment with roommate"],
    ["Safety", "Denies IPV; wears helmet climbing; does not use DEET routinely when hiking"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "lyme-carditis",
    "diagnosis": "Lyme Carditis with High-Grade AV Block",
    "acuity": 2,
    "presentation": "Cardiac Emergency",
    "category": "infectious"
  }
};
