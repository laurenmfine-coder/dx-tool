
window.EMR_DATA = {
  "patient": {
    "name": "Walter Higgins",
    "patientHPI": "I've been managing my breathing problems and other health issues pretty well lately. I can still get short of breath when I climb stairs, but that's been normal for me. My blood sugar seems stable, and I haven't had any chest pain or heart racing.",
    "dob": "11/03/1950",
    "age": 74,
    "sex": "Male",
    "mrn": "RDX-2025-19837",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B with AARP Supplemental",
    "pcp": "Dr. Elena Vasquez, MD",
    "pharmacy": "Publix Pharmacy \u2014 1500 N University Dr, Coral Springs, FL",
    "language": "English",
    "race": "White",
    "address": "502 Peachtree Rd, Pittsburgh, PA 15202",
    "phone": "(954) 555-3271",
    "email": "w.higgins50@email.com",
    "emergencyContact": {
      "name": "Diane Higgins (Wife)",
      "phone": "(954) 555-3290"
    },
    "chiefComplaint": "Fever and cough for 3 days"
  },
  "problems": [
    {
      "problem": "CAP with sepsis \u2014 severe, PORT class IV",
      "icd": "J18.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Robert Williams, 68M \u2014 3 days fever, productive cough, dyspnea. HR 118, BP 96/62, RR 28, T 39.4, SpO2 88% on room air. Sepsis criteria met: suspected infection + \u22652 SIRS criteria + organ dysfunction."
    },
    {
      "problem": "Sepsis \u2014 hemodynamic compromise",
      "icd": "A41.3",
      "onset": "2024",
      "status": "Active",
      "notes": "MAP <65 mmHg despite initial 500mL NS. Lactate 3.8 mmol/L. Meets sepsis-3 criteria. ICU-level care required."
    },
    {
      "problem": "Hypoxemic respiratory failure \u2014 HFNC or intubation threshold",
      "icd": "J96.01",
      "onset": "2024",
      "status": "Active",
      "notes": "SpO2 88% on 15L NRB. Consider high-flow nasal cannula (HFNC) as bridge. Intubation if no improvement or deterioration."
    }
  ],
  "medications": [
    {
      "name": "Ceftriaxone 1g IV q24h + azithromycin 500mg IV q24h",
      "sig": "IDSA CAP guidelines: beta-lactam (ceftriaxone) + macrolide (azithromycin) for hospitalized CAP. Covers typical (S. pneumoniae) and atypical organisms (Legionella, Mycoplasma). Levofloxacin 750mg daily is monotherapy alternative.",
      "prescriber": "Pulmonology/Infectious Disease",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 IV"
    },
    {
      "name": "IV fluid resuscitation \u2014 30mL/kg crystalloid initial bolus",
      "sig": "Surviving Sepsis Campaign: 30mL/kg (total 2.1L for 70kg patient) within first 3 hours. Reassess volume status after bolus \u2014 avoid excess fluid causing pulmonary edema in bilateral CAP.",
      "prescriber": "Medicine/Critical Care",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 2L given"
    },
    {
      "name": "Norepinephrine \u2014 if MAP <65 after 2L fluid",
      "sig": "First-line vasopressor for septic shock (Surviving Sepsis Campaign). Target MAP \u226565 mmHg.",
      "prescriber": "Medicine/Critical Care",
      "start": "2024",
      "refills": 0,
      "status": "Initiating \u2014 MAP 62 post-fluids"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
      "type": "Drug",
      "reaction": "Rash \u2014 maculopapular, diffuse",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/15/2024",
      "bp": "128/74",
      "hr": 68,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "94%",
      "wt": "178 lbs",
      "ht": "5'11\"",
      "bmi": 24.8,
      "setting": "PCP Office"
    },
    {
      "date": "05/08/2024",
      "bp": "132/78",
      "hr": 70,
      "rr": 16,
      "temp": "98.6\u00b0F",
      "spo2": "93%",
      "wt": "180 lbs",
      "ht": "5'11\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Elena Vasquez, MD",
      "cc": "Follow-up: COPD, DM2, CKD, post-CABG",
      "hpi": "74-year-old male with COPD GOLD II, post-CABG, DM2, CKD 3a for follow-up. COPD stable \u2014 using inhalers as directed. No exacerbations since hospitalization 2023. A1c 7.2% \u2014 stable. Kidney function stable. Quit smoking 2015. Reports mild dyspnea on exertion with stair climbing. No chest pain, palpitations, or edema.",
      "exam": "General: Thin, NAD. Lungs: Diminished breath sounds bilateral bases, mild expiratory wheezing. CV: RRR, median sternotomy scar well-healed. Abdomen: Soft, NT. Extremities: No edema.",
      "assessment": "1. COPD \u2014 stable on current regimen\n2. CAD post-CABG \u2014 stable\n3. T2DM \u2014 at goal\n4. CKD 3a \u2014 stable\n5. HTN \u2014 controlled",
      "plan": "1. Continue all medications\n2. Pulmonary rehab \u2014 patient declined again\n3. Flu and COVID vaccines given today\n4. Annual PFTs scheduled\n5. RTC 6 months or PRN for exacerbation"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "CAP/Sepsis Assessment",
      "results": [
        {
          "test": "Lactate",
          "value": "3.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "24.6",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Procalcitonin",
          "value": "18.4",
          "unit": "ng/mL",
          "ref": "<0.25 (bacterial infection likely)",
          "flag": "H"
        },
        {
          "test": "Blood cultures x2",
          "value": "Pending \u2014 drawn before antibiotics",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Urine Legionella antigen",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Chest X-Ray",
      "findings": "Dense right lower lobe consolidation with air bronchograms. No effusion. No pneumothorax. Left lung clear.",
      "impression": "Right lower lobe pneumonia consistent with CAP. No empyema."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "11/15/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD125",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-725",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 \u2014 Prevnar 20)",
      "date": "04/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-112",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-305",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: CHF, COPD, deceased at 78",
    "Father: MI at 62, T2DM, deceased at 70",
    "Brother: COPD, CAD, alive at 71",
    "Sister: T2DM, alive at 68"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired electrician (IBEW)"
    ],
    [
      "Marital",
      "Married, 3 adult children"
    ],
    [
      "Tobacco",
      "Former smoker \u2014 40 pack-years; quit 2015"
    ],
    [
      "Alcohol",
      "1-2 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 15-20 min daily; limited by dyspnea"
    ],
    [
      "Housing",
      "Lives with wife in single-story home"
    ],
    [
      "Safety",
      "No firearms; home O2 not currently needed"
    ],
    [
      "Advance Directive",
      "Living will on file; HCP: wife Diane Higgins; DNR/DNI discussed but NOT elected \u2014 Full code"
    ]
  ],
  "meta": {
    "caseId": "cap-with-sepsis",
    "diagnosis": "Community-Acquired Pneumonia with Sepsis (Streptococcus pneumoniae)",
    "acuity": 2,
    "presentation": "Fever/Sepsis",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Walter appears fatigued and mildly anxious but cooperative. He's breathing somewhat laboriously and seems genuinely concerned about feeling worse than usual. He's forthcoming with information but occasionally needs prompting for details.",
    "interviewQuestions": [
      "When did you first start feeling unwell, and how have your symptoms progressed?",
      "Can you describe your breathing difficulties - how are they different from your usual COPD symptoms?",
      "Have you had any fever, chills, or night sweats recently?",
      "Are you producing any sputum or phlegm? If so, what color and consistency?",
      "Have you experienced any chest pain or discomfort?",
      "How has your energy level been lately? Any unusual fatigue or weakness?",
      "Have you had any nausea, vomiting, or changes in appetite?",
      "Any confusion or changes in your mental clarity?",
      "Have you been taking all your regular medications as prescribed?",
      "Any recent travel, sick contacts, or hospitalizations?",
      "How well have you been able to perform your usual daily activities?",
      "Any changes in urination or other symptoms?",
      "Have you used your rescue inhaler more than usual lately?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Could you ask it a different way?",
      "onset": "I started feeling run down about 4 days ago. At first I thought it was just my usual breathing acting up, but yesterday I started feeling feverish and really weak. This morning I could barely get out of bed.",
      "character": "My breathing feels different than usual - it's harder work and I feel like I can't get enough air even when I'm just sitting. I've also been having some aching in my chest when I cough.",
      "location": "The chest discomfort is mostly on my right side, kind of deep inside. It's not like the heart pain I had before my surgery.",
      "severity": "The breathing trouble is probably a 7 out of 10 - much worse than my usual 3 or 4. The fatigue is really bad, maybe an 8. I can barely make it to the bathroom without getting winded.",
      "aggravating": "Any movement makes the breathing worse. Lying flat makes it harder to breathe. Coughing really brings on the chest pain.",
      "relieving": "My rescue inhaler helps a little bit but not like it usually does. Sitting up helps some with the breathing.",
      "associated": "I've had chills and felt feverish, been coughing up thick yellowish-green mucus, and I'm so tired I can barely function. My appetite is gone and I've been a bit confused about what day it is.",
      "denies": "No chest pain like my heart problems, no leg swelling, no blood in the sputum, and no severe headache.",
      "history": "I've had COPD flares before, but this feels different. I've never felt this sick and weak with my breathing problems. Had pneumonia once about 10 years ago but it wasn't this bad.",
      "medications": "Fluticasone-Salmeterol (Advair Diskus) 250/50 BID; Tiotropium (Spiriva HandiHaler) 18mcg daily; Albuterol HFA 90mcg PRN; Metoprolol Succinate 50mg daily; Lisinopril 20mg daily; Aspirin 81mg daily; Atorvastatin 40mg QHS; Metformin 1000mg BID",
      "allergies": "Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
      "family": "My mother had COPD and lung problems, and my father and brother both had heart disease. My mother died of breathing and heart problems.",
      "social": "I'm a retired electrician, been married 45 years with three kids. I smoked for 40 years but quit about 8 years ago. I have a couple beers on weekends but nothing heavy. No illegal drugs."
    },
    "examManeuvers": [
      "General appearance and mental status",
      "Vital signs including orthostatics",
      "Pulmonary examination including percussion",
      "Cardiac examination",
      "Lymph node examination",
      "Abdominal examination",
      "Extremity examination for edema and perfusion",
      "Neurological assessment",
      "Skin examination"
    ],
    "examFindings": {
      "General appearance and mental status": "Ill-appearing elderly male in mild respiratory distress, alert but appears fatigued and mildly confused about date",
      "Vital signs including orthostatics": "BP 102/58 (orthostatic drop), HR 98, RR 24, Temp 101.8\u00b0F, SpO2 88% on room air",
      "Pulmonary examination including percussion": "Dullness to percussion over right lower lobe, decreased breath sounds and bronchial breathing right base, inspiratory crackles right lower lobe",
      "Cardiac examination": "Tachycardic regular rhythm, no murmurs, rubs, or gallops, normal S1/S2",
      "Lymph node examination": "No palpable lymphadenopathy",
      "Abdominal examination": "Soft, non-tender, no organomegaly, normal bowel sounds",
      "Extremity examination for edema and perfusion": "No peripheral edema, capillary refill 3 seconds, pulses present but weak",
      "Neurological assessment": "Alert, oriented to person and place but not time, no focal neurological deficits",
      "Skin examination": "Warm and dry, no rashes or lesions, mild pallor"
    },
    "ddxTargets": [
      "CAP with sepsis \u2014 S. pneumoniae (correct)",
      "Aspiration pneumonia \u2014 alcoholism, dysphagia, poor dentition; dependent segments; different flora coverage",
      "Legionella pneumonia \u2014 Legionella antigen negative; atypical features (GI, neurologic); no response to beta-lactam alone",
      "Hospital-acquired pneumonia \u2014 onset >48h after admission; broader Gram-negative coverage needed",
      "PE with infarction \u2014 pleuritic pain; wedge-shaped opacity; CTA distinguishes",
      "ARDS \u2014 bilateral infiltrates; different mechanism; CAP can trigger ARDS"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on COPD exacerbation given patient's history, missing signs of pneumonia and sepsis",
      "prematureClosure": "May stop at COPD flare without considering infectious etiology and systemic illness severity",
      "availabilityBias": "Recent COPD cases may overshadow recognition of pneumonia with septic presentation"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given this patient's presentation, what specific historical elements would help you distinguish between a COPD exacerbation and pneumonia? How might his multiple comorbidities affect your assessment?",
      "phase5": "Now that you've gathered your history and exam findings, let's think about the clinical picture. What combination of findings suggests this goes beyond a simple COPD exacerbation? Consider his vital signs, mental status, and physical findings - what scoring system might help you assess severity?",
      "finalDebrief": "This case demonstrates how pneumonia in elderly patients with COPD can present with sepsis. The CURB-65 score of 3 indicated high risk requiring hospitalization. Notice how the initial presentation could easily be mistaken for COPD exacerbation, but the fever, purulent sputum, focal exam findings, and septic physiology pointed to bacterial pneumonia. What would have happened if we anchored on COPD alone?",
      "final": "Diagnosis: CAP with sepsis. Key learning: (1) CAP severity scoring: PORT/PSI (pneumonia severity index) \u2014 5 classes; Class IV-V = hospitalize, consider ICU. CURB-65: confusion + urea >7 + RR >30 + BP <90/60 + age \u226565; score \u22653 = severe. This patient: CURB-65 = 4 (age, BP, RR, O2). (2) Empiric antibiotic selection: outpatient (healthy): amoxicillin or doxycycline. Hospitalized non-severe: beta-lactam + macrolide (or respiratory fluoroquinolone). Hospitalized severe/ICU: beta-lactam + macrolide (or azithromycin) \u2014 dual coverage for atypical organisms reduces mortality. (3) Sepsis bundles (1-hour): draw blood cultures, give antibiotics, measure lactate, give 30mL/kg crystalloid if lactate >4 or hypotensive, vasopressor if MAP <65 after fluids. Time to antibiotics is the most impactful metric. (4) S. pneumoniae remains the most common bacterial cause of CAP. Gram-positive diplococcus on Gram stain. Pneumococcal urinary antigen test is rapid and specific. (5) Procalcitonin: elevated in bacterial infection, suppressed in viral pneumonia. Useful for antibiotic stewardship \u2014 guides discontinuation when normalizing. Not useful for initial antibiotic decision in severe CAP."
    }
  }
};
