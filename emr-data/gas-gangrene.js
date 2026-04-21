
window.EMR_DATA = {
  "patient": {
    "name": "Howard Prescott",
    "patientHPI": "This sore on the bottom of my foot has been there for months and it's getting bigger instead of healing - lately there's been more pus coming out of it and it smells funny.",
    "dob": "10/30/1956",
    "age": 69,
    "sex": "Male",
    "mrn": "RDX-2025-41460",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B",
    "pcp": "Dr. Catherine Brennan, MD",
    "pharmacy": "Walgreens \u2014 1620 S Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "9221 Mulberry St, Chicago, IL 60612",
    "phone": "(954) 555-2847",
    "email": "h.prescott56@email.com",
    "emergencyContact": {
      "name": "Linda Prescott (Wife)",
      "phone": "(954) 555-2860"
    }
  },
  "problems": [
    {
      "problem": "Gas gangrene \u2014 clostridial myonecrosis, rapidly progressive",
      "icd": "A48.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Carlos Rivera, 42M \u2014 puncture wound right lower leg 24h ago (nail). Now severe pain out of proportion, wooden-hard skin, crepitus on palpation, bronze/brown skin discoloration, gas in soft tissue on X-ray. Tachycardia 128, BP 96/62."
    },
    {
      "problem": "Gas in soft tissue \u2014 pathognomonic for clostridial infection",
      "icd": "A48.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Gas in soft tissue on X-ray or CT = clostridial infection (Clostridium perfringens produces hydrogen gas from carbohydrate fermentation). Unlike crepitus from simple infection."
    },
    {
      "problem": "Septic shock \u2014 exotoxin-mediated",
      "icd": "A41.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Clostridium perfringens produces alpha toxin (phospholipase C) \u2192 cell membrane destruction \u2192 massive hemolysis + myonecrosis \u2192 septic shock with multiorgan failure."
    }
  ],
  "medications": [
    {
      "name": "Emergent surgical debridement \u2014 to OR NOW",
      "sig": "Gas gangrene is universally fatal without immediate surgical debridement. Delay of even 1-2 hours dramatically increases mortality. Emergency amputation may be required to save life.",
      "prescriber": "Surgery",
      "start": "2024",
      "refills": 0,
      "status": "EMERGENT \u2014 OR NOW"
    },
    {
      "name": "Penicillin G 4 million units IV q4h + clindamycin 900mg IV q8h",
      "sig": "Penicillin G is the drug of choice for Clostridium perfringens. Add clindamycin \u2014 inhibits ribosomal protein synthesis \u2192 reduces toxin production (Eagle effect: penicillin less effective at high bacterial density; clindamycin retains efficacy). Continue post-surgery.",
      "prescriber": "Surgery/Infectious Disease",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE \u2014 pre-op"
    },
    {
      "name": "Hyperbaric oxygen \u2014 adjunct after surgery",
      "sig": "HBO2 at 2-3 atm creates tissue oxygen tension hostile to anaerobes. Reduces demarcation line for amputation. Adjunct only \u2014 never delays surgery. Use after primary debridement.",
      "prescriber": "Surgery/Hyperbaric Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Adjunct \u2014 post-op"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Anaphylaxis as child \u2014 hives, throat swelling, ER visit",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/25/2026",
      "bp": "88/52",
      "hr": 128,
      "rr": 28,
      "temp": "103.8\u00b0F",
      "spo2": "91%",
      "wt": "240 lbs",
      "ht": "5'10\"",
      "bmi": 34.4,
      "setting": "ED"
    },
    {
      "date": "01/14/2026",
      "bp": "148/88",
      "hr": 86,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "242 lbs",
      "ht": "5'10\"",
      "bmi": 34.7,
      "setting": "Wound Clinic"
    },
    {
      "date": "10/22/2025",
      "bp": "152/92",
      "hr": 82,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "244 lbs",
      "ht": "5'10\"",
      "bmi": 35.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/14/2026",
      "type": "Specialist",
      "provider": "Dr. Maria Santos, DPM (Podiatric Wound Care)",
      "cc": "Diabetic foot ulcer \u2014 follow-up, debridement",
      "hpi": "69M with T2DM (A1c 9.8), PAD, neuropathy presents for wound care follow-up. Right plantar ulcer first noted 09/2025, Wagner Grade 2. Has missed last 2 wound clinic appointments. Ulcer has enlarged despite offloading boot (admits not wearing consistently). No fever, but notes increasing drainage \u2014 now malodorous. Wound probes to bone not performed today. Reports no pain in the foot (neuropathy).",
      "exam": "Right foot: 3.2 x 2.8 cm ulcer plantar surface beneath 2nd-3rd metatarsal heads. Fibrinous base with perilesional erythema extending 1.5 cm. Malodorous purulent drainage. No crepitus. Dorsalis pedis pulse barely palpable. Posterior tibial pulse absent. Monofilament testing: absent bilat feet.",
      "assessment": "1. Diabetic foot ulcer \u2014 worsening, now appears infected (Grade 2 \u2192 3)\n2. PAD \u2014 contributing to poor healing\n3. Non-adherence with offloading and wound care visits",
      "plan": "1. Sharp debridement performed in clinic\n2. Wound culture obtained\n3. Started empiric oral antibiotics: clindamycin 300mg TID + ciprofloxacin 500mg BID (penicillin allergy)\n4. X-ray right foot to evaluate for osteomyelitis\n5. Strict non-weight-bearing with total contact cast\n6. Follow-up 1 week \u2014 warned to go to ED if fevers, spreading redness, or worsening"
    },
    {
      "id": "V002",
      "date": "10/22/2025",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "Diabetes follow-up, foot ulcer, medication refills",
      "hpi": "69M with poorly controlled T2DM, PAD, CKD presents for follow-up. A1c 9.8 (up from 8.6). Admits poor dietary adherence and inconsistent insulin use. Reports new ulcer on right foot sole x 3 weeks \u2014 small, painless. Not using offloading device. Podiatry referral placed.",
      "exam": "Obese male. CV: RRR. Lungs: CTAB. Ext: Right plantar ulcer ~1.5 cm, shallow, clean base. DP pulse faint bilat. No erythema or drainage at this time.",
      "assessment": "1. T2DM \u2014 worsening, A1c 9.8\n2. New diabetic foot ulcer \u2014 Wagner Grade 1-2\n3. PAD \u2014 stable, limiting healing\n4. CKD 3b \u2014 stable",
      "plan": "1. Increase insulin glargine from 36 to 40 units\n2. Add mealtime sliding scale lispro\n3. STAT podiatry referral for wound management\n4. Reinforce foot care education\n5. Return 6 weeks"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Gas Gangrene Assessment",
      "results": [
        {
          "test": "WBC",
          "value": "28.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Hemoglobin",
          "value": "7.2",
          "unit": "g/dL",
          "ref": "13.5-17.5 (hemolysis from alpha toxin)",
          "flag": "L"
        },
        {
          "test": "LDH",
          "value": "4800",
          "unit": "U/L",
          "ref": "100-220 (massive hemolysis)",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "6.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "X-ray right leg",
          "value": "Gas in soft tissue tracking along fascial planes \u2014 pathognomonic for clostridial infection",
          "unit": "",
          "ref": "No gas",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "X-Ray and CT Right Lower Extremity",
      "findings": "Extensive gas tracking along deep fascial planes of right lower leg and foot. Soft tissue destruction. No foreign body visualized.",
      "impression": "Gas gangrene (clostridial myonecrosis). Surgical emergency. OR immediately."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8514",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Moderna)",
      "date": "10/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-1422",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap",
      "date": "03/2022",
      "site": "Left deltoid IM",
      "lot": "TD22-180",
      "mfr": "GSK"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "06/2024",
      "site": "Left deltoid IM",
      "lot": "PV20-890",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "08/2024",
      "site": "Right deltoid IM",
      "lot": "SX24-404",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "SX24-562",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: T2DM, bilateral BKA at age 72, deceased at 76 (MI)",
    "Mother: Hypertension, alive at 90",
    "Brother: T2DM, alive at 72",
    "Sister: Healthy, alive at 66"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired electrician; on disability (PAD, neuropathy, unable to stand/walk for prolonged periods)"
    ],
    [
      "Marital",
      "Married 42 years"
    ],
    [
      "Tobacco",
      "Former \u2014 25 pack-years; quit 2010"
    ],
    [
      "Alcohol",
      "2-3 beers daily (wife reports possibly more)"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal \u2014 wheelchair for distances; limited ambulation at home"
    ],
    [
      "Housing",
      "Single-story home with wife; ramp installed at entrance"
    ],
    [
      "Safety",
      "Fall risk; uses walker at home; grab bars in bathroom; no firearms"
    ],
    [
      "Advance Directive",
      "Full code; DPOA designated (wife Linda); discussed but deferred palliative care"
    ]
  ],
  "meta": {
    "caseId": "gas-gangrene",
    "diagnosis": "Gas Gangrene \u2014 Clostridial Myonecrosis",
    "acuity": 1,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Howard Prescott appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did skin / soft tissue emergency start?",
      "Can you describe exactly how it started \u2014 sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history \u2014 any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
      "onset": "'The symptoms started This sore on the bottom of my foot has been there for months and it's getting bi.'",
      "character": "'It's skin / soft tissue emergency \u2014 it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Gas Gangrene.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Insulin Glargine 40 units QHS; Insulin Lispro sliding scale with meals; Losartan 100mg daily; Amlodipine 10mg daily; Atorvastatin 40mg QHS; Gabapentin 600mg TID; Cilostazol 100mg BID.'",
      "allergies": "'My allergies are Penicillin.'",
      "family": "Father: T2DM, bilateral BKA at age 72, deceased at 76 (MI)  Mother: Hypertension, alive at 90  Brother: T2DM, alive at 72",
      "social": "Occupation: Retired electrician; on disability (PAD, neuropathy, unable to stand/walk for prolonged periods)  Marital: Married 42 years  Tobacco: Former \u2014 25 pack-years; quit 2010  Alcohol: 2-3 beers daily (wife reports possibly more)  Drugs: Denies"
    },
    "examManeuvers": [
      "General appearance and toxicity",
      "Vital signs with temperature",
      "Skin for rash, lesions, or signs of infection",
      "Lymph node palpation",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Source-specific examination"
    ],
    "examFindings": {
      "General appearance and toxicity": "Clinical finding consistent with Gas Gangrene. Document specifically what you observe.",
      "Vital signs with temperature": "Clinical finding consistent with Gas Gangrene. Document specifically what you observe.",
      "Skin for rash, lesions, or signs of infection": "Clinical finding consistent with Gas Gangrene. Document specifically what you observe.",
      "Lymph node palpation": "Clinical finding consistent with Gas Gangrene. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Gas Gangrene. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Gas Gangrene. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Gas Gangrene. Document specifically what you observe.",
      "Source-specific examination": "Clinical finding consistent with Gas Gangrene. Document specifically what you observe."
    },
    "ddxTargets": [
      "Gas gangrene \u2014 clostridial myonecrosis (correct)",
      "Necrotizing fasciitis (non-clostridial) \u2014 gas less prominent; polymicrobial; LRINEC score; similar urgency",
      "Simple cellulitis \u2014 no gas; less toxicity; no crepitus; responds to antibiotics alone",
      "Compartment syndrome \u2014 tense compartment; gas absent; fasciotomy (not amputation)",
      "Gas-forming E. coli infection \u2014 gram-negative; less rapidly progressive; different bacteria"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Gas Gangrene, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Gas Gangrene, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Gas Gangrene based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Howard Prescott's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Gas Gangrene (Clostridial Myonecrosis \u2014 Right Lower Extremity, Originating from Diabetic Foot Ulcer in Setting of PAD and Poorly Controlled Diabetes). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: gas gangrene (clostridial myonecrosis). Key learning: (1) Gas gangrene vs necrotizing fasciitis: both are surgical emergencies. Gas gangrene = Clostridium perfringens, gas prominent on X-ray/CT, extremely rapid (hours to death), hemolysis from alpha toxin. Necrotizing fasciitis = polymicrobial (Group A strep, mixed), gas less prominent, also rapidly progressive. Both require immediate debridement. (2) Eagle effect: at high bacterial densities, penicillin is paradoxically less effective (bacteria not actively dividing \u2192 less beta-lactam killing). Clindamycin, by inhibiting ribosomal protein synthesis (and thus toxin production), retains efficacy at all densities. Combination penicillin + clindamycin is superior. (3) Pain out of proportion to appearance: like compartment syndrome and necrotizing fasciitis, gas gangrene causes severe pain early when the skin may look relatively normal. The pain is from tissue ischemia/necrosis beneath. Do not dismiss it. (4) Hyperbaric oxygen: adjunct after surgery. 2-3 atm oxygen creates tissue PO2 >250 mmHg \u2014 lethal to obligate anaerobes. Reduces demarcation line for amputation, may save additional tissue. NEVER delays emergency debridement. (5) Mortality: gas gangrene mortality 25-50% even with treatment. Extremity involvement = better than trunk. Time to surgery is the primary prognostic factor."
    }
  }
};
