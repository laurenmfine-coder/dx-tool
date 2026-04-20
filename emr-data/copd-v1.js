
window.EMR_DATA = {
  "patient": {
    "name": "Bernard Collins",
    "patientHPI": "My breathing has been getting worse over the past three days, and my cough is bringing up more junk than usual. I know I have lung problems from smoking, but this feels different - I'm more short of breath than normal even when I'm just sitting around the house.",
    "dob": "02/26/1955",
    "age": "71",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-121842",
    "language": "English",
    "race": "White",
    "phone": "(513) 555-3230",
    "email": "bernard.collins@email.com",
    "address": "3390 Hickory Rd, Cleveland, OH 44107",
    "insurance": "Cigna PPO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
    "emergencyContact": {
      "name": "Christina Collins",
      "phone": "(502) 555-6253",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Worsening cough and dyspnea for 3 days",
    "diagnosis": "COPD Exacerbation"
  },
  "problems": [
    {
      "problem": "COPD exacerbation \u2014 moderate-severe, hospitalization required",
      "icd": "J44.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Frank Devereux, 68M \u2014 worsening dyspnea, increased sputum production, new hypercapnia. PaCO2 58."
    },
    {
      "problem": "Hypercapnic respiratory failure \u2014 CO2 retention",
      "icd": "J96.01",
      "onset": "2024",
      "status": "Active",
      "notes": "pH 7.32, PaCO2 58 \u2014 type 2 respiratory failure. BiPAP reduces intubation risk significantly."
    },
    {
      "problem": "COPD \u2014 GOLD stage 3 (severe), FEV1 38% predicted",
      "icd": "J44.1",
      "onset": "2014",
      "status": "Active",
      "notes": "10 pack-year history. On LABA/LAMA + ICS. 2 exacerbations last year \u2014 high-risk phenotype."
    }
  ],
  "medications": [
    {
      "name": "BiPAP \u2014 IPAP 14 / EPAP 6, titrate to comfort and CO2",
      "sig": "Non-invasive ventilation \u2014 reduces intubation rate 65% in hypercapnic COPD exacerbation. Use for pH <7.35 + PaCO2 >45.",
      "prescriber": "Pulmonology/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Methylprednisolone 125mg IV q8h x3 days, then prednisone 40mg PO x5 days",
      "sig": "Systemic steroid \u2014 reduces treatment failure and length of stay. 5-day course as effective as 14 days.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Azithromycin 500mg PO daily x5 days \u2014 antibiotic",
      "sig": "Antibiotic for COPD exacerbation \u2014 Streptococcus, H. influenzae, Moraxella. Reduces exacerbation duration.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ipratropium/albuterol (DuoNeb) nebulizer q4h",
      "sig": "Short-acting bronchodilator \u2014 maximize airway opening. Nebulizer preferred over MDI in acute exacerbation.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Tiotropium (Spiriva) 18mcg inhaled daily \u2014 continue LAMA",
      "sig": "Continue long-acting bronchodilator throughout admission \u2014 do not hold.",
      "prescriber": "Pulmonology",
      "start": "2018",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "reaction": "Nausea/vomiting",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "142/86",
      "hr": "102",
      "rr": "28",
      "temp": "38.0\u00b0C",
      "spo2": "86%",
      "pain": "4/10",
      "bmi": "29",
      "weight": "80 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worsening cough and dyspnea for 3 days",
      "hpi": "Bernard Collins is a 71-year-old male presenting with worsening cough and dyspnea for 3 days. Past medical history includes COPD (GOLD Stage 3), Current smoker, Hypertension, Osteoporosis. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "COPD Exacerbation \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "COPD Exacerbation Panel",
      "results": [
        {
          "test": "ABG \u2014 pH",
          "value": "7.32",
          "unit": "",
          "ref": "7.35-7.45",
          "flag": "L"
        },
        {
          "test": "ABG \u2014 PaCO2",
          "value": "58",
          "unit": "mmHg",
          "ref": "35-45",
          "flag": "H"
        },
        {
          "test": "ABG \u2014 PaO2",
          "value": "56",
          "unit": "mmHg",
          "ref": "80-100",
          "flag": "L"
        },
        {
          "test": "ABG \u2014 HCO3",
          "value": "28",
          "unit": "mEq/L",
          "ref": "22-26",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "13.8",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Procalcitonin",
          "value": "0.18",
          "unit": "ng/mL",
          "ref": "<0.25",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CXR PA",
      "indication": "COPD exacerbation \u2014 exclude pneumonia or pneumothorax",
      "findings": "Hyperinflation. Flattened diaphragms. No infiltrate. No pneumothorax.",
      "impression": "Consistent with COPD exacerbation without pneumonia. No pneumothorax."
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 45 pack-years"
    ],
    [
      "Oxygen",
      "Home O2 2L NC at night"
    ],
    [
      "Occupation",
      "Retired mechanic"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Mr. Collins appears anxious and mildly distressed, sitting forward slightly to ease his breathing. He is cooperative and forthcoming about his symptoms but occasionally pauses mid-sentence to catch his breath. He acknowledges his long smoking history with some defensiveness but expresses genuine concern that this episode feels different from his usual COPD flares.",
    "interviewQuestions": [
      "Can you describe when these symptoms started and how they've progressed?",
      "What does your cough sound like and what are you bringing up?",
      "How does this compare to your usual COPD symptoms?",
      "Have you had any fever, chills, or night sweats?",
      "Are you having any chest pain or chest tightness?",
      "How much can you walk before getting short of breath now compared to usual?",
      "Have you been using your rescue inhaler more than normal?",
      "Any recent changes in your medications or missed doses?",
      "Have you been around anyone who's been sick recently?",
      "Any leg swelling, weight gain, or changes in appetite?",
      "How has your sleep been affected?",
      "Any nausea, vomiting, or changes in bowel movements?",
      "Have you traveled anywhere recently or been exposed to unusual dust or fumes?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - could you explain that differently?",
      "onset": "It started about three days ago and has been getting progressively worse each day. At first I thought it was just my usual lung problems acting up, but it's definitely gotten worse than my normal bad days.",
      "character": "The cough is deeper and more frequent than usual, and I'm bringing up thick yellow-green mucus that's definitely more than normal. My breathing feels tight and labored even when I'm sitting still.",
      "location": "The breathing difficulty is all through my chest, and I have this tight feeling across my whole chest area. No specific pain shooting anywhere else.",
      "severity": "I'd say the breathing is about a 7 out of 10 - it's definitely worse than my usual 4 or 5. I can barely walk to the bathroom without getting winded, and normally I can at least get around the house okay.",
      "aggravating": "Any movement makes it worse, even just getting up from a chair. Lying flat is really hard - I've been sleeping in my recliner for two nights now.",
      "relieving": "My albuterol inhaler helps a little bit but not nearly as much as it usually does. The oxygen at night helps some, but I've been needing it during the day too.",
      "associated": "I've had some low-grade fever and chills, feel more tired than usual, and my appetite has been poor. I've also noticed my heart seems to be beating faster.",
      "denies": "No chest pain like a heart attack, no leg swelling, no blood in what I'm coughing up, and no sudden onset - it's been gradual over three days.",
      "history": "I have flare-ups of my COPD maybe 2-3 times a year, but this feels worse and different. Usually my inhaler works better and I don't get the fever and colored sputum like this.",
      "medications": "Tiotropium; Fluticasone/Salmeterol; Albuterol; Amlodipine; Prednisone",
      "allergies": "Codeine",
      "family": "Nothing really runs in my family that would relate to this - my parents both lived to their 80s without major lung problems.",
      "social": "I'm a retired mechanic, been smoking about a pack and a half daily for over 30 years. I know I should quit but it's hard. I use oxygen at home at night, 2 liters through a nasal cannula. No recent travel or unusual exposures."
    },
    "examManeuvers": [
      "General appearance and respiratory distress assessment",
      "Pulmonary auscultation",
      "Percussion of chest",
      "Assessment of accessory muscle use",
      "Cardiac auscultation",
      "Lower extremity edema assessment",
      "Jugular venous pressure assessment",
      "Lymph node examination",
      "Abdominal examination",
      "Neurologic assessment including mental status"
    ],
    "examFindings": {
      "General appearance and respiratory distress assessment": "Appears mildly distressed, sitting upright, using pursed-lip breathing, speaking in short phrases due to dyspnea",
      "Pulmonary auscultation": "Decreased breath sounds bilaterally with expiratory wheeze and scattered rhonchi throughout, particularly in bilateral lower lobes",
      "Percussion of chest": "Hyperresonant to percussion consistent with underlying emphysema, no dullness to suggest consolidation",
      "Assessment of accessory muscle use": "Mild use of accessory muscles of respiration, intercostal retractions present",
      "Cardiac auscultation": "Tachycardic regular rhythm, no murmurs, rubs, or gallops appreciated",
      "Lower extremity edema assessment": "No peripheral edema, pulses intact bilaterally",
      "Jugular venous pressure assessment": "JVP not elevated, no signs of right heart failure",
      "Lymph node examination": "No cervical, supraclavicular, or axillary lymphadenopathy",
      "Abdominal examination": "Soft, non-tender, no organomegaly or masses",
      "Neurologic assessment including mental status": "Alert and oriented, no focal neurologic deficits, appropriate affect"
    },
    "ddxTargets": [
      "COPD exacerbation \u2014 hypercapnic respiratory failure, NIV indicated (correct)",
      "Pneumonia with COPD overlay \u2014 procalcitonin low, no infiltrate on CXR",
      "Pneumothorax \u2014 excluded on CXR",
      "Pulmonary embolism \u2014 pleuritic pain absent, different ABG pattern",
      "Acute asthma \u2014 prior diagnosis of COPD, age, smoking history",
      "Heart failure with COPD overlap \u2014 CXR no edema, BNP normal"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known COPD diagnosis and missing bacterial superinfection or other serious causes of acute decompensation in this high-risk patient",
      "prematureClosure": "May stop at 'COPD flare' without considering infectious etiology given fever, purulent sputum, and poor response to usual bronchodilator therapy",
      "availabilityBias": "Recent experience with simple COPD exacerbations may lead to under-recognition of the infectious component requiring antibiotic therapy"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given that this is a 71-year-old with severe COPD presenting with acute worsening, what key historical features would help you distinguish between a simple exacerbation versus one requiring additional intervention? What red flags might suggest a more serious process?",
      "phase5": "Nice work gathering the history and exam. You found fever, purulent sputum production, and poor response to his usual bronchodilator. How does this clinical picture help refine your differential diagnosis? What does the combination of his underlying COPD with these acute infectious signs suggest for management?",
      "finalDebrief": "This case illustrates a classic COPD exacerbation with bacterial superinfection. The key distinguishing features from a simple exacerbation were the fever, change in sputum character to purulent, and inadequate response to bronchodilators. This combination in a severe COPD patient indicates need for both bronchodilator optimization and antibiotic therapy. How might you approach antibiotic selection and what other supportive measures would you consider?",
      "final": "Diagnosis: COPD exacerbation with hypercapnic respiratory failure. Key learning: (1) NIV (BiPAP) indications in COPD: pH <7.35 + PaCO2 >45 + respiratory distress. Reduces need for intubation by ~65%, reduces mortality, reduces ICU length of stay. Contraindications: obtunded, unable to protect airway, vomiting, hemodynamic instability, excessive secretions. (2) Steroid dosing in COPD exacerbation: 40mg prednisone x5 days is as effective as 14 days (REDUCE trial) \u2014 use the short course. Reduces hyperglycemia and steroid complications. IV methylprednisolone for unable-to-take-PO or severe exacerbation. (3) Antibiotic indications in COPD exacerbation: purulent sputum + increased dyspnea + increased sputum volume (Anthonisen criteria) \u2014 give antibiotics. Single criterion or non-purulent sputum \u2014 antibiotics may not help but low harm. Procalcitonin-guided therapy reduces antibiotic use without worse outcomes. (4) Oxygen titration in COPD: target SpO2 88-92%, NOT 100%. Hypoxic respiratory drive is a real (if sometimes overstated) phenomenon in chronic CO2 retainers \u2014 excessive O2 worsens hypercapnia via Haldane effect and V/Q changes. (5) Discharge planning: ensure inhaler technique reviewed, smoking cessation offered, pulmonary rehab referral, LAMA + LABA \u00b1 ICS therapy optimized."
    }
  },
  "meta": {
    "diagnosis": "COPD Exacerbation \u2014 Moderate-Severe, Antibiotics and Steroids, NIV Candidate Assessment",
    "caseId": "copd-v1"
  }
};
